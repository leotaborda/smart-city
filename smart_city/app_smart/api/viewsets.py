from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from app_smart.api import serializers
from rest_framework import status, viewsets
from ..models import Sensor, TemperaturaData, UmidadeData, LuminosidadeData, ContadorData
from app_smart.api.filters import SensorFilter, TemperaturaDataFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.http import JsonResponse
from django.views import View



class CreateUserAPIViewSet(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    # permission_classes = [IsAdminUser]
    # Eu comentei o "permission_classes" porque com ele não conseguia acessar os dados da api pelo backend porque ele exigia autenticação
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = serializers.SensorSerializer
    #permission_classes = [IsAuthenticated]

    filter_backends = [DjangoFilterBackend]
    filterset_class = SensorFilter
    
class TemperaturaDataViewSet(viewsets.ModelViewSet):
    queryset = TemperaturaData.objects.all()
    serializer_class = serializers.TemperaturaDataSerializer
    #permission_classes = [IsAuthenticated]
    
    filter_backends = [DjangoFilterBackend]
    filterset_class = TemperaturaDataFilter
    
class UmidadeDataViewSet(viewsets.ModelViewSet):
    queryset = UmidadeData.objects.all()
    serializer_class = serializers.UmidadeDataSerializer
    # permission_classes = [IsAuthenticated]

class LuminosidadeDataViewSet(viewsets.ModelViewSet):
    queryset = LuminosidadeData.objects.all()
    serializer_class = serializers.LuminosidadeDataSerializer
    #permission_classes = [permissions.IsAuthenticated]

class ContadorDataViewSet(viewsets.ModelViewSet):
    queryset = ContadorData.objects.all()
    serializer_class = serializers.ContadorDataSerializer
    #permission_classes = [permissions.IsAuthenticated]

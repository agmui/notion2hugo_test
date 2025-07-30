---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLABLD3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE78SBRkzANIRuLGnbCRm9rZH%2FchRrTDjnO1tfqJEz1qAiBuTqiDjO7d05jmhMNWIVtoiFAgNfd76uOgwZUAzZsqJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqZB9rxxWrG4CYTbKtwDbGHLV2qlBe4IK%2BcOS66Hwb4ACXBsmaIMG2HvtyPXF%2FEznHaTnDP8G4Jd5cBBwQ6I8v3uotONa0XrKeRKU2bfrLAQzJj1PxxKfgF1S66dG8AwgN2%2BWKVFUtmXqNuIXmF6cG9KnVkagZw1rijpmFG%2Fnk03NWC578qpIfnIJf14Jwgng3wGxK00A4NBiqaR%2FNZOBTGzr%2Bwr36Djw9NOCftoTsGrPOHHzfgSREwL4eZiF89r9JR1XvT4rkJkjidLdmf79WD1GKl4MrtmgvlNp5SrZSjq%2BAbZ2uS7Z5JyP4TzMOj%2BIV%2FrLED1aJtmLev6kAlq81mx%2BjKEsibX7AzRUSqTMEPUW9u183NaZxyeK1Z3MMfjAQIEludy7h0u7ILgh30onXq8JWjqJIAGMOtQrN3P1qSPCSjuSeaqRNRTSeLs%2Bz%2B2flyqo6UmCUTCg5SV%2Fb5lUDAjcc7dBPIXexW6m7vP8OOnR8c3YmJTzjHM%2BdaE6%2BEJd7J92U8XKS7gxfjxuTwlZUIJHpSIQ2kt%2BFotF7il2B0RAeoRiNAPLb98ut892Nb5FlYFlhUUAsTfLEZfnimppdpDhPlg17Vnjic8oDZAu9Sn6UdmN48F7g2OBUUi%2F3LZPuqv%2BjK%2ByeVEczYw18GnxAY6pgE80enOD2XH4YNsMTXaTZJyF8AxV5E%2BDDQ65nxXRpBAMEgaMu85cP6w0KbljWBWZI8r%2FQoVnVDYbCz8FmgIZFPUVI5usBNcrHAblmGEcU8xlRLy6JXUF0Ojw5RBYf5KvGivnQ1BrCdCB%2FP1faDZVgPPlTf5O0kImiwx%2F3meZSiTeNaBSnQu0EbTgoXee9dzVBuMrPy%2BHRdFBbellPMQQpmuXNS9TYhh&X-Amz-Signature=53d212d822ad30c712938f0349bbfe8d1aeadf6c91098edad8983cdae690ea1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLABLD3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE78SBRkzANIRuLGnbCRm9rZH%2FchRrTDjnO1tfqJEz1qAiBuTqiDjO7d05jmhMNWIVtoiFAgNfd76uOgwZUAzZsqJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqZB9rxxWrG4CYTbKtwDbGHLV2qlBe4IK%2BcOS66Hwb4ACXBsmaIMG2HvtyPXF%2FEznHaTnDP8G4Jd5cBBwQ6I8v3uotONa0XrKeRKU2bfrLAQzJj1PxxKfgF1S66dG8AwgN2%2BWKVFUtmXqNuIXmF6cG9KnVkagZw1rijpmFG%2Fnk03NWC578qpIfnIJf14Jwgng3wGxK00A4NBiqaR%2FNZOBTGzr%2Bwr36Djw9NOCftoTsGrPOHHzfgSREwL4eZiF89r9JR1XvT4rkJkjidLdmf79WD1GKl4MrtmgvlNp5SrZSjq%2BAbZ2uS7Z5JyP4TzMOj%2BIV%2FrLED1aJtmLev6kAlq81mx%2BjKEsibX7AzRUSqTMEPUW9u183NaZxyeK1Z3MMfjAQIEludy7h0u7ILgh30onXq8JWjqJIAGMOtQrN3P1qSPCSjuSeaqRNRTSeLs%2Bz%2B2flyqo6UmCUTCg5SV%2Fb5lUDAjcc7dBPIXexW6m7vP8OOnR8c3YmJTzjHM%2BdaE6%2BEJd7J92U8XKS7gxfjxuTwlZUIJHpSIQ2kt%2BFotF7il2B0RAeoRiNAPLb98ut892Nb5FlYFlhUUAsTfLEZfnimppdpDhPlg17Vnjic8oDZAu9Sn6UdmN48F7g2OBUUi%2F3LZPuqv%2BjK%2ByeVEczYw18GnxAY6pgE80enOD2XH4YNsMTXaTZJyF8AxV5E%2BDDQ65nxXRpBAMEgaMu85cP6w0KbljWBWZI8r%2FQoVnVDYbCz8FmgIZFPUVI5usBNcrHAblmGEcU8xlRLy6JXUF0Ojw5RBYf5KvGivnQ1BrCdCB%2FP1faDZVgPPlTf5O0kImiwx%2F3meZSiTeNaBSnQu0EbTgoXee9dzVBuMrPy%2BHRdFBbellPMQQpmuXNS9TYhh&X-Amz-Signature=b395a6859711ba68d238fcf7055420f06195b51be9277c0e71c49b311f6e8614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLABLD3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE78SBRkzANIRuLGnbCRm9rZH%2FchRrTDjnO1tfqJEz1qAiBuTqiDjO7d05jmhMNWIVtoiFAgNfd76uOgwZUAzZsqJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqZB9rxxWrG4CYTbKtwDbGHLV2qlBe4IK%2BcOS66Hwb4ACXBsmaIMG2HvtyPXF%2FEznHaTnDP8G4Jd5cBBwQ6I8v3uotONa0XrKeRKU2bfrLAQzJj1PxxKfgF1S66dG8AwgN2%2BWKVFUtmXqNuIXmF6cG9KnVkagZw1rijpmFG%2Fnk03NWC578qpIfnIJf14Jwgng3wGxK00A4NBiqaR%2FNZOBTGzr%2Bwr36Djw9NOCftoTsGrPOHHzfgSREwL4eZiF89r9JR1XvT4rkJkjidLdmf79WD1GKl4MrtmgvlNp5SrZSjq%2BAbZ2uS7Z5JyP4TzMOj%2BIV%2FrLED1aJtmLev6kAlq81mx%2BjKEsibX7AzRUSqTMEPUW9u183NaZxyeK1Z3MMfjAQIEludy7h0u7ILgh30onXq8JWjqJIAGMOtQrN3P1qSPCSjuSeaqRNRTSeLs%2Bz%2B2flyqo6UmCUTCg5SV%2Fb5lUDAjcc7dBPIXexW6m7vP8OOnR8c3YmJTzjHM%2BdaE6%2BEJd7J92U8XKS7gxfjxuTwlZUIJHpSIQ2kt%2BFotF7il2B0RAeoRiNAPLb98ut892Nb5FlYFlhUUAsTfLEZfnimppdpDhPlg17Vnjic8oDZAu9Sn6UdmN48F7g2OBUUi%2F3LZPuqv%2BjK%2ByeVEczYw18GnxAY6pgE80enOD2XH4YNsMTXaTZJyF8AxV5E%2BDDQ65nxXRpBAMEgaMu85cP6w0KbljWBWZI8r%2FQoVnVDYbCz8FmgIZFPUVI5usBNcrHAblmGEcU8xlRLy6JXUF0Ojw5RBYf5KvGivnQ1BrCdCB%2FP1faDZVgPPlTf5O0kImiwx%2F3meZSiTeNaBSnQu0EbTgoXee9dzVBuMrPy%2BHRdFBbellPMQQpmuXNS9TYhh&X-Amz-Signature=e0f32da9d8797dcbfd2c935e554531a505bd72b77b203570adc56f8e222eea2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLABLD3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE78SBRkzANIRuLGnbCRm9rZH%2FchRrTDjnO1tfqJEz1qAiBuTqiDjO7d05jmhMNWIVtoiFAgNfd76uOgwZUAzZsqJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqZB9rxxWrG4CYTbKtwDbGHLV2qlBe4IK%2BcOS66Hwb4ACXBsmaIMG2HvtyPXF%2FEznHaTnDP8G4Jd5cBBwQ6I8v3uotONa0XrKeRKU2bfrLAQzJj1PxxKfgF1S66dG8AwgN2%2BWKVFUtmXqNuIXmF6cG9KnVkagZw1rijpmFG%2Fnk03NWC578qpIfnIJf14Jwgng3wGxK00A4NBiqaR%2FNZOBTGzr%2Bwr36Djw9NOCftoTsGrPOHHzfgSREwL4eZiF89r9JR1XvT4rkJkjidLdmf79WD1GKl4MrtmgvlNp5SrZSjq%2BAbZ2uS7Z5JyP4TzMOj%2BIV%2FrLED1aJtmLev6kAlq81mx%2BjKEsibX7AzRUSqTMEPUW9u183NaZxyeK1Z3MMfjAQIEludy7h0u7ILgh30onXq8JWjqJIAGMOtQrN3P1qSPCSjuSeaqRNRTSeLs%2Bz%2B2flyqo6UmCUTCg5SV%2Fb5lUDAjcc7dBPIXexW6m7vP8OOnR8c3YmJTzjHM%2BdaE6%2BEJd7J92U8XKS7gxfjxuTwlZUIJHpSIQ2kt%2BFotF7il2B0RAeoRiNAPLb98ut892Nb5FlYFlhUUAsTfLEZfnimppdpDhPlg17Vnjic8oDZAu9Sn6UdmN48F7g2OBUUi%2F3LZPuqv%2BjK%2ByeVEczYw18GnxAY6pgE80enOD2XH4YNsMTXaTZJyF8AxV5E%2BDDQ65nxXRpBAMEgaMu85cP6w0KbljWBWZI8r%2FQoVnVDYbCz8FmgIZFPUVI5usBNcrHAblmGEcU8xlRLy6JXUF0Ojw5RBYf5KvGivnQ1BrCdCB%2FP1faDZVgPPlTf5O0kImiwx%2F3meZSiTeNaBSnQu0EbTgoXee9dzVBuMrPy%2BHRdFBbellPMQQpmuXNS9TYhh&X-Amz-Signature=6dd8c033df89f2305eace919c32d4fc12acda500d4fd9aec306d8bf57e8d2fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLABLD3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE78SBRkzANIRuLGnbCRm9rZH%2FchRrTDjnO1tfqJEz1qAiBuTqiDjO7d05jmhMNWIVtoiFAgNfd76uOgwZUAzZsqJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqZB9rxxWrG4CYTbKtwDbGHLV2qlBe4IK%2BcOS66Hwb4ACXBsmaIMG2HvtyPXF%2FEznHaTnDP8G4Jd5cBBwQ6I8v3uotONa0XrKeRKU2bfrLAQzJj1PxxKfgF1S66dG8AwgN2%2BWKVFUtmXqNuIXmF6cG9KnVkagZw1rijpmFG%2Fnk03NWC578qpIfnIJf14Jwgng3wGxK00A4NBiqaR%2FNZOBTGzr%2Bwr36Djw9NOCftoTsGrPOHHzfgSREwL4eZiF89r9JR1XvT4rkJkjidLdmf79WD1GKl4MrtmgvlNp5SrZSjq%2BAbZ2uS7Z5JyP4TzMOj%2BIV%2FrLED1aJtmLev6kAlq81mx%2BjKEsibX7AzRUSqTMEPUW9u183NaZxyeK1Z3MMfjAQIEludy7h0u7ILgh30onXq8JWjqJIAGMOtQrN3P1qSPCSjuSeaqRNRTSeLs%2Bz%2B2flyqo6UmCUTCg5SV%2Fb5lUDAjcc7dBPIXexW6m7vP8OOnR8c3YmJTzjHM%2BdaE6%2BEJd7J92U8XKS7gxfjxuTwlZUIJHpSIQ2kt%2BFotF7il2B0RAeoRiNAPLb98ut892Nb5FlYFlhUUAsTfLEZfnimppdpDhPlg17Vnjic8oDZAu9Sn6UdmN48F7g2OBUUi%2F3LZPuqv%2BjK%2ByeVEczYw18GnxAY6pgE80enOD2XH4YNsMTXaTZJyF8AxV5E%2BDDQ65nxXRpBAMEgaMu85cP6w0KbljWBWZI8r%2FQoVnVDYbCz8FmgIZFPUVI5usBNcrHAblmGEcU8xlRLy6JXUF0Ojw5RBYf5KvGivnQ1BrCdCB%2FP1faDZVgPPlTf5O0kImiwx%2F3meZSiTeNaBSnQu0EbTgoXee9dzVBuMrPy%2BHRdFBbellPMQQpmuXNS9TYhh&X-Amz-Signature=bceec978d6a523f5018ba4beb5f11ed1de389e8a80bbaa998978bf19ffea6835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLABLD3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE78SBRkzANIRuLGnbCRm9rZH%2FchRrTDjnO1tfqJEz1qAiBuTqiDjO7d05jmhMNWIVtoiFAgNfd76uOgwZUAzZsqJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqZB9rxxWrG4CYTbKtwDbGHLV2qlBe4IK%2BcOS66Hwb4ACXBsmaIMG2HvtyPXF%2FEznHaTnDP8G4Jd5cBBwQ6I8v3uotONa0XrKeRKU2bfrLAQzJj1PxxKfgF1S66dG8AwgN2%2BWKVFUtmXqNuIXmF6cG9KnVkagZw1rijpmFG%2Fnk03NWC578qpIfnIJf14Jwgng3wGxK00A4NBiqaR%2FNZOBTGzr%2Bwr36Djw9NOCftoTsGrPOHHzfgSREwL4eZiF89r9JR1XvT4rkJkjidLdmf79WD1GKl4MrtmgvlNp5SrZSjq%2BAbZ2uS7Z5JyP4TzMOj%2BIV%2FrLED1aJtmLev6kAlq81mx%2BjKEsibX7AzRUSqTMEPUW9u183NaZxyeK1Z3MMfjAQIEludy7h0u7ILgh30onXq8JWjqJIAGMOtQrN3P1qSPCSjuSeaqRNRTSeLs%2Bz%2B2flyqo6UmCUTCg5SV%2Fb5lUDAjcc7dBPIXexW6m7vP8OOnR8c3YmJTzjHM%2BdaE6%2BEJd7J92U8XKS7gxfjxuTwlZUIJHpSIQ2kt%2BFotF7il2B0RAeoRiNAPLb98ut892Nb5FlYFlhUUAsTfLEZfnimppdpDhPlg17Vnjic8oDZAu9Sn6UdmN48F7g2OBUUi%2F3LZPuqv%2BjK%2ByeVEczYw18GnxAY6pgE80enOD2XH4YNsMTXaTZJyF8AxV5E%2BDDQ65nxXRpBAMEgaMu85cP6w0KbljWBWZI8r%2FQoVnVDYbCz8FmgIZFPUVI5usBNcrHAblmGEcU8xlRLy6JXUF0Ojw5RBYf5KvGivnQ1BrCdCB%2FP1faDZVgPPlTf5O0kImiwx%2F3meZSiTeNaBSnQu0EbTgoXee9dzVBuMrPy%2BHRdFBbellPMQQpmuXNS9TYhh&X-Amz-Signature=5b04b2889bffdab5c99cb35d69fec9a3cf1d7a2d17e3806c7a4694159a1149fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLABLD3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE78SBRkzANIRuLGnbCRm9rZH%2FchRrTDjnO1tfqJEz1qAiBuTqiDjO7d05jmhMNWIVtoiFAgNfd76uOgwZUAzZsqJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqZB9rxxWrG4CYTbKtwDbGHLV2qlBe4IK%2BcOS66Hwb4ACXBsmaIMG2HvtyPXF%2FEznHaTnDP8G4Jd5cBBwQ6I8v3uotONa0XrKeRKU2bfrLAQzJj1PxxKfgF1S66dG8AwgN2%2BWKVFUtmXqNuIXmF6cG9KnVkagZw1rijpmFG%2Fnk03NWC578qpIfnIJf14Jwgng3wGxK00A4NBiqaR%2FNZOBTGzr%2Bwr36Djw9NOCftoTsGrPOHHzfgSREwL4eZiF89r9JR1XvT4rkJkjidLdmf79WD1GKl4MrtmgvlNp5SrZSjq%2BAbZ2uS7Z5JyP4TzMOj%2BIV%2FrLED1aJtmLev6kAlq81mx%2BjKEsibX7AzRUSqTMEPUW9u183NaZxyeK1Z3MMfjAQIEludy7h0u7ILgh30onXq8JWjqJIAGMOtQrN3P1qSPCSjuSeaqRNRTSeLs%2Bz%2B2flyqo6UmCUTCg5SV%2Fb5lUDAjcc7dBPIXexW6m7vP8OOnR8c3YmJTzjHM%2BdaE6%2BEJd7J92U8XKS7gxfjxuTwlZUIJHpSIQ2kt%2BFotF7il2B0RAeoRiNAPLb98ut892Nb5FlYFlhUUAsTfLEZfnimppdpDhPlg17Vnjic8oDZAu9Sn6UdmN48F7g2OBUUi%2F3LZPuqv%2BjK%2ByeVEczYw18GnxAY6pgE80enOD2XH4YNsMTXaTZJyF8AxV5E%2BDDQ65nxXRpBAMEgaMu85cP6w0KbljWBWZI8r%2FQoVnVDYbCz8FmgIZFPUVI5usBNcrHAblmGEcU8xlRLy6JXUF0Ojw5RBYf5KvGivnQ1BrCdCB%2FP1faDZVgPPlTf5O0kImiwx%2F3meZSiTeNaBSnQu0EbTgoXee9dzVBuMrPy%2BHRdFBbellPMQQpmuXNS9TYhh&X-Amz-Signature=f2f5b55055d591ab9bc36c913062e4dff7e04951d7fb51a24f6d80791de6cc8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLABLD3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE78SBRkzANIRuLGnbCRm9rZH%2FchRrTDjnO1tfqJEz1qAiBuTqiDjO7d05jmhMNWIVtoiFAgNfd76uOgwZUAzZsqJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqZB9rxxWrG4CYTbKtwDbGHLV2qlBe4IK%2BcOS66Hwb4ACXBsmaIMG2HvtyPXF%2FEznHaTnDP8G4Jd5cBBwQ6I8v3uotONa0XrKeRKU2bfrLAQzJj1PxxKfgF1S66dG8AwgN2%2BWKVFUtmXqNuIXmF6cG9KnVkagZw1rijpmFG%2Fnk03NWC578qpIfnIJf14Jwgng3wGxK00A4NBiqaR%2FNZOBTGzr%2Bwr36Djw9NOCftoTsGrPOHHzfgSREwL4eZiF89r9JR1XvT4rkJkjidLdmf79WD1GKl4MrtmgvlNp5SrZSjq%2BAbZ2uS7Z5JyP4TzMOj%2BIV%2FrLED1aJtmLev6kAlq81mx%2BjKEsibX7AzRUSqTMEPUW9u183NaZxyeK1Z3MMfjAQIEludy7h0u7ILgh30onXq8JWjqJIAGMOtQrN3P1qSPCSjuSeaqRNRTSeLs%2Bz%2B2flyqo6UmCUTCg5SV%2Fb5lUDAjcc7dBPIXexW6m7vP8OOnR8c3YmJTzjHM%2BdaE6%2BEJd7J92U8XKS7gxfjxuTwlZUIJHpSIQ2kt%2BFotF7il2B0RAeoRiNAPLb98ut892Nb5FlYFlhUUAsTfLEZfnimppdpDhPlg17Vnjic8oDZAu9Sn6UdmN48F7g2OBUUi%2F3LZPuqv%2BjK%2ByeVEczYw18GnxAY6pgE80enOD2XH4YNsMTXaTZJyF8AxV5E%2BDDQ65nxXRpBAMEgaMu85cP6w0KbljWBWZI8r%2FQoVnVDYbCz8FmgIZFPUVI5usBNcrHAblmGEcU8xlRLy6JXUF0Ojw5RBYf5KvGivnQ1BrCdCB%2FP1faDZVgPPlTf5O0kImiwx%2F3meZSiTeNaBSnQu0EbTgoXee9dzVBuMrPy%2BHRdFBbellPMQQpmuXNS9TYhh&X-Amz-Signature=71072211ed5ae5c4097ad3450470001a698600e65ab75114e5e9f3954253bd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

TODO: get official docs link

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLABLD3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE78SBRkzANIRuLGnbCRm9rZH%2FchRrTDjnO1tfqJEz1qAiBuTqiDjO7d05jmhMNWIVtoiFAgNfd76uOgwZUAzZsqJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqZB9rxxWrG4CYTbKtwDbGHLV2qlBe4IK%2BcOS66Hwb4ACXBsmaIMG2HvtyPXF%2FEznHaTnDP8G4Jd5cBBwQ6I8v3uotONa0XrKeRKU2bfrLAQzJj1PxxKfgF1S66dG8AwgN2%2BWKVFUtmXqNuIXmF6cG9KnVkagZw1rijpmFG%2Fnk03NWC578qpIfnIJf14Jwgng3wGxK00A4NBiqaR%2FNZOBTGzr%2Bwr36Djw9NOCftoTsGrPOHHzfgSREwL4eZiF89r9JR1XvT4rkJkjidLdmf79WD1GKl4MrtmgvlNp5SrZSjq%2BAbZ2uS7Z5JyP4TzMOj%2BIV%2FrLED1aJtmLev6kAlq81mx%2BjKEsibX7AzRUSqTMEPUW9u183NaZxyeK1Z3MMfjAQIEludy7h0u7ILgh30onXq8JWjqJIAGMOtQrN3P1qSPCSjuSeaqRNRTSeLs%2Bz%2B2flyqo6UmCUTCg5SV%2Fb5lUDAjcc7dBPIXexW6m7vP8OOnR8c3YmJTzjHM%2BdaE6%2BEJd7J92U8XKS7gxfjxuTwlZUIJHpSIQ2kt%2BFotF7il2B0RAeoRiNAPLb98ut892Nb5FlYFlhUUAsTfLEZfnimppdpDhPlg17Vnjic8oDZAu9Sn6UdmN48F7g2OBUUi%2F3LZPuqv%2BjK%2ByeVEczYw18GnxAY6pgE80enOD2XH4YNsMTXaTZJyF8AxV5E%2BDDQ65nxXRpBAMEgaMu85cP6w0KbljWBWZI8r%2FQoVnVDYbCz8FmgIZFPUVI5usBNcrHAblmGEcU8xlRLy6JXUF0Ojw5RBYf5KvGivnQ1BrCdCB%2FP1faDZVgPPlTf5O0kImiwx%2F3meZSiTeNaBSnQu0EbTgoXee9dzVBuMrPy%2BHRdFBbellPMQQpmuXNS9TYhh&X-Amz-Signature=139223ef3c5de2db35a4e3199a7b2f42ff721973454011ce309f86e9ed5d6e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLABLD3U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE78SBRkzANIRuLGnbCRm9rZH%2FchRrTDjnO1tfqJEz1qAiBuTqiDjO7d05jmhMNWIVtoiFAgNfd76uOgwZUAzZsqJyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqZB9rxxWrG4CYTbKtwDbGHLV2qlBe4IK%2BcOS66Hwb4ACXBsmaIMG2HvtyPXF%2FEznHaTnDP8G4Jd5cBBwQ6I8v3uotONa0XrKeRKU2bfrLAQzJj1PxxKfgF1S66dG8AwgN2%2BWKVFUtmXqNuIXmF6cG9KnVkagZw1rijpmFG%2Fnk03NWC578qpIfnIJf14Jwgng3wGxK00A4NBiqaR%2FNZOBTGzr%2Bwr36Djw9NOCftoTsGrPOHHzfgSREwL4eZiF89r9JR1XvT4rkJkjidLdmf79WD1GKl4MrtmgvlNp5SrZSjq%2BAbZ2uS7Z5JyP4TzMOj%2BIV%2FrLED1aJtmLev6kAlq81mx%2BjKEsibX7AzRUSqTMEPUW9u183NaZxyeK1Z3MMfjAQIEludy7h0u7ILgh30onXq8JWjqJIAGMOtQrN3P1qSPCSjuSeaqRNRTSeLs%2Bz%2B2flyqo6UmCUTCg5SV%2Fb5lUDAjcc7dBPIXexW6m7vP8OOnR8c3YmJTzjHM%2BdaE6%2BEJd7J92U8XKS7gxfjxuTwlZUIJHpSIQ2kt%2BFotF7il2B0RAeoRiNAPLb98ut892Nb5FlYFlhUUAsTfLEZfnimppdpDhPlg17Vnjic8oDZAu9Sn6UdmN48F7g2OBUUi%2F3LZPuqv%2BjK%2ByeVEczYw18GnxAY6pgE80enOD2XH4YNsMTXaTZJyF8AxV5E%2BDDQ65nxXRpBAMEgaMu85cP6w0KbljWBWZI8r%2FQoVnVDYbCz8FmgIZFPUVI5usBNcrHAblmGEcU8xlRLy6JXUF0Ojw5RBYf5KvGivnQ1BrCdCB%2FP1faDZVgPPlTf5O0kImiwx%2F3meZSiTeNaBSnQu0EbTgoXee9dzVBuMrPy%2BHRdFBbellPMQQpmuXNS9TYhh&X-Amz-Signature=1fb716cfda7bb9ec55ac47b7c9790064e77fbc289f2ce35a478cdbc3d968cc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

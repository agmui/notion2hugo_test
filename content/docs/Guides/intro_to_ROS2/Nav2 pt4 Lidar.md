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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54AQPIS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3WYsDl%2FEGgn1z1yYFODEHzp0xtqRRRMaI3YDnyoBNAiA3gjP2Uo0uXhuFz3%2BJSdo4TogdfzytNQ%2F7GlD9%2BZecniqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Sc6%2B5efo0a%2B%2BbbeKtwDjs1Uhes6HSuvT6JpFPoeK%2Bz5VRVUjkQUbLxrCsK28A%2FXnCVTLVtZJIfqAh529mQp2CCutqwBr0CmehF%2FG3%2FfkwQAsJzNbr3tYmXhfkeHGydFHq7nm6PYfYIcX8x4VDLxwJ5Rc%2FhxdvejiOOJNFjVs7mTLDY0a86EL5jaSJ69K5BQxmzpysaY4MMDrHujVKGDMzucyJhcpxC2OhybqMaAQJceep4vcKgHksAESDdsrR2Cd2jEM5gUIHE5v%2BEGjs7js%2FEJc4yBKsBfBvR2o%2B3Ifs6DVIKP3fNxA%2B%2BRyB0N9AzI0ubDRbX6T9azRGTQtqCvvban3AaRdf9LlujJ8zxdkE0WbeDVeo0VBxuOa6GptSGCGyLFOIHL0umsIuzkvURCBJTSX4o2rIPH9OARKlPEwZ0pV6EA048iLUN8QCPGtpTFtRchD6iVEX4oZCph8LKxpqkv2VIICNyuxLENBfAiIjl7rO6ueIU6rwyzav1cxzHAtnZwQWhd%2FVV7a3iETD%2BFUKwOKLvS4bADqwRoKH9HGF2kTsYTzM6ZIRZkTFTatkVKZcrElkiNq86w0gEEDZFTDpufAIxauAOk3oPc2N1JBs2iVnv0VxILJfRLpYqzTONRPqbkDE46RSz27a8w48qrxAY6pgEyueaDNVNFgywVc5T4qrk8u1Wi9vKfQJP7C6wTsqFIWcxdi7IJPUKcOAH39v8uO1Pc0mav7qEmwZ0zESvxqiIoMvMb3D0VeJHhDeLzarfbFj65lx3uMJ1AxDfzeZuNdubUWkspQpFFhgoUCkWXfP1Ioxxsi%2F3kMNkqM1w5ROvrVANuWfr3Wdfk96wp6jCEN3vZt4qOhDNgzUz1xdVKFFuMLxou%2FSOp&X-Amz-Signature=3cc5f2cd3798d07850d3d637e17c573ca4586df07031bbb5df1cb21c22c0c5a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54AQPIS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3WYsDl%2FEGgn1z1yYFODEHzp0xtqRRRMaI3YDnyoBNAiA3gjP2Uo0uXhuFz3%2BJSdo4TogdfzytNQ%2F7GlD9%2BZecniqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Sc6%2B5efo0a%2B%2BbbeKtwDjs1Uhes6HSuvT6JpFPoeK%2Bz5VRVUjkQUbLxrCsK28A%2FXnCVTLVtZJIfqAh529mQp2CCutqwBr0CmehF%2FG3%2FfkwQAsJzNbr3tYmXhfkeHGydFHq7nm6PYfYIcX8x4VDLxwJ5Rc%2FhxdvejiOOJNFjVs7mTLDY0a86EL5jaSJ69K5BQxmzpysaY4MMDrHujVKGDMzucyJhcpxC2OhybqMaAQJceep4vcKgHksAESDdsrR2Cd2jEM5gUIHE5v%2BEGjs7js%2FEJc4yBKsBfBvR2o%2B3Ifs6DVIKP3fNxA%2B%2BRyB0N9AzI0ubDRbX6T9azRGTQtqCvvban3AaRdf9LlujJ8zxdkE0WbeDVeo0VBxuOa6GptSGCGyLFOIHL0umsIuzkvURCBJTSX4o2rIPH9OARKlPEwZ0pV6EA048iLUN8QCPGtpTFtRchD6iVEX4oZCph8LKxpqkv2VIICNyuxLENBfAiIjl7rO6ueIU6rwyzav1cxzHAtnZwQWhd%2FVV7a3iETD%2BFUKwOKLvS4bADqwRoKH9HGF2kTsYTzM6ZIRZkTFTatkVKZcrElkiNq86w0gEEDZFTDpufAIxauAOk3oPc2N1JBs2iVnv0VxILJfRLpYqzTONRPqbkDE46RSz27a8w48qrxAY6pgEyueaDNVNFgywVc5T4qrk8u1Wi9vKfQJP7C6wTsqFIWcxdi7IJPUKcOAH39v8uO1Pc0mav7qEmwZ0zESvxqiIoMvMb3D0VeJHhDeLzarfbFj65lx3uMJ1AxDfzeZuNdubUWkspQpFFhgoUCkWXfP1Ioxxsi%2F3kMNkqM1w5ROvrVANuWfr3Wdfk96wp6jCEN3vZt4qOhDNgzUz1xdVKFFuMLxou%2FSOp&X-Amz-Signature=ba691d01f9c4b4f302ca322d26cdee995df6f7195c92e36131fd492c63f08c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54AQPIS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3WYsDl%2FEGgn1z1yYFODEHzp0xtqRRRMaI3YDnyoBNAiA3gjP2Uo0uXhuFz3%2BJSdo4TogdfzytNQ%2F7GlD9%2BZecniqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Sc6%2B5efo0a%2B%2BbbeKtwDjs1Uhes6HSuvT6JpFPoeK%2Bz5VRVUjkQUbLxrCsK28A%2FXnCVTLVtZJIfqAh529mQp2CCutqwBr0CmehF%2FG3%2FfkwQAsJzNbr3tYmXhfkeHGydFHq7nm6PYfYIcX8x4VDLxwJ5Rc%2FhxdvejiOOJNFjVs7mTLDY0a86EL5jaSJ69K5BQxmzpysaY4MMDrHujVKGDMzucyJhcpxC2OhybqMaAQJceep4vcKgHksAESDdsrR2Cd2jEM5gUIHE5v%2BEGjs7js%2FEJc4yBKsBfBvR2o%2B3Ifs6DVIKP3fNxA%2B%2BRyB0N9AzI0ubDRbX6T9azRGTQtqCvvban3AaRdf9LlujJ8zxdkE0WbeDVeo0VBxuOa6GptSGCGyLFOIHL0umsIuzkvURCBJTSX4o2rIPH9OARKlPEwZ0pV6EA048iLUN8QCPGtpTFtRchD6iVEX4oZCph8LKxpqkv2VIICNyuxLENBfAiIjl7rO6ueIU6rwyzav1cxzHAtnZwQWhd%2FVV7a3iETD%2BFUKwOKLvS4bADqwRoKH9HGF2kTsYTzM6ZIRZkTFTatkVKZcrElkiNq86w0gEEDZFTDpufAIxauAOk3oPc2N1JBs2iVnv0VxILJfRLpYqzTONRPqbkDE46RSz27a8w48qrxAY6pgEyueaDNVNFgywVc5T4qrk8u1Wi9vKfQJP7C6wTsqFIWcxdi7IJPUKcOAH39v8uO1Pc0mav7qEmwZ0zESvxqiIoMvMb3D0VeJHhDeLzarfbFj65lx3uMJ1AxDfzeZuNdubUWkspQpFFhgoUCkWXfP1Ioxxsi%2F3kMNkqM1w5ROvrVANuWfr3Wdfk96wp6jCEN3vZt4qOhDNgzUz1xdVKFFuMLxou%2FSOp&X-Amz-Signature=f9b56f1b49d4a7d85e9b0e47a839d709012a8ebafe7a20b1b3097cba0c61dc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54AQPIS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3WYsDl%2FEGgn1z1yYFODEHzp0xtqRRRMaI3YDnyoBNAiA3gjP2Uo0uXhuFz3%2BJSdo4TogdfzytNQ%2F7GlD9%2BZecniqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Sc6%2B5efo0a%2B%2BbbeKtwDjs1Uhes6HSuvT6JpFPoeK%2Bz5VRVUjkQUbLxrCsK28A%2FXnCVTLVtZJIfqAh529mQp2CCutqwBr0CmehF%2FG3%2FfkwQAsJzNbr3tYmXhfkeHGydFHq7nm6PYfYIcX8x4VDLxwJ5Rc%2FhxdvejiOOJNFjVs7mTLDY0a86EL5jaSJ69K5BQxmzpysaY4MMDrHujVKGDMzucyJhcpxC2OhybqMaAQJceep4vcKgHksAESDdsrR2Cd2jEM5gUIHE5v%2BEGjs7js%2FEJc4yBKsBfBvR2o%2B3Ifs6DVIKP3fNxA%2B%2BRyB0N9AzI0ubDRbX6T9azRGTQtqCvvban3AaRdf9LlujJ8zxdkE0WbeDVeo0VBxuOa6GptSGCGyLFOIHL0umsIuzkvURCBJTSX4o2rIPH9OARKlPEwZ0pV6EA048iLUN8QCPGtpTFtRchD6iVEX4oZCph8LKxpqkv2VIICNyuxLENBfAiIjl7rO6ueIU6rwyzav1cxzHAtnZwQWhd%2FVV7a3iETD%2BFUKwOKLvS4bADqwRoKH9HGF2kTsYTzM6ZIRZkTFTatkVKZcrElkiNq86w0gEEDZFTDpufAIxauAOk3oPc2N1JBs2iVnv0VxILJfRLpYqzTONRPqbkDE46RSz27a8w48qrxAY6pgEyueaDNVNFgywVc5T4qrk8u1Wi9vKfQJP7C6wTsqFIWcxdi7IJPUKcOAH39v8uO1Pc0mav7qEmwZ0zESvxqiIoMvMb3D0VeJHhDeLzarfbFj65lx3uMJ1AxDfzeZuNdubUWkspQpFFhgoUCkWXfP1Ioxxsi%2F3kMNkqM1w5ROvrVANuWfr3Wdfk96wp6jCEN3vZt4qOhDNgzUz1xdVKFFuMLxou%2FSOp&X-Amz-Signature=f56b028008b748bdff0d3b41e69b1de5b7c2def30c6c893aa1cb98dfa93263f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54AQPIS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3WYsDl%2FEGgn1z1yYFODEHzp0xtqRRRMaI3YDnyoBNAiA3gjP2Uo0uXhuFz3%2BJSdo4TogdfzytNQ%2F7GlD9%2BZecniqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Sc6%2B5efo0a%2B%2BbbeKtwDjs1Uhes6HSuvT6JpFPoeK%2Bz5VRVUjkQUbLxrCsK28A%2FXnCVTLVtZJIfqAh529mQp2CCutqwBr0CmehF%2FG3%2FfkwQAsJzNbr3tYmXhfkeHGydFHq7nm6PYfYIcX8x4VDLxwJ5Rc%2FhxdvejiOOJNFjVs7mTLDY0a86EL5jaSJ69K5BQxmzpysaY4MMDrHujVKGDMzucyJhcpxC2OhybqMaAQJceep4vcKgHksAESDdsrR2Cd2jEM5gUIHE5v%2BEGjs7js%2FEJc4yBKsBfBvR2o%2B3Ifs6DVIKP3fNxA%2B%2BRyB0N9AzI0ubDRbX6T9azRGTQtqCvvban3AaRdf9LlujJ8zxdkE0WbeDVeo0VBxuOa6GptSGCGyLFOIHL0umsIuzkvURCBJTSX4o2rIPH9OARKlPEwZ0pV6EA048iLUN8QCPGtpTFtRchD6iVEX4oZCph8LKxpqkv2VIICNyuxLENBfAiIjl7rO6ueIU6rwyzav1cxzHAtnZwQWhd%2FVV7a3iETD%2BFUKwOKLvS4bADqwRoKH9HGF2kTsYTzM6ZIRZkTFTatkVKZcrElkiNq86w0gEEDZFTDpufAIxauAOk3oPc2N1JBs2iVnv0VxILJfRLpYqzTONRPqbkDE46RSz27a8w48qrxAY6pgEyueaDNVNFgywVc5T4qrk8u1Wi9vKfQJP7C6wTsqFIWcxdi7IJPUKcOAH39v8uO1Pc0mav7qEmwZ0zESvxqiIoMvMb3D0VeJHhDeLzarfbFj65lx3uMJ1AxDfzeZuNdubUWkspQpFFhgoUCkWXfP1Ioxxsi%2F3kMNkqM1w5ROvrVANuWfr3Wdfk96wp6jCEN3vZt4qOhDNgzUz1xdVKFFuMLxou%2FSOp&X-Amz-Signature=3ac9b79ff00dd7e2886fc4b89cc8afe7ed99288ae676898094e64f31e00e9027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54AQPIS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3WYsDl%2FEGgn1z1yYFODEHzp0xtqRRRMaI3YDnyoBNAiA3gjP2Uo0uXhuFz3%2BJSdo4TogdfzytNQ%2F7GlD9%2BZecniqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Sc6%2B5efo0a%2B%2BbbeKtwDjs1Uhes6HSuvT6JpFPoeK%2Bz5VRVUjkQUbLxrCsK28A%2FXnCVTLVtZJIfqAh529mQp2CCutqwBr0CmehF%2FG3%2FfkwQAsJzNbr3tYmXhfkeHGydFHq7nm6PYfYIcX8x4VDLxwJ5Rc%2FhxdvejiOOJNFjVs7mTLDY0a86EL5jaSJ69K5BQxmzpysaY4MMDrHujVKGDMzucyJhcpxC2OhybqMaAQJceep4vcKgHksAESDdsrR2Cd2jEM5gUIHE5v%2BEGjs7js%2FEJc4yBKsBfBvR2o%2B3Ifs6DVIKP3fNxA%2B%2BRyB0N9AzI0ubDRbX6T9azRGTQtqCvvban3AaRdf9LlujJ8zxdkE0WbeDVeo0VBxuOa6GptSGCGyLFOIHL0umsIuzkvURCBJTSX4o2rIPH9OARKlPEwZ0pV6EA048iLUN8QCPGtpTFtRchD6iVEX4oZCph8LKxpqkv2VIICNyuxLENBfAiIjl7rO6ueIU6rwyzav1cxzHAtnZwQWhd%2FVV7a3iETD%2BFUKwOKLvS4bADqwRoKH9HGF2kTsYTzM6ZIRZkTFTatkVKZcrElkiNq86w0gEEDZFTDpufAIxauAOk3oPc2N1JBs2iVnv0VxILJfRLpYqzTONRPqbkDE46RSz27a8w48qrxAY6pgEyueaDNVNFgywVc5T4qrk8u1Wi9vKfQJP7C6wTsqFIWcxdi7IJPUKcOAH39v8uO1Pc0mav7qEmwZ0zESvxqiIoMvMb3D0VeJHhDeLzarfbFj65lx3uMJ1AxDfzeZuNdubUWkspQpFFhgoUCkWXfP1Ioxxsi%2F3kMNkqM1w5ROvrVANuWfr3Wdfk96wp6jCEN3vZt4qOhDNgzUz1xdVKFFuMLxou%2FSOp&X-Amz-Signature=1827c7e1c3d9bbf7f2c03ed6d7893f32665a20d7f7f5b348a3ad895646d151f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54AQPIS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3WYsDl%2FEGgn1z1yYFODEHzp0xtqRRRMaI3YDnyoBNAiA3gjP2Uo0uXhuFz3%2BJSdo4TogdfzytNQ%2F7GlD9%2BZecniqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Sc6%2B5efo0a%2B%2BbbeKtwDjs1Uhes6HSuvT6JpFPoeK%2Bz5VRVUjkQUbLxrCsK28A%2FXnCVTLVtZJIfqAh529mQp2CCutqwBr0CmehF%2FG3%2FfkwQAsJzNbr3tYmXhfkeHGydFHq7nm6PYfYIcX8x4VDLxwJ5Rc%2FhxdvejiOOJNFjVs7mTLDY0a86EL5jaSJ69K5BQxmzpysaY4MMDrHujVKGDMzucyJhcpxC2OhybqMaAQJceep4vcKgHksAESDdsrR2Cd2jEM5gUIHE5v%2BEGjs7js%2FEJc4yBKsBfBvR2o%2B3Ifs6DVIKP3fNxA%2B%2BRyB0N9AzI0ubDRbX6T9azRGTQtqCvvban3AaRdf9LlujJ8zxdkE0WbeDVeo0VBxuOa6GptSGCGyLFOIHL0umsIuzkvURCBJTSX4o2rIPH9OARKlPEwZ0pV6EA048iLUN8QCPGtpTFtRchD6iVEX4oZCph8LKxpqkv2VIICNyuxLENBfAiIjl7rO6ueIU6rwyzav1cxzHAtnZwQWhd%2FVV7a3iETD%2BFUKwOKLvS4bADqwRoKH9HGF2kTsYTzM6ZIRZkTFTatkVKZcrElkiNq86w0gEEDZFTDpufAIxauAOk3oPc2N1JBs2iVnv0VxILJfRLpYqzTONRPqbkDE46RSz27a8w48qrxAY6pgEyueaDNVNFgywVc5T4qrk8u1Wi9vKfQJP7C6wTsqFIWcxdi7IJPUKcOAH39v8uO1Pc0mav7qEmwZ0zESvxqiIoMvMb3D0VeJHhDeLzarfbFj65lx3uMJ1AxDfzeZuNdubUWkspQpFFhgoUCkWXfP1Ioxxsi%2F3kMNkqM1w5ROvrVANuWfr3Wdfk96wp6jCEN3vZt4qOhDNgzUz1xdVKFFuMLxou%2FSOp&X-Amz-Signature=363b40d252d2624af972360d3e38b3ba8ebd29d5a75c78952aff57873819a9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54AQPIS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3WYsDl%2FEGgn1z1yYFODEHzp0xtqRRRMaI3YDnyoBNAiA3gjP2Uo0uXhuFz3%2BJSdo4TogdfzytNQ%2F7GlD9%2BZecniqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Sc6%2B5efo0a%2B%2BbbeKtwDjs1Uhes6HSuvT6JpFPoeK%2Bz5VRVUjkQUbLxrCsK28A%2FXnCVTLVtZJIfqAh529mQp2CCutqwBr0CmehF%2FG3%2FfkwQAsJzNbr3tYmXhfkeHGydFHq7nm6PYfYIcX8x4VDLxwJ5Rc%2FhxdvejiOOJNFjVs7mTLDY0a86EL5jaSJ69K5BQxmzpysaY4MMDrHujVKGDMzucyJhcpxC2OhybqMaAQJceep4vcKgHksAESDdsrR2Cd2jEM5gUIHE5v%2BEGjs7js%2FEJc4yBKsBfBvR2o%2B3Ifs6DVIKP3fNxA%2B%2BRyB0N9AzI0ubDRbX6T9azRGTQtqCvvban3AaRdf9LlujJ8zxdkE0WbeDVeo0VBxuOa6GptSGCGyLFOIHL0umsIuzkvURCBJTSX4o2rIPH9OARKlPEwZ0pV6EA048iLUN8QCPGtpTFtRchD6iVEX4oZCph8LKxpqkv2VIICNyuxLENBfAiIjl7rO6ueIU6rwyzav1cxzHAtnZwQWhd%2FVV7a3iETD%2BFUKwOKLvS4bADqwRoKH9HGF2kTsYTzM6ZIRZkTFTatkVKZcrElkiNq86w0gEEDZFTDpufAIxauAOk3oPc2N1JBs2iVnv0VxILJfRLpYqzTONRPqbkDE46RSz27a8w48qrxAY6pgEyueaDNVNFgywVc5T4qrk8u1Wi9vKfQJP7C6wTsqFIWcxdi7IJPUKcOAH39v8uO1Pc0mav7qEmwZ0zESvxqiIoMvMb3D0VeJHhDeLzarfbFj65lx3uMJ1AxDfzeZuNdubUWkspQpFFhgoUCkWXfP1Ioxxsi%2F3kMNkqM1w5ROvrVANuWfr3Wdfk96wp6jCEN3vZt4qOhDNgzUz1xdVKFFuMLxou%2FSOp&X-Amz-Signature=170b9e41056c7dbebce856b35bb911aa6b09f5a5a38c0bf37be4dadd2dbcaad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54AQPIS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3WYsDl%2FEGgn1z1yYFODEHzp0xtqRRRMaI3YDnyoBNAiA3gjP2Uo0uXhuFz3%2BJSdo4TogdfzytNQ%2F7GlD9%2BZecniqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Sc6%2B5efo0a%2B%2BbbeKtwDjs1Uhes6HSuvT6JpFPoeK%2Bz5VRVUjkQUbLxrCsK28A%2FXnCVTLVtZJIfqAh529mQp2CCutqwBr0CmehF%2FG3%2FfkwQAsJzNbr3tYmXhfkeHGydFHq7nm6PYfYIcX8x4VDLxwJ5Rc%2FhxdvejiOOJNFjVs7mTLDY0a86EL5jaSJ69K5BQxmzpysaY4MMDrHujVKGDMzucyJhcpxC2OhybqMaAQJceep4vcKgHksAESDdsrR2Cd2jEM5gUIHE5v%2BEGjs7js%2FEJc4yBKsBfBvR2o%2B3Ifs6DVIKP3fNxA%2B%2BRyB0N9AzI0ubDRbX6T9azRGTQtqCvvban3AaRdf9LlujJ8zxdkE0WbeDVeo0VBxuOa6GptSGCGyLFOIHL0umsIuzkvURCBJTSX4o2rIPH9OARKlPEwZ0pV6EA048iLUN8QCPGtpTFtRchD6iVEX4oZCph8LKxpqkv2VIICNyuxLENBfAiIjl7rO6ueIU6rwyzav1cxzHAtnZwQWhd%2FVV7a3iETD%2BFUKwOKLvS4bADqwRoKH9HGF2kTsYTzM6ZIRZkTFTatkVKZcrElkiNq86w0gEEDZFTDpufAIxauAOk3oPc2N1JBs2iVnv0VxILJfRLpYqzTONRPqbkDE46RSz27a8w48qrxAY6pgEyueaDNVNFgywVc5T4qrk8u1Wi9vKfQJP7C6wTsqFIWcxdi7IJPUKcOAH39v8uO1Pc0mav7qEmwZ0zESvxqiIoMvMb3D0VeJHhDeLzarfbFj65lx3uMJ1AxDfzeZuNdubUWkspQpFFhgoUCkWXfP1Ioxxsi%2F3kMNkqM1w5ROvrVANuWfr3Wdfk96wp6jCEN3vZt4qOhDNgzUz1xdVKFFuMLxou%2FSOp&X-Amz-Signature=9e3738009894b3f40f66e04005d7b7d5a4b43066bb5aa46f29bea3c76a01032d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54AQPIS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3WYsDl%2FEGgn1z1yYFODEHzp0xtqRRRMaI3YDnyoBNAiA3gjP2Uo0uXhuFz3%2BJSdo4TogdfzytNQ%2F7GlD9%2BZecniqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Sc6%2B5efo0a%2B%2BbbeKtwDjs1Uhes6HSuvT6JpFPoeK%2Bz5VRVUjkQUbLxrCsK28A%2FXnCVTLVtZJIfqAh529mQp2CCutqwBr0CmehF%2FG3%2FfkwQAsJzNbr3tYmXhfkeHGydFHq7nm6PYfYIcX8x4VDLxwJ5Rc%2FhxdvejiOOJNFjVs7mTLDY0a86EL5jaSJ69K5BQxmzpysaY4MMDrHujVKGDMzucyJhcpxC2OhybqMaAQJceep4vcKgHksAESDdsrR2Cd2jEM5gUIHE5v%2BEGjs7js%2FEJc4yBKsBfBvR2o%2B3Ifs6DVIKP3fNxA%2B%2BRyB0N9AzI0ubDRbX6T9azRGTQtqCvvban3AaRdf9LlujJ8zxdkE0WbeDVeo0VBxuOa6GptSGCGyLFOIHL0umsIuzkvURCBJTSX4o2rIPH9OARKlPEwZ0pV6EA048iLUN8QCPGtpTFtRchD6iVEX4oZCph8LKxpqkv2VIICNyuxLENBfAiIjl7rO6ueIU6rwyzav1cxzHAtnZwQWhd%2FVV7a3iETD%2BFUKwOKLvS4bADqwRoKH9HGF2kTsYTzM6ZIRZkTFTatkVKZcrElkiNq86w0gEEDZFTDpufAIxauAOk3oPc2N1JBs2iVnv0VxILJfRLpYqzTONRPqbkDE46RSz27a8w48qrxAY6pgEyueaDNVNFgywVc5T4qrk8u1Wi9vKfQJP7C6wTsqFIWcxdi7IJPUKcOAH39v8uO1Pc0mav7qEmwZ0zESvxqiIoMvMb3D0VeJHhDeLzarfbFj65lx3uMJ1AxDfzeZuNdubUWkspQpFFhgoUCkWXfP1Ioxxsi%2F3kMNkqM1w5ROvrVANuWfr3Wdfk96wp6jCEN3vZt4qOhDNgzUz1xdVKFFuMLxou%2FSOp&X-Amz-Signature=076016617080251d8a2000596ac5b9e1821a22cbfd2c461d824c48e13b706ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

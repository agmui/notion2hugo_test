---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

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

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4WCUK2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX2RV0bmB3Y5OA1HoO4mOb6GaL%2FiR%2FSRZRuD1IBMBgUAiEAinKQEcmfbwHuVpKkRhuLj6iIHIaPICDYeMCXLAsTjLYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMepIy%2B4BhFnzf37lyrcA9lIprkCSXY0zG%2FbLW%2BpX7suw1DfVFql5QzDC5eBlc13mYttrs5Jf%2FsbI%2B5N2AQWorM%2FHrgv%2F2gRBZuICdWaFy51JYjfymw4bfL3jmOs6BsswtfS1vTW5cVzeQXOSa3YZZ7KsJqPu3xQuslkJpb90HWA1Y554Hdtc7N7p0k1d4pFVTqKpZCM1yPGwfEuI9IAdcjqPnXQo91V5HxUlG1NZ2fN%2ByyRMgnAxtrsCsoSPB07THcKZTaWeqCfvMWeP%2BHe8n8wV0PxZOmJPgGG%2FJ09t0C1rayJEWCQk2kfKBZWTAbHpU8pQoHyPqgQufA7h4OtLvy%2Fl2dFkwsc%2Fk5LWR1Saq7pcDWQANKKAls%2F%2B3ITbu10cih7wgfjgK6epnJ82LCkVv8S5hw1LP6e4832y14kVqaasZTd1rFhV4qQo1oxKVNgivAYhwAx9cpioiay9FnXGInMm36XtwhqHf%2FQsMb9MOCi7t3QwTCMYKZCBfFiB7OFr1WcookS%2BT8gDmcLu3ol3dNve5B5We7gPQk3eS%2FoxURf9xCNM5joXoDMU2BkmaZWWj%2FLBXnlB8K0DNdEwPNBGVxp9WtXXtcwej4fWLTe52HWBEv1o9GpMgRsCFbx3VBL8L4PzmdgA5w6Uh%2FnMPDo8cQGOqUB9cMS6EX5MKI%2Blwe6hUKC2iw77Fz1sxM4el03AvD4k0GzAR61qfZyMSbC0eGpiarhhi2op8wyHEujprM%2FSigjM3YewVBj%2B2MlIcxRPJSOM1R%2FVH1FtMQBDOf24H96XhxtwkIIMklt3jSbaBLkdyKUGrB4Uhi3GCHiIhofDqsOtqWyui8RdsM45acbYmEqWHVrt1QADaADgj2Lol0aVcA6HQrWQpF1&X-Amz-Signature=0a27fb2a5c548e987cca4ad79eee2448b36a84a4d1e0ebbb51fd32c5a66a9cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TVM67F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2FJu5mtsaH7ShQJv%2B6luP6eLDBW42sExMkiKOz4ZeygIhALMktkqWr9RLqalCppO%2B%2FYH6UiiT2aZzgNovM5F4nduVKv8DCCwQABoMNjM3NDIzMTgzODA1IgyCqGO21HHSUFtPl5Mq3AOsV4pNYpP1sLYzvIDrVuO%2FyyBwoN9Jm%2Fal3mjQagR%2BGbQB95fTCtAF3vKNtp9joWo7BefwIIKKH2N2T9xkLd7V5caebbnXLVTasDdBUd8%2FGG3QoT2sRyzvaPbk4r1YpOBd%2FEfCzOmG7BYUiKNZ1vGtbRU4%2FWlo18laZP2nS5TSndaszU4KpDSJwuudeC5UTW8aiIZ%2Bdyeo1HL4B6JRG7BrPmHERYHCG0oxGNY0QcZQUUF%2FQ%2B70KUsbCOxA%2B2u5VTb19%2BYMfixqRdYhMyjJZkqz9fMcv7MJMytOTy%2B0CRH7DdyBZCNGy02hEfiRv3RBRqxv7vx4zr1PLlOLhzCsT5aXKZM8TRukTALj0BWnHv9XfEBQbhwSS9j64C4uKloGiRCgksb9e7nP68H4Lmw9mtMBa5Qpk4RFcxCmX9afX7vnBiv2lq4UMJEY%2FVfemYiUraUJdpuuTmMck1%2F0dNGK2tXgLQ4HM5gUcTUUxyGD2kvjcMAU4eCc3b4PrjWPA3YUqEKfH3bqxfiHh%2Fp34WSAn5N6qbiXk4Hp0N5nyp2ImRVQL5ItryCaAiUDoAgtb8fcIoZKlwuV%2FXQ7K7GQ%2F9m7dageJTHSTERGPv9q3ui%2FLXKdec0zYFGIH4AC7TEhWjCT6fHEBjqkARFetaT%2ByiBDtAVNLZo%2F9jx1MNH7y7hYth8Yf9FvcaS4GrpHanjOBFcraWaHhz9Jd8O65mxot37SWu5%2BtgXZzbAfnTOD7rm%2F7D3y6YJuU3Mq9ibVvDaBxHlx%2FHGRehF931z2fqG3sbd%2Bm%2FVUNOIE%2BihbYmyPALHxlTuLJaKg7584LHfObQWfIsMYarEV3S72rDwu6hMHkafdJs2%2BpNIHS89DTVfi&X-Amz-Signature=dfc2bef8604e73a1d329988e24507235ad3671e29b9f908e7c5e365a5b72dade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TVM67F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2FJu5mtsaH7ShQJv%2B6luP6eLDBW42sExMkiKOz4ZeygIhALMktkqWr9RLqalCppO%2B%2FYH6UiiT2aZzgNovM5F4nduVKv8DCCwQABoMNjM3NDIzMTgzODA1IgyCqGO21HHSUFtPl5Mq3AOsV4pNYpP1sLYzvIDrVuO%2FyyBwoN9Jm%2Fal3mjQagR%2BGbQB95fTCtAF3vKNtp9joWo7BefwIIKKH2N2T9xkLd7V5caebbnXLVTasDdBUd8%2FGG3QoT2sRyzvaPbk4r1YpOBd%2FEfCzOmG7BYUiKNZ1vGtbRU4%2FWlo18laZP2nS5TSndaszU4KpDSJwuudeC5UTW8aiIZ%2Bdyeo1HL4B6JRG7BrPmHERYHCG0oxGNY0QcZQUUF%2FQ%2B70KUsbCOxA%2B2u5VTb19%2BYMfixqRdYhMyjJZkqz9fMcv7MJMytOTy%2B0CRH7DdyBZCNGy02hEfiRv3RBRqxv7vx4zr1PLlOLhzCsT5aXKZM8TRukTALj0BWnHv9XfEBQbhwSS9j64C4uKloGiRCgksb9e7nP68H4Lmw9mtMBa5Qpk4RFcxCmX9afX7vnBiv2lq4UMJEY%2FVfemYiUraUJdpuuTmMck1%2F0dNGK2tXgLQ4HM5gUcTUUxyGD2kvjcMAU4eCc3b4PrjWPA3YUqEKfH3bqxfiHh%2Fp34WSAn5N6qbiXk4Hp0N5nyp2ImRVQL5ItryCaAiUDoAgtb8fcIoZKlwuV%2FXQ7K7GQ%2F9m7dageJTHSTERGPv9q3ui%2FLXKdec0zYFGIH4AC7TEhWjCT6fHEBjqkARFetaT%2ByiBDtAVNLZo%2F9jx1MNH7y7hYth8Yf9FvcaS4GrpHanjOBFcraWaHhz9Jd8O65mxot37SWu5%2BtgXZzbAfnTOD7rm%2F7D3y6YJuU3Mq9ibVvDaBxHlx%2FHGRehF931z2fqG3sbd%2Bm%2FVUNOIE%2BihbYmyPALHxlTuLJaKg7584LHfObQWfIsMYarEV3S72rDwu6hMHkafdJs2%2BpNIHS89DTVfi&X-Amz-Signature=6649175029071f124c45be361c048abd416fb70b562956e1ed641745d1edbd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TVM67F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2FJu5mtsaH7ShQJv%2B6luP6eLDBW42sExMkiKOz4ZeygIhALMktkqWr9RLqalCppO%2B%2FYH6UiiT2aZzgNovM5F4nduVKv8DCCwQABoMNjM3NDIzMTgzODA1IgyCqGO21HHSUFtPl5Mq3AOsV4pNYpP1sLYzvIDrVuO%2FyyBwoN9Jm%2Fal3mjQagR%2BGbQB95fTCtAF3vKNtp9joWo7BefwIIKKH2N2T9xkLd7V5caebbnXLVTasDdBUd8%2FGG3QoT2sRyzvaPbk4r1YpOBd%2FEfCzOmG7BYUiKNZ1vGtbRU4%2FWlo18laZP2nS5TSndaszU4KpDSJwuudeC5UTW8aiIZ%2Bdyeo1HL4B6JRG7BrPmHERYHCG0oxGNY0QcZQUUF%2FQ%2B70KUsbCOxA%2B2u5VTb19%2BYMfixqRdYhMyjJZkqz9fMcv7MJMytOTy%2B0CRH7DdyBZCNGy02hEfiRv3RBRqxv7vx4zr1PLlOLhzCsT5aXKZM8TRukTALj0BWnHv9XfEBQbhwSS9j64C4uKloGiRCgksb9e7nP68H4Lmw9mtMBa5Qpk4RFcxCmX9afX7vnBiv2lq4UMJEY%2FVfemYiUraUJdpuuTmMck1%2F0dNGK2tXgLQ4HM5gUcTUUxyGD2kvjcMAU4eCc3b4PrjWPA3YUqEKfH3bqxfiHh%2Fp34WSAn5N6qbiXk4Hp0N5nyp2ImRVQL5ItryCaAiUDoAgtb8fcIoZKlwuV%2FXQ7K7GQ%2F9m7dageJTHSTERGPv9q3ui%2FLXKdec0zYFGIH4AC7TEhWjCT6fHEBjqkARFetaT%2ByiBDtAVNLZo%2F9jx1MNH7y7hYth8Yf9FvcaS4GrpHanjOBFcraWaHhz9Jd8O65mxot37SWu5%2BtgXZzbAfnTOD7rm%2F7D3y6YJuU3Mq9ibVvDaBxHlx%2FHGRehF931z2fqG3sbd%2Bm%2FVUNOIE%2BihbYmyPALHxlTuLJaKg7584LHfObQWfIsMYarEV3S72rDwu6hMHkafdJs2%2BpNIHS89DTVfi&X-Amz-Signature=e7e768c0d6b916bd28690b282efd75c1e49e51e34a95b4e3a3cdfb8d250ae68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TVM67F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2FJu5mtsaH7ShQJv%2B6luP6eLDBW42sExMkiKOz4ZeygIhALMktkqWr9RLqalCppO%2B%2FYH6UiiT2aZzgNovM5F4nduVKv8DCCwQABoMNjM3NDIzMTgzODA1IgyCqGO21HHSUFtPl5Mq3AOsV4pNYpP1sLYzvIDrVuO%2FyyBwoN9Jm%2Fal3mjQagR%2BGbQB95fTCtAF3vKNtp9joWo7BefwIIKKH2N2T9xkLd7V5caebbnXLVTasDdBUd8%2FGG3QoT2sRyzvaPbk4r1YpOBd%2FEfCzOmG7BYUiKNZ1vGtbRU4%2FWlo18laZP2nS5TSndaszU4KpDSJwuudeC5UTW8aiIZ%2Bdyeo1HL4B6JRG7BrPmHERYHCG0oxGNY0QcZQUUF%2FQ%2B70KUsbCOxA%2B2u5VTb19%2BYMfixqRdYhMyjJZkqz9fMcv7MJMytOTy%2B0CRH7DdyBZCNGy02hEfiRv3RBRqxv7vx4zr1PLlOLhzCsT5aXKZM8TRukTALj0BWnHv9XfEBQbhwSS9j64C4uKloGiRCgksb9e7nP68H4Lmw9mtMBa5Qpk4RFcxCmX9afX7vnBiv2lq4UMJEY%2FVfemYiUraUJdpuuTmMck1%2F0dNGK2tXgLQ4HM5gUcTUUxyGD2kvjcMAU4eCc3b4PrjWPA3YUqEKfH3bqxfiHh%2Fp34WSAn5N6qbiXk4Hp0N5nyp2ImRVQL5ItryCaAiUDoAgtb8fcIoZKlwuV%2FXQ7K7GQ%2F9m7dageJTHSTERGPv9q3ui%2FLXKdec0zYFGIH4AC7TEhWjCT6fHEBjqkARFetaT%2ByiBDtAVNLZo%2F9jx1MNH7y7hYth8Yf9FvcaS4GrpHanjOBFcraWaHhz9Jd8O65mxot37SWu5%2BtgXZzbAfnTOD7rm%2F7D3y6YJuU3Mq9ibVvDaBxHlx%2FHGRehF931z2fqG3sbd%2Bm%2FVUNOIE%2BihbYmyPALHxlTuLJaKg7584LHfObQWfIsMYarEV3S72rDwu6hMHkafdJs2%2BpNIHS89DTVfi&X-Amz-Signature=6fc2d8404dfab6f7b272dd37af7215d9a249b923c4e18bf3614fe46046e1f9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TVM67F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2FJu5mtsaH7ShQJv%2B6luP6eLDBW42sExMkiKOz4ZeygIhALMktkqWr9RLqalCppO%2B%2FYH6UiiT2aZzgNovM5F4nduVKv8DCCwQABoMNjM3NDIzMTgzODA1IgyCqGO21HHSUFtPl5Mq3AOsV4pNYpP1sLYzvIDrVuO%2FyyBwoN9Jm%2Fal3mjQagR%2BGbQB95fTCtAF3vKNtp9joWo7BefwIIKKH2N2T9xkLd7V5caebbnXLVTasDdBUd8%2FGG3QoT2sRyzvaPbk4r1YpOBd%2FEfCzOmG7BYUiKNZ1vGtbRU4%2FWlo18laZP2nS5TSndaszU4KpDSJwuudeC5UTW8aiIZ%2Bdyeo1HL4B6JRG7BrPmHERYHCG0oxGNY0QcZQUUF%2FQ%2B70KUsbCOxA%2B2u5VTb19%2BYMfixqRdYhMyjJZkqz9fMcv7MJMytOTy%2B0CRH7DdyBZCNGy02hEfiRv3RBRqxv7vx4zr1PLlOLhzCsT5aXKZM8TRukTALj0BWnHv9XfEBQbhwSS9j64C4uKloGiRCgksb9e7nP68H4Lmw9mtMBa5Qpk4RFcxCmX9afX7vnBiv2lq4UMJEY%2FVfemYiUraUJdpuuTmMck1%2F0dNGK2tXgLQ4HM5gUcTUUxyGD2kvjcMAU4eCc3b4PrjWPA3YUqEKfH3bqxfiHh%2Fp34WSAn5N6qbiXk4Hp0N5nyp2ImRVQL5ItryCaAiUDoAgtb8fcIoZKlwuV%2FXQ7K7GQ%2F9m7dageJTHSTERGPv9q3ui%2FLXKdec0zYFGIH4AC7TEhWjCT6fHEBjqkARFetaT%2ByiBDtAVNLZo%2F9jx1MNH7y7hYth8Yf9FvcaS4GrpHanjOBFcraWaHhz9Jd8O65mxot37SWu5%2BtgXZzbAfnTOD7rm%2F7D3y6YJuU3Mq9ibVvDaBxHlx%2FHGRehF931z2fqG3sbd%2Bm%2FVUNOIE%2BihbYmyPALHxlTuLJaKg7584LHfObQWfIsMYarEV3S72rDwu6hMHkafdJs2%2BpNIHS89DTVfi&X-Amz-Signature=b97800252bf96be9b5ace7d39544abaf1b950fb4773b353d6ed7ecd4fc621afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TVM67F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2FJu5mtsaH7ShQJv%2B6luP6eLDBW42sExMkiKOz4ZeygIhALMktkqWr9RLqalCppO%2B%2FYH6UiiT2aZzgNovM5F4nduVKv8DCCwQABoMNjM3NDIzMTgzODA1IgyCqGO21HHSUFtPl5Mq3AOsV4pNYpP1sLYzvIDrVuO%2FyyBwoN9Jm%2Fal3mjQagR%2BGbQB95fTCtAF3vKNtp9joWo7BefwIIKKH2N2T9xkLd7V5caebbnXLVTasDdBUd8%2FGG3QoT2sRyzvaPbk4r1YpOBd%2FEfCzOmG7BYUiKNZ1vGtbRU4%2FWlo18laZP2nS5TSndaszU4KpDSJwuudeC5UTW8aiIZ%2Bdyeo1HL4B6JRG7BrPmHERYHCG0oxGNY0QcZQUUF%2FQ%2B70KUsbCOxA%2B2u5VTb19%2BYMfixqRdYhMyjJZkqz9fMcv7MJMytOTy%2B0CRH7DdyBZCNGy02hEfiRv3RBRqxv7vx4zr1PLlOLhzCsT5aXKZM8TRukTALj0BWnHv9XfEBQbhwSS9j64C4uKloGiRCgksb9e7nP68H4Lmw9mtMBa5Qpk4RFcxCmX9afX7vnBiv2lq4UMJEY%2FVfemYiUraUJdpuuTmMck1%2F0dNGK2tXgLQ4HM5gUcTUUxyGD2kvjcMAU4eCc3b4PrjWPA3YUqEKfH3bqxfiHh%2Fp34WSAn5N6qbiXk4Hp0N5nyp2ImRVQL5ItryCaAiUDoAgtb8fcIoZKlwuV%2FXQ7K7GQ%2F9m7dageJTHSTERGPv9q3ui%2FLXKdec0zYFGIH4AC7TEhWjCT6fHEBjqkARFetaT%2ByiBDtAVNLZo%2F9jx1MNH7y7hYth8Yf9FvcaS4GrpHanjOBFcraWaHhz9Jd8O65mxot37SWu5%2BtgXZzbAfnTOD7rm%2F7D3y6YJuU3Mq9ibVvDaBxHlx%2FHGRehF931z2fqG3sbd%2Bm%2FVUNOIE%2BihbYmyPALHxlTuLJaKg7584LHfObQWfIsMYarEV3S72rDwu6hMHkafdJs2%2BpNIHS89DTVfi&X-Amz-Signature=fc05122acdfe6cd5fc9f13d1067a9286b54fb57e6c57946380abd8db172f5676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TVM67F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2FJu5mtsaH7ShQJv%2B6luP6eLDBW42sExMkiKOz4ZeygIhALMktkqWr9RLqalCppO%2B%2FYH6UiiT2aZzgNovM5F4nduVKv8DCCwQABoMNjM3NDIzMTgzODA1IgyCqGO21HHSUFtPl5Mq3AOsV4pNYpP1sLYzvIDrVuO%2FyyBwoN9Jm%2Fal3mjQagR%2BGbQB95fTCtAF3vKNtp9joWo7BefwIIKKH2N2T9xkLd7V5caebbnXLVTasDdBUd8%2FGG3QoT2sRyzvaPbk4r1YpOBd%2FEfCzOmG7BYUiKNZ1vGtbRU4%2FWlo18laZP2nS5TSndaszU4KpDSJwuudeC5UTW8aiIZ%2Bdyeo1HL4B6JRG7BrPmHERYHCG0oxGNY0QcZQUUF%2FQ%2B70KUsbCOxA%2B2u5VTb19%2BYMfixqRdYhMyjJZkqz9fMcv7MJMytOTy%2B0CRH7DdyBZCNGy02hEfiRv3RBRqxv7vx4zr1PLlOLhzCsT5aXKZM8TRukTALj0BWnHv9XfEBQbhwSS9j64C4uKloGiRCgksb9e7nP68H4Lmw9mtMBa5Qpk4RFcxCmX9afX7vnBiv2lq4UMJEY%2FVfemYiUraUJdpuuTmMck1%2F0dNGK2tXgLQ4HM5gUcTUUxyGD2kvjcMAU4eCc3b4PrjWPA3YUqEKfH3bqxfiHh%2Fp34WSAn5N6qbiXk4Hp0N5nyp2ImRVQL5ItryCaAiUDoAgtb8fcIoZKlwuV%2FXQ7K7GQ%2F9m7dageJTHSTERGPv9q3ui%2FLXKdec0zYFGIH4AC7TEhWjCT6fHEBjqkARFetaT%2ByiBDtAVNLZo%2F9jx1MNH7y7hYth8Yf9FvcaS4GrpHanjOBFcraWaHhz9Jd8O65mxot37SWu5%2BtgXZzbAfnTOD7rm%2F7D3y6YJuU3Mq9ibVvDaBxHlx%2FHGRehF931z2fqG3sbd%2Bm%2FVUNOIE%2BihbYmyPALHxlTuLJaKg7584LHfObQWfIsMYarEV3S72rDwu6hMHkafdJs2%2BpNIHS89DTVfi&X-Amz-Signature=41ebcf64a989c2b79b20f88cf67e99ba5638b293059a8958f2c3f10a6831e55e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TVM67F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2FJu5mtsaH7ShQJv%2B6luP6eLDBW42sExMkiKOz4ZeygIhALMktkqWr9RLqalCppO%2B%2FYH6UiiT2aZzgNovM5F4nduVKv8DCCwQABoMNjM3NDIzMTgzODA1IgyCqGO21HHSUFtPl5Mq3AOsV4pNYpP1sLYzvIDrVuO%2FyyBwoN9Jm%2Fal3mjQagR%2BGbQB95fTCtAF3vKNtp9joWo7BefwIIKKH2N2T9xkLd7V5caebbnXLVTasDdBUd8%2FGG3QoT2sRyzvaPbk4r1YpOBd%2FEfCzOmG7BYUiKNZ1vGtbRU4%2FWlo18laZP2nS5TSndaszU4KpDSJwuudeC5UTW8aiIZ%2Bdyeo1HL4B6JRG7BrPmHERYHCG0oxGNY0QcZQUUF%2FQ%2B70KUsbCOxA%2B2u5VTb19%2BYMfixqRdYhMyjJZkqz9fMcv7MJMytOTy%2B0CRH7DdyBZCNGy02hEfiRv3RBRqxv7vx4zr1PLlOLhzCsT5aXKZM8TRukTALj0BWnHv9XfEBQbhwSS9j64C4uKloGiRCgksb9e7nP68H4Lmw9mtMBa5Qpk4RFcxCmX9afX7vnBiv2lq4UMJEY%2FVfemYiUraUJdpuuTmMck1%2F0dNGK2tXgLQ4HM5gUcTUUxyGD2kvjcMAU4eCc3b4PrjWPA3YUqEKfH3bqxfiHh%2Fp34WSAn5N6qbiXk4Hp0N5nyp2ImRVQL5ItryCaAiUDoAgtb8fcIoZKlwuV%2FXQ7K7GQ%2F9m7dageJTHSTERGPv9q3ui%2FLXKdec0zYFGIH4AC7TEhWjCT6fHEBjqkARFetaT%2ByiBDtAVNLZo%2F9jx1MNH7y7hYth8Yf9FvcaS4GrpHanjOBFcraWaHhz9Jd8O65mxot37SWu5%2BtgXZzbAfnTOD7rm%2F7D3y6YJuU3Mq9ibVvDaBxHlx%2FHGRehF931z2fqG3sbd%2Bm%2FVUNOIE%2BihbYmyPALHxlTuLJaKg7584LHfObQWfIsMYarEV3S72rDwu6hMHkafdJs2%2BpNIHS89DTVfi&X-Amz-Signature=ac90b81eed8c74243e3c411c8fc6038113dd6badcdf60dded60199b1082e7680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

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

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TVM67F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2FJu5mtsaH7ShQJv%2B6luP6eLDBW42sExMkiKOz4ZeygIhALMktkqWr9RLqalCppO%2B%2FYH6UiiT2aZzgNovM5F4nduVKv8DCCwQABoMNjM3NDIzMTgzODA1IgyCqGO21HHSUFtPl5Mq3AOsV4pNYpP1sLYzvIDrVuO%2FyyBwoN9Jm%2Fal3mjQagR%2BGbQB95fTCtAF3vKNtp9joWo7BefwIIKKH2N2T9xkLd7V5caebbnXLVTasDdBUd8%2FGG3QoT2sRyzvaPbk4r1YpOBd%2FEfCzOmG7BYUiKNZ1vGtbRU4%2FWlo18laZP2nS5TSndaszU4KpDSJwuudeC5UTW8aiIZ%2Bdyeo1HL4B6JRG7BrPmHERYHCG0oxGNY0QcZQUUF%2FQ%2B70KUsbCOxA%2B2u5VTb19%2BYMfixqRdYhMyjJZkqz9fMcv7MJMytOTy%2B0CRH7DdyBZCNGy02hEfiRv3RBRqxv7vx4zr1PLlOLhzCsT5aXKZM8TRukTALj0BWnHv9XfEBQbhwSS9j64C4uKloGiRCgksb9e7nP68H4Lmw9mtMBa5Qpk4RFcxCmX9afX7vnBiv2lq4UMJEY%2FVfemYiUraUJdpuuTmMck1%2F0dNGK2tXgLQ4HM5gUcTUUxyGD2kvjcMAU4eCc3b4PrjWPA3YUqEKfH3bqxfiHh%2Fp34WSAn5N6qbiXk4Hp0N5nyp2ImRVQL5ItryCaAiUDoAgtb8fcIoZKlwuV%2FXQ7K7GQ%2F9m7dageJTHSTERGPv9q3ui%2FLXKdec0zYFGIH4AC7TEhWjCT6fHEBjqkARFetaT%2ByiBDtAVNLZo%2F9jx1MNH7y7hYth8Yf9FvcaS4GrpHanjOBFcraWaHhz9Jd8O65mxot37SWu5%2BtgXZzbAfnTOD7rm%2F7D3y6YJuU3Mq9ibVvDaBxHlx%2FHGRehF931z2fqG3sbd%2Bm%2FVUNOIE%2BihbYmyPALHxlTuLJaKg7584LHfObQWfIsMYarEV3S72rDwu6hMHkafdJs2%2BpNIHS89DTVfi&X-Amz-Signature=4cc810bf330f485c69c59f39155d28aaee07bfb0be29414c692c6a6343ceb308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TVM67F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2FJu5mtsaH7ShQJv%2B6luP6eLDBW42sExMkiKOz4ZeygIhALMktkqWr9RLqalCppO%2B%2FYH6UiiT2aZzgNovM5F4nduVKv8DCCwQABoMNjM3NDIzMTgzODA1IgyCqGO21HHSUFtPl5Mq3AOsV4pNYpP1sLYzvIDrVuO%2FyyBwoN9Jm%2Fal3mjQagR%2BGbQB95fTCtAF3vKNtp9joWo7BefwIIKKH2N2T9xkLd7V5caebbnXLVTasDdBUd8%2FGG3QoT2sRyzvaPbk4r1YpOBd%2FEfCzOmG7BYUiKNZ1vGtbRU4%2FWlo18laZP2nS5TSndaszU4KpDSJwuudeC5UTW8aiIZ%2Bdyeo1HL4B6JRG7BrPmHERYHCG0oxGNY0QcZQUUF%2FQ%2B70KUsbCOxA%2B2u5VTb19%2BYMfixqRdYhMyjJZkqz9fMcv7MJMytOTy%2B0CRH7DdyBZCNGy02hEfiRv3RBRqxv7vx4zr1PLlOLhzCsT5aXKZM8TRukTALj0BWnHv9XfEBQbhwSS9j64C4uKloGiRCgksb9e7nP68H4Lmw9mtMBa5Qpk4RFcxCmX9afX7vnBiv2lq4UMJEY%2FVfemYiUraUJdpuuTmMck1%2F0dNGK2tXgLQ4HM5gUcTUUxyGD2kvjcMAU4eCc3b4PrjWPA3YUqEKfH3bqxfiHh%2Fp34WSAn5N6qbiXk4Hp0N5nyp2ImRVQL5ItryCaAiUDoAgtb8fcIoZKlwuV%2FXQ7K7GQ%2F9m7dageJTHSTERGPv9q3ui%2FLXKdec0zYFGIH4AC7TEhWjCT6fHEBjqkARFetaT%2ByiBDtAVNLZo%2F9jx1MNH7y7hYth8Yf9FvcaS4GrpHanjOBFcraWaHhz9Jd8O65mxot37SWu5%2BtgXZzbAfnTOD7rm%2F7D3y6YJuU3Mq9ibVvDaBxHlx%2FHGRehF931z2fqG3sbd%2Bm%2FVUNOIE%2BihbYmyPALHxlTuLJaKg7584LHfObQWfIsMYarEV3S72rDwu6hMHkafdJs2%2BpNIHS89DTVfi&X-Amz-Signature=6fc2d8404dfab6f7b272dd37af7215d9a249b923c4e18bf3614fe46046e1f9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

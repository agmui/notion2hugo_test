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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WOQV2H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPKxBHaIfnJMC%2FYb%2Bth0DImLeqHdMDt%2FwI9ZjC%2F0LXhAiEAp0cWBSgDSOuGwZlzi9b10jTxB9PxmxuQi1Y%2FYEH1XWUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FaueeXEuAAaTpFFyrcA59A8MCJh0RZMHUBGGj%2BXMrF0XyZapFZ74wY1jB8pLadQ9PE9kz2V6apY2vHeXquEKKeezgSrtO7Du8A4LHyUMplhaLXDsWqeunDbOPSaLZOWNTD2o7pVBm9nxo4Jl30t8pIc0uhBXKATa7vuEzSuvs%2FydVI3SmAQJmfL18Q3IdRNOHN7%2F3WSFDl8fOmUOMyCStTA%2BpgF2sGEZrL6zbWp7E6ztPL82rxaIb0kgTMzEKhCuqebnO4HXxpj5tlWzgRVpawm5ZID%2BLF3JrlmuIMHVsLrjo9pFe0cz47Q42jghOXcvis7P8IFiZRpcZ%2FBYWeiF2TzulpChkgoXkV6EKZ9UcmxwB%2BmhbtTFTaIfBeVYRXKrAelDzQQpM7e1xjn39%2FDjcX3qZWbPIy4aExutkdnb%2FlYIasdjk66JLWpYVy%2FKdHe2kIItMa7RgBzHo4dvthtHFrj7qcPreFWf4R1z6xmwrX65mqDbGi9T08bFPlWKGdUZd7ZhvX1BgOslK%2BRTy7lGYolWvkN3O3XKFj97jB0wPCcsxADHcpdrHStElD1OGG0PFUSSprxhrONEMvvq7s9xZ7FlahvloITyXbEXPWwzkSsY%2B0HP5k2nYmjCJHLej%2FYysMEmEyo7cYu4p0MLfttMQGOqUBGXtalilmk8hvYhgANKTyhfUEO9qJEqND4HNb7BrPAMsQDQOBbF0uJ3c0OTPG%2Fw5wya4UEkGtLnI612Mv9xq%2F6q47VT%2FmT1MTmr%2BLgFZ131qxDXM1r%2BahP9iFmd%2FD5b5%2FM%2Bvgmx3D2A4Iv2DjONjajR8Fw2W9rulocwpvfSYnCQTG%2FNVhbw0A0%2BiWwRIJQi684WgpnAI9x0Tagfydh%2BFVUW66WF4O&X-Amz-Signature=0d785469f7593449057e4e376c538affb369d6ab0cfa46ee5bde26c3dac720c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WOQV2H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPKxBHaIfnJMC%2FYb%2Bth0DImLeqHdMDt%2FwI9ZjC%2F0LXhAiEAp0cWBSgDSOuGwZlzi9b10jTxB9PxmxuQi1Y%2FYEH1XWUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FaueeXEuAAaTpFFyrcA59A8MCJh0RZMHUBGGj%2BXMrF0XyZapFZ74wY1jB8pLadQ9PE9kz2V6apY2vHeXquEKKeezgSrtO7Du8A4LHyUMplhaLXDsWqeunDbOPSaLZOWNTD2o7pVBm9nxo4Jl30t8pIc0uhBXKATa7vuEzSuvs%2FydVI3SmAQJmfL18Q3IdRNOHN7%2F3WSFDl8fOmUOMyCStTA%2BpgF2sGEZrL6zbWp7E6ztPL82rxaIb0kgTMzEKhCuqebnO4HXxpj5tlWzgRVpawm5ZID%2BLF3JrlmuIMHVsLrjo9pFe0cz47Q42jghOXcvis7P8IFiZRpcZ%2FBYWeiF2TzulpChkgoXkV6EKZ9UcmxwB%2BmhbtTFTaIfBeVYRXKrAelDzQQpM7e1xjn39%2FDjcX3qZWbPIy4aExutkdnb%2FlYIasdjk66JLWpYVy%2FKdHe2kIItMa7RgBzHo4dvthtHFrj7qcPreFWf4R1z6xmwrX65mqDbGi9T08bFPlWKGdUZd7ZhvX1BgOslK%2BRTy7lGYolWvkN3O3XKFj97jB0wPCcsxADHcpdrHStElD1OGG0PFUSSprxhrONEMvvq7s9xZ7FlahvloITyXbEXPWwzkSsY%2B0HP5k2nYmjCJHLej%2FYysMEmEyo7cYu4p0MLfttMQGOqUBGXtalilmk8hvYhgANKTyhfUEO9qJEqND4HNb7BrPAMsQDQOBbF0uJ3c0OTPG%2Fw5wya4UEkGtLnI612Mv9xq%2F6q47VT%2FmT1MTmr%2BLgFZ131qxDXM1r%2BahP9iFmd%2FD5b5%2FM%2Bvgmx3D2A4Iv2DjONjajR8Fw2W9rulocwpvfSYnCQTG%2FNVhbw0A0%2BiWwRIJQi684WgpnAI9x0Tagfydh%2BFVUW66WF4O&X-Amz-Signature=7e2fee9a37e1fa6f1b3e4b247defbfb3ba0680fe6e697ccc17b637ef28b3e96e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WOQV2H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPKxBHaIfnJMC%2FYb%2Bth0DImLeqHdMDt%2FwI9ZjC%2F0LXhAiEAp0cWBSgDSOuGwZlzi9b10jTxB9PxmxuQi1Y%2FYEH1XWUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FaueeXEuAAaTpFFyrcA59A8MCJh0RZMHUBGGj%2BXMrF0XyZapFZ74wY1jB8pLadQ9PE9kz2V6apY2vHeXquEKKeezgSrtO7Du8A4LHyUMplhaLXDsWqeunDbOPSaLZOWNTD2o7pVBm9nxo4Jl30t8pIc0uhBXKATa7vuEzSuvs%2FydVI3SmAQJmfL18Q3IdRNOHN7%2F3WSFDl8fOmUOMyCStTA%2BpgF2sGEZrL6zbWp7E6ztPL82rxaIb0kgTMzEKhCuqebnO4HXxpj5tlWzgRVpawm5ZID%2BLF3JrlmuIMHVsLrjo9pFe0cz47Q42jghOXcvis7P8IFiZRpcZ%2FBYWeiF2TzulpChkgoXkV6EKZ9UcmxwB%2BmhbtTFTaIfBeVYRXKrAelDzQQpM7e1xjn39%2FDjcX3qZWbPIy4aExutkdnb%2FlYIasdjk66JLWpYVy%2FKdHe2kIItMa7RgBzHo4dvthtHFrj7qcPreFWf4R1z6xmwrX65mqDbGi9T08bFPlWKGdUZd7ZhvX1BgOslK%2BRTy7lGYolWvkN3O3XKFj97jB0wPCcsxADHcpdrHStElD1OGG0PFUSSprxhrONEMvvq7s9xZ7FlahvloITyXbEXPWwzkSsY%2B0HP5k2nYmjCJHLej%2FYysMEmEyo7cYu4p0MLfttMQGOqUBGXtalilmk8hvYhgANKTyhfUEO9qJEqND4HNb7BrPAMsQDQOBbF0uJ3c0OTPG%2Fw5wya4UEkGtLnI612Mv9xq%2F6q47VT%2FmT1MTmr%2BLgFZ131qxDXM1r%2BahP9iFmd%2FD5b5%2FM%2Bvgmx3D2A4Iv2DjONjajR8Fw2W9rulocwpvfSYnCQTG%2FNVhbw0A0%2BiWwRIJQi684WgpnAI9x0Tagfydh%2BFVUW66WF4O&X-Amz-Signature=c7d8a8649e4211a4f8f3e544431f7b639fab80538df02f7dfa7ce1363fd1eaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WOQV2H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPKxBHaIfnJMC%2FYb%2Bth0DImLeqHdMDt%2FwI9ZjC%2F0LXhAiEAp0cWBSgDSOuGwZlzi9b10jTxB9PxmxuQi1Y%2FYEH1XWUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FaueeXEuAAaTpFFyrcA59A8MCJh0RZMHUBGGj%2BXMrF0XyZapFZ74wY1jB8pLadQ9PE9kz2V6apY2vHeXquEKKeezgSrtO7Du8A4LHyUMplhaLXDsWqeunDbOPSaLZOWNTD2o7pVBm9nxo4Jl30t8pIc0uhBXKATa7vuEzSuvs%2FydVI3SmAQJmfL18Q3IdRNOHN7%2F3WSFDl8fOmUOMyCStTA%2BpgF2sGEZrL6zbWp7E6ztPL82rxaIb0kgTMzEKhCuqebnO4HXxpj5tlWzgRVpawm5ZID%2BLF3JrlmuIMHVsLrjo9pFe0cz47Q42jghOXcvis7P8IFiZRpcZ%2FBYWeiF2TzulpChkgoXkV6EKZ9UcmxwB%2BmhbtTFTaIfBeVYRXKrAelDzQQpM7e1xjn39%2FDjcX3qZWbPIy4aExutkdnb%2FlYIasdjk66JLWpYVy%2FKdHe2kIItMa7RgBzHo4dvthtHFrj7qcPreFWf4R1z6xmwrX65mqDbGi9T08bFPlWKGdUZd7ZhvX1BgOslK%2BRTy7lGYolWvkN3O3XKFj97jB0wPCcsxADHcpdrHStElD1OGG0PFUSSprxhrONEMvvq7s9xZ7FlahvloITyXbEXPWwzkSsY%2B0HP5k2nYmjCJHLej%2FYysMEmEyo7cYu4p0MLfttMQGOqUBGXtalilmk8hvYhgANKTyhfUEO9qJEqND4HNb7BrPAMsQDQOBbF0uJ3c0OTPG%2Fw5wya4UEkGtLnI612Mv9xq%2F6q47VT%2FmT1MTmr%2BLgFZ131qxDXM1r%2BahP9iFmd%2FD5b5%2FM%2Bvgmx3D2A4Iv2DjONjajR8Fw2W9rulocwpvfSYnCQTG%2FNVhbw0A0%2BiWwRIJQi684WgpnAI9x0Tagfydh%2BFVUW66WF4O&X-Amz-Signature=4104f5bf9cc27d331cfd259b5c656798e68efc99474e0601fd12465e8f5425e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WOQV2H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPKxBHaIfnJMC%2FYb%2Bth0DImLeqHdMDt%2FwI9ZjC%2F0LXhAiEAp0cWBSgDSOuGwZlzi9b10jTxB9PxmxuQi1Y%2FYEH1XWUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FaueeXEuAAaTpFFyrcA59A8MCJh0RZMHUBGGj%2BXMrF0XyZapFZ74wY1jB8pLadQ9PE9kz2V6apY2vHeXquEKKeezgSrtO7Du8A4LHyUMplhaLXDsWqeunDbOPSaLZOWNTD2o7pVBm9nxo4Jl30t8pIc0uhBXKATa7vuEzSuvs%2FydVI3SmAQJmfL18Q3IdRNOHN7%2F3WSFDl8fOmUOMyCStTA%2BpgF2sGEZrL6zbWp7E6ztPL82rxaIb0kgTMzEKhCuqebnO4HXxpj5tlWzgRVpawm5ZID%2BLF3JrlmuIMHVsLrjo9pFe0cz47Q42jghOXcvis7P8IFiZRpcZ%2FBYWeiF2TzulpChkgoXkV6EKZ9UcmxwB%2BmhbtTFTaIfBeVYRXKrAelDzQQpM7e1xjn39%2FDjcX3qZWbPIy4aExutkdnb%2FlYIasdjk66JLWpYVy%2FKdHe2kIItMa7RgBzHo4dvthtHFrj7qcPreFWf4R1z6xmwrX65mqDbGi9T08bFPlWKGdUZd7ZhvX1BgOslK%2BRTy7lGYolWvkN3O3XKFj97jB0wPCcsxADHcpdrHStElD1OGG0PFUSSprxhrONEMvvq7s9xZ7FlahvloITyXbEXPWwzkSsY%2B0HP5k2nYmjCJHLej%2FYysMEmEyo7cYu4p0MLfttMQGOqUBGXtalilmk8hvYhgANKTyhfUEO9qJEqND4HNb7BrPAMsQDQOBbF0uJ3c0OTPG%2Fw5wya4UEkGtLnI612Mv9xq%2F6q47VT%2FmT1MTmr%2BLgFZ131qxDXM1r%2BahP9iFmd%2FD5b5%2FM%2Bvgmx3D2A4Iv2DjONjajR8Fw2W9rulocwpvfSYnCQTG%2FNVhbw0A0%2BiWwRIJQi684WgpnAI9x0Tagfydh%2BFVUW66WF4O&X-Amz-Signature=c6f596dfff174f8b62be996403781200a72e9dad7d629f1e84822c78f4c74a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WOQV2H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPKxBHaIfnJMC%2FYb%2Bth0DImLeqHdMDt%2FwI9ZjC%2F0LXhAiEAp0cWBSgDSOuGwZlzi9b10jTxB9PxmxuQi1Y%2FYEH1XWUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FaueeXEuAAaTpFFyrcA59A8MCJh0RZMHUBGGj%2BXMrF0XyZapFZ74wY1jB8pLadQ9PE9kz2V6apY2vHeXquEKKeezgSrtO7Du8A4LHyUMplhaLXDsWqeunDbOPSaLZOWNTD2o7pVBm9nxo4Jl30t8pIc0uhBXKATa7vuEzSuvs%2FydVI3SmAQJmfL18Q3IdRNOHN7%2F3WSFDl8fOmUOMyCStTA%2BpgF2sGEZrL6zbWp7E6ztPL82rxaIb0kgTMzEKhCuqebnO4HXxpj5tlWzgRVpawm5ZID%2BLF3JrlmuIMHVsLrjo9pFe0cz47Q42jghOXcvis7P8IFiZRpcZ%2FBYWeiF2TzulpChkgoXkV6EKZ9UcmxwB%2BmhbtTFTaIfBeVYRXKrAelDzQQpM7e1xjn39%2FDjcX3qZWbPIy4aExutkdnb%2FlYIasdjk66JLWpYVy%2FKdHe2kIItMa7RgBzHo4dvthtHFrj7qcPreFWf4R1z6xmwrX65mqDbGi9T08bFPlWKGdUZd7ZhvX1BgOslK%2BRTy7lGYolWvkN3O3XKFj97jB0wPCcsxADHcpdrHStElD1OGG0PFUSSprxhrONEMvvq7s9xZ7FlahvloITyXbEXPWwzkSsY%2B0HP5k2nYmjCJHLej%2FYysMEmEyo7cYu4p0MLfttMQGOqUBGXtalilmk8hvYhgANKTyhfUEO9qJEqND4HNb7BrPAMsQDQOBbF0uJ3c0OTPG%2Fw5wya4UEkGtLnI612Mv9xq%2F6q47VT%2FmT1MTmr%2BLgFZ131qxDXM1r%2BahP9iFmd%2FD5b5%2FM%2Bvgmx3D2A4Iv2DjONjajR8Fw2W9rulocwpvfSYnCQTG%2FNVhbw0A0%2BiWwRIJQi684WgpnAI9x0Tagfydh%2BFVUW66WF4O&X-Amz-Signature=6e06585781babcfbff65bd86489007add4e6a297b5fc4c9a595c1e54d173f454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WOQV2H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPKxBHaIfnJMC%2FYb%2Bth0DImLeqHdMDt%2FwI9ZjC%2F0LXhAiEAp0cWBSgDSOuGwZlzi9b10jTxB9PxmxuQi1Y%2FYEH1XWUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FaueeXEuAAaTpFFyrcA59A8MCJh0RZMHUBGGj%2BXMrF0XyZapFZ74wY1jB8pLadQ9PE9kz2V6apY2vHeXquEKKeezgSrtO7Du8A4LHyUMplhaLXDsWqeunDbOPSaLZOWNTD2o7pVBm9nxo4Jl30t8pIc0uhBXKATa7vuEzSuvs%2FydVI3SmAQJmfL18Q3IdRNOHN7%2F3WSFDl8fOmUOMyCStTA%2BpgF2sGEZrL6zbWp7E6ztPL82rxaIb0kgTMzEKhCuqebnO4HXxpj5tlWzgRVpawm5ZID%2BLF3JrlmuIMHVsLrjo9pFe0cz47Q42jghOXcvis7P8IFiZRpcZ%2FBYWeiF2TzulpChkgoXkV6EKZ9UcmxwB%2BmhbtTFTaIfBeVYRXKrAelDzQQpM7e1xjn39%2FDjcX3qZWbPIy4aExutkdnb%2FlYIasdjk66JLWpYVy%2FKdHe2kIItMa7RgBzHo4dvthtHFrj7qcPreFWf4R1z6xmwrX65mqDbGi9T08bFPlWKGdUZd7ZhvX1BgOslK%2BRTy7lGYolWvkN3O3XKFj97jB0wPCcsxADHcpdrHStElD1OGG0PFUSSprxhrONEMvvq7s9xZ7FlahvloITyXbEXPWwzkSsY%2B0HP5k2nYmjCJHLej%2FYysMEmEyo7cYu4p0MLfttMQGOqUBGXtalilmk8hvYhgANKTyhfUEO9qJEqND4HNb7BrPAMsQDQOBbF0uJ3c0OTPG%2Fw5wya4UEkGtLnI612Mv9xq%2F6q47VT%2FmT1MTmr%2BLgFZ131qxDXM1r%2BahP9iFmd%2FD5b5%2FM%2Bvgmx3D2A4Iv2DjONjajR8Fw2W9rulocwpvfSYnCQTG%2FNVhbw0A0%2BiWwRIJQi684WgpnAI9x0Tagfydh%2BFVUW66WF4O&X-Amz-Signature=18eb3b0296f1e6df8d01880d861e64328d8b088bb86e261737945ff0b27552aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WOQV2H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPKxBHaIfnJMC%2FYb%2Bth0DImLeqHdMDt%2FwI9ZjC%2F0LXhAiEAp0cWBSgDSOuGwZlzi9b10jTxB9PxmxuQi1Y%2FYEH1XWUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FaueeXEuAAaTpFFyrcA59A8MCJh0RZMHUBGGj%2BXMrF0XyZapFZ74wY1jB8pLadQ9PE9kz2V6apY2vHeXquEKKeezgSrtO7Du8A4LHyUMplhaLXDsWqeunDbOPSaLZOWNTD2o7pVBm9nxo4Jl30t8pIc0uhBXKATa7vuEzSuvs%2FydVI3SmAQJmfL18Q3IdRNOHN7%2F3WSFDl8fOmUOMyCStTA%2BpgF2sGEZrL6zbWp7E6ztPL82rxaIb0kgTMzEKhCuqebnO4HXxpj5tlWzgRVpawm5ZID%2BLF3JrlmuIMHVsLrjo9pFe0cz47Q42jghOXcvis7P8IFiZRpcZ%2FBYWeiF2TzulpChkgoXkV6EKZ9UcmxwB%2BmhbtTFTaIfBeVYRXKrAelDzQQpM7e1xjn39%2FDjcX3qZWbPIy4aExutkdnb%2FlYIasdjk66JLWpYVy%2FKdHe2kIItMa7RgBzHo4dvthtHFrj7qcPreFWf4R1z6xmwrX65mqDbGi9T08bFPlWKGdUZd7ZhvX1BgOslK%2BRTy7lGYolWvkN3O3XKFj97jB0wPCcsxADHcpdrHStElD1OGG0PFUSSprxhrONEMvvq7s9xZ7FlahvloITyXbEXPWwzkSsY%2B0HP5k2nYmjCJHLej%2FYysMEmEyo7cYu4p0MLfttMQGOqUBGXtalilmk8hvYhgANKTyhfUEO9qJEqND4HNb7BrPAMsQDQOBbF0uJ3c0OTPG%2Fw5wya4UEkGtLnI612Mv9xq%2F6q47VT%2FmT1MTmr%2BLgFZ131qxDXM1r%2BahP9iFmd%2FD5b5%2FM%2Bvgmx3D2A4Iv2DjONjajR8Fw2W9rulocwpvfSYnCQTG%2FNVhbw0A0%2BiWwRIJQi684WgpnAI9x0Tagfydh%2BFVUW66WF4O&X-Amz-Signature=651fb2f6ef1bc08bea8ba2a4ad6e2c2b35958ff30bc757d884c5becf3621966f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WOQV2H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPKxBHaIfnJMC%2FYb%2Bth0DImLeqHdMDt%2FwI9ZjC%2F0LXhAiEAp0cWBSgDSOuGwZlzi9b10jTxB9PxmxuQi1Y%2FYEH1XWUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FaueeXEuAAaTpFFyrcA59A8MCJh0RZMHUBGGj%2BXMrF0XyZapFZ74wY1jB8pLadQ9PE9kz2V6apY2vHeXquEKKeezgSrtO7Du8A4LHyUMplhaLXDsWqeunDbOPSaLZOWNTD2o7pVBm9nxo4Jl30t8pIc0uhBXKATa7vuEzSuvs%2FydVI3SmAQJmfL18Q3IdRNOHN7%2F3WSFDl8fOmUOMyCStTA%2BpgF2sGEZrL6zbWp7E6ztPL82rxaIb0kgTMzEKhCuqebnO4HXxpj5tlWzgRVpawm5ZID%2BLF3JrlmuIMHVsLrjo9pFe0cz47Q42jghOXcvis7P8IFiZRpcZ%2FBYWeiF2TzulpChkgoXkV6EKZ9UcmxwB%2BmhbtTFTaIfBeVYRXKrAelDzQQpM7e1xjn39%2FDjcX3qZWbPIy4aExutkdnb%2FlYIasdjk66JLWpYVy%2FKdHe2kIItMa7RgBzHo4dvthtHFrj7qcPreFWf4R1z6xmwrX65mqDbGi9T08bFPlWKGdUZd7ZhvX1BgOslK%2BRTy7lGYolWvkN3O3XKFj97jB0wPCcsxADHcpdrHStElD1OGG0PFUSSprxhrONEMvvq7s9xZ7FlahvloITyXbEXPWwzkSsY%2B0HP5k2nYmjCJHLej%2FYysMEmEyo7cYu4p0MLfttMQGOqUBGXtalilmk8hvYhgANKTyhfUEO9qJEqND4HNb7BrPAMsQDQOBbF0uJ3c0OTPG%2Fw5wya4UEkGtLnI612Mv9xq%2F6q47VT%2FmT1MTmr%2BLgFZ131qxDXM1r%2BahP9iFmd%2FD5b5%2FM%2Bvgmx3D2A4Iv2DjONjajR8Fw2W9rulocwpvfSYnCQTG%2FNVhbw0A0%2BiWwRIJQi684WgpnAI9x0Tagfydh%2BFVUW66WF4O&X-Amz-Signature=21db8995d1c6916d20ed974d7dce07fe42195e94b34b71366c012908fcf23bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WOQV2H%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPKxBHaIfnJMC%2FYb%2Bth0DImLeqHdMDt%2FwI9ZjC%2F0LXhAiEAp0cWBSgDSOuGwZlzi9b10jTxB9PxmxuQi1Y%2FYEH1XWUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FaueeXEuAAaTpFFyrcA59A8MCJh0RZMHUBGGj%2BXMrF0XyZapFZ74wY1jB8pLadQ9PE9kz2V6apY2vHeXquEKKeezgSrtO7Du8A4LHyUMplhaLXDsWqeunDbOPSaLZOWNTD2o7pVBm9nxo4Jl30t8pIc0uhBXKATa7vuEzSuvs%2FydVI3SmAQJmfL18Q3IdRNOHN7%2F3WSFDl8fOmUOMyCStTA%2BpgF2sGEZrL6zbWp7E6ztPL82rxaIb0kgTMzEKhCuqebnO4HXxpj5tlWzgRVpawm5ZID%2BLF3JrlmuIMHVsLrjo9pFe0cz47Q42jghOXcvis7P8IFiZRpcZ%2FBYWeiF2TzulpChkgoXkV6EKZ9UcmxwB%2BmhbtTFTaIfBeVYRXKrAelDzQQpM7e1xjn39%2FDjcX3qZWbPIy4aExutkdnb%2FlYIasdjk66JLWpYVy%2FKdHe2kIItMa7RgBzHo4dvthtHFrj7qcPreFWf4R1z6xmwrX65mqDbGi9T08bFPlWKGdUZd7ZhvX1BgOslK%2BRTy7lGYolWvkN3O3XKFj97jB0wPCcsxADHcpdrHStElD1OGG0PFUSSprxhrONEMvvq7s9xZ7FlahvloITyXbEXPWwzkSsY%2B0HP5k2nYmjCJHLej%2FYysMEmEyo7cYu4p0MLfttMQGOqUBGXtalilmk8hvYhgANKTyhfUEO9qJEqND4HNb7BrPAMsQDQOBbF0uJ3c0OTPG%2Fw5wya4UEkGtLnI612Mv9xq%2F6q47VT%2FmT1MTmr%2BLgFZ131qxDXM1r%2BahP9iFmd%2FD5b5%2FM%2Bvgmx3D2A4Iv2DjONjajR8Fw2W9rulocwpvfSYnCQTG%2FNVhbw0A0%2BiWwRIJQi684WgpnAI9x0Tagfydh%2BFVUW66WF4O&X-Amz-Signature=c0a89effa88e563f766cb6b85df29a918a8f383575bcd317785b256f41e01a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

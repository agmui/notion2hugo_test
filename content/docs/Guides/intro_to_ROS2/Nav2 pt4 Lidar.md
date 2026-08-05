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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRTWKXK%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDBeg4oBTvf9MXpOg5b2BpLWsb7Cj7qLWL4hu3W6REUgQIhAOM4SYMyGc4BSZeZ0mlXsmX0P1ScGDR2Xrg0VtMWI2qGKv8DCBoQABoMNjM3NDIzMTgzODA1Igza3vk1VVOfvBN%2BQ8wq3APKUnYSc7Z4lOaeid4blDHgmmGDkx286owu4ZAwA90rjxit53hkZoMJjnfaIJD4ZDSdqFfPQNJefy5vCYKQ3DvOqz8uGRIxZB%2BtodYnUIZNCf5UzWdTE6gSpYkH1hcGlCzPKo6Dx7f5HXiK6PBEmHzg3eqzB7WeoyMCDIV1XMcI6x7vvQJgSG2c9ht427576TyXXNIjhY195rLQecBSm06lj%2BFcW0ry%2FygKGy8Yhwi2HfKBtUOALWapp7%2FcLa%2FRotJu%2FcM1UoaPB0O2ZyNNVsXvdup4WvZAyXWkbkqO8Z9VQNHm%2B%2FbO1qEXBFjDIvHbCFkcbhZdkYQUK1DRK5LB%2BAra%2BTBoyxhxbQQUCh%2F5vyy7eL2Z4ZaJ%2BN4eCPjfOTmTrHd7vnL2gjLB88zcR3pyQOULQp0AaMZoShhkIW8vyQdTX6YAoWgI3Y84UlulDvoRYp32Xw2VX80wDtNIcL1PyOtlUmW53ZlYuflxme2ng4IjT5Upo5FkwaAUVbD0pLsdBwyp4DazLrzBAvpw5xK%2Bg2SZpEZLPXsNSaWFYnOl1v%2BUNSJq1mF6kEpXhxw47lX7YyzFcZG6huRyetUFVT6BLEJS7k0GPJxB%2BA0qvZfXZrOA3%2F8bkmG%2FmV1KrvX6ljD1lcrTBjqkAReeEcDk3WAFWk2lp1t2tai7uNn47VEvBHWCdxy166jXBLUygkfd%2B%2FpLpUo%2BpXEd%2BUfGETz1rXQT34yskwKyu6tgYrkcSb90Bcu7Q7WfNoZ8Yjmi5qnDU0v9ESgzvSBfxSLPGCoaSAAPdmNoiG2ksV7Bc2vHGEnNV1Csfp4Obi%2FMa4cj7kxxnioXS0GgTYh8ShzSNnOkmhH5ujzlWLol5Iz2WY9q&X-Amz-Signature=fb506b9af2abd744f4f1bfb77bc2e6a054701d0f56a3f713b2bc45665ff81333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6BFYOZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICbnf12zVFt381d%2Bx%2FaFW3Braww8nYFnwEKv84NFXt9TAiEA6XQTq6B5kqjXJScxCzUFLg1CRcU5wBus2PBPxNrwGPEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDABFNvk0BN2WqodB5ircAxnDb3gui8NcidUFv2h1zlbWa%2B2L%2BORjAiZj1tSVimI%2FsTqCxp%2B%2BKVqwoIE%2FxcKsVDoxr8QNp%2BnZXPlbtbcCqBedjoCvpxw1Z%2B%2F8uIfPfOuQPz62grLfjE3SPCmkd9XWS3q9C8UmfeePrcF5A4EMoDDU1goiXCLSGx9c8OmlY%2FmvEcTctz2kZi4c9Z2NOwyNAJ4t1w3c3QCEYQm2aN2VoInaQdM3XqiQYJkAmyDCL%2FSFlGTu8NjiBoHp6sMSWlYR2%2FG5kh9VVbpNlswMuspTWMNcgDoDLx2%2B%2B2FXeA8ZfroDTQaNqvdDsgVb0aFoxlQaN90er8NKLWNK6rARNviJWLFVIg0%2BKuGedx4pIL1meYd1DAzRtrgkYcYEPDMcjdpYJ9KE%2F4I3FKQtC7IkvcwDPVz45w1mOLK%2FnC4jvh%2FNta9ZnZHAhBxGZvEBze4yylgiQv17UGt3dg1NWHkLO4J8Xcz4X6V80OfkhzcRZoqO1MeCvXoZp0WXq8JQE51hFMdM%2FI%2BKiPE069C86TAjmuqTpuIarOLxu%2FDLPO747spG6AggAhctflglk1AzRD%2BQpva%2BnYX0KVDUmJyHgyqdT4LGKgl6Yx1rhmNhH5%2B1%2BeeLCLaREnWH5fDIc2Ohi%2FYVMLKUytMGOqUBDJtMUxFCwn9YxwFmz4W%2BoCDqYiTm33Y6H6t4GhgPi0Iu3tHhTvEsgtQesN4oRXOxpSeVGPZ3QGRDdXWzda6tCg0%2Bs4oV0OiqyC6dbWCe3P4mtPPiHSNISgXBH7X%2F8TxIezYAZRXj1heqBHHUbTfrM0HMRkXlepZILj%2B9fOrOn2GmpeRy1muo4gyIHRR0r9IDUKjG2emRc%2FBro6BJ6T0EM29UcxXl&X-Amz-Signature=c6dc10a5c776a4baf6bea235716e6c56c196028b346cc22f3db99fb6b79e0aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6BFYOZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICbnf12zVFt381d%2Bx%2FaFW3Braww8nYFnwEKv84NFXt9TAiEA6XQTq6B5kqjXJScxCzUFLg1CRcU5wBus2PBPxNrwGPEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDABFNvk0BN2WqodB5ircAxnDb3gui8NcidUFv2h1zlbWa%2B2L%2BORjAiZj1tSVimI%2FsTqCxp%2B%2BKVqwoIE%2FxcKsVDoxr8QNp%2BnZXPlbtbcCqBedjoCvpxw1Z%2B%2F8uIfPfOuQPz62grLfjE3SPCmkd9XWS3q9C8UmfeePrcF5A4EMoDDU1goiXCLSGx9c8OmlY%2FmvEcTctz2kZi4c9Z2NOwyNAJ4t1w3c3QCEYQm2aN2VoInaQdM3XqiQYJkAmyDCL%2FSFlGTu8NjiBoHp6sMSWlYR2%2FG5kh9VVbpNlswMuspTWMNcgDoDLx2%2B%2B2FXeA8ZfroDTQaNqvdDsgVb0aFoxlQaN90er8NKLWNK6rARNviJWLFVIg0%2BKuGedx4pIL1meYd1DAzRtrgkYcYEPDMcjdpYJ9KE%2F4I3FKQtC7IkvcwDPVz45w1mOLK%2FnC4jvh%2FNta9ZnZHAhBxGZvEBze4yylgiQv17UGt3dg1NWHkLO4J8Xcz4X6V80OfkhzcRZoqO1MeCvXoZp0WXq8JQE51hFMdM%2FI%2BKiPE069C86TAjmuqTpuIarOLxu%2FDLPO747spG6AggAhctflglk1AzRD%2BQpva%2BnYX0KVDUmJyHgyqdT4LGKgl6Yx1rhmNhH5%2B1%2BeeLCLaREnWH5fDIc2Ohi%2FYVMLKUytMGOqUBDJtMUxFCwn9YxwFmz4W%2BoCDqYiTm33Y6H6t4GhgPi0Iu3tHhTvEsgtQesN4oRXOxpSeVGPZ3QGRDdXWzda6tCg0%2Bs4oV0OiqyC6dbWCe3P4mtPPiHSNISgXBH7X%2F8TxIezYAZRXj1heqBHHUbTfrM0HMRkXlepZILj%2B9fOrOn2GmpeRy1muo4gyIHRR0r9IDUKjG2emRc%2FBro6BJ6T0EM29UcxXl&X-Amz-Signature=0596ada961811ade6add1e44b0d2f353d9bdb1a7da1551108a8c0c73fe7157b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6BFYOZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICbnf12zVFt381d%2Bx%2FaFW3Braww8nYFnwEKv84NFXt9TAiEA6XQTq6B5kqjXJScxCzUFLg1CRcU5wBus2PBPxNrwGPEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDABFNvk0BN2WqodB5ircAxnDb3gui8NcidUFv2h1zlbWa%2B2L%2BORjAiZj1tSVimI%2FsTqCxp%2B%2BKVqwoIE%2FxcKsVDoxr8QNp%2BnZXPlbtbcCqBedjoCvpxw1Z%2B%2F8uIfPfOuQPz62grLfjE3SPCmkd9XWS3q9C8UmfeePrcF5A4EMoDDU1goiXCLSGx9c8OmlY%2FmvEcTctz2kZi4c9Z2NOwyNAJ4t1w3c3QCEYQm2aN2VoInaQdM3XqiQYJkAmyDCL%2FSFlGTu8NjiBoHp6sMSWlYR2%2FG5kh9VVbpNlswMuspTWMNcgDoDLx2%2B%2B2FXeA8ZfroDTQaNqvdDsgVb0aFoxlQaN90er8NKLWNK6rARNviJWLFVIg0%2BKuGedx4pIL1meYd1DAzRtrgkYcYEPDMcjdpYJ9KE%2F4I3FKQtC7IkvcwDPVz45w1mOLK%2FnC4jvh%2FNta9ZnZHAhBxGZvEBze4yylgiQv17UGt3dg1NWHkLO4J8Xcz4X6V80OfkhzcRZoqO1MeCvXoZp0WXq8JQE51hFMdM%2FI%2BKiPE069C86TAjmuqTpuIarOLxu%2FDLPO747spG6AggAhctflglk1AzRD%2BQpva%2BnYX0KVDUmJyHgyqdT4LGKgl6Yx1rhmNhH5%2B1%2BeeLCLaREnWH5fDIc2Ohi%2FYVMLKUytMGOqUBDJtMUxFCwn9YxwFmz4W%2BoCDqYiTm33Y6H6t4GhgPi0Iu3tHhTvEsgtQesN4oRXOxpSeVGPZ3QGRDdXWzda6tCg0%2Bs4oV0OiqyC6dbWCe3P4mtPPiHSNISgXBH7X%2F8TxIezYAZRXj1heqBHHUbTfrM0HMRkXlepZILj%2B9fOrOn2GmpeRy1muo4gyIHRR0r9IDUKjG2emRc%2FBro6BJ6T0EM29UcxXl&X-Amz-Signature=f49f3bc7fd509cb346c1b1602c650bc2e218b0e835d4e30a0cc8aa29ba37368d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6BFYOZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICbnf12zVFt381d%2Bx%2FaFW3Braww8nYFnwEKv84NFXt9TAiEA6XQTq6B5kqjXJScxCzUFLg1CRcU5wBus2PBPxNrwGPEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDABFNvk0BN2WqodB5ircAxnDb3gui8NcidUFv2h1zlbWa%2B2L%2BORjAiZj1tSVimI%2FsTqCxp%2B%2BKVqwoIE%2FxcKsVDoxr8QNp%2BnZXPlbtbcCqBedjoCvpxw1Z%2B%2F8uIfPfOuQPz62grLfjE3SPCmkd9XWS3q9C8UmfeePrcF5A4EMoDDU1goiXCLSGx9c8OmlY%2FmvEcTctz2kZi4c9Z2NOwyNAJ4t1w3c3QCEYQm2aN2VoInaQdM3XqiQYJkAmyDCL%2FSFlGTu8NjiBoHp6sMSWlYR2%2FG5kh9VVbpNlswMuspTWMNcgDoDLx2%2B%2B2FXeA8ZfroDTQaNqvdDsgVb0aFoxlQaN90er8NKLWNK6rARNviJWLFVIg0%2BKuGedx4pIL1meYd1DAzRtrgkYcYEPDMcjdpYJ9KE%2F4I3FKQtC7IkvcwDPVz45w1mOLK%2FnC4jvh%2FNta9ZnZHAhBxGZvEBze4yylgiQv17UGt3dg1NWHkLO4J8Xcz4X6V80OfkhzcRZoqO1MeCvXoZp0WXq8JQE51hFMdM%2FI%2BKiPE069C86TAjmuqTpuIarOLxu%2FDLPO747spG6AggAhctflglk1AzRD%2BQpva%2BnYX0KVDUmJyHgyqdT4LGKgl6Yx1rhmNhH5%2B1%2BeeLCLaREnWH5fDIc2Ohi%2FYVMLKUytMGOqUBDJtMUxFCwn9YxwFmz4W%2BoCDqYiTm33Y6H6t4GhgPi0Iu3tHhTvEsgtQesN4oRXOxpSeVGPZ3QGRDdXWzda6tCg0%2Bs4oV0OiqyC6dbWCe3P4mtPPiHSNISgXBH7X%2F8TxIezYAZRXj1heqBHHUbTfrM0HMRkXlepZILj%2B9fOrOn2GmpeRy1muo4gyIHRR0r9IDUKjG2emRc%2FBro6BJ6T0EM29UcxXl&X-Amz-Signature=13f3a210cb3d5458343bb8ab744bb1e876b6823bb2dad749d14540ee2bc2a932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6BFYOZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICbnf12zVFt381d%2Bx%2FaFW3Braww8nYFnwEKv84NFXt9TAiEA6XQTq6B5kqjXJScxCzUFLg1CRcU5wBus2PBPxNrwGPEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDABFNvk0BN2WqodB5ircAxnDb3gui8NcidUFv2h1zlbWa%2B2L%2BORjAiZj1tSVimI%2FsTqCxp%2B%2BKVqwoIE%2FxcKsVDoxr8QNp%2BnZXPlbtbcCqBedjoCvpxw1Z%2B%2F8uIfPfOuQPz62grLfjE3SPCmkd9XWS3q9C8UmfeePrcF5A4EMoDDU1goiXCLSGx9c8OmlY%2FmvEcTctz2kZi4c9Z2NOwyNAJ4t1w3c3QCEYQm2aN2VoInaQdM3XqiQYJkAmyDCL%2FSFlGTu8NjiBoHp6sMSWlYR2%2FG5kh9VVbpNlswMuspTWMNcgDoDLx2%2B%2B2FXeA8ZfroDTQaNqvdDsgVb0aFoxlQaN90er8NKLWNK6rARNviJWLFVIg0%2BKuGedx4pIL1meYd1DAzRtrgkYcYEPDMcjdpYJ9KE%2F4I3FKQtC7IkvcwDPVz45w1mOLK%2FnC4jvh%2FNta9ZnZHAhBxGZvEBze4yylgiQv17UGt3dg1NWHkLO4J8Xcz4X6V80OfkhzcRZoqO1MeCvXoZp0WXq8JQE51hFMdM%2FI%2BKiPE069C86TAjmuqTpuIarOLxu%2FDLPO747spG6AggAhctflglk1AzRD%2BQpva%2BnYX0KVDUmJyHgyqdT4LGKgl6Yx1rhmNhH5%2B1%2BeeLCLaREnWH5fDIc2Ohi%2FYVMLKUytMGOqUBDJtMUxFCwn9YxwFmz4W%2BoCDqYiTm33Y6H6t4GhgPi0Iu3tHhTvEsgtQesN4oRXOxpSeVGPZ3QGRDdXWzda6tCg0%2Bs4oV0OiqyC6dbWCe3P4mtPPiHSNISgXBH7X%2F8TxIezYAZRXj1heqBHHUbTfrM0HMRkXlepZILj%2B9fOrOn2GmpeRy1muo4gyIHRR0r9IDUKjG2emRc%2FBro6BJ6T0EM29UcxXl&X-Amz-Signature=821f83fbea9575850036cc8f5c2192affca5d8981ac8d145ab9f4686edeaa229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6BFYOZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICbnf12zVFt381d%2Bx%2FaFW3Braww8nYFnwEKv84NFXt9TAiEA6XQTq6B5kqjXJScxCzUFLg1CRcU5wBus2PBPxNrwGPEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDABFNvk0BN2WqodB5ircAxnDb3gui8NcidUFv2h1zlbWa%2B2L%2BORjAiZj1tSVimI%2FsTqCxp%2B%2BKVqwoIE%2FxcKsVDoxr8QNp%2BnZXPlbtbcCqBedjoCvpxw1Z%2B%2F8uIfPfOuQPz62grLfjE3SPCmkd9XWS3q9C8UmfeePrcF5A4EMoDDU1goiXCLSGx9c8OmlY%2FmvEcTctz2kZi4c9Z2NOwyNAJ4t1w3c3QCEYQm2aN2VoInaQdM3XqiQYJkAmyDCL%2FSFlGTu8NjiBoHp6sMSWlYR2%2FG5kh9VVbpNlswMuspTWMNcgDoDLx2%2B%2B2FXeA8ZfroDTQaNqvdDsgVb0aFoxlQaN90er8NKLWNK6rARNviJWLFVIg0%2BKuGedx4pIL1meYd1DAzRtrgkYcYEPDMcjdpYJ9KE%2F4I3FKQtC7IkvcwDPVz45w1mOLK%2FnC4jvh%2FNta9ZnZHAhBxGZvEBze4yylgiQv17UGt3dg1NWHkLO4J8Xcz4X6V80OfkhzcRZoqO1MeCvXoZp0WXq8JQE51hFMdM%2FI%2BKiPE069C86TAjmuqTpuIarOLxu%2FDLPO747spG6AggAhctflglk1AzRD%2BQpva%2BnYX0KVDUmJyHgyqdT4LGKgl6Yx1rhmNhH5%2B1%2BeeLCLaREnWH5fDIc2Ohi%2FYVMLKUytMGOqUBDJtMUxFCwn9YxwFmz4W%2BoCDqYiTm33Y6H6t4GhgPi0Iu3tHhTvEsgtQesN4oRXOxpSeVGPZ3QGRDdXWzda6tCg0%2Bs4oV0OiqyC6dbWCe3P4mtPPiHSNISgXBH7X%2F8TxIezYAZRXj1heqBHHUbTfrM0HMRkXlepZILj%2B9fOrOn2GmpeRy1muo4gyIHRR0r9IDUKjG2emRc%2FBro6BJ6T0EM29UcxXl&X-Amz-Signature=7328e3a99e1df2b20445c194d7c2364863d2d2b13fc7e7f08cbe2e3afc3200a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6BFYOZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICbnf12zVFt381d%2Bx%2FaFW3Braww8nYFnwEKv84NFXt9TAiEA6XQTq6B5kqjXJScxCzUFLg1CRcU5wBus2PBPxNrwGPEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDABFNvk0BN2WqodB5ircAxnDb3gui8NcidUFv2h1zlbWa%2B2L%2BORjAiZj1tSVimI%2FsTqCxp%2B%2BKVqwoIE%2FxcKsVDoxr8QNp%2BnZXPlbtbcCqBedjoCvpxw1Z%2B%2F8uIfPfOuQPz62grLfjE3SPCmkd9XWS3q9C8UmfeePrcF5A4EMoDDU1goiXCLSGx9c8OmlY%2FmvEcTctz2kZi4c9Z2NOwyNAJ4t1w3c3QCEYQm2aN2VoInaQdM3XqiQYJkAmyDCL%2FSFlGTu8NjiBoHp6sMSWlYR2%2FG5kh9VVbpNlswMuspTWMNcgDoDLx2%2B%2B2FXeA8ZfroDTQaNqvdDsgVb0aFoxlQaN90er8NKLWNK6rARNviJWLFVIg0%2BKuGedx4pIL1meYd1DAzRtrgkYcYEPDMcjdpYJ9KE%2F4I3FKQtC7IkvcwDPVz45w1mOLK%2FnC4jvh%2FNta9ZnZHAhBxGZvEBze4yylgiQv17UGt3dg1NWHkLO4J8Xcz4X6V80OfkhzcRZoqO1MeCvXoZp0WXq8JQE51hFMdM%2FI%2BKiPE069C86TAjmuqTpuIarOLxu%2FDLPO747spG6AggAhctflglk1AzRD%2BQpva%2BnYX0KVDUmJyHgyqdT4LGKgl6Yx1rhmNhH5%2B1%2BeeLCLaREnWH5fDIc2Ohi%2FYVMLKUytMGOqUBDJtMUxFCwn9YxwFmz4W%2BoCDqYiTm33Y6H6t4GhgPi0Iu3tHhTvEsgtQesN4oRXOxpSeVGPZ3QGRDdXWzda6tCg0%2Bs4oV0OiqyC6dbWCe3P4mtPPiHSNISgXBH7X%2F8TxIezYAZRXj1heqBHHUbTfrM0HMRkXlepZILj%2B9fOrOn2GmpeRy1muo4gyIHRR0r9IDUKjG2emRc%2FBro6BJ6T0EM29UcxXl&X-Amz-Signature=b7ef40203fa27f4e392d0915c7fe7746039f8386eca767fdfdd05bee14026747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6BFYOZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICbnf12zVFt381d%2Bx%2FaFW3Braww8nYFnwEKv84NFXt9TAiEA6XQTq6B5kqjXJScxCzUFLg1CRcU5wBus2PBPxNrwGPEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDABFNvk0BN2WqodB5ircAxnDb3gui8NcidUFv2h1zlbWa%2B2L%2BORjAiZj1tSVimI%2FsTqCxp%2B%2BKVqwoIE%2FxcKsVDoxr8QNp%2BnZXPlbtbcCqBedjoCvpxw1Z%2B%2F8uIfPfOuQPz62grLfjE3SPCmkd9XWS3q9C8UmfeePrcF5A4EMoDDU1goiXCLSGx9c8OmlY%2FmvEcTctz2kZi4c9Z2NOwyNAJ4t1w3c3QCEYQm2aN2VoInaQdM3XqiQYJkAmyDCL%2FSFlGTu8NjiBoHp6sMSWlYR2%2FG5kh9VVbpNlswMuspTWMNcgDoDLx2%2B%2B2FXeA8ZfroDTQaNqvdDsgVb0aFoxlQaN90er8NKLWNK6rARNviJWLFVIg0%2BKuGedx4pIL1meYd1DAzRtrgkYcYEPDMcjdpYJ9KE%2F4I3FKQtC7IkvcwDPVz45w1mOLK%2FnC4jvh%2FNta9ZnZHAhBxGZvEBze4yylgiQv17UGt3dg1NWHkLO4J8Xcz4X6V80OfkhzcRZoqO1MeCvXoZp0WXq8JQE51hFMdM%2FI%2BKiPE069C86TAjmuqTpuIarOLxu%2FDLPO747spG6AggAhctflglk1AzRD%2BQpva%2BnYX0KVDUmJyHgyqdT4LGKgl6Yx1rhmNhH5%2B1%2BeeLCLaREnWH5fDIc2Ohi%2FYVMLKUytMGOqUBDJtMUxFCwn9YxwFmz4W%2BoCDqYiTm33Y6H6t4GhgPi0Iu3tHhTvEsgtQesN4oRXOxpSeVGPZ3QGRDdXWzda6tCg0%2Bs4oV0OiqyC6dbWCe3P4mtPPiHSNISgXBH7X%2F8TxIezYAZRXj1heqBHHUbTfrM0HMRkXlepZILj%2B9fOrOn2GmpeRy1muo4gyIHRR0r9IDUKjG2emRc%2FBro6BJ6T0EM29UcxXl&X-Amz-Signature=742239e4443b5088df68ad974af387861a21d9836a1990fec9d0d6ee70023f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6BFYOZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICbnf12zVFt381d%2Bx%2FaFW3Braww8nYFnwEKv84NFXt9TAiEA6XQTq6B5kqjXJScxCzUFLg1CRcU5wBus2PBPxNrwGPEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDABFNvk0BN2WqodB5ircAxnDb3gui8NcidUFv2h1zlbWa%2B2L%2BORjAiZj1tSVimI%2FsTqCxp%2B%2BKVqwoIE%2FxcKsVDoxr8QNp%2BnZXPlbtbcCqBedjoCvpxw1Z%2B%2F8uIfPfOuQPz62grLfjE3SPCmkd9XWS3q9C8UmfeePrcF5A4EMoDDU1goiXCLSGx9c8OmlY%2FmvEcTctz2kZi4c9Z2NOwyNAJ4t1w3c3QCEYQm2aN2VoInaQdM3XqiQYJkAmyDCL%2FSFlGTu8NjiBoHp6sMSWlYR2%2FG5kh9VVbpNlswMuspTWMNcgDoDLx2%2B%2B2FXeA8ZfroDTQaNqvdDsgVb0aFoxlQaN90er8NKLWNK6rARNviJWLFVIg0%2BKuGedx4pIL1meYd1DAzRtrgkYcYEPDMcjdpYJ9KE%2F4I3FKQtC7IkvcwDPVz45w1mOLK%2FnC4jvh%2FNta9ZnZHAhBxGZvEBze4yylgiQv17UGt3dg1NWHkLO4J8Xcz4X6V80OfkhzcRZoqO1MeCvXoZp0WXq8JQE51hFMdM%2FI%2BKiPE069C86TAjmuqTpuIarOLxu%2FDLPO747spG6AggAhctflglk1AzRD%2BQpva%2BnYX0KVDUmJyHgyqdT4LGKgl6Yx1rhmNhH5%2B1%2BeeLCLaREnWH5fDIc2Ohi%2FYVMLKUytMGOqUBDJtMUxFCwn9YxwFmz4W%2BoCDqYiTm33Y6H6t4GhgPi0Iu3tHhTvEsgtQesN4oRXOxpSeVGPZ3QGRDdXWzda6tCg0%2Bs4oV0OiqyC6dbWCe3P4mtPPiHSNISgXBH7X%2F8TxIezYAZRXj1heqBHHUbTfrM0HMRkXlepZILj%2B9fOrOn2GmpeRy1muo4gyIHRR0r9IDUKjG2emRc%2FBro6BJ6T0EM29UcxXl&X-Amz-Signature=a4d31e06487c858b5059320281d7db0c337a95be3ddf0ac455c335636734e9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6BFYOZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICbnf12zVFt381d%2Bx%2FaFW3Braww8nYFnwEKv84NFXt9TAiEA6XQTq6B5kqjXJScxCzUFLg1CRcU5wBus2PBPxNrwGPEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDABFNvk0BN2WqodB5ircAxnDb3gui8NcidUFv2h1zlbWa%2B2L%2BORjAiZj1tSVimI%2FsTqCxp%2B%2BKVqwoIE%2FxcKsVDoxr8QNp%2BnZXPlbtbcCqBedjoCvpxw1Z%2B%2F8uIfPfOuQPz62grLfjE3SPCmkd9XWS3q9C8UmfeePrcF5A4EMoDDU1goiXCLSGx9c8OmlY%2FmvEcTctz2kZi4c9Z2NOwyNAJ4t1w3c3QCEYQm2aN2VoInaQdM3XqiQYJkAmyDCL%2FSFlGTu8NjiBoHp6sMSWlYR2%2FG5kh9VVbpNlswMuspTWMNcgDoDLx2%2B%2B2FXeA8ZfroDTQaNqvdDsgVb0aFoxlQaN90er8NKLWNK6rARNviJWLFVIg0%2BKuGedx4pIL1meYd1DAzRtrgkYcYEPDMcjdpYJ9KE%2F4I3FKQtC7IkvcwDPVz45w1mOLK%2FnC4jvh%2FNta9ZnZHAhBxGZvEBze4yylgiQv17UGt3dg1NWHkLO4J8Xcz4X6V80OfkhzcRZoqO1MeCvXoZp0WXq8JQE51hFMdM%2FI%2BKiPE069C86TAjmuqTpuIarOLxu%2FDLPO747spG6AggAhctflglk1AzRD%2BQpva%2BnYX0KVDUmJyHgyqdT4LGKgl6Yx1rhmNhH5%2B1%2BeeLCLaREnWH5fDIc2Ohi%2FYVMLKUytMGOqUBDJtMUxFCwn9YxwFmz4W%2BoCDqYiTm33Y6H6t4GhgPi0Iu3tHhTvEsgtQesN4oRXOxpSeVGPZ3QGRDdXWzda6tCg0%2Bs4oV0OiqyC6dbWCe3P4mtPPiHSNISgXBH7X%2F8TxIezYAZRXj1heqBHHUbTfrM0HMRkXlepZILj%2B9fOrOn2GmpeRy1muo4gyIHRR0r9IDUKjG2emRc%2FBro6BJ6T0EM29UcxXl&X-Amz-Signature=13f3a210cb3d5458343bb8ab744bb1e876b6823bb2dad749d14540ee2bc2a932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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

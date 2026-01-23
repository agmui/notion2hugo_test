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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PDE5F5F%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIGoUgq4h7As%2Fhk3vZcF6h5ka%2FTT6mcF%2FmPHYtSOVbNH6AiAXgfSBwcWCTtjZHS%2FRqB3oM1DSuSU0i67mEB0FDLL5PCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR7lRrMt8hFZU4nI9KtwDv%2BVCcaA4ZuH%2BAuki9sSjM6Tdrp%2B4%2FikiarPraPvqaA5tdPV0mhTyA6GyUeXqu4mVNWTVzEbFY%2B4A7v3jAEFKYtmqpQVyARlKaQw3IzQqF6k1bWCEHYmj6FNWrreTRqVVvJmDfBwSA2oWkTnEXOzIDUIGd%2F0DO%2FZeZarDIeo9K8Z5ppexJQdv3W8R0pO9NFeZgVB4HHaqwj9CXWBBEVHvnXn%2B9%2BqWKRj%2B1pgM6SoTawI0LQhSo8aRn1wpvRXuJ9OLJVTRgPXmlFKsogVZJ7S%2FVRMEWtacRvxu0mTqu%2Bht%2BzKIujt95b%2B4XKwrVVSa3Q8bLwwNsTdq6EfXWZJTzviZZ%2F9EAbE4hoTi83eSnFqYZKfBe%2FBaTugm1azfzqdqw5IJRlGlw4LowPID%2FMbBkj0eBeVswC4HRR%2BlfdBVLGfWvF%2BHhmg9nrh8bl39oDTH8PTdA2a6N7jmEn4m4MYjoO%2BuFTcRMftUwWkNSoG2LYBq6R5cx%2Bew11GxWs5UbrS4Kn9ara9Cd01D5qOv1y2ix4KdZEWiXTsry5ZTIwo%2F3LV4j7lFc3Vb4U7jq90IS4MtoK%2FxCAflCLAZp3odiBNtvn9VwJNlB9PEms1rhi9fM7fFwQP6XjZ3symadMkM%2BbYw0orLywY6pgHzt0S2omgUWCdgilkxtvgclzftc5ttE3rdpoT2IyfK2cmg0jvzdcl9N4zzD8pOBNb70jIxhy3CpeaHSgcU%2FvP6Fa53NNG42pkSb66FOtexA5%2BzZIGBC1fJCz5BHy%2BPdNqfOJRTzDs5caTxMtGF90w8Kik5N%2FUSAjsIRyPXVb1Sefrr7Crpv%2BefkwekcuroBLMDAEziZ3WPOq1EcBIg%2Fw31zboMiYhC&X-Amz-Signature=372bb68ff91c9feca71b15842364631b29b83d5ba65e56de6c04c4e2fb3b6083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDGGSL3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBY8wLLDVBBYplS6mNDwOjIkui5s3aAHm5iVbvwfrdmgAiBoutTXESanHbokvaOlz0eISx0ErdN%2B16cklh6nwbQa7yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofvEnHgP8AG3bOICKtwDuVvPk8lYkRkSDM5cOzvVtrMZ8MaRVDI%2BtFLLc9OY92HyKBCZGPXJe50PPHPTOIxCL2L5BJpVhQu0A5rgfv1HO4sIdgt%2FYIrMHxTZ5p3Yx0weuNFfm5r4A%2Be5MIAlJHvnpC9qbU1aMX0IZ%2FQjtr8NFHOG5SfZ7m6KqrmlcDMm93NqoQP%2F0xDRYi8fww6sK4%2FLLc5tuOJSlQhAhevt4QvLc4St8yBJov9ByIOhtXC6CGwXSnVT2Vwqkh3TbRu2kpKqpsjXC28G4vncwbWZNvWR1NAXSKAm9oEmDFNNpGIhGxYRZLGEbKXq28fk1ZfMKAVGKaSpVNbFekuou%2BIszZOBnw%2FW%2Bbdcz3dj3quyIKyTSXR4J0Th0pDYodBhORVAzjZv8CYV9pFugyC1Tb%2FJjtpQTsMV7vXZ8huibdePiszafwA1FiDwWWRNYAbFNItjfYQveRJ%2FHT3KBNddRBJA09Ptmp%2FxbtFrf1CpWTtn1%2B%2F%2FGc6ZebnPHfByIzanZEjr6ceb%2BnuU2ttGVf6xpWBcqICmGB1sSgRzp5q2GRDFk702yqTK9kQT5uo8X%2BBK8qeGWD3RkDokNgic%2Blqlq4aOaYM7MJLNa2GIHklRz48ka6yRELM73kMe74YxmODjmPIw44rLywY6pgEBDxQVQq0QsNp6S0NEeBDCkXCSbCpY1wIz2KdSbjflvHfbSQHpAUYxvZkYJWN2XyVwgD67p%2BcAcmaIrTKP5huZTnYVRix0gq2D5LF62Cj6XViUlCD5bd3zS%2Bwx21U7YuaDHREwgo4W9x%2Fx%2FENhEqQQGAfOVmUDFTAzr03cMqY99jf8RXJU4gbZzhoi3g2%2FHeyk7XOHRyvU1XlWw5jJEzvXdlLfcmjD&X-Amz-Signature=df3d2fb9f5691d9e02a62b542dfcaa5e13c524b46ca08aa2ca5d680d84c05d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDGGSL3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBY8wLLDVBBYplS6mNDwOjIkui5s3aAHm5iVbvwfrdmgAiBoutTXESanHbokvaOlz0eISx0ErdN%2B16cklh6nwbQa7yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofvEnHgP8AG3bOICKtwDuVvPk8lYkRkSDM5cOzvVtrMZ8MaRVDI%2BtFLLc9OY92HyKBCZGPXJe50PPHPTOIxCL2L5BJpVhQu0A5rgfv1HO4sIdgt%2FYIrMHxTZ5p3Yx0weuNFfm5r4A%2Be5MIAlJHvnpC9qbU1aMX0IZ%2FQjtr8NFHOG5SfZ7m6KqrmlcDMm93NqoQP%2F0xDRYi8fww6sK4%2FLLc5tuOJSlQhAhevt4QvLc4St8yBJov9ByIOhtXC6CGwXSnVT2Vwqkh3TbRu2kpKqpsjXC28G4vncwbWZNvWR1NAXSKAm9oEmDFNNpGIhGxYRZLGEbKXq28fk1ZfMKAVGKaSpVNbFekuou%2BIszZOBnw%2FW%2Bbdcz3dj3quyIKyTSXR4J0Th0pDYodBhORVAzjZv8CYV9pFugyC1Tb%2FJjtpQTsMV7vXZ8huibdePiszafwA1FiDwWWRNYAbFNItjfYQveRJ%2FHT3KBNddRBJA09Ptmp%2FxbtFrf1CpWTtn1%2B%2F%2FGc6ZebnPHfByIzanZEjr6ceb%2BnuU2ttGVf6xpWBcqICmGB1sSgRzp5q2GRDFk702yqTK9kQT5uo8X%2BBK8qeGWD3RkDokNgic%2Blqlq4aOaYM7MJLNa2GIHklRz48ka6yRELM73kMe74YxmODjmPIw44rLywY6pgEBDxQVQq0QsNp6S0NEeBDCkXCSbCpY1wIz2KdSbjflvHfbSQHpAUYxvZkYJWN2XyVwgD67p%2BcAcmaIrTKP5huZTnYVRix0gq2D5LF62Cj6XViUlCD5bd3zS%2Bwx21U7YuaDHREwgo4W9x%2Fx%2FENhEqQQGAfOVmUDFTAzr03cMqY99jf8RXJU4gbZzhoi3g2%2FHeyk7XOHRyvU1XlWw5jJEzvXdlLfcmjD&X-Amz-Signature=508219d769139564b22a31f5161a8c1b76ecc4600e191aa4dc43330065d34af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDGGSL3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBY8wLLDVBBYplS6mNDwOjIkui5s3aAHm5iVbvwfrdmgAiBoutTXESanHbokvaOlz0eISx0ErdN%2B16cklh6nwbQa7yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofvEnHgP8AG3bOICKtwDuVvPk8lYkRkSDM5cOzvVtrMZ8MaRVDI%2BtFLLc9OY92HyKBCZGPXJe50PPHPTOIxCL2L5BJpVhQu0A5rgfv1HO4sIdgt%2FYIrMHxTZ5p3Yx0weuNFfm5r4A%2Be5MIAlJHvnpC9qbU1aMX0IZ%2FQjtr8NFHOG5SfZ7m6KqrmlcDMm93NqoQP%2F0xDRYi8fww6sK4%2FLLc5tuOJSlQhAhevt4QvLc4St8yBJov9ByIOhtXC6CGwXSnVT2Vwqkh3TbRu2kpKqpsjXC28G4vncwbWZNvWR1NAXSKAm9oEmDFNNpGIhGxYRZLGEbKXq28fk1ZfMKAVGKaSpVNbFekuou%2BIszZOBnw%2FW%2Bbdcz3dj3quyIKyTSXR4J0Th0pDYodBhORVAzjZv8CYV9pFugyC1Tb%2FJjtpQTsMV7vXZ8huibdePiszafwA1FiDwWWRNYAbFNItjfYQveRJ%2FHT3KBNddRBJA09Ptmp%2FxbtFrf1CpWTtn1%2B%2F%2FGc6ZebnPHfByIzanZEjr6ceb%2BnuU2ttGVf6xpWBcqICmGB1sSgRzp5q2GRDFk702yqTK9kQT5uo8X%2BBK8qeGWD3RkDokNgic%2Blqlq4aOaYM7MJLNa2GIHklRz48ka6yRELM73kMe74YxmODjmPIw44rLywY6pgEBDxQVQq0QsNp6S0NEeBDCkXCSbCpY1wIz2KdSbjflvHfbSQHpAUYxvZkYJWN2XyVwgD67p%2BcAcmaIrTKP5huZTnYVRix0gq2D5LF62Cj6XViUlCD5bd3zS%2Bwx21U7YuaDHREwgo4W9x%2Fx%2FENhEqQQGAfOVmUDFTAzr03cMqY99jf8RXJU4gbZzhoi3g2%2FHeyk7XOHRyvU1XlWw5jJEzvXdlLfcmjD&X-Amz-Signature=0ae5cf04439ceee5183e68fd24549078a48fedc5aa2665047bfa9fc64d016aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDGGSL3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBY8wLLDVBBYplS6mNDwOjIkui5s3aAHm5iVbvwfrdmgAiBoutTXESanHbokvaOlz0eISx0ErdN%2B16cklh6nwbQa7yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofvEnHgP8AG3bOICKtwDuVvPk8lYkRkSDM5cOzvVtrMZ8MaRVDI%2BtFLLc9OY92HyKBCZGPXJe50PPHPTOIxCL2L5BJpVhQu0A5rgfv1HO4sIdgt%2FYIrMHxTZ5p3Yx0weuNFfm5r4A%2Be5MIAlJHvnpC9qbU1aMX0IZ%2FQjtr8NFHOG5SfZ7m6KqrmlcDMm93NqoQP%2F0xDRYi8fww6sK4%2FLLc5tuOJSlQhAhevt4QvLc4St8yBJov9ByIOhtXC6CGwXSnVT2Vwqkh3TbRu2kpKqpsjXC28G4vncwbWZNvWR1NAXSKAm9oEmDFNNpGIhGxYRZLGEbKXq28fk1ZfMKAVGKaSpVNbFekuou%2BIszZOBnw%2FW%2Bbdcz3dj3quyIKyTSXR4J0Th0pDYodBhORVAzjZv8CYV9pFugyC1Tb%2FJjtpQTsMV7vXZ8huibdePiszafwA1FiDwWWRNYAbFNItjfYQveRJ%2FHT3KBNddRBJA09Ptmp%2FxbtFrf1CpWTtn1%2B%2F%2FGc6ZebnPHfByIzanZEjr6ceb%2BnuU2ttGVf6xpWBcqICmGB1sSgRzp5q2GRDFk702yqTK9kQT5uo8X%2BBK8qeGWD3RkDokNgic%2Blqlq4aOaYM7MJLNa2GIHklRz48ka6yRELM73kMe74YxmODjmPIw44rLywY6pgEBDxQVQq0QsNp6S0NEeBDCkXCSbCpY1wIz2KdSbjflvHfbSQHpAUYxvZkYJWN2XyVwgD67p%2BcAcmaIrTKP5huZTnYVRix0gq2D5LF62Cj6XViUlCD5bd3zS%2Bwx21U7YuaDHREwgo4W9x%2Fx%2FENhEqQQGAfOVmUDFTAzr03cMqY99jf8RXJU4gbZzhoi3g2%2FHeyk7XOHRyvU1XlWw5jJEzvXdlLfcmjD&X-Amz-Signature=3dcaf7cacae880f9793d94f3b64d0c5c17b559c7c7390c549da1d12d5fd768db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDGGSL3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBY8wLLDVBBYplS6mNDwOjIkui5s3aAHm5iVbvwfrdmgAiBoutTXESanHbokvaOlz0eISx0ErdN%2B16cklh6nwbQa7yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofvEnHgP8AG3bOICKtwDuVvPk8lYkRkSDM5cOzvVtrMZ8MaRVDI%2BtFLLc9OY92HyKBCZGPXJe50PPHPTOIxCL2L5BJpVhQu0A5rgfv1HO4sIdgt%2FYIrMHxTZ5p3Yx0weuNFfm5r4A%2Be5MIAlJHvnpC9qbU1aMX0IZ%2FQjtr8NFHOG5SfZ7m6KqrmlcDMm93NqoQP%2F0xDRYi8fww6sK4%2FLLc5tuOJSlQhAhevt4QvLc4St8yBJov9ByIOhtXC6CGwXSnVT2Vwqkh3TbRu2kpKqpsjXC28G4vncwbWZNvWR1NAXSKAm9oEmDFNNpGIhGxYRZLGEbKXq28fk1ZfMKAVGKaSpVNbFekuou%2BIszZOBnw%2FW%2Bbdcz3dj3quyIKyTSXR4J0Th0pDYodBhORVAzjZv8CYV9pFugyC1Tb%2FJjtpQTsMV7vXZ8huibdePiszafwA1FiDwWWRNYAbFNItjfYQveRJ%2FHT3KBNddRBJA09Ptmp%2FxbtFrf1CpWTtn1%2B%2F%2FGc6ZebnPHfByIzanZEjr6ceb%2BnuU2ttGVf6xpWBcqICmGB1sSgRzp5q2GRDFk702yqTK9kQT5uo8X%2BBK8qeGWD3RkDokNgic%2Blqlq4aOaYM7MJLNa2GIHklRz48ka6yRELM73kMe74YxmODjmPIw44rLywY6pgEBDxQVQq0QsNp6S0NEeBDCkXCSbCpY1wIz2KdSbjflvHfbSQHpAUYxvZkYJWN2XyVwgD67p%2BcAcmaIrTKP5huZTnYVRix0gq2D5LF62Cj6XViUlCD5bd3zS%2Bwx21U7YuaDHREwgo4W9x%2Fx%2FENhEqQQGAfOVmUDFTAzr03cMqY99jf8RXJU4gbZzhoi3g2%2FHeyk7XOHRyvU1XlWw5jJEzvXdlLfcmjD&X-Amz-Signature=3b447c8277e852d7a3ead1692a4a1cc1f26fe904dbffac15c40f1c2ad9c64641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDGGSL3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBY8wLLDVBBYplS6mNDwOjIkui5s3aAHm5iVbvwfrdmgAiBoutTXESanHbokvaOlz0eISx0ErdN%2B16cklh6nwbQa7yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofvEnHgP8AG3bOICKtwDuVvPk8lYkRkSDM5cOzvVtrMZ8MaRVDI%2BtFLLc9OY92HyKBCZGPXJe50PPHPTOIxCL2L5BJpVhQu0A5rgfv1HO4sIdgt%2FYIrMHxTZ5p3Yx0weuNFfm5r4A%2Be5MIAlJHvnpC9qbU1aMX0IZ%2FQjtr8NFHOG5SfZ7m6KqrmlcDMm93NqoQP%2F0xDRYi8fww6sK4%2FLLc5tuOJSlQhAhevt4QvLc4St8yBJov9ByIOhtXC6CGwXSnVT2Vwqkh3TbRu2kpKqpsjXC28G4vncwbWZNvWR1NAXSKAm9oEmDFNNpGIhGxYRZLGEbKXq28fk1ZfMKAVGKaSpVNbFekuou%2BIszZOBnw%2FW%2Bbdcz3dj3quyIKyTSXR4J0Th0pDYodBhORVAzjZv8CYV9pFugyC1Tb%2FJjtpQTsMV7vXZ8huibdePiszafwA1FiDwWWRNYAbFNItjfYQveRJ%2FHT3KBNddRBJA09Ptmp%2FxbtFrf1CpWTtn1%2B%2F%2FGc6ZebnPHfByIzanZEjr6ceb%2BnuU2ttGVf6xpWBcqICmGB1sSgRzp5q2GRDFk702yqTK9kQT5uo8X%2BBK8qeGWD3RkDokNgic%2Blqlq4aOaYM7MJLNa2GIHklRz48ka6yRELM73kMe74YxmODjmPIw44rLywY6pgEBDxQVQq0QsNp6S0NEeBDCkXCSbCpY1wIz2KdSbjflvHfbSQHpAUYxvZkYJWN2XyVwgD67p%2BcAcmaIrTKP5huZTnYVRix0gq2D5LF62Cj6XViUlCD5bd3zS%2Bwx21U7YuaDHREwgo4W9x%2Fx%2FENhEqQQGAfOVmUDFTAzr03cMqY99jf8RXJU4gbZzhoi3g2%2FHeyk7XOHRyvU1XlWw5jJEzvXdlLfcmjD&X-Amz-Signature=429d17e06480a1c44612512f0343390e182ddea72693a08bd75e404c73ef2d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDGGSL3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBY8wLLDVBBYplS6mNDwOjIkui5s3aAHm5iVbvwfrdmgAiBoutTXESanHbokvaOlz0eISx0ErdN%2B16cklh6nwbQa7yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofvEnHgP8AG3bOICKtwDuVvPk8lYkRkSDM5cOzvVtrMZ8MaRVDI%2BtFLLc9OY92HyKBCZGPXJe50PPHPTOIxCL2L5BJpVhQu0A5rgfv1HO4sIdgt%2FYIrMHxTZ5p3Yx0weuNFfm5r4A%2Be5MIAlJHvnpC9qbU1aMX0IZ%2FQjtr8NFHOG5SfZ7m6KqrmlcDMm93NqoQP%2F0xDRYi8fww6sK4%2FLLc5tuOJSlQhAhevt4QvLc4St8yBJov9ByIOhtXC6CGwXSnVT2Vwqkh3TbRu2kpKqpsjXC28G4vncwbWZNvWR1NAXSKAm9oEmDFNNpGIhGxYRZLGEbKXq28fk1ZfMKAVGKaSpVNbFekuou%2BIszZOBnw%2FW%2Bbdcz3dj3quyIKyTSXR4J0Th0pDYodBhORVAzjZv8CYV9pFugyC1Tb%2FJjtpQTsMV7vXZ8huibdePiszafwA1FiDwWWRNYAbFNItjfYQveRJ%2FHT3KBNddRBJA09Ptmp%2FxbtFrf1CpWTtn1%2B%2F%2FGc6ZebnPHfByIzanZEjr6ceb%2BnuU2ttGVf6xpWBcqICmGB1sSgRzp5q2GRDFk702yqTK9kQT5uo8X%2BBK8qeGWD3RkDokNgic%2Blqlq4aOaYM7MJLNa2GIHklRz48ka6yRELM73kMe74YxmODjmPIw44rLywY6pgEBDxQVQq0QsNp6S0NEeBDCkXCSbCpY1wIz2KdSbjflvHfbSQHpAUYxvZkYJWN2XyVwgD67p%2BcAcmaIrTKP5huZTnYVRix0gq2D5LF62Cj6XViUlCD5bd3zS%2Bwx21U7YuaDHREwgo4W9x%2Fx%2FENhEqQQGAfOVmUDFTAzr03cMqY99jf8RXJU4gbZzhoi3g2%2FHeyk7XOHRyvU1XlWw5jJEzvXdlLfcmjD&X-Amz-Signature=023a82d343105ceb0402653af17ab2c58c3da4143f1729d8575c0869f784cfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDGGSL3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBY8wLLDVBBYplS6mNDwOjIkui5s3aAHm5iVbvwfrdmgAiBoutTXESanHbokvaOlz0eISx0ErdN%2B16cklh6nwbQa7yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofvEnHgP8AG3bOICKtwDuVvPk8lYkRkSDM5cOzvVtrMZ8MaRVDI%2BtFLLc9OY92HyKBCZGPXJe50PPHPTOIxCL2L5BJpVhQu0A5rgfv1HO4sIdgt%2FYIrMHxTZ5p3Yx0weuNFfm5r4A%2Be5MIAlJHvnpC9qbU1aMX0IZ%2FQjtr8NFHOG5SfZ7m6KqrmlcDMm93NqoQP%2F0xDRYi8fww6sK4%2FLLc5tuOJSlQhAhevt4QvLc4St8yBJov9ByIOhtXC6CGwXSnVT2Vwqkh3TbRu2kpKqpsjXC28G4vncwbWZNvWR1NAXSKAm9oEmDFNNpGIhGxYRZLGEbKXq28fk1ZfMKAVGKaSpVNbFekuou%2BIszZOBnw%2FW%2Bbdcz3dj3quyIKyTSXR4J0Th0pDYodBhORVAzjZv8CYV9pFugyC1Tb%2FJjtpQTsMV7vXZ8huibdePiszafwA1FiDwWWRNYAbFNItjfYQveRJ%2FHT3KBNddRBJA09Ptmp%2FxbtFrf1CpWTtn1%2B%2F%2FGc6ZebnPHfByIzanZEjr6ceb%2BnuU2ttGVf6xpWBcqICmGB1sSgRzp5q2GRDFk702yqTK9kQT5uo8X%2BBK8qeGWD3RkDokNgic%2Blqlq4aOaYM7MJLNa2GIHklRz48ka6yRELM73kMe74YxmODjmPIw44rLywY6pgEBDxQVQq0QsNp6S0NEeBDCkXCSbCpY1wIz2KdSbjflvHfbSQHpAUYxvZkYJWN2XyVwgD67p%2BcAcmaIrTKP5huZTnYVRix0gq2D5LF62Cj6XViUlCD5bd3zS%2Bwx21U7YuaDHREwgo4W9x%2Fx%2FENhEqQQGAfOVmUDFTAzr03cMqY99jf8RXJU4gbZzhoi3g2%2FHeyk7XOHRyvU1XlWw5jJEzvXdlLfcmjD&X-Amz-Signature=77b374ced1160c83c2dceb028da3c4bd49e4af892033bc5c5f35361e38e05e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDGGSL3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBY8wLLDVBBYplS6mNDwOjIkui5s3aAHm5iVbvwfrdmgAiBoutTXESanHbokvaOlz0eISx0ErdN%2B16cklh6nwbQa7yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofvEnHgP8AG3bOICKtwDuVvPk8lYkRkSDM5cOzvVtrMZ8MaRVDI%2BtFLLc9OY92HyKBCZGPXJe50PPHPTOIxCL2L5BJpVhQu0A5rgfv1HO4sIdgt%2FYIrMHxTZ5p3Yx0weuNFfm5r4A%2Be5MIAlJHvnpC9qbU1aMX0IZ%2FQjtr8NFHOG5SfZ7m6KqrmlcDMm93NqoQP%2F0xDRYi8fww6sK4%2FLLc5tuOJSlQhAhevt4QvLc4St8yBJov9ByIOhtXC6CGwXSnVT2Vwqkh3TbRu2kpKqpsjXC28G4vncwbWZNvWR1NAXSKAm9oEmDFNNpGIhGxYRZLGEbKXq28fk1ZfMKAVGKaSpVNbFekuou%2BIszZOBnw%2FW%2Bbdcz3dj3quyIKyTSXR4J0Th0pDYodBhORVAzjZv8CYV9pFugyC1Tb%2FJjtpQTsMV7vXZ8huibdePiszafwA1FiDwWWRNYAbFNItjfYQveRJ%2FHT3KBNddRBJA09Ptmp%2FxbtFrf1CpWTtn1%2B%2F%2FGc6ZebnPHfByIzanZEjr6ceb%2BnuU2ttGVf6xpWBcqICmGB1sSgRzp5q2GRDFk702yqTK9kQT5uo8X%2BBK8qeGWD3RkDokNgic%2Blqlq4aOaYM7MJLNa2GIHklRz48ka6yRELM73kMe74YxmODjmPIw44rLywY6pgEBDxQVQq0QsNp6S0NEeBDCkXCSbCpY1wIz2KdSbjflvHfbSQHpAUYxvZkYJWN2XyVwgD67p%2BcAcmaIrTKP5huZTnYVRix0gq2D5LF62Cj6XViUlCD5bd3zS%2Bwx21U7YuaDHREwgo4W9x%2Fx%2FENhEqQQGAfOVmUDFTAzr03cMqY99jf8RXJU4gbZzhoi3g2%2FHeyk7XOHRyvU1XlWw5jJEzvXdlLfcmjD&X-Amz-Signature=ea26fdf84dde9a02c2180a249ab3461577ee6896bf711cc4c656a7930c485d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDGGSL3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIBY8wLLDVBBYplS6mNDwOjIkui5s3aAHm5iVbvwfrdmgAiBoutTXESanHbokvaOlz0eISx0ErdN%2B16cklh6nwbQa7yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMofvEnHgP8AG3bOICKtwDuVvPk8lYkRkSDM5cOzvVtrMZ8MaRVDI%2BtFLLc9OY92HyKBCZGPXJe50PPHPTOIxCL2L5BJpVhQu0A5rgfv1HO4sIdgt%2FYIrMHxTZ5p3Yx0weuNFfm5r4A%2Be5MIAlJHvnpC9qbU1aMX0IZ%2FQjtr8NFHOG5SfZ7m6KqrmlcDMm93NqoQP%2F0xDRYi8fww6sK4%2FLLc5tuOJSlQhAhevt4QvLc4St8yBJov9ByIOhtXC6CGwXSnVT2Vwqkh3TbRu2kpKqpsjXC28G4vncwbWZNvWR1NAXSKAm9oEmDFNNpGIhGxYRZLGEbKXq28fk1ZfMKAVGKaSpVNbFekuou%2BIszZOBnw%2FW%2Bbdcz3dj3quyIKyTSXR4J0Th0pDYodBhORVAzjZv8CYV9pFugyC1Tb%2FJjtpQTsMV7vXZ8huibdePiszafwA1FiDwWWRNYAbFNItjfYQveRJ%2FHT3KBNddRBJA09Ptmp%2FxbtFrf1CpWTtn1%2B%2F%2FGc6ZebnPHfByIzanZEjr6ceb%2BnuU2ttGVf6xpWBcqICmGB1sSgRzp5q2GRDFk702yqTK9kQT5uo8X%2BBK8qeGWD3RkDokNgic%2Blqlq4aOaYM7MJLNa2GIHklRz48ka6yRELM73kMe74YxmODjmPIw44rLywY6pgEBDxQVQq0QsNp6S0NEeBDCkXCSbCpY1wIz2KdSbjflvHfbSQHpAUYxvZkYJWN2XyVwgD67p%2BcAcmaIrTKP5huZTnYVRix0gq2D5LF62Cj6XViUlCD5bd3zS%2Bwx21U7YuaDHREwgo4W9x%2Fx%2FENhEqQQGAfOVmUDFTAzr03cMqY99jf8RXJU4gbZzhoi3g2%2FHeyk7XOHRyvU1XlWw5jJEzvXdlLfcmjD&X-Amz-Signature=c0e0d59c7474b84b455924fca6670098a3e2091594ad6bf7699feef85f1ec28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

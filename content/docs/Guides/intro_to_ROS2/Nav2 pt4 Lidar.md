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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VL3Q6GD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDoKyjJT2oKeTwRpQoSDhJ0y6C46Dqi6nZbpEZ3ahzxSgIhAPpdcZlLEHydIBE2X5rmHsPufPoPHB5NJr7q4shef5L%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgxtXM6ajyn1deUFGQsq3APLsGyoJNiBysZgEd3lDaZo7HIwPLJTP9dchT9L69FVNJuodp%2FVtZDbTpYbUn%2BxmyqllHtypqMLBrQebxY5B3%2FSgx%2B62yD402N9OLMUgVojA4VCqMKRT7CFDBwEH1YFbn9y2Zqb6uDpylQF3%2Fj3qeWjqslSrok%2FxuhaZrt7yoit9W8elnHSSxvkHjSRhvFIvrrwkgC2OJRofJbi1AdFRlRyuKAeZSkgNkEqiZgtkqun2gjJXxGtCsNwXQYt6AJko49OIGhbuDIh%2FR8Ty1XX4hGDV0%2BDlUwKIihgTCMlcflkS4pE1SuQc4Jtc%2BOzcJ7Us4WL3Lc%2FS6r60jptyaQ2siU7FlYZvvLb%2Bz2JR9mCj%2FNzJip2Yh9VggUn3gCgyogR09fYr5tmcrB5MLmKd%2B2PfdN5UnE%2B655stuKyggI5ByxOGuPEjjrkmig4pUGGa7opK3YvP3D8dgDPdefNiBmwNdvFSV3gZFcpAoAniRWBhYriG5uJN9CzDgMDynqJuEsY1zHbnI1pkIgmCUps42XwznXjHpID99KFZjFeSIdBCsoKZZC3yyOGDQlJZiZtwiE4mfddR68sztcf0g1g2SHu%2Bx1X6aboaA0K33Sq3iAlswNd9dQhHDS%2B9KmV9Pu7kTCHtf3EBjqkAZRGwKZORDylgzrKy1d6GiVsuPaBmTUtCaw0Ed5ZX24R0SjEpnM2MqeqN4AHXLKYapbHzNGBZ%2BsAt0P%2BeU2a8UlIKag8NJEhAHIwO4zkovQ8I7vRjkL%2FmyEITv5JQB2%2BqZ0AajQoUF%2BPs%2BlVCkjVkDrNZwyL54pSGsDDu6lZ7a931ZNMxK02BzNRhEFVVWYFzHd1uOboItbsolGgf2ACfftklD3A&X-Amz-Signature=b96a62f491dc418f0280813a894a53074810fc0c93d3241d3011d42165880e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZNVQSX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD22barqJ34AcLwgFS%2BE1wzlXxwmm1eyCG%2B1ZphR1QNUgIhAIwZbqodb4IJeoR1G1flPcQx7w2gYO2BveDJoCvbJlUgKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2BSDDOYEDgxtzqFEAq3AMTY0Nf8Znpf4rWxBNeoaEg3scIKjuktw7cL0pT%2FWL%2B1ST%2FhmmURPfw8VHV%2BJeedmawO8oUHIwY55dV6reDEY%2FttcsQ4Rqj0Cyk0CAE9VwX9r%2Bpmk0UG%2F6DYmz7RvXFNdFFuVEe%2Ft8YA%2FtJY7FcATxeiSgRFKhRKJEUMkdPG7943kmwyDEW2KU1vMf3iKb4LFdtkIFY4xVWRNCnvZQ%2B3ZxR2K9jYzDQGA3LmlrfqCL6LpirHiTtMxnd55cnagIFIPQP6CoRov1kl%2B8MJPROgfOmhroG2CXd0W12Zk0I%2FCUSHV1CI%2BzL3Rc7xmc2pWYfDRT7E8EvnQv5I0aB9NJ4tDsKmYWoZxdoLTKDrqEgWkzPI%2BzqDUWnjZIxFclQ1uEeji85TYqfLOt%2FqwGMnqmnxYarbqzu4bkdC99y00B2nsERy3s6z%2FoO%2FWXi51t49PYG5m75WNhdHn25bTtAbEPkUGUwFBL8%2FrcG2p1l88GBt8xNqPw1LvymDEWI46stz9So9g1m4HqsOUZpr4WDb36GpUuwMQZSHAR1C%2Fc850IxrRPQ%2F540OdkBfEXj4ZGLF8FE2jn4QyUPstu3jqI1CXfRJLfFmv8Q7xDIOWgmdATx%2FpH09q5nVeDNuCqVItzKZzDEtP3EBjqkASYG3mf%2Fb3JmezYG9iijI3e4E%2FAiY5Y6M207g4DQuVIR9Gszuo%2BiqFmytflMvpv4e0CVWPAH1h1b7jDxGRqxlGSCLe4rhqFnpltgpWkIuK2JHmEVbcQ2s7T%2BDvmKzDfP3TDqCXIIUoCSUWAGOebPtY5XWpiGXDD4yfuNJq5RwJoU0T%2BfV0JhpJGcOJh5yaYr1QclhAa4Mg3pgirfuvJ8pPs4%2B0VK&X-Amz-Signature=688faa5957c37f3447539ba02c3c423a9dee99aa2649ddf081487dde32504c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZNVQSX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD22barqJ34AcLwgFS%2BE1wzlXxwmm1eyCG%2B1ZphR1QNUgIhAIwZbqodb4IJeoR1G1flPcQx7w2gYO2BveDJoCvbJlUgKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2BSDDOYEDgxtzqFEAq3AMTY0Nf8Znpf4rWxBNeoaEg3scIKjuktw7cL0pT%2FWL%2B1ST%2FhmmURPfw8VHV%2BJeedmawO8oUHIwY55dV6reDEY%2FttcsQ4Rqj0Cyk0CAE9VwX9r%2Bpmk0UG%2F6DYmz7RvXFNdFFuVEe%2Ft8YA%2FtJY7FcATxeiSgRFKhRKJEUMkdPG7943kmwyDEW2KU1vMf3iKb4LFdtkIFY4xVWRNCnvZQ%2B3ZxR2K9jYzDQGA3LmlrfqCL6LpirHiTtMxnd55cnagIFIPQP6CoRov1kl%2B8MJPROgfOmhroG2CXd0W12Zk0I%2FCUSHV1CI%2BzL3Rc7xmc2pWYfDRT7E8EvnQv5I0aB9NJ4tDsKmYWoZxdoLTKDrqEgWkzPI%2BzqDUWnjZIxFclQ1uEeji85TYqfLOt%2FqwGMnqmnxYarbqzu4bkdC99y00B2nsERy3s6z%2FoO%2FWXi51t49PYG5m75WNhdHn25bTtAbEPkUGUwFBL8%2FrcG2p1l88GBt8xNqPw1LvymDEWI46stz9So9g1m4HqsOUZpr4WDb36GpUuwMQZSHAR1C%2Fc850IxrRPQ%2F540OdkBfEXj4ZGLF8FE2jn4QyUPstu3jqI1CXfRJLfFmv8Q7xDIOWgmdATx%2FpH09q5nVeDNuCqVItzKZzDEtP3EBjqkASYG3mf%2Fb3JmezYG9iijI3e4E%2FAiY5Y6M207g4DQuVIR9Gszuo%2BiqFmytflMvpv4e0CVWPAH1h1b7jDxGRqxlGSCLe4rhqFnpltgpWkIuK2JHmEVbcQ2s7T%2BDvmKzDfP3TDqCXIIUoCSUWAGOebPtY5XWpiGXDD4yfuNJq5RwJoU0T%2BfV0JhpJGcOJh5yaYr1QclhAa4Mg3pgirfuvJ8pPs4%2B0VK&X-Amz-Signature=5691753d57bd06ead9625b492a4b9fd0952797a4e758a9ace2e4a074e4eff6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZNVQSX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD22barqJ34AcLwgFS%2BE1wzlXxwmm1eyCG%2B1ZphR1QNUgIhAIwZbqodb4IJeoR1G1flPcQx7w2gYO2BveDJoCvbJlUgKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2BSDDOYEDgxtzqFEAq3AMTY0Nf8Znpf4rWxBNeoaEg3scIKjuktw7cL0pT%2FWL%2B1ST%2FhmmURPfw8VHV%2BJeedmawO8oUHIwY55dV6reDEY%2FttcsQ4Rqj0Cyk0CAE9VwX9r%2Bpmk0UG%2F6DYmz7RvXFNdFFuVEe%2Ft8YA%2FtJY7FcATxeiSgRFKhRKJEUMkdPG7943kmwyDEW2KU1vMf3iKb4LFdtkIFY4xVWRNCnvZQ%2B3ZxR2K9jYzDQGA3LmlrfqCL6LpirHiTtMxnd55cnagIFIPQP6CoRov1kl%2B8MJPROgfOmhroG2CXd0W12Zk0I%2FCUSHV1CI%2BzL3Rc7xmc2pWYfDRT7E8EvnQv5I0aB9NJ4tDsKmYWoZxdoLTKDrqEgWkzPI%2BzqDUWnjZIxFclQ1uEeji85TYqfLOt%2FqwGMnqmnxYarbqzu4bkdC99y00B2nsERy3s6z%2FoO%2FWXi51t49PYG5m75WNhdHn25bTtAbEPkUGUwFBL8%2FrcG2p1l88GBt8xNqPw1LvymDEWI46stz9So9g1m4HqsOUZpr4WDb36GpUuwMQZSHAR1C%2Fc850IxrRPQ%2F540OdkBfEXj4ZGLF8FE2jn4QyUPstu3jqI1CXfRJLfFmv8Q7xDIOWgmdATx%2FpH09q5nVeDNuCqVItzKZzDEtP3EBjqkASYG3mf%2Fb3JmezYG9iijI3e4E%2FAiY5Y6M207g4DQuVIR9Gszuo%2BiqFmytflMvpv4e0CVWPAH1h1b7jDxGRqxlGSCLe4rhqFnpltgpWkIuK2JHmEVbcQ2s7T%2BDvmKzDfP3TDqCXIIUoCSUWAGOebPtY5XWpiGXDD4yfuNJq5RwJoU0T%2BfV0JhpJGcOJh5yaYr1QclhAa4Mg3pgirfuvJ8pPs4%2B0VK&X-Amz-Signature=7a26912e505e7ff78e01be6f6d664f4bc88cc88704f7ff59ea336ff06218824e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZNVQSX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD22barqJ34AcLwgFS%2BE1wzlXxwmm1eyCG%2B1ZphR1QNUgIhAIwZbqodb4IJeoR1G1flPcQx7w2gYO2BveDJoCvbJlUgKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2BSDDOYEDgxtzqFEAq3AMTY0Nf8Znpf4rWxBNeoaEg3scIKjuktw7cL0pT%2FWL%2B1ST%2FhmmURPfw8VHV%2BJeedmawO8oUHIwY55dV6reDEY%2FttcsQ4Rqj0Cyk0CAE9VwX9r%2Bpmk0UG%2F6DYmz7RvXFNdFFuVEe%2Ft8YA%2FtJY7FcATxeiSgRFKhRKJEUMkdPG7943kmwyDEW2KU1vMf3iKb4LFdtkIFY4xVWRNCnvZQ%2B3ZxR2K9jYzDQGA3LmlrfqCL6LpirHiTtMxnd55cnagIFIPQP6CoRov1kl%2B8MJPROgfOmhroG2CXd0W12Zk0I%2FCUSHV1CI%2BzL3Rc7xmc2pWYfDRT7E8EvnQv5I0aB9NJ4tDsKmYWoZxdoLTKDrqEgWkzPI%2BzqDUWnjZIxFclQ1uEeji85TYqfLOt%2FqwGMnqmnxYarbqzu4bkdC99y00B2nsERy3s6z%2FoO%2FWXi51t49PYG5m75WNhdHn25bTtAbEPkUGUwFBL8%2FrcG2p1l88GBt8xNqPw1LvymDEWI46stz9So9g1m4HqsOUZpr4WDb36GpUuwMQZSHAR1C%2Fc850IxrRPQ%2F540OdkBfEXj4ZGLF8FE2jn4QyUPstu3jqI1CXfRJLfFmv8Q7xDIOWgmdATx%2FpH09q5nVeDNuCqVItzKZzDEtP3EBjqkASYG3mf%2Fb3JmezYG9iijI3e4E%2FAiY5Y6M207g4DQuVIR9Gszuo%2BiqFmytflMvpv4e0CVWPAH1h1b7jDxGRqxlGSCLe4rhqFnpltgpWkIuK2JHmEVbcQ2s7T%2BDvmKzDfP3TDqCXIIUoCSUWAGOebPtY5XWpiGXDD4yfuNJq5RwJoU0T%2BfV0JhpJGcOJh5yaYr1QclhAa4Mg3pgirfuvJ8pPs4%2B0VK&X-Amz-Signature=f82bbddb3a2131253d98daffbc2243b8fa46c9b0fa219c4c94a4498d404949e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZNVQSX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD22barqJ34AcLwgFS%2BE1wzlXxwmm1eyCG%2B1ZphR1QNUgIhAIwZbqodb4IJeoR1G1flPcQx7w2gYO2BveDJoCvbJlUgKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2BSDDOYEDgxtzqFEAq3AMTY0Nf8Znpf4rWxBNeoaEg3scIKjuktw7cL0pT%2FWL%2B1ST%2FhmmURPfw8VHV%2BJeedmawO8oUHIwY55dV6reDEY%2FttcsQ4Rqj0Cyk0CAE9VwX9r%2Bpmk0UG%2F6DYmz7RvXFNdFFuVEe%2Ft8YA%2FtJY7FcATxeiSgRFKhRKJEUMkdPG7943kmwyDEW2KU1vMf3iKb4LFdtkIFY4xVWRNCnvZQ%2B3ZxR2K9jYzDQGA3LmlrfqCL6LpirHiTtMxnd55cnagIFIPQP6CoRov1kl%2B8MJPROgfOmhroG2CXd0W12Zk0I%2FCUSHV1CI%2BzL3Rc7xmc2pWYfDRT7E8EvnQv5I0aB9NJ4tDsKmYWoZxdoLTKDrqEgWkzPI%2BzqDUWnjZIxFclQ1uEeji85TYqfLOt%2FqwGMnqmnxYarbqzu4bkdC99y00B2nsERy3s6z%2FoO%2FWXi51t49PYG5m75WNhdHn25bTtAbEPkUGUwFBL8%2FrcG2p1l88GBt8xNqPw1LvymDEWI46stz9So9g1m4HqsOUZpr4WDb36GpUuwMQZSHAR1C%2Fc850IxrRPQ%2F540OdkBfEXj4ZGLF8FE2jn4QyUPstu3jqI1CXfRJLfFmv8Q7xDIOWgmdATx%2FpH09q5nVeDNuCqVItzKZzDEtP3EBjqkASYG3mf%2Fb3JmezYG9iijI3e4E%2FAiY5Y6M207g4DQuVIR9Gszuo%2BiqFmytflMvpv4e0CVWPAH1h1b7jDxGRqxlGSCLe4rhqFnpltgpWkIuK2JHmEVbcQ2s7T%2BDvmKzDfP3TDqCXIIUoCSUWAGOebPtY5XWpiGXDD4yfuNJq5RwJoU0T%2BfV0JhpJGcOJh5yaYr1QclhAa4Mg3pgirfuvJ8pPs4%2B0VK&X-Amz-Signature=3397658b82fb707fae823dd27d0216ff5c4cd5fa3ef464760185e68b72099119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZNVQSX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD22barqJ34AcLwgFS%2BE1wzlXxwmm1eyCG%2B1ZphR1QNUgIhAIwZbqodb4IJeoR1G1flPcQx7w2gYO2BveDJoCvbJlUgKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2BSDDOYEDgxtzqFEAq3AMTY0Nf8Znpf4rWxBNeoaEg3scIKjuktw7cL0pT%2FWL%2B1ST%2FhmmURPfw8VHV%2BJeedmawO8oUHIwY55dV6reDEY%2FttcsQ4Rqj0Cyk0CAE9VwX9r%2Bpmk0UG%2F6DYmz7RvXFNdFFuVEe%2Ft8YA%2FtJY7FcATxeiSgRFKhRKJEUMkdPG7943kmwyDEW2KU1vMf3iKb4LFdtkIFY4xVWRNCnvZQ%2B3ZxR2K9jYzDQGA3LmlrfqCL6LpirHiTtMxnd55cnagIFIPQP6CoRov1kl%2B8MJPROgfOmhroG2CXd0W12Zk0I%2FCUSHV1CI%2BzL3Rc7xmc2pWYfDRT7E8EvnQv5I0aB9NJ4tDsKmYWoZxdoLTKDrqEgWkzPI%2BzqDUWnjZIxFclQ1uEeji85TYqfLOt%2FqwGMnqmnxYarbqzu4bkdC99y00B2nsERy3s6z%2FoO%2FWXi51t49PYG5m75WNhdHn25bTtAbEPkUGUwFBL8%2FrcG2p1l88GBt8xNqPw1LvymDEWI46stz9So9g1m4HqsOUZpr4WDb36GpUuwMQZSHAR1C%2Fc850IxrRPQ%2F540OdkBfEXj4ZGLF8FE2jn4QyUPstu3jqI1CXfRJLfFmv8Q7xDIOWgmdATx%2FpH09q5nVeDNuCqVItzKZzDEtP3EBjqkASYG3mf%2Fb3JmezYG9iijI3e4E%2FAiY5Y6M207g4DQuVIR9Gszuo%2BiqFmytflMvpv4e0CVWPAH1h1b7jDxGRqxlGSCLe4rhqFnpltgpWkIuK2JHmEVbcQ2s7T%2BDvmKzDfP3TDqCXIIUoCSUWAGOebPtY5XWpiGXDD4yfuNJq5RwJoU0T%2BfV0JhpJGcOJh5yaYr1QclhAa4Mg3pgirfuvJ8pPs4%2B0VK&X-Amz-Signature=c35b01dddd3dcdf5ccfd7c27460ee97652f322970d2ce5a4a40d61e871adc640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZNVQSX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD22barqJ34AcLwgFS%2BE1wzlXxwmm1eyCG%2B1ZphR1QNUgIhAIwZbqodb4IJeoR1G1flPcQx7w2gYO2BveDJoCvbJlUgKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2BSDDOYEDgxtzqFEAq3AMTY0Nf8Znpf4rWxBNeoaEg3scIKjuktw7cL0pT%2FWL%2B1ST%2FhmmURPfw8VHV%2BJeedmawO8oUHIwY55dV6reDEY%2FttcsQ4Rqj0Cyk0CAE9VwX9r%2Bpmk0UG%2F6DYmz7RvXFNdFFuVEe%2Ft8YA%2FtJY7FcATxeiSgRFKhRKJEUMkdPG7943kmwyDEW2KU1vMf3iKb4LFdtkIFY4xVWRNCnvZQ%2B3ZxR2K9jYzDQGA3LmlrfqCL6LpirHiTtMxnd55cnagIFIPQP6CoRov1kl%2B8MJPROgfOmhroG2CXd0W12Zk0I%2FCUSHV1CI%2BzL3Rc7xmc2pWYfDRT7E8EvnQv5I0aB9NJ4tDsKmYWoZxdoLTKDrqEgWkzPI%2BzqDUWnjZIxFclQ1uEeji85TYqfLOt%2FqwGMnqmnxYarbqzu4bkdC99y00B2nsERy3s6z%2FoO%2FWXi51t49PYG5m75WNhdHn25bTtAbEPkUGUwFBL8%2FrcG2p1l88GBt8xNqPw1LvymDEWI46stz9So9g1m4HqsOUZpr4WDb36GpUuwMQZSHAR1C%2Fc850IxrRPQ%2F540OdkBfEXj4ZGLF8FE2jn4QyUPstu3jqI1CXfRJLfFmv8Q7xDIOWgmdATx%2FpH09q5nVeDNuCqVItzKZzDEtP3EBjqkASYG3mf%2Fb3JmezYG9iijI3e4E%2FAiY5Y6M207g4DQuVIR9Gszuo%2BiqFmytflMvpv4e0CVWPAH1h1b7jDxGRqxlGSCLe4rhqFnpltgpWkIuK2JHmEVbcQ2s7T%2BDvmKzDfP3TDqCXIIUoCSUWAGOebPtY5XWpiGXDD4yfuNJq5RwJoU0T%2BfV0JhpJGcOJh5yaYr1QclhAa4Mg3pgirfuvJ8pPs4%2B0VK&X-Amz-Signature=20c9035615010fbb3d1b53ce334a5d11610634939efe2bc2d99f82b57ccda0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZNVQSX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD22barqJ34AcLwgFS%2BE1wzlXxwmm1eyCG%2B1ZphR1QNUgIhAIwZbqodb4IJeoR1G1flPcQx7w2gYO2BveDJoCvbJlUgKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2BSDDOYEDgxtzqFEAq3AMTY0Nf8Znpf4rWxBNeoaEg3scIKjuktw7cL0pT%2FWL%2B1ST%2FhmmURPfw8VHV%2BJeedmawO8oUHIwY55dV6reDEY%2FttcsQ4Rqj0Cyk0CAE9VwX9r%2Bpmk0UG%2F6DYmz7RvXFNdFFuVEe%2Ft8YA%2FtJY7FcATxeiSgRFKhRKJEUMkdPG7943kmwyDEW2KU1vMf3iKb4LFdtkIFY4xVWRNCnvZQ%2B3ZxR2K9jYzDQGA3LmlrfqCL6LpirHiTtMxnd55cnagIFIPQP6CoRov1kl%2B8MJPROgfOmhroG2CXd0W12Zk0I%2FCUSHV1CI%2BzL3Rc7xmc2pWYfDRT7E8EvnQv5I0aB9NJ4tDsKmYWoZxdoLTKDrqEgWkzPI%2BzqDUWnjZIxFclQ1uEeji85TYqfLOt%2FqwGMnqmnxYarbqzu4bkdC99y00B2nsERy3s6z%2FoO%2FWXi51t49PYG5m75WNhdHn25bTtAbEPkUGUwFBL8%2FrcG2p1l88GBt8xNqPw1LvymDEWI46stz9So9g1m4HqsOUZpr4WDb36GpUuwMQZSHAR1C%2Fc850IxrRPQ%2F540OdkBfEXj4ZGLF8FE2jn4QyUPstu3jqI1CXfRJLfFmv8Q7xDIOWgmdATx%2FpH09q5nVeDNuCqVItzKZzDEtP3EBjqkASYG3mf%2Fb3JmezYG9iijI3e4E%2FAiY5Y6M207g4DQuVIR9Gszuo%2BiqFmytflMvpv4e0CVWPAH1h1b7jDxGRqxlGSCLe4rhqFnpltgpWkIuK2JHmEVbcQ2s7T%2BDvmKzDfP3TDqCXIIUoCSUWAGOebPtY5XWpiGXDD4yfuNJq5RwJoU0T%2BfV0JhpJGcOJh5yaYr1QclhAa4Mg3pgirfuvJ8pPs4%2B0VK&X-Amz-Signature=5a69fe18f6c31b32b585edb377d2560809bfa6e710775be07ccb72147783a5d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZNVQSX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD22barqJ34AcLwgFS%2BE1wzlXxwmm1eyCG%2B1ZphR1QNUgIhAIwZbqodb4IJeoR1G1flPcQx7w2gYO2BveDJoCvbJlUgKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2BSDDOYEDgxtzqFEAq3AMTY0Nf8Znpf4rWxBNeoaEg3scIKjuktw7cL0pT%2FWL%2B1ST%2FhmmURPfw8VHV%2BJeedmawO8oUHIwY55dV6reDEY%2FttcsQ4Rqj0Cyk0CAE9VwX9r%2Bpmk0UG%2F6DYmz7RvXFNdFFuVEe%2Ft8YA%2FtJY7FcATxeiSgRFKhRKJEUMkdPG7943kmwyDEW2KU1vMf3iKb4LFdtkIFY4xVWRNCnvZQ%2B3ZxR2K9jYzDQGA3LmlrfqCL6LpirHiTtMxnd55cnagIFIPQP6CoRov1kl%2B8MJPROgfOmhroG2CXd0W12Zk0I%2FCUSHV1CI%2BzL3Rc7xmc2pWYfDRT7E8EvnQv5I0aB9NJ4tDsKmYWoZxdoLTKDrqEgWkzPI%2BzqDUWnjZIxFclQ1uEeji85TYqfLOt%2FqwGMnqmnxYarbqzu4bkdC99y00B2nsERy3s6z%2FoO%2FWXi51t49PYG5m75WNhdHn25bTtAbEPkUGUwFBL8%2FrcG2p1l88GBt8xNqPw1LvymDEWI46stz9So9g1m4HqsOUZpr4WDb36GpUuwMQZSHAR1C%2Fc850IxrRPQ%2F540OdkBfEXj4ZGLF8FE2jn4QyUPstu3jqI1CXfRJLfFmv8Q7xDIOWgmdATx%2FpH09q5nVeDNuCqVItzKZzDEtP3EBjqkASYG3mf%2Fb3JmezYG9iijI3e4E%2FAiY5Y6M207g4DQuVIR9Gszuo%2BiqFmytflMvpv4e0CVWPAH1h1b7jDxGRqxlGSCLe4rhqFnpltgpWkIuK2JHmEVbcQ2s7T%2BDvmKzDfP3TDqCXIIUoCSUWAGOebPtY5XWpiGXDD4yfuNJq5RwJoU0T%2BfV0JhpJGcOJh5yaYr1QclhAa4Mg3pgirfuvJ8pPs4%2B0VK&X-Amz-Signature=03bd56a02b1cdf8517d0912c72516cd3f63cfb13dc20368d40d1ff63df656b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZNVQSX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD22barqJ34AcLwgFS%2BE1wzlXxwmm1eyCG%2B1ZphR1QNUgIhAIwZbqodb4IJeoR1G1flPcQx7w2gYO2BveDJoCvbJlUgKv8DCGEQABoMNjM3NDIzMTgzODA1Igz%2BSDDOYEDgxtzqFEAq3AMTY0Nf8Znpf4rWxBNeoaEg3scIKjuktw7cL0pT%2FWL%2B1ST%2FhmmURPfw8VHV%2BJeedmawO8oUHIwY55dV6reDEY%2FttcsQ4Rqj0Cyk0CAE9VwX9r%2Bpmk0UG%2F6DYmz7RvXFNdFFuVEe%2Ft8YA%2FtJY7FcATxeiSgRFKhRKJEUMkdPG7943kmwyDEW2KU1vMf3iKb4LFdtkIFY4xVWRNCnvZQ%2B3ZxR2K9jYzDQGA3LmlrfqCL6LpirHiTtMxnd55cnagIFIPQP6CoRov1kl%2B8MJPROgfOmhroG2CXd0W12Zk0I%2FCUSHV1CI%2BzL3Rc7xmc2pWYfDRT7E8EvnQv5I0aB9NJ4tDsKmYWoZxdoLTKDrqEgWkzPI%2BzqDUWnjZIxFclQ1uEeji85TYqfLOt%2FqwGMnqmnxYarbqzu4bkdC99y00B2nsERy3s6z%2FoO%2FWXi51t49PYG5m75WNhdHn25bTtAbEPkUGUwFBL8%2FrcG2p1l88GBt8xNqPw1LvymDEWI46stz9So9g1m4HqsOUZpr4WDb36GpUuwMQZSHAR1C%2Fc850IxrRPQ%2F540OdkBfEXj4ZGLF8FE2jn4QyUPstu3jqI1CXfRJLfFmv8Q7xDIOWgmdATx%2FpH09q5nVeDNuCqVItzKZzDEtP3EBjqkASYG3mf%2Fb3JmezYG9iijI3e4E%2FAiY5Y6M207g4DQuVIR9Gszuo%2BiqFmytflMvpv4e0CVWPAH1h1b7jDxGRqxlGSCLe4rhqFnpltgpWkIuK2JHmEVbcQ2s7T%2BDvmKzDfP3TDqCXIIUoCSUWAGOebPtY5XWpiGXDD4yfuNJq5RwJoU0T%2BfV0JhpJGcOJh5yaYr1QclhAa4Mg3pgirfuvJ8pPs4%2B0VK&X-Amz-Signature=f82bbddb3a2131253d98daffbc2243b8fa46c9b0fa219c4c94a4498d404949e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

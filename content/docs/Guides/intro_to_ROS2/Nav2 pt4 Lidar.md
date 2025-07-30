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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJ3J6O6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZC77aWi8KevInzEMRngQa4m4Yoh%2FEkwzj1DVwbKAb8AiAXvQ1U%2Bi4ZtjMEPtOEBZfgTPEFUfeVvu0J5MeRm4YtOiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yiw%2BpEH6A6HqPypKtwDdhOrx9jcEPC7wn8j1O%2BIXSZ05ALAyZz6p7TTv0XFs8fOrFlqW0nuGDNluvE84dHgglnIsyYUx9zX4UYy6a84NPfMMy03Lf6G7EMNVfIVVCu1Q70j8cjuOxNgNmpdIy1CGJ0ygLK99DAzAaWfDkVafoGyMSG6xWQGPTrEWljhps%2FdEm3WY%2FJ7gnLHd6s%2B1FKf%2FLod60uqJd7kbt57vnB8bH2evBlufXyshy%2BFdL%2BlfSBs%2B05sI0vcYMeXLz2oxSyMaQOc%2BV%2F%2B%2F0qAzG3xj%2B%2F30%2BSubov%2Bz6isS40YMxcSQDg4Or4Eeg31%2FwDz%2BL%2BDNCNUoH0InTtmjtdaNGnbAk8CrMUAgHLQpSPbDvbPlCQdwRVATRs8R6TlB8L8vAOalC2hxgNM73diXAu4%2FFfAt2aoZAdruB%2FoJzJ9obhK9GFIjyoBM1y8H984Wx0JnDkn3cJpvPN5IA1RP8wunzuVTknKyz4ty%2FjYvJJFsG%2BONN3KaUheOF62NX2SVi9XRjYYgZR%2FWNYvSpMOqdY2FFh7XIWLyw%2FlUrDGYIezaUoHB9KaD3nJDwiDLRl5Bk9l7HFxYfIzB%2FSo%2B0%2FG%2FmOq7BfT9xonireYJ1GDFzr7bzZOR7Ga5Kf%2Fx1d9TIW7GQWTGlAw%2FuipxAY6pgGgAspjtFmnVvKNJMIEXBsLd363rohRUbupQ8IfopjSzu%2BrmrhUa43AF2BnZLvElr0W6P5KFxo%2Bm6YMUxQej2XUYuKJFuyx%2BloBwnA5718SndvaKTNokI%2FfcLqmx2fw7rrQJzPTGH2HCQW2iW2XWknN7c%2FN%2By1lJA5nC27QBbm1VmkSzom7LwxDBD1fswTpxBkmUyw7T%2BrZTFtDz5YsvWlVVqjCSKk6&X-Amz-Signature=060fe67319505378aaa2f2bc1bff966ad246dfffa6af45733563d4c88af06dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJ3J6O6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZC77aWi8KevInzEMRngQa4m4Yoh%2FEkwzj1DVwbKAb8AiAXvQ1U%2Bi4ZtjMEPtOEBZfgTPEFUfeVvu0J5MeRm4YtOiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yiw%2BpEH6A6HqPypKtwDdhOrx9jcEPC7wn8j1O%2BIXSZ05ALAyZz6p7TTv0XFs8fOrFlqW0nuGDNluvE84dHgglnIsyYUx9zX4UYy6a84NPfMMy03Lf6G7EMNVfIVVCu1Q70j8cjuOxNgNmpdIy1CGJ0ygLK99DAzAaWfDkVafoGyMSG6xWQGPTrEWljhps%2FdEm3WY%2FJ7gnLHd6s%2B1FKf%2FLod60uqJd7kbt57vnB8bH2evBlufXyshy%2BFdL%2BlfSBs%2B05sI0vcYMeXLz2oxSyMaQOc%2BV%2F%2B%2F0qAzG3xj%2B%2F30%2BSubov%2Bz6isS40YMxcSQDg4Or4Eeg31%2FwDz%2BL%2BDNCNUoH0InTtmjtdaNGnbAk8CrMUAgHLQpSPbDvbPlCQdwRVATRs8R6TlB8L8vAOalC2hxgNM73diXAu4%2FFfAt2aoZAdruB%2FoJzJ9obhK9GFIjyoBM1y8H984Wx0JnDkn3cJpvPN5IA1RP8wunzuVTknKyz4ty%2FjYvJJFsG%2BONN3KaUheOF62NX2SVi9XRjYYgZR%2FWNYvSpMOqdY2FFh7XIWLyw%2FlUrDGYIezaUoHB9KaD3nJDwiDLRl5Bk9l7HFxYfIzB%2FSo%2B0%2FG%2FmOq7BfT9xonireYJ1GDFzr7bzZOR7Ga5Kf%2Fx1d9TIW7GQWTGlAw%2FuipxAY6pgGgAspjtFmnVvKNJMIEXBsLd363rohRUbupQ8IfopjSzu%2BrmrhUa43AF2BnZLvElr0W6P5KFxo%2Bm6YMUxQej2XUYuKJFuyx%2BloBwnA5718SndvaKTNokI%2FfcLqmx2fw7rrQJzPTGH2HCQW2iW2XWknN7c%2FN%2By1lJA5nC27QBbm1VmkSzom7LwxDBD1fswTpxBkmUyw7T%2BrZTFtDz5YsvWlVVqjCSKk6&X-Amz-Signature=4ff2a1b64049bd3f682c75dc2c062d8d70986f3057e07fe5f12e5f99ad6cc23c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJ3J6O6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZC77aWi8KevInzEMRngQa4m4Yoh%2FEkwzj1DVwbKAb8AiAXvQ1U%2Bi4ZtjMEPtOEBZfgTPEFUfeVvu0J5MeRm4YtOiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yiw%2BpEH6A6HqPypKtwDdhOrx9jcEPC7wn8j1O%2BIXSZ05ALAyZz6p7TTv0XFs8fOrFlqW0nuGDNluvE84dHgglnIsyYUx9zX4UYy6a84NPfMMy03Lf6G7EMNVfIVVCu1Q70j8cjuOxNgNmpdIy1CGJ0ygLK99DAzAaWfDkVafoGyMSG6xWQGPTrEWljhps%2FdEm3WY%2FJ7gnLHd6s%2B1FKf%2FLod60uqJd7kbt57vnB8bH2evBlufXyshy%2BFdL%2BlfSBs%2B05sI0vcYMeXLz2oxSyMaQOc%2BV%2F%2B%2F0qAzG3xj%2B%2F30%2BSubov%2Bz6isS40YMxcSQDg4Or4Eeg31%2FwDz%2BL%2BDNCNUoH0InTtmjtdaNGnbAk8CrMUAgHLQpSPbDvbPlCQdwRVATRs8R6TlB8L8vAOalC2hxgNM73diXAu4%2FFfAt2aoZAdruB%2FoJzJ9obhK9GFIjyoBM1y8H984Wx0JnDkn3cJpvPN5IA1RP8wunzuVTknKyz4ty%2FjYvJJFsG%2BONN3KaUheOF62NX2SVi9XRjYYgZR%2FWNYvSpMOqdY2FFh7XIWLyw%2FlUrDGYIezaUoHB9KaD3nJDwiDLRl5Bk9l7HFxYfIzB%2FSo%2B0%2FG%2FmOq7BfT9xonireYJ1GDFzr7bzZOR7Ga5Kf%2Fx1d9TIW7GQWTGlAw%2FuipxAY6pgGgAspjtFmnVvKNJMIEXBsLd363rohRUbupQ8IfopjSzu%2BrmrhUa43AF2BnZLvElr0W6P5KFxo%2Bm6YMUxQej2XUYuKJFuyx%2BloBwnA5718SndvaKTNokI%2FfcLqmx2fw7rrQJzPTGH2HCQW2iW2XWknN7c%2FN%2By1lJA5nC27QBbm1VmkSzom7LwxDBD1fswTpxBkmUyw7T%2BrZTFtDz5YsvWlVVqjCSKk6&X-Amz-Signature=0f09475829ca9665fe8a90e5254e4e1360d3283afccf591ce5bc354a020d48c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJ3J6O6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZC77aWi8KevInzEMRngQa4m4Yoh%2FEkwzj1DVwbKAb8AiAXvQ1U%2Bi4ZtjMEPtOEBZfgTPEFUfeVvu0J5MeRm4YtOiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yiw%2BpEH6A6HqPypKtwDdhOrx9jcEPC7wn8j1O%2BIXSZ05ALAyZz6p7TTv0XFs8fOrFlqW0nuGDNluvE84dHgglnIsyYUx9zX4UYy6a84NPfMMy03Lf6G7EMNVfIVVCu1Q70j8cjuOxNgNmpdIy1CGJ0ygLK99DAzAaWfDkVafoGyMSG6xWQGPTrEWljhps%2FdEm3WY%2FJ7gnLHd6s%2B1FKf%2FLod60uqJd7kbt57vnB8bH2evBlufXyshy%2BFdL%2BlfSBs%2B05sI0vcYMeXLz2oxSyMaQOc%2BV%2F%2B%2F0qAzG3xj%2B%2F30%2BSubov%2Bz6isS40YMxcSQDg4Or4Eeg31%2FwDz%2BL%2BDNCNUoH0InTtmjtdaNGnbAk8CrMUAgHLQpSPbDvbPlCQdwRVATRs8R6TlB8L8vAOalC2hxgNM73diXAu4%2FFfAt2aoZAdruB%2FoJzJ9obhK9GFIjyoBM1y8H984Wx0JnDkn3cJpvPN5IA1RP8wunzuVTknKyz4ty%2FjYvJJFsG%2BONN3KaUheOF62NX2SVi9XRjYYgZR%2FWNYvSpMOqdY2FFh7XIWLyw%2FlUrDGYIezaUoHB9KaD3nJDwiDLRl5Bk9l7HFxYfIzB%2FSo%2B0%2FG%2FmOq7BfT9xonireYJ1GDFzr7bzZOR7Ga5Kf%2Fx1d9TIW7GQWTGlAw%2FuipxAY6pgGgAspjtFmnVvKNJMIEXBsLd363rohRUbupQ8IfopjSzu%2BrmrhUa43AF2BnZLvElr0W6P5KFxo%2Bm6YMUxQej2XUYuKJFuyx%2BloBwnA5718SndvaKTNokI%2FfcLqmx2fw7rrQJzPTGH2HCQW2iW2XWknN7c%2FN%2By1lJA5nC27QBbm1VmkSzom7LwxDBD1fswTpxBkmUyw7T%2BrZTFtDz5YsvWlVVqjCSKk6&X-Amz-Signature=4508c5560427742730fbd3f323c436c0b89c38fdb0d82fed0802951e78cac84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJ3J6O6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZC77aWi8KevInzEMRngQa4m4Yoh%2FEkwzj1DVwbKAb8AiAXvQ1U%2Bi4ZtjMEPtOEBZfgTPEFUfeVvu0J5MeRm4YtOiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yiw%2BpEH6A6HqPypKtwDdhOrx9jcEPC7wn8j1O%2BIXSZ05ALAyZz6p7TTv0XFs8fOrFlqW0nuGDNluvE84dHgglnIsyYUx9zX4UYy6a84NPfMMy03Lf6G7EMNVfIVVCu1Q70j8cjuOxNgNmpdIy1CGJ0ygLK99DAzAaWfDkVafoGyMSG6xWQGPTrEWljhps%2FdEm3WY%2FJ7gnLHd6s%2B1FKf%2FLod60uqJd7kbt57vnB8bH2evBlufXyshy%2BFdL%2BlfSBs%2B05sI0vcYMeXLz2oxSyMaQOc%2BV%2F%2B%2F0qAzG3xj%2B%2F30%2BSubov%2Bz6isS40YMxcSQDg4Or4Eeg31%2FwDz%2BL%2BDNCNUoH0InTtmjtdaNGnbAk8CrMUAgHLQpSPbDvbPlCQdwRVATRs8R6TlB8L8vAOalC2hxgNM73diXAu4%2FFfAt2aoZAdruB%2FoJzJ9obhK9GFIjyoBM1y8H984Wx0JnDkn3cJpvPN5IA1RP8wunzuVTknKyz4ty%2FjYvJJFsG%2BONN3KaUheOF62NX2SVi9XRjYYgZR%2FWNYvSpMOqdY2FFh7XIWLyw%2FlUrDGYIezaUoHB9KaD3nJDwiDLRl5Bk9l7HFxYfIzB%2FSo%2B0%2FG%2FmOq7BfT9xonireYJ1GDFzr7bzZOR7Ga5Kf%2Fx1d9TIW7GQWTGlAw%2FuipxAY6pgGgAspjtFmnVvKNJMIEXBsLd363rohRUbupQ8IfopjSzu%2BrmrhUa43AF2BnZLvElr0W6P5KFxo%2Bm6YMUxQej2XUYuKJFuyx%2BloBwnA5718SndvaKTNokI%2FfcLqmx2fw7rrQJzPTGH2HCQW2iW2XWknN7c%2FN%2By1lJA5nC27QBbm1VmkSzom7LwxDBD1fswTpxBkmUyw7T%2BrZTFtDz5YsvWlVVqjCSKk6&X-Amz-Signature=83dada4a7c97f82ba874dcbb47ff956404e30f7fbdbe8ae5e031ddb427400bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJ3J6O6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZC77aWi8KevInzEMRngQa4m4Yoh%2FEkwzj1DVwbKAb8AiAXvQ1U%2Bi4ZtjMEPtOEBZfgTPEFUfeVvu0J5MeRm4YtOiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yiw%2BpEH6A6HqPypKtwDdhOrx9jcEPC7wn8j1O%2BIXSZ05ALAyZz6p7TTv0XFs8fOrFlqW0nuGDNluvE84dHgglnIsyYUx9zX4UYy6a84NPfMMy03Lf6G7EMNVfIVVCu1Q70j8cjuOxNgNmpdIy1CGJ0ygLK99DAzAaWfDkVafoGyMSG6xWQGPTrEWljhps%2FdEm3WY%2FJ7gnLHd6s%2B1FKf%2FLod60uqJd7kbt57vnB8bH2evBlufXyshy%2BFdL%2BlfSBs%2B05sI0vcYMeXLz2oxSyMaQOc%2BV%2F%2B%2F0qAzG3xj%2B%2F30%2BSubov%2Bz6isS40YMxcSQDg4Or4Eeg31%2FwDz%2BL%2BDNCNUoH0InTtmjtdaNGnbAk8CrMUAgHLQpSPbDvbPlCQdwRVATRs8R6TlB8L8vAOalC2hxgNM73diXAu4%2FFfAt2aoZAdruB%2FoJzJ9obhK9GFIjyoBM1y8H984Wx0JnDkn3cJpvPN5IA1RP8wunzuVTknKyz4ty%2FjYvJJFsG%2BONN3KaUheOF62NX2SVi9XRjYYgZR%2FWNYvSpMOqdY2FFh7XIWLyw%2FlUrDGYIezaUoHB9KaD3nJDwiDLRl5Bk9l7HFxYfIzB%2FSo%2B0%2FG%2FmOq7BfT9xonireYJ1GDFzr7bzZOR7Ga5Kf%2Fx1d9TIW7GQWTGlAw%2FuipxAY6pgGgAspjtFmnVvKNJMIEXBsLd363rohRUbupQ8IfopjSzu%2BrmrhUa43AF2BnZLvElr0W6P5KFxo%2Bm6YMUxQej2XUYuKJFuyx%2BloBwnA5718SndvaKTNokI%2FfcLqmx2fw7rrQJzPTGH2HCQW2iW2XWknN7c%2FN%2By1lJA5nC27QBbm1VmkSzom7LwxDBD1fswTpxBkmUyw7T%2BrZTFtDz5YsvWlVVqjCSKk6&X-Amz-Signature=d4a3dea0ca7a33c5a766a830df2955e240bd2f20016a2b0ad9c57faa05812248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJ3J6O6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZC77aWi8KevInzEMRngQa4m4Yoh%2FEkwzj1DVwbKAb8AiAXvQ1U%2Bi4ZtjMEPtOEBZfgTPEFUfeVvu0J5MeRm4YtOiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yiw%2BpEH6A6HqPypKtwDdhOrx9jcEPC7wn8j1O%2BIXSZ05ALAyZz6p7TTv0XFs8fOrFlqW0nuGDNluvE84dHgglnIsyYUx9zX4UYy6a84NPfMMy03Lf6G7EMNVfIVVCu1Q70j8cjuOxNgNmpdIy1CGJ0ygLK99DAzAaWfDkVafoGyMSG6xWQGPTrEWljhps%2FdEm3WY%2FJ7gnLHd6s%2B1FKf%2FLod60uqJd7kbt57vnB8bH2evBlufXyshy%2BFdL%2BlfSBs%2B05sI0vcYMeXLz2oxSyMaQOc%2BV%2F%2B%2F0qAzG3xj%2B%2F30%2BSubov%2Bz6isS40YMxcSQDg4Or4Eeg31%2FwDz%2BL%2BDNCNUoH0InTtmjtdaNGnbAk8CrMUAgHLQpSPbDvbPlCQdwRVATRs8R6TlB8L8vAOalC2hxgNM73diXAu4%2FFfAt2aoZAdruB%2FoJzJ9obhK9GFIjyoBM1y8H984Wx0JnDkn3cJpvPN5IA1RP8wunzuVTknKyz4ty%2FjYvJJFsG%2BONN3KaUheOF62NX2SVi9XRjYYgZR%2FWNYvSpMOqdY2FFh7XIWLyw%2FlUrDGYIezaUoHB9KaD3nJDwiDLRl5Bk9l7HFxYfIzB%2FSo%2B0%2FG%2FmOq7BfT9xonireYJ1GDFzr7bzZOR7Ga5Kf%2Fx1d9TIW7GQWTGlAw%2FuipxAY6pgGgAspjtFmnVvKNJMIEXBsLd363rohRUbupQ8IfopjSzu%2BrmrhUa43AF2BnZLvElr0W6P5KFxo%2Bm6YMUxQej2XUYuKJFuyx%2BloBwnA5718SndvaKTNokI%2FfcLqmx2fw7rrQJzPTGH2HCQW2iW2XWknN7c%2FN%2By1lJA5nC27QBbm1VmkSzom7LwxDBD1fswTpxBkmUyw7T%2BrZTFtDz5YsvWlVVqjCSKk6&X-Amz-Signature=105660d554727b38659ddaa8ff9d8bde64bed303832663e7a8d34e80877e5df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJ3J6O6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZC77aWi8KevInzEMRngQa4m4Yoh%2FEkwzj1DVwbKAb8AiAXvQ1U%2Bi4ZtjMEPtOEBZfgTPEFUfeVvu0J5MeRm4YtOiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yiw%2BpEH6A6HqPypKtwDdhOrx9jcEPC7wn8j1O%2BIXSZ05ALAyZz6p7TTv0XFs8fOrFlqW0nuGDNluvE84dHgglnIsyYUx9zX4UYy6a84NPfMMy03Lf6G7EMNVfIVVCu1Q70j8cjuOxNgNmpdIy1CGJ0ygLK99DAzAaWfDkVafoGyMSG6xWQGPTrEWljhps%2FdEm3WY%2FJ7gnLHd6s%2B1FKf%2FLod60uqJd7kbt57vnB8bH2evBlufXyshy%2BFdL%2BlfSBs%2B05sI0vcYMeXLz2oxSyMaQOc%2BV%2F%2B%2F0qAzG3xj%2B%2F30%2BSubov%2Bz6isS40YMxcSQDg4Or4Eeg31%2FwDz%2BL%2BDNCNUoH0InTtmjtdaNGnbAk8CrMUAgHLQpSPbDvbPlCQdwRVATRs8R6TlB8L8vAOalC2hxgNM73diXAu4%2FFfAt2aoZAdruB%2FoJzJ9obhK9GFIjyoBM1y8H984Wx0JnDkn3cJpvPN5IA1RP8wunzuVTknKyz4ty%2FjYvJJFsG%2BONN3KaUheOF62NX2SVi9XRjYYgZR%2FWNYvSpMOqdY2FFh7XIWLyw%2FlUrDGYIezaUoHB9KaD3nJDwiDLRl5Bk9l7HFxYfIzB%2FSo%2B0%2FG%2FmOq7BfT9xonireYJ1GDFzr7bzZOR7Ga5Kf%2Fx1d9TIW7GQWTGlAw%2FuipxAY6pgGgAspjtFmnVvKNJMIEXBsLd363rohRUbupQ8IfopjSzu%2BrmrhUa43AF2BnZLvElr0W6P5KFxo%2Bm6YMUxQej2XUYuKJFuyx%2BloBwnA5718SndvaKTNokI%2FfcLqmx2fw7rrQJzPTGH2HCQW2iW2XWknN7c%2FN%2By1lJA5nC27QBbm1VmkSzom7LwxDBD1fswTpxBkmUyw7T%2BrZTFtDz5YsvWlVVqjCSKk6&X-Amz-Signature=281b38d7f2c1dc8031537145bf7b09352238ab7300e32e0c36a46322ea26e68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJ3J6O6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZC77aWi8KevInzEMRngQa4m4Yoh%2FEkwzj1DVwbKAb8AiAXvQ1U%2Bi4ZtjMEPtOEBZfgTPEFUfeVvu0J5MeRm4YtOiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yiw%2BpEH6A6HqPypKtwDdhOrx9jcEPC7wn8j1O%2BIXSZ05ALAyZz6p7TTv0XFs8fOrFlqW0nuGDNluvE84dHgglnIsyYUx9zX4UYy6a84NPfMMy03Lf6G7EMNVfIVVCu1Q70j8cjuOxNgNmpdIy1CGJ0ygLK99DAzAaWfDkVafoGyMSG6xWQGPTrEWljhps%2FdEm3WY%2FJ7gnLHd6s%2B1FKf%2FLod60uqJd7kbt57vnB8bH2evBlufXyshy%2BFdL%2BlfSBs%2B05sI0vcYMeXLz2oxSyMaQOc%2BV%2F%2B%2F0qAzG3xj%2B%2F30%2BSubov%2Bz6isS40YMxcSQDg4Or4Eeg31%2FwDz%2BL%2BDNCNUoH0InTtmjtdaNGnbAk8CrMUAgHLQpSPbDvbPlCQdwRVATRs8R6TlB8L8vAOalC2hxgNM73diXAu4%2FFfAt2aoZAdruB%2FoJzJ9obhK9GFIjyoBM1y8H984Wx0JnDkn3cJpvPN5IA1RP8wunzuVTknKyz4ty%2FjYvJJFsG%2BONN3KaUheOF62NX2SVi9XRjYYgZR%2FWNYvSpMOqdY2FFh7XIWLyw%2FlUrDGYIezaUoHB9KaD3nJDwiDLRl5Bk9l7HFxYfIzB%2FSo%2B0%2FG%2FmOq7BfT9xonireYJ1GDFzr7bzZOR7Ga5Kf%2Fx1d9TIW7GQWTGlAw%2FuipxAY6pgGgAspjtFmnVvKNJMIEXBsLd363rohRUbupQ8IfopjSzu%2BrmrhUa43AF2BnZLvElr0W6P5KFxo%2Bm6YMUxQej2XUYuKJFuyx%2BloBwnA5718SndvaKTNokI%2FfcLqmx2fw7rrQJzPTGH2HCQW2iW2XWknN7c%2FN%2By1lJA5nC27QBbm1VmkSzom7LwxDBD1fswTpxBkmUyw7T%2BrZTFtDz5YsvWlVVqjCSKk6&X-Amz-Signature=5291583578301d257bc36bae5be160d7962edd5e38b2dae812775a4caaad81c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJ3J6O6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZC77aWi8KevInzEMRngQa4m4Yoh%2FEkwzj1DVwbKAb8AiAXvQ1U%2Bi4ZtjMEPtOEBZfgTPEFUfeVvu0J5MeRm4YtOiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yiw%2BpEH6A6HqPypKtwDdhOrx9jcEPC7wn8j1O%2BIXSZ05ALAyZz6p7TTv0XFs8fOrFlqW0nuGDNluvE84dHgglnIsyYUx9zX4UYy6a84NPfMMy03Lf6G7EMNVfIVVCu1Q70j8cjuOxNgNmpdIy1CGJ0ygLK99DAzAaWfDkVafoGyMSG6xWQGPTrEWljhps%2FdEm3WY%2FJ7gnLHd6s%2B1FKf%2FLod60uqJd7kbt57vnB8bH2evBlufXyshy%2BFdL%2BlfSBs%2B05sI0vcYMeXLz2oxSyMaQOc%2BV%2F%2B%2F0qAzG3xj%2B%2F30%2BSubov%2Bz6isS40YMxcSQDg4Or4Eeg31%2FwDz%2BL%2BDNCNUoH0InTtmjtdaNGnbAk8CrMUAgHLQpSPbDvbPlCQdwRVATRs8R6TlB8L8vAOalC2hxgNM73diXAu4%2FFfAt2aoZAdruB%2FoJzJ9obhK9GFIjyoBM1y8H984Wx0JnDkn3cJpvPN5IA1RP8wunzuVTknKyz4ty%2FjYvJJFsG%2BONN3KaUheOF62NX2SVi9XRjYYgZR%2FWNYvSpMOqdY2FFh7XIWLyw%2FlUrDGYIezaUoHB9KaD3nJDwiDLRl5Bk9l7HFxYfIzB%2FSo%2B0%2FG%2FmOq7BfT9xonireYJ1GDFzr7bzZOR7Ga5Kf%2Fx1d9TIW7GQWTGlAw%2FuipxAY6pgGgAspjtFmnVvKNJMIEXBsLd363rohRUbupQ8IfopjSzu%2BrmrhUa43AF2BnZLvElr0W6P5KFxo%2Bm6YMUxQej2XUYuKJFuyx%2BloBwnA5718SndvaKTNokI%2FfcLqmx2fw7rrQJzPTGH2HCQW2iW2XWknN7c%2FN%2By1lJA5nC27QBbm1VmkSzom7LwxDBD1fswTpxBkmUyw7T%2BrZTFtDz5YsvWlVVqjCSKk6&X-Amz-Signature=d99993c09bc87fa38118b505b69c64fd43c0c786ed1fb6ac44437b5cb3cca303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

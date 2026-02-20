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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BPNVQN%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOZQ2FlOdWCqoz5UTgVV9oqHss3BxAjBUeMou91SKZLgIgXR%2BJPVFV9J7nt8T1rc5b%2BvMXydj%2B9Jcluz0n3E4kZMIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKamBWHVkNS4ub52uircA%2Bctfj0DbSch0J7ryZYuWFznKndiWWll1VM9nMa3EQpWHJiAQUOsR03O0WLLKHEZH%2Fkf4AlSuMN7enoK%2BHkArU%2FMur3bSfLixM9prpMyfxx7fN%2B%2B3zdJH88nCQOC4m0ulv1u8cNzpsL9u2Svs%2FtKUsvDYX22TGieMh%2B9XBcjPmTohRGeLjqtzNYNzlBVqC1GFOJRlj8MpfqNrT1orkjR4LqMSukUmsUEHo8Ujvq9PzBmQPGQMd96F7dQQHTHR1swbCIG2KASGcBi9nd%2F%2FgzZMSsc8nNUQK7OOLXFg0UXmNPmYTDu%2BMRH0fQW%2FLA3KW2ElJxwPJ3O05TxPTbnsV0mrKFaerz%2FDBk7y8%2BQfy5irdaTWqR781kG8EA4vClykwvuKuUoHFG5cTxqwG8%2BvSPFQIQurd%2FqKUJLqrqBjgHL680S1AVnIq60YSvhsb%2FXsjMYiMreMPkNBbfWxiOxn0Hmej%2FieUNz8zTXCUoKqWcJ9vlw6Govsn2h9RwkFnF4Q9I2NSduqoBA3UeP2e3uR026gI3TTOony%2FLfSBmbac5zgJ9bb2slF1CSUQNKioY0DSxw1nmBtTvyWzmsYqqngMn7mRJCVku16QEHAgvAnIyZXnA8qtVQ0JLEGgcGuHW%2BMOzn3swGOqUB%2Be6yvrResbhxDnWAzCHudGKYJmbbu3IoidXJ9QdiMbLL5OJYJf9tHsloi1K0r%2FAwkEuJoBvpNeTLSLghceOA8b1HPno3IqIdtWjZCuSv9c%2FVbsuqN1ccfvVZbijah4cJbnMzt%2B%2BGAdEvhEKGH4WYHHDSBN2UeInqpjT9yvb8RbuiEi3yH2qe%2F7dwiNCHP5amKL5yrQTqp5owyHCIbBaKs%2BFsLpSr&X-Amz-Signature=3ebc883aea45db45fb428a702503896ab5cffdb532d5f0323932fb7de60ac4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3J5WBS%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgpS%2BpPkYVAp0Z8mUQ4c1Fc7KKtvuH6woXnMFBPJlQQIhAJ3Ya16Q4E8Em89%2Fk3aVS6acmhzNLER7qHTtGZlDKIYjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2BLmoyf5ajBcvVlkq3APtmWiFTnkjYAdFrALBoUn6Uza09%2FrP%2F%2FlTEBS2QH2eYF8gqoc2HDPdYVul6I3S24xyzmXK6bYn1V6zIZ2Kjah0I87F%2FkhC2r4vf2UbtAcEiSCqxKM5TmBojlqFUNaS0x2oEU6bQjE9Rrpz%2F7CJRET9RByAoVY%2B8l3M14BkmEcg3Xxu6W4vZv79nH%2BOz%2FU63FrvxhTAtTxcYSQ0hAsUJG%2BYloyJK79%2FCsI9vk1wE1N5iX1np%2Bc14SZhTlEUt%2BNm4QM5gBQOWUq9DeKWtwZhyPd9lkDJCYrtP8p1IfQ4cZamcS9X9QNDzeIlVrDmi6TUkqeKBSYSphUbIGdfc9lMqD2n9T%2FNTfEZ9OahnIxqmfZjLZWlmoGUFS1pdadcKcQS%2BpaW0VdA6d5yeeH8wTcddIEpfUbpvhgP7OtiXsPIwlRZgAYyV%2FztywM1zfdp0fJ5Fg5DtL1Gv7cfS%2BXf3aEk2N2Jzdyitp2wcgVSyYvxP1xOag0QfsbkKKpblLQj2kX0hUKZqGhMQ%2FDdu0rdw%2FSBmqoxltArMMbyrkY%2FqF74IKrINukHFNMyQ%2FIaRHJ2fMmibRj2un4B%2BszyJ8Yv4P5Qv32%2F7zTUxgtMJF0DBJ5%2BLUjWZFmGJNH6XBMRrmZLtjCP6N7MBjqkAR0Hjl%2F%2F5KY9hMF%2FHqEBumqwMoPwiDjsO2Y%2FvkogYt6W3Gqh5Bm4gHfOioK%2B2jDYBa0Lf7%2ByIgvQRwRuVeh2emNFvh28Mwtzg7BKMOxf4PrMV4c6w%2BBE8WU7t5qdgqrVuldj82y1S6z3NBMRHxUdhZ1IIrGpRo0yiJ%2FMcgZG0K0jmaqB7v%2FHD6SqPqRMqrAfzwSjy0O7dldgtStCjxieHH%2BobM3Q&X-Amz-Signature=07cb1d5a82f00313c3880db5fac80a614ba7f1eca034447fa841613f634eb73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3J5WBS%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgpS%2BpPkYVAp0Z8mUQ4c1Fc7KKtvuH6woXnMFBPJlQQIhAJ3Ya16Q4E8Em89%2Fk3aVS6acmhzNLER7qHTtGZlDKIYjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2BLmoyf5ajBcvVlkq3APtmWiFTnkjYAdFrALBoUn6Uza09%2FrP%2F%2FlTEBS2QH2eYF8gqoc2HDPdYVul6I3S24xyzmXK6bYn1V6zIZ2Kjah0I87F%2FkhC2r4vf2UbtAcEiSCqxKM5TmBojlqFUNaS0x2oEU6bQjE9Rrpz%2F7CJRET9RByAoVY%2B8l3M14BkmEcg3Xxu6W4vZv79nH%2BOz%2FU63FrvxhTAtTxcYSQ0hAsUJG%2BYloyJK79%2FCsI9vk1wE1N5iX1np%2Bc14SZhTlEUt%2BNm4QM5gBQOWUq9DeKWtwZhyPd9lkDJCYrtP8p1IfQ4cZamcS9X9QNDzeIlVrDmi6TUkqeKBSYSphUbIGdfc9lMqD2n9T%2FNTfEZ9OahnIxqmfZjLZWlmoGUFS1pdadcKcQS%2BpaW0VdA6d5yeeH8wTcddIEpfUbpvhgP7OtiXsPIwlRZgAYyV%2FztywM1zfdp0fJ5Fg5DtL1Gv7cfS%2BXf3aEk2N2Jzdyitp2wcgVSyYvxP1xOag0QfsbkKKpblLQj2kX0hUKZqGhMQ%2FDdu0rdw%2FSBmqoxltArMMbyrkY%2FqF74IKrINukHFNMyQ%2FIaRHJ2fMmibRj2un4B%2BszyJ8Yv4P5Qv32%2F7zTUxgtMJF0DBJ5%2BLUjWZFmGJNH6XBMRrmZLtjCP6N7MBjqkAR0Hjl%2F%2F5KY9hMF%2FHqEBumqwMoPwiDjsO2Y%2FvkogYt6W3Gqh5Bm4gHfOioK%2B2jDYBa0Lf7%2ByIgvQRwRuVeh2emNFvh28Mwtzg7BKMOxf4PrMV4c6w%2BBE8WU7t5qdgqrVuldj82y1S6z3NBMRHxUdhZ1IIrGpRo0yiJ%2FMcgZG0K0jmaqB7v%2FHD6SqPqRMqrAfzwSjy0O7dldgtStCjxieHH%2BobM3Q&X-Amz-Signature=76eb6e93e0d158b1e54398fcc5f3def26036987c821ff5f09828221c3b1cbd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3J5WBS%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgpS%2BpPkYVAp0Z8mUQ4c1Fc7KKtvuH6woXnMFBPJlQQIhAJ3Ya16Q4E8Em89%2Fk3aVS6acmhzNLER7qHTtGZlDKIYjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2BLmoyf5ajBcvVlkq3APtmWiFTnkjYAdFrALBoUn6Uza09%2FrP%2F%2FlTEBS2QH2eYF8gqoc2HDPdYVul6I3S24xyzmXK6bYn1V6zIZ2Kjah0I87F%2FkhC2r4vf2UbtAcEiSCqxKM5TmBojlqFUNaS0x2oEU6bQjE9Rrpz%2F7CJRET9RByAoVY%2B8l3M14BkmEcg3Xxu6W4vZv79nH%2BOz%2FU63FrvxhTAtTxcYSQ0hAsUJG%2BYloyJK79%2FCsI9vk1wE1N5iX1np%2Bc14SZhTlEUt%2BNm4QM5gBQOWUq9DeKWtwZhyPd9lkDJCYrtP8p1IfQ4cZamcS9X9QNDzeIlVrDmi6TUkqeKBSYSphUbIGdfc9lMqD2n9T%2FNTfEZ9OahnIxqmfZjLZWlmoGUFS1pdadcKcQS%2BpaW0VdA6d5yeeH8wTcddIEpfUbpvhgP7OtiXsPIwlRZgAYyV%2FztywM1zfdp0fJ5Fg5DtL1Gv7cfS%2BXf3aEk2N2Jzdyitp2wcgVSyYvxP1xOag0QfsbkKKpblLQj2kX0hUKZqGhMQ%2FDdu0rdw%2FSBmqoxltArMMbyrkY%2FqF74IKrINukHFNMyQ%2FIaRHJ2fMmibRj2un4B%2BszyJ8Yv4P5Qv32%2F7zTUxgtMJF0DBJ5%2BLUjWZFmGJNH6XBMRrmZLtjCP6N7MBjqkAR0Hjl%2F%2F5KY9hMF%2FHqEBumqwMoPwiDjsO2Y%2FvkogYt6W3Gqh5Bm4gHfOioK%2B2jDYBa0Lf7%2ByIgvQRwRuVeh2emNFvh28Mwtzg7BKMOxf4PrMV4c6w%2BBE8WU7t5qdgqrVuldj82y1S6z3NBMRHxUdhZ1IIrGpRo0yiJ%2FMcgZG0K0jmaqB7v%2FHD6SqPqRMqrAfzwSjy0O7dldgtStCjxieHH%2BobM3Q&X-Amz-Signature=c2b84fd7a801065e62b45239af6fad0e4a32b1edd18b54e113e2ef6cd4181697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3J5WBS%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgpS%2BpPkYVAp0Z8mUQ4c1Fc7KKtvuH6woXnMFBPJlQQIhAJ3Ya16Q4E8Em89%2Fk3aVS6acmhzNLER7qHTtGZlDKIYjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2BLmoyf5ajBcvVlkq3APtmWiFTnkjYAdFrALBoUn6Uza09%2FrP%2F%2FlTEBS2QH2eYF8gqoc2HDPdYVul6I3S24xyzmXK6bYn1V6zIZ2Kjah0I87F%2FkhC2r4vf2UbtAcEiSCqxKM5TmBojlqFUNaS0x2oEU6bQjE9Rrpz%2F7CJRET9RByAoVY%2B8l3M14BkmEcg3Xxu6W4vZv79nH%2BOz%2FU63FrvxhTAtTxcYSQ0hAsUJG%2BYloyJK79%2FCsI9vk1wE1N5iX1np%2Bc14SZhTlEUt%2BNm4QM5gBQOWUq9DeKWtwZhyPd9lkDJCYrtP8p1IfQ4cZamcS9X9QNDzeIlVrDmi6TUkqeKBSYSphUbIGdfc9lMqD2n9T%2FNTfEZ9OahnIxqmfZjLZWlmoGUFS1pdadcKcQS%2BpaW0VdA6d5yeeH8wTcddIEpfUbpvhgP7OtiXsPIwlRZgAYyV%2FztywM1zfdp0fJ5Fg5DtL1Gv7cfS%2BXf3aEk2N2Jzdyitp2wcgVSyYvxP1xOag0QfsbkKKpblLQj2kX0hUKZqGhMQ%2FDdu0rdw%2FSBmqoxltArMMbyrkY%2FqF74IKrINukHFNMyQ%2FIaRHJ2fMmibRj2un4B%2BszyJ8Yv4P5Qv32%2F7zTUxgtMJF0DBJ5%2BLUjWZFmGJNH6XBMRrmZLtjCP6N7MBjqkAR0Hjl%2F%2F5KY9hMF%2FHqEBumqwMoPwiDjsO2Y%2FvkogYt6W3Gqh5Bm4gHfOioK%2B2jDYBa0Lf7%2ByIgvQRwRuVeh2emNFvh28Mwtzg7BKMOxf4PrMV4c6w%2BBE8WU7t5qdgqrVuldj82y1S6z3NBMRHxUdhZ1IIrGpRo0yiJ%2FMcgZG0K0jmaqB7v%2FHD6SqPqRMqrAfzwSjy0O7dldgtStCjxieHH%2BobM3Q&X-Amz-Signature=4ba096b411b3af25481285efe9b26f5b52543a14ea2a0db4e49b85fd7b7947b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3J5WBS%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgpS%2BpPkYVAp0Z8mUQ4c1Fc7KKtvuH6woXnMFBPJlQQIhAJ3Ya16Q4E8Em89%2Fk3aVS6acmhzNLER7qHTtGZlDKIYjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2BLmoyf5ajBcvVlkq3APtmWiFTnkjYAdFrALBoUn6Uza09%2FrP%2F%2FlTEBS2QH2eYF8gqoc2HDPdYVul6I3S24xyzmXK6bYn1V6zIZ2Kjah0I87F%2FkhC2r4vf2UbtAcEiSCqxKM5TmBojlqFUNaS0x2oEU6bQjE9Rrpz%2F7CJRET9RByAoVY%2B8l3M14BkmEcg3Xxu6W4vZv79nH%2BOz%2FU63FrvxhTAtTxcYSQ0hAsUJG%2BYloyJK79%2FCsI9vk1wE1N5iX1np%2Bc14SZhTlEUt%2BNm4QM5gBQOWUq9DeKWtwZhyPd9lkDJCYrtP8p1IfQ4cZamcS9X9QNDzeIlVrDmi6TUkqeKBSYSphUbIGdfc9lMqD2n9T%2FNTfEZ9OahnIxqmfZjLZWlmoGUFS1pdadcKcQS%2BpaW0VdA6d5yeeH8wTcddIEpfUbpvhgP7OtiXsPIwlRZgAYyV%2FztywM1zfdp0fJ5Fg5DtL1Gv7cfS%2BXf3aEk2N2Jzdyitp2wcgVSyYvxP1xOag0QfsbkKKpblLQj2kX0hUKZqGhMQ%2FDdu0rdw%2FSBmqoxltArMMbyrkY%2FqF74IKrINukHFNMyQ%2FIaRHJ2fMmibRj2un4B%2BszyJ8Yv4P5Qv32%2F7zTUxgtMJF0DBJ5%2BLUjWZFmGJNH6XBMRrmZLtjCP6N7MBjqkAR0Hjl%2F%2F5KY9hMF%2FHqEBumqwMoPwiDjsO2Y%2FvkogYt6W3Gqh5Bm4gHfOioK%2B2jDYBa0Lf7%2ByIgvQRwRuVeh2emNFvh28Mwtzg7BKMOxf4PrMV4c6w%2BBE8WU7t5qdgqrVuldj82y1S6z3NBMRHxUdhZ1IIrGpRo0yiJ%2FMcgZG0K0jmaqB7v%2FHD6SqPqRMqrAfzwSjy0O7dldgtStCjxieHH%2BobM3Q&X-Amz-Signature=9e54296782842dbeb943c6a69d682449acc503bf09fbaa9eafbf9609e0af83f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3J5WBS%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgpS%2BpPkYVAp0Z8mUQ4c1Fc7KKtvuH6woXnMFBPJlQQIhAJ3Ya16Q4E8Em89%2Fk3aVS6acmhzNLER7qHTtGZlDKIYjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2BLmoyf5ajBcvVlkq3APtmWiFTnkjYAdFrALBoUn6Uza09%2FrP%2F%2FlTEBS2QH2eYF8gqoc2HDPdYVul6I3S24xyzmXK6bYn1V6zIZ2Kjah0I87F%2FkhC2r4vf2UbtAcEiSCqxKM5TmBojlqFUNaS0x2oEU6bQjE9Rrpz%2F7CJRET9RByAoVY%2B8l3M14BkmEcg3Xxu6W4vZv79nH%2BOz%2FU63FrvxhTAtTxcYSQ0hAsUJG%2BYloyJK79%2FCsI9vk1wE1N5iX1np%2Bc14SZhTlEUt%2BNm4QM5gBQOWUq9DeKWtwZhyPd9lkDJCYrtP8p1IfQ4cZamcS9X9QNDzeIlVrDmi6TUkqeKBSYSphUbIGdfc9lMqD2n9T%2FNTfEZ9OahnIxqmfZjLZWlmoGUFS1pdadcKcQS%2BpaW0VdA6d5yeeH8wTcddIEpfUbpvhgP7OtiXsPIwlRZgAYyV%2FztywM1zfdp0fJ5Fg5DtL1Gv7cfS%2BXf3aEk2N2Jzdyitp2wcgVSyYvxP1xOag0QfsbkKKpblLQj2kX0hUKZqGhMQ%2FDdu0rdw%2FSBmqoxltArMMbyrkY%2FqF74IKrINukHFNMyQ%2FIaRHJ2fMmibRj2un4B%2BszyJ8Yv4P5Qv32%2F7zTUxgtMJF0DBJ5%2BLUjWZFmGJNH6XBMRrmZLtjCP6N7MBjqkAR0Hjl%2F%2F5KY9hMF%2FHqEBumqwMoPwiDjsO2Y%2FvkogYt6W3Gqh5Bm4gHfOioK%2B2jDYBa0Lf7%2ByIgvQRwRuVeh2emNFvh28Mwtzg7BKMOxf4PrMV4c6w%2BBE8WU7t5qdgqrVuldj82y1S6z3NBMRHxUdhZ1IIrGpRo0yiJ%2FMcgZG0K0jmaqB7v%2FHD6SqPqRMqrAfzwSjy0O7dldgtStCjxieHH%2BobM3Q&X-Amz-Signature=0374f8c7fcfb98e18c9fcda9fdbf474dcbf005670a78073956e5bd72717c7df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3J5WBS%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgpS%2BpPkYVAp0Z8mUQ4c1Fc7KKtvuH6woXnMFBPJlQQIhAJ3Ya16Q4E8Em89%2Fk3aVS6acmhzNLER7qHTtGZlDKIYjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2BLmoyf5ajBcvVlkq3APtmWiFTnkjYAdFrALBoUn6Uza09%2FrP%2F%2FlTEBS2QH2eYF8gqoc2HDPdYVul6I3S24xyzmXK6bYn1V6zIZ2Kjah0I87F%2FkhC2r4vf2UbtAcEiSCqxKM5TmBojlqFUNaS0x2oEU6bQjE9Rrpz%2F7CJRET9RByAoVY%2B8l3M14BkmEcg3Xxu6W4vZv79nH%2BOz%2FU63FrvxhTAtTxcYSQ0hAsUJG%2BYloyJK79%2FCsI9vk1wE1N5iX1np%2Bc14SZhTlEUt%2BNm4QM5gBQOWUq9DeKWtwZhyPd9lkDJCYrtP8p1IfQ4cZamcS9X9QNDzeIlVrDmi6TUkqeKBSYSphUbIGdfc9lMqD2n9T%2FNTfEZ9OahnIxqmfZjLZWlmoGUFS1pdadcKcQS%2BpaW0VdA6d5yeeH8wTcddIEpfUbpvhgP7OtiXsPIwlRZgAYyV%2FztywM1zfdp0fJ5Fg5DtL1Gv7cfS%2BXf3aEk2N2Jzdyitp2wcgVSyYvxP1xOag0QfsbkKKpblLQj2kX0hUKZqGhMQ%2FDdu0rdw%2FSBmqoxltArMMbyrkY%2FqF74IKrINukHFNMyQ%2FIaRHJ2fMmibRj2un4B%2BszyJ8Yv4P5Qv32%2F7zTUxgtMJF0DBJ5%2BLUjWZFmGJNH6XBMRrmZLtjCP6N7MBjqkAR0Hjl%2F%2F5KY9hMF%2FHqEBumqwMoPwiDjsO2Y%2FvkogYt6W3Gqh5Bm4gHfOioK%2B2jDYBa0Lf7%2ByIgvQRwRuVeh2emNFvh28Mwtzg7BKMOxf4PrMV4c6w%2BBE8WU7t5qdgqrVuldj82y1S6z3NBMRHxUdhZ1IIrGpRo0yiJ%2FMcgZG0K0jmaqB7v%2FHD6SqPqRMqrAfzwSjy0O7dldgtStCjxieHH%2BobM3Q&X-Amz-Signature=936f80f35c4f2974a5ce2f88bb5f71739d6832bee85b8d6f47beecf63d66b87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3J5WBS%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgpS%2BpPkYVAp0Z8mUQ4c1Fc7KKtvuH6woXnMFBPJlQQIhAJ3Ya16Q4E8Em89%2Fk3aVS6acmhzNLER7qHTtGZlDKIYjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2BLmoyf5ajBcvVlkq3APtmWiFTnkjYAdFrALBoUn6Uza09%2FrP%2F%2FlTEBS2QH2eYF8gqoc2HDPdYVul6I3S24xyzmXK6bYn1V6zIZ2Kjah0I87F%2FkhC2r4vf2UbtAcEiSCqxKM5TmBojlqFUNaS0x2oEU6bQjE9Rrpz%2F7CJRET9RByAoVY%2B8l3M14BkmEcg3Xxu6W4vZv79nH%2BOz%2FU63FrvxhTAtTxcYSQ0hAsUJG%2BYloyJK79%2FCsI9vk1wE1N5iX1np%2Bc14SZhTlEUt%2BNm4QM5gBQOWUq9DeKWtwZhyPd9lkDJCYrtP8p1IfQ4cZamcS9X9QNDzeIlVrDmi6TUkqeKBSYSphUbIGdfc9lMqD2n9T%2FNTfEZ9OahnIxqmfZjLZWlmoGUFS1pdadcKcQS%2BpaW0VdA6d5yeeH8wTcddIEpfUbpvhgP7OtiXsPIwlRZgAYyV%2FztywM1zfdp0fJ5Fg5DtL1Gv7cfS%2BXf3aEk2N2Jzdyitp2wcgVSyYvxP1xOag0QfsbkKKpblLQj2kX0hUKZqGhMQ%2FDdu0rdw%2FSBmqoxltArMMbyrkY%2FqF74IKrINukHFNMyQ%2FIaRHJ2fMmibRj2un4B%2BszyJ8Yv4P5Qv32%2F7zTUxgtMJF0DBJ5%2BLUjWZFmGJNH6XBMRrmZLtjCP6N7MBjqkAR0Hjl%2F%2F5KY9hMF%2FHqEBumqwMoPwiDjsO2Y%2FvkogYt6W3Gqh5Bm4gHfOioK%2B2jDYBa0Lf7%2ByIgvQRwRuVeh2emNFvh28Mwtzg7BKMOxf4PrMV4c6w%2BBE8WU7t5qdgqrVuldj82y1S6z3NBMRHxUdhZ1IIrGpRo0yiJ%2FMcgZG0K0jmaqB7v%2FHD6SqPqRMqrAfzwSjy0O7dldgtStCjxieHH%2BobM3Q&X-Amz-Signature=801f830e93c2f2f79d076fcf9f2feb934ef2ab06fe65f695c7f1d3b0b0d24ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3J5WBS%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgpS%2BpPkYVAp0Z8mUQ4c1Fc7KKtvuH6woXnMFBPJlQQIhAJ3Ya16Q4E8Em89%2Fk3aVS6acmhzNLER7qHTtGZlDKIYjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2BLmoyf5ajBcvVlkq3APtmWiFTnkjYAdFrALBoUn6Uza09%2FrP%2F%2FlTEBS2QH2eYF8gqoc2HDPdYVul6I3S24xyzmXK6bYn1V6zIZ2Kjah0I87F%2FkhC2r4vf2UbtAcEiSCqxKM5TmBojlqFUNaS0x2oEU6bQjE9Rrpz%2F7CJRET9RByAoVY%2B8l3M14BkmEcg3Xxu6W4vZv79nH%2BOz%2FU63FrvxhTAtTxcYSQ0hAsUJG%2BYloyJK79%2FCsI9vk1wE1N5iX1np%2Bc14SZhTlEUt%2BNm4QM5gBQOWUq9DeKWtwZhyPd9lkDJCYrtP8p1IfQ4cZamcS9X9QNDzeIlVrDmi6TUkqeKBSYSphUbIGdfc9lMqD2n9T%2FNTfEZ9OahnIxqmfZjLZWlmoGUFS1pdadcKcQS%2BpaW0VdA6d5yeeH8wTcddIEpfUbpvhgP7OtiXsPIwlRZgAYyV%2FztywM1zfdp0fJ5Fg5DtL1Gv7cfS%2BXf3aEk2N2Jzdyitp2wcgVSyYvxP1xOag0QfsbkKKpblLQj2kX0hUKZqGhMQ%2FDdu0rdw%2FSBmqoxltArMMbyrkY%2FqF74IKrINukHFNMyQ%2FIaRHJ2fMmibRj2un4B%2BszyJ8Yv4P5Qv32%2F7zTUxgtMJF0DBJ5%2BLUjWZFmGJNH6XBMRrmZLtjCP6N7MBjqkAR0Hjl%2F%2F5KY9hMF%2FHqEBumqwMoPwiDjsO2Y%2FvkogYt6W3Gqh5Bm4gHfOioK%2B2jDYBa0Lf7%2ByIgvQRwRuVeh2emNFvh28Mwtzg7BKMOxf4PrMV4c6w%2BBE8WU7t5qdgqrVuldj82y1S6z3NBMRHxUdhZ1IIrGpRo0yiJ%2FMcgZG0K0jmaqB7v%2FHD6SqPqRMqrAfzwSjy0O7dldgtStCjxieHH%2BobM3Q&X-Amz-Signature=f38c9b5281e696ae43e7878bfd8f59b14bd88fc38a579d4a9dfcc724624fcaff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3J5WBS%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgpS%2BpPkYVAp0Z8mUQ4c1Fc7KKtvuH6woXnMFBPJlQQIhAJ3Ya16Q4E8Em89%2Fk3aVS6acmhzNLER7qHTtGZlDKIYjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM%2BLmoyf5ajBcvVlkq3APtmWiFTnkjYAdFrALBoUn6Uza09%2FrP%2F%2FlTEBS2QH2eYF8gqoc2HDPdYVul6I3S24xyzmXK6bYn1V6zIZ2Kjah0I87F%2FkhC2r4vf2UbtAcEiSCqxKM5TmBojlqFUNaS0x2oEU6bQjE9Rrpz%2F7CJRET9RByAoVY%2B8l3M14BkmEcg3Xxu6W4vZv79nH%2BOz%2FU63FrvxhTAtTxcYSQ0hAsUJG%2BYloyJK79%2FCsI9vk1wE1N5iX1np%2Bc14SZhTlEUt%2BNm4QM5gBQOWUq9DeKWtwZhyPd9lkDJCYrtP8p1IfQ4cZamcS9X9QNDzeIlVrDmi6TUkqeKBSYSphUbIGdfc9lMqD2n9T%2FNTfEZ9OahnIxqmfZjLZWlmoGUFS1pdadcKcQS%2BpaW0VdA6d5yeeH8wTcddIEpfUbpvhgP7OtiXsPIwlRZgAYyV%2FztywM1zfdp0fJ5Fg5DtL1Gv7cfS%2BXf3aEk2N2Jzdyitp2wcgVSyYvxP1xOag0QfsbkKKpblLQj2kX0hUKZqGhMQ%2FDdu0rdw%2FSBmqoxltArMMbyrkY%2FqF74IKrINukHFNMyQ%2FIaRHJ2fMmibRj2un4B%2BszyJ8Yv4P5Qv32%2F7zTUxgtMJF0DBJ5%2BLUjWZFmGJNH6XBMRrmZLtjCP6N7MBjqkAR0Hjl%2F%2F5KY9hMF%2FHqEBumqwMoPwiDjsO2Y%2FvkogYt6W3Gqh5Bm4gHfOioK%2B2jDYBa0Lf7%2ByIgvQRwRuVeh2emNFvh28Mwtzg7BKMOxf4PrMV4c6w%2BBE8WU7t5qdgqrVuldj82y1S6z3NBMRHxUdhZ1IIrGpRo0yiJ%2FMcgZG0K0jmaqB7v%2FHD6SqPqRMqrAfzwSjy0O7dldgtStCjxieHH%2BobM3Q&X-Amz-Signature=ec19cbcd07dd061753e14a6274da3998d9edf2a471ca497aefc4f8b2906da314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

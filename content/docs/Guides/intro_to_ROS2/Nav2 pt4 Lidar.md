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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK7QAPZM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHe45Iv%2FLzOmiJgL1jqYlamXKubyBEy4gN%2BK6H%2BT7ztTAiBVifuJHDl%2B5j1QB08EmzXKtvucO7zlfu4aHiFZeH6IICr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMLq6zKlXQz6FJF64jKtwDwggg6s0m7fKZ1IQFYf3dPopfk6Fm5PHdeTtE13i0QPm45%2FFaCNmmAV1EpYpGKiGYAZlxOuWdOkV3Sz3GqGklyHj32QInnltldzSSmo4GdP4JXuLQKJCUpJrcs0Gp%2F1OU%2BPYyEmx%2FVTmIpN3CgYgFgZnkBY2jluxBzI8vqkcphj4Z%2BO%2B%2BNXhTfJh8yG7qA0twIGHUbBwMVUf73kOFIjtImlJh4jET2LRub2hhau2wuDXSFnROB7UnYQYJjuxvaC%2BwuKRpQ%2F78Q0ZN9ERIroZAjWDtXjsXy6qliCLFPMAcKLU%2FdmpJahDykC3cK4ZIRs0SjT68Jij%2Fr3KcjUFQrY0jLk66YLwDrKzlpyflQXFHW9mI%2FOkc7PwMUjUKC8OoIcddQUkqtOzhxh9GkLMV6tT79qmlhRrJ8fbd%2BuTzIrlg7jhDpTzeL1XHdSZdJdQ0aQ3IlmklA1bX8mv4FCxlqkhaXjlCsELkPlOq2fmnfA2wRZPn%2BrjSTCLZDYNC482kDrTXGGzaq7Xrc%2B%2BgXAqiN%2Fx98jLraAM6S096x37pxj8TZTG3OkAoa7sOQgDadgMRqy3prUlHbKlfN56rZuk3Ul6P6h9MRGF5DOcysA1msu%2BdJN60LEwAqkvd7fooK8IwgY3GxAY6pgF7Xel4qrHme2Kmt2AiGYtRjvvrdSnAtsDL8uqWCtH5fHHzCAp11nxxIZ%2BWgKLdbTbZeWUJxc2NVjJs%2FkM28yUIa4waNyoFOInjpX73YiCpAB2M8ithlYtz4uvrvcqa85AYqKRA4gSCY36I9y5nVtI%2FAGzUofHgdTjR5w0LidaYEpBbrmfJKzDFjTr%2FsWkVnOeSKCH8F53M8FWEKhkmr7GXwGOJNFWT&X-Amz-Signature=8309f5d90b59b64b6be3939f3c10634e5baf0cb674ae0c4d9795f8c641463198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BCJNKK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAnNmrD9bsgWg5Qa71d0YD1gYvNtzZXbdVRkONyGOGMcAiARvTE6bVFcBhSiCFJPdegg4yi%2BoM2HkXH0pn08B8s1Iyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrBJDOPRUKL4t9M88KtwDhonWwn6Ql4hRdeyelf1aBnqEsOUMNnQx%2FNzIPC8Xxd7g4gkVuKYJ57CE%2B%2BUBMIr1WDya3Tttw7RkBmHqRLdYS8aWoafzSutV2pWVUIjm%2FP9PRi4XFxx9oDZj5L6Pq8jvYFWJQ3jCXV%2F%2FUpKnn0mvisus5JiM%2FFtshClvkai1JuGKwBX67fkGOc0nyPzFuo%2BOJYUd0T4WAyYFFYAXFN3IfOjmefh49Y0FoNqar40HwtCd4ADN5ZTeUxfFq27DBSGAAr4tbSGAXEi%2B%2Fu70xq5py8IC4zMchpc%2BRMm4HYXk0pQ84DYnl87EC7JPC3FiKWLXz6iP05WYP1onCYMm4un9DAQoHMW%2BPck4xp7cYMgBil2%2B4kWUJ42qWKYWmlikrJ7KaHMYWSoE95nqp1F8CJ3SLHqNQ6FiliSCd0TXsJ9bmxmpk8rIbiqRoAAYzLA9igdW7QTb5LYL8Ec2%2Fmrqn0hP3Y3HaejMghYevF%2FJtnobnpFp%2FNkZhpwMY2uvFyETuy4t8vGK9omQ5f9i7h%2BS4yNYwAC3CMoG2oOJ%2FUL8xCrv1UOeWujQQxOMpTIrxtGGC1wXs1zs%2BQTbVdflSr%2BkbfsumbkXA%2BPw84Ufy3rXYx2hNzG6nLCU9fQfKoiyANAwiI3GxAY6pgExgcF4YKFBz%2BXnK8oWAbis9%2Bt0RgVlbzg2Ht9%2Fde8P1W9kSoIEqBd%2F2XZl8LjII%2FLHIR0U%2FgTGfjZlH4WPIVB2WYcgZhO0VsKpJx7srbLURzW3QTXHXupFYh2t7XpyZjhTqQibmqkt5Pr21CJv6KVQPHZyTZZ1s4Eyav23wCWAcYlSiX2jLaXyMl8ezq7GDeJUHvyz%2FCKsK3sB7WacHLqNj685199t&X-Amz-Signature=b3b12a72b734676b3e11b8db21cbc07129e5b00f448faa01f113e4dd441cc963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BCJNKK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAnNmrD9bsgWg5Qa71d0YD1gYvNtzZXbdVRkONyGOGMcAiARvTE6bVFcBhSiCFJPdegg4yi%2BoM2HkXH0pn08B8s1Iyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrBJDOPRUKL4t9M88KtwDhonWwn6Ql4hRdeyelf1aBnqEsOUMNnQx%2FNzIPC8Xxd7g4gkVuKYJ57CE%2B%2BUBMIr1WDya3Tttw7RkBmHqRLdYS8aWoafzSutV2pWVUIjm%2FP9PRi4XFxx9oDZj5L6Pq8jvYFWJQ3jCXV%2F%2FUpKnn0mvisus5JiM%2FFtshClvkai1JuGKwBX67fkGOc0nyPzFuo%2BOJYUd0T4WAyYFFYAXFN3IfOjmefh49Y0FoNqar40HwtCd4ADN5ZTeUxfFq27DBSGAAr4tbSGAXEi%2B%2Fu70xq5py8IC4zMchpc%2BRMm4HYXk0pQ84DYnl87EC7JPC3FiKWLXz6iP05WYP1onCYMm4un9DAQoHMW%2BPck4xp7cYMgBil2%2B4kWUJ42qWKYWmlikrJ7KaHMYWSoE95nqp1F8CJ3SLHqNQ6FiliSCd0TXsJ9bmxmpk8rIbiqRoAAYzLA9igdW7QTb5LYL8Ec2%2Fmrqn0hP3Y3HaejMghYevF%2FJtnobnpFp%2FNkZhpwMY2uvFyETuy4t8vGK9omQ5f9i7h%2BS4yNYwAC3CMoG2oOJ%2FUL8xCrv1UOeWujQQxOMpTIrxtGGC1wXs1zs%2BQTbVdflSr%2BkbfsumbkXA%2BPw84Ufy3rXYx2hNzG6nLCU9fQfKoiyANAwiI3GxAY6pgExgcF4YKFBz%2BXnK8oWAbis9%2Bt0RgVlbzg2Ht9%2Fde8P1W9kSoIEqBd%2F2XZl8LjII%2FLHIR0U%2FgTGfjZlH4WPIVB2WYcgZhO0VsKpJx7srbLURzW3QTXHXupFYh2t7XpyZjhTqQibmqkt5Pr21CJv6KVQPHZyTZZ1s4Eyav23wCWAcYlSiX2jLaXyMl8ezq7GDeJUHvyz%2FCKsK3sB7WacHLqNj685199t&X-Amz-Signature=d61fa11f3e84dee406bb7afbbde95337777cce1537612e6a99fcc382cfde2136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BCJNKK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAnNmrD9bsgWg5Qa71d0YD1gYvNtzZXbdVRkONyGOGMcAiARvTE6bVFcBhSiCFJPdegg4yi%2BoM2HkXH0pn08B8s1Iyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrBJDOPRUKL4t9M88KtwDhonWwn6Ql4hRdeyelf1aBnqEsOUMNnQx%2FNzIPC8Xxd7g4gkVuKYJ57CE%2B%2BUBMIr1WDya3Tttw7RkBmHqRLdYS8aWoafzSutV2pWVUIjm%2FP9PRi4XFxx9oDZj5L6Pq8jvYFWJQ3jCXV%2F%2FUpKnn0mvisus5JiM%2FFtshClvkai1JuGKwBX67fkGOc0nyPzFuo%2BOJYUd0T4WAyYFFYAXFN3IfOjmefh49Y0FoNqar40HwtCd4ADN5ZTeUxfFq27DBSGAAr4tbSGAXEi%2B%2Fu70xq5py8IC4zMchpc%2BRMm4HYXk0pQ84DYnl87EC7JPC3FiKWLXz6iP05WYP1onCYMm4un9DAQoHMW%2BPck4xp7cYMgBil2%2B4kWUJ42qWKYWmlikrJ7KaHMYWSoE95nqp1F8CJ3SLHqNQ6FiliSCd0TXsJ9bmxmpk8rIbiqRoAAYzLA9igdW7QTb5LYL8Ec2%2Fmrqn0hP3Y3HaejMghYevF%2FJtnobnpFp%2FNkZhpwMY2uvFyETuy4t8vGK9omQ5f9i7h%2BS4yNYwAC3CMoG2oOJ%2FUL8xCrv1UOeWujQQxOMpTIrxtGGC1wXs1zs%2BQTbVdflSr%2BkbfsumbkXA%2BPw84Ufy3rXYx2hNzG6nLCU9fQfKoiyANAwiI3GxAY6pgExgcF4YKFBz%2BXnK8oWAbis9%2Bt0RgVlbzg2Ht9%2Fde8P1W9kSoIEqBd%2F2XZl8LjII%2FLHIR0U%2FgTGfjZlH4WPIVB2WYcgZhO0VsKpJx7srbLURzW3QTXHXupFYh2t7XpyZjhTqQibmqkt5Pr21CJv6KVQPHZyTZZ1s4Eyav23wCWAcYlSiX2jLaXyMl8ezq7GDeJUHvyz%2FCKsK3sB7WacHLqNj685199t&X-Amz-Signature=3b6cfdda3097e92010cc201b08c6bf59d4d3e000dd085623c7623666d6e38bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BCJNKK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAnNmrD9bsgWg5Qa71d0YD1gYvNtzZXbdVRkONyGOGMcAiARvTE6bVFcBhSiCFJPdegg4yi%2BoM2HkXH0pn08B8s1Iyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrBJDOPRUKL4t9M88KtwDhonWwn6Ql4hRdeyelf1aBnqEsOUMNnQx%2FNzIPC8Xxd7g4gkVuKYJ57CE%2B%2BUBMIr1WDya3Tttw7RkBmHqRLdYS8aWoafzSutV2pWVUIjm%2FP9PRi4XFxx9oDZj5L6Pq8jvYFWJQ3jCXV%2F%2FUpKnn0mvisus5JiM%2FFtshClvkai1JuGKwBX67fkGOc0nyPzFuo%2BOJYUd0T4WAyYFFYAXFN3IfOjmefh49Y0FoNqar40HwtCd4ADN5ZTeUxfFq27DBSGAAr4tbSGAXEi%2B%2Fu70xq5py8IC4zMchpc%2BRMm4HYXk0pQ84DYnl87EC7JPC3FiKWLXz6iP05WYP1onCYMm4un9DAQoHMW%2BPck4xp7cYMgBil2%2B4kWUJ42qWKYWmlikrJ7KaHMYWSoE95nqp1F8CJ3SLHqNQ6FiliSCd0TXsJ9bmxmpk8rIbiqRoAAYzLA9igdW7QTb5LYL8Ec2%2Fmrqn0hP3Y3HaejMghYevF%2FJtnobnpFp%2FNkZhpwMY2uvFyETuy4t8vGK9omQ5f9i7h%2BS4yNYwAC3CMoG2oOJ%2FUL8xCrv1UOeWujQQxOMpTIrxtGGC1wXs1zs%2BQTbVdflSr%2BkbfsumbkXA%2BPw84Ufy3rXYx2hNzG6nLCU9fQfKoiyANAwiI3GxAY6pgExgcF4YKFBz%2BXnK8oWAbis9%2Bt0RgVlbzg2Ht9%2Fde8P1W9kSoIEqBd%2F2XZl8LjII%2FLHIR0U%2FgTGfjZlH4WPIVB2WYcgZhO0VsKpJx7srbLURzW3QTXHXupFYh2t7XpyZjhTqQibmqkt5Pr21CJv6KVQPHZyTZZ1s4Eyav23wCWAcYlSiX2jLaXyMl8ezq7GDeJUHvyz%2FCKsK3sB7WacHLqNj685199t&X-Amz-Signature=4317625477474c7d31318ae5c77ca162d91689fb27ca031476673aeb0264201d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BCJNKK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAnNmrD9bsgWg5Qa71d0YD1gYvNtzZXbdVRkONyGOGMcAiARvTE6bVFcBhSiCFJPdegg4yi%2BoM2HkXH0pn08B8s1Iyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrBJDOPRUKL4t9M88KtwDhonWwn6Ql4hRdeyelf1aBnqEsOUMNnQx%2FNzIPC8Xxd7g4gkVuKYJ57CE%2B%2BUBMIr1WDya3Tttw7RkBmHqRLdYS8aWoafzSutV2pWVUIjm%2FP9PRi4XFxx9oDZj5L6Pq8jvYFWJQ3jCXV%2F%2FUpKnn0mvisus5JiM%2FFtshClvkai1JuGKwBX67fkGOc0nyPzFuo%2BOJYUd0T4WAyYFFYAXFN3IfOjmefh49Y0FoNqar40HwtCd4ADN5ZTeUxfFq27DBSGAAr4tbSGAXEi%2B%2Fu70xq5py8IC4zMchpc%2BRMm4HYXk0pQ84DYnl87EC7JPC3FiKWLXz6iP05WYP1onCYMm4un9DAQoHMW%2BPck4xp7cYMgBil2%2B4kWUJ42qWKYWmlikrJ7KaHMYWSoE95nqp1F8CJ3SLHqNQ6FiliSCd0TXsJ9bmxmpk8rIbiqRoAAYzLA9igdW7QTb5LYL8Ec2%2Fmrqn0hP3Y3HaejMghYevF%2FJtnobnpFp%2FNkZhpwMY2uvFyETuy4t8vGK9omQ5f9i7h%2BS4yNYwAC3CMoG2oOJ%2FUL8xCrv1UOeWujQQxOMpTIrxtGGC1wXs1zs%2BQTbVdflSr%2BkbfsumbkXA%2BPw84Ufy3rXYx2hNzG6nLCU9fQfKoiyANAwiI3GxAY6pgExgcF4YKFBz%2BXnK8oWAbis9%2Bt0RgVlbzg2Ht9%2Fde8P1W9kSoIEqBd%2F2XZl8LjII%2FLHIR0U%2FgTGfjZlH4WPIVB2WYcgZhO0VsKpJx7srbLURzW3QTXHXupFYh2t7XpyZjhTqQibmqkt5Pr21CJv6KVQPHZyTZZ1s4Eyav23wCWAcYlSiX2jLaXyMl8ezq7GDeJUHvyz%2FCKsK3sB7WacHLqNj685199t&X-Amz-Signature=037f0babd431da0b1246f8209a4f57771a50fffd65e40c27643a6082768844d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BCJNKK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAnNmrD9bsgWg5Qa71d0YD1gYvNtzZXbdVRkONyGOGMcAiARvTE6bVFcBhSiCFJPdegg4yi%2BoM2HkXH0pn08B8s1Iyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrBJDOPRUKL4t9M88KtwDhonWwn6Ql4hRdeyelf1aBnqEsOUMNnQx%2FNzIPC8Xxd7g4gkVuKYJ57CE%2B%2BUBMIr1WDya3Tttw7RkBmHqRLdYS8aWoafzSutV2pWVUIjm%2FP9PRi4XFxx9oDZj5L6Pq8jvYFWJQ3jCXV%2F%2FUpKnn0mvisus5JiM%2FFtshClvkai1JuGKwBX67fkGOc0nyPzFuo%2BOJYUd0T4WAyYFFYAXFN3IfOjmefh49Y0FoNqar40HwtCd4ADN5ZTeUxfFq27DBSGAAr4tbSGAXEi%2B%2Fu70xq5py8IC4zMchpc%2BRMm4HYXk0pQ84DYnl87EC7JPC3FiKWLXz6iP05WYP1onCYMm4un9DAQoHMW%2BPck4xp7cYMgBil2%2B4kWUJ42qWKYWmlikrJ7KaHMYWSoE95nqp1F8CJ3SLHqNQ6FiliSCd0TXsJ9bmxmpk8rIbiqRoAAYzLA9igdW7QTb5LYL8Ec2%2Fmrqn0hP3Y3HaejMghYevF%2FJtnobnpFp%2FNkZhpwMY2uvFyETuy4t8vGK9omQ5f9i7h%2BS4yNYwAC3CMoG2oOJ%2FUL8xCrv1UOeWujQQxOMpTIrxtGGC1wXs1zs%2BQTbVdflSr%2BkbfsumbkXA%2BPw84Ufy3rXYx2hNzG6nLCU9fQfKoiyANAwiI3GxAY6pgExgcF4YKFBz%2BXnK8oWAbis9%2Bt0RgVlbzg2Ht9%2Fde8P1W9kSoIEqBd%2F2XZl8LjII%2FLHIR0U%2FgTGfjZlH4WPIVB2WYcgZhO0VsKpJx7srbLURzW3QTXHXupFYh2t7XpyZjhTqQibmqkt5Pr21CJv6KVQPHZyTZZ1s4Eyav23wCWAcYlSiX2jLaXyMl8ezq7GDeJUHvyz%2FCKsK3sB7WacHLqNj685199t&X-Amz-Signature=d75bb7f8cc01c5087c8cd9a07345ff12e0a1ed4e447f5859f31f6e633a4f732b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BCJNKK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAnNmrD9bsgWg5Qa71d0YD1gYvNtzZXbdVRkONyGOGMcAiARvTE6bVFcBhSiCFJPdegg4yi%2BoM2HkXH0pn08B8s1Iyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrBJDOPRUKL4t9M88KtwDhonWwn6Ql4hRdeyelf1aBnqEsOUMNnQx%2FNzIPC8Xxd7g4gkVuKYJ57CE%2B%2BUBMIr1WDya3Tttw7RkBmHqRLdYS8aWoafzSutV2pWVUIjm%2FP9PRi4XFxx9oDZj5L6Pq8jvYFWJQ3jCXV%2F%2FUpKnn0mvisus5JiM%2FFtshClvkai1JuGKwBX67fkGOc0nyPzFuo%2BOJYUd0T4WAyYFFYAXFN3IfOjmefh49Y0FoNqar40HwtCd4ADN5ZTeUxfFq27DBSGAAr4tbSGAXEi%2B%2Fu70xq5py8IC4zMchpc%2BRMm4HYXk0pQ84DYnl87EC7JPC3FiKWLXz6iP05WYP1onCYMm4un9DAQoHMW%2BPck4xp7cYMgBil2%2B4kWUJ42qWKYWmlikrJ7KaHMYWSoE95nqp1F8CJ3SLHqNQ6FiliSCd0TXsJ9bmxmpk8rIbiqRoAAYzLA9igdW7QTb5LYL8Ec2%2Fmrqn0hP3Y3HaejMghYevF%2FJtnobnpFp%2FNkZhpwMY2uvFyETuy4t8vGK9omQ5f9i7h%2BS4yNYwAC3CMoG2oOJ%2FUL8xCrv1UOeWujQQxOMpTIrxtGGC1wXs1zs%2BQTbVdflSr%2BkbfsumbkXA%2BPw84Ufy3rXYx2hNzG6nLCU9fQfKoiyANAwiI3GxAY6pgExgcF4YKFBz%2BXnK8oWAbis9%2Bt0RgVlbzg2Ht9%2Fde8P1W9kSoIEqBd%2F2XZl8LjII%2FLHIR0U%2FgTGfjZlH4WPIVB2WYcgZhO0VsKpJx7srbLURzW3QTXHXupFYh2t7XpyZjhTqQibmqkt5Pr21CJv6KVQPHZyTZZ1s4Eyav23wCWAcYlSiX2jLaXyMl8ezq7GDeJUHvyz%2FCKsK3sB7WacHLqNj685199t&X-Amz-Signature=890fd551ab67d62c19c7bb68b1f37e9ca393fe6800791261a5aeab55fe14a820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BCJNKK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAnNmrD9bsgWg5Qa71d0YD1gYvNtzZXbdVRkONyGOGMcAiARvTE6bVFcBhSiCFJPdegg4yi%2BoM2HkXH0pn08B8s1Iyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrBJDOPRUKL4t9M88KtwDhonWwn6Ql4hRdeyelf1aBnqEsOUMNnQx%2FNzIPC8Xxd7g4gkVuKYJ57CE%2B%2BUBMIr1WDya3Tttw7RkBmHqRLdYS8aWoafzSutV2pWVUIjm%2FP9PRi4XFxx9oDZj5L6Pq8jvYFWJQ3jCXV%2F%2FUpKnn0mvisus5JiM%2FFtshClvkai1JuGKwBX67fkGOc0nyPzFuo%2BOJYUd0T4WAyYFFYAXFN3IfOjmefh49Y0FoNqar40HwtCd4ADN5ZTeUxfFq27DBSGAAr4tbSGAXEi%2B%2Fu70xq5py8IC4zMchpc%2BRMm4HYXk0pQ84DYnl87EC7JPC3FiKWLXz6iP05WYP1onCYMm4un9DAQoHMW%2BPck4xp7cYMgBil2%2B4kWUJ42qWKYWmlikrJ7KaHMYWSoE95nqp1F8CJ3SLHqNQ6FiliSCd0TXsJ9bmxmpk8rIbiqRoAAYzLA9igdW7QTb5LYL8Ec2%2Fmrqn0hP3Y3HaejMghYevF%2FJtnobnpFp%2FNkZhpwMY2uvFyETuy4t8vGK9omQ5f9i7h%2BS4yNYwAC3CMoG2oOJ%2FUL8xCrv1UOeWujQQxOMpTIrxtGGC1wXs1zs%2BQTbVdflSr%2BkbfsumbkXA%2BPw84Ufy3rXYx2hNzG6nLCU9fQfKoiyANAwiI3GxAY6pgExgcF4YKFBz%2BXnK8oWAbis9%2Bt0RgVlbzg2Ht9%2Fde8P1W9kSoIEqBd%2F2XZl8LjII%2FLHIR0U%2FgTGfjZlH4WPIVB2WYcgZhO0VsKpJx7srbLURzW3QTXHXupFYh2t7XpyZjhTqQibmqkt5Pr21CJv6KVQPHZyTZZ1s4Eyav23wCWAcYlSiX2jLaXyMl8ezq7GDeJUHvyz%2FCKsK3sB7WacHLqNj685199t&X-Amz-Signature=752506904c3fb22154949622019c6c6ee18228bbfc54e063deaa6480a0496c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BCJNKK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAnNmrD9bsgWg5Qa71d0YD1gYvNtzZXbdVRkONyGOGMcAiARvTE6bVFcBhSiCFJPdegg4yi%2BoM2HkXH0pn08B8s1Iyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrBJDOPRUKL4t9M88KtwDhonWwn6Ql4hRdeyelf1aBnqEsOUMNnQx%2FNzIPC8Xxd7g4gkVuKYJ57CE%2B%2BUBMIr1WDya3Tttw7RkBmHqRLdYS8aWoafzSutV2pWVUIjm%2FP9PRi4XFxx9oDZj5L6Pq8jvYFWJQ3jCXV%2F%2FUpKnn0mvisus5JiM%2FFtshClvkai1JuGKwBX67fkGOc0nyPzFuo%2BOJYUd0T4WAyYFFYAXFN3IfOjmefh49Y0FoNqar40HwtCd4ADN5ZTeUxfFq27DBSGAAr4tbSGAXEi%2B%2Fu70xq5py8IC4zMchpc%2BRMm4HYXk0pQ84DYnl87EC7JPC3FiKWLXz6iP05WYP1onCYMm4un9DAQoHMW%2BPck4xp7cYMgBil2%2B4kWUJ42qWKYWmlikrJ7KaHMYWSoE95nqp1F8CJ3SLHqNQ6FiliSCd0TXsJ9bmxmpk8rIbiqRoAAYzLA9igdW7QTb5LYL8Ec2%2Fmrqn0hP3Y3HaejMghYevF%2FJtnobnpFp%2FNkZhpwMY2uvFyETuy4t8vGK9omQ5f9i7h%2BS4yNYwAC3CMoG2oOJ%2FUL8xCrv1UOeWujQQxOMpTIrxtGGC1wXs1zs%2BQTbVdflSr%2BkbfsumbkXA%2BPw84Ufy3rXYx2hNzG6nLCU9fQfKoiyANAwiI3GxAY6pgExgcF4YKFBz%2BXnK8oWAbis9%2Bt0RgVlbzg2Ht9%2Fde8P1W9kSoIEqBd%2F2XZl8LjII%2FLHIR0U%2FgTGfjZlH4WPIVB2WYcgZhO0VsKpJx7srbLURzW3QTXHXupFYh2t7XpyZjhTqQibmqkt5Pr21CJv6KVQPHZyTZZ1s4Eyav23wCWAcYlSiX2jLaXyMl8ezq7GDeJUHvyz%2FCKsK3sB7WacHLqNj685199t&X-Amz-Signature=022248c09600cce253dc1696d0f48245991cec714d43e91323c2b0d23004a783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BCJNKK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAnNmrD9bsgWg5Qa71d0YD1gYvNtzZXbdVRkONyGOGMcAiARvTE6bVFcBhSiCFJPdegg4yi%2BoM2HkXH0pn08B8s1Iyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrBJDOPRUKL4t9M88KtwDhonWwn6Ql4hRdeyelf1aBnqEsOUMNnQx%2FNzIPC8Xxd7g4gkVuKYJ57CE%2B%2BUBMIr1WDya3Tttw7RkBmHqRLdYS8aWoafzSutV2pWVUIjm%2FP9PRi4XFxx9oDZj5L6Pq8jvYFWJQ3jCXV%2F%2FUpKnn0mvisus5JiM%2FFtshClvkai1JuGKwBX67fkGOc0nyPzFuo%2BOJYUd0T4WAyYFFYAXFN3IfOjmefh49Y0FoNqar40HwtCd4ADN5ZTeUxfFq27DBSGAAr4tbSGAXEi%2B%2Fu70xq5py8IC4zMchpc%2BRMm4HYXk0pQ84DYnl87EC7JPC3FiKWLXz6iP05WYP1onCYMm4un9DAQoHMW%2BPck4xp7cYMgBil2%2B4kWUJ42qWKYWmlikrJ7KaHMYWSoE95nqp1F8CJ3SLHqNQ6FiliSCd0TXsJ9bmxmpk8rIbiqRoAAYzLA9igdW7QTb5LYL8Ec2%2Fmrqn0hP3Y3HaejMghYevF%2FJtnobnpFp%2FNkZhpwMY2uvFyETuy4t8vGK9omQ5f9i7h%2BS4yNYwAC3CMoG2oOJ%2FUL8xCrv1UOeWujQQxOMpTIrxtGGC1wXs1zs%2BQTbVdflSr%2BkbfsumbkXA%2BPw84Ufy3rXYx2hNzG6nLCU9fQfKoiyANAwiI3GxAY6pgExgcF4YKFBz%2BXnK8oWAbis9%2Bt0RgVlbzg2Ht9%2Fde8P1W9kSoIEqBd%2F2XZl8LjII%2FLHIR0U%2FgTGfjZlH4WPIVB2WYcgZhO0VsKpJx7srbLURzW3QTXHXupFYh2t7XpyZjhTqQibmqkt5Pr21CJv6KVQPHZyTZZ1s4Eyav23wCWAcYlSiX2jLaXyMl8ezq7GDeJUHvyz%2FCKsK3sB7WacHLqNj685199t&X-Amz-Signature=4317625477474c7d31318ae5c77ca162d91689fb27ca031476673aeb0264201d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

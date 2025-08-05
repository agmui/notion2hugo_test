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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYHK4KTL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIErjGPLFfjZ0lFDU7dSdckHQOd9xQjgOdgl3bqyxEFjjAiEAvtla48SkgfX%2BlFOKPCzBnXyXAX660c7Kuj0Jkb09spAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLX3%2Bdlpikc8Ryuu0yrcAxpCNoljZrOf8%2FD0DfjRRoNYbe1BmjVxbTiXmOZRtdiCzl2mE%2F3RdV2Y7MwWq7Jwrfkop4xPwPCGBXNTPruVVK6FjAyzEL9xLpb668ZSe5qC8wtGq4iz9gfjlzcvDYrw1YSyZYR4V7ZWT2t4KIECtSAMZe6Y5XYaj7sf20p706%2B1cF5mrf%2BTBxdxuuRdyy2WuC0vT%2B%2B2HesxHMdTZlt1UhycF%2F7jDt0RXkm%2FuLaloTOGaMtt9L2FRUFU7S9KHaqVS8fyr88EGdeBL%2Fq8MBbfXx6Nl%2F82AyyGKD75MbQ9W8gHPCk2nbdqQNagTtooLdWnPpPzCCE8cXS4%2F5ReDwYyhsxjOEZ33jdefCgpjVAjaiWIQ5xkfFkPjqi1nxc%2F9Tm49TVInoCyP5YwLsevuIrVSH%2Fq%2BXdevnlEe%2FeanqyIkNfT8Ty6FRqvkwqpWOAsMmsI8oIGzx%2F2yt3niSlQXjQ7bKR1MuaCMQN5mvE0bj52yzL91cRjANuZp2YTUC4epAg3zD4aXsK%2B2zr%2BT2%2BBvYGHGo7X76bnTFcZhNfDbnlL2D79Zlvmfh0d5bBk3IJlDTuhlImXgTCqolaucWFSR4vVD%2B6DiUp2rX8o5RzruXcXwMqs3RaxN0s%2BCb9BfNXiMLOsx8QGOqUB6awJTpdouyyz%2BLvz1nexeIJ5da3f8%2BBg%2FLdxeo7VHRoO7Xy1tirAJU%2Bn5EuGKeWkQF2ITox81wO2FYjnFAqPToENUXdOfHJWpLKTMStjQPn%2FNxwfWE7G%2FoZbubFUGjQym5dOb%2BCjpEXsh%2FPpUz%2BLiKzDidn8ECsmDxq38vbq1IZfq1JAPYiyvnd8s4f9fZjCMESww90bh3ZPHK6IZHtcagAuhFnv&X-Amz-Signature=9a6df011733af2a00aaaff5e28aecdfcb9769b69750a2f6bb69e3b85d8e2c810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=2cd0cfdcc6b6a8f7bbc53a3fbb732dec00d2d8577ca86a2ac6f03263ac98f606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=eb609887eefba982c0822f96b0b921fbbcf730e47c0f6c714dd3afe7631968a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=1bedb22b9ed3373677f16c1b7b439cfb38c5a7aa9c860f19d05605edbd3e8b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=01d630426071dbdecad9ae9d9340b045b96cb2961ccaffe5e80140eb71dcd95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=6e87264f5748e578c176387d375dd59afac1817c28cbe280d4bb6824e5d89308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=f0eb754b6ec054ef7e76bacf12498967f05718ce9d89245ea2c2903cfc9e8a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=3b8f02c8c3bcdf04741c1944810e0bcc06dfae8f7cd6781b4defaf958e877286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=c01dbbba7fe024fa75ab2608067cb9fbf12f79b1471b802fd89f71ba1230db18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=cfce50bb0456f5b172a14620d20f225fd467db497602ad9f65ed44467afd28d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=e7ce13a63cecb5fc5bf5443a5f2a80c5fbb28a783faccc37383c34c4e0417d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

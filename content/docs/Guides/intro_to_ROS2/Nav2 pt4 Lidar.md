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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2J4ZDP%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXA5xPiMqY2Sf%2FTkQ1SoUulZ8xZKbpWuuoAaYfm%2F3ZSAiEA3z5aWlSLMmGhGJBFkpdrK25%2FeJ892DZxXyFYf6bXWAIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOpVqobJx7wMcBb%2BrCrcA6q4NUMxgRLG9hRqOWRwEEiR9%2Fn2XZFier26BcDSfk5PR%2FYn%2BJKPeFnLjbpAjNCg2pG4YTQK740KedzO2TeWMHDVOOjOyBRZbb%2BUamz%2BanDWhXm84mb%2BQxE7tVMqk5bvUDHa8LHQVqZuSjTu%2FH4RZ4v6LojFA6gYR8%2BEm1uHbbmJ1fgAN95JXz95JKq14a0W%2Bz2XsUBTJZ3Aof3DTg0DonKMAyf029FhLGlRqFJFL8ELNvekotzClWpK5Iqj0m2c9%2B35o7mY%2BJZ9epLm8h4BZo97rG82eBwYvLV007N7M83cWZm5YvWjJhZYqyHe36l2Bzvh3vvd9QwL%2B2qzDtldkQhXKLo8NaLRGB1MdP5%2BE3Q5%2FikAT783XXUoDdaDD%2FnQNx3V0cD1gzc86%2BsVRE7fMTqX8VDscJLYCX1h3SCxyRyLHJH5ahsBaKO%2FeYEm94FkM5TgRsTWCUMJFD6aqGH8h8cA3RO%2FmH3YiCBC09bZssb9jDwpq3mz7uXnnBnGKJG7E8mjyXs%2FKrh3nUPnF2cXpr%2FfjOvUdyMTXBMwaDLj2k2cHIFUQYSP5UqtXuakGWeT5e4h2Vry%2FmBE0WAVtQc9Oaq8uRPJ9w0iSS%2Ffvep1x%2FYMUCBLiCnyoE0Klj3sMMGp5tIGOqUBdVsUrD1JlAd%2BsO0O4GysDg99kzQ3QvobuT21o2OJRSCvJO7YeBB9zRDyO0M0Lif9ZJbU9uBLH5i0YxFdrFos6%2FAy63f%2BjTGUroATlmC6MBS0%2BsrBkc8YSRiJAuVqyLsta0P0Ente5cIrBTc75nODopASJJuA1Oyv6EZhacBSjJEH7CRk2%2BmoF%2Fct%2Ba2nLDO3FewHrnX2OFYho%2FPcdHGvaTqtXqDK&X-Amz-Signature=7d1c6ddf3179155f6bd2dd86ba7b547d647081d247134aa69425b6c9faa49917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3KJ5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyw1t1hA7SV5xoOFlVXvrY0wREcIkCDp6gcrzecDOW8gIgMskHDuP2XxZ%2BbXn8PAclDVkortLX6mN392ky6LoCwg0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO7RQ46HRkM%2BFieDQSrcA%2FfrkgEQm0BRL%2FK6zNaAWe9mZGn3E3swEMYRVuMjLEU4TnfHTiQ6T%2BNE%2F2L7JhdLeT5pkXE8DkGUwFxi93OeQPRW%2FX9GnqozheI4gqMSyuqctSgm402sha0FFICJV4EFwdIg%2FJD8vrnwf6XryupIk%2FM7B49nmyYDO59x3%2F6SqfPk6ieaTm1X6gVi9isMWlld2iQ5CnpLkkcUncy3J5FpxHpwqARXxJNZkf7UdsH5X%2FzGBwTe3inPx%2FuXB1Y1hhmuOisjY5dguu7dZ3x6GrdjohJ0smvO5YMocAfIvVY588JAgRFYpYTUVK5j1lsaTDUMFekUICXdHnbTyCnXdVFYeFIobVXwJFV1%2FiMJ2O2GSjVggjpnXbh1v%2FV5Pyu79nXPPEeEQxOnF4DUzLioTMfhVgHD2Ak11x3wmW8NTp6guIqTnYPzgnBMmN3yji9Cb4amZxFHhUeOcEoMBwnf7EtCFzk9%2FU4WiDo93Bcuyquxv%2FM4SHm1gjEQ1hnnZYZOP%2BeZUJJ%2FLszfiNkCavOMLhQysHLAp3OQdBntfBkBNZRf49OWyHVO3rqx003vQcRT2Alvkfo9qXkwyU5qHZaKM9rERxhfJYHbIewZETPY2x1crwyBdJzyNSRz7LCrjIBrMPao5tIGOqUB3h%2B04UEdukAfaL3wiZ2F0ADlLCVf4i2KLWvNTf0YOmOIUQPAZBMOyn8mvLZYMQsI%2FqcMS33Resm0ky1hIY8%2FnKr1ha06PXSt17ooL3%2FrAVKMcMiERDPy%2BZPfSgYzj%2FzP1HBxQ7WvrrLFLBb2rc79xogK1QjIg8LkA3mzK3%2B0pUk%2BT9gl7Oej7KFOOvbygKF4Fk00oJX0%2F8ypXGV3EO%2BiK6XlngEP&X-Amz-Signature=b2dcb2c695cd6982a677a17615652e5df66f2c23d71e746bfb6ae5c8e0e6ccc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3KJ5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyw1t1hA7SV5xoOFlVXvrY0wREcIkCDp6gcrzecDOW8gIgMskHDuP2XxZ%2BbXn8PAclDVkortLX6mN392ky6LoCwg0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO7RQ46HRkM%2BFieDQSrcA%2FfrkgEQm0BRL%2FK6zNaAWe9mZGn3E3swEMYRVuMjLEU4TnfHTiQ6T%2BNE%2F2L7JhdLeT5pkXE8DkGUwFxi93OeQPRW%2FX9GnqozheI4gqMSyuqctSgm402sha0FFICJV4EFwdIg%2FJD8vrnwf6XryupIk%2FM7B49nmyYDO59x3%2F6SqfPk6ieaTm1X6gVi9isMWlld2iQ5CnpLkkcUncy3J5FpxHpwqARXxJNZkf7UdsH5X%2FzGBwTe3inPx%2FuXB1Y1hhmuOisjY5dguu7dZ3x6GrdjohJ0smvO5YMocAfIvVY588JAgRFYpYTUVK5j1lsaTDUMFekUICXdHnbTyCnXdVFYeFIobVXwJFV1%2FiMJ2O2GSjVggjpnXbh1v%2FV5Pyu79nXPPEeEQxOnF4DUzLioTMfhVgHD2Ak11x3wmW8NTp6guIqTnYPzgnBMmN3yji9Cb4amZxFHhUeOcEoMBwnf7EtCFzk9%2FU4WiDo93Bcuyquxv%2FM4SHm1gjEQ1hnnZYZOP%2BeZUJJ%2FLszfiNkCavOMLhQysHLAp3OQdBntfBkBNZRf49OWyHVO3rqx003vQcRT2Alvkfo9qXkwyU5qHZaKM9rERxhfJYHbIewZETPY2x1crwyBdJzyNSRz7LCrjIBrMPao5tIGOqUB3h%2B04UEdukAfaL3wiZ2F0ADlLCVf4i2KLWvNTf0YOmOIUQPAZBMOyn8mvLZYMQsI%2FqcMS33Resm0ky1hIY8%2FnKr1ha06PXSt17ooL3%2FrAVKMcMiERDPy%2BZPfSgYzj%2FzP1HBxQ7WvrrLFLBb2rc79xogK1QjIg8LkA3mzK3%2B0pUk%2BT9gl7Oej7KFOOvbygKF4Fk00oJX0%2F8ypXGV3EO%2BiK6XlngEP&X-Amz-Signature=c47a950584341125cd35dbb5bffd4e8fae77415f668a41eabf993c152a57394c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3KJ5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyw1t1hA7SV5xoOFlVXvrY0wREcIkCDp6gcrzecDOW8gIgMskHDuP2XxZ%2BbXn8PAclDVkortLX6mN392ky6LoCwg0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO7RQ46HRkM%2BFieDQSrcA%2FfrkgEQm0BRL%2FK6zNaAWe9mZGn3E3swEMYRVuMjLEU4TnfHTiQ6T%2BNE%2F2L7JhdLeT5pkXE8DkGUwFxi93OeQPRW%2FX9GnqozheI4gqMSyuqctSgm402sha0FFICJV4EFwdIg%2FJD8vrnwf6XryupIk%2FM7B49nmyYDO59x3%2F6SqfPk6ieaTm1X6gVi9isMWlld2iQ5CnpLkkcUncy3J5FpxHpwqARXxJNZkf7UdsH5X%2FzGBwTe3inPx%2FuXB1Y1hhmuOisjY5dguu7dZ3x6GrdjohJ0smvO5YMocAfIvVY588JAgRFYpYTUVK5j1lsaTDUMFekUICXdHnbTyCnXdVFYeFIobVXwJFV1%2FiMJ2O2GSjVggjpnXbh1v%2FV5Pyu79nXPPEeEQxOnF4DUzLioTMfhVgHD2Ak11x3wmW8NTp6guIqTnYPzgnBMmN3yji9Cb4amZxFHhUeOcEoMBwnf7EtCFzk9%2FU4WiDo93Bcuyquxv%2FM4SHm1gjEQ1hnnZYZOP%2BeZUJJ%2FLszfiNkCavOMLhQysHLAp3OQdBntfBkBNZRf49OWyHVO3rqx003vQcRT2Alvkfo9qXkwyU5qHZaKM9rERxhfJYHbIewZETPY2x1crwyBdJzyNSRz7LCrjIBrMPao5tIGOqUB3h%2B04UEdukAfaL3wiZ2F0ADlLCVf4i2KLWvNTf0YOmOIUQPAZBMOyn8mvLZYMQsI%2FqcMS33Resm0ky1hIY8%2FnKr1ha06PXSt17ooL3%2FrAVKMcMiERDPy%2BZPfSgYzj%2FzP1HBxQ7WvrrLFLBb2rc79xogK1QjIg8LkA3mzK3%2B0pUk%2BT9gl7Oej7KFOOvbygKF4Fk00oJX0%2F8ypXGV3EO%2BiK6XlngEP&X-Amz-Signature=6700f6dbf10bae3bdf8d44e6dea1b49a1ecdd92df98eb9b614c9e6cd7a2defed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3KJ5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyw1t1hA7SV5xoOFlVXvrY0wREcIkCDp6gcrzecDOW8gIgMskHDuP2XxZ%2BbXn8PAclDVkortLX6mN392ky6LoCwg0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO7RQ46HRkM%2BFieDQSrcA%2FfrkgEQm0BRL%2FK6zNaAWe9mZGn3E3swEMYRVuMjLEU4TnfHTiQ6T%2BNE%2F2L7JhdLeT5pkXE8DkGUwFxi93OeQPRW%2FX9GnqozheI4gqMSyuqctSgm402sha0FFICJV4EFwdIg%2FJD8vrnwf6XryupIk%2FM7B49nmyYDO59x3%2F6SqfPk6ieaTm1X6gVi9isMWlld2iQ5CnpLkkcUncy3J5FpxHpwqARXxJNZkf7UdsH5X%2FzGBwTe3inPx%2FuXB1Y1hhmuOisjY5dguu7dZ3x6GrdjohJ0smvO5YMocAfIvVY588JAgRFYpYTUVK5j1lsaTDUMFekUICXdHnbTyCnXdVFYeFIobVXwJFV1%2FiMJ2O2GSjVggjpnXbh1v%2FV5Pyu79nXPPEeEQxOnF4DUzLioTMfhVgHD2Ak11x3wmW8NTp6guIqTnYPzgnBMmN3yji9Cb4amZxFHhUeOcEoMBwnf7EtCFzk9%2FU4WiDo93Bcuyquxv%2FM4SHm1gjEQ1hnnZYZOP%2BeZUJJ%2FLszfiNkCavOMLhQysHLAp3OQdBntfBkBNZRf49OWyHVO3rqx003vQcRT2Alvkfo9qXkwyU5qHZaKM9rERxhfJYHbIewZETPY2x1crwyBdJzyNSRz7LCrjIBrMPao5tIGOqUB3h%2B04UEdukAfaL3wiZ2F0ADlLCVf4i2KLWvNTf0YOmOIUQPAZBMOyn8mvLZYMQsI%2FqcMS33Resm0ky1hIY8%2FnKr1ha06PXSt17ooL3%2FrAVKMcMiERDPy%2BZPfSgYzj%2FzP1HBxQ7WvrrLFLBb2rc79xogK1QjIg8LkA3mzK3%2B0pUk%2BT9gl7Oej7KFOOvbygKF4Fk00oJX0%2F8ypXGV3EO%2BiK6XlngEP&X-Amz-Signature=1adfddac883f4e17ea002aba98106de6fdbaa0eef48548c897fa44af7d67a433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3KJ5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyw1t1hA7SV5xoOFlVXvrY0wREcIkCDp6gcrzecDOW8gIgMskHDuP2XxZ%2BbXn8PAclDVkortLX6mN392ky6LoCwg0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO7RQ46HRkM%2BFieDQSrcA%2FfrkgEQm0BRL%2FK6zNaAWe9mZGn3E3swEMYRVuMjLEU4TnfHTiQ6T%2BNE%2F2L7JhdLeT5pkXE8DkGUwFxi93OeQPRW%2FX9GnqozheI4gqMSyuqctSgm402sha0FFICJV4EFwdIg%2FJD8vrnwf6XryupIk%2FM7B49nmyYDO59x3%2F6SqfPk6ieaTm1X6gVi9isMWlld2iQ5CnpLkkcUncy3J5FpxHpwqARXxJNZkf7UdsH5X%2FzGBwTe3inPx%2FuXB1Y1hhmuOisjY5dguu7dZ3x6GrdjohJ0smvO5YMocAfIvVY588JAgRFYpYTUVK5j1lsaTDUMFekUICXdHnbTyCnXdVFYeFIobVXwJFV1%2FiMJ2O2GSjVggjpnXbh1v%2FV5Pyu79nXPPEeEQxOnF4DUzLioTMfhVgHD2Ak11x3wmW8NTp6guIqTnYPzgnBMmN3yji9Cb4amZxFHhUeOcEoMBwnf7EtCFzk9%2FU4WiDo93Bcuyquxv%2FM4SHm1gjEQ1hnnZYZOP%2BeZUJJ%2FLszfiNkCavOMLhQysHLAp3OQdBntfBkBNZRf49OWyHVO3rqx003vQcRT2Alvkfo9qXkwyU5qHZaKM9rERxhfJYHbIewZETPY2x1crwyBdJzyNSRz7LCrjIBrMPao5tIGOqUB3h%2B04UEdukAfaL3wiZ2F0ADlLCVf4i2KLWvNTf0YOmOIUQPAZBMOyn8mvLZYMQsI%2FqcMS33Resm0ky1hIY8%2FnKr1ha06PXSt17ooL3%2FrAVKMcMiERDPy%2BZPfSgYzj%2FzP1HBxQ7WvrrLFLBb2rc79xogK1QjIg8LkA3mzK3%2B0pUk%2BT9gl7Oej7KFOOvbygKF4Fk00oJX0%2F8ypXGV3EO%2BiK6XlngEP&X-Amz-Signature=9bde4c496515f8d9ba9422c35af1c9f95b054e3164bf8e31844904a22e27bd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3KJ5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyw1t1hA7SV5xoOFlVXvrY0wREcIkCDp6gcrzecDOW8gIgMskHDuP2XxZ%2BbXn8PAclDVkortLX6mN392ky6LoCwg0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO7RQ46HRkM%2BFieDQSrcA%2FfrkgEQm0BRL%2FK6zNaAWe9mZGn3E3swEMYRVuMjLEU4TnfHTiQ6T%2BNE%2F2L7JhdLeT5pkXE8DkGUwFxi93OeQPRW%2FX9GnqozheI4gqMSyuqctSgm402sha0FFICJV4EFwdIg%2FJD8vrnwf6XryupIk%2FM7B49nmyYDO59x3%2F6SqfPk6ieaTm1X6gVi9isMWlld2iQ5CnpLkkcUncy3J5FpxHpwqARXxJNZkf7UdsH5X%2FzGBwTe3inPx%2FuXB1Y1hhmuOisjY5dguu7dZ3x6GrdjohJ0smvO5YMocAfIvVY588JAgRFYpYTUVK5j1lsaTDUMFekUICXdHnbTyCnXdVFYeFIobVXwJFV1%2FiMJ2O2GSjVggjpnXbh1v%2FV5Pyu79nXPPEeEQxOnF4DUzLioTMfhVgHD2Ak11x3wmW8NTp6guIqTnYPzgnBMmN3yji9Cb4amZxFHhUeOcEoMBwnf7EtCFzk9%2FU4WiDo93Bcuyquxv%2FM4SHm1gjEQ1hnnZYZOP%2BeZUJJ%2FLszfiNkCavOMLhQysHLAp3OQdBntfBkBNZRf49OWyHVO3rqx003vQcRT2Alvkfo9qXkwyU5qHZaKM9rERxhfJYHbIewZETPY2x1crwyBdJzyNSRz7LCrjIBrMPao5tIGOqUB3h%2B04UEdukAfaL3wiZ2F0ADlLCVf4i2KLWvNTf0YOmOIUQPAZBMOyn8mvLZYMQsI%2FqcMS33Resm0ky1hIY8%2FnKr1ha06PXSt17ooL3%2FrAVKMcMiERDPy%2BZPfSgYzj%2FzP1HBxQ7WvrrLFLBb2rc79xogK1QjIg8LkA3mzK3%2B0pUk%2BT9gl7Oej7KFOOvbygKF4Fk00oJX0%2F8ypXGV3EO%2BiK6XlngEP&X-Amz-Signature=45d17cb25affb2d29b15abbaebcfefb53deba1f5a2bfd3e135cbdd84c3ebaeff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3KJ5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyw1t1hA7SV5xoOFlVXvrY0wREcIkCDp6gcrzecDOW8gIgMskHDuP2XxZ%2BbXn8PAclDVkortLX6mN392ky6LoCwg0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO7RQ46HRkM%2BFieDQSrcA%2FfrkgEQm0BRL%2FK6zNaAWe9mZGn3E3swEMYRVuMjLEU4TnfHTiQ6T%2BNE%2F2L7JhdLeT5pkXE8DkGUwFxi93OeQPRW%2FX9GnqozheI4gqMSyuqctSgm402sha0FFICJV4EFwdIg%2FJD8vrnwf6XryupIk%2FM7B49nmyYDO59x3%2F6SqfPk6ieaTm1X6gVi9isMWlld2iQ5CnpLkkcUncy3J5FpxHpwqARXxJNZkf7UdsH5X%2FzGBwTe3inPx%2FuXB1Y1hhmuOisjY5dguu7dZ3x6GrdjohJ0smvO5YMocAfIvVY588JAgRFYpYTUVK5j1lsaTDUMFekUICXdHnbTyCnXdVFYeFIobVXwJFV1%2FiMJ2O2GSjVggjpnXbh1v%2FV5Pyu79nXPPEeEQxOnF4DUzLioTMfhVgHD2Ak11x3wmW8NTp6guIqTnYPzgnBMmN3yji9Cb4amZxFHhUeOcEoMBwnf7EtCFzk9%2FU4WiDo93Bcuyquxv%2FM4SHm1gjEQ1hnnZYZOP%2BeZUJJ%2FLszfiNkCavOMLhQysHLAp3OQdBntfBkBNZRf49OWyHVO3rqx003vQcRT2Alvkfo9qXkwyU5qHZaKM9rERxhfJYHbIewZETPY2x1crwyBdJzyNSRz7LCrjIBrMPao5tIGOqUB3h%2B04UEdukAfaL3wiZ2F0ADlLCVf4i2KLWvNTf0YOmOIUQPAZBMOyn8mvLZYMQsI%2FqcMS33Resm0ky1hIY8%2FnKr1ha06PXSt17ooL3%2FrAVKMcMiERDPy%2BZPfSgYzj%2FzP1HBxQ7WvrrLFLBb2rc79xogK1QjIg8LkA3mzK3%2B0pUk%2BT9gl7Oej7KFOOvbygKF4Fk00oJX0%2F8ypXGV3EO%2BiK6XlngEP&X-Amz-Signature=401d9feabec7ae89cfb2736518ee5a67710dc49a1ddc1324aaf964536d76f4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3KJ5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyw1t1hA7SV5xoOFlVXvrY0wREcIkCDp6gcrzecDOW8gIgMskHDuP2XxZ%2BbXn8PAclDVkortLX6mN392ky6LoCwg0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO7RQ46HRkM%2BFieDQSrcA%2FfrkgEQm0BRL%2FK6zNaAWe9mZGn3E3swEMYRVuMjLEU4TnfHTiQ6T%2BNE%2F2L7JhdLeT5pkXE8DkGUwFxi93OeQPRW%2FX9GnqozheI4gqMSyuqctSgm402sha0FFICJV4EFwdIg%2FJD8vrnwf6XryupIk%2FM7B49nmyYDO59x3%2F6SqfPk6ieaTm1X6gVi9isMWlld2iQ5CnpLkkcUncy3J5FpxHpwqARXxJNZkf7UdsH5X%2FzGBwTe3inPx%2FuXB1Y1hhmuOisjY5dguu7dZ3x6GrdjohJ0smvO5YMocAfIvVY588JAgRFYpYTUVK5j1lsaTDUMFekUICXdHnbTyCnXdVFYeFIobVXwJFV1%2FiMJ2O2GSjVggjpnXbh1v%2FV5Pyu79nXPPEeEQxOnF4DUzLioTMfhVgHD2Ak11x3wmW8NTp6guIqTnYPzgnBMmN3yji9Cb4amZxFHhUeOcEoMBwnf7EtCFzk9%2FU4WiDo93Bcuyquxv%2FM4SHm1gjEQ1hnnZYZOP%2BeZUJJ%2FLszfiNkCavOMLhQysHLAp3OQdBntfBkBNZRf49OWyHVO3rqx003vQcRT2Alvkfo9qXkwyU5qHZaKM9rERxhfJYHbIewZETPY2x1crwyBdJzyNSRz7LCrjIBrMPao5tIGOqUB3h%2B04UEdukAfaL3wiZ2F0ADlLCVf4i2KLWvNTf0YOmOIUQPAZBMOyn8mvLZYMQsI%2FqcMS33Resm0ky1hIY8%2FnKr1ha06PXSt17ooL3%2FrAVKMcMiERDPy%2BZPfSgYzj%2FzP1HBxQ7WvrrLFLBb2rc79xogK1QjIg8LkA3mzK3%2B0pUk%2BT9gl7Oej7KFOOvbygKF4Fk00oJX0%2F8ypXGV3EO%2BiK6XlngEP&X-Amz-Signature=1e4f3329736aacab5bd2f241dff5f4b9b2a9a3843ec89c453fd51259cbf16a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3KJ5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyw1t1hA7SV5xoOFlVXvrY0wREcIkCDp6gcrzecDOW8gIgMskHDuP2XxZ%2BbXn8PAclDVkortLX6mN392ky6LoCwg0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO7RQ46HRkM%2BFieDQSrcA%2FfrkgEQm0BRL%2FK6zNaAWe9mZGn3E3swEMYRVuMjLEU4TnfHTiQ6T%2BNE%2F2L7JhdLeT5pkXE8DkGUwFxi93OeQPRW%2FX9GnqozheI4gqMSyuqctSgm402sha0FFICJV4EFwdIg%2FJD8vrnwf6XryupIk%2FM7B49nmyYDO59x3%2F6SqfPk6ieaTm1X6gVi9isMWlld2iQ5CnpLkkcUncy3J5FpxHpwqARXxJNZkf7UdsH5X%2FzGBwTe3inPx%2FuXB1Y1hhmuOisjY5dguu7dZ3x6GrdjohJ0smvO5YMocAfIvVY588JAgRFYpYTUVK5j1lsaTDUMFekUICXdHnbTyCnXdVFYeFIobVXwJFV1%2FiMJ2O2GSjVggjpnXbh1v%2FV5Pyu79nXPPEeEQxOnF4DUzLioTMfhVgHD2Ak11x3wmW8NTp6guIqTnYPzgnBMmN3yji9Cb4amZxFHhUeOcEoMBwnf7EtCFzk9%2FU4WiDo93Bcuyquxv%2FM4SHm1gjEQ1hnnZYZOP%2BeZUJJ%2FLszfiNkCavOMLhQysHLAp3OQdBntfBkBNZRf49OWyHVO3rqx003vQcRT2Alvkfo9qXkwyU5qHZaKM9rERxhfJYHbIewZETPY2x1crwyBdJzyNSRz7LCrjIBrMPao5tIGOqUB3h%2B04UEdukAfaL3wiZ2F0ADlLCVf4i2KLWvNTf0YOmOIUQPAZBMOyn8mvLZYMQsI%2FqcMS33Resm0ky1hIY8%2FnKr1ha06PXSt17ooL3%2FrAVKMcMiERDPy%2BZPfSgYzj%2FzP1HBxQ7WvrrLFLBb2rc79xogK1QjIg8LkA3mzK3%2B0pUk%2BT9gl7Oej7KFOOvbygKF4Fk00oJX0%2F8ypXGV3EO%2BiK6XlngEP&X-Amz-Signature=fd357b48352c8525e0a08c3cfa8e997c33eeec39d7d919de8a551ccc54f0a37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EB3KJ5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyw1t1hA7SV5xoOFlVXvrY0wREcIkCDp6gcrzecDOW8gIgMskHDuP2XxZ%2BbXn8PAclDVkortLX6mN392ky6LoCwg0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO7RQ46HRkM%2BFieDQSrcA%2FfrkgEQm0BRL%2FK6zNaAWe9mZGn3E3swEMYRVuMjLEU4TnfHTiQ6T%2BNE%2F2L7JhdLeT5pkXE8DkGUwFxi93OeQPRW%2FX9GnqozheI4gqMSyuqctSgm402sha0FFICJV4EFwdIg%2FJD8vrnwf6XryupIk%2FM7B49nmyYDO59x3%2F6SqfPk6ieaTm1X6gVi9isMWlld2iQ5CnpLkkcUncy3J5FpxHpwqARXxJNZkf7UdsH5X%2FzGBwTe3inPx%2FuXB1Y1hhmuOisjY5dguu7dZ3x6GrdjohJ0smvO5YMocAfIvVY588JAgRFYpYTUVK5j1lsaTDUMFekUICXdHnbTyCnXdVFYeFIobVXwJFV1%2FiMJ2O2GSjVggjpnXbh1v%2FV5Pyu79nXPPEeEQxOnF4DUzLioTMfhVgHD2Ak11x3wmW8NTp6guIqTnYPzgnBMmN3yji9Cb4amZxFHhUeOcEoMBwnf7EtCFzk9%2FU4WiDo93Bcuyquxv%2FM4SHm1gjEQ1hnnZYZOP%2BeZUJJ%2FLszfiNkCavOMLhQysHLAp3OQdBntfBkBNZRf49OWyHVO3rqx003vQcRT2Alvkfo9qXkwyU5qHZaKM9rERxhfJYHbIewZETPY2x1crwyBdJzyNSRz7LCrjIBrMPao5tIGOqUB3h%2B04UEdukAfaL3wiZ2F0ADlLCVf4i2KLWvNTf0YOmOIUQPAZBMOyn8mvLZYMQsI%2FqcMS33Resm0ky1hIY8%2FnKr1ha06PXSt17ooL3%2FrAVKMcMiERDPy%2BZPfSgYzj%2FzP1HBxQ7WvrrLFLBb2rc79xogK1QjIg8LkA3mzK3%2B0pUk%2BT9gl7Oej7KFOOvbygKF4Fk00oJX0%2F8ypXGV3EO%2BiK6XlngEP&X-Amz-Signature=1adfddac883f4e17ea002aba98106de6fdbaa0eef48548c897fa44af7d67a433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

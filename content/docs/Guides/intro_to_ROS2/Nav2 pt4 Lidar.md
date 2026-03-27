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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633F6NKE4%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBIwWfqdFL6XVFbgpGcjYDv22c0XAGZwqo7rMxhTTgumAiEAuoK%2FaBFj5abd7%2BaK3OykYgPcWaaAacUEHEhV%2F%2BjO8hUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp98Ic0%2BIdz4cIyFircAxNV1%2BN2gai86DO3DvFOeEM5NUIEH3osaKZvtsn8asfATk2b9iwLoJ%2BJfZBnYISyqzJT3tTmlhjQl3j4n5p%2FDBV6i%2FafukRkvXNvtgmp0%2FlVYIWORq2CnQErQNNt%2BbGjfPk4mdrgYdyJTXqn5XaqV17qefLVFryG1CjDZHpO%2Fgnzt%2FVBir1zuWpIjJhpQYiQFbC64Gnzle1sy64LRyUZpu5o%2FSyI9HRONkMJuP2%2FIVwTxJN%2BLJF5nEyru0ACNceDSG6%2BalddmIPmALkZrpF2sTHuBcepJdxHSyyroyQP9Bg0XaOjfmwmaYmXp27mjv8yVsBmUr3KgTZT8DydXX3xJHhRU3WxizwqE21N086rbGDtyozydkCJyQc7t9YPAw1VVfCRFixQZgDYuzzkMauaVJq1VOCdzqz%2FC2Tvt9wbdtHLq3OT7Aepv0g0LUWRnH285ht4IU5VMKXA9B0IFftOzwwB5Ifi4tr6Pwgm%2F6zUnOh%2B13Q5rueD3IGTs2H7wyE6Le5opmooMSzZOm3mrlmeo0sD14%2BOpWavKLU8mbsiEbbZcGuYgyYHcFz5MzT%2FwF3%2BfRifQUaGkUsYWX5XkWSVYHacGclc4kS8ioSrBK8W5dYGaRKYEHOM5RbWS%2BfnMNnLls4GOqUBwFhQhHkbwJjJHVwFx8ECWua0%2FnGBt1E82Cy7A4ZeVJlLXSitq7vk5iuDmr%2FKYDw97xFSRA%2Bdbftchy16YsuCRjUQLuhJ0SqsgKFxNYnO0A9MnR2LfV%2BkHeq27C8%2BNlcJGbIOaQ6VuCwnZzmcfS9srQvGtdf7KKac8zSF6TKPL3SCYZQo4uOOQSxTv6%2FGTITJyESN%2BEZErsd04e97ryByxzZ5lPA%2B&X-Amz-Signature=7b105d70c3a330bc223278362ee942c50c58c7698a8b7fbcb065aa5ec7276991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G4VCKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBc4Lmt7D8hOYmmUrWspiPBBviVQsTy1SKh0nXFWcieXAiAHk4ouzVsfEJnYh%2FWufzYBcVWwvWV9q6tCcVQWjZLlKCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX04rOLH10AmUAm84KtwDQ1yrvChXniQR7DLYT6qAxUmw2bjwEzywlmOz3EuJKCBaqNkhi%2BbjQ5%2B5vRe5rMTxlUsvmm0Hm0JOpXZBljKTrxRL4%2BU98oBrhvZaY2ZR8vc7TAC8iIHrdbRQlgueA%2BvQIxG0TEviEwpBRIRqZq7x0K4QQV4HNFUSrmB0Q3BpWGO%2F%2FJ5NqDr5mpo1C2Vc%2BjVQOEa00LzYiauuxBAXjp10hN52ujzUb%2Fxxlws595RbO6CRF42N7covZmENFYZTWXYvP%2Bpfpdq6Z81y%2FtiGA6mzS7NOEBC1zkmahUkuxwjWzKmedPx3aSF9TzdCT45yq7V9FJKhXbmbdtTEnjWdKetSJQ6E39rdaEpRulzKZc4kctfNSHZMLU6r4dO8DeunnwUf2RtrmK0U6fVroQlUyZJGiXy6%2BqZtbOLQIzoSkjKhRYu7ELaw9adl7o4yyE%2FKvi6xItnSAUYWqQurrP7s4MAzUqoku7hyiKt9NhvFry6%2FslX1%2FtnfHB67XRF%2BDIqBfUNpscmSrbMGu6tS2ncudYoAm8HPFwpO1kQL88zIsO61PAvZbDdbBuycFNdXMUmkd4rLSeAoP4DOje15UDksm1qv3YomU5OZHsSIuV%2BVGQtzHzj8lK8Js0%2B07XZT9VAwreyWzgY6pgEJr9FWUp9Psr2NMwz7%2FuYrX0rTVa62zVpBTnc3m0ECERbfAg31NcS87WHRkMJ4f1nCOyx3wWTUlrjQZYHbJU%2BFxRsSfVVpRLbgwpvgsHktutaf58ULEQOPGBoJ3s4C%2BOXyQeW05Hqid62UYZevLeiM%2FddI1g4FTY%2Bz48dHXby4Puaq64t6Frhr0uzxab7nhob6N8Ti4Buj3317Y%2FhA4w3uUi%2B7Savf&X-Amz-Signature=57399a5b4be7771ae0ef34853b0921f788b3ca7b30f442167b21228bc2f0fb06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G4VCKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBc4Lmt7D8hOYmmUrWspiPBBviVQsTy1SKh0nXFWcieXAiAHk4ouzVsfEJnYh%2FWufzYBcVWwvWV9q6tCcVQWjZLlKCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX04rOLH10AmUAm84KtwDQ1yrvChXniQR7DLYT6qAxUmw2bjwEzywlmOz3EuJKCBaqNkhi%2BbjQ5%2B5vRe5rMTxlUsvmm0Hm0JOpXZBljKTrxRL4%2BU98oBrhvZaY2ZR8vc7TAC8iIHrdbRQlgueA%2BvQIxG0TEviEwpBRIRqZq7x0K4QQV4HNFUSrmB0Q3BpWGO%2F%2FJ5NqDr5mpo1C2Vc%2BjVQOEa00LzYiauuxBAXjp10hN52ujzUb%2Fxxlws595RbO6CRF42N7covZmENFYZTWXYvP%2Bpfpdq6Z81y%2FtiGA6mzS7NOEBC1zkmahUkuxwjWzKmedPx3aSF9TzdCT45yq7V9FJKhXbmbdtTEnjWdKetSJQ6E39rdaEpRulzKZc4kctfNSHZMLU6r4dO8DeunnwUf2RtrmK0U6fVroQlUyZJGiXy6%2BqZtbOLQIzoSkjKhRYu7ELaw9adl7o4yyE%2FKvi6xItnSAUYWqQurrP7s4MAzUqoku7hyiKt9NhvFry6%2FslX1%2FtnfHB67XRF%2BDIqBfUNpscmSrbMGu6tS2ncudYoAm8HPFwpO1kQL88zIsO61PAvZbDdbBuycFNdXMUmkd4rLSeAoP4DOje15UDksm1qv3YomU5OZHsSIuV%2BVGQtzHzj8lK8Js0%2B07XZT9VAwreyWzgY6pgEJr9FWUp9Psr2NMwz7%2FuYrX0rTVa62zVpBTnc3m0ECERbfAg31NcS87WHRkMJ4f1nCOyx3wWTUlrjQZYHbJU%2BFxRsSfVVpRLbgwpvgsHktutaf58ULEQOPGBoJ3s4C%2BOXyQeW05Hqid62UYZevLeiM%2FddI1g4FTY%2Bz48dHXby4Puaq64t6Frhr0uzxab7nhob6N8Ti4Buj3317Y%2FhA4w3uUi%2B7Savf&X-Amz-Signature=48d1c856c08ae912cdf3a9f5ae967493d2235ac560f26133b4405c4ef03a6f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G4VCKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBc4Lmt7D8hOYmmUrWspiPBBviVQsTy1SKh0nXFWcieXAiAHk4ouzVsfEJnYh%2FWufzYBcVWwvWV9q6tCcVQWjZLlKCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX04rOLH10AmUAm84KtwDQ1yrvChXniQR7DLYT6qAxUmw2bjwEzywlmOz3EuJKCBaqNkhi%2BbjQ5%2B5vRe5rMTxlUsvmm0Hm0JOpXZBljKTrxRL4%2BU98oBrhvZaY2ZR8vc7TAC8iIHrdbRQlgueA%2BvQIxG0TEviEwpBRIRqZq7x0K4QQV4HNFUSrmB0Q3BpWGO%2F%2FJ5NqDr5mpo1C2Vc%2BjVQOEa00LzYiauuxBAXjp10hN52ujzUb%2Fxxlws595RbO6CRF42N7covZmENFYZTWXYvP%2Bpfpdq6Z81y%2FtiGA6mzS7NOEBC1zkmahUkuxwjWzKmedPx3aSF9TzdCT45yq7V9FJKhXbmbdtTEnjWdKetSJQ6E39rdaEpRulzKZc4kctfNSHZMLU6r4dO8DeunnwUf2RtrmK0U6fVroQlUyZJGiXy6%2BqZtbOLQIzoSkjKhRYu7ELaw9adl7o4yyE%2FKvi6xItnSAUYWqQurrP7s4MAzUqoku7hyiKt9NhvFry6%2FslX1%2FtnfHB67XRF%2BDIqBfUNpscmSrbMGu6tS2ncudYoAm8HPFwpO1kQL88zIsO61PAvZbDdbBuycFNdXMUmkd4rLSeAoP4DOje15UDksm1qv3YomU5OZHsSIuV%2BVGQtzHzj8lK8Js0%2B07XZT9VAwreyWzgY6pgEJr9FWUp9Psr2NMwz7%2FuYrX0rTVa62zVpBTnc3m0ECERbfAg31NcS87WHRkMJ4f1nCOyx3wWTUlrjQZYHbJU%2BFxRsSfVVpRLbgwpvgsHktutaf58ULEQOPGBoJ3s4C%2BOXyQeW05Hqid62UYZevLeiM%2FddI1g4FTY%2Bz48dHXby4Puaq64t6Frhr0uzxab7nhob6N8Ti4Buj3317Y%2FhA4w3uUi%2B7Savf&X-Amz-Signature=9a28b2d35a5aaa84d9ad698a4d2656c3aa841e32e7a26443656d7664e4050126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G4VCKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBc4Lmt7D8hOYmmUrWspiPBBviVQsTy1SKh0nXFWcieXAiAHk4ouzVsfEJnYh%2FWufzYBcVWwvWV9q6tCcVQWjZLlKCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX04rOLH10AmUAm84KtwDQ1yrvChXniQR7DLYT6qAxUmw2bjwEzywlmOz3EuJKCBaqNkhi%2BbjQ5%2B5vRe5rMTxlUsvmm0Hm0JOpXZBljKTrxRL4%2BU98oBrhvZaY2ZR8vc7TAC8iIHrdbRQlgueA%2BvQIxG0TEviEwpBRIRqZq7x0K4QQV4HNFUSrmB0Q3BpWGO%2F%2FJ5NqDr5mpo1C2Vc%2BjVQOEa00LzYiauuxBAXjp10hN52ujzUb%2Fxxlws595RbO6CRF42N7covZmENFYZTWXYvP%2Bpfpdq6Z81y%2FtiGA6mzS7NOEBC1zkmahUkuxwjWzKmedPx3aSF9TzdCT45yq7V9FJKhXbmbdtTEnjWdKetSJQ6E39rdaEpRulzKZc4kctfNSHZMLU6r4dO8DeunnwUf2RtrmK0U6fVroQlUyZJGiXy6%2BqZtbOLQIzoSkjKhRYu7ELaw9adl7o4yyE%2FKvi6xItnSAUYWqQurrP7s4MAzUqoku7hyiKt9NhvFry6%2FslX1%2FtnfHB67XRF%2BDIqBfUNpscmSrbMGu6tS2ncudYoAm8HPFwpO1kQL88zIsO61PAvZbDdbBuycFNdXMUmkd4rLSeAoP4DOje15UDksm1qv3YomU5OZHsSIuV%2BVGQtzHzj8lK8Js0%2B07XZT9VAwreyWzgY6pgEJr9FWUp9Psr2NMwz7%2FuYrX0rTVa62zVpBTnc3m0ECERbfAg31NcS87WHRkMJ4f1nCOyx3wWTUlrjQZYHbJU%2BFxRsSfVVpRLbgwpvgsHktutaf58ULEQOPGBoJ3s4C%2BOXyQeW05Hqid62UYZevLeiM%2FddI1g4FTY%2Bz48dHXby4Puaq64t6Frhr0uzxab7nhob6N8Ti4Buj3317Y%2FhA4w3uUi%2B7Savf&X-Amz-Signature=3be189dfd1be0ffa1d37072d79beefb1195bc8c56b0dec8e7dd5253c5d5a35e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G4VCKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBc4Lmt7D8hOYmmUrWspiPBBviVQsTy1SKh0nXFWcieXAiAHk4ouzVsfEJnYh%2FWufzYBcVWwvWV9q6tCcVQWjZLlKCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX04rOLH10AmUAm84KtwDQ1yrvChXniQR7DLYT6qAxUmw2bjwEzywlmOz3EuJKCBaqNkhi%2BbjQ5%2B5vRe5rMTxlUsvmm0Hm0JOpXZBljKTrxRL4%2BU98oBrhvZaY2ZR8vc7TAC8iIHrdbRQlgueA%2BvQIxG0TEviEwpBRIRqZq7x0K4QQV4HNFUSrmB0Q3BpWGO%2F%2FJ5NqDr5mpo1C2Vc%2BjVQOEa00LzYiauuxBAXjp10hN52ujzUb%2Fxxlws595RbO6CRF42N7covZmENFYZTWXYvP%2Bpfpdq6Z81y%2FtiGA6mzS7NOEBC1zkmahUkuxwjWzKmedPx3aSF9TzdCT45yq7V9FJKhXbmbdtTEnjWdKetSJQ6E39rdaEpRulzKZc4kctfNSHZMLU6r4dO8DeunnwUf2RtrmK0U6fVroQlUyZJGiXy6%2BqZtbOLQIzoSkjKhRYu7ELaw9adl7o4yyE%2FKvi6xItnSAUYWqQurrP7s4MAzUqoku7hyiKt9NhvFry6%2FslX1%2FtnfHB67XRF%2BDIqBfUNpscmSrbMGu6tS2ncudYoAm8HPFwpO1kQL88zIsO61PAvZbDdbBuycFNdXMUmkd4rLSeAoP4DOje15UDksm1qv3YomU5OZHsSIuV%2BVGQtzHzj8lK8Js0%2B07XZT9VAwreyWzgY6pgEJr9FWUp9Psr2NMwz7%2FuYrX0rTVa62zVpBTnc3m0ECERbfAg31NcS87WHRkMJ4f1nCOyx3wWTUlrjQZYHbJU%2BFxRsSfVVpRLbgwpvgsHktutaf58ULEQOPGBoJ3s4C%2BOXyQeW05Hqid62UYZevLeiM%2FddI1g4FTY%2Bz48dHXby4Puaq64t6Frhr0uzxab7nhob6N8Ti4Buj3317Y%2FhA4w3uUi%2B7Savf&X-Amz-Signature=8f52e1f18fb8b466f5fdfcd6723b6dea59c332cbabb9783586bef087ed327281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G4VCKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBc4Lmt7D8hOYmmUrWspiPBBviVQsTy1SKh0nXFWcieXAiAHk4ouzVsfEJnYh%2FWufzYBcVWwvWV9q6tCcVQWjZLlKCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX04rOLH10AmUAm84KtwDQ1yrvChXniQR7DLYT6qAxUmw2bjwEzywlmOz3EuJKCBaqNkhi%2BbjQ5%2B5vRe5rMTxlUsvmm0Hm0JOpXZBljKTrxRL4%2BU98oBrhvZaY2ZR8vc7TAC8iIHrdbRQlgueA%2BvQIxG0TEviEwpBRIRqZq7x0K4QQV4HNFUSrmB0Q3BpWGO%2F%2FJ5NqDr5mpo1C2Vc%2BjVQOEa00LzYiauuxBAXjp10hN52ujzUb%2Fxxlws595RbO6CRF42N7covZmENFYZTWXYvP%2Bpfpdq6Z81y%2FtiGA6mzS7NOEBC1zkmahUkuxwjWzKmedPx3aSF9TzdCT45yq7V9FJKhXbmbdtTEnjWdKetSJQ6E39rdaEpRulzKZc4kctfNSHZMLU6r4dO8DeunnwUf2RtrmK0U6fVroQlUyZJGiXy6%2BqZtbOLQIzoSkjKhRYu7ELaw9adl7o4yyE%2FKvi6xItnSAUYWqQurrP7s4MAzUqoku7hyiKt9NhvFry6%2FslX1%2FtnfHB67XRF%2BDIqBfUNpscmSrbMGu6tS2ncudYoAm8HPFwpO1kQL88zIsO61PAvZbDdbBuycFNdXMUmkd4rLSeAoP4DOje15UDksm1qv3YomU5OZHsSIuV%2BVGQtzHzj8lK8Js0%2B07XZT9VAwreyWzgY6pgEJr9FWUp9Psr2NMwz7%2FuYrX0rTVa62zVpBTnc3m0ECERbfAg31NcS87WHRkMJ4f1nCOyx3wWTUlrjQZYHbJU%2BFxRsSfVVpRLbgwpvgsHktutaf58ULEQOPGBoJ3s4C%2BOXyQeW05Hqid62UYZevLeiM%2FddI1g4FTY%2Bz48dHXby4Puaq64t6Frhr0uzxab7nhob6N8Ti4Buj3317Y%2FhA4w3uUi%2B7Savf&X-Amz-Signature=0ca92943dd154ca26f2b25387651083d8e67ec18ac8fcede139c5cd1974e26b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G4VCKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBc4Lmt7D8hOYmmUrWspiPBBviVQsTy1SKh0nXFWcieXAiAHk4ouzVsfEJnYh%2FWufzYBcVWwvWV9q6tCcVQWjZLlKCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX04rOLH10AmUAm84KtwDQ1yrvChXniQR7DLYT6qAxUmw2bjwEzywlmOz3EuJKCBaqNkhi%2BbjQ5%2B5vRe5rMTxlUsvmm0Hm0JOpXZBljKTrxRL4%2BU98oBrhvZaY2ZR8vc7TAC8iIHrdbRQlgueA%2BvQIxG0TEviEwpBRIRqZq7x0K4QQV4HNFUSrmB0Q3BpWGO%2F%2FJ5NqDr5mpo1C2Vc%2BjVQOEa00LzYiauuxBAXjp10hN52ujzUb%2Fxxlws595RbO6CRF42N7covZmENFYZTWXYvP%2Bpfpdq6Z81y%2FtiGA6mzS7NOEBC1zkmahUkuxwjWzKmedPx3aSF9TzdCT45yq7V9FJKhXbmbdtTEnjWdKetSJQ6E39rdaEpRulzKZc4kctfNSHZMLU6r4dO8DeunnwUf2RtrmK0U6fVroQlUyZJGiXy6%2BqZtbOLQIzoSkjKhRYu7ELaw9adl7o4yyE%2FKvi6xItnSAUYWqQurrP7s4MAzUqoku7hyiKt9NhvFry6%2FslX1%2FtnfHB67XRF%2BDIqBfUNpscmSrbMGu6tS2ncudYoAm8HPFwpO1kQL88zIsO61PAvZbDdbBuycFNdXMUmkd4rLSeAoP4DOje15UDksm1qv3YomU5OZHsSIuV%2BVGQtzHzj8lK8Js0%2B07XZT9VAwreyWzgY6pgEJr9FWUp9Psr2NMwz7%2FuYrX0rTVa62zVpBTnc3m0ECERbfAg31NcS87WHRkMJ4f1nCOyx3wWTUlrjQZYHbJU%2BFxRsSfVVpRLbgwpvgsHktutaf58ULEQOPGBoJ3s4C%2BOXyQeW05Hqid62UYZevLeiM%2FddI1g4FTY%2Bz48dHXby4Puaq64t6Frhr0uzxab7nhob6N8Ti4Buj3317Y%2FhA4w3uUi%2B7Savf&X-Amz-Signature=38defd373c4db7a9e66b62b1493c168bd056572107fa2cf3e15675ac3c8fb7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G4VCKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBc4Lmt7D8hOYmmUrWspiPBBviVQsTy1SKh0nXFWcieXAiAHk4ouzVsfEJnYh%2FWufzYBcVWwvWV9q6tCcVQWjZLlKCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX04rOLH10AmUAm84KtwDQ1yrvChXniQR7DLYT6qAxUmw2bjwEzywlmOz3EuJKCBaqNkhi%2BbjQ5%2B5vRe5rMTxlUsvmm0Hm0JOpXZBljKTrxRL4%2BU98oBrhvZaY2ZR8vc7TAC8iIHrdbRQlgueA%2BvQIxG0TEviEwpBRIRqZq7x0K4QQV4HNFUSrmB0Q3BpWGO%2F%2FJ5NqDr5mpo1C2Vc%2BjVQOEa00LzYiauuxBAXjp10hN52ujzUb%2Fxxlws595RbO6CRF42N7covZmENFYZTWXYvP%2Bpfpdq6Z81y%2FtiGA6mzS7NOEBC1zkmahUkuxwjWzKmedPx3aSF9TzdCT45yq7V9FJKhXbmbdtTEnjWdKetSJQ6E39rdaEpRulzKZc4kctfNSHZMLU6r4dO8DeunnwUf2RtrmK0U6fVroQlUyZJGiXy6%2BqZtbOLQIzoSkjKhRYu7ELaw9adl7o4yyE%2FKvi6xItnSAUYWqQurrP7s4MAzUqoku7hyiKt9NhvFry6%2FslX1%2FtnfHB67XRF%2BDIqBfUNpscmSrbMGu6tS2ncudYoAm8HPFwpO1kQL88zIsO61PAvZbDdbBuycFNdXMUmkd4rLSeAoP4DOje15UDksm1qv3YomU5OZHsSIuV%2BVGQtzHzj8lK8Js0%2B07XZT9VAwreyWzgY6pgEJr9FWUp9Psr2NMwz7%2FuYrX0rTVa62zVpBTnc3m0ECERbfAg31NcS87WHRkMJ4f1nCOyx3wWTUlrjQZYHbJU%2BFxRsSfVVpRLbgwpvgsHktutaf58ULEQOPGBoJ3s4C%2BOXyQeW05Hqid62UYZevLeiM%2FddI1g4FTY%2Bz48dHXby4Puaq64t6Frhr0uzxab7nhob6N8Ti4Buj3317Y%2FhA4w3uUi%2B7Savf&X-Amz-Signature=b1e43c6557846ed8098295ed9706ddb92f1386b9d3e1be8825f38575ef8e1eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G4VCKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBc4Lmt7D8hOYmmUrWspiPBBviVQsTy1SKh0nXFWcieXAiAHk4ouzVsfEJnYh%2FWufzYBcVWwvWV9q6tCcVQWjZLlKCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX04rOLH10AmUAm84KtwDQ1yrvChXniQR7DLYT6qAxUmw2bjwEzywlmOz3EuJKCBaqNkhi%2BbjQ5%2B5vRe5rMTxlUsvmm0Hm0JOpXZBljKTrxRL4%2BU98oBrhvZaY2ZR8vc7TAC8iIHrdbRQlgueA%2BvQIxG0TEviEwpBRIRqZq7x0K4QQV4HNFUSrmB0Q3BpWGO%2F%2FJ5NqDr5mpo1C2Vc%2BjVQOEa00LzYiauuxBAXjp10hN52ujzUb%2Fxxlws595RbO6CRF42N7covZmENFYZTWXYvP%2Bpfpdq6Z81y%2FtiGA6mzS7NOEBC1zkmahUkuxwjWzKmedPx3aSF9TzdCT45yq7V9FJKhXbmbdtTEnjWdKetSJQ6E39rdaEpRulzKZc4kctfNSHZMLU6r4dO8DeunnwUf2RtrmK0U6fVroQlUyZJGiXy6%2BqZtbOLQIzoSkjKhRYu7ELaw9adl7o4yyE%2FKvi6xItnSAUYWqQurrP7s4MAzUqoku7hyiKt9NhvFry6%2FslX1%2FtnfHB67XRF%2BDIqBfUNpscmSrbMGu6tS2ncudYoAm8HPFwpO1kQL88zIsO61PAvZbDdbBuycFNdXMUmkd4rLSeAoP4DOje15UDksm1qv3YomU5OZHsSIuV%2BVGQtzHzj8lK8Js0%2B07XZT9VAwreyWzgY6pgEJr9FWUp9Psr2NMwz7%2FuYrX0rTVa62zVpBTnc3m0ECERbfAg31NcS87WHRkMJ4f1nCOyx3wWTUlrjQZYHbJU%2BFxRsSfVVpRLbgwpvgsHktutaf58ULEQOPGBoJ3s4C%2BOXyQeW05Hqid62UYZevLeiM%2FddI1g4FTY%2Bz48dHXby4Puaq64t6Frhr0uzxab7nhob6N8Ti4Buj3317Y%2FhA4w3uUi%2B7Savf&X-Amz-Signature=9a7837098680bce8a83ab29811f6212b773540384ba4dd1f3e1b51f83b6f31dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7G4VCKH%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBc4Lmt7D8hOYmmUrWspiPBBviVQsTy1SKh0nXFWcieXAiAHk4ouzVsfEJnYh%2FWufzYBcVWwvWV9q6tCcVQWjZLlKCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX04rOLH10AmUAm84KtwDQ1yrvChXniQR7DLYT6qAxUmw2bjwEzywlmOz3EuJKCBaqNkhi%2BbjQ5%2B5vRe5rMTxlUsvmm0Hm0JOpXZBljKTrxRL4%2BU98oBrhvZaY2ZR8vc7TAC8iIHrdbRQlgueA%2BvQIxG0TEviEwpBRIRqZq7x0K4QQV4HNFUSrmB0Q3BpWGO%2F%2FJ5NqDr5mpo1C2Vc%2BjVQOEa00LzYiauuxBAXjp10hN52ujzUb%2Fxxlws595RbO6CRF42N7covZmENFYZTWXYvP%2Bpfpdq6Z81y%2FtiGA6mzS7NOEBC1zkmahUkuxwjWzKmedPx3aSF9TzdCT45yq7V9FJKhXbmbdtTEnjWdKetSJQ6E39rdaEpRulzKZc4kctfNSHZMLU6r4dO8DeunnwUf2RtrmK0U6fVroQlUyZJGiXy6%2BqZtbOLQIzoSkjKhRYu7ELaw9adl7o4yyE%2FKvi6xItnSAUYWqQurrP7s4MAzUqoku7hyiKt9NhvFry6%2FslX1%2FtnfHB67XRF%2BDIqBfUNpscmSrbMGu6tS2ncudYoAm8HPFwpO1kQL88zIsO61PAvZbDdbBuycFNdXMUmkd4rLSeAoP4DOje15UDksm1qv3YomU5OZHsSIuV%2BVGQtzHzj8lK8Js0%2B07XZT9VAwreyWzgY6pgEJr9FWUp9Psr2NMwz7%2FuYrX0rTVa62zVpBTnc3m0ECERbfAg31NcS87WHRkMJ4f1nCOyx3wWTUlrjQZYHbJU%2BFxRsSfVVpRLbgwpvgsHktutaf58ULEQOPGBoJ3s4C%2BOXyQeW05Hqid62UYZevLeiM%2FddI1g4FTY%2Bz48dHXby4Puaq64t6Frhr0uzxab7nhob6N8Ti4Buj3317Y%2FhA4w3uUi%2B7Savf&X-Amz-Signature=3be189dfd1be0ffa1d37072d79beefb1195bc8c56b0dec8e7dd5253c5d5a35e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

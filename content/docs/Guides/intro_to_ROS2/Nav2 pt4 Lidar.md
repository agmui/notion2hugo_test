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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQCVOLMH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBfIgQ4U8GmBa2zcYuf2T8rSv6x1rEjA0suS%2FntzQS32AiEA6LwcY7ROABhxMW7G2M6WDock1nbDUiYQKRhFddPYyWwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BSaxv%2FA4Ypr0vVzCrcA%2F4JB%2FhBWAATru6w1oZwIAbbTUeL1XgTnL2NAvoiV8AJA2GC7Zl6YZGqb3QzjhKVQ8ymDsyx66bgPNChwSZg9WYZ0cAH5t%2FHDsQP9HY9xTq0WaIO277tyHUQ6PWDYfYusAJh0anCIVy%2BSqq1evfBH0M%2BthnciF5rl5j3HMi6mYpp4TFElHNC5TmgpZSx%2ByjxHyaaXukplfxsGX81CjyikT0wfatb%2F3FA2KlhybtB%2Fwlrqp9GbUDz%2BMrNAwLxnKfafokRisu8i%2BBl5mmtp6NIXjob7QgandGmIL6V2S5vGlHlbYA%2BVGQ%2BijEztyXLaLpc0O2deut5b6B781Ip1iC5h%2BQcf7qUMt2kuzk5QCCXYqip1vSq9EgabQ9K0lOOJp%2Bjx1UYYcMNPONfhIMXt11jNkS5WGfjFZvkKm0VGpwd3ygZAY9gsgvsEN8yvwwakgZWs2%2Fm0M4%2FxpHuNUUa%2B0R%2B3p02MW59YogAtoGMtRHq%2BVKZdRUh4020YgKfl%2BczsvtOb34%2FdIsJuo9npkcRG%2BmZ6j9w%2F7NJJbd8Vrbz6W7IfxTL2pFVk%2BYEwdmSHcqPFTH1GG27YixUl9ihszrIhdryRXC%2FLfzvhdCDih2ulsYEn1ljs5ArruaI5GHM5To7MLi13MoGOqUBGQY39fDgKV4nPFHEySP0KrlZPcGoNGvlGGu685%2B%2BuMfpi8i3CRduJJd65%2Fb6It8CD6UjGf%2FQJINiwvB7Rd2c3iFydFN4o1Bn3DYk%2BcwnnPcgP2feUdXzuDhhlAsarfSG%2FVc%2BUSdZ77CF0MzIjmbMw6c3FKC%2FiW0Y%2B%2Fnl1hBSfW3seZ0A5%2B5vAGsTP46qeujet8wv9wBlPcN64NJti1PI1Xg48LGO&X-Amz-Signature=ae441a77810a0b022f1c8dbe7d189250febbb2448b0b6e81cb64d5fc75dc44f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMO5YHE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGe1y5ic09pvbXWu%2F2Np%2B43lZTWOKXjpktlm5DBnqkWHAiAsFYqWVzzE017lTq%2Finmr41nFJ9tl%2BzZ3LkeISZaOqwSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2HZoV46kBGhs127KtwDKbfO9%2F%2BxAUnwDUjZ%2FzgrGjyaIBWC0EOjf7b9wvOVDhFfjkaImLYiVChFx%2BUW%2FUqDtO0KNUCDd07qpASB4fXN5JnzNf9VuRnJwrPGdWNRbcQbXKn9cQfUV8EYpWMvWFUOdFfDd6ILo5sG6YlvaCS99H9AhXSwwHseHl6qX2GANGGmmerV1LMvHwje%2F1O2jF4vnj0zgVyoMbWPhlmO3jFVaYA1GEsLOlUPno07i4rn8XV9CXlj2oMyJmIyR1fKbTHdCWMT%2BkdQOsQID2EPQl8ZL1RTKYdQb5BuB7jIdjB51Uz6TtPcHxrLGhOE7rnF2ER1ZH45ei7CuuKIrjjk7uLeZRGzhF%2Bd8wu3CNCkABxOjZIUKZlqL%2BUuce3tKzt3iy%2FT%2FnZVvvuJ2H1B3f7XJqUZuQt1O7VWlg%2F%2BDzcnSz2EmpIDq675AD7h%2FOwA6FRMydOWBwtRh%2BtlSGO9%2FqtRMnxr%2F%2Fowfcn8%2BfKcCDY0Ejhl%2B2pPomxrqdF6Pjbzz8cnN5J%2Bq7kd%2BHQiIWDhQ4dYnYF4R74Z6r%2FbAlkzgu3EcXF%2FRgG9gF4Z7p2Jtnp6NAuU01L6DhTpRfS7QtzPHm0YaXaRG5Vo0oIDuLXCira7cmo6ABIB3USFrquvwAG37y4w25fcygY6pgHcq1lAUsjaqoBTRRpniACXGcrY7Wy7o%2Bi1PLOQtMXCHyIag5CntYxE9dk3v%2BGs%2BOXDs2YgQueFEzDsRvDvYVkMKnIPIfYHXDLXi2Zglbm6rBgwwHlS46gs5JjcI%2B61gxNvKc5GxRYiJCuFKuwg10FrSE7OqoQMRM%2FxuubFKBD%2FzLKaCGVdlcSUfAoEEblpv50gtNo3%2Bce4uOsboZ%2FUruSbAXVCTHvG&X-Amz-Signature=cab157d09b1e7447f96a078ae2c19a3b9cf627b35b9c1aa4f00c4ea0df1f33e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMO5YHE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGe1y5ic09pvbXWu%2F2Np%2B43lZTWOKXjpktlm5DBnqkWHAiAsFYqWVzzE017lTq%2Finmr41nFJ9tl%2BzZ3LkeISZaOqwSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2HZoV46kBGhs127KtwDKbfO9%2F%2BxAUnwDUjZ%2FzgrGjyaIBWC0EOjf7b9wvOVDhFfjkaImLYiVChFx%2BUW%2FUqDtO0KNUCDd07qpASB4fXN5JnzNf9VuRnJwrPGdWNRbcQbXKn9cQfUV8EYpWMvWFUOdFfDd6ILo5sG6YlvaCS99H9AhXSwwHseHl6qX2GANGGmmerV1LMvHwje%2F1O2jF4vnj0zgVyoMbWPhlmO3jFVaYA1GEsLOlUPno07i4rn8XV9CXlj2oMyJmIyR1fKbTHdCWMT%2BkdQOsQID2EPQl8ZL1RTKYdQb5BuB7jIdjB51Uz6TtPcHxrLGhOE7rnF2ER1ZH45ei7CuuKIrjjk7uLeZRGzhF%2Bd8wu3CNCkABxOjZIUKZlqL%2BUuce3tKzt3iy%2FT%2FnZVvvuJ2H1B3f7XJqUZuQt1O7VWlg%2F%2BDzcnSz2EmpIDq675AD7h%2FOwA6FRMydOWBwtRh%2BtlSGO9%2FqtRMnxr%2F%2Fowfcn8%2BfKcCDY0Ejhl%2B2pPomxrqdF6Pjbzz8cnN5J%2Bq7kd%2BHQiIWDhQ4dYnYF4R74Z6r%2FbAlkzgu3EcXF%2FRgG9gF4Z7p2Jtnp6NAuU01L6DhTpRfS7QtzPHm0YaXaRG5Vo0oIDuLXCira7cmo6ABIB3USFrquvwAG37y4w25fcygY6pgHcq1lAUsjaqoBTRRpniACXGcrY7Wy7o%2Bi1PLOQtMXCHyIag5CntYxE9dk3v%2BGs%2BOXDs2YgQueFEzDsRvDvYVkMKnIPIfYHXDLXi2Zglbm6rBgwwHlS46gs5JjcI%2B61gxNvKc5GxRYiJCuFKuwg10FrSE7OqoQMRM%2FxuubFKBD%2FzLKaCGVdlcSUfAoEEblpv50gtNo3%2Bce4uOsboZ%2FUruSbAXVCTHvG&X-Amz-Signature=95a751968a10ea4e6c555e04472c7d905e218f8d29ab37e12040096b7cd9bfe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMO5YHE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGe1y5ic09pvbXWu%2F2Np%2B43lZTWOKXjpktlm5DBnqkWHAiAsFYqWVzzE017lTq%2Finmr41nFJ9tl%2BzZ3LkeISZaOqwSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2HZoV46kBGhs127KtwDKbfO9%2F%2BxAUnwDUjZ%2FzgrGjyaIBWC0EOjf7b9wvOVDhFfjkaImLYiVChFx%2BUW%2FUqDtO0KNUCDd07qpASB4fXN5JnzNf9VuRnJwrPGdWNRbcQbXKn9cQfUV8EYpWMvWFUOdFfDd6ILo5sG6YlvaCS99H9AhXSwwHseHl6qX2GANGGmmerV1LMvHwje%2F1O2jF4vnj0zgVyoMbWPhlmO3jFVaYA1GEsLOlUPno07i4rn8XV9CXlj2oMyJmIyR1fKbTHdCWMT%2BkdQOsQID2EPQl8ZL1RTKYdQb5BuB7jIdjB51Uz6TtPcHxrLGhOE7rnF2ER1ZH45ei7CuuKIrjjk7uLeZRGzhF%2Bd8wu3CNCkABxOjZIUKZlqL%2BUuce3tKzt3iy%2FT%2FnZVvvuJ2H1B3f7XJqUZuQt1O7VWlg%2F%2BDzcnSz2EmpIDq675AD7h%2FOwA6FRMydOWBwtRh%2BtlSGO9%2FqtRMnxr%2F%2Fowfcn8%2BfKcCDY0Ejhl%2B2pPomxrqdF6Pjbzz8cnN5J%2Bq7kd%2BHQiIWDhQ4dYnYF4R74Z6r%2FbAlkzgu3EcXF%2FRgG9gF4Z7p2Jtnp6NAuU01L6DhTpRfS7QtzPHm0YaXaRG5Vo0oIDuLXCira7cmo6ABIB3USFrquvwAG37y4w25fcygY6pgHcq1lAUsjaqoBTRRpniACXGcrY7Wy7o%2Bi1PLOQtMXCHyIag5CntYxE9dk3v%2BGs%2BOXDs2YgQueFEzDsRvDvYVkMKnIPIfYHXDLXi2Zglbm6rBgwwHlS46gs5JjcI%2B61gxNvKc5GxRYiJCuFKuwg10FrSE7OqoQMRM%2FxuubFKBD%2FzLKaCGVdlcSUfAoEEblpv50gtNo3%2Bce4uOsboZ%2FUruSbAXVCTHvG&X-Amz-Signature=fe1d12f9c2abe81e654a866fdcb200db87b74fea58559e3b703414917866cd2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMO5YHE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGe1y5ic09pvbXWu%2F2Np%2B43lZTWOKXjpktlm5DBnqkWHAiAsFYqWVzzE017lTq%2Finmr41nFJ9tl%2BzZ3LkeISZaOqwSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2HZoV46kBGhs127KtwDKbfO9%2F%2BxAUnwDUjZ%2FzgrGjyaIBWC0EOjf7b9wvOVDhFfjkaImLYiVChFx%2BUW%2FUqDtO0KNUCDd07qpASB4fXN5JnzNf9VuRnJwrPGdWNRbcQbXKn9cQfUV8EYpWMvWFUOdFfDd6ILo5sG6YlvaCS99H9AhXSwwHseHl6qX2GANGGmmerV1LMvHwje%2F1O2jF4vnj0zgVyoMbWPhlmO3jFVaYA1GEsLOlUPno07i4rn8XV9CXlj2oMyJmIyR1fKbTHdCWMT%2BkdQOsQID2EPQl8ZL1RTKYdQb5BuB7jIdjB51Uz6TtPcHxrLGhOE7rnF2ER1ZH45ei7CuuKIrjjk7uLeZRGzhF%2Bd8wu3CNCkABxOjZIUKZlqL%2BUuce3tKzt3iy%2FT%2FnZVvvuJ2H1B3f7XJqUZuQt1O7VWlg%2F%2BDzcnSz2EmpIDq675AD7h%2FOwA6FRMydOWBwtRh%2BtlSGO9%2FqtRMnxr%2F%2Fowfcn8%2BfKcCDY0Ejhl%2B2pPomxrqdF6Pjbzz8cnN5J%2Bq7kd%2BHQiIWDhQ4dYnYF4R74Z6r%2FbAlkzgu3EcXF%2FRgG9gF4Z7p2Jtnp6NAuU01L6DhTpRfS7QtzPHm0YaXaRG5Vo0oIDuLXCira7cmo6ABIB3USFrquvwAG37y4w25fcygY6pgHcq1lAUsjaqoBTRRpniACXGcrY7Wy7o%2Bi1PLOQtMXCHyIag5CntYxE9dk3v%2BGs%2BOXDs2YgQueFEzDsRvDvYVkMKnIPIfYHXDLXi2Zglbm6rBgwwHlS46gs5JjcI%2B61gxNvKc5GxRYiJCuFKuwg10FrSE7OqoQMRM%2FxuubFKBD%2FzLKaCGVdlcSUfAoEEblpv50gtNo3%2Bce4uOsboZ%2FUruSbAXVCTHvG&X-Amz-Signature=8205f772f4f1f4212c4de6fe5222ab8918cec7144d2a69ba749c7bf8df378bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMO5YHE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGe1y5ic09pvbXWu%2F2Np%2B43lZTWOKXjpktlm5DBnqkWHAiAsFYqWVzzE017lTq%2Finmr41nFJ9tl%2BzZ3LkeISZaOqwSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2HZoV46kBGhs127KtwDKbfO9%2F%2BxAUnwDUjZ%2FzgrGjyaIBWC0EOjf7b9wvOVDhFfjkaImLYiVChFx%2BUW%2FUqDtO0KNUCDd07qpASB4fXN5JnzNf9VuRnJwrPGdWNRbcQbXKn9cQfUV8EYpWMvWFUOdFfDd6ILo5sG6YlvaCS99H9AhXSwwHseHl6qX2GANGGmmerV1LMvHwje%2F1O2jF4vnj0zgVyoMbWPhlmO3jFVaYA1GEsLOlUPno07i4rn8XV9CXlj2oMyJmIyR1fKbTHdCWMT%2BkdQOsQID2EPQl8ZL1RTKYdQb5BuB7jIdjB51Uz6TtPcHxrLGhOE7rnF2ER1ZH45ei7CuuKIrjjk7uLeZRGzhF%2Bd8wu3CNCkABxOjZIUKZlqL%2BUuce3tKzt3iy%2FT%2FnZVvvuJ2H1B3f7XJqUZuQt1O7VWlg%2F%2BDzcnSz2EmpIDq675AD7h%2FOwA6FRMydOWBwtRh%2BtlSGO9%2FqtRMnxr%2F%2Fowfcn8%2BfKcCDY0Ejhl%2B2pPomxrqdF6Pjbzz8cnN5J%2Bq7kd%2BHQiIWDhQ4dYnYF4R74Z6r%2FbAlkzgu3EcXF%2FRgG9gF4Z7p2Jtnp6NAuU01L6DhTpRfS7QtzPHm0YaXaRG5Vo0oIDuLXCira7cmo6ABIB3USFrquvwAG37y4w25fcygY6pgHcq1lAUsjaqoBTRRpniACXGcrY7Wy7o%2Bi1PLOQtMXCHyIag5CntYxE9dk3v%2BGs%2BOXDs2YgQueFEzDsRvDvYVkMKnIPIfYHXDLXi2Zglbm6rBgwwHlS46gs5JjcI%2B61gxNvKc5GxRYiJCuFKuwg10FrSE7OqoQMRM%2FxuubFKBD%2FzLKaCGVdlcSUfAoEEblpv50gtNo3%2Bce4uOsboZ%2FUruSbAXVCTHvG&X-Amz-Signature=aaa557fd89eeaa8e54c044982233a3ebe26fe234c124b491fb7adf35f799f851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMO5YHE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGe1y5ic09pvbXWu%2F2Np%2B43lZTWOKXjpktlm5DBnqkWHAiAsFYqWVzzE017lTq%2Finmr41nFJ9tl%2BzZ3LkeISZaOqwSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2HZoV46kBGhs127KtwDKbfO9%2F%2BxAUnwDUjZ%2FzgrGjyaIBWC0EOjf7b9wvOVDhFfjkaImLYiVChFx%2BUW%2FUqDtO0KNUCDd07qpASB4fXN5JnzNf9VuRnJwrPGdWNRbcQbXKn9cQfUV8EYpWMvWFUOdFfDd6ILo5sG6YlvaCS99H9AhXSwwHseHl6qX2GANGGmmerV1LMvHwje%2F1O2jF4vnj0zgVyoMbWPhlmO3jFVaYA1GEsLOlUPno07i4rn8XV9CXlj2oMyJmIyR1fKbTHdCWMT%2BkdQOsQID2EPQl8ZL1RTKYdQb5BuB7jIdjB51Uz6TtPcHxrLGhOE7rnF2ER1ZH45ei7CuuKIrjjk7uLeZRGzhF%2Bd8wu3CNCkABxOjZIUKZlqL%2BUuce3tKzt3iy%2FT%2FnZVvvuJ2H1B3f7XJqUZuQt1O7VWlg%2F%2BDzcnSz2EmpIDq675AD7h%2FOwA6FRMydOWBwtRh%2BtlSGO9%2FqtRMnxr%2F%2Fowfcn8%2BfKcCDY0Ejhl%2B2pPomxrqdF6Pjbzz8cnN5J%2Bq7kd%2BHQiIWDhQ4dYnYF4R74Z6r%2FbAlkzgu3EcXF%2FRgG9gF4Z7p2Jtnp6NAuU01L6DhTpRfS7QtzPHm0YaXaRG5Vo0oIDuLXCira7cmo6ABIB3USFrquvwAG37y4w25fcygY6pgHcq1lAUsjaqoBTRRpniACXGcrY7Wy7o%2Bi1PLOQtMXCHyIag5CntYxE9dk3v%2BGs%2BOXDs2YgQueFEzDsRvDvYVkMKnIPIfYHXDLXi2Zglbm6rBgwwHlS46gs5JjcI%2B61gxNvKc5GxRYiJCuFKuwg10FrSE7OqoQMRM%2FxuubFKBD%2FzLKaCGVdlcSUfAoEEblpv50gtNo3%2Bce4uOsboZ%2FUruSbAXVCTHvG&X-Amz-Signature=7cbf6885aabb579358ccfbb99f09fa3d0b0472ea183a7fbbd28d51c3ba350d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMO5YHE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGe1y5ic09pvbXWu%2F2Np%2B43lZTWOKXjpktlm5DBnqkWHAiAsFYqWVzzE017lTq%2Finmr41nFJ9tl%2BzZ3LkeISZaOqwSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2HZoV46kBGhs127KtwDKbfO9%2F%2BxAUnwDUjZ%2FzgrGjyaIBWC0EOjf7b9wvOVDhFfjkaImLYiVChFx%2BUW%2FUqDtO0KNUCDd07qpASB4fXN5JnzNf9VuRnJwrPGdWNRbcQbXKn9cQfUV8EYpWMvWFUOdFfDd6ILo5sG6YlvaCS99H9AhXSwwHseHl6qX2GANGGmmerV1LMvHwje%2F1O2jF4vnj0zgVyoMbWPhlmO3jFVaYA1GEsLOlUPno07i4rn8XV9CXlj2oMyJmIyR1fKbTHdCWMT%2BkdQOsQID2EPQl8ZL1RTKYdQb5BuB7jIdjB51Uz6TtPcHxrLGhOE7rnF2ER1ZH45ei7CuuKIrjjk7uLeZRGzhF%2Bd8wu3CNCkABxOjZIUKZlqL%2BUuce3tKzt3iy%2FT%2FnZVvvuJ2H1B3f7XJqUZuQt1O7VWlg%2F%2BDzcnSz2EmpIDq675AD7h%2FOwA6FRMydOWBwtRh%2BtlSGO9%2FqtRMnxr%2F%2Fowfcn8%2BfKcCDY0Ejhl%2B2pPomxrqdF6Pjbzz8cnN5J%2Bq7kd%2BHQiIWDhQ4dYnYF4R74Z6r%2FbAlkzgu3EcXF%2FRgG9gF4Z7p2Jtnp6NAuU01L6DhTpRfS7QtzPHm0YaXaRG5Vo0oIDuLXCira7cmo6ABIB3USFrquvwAG37y4w25fcygY6pgHcq1lAUsjaqoBTRRpniACXGcrY7Wy7o%2Bi1PLOQtMXCHyIag5CntYxE9dk3v%2BGs%2BOXDs2YgQueFEzDsRvDvYVkMKnIPIfYHXDLXi2Zglbm6rBgwwHlS46gs5JjcI%2B61gxNvKc5GxRYiJCuFKuwg10FrSE7OqoQMRM%2FxuubFKBD%2FzLKaCGVdlcSUfAoEEblpv50gtNo3%2Bce4uOsboZ%2FUruSbAXVCTHvG&X-Amz-Signature=d0ba1c5c6c992863a42e8b1fb2545f6c7625321fd1af5c92e787f6afbf266cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMO5YHE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGe1y5ic09pvbXWu%2F2Np%2B43lZTWOKXjpktlm5DBnqkWHAiAsFYqWVzzE017lTq%2Finmr41nFJ9tl%2BzZ3LkeISZaOqwSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2HZoV46kBGhs127KtwDKbfO9%2F%2BxAUnwDUjZ%2FzgrGjyaIBWC0EOjf7b9wvOVDhFfjkaImLYiVChFx%2BUW%2FUqDtO0KNUCDd07qpASB4fXN5JnzNf9VuRnJwrPGdWNRbcQbXKn9cQfUV8EYpWMvWFUOdFfDd6ILo5sG6YlvaCS99H9AhXSwwHseHl6qX2GANGGmmerV1LMvHwje%2F1O2jF4vnj0zgVyoMbWPhlmO3jFVaYA1GEsLOlUPno07i4rn8XV9CXlj2oMyJmIyR1fKbTHdCWMT%2BkdQOsQID2EPQl8ZL1RTKYdQb5BuB7jIdjB51Uz6TtPcHxrLGhOE7rnF2ER1ZH45ei7CuuKIrjjk7uLeZRGzhF%2Bd8wu3CNCkABxOjZIUKZlqL%2BUuce3tKzt3iy%2FT%2FnZVvvuJ2H1B3f7XJqUZuQt1O7VWlg%2F%2BDzcnSz2EmpIDq675AD7h%2FOwA6FRMydOWBwtRh%2BtlSGO9%2FqtRMnxr%2F%2Fowfcn8%2BfKcCDY0Ejhl%2B2pPomxrqdF6Pjbzz8cnN5J%2Bq7kd%2BHQiIWDhQ4dYnYF4R74Z6r%2FbAlkzgu3EcXF%2FRgG9gF4Z7p2Jtnp6NAuU01L6DhTpRfS7QtzPHm0YaXaRG5Vo0oIDuLXCira7cmo6ABIB3USFrquvwAG37y4w25fcygY6pgHcq1lAUsjaqoBTRRpniACXGcrY7Wy7o%2Bi1PLOQtMXCHyIag5CntYxE9dk3v%2BGs%2BOXDs2YgQueFEzDsRvDvYVkMKnIPIfYHXDLXi2Zglbm6rBgwwHlS46gs5JjcI%2B61gxNvKc5GxRYiJCuFKuwg10FrSE7OqoQMRM%2FxuubFKBD%2FzLKaCGVdlcSUfAoEEblpv50gtNo3%2Bce4uOsboZ%2FUruSbAXVCTHvG&X-Amz-Signature=489180639211a0ad3fe9a3b161186c088c60de3fca7ebbf3c928de934ca1359c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMO5YHE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGe1y5ic09pvbXWu%2F2Np%2B43lZTWOKXjpktlm5DBnqkWHAiAsFYqWVzzE017lTq%2Finmr41nFJ9tl%2BzZ3LkeISZaOqwSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2HZoV46kBGhs127KtwDKbfO9%2F%2BxAUnwDUjZ%2FzgrGjyaIBWC0EOjf7b9wvOVDhFfjkaImLYiVChFx%2BUW%2FUqDtO0KNUCDd07qpASB4fXN5JnzNf9VuRnJwrPGdWNRbcQbXKn9cQfUV8EYpWMvWFUOdFfDd6ILo5sG6YlvaCS99H9AhXSwwHseHl6qX2GANGGmmerV1LMvHwje%2F1O2jF4vnj0zgVyoMbWPhlmO3jFVaYA1GEsLOlUPno07i4rn8XV9CXlj2oMyJmIyR1fKbTHdCWMT%2BkdQOsQID2EPQl8ZL1RTKYdQb5BuB7jIdjB51Uz6TtPcHxrLGhOE7rnF2ER1ZH45ei7CuuKIrjjk7uLeZRGzhF%2Bd8wu3CNCkABxOjZIUKZlqL%2BUuce3tKzt3iy%2FT%2FnZVvvuJ2H1B3f7XJqUZuQt1O7VWlg%2F%2BDzcnSz2EmpIDq675AD7h%2FOwA6FRMydOWBwtRh%2BtlSGO9%2FqtRMnxr%2F%2Fowfcn8%2BfKcCDY0Ejhl%2B2pPomxrqdF6Pjbzz8cnN5J%2Bq7kd%2BHQiIWDhQ4dYnYF4R74Z6r%2FbAlkzgu3EcXF%2FRgG9gF4Z7p2Jtnp6NAuU01L6DhTpRfS7QtzPHm0YaXaRG5Vo0oIDuLXCira7cmo6ABIB3USFrquvwAG37y4w25fcygY6pgHcq1lAUsjaqoBTRRpniACXGcrY7Wy7o%2Bi1PLOQtMXCHyIag5CntYxE9dk3v%2BGs%2BOXDs2YgQueFEzDsRvDvYVkMKnIPIfYHXDLXi2Zglbm6rBgwwHlS46gs5JjcI%2B61gxNvKc5GxRYiJCuFKuwg10FrSE7OqoQMRM%2FxuubFKBD%2FzLKaCGVdlcSUfAoEEblpv50gtNo3%2Bce4uOsboZ%2FUruSbAXVCTHvG&X-Amz-Signature=61aed1abd89313b2183bc51483e564ab968c1a9674bc6b6524ae9c629ab86f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMO5YHE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGe1y5ic09pvbXWu%2F2Np%2B43lZTWOKXjpktlm5DBnqkWHAiAsFYqWVzzE017lTq%2Finmr41nFJ9tl%2BzZ3LkeISZaOqwSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2HZoV46kBGhs127KtwDKbfO9%2F%2BxAUnwDUjZ%2FzgrGjyaIBWC0EOjf7b9wvOVDhFfjkaImLYiVChFx%2BUW%2FUqDtO0KNUCDd07qpASB4fXN5JnzNf9VuRnJwrPGdWNRbcQbXKn9cQfUV8EYpWMvWFUOdFfDd6ILo5sG6YlvaCS99H9AhXSwwHseHl6qX2GANGGmmerV1LMvHwje%2F1O2jF4vnj0zgVyoMbWPhlmO3jFVaYA1GEsLOlUPno07i4rn8XV9CXlj2oMyJmIyR1fKbTHdCWMT%2BkdQOsQID2EPQl8ZL1RTKYdQb5BuB7jIdjB51Uz6TtPcHxrLGhOE7rnF2ER1ZH45ei7CuuKIrjjk7uLeZRGzhF%2Bd8wu3CNCkABxOjZIUKZlqL%2BUuce3tKzt3iy%2FT%2FnZVvvuJ2H1B3f7XJqUZuQt1O7VWlg%2F%2BDzcnSz2EmpIDq675AD7h%2FOwA6FRMydOWBwtRh%2BtlSGO9%2FqtRMnxr%2F%2Fowfcn8%2BfKcCDY0Ejhl%2B2pPomxrqdF6Pjbzz8cnN5J%2Bq7kd%2BHQiIWDhQ4dYnYF4R74Z6r%2FbAlkzgu3EcXF%2FRgG9gF4Z7p2Jtnp6NAuU01L6DhTpRfS7QtzPHm0YaXaRG5Vo0oIDuLXCira7cmo6ABIB3USFrquvwAG37y4w25fcygY6pgHcq1lAUsjaqoBTRRpniACXGcrY7Wy7o%2Bi1PLOQtMXCHyIag5CntYxE9dk3v%2BGs%2BOXDs2YgQueFEzDsRvDvYVkMKnIPIfYHXDLXi2Zglbm6rBgwwHlS46gs5JjcI%2B61gxNvKc5GxRYiJCuFKuwg10FrSE7OqoQMRM%2FxuubFKBD%2FzLKaCGVdlcSUfAoEEblpv50gtNo3%2Bce4uOsboZ%2FUruSbAXVCTHvG&X-Amz-Signature=8205f772f4f1f4212c4de6fe5222ab8918cec7144d2a69ba749c7bf8df378bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

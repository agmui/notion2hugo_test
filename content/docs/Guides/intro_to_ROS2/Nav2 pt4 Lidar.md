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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3QJWEN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFqdCbrEYCR%2FzkodVkwFFx5wnydQt%2BAH1dJR%2BY2dPV3AIhAMw6XhYJ%2FHyOxJNiKdWcz163uYpS3G7xgGFOwjfiY%2B%2FAKv8DCFkQABoMNjM3NDIzMTgzODA1IgwQSPfYHFe%2F4Agehcsq3AMQFhfZdHEDRzp2mevg3JIh9edtl4tYAUqjCyzIjh2cnFCsi0MbMEhdXFPNKbsqTCcmS4kfXRXi9VexQqtecqAsw9zByTg02XibJ7BNYpSNg4%2Bhv29PbLJk3dGrt23MucnswtyKIinZ615l2CpYvuUYCG26UITrUpVlCjhe%2BE0pPJqP5WDnK4mju2t2Eh7I35WYxMBwVDRWRpchuEn63eEYQ487nwun7lfgWIhdOaej1%2FBvIsg57Osx3oe6lBWX0%2BoXIQV95gcU%2BATqoM2tlrTmPRBXeuVIOFff12k66YSRQ3GWv48eQ7bxR320QIPCALxasx3ZVkJGNhFbFqWm81Ws5JNrreihxVk10f7GTBNtN3v6CfnYmLOJWFUPgi21iHj7HMhn44dxY6euUCBD4vs%2F6JMEAxArutVcAVy%2Bfi5dfl5TnbJ5%2FhUpfG3K9uZVg%2BPXIm6nTIXnc0wCsSn%2BsGBZIhQEFLIALf83S%2FlbaBuPw0r150lF7dj8lMST2b9pkgG%2Brcc4z5CS0Iea4gLr9kadck3DMYC92NybA32SW2kPrWCC2OpssPxuxMNaXsP2sKv6pFflPEGnyt68bRDDlt8YBOT6KPW8pTVaJgLHylXAh%2F9qQLfqK4iIqu6tdDCFy4LKBjqkARPYmgyv5Gmdu%2BIBST7%2FvrSGclCmLZSRh973Uwf1o1W9WSc7p8vm3bp2wd%2FtrusKDRkdBFU1bzOggJYf0taSfuvDmP3Nv9GZ0GGD9VC8NGG2EGlvQJRXuJO%2B2lKcBYH0C3myzTa1m78FHbHKs61zpK0e02W%2FNsKf95X4DT7t6xjZIQRDsjDPLLajZnZHX1FunQvaQ%2FVLT3VFPjkn4%2FJSKDICnY2j&X-Amz-Signature=801bc7ee3d67f660d80dbd93aa0d27c7047f023b4172a7247a76e71646e19e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQOCZZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BekmdJk3RdKYuaBVWmIZ4H1M5YHlZkG4RCblDqZg%2BnAIhAKViZyeBqUANqx0fplre%2BJ1q%2B%2FO9K9FlSOA0Sp%2F5Z%2Fm7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxRHfP1tu5lAHzaWZkq3AMM7OLFwC0g%2Fv9vcJtPH08OutRxkQbpIGo%2Fa9SD4KjDC1Z3K2l0CkA3X1C5TvXvsHt5D1G5d3K%2BLestgPFNt2o09eQELdmof%2FdH8nDVV5S7qGpiXmj17BeWeuyASgeJfV%2FdpNL4OX8ilbI3GRVyevvb54rYYAU71YnZT2b%2FP8M9CkxvEh0icDhW%2FJLgVoGDoxIZrzokyxi6yLWwviEVlAFq5c31iL0y9a5AyRQTINO4e55d%2FC%2BfjmS%2BM%2Fe7IfdaegQbB%2FG3nKvz0yX02vJ5pHLW%2BCAjJcTETMj20x9FuzQfsJlrLmwBLeSVUTbLr3e%2BqLWuKONiUKvFzGVuzjf54mRviS2j7%2BQyaDzz2Xbdmxa%2F2IavG1MVYsGhLZuAQkVIafOxv30hOE6Tq1giZBnimfvoSek2%2FIb1XRd%2F9gTh0ITAcsGcxTcA7UT0G9Yo3zu%2B8FnsREUPfsg1eqrVjTciquE2koCwvcs82dDCdcSBI50U99rQuzxtJNXHvWev8b%2B2%2BMqWxS08F1vuveenTylxAQATLqAcIxx04sfcxo%2BWX01Xu9D2cr4LYmtsxzZaBOLrc3GXpJMMejvzb0eRXq0EvhVaU%2BeFim0oWKEetQPRUUhCXa4QnrvS3cRrOpiTRjCMy4LKBjqkAfHp6XWRaxh%2BWW6AKbB4ar%2FAxuQyHl9jF27dJmQq0kGa9FkLZPymoGcOR%2BojurscV%2BcvATKVkkh0LYp9LDrfs0G%2BebJL59ZVo9yHTiTQ7uX7%2F51jMmnWy5bO%2BtKyZ8j5Kgs4uqWz48%2FlfLdvB4XYfhyMPXJTIPhRUx9zM43UbDu6K5OeUc331eG%2BtbTl2eeqcEX2snS00uZ5CUl50GtNK78uHrNd&X-Amz-Signature=9badf9c43ddd5406b5a095472b6e983484b440905359f22dff61551a5664dcc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQOCZZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BekmdJk3RdKYuaBVWmIZ4H1M5YHlZkG4RCblDqZg%2BnAIhAKViZyeBqUANqx0fplre%2BJ1q%2B%2FO9K9FlSOA0Sp%2F5Z%2Fm7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxRHfP1tu5lAHzaWZkq3AMM7OLFwC0g%2Fv9vcJtPH08OutRxkQbpIGo%2Fa9SD4KjDC1Z3K2l0CkA3X1C5TvXvsHt5D1G5d3K%2BLestgPFNt2o09eQELdmof%2FdH8nDVV5S7qGpiXmj17BeWeuyASgeJfV%2FdpNL4OX8ilbI3GRVyevvb54rYYAU71YnZT2b%2FP8M9CkxvEh0icDhW%2FJLgVoGDoxIZrzokyxi6yLWwviEVlAFq5c31iL0y9a5AyRQTINO4e55d%2FC%2BfjmS%2BM%2Fe7IfdaegQbB%2FG3nKvz0yX02vJ5pHLW%2BCAjJcTETMj20x9FuzQfsJlrLmwBLeSVUTbLr3e%2BqLWuKONiUKvFzGVuzjf54mRviS2j7%2BQyaDzz2Xbdmxa%2F2IavG1MVYsGhLZuAQkVIafOxv30hOE6Tq1giZBnimfvoSek2%2FIb1XRd%2F9gTh0ITAcsGcxTcA7UT0G9Yo3zu%2B8FnsREUPfsg1eqrVjTciquE2koCwvcs82dDCdcSBI50U99rQuzxtJNXHvWev8b%2B2%2BMqWxS08F1vuveenTylxAQATLqAcIxx04sfcxo%2BWX01Xu9D2cr4LYmtsxzZaBOLrc3GXpJMMejvzb0eRXq0EvhVaU%2BeFim0oWKEetQPRUUhCXa4QnrvS3cRrOpiTRjCMy4LKBjqkAfHp6XWRaxh%2BWW6AKbB4ar%2FAxuQyHl9jF27dJmQq0kGa9FkLZPymoGcOR%2BojurscV%2BcvATKVkkh0LYp9LDrfs0G%2BebJL59ZVo9yHTiTQ7uX7%2F51jMmnWy5bO%2BtKyZ8j5Kgs4uqWz48%2FlfLdvB4XYfhyMPXJTIPhRUx9zM43UbDu6K5OeUc331eG%2BtbTl2eeqcEX2snS00uZ5CUl50GtNK78uHrNd&X-Amz-Signature=09bab733ed37f37031b86db725b46d2914ce207990ce45f9cb914d60bc302de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQOCZZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BekmdJk3RdKYuaBVWmIZ4H1M5YHlZkG4RCblDqZg%2BnAIhAKViZyeBqUANqx0fplre%2BJ1q%2B%2FO9K9FlSOA0Sp%2F5Z%2Fm7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxRHfP1tu5lAHzaWZkq3AMM7OLFwC0g%2Fv9vcJtPH08OutRxkQbpIGo%2Fa9SD4KjDC1Z3K2l0CkA3X1C5TvXvsHt5D1G5d3K%2BLestgPFNt2o09eQELdmof%2FdH8nDVV5S7qGpiXmj17BeWeuyASgeJfV%2FdpNL4OX8ilbI3GRVyevvb54rYYAU71YnZT2b%2FP8M9CkxvEh0icDhW%2FJLgVoGDoxIZrzokyxi6yLWwviEVlAFq5c31iL0y9a5AyRQTINO4e55d%2FC%2BfjmS%2BM%2Fe7IfdaegQbB%2FG3nKvz0yX02vJ5pHLW%2BCAjJcTETMj20x9FuzQfsJlrLmwBLeSVUTbLr3e%2BqLWuKONiUKvFzGVuzjf54mRviS2j7%2BQyaDzz2Xbdmxa%2F2IavG1MVYsGhLZuAQkVIafOxv30hOE6Tq1giZBnimfvoSek2%2FIb1XRd%2F9gTh0ITAcsGcxTcA7UT0G9Yo3zu%2B8FnsREUPfsg1eqrVjTciquE2koCwvcs82dDCdcSBI50U99rQuzxtJNXHvWev8b%2B2%2BMqWxS08F1vuveenTylxAQATLqAcIxx04sfcxo%2BWX01Xu9D2cr4LYmtsxzZaBOLrc3GXpJMMejvzb0eRXq0EvhVaU%2BeFim0oWKEetQPRUUhCXa4QnrvS3cRrOpiTRjCMy4LKBjqkAfHp6XWRaxh%2BWW6AKbB4ar%2FAxuQyHl9jF27dJmQq0kGa9FkLZPymoGcOR%2BojurscV%2BcvATKVkkh0LYp9LDrfs0G%2BebJL59ZVo9yHTiTQ7uX7%2F51jMmnWy5bO%2BtKyZ8j5Kgs4uqWz48%2FlfLdvB4XYfhyMPXJTIPhRUx9zM43UbDu6K5OeUc331eG%2BtbTl2eeqcEX2snS00uZ5CUl50GtNK78uHrNd&X-Amz-Signature=cc4e35181121b6636ec998c3d1e2a80e51659f89b57cb2e3d1fc73d4c3b7a89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQOCZZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BekmdJk3RdKYuaBVWmIZ4H1M5YHlZkG4RCblDqZg%2BnAIhAKViZyeBqUANqx0fplre%2BJ1q%2B%2FO9K9FlSOA0Sp%2F5Z%2Fm7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxRHfP1tu5lAHzaWZkq3AMM7OLFwC0g%2Fv9vcJtPH08OutRxkQbpIGo%2Fa9SD4KjDC1Z3K2l0CkA3X1C5TvXvsHt5D1G5d3K%2BLestgPFNt2o09eQELdmof%2FdH8nDVV5S7qGpiXmj17BeWeuyASgeJfV%2FdpNL4OX8ilbI3GRVyevvb54rYYAU71YnZT2b%2FP8M9CkxvEh0icDhW%2FJLgVoGDoxIZrzokyxi6yLWwviEVlAFq5c31iL0y9a5AyRQTINO4e55d%2FC%2BfjmS%2BM%2Fe7IfdaegQbB%2FG3nKvz0yX02vJ5pHLW%2BCAjJcTETMj20x9FuzQfsJlrLmwBLeSVUTbLr3e%2BqLWuKONiUKvFzGVuzjf54mRviS2j7%2BQyaDzz2Xbdmxa%2F2IavG1MVYsGhLZuAQkVIafOxv30hOE6Tq1giZBnimfvoSek2%2FIb1XRd%2F9gTh0ITAcsGcxTcA7UT0G9Yo3zu%2B8FnsREUPfsg1eqrVjTciquE2koCwvcs82dDCdcSBI50U99rQuzxtJNXHvWev8b%2B2%2BMqWxS08F1vuveenTylxAQATLqAcIxx04sfcxo%2BWX01Xu9D2cr4LYmtsxzZaBOLrc3GXpJMMejvzb0eRXq0EvhVaU%2BeFim0oWKEetQPRUUhCXa4QnrvS3cRrOpiTRjCMy4LKBjqkAfHp6XWRaxh%2BWW6AKbB4ar%2FAxuQyHl9jF27dJmQq0kGa9FkLZPymoGcOR%2BojurscV%2BcvATKVkkh0LYp9LDrfs0G%2BebJL59ZVo9yHTiTQ7uX7%2F51jMmnWy5bO%2BtKyZ8j5Kgs4uqWz48%2FlfLdvB4XYfhyMPXJTIPhRUx9zM43UbDu6K5OeUc331eG%2BtbTl2eeqcEX2snS00uZ5CUl50GtNK78uHrNd&X-Amz-Signature=c507307d96a4415d45b1ca83dd42399bfbb3aff609b66e66930b7bba9ea99476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQOCZZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BekmdJk3RdKYuaBVWmIZ4H1M5YHlZkG4RCblDqZg%2BnAIhAKViZyeBqUANqx0fplre%2BJ1q%2B%2FO9K9FlSOA0Sp%2F5Z%2Fm7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxRHfP1tu5lAHzaWZkq3AMM7OLFwC0g%2Fv9vcJtPH08OutRxkQbpIGo%2Fa9SD4KjDC1Z3K2l0CkA3X1C5TvXvsHt5D1G5d3K%2BLestgPFNt2o09eQELdmof%2FdH8nDVV5S7qGpiXmj17BeWeuyASgeJfV%2FdpNL4OX8ilbI3GRVyevvb54rYYAU71YnZT2b%2FP8M9CkxvEh0icDhW%2FJLgVoGDoxIZrzokyxi6yLWwviEVlAFq5c31iL0y9a5AyRQTINO4e55d%2FC%2BfjmS%2BM%2Fe7IfdaegQbB%2FG3nKvz0yX02vJ5pHLW%2BCAjJcTETMj20x9FuzQfsJlrLmwBLeSVUTbLr3e%2BqLWuKONiUKvFzGVuzjf54mRviS2j7%2BQyaDzz2Xbdmxa%2F2IavG1MVYsGhLZuAQkVIafOxv30hOE6Tq1giZBnimfvoSek2%2FIb1XRd%2F9gTh0ITAcsGcxTcA7UT0G9Yo3zu%2B8FnsREUPfsg1eqrVjTciquE2koCwvcs82dDCdcSBI50U99rQuzxtJNXHvWev8b%2B2%2BMqWxS08F1vuveenTylxAQATLqAcIxx04sfcxo%2BWX01Xu9D2cr4LYmtsxzZaBOLrc3GXpJMMejvzb0eRXq0EvhVaU%2BeFim0oWKEetQPRUUhCXa4QnrvS3cRrOpiTRjCMy4LKBjqkAfHp6XWRaxh%2BWW6AKbB4ar%2FAxuQyHl9jF27dJmQq0kGa9FkLZPymoGcOR%2BojurscV%2BcvATKVkkh0LYp9LDrfs0G%2BebJL59ZVo9yHTiTQ7uX7%2F51jMmnWy5bO%2BtKyZ8j5Kgs4uqWz48%2FlfLdvB4XYfhyMPXJTIPhRUx9zM43UbDu6K5OeUc331eG%2BtbTl2eeqcEX2snS00uZ5CUl50GtNK78uHrNd&X-Amz-Signature=90b51756636ef81c460ea76dd4b1eaf6a880a447db5e6aa05326d7765c4077c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQOCZZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BekmdJk3RdKYuaBVWmIZ4H1M5YHlZkG4RCblDqZg%2BnAIhAKViZyeBqUANqx0fplre%2BJ1q%2B%2FO9K9FlSOA0Sp%2F5Z%2Fm7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxRHfP1tu5lAHzaWZkq3AMM7OLFwC0g%2Fv9vcJtPH08OutRxkQbpIGo%2Fa9SD4KjDC1Z3K2l0CkA3X1C5TvXvsHt5D1G5d3K%2BLestgPFNt2o09eQELdmof%2FdH8nDVV5S7qGpiXmj17BeWeuyASgeJfV%2FdpNL4OX8ilbI3GRVyevvb54rYYAU71YnZT2b%2FP8M9CkxvEh0icDhW%2FJLgVoGDoxIZrzokyxi6yLWwviEVlAFq5c31iL0y9a5AyRQTINO4e55d%2FC%2BfjmS%2BM%2Fe7IfdaegQbB%2FG3nKvz0yX02vJ5pHLW%2BCAjJcTETMj20x9FuzQfsJlrLmwBLeSVUTbLr3e%2BqLWuKONiUKvFzGVuzjf54mRviS2j7%2BQyaDzz2Xbdmxa%2F2IavG1MVYsGhLZuAQkVIafOxv30hOE6Tq1giZBnimfvoSek2%2FIb1XRd%2F9gTh0ITAcsGcxTcA7UT0G9Yo3zu%2B8FnsREUPfsg1eqrVjTciquE2koCwvcs82dDCdcSBI50U99rQuzxtJNXHvWev8b%2B2%2BMqWxS08F1vuveenTylxAQATLqAcIxx04sfcxo%2BWX01Xu9D2cr4LYmtsxzZaBOLrc3GXpJMMejvzb0eRXq0EvhVaU%2BeFim0oWKEetQPRUUhCXa4QnrvS3cRrOpiTRjCMy4LKBjqkAfHp6XWRaxh%2BWW6AKbB4ar%2FAxuQyHl9jF27dJmQq0kGa9FkLZPymoGcOR%2BojurscV%2BcvATKVkkh0LYp9LDrfs0G%2BebJL59ZVo9yHTiTQ7uX7%2F51jMmnWy5bO%2BtKyZ8j5Kgs4uqWz48%2FlfLdvB4XYfhyMPXJTIPhRUx9zM43UbDu6K5OeUc331eG%2BtbTl2eeqcEX2snS00uZ5CUl50GtNK78uHrNd&X-Amz-Signature=24648a51f5cd1cce45d75ecc364af1a7d3feaeb328fa2ea71e247c892c5c7818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQOCZZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BekmdJk3RdKYuaBVWmIZ4H1M5YHlZkG4RCblDqZg%2BnAIhAKViZyeBqUANqx0fplre%2BJ1q%2B%2FO9K9FlSOA0Sp%2F5Z%2Fm7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxRHfP1tu5lAHzaWZkq3AMM7OLFwC0g%2Fv9vcJtPH08OutRxkQbpIGo%2Fa9SD4KjDC1Z3K2l0CkA3X1C5TvXvsHt5D1G5d3K%2BLestgPFNt2o09eQELdmof%2FdH8nDVV5S7qGpiXmj17BeWeuyASgeJfV%2FdpNL4OX8ilbI3GRVyevvb54rYYAU71YnZT2b%2FP8M9CkxvEh0icDhW%2FJLgVoGDoxIZrzokyxi6yLWwviEVlAFq5c31iL0y9a5AyRQTINO4e55d%2FC%2BfjmS%2BM%2Fe7IfdaegQbB%2FG3nKvz0yX02vJ5pHLW%2BCAjJcTETMj20x9FuzQfsJlrLmwBLeSVUTbLr3e%2BqLWuKONiUKvFzGVuzjf54mRviS2j7%2BQyaDzz2Xbdmxa%2F2IavG1MVYsGhLZuAQkVIafOxv30hOE6Tq1giZBnimfvoSek2%2FIb1XRd%2F9gTh0ITAcsGcxTcA7UT0G9Yo3zu%2B8FnsREUPfsg1eqrVjTciquE2koCwvcs82dDCdcSBI50U99rQuzxtJNXHvWev8b%2B2%2BMqWxS08F1vuveenTylxAQATLqAcIxx04sfcxo%2BWX01Xu9D2cr4LYmtsxzZaBOLrc3GXpJMMejvzb0eRXq0EvhVaU%2BeFim0oWKEetQPRUUhCXa4QnrvS3cRrOpiTRjCMy4LKBjqkAfHp6XWRaxh%2BWW6AKbB4ar%2FAxuQyHl9jF27dJmQq0kGa9FkLZPymoGcOR%2BojurscV%2BcvATKVkkh0LYp9LDrfs0G%2BebJL59ZVo9yHTiTQ7uX7%2F51jMmnWy5bO%2BtKyZ8j5Kgs4uqWz48%2FlfLdvB4XYfhyMPXJTIPhRUx9zM43UbDu6K5OeUc331eG%2BtbTl2eeqcEX2snS00uZ5CUl50GtNK78uHrNd&X-Amz-Signature=c0855ef999b4eff72f555a60b8b04eab7b83828465124cd506135a2b1d8e6b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQOCZZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BekmdJk3RdKYuaBVWmIZ4H1M5YHlZkG4RCblDqZg%2BnAIhAKViZyeBqUANqx0fplre%2BJ1q%2B%2FO9K9FlSOA0Sp%2F5Z%2Fm7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxRHfP1tu5lAHzaWZkq3AMM7OLFwC0g%2Fv9vcJtPH08OutRxkQbpIGo%2Fa9SD4KjDC1Z3K2l0CkA3X1C5TvXvsHt5D1G5d3K%2BLestgPFNt2o09eQELdmof%2FdH8nDVV5S7qGpiXmj17BeWeuyASgeJfV%2FdpNL4OX8ilbI3GRVyevvb54rYYAU71YnZT2b%2FP8M9CkxvEh0icDhW%2FJLgVoGDoxIZrzokyxi6yLWwviEVlAFq5c31iL0y9a5AyRQTINO4e55d%2FC%2BfjmS%2BM%2Fe7IfdaegQbB%2FG3nKvz0yX02vJ5pHLW%2BCAjJcTETMj20x9FuzQfsJlrLmwBLeSVUTbLr3e%2BqLWuKONiUKvFzGVuzjf54mRviS2j7%2BQyaDzz2Xbdmxa%2F2IavG1MVYsGhLZuAQkVIafOxv30hOE6Tq1giZBnimfvoSek2%2FIb1XRd%2F9gTh0ITAcsGcxTcA7UT0G9Yo3zu%2B8FnsREUPfsg1eqrVjTciquE2koCwvcs82dDCdcSBI50U99rQuzxtJNXHvWev8b%2B2%2BMqWxS08F1vuveenTylxAQATLqAcIxx04sfcxo%2BWX01Xu9D2cr4LYmtsxzZaBOLrc3GXpJMMejvzb0eRXq0EvhVaU%2BeFim0oWKEetQPRUUhCXa4QnrvS3cRrOpiTRjCMy4LKBjqkAfHp6XWRaxh%2BWW6AKbB4ar%2FAxuQyHl9jF27dJmQq0kGa9FkLZPymoGcOR%2BojurscV%2BcvATKVkkh0LYp9LDrfs0G%2BebJL59ZVo9yHTiTQ7uX7%2F51jMmnWy5bO%2BtKyZ8j5Kgs4uqWz48%2FlfLdvB4XYfhyMPXJTIPhRUx9zM43UbDu6K5OeUc331eG%2BtbTl2eeqcEX2snS00uZ5CUl50GtNK78uHrNd&X-Amz-Signature=a7f90a6e64e7bfb49eb4038077870473cdd1eb7189f05a43bbeac1a9b9b19775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQOCZZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BekmdJk3RdKYuaBVWmIZ4H1M5YHlZkG4RCblDqZg%2BnAIhAKViZyeBqUANqx0fplre%2BJ1q%2B%2FO9K9FlSOA0Sp%2F5Z%2Fm7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxRHfP1tu5lAHzaWZkq3AMM7OLFwC0g%2Fv9vcJtPH08OutRxkQbpIGo%2Fa9SD4KjDC1Z3K2l0CkA3X1C5TvXvsHt5D1G5d3K%2BLestgPFNt2o09eQELdmof%2FdH8nDVV5S7qGpiXmj17BeWeuyASgeJfV%2FdpNL4OX8ilbI3GRVyevvb54rYYAU71YnZT2b%2FP8M9CkxvEh0icDhW%2FJLgVoGDoxIZrzokyxi6yLWwviEVlAFq5c31iL0y9a5AyRQTINO4e55d%2FC%2BfjmS%2BM%2Fe7IfdaegQbB%2FG3nKvz0yX02vJ5pHLW%2BCAjJcTETMj20x9FuzQfsJlrLmwBLeSVUTbLr3e%2BqLWuKONiUKvFzGVuzjf54mRviS2j7%2BQyaDzz2Xbdmxa%2F2IavG1MVYsGhLZuAQkVIafOxv30hOE6Tq1giZBnimfvoSek2%2FIb1XRd%2F9gTh0ITAcsGcxTcA7UT0G9Yo3zu%2B8FnsREUPfsg1eqrVjTciquE2koCwvcs82dDCdcSBI50U99rQuzxtJNXHvWev8b%2B2%2BMqWxS08F1vuveenTylxAQATLqAcIxx04sfcxo%2BWX01Xu9D2cr4LYmtsxzZaBOLrc3GXpJMMejvzb0eRXq0EvhVaU%2BeFim0oWKEetQPRUUhCXa4QnrvS3cRrOpiTRjCMy4LKBjqkAfHp6XWRaxh%2BWW6AKbB4ar%2FAxuQyHl9jF27dJmQq0kGa9FkLZPymoGcOR%2BojurscV%2BcvATKVkkh0LYp9LDrfs0G%2BebJL59ZVo9yHTiTQ7uX7%2F51jMmnWy5bO%2BtKyZ8j5Kgs4uqWz48%2FlfLdvB4XYfhyMPXJTIPhRUx9zM43UbDu6K5OeUc331eG%2BtbTl2eeqcEX2snS00uZ5CUl50GtNK78uHrNd&X-Amz-Signature=db31e61eaaff712642a8b9ef3f56268d4352aafaa1333d07df898401fe55d122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQOCZZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BekmdJk3RdKYuaBVWmIZ4H1M5YHlZkG4RCblDqZg%2BnAIhAKViZyeBqUANqx0fplre%2BJ1q%2B%2FO9K9FlSOA0Sp%2F5Z%2Fm7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxRHfP1tu5lAHzaWZkq3AMM7OLFwC0g%2Fv9vcJtPH08OutRxkQbpIGo%2Fa9SD4KjDC1Z3K2l0CkA3X1C5TvXvsHt5D1G5d3K%2BLestgPFNt2o09eQELdmof%2FdH8nDVV5S7qGpiXmj17BeWeuyASgeJfV%2FdpNL4OX8ilbI3GRVyevvb54rYYAU71YnZT2b%2FP8M9CkxvEh0icDhW%2FJLgVoGDoxIZrzokyxi6yLWwviEVlAFq5c31iL0y9a5AyRQTINO4e55d%2FC%2BfjmS%2BM%2Fe7IfdaegQbB%2FG3nKvz0yX02vJ5pHLW%2BCAjJcTETMj20x9FuzQfsJlrLmwBLeSVUTbLr3e%2BqLWuKONiUKvFzGVuzjf54mRviS2j7%2BQyaDzz2Xbdmxa%2F2IavG1MVYsGhLZuAQkVIafOxv30hOE6Tq1giZBnimfvoSek2%2FIb1XRd%2F9gTh0ITAcsGcxTcA7UT0G9Yo3zu%2B8FnsREUPfsg1eqrVjTciquE2koCwvcs82dDCdcSBI50U99rQuzxtJNXHvWev8b%2B2%2BMqWxS08F1vuveenTylxAQATLqAcIxx04sfcxo%2BWX01Xu9D2cr4LYmtsxzZaBOLrc3GXpJMMejvzb0eRXq0EvhVaU%2BeFim0oWKEetQPRUUhCXa4QnrvS3cRrOpiTRjCMy4LKBjqkAfHp6XWRaxh%2BWW6AKbB4ar%2FAxuQyHl9jF27dJmQq0kGa9FkLZPymoGcOR%2BojurscV%2BcvATKVkkh0LYp9LDrfs0G%2BebJL59ZVo9yHTiTQ7uX7%2F51jMmnWy5bO%2BtKyZ8j5Kgs4uqWz48%2FlfLdvB4XYfhyMPXJTIPhRUx9zM43UbDu6K5OeUc331eG%2BtbTl2eeqcEX2snS00uZ5CUl50GtNK78uHrNd&X-Amz-Signature=c507307d96a4415d45b1ca83dd42399bfbb3aff609b66e66930b7bba9ea99476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

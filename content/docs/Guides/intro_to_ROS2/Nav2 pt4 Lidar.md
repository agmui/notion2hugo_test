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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BOOX74%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAaoqPtrPehLTOCbsUS0q5Qw9sF0B2zohFwPaf0LfCBQIhAJvvd4qtOJyTxV2aZMt9bnsTNOgLGQBQpL9v5o1faT5ZKv8DCHMQABoMNjM3NDIzMTgzODA1Igzg4MqyIfVkJiKc5%2B8q3ANaURyNFC1aDKpHYxnhHyLu%2F%2FQwcrcbIC%2F3iDOKj2NWA7RB6FE5ylJftnTa9MrZ5etF87%2FBPdszQ8bfqWYP64hVUKftqBlAWkKK%2FZbuuojrIWPTgd5fG1ENJ2Cai%2FWFtJVtj8THa74LbSl5t2%2FtOzDzXmiw3H1fi37fYklwtZl9FjpgUKZe%2BbxVCsK4uWkLAMlfTMyYF9%2BPIhzk8iHLQ1fWdsF4WXpLKwWGG7YBVtL31LiqOKjwo5JJ25ozKg%2FoM838cEiclhNpwCABg8LXP%2FeMKg9x7kdJYAEV5t%2FsDM1TU4VEXFtrrM3sDiJax%2FNwraSHLOSNclFKZoosKO9n%2BkS6lUQJsvc1QLfqDb6Lq42YtddQJNHgkLXpthKfHUIkrnUHVt7XuH02zczSju0jkodFO37TPbk7RI4HSCa0EYO6QyGfTZxTaZ%2BA%2B6yUNlA7FD07O7uwn8AFD%2FruFZR52mT3dp9r3ABl9c5MNjA1UgkKrsuFssKmjN4Ou9kVqoF9j7T%2F5u7QmL06Ej0YKoON1mA3o5XxI4E0uk3lxSo2Tq%2BQFnQRMKqyBNWxMtF5TCpT3IJQV0ogBGq6CDAJgdS2ZsbxeasHXRkvyU7oBR4kuonmUdFc7dgmM1bYBUcwaTCa%2BtPQBjqkATWpwcCRQwuPinSIKq8orduQdDXSgKoc5pqv1xHTLy%2B9s96jIkIcEGzmWnl0LRRKu%2BviVs9UVqTufdv95zapoBd3ubV1ON9GtSFS0vE9TEViPVK%2FCOi1XN6GTcIpKCpEwOUXZaaHk9EaxLD4AaNspPw096blip%2BHxT0WLC9R9SnqTB5YrWLHYMsWx7AQYSCf5P0E0ukZDsDtY85PV6s2Pzg1rFVs&X-Amz-Signature=a8ae48597de87e1d1c6cc7f68bbac59a214ae6cb088fe3c74e1feb4cdde63c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=7c10bac7d5892289922c0e4902e644064db1799bba9d85c6ad079194dafa2d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=4b5acdd4eabca1933b9ee5fef69098322ab30e90f13e953437fe08c70ef8d6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=425ae36331159ba976f8b2289feacdbeff3004a493258433094edf8e0a679bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=709dcd8ff3b9284c94f4b79d79551bb330e6475c03a355edd1b2e16f310cbe95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=c6372d68c766984280840bdc8bf255ff4f187f0536d57915b82425ecf64fa0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=b82de48d00a1e97246267b473a282bd8ad149d0f63efbc0687b0f70dc5d56fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=98bad7ddf78e08d7ec1f5b90249d98b62332b12cb502dc93627a3ac5d8a86a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=5ef24d68bad80acc7e4c771906bab11ff038c4605ec68889c37a4812fb80e18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=ed638a8b6e779fbc55221165328f3bcacc8becf2cc90f8509c0391d1c47d99e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7PDGBN%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvG8csF2M7tO4631BoD6MI7M2xpXWmgtmLiKj0wLaqtAiEA%2BYVgF4cmIJ82l1JNTJq0JLzjy%2FYAZWv5RtmJUtSRyPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE%2FyR9AeGyEDjKimdircA3YBVWmS%2BUpdOtcyHYnvaaC5GgHWp9XOiFCZSjiGcrAiE2v3%2BMzmzOyNWu5c%2BE3TU5NmpQWVp4BnNmpA491dta10pC5xsVjzdiIjE1gYY9iMlyZnRILiOp9uV9Og9n0zUpEbMuCpH467ZYGQZfdzGYt86tBmR914pcx6A544bNgnxgHBAOtgzDQJ1BdE1huSle8cguBet9dJ1dA61%2F0qyv%2FSEgQzHpfDdoFLiKxbEIt3of2U%2FWgPjlB2LD6je19KPp%2B7MI0Dp8dfWGgqP7jS0uKOb%2BKQszjeyWHwCvx6n0U%2BS5S8scLEczTWvyep%2Bsk825hsttj9inDCNuZFl8f%2FAhUSrbaM59A%2F%2Bx08%2FjOk%2BsR7CX1L6PB0w5vZZuqUfIIVQflIN8kfDaLeOcBWwNcRx9QeqZlYUjzukKf%2BnmQgA7taW%2FKw1W341lBLpu%2FXzjEmAkuMRCJg0VniyOJY5tez3zHtRj6q2SD9pawa0SPhWVmcmC%2BH%2BMZylDy3ZFurSZlMPdztmnWPfIRWSu9ELVHBOKrFwUegYNC%2FKqwkNqTGNAjQLAFxnQnPFhzDQdhDwPsv%2FJPTYevVliyUMbPliEgUMoKhckzkd60QOze9D38cvzAV%2BfThaUvzi60Z5oT%2BMLr409AGOqUB5sFe3tGhWwwx%2Fo%2Bm8Ol4Wb7XLLc6tZpiHaUBsW6%2FrkcjHutyS7nv9NXSSbwmC5q389lThr1TTpyr%2FSv9gQN3TOsihJV1lyeaSObZD38vPNNuuwuibdRyCtsPDFLExkpvfzKBimUFGVpY90bZSbK2Yo6%2FEzqKWWWDWxjeaJxG8Mqiy9eXl1RykkGTdPWFLN2U2beDAp0qli3zKuTPRy%2FWcojauHeC&X-Amz-Signature=709dcd8ff3b9284c94f4b79d79551bb330e6475c03a355edd1b2e16f310cbe95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

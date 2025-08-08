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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBW2DK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCFSRQEqUQHwXbQW2hcSA%2F%2Bub5fsZYw4BNLfNWFSDp%2BOwIhAMRqP0GUwBDVAkozXbPJjaJP3J%2Fd6Oa1pRqqRV4BlM2DKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPvbSi06VreYb4EzEq3APx7ah63PtQtcTrvD70vtYChwajJ9kSHBlpAXhVkqrwiY4wA6NI1Icetdab6yGn%2BVBinspeQhznN8%2Ftma%2FqQ1%2F8KA0%2FdqFJUZVl88rTdBSUBCnVGlp1mPM84zVcGeIKHDIY6PmQgpNx47Q3ukdY%2FvLUblffYXsLg6V6Z%2BYx6HAK6hof4VqWo4CvE%2BJ3Y3sEhknh076Ff6rLezirDV9PJXrdsirR9lEyOEocgew6o%2BpbmrtTyk4iCIO4lyCm51876qgX%2FfyQaMuut3CuQqvGH6Ubtoj164P9NItcuGlanVKZkZblX%2BCNpOunO1hiKt8HJS7vKkFA6ZaCFFo%2B%2Fr6eLEO1d1jcZXqO1KqAprUSf4OPLO8zB5DcST77ONJtlbWFmjXIs4MkiHWsjHeMRY%2Bg5k1DlmCI%2BYdgyq%2F34ElB0rjtYl6Ztp9PUpgGzNF2i6%2Bz9ejjFShYjWGjDeoVF1PVmGTP596orsZbwLnp80yhJAB7Hi%2B9NBUGTlvOxZNFiN%2BK3RLhvXYFMV5FyBrAcJwXShaVC3GF%2FuwpVyqqIl6pBdMvRfwDoVWaHmxCPs60JmnhmIfVfzuP%2B3OUPFl%2Bbx7EuqGObBXVqHRbqr7hdCMDGxKgN5O6SzgHnREvI7rD%2BzCXk9nEBjqkAdbW2hCZVooFcxDyi3SDbn519GtV3t395hzUP5ebqvY7CpkUGmbZ3ubrTyZi9xz2inYqKOJ25PvMRRBsKTDefnNI5T%2FydepUYTgiPiPHvdLvCMyo5ppJFR3ElhyuACCOgCdz5AFswQ7LJ9eEfa80qRA2dyJEfRjsP3oUiyV9lTekoICunO3SWibw7MuLt%2FmoPwTq9YyG5qpemdpRR6BfJnPs3pPG&X-Amz-Signature=15b7dc846fecba64160a3d0da79d5e213fe9d06416c349501eab95a18d16ba4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HG2HA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCi4KeEUtMA49rpAnXAp0JFymMhuWU8qdztLFw5Y2iHaAIhAJjEKqEmQwvw0fd33%2F4IQ%2FbEsogxyEBhsg9VEAQ3rsRrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxijbETm%2FtsZihTPUq3APwU4pEBuZpXpU%2BeEdbGW%2FAs%2B0Zu0vvhe%2B4WH0%2BfHrIbuX%2F1z7s0t3X4ywRvCX8rzFFNhRQrkb%2FwJhdaPiA2C32VpDceBPxIhFq5vid%2Fd3ZeYhqxuyMsEByCddIpIrxDHfrS1lCckFPrr5BnaoNzUUtL2q1Vb2UgY43AIKa9GwXHraMUptoV%2Bo47PQjfibyiDo7l3sbbAhdXTWl0MTGWGWZhQ%2BEKdcuGqPLoCABR1fW1ue1XL0blYuXf3Wfa59tXqzYVxhdNJs7hMSe9ZF0MCyVEL2OtwXKn7T7jboU5Fwo29HsyMHRf0inO7uT%2BGQOpXMjCnhqMw94j%2BNFVvcpvOgoDCAsefS%2BmDokUVl6SJR1x%2Fn0Bj%2Bayd4RBC5hu3y9kWlKssLAHbJNKMQLHkWF%2BmlHAnl7ZhxGgP%2FYjQhzB3LN4D%2BBbwMF4Dp70FkGwQT4UxFnCXzI3AB9l9Mj3yTP5JBmhCZiVz8rKhNXE%2FI3vKG3%2BjlhYqYJaYXBWLO1sazve6aq1gzxKSwkmZPq7SU%2BBVjbroccYuxC%2B0L8WJnJDT88D%2FZZp6niUPoMhbfJMylpmIBEU93mP8l3wxMuOgYHDOojNaQge53S%2BTzm2cX6R2IjYP6Mnlp33heVLlfGAzDDktnEBjqkAehHFNSKo%2Fy%2FWn8QhHnU17rm19mueBFxOyx5vcsWZ%2BfWxggrKHRH18w2aVsbQod0TTIQ85Cs65q%2BKsAHySijPaZBOgQ%2BaT3uQShZ6Gq%2BnI1Mh1WshUUUidG%2FLsKtABTgCeV5JxZ7d6zYN7paJUbgR4MCOzoX3cMoqMQ2K85seLN3l2115VFVleUllckNGHfLBcrAgKcmtY8eRrlDpkBhSmrq5Um4&X-Amz-Signature=40f9a54f1d216c34ea8ac34fa537439a0729a7bfa54e2d3a61f8ead77ec6b670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HG2HA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCi4KeEUtMA49rpAnXAp0JFymMhuWU8qdztLFw5Y2iHaAIhAJjEKqEmQwvw0fd33%2F4IQ%2FbEsogxyEBhsg9VEAQ3rsRrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxijbETm%2FtsZihTPUq3APwU4pEBuZpXpU%2BeEdbGW%2FAs%2B0Zu0vvhe%2B4WH0%2BfHrIbuX%2F1z7s0t3X4ywRvCX8rzFFNhRQrkb%2FwJhdaPiA2C32VpDceBPxIhFq5vid%2Fd3ZeYhqxuyMsEByCddIpIrxDHfrS1lCckFPrr5BnaoNzUUtL2q1Vb2UgY43AIKa9GwXHraMUptoV%2Bo47PQjfibyiDo7l3sbbAhdXTWl0MTGWGWZhQ%2BEKdcuGqPLoCABR1fW1ue1XL0blYuXf3Wfa59tXqzYVxhdNJs7hMSe9ZF0MCyVEL2OtwXKn7T7jboU5Fwo29HsyMHRf0inO7uT%2BGQOpXMjCnhqMw94j%2BNFVvcpvOgoDCAsefS%2BmDokUVl6SJR1x%2Fn0Bj%2Bayd4RBC5hu3y9kWlKssLAHbJNKMQLHkWF%2BmlHAnl7ZhxGgP%2FYjQhzB3LN4D%2BBbwMF4Dp70FkGwQT4UxFnCXzI3AB9l9Mj3yTP5JBmhCZiVz8rKhNXE%2FI3vKG3%2BjlhYqYJaYXBWLO1sazve6aq1gzxKSwkmZPq7SU%2BBVjbroccYuxC%2B0L8WJnJDT88D%2FZZp6niUPoMhbfJMylpmIBEU93mP8l3wxMuOgYHDOojNaQge53S%2BTzm2cX6R2IjYP6Mnlp33heVLlfGAzDDktnEBjqkAehHFNSKo%2Fy%2FWn8QhHnU17rm19mueBFxOyx5vcsWZ%2BfWxggrKHRH18w2aVsbQod0TTIQ85Cs65q%2BKsAHySijPaZBOgQ%2BaT3uQShZ6Gq%2BnI1Mh1WshUUUidG%2FLsKtABTgCeV5JxZ7d6zYN7paJUbgR4MCOzoX3cMoqMQ2K85seLN3l2115VFVleUllckNGHfLBcrAgKcmtY8eRrlDpkBhSmrq5Um4&X-Amz-Signature=daf0a3de1f699bb2c48be94066f816f0dd3a0d22925553dae32aa858a81af372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HG2HA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCi4KeEUtMA49rpAnXAp0JFymMhuWU8qdztLFw5Y2iHaAIhAJjEKqEmQwvw0fd33%2F4IQ%2FbEsogxyEBhsg9VEAQ3rsRrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxijbETm%2FtsZihTPUq3APwU4pEBuZpXpU%2BeEdbGW%2FAs%2B0Zu0vvhe%2B4WH0%2BfHrIbuX%2F1z7s0t3X4ywRvCX8rzFFNhRQrkb%2FwJhdaPiA2C32VpDceBPxIhFq5vid%2Fd3ZeYhqxuyMsEByCddIpIrxDHfrS1lCckFPrr5BnaoNzUUtL2q1Vb2UgY43AIKa9GwXHraMUptoV%2Bo47PQjfibyiDo7l3sbbAhdXTWl0MTGWGWZhQ%2BEKdcuGqPLoCABR1fW1ue1XL0blYuXf3Wfa59tXqzYVxhdNJs7hMSe9ZF0MCyVEL2OtwXKn7T7jboU5Fwo29HsyMHRf0inO7uT%2BGQOpXMjCnhqMw94j%2BNFVvcpvOgoDCAsefS%2BmDokUVl6SJR1x%2Fn0Bj%2Bayd4RBC5hu3y9kWlKssLAHbJNKMQLHkWF%2BmlHAnl7ZhxGgP%2FYjQhzB3LN4D%2BBbwMF4Dp70FkGwQT4UxFnCXzI3AB9l9Mj3yTP5JBmhCZiVz8rKhNXE%2FI3vKG3%2BjlhYqYJaYXBWLO1sazve6aq1gzxKSwkmZPq7SU%2BBVjbroccYuxC%2B0L8WJnJDT88D%2FZZp6niUPoMhbfJMylpmIBEU93mP8l3wxMuOgYHDOojNaQge53S%2BTzm2cX6R2IjYP6Mnlp33heVLlfGAzDDktnEBjqkAehHFNSKo%2Fy%2FWn8QhHnU17rm19mueBFxOyx5vcsWZ%2BfWxggrKHRH18w2aVsbQod0TTIQ85Cs65q%2BKsAHySijPaZBOgQ%2BaT3uQShZ6Gq%2BnI1Mh1WshUUUidG%2FLsKtABTgCeV5JxZ7d6zYN7paJUbgR4MCOzoX3cMoqMQ2K85seLN3l2115VFVleUllckNGHfLBcrAgKcmtY8eRrlDpkBhSmrq5Um4&X-Amz-Signature=0a93e0b355f43b4c478ba5a808f450c1a069821b97202a86bba06edafc9fa450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HG2HA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCi4KeEUtMA49rpAnXAp0JFymMhuWU8qdztLFw5Y2iHaAIhAJjEKqEmQwvw0fd33%2F4IQ%2FbEsogxyEBhsg9VEAQ3rsRrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxijbETm%2FtsZihTPUq3APwU4pEBuZpXpU%2BeEdbGW%2FAs%2B0Zu0vvhe%2B4WH0%2BfHrIbuX%2F1z7s0t3X4ywRvCX8rzFFNhRQrkb%2FwJhdaPiA2C32VpDceBPxIhFq5vid%2Fd3ZeYhqxuyMsEByCddIpIrxDHfrS1lCckFPrr5BnaoNzUUtL2q1Vb2UgY43AIKa9GwXHraMUptoV%2Bo47PQjfibyiDo7l3sbbAhdXTWl0MTGWGWZhQ%2BEKdcuGqPLoCABR1fW1ue1XL0blYuXf3Wfa59tXqzYVxhdNJs7hMSe9ZF0MCyVEL2OtwXKn7T7jboU5Fwo29HsyMHRf0inO7uT%2BGQOpXMjCnhqMw94j%2BNFVvcpvOgoDCAsefS%2BmDokUVl6SJR1x%2Fn0Bj%2Bayd4RBC5hu3y9kWlKssLAHbJNKMQLHkWF%2BmlHAnl7ZhxGgP%2FYjQhzB3LN4D%2BBbwMF4Dp70FkGwQT4UxFnCXzI3AB9l9Mj3yTP5JBmhCZiVz8rKhNXE%2FI3vKG3%2BjlhYqYJaYXBWLO1sazve6aq1gzxKSwkmZPq7SU%2BBVjbroccYuxC%2B0L8WJnJDT88D%2FZZp6niUPoMhbfJMylpmIBEU93mP8l3wxMuOgYHDOojNaQge53S%2BTzm2cX6R2IjYP6Mnlp33heVLlfGAzDDktnEBjqkAehHFNSKo%2Fy%2FWn8QhHnU17rm19mueBFxOyx5vcsWZ%2BfWxggrKHRH18w2aVsbQod0TTIQ85Cs65q%2BKsAHySijPaZBOgQ%2BaT3uQShZ6Gq%2BnI1Mh1WshUUUidG%2FLsKtABTgCeV5JxZ7d6zYN7paJUbgR4MCOzoX3cMoqMQ2K85seLN3l2115VFVleUllckNGHfLBcrAgKcmtY8eRrlDpkBhSmrq5Um4&X-Amz-Signature=11e2fd645de1348b53026f729cc9e5b45a07c419d3b30cbc47e2af633ebde59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HG2HA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCi4KeEUtMA49rpAnXAp0JFymMhuWU8qdztLFw5Y2iHaAIhAJjEKqEmQwvw0fd33%2F4IQ%2FbEsogxyEBhsg9VEAQ3rsRrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxijbETm%2FtsZihTPUq3APwU4pEBuZpXpU%2BeEdbGW%2FAs%2B0Zu0vvhe%2B4WH0%2BfHrIbuX%2F1z7s0t3X4ywRvCX8rzFFNhRQrkb%2FwJhdaPiA2C32VpDceBPxIhFq5vid%2Fd3ZeYhqxuyMsEByCddIpIrxDHfrS1lCckFPrr5BnaoNzUUtL2q1Vb2UgY43AIKa9GwXHraMUptoV%2Bo47PQjfibyiDo7l3sbbAhdXTWl0MTGWGWZhQ%2BEKdcuGqPLoCABR1fW1ue1XL0blYuXf3Wfa59tXqzYVxhdNJs7hMSe9ZF0MCyVEL2OtwXKn7T7jboU5Fwo29HsyMHRf0inO7uT%2BGQOpXMjCnhqMw94j%2BNFVvcpvOgoDCAsefS%2BmDokUVl6SJR1x%2Fn0Bj%2Bayd4RBC5hu3y9kWlKssLAHbJNKMQLHkWF%2BmlHAnl7ZhxGgP%2FYjQhzB3LN4D%2BBbwMF4Dp70FkGwQT4UxFnCXzI3AB9l9Mj3yTP5JBmhCZiVz8rKhNXE%2FI3vKG3%2BjlhYqYJaYXBWLO1sazve6aq1gzxKSwkmZPq7SU%2BBVjbroccYuxC%2B0L8WJnJDT88D%2FZZp6niUPoMhbfJMylpmIBEU93mP8l3wxMuOgYHDOojNaQge53S%2BTzm2cX6R2IjYP6Mnlp33heVLlfGAzDDktnEBjqkAehHFNSKo%2Fy%2FWn8QhHnU17rm19mueBFxOyx5vcsWZ%2BfWxggrKHRH18w2aVsbQod0TTIQ85Cs65q%2BKsAHySijPaZBOgQ%2BaT3uQShZ6Gq%2BnI1Mh1WshUUUidG%2FLsKtABTgCeV5JxZ7d6zYN7paJUbgR4MCOzoX3cMoqMQ2K85seLN3l2115VFVleUllckNGHfLBcrAgKcmtY8eRrlDpkBhSmrq5Um4&X-Amz-Signature=f05d9a729baf966bef42ffc3ca77ed43efb6a2fc3cb8ab1f660d345df824d9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HG2HA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCi4KeEUtMA49rpAnXAp0JFymMhuWU8qdztLFw5Y2iHaAIhAJjEKqEmQwvw0fd33%2F4IQ%2FbEsogxyEBhsg9VEAQ3rsRrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxijbETm%2FtsZihTPUq3APwU4pEBuZpXpU%2BeEdbGW%2FAs%2B0Zu0vvhe%2B4WH0%2BfHrIbuX%2F1z7s0t3X4ywRvCX8rzFFNhRQrkb%2FwJhdaPiA2C32VpDceBPxIhFq5vid%2Fd3ZeYhqxuyMsEByCddIpIrxDHfrS1lCckFPrr5BnaoNzUUtL2q1Vb2UgY43AIKa9GwXHraMUptoV%2Bo47PQjfibyiDo7l3sbbAhdXTWl0MTGWGWZhQ%2BEKdcuGqPLoCABR1fW1ue1XL0blYuXf3Wfa59tXqzYVxhdNJs7hMSe9ZF0MCyVEL2OtwXKn7T7jboU5Fwo29HsyMHRf0inO7uT%2BGQOpXMjCnhqMw94j%2BNFVvcpvOgoDCAsefS%2BmDokUVl6SJR1x%2Fn0Bj%2Bayd4RBC5hu3y9kWlKssLAHbJNKMQLHkWF%2BmlHAnl7ZhxGgP%2FYjQhzB3LN4D%2BBbwMF4Dp70FkGwQT4UxFnCXzI3AB9l9Mj3yTP5JBmhCZiVz8rKhNXE%2FI3vKG3%2BjlhYqYJaYXBWLO1sazve6aq1gzxKSwkmZPq7SU%2BBVjbroccYuxC%2B0L8WJnJDT88D%2FZZp6niUPoMhbfJMylpmIBEU93mP8l3wxMuOgYHDOojNaQge53S%2BTzm2cX6R2IjYP6Mnlp33heVLlfGAzDDktnEBjqkAehHFNSKo%2Fy%2FWn8QhHnU17rm19mueBFxOyx5vcsWZ%2BfWxggrKHRH18w2aVsbQod0TTIQ85Cs65q%2BKsAHySijPaZBOgQ%2BaT3uQShZ6Gq%2BnI1Mh1WshUUUidG%2FLsKtABTgCeV5JxZ7d6zYN7paJUbgR4MCOzoX3cMoqMQ2K85seLN3l2115VFVleUllckNGHfLBcrAgKcmtY8eRrlDpkBhSmrq5Um4&X-Amz-Signature=c7cc8f5dd5f8f00cf82eaaa90a425d5543bd0a3c13fe31fa9f95f828c27b82ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HG2HA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCi4KeEUtMA49rpAnXAp0JFymMhuWU8qdztLFw5Y2iHaAIhAJjEKqEmQwvw0fd33%2F4IQ%2FbEsogxyEBhsg9VEAQ3rsRrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxijbETm%2FtsZihTPUq3APwU4pEBuZpXpU%2BeEdbGW%2FAs%2B0Zu0vvhe%2B4WH0%2BfHrIbuX%2F1z7s0t3X4ywRvCX8rzFFNhRQrkb%2FwJhdaPiA2C32VpDceBPxIhFq5vid%2Fd3ZeYhqxuyMsEByCddIpIrxDHfrS1lCckFPrr5BnaoNzUUtL2q1Vb2UgY43AIKa9GwXHraMUptoV%2Bo47PQjfibyiDo7l3sbbAhdXTWl0MTGWGWZhQ%2BEKdcuGqPLoCABR1fW1ue1XL0blYuXf3Wfa59tXqzYVxhdNJs7hMSe9ZF0MCyVEL2OtwXKn7T7jboU5Fwo29HsyMHRf0inO7uT%2BGQOpXMjCnhqMw94j%2BNFVvcpvOgoDCAsefS%2BmDokUVl6SJR1x%2Fn0Bj%2Bayd4RBC5hu3y9kWlKssLAHbJNKMQLHkWF%2BmlHAnl7ZhxGgP%2FYjQhzB3LN4D%2BBbwMF4Dp70FkGwQT4UxFnCXzI3AB9l9Mj3yTP5JBmhCZiVz8rKhNXE%2FI3vKG3%2BjlhYqYJaYXBWLO1sazve6aq1gzxKSwkmZPq7SU%2BBVjbroccYuxC%2B0L8WJnJDT88D%2FZZp6niUPoMhbfJMylpmIBEU93mP8l3wxMuOgYHDOojNaQge53S%2BTzm2cX6R2IjYP6Mnlp33heVLlfGAzDDktnEBjqkAehHFNSKo%2Fy%2FWn8QhHnU17rm19mueBFxOyx5vcsWZ%2BfWxggrKHRH18w2aVsbQod0TTIQ85Cs65q%2BKsAHySijPaZBOgQ%2BaT3uQShZ6Gq%2BnI1Mh1WshUUUidG%2FLsKtABTgCeV5JxZ7d6zYN7paJUbgR4MCOzoX3cMoqMQ2K85seLN3l2115VFVleUllckNGHfLBcrAgKcmtY8eRrlDpkBhSmrq5Um4&X-Amz-Signature=b9aec94535ccc97459de1ae8ea36d520b0e4dfa2cb5302ad46c95845098f16cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HG2HA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCi4KeEUtMA49rpAnXAp0JFymMhuWU8qdztLFw5Y2iHaAIhAJjEKqEmQwvw0fd33%2F4IQ%2FbEsogxyEBhsg9VEAQ3rsRrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxijbETm%2FtsZihTPUq3APwU4pEBuZpXpU%2BeEdbGW%2FAs%2B0Zu0vvhe%2B4WH0%2BfHrIbuX%2F1z7s0t3X4ywRvCX8rzFFNhRQrkb%2FwJhdaPiA2C32VpDceBPxIhFq5vid%2Fd3ZeYhqxuyMsEByCddIpIrxDHfrS1lCckFPrr5BnaoNzUUtL2q1Vb2UgY43AIKa9GwXHraMUptoV%2Bo47PQjfibyiDo7l3sbbAhdXTWl0MTGWGWZhQ%2BEKdcuGqPLoCABR1fW1ue1XL0blYuXf3Wfa59tXqzYVxhdNJs7hMSe9ZF0MCyVEL2OtwXKn7T7jboU5Fwo29HsyMHRf0inO7uT%2BGQOpXMjCnhqMw94j%2BNFVvcpvOgoDCAsefS%2BmDokUVl6SJR1x%2Fn0Bj%2Bayd4RBC5hu3y9kWlKssLAHbJNKMQLHkWF%2BmlHAnl7ZhxGgP%2FYjQhzB3LN4D%2BBbwMF4Dp70FkGwQT4UxFnCXzI3AB9l9Mj3yTP5JBmhCZiVz8rKhNXE%2FI3vKG3%2BjlhYqYJaYXBWLO1sazve6aq1gzxKSwkmZPq7SU%2BBVjbroccYuxC%2B0L8WJnJDT88D%2FZZp6niUPoMhbfJMylpmIBEU93mP8l3wxMuOgYHDOojNaQge53S%2BTzm2cX6R2IjYP6Mnlp33heVLlfGAzDDktnEBjqkAehHFNSKo%2Fy%2FWn8QhHnU17rm19mueBFxOyx5vcsWZ%2BfWxggrKHRH18w2aVsbQod0TTIQ85Cs65q%2BKsAHySijPaZBOgQ%2BaT3uQShZ6Gq%2BnI1Mh1WshUUUidG%2FLsKtABTgCeV5JxZ7d6zYN7paJUbgR4MCOzoX3cMoqMQ2K85seLN3l2115VFVleUllckNGHfLBcrAgKcmtY8eRrlDpkBhSmrq5Um4&X-Amz-Signature=10cd891769613e03c4fff508c346713832648ad108abd351458c2585fe9c2de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HG2HA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCi4KeEUtMA49rpAnXAp0JFymMhuWU8qdztLFw5Y2iHaAIhAJjEKqEmQwvw0fd33%2F4IQ%2FbEsogxyEBhsg9VEAQ3rsRrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxijbETm%2FtsZihTPUq3APwU4pEBuZpXpU%2BeEdbGW%2FAs%2B0Zu0vvhe%2B4WH0%2BfHrIbuX%2F1z7s0t3X4ywRvCX8rzFFNhRQrkb%2FwJhdaPiA2C32VpDceBPxIhFq5vid%2Fd3ZeYhqxuyMsEByCddIpIrxDHfrS1lCckFPrr5BnaoNzUUtL2q1Vb2UgY43AIKa9GwXHraMUptoV%2Bo47PQjfibyiDo7l3sbbAhdXTWl0MTGWGWZhQ%2BEKdcuGqPLoCABR1fW1ue1XL0blYuXf3Wfa59tXqzYVxhdNJs7hMSe9ZF0MCyVEL2OtwXKn7T7jboU5Fwo29HsyMHRf0inO7uT%2BGQOpXMjCnhqMw94j%2BNFVvcpvOgoDCAsefS%2BmDokUVl6SJR1x%2Fn0Bj%2Bayd4RBC5hu3y9kWlKssLAHbJNKMQLHkWF%2BmlHAnl7ZhxGgP%2FYjQhzB3LN4D%2BBbwMF4Dp70FkGwQT4UxFnCXzI3AB9l9Mj3yTP5JBmhCZiVz8rKhNXE%2FI3vKG3%2BjlhYqYJaYXBWLO1sazve6aq1gzxKSwkmZPq7SU%2BBVjbroccYuxC%2B0L8WJnJDT88D%2FZZp6niUPoMhbfJMylpmIBEU93mP8l3wxMuOgYHDOojNaQge53S%2BTzm2cX6R2IjYP6Mnlp33heVLlfGAzDDktnEBjqkAehHFNSKo%2Fy%2FWn8QhHnU17rm19mueBFxOyx5vcsWZ%2BfWxggrKHRH18w2aVsbQod0TTIQ85Cs65q%2BKsAHySijPaZBOgQ%2BaT3uQShZ6Gq%2BnI1Mh1WshUUUidG%2FLsKtABTgCeV5JxZ7d6zYN7paJUbgR4MCOzoX3cMoqMQ2K85seLN3l2115VFVleUllckNGHfLBcrAgKcmtY8eRrlDpkBhSmrq5Um4&X-Amz-Signature=db26cf0012fa1f8a272d72e7164ff038dbe5d8d90345324bbd16dcd97bcdf42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HG2HA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCi4KeEUtMA49rpAnXAp0JFymMhuWU8qdztLFw5Y2iHaAIhAJjEKqEmQwvw0fd33%2F4IQ%2FbEsogxyEBhsg9VEAQ3rsRrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxijbETm%2FtsZihTPUq3APwU4pEBuZpXpU%2BeEdbGW%2FAs%2B0Zu0vvhe%2B4WH0%2BfHrIbuX%2F1z7s0t3X4ywRvCX8rzFFNhRQrkb%2FwJhdaPiA2C32VpDceBPxIhFq5vid%2Fd3ZeYhqxuyMsEByCddIpIrxDHfrS1lCckFPrr5BnaoNzUUtL2q1Vb2UgY43AIKa9GwXHraMUptoV%2Bo47PQjfibyiDo7l3sbbAhdXTWl0MTGWGWZhQ%2BEKdcuGqPLoCABR1fW1ue1XL0blYuXf3Wfa59tXqzYVxhdNJs7hMSe9ZF0MCyVEL2OtwXKn7T7jboU5Fwo29HsyMHRf0inO7uT%2BGQOpXMjCnhqMw94j%2BNFVvcpvOgoDCAsefS%2BmDokUVl6SJR1x%2Fn0Bj%2Bayd4RBC5hu3y9kWlKssLAHbJNKMQLHkWF%2BmlHAnl7ZhxGgP%2FYjQhzB3LN4D%2BBbwMF4Dp70FkGwQT4UxFnCXzI3AB9l9Mj3yTP5JBmhCZiVz8rKhNXE%2FI3vKG3%2BjlhYqYJaYXBWLO1sazve6aq1gzxKSwkmZPq7SU%2BBVjbroccYuxC%2B0L8WJnJDT88D%2FZZp6niUPoMhbfJMylpmIBEU93mP8l3wxMuOgYHDOojNaQge53S%2BTzm2cX6R2IjYP6Mnlp33heVLlfGAzDDktnEBjqkAehHFNSKo%2Fy%2FWn8QhHnU17rm19mueBFxOyx5vcsWZ%2BfWxggrKHRH18w2aVsbQod0TTIQ85Cs65q%2BKsAHySijPaZBOgQ%2BaT3uQShZ6Gq%2BnI1Mh1WshUUUidG%2FLsKtABTgCeV5JxZ7d6zYN7paJUbgR4MCOzoX3cMoqMQ2K85seLN3l2115VFVleUllckNGHfLBcrAgKcmtY8eRrlDpkBhSmrq5Um4&X-Amz-Signature=11e2fd645de1348b53026f729cc9e5b45a07c419d3b30cbc47e2af633ebde59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

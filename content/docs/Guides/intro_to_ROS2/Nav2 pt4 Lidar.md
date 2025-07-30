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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2JHREX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6aYXBpNsbIDUFBgmxTepSHvGYDjJy6eYU5XXNR4z3AiEA%2BKBV7%2F41rDlH6%2BxhhrsFTYO25fIaftSj3XSoWFr4x94qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3kfw7V6KCzCqnNircA8VthNr9b0jbI5LchaOQY4RGl81lQrUGZkpL5zvGzvWOz2vCSCJDULCbkBv4QAIJFb6%2FH1Ybh%2Bhc%2FcxruZZuS5bIUAbjM7Ry3S1Rxe5xo6To1Rh8XVlfswoZ%2Bi%2BdnkGX8zQgNoB2i6F4puIF8lbRqNoeTRQcvpA7EpdOHoMNtuTxU0D7HX1nczWiYgFklOTxoW4RWdCdx4nTUsXYaP1fVRH0Bidsz%2FEc%2BZIufw84XzyyIbqmfpIXXxmVoGL3%2FfdOSSIS5M5I9sltCCBP3FF6IopXdWvoaW7SqFlxBpmiDqYjq9S0pNIFsN2%2FUIOd17vj3QhKWOrY6JMs3cwZnZK9tQhVJNAwtTBIj8fhKwX6PaVyBxeMxG5NxnpE1HoAC5Hb%2FrEAEI6izCR2fMcozyDqB4VIEDJRBeweAvLclkK2rKekZd%2BilYLWVvQahI1Ic4R%2Bgwfd%2BQdlgov98us1S8Qc2v4yZHh2w7Idz%2F5%2FptzlGY2HiLE%2FigtqmobdxZD%2FvYrZK8MXDJ1Ea7e6b52Hjbm2eypimrkgZ62BD35dRPZb6VAd7%2B6x7cku4NifIh1PX1%2B%2FFqF4y%2BDzKts51H9JqO0SBcotSI2gJp86BJhhrOJOnb19gX4Oi9%2Bc%2BNXWDu3YML%2FBp8QGOqUBY5qxndu2%2BBr%2FAXZpCS9sjkK0I7bn6yrHAKU9cAv8oNH0Ux%2FM2Pqcj4oIAJFH0XgsaGUaDPzLod%2BzIYr44bA8E5jM%2B00pG5GAfW56ffp1SDiBa40B1FybN9Quw0XdEeudg5DUlETKJ3nKnIVDUVYcNCM%2F%2FIPiKC4WVqWiOCp8aQmH2yWerHl%2BKxyBByy85yyL5xfrxfY3GUPtUQwzSm3jzfZ%2Byc2P&X-Amz-Signature=93d81dd799b7ce494e4cfabcc59fafef72130695e7996f1d1dd3fef701933314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2JHREX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6aYXBpNsbIDUFBgmxTepSHvGYDjJy6eYU5XXNR4z3AiEA%2BKBV7%2F41rDlH6%2BxhhrsFTYO25fIaftSj3XSoWFr4x94qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3kfw7V6KCzCqnNircA8VthNr9b0jbI5LchaOQY4RGl81lQrUGZkpL5zvGzvWOz2vCSCJDULCbkBv4QAIJFb6%2FH1Ybh%2Bhc%2FcxruZZuS5bIUAbjM7Ry3S1Rxe5xo6To1Rh8XVlfswoZ%2Bi%2BdnkGX8zQgNoB2i6F4puIF8lbRqNoeTRQcvpA7EpdOHoMNtuTxU0D7HX1nczWiYgFklOTxoW4RWdCdx4nTUsXYaP1fVRH0Bidsz%2FEc%2BZIufw84XzyyIbqmfpIXXxmVoGL3%2FfdOSSIS5M5I9sltCCBP3FF6IopXdWvoaW7SqFlxBpmiDqYjq9S0pNIFsN2%2FUIOd17vj3QhKWOrY6JMs3cwZnZK9tQhVJNAwtTBIj8fhKwX6PaVyBxeMxG5NxnpE1HoAC5Hb%2FrEAEI6izCR2fMcozyDqB4VIEDJRBeweAvLclkK2rKekZd%2BilYLWVvQahI1Ic4R%2Bgwfd%2BQdlgov98us1S8Qc2v4yZHh2w7Idz%2F5%2FptzlGY2HiLE%2FigtqmobdxZD%2FvYrZK8MXDJ1Ea7e6b52Hjbm2eypimrkgZ62BD35dRPZb6VAd7%2B6x7cku4NifIh1PX1%2B%2FFqF4y%2BDzKts51H9JqO0SBcotSI2gJp86BJhhrOJOnb19gX4Oi9%2Bc%2BNXWDu3YML%2FBp8QGOqUBY5qxndu2%2BBr%2FAXZpCS9sjkK0I7bn6yrHAKU9cAv8oNH0Ux%2FM2Pqcj4oIAJFH0XgsaGUaDPzLod%2BzIYr44bA8E5jM%2B00pG5GAfW56ffp1SDiBa40B1FybN9Quw0XdEeudg5DUlETKJ3nKnIVDUVYcNCM%2F%2FIPiKC4WVqWiOCp8aQmH2yWerHl%2BKxyBByy85yyL5xfrxfY3GUPtUQwzSm3jzfZ%2Byc2P&X-Amz-Signature=191b92120ac1a21946ba3849f6996bf77b1efb116f60308a20cc1e4d1ca9f00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2JHREX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6aYXBpNsbIDUFBgmxTepSHvGYDjJy6eYU5XXNR4z3AiEA%2BKBV7%2F41rDlH6%2BxhhrsFTYO25fIaftSj3XSoWFr4x94qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3kfw7V6KCzCqnNircA8VthNr9b0jbI5LchaOQY4RGl81lQrUGZkpL5zvGzvWOz2vCSCJDULCbkBv4QAIJFb6%2FH1Ybh%2Bhc%2FcxruZZuS5bIUAbjM7Ry3S1Rxe5xo6To1Rh8XVlfswoZ%2Bi%2BdnkGX8zQgNoB2i6F4puIF8lbRqNoeTRQcvpA7EpdOHoMNtuTxU0D7HX1nczWiYgFklOTxoW4RWdCdx4nTUsXYaP1fVRH0Bidsz%2FEc%2BZIufw84XzyyIbqmfpIXXxmVoGL3%2FfdOSSIS5M5I9sltCCBP3FF6IopXdWvoaW7SqFlxBpmiDqYjq9S0pNIFsN2%2FUIOd17vj3QhKWOrY6JMs3cwZnZK9tQhVJNAwtTBIj8fhKwX6PaVyBxeMxG5NxnpE1HoAC5Hb%2FrEAEI6izCR2fMcozyDqB4VIEDJRBeweAvLclkK2rKekZd%2BilYLWVvQahI1Ic4R%2Bgwfd%2BQdlgov98us1S8Qc2v4yZHh2w7Idz%2F5%2FptzlGY2HiLE%2FigtqmobdxZD%2FvYrZK8MXDJ1Ea7e6b52Hjbm2eypimrkgZ62BD35dRPZb6VAd7%2B6x7cku4NifIh1PX1%2B%2FFqF4y%2BDzKts51H9JqO0SBcotSI2gJp86BJhhrOJOnb19gX4Oi9%2Bc%2BNXWDu3YML%2FBp8QGOqUBY5qxndu2%2BBr%2FAXZpCS9sjkK0I7bn6yrHAKU9cAv8oNH0Ux%2FM2Pqcj4oIAJFH0XgsaGUaDPzLod%2BzIYr44bA8E5jM%2B00pG5GAfW56ffp1SDiBa40B1FybN9Quw0XdEeudg5DUlETKJ3nKnIVDUVYcNCM%2F%2FIPiKC4WVqWiOCp8aQmH2yWerHl%2BKxyBByy85yyL5xfrxfY3GUPtUQwzSm3jzfZ%2Byc2P&X-Amz-Signature=963cd604beb98a10faba967fa79cc999def50be0a58498d92cbe177c29a2b06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2JHREX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6aYXBpNsbIDUFBgmxTepSHvGYDjJy6eYU5XXNR4z3AiEA%2BKBV7%2F41rDlH6%2BxhhrsFTYO25fIaftSj3XSoWFr4x94qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3kfw7V6KCzCqnNircA8VthNr9b0jbI5LchaOQY4RGl81lQrUGZkpL5zvGzvWOz2vCSCJDULCbkBv4QAIJFb6%2FH1Ybh%2Bhc%2FcxruZZuS5bIUAbjM7Ry3S1Rxe5xo6To1Rh8XVlfswoZ%2Bi%2BdnkGX8zQgNoB2i6F4puIF8lbRqNoeTRQcvpA7EpdOHoMNtuTxU0D7HX1nczWiYgFklOTxoW4RWdCdx4nTUsXYaP1fVRH0Bidsz%2FEc%2BZIufw84XzyyIbqmfpIXXxmVoGL3%2FfdOSSIS5M5I9sltCCBP3FF6IopXdWvoaW7SqFlxBpmiDqYjq9S0pNIFsN2%2FUIOd17vj3QhKWOrY6JMs3cwZnZK9tQhVJNAwtTBIj8fhKwX6PaVyBxeMxG5NxnpE1HoAC5Hb%2FrEAEI6izCR2fMcozyDqB4VIEDJRBeweAvLclkK2rKekZd%2BilYLWVvQahI1Ic4R%2Bgwfd%2BQdlgov98us1S8Qc2v4yZHh2w7Idz%2F5%2FptzlGY2HiLE%2FigtqmobdxZD%2FvYrZK8MXDJ1Ea7e6b52Hjbm2eypimrkgZ62BD35dRPZb6VAd7%2B6x7cku4NifIh1PX1%2B%2FFqF4y%2BDzKts51H9JqO0SBcotSI2gJp86BJhhrOJOnb19gX4Oi9%2Bc%2BNXWDu3YML%2FBp8QGOqUBY5qxndu2%2BBr%2FAXZpCS9sjkK0I7bn6yrHAKU9cAv8oNH0Ux%2FM2Pqcj4oIAJFH0XgsaGUaDPzLod%2BzIYr44bA8E5jM%2B00pG5GAfW56ffp1SDiBa40B1FybN9Quw0XdEeudg5DUlETKJ3nKnIVDUVYcNCM%2F%2FIPiKC4WVqWiOCp8aQmH2yWerHl%2BKxyBByy85yyL5xfrxfY3GUPtUQwzSm3jzfZ%2Byc2P&X-Amz-Signature=7e2d29e18b4f2394fe562d34cf621ed4f484d732bc82cc0ec4cf72f5ea1db980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2JHREX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6aYXBpNsbIDUFBgmxTepSHvGYDjJy6eYU5XXNR4z3AiEA%2BKBV7%2F41rDlH6%2BxhhrsFTYO25fIaftSj3XSoWFr4x94qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3kfw7V6KCzCqnNircA8VthNr9b0jbI5LchaOQY4RGl81lQrUGZkpL5zvGzvWOz2vCSCJDULCbkBv4QAIJFb6%2FH1Ybh%2Bhc%2FcxruZZuS5bIUAbjM7Ry3S1Rxe5xo6To1Rh8XVlfswoZ%2Bi%2BdnkGX8zQgNoB2i6F4puIF8lbRqNoeTRQcvpA7EpdOHoMNtuTxU0D7HX1nczWiYgFklOTxoW4RWdCdx4nTUsXYaP1fVRH0Bidsz%2FEc%2BZIufw84XzyyIbqmfpIXXxmVoGL3%2FfdOSSIS5M5I9sltCCBP3FF6IopXdWvoaW7SqFlxBpmiDqYjq9S0pNIFsN2%2FUIOd17vj3QhKWOrY6JMs3cwZnZK9tQhVJNAwtTBIj8fhKwX6PaVyBxeMxG5NxnpE1HoAC5Hb%2FrEAEI6izCR2fMcozyDqB4VIEDJRBeweAvLclkK2rKekZd%2BilYLWVvQahI1Ic4R%2Bgwfd%2BQdlgov98us1S8Qc2v4yZHh2w7Idz%2F5%2FptzlGY2HiLE%2FigtqmobdxZD%2FvYrZK8MXDJ1Ea7e6b52Hjbm2eypimrkgZ62BD35dRPZb6VAd7%2B6x7cku4NifIh1PX1%2B%2FFqF4y%2BDzKts51H9JqO0SBcotSI2gJp86BJhhrOJOnb19gX4Oi9%2Bc%2BNXWDu3YML%2FBp8QGOqUBY5qxndu2%2BBr%2FAXZpCS9sjkK0I7bn6yrHAKU9cAv8oNH0Ux%2FM2Pqcj4oIAJFH0XgsaGUaDPzLod%2BzIYr44bA8E5jM%2B00pG5GAfW56ffp1SDiBa40B1FybN9Quw0XdEeudg5DUlETKJ3nKnIVDUVYcNCM%2F%2FIPiKC4WVqWiOCp8aQmH2yWerHl%2BKxyBByy85yyL5xfrxfY3GUPtUQwzSm3jzfZ%2Byc2P&X-Amz-Signature=c1fe1a633c28118a3648abb03bd961896141ecf4e57ec76f2a3d06162a64226f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2JHREX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6aYXBpNsbIDUFBgmxTepSHvGYDjJy6eYU5XXNR4z3AiEA%2BKBV7%2F41rDlH6%2BxhhrsFTYO25fIaftSj3XSoWFr4x94qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3kfw7V6KCzCqnNircA8VthNr9b0jbI5LchaOQY4RGl81lQrUGZkpL5zvGzvWOz2vCSCJDULCbkBv4QAIJFb6%2FH1Ybh%2Bhc%2FcxruZZuS5bIUAbjM7Ry3S1Rxe5xo6To1Rh8XVlfswoZ%2Bi%2BdnkGX8zQgNoB2i6F4puIF8lbRqNoeTRQcvpA7EpdOHoMNtuTxU0D7HX1nczWiYgFklOTxoW4RWdCdx4nTUsXYaP1fVRH0Bidsz%2FEc%2BZIufw84XzyyIbqmfpIXXxmVoGL3%2FfdOSSIS5M5I9sltCCBP3FF6IopXdWvoaW7SqFlxBpmiDqYjq9S0pNIFsN2%2FUIOd17vj3QhKWOrY6JMs3cwZnZK9tQhVJNAwtTBIj8fhKwX6PaVyBxeMxG5NxnpE1HoAC5Hb%2FrEAEI6izCR2fMcozyDqB4VIEDJRBeweAvLclkK2rKekZd%2BilYLWVvQahI1Ic4R%2Bgwfd%2BQdlgov98us1S8Qc2v4yZHh2w7Idz%2F5%2FptzlGY2HiLE%2FigtqmobdxZD%2FvYrZK8MXDJ1Ea7e6b52Hjbm2eypimrkgZ62BD35dRPZb6VAd7%2B6x7cku4NifIh1PX1%2B%2FFqF4y%2BDzKts51H9JqO0SBcotSI2gJp86BJhhrOJOnb19gX4Oi9%2Bc%2BNXWDu3YML%2FBp8QGOqUBY5qxndu2%2BBr%2FAXZpCS9sjkK0I7bn6yrHAKU9cAv8oNH0Ux%2FM2Pqcj4oIAJFH0XgsaGUaDPzLod%2BzIYr44bA8E5jM%2B00pG5GAfW56ffp1SDiBa40B1FybN9Quw0XdEeudg5DUlETKJ3nKnIVDUVYcNCM%2F%2FIPiKC4WVqWiOCp8aQmH2yWerHl%2BKxyBByy85yyL5xfrxfY3GUPtUQwzSm3jzfZ%2Byc2P&X-Amz-Signature=4aae902f898981dc823f8fe30242eeb975635fa83b8112a8c0ef02e19e59103d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2JHREX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6aYXBpNsbIDUFBgmxTepSHvGYDjJy6eYU5XXNR4z3AiEA%2BKBV7%2F41rDlH6%2BxhhrsFTYO25fIaftSj3XSoWFr4x94qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3kfw7V6KCzCqnNircA8VthNr9b0jbI5LchaOQY4RGl81lQrUGZkpL5zvGzvWOz2vCSCJDULCbkBv4QAIJFb6%2FH1Ybh%2Bhc%2FcxruZZuS5bIUAbjM7Ry3S1Rxe5xo6To1Rh8XVlfswoZ%2Bi%2BdnkGX8zQgNoB2i6F4puIF8lbRqNoeTRQcvpA7EpdOHoMNtuTxU0D7HX1nczWiYgFklOTxoW4RWdCdx4nTUsXYaP1fVRH0Bidsz%2FEc%2BZIufw84XzyyIbqmfpIXXxmVoGL3%2FfdOSSIS5M5I9sltCCBP3FF6IopXdWvoaW7SqFlxBpmiDqYjq9S0pNIFsN2%2FUIOd17vj3QhKWOrY6JMs3cwZnZK9tQhVJNAwtTBIj8fhKwX6PaVyBxeMxG5NxnpE1HoAC5Hb%2FrEAEI6izCR2fMcozyDqB4VIEDJRBeweAvLclkK2rKekZd%2BilYLWVvQahI1Ic4R%2Bgwfd%2BQdlgov98us1S8Qc2v4yZHh2w7Idz%2F5%2FptzlGY2HiLE%2FigtqmobdxZD%2FvYrZK8MXDJ1Ea7e6b52Hjbm2eypimrkgZ62BD35dRPZb6VAd7%2B6x7cku4NifIh1PX1%2B%2FFqF4y%2BDzKts51H9JqO0SBcotSI2gJp86BJhhrOJOnb19gX4Oi9%2Bc%2BNXWDu3YML%2FBp8QGOqUBY5qxndu2%2BBr%2FAXZpCS9sjkK0I7bn6yrHAKU9cAv8oNH0Ux%2FM2Pqcj4oIAJFH0XgsaGUaDPzLod%2BzIYr44bA8E5jM%2B00pG5GAfW56ffp1SDiBa40B1FybN9Quw0XdEeudg5DUlETKJ3nKnIVDUVYcNCM%2F%2FIPiKC4WVqWiOCp8aQmH2yWerHl%2BKxyBByy85yyL5xfrxfY3GUPtUQwzSm3jzfZ%2Byc2P&X-Amz-Signature=7731424b00d78b7461cb4d6b08d6f0e2a9e4201fc67216a11731bb4b524059b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2JHREX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6aYXBpNsbIDUFBgmxTepSHvGYDjJy6eYU5XXNR4z3AiEA%2BKBV7%2F41rDlH6%2BxhhrsFTYO25fIaftSj3XSoWFr4x94qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3kfw7V6KCzCqnNircA8VthNr9b0jbI5LchaOQY4RGl81lQrUGZkpL5zvGzvWOz2vCSCJDULCbkBv4QAIJFb6%2FH1Ybh%2Bhc%2FcxruZZuS5bIUAbjM7Ry3S1Rxe5xo6To1Rh8XVlfswoZ%2Bi%2BdnkGX8zQgNoB2i6F4puIF8lbRqNoeTRQcvpA7EpdOHoMNtuTxU0D7HX1nczWiYgFklOTxoW4RWdCdx4nTUsXYaP1fVRH0Bidsz%2FEc%2BZIufw84XzyyIbqmfpIXXxmVoGL3%2FfdOSSIS5M5I9sltCCBP3FF6IopXdWvoaW7SqFlxBpmiDqYjq9S0pNIFsN2%2FUIOd17vj3QhKWOrY6JMs3cwZnZK9tQhVJNAwtTBIj8fhKwX6PaVyBxeMxG5NxnpE1HoAC5Hb%2FrEAEI6izCR2fMcozyDqB4VIEDJRBeweAvLclkK2rKekZd%2BilYLWVvQahI1Ic4R%2Bgwfd%2BQdlgov98us1S8Qc2v4yZHh2w7Idz%2F5%2FptzlGY2HiLE%2FigtqmobdxZD%2FvYrZK8MXDJ1Ea7e6b52Hjbm2eypimrkgZ62BD35dRPZb6VAd7%2B6x7cku4NifIh1PX1%2B%2FFqF4y%2BDzKts51H9JqO0SBcotSI2gJp86BJhhrOJOnb19gX4Oi9%2Bc%2BNXWDu3YML%2FBp8QGOqUBY5qxndu2%2BBr%2FAXZpCS9sjkK0I7bn6yrHAKU9cAv8oNH0Ux%2FM2Pqcj4oIAJFH0XgsaGUaDPzLod%2BzIYr44bA8E5jM%2B00pG5GAfW56ffp1SDiBa40B1FybN9Quw0XdEeudg5DUlETKJ3nKnIVDUVYcNCM%2F%2FIPiKC4WVqWiOCp8aQmH2yWerHl%2BKxyBByy85yyL5xfrxfY3GUPtUQwzSm3jzfZ%2Byc2P&X-Amz-Signature=37e6b8dc3503a3cd914ab003b6a36cb62434d32a41febe884ffc8ebdd109e084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2JHREX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6aYXBpNsbIDUFBgmxTepSHvGYDjJy6eYU5XXNR4z3AiEA%2BKBV7%2F41rDlH6%2BxhhrsFTYO25fIaftSj3XSoWFr4x94qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3kfw7V6KCzCqnNircA8VthNr9b0jbI5LchaOQY4RGl81lQrUGZkpL5zvGzvWOz2vCSCJDULCbkBv4QAIJFb6%2FH1Ybh%2Bhc%2FcxruZZuS5bIUAbjM7Ry3S1Rxe5xo6To1Rh8XVlfswoZ%2Bi%2BdnkGX8zQgNoB2i6F4puIF8lbRqNoeTRQcvpA7EpdOHoMNtuTxU0D7HX1nczWiYgFklOTxoW4RWdCdx4nTUsXYaP1fVRH0Bidsz%2FEc%2BZIufw84XzyyIbqmfpIXXxmVoGL3%2FfdOSSIS5M5I9sltCCBP3FF6IopXdWvoaW7SqFlxBpmiDqYjq9S0pNIFsN2%2FUIOd17vj3QhKWOrY6JMs3cwZnZK9tQhVJNAwtTBIj8fhKwX6PaVyBxeMxG5NxnpE1HoAC5Hb%2FrEAEI6izCR2fMcozyDqB4VIEDJRBeweAvLclkK2rKekZd%2BilYLWVvQahI1Ic4R%2Bgwfd%2BQdlgov98us1S8Qc2v4yZHh2w7Idz%2F5%2FptzlGY2HiLE%2FigtqmobdxZD%2FvYrZK8MXDJ1Ea7e6b52Hjbm2eypimrkgZ62BD35dRPZb6VAd7%2B6x7cku4NifIh1PX1%2B%2FFqF4y%2BDzKts51H9JqO0SBcotSI2gJp86BJhhrOJOnb19gX4Oi9%2Bc%2BNXWDu3YML%2FBp8QGOqUBY5qxndu2%2BBr%2FAXZpCS9sjkK0I7bn6yrHAKU9cAv8oNH0Ux%2FM2Pqcj4oIAJFH0XgsaGUaDPzLod%2BzIYr44bA8E5jM%2B00pG5GAfW56ffp1SDiBa40B1FybN9Quw0XdEeudg5DUlETKJ3nKnIVDUVYcNCM%2F%2FIPiKC4WVqWiOCp8aQmH2yWerHl%2BKxyBByy85yyL5xfrxfY3GUPtUQwzSm3jzfZ%2Byc2P&X-Amz-Signature=eb48cf69fcc1750773289c2e963617d237dda79641a5aea8f2cd8b3fa81bdc59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2JHREX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6aYXBpNsbIDUFBgmxTepSHvGYDjJy6eYU5XXNR4z3AiEA%2BKBV7%2F41rDlH6%2BxhhrsFTYO25fIaftSj3XSoWFr4x94qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3kfw7V6KCzCqnNircA8VthNr9b0jbI5LchaOQY4RGl81lQrUGZkpL5zvGzvWOz2vCSCJDULCbkBv4QAIJFb6%2FH1Ybh%2Bhc%2FcxruZZuS5bIUAbjM7Ry3S1Rxe5xo6To1Rh8XVlfswoZ%2Bi%2BdnkGX8zQgNoB2i6F4puIF8lbRqNoeTRQcvpA7EpdOHoMNtuTxU0D7HX1nczWiYgFklOTxoW4RWdCdx4nTUsXYaP1fVRH0Bidsz%2FEc%2BZIufw84XzyyIbqmfpIXXxmVoGL3%2FfdOSSIS5M5I9sltCCBP3FF6IopXdWvoaW7SqFlxBpmiDqYjq9S0pNIFsN2%2FUIOd17vj3QhKWOrY6JMs3cwZnZK9tQhVJNAwtTBIj8fhKwX6PaVyBxeMxG5NxnpE1HoAC5Hb%2FrEAEI6izCR2fMcozyDqB4VIEDJRBeweAvLclkK2rKekZd%2BilYLWVvQahI1Ic4R%2Bgwfd%2BQdlgov98us1S8Qc2v4yZHh2w7Idz%2F5%2FptzlGY2HiLE%2FigtqmobdxZD%2FvYrZK8MXDJ1Ea7e6b52Hjbm2eypimrkgZ62BD35dRPZb6VAd7%2B6x7cku4NifIh1PX1%2B%2FFqF4y%2BDzKts51H9JqO0SBcotSI2gJp86BJhhrOJOnb19gX4Oi9%2Bc%2BNXWDu3YML%2FBp8QGOqUBY5qxndu2%2BBr%2FAXZpCS9sjkK0I7bn6yrHAKU9cAv8oNH0Ux%2FM2Pqcj4oIAJFH0XgsaGUaDPzLod%2BzIYr44bA8E5jM%2B00pG5GAfW56ffp1SDiBa40B1FybN9Quw0XdEeudg5DUlETKJ3nKnIVDUVYcNCM%2F%2FIPiKC4WVqWiOCp8aQmH2yWerHl%2BKxyBByy85yyL5xfrxfY3GUPtUQwzSm3jzfZ%2Byc2P&X-Amz-Signature=c6978c9b9c3032968861457acafaf51849c1370ce1feb8e0b731753cde4b1fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

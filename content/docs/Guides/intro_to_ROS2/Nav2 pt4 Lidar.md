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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XOTNOBJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmgJ04aqZkgeLCPa4pclyB2ai8CnBL15Mr7ovvsOLvZAiAbHLzTVQxcDvNguW3iQdNVteE%2Fs1YH3tGpziL0fGaVLyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOTXbHnA3D%2BqvMmCNKtwDOOE9EDhK2nmXtbstYs%2BLQqR3Y6sk7tvveayJmora1y3TWP5Z5iCiYZZL5iUIYYnAg3PLK552AARKFaZD%2FrUktGG%2Fjuvv6MCaAxvBgyY4EXR5PglR64mL02wQ6VmklZ%2F3r4bSFGK0AiR4nZr63aLUChBcCs2391sYsl28I4RGGGojpLdZDeiUKpDJnBDYJiKhv5%2FCPWT6BwKVnXq5BTbzwDj6njrfGuHEW%2FC4zZuV0KSeReOYsOclZYcLHWSt7tIMjnyuH7gCuqM0Iey14cPU9tCTjYkgmt03Qj4NxxHDh7m%2B2QujYXxoJW8VggY4HjS%2F6D9ubd6mtrMSf48gUEkmHvJ9SPSJGYDQK2SdyN7TL6JG8D4GtDHBB5QNGZ9gRv7TXz9ZgG%2FunXChwWtE6FFRhd8SZIsetV4gAwjl7FCtnGpUWgYd4vJ2Ko4gpvw1dBUH5Hq5vP8bPXNXsWaRZLruIRPn06tXRqt%2BjZXJWnruEHWYgPc4%2BTX2l1ETSlzGdosddlbhWqEii5p1Jo2RormykWMtaY%2FJd6eO6Q%2FHXlhrV7z1S4cAScJ5ntkTjwXscBn4OnoNiRjvF19wMtaKI2otFUYXx3G8GHHMtnm5HaDZkNq5iZEN2Z8%2FnpJcWigwpcLexAY6pgHY%2F7mJkR9a6hkTUtTVxMKdYgnki6eObx%2B2IDlWHqytcDGpwCFwhm7jQ%2BBXkKPwIwPOrd1cPdMGp8%2FMdm1bfT2aqBk%2FvgdLvBRbYTY9vqd%2FzEx2fII4rUN33U9xQgk9KFSUHbePx7XVx%2FZ2S0LJoa3JhMqJ3mLUpsiaUTvDQ5wyEDZv1CekPYgd4vu95yoC2EKVYsJHLLyHYrX1d3BzxDB48SBcdauB&X-Amz-Signature=438fece1af718d496a4401acf641f38d12c48b42edff7dce58a8ec374a5013f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633U6FOJE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdnJVgx2P3dP6EOnJGWmhLj5K2ZGUQL9apr65Mlk2fcAiBoOslGiXNptExnjGI00UoBtDdH6aNhplfDmg%2BzpCqY%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId34BRnQtxd4Y%2FaEKtwDn1cC%2BeAL%2B7kBSQzCS%2BaVEuN3kvnqftiVC9g%2B1mv1KcxLyHLyUir1zYeefRZP9JmhgAS%2B7IyT4sl76SRYFE9b32m0TtV7fdOdnBTBrlWpJj4FPAjCGOgdxvh4DqZBoU7qU2hLhsaDT0KHNd5qigPj6bHcZPLHNAJx6V8yqPL1DufqQiv%2FZ5dfbhVXwqZlbsttevOs9lRxFhBKvmlU8pcjX4%2BXsoYMq2GwzTuMG3rI%2BhC4lxfCHXw5iTXnRzeW251QaYCa2MujfKutj50V14JLCykR4Q5Vytl7bVZiVJVGx8OdnuhQ63cEO5cNr2PLhVmo89Xb489eZvPhc6ws2hA2WzCK7u8lHLkUXxphBvjClr6i19gSuakq9be4CeJqTYZiVU%2BvCQCKIXdtf%2FNmhLij1fZlWJ084ZUgj2m9Wr%2FvTej2XGo4qTGmvOL9hHujVbQwd3MYyx0Ri%2Bc%2BCc%2FxgK9khmk3T0GC9lZpymvEAcUtPF7WlQneJigryinRR2VvFJ66uHewO4UmCdmtR1sy3eOq19y3KwOfu%2BtomNj1O%2FKtzvs1kkW0Bb%2FAVXNLfyhNz6vLXwHcy0zy1hL2VGLgywzvXZ%2FOwoWUe1FN6GgFhDL2vbCYhi0s4NTPJXNGMP4w5cLexAY6pgFM3B1Gjkeoj7zwZ3%2B5Tu%2BrxwnFIW1VxRDckELd1iZy0HZH8GzaZje6lhTEwzIBMvoLSuDXJSnmEpT4gdM7p3z6G%2FLDmyf8pXIRbcam4%2BS%2BO21SPbaQwwjrqD2dt4nl3nHCskVVGTk%2F1Pc%2BCJAc4X90NhxorEH1BApq76atHj%2FftyuFjXl7A1PE1ucW8foipBq%2B%2FQ7Y%2FkoI8xnEnR3eUiMe89THbeE1&X-Amz-Signature=3eeaeaf7e0ff49ebfd4cc70932a3365e8a7a4ac86f3d992742ecea6cef228c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633U6FOJE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdnJVgx2P3dP6EOnJGWmhLj5K2ZGUQL9apr65Mlk2fcAiBoOslGiXNptExnjGI00UoBtDdH6aNhplfDmg%2BzpCqY%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId34BRnQtxd4Y%2FaEKtwDn1cC%2BeAL%2B7kBSQzCS%2BaVEuN3kvnqftiVC9g%2B1mv1KcxLyHLyUir1zYeefRZP9JmhgAS%2B7IyT4sl76SRYFE9b32m0TtV7fdOdnBTBrlWpJj4FPAjCGOgdxvh4DqZBoU7qU2hLhsaDT0KHNd5qigPj6bHcZPLHNAJx6V8yqPL1DufqQiv%2FZ5dfbhVXwqZlbsttevOs9lRxFhBKvmlU8pcjX4%2BXsoYMq2GwzTuMG3rI%2BhC4lxfCHXw5iTXnRzeW251QaYCa2MujfKutj50V14JLCykR4Q5Vytl7bVZiVJVGx8OdnuhQ63cEO5cNr2PLhVmo89Xb489eZvPhc6ws2hA2WzCK7u8lHLkUXxphBvjClr6i19gSuakq9be4CeJqTYZiVU%2BvCQCKIXdtf%2FNmhLij1fZlWJ084ZUgj2m9Wr%2FvTej2XGo4qTGmvOL9hHujVbQwd3MYyx0Ri%2Bc%2BCc%2FxgK9khmk3T0GC9lZpymvEAcUtPF7WlQneJigryinRR2VvFJ66uHewO4UmCdmtR1sy3eOq19y3KwOfu%2BtomNj1O%2FKtzvs1kkW0Bb%2FAVXNLfyhNz6vLXwHcy0zy1hL2VGLgywzvXZ%2FOwoWUe1FN6GgFhDL2vbCYhi0s4NTPJXNGMP4w5cLexAY6pgFM3B1Gjkeoj7zwZ3%2B5Tu%2BrxwnFIW1VxRDckELd1iZy0HZH8GzaZje6lhTEwzIBMvoLSuDXJSnmEpT4gdM7p3z6G%2FLDmyf8pXIRbcam4%2BS%2BO21SPbaQwwjrqD2dt4nl3nHCskVVGTk%2F1Pc%2BCJAc4X90NhxorEH1BApq76atHj%2FftyuFjXl7A1PE1ucW8foipBq%2B%2FQ7Y%2FkoI8xnEnR3eUiMe89THbeE1&X-Amz-Signature=f68a3bd3ea458fa2a400e39d87dc231d800b6270b354f860ae1682fbbe7fc667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633U6FOJE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdnJVgx2P3dP6EOnJGWmhLj5K2ZGUQL9apr65Mlk2fcAiBoOslGiXNptExnjGI00UoBtDdH6aNhplfDmg%2BzpCqY%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId34BRnQtxd4Y%2FaEKtwDn1cC%2BeAL%2B7kBSQzCS%2BaVEuN3kvnqftiVC9g%2B1mv1KcxLyHLyUir1zYeefRZP9JmhgAS%2B7IyT4sl76SRYFE9b32m0TtV7fdOdnBTBrlWpJj4FPAjCGOgdxvh4DqZBoU7qU2hLhsaDT0KHNd5qigPj6bHcZPLHNAJx6V8yqPL1DufqQiv%2FZ5dfbhVXwqZlbsttevOs9lRxFhBKvmlU8pcjX4%2BXsoYMq2GwzTuMG3rI%2BhC4lxfCHXw5iTXnRzeW251QaYCa2MujfKutj50V14JLCykR4Q5Vytl7bVZiVJVGx8OdnuhQ63cEO5cNr2PLhVmo89Xb489eZvPhc6ws2hA2WzCK7u8lHLkUXxphBvjClr6i19gSuakq9be4CeJqTYZiVU%2BvCQCKIXdtf%2FNmhLij1fZlWJ084ZUgj2m9Wr%2FvTej2XGo4qTGmvOL9hHujVbQwd3MYyx0Ri%2Bc%2BCc%2FxgK9khmk3T0GC9lZpymvEAcUtPF7WlQneJigryinRR2VvFJ66uHewO4UmCdmtR1sy3eOq19y3KwOfu%2BtomNj1O%2FKtzvs1kkW0Bb%2FAVXNLfyhNz6vLXwHcy0zy1hL2VGLgywzvXZ%2FOwoWUe1FN6GgFhDL2vbCYhi0s4NTPJXNGMP4w5cLexAY6pgFM3B1Gjkeoj7zwZ3%2B5Tu%2BrxwnFIW1VxRDckELd1iZy0HZH8GzaZje6lhTEwzIBMvoLSuDXJSnmEpT4gdM7p3z6G%2FLDmyf8pXIRbcam4%2BS%2BO21SPbaQwwjrqD2dt4nl3nHCskVVGTk%2F1Pc%2BCJAc4X90NhxorEH1BApq76atHj%2FftyuFjXl7A1PE1ucW8foipBq%2B%2FQ7Y%2FkoI8xnEnR3eUiMe89THbeE1&X-Amz-Signature=5c8145fdd8529078c8c705921db74c2b18fa649375902eef7df3aac79b056143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633U6FOJE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdnJVgx2P3dP6EOnJGWmhLj5K2ZGUQL9apr65Mlk2fcAiBoOslGiXNptExnjGI00UoBtDdH6aNhplfDmg%2BzpCqY%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId34BRnQtxd4Y%2FaEKtwDn1cC%2BeAL%2B7kBSQzCS%2BaVEuN3kvnqftiVC9g%2B1mv1KcxLyHLyUir1zYeefRZP9JmhgAS%2B7IyT4sl76SRYFE9b32m0TtV7fdOdnBTBrlWpJj4FPAjCGOgdxvh4DqZBoU7qU2hLhsaDT0KHNd5qigPj6bHcZPLHNAJx6V8yqPL1DufqQiv%2FZ5dfbhVXwqZlbsttevOs9lRxFhBKvmlU8pcjX4%2BXsoYMq2GwzTuMG3rI%2BhC4lxfCHXw5iTXnRzeW251QaYCa2MujfKutj50V14JLCykR4Q5Vytl7bVZiVJVGx8OdnuhQ63cEO5cNr2PLhVmo89Xb489eZvPhc6ws2hA2WzCK7u8lHLkUXxphBvjClr6i19gSuakq9be4CeJqTYZiVU%2BvCQCKIXdtf%2FNmhLij1fZlWJ084ZUgj2m9Wr%2FvTej2XGo4qTGmvOL9hHujVbQwd3MYyx0Ri%2Bc%2BCc%2FxgK9khmk3T0GC9lZpymvEAcUtPF7WlQneJigryinRR2VvFJ66uHewO4UmCdmtR1sy3eOq19y3KwOfu%2BtomNj1O%2FKtzvs1kkW0Bb%2FAVXNLfyhNz6vLXwHcy0zy1hL2VGLgywzvXZ%2FOwoWUe1FN6GgFhDL2vbCYhi0s4NTPJXNGMP4w5cLexAY6pgFM3B1Gjkeoj7zwZ3%2B5Tu%2BrxwnFIW1VxRDckELd1iZy0HZH8GzaZje6lhTEwzIBMvoLSuDXJSnmEpT4gdM7p3z6G%2FLDmyf8pXIRbcam4%2BS%2BO21SPbaQwwjrqD2dt4nl3nHCskVVGTk%2F1Pc%2BCJAc4X90NhxorEH1BApq76atHj%2FftyuFjXl7A1PE1ucW8foipBq%2B%2FQ7Y%2FkoI8xnEnR3eUiMe89THbeE1&X-Amz-Signature=0de2ab20774d8a9da54c37b6be7110e8c5b6e408eb8daa47632622f553a498e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633U6FOJE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdnJVgx2P3dP6EOnJGWmhLj5K2ZGUQL9apr65Mlk2fcAiBoOslGiXNptExnjGI00UoBtDdH6aNhplfDmg%2BzpCqY%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId34BRnQtxd4Y%2FaEKtwDn1cC%2BeAL%2B7kBSQzCS%2BaVEuN3kvnqftiVC9g%2B1mv1KcxLyHLyUir1zYeefRZP9JmhgAS%2B7IyT4sl76SRYFE9b32m0TtV7fdOdnBTBrlWpJj4FPAjCGOgdxvh4DqZBoU7qU2hLhsaDT0KHNd5qigPj6bHcZPLHNAJx6V8yqPL1DufqQiv%2FZ5dfbhVXwqZlbsttevOs9lRxFhBKvmlU8pcjX4%2BXsoYMq2GwzTuMG3rI%2BhC4lxfCHXw5iTXnRzeW251QaYCa2MujfKutj50V14JLCykR4Q5Vytl7bVZiVJVGx8OdnuhQ63cEO5cNr2PLhVmo89Xb489eZvPhc6ws2hA2WzCK7u8lHLkUXxphBvjClr6i19gSuakq9be4CeJqTYZiVU%2BvCQCKIXdtf%2FNmhLij1fZlWJ084ZUgj2m9Wr%2FvTej2XGo4qTGmvOL9hHujVbQwd3MYyx0Ri%2Bc%2BCc%2FxgK9khmk3T0GC9lZpymvEAcUtPF7WlQneJigryinRR2VvFJ66uHewO4UmCdmtR1sy3eOq19y3KwOfu%2BtomNj1O%2FKtzvs1kkW0Bb%2FAVXNLfyhNz6vLXwHcy0zy1hL2VGLgywzvXZ%2FOwoWUe1FN6GgFhDL2vbCYhi0s4NTPJXNGMP4w5cLexAY6pgFM3B1Gjkeoj7zwZ3%2B5Tu%2BrxwnFIW1VxRDckELd1iZy0HZH8GzaZje6lhTEwzIBMvoLSuDXJSnmEpT4gdM7p3z6G%2FLDmyf8pXIRbcam4%2BS%2BO21SPbaQwwjrqD2dt4nl3nHCskVVGTk%2F1Pc%2BCJAc4X90NhxorEH1BApq76atHj%2FftyuFjXl7A1PE1ucW8foipBq%2B%2FQ7Y%2FkoI8xnEnR3eUiMe89THbeE1&X-Amz-Signature=c559096297f348bff47179cdf0783cd43bd5ead07f772ba85e3fc7f9ae78461e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633U6FOJE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdnJVgx2P3dP6EOnJGWmhLj5K2ZGUQL9apr65Mlk2fcAiBoOslGiXNptExnjGI00UoBtDdH6aNhplfDmg%2BzpCqY%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId34BRnQtxd4Y%2FaEKtwDn1cC%2BeAL%2B7kBSQzCS%2BaVEuN3kvnqftiVC9g%2B1mv1KcxLyHLyUir1zYeefRZP9JmhgAS%2B7IyT4sl76SRYFE9b32m0TtV7fdOdnBTBrlWpJj4FPAjCGOgdxvh4DqZBoU7qU2hLhsaDT0KHNd5qigPj6bHcZPLHNAJx6V8yqPL1DufqQiv%2FZ5dfbhVXwqZlbsttevOs9lRxFhBKvmlU8pcjX4%2BXsoYMq2GwzTuMG3rI%2BhC4lxfCHXw5iTXnRzeW251QaYCa2MujfKutj50V14JLCykR4Q5Vytl7bVZiVJVGx8OdnuhQ63cEO5cNr2PLhVmo89Xb489eZvPhc6ws2hA2WzCK7u8lHLkUXxphBvjClr6i19gSuakq9be4CeJqTYZiVU%2BvCQCKIXdtf%2FNmhLij1fZlWJ084ZUgj2m9Wr%2FvTej2XGo4qTGmvOL9hHujVbQwd3MYyx0Ri%2Bc%2BCc%2FxgK9khmk3T0GC9lZpymvEAcUtPF7WlQneJigryinRR2VvFJ66uHewO4UmCdmtR1sy3eOq19y3KwOfu%2BtomNj1O%2FKtzvs1kkW0Bb%2FAVXNLfyhNz6vLXwHcy0zy1hL2VGLgywzvXZ%2FOwoWUe1FN6GgFhDL2vbCYhi0s4NTPJXNGMP4w5cLexAY6pgFM3B1Gjkeoj7zwZ3%2B5Tu%2BrxwnFIW1VxRDckELd1iZy0HZH8GzaZje6lhTEwzIBMvoLSuDXJSnmEpT4gdM7p3z6G%2FLDmyf8pXIRbcam4%2BS%2BO21SPbaQwwjrqD2dt4nl3nHCskVVGTk%2F1Pc%2BCJAc4X90NhxorEH1BApq76atHj%2FftyuFjXl7A1PE1ucW8foipBq%2B%2FQ7Y%2FkoI8xnEnR3eUiMe89THbeE1&X-Amz-Signature=0e283ab8910040c434be94fcae2fff60d0e620272ea219fc4b67c6b1c3018098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633U6FOJE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdnJVgx2P3dP6EOnJGWmhLj5K2ZGUQL9apr65Mlk2fcAiBoOslGiXNptExnjGI00UoBtDdH6aNhplfDmg%2BzpCqY%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId34BRnQtxd4Y%2FaEKtwDn1cC%2BeAL%2B7kBSQzCS%2BaVEuN3kvnqftiVC9g%2B1mv1KcxLyHLyUir1zYeefRZP9JmhgAS%2B7IyT4sl76SRYFE9b32m0TtV7fdOdnBTBrlWpJj4FPAjCGOgdxvh4DqZBoU7qU2hLhsaDT0KHNd5qigPj6bHcZPLHNAJx6V8yqPL1DufqQiv%2FZ5dfbhVXwqZlbsttevOs9lRxFhBKvmlU8pcjX4%2BXsoYMq2GwzTuMG3rI%2BhC4lxfCHXw5iTXnRzeW251QaYCa2MujfKutj50V14JLCykR4Q5Vytl7bVZiVJVGx8OdnuhQ63cEO5cNr2PLhVmo89Xb489eZvPhc6ws2hA2WzCK7u8lHLkUXxphBvjClr6i19gSuakq9be4CeJqTYZiVU%2BvCQCKIXdtf%2FNmhLij1fZlWJ084ZUgj2m9Wr%2FvTej2XGo4qTGmvOL9hHujVbQwd3MYyx0Ri%2Bc%2BCc%2FxgK9khmk3T0GC9lZpymvEAcUtPF7WlQneJigryinRR2VvFJ66uHewO4UmCdmtR1sy3eOq19y3KwOfu%2BtomNj1O%2FKtzvs1kkW0Bb%2FAVXNLfyhNz6vLXwHcy0zy1hL2VGLgywzvXZ%2FOwoWUe1FN6GgFhDL2vbCYhi0s4NTPJXNGMP4w5cLexAY6pgFM3B1Gjkeoj7zwZ3%2B5Tu%2BrxwnFIW1VxRDckELd1iZy0HZH8GzaZje6lhTEwzIBMvoLSuDXJSnmEpT4gdM7p3z6G%2FLDmyf8pXIRbcam4%2BS%2BO21SPbaQwwjrqD2dt4nl3nHCskVVGTk%2F1Pc%2BCJAc4X90NhxorEH1BApq76atHj%2FftyuFjXl7A1PE1ucW8foipBq%2B%2FQ7Y%2FkoI8xnEnR3eUiMe89THbeE1&X-Amz-Signature=648ec779342017923a5f188abe042f866b571af6b711dfdeec47093196648ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633U6FOJE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdnJVgx2P3dP6EOnJGWmhLj5K2ZGUQL9apr65Mlk2fcAiBoOslGiXNptExnjGI00UoBtDdH6aNhplfDmg%2BzpCqY%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId34BRnQtxd4Y%2FaEKtwDn1cC%2BeAL%2B7kBSQzCS%2BaVEuN3kvnqftiVC9g%2B1mv1KcxLyHLyUir1zYeefRZP9JmhgAS%2B7IyT4sl76SRYFE9b32m0TtV7fdOdnBTBrlWpJj4FPAjCGOgdxvh4DqZBoU7qU2hLhsaDT0KHNd5qigPj6bHcZPLHNAJx6V8yqPL1DufqQiv%2FZ5dfbhVXwqZlbsttevOs9lRxFhBKvmlU8pcjX4%2BXsoYMq2GwzTuMG3rI%2BhC4lxfCHXw5iTXnRzeW251QaYCa2MujfKutj50V14JLCykR4Q5Vytl7bVZiVJVGx8OdnuhQ63cEO5cNr2PLhVmo89Xb489eZvPhc6ws2hA2WzCK7u8lHLkUXxphBvjClr6i19gSuakq9be4CeJqTYZiVU%2BvCQCKIXdtf%2FNmhLij1fZlWJ084ZUgj2m9Wr%2FvTej2XGo4qTGmvOL9hHujVbQwd3MYyx0Ri%2Bc%2BCc%2FxgK9khmk3T0GC9lZpymvEAcUtPF7WlQneJigryinRR2VvFJ66uHewO4UmCdmtR1sy3eOq19y3KwOfu%2BtomNj1O%2FKtzvs1kkW0Bb%2FAVXNLfyhNz6vLXwHcy0zy1hL2VGLgywzvXZ%2FOwoWUe1FN6GgFhDL2vbCYhi0s4NTPJXNGMP4w5cLexAY6pgFM3B1Gjkeoj7zwZ3%2B5Tu%2BrxwnFIW1VxRDckELd1iZy0HZH8GzaZje6lhTEwzIBMvoLSuDXJSnmEpT4gdM7p3z6G%2FLDmyf8pXIRbcam4%2BS%2BO21SPbaQwwjrqD2dt4nl3nHCskVVGTk%2F1Pc%2BCJAc4X90NhxorEH1BApq76atHj%2FftyuFjXl7A1PE1ucW8foipBq%2B%2FQ7Y%2FkoI8xnEnR3eUiMe89THbeE1&X-Amz-Signature=788a21553b57a8e9afb82e6b0ac230e8cb78e6f481e065618728ab9aff6bcdf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633U6FOJE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdnJVgx2P3dP6EOnJGWmhLj5K2ZGUQL9apr65Mlk2fcAiBoOslGiXNptExnjGI00UoBtDdH6aNhplfDmg%2BzpCqY%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId34BRnQtxd4Y%2FaEKtwDn1cC%2BeAL%2B7kBSQzCS%2BaVEuN3kvnqftiVC9g%2B1mv1KcxLyHLyUir1zYeefRZP9JmhgAS%2B7IyT4sl76SRYFE9b32m0TtV7fdOdnBTBrlWpJj4FPAjCGOgdxvh4DqZBoU7qU2hLhsaDT0KHNd5qigPj6bHcZPLHNAJx6V8yqPL1DufqQiv%2FZ5dfbhVXwqZlbsttevOs9lRxFhBKvmlU8pcjX4%2BXsoYMq2GwzTuMG3rI%2BhC4lxfCHXw5iTXnRzeW251QaYCa2MujfKutj50V14JLCykR4Q5Vytl7bVZiVJVGx8OdnuhQ63cEO5cNr2PLhVmo89Xb489eZvPhc6ws2hA2WzCK7u8lHLkUXxphBvjClr6i19gSuakq9be4CeJqTYZiVU%2BvCQCKIXdtf%2FNmhLij1fZlWJ084ZUgj2m9Wr%2FvTej2XGo4qTGmvOL9hHujVbQwd3MYyx0Ri%2Bc%2BCc%2FxgK9khmk3T0GC9lZpymvEAcUtPF7WlQneJigryinRR2VvFJ66uHewO4UmCdmtR1sy3eOq19y3KwOfu%2BtomNj1O%2FKtzvs1kkW0Bb%2FAVXNLfyhNz6vLXwHcy0zy1hL2VGLgywzvXZ%2FOwoWUe1FN6GgFhDL2vbCYhi0s4NTPJXNGMP4w5cLexAY6pgFM3B1Gjkeoj7zwZ3%2B5Tu%2BrxwnFIW1VxRDckELd1iZy0HZH8GzaZje6lhTEwzIBMvoLSuDXJSnmEpT4gdM7p3z6G%2FLDmyf8pXIRbcam4%2BS%2BO21SPbaQwwjrqD2dt4nl3nHCskVVGTk%2F1Pc%2BCJAc4X90NhxorEH1BApq76atHj%2FftyuFjXl7A1PE1ucW8foipBq%2B%2FQ7Y%2FkoI8xnEnR3eUiMe89THbeE1&X-Amz-Signature=0060a2fe606828a1ea42744a252ac2a786a25b69f6196e39f5b7b28820a4d4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633U6FOJE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdnJVgx2P3dP6EOnJGWmhLj5K2ZGUQL9apr65Mlk2fcAiBoOslGiXNptExnjGI00UoBtDdH6aNhplfDmg%2BzpCqY%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId34BRnQtxd4Y%2FaEKtwDn1cC%2BeAL%2B7kBSQzCS%2BaVEuN3kvnqftiVC9g%2B1mv1KcxLyHLyUir1zYeefRZP9JmhgAS%2B7IyT4sl76SRYFE9b32m0TtV7fdOdnBTBrlWpJj4FPAjCGOgdxvh4DqZBoU7qU2hLhsaDT0KHNd5qigPj6bHcZPLHNAJx6V8yqPL1DufqQiv%2FZ5dfbhVXwqZlbsttevOs9lRxFhBKvmlU8pcjX4%2BXsoYMq2GwzTuMG3rI%2BhC4lxfCHXw5iTXnRzeW251QaYCa2MujfKutj50V14JLCykR4Q5Vytl7bVZiVJVGx8OdnuhQ63cEO5cNr2PLhVmo89Xb489eZvPhc6ws2hA2WzCK7u8lHLkUXxphBvjClr6i19gSuakq9be4CeJqTYZiVU%2BvCQCKIXdtf%2FNmhLij1fZlWJ084ZUgj2m9Wr%2FvTej2XGo4qTGmvOL9hHujVbQwd3MYyx0Ri%2Bc%2BCc%2FxgK9khmk3T0GC9lZpymvEAcUtPF7WlQneJigryinRR2VvFJ66uHewO4UmCdmtR1sy3eOq19y3KwOfu%2BtomNj1O%2FKtzvs1kkW0Bb%2FAVXNLfyhNz6vLXwHcy0zy1hL2VGLgywzvXZ%2FOwoWUe1FN6GgFhDL2vbCYhi0s4NTPJXNGMP4w5cLexAY6pgFM3B1Gjkeoj7zwZ3%2B5Tu%2BrxwnFIW1VxRDckELd1iZy0HZH8GzaZje6lhTEwzIBMvoLSuDXJSnmEpT4gdM7p3z6G%2FLDmyf8pXIRbcam4%2BS%2BO21SPbaQwwjrqD2dt4nl3nHCskVVGTk%2F1Pc%2BCJAc4X90NhxorEH1BApq76atHj%2FftyuFjXl7A1PE1ucW8foipBq%2B%2FQ7Y%2FkoI8xnEnR3eUiMe89THbeE1&X-Amz-Signature=26a77cfc4b5edc64fa3fbfcef1ff94ff59ec9645114713c311e5c2f01284d92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYO4EU4M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv2m7vZVUG13v6rPXSLb9%2BtuwIoun2mifntIgj6hHjTQIgZ5TELg8q%2Ff0GQGcaYegHgdL6r86xSZ8yXX%2B3AJRcUSMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIv3LPwVz2suIAY4cyrcA%2Fjg08LvLBC%2BQD3Jy1VnVeUv70DqV2ZOylXlik3LNxwA%2BY6Zt1OP4fOpjoJHF99d4jslUrmycvCErbWUm%2Bmqk8Ys%2BRVHzxvljKHAY3RlUdndUpmy03id%2B6UR1rdBiu1lxQyNK8F%2FNlrWaKD3ofCNaacMzgI2DOUGJCSd1Ntq0t4J1Moa4GRvXQPeSGzZYq1aWaYiqoxYqY%2Bk2GjsnJxG5BoY97p%2Bmg2a2DR7NoHTXxGYsNlrOl4ta%2Bm9Qwxbyw0P1cv7zKJmiBMx5CkHfGoDKSRzRoG58r0EOjj3cgmGUEUqh4D03yNP1qbRvPxQmK%2Bkf5%2Fd3REIjxUd0UOCCaW9%2Fv0P0065VAY7a23RNKXl3uG%2F9uUTDnOtR71kZawjmkIIS7pGoN8GILnUdKSALSmFXK0odaUjF9Pcp06IAu16kbraIXrlMunwy8aYIlk0Dobq6sqt%2BlWmD5LzTh3hq86oP3v2TmxdhwXa4vtTWWnif1qX3jSv61W14HqDOm8uoBRsBMU1bceSIuNFlm9Ws1mTlPiUoytFb023EOu3K1eatadU1aM4XEIvpEsg4dxktCz%2B75jIu3dKAZdfvyRDq1Sp6Ef3gDOXlRuHcyE9Ku9hErRJKea8h615Zosn5QJzMMe%2F4sQGOqUBN3Wn8NY6OalQLs3%2F9lQcVImwNeN50gsH1L%2BpYZUiLi7P8ja9LpjtQv9pNr4KUZS%2BKb0D4Pf5%2FxmkEjbuDkeXtJKmO%2B8GiOxT8tUtB42Xv1mKFbL5FbdVLIhVUcRsy8VczNFtP0jKQvb1E5AGV2L26RxGvzF3lONQhM%2F4JeKTmxMGmKIAVIYpZYwDX%2BgolD77%2FwFFh6VOiDteexmd%2FA6Z57oQHO5%2B&X-Amz-Signature=c68ce69c5972abbb43abc725a9642e8f19e83a1484c3ce78505f1ead76bc715b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJPUYCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDpLHmxoLf%2FBy5umW%2FKWTz%2Fn%2FFuQZ2NgfPQZNmnPtg%2FAiBYkkBYhZgZzE3UONswyQ7%2BmQD8OTntzkf2V6u4O66taCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKNpyF21j71pgV74KtwD2eWcVlxLQ07%2BzCZqoa58dC3Jlr2u9Jve43oQ5jiCgB9gwR4olknoSTkKhaL18iFPAmM%2BHzQhAReWZGGRXxZQh63lTVaWGjlGy5scF5HpfjMqm5%2B3ctpPateE7P6tR9LXhIF25dSHwvsgulAyEYHOJDJxNiTC9dJ2sMKaKiBXAZ1TuVBwNH%2BrAh00HvXQK7ASRwxpOn8GNWGTimpmSKJYdXGSPs4wMRiNvzlMBpsxRFIiBfXauaMkciWDk8cfFlVg3hn3Gvw7F2IvA2SL87QlsPz7NIQuiwWXHOIGfLxDGnC%2FUpMaFPfnT6RRfKoNOf4SmrcqPe%2Fd9cGSl0DSPrSQYf1GUk6aESsnYN9xhHk%2Fpcwm7%2B%2BsG8Hrcz2T7Krc7XSfFcxSurvg72efF0mn6ozPTq6D3BpFNwG8ov5q3abnMPML%2B8H5evwEsjYcmYItZ9FT8XfpouWBvFRMSqLTlftqD9q2l%2B5ud6CwcUXjbPp9IH4pwv8ANI%2FAVkjd4JnvI0QY5qZMtv1IVv0G2Ck3J9SedjmEhQY869y4D79SzKceWEalsTHP5w8DUx1bp7wNyn5hQg2ZHSOhR9AQbfb6woRmg%2Bxsu0dv0D8Zz61i%2BfIWByPcluowbjKB89vezAEwxr%2FixAY6pgElltkRm%2FqZkwzXvBFiszJF9Mfn20OfZYbdmFDmczD2qxrXUBJqg5PiO6%2FbIlRaMiMNG3fGIu29wMDV2%2BerjcN083Qu3zj0kj6kN%2Fk0xdX1XbvFlJz7%2B3SlTykhTCyiTnZ9Lkv0PuM8fMZ%2B0f7%2Bw0CdP0vv3GpCBwSz6YCNvLLoyBTa8dQAfqOHFlK1TORZaBCJqQn5vN9tzYKJhtwLxj2RHEF47lZY&X-Amz-Signature=26cf531ca145075b74d15c4da75590f8bb6f29b1518ecb2b4c6bbba20d62ca87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJPUYCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDpLHmxoLf%2FBy5umW%2FKWTz%2Fn%2FFuQZ2NgfPQZNmnPtg%2FAiBYkkBYhZgZzE3UONswyQ7%2BmQD8OTntzkf2V6u4O66taCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKNpyF21j71pgV74KtwD2eWcVlxLQ07%2BzCZqoa58dC3Jlr2u9Jve43oQ5jiCgB9gwR4olknoSTkKhaL18iFPAmM%2BHzQhAReWZGGRXxZQh63lTVaWGjlGy5scF5HpfjMqm5%2B3ctpPateE7P6tR9LXhIF25dSHwvsgulAyEYHOJDJxNiTC9dJ2sMKaKiBXAZ1TuVBwNH%2BrAh00HvXQK7ASRwxpOn8GNWGTimpmSKJYdXGSPs4wMRiNvzlMBpsxRFIiBfXauaMkciWDk8cfFlVg3hn3Gvw7F2IvA2SL87QlsPz7NIQuiwWXHOIGfLxDGnC%2FUpMaFPfnT6RRfKoNOf4SmrcqPe%2Fd9cGSl0DSPrSQYf1GUk6aESsnYN9xhHk%2Fpcwm7%2B%2BsG8Hrcz2T7Krc7XSfFcxSurvg72efF0mn6ozPTq6D3BpFNwG8ov5q3abnMPML%2B8H5evwEsjYcmYItZ9FT8XfpouWBvFRMSqLTlftqD9q2l%2B5ud6CwcUXjbPp9IH4pwv8ANI%2FAVkjd4JnvI0QY5qZMtv1IVv0G2Ck3J9SedjmEhQY869y4D79SzKceWEalsTHP5w8DUx1bp7wNyn5hQg2ZHSOhR9AQbfb6woRmg%2Bxsu0dv0D8Zz61i%2BfIWByPcluowbjKB89vezAEwxr%2FixAY6pgElltkRm%2FqZkwzXvBFiszJF9Mfn20OfZYbdmFDmczD2qxrXUBJqg5PiO6%2FbIlRaMiMNG3fGIu29wMDV2%2BerjcN083Qu3zj0kj6kN%2Fk0xdX1XbvFlJz7%2B3SlTykhTCyiTnZ9Lkv0PuM8fMZ%2B0f7%2Bw0CdP0vv3GpCBwSz6YCNvLLoyBTa8dQAfqOHFlK1TORZaBCJqQn5vN9tzYKJhtwLxj2RHEF47lZY&X-Amz-Signature=7d4519f2cb5d780c2588fe1bf333bd854297e52fb7a17f367d0b4761caa96331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJPUYCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDpLHmxoLf%2FBy5umW%2FKWTz%2Fn%2FFuQZ2NgfPQZNmnPtg%2FAiBYkkBYhZgZzE3UONswyQ7%2BmQD8OTntzkf2V6u4O66taCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKNpyF21j71pgV74KtwD2eWcVlxLQ07%2BzCZqoa58dC3Jlr2u9Jve43oQ5jiCgB9gwR4olknoSTkKhaL18iFPAmM%2BHzQhAReWZGGRXxZQh63lTVaWGjlGy5scF5HpfjMqm5%2B3ctpPateE7P6tR9LXhIF25dSHwvsgulAyEYHOJDJxNiTC9dJ2sMKaKiBXAZ1TuVBwNH%2BrAh00HvXQK7ASRwxpOn8GNWGTimpmSKJYdXGSPs4wMRiNvzlMBpsxRFIiBfXauaMkciWDk8cfFlVg3hn3Gvw7F2IvA2SL87QlsPz7NIQuiwWXHOIGfLxDGnC%2FUpMaFPfnT6RRfKoNOf4SmrcqPe%2Fd9cGSl0DSPrSQYf1GUk6aESsnYN9xhHk%2Fpcwm7%2B%2BsG8Hrcz2T7Krc7XSfFcxSurvg72efF0mn6ozPTq6D3BpFNwG8ov5q3abnMPML%2B8H5evwEsjYcmYItZ9FT8XfpouWBvFRMSqLTlftqD9q2l%2B5ud6CwcUXjbPp9IH4pwv8ANI%2FAVkjd4JnvI0QY5qZMtv1IVv0G2Ck3J9SedjmEhQY869y4D79SzKceWEalsTHP5w8DUx1bp7wNyn5hQg2ZHSOhR9AQbfb6woRmg%2Bxsu0dv0D8Zz61i%2BfIWByPcluowbjKB89vezAEwxr%2FixAY6pgElltkRm%2FqZkwzXvBFiszJF9Mfn20OfZYbdmFDmczD2qxrXUBJqg5PiO6%2FbIlRaMiMNG3fGIu29wMDV2%2BerjcN083Qu3zj0kj6kN%2Fk0xdX1XbvFlJz7%2B3SlTykhTCyiTnZ9Lkv0PuM8fMZ%2B0f7%2Bw0CdP0vv3GpCBwSz6YCNvLLoyBTa8dQAfqOHFlK1TORZaBCJqQn5vN9tzYKJhtwLxj2RHEF47lZY&X-Amz-Signature=3cacb1bab2b4967082ed377996da5fafb4c1338a03a6a033188ca5eae3f665de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJPUYCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDpLHmxoLf%2FBy5umW%2FKWTz%2Fn%2FFuQZ2NgfPQZNmnPtg%2FAiBYkkBYhZgZzE3UONswyQ7%2BmQD8OTntzkf2V6u4O66taCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKNpyF21j71pgV74KtwD2eWcVlxLQ07%2BzCZqoa58dC3Jlr2u9Jve43oQ5jiCgB9gwR4olknoSTkKhaL18iFPAmM%2BHzQhAReWZGGRXxZQh63lTVaWGjlGy5scF5HpfjMqm5%2B3ctpPateE7P6tR9LXhIF25dSHwvsgulAyEYHOJDJxNiTC9dJ2sMKaKiBXAZ1TuVBwNH%2BrAh00HvXQK7ASRwxpOn8GNWGTimpmSKJYdXGSPs4wMRiNvzlMBpsxRFIiBfXauaMkciWDk8cfFlVg3hn3Gvw7F2IvA2SL87QlsPz7NIQuiwWXHOIGfLxDGnC%2FUpMaFPfnT6RRfKoNOf4SmrcqPe%2Fd9cGSl0DSPrSQYf1GUk6aESsnYN9xhHk%2Fpcwm7%2B%2BsG8Hrcz2T7Krc7XSfFcxSurvg72efF0mn6ozPTq6D3BpFNwG8ov5q3abnMPML%2B8H5evwEsjYcmYItZ9FT8XfpouWBvFRMSqLTlftqD9q2l%2B5ud6CwcUXjbPp9IH4pwv8ANI%2FAVkjd4JnvI0QY5qZMtv1IVv0G2Ck3J9SedjmEhQY869y4D79SzKceWEalsTHP5w8DUx1bp7wNyn5hQg2ZHSOhR9AQbfb6woRmg%2Bxsu0dv0D8Zz61i%2BfIWByPcluowbjKB89vezAEwxr%2FixAY6pgElltkRm%2FqZkwzXvBFiszJF9Mfn20OfZYbdmFDmczD2qxrXUBJqg5PiO6%2FbIlRaMiMNG3fGIu29wMDV2%2BerjcN083Qu3zj0kj6kN%2Fk0xdX1XbvFlJz7%2B3SlTykhTCyiTnZ9Lkv0PuM8fMZ%2B0f7%2Bw0CdP0vv3GpCBwSz6YCNvLLoyBTa8dQAfqOHFlK1TORZaBCJqQn5vN9tzYKJhtwLxj2RHEF47lZY&X-Amz-Signature=647e95960a88be745de88722725ec9261d59bd6d26e9a69ad36ab98c25266a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJPUYCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDpLHmxoLf%2FBy5umW%2FKWTz%2Fn%2FFuQZ2NgfPQZNmnPtg%2FAiBYkkBYhZgZzE3UONswyQ7%2BmQD8OTntzkf2V6u4O66taCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKNpyF21j71pgV74KtwD2eWcVlxLQ07%2BzCZqoa58dC3Jlr2u9Jve43oQ5jiCgB9gwR4olknoSTkKhaL18iFPAmM%2BHzQhAReWZGGRXxZQh63lTVaWGjlGy5scF5HpfjMqm5%2B3ctpPateE7P6tR9LXhIF25dSHwvsgulAyEYHOJDJxNiTC9dJ2sMKaKiBXAZ1TuVBwNH%2BrAh00HvXQK7ASRwxpOn8GNWGTimpmSKJYdXGSPs4wMRiNvzlMBpsxRFIiBfXauaMkciWDk8cfFlVg3hn3Gvw7F2IvA2SL87QlsPz7NIQuiwWXHOIGfLxDGnC%2FUpMaFPfnT6RRfKoNOf4SmrcqPe%2Fd9cGSl0DSPrSQYf1GUk6aESsnYN9xhHk%2Fpcwm7%2B%2BsG8Hrcz2T7Krc7XSfFcxSurvg72efF0mn6ozPTq6D3BpFNwG8ov5q3abnMPML%2B8H5evwEsjYcmYItZ9FT8XfpouWBvFRMSqLTlftqD9q2l%2B5ud6CwcUXjbPp9IH4pwv8ANI%2FAVkjd4JnvI0QY5qZMtv1IVv0G2Ck3J9SedjmEhQY869y4D79SzKceWEalsTHP5w8DUx1bp7wNyn5hQg2ZHSOhR9AQbfb6woRmg%2Bxsu0dv0D8Zz61i%2BfIWByPcluowbjKB89vezAEwxr%2FixAY6pgElltkRm%2FqZkwzXvBFiszJF9Mfn20OfZYbdmFDmczD2qxrXUBJqg5PiO6%2FbIlRaMiMNG3fGIu29wMDV2%2BerjcN083Qu3zj0kj6kN%2Fk0xdX1XbvFlJz7%2B3SlTykhTCyiTnZ9Lkv0PuM8fMZ%2B0f7%2Bw0CdP0vv3GpCBwSz6YCNvLLoyBTa8dQAfqOHFlK1TORZaBCJqQn5vN9tzYKJhtwLxj2RHEF47lZY&X-Amz-Signature=abfa8c15d7eebf98d9d18f3f84852cfeae8233b3e97bab8ef722936102435a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJPUYCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDpLHmxoLf%2FBy5umW%2FKWTz%2Fn%2FFuQZ2NgfPQZNmnPtg%2FAiBYkkBYhZgZzE3UONswyQ7%2BmQD8OTntzkf2V6u4O66taCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKNpyF21j71pgV74KtwD2eWcVlxLQ07%2BzCZqoa58dC3Jlr2u9Jve43oQ5jiCgB9gwR4olknoSTkKhaL18iFPAmM%2BHzQhAReWZGGRXxZQh63lTVaWGjlGy5scF5HpfjMqm5%2B3ctpPateE7P6tR9LXhIF25dSHwvsgulAyEYHOJDJxNiTC9dJ2sMKaKiBXAZ1TuVBwNH%2BrAh00HvXQK7ASRwxpOn8GNWGTimpmSKJYdXGSPs4wMRiNvzlMBpsxRFIiBfXauaMkciWDk8cfFlVg3hn3Gvw7F2IvA2SL87QlsPz7NIQuiwWXHOIGfLxDGnC%2FUpMaFPfnT6RRfKoNOf4SmrcqPe%2Fd9cGSl0DSPrSQYf1GUk6aESsnYN9xhHk%2Fpcwm7%2B%2BsG8Hrcz2T7Krc7XSfFcxSurvg72efF0mn6ozPTq6D3BpFNwG8ov5q3abnMPML%2B8H5evwEsjYcmYItZ9FT8XfpouWBvFRMSqLTlftqD9q2l%2B5ud6CwcUXjbPp9IH4pwv8ANI%2FAVkjd4JnvI0QY5qZMtv1IVv0G2Ck3J9SedjmEhQY869y4D79SzKceWEalsTHP5w8DUx1bp7wNyn5hQg2ZHSOhR9AQbfb6woRmg%2Bxsu0dv0D8Zz61i%2BfIWByPcluowbjKB89vezAEwxr%2FixAY6pgElltkRm%2FqZkwzXvBFiszJF9Mfn20OfZYbdmFDmczD2qxrXUBJqg5PiO6%2FbIlRaMiMNG3fGIu29wMDV2%2BerjcN083Qu3zj0kj6kN%2Fk0xdX1XbvFlJz7%2B3SlTykhTCyiTnZ9Lkv0PuM8fMZ%2B0f7%2Bw0CdP0vv3GpCBwSz6YCNvLLoyBTa8dQAfqOHFlK1TORZaBCJqQn5vN9tzYKJhtwLxj2RHEF47lZY&X-Amz-Signature=dc59a68789938521f74639e9579bfabeb217018d144110131baa8c138b3188e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJPUYCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDpLHmxoLf%2FBy5umW%2FKWTz%2Fn%2FFuQZ2NgfPQZNmnPtg%2FAiBYkkBYhZgZzE3UONswyQ7%2BmQD8OTntzkf2V6u4O66taCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKNpyF21j71pgV74KtwD2eWcVlxLQ07%2BzCZqoa58dC3Jlr2u9Jve43oQ5jiCgB9gwR4olknoSTkKhaL18iFPAmM%2BHzQhAReWZGGRXxZQh63lTVaWGjlGy5scF5HpfjMqm5%2B3ctpPateE7P6tR9LXhIF25dSHwvsgulAyEYHOJDJxNiTC9dJ2sMKaKiBXAZ1TuVBwNH%2BrAh00HvXQK7ASRwxpOn8GNWGTimpmSKJYdXGSPs4wMRiNvzlMBpsxRFIiBfXauaMkciWDk8cfFlVg3hn3Gvw7F2IvA2SL87QlsPz7NIQuiwWXHOIGfLxDGnC%2FUpMaFPfnT6RRfKoNOf4SmrcqPe%2Fd9cGSl0DSPrSQYf1GUk6aESsnYN9xhHk%2Fpcwm7%2B%2BsG8Hrcz2T7Krc7XSfFcxSurvg72efF0mn6ozPTq6D3BpFNwG8ov5q3abnMPML%2B8H5evwEsjYcmYItZ9FT8XfpouWBvFRMSqLTlftqD9q2l%2B5ud6CwcUXjbPp9IH4pwv8ANI%2FAVkjd4JnvI0QY5qZMtv1IVv0G2Ck3J9SedjmEhQY869y4D79SzKceWEalsTHP5w8DUx1bp7wNyn5hQg2ZHSOhR9AQbfb6woRmg%2Bxsu0dv0D8Zz61i%2BfIWByPcluowbjKB89vezAEwxr%2FixAY6pgElltkRm%2FqZkwzXvBFiszJF9Mfn20OfZYbdmFDmczD2qxrXUBJqg5PiO6%2FbIlRaMiMNG3fGIu29wMDV2%2BerjcN083Qu3zj0kj6kN%2Fk0xdX1XbvFlJz7%2B3SlTykhTCyiTnZ9Lkv0PuM8fMZ%2B0f7%2Bw0CdP0vv3GpCBwSz6YCNvLLoyBTa8dQAfqOHFlK1TORZaBCJqQn5vN9tzYKJhtwLxj2RHEF47lZY&X-Amz-Signature=c56a3b79138ff92d460d21efa248580159be1c64f8f513952f42a1a341bda81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJPUYCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDpLHmxoLf%2FBy5umW%2FKWTz%2Fn%2FFuQZ2NgfPQZNmnPtg%2FAiBYkkBYhZgZzE3UONswyQ7%2BmQD8OTntzkf2V6u4O66taCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKNpyF21j71pgV74KtwD2eWcVlxLQ07%2BzCZqoa58dC3Jlr2u9Jve43oQ5jiCgB9gwR4olknoSTkKhaL18iFPAmM%2BHzQhAReWZGGRXxZQh63lTVaWGjlGy5scF5HpfjMqm5%2B3ctpPateE7P6tR9LXhIF25dSHwvsgulAyEYHOJDJxNiTC9dJ2sMKaKiBXAZ1TuVBwNH%2BrAh00HvXQK7ASRwxpOn8GNWGTimpmSKJYdXGSPs4wMRiNvzlMBpsxRFIiBfXauaMkciWDk8cfFlVg3hn3Gvw7F2IvA2SL87QlsPz7NIQuiwWXHOIGfLxDGnC%2FUpMaFPfnT6RRfKoNOf4SmrcqPe%2Fd9cGSl0DSPrSQYf1GUk6aESsnYN9xhHk%2Fpcwm7%2B%2BsG8Hrcz2T7Krc7XSfFcxSurvg72efF0mn6ozPTq6D3BpFNwG8ov5q3abnMPML%2B8H5evwEsjYcmYItZ9FT8XfpouWBvFRMSqLTlftqD9q2l%2B5ud6CwcUXjbPp9IH4pwv8ANI%2FAVkjd4JnvI0QY5qZMtv1IVv0G2Ck3J9SedjmEhQY869y4D79SzKceWEalsTHP5w8DUx1bp7wNyn5hQg2ZHSOhR9AQbfb6woRmg%2Bxsu0dv0D8Zz61i%2BfIWByPcluowbjKB89vezAEwxr%2FixAY6pgElltkRm%2FqZkwzXvBFiszJF9Mfn20OfZYbdmFDmczD2qxrXUBJqg5PiO6%2FbIlRaMiMNG3fGIu29wMDV2%2BerjcN083Qu3zj0kj6kN%2Fk0xdX1XbvFlJz7%2B3SlTykhTCyiTnZ9Lkv0PuM8fMZ%2B0f7%2Bw0CdP0vv3GpCBwSz6YCNvLLoyBTa8dQAfqOHFlK1TORZaBCJqQn5vN9tzYKJhtwLxj2RHEF47lZY&X-Amz-Signature=cf32aa40bf2597727293be67387f781aabe9b466ae3a955a031cb65c1a0fae3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJPUYCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDpLHmxoLf%2FBy5umW%2FKWTz%2Fn%2FFuQZ2NgfPQZNmnPtg%2FAiBYkkBYhZgZzE3UONswyQ7%2BmQD8OTntzkf2V6u4O66taCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKNpyF21j71pgV74KtwD2eWcVlxLQ07%2BzCZqoa58dC3Jlr2u9Jve43oQ5jiCgB9gwR4olknoSTkKhaL18iFPAmM%2BHzQhAReWZGGRXxZQh63lTVaWGjlGy5scF5HpfjMqm5%2B3ctpPateE7P6tR9LXhIF25dSHwvsgulAyEYHOJDJxNiTC9dJ2sMKaKiBXAZ1TuVBwNH%2BrAh00HvXQK7ASRwxpOn8GNWGTimpmSKJYdXGSPs4wMRiNvzlMBpsxRFIiBfXauaMkciWDk8cfFlVg3hn3Gvw7F2IvA2SL87QlsPz7NIQuiwWXHOIGfLxDGnC%2FUpMaFPfnT6RRfKoNOf4SmrcqPe%2Fd9cGSl0DSPrSQYf1GUk6aESsnYN9xhHk%2Fpcwm7%2B%2BsG8Hrcz2T7Krc7XSfFcxSurvg72efF0mn6ozPTq6D3BpFNwG8ov5q3abnMPML%2B8H5evwEsjYcmYItZ9FT8XfpouWBvFRMSqLTlftqD9q2l%2B5ud6CwcUXjbPp9IH4pwv8ANI%2FAVkjd4JnvI0QY5qZMtv1IVv0G2Ck3J9SedjmEhQY869y4D79SzKceWEalsTHP5w8DUx1bp7wNyn5hQg2ZHSOhR9AQbfb6woRmg%2Bxsu0dv0D8Zz61i%2BfIWByPcluowbjKB89vezAEwxr%2FixAY6pgElltkRm%2FqZkwzXvBFiszJF9Mfn20OfZYbdmFDmczD2qxrXUBJqg5PiO6%2FbIlRaMiMNG3fGIu29wMDV2%2BerjcN083Qu3zj0kj6kN%2Fk0xdX1XbvFlJz7%2B3SlTykhTCyiTnZ9Lkv0PuM8fMZ%2B0f7%2Bw0CdP0vv3GpCBwSz6YCNvLLoyBTa8dQAfqOHFlK1TORZaBCJqQn5vN9tzYKJhtwLxj2RHEF47lZY&X-Amz-Signature=bd8f639d84f4252178c813d78510de995b8bbb9dc10a3bb7b75ac4e71796b3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJPUYCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDpLHmxoLf%2FBy5umW%2FKWTz%2Fn%2FFuQZ2NgfPQZNmnPtg%2FAiBYkkBYhZgZzE3UONswyQ7%2BmQD8OTntzkf2V6u4O66taCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEKNpyF21j71pgV74KtwD2eWcVlxLQ07%2BzCZqoa58dC3Jlr2u9Jve43oQ5jiCgB9gwR4olknoSTkKhaL18iFPAmM%2BHzQhAReWZGGRXxZQh63lTVaWGjlGy5scF5HpfjMqm5%2B3ctpPateE7P6tR9LXhIF25dSHwvsgulAyEYHOJDJxNiTC9dJ2sMKaKiBXAZ1TuVBwNH%2BrAh00HvXQK7ASRwxpOn8GNWGTimpmSKJYdXGSPs4wMRiNvzlMBpsxRFIiBfXauaMkciWDk8cfFlVg3hn3Gvw7F2IvA2SL87QlsPz7NIQuiwWXHOIGfLxDGnC%2FUpMaFPfnT6RRfKoNOf4SmrcqPe%2Fd9cGSl0DSPrSQYf1GUk6aESsnYN9xhHk%2Fpcwm7%2B%2BsG8Hrcz2T7Krc7XSfFcxSurvg72efF0mn6ozPTq6D3BpFNwG8ov5q3abnMPML%2B8H5evwEsjYcmYItZ9FT8XfpouWBvFRMSqLTlftqD9q2l%2B5ud6CwcUXjbPp9IH4pwv8ANI%2FAVkjd4JnvI0QY5qZMtv1IVv0G2Ck3J9SedjmEhQY869y4D79SzKceWEalsTHP5w8DUx1bp7wNyn5hQg2ZHSOhR9AQbfb6woRmg%2Bxsu0dv0D8Zz61i%2BfIWByPcluowbjKB89vezAEwxr%2FixAY6pgElltkRm%2FqZkwzXvBFiszJF9Mfn20OfZYbdmFDmczD2qxrXUBJqg5PiO6%2FbIlRaMiMNG3fGIu29wMDV2%2BerjcN083Qu3zj0kj6kN%2Fk0xdX1XbvFlJz7%2B3SlTykhTCyiTnZ9Lkv0PuM8fMZ%2B0f7%2Bw0CdP0vv3GpCBwSz6YCNvLLoyBTa8dQAfqOHFlK1TORZaBCJqQn5vN9tzYKJhtwLxj2RHEF47lZY&X-Amz-Signature=647e95960a88be745de88722725ec9261d59bd6d26e9a69ad36ab98c25266a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

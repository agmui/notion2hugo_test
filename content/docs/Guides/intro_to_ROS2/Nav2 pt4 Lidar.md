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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4LZIBG%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBCHTLSocrTF00Ia9AfMUPsujrFQ6ds88dYd84EZ%2BGEWAiEAruBGwX9o4ISvv0v95q62t2WU350XYbSuIilFCi%2FT7vIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2JjHRUwozly%2BCmMircA3l1sCVj7GX5Cw0VRDGaTEz%2Byz743Hb5wPQVB%2BG6RHMn8DuEbkwmfJjevbaxmEM8Ifumuep4mEACDSqX2OpLCA8pt03mnfXbl%2BB%2Fw0d1otkIZKjSLndFKdzgGM%2FOosTiW3b0AXWB54zpHt9QjR18gCx6qCHcyI1es5GvlrBzZghqFmpeMpuTKfQbAwjWYjj%2BTRohSpyng3moBgvKm0m7IVCrZDvD%2FMfKAaREHElZQQeSlYrnqAAXLN5sAWoXB9eZK207XhI4ztElrEqnMod3Vx%2FrktamE7O8SJU41tVD7zamgi3KpxAt9%2FpKLuYXBo1NT0g1GFAHViM7w38wRtCsAwthJrqb4crjdoFjqGAKgRu4NUFkwlph4tyb7oBV415reDmd1jDIcfUTr7hjp5u8ZZX02zxntbvnGCP0EZjygZzCHn9qk4VmjeueGN4fpilj10K81KtBVCL3yUoXfENLzb9BptoGkJ9Yi59ryPxdytxdr0HmDV0MsJE6qUccTR0rZ%2Bpd21rs5AOGcwH9cpsJkpjQ9DqXO%2BHDIO4sK%2FYaTrs%2Fs%2BtOpMJ5glhSJ%2BlVFtqdBLyi2GHlF9ke%2BT8TSQtESHCZO9girj%2FqkZV%2F81%2FULmBcFRSRfyRbdp25XfzbMMP1isgGOqUBki2ywFT9b1%2FXUJTnfo95VoU51jEm1KJLvvU0Dh5OruIHb6pP39gwHjF2EwKWVx%2BYRe0e6fKLSr0%2Fb6Ciw6y0wi2UUHGGLaC4xVe5A3aMfiObXHnhybVbq2ccJte21K%2Fj3ndsNV2e8bPIRFQSFcwbLTOWubng7hjkOY3imlUERUoGHyUntdGykDbfEFlaQVuREfMpFYi5a%2BKYn54wUhgl5d8cMmRM&X-Amz-Signature=c524d5567fbead7c28600a1d83a20bde82689ec3fb986bf40266b6dbc37f07c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQZ5MWI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCKmhmipYzjQKrMsyX7Y2TbuU8lr3DkxnhwuB4Vy5g12wIhAK6oZRuUyAMe0dTYRulQpmQ2ci5TS0sfVV7b5nNW8llDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwueQ4GuRlyXECebeAq3AOhLohe61YXqnorN3h9asJ58%2BIa9MwcIsj9H2ldS6DTIgLHddi2kYcWuQlgQju9nJGSrx9kMH%2BjojJfWc8DIi7jUpIT%2B%2FlL0xtvo8Fp2weut56tbJpR2tC4OukFDxFqBe7HBbz1sdVa9jDmYdUhhXrEZqGcBxGZ9l9%2FmmTOZJkNxt6J1LIvbs1m0oZaeG6tXdRoZE2tekuHLjaE9bXFy3TOOwoANwra7Ciqr754SHr1nbBH564m%2FqEq%2BczhNE%2BXBl3ZpZeJQeeM804rmaOYN0x4NrgSDhoH8RlWuDnME0fraJhSKHo1Pn5yDwHsnJ3T3rbIZMvblezBSy%2FxOGdw8U5WpyPxGyLdmi4a3bW4Mvi1XOWxHyDpCKrd6Sc6vQVAs%2BQdL%2B4g4mYdWOcafMv8bcIixcBGREObDX3jaHUS8%2BOd4dFWaqNWQ%2Bz9xt55u7A6Ig3ccY5yjMZs4nviv66Y4AOCIlZkK2oyMWC8Aj7Gfzq0lTZS3iXfujGXeDEIgYc92g4wSHlETprJTsgFVeDcp%2BQqeoTSc2CsURIsZUj4LjAqLL484PpZdN%2BMW01NRt1dVmpsSbr8S6zpka%2FuLNzbrM988ax27tSv7lKSenlUT%2F21AZ38EiYUFUFhscMvaDCk9YrIBjqkAYLUyBb1OZd6NjVtETAQWWb4hOGLOHJR7zfwkDKSUrcOwIdR7oUac0Dna5vtQGolDko%2B1U2rOSQjvuVY7nsiOKA4fQHD7bLZEtdDc%2F2ojO4x7EYuQIvnPHkz0t0OeAm5dPOkaBVyx0tljJDZ4M30SmnegwuU8CyKcpXWNj%2FVzxQc4pog4e%2F0kJYPVqo4HKNsjXT3PvCZ43ZXB%2FONJMtPsJSMfxOX&X-Amz-Signature=591a34e1047fd347a4012635a060a2e4b2325d7312ef293d8defb9bde5abdbdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQZ5MWI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCKmhmipYzjQKrMsyX7Y2TbuU8lr3DkxnhwuB4Vy5g12wIhAK6oZRuUyAMe0dTYRulQpmQ2ci5TS0sfVV7b5nNW8llDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwueQ4GuRlyXECebeAq3AOhLohe61YXqnorN3h9asJ58%2BIa9MwcIsj9H2ldS6DTIgLHddi2kYcWuQlgQju9nJGSrx9kMH%2BjojJfWc8DIi7jUpIT%2B%2FlL0xtvo8Fp2weut56tbJpR2tC4OukFDxFqBe7HBbz1sdVa9jDmYdUhhXrEZqGcBxGZ9l9%2FmmTOZJkNxt6J1LIvbs1m0oZaeG6tXdRoZE2tekuHLjaE9bXFy3TOOwoANwra7Ciqr754SHr1nbBH564m%2FqEq%2BczhNE%2BXBl3ZpZeJQeeM804rmaOYN0x4NrgSDhoH8RlWuDnME0fraJhSKHo1Pn5yDwHsnJ3T3rbIZMvblezBSy%2FxOGdw8U5WpyPxGyLdmi4a3bW4Mvi1XOWxHyDpCKrd6Sc6vQVAs%2BQdL%2B4g4mYdWOcafMv8bcIixcBGREObDX3jaHUS8%2BOd4dFWaqNWQ%2Bz9xt55u7A6Ig3ccY5yjMZs4nviv66Y4AOCIlZkK2oyMWC8Aj7Gfzq0lTZS3iXfujGXeDEIgYc92g4wSHlETprJTsgFVeDcp%2BQqeoTSc2CsURIsZUj4LjAqLL484PpZdN%2BMW01NRt1dVmpsSbr8S6zpka%2FuLNzbrM988ax27tSv7lKSenlUT%2F21AZ38EiYUFUFhscMvaDCk9YrIBjqkAYLUyBb1OZd6NjVtETAQWWb4hOGLOHJR7zfwkDKSUrcOwIdR7oUac0Dna5vtQGolDko%2B1U2rOSQjvuVY7nsiOKA4fQHD7bLZEtdDc%2F2ojO4x7EYuQIvnPHkz0t0OeAm5dPOkaBVyx0tljJDZ4M30SmnegwuU8CyKcpXWNj%2FVzxQc4pog4e%2F0kJYPVqo4HKNsjXT3PvCZ43ZXB%2FONJMtPsJSMfxOX&X-Amz-Signature=a55644cc8ff5a5eedb0304fccbeea3155393df4099a65dccb15affc2ecb3fc39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQZ5MWI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCKmhmipYzjQKrMsyX7Y2TbuU8lr3DkxnhwuB4Vy5g12wIhAK6oZRuUyAMe0dTYRulQpmQ2ci5TS0sfVV7b5nNW8llDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwueQ4GuRlyXECebeAq3AOhLohe61YXqnorN3h9asJ58%2BIa9MwcIsj9H2ldS6DTIgLHddi2kYcWuQlgQju9nJGSrx9kMH%2BjojJfWc8DIi7jUpIT%2B%2FlL0xtvo8Fp2weut56tbJpR2tC4OukFDxFqBe7HBbz1sdVa9jDmYdUhhXrEZqGcBxGZ9l9%2FmmTOZJkNxt6J1LIvbs1m0oZaeG6tXdRoZE2tekuHLjaE9bXFy3TOOwoANwra7Ciqr754SHr1nbBH564m%2FqEq%2BczhNE%2BXBl3ZpZeJQeeM804rmaOYN0x4NrgSDhoH8RlWuDnME0fraJhSKHo1Pn5yDwHsnJ3T3rbIZMvblezBSy%2FxOGdw8U5WpyPxGyLdmi4a3bW4Mvi1XOWxHyDpCKrd6Sc6vQVAs%2BQdL%2B4g4mYdWOcafMv8bcIixcBGREObDX3jaHUS8%2BOd4dFWaqNWQ%2Bz9xt55u7A6Ig3ccY5yjMZs4nviv66Y4AOCIlZkK2oyMWC8Aj7Gfzq0lTZS3iXfujGXeDEIgYc92g4wSHlETprJTsgFVeDcp%2BQqeoTSc2CsURIsZUj4LjAqLL484PpZdN%2BMW01NRt1dVmpsSbr8S6zpka%2FuLNzbrM988ax27tSv7lKSenlUT%2F21AZ38EiYUFUFhscMvaDCk9YrIBjqkAYLUyBb1OZd6NjVtETAQWWb4hOGLOHJR7zfwkDKSUrcOwIdR7oUac0Dna5vtQGolDko%2B1U2rOSQjvuVY7nsiOKA4fQHD7bLZEtdDc%2F2ojO4x7EYuQIvnPHkz0t0OeAm5dPOkaBVyx0tljJDZ4M30SmnegwuU8CyKcpXWNj%2FVzxQc4pog4e%2F0kJYPVqo4HKNsjXT3PvCZ43ZXB%2FONJMtPsJSMfxOX&X-Amz-Signature=8490cd4a85a0886ab4f3141f8bcd94283c667ee66a77a593f20e7139c445f8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQZ5MWI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCKmhmipYzjQKrMsyX7Y2TbuU8lr3DkxnhwuB4Vy5g12wIhAK6oZRuUyAMe0dTYRulQpmQ2ci5TS0sfVV7b5nNW8llDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwueQ4GuRlyXECebeAq3AOhLohe61YXqnorN3h9asJ58%2BIa9MwcIsj9H2ldS6DTIgLHddi2kYcWuQlgQju9nJGSrx9kMH%2BjojJfWc8DIi7jUpIT%2B%2FlL0xtvo8Fp2weut56tbJpR2tC4OukFDxFqBe7HBbz1sdVa9jDmYdUhhXrEZqGcBxGZ9l9%2FmmTOZJkNxt6J1LIvbs1m0oZaeG6tXdRoZE2tekuHLjaE9bXFy3TOOwoANwra7Ciqr754SHr1nbBH564m%2FqEq%2BczhNE%2BXBl3ZpZeJQeeM804rmaOYN0x4NrgSDhoH8RlWuDnME0fraJhSKHo1Pn5yDwHsnJ3T3rbIZMvblezBSy%2FxOGdw8U5WpyPxGyLdmi4a3bW4Mvi1XOWxHyDpCKrd6Sc6vQVAs%2BQdL%2B4g4mYdWOcafMv8bcIixcBGREObDX3jaHUS8%2BOd4dFWaqNWQ%2Bz9xt55u7A6Ig3ccY5yjMZs4nviv66Y4AOCIlZkK2oyMWC8Aj7Gfzq0lTZS3iXfujGXeDEIgYc92g4wSHlETprJTsgFVeDcp%2BQqeoTSc2CsURIsZUj4LjAqLL484PpZdN%2BMW01NRt1dVmpsSbr8S6zpka%2FuLNzbrM988ax27tSv7lKSenlUT%2F21AZ38EiYUFUFhscMvaDCk9YrIBjqkAYLUyBb1OZd6NjVtETAQWWb4hOGLOHJR7zfwkDKSUrcOwIdR7oUac0Dna5vtQGolDko%2B1U2rOSQjvuVY7nsiOKA4fQHD7bLZEtdDc%2F2ojO4x7EYuQIvnPHkz0t0OeAm5dPOkaBVyx0tljJDZ4M30SmnegwuU8CyKcpXWNj%2FVzxQc4pog4e%2F0kJYPVqo4HKNsjXT3PvCZ43ZXB%2FONJMtPsJSMfxOX&X-Amz-Signature=e116c9a617337298831f391a9c54861dd00dfda9e9d616b4c258b8232bbe3c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQZ5MWI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCKmhmipYzjQKrMsyX7Y2TbuU8lr3DkxnhwuB4Vy5g12wIhAK6oZRuUyAMe0dTYRulQpmQ2ci5TS0sfVV7b5nNW8llDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwueQ4GuRlyXECebeAq3AOhLohe61YXqnorN3h9asJ58%2BIa9MwcIsj9H2ldS6DTIgLHddi2kYcWuQlgQju9nJGSrx9kMH%2BjojJfWc8DIi7jUpIT%2B%2FlL0xtvo8Fp2weut56tbJpR2tC4OukFDxFqBe7HBbz1sdVa9jDmYdUhhXrEZqGcBxGZ9l9%2FmmTOZJkNxt6J1LIvbs1m0oZaeG6tXdRoZE2tekuHLjaE9bXFy3TOOwoANwra7Ciqr754SHr1nbBH564m%2FqEq%2BczhNE%2BXBl3ZpZeJQeeM804rmaOYN0x4NrgSDhoH8RlWuDnME0fraJhSKHo1Pn5yDwHsnJ3T3rbIZMvblezBSy%2FxOGdw8U5WpyPxGyLdmi4a3bW4Mvi1XOWxHyDpCKrd6Sc6vQVAs%2BQdL%2B4g4mYdWOcafMv8bcIixcBGREObDX3jaHUS8%2BOd4dFWaqNWQ%2Bz9xt55u7A6Ig3ccY5yjMZs4nviv66Y4AOCIlZkK2oyMWC8Aj7Gfzq0lTZS3iXfujGXeDEIgYc92g4wSHlETprJTsgFVeDcp%2BQqeoTSc2CsURIsZUj4LjAqLL484PpZdN%2BMW01NRt1dVmpsSbr8S6zpka%2FuLNzbrM988ax27tSv7lKSenlUT%2F21AZ38EiYUFUFhscMvaDCk9YrIBjqkAYLUyBb1OZd6NjVtETAQWWb4hOGLOHJR7zfwkDKSUrcOwIdR7oUac0Dna5vtQGolDko%2B1U2rOSQjvuVY7nsiOKA4fQHD7bLZEtdDc%2F2ojO4x7EYuQIvnPHkz0t0OeAm5dPOkaBVyx0tljJDZ4M30SmnegwuU8CyKcpXWNj%2FVzxQc4pog4e%2F0kJYPVqo4HKNsjXT3PvCZ43ZXB%2FONJMtPsJSMfxOX&X-Amz-Signature=eb308ee4ea456913fa097b0bd62a6cb2806176c990952c53667fb82dd4ba97b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQZ5MWI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCKmhmipYzjQKrMsyX7Y2TbuU8lr3DkxnhwuB4Vy5g12wIhAK6oZRuUyAMe0dTYRulQpmQ2ci5TS0sfVV7b5nNW8llDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwueQ4GuRlyXECebeAq3AOhLohe61YXqnorN3h9asJ58%2BIa9MwcIsj9H2ldS6DTIgLHddi2kYcWuQlgQju9nJGSrx9kMH%2BjojJfWc8DIi7jUpIT%2B%2FlL0xtvo8Fp2weut56tbJpR2tC4OukFDxFqBe7HBbz1sdVa9jDmYdUhhXrEZqGcBxGZ9l9%2FmmTOZJkNxt6J1LIvbs1m0oZaeG6tXdRoZE2tekuHLjaE9bXFy3TOOwoANwra7Ciqr754SHr1nbBH564m%2FqEq%2BczhNE%2BXBl3ZpZeJQeeM804rmaOYN0x4NrgSDhoH8RlWuDnME0fraJhSKHo1Pn5yDwHsnJ3T3rbIZMvblezBSy%2FxOGdw8U5WpyPxGyLdmi4a3bW4Mvi1XOWxHyDpCKrd6Sc6vQVAs%2BQdL%2B4g4mYdWOcafMv8bcIixcBGREObDX3jaHUS8%2BOd4dFWaqNWQ%2Bz9xt55u7A6Ig3ccY5yjMZs4nviv66Y4AOCIlZkK2oyMWC8Aj7Gfzq0lTZS3iXfujGXeDEIgYc92g4wSHlETprJTsgFVeDcp%2BQqeoTSc2CsURIsZUj4LjAqLL484PpZdN%2BMW01NRt1dVmpsSbr8S6zpka%2FuLNzbrM988ax27tSv7lKSenlUT%2F21AZ38EiYUFUFhscMvaDCk9YrIBjqkAYLUyBb1OZd6NjVtETAQWWb4hOGLOHJR7zfwkDKSUrcOwIdR7oUac0Dna5vtQGolDko%2B1U2rOSQjvuVY7nsiOKA4fQHD7bLZEtdDc%2F2ojO4x7EYuQIvnPHkz0t0OeAm5dPOkaBVyx0tljJDZ4M30SmnegwuU8CyKcpXWNj%2FVzxQc4pog4e%2F0kJYPVqo4HKNsjXT3PvCZ43ZXB%2FONJMtPsJSMfxOX&X-Amz-Signature=a4dc1ddc0a80fb826a353743c00c55cf3519c178211e07c0e538acc8ca95fc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQZ5MWI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCKmhmipYzjQKrMsyX7Y2TbuU8lr3DkxnhwuB4Vy5g12wIhAK6oZRuUyAMe0dTYRulQpmQ2ci5TS0sfVV7b5nNW8llDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwueQ4GuRlyXECebeAq3AOhLohe61YXqnorN3h9asJ58%2BIa9MwcIsj9H2ldS6DTIgLHddi2kYcWuQlgQju9nJGSrx9kMH%2BjojJfWc8DIi7jUpIT%2B%2FlL0xtvo8Fp2weut56tbJpR2tC4OukFDxFqBe7HBbz1sdVa9jDmYdUhhXrEZqGcBxGZ9l9%2FmmTOZJkNxt6J1LIvbs1m0oZaeG6tXdRoZE2tekuHLjaE9bXFy3TOOwoANwra7Ciqr754SHr1nbBH564m%2FqEq%2BczhNE%2BXBl3ZpZeJQeeM804rmaOYN0x4NrgSDhoH8RlWuDnME0fraJhSKHo1Pn5yDwHsnJ3T3rbIZMvblezBSy%2FxOGdw8U5WpyPxGyLdmi4a3bW4Mvi1XOWxHyDpCKrd6Sc6vQVAs%2BQdL%2B4g4mYdWOcafMv8bcIixcBGREObDX3jaHUS8%2BOd4dFWaqNWQ%2Bz9xt55u7A6Ig3ccY5yjMZs4nviv66Y4AOCIlZkK2oyMWC8Aj7Gfzq0lTZS3iXfujGXeDEIgYc92g4wSHlETprJTsgFVeDcp%2BQqeoTSc2CsURIsZUj4LjAqLL484PpZdN%2BMW01NRt1dVmpsSbr8S6zpka%2FuLNzbrM988ax27tSv7lKSenlUT%2F21AZ38EiYUFUFhscMvaDCk9YrIBjqkAYLUyBb1OZd6NjVtETAQWWb4hOGLOHJR7zfwkDKSUrcOwIdR7oUac0Dna5vtQGolDko%2B1U2rOSQjvuVY7nsiOKA4fQHD7bLZEtdDc%2F2ojO4x7EYuQIvnPHkz0t0OeAm5dPOkaBVyx0tljJDZ4M30SmnegwuU8CyKcpXWNj%2FVzxQc4pog4e%2F0kJYPVqo4HKNsjXT3PvCZ43ZXB%2FONJMtPsJSMfxOX&X-Amz-Signature=1e8af5d754e2dcf64d64a82c1be57f3d364d011ea05d59b9a73072984be460ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQZ5MWI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCKmhmipYzjQKrMsyX7Y2TbuU8lr3DkxnhwuB4Vy5g12wIhAK6oZRuUyAMe0dTYRulQpmQ2ci5TS0sfVV7b5nNW8llDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwueQ4GuRlyXECebeAq3AOhLohe61YXqnorN3h9asJ58%2BIa9MwcIsj9H2ldS6DTIgLHddi2kYcWuQlgQju9nJGSrx9kMH%2BjojJfWc8DIi7jUpIT%2B%2FlL0xtvo8Fp2weut56tbJpR2tC4OukFDxFqBe7HBbz1sdVa9jDmYdUhhXrEZqGcBxGZ9l9%2FmmTOZJkNxt6J1LIvbs1m0oZaeG6tXdRoZE2tekuHLjaE9bXFy3TOOwoANwra7Ciqr754SHr1nbBH564m%2FqEq%2BczhNE%2BXBl3ZpZeJQeeM804rmaOYN0x4NrgSDhoH8RlWuDnME0fraJhSKHo1Pn5yDwHsnJ3T3rbIZMvblezBSy%2FxOGdw8U5WpyPxGyLdmi4a3bW4Mvi1XOWxHyDpCKrd6Sc6vQVAs%2BQdL%2B4g4mYdWOcafMv8bcIixcBGREObDX3jaHUS8%2BOd4dFWaqNWQ%2Bz9xt55u7A6Ig3ccY5yjMZs4nviv66Y4AOCIlZkK2oyMWC8Aj7Gfzq0lTZS3iXfujGXeDEIgYc92g4wSHlETprJTsgFVeDcp%2BQqeoTSc2CsURIsZUj4LjAqLL484PpZdN%2BMW01NRt1dVmpsSbr8S6zpka%2FuLNzbrM988ax27tSv7lKSenlUT%2F21AZ38EiYUFUFhscMvaDCk9YrIBjqkAYLUyBb1OZd6NjVtETAQWWb4hOGLOHJR7zfwkDKSUrcOwIdR7oUac0Dna5vtQGolDko%2B1U2rOSQjvuVY7nsiOKA4fQHD7bLZEtdDc%2F2ojO4x7EYuQIvnPHkz0t0OeAm5dPOkaBVyx0tljJDZ4M30SmnegwuU8CyKcpXWNj%2FVzxQc4pog4e%2F0kJYPVqo4HKNsjXT3PvCZ43ZXB%2FONJMtPsJSMfxOX&X-Amz-Signature=ad304f6efc7c1cd06ad33cb24ccf75b07f5a289883a15495705e32f044498483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQZ5MWI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCKmhmipYzjQKrMsyX7Y2TbuU8lr3DkxnhwuB4Vy5g12wIhAK6oZRuUyAMe0dTYRulQpmQ2ci5TS0sfVV7b5nNW8llDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwueQ4GuRlyXECebeAq3AOhLohe61YXqnorN3h9asJ58%2BIa9MwcIsj9H2ldS6DTIgLHddi2kYcWuQlgQju9nJGSrx9kMH%2BjojJfWc8DIi7jUpIT%2B%2FlL0xtvo8Fp2weut56tbJpR2tC4OukFDxFqBe7HBbz1sdVa9jDmYdUhhXrEZqGcBxGZ9l9%2FmmTOZJkNxt6J1LIvbs1m0oZaeG6tXdRoZE2tekuHLjaE9bXFy3TOOwoANwra7Ciqr754SHr1nbBH564m%2FqEq%2BczhNE%2BXBl3ZpZeJQeeM804rmaOYN0x4NrgSDhoH8RlWuDnME0fraJhSKHo1Pn5yDwHsnJ3T3rbIZMvblezBSy%2FxOGdw8U5WpyPxGyLdmi4a3bW4Mvi1XOWxHyDpCKrd6Sc6vQVAs%2BQdL%2B4g4mYdWOcafMv8bcIixcBGREObDX3jaHUS8%2BOd4dFWaqNWQ%2Bz9xt55u7A6Ig3ccY5yjMZs4nviv66Y4AOCIlZkK2oyMWC8Aj7Gfzq0lTZS3iXfujGXeDEIgYc92g4wSHlETprJTsgFVeDcp%2BQqeoTSc2CsURIsZUj4LjAqLL484PpZdN%2BMW01NRt1dVmpsSbr8S6zpka%2FuLNzbrM988ax27tSv7lKSenlUT%2F21AZ38EiYUFUFhscMvaDCk9YrIBjqkAYLUyBb1OZd6NjVtETAQWWb4hOGLOHJR7zfwkDKSUrcOwIdR7oUac0Dna5vtQGolDko%2B1U2rOSQjvuVY7nsiOKA4fQHD7bLZEtdDc%2F2ojO4x7EYuQIvnPHkz0t0OeAm5dPOkaBVyx0tljJDZ4M30SmnegwuU8CyKcpXWNj%2FVzxQc4pog4e%2F0kJYPVqo4HKNsjXT3PvCZ43ZXB%2FONJMtPsJSMfxOX&X-Amz-Signature=f7c76947a754d07d0d4b9c8d46441724f837f6f94cc569e49b0fc389d64c0790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQZ5MWI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCKmhmipYzjQKrMsyX7Y2TbuU8lr3DkxnhwuB4Vy5g12wIhAK6oZRuUyAMe0dTYRulQpmQ2ci5TS0sfVV7b5nNW8llDKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwueQ4GuRlyXECebeAq3AOhLohe61YXqnorN3h9asJ58%2BIa9MwcIsj9H2ldS6DTIgLHddi2kYcWuQlgQju9nJGSrx9kMH%2BjojJfWc8DIi7jUpIT%2B%2FlL0xtvo8Fp2weut56tbJpR2tC4OukFDxFqBe7HBbz1sdVa9jDmYdUhhXrEZqGcBxGZ9l9%2FmmTOZJkNxt6J1LIvbs1m0oZaeG6tXdRoZE2tekuHLjaE9bXFy3TOOwoANwra7Ciqr754SHr1nbBH564m%2FqEq%2BczhNE%2BXBl3ZpZeJQeeM804rmaOYN0x4NrgSDhoH8RlWuDnME0fraJhSKHo1Pn5yDwHsnJ3T3rbIZMvblezBSy%2FxOGdw8U5WpyPxGyLdmi4a3bW4Mvi1XOWxHyDpCKrd6Sc6vQVAs%2BQdL%2B4g4mYdWOcafMv8bcIixcBGREObDX3jaHUS8%2BOd4dFWaqNWQ%2Bz9xt55u7A6Ig3ccY5yjMZs4nviv66Y4AOCIlZkK2oyMWC8Aj7Gfzq0lTZS3iXfujGXeDEIgYc92g4wSHlETprJTsgFVeDcp%2BQqeoTSc2CsURIsZUj4LjAqLL484PpZdN%2BMW01NRt1dVmpsSbr8S6zpka%2FuLNzbrM988ax27tSv7lKSenlUT%2F21AZ38EiYUFUFhscMvaDCk9YrIBjqkAYLUyBb1OZd6NjVtETAQWWb4hOGLOHJR7zfwkDKSUrcOwIdR7oUac0Dna5vtQGolDko%2B1U2rOSQjvuVY7nsiOKA4fQHD7bLZEtdDc%2F2ojO4x7EYuQIvnPHkz0t0OeAm5dPOkaBVyx0tljJDZ4M30SmnegwuU8CyKcpXWNj%2FVzxQc4pog4e%2F0kJYPVqo4HKNsjXT3PvCZ43ZXB%2FONJMtPsJSMfxOX&X-Amz-Signature=e116c9a617337298831f391a9c54861dd00dfda9e9d616b4c258b8232bbe3c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

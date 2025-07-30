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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66L6E4K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qNYqfpDv0IuUmpw5OStRfvzOFvDtujtnN%2BEsmH4JtAiAQEcKAker4958Q2Ntj2MQbJHKhEOO7%2BOAYLhwHXBguJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvv8G5eT4t8WV8jHmKtwDhFj%2Bw4XrKrf3c1S8%2B4BdWW5g2f1i6SVYvm9G6dg88EvoF9ZyupJ7X8OyIzI80V3sgActFi6pTL3jaYbbufmXSRDMUJ%2Fg5xo6lc5sGn2JbSD8xA5e5b%2BhyUaxNALZv0E9Boi6SWKRhgrkRISMaaGGzgr0ciBeZ33L4%2FMBMYe1inRyIuj%2FmKtCh9sxE5HFQwXaAg1ldJngWAjQO72cdSK5RBPxC5yrsgu5yj2bdmqOPEi7sbv7PiaW0uvB3NXgNpXoummw3g16lTrUVqNHEYGyD5TIDP3bCSNkUaaA5SnI5U2Hg5oT%2BT961nWKrL1EXxL7DJNdiceaO4F2htkU1v%2BpITd8TmynXGolsw2AQwELe1GxcJo%2FQI3NMQRfohxyKY%2Fvhdo2dnA0RyELHdXW0F6vBo7yANuFm9LHO9BanqKg%2BgmwZVOK06tc33VLp4wYSg1cLF64fdvLpUx48jORW4p5VSxRptyvVQucFRpD46ZHDW%2F84v6iEIoFcDiYiLQfJW%2FyiTK3drDTMOFk5n%2FHxtkFpnfe23v%2Fy8V%2FQCGAkBhece%2FVnzW9DCARhpx5Cet2xrHbpRr6Rjgra%2BfeyxE43bivs2fweOuGIQcrO85R6gJrSPbwPKWFvfn0lYqeBeQwvNqmxAY6pgGFV6Q4Jn2pt5UlpfiZbiopr3I9EF0VjDlqvf90bEBDF32ev8bG9oLhTPpcMX0sZr7WQaiGn%2Bos%2BpUwfcfVDjxbCuA%2BKFk9y3Rl2i0Q%2F6PtAlMzKKdFezGTFqHg4DBHReqG6%2BworeIss6jINW2W7imxxAzB4WUoWOkETHpJJZTdC6ZrdCDW%2FWeRh9zqXX61yAa0df72cAp7TDoivGaq6EkOIoQjU6yd&X-Amz-Signature=3c465b15fedbc4cbc92ed5658ce686e30600f1de9aa46c3e84cdeccca9b1e6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66L6E4K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qNYqfpDv0IuUmpw5OStRfvzOFvDtujtnN%2BEsmH4JtAiAQEcKAker4958Q2Ntj2MQbJHKhEOO7%2BOAYLhwHXBguJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvv8G5eT4t8WV8jHmKtwDhFj%2Bw4XrKrf3c1S8%2B4BdWW5g2f1i6SVYvm9G6dg88EvoF9ZyupJ7X8OyIzI80V3sgActFi6pTL3jaYbbufmXSRDMUJ%2Fg5xo6lc5sGn2JbSD8xA5e5b%2BhyUaxNALZv0E9Boi6SWKRhgrkRISMaaGGzgr0ciBeZ33L4%2FMBMYe1inRyIuj%2FmKtCh9sxE5HFQwXaAg1ldJngWAjQO72cdSK5RBPxC5yrsgu5yj2bdmqOPEi7sbv7PiaW0uvB3NXgNpXoummw3g16lTrUVqNHEYGyD5TIDP3bCSNkUaaA5SnI5U2Hg5oT%2BT961nWKrL1EXxL7DJNdiceaO4F2htkU1v%2BpITd8TmynXGolsw2AQwELe1GxcJo%2FQI3NMQRfohxyKY%2Fvhdo2dnA0RyELHdXW0F6vBo7yANuFm9LHO9BanqKg%2BgmwZVOK06tc33VLp4wYSg1cLF64fdvLpUx48jORW4p5VSxRptyvVQucFRpD46ZHDW%2F84v6iEIoFcDiYiLQfJW%2FyiTK3drDTMOFk5n%2FHxtkFpnfe23v%2Fy8V%2FQCGAkBhece%2FVnzW9DCARhpx5Cet2xrHbpRr6Rjgra%2BfeyxE43bivs2fweOuGIQcrO85R6gJrSPbwPKWFvfn0lYqeBeQwvNqmxAY6pgGFV6Q4Jn2pt5UlpfiZbiopr3I9EF0VjDlqvf90bEBDF32ev8bG9oLhTPpcMX0sZr7WQaiGn%2Bos%2BpUwfcfVDjxbCuA%2BKFk9y3Rl2i0Q%2F6PtAlMzKKdFezGTFqHg4DBHReqG6%2BworeIss6jINW2W7imxxAzB4WUoWOkETHpJJZTdC6ZrdCDW%2FWeRh9zqXX61yAa0df72cAp7TDoivGaq6EkOIoQjU6yd&X-Amz-Signature=004bf397353c84a3d24c99ca3dd3d88bf323351a621452cdc3b47e00f2d45504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66L6E4K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qNYqfpDv0IuUmpw5OStRfvzOFvDtujtnN%2BEsmH4JtAiAQEcKAker4958Q2Ntj2MQbJHKhEOO7%2BOAYLhwHXBguJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvv8G5eT4t8WV8jHmKtwDhFj%2Bw4XrKrf3c1S8%2B4BdWW5g2f1i6SVYvm9G6dg88EvoF9ZyupJ7X8OyIzI80V3sgActFi6pTL3jaYbbufmXSRDMUJ%2Fg5xo6lc5sGn2JbSD8xA5e5b%2BhyUaxNALZv0E9Boi6SWKRhgrkRISMaaGGzgr0ciBeZ33L4%2FMBMYe1inRyIuj%2FmKtCh9sxE5HFQwXaAg1ldJngWAjQO72cdSK5RBPxC5yrsgu5yj2bdmqOPEi7sbv7PiaW0uvB3NXgNpXoummw3g16lTrUVqNHEYGyD5TIDP3bCSNkUaaA5SnI5U2Hg5oT%2BT961nWKrL1EXxL7DJNdiceaO4F2htkU1v%2BpITd8TmynXGolsw2AQwELe1GxcJo%2FQI3NMQRfohxyKY%2Fvhdo2dnA0RyELHdXW0F6vBo7yANuFm9LHO9BanqKg%2BgmwZVOK06tc33VLp4wYSg1cLF64fdvLpUx48jORW4p5VSxRptyvVQucFRpD46ZHDW%2F84v6iEIoFcDiYiLQfJW%2FyiTK3drDTMOFk5n%2FHxtkFpnfe23v%2Fy8V%2FQCGAkBhece%2FVnzW9DCARhpx5Cet2xrHbpRr6Rjgra%2BfeyxE43bivs2fweOuGIQcrO85R6gJrSPbwPKWFvfn0lYqeBeQwvNqmxAY6pgGFV6Q4Jn2pt5UlpfiZbiopr3I9EF0VjDlqvf90bEBDF32ev8bG9oLhTPpcMX0sZr7WQaiGn%2Bos%2BpUwfcfVDjxbCuA%2BKFk9y3Rl2i0Q%2F6PtAlMzKKdFezGTFqHg4DBHReqG6%2BworeIss6jINW2W7imxxAzB4WUoWOkETHpJJZTdC6ZrdCDW%2FWeRh9zqXX61yAa0df72cAp7TDoivGaq6EkOIoQjU6yd&X-Amz-Signature=b5268a85c8bbf6d7aa80f890869760137641a8c859d38c7775d01cdcec9aa9c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66L6E4K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qNYqfpDv0IuUmpw5OStRfvzOFvDtujtnN%2BEsmH4JtAiAQEcKAker4958Q2Ntj2MQbJHKhEOO7%2BOAYLhwHXBguJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvv8G5eT4t8WV8jHmKtwDhFj%2Bw4XrKrf3c1S8%2B4BdWW5g2f1i6SVYvm9G6dg88EvoF9ZyupJ7X8OyIzI80V3sgActFi6pTL3jaYbbufmXSRDMUJ%2Fg5xo6lc5sGn2JbSD8xA5e5b%2BhyUaxNALZv0E9Boi6SWKRhgrkRISMaaGGzgr0ciBeZ33L4%2FMBMYe1inRyIuj%2FmKtCh9sxE5HFQwXaAg1ldJngWAjQO72cdSK5RBPxC5yrsgu5yj2bdmqOPEi7sbv7PiaW0uvB3NXgNpXoummw3g16lTrUVqNHEYGyD5TIDP3bCSNkUaaA5SnI5U2Hg5oT%2BT961nWKrL1EXxL7DJNdiceaO4F2htkU1v%2BpITd8TmynXGolsw2AQwELe1GxcJo%2FQI3NMQRfohxyKY%2Fvhdo2dnA0RyELHdXW0F6vBo7yANuFm9LHO9BanqKg%2BgmwZVOK06tc33VLp4wYSg1cLF64fdvLpUx48jORW4p5VSxRptyvVQucFRpD46ZHDW%2F84v6iEIoFcDiYiLQfJW%2FyiTK3drDTMOFk5n%2FHxtkFpnfe23v%2Fy8V%2FQCGAkBhece%2FVnzW9DCARhpx5Cet2xrHbpRr6Rjgra%2BfeyxE43bivs2fweOuGIQcrO85R6gJrSPbwPKWFvfn0lYqeBeQwvNqmxAY6pgGFV6Q4Jn2pt5UlpfiZbiopr3I9EF0VjDlqvf90bEBDF32ev8bG9oLhTPpcMX0sZr7WQaiGn%2Bos%2BpUwfcfVDjxbCuA%2BKFk9y3Rl2i0Q%2F6PtAlMzKKdFezGTFqHg4DBHReqG6%2BworeIss6jINW2W7imxxAzB4WUoWOkETHpJJZTdC6ZrdCDW%2FWeRh9zqXX61yAa0df72cAp7TDoivGaq6EkOIoQjU6yd&X-Amz-Signature=d35bac31cc887e6d031d1b53551a7407bca45028424825acb85a50eab0a664ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66L6E4K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qNYqfpDv0IuUmpw5OStRfvzOFvDtujtnN%2BEsmH4JtAiAQEcKAker4958Q2Ntj2MQbJHKhEOO7%2BOAYLhwHXBguJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvv8G5eT4t8WV8jHmKtwDhFj%2Bw4XrKrf3c1S8%2B4BdWW5g2f1i6SVYvm9G6dg88EvoF9ZyupJ7X8OyIzI80V3sgActFi6pTL3jaYbbufmXSRDMUJ%2Fg5xo6lc5sGn2JbSD8xA5e5b%2BhyUaxNALZv0E9Boi6SWKRhgrkRISMaaGGzgr0ciBeZ33L4%2FMBMYe1inRyIuj%2FmKtCh9sxE5HFQwXaAg1ldJngWAjQO72cdSK5RBPxC5yrsgu5yj2bdmqOPEi7sbv7PiaW0uvB3NXgNpXoummw3g16lTrUVqNHEYGyD5TIDP3bCSNkUaaA5SnI5U2Hg5oT%2BT961nWKrL1EXxL7DJNdiceaO4F2htkU1v%2BpITd8TmynXGolsw2AQwELe1GxcJo%2FQI3NMQRfohxyKY%2Fvhdo2dnA0RyELHdXW0F6vBo7yANuFm9LHO9BanqKg%2BgmwZVOK06tc33VLp4wYSg1cLF64fdvLpUx48jORW4p5VSxRptyvVQucFRpD46ZHDW%2F84v6iEIoFcDiYiLQfJW%2FyiTK3drDTMOFk5n%2FHxtkFpnfe23v%2Fy8V%2FQCGAkBhece%2FVnzW9DCARhpx5Cet2xrHbpRr6Rjgra%2BfeyxE43bivs2fweOuGIQcrO85R6gJrSPbwPKWFvfn0lYqeBeQwvNqmxAY6pgGFV6Q4Jn2pt5UlpfiZbiopr3I9EF0VjDlqvf90bEBDF32ev8bG9oLhTPpcMX0sZr7WQaiGn%2Bos%2BpUwfcfVDjxbCuA%2BKFk9y3Rl2i0Q%2F6PtAlMzKKdFezGTFqHg4DBHReqG6%2BworeIss6jINW2W7imxxAzB4WUoWOkETHpJJZTdC6ZrdCDW%2FWeRh9zqXX61yAa0df72cAp7TDoivGaq6EkOIoQjU6yd&X-Amz-Signature=ae35ba39963a99dda6f2e0124782c5319641a464dddb1963b11eb064eec3afcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66L6E4K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qNYqfpDv0IuUmpw5OStRfvzOFvDtujtnN%2BEsmH4JtAiAQEcKAker4958Q2Ntj2MQbJHKhEOO7%2BOAYLhwHXBguJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvv8G5eT4t8WV8jHmKtwDhFj%2Bw4XrKrf3c1S8%2B4BdWW5g2f1i6SVYvm9G6dg88EvoF9ZyupJ7X8OyIzI80V3sgActFi6pTL3jaYbbufmXSRDMUJ%2Fg5xo6lc5sGn2JbSD8xA5e5b%2BhyUaxNALZv0E9Boi6SWKRhgrkRISMaaGGzgr0ciBeZ33L4%2FMBMYe1inRyIuj%2FmKtCh9sxE5HFQwXaAg1ldJngWAjQO72cdSK5RBPxC5yrsgu5yj2bdmqOPEi7sbv7PiaW0uvB3NXgNpXoummw3g16lTrUVqNHEYGyD5TIDP3bCSNkUaaA5SnI5U2Hg5oT%2BT961nWKrL1EXxL7DJNdiceaO4F2htkU1v%2BpITd8TmynXGolsw2AQwELe1GxcJo%2FQI3NMQRfohxyKY%2Fvhdo2dnA0RyELHdXW0F6vBo7yANuFm9LHO9BanqKg%2BgmwZVOK06tc33VLp4wYSg1cLF64fdvLpUx48jORW4p5VSxRptyvVQucFRpD46ZHDW%2F84v6iEIoFcDiYiLQfJW%2FyiTK3drDTMOFk5n%2FHxtkFpnfe23v%2Fy8V%2FQCGAkBhece%2FVnzW9DCARhpx5Cet2xrHbpRr6Rjgra%2BfeyxE43bivs2fweOuGIQcrO85R6gJrSPbwPKWFvfn0lYqeBeQwvNqmxAY6pgGFV6Q4Jn2pt5UlpfiZbiopr3I9EF0VjDlqvf90bEBDF32ev8bG9oLhTPpcMX0sZr7WQaiGn%2Bos%2BpUwfcfVDjxbCuA%2BKFk9y3Rl2i0Q%2F6PtAlMzKKdFezGTFqHg4DBHReqG6%2BworeIss6jINW2W7imxxAzB4WUoWOkETHpJJZTdC6ZrdCDW%2FWeRh9zqXX61yAa0df72cAp7TDoivGaq6EkOIoQjU6yd&X-Amz-Signature=16b4a6fc1f44acb5e3a3687464a73a9b5210a4c70c085bbf7fe833683f57bda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66L6E4K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qNYqfpDv0IuUmpw5OStRfvzOFvDtujtnN%2BEsmH4JtAiAQEcKAker4958Q2Ntj2MQbJHKhEOO7%2BOAYLhwHXBguJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvv8G5eT4t8WV8jHmKtwDhFj%2Bw4XrKrf3c1S8%2B4BdWW5g2f1i6SVYvm9G6dg88EvoF9ZyupJ7X8OyIzI80V3sgActFi6pTL3jaYbbufmXSRDMUJ%2Fg5xo6lc5sGn2JbSD8xA5e5b%2BhyUaxNALZv0E9Boi6SWKRhgrkRISMaaGGzgr0ciBeZ33L4%2FMBMYe1inRyIuj%2FmKtCh9sxE5HFQwXaAg1ldJngWAjQO72cdSK5RBPxC5yrsgu5yj2bdmqOPEi7sbv7PiaW0uvB3NXgNpXoummw3g16lTrUVqNHEYGyD5TIDP3bCSNkUaaA5SnI5U2Hg5oT%2BT961nWKrL1EXxL7DJNdiceaO4F2htkU1v%2BpITd8TmynXGolsw2AQwELe1GxcJo%2FQI3NMQRfohxyKY%2Fvhdo2dnA0RyELHdXW0F6vBo7yANuFm9LHO9BanqKg%2BgmwZVOK06tc33VLp4wYSg1cLF64fdvLpUx48jORW4p5VSxRptyvVQucFRpD46ZHDW%2F84v6iEIoFcDiYiLQfJW%2FyiTK3drDTMOFk5n%2FHxtkFpnfe23v%2Fy8V%2FQCGAkBhece%2FVnzW9DCARhpx5Cet2xrHbpRr6Rjgra%2BfeyxE43bivs2fweOuGIQcrO85R6gJrSPbwPKWFvfn0lYqeBeQwvNqmxAY6pgGFV6Q4Jn2pt5UlpfiZbiopr3I9EF0VjDlqvf90bEBDF32ev8bG9oLhTPpcMX0sZr7WQaiGn%2Bos%2BpUwfcfVDjxbCuA%2BKFk9y3Rl2i0Q%2F6PtAlMzKKdFezGTFqHg4DBHReqG6%2BworeIss6jINW2W7imxxAzB4WUoWOkETHpJJZTdC6ZrdCDW%2FWeRh9zqXX61yAa0df72cAp7TDoivGaq6EkOIoQjU6yd&X-Amz-Signature=9345bb9e10241d84eaab54abed3047ad5e0be27a868c9a84f8be4596e0165b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66L6E4K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qNYqfpDv0IuUmpw5OStRfvzOFvDtujtnN%2BEsmH4JtAiAQEcKAker4958Q2Ntj2MQbJHKhEOO7%2BOAYLhwHXBguJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvv8G5eT4t8WV8jHmKtwDhFj%2Bw4XrKrf3c1S8%2B4BdWW5g2f1i6SVYvm9G6dg88EvoF9ZyupJ7X8OyIzI80V3sgActFi6pTL3jaYbbufmXSRDMUJ%2Fg5xo6lc5sGn2JbSD8xA5e5b%2BhyUaxNALZv0E9Boi6SWKRhgrkRISMaaGGzgr0ciBeZ33L4%2FMBMYe1inRyIuj%2FmKtCh9sxE5HFQwXaAg1ldJngWAjQO72cdSK5RBPxC5yrsgu5yj2bdmqOPEi7sbv7PiaW0uvB3NXgNpXoummw3g16lTrUVqNHEYGyD5TIDP3bCSNkUaaA5SnI5U2Hg5oT%2BT961nWKrL1EXxL7DJNdiceaO4F2htkU1v%2BpITd8TmynXGolsw2AQwELe1GxcJo%2FQI3NMQRfohxyKY%2Fvhdo2dnA0RyELHdXW0F6vBo7yANuFm9LHO9BanqKg%2BgmwZVOK06tc33VLp4wYSg1cLF64fdvLpUx48jORW4p5VSxRptyvVQucFRpD46ZHDW%2F84v6iEIoFcDiYiLQfJW%2FyiTK3drDTMOFk5n%2FHxtkFpnfe23v%2Fy8V%2FQCGAkBhece%2FVnzW9DCARhpx5Cet2xrHbpRr6Rjgra%2BfeyxE43bivs2fweOuGIQcrO85R6gJrSPbwPKWFvfn0lYqeBeQwvNqmxAY6pgGFV6Q4Jn2pt5UlpfiZbiopr3I9EF0VjDlqvf90bEBDF32ev8bG9oLhTPpcMX0sZr7WQaiGn%2Bos%2BpUwfcfVDjxbCuA%2BKFk9y3Rl2i0Q%2F6PtAlMzKKdFezGTFqHg4DBHReqG6%2BworeIss6jINW2W7imxxAzB4WUoWOkETHpJJZTdC6ZrdCDW%2FWeRh9zqXX61yAa0df72cAp7TDoivGaq6EkOIoQjU6yd&X-Amz-Signature=66d8f0fc600d160d31949abd99b25af6897bb8ab040703c432a49ecd83d4fc22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66L6E4K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qNYqfpDv0IuUmpw5OStRfvzOFvDtujtnN%2BEsmH4JtAiAQEcKAker4958Q2Ntj2MQbJHKhEOO7%2BOAYLhwHXBguJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvv8G5eT4t8WV8jHmKtwDhFj%2Bw4XrKrf3c1S8%2B4BdWW5g2f1i6SVYvm9G6dg88EvoF9ZyupJ7X8OyIzI80V3sgActFi6pTL3jaYbbufmXSRDMUJ%2Fg5xo6lc5sGn2JbSD8xA5e5b%2BhyUaxNALZv0E9Boi6SWKRhgrkRISMaaGGzgr0ciBeZ33L4%2FMBMYe1inRyIuj%2FmKtCh9sxE5HFQwXaAg1ldJngWAjQO72cdSK5RBPxC5yrsgu5yj2bdmqOPEi7sbv7PiaW0uvB3NXgNpXoummw3g16lTrUVqNHEYGyD5TIDP3bCSNkUaaA5SnI5U2Hg5oT%2BT961nWKrL1EXxL7DJNdiceaO4F2htkU1v%2BpITd8TmynXGolsw2AQwELe1GxcJo%2FQI3NMQRfohxyKY%2Fvhdo2dnA0RyELHdXW0F6vBo7yANuFm9LHO9BanqKg%2BgmwZVOK06tc33VLp4wYSg1cLF64fdvLpUx48jORW4p5VSxRptyvVQucFRpD46ZHDW%2F84v6iEIoFcDiYiLQfJW%2FyiTK3drDTMOFk5n%2FHxtkFpnfe23v%2Fy8V%2FQCGAkBhece%2FVnzW9DCARhpx5Cet2xrHbpRr6Rjgra%2BfeyxE43bivs2fweOuGIQcrO85R6gJrSPbwPKWFvfn0lYqeBeQwvNqmxAY6pgGFV6Q4Jn2pt5UlpfiZbiopr3I9EF0VjDlqvf90bEBDF32ev8bG9oLhTPpcMX0sZr7WQaiGn%2Bos%2BpUwfcfVDjxbCuA%2BKFk9y3Rl2i0Q%2F6PtAlMzKKdFezGTFqHg4DBHReqG6%2BworeIss6jINW2W7imxxAzB4WUoWOkETHpJJZTdC6ZrdCDW%2FWeRh9zqXX61yAa0df72cAp7TDoivGaq6EkOIoQjU6yd&X-Amz-Signature=c868af63911d512b9914368c24665e379ce4d53fd0d076ca11710e35caca330f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66L6E4K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qNYqfpDv0IuUmpw5OStRfvzOFvDtujtnN%2BEsmH4JtAiAQEcKAker4958Q2Ntj2MQbJHKhEOO7%2BOAYLhwHXBguJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvv8G5eT4t8WV8jHmKtwDhFj%2Bw4XrKrf3c1S8%2B4BdWW5g2f1i6SVYvm9G6dg88EvoF9ZyupJ7X8OyIzI80V3sgActFi6pTL3jaYbbufmXSRDMUJ%2Fg5xo6lc5sGn2JbSD8xA5e5b%2BhyUaxNALZv0E9Boi6SWKRhgrkRISMaaGGzgr0ciBeZ33L4%2FMBMYe1inRyIuj%2FmKtCh9sxE5HFQwXaAg1ldJngWAjQO72cdSK5RBPxC5yrsgu5yj2bdmqOPEi7sbv7PiaW0uvB3NXgNpXoummw3g16lTrUVqNHEYGyD5TIDP3bCSNkUaaA5SnI5U2Hg5oT%2BT961nWKrL1EXxL7DJNdiceaO4F2htkU1v%2BpITd8TmynXGolsw2AQwELe1GxcJo%2FQI3NMQRfohxyKY%2Fvhdo2dnA0RyELHdXW0F6vBo7yANuFm9LHO9BanqKg%2BgmwZVOK06tc33VLp4wYSg1cLF64fdvLpUx48jORW4p5VSxRptyvVQucFRpD46ZHDW%2F84v6iEIoFcDiYiLQfJW%2FyiTK3drDTMOFk5n%2FHxtkFpnfe23v%2Fy8V%2FQCGAkBhece%2FVnzW9DCARhpx5Cet2xrHbpRr6Rjgra%2BfeyxE43bivs2fweOuGIQcrO85R6gJrSPbwPKWFvfn0lYqeBeQwvNqmxAY6pgGFV6Q4Jn2pt5UlpfiZbiopr3I9EF0VjDlqvf90bEBDF32ev8bG9oLhTPpcMX0sZr7WQaiGn%2Bos%2BpUwfcfVDjxbCuA%2BKFk9y3Rl2i0Q%2F6PtAlMzKKdFezGTFqHg4DBHReqG6%2BworeIss6jINW2W7imxxAzB4WUoWOkETHpJJZTdC6ZrdCDW%2FWeRh9zqXX61yAa0df72cAp7TDoivGaq6EkOIoQjU6yd&X-Amz-Signature=95e9ef557c4e80eb55b572d025770c11d3d4732d0dc6fe659f19f8337c202d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

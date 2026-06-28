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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MAXUD3K%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3WT2PVmy8O2Z8AfzUyOBYTR8aKyxDiV3hHA7IQUOnQAiEAl25Bk7IYKHjQIaCEBa0uXUtNVMu1JQPUHjVl2MAMULMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvMfOuca6mVOC7iYyrcAyKm4FapfGP%2Fj8SlEqkR99fPcS8RUKaXePz5Y6Zva%2FlWJepYkhoSliCOG7lLTvDwXm%2FEdUiAdntuwfCuNd9fZ%2BJG94vjGqY6nUeT6IugpSfr18ckWfR5rYMVR6rrrpi3CHbJeQ7DOELmahDjJC9Wta7FxGPCKV%2BypeP3t3y3Pqf6XsLE9ya7ZUAW5ZGGwRHjXolgtm8p30UZn0iGNs3SJLGbcQBWcq%2BE2x4Xo%2FL9bnQSm%2BrLcDfVI1PTz8zPRYNFMZ%2B7hjXj8Av8nFrvbprLFBOXHz7LyhktcfaPgq5Che%2BY7detV6l8DQROsbhnTsjpQq7pVo91Mg5JgbBJcFKGSldgm47cxTR%2BtHYuBKLUnzHH24l5fz9y67BjDJa8DLGt2lIx4osd5hW1l0NbzXODtHTgfip6DR%2Bvyo2x3pEivS8qAteh%2BN0TyJvIb9peMFOTAVgTB01fXv5XpMeIeS4BzCSybXpy6d4yBCvCARfpusIEbWL1pVszvbpJFjFibwvGzcknMDzC1dKlZRtPKMxTRMui7BoA87A0mRfxPylcW0hligmr6blwaW9JTM50UETZiDkEkhMIN1pInv61dxB%2BrAoZAxRz5txMvYoYtLpXy%2F87foHmL%2Foof8MFrC9MMPGfgtIGOqUBl34XmdB%2BmlHPIrVyMacONfnUjhNjwGzFerueeCM9yL0%2Fqem8%2Bh1S6MrkDn6BbrOTvMV189HFC5NmeD80gzxn0FrUv1dkbf6QwogDznuy33DBtzdSJZJVE7rYuFl%2BIWmp2JDp%2FSgp1IJ5jxlsP2NfSiIOY%2Fb52NGaO1HFPYEEEqzxThXGcws2Tq%2BPDLdlFtoi1DFGIncgJotaA8BpJLomjxA7Cc4d&X-Amz-Signature=c338b08d92a6c5cdf5a17089be3bc12c935981be57941a3122d13a761ee0f3a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCD7H6NJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKeDWuAgcyeiBgKrPi%2F12my4bjDppVEIs1bGnS%2FpK6QAIgVS159KD8M5GKh8ZU3LQFCNHI%2FLpm4UYTWJBEgHmJ8OYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRz%2FERiHhYX10m2CrcAyeBv89vnMJFTjO1DUFNIbUI%2F6mLJhEWoWiea3ioKskhtyY5UkAg0TZRy29j0W0xtiSeVfGTSjoAs90HxAoqgiLF5E%2BvR7I5ubnAh6nByKnoaO9EFVTAL1w4Po5RUxI6K0%2FjRoJKQ%2B%2F4POXuH2zwfFQPF86EfAtFnzvXu4irF0orfa0TqsfunIJwRFDfUSpub5peHjlcaK4HebzkoElvatQePd%2Bdrnjl0WRZbLNQR%2Bm%2B%2FdlPs4pPZhZfS83jAC0e5humHVtdR7YrIb18g9EGYVnMNPTZc4jQfIfc8wyCqxTolpnRBk5J5S8z0cgDqTcb%2Bhx8oWWPGv1p37qdsb%2FnV3AbWJdiRn8Q8RENlttQxofTLOv%2BBxsUyPVIv4tqTlKsL%2BbJ5sLcbMi33y65qqtTRAS763w3HYmZCLaFX4Ji4B116IdGvYqtH5R0LOk%2FMe5wmJ5kIzds90BDyE7NHn0Z0lxrAj42ELt9y7HsDwGjcrmkwWdCFXrys8BuZ91B9rMb3MdNOoDfCGsPsnsFrQ27ByZpa3SpIkaGNZoYXARuZms95XE%2FaaJ06RWYgj6aYzPFWd4Hohu45KLc%2FBvsG3%2F%2BYLt%2BSlgBZwpvwFkoxUZGyPKb%2BfnVbwBZx2bZzKMBMIKegtIGOqUBTGME1oj9uBlU7Sbe%2F80FLpmPZKW40bOOGSQqOiRjZGR2mL%2BNeY8ljTiaHBlq9v9Rp96uHuVRkcyRQhXKoptbj7rtLSdFKAetbdS5qCJoLYvtQa5oJ%2Bghdthoj91Iz%2BtbMyaeyJsiFaLR%2FGndP%2BrioJR00Dowpq3uJ9ss%2BLBWWUmwR1klDky50ETOeKJ1idGjAYpEvk4%2Bz%2FSNKaaVRd9u2L%2Bk%2F0PP&X-Amz-Signature=7054ff7e0e564a670607a91b8594cb3a814dce85af4f5bd9145d5c490bbc8221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCD7H6NJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKeDWuAgcyeiBgKrPi%2F12my4bjDppVEIs1bGnS%2FpK6QAIgVS159KD8M5GKh8ZU3LQFCNHI%2FLpm4UYTWJBEgHmJ8OYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRz%2FERiHhYX10m2CrcAyeBv89vnMJFTjO1DUFNIbUI%2F6mLJhEWoWiea3ioKskhtyY5UkAg0TZRy29j0W0xtiSeVfGTSjoAs90HxAoqgiLF5E%2BvR7I5ubnAh6nByKnoaO9EFVTAL1w4Po5RUxI6K0%2FjRoJKQ%2B%2F4POXuH2zwfFQPF86EfAtFnzvXu4irF0orfa0TqsfunIJwRFDfUSpub5peHjlcaK4HebzkoElvatQePd%2Bdrnjl0WRZbLNQR%2Bm%2B%2FdlPs4pPZhZfS83jAC0e5humHVtdR7YrIb18g9EGYVnMNPTZc4jQfIfc8wyCqxTolpnRBk5J5S8z0cgDqTcb%2Bhx8oWWPGv1p37qdsb%2FnV3AbWJdiRn8Q8RENlttQxofTLOv%2BBxsUyPVIv4tqTlKsL%2BbJ5sLcbMi33y65qqtTRAS763w3HYmZCLaFX4Ji4B116IdGvYqtH5R0LOk%2FMe5wmJ5kIzds90BDyE7NHn0Z0lxrAj42ELt9y7HsDwGjcrmkwWdCFXrys8BuZ91B9rMb3MdNOoDfCGsPsnsFrQ27ByZpa3SpIkaGNZoYXARuZms95XE%2FaaJ06RWYgj6aYzPFWd4Hohu45KLc%2FBvsG3%2F%2BYLt%2BSlgBZwpvwFkoxUZGyPKb%2BfnVbwBZx2bZzKMBMIKegtIGOqUBTGME1oj9uBlU7Sbe%2F80FLpmPZKW40bOOGSQqOiRjZGR2mL%2BNeY8ljTiaHBlq9v9Rp96uHuVRkcyRQhXKoptbj7rtLSdFKAetbdS5qCJoLYvtQa5oJ%2Bghdthoj91Iz%2BtbMyaeyJsiFaLR%2FGndP%2BrioJR00Dowpq3uJ9ss%2BLBWWUmwR1klDky50ETOeKJ1idGjAYpEvk4%2Bz%2FSNKaaVRd9u2L%2Bk%2F0PP&X-Amz-Signature=af585c965b18113f4b5fb76c78172504afa07f379e2a155c40a9905bb5a04f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCD7H6NJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKeDWuAgcyeiBgKrPi%2F12my4bjDppVEIs1bGnS%2FpK6QAIgVS159KD8M5GKh8ZU3LQFCNHI%2FLpm4UYTWJBEgHmJ8OYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRz%2FERiHhYX10m2CrcAyeBv89vnMJFTjO1DUFNIbUI%2F6mLJhEWoWiea3ioKskhtyY5UkAg0TZRy29j0W0xtiSeVfGTSjoAs90HxAoqgiLF5E%2BvR7I5ubnAh6nByKnoaO9EFVTAL1w4Po5RUxI6K0%2FjRoJKQ%2B%2F4POXuH2zwfFQPF86EfAtFnzvXu4irF0orfa0TqsfunIJwRFDfUSpub5peHjlcaK4HebzkoElvatQePd%2Bdrnjl0WRZbLNQR%2Bm%2B%2FdlPs4pPZhZfS83jAC0e5humHVtdR7YrIb18g9EGYVnMNPTZc4jQfIfc8wyCqxTolpnRBk5J5S8z0cgDqTcb%2Bhx8oWWPGv1p37qdsb%2FnV3AbWJdiRn8Q8RENlttQxofTLOv%2BBxsUyPVIv4tqTlKsL%2BbJ5sLcbMi33y65qqtTRAS763w3HYmZCLaFX4Ji4B116IdGvYqtH5R0LOk%2FMe5wmJ5kIzds90BDyE7NHn0Z0lxrAj42ELt9y7HsDwGjcrmkwWdCFXrys8BuZ91B9rMb3MdNOoDfCGsPsnsFrQ27ByZpa3SpIkaGNZoYXARuZms95XE%2FaaJ06RWYgj6aYzPFWd4Hohu45KLc%2FBvsG3%2F%2BYLt%2BSlgBZwpvwFkoxUZGyPKb%2BfnVbwBZx2bZzKMBMIKegtIGOqUBTGME1oj9uBlU7Sbe%2F80FLpmPZKW40bOOGSQqOiRjZGR2mL%2BNeY8ljTiaHBlq9v9Rp96uHuVRkcyRQhXKoptbj7rtLSdFKAetbdS5qCJoLYvtQa5oJ%2Bghdthoj91Iz%2BtbMyaeyJsiFaLR%2FGndP%2BrioJR00Dowpq3uJ9ss%2BLBWWUmwR1klDky50ETOeKJ1idGjAYpEvk4%2Bz%2FSNKaaVRd9u2L%2Bk%2F0PP&X-Amz-Signature=7c281e6ec31863aa62f0d2ed5a40b44900dd04d3e957087212cd49d98ea248c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCD7H6NJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKeDWuAgcyeiBgKrPi%2F12my4bjDppVEIs1bGnS%2FpK6QAIgVS159KD8M5GKh8ZU3LQFCNHI%2FLpm4UYTWJBEgHmJ8OYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRz%2FERiHhYX10m2CrcAyeBv89vnMJFTjO1DUFNIbUI%2F6mLJhEWoWiea3ioKskhtyY5UkAg0TZRy29j0W0xtiSeVfGTSjoAs90HxAoqgiLF5E%2BvR7I5ubnAh6nByKnoaO9EFVTAL1w4Po5RUxI6K0%2FjRoJKQ%2B%2F4POXuH2zwfFQPF86EfAtFnzvXu4irF0orfa0TqsfunIJwRFDfUSpub5peHjlcaK4HebzkoElvatQePd%2Bdrnjl0WRZbLNQR%2Bm%2B%2FdlPs4pPZhZfS83jAC0e5humHVtdR7YrIb18g9EGYVnMNPTZc4jQfIfc8wyCqxTolpnRBk5J5S8z0cgDqTcb%2Bhx8oWWPGv1p37qdsb%2FnV3AbWJdiRn8Q8RENlttQxofTLOv%2BBxsUyPVIv4tqTlKsL%2BbJ5sLcbMi33y65qqtTRAS763w3HYmZCLaFX4Ji4B116IdGvYqtH5R0LOk%2FMe5wmJ5kIzds90BDyE7NHn0Z0lxrAj42ELt9y7HsDwGjcrmkwWdCFXrys8BuZ91B9rMb3MdNOoDfCGsPsnsFrQ27ByZpa3SpIkaGNZoYXARuZms95XE%2FaaJ06RWYgj6aYzPFWd4Hohu45KLc%2FBvsG3%2F%2BYLt%2BSlgBZwpvwFkoxUZGyPKb%2BfnVbwBZx2bZzKMBMIKegtIGOqUBTGME1oj9uBlU7Sbe%2F80FLpmPZKW40bOOGSQqOiRjZGR2mL%2BNeY8ljTiaHBlq9v9Rp96uHuVRkcyRQhXKoptbj7rtLSdFKAetbdS5qCJoLYvtQa5oJ%2Bghdthoj91Iz%2BtbMyaeyJsiFaLR%2FGndP%2BrioJR00Dowpq3uJ9ss%2BLBWWUmwR1klDky50ETOeKJ1idGjAYpEvk4%2Bz%2FSNKaaVRd9u2L%2Bk%2F0PP&X-Amz-Signature=2ad2c62a30ed524c177d734f99232e18098230fd5c3cf68ecc3a9385ac28af06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCD7H6NJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKeDWuAgcyeiBgKrPi%2F12my4bjDppVEIs1bGnS%2FpK6QAIgVS159KD8M5GKh8ZU3LQFCNHI%2FLpm4UYTWJBEgHmJ8OYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRz%2FERiHhYX10m2CrcAyeBv89vnMJFTjO1DUFNIbUI%2F6mLJhEWoWiea3ioKskhtyY5UkAg0TZRy29j0W0xtiSeVfGTSjoAs90HxAoqgiLF5E%2BvR7I5ubnAh6nByKnoaO9EFVTAL1w4Po5RUxI6K0%2FjRoJKQ%2B%2F4POXuH2zwfFQPF86EfAtFnzvXu4irF0orfa0TqsfunIJwRFDfUSpub5peHjlcaK4HebzkoElvatQePd%2Bdrnjl0WRZbLNQR%2Bm%2B%2FdlPs4pPZhZfS83jAC0e5humHVtdR7YrIb18g9EGYVnMNPTZc4jQfIfc8wyCqxTolpnRBk5J5S8z0cgDqTcb%2Bhx8oWWPGv1p37qdsb%2FnV3AbWJdiRn8Q8RENlttQxofTLOv%2BBxsUyPVIv4tqTlKsL%2BbJ5sLcbMi33y65qqtTRAS763w3HYmZCLaFX4Ji4B116IdGvYqtH5R0LOk%2FMe5wmJ5kIzds90BDyE7NHn0Z0lxrAj42ELt9y7HsDwGjcrmkwWdCFXrys8BuZ91B9rMb3MdNOoDfCGsPsnsFrQ27ByZpa3SpIkaGNZoYXARuZms95XE%2FaaJ06RWYgj6aYzPFWd4Hohu45KLc%2FBvsG3%2F%2BYLt%2BSlgBZwpvwFkoxUZGyPKb%2BfnVbwBZx2bZzKMBMIKegtIGOqUBTGME1oj9uBlU7Sbe%2F80FLpmPZKW40bOOGSQqOiRjZGR2mL%2BNeY8ljTiaHBlq9v9Rp96uHuVRkcyRQhXKoptbj7rtLSdFKAetbdS5qCJoLYvtQa5oJ%2Bghdthoj91Iz%2BtbMyaeyJsiFaLR%2FGndP%2BrioJR00Dowpq3uJ9ss%2BLBWWUmwR1klDky50ETOeKJ1idGjAYpEvk4%2Bz%2FSNKaaVRd9u2L%2Bk%2F0PP&X-Amz-Signature=0d83ca5ca657861e7307738e971887ffdbc94145a33a011e948da353073f5e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCD7H6NJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKeDWuAgcyeiBgKrPi%2F12my4bjDppVEIs1bGnS%2FpK6QAIgVS159KD8M5GKh8ZU3LQFCNHI%2FLpm4UYTWJBEgHmJ8OYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRz%2FERiHhYX10m2CrcAyeBv89vnMJFTjO1DUFNIbUI%2F6mLJhEWoWiea3ioKskhtyY5UkAg0TZRy29j0W0xtiSeVfGTSjoAs90HxAoqgiLF5E%2BvR7I5ubnAh6nByKnoaO9EFVTAL1w4Po5RUxI6K0%2FjRoJKQ%2B%2F4POXuH2zwfFQPF86EfAtFnzvXu4irF0orfa0TqsfunIJwRFDfUSpub5peHjlcaK4HebzkoElvatQePd%2Bdrnjl0WRZbLNQR%2Bm%2B%2FdlPs4pPZhZfS83jAC0e5humHVtdR7YrIb18g9EGYVnMNPTZc4jQfIfc8wyCqxTolpnRBk5J5S8z0cgDqTcb%2Bhx8oWWPGv1p37qdsb%2FnV3AbWJdiRn8Q8RENlttQxofTLOv%2BBxsUyPVIv4tqTlKsL%2BbJ5sLcbMi33y65qqtTRAS763w3HYmZCLaFX4Ji4B116IdGvYqtH5R0LOk%2FMe5wmJ5kIzds90BDyE7NHn0Z0lxrAj42ELt9y7HsDwGjcrmkwWdCFXrys8BuZ91B9rMb3MdNOoDfCGsPsnsFrQ27ByZpa3SpIkaGNZoYXARuZms95XE%2FaaJ06RWYgj6aYzPFWd4Hohu45KLc%2FBvsG3%2F%2BYLt%2BSlgBZwpvwFkoxUZGyPKb%2BfnVbwBZx2bZzKMBMIKegtIGOqUBTGME1oj9uBlU7Sbe%2F80FLpmPZKW40bOOGSQqOiRjZGR2mL%2BNeY8ljTiaHBlq9v9Rp96uHuVRkcyRQhXKoptbj7rtLSdFKAetbdS5qCJoLYvtQa5oJ%2Bghdthoj91Iz%2BtbMyaeyJsiFaLR%2FGndP%2BrioJR00Dowpq3uJ9ss%2BLBWWUmwR1klDky50ETOeKJ1idGjAYpEvk4%2Bz%2FSNKaaVRd9u2L%2Bk%2F0PP&X-Amz-Signature=f30a8975ec129fae269ff1d0ea561e1122ba7c0dc9abb24f871aa737fca31025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCD7H6NJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKeDWuAgcyeiBgKrPi%2F12my4bjDppVEIs1bGnS%2FpK6QAIgVS159KD8M5GKh8ZU3LQFCNHI%2FLpm4UYTWJBEgHmJ8OYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRz%2FERiHhYX10m2CrcAyeBv89vnMJFTjO1DUFNIbUI%2F6mLJhEWoWiea3ioKskhtyY5UkAg0TZRy29j0W0xtiSeVfGTSjoAs90HxAoqgiLF5E%2BvR7I5ubnAh6nByKnoaO9EFVTAL1w4Po5RUxI6K0%2FjRoJKQ%2B%2F4POXuH2zwfFQPF86EfAtFnzvXu4irF0orfa0TqsfunIJwRFDfUSpub5peHjlcaK4HebzkoElvatQePd%2Bdrnjl0WRZbLNQR%2Bm%2B%2FdlPs4pPZhZfS83jAC0e5humHVtdR7YrIb18g9EGYVnMNPTZc4jQfIfc8wyCqxTolpnRBk5J5S8z0cgDqTcb%2Bhx8oWWPGv1p37qdsb%2FnV3AbWJdiRn8Q8RENlttQxofTLOv%2BBxsUyPVIv4tqTlKsL%2BbJ5sLcbMi33y65qqtTRAS763w3HYmZCLaFX4Ji4B116IdGvYqtH5R0LOk%2FMe5wmJ5kIzds90BDyE7NHn0Z0lxrAj42ELt9y7HsDwGjcrmkwWdCFXrys8BuZ91B9rMb3MdNOoDfCGsPsnsFrQ27ByZpa3SpIkaGNZoYXARuZms95XE%2FaaJ06RWYgj6aYzPFWd4Hohu45KLc%2FBvsG3%2F%2BYLt%2BSlgBZwpvwFkoxUZGyPKb%2BfnVbwBZx2bZzKMBMIKegtIGOqUBTGME1oj9uBlU7Sbe%2F80FLpmPZKW40bOOGSQqOiRjZGR2mL%2BNeY8ljTiaHBlq9v9Rp96uHuVRkcyRQhXKoptbj7rtLSdFKAetbdS5qCJoLYvtQa5oJ%2Bghdthoj91Iz%2BtbMyaeyJsiFaLR%2FGndP%2BrioJR00Dowpq3uJ9ss%2BLBWWUmwR1klDky50ETOeKJ1idGjAYpEvk4%2Bz%2FSNKaaVRd9u2L%2Bk%2F0PP&X-Amz-Signature=eb5836718ea8a884e4cf8d8570896f79a384664b4fc23ae0080733f7e4dc940f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCD7H6NJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKeDWuAgcyeiBgKrPi%2F12my4bjDppVEIs1bGnS%2FpK6QAIgVS159KD8M5GKh8ZU3LQFCNHI%2FLpm4UYTWJBEgHmJ8OYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRz%2FERiHhYX10m2CrcAyeBv89vnMJFTjO1DUFNIbUI%2F6mLJhEWoWiea3ioKskhtyY5UkAg0TZRy29j0W0xtiSeVfGTSjoAs90HxAoqgiLF5E%2BvR7I5ubnAh6nByKnoaO9EFVTAL1w4Po5RUxI6K0%2FjRoJKQ%2B%2F4POXuH2zwfFQPF86EfAtFnzvXu4irF0orfa0TqsfunIJwRFDfUSpub5peHjlcaK4HebzkoElvatQePd%2Bdrnjl0WRZbLNQR%2Bm%2B%2FdlPs4pPZhZfS83jAC0e5humHVtdR7YrIb18g9EGYVnMNPTZc4jQfIfc8wyCqxTolpnRBk5J5S8z0cgDqTcb%2Bhx8oWWPGv1p37qdsb%2FnV3AbWJdiRn8Q8RENlttQxofTLOv%2BBxsUyPVIv4tqTlKsL%2BbJ5sLcbMi33y65qqtTRAS763w3HYmZCLaFX4Ji4B116IdGvYqtH5R0LOk%2FMe5wmJ5kIzds90BDyE7NHn0Z0lxrAj42ELt9y7HsDwGjcrmkwWdCFXrys8BuZ91B9rMb3MdNOoDfCGsPsnsFrQ27ByZpa3SpIkaGNZoYXARuZms95XE%2FaaJ06RWYgj6aYzPFWd4Hohu45KLc%2FBvsG3%2F%2BYLt%2BSlgBZwpvwFkoxUZGyPKb%2BfnVbwBZx2bZzKMBMIKegtIGOqUBTGME1oj9uBlU7Sbe%2F80FLpmPZKW40bOOGSQqOiRjZGR2mL%2BNeY8ljTiaHBlq9v9Rp96uHuVRkcyRQhXKoptbj7rtLSdFKAetbdS5qCJoLYvtQa5oJ%2Bghdthoj91Iz%2BtbMyaeyJsiFaLR%2FGndP%2BrioJR00Dowpq3uJ9ss%2BLBWWUmwR1klDky50ETOeKJ1idGjAYpEvk4%2Bz%2FSNKaaVRd9u2L%2Bk%2F0PP&X-Amz-Signature=8c8ce0ca036bfcf3532b9485f7570e3bfd51bec581be5088690cf7fabbd52fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCD7H6NJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKeDWuAgcyeiBgKrPi%2F12my4bjDppVEIs1bGnS%2FpK6QAIgVS159KD8M5GKh8ZU3LQFCNHI%2FLpm4UYTWJBEgHmJ8OYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRz%2FERiHhYX10m2CrcAyeBv89vnMJFTjO1DUFNIbUI%2F6mLJhEWoWiea3ioKskhtyY5UkAg0TZRy29j0W0xtiSeVfGTSjoAs90HxAoqgiLF5E%2BvR7I5ubnAh6nByKnoaO9EFVTAL1w4Po5RUxI6K0%2FjRoJKQ%2B%2F4POXuH2zwfFQPF86EfAtFnzvXu4irF0orfa0TqsfunIJwRFDfUSpub5peHjlcaK4HebzkoElvatQePd%2Bdrnjl0WRZbLNQR%2Bm%2B%2FdlPs4pPZhZfS83jAC0e5humHVtdR7YrIb18g9EGYVnMNPTZc4jQfIfc8wyCqxTolpnRBk5J5S8z0cgDqTcb%2Bhx8oWWPGv1p37qdsb%2FnV3AbWJdiRn8Q8RENlttQxofTLOv%2BBxsUyPVIv4tqTlKsL%2BbJ5sLcbMi33y65qqtTRAS763w3HYmZCLaFX4Ji4B116IdGvYqtH5R0LOk%2FMe5wmJ5kIzds90BDyE7NHn0Z0lxrAj42ELt9y7HsDwGjcrmkwWdCFXrys8BuZ91B9rMb3MdNOoDfCGsPsnsFrQ27ByZpa3SpIkaGNZoYXARuZms95XE%2FaaJ06RWYgj6aYzPFWd4Hohu45KLc%2FBvsG3%2F%2BYLt%2BSlgBZwpvwFkoxUZGyPKb%2BfnVbwBZx2bZzKMBMIKegtIGOqUBTGME1oj9uBlU7Sbe%2F80FLpmPZKW40bOOGSQqOiRjZGR2mL%2BNeY8ljTiaHBlq9v9Rp96uHuVRkcyRQhXKoptbj7rtLSdFKAetbdS5qCJoLYvtQa5oJ%2Bghdthoj91Iz%2BtbMyaeyJsiFaLR%2FGndP%2BrioJR00Dowpq3uJ9ss%2BLBWWUmwR1klDky50ETOeKJ1idGjAYpEvk4%2Bz%2FSNKaaVRd9u2L%2Bk%2F0PP&X-Amz-Signature=c05bc470165daa2e2af5f73f2878d96813167a3d9d45460f5792913a37ea16f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCD7H6NJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKeDWuAgcyeiBgKrPi%2F12my4bjDppVEIs1bGnS%2FpK6QAIgVS159KD8M5GKh8ZU3LQFCNHI%2FLpm4UYTWJBEgHmJ8OYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRz%2FERiHhYX10m2CrcAyeBv89vnMJFTjO1DUFNIbUI%2F6mLJhEWoWiea3ioKskhtyY5UkAg0TZRy29j0W0xtiSeVfGTSjoAs90HxAoqgiLF5E%2BvR7I5ubnAh6nByKnoaO9EFVTAL1w4Po5RUxI6K0%2FjRoJKQ%2B%2F4POXuH2zwfFQPF86EfAtFnzvXu4irF0orfa0TqsfunIJwRFDfUSpub5peHjlcaK4HebzkoElvatQePd%2Bdrnjl0WRZbLNQR%2Bm%2B%2FdlPs4pPZhZfS83jAC0e5humHVtdR7YrIb18g9EGYVnMNPTZc4jQfIfc8wyCqxTolpnRBk5J5S8z0cgDqTcb%2Bhx8oWWPGv1p37qdsb%2FnV3AbWJdiRn8Q8RENlttQxofTLOv%2BBxsUyPVIv4tqTlKsL%2BbJ5sLcbMi33y65qqtTRAS763w3HYmZCLaFX4Ji4B116IdGvYqtH5R0LOk%2FMe5wmJ5kIzds90BDyE7NHn0Z0lxrAj42ELt9y7HsDwGjcrmkwWdCFXrys8BuZ91B9rMb3MdNOoDfCGsPsnsFrQ27ByZpa3SpIkaGNZoYXARuZms95XE%2FaaJ06RWYgj6aYzPFWd4Hohu45KLc%2FBvsG3%2F%2BYLt%2BSlgBZwpvwFkoxUZGyPKb%2BfnVbwBZx2bZzKMBMIKegtIGOqUBTGME1oj9uBlU7Sbe%2F80FLpmPZKW40bOOGSQqOiRjZGR2mL%2BNeY8ljTiaHBlq9v9Rp96uHuVRkcyRQhXKoptbj7rtLSdFKAetbdS5qCJoLYvtQa5oJ%2Bghdthoj91Iz%2BtbMyaeyJsiFaLR%2FGndP%2BrioJR00Dowpq3uJ9ss%2BLBWWUmwR1klDky50ETOeKJ1idGjAYpEvk4%2Bz%2FSNKaaVRd9u2L%2Bk%2F0PP&X-Amz-Signature=2ad2c62a30ed524c177d734f99232e18098230fd5c3cf68ecc3a9385ac28af06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

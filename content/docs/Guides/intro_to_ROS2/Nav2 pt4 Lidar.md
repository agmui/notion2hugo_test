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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPXUDYI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5xNpINVD5TxeWhSbBmKXRgEfig%2FxiyyBHWj%2B01s3CSAiEA%2Fj62mVWZ2SR5reTg608MVMA%2BkTEEumnK7Dtjq6FkQTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEv6wJAVpdxtXBSUWyrcAy5LV9KkIEh7jFQ8GbFewTcinhYgJDLCszy1W4hIun3%2FnpGV8AmslH92OD0hvaMurMkia9TESfZdETUKE96XV5GOrKL4%2BhLtzW3CO9DCKLaxjaBsZdKIhXEbo9nGcMV%2FrleLECa95wiFM6lb0VmvRDxa0%2BmOOmifnj1cg54BZOHKUplemxUsjp6mt94eJke2zNUkzJSCfoYAPvcZzvVtR%2FpSOEkzqI6CQGa9Dw%2BWKHdbJeetd%2F%2F6K32tj262iC6EJb%2B%2Btho3uMWC4X7xX7t%2BCHbb4NQH1Eook%2FLTtn4aFdij3ALpnS18EecwrXPlGVj7uwphdrTME1x6PhDqgi1k7NAaUOfzDdANXwaJjrWGojKxXW6TevQh%2BVTOIQa9BQl4QhXYcEjKJj5ejEeMPYWVUGhyOT9h0M9dJHcZ%2FFPhwlxtkxt%2BIO3xxacEjD7uAc4kA1oDw6QnFEuCWNuH7TlMKhgRiPqipA5bWKAgU7HACW6GKmxMgMHzvGO0Pckd0OtfnI2zNZ%2FRE8GXopCms39ySnj6Fcvh5JOHeQSxDINJsrsi6sCSt%2BEkBc%2B43yRIbvq8VUDmCKJuk5CK2nDNGJCAhSFFo7ge1g%2Bxgg%2BdlmA0udpUg57OEsmAuJEk63u2MMCg88QGOqUBnjEReFD7ioG7qvF9%2BytzctZRpRuF%2BOtF9CayL367ZWbFe%2BhLT38mWRtAH%2BMLsLz2CDLpSVgmfrFfqVpGwsk3qCI3iPQ9T9xdI6PFlpxmMLtO279xJDv4SxIp4s6przAjF4Sx6UsiCbH86hOS4Kx8dJzObVxVI6U8v%2Fs8et6ZmVNFTZHxJwvUfxunJJC61dGoJkfXr3%2FDv15aLGjjkLduFSzJFBL4&X-Amz-Signature=8ba30829f6b7b49b38fd840566a63a6ad711eb8e47c9ed155ea78370a29e769f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHHVZ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LP3WAZuWVrCXsqz5oQcyTCPTDeyWVdpo1f9PjLl3mAIgdyK1HPFbKRl7C0%2FhsEqKq%2FzVmGqoe9u1KgkFR3YybjYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDNvwYdv9WeX1HCWLircAwEniZVXsEUaxd5eQKBdA4v5yt3VN2Wb4JcMqW6SHID3HxXl2jZVdLXdsMxeaeGJwmRZYtV4HfGrXLsvswN4%2BmmeK1LJhDOFS3VwtxH7TC9sWsEC7FwUAKSbzcN5rPzmRRiT2eyvDsGRDac9le4s%2FMFRZNc3uos02pIJ5O8eZnKue1awTSpSjKLtAPSaxGZCmipWWF73nh4yxTRJAUIbnYePrZV1bh%2BQNBVBMpcGKEtjBTFbAlIhgDP90tgCeRboVAi%2BBbnPJJjqUHz%2Fwv6Z%2FDH3dw8kBSBYkpgzAjo%2FiTDNeHlZ4yD8lNE0uuu5wWEjGuYkXkAEHRSXXZPzcq5yrVUD%2Byvk5THwf0GGm0MaqLkF1XGw0RUYuOO6P71pOVLGSbOZuWncw3T2bxHYDwNMC5nF%2BlxQirJQi97FCgA53y5KIJojwsvVyB76oCEv5mnNpZfznN7f5ZBxn02UZaJvkgYXiRgzTxvVcKTdKcok4ga8ndJNXlegXYiMaz6S%2FbTmccaPG9jsDOGqaUIJ3qWbYMPpuBJrqz0ErI7Evit385voGc9dDS3iwv89bHZY4%2BNNXr3pAyUN6M4oHb%2FeRsJOAHd%2BCdUUPO47KnTSrwiSgSdBCE7S6OI7Qu2mRwo3MLGg88QGOqUBG0EmIoTj8BUYon37DRPDe6%2FW9KGLB2UX83KUJVpIB2ub7wUOj03nRV7xbBZ5%2Bx1UcSqZDAunTaTzbzCGoS899cFwORfbsWDhg84ggf%2BzwWp5aYnIThrkDuujzk7yHWANc%2Bd7X4Nk6hMj3jtBwjC%2BMdLd0uLX85gW25hjqd8YdAGFGuxXK5vje5zNMgjBIEcvif%2BfpMaduLL49hEhm6mUYJv45Csu&X-Amz-Signature=a9004c6fc337e94c47e271e8050d9e1bd639f3865d7db74bb05746c9686f3b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHHVZ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LP3WAZuWVrCXsqz5oQcyTCPTDeyWVdpo1f9PjLl3mAIgdyK1HPFbKRl7C0%2FhsEqKq%2FzVmGqoe9u1KgkFR3YybjYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDNvwYdv9WeX1HCWLircAwEniZVXsEUaxd5eQKBdA4v5yt3VN2Wb4JcMqW6SHID3HxXl2jZVdLXdsMxeaeGJwmRZYtV4HfGrXLsvswN4%2BmmeK1LJhDOFS3VwtxH7TC9sWsEC7FwUAKSbzcN5rPzmRRiT2eyvDsGRDac9le4s%2FMFRZNc3uos02pIJ5O8eZnKue1awTSpSjKLtAPSaxGZCmipWWF73nh4yxTRJAUIbnYePrZV1bh%2BQNBVBMpcGKEtjBTFbAlIhgDP90tgCeRboVAi%2BBbnPJJjqUHz%2Fwv6Z%2FDH3dw8kBSBYkpgzAjo%2FiTDNeHlZ4yD8lNE0uuu5wWEjGuYkXkAEHRSXXZPzcq5yrVUD%2Byvk5THwf0GGm0MaqLkF1XGw0RUYuOO6P71pOVLGSbOZuWncw3T2bxHYDwNMC5nF%2BlxQirJQi97FCgA53y5KIJojwsvVyB76oCEv5mnNpZfznN7f5ZBxn02UZaJvkgYXiRgzTxvVcKTdKcok4ga8ndJNXlegXYiMaz6S%2FbTmccaPG9jsDOGqaUIJ3qWbYMPpuBJrqz0ErI7Evit385voGc9dDS3iwv89bHZY4%2BNNXr3pAyUN6M4oHb%2FeRsJOAHd%2BCdUUPO47KnTSrwiSgSdBCE7S6OI7Qu2mRwo3MLGg88QGOqUBG0EmIoTj8BUYon37DRPDe6%2FW9KGLB2UX83KUJVpIB2ub7wUOj03nRV7xbBZ5%2Bx1UcSqZDAunTaTzbzCGoS899cFwORfbsWDhg84ggf%2BzwWp5aYnIThrkDuujzk7yHWANc%2Bd7X4Nk6hMj3jtBwjC%2BMdLd0uLX85gW25hjqd8YdAGFGuxXK5vje5zNMgjBIEcvif%2BfpMaduLL49hEhm6mUYJv45Csu&X-Amz-Signature=fa47d4c9476f1444b8af47b7384e35b222171a29ba7915be24131ead8ea2aad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHHVZ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LP3WAZuWVrCXsqz5oQcyTCPTDeyWVdpo1f9PjLl3mAIgdyK1HPFbKRl7C0%2FhsEqKq%2FzVmGqoe9u1KgkFR3YybjYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDNvwYdv9WeX1HCWLircAwEniZVXsEUaxd5eQKBdA4v5yt3VN2Wb4JcMqW6SHID3HxXl2jZVdLXdsMxeaeGJwmRZYtV4HfGrXLsvswN4%2BmmeK1LJhDOFS3VwtxH7TC9sWsEC7FwUAKSbzcN5rPzmRRiT2eyvDsGRDac9le4s%2FMFRZNc3uos02pIJ5O8eZnKue1awTSpSjKLtAPSaxGZCmipWWF73nh4yxTRJAUIbnYePrZV1bh%2BQNBVBMpcGKEtjBTFbAlIhgDP90tgCeRboVAi%2BBbnPJJjqUHz%2Fwv6Z%2FDH3dw8kBSBYkpgzAjo%2FiTDNeHlZ4yD8lNE0uuu5wWEjGuYkXkAEHRSXXZPzcq5yrVUD%2Byvk5THwf0GGm0MaqLkF1XGw0RUYuOO6P71pOVLGSbOZuWncw3T2bxHYDwNMC5nF%2BlxQirJQi97FCgA53y5KIJojwsvVyB76oCEv5mnNpZfznN7f5ZBxn02UZaJvkgYXiRgzTxvVcKTdKcok4ga8ndJNXlegXYiMaz6S%2FbTmccaPG9jsDOGqaUIJ3qWbYMPpuBJrqz0ErI7Evit385voGc9dDS3iwv89bHZY4%2BNNXr3pAyUN6M4oHb%2FeRsJOAHd%2BCdUUPO47KnTSrwiSgSdBCE7S6OI7Qu2mRwo3MLGg88QGOqUBG0EmIoTj8BUYon37DRPDe6%2FW9KGLB2UX83KUJVpIB2ub7wUOj03nRV7xbBZ5%2Bx1UcSqZDAunTaTzbzCGoS899cFwORfbsWDhg84ggf%2BzwWp5aYnIThrkDuujzk7yHWANc%2Bd7X4Nk6hMj3jtBwjC%2BMdLd0uLX85gW25hjqd8YdAGFGuxXK5vje5zNMgjBIEcvif%2BfpMaduLL49hEhm6mUYJv45Csu&X-Amz-Signature=4001b99528ba19483db9176d09be0fb91dd51c291e559b64da2a2091018fc558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHHVZ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LP3WAZuWVrCXsqz5oQcyTCPTDeyWVdpo1f9PjLl3mAIgdyK1HPFbKRl7C0%2FhsEqKq%2FzVmGqoe9u1KgkFR3YybjYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDNvwYdv9WeX1HCWLircAwEniZVXsEUaxd5eQKBdA4v5yt3VN2Wb4JcMqW6SHID3HxXl2jZVdLXdsMxeaeGJwmRZYtV4HfGrXLsvswN4%2BmmeK1LJhDOFS3VwtxH7TC9sWsEC7FwUAKSbzcN5rPzmRRiT2eyvDsGRDac9le4s%2FMFRZNc3uos02pIJ5O8eZnKue1awTSpSjKLtAPSaxGZCmipWWF73nh4yxTRJAUIbnYePrZV1bh%2BQNBVBMpcGKEtjBTFbAlIhgDP90tgCeRboVAi%2BBbnPJJjqUHz%2Fwv6Z%2FDH3dw8kBSBYkpgzAjo%2FiTDNeHlZ4yD8lNE0uuu5wWEjGuYkXkAEHRSXXZPzcq5yrVUD%2Byvk5THwf0GGm0MaqLkF1XGw0RUYuOO6P71pOVLGSbOZuWncw3T2bxHYDwNMC5nF%2BlxQirJQi97FCgA53y5KIJojwsvVyB76oCEv5mnNpZfznN7f5ZBxn02UZaJvkgYXiRgzTxvVcKTdKcok4ga8ndJNXlegXYiMaz6S%2FbTmccaPG9jsDOGqaUIJ3qWbYMPpuBJrqz0ErI7Evit385voGc9dDS3iwv89bHZY4%2BNNXr3pAyUN6M4oHb%2FeRsJOAHd%2BCdUUPO47KnTSrwiSgSdBCE7S6OI7Qu2mRwo3MLGg88QGOqUBG0EmIoTj8BUYon37DRPDe6%2FW9KGLB2UX83KUJVpIB2ub7wUOj03nRV7xbBZ5%2Bx1UcSqZDAunTaTzbzCGoS899cFwORfbsWDhg84ggf%2BzwWp5aYnIThrkDuujzk7yHWANc%2Bd7X4Nk6hMj3jtBwjC%2BMdLd0uLX85gW25hjqd8YdAGFGuxXK5vje5zNMgjBIEcvif%2BfpMaduLL49hEhm6mUYJv45Csu&X-Amz-Signature=7e2f96e11dd8030bf21ce3deb6fa10653aa58502d8d3ba1685c304b3fe669d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHHVZ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LP3WAZuWVrCXsqz5oQcyTCPTDeyWVdpo1f9PjLl3mAIgdyK1HPFbKRl7C0%2FhsEqKq%2FzVmGqoe9u1KgkFR3YybjYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDNvwYdv9WeX1HCWLircAwEniZVXsEUaxd5eQKBdA4v5yt3VN2Wb4JcMqW6SHID3HxXl2jZVdLXdsMxeaeGJwmRZYtV4HfGrXLsvswN4%2BmmeK1LJhDOFS3VwtxH7TC9sWsEC7FwUAKSbzcN5rPzmRRiT2eyvDsGRDac9le4s%2FMFRZNc3uos02pIJ5O8eZnKue1awTSpSjKLtAPSaxGZCmipWWF73nh4yxTRJAUIbnYePrZV1bh%2BQNBVBMpcGKEtjBTFbAlIhgDP90tgCeRboVAi%2BBbnPJJjqUHz%2Fwv6Z%2FDH3dw8kBSBYkpgzAjo%2FiTDNeHlZ4yD8lNE0uuu5wWEjGuYkXkAEHRSXXZPzcq5yrVUD%2Byvk5THwf0GGm0MaqLkF1XGw0RUYuOO6P71pOVLGSbOZuWncw3T2bxHYDwNMC5nF%2BlxQirJQi97FCgA53y5KIJojwsvVyB76oCEv5mnNpZfznN7f5ZBxn02UZaJvkgYXiRgzTxvVcKTdKcok4ga8ndJNXlegXYiMaz6S%2FbTmccaPG9jsDOGqaUIJ3qWbYMPpuBJrqz0ErI7Evit385voGc9dDS3iwv89bHZY4%2BNNXr3pAyUN6M4oHb%2FeRsJOAHd%2BCdUUPO47KnTSrwiSgSdBCE7S6OI7Qu2mRwo3MLGg88QGOqUBG0EmIoTj8BUYon37DRPDe6%2FW9KGLB2UX83KUJVpIB2ub7wUOj03nRV7xbBZ5%2Bx1UcSqZDAunTaTzbzCGoS899cFwORfbsWDhg84ggf%2BzwWp5aYnIThrkDuujzk7yHWANc%2Bd7X4Nk6hMj3jtBwjC%2BMdLd0uLX85gW25hjqd8YdAGFGuxXK5vje5zNMgjBIEcvif%2BfpMaduLL49hEhm6mUYJv45Csu&X-Amz-Signature=0fc9ba994147712dce08e7b1812e7654bce975f15d2e7751253537b125756f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHHVZ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LP3WAZuWVrCXsqz5oQcyTCPTDeyWVdpo1f9PjLl3mAIgdyK1HPFbKRl7C0%2FhsEqKq%2FzVmGqoe9u1KgkFR3YybjYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDNvwYdv9WeX1HCWLircAwEniZVXsEUaxd5eQKBdA4v5yt3VN2Wb4JcMqW6SHID3HxXl2jZVdLXdsMxeaeGJwmRZYtV4HfGrXLsvswN4%2BmmeK1LJhDOFS3VwtxH7TC9sWsEC7FwUAKSbzcN5rPzmRRiT2eyvDsGRDac9le4s%2FMFRZNc3uos02pIJ5O8eZnKue1awTSpSjKLtAPSaxGZCmipWWF73nh4yxTRJAUIbnYePrZV1bh%2BQNBVBMpcGKEtjBTFbAlIhgDP90tgCeRboVAi%2BBbnPJJjqUHz%2Fwv6Z%2FDH3dw8kBSBYkpgzAjo%2FiTDNeHlZ4yD8lNE0uuu5wWEjGuYkXkAEHRSXXZPzcq5yrVUD%2Byvk5THwf0GGm0MaqLkF1XGw0RUYuOO6P71pOVLGSbOZuWncw3T2bxHYDwNMC5nF%2BlxQirJQi97FCgA53y5KIJojwsvVyB76oCEv5mnNpZfznN7f5ZBxn02UZaJvkgYXiRgzTxvVcKTdKcok4ga8ndJNXlegXYiMaz6S%2FbTmccaPG9jsDOGqaUIJ3qWbYMPpuBJrqz0ErI7Evit385voGc9dDS3iwv89bHZY4%2BNNXr3pAyUN6M4oHb%2FeRsJOAHd%2BCdUUPO47KnTSrwiSgSdBCE7S6OI7Qu2mRwo3MLGg88QGOqUBG0EmIoTj8BUYon37DRPDe6%2FW9KGLB2UX83KUJVpIB2ub7wUOj03nRV7xbBZ5%2Bx1UcSqZDAunTaTzbzCGoS899cFwORfbsWDhg84ggf%2BzwWp5aYnIThrkDuujzk7yHWANc%2Bd7X4Nk6hMj3jtBwjC%2BMdLd0uLX85gW25hjqd8YdAGFGuxXK5vje5zNMgjBIEcvif%2BfpMaduLL49hEhm6mUYJv45Csu&X-Amz-Signature=058e4b4d8eca7dad359d18fefcbc6f8e65e7c2407f42e68ed238e1747facce50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHHVZ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LP3WAZuWVrCXsqz5oQcyTCPTDeyWVdpo1f9PjLl3mAIgdyK1HPFbKRl7C0%2FhsEqKq%2FzVmGqoe9u1KgkFR3YybjYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDNvwYdv9WeX1HCWLircAwEniZVXsEUaxd5eQKBdA4v5yt3VN2Wb4JcMqW6SHID3HxXl2jZVdLXdsMxeaeGJwmRZYtV4HfGrXLsvswN4%2BmmeK1LJhDOFS3VwtxH7TC9sWsEC7FwUAKSbzcN5rPzmRRiT2eyvDsGRDac9le4s%2FMFRZNc3uos02pIJ5O8eZnKue1awTSpSjKLtAPSaxGZCmipWWF73nh4yxTRJAUIbnYePrZV1bh%2BQNBVBMpcGKEtjBTFbAlIhgDP90tgCeRboVAi%2BBbnPJJjqUHz%2Fwv6Z%2FDH3dw8kBSBYkpgzAjo%2FiTDNeHlZ4yD8lNE0uuu5wWEjGuYkXkAEHRSXXZPzcq5yrVUD%2Byvk5THwf0GGm0MaqLkF1XGw0RUYuOO6P71pOVLGSbOZuWncw3T2bxHYDwNMC5nF%2BlxQirJQi97FCgA53y5KIJojwsvVyB76oCEv5mnNpZfznN7f5ZBxn02UZaJvkgYXiRgzTxvVcKTdKcok4ga8ndJNXlegXYiMaz6S%2FbTmccaPG9jsDOGqaUIJ3qWbYMPpuBJrqz0ErI7Evit385voGc9dDS3iwv89bHZY4%2BNNXr3pAyUN6M4oHb%2FeRsJOAHd%2BCdUUPO47KnTSrwiSgSdBCE7S6OI7Qu2mRwo3MLGg88QGOqUBG0EmIoTj8BUYon37DRPDe6%2FW9KGLB2UX83KUJVpIB2ub7wUOj03nRV7xbBZ5%2Bx1UcSqZDAunTaTzbzCGoS899cFwORfbsWDhg84ggf%2BzwWp5aYnIThrkDuujzk7yHWANc%2Bd7X4Nk6hMj3jtBwjC%2BMdLd0uLX85gW25hjqd8YdAGFGuxXK5vje5zNMgjBIEcvif%2BfpMaduLL49hEhm6mUYJv45Csu&X-Amz-Signature=7bce9d64c713d9355ec464c0e5af7e32742fe5b42a28b3d9e997d3e68a14638f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHHVZ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LP3WAZuWVrCXsqz5oQcyTCPTDeyWVdpo1f9PjLl3mAIgdyK1HPFbKRl7C0%2FhsEqKq%2FzVmGqoe9u1KgkFR3YybjYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDNvwYdv9WeX1HCWLircAwEniZVXsEUaxd5eQKBdA4v5yt3VN2Wb4JcMqW6SHID3HxXl2jZVdLXdsMxeaeGJwmRZYtV4HfGrXLsvswN4%2BmmeK1LJhDOFS3VwtxH7TC9sWsEC7FwUAKSbzcN5rPzmRRiT2eyvDsGRDac9le4s%2FMFRZNc3uos02pIJ5O8eZnKue1awTSpSjKLtAPSaxGZCmipWWF73nh4yxTRJAUIbnYePrZV1bh%2BQNBVBMpcGKEtjBTFbAlIhgDP90tgCeRboVAi%2BBbnPJJjqUHz%2Fwv6Z%2FDH3dw8kBSBYkpgzAjo%2FiTDNeHlZ4yD8lNE0uuu5wWEjGuYkXkAEHRSXXZPzcq5yrVUD%2Byvk5THwf0GGm0MaqLkF1XGw0RUYuOO6P71pOVLGSbOZuWncw3T2bxHYDwNMC5nF%2BlxQirJQi97FCgA53y5KIJojwsvVyB76oCEv5mnNpZfznN7f5ZBxn02UZaJvkgYXiRgzTxvVcKTdKcok4ga8ndJNXlegXYiMaz6S%2FbTmccaPG9jsDOGqaUIJ3qWbYMPpuBJrqz0ErI7Evit385voGc9dDS3iwv89bHZY4%2BNNXr3pAyUN6M4oHb%2FeRsJOAHd%2BCdUUPO47KnTSrwiSgSdBCE7S6OI7Qu2mRwo3MLGg88QGOqUBG0EmIoTj8BUYon37DRPDe6%2FW9KGLB2UX83KUJVpIB2ub7wUOj03nRV7xbBZ5%2Bx1UcSqZDAunTaTzbzCGoS899cFwORfbsWDhg84ggf%2BzwWp5aYnIThrkDuujzk7yHWANc%2Bd7X4Nk6hMj3jtBwjC%2BMdLd0uLX85gW25hjqd8YdAGFGuxXK5vje5zNMgjBIEcvif%2BfpMaduLL49hEhm6mUYJv45Csu&X-Amz-Signature=b98aa87538eaf66fd50bf38f0fb775bc07239f717887ed7be223d2cb24f5e9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHHVZ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LP3WAZuWVrCXsqz5oQcyTCPTDeyWVdpo1f9PjLl3mAIgdyK1HPFbKRl7C0%2FhsEqKq%2FzVmGqoe9u1KgkFR3YybjYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDNvwYdv9WeX1HCWLircAwEniZVXsEUaxd5eQKBdA4v5yt3VN2Wb4JcMqW6SHID3HxXl2jZVdLXdsMxeaeGJwmRZYtV4HfGrXLsvswN4%2BmmeK1LJhDOFS3VwtxH7TC9sWsEC7FwUAKSbzcN5rPzmRRiT2eyvDsGRDac9le4s%2FMFRZNc3uos02pIJ5O8eZnKue1awTSpSjKLtAPSaxGZCmipWWF73nh4yxTRJAUIbnYePrZV1bh%2BQNBVBMpcGKEtjBTFbAlIhgDP90tgCeRboVAi%2BBbnPJJjqUHz%2Fwv6Z%2FDH3dw8kBSBYkpgzAjo%2FiTDNeHlZ4yD8lNE0uuu5wWEjGuYkXkAEHRSXXZPzcq5yrVUD%2Byvk5THwf0GGm0MaqLkF1XGw0RUYuOO6P71pOVLGSbOZuWncw3T2bxHYDwNMC5nF%2BlxQirJQi97FCgA53y5KIJojwsvVyB76oCEv5mnNpZfznN7f5ZBxn02UZaJvkgYXiRgzTxvVcKTdKcok4ga8ndJNXlegXYiMaz6S%2FbTmccaPG9jsDOGqaUIJ3qWbYMPpuBJrqz0ErI7Evit385voGc9dDS3iwv89bHZY4%2BNNXr3pAyUN6M4oHb%2FeRsJOAHd%2BCdUUPO47KnTSrwiSgSdBCE7S6OI7Qu2mRwo3MLGg88QGOqUBG0EmIoTj8BUYon37DRPDe6%2FW9KGLB2UX83KUJVpIB2ub7wUOj03nRV7xbBZ5%2Bx1UcSqZDAunTaTzbzCGoS899cFwORfbsWDhg84ggf%2BzwWp5aYnIThrkDuujzk7yHWANc%2Bd7X4Nk6hMj3jtBwjC%2BMdLd0uLX85gW25hjqd8YdAGFGuxXK5vje5zNMgjBIEcvif%2BfpMaduLL49hEhm6mUYJv45Csu&X-Amz-Signature=ae621bd7913268cd3655ff41288317d865025161bc3cbdec1110c559cdb37481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHHVZ2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LP3WAZuWVrCXsqz5oQcyTCPTDeyWVdpo1f9PjLl3mAIgdyK1HPFbKRl7C0%2FhsEqKq%2FzVmGqoe9u1KgkFR3YybjYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDNvwYdv9WeX1HCWLircAwEniZVXsEUaxd5eQKBdA4v5yt3VN2Wb4JcMqW6SHID3HxXl2jZVdLXdsMxeaeGJwmRZYtV4HfGrXLsvswN4%2BmmeK1LJhDOFS3VwtxH7TC9sWsEC7FwUAKSbzcN5rPzmRRiT2eyvDsGRDac9le4s%2FMFRZNc3uos02pIJ5O8eZnKue1awTSpSjKLtAPSaxGZCmipWWF73nh4yxTRJAUIbnYePrZV1bh%2BQNBVBMpcGKEtjBTFbAlIhgDP90tgCeRboVAi%2BBbnPJJjqUHz%2Fwv6Z%2FDH3dw8kBSBYkpgzAjo%2FiTDNeHlZ4yD8lNE0uuu5wWEjGuYkXkAEHRSXXZPzcq5yrVUD%2Byvk5THwf0GGm0MaqLkF1XGw0RUYuOO6P71pOVLGSbOZuWncw3T2bxHYDwNMC5nF%2BlxQirJQi97FCgA53y5KIJojwsvVyB76oCEv5mnNpZfznN7f5ZBxn02UZaJvkgYXiRgzTxvVcKTdKcok4ga8ndJNXlegXYiMaz6S%2FbTmccaPG9jsDOGqaUIJ3qWbYMPpuBJrqz0ErI7Evit385voGc9dDS3iwv89bHZY4%2BNNXr3pAyUN6M4oHb%2FeRsJOAHd%2BCdUUPO47KnTSrwiSgSdBCE7S6OI7Qu2mRwo3MLGg88QGOqUBG0EmIoTj8BUYon37DRPDe6%2FW9KGLB2UX83KUJVpIB2ub7wUOj03nRV7xbBZ5%2Bx1UcSqZDAunTaTzbzCGoS899cFwORfbsWDhg84ggf%2BzwWp5aYnIThrkDuujzk7yHWANc%2Bd7X4Nk6hMj3jtBwjC%2BMdLd0uLX85gW25hjqd8YdAGFGuxXK5vje5zNMgjBIEcvif%2BfpMaduLL49hEhm6mUYJv45Csu&X-Amz-Signature=caab23060301ec22f1093c3317dbabeed274bf497126cc392bbcb85c17f3d56b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

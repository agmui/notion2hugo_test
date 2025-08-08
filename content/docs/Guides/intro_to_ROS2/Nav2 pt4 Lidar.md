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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZJJ3KC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIB6WhrosgQW4Fc4a42yoLu6z2cHoj46JCdtV2TsN9dLZAiEAwmXXbs3YCgrLahwMGzvHuJs5jSwLKi7BqriHv9OTksoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6r4XMgBva28MCvCrcA%2BWwQBwmpunFdbptUhdmR3E5IHrSRAzl6GBelE0xDDG4e9KY78TjOnQ2WczH%2FA4HsELRcm57qcbnWkjIeTIDR5iwTuAM1RO6%2FzdYyd94VP4DAiLUfrERglVZ5iji9TzvAb1%2BQ5MJ0M%2B3TNmMDfxsqQ%2BjYrIe6uEMgk9tIW4LRlMKbzYBcH6x7FSRv%2FLfzRGwdcr00xm0OnbHnIaIZtrAqnY%2B53lj5rSiW9xX5QX0yM5%2FX5CTYuhm2F7HdxduB%2FY%2BDxw2bHS7tolfS0k0cCbZwEVqvI4uBaxljNgBLmUGBujps0kCatrbtjHTw06GfdvV3uCP9%2BtQSJCqMq%2Fuv7WYgrbnm58bsJF9BWvI0BMFYkLcFSf2riJfE6APrYefK4VGFo6BaCVdyi84E%2BAtJ9tesYETUSUAEvU8sG1t8vdQzSXxHxXUagb4BK5D%2FrmM6noQaAU5%2FAn%2BRmkleqDWJf2JZ6IByTRUjpNMYdwZWsg5TIIhg7NRskUfdxMn2ARWzi8zWtI%2Bw5BPZ76qT3FG3q7LHrdXkjWMTyIGxlGiZJDcev4PwW9knDnfNop3EpE4iVIylRqF0poY1RK%2BBkkGa7VOee8ICAJMspvDSK8b5eR80VvOlGc%2B%2FeL6pXlPQtlhMK2g1sQGOqUB3ahBUzNr5zT4H%2BdzkhLrkqiBEUDx5rvTFevaocJM8EifS3xFhU6YgNSf%2FsZt5AF%2FrCQnglekIoSzlUfhE5nlOZXMpseoEyztacTi2ixfa9MsAQOCgcGRk7hhwS8kvar%2BUI0%2FdKXaq5t3rt4Yz8gECgVFGTTUcQzwpM1HEEoiABNSngj1ENO7mHRm70Qh5oDt5ZXLp8zcmgWGA5bF%2Fv3iHUaD3SXM&X-Amz-Signature=d443cbd5ca4c3b90a9fc2adc9d5a11f834fe02394ac8f2355538c0ccee32b0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2FK45N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXwK71rd4nuRTpJWpHYGhyOmKHoTwMQNpM8sytYE6lTQIgI1bDzSJD5NTSRVzdoFNTgu1Yhhe5r5znyprfGxo%2FRukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXsbpkZ8cuiCy07UyrcAwfsjbPHXioVGJYxhyoF%2Fh1Ie77I5rUqQ3hMoA4t2tKJw19th42r7cDjTYogSG6CZqWCy1A5bFYZqeXFOVtZGEFVzW0yvE3nSCH7u2VaQqbiDxNWZi7bdrigJHuD0t85V2HHlJpcgXa4hFmuV83Gvwo59Z5IehRyTxbjYvT0ve9Hk2QkX1iV5lBe3lfPShhAia3u4eG5qQCYAAkyaQYFjqAafJYOQzWax7SZ4NFraqhtdQg3qxOYA%2BKT1Za9Z9yJH7kebfE3%2FrNY3XlOD6gjCJ6YCuToHsZNKyfonbj%2BfiEyDlhbfa9YNDo8%2Fo4MghGwajAwcqan6gMkPmQPL14%2F7GXhRb6%2B1o2wi%2FVkt3GwYTYxY12AZyj3DyqYy3S4WKckANcC8mxqG9pOSyDWQm2mhovim9yrzfs1t9WFMOUlEEJE0Sc5O42aZ%2Bz%2BsFuSeYBSQ8K2zvOMQsLUQKKvYhZc99KdcXlKGLLr6j5ncH954kYu5uG0j20FMPQF9VXGEJdV5ZoePZejWXBXS7XOHpZbRovM7EH9xXuQZvJUNVbkohO3ez160PzFh%2BBxRxKw8PZph0J%2FZ5BX8ypye54pn01oqESCHGnPvuw7vfusdl9yGxn9wtpzIvhCjiFkyE5cMJaf1sQGOqUBS7EYtm2gUUAfuOK4wwkjO7qBP8fXKbVLsAmg9Z3gE2vJRjpZU9nAc%2Bfji97QTPA2QQjTz7me7CNHeWK40JNHC4cUJzfMNaLqTvtymCO4mGe2Zxkzhpp%2BOizu%2FhOGAJg95GI7j%2FoNRIvKcMWamSgE%2FTODfpacoXxKWqkBHateMNGyQykLYx4Q57TqnSMrLcFJAJkXV%2FCIAfIWPVyIqKPQIMyc9qtb&X-Amz-Signature=a73fee600711b650b601352e760902b6471e09e065445dd30d947b358323d783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2FK45N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXwK71rd4nuRTpJWpHYGhyOmKHoTwMQNpM8sytYE6lTQIgI1bDzSJD5NTSRVzdoFNTgu1Yhhe5r5znyprfGxo%2FRukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXsbpkZ8cuiCy07UyrcAwfsjbPHXioVGJYxhyoF%2Fh1Ie77I5rUqQ3hMoA4t2tKJw19th42r7cDjTYogSG6CZqWCy1A5bFYZqeXFOVtZGEFVzW0yvE3nSCH7u2VaQqbiDxNWZi7bdrigJHuD0t85V2HHlJpcgXa4hFmuV83Gvwo59Z5IehRyTxbjYvT0ve9Hk2QkX1iV5lBe3lfPShhAia3u4eG5qQCYAAkyaQYFjqAafJYOQzWax7SZ4NFraqhtdQg3qxOYA%2BKT1Za9Z9yJH7kebfE3%2FrNY3XlOD6gjCJ6YCuToHsZNKyfonbj%2BfiEyDlhbfa9YNDo8%2Fo4MghGwajAwcqan6gMkPmQPL14%2F7GXhRb6%2B1o2wi%2FVkt3GwYTYxY12AZyj3DyqYy3S4WKckANcC8mxqG9pOSyDWQm2mhovim9yrzfs1t9WFMOUlEEJE0Sc5O42aZ%2Bz%2BsFuSeYBSQ8K2zvOMQsLUQKKvYhZc99KdcXlKGLLr6j5ncH954kYu5uG0j20FMPQF9VXGEJdV5ZoePZejWXBXS7XOHpZbRovM7EH9xXuQZvJUNVbkohO3ez160PzFh%2BBxRxKw8PZph0J%2FZ5BX8ypye54pn01oqESCHGnPvuw7vfusdl9yGxn9wtpzIvhCjiFkyE5cMJaf1sQGOqUBS7EYtm2gUUAfuOK4wwkjO7qBP8fXKbVLsAmg9Z3gE2vJRjpZU9nAc%2Bfji97QTPA2QQjTz7me7CNHeWK40JNHC4cUJzfMNaLqTvtymCO4mGe2Zxkzhpp%2BOizu%2FhOGAJg95GI7j%2FoNRIvKcMWamSgE%2FTODfpacoXxKWqkBHateMNGyQykLYx4Q57TqnSMrLcFJAJkXV%2FCIAfIWPVyIqKPQIMyc9qtb&X-Amz-Signature=69623d7c85b63c0cf76e20de4206164045aa906b878f4f6bb4ff7f45169e767b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2FK45N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXwK71rd4nuRTpJWpHYGhyOmKHoTwMQNpM8sytYE6lTQIgI1bDzSJD5NTSRVzdoFNTgu1Yhhe5r5znyprfGxo%2FRukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXsbpkZ8cuiCy07UyrcAwfsjbPHXioVGJYxhyoF%2Fh1Ie77I5rUqQ3hMoA4t2tKJw19th42r7cDjTYogSG6CZqWCy1A5bFYZqeXFOVtZGEFVzW0yvE3nSCH7u2VaQqbiDxNWZi7bdrigJHuD0t85V2HHlJpcgXa4hFmuV83Gvwo59Z5IehRyTxbjYvT0ve9Hk2QkX1iV5lBe3lfPShhAia3u4eG5qQCYAAkyaQYFjqAafJYOQzWax7SZ4NFraqhtdQg3qxOYA%2BKT1Za9Z9yJH7kebfE3%2FrNY3XlOD6gjCJ6YCuToHsZNKyfonbj%2BfiEyDlhbfa9YNDo8%2Fo4MghGwajAwcqan6gMkPmQPL14%2F7GXhRb6%2B1o2wi%2FVkt3GwYTYxY12AZyj3DyqYy3S4WKckANcC8mxqG9pOSyDWQm2mhovim9yrzfs1t9WFMOUlEEJE0Sc5O42aZ%2Bz%2BsFuSeYBSQ8K2zvOMQsLUQKKvYhZc99KdcXlKGLLr6j5ncH954kYu5uG0j20FMPQF9VXGEJdV5ZoePZejWXBXS7XOHpZbRovM7EH9xXuQZvJUNVbkohO3ez160PzFh%2BBxRxKw8PZph0J%2FZ5BX8ypye54pn01oqESCHGnPvuw7vfusdl9yGxn9wtpzIvhCjiFkyE5cMJaf1sQGOqUBS7EYtm2gUUAfuOK4wwkjO7qBP8fXKbVLsAmg9Z3gE2vJRjpZU9nAc%2Bfji97QTPA2QQjTz7me7CNHeWK40JNHC4cUJzfMNaLqTvtymCO4mGe2Zxkzhpp%2BOizu%2FhOGAJg95GI7j%2FoNRIvKcMWamSgE%2FTODfpacoXxKWqkBHateMNGyQykLYx4Q57TqnSMrLcFJAJkXV%2FCIAfIWPVyIqKPQIMyc9qtb&X-Amz-Signature=82ca4d08d822004ede3b580dada93dd6aaf51d4464ec4464d51052e10762a295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2FK45N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXwK71rd4nuRTpJWpHYGhyOmKHoTwMQNpM8sytYE6lTQIgI1bDzSJD5NTSRVzdoFNTgu1Yhhe5r5znyprfGxo%2FRukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXsbpkZ8cuiCy07UyrcAwfsjbPHXioVGJYxhyoF%2Fh1Ie77I5rUqQ3hMoA4t2tKJw19th42r7cDjTYogSG6CZqWCy1A5bFYZqeXFOVtZGEFVzW0yvE3nSCH7u2VaQqbiDxNWZi7bdrigJHuD0t85V2HHlJpcgXa4hFmuV83Gvwo59Z5IehRyTxbjYvT0ve9Hk2QkX1iV5lBe3lfPShhAia3u4eG5qQCYAAkyaQYFjqAafJYOQzWax7SZ4NFraqhtdQg3qxOYA%2BKT1Za9Z9yJH7kebfE3%2FrNY3XlOD6gjCJ6YCuToHsZNKyfonbj%2BfiEyDlhbfa9YNDo8%2Fo4MghGwajAwcqan6gMkPmQPL14%2F7GXhRb6%2B1o2wi%2FVkt3GwYTYxY12AZyj3DyqYy3S4WKckANcC8mxqG9pOSyDWQm2mhovim9yrzfs1t9WFMOUlEEJE0Sc5O42aZ%2Bz%2BsFuSeYBSQ8K2zvOMQsLUQKKvYhZc99KdcXlKGLLr6j5ncH954kYu5uG0j20FMPQF9VXGEJdV5ZoePZejWXBXS7XOHpZbRovM7EH9xXuQZvJUNVbkohO3ez160PzFh%2BBxRxKw8PZph0J%2FZ5BX8ypye54pn01oqESCHGnPvuw7vfusdl9yGxn9wtpzIvhCjiFkyE5cMJaf1sQGOqUBS7EYtm2gUUAfuOK4wwkjO7qBP8fXKbVLsAmg9Z3gE2vJRjpZU9nAc%2Bfji97QTPA2QQjTz7me7CNHeWK40JNHC4cUJzfMNaLqTvtymCO4mGe2Zxkzhpp%2BOizu%2FhOGAJg95GI7j%2FoNRIvKcMWamSgE%2FTODfpacoXxKWqkBHateMNGyQykLYx4Q57TqnSMrLcFJAJkXV%2FCIAfIWPVyIqKPQIMyc9qtb&X-Amz-Signature=003dbbf86e23671fe2df4f49e0b37085021dece617680dbf204bd2da7448624d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2FK45N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXwK71rd4nuRTpJWpHYGhyOmKHoTwMQNpM8sytYE6lTQIgI1bDzSJD5NTSRVzdoFNTgu1Yhhe5r5znyprfGxo%2FRukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXsbpkZ8cuiCy07UyrcAwfsjbPHXioVGJYxhyoF%2Fh1Ie77I5rUqQ3hMoA4t2tKJw19th42r7cDjTYogSG6CZqWCy1A5bFYZqeXFOVtZGEFVzW0yvE3nSCH7u2VaQqbiDxNWZi7bdrigJHuD0t85V2HHlJpcgXa4hFmuV83Gvwo59Z5IehRyTxbjYvT0ve9Hk2QkX1iV5lBe3lfPShhAia3u4eG5qQCYAAkyaQYFjqAafJYOQzWax7SZ4NFraqhtdQg3qxOYA%2BKT1Za9Z9yJH7kebfE3%2FrNY3XlOD6gjCJ6YCuToHsZNKyfonbj%2BfiEyDlhbfa9YNDo8%2Fo4MghGwajAwcqan6gMkPmQPL14%2F7GXhRb6%2B1o2wi%2FVkt3GwYTYxY12AZyj3DyqYy3S4WKckANcC8mxqG9pOSyDWQm2mhovim9yrzfs1t9WFMOUlEEJE0Sc5O42aZ%2Bz%2BsFuSeYBSQ8K2zvOMQsLUQKKvYhZc99KdcXlKGLLr6j5ncH954kYu5uG0j20FMPQF9VXGEJdV5ZoePZejWXBXS7XOHpZbRovM7EH9xXuQZvJUNVbkohO3ez160PzFh%2BBxRxKw8PZph0J%2FZ5BX8ypye54pn01oqESCHGnPvuw7vfusdl9yGxn9wtpzIvhCjiFkyE5cMJaf1sQGOqUBS7EYtm2gUUAfuOK4wwkjO7qBP8fXKbVLsAmg9Z3gE2vJRjpZU9nAc%2Bfji97QTPA2QQjTz7me7CNHeWK40JNHC4cUJzfMNaLqTvtymCO4mGe2Zxkzhpp%2BOizu%2FhOGAJg95GI7j%2FoNRIvKcMWamSgE%2FTODfpacoXxKWqkBHateMNGyQykLYx4Q57TqnSMrLcFJAJkXV%2FCIAfIWPVyIqKPQIMyc9qtb&X-Amz-Signature=a0d6d0261d8e888e82d57ef5edaa25d1287f818c546629c3e605838ffdaf09a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2FK45N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXwK71rd4nuRTpJWpHYGhyOmKHoTwMQNpM8sytYE6lTQIgI1bDzSJD5NTSRVzdoFNTgu1Yhhe5r5znyprfGxo%2FRukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXsbpkZ8cuiCy07UyrcAwfsjbPHXioVGJYxhyoF%2Fh1Ie77I5rUqQ3hMoA4t2tKJw19th42r7cDjTYogSG6CZqWCy1A5bFYZqeXFOVtZGEFVzW0yvE3nSCH7u2VaQqbiDxNWZi7bdrigJHuD0t85V2HHlJpcgXa4hFmuV83Gvwo59Z5IehRyTxbjYvT0ve9Hk2QkX1iV5lBe3lfPShhAia3u4eG5qQCYAAkyaQYFjqAafJYOQzWax7SZ4NFraqhtdQg3qxOYA%2BKT1Za9Z9yJH7kebfE3%2FrNY3XlOD6gjCJ6YCuToHsZNKyfonbj%2BfiEyDlhbfa9YNDo8%2Fo4MghGwajAwcqan6gMkPmQPL14%2F7GXhRb6%2B1o2wi%2FVkt3GwYTYxY12AZyj3DyqYy3S4WKckANcC8mxqG9pOSyDWQm2mhovim9yrzfs1t9WFMOUlEEJE0Sc5O42aZ%2Bz%2BsFuSeYBSQ8K2zvOMQsLUQKKvYhZc99KdcXlKGLLr6j5ncH954kYu5uG0j20FMPQF9VXGEJdV5ZoePZejWXBXS7XOHpZbRovM7EH9xXuQZvJUNVbkohO3ez160PzFh%2BBxRxKw8PZph0J%2FZ5BX8ypye54pn01oqESCHGnPvuw7vfusdl9yGxn9wtpzIvhCjiFkyE5cMJaf1sQGOqUBS7EYtm2gUUAfuOK4wwkjO7qBP8fXKbVLsAmg9Z3gE2vJRjpZU9nAc%2Bfji97QTPA2QQjTz7me7CNHeWK40JNHC4cUJzfMNaLqTvtymCO4mGe2Zxkzhpp%2BOizu%2FhOGAJg95GI7j%2FoNRIvKcMWamSgE%2FTODfpacoXxKWqkBHateMNGyQykLYx4Q57TqnSMrLcFJAJkXV%2FCIAfIWPVyIqKPQIMyc9qtb&X-Amz-Signature=43a1618cc9025b3a06b3760f62b686cc25538c9f7ca5bbc98a6bf52234e87ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2FK45N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXwK71rd4nuRTpJWpHYGhyOmKHoTwMQNpM8sytYE6lTQIgI1bDzSJD5NTSRVzdoFNTgu1Yhhe5r5znyprfGxo%2FRukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXsbpkZ8cuiCy07UyrcAwfsjbPHXioVGJYxhyoF%2Fh1Ie77I5rUqQ3hMoA4t2tKJw19th42r7cDjTYogSG6CZqWCy1A5bFYZqeXFOVtZGEFVzW0yvE3nSCH7u2VaQqbiDxNWZi7bdrigJHuD0t85V2HHlJpcgXa4hFmuV83Gvwo59Z5IehRyTxbjYvT0ve9Hk2QkX1iV5lBe3lfPShhAia3u4eG5qQCYAAkyaQYFjqAafJYOQzWax7SZ4NFraqhtdQg3qxOYA%2BKT1Za9Z9yJH7kebfE3%2FrNY3XlOD6gjCJ6YCuToHsZNKyfonbj%2BfiEyDlhbfa9YNDo8%2Fo4MghGwajAwcqan6gMkPmQPL14%2F7GXhRb6%2B1o2wi%2FVkt3GwYTYxY12AZyj3DyqYy3S4WKckANcC8mxqG9pOSyDWQm2mhovim9yrzfs1t9WFMOUlEEJE0Sc5O42aZ%2Bz%2BsFuSeYBSQ8K2zvOMQsLUQKKvYhZc99KdcXlKGLLr6j5ncH954kYu5uG0j20FMPQF9VXGEJdV5ZoePZejWXBXS7XOHpZbRovM7EH9xXuQZvJUNVbkohO3ez160PzFh%2BBxRxKw8PZph0J%2FZ5BX8ypye54pn01oqESCHGnPvuw7vfusdl9yGxn9wtpzIvhCjiFkyE5cMJaf1sQGOqUBS7EYtm2gUUAfuOK4wwkjO7qBP8fXKbVLsAmg9Z3gE2vJRjpZU9nAc%2Bfji97QTPA2QQjTz7me7CNHeWK40JNHC4cUJzfMNaLqTvtymCO4mGe2Zxkzhpp%2BOizu%2FhOGAJg95GI7j%2FoNRIvKcMWamSgE%2FTODfpacoXxKWqkBHateMNGyQykLYx4Q57TqnSMrLcFJAJkXV%2FCIAfIWPVyIqKPQIMyc9qtb&X-Amz-Signature=7fab9ad5bf5cd3f3ec93503c8fe4f724c57ef3b5d42faac6e5c0ff026939eb1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2FK45N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXwK71rd4nuRTpJWpHYGhyOmKHoTwMQNpM8sytYE6lTQIgI1bDzSJD5NTSRVzdoFNTgu1Yhhe5r5znyprfGxo%2FRukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXsbpkZ8cuiCy07UyrcAwfsjbPHXioVGJYxhyoF%2Fh1Ie77I5rUqQ3hMoA4t2tKJw19th42r7cDjTYogSG6CZqWCy1A5bFYZqeXFOVtZGEFVzW0yvE3nSCH7u2VaQqbiDxNWZi7bdrigJHuD0t85V2HHlJpcgXa4hFmuV83Gvwo59Z5IehRyTxbjYvT0ve9Hk2QkX1iV5lBe3lfPShhAia3u4eG5qQCYAAkyaQYFjqAafJYOQzWax7SZ4NFraqhtdQg3qxOYA%2BKT1Za9Z9yJH7kebfE3%2FrNY3XlOD6gjCJ6YCuToHsZNKyfonbj%2BfiEyDlhbfa9YNDo8%2Fo4MghGwajAwcqan6gMkPmQPL14%2F7GXhRb6%2B1o2wi%2FVkt3GwYTYxY12AZyj3DyqYy3S4WKckANcC8mxqG9pOSyDWQm2mhovim9yrzfs1t9WFMOUlEEJE0Sc5O42aZ%2Bz%2BsFuSeYBSQ8K2zvOMQsLUQKKvYhZc99KdcXlKGLLr6j5ncH954kYu5uG0j20FMPQF9VXGEJdV5ZoePZejWXBXS7XOHpZbRovM7EH9xXuQZvJUNVbkohO3ez160PzFh%2BBxRxKw8PZph0J%2FZ5BX8ypye54pn01oqESCHGnPvuw7vfusdl9yGxn9wtpzIvhCjiFkyE5cMJaf1sQGOqUBS7EYtm2gUUAfuOK4wwkjO7qBP8fXKbVLsAmg9Z3gE2vJRjpZU9nAc%2Bfji97QTPA2QQjTz7me7CNHeWK40JNHC4cUJzfMNaLqTvtymCO4mGe2Zxkzhpp%2BOizu%2FhOGAJg95GI7j%2FoNRIvKcMWamSgE%2FTODfpacoXxKWqkBHateMNGyQykLYx4Q57TqnSMrLcFJAJkXV%2FCIAfIWPVyIqKPQIMyc9qtb&X-Amz-Signature=ba0f1b84a179f3297ee65672e332c9d38a6b6138a337982b64da43a94a0e18b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2FK45N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXwK71rd4nuRTpJWpHYGhyOmKHoTwMQNpM8sytYE6lTQIgI1bDzSJD5NTSRVzdoFNTgu1Yhhe5r5znyprfGxo%2FRukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXsbpkZ8cuiCy07UyrcAwfsjbPHXioVGJYxhyoF%2Fh1Ie77I5rUqQ3hMoA4t2tKJw19th42r7cDjTYogSG6CZqWCy1A5bFYZqeXFOVtZGEFVzW0yvE3nSCH7u2VaQqbiDxNWZi7bdrigJHuD0t85V2HHlJpcgXa4hFmuV83Gvwo59Z5IehRyTxbjYvT0ve9Hk2QkX1iV5lBe3lfPShhAia3u4eG5qQCYAAkyaQYFjqAafJYOQzWax7SZ4NFraqhtdQg3qxOYA%2BKT1Za9Z9yJH7kebfE3%2FrNY3XlOD6gjCJ6YCuToHsZNKyfonbj%2BfiEyDlhbfa9YNDo8%2Fo4MghGwajAwcqan6gMkPmQPL14%2F7GXhRb6%2B1o2wi%2FVkt3GwYTYxY12AZyj3DyqYy3S4WKckANcC8mxqG9pOSyDWQm2mhovim9yrzfs1t9WFMOUlEEJE0Sc5O42aZ%2Bz%2BsFuSeYBSQ8K2zvOMQsLUQKKvYhZc99KdcXlKGLLr6j5ncH954kYu5uG0j20FMPQF9VXGEJdV5ZoePZejWXBXS7XOHpZbRovM7EH9xXuQZvJUNVbkohO3ez160PzFh%2BBxRxKw8PZph0J%2FZ5BX8ypye54pn01oqESCHGnPvuw7vfusdl9yGxn9wtpzIvhCjiFkyE5cMJaf1sQGOqUBS7EYtm2gUUAfuOK4wwkjO7qBP8fXKbVLsAmg9Z3gE2vJRjpZU9nAc%2Bfji97QTPA2QQjTz7me7CNHeWK40JNHC4cUJzfMNaLqTvtymCO4mGe2Zxkzhpp%2BOizu%2FhOGAJg95GI7j%2FoNRIvKcMWamSgE%2FTODfpacoXxKWqkBHateMNGyQykLYx4Q57TqnSMrLcFJAJkXV%2FCIAfIWPVyIqKPQIMyc9qtb&X-Amz-Signature=96feb9a7f3bf3d6feb9b143cfda0ef6583e1817ac339e2013ceeb647d81efddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2FK45N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXwK71rd4nuRTpJWpHYGhyOmKHoTwMQNpM8sytYE6lTQIgI1bDzSJD5NTSRVzdoFNTgu1Yhhe5r5znyprfGxo%2FRukqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXsbpkZ8cuiCy07UyrcAwfsjbPHXioVGJYxhyoF%2Fh1Ie77I5rUqQ3hMoA4t2tKJw19th42r7cDjTYogSG6CZqWCy1A5bFYZqeXFOVtZGEFVzW0yvE3nSCH7u2VaQqbiDxNWZi7bdrigJHuD0t85V2HHlJpcgXa4hFmuV83Gvwo59Z5IehRyTxbjYvT0ve9Hk2QkX1iV5lBe3lfPShhAia3u4eG5qQCYAAkyaQYFjqAafJYOQzWax7SZ4NFraqhtdQg3qxOYA%2BKT1Za9Z9yJH7kebfE3%2FrNY3XlOD6gjCJ6YCuToHsZNKyfonbj%2BfiEyDlhbfa9YNDo8%2Fo4MghGwajAwcqan6gMkPmQPL14%2F7GXhRb6%2B1o2wi%2FVkt3GwYTYxY12AZyj3DyqYy3S4WKckANcC8mxqG9pOSyDWQm2mhovim9yrzfs1t9WFMOUlEEJE0Sc5O42aZ%2Bz%2BsFuSeYBSQ8K2zvOMQsLUQKKvYhZc99KdcXlKGLLr6j5ncH954kYu5uG0j20FMPQF9VXGEJdV5ZoePZejWXBXS7XOHpZbRovM7EH9xXuQZvJUNVbkohO3ez160PzFh%2BBxRxKw8PZph0J%2FZ5BX8ypye54pn01oqESCHGnPvuw7vfusdl9yGxn9wtpzIvhCjiFkyE5cMJaf1sQGOqUBS7EYtm2gUUAfuOK4wwkjO7qBP8fXKbVLsAmg9Z3gE2vJRjpZU9nAc%2Bfji97QTPA2QQjTz7me7CNHeWK40JNHC4cUJzfMNaLqTvtymCO4mGe2Zxkzhpp%2BOizu%2FhOGAJg95GI7j%2FoNRIvKcMWamSgE%2FTODfpacoXxKWqkBHateMNGyQykLYx4Q57TqnSMrLcFJAJkXV%2FCIAfIWPVyIqKPQIMyc9qtb&X-Amz-Signature=003dbbf86e23671fe2df4f49e0b37085021dece617680dbf204bd2da7448624d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

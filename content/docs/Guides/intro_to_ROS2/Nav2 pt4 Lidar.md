---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T16:07:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T16:07:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX2TG4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZ0HoItsZ7u12t9aHWpZLzg8psA16OoHkMAmXXaPuUgIgA5mKGuMUp87AjUQfSsbVzXEXQltAL60YaaWs7WzaqXoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMuwSSP11CFXm7lgCrcAwAKCEH8v%2B%2F%2Fhab6DOmS%2BlfdPeAbMJ3OnH2XJQmKheVu%2BN0yffdUrzgs%2BIWPPtznlrc3ESdjRpt8%2F6ILujMkZBbAl6r248RMRLhmvexlqwPzQ4BSw%2FJdmsyWOCdmtKTy80y6AAS7PtusVJ1YTloLoln0%2BzpAwK9qjH36zzPiDmKw9RRGup8h1tlBGW%2BjUFMW8n4jWFoCiosouV7Jx8%2BPOueQ2FxZZnwfwyghMyakSoZXp9d5huXuqXZNbqLZgMag4Y82M8M71bg5ZZrlarczIUTP8PwdA15hifqwhiL5o1Mz23lqyPW5Aw7Lm%2BX%2FCz1HRDNxGqsPtHrVYCqZWSrtvKwmN7BzrD6RBzQ1lp87t8CV3o%2FJ33C1wrklLB%2FKUDWJpEAhXUy8%2FgugtbJ1x2leUCB66mYYqFIIKOeGxYO%2BfHC14Xs9IGJ%2BWLV5GtTj%2BI5Hw%2FNa4P1lIR11VU5r5mFz3L7Jpq9uQ0t78Wc8AHeMcfgX4iL8vlTVuS%2FbmWI2Xn4ZGDvoUkMWGVjXBHCU88c63Wrc2TwBzT9cTwdU6RUfme4vMLnZxreabt9vSoYgYdMXXMOLacAEiPQN92b9oaNWwLqw588CwkPZgzas7%2Bc%2BNi4os9iMDvNn2v0ui6CPMLzapsQGOqUBdn884Hi0rNxgh4BMPHVq%2FKnLii%2FjBO57BfAFO9y4V1UgaBbZ23%2BfUerA%2FCS05bCLbKgZ49M8Puivo2QjJljC5zlOGAiJ7PejFx0BBtGL2zJbTeyk1HTFV%2F449TLZ1S60r6MC4VFQXgKSeVcnQHX3BiIR3Nsc99HcTiacLwg9fuiq5B5CccsWxkCg4uInjNtiE3iJzDW0vkEyXiaq7SQ5HwQACduB&X-Amz-Signature=ad56a828a773370b1ecb99b9d1be81abddb999ca720aa2a4bd9b9a3fb44c40f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX2TG4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZ0HoItsZ7u12t9aHWpZLzg8psA16OoHkMAmXXaPuUgIgA5mKGuMUp87AjUQfSsbVzXEXQltAL60YaaWs7WzaqXoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMuwSSP11CFXm7lgCrcAwAKCEH8v%2B%2F%2Fhab6DOmS%2BlfdPeAbMJ3OnH2XJQmKheVu%2BN0yffdUrzgs%2BIWPPtznlrc3ESdjRpt8%2F6ILujMkZBbAl6r248RMRLhmvexlqwPzQ4BSw%2FJdmsyWOCdmtKTy80y6AAS7PtusVJ1YTloLoln0%2BzpAwK9qjH36zzPiDmKw9RRGup8h1tlBGW%2BjUFMW8n4jWFoCiosouV7Jx8%2BPOueQ2FxZZnwfwyghMyakSoZXp9d5huXuqXZNbqLZgMag4Y82M8M71bg5ZZrlarczIUTP8PwdA15hifqwhiL5o1Mz23lqyPW5Aw7Lm%2BX%2FCz1HRDNxGqsPtHrVYCqZWSrtvKwmN7BzrD6RBzQ1lp87t8CV3o%2FJ33C1wrklLB%2FKUDWJpEAhXUy8%2FgugtbJ1x2leUCB66mYYqFIIKOeGxYO%2BfHC14Xs9IGJ%2BWLV5GtTj%2BI5Hw%2FNa4P1lIR11VU5r5mFz3L7Jpq9uQ0t78Wc8AHeMcfgX4iL8vlTVuS%2FbmWI2Xn4ZGDvoUkMWGVjXBHCU88c63Wrc2TwBzT9cTwdU6RUfme4vMLnZxreabt9vSoYgYdMXXMOLacAEiPQN92b9oaNWwLqw588CwkPZgzas7%2Bc%2BNi4os9iMDvNn2v0ui6CPMLzapsQGOqUBdn884Hi0rNxgh4BMPHVq%2FKnLii%2FjBO57BfAFO9y4V1UgaBbZ23%2BfUerA%2FCS05bCLbKgZ49M8Puivo2QjJljC5zlOGAiJ7PejFx0BBtGL2zJbTeyk1HTFV%2F449TLZ1S60r6MC4VFQXgKSeVcnQHX3BiIR3Nsc99HcTiacLwg9fuiq5B5CccsWxkCg4uInjNtiE3iJzDW0vkEyXiaq7SQ5HwQACduB&X-Amz-Signature=f457e3eb469cef9efa4b6978e46a49edc2131bc61494f941eb64f3b5b4b1b414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX2TG4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZ0HoItsZ7u12t9aHWpZLzg8psA16OoHkMAmXXaPuUgIgA5mKGuMUp87AjUQfSsbVzXEXQltAL60YaaWs7WzaqXoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMuwSSP11CFXm7lgCrcAwAKCEH8v%2B%2F%2Fhab6DOmS%2BlfdPeAbMJ3OnH2XJQmKheVu%2BN0yffdUrzgs%2BIWPPtznlrc3ESdjRpt8%2F6ILujMkZBbAl6r248RMRLhmvexlqwPzQ4BSw%2FJdmsyWOCdmtKTy80y6AAS7PtusVJ1YTloLoln0%2BzpAwK9qjH36zzPiDmKw9RRGup8h1tlBGW%2BjUFMW8n4jWFoCiosouV7Jx8%2BPOueQ2FxZZnwfwyghMyakSoZXp9d5huXuqXZNbqLZgMag4Y82M8M71bg5ZZrlarczIUTP8PwdA15hifqwhiL5o1Mz23lqyPW5Aw7Lm%2BX%2FCz1HRDNxGqsPtHrVYCqZWSrtvKwmN7BzrD6RBzQ1lp87t8CV3o%2FJ33C1wrklLB%2FKUDWJpEAhXUy8%2FgugtbJ1x2leUCB66mYYqFIIKOeGxYO%2BfHC14Xs9IGJ%2BWLV5GtTj%2BI5Hw%2FNa4P1lIR11VU5r5mFz3L7Jpq9uQ0t78Wc8AHeMcfgX4iL8vlTVuS%2FbmWI2Xn4ZGDvoUkMWGVjXBHCU88c63Wrc2TwBzT9cTwdU6RUfme4vMLnZxreabt9vSoYgYdMXXMOLacAEiPQN92b9oaNWwLqw588CwkPZgzas7%2Bc%2BNi4os9iMDvNn2v0ui6CPMLzapsQGOqUBdn884Hi0rNxgh4BMPHVq%2FKnLii%2FjBO57BfAFO9y4V1UgaBbZ23%2BfUerA%2FCS05bCLbKgZ49M8Puivo2QjJljC5zlOGAiJ7PejFx0BBtGL2zJbTeyk1HTFV%2F449TLZ1S60r6MC4VFQXgKSeVcnQHX3BiIR3Nsc99HcTiacLwg9fuiq5B5CccsWxkCg4uInjNtiE3iJzDW0vkEyXiaq7SQ5HwQACduB&X-Amz-Signature=b604a8bf12992e66919e1148c2450bcaab4a9996773b9da9308b4270a53a1c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX2TG4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZ0HoItsZ7u12t9aHWpZLzg8psA16OoHkMAmXXaPuUgIgA5mKGuMUp87AjUQfSsbVzXEXQltAL60YaaWs7WzaqXoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMuwSSP11CFXm7lgCrcAwAKCEH8v%2B%2F%2Fhab6DOmS%2BlfdPeAbMJ3OnH2XJQmKheVu%2BN0yffdUrzgs%2BIWPPtznlrc3ESdjRpt8%2F6ILujMkZBbAl6r248RMRLhmvexlqwPzQ4BSw%2FJdmsyWOCdmtKTy80y6AAS7PtusVJ1YTloLoln0%2BzpAwK9qjH36zzPiDmKw9RRGup8h1tlBGW%2BjUFMW8n4jWFoCiosouV7Jx8%2BPOueQ2FxZZnwfwyghMyakSoZXp9d5huXuqXZNbqLZgMag4Y82M8M71bg5ZZrlarczIUTP8PwdA15hifqwhiL5o1Mz23lqyPW5Aw7Lm%2BX%2FCz1HRDNxGqsPtHrVYCqZWSrtvKwmN7BzrD6RBzQ1lp87t8CV3o%2FJ33C1wrklLB%2FKUDWJpEAhXUy8%2FgugtbJ1x2leUCB66mYYqFIIKOeGxYO%2BfHC14Xs9IGJ%2BWLV5GtTj%2BI5Hw%2FNa4P1lIR11VU5r5mFz3L7Jpq9uQ0t78Wc8AHeMcfgX4iL8vlTVuS%2FbmWI2Xn4ZGDvoUkMWGVjXBHCU88c63Wrc2TwBzT9cTwdU6RUfme4vMLnZxreabt9vSoYgYdMXXMOLacAEiPQN92b9oaNWwLqw588CwkPZgzas7%2Bc%2BNi4os9iMDvNn2v0ui6CPMLzapsQGOqUBdn884Hi0rNxgh4BMPHVq%2FKnLii%2FjBO57BfAFO9y4V1UgaBbZ23%2BfUerA%2FCS05bCLbKgZ49M8Puivo2QjJljC5zlOGAiJ7PejFx0BBtGL2zJbTeyk1HTFV%2F449TLZ1S60r6MC4VFQXgKSeVcnQHX3BiIR3Nsc99HcTiacLwg9fuiq5B5CccsWxkCg4uInjNtiE3iJzDW0vkEyXiaq7SQ5HwQACduB&X-Amz-Signature=93c6d623b4272a906402707071e1730819c2bb8339edcacb93fac761b33f6420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX2TG4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZ0HoItsZ7u12t9aHWpZLzg8psA16OoHkMAmXXaPuUgIgA5mKGuMUp87AjUQfSsbVzXEXQltAL60YaaWs7WzaqXoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMuwSSP11CFXm7lgCrcAwAKCEH8v%2B%2F%2Fhab6DOmS%2BlfdPeAbMJ3OnH2XJQmKheVu%2BN0yffdUrzgs%2BIWPPtznlrc3ESdjRpt8%2F6ILujMkZBbAl6r248RMRLhmvexlqwPzQ4BSw%2FJdmsyWOCdmtKTy80y6AAS7PtusVJ1YTloLoln0%2BzpAwK9qjH36zzPiDmKw9RRGup8h1tlBGW%2BjUFMW8n4jWFoCiosouV7Jx8%2BPOueQ2FxZZnwfwyghMyakSoZXp9d5huXuqXZNbqLZgMag4Y82M8M71bg5ZZrlarczIUTP8PwdA15hifqwhiL5o1Mz23lqyPW5Aw7Lm%2BX%2FCz1HRDNxGqsPtHrVYCqZWSrtvKwmN7BzrD6RBzQ1lp87t8CV3o%2FJ33C1wrklLB%2FKUDWJpEAhXUy8%2FgugtbJ1x2leUCB66mYYqFIIKOeGxYO%2BfHC14Xs9IGJ%2BWLV5GtTj%2BI5Hw%2FNa4P1lIR11VU5r5mFz3L7Jpq9uQ0t78Wc8AHeMcfgX4iL8vlTVuS%2FbmWI2Xn4ZGDvoUkMWGVjXBHCU88c63Wrc2TwBzT9cTwdU6RUfme4vMLnZxreabt9vSoYgYdMXXMOLacAEiPQN92b9oaNWwLqw588CwkPZgzas7%2Bc%2BNi4os9iMDvNn2v0ui6CPMLzapsQGOqUBdn884Hi0rNxgh4BMPHVq%2FKnLii%2FjBO57BfAFO9y4V1UgaBbZ23%2BfUerA%2FCS05bCLbKgZ49M8Puivo2QjJljC5zlOGAiJ7PejFx0BBtGL2zJbTeyk1HTFV%2F449TLZ1S60r6MC4VFQXgKSeVcnQHX3BiIR3Nsc99HcTiacLwg9fuiq5B5CccsWxkCg4uInjNtiE3iJzDW0vkEyXiaq7SQ5HwQACduB&X-Amz-Signature=206a27636638d4f32f3d2d219c2754610b546e0db376d8b64183630d20f526dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX2TG4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZ0HoItsZ7u12t9aHWpZLzg8psA16OoHkMAmXXaPuUgIgA5mKGuMUp87AjUQfSsbVzXEXQltAL60YaaWs7WzaqXoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMuwSSP11CFXm7lgCrcAwAKCEH8v%2B%2F%2Fhab6DOmS%2BlfdPeAbMJ3OnH2XJQmKheVu%2BN0yffdUrzgs%2BIWPPtznlrc3ESdjRpt8%2F6ILujMkZBbAl6r248RMRLhmvexlqwPzQ4BSw%2FJdmsyWOCdmtKTy80y6AAS7PtusVJ1YTloLoln0%2BzpAwK9qjH36zzPiDmKw9RRGup8h1tlBGW%2BjUFMW8n4jWFoCiosouV7Jx8%2BPOueQ2FxZZnwfwyghMyakSoZXp9d5huXuqXZNbqLZgMag4Y82M8M71bg5ZZrlarczIUTP8PwdA15hifqwhiL5o1Mz23lqyPW5Aw7Lm%2BX%2FCz1HRDNxGqsPtHrVYCqZWSrtvKwmN7BzrD6RBzQ1lp87t8CV3o%2FJ33C1wrklLB%2FKUDWJpEAhXUy8%2FgugtbJ1x2leUCB66mYYqFIIKOeGxYO%2BfHC14Xs9IGJ%2BWLV5GtTj%2BI5Hw%2FNa4P1lIR11VU5r5mFz3L7Jpq9uQ0t78Wc8AHeMcfgX4iL8vlTVuS%2FbmWI2Xn4ZGDvoUkMWGVjXBHCU88c63Wrc2TwBzT9cTwdU6RUfme4vMLnZxreabt9vSoYgYdMXXMOLacAEiPQN92b9oaNWwLqw588CwkPZgzas7%2Bc%2BNi4os9iMDvNn2v0ui6CPMLzapsQGOqUBdn884Hi0rNxgh4BMPHVq%2FKnLii%2FjBO57BfAFO9y4V1UgaBbZ23%2BfUerA%2FCS05bCLbKgZ49M8Puivo2QjJljC5zlOGAiJ7PejFx0BBtGL2zJbTeyk1HTFV%2F449TLZ1S60r6MC4VFQXgKSeVcnQHX3BiIR3Nsc99HcTiacLwg9fuiq5B5CccsWxkCg4uInjNtiE3iJzDW0vkEyXiaq7SQ5HwQACduB&X-Amz-Signature=f272680b50a42d6da166a2c15951a02e891490c0d7755fd9aea14e1f056351c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX2TG4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZ0HoItsZ7u12t9aHWpZLzg8psA16OoHkMAmXXaPuUgIgA5mKGuMUp87AjUQfSsbVzXEXQltAL60YaaWs7WzaqXoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMuwSSP11CFXm7lgCrcAwAKCEH8v%2B%2F%2Fhab6DOmS%2BlfdPeAbMJ3OnH2XJQmKheVu%2BN0yffdUrzgs%2BIWPPtznlrc3ESdjRpt8%2F6ILujMkZBbAl6r248RMRLhmvexlqwPzQ4BSw%2FJdmsyWOCdmtKTy80y6AAS7PtusVJ1YTloLoln0%2BzpAwK9qjH36zzPiDmKw9RRGup8h1tlBGW%2BjUFMW8n4jWFoCiosouV7Jx8%2BPOueQ2FxZZnwfwyghMyakSoZXp9d5huXuqXZNbqLZgMag4Y82M8M71bg5ZZrlarczIUTP8PwdA15hifqwhiL5o1Mz23lqyPW5Aw7Lm%2BX%2FCz1HRDNxGqsPtHrVYCqZWSrtvKwmN7BzrD6RBzQ1lp87t8CV3o%2FJ33C1wrklLB%2FKUDWJpEAhXUy8%2FgugtbJ1x2leUCB66mYYqFIIKOeGxYO%2BfHC14Xs9IGJ%2BWLV5GtTj%2BI5Hw%2FNa4P1lIR11VU5r5mFz3L7Jpq9uQ0t78Wc8AHeMcfgX4iL8vlTVuS%2FbmWI2Xn4ZGDvoUkMWGVjXBHCU88c63Wrc2TwBzT9cTwdU6RUfme4vMLnZxreabt9vSoYgYdMXXMOLacAEiPQN92b9oaNWwLqw588CwkPZgzas7%2Bc%2BNi4os9iMDvNn2v0ui6CPMLzapsQGOqUBdn884Hi0rNxgh4BMPHVq%2FKnLii%2FjBO57BfAFO9y4V1UgaBbZ23%2BfUerA%2FCS05bCLbKgZ49M8Puivo2QjJljC5zlOGAiJ7PejFx0BBtGL2zJbTeyk1HTFV%2F449TLZ1S60r6MC4VFQXgKSeVcnQHX3BiIR3Nsc99HcTiacLwg9fuiq5B5CccsWxkCg4uInjNtiE3iJzDW0vkEyXiaq7SQ5HwQACduB&X-Amz-Signature=a1ad2aa0e304dd59df5f6e5cd495141258e48e0c5536d37db15066a3783b1f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX2TG4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZ0HoItsZ7u12t9aHWpZLzg8psA16OoHkMAmXXaPuUgIgA5mKGuMUp87AjUQfSsbVzXEXQltAL60YaaWs7WzaqXoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMuwSSP11CFXm7lgCrcAwAKCEH8v%2B%2F%2Fhab6DOmS%2BlfdPeAbMJ3OnH2XJQmKheVu%2BN0yffdUrzgs%2BIWPPtznlrc3ESdjRpt8%2F6ILujMkZBbAl6r248RMRLhmvexlqwPzQ4BSw%2FJdmsyWOCdmtKTy80y6AAS7PtusVJ1YTloLoln0%2BzpAwK9qjH36zzPiDmKw9RRGup8h1tlBGW%2BjUFMW8n4jWFoCiosouV7Jx8%2BPOueQ2FxZZnwfwyghMyakSoZXp9d5huXuqXZNbqLZgMag4Y82M8M71bg5ZZrlarczIUTP8PwdA15hifqwhiL5o1Mz23lqyPW5Aw7Lm%2BX%2FCz1HRDNxGqsPtHrVYCqZWSrtvKwmN7BzrD6RBzQ1lp87t8CV3o%2FJ33C1wrklLB%2FKUDWJpEAhXUy8%2FgugtbJ1x2leUCB66mYYqFIIKOeGxYO%2BfHC14Xs9IGJ%2BWLV5GtTj%2BI5Hw%2FNa4P1lIR11VU5r5mFz3L7Jpq9uQ0t78Wc8AHeMcfgX4iL8vlTVuS%2FbmWI2Xn4ZGDvoUkMWGVjXBHCU88c63Wrc2TwBzT9cTwdU6RUfme4vMLnZxreabt9vSoYgYdMXXMOLacAEiPQN92b9oaNWwLqw588CwkPZgzas7%2Bc%2BNi4os9iMDvNn2v0ui6CPMLzapsQGOqUBdn884Hi0rNxgh4BMPHVq%2FKnLii%2FjBO57BfAFO9y4V1UgaBbZ23%2BfUerA%2FCS05bCLbKgZ49M8Puivo2QjJljC5zlOGAiJ7PejFx0BBtGL2zJbTeyk1HTFV%2F449TLZ1S60r6MC4VFQXgKSeVcnQHX3BiIR3Nsc99HcTiacLwg9fuiq5B5CccsWxkCg4uInjNtiE3iJzDW0vkEyXiaq7SQ5HwQACduB&X-Amz-Signature=ab8b35d6573cfc1de85f02b09ac6888dcc0f67daa853497be575ded285872301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX2TG4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZ0HoItsZ7u12t9aHWpZLzg8psA16OoHkMAmXXaPuUgIgA5mKGuMUp87AjUQfSsbVzXEXQltAL60YaaWs7WzaqXoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMuwSSP11CFXm7lgCrcAwAKCEH8v%2B%2F%2Fhab6DOmS%2BlfdPeAbMJ3OnH2XJQmKheVu%2BN0yffdUrzgs%2BIWPPtznlrc3ESdjRpt8%2F6ILujMkZBbAl6r248RMRLhmvexlqwPzQ4BSw%2FJdmsyWOCdmtKTy80y6AAS7PtusVJ1YTloLoln0%2BzpAwK9qjH36zzPiDmKw9RRGup8h1tlBGW%2BjUFMW8n4jWFoCiosouV7Jx8%2BPOueQ2FxZZnwfwyghMyakSoZXp9d5huXuqXZNbqLZgMag4Y82M8M71bg5ZZrlarczIUTP8PwdA15hifqwhiL5o1Mz23lqyPW5Aw7Lm%2BX%2FCz1HRDNxGqsPtHrVYCqZWSrtvKwmN7BzrD6RBzQ1lp87t8CV3o%2FJ33C1wrklLB%2FKUDWJpEAhXUy8%2FgugtbJ1x2leUCB66mYYqFIIKOeGxYO%2BfHC14Xs9IGJ%2BWLV5GtTj%2BI5Hw%2FNa4P1lIR11VU5r5mFz3L7Jpq9uQ0t78Wc8AHeMcfgX4iL8vlTVuS%2FbmWI2Xn4ZGDvoUkMWGVjXBHCU88c63Wrc2TwBzT9cTwdU6RUfme4vMLnZxreabt9vSoYgYdMXXMOLacAEiPQN92b9oaNWwLqw588CwkPZgzas7%2Bc%2BNi4os9iMDvNn2v0ui6CPMLzapsQGOqUBdn884Hi0rNxgh4BMPHVq%2FKnLii%2FjBO57BfAFO9y4V1UgaBbZ23%2BfUerA%2FCS05bCLbKgZ49M8Puivo2QjJljC5zlOGAiJ7PejFx0BBtGL2zJbTeyk1HTFV%2F449TLZ1S60r6MC4VFQXgKSeVcnQHX3BiIR3Nsc99HcTiacLwg9fuiq5B5CccsWxkCg4uInjNtiE3iJzDW0vkEyXiaq7SQ5HwQACduB&X-Amz-Signature=614fc276ac43c7694ccdaae913425958b9a2e4570dbc6c4322e6b96dadb8dc30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKX2TG4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZ0HoItsZ7u12t9aHWpZLzg8psA16OoHkMAmXXaPuUgIgA5mKGuMUp87AjUQfSsbVzXEXQltAL60YaaWs7WzaqXoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMuwSSP11CFXm7lgCrcAwAKCEH8v%2B%2F%2Fhab6DOmS%2BlfdPeAbMJ3OnH2XJQmKheVu%2BN0yffdUrzgs%2BIWPPtznlrc3ESdjRpt8%2F6ILujMkZBbAl6r248RMRLhmvexlqwPzQ4BSw%2FJdmsyWOCdmtKTy80y6AAS7PtusVJ1YTloLoln0%2BzpAwK9qjH36zzPiDmKw9RRGup8h1tlBGW%2BjUFMW8n4jWFoCiosouV7Jx8%2BPOueQ2FxZZnwfwyghMyakSoZXp9d5huXuqXZNbqLZgMag4Y82M8M71bg5ZZrlarczIUTP8PwdA15hifqwhiL5o1Mz23lqyPW5Aw7Lm%2BX%2FCz1HRDNxGqsPtHrVYCqZWSrtvKwmN7BzrD6RBzQ1lp87t8CV3o%2FJ33C1wrklLB%2FKUDWJpEAhXUy8%2FgugtbJ1x2leUCB66mYYqFIIKOeGxYO%2BfHC14Xs9IGJ%2BWLV5GtTj%2BI5Hw%2FNa4P1lIR11VU5r5mFz3L7Jpq9uQ0t78Wc8AHeMcfgX4iL8vlTVuS%2FbmWI2Xn4ZGDvoUkMWGVjXBHCU88c63Wrc2TwBzT9cTwdU6RUfme4vMLnZxreabt9vSoYgYdMXXMOLacAEiPQN92b9oaNWwLqw588CwkPZgzas7%2Bc%2BNi4os9iMDvNn2v0ui6CPMLzapsQGOqUBdn884Hi0rNxgh4BMPHVq%2FKnLii%2FjBO57BfAFO9y4V1UgaBbZ23%2BfUerA%2FCS05bCLbKgZ49M8Puivo2QjJljC5zlOGAiJ7PejFx0BBtGL2zJbTeyk1HTFV%2F449TLZ1S60r6MC4VFQXgKSeVcnQHX3BiIR3Nsc99HcTiacLwg9fuiq5B5CccsWxkCg4uInjNtiE3iJzDW0vkEyXiaq7SQ5HwQACduB&X-Amz-Signature=b12972af760bdb14e44414a95574f1d1ed01577dfbfc43c580e659c67fd4299a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

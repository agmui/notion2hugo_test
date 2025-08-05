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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4JAFLI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDX6Y91WQzebcZvC0jSATaG5KtH08kD6s4gzHtEP2Vi%2BQIgbwU3jPOQDBlg3tM1zXjnLi40tXl%2BZZSu0s1cdqhsokwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDOjamLB4fIhmvV87cSrcA1irBBfvUxhsj11%2BVzDrdb8sZ4Rhl5nOp1bSrnTWopbMucxM5tU5YiS%2BCIe44cEMNySmmwaM2%2BfLqWkTPKYugF3m0%2FVEH2zH5XYf4ZEEi7DxfY7xBdfEKhiD7uUKdNsvAQ9GY74vBiBxHuiXLYu7kU449xChV10bXDF1jnvaQLGrO9EXBL9joz%2F37F5uJ8OqJeVM4lVGKTJ5au2dF267eg%2Fal9umuphLBFZwBetJE5jb9N6xEnHCG6w7dS7XTUAr6H5pzMGjVOQB0XgCAF4fwz%2BBpd69BqALrhR9QPakrL9ygdAokJj1%2FwIXRYNEyDoobnh8fliWL8vd2OtnE6WYPBZAl18vX0dr9oYQLoIKMctehCmsIyqtqqpF8Z1F0Uq7E4doCgjfUP6F4RHiCY7KhKUNNK7oqqfz9EovBBofxQ3M%2BiXFd7E8y5fVPRYxRlAJhGWF9FAc1IBqIVjSyDZ%2FKyGof7Tnvl%2Fqiy3NpFPR3utyt2VxHuOr10Rz%2B2LmbEp3%2FZcVd1%2BPyxsCY2OuazPh%2FFhBoUxy58E%2BZkgNXPlaTckI6hE26t8wtcWmEcaZn7xRfLjaEgmUCo%2BYVC%2BkkfmZDjA%2F1ugzJEZD%2B1onLpdYZJIkC%2B%2BYw6DWBYpATUliMKr0xMQGOqUBVC%2FSzNvkRfg1T5kbWPtblwpLSA5bqTlomhrMkpMr4Iwz7cIo5T%2FL09w%2ByUrta5xhJnsBgCBQGRqjA2WJfuhsYEPbGsBzsaJY4Zez6uhz9shvfeE17gI3hj1X6ltDsNXmGGzLPUjfXqf378IiVVCUl591sMlhuiu2vvigmdFFr1EJ2FUtwYP77PmDQlX6TB%2BtxdA8OAiJYg5OFXgNN0xS0o0frAG3&X-Amz-Signature=5bfe61e563591ec34a0beab47cbf9f0016ea5b917d70cd161503c9bbd7a8f453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35P6JE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlmJQXjiE77mSx%2BoXpTt7NPp9FZXNBgtkgzbXslKSobQIgHJO6flutHJ6aCI7UDHVdkPekUI60GRmYdriIr491Fj8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMJbrZ77IBC66gaqzyrcA1lrJfj3wKRtNnUbGF7e31LCWRBbMHEnuXs8E4cVTcJgjtGKmSaL%2FDzFMsshiWBjieuASgeKwWW65m0tescY7aeKq1tvLIs8fjJdKHmLghI6DS%2BO5zzSaqLsON9KCtxrUEeG5MgQN5786UhfPD2elWYAw9KH6XwuvDaXrDJemzG2ZWPQ1cAo%2B5%2BdCxHrFRKAMjbOmLloH5FHfEqh4X4A7t0QMk3pklXctrokK9Gb4TMC4%2Bbn089YdsLbT6vWr8OYUkuQiek6vIs%2BIL7RvIMlg%2FeerwMABGMynfnJIYupfSyrvU3tupjJ6Rmj67kjr0LzhNDyJWu%2FlwHlDZgmsgbldORjbDBhuPxH9wWFIeGQx6FU6jPfDvH0er4XV5asmHwZ%2FPqczCARDOEnkViSe3MifvZ7ZPzAMYpgPksUJEDVgwDPlS1rLXdTAZvzbp2U0IimWn6qLJqOhXTj7NEBzOemdJXfcSq%2BCR%2FvpJhgyUWfM3Rxt9i4RbLJzGREk%2BYYmN83PovkhH2xO%2F2WW%2BsO%2BTfP9A%2B1Jd%2Bn%2Fy4SDAplqtN5Refgfm2YWbUqSHDoSXgsPEyTij5%2FAjPKhY0AucS%2BO5AVFhlYL%2Bj6hlqueMqol6uMfe8VoFcn856fmZQxQ4tnMLD0xMQGOqUBNp%2BUFaIRN3ZYfohf7vk01k1sa2mKFPXo4edhJqWXyzzK6uH4eRmycWMU8Lf4X8RwDRmOrPx2puqp0sAmIGSocYWpda%2BCHAgVEsNw3veEGAE0TzjGiuxEyfN7QX15F6cCehe9S06CLG%2FqkZtp0aFWyIVtR%2FuS8QcnPAgRYubkGpGreUX7D0uqnSsO8fHnKCMxw%2B%2FtlPZ%2FnPjqoy1V8PgLvipL0%2FRl&X-Amz-Signature=08e9e36faaa6b860be851662fdd5b028f269d448d7e4da3b501ab4a328af08fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35P6JE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlmJQXjiE77mSx%2BoXpTt7NPp9FZXNBgtkgzbXslKSobQIgHJO6flutHJ6aCI7UDHVdkPekUI60GRmYdriIr491Fj8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMJbrZ77IBC66gaqzyrcA1lrJfj3wKRtNnUbGF7e31LCWRBbMHEnuXs8E4cVTcJgjtGKmSaL%2FDzFMsshiWBjieuASgeKwWW65m0tescY7aeKq1tvLIs8fjJdKHmLghI6DS%2BO5zzSaqLsON9KCtxrUEeG5MgQN5786UhfPD2elWYAw9KH6XwuvDaXrDJemzG2ZWPQ1cAo%2B5%2BdCxHrFRKAMjbOmLloH5FHfEqh4X4A7t0QMk3pklXctrokK9Gb4TMC4%2Bbn089YdsLbT6vWr8OYUkuQiek6vIs%2BIL7RvIMlg%2FeerwMABGMynfnJIYupfSyrvU3tupjJ6Rmj67kjr0LzhNDyJWu%2FlwHlDZgmsgbldORjbDBhuPxH9wWFIeGQx6FU6jPfDvH0er4XV5asmHwZ%2FPqczCARDOEnkViSe3MifvZ7ZPzAMYpgPksUJEDVgwDPlS1rLXdTAZvzbp2U0IimWn6qLJqOhXTj7NEBzOemdJXfcSq%2BCR%2FvpJhgyUWfM3Rxt9i4RbLJzGREk%2BYYmN83PovkhH2xO%2F2WW%2BsO%2BTfP9A%2B1Jd%2Bn%2Fy4SDAplqtN5Refgfm2YWbUqSHDoSXgsPEyTij5%2FAjPKhY0AucS%2BO5AVFhlYL%2Bj6hlqueMqol6uMfe8VoFcn856fmZQxQ4tnMLD0xMQGOqUBNp%2BUFaIRN3ZYfohf7vk01k1sa2mKFPXo4edhJqWXyzzK6uH4eRmycWMU8Lf4X8RwDRmOrPx2puqp0sAmIGSocYWpda%2BCHAgVEsNw3veEGAE0TzjGiuxEyfN7QX15F6cCehe9S06CLG%2FqkZtp0aFWyIVtR%2FuS8QcnPAgRYubkGpGreUX7D0uqnSsO8fHnKCMxw%2B%2FtlPZ%2FnPjqoy1V8PgLvipL0%2FRl&X-Amz-Signature=87020e0ee3a477708af95a71632c310f97d4f21fb00c510ae11005cb15d2980f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35P6JE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlmJQXjiE77mSx%2BoXpTt7NPp9FZXNBgtkgzbXslKSobQIgHJO6flutHJ6aCI7UDHVdkPekUI60GRmYdriIr491Fj8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMJbrZ77IBC66gaqzyrcA1lrJfj3wKRtNnUbGF7e31LCWRBbMHEnuXs8E4cVTcJgjtGKmSaL%2FDzFMsshiWBjieuASgeKwWW65m0tescY7aeKq1tvLIs8fjJdKHmLghI6DS%2BO5zzSaqLsON9KCtxrUEeG5MgQN5786UhfPD2elWYAw9KH6XwuvDaXrDJemzG2ZWPQ1cAo%2B5%2BdCxHrFRKAMjbOmLloH5FHfEqh4X4A7t0QMk3pklXctrokK9Gb4TMC4%2Bbn089YdsLbT6vWr8OYUkuQiek6vIs%2BIL7RvIMlg%2FeerwMABGMynfnJIYupfSyrvU3tupjJ6Rmj67kjr0LzhNDyJWu%2FlwHlDZgmsgbldORjbDBhuPxH9wWFIeGQx6FU6jPfDvH0er4XV5asmHwZ%2FPqczCARDOEnkViSe3MifvZ7ZPzAMYpgPksUJEDVgwDPlS1rLXdTAZvzbp2U0IimWn6qLJqOhXTj7NEBzOemdJXfcSq%2BCR%2FvpJhgyUWfM3Rxt9i4RbLJzGREk%2BYYmN83PovkhH2xO%2F2WW%2BsO%2BTfP9A%2B1Jd%2Bn%2Fy4SDAplqtN5Refgfm2YWbUqSHDoSXgsPEyTij5%2FAjPKhY0AucS%2BO5AVFhlYL%2Bj6hlqueMqol6uMfe8VoFcn856fmZQxQ4tnMLD0xMQGOqUBNp%2BUFaIRN3ZYfohf7vk01k1sa2mKFPXo4edhJqWXyzzK6uH4eRmycWMU8Lf4X8RwDRmOrPx2puqp0sAmIGSocYWpda%2BCHAgVEsNw3veEGAE0TzjGiuxEyfN7QX15F6cCehe9S06CLG%2FqkZtp0aFWyIVtR%2FuS8QcnPAgRYubkGpGreUX7D0uqnSsO8fHnKCMxw%2B%2FtlPZ%2FnPjqoy1V8PgLvipL0%2FRl&X-Amz-Signature=3c5fe0e89806ae08d23a5014f2fb740a582d7ef969e16c16fa62260cfb1a857b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35P6JE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlmJQXjiE77mSx%2BoXpTt7NPp9FZXNBgtkgzbXslKSobQIgHJO6flutHJ6aCI7UDHVdkPekUI60GRmYdriIr491Fj8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMJbrZ77IBC66gaqzyrcA1lrJfj3wKRtNnUbGF7e31LCWRBbMHEnuXs8E4cVTcJgjtGKmSaL%2FDzFMsshiWBjieuASgeKwWW65m0tescY7aeKq1tvLIs8fjJdKHmLghI6DS%2BO5zzSaqLsON9KCtxrUEeG5MgQN5786UhfPD2elWYAw9KH6XwuvDaXrDJemzG2ZWPQ1cAo%2B5%2BdCxHrFRKAMjbOmLloH5FHfEqh4X4A7t0QMk3pklXctrokK9Gb4TMC4%2Bbn089YdsLbT6vWr8OYUkuQiek6vIs%2BIL7RvIMlg%2FeerwMABGMynfnJIYupfSyrvU3tupjJ6Rmj67kjr0LzhNDyJWu%2FlwHlDZgmsgbldORjbDBhuPxH9wWFIeGQx6FU6jPfDvH0er4XV5asmHwZ%2FPqczCARDOEnkViSe3MifvZ7ZPzAMYpgPksUJEDVgwDPlS1rLXdTAZvzbp2U0IimWn6qLJqOhXTj7NEBzOemdJXfcSq%2BCR%2FvpJhgyUWfM3Rxt9i4RbLJzGREk%2BYYmN83PovkhH2xO%2F2WW%2BsO%2BTfP9A%2B1Jd%2Bn%2Fy4SDAplqtN5Refgfm2YWbUqSHDoSXgsPEyTij5%2FAjPKhY0AucS%2BO5AVFhlYL%2Bj6hlqueMqol6uMfe8VoFcn856fmZQxQ4tnMLD0xMQGOqUBNp%2BUFaIRN3ZYfohf7vk01k1sa2mKFPXo4edhJqWXyzzK6uH4eRmycWMU8Lf4X8RwDRmOrPx2puqp0sAmIGSocYWpda%2BCHAgVEsNw3veEGAE0TzjGiuxEyfN7QX15F6cCehe9S06CLG%2FqkZtp0aFWyIVtR%2FuS8QcnPAgRYubkGpGreUX7D0uqnSsO8fHnKCMxw%2B%2FtlPZ%2FnPjqoy1V8PgLvipL0%2FRl&X-Amz-Signature=bfa99909da5653b2afbc02cc00b9a3608f377403dfcda3550982a464b60f657e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35P6JE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlmJQXjiE77mSx%2BoXpTt7NPp9FZXNBgtkgzbXslKSobQIgHJO6flutHJ6aCI7UDHVdkPekUI60GRmYdriIr491Fj8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMJbrZ77IBC66gaqzyrcA1lrJfj3wKRtNnUbGF7e31LCWRBbMHEnuXs8E4cVTcJgjtGKmSaL%2FDzFMsshiWBjieuASgeKwWW65m0tescY7aeKq1tvLIs8fjJdKHmLghI6DS%2BO5zzSaqLsON9KCtxrUEeG5MgQN5786UhfPD2elWYAw9KH6XwuvDaXrDJemzG2ZWPQ1cAo%2B5%2BdCxHrFRKAMjbOmLloH5FHfEqh4X4A7t0QMk3pklXctrokK9Gb4TMC4%2Bbn089YdsLbT6vWr8OYUkuQiek6vIs%2BIL7RvIMlg%2FeerwMABGMynfnJIYupfSyrvU3tupjJ6Rmj67kjr0LzhNDyJWu%2FlwHlDZgmsgbldORjbDBhuPxH9wWFIeGQx6FU6jPfDvH0er4XV5asmHwZ%2FPqczCARDOEnkViSe3MifvZ7ZPzAMYpgPksUJEDVgwDPlS1rLXdTAZvzbp2U0IimWn6qLJqOhXTj7NEBzOemdJXfcSq%2BCR%2FvpJhgyUWfM3Rxt9i4RbLJzGREk%2BYYmN83PovkhH2xO%2F2WW%2BsO%2BTfP9A%2B1Jd%2Bn%2Fy4SDAplqtN5Refgfm2YWbUqSHDoSXgsPEyTij5%2FAjPKhY0AucS%2BO5AVFhlYL%2Bj6hlqueMqol6uMfe8VoFcn856fmZQxQ4tnMLD0xMQGOqUBNp%2BUFaIRN3ZYfohf7vk01k1sa2mKFPXo4edhJqWXyzzK6uH4eRmycWMU8Lf4X8RwDRmOrPx2puqp0sAmIGSocYWpda%2BCHAgVEsNw3veEGAE0TzjGiuxEyfN7QX15F6cCehe9S06CLG%2FqkZtp0aFWyIVtR%2FuS8QcnPAgRYubkGpGreUX7D0uqnSsO8fHnKCMxw%2B%2FtlPZ%2FnPjqoy1V8PgLvipL0%2FRl&X-Amz-Signature=0f8de1abfc37942ce07a52055ac1e1dec4a5108fb3838f0c7b7c4158d37ce2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35P6JE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlmJQXjiE77mSx%2BoXpTt7NPp9FZXNBgtkgzbXslKSobQIgHJO6flutHJ6aCI7UDHVdkPekUI60GRmYdriIr491Fj8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMJbrZ77IBC66gaqzyrcA1lrJfj3wKRtNnUbGF7e31LCWRBbMHEnuXs8E4cVTcJgjtGKmSaL%2FDzFMsshiWBjieuASgeKwWW65m0tescY7aeKq1tvLIs8fjJdKHmLghI6DS%2BO5zzSaqLsON9KCtxrUEeG5MgQN5786UhfPD2elWYAw9KH6XwuvDaXrDJemzG2ZWPQ1cAo%2B5%2BdCxHrFRKAMjbOmLloH5FHfEqh4X4A7t0QMk3pklXctrokK9Gb4TMC4%2Bbn089YdsLbT6vWr8OYUkuQiek6vIs%2BIL7RvIMlg%2FeerwMABGMynfnJIYupfSyrvU3tupjJ6Rmj67kjr0LzhNDyJWu%2FlwHlDZgmsgbldORjbDBhuPxH9wWFIeGQx6FU6jPfDvH0er4XV5asmHwZ%2FPqczCARDOEnkViSe3MifvZ7ZPzAMYpgPksUJEDVgwDPlS1rLXdTAZvzbp2U0IimWn6qLJqOhXTj7NEBzOemdJXfcSq%2BCR%2FvpJhgyUWfM3Rxt9i4RbLJzGREk%2BYYmN83PovkhH2xO%2F2WW%2BsO%2BTfP9A%2B1Jd%2Bn%2Fy4SDAplqtN5Refgfm2YWbUqSHDoSXgsPEyTij5%2FAjPKhY0AucS%2BO5AVFhlYL%2Bj6hlqueMqol6uMfe8VoFcn856fmZQxQ4tnMLD0xMQGOqUBNp%2BUFaIRN3ZYfohf7vk01k1sa2mKFPXo4edhJqWXyzzK6uH4eRmycWMU8Lf4X8RwDRmOrPx2puqp0sAmIGSocYWpda%2BCHAgVEsNw3veEGAE0TzjGiuxEyfN7QX15F6cCehe9S06CLG%2FqkZtp0aFWyIVtR%2FuS8QcnPAgRYubkGpGreUX7D0uqnSsO8fHnKCMxw%2B%2FtlPZ%2FnPjqoy1V8PgLvipL0%2FRl&X-Amz-Signature=a3f4f4d0fa7f7b2dd9c06d1f3add2ed5a9856e92cf482a8f477ed6f138e66e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35P6JE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlmJQXjiE77mSx%2BoXpTt7NPp9FZXNBgtkgzbXslKSobQIgHJO6flutHJ6aCI7UDHVdkPekUI60GRmYdriIr491Fj8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMJbrZ77IBC66gaqzyrcA1lrJfj3wKRtNnUbGF7e31LCWRBbMHEnuXs8E4cVTcJgjtGKmSaL%2FDzFMsshiWBjieuASgeKwWW65m0tescY7aeKq1tvLIs8fjJdKHmLghI6DS%2BO5zzSaqLsON9KCtxrUEeG5MgQN5786UhfPD2elWYAw9KH6XwuvDaXrDJemzG2ZWPQ1cAo%2B5%2BdCxHrFRKAMjbOmLloH5FHfEqh4X4A7t0QMk3pklXctrokK9Gb4TMC4%2Bbn089YdsLbT6vWr8OYUkuQiek6vIs%2BIL7RvIMlg%2FeerwMABGMynfnJIYupfSyrvU3tupjJ6Rmj67kjr0LzhNDyJWu%2FlwHlDZgmsgbldORjbDBhuPxH9wWFIeGQx6FU6jPfDvH0er4XV5asmHwZ%2FPqczCARDOEnkViSe3MifvZ7ZPzAMYpgPksUJEDVgwDPlS1rLXdTAZvzbp2U0IimWn6qLJqOhXTj7NEBzOemdJXfcSq%2BCR%2FvpJhgyUWfM3Rxt9i4RbLJzGREk%2BYYmN83PovkhH2xO%2F2WW%2BsO%2BTfP9A%2B1Jd%2Bn%2Fy4SDAplqtN5Refgfm2YWbUqSHDoSXgsPEyTij5%2FAjPKhY0AucS%2BO5AVFhlYL%2Bj6hlqueMqol6uMfe8VoFcn856fmZQxQ4tnMLD0xMQGOqUBNp%2BUFaIRN3ZYfohf7vk01k1sa2mKFPXo4edhJqWXyzzK6uH4eRmycWMU8Lf4X8RwDRmOrPx2puqp0sAmIGSocYWpda%2BCHAgVEsNw3veEGAE0TzjGiuxEyfN7QX15F6cCehe9S06CLG%2FqkZtp0aFWyIVtR%2FuS8QcnPAgRYubkGpGreUX7D0uqnSsO8fHnKCMxw%2B%2FtlPZ%2FnPjqoy1V8PgLvipL0%2FRl&X-Amz-Signature=96fb624921ab27557cf704e8d443725a89e71b4449bd27c65b4a5f9f106dd59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35P6JE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlmJQXjiE77mSx%2BoXpTt7NPp9FZXNBgtkgzbXslKSobQIgHJO6flutHJ6aCI7UDHVdkPekUI60GRmYdriIr491Fj8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMJbrZ77IBC66gaqzyrcA1lrJfj3wKRtNnUbGF7e31LCWRBbMHEnuXs8E4cVTcJgjtGKmSaL%2FDzFMsshiWBjieuASgeKwWW65m0tescY7aeKq1tvLIs8fjJdKHmLghI6DS%2BO5zzSaqLsON9KCtxrUEeG5MgQN5786UhfPD2elWYAw9KH6XwuvDaXrDJemzG2ZWPQ1cAo%2B5%2BdCxHrFRKAMjbOmLloH5FHfEqh4X4A7t0QMk3pklXctrokK9Gb4TMC4%2Bbn089YdsLbT6vWr8OYUkuQiek6vIs%2BIL7RvIMlg%2FeerwMABGMynfnJIYupfSyrvU3tupjJ6Rmj67kjr0LzhNDyJWu%2FlwHlDZgmsgbldORjbDBhuPxH9wWFIeGQx6FU6jPfDvH0er4XV5asmHwZ%2FPqczCARDOEnkViSe3MifvZ7ZPzAMYpgPksUJEDVgwDPlS1rLXdTAZvzbp2U0IimWn6qLJqOhXTj7NEBzOemdJXfcSq%2BCR%2FvpJhgyUWfM3Rxt9i4RbLJzGREk%2BYYmN83PovkhH2xO%2F2WW%2BsO%2BTfP9A%2B1Jd%2Bn%2Fy4SDAplqtN5Refgfm2YWbUqSHDoSXgsPEyTij5%2FAjPKhY0AucS%2BO5AVFhlYL%2Bj6hlqueMqol6uMfe8VoFcn856fmZQxQ4tnMLD0xMQGOqUBNp%2BUFaIRN3ZYfohf7vk01k1sa2mKFPXo4edhJqWXyzzK6uH4eRmycWMU8Lf4X8RwDRmOrPx2puqp0sAmIGSocYWpda%2BCHAgVEsNw3veEGAE0TzjGiuxEyfN7QX15F6cCehe9S06CLG%2FqkZtp0aFWyIVtR%2FuS8QcnPAgRYubkGpGreUX7D0uqnSsO8fHnKCMxw%2B%2FtlPZ%2FnPjqoy1V8PgLvipL0%2FRl&X-Amz-Signature=0c1b5470b7a616fab85517beae8e9726d238a6bb1d8466eee1b4c441c1e42d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35P6JE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlmJQXjiE77mSx%2BoXpTt7NPp9FZXNBgtkgzbXslKSobQIgHJO6flutHJ6aCI7UDHVdkPekUI60GRmYdriIr491Fj8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMJbrZ77IBC66gaqzyrcA1lrJfj3wKRtNnUbGF7e31LCWRBbMHEnuXs8E4cVTcJgjtGKmSaL%2FDzFMsshiWBjieuASgeKwWW65m0tescY7aeKq1tvLIs8fjJdKHmLghI6DS%2BO5zzSaqLsON9KCtxrUEeG5MgQN5786UhfPD2elWYAw9KH6XwuvDaXrDJemzG2ZWPQ1cAo%2B5%2BdCxHrFRKAMjbOmLloH5FHfEqh4X4A7t0QMk3pklXctrokK9Gb4TMC4%2Bbn089YdsLbT6vWr8OYUkuQiek6vIs%2BIL7RvIMlg%2FeerwMABGMynfnJIYupfSyrvU3tupjJ6Rmj67kjr0LzhNDyJWu%2FlwHlDZgmsgbldORjbDBhuPxH9wWFIeGQx6FU6jPfDvH0er4XV5asmHwZ%2FPqczCARDOEnkViSe3MifvZ7ZPzAMYpgPksUJEDVgwDPlS1rLXdTAZvzbp2U0IimWn6qLJqOhXTj7NEBzOemdJXfcSq%2BCR%2FvpJhgyUWfM3Rxt9i4RbLJzGREk%2BYYmN83PovkhH2xO%2F2WW%2BsO%2BTfP9A%2B1Jd%2Bn%2Fy4SDAplqtN5Refgfm2YWbUqSHDoSXgsPEyTij5%2FAjPKhY0AucS%2BO5AVFhlYL%2Bj6hlqueMqol6uMfe8VoFcn856fmZQxQ4tnMLD0xMQGOqUBNp%2BUFaIRN3ZYfohf7vk01k1sa2mKFPXo4edhJqWXyzzK6uH4eRmycWMU8Lf4X8RwDRmOrPx2puqp0sAmIGSocYWpda%2BCHAgVEsNw3veEGAE0TzjGiuxEyfN7QX15F6cCehe9S06CLG%2FqkZtp0aFWyIVtR%2FuS8QcnPAgRYubkGpGreUX7D0uqnSsO8fHnKCMxw%2B%2FtlPZ%2FnPjqoy1V8PgLvipL0%2FRl&X-Amz-Signature=46b5d435d75ef3395902409fad0268b5398d8684f4c0905549c3ba7d108a2450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35P6JE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlmJQXjiE77mSx%2BoXpTt7NPp9FZXNBgtkgzbXslKSobQIgHJO6flutHJ6aCI7UDHVdkPekUI60GRmYdriIr491Fj8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMJbrZ77IBC66gaqzyrcA1lrJfj3wKRtNnUbGF7e31LCWRBbMHEnuXs8E4cVTcJgjtGKmSaL%2FDzFMsshiWBjieuASgeKwWW65m0tescY7aeKq1tvLIs8fjJdKHmLghI6DS%2BO5zzSaqLsON9KCtxrUEeG5MgQN5786UhfPD2elWYAw9KH6XwuvDaXrDJemzG2ZWPQ1cAo%2B5%2BdCxHrFRKAMjbOmLloH5FHfEqh4X4A7t0QMk3pklXctrokK9Gb4TMC4%2Bbn089YdsLbT6vWr8OYUkuQiek6vIs%2BIL7RvIMlg%2FeerwMABGMynfnJIYupfSyrvU3tupjJ6Rmj67kjr0LzhNDyJWu%2FlwHlDZgmsgbldORjbDBhuPxH9wWFIeGQx6FU6jPfDvH0er4XV5asmHwZ%2FPqczCARDOEnkViSe3MifvZ7ZPzAMYpgPksUJEDVgwDPlS1rLXdTAZvzbp2U0IimWn6qLJqOhXTj7NEBzOemdJXfcSq%2BCR%2FvpJhgyUWfM3Rxt9i4RbLJzGREk%2BYYmN83PovkhH2xO%2F2WW%2BsO%2BTfP9A%2B1Jd%2Bn%2Fy4SDAplqtN5Refgfm2YWbUqSHDoSXgsPEyTij5%2FAjPKhY0AucS%2BO5AVFhlYL%2Bj6hlqueMqol6uMfe8VoFcn856fmZQxQ4tnMLD0xMQGOqUBNp%2BUFaIRN3ZYfohf7vk01k1sa2mKFPXo4edhJqWXyzzK6uH4eRmycWMU8Lf4X8RwDRmOrPx2puqp0sAmIGSocYWpda%2BCHAgVEsNw3veEGAE0TzjGiuxEyfN7QX15F6cCehe9S06CLG%2FqkZtp0aFWyIVtR%2FuS8QcnPAgRYubkGpGreUX7D0uqnSsO8fHnKCMxw%2B%2FtlPZ%2FnPjqoy1V8PgLvipL0%2FRl&X-Amz-Signature=bfa99909da5653b2afbc02cc00b9a3608f377403dfcda3550982a464b60f657e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

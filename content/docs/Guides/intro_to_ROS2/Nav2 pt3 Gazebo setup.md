---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T10:08:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T10:08:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 153
toc: false
icon: ""
---

Gazebo is a simulation software suite. It can simulate many kinds of sensors such as Lidar, Depth sense cameras, IMU, and more.

Here is the official [link to their website](https://gazebosim.org/home) if you want to learn more

We are going to set up Gazebo simulation for our project

## Install

```bash
sudo apt install ros-$ROS2_DISTRO-ros-gz
```

### New nodes

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DVL2ES%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCH3hc9Xy%2BXKBK68IhO8B6186mshDyacCDxIvpjKrJHjAIgIQGzqGfb6Y2RwbYul6u4x2vs2T6RHPa7kXS879p4gzwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBtZevOgzP4jEYJbhCrcAzbtH4QjJ1Bf8%2BmiYjPxw%2FVZvz5t3%2ByvJWhlxIjRUmffxKVPVnXdTfaRky28GG3OSns%2F2ZxRgye5dqA2ezC1dgY4twjIY5CbWSdkZU4IbjAaCvYJnqxfBOBf4kTqZABgw2Rd%2BfnKK7aJrULbifOmtyta0kT0dSHQ02bTB1CikNbOouMJwypWnY98N2VfKW%2FyZ1C%2F07M1SABKpEJJTI8oXcjWncrGaWI98nsSaEUv4gxCpOOP%2BmvJVtRLQMIqnTxrWDMQ0n%2B1nycNAO4e7d%2B6WbD1OkGESOLQ70nl4joV8KrH4%2FPb9KuuVCgAAeWCEPD%2BXmfd5C6DC9XGHNleELKDbuHW3GzetVIfklG8uJttoJHzUMXZPQ%2B3fHSpvSwr19bPrcK8twKOJNLCt%2BCkWuNIa1NSZQ7R9HigH8l3jbEYEA55A1kl%2BJfG%2BZMlnL4KoSV6fKfqgCSWWgKSq3S%2BCWPweugSnLSgPtVBLh3Z33s1FWFHRrN6VXLKkdaXkD8fagKlVwedf2WGclqHaXvZ7sAHHiWXQ20TcRlk4D%2FEtFNUVNr6kvGFI%2Bp6O%2BFNU6xhwQcLmTKoqo0iEv%2FyB%2BN11mMdQdl05n9JOJ%2FY46PdlsojomhL4dD8tAyoCV%2FEoQKDMMDY%2FsQGOqUBK5fR86J4DQRVQyin8xMYtNyP18eebQyvgTgLS%2B2%2BCs903VUF2VyxSgy0Ytswt3gw0ZqXIJl%2FmnCFSeiPYiglDt7g%2FcbdsfLx4D6Ul464phr27X9PtGqyhbkUg4wwECcML3aUjK1k0q357j5qc%2B1BOfD6v5SpM%2FmuEYahdiClZF948GKKDjyb74Jm3J6hqTKIdzrq7pwAI1OyQjU1XF4hAL4%2BCAiY&X-Amz-Signature=89d37ec9f6213f5c9b4310c8fef8d21acc5c7ef2771704c46ec06e0159a7a6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

{{< /table >}}

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DVL2ES%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCH3hc9Xy%2BXKBK68IhO8B6186mshDyacCDxIvpjKrJHjAIgIQGzqGfb6Y2RwbYul6u4x2vs2T6RHPa7kXS879p4gzwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBtZevOgzP4jEYJbhCrcAzbtH4QjJ1Bf8%2BmiYjPxw%2FVZvz5t3%2ByvJWhlxIjRUmffxKVPVnXdTfaRky28GG3OSns%2F2ZxRgye5dqA2ezC1dgY4twjIY5CbWSdkZU4IbjAaCvYJnqxfBOBf4kTqZABgw2Rd%2BfnKK7aJrULbifOmtyta0kT0dSHQ02bTB1CikNbOouMJwypWnY98N2VfKW%2FyZ1C%2F07M1SABKpEJJTI8oXcjWncrGaWI98nsSaEUv4gxCpOOP%2BmvJVtRLQMIqnTxrWDMQ0n%2B1nycNAO4e7d%2B6WbD1OkGESOLQ70nl4joV8KrH4%2FPb9KuuVCgAAeWCEPD%2BXmfd5C6DC9XGHNleELKDbuHW3GzetVIfklG8uJttoJHzUMXZPQ%2B3fHSpvSwr19bPrcK8twKOJNLCt%2BCkWuNIa1NSZQ7R9HigH8l3jbEYEA55A1kl%2BJfG%2BZMlnL4KoSV6fKfqgCSWWgKSq3S%2BCWPweugSnLSgPtVBLh3Z33s1FWFHRrN6VXLKkdaXkD8fagKlVwedf2WGclqHaXvZ7sAHHiWXQ20TcRlk4D%2FEtFNUVNr6kvGFI%2Bp6O%2BFNU6xhwQcLmTKoqo0iEv%2FyB%2BN11mMdQdl05n9JOJ%2FY46PdlsojomhL4dD8tAyoCV%2FEoQKDMMDY%2FsQGOqUBK5fR86J4DQRVQyin8xMYtNyP18eebQyvgTgLS%2B2%2BCs903VUF2VyxSgy0Ytswt3gw0ZqXIJl%2FmnCFSeiPYiglDt7g%2FcbdsfLx4D6Ul464phr27X9PtGqyhbkUg4wwECcML3aUjK1k0q357j5qc%2B1BOfD6v5SpM%2FmuEYahdiClZF948GKKDjyb74Jm3J6hqTKIdzrq7pwAI1OyQjU1XF4hAL4%2BCAiY&X-Amz-Signature=e874dcd685db9f6a53303be6f65467083dbeed86b31ed890a532ca231e9cc958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DVL2ES%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCH3hc9Xy%2BXKBK68IhO8B6186mshDyacCDxIvpjKrJHjAIgIQGzqGfb6Y2RwbYul6u4x2vs2T6RHPa7kXS879p4gzwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBtZevOgzP4jEYJbhCrcAzbtH4QjJ1Bf8%2BmiYjPxw%2FVZvz5t3%2ByvJWhlxIjRUmffxKVPVnXdTfaRky28GG3OSns%2F2ZxRgye5dqA2ezC1dgY4twjIY5CbWSdkZU4IbjAaCvYJnqxfBOBf4kTqZABgw2Rd%2BfnKK7aJrULbifOmtyta0kT0dSHQ02bTB1CikNbOouMJwypWnY98N2VfKW%2FyZ1C%2F07M1SABKpEJJTI8oXcjWncrGaWI98nsSaEUv4gxCpOOP%2BmvJVtRLQMIqnTxrWDMQ0n%2B1nycNAO4e7d%2B6WbD1OkGESOLQ70nl4joV8KrH4%2FPb9KuuVCgAAeWCEPD%2BXmfd5C6DC9XGHNleELKDbuHW3GzetVIfklG8uJttoJHzUMXZPQ%2B3fHSpvSwr19bPrcK8twKOJNLCt%2BCkWuNIa1NSZQ7R9HigH8l3jbEYEA55A1kl%2BJfG%2BZMlnL4KoSV6fKfqgCSWWgKSq3S%2BCWPweugSnLSgPtVBLh3Z33s1FWFHRrN6VXLKkdaXkD8fagKlVwedf2WGclqHaXvZ7sAHHiWXQ20TcRlk4D%2FEtFNUVNr6kvGFI%2Bp6O%2BFNU6xhwQcLmTKoqo0iEv%2FyB%2BN11mMdQdl05n9JOJ%2FY46PdlsojomhL4dD8tAyoCV%2FEoQKDMMDY%2FsQGOqUBK5fR86J4DQRVQyin8xMYtNyP18eebQyvgTgLS%2B2%2BCs903VUF2VyxSgy0Ytswt3gw0ZqXIJl%2FmnCFSeiPYiglDt7g%2FcbdsfLx4D6Ul464phr27X9PtGqyhbkUg4wwECcML3aUjK1k0q357j5qc%2B1BOfD6v5SpM%2FmuEYahdiClZF948GKKDjyb74Jm3J6hqTKIdzrq7pwAI1OyQjU1XF4hAL4%2BCAiY&X-Amz-Signature=d5b000adf1a0e70991ad6e890d26817230d9a65fe31fc687b197c1624bd497b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DVL2ES%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCH3hc9Xy%2BXKBK68IhO8B6186mshDyacCDxIvpjKrJHjAIgIQGzqGfb6Y2RwbYul6u4x2vs2T6RHPa7kXS879p4gzwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBtZevOgzP4jEYJbhCrcAzbtH4QjJ1Bf8%2BmiYjPxw%2FVZvz5t3%2ByvJWhlxIjRUmffxKVPVnXdTfaRky28GG3OSns%2F2ZxRgye5dqA2ezC1dgY4twjIY5CbWSdkZU4IbjAaCvYJnqxfBOBf4kTqZABgw2Rd%2BfnKK7aJrULbifOmtyta0kT0dSHQ02bTB1CikNbOouMJwypWnY98N2VfKW%2FyZ1C%2F07M1SABKpEJJTI8oXcjWncrGaWI98nsSaEUv4gxCpOOP%2BmvJVtRLQMIqnTxrWDMQ0n%2B1nycNAO4e7d%2B6WbD1OkGESOLQ70nl4joV8KrH4%2FPb9KuuVCgAAeWCEPD%2BXmfd5C6DC9XGHNleELKDbuHW3GzetVIfklG8uJttoJHzUMXZPQ%2B3fHSpvSwr19bPrcK8twKOJNLCt%2BCkWuNIa1NSZQ7R9HigH8l3jbEYEA55A1kl%2BJfG%2BZMlnL4KoSV6fKfqgCSWWgKSq3S%2BCWPweugSnLSgPtVBLh3Z33s1FWFHRrN6VXLKkdaXkD8fagKlVwedf2WGclqHaXvZ7sAHHiWXQ20TcRlk4D%2FEtFNUVNr6kvGFI%2Bp6O%2BFNU6xhwQcLmTKoqo0iEv%2FyB%2BN11mMdQdl05n9JOJ%2FY46PdlsojomhL4dD8tAyoCV%2FEoQKDMMDY%2FsQGOqUBK5fR86J4DQRVQyin8xMYtNyP18eebQyvgTgLS%2B2%2BCs903VUF2VyxSgy0Ytswt3gw0ZqXIJl%2FmnCFSeiPYiglDt7g%2FcbdsfLx4D6Ul464phr27X9PtGqyhbkUg4wwECcML3aUjK1k0q357j5qc%2B1BOfD6v5SpM%2FmuEYahdiClZF948GKKDjyb74Jm3J6hqTKIdzrq7pwAI1OyQjU1XF4hAL4%2BCAiY&X-Amz-Signature=8cb2e3c53c9a5623173ade120d0d7a26a5ae59857779e1acc42ccb0c26218138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

paste this inside `bridge_config.yaml`. 

This file just describes what topics to _bridge_ between ROS and Gazebo

```yaml
---
- ros_topic_name: "/clock"
  gz_topic_name: "/clock"
  ros_type_name: "rosgraph_msgs/msg/Clock"
  gz_type_name: "gz.msgs.Clock"
  direction: GZ_TO_ROS

# Topic published by DiffDrive plugin
- ros_topic_name: "/odom"
  gz_topic_name: "/odom"
  ros_type_name: "nav_msgs/msg/Odometry"
  gz_type_name: "gz.msgs.Odometry"
  direction: GZ_TO_ROS

# Topic published by JointStatePublisher plugin
- ros_topic_name: "/joint_states"
  gz_topic_name: "/joint_states"
  ros_type_name: "sensor_msgs/msg/JointState"
  gz_type_name: "gz.msgs.Model"
  direction: GZ_TO_ROS

# Topic subscribed to by DiffDrive plugin
- ros_topic_name: "/cmd_vel"
  gz_topic_name: "/cmd_vel"
  ros_type_name: "geometry_msgs/msg/TwistStamped"
  gz_type_name: "gz.msgs.Twist"
  direction: ROS_TO_GZ

- ros_topic_name: "/tf"
  gz_topic_name: "/tf"
  ros_type_name: "tf2_msgs/msg/TFMessage"
  gz_type_name: "gz.msgs.Pose_V"
  direction: GZ_TO_ROS
```

## Updating `urdf`

To be able to drive the robot in Gazebo we need to add this plugin at the bottom of our `mbot_description.urdf` **right before the** **`</robot>`** **tag**.

This plugin does emulates most of what `my_node` did.

```xml

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>1.0</max_linear_acceleration>

      <!-- input -->
      <topic>/cmd_vel</topic>

      <!-- output -->
      <odom_topic>/odom</odom_topic>
      <tf_topic>/tf</tf_topic>

      <frame_id>odom</frame_id>
      <child_frame_id>base_link</child_frame_id>
    </plugin>

    <plugin
      filename="gz-sim-joint-state-publisher-system"
      name="gz::sim::systems::JointStatePublisher">
      <topic>joint_states</topic>
    </plugin>
  </gazebo>
```

We also need to simulate friction on the wheels or else the robot will not be able to move in the sim.

Add the friction tag in the wheel macro we made: 

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>

      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>

        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DE2QETX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDcuoYJ1ftmBvKXFEhC5UC4x6gEAXQ%2FDLhFPtd3KjjBsAiEAjNHwxUpmcKDPA5S7HJrGt6wXGPqRvKa2Kdo0RS2XEokq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHro1CpY8r37N3l%2FBSrcA%2FWcY9Sfaust9GBUtDvw0KXd9fGYdJnDhSF0PJDeEDKmg8BWLbaPNUvpeFiKi3vDegBXSkGpOypazcz9ElSg6o6IR33uswBJ8MdiRgUK6LgGgsgexPOwR8uXJ2c27ZG9QXWOih%2FGaNV4WB8aOrG3JgR6MZJzuFXtUE1c%2Bw9bi%2BrW0oj%2BERE%2BX1PLWN%2B7j8iMDwrnKM8G%2BZQZ%2B9xzpmrl45DNabDs40prN7egNcr92Iu9kEznIQnPOgoJetb%2FQpw3RcSpDPI71sULrupPmNrHKaSb%2FdqJrzxHw9tDeBbvEbplKjFh%2BE7Pv8%2FVszaJ6E39dKGkVvKPsxaGaPAyq5COxHKb3r8MMyRaQiTlTHN0RjEwSV2n1vOLZtvXDGEVqrkrVqOwmdTwBLe2GO1JZm%2Fj5N45qO6ZPfd7xpzIBiZAFaJ5e85rUROM%2FAYAu4tGQJnHt%2FRjk0dHs54nJt8dLvUYWn2l9leTqBLfGyLr7nHpP%2Bexq8im86YFR4nn%2Fb5wXgXpXpKrFti2Z%2BTpFl5pC2ZgrX4ItT36eXM1spAaagmkESOazjBhpCo0S1UInJvM8B0SJUxQrDDd7fd%2Fwyg%2BAZBeBkBwHP%2BbABTZc53VQNn15R7FAXTioMKA9pZf9%2B49MMHY%2FsQGOqUByG3pFttyuTmIeNLVpEQgdULRZb399BELOb%2FA3DlDapnDC4WYueQHlgWl3Iec5xHcKmXm7BkiWbdDsXEPD9nllws7Io3SZi%2BHuuzRWaCxH7bEu0InBJ%2FtG7D9VbmcgGUvc4kd6eJlSKIFXBTG%2FICBIO3cIoasf6eGJqrDeTgdsltZHY8A9a00bOlxTcPJqk%2F4XiVheJH23BEp7Zxse8Qhc4bJ%2F%2BDx&X-Amz-Signature=a4739a267d2755a16e1ee7d4b009cd161db107b256fbeb53ce30f724896e1073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DVL2ES%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCH3hc9Xy%2BXKBK68IhO8B6186mshDyacCDxIvpjKrJHjAIgIQGzqGfb6Y2RwbYul6u4x2vs2T6RHPa7kXS879p4gzwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBtZevOgzP4jEYJbhCrcAzbtH4QjJ1Bf8%2BmiYjPxw%2FVZvz5t3%2ByvJWhlxIjRUmffxKVPVnXdTfaRky28GG3OSns%2F2ZxRgye5dqA2ezC1dgY4twjIY5CbWSdkZU4IbjAaCvYJnqxfBOBf4kTqZABgw2Rd%2BfnKK7aJrULbifOmtyta0kT0dSHQ02bTB1CikNbOouMJwypWnY98N2VfKW%2FyZ1C%2F07M1SABKpEJJTI8oXcjWncrGaWI98nsSaEUv4gxCpOOP%2BmvJVtRLQMIqnTxrWDMQ0n%2B1nycNAO4e7d%2B6WbD1OkGESOLQ70nl4joV8KrH4%2FPb9KuuVCgAAeWCEPD%2BXmfd5C6DC9XGHNleELKDbuHW3GzetVIfklG8uJttoJHzUMXZPQ%2B3fHSpvSwr19bPrcK8twKOJNLCt%2BCkWuNIa1NSZQ7R9HigH8l3jbEYEA55A1kl%2BJfG%2BZMlnL4KoSV6fKfqgCSWWgKSq3S%2BCWPweugSnLSgPtVBLh3Z33s1FWFHRrN6VXLKkdaXkD8fagKlVwedf2WGclqHaXvZ7sAHHiWXQ20TcRlk4D%2FEtFNUVNr6kvGFI%2Bp6O%2BFNU6xhwQcLmTKoqo0iEv%2FyB%2BN11mMdQdl05n9JOJ%2FY46PdlsojomhL4dD8tAyoCV%2FEoQKDMMDY%2FsQGOqUBK5fR86J4DQRVQyin8xMYtNyP18eebQyvgTgLS%2B2%2BCs903VUF2VyxSgy0Ytswt3gw0ZqXIJl%2FmnCFSeiPYiglDt7g%2FcbdsfLx4D6Ul464phr27X9PtGqyhbkUg4wwECcML3aUjK1k0q357j5qc%2B1BOfD6v5SpM%2FmuEYahdiClZF948GKKDjyb74Jm3J6hqTKIdzrq7pwAI1OyQjU1XF4hAL4%2BCAiY&X-Amz-Signature=c6687537d475af7d6beed070fdba4f2e428e7ebb24e2e4ba6b3aa8cd8cba0ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DVL2ES%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCH3hc9Xy%2BXKBK68IhO8B6186mshDyacCDxIvpjKrJHjAIgIQGzqGfb6Y2RwbYul6u4x2vs2T6RHPa7kXS879p4gzwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBtZevOgzP4jEYJbhCrcAzbtH4QjJ1Bf8%2BmiYjPxw%2FVZvz5t3%2ByvJWhlxIjRUmffxKVPVnXdTfaRky28GG3OSns%2F2ZxRgye5dqA2ezC1dgY4twjIY5CbWSdkZU4IbjAaCvYJnqxfBOBf4kTqZABgw2Rd%2BfnKK7aJrULbifOmtyta0kT0dSHQ02bTB1CikNbOouMJwypWnY98N2VfKW%2FyZ1C%2F07M1SABKpEJJTI8oXcjWncrGaWI98nsSaEUv4gxCpOOP%2BmvJVtRLQMIqnTxrWDMQ0n%2B1nycNAO4e7d%2B6WbD1OkGESOLQ70nl4joV8KrH4%2FPb9KuuVCgAAeWCEPD%2BXmfd5C6DC9XGHNleELKDbuHW3GzetVIfklG8uJttoJHzUMXZPQ%2B3fHSpvSwr19bPrcK8twKOJNLCt%2BCkWuNIa1NSZQ7R9HigH8l3jbEYEA55A1kl%2BJfG%2BZMlnL4KoSV6fKfqgCSWWgKSq3S%2BCWPweugSnLSgPtVBLh3Z33s1FWFHRrN6VXLKkdaXkD8fagKlVwedf2WGclqHaXvZ7sAHHiWXQ20TcRlk4D%2FEtFNUVNr6kvGFI%2Bp6O%2BFNU6xhwQcLmTKoqo0iEv%2FyB%2BN11mMdQdl05n9JOJ%2FY46PdlsojomhL4dD8tAyoCV%2FEoQKDMMDY%2FsQGOqUBK5fR86J4DQRVQyin8xMYtNyP18eebQyvgTgLS%2B2%2BCs903VUF2VyxSgy0Ytswt3gw0ZqXIJl%2FmnCFSeiPYiglDt7g%2FcbdsfLx4D6Ul464phr27X9PtGqyhbkUg4wwECcML3aUjK1k0q357j5qc%2B1BOfD6v5SpM%2FmuEYahdiClZF948GKKDjyb74Jm3J6hqTKIdzrq7pwAI1OyQjU1XF4hAL4%2BCAiY&X-Amz-Signature=56a99afc12fc0fc13608aecea76294a7c5e932aca4b7921a0b4bf011050cc36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DVL2ES%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCH3hc9Xy%2BXKBK68IhO8B6186mshDyacCDxIvpjKrJHjAIgIQGzqGfb6Y2RwbYul6u4x2vs2T6RHPa7kXS879p4gzwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBtZevOgzP4jEYJbhCrcAzbtH4QjJ1Bf8%2BmiYjPxw%2FVZvz5t3%2ByvJWhlxIjRUmffxKVPVnXdTfaRky28GG3OSns%2F2ZxRgye5dqA2ezC1dgY4twjIY5CbWSdkZU4IbjAaCvYJnqxfBOBf4kTqZABgw2Rd%2BfnKK7aJrULbifOmtyta0kT0dSHQ02bTB1CikNbOouMJwypWnY98N2VfKW%2FyZ1C%2F07M1SABKpEJJTI8oXcjWncrGaWI98nsSaEUv4gxCpOOP%2BmvJVtRLQMIqnTxrWDMQ0n%2B1nycNAO4e7d%2B6WbD1OkGESOLQ70nl4joV8KrH4%2FPb9KuuVCgAAeWCEPD%2BXmfd5C6DC9XGHNleELKDbuHW3GzetVIfklG8uJttoJHzUMXZPQ%2B3fHSpvSwr19bPrcK8twKOJNLCt%2BCkWuNIa1NSZQ7R9HigH8l3jbEYEA55A1kl%2BJfG%2BZMlnL4KoSV6fKfqgCSWWgKSq3S%2BCWPweugSnLSgPtVBLh3Z33s1FWFHRrN6VXLKkdaXkD8fagKlVwedf2WGclqHaXvZ7sAHHiWXQ20TcRlk4D%2FEtFNUVNr6kvGFI%2Bp6O%2BFNU6xhwQcLmTKoqo0iEv%2FyB%2BN11mMdQdl05n9JOJ%2FY46PdlsojomhL4dD8tAyoCV%2FEoQKDMMDY%2FsQGOqUBK5fR86J4DQRVQyin8xMYtNyP18eebQyvgTgLS%2B2%2BCs903VUF2VyxSgy0Ytswt3gw0ZqXIJl%2FmnCFSeiPYiglDt7g%2FcbdsfLx4D6Ul464phr27X9PtGqyhbkUg4wwECcML3aUjK1k0q357j5qc%2B1BOfD6v5SpM%2FmuEYahdiClZF948GKKDjyb74Jm3J6hqTKIdzrq7pwAI1OyQjU1XF4hAL4%2BCAiY&X-Amz-Signature=45b7f5d87450dbf12502473708ab023b2ee9646f93ffb3646bc01c80d1a5efb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DVL2ES%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCH3hc9Xy%2BXKBK68IhO8B6186mshDyacCDxIvpjKrJHjAIgIQGzqGfb6Y2RwbYul6u4x2vs2T6RHPa7kXS879p4gzwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBtZevOgzP4jEYJbhCrcAzbtH4QjJ1Bf8%2BmiYjPxw%2FVZvz5t3%2ByvJWhlxIjRUmffxKVPVnXdTfaRky28GG3OSns%2F2ZxRgye5dqA2ezC1dgY4twjIY5CbWSdkZU4IbjAaCvYJnqxfBOBf4kTqZABgw2Rd%2BfnKK7aJrULbifOmtyta0kT0dSHQ02bTB1CikNbOouMJwypWnY98N2VfKW%2FyZ1C%2F07M1SABKpEJJTI8oXcjWncrGaWI98nsSaEUv4gxCpOOP%2BmvJVtRLQMIqnTxrWDMQ0n%2B1nycNAO4e7d%2B6WbD1OkGESOLQ70nl4joV8KrH4%2FPb9KuuVCgAAeWCEPD%2BXmfd5C6DC9XGHNleELKDbuHW3GzetVIfklG8uJttoJHzUMXZPQ%2B3fHSpvSwr19bPrcK8twKOJNLCt%2BCkWuNIa1NSZQ7R9HigH8l3jbEYEA55A1kl%2BJfG%2BZMlnL4KoSV6fKfqgCSWWgKSq3S%2BCWPweugSnLSgPtVBLh3Z33s1FWFHRrN6VXLKkdaXkD8fagKlVwedf2WGclqHaXvZ7sAHHiWXQ20TcRlk4D%2FEtFNUVNr6kvGFI%2Bp6O%2BFNU6xhwQcLmTKoqo0iEv%2FyB%2BN11mMdQdl05n9JOJ%2FY46PdlsojomhL4dD8tAyoCV%2FEoQKDMMDY%2FsQGOqUBK5fR86J4DQRVQyin8xMYtNyP18eebQyvgTgLS%2B2%2BCs903VUF2VyxSgy0Ytswt3gw0ZqXIJl%2FmnCFSeiPYiglDt7g%2FcbdsfLx4D6Ul464phr27X9PtGqyhbkUg4wwECcML3aUjK1k0q357j5qc%2B1BOfD6v5SpM%2FmuEYahdiClZF948GKKDjyb74Jm3J6hqTKIdzrq7pwAI1OyQjU1XF4hAL4%2BCAiY&X-Amz-Signature=1769f2ce69a3f93ab338c688c659a4391bd1c4636e98b7a02ac7a24769e8e59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    
    robot_state_publisher_node = Node(
    ...
```

We also must add the `use_sim_time` parameter to `robot_state_publisher` because we are using a simulator 

```python
    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])},
        {'use_sim_time': LaunchConfiguration('use_sim_time')}]
    )
```

Here are the nodes required to start Gazebo

```python
    gz_server = GzServer(
        world_sdf_file=world_path,
        container_name='ros_gz_container',
        create_own_container='True',
        use_composition='True',
    )
    ros_gz_bridge = RosGzBridge(
        bridge_name='ros_gz_bridge',
        config_file=bridge_config_path,
        container_name='ros_gz_container',
        create_own_container='False',
        use_composition='True',
    )
    ros_gz_sim_share = get_package_share_directory('ros_gz_sim')
    gz_spawn_model_launch_source = os.path.join(ros_gz_sim_share, "launch", "gz_spawn_model.launch.py")
    spawn_entity = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(gz_spawn_model_launch_source),
        launch_arguments={
            'world': 'my_world',
            'topic': '/robot_description',
            'entity_name': 'mbot',
            'z': '0.65',
        }.items(),
    )
```

At the bottem remember to comment out `my_node` and swap it out for the Gazebo nodes

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
        
        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
    ])
```

Remember to build because we added `bridge_config.yaml` and `my_world.sdf` to the package

```bash
colcon build --symlink-install
```

To run add the new argument `use_sim_time:=True` to correctly use Gazebo

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

{{% alert context="warning" %}}

# Always use `use_sim_time:=True` flag when using Gazebo

{{% /alert %}}

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DVL2ES%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCH3hc9Xy%2BXKBK68IhO8B6186mshDyacCDxIvpjKrJHjAIgIQGzqGfb6Y2RwbYul6u4x2vs2T6RHPa7kXS879p4gzwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBtZevOgzP4jEYJbhCrcAzbtH4QjJ1Bf8%2BmiYjPxw%2FVZvz5t3%2ByvJWhlxIjRUmffxKVPVnXdTfaRky28GG3OSns%2F2ZxRgye5dqA2ezC1dgY4twjIY5CbWSdkZU4IbjAaCvYJnqxfBOBf4kTqZABgw2Rd%2BfnKK7aJrULbifOmtyta0kT0dSHQ02bTB1CikNbOouMJwypWnY98N2VfKW%2FyZ1C%2F07M1SABKpEJJTI8oXcjWncrGaWI98nsSaEUv4gxCpOOP%2BmvJVtRLQMIqnTxrWDMQ0n%2B1nycNAO4e7d%2B6WbD1OkGESOLQ70nl4joV8KrH4%2FPb9KuuVCgAAeWCEPD%2BXmfd5C6DC9XGHNleELKDbuHW3GzetVIfklG8uJttoJHzUMXZPQ%2B3fHSpvSwr19bPrcK8twKOJNLCt%2BCkWuNIa1NSZQ7R9HigH8l3jbEYEA55A1kl%2BJfG%2BZMlnL4KoSV6fKfqgCSWWgKSq3S%2BCWPweugSnLSgPtVBLh3Z33s1FWFHRrN6VXLKkdaXkD8fagKlVwedf2WGclqHaXvZ7sAHHiWXQ20TcRlk4D%2FEtFNUVNr6kvGFI%2Bp6O%2BFNU6xhwQcLmTKoqo0iEv%2FyB%2BN11mMdQdl05n9JOJ%2FY46PdlsojomhL4dD8tAyoCV%2FEoQKDMMDY%2FsQGOqUBK5fR86J4DQRVQyin8xMYtNyP18eebQyvgTgLS%2B2%2BCs903VUF2VyxSgy0Ytswt3gw0ZqXIJl%2FmnCFSeiPYiglDt7g%2FcbdsfLx4D6Ul464phr27X9PtGqyhbkUg4wwECcML3aUjK1k0q357j5qc%2B1BOfD6v5SpM%2FmuEYahdiClZF948GKKDjyb74Jm3J6hqTKIdzrq7pwAI1OyQjU1XF4hAL4%2BCAiY&X-Amz-Signature=1a394864b2b8fe73e8403e1489a6cb260c075c4287f7269d237302ad5606b7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DVL2ES%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCH3hc9Xy%2BXKBK68IhO8B6186mshDyacCDxIvpjKrJHjAIgIQGzqGfb6Y2RwbYul6u4x2vs2T6RHPa7kXS879p4gzwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBtZevOgzP4jEYJbhCrcAzbtH4QjJ1Bf8%2BmiYjPxw%2FVZvz5t3%2ByvJWhlxIjRUmffxKVPVnXdTfaRky28GG3OSns%2F2ZxRgye5dqA2ezC1dgY4twjIY5CbWSdkZU4IbjAaCvYJnqxfBOBf4kTqZABgw2Rd%2BfnKK7aJrULbifOmtyta0kT0dSHQ02bTB1CikNbOouMJwypWnY98N2VfKW%2FyZ1C%2F07M1SABKpEJJTI8oXcjWncrGaWI98nsSaEUv4gxCpOOP%2BmvJVtRLQMIqnTxrWDMQ0n%2B1nycNAO4e7d%2B6WbD1OkGESOLQ70nl4joV8KrH4%2FPb9KuuVCgAAeWCEPD%2BXmfd5C6DC9XGHNleELKDbuHW3GzetVIfklG8uJttoJHzUMXZPQ%2B3fHSpvSwr19bPrcK8twKOJNLCt%2BCkWuNIa1NSZQ7R9HigH8l3jbEYEA55A1kl%2BJfG%2BZMlnL4KoSV6fKfqgCSWWgKSq3S%2BCWPweugSnLSgPtVBLh3Z33s1FWFHRrN6VXLKkdaXkD8fagKlVwedf2WGclqHaXvZ7sAHHiWXQ20TcRlk4D%2FEtFNUVNr6kvGFI%2Bp6O%2BFNU6xhwQcLmTKoqo0iEv%2FyB%2BN11mMdQdl05n9JOJ%2FY46PdlsojomhL4dD8tAyoCV%2FEoQKDMMDY%2FsQGOqUBK5fR86J4DQRVQyin8xMYtNyP18eebQyvgTgLS%2B2%2BCs903VUF2VyxSgy0Ytswt3gw0ZqXIJl%2FmnCFSeiPYiglDt7g%2FcbdsfLx4D6Ul464phr27X9PtGqyhbkUg4wwECcML3aUjK1k0q357j5qc%2B1BOfD6v5SpM%2FmuEYahdiClZF948GKKDjyb74Jm3J6hqTKIdzrq7pwAI1OyQjU1XF4hAL4%2BCAiY&X-Amz-Signature=0a271c73368c6dcfd8ac2ece4a289518a79c620dc66311bce0b8da69d550fe55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>

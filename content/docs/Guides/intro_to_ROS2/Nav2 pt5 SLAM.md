---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

</details>



ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=b460bed0c025b26513cbbd7cf95ae4b44e5096a39e95bc7ed520a108ed0684e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=595ce184a7eb0d379e38989d8ced5c21f62a60f4f31489b00768d40e0eff7bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=4649a4f8146ae57989972b2e541a7f0699550ea9317467988f3550e6e47592fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=8bcd86a62345090827639f9c40702ce9e88783661466eb541c7c5042dff65227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=856dcf78e302f22a4aa52cf86155c89818139bea300a418864e4207af8ce08f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=e401d4c8a20d19050ace18a6787ec6fd68555774b94fb358f3b4bb09fdde578e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=fd4f2ef876185c2f0aa23aa00afbcaf0822e5bf891c8b3ef9fe609e1d6ded702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=97f46ddba855378c47a1d1a650aa299701de9b12876eab31ef12034befbecac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=976ce65ae27ea8500354111762aeb4855602946e5d1de56ce972fa675bdb36bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
        }.items()
    )
    
    
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=7a612f3f38ae62614ab1ef268c17f4ae02601e7d28967e600ec641349821b889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=c57dfdd921053a7cdca69a2fba3f007529885d30f9eba24b1dfa06cf02a192b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=245a6ba1bc0c52dad8bccf6249611ea0e68421ab1205c57bf0b497f4939f2425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=fde68002f8b1e11cea17ae11217faa44ad57fad0ad5553693cf5448d3bf8ab9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66PM7Q%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xAsLOQmNEkSIYNMfpeopw7ghNYBnYnSohGOQEr8yrAiAub%2FUB3IqtOZUTYtPNowIohM6VA2Y9PMHrRNy%2F7cDB4Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMut%2BrPK7QooOxkWFKtwDVtlJ5bz1zqJNAbNiGOa5hda13BmFcn441Ik3b4LW50EB4p3%2BoCe6QC5sR5nT2OSIFEOxhgpDcyB6C%2BibG86bIK5Xd9s7oOvc%2Bp3aQbh5K3Dno1TjPGJ2LB%2BSHTEvrv6eK%2BpmZNhZEmVsxAnxMwGhRzGMcZAcmxSD%2BN%2FX4%2BTL4B4U2R%2B4fGSj3G6JBZrGOcR8F0cSMar11VpqVzlEr59DcMmx9SPwQEL7b7eCC6RxMpQwpS5afW2tXZul3E1vqPoOvNIDQOsFyt1ywl3lrJAF8pz2f8dQ4qQaJsD9e%2FPm47PN1CqUeXDl0yFiwfeXCB6sb1jqQgLmhN81kHItOm107N40lihdMf9D%2FT5FdQldnTo37kgVeCdvLdmfIgtJ1BPAb%2FRndd5xiXoR8y%2FluPOaT3lYaZaeqz5nA%2F%2BRWhWYzQXq62xsh1ySgovKd4VUNgn4JegEjXlkL7IXUO0jt2dwCDzD5Ug%2Bxi0q3HkiS4XMW1foC7pRrjEinleVMg5ud%2BHoMucYOZH5XVdLcPTNVfnCYL0cvGpxQnDm8gMaUJ%2Fy2UDc8jtCDdyOc6bdTACFLvNVjwodd2GDZHH39e3Ely4PNca4WwPL8oaq1%2BhHAGJrcAHE7nm3l3XzOlVKCLQw3I6kxQY6pgFb3TDCPujiTe67eW7VKKwSrLkmMIM8812HzK46vH3Sw3sDWXjKtAM2kzVIrajF5aY%2BIFhJ%2B4XnlIiFxaVaXE%2B%2BYzl29d9SZIdKsKCaJoSFHUs7OxODK7wOysKyc3vLWqWwHLSuB5nk%2BElxDmvT3h3TNnBy3jOmTdMYmnPRZCcKSpReH6zxHCCCKPocoGFp%2BndD1jOV0%2BZ3oJcHXWab14wloIiqcsm0&X-Amz-Signature=e36f706f76b10d14e37f0934d7a635c8e4a79d2efe6b304ecb09a0c81e93d277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

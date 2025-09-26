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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=a1b19e46fd294cef734ca0992304ea191118ca130da4bc419b8c5afc3c326633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=d081a49470339200ad620d7fb59504dce03987b0c744484e3c8791ed847783a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=46cbc48fd6ec9e52f75e60878da6e573e616adf6bb06f76e3d74f2ec545d1f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=4714527d637eccf0bc8bedade84a001e7eee7338901e6a7ffcf20055067e257d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=6886213b31c845054c16209eb343064d4fd2b0b28670f2b0fc3b06ce994b1eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=96ff8df4288fc203175c91a237f3531549658e3694e0e025a32cc501874c9106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=d12168d505c4ac322a48d2758cf0eeb9f196c5562726012a5180bcadc7c44c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=98b5f8a53a7d6f0fec2ec12b7e8ccc838b04e58d64f19a0df833108cf6cd817f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=0c3ac3dd6ec3eb189cd00253608ac3b92dd23dcebe6d1e6c445a37ee32e4432d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=fbd206a7e5fb55d839c58245bd3b63d0e32c23f91272391621c345e53ae506bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=bb345234f54a68b185f1649f87831101e961143f62d96e38b080871329445c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=42af93ced92e9726731aa53e755218a79f9d0697b535790e43952fc43e3d942d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=0c9dcb094433a8fad09bad55cf7953a24daf85747451df03b05ca5ad43159219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3SZBSD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKk6sq0kR5B%2BD8ZDBO5%2ByVTs76%2BZDiEP2ylJN6FY3xeQIhAOEetuSfm7wA0FZd8OINimTUOc9Drl%2FlmjPyFRl0z06KKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrcaAdfn5anyz31Ukq3AOV2bobFizKKNANbEH2NWHqnWgjc33ZuipdIjc4LAbT1X%2B0iomPjxXWuittahwkOgBRLPvoiSdtLLptmh6u%2FYwWsQ%2FU5ObNJcOgM%2BKB2t8PUPaK0q%2BfL4PEcWHLuZ5X%2BhwRuC1SYTF%2BErMhHuiJUq0w2WfnGa1ujvKpPBEqFidV%2BCedFv50u82E8gAv4nKiOltAZf%2BLEk7PWEE%2FgL2dN7chgner0IRFJ9CLErebUrdmOc4DRIsNzyc8OlRwJzyrvNV6wJX41t4Mp9SXPczErJG8iF6UaQiD7Zo8XsU9ahbOE5yVxAxBP%2FU16Y5a%2FIsmVpcyQ6Mct8yBgJwozJbSiWi0YkYzfKnLIaUXWxVKF9mFm%2FKVoPSxBF0zZgjcN6xH35oS1bRXYlHIjlEDaattV5%2FYQHxqEzPED0iIkyrb16jSp17DFFHs3OTo90usWyXS%2F9%2B%2B4qUU0syWZNju4D9DIdL1%2ByDk3Oy5PTItzqfOvwdMpcbUHIwTBYiqNSQlnjOST7%2FG%2BkkPV2F%2Fhri9aHEEmpPXRITDW36tN7KZ0Yf6uM5wA1EbZDvLzUuxn88%2F8ftVG3kWfVgPmL9YIsJq%2BLmtG%2FFfb8EkM%2B4iKyTzBubGgpCAGGR%2FaAbiPKbU85U9BjCYqNfGBjqkASZbXePIR5LcqiGhog7Lc1KNZXgzjJaxpZH1tkAJy6MUhPq%2BNAxiMclGnOchkr5%2Fzjah033xEPuL6e2hym6%2BYwTigUDLdpZZS663msg5Z14N6qFhPsleQBkYMSjeWfOEfp%2FCEuYCo%2BVU%2BTXslyBqGIlBJdUrQYCZUafPfyXkW2T00dEdbOY6NPZI7%2FlqiyXMWug3f7mVvCi9%2BMSEU%2FPq6t%2FRNrj2&X-Amz-Signature=0d181a96bdc8edca3eb2576abc46fadca2a69950192fd6fef36c6161359610b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

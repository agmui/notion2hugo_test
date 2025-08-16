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
      <summary>What is slam?</summary>
      TODO:
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=498073282f894e1fe028a794b93145f83b9f36b0498b53de0569968634fb55d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=7e7e265455d08c16a75279a6068477c01e6cc7f4374625bb3533bed965786661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=7d702873d178a3cdddef7e401e2fa9b27f4c24802105fddc610e094fd7ba3aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=0767677abd96309c31566ded48871c75ce4124153951406fb11ef814bbed36de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=d118082d1b1d9b03a5020825e55da07acd49ede6926918efbfa9c2fc1ab51006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=e0d834dbf004c50a085a9270a64ad30521b21aa09dbdaea5040dd88be9879292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=2e9e5e0fae478044124d78792009fb8a7f042fb45a0dd2d660ceb9a2bdd07d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=f915ddbe38835b112fe08b67d1c22147c8bc5fbe8907fbef557e703bf8af33ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=db9c2208c47e92959d15389f99bb6e9a9a6c0b474d823735e93a45bdbb20f887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=7c8d030f5259f8aa3d87ed227f6164e7a3dee927af0f8be5dc137b76d815ccc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=4ae2761afc94bde1e7c9a118b41fa5bf7664b129d5329f44908d396299520170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=1ce0799c4d37d6f0d1cfb4f99108fd0ecd385b024c75919444a1567ed8b626c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=152c34f540cbcf2a5fa2fd25a019ad71eac9fd0f941543a854a89f742e64aeeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBQY3ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC3yB%2BxYw3sJyLEAoKtGbebWqJ18fnelWR35iCoKaOnZwIgGc1ARsB8dH8G6s9MFUCJLfBDJ5t7sG7ryXyjiHeyx9Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFB4JMzGn0M9pOJ7ryrcA2sVCPtf0%2FqUS98t6ECCUZJHLloW2iWNBsm0yPMuA3Ns16ue9Vu6Pwhj1Hkrlhqy3XPTMiIcs9Ebp2ytG1ZYirFcGAnxZg71RtSooXajyGp9BtJ6vNqZdWBvCbsjNj3Txz3hSwnbhfVsjlCRzb2zKehhxXsUoGZ2a2Iqkajld8ew%2FP8X%2B0QaB%2BmbvOz19Q6uce%2B3slwqx6uU09xlzs7wYIlSubj%2FmYacdA%2B%2BQrQgaGuX7mdQddYt8UWlXYj92XpUsCs4Hzsm3C%2BB9CPb%2Fnxp6ngRvQsdQrWRiwc5eVbnOIDgsvyERPLjxqQseWihp55Gw0e7yYC%2BsGDiAe%2BIyHSup7JYQ7pqDKx8abcwAdz4gsL5TFJeE0cGAvNXOuuziILL1ktYQTF5ODb4zlL9hScmvxAhlrNb8aNO7OeabyAjrF%2Bah8qf5N6QRVLVU%2FAcCbz0JosYbRTW7MsOywrtFZrfX2E4wtUqAvwlTVFk7393guXYr2uuaWqimWiYG9kg1v%2FkEJk%2FFnfp5BzyW%2FK6Z0A1X9%2FxVU%2BCUqvaqrJ1DUQJ49LMnbnZiw0luRhOWQv31rDF7%2FoNWSZqLY48LqRFL%2Fee4OHcW98KyJ38CPOdZ3lk4HsAbbe%2BVb0yPnlsM65hMIX4gMUGOqUBLPEgb0x%2Fr0l7D45R6P878lmZEwMVMNGrL4IU0b51BFrBo690atUuDD3rbzB5rtRaUN8li1o2ZcXyJf9uH6t7oZTPS5SMp%2FJFPmedVAAsARXcHpz71xPo6E5%2Bicim8PIoWtt2sjZWjw6NVejO33nsjKlULS2NlxAg%2FD5QpxtLznm%2BOUZFPGknyMFDRvH9wmmNOCAm0dkZVo6hfq1LYZxQnUf6gCIY&X-Amz-Signature=9c209bbc898f1ac5d55beb38cc3b7357f494edb835475456ad691532284ba3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

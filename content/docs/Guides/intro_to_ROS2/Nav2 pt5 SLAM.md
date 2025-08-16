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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=358a206e55667f54defdda678963fb251071cf62b472e9eef98a9dea5f4f44b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=687948b0fd4fd71684fee646cf4d9d975a6613282607d3393b2d2020d13e340a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=fbe4b627c747b66de620229a5a4e55e806a771e48b9c7e1a25268484c6044d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=9f4ab23de051fba278dbbf2034f99865460f1ff335c6ba5dbc6b11ebcdb8425e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=1dd1ab22ddb987e9479071743e52acdfb1bc173ce494e9a86c5fa0ee5ca6f0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=86407cee17bac81a8eb8a32accabe4b6c451ca92da0956d764eb7736735e16d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=7da7927b996719a5701bf737560a77da64b71de95381f3aa8dfd68d5e95d44d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=38d215af7803f90427e5acd4ce55c0dc4604d077bdd4c0e211567ba7cfacb848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=baf0fc8b19e40bd6e8ae21ce4271e66dc31c943f51d25ef44f44c0da188e7e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=df622e3fc054518a9c1059c003c3b339c4decea0c97a410b796c3e56543f943a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=f091f8148283ff59c17480d9f4184537d36ac2242c8c2b0a1c94317c8da4c78c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=99a3271688f9924a49b9c37e7af3e8dd25f13053fec56ef9baa8da14a56004b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=31554991701f7c0f76fce78d9131b57f4350e6298b0c195e3e9c91bb365cc09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE5B73F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICkTXObQraxWnUGqr1xm%2FLQzH%2FY1auNFDJPs%2FWTNXAunAiEAu4XbYLl%2FDakvq4%2B8dwizvEW8ezPelLG94z5OTA9PW6sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN11Lhqtvs%2BtZN%2BmyyrcA%2FGj1aNqTBIiQa35FpgU1Gd%2B7Rl9EhrrTyTcXkl778T7myn22Wizs5YvEuB5yE7KS7AE2pWapx0K%2BD9kQddKJaYBIJVHH9apl7iQi1mOiciL%2B2HPGEyxcDD7cS4sco1OFbBl%2BT5YrkbMHiIElHKTDp5n7sU5eSAJ4lGmIdsTNbBJvKllH1DofDX%2BP9tOG%2FdVFp9aN21BawGBZ0Y3DV9k5p1sRhJi%2Fiv9AsMkDiRhtectu4NjB6nZ7OhqKwwgqxoClv4rFi3fnDZqVaGTOeGdbjwCtBqFyZR3o3HCfAFKtOnFO4Br7aC3X3lIg7UGCvRzIujc3931rda5Ri1UtZmMVbk8MokEqugMS8O0VngWBpvxJHabg8W6FWN%2F89pCYUoBr5zD6AGnfdgNzJQxmKjE6s9adgtR92WpBM8L8r7xyyeqo0HnJaoF5k6cUj6djyYRSOlk3dMvEI5EK4tVmjvH7U%2BSwVQKcbPl5Jipiw%2BUXzBiZiQ%2B0VisxQwW9HKVsW9zrGFHYRIH%2FFNIHkJGhBmUw8kl7IMl68enjdtNJiyAfemgSY2VSv8TL8VGkw9e5B%2BXpykSX556NqCMmW%2FfbL5SdC7BjVgUSdFsgf52rcKADUKmfyLacQB2CNJoktexMJn4gMUGOqUBSi3XtF1bXNmaPCGpWbE%2FeK0rbpf%2BZZLyCBM9KNy4I12W5PHH66JmPIGMjRfmXZNatLb4%2BwPPkPKzWU0ttJANac%2F0NrPOKReBsKRmozC5C0EEuOFYDqMzfgkot%2Fn0cHWSeBHFwcEkc3HdCJnRuh8NUSqwxZmQQNTPzv5EzYJN2Zo85nDWYweKAIbe6kC%2BZ9h9QYkztt77B5%2BWO14QgJZ77GJUDH35&X-Amz-Signature=115b4e55fd9181281fc90626f88bae288fbd360156dd1f284048989be89a72be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

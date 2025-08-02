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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=4caf871fb26f77d5d668de0dd4edcf3f3ea14ddfff7321f9b222bdc7ba02fac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=55f48711cdefec54e137f8a46c8c717f7a703048944ac005d294fb5e0a28c689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=e7557dfbe384135a81eba6a8a090a880145a9b88b253184f1da65596e66c083d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=7225acd35c76ec4ebf6fe7c98a7009cdda13a53cd6edfaaf2d22e1df29224b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=e6aff703783e32121319fc404e9dd41108b09b8a5a6234c35d4a22be1fbcf5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=889fe23c19d4bb799296692cd2bf43a96c4041d8456defe26557c8a03b3a0f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=7857d91e18564f91d55e316480a020ace6e04bf48878ccb6d9ffdda4ee39aa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=31cce8c17faedae227d155c79684fa64adf0f120c1907feaac2058f2fc4e6f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=2ee627282d8b7b81b03a5ac163272503d8bdda91dfbe43e28e0f1cfe79fe35db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=796090099c28b0b3a5f2aafd9c8e8ed7bd61119091c7577b80b7c7565408a031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=26371cf2364717aeaa2f307268d407b27105fe34eafb7b850b09bc3a3810a15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=22eece7d166c10f62740288e1ffa98c31492773848ccdd3178c367c4ae4e6c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=2053129b09f2c7fa858730c571ca2905916f564105526187cf29728eb4d69aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGVZEN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBSDRm2t%2FUc5Sq%2BhswQj95%2FfkRVV9lJGPKz0BD5W7Y4AiEAxca8putsTcTlpVeDx%2BeqdMR1%2BVJgQ%2BKfsUgN1LnASJQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMryPSAaokHLODxuXSrcA7KYBkTeFLUB0rAHLuwjmx0dLWA%2BUWT%2FJ%2Fm1hgWBh5wIqtCo9KyINZmqWsZgOCsDAidAJuu8jy6q1z0NEkjNUaJIYgjMcrQQBJheI3YnlRA%2F7K%2Fq%2F7bUzKoVEFxis43fQotca6UVVNm%2BF1kFjjGl6baRoL5Y%2F9%2BqitcL7KQbFO8hUMDgCfbIQ8E9Mjswl5z8MJEEEJ2Nsg8ZDQwJRhJbStmaLhrnTyG05%2FPfLJHZL1YbaovNQmgv8OIBFj2LgUtcNnxxXpFs2TaAd2%2BWi5MA1l1eCr26AxL5GVoBiLROQutfIJhc7YL95RW8v7UR%2F8RMB7I9%2FulyRr8G8TWqFMXHpeDK1KbeI%2BLS93IlcQCOEvGWXzEilMnz4stCwpfvuvUFyOqnBuo%2FDGDDaz0DVhkhTlY0m7fL%2BTor2%2FnapUT5rpM1J%2FFEnIEo8o5i43Kw9mpT57PZ8NY5IPMQxP%2Bj6sKvwYwDv7uXSxtqQisXFH0Adp7jjOaRRNVmm6Z3e7TcY%2Fzu9gFknSND8JTAEtgeVvXyLKJHZNp%2BCqK1%2Bq3RIBTz0Rb3UXEEqvFg%2ByqYfc%2B%2FUZ8LFOKDd%2BLi5HPmgb7NlKixdFLj0E7tx9w1MgtnECnHJbtiNi0eWPgSvnhlTZ%2FSMI%2BOuMQGOqUBdxZiuXY%2FUKkFatAfD%2FJL%2F3R3JR1V%2FjZX9QJaReb4ttR%2BD486ACUq%2F3Tc71gU%2B7N4nzNJ3WzrmmhlptwWeAo3tI7V7vbH5LP1LoNyGudpMuJAanDG5gi4EQU8cCcI8%2BvmRqHthCkRBSLSwvFvXQhryrACZ2RCazVykIXdBv5en5Ky%2FbYgiBm8S450B8caAZUukhZO4VbVpARKMez%2Ff8Gia0V%2FKbTD&X-Amz-Signature=86cc0a0daa02a4e58ed59d15999c9975bdb0bd51fb8c512a486f82d941d6ae89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=2a6b7663a770df0ad2888a31b62a84e8bb49feee7a35074d75c336616ae77a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=0026504bd857b1080bc29d7ceb8290e64f5c5bf6e0f6c1ac7fc103aa8e8806e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=5cc5fa2c787f77c9787d8371f25ae95ef04d0a2f9fe623c528d533fbdb610bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=b0e9458742261b0361c16bb3f1cb3790ecee6ad96e9822e08ffe72edd07415f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=6d41a248c2c2c4e62915797bb35e972c2775878a4801449f8fb11abfb8384443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=e333c531e24e5355321080617dfbefb6be4c1b5eac97ea08775de50ffad2ed3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=2e541e55b0f48be01c6103cfde63482cbb60788fb837db988b086c4436245ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=f1d5a67867f6e0ba12492a2d182667f2c36aa0a004dfa3e1f8b60cb399ca213e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=f719795632796cb3b246c85dae6eca0644b9c9505b691583a092ba674e1fc87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=fb7b153cc016267cc53367883014d7796f2208822c72f232db6b07bd205c89e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=f2f107f78825df3a5e237b46656ed7f47bf2f6f8d4c836dc58385d15bda66cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=b98d117f32d851cbd639698971536e89784b2933955721431bf33fc615b43f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=b890bc2e39b6165766db0f32c9c75dd2c9235c7a1b5c9b019e22fe2634f66055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKP3MZI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCMSGcxAmtu%2BoU%2BxcXJKNkp4VXcOxl1gH0znIYQcNohjgIgGOZoFHYU7UsoqdqVc%2BpRf7sB%2FtEWCRyrvwXDc4lB2Wsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGWKku5BXq8%2F%2FuOF%2BCrcAz4BmxaaLoCQusZ3tZ0jLTtDERcnxWnnHdM%2FTaRkzIFoMu%2BUgoSu8JjhLulHQjpcSo8hGcME%2FVLN4L%2F%2Fr6gCvCvnGtWuOKIXzi8N%2BYCb9xxQPCydN4kZotVf1wNRGrR7zfRu7NZWBNfkwOCVe9vpERMhhPzNM6jP%2B2MSs3lgdlUlLddYgjUqD6%2F1txkaVYqq55pd9QkFycvERlMo47O2VK4t3am6nS5Ahh2xVZajPIqU3%2F6CEXj%2BBLKhkYRlK%2BLvP9dcAxJwtYIKrGZ97epIVa13GLTshfypywvpG3bZnOkvhY2HY3R%2FEpUGMlQjexQw0Q0Hz3Hjn9dyj1gifYaNsPdQHnW9fVfPqX%2B8yyPxrHpU3wYYPDiVGwJ9yFF9PusR1gyU9F6XUYnJtZ8wHb3OvxZ26GRVRI7MeR1G%2B%2Fdp2hpUwNGo3v7p73E3ivE8ZZlt8OaRSLe1jGtcIR42YLJO6nhjvCzCeyZdIwrcrx67GDT5atYrvsA4ZlyMazCagCIX21mVs30efgBl%2FMl3KUFjSGhl%2FMOHTAUm4sKP1FqCOED5R69%2BpHKF0gfaNVuBGqBOjwtMfiYZJlBUEl4sebmRLiNcgTUIYmSGYDvw0NX5OIeqDNK3f%2FPBF%2BrzaZhGMPjOw8QGOqUBOwssYB4Q4Dla2qZgk2GYJAKF%2BRjtuEx66xMDvsa%2FykqGF6usnLYgYTMFctIw1VYV%2FTeN8i%2FMopWrvo6BLYfGwDBEXqPEONMiwuAXKFUPkbY9o3hdHXpFWIiwrHpLdLolCImFkrLYmi0KuxVEOuo98F6oRlC1Yt0IaTxjBLDEZLX0IupOv4YxlNmhRWsGEKxj4%2B%2B9kuMxfh6HEz9h1Xe%2BRe%2F2SfzH&X-Amz-Signature=83b88e1390c7f57a7d7910b87ff6d8d5546156b87884377d56524a71e6f5eb7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

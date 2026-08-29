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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=6ac0127e6ed984da50af4c3496a84c16654276016ad38ddb568d447f64762c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=09bd14544bc459a6d2ea30c53bd4d5f59624a9081cdd07fbb3add403b073d432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=3de248b1ae6e70d06155a76884caf79f1e7a9a05693e75bbf5de777d89dac132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=01efc7df88115606577ceeecee223867b44f3afafeb34c10f71bd031d1c9d438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=10c015de6a095e9e5a72400ca978261f6484a53990e72dc16f7d0a0b7a7bd9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=2c2515349a7c4106fd5e0368abc03164f2bde87edb641b31d0ec4afc980fbf31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=f5f207be0be3f5fe5daceda6f24f10a353bbe999e4ae60b8aafb7cc86803d301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=0fe253f08a92efcacedac9e260c79541fcc1b2a122fb18b560e60c124e738ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=ab041620b88f1ea6a0e00e4f82642ee04a82f2c8d8850e3f2d3c1cde9c7c497a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=559fb661549a1e08b4c5f4cb5044cd52b1c71c8b72100923d24e9b8936ee6d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=c7601e917e938a383f7c0d202b241dea10f76adb91700626a4c551ca0e7df385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=91d3ec43f421acd7200138ade8d0b626ecd76c69a689a642d158160e08a1ffe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=69507bd9588f0373600f2a54ea19c814e15e247e6cc79aff303a1530781bb089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQPMKHL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF00qkBRpeK0SPFyD8fj1kLTNvdFmZO4se9lQesEW%2F46AiBcw8R6i4JlaI6m8NVLc2wch5auHyvfOUPoCtO9sV3weir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs4VRCTV5TjZRaZatKtwDflffLvuDI%2B5dMlkHhwI3eKN0KvjKJ%2FmsHCIy5pDIVs1X3Ww0yzFylv6i6SBATyJee9at9x9IL55URd0y3jgfiHNGZQhYGDUeoXbsoNXNDCuvMl0N7Kof6hakYI4APeUZRGnGBqB%2BJQxwsgrR2tHcueY42iL9mGEae8V9eK5Gia6hYp2X2fqZQTpO%2FccPmpkyOrSNEI%2B81LpUR13byNqXpUiLSiHHYOYMF9Qf3Ru5EUnVhk86kGTAtF%2BvmZe6Qff53OGBmkgUxT32OVWTvZyhvkDnQWsnvOl2rXTwo8w629js4eR%2F7U1VkxxgsFRkfLB94GWev%2FbxLNngyRyuvq8t05Kcexi58zK1JINWhcByhP1GDXp%2Bikwci%2FNVPL%2BHDFi3fE2T8IN7cZ8hdRZHH%2BIbfNtPk57H8iNIdkXIxmjjZ44ZTtW9jwJKFHYaXbVCO2NuG8HFDTYnEtqNxBEhVMUp9ACdT1zDFO%2BOgZlqXqplsvt2BN8ewjorMMWKKye15rR3RG3pjaPMslYfJmxa1NZVC28IQvMyiiUwFd%2BahZbXRYwGSIZR9fRwuEF67eGA%2FAXl2G5JP26qKnCiVgwvO68DTECvh1hyCYox7tCMZSZjexg41E7hVJps4D0MV78w79HJ1AY6pgHUIrh0R5TUf6nBBYgjkMrXQGbwbx2EOdx8HkKfDQzF%2BKsYfu7f57rW8%2FO8F9DU3GtedQsp%2B1JqgY253jsskgihN8jdcXI6zRYlr%2FQfGV%2FWe3uZb%2FJe9vjBuC0gaYauk8viLSzHeSWHxyZKW3Qd8ZhcNifwH9CAYvIngNRFbfqvc2PH%2B%2BbBFLLvXIPhQsZU9rNnLqI3sNMxY8HQqhJAC%2FZtAUlTzv7K&X-Amz-Signature=3b5a032194d6220f0b66b6d6da2ed6bcb1e45f7338cc2bded3e8b2ecf0d57efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

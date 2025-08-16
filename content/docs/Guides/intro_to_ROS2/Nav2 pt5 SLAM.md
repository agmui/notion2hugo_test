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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=d1bfb75aef5610c72a68e0a10e499c96759f7694bb0e5095422d1a88ed91dd31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=3ef22aa287ddb18129c15eaa60b249c4156408be9ccb1cdb036b72a98084c227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=1d13d7d16aefaa4a41f7d3aab5c2399f4cb4f0eb7bda4fbb2bbd88219af9411e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=9c00b60293581bdf3872b2c5dbb0eccaf2cc99527be8f7e0d13b1a9d651b3c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=40d6d2723f2f88b99647e71c95ccabfd1e20d0c9cd6afd36beea60182b75f5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=ba5909da5112705430f2f4e36db7203f2c3e08550f4f50a73da2f543d4d09b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=6e0e4bf96176c8b9d07e0789ac0232f08714d8bca72a2e180c8c909e2b02cafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=ba4ed246fc1bf7f6202c45345fdecdb2a79746a050ac3bf1b64d41c0f455e85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=be8e738a2579f9b7c8db2e922c9be54ad28627fad2a3af4a7cb35a43f21b93d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=0073539d3e8f23edc2741f07318758e6f5483d9a42b7dfd548316ae223ea28cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=ff78ad0edde55caf66e2b591ced43ecdfbd263cf286da7443242c8ff842f994e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=76a7cedf6d6d30c0d37e92322fe034de0441dcc178a4c502a2eba01b8cd508c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=e681dc94ae723dc94779786e48fa883ba7870f613525ca6ede707b4d72186598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5UXS3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXPDxZKUUtfW6qjHF9OiuCCrBTF8HvQ43ejR4DT%2BSkPAIgS%2F%2BCFfNaIRGqG8Pf1iG%2FaIiocPhyW1HyHxsEWtw4qj4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNNopxUnwhjWNIeASrcA2kqaca6uBscBcpZudQrtMPxlj7OJbK%2Fkfcf8QPjPvnO0iDPe%2FCKKYKdkT5iXq220Ctz2xEahH6rH3lK%2B3fakt7mHL4305bbkDhn4CEHocNmKOcxd3eIygASobURiKhG6E95GOCh8B7UpzhFyBdFE1hSEQURNEiqy%2FpzjzXsokkgQpguQ%2FB0QtN6gb6emILakbl%2FHqR9z1msyYa995JLBHTwv1hdp5B6q1IlDWiQsUF85enkDrFyHHEpYR5d7gFDyucwYSgO1OhsxEDV%2FU0TNQZWuZrVHnWMUU14qa1W9b56vxx03jtIOWqqZ8qT2njzyWoMSESkZYVLTNi%2Byo%2BG3sbZu7fackmSenTNYNUvnwfEKR5EjXumQomd2OFqF6%2BtFYAYGwl72dllbl%2FaOnqgZDg3SsULhsh53W3oAiF%2FsqZk48MLgRz6p6sZaFtF2i3gCM%2BWDCaNVfDmHWbqRbwfbcRsoT0pHMjNhsc1HG%2BVwMoerW07nee4yX%2FvRxPjHHM5AZR7Gva5YN8JPmNPNJerZcg7xIl5OAX1KwXqbrqmjG6kzL7Qdna%2BrJqO%2FCRdjtcy95yAVnVcUtJi2fdXrCUIeQnLgUnJeXRCZp7buwJJJxoy0uqo6nUoyWKEKs79MPCZgsUGOqUBbt17WT82M0wAE4w2YcXAQt%2Fw5SFdMvP87o2H5Y8%2FPRIg8TtvZ4hBxIgxchAgX8m06CGFhSJFMgzfVuX3PtGAmb9E2diNW4QjKK%2BAMrOAl4m4DrZ9HFlTvBDPaaBSEB4gqPrd398RInHYnacGeIdU2m6fBWs1E%2B0GJyqSV4RZNurpTOZBDriNjrSrsHIlCV9o6aCBCaJ9ltT6weypM4%2FQqi1%2BRYER&X-Amz-Signature=46b2c8b806a3d86942e4af89824a2e2dab31651c39c1f208863e7785440c51f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

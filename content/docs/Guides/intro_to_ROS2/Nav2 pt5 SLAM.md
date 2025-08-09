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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=8252ad0695f76513bf48fa1b214065847e067ccfd791d4ff30210c928d9f982e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=c9e4ae196d32517ee9fdc117c6c34cf6a7e3260a91dd250b3ff78015ae39e9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=a6fb9054ad08ee808287da665ef392a4f5fb818aec1b309f467688de16c09062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=f352c0119ee6a7583360aa19997312329ec972a1c812d5947aec4ef5d84d1504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=ffdc267fc7df7cfe94faf6f030d581c2ce12601fa6a24733095d0cb88b7d9177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=6c46ec7fc2f7047a3ab08f0b9abce704b2c0c3e8260500d6868d76e435023d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=ad23efd56544112b580fa8dc79e1688ed92491155750349ae424bbbfb28a8ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=19be90b954a9518b0787d0fd2e02da42777d363442f1475441e1172108e8cee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=876547ed34538185524422b208e329ac67ba1b5a211eeb043174a3ff5c5fed4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=42ba7bc6f15aa778a752688b6a38b68887ffbafa7787311ef6b45cc5d13de56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=b0147fc522aadff5754ee496fa0da4b208a2472f7b04108bc09741de147e7406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=369adc5ef6ac1eb1465460d6f20e2a923fe3c5eea2d9bc0b5a7435636fc53a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=5532ca73153a56c1011c067befc2f337856373c68a55c47cc79492ace8a2f47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETV4EVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCreT7El55IVBGqVrnx%2FvVjVcYEKYayGjgulXJyWJBXKAIgZHl278nsxVfbTwC0HeNw%2B1HnST4nNndZp39LkPwgK0AqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkOUbDXvttCZ4NdvCrcA5HJ%2BzWwux2XuDNz9fdPz5qSROTjue9B57l63jnxSKgSSLMXgtkzGf6%2B6p14zeSmbnofVsJxdnwxWcg5ESng2lUHOWkE0y2rSp1gsOO2ro3HCas%2B0sFYLVCcoheEpb9OtjOXV6pOeztsmnSWm5xq4%2FUnOSI03sqzOYS1UHmAAatLHzCo7cyIdl7z4ia4v9%2BJnb5pv9unu4uwN%2F80CsgfveqdeCR%2BYfwcORdb6VtxMaMn%2BHm0tXUXhu1Fpv7x3yrXHg1atB7GU2W9SNHUDxep1jajcVQ9kDAU6zJCOffgMcB5%2BbGmepvZpumiDdeufoz977qh%2BXJHdZOkTL98OkElFSX4VsCgR%2FVVydX5T2ow77uFjWOb1KK79CiS1BBbXI%2BWhRUHYbFruTLAiHAT179gcAWFyqAkLQ6KJbPGBbeaVFRtNXFRjcWAgjFWAagZEg7e9hsLhoLbTG54kjJ9l101cqSOu8QSYLgU8Q7xWfWbD4J6VhX0dVMaFjqK%2F%2BN8PlJByXfboNiBNEvuPYl4XTZkrYmy%2BhXSPtwlogUuSmT%2FQQCmnfF6MJmFe2fkryoQcySiaFaIL9JhdBQ5l9I4mFbdKw7tSWDYIMiceILjpe17gN%2FbdWWHCtO30VvJoGMMMJDD3sQGOqUBcDrHOBEasWxRgqSLIOnyhUT%2FsJ%2B9k%2BTa8087FO2e5NS4jTpVXL6iNGndJ1bPvxOyDQll39r%2B5MNIALvIChfcVds%2F6Vj%2Bt3wEJLSZUXqQ9aXHHIrIppj6aIogUQEXQXr0vQ6fuL%2FkhlVHX4W4opgah9JYt1XVdYX4BnQiWPD2zr6Fce5pWGcgi79CGzQs0rws5DgHgMa8NMM5o8X2CR11bkR%2FyHz3&X-Amz-Signature=779d45a2d9dc103c06616708dadf0a85e28370f4f25a90e8d7bd95b23d7dc8c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

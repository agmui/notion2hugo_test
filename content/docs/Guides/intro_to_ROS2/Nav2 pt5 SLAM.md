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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=fc3ccf8ac3d3723e6bce1d76c9bbb228dc7caa6f3971d63a51d284eb6e9bc5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=954c6b9b0a7835afcc4d3aa318e6c7b0a79e60ee432a4c62074739236aaa4f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=683033d7ede8bc24d39573c257793d58d9ba1923357914638c33c523a7fbe0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=9831839b7ea493aa6a5689aac1ccee7634183f3eede4395fbf0ea4f71300cca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=6b5d14270127d24964cc43a6bb16a862f5a3337edef84ea14ef2bc846dcda218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=ca9c189cfab49ab68d5e797c452e4ef4e20e3578b5e379f5c2e65288d683e05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=1581a2b9fe30f966637437384d949257a212f075222b4503f7d764ae1e40d108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=2840edb2caf25ba702daddc79d39ee802890816d851e15d2b8617ede9cccffdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=586ae758d12fdbf79adfc61d23e394ee85a498f9cd9edc126616461039ee3462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=e6c1bed07967de8c3845c79837cf4db7156950878caefbeeaea6667df077fb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=d0a5cfd5bab9d9e0f0c7497b031d60c8fbd2ca1ecc8b1478f44674ce3dce41a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=e129cf141ede14e3f5ce7a34730b7d9cd7161cfea0487c7198d86086393bd253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=e28cb2bee866d17b622373c6c8357b226ea829158f4fb37fd82e751071875645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5AOUGC%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDiQc1%2BwyyVtjAuAat5d0yIXLTJdxfGyqSn24CI7%2BkCYAiAdMN8z0pqY2sl4qGCFgoJshZsJMfHPNUuu94vpwLKbKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwAjwXccT%2F66E32x1KtwDQCiRvkJbCyw2bnva60REI06ZGvqxq8hlOvvstQLselBmbA0env2%2B%2BKMwiOtnOWB8uHax057eNxmRRAGV5rp4GW7uajzakxrXtrqmoeUWPioF25FbUYw1iGQGEVL7vWkSOgOIaULeGHhY8Iowkdk1ALxP%2BN5CxOp4LmbqgvsLpziCHW%2BcVMAcO2lBGgYEqOSWSSS4ucmFw2tYaITC8ciAsups2mxm4a6CHEFMKSx4LxsdVOKgMJY9IegjXpYetfYMuo7MBzzQIxn8xku8QKI42AWqm0H9HwjOmuptNWiIVNeoYAQSVbDjm5sB4zwFZEGwbsnxk9oxBytvQOwEHzjOobIZ37qGBx6oeSasaha6fsNQgf6szQP3DrZxk51FJtVhsFIQwvoEhGx33TIlwHgllKPbxPw%2BrBmlp51NZP0MuR8H%2FfX2IrvQFmj1EptGelV01uIZ5%2BenkCaoEsQeoqlyL%2FjQ5pL2jcpvBXfyepMV82kK9eR1TQj5XH31N0pcybDrQ6eyGCWxGLGd6AFsTUZHhALxaL%2F2r%2FLvpEPj8A4WRF8LzyLdytdX6VXcTnfUJnz7GH%2FtsLXGdQaEFRZKpbu0OpWRRcTEut%2BnoBd1%2FmWbC5asNBc8YO%2FJVGvxIUkw2pfPzAY6pgEBFri1jWYqthwoJ0p%2F7WTzR2F6musGM8kwcVGuHBhlJAD63qK3WulNTGhmb%2FLTuppvSYnGueiD6uKeRBeAShPobfiY674LixK5n8VwJ3zEsq2QNbzRVTrMfEPDFxhWzY12YDcLDmTGjGp3H9RxzZVUZe4OYSpoo1E6D39P9Z0CsvLeu8n9KP1hKx9i3%2B%2FGRBKYBYvc2Ci9X3YQMScvq7X2rGdib8WD&X-Amz-Signature=0775a94f6e1162417414cdd4fb53ed0b0a5c34c488551a02ca392e5d60d11bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

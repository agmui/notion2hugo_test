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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=17a2b423a61d03eabb114f7598983086850398dfda40923a2e931f54a319b110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=bb7c8702abc7787cb89920ab3787f83a50e27083a56f87431d4c002996f627e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=d30917c37659fa312f2491caeed706837f7d3343abc674a966d78f864ee7eb85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=77facaae40e5a26552cd11fe0cd6eec99e5b1164818bc61f3a705b7f749f8b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=8381bd18e80276378e5ad932e1a9709e924bcc3f4f37b23bc63db42e001bdb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=11b42befe80c9fb3ca1fe05b26b1b471a310ac7a65e423a706eebbb1494922cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=1f376bfa161dd7737b754e4bdc327966bf964f24a8980772411e84768701a1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=4b3657986bf26accbc4644dc7fbcad7906b4040b349418d2b133010a59a859ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=b507f111a6c720af89a2b6441d002fc80ae0e271543042e083bf095f26b992ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=6a8a637b108bf7fdc9a7aa0a3578abac9527d33d0e3d5ccda33cdb1fc1e30b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=d0b8cf7b1bf22bc1579068b281b0fe2795a6555cf9485a86f9d527abc6add742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=1ca2d17f94cc531cdf47c9e532390f9d458d4200f027dbef825dd726f08929ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=803588f0747090c9555f2c113179435ac0ddebb749472e9058a5d05994ec99eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3LS6ZO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnKQDm5JgwN4FX84vEUlBlro0TeYREto62TpUOTmQQ2AiEA1FUu5KsLnve%2BluDzMftNEASM2gW1JcJaXSI3qnFnHzcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJh%2BUpfBcRocp4Y1ircA3O1lQKSaIhk%2B9Y8iX8x1WxLEuNubYrTh1qclrwTFi3ULkbhJjSwtgMa9DFY2b90QXzfIOQAJ0VkQqUjPbey7I8kGs2AdAtfEd%2B2jPk0wrm1vJG2EtSSw6wCB0W1l2ulRgJDTOVz1bbSQOPkKnnQ5G%2Fn5zb9QgFz8UlIUMNbCTte7s7oVFRYbqEWZawiFfwK2k1aRtmFaD9VoMRaFT1opMyopzK4lR5Nz0sIw6vdGG1GIX3RiplQK7yeWk%2F%2F%2FIQIb45p0tKFSD1bBBPmVnjeReIGCVCzUeoXePfxGEm6Wely7lNyDUYlnW%2BgNKeBE%2B%2BpQExkRObHJ4B0qtkRCdPlig8TOmkBaQHYmyKr4XPhs1W%2BfVjE%2FQ08Av%2FL5x2hwvmilR0nh%2FpzdTjdGVADfcdIkuEi6wcqB6wxItvmFa3WPf6amgNdGHHp3FevmAMbK%2FuZLsm7KZgTU1YbTH3Ze4bXeDEK15ESHZ0A0vWJGuEivcYClRarvuRdY6Bz%2FScDaJjJ%2F%2BSxrxVNTAr7yYeqGXxz3sqRd7Xgx%2BK9qLnGxNiAB6zx1I7U2yDGNQv7kQczCE1xq8MindrKWJBsPwsY71OlGHQRz6Ov1GIsrBc8j%2BAdGFqir07pyz3KebmSbCs3MPeq5sQGOqUBtDrQF8ch7z8kV8oZq0QdxNXZEuwnOxCCOes2i92e3E%2F8wyZEt7CBOxxYhR%2FJdunTbCzB6bZ50nBUFhTzfweB2MRcp9KO%2BypB3AP6d67Qec4yaev04Ifc5p4BQ3u8FuQhhZStn%2FxEC0Cf2zGQfzPagKzeX02rZ%2BI08MM9gZ8dsCCXzSFiPzwLW4y9pdzUhbyEcHrKaq8%2BNtQexnuvxpgnayoQca57&X-Amz-Signature=abb368f9b040ec326c0dfaf23f840d1bb5188bcf13166c615c12e801eee35db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

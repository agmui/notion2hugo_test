---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=fc79fe1cff97768b70beec376a017ad45e088505d78a7e8803e4d717e12f92ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=5d37c0f9f7092f4175f908e8e8eeb37e0ebcb630cdf80a9e313ca15679513233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=8408a4879ddbb65e51962e146014c42f5504cce59ba49c3f35becce8aaf4b6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=880fa69acc2b38f7ddffc1f4782cf60e556fbcb22de8aa635d446dfea6f93263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=64fbc5dfa5505f1f523f58e92c38dc5a80f40cf608f1c968de4fbfb7379088d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=7bbf8a04f82b4ab289533b76043940554464bea3b216c3bbeff505af7b709ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=a1b7fda502629f9184356df3e3184883005f38ba54f20f60cebabf4a61bc8d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=d99d53ba60b7ade0f626582b525448890e1bde4eabe1c924cb2e3cc95b395406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=91fdeb6155fcd1a894dbecf3cc0313f9c336af66898538e1305d7b25c4a03d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=365fa4ac177d675ecb85c197b9fa5e3594ca5378ba3427d8bb95016df7a247e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=c9345006e8afe53f3838b7cbb65f7405a3bbd66d43eb59915037083e1cf7513b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=dde6816dded7ef7b7e77a76821ac7f5d31000f33142b5d1a2d989d8683f3bab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=6efad897b2aefddc8350376abc0d6502ca16521324cea5904274c6b8b1a25276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKXVUO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA18aNNoHhuT%2B2ErvcVzkxK%2FzqBqpOwG61rgzzjPpdJDAiBsoNFQ8Pu%2FeUwwGdSd%2BVKnFZgfX1rbnpoblS%2B6P8wJuiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQjWrumecLxJdLVxKtwDzLTJXcLYpXeq5Eacj0wzJH61YCfg5AF5ZRQ53D2y0%2FCSzFX7a%2BL2NQJVAzy8GrFr%2BLmmm0YHc3KJU%2F9q98xfCGCXTvZz2LOkx0abCHmWaXINYALwdH5bsvQnZhiI%2BZxi2eZAn46ECFwoGNHCofz8ztyv4WY67DR4BgIneE61rr0QSx1q0nMjFuDDrnejggzRNjy6h6PNFyxLI2WxCCkOg93xc5dT7Ljbb%2F8u2qe7smLP6e2aBWpblcSZ0NG4%2B8cGePisiT%2FZe8hdUhVrlOB4DYEnYKVDELUk%2B3HVtObOdMOCrTRFbnyTysiaWqmxznHJMBQt33yrZ7eFfMLEU4VqyGoagO118Rhsf%2Fu%2FtsviCgpwcSB02rLUua2DAJyWv6%2BeUxdDv1JFYcyg9lPKwzXL%2FyXZwKH%2Fys%2Br78UMgJ77RerarDo9QCq7NNUncXl4TX3PofAIR5dyJL2XezbD3ZosxHrlu0Gq2Pup27qJ91l6mayWRG9OiOKK6yCWca%2FH7fydkWCWmkev1qb0XwG3%2FtmlmeshvOZSSFODSa%2F10QBUo7or%2BibksJfyCxbSdDhy8a6GYTqRdU2AZvlOBgfBuww%2BOW4xVineVIA5SZnoDvGE7evTgvsG4YZS1ErGNCQwxfCnxAY6pgGe1ySqUQ%2BlWw3vQOR0jn5Cyas6f3HcJM6UlBHa%2Fr4nyqrDeZKa2sG21gC3V0eERp1JONdFkZFpAcVES1i7Mn6QyKP3nC4w%2FH8dF3Rv3dy1lGpA6YIA01987L9t5l1OxpGFhTbQwWEoXuMsgz6aoP5hB4xMWH2ygTLTb7hrSH63OiCz8UfTFv3KBImenCcUnTwp9PIF%2FeVcXPOBoBL%2FWB9QmGr7S8%2FS&X-Amz-Signature=62f490c69929ff1f3b0bfa9cf39a2cbc0721df778ab2f68ba58bbc45b4c7dcd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 

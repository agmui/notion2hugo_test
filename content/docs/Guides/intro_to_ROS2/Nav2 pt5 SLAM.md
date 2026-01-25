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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=a4f40e9d6d560d1bcaf42c9bf14274b46b121fcf7d9d70e46aee454fb938c1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=0e846fc4da5f8180276ed58cc8c4c93dff1c516bc932217fecb71d7867051ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=423d32d14d1ab4aad6e618f30f1ca18e76209b5437bb2bcfc5734ca58bda9cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=d2a37567c3092d04be06483582ea6eea1a7558d74c610446618914d4a27d5576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=b6689cd44aafb0fdbf13d9544988658652dbf233491b62c6194f7fb3e8d7e32a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=31e7992e0b762919e7aa3023129388de79b1bc6b9049b9d372199af4791d070e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=16c93a797db8ea0037ef9edbd2881ea4aa58974617af7ab118b46b88fc8a4c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=ed186c41dfc230ca8877e859246b81deb3c50b59b2cbd81a9be81066880f28b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=7c19d6ee44fb9b3bde36338a98e19be6dd2908672582432f4d7a0fab8c93f06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=412eb92b7cf6fb8330eca000ea47aaf5f9cf7c4312bc341d47a4afc411e1e44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=227b9e922c579ac1f932e9d3a2a61ed369ee5de6a7ccb7d9f6e7447345d938ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=f13de825184afe6364a10fca43b4eadbeacf4e927e19a6ce76baab65c420453a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=f001d1921c453d9151d576a5ad3b6b67b58e151035aa415ed2fbc4d13fc8f4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4BFDHK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDi5I8AvqOCoEAeYvpjnrlA3b9QSzyDFT3ek18l%2FYwr1AiAGMnqP8BG02Dum9OA6KjpeDAQDE7k9E14o4v392GZIUSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrbJcKlvo52DxFueeKtwDXUy0GPNQjFqsGdzQcJDf%2BRuIYLYSLf%2FWKK%2F6gc4wAtY7zwiyyvm4whH75U58GSAirXQVZJWOq5isZ6NHoPqyJ6weRS6GTfnFCx6t2SKg4Eq3Xn5cFCyPY1v2EAZ3mDVIqC%2B7cCXicsUAumiI3%2BDDlJoJHfkUXdrjNqtrVsF1RHhGM9e6PxC0DAttOZyqrxxoQDeynU5kmDfBhrPrwazw6jMvMvWFi6gZ7fetb07lL%2FGZCP7%2FyjM51jMYsvLJJ5Iz47Rc9cWTLmZ5y7vVJP7xIQR8xrnLLfbS3R%2F6T2luhKtrtcqcr6K4ksqWvc%2BjahZqvt46PMzHIhmxn6lrP2jRb9gbo7Kq7Pm4G9a0yTRt1pJHN2OOnOkKKFLqJob1PfSGlUtS29%2FzEBPxf%2FxT4mcIprz7XwvTdGt1QY2puyedz7fs03HBNJsmdj6PHOpERXhuy2jcd6W3phcoc%2FuqIBTYY2s43BH%2BkPDGDod9DsMN1VzGCfDP%2BZ8DtFFPxOyGXzB14M%2F03Vrp2b%2F33XdyIMtt1jlXQub57b%2FpR1ZLEHrD%2BtIO5nacxtGSKs8rVo4ugQjJojw4u%2BrgJskpynd3bZAnAzQ%2FYJnktY4iDUqW0TmTPOigemWebzA8Go0bnH0w8u7VywY6pgGq8jfJZhlNLK1XfNRFXEsvKzjD0NDbiMVW5HMuUMEI2dWYrx03HZch2LjqJV8OdCLuuUsMeX1%2BWTtBE2VCn0%2BXQ6tb%2Fozdo9KwnS6A%2B2DZHf8G7rndl%2B49sf6lkDhGNIf09Uoo0YtMlz4rw%2F4VPp%2FklpqmotJrf%2Fw4Hm9X8NcsfQU7gjv%2FAfDbcfVcQUG8hQea5qTONzSZ8I21y5OBjBKGsY4Md0on&X-Amz-Signature=462173c25f80b32f3367c97273dd4e88fb87578ec8c9252bcac313ea72067af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

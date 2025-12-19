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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=2c94da3c7005e9f81c38693524731dd42d2dc4cd9027e21a392e2e4cf415943a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=98228c908c1245cc46043d58e6d279865e85c281edd06ad15de90c476b7b76ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=69381c4d7ed511d8ced8cbdfa9eec894b36db687b7b6dba509b1dde55532a0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=20699afa0d538a01e2516c90dbc0a0eb5b9f4d01b38683e79d8c642617a497f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=a05f052e98102b26ee4c59fd17a699d702e5b9a6dec7a7fbacc2628c27078975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=1f62bcea669c235b63f3755686b49dcdc2ba15fd015430217f8c754eb357ea2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=3c9235b8863bfb7bb512e380b19484cada4cb09d298b3c6c8746e487f7c5c5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=c4098b85129fd7d7b209aa556543e49e92fda6247b5b214cc82a1555d659f5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=d5df27f553e2fcc30513dab926b957461b9b248ab15159aad40b73b72720eec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=b1653e699ff549ff125eeaf038f40e0b809dac5e219c1bc77047b5409592a28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=c4e7b12424393cd4f5a2decc2d47a89305a78a77454d86c5fbc44bd44923c483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=8c9160f515eb4e110a061a51eeafe2b8f031c21ef40cda4919604b3e13cab32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=8152b7297fb2bf6dda1dca21f97fb2d9c136161637f7e8510557c59999f15509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5EUUH7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4HWIopydYDtbCF%2B%2BSpncqfp7eoukad31Lm5wD3emeQIgHIGjQivdy1T8ojXq4Hshv8yql8aaiiwHWymyVPVbrzkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsNozww70b5K8dsGSrcA37%2Be%2BHb4nGXWNakvxP%2BE%2BJw33dd1vLgbYwTDxzDkLVPcW%2FpWuhNKjeo4OoNRlmNJpXdtxGsQHZzm9JhoO6NoxGGeviSdbP4ngCdXypBgX%2BseXLsXM7X0szDMnDw2UXOqMob5v6f%2BYAswX9h1oXO0spw4EwkRNYfgi4iENdqoadjwvNtR9cF3XS2cZWsclUfViQREdnoEG0OotOIAd8PQn9Bng%2BnHEHpK4M2vFZZx9AsJbOPya9caZK%2F3CCv0QYRYn9Av9xmWu%2F3SKStQTjHWqGIH20kDOc%2B1goFoD7IgP5O6jWNoYQQtlcYOdCqYeiJgkBfPxeB9goWmYXq1xASXUEdFzNp6IxUV0EqVGQsj8w79rRPpjevQeH%2B00JFmVmyZcKFjuVbmo0lMnEksSRW0aEpW7c2Z9PEIeYL1uPpVXPKpzaDfKlGcZqi%2B0O6tMw9EwqxGYC9nDi6fThpqWJdEX%2FSq48tl%2BfFveEmSfNsQ9U7TrikEY4faqCjzSDcDjNL26f3jede3bf2BtxXvW8ABTDGZdSyfao%2FVpyrME4BBdtJ%2Fbb%2B9qBxqBKYpxubyP7cm8woWMd2BJLWQ4H90mZHtNNXLIjV9IzuG3kZZwsyGFl73Y5Lg2ikp19PZgz5MOHIksoGOqUBW87BMH1mFQ6IJ%2B4uuS3m8IWuk9bxXilbAwBbPFjlmuWcfVYLBOjyBXK%2FQPvUIaFm5fTvyREDjRU1rdziEK745rwzPPZNPFhNRw%2F8F1HR1AnA5a9mw1pTN9rLeawG8sfzvvATOi602wmgzngjDpoWLjDrk6adjgBjrk%2BYPveFX5nqTobh6CVhraFngRwADNoKdTj5b6DKvY879jK4BduDFrC%2Bgyx7&X-Amz-Signature=efa51116dd38c8399d3cc8601f4dbf08a6e4a98cdb92451e4e9cd79a4c26ead4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=4e84a4d19f3f666ace4d6c96ce3d3bc0720b17bc38a32a848143d7cc2f8c7874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=f8f677a0053cd82b07fc94fd3d97a3b84fa05e7213f80252b907b1848bf9890a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=ae186261977803779a35d7019d47cebe327df56db2a1fe87bb3c5492c6d43cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=691f3932f312446019fb85dde171732198b5bd20fbe04421536e1100e0419ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=12db1b7cb2f739f95f962ecda7956103538743bd889502fa92329321e6a2d7ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=0d0ba9abd1ee3fd21c90c1fbdf81867003c5be5ea59c682f47da2e66fc43a016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=65bd7b4bad098f5c2a3d55f0073d94348fc91cf91d75fe621801ad5f57a90496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=a199415dd08c356ce4ed9b241499e2867a63184f957176a3d4ebc94552697ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=be5530ad6a2a2201cf557353359059bb7943fe0d2cfbc33bd58a98e5e6baef99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=2af841a6ab49272dd7717d5daff811e50d28b601910185981e8e253b8904a28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=55c105e93866399fb2bfe1416374a9167c17f3107fa9989498fb5874f115ea69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=1fd0de077f3e73b3ea23c8bf24d6cbed22843aef7d46f75ada5ef670d34362c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=79a167816bf8617441cd28f4bafd6abe014e122cf681755196056d0c3fdfb999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFLDCU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWhn2LX5%2FxrzamSKhLJnFDmtBHVYhN%2BGXjlqKa4xWPwIhAI7EvqDmGEHrPPe3FwRB3kguyxpGvsrXdiiOK%2BH0AdaKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzOoRMyVQxvDo52VIq3AP1fl9lxh%2FAJ0ZZau6K5Ow8Ww9Nt2kiQ63mhW43QELBdGI%2BmO%2FLy%2FTbYcGCsz98S38Lf3remMb3FD9piLWhtmA0Fi%2FNcIKgTsyq1QRcBFqnndsAQzEb6xJh%2FmCbdWcwFltC8N6itZXaNT1hWwVX4w0h4b0dmY%2FuysU6K0C6fUe88TwWW9zdgxqAf4%2BpNDjUaOeICatC85HpqzRA8lYE3QyXQeIBDYKqCD9KAFEdlVAKGvU8ALcGhXXrVb7jI%2BMqqDNzZ46mybfvYyBKHyyv9HdW0LSxXReDadJYStEbamC8rCHpJGHu9kTEfV1iY1V8KLJ%2Bh%2FEfpGUpcuaJMdz7RNYpvguzCtF4gxsmmBw86j2gj%2BRXDs9vOGBIFagc5XuztZCu1RZTFhbclkPevwULkm45cQDU91V4kP01bDu3nAH%2FEFCiMHVhJFx5q3M%2BX5Bt3sOUyLfZojF6QNOBL7BZQbuiGgZpgy4n0ePwXesden%2Bii1d8V1ZAh%2B0001rpiuCDiF86XSdR2B0cxw%2FAhq8iDi68yo5faSCxr7EXQzhxBV%2BAVCjPvAo9z%2Bc8G0GPAT6XUiYG4li6Z%2BMtzsNDWxk%2F4FWFl2OGnU9UUJIzpTVyY2A9AcTFUytx7djkD0WjGTD8hp7RBjqkAd1GIUwelYKYYJHt%2FeBqazdRxLpRc%2BoCxNi9%2BS2oi8ezPf%2FRd2RSL3EYCHHzOhxswmm6YHyJtypD2K9Z8AJQkI%2F0q24G3iNFZ4oI1yyoDyWzBOcPfgGagcnpJK4cX72D8NlNIjuE2AIj9KmgyvMqgjbnUw1I6pnfBBamjIvullYaUd4H25v3NgvjxNFp6OEJH12vB4jDkfQxRpK6UM%2BtPrk2dCBD&X-Amz-Signature=833991f730d53529976004fa2060aadcd5e44e17baa5ff6a6ac966c0bddb5dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)

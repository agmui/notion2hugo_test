---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HC7GFV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDhWM7vteWdaWBkwBMjtS0PhMxWchSoeR5dw7bh0z47cwIgPoRdO10srhsgI6KTA1I7%2ByXisDyZoGHOEt9Wbu3Gv6kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4rdHrip5to4hbnlCrcAzCeOfaGSxBZSKZiEz9EyHE4H8p2PO0cGu2ol92lZTNU4%2Bv6QMYXRKAOT41WaeOsS947QfZCEw%2Fc0LvDtGMgtTtgu5vhQfpW0iI9m2ixQkOvnPOnW701%2BL7X9vx5UkzHGSoPWrevDonund11hwbc0CeD7gobFq6gwaO3hv2IT7I%2Fx59cqOCfpAq0sp33m7%2FDS3KM8pfYjv5Xwth8cwA%2FUBlwqJJDz5EqZuywT6HpiECx8XVVo%2Bbm1iM7uB5z3UMilJiN2AbkLkhntxUA8QyhbRa7wz2jiGXABNJqtp4UvKthn3pj1FlLuNqCEWgGdIZkoDa8Llexvf%2F97jG%2BDkEgKBcq39jcEwlEhfy75IhJ7S2VJP%2FQEJwBpTZQt%2Bm7es8bSv6VPJ16V54K%2FEyHFUfcPad%2ByIWP5XXc7SlCDJIZjqQ%2BKJKqdmZy9K3G18YhHQ0Iw6etZTiz5TtgnQ08O6%2B%2B68Wg%2BqZ4Mw9LBHku5uwTlhvBmdC%2F%2FBPqw3z58o3jscZtqFhPYGtNvK723wbFZVEvzlQJqz5DtWmt5N1G55yMEpkEYm0035CUZY77Rz%2FQZSK8GHCNQ6D2C40Dlcf86NI5WA27w3W%2FgwzZOU1OhE3t%2FYSGIoCoAZToXeDTlN8MMKaZo8QGOqUBDMMFm%2F1VTzKgOV%2BLg37Bs4G36iZkrVuXa3hTFHSiNoqs93R1ZFAwvrTyJlaltVyOYfE6%2F%2BAVCde%2BUPfmtofmlMijBYOVMi4YZM6zYId7FfubVv77KZZWdtBSDMeFqRHNC0YRVRgTPD9opvKDBzearNBLGMFsnsspfWWIhv6Zy3ELfTH%2FQeF8%2B3N8EBOCsIsZM9nhAe2Ec0H7RbZjIDnrTHbBtGGJ&X-Amz-Signature=ad066a6ee32fd2c1850d0b1d5d06695d33dfb6018d429a2532136c8b51cbbb73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HC7GFV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDhWM7vteWdaWBkwBMjtS0PhMxWchSoeR5dw7bh0z47cwIgPoRdO10srhsgI6KTA1I7%2ByXisDyZoGHOEt9Wbu3Gv6kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4rdHrip5to4hbnlCrcAzCeOfaGSxBZSKZiEz9EyHE4H8p2PO0cGu2ol92lZTNU4%2Bv6QMYXRKAOT41WaeOsS947QfZCEw%2Fc0LvDtGMgtTtgu5vhQfpW0iI9m2ixQkOvnPOnW701%2BL7X9vx5UkzHGSoPWrevDonund11hwbc0CeD7gobFq6gwaO3hv2IT7I%2Fx59cqOCfpAq0sp33m7%2FDS3KM8pfYjv5Xwth8cwA%2FUBlwqJJDz5EqZuywT6HpiECx8XVVo%2Bbm1iM7uB5z3UMilJiN2AbkLkhntxUA8QyhbRa7wz2jiGXABNJqtp4UvKthn3pj1FlLuNqCEWgGdIZkoDa8Llexvf%2F97jG%2BDkEgKBcq39jcEwlEhfy75IhJ7S2VJP%2FQEJwBpTZQt%2Bm7es8bSv6VPJ16V54K%2FEyHFUfcPad%2ByIWP5XXc7SlCDJIZjqQ%2BKJKqdmZy9K3G18YhHQ0Iw6etZTiz5TtgnQ08O6%2B%2B68Wg%2BqZ4Mw9LBHku5uwTlhvBmdC%2F%2FBPqw3z58o3jscZtqFhPYGtNvK723wbFZVEvzlQJqz5DtWmt5N1G55yMEpkEYm0035CUZY77Rz%2FQZSK8GHCNQ6D2C40Dlcf86NI5WA27w3W%2FgwzZOU1OhE3t%2FYSGIoCoAZToXeDTlN8MMKaZo8QGOqUBDMMFm%2F1VTzKgOV%2BLg37Bs4G36iZkrVuXa3hTFHSiNoqs93R1ZFAwvrTyJlaltVyOYfE6%2F%2BAVCde%2BUPfmtofmlMijBYOVMi4YZM6zYId7FfubVv77KZZWdtBSDMeFqRHNC0YRVRgTPD9opvKDBzearNBLGMFsnsspfWWIhv6Zy3ELfTH%2FQeF8%2B3N8EBOCsIsZM9nhAe2Ec0H7RbZjIDnrTHbBtGGJ&X-Amz-Signature=ecced6d7893a7b60d851e267f4df4aa4e5208fb7b2aa2de609c25c9b91bdc1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HC7GFV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDhWM7vteWdaWBkwBMjtS0PhMxWchSoeR5dw7bh0z47cwIgPoRdO10srhsgI6KTA1I7%2ByXisDyZoGHOEt9Wbu3Gv6kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4rdHrip5to4hbnlCrcAzCeOfaGSxBZSKZiEz9EyHE4H8p2PO0cGu2ol92lZTNU4%2Bv6QMYXRKAOT41WaeOsS947QfZCEw%2Fc0LvDtGMgtTtgu5vhQfpW0iI9m2ixQkOvnPOnW701%2BL7X9vx5UkzHGSoPWrevDonund11hwbc0CeD7gobFq6gwaO3hv2IT7I%2Fx59cqOCfpAq0sp33m7%2FDS3KM8pfYjv5Xwth8cwA%2FUBlwqJJDz5EqZuywT6HpiECx8XVVo%2Bbm1iM7uB5z3UMilJiN2AbkLkhntxUA8QyhbRa7wz2jiGXABNJqtp4UvKthn3pj1FlLuNqCEWgGdIZkoDa8Llexvf%2F97jG%2BDkEgKBcq39jcEwlEhfy75IhJ7S2VJP%2FQEJwBpTZQt%2Bm7es8bSv6VPJ16V54K%2FEyHFUfcPad%2ByIWP5XXc7SlCDJIZjqQ%2BKJKqdmZy9K3G18YhHQ0Iw6etZTiz5TtgnQ08O6%2B%2B68Wg%2BqZ4Mw9LBHku5uwTlhvBmdC%2F%2FBPqw3z58o3jscZtqFhPYGtNvK723wbFZVEvzlQJqz5DtWmt5N1G55yMEpkEYm0035CUZY77Rz%2FQZSK8GHCNQ6D2C40Dlcf86NI5WA27w3W%2FgwzZOU1OhE3t%2FYSGIoCoAZToXeDTlN8MMKaZo8QGOqUBDMMFm%2F1VTzKgOV%2BLg37Bs4G36iZkrVuXa3hTFHSiNoqs93R1ZFAwvrTyJlaltVyOYfE6%2F%2BAVCde%2BUPfmtofmlMijBYOVMi4YZM6zYId7FfubVv77KZZWdtBSDMeFqRHNC0YRVRgTPD9opvKDBzearNBLGMFsnsspfWWIhv6Zy3ELfTH%2FQeF8%2B3N8EBOCsIsZM9nhAe2Ec0H7RbZjIDnrTHbBtGGJ&X-Amz-Signature=05ae1d031af6a3ea9e044edbcafcf10af27533446b0a0c2093745a667f7140f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HC7GFV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDhWM7vteWdaWBkwBMjtS0PhMxWchSoeR5dw7bh0z47cwIgPoRdO10srhsgI6KTA1I7%2ByXisDyZoGHOEt9Wbu3Gv6kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4rdHrip5to4hbnlCrcAzCeOfaGSxBZSKZiEz9EyHE4H8p2PO0cGu2ol92lZTNU4%2Bv6QMYXRKAOT41WaeOsS947QfZCEw%2Fc0LvDtGMgtTtgu5vhQfpW0iI9m2ixQkOvnPOnW701%2BL7X9vx5UkzHGSoPWrevDonund11hwbc0CeD7gobFq6gwaO3hv2IT7I%2Fx59cqOCfpAq0sp33m7%2FDS3KM8pfYjv5Xwth8cwA%2FUBlwqJJDz5EqZuywT6HpiECx8XVVo%2Bbm1iM7uB5z3UMilJiN2AbkLkhntxUA8QyhbRa7wz2jiGXABNJqtp4UvKthn3pj1FlLuNqCEWgGdIZkoDa8Llexvf%2F97jG%2BDkEgKBcq39jcEwlEhfy75IhJ7S2VJP%2FQEJwBpTZQt%2Bm7es8bSv6VPJ16V54K%2FEyHFUfcPad%2ByIWP5XXc7SlCDJIZjqQ%2BKJKqdmZy9K3G18YhHQ0Iw6etZTiz5TtgnQ08O6%2B%2B68Wg%2BqZ4Mw9LBHku5uwTlhvBmdC%2F%2FBPqw3z58o3jscZtqFhPYGtNvK723wbFZVEvzlQJqz5DtWmt5N1G55yMEpkEYm0035CUZY77Rz%2FQZSK8GHCNQ6D2C40Dlcf86NI5WA27w3W%2FgwzZOU1OhE3t%2FYSGIoCoAZToXeDTlN8MMKaZo8QGOqUBDMMFm%2F1VTzKgOV%2BLg37Bs4G36iZkrVuXa3hTFHSiNoqs93R1ZFAwvrTyJlaltVyOYfE6%2F%2BAVCde%2BUPfmtofmlMijBYOVMi4YZM6zYId7FfubVv77KZZWdtBSDMeFqRHNC0YRVRgTPD9opvKDBzearNBLGMFsnsspfWWIhv6Zy3ELfTH%2FQeF8%2B3N8EBOCsIsZM9nhAe2Ec0H7RbZjIDnrTHbBtGGJ&X-Amz-Signature=9a9db9d57854ab7ebd5836ad3b133cb639607f87d894c72e62d8dee9c8483094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HC7GFV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDhWM7vteWdaWBkwBMjtS0PhMxWchSoeR5dw7bh0z47cwIgPoRdO10srhsgI6KTA1I7%2ByXisDyZoGHOEt9Wbu3Gv6kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4rdHrip5to4hbnlCrcAzCeOfaGSxBZSKZiEz9EyHE4H8p2PO0cGu2ol92lZTNU4%2Bv6QMYXRKAOT41WaeOsS947QfZCEw%2Fc0LvDtGMgtTtgu5vhQfpW0iI9m2ixQkOvnPOnW701%2BL7X9vx5UkzHGSoPWrevDonund11hwbc0CeD7gobFq6gwaO3hv2IT7I%2Fx59cqOCfpAq0sp33m7%2FDS3KM8pfYjv5Xwth8cwA%2FUBlwqJJDz5EqZuywT6HpiECx8XVVo%2Bbm1iM7uB5z3UMilJiN2AbkLkhntxUA8QyhbRa7wz2jiGXABNJqtp4UvKthn3pj1FlLuNqCEWgGdIZkoDa8Llexvf%2F97jG%2BDkEgKBcq39jcEwlEhfy75IhJ7S2VJP%2FQEJwBpTZQt%2Bm7es8bSv6VPJ16V54K%2FEyHFUfcPad%2ByIWP5XXc7SlCDJIZjqQ%2BKJKqdmZy9K3G18YhHQ0Iw6etZTiz5TtgnQ08O6%2B%2B68Wg%2BqZ4Mw9LBHku5uwTlhvBmdC%2F%2FBPqw3z58o3jscZtqFhPYGtNvK723wbFZVEvzlQJqz5DtWmt5N1G55yMEpkEYm0035CUZY77Rz%2FQZSK8GHCNQ6D2C40Dlcf86NI5WA27w3W%2FgwzZOU1OhE3t%2FYSGIoCoAZToXeDTlN8MMKaZo8QGOqUBDMMFm%2F1VTzKgOV%2BLg37Bs4G36iZkrVuXa3hTFHSiNoqs93R1ZFAwvrTyJlaltVyOYfE6%2F%2BAVCde%2BUPfmtofmlMijBYOVMi4YZM6zYId7FfubVv77KZZWdtBSDMeFqRHNC0YRVRgTPD9opvKDBzearNBLGMFsnsspfWWIhv6Zy3ELfTH%2FQeF8%2B3N8EBOCsIsZM9nhAe2Ec0H7RbZjIDnrTHbBtGGJ&X-Amz-Signature=b221020f881c9f98723dd05370cb4bed5148db390004c418a57dcaf3b6c2c0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HC7GFV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDhWM7vteWdaWBkwBMjtS0PhMxWchSoeR5dw7bh0z47cwIgPoRdO10srhsgI6KTA1I7%2ByXisDyZoGHOEt9Wbu3Gv6kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4rdHrip5to4hbnlCrcAzCeOfaGSxBZSKZiEz9EyHE4H8p2PO0cGu2ol92lZTNU4%2Bv6QMYXRKAOT41WaeOsS947QfZCEw%2Fc0LvDtGMgtTtgu5vhQfpW0iI9m2ixQkOvnPOnW701%2BL7X9vx5UkzHGSoPWrevDonund11hwbc0CeD7gobFq6gwaO3hv2IT7I%2Fx59cqOCfpAq0sp33m7%2FDS3KM8pfYjv5Xwth8cwA%2FUBlwqJJDz5EqZuywT6HpiECx8XVVo%2Bbm1iM7uB5z3UMilJiN2AbkLkhntxUA8QyhbRa7wz2jiGXABNJqtp4UvKthn3pj1FlLuNqCEWgGdIZkoDa8Llexvf%2F97jG%2BDkEgKBcq39jcEwlEhfy75IhJ7S2VJP%2FQEJwBpTZQt%2Bm7es8bSv6VPJ16V54K%2FEyHFUfcPad%2ByIWP5XXc7SlCDJIZjqQ%2BKJKqdmZy9K3G18YhHQ0Iw6etZTiz5TtgnQ08O6%2B%2B68Wg%2BqZ4Mw9LBHku5uwTlhvBmdC%2F%2FBPqw3z58o3jscZtqFhPYGtNvK723wbFZVEvzlQJqz5DtWmt5N1G55yMEpkEYm0035CUZY77Rz%2FQZSK8GHCNQ6D2C40Dlcf86NI5WA27w3W%2FgwzZOU1OhE3t%2FYSGIoCoAZToXeDTlN8MMKaZo8QGOqUBDMMFm%2F1VTzKgOV%2BLg37Bs4G36iZkrVuXa3hTFHSiNoqs93R1ZFAwvrTyJlaltVyOYfE6%2F%2BAVCde%2BUPfmtofmlMijBYOVMi4YZM6zYId7FfubVv77KZZWdtBSDMeFqRHNC0YRVRgTPD9opvKDBzearNBLGMFsnsspfWWIhv6Zy3ELfTH%2FQeF8%2B3N8EBOCsIsZM9nhAe2Ec0H7RbZjIDnrTHbBtGGJ&X-Amz-Signature=a2c349ad5b08c018c8aafb89148577e521ad1c8cdea3daa9504f7c6d3d597c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HC7GFV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDhWM7vteWdaWBkwBMjtS0PhMxWchSoeR5dw7bh0z47cwIgPoRdO10srhsgI6KTA1I7%2ByXisDyZoGHOEt9Wbu3Gv6kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4rdHrip5to4hbnlCrcAzCeOfaGSxBZSKZiEz9EyHE4H8p2PO0cGu2ol92lZTNU4%2Bv6QMYXRKAOT41WaeOsS947QfZCEw%2Fc0LvDtGMgtTtgu5vhQfpW0iI9m2ixQkOvnPOnW701%2BL7X9vx5UkzHGSoPWrevDonund11hwbc0CeD7gobFq6gwaO3hv2IT7I%2Fx59cqOCfpAq0sp33m7%2FDS3KM8pfYjv5Xwth8cwA%2FUBlwqJJDz5EqZuywT6HpiECx8XVVo%2Bbm1iM7uB5z3UMilJiN2AbkLkhntxUA8QyhbRa7wz2jiGXABNJqtp4UvKthn3pj1FlLuNqCEWgGdIZkoDa8Llexvf%2F97jG%2BDkEgKBcq39jcEwlEhfy75IhJ7S2VJP%2FQEJwBpTZQt%2Bm7es8bSv6VPJ16V54K%2FEyHFUfcPad%2ByIWP5XXc7SlCDJIZjqQ%2BKJKqdmZy9K3G18YhHQ0Iw6etZTiz5TtgnQ08O6%2B%2B68Wg%2BqZ4Mw9LBHku5uwTlhvBmdC%2F%2FBPqw3z58o3jscZtqFhPYGtNvK723wbFZVEvzlQJqz5DtWmt5N1G55yMEpkEYm0035CUZY77Rz%2FQZSK8GHCNQ6D2C40Dlcf86NI5WA27w3W%2FgwzZOU1OhE3t%2FYSGIoCoAZToXeDTlN8MMKaZo8QGOqUBDMMFm%2F1VTzKgOV%2BLg37Bs4G36iZkrVuXa3hTFHSiNoqs93R1ZFAwvrTyJlaltVyOYfE6%2F%2BAVCde%2BUPfmtofmlMijBYOVMi4YZM6zYId7FfubVv77KZZWdtBSDMeFqRHNC0YRVRgTPD9opvKDBzearNBLGMFsnsspfWWIhv6Zy3ELfTH%2FQeF8%2B3N8EBOCsIsZM9nhAe2Ec0H7RbZjIDnrTHbBtGGJ&X-Amz-Signature=2a67ecbf53965e9bcb09a2211ab439edbe1deede29eb7bbe44b1f886490b54ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HC7GFV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDhWM7vteWdaWBkwBMjtS0PhMxWchSoeR5dw7bh0z47cwIgPoRdO10srhsgI6KTA1I7%2ByXisDyZoGHOEt9Wbu3Gv6kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4rdHrip5to4hbnlCrcAzCeOfaGSxBZSKZiEz9EyHE4H8p2PO0cGu2ol92lZTNU4%2Bv6QMYXRKAOT41WaeOsS947QfZCEw%2Fc0LvDtGMgtTtgu5vhQfpW0iI9m2ixQkOvnPOnW701%2BL7X9vx5UkzHGSoPWrevDonund11hwbc0CeD7gobFq6gwaO3hv2IT7I%2Fx59cqOCfpAq0sp33m7%2FDS3KM8pfYjv5Xwth8cwA%2FUBlwqJJDz5EqZuywT6HpiECx8XVVo%2Bbm1iM7uB5z3UMilJiN2AbkLkhntxUA8QyhbRa7wz2jiGXABNJqtp4UvKthn3pj1FlLuNqCEWgGdIZkoDa8Llexvf%2F97jG%2BDkEgKBcq39jcEwlEhfy75IhJ7S2VJP%2FQEJwBpTZQt%2Bm7es8bSv6VPJ16V54K%2FEyHFUfcPad%2ByIWP5XXc7SlCDJIZjqQ%2BKJKqdmZy9K3G18YhHQ0Iw6etZTiz5TtgnQ08O6%2B%2B68Wg%2BqZ4Mw9LBHku5uwTlhvBmdC%2F%2FBPqw3z58o3jscZtqFhPYGtNvK723wbFZVEvzlQJqz5DtWmt5N1G55yMEpkEYm0035CUZY77Rz%2FQZSK8GHCNQ6D2C40Dlcf86NI5WA27w3W%2FgwzZOU1OhE3t%2FYSGIoCoAZToXeDTlN8MMKaZo8QGOqUBDMMFm%2F1VTzKgOV%2BLg37Bs4G36iZkrVuXa3hTFHSiNoqs93R1ZFAwvrTyJlaltVyOYfE6%2F%2BAVCde%2BUPfmtofmlMijBYOVMi4YZM6zYId7FfubVv77KZZWdtBSDMeFqRHNC0YRVRgTPD9opvKDBzearNBLGMFsnsspfWWIhv6Zy3ELfTH%2FQeF8%2B3N8EBOCsIsZM9nhAe2Ec0H7RbZjIDnrTHbBtGGJ&X-Amz-Signature=77b12c41760aceeeb398ad6c77e2d2dfcbdc015256da05524de72176e49bd8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HC7GFV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDhWM7vteWdaWBkwBMjtS0PhMxWchSoeR5dw7bh0z47cwIgPoRdO10srhsgI6KTA1I7%2ByXisDyZoGHOEt9Wbu3Gv6kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4rdHrip5to4hbnlCrcAzCeOfaGSxBZSKZiEz9EyHE4H8p2PO0cGu2ol92lZTNU4%2Bv6QMYXRKAOT41WaeOsS947QfZCEw%2Fc0LvDtGMgtTtgu5vhQfpW0iI9m2ixQkOvnPOnW701%2BL7X9vx5UkzHGSoPWrevDonund11hwbc0CeD7gobFq6gwaO3hv2IT7I%2Fx59cqOCfpAq0sp33m7%2FDS3KM8pfYjv5Xwth8cwA%2FUBlwqJJDz5EqZuywT6HpiECx8XVVo%2Bbm1iM7uB5z3UMilJiN2AbkLkhntxUA8QyhbRa7wz2jiGXABNJqtp4UvKthn3pj1FlLuNqCEWgGdIZkoDa8Llexvf%2F97jG%2BDkEgKBcq39jcEwlEhfy75IhJ7S2VJP%2FQEJwBpTZQt%2Bm7es8bSv6VPJ16V54K%2FEyHFUfcPad%2ByIWP5XXc7SlCDJIZjqQ%2BKJKqdmZy9K3G18YhHQ0Iw6etZTiz5TtgnQ08O6%2B%2B68Wg%2BqZ4Mw9LBHku5uwTlhvBmdC%2F%2FBPqw3z58o3jscZtqFhPYGtNvK723wbFZVEvzlQJqz5DtWmt5N1G55yMEpkEYm0035CUZY77Rz%2FQZSK8GHCNQ6D2C40Dlcf86NI5WA27w3W%2FgwzZOU1OhE3t%2FYSGIoCoAZToXeDTlN8MMKaZo8QGOqUBDMMFm%2F1VTzKgOV%2BLg37Bs4G36iZkrVuXa3hTFHSiNoqs93R1ZFAwvrTyJlaltVyOYfE6%2F%2BAVCde%2BUPfmtofmlMijBYOVMi4YZM6zYId7FfubVv77KZZWdtBSDMeFqRHNC0YRVRgTPD9opvKDBzearNBLGMFsnsspfWWIhv6Zy3ELfTH%2FQeF8%2B3N8EBOCsIsZM9nhAe2Ec0H7RbZjIDnrTHbBtGGJ&X-Amz-Signature=13228fbff06cb44570bb90ecaa6bd5a0513ed93a6120dca79700d026e766fb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZHBVET%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCzxy%2FO5YNy%2Br9gAz2qUZCDaAC6LgSpg%2B5hQgiFnOYkrAIgVu6xgu9c%2B2oIny%2Bvta23LsJb1cJDbLyf7CeXJLQTZ%2BoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjJkr2zYdOhZA347yrcA0qClRDlw1d1fsHbmEtk8UJy5W5Bc5GBWeaEoKWpSdtV6fAPlMAquOQeT0Na3MWGkdZEsxxFzGVEfFwo7cM1h5WlpFT7iR5XTw4gwa%2FMWpIJXJN7Gp6ZaF%2FvQI2EmBT1LiCmGHZJU%2FeVnQ1OXAnKaUMjXcUNKmrw0%2BFvvWjwsVGBbDZgvGNKwwyrYS1CHwIld2v%2BhKR40kc3z59DFYVJVxQFQYk%2BKquidgiUVcPTnt4lxuBybWAu3KzJwCw1NAI6Tpwva6s53KrNU%2FNLkUetQa2DZz48zgX%2FHwHHQpjQ4%2BsLUANOeB8Qi%2B116EZ2gLEbNiO3n3QWyA%2BNRZnA4Cod3X2J5sVZk2jIIbWJlL2ivpCGhviRtBScyJ%2F0lKno8Wx9bm7eYAG4eDqzERL%2F8ieoylojZDQf5%2BE8OKxQgIUU%2Fz%2FwtD%2FsLHel2xZ%2Fz%2Bl7z4miQex4Y5q1Kt2ChzqOgSYfT7DqaxXM1NASdOsq%2FqkFhZyhY053phqz9WE6YxVaw0FuuwjWcgwqhC14V%2F6OHAfxCdxOgbX5llUjWTbCN7snZEMD2XsVp7805HZGLkGi7xDiYwUbvUCRHJJhBrPRw%2F9OLXQzmZ9xrvoNSqfYyLyqtBf8B6TbsiQy1c2eYqmxMJSYo8QGOqUBkyH%2FjYdeDFTO8%2F0%2FTVhmRWRGLeY3jL%2FVWtdH5i0i2TAxiXd9uXn6hVhO35qqRYVpXScApt9HN0%2FxR4I3uhuuMlmq11%2BdA6OYjJC7P%2FsMjR53p5rEygxytBYYQYs2VzyRSfg5Lt62Mt6xKinSJOzKPf25T8IY881Jau4oJ61fiK2DX0BmlknoVSj1BB11E%2B%2BirvO9rkR7ZwWpdvC2V1jFld2ejF%2Bj&X-Amz-Signature=0974a1535e7714e715501dc4109d0ac25ae94e9a09c4e59c721af47adcbe129f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HC7GFV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDhWM7vteWdaWBkwBMjtS0PhMxWchSoeR5dw7bh0z47cwIgPoRdO10srhsgI6KTA1I7%2ByXisDyZoGHOEt9Wbu3Gv6kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4rdHrip5to4hbnlCrcAzCeOfaGSxBZSKZiEz9EyHE4H8p2PO0cGu2ol92lZTNU4%2Bv6QMYXRKAOT41WaeOsS947QfZCEw%2Fc0LvDtGMgtTtgu5vhQfpW0iI9m2ixQkOvnPOnW701%2BL7X9vx5UkzHGSoPWrevDonund11hwbc0CeD7gobFq6gwaO3hv2IT7I%2Fx59cqOCfpAq0sp33m7%2FDS3KM8pfYjv5Xwth8cwA%2FUBlwqJJDz5EqZuywT6HpiECx8XVVo%2Bbm1iM7uB5z3UMilJiN2AbkLkhntxUA8QyhbRa7wz2jiGXABNJqtp4UvKthn3pj1FlLuNqCEWgGdIZkoDa8Llexvf%2F97jG%2BDkEgKBcq39jcEwlEhfy75IhJ7S2VJP%2FQEJwBpTZQt%2Bm7es8bSv6VPJ16V54K%2FEyHFUfcPad%2ByIWP5XXc7SlCDJIZjqQ%2BKJKqdmZy9K3G18YhHQ0Iw6etZTiz5TtgnQ08O6%2B%2B68Wg%2BqZ4Mw9LBHku5uwTlhvBmdC%2F%2FBPqw3z58o3jscZtqFhPYGtNvK723wbFZVEvzlQJqz5DtWmt5N1G55yMEpkEYm0035CUZY77Rz%2FQZSK8GHCNQ6D2C40Dlcf86NI5WA27w3W%2FgwzZOU1OhE3t%2FYSGIoCoAZToXeDTlN8MMKaZo8QGOqUBDMMFm%2F1VTzKgOV%2BLg37Bs4G36iZkrVuXa3hTFHSiNoqs93R1ZFAwvrTyJlaltVyOYfE6%2F%2BAVCde%2BUPfmtofmlMijBYOVMi4YZM6zYId7FfubVv77KZZWdtBSDMeFqRHNC0YRVRgTPD9opvKDBzearNBLGMFsnsspfWWIhv6Zy3ELfTH%2FQeF8%2B3N8EBOCsIsZM9nhAe2Ec0H7RbZjIDnrTHbBtGGJ&X-Amz-Signature=73ad94a20f4a07a6eb34437e055e4e79bbc2c76b04874aac9aae075e94a79f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNL6CWE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCkXDEOgeBjPQRSM2ODfiyYx7HNCOLacuTKoOicOxxBSAIgSCQqR5qiXqTIK2eocrqaT8TjieABKOgNkeWKZbYCwsAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLjysJZvqJiuvNbbircA2Ere%2BxRZ%2BPbosMvy8wwSr%2Feivqvwtp%2FNOXDpZGaKytTXZL9oMIO7qqZkBzLqGhWdCRSM0db4eYcAQTToJHBrSdA%2BvBSfEZByBogdFSbF4GM2uS49gELWuFyfHkYwNnBNDVZb53PjDBiIEq8vG0KtZ%2BWX3gf8ZCdWZJ4uZBO2caYm79egi2JO0I2IdOtXkRB4rmcdLMWDsuSymfQ7Jw4LJCO7KHc2BTV2FQwi1%2BaTJDIDLaztA0EaHD5iOTj%2FJDEaPqkINCQJqSM%2BcjO7EUpqiHthtdCAtz794%2F6YklEhyxDNa7BOc3oMty%2BLIL80SrmSVbWPw6ZseHTwj9EHOtq3qCG6R96ROLc7K3845mff2rJNcCKm8skR%2B5WW9mgY%2FX4I07sGXWvAGDpXWe6t%2BWW3qB7%2FIBTBg9bIIPJ7hXGsAwZxHtRmacfttbGyoUVuYI1CwGVFJ3dVH0idM8J7%2FTqLGSkm9Ru1zpo1gsv%2FfkChm0gbEXijg6Mj%2Fw92Ozx%2Fjh%2FKaNHhC13h8S0%2Bjf92nNEpW9xt2DcZ%2B5MzNy6mJTLGHwvQ6c49Hs9P91mp0NoHK91mZ8DVY7SJmxsuhWgQoU38M5rqV%2Bj0lrY63e7dzZF1WvKpgfyS740rNwyhQJiMKOYo8QGOqUBaZirk%2BXMOGf%2Fmc9UssmBTfEiB%2F4DTCXOEPIByYBi3V4USPNEUDSl2Le8hvHlCZJTN89OuiLc0GOOKsrFr8W%2BRZXq6Up0e70b1%2FTbQ7b67uo%2BCp1tiw%2BHu10MI%2Bp2KQTHGBVeUO%2F0tnoqNHDup9xRVaxtb75l447Z3R12HYC43d5lQJQOyZQLDle%2Fm%2FTgb470UXKwE4dPuMTHIruwG8zPFyBW6EjS&X-Amz-Signature=9c9f4ade6d4abd18a07d5438f898d77a2c7ffa5042d0d7d8ebf17ba91a3e64c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNL6CWE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCkXDEOgeBjPQRSM2ODfiyYx7HNCOLacuTKoOicOxxBSAIgSCQqR5qiXqTIK2eocrqaT8TjieABKOgNkeWKZbYCwsAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLjysJZvqJiuvNbbircA2Ere%2BxRZ%2BPbosMvy8wwSr%2Feivqvwtp%2FNOXDpZGaKytTXZL9oMIO7qqZkBzLqGhWdCRSM0db4eYcAQTToJHBrSdA%2BvBSfEZByBogdFSbF4GM2uS49gELWuFyfHkYwNnBNDVZb53PjDBiIEq8vG0KtZ%2BWX3gf8ZCdWZJ4uZBO2caYm79egi2JO0I2IdOtXkRB4rmcdLMWDsuSymfQ7Jw4LJCO7KHc2BTV2FQwi1%2BaTJDIDLaztA0EaHD5iOTj%2FJDEaPqkINCQJqSM%2BcjO7EUpqiHthtdCAtz794%2F6YklEhyxDNa7BOc3oMty%2BLIL80SrmSVbWPw6ZseHTwj9EHOtq3qCG6R96ROLc7K3845mff2rJNcCKm8skR%2B5WW9mgY%2FX4I07sGXWvAGDpXWe6t%2BWW3qB7%2FIBTBg9bIIPJ7hXGsAwZxHtRmacfttbGyoUVuYI1CwGVFJ3dVH0idM8J7%2FTqLGSkm9Ru1zpo1gsv%2FfkChm0gbEXijg6Mj%2Fw92Ozx%2Fjh%2FKaNHhC13h8S0%2Bjf92nNEpW9xt2DcZ%2B5MzNy6mJTLGHwvQ6c49Hs9P91mp0NoHK91mZ8DVY7SJmxsuhWgQoU38M5rqV%2Bj0lrY63e7dzZF1WvKpgfyS740rNwyhQJiMKOYo8QGOqUBaZirk%2BXMOGf%2Fmc9UssmBTfEiB%2F4DTCXOEPIByYBi3V4USPNEUDSl2Le8hvHlCZJTN89OuiLc0GOOKsrFr8W%2BRZXq6Up0e70b1%2FTbQ7b67uo%2BCp1tiw%2BHu10MI%2Bp2KQTHGBVeUO%2F0tnoqNHDup9xRVaxtb75l447Z3R12HYC43d5lQJQOyZQLDle%2Fm%2FTgb470UXKwE4dPuMTHIruwG8zPFyBW6EjS&X-Amz-Signature=7a8c78c523e590d24123e0034c85872080518e5c78e1c8630a3486921b0eef86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNL6CWE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCkXDEOgeBjPQRSM2ODfiyYx7HNCOLacuTKoOicOxxBSAIgSCQqR5qiXqTIK2eocrqaT8TjieABKOgNkeWKZbYCwsAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLjysJZvqJiuvNbbircA2Ere%2BxRZ%2BPbosMvy8wwSr%2Feivqvwtp%2FNOXDpZGaKytTXZL9oMIO7qqZkBzLqGhWdCRSM0db4eYcAQTToJHBrSdA%2BvBSfEZByBogdFSbF4GM2uS49gELWuFyfHkYwNnBNDVZb53PjDBiIEq8vG0KtZ%2BWX3gf8ZCdWZJ4uZBO2caYm79egi2JO0I2IdOtXkRB4rmcdLMWDsuSymfQ7Jw4LJCO7KHc2BTV2FQwi1%2BaTJDIDLaztA0EaHD5iOTj%2FJDEaPqkINCQJqSM%2BcjO7EUpqiHthtdCAtz794%2F6YklEhyxDNa7BOc3oMty%2BLIL80SrmSVbWPw6ZseHTwj9EHOtq3qCG6R96ROLc7K3845mff2rJNcCKm8skR%2B5WW9mgY%2FX4I07sGXWvAGDpXWe6t%2BWW3qB7%2FIBTBg9bIIPJ7hXGsAwZxHtRmacfttbGyoUVuYI1CwGVFJ3dVH0idM8J7%2FTqLGSkm9Ru1zpo1gsv%2FfkChm0gbEXijg6Mj%2Fw92Ozx%2Fjh%2FKaNHhC13h8S0%2Bjf92nNEpW9xt2DcZ%2B5MzNy6mJTLGHwvQ6c49Hs9P91mp0NoHK91mZ8DVY7SJmxsuhWgQoU38M5rqV%2Bj0lrY63e7dzZF1WvKpgfyS740rNwyhQJiMKOYo8QGOqUBaZirk%2BXMOGf%2Fmc9UssmBTfEiB%2F4DTCXOEPIByYBi3V4USPNEUDSl2Le8hvHlCZJTN89OuiLc0GOOKsrFr8W%2BRZXq6Up0e70b1%2FTbQ7b67uo%2BCp1tiw%2BHu10MI%2Bp2KQTHGBVeUO%2F0tnoqNHDup9xRVaxtb75l447Z3R12HYC43d5lQJQOyZQLDle%2Fm%2FTgb470UXKwE4dPuMTHIruwG8zPFyBW6EjS&X-Amz-Signature=cc815e50c74652c1a2d4ea0980a7a522c5203cb2e28e4ae756ec20360bdd3ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNL6CWE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCkXDEOgeBjPQRSM2ODfiyYx7HNCOLacuTKoOicOxxBSAIgSCQqR5qiXqTIK2eocrqaT8TjieABKOgNkeWKZbYCwsAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLjysJZvqJiuvNbbircA2Ere%2BxRZ%2BPbosMvy8wwSr%2Feivqvwtp%2FNOXDpZGaKytTXZL9oMIO7qqZkBzLqGhWdCRSM0db4eYcAQTToJHBrSdA%2BvBSfEZByBogdFSbF4GM2uS49gELWuFyfHkYwNnBNDVZb53PjDBiIEq8vG0KtZ%2BWX3gf8ZCdWZJ4uZBO2caYm79egi2JO0I2IdOtXkRB4rmcdLMWDsuSymfQ7Jw4LJCO7KHc2BTV2FQwi1%2BaTJDIDLaztA0EaHD5iOTj%2FJDEaPqkINCQJqSM%2BcjO7EUpqiHthtdCAtz794%2F6YklEhyxDNa7BOc3oMty%2BLIL80SrmSVbWPw6ZseHTwj9EHOtq3qCG6R96ROLc7K3845mff2rJNcCKm8skR%2B5WW9mgY%2FX4I07sGXWvAGDpXWe6t%2BWW3qB7%2FIBTBg9bIIPJ7hXGsAwZxHtRmacfttbGyoUVuYI1CwGVFJ3dVH0idM8J7%2FTqLGSkm9Ru1zpo1gsv%2FfkChm0gbEXijg6Mj%2Fw92Ozx%2Fjh%2FKaNHhC13h8S0%2Bjf92nNEpW9xt2DcZ%2B5MzNy6mJTLGHwvQ6c49Hs9P91mp0NoHK91mZ8DVY7SJmxsuhWgQoU38M5rqV%2Bj0lrY63e7dzZF1WvKpgfyS740rNwyhQJiMKOYo8QGOqUBaZirk%2BXMOGf%2Fmc9UssmBTfEiB%2F4DTCXOEPIByYBi3V4USPNEUDSl2Le8hvHlCZJTN89OuiLc0GOOKsrFr8W%2BRZXq6Up0e70b1%2FTbQ7b67uo%2BCp1tiw%2BHu10MI%2Bp2KQTHGBVeUO%2F0tnoqNHDup9xRVaxtb75l447Z3R12HYC43d5lQJQOyZQLDle%2Fm%2FTgb470UXKwE4dPuMTHIruwG8zPFyBW6EjS&X-Amz-Signature=16b38761d2a21fc5149a1d6cc970b3a8ab2b6a7425380d514d374aac501f6477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNL6CWE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCkXDEOgeBjPQRSM2ODfiyYx7HNCOLacuTKoOicOxxBSAIgSCQqR5qiXqTIK2eocrqaT8TjieABKOgNkeWKZbYCwsAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLjysJZvqJiuvNbbircA2Ere%2BxRZ%2BPbosMvy8wwSr%2Feivqvwtp%2FNOXDpZGaKytTXZL9oMIO7qqZkBzLqGhWdCRSM0db4eYcAQTToJHBrSdA%2BvBSfEZByBogdFSbF4GM2uS49gELWuFyfHkYwNnBNDVZb53PjDBiIEq8vG0KtZ%2BWX3gf8ZCdWZJ4uZBO2caYm79egi2JO0I2IdOtXkRB4rmcdLMWDsuSymfQ7Jw4LJCO7KHc2BTV2FQwi1%2BaTJDIDLaztA0EaHD5iOTj%2FJDEaPqkINCQJqSM%2BcjO7EUpqiHthtdCAtz794%2F6YklEhyxDNa7BOc3oMty%2BLIL80SrmSVbWPw6ZseHTwj9EHOtq3qCG6R96ROLc7K3845mff2rJNcCKm8skR%2B5WW9mgY%2FX4I07sGXWvAGDpXWe6t%2BWW3qB7%2FIBTBg9bIIPJ7hXGsAwZxHtRmacfttbGyoUVuYI1CwGVFJ3dVH0idM8J7%2FTqLGSkm9Ru1zpo1gsv%2FfkChm0gbEXijg6Mj%2Fw92Ozx%2Fjh%2FKaNHhC13h8S0%2Bjf92nNEpW9xt2DcZ%2B5MzNy6mJTLGHwvQ6c49Hs9P91mp0NoHK91mZ8DVY7SJmxsuhWgQoU38M5rqV%2Bj0lrY63e7dzZF1WvKpgfyS740rNwyhQJiMKOYo8QGOqUBaZirk%2BXMOGf%2Fmc9UssmBTfEiB%2F4DTCXOEPIByYBi3V4USPNEUDSl2Le8hvHlCZJTN89OuiLc0GOOKsrFr8W%2BRZXq6Up0e70b1%2FTbQ7b67uo%2BCp1tiw%2BHu10MI%2Bp2KQTHGBVeUO%2F0tnoqNHDup9xRVaxtb75l447Z3R12HYC43d5lQJQOyZQLDle%2Fm%2FTgb470UXKwE4dPuMTHIruwG8zPFyBW6EjS&X-Amz-Signature=d0718c8a15468d5977afe32e0c27583f3a23bd451165f35c26bc96abea832e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNL6CWE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCkXDEOgeBjPQRSM2ODfiyYx7HNCOLacuTKoOicOxxBSAIgSCQqR5qiXqTIK2eocrqaT8TjieABKOgNkeWKZbYCwsAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLjysJZvqJiuvNbbircA2Ere%2BxRZ%2BPbosMvy8wwSr%2Feivqvwtp%2FNOXDpZGaKytTXZL9oMIO7qqZkBzLqGhWdCRSM0db4eYcAQTToJHBrSdA%2BvBSfEZByBogdFSbF4GM2uS49gELWuFyfHkYwNnBNDVZb53PjDBiIEq8vG0KtZ%2BWX3gf8ZCdWZJ4uZBO2caYm79egi2JO0I2IdOtXkRB4rmcdLMWDsuSymfQ7Jw4LJCO7KHc2BTV2FQwi1%2BaTJDIDLaztA0EaHD5iOTj%2FJDEaPqkINCQJqSM%2BcjO7EUpqiHthtdCAtz794%2F6YklEhyxDNa7BOc3oMty%2BLIL80SrmSVbWPw6ZseHTwj9EHOtq3qCG6R96ROLc7K3845mff2rJNcCKm8skR%2B5WW9mgY%2FX4I07sGXWvAGDpXWe6t%2BWW3qB7%2FIBTBg9bIIPJ7hXGsAwZxHtRmacfttbGyoUVuYI1CwGVFJ3dVH0idM8J7%2FTqLGSkm9Ru1zpo1gsv%2FfkChm0gbEXijg6Mj%2Fw92Ozx%2Fjh%2FKaNHhC13h8S0%2Bjf92nNEpW9xt2DcZ%2B5MzNy6mJTLGHwvQ6c49Hs9P91mp0NoHK91mZ8DVY7SJmxsuhWgQoU38M5rqV%2Bj0lrY63e7dzZF1WvKpgfyS740rNwyhQJiMKOYo8QGOqUBaZirk%2BXMOGf%2Fmc9UssmBTfEiB%2F4DTCXOEPIByYBi3V4USPNEUDSl2Le8hvHlCZJTN89OuiLc0GOOKsrFr8W%2BRZXq6Up0e70b1%2FTbQ7b67uo%2BCp1tiw%2BHu10MI%2Bp2KQTHGBVeUO%2F0tnoqNHDup9xRVaxtb75l447Z3R12HYC43d5lQJQOyZQLDle%2Fm%2FTgb470UXKwE4dPuMTHIruwG8zPFyBW6EjS&X-Amz-Signature=95a37442a6214aecd6a9dad84793bf3cb5c3e3eafec50e0fa6a821a096342fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNL6CWE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCkXDEOgeBjPQRSM2ODfiyYx7HNCOLacuTKoOicOxxBSAIgSCQqR5qiXqTIK2eocrqaT8TjieABKOgNkeWKZbYCwsAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLjysJZvqJiuvNbbircA2Ere%2BxRZ%2BPbosMvy8wwSr%2Feivqvwtp%2FNOXDpZGaKytTXZL9oMIO7qqZkBzLqGhWdCRSM0db4eYcAQTToJHBrSdA%2BvBSfEZByBogdFSbF4GM2uS49gELWuFyfHkYwNnBNDVZb53PjDBiIEq8vG0KtZ%2BWX3gf8ZCdWZJ4uZBO2caYm79egi2JO0I2IdOtXkRB4rmcdLMWDsuSymfQ7Jw4LJCO7KHc2BTV2FQwi1%2BaTJDIDLaztA0EaHD5iOTj%2FJDEaPqkINCQJqSM%2BcjO7EUpqiHthtdCAtz794%2F6YklEhyxDNa7BOc3oMty%2BLIL80SrmSVbWPw6ZseHTwj9EHOtq3qCG6R96ROLc7K3845mff2rJNcCKm8skR%2B5WW9mgY%2FX4I07sGXWvAGDpXWe6t%2BWW3qB7%2FIBTBg9bIIPJ7hXGsAwZxHtRmacfttbGyoUVuYI1CwGVFJ3dVH0idM8J7%2FTqLGSkm9Ru1zpo1gsv%2FfkChm0gbEXijg6Mj%2Fw92Ozx%2Fjh%2FKaNHhC13h8S0%2Bjf92nNEpW9xt2DcZ%2B5MzNy6mJTLGHwvQ6c49Hs9P91mp0NoHK91mZ8DVY7SJmxsuhWgQoU38M5rqV%2Bj0lrY63e7dzZF1WvKpgfyS740rNwyhQJiMKOYo8QGOqUBaZirk%2BXMOGf%2Fmc9UssmBTfEiB%2F4DTCXOEPIByYBi3V4USPNEUDSl2Le8hvHlCZJTN89OuiLc0GOOKsrFr8W%2BRZXq6Up0e70b1%2FTbQ7b67uo%2BCp1tiw%2BHu10MI%2Bp2KQTHGBVeUO%2F0tnoqNHDup9xRVaxtb75l447Z3R12HYC43d5lQJQOyZQLDle%2Fm%2FTgb470UXKwE4dPuMTHIruwG8zPFyBW6EjS&X-Amz-Signature=ed4818c13b800e5eedc56e4c9f49b83fd576219a7582895ed64c51f11d3b7121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNL6CWE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCkXDEOgeBjPQRSM2ODfiyYx7HNCOLacuTKoOicOxxBSAIgSCQqR5qiXqTIK2eocrqaT8TjieABKOgNkeWKZbYCwsAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLjysJZvqJiuvNbbircA2Ere%2BxRZ%2BPbosMvy8wwSr%2Feivqvwtp%2FNOXDpZGaKytTXZL9oMIO7qqZkBzLqGhWdCRSM0db4eYcAQTToJHBrSdA%2BvBSfEZByBogdFSbF4GM2uS49gELWuFyfHkYwNnBNDVZb53PjDBiIEq8vG0KtZ%2BWX3gf8ZCdWZJ4uZBO2caYm79egi2JO0I2IdOtXkRB4rmcdLMWDsuSymfQ7Jw4LJCO7KHc2BTV2FQwi1%2BaTJDIDLaztA0EaHD5iOTj%2FJDEaPqkINCQJqSM%2BcjO7EUpqiHthtdCAtz794%2F6YklEhyxDNa7BOc3oMty%2BLIL80SrmSVbWPw6ZseHTwj9EHOtq3qCG6R96ROLc7K3845mff2rJNcCKm8skR%2B5WW9mgY%2FX4I07sGXWvAGDpXWe6t%2BWW3qB7%2FIBTBg9bIIPJ7hXGsAwZxHtRmacfttbGyoUVuYI1CwGVFJ3dVH0idM8J7%2FTqLGSkm9Ru1zpo1gsv%2FfkChm0gbEXijg6Mj%2Fw92Ozx%2Fjh%2FKaNHhC13h8S0%2Bjf92nNEpW9xt2DcZ%2B5MzNy6mJTLGHwvQ6c49Hs9P91mp0NoHK91mZ8DVY7SJmxsuhWgQoU38M5rqV%2Bj0lrY63e7dzZF1WvKpgfyS740rNwyhQJiMKOYo8QGOqUBaZirk%2BXMOGf%2Fmc9UssmBTfEiB%2F4DTCXOEPIByYBi3V4USPNEUDSl2Le8hvHlCZJTN89OuiLc0GOOKsrFr8W%2BRZXq6Up0e70b1%2FTbQ7b67uo%2BCp1tiw%2BHu10MI%2Bp2KQTHGBVeUO%2F0tnoqNHDup9xRVaxtb75l447Z3R12HYC43d5lQJQOyZQLDle%2Fm%2FTgb470UXKwE4dPuMTHIruwG8zPFyBW6EjS&X-Amz-Signature=21036cf5f5e896f6292c7e23a0341ecc7af32d92fa8ebf30b2b617a39c4c1dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

TODO: idk mention + link Robot Localization node

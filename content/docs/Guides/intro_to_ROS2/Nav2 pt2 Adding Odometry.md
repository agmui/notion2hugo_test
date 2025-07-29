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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3PNF27%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8WWrksRLIViY8IAO2frNYOHvTUZbIDDypz%2Bcsn2sTgAiAr79KHXQKYAWllBHl8PQTbPZ%2BPLT0Ys6KJ%2FtZAbe2AFiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJXZwBvqPpKw%2FRDgKtwDG3rz3%2B%2BXAe%2Fm38zOK9LVrUYNRve2%2BYL8%2BxM8axtIzpUnQnI3epG2jC%2BStp08ATXlvHKYza%2BZxxOE9shWCMM5nK8%2BUNxTKOscUaT%2F8OaHWtYpR0tj9MGqjIyTUFb76xIFMWKJypdEyKK5MNNDIcREGhzvSI2FDQn7k%2BOOyzJqOSmq7BjB7YuH7StgYYq%2FT63IE0NwEUdYsTW0Z1n9IOBWO3DNSQ3TfmdojLFrhRyJvdiW9DNcMpPqfTk1%2F9gSG6QReKf5iYazKTO2CAjKq9Pv6O%2FRC7SwXu7lYzHN4j0jWtcwU%2B8XdMJcb8prSD0VkY3d878LlQN%2B4Z8Xu39uZ5WCQmQdK0PEYyr8wDGO9srHsk3nzS5INnX7TtdGhpTjToYhBvBBi6YER%2FB9CGIrlU1key2dq8Ivq%2F3cRA1BtUdkJ26xp9j%2B0N59TMSZQDklbYvHgCs6pyGXf6F79YN6Wj5z41WvUr6zI%2BkceA%2BDoZIQskQclh2uKFEoqOsmnlKVvwRspejqQp6%2FTM8QZauxdtZk4xFnxrkGHV%2BEenlvOinp%2Bqyg4PtB8JCvIvx489Ug47pFn7U7r7yxbKKCrO8%2BASJAM4Tq8MNbSwOwJvbMEQBXcBIpoXtqvQj9l%2FCCn78wms2gxAY6pgGcaDOlViVY6pEKGh2c%2FjlzL4ZE3RwMQYx%2FdSkV2ykOYaf1U4sQAanEiYRyEeL7UafS0SJoGpphoU7WfuhcoT%2FC9iM0KPUwWm1%2BRka3yb53ke3%2BZOYgPDFIP%2BTFI1pDDr9k%2Fg%2F2gOPj0CF8hxFjkKwZeo0%2BXRw61QhRKepnK9C7k20NJc9V092P1cnGv0W3g79bv1%2F8PGc1p7YWBpq7SbahPid7Rcrz&X-Amz-Signature=bb1d698269b5700191b0206f8eb9cbd61f13fcb069852a90fb2b3674d5b63f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3PNF27%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8WWrksRLIViY8IAO2frNYOHvTUZbIDDypz%2Bcsn2sTgAiAr79KHXQKYAWllBHl8PQTbPZ%2BPLT0Ys6KJ%2FtZAbe2AFiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJXZwBvqPpKw%2FRDgKtwDG3rz3%2B%2BXAe%2Fm38zOK9LVrUYNRve2%2BYL8%2BxM8axtIzpUnQnI3epG2jC%2BStp08ATXlvHKYza%2BZxxOE9shWCMM5nK8%2BUNxTKOscUaT%2F8OaHWtYpR0tj9MGqjIyTUFb76xIFMWKJypdEyKK5MNNDIcREGhzvSI2FDQn7k%2BOOyzJqOSmq7BjB7YuH7StgYYq%2FT63IE0NwEUdYsTW0Z1n9IOBWO3DNSQ3TfmdojLFrhRyJvdiW9DNcMpPqfTk1%2F9gSG6QReKf5iYazKTO2CAjKq9Pv6O%2FRC7SwXu7lYzHN4j0jWtcwU%2B8XdMJcb8prSD0VkY3d878LlQN%2B4Z8Xu39uZ5WCQmQdK0PEYyr8wDGO9srHsk3nzS5INnX7TtdGhpTjToYhBvBBi6YER%2FB9CGIrlU1key2dq8Ivq%2F3cRA1BtUdkJ26xp9j%2B0N59TMSZQDklbYvHgCs6pyGXf6F79YN6Wj5z41WvUr6zI%2BkceA%2BDoZIQskQclh2uKFEoqOsmnlKVvwRspejqQp6%2FTM8QZauxdtZk4xFnxrkGHV%2BEenlvOinp%2Bqyg4PtB8JCvIvx489Ug47pFn7U7r7yxbKKCrO8%2BASJAM4Tq8MNbSwOwJvbMEQBXcBIpoXtqvQj9l%2FCCn78wms2gxAY6pgGcaDOlViVY6pEKGh2c%2FjlzL4ZE3RwMQYx%2FdSkV2ykOYaf1U4sQAanEiYRyEeL7UafS0SJoGpphoU7WfuhcoT%2FC9iM0KPUwWm1%2BRka3yb53ke3%2BZOYgPDFIP%2BTFI1pDDr9k%2Fg%2F2gOPj0CF8hxFjkKwZeo0%2BXRw61QhRKepnK9C7k20NJc9V092P1cnGv0W3g79bv1%2F8PGc1p7YWBpq7SbahPid7Rcrz&X-Amz-Signature=700a50ba24ceabf4606b3b9365d5bb7bbfb9700554b62dc670a82518a968de7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3PNF27%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8WWrksRLIViY8IAO2frNYOHvTUZbIDDypz%2Bcsn2sTgAiAr79KHXQKYAWllBHl8PQTbPZ%2BPLT0Ys6KJ%2FtZAbe2AFiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJXZwBvqPpKw%2FRDgKtwDG3rz3%2B%2BXAe%2Fm38zOK9LVrUYNRve2%2BYL8%2BxM8axtIzpUnQnI3epG2jC%2BStp08ATXlvHKYza%2BZxxOE9shWCMM5nK8%2BUNxTKOscUaT%2F8OaHWtYpR0tj9MGqjIyTUFb76xIFMWKJypdEyKK5MNNDIcREGhzvSI2FDQn7k%2BOOyzJqOSmq7BjB7YuH7StgYYq%2FT63IE0NwEUdYsTW0Z1n9IOBWO3DNSQ3TfmdojLFrhRyJvdiW9DNcMpPqfTk1%2F9gSG6QReKf5iYazKTO2CAjKq9Pv6O%2FRC7SwXu7lYzHN4j0jWtcwU%2B8XdMJcb8prSD0VkY3d878LlQN%2B4Z8Xu39uZ5WCQmQdK0PEYyr8wDGO9srHsk3nzS5INnX7TtdGhpTjToYhBvBBi6YER%2FB9CGIrlU1key2dq8Ivq%2F3cRA1BtUdkJ26xp9j%2B0N59TMSZQDklbYvHgCs6pyGXf6F79YN6Wj5z41WvUr6zI%2BkceA%2BDoZIQskQclh2uKFEoqOsmnlKVvwRspejqQp6%2FTM8QZauxdtZk4xFnxrkGHV%2BEenlvOinp%2Bqyg4PtB8JCvIvx489Ug47pFn7U7r7yxbKKCrO8%2BASJAM4Tq8MNbSwOwJvbMEQBXcBIpoXtqvQj9l%2FCCn78wms2gxAY6pgGcaDOlViVY6pEKGh2c%2FjlzL4ZE3RwMQYx%2FdSkV2ykOYaf1U4sQAanEiYRyEeL7UafS0SJoGpphoU7WfuhcoT%2FC9iM0KPUwWm1%2BRka3yb53ke3%2BZOYgPDFIP%2BTFI1pDDr9k%2Fg%2F2gOPj0CF8hxFjkKwZeo0%2BXRw61QhRKepnK9C7k20NJc9V092P1cnGv0W3g79bv1%2F8PGc1p7YWBpq7SbahPid7Rcrz&X-Amz-Signature=b13b3dc9126ac8e889b9fbc604ac273cc3370e305f5774724bf7d9b71168e1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3PNF27%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8WWrksRLIViY8IAO2frNYOHvTUZbIDDypz%2Bcsn2sTgAiAr79KHXQKYAWllBHl8PQTbPZ%2BPLT0Ys6KJ%2FtZAbe2AFiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJXZwBvqPpKw%2FRDgKtwDG3rz3%2B%2BXAe%2Fm38zOK9LVrUYNRve2%2BYL8%2BxM8axtIzpUnQnI3epG2jC%2BStp08ATXlvHKYza%2BZxxOE9shWCMM5nK8%2BUNxTKOscUaT%2F8OaHWtYpR0tj9MGqjIyTUFb76xIFMWKJypdEyKK5MNNDIcREGhzvSI2FDQn7k%2BOOyzJqOSmq7BjB7YuH7StgYYq%2FT63IE0NwEUdYsTW0Z1n9IOBWO3DNSQ3TfmdojLFrhRyJvdiW9DNcMpPqfTk1%2F9gSG6QReKf5iYazKTO2CAjKq9Pv6O%2FRC7SwXu7lYzHN4j0jWtcwU%2B8XdMJcb8prSD0VkY3d878LlQN%2B4Z8Xu39uZ5WCQmQdK0PEYyr8wDGO9srHsk3nzS5INnX7TtdGhpTjToYhBvBBi6YER%2FB9CGIrlU1key2dq8Ivq%2F3cRA1BtUdkJ26xp9j%2B0N59TMSZQDklbYvHgCs6pyGXf6F79YN6Wj5z41WvUr6zI%2BkceA%2BDoZIQskQclh2uKFEoqOsmnlKVvwRspejqQp6%2FTM8QZauxdtZk4xFnxrkGHV%2BEenlvOinp%2Bqyg4PtB8JCvIvx489Ug47pFn7U7r7yxbKKCrO8%2BASJAM4Tq8MNbSwOwJvbMEQBXcBIpoXtqvQj9l%2FCCn78wms2gxAY6pgGcaDOlViVY6pEKGh2c%2FjlzL4ZE3RwMQYx%2FdSkV2ykOYaf1U4sQAanEiYRyEeL7UafS0SJoGpphoU7WfuhcoT%2FC9iM0KPUwWm1%2BRka3yb53ke3%2BZOYgPDFIP%2BTFI1pDDr9k%2Fg%2F2gOPj0CF8hxFjkKwZeo0%2BXRw61QhRKepnK9C7k20NJc9V092P1cnGv0W3g79bv1%2F8PGc1p7YWBpq7SbahPid7Rcrz&X-Amz-Signature=0a6372e9eb9abacc7e90b4f05e133f35fb167f16bb9dd730aa77a22def14c98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3PNF27%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8WWrksRLIViY8IAO2frNYOHvTUZbIDDypz%2Bcsn2sTgAiAr79KHXQKYAWllBHl8PQTbPZ%2BPLT0Ys6KJ%2FtZAbe2AFiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJXZwBvqPpKw%2FRDgKtwDG3rz3%2B%2BXAe%2Fm38zOK9LVrUYNRve2%2BYL8%2BxM8axtIzpUnQnI3epG2jC%2BStp08ATXlvHKYza%2BZxxOE9shWCMM5nK8%2BUNxTKOscUaT%2F8OaHWtYpR0tj9MGqjIyTUFb76xIFMWKJypdEyKK5MNNDIcREGhzvSI2FDQn7k%2BOOyzJqOSmq7BjB7YuH7StgYYq%2FT63IE0NwEUdYsTW0Z1n9IOBWO3DNSQ3TfmdojLFrhRyJvdiW9DNcMpPqfTk1%2F9gSG6QReKf5iYazKTO2CAjKq9Pv6O%2FRC7SwXu7lYzHN4j0jWtcwU%2B8XdMJcb8prSD0VkY3d878LlQN%2B4Z8Xu39uZ5WCQmQdK0PEYyr8wDGO9srHsk3nzS5INnX7TtdGhpTjToYhBvBBi6YER%2FB9CGIrlU1key2dq8Ivq%2F3cRA1BtUdkJ26xp9j%2B0N59TMSZQDklbYvHgCs6pyGXf6F79YN6Wj5z41WvUr6zI%2BkceA%2BDoZIQskQclh2uKFEoqOsmnlKVvwRspejqQp6%2FTM8QZauxdtZk4xFnxrkGHV%2BEenlvOinp%2Bqyg4PtB8JCvIvx489Ug47pFn7U7r7yxbKKCrO8%2BASJAM4Tq8MNbSwOwJvbMEQBXcBIpoXtqvQj9l%2FCCn78wms2gxAY6pgGcaDOlViVY6pEKGh2c%2FjlzL4ZE3RwMQYx%2FdSkV2ykOYaf1U4sQAanEiYRyEeL7UafS0SJoGpphoU7WfuhcoT%2FC9iM0KPUwWm1%2BRka3yb53ke3%2BZOYgPDFIP%2BTFI1pDDr9k%2Fg%2F2gOPj0CF8hxFjkKwZeo0%2BXRw61QhRKepnK9C7k20NJc9V092P1cnGv0W3g79bv1%2F8PGc1p7YWBpq7SbahPid7Rcrz&X-Amz-Signature=26bd9d756f1d06f366108db0658d1b8c04d786d669cfb31b6c81e2f0ac03d33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3PNF27%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8WWrksRLIViY8IAO2frNYOHvTUZbIDDypz%2Bcsn2sTgAiAr79KHXQKYAWllBHl8PQTbPZ%2BPLT0Ys6KJ%2FtZAbe2AFiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJXZwBvqPpKw%2FRDgKtwDG3rz3%2B%2BXAe%2Fm38zOK9LVrUYNRve2%2BYL8%2BxM8axtIzpUnQnI3epG2jC%2BStp08ATXlvHKYza%2BZxxOE9shWCMM5nK8%2BUNxTKOscUaT%2F8OaHWtYpR0tj9MGqjIyTUFb76xIFMWKJypdEyKK5MNNDIcREGhzvSI2FDQn7k%2BOOyzJqOSmq7BjB7YuH7StgYYq%2FT63IE0NwEUdYsTW0Z1n9IOBWO3DNSQ3TfmdojLFrhRyJvdiW9DNcMpPqfTk1%2F9gSG6QReKf5iYazKTO2CAjKq9Pv6O%2FRC7SwXu7lYzHN4j0jWtcwU%2B8XdMJcb8prSD0VkY3d878LlQN%2B4Z8Xu39uZ5WCQmQdK0PEYyr8wDGO9srHsk3nzS5INnX7TtdGhpTjToYhBvBBi6YER%2FB9CGIrlU1key2dq8Ivq%2F3cRA1BtUdkJ26xp9j%2B0N59TMSZQDklbYvHgCs6pyGXf6F79YN6Wj5z41WvUr6zI%2BkceA%2BDoZIQskQclh2uKFEoqOsmnlKVvwRspejqQp6%2FTM8QZauxdtZk4xFnxrkGHV%2BEenlvOinp%2Bqyg4PtB8JCvIvx489Ug47pFn7U7r7yxbKKCrO8%2BASJAM4Tq8MNbSwOwJvbMEQBXcBIpoXtqvQj9l%2FCCn78wms2gxAY6pgGcaDOlViVY6pEKGh2c%2FjlzL4ZE3RwMQYx%2FdSkV2ykOYaf1U4sQAanEiYRyEeL7UafS0SJoGpphoU7WfuhcoT%2FC9iM0KPUwWm1%2BRka3yb53ke3%2BZOYgPDFIP%2BTFI1pDDr9k%2Fg%2F2gOPj0CF8hxFjkKwZeo0%2BXRw61QhRKepnK9C7k20NJc9V092P1cnGv0W3g79bv1%2F8PGc1p7YWBpq7SbahPid7Rcrz&X-Amz-Signature=de2b383d13fab9667cd05dd00c706cf83b20cdff74838b6705144de4695d2a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3PNF27%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8WWrksRLIViY8IAO2frNYOHvTUZbIDDypz%2Bcsn2sTgAiAr79KHXQKYAWllBHl8PQTbPZ%2BPLT0Ys6KJ%2FtZAbe2AFiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJXZwBvqPpKw%2FRDgKtwDG3rz3%2B%2BXAe%2Fm38zOK9LVrUYNRve2%2BYL8%2BxM8axtIzpUnQnI3epG2jC%2BStp08ATXlvHKYza%2BZxxOE9shWCMM5nK8%2BUNxTKOscUaT%2F8OaHWtYpR0tj9MGqjIyTUFb76xIFMWKJypdEyKK5MNNDIcREGhzvSI2FDQn7k%2BOOyzJqOSmq7BjB7YuH7StgYYq%2FT63IE0NwEUdYsTW0Z1n9IOBWO3DNSQ3TfmdojLFrhRyJvdiW9DNcMpPqfTk1%2F9gSG6QReKf5iYazKTO2CAjKq9Pv6O%2FRC7SwXu7lYzHN4j0jWtcwU%2B8XdMJcb8prSD0VkY3d878LlQN%2B4Z8Xu39uZ5WCQmQdK0PEYyr8wDGO9srHsk3nzS5INnX7TtdGhpTjToYhBvBBi6YER%2FB9CGIrlU1key2dq8Ivq%2F3cRA1BtUdkJ26xp9j%2B0N59TMSZQDklbYvHgCs6pyGXf6F79YN6Wj5z41WvUr6zI%2BkceA%2BDoZIQskQclh2uKFEoqOsmnlKVvwRspejqQp6%2FTM8QZauxdtZk4xFnxrkGHV%2BEenlvOinp%2Bqyg4PtB8JCvIvx489Ug47pFn7U7r7yxbKKCrO8%2BASJAM4Tq8MNbSwOwJvbMEQBXcBIpoXtqvQj9l%2FCCn78wms2gxAY6pgGcaDOlViVY6pEKGh2c%2FjlzL4ZE3RwMQYx%2FdSkV2ykOYaf1U4sQAanEiYRyEeL7UafS0SJoGpphoU7WfuhcoT%2FC9iM0KPUwWm1%2BRka3yb53ke3%2BZOYgPDFIP%2BTFI1pDDr9k%2Fg%2F2gOPj0CF8hxFjkKwZeo0%2BXRw61QhRKepnK9C7k20NJc9V092P1cnGv0W3g79bv1%2F8PGc1p7YWBpq7SbahPid7Rcrz&X-Amz-Signature=44383bd9b82594d3da80de98e4c5fa4c843caa7923e461d52a8fb1fe1b1142a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3PNF27%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8WWrksRLIViY8IAO2frNYOHvTUZbIDDypz%2Bcsn2sTgAiAr79KHXQKYAWllBHl8PQTbPZ%2BPLT0Ys6KJ%2FtZAbe2AFiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJXZwBvqPpKw%2FRDgKtwDG3rz3%2B%2BXAe%2Fm38zOK9LVrUYNRve2%2BYL8%2BxM8axtIzpUnQnI3epG2jC%2BStp08ATXlvHKYza%2BZxxOE9shWCMM5nK8%2BUNxTKOscUaT%2F8OaHWtYpR0tj9MGqjIyTUFb76xIFMWKJypdEyKK5MNNDIcREGhzvSI2FDQn7k%2BOOyzJqOSmq7BjB7YuH7StgYYq%2FT63IE0NwEUdYsTW0Z1n9IOBWO3DNSQ3TfmdojLFrhRyJvdiW9DNcMpPqfTk1%2F9gSG6QReKf5iYazKTO2CAjKq9Pv6O%2FRC7SwXu7lYzHN4j0jWtcwU%2B8XdMJcb8prSD0VkY3d878LlQN%2B4Z8Xu39uZ5WCQmQdK0PEYyr8wDGO9srHsk3nzS5INnX7TtdGhpTjToYhBvBBi6YER%2FB9CGIrlU1key2dq8Ivq%2F3cRA1BtUdkJ26xp9j%2B0N59TMSZQDklbYvHgCs6pyGXf6F79YN6Wj5z41WvUr6zI%2BkceA%2BDoZIQskQclh2uKFEoqOsmnlKVvwRspejqQp6%2FTM8QZauxdtZk4xFnxrkGHV%2BEenlvOinp%2Bqyg4PtB8JCvIvx489Ug47pFn7U7r7yxbKKCrO8%2BASJAM4Tq8MNbSwOwJvbMEQBXcBIpoXtqvQj9l%2FCCn78wms2gxAY6pgGcaDOlViVY6pEKGh2c%2FjlzL4ZE3RwMQYx%2FdSkV2ykOYaf1U4sQAanEiYRyEeL7UafS0SJoGpphoU7WfuhcoT%2FC9iM0KPUwWm1%2BRka3yb53ke3%2BZOYgPDFIP%2BTFI1pDDr9k%2Fg%2F2gOPj0CF8hxFjkKwZeo0%2BXRw61QhRKepnK9C7k20NJc9V092P1cnGv0W3g79bv1%2F8PGc1p7YWBpq7SbahPid7Rcrz&X-Amz-Signature=a4c32b8ac06dd46537c67daf04bf8a9b1d52d369a2434eb4063877ba274a0337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3PNF27%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8WWrksRLIViY8IAO2frNYOHvTUZbIDDypz%2Bcsn2sTgAiAr79KHXQKYAWllBHl8PQTbPZ%2BPLT0Ys6KJ%2FtZAbe2AFiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJXZwBvqPpKw%2FRDgKtwDG3rz3%2B%2BXAe%2Fm38zOK9LVrUYNRve2%2BYL8%2BxM8axtIzpUnQnI3epG2jC%2BStp08ATXlvHKYza%2BZxxOE9shWCMM5nK8%2BUNxTKOscUaT%2F8OaHWtYpR0tj9MGqjIyTUFb76xIFMWKJypdEyKK5MNNDIcREGhzvSI2FDQn7k%2BOOyzJqOSmq7BjB7YuH7StgYYq%2FT63IE0NwEUdYsTW0Z1n9IOBWO3DNSQ3TfmdojLFrhRyJvdiW9DNcMpPqfTk1%2F9gSG6QReKf5iYazKTO2CAjKq9Pv6O%2FRC7SwXu7lYzHN4j0jWtcwU%2B8XdMJcb8prSD0VkY3d878LlQN%2B4Z8Xu39uZ5WCQmQdK0PEYyr8wDGO9srHsk3nzS5INnX7TtdGhpTjToYhBvBBi6YER%2FB9CGIrlU1key2dq8Ivq%2F3cRA1BtUdkJ26xp9j%2B0N59TMSZQDklbYvHgCs6pyGXf6F79YN6Wj5z41WvUr6zI%2BkceA%2BDoZIQskQclh2uKFEoqOsmnlKVvwRspejqQp6%2FTM8QZauxdtZk4xFnxrkGHV%2BEenlvOinp%2Bqyg4PtB8JCvIvx489Ug47pFn7U7r7yxbKKCrO8%2BASJAM4Tq8MNbSwOwJvbMEQBXcBIpoXtqvQj9l%2FCCn78wms2gxAY6pgGcaDOlViVY6pEKGh2c%2FjlzL4ZE3RwMQYx%2FdSkV2ykOYaf1U4sQAanEiYRyEeL7UafS0SJoGpphoU7WfuhcoT%2FC9iM0KPUwWm1%2BRka3yb53ke3%2BZOYgPDFIP%2BTFI1pDDr9k%2Fg%2F2gOPj0CF8hxFjkKwZeo0%2BXRw61QhRKepnK9C7k20NJc9V092P1cnGv0W3g79bv1%2F8PGc1p7YWBpq7SbahPid7Rcrz&X-Amz-Signature=2056d1b23be0f3245afe2a02459c598cec64ae277e2e37b0a15113dd4ba5ece5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UREJKSM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCN1cXEv2lT%2B3XXc5ZUdkLzYPAKjyHBWoN9X2xpLJed%2FQIgTIJL8dS9itLEDwMNO0zYY3%2BaI5bZrlMCB1%2BsTJuvD%2FUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLH3SE3G2Te7vFyHAyrcA2aZGqO5NO9FtdU3maMb4OowUu1rVDtU64MvHEoN185Vl%2FHcQFv1xIrbbHy903DGbZW35Y3MbdeWmZQwA3EDmBbaENLqbIhDw9Entd8r62DxIcBWk0qP9WZFlHxZmT5mfb18w%2BdhBmiN%2Bf5qikaS60nF57eS9SalHgVM9j2s2lG8cHqohwJcHgivtOYmptGBk571xvryXGWnEjxlPcpHHyuWVdWYrMJAVApKQBU25lU%2FZSgxxdXTJBptGZohARrFY0wZr38qszK%2F6n17NRJhV8aundWuH0JhAqPM18x6%2FATngqpsgW3QR3sfAm16DECh0lf3rkRmkDlBxEo45fxPBuXtcH0747GcSwSKNokhWG6BHQUaLvCtnVYYDyKjy4OfisS42j0f%2Fv%2B44MHeNXVjmCGwGlDB0HgZGV8xxuymCu%2FJAdQHAHIcb6TiGIjiTDXYCDIf1pVRrPA6vkq3K2iTtFazmk0dpqtlXOkn3Mxhpo6kWN0AKZ%2Fpm7i4BnWWUUh10skS4qJc6zFxLewJvPziRZ%2F537Z9Y2qAUgSqOWSiOlahyH%2FYVUAF8zgepEQ4hjVLbIAmFCNEXTSGFkNIaWBQITlB%2FV%2BYSaas7QMgAWHktpgLsQpYJuXUpJl43AX5MPrMoMQGOqUB8J3bx8c3S13kHkmXJgAgL%2BMC4KrhWFmlw%2B46WYUO22dTIxtCxIFNNXUuIxfqSNTfARgq2PXTup2btrErZI6lIq%2BxDrpdH%2FNvV%2Fi3byKCqrXjdRfAQPK3ectKBxMYPXk0aW1A1Fnj6ScgoWPX2Eb%2BdhZ261VzoAOl7m8HMQi43ufZ07fHuXHCdN7w99iO1Ushf2%2FrwGYmztWLMKIBgMTW%2BS%2BWJYTT&X-Amz-Signature=798d9e6b5fdfe37fe94b6e24ae3ee13f5d19ac9dbcf2c095a4ebeaabc81ff49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3PNF27%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG8WWrksRLIViY8IAO2frNYOHvTUZbIDDypz%2Bcsn2sTgAiAr79KHXQKYAWllBHl8PQTbPZ%2BPLT0Ys6KJ%2FtZAbe2AFiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJXZwBvqPpKw%2FRDgKtwDG3rz3%2B%2BXAe%2Fm38zOK9LVrUYNRve2%2BYL8%2BxM8axtIzpUnQnI3epG2jC%2BStp08ATXlvHKYza%2BZxxOE9shWCMM5nK8%2BUNxTKOscUaT%2F8OaHWtYpR0tj9MGqjIyTUFb76xIFMWKJypdEyKK5MNNDIcREGhzvSI2FDQn7k%2BOOyzJqOSmq7BjB7YuH7StgYYq%2FT63IE0NwEUdYsTW0Z1n9IOBWO3DNSQ3TfmdojLFrhRyJvdiW9DNcMpPqfTk1%2F9gSG6QReKf5iYazKTO2CAjKq9Pv6O%2FRC7SwXu7lYzHN4j0jWtcwU%2B8XdMJcb8prSD0VkY3d878LlQN%2B4Z8Xu39uZ5WCQmQdK0PEYyr8wDGO9srHsk3nzS5INnX7TtdGhpTjToYhBvBBi6YER%2FB9CGIrlU1key2dq8Ivq%2F3cRA1BtUdkJ26xp9j%2B0N59TMSZQDklbYvHgCs6pyGXf6F79YN6Wj5z41WvUr6zI%2BkceA%2BDoZIQskQclh2uKFEoqOsmnlKVvwRspejqQp6%2FTM8QZauxdtZk4xFnxrkGHV%2BEenlvOinp%2Bqyg4PtB8JCvIvx489Ug47pFn7U7r7yxbKKCrO8%2BASJAM4Tq8MNbSwOwJvbMEQBXcBIpoXtqvQj9l%2FCCn78wms2gxAY6pgGcaDOlViVY6pEKGh2c%2FjlzL4ZE3RwMQYx%2FdSkV2ykOYaf1U4sQAanEiYRyEeL7UafS0SJoGpphoU7WfuhcoT%2FC9iM0KPUwWm1%2BRka3yb53ke3%2BZOYgPDFIP%2BTFI1pDDr9k%2Fg%2F2gOPj0CF8hxFjkKwZeo0%2BXRw61QhRKepnK9C7k20NJc9V092P1cnGv0W3g79bv1%2F8PGc1p7YWBpq7SbahPid7Rcrz&X-Amz-Signature=371d4e8942d4f60effa94a78929cf06492ecd58e0c5e4c5cd3e36062a669b812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGHQDRF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC7y8xcrrah%2FiJQ%2FL0kfeSnxj%2B2w0BvYg91Wa125RYLGwIhAKOjrxXV5%2BWtsDMNuxG0Y56lyMc3UIw%2Fv6oZFlucBpGUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSMRwQN7sv%2Bi4Pmn4q3AOrVflsc%2BX5ySmF5y%2Fqg6hGdF%2B3VTDpVR6Kj7JwfnJ8Iv1T8CdXhCdKu4vXEJOQrJXZAW3jcfw8Du6aAVesX%2BoC2nhvjYF8mFTp9XHtuSfrClCHXQ6F9HGBFtq9GLRg0A8ur1HzaNy4eptHMDkaFTlNQnL6WPr1kp1O8RT6prVEXFNgZcfASGSYnFT2C1HsmHEmg4VCJqbrl3zlnnrTRu7Kxr4BNIX06gRCbhXCpxt5RcDpv3c6s6SXF42qosz2Ttxqdot2peMkIwchyDMGIEhjKsXG%2FCCL4c7RMA5fBtPyF%2Fxs%2BBRoebveCfyo%2FQfU27iW25D88OE9tinsozGNIbC52M%2Bga%2FSWzPvrlOfHxEYS4iph6L6PG2ETs5lW6JheDVk8JeK8%2Btt6hmSxritLHx4dmTZxrUI5heD90RX%2Fcm2UMb3NNo8bCXyRbG3j36fJFdXms63G2%2FHhpxH7D6AwalUEt%2Bl4uSr%2FlekPMoBuSJ0sv%2BbGFUxx0MHBmJnUC%2FjaE2qS1H%2Fzv4p2rEe%2BXmPYF09VS%2Bh4AmEGTmOyitB09oNYtqX8%2FVYGtpXKWdTN58VJQd7OCWjD9EMMgiYMX6FtoHR8YWbyKr5F7%2B%2BEIeB7c4zfhMm%2F%2Bc7PdoHPucDu2TDJzaDEBjqkAdz6MDx5SB1D8RIVZFUIBzD1cqZ7aWG990LqZEU00kT1usM4OMOvBBObVh23XID%2B9ywJwy31hh08F6VzEQKk9pcHK2LQpf9B7fR1N0Ru%2B3V9MmK%2FxiLu0f%2Ft885nUCVK6YmCsX8u0n2tuISUOuNae%2FIkiEIg8AG%2BmblAf2yS2rZejA8g%2FS4l3Sp0SruT83VBBmVxiYQwh9%2Bmrw%2BQULKA2aU33qMl&X-Amz-Signature=7384e076eefb609742da817b873261168776ce87bbe0f65edbef963bf4205f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGHQDRF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC7y8xcrrah%2FiJQ%2FL0kfeSnxj%2B2w0BvYg91Wa125RYLGwIhAKOjrxXV5%2BWtsDMNuxG0Y56lyMc3UIw%2Fv6oZFlucBpGUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSMRwQN7sv%2Bi4Pmn4q3AOrVflsc%2BX5ySmF5y%2Fqg6hGdF%2B3VTDpVR6Kj7JwfnJ8Iv1T8CdXhCdKu4vXEJOQrJXZAW3jcfw8Du6aAVesX%2BoC2nhvjYF8mFTp9XHtuSfrClCHXQ6F9HGBFtq9GLRg0A8ur1HzaNy4eptHMDkaFTlNQnL6WPr1kp1O8RT6prVEXFNgZcfASGSYnFT2C1HsmHEmg4VCJqbrl3zlnnrTRu7Kxr4BNIX06gRCbhXCpxt5RcDpv3c6s6SXF42qosz2Ttxqdot2peMkIwchyDMGIEhjKsXG%2FCCL4c7RMA5fBtPyF%2Fxs%2BBRoebveCfyo%2FQfU27iW25D88OE9tinsozGNIbC52M%2Bga%2FSWzPvrlOfHxEYS4iph6L6PG2ETs5lW6JheDVk8JeK8%2Btt6hmSxritLHx4dmTZxrUI5heD90RX%2Fcm2UMb3NNo8bCXyRbG3j36fJFdXms63G2%2FHhpxH7D6AwalUEt%2Bl4uSr%2FlekPMoBuSJ0sv%2BbGFUxx0MHBmJnUC%2FjaE2qS1H%2Fzv4p2rEe%2BXmPYF09VS%2Bh4AmEGTmOyitB09oNYtqX8%2FVYGtpXKWdTN58VJQd7OCWjD9EMMgiYMX6FtoHR8YWbyKr5F7%2B%2BEIeB7c4zfhMm%2F%2Bc7PdoHPucDu2TDJzaDEBjqkAdz6MDx5SB1D8RIVZFUIBzD1cqZ7aWG990LqZEU00kT1usM4OMOvBBObVh23XID%2B9ywJwy31hh08F6VzEQKk9pcHK2LQpf9B7fR1N0Ru%2B3V9MmK%2FxiLu0f%2Ft885nUCVK6YmCsX8u0n2tuISUOuNae%2FIkiEIg8AG%2BmblAf2yS2rZejA8g%2FS4l3Sp0SruT83VBBmVxiYQwh9%2Bmrw%2BQULKA2aU33qMl&X-Amz-Signature=3ef287c563c91048e3458a1bee1ba764ecdff36681b4c5d53678f61f33698280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGHQDRF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC7y8xcrrah%2FiJQ%2FL0kfeSnxj%2B2w0BvYg91Wa125RYLGwIhAKOjrxXV5%2BWtsDMNuxG0Y56lyMc3UIw%2Fv6oZFlucBpGUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSMRwQN7sv%2Bi4Pmn4q3AOrVflsc%2BX5ySmF5y%2Fqg6hGdF%2B3VTDpVR6Kj7JwfnJ8Iv1T8CdXhCdKu4vXEJOQrJXZAW3jcfw8Du6aAVesX%2BoC2nhvjYF8mFTp9XHtuSfrClCHXQ6F9HGBFtq9GLRg0A8ur1HzaNy4eptHMDkaFTlNQnL6WPr1kp1O8RT6prVEXFNgZcfASGSYnFT2C1HsmHEmg4VCJqbrl3zlnnrTRu7Kxr4BNIX06gRCbhXCpxt5RcDpv3c6s6SXF42qosz2Ttxqdot2peMkIwchyDMGIEhjKsXG%2FCCL4c7RMA5fBtPyF%2Fxs%2BBRoebveCfyo%2FQfU27iW25D88OE9tinsozGNIbC52M%2Bga%2FSWzPvrlOfHxEYS4iph6L6PG2ETs5lW6JheDVk8JeK8%2Btt6hmSxritLHx4dmTZxrUI5heD90RX%2Fcm2UMb3NNo8bCXyRbG3j36fJFdXms63G2%2FHhpxH7D6AwalUEt%2Bl4uSr%2FlekPMoBuSJ0sv%2BbGFUxx0MHBmJnUC%2FjaE2qS1H%2Fzv4p2rEe%2BXmPYF09VS%2Bh4AmEGTmOyitB09oNYtqX8%2FVYGtpXKWdTN58VJQd7OCWjD9EMMgiYMX6FtoHR8YWbyKr5F7%2B%2BEIeB7c4zfhMm%2F%2Bc7PdoHPucDu2TDJzaDEBjqkAdz6MDx5SB1D8RIVZFUIBzD1cqZ7aWG990LqZEU00kT1usM4OMOvBBObVh23XID%2B9ywJwy31hh08F6VzEQKk9pcHK2LQpf9B7fR1N0Ru%2B3V9MmK%2FxiLu0f%2Ft885nUCVK6YmCsX8u0n2tuISUOuNae%2FIkiEIg8AG%2BmblAf2yS2rZejA8g%2FS4l3Sp0SruT83VBBmVxiYQwh9%2Bmrw%2BQULKA2aU33qMl&X-Amz-Signature=865c2e28f4ca9c14f64716932c92aca03056f5cf6cc85df099dccffccba95a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGHQDRF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC7y8xcrrah%2FiJQ%2FL0kfeSnxj%2B2w0BvYg91Wa125RYLGwIhAKOjrxXV5%2BWtsDMNuxG0Y56lyMc3UIw%2Fv6oZFlucBpGUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSMRwQN7sv%2Bi4Pmn4q3AOrVflsc%2BX5ySmF5y%2Fqg6hGdF%2B3VTDpVR6Kj7JwfnJ8Iv1T8CdXhCdKu4vXEJOQrJXZAW3jcfw8Du6aAVesX%2BoC2nhvjYF8mFTp9XHtuSfrClCHXQ6F9HGBFtq9GLRg0A8ur1HzaNy4eptHMDkaFTlNQnL6WPr1kp1O8RT6prVEXFNgZcfASGSYnFT2C1HsmHEmg4VCJqbrl3zlnnrTRu7Kxr4BNIX06gRCbhXCpxt5RcDpv3c6s6SXF42qosz2Ttxqdot2peMkIwchyDMGIEhjKsXG%2FCCL4c7RMA5fBtPyF%2Fxs%2BBRoebveCfyo%2FQfU27iW25D88OE9tinsozGNIbC52M%2Bga%2FSWzPvrlOfHxEYS4iph6L6PG2ETs5lW6JheDVk8JeK8%2Btt6hmSxritLHx4dmTZxrUI5heD90RX%2Fcm2UMb3NNo8bCXyRbG3j36fJFdXms63G2%2FHhpxH7D6AwalUEt%2Bl4uSr%2FlekPMoBuSJ0sv%2BbGFUxx0MHBmJnUC%2FjaE2qS1H%2Fzv4p2rEe%2BXmPYF09VS%2Bh4AmEGTmOyitB09oNYtqX8%2FVYGtpXKWdTN58VJQd7OCWjD9EMMgiYMX6FtoHR8YWbyKr5F7%2B%2BEIeB7c4zfhMm%2F%2Bc7PdoHPucDu2TDJzaDEBjqkAdz6MDx5SB1D8RIVZFUIBzD1cqZ7aWG990LqZEU00kT1usM4OMOvBBObVh23XID%2B9ywJwy31hh08F6VzEQKk9pcHK2LQpf9B7fR1N0Ru%2B3V9MmK%2FxiLu0f%2Ft885nUCVK6YmCsX8u0n2tuISUOuNae%2FIkiEIg8AG%2BmblAf2yS2rZejA8g%2FS4l3Sp0SruT83VBBmVxiYQwh9%2Bmrw%2BQULKA2aU33qMl&X-Amz-Signature=f1bf3d649b1defd70ef6d1c5e64b368209123b08ab14d33e462ce1582443d7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGHQDRF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC7y8xcrrah%2FiJQ%2FL0kfeSnxj%2B2w0BvYg91Wa125RYLGwIhAKOjrxXV5%2BWtsDMNuxG0Y56lyMc3UIw%2Fv6oZFlucBpGUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSMRwQN7sv%2Bi4Pmn4q3AOrVflsc%2BX5ySmF5y%2Fqg6hGdF%2B3VTDpVR6Kj7JwfnJ8Iv1T8CdXhCdKu4vXEJOQrJXZAW3jcfw8Du6aAVesX%2BoC2nhvjYF8mFTp9XHtuSfrClCHXQ6F9HGBFtq9GLRg0A8ur1HzaNy4eptHMDkaFTlNQnL6WPr1kp1O8RT6prVEXFNgZcfASGSYnFT2C1HsmHEmg4VCJqbrl3zlnnrTRu7Kxr4BNIX06gRCbhXCpxt5RcDpv3c6s6SXF42qosz2Ttxqdot2peMkIwchyDMGIEhjKsXG%2FCCL4c7RMA5fBtPyF%2Fxs%2BBRoebveCfyo%2FQfU27iW25D88OE9tinsozGNIbC52M%2Bga%2FSWzPvrlOfHxEYS4iph6L6PG2ETs5lW6JheDVk8JeK8%2Btt6hmSxritLHx4dmTZxrUI5heD90RX%2Fcm2UMb3NNo8bCXyRbG3j36fJFdXms63G2%2FHhpxH7D6AwalUEt%2Bl4uSr%2FlekPMoBuSJ0sv%2BbGFUxx0MHBmJnUC%2FjaE2qS1H%2Fzv4p2rEe%2BXmPYF09VS%2Bh4AmEGTmOyitB09oNYtqX8%2FVYGtpXKWdTN58VJQd7OCWjD9EMMgiYMX6FtoHR8YWbyKr5F7%2B%2BEIeB7c4zfhMm%2F%2Bc7PdoHPucDu2TDJzaDEBjqkAdz6MDx5SB1D8RIVZFUIBzD1cqZ7aWG990LqZEU00kT1usM4OMOvBBObVh23XID%2B9ywJwy31hh08F6VzEQKk9pcHK2LQpf9B7fR1N0Ru%2B3V9MmK%2FxiLu0f%2Ft885nUCVK6YmCsX8u0n2tuISUOuNae%2FIkiEIg8AG%2BmblAf2yS2rZejA8g%2FS4l3Sp0SruT83VBBmVxiYQwh9%2Bmrw%2BQULKA2aU33qMl&X-Amz-Signature=6b5fc86e0c8ad79f4adccd5eafc9c3197b91ec4eec3d542b729f0976dc9e1be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGHQDRF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC7y8xcrrah%2FiJQ%2FL0kfeSnxj%2B2w0BvYg91Wa125RYLGwIhAKOjrxXV5%2BWtsDMNuxG0Y56lyMc3UIw%2Fv6oZFlucBpGUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSMRwQN7sv%2Bi4Pmn4q3AOrVflsc%2BX5ySmF5y%2Fqg6hGdF%2B3VTDpVR6Kj7JwfnJ8Iv1T8CdXhCdKu4vXEJOQrJXZAW3jcfw8Du6aAVesX%2BoC2nhvjYF8mFTp9XHtuSfrClCHXQ6F9HGBFtq9GLRg0A8ur1HzaNy4eptHMDkaFTlNQnL6WPr1kp1O8RT6prVEXFNgZcfASGSYnFT2C1HsmHEmg4VCJqbrl3zlnnrTRu7Kxr4BNIX06gRCbhXCpxt5RcDpv3c6s6SXF42qosz2Ttxqdot2peMkIwchyDMGIEhjKsXG%2FCCL4c7RMA5fBtPyF%2Fxs%2BBRoebveCfyo%2FQfU27iW25D88OE9tinsozGNIbC52M%2Bga%2FSWzPvrlOfHxEYS4iph6L6PG2ETs5lW6JheDVk8JeK8%2Btt6hmSxritLHx4dmTZxrUI5heD90RX%2Fcm2UMb3NNo8bCXyRbG3j36fJFdXms63G2%2FHhpxH7D6AwalUEt%2Bl4uSr%2FlekPMoBuSJ0sv%2BbGFUxx0MHBmJnUC%2FjaE2qS1H%2Fzv4p2rEe%2BXmPYF09VS%2Bh4AmEGTmOyitB09oNYtqX8%2FVYGtpXKWdTN58VJQd7OCWjD9EMMgiYMX6FtoHR8YWbyKr5F7%2B%2BEIeB7c4zfhMm%2F%2Bc7PdoHPucDu2TDJzaDEBjqkAdz6MDx5SB1D8RIVZFUIBzD1cqZ7aWG990LqZEU00kT1usM4OMOvBBObVh23XID%2B9ywJwy31hh08F6VzEQKk9pcHK2LQpf9B7fR1N0Ru%2B3V9MmK%2FxiLu0f%2Ft885nUCVK6YmCsX8u0n2tuISUOuNae%2FIkiEIg8AG%2BmblAf2yS2rZejA8g%2FS4l3Sp0SruT83VBBmVxiYQwh9%2Bmrw%2BQULKA2aU33qMl&X-Amz-Signature=698c8eb19ab3d8e5ba5c944ed53e41bdfc3c54bb73a6f8e16242f277937b5f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGHQDRF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC7y8xcrrah%2FiJQ%2FL0kfeSnxj%2B2w0BvYg91Wa125RYLGwIhAKOjrxXV5%2BWtsDMNuxG0Y56lyMc3UIw%2Fv6oZFlucBpGUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSMRwQN7sv%2Bi4Pmn4q3AOrVflsc%2BX5ySmF5y%2Fqg6hGdF%2B3VTDpVR6Kj7JwfnJ8Iv1T8CdXhCdKu4vXEJOQrJXZAW3jcfw8Du6aAVesX%2BoC2nhvjYF8mFTp9XHtuSfrClCHXQ6F9HGBFtq9GLRg0A8ur1HzaNy4eptHMDkaFTlNQnL6WPr1kp1O8RT6prVEXFNgZcfASGSYnFT2C1HsmHEmg4VCJqbrl3zlnnrTRu7Kxr4BNIX06gRCbhXCpxt5RcDpv3c6s6SXF42qosz2Ttxqdot2peMkIwchyDMGIEhjKsXG%2FCCL4c7RMA5fBtPyF%2Fxs%2BBRoebveCfyo%2FQfU27iW25D88OE9tinsozGNIbC52M%2Bga%2FSWzPvrlOfHxEYS4iph6L6PG2ETs5lW6JheDVk8JeK8%2Btt6hmSxritLHx4dmTZxrUI5heD90RX%2Fcm2UMb3NNo8bCXyRbG3j36fJFdXms63G2%2FHhpxH7D6AwalUEt%2Bl4uSr%2FlekPMoBuSJ0sv%2BbGFUxx0MHBmJnUC%2FjaE2qS1H%2Fzv4p2rEe%2BXmPYF09VS%2Bh4AmEGTmOyitB09oNYtqX8%2FVYGtpXKWdTN58VJQd7OCWjD9EMMgiYMX6FtoHR8YWbyKr5F7%2B%2BEIeB7c4zfhMm%2F%2Bc7PdoHPucDu2TDJzaDEBjqkAdz6MDx5SB1D8RIVZFUIBzD1cqZ7aWG990LqZEU00kT1usM4OMOvBBObVh23XID%2B9ywJwy31hh08F6VzEQKk9pcHK2LQpf9B7fR1N0Ru%2B3V9MmK%2FxiLu0f%2Ft885nUCVK6YmCsX8u0n2tuISUOuNae%2FIkiEIg8AG%2BmblAf2yS2rZejA8g%2FS4l3Sp0SruT83VBBmVxiYQwh9%2Bmrw%2BQULKA2aU33qMl&X-Amz-Signature=a0b4d2585a08d3a752eb534eaaf08a155e6806621aea188977bd81f196920092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGHQDRF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC7y8xcrrah%2FiJQ%2FL0kfeSnxj%2B2w0BvYg91Wa125RYLGwIhAKOjrxXV5%2BWtsDMNuxG0Y56lyMc3UIw%2Fv6oZFlucBpGUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSMRwQN7sv%2Bi4Pmn4q3AOrVflsc%2BX5ySmF5y%2Fqg6hGdF%2B3VTDpVR6Kj7JwfnJ8Iv1T8CdXhCdKu4vXEJOQrJXZAW3jcfw8Du6aAVesX%2BoC2nhvjYF8mFTp9XHtuSfrClCHXQ6F9HGBFtq9GLRg0A8ur1HzaNy4eptHMDkaFTlNQnL6WPr1kp1O8RT6prVEXFNgZcfASGSYnFT2C1HsmHEmg4VCJqbrl3zlnnrTRu7Kxr4BNIX06gRCbhXCpxt5RcDpv3c6s6SXF42qosz2Ttxqdot2peMkIwchyDMGIEhjKsXG%2FCCL4c7RMA5fBtPyF%2Fxs%2BBRoebveCfyo%2FQfU27iW25D88OE9tinsozGNIbC52M%2Bga%2FSWzPvrlOfHxEYS4iph6L6PG2ETs5lW6JheDVk8JeK8%2Btt6hmSxritLHx4dmTZxrUI5heD90RX%2Fcm2UMb3NNo8bCXyRbG3j36fJFdXms63G2%2FHhpxH7D6AwalUEt%2Bl4uSr%2FlekPMoBuSJ0sv%2BbGFUxx0MHBmJnUC%2FjaE2qS1H%2Fzv4p2rEe%2BXmPYF09VS%2Bh4AmEGTmOyitB09oNYtqX8%2FVYGtpXKWdTN58VJQd7OCWjD9EMMgiYMX6FtoHR8YWbyKr5F7%2B%2BEIeB7c4zfhMm%2F%2Bc7PdoHPucDu2TDJzaDEBjqkAdz6MDx5SB1D8RIVZFUIBzD1cqZ7aWG990LqZEU00kT1usM4OMOvBBObVh23XID%2B9ywJwy31hh08F6VzEQKk9pcHK2LQpf9B7fR1N0Ru%2B3V9MmK%2FxiLu0f%2Ft885nUCVK6YmCsX8u0n2tuISUOuNae%2FIkiEIg8AG%2BmblAf2yS2rZejA8g%2FS4l3Sp0SruT83VBBmVxiYQwh9%2Bmrw%2BQULKA2aU33qMl&X-Amz-Signature=d054245103cc066c1d400180d9c5fdc836998fea7a758cce9263f9f7e10b94a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

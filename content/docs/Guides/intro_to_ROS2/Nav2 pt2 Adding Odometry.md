---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=41295ee49ce0e864092f022edf45b42a4b04d8bb0776d489bf4e9f7375ecb7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=b85fc581149b04964aa3b431d786bed1d9e96d67a3554c38e5cf5c9d39345a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=25b17acd12f5e63458e52d2a86dc191b99b430bde6192b673f1be760331b3b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=3696c71d664b839f613c3cfdd463211b8d60cbe986d2aa149e026e805fb73a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=e681977326872f803e6fd2c9c233dc5fe2931f02e895a110d66dc8c5869f0788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=43b213f27a315563e85dd666d80e8855a7e432c96e7be00d0d036fd6cfabd07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=45df7cc912a9e95d2f44e874a2708120c21ec17adbb55c855e04f4273145befb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=29a344f715d699684825a9fe7e235ea9afb96c5aa496048ad0f716e9f4733176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=178abed81934a50e243b136c7612a827cc762c0493dc4a61716a84308a093e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=0c332d4099c97fd31de94d1e88a0f6ef5f4c179ac3d823cca93ae66c7f3800e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4RYOAK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCJ%2BFw3pjKWOp1z%2BQkhRWEe7YwaQ8roxneFIadiplLmYQIgZruPf6GILDc09THd8ZD3kazjKq%2F6VmUiDGygBW6IZA4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObu4eV14UKmzHM9aSrcAx2b6mYhGjXyZSewK2VYXUmjTdEmHvvE%2B5NNmjjS8nFKFLNwNlDJDPxaG5KliW%2FieJPaE8%2BW%2BANEVzoifOnFlu0UlZx2gZco9EdcK%2BYd246LhAGNO7GrC2XSMqG%2FMlVs4I90h18XPOf%2F1K%2F7VkOc63Gze4Ych5vN0XCfiAteEqFytHG7wbxT6Bii9i7sMMZk33EQyPfxsqDe%2FTxLRBExGyz0JLWbJg1K1kp9YnYAGywNzCVQMf6A5KXc5mOMP0Erf%2FxaFZjaAAqDBFTADn73PjbKFfv%2BENI5342CVqKagWBxuSFV5aBbKJSzYaBt3wDBeToVza40sYXQv0wNcX%2FUIX7ZUhYQeQeKnbNbK%2FDvJ0AUvesq%2FsAPCFjGOhqExGq0rNwzj8EN1Uhom7TNyMzXbCxTu9Qzlkpu5lCWXjF%2FCvsbOahBk9EgQMb1A4hrXS5OeJleBCiMgRaJ7mXkLKCmVyNgogZXsC9t8AGM0N7mB94Cjh31m6%2BUoa2N9nXB%2F07rSm6Th5d3xmRi%2FnpxUHeVoe5%2BjhRGyo0Xq79hDP6Hx5xpPA80RsWeoI9NO%2FQZF9YnC%2BVDvBHJDw9ERlaEs2NKegMm4SqjjZbWmyBcougR1TFx7WIdd50FJURXv0paMPq10cQGOqUB4J4XaUCOjYO%2FKLDlS3CX0G3gF3HtNUSXruXkC%2FEPatm54wIq4nWS8xeoZ2i6FqYA1cT2752f%2Bg0nyMQk0YVmFxchKQiejPq0cWKemWdiiLo%2BWPKM0Fa8iUZvyNdpR97%2FGv5r21aijP5z27DY1tD9D1Bkc2hZx851dQZmGIgiYtiIN3TT9A7p4ov7mns%2BJyAMFbpTy8LKh3HpbfhbJycdGJuvKvyc&X-Amz-Signature=1bd310dbcee133108d12117c0f5bb2648b8af0de0a99948f51855081d114bef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LXMZQDX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDXeJJAkSW05P%2B%2BdLKmzB1bCFMALh2kA6ZkvRcP8Fj7FgIhAO38t%2BeHDmlOmoUKQvsiiYsoO6Tk7MZVkdjgb67OjHXzKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJGA8GS1BQXdFnBnYq3AMrNo%2B6wfRZ%2F%2BY4ZIohwEe9utouca2FCM1H%2B6%2FnGNR3mvb8ZzA8YRxc4oRKIxKuCmpLRVH7mJtXUyhHx7T%2FmMzJs1fzw78Ddf%2BhQ2%2Fe6dtrZhjDXp5nMKu49VkDV4Dx5juZmy8NvlWiuG0txhhA1XV6yAFv1IKnyq1L8AT4d%2BLjezJK7eXP6TD%2BoTovxcPYGMrDahmZ4XEQZKF6MZn0WhLDVwHRbVIXtOxVJN4OjeJJTklMFjBh6JwXdZeAqSr%2B%2F9EWNSwz33uDDHcliWsL%2Fy%2BD9LUgM%2BvaOb6e5cqpTqNx5Qd5%2BJU8wa85myzvdqSwmTGfHYOJyukMsczm2v%2B8HzYERw6jSOFLsEh1IUb0jkD8p9eT8EP5aDnXLBUUDk%2BybbWrtCUZf3%2FfDcpwrVP%2FNn4q4pqeD6GJLzHOMIBNdCc2S49NDRvpu55%2Bda%2F9nQ7Oe5IXUitHe5IiT1ax6GBt%2F5vIqMhdldsIu%2F5yIVMwf0G%2F%2Fv%2FSaHgu%2FwQFmmoruxJvgZPmk4lzX0TNUl08PjHl7YAOTRfW4Rl16EfNiD9n%2B4Ot6JyVU9br1dlSskBCGVh9%2BnWTtWysQaRcQMQg%2FoMtrNu4309QoCfOcwnmeK1Y1xeIZr3XdrwFAbbvNd6mRzCCttHEBjqkAU%2FPmcehhDIY3DWhcSmxK47yVn6Yv6rYo1mmXZOkPcVVrak5SeiRcXe%2FrbFqhADBx73cUeLzhQfIP%2FcUXgUX2U3qu7P1%2FkOP1pkh0%2Fbsnil30xBV300JjhjTHlCshm06wzhgnpp6n9pEX51FLAaDf%2BeWCGZzsC3pqkFLg1CbkdLVLO7REux9L8wuUBNx4NGN%2F3L5a2T0VDXtR2Maq9Xsi71UzpD4&X-Amz-Signature=c061504b83b088a86cd9a27476aae25913fffcf60090d5b5042f7ceeb43f1221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LXMZQDX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDXeJJAkSW05P%2B%2BdLKmzB1bCFMALh2kA6ZkvRcP8Fj7FgIhAO38t%2BeHDmlOmoUKQvsiiYsoO6Tk7MZVkdjgb67OjHXzKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJGA8GS1BQXdFnBnYq3AMrNo%2B6wfRZ%2F%2BY4ZIohwEe9utouca2FCM1H%2B6%2FnGNR3mvb8ZzA8YRxc4oRKIxKuCmpLRVH7mJtXUyhHx7T%2FmMzJs1fzw78Ddf%2BhQ2%2Fe6dtrZhjDXp5nMKu49VkDV4Dx5juZmy8NvlWiuG0txhhA1XV6yAFv1IKnyq1L8AT4d%2BLjezJK7eXP6TD%2BoTovxcPYGMrDahmZ4XEQZKF6MZn0WhLDVwHRbVIXtOxVJN4OjeJJTklMFjBh6JwXdZeAqSr%2B%2F9EWNSwz33uDDHcliWsL%2Fy%2BD9LUgM%2BvaOb6e5cqpTqNx5Qd5%2BJU8wa85myzvdqSwmTGfHYOJyukMsczm2v%2B8HzYERw6jSOFLsEh1IUb0jkD8p9eT8EP5aDnXLBUUDk%2BybbWrtCUZf3%2FfDcpwrVP%2FNn4q4pqeD6GJLzHOMIBNdCc2S49NDRvpu55%2Bda%2F9nQ7Oe5IXUitHe5IiT1ax6GBt%2F5vIqMhdldsIu%2F5yIVMwf0G%2F%2Fv%2FSaHgu%2FwQFmmoruxJvgZPmk4lzX0TNUl08PjHl7YAOTRfW4Rl16EfNiD9n%2B4Ot6JyVU9br1dlSskBCGVh9%2BnWTtWysQaRcQMQg%2FoMtrNu4309QoCfOcwnmeK1Y1xeIZr3XdrwFAbbvNd6mRzCCttHEBjqkAU%2FPmcehhDIY3DWhcSmxK47yVn6Yv6rYo1mmXZOkPcVVrak5SeiRcXe%2FrbFqhADBx73cUeLzhQfIP%2FcUXgUX2U3qu7P1%2FkOP1pkh0%2Fbsnil30xBV300JjhjTHlCshm06wzhgnpp6n9pEX51FLAaDf%2BeWCGZzsC3pqkFLg1CbkdLVLO7REux9L8wuUBNx4NGN%2F3L5a2T0VDXtR2Maq9Xsi71UzpD4&X-Amz-Signature=3ffeb50f0b9dbc08000af91dd281cf7ea6743fc9c8b2d84b4a63d4d258cf371d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LXMZQDX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDXeJJAkSW05P%2B%2BdLKmzB1bCFMALh2kA6ZkvRcP8Fj7FgIhAO38t%2BeHDmlOmoUKQvsiiYsoO6Tk7MZVkdjgb67OjHXzKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJGA8GS1BQXdFnBnYq3AMrNo%2B6wfRZ%2F%2BY4ZIohwEe9utouca2FCM1H%2B6%2FnGNR3mvb8ZzA8YRxc4oRKIxKuCmpLRVH7mJtXUyhHx7T%2FmMzJs1fzw78Ddf%2BhQ2%2Fe6dtrZhjDXp5nMKu49VkDV4Dx5juZmy8NvlWiuG0txhhA1XV6yAFv1IKnyq1L8AT4d%2BLjezJK7eXP6TD%2BoTovxcPYGMrDahmZ4XEQZKF6MZn0WhLDVwHRbVIXtOxVJN4OjeJJTklMFjBh6JwXdZeAqSr%2B%2F9EWNSwz33uDDHcliWsL%2Fy%2BD9LUgM%2BvaOb6e5cqpTqNx5Qd5%2BJU8wa85myzvdqSwmTGfHYOJyukMsczm2v%2B8HzYERw6jSOFLsEh1IUb0jkD8p9eT8EP5aDnXLBUUDk%2BybbWrtCUZf3%2FfDcpwrVP%2FNn4q4pqeD6GJLzHOMIBNdCc2S49NDRvpu55%2Bda%2F9nQ7Oe5IXUitHe5IiT1ax6GBt%2F5vIqMhdldsIu%2F5yIVMwf0G%2F%2Fv%2FSaHgu%2FwQFmmoruxJvgZPmk4lzX0TNUl08PjHl7YAOTRfW4Rl16EfNiD9n%2B4Ot6JyVU9br1dlSskBCGVh9%2BnWTtWysQaRcQMQg%2FoMtrNu4309QoCfOcwnmeK1Y1xeIZr3XdrwFAbbvNd6mRzCCttHEBjqkAU%2FPmcehhDIY3DWhcSmxK47yVn6Yv6rYo1mmXZOkPcVVrak5SeiRcXe%2FrbFqhADBx73cUeLzhQfIP%2FcUXgUX2U3qu7P1%2FkOP1pkh0%2Fbsnil30xBV300JjhjTHlCshm06wzhgnpp6n9pEX51FLAaDf%2BeWCGZzsC3pqkFLg1CbkdLVLO7REux9L8wuUBNx4NGN%2F3L5a2T0VDXtR2Maq9Xsi71UzpD4&X-Amz-Signature=96aeecd22c0ed19b5f8bf96d509a4be6b41211b4e25a4bf8070f8c1153f7f2fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LXMZQDX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDXeJJAkSW05P%2B%2BdLKmzB1bCFMALh2kA6ZkvRcP8Fj7FgIhAO38t%2BeHDmlOmoUKQvsiiYsoO6Tk7MZVkdjgb67OjHXzKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJGA8GS1BQXdFnBnYq3AMrNo%2B6wfRZ%2F%2BY4ZIohwEe9utouca2FCM1H%2B6%2FnGNR3mvb8ZzA8YRxc4oRKIxKuCmpLRVH7mJtXUyhHx7T%2FmMzJs1fzw78Ddf%2BhQ2%2Fe6dtrZhjDXp5nMKu49VkDV4Dx5juZmy8NvlWiuG0txhhA1XV6yAFv1IKnyq1L8AT4d%2BLjezJK7eXP6TD%2BoTovxcPYGMrDahmZ4XEQZKF6MZn0WhLDVwHRbVIXtOxVJN4OjeJJTklMFjBh6JwXdZeAqSr%2B%2F9EWNSwz33uDDHcliWsL%2Fy%2BD9LUgM%2BvaOb6e5cqpTqNx5Qd5%2BJU8wa85myzvdqSwmTGfHYOJyukMsczm2v%2B8HzYERw6jSOFLsEh1IUb0jkD8p9eT8EP5aDnXLBUUDk%2BybbWrtCUZf3%2FfDcpwrVP%2FNn4q4pqeD6GJLzHOMIBNdCc2S49NDRvpu55%2Bda%2F9nQ7Oe5IXUitHe5IiT1ax6GBt%2F5vIqMhdldsIu%2F5yIVMwf0G%2F%2Fv%2FSaHgu%2FwQFmmoruxJvgZPmk4lzX0TNUl08PjHl7YAOTRfW4Rl16EfNiD9n%2B4Ot6JyVU9br1dlSskBCGVh9%2BnWTtWysQaRcQMQg%2FoMtrNu4309QoCfOcwnmeK1Y1xeIZr3XdrwFAbbvNd6mRzCCttHEBjqkAU%2FPmcehhDIY3DWhcSmxK47yVn6Yv6rYo1mmXZOkPcVVrak5SeiRcXe%2FrbFqhADBx73cUeLzhQfIP%2FcUXgUX2U3qu7P1%2FkOP1pkh0%2Fbsnil30xBV300JjhjTHlCshm06wzhgnpp6n9pEX51FLAaDf%2BeWCGZzsC3pqkFLg1CbkdLVLO7REux9L8wuUBNx4NGN%2F3L5a2T0VDXtR2Maq9Xsi71UzpD4&X-Amz-Signature=9b9a67c6aa422031499c6266e06c3c9859fb46e0f3d31ede64983e8690c548fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LXMZQDX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDXeJJAkSW05P%2B%2BdLKmzB1bCFMALh2kA6ZkvRcP8Fj7FgIhAO38t%2BeHDmlOmoUKQvsiiYsoO6Tk7MZVkdjgb67OjHXzKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJGA8GS1BQXdFnBnYq3AMrNo%2B6wfRZ%2F%2BY4ZIohwEe9utouca2FCM1H%2B6%2FnGNR3mvb8ZzA8YRxc4oRKIxKuCmpLRVH7mJtXUyhHx7T%2FmMzJs1fzw78Ddf%2BhQ2%2Fe6dtrZhjDXp5nMKu49VkDV4Dx5juZmy8NvlWiuG0txhhA1XV6yAFv1IKnyq1L8AT4d%2BLjezJK7eXP6TD%2BoTovxcPYGMrDahmZ4XEQZKF6MZn0WhLDVwHRbVIXtOxVJN4OjeJJTklMFjBh6JwXdZeAqSr%2B%2F9EWNSwz33uDDHcliWsL%2Fy%2BD9LUgM%2BvaOb6e5cqpTqNx5Qd5%2BJU8wa85myzvdqSwmTGfHYOJyukMsczm2v%2B8HzYERw6jSOFLsEh1IUb0jkD8p9eT8EP5aDnXLBUUDk%2BybbWrtCUZf3%2FfDcpwrVP%2FNn4q4pqeD6GJLzHOMIBNdCc2S49NDRvpu55%2Bda%2F9nQ7Oe5IXUitHe5IiT1ax6GBt%2F5vIqMhdldsIu%2F5yIVMwf0G%2F%2Fv%2FSaHgu%2FwQFmmoruxJvgZPmk4lzX0TNUl08PjHl7YAOTRfW4Rl16EfNiD9n%2B4Ot6JyVU9br1dlSskBCGVh9%2BnWTtWysQaRcQMQg%2FoMtrNu4309QoCfOcwnmeK1Y1xeIZr3XdrwFAbbvNd6mRzCCttHEBjqkAU%2FPmcehhDIY3DWhcSmxK47yVn6Yv6rYo1mmXZOkPcVVrak5SeiRcXe%2FrbFqhADBx73cUeLzhQfIP%2FcUXgUX2U3qu7P1%2FkOP1pkh0%2Fbsnil30xBV300JjhjTHlCshm06wzhgnpp6n9pEX51FLAaDf%2BeWCGZzsC3pqkFLg1CbkdLVLO7REux9L8wuUBNx4NGN%2F3L5a2T0VDXtR2Maq9Xsi71UzpD4&X-Amz-Signature=2d45afb882a3c051e1922b0a811cea529f7585d00a9d585171bd1b0f1b073f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LXMZQDX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDXeJJAkSW05P%2B%2BdLKmzB1bCFMALh2kA6ZkvRcP8Fj7FgIhAO38t%2BeHDmlOmoUKQvsiiYsoO6Tk7MZVkdjgb67OjHXzKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJGA8GS1BQXdFnBnYq3AMrNo%2B6wfRZ%2F%2BY4ZIohwEe9utouca2FCM1H%2B6%2FnGNR3mvb8ZzA8YRxc4oRKIxKuCmpLRVH7mJtXUyhHx7T%2FmMzJs1fzw78Ddf%2BhQ2%2Fe6dtrZhjDXp5nMKu49VkDV4Dx5juZmy8NvlWiuG0txhhA1XV6yAFv1IKnyq1L8AT4d%2BLjezJK7eXP6TD%2BoTovxcPYGMrDahmZ4XEQZKF6MZn0WhLDVwHRbVIXtOxVJN4OjeJJTklMFjBh6JwXdZeAqSr%2B%2F9EWNSwz33uDDHcliWsL%2Fy%2BD9LUgM%2BvaOb6e5cqpTqNx5Qd5%2BJU8wa85myzvdqSwmTGfHYOJyukMsczm2v%2B8HzYERw6jSOFLsEh1IUb0jkD8p9eT8EP5aDnXLBUUDk%2BybbWrtCUZf3%2FfDcpwrVP%2FNn4q4pqeD6GJLzHOMIBNdCc2S49NDRvpu55%2Bda%2F9nQ7Oe5IXUitHe5IiT1ax6GBt%2F5vIqMhdldsIu%2F5yIVMwf0G%2F%2Fv%2FSaHgu%2FwQFmmoruxJvgZPmk4lzX0TNUl08PjHl7YAOTRfW4Rl16EfNiD9n%2B4Ot6JyVU9br1dlSskBCGVh9%2BnWTtWysQaRcQMQg%2FoMtrNu4309QoCfOcwnmeK1Y1xeIZr3XdrwFAbbvNd6mRzCCttHEBjqkAU%2FPmcehhDIY3DWhcSmxK47yVn6Yv6rYo1mmXZOkPcVVrak5SeiRcXe%2FrbFqhADBx73cUeLzhQfIP%2FcUXgUX2U3qu7P1%2FkOP1pkh0%2Fbsnil30xBV300JjhjTHlCshm06wzhgnpp6n9pEX51FLAaDf%2BeWCGZzsC3pqkFLg1CbkdLVLO7REux9L8wuUBNx4NGN%2F3L5a2T0VDXtR2Maq9Xsi71UzpD4&X-Amz-Signature=ca863036e5de881e980b8eec263c599bfb95529986d617f804a62c80959b40e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LXMZQDX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDXeJJAkSW05P%2B%2BdLKmzB1bCFMALh2kA6ZkvRcP8Fj7FgIhAO38t%2BeHDmlOmoUKQvsiiYsoO6Tk7MZVkdjgb67OjHXzKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJGA8GS1BQXdFnBnYq3AMrNo%2B6wfRZ%2F%2BY4ZIohwEe9utouca2FCM1H%2B6%2FnGNR3mvb8ZzA8YRxc4oRKIxKuCmpLRVH7mJtXUyhHx7T%2FmMzJs1fzw78Ddf%2BhQ2%2Fe6dtrZhjDXp5nMKu49VkDV4Dx5juZmy8NvlWiuG0txhhA1XV6yAFv1IKnyq1L8AT4d%2BLjezJK7eXP6TD%2BoTovxcPYGMrDahmZ4XEQZKF6MZn0WhLDVwHRbVIXtOxVJN4OjeJJTklMFjBh6JwXdZeAqSr%2B%2F9EWNSwz33uDDHcliWsL%2Fy%2BD9LUgM%2BvaOb6e5cqpTqNx5Qd5%2BJU8wa85myzvdqSwmTGfHYOJyukMsczm2v%2B8HzYERw6jSOFLsEh1IUb0jkD8p9eT8EP5aDnXLBUUDk%2BybbWrtCUZf3%2FfDcpwrVP%2FNn4q4pqeD6GJLzHOMIBNdCc2S49NDRvpu55%2Bda%2F9nQ7Oe5IXUitHe5IiT1ax6GBt%2F5vIqMhdldsIu%2F5yIVMwf0G%2F%2Fv%2FSaHgu%2FwQFmmoruxJvgZPmk4lzX0TNUl08PjHl7YAOTRfW4Rl16EfNiD9n%2B4Ot6JyVU9br1dlSskBCGVh9%2BnWTtWysQaRcQMQg%2FoMtrNu4309QoCfOcwnmeK1Y1xeIZr3XdrwFAbbvNd6mRzCCttHEBjqkAU%2FPmcehhDIY3DWhcSmxK47yVn6Yv6rYo1mmXZOkPcVVrak5SeiRcXe%2FrbFqhADBx73cUeLzhQfIP%2FcUXgUX2U3qu7P1%2FkOP1pkh0%2Fbsnil30xBV300JjhjTHlCshm06wzhgnpp6n9pEX51FLAaDf%2BeWCGZzsC3pqkFLg1CbkdLVLO7REux9L8wuUBNx4NGN%2F3L5a2T0VDXtR2Maq9Xsi71UzpD4&X-Amz-Signature=9250ea7d02e659e9beeb7fdbf2c20971b6cc43b68fa5d8b739fa5f2da4260573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LXMZQDX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDXeJJAkSW05P%2B%2BdLKmzB1bCFMALh2kA6ZkvRcP8Fj7FgIhAO38t%2BeHDmlOmoUKQvsiiYsoO6Tk7MZVkdjgb67OjHXzKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJGA8GS1BQXdFnBnYq3AMrNo%2B6wfRZ%2F%2BY4ZIohwEe9utouca2FCM1H%2B6%2FnGNR3mvb8ZzA8YRxc4oRKIxKuCmpLRVH7mJtXUyhHx7T%2FmMzJs1fzw78Ddf%2BhQ2%2Fe6dtrZhjDXp5nMKu49VkDV4Dx5juZmy8NvlWiuG0txhhA1XV6yAFv1IKnyq1L8AT4d%2BLjezJK7eXP6TD%2BoTovxcPYGMrDahmZ4XEQZKF6MZn0WhLDVwHRbVIXtOxVJN4OjeJJTklMFjBh6JwXdZeAqSr%2B%2F9EWNSwz33uDDHcliWsL%2Fy%2BD9LUgM%2BvaOb6e5cqpTqNx5Qd5%2BJU8wa85myzvdqSwmTGfHYOJyukMsczm2v%2B8HzYERw6jSOFLsEh1IUb0jkD8p9eT8EP5aDnXLBUUDk%2BybbWrtCUZf3%2FfDcpwrVP%2FNn4q4pqeD6GJLzHOMIBNdCc2S49NDRvpu55%2Bda%2F9nQ7Oe5IXUitHe5IiT1ax6GBt%2F5vIqMhdldsIu%2F5yIVMwf0G%2F%2Fv%2FSaHgu%2FwQFmmoruxJvgZPmk4lzX0TNUl08PjHl7YAOTRfW4Rl16EfNiD9n%2B4Ot6JyVU9br1dlSskBCGVh9%2BnWTtWysQaRcQMQg%2FoMtrNu4309QoCfOcwnmeK1Y1xeIZr3XdrwFAbbvNd6mRzCCttHEBjqkAU%2FPmcehhDIY3DWhcSmxK47yVn6Yv6rYo1mmXZOkPcVVrak5SeiRcXe%2FrbFqhADBx73cUeLzhQfIP%2FcUXgUX2U3qu7P1%2FkOP1pkh0%2Fbsnil30xBV300JjhjTHlCshm06wzhgnpp6n9pEX51FLAaDf%2BeWCGZzsC3pqkFLg1CbkdLVLO7REux9L8wuUBNx4NGN%2F3L5a2T0VDXtR2Maq9Xsi71UzpD4&X-Amz-Signature=753b4a49fc26763210bba4fc141cbdc92df6550f8c49e392d40af5ac0854619d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LXMZQDX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDXeJJAkSW05P%2B%2BdLKmzB1bCFMALh2kA6ZkvRcP8Fj7FgIhAO38t%2BeHDmlOmoUKQvsiiYsoO6Tk7MZVkdjgb67OjHXzKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJGA8GS1BQXdFnBnYq3AMrNo%2B6wfRZ%2F%2BY4ZIohwEe9utouca2FCM1H%2B6%2FnGNR3mvb8ZzA8YRxc4oRKIxKuCmpLRVH7mJtXUyhHx7T%2FmMzJs1fzw78Ddf%2BhQ2%2Fe6dtrZhjDXp5nMKu49VkDV4Dx5juZmy8NvlWiuG0txhhA1XV6yAFv1IKnyq1L8AT4d%2BLjezJK7eXP6TD%2BoTovxcPYGMrDahmZ4XEQZKF6MZn0WhLDVwHRbVIXtOxVJN4OjeJJTklMFjBh6JwXdZeAqSr%2B%2F9EWNSwz33uDDHcliWsL%2Fy%2BD9LUgM%2BvaOb6e5cqpTqNx5Qd5%2BJU8wa85myzvdqSwmTGfHYOJyukMsczm2v%2B8HzYERw6jSOFLsEh1IUb0jkD8p9eT8EP5aDnXLBUUDk%2BybbWrtCUZf3%2FfDcpwrVP%2FNn4q4pqeD6GJLzHOMIBNdCc2S49NDRvpu55%2Bda%2F9nQ7Oe5IXUitHe5IiT1ax6GBt%2F5vIqMhdldsIu%2F5yIVMwf0G%2F%2Fv%2FSaHgu%2FwQFmmoruxJvgZPmk4lzX0TNUl08PjHl7YAOTRfW4Rl16EfNiD9n%2B4Ot6JyVU9br1dlSskBCGVh9%2BnWTtWysQaRcQMQg%2FoMtrNu4309QoCfOcwnmeK1Y1xeIZr3XdrwFAbbvNd6mRzCCttHEBjqkAU%2FPmcehhDIY3DWhcSmxK47yVn6Yv6rYo1mmXZOkPcVVrak5SeiRcXe%2FrbFqhADBx73cUeLzhQfIP%2FcUXgUX2U3qu7P1%2FkOP1pkh0%2Fbsnil30xBV300JjhjTHlCshm06wzhgnpp6n9pEX51FLAaDf%2BeWCGZzsC3pqkFLg1CbkdLVLO7REux9L8wuUBNx4NGN%2F3L5a2T0VDXtR2Maq9Xsi71UzpD4&X-Amz-Signature=a395d88038214fa46be2aeff5d43cf8cb2c3fbef826415f4767f9888914e5452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.

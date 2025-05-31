---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

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

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV7ZWHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlip%2FnulZO4kqv1QuKRN9xd3zzuKBjzeXhktph8XGt2AIgLNZn%2FtxtTpsH5wJAOaNFykD05dC6%2BQsU1sa04SnZYAQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5JSa3j8KvVygETyyrcA8uecAAbakqjld%2FKSQefFWq0ib6U6bGkgNupb1zy%2Bk11mxoM3QS1UY5FU7d4jkD48D%2F73PyjRgf1mxY8d8cfQLOMRQ%2BqeQI3olVcwUUilAlO4%2FLMGQh7DkHxo9Ui1KfMu2AgcwQQe5ttzN8rza7W7CecFTQcaUTOJb8uR%2BkZlghiEj%2BtInttMR%2FzOWmfVyy1tRtBzevMcvGEdjTNhJ2bTpnEej6SmqzWkI1nQTu9j%2F3bdie%2BmjjlQVtMgMHh8FhjFABIN6atDAijDBgkQ2N8AkmuWrnIK5Jw3wxlE5bA3xDax2lQtVDk3PBt0hZCEYRxnfbU6J8rPToVz2J2E1cIMSLm78%2BYe%2BriIvHfJ4IzXV59I0fBRLN5FCuMkePvot8CIfms6Q0N%2BwV7MSosxSxrRvziQoHF%2FznYdVPZefjSKxx%2BfSGp3clmlsf4AehDH7PLZdQIX3oBHACQq8oF0gKFDIpOC6haKLZDCAwZnnTgwdQGtUkZ64cljhMI0qfP5z1o%2BgzUiOE2FpiDvRo6GZEIaGIJ82is6RP3LlHiXlCUmzMR4t0Fbt88rCFaC5xoWTwmIJFJLGO53uTUD2Z46KXPmq3uj1GN9mZqY1Ap07gpuwwCRMpPUHhPiXnTyhCoMNai7MEGOqUB7lH%2B1aJ7vUcST4BqKCMBiHOirAxtbwSlw72MxAYXT37I5rn4dZ21q389nti%2BT24kq%2B%2BLXjbMEzAzCCXpMyT%2FoICmkCSYyN67W5IQy0SE6hXNpQqM9A0tdifnQBRPWwbPCl0hq560xjYGgh0b7%2B%2FjgVnwREzs2R1kg3VejqClK9b0BoOEIP7jb%2BulyyP%2FQ0Rrp5%2BfhgCA9286FC2HkCUAqAJqwRjP&X-Amz-Signature=3ef730369cd3f359beaeca6145007b286a1dc8ee88941d3c0f00d35b2de042a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV7ZWHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlip%2FnulZO4kqv1QuKRN9xd3zzuKBjzeXhktph8XGt2AIgLNZn%2FtxtTpsH5wJAOaNFykD05dC6%2BQsU1sa04SnZYAQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5JSa3j8KvVygETyyrcA8uecAAbakqjld%2FKSQefFWq0ib6U6bGkgNupb1zy%2Bk11mxoM3QS1UY5FU7d4jkD48D%2F73PyjRgf1mxY8d8cfQLOMRQ%2BqeQI3olVcwUUilAlO4%2FLMGQh7DkHxo9Ui1KfMu2AgcwQQe5ttzN8rza7W7CecFTQcaUTOJb8uR%2BkZlghiEj%2BtInttMR%2FzOWmfVyy1tRtBzevMcvGEdjTNhJ2bTpnEej6SmqzWkI1nQTu9j%2F3bdie%2BmjjlQVtMgMHh8FhjFABIN6atDAijDBgkQ2N8AkmuWrnIK5Jw3wxlE5bA3xDax2lQtVDk3PBt0hZCEYRxnfbU6J8rPToVz2J2E1cIMSLm78%2BYe%2BriIvHfJ4IzXV59I0fBRLN5FCuMkePvot8CIfms6Q0N%2BwV7MSosxSxrRvziQoHF%2FznYdVPZefjSKxx%2BfSGp3clmlsf4AehDH7PLZdQIX3oBHACQq8oF0gKFDIpOC6haKLZDCAwZnnTgwdQGtUkZ64cljhMI0qfP5z1o%2BgzUiOE2FpiDvRo6GZEIaGIJ82is6RP3LlHiXlCUmzMR4t0Fbt88rCFaC5xoWTwmIJFJLGO53uTUD2Z46KXPmq3uj1GN9mZqY1Ap07gpuwwCRMpPUHhPiXnTyhCoMNai7MEGOqUB7lH%2B1aJ7vUcST4BqKCMBiHOirAxtbwSlw72MxAYXT37I5rn4dZ21q389nti%2BT24kq%2B%2BLXjbMEzAzCCXpMyT%2FoICmkCSYyN67W5IQy0SE6hXNpQqM9A0tdifnQBRPWwbPCl0hq560xjYGgh0b7%2B%2FjgVnwREzs2R1kg3VejqClK9b0BoOEIP7jb%2BulyyP%2FQ0Rrp5%2BfhgCA9286FC2HkCUAqAJqwRjP&X-Amz-Signature=8d22cbe088dc22ea2506866c61826d76fdbd8503405f2bd065f5daf270bb99cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV7ZWHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlip%2FnulZO4kqv1QuKRN9xd3zzuKBjzeXhktph8XGt2AIgLNZn%2FtxtTpsH5wJAOaNFykD05dC6%2BQsU1sa04SnZYAQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5JSa3j8KvVygETyyrcA8uecAAbakqjld%2FKSQefFWq0ib6U6bGkgNupb1zy%2Bk11mxoM3QS1UY5FU7d4jkD48D%2F73PyjRgf1mxY8d8cfQLOMRQ%2BqeQI3olVcwUUilAlO4%2FLMGQh7DkHxo9Ui1KfMu2AgcwQQe5ttzN8rza7W7CecFTQcaUTOJb8uR%2BkZlghiEj%2BtInttMR%2FzOWmfVyy1tRtBzevMcvGEdjTNhJ2bTpnEej6SmqzWkI1nQTu9j%2F3bdie%2BmjjlQVtMgMHh8FhjFABIN6atDAijDBgkQ2N8AkmuWrnIK5Jw3wxlE5bA3xDax2lQtVDk3PBt0hZCEYRxnfbU6J8rPToVz2J2E1cIMSLm78%2BYe%2BriIvHfJ4IzXV59I0fBRLN5FCuMkePvot8CIfms6Q0N%2BwV7MSosxSxrRvziQoHF%2FznYdVPZefjSKxx%2BfSGp3clmlsf4AehDH7PLZdQIX3oBHACQq8oF0gKFDIpOC6haKLZDCAwZnnTgwdQGtUkZ64cljhMI0qfP5z1o%2BgzUiOE2FpiDvRo6GZEIaGIJ82is6RP3LlHiXlCUmzMR4t0Fbt88rCFaC5xoWTwmIJFJLGO53uTUD2Z46KXPmq3uj1GN9mZqY1Ap07gpuwwCRMpPUHhPiXnTyhCoMNai7MEGOqUB7lH%2B1aJ7vUcST4BqKCMBiHOirAxtbwSlw72MxAYXT37I5rn4dZ21q389nti%2BT24kq%2B%2BLXjbMEzAzCCXpMyT%2FoICmkCSYyN67W5IQy0SE6hXNpQqM9A0tdifnQBRPWwbPCl0hq560xjYGgh0b7%2B%2FjgVnwREzs2R1kg3VejqClK9b0BoOEIP7jb%2BulyyP%2FQ0Rrp5%2BfhgCA9286FC2HkCUAqAJqwRjP&X-Amz-Signature=b25721224c21c5cf46884b76ca37119ade9287dafb6a172f762b24884443c956&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV7ZWHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlip%2FnulZO4kqv1QuKRN9xd3zzuKBjzeXhktph8XGt2AIgLNZn%2FtxtTpsH5wJAOaNFykD05dC6%2BQsU1sa04SnZYAQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5JSa3j8KvVygETyyrcA8uecAAbakqjld%2FKSQefFWq0ib6U6bGkgNupb1zy%2Bk11mxoM3QS1UY5FU7d4jkD48D%2F73PyjRgf1mxY8d8cfQLOMRQ%2BqeQI3olVcwUUilAlO4%2FLMGQh7DkHxo9Ui1KfMu2AgcwQQe5ttzN8rza7W7CecFTQcaUTOJb8uR%2BkZlghiEj%2BtInttMR%2FzOWmfVyy1tRtBzevMcvGEdjTNhJ2bTpnEej6SmqzWkI1nQTu9j%2F3bdie%2BmjjlQVtMgMHh8FhjFABIN6atDAijDBgkQ2N8AkmuWrnIK5Jw3wxlE5bA3xDax2lQtVDk3PBt0hZCEYRxnfbU6J8rPToVz2J2E1cIMSLm78%2BYe%2BriIvHfJ4IzXV59I0fBRLN5FCuMkePvot8CIfms6Q0N%2BwV7MSosxSxrRvziQoHF%2FznYdVPZefjSKxx%2BfSGp3clmlsf4AehDH7PLZdQIX3oBHACQq8oF0gKFDIpOC6haKLZDCAwZnnTgwdQGtUkZ64cljhMI0qfP5z1o%2BgzUiOE2FpiDvRo6GZEIaGIJ82is6RP3LlHiXlCUmzMR4t0Fbt88rCFaC5xoWTwmIJFJLGO53uTUD2Z46KXPmq3uj1GN9mZqY1Ap07gpuwwCRMpPUHhPiXnTyhCoMNai7MEGOqUB7lH%2B1aJ7vUcST4BqKCMBiHOirAxtbwSlw72MxAYXT37I5rn4dZ21q389nti%2BT24kq%2B%2BLXjbMEzAzCCXpMyT%2FoICmkCSYyN67W5IQy0SE6hXNpQqM9A0tdifnQBRPWwbPCl0hq560xjYGgh0b7%2B%2FjgVnwREzs2R1kg3VejqClK9b0BoOEIP7jb%2BulyyP%2FQ0Rrp5%2BfhgCA9286FC2HkCUAqAJqwRjP&X-Amz-Signature=1290a432c887b867053674adf09345964184ef7e52dfd2d56c72fa3d8dc01650&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV7ZWHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlip%2FnulZO4kqv1QuKRN9xd3zzuKBjzeXhktph8XGt2AIgLNZn%2FtxtTpsH5wJAOaNFykD05dC6%2BQsU1sa04SnZYAQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5JSa3j8KvVygETyyrcA8uecAAbakqjld%2FKSQefFWq0ib6U6bGkgNupb1zy%2Bk11mxoM3QS1UY5FU7d4jkD48D%2F73PyjRgf1mxY8d8cfQLOMRQ%2BqeQI3olVcwUUilAlO4%2FLMGQh7DkHxo9Ui1KfMu2AgcwQQe5ttzN8rza7W7CecFTQcaUTOJb8uR%2BkZlghiEj%2BtInttMR%2FzOWmfVyy1tRtBzevMcvGEdjTNhJ2bTpnEej6SmqzWkI1nQTu9j%2F3bdie%2BmjjlQVtMgMHh8FhjFABIN6atDAijDBgkQ2N8AkmuWrnIK5Jw3wxlE5bA3xDax2lQtVDk3PBt0hZCEYRxnfbU6J8rPToVz2J2E1cIMSLm78%2BYe%2BriIvHfJ4IzXV59I0fBRLN5FCuMkePvot8CIfms6Q0N%2BwV7MSosxSxrRvziQoHF%2FznYdVPZefjSKxx%2BfSGp3clmlsf4AehDH7PLZdQIX3oBHACQq8oF0gKFDIpOC6haKLZDCAwZnnTgwdQGtUkZ64cljhMI0qfP5z1o%2BgzUiOE2FpiDvRo6GZEIaGIJ82is6RP3LlHiXlCUmzMR4t0Fbt88rCFaC5xoWTwmIJFJLGO53uTUD2Z46KXPmq3uj1GN9mZqY1Ap07gpuwwCRMpPUHhPiXnTyhCoMNai7MEGOqUB7lH%2B1aJ7vUcST4BqKCMBiHOirAxtbwSlw72MxAYXT37I5rn4dZ21q389nti%2BT24kq%2B%2BLXjbMEzAzCCXpMyT%2FoICmkCSYyN67W5IQy0SE6hXNpQqM9A0tdifnQBRPWwbPCl0hq560xjYGgh0b7%2B%2FjgVnwREzs2R1kg3VejqClK9b0BoOEIP7jb%2BulyyP%2FQ0Rrp5%2BfhgCA9286FC2HkCUAqAJqwRjP&X-Amz-Signature=f7886c032b26e36ecb4d650edaa505b9b313e681f9d4ec88d360131c3d7f923d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV7ZWHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlip%2FnulZO4kqv1QuKRN9xd3zzuKBjzeXhktph8XGt2AIgLNZn%2FtxtTpsH5wJAOaNFykD05dC6%2BQsU1sa04SnZYAQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5JSa3j8KvVygETyyrcA8uecAAbakqjld%2FKSQefFWq0ib6U6bGkgNupb1zy%2Bk11mxoM3QS1UY5FU7d4jkD48D%2F73PyjRgf1mxY8d8cfQLOMRQ%2BqeQI3olVcwUUilAlO4%2FLMGQh7DkHxo9Ui1KfMu2AgcwQQe5ttzN8rza7W7CecFTQcaUTOJb8uR%2BkZlghiEj%2BtInttMR%2FzOWmfVyy1tRtBzevMcvGEdjTNhJ2bTpnEej6SmqzWkI1nQTu9j%2F3bdie%2BmjjlQVtMgMHh8FhjFABIN6atDAijDBgkQ2N8AkmuWrnIK5Jw3wxlE5bA3xDax2lQtVDk3PBt0hZCEYRxnfbU6J8rPToVz2J2E1cIMSLm78%2BYe%2BriIvHfJ4IzXV59I0fBRLN5FCuMkePvot8CIfms6Q0N%2BwV7MSosxSxrRvziQoHF%2FznYdVPZefjSKxx%2BfSGp3clmlsf4AehDH7PLZdQIX3oBHACQq8oF0gKFDIpOC6haKLZDCAwZnnTgwdQGtUkZ64cljhMI0qfP5z1o%2BgzUiOE2FpiDvRo6GZEIaGIJ82is6RP3LlHiXlCUmzMR4t0Fbt88rCFaC5xoWTwmIJFJLGO53uTUD2Z46KXPmq3uj1GN9mZqY1Ap07gpuwwCRMpPUHhPiXnTyhCoMNai7MEGOqUB7lH%2B1aJ7vUcST4BqKCMBiHOirAxtbwSlw72MxAYXT37I5rn4dZ21q389nti%2BT24kq%2B%2BLXjbMEzAzCCXpMyT%2FoICmkCSYyN67W5IQy0SE6hXNpQqM9A0tdifnQBRPWwbPCl0hq560xjYGgh0b7%2B%2FjgVnwREzs2R1kg3VejqClK9b0BoOEIP7jb%2BulyyP%2FQ0Rrp5%2BfhgCA9286FC2HkCUAqAJqwRjP&X-Amz-Signature=4cafd7fa29ddfcf6361a67a3b051402e8786a095a87138f9d8baadc1449326ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV7ZWHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlip%2FnulZO4kqv1QuKRN9xd3zzuKBjzeXhktph8XGt2AIgLNZn%2FtxtTpsH5wJAOaNFykD05dC6%2BQsU1sa04SnZYAQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5JSa3j8KvVygETyyrcA8uecAAbakqjld%2FKSQefFWq0ib6U6bGkgNupb1zy%2Bk11mxoM3QS1UY5FU7d4jkD48D%2F73PyjRgf1mxY8d8cfQLOMRQ%2BqeQI3olVcwUUilAlO4%2FLMGQh7DkHxo9Ui1KfMu2AgcwQQe5ttzN8rza7W7CecFTQcaUTOJb8uR%2BkZlghiEj%2BtInttMR%2FzOWmfVyy1tRtBzevMcvGEdjTNhJ2bTpnEej6SmqzWkI1nQTu9j%2F3bdie%2BmjjlQVtMgMHh8FhjFABIN6atDAijDBgkQ2N8AkmuWrnIK5Jw3wxlE5bA3xDax2lQtVDk3PBt0hZCEYRxnfbU6J8rPToVz2J2E1cIMSLm78%2BYe%2BriIvHfJ4IzXV59I0fBRLN5FCuMkePvot8CIfms6Q0N%2BwV7MSosxSxrRvziQoHF%2FznYdVPZefjSKxx%2BfSGp3clmlsf4AehDH7PLZdQIX3oBHACQq8oF0gKFDIpOC6haKLZDCAwZnnTgwdQGtUkZ64cljhMI0qfP5z1o%2BgzUiOE2FpiDvRo6GZEIaGIJ82is6RP3LlHiXlCUmzMR4t0Fbt88rCFaC5xoWTwmIJFJLGO53uTUD2Z46KXPmq3uj1GN9mZqY1Ap07gpuwwCRMpPUHhPiXnTyhCoMNai7MEGOqUB7lH%2B1aJ7vUcST4BqKCMBiHOirAxtbwSlw72MxAYXT37I5rn4dZ21q389nti%2BT24kq%2B%2BLXjbMEzAzCCXpMyT%2FoICmkCSYyN67W5IQy0SE6hXNpQqM9A0tdifnQBRPWwbPCl0hq560xjYGgh0b7%2B%2FjgVnwREzs2R1kg3VejqClK9b0BoOEIP7jb%2BulyyP%2FQ0Rrp5%2BfhgCA9286FC2HkCUAqAJqwRjP&X-Amz-Signature=69679a046a681f93fcf1b4ccf6232f373faa33ee341f3fc25e3a1d06506ca2af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV7ZWHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlip%2FnulZO4kqv1QuKRN9xd3zzuKBjzeXhktph8XGt2AIgLNZn%2FtxtTpsH5wJAOaNFykD05dC6%2BQsU1sa04SnZYAQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5JSa3j8KvVygETyyrcA8uecAAbakqjld%2FKSQefFWq0ib6U6bGkgNupb1zy%2Bk11mxoM3QS1UY5FU7d4jkD48D%2F73PyjRgf1mxY8d8cfQLOMRQ%2BqeQI3olVcwUUilAlO4%2FLMGQh7DkHxo9Ui1KfMu2AgcwQQe5ttzN8rza7W7CecFTQcaUTOJb8uR%2BkZlghiEj%2BtInttMR%2FzOWmfVyy1tRtBzevMcvGEdjTNhJ2bTpnEej6SmqzWkI1nQTu9j%2F3bdie%2BmjjlQVtMgMHh8FhjFABIN6atDAijDBgkQ2N8AkmuWrnIK5Jw3wxlE5bA3xDax2lQtVDk3PBt0hZCEYRxnfbU6J8rPToVz2J2E1cIMSLm78%2BYe%2BriIvHfJ4IzXV59I0fBRLN5FCuMkePvot8CIfms6Q0N%2BwV7MSosxSxrRvziQoHF%2FznYdVPZefjSKxx%2BfSGp3clmlsf4AehDH7PLZdQIX3oBHACQq8oF0gKFDIpOC6haKLZDCAwZnnTgwdQGtUkZ64cljhMI0qfP5z1o%2BgzUiOE2FpiDvRo6GZEIaGIJ82is6RP3LlHiXlCUmzMR4t0Fbt88rCFaC5xoWTwmIJFJLGO53uTUD2Z46KXPmq3uj1GN9mZqY1Ap07gpuwwCRMpPUHhPiXnTyhCoMNai7MEGOqUB7lH%2B1aJ7vUcST4BqKCMBiHOirAxtbwSlw72MxAYXT37I5rn4dZ21q389nti%2BT24kq%2B%2BLXjbMEzAzCCXpMyT%2FoICmkCSYyN67W5IQy0SE6hXNpQqM9A0tdifnQBRPWwbPCl0hq560xjYGgh0b7%2B%2FjgVnwREzs2R1kg3VejqClK9b0BoOEIP7jb%2BulyyP%2FQ0Rrp5%2BfhgCA9286FC2HkCUAqAJqwRjP&X-Amz-Signature=6b66174e8d76499d00737e7c1f37c7e2097299924ef10f923a5d88fd2c1160d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

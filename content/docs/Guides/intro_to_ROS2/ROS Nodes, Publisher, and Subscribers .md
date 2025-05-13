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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH54UI4A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYDBFyLlFDh6SRzgDRYcVrcZcC3msQM2p1FwZYjy1buAIgFxWU%2BcyEaf3UOcfdB3vUUfSe9XA9tuuL%2FEA3CsrxoM0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsnO94lgcx77h%2BI5CrcA6ScnseUOTRM9tSzh0Rpx4GFpSf6TRddhyakD5IUK6irf%2B%2BlVgeqH6f9sRxUyfFQbIVAqsVHdhSgXWY5seTgMeTJ8QoLyH%2FXgVhO6Z%2BkOnZNlpQbLsKotCSJ3yBfB0KDbPirzHPpfuQ370Hhh6XIK83IU7DtcyDaeuQo4I%2Bigyc%2BpN3VyvzsAoJhuNbT9U4F56SxHl4afO1AzKHM8fmdKe0b5OCnaQRPZA6UWLcQ4YJCIKHufv0lM9eCPiLsUNhSA%2BBZVR6TjNrfv0uTddcAxkTdE9MhJJ7%2FvHz5NY3t4uBRZtTF4MoGMl0TSf%2B5N7KosN4td7395aWGTFuveUXcFkWwItXW7wu9KpdW45cLS3uTmFiLTkm0KJsNaiPTsayzc4OiW1ah8bb4ktqQXK9AGcN2Ce1bejctTkSKFZeU7mOkliXiqACyKwLAOQQiMjanvzbXt3nM2qNZd6IOnd1mJNkjU5bUS6AtxIRvSPpgzo2SzlWlSkM87RoyFdykbsSgBc7vtrbZus%2FXLfJ%2BCUHdjP6a7EPoOweKNLnIDbznj9pqxOPsXM0XvVLc5eYMtOXJ%2FzqIl2r9oh2fnD6E9Ax9RLl6ctVguQa619jQHr03OBcRx%2FfwQO4bugaiqiMQMP7ajsEGOqUB3eAqvQCqxw3uB58XHKLWB8Ij5%2FG4eJIq1l9igOOMmhm0B%2BnqhmIy9Y2Swc9DAABJPjorIe9QJWKT4iTo%2FV4z8aj9WJPl%2F%2BB88ZEnu%2FB16FYTi8gfEYl8xOgebfxptA7qdtO2%2F4WG%2F7y2wMvlVKfqXlFLuOkh4lQa58Os5bvCHP69fBC9p%2FKTLXhKlUFwiarE62GlvTplffWPShN6Y%2B%2BNYm2KQouu&X-Amz-Signature=3f6e4a034fc2bdfd9daa3398eaff3e4daa9ac177dc38baab227ffd28caf8a6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH54UI4A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYDBFyLlFDh6SRzgDRYcVrcZcC3msQM2p1FwZYjy1buAIgFxWU%2BcyEaf3UOcfdB3vUUfSe9XA9tuuL%2FEA3CsrxoM0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsnO94lgcx77h%2BI5CrcA6ScnseUOTRM9tSzh0Rpx4GFpSf6TRddhyakD5IUK6irf%2B%2BlVgeqH6f9sRxUyfFQbIVAqsVHdhSgXWY5seTgMeTJ8QoLyH%2FXgVhO6Z%2BkOnZNlpQbLsKotCSJ3yBfB0KDbPirzHPpfuQ370Hhh6XIK83IU7DtcyDaeuQo4I%2Bigyc%2BpN3VyvzsAoJhuNbT9U4F56SxHl4afO1AzKHM8fmdKe0b5OCnaQRPZA6UWLcQ4YJCIKHufv0lM9eCPiLsUNhSA%2BBZVR6TjNrfv0uTddcAxkTdE9MhJJ7%2FvHz5NY3t4uBRZtTF4MoGMl0TSf%2B5N7KosN4td7395aWGTFuveUXcFkWwItXW7wu9KpdW45cLS3uTmFiLTkm0KJsNaiPTsayzc4OiW1ah8bb4ktqQXK9AGcN2Ce1bejctTkSKFZeU7mOkliXiqACyKwLAOQQiMjanvzbXt3nM2qNZd6IOnd1mJNkjU5bUS6AtxIRvSPpgzo2SzlWlSkM87RoyFdykbsSgBc7vtrbZus%2FXLfJ%2BCUHdjP6a7EPoOweKNLnIDbznj9pqxOPsXM0XvVLc5eYMtOXJ%2FzqIl2r9oh2fnD6E9Ax9RLl6ctVguQa619jQHr03OBcRx%2FfwQO4bugaiqiMQMP7ajsEGOqUB3eAqvQCqxw3uB58XHKLWB8Ij5%2FG4eJIq1l9igOOMmhm0B%2BnqhmIy9Y2Swc9DAABJPjorIe9QJWKT4iTo%2FV4z8aj9WJPl%2F%2BB88ZEnu%2FB16FYTi8gfEYl8xOgebfxptA7qdtO2%2F4WG%2F7y2wMvlVKfqXlFLuOkh4lQa58Os5bvCHP69fBC9p%2FKTLXhKlUFwiarE62GlvTplffWPShN6Y%2B%2BNYm2KQouu&X-Amz-Signature=90ed6eec923350a12ff5423d81c6b5168d15603a4960ebb30c2321e9f12309dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH54UI4A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYDBFyLlFDh6SRzgDRYcVrcZcC3msQM2p1FwZYjy1buAIgFxWU%2BcyEaf3UOcfdB3vUUfSe9XA9tuuL%2FEA3CsrxoM0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsnO94lgcx77h%2BI5CrcA6ScnseUOTRM9tSzh0Rpx4GFpSf6TRddhyakD5IUK6irf%2B%2BlVgeqH6f9sRxUyfFQbIVAqsVHdhSgXWY5seTgMeTJ8QoLyH%2FXgVhO6Z%2BkOnZNlpQbLsKotCSJ3yBfB0KDbPirzHPpfuQ370Hhh6XIK83IU7DtcyDaeuQo4I%2Bigyc%2BpN3VyvzsAoJhuNbT9U4F56SxHl4afO1AzKHM8fmdKe0b5OCnaQRPZA6UWLcQ4YJCIKHufv0lM9eCPiLsUNhSA%2BBZVR6TjNrfv0uTddcAxkTdE9MhJJ7%2FvHz5NY3t4uBRZtTF4MoGMl0TSf%2B5N7KosN4td7395aWGTFuveUXcFkWwItXW7wu9KpdW45cLS3uTmFiLTkm0KJsNaiPTsayzc4OiW1ah8bb4ktqQXK9AGcN2Ce1bejctTkSKFZeU7mOkliXiqACyKwLAOQQiMjanvzbXt3nM2qNZd6IOnd1mJNkjU5bUS6AtxIRvSPpgzo2SzlWlSkM87RoyFdykbsSgBc7vtrbZus%2FXLfJ%2BCUHdjP6a7EPoOweKNLnIDbznj9pqxOPsXM0XvVLc5eYMtOXJ%2FzqIl2r9oh2fnD6E9Ax9RLl6ctVguQa619jQHr03OBcRx%2FfwQO4bugaiqiMQMP7ajsEGOqUB3eAqvQCqxw3uB58XHKLWB8Ij5%2FG4eJIq1l9igOOMmhm0B%2BnqhmIy9Y2Swc9DAABJPjorIe9QJWKT4iTo%2FV4z8aj9WJPl%2F%2BB88ZEnu%2FB16FYTi8gfEYl8xOgebfxptA7qdtO2%2F4WG%2F7y2wMvlVKfqXlFLuOkh4lQa58Os5bvCHP69fBC9p%2FKTLXhKlUFwiarE62GlvTplffWPShN6Y%2B%2BNYm2KQouu&X-Amz-Signature=0c430a0b6e036907508e139694d7125bd44ca8124f8678e42c67912d452c0de1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH54UI4A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYDBFyLlFDh6SRzgDRYcVrcZcC3msQM2p1FwZYjy1buAIgFxWU%2BcyEaf3UOcfdB3vUUfSe9XA9tuuL%2FEA3CsrxoM0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsnO94lgcx77h%2BI5CrcA6ScnseUOTRM9tSzh0Rpx4GFpSf6TRddhyakD5IUK6irf%2B%2BlVgeqH6f9sRxUyfFQbIVAqsVHdhSgXWY5seTgMeTJ8QoLyH%2FXgVhO6Z%2BkOnZNlpQbLsKotCSJ3yBfB0KDbPirzHPpfuQ370Hhh6XIK83IU7DtcyDaeuQo4I%2Bigyc%2BpN3VyvzsAoJhuNbT9U4F56SxHl4afO1AzKHM8fmdKe0b5OCnaQRPZA6UWLcQ4YJCIKHufv0lM9eCPiLsUNhSA%2BBZVR6TjNrfv0uTddcAxkTdE9MhJJ7%2FvHz5NY3t4uBRZtTF4MoGMl0TSf%2B5N7KosN4td7395aWGTFuveUXcFkWwItXW7wu9KpdW45cLS3uTmFiLTkm0KJsNaiPTsayzc4OiW1ah8bb4ktqQXK9AGcN2Ce1bejctTkSKFZeU7mOkliXiqACyKwLAOQQiMjanvzbXt3nM2qNZd6IOnd1mJNkjU5bUS6AtxIRvSPpgzo2SzlWlSkM87RoyFdykbsSgBc7vtrbZus%2FXLfJ%2BCUHdjP6a7EPoOweKNLnIDbznj9pqxOPsXM0XvVLc5eYMtOXJ%2FzqIl2r9oh2fnD6E9Ax9RLl6ctVguQa619jQHr03OBcRx%2FfwQO4bugaiqiMQMP7ajsEGOqUB3eAqvQCqxw3uB58XHKLWB8Ij5%2FG4eJIq1l9igOOMmhm0B%2BnqhmIy9Y2Swc9DAABJPjorIe9QJWKT4iTo%2FV4z8aj9WJPl%2F%2BB88ZEnu%2FB16FYTi8gfEYl8xOgebfxptA7qdtO2%2F4WG%2F7y2wMvlVKfqXlFLuOkh4lQa58Os5bvCHP69fBC9p%2FKTLXhKlUFwiarE62GlvTplffWPShN6Y%2B%2BNYm2KQouu&X-Amz-Signature=ea2c6ea4ad6f8240d0ae0427cd723a4166e85bf6cda5013f79905ccd7d50d70e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH54UI4A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYDBFyLlFDh6SRzgDRYcVrcZcC3msQM2p1FwZYjy1buAIgFxWU%2BcyEaf3UOcfdB3vUUfSe9XA9tuuL%2FEA3CsrxoM0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsnO94lgcx77h%2BI5CrcA6ScnseUOTRM9tSzh0Rpx4GFpSf6TRddhyakD5IUK6irf%2B%2BlVgeqH6f9sRxUyfFQbIVAqsVHdhSgXWY5seTgMeTJ8QoLyH%2FXgVhO6Z%2BkOnZNlpQbLsKotCSJ3yBfB0KDbPirzHPpfuQ370Hhh6XIK83IU7DtcyDaeuQo4I%2Bigyc%2BpN3VyvzsAoJhuNbT9U4F56SxHl4afO1AzKHM8fmdKe0b5OCnaQRPZA6UWLcQ4YJCIKHufv0lM9eCPiLsUNhSA%2BBZVR6TjNrfv0uTddcAxkTdE9MhJJ7%2FvHz5NY3t4uBRZtTF4MoGMl0TSf%2B5N7KosN4td7395aWGTFuveUXcFkWwItXW7wu9KpdW45cLS3uTmFiLTkm0KJsNaiPTsayzc4OiW1ah8bb4ktqQXK9AGcN2Ce1bejctTkSKFZeU7mOkliXiqACyKwLAOQQiMjanvzbXt3nM2qNZd6IOnd1mJNkjU5bUS6AtxIRvSPpgzo2SzlWlSkM87RoyFdykbsSgBc7vtrbZus%2FXLfJ%2BCUHdjP6a7EPoOweKNLnIDbznj9pqxOPsXM0XvVLc5eYMtOXJ%2FzqIl2r9oh2fnD6E9Ax9RLl6ctVguQa619jQHr03OBcRx%2FfwQO4bugaiqiMQMP7ajsEGOqUB3eAqvQCqxw3uB58XHKLWB8Ij5%2FG4eJIq1l9igOOMmhm0B%2BnqhmIy9Y2Swc9DAABJPjorIe9QJWKT4iTo%2FV4z8aj9WJPl%2F%2BB88ZEnu%2FB16FYTi8gfEYl8xOgebfxptA7qdtO2%2F4WG%2F7y2wMvlVKfqXlFLuOkh4lQa58Os5bvCHP69fBC9p%2FKTLXhKlUFwiarE62GlvTplffWPShN6Y%2B%2BNYm2KQouu&X-Amz-Signature=dc1df4a8e262a3e5df00b5251143781a17464849acb2d10a3798431c72df8600&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH54UI4A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYDBFyLlFDh6SRzgDRYcVrcZcC3msQM2p1FwZYjy1buAIgFxWU%2BcyEaf3UOcfdB3vUUfSe9XA9tuuL%2FEA3CsrxoM0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsnO94lgcx77h%2BI5CrcA6ScnseUOTRM9tSzh0Rpx4GFpSf6TRddhyakD5IUK6irf%2B%2BlVgeqH6f9sRxUyfFQbIVAqsVHdhSgXWY5seTgMeTJ8QoLyH%2FXgVhO6Z%2BkOnZNlpQbLsKotCSJ3yBfB0KDbPirzHPpfuQ370Hhh6XIK83IU7DtcyDaeuQo4I%2Bigyc%2BpN3VyvzsAoJhuNbT9U4F56SxHl4afO1AzKHM8fmdKe0b5OCnaQRPZA6UWLcQ4YJCIKHufv0lM9eCPiLsUNhSA%2BBZVR6TjNrfv0uTddcAxkTdE9MhJJ7%2FvHz5NY3t4uBRZtTF4MoGMl0TSf%2B5N7KosN4td7395aWGTFuveUXcFkWwItXW7wu9KpdW45cLS3uTmFiLTkm0KJsNaiPTsayzc4OiW1ah8bb4ktqQXK9AGcN2Ce1bejctTkSKFZeU7mOkliXiqACyKwLAOQQiMjanvzbXt3nM2qNZd6IOnd1mJNkjU5bUS6AtxIRvSPpgzo2SzlWlSkM87RoyFdykbsSgBc7vtrbZus%2FXLfJ%2BCUHdjP6a7EPoOweKNLnIDbznj9pqxOPsXM0XvVLc5eYMtOXJ%2FzqIl2r9oh2fnD6E9Ax9RLl6ctVguQa619jQHr03OBcRx%2FfwQO4bugaiqiMQMP7ajsEGOqUB3eAqvQCqxw3uB58XHKLWB8Ij5%2FG4eJIq1l9igOOMmhm0B%2BnqhmIy9Y2Swc9DAABJPjorIe9QJWKT4iTo%2FV4z8aj9WJPl%2F%2BB88ZEnu%2FB16FYTi8gfEYl8xOgebfxptA7qdtO2%2F4WG%2F7y2wMvlVKfqXlFLuOkh4lQa58Os5bvCHP69fBC9p%2FKTLXhKlUFwiarE62GlvTplffWPShN6Y%2B%2BNYm2KQouu&X-Amz-Signature=8819a81869297e16130ac4ccc2a31534de9cb929b86de462b90219d500d3f787&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH54UI4A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYDBFyLlFDh6SRzgDRYcVrcZcC3msQM2p1FwZYjy1buAIgFxWU%2BcyEaf3UOcfdB3vUUfSe9XA9tuuL%2FEA3CsrxoM0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsnO94lgcx77h%2BI5CrcA6ScnseUOTRM9tSzh0Rpx4GFpSf6TRddhyakD5IUK6irf%2B%2BlVgeqH6f9sRxUyfFQbIVAqsVHdhSgXWY5seTgMeTJ8QoLyH%2FXgVhO6Z%2BkOnZNlpQbLsKotCSJ3yBfB0KDbPirzHPpfuQ370Hhh6XIK83IU7DtcyDaeuQo4I%2Bigyc%2BpN3VyvzsAoJhuNbT9U4F56SxHl4afO1AzKHM8fmdKe0b5OCnaQRPZA6UWLcQ4YJCIKHufv0lM9eCPiLsUNhSA%2BBZVR6TjNrfv0uTddcAxkTdE9MhJJ7%2FvHz5NY3t4uBRZtTF4MoGMl0TSf%2B5N7KosN4td7395aWGTFuveUXcFkWwItXW7wu9KpdW45cLS3uTmFiLTkm0KJsNaiPTsayzc4OiW1ah8bb4ktqQXK9AGcN2Ce1bejctTkSKFZeU7mOkliXiqACyKwLAOQQiMjanvzbXt3nM2qNZd6IOnd1mJNkjU5bUS6AtxIRvSPpgzo2SzlWlSkM87RoyFdykbsSgBc7vtrbZus%2FXLfJ%2BCUHdjP6a7EPoOweKNLnIDbznj9pqxOPsXM0XvVLc5eYMtOXJ%2FzqIl2r9oh2fnD6E9Ax9RLl6ctVguQa619jQHr03OBcRx%2FfwQO4bugaiqiMQMP7ajsEGOqUB3eAqvQCqxw3uB58XHKLWB8Ij5%2FG4eJIq1l9igOOMmhm0B%2BnqhmIy9Y2Swc9DAABJPjorIe9QJWKT4iTo%2FV4z8aj9WJPl%2F%2BB88ZEnu%2FB16FYTi8gfEYl8xOgebfxptA7qdtO2%2F4WG%2F7y2wMvlVKfqXlFLuOkh4lQa58Os5bvCHP69fBC9p%2FKTLXhKlUFwiarE62GlvTplffWPShN6Y%2B%2BNYm2KQouu&X-Amz-Signature=ea40580b4cce957ad7c94492bfb5972de303e285faa0629cbf908055019cec32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH54UI4A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCYDBFyLlFDh6SRzgDRYcVrcZcC3msQM2p1FwZYjy1buAIgFxWU%2BcyEaf3UOcfdB3vUUfSe9XA9tuuL%2FEA3CsrxoM0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsnO94lgcx77h%2BI5CrcA6ScnseUOTRM9tSzh0Rpx4GFpSf6TRddhyakD5IUK6irf%2B%2BlVgeqH6f9sRxUyfFQbIVAqsVHdhSgXWY5seTgMeTJ8QoLyH%2FXgVhO6Z%2BkOnZNlpQbLsKotCSJ3yBfB0KDbPirzHPpfuQ370Hhh6XIK83IU7DtcyDaeuQo4I%2Bigyc%2BpN3VyvzsAoJhuNbT9U4F56SxHl4afO1AzKHM8fmdKe0b5OCnaQRPZA6UWLcQ4YJCIKHufv0lM9eCPiLsUNhSA%2BBZVR6TjNrfv0uTddcAxkTdE9MhJJ7%2FvHz5NY3t4uBRZtTF4MoGMl0TSf%2B5N7KosN4td7395aWGTFuveUXcFkWwItXW7wu9KpdW45cLS3uTmFiLTkm0KJsNaiPTsayzc4OiW1ah8bb4ktqQXK9AGcN2Ce1bejctTkSKFZeU7mOkliXiqACyKwLAOQQiMjanvzbXt3nM2qNZd6IOnd1mJNkjU5bUS6AtxIRvSPpgzo2SzlWlSkM87RoyFdykbsSgBc7vtrbZus%2FXLfJ%2BCUHdjP6a7EPoOweKNLnIDbznj9pqxOPsXM0XvVLc5eYMtOXJ%2FzqIl2r9oh2fnD6E9Ax9RLl6ctVguQa619jQHr03OBcRx%2FfwQO4bugaiqiMQMP7ajsEGOqUB3eAqvQCqxw3uB58XHKLWB8Ij5%2FG4eJIq1l9igOOMmhm0B%2BnqhmIy9Y2Swc9DAABJPjorIe9QJWKT4iTo%2FV4z8aj9WJPl%2F%2BB88ZEnu%2FB16FYTi8gfEYl8xOgebfxptA7qdtO2%2F4WG%2F7y2wMvlVKfqXlFLuOkh4lQa58Os5bvCHP69fBC9p%2FKTLXhKlUFwiarE62GlvTplffWPShN6Y%2B%2BNYm2KQouu&X-Amz-Signature=dea39bf09e191fd082028f082751eec6a61ce3e12369bdd26a30325cda3c646f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

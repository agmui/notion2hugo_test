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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOOVENC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BXZd%2BoOCnH81Bv%2FrhvABIkA1Sz%2BtzeOeTkhbdqr8%2F4AIgZs82R3ZmKMgUIRDYXBAeqm1xmz8Wg0oA3R14QSHDJGYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE4NInixzsG4alwl1CrcA8IQimjkRKFcv2HsX%2BXuYCVgMJ7LMRm%2BmYUyTRDY0U1iI69GNNCcAS7fRrT2%2FUhx3cP4sPhIKFoK3DeK67ZvdHQh8NnjAuZ7OeyCPx0rLH9IQon6uIZsyGXkuMAhoHv3ymjhFjFyj%2FaKEx%2FCo2yx6WJjIsqF9rY2DIaGc0dq%2BuR4ZQ5zvW5yUZqtIjdvBDxB3doSsxtn19LQDbljX0dQRMN58fg8%2Bf3ZFNfsMYMbte0zwtYIZlhcStVyGlCxq4vU7%2Bx2iEHurkh2bobbW2iwljXLGXObvPg12xi9jhIRSjaBI3ohP9evaJtudDc30n5vmRSstZe%2BzfjJtAq5RJmHWZhL751m%2FQQq91feRefu2EbZSR0CbwYf0rU1W3UDSlX3EZNya0yglQHmDWlqBrvVHBS4OsPfnC5qZIHwKXRo2vzK%2Bh2AOTCXO1PSkniBz3rnPvzNeGE9PFkyv4zL%2FDCj97CTuG47i2s%2FYhV8ZeZStJKWMFY8UsNC2M0nOLDV5jCy57kPwMSCnUZmlfl4w%2B8hDNOpZseHhGWH6Kbx9A49zgd5AwOoD2g2LhMtFZYPv1jSb8EbjluRLFrqAhxorHDv3VvoNfFGGMD4zkXuSF7idFQq8pAhB0RaHsYH8m4IMM6V5MAGOqUBYXUYo8rSTvunv7I4NDra9vNwdpbSWLcOIE7oRrrJdK6SWWZJpOSCCdoqd4SJFF0bfRN8IYSxoW%2B0DBdqmUh4RahpuTSiFRl04OJskBWKwPfmEaBhuMKA4NmzvErYmRZkpL0kG3KYv035ZXQIDiVm1ERO1XXU845YLCdVXJ5tXxr%2FuGvnFTC6cDW6GL8WNBdWz0MG%2BJkERGrtXVt%2Btz3YbZxWSBzU&X-Amz-Signature=b909fadad9d52adc323ac0360acbac7bd9003e8869d8c2d70a620dfbd4aaef06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOOVENC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BXZd%2BoOCnH81Bv%2FrhvABIkA1Sz%2BtzeOeTkhbdqr8%2F4AIgZs82R3ZmKMgUIRDYXBAeqm1xmz8Wg0oA3R14QSHDJGYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE4NInixzsG4alwl1CrcA8IQimjkRKFcv2HsX%2BXuYCVgMJ7LMRm%2BmYUyTRDY0U1iI69GNNCcAS7fRrT2%2FUhx3cP4sPhIKFoK3DeK67ZvdHQh8NnjAuZ7OeyCPx0rLH9IQon6uIZsyGXkuMAhoHv3ymjhFjFyj%2FaKEx%2FCo2yx6WJjIsqF9rY2DIaGc0dq%2BuR4ZQ5zvW5yUZqtIjdvBDxB3doSsxtn19LQDbljX0dQRMN58fg8%2Bf3ZFNfsMYMbte0zwtYIZlhcStVyGlCxq4vU7%2Bx2iEHurkh2bobbW2iwljXLGXObvPg12xi9jhIRSjaBI3ohP9evaJtudDc30n5vmRSstZe%2BzfjJtAq5RJmHWZhL751m%2FQQq91feRefu2EbZSR0CbwYf0rU1W3UDSlX3EZNya0yglQHmDWlqBrvVHBS4OsPfnC5qZIHwKXRo2vzK%2Bh2AOTCXO1PSkniBz3rnPvzNeGE9PFkyv4zL%2FDCj97CTuG47i2s%2FYhV8ZeZStJKWMFY8UsNC2M0nOLDV5jCy57kPwMSCnUZmlfl4w%2B8hDNOpZseHhGWH6Kbx9A49zgd5AwOoD2g2LhMtFZYPv1jSb8EbjluRLFrqAhxorHDv3VvoNfFGGMD4zkXuSF7idFQq8pAhB0RaHsYH8m4IMM6V5MAGOqUBYXUYo8rSTvunv7I4NDra9vNwdpbSWLcOIE7oRrrJdK6SWWZJpOSCCdoqd4SJFF0bfRN8IYSxoW%2B0DBdqmUh4RahpuTSiFRl04OJskBWKwPfmEaBhuMKA4NmzvErYmRZkpL0kG3KYv035ZXQIDiVm1ERO1XXU845YLCdVXJ5tXxr%2FuGvnFTC6cDW6GL8WNBdWz0MG%2BJkERGrtXVt%2Btz3YbZxWSBzU&X-Amz-Signature=8a4df8401b6fa202d9d893831b073a2a3fb15fc0bbd9c3ca715e567572c1943d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOOVENC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BXZd%2BoOCnH81Bv%2FrhvABIkA1Sz%2BtzeOeTkhbdqr8%2F4AIgZs82R3ZmKMgUIRDYXBAeqm1xmz8Wg0oA3R14QSHDJGYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE4NInixzsG4alwl1CrcA8IQimjkRKFcv2HsX%2BXuYCVgMJ7LMRm%2BmYUyTRDY0U1iI69GNNCcAS7fRrT2%2FUhx3cP4sPhIKFoK3DeK67ZvdHQh8NnjAuZ7OeyCPx0rLH9IQon6uIZsyGXkuMAhoHv3ymjhFjFyj%2FaKEx%2FCo2yx6WJjIsqF9rY2DIaGc0dq%2BuR4ZQ5zvW5yUZqtIjdvBDxB3doSsxtn19LQDbljX0dQRMN58fg8%2Bf3ZFNfsMYMbte0zwtYIZlhcStVyGlCxq4vU7%2Bx2iEHurkh2bobbW2iwljXLGXObvPg12xi9jhIRSjaBI3ohP9evaJtudDc30n5vmRSstZe%2BzfjJtAq5RJmHWZhL751m%2FQQq91feRefu2EbZSR0CbwYf0rU1W3UDSlX3EZNya0yglQHmDWlqBrvVHBS4OsPfnC5qZIHwKXRo2vzK%2Bh2AOTCXO1PSkniBz3rnPvzNeGE9PFkyv4zL%2FDCj97CTuG47i2s%2FYhV8ZeZStJKWMFY8UsNC2M0nOLDV5jCy57kPwMSCnUZmlfl4w%2B8hDNOpZseHhGWH6Kbx9A49zgd5AwOoD2g2LhMtFZYPv1jSb8EbjluRLFrqAhxorHDv3VvoNfFGGMD4zkXuSF7idFQq8pAhB0RaHsYH8m4IMM6V5MAGOqUBYXUYo8rSTvunv7I4NDra9vNwdpbSWLcOIE7oRrrJdK6SWWZJpOSCCdoqd4SJFF0bfRN8IYSxoW%2B0DBdqmUh4RahpuTSiFRl04OJskBWKwPfmEaBhuMKA4NmzvErYmRZkpL0kG3KYv035ZXQIDiVm1ERO1XXU845YLCdVXJ5tXxr%2FuGvnFTC6cDW6GL8WNBdWz0MG%2BJkERGrtXVt%2Btz3YbZxWSBzU&X-Amz-Signature=f6bacdfb8a021965d89b9c730b863699115e53c5a8feeb70c1f6247fe6013c97&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOOVENC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BXZd%2BoOCnH81Bv%2FrhvABIkA1Sz%2BtzeOeTkhbdqr8%2F4AIgZs82R3ZmKMgUIRDYXBAeqm1xmz8Wg0oA3R14QSHDJGYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE4NInixzsG4alwl1CrcA8IQimjkRKFcv2HsX%2BXuYCVgMJ7LMRm%2BmYUyTRDY0U1iI69GNNCcAS7fRrT2%2FUhx3cP4sPhIKFoK3DeK67ZvdHQh8NnjAuZ7OeyCPx0rLH9IQon6uIZsyGXkuMAhoHv3ymjhFjFyj%2FaKEx%2FCo2yx6WJjIsqF9rY2DIaGc0dq%2BuR4ZQ5zvW5yUZqtIjdvBDxB3doSsxtn19LQDbljX0dQRMN58fg8%2Bf3ZFNfsMYMbte0zwtYIZlhcStVyGlCxq4vU7%2Bx2iEHurkh2bobbW2iwljXLGXObvPg12xi9jhIRSjaBI3ohP9evaJtudDc30n5vmRSstZe%2BzfjJtAq5RJmHWZhL751m%2FQQq91feRefu2EbZSR0CbwYf0rU1W3UDSlX3EZNya0yglQHmDWlqBrvVHBS4OsPfnC5qZIHwKXRo2vzK%2Bh2AOTCXO1PSkniBz3rnPvzNeGE9PFkyv4zL%2FDCj97CTuG47i2s%2FYhV8ZeZStJKWMFY8UsNC2M0nOLDV5jCy57kPwMSCnUZmlfl4w%2B8hDNOpZseHhGWH6Kbx9A49zgd5AwOoD2g2LhMtFZYPv1jSb8EbjluRLFrqAhxorHDv3VvoNfFGGMD4zkXuSF7idFQq8pAhB0RaHsYH8m4IMM6V5MAGOqUBYXUYo8rSTvunv7I4NDra9vNwdpbSWLcOIE7oRrrJdK6SWWZJpOSCCdoqd4SJFF0bfRN8IYSxoW%2B0DBdqmUh4RahpuTSiFRl04OJskBWKwPfmEaBhuMKA4NmzvErYmRZkpL0kG3KYv035ZXQIDiVm1ERO1XXU845YLCdVXJ5tXxr%2FuGvnFTC6cDW6GL8WNBdWz0MG%2BJkERGrtXVt%2Btz3YbZxWSBzU&X-Amz-Signature=8c23ed14f0962eb1ba7f5d5ed88748c67f02186532b20a57453dcc7272f4c289&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOOVENC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BXZd%2BoOCnH81Bv%2FrhvABIkA1Sz%2BtzeOeTkhbdqr8%2F4AIgZs82R3ZmKMgUIRDYXBAeqm1xmz8Wg0oA3R14QSHDJGYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE4NInixzsG4alwl1CrcA8IQimjkRKFcv2HsX%2BXuYCVgMJ7LMRm%2BmYUyTRDY0U1iI69GNNCcAS7fRrT2%2FUhx3cP4sPhIKFoK3DeK67ZvdHQh8NnjAuZ7OeyCPx0rLH9IQon6uIZsyGXkuMAhoHv3ymjhFjFyj%2FaKEx%2FCo2yx6WJjIsqF9rY2DIaGc0dq%2BuR4ZQ5zvW5yUZqtIjdvBDxB3doSsxtn19LQDbljX0dQRMN58fg8%2Bf3ZFNfsMYMbte0zwtYIZlhcStVyGlCxq4vU7%2Bx2iEHurkh2bobbW2iwljXLGXObvPg12xi9jhIRSjaBI3ohP9evaJtudDc30n5vmRSstZe%2BzfjJtAq5RJmHWZhL751m%2FQQq91feRefu2EbZSR0CbwYf0rU1W3UDSlX3EZNya0yglQHmDWlqBrvVHBS4OsPfnC5qZIHwKXRo2vzK%2Bh2AOTCXO1PSkniBz3rnPvzNeGE9PFkyv4zL%2FDCj97CTuG47i2s%2FYhV8ZeZStJKWMFY8UsNC2M0nOLDV5jCy57kPwMSCnUZmlfl4w%2B8hDNOpZseHhGWH6Kbx9A49zgd5AwOoD2g2LhMtFZYPv1jSb8EbjluRLFrqAhxorHDv3VvoNfFGGMD4zkXuSF7idFQq8pAhB0RaHsYH8m4IMM6V5MAGOqUBYXUYo8rSTvunv7I4NDra9vNwdpbSWLcOIE7oRrrJdK6SWWZJpOSCCdoqd4SJFF0bfRN8IYSxoW%2B0DBdqmUh4RahpuTSiFRl04OJskBWKwPfmEaBhuMKA4NmzvErYmRZkpL0kG3KYv035ZXQIDiVm1ERO1XXU845YLCdVXJ5tXxr%2FuGvnFTC6cDW6GL8WNBdWz0MG%2BJkERGrtXVt%2Btz3YbZxWSBzU&X-Amz-Signature=2c824a06b0c7a56bc6e6f8ec0a062e15f4b4dc73354163149f4729fa34cde656&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOOVENC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BXZd%2BoOCnH81Bv%2FrhvABIkA1Sz%2BtzeOeTkhbdqr8%2F4AIgZs82R3ZmKMgUIRDYXBAeqm1xmz8Wg0oA3R14QSHDJGYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE4NInixzsG4alwl1CrcA8IQimjkRKFcv2HsX%2BXuYCVgMJ7LMRm%2BmYUyTRDY0U1iI69GNNCcAS7fRrT2%2FUhx3cP4sPhIKFoK3DeK67ZvdHQh8NnjAuZ7OeyCPx0rLH9IQon6uIZsyGXkuMAhoHv3ymjhFjFyj%2FaKEx%2FCo2yx6WJjIsqF9rY2DIaGc0dq%2BuR4ZQ5zvW5yUZqtIjdvBDxB3doSsxtn19LQDbljX0dQRMN58fg8%2Bf3ZFNfsMYMbte0zwtYIZlhcStVyGlCxq4vU7%2Bx2iEHurkh2bobbW2iwljXLGXObvPg12xi9jhIRSjaBI3ohP9evaJtudDc30n5vmRSstZe%2BzfjJtAq5RJmHWZhL751m%2FQQq91feRefu2EbZSR0CbwYf0rU1W3UDSlX3EZNya0yglQHmDWlqBrvVHBS4OsPfnC5qZIHwKXRo2vzK%2Bh2AOTCXO1PSkniBz3rnPvzNeGE9PFkyv4zL%2FDCj97CTuG47i2s%2FYhV8ZeZStJKWMFY8UsNC2M0nOLDV5jCy57kPwMSCnUZmlfl4w%2B8hDNOpZseHhGWH6Kbx9A49zgd5AwOoD2g2LhMtFZYPv1jSb8EbjluRLFrqAhxorHDv3VvoNfFGGMD4zkXuSF7idFQq8pAhB0RaHsYH8m4IMM6V5MAGOqUBYXUYo8rSTvunv7I4NDra9vNwdpbSWLcOIE7oRrrJdK6SWWZJpOSCCdoqd4SJFF0bfRN8IYSxoW%2B0DBdqmUh4RahpuTSiFRl04OJskBWKwPfmEaBhuMKA4NmzvErYmRZkpL0kG3KYv035ZXQIDiVm1ERO1XXU845YLCdVXJ5tXxr%2FuGvnFTC6cDW6GL8WNBdWz0MG%2BJkERGrtXVt%2Btz3YbZxWSBzU&X-Amz-Signature=4bece6165c254c08ab617dd52c9efa93d1e80b1674e40f5474c07d74cc410f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOOVENC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BXZd%2BoOCnH81Bv%2FrhvABIkA1Sz%2BtzeOeTkhbdqr8%2F4AIgZs82R3ZmKMgUIRDYXBAeqm1xmz8Wg0oA3R14QSHDJGYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE4NInixzsG4alwl1CrcA8IQimjkRKFcv2HsX%2BXuYCVgMJ7LMRm%2BmYUyTRDY0U1iI69GNNCcAS7fRrT2%2FUhx3cP4sPhIKFoK3DeK67ZvdHQh8NnjAuZ7OeyCPx0rLH9IQon6uIZsyGXkuMAhoHv3ymjhFjFyj%2FaKEx%2FCo2yx6WJjIsqF9rY2DIaGc0dq%2BuR4ZQ5zvW5yUZqtIjdvBDxB3doSsxtn19LQDbljX0dQRMN58fg8%2Bf3ZFNfsMYMbte0zwtYIZlhcStVyGlCxq4vU7%2Bx2iEHurkh2bobbW2iwljXLGXObvPg12xi9jhIRSjaBI3ohP9evaJtudDc30n5vmRSstZe%2BzfjJtAq5RJmHWZhL751m%2FQQq91feRefu2EbZSR0CbwYf0rU1W3UDSlX3EZNya0yglQHmDWlqBrvVHBS4OsPfnC5qZIHwKXRo2vzK%2Bh2AOTCXO1PSkniBz3rnPvzNeGE9PFkyv4zL%2FDCj97CTuG47i2s%2FYhV8ZeZStJKWMFY8UsNC2M0nOLDV5jCy57kPwMSCnUZmlfl4w%2B8hDNOpZseHhGWH6Kbx9A49zgd5AwOoD2g2LhMtFZYPv1jSb8EbjluRLFrqAhxorHDv3VvoNfFGGMD4zkXuSF7idFQq8pAhB0RaHsYH8m4IMM6V5MAGOqUBYXUYo8rSTvunv7I4NDra9vNwdpbSWLcOIE7oRrrJdK6SWWZJpOSCCdoqd4SJFF0bfRN8IYSxoW%2B0DBdqmUh4RahpuTSiFRl04OJskBWKwPfmEaBhuMKA4NmzvErYmRZkpL0kG3KYv035ZXQIDiVm1ERO1XXU845YLCdVXJ5tXxr%2FuGvnFTC6cDW6GL8WNBdWz0MG%2BJkERGrtXVt%2Btz3YbZxWSBzU&X-Amz-Signature=97e364fe72e53f0bd4b4a23ce0a2be51427ac2f8535ddffc6e4c4ddda7bab2a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOOVENC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BXZd%2BoOCnH81Bv%2FrhvABIkA1Sz%2BtzeOeTkhbdqr8%2F4AIgZs82R3ZmKMgUIRDYXBAeqm1xmz8Wg0oA3R14QSHDJGYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE4NInixzsG4alwl1CrcA8IQimjkRKFcv2HsX%2BXuYCVgMJ7LMRm%2BmYUyTRDY0U1iI69GNNCcAS7fRrT2%2FUhx3cP4sPhIKFoK3DeK67ZvdHQh8NnjAuZ7OeyCPx0rLH9IQon6uIZsyGXkuMAhoHv3ymjhFjFyj%2FaKEx%2FCo2yx6WJjIsqF9rY2DIaGc0dq%2BuR4ZQ5zvW5yUZqtIjdvBDxB3doSsxtn19LQDbljX0dQRMN58fg8%2Bf3ZFNfsMYMbte0zwtYIZlhcStVyGlCxq4vU7%2Bx2iEHurkh2bobbW2iwljXLGXObvPg12xi9jhIRSjaBI3ohP9evaJtudDc30n5vmRSstZe%2BzfjJtAq5RJmHWZhL751m%2FQQq91feRefu2EbZSR0CbwYf0rU1W3UDSlX3EZNya0yglQHmDWlqBrvVHBS4OsPfnC5qZIHwKXRo2vzK%2Bh2AOTCXO1PSkniBz3rnPvzNeGE9PFkyv4zL%2FDCj97CTuG47i2s%2FYhV8ZeZStJKWMFY8UsNC2M0nOLDV5jCy57kPwMSCnUZmlfl4w%2B8hDNOpZseHhGWH6Kbx9A49zgd5AwOoD2g2LhMtFZYPv1jSb8EbjluRLFrqAhxorHDv3VvoNfFGGMD4zkXuSF7idFQq8pAhB0RaHsYH8m4IMM6V5MAGOqUBYXUYo8rSTvunv7I4NDra9vNwdpbSWLcOIE7oRrrJdK6SWWZJpOSCCdoqd4SJFF0bfRN8IYSxoW%2B0DBdqmUh4RahpuTSiFRl04OJskBWKwPfmEaBhuMKA4NmzvErYmRZkpL0kG3KYv035ZXQIDiVm1ERO1XXU845YLCdVXJ5tXxr%2FuGvnFTC6cDW6GL8WNBdWz0MG%2BJkERGrtXVt%2Btz3YbZxWSBzU&X-Amz-Signature=1ea26acf14effd89bf42b622f2eaa06e4852961ce5d1c75a9f2e25cc8af98fee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

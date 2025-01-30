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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R3SAMTZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN16aQKENiQrb9DtA9%2BbBckSaT0E0aEydHdSfmGfalVQIgKRcjE6wojm2llvvTEvwiHQ5Q7ZJopioX49SElXf8xJIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQjPatLXAKjKTOkSrcA7z9yY3l465u0GJa5Bf5fP6BfqNC9ZlKJfI5Nfv3cpUifV4b9Ol1QsCSyUFJLjbaK9zySkHrJ35zWUMqYpcMCXB7AfnSTzP8EDMi7vJ%2BCCySlhfyuKbnz4ljT%2BBdF70L8WgJrUI0FtBhE7%2FO9mxfEuw6OKEcZKfIqpziGVgYXNtG0%2FW4Qns3kJh%2FVzOPa5pzGu%2B6EA4VAY7etfY0w9UXxunMhpev%2Fu4cOwLarjpOCYqEvKFn3AlQ6VoqbzjSY%2Fjh1GdHPt9U7f1Y7Ug50QjnlfeA0ruNz9ERRKXfZFspSqgk6gZJPuHpw7yvApsqA%2F5%2BqzBJNtBBKNbCo43%2FpcddqRmWit82BY3MywFmHPLMC%2BV%2Fo2EFlsoWIKIwU%2BknJpjXu%2B%2BA%2FD0uMIrbRbE93gZtWk4b2eLz7tRYd1b2k5ZQ1eCio91Fin7jcpfnvYmfhdlI6MIJSw7rTK1OSY7Q7XaMymzTUZmDz0JihA5o9X5Ct8jmUvyc64NNi2pRxnIWtnYwIbOGUbarG84JTICP8ryMCsB%2BQVh2eYZiib5EWctbSUmFHycP4kAc%2BmgbKgMQoqdYNIbbke1TmuTusfb0uxWZvaWWWL6PvXvgJ0ypLaLHDbjAgQcX%2B%2F%2FZXqdgKAuAMPnt7LwGOqUBMePIilttTT66qRuHKHOocj20%2B8%2Fm0AKMpTUt8WY%2BwUGDkBpf1GV6PnSb5j%2FV%2FVvSFHzjzqSHVu0msaJtbYr1DRvO09yxKh6fWGMV%2BidcAtaD0%2FwSxu26qTwDbzOxKwp1Gyk7%2Bf%2Frzoq7ZRSkkM60vjDcAH8FDNmrslKGon5eJFDJuaKPrhRH5R2IGVVLBneOjTRAvmrNuVes5V35ffXdtz9bH820&X-Amz-Signature=1eba24809acd1b688199e7ad8877c7b89b6592a2b5bdfc9fa50732b920369bde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R3SAMTZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN16aQKENiQrb9DtA9%2BbBckSaT0E0aEydHdSfmGfalVQIgKRcjE6wojm2llvvTEvwiHQ5Q7ZJopioX49SElXf8xJIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQjPatLXAKjKTOkSrcA7z9yY3l465u0GJa5Bf5fP6BfqNC9ZlKJfI5Nfv3cpUifV4b9Ol1QsCSyUFJLjbaK9zySkHrJ35zWUMqYpcMCXB7AfnSTzP8EDMi7vJ%2BCCySlhfyuKbnz4ljT%2BBdF70L8WgJrUI0FtBhE7%2FO9mxfEuw6OKEcZKfIqpziGVgYXNtG0%2FW4Qns3kJh%2FVzOPa5pzGu%2B6EA4VAY7etfY0w9UXxunMhpev%2Fu4cOwLarjpOCYqEvKFn3AlQ6VoqbzjSY%2Fjh1GdHPt9U7f1Y7Ug50QjnlfeA0ruNz9ERRKXfZFspSqgk6gZJPuHpw7yvApsqA%2F5%2BqzBJNtBBKNbCo43%2FpcddqRmWit82BY3MywFmHPLMC%2BV%2Fo2EFlsoWIKIwU%2BknJpjXu%2B%2BA%2FD0uMIrbRbE93gZtWk4b2eLz7tRYd1b2k5ZQ1eCio91Fin7jcpfnvYmfhdlI6MIJSw7rTK1OSY7Q7XaMymzTUZmDz0JihA5o9X5Ct8jmUvyc64NNi2pRxnIWtnYwIbOGUbarG84JTICP8ryMCsB%2BQVh2eYZiib5EWctbSUmFHycP4kAc%2BmgbKgMQoqdYNIbbke1TmuTusfb0uxWZvaWWWL6PvXvgJ0ypLaLHDbjAgQcX%2B%2F%2FZXqdgKAuAMPnt7LwGOqUBMePIilttTT66qRuHKHOocj20%2B8%2Fm0AKMpTUt8WY%2BwUGDkBpf1GV6PnSb5j%2FV%2FVvSFHzjzqSHVu0msaJtbYr1DRvO09yxKh6fWGMV%2BidcAtaD0%2FwSxu26qTwDbzOxKwp1Gyk7%2Bf%2Frzoq7ZRSkkM60vjDcAH8FDNmrslKGon5eJFDJuaKPrhRH5R2IGVVLBneOjTRAvmrNuVes5V35ffXdtz9bH820&X-Amz-Signature=47867309e227ce018af36b9735a9ae981e261222d2eab07e8b577d4685dd74f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R3SAMTZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN16aQKENiQrb9DtA9%2BbBckSaT0E0aEydHdSfmGfalVQIgKRcjE6wojm2llvvTEvwiHQ5Q7ZJopioX49SElXf8xJIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQjPatLXAKjKTOkSrcA7z9yY3l465u0GJa5Bf5fP6BfqNC9ZlKJfI5Nfv3cpUifV4b9Ol1QsCSyUFJLjbaK9zySkHrJ35zWUMqYpcMCXB7AfnSTzP8EDMi7vJ%2BCCySlhfyuKbnz4ljT%2BBdF70L8WgJrUI0FtBhE7%2FO9mxfEuw6OKEcZKfIqpziGVgYXNtG0%2FW4Qns3kJh%2FVzOPa5pzGu%2B6EA4VAY7etfY0w9UXxunMhpev%2Fu4cOwLarjpOCYqEvKFn3AlQ6VoqbzjSY%2Fjh1GdHPt9U7f1Y7Ug50QjnlfeA0ruNz9ERRKXfZFspSqgk6gZJPuHpw7yvApsqA%2F5%2BqzBJNtBBKNbCo43%2FpcddqRmWit82BY3MywFmHPLMC%2BV%2Fo2EFlsoWIKIwU%2BknJpjXu%2B%2BA%2FD0uMIrbRbE93gZtWk4b2eLz7tRYd1b2k5ZQ1eCio91Fin7jcpfnvYmfhdlI6MIJSw7rTK1OSY7Q7XaMymzTUZmDz0JihA5o9X5Ct8jmUvyc64NNi2pRxnIWtnYwIbOGUbarG84JTICP8ryMCsB%2BQVh2eYZiib5EWctbSUmFHycP4kAc%2BmgbKgMQoqdYNIbbke1TmuTusfb0uxWZvaWWWL6PvXvgJ0ypLaLHDbjAgQcX%2B%2F%2FZXqdgKAuAMPnt7LwGOqUBMePIilttTT66qRuHKHOocj20%2B8%2Fm0AKMpTUt8WY%2BwUGDkBpf1GV6PnSb5j%2FV%2FVvSFHzjzqSHVu0msaJtbYr1DRvO09yxKh6fWGMV%2BidcAtaD0%2FwSxu26qTwDbzOxKwp1Gyk7%2Bf%2Frzoq7ZRSkkM60vjDcAH8FDNmrslKGon5eJFDJuaKPrhRH5R2IGVVLBneOjTRAvmrNuVes5V35ffXdtz9bH820&X-Amz-Signature=6179bd20dd8981f3ebc8803f01f5448e24959a694183e9e3abb10cd2fa8141e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R3SAMTZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN16aQKENiQrb9DtA9%2BbBckSaT0E0aEydHdSfmGfalVQIgKRcjE6wojm2llvvTEvwiHQ5Q7ZJopioX49SElXf8xJIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQjPatLXAKjKTOkSrcA7z9yY3l465u0GJa5Bf5fP6BfqNC9ZlKJfI5Nfv3cpUifV4b9Ol1QsCSyUFJLjbaK9zySkHrJ35zWUMqYpcMCXB7AfnSTzP8EDMi7vJ%2BCCySlhfyuKbnz4ljT%2BBdF70L8WgJrUI0FtBhE7%2FO9mxfEuw6OKEcZKfIqpziGVgYXNtG0%2FW4Qns3kJh%2FVzOPa5pzGu%2B6EA4VAY7etfY0w9UXxunMhpev%2Fu4cOwLarjpOCYqEvKFn3AlQ6VoqbzjSY%2Fjh1GdHPt9U7f1Y7Ug50QjnlfeA0ruNz9ERRKXfZFspSqgk6gZJPuHpw7yvApsqA%2F5%2BqzBJNtBBKNbCo43%2FpcddqRmWit82BY3MywFmHPLMC%2BV%2Fo2EFlsoWIKIwU%2BknJpjXu%2B%2BA%2FD0uMIrbRbE93gZtWk4b2eLz7tRYd1b2k5ZQ1eCio91Fin7jcpfnvYmfhdlI6MIJSw7rTK1OSY7Q7XaMymzTUZmDz0JihA5o9X5Ct8jmUvyc64NNi2pRxnIWtnYwIbOGUbarG84JTICP8ryMCsB%2BQVh2eYZiib5EWctbSUmFHycP4kAc%2BmgbKgMQoqdYNIbbke1TmuTusfb0uxWZvaWWWL6PvXvgJ0ypLaLHDbjAgQcX%2B%2F%2FZXqdgKAuAMPnt7LwGOqUBMePIilttTT66qRuHKHOocj20%2B8%2Fm0AKMpTUt8WY%2BwUGDkBpf1GV6PnSb5j%2FV%2FVvSFHzjzqSHVu0msaJtbYr1DRvO09yxKh6fWGMV%2BidcAtaD0%2FwSxu26qTwDbzOxKwp1Gyk7%2Bf%2Frzoq7ZRSkkM60vjDcAH8FDNmrslKGon5eJFDJuaKPrhRH5R2IGVVLBneOjTRAvmrNuVes5V35ffXdtz9bH820&X-Amz-Signature=08a6bf069912825b2e7411fe23379f1620c5736d19cda549f264f863327d71bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R3SAMTZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN16aQKENiQrb9DtA9%2BbBckSaT0E0aEydHdSfmGfalVQIgKRcjE6wojm2llvvTEvwiHQ5Q7ZJopioX49SElXf8xJIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQjPatLXAKjKTOkSrcA7z9yY3l465u0GJa5Bf5fP6BfqNC9ZlKJfI5Nfv3cpUifV4b9Ol1QsCSyUFJLjbaK9zySkHrJ35zWUMqYpcMCXB7AfnSTzP8EDMi7vJ%2BCCySlhfyuKbnz4ljT%2BBdF70L8WgJrUI0FtBhE7%2FO9mxfEuw6OKEcZKfIqpziGVgYXNtG0%2FW4Qns3kJh%2FVzOPa5pzGu%2B6EA4VAY7etfY0w9UXxunMhpev%2Fu4cOwLarjpOCYqEvKFn3AlQ6VoqbzjSY%2Fjh1GdHPt9U7f1Y7Ug50QjnlfeA0ruNz9ERRKXfZFspSqgk6gZJPuHpw7yvApsqA%2F5%2BqzBJNtBBKNbCo43%2FpcddqRmWit82BY3MywFmHPLMC%2BV%2Fo2EFlsoWIKIwU%2BknJpjXu%2B%2BA%2FD0uMIrbRbE93gZtWk4b2eLz7tRYd1b2k5ZQ1eCio91Fin7jcpfnvYmfhdlI6MIJSw7rTK1OSY7Q7XaMymzTUZmDz0JihA5o9X5Ct8jmUvyc64NNi2pRxnIWtnYwIbOGUbarG84JTICP8ryMCsB%2BQVh2eYZiib5EWctbSUmFHycP4kAc%2BmgbKgMQoqdYNIbbke1TmuTusfb0uxWZvaWWWL6PvXvgJ0ypLaLHDbjAgQcX%2B%2F%2FZXqdgKAuAMPnt7LwGOqUBMePIilttTT66qRuHKHOocj20%2B8%2Fm0AKMpTUt8WY%2BwUGDkBpf1GV6PnSb5j%2FV%2FVvSFHzjzqSHVu0msaJtbYr1DRvO09yxKh6fWGMV%2BidcAtaD0%2FwSxu26qTwDbzOxKwp1Gyk7%2Bf%2Frzoq7ZRSkkM60vjDcAH8FDNmrslKGon5eJFDJuaKPrhRH5R2IGVVLBneOjTRAvmrNuVes5V35ffXdtz9bH820&X-Amz-Signature=c88df0c1871647423f0b3d72278f3107827528838c3721255d63aafe403ce73e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R3SAMTZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN16aQKENiQrb9DtA9%2BbBckSaT0E0aEydHdSfmGfalVQIgKRcjE6wojm2llvvTEvwiHQ5Q7ZJopioX49SElXf8xJIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQjPatLXAKjKTOkSrcA7z9yY3l465u0GJa5Bf5fP6BfqNC9ZlKJfI5Nfv3cpUifV4b9Ol1QsCSyUFJLjbaK9zySkHrJ35zWUMqYpcMCXB7AfnSTzP8EDMi7vJ%2BCCySlhfyuKbnz4ljT%2BBdF70L8WgJrUI0FtBhE7%2FO9mxfEuw6OKEcZKfIqpziGVgYXNtG0%2FW4Qns3kJh%2FVzOPa5pzGu%2B6EA4VAY7etfY0w9UXxunMhpev%2Fu4cOwLarjpOCYqEvKFn3AlQ6VoqbzjSY%2Fjh1GdHPt9U7f1Y7Ug50QjnlfeA0ruNz9ERRKXfZFspSqgk6gZJPuHpw7yvApsqA%2F5%2BqzBJNtBBKNbCo43%2FpcddqRmWit82BY3MywFmHPLMC%2BV%2Fo2EFlsoWIKIwU%2BknJpjXu%2B%2BA%2FD0uMIrbRbE93gZtWk4b2eLz7tRYd1b2k5ZQ1eCio91Fin7jcpfnvYmfhdlI6MIJSw7rTK1OSY7Q7XaMymzTUZmDz0JihA5o9X5Ct8jmUvyc64NNi2pRxnIWtnYwIbOGUbarG84JTICP8ryMCsB%2BQVh2eYZiib5EWctbSUmFHycP4kAc%2BmgbKgMQoqdYNIbbke1TmuTusfb0uxWZvaWWWL6PvXvgJ0ypLaLHDbjAgQcX%2B%2F%2FZXqdgKAuAMPnt7LwGOqUBMePIilttTT66qRuHKHOocj20%2B8%2Fm0AKMpTUt8WY%2BwUGDkBpf1GV6PnSb5j%2FV%2FVvSFHzjzqSHVu0msaJtbYr1DRvO09yxKh6fWGMV%2BidcAtaD0%2FwSxu26qTwDbzOxKwp1Gyk7%2Bf%2Frzoq7ZRSkkM60vjDcAH8FDNmrslKGon5eJFDJuaKPrhRH5R2IGVVLBneOjTRAvmrNuVes5V35ffXdtz9bH820&X-Amz-Signature=047c54ed4f7a424e3144a3a946128ae020ff5a38af0d9903105d04bf7eab6bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R3SAMTZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN16aQKENiQrb9DtA9%2BbBckSaT0E0aEydHdSfmGfalVQIgKRcjE6wojm2llvvTEvwiHQ5Q7ZJopioX49SElXf8xJIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQjPatLXAKjKTOkSrcA7z9yY3l465u0GJa5Bf5fP6BfqNC9ZlKJfI5Nfv3cpUifV4b9Ol1QsCSyUFJLjbaK9zySkHrJ35zWUMqYpcMCXB7AfnSTzP8EDMi7vJ%2BCCySlhfyuKbnz4ljT%2BBdF70L8WgJrUI0FtBhE7%2FO9mxfEuw6OKEcZKfIqpziGVgYXNtG0%2FW4Qns3kJh%2FVzOPa5pzGu%2B6EA4VAY7etfY0w9UXxunMhpev%2Fu4cOwLarjpOCYqEvKFn3AlQ6VoqbzjSY%2Fjh1GdHPt9U7f1Y7Ug50QjnlfeA0ruNz9ERRKXfZFspSqgk6gZJPuHpw7yvApsqA%2F5%2BqzBJNtBBKNbCo43%2FpcddqRmWit82BY3MywFmHPLMC%2BV%2Fo2EFlsoWIKIwU%2BknJpjXu%2B%2BA%2FD0uMIrbRbE93gZtWk4b2eLz7tRYd1b2k5ZQ1eCio91Fin7jcpfnvYmfhdlI6MIJSw7rTK1OSY7Q7XaMymzTUZmDz0JihA5o9X5Ct8jmUvyc64NNi2pRxnIWtnYwIbOGUbarG84JTICP8ryMCsB%2BQVh2eYZiib5EWctbSUmFHycP4kAc%2BmgbKgMQoqdYNIbbke1TmuTusfb0uxWZvaWWWL6PvXvgJ0ypLaLHDbjAgQcX%2B%2F%2FZXqdgKAuAMPnt7LwGOqUBMePIilttTT66qRuHKHOocj20%2B8%2Fm0AKMpTUt8WY%2BwUGDkBpf1GV6PnSb5j%2FV%2FVvSFHzjzqSHVu0msaJtbYr1DRvO09yxKh6fWGMV%2BidcAtaD0%2FwSxu26qTwDbzOxKwp1Gyk7%2Bf%2Frzoq7ZRSkkM60vjDcAH8FDNmrslKGon5eJFDJuaKPrhRH5R2IGVVLBneOjTRAvmrNuVes5V35ffXdtz9bH820&X-Amz-Signature=2ef42f8973829078843e5c4704b333d28ec4bb9ef981ba6f5b8b82468385ed14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R3SAMTZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN16aQKENiQrb9DtA9%2BbBckSaT0E0aEydHdSfmGfalVQIgKRcjE6wojm2llvvTEvwiHQ5Q7ZJopioX49SElXf8xJIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpQjPatLXAKjKTOkSrcA7z9yY3l465u0GJa5Bf5fP6BfqNC9ZlKJfI5Nfv3cpUifV4b9Ol1QsCSyUFJLjbaK9zySkHrJ35zWUMqYpcMCXB7AfnSTzP8EDMi7vJ%2BCCySlhfyuKbnz4ljT%2BBdF70L8WgJrUI0FtBhE7%2FO9mxfEuw6OKEcZKfIqpziGVgYXNtG0%2FW4Qns3kJh%2FVzOPa5pzGu%2B6EA4VAY7etfY0w9UXxunMhpev%2Fu4cOwLarjpOCYqEvKFn3AlQ6VoqbzjSY%2Fjh1GdHPt9U7f1Y7Ug50QjnlfeA0ruNz9ERRKXfZFspSqgk6gZJPuHpw7yvApsqA%2F5%2BqzBJNtBBKNbCo43%2FpcddqRmWit82BY3MywFmHPLMC%2BV%2Fo2EFlsoWIKIwU%2BknJpjXu%2B%2BA%2FD0uMIrbRbE93gZtWk4b2eLz7tRYd1b2k5ZQ1eCio91Fin7jcpfnvYmfhdlI6MIJSw7rTK1OSY7Q7XaMymzTUZmDz0JihA5o9X5Ct8jmUvyc64NNi2pRxnIWtnYwIbOGUbarG84JTICP8ryMCsB%2BQVh2eYZiib5EWctbSUmFHycP4kAc%2BmgbKgMQoqdYNIbbke1TmuTusfb0uxWZvaWWWL6PvXvgJ0ypLaLHDbjAgQcX%2B%2F%2FZXqdgKAuAMPnt7LwGOqUBMePIilttTT66qRuHKHOocj20%2B8%2Fm0AKMpTUt8WY%2BwUGDkBpf1GV6PnSb5j%2FV%2FVvSFHzjzqSHVu0msaJtbYr1DRvO09yxKh6fWGMV%2BidcAtaD0%2FwSxu26qTwDbzOxKwp1Gyk7%2Bf%2Frzoq7ZRSkkM60vjDcAH8FDNmrslKGon5eJFDJuaKPrhRH5R2IGVVLBneOjTRAvmrNuVes5V35ffXdtz9bH820&X-Amz-Signature=1502e667b53c16d1799cdae8c28ef71c520eddfef87518e586a00f293152156b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

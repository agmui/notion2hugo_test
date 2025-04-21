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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAOZEJT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH56Fa6O6wsAGt2GxtElaXZ6XYAH49FkJ1gMb5i05KkcAiAMEDgFIfKsBPvjxqw8MUmfUo422c3v08njlVwk9SSc%2BSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcHm9fkr%2B5QVdfqNKtwDBlIXwVMyHRjPR9bw8Ik22vSufNRLWAISyHLPu1tTJcBpFRyQytGUNHkjOlHQtSPi%2BuKH2ulic9kFYrGGAJo%2FhskK1MVbV2NA2cy0dz3aBYheKtyy9BXexqTypaJAO%2BCu2M%2FQguwdmfKjK6yqPIuYsNG8oRq5rhJmJcj9vQdUL0zcdtCmEn0RomtXYi6GzDaeMXVIVYNMwek4orkArllafNQNdvoUG%2FlFqll7i61kmdexMViCKoTYjGyanJs8hU%2Bvco%2BoKO7ZFtqOqbuXtPrr8oevxELBCLSYW%2BQ%2F%2F7fBo2oi55R0m%2BXKP6fU0t5QQgjcp1BjbOsqQrSwhIcTgR%2Fwnh1vyREAnFLxVi0c5K9MynUXUkNddqBcBGIunheu%2F8AU3qqdyDUUPEVj%2F9%2ByDCb2KPzU80gp2%2F89p93PAF2AkeiSEk7Vb315aG4ciLIXMrR9Zqd9XI7xhOzOz%2F5HoJ4Aaru0rEC6GzESY2b2%2Bdev%2Bmmv2krTwlG0rwYr9%2FgeOVOh8He9kfMpZKfTX9WJMx6xSvM%2B%2F4xyE3iAB6J6cbIZ4Y9Y9ErIuWq6YaHiVm5MHaPzuVX5XVSlveQI%2BxAq9Ks35qtX2F%2B48VLGc0OKcHVK4uAVHkB3Rn6srQMmbk4wxfKXwAY6pgFM%2Fdd%2BQRfNyz8lZPmflWbrR2Oi7%2FZuTU0rhcnp8rmI8Kq6YAWMQQtYcc71TlHz5jm%2BKo3ygMwn2Wf6FjGcbxF%2F1MynUt5wuealFOrUBYxNqRUDuJcuEHQRtT0gbAygc0%2Bk9m%2FZz0e4RhvuK5AaP4XT0VYPuRkocSJFzZIJCsGhxrAfQPNDzMLrdvRlwvn%2FQarezGugwNkvUG68UEx1MGmW%2BZNRCjLh&X-Amz-Signature=61cba7505cfced8542e3b71fec00a99ceefc70c42c36f27a9267ed13784c506c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAOZEJT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH56Fa6O6wsAGt2GxtElaXZ6XYAH49FkJ1gMb5i05KkcAiAMEDgFIfKsBPvjxqw8MUmfUo422c3v08njlVwk9SSc%2BSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcHm9fkr%2B5QVdfqNKtwDBlIXwVMyHRjPR9bw8Ik22vSufNRLWAISyHLPu1tTJcBpFRyQytGUNHkjOlHQtSPi%2BuKH2ulic9kFYrGGAJo%2FhskK1MVbV2NA2cy0dz3aBYheKtyy9BXexqTypaJAO%2BCu2M%2FQguwdmfKjK6yqPIuYsNG8oRq5rhJmJcj9vQdUL0zcdtCmEn0RomtXYi6GzDaeMXVIVYNMwek4orkArllafNQNdvoUG%2FlFqll7i61kmdexMViCKoTYjGyanJs8hU%2Bvco%2BoKO7ZFtqOqbuXtPrr8oevxELBCLSYW%2BQ%2F%2F7fBo2oi55R0m%2BXKP6fU0t5QQgjcp1BjbOsqQrSwhIcTgR%2Fwnh1vyREAnFLxVi0c5K9MynUXUkNddqBcBGIunheu%2F8AU3qqdyDUUPEVj%2F9%2ByDCb2KPzU80gp2%2F89p93PAF2AkeiSEk7Vb315aG4ciLIXMrR9Zqd9XI7xhOzOz%2F5HoJ4Aaru0rEC6GzESY2b2%2Bdev%2Bmmv2krTwlG0rwYr9%2FgeOVOh8He9kfMpZKfTX9WJMx6xSvM%2B%2F4xyE3iAB6J6cbIZ4Y9Y9ErIuWq6YaHiVm5MHaPzuVX5XVSlveQI%2BxAq9Ks35qtX2F%2B48VLGc0OKcHVK4uAVHkB3Rn6srQMmbk4wxfKXwAY6pgFM%2Fdd%2BQRfNyz8lZPmflWbrR2Oi7%2FZuTU0rhcnp8rmI8Kq6YAWMQQtYcc71TlHz5jm%2BKo3ygMwn2Wf6FjGcbxF%2F1MynUt5wuealFOrUBYxNqRUDuJcuEHQRtT0gbAygc0%2Bk9m%2FZz0e4RhvuK5AaP4XT0VYPuRkocSJFzZIJCsGhxrAfQPNDzMLrdvRlwvn%2FQarezGugwNkvUG68UEx1MGmW%2BZNRCjLh&X-Amz-Signature=b1ee2bacbd420e35ce98be956485b9bb9f61cca3e29693bd154dd42b60b2fcc6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAOZEJT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH56Fa6O6wsAGt2GxtElaXZ6XYAH49FkJ1gMb5i05KkcAiAMEDgFIfKsBPvjxqw8MUmfUo422c3v08njlVwk9SSc%2BSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcHm9fkr%2B5QVdfqNKtwDBlIXwVMyHRjPR9bw8Ik22vSufNRLWAISyHLPu1tTJcBpFRyQytGUNHkjOlHQtSPi%2BuKH2ulic9kFYrGGAJo%2FhskK1MVbV2NA2cy0dz3aBYheKtyy9BXexqTypaJAO%2BCu2M%2FQguwdmfKjK6yqPIuYsNG8oRq5rhJmJcj9vQdUL0zcdtCmEn0RomtXYi6GzDaeMXVIVYNMwek4orkArllafNQNdvoUG%2FlFqll7i61kmdexMViCKoTYjGyanJs8hU%2Bvco%2BoKO7ZFtqOqbuXtPrr8oevxELBCLSYW%2BQ%2F%2F7fBo2oi55R0m%2BXKP6fU0t5QQgjcp1BjbOsqQrSwhIcTgR%2Fwnh1vyREAnFLxVi0c5K9MynUXUkNddqBcBGIunheu%2F8AU3qqdyDUUPEVj%2F9%2ByDCb2KPzU80gp2%2F89p93PAF2AkeiSEk7Vb315aG4ciLIXMrR9Zqd9XI7xhOzOz%2F5HoJ4Aaru0rEC6GzESY2b2%2Bdev%2Bmmv2krTwlG0rwYr9%2FgeOVOh8He9kfMpZKfTX9WJMx6xSvM%2B%2F4xyE3iAB6J6cbIZ4Y9Y9ErIuWq6YaHiVm5MHaPzuVX5XVSlveQI%2BxAq9Ks35qtX2F%2B48VLGc0OKcHVK4uAVHkB3Rn6srQMmbk4wxfKXwAY6pgFM%2Fdd%2BQRfNyz8lZPmflWbrR2Oi7%2FZuTU0rhcnp8rmI8Kq6YAWMQQtYcc71TlHz5jm%2BKo3ygMwn2Wf6FjGcbxF%2F1MynUt5wuealFOrUBYxNqRUDuJcuEHQRtT0gbAygc0%2Bk9m%2FZz0e4RhvuK5AaP4XT0VYPuRkocSJFzZIJCsGhxrAfQPNDzMLrdvRlwvn%2FQarezGugwNkvUG68UEx1MGmW%2BZNRCjLh&X-Amz-Signature=2393bda25c61b259ec52e421e9fb6198b957d08288a2140c07c0cfc5b87e3833&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAOZEJT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH56Fa6O6wsAGt2GxtElaXZ6XYAH49FkJ1gMb5i05KkcAiAMEDgFIfKsBPvjxqw8MUmfUo422c3v08njlVwk9SSc%2BSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcHm9fkr%2B5QVdfqNKtwDBlIXwVMyHRjPR9bw8Ik22vSufNRLWAISyHLPu1tTJcBpFRyQytGUNHkjOlHQtSPi%2BuKH2ulic9kFYrGGAJo%2FhskK1MVbV2NA2cy0dz3aBYheKtyy9BXexqTypaJAO%2BCu2M%2FQguwdmfKjK6yqPIuYsNG8oRq5rhJmJcj9vQdUL0zcdtCmEn0RomtXYi6GzDaeMXVIVYNMwek4orkArllafNQNdvoUG%2FlFqll7i61kmdexMViCKoTYjGyanJs8hU%2Bvco%2BoKO7ZFtqOqbuXtPrr8oevxELBCLSYW%2BQ%2F%2F7fBo2oi55R0m%2BXKP6fU0t5QQgjcp1BjbOsqQrSwhIcTgR%2Fwnh1vyREAnFLxVi0c5K9MynUXUkNddqBcBGIunheu%2F8AU3qqdyDUUPEVj%2F9%2ByDCb2KPzU80gp2%2F89p93PAF2AkeiSEk7Vb315aG4ciLIXMrR9Zqd9XI7xhOzOz%2F5HoJ4Aaru0rEC6GzESY2b2%2Bdev%2Bmmv2krTwlG0rwYr9%2FgeOVOh8He9kfMpZKfTX9WJMx6xSvM%2B%2F4xyE3iAB6J6cbIZ4Y9Y9ErIuWq6YaHiVm5MHaPzuVX5XVSlveQI%2BxAq9Ks35qtX2F%2B48VLGc0OKcHVK4uAVHkB3Rn6srQMmbk4wxfKXwAY6pgFM%2Fdd%2BQRfNyz8lZPmflWbrR2Oi7%2FZuTU0rhcnp8rmI8Kq6YAWMQQtYcc71TlHz5jm%2BKo3ygMwn2Wf6FjGcbxF%2F1MynUt5wuealFOrUBYxNqRUDuJcuEHQRtT0gbAygc0%2Bk9m%2FZz0e4RhvuK5AaP4XT0VYPuRkocSJFzZIJCsGhxrAfQPNDzMLrdvRlwvn%2FQarezGugwNkvUG68UEx1MGmW%2BZNRCjLh&X-Amz-Signature=c229db68115ab8ea37c5a2bf7bcad438b7588e2431dba0a80749e002f05e1a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAOZEJT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH56Fa6O6wsAGt2GxtElaXZ6XYAH49FkJ1gMb5i05KkcAiAMEDgFIfKsBPvjxqw8MUmfUo422c3v08njlVwk9SSc%2BSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcHm9fkr%2B5QVdfqNKtwDBlIXwVMyHRjPR9bw8Ik22vSufNRLWAISyHLPu1tTJcBpFRyQytGUNHkjOlHQtSPi%2BuKH2ulic9kFYrGGAJo%2FhskK1MVbV2NA2cy0dz3aBYheKtyy9BXexqTypaJAO%2BCu2M%2FQguwdmfKjK6yqPIuYsNG8oRq5rhJmJcj9vQdUL0zcdtCmEn0RomtXYi6GzDaeMXVIVYNMwek4orkArllafNQNdvoUG%2FlFqll7i61kmdexMViCKoTYjGyanJs8hU%2Bvco%2BoKO7ZFtqOqbuXtPrr8oevxELBCLSYW%2BQ%2F%2F7fBo2oi55R0m%2BXKP6fU0t5QQgjcp1BjbOsqQrSwhIcTgR%2Fwnh1vyREAnFLxVi0c5K9MynUXUkNddqBcBGIunheu%2F8AU3qqdyDUUPEVj%2F9%2ByDCb2KPzU80gp2%2F89p93PAF2AkeiSEk7Vb315aG4ciLIXMrR9Zqd9XI7xhOzOz%2F5HoJ4Aaru0rEC6GzESY2b2%2Bdev%2Bmmv2krTwlG0rwYr9%2FgeOVOh8He9kfMpZKfTX9WJMx6xSvM%2B%2F4xyE3iAB6J6cbIZ4Y9Y9ErIuWq6YaHiVm5MHaPzuVX5XVSlveQI%2BxAq9Ks35qtX2F%2B48VLGc0OKcHVK4uAVHkB3Rn6srQMmbk4wxfKXwAY6pgFM%2Fdd%2BQRfNyz8lZPmflWbrR2Oi7%2FZuTU0rhcnp8rmI8Kq6YAWMQQtYcc71TlHz5jm%2BKo3ygMwn2Wf6FjGcbxF%2F1MynUt5wuealFOrUBYxNqRUDuJcuEHQRtT0gbAygc0%2Bk9m%2FZz0e4RhvuK5AaP4XT0VYPuRkocSJFzZIJCsGhxrAfQPNDzMLrdvRlwvn%2FQarezGugwNkvUG68UEx1MGmW%2BZNRCjLh&X-Amz-Signature=d7698c6739ba5ea8de4c36a0fd5a71b0544b0d0e3e7101f6b281595de4ac0547&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAOZEJT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH56Fa6O6wsAGt2GxtElaXZ6XYAH49FkJ1gMb5i05KkcAiAMEDgFIfKsBPvjxqw8MUmfUo422c3v08njlVwk9SSc%2BSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcHm9fkr%2B5QVdfqNKtwDBlIXwVMyHRjPR9bw8Ik22vSufNRLWAISyHLPu1tTJcBpFRyQytGUNHkjOlHQtSPi%2BuKH2ulic9kFYrGGAJo%2FhskK1MVbV2NA2cy0dz3aBYheKtyy9BXexqTypaJAO%2BCu2M%2FQguwdmfKjK6yqPIuYsNG8oRq5rhJmJcj9vQdUL0zcdtCmEn0RomtXYi6GzDaeMXVIVYNMwek4orkArllafNQNdvoUG%2FlFqll7i61kmdexMViCKoTYjGyanJs8hU%2Bvco%2BoKO7ZFtqOqbuXtPrr8oevxELBCLSYW%2BQ%2F%2F7fBo2oi55R0m%2BXKP6fU0t5QQgjcp1BjbOsqQrSwhIcTgR%2Fwnh1vyREAnFLxVi0c5K9MynUXUkNddqBcBGIunheu%2F8AU3qqdyDUUPEVj%2F9%2ByDCb2KPzU80gp2%2F89p93PAF2AkeiSEk7Vb315aG4ciLIXMrR9Zqd9XI7xhOzOz%2F5HoJ4Aaru0rEC6GzESY2b2%2Bdev%2Bmmv2krTwlG0rwYr9%2FgeOVOh8He9kfMpZKfTX9WJMx6xSvM%2B%2F4xyE3iAB6J6cbIZ4Y9Y9ErIuWq6YaHiVm5MHaPzuVX5XVSlveQI%2BxAq9Ks35qtX2F%2B48VLGc0OKcHVK4uAVHkB3Rn6srQMmbk4wxfKXwAY6pgFM%2Fdd%2BQRfNyz8lZPmflWbrR2Oi7%2FZuTU0rhcnp8rmI8Kq6YAWMQQtYcc71TlHz5jm%2BKo3ygMwn2Wf6FjGcbxF%2F1MynUt5wuealFOrUBYxNqRUDuJcuEHQRtT0gbAygc0%2Bk9m%2FZz0e4RhvuK5AaP4XT0VYPuRkocSJFzZIJCsGhxrAfQPNDzMLrdvRlwvn%2FQarezGugwNkvUG68UEx1MGmW%2BZNRCjLh&X-Amz-Signature=fb64ffb7bb6899d182ed575b330d31f2a75aeefc727eab232b57b6913e2b8590&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAOZEJT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH56Fa6O6wsAGt2GxtElaXZ6XYAH49FkJ1gMb5i05KkcAiAMEDgFIfKsBPvjxqw8MUmfUo422c3v08njlVwk9SSc%2BSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcHm9fkr%2B5QVdfqNKtwDBlIXwVMyHRjPR9bw8Ik22vSufNRLWAISyHLPu1tTJcBpFRyQytGUNHkjOlHQtSPi%2BuKH2ulic9kFYrGGAJo%2FhskK1MVbV2NA2cy0dz3aBYheKtyy9BXexqTypaJAO%2BCu2M%2FQguwdmfKjK6yqPIuYsNG8oRq5rhJmJcj9vQdUL0zcdtCmEn0RomtXYi6GzDaeMXVIVYNMwek4orkArllafNQNdvoUG%2FlFqll7i61kmdexMViCKoTYjGyanJs8hU%2Bvco%2BoKO7ZFtqOqbuXtPrr8oevxELBCLSYW%2BQ%2F%2F7fBo2oi55R0m%2BXKP6fU0t5QQgjcp1BjbOsqQrSwhIcTgR%2Fwnh1vyREAnFLxVi0c5K9MynUXUkNddqBcBGIunheu%2F8AU3qqdyDUUPEVj%2F9%2ByDCb2KPzU80gp2%2F89p93PAF2AkeiSEk7Vb315aG4ciLIXMrR9Zqd9XI7xhOzOz%2F5HoJ4Aaru0rEC6GzESY2b2%2Bdev%2Bmmv2krTwlG0rwYr9%2FgeOVOh8He9kfMpZKfTX9WJMx6xSvM%2B%2F4xyE3iAB6J6cbIZ4Y9Y9ErIuWq6YaHiVm5MHaPzuVX5XVSlveQI%2BxAq9Ks35qtX2F%2B48VLGc0OKcHVK4uAVHkB3Rn6srQMmbk4wxfKXwAY6pgFM%2Fdd%2BQRfNyz8lZPmflWbrR2Oi7%2FZuTU0rhcnp8rmI8Kq6YAWMQQtYcc71TlHz5jm%2BKo3ygMwn2Wf6FjGcbxF%2F1MynUt5wuealFOrUBYxNqRUDuJcuEHQRtT0gbAygc0%2Bk9m%2FZz0e4RhvuK5AaP4XT0VYPuRkocSJFzZIJCsGhxrAfQPNDzMLrdvRlwvn%2FQarezGugwNkvUG68UEx1MGmW%2BZNRCjLh&X-Amz-Signature=1582fad184b5bb928bbb33deebc7ac7cf10625e8c3368b9ce59d1d3ad373da46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAOZEJT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH56Fa6O6wsAGt2GxtElaXZ6XYAH49FkJ1gMb5i05KkcAiAMEDgFIfKsBPvjxqw8MUmfUo422c3v08njlVwk9SSc%2BSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcHm9fkr%2B5QVdfqNKtwDBlIXwVMyHRjPR9bw8Ik22vSufNRLWAISyHLPu1tTJcBpFRyQytGUNHkjOlHQtSPi%2BuKH2ulic9kFYrGGAJo%2FhskK1MVbV2NA2cy0dz3aBYheKtyy9BXexqTypaJAO%2BCu2M%2FQguwdmfKjK6yqPIuYsNG8oRq5rhJmJcj9vQdUL0zcdtCmEn0RomtXYi6GzDaeMXVIVYNMwek4orkArllafNQNdvoUG%2FlFqll7i61kmdexMViCKoTYjGyanJs8hU%2Bvco%2BoKO7ZFtqOqbuXtPrr8oevxELBCLSYW%2BQ%2F%2F7fBo2oi55R0m%2BXKP6fU0t5QQgjcp1BjbOsqQrSwhIcTgR%2Fwnh1vyREAnFLxVi0c5K9MynUXUkNddqBcBGIunheu%2F8AU3qqdyDUUPEVj%2F9%2ByDCb2KPzU80gp2%2F89p93PAF2AkeiSEk7Vb315aG4ciLIXMrR9Zqd9XI7xhOzOz%2F5HoJ4Aaru0rEC6GzESY2b2%2Bdev%2Bmmv2krTwlG0rwYr9%2FgeOVOh8He9kfMpZKfTX9WJMx6xSvM%2B%2F4xyE3iAB6J6cbIZ4Y9Y9ErIuWq6YaHiVm5MHaPzuVX5XVSlveQI%2BxAq9Ks35qtX2F%2B48VLGc0OKcHVK4uAVHkB3Rn6srQMmbk4wxfKXwAY6pgFM%2Fdd%2BQRfNyz8lZPmflWbrR2Oi7%2FZuTU0rhcnp8rmI8Kq6YAWMQQtYcc71TlHz5jm%2BKo3ygMwn2Wf6FjGcbxF%2F1MynUt5wuealFOrUBYxNqRUDuJcuEHQRtT0gbAygc0%2Bk9m%2FZz0e4RhvuK5AaP4XT0VYPuRkocSJFzZIJCsGhxrAfQPNDzMLrdvRlwvn%2FQarezGugwNkvUG68UEx1MGmW%2BZNRCjLh&X-Amz-Signature=5aa634f4eaffe596b676141c9e87dbdbc75515e086e96ee7fb81b8f3ea722a53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

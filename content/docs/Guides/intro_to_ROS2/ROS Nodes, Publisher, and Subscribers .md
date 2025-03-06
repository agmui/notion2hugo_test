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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVUKE2Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUmGxMql2K9guswlCTmn7AfpkfTVzGoJvDNwW%2BGJraHAiBnEzGu31TYE2QkQdD8jexP23jaCmqD4Z8qsKkv88QRFSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMhzSv%2BNkjoWEfIz5rKtwDC84lK%2FXEYuumqbyVJkX%2Bj5wX7mI0l7GiH0ySAGfdGuwbKzqTZ9oLC7Ej2XEo4fqCepwTNX8P06PT6RKDlXCvgyLG%2Bfh3xzlx949gAoSGEBXntxjlSbuIm4780S3QYL8HJ1uZW1kDGP7oaC9VW%2BkNVHwSHl7SG4Isa9dJyNOBlYOzg9o5%2FriGjhdQjn3EufjhuPCMBRVgKZBJXPVFo%2BkKnxw3pF8UGWjjdqcEdaSDZsoPsBZMrAqIA2dR25HwdTOw1hsBgc8Ycvc%2BH2jD0nRg12zhNbX14XF%2BDBX63Pu6RWQMEDCjW8%2BG%2F0V6lVMhrHEuqof5%2Bfqyi6EJC4VEN8WT7DNEaR8Ypf2SJd1dKQigAW8ACiNdGdiCzxmcDbg8xDxGz4FzCVLydUkm5ZJg4BO3C8W4TbiVTelgeOqpQtabJllaNSve%2BWaB1Opvf1b%2B1glo8lijgR9aw2IRLalW757%2BRgZw9yG8sCDl7i0EyXhixPZXUGJjLH1hngxweo6TNhxT3YMLTsN9UtnjNraNX5y%2FAaHiXTYsB5xmP6zydVcVAwweajFSOF4gZ%2BF%2FmhqKuAa779yo9aZY3zV5aVEndgdIrbglTGDmBYl1OmfKucOktZNiJuRyiShRW1%2B2cnwwhNmkvgY6pgF4ErP8CU%2B%2BUkelt4Fq7BlK%2BN0TRIuN769wvvpQUTGxVJcB4MGsFcjy%2BrO6ccMDOINRyxZGkNTGfV4EamfcgvcTh5%2FgC4PUQZe3MV0Ye%2BEQpcAm6jAGfij4DTU1GN9Va0VJbffeXmPoI5zHdri3CWYolGX4fFxWwEZ3nsSriearKJVEozMHz3kGXAvN8hSrrk8%2FLCDBp3kgZzoGEuFWvULZLgDeVw6y&X-Amz-Signature=53ae0dcf06ebd988ef67ec3c350761ee4d2bfe07c1e75bdf6aa12f88b181bee0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVUKE2Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUmGxMql2K9guswlCTmn7AfpkfTVzGoJvDNwW%2BGJraHAiBnEzGu31TYE2QkQdD8jexP23jaCmqD4Z8qsKkv88QRFSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMhzSv%2BNkjoWEfIz5rKtwDC84lK%2FXEYuumqbyVJkX%2Bj5wX7mI0l7GiH0ySAGfdGuwbKzqTZ9oLC7Ej2XEo4fqCepwTNX8P06PT6RKDlXCvgyLG%2Bfh3xzlx949gAoSGEBXntxjlSbuIm4780S3QYL8HJ1uZW1kDGP7oaC9VW%2BkNVHwSHl7SG4Isa9dJyNOBlYOzg9o5%2FriGjhdQjn3EufjhuPCMBRVgKZBJXPVFo%2BkKnxw3pF8UGWjjdqcEdaSDZsoPsBZMrAqIA2dR25HwdTOw1hsBgc8Ycvc%2BH2jD0nRg12zhNbX14XF%2BDBX63Pu6RWQMEDCjW8%2BG%2F0V6lVMhrHEuqof5%2Bfqyi6EJC4VEN8WT7DNEaR8Ypf2SJd1dKQigAW8ACiNdGdiCzxmcDbg8xDxGz4FzCVLydUkm5ZJg4BO3C8W4TbiVTelgeOqpQtabJllaNSve%2BWaB1Opvf1b%2B1glo8lijgR9aw2IRLalW757%2BRgZw9yG8sCDl7i0EyXhixPZXUGJjLH1hngxweo6TNhxT3YMLTsN9UtnjNraNX5y%2FAaHiXTYsB5xmP6zydVcVAwweajFSOF4gZ%2BF%2FmhqKuAa779yo9aZY3zV5aVEndgdIrbglTGDmBYl1OmfKucOktZNiJuRyiShRW1%2B2cnwwhNmkvgY6pgF4ErP8CU%2B%2BUkelt4Fq7BlK%2BN0TRIuN769wvvpQUTGxVJcB4MGsFcjy%2BrO6ccMDOINRyxZGkNTGfV4EamfcgvcTh5%2FgC4PUQZe3MV0Ye%2BEQpcAm6jAGfij4DTU1GN9Va0VJbffeXmPoI5zHdri3CWYolGX4fFxWwEZ3nsSriearKJVEozMHz3kGXAvN8hSrrk8%2FLCDBp3kgZzoGEuFWvULZLgDeVw6y&X-Amz-Signature=25a21a7847c17f980538c619f6a93ecee80c2690d40b50b7ca15355638555de3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVUKE2Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUmGxMql2K9guswlCTmn7AfpkfTVzGoJvDNwW%2BGJraHAiBnEzGu31TYE2QkQdD8jexP23jaCmqD4Z8qsKkv88QRFSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMhzSv%2BNkjoWEfIz5rKtwDC84lK%2FXEYuumqbyVJkX%2Bj5wX7mI0l7GiH0ySAGfdGuwbKzqTZ9oLC7Ej2XEo4fqCepwTNX8P06PT6RKDlXCvgyLG%2Bfh3xzlx949gAoSGEBXntxjlSbuIm4780S3QYL8HJ1uZW1kDGP7oaC9VW%2BkNVHwSHl7SG4Isa9dJyNOBlYOzg9o5%2FriGjhdQjn3EufjhuPCMBRVgKZBJXPVFo%2BkKnxw3pF8UGWjjdqcEdaSDZsoPsBZMrAqIA2dR25HwdTOw1hsBgc8Ycvc%2BH2jD0nRg12zhNbX14XF%2BDBX63Pu6RWQMEDCjW8%2BG%2F0V6lVMhrHEuqof5%2Bfqyi6EJC4VEN8WT7DNEaR8Ypf2SJd1dKQigAW8ACiNdGdiCzxmcDbg8xDxGz4FzCVLydUkm5ZJg4BO3C8W4TbiVTelgeOqpQtabJllaNSve%2BWaB1Opvf1b%2B1glo8lijgR9aw2IRLalW757%2BRgZw9yG8sCDl7i0EyXhixPZXUGJjLH1hngxweo6TNhxT3YMLTsN9UtnjNraNX5y%2FAaHiXTYsB5xmP6zydVcVAwweajFSOF4gZ%2BF%2FmhqKuAa779yo9aZY3zV5aVEndgdIrbglTGDmBYl1OmfKucOktZNiJuRyiShRW1%2B2cnwwhNmkvgY6pgF4ErP8CU%2B%2BUkelt4Fq7BlK%2BN0TRIuN769wvvpQUTGxVJcB4MGsFcjy%2BrO6ccMDOINRyxZGkNTGfV4EamfcgvcTh5%2FgC4PUQZe3MV0Ye%2BEQpcAm6jAGfij4DTU1GN9Va0VJbffeXmPoI5zHdri3CWYolGX4fFxWwEZ3nsSriearKJVEozMHz3kGXAvN8hSrrk8%2FLCDBp3kgZzoGEuFWvULZLgDeVw6y&X-Amz-Signature=a08ad1c2eeec812d255d4cf4ac1bce81991c59e07fcd8cf915c73d1cc5567ced&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVUKE2Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUmGxMql2K9guswlCTmn7AfpkfTVzGoJvDNwW%2BGJraHAiBnEzGu31TYE2QkQdD8jexP23jaCmqD4Z8qsKkv88QRFSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMhzSv%2BNkjoWEfIz5rKtwDC84lK%2FXEYuumqbyVJkX%2Bj5wX7mI0l7GiH0ySAGfdGuwbKzqTZ9oLC7Ej2XEo4fqCepwTNX8P06PT6RKDlXCvgyLG%2Bfh3xzlx949gAoSGEBXntxjlSbuIm4780S3QYL8HJ1uZW1kDGP7oaC9VW%2BkNVHwSHl7SG4Isa9dJyNOBlYOzg9o5%2FriGjhdQjn3EufjhuPCMBRVgKZBJXPVFo%2BkKnxw3pF8UGWjjdqcEdaSDZsoPsBZMrAqIA2dR25HwdTOw1hsBgc8Ycvc%2BH2jD0nRg12zhNbX14XF%2BDBX63Pu6RWQMEDCjW8%2BG%2F0V6lVMhrHEuqof5%2Bfqyi6EJC4VEN8WT7DNEaR8Ypf2SJd1dKQigAW8ACiNdGdiCzxmcDbg8xDxGz4FzCVLydUkm5ZJg4BO3C8W4TbiVTelgeOqpQtabJllaNSve%2BWaB1Opvf1b%2B1glo8lijgR9aw2IRLalW757%2BRgZw9yG8sCDl7i0EyXhixPZXUGJjLH1hngxweo6TNhxT3YMLTsN9UtnjNraNX5y%2FAaHiXTYsB5xmP6zydVcVAwweajFSOF4gZ%2BF%2FmhqKuAa779yo9aZY3zV5aVEndgdIrbglTGDmBYl1OmfKucOktZNiJuRyiShRW1%2B2cnwwhNmkvgY6pgF4ErP8CU%2B%2BUkelt4Fq7BlK%2BN0TRIuN769wvvpQUTGxVJcB4MGsFcjy%2BrO6ccMDOINRyxZGkNTGfV4EamfcgvcTh5%2FgC4PUQZe3MV0Ye%2BEQpcAm6jAGfij4DTU1GN9Va0VJbffeXmPoI5zHdri3CWYolGX4fFxWwEZ3nsSriearKJVEozMHz3kGXAvN8hSrrk8%2FLCDBp3kgZzoGEuFWvULZLgDeVw6y&X-Amz-Signature=0398987cffa088df17c618f8cc0f8c333aa9654d2094e1dfa7eb136b039b45a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVUKE2Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUmGxMql2K9guswlCTmn7AfpkfTVzGoJvDNwW%2BGJraHAiBnEzGu31TYE2QkQdD8jexP23jaCmqD4Z8qsKkv88QRFSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMhzSv%2BNkjoWEfIz5rKtwDC84lK%2FXEYuumqbyVJkX%2Bj5wX7mI0l7GiH0ySAGfdGuwbKzqTZ9oLC7Ej2XEo4fqCepwTNX8P06PT6RKDlXCvgyLG%2Bfh3xzlx949gAoSGEBXntxjlSbuIm4780S3QYL8HJ1uZW1kDGP7oaC9VW%2BkNVHwSHl7SG4Isa9dJyNOBlYOzg9o5%2FriGjhdQjn3EufjhuPCMBRVgKZBJXPVFo%2BkKnxw3pF8UGWjjdqcEdaSDZsoPsBZMrAqIA2dR25HwdTOw1hsBgc8Ycvc%2BH2jD0nRg12zhNbX14XF%2BDBX63Pu6RWQMEDCjW8%2BG%2F0V6lVMhrHEuqof5%2Bfqyi6EJC4VEN8WT7DNEaR8Ypf2SJd1dKQigAW8ACiNdGdiCzxmcDbg8xDxGz4FzCVLydUkm5ZJg4BO3C8W4TbiVTelgeOqpQtabJllaNSve%2BWaB1Opvf1b%2B1glo8lijgR9aw2IRLalW757%2BRgZw9yG8sCDl7i0EyXhixPZXUGJjLH1hngxweo6TNhxT3YMLTsN9UtnjNraNX5y%2FAaHiXTYsB5xmP6zydVcVAwweajFSOF4gZ%2BF%2FmhqKuAa779yo9aZY3zV5aVEndgdIrbglTGDmBYl1OmfKucOktZNiJuRyiShRW1%2B2cnwwhNmkvgY6pgF4ErP8CU%2B%2BUkelt4Fq7BlK%2BN0TRIuN769wvvpQUTGxVJcB4MGsFcjy%2BrO6ccMDOINRyxZGkNTGfV4EamfcgvcTh5%2FgC4PUQZe3MV0Ye%2BEQpcAm6jAGfij4DTU1GN9Va0VJbffeXmPoI5zHdri3CWYolGX4fFxWwEZ3nsSriearKJVEozMHz3kGXAvN8hSrrk8%2FLCDBp3kgZzoGEuFWvULZLgDeVw6y&X-Amz-Signature=b212f7ce91fc9ecf7810857a2cd4f0f12c2c8f5b70e1ba23a06bafee3209995e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVUKE2Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUmGxMql2K9guswlCTmn7AfpkfTVzGoJvDNwW%2BGJraHAiBnEzGu31TYE2QkQdD8jexP23jaCmqD4Z8qsKkv88QRFSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMhzSv%2BNkjoWEfIz5rKtwDC84lK%2FXEYuumqbyVJkX%2Bj5wX7mI0l7GiH0ySAGfdGuwbKzqTZ9oLC7Ej2XEo4fqCepwTNX8P06PT6RKDlXCvgyLG%2Bfh3xzlx949gAoSGEBXntxjlSbuIm4780S3QYL8HJ1uZW1kDGP7oaC9VW%2BkNVHwSHl7SG4Isa9dJyNOBlYOzg9o5%2FriGjhdQjn3EufjhuPCMBRVgKZBJXPVFo%2BkKnxw3pF8UGWjjdqcEdaSDZsoPsBZMrAqIA2dR25HwdTOw1hsBgc8Ycvc%2BH2jD0nRg12zhNbX14XF%2BDBX63Pu6RWQMEDCjW8%2BG%2F0V6lVMhrHEuqof5%2Bfqyi6EJC4VEN8WT7DNEaR8Ypf2SJd1dKQigAW8ACiNdGdiCzxmcDbg8xDxGz4FzCVLydUkm5ZJg4BO3C8W4TbiVTelgeOqpQtabJllaNSve%2BWaB1Opvf1b%2B1glo8lijgR9aw2IRLalW757%2BRgZw9yG8sCDl7i0EyXhixPZXUGJjLH1hngxweo6TNhxT3YMLTsN9UtnjNraNX5y%2FAaHiXTYsB5xmP6zydVcVAwweajFSOF4gZ%2BF%2FmhqKuAa779yo9aZY3zV5aVEndgdIrbglTGDmBYl1OmfKucOktZNiJuRyiShRW1%2B2cnwwhNmkvgY6pgF4ErP8CU%2B%2BUkelt4Fq7BlK%2BN0TRIuN769wvvpQUTGxVJcB4MGsFcjy%2BrO6ccMDOINRyxZGkNTGfV4EamfcgvcTh5%2FgC4PUQZe3MV0Ye%2BEQpcAm6jAGfij4DTU1GN9Va0VJbffeXmPoI5zHdri3CWYolGX4fFxWwEZ3nsSriearKJVEozMHz3kGXAvN8hSrrk8%2FLCDBp3kgZzoGEuFWvULZLgDeVw6y&X-Amz-Signature=200bdb6f11de80250a3dec05bd145ae42dbb98045e9dcec013f9cc8ea9a4f645&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVUKE2Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUmGxMql2K9guswlCTmn7AfpkfTVzGoJvDNwW%2BGJraHAiBnEzGu31TYE2QkQdD8jexP23jaCmqD4Z8qsKkv88QRFSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMhzSv%2BNkjoWEfIz5rKtwDC84lK%2FXEYuumqbyVJkX%2Bj5wX7mI0l7GiH0ySAGfdGuwbKzqTZ9oLC7Ej2XEo4fqCepwTNX8P06PT6RKDlXCvgyLG%2Bfh3xzlx949gAoSGEBXntxjlSbuIm4780S3QYL8HJ1uZW1kDGP7oaC9VW%2BkNVHwSHl7SG4Isa9dJyNOBlYOzg9o5%2FriGjhdQjn3EufjhuPCMBRVgKZBJXPVFo%2BkKnxw3pF8UGWjjdqcEdaSDZsoPsBZMrAqIA2dR25HwdTOw1hsBgc8Ycvc%2BH2jD0nRg12zhNbX14XF%2BDBX63Pu6RWQMEDCjW8%2BG%2F0V6lVMhrHEuqof5%2Bfqyi6EJC4VEN8WT7DNEaR8Ypf2SJd1dKQigAW8ACiNdGdiCzxmcDbg8xDxGz4FzCVLydUkm5ZJg4BO3C8W4TbiVTelgeOqpQtabJllaNSve%2BWaB1Opvf1b%2B1glo8lijgR9aw2IRLalW757%2BRgZw9yG8sCDl7i0EyXhixPZXUGJjLH1hngxweo6TNhxT3YMLTsN9UtnjNraNX5y%2FAaHiXTYsB5xmP6zydVcVAwweajFSOF4gZ%2BF%2FmhqKuAa779yo9aZY3zV5aVEndgdIrbglTGDmBYl1OmfKucOktZNiJuRyiShRW1%2B2cnwwhNmkvgY6pgF4ErP8CU%2B%2BUkelt4Fq7BlK%2BN0TRIuN769wvvpQUTGxVJcB4MGsFcjy%2BrO6ccMDOINRyxZGkNTGfV4EamfcgvcTh5%2FgC4PUQZe3MV0Ye%2BEQpcAm6jAGfij4DTU1GN9Va0VJbffeXmPoI5zHdri3CWYolGX4fFxWwEZ3nsSriearKJVEozMHz3kGXAvN8hSrrk8%2FLCDBp3kgZzoGEuFWvULZLgDeVw6y&X-Amz-Signature=b77868cd0d67d89a73feb2ad869bbf1beca2a6cc62fc2d6b3c7dd1170d3e7ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVUKE2Q%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUmGxMql2K9guswlCTmn7AfpkfTVzGoJvDNwW%2BGJraHAiBnEzGu31TYE2QkQdD8jexP23jaCmqD4Z8qsKkv88QRFSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMhzSv%2BNkjoWEfIz5rKtwDC84lK%2FXEYuumqbyVJkX%2Bj5wX7mI0l7GiH0ySAGfdGuwbKzqTZ9oLC7Ej2XEo4fqCepwTNX8P06PT6RKDlXCvgyLG%2Bfh3xzlx949gAoSGEBXntxjlSbuIm4780S3QYL8HJ1uZW1kDGP7oaC9VW%2BkNVHwSHl7SG4Isa9dJyNOBlYOzg9o5%2FriGjhdQjn3EufjhuPCMBRVgKZBJXPVFo%2BkKnxw3pF8UGWjjdqcEdaSDZsoPsBZMrAqIA2dR25HwdTOw1hsBgc8Ycvc%2BH2jD0nRg12zhNbX14XF%2BDBX63Pu6RWQMEDCjW8%2BG%2F0V6lVMhrHEuqof5%2Bfqyi6EJC4VEN8WT7DNEaR8Ypf2SJd1dKQigAW8ACiNdGdiCzxmcDbg8xDxGz4FzCVLydUkm5ZJg4BO3C8W4TbiVTelgeOqpQtabJllaNSve%2BWaB1Opvf1b%2B1glo8lijgR9aw2IRLalW757%2BRgZw9yG8sCDl7i0EyXhixPZXUGJjLH1hngxweo6TNhxT3YMLTsN9UtnjNraNX5y%2FAaHiXTYsB5xmP6zydVcVAwweajFSOF4gZ%2BF%2FmhqKuAa779yo9aZY3zV5aVEndgdIrbglTGDmBYl1OmfKucOktZNiJuRyiShRW1%2B2cnwwhNmkvgY6pgF4ErP8CU%2B%2BUkelt4Fq7BlK%2BN0TRIuN769wvvpQUTGxVJcB4MGsFcjy%2BrO6ccMDOINRyxZGkNTGfV4EamfcgvcTh5%2FgC4PUQZe3MV0Ye%2BEQpcAm6jAGfij4DTU1GN9Va0VJbffeXmPoI5zHdri3CWYolGX4fFxWwEZ3nsSriearKJVEozMHz3kGXAvN8hSrrk8%2FLCDBp3kgZzoGEuFWvULZLgDeVw6y&X-Amz-Signature=f617fd2c666d2eaa2afa5623b206fe779b7451a7a3bf83c45fb3b13d6e35190a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

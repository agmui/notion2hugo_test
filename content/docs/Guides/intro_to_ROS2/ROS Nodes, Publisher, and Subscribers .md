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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIY2QUP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGAlE3465QhspxjeWyNAl8D7tyyH44YHrPERMOK7TFjDAiEAhyiu1v%2FKyDM8ITa3VsjLTjCUc0zyIdzcpaEu14NfTtAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP8K1sMU6vuPvg%2B31SrcAwU2%2BCCAbXvTVeYZXJc1QcowIcpMzonSVcGCJPz%2Fx9zFiGxfIB9aMMz1z6vVibDlIULZ22XfDfVT1EK3z%2Br3pzS0q7p%2FCflEKVbMsj0jDcWjrU%2F%2BaB5W1tSHGF6Jpr%2FUvGtA3GopqO9WaUlMA2Y2%2FfOkgKtPt2KApCT8YGt3vXNkYz3vqTWTwVhs%2FiiRWq%2ByubWzfhnf02M6sv%2Bk3Ljav4FhyrkHjo%2FrnfEbqOxwRhV1xCCJIruTAo%2FifZ5bGcwmrIRYXQE%2BwRCa6IOZzUt0obMuUf9VsSjPpgRWXi7U4kQR9WyIHnH89U8tuc6V8iTiZOF3UKzGWmimUHrjr0g4pL5dZGDKb54lDeY3gYY%2FGA66z81Hre835GemqI3i5fSJApxLgsYId2XeLKGDvT71LCYIDGGoecH72uns6Po2Z1JdbAgsDoGIDe8%2BW3xWlX%2Fq4lUIclR3rRlDypf7DMmei6OsB%2Bd03UaWMDZtze3MQ9LDylmiZ0hDXoaBCmz7%2FcTb%2BOLsnXuViEHnfLg5ZcMSmvqOon9Y4XSq2J2rYdS%2F0LXYOfA65V6P0dJjXpudCkY0JFibjtqVW7OdkvG1GxZ0ZECrokFWERZY4rki94%2F7CiFTMIC8A8p8HiyGdAF7MNfK9sIGOqUBLMLeuvj%2B5IyQMCnAwDr4yfr7npmMc8tZSQxT8jrw2ooP2pnmUIyHARK%2FxFmHWprUJU42T4JnDC313VwluaFob%2BCCAVR8dZ68M5hymvwqkI549PcQ3DoIFdR2oTUij8dsNWisTqPC8EhWCRwEn%2F%2BUTNDKtYQmXH6frM5C7WQoQmQ9zHKIG2J8rE6p6TObPytL9cDUDooj2WSOGPBlW5wHBzAgU7k9&X-Amz-Signature=916e32156fd877c82f03790eb13ada2b4df57e168404df534d2fde2057408134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIY2QUP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGAlE3465QhspxjeWyNAl8D7tyyH44YHrPERMOK7TFjDAiEAhyiu1v%2FKyDM8ITa3VsjLTjCUc0zyIdzcpaEu14NfTtAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP8K1sMU6vuPvg%2B31SrcAwU2%2BCCAbXvTVeYZXJc1QcowIcpMzonSVcGCJPz%2Fx9zFiGxfIB9aMMz1z6vVibDlIULZ22XfDfVT1EK3z%2Br3pzS0q7p%2FCflEKVbMsj0jDcWjrU%2F%2BaB5W1tSHGF6Jpr%2FUvGtA3GopqO9WaUlMA2Y2%2FfOkgKtPt2KApCT8YGt3vXNkYz3vqTWTwVhs%2FiiRWq%2ByubWzfhnf02M6sv%2Bk3Ljav4FhyrkHjo%2FrnfEbqOxwRhV1xCCJIruTAo%2FifZ5bGcwmrIRYXQE%2BwRCa6IOZzUt0obMuUf9VsSjPpgRWXi7U4kQR9WyIHnH89U8tuc6V8iTiZOF3UKzGWmimUHrjr0g4pL5dZGDKb54lDeY3gYY%2FGA66z81Hre835GemqI3i5fSJApxLgsYId2XeLKGDvT71LCYIDGGoecH72uns6Po2Z1JdbAgsDoGIDe8%2BW3xWlX%2Fq4lUIclR3rRlDypf7DMmei6OsB%2Bd03UaWMDZtze3MQ9LDylmiZ0hDXoaBCmz7%2FcTb%2BOLsnXuViEHnfLg5ZcMSmvqOon9Y4XSq2J2rYdS%2F0LXYOfA65V6P0dJjXpudCkY0JFibjtqVW7OdkvG1GxZ0ZECrokFWERZY4rki94%2F7CiFTMIC8A8p8HiyGdAF7MNfK9sIGOqUBLMLeuvj%2B5IyQMCnAwDr4yfr7npmMc8tZSQxT8jrw2ooP2pnmUIyHARK%2FxFmHWprUJU42T4JnDC313VwluaFob%2BCCAVR8dZ68M5hymvwqkI549PcQ3DoIFdR2oTUij8dsNWisTqPC8EhWCRwEn%2F%2BUTNDKtYQmXH6frM5C7WQoQmQ9zHKIG2J8rE6p6TObPytL9cDUDooj2WSOGPBlW5wHBzAgU7k9&X-Amz-Signature=ae74a5494b85417edc7a8bbb89504e722645479bad146384ea138c82468fba56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIY2QUP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGAlE3465QhspxjeWyNAl8D7tyyH44YHrPERMOK7TFjDAiEAhyiu1v%2FKyDM8ITa3VsjLTjCUc0zyIdzcpaEu14NfTtAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP8K1sMU6vuPvg%2B31SrcAwU2%2BCCAbXvTVeYZXJc1QcowIcpMzonSVcGCJPz%2Fx9zFiGxfIB9aMMz1z6vVibDlIULZ22XfDfVT1EK3z%2Br3pzS0q7p%2FCflEKVbMsj0jDcWjrU%2F%2BaB5W1tSHGF6Jpr%2FUvGtA3GopqO9WaUlMA2Y2%2FfOkgKtPt2KApCT8YGt3vXNkYz3vqTWTwVhs%2FiiRWq%2ByubWzfhnf02M6sv%2Bk3Ljav4FhyrkHjo%2FrnfEbqOxwRhV1xCCJIruTAo%2FifZ5bGcwmrIRYXQE%2BwRCa6IOZzUt0obMuUf9VsSjPpgRWXi7U4kQR9WyIHnH89U8tuc6V8iTiZOF3UKzGWmimUHrjr0g4pL5dZGDKb54lDeY3gYY%2FGA66z81Hre835GemqI3i5fSJApxLgsYId2XeLKGDvT71LCYIDGGoecH72uns6Po2Z1JdbAgsDoGIDe8%2BW3xWlX%2Fq4lUIclR3rRlDypf7DMmei6OsB%2Bd03UaWMDZtze3MQ9LDylmiZ0hDXoaBCmz7%2FcTb%2BOLsnXuViEHnfLg5ZcMSmvqOon9Y4XSq2J2rYdS%2F0LXYOfA65V6P0dJjXpudCkY0JFibjtqVW7OdkvG1GxZ0ZECrokFWERZY4rki94%2F7CiFTMIC8A8p8HiyGdAF7MNfK9sIGOqUBLMLeuvj%2B5IyQMCnAwDr4yfr7npmMc8tZSQxT8jrw2ooP2pnmUIyHARK%2FxFmHWprUJU42T4JnDC313VwluaFob%2BCCAVR8dZ68M5hymvwqkI549PcQ3DoIFdR2oTUij8dsNWisTqPC8EhWCRwEn%2F%2BUTNDKtYQmXH6frM5C7WQoQmQ9zHKIG2J8rE6p6TObPytL9cDUDooj2WSOGPBlW5wHBzAgU7k9&X-Amz-Signature=3f5bf30de4efc71200db4d7f34664dd1c72fe6eb8939563e4b2fd72817b1f3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIY2QUP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGAlE3465QhspxjeWyNAl8D7tyyH44YHrPERMOK7TFjDAiEAhyiu1v%2FKyDM8ITa3VsjLTjCUc0zyIdzcpaEu14NfTtAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP8K1sMU6vuPvg%2B31SrcAwU2%2BCCAbXvTVeYZXJc1QcowIcpMzonSVcGCJPz%2Fx9zFiGxfIB9aMMz1z6vVibDlIULZ22XfDfVT1EK3z%2Br3pzS0q7p%2FCflEKVbMsj0jDcWjrU%2F%2BaB5W1tSHGF6Jpr%2FUvGtA3GopqO9WaUlMA2Y2%2FfOkgKtPt2KApCT8YGt3vXNkYz3vqTWTwVhs%2FiiRWq%2ByubWzfhnf02M6sv%2Bk3Ljav4FhyrkHjo%2FrnfEbqOxwRhV1xCCJIruTAo%2FifZ5bGcwmrIRYXQE%2BwRCa6IOZzUt0obMuUf9VsSjPpgRWXi7U4kQR9WyIHnH89U8tuc6V8iTiZOF3UKzGWmimUHrjr0g4pL5dZGDKb54lDeY3gYY%2FGA66z81Hre835GemqI3i5fSJApxLgsYId2XeLKGDvT71LCYIDGGoecH72uns6Po2Z1JdbAgsDoGIDe8%2BW3xWlX%2Fq4lUIclR3rRlDypf7DMmei6OsB%2Bd03UaWMDZtze3MQ9LDylmiZ0hDXoaBCmz7%2FcTb%2BOLsnXuViEHnfLg5ZcMSmvqOon9Y4XSq2J2rYdS%2F0LXYOfA65V6P0dJjXpudCkY0JFibjtqVW7OdkvG1GxZ0ZECrokFWERZY4rki94%2F7CiFTMIC8A8p8HiyGdAF7MNfK9sIGOqUBLMLeuvj%2B5IyQMCnAwDr4yfr7npmMc8tZSQxT8jrw2ooP2pnmUIyHARK%2FxFmHWprUJU42T4JnDC313VwluaFob%2BCCAVR8dZ68M5hymvwqkI549PcQ3DoIFdR2oTUij8dsNWisTqPC8EhWCRwEn%2F%2BUTNDKtYQmXH6frM5C7WQoQmQ9zHKIG2J8rE6p6TObPytL9cDUDooj2WSOGPBlW5wHBzAgU7k9&X-Amz-Signature=6ebe719910f85f94ebbe9b300b60478b961db7160885e61e3cd243c84129d092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIY2QUP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGAlE3465QhspxjeWyNAl8D7tyyH44YHrPERMOK7TFjDAiEAhyiu1v%2FKyDM8ITa3VsjLTjCUc0zyIdzcpaEu14NfTtAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP8K1sMU6vuPvg%2B31SrcAwU2%2BCCAbXvTVeYZXJc1QcowIcpMzonSVcGCJPz%2Fx9zFiGxfIB9aMMz1z6vVibDlIULZ22XfDfVT1EK3z%2Br3pzS0q7p%2FCflEKVbMsj0jDcWjrU%2F%2BaB5W1tSHGF6Jpr%2FUvGtA3GopqO9WaUlMA2Y2%2FfOkgKtPt2KApCT8YGt3vXNkYz3vqTWTwVhs%2FiiRWq%2ByubWzfhnf02M6sv%2Bk3Ljav4FhyrkHjo%2FrnfEbqOxwRhV1xCCJIruTAo%2FifZ5bGcwmrIRYXQE%2BwRCa6IOZzUt0obMuUf9VsSjPpgRWXi7U4kQR9WyIHnH89U8tuc6V8iTiZOF3UKzGWmimUHrjr0g4pL5dZGDKb54lDeY3gYY%2FGA66z81Hre835GemqI3i5fSJApxLgsYId2XeLKGDvT71LCYIDGGoecH72uns6Po2Z1JdbAgsDoGIDe8%2BW3xWlX%2Fq4lUIclR3rRlDypf7DMmei6OsB%2Bd03UaWMDZtze3MQ9LDylmiZ0hDXoaBCmz7%2FcTb%2BOLsnXuViEHnfLg5ZcMSmvqOon9Y4XSq2J2rYdS%2F0LXYOfA65V6P0dJjXpudCkY0JFibjtqVW7OdkvG1GxZ0ZECrokFWERZY4rki94%2F7CiFTMIC8A8p8HiyGdAF7MNfK9sIGOqUBLMLeuvj%2B5IyQMCnAwDr4yfr7npmMc8tZSQxT8jrw2ooP2pnmUIyHARK%2FxFmHWprUJU42T4JnDC313VwluaFob%2BCCAVR8dZ68M5hymvwqkI549PcQ3DoIFdR2oTUij8dsNWisTqPC8EhWCRwEn%2F%2BUTNDKtYQmXH6frM5C7WQoQmQ9zHKIG2J8rE6p6TObPytL9cDUDooj2WSOGPBlW5wHBzAgU7k9&X-Amz-Signature=c01ad0f592b38b26e6b513bf717ab07a1e19f4cf0de8da8e235d491884945c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIY2QUP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGAlE3465QhspxjeWyNAl8D7tyyH44YHrPERMOK7TFjDAiEAhyiu1v%2FKyDM8ITa3VsjLTjCUc0zyIdzcpaEu14NfTtAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP8K1sMU6vuPvg%2B31SrcAwU2%2BCCAbXvTVeYZXJc1QcowIcpMzonSVcGCJPz%2Fx9zFiGxfIB9aMMz1z6vVibDlIULZ22XfDfVT1EK3z%2Br3pzS0q7p%2FCflEKVbMsj0jDcWjrU%2F%2BaB5W1tSHGF6Jpr%2FUvGtA3GopqO9WaUlMA2Y2%2FfOkgKtPt2KApCT8YGt3vXNkYz3vqTWTwVhs%2FiiRWq%2ByubWzfhnf02M6sv%2Bk3Ljav4FhyrkHjo%2FrnfEbqOxwRhV1xCCJIruTAo%2FifZ5bGcwmrIRYXQE%2BwRCa6IOZzUt0obMuUf9VsSjPpgRWXi7U4kQR9WyIHnH89U8tuc6V8iTiZOF3UKzGWmimUHrjr0g4pL5dZGDKb54lDeY3gYY%2FGA66z81Hre835GemqI3i5fSJApxLgsYId2XeLKGDvT71LCYIDGGoecH72uns6Po2Z1JdbAgsDoGIDe8%2BW3xWlX%2Fq4lUIclR3rRlDypf7DMmei6OsB%2Bd03UaWMDZtze3MQ9LDylmiZ0hDXoaBCmz7%2FcTb%2BOLsnXuViEHnfLg5ZcMSmvqOon9Y4XSq2J2rYdS%2F0LXYOfA65V6P0dJjXpudCkY0JFibjtqVW7OdkvG1GxZ0ZECrokFWERZY4rki94%2F7CiFTMIC8A8p8HiyGdAF7MNfK9sIGOqUBLMLeuvj%2B5IyQMCnAwDr4yfr7npmMc8tZSQxT8jrw2ooP2pnmUIyHARK%2FxFmHWprUJU42T4JnDC313VwluaFob%2BCCAVR8dZ68M5hymvwqkI549PcQ3DoIFdR2oTUij8dsNWisTqPC8EhWCRwEn%2F%2BUTNDKtYQmXH6frM5C7WQoQmQ9zHKIG2J8rE6p6TObPytL9cDUDooj2WSOGPBlW5wHBzAgU7k9&X-Amz-Signature=44a3de9c8b753504b476471ab9fc6db6b460d65b3eb0ad4a93615fca5e70c7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIY2QUP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGAlE3465QhspxjeWyNAl8D7tyyH44YHrPERMOK7TFjDAiEAhyiu1v%2FKyDM8ITa3VsjLTjCUc0zyIdzcpaEu14NfTtAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP8K1sMU6vuPvg%2B31SrcAwU2%2BCCAbXvTVeYZXJc1QcowIcpMzonSVcGCJPz%2Fx9zFiGxfIB9aMMz1z6vVibDlIULZ22XfDfVT1EK3z%2Br3pzS0q7p%2FCflEKVbMsj0jDcWjrU%2F%2BaB5W1tSHGF6Jpr%2FUvGtA3GopqO9WaUlMA2Y2%2FfOkgKtPt2KApCT8YGt3vXNkYz3vqTWTwVhs%2FiiRWq%2ByubWzfhnf02M6sv%2Bk3Ljav4FhyrkHjo%2FrnfEbqOxwRhV1xCCJIruTAo%2FifZ5bGcwmrIRYXQE%2BwRCa6IOZzUt0obMuUf9VsSjPpgRWXi7U4kQR9WyIHnH89U8tuc6V8iTiZOF3UKzGWmimUHrjr0g4pL5dZGDKb54lDeY3gYY%2FGA66z81Hre835GemqI3i5fSJApxLgsYId2XeLKGDvT71LCYIDGGoecH72uns6Po2Z1JdbAgsDoGIDe8%2BW3xWlX%2Fq4lUIclR3rRlDypf7DMmei6OsB%2Bd03UaWMDZtze3MQ9LDylmiZ0hDXoaBCmz7%2FcTb%2BOLsnXuViEHnfLg5ZcMSmvqOon9Y4XSq2J2rYdS%2F0LXYOfA65V6P0dJjXpudCkY0JFibjtqVW7OdkvG1GxZ0ZECrokFWERZY4rki94%2F7CiFTMIC8A8p8HiyGdAF7MNfK9sIGOqUBLMLeuvj%2B5IyQMCnAwDr4yfr7npmMc8tZSQxT8jrw2ooP2pnmUIyHARK%2FxFmHWprUJU42T4JnDC313VwluaFob%2BCCAVR8dZ68M5hymvwqkI549PcQ3DoIFdR2oTUij8dsNWisTqPC8EhWCRwEn%2F%2BUTNDKtYQmXH6frM5C7WQoQmQ9zHKIG2J8rE6p6TObPytL9cDUDooj2WSOGPBlW5wHBzAgU7k9&X-Amz-Signature=caaa1400121b1b0b729d459e7f30824e4bf54e61d5239700afabcf9a71dad5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIY2QUP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGAlE3465QhspxjeWyNAl8D7tyyH44YHrPERMOK7TFjDAiEAhyiu1v%2FKyDM8ITa3VsjLTjCUc0zyIdzcpaEu14NfTtAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP8K1sMU6vuPvg%2B31SrcAwU2%2BCCAbXvTVeYZXJc1QcowIcpMzonSVcGCJPz%2Fx9zFiGxfIB9aMMz1z6vVibDlIULZ22XfDfVT1EK3z%2Br3pzS0q7p%2FCflEKVbMsj0jDcWjrU%2F%2BaB5W1tSHGF6Jpr%2FUvGtA3GopqO9WaUlMA2Y2%2FfOkgKtPt2KApCT8YGt3vXNkYz3vqTWTwVhs%2FiiRWq%2ByubWzfhnf02M6sv%2Bk3Ljav4FhyrkHjo%2FrnfEbqOxwRhV1xCCJIruTAo%2FifZ5bGcwmrIRYXQE%2BwRCa6IOZzUt0obMuUf9VsSjPpgRWXi7U4kQR9WyIHnH89U8tuc6V8iTiZOF3UKzGWmimUHrjr0g4pL5dZGDKb54lDeY3gYY%2FGA66z81Hre835GemqI3i5fSJApxLgsYId2XeLKGDvT71LCYIDGGoecH72uns6Po2Z1JdbAgsDoGIDe8%2BW3xWlX%2Fq4lUIclR3rRlDypf7DMmei6OsB%2Bd03UaWMDZtze3MQ9LDylmiZ0hDXoaBCmz7%2FcTb%2BOLsnXuViEHnfLg5ZcMSmvqOon9Y4XSq2J2rYdS%2F0LXYOfA65V6P0dJjXpudCkY0JFibjtqVW7OdkvG1GxZ0ZECrokFWERZY4rki94%2F7CiFTMIC8A8p8HiyGdAF7MNfK9sIGOqUBLMLeuvj%2B5IyQMCnAwDr4yfr7npmMc8tZSQxT8jrw2ooP2pnmUIyHARK%2FxFmHWprUJU42T4JnDC313VwluaFob%2BCCAVR8dZ68M5hymvwqkI549PcQ3DoIFdR2oTUij8dsNWisTqPC8EhWCRwEn%2F%2BUTNDKtYQmXH6frM5C7WQoQmQ9zHKIG2J8rE6p6TObPytL9cDUDooj2WSOGPBlW5wHBzAgU7k9&X-Amz-Signature=3b50b04dc104337b7ea844777757ceeb4b596a375a6d31c0344ee3cac088a8df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

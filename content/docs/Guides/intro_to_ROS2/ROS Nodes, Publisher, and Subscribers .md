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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675S47YIV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDojdCRU10R%2BsiFHYt6V5OeP28F6srvFzC7lr0lbiv%2FVgIhANk1Nf%2BT3IgnW3exJKTvTZDUbuk7SNm8vMHJPhXr%2BDXxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBvRscBDj9N9LtvcIq3ANH51kOLsj2P331lFZZItTtohaD0BEZdfU5aJSR1XDxMHQkk80qHO2JMSTNTzyECYKF2nHZzVnt4cHV3iOnd0xyI4V9cNlFweW5Vo%2FkbByFuE1igrD7fpIoLNsvcOVYuSlBwD5e0tk6uXwMlRjS7KHhQaAGsNYjkTDdiY%2FdWibLtDFrQ3L0BMYneyofFGHbXvAp15HHsB6zT0P4%2BKW84tubC2HMgKm9pFLDTlvIPXxbt1HPZzZ0HjTotZ4OB6y5wrBBuK%2BalsFB8nm6r8CbksClRLyeOIeP9zGhOzCNjBQDUUtKePFFGSuALz5WGNms4rvq63FaxI04W131JibLc8Xe6ydMxyv92MLONC%2FzT271enEtH%2Fur3QTKPFj1RhyaBIchfKZupJfZKIkfGaHZ3tla9fTsQDaqORhe5KDTn26olsCmCmQARMaDV2wOdggjgQYhycFR1UTA%2B%2BcMkA87ypKrbpNhTiwHU9M3WqI8DX3YQDoG9FzGKv5BbMmwlTsIDijCAK5C2OAJpxwAE9zOJTmIOdsaIhwUwl1tgugH%2Bj%2F6pExNLMRY3KkYoILozGBGwDJ6x5bl7ATBW4QkfQaznSCxCQhMZfZhSWwq4fWoL6h0%2BgL%2BfuniAIFdjW36hDCst4fBBjqkAVo8%2BXnHrHYWTiNGXPaOufZaM7YBKykgELsy91Zw8qBkyVuffnM5%2B2vlQXB74%2B9UaY102MpqlZ9D9DMukK%2FydP9CDQNaf022aoZ7DwOmTaesDiVqvQChz6VqLOxMgzcgXYpGhKB0QT4Ad0OOV6gsTxhUfZQf7p4BoyIQrcM1iRjXSfR8Dgfy8ATXeWqf2cWsShwNSigB27vB6y%2BFVpp3gnhZ3wlc&X-Amz-Signature=96883751322bdfc35d8010feb1d80a2a2808309ddcb6f1bda15b6fed671497a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675S47YIV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDojdCRU10R%2BsiFHYt6V5OeP28F6srvFzC7lr0lbiv%2FVgIhANk1Nf%2BT3IgnW3exJKTvTZDUbuk7SNm8vMHJPhXr%2BDXxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBvRscBDj9N9LtvcIq3ANH51kOLsj2P331lFZZItTtohaD0BEZdfU5aJSR1XDxMHQkk80qHO2JMSTNTzyECYKF2nHZzVnt4cHV3iOnd0xyI4V9cNlFweW5Vo%2FkbByFuE1igrD7fpIoLNsvcOVYuSlBwD5e0tk6uXwMlRjS7KHhQaAGsNYjkTDdiY%2FdWibLtDFrQ3L0BMYneyofFGHbXvAp15HHsB6zT0P4%2BKW84tubC2HMgKm9pFLDTlvIPXxbt1HPZzZ0HjTotZ4OB6y5wrBBuK%2BalsFB8nm6r8CbksClRLyeOIeP9zGhOzCNjBQDUUtKePFFGSuALz5WGNms4rvq63FaxI04W131JibLc8Xe6ydMxyv92MLONC%2FzT271enEtH%2Fur3QTKPFj1RhyaBIchfKZupJfZKIkfGaHZ3tla9fTsQDaqORhe5KDTn26olsCmCmQARMaDV2wOdggjgQYhycFR1UTA%2B%2BcMkA87ypKrbpNhTiwHU9M3WqI8DX3YQDoG9FzGKv5BbMmwlTsIDijCAK5C2OAJpxwAE9zOJTmIOdsaIhwUwl1tgugH%2Bj%2F6pExNLMRY3KkYoILozGBGwDJ6x5bl7ATBW4QkfQaznSCxCQhMZfZhSWwq4fWoL6h0%2BgL%2BfuniAIFdjW36hDCst4fBBjqkAVo8%2BXnHrHYWTiNGXPaOufZaM7YBKykgELsy91Zw8qBkyVuffnM5%2B2vlQXB74%2B9UaY102MpqlZ9D9DMukK%2FydP9CDQNaf022aoZ7DwOmTaesDiVqvQChz6VqLOxMgzcgXYpGhKB0QT4Ad0OOV6gsTxhUfZQf7p4BoyIQrcM1iRjXSfR8Dgfy8ATXeWqf2cWsShwNSigB27vB6y%2BFVpp3gnhZ3wlc&X-Amz-Signature=44395117f73122c21fb97f4cf348ad654ca9c440f3e0aca33e3787b430729a41&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675S47YIV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDojdCRU10R%2BsiFHYt6V5OeP28F6srvFzC7lr0lbiv%2FVgIhANk1Nf%2BT3IgnW3exJKTvTZDUbuk7SNm8vMHJPhXr%2BDXxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBvRscBDj9N9LtvcIq3ANH51kOLsj2P331lFZZItTtohaD0BEZdfU5aJSR1XDxMHQkk80qHO2JMSTNTzyECYKF2nHZzVnt4cHV3iOnd0xyI4V9cNlFweW5Vo%2FkbByFuE1igrD7fpIoLNsvcOVYuSlBwD5e0tk6uXwMlRjS7KHhQaAGsNYjkTDdiY%2FdWibLtDFrQ3L0BMYneyofFGHbXvAp15HHsB6zT0P4%2BKW84tubC2HMgKm9pFLDTlvIPXxbt1HPZzZ0HjTotZ4OB6y5wrBBuK%2BalsFB8nm6r8CbksClRLyeOIeP9zGhOzCNjBQDUUtKePFFGSuALz5WGNms4rvq63FaxI04W131JibLc8Xe6ydMxyv92MLONC%2FzT271enEtH%2Fur3QTKPFj1RhyaBIchfKZupJfZKIkfGaHZ3tla9fTsQDaqORhe5KDTn26olsCmCmQARMaDV2wOdggjgQYhycFR1UTA%2B%2BcMkA87ypKrbpNhTiwHU9M3WqI8DX3YQDoG9FzGKv5BbMmwlTsIDijCAK5C2OAJpxwAE9zOJTmIOdsaIhwUwl1tgugH%2Bj%2F6pExNLMRY3KkYoILozGBGwDJ6x5bl7ATBW4QkfQaznSCxCQhMZfZhSWwq4fWoL6h0%2BgL%2BfuniAIFdjW36hDCst4fBBjqkAVo8%2BXnHrHYWTiNGXPaOufZaM7YBKykgELsy91Zw8qBkyVuffnM5%2B2vlQXB74%2B9UaY102MpqlZ9D9DMukK%2FydP9CDQNaf022aoZ7DwOmTaesDiVqvQChz6VqLOxMgzcgXYpGhKB0QT4Ad0OOV6gsTxhUfZQf7p4BoyIQrcM1iRjXSfR8Dgfy8ATXeWqf2cWsShwNSigB27vB6y%2BFVpp3gnhZ3wlc&X-Amz-Signature=e5b41f4e96cfc79268e6ac6b211c0b5b1370a3d5d4306da404f7171e229df059&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675S47YIV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDojdCRU10R%2BsiFHYt6V5OeP28F6srvFzC7lr0lbiv%2FVgIhANk1Nf%2BT3IgnW3exJKTvTZDUbuk7SNm8vMHJPhXr%2BDXxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBvRscBDj9N9LtvcIq3ANH51kOLsj2P331lFZZItTtohaD0BEZdfU5aJSR1XDxMHQkk80qHO2JMSTNTzyECYKF2nHZzVnt4cHV3iOnd0xyI4V9cNlFweW5Vo%2FkbByFuE1igrD7fpIoLNsvcOVYuSlBwD5e0tk6uXwMlRjS7KHhQaAGsNYjkTDdiY%2FdWibLtDFrQ3L0BMYneyofFGHbXvAp15HHsB6zT0P4%2BKW84tubC2HMgKm9pFLDTlvIPXxbt1HPZzZ0HjTotZ4OB6y5wrBBuK%2BalsFB8nm6r8CbksClRLyeOIeP9zGhOzCNjBQDUUtKePFFGSuALz5WGNms4rvq63FaxI04W131JibLc8Xe6ydMxyv92MLONC%2FzT271enEtH%2Fur3QTKPFj1RhyaBIchfKZupJfZKIkfGaHZ3tla9fTsQDaqORhe5KDTn26olsCmCmQARMaDV2wOdggjgQYhycFR1UTA%2B%2BcMkA87ypKrbpNhTiwHU9M3WqI8DX3YQDoG9FzGKv5BbMmwlTsIDijCAK5C2OAJpxwAE9zOJTmIOdsaIhwUwl1tgugH%2Bj%2F6pExNLMRY3KkYoILozGBGwDJ6x5bl7ATBW4QkfQaznSCxCQhMZfZhSWwq4fWoL6h0%2BgL%2BfuniAIFdjW36hDCst4fBBjqkAVo8%2BXnHrHYWTiNGXPaOufZaM7YBKykgELsy91Zw8qBkyVuffnM5%2B2vlQXB74%2B9UaY102MpqlZ9D9DMukK%2FydP9CDQNaf022aoZ7DwOmTaesDiVqvQChz6VqLOxMgzcgXYpGhKB0QT4Ad0OOV6gsTxhUfZQf7p4BoyIQrcM1iRjXSfR8Dgfy8ATXeWqf2cWsShwNSigB27vB6y%2BFVpp3gnhZ3wlc&X-Amz-Signature=37dc4685d3de8af5f045ed99bb147b88e821c0b6d23691c132477c656ff7e969&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675S47YIV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDojdCRU10R%2BsiFHYt6V5OeP28F6srvFzC7lr0lbiv%2FVgIhANk1Nf%2BT3IgnW3exJKTvTZDUbuk7SNm8vMHJPhXr%2BDXxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBvRscBDj9N9LtvcIq3ANH51kOLsj2P331lFZZItTtohaD0BEZdfU5aJSR1XDxMHQkk80qHO2JMSTNTzyECYKF2nHZzVnt4cHV3iOnd0xyI4V9cNlFweW5Vo%2FkbByFuE1igrD7fpIoLNsvcOVYuSlBwD5e0tk6uXwMlRjS7KHhQaAGsNYjkTDdiY%2FdWibLtDFrQ3L0BMYneyofFGHbXvAp15HHsB6zT0P4%2BKW84tubC2HMgKm9pFLDTlvIPXxbt1HPZzZ0HjTotZ4OB6y5wrBBuK%2BalsFB8nm6r8CbksClRLyeOIeP9zGhOzCNjBQDUUtKePFFGSuALz5WGNms4rvq63FaxI04W131JibLc8Xe6ydMxyv92MLONC%2FzT271enEtH%2Fur3QTKPFj1RhyaBIchfKZupJfZKIkfGaHZ3tla9fTsQDaqORhe5KDTn26olsCmCmQARMaDV2wOdggjgQYhycFR1UTA%2B%2BcMkA87ypKrbpNhTiwHU9M3WqI8DX3YQDoG9FzGKv5BbMmwlTsIDijCAK5C2OAJpxwAE9zOJTmIOdsaIhwUwl1tgugH%2Bj%2F6pExNLMRY3KkYoILozGBGwDJ6x5bl7ATBW4QkfQaznSCxCQhMZfZhSWwq4fWoL6h0%2BgL%2BfuniAIFdjW36hDCst4fBBjqkAVo8%2BXnHrHYWTiNGXPaOufZaM7YBKykgELsy91Zw8qBkyVuffnM5%2B2vlQXB74%2B9UaY102MpqlZ9D9DMukK%2FydP9CDQNaf022aoZ7DwOmTaesDiVqvQChz6VqLOxMgzcgXYpGhKB0QT4Ad0OOV6gsTxhUfZQf7p4BoyIQrcM1iRjXSfR8Dgfy8ATXeWqf2cWsShwNSigB27vB6y%2BFVpp3gnhZ3wlc&X-Amz-Signature=46ae521b2b089a71a3a45eef171d1559be2fcd24ad3d4de559fea1382bff0768&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675S47YIV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDojdCRU10R%2BsiFHYt6V5OeP28F6srvFzC7lr0lbiv%2FVgIhANk1Nf%2BT3IgnW3exJKTvTZDUbuk7SNm8vMHJPhXr%2BDXxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBvRscBDj9N9LtvcIq3ANH51kOLsj2P331lFZZItTtohaD0BEZdfU5aJSR1XDxMHQkk80qHO2JMSTNTzyECYKF2nHZzVnt4cHV3iOnd0xyI4V9cNlFweW5Vo%2FkbByFuE1igrD7fpIoLNsvcOVYuSlBwD5e0tk6uXwMlRjS7KHhQaAGsNYjkTDdiY%2FdWibLtDFrQ3L0BMYneyofFGHbXvAp15HHsB6zT0P4%2BKW84tubC2HMgKm9pFLDTlvIPXxbt1HPZzZ0HjTotZ4OB6y5wrBBuK%2BalsFB8nm6r8CbksClRLyeOIeP9zGhOzCNjBQDUUtKePFFGSuALz5WGNms4rvq63FaxI04W131JibLc8Xe6ydMxyv92MLONC%2FzT271enEtH%2Fur3QTKPFj1RhyaBIchfKZupJfZKIkfGaHZ3tla9fTsQDaqORhe5KDTn26olsCmCmQARMaDV2wOdggjgQYhycFR1UTA%2B%2BcMkA87ypKrbpNhTiwHU9M3WqI8DX3YQDoG9FzGKv5BbMmwlTsIDijCAK5C2OAJpxwAE9zOJTmIOdsaIhwUwl1tgugH%2Bj%2F6pExNLMRY3KkYoILozGBGwDJ6x5bl7ATBW4QkfQaznSCxCQhMZfZhSWwq4fWoL6h0%2BgL%2BfuniAIFdjW36hDCst4fBBjqkAVo8%2BXnHrHYWTiNGXPaOufZaM7YBKykgELsy91Zw8qBkyVuffnM5%2B2vlQXB74%2B9UaY102MpqlZ9D9DMukK%2FydP9CDQNaf022aoZ7DwOmTaesDiVqvQChz6VqLOxMgzcgXYpGhKB0QT4Ad0OOV6gsTxhUfZQf7p4BoyIQrcM1iRjXSfR8Dgfy8ATXeWqf2cWsShwNSigB27vB6y%2BFVpp3gnhZ3wlc&X-Amz-Signature=cee4ebb62d6e73d15821aedd2439a863d728b3746eb21469bd420a944d261869&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675S47YIV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDojdCRU10R%2BsiFHYt6V5OeP28F6srvFzC7lr0lbiv%2FVgIhANk1Nf%2BT3IgnW3exJKTvTZDUbuk7SNm8vMHJPhXr%2BDXxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBvRscBDj9N9LtvcIq3ANH51kOLsj2P331lFZZItTtohaD0BEZdfU5aJSR1XDxMHQkk80qHO2JMSTNTzyECYKF2nHZzVnt4cHV3iOnd0xyI4V9cNlFweW5Vo%2FkbByFuE1igrD7fpIoLNsvcOVYuSlBwD5e0tk6uXwMlRjS7KHhQaAGsNYjkTDdiY%2FdWibLtDFrQ3L0BMYneyofFGHbXvAp15HHsB6zT0P4%2BKW84tubC2HMgKm9pFLDTlvIPXxbt1HPZzZ0HjTotZ4OB6y5wrBBuK%2BalsFB8nm6r8CbksClRLyeOIeP9zGhOzCNjBQDUUtKePFFGSuALz5WGNms4rvq63FaxI04W131JibLc8Xe6ydMxyv92MLONC%2FzT271enEtH%2Fur3QTKPFj1RhyaBIchfKZupJfZKIkfGaHZ3tla9fTsQDaqORhe5KDTn26olsCmCmQARMaDV2wOdggjgQYhycFR1UTA%2B%2BcMkA87ypKrbpNhTiwHU9M3WqI8DX3YQDoG9FzGKv5BbMmwlTsIDijCAK5C2OAJpxwAE9zOJTmIOdsaIhwUwl1tgugH%2Bj%2F6pExNLMRY3KkYoILozGBGwDJ6x5bl7ATBW4QkfQaznSCxCQhMZfZhSWwq4fWoL6h0%2BgL%2BfuniAIFdjW36hDCst4fBBjqkAVo8%2BXnHrHYWTiNGXPaOufZaM7YBKykgELsy91Zw8qBkyVuffnM5%2B2vlQXB74%2B9UaY102MpqlZ9D9DMukK%2FydP9CDQNaf022aoZ7DwOmTaesDiVqvQChz6VqLOxMgzcgXYpGhKB0QT4Ad0OOV6gsTxhUfZQf7p4BoyIQrcM1iRjXSfR8Dgfy8ATXeWqf2cWsShwNSigB27vB6y%2BFVpp3gnhZ3wlc&X-Amz-Signature=0a16b625f5263857d9a29eebf93462bf9a8aae39bca95baa5797aee3f65888f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675S47YIV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDojdCRU10R%2BsiFHYt6V5OeP28F6srvFzC7lr0lbiv%2FVgIhANk1Nf%2BT3IgnW3exJKTvTZDUbuk7SNm8vMHJPhXr%2BDXxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBvRscBDj9N9LtvcIq3ANH51kOLsj2P331lFZZItTtohaD0BEZdfU5aJSR1XDxMHQkk80qHO2JMSTNTzyECYKF2nHZzVnt4cHV3iOnd0xyI4V9cNlFweW5Vo%2FkbByFuE1igrD7fpIoLNsvcOVYuSlBwD5e0tk6uXwMlRjS7KHhQaAGsNYjkTDdiY%2FdWibLtDFrQ3L0BMYneyofFGHbXvAp15HHsB6zT0P4%2BKW84tubC2HMgKm9pFLDTlvIPXxbt1HPZzZ0HjTotZ4OB6y5wrBBuK%2BalsFB8nm6r8CbksClRLyeOIeP9zGhOzCNjBQDUUtKePFFGSuALz5WGNms4rvq63FaxI04W131JibLc8Xe6ydMxyv92MLONC%2FzT271enEtH%2Fur3QTKPFj1RhyaBIchfKZupJfZKIkfGaHZ3tla9fTsQDaqORhe5KDTn26olsCmCmQARMaDV2wOdggjgQYhycFR1UTA%2B%2BcMkA87ypKrbpNhTiwHU9M3WqI8DX3YQDoG9FzGKv5BbMmwlTsIDijCAK5C2OAJpxwAE9zOJTmIOdsaIhwUwl1tgugH%2Bj%2F6pExNLMRY3KkYoILozGBGwDJ6x5bl7ATBW4QkfQaznSCxCQhMZfZhSWwq4fWoL6h0%2BgL%2BfuniAIFdjW36hDCst4fBBjqkAVo8%2BXnHrHYWTiNGXPaOufZaM7YBKykgELsy91Zw8qBkyVuffnM5%2B2vlQXB74%2B9UaY102MpqlZ9D9DMukK%2FydP9CDQNaf022aoZ7DwOmTaesDiVqvQChz6VqLOxMgzcgXYpGhKB0QT4Ad0OOV6gsTxhUfZQf7p4BoyIQrcM1iRjXSfR8Dgfy8ATXeWqf2cWsShwNSigB27vB6y%2BFVpp3gnhZ3wlc&X-Amz-Signature=d7a4b8277a3e1e77f9a6a9192d34de1fbe40ac45cc6166d695c500d224776abf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGYU2CG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrRPyk9d7pjf%2FMeyJuMkE4nOLuKmF1AveT5j3m01lz2wIgIuVzMd8VCxGMjtZ%2FlQm7WdgbBSl%2FlzU7OPKG8gHwfl4q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC76lax3xGxWLnz04ircA6l%2FSb5BqaGx9yavreJqeTj65sbtw2UoM%2BXx%2Fk3qlHeqJ4Vkeb7h2Oj6TPALb4WBr6OWXUq9G2FzV8ROd8yQfCKujRv4xIpfEWmQ8lrZLbZ2gwdyp%2Bw%2BPcoB5hh2l%2FIHFf%2BsmVOnkc%2Bu52fcp8V7gFZ3gttgUDqGRW8Si0QXYxL9gjcylPJ%2B71CmTgCMLWGNoo5up4zlQ69nsqTbGpAUKZ%2F6YuZYMCUr1NmKNVt9wyBUjoHJn579ZU0073cp2Jobubt4bP%2B6WdAGtZzDzLjn%2B6h6PZGmgZua6k8k4MC2s071wyXjHzkvL5i%2FhcTOKp48fahN4bduk01kZccZ27D2C3qErKAbIs1ThbQl7uiXp%2BQMygS0i7HL08WlDpTbUwyrXJb%2Fr4XYD9D0dTzyUYFxUfWJvfswXQbfX42He2POe2S20lX965yFAuHprJWtkOjE77ydWbTp4S0QB6l4FHn2q7qJXOevl8LTLibZgc%2F8eM3I1n611bRC3EtgQKJ5fv7rFSZMuJFgEL2Q2Oeec4%2BjlVGG5OPjYwUQ%2FCtkGK6%2FSufk%2FCsWikw20rhh6S6OrdNGvUhCzTLgSoG0iXUpkelnl27OSIi5hg90lUazKhbgVylPA8idqAGDWGkl%2BiauMLi3ob4GOqUBvHI2V3U0D%2FS7VI2NhC%2B%2BWoCRauy9rOMNaBFVxpWyAzWHmhV9f38Gk4qtIhrqpcT20CjOUbbp37oblL9xcg552GMHD8boPeRGXRrqpjPdunkFpWHWWFNhue0AGIjHlJJ1ZuLnqI7fsGawI7unh6WALEysINDIbPL4FUw2KIPDQcvbnC2P3PZSYPRvpGJAmGsdXXdi6CBK7%2FoC7NTlWM5nC3DeIEeL&X-Amz-Signature=5e1c14d22145dc13afa95e223d206c7fccf53698eeee4ddd67981f86d65014cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGYU2CG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrRPyk9d7pjf%2FMeyJuMkE4nOLuKmF1AveT5j3m01lz2wIgIuVzMd8VCxGMjtZ%2FlQm7WdgbBSl%2FlzU7OPKG8gHwfl4q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC76lax3xGxWLnz04ircA6l%2FSb5BqaGx9yavreJqeTj65sbtw2UoM%2BXx%2Fk3qlHeqJ4Vkeb7h2Oj6TPALb4WBr6OWXUq9G2FzV8ROd8yQfCKujRv4xIpfEWmQ8lrZLbZ2gwdyp%2Bw%2BPcoB5hh2l%2FIHFf%2BsmVOnkc%2Bu52fcp8V7gFZ3gttgUDqGRW8Si0QXYxL9gjcylPJ%2B71CmTgCMLWGNoo5up4zlQ69nsqTbGpAUKZ%2F6YuZYMCUr1NmKNVt9wyBUjoHJn579ZU0073cp2Jobubt4bP%2B6WdAGtZzDzLjn%2B6h6PZGmgZua6k8k4MC2s071wyXjHzkvL5i%2FhcTOKp48fahN4bduk01kZccZ27D2C3qErKAbIs1ThbQl7uiXp%2BQMygS0i7HL08WlDpTbUwyrXJb%2Fr4XYD9D0dTzyUYFxUfWJvfswXQbfX42He2POe2S20lX965yFAuHprJWtkOjE77ydWbTp4S0QB6l4FHn2q7qJXOevl8LTLibZgc%2F8eM3I1n611bRC3EtgQKJ5fv7rFSZMuJFgEL2Q2Oeec4%2BjlVGG5OPjYwUQ%2FCtkGK6%2FSufk%2FCsWikw20rhh6S6OrdNGvUhCzTLgSoG0iXUpkelnl27OSIi5hg90lUazKhbgVylPA8idqAGDWGkl%2BiauMLi3ob4GOqUBvHI2V3U0D%2FS7VI2NhC%2B%2BWoCRauy9rOMNaBFVxpWyAzWHmhV9f38Gk4qtIhrqpcT20CjOUbbp37oblL9xcg552GMHD8boPeRGXRrqpjPdunkFpWHWWFNhue0AGIjHlJJ1ZuLnqI7fsGawI7unh6WALEysINDIbPL4FUw2KIPDQcvbnC2P3PZSYPRvpGJAmGsdXXdi6CBK7%2FoC7NTlWM5nC3DeIEeL&X-Amz-Signature=258d6797915792f56e66235274e13b5fd9bdba8bfdb498e3736ac89cc9501f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGYU2CG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrRPyk9d7pjf%2FMeyJuMkE4nOLuKmF1AveT5j3m01lz2wIgIuVzMd8VCxGMjtZ%2FlQm7WdgbBSl%2FlzU7OPKG8gHwfl4q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC76lax3xGxWLnz04ircA6l%2FSb5BqaGx9yavreJqeTj65sbtw2UoM%2BXx%2Fk3qlHeqJ4Vkeb7h2Oj6TPALb4WBr6OWXUq9G2FzV8ROd8yQfCKujRv4xIpfEWmQ8lrZLbZ2gwdyp%2Bw%2BPcoB5hh2l%2FIHFf%2BsmVOnkc%2Bu52fcp8V7gFZ3gttgUDqGRW8Si0QXYxL9gjcylPJ%2B71CmTgCMLWGNoo5up4zlQ69nsqTbGpAUKZ%2F6YuZYMCUr1NmKNVt9wyBUjoHJn579ZU0073cp2Jobubt4bP%2B6WdAGtZzDzLjn%2B6h6PZGmgZua6k8k4MC2s071wyXjHzkvL5i%2FhcTOKp48fahN4bduk01kZccZ27D2C3qErKAbIs1ThbQl7uiXp%2BQMygS0i7HL08WlDpTbUwyrXJb%2Fr4XYD9D0dTzyUYFxUfWJvfswXQbfX42He2POe2S20lX965yFAuHprJWtkOjE77ydWbTp4S0QB6l4FHn2q7qJXOevl8LTLibZgc%2F8eM3I1n611bRC3EtgQKJ5fv7rFSZMuJFgEL2Q2Oeec4%2BjlVGG5OPjYwUQ%2FCtkGK6%2FSufk%2FCsWikw20rhh6S6OrdNGvUhCzTLgSoG0iXUpkelnl27OSIi5hg90lUazKhbgVylPA8idqAGDWGkl%2BiauMLi3ob4GOqUBvHI2V3U0D%2FS7VI2NhC%2B%2BWoCRauy9rOMNaBFVxpWyAzWHmhV9f38Gk4qtIhrqpcT20CjOUbbp37oblL9xcg552GMHD8boPeRGXRrqpjPdunkFpWHWWFNhue0AGIjHlJJ1ZuLnqI7fsGawI7unh6WALEysINDIbPL4FUw2KIPDQcvbnC2P3PZSYPRvpGJAmGsdXXdi6CBK7%2FoC7NTlWM5nC3DeIEeL&X-Amz-Signature=ca56b9e936c65a9d7176bd8df14ab9fb8134af3b6bb9e6b16c054239aacea2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGYU2CG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrRPyk9d7pjf%2FMeyJuMkE4nOLuKmF1AveT5j3m01lz2wIgIuVzMd8VCxGMjtZ%2FlQm7WdgbBSl%2FlzU7OPKG8gHwfl4q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC76lax3xGxWLnz04ircA6l%2FSb5BqaGx9yavreJqeTj65sbtw2UoM%2BXx%2Fk3qlHeqJ4Vkeb7h2Oj6TPALb4WBr6OWXUq9G2FzV8ROd8yQfCKujRv4xIpfEWmQ8lrZLbZ2gwdyp%2Bw%2BPcoB5hh2l%2FIHFf%2BsmVOnkc%2Bu52fcp8V7gFZ3gttgUDqGRW8Si0QXYxL9gjcylPJ%2B71CmTgCMLWGNoo5up4zlQ69nsqTbGpAUKZ%2F6YuZYMCUr1NmKNVt9wyBUjoHJn579ZU0073cp2Jobubt4bP%2B6WdAGtZzDzLjn%2B6h6PZGmgZua6k8k4MC2s071wyXjHzkvL5i%2FhcTOKp48fahN4bduk01kZccZ27D2C3qErKAbIs1ThbQl7uiXp%2BQMygS0i7HL08WlDpTbUwyrXJb%2Fr4XYD9D0dTzyUYFxUfWJvfswXQbfX42He2POe2S20lX965yFAuHprJWtkOjE77ydWbTp4S0QB6l4FHn2q7qJXOevl8LTLibZgc%2F8eM3I1n611bRC3EtgQKJ5fv7rFSZMuJFgEL2Q2Oeec4%2BjlVGG5OPjYwUQ%2FCtkGK6%2FSufk%2FCsWikw20rhh6S6OrdNGvUhCzTLgSoG0iXUpkelnl27OSIi5hg90lUazKhbgVylPA8idqAGDWGkl%2BiauMLi3ob4GOqUBvHI2V3U0D%2FS7VI2NhC%2B%2BWoCRauy9rOMNaBFVxpWyAzWHmhV9f38Gk4qtIhrqpcT20CjOUbbp37oblL9xcg552GMHD8boPeRGXRrqpjPdunkFpWHWWFNhue0AGIjHlJJ1ZuLnqI7fsGawI7unh6WALEysINDIbPL4FUw2KIPDQcvbnC2P3PZSYPRvpGJAmGsdXXdi6CBK7%2FoC7NTlWM5nC3DeIEeL&X-Amz-Signature=fe7f639310e620c2d11942a184180dd14dbcf96b7424278351b3a6275b6dce08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGYU2CG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrRPyk9d7pjf%2FMeyJuMkE4nOLuKmF1AveT5j3m01lz2wIgIuVzMd8VCxGMjtZ%2FlQm7WdgbBSl%2FlzU7OPKG8gHwfl4q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC76lax3xGxWLnz04ircA6l%2FSb5BqaGx9yavreJqeTj65sbtw2UoM%2BXx%2Fk3qlHeqJ4Vkeb7h2Oj6TPALb4WBr6OWXUq9G2FzV8ROd8yQfCKujRv4xIpfEWmQ8lrZLbZ2gwdyp%2Bw%2BPcoB5hh2l%2FIHFf%2BsmVOnkc%2Bu52fcp8V7gFZ3gttgUDqGRW8Si0QXYxL9gjcylPJ%2B71CmTgCMLWGNoo5up4zlQ69nsqTbGpAUKZ%2F6YuZYMCUr1NmKNVt9wyBUjoHJn579ZU0073cp2Jobubt4bP%2B6WdAGtZzDzLjn%2B6h6PZGmgZua6k8k4MC2s071wyXjHzkvL5i%2FhcTOKp48fahN4bduk01kZccZ27D2C3qErKAbIs1ThbQl7uiXp%2BQMygS0i7HL08WlDpTbUwyrXJb%2Fr4XYD9D0dTzyUYFxUfWJvfswXQbfX42He2POe2S20lX965yFAuHprJWtkOjE77ydWbTp4S0QB6l4FHn2q7qJXOevl8LTLibZgc%2F8eM3I1n611bRC3EtgQKJ5fv7rFSZMuJFgEL2Q2Oeec4%2BjlVGG5OPjYwUQ%2FCtkGK6%2FSufk%2FCsWikw20rhh6S6OrdNGvUhCzTLgSoG0iXUpkelnl27OSIi5hg90lUazKhbgVylPA8idqAGDWGkl%2BiauMLi3ob4GOqUBvHI2V3U0D%2FS7VI2NhC%2B%2BWoCRauy9rOMNaBFVxpWyAzWHmhV9f38Gk4qtIhrqpcT20CjOUbbp37oblL9xcg552GMHD8boPeRGXRrqpjPdunkFpWHWWFNhue0AGIjHlJJ1ZuLnqI7fsGawI7unh6WALEysINDIbPL4FUw2KIPDQcvbnC2P3PZSYPRvpGJAmGsdXXdi6CBK7%2FoC7NTlWM5nC3DeIEeL&X-Amz-Signature=c2f7bfc12f9dd2e80aa010032545f734355db2a5b2ba0a7535d227807c6c3bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGYU2CG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrRPyk9d7pjf%2FMeyJuMkE4nOLuKmF1AveT5j3m01lz2wIgIuVzMd8VCxGMjtZ%2FlQm7WdgbBSl%2FlzU7OPKG8gHwfl4q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC76lax3xGxWLnz04ircA6l%2FSb5BqaGx9yavreJqeTj65sbtw2UoM%2BXx%2Fk3qlHeqJ4Vkeb7h2Oj6TPALb4WBr6OWXUq9G2FzV8ROd8yQfCKujRv4xIpfEWmQ8lrZLbZ2gwdyp%2Bw%2BPcoB5hh2l%2FIHFf%2BsmVOnkc%2Bu52fcp8V7gFZ3gttgUDqGRW8Si0QXYxL9gjcylPJ%2B71CmTgCMLWGNoo5up4zlQ69nsqTbGpAUKZ%2F6YuZYMCUr1NmKNVt9wyBUjoHJn579ZU0073cp2Jobubt4bP%2B6WdAGtZzDzLjn%2B6h6PZGmgZua6k8k4MC2s071wyXjHzkvL5i%2FhcTOKp48fahN4bduk01kZccZ27D2C3qErKAbIs1ThbQl7uiXp%2BQMygS0i7HL08WlDpTbUwyrXJb%2Fr4XYD9D0dTzyUYFxUfWJvfswXQbfX42He2POe2S20lX965yFAuHprJWtkOjE77ydWbTp4S0QB6l4FHn2q7qJXOevl8LTLibZgc%2F8eM3I1n611bRC3EtgQKJ5fv7rFSZMuJFgEL2Q2Oeec4%2BjlVGG5OPjYwUQ%2FCtkGK6%2FSufk%2FCsWikw20rhh6S6OrdNGvUhCzTLgSoG0iXUpkelnl27OSIi5hg90lUazKhbgVylPA8idqAGDWGkl%2BiauMLi3ob4GOqUBvHI2V3U0D%2FS7VI2NhC%2B%2BWoCRauy9rOMNaBFVxpWyAzWHmhV9f38Gk4qtIhrqpcT20CjOUbbp37oblL9xcg552GMHD8boPeRGXRrqpjPdunkFpWHWWFNhue0AGIjHlJJ1ZuLnqI7fsGawI7unh6WALEysINDIbPL4FUw2KIPDQcvbnC2P3PZSYPRvpGJAmGsdXXdi6CBK7%2FoC7NTlWM5nC3DeIEeL&X-Amz-Signature=de2e47e5c7b18c8749f5a3c989f986bc735883e6431bc5241dc3b5c49294a2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGYU2CG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrRPyk9d7pjf%2FMeyJuMkE4nOLuKmF1AveT5j3m01lz2wIgIuVzMd8VCxGMjtZ%2FlQm7WdgbBSl%2FlzU7OPKG8gHwfl4q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC76lax3xGxWLnz04ircA6l%2FSb5BqaGx9yavreJqeTj65sbtw2UoM%2BXx%2Fk3qlHeqJ4Vkeb7h2Oj6TPALb4WBr6OWXUq9G2FzV8ROd8yQfCKujRv4xIpfEWmQ8lrZLbZ2gwdyp%2Bw%2BPcoB5hh2l%2FIHFf%2BsmVOnkc%2Bu52fcp8V7gFZ3gttgUDqGRW8Si0QXYxL9gjcylPJ%2B71CmTgCMLWGNoo5up4zlQ69nsqTbGpAUKZ%2F6YuZYMCUr1NmKNVt9wyBUjoHJn579ZU0073cp2Jobubt4bP%2B6WdAGtZzDzLjn%2B6h6PZGmgZua6k8k4MC2s071wyXjHzkvL5i%2FhcTOKp48fahN4bduk01kZccZ27D2C3qErKAbIs1ThbQl7uiXp%2BQMygS0i7HL08WlDpTbUwyrXJb%2Fr4XYD9D0dTzyUYFxUfWJvfswXQbfX42He2POe2S20lX965yFAuHprJWtkOjE77ydWbTp4S0QB6l4FHn2q7qJXOevl8LTLibZgc%2F8eM3I1n611bRC3EtgQKJ5fv7rFSZMuJFgEL2Q2Oeec4%2BjlVGG5OPjYwUQ%2FCtkGK6%2FSufk%2FCsWikw20rhh6S6OrdNGvUhCzTLgSoG0iXUpkelnl27OSIi5hg90lUazKhbgVylPA8idqAGDWGkl%2BiauMLi3ob4GOqUBvHI2V3U0D%2FS7VI2NhC%2B%2BWoCRauy9rOMNaBFVxpWyAzWHmhV9f38Gk4qtIhrqpcT20CjOUbbp37oblL9xcg552GMHD8boPeRGXRrqpjPdunkFpWHWWFNhue0AGIjHlJJ1ZuLnqI7fsGawI7unh6WALEysINDIbPL4FUw2KIPDQcvbnC2P3PZSYPRvpGJAmGsdXXdi6CBK7%2FoC7NTlWM5nC3DeIEeL&X-Amz-Signature=099475b509ce2b17e3c1229004d6ca66ee094778bfcaff143e02890369f8b0f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGYU2CG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrRPyk9d7pjf%2FMeyJuMkE4nOLuKmF1AveT5j3m01lz2wIgIuVzMd8VCxGMjtZ%2FlQm7WdgbBSl%2FlzU7OPKG8gHwfl4q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC76lax3xGxWLnz04ircA6l%2FSb5BqaGx9yavreJqeTj65sbtw2UoM%2BXx%2Fk3qlHeqJ4Vkeb7h2Oj6TPALb4WBr6OWXUq9G2FzV8ROd8yQfCKujRv4xIpfEWmQ8lrZLbZ2gwdyp%2Bw%2BPcoB5hh2l%2FIHFf%2BsmVOnkc%2Bu52fcp8V7gFZ3gttgUDqGRW8Si0QXYxL9gjcylPJ%2B71CmTgCMLWGNoo5up4zlQ69nsqTbGpAUKZ%2F6YuZYMCUr1NmKNVt9wyBUjoHJn579ZU0073cp2Jobubt4bP%2B6WdAGtZzDzLjn%2B6h6PZGmgZua6k8k4MC2s071wyXjHzkvL5i%2FhcTOKp48fahN4bduk01kZccZ27D2C3qErKAbIs1ThbQl7uiXp%2BQMygS0i7HL08WlDpTbUwyrXJb%2Fr4XYD9D0dTzyUYFxUfWJvfswXQbfX42He2POe2S20lX965yFAuHprJWtkOjE77ydWbTp4S0QB6l4FHn2q7qJXOevl8LTLibZgc%2F8eM3I1n611bRC3EtgQKJ5fv7rFSZMuJFgEL2Q2Oeec4%2BjlVGG5OPjYwUQ%2FCtkGK6%2FSufk%2FCsWikw20rhh6S6OrdNGvUhCzTLgSoG0iXUpkelnl27OSIi5hg90lUazKhbgVylPA8idqAGDWGkl%2BiauMLi3ob4GOqUBvHI2V3U0D%2FS7VI2NhC%2B%2BWoCRauy9rOMNaBFVxpWyAzWHmhV9f38Gk4qtIhrqpcT20CjOUbbp37oblL9xcg552GMHD8boPeRGXRrqpjPdunkFpWHWWFNhue0AGIjHlJJ1ZuLnqI7fsGawI7unh6WALEysINDIbPL4FUw2KIPDQcvbnC2P3PZSYPRvpGJAmGsdXXdi6CBK7%2FoC7NTlWM5nC3DeIEeL&X-Amz-Signature=1330e5c4db60f8a912f81660e3b3854471158e9c9bed50113668d771f5c44860&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

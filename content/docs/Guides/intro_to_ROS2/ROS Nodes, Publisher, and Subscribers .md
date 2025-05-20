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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHX7UMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtKIaDj3bYRElI09T6etayOiWKPHVOEmj91%2Bnl21XkowIhALSi11pSXHu%2BEjgx%2BS69MgvsUDNojhFdkF2A33VYtqAIKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhgaVRllL6XldvCicq3AM%2BofPQEmZfmmB39tyuhJywyVBgguqCUSoRrVl9AEEBPGrElkUN7whRizj8j1OKqyT2%2BeYMei%2BwgkTOPiyDmV0MvLrkz4kf2ZwkyOucuq41DpEeTRYzDHDN5A6e2UOBJOCD671RneBEubvQClSs58QxEx6wR3Lt%2FnOVJgGHt6PjVCXMlBO1r4qu0uXeXNq0t9YFc3PS1%2FXNJyYZyrILeU9h3DR4a3vfqShMacaPcViCIu3JXvmT5PZ2yaxMOCD9p0AgeZADzB6IiEEsoqHONTJdyDFYn3N4bB6xDN7hOQAXI3Yjj%2FEA8xRzM8OS42CquPQHptsVktvttX8oGW5SGhJoQF05Fg8NFk%2FMCgLJ5K7sZMoBfrvddu%2FBp0CQqV0fCp%2BbbYjpnCJS0j8DnyyHshrslbA9n5SkDsDofKB5vQsBnBXmJzmFfwihuYDMe%2FsEk4UZyLckG21CoqnM7n5mPmBzr1uownOTNWAFB2B2wV8hSpd9QFOEVnGynLpHnGAAjA2v6o7oBWsVNdTi7XpIdFEmHuuMsjsMdhKVjMre5QliJaISR1fUqs6DESbNqnohAzkZC6dARBWkBvWiG4dr7%2F229WyUryBbirBa92Gpj8Etfam1zzcWJ2rv6LUQxjCRy7PBBjqkAdQBKEirRmI%2FBPiJ7y8RogdJV30yuRkFK7CYa3JSfAx40LN%2FTnjvl87SFT5GFyk%2F9RCcXggv16KcUjzhLRQvW5wOB4b93NYcA2Rwszew0lII%2FIwvCwoHnJpEhOAugvvYu7LAqpiDKsa4lrxhMX5uKGBf5znVwW6%2FM%2BP232Tey%2BDd2G9wzh0zKl6TqYLBd7n1tvY3KDO4S%2BnJc5%2FyrTYHafcRe%2FgX&X-Amz-Signature=84255cbac9636839e5c7b5c17bf5cf9af86758e04d1d14600b7f9e57cb9af1e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHX7UMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtKIaDj3bYRElI09T6etayOiWKPHVOEmj91%2Bnl21XkowIhALSi11pSXHu%2BEjgx%2BS69MgvsUDNojhFdkF2A33VYtqAIKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhgaVRllL6XldvCicq3AM%2BofPQEmZfmmB39tyuhJywyVBgguqCUSoRrVl9AEEBPGrElkUN7whRizj8j1OKqyT2%2BeYMei%2BwgkTOPiyDmV0MvLrkz4kf2ZwkyOucuq41DpEeTRYzDHDN5A6e2UOBJOCD671RneBEubvQClSs58QxEx6wR3Lt%2FnOVJgGHt6PjVCXMlBO1r4qu0uXeXNq0t9YFc3PS1%2FXNJyYZyrILeU9h3DR4a3vfqShMacaPcViCIu3JXvmT5PZ2yaxMOCD9p0AgeZADzB6IiEEsoqHONTJdyDFYn3N4bB6xDN7hOQAXI3Yjj%2FEA8xRzM8OS42CquPQHptsVktvttX8oGW5SGhJoQF05Fg8NFk%2FMCgLJ5K7sZMoBfrvddu%2FBp0CQqV0fCp%2BbbYjpnCJS0j8DnyyHshrslbA9n5SkDsDofKB5vQsBnBXmJzmFfwihuYDMe%2FsEk4UZyLckG21CoqnM7n5mPmBzr1uownOTNWAFB2B2wV8hSpd9QFOEVnGynLpHnGAAjA2v6o7oBWsVNdTi7XpIdFEmHuuMsjsMdhKVjMre5QliJaISR1fUqs6DESbNqnohAzkZC6dARBWkBvWiG4dr7%2F229WyUryBbirBa92Gpj8Etfam1zzcWJ2rv6LUQxjCRy7PBBjqkAdQBKEirRmI%2FBPiJ7y8RogdJV30yuRkFK7CYa3JSfAx40LN%2FTnjvl87SFT5GFyk%2F9RCcXggv16KcUjzhLRQvW5wOB4b93NYcA2Rwszew0lII%2FIwvCwoHnJpEhOAugvvYu7LAqpiDKsa4lrxhMX5uKGBf5znVwW6%2FM%2BP232Tey%2BDd2G9wzh0zKl6TqYLBd7n1tvY3KDO4S%2BnJc5%2FyrTYHafcRe%2FgX&X-Amz-Signature=0025a59b7ee8d19153293a562d4c163252ac62a1389c436d6e0376a67d6f0707&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHX7UMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtKIaDj3bYRElI09T6etayOiWKPHVOEmj91%2Bnl21XkowIhALSi11pSXHu%2BEjgx%2BS69MgvsUDNojhFdkF2A33VYtqAIKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhgaVRllL6XldvCicq3AM%2BofPQEmZfmmB39tyuhJywyVBgguqCUSoRrVl9AEEBPGrElkUN7whRizj8j1OKqyT2%2BeYMei%2BwgkTOPiyDmV0MvLrkz4kf2ZwkyOucuq41DpEeTRYzDHDN5A6e2UOBJOCD671RneBEubvQClSs58QxEx6wR3Lt%2FnOVJgGHt6PjVCXMlBO1r4qu0uXeXNq0t9YFc3PS1%2FXNJyYZyrILeU9h3DR4a3vfqShMacaPcViCIu3JXvmT5PZ2yaxMOCD9p0AgeZADzB6IiEEsoqHONTJdyDFYn3N4bB6xDN7hOQAXI3Yjj%2FEA8xRzM8OS42CquPQHptsVktvttX8oGW5SGhJoQF05Fg8NFk%2FMCgLJ5K7sZMoBfrvddu%2FBp0CQqV0fCp%2BbbYjpnCJS0j8DnyyHshrslbA9n5SkDsDofKB5vQsBnBXmJzmFfwihuYDMe%2FsEk4UZyLckG21CoqnM7n5mPmBzr1uownOTNWAFB2B2wV8hSpd9QFOEVnGynLpHnGAAjA2v6o7oBWsVNdTi7XpIdFEmHuuMsjsMdhKVjMre5QliJaISR1fUqs6DESbNqnohAzkZC6dARBWkBvWiG4dr7%2F229WyUryBbirBa92Gpj8Etfam1zzcWJ2rv6LUQxjCRy7PBBjqkAdQBKEirRmI%2FBPiJ7y8RogdJV30yuRkFK7CYa3JSfAx40LN%2FTnjvl87SFT5GFyk%2F9RCcXggv16KcUjzhLRQvW5wOB4b93NYcA2Rwszew0lII%2FIwvCwoHnJpEhOAugvvYu7LAqpiDKsa4lrxhMX5uKGBf5znVwW6%2FM%2BP232Tey%2BDd2G9wzh0zKl6TqYLBd7n1tvY3KDO4S%2BnJc5%2FyrTYHafcRe%2FgX&X-Amz-Signature=db9404592b43ef044e93cf3a48409d0375aeba64033b59ecf7ec0a9088f2552c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHX7UMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtKIaDj3bYRElI09T6etayOiWKPHVOEmj91%2Bnl21XkowIhALSi11pSXHu%2BEjgx%2BS69MgvsUDNojhFdkF2A33VYtqAIKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhgaVRllL6XldvCicq3AM%2BofPQEmZfmmB39tyuhJywyVBgguqCUSoRrVl9AEEBPGrElkUN7whRizj8j1OKqyT2%2BeYMei%2BwgkTOPiyDmV0MvLrkz4kf2ZwkyOucuq41DpEeTRYzDHDN5A6e2UOBJOCD671RneBEubvQClSs58QxEx6wR3Lt%2FnOVJgGHt6PjVCXMlBO1r4qu0uXeXNq0t9YFc3PS1%2FXNJyYZyrILeU9h3DR4a3vfqShMacaPcViCIu3JXvmT5PZ2yaxMOCD9p0AgeZADzB6IiEEsoqHONTJdyDFYn3N4bB6xDN7hOQAXI3Yjj%2FEA8xRzM8OS42CquPQHptsVktvttX8oGW5SGhJoQF05Fg8NFk%2FMCgLJ5K7sZMoBfrvddu%2FBp0CQqV0fCp%2BbbYjpnCJS0j8DnyyHshrslbA9n5SkDsDofKB5vQsBnBXmJzmFfwihuYDMe%2FsEk4UZyLckG21CoqnM7n5mPmBzr1uownOTNWAFB2B2wV8hSpd9QFOEVnGynLpHnGAAjA2v6o7oBWsVNdTi7XpIdFEmHuuMsjsMdhKVjMre5QliJaISR1fUqs6DESbNqnohAzkZC6dARBWkBvWiG4dr7%2F229WyUryBbirBa92Gpj8Etfam1zzcWJ2rv6LUQxjCRy7PBBjqkAdQBKEirRmI%2FBPiJ7y8RogdJV30yuRkFK7CYa3JSfAx40LN%2FTnjvl87SFT5GFyk%2F9RCcXggv16KcUjzhLRQvW5wOB4b93NYcA2Rwszew0lII%2FIwvCwoHnJpEhOAugvvYu7LAqpiDKsa4lrxhMX5uKGBf5znVwW6%2FM%2BP232Tey%2BDd2G9wzh0zKl6TqYLBd7n1tvY3KDO4S%2BnJc5%2FyrTYHafcRe%2FgX&X-Amz-Signature=7eb51dcc88c2521c7f970f36bb61b29a0010c6cb3566cd5a453c566e3440dc23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHX7UMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtKIaDj3bYRElI09T6etayOiWKPHVOEmj91%2Bnl21XkowIhALSi11pSXHu%2BEjgx%2BS69MgvsUDNojhFdkF2A33VYtqAIKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhgaVRllL6XldvCicq3AM%2BofPQEmZfmmB39tyuhJywyVBgguqCUSoRrVl9AEEBPGrElkUN7whRizj8j1OKqyT2%2BeYMei%2BwgkTOPiyDmV0MvLrkz4kf2ZwkyOucuq41DpEeTRYzDHDN5A6e2UOBJOCD671RneBEubvQClSs58QxEx6wR3Lt%2FnOVJgGHt6PjVCXMlBO1r4qu0uXeXNq0t9YFc3PS1%2FXNJyYZyrILeU9h3DR4a3vfqShMacaPcViCIu3JXvmT5PZ2yaxMOCD9p0AgeZADzB6IiEEsoqHONTJdyDFYn3N4bB6xDN7hOQAXI3Yjj%2FEA8xRzM8OS42CquPQHptsVktvttX8oGW5SGhJoQF05Fg8NFk%2FMCgLJ5K7sZMoBfrvddu%2FBp0CQqV0fCp%2BbbYjpnCJS0j8DnyyHshrslbA9n5SkDsDofKB5vQsBnBXmJzmFfwihuYDMe%2FsEk4UZyLckG21CoqnM7n5mPmBzr1uownOTNWAFB2B2wV8hSpd9QFOEVnGynLpHnGAAjA2v6o7oBWsVNdTi7XpIdFEmHuuMsjsMdhKVjMre5QliJaISR1fUqs6DESbNqnohAzkZC6dARBWkBvWiG4dr7%2F229WyUryBbirBa92Gpj8Etfam1zzcWJ2rv6LUQxjCRy7PBBjqkAdQBKEirRmI%2FBPiJ7y8RogdJV30yuRkFK7CYa3JSfAx40LN%2FTnjvl87SFT5GFyk%2F9RCcXggv16KcUjzhLRQvW5wOB4b93NYcA2Rwszew0lII%2FIwvCwoHnJpEhOAugvvYu7LAqpiDKsa4lrxhMX5uKGBf5znVwW6%2FM%2BP232Tey%2BDd2G9wzh0zKl6TqYLBd7n1tvY3KDO4S%2BnJc5%2FyrTYHafcRe%2FgX&X-Amz-Signature=400a99094352f455f5f8de19f5b06cd6f01a63ee91a22e4c7d280e24981a8be6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHX7UMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtKIaDj3bYRElI09T6etayOiWKPHVOEmj91%2Bnl21XkowIhALSi11pSXHu%2BEjgx%2BS69MgvsUDNojhFdkF2A33VYtqAIKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhgaVRllL6XldvCicq3AM%2BofPQEmZfmmB39tyuhJywyVBgguqCUSoRrVl9AEEBPGrElkUN7whRizj8j1OKqyT2%2BeYMei%2BwgkTOPiyDmV0MvLrkz4kf2ZwkyOucuq41DpEeTRYzDHDN5A6e2UOBJOCD671RneBEubvQClSs58QxEx6wR3Lt%2FnOVJgGHt6PjVCXMlBO1r4qu0uXeXNq0t9YFc3PS1%2FXNJyYZyrILeU9h3DR4a3vfqShMacaPcViCIu3JXvmT5PZ2yaxMOCD9p0AgeZADzB6IiEEsoqHONTJdyDFYn3N4bB6xDN7hOQAXI3Yjj%2FEA8xRzM8OS42CquPQHptsVktvttX8oGW5SGhJoQF05Fg8NFk%2FMCgLJ5K7sZMoBfrvddu%2FBp0CQqV0fCp%2BbbYjpnCJS0j8DnyyHshrslbA9n5SkDsDofKB5vQsBnBXmJzmFfwihuYDMe%2FsEk4UZyLckG21CoqnM7n5mPmBzr1uownOTNWAFB2B2wV8hSpd9QFOEVnGynLpHnGAAjA2v6o7oBWsVNdTi7XpIdFEmHuuMsjsMdhKVjMre5QliJaISR1fUqs6DESbNqnohAzkZC6dARBWkBvWiG4dr7%2F229WyUryBbirBa92Gpj8Etfam1zzcWJ2rv6LUQxjCRy7PBBjqkAdQBKEirRmI%2FBPiJ7y8RogdJV30yuRkFK7CYa3JSfAx40LN%2FTnjvl87SFT5GFyk%2F9RCcXggv16KcUjzhLRQvW5wOB4b93NYcA2Rwszew0lII%2FIwvCwoHnJpEhOAugvvYu7LAqpiDKsa4lrxhMX5uKGBf5znVwW6%2FM%2BP232Tey%2BDd2G9wzh0zKl6TqYLBd7n1tvY3KDO4S%2BnJc5%2FyrTYHafcRe%2FgX&X-Amz-Signature=2452b76d10130ca44c0a19bac542e0c254d6aeab909c2b384c64f3f7a6965ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHX7UMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtKIaDj3bYRElI09T6etayOiWKPHVOEmj91%2Bnl21XkowIhALSi11pSXHu%2BEjgx%2BS69MgvsUDNojhFdkF2A33VYtqAIKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhgaVRllL6XldvCicq3AM%2BofPQEmZfmmB39tyuhJywyVBgguqCUSoRrVl9AEEBPGrElkUN7whRizj8j1OKqyT2%2BeYMei%2BwgkTOPiyDmV0MvLrkz4kf2ZwkyOucuq41DpEeTRYzDHDN5A6e2UOBJOCD671RneBEubvQClSs58QxEx6wR3Lt%2FnOVJgGHt6PjVCXMlBO1r4qu0uXeXNq0t9YFc3PS1%2FXNJyYZyrILeU9h3DR4a3vfqShMacaPcViCIu3JXvmT5PZ2yaxMOCD9p0AgeZADzB6IiEEsoqHONTJdyDFYn3N4bB6xDN7hOQAXI3Yjj%2FEA8xRzM8OS42CquPQHptsVktvttX8oGW5SGhJoQF05Fg8NFk%2FMCgLJ5K7sZMoBfrvddu%2FBp0CQqV0fCp%2BbbYjpnCJS0j8DnyyHshrslbA9n5SkDsDofKB5vQsBnBXmJzmFfwihuYDMe%2FsEk4UZyLckG21CoqnM7n5mPmBzr1uownOTNWAFB2B2wV8hSpd9QFOEVnGynLpHnGAAjA2v6o7oBWsVNdTi7XpIdFEmHuuMsjsMdhKVjMre5QliJaISR1fUqs6DESbNqnohAzkZC6dARBWkBvWiG4dr7%2F229WyUryBbirBa92Gpj8Etfam1zzcWJ2rv6LUQxjCRy7PBBjqkAdQBKEirRmI%2FBPiJ7y8RogdJV30yuRkFK7CYa3JSfAx40LN%2FTnjvl87SFT5GFyk%2F9RCcXggv16KcUjzhLRQvW5wOB4b93NYcA2Rwszew0lII%2FIwvCwoHnJpEhOAugvvYu7LAqpiDKsa4lrxhMX5uKGBf5znVwW6%2FM%2BP232Tey%2BDd2G9wzh0zKl6TqYLBd7n1tvY3KDO4S%2BnJc5%2FyrTYHafcRe%2FgX&X-Amz-Signature=f0e5559cc1875bad86199e45cf4014bb9db44bfb2f857455853bf5cd68b22c42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHX7UMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtKIaDj3bYRElI09T6etayOiWKPHVOEmj91%2Bnl21XkowIhALSi11pSXHu%2BEjgx%2BS69MgvsUDNojhFdkF2A33VYtqAIKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhgaVRllL6XldvCicq3AM%2BofPQEmZfmmB39tyuhJywyVBgguqCUSoRrVl9AEEBPGrElkUN7whRizj8j1OKqyT2%2BeYMei%2BwgkTOPiyDmV0MvLrkz4kf2ZwkyOucuq41DpEeTRYzDHDN5A6e2UOBJOCD671RneBEubvQClSs58QxEx6wR3Lt%2FnOVJgGHt6PjVCXMlBO1r4qu0uXeXNq0t9YFc3PS1%2FXNJyYZyrILeU9h3DR4a3vfqShMacaPcViCIu3JXvmT5PZ2yaxMOCD9p0AgeZADzB6IiEEsoqHONTJdyDFYn3N4bB6xDN7hOQAXI3Yjj%2FEA8xRzM8OS42CquPQHptsVktvttX8oGW5SGhJoQF05Fg8NFk%2FMCgLJ5K7sZMoBfrvddu%2FBp0CQqV0fCp%2BbbYjpnCJS0j8DnyyHshrslbA9n5SkDsDofKB5vQsBnBXmJzmFfwihuYDMe%2FsEk4UZyLckG21CoqnM7n5mPmBzr1uownOTNWAFB2B2wV8hSpd9QFOEVnGynLpHnGAAjA2v6o7oBWsVNdTi7XpIdFEmHuuMsjsMdhKVjMre5QliJaISR1fUqs6DESbNqnohAzkZC6dARBWkBvWiG4dr7%2F229WyUryBbirBa92Gpj8Etfam1zzcWJ2rv6LUQxjCRy7PBBjqkAdQBKEirRmI%2FBPiJ7y8RogdJV30yuRkFK7CYa3JSfAx40LN%2FTnjvl87SFT5GFyk%2F9RCcXggv16KcUjzhLRQvW5wOB4b93NYcA2Rwszew0lII%2FIwvCwoHnJpEhOAugvvYu7LAqpiDKsa4lrxhMX5uKGBf5znVwW6%2FM%2BP232Tey%2BDd2G9wzh0zKl6TqYLBd7n1tvY3KDO4S%2BnJc5%2FyrTYHafcRe%2FgX&X-Amz-Signature=2b1ed9f89bd1a272a9305b32c724c6ebfa22ba1617b02f853453d4f85614f5a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJZUZ5E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICwxxN8ahldeckAfyVICaP0Ao4yfR9qUfjFka0ibvxwPAiEAjAFc53p%2FCiIU24%2FfNcYQ65ZS%2FYMCaMzpOtB89ge6tGYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGH3VpjqzMgEXH3aOircA%2FrKpWmf29Pk40Ens90cKjIX5sUIDnASXgZg%2B9rBEg8l8MI6tZzVbOba4bjxjNbicZrcxvNdcDOXv6Z0RtJTgLmX%2Bu6zbBOwqd%2FRz2fx%2FX%2FfxqA2D6GkhsRAh%2BTGYmEXnRlHc%2FMTdKp2ysuqJ%2FhWHN3fjuLombxP69OtB24XxGW%2FAjI8%2B7KYPL%2B%2B3xTjmgcR2wlvclzBepqfLv98h9gn6XH9WlISezrIVvG2Xsr9vMJAdK3DRDES4yM1p%2B11YJjLg%2FWV2OzNVoyZXKAIGeNEMOS3mJK3HUe%2Bz8sBKSPY6McSVC3sQu9vbDzKrd4nUJmdWJDDAjfiLERqVxjyqew9Xwhonsl8AkKVFE5PI1c%2FgBzIEZOEDsmYnfT%2BzYaArpXdrjlydSyXPlnR0q%2Bwp1I9KK7269dwGGRSpoR%2BlYRlG%2B2DENbmjJn1U%2BqNRdbUzTY26%2FoBtyGHOv2NtAtLDEEpZgHSjBaDoCcyTDLG5kpHj6E9qclnE1dIV6mz8vMOHG2BBw3mAnuKLJxIn5CY6jtfD1m7J2ik4cmMdU5WBzjTq0VTD81J5VVeh52ZxNoqggnQAwvvO12KsyvoVE5UlIi8ioD03%2FoMM47nGLGR8ik7teS6wW8vJyRrB1sUh6k0MLK5070GOqUBbtYoKNjNyy4ZsViUO7P30bfoJmFgth9M9cRmLTNchYRgJBf%2BnyzSueJVV9xtQaAHKB57BGWVAFrzVYoL%2FUg0XRtYGzvQ7DWvXx%2FeOTWnK4dYdHNhE03gdJvzt%2BlrhOdDQirrhc0OUm1koJDigKCmgRP1ZysxqvPt3n6IOudtSjAb5b3zVTcW5SCpdows%2BeaeLEF8uEUTmR1PyXKbZ3oVRxXzZh3v&X-Amz-Signature=fe40bfe848a2b79c28ebfa5e4bb02d59d7fe8455563d7e39a6a58f97c89d3c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJZUZ5E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICwxxN8ahldeckAfyVICaP0Ao4yfR9qUfjFka0ibvxwPAiEAjAFc53p%2FCiIU24%2FfNcYQ65ZS%2FYMCaMzpOtB89ge6tGYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGH3VpjqzMgEXH3aOircA%2FrKpWmf29Pk40Ens90cKjIX5sUIDnASXgZg%2B9rBEg8l8MI6tZzVbOba4bjxjNbicZrcxvNdcDOXv6Z0RtJTgLmX%2Bu6zbBOwqd%2FRz2fx%2FX%2FfxqA2D6GkhsRAh%2BTGYmEXnRlHc%2FMTdKp2ysuqJ%2FhWHN3fjuLombxP69OtB24XxGW%2FAjI8%2B7KYPL%2B%2B3xTjmgcR2wlvclzBepqfLv98h9gn6XH9WlISezrIVvG2Xsr9vMJAdK3DRDES4yM1p%2B11YJjLg%2FWV2OzNVoyZXKAIGeNEMOS3mJK3HUe%2Bz8sBKSPY6McSVC3sQu9vbDzKrd4nUJmdWJDDAjfiLERqVxjyqew9Xwhonsl8AkKVFE5PI1c%2FgBzIEZOEDsmYnfT%2BzYaArpXdrjlydSyXPlnR0q%2Bwp1I9KK7269dwGGRSpoR%2BlYRlG%2B2DENbmjJn1U%2BqNRdbUzTY26%2FoBtyGHOv2NtAtLDEEpZgHSjBaDoCcyTDLG5kpHj6E9qclnE1dIV6mz8vMOHG2BBw3mAnuKLJxIn5CY6jtfD1m7J2ik4cmMdU5WBzjTq0VTD81J5VVeh52ZxNoqggnQAwvvO12KsyvoVE5UlIi8ioD03%2FoMM47nGLGR8ik7teS6wW8vJyRrB1sUh6k0MLK5070GOqUBbtYoKNjNyy4ZsViUO7P30bfoJmFgth9M9cRmLTNchYRgJBf%2BnyzSueJVV9xtQaAHKB57BGWVAFrzVYoL%2FUg0XRtYGzvQ7DWvXx%2FeOTWnK4dYdHNhE03gdJvzt%2BlrhOdDQirrhc0OUm1koJDigKCmgRP1ZysxqvPt3n6IOudtSjAb5b3zVTcW5SCpdows%2BeaeLEF8uEUTmR1PyXKbZ3oVRxXzZh3v&X-Amz-Signature=9c048386c91077dcba31bc51883982dea9c0fb962b747887be3e90771159f430&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJZUZ5E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICwxxN8ahldeckAfyVICaP0Ao4yfR9qUfjFka0ibvxwPAiEAjAFc53p%2FCiIU24%2FfNcYQ65ZS%2FYMCaMzpOtB89ge6tGYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGH3VpjqzMgEXH3aOircA%2FrKpWmf29Pk40Ens90cKjIX5sUIDnASXgZg%2B9rBEg8l8MI6tZzVbOba4bjxjNbicZrcxvNdcDOXv6Z0RtJTgLmX%2Bu6zbBOwqd%2FRz2fx%2FX%2FfxqA2D6GkhsRAh%2BTGYmEXnRlHc%2FMTdKp2ysuqJ%2FhWHN3fjuLombxP69OtB24XxGW%2FAjI8%2B7KYPL%2B%2B3xTjmgcR2wlvclzBepqfLv98h9gn6XH9WlISezrIVvG2Xsr9vMJAdK3DRDES4yM1p%2B11YJjLg%2FWV2OzNVoyZXKAIGeNEMOS3mJK3HUe%2Bz8sBKSPY6McSVC3sQu9vbDzKrd4nUJmdWJDDAjfiLERqVxjyqew9Xwhonsl8AkKVFE5PI1c%2FgBzIEZOEDsmYnfT%2BzYaArpXdrjlydSyXPlnR0q%2Bwp1I9KK7269dwGGRSpoR%2BlYRlG%2B2DENbmjJn1U%2BqNRdbUzTY26%2FoBtyGHOv2NtAtLDEEpZgHSjBaDoCcyTDLG5kpHj6E9qclnE1dIV6mz8vMOHG2BBw3mAnuKLJxIn5CY6jtfD1m7J2ik4cmMdU5WBzjTq0VTD81J5VVeh52ZxNoqggnQAwvvO12KsyvoVE5UlIi8ioD03%2FoMM47nGLGR8ik7teS6wW8vJyRrB1sUh6k0MLK5070GOqUBbtYoKNjNyy4ZsViUO7P30bfoJmFgth9M9cRmLTNchYRgJBf%2BnyzSueJVV9xtQaAHKB57BGWVAFrzVYoL%2FUg0XRtYGzvQ7DWvXx%2FeOTWnK4dYdHNhE03gdJvzt%2BlrhOdDQirrhc0OUm1koJDigKCmgRP1ZysxqvPt3n6IOudtSjAb5b3zVTcW5SCpdows%2BeaeLEF8uEUTmR1PyXKbZ3oVRxXzZh3v&X-Amz-Signature=3dc58c14cd02ab1c4b9da58c9a49146c70b1dcd7203cde64578863d09cee4db5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJZUZ5E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICwxxN8ahldeckAfyVICaP0Ao4yfR9qUfjFka0ibvxwPAiEAjAFc53p%2FCiIU24%2FfNcYQ65ZS%2FYMCaMzpOtB89ge6tGYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGH3VpjqzMgEXH3aOircA%2FrKpWmf29Pk40Ens90cKjIX5sUIDnASXgZg%2B9rBEg8l8MI6tZzVbOba4bjxjNbicZrcxvNdcDOXv6Z0RtJTgLmX%2Bu6zbBOwqd%2FRz2fx%2FX%2FfxqA2D6GkhsRAh%2BTGYmEXnRlHc%2FMTdKp2ysuqJ%2FhWHN3fjuLombxP69OtB24XxGW%2FAjI8%2B7KYPL%2B%2B3xTjmgcR2wlvclzBepqfLv98h9gn6XH9WlISezrIVvG2Xsr9vMJAdK3DRDES4yM1p%2B11YJjLg%2FWV2OzNVoyZXKAIGeNEMOS3mJK3HUe%2Bz8sBKSPY6McSVC3sQu9vbDzKrd4nUJmdWJDDAjfiLERqVxjyqew9Xwhonsl8AkKVFE5PI1c%2FgBzIEZOEDsmYnfT%2BzYaArpXdrjlydSyXPlnR0q%2Bwp1I9KK7269dwGGRSpoR%2BlYRlG%2B2DENbmjJn1U%2BqNRdbUzTY26%2FoBtyGHOv2NtAtLDEEpZgHSjBaDoCcyTDLG5kpHj6E9qclnE1dIV6mz8vMOHG2BBw3mAnuKLJxIn5CY6jtfD1m7J2ik4cmMdU5WBzjTq0VTD81J5VVeh52ZxNoqggnQAwvvO12KsyvoVE5UlIi8ioD03%2FoMM47nGLGR8ik7teS6wW8vJyRrB1sUh6k0MLK5070GOqUBbtYoKNjNyy4ZsViUO7P30bfoJmFgth9M9cRmLTNchYRgJBf%2BnyzSueJVV9xtQaAHKB57BGWVAFrzVYoL%2FUg0XRtYGzvQ7DWvXx%2FeOTWnK4dYdHNhE03gdJvzt%2BlrhOdDQirrhc0OUm1koJDigKCmgRP1ZysxqvPt3n6IOudtSjAb5b3zVTcW5SCpdows%2BeaeLEF8uEUTmR1PyXKbZ3oVRxXzZh3v&X-Amz-Signature=c6ac131118033e95a4674517a1fb3a5dee8ece73042ea4cfa8943039ef41ae6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJZUZ5E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICwxxN8ahldeckAfyVICaP0Ao4yfR9qUfjFka0ibvxwPAiEAjAFc53p%2FCiIU24%2FfNcYQ65ZS%2FYMCaMzpOtB89ge6tGYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGH3VpjqzMgEXH3aOircA%2FrKpWmf29Pk40Ens90cKjIX5sUIDnASXgZg%2B9rBEg8l8MI6tZzVbOba4bjxjNbicZrcxvNdcDOXv6Z0RtJTgLmX%2Bu6zbBOwqd%2FRz2fx%2FX%2FfxqA2D6GkhsRAh%2BTGYmEXnRlHc%2FMTdKp2ysuqJ%2FhWHN3fjuLombxP69OtB24XxGW%2FAjI8%2B7KYPL%2B%2B3xTjmgcR2wlvclzBepqfLv98h9gn6XH9WlISezrIVvG2Xsr9vMJAdK3DRDES4yM1p%2B11YJjLg%2FWV2OzNVoyZXKAIGeNEMOS3mJK3HUe%2Bz8sBKSPY6McSVC3sQu9vbDzKrd4nUJmdWJDDAjfiLERqVxjyqew9Xwhonsl8AkKVFE5PI1c%2FgBzIEZOEDsmYnfT%2BzYaArpXdrjlydSyXPlnR0q%2Bwp1I9KK7269dwGGRSpoR%2BlYRlG%2B2DENbmjJn1U%2BqNRdbUzTY26%2FoBtyGHOv2NtAtLDEEpZgHSjBaDoCcyTDLG5kpHj6E9qclnE1dIV6mz8vMOHG2BBw3mAnuKLJxIn5CY6jtfD1m7J2ik4cmMdU5WBzjTq0VTD81J5VVeh52ZxNoqggnQAwvvO12KsyvoVE5UlIi8ioD03%2FoMM47nGLGR8ik7teS6wW8vJyRrB1sUh6k0MLK5070GOqUBbtYoKNjNyy4ZsViUO7P30bfoJmFgth9M9cRmLTNchYRgJBf%2BnyzSueJVV9xtQaAHKB57BGWVAFrzVYoL%2FUg0XRtYGzvQ7DWvXx%2FeOTWnK4dYdHNhE03gdJvzt%2BlrhOdDQirrhc0OUm1koJDigKCmgRP1ZysxqvPt3n6IOudtSjAb5b3zVTcW5SCpdows%2BeaeLEF8uEUTmR1PyXKbZ3oVRxXzZh3v&X-Amz-Signature=220d425639c4db76bea1b2cb595f0ce4d35d82bc549a297186c7dad790d149cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJZUZ5E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICwxxN8ahldeckAfyVICaP0Ao4yfR9qUfjFka0ibvxwPAiEAjAFc53p%2FCiIU24%2FfNcYQ65ZS%2FYMCaMzpOtB89ge6tGYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGH3VpjqzMgEXH3aOircA%2FrKpWmf29Pk40Ens90cKjIX5sUIDnASXgZg%2B9rBEg8l8MI6tZzVbOba4bjxjNbicZrcxvNdcDOXv6Z0RtJTgLmX%2Bu6zbBOwqd%2FRz2fx%2FX%2FfxqA2D6GkhsRAh%2BTGYmEXnRlHc%2FMTdKp2ysuqJ%2FhWHN3fjuLombxP69OtB24XxGW%2FAjI8%2B7KYPL%2B%2B3xTjmgcR2wlvclzBepqfLv98h9gn6XH9WlISezrIVvG2Xsr9vMJAdK3DRDES4yM1p%2B11YJjLg%2FWV2OzNVoyZXKAIGeNEMOS3mJK3HUe%2Bz8sBKSPY6McSVC3sQu9vbDzKrd4nUJmdWJDDAjfiLERqVxjyqew9Xwhonsl8AkKVFE5PI1c%2FgBzIEZOEDsmYnfT%2BzYaArpXdrjlydSyXPlnR0q%2Bwp1I9KK7269dwGGRSpoR%2BlYRlG%2B2DENbmjJn1U%2BqNRdbUzTY26%2FoBtyGHOv2NtAtLDEEpZgHSjBaDoCcyTDLG5kpHj6E9qclnE1dIV6mz8vMOHG2BBw3mAnuKLJxIn5CY6jtfD1m7J2ik4cmMdU5WBzjTq0VTD81J5VVeh52ZxNoqggnQAwvvO12KsyvoVE5UlIi8ioD03%2FoMM47nGLGR8ik7teS6wW8vJyRrB1sUh6k0MLK5070GOqUBbtYoKNjNyy4ZsViUO7P30bfoJmFgth9M9cRmLTNchYRgJBf%2BnyzSueJVV9xtQaAHKB57BGWVAFrzVYoL%2FUg0XRtYGzvQ7DWvXx%2FeOTWnK4dYdHNhE03gdJvzt%2BlrhOdDQirrhc0OUm1koJDigKCmgRP1ZysxqvPt3n6IOudtSjAb5b3zVTcW5SCpdows%2BeaeLEF8uEUTmR1PyXKbZ3oVRxXzZh3v&X-Amz-Signature=ae1a62c5d953d7bb6373c5c1def70fd1197c876147bfaf36e1556b99c49c2563&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJZUZ5E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICwxxN8ahldeckAfyVICaP0Ao4yfR9qUfjFka0ibvxwPAiEAjAFc53p%2FCiIU24%2FfNcYQ65ZS%2FYMCaMzpOtB89ge6tGYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGH3VpjqzMgEXH3aOircA%2FrKpWmf29Pk40Ens90cKjIX5sUIDnASXgZg%2B9rBEg8l8MI6tZzVbOba4bjxjNbicZrcxvNdcDOXv6Z0RtJTgLmX%2Bu6zbBOwqd%2FRz2fx%2FX%2FfxqA2D6GkhsRAh%2BTGYmEXnRlHc%2FMTdKp2ysuqJ%2FhWHN3fjuLombxP69OtB24XxGW%2FAjI8%2B7KYPL%2B%2B3xTjmgcR2wlvclzBepqfLv98h9gn6XH9WlISezrIVvG2Xsr9vMJAdK3DRDES4yM1p%2B11YJjLg%2FWV2OzNVoyZXKAIGeNEMOS3mJK3HUe%2Bz8sBKSPY6McSVC3sQu9vbDzKrd4nUJmdWJDDAjfiLERqVxjyqew9Xwhonsl8AkKVFE5PI1c%2FgBzIEZOEDsmYnfT%2BzYaArpXdrjlydSyXPlnR0q%2Bwp1I9KK7269dwGGRSpoR%2BlYRlG%2B2DENbmjJn1U%2BqNRdbUzTY26%2FoBtyGHOv2NtAtLDEEpZgHSjBaDoCcyTDLG5kpHj6E9qclnE1dIV6mz8vMOHG2BBw3mAnuKLJxIn5CY6jtfD1m7J2ik4cmMdU5WBzjTq0VTD81J5VVeh52ZxNoqggnQAwvvO12KsyvoVE5UlIi8ioD03%2FoMM47nGLGR8ik7teS6wW8vJyRrB1sUh6k0MLK5070GOqUBbtYoKNjNyy4ZsViUO7P30bfoJmFgth9M9cRmLTNchYRgJBf%2BnyzSueJVV9xtQaAHKB57BGWVAFrzVYoL%2FUg0XRtYGzvQ7DWvXx%2FeOTWnK4dYdHNhE03gdJvzt%2BlrhOdDQirrhc0OUm1koJDigKCmgRP1ZysxqvPt3n6IOudtSjAb5b3zVTcW5SCpdows%2BeaeLEF8uEUTmR1PyXKbZ3oVRxXzZh3v&X-Amz-Signature=17b2c6d42edff262e8d4dc414e0ab138eca5cd6d209dc7f17927625a1b032502&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJZUZ5E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICwxxN8ahldeckAfyVICaP0Ao4yfR9qUfjFka0ibvxwPAiEAjAFc53p%2FCiIU24%2FfNcYQ65ZS%2FYMCaMzpOtB89ge6tGYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGH3VpjqzMgEXH3aOircA%2FrKpWmf29Pk40Ens90cKjIX5sUIDnASXgZg%2B9rBEg8l8MI6tZzVbOba4bjxjNbicZrcxvNdcDOXv6Z0RtJTgLmX%2Bu6zbBOwqd%2FRz2fx%2FX%2FfxqA2D6GkhsRAh%2BTGYmEXnRlHc%2FMTdKp2ysuqJ%2FhWHN3fjuLombxP69OtB24XxGW%2FAjI8%2B7KYPL%2B%2B3xTjmgcR2wlvclzBepqfLv98h9gn6XH9WlISezrIVvG2Xsr9vMJAdK3DRDES4yM1p%2B11YJjLg%2FWV2OzNVoyZXKAIGeNEMOS3mJK3HUe%2Bz8sBKSPY6McSVC3sQu9vbDzKrd4nUJmdWJDDAjfiLERqVxjyqew9Xwhonsl8AkKVFE5PI1c%2FgBzIEZOEDsmYnfT%2BzYaArpXdrjlydSyXPlnR0q%2Bwp1I9KK7269dwGGRSpoR%2BlYRlG%2B2DENbmjJn1U%2BqNRdbUzTY26%2FoBtyGHOv2NtAtLDEEpZgHSjBaDoCcyTDLG5kpHj6E9qclnE1dIV6mz8vMOHG2BBw3mAnuKLJxIn5CY6jtfD1m7J2ik4cmMdU5WBzjTq0VTD81J5VVeh52ZxNoqggnQAwvvO12KsyvoVE5UlIi8ioD03%2FoMM47nGLGR8ik7teS6wW8vJyRrB1sUh6k0MLK5070GOqUBbtYoKNjNyy4ZsViUO7P30bfoJmFgth9M9cRmLTNchYRgJBf%2BnyzSueJVV9xtQaAHKB57BGWVAFrzVYoL%2FUg0XRtYGzvQ7DWvXx%2FeOTWnK4dYdHNhE03gdJvzt%2BlrhOdDQirrhc0OUm1koJDigKCmgRP1ZysxqvPt3n6IOudtSjAb5b3zVTcW5SCpdows%2BeaeLEF8uEUTmR1PyXKbZ3oVRxXzZh3v&X-Amz-Signature=abd22c594fd07385514051553d53fd6e4a5178931146b988fc6e3e38f191e58c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

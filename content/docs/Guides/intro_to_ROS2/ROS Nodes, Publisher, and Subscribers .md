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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXLEEPE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCbEfNb%2FMQmBiWV1EoqAL%2F%2F9chWhHyacFX2lG%2BROUlcdQIgN%2B5hvXVzIZuQdVnbNGJuO0GXqmR3m0C1flNh6U1dL4AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg0B1Y9pHWtWkzw4SrcAx64wzAYTv4FJqxzTeVbQ4cTzVUjPjXDEGssU2sxNjJMMLk8aQdamgPp2Skr2QzKarVeq2u%2F8SURRWQz1bjqf0oB2aC5To3QEVzJLOPGKaobsTjbV4vosxb4w8ZCM%2F93jPWORnjG5zjYk41%2BztSEhYoOEhoLpv2liFkJMqB8x%2FKShCSfRULTkDPo9zXr2ydicodUyaX4pyuWI%2FPl5uhnKwtX7BYBxAlW6ygDH%2BYG3YX%2Fa5pIL%2FCnLyju0d0QkYemLUCOWp3A9LpTQ6G1iX6Pj4YME1loxeoSXDyYrO6SuB4nt0qA1X1PS4ob4IBNAh3HvHZFZZwrAD42aXJdzKbb4wrT2ne7dtxBFzVWL1VlHBioRm%2BZ1kJYEhieYVuLb868GWIGeQpcntfDhfXP%2Fmw5IxxzMGJbSUZFflp3UAIrei7flReNxbiPAwHVGX1h%2FrEP33GB7jg6Xk1LUbGtaOO5XA8vnpczuMXVu54081C4dPMm5SyizZiL6Yn8Y0wr60Wu4YFYqQ%2BM7XsbhL0OgcNPj8ZJNyN%2F8N%2BkxRPt4%2FwJ1Lwxju7uBgyII8Lac9BdUw3h8ypgtbSz6FMFt5YbQFu2jr1kT8QkzhOm2uUqcDB3311halJjQqG33cAuAVLQMJzt%2BcEGOqUBIyJ2Ac2oQMBkO325AksdT%2FLfXpk2krz2jqWqTGtmoS%2FwqIVVfuwwOsYGnxtU9v04bg%2FFzwQgoGsJPxj2WWTKAeWeaoCmwQQz7Ia3AWpdmqByCGKgDvD2h2UCg44ZZ7I71VVGHJ7x0Ew1PBgQ1UHl8w1TwVBAa2U%2BAQV%2FczOmSrpMNyQ3wDYH14t6pKNakOZzeJpiMFmNtTexUhC9Qj6xim1%2BQzge&X-Amz-Signature=ae3641e377eda174885c0645b0adc138a0f41635ffed2aa2eef82898bbf86dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXLEEPE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCbEfNb%2FMQmBiWV1EoqAL%2F%2F9chWhHyacFX2lG%2BROUlcdQIgN%2B5hvXVzIZuQdVnbNGJuO0GXqmR3m0C1flNh6U1dL4AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg0B1Y9pHWtWkzw4SrcAx64wzAYTv4FJqxzTeVbQ4cTzVUjPjXDEGssU2sxNjJMMLk8aQdamgPp2Skr2QzKarVeq2u%2F8SURRWQz1bjqf0oB2aC5To3QEVzJLOPGKaobsTjbV4vosxb4w8ZCM%2F93jPWORnjG5zjYk41%2BztSEhYoOEhoLpv2liFkJMqB8x%2FKShCSfRULTkDPo9zXr2ydicodUyaX4pyuWI%2FPl5uhnKwtX7BYBxAlW6ygDH%2BYG3YX%2Fa5pIL%2FCnLyju0d0QkYemLUCOWp3A9LpTQ6G1iX6Pj4YME1loxeoSXDyYrO6SuB4nt0qA1X1PS4ob4IBNAh3HvHZFZZwrAD42aXJdzKbb4wrT2ne7dtxBFzVWL1VlHBioRm%2BZ1kJYEhieYVuLb868GWIGeQpcntfDhfXP%2Fmw5IxxzMGJbSUZFflp3UAIrei7flReNxbiPAwHVGX1h%2FrEP33GB7jg6Xk1LUbGtaOO5XA8vnpczuMXVu54081C4dPMm5SyizZiL6Yn8Y0wr60Wu4YFYqQ%2BM7XsbhL0OgcNPj8ZJNyN%2F8N%2BkxRPt4%2FwJ1Lwxju7uBgyII8Lac9BdUw3h8ypgtbSz6FMFt5YbQFu2jr1kT8QkzhOm2uUqcDB3311halJjQqG33cAuAVLQMJzt%2BcEGOqUBIyJ2Ac2oQMBkO325AksdT%2FLfXpk2krz2jqWqTGtmoS%2FwqIVVfuwwOsYGnxtU9v04bg%2FFzwQgoGsJPxj2WWTKAeWeaoCmwQQz7Ia3AWpdmqByCGKgDvD2h2UCg44ZZ7I71VVGHJ7x0Ew1PBgQ1UHl8w1TwVBAa2U%2BAQV%2FczOmSrpMNyQ3wDYH14t6pKNakOZzeJpiMFmNtTexUhC9Qj6xim1%2BQzge&X-Amz-Signature=3c3b61bddbc5423d0b28f4750d18b6c09bb5d8dd8c4e03cab40ae30ac7d20910&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXLEEPE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCbEfNb%2FMQmBiWV1EoqAL%2F%2F9chWhHyacFX2lG%2BROUlcdQIgN%2B5hvXVzIZuQdVnbNGJuO0GXqmR3m0C1flNh6U1dL4AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg0B1Y9pHWtWkzw4SrcAx64wzAYTv4FJqxzTeVbQ4cTzVUjPjXDEGssU2sxNjJMMLk8aQdamgPp2Skr2QzKarVeq2u%2F8SURRWQz1bjqf0oB2aC5To3QEVzJLOPGKaobsTjbV4vosxb4w8ZCM%2F93jPWORnjG5zjYk41%2BztSEhYoOEhoLpv2liFkJMqB8x%2FKShCSfRULTkDPo9zXr2ydicodUyaX4pyuWI%2FPl5uhnKwtX7BYBxAlW6ygDH%2BYG3YX%2Fa5pIL%2FCnLyju0d0QkYemLUCOWp3A9LpTQ6G1iX6Pj4YME1loxeoSXDyYrO6SuB4nt0qA1X1PS4ob4IBNAh3HvHZFZZwrAD42aXJdzKbb4wrT2ne7dtxBFzVWL1VlHBioRm%2BZ1kJYEhieYVuLb868GWIGeQpcntfDhfXP%2Fmw5IxxzMGJbSUZFflp3UAIrei7flReNxbiPAwHVGX1h%2FrEP33GB7jg6Xk1LUbGtaOO5XA8vnpczuMXVu54081C4dPMm5SyizZiL6Yn8Y0wr60Wu4YFYqQ%2BM7XsbhL0OgcNPj8ZJNyN%2F8N%2BkxRPt4%2FwJ1Lwxju7uBgyII8Lac9BdUw3h8ypgtbSz6FMFt5YbQFu2jr1kT8QkzhOm2uUqcDB3311halJjQqG33cAuAVLQMJzt%2BcEGOqUBIyJ2Ac2oQMBkO325AksdT%2FLfXpk2krz2jqWqTGtmoS%2FwqIVVfuwwOsYGnxtU9v04bg%2FFzwQgoGsJPxj2WWTKAeWeaoCmwQQz7Ia3AWpdmqByCGKgDvD2h2UCg44ZZ7I71VVGHJ7x0Ew1PBgQ1UHl8w1TwVBAa2U%2BAQV%2FczOmSrpMNyQ3wDYH14t6pKNakOZzeJpiMFmNtTexUhC9Qj6xim1%2BQzge&X-Amz-Signature=e88cfdc70275af9aa0bc7ea501ac2aaeef76668e112d5bebe12ddffb5f2d22bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXLEEPE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCbEfNb%2FMQmBiWV1EoqAL%2F%2F9chWhHyacFX2lG%2BROUlcdQIgN%2B5hvXVzIZuQdVnbNGJuO0GXqmR3m0C1flNh6U1dL4AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg0B1Y9pHWtWkzw4SrcAx64wzAYTv4FJqxzTeVbQ4cTzVUjPjXDEGssU2sxNjJMMLk8aQdamgPp2Skr2QzKarVeq2u%2F8SURRWQz1bjqf0oB2aC5To3QEVzJLOPGKaobsTjbV4vosxb4w8ZCM%2F93jPWORnjG5zjYk41%2BztSEhYoOEhoLpv2liFkJMqB8x%2FKShCSfRULTkDPo9zXr2ydicodUyaX4pyuWI%2FPl5uhnKwtX7BYBxAlW6ygDH%2BYG3YX%2Fa5pIL%2FCnLyju0d0QkYemLUCOWp3A9LpTQ6G1iX6Pj4YME1loxeoSXDyYrO6SuB4nt0qA1X1PS4ob4IBNAh3HvHZFZZwrAD42aXJdzKbb4wrT2ne7dtxBFzVWL1VlHBioRm%2BZ1kJYEhieYVuLb868GWIGeQpcntfDhfXP%2Fmw5IxxzMGJbSUZFflp3UAIrei7flReNxbiPAwHVGX1h%2FrEP33GB7jg6Xk1LUbGtaOO5XA8vnpczuMXVu54081C4dPMm5SyizZiL6Yn8Y0wr60Wu4YFYqQ%2BM7XsbhL0OgcNPj8ZJNyN%2F8N%2BkxRPt4%2FwJ1Lwxju7uBgyII8Lac9BdUw3h8ypgtbSz6FMFt5YbQFu2jr1kT8QkzhOm2uUqcDB3311halJjQqG33cAuAVLQMJzt%2BcEGOqUBIyJ2Ac2oQMBkO325AksdT%2FLfXpk2krz2jqWqTGtmoS%2FwqIVVfuwwOsYGnxtU9v04bg%2FFzwQgoGsJPxj2WWTKAeWeaoCmwQQz7Ia3AWpdmqByCGKgDvD2h2UCg44ZZ7I71VVGHJ7x0Ew1PBgQ1UHl8w1TwVBAa2U%2BAQV%2FczOmSrpMNyQ3wDYH14t6pKNakOZzeJpiMFmNtTexUhC9Qj6xim1%2BQzge&X-Amz-Signature=5799f5295dbae26ff5fd48f302004302012b7e41568463e6360c8378ab2852d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXLEEPE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCbEfNb%2FMQmBiWV1EoqAL%2F%2F9chWhHyacFX2lG%2BROUlcdQIgN%2B5hvXVzIZuQdVnbNGJuO0GXqmR3m0C1flNh6U1dL4AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg0B1Y9pHWtWkzw4SrcAx64wzAYTv4FJqxzTeVbQ4cTzVUjPjXDEGssU2sxNjJMMLk8aQdamgPp2Skr2QzKarVeq2u%2F8SURRWQz1bjqf0oB2aC5To3QEVzJLOPGKaobsTjbV4vosxb4w8ZCM%2F93jPWORnjG5zjYk41%2BztSEhYoOEhoLpv2liFkJMqB8x%2FKShCSfRULTkDPo9zXr2ydicodUyaX4pyuWI%2FPl5uhnKwtX7BYBxAlW6ygDH%2BYG3YX%2Fa5pIL%2FCnLyju0d0QkYemLUCOWp3A9LpTQ6G1iX6Pj4YME1loxeoSXDyYrO6SuB4nt0qA1X1PS4ob4IBNAh3HvHZFZZwrAD42aXJdzKbb4wrT2ne7dtxBFzVWL1VlHBioRm%2BZ1kJYEhieYVuLb868GWIGeQpcntfDhfXP%2Fmw5IxxzMGJbSUZFflp3UAIrei7flReNxbiPAwHVGX1h%2FrEP33GB7jg6Xk1LUbGtaOO5XA8vnpczuMXVu54081C4dPMm5SyizZiL6Yn8Y0wr60Wu4YFYqQ%2BM7XsbhL0OgcNPj8ZJNyN%2F8N%2BkxRPt4%2FwJ1Lwxju7uBgyII8Lac9BdUw3h8ypgtbSz6FMFt5YbQFu2jr1kT8QkzhOm2uUqcDB3311halJjQqG33cAuAVLQMJzt%2BcEGOqUBIyJ2Ac2oQMBkO325AksdT%2FLfXpk2krz2jqWqTGtmoS%2FwqIVVfuwwOsYGnxtU9v04bg%2FFzwQgoGsJPxj2WWTKAeWeaoCmwQQz7Ia3AWpdmqByCGKgDvD2h2UCg44ZZ7I71VVGHJ7x0Ew1PBgQ1UHl8w1TwVBAa2U%2BAQV%2FczOmSrpMNyQ3wDYH14t6pKNakOZzeJpiMFmNtTexUhC9Qj6xim1%2BQzge&X-Amz-Signature=ff199dffee5c7d164ce350d2b44eb1cf5d2212a15a3f869b575c77d20ad732c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXLEEPE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCbEfNb%2FMQmBiWV1EoqAL%2F%2F9chWhHyacFX2lG%2BROUlcdQIgN%2B5hvXVzIZuQdVnbNGJuO0GXqmR3m0C1flNh6U1dL4AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg0B1Y9pHWtWkzw4SrcAx64wzAYTv4FJqxzTeVbQ4cTzVUjPjXDEGssU2sxNjJMMLk8aQdamgPp2Skr2QzKarVeq2u%2F8SURRWQz1bjqf0oB2aC5To3QEVzJLOPGKaobsTjbV4vosxb4w8ZCM%2F93jPWORnjG5zjYk41%2BztSEhYoOEhoLpv2liFkJMqB8x%2FKShCSfRULTkDPo9zXr2ydicodUyaX4pyuWI%2FPl5uhnKwtX7BYBxAlW6ygDH%2BYG3YX%2Fa5pIL%2FCnLyju0d0QkYemLUCOWp3A9LpTQ6G1iX6Pj4YME1loxeoSXDyYrO6SuB4nt0qA1X1PS4ob4IBNAh3HvHZFZZwrAD42aXJdzKbb4wrT2ne7dtxBFzVWL1VlHBioRm%2BZ1kJYEhieYVuLb868GWIGeQpcntfDhfXP%2Fmw5IxxzMGJbSUZFflp3UAIrei7flReNxbiPAwHVGX1h%2FrEP33GB7jg6Xk1LUbGtaOO5XA8vnpczuMXVu54081C4dPMm5SyizZiL6Yn8Y0wr60Wu4YFYqQ%2BM7XsbhL0OgcNPj8ZJNyN%2F8N%2BkxRPt4%2FwJ1Lwxju7uBgyII8Lac9BdUw3h8ypgtbSz6FMFt5YbQFu2jr1kT8QkzhOm2uUqcDB3311halJjQqG33cAuAVLQMJzt%2BcEGOqUBIyJ2Ac2oQMBkO325AksdT%2FLfXpk2krz2jqWqTGtmoS%2FwqIVVfuwwOsYGnxtU9v04bg%2FFzwQgoGsJPxj2WWTKAeWeaoCmwQQz7Ia3AWpdmqByCGKgDvD2h2UCg44ZZ7I71VVGHJ7x0Ew1PBgQ1UHl8w1TwVBAa2U%2BAQV%2FczOmSrpMNyQ3wDYH14t6pKNakOZzeJpiMFmNtTexUhC9Qj6xim1%2BQzge&X-Amz-Signature=24a341bd3a1d269ac91b685ffdc3ba244c7fa122b14e77950721663c7d77ad36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXLEEPE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCbEfNb%2FMQmBiWV1EoqAL%2F%2F9chWhHyacFX2lG%2BROUlcdQIgN%2B5hvXVzIZuQdVnbNGJuO0GXqmR3m0C1flNh6U1dL4AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg0B1Y9pHWtWkzw4SrcAx64wzAYTv4FJqxzTeVbQ4cTzVUjPjXDEGssU2sxNjJMMLk8aQdamgPp2Skr2QzKarVeq2u%2F8SURRWQz1bjqf0oB2aC5To3QEVzJLOPGKaobsTjbV4vosxb4w8ZCM%2F93jPWORnjG5zjYk41%2BztSEhYoOEhoLpv2liFkJMqB8x%2FKShCSfRULTkDPo9zXr2ydicodUyaX4pyuWI%2FPl5uhnKwtX7BYBxAlW6ygDH%2BYG3YX%2Fa5pIL%2FCnLyju0d0QkYemLUCOWp3A9LpTQ6G1iX6Pj4YME1loxeoSXDyYrO6SuB4nt0qA1X1PS4ob4IBNAh3HvHZFZZwrAD42aXJdzKbb4wrT2ne7dtxBFzVWL1VlHBioRm%2BZ1kJYEhieYVuLb868GWIGeQpcntfDhfXP%2Fmw5IxxzMGJbSUZFflp3UAIrei7flReNxbiPAwHVGX1h%2FrEP33GB7jg6Xk1LUbGtaOO5XA8vnpczuMXVu54081C4dPMm5SyizZiL6Yn8Y0wr60Wu4YFYqQ%2BM7XsbhL0OgcNPj8ZJNyN%2F8N%2BkxRPt4%2FwJ1Lwxju7uBgyII8Lac9BdUw3h8ypgtbSz6FMFt5YbQFu2jr1kT8QkzhOm2uUqcDB3311halJjQqG33cAuAVLQMJzt%2BcEGOqUBIyJ2Ac2oQMBkO325AksdT%2FLfXpk2krz2jqWqTGtmoS%2FwqIVVfuwwOsYGnxtU9v04bg%2FFzwQgoGsJPxj2WWTKAeWeaoCmwQQz7Ia3AWpdmqByCGKgDvD2h2UCg44ZZ7I71VVGHJ7x0Ew1PBgQ1UHl8w1TwVBAa2U%2BAQV%2FczOmSrpMNyQ3wDYH14t6pKNakOZzeJpiMFmNtTexUhC9Qj6xim1%2BQzge&X-Amz-Signature=5ef51173748c7e1faaf5846f6e826bc0d0122e3fe6e7878c1cfda104830e288f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXLEEPE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCbEfNb%2FMQmBiWV1EoqAL%2F%2F9chWhHyacFX2lG%2BROUlcdQIgN%2B5hvXVzIZuQdVnbNGJuO0GXqmR3m0C1flNh6U1dL4AqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg0B1Y9pHWtWkzw4SrcAx64wzAYTv4FJqxzTeVbQ4cTzVUjPjXDEGssU2sxNjJMMLk8aQdamgPp2Skr2QzKarVeq2u%2F8SURRWQz1bjqf0oB2aC5To3QEVzJLOPGKaobsTjbV4vosxb4w8ZCM%2F93jPWORnjG5zjYk41%2BztSEhYoOEhoLpv2liFkJMqB8x%2FKShCSfRULTkDPo9zXr2ydicodUyaX4pyuWI%2FPl5uhnKwtX7BYBxAlW6ygDH%2BYG3YX%2Fa5pIL%2FCnLyju0d0QkYemLUCOWp3A9LpTQ6G1iX6Pj4YME1loxeoSXDyYrO6SuB4nt0qA1X1PS4ob4IBNAh3HvHZFZZwrAD42aXJdzKbb4wrT2ne7dtxBFzVWL1VlHBioRm%2BZ1kJYEhieYVuLb868GWIGeQpcntfDhfXP%2Fmw5IxxzMGJbSUZFflp3UAIrei7flReNxbiPAwHVGX1h%2FrEP33GB7jg6Xk1LUbGtaOO5XA8vnpczuMXVu54081C4dPMm5SyizZiL6Yn8Y0wr60Wu4YFYqQ%2BM7XsbhL0OgcNPj8ZJNyN%2F8N%2BkxRPt4%2FwJ1Lwxju7uBgyII8Lac9BdUw3h8ypgtbSz6FMFt5YbQFu2jr1kT8QkzhOm2uUqcDB3311halJjQqG33cAuAVLQMJzt%2BcEGOqUBIyJ2Ac2oQMBkO325AksdT%2FLfXpk2krz2jqWqTGtmoS%2FwqIVVfuwwOsYGnxtU9v04bg%2FFzwQgoGsJPxj2WWTKAeWeaoCmwQQz7Ia3AWpdmqByCGKgDvD2h2UCg44ZZ7I71VVGHJ7x0Ew1PBgQ1UHl8w1TwVBAa2U%2BAQV%2FczOmSrpMNyQ3wDYH14t6pKNakOZzeJpiMFmNtTexUhC9Qj6xim1%2BQzge&X-Amz-Signature=cc258b2d55c0aeecea327882b36b3f6fc3bfe432bf2b2c18df9ac38d3902ea7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

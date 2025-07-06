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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVCKGKT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCEgtPgDx8c%2BI%2Fqlzq0xdVvb7ss%2FoIPRm0JDJvkLOZPkAIgcQsUpqz6zf12ndEDpuwBZ5o%2BRQHKyTUDmOsNq5wVZjMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM1x1T%2BZ2YAGIEZcKircAxGx7%2B7p%2BtT6cLm44Ahat4Jcp0QQ9RoOFKJh0PMJBIwZ8LuibI3z%2FeFSamR021OLJuk1hQGCdC%2FI94SELTpBsQHvcSVfYM%2F85py0rwaTyOiOnnPEoZNKT%2BlvkJsAWTtpSpZy0sNH3HB2vumrmE6HJa95FlUdACY1i6Siu0mn1cLonZ6UJavWeKd0z8CzsBMPp%2FgPx8Qwq0pnsouUfD5ZvcI2T1SXjHVGxTWwDCGFSHXuuNUmBogWTEhi47XXAyYNLR%2F1UzmTbOyvcbW6xy9fDrDlu4Ce9XEBf%2BapXrFIBHkU%2Bbg2xNvuZ5Vbc%2BBcAFFZl%2BXokzrgBu3u5icUybkBeI75E3akKnD3LFu4QWqSGBb%2Bs%2Bncyz3iUjR1UbGnPvlVLuGF8MCBM2t6XAbLzglW2ie6xMptBblu4x2esySa%2FLn51FsmJnDtdUDZ%2Fh2eP4OhNERjyx6ZaRuWdPZSMXmythvM64lc3cuI5do5Cwsn99AypET5DQDc9H8yUjJ7CzBV7OHmR%2FYtLN8c519dWR3m6tmJr%2BzZVSLwLffp%2BCQ22xXRARDsiAT95EvcQbThOUTmL2Ys%2FXdOsELI5m%2FwjAQZKnZJm8tsyVlnr8AnCGYK0CnnmE8SD3VxYKqs8JJSMKmvqMMGOqUBMWii4VTzW43XZG%2FFTQYu3%2FEHd2fmE1C73%2BCCjmlaAdBdtL%2F9cZsWgtbuIfwSs30JUa0Ym%2F1cP5VyK3F0dToCAgvY3n6cYkZQcNHDyICvguQ%2BvnxDyFnkpLNkvr5tso3cG0sPVVXj7iIR5y5Cs0aagccIlEo7ZL55dBggIGx2vU9O8iXLyZfVb%2BhWOep4K1ZtgLE7e%2FKhlWEAKJU3%2F3uNdkPAku5j&X-Amz-Signature=49a41d7eef1c425ee301190662ad33e1b35df63175d9cc129a6b29b7780b0e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVCKGKT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCEgtPgDx8c%2BI%2Fqlzq0xdVvb7ss%2FoIPRm0JDJvkLOZPkAIgcQsUpqz6zf12ndEDpuwBZ5o%2BRQHKyTUDmOsNq5wVZjMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM1x1T%2BZ2YAGIEZcKircAxGx7%2B7p%2BtT6cLm44Ahat4Jcp0QQ9RoOFKJh0PMJBIwZ8LuibI3z%2FeFSamR021OLJuk1hQGCdC%2FI94SELTpBsQHvcSVfYM%2F85py0rwaTyOiOnnPEoZNKT%2BlvkJsAWTtpSpZy0sNH3HB2vumrmE6HJa95FlUdACY1i6Siu0mn1cLonZ6UJavWeKd0z8CzsBMPp%2FgPx8Qwq0pnsouUfD5ZvcI2T1SXjHVGxTWwDCGFSHXuuNUmBogWTEhi47XXAyYNLR%2F1UzmTbOyvcbW6xy9fDrDlu4Ce9XEBf%2BapXrFIBHkU%2Bbg2xNvuZ5Vbc%2BBcAFFZl%2BXokzrgBu3u5icUybkBeI75E3akKnD3LFu4QWqSGBb%2Bs%2Bncyz3iUjR1UbGnPvlVLuGF8MCBM2t6XAbLzglW2ie6xMptBblu4x2esySa%2FLn51FsmJnDtdUDZ%2Fh2eP4OhNERjyx6ZaRuWdPZSMXmythvM64lc3cuI5do5Cwsn99AypET5DQDc9H8yUjJ7CzBV7OHmR%2FYtLN8c519dWR3m6tmJr%2BzZVSLwLffp%2BCQ22xXRARDsiAT95EvcQbThOUTmL2Ys%2FXdOsELI5m%2FwjAQZKnZJm8tsyVlnr8AnCGYK0CnnmE8SD3VxYKqs8JJSMKmvqMMGOqUBMWii4VTzW43XZG%2FFTQYu3%2FEHd2fmE1C73%2BCCjmlaAdBdtL%2F9cZsWgtbuIfwSs30JUa0Ym%2F1cP5VyK3F0dToCAgvY3n6cYkZQcNHDyICvguQ%2BvnxDyFnkpLNkvr5tso3cG0sPVVXj7iIR5y5Cs0aagccIlEo7ZL55dBggIGx2vU9O8iXLyZfVb%2BhWOep4K1ZtgLE7e%2FKhlWEAKJU3%2F3uNdkPAku5j&X-Amz-Signature=f4c575b7fda87b8ce570d1a0d95b046d0364f4de056d551778c30e1be9190ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVCKGKT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCEgtPgDx8c%2BI%2Fqlzq0xdVvb7ss%2FoIPRm0JDJvkLOZPkAIgcQsUpqz6zf12ndEDpuwBZ5o%2BRQHKyTUDmOsNq5wVZjMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM1x1T%2BZ2YAGIEZcKircAxGx7%2B7p%2BtT6cLm44Ahat4Jcp0QQ9RoOFKJh0PMJBIwZ8LuibI3z%2FeFSamR021OLJuk1hQGCdC%2FI94SELTpBsQHvcSVfYM%2F85py0rwaTyOiOnnPEoZNKT%2BlvkJsAWTtpSpZy0sNH3HB2vumrmE6HJa95FlUdACY1i6Siu0mn1cLonZ6UJavWeKd0z8CzsBMPp%2FgPx8Qwq0pnsouUfD5ZvcI2T1SXjHVGxTWwDCGFSHXuuNUmBogWTEhi47XXAyYNLR%2F1UzmTbOyvcbW6xy9fDrDlu4Ce9XEBf%2BapXrFIBHkU%2Bbg2xNvuZ5Vbc%2BBcAFFZl%2BXokzrgBu3u5icUybkBeI75E3akKnD3LFu4QWqSGBb%2Bs%2Bncyz3iUjR1UbGnPvlVLuGF8MCBM2t6XAbLzglW2ie6xMptBblu4x2esySa%2FLn51FsmJnDtdUDZ%2Fh2eP4OhNERjyx6ZaRuWdPZSMXmythvM64lc3cuI5do5Cwsn99AypET5DQDc9H8yUjJ7CzBV7OHmR%2FYtLN8c519dWR3m6tmJr%2BzZVSLwLffp%2BCQ22xXRARDsiAT95EvcQbThOUTmL2Ys%2FXdOsELI5m%2FwjAQZKnZJm8tsyVlnr8AnCGYK0CnnmE8SD3VxYKqs8JJSMKmvqMMGOqUBMWii4VTzW43XZG%2FFTQYu3%2FEHd2fmE1C73%2BCCjmlaAdBdtL%2F9cZsWgtbuIfwSs30JUa0Ym%2F1cP5VyK3F0dToCAgvY3n6cYkZQcNHDyICvguQ%2BvnxDyFnkpLNkvr5tso3cG0sPVVXj7iIR5y5Cs0aagccIlEo7ZL55dBggIGx2vU9O8iXLyZfVb%2BhWOep4K1ZtgLE7e%2FKhlWEAKJU3%2F3uNdkPAku5j&X-Amz-Signature=bb6392f8bf1e230f8eec51a39744b69280b9741120bccb8c1cd4c2380795a5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVCKGKT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCEgtPgDx8c%2BI%2Fqlzq0xdVvb7ss%2FoIPRm0JDJvkLOZPkAIgcQsUpqz6zf12ndEDpuwBZ5o%2BRQHKyTUDmOsNq5wVZjMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM1x1T%2BZ2YAGIEZcKircAxGx7%2B7p%2BtT6cLm44Ahat4Jcp0QQ9RoOFKJh0PMJBIwZ8LuibI3z%2FeFSamR021OLJuk1hQGCdC%2FI94SELTpBsQHvcSVfYM%2F85py0rwaTyOiOnnPEoZNKT%2BlvkJsAWTtpSpZy0sNH3HB2vumrmE6HJa95FlUdACY1i6Siu0mn1cLonZ6UJavWeKd0z8CzsBMPp%2FgPx8Qwq0pnsouUfD5ZvcI2T1SXjHVGxTWwDCGFSHXuuNUmBogWTEhi47XXAyYNLR%2F1UzmTbOyvcbW6xy9fDrDlu4Ce9XEBf%2BapXrFIBHkU%2Bbg2xNvuZ5Vbc%2BBcAFFZl%2BXokzrgBu3u5icUybkBeI75E3akKnD3LFu4QWqSGBb%2Bs%2Bncyz3iUjR1UbGnPvlVLuGF8MCBM2t6XAbLzglW2ie6xMptBblu4x2esySa%2FLn51FsmJnDtdUDZ%2Fh2eP4OhNERjyx6ZaRuWdPZSMXmythvM64lc3cuI5do5Cwsn99AypET5DQDc9H8yUjJ7CzBV7OHmR%2FYtLN8c519dWR3m6tmJr%2BzZVSLwLffp%2BCQ22xXRARDsiAT95EvcQbThOUTmL2Ys%2FXdOsELI5m%2FwjAQZKnZJm8tsyVlnr8AnCGYK0CnnmE8SD3VxYKqs8JJSMKmvqMMGOqUBMWii4VTzW43XZG%2FFTQYu3%2FEHd2fmE1C73%2BCCjmlaAdBdtL%2F9cZsWgtbuIfwSs30JUa0Ym%2F1cP5VyK3F0dToCAgvY3n6cYkZQcNHDyICvguQ%2BvnxDyFnkpLNkvr5tso3cG0sPVVXj7iIR5y5Cs0aagccIlEo7ZL55dBggIGx2vU9O8iXLyZfVb%2BhWOep4K1ZtgLE7e%2FKhlWEAKJU3%2F3uNdkPAku5j&X-Amz-Signature=780ccc6cd60731430fd253480bfd272c8f31667946cd6ef6ef2b60b702c7d89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVCKGKT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCEgtPgDx8c%2BI%2Fqlzq0xdVvb7ss%2FoIPRm0JDJvkLOZPkAIgcQsUpqz6zf12ndEDpuwBZ5o%2BRQHKyTUDmOsNq5wVZjMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM1x1T%2BZ2YAGIEZcKircAxGx7%2B7p%2BtT6cLm44Ahat4Jcp0QQ9RoOFKJh0PMJBIwZ8LuibI3z%2FeFSamR021OLJuk1hQGCdC%2FI94SELTpBsQHvcSVfYM%2F85py0rwaTyOiOnnPEoZNKT%2BlvkJsAWTtpSpZy0sNH3HB2vumrmE6HJa95FlUdACY1i6Siu0mn1cLonZ6UJavWeKd0z8CzsBMPp%2FgPx8Qwq0pnsouUfD5ZvcI2T1SXjHVGxTWwDCGFSHXuuNUmBogWTEhi47XXAyYNLR%2F1UzmTbOyvcbW6xy9fDrDlu4Ce9XEBf%2BapXrFIBHkU%2Bbg2xNvuZ5Vbc%2BBcAFFZl%2BXokzrgBu3u5icUybkBeI75E3akKnD3LFu4QWqSGBb%2Bs%2Bncyz3iUjR1UbGnPvlVLuGF8MCBM2t6XAbLzglW2ie6xMptBblu4x2esySa%2FLn51FsmJnDtdUDZ%2Fh2eP4OhNERjyx6ZaRuWdPZSMXmythvM64lc3cuI5do5Cwsn99AypET5DQDc9H8yUjJ7CzBV7OHmR%2FYtLN8c519dWR3m6tmJr%2BzZVSLwLffp%2BCQ22xXRARDsiAT95EvcQbThOUTmL2Ys%2FXdOsELI5m%2FwjAQZKnZJm8tsyVlnr8AnCGYK0CnnmE8SD3VxYKqs8JJSMKmvqMMGOqUBMWii4VTzW43XZG%2FFTQYu3%2FEHd2fmE1C73%2BCCjmlaAdBdtL%2F9cZsWgtbuIfwSs30JUa0Ym%2F1cP5VyK3F0dToCAgvY3n6cYkZQcNHDyICvguQ%2BvnxDyFnkpLNkvr5tso3cG0sPVVXj7iIR5y5Cs0aagccIlEo7ZL55dBggIGx2vU9O8iXLyZfVb%2BhWOep4K1ZtgLE7e%2FKhlWEAKJU3%2F3uNdkPAku5j&X-Amz-Signature=b51de2ab257dcecb97275c88bc56149d1ed842fac48ccf2a80ce0c6ae8e1a327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVCKGKT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCEgtPgDx8c%2BI%2Fqlzq0xdVvb7ss%2FoIPRm0JDJvkLOZPkAIgcQsUpqz6zf12ndEDpuwBZ5o%2BRQHKyTUDmOsNq5wVZjMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM1x1T%2BZ2YAGIEZcKircAxGx7%2B7p%2BtT6cLm44Ahat4Jcp0QQ9RoOFKJh0PMJBIwZ8LuibI3z%2FeFSamR021OLJuk1hQGCdC%2FI94SELTpBsQHvcSVfYM%2F85py0rwaTyOiOnnPEoZNKT%2BlvkJsAWTtpSpZy0sNH3HB2vumrmE6HJa95FlUdACY1i6Siu0mn1cLonZ6UJavWeKd0z8CzsBMPp%2FgPx8Qwq0pnsouUfD5ZvcI2T1SXjHVGxTWwDCGFSHXuuNUmBogWTEhi47XXAyYNLR%2F1UzmTbOyvcbW6xy9fDrDlu4Ce9XEBf%2BapXrFIBHkU%2Bbg2xNvuZ5Vbc%2BBcAFFZl%2BXokzrgBu3u5icUybkBeI75E3akKnD3LFu4QWqSGBb%2Bs%2Bncyz3iUjR1UbGnPvlVLuGF8MCBM2t6XAbLzglW2ie6xMptBblu4x2esySa%2FLn51FsmJnDtdUDZ%2Fh2eP4OhNERjyx6ZaRuWdPZSMXmythvM64lc3cuI5do5Cwsn99AypET5DQDc9H8yUjJ7CzBV7OHmR%2FYtLN8c519dWR3m6tmJr%2BzZVSLwLffp%2BCQ22xXRARDsiAT95EvcQbThOUTmL2Ys%2FXdOsELI5m%2FwjAQZKnZJm8tsyVlnr8AnCGYK0CnnmE8SD3VxYKqs8JJSMKmvqMMGOqUBMWii4VTzW43XZG%2FFTQYu3%2FEHd2fmE1C73%2BCCjmlaAdBdtL%2F9cZsWgtbuIfwSs30JUa0Ym%2F1cP5VyK3F0dToCAgvY3n6cYkZQcNHDyICvguQ%2BvnxDyFnkpLNkvr5tso3cG0sPVVXj7iIR5y5Cs0aagccIlEo7ZL55dBggIGx2vU9O8iXLyZfVb%2BhWOep4K1ZtgLE7e%2FKhlWEAKJU3%2F3uNdkPAku5j&X-Amz-Signature=fdb888e318b66ec5fc3068b835a3e9d127491b4ecdd2bb73ef2146673fb0bfe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVCKGKT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCEgtPgDx8c%2BI%2Fqlzq0xdVvb7ss%2FoIPRm0JDJvkLOZPkAIgcQsUpqz6zf12ndEDpuwBZ5o%2BRQHKyTUDmOsNq5wVZjMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM1x1T%2BZ2YAGIEZcKircAxGx7%2B7p%2BtT6cLm44Ahat4Jcp0QQ9RoOFKJh0PMJBIwZ8LuibI3z%2FeFSamR021OLJuk1hQGCdC%2FI94SELTpBsQHvcSVfYM%2F85py0rwaTyOiOnnPEoZNKT%2BlvkJsAWTtpSpZy0sNH3HB2vumrmE6HJa95FlUdACY1i6Siu0mn1cLonZ6UJavWeKd0z8CzsBMPp%2FgPx8Qwq0pnsouUfD5ZvcI2T1SXjHVGxTWwDCGFSHXuuNUmBogWTEhi47XXAyYNLR%2F1UzmTbOyvcbW6xy9fDrDlu4Ce9XEBf%2BapXrFIBHkU%2Bbg2xNvuZ5Vbc%2BBcAFFZl%2BXokzrgBu3u5icUybkBeI75E3akKnD3LFu4QWqSGBb%2Bs%2Bncyz3iUjR1UbGnPvlVLuGF8MCBM2t6XAbLzglW2ie6xMptBblu4x2esySa%2FLn51FsmJnDtdUDZ%2Fh2eP4OhNERjyx6ZaRuWdPZSMXmythvM64lc3cuI5do5Cwsn99AypET5DQDc9H8yUjJ7CzBV7OHmR%2FYtLN8c519dWR3m6tmJr%2BzZVSLwLffp%2BCQ22xXRARDsiAT95EvcQbThOUTmL2Ys%2FXdOsELI5m%2FwjAQZKnZJm8tsyVlnr8AnCGYK0CnnmE8SD3VxYKqs8JJSMKmvqMMGOqUBMWii4VTzW43XZG%2FFTQYu3%2FEHd2fmE1C73%2BCCjmlaAdBdtL%2F9cZsWgtbuIfwSs30JUa0Ym%2F1cP5VyK3F0dToCAgvY3n6cYkZQcNHDyICvguQ%2BvnxDyFnkpLNkvr5tso3cG0sPVVXj7iIR5y5Cs0aagccIlEo7ZL55dBggIGx2vU9O8iXLyZfVb%2BhWOep4K1ZtgLE7e%2FKhlWEAKJU3%2F3uNdkPAku5j&X-Amz-Signature=042564214192deb7d1d3b27be99b439cc85b8362037c40e5c96d4c2c79f43fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVCKGKT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCEgtPgDx8c%2BI%2Fqlzq0xdVvb7ss%2FoIPRm0JDJvkLOZPkAIgcQsUpqz6zf12ndEDpuwBZ5o%2BRQHKyTUDmOsNq5wVZjMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM1x1T%2BZ2YAGIEZcKircAxGx7%2B7p%2BtT6cLm44Ahat4Jcp0QQ9RoOFKJh0PMJBIwZ8LuibI3z%2FeFSamR021OLJuk1hQGCdC%2FI94SELTpBsQHvcSVfYM%2F85py0rwaTyOiOnnPEoZNKT%2BlvkJsAWTtpSpZy0sNH3HB2vumrmE6HJa95FlUdACY1i6Siu0mn1cLonZ6UJavWeKd0z8CzsBMPp%2FgPx8Qwq0pnsouUfD5ZvcI2T1SXjHVGxTWwDCGFSHXuuNUmBogWTEhi47XXAyYNLR%2F1UzmTbOyvcbW6xy9fDrDlu4Ce9XEBf%2BapXrFIBHkU%2Bbg2xNvuZ5Vbc%2BBcAFFZl%2BXokzrgBu3u5icUybkBeI75E3akKnD3LFu4QWqSGBb%2Bs%2Bncyz3iUjR1UbGnPvlVLuGF8MCBM2t6XAbLzglW2ie6xMptBblu4x2esySa%2FLn51FsmJnDtdUDZ%2Fh2eP4OhNERjyx6ZaRuWdPZSMXmythvM64lc3cuI5do5Cwsn99AypET5DQDc9H8yUjJ7CzBV7OHmR%2FYtLN8c519dWR3m6tmJr%2BzZVSLwLffp%2BCQ22xXRARDsiAT95EvcQbThOUTmL2Ys%2FXdOsELI5m%2FwjAQZKnZJm8tsyVlnr8AnCGYK0CnnmE8SD3VxYKqs8JJSMKmvqMMGOqUBMWii4VTzW43XZG%2FFTQYu3%2FEHd2fmE1C73%2BCCjmlaAdBdtL%2F9cZsWgtbuIfwSs30JUa0Ym%2F1cP5VyK3F0dToCAgvY3n6cYkZQcNHDyICvguQ%2BvnxDyFnkpLNkvr5tso3cG0sPVVXj7iIR5y5Cs0aagccIlEo7ZL55dBggIGx2vU9O8iXLyZfVb%2BhWOep4K1ZtgLE7e%2FKhlWEAKJU3%2F3uNdkPAku5j&X-Amz-Signature=7bb3d405442b66e7fbbbcd8444cd79069d40aa4c126755a3addfbb3ed89cbc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

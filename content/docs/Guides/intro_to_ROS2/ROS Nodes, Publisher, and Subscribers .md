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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUFUSG5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwyoguDPZQB%2FQxTtHp3T%2B9mbtcL7ILU5xDYAh0xVwKlQIgIIdQsYeUm5Z0eHmZfJj7dKJQ5SJO5L2gw%2BLbCIYOYNMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPK2tiR8ml9Il78PlCrcA%2FnM2FTIIVfkH5JztD2Mg%2FzPiMUdy9TgeUA71RuIXj7A2ESmiTvES8ylhmjpV4MjT4nG5fVz7gqITYBpkSSVZQzAk9%2Fgq8q%2FKHptWreSIs3E1NXeVqdHXQMqNGLdnXvZQcbYQBtsTNErZ%2F2tYOdJoRRwYsNTHJNTEnw3Nylbj%2F5yHStLI%2Fb1dEBL1fLzfHjxZKm%2FfF5k2pnSKcgwJ9Tld599cmd7%2FEOnBLWOk%2Bo5wAcy3ECp%2BRMzNIcJPLwZhi%2FJq1DvXnA%2FXyZlp0ur2F8E2TpM6a1Ce9PH6W1YmC6nG6ZHblZiOLFpNTtdD3YrXDWz6%2BndUvSeORwEzQwlQz3WAKWBJweNhJJv3KV409wrlqAkxdjQBKN8L3YQ2%2BPxbCNIo%2BVsGhnDYwqUp3cr480OT%2Bh%2BUt9b%2ByPNV7G18502Y5bjK1FdP0k2OM9nsTcKNZntA4qiyy0mCFlVpg0%2FT0mod%2B30w8%2Bcry%2FiNxgeBEfKJFBRfc1kR01AHD5WcvQBzqaKq6kOfE2xy5xeI0DpDotb1fw%2B6G1UxGIq8Q7JNsoh8qbkWEc5gjirYoPbIkEv%2FgLqqRiJKJVwnqcpvpHBTZnOWhquC77a0CTJwIAXe6%2B7dnhjQJLJ2trlh%2B9W6uZ%2BMKnArL4GOqUBBMLq%2BaND9aAsQbAQtCxz%2BUspJKeIELjv5%2BfM7yqF%2FnAkMWw6wikc5MqA%2FfiU%2BRhoN7a47APMF8Qy3K6bFfMOfTJtbN8VfETpmbhRI2fPQm644fbFrBQaEwhDmxzby6XJE%2Fy3cB1%2FxSGJvwicCNXrZ5xsE9D35dgO6BiFWXYXy3S7MXS8HU4y38tllGxGfROlrKrjK3dvopCWrVFgH09sYtTyQHmt&X-Amz-Signature=842f5c26c819a9eba8e6e86811f7b1f10fb6ebf1a4bf7c3dc877821256e50aca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUFUSG5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwyoguDPZQB%2FQxTtHp3T%2B9mbtcL7ILU5xDYAh0xVwKlQIgIIdQsYeUm5Z0eHmZfJj7dKJQ5SJO5L2gw%2BLbCIYOYNMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPK2tiR8ml9Il78PlCrcA%2FnM2FTIIVfkH5JztD2Mg%2FzPiMUdy9TgeUA71RuIXj7A2ESmiTvES8ylhmjpV4MjT4nG5fVz7gqITYBpkSSVZQzAk9%2Fgq8q%2FKHptWreSIs3E1NXeVqdHXQMqNGLdnXvZQcbYQBtsTNErZ%2F2tYOdJoRRwYsNTHJNTEnw3Nylbj%2F5yHStLI%2Fb1dEBL1fLzfHjxZKm%2FfF5k2pnSKcgwJ9Tld599cmd7%2FEOnBLWOk%2Bo5wAcy3ECp%2BRMzNIcJPLwZhi%2FJq1DvXnA%2FXyZlp0ur2F8E2TpM6a1Ce9PH6W1YmC6nG6ZHblZiOLFpNTtdD3YrXDWz6%2BndUvSeORwEzQwlQz3WAKWBJweNhJJv3KV409wrlqAkxdjQBKN8L3YQ2%2BPxbCNIo%2BVsGhnDYwqUp3cr480OT%2Bh%2BUt9b%2ByPNV7G18502Y5bjK1FdP0k2OM9nsTcKNZntA4qiyy0mCFlVpg0%2FT0mod%2B30w8%2Bcry%2FiNxgeBEfKJFBRfc1kR01AHD5WcvQBzqaKq6kOfE2xy5xeI0DpDotb1fw%2B6G1UxGIq8Q7JNsoh8qbkWEc5gjirYoPbIkEv%2FgLqqRiJKJVwnqcpvpHBTZnOWhquC77a0CTJwIAXe6%2B7dnhjQJLJ2trlh%2B9W6uZ%2BMKnArL4GOqUBBMLq%2BaND9aAsQbAQtCxz%2BUspJKeIELjv5%2BfM7yqF%2FnAkMWw6wikc5MqA%2FfiU%2BRhoN7a47APMF8Qy3K6bFfMOfTJtbN8VfETpmbhRI2fPQm644fbFrBQaEwhDmxzby6XJE%2Fy3cB1%2FxSGJvwicCNXrZ5xsE9D35dgO6BiFWXYXy3S7MXS8HU4y38tllGxGfROlrKrjK3dvopCWrVFgH09sYtTyQHmt&X-Amz-Signature=c5bd9908f75a88a2fe08f5ef92f7b876f1653848a8453339cd7bfd8b857e2110&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUFUSG5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwyoguDPZQB%2FQxTtHp3T%2B9mbtcL7ILU5xDYAh0xVwKlQIgIIdQsYeUm5Z0eHmZfJj7dKJQ5SJO5L2gw%2BLbCIYOYNMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPK2tiR8ml9Il78PlCrcA%2FnM2FTIIVfkH5JztD2Mg%2FzPiMUdy9TgeUA71RuIXj7A2ESmiTvES8ylhmjpV4MjT4nG5fVz7gqITYBpkSSVZQzAk9%2Fgq8q%2FKHptWreSIs3E1NXeVqdHXQMqNGLdnXvZQcbYQBtsTNErZ%2F2tYOdJoRRwYsNTHJNTEnw3Nylbj%2F5yHStLI%2Fb1dEBL1fLzfHjxZKm%2FfF5k2pnSKcgwJ9Tld599cmd7%2FEOnBLWOk%2Bo5wAcy3ECp%2BRMzNIcJPLwZhi%2FJq1DvXnA%2FXyZlp0ur2F8E2TpM6a1Ce9PH6W1YmC6nG6ZHblZiOLFpNTtdD3YrXDWz6%2BndUvSeORwEzQwlQz3WAKWBJweNhJJv3KV409wrlqAkxdjQBKN8L3YQ2%2BPxbCNIo%2BVsGhnDYwqUp3cr480OT%2Bh%2BUt9b%2ByPNV7G18502Y5bjK1FdP0k2OM9nsTcKNZntA4qiyy0mCFlVpg0%2FT0mod%2B30w8%2Bcry%2FiNxgeBEfKJFBRfc1kR01AHD5WcvQBzqaKq6kOfE2xy5xeI0DpDotb1fw%2B6G1UxGIq8Q7JNsoh8qbkWEc5gjirYoPbIkEv%2FgLqqRiJKJVwnqcpvpHBTZnOWhquC77a0CTJwIAXe6%2B7dnhjQJLJ2trlh%2B9W6uZ%2BMKnArL4GOqUBBMLq%2BaND9aAsQbAQtCxz%2BUspJKeIELjv5%2BfM7yqF%2FnAkMWw6wikc5MqA%2FfiU%2BRhoN7a47APMF8Qy3K6bFfMOfTJtbN8VfETpmbhRI2fPQm644fbFrBQaEwhDmxzby6XJE%2Fy3cB1%2FxSGJvwicCNXrZ5xsE9D35dgO6BiFWXYXy3S7MXS8HU4y38tllGxGfROlrKrjK3dvopCWrVFgH09sYtTyQHmt&X-Amz-Signature=8179a6ebbc9a61a286432fe53591b86649bc5e6efb3f87d4f06c48b39328cc6b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUFUSG5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwyoguDPZQB%2FQxTtHp3T%2B9mbtcL7ILU5xDYAh0xVwKlQIgIIdQsYeUm5Z0eHmZfJj7dKJQ5SJO5L2gw%2BLbCIYOYNMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPK2tiR8ml9Il78PlCrcA%2FnM2FTIIVfkH5JztD2Mg%2FzPiMUdy9TgeUA71RuIXj7A2ESmiTvES8ylhmjpV4MjT4nG5fVz7gqITYBpkSSVZQzAk9%2Fgq8q%2FKHptWreSIs3E1NXeVqdHXQMqNGLdnXvZQcbYQBtsTNErZ%2F2tYOdJoRRwYsNTHJNTEnw3Nylbj%2F5yHStLI%2Fb1dEBL1fLzfHjxZKm%2FfF5k2pnSKcgwJ9Tld599cmd7%2FEOnBLWOk%2Bo5wAcy3ECp%2BRMzNIcJPLwZhi%2FJq1DvXnA%2FXyZlp0ur2F8E2TpM6a1Ce9PH6W1YmC6nG6ZHblZiOLFpNTtdD3YrXDWz6%2BndUvSeORwEzQwlQz3WAKWBJweNhJJv3KV409wrlqAkxdjQBKN8L3YQ2%2BPxbCNIo%2BVsGhnDYwqUp3cr480OT%2Bh%2BUt9b%2ByPNV7G18502Y5bjK1FdP0k2OM9nsTcKNZntA4qiyy0mCFlVpg0%2FT0mod%2B30w8%2Bcry%2FiNxgeBEfKJFBRfc1kR01AHD5WcvQBzqaKq6kOfE2xy5xeI0DpDotb1fw%2B6G1UxGIq8Q7JNsoh8qbkWEc5gjirYoPbIkEv%2FgLqqRiJKJVwnqcpvpHBTZnOWhquC77a0CTJwIAXe6%2B7dnhjQJLJ2trlh%2B9W6uZ%2BMKnArL4GOqUBBMLq%2BaND9aAsQbAQtCxz%2BUspJKeIELjv5%2BfM7yqF%2FnAkMWw6wikc5MqA%2FfiU%2BRhoN7a47APMF8Qy3K6bFfMOfTJtbN8VfETpmbhRI2fPQm644fbFrBQaEwhDmxzby6XJE%2Fy3cB1%2FxSGJvwicCNXrZ5xsE9D35dgO6BiFWXYXy3S7MXS8HU4y38tllGxGfROlrKrjK3dvopCWrVFgH09sYtTyQHmt&X-Amz-Signature=c18394ca3196f6efa6995ec9908e9174f02f44928bbe4c33829d7dfbc8c7d0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUFUSG5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwyoguDPZQB%2FQxTtHp3T%2B9mbtcL7ILU5xDYAh0xVwKlQIgIIdQsYeUm5Z0eHmZfJj7dKJQ5SJO5L2gw%2BLbCIYOYNMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPK2tiR8ml9Il78PlCrcA%2FnM2FTIIVfkH5JztD2Mg%2FzPiMUdy9TgeUA71RuIXj7A2ESmiTvES8ylhmjpV4MjT4nG5fVz7gqITYBpkSSVZQzAk9%2Fgq8q%2FKHptWreSIs3E1NXeVqdHXQMqNGLdnXvZQcbYQBtsTNErZ%2F2tYOdJoRRwYsNTHJNTEnw3Nylbj%2F5yHStLI%2Fb1dEBL1fLzfHjxZKm%2FfF5k2pnSKcgwJ9Tld599cmd7%2FEOnBLWOk%2Bo5wAcy3ECp%2BRMzNIcJPLwZhi%2FJq1DvXnA%2FXyZlp0ur2F8E2TpM6a1Ce9PH6W1YmC6nG6ZHblZiOLFpNTtdD3YrXDWz6%2BndUvSeORwEzQwlQz3WAKWBJweNhJJv3KV409wrlqAkxdjQBKN8L3YQ2%2BPxbCNIo%2BVsGhnDYwqUp3cr480OT%2Bh%2BUt9b%2ByPNV7G18502Y5bjK1FdP0k2OM9nsTcKNZntA4qiyy0mCFlVpg0%2FT0mod%2B30w8%2Bcry%2FiNxgeBEfKJFBRfc1kR01AHD5WcvQBzqaKq6kOfE2xy5xeI0DpDotb1fw%2B6G1UxGIq8Q7JNsoh8qbkWEc5gjirYoPbIkEv%2FgLqqRiJKJVwnqcpvpHBTZnOWhquC77a0CTJwIAXe6%2B7dnhjQJLJ2trlh%2B9W6uZ%2BMKnArL4GOqUBBMLq%2BaND9aAsQbAQtCxz%2BUspJKeIELjv5%2BfM7yqF%2FnAkMWw6wikc5MqA%2FfiU%2BRhoN7a47APMF8Qy3K6bFfMOfTJtbN8VfETpmbhRI2fPQm644fbFrBQaEwhDmxzby6XJE%2Fy3cB1%2FxSGJvwicCNXrZ5xsE9D35dgO6BiFWXYXy3S7MXS8HU4y38tllGxGfROlrKrjK3dvopCWrVFgH09sYtTyQHmt&X-Amz-Signature=12a69b4e30aaa8043489f3a26b3f685e75e76a15705c4e642bc5a645862d33ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUFUSG5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwyoguDPZQB%2FQxTtHp3T%2B9mbtcL7ILU5xDYAh0xVwKlQIgIIdQsYeUm5Z0eHmZfJj7dKJQ5SJO5L2gw%2BLbCIYOYNMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPK2tiR8ml9Il78PlCrcA%2FnM2FTIIVfkH5JztD2Mg%2FzPiMUdy9TgeUA71RuIXj7A2ESmiTvES8ylhmjpV4MjT4nG5fVz7gqITYBpkSSVZQzAk9%2Fgq8q%2FKHptWreSIs3E1NXeVqdHXQMqNGLdnXvZQcbYQBtsTNErZ%2F2tYOdJoRRwYsNTHJNTEnw3Nylbj%2F5yHStLI%2Fb1dEBL1fLzfHjxZKm%2FfF5k2pnSKcgwJ9Tld599cmd7%2FEOnBLWOk%2Bo5wAcy3ECp%2BRMzNIcJPLwZhi%2FJq1DvXnA%2FXyZlp0ur2F8E2TpM6a1Ce9PH6W1YmC6nG6ZHblZiOLFpNTtdD3YrXDWz6%2BndUvSeORwEzQwlQz3WAKWBJweNhJJv3KV409wrlqAkxdjQBKN8L3YQ2%2BPxbCNIo%2BVsGhnDYwqUp3cr480OT%2Bh%2BUt9b%2ByPNV7G18502Y5bjK1FdP0k2OM9nsTcKNZntA4qiyy0mCFlVpg0%2FT0mod%2B30w8%2Bcry%2FiNxgeBEfKJFBRfc1kR01AHD5WcvQBzqaKq6kOfE2xy5xeI0DpDotb1fw%2B6G1UxGIq8Q7JNsoh8qbkWEc5gjirYoPbIkEv%2FgLqqRiJKJVwnqcpvpHBTZnOWhquC77a0CTJwIAXe6%2B7dnhjQJLJ2trlh%2B9W6uZ%2BMKnArL4GOqUBBMLq%2BaND9aAsQbAQtCxz%2BUspJKeIELjv5%2BfM7yqF%2FnAkMWw6wikc5MqA%2FfiU%2BRhoN7a47APMF8Qy3K6bFfMOfTJtbN8VfETpmbhRI2fPQm644fbFrBQaEwhDmxzby6XJE%2Fy3cB1%2FxSGJvwicCNXrZ5xsE9D35dgO6BiFWXYXy3S7MXS8HU4y38tllGxGfROlrKrjK3dvopCWrVFgH09sYtTyQHmt&X-Amz-Signature=95028fcfa4b9c13af2c47250122c1f338fa385bd165717123300e414d026f5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUFUSG5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwyoguDPZQB%2FQxTtHp3T%2B9mbtcL7ILU5xDYAh0xVwKlQIgIIdQsYeUm5Z0eHmZfJj7dKJQ5SJO5L2gw%2BLbCIYOYNMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPK2tiR8ml9Il78PlCrcA%2FnM2FTIIVfkH5JztD2Mg%2FzPiMUdy9TgeUA71RuIXj7A2ESmiTvES8ylhmjpV4MjT4nG5fVz7gqITYBpkSSVZQzAk9%2Fgq8q%2FKHptWreSIs3E1NXeVqdHXQMqNGLdnXvZQcbYQBtsTNErZ%2F2tYOdJoRRwYsNTHJNTEnw3Nylbj%2F5yHStLI%2Fb1dEBL1fLzfHjxZKm%2FfF5k2pnSKcgwJ9Tld599cmd7%2FEOnBLWOk%2Bo5wAcy3ECp%2BRMzNIcJPLwZhi%2FJq1DvXnA%2FXyZlp0ur2F8E2TpM6a1Ce9PH6W1YmC6nG6ZHblZiOLFpNTtdD3YrXDWz6%2BndUvSeORwEzQwlQz3WAKWBJweNhJJv3KV409wrlqAkxdjQBKN8L3YQ2%2BPxbCNIo%2BVsGhnDYwqUp3cr480OT%2Bh%2BUt9b%2ByPNV7G18502Y5bjK1FdP0k2OM9nsTcKNZntA4qiyy0mCFlVpg0%2FT0mod%2B30w8%2Bcry%2FiNxgeBEfKJFBRfc1kR01AHD5WcvQBzqaKq6kOfE2xy5xeI0DpDotb1fw%2B6G1UxGIq8Q7JNsoh8qbkWEc5gjirYoPbIkEv%2FgLqqRiJKJVwnqcpvpHBTZnOWhquC77a0CTJwIAXe6%2B7dnhjQJLJ2trlh%2B9W6uZ%2BMKnArL4GOqUBBMLq%2BaND9aAsQbAQtCxz%2BUspJKeIELjv5%2BfM7yqF%2FnAkMWw6wikc5MqA%2FfiU%2BRhoN7a47APMF8Qy3K6bFfMOfTJtbN8VfETpmbhRI2fPQm644fbFrBQaEwhDmxzby6XJE%2Fy3cB1%2FxSGJvwicCNXrZ5xsE9D35dgO6BiFWXYXy3S7MXS8HU4y38tllGxGfROlrKrjK3dvopCWrVFgH09sYtTyQHmt&X-Amz-Signature=88c9058659af4e392431a26cbb8d2c04bd787d4aebd559c071abd7de0ba69591&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUFUSG5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwyoguDPZQB%2FQxTtHp3T%2B9mbtcL7ILU5xDYAh0xVwKlQIgIIdQsYeUm5Z0eHmZfJj7dKJQ5SJO5L2gw%2BLbCIYOYNMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPK2tiR8ml9Il78PlCrcA%2FnM2FTIIVfkH5JztD2Mg%2FzPiMUdy9TgeUA71RuIXj7A2ESmiTvES8ylhmjpV4MjT4nG5fVz7gqITYBpkSSVZQzAk9%2Fgq8q%2FKHptWreSIs3E1NXeVqdHXQMqNGLdnXvZQcbYQBtsTNErZ%2F2tYOdJoRRwYsNTHJNTEnw3Nylbj%2F5yHStLI%2Fb1dEBL1fLzfHjxZKm%2FfF5k2pnSKcgwJ9Tld599cmd7%2FEOnBLWOk%2Bo5wAcy3ECp%2BRMzNIcJPLwZhi%2FJq1DvXnA%2FXyZlp0ur2F8E2TpM6a1Ce9PH6W1YmC6nG6ZHblZiOLFpNTtdD3YrXDWz6%2BndUvSeORwEzQwlQz3WAKWBJweNhJJv3KV409wrlqAkxdjQBKN8L3YQ2%2BPxbCNIo%2BVsGhnDYwqUp3cr480OT%2Bh%2BUt9b%2ByPNV7G18502Y5bjK1FdP0k2OM9nsTcKNZntA4qiyy0mCFlVpg0%2FT0mod%2B30w8%2Bcry%2FiNxgeBEfKJFBRfc1kR01AHD5WcvQBzqaKq6kOfE2xy5xeI0DpDotb1fw%2B6G1UxGIq8Q7JNsoh8qbkWEc5gjirYoPbIkEv%2FgLqqRiJKJVwnqcpvpHBTZnOWhquC77a0CTJwIAXe6%2B7dnhjQJLJ2trlh%2B9W6uZ%2BMKnArL4GOqUBBMLq%2BaND9aAsQbAQtCxz%2BUspJKeIELjv5%2BfM7yqF%2FnAkMWw6wikc5MqA%2FfiU%2BRhoN7a47APMF8Qy3K6bFfMOfTJtbN8VfETpmbhRI2fPQm644fbFrBQaEwhDmxzby6XJE%2Fy3cB1%2FxSGJvwicCNXrZ5xsE9D35dgO6BiFWXYXy3S7MXS8HU4y38tllGxGfROlrKrjK3dvopCWrVFgH09sYtTyQHmt&X-Amz-Signature=19f290832b8667c2a2ba5339af7adf9a8c76cc8876e8c549fa95de2d7d837a19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

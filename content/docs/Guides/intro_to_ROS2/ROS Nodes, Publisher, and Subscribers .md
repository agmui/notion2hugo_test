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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JULJ7SZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCEtft63zmlFZUBvWMK%2F2vedMHsv6N6ClMNSAkfii7KEAIhAKefdnEd%2BUhIPLQ6%2FSw%2FvDwlIwvvuaZPZjS7pRdAeX%2FEKv8DCG0QABoMNjM3NDIzMTgzODA1Igxf8TR57X4Zxxjft1Eq3APXPUDzzbcsIf45ilP4aa0E8EKgpYoEblcst%2FLSAuqJDKEwIqHX2rc0sv7Ol4d6iPfbr4541S6dkVIGrsyU7LTlWu1474u%2B6KE1uGy2SGlu8HxQPLe0eoL7g4sMAVf9P%2B8N5zOe7WfG60FkVEE4IAdQOfGBmsm1foCs2jhaPIzXZERjBnXHvCvIg3D%2FSesdkvjeWHNkkl%2FHok4%2FT91cqGLWr9yG780PMY%2ButJ7Pwulk6iwuObVLbUKuvBYpAl3LFz71HCN72%2FhrZggjYwWpf9w5stpbcsjhZK727%2FdIzW63cyVqztAjH0QCBqQxPF08UEnGC0UPa4nqiStmxjug7Lu%2FAV16qk%2Bx7zxLCcjjij7kbaGgLan8htnFfBwHNUdbtxNLbp3Vlu5LN06im9M0VwmpTkuT%2BS5aAbKhdTa9hSJ%2F6fo3S%2BwsdF1VcyXLbCOnpMqQjOKw8wrCINjVhT%2BA7WpF3xvAOoxdTT5Cd2hp2vHO2gwDVuvWtFz%2Bys93FtbjZx7YQIfBBSe8rNHpDQpz%2Fc6LfT8eiYmPRisvHjtRkRQ28URu4oTX0MqFpP%2BbIeSZKD1FEXKZ356K9rhkZhbRSIdiZceemStjbr%2Fu%2FgcBYlWoF1MvDelRPsLyQPGoADC17uHDBjqkAd6n37nSNcFymyRh3cRSrWH8q3bmciT1leW3psCJkk6yCmV3R2qTuBbgsbwFE51sjnSt03cVC041JdT%2FJ%2FdL9GxZ0blRrWoKk4RA7%2FGsLi1QG7KI4we%2FCjYlqYW2RGm0G8Ybj0eAnqpKwTjSajh3WnmGo9Kv0EgEKcNkB43oNG6AXEpT3mrHI4TpsBq7nT%2BgTaUUTP9v4aikNUGduZWCzNHVnFyt&X-Amz-Signature=ef0c08dad2331f8ebb2f3ef3282ecaf1f395e5da4b0513922300fe25b1709ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JULJ7SZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCEtft63zmlFZUBvWMK%2F2vedMHsv6N6ClMNSAkfii7KEAIhAKefdnEd%2BUhIPLQ6%2FSw%2FvDwlIwvvuaZPZjS7pRdAeX%2FEKv8DCG0QABoMNjM3NDIzMTgzODA1Igxf8TR57X4Zxxjft1Eq3APXPUDzzbcsIf45ilP4aa0E8EKgpYoEblcst%2FLSAuqJDKEwIqHX2rc0sv7Ol4d6iPfbr4541S6dkVIGrsyU7LTlWu1474u%2B6KE1uGy2SGlu8HxQPLe0eoL7g4sMAVf9P%2B8N5zOe7WfG60FkVEE4IAdQOfGBmsm1foCs2jhaPIzXZERjBnXHvCvIg3D%2FSesdkvjeWHNkkl%2FHok4%2FT91cqGLWr9yG780PMY%2ButJ7Pwulk6iwuObVLbUKuvBYpAl3LFz71HCN72%2FhrZggjYwWpf9w5stpbcsjhZK727%2FdIzW63cyVqztAjH0QCBqQxPF08UEnGC0UPa4nqiStmxjug7Lu%2FAV16qk%2Bx7zxLCcjjij7kbaGgLan8htnFfBwHNUdbtxNLbp3Vlu5LN06im9M0VwmpTkuT%2BS5aAbKhdTa9hSJ%2F6fo3S%2BwsdF1VcyXLbCOnpMqQjOKw8wrCINjVhT%2BA7WpF3xvAOoxdTT5Cd2hp2vHO2gwDVuvWtFz%2Bys93FtbjZx7YQIfBBSe8rNHpDQpz%2Fc6LfT8eiYmPRisvHjtRkRQ28URu4oTX0MqFpP%2BbIeSZKD1FEXKZ356K9rhkZhbRSIdiZceemStjbr%2Fu%2FgcBYlWoF1MvDelRPsLyQPGoADC17uHDBjqkAd6n37nSNcFymyRh3cRSrWH8q3bmciT1leW3psCJkk6yCmV3R2qTuBbgsbwFE51sjnSt03cVC041JdT%2FJ%2FdL9GxZ0blRrWoKk4RA7%2FGsLi1QG7KI4we%2FCjYlqYW2RGm0G8Ybj0eAnqpKwTjSajh3WnmGo9Kv0EgEKcNkB43oNG6AXEpT3mrHI4TpsBq7nT%2BgTaUUTP9v4aikNUGduZWCzNHVnFyt&X-Amz-Signature=41d22e14b43e35d9660cf6ce4739e09353d302d1aff0fbe9fad0ea846d90788e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JULJ7SZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCEtft63zmlFZUBvWMK%2F2vedMHsv6N6ClMNSAkfii7KEAIhAKefdnEd%2BUhIPLQ6%2FSw%2FvDwlIwvvuaZPZjS7pRdAeX%2FEKv8DCG0QABoMNjM3NDIzMTgzODA1Igxf8TR57X4Zxxjft1Eq3APXPUDzzbcsIf45ilP4aa0E8EKgpYoEblcst%2FLSAuqJDKEwIqHX2rc0sv7Ol4d6iPfbr4541S6dkVIGrsyU7LTlWu1474u%2B6KE1uGy2SGlu8HxQPLe0eoL7g4sMAVf9P%2B8N5zOe7WfG60FkVEE4IAdQOfGBmsm1foCs2jhaPIzXZERjBnXHvCvIg3D%2FSesdkvjeWHNkkl%2FHok4%2FT91cqGLWr9yG780PMY%2ButJ7Pwulk6iwuObVLbUKuvBYpAl3LFz71HCN72%2FhrZggjYwWpf9w5stpbcsjhZK727%2FdIzW63cyVqztAjH0QCBqQxPF08UEnGC0UPa4nqiStmxjug7Lu%2FAV16qk%2Bx7zxLCcjjij7kbaGgLan8htnFfBwHNUdbtxNLbp3Vlu5LN06im9M0VwmpTkuT%2BS5aAbKhdTa9hSJ%2F6fo3S%2BwsdF1VcyXLbCOnpMqQjOKw8wrCINjVhT%2BA7WpF3xvAOoxdTT5Cd2hp2vHO2gwDVuvWtFz%2Bys93FtbjZx7YQIfBBSe8rNHpDQpz%2Fc6LfT8eiYmPRisvHjtRkRQ28URu4oTX0MqFpP%2BbIeSZKD1FEXKZ356K9rhkZhbRSIdiZceemStjbr%2Fu%2FgcBYlWoF1MvDelRPsLyQPGoADC17uHDBjqkAd6n37nSNcFymyRh3cRSrWH8q3bmciT1leW3psCJkk6yCmV3R2qTuBbgsbwFE51sjnSt03cVC041JdT%2FJ%2FdL9GxZ0blRrWoKk4RA7%2FGsLi1QG7KI4we%2FCjYlqYW2RGm0G8Ybj0eAnqpKwTjSajh3WnmGo9Kv0EgEKcNkB43oNG6AXEpT3mrHI4TpsBq7nT%2BgTaUUTP9v4aikNUGduZWCzNHVnFyt&X-Amz-Signature=fdc3b32f41a37f2e7a05fb1aa9c64aebd105b31b4deb697011bd319c785f3026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JULJ7SZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCEtft63zmlFZUBvWMK%2F2vedMHsv6N6ClMNSAkfii7KEAIhAKefdnEd%2BUhIPLQ6%2FSw%2FvDwlIwvvuaZPZjS7pRdAeX%2FEKv8DCG0QABoMNjM3NDIzMTgzODA1Igxf8TR57X4Zxxjft1Eq3APXPUDzzbcsIf45ilP4aa0E8EKgpYoEblcst%2FLSAuqJDKEwIqHX2rc0sv7Ol4d6iPfbr4541S6dkVIGrsyU7LTlWu1474u%2B6KE1uGy2SGlu8HxQPLe0eoL7g4sMAVf9P%2B8N5zOe7WfG60FkVEE4IAdQOfGBmsm1foCs2jhaPIzXZERjBnXHvCvIg3D%2FSesdkvjeWHNkkl%2FHok4%2FT91cqGLWr9yG780PMY%2ButJ7Pwulk6iwuObVLbUKuvBYpAl3LFz71HCN72%2FhrZggjYwWpf9w5stpbcsjhZK727%2FdIzW63cyVqztAjH0QCBqQxPF08UEnGC0UPa4nqiStmxjug7Lu%2FAV16qk%2Bx7zxLCcjjij7kbaGgLan8htnFfBwHNUdbtxNLbp3Vlu5LN06im9M0VwmpTkuT%2BS5aAbKhdTa9hSJ%2F6fo3S%2BwsdF1VcyXLbCOnpMqQjOKw8wrCINjVhT%2BA7WpF3xvAOoxdTT5Cd2hp2vHO2gwDVuvWtFz%2Bys93FtbjZx7YQIfBBSe8rNHpDQpz%2Fc6LfT8eiYmPRisvHjtRkRQ28URu4oTX0MqFpP%2BbIeSZKD1FEXKZ356K9rhkZhbRSIdiZceemStjbr%2Fu%2FgcBYlWoF1MvDelRPsLyQPGoADC17uHDBjqkAd6n37nSNcFymyRh3cRSrWH8q3bmciT1leW3psCJkk6yCmV3R2qTuBbgsbwFE51sjnSt03cVC041JdT%2FJ%2FdL9GxZ0blRrWoKk4RA7%2FGsLi1QG7KI4we%2FCjYlqYW2RGm0G8Ybj0eAnqpKwTjSajh3WnmGo9Kv0EgEKcNkB43oNG6AXEpT3mrHI4TpsBq7nT%2BgTaUUTP9v4aikNUGduZWCzNHVnFyt&X-Amz-Signature=8477bc888875e216303f9a1fde85239c47d78b8d45370fd5e044292fea2c6cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JULJ7SZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCEtft63zmlFZUBvWMK%2F2vedMHsv6N6ClMNSAkfii7KEAIhAKefdnEd%2BUhIPLQ6%2FSw%2FvDwlIwvvuaZPZjS7pRdAeX%2FEKv8DCG0QABoMNjM3NDIzMTgzODA1Igxf8TR57X4Zxxjft1Eq3APXPUDzzbcsIf45ilP4aa0E8EKgpYoEblcst%2FLSAuqJDKEwIqHX2rc0sv7Ol4d6iPfbr4541S6dkVIGrsyU7LTlWu1474u%2B6KE1uGy2SGlu8HxQPLe0eoL7g4sMAVf9P%2B8N5zOe7WfG60FkVEE4IAdQOfGBmsm1foCs2jhaPIzXZERjBnXHvCvIg3D%2FSesdkvjeWHNkkl%2FHok4%2FT91cqGLWr9yG780PMY%2ButJ7Pwulk6iwuObVLbUKuvBYpAl3LFz71HCN72%2FhrZggjYwWpf9w5stpbcsjhZK727%2FdIzW63cyVqztAjH0QCBqQxPF08UEnGC0UPa4nqiStmxjug7Lu%2FAV16qk%2Bx7zxLCcjjij7kbaGgLan8htnFfBwHNUdbtxNLbp3Vlu5LN06im9M0VwmpTkuT%2BS5aAbKhdTa9hSJ%2F6fo3S%2BwsdF1VcyXLbCOnpMqQjOKw8wrCINjVhT%2BA7WpF3xvAOoxdTT5Cd2hp2vHO2gwDVuvWtFz%2Bys93FtbjZx7YQIfBBSe8rNHpDQpz%2Fc6LfT8eiYmPRisvHjtRkRQ28URu4oTX0MqFpP%2BbIeSZKD1FEXKZ356K9rhkZhbRSIdiZceemStjbr%2Fu%2FgcBYlWoF1MvDelRPsLyQPGoADC17uHDBjqkAd6n37nSNcFymyRh3cRSrWH8q3bmciT1leW3psCJkk6yCmV3R2qTuBbgsbwFE51sjnSt03cVC041JdT%2FJ%2FdL9GxZ0blRrWoKk4RA7%2FGsLi1QG7KI4we%2FCjYlqYW2RGm0G8Ybj0eAnqpKwTjSajh3WnmGo9Kv0EgEKcNkB43oNG6AXEpT3mrHI4TpsBq7nT%2BgTaUUTP9v4aikNUGduZWCzNHVnFyt&X-Amz-Signature=ccc45b311d8f7d714d467294e817f56a59e679f6aec9eff6a207fb9c817ea246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JULJ7SZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCEtft63zmlFZUBvWMK%2F2vedMHsv6N6ClMNSAkfii7KEAIhAKefdnEd%2BUhIPLQ6%2FSw%2FvDwlIwvvuaZPZjS7pRdAeX%2FEKv8DCG0QABoMNjM3NDIzMTgzODA1Igxf8TR57X4Zxxjft1Eq3APXPUDzzbcsIf45ilP4aa0E8EKgpYoEblcst%2FLSAuqJDKEwIqHX2rc0sv7Ol4d6iPfbr4541S6dkVIGrsyU7LTlWu1474u%2B6KE1uGy2SGlu8HxQPLe0eoL7g4sMAVf9P%2B8N5zOe7WfG60FkVEE4IAdQOfGBmsm1foCs2jhaPIzXZERjBnXHvCvIg3D%2FSesdkvjeWHNkkl%2FHok4%2FT91cqGLWr9yG780PMY%2ButJ7Pwulk6iwuObVLbUKuvBYpAl3LFz71HCN72%2FhrZggjYwWpf9w5stpbcsjhZK727%2FdIzW63cyVqztAjH0QCBqQxPF08UEnGC0UPa4nqiStmxjug7Lu%2FAV16qk%2Bx7zxLCcjjij7kbaGgLan8htnFfBwHNUdbtxNLbp3Vlu5LN06im9M0VwmpTkuT%2BS5aAbKhdTa9hSJ%2F6fo3S%2BwsdF1VcyXLbCOnpMqQjOKw8wrCINjVhT%2BA7WpF3xvAOoxdTT5Cd2hp2vHO2gwDVuvWtFz%2Bys93FtbjZx7YQIfBBSe8rNHpDQpz%2Fc6LfT8eiYmPRisvHjtRkRQ28URu4oTX0MqFpP%2BbIeSZKD1FEXKZ356K9rhkZhbRSIdiZceemStjbr%2Fu%2FgcBYlWoF1MvDelRPsLyQPGoADC17uHDBjqkAd6n37nSNcFymyRh3cRSrWH8q3bmciT1leW3psCJkk6yCmV3R2qTuBbgsbwFE51sjnSt03cVC041JdT%2FJ%2FdL9GxZ0blRrWoKk4RA7%2FGsLi1QG7KI4we%2FCjYlqYW2RGm0G8Ybj0eAnqpKwTjSajh3WnmGo9Kv0EgEKcNkB43oNG6AXEpT3mrHI4TpsBq7nT%2BgTaUUTP9v4aikNUGduZWCzNHVnFyt&X-Amz-Signature=a8c700d7f3855bcb010647d1df0379aaa740e70879a4f59b8f18ed99d3dbe3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JULJ7SZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCEtft63zmlFZUBvWMK%2F2vedMHsv6N6ClMNSAkfii7KEAIhAKefdnEd%2BUhIPLQ6%2FSw%2FvDwlIwvvuaZPZjS7pRdAeX%2FEKv8DCG0QABoMNjM3NDIzMTgzODA1Igxf8TR57X4Zxxjft1Eq3APXPUDzzbcsIf45ilP4aa0E8EKgpYoEblcst%2FLSAuqJDKEwIqHX2rc0sv7Ol4d6iPfbr4541S6dkVIGrsyU7LTlWu1474u%2B6KE1uGy2SGlu8HxQPLe0eoL7g4sMAVf9P%2B8N5zOe7WfG60FkVEE4IAdQOfGBmsm1foCs2jhaPIzXZERjBnXHvCvIg3D%2FSesdkvjeWHNkkl%2FHok4%2FT91cqGLWr9yG780PMY%2ButJ7Pwulk6iwuObVLbUKuvBYpAl3LFz71HCN72%2FhrZggjYwWpf9w5stpbcsjhZK727%2FdIzW63cyVqztAjH0QCBqQxPF08UEnGC0UPa4nqiStmxjug7Lu%2FAV16qk%2Bx7zxLCcjjij7kbaGgLan8htnFfBwHNUdbtxNLbp3Vlu5LN06im9M0VwmpTkuT%2BS5aAbKhdTa9hSJ%2F6fo3S%2BwsdF1VcyXLbCOnpMqQjOKw8wrCINjVhT%2BA7WpF3xvAOoxdTT5Cd2hp2vHO2gwDVuvWtFz%2Bys93FtbjZx7YQIfBBSe8rNHpDQpz%2Fc6LfT8eiYmPRisvHjtRkRQ28URu4oTX0MqFpP%2BbIeSZKD1FEXKZ356K9rhkZhbRSIdiZceemStjbr%2Fu%2FgcBYlWoF1MvDelRPsLyQPGoADC17uHDBjqkAd6n37nSNcFymyRh3cRSrWH8q3bmciT1leW3psCJkk6yCmV3R2qTuBbgsbwFE51sjnSt03cVC041JdT%2FJ%2FdL9GxZ0blRrWoKk4RA7%2FGsLi1QG7KI4we%2FCjYlqYW2RGm0G8Ybj0eAnqpKwTjSajh3WnmGo9Kv0EgEKcNkB43oNG6AXEpT3mrHI4TpsBq7nT%2BgTaUUTP9v4aikNUGduZWCzNHVnFyt&X-Amz-Signature=7bd07bca23a0090f2b27d36390ca90a7b4b41a3380afe1e391ad95486c1aa9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JULJ7SZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCEtft63zmlFZUBvWMK%2F2vedMHsv6N6ClMNSAkfii7KEAIhAKefdnEd%2BUhIPLQ6%2FSw%2FvDwlIwvvuaZPZjS7pRdAeX%2FEKv8DCG0QABoMNjM3NDIzMTgzODA1Igxf8TR57X4Zxxjft1Eq3APXPUDzzbcsIf45ilP4aa0E8EKgpYoEblcst%2FLSAuqJDKEwIqHX2rc0sv7Ol4d6iPfbr4541S6dkVIGrsyU7LTlWu1474u%2B6KE1uGy2SGlu8HxQPLe0eoL7g4sMAVf9P%2B8N5zOe7WfG60FkVEE4IAdQOfGBmsm1foCs2jhaPIzXZERjBnXHvCvIg3D%2FSesdkvjeWHNkkl%2FHok4%2FT91cqGLWr9yG780PMY%2ButJ7Pwulk6iwuObVLbUKuvBYpAl3LFz71HCN72%2FhrZggjYwWpf9w5stpbcsjhZK727%2FdIzW63cyVqztAjH0QCBqQxPF08UEnGC0UPa4nqiStmxjug7Lu%2FAV16qk%2Bx7zxLCcjjij7kbaGgLan8htnFfBwHNUdbtxNLbp3Vlu5LN06im9M0VwmpTkuT%2BS5aAbKhdTa9hSJ%2F6fo3S%2BwsdF1VcyXLbCOnpMqQjOKw8wrCINjVhT%2BA7WpF3xvAOoxdTT5Cd2hp2vHO2gwDVuvWtFz%2Bys93FtbjZx7YQIfBBSe8rNHpDQpz%2Fc6LfT8eiYmPRisvHjtRkRQ28URu4oTX0MqFpP%2BbIeSZKD1FEXKZ356K9rhkZhbRSIdiZceemStjbr%2Fu%2FgcBYlWoF1MvDelRPsLyQPGoADC17uHDBjqkAd6n37nSNcFymyRh3cRSrWH8q3bmciT1leW3psCJkk6yCmV3R2qTuBbgsbwFE51sjnSt03cVC041JdT%2FJ%2FdL9GxZ0blRrWoKk4RA7%2FGsLi1QG7KI4we%2FCjYlqYW2RGm0G8Ybj0eAnqpKwTjSajh3WnmGo9Kv0EgEKcNkB43oNG6AXEpT3mrHI4TpsBq7nT%2BgTaUUTP9v4aikNUGduZWCzNHVnFyt&X-Amz-Signature=83b3662f22a5297837dc284408724dbec719aed47a305297e8eb2921dc00ebf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

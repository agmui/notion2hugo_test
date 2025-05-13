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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZBF4XZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDEuMTvC8ylTpNF8szo0pv8FUdZpl0Hq6%2FQwOM%2FoIed8QIgJEx00CAaOxit1zbRTjxRdOMy3n1ygl97Ocz0rOzj240qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXVXsISUpVDiK4n5CrcA39P4NWhKVjYSzCbqzpHMqQP0cyS0X2Y301LZyMJhSPYPDzK3ciybC01fLw8pN5NphpFpioC7JmLlVKuM6W1W2cGIVo%2FXbV04B3vtnoOo9VzhkIZvrhWLBN7tzh2LksRPKKItR4ne5Ix4mXqrJ0tuOqcHzkiyg1R3MS5WXSqSX10uqmoYA6p%2FNSeGRHeu%2FKxKwgP3oW0qQuwdKjKK7M0%2FBeiZHZqiG6GMrAuZHuYpp6GeTREydE0IVuhruoYInbWGKaEXbNiIGgv4JmMUny3USaJvDv8R9hBaCt%2F8dY6Ns3CqJWhj6DqMbKgq0j7tpVjAX1u6QUW2SZ43wU4PgyppFNHmEAgzFdeIdwmt4LtPRSWvRlocnGqEh8uhEGQ2jhfd5X%2BmxKcKmeoAYCaNQOQpTCwo2oLVnsKHATr3YXTHqZSAtvlpVi2WsoNvnk9Lg7OBSgeG%2FrcFFaWu5VcP8flfufKX0i5rrt9wfX8GSS1eiKhvQkYf17VYVDejtqMLA1QjBs1lARHPbsT1tMEoTkEuV4mX0qciXgXv1Mv22tCCHCQ0SbM0IFJ8cJP8e%2FEw2zK%2FeVC8JhMjDQqJ9w9z3dl7FpifWOnxBlzsB1f%2F2sk8MniuBREkUxl%2FbZANO0OMP6MjcEGOqUB9vlQhzCsN01c7BFHou0Fuw5Fcu41zXMoAGw3uYGYEHm1ICywwaduUmWdrwB6K7FONI%2FDT8MpsH2cCUCtR9y5PPJHH%2BJYXTY0BehRxUIaOFo%2FnDMmTALgUZXWvVvs%2Fs%2FD9ehefqYB8rewQNAgzYO%2FUwVy%2BgHL9L52twHQqo%2F%2FnSGoJnuIUteujDu%2BufxJCglkvU908FFEQH7qvxhROs02nATyo81%2B&X-Amz-Signature=730ed5ce89ee95975ee1b8c9f22e4107091619ce904a8226569008ec7732a6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZBF4XZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDEuMTvC8ylTpNF8szo0pv8FUdZpl0Hq6%2FQwOM%2FoIed8QIgJEx00CAaOxit1zbRTjxRdOMy3n1ygl97Ocz0rOzj240qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXVXsISUpVDiK4n5CrcA39P4NWhKVjYSzCbqzpHMqQP0cyS0X2Y301LZyMJhSPYPDzK3ciybC01fLw8pN5NphpFpioC7JmLlVKuM6W1W2cGIVo%2FXbV04B3vtnoOo9VzhkIZvrhWLBN7tzh2LksRPKKItR4ne5Ix4mXqrJ0tuOqcHzkiyg1R3MS5WXSqSX10uqmoYA6p%2FNSeGRHeu%2FKxKwgP3oW0qQuwdKjKK7M0%2FBeiZHZqiG6GMrAuZHuYpp6GeTREydE0IVuhruoYInbWGKaEXbNiIGgv4JmMUny3USaJvDv8R9hBaCt%2F8dY6Ns3CqJWhj6DqMbKgq0j7tpVjAX1u6QUW2SZ43wU4PgyppFNHmEAgzFdeIdwmt4LtPRSWvRlocnGqEh8uhEGQ2jhfd5X%2BmxKcKmeoAYCaNQOQpTCwo2oLVnsKHATr3YXTHqZSAtvlpVi2WsoNvnk9Lg7OBSgeG%2FrcFFaWu5VcP8flfufKX0i5rrt9wfX8GSS1eiKhvQkYf17VYVDejtqMLA1QjBs1lARHPbsT1tMEoTkEuV4mX0qciXgXv1Mv22tCCHCQ0SbM0IFJ8cJP8e%2FEw2zK%2FeVC8JhMjDQqJ9w9z3dl7FpifWOnxBlzsB1f%2F2sk8MniuBREkUxl%2FbZANO0OMP6MjcEGOqUB9vlQhzCsN01c7BFHou0Fuw5Fcu41zXMoAGw3uYGYEHm1ICywwaduUmWdrwB6K7FONI%2FDT8MpsH2cCUCtR9y5PPJHH%2BJYXTY0BehRxUIaOFo%2FnDMmTALgUZXWvVvs%2Fs%2FD9ehefqYB8rewQNAgzYO%2FUwVy%2BgHL9L52twHQqo%2F%2FnSGoJnuIUteujDu%2BufxJCglkvU908FFEQH7qvxhROs02nATyo81%2B&X-Amz-Signature=81b96168b73b28dfb6cb3881d84d907785c8658a8755ba7afcf9031e2f433131&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZBF4XZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDEuMTvC8ylTpNF8szo0pv8FUdZpl0Hq6%2FQwOM%2FoIed8QIgJEx00CAaOxit1zbRTjxRdOMy3n1ygl97Ocz0rOzj240qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXVXsISUpVDiK4n5CrcA39P4NWhKVjYSzCbqzpHMqQP0cyS0X2Y301LZyMJhSPYPDzK3ciybC01fLw8pN5NphpFpioC7JmLlVKuM6W1W2cGIVo%2FXbV04B3vtnoOo9VzhkIZvrhWLBN7tzh2LksRPKKItR4ne5Ix4mXqrJ0tuOqcHzkiyg1R3MS5WXSqSX10uqmoYA6p%2FNSeGRHeu%2FKxKwgP3oW0qQuwdKjKK7M0%2FBeiZHZqiG6GMrAuZHuYpp6GeTREydE0IVuhruoYInbWGKaEXbNiIGgv4JmMUny3USaJvDv8R9hBaCt%2F8dY6Ns3CqJWhj6DqMbKgq0j7tpVjAX1u6QUW2SZ43wU4PgyppFNHmEAgzFdeIdwmt4LtPRSWvRlocnGqEh8uhEGQ2jhfd5X%2BmxKcKmeoAYCaNQOQpTCwo2oLVnsKHATr3YXTHqZSAtvlpVi2WsoNvnk9Lg7OBSgeG%2FrcFFaWu5VcP8flfufKX0i5rrt9wfX8GSS1eiKhvQkYf17VYVDejtqMLA1QjBs1lARHPbsT1tMEoTkEuV4mX0qciXgXv1Mv22tCCHCQ0SbM0IFJ8cJP8e%2FEw2zK%2FeVC8JhMjDQqJ9w9z3dl7FpifWOnxBlzsB1f%2F2sk8MniuBREkUxl%2FbZANO0OMP6MjcEGOqUB9vlQhzCsN01c7BFHou0Fuw5Fcu41zXMoAGw3uYGYEHm1ICywwaduUmWdrwB6K7FONI%2FDT8MpsH2cCUCtR9y5PPJHH%2BJYXTY0BehRxUIaOFo%2FnDMmTALgUZXWvVvs%2Fs%2FD9ehefqYB8rewQNAgzYO%2FUwVy%2BgHL9L52twHQqo%2F%2FnSGoJnuIUteujDu%2BufxJCglkvU908FFEQH7qvxhROs02nATyo81%2B&X-Amz-Signature=75ed7fb58944fd683f6f0fab0a928fe2a848e7f6f1593c96b6f53ba63ceff8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZBF4XZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDEuMTvC8ylTpNF8szo0pv8FUdZpl0Hq6%2FQwOM%2FoIed8QIgJEx00CAaOxit1zbRTjxRdOMy3n1ygl97Ocz0rOzj240qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXVXsISUpVDiK4n5CrcA39P4NWhKVjYSzCbqzpHMqQP0cyS0X2Y301LZyMJhSPYPDzK3ciybC01fLw8pN5NphpFpioC7JmLlVKuM6W1W2cGIVo%2FXbV04B3vtnoOo9VzhkIZvrhWLBN7tzh2LksRPKKItR4ne5Ix4mXqrJ0tuOqcHzkiyg1R3MS5WXSqSX10uqmoYA6p%2FNSeGRHeu%2FKxKwgP3oW0qQuwdKjKK7M0%2FBeiZHZqiG6GMrAuZHuYpp6GeTREydE0IVuhruoYInbWGKaEXbNiIGgv4JmMUny3USaJvDv8R9hBaCt%2F8dY6Ns3CqJWhj6DqMbKgq0j7tpVjAX1u6QUW2SZ43wU4PgyppFNHmEAgzFdeIdwmt4LtPRSWvRlocnGqEh8uhEGQ2jhfd5X%2BmxKcKmeoAYCaNQOQpTCwo2oLVnsKHATr3YXTHqZSAtvlpVi2WsoNvnk9Lg7OBSgeG%2FrcFFaWu5VcP8flfufKX0i5rrt9wfX8GSS1eiKhvQkYf17VYVDejtqMLA1QjBs1lARHPbsT1tMEoTkEuV4mX0qciXgXv1Mv22tCCHCQ0SbM0IFJ8cJP8e%2FEw2zK%2FeVC8JhMjDQqJ9w9z3dl7FpifWOnxBlzsB1f%2F2sk8MniuBREkUxl%2FbZANO0OMP6MjcEGOqUB9vlQhzCsN01c7BFHou0Fuw5Fcu41zXMoAGw3uYGYEHm1ICywwaduUmWdrwB6K7FONI%2FDT8MpsH2cCUCtR9y5PPJHH%2BJYXTY0BehRxUIaOFo%2FnDMmTALgUZXWvVvs%2Fs%2FD9ehefqYB8rewQNAgzYO%2FUwVy%2BgHL9L52twHQqo%2F%2FnSGoJnuIUteujDu%2BufxJCglkvU908FFEQH7qvxhROs02nATyo81%2B&X-Amz-Signature=17628569ac24551210a3022b0b6bbabf34724554fd9eb4416d3107fe8056eb89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZBF4XZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDEuMTvC8ylTpNF8szo0pv8FUdZpl0Hq6%2FQwOM%2FoIed8QIgJEx00CAaOxit1zbRTjxRdOMy3n1ygl97Ocz0rOzj240qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXVXsISUpVDiK4n5CrcA39P4NWhKVjYSzCbqzpHMqQP0cyS0X2Y301LZyMJhSPYPDzK3ciybC01fLw8pN5NphpFpioC7JmLlVKuM6W1W2cGIVo%2FXbV04B3vtnoOo9VzhkIZvrhWLBN7tzh2LksRPKKItR4ne5Ix4mXqrJ0tuOqcHzkiyg1R3MS5WXSqSX10uqmoYA6p%2FNSeGRHeu%2FKxKwgP3oW0qQuwdKjKK7M0%2FBeiZHZqiG6GMrAuZHuYpp6GeTREydE0IVuhruoYInbWGKaEXbNiIGgv4JmMUny3USaJvDv8R9hBaCt%2F8dY6Ns3CqJWhj6DqMbKgq0j7tpVjAX1u6QUW2SZ43wU4PgyppFNHmEAgzFdeIdwmt4LtPRSWvRlocnGqEh8uhEGQ2jhfd5X%2BmxKcKmeoAYCaNQOQpTCwo2oLVnsKHATr3YXTHqZSAtvlpVi2WsoNvnk9Lg7OBSgeG%2FrcFFaWu5VcP8flfufKX0i5rrt9wfX8GSS1eiKhvQkYf17VYVDejtqMLA1QjBs1lARHPbsT1tMEoTkEuV4mX0qciXgXv1Mv22tCCHCQ0SbM0IFJ8cJP8e%2FEw2zK%2FeVC8JhMjDQqJ9w9z3dl7FpifWOnxBlzsB1f%2F2sk8MniuBREkUxl%2FbZANO0OMP6MjcEGOqUB9vlQhzCsN01c7BFHou0Fuw5Fcu41zXMoAGw3uYGYEHm1ICywwaduUmWdrwB6K7FONI%2FDT8MpsH2cCUCtR9y5PPJHH%2BJYXTY0BehRxUIaOFo%2FnDMmTALgUZXWvVvs%2Fs%2FD9ehefqYB8rewQNAgzYO%2FUwVy%2BgHL9L52twHQqo%2F%2FnSGoJnuIUteujDu%2BufxJCglkvU908FFEQH7qvxhROs02nATyo81%2B&X-Amz-Signature=678a76e4098b7600252172ed77f0e5ac770518ef5d981984fea98bb8d2224f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZBF4XZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDEuMTvC8ylTpNF8szo0pv8FUdZpl0Hq6%2FQwOM%2FoIed8QIgJEx00CAaOxit1zbRTjxRdOMy3n1ygl97Ocz0rOzj240qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXVXsISUpVDiK4n5CrcA39P4NWhKVjYSzCbqzpHMqQP0cyS0X2Y301LZyMJhSPYPDzK3ciybC01fLw8pN5NphpFpioC7JmLlVKuM6W1W2cGIVo%2FXbV04B3vtnoOo9VzhkIZvrhWLBN7tzh2LksRPKKItR4ne5Ix4mXqrJ0tuOqcHzkiyg1R3MS5WXSqSX10uqmoYA6p%2FNSeGRHeu%2FKxKwgP3oW0qQuwdKjKK7M0%2FBeiZHZqiG6GMrAuZHuYpp6GeTREydE0IVuhruoYInbWGKaEXbNiIGgv4JmMUny3USaJvDv8R9hBaCt%2F8dY6Ns3CqJWhj6DqMbKgq0j7tpVjAX1u6QUW2SZ43wU4PgyppFNHmEAgzFdeIdwmt4LtPRSWvRlocnGqEh8uhEGQ2jhfd5X%2BmxKcKmeoAYCaNQOQpTCwo2oLVnsKHATr3YXTHqZSAtvlpVi2WsoNvnk9Lg7OBSgeG%2FrcFFaWu5VcP8flfufKX0i5rrt9wfX8GSS1eiKhvQkYf17VYVDejtqMLA1QjBs1lARHPbsT1tMEoTkEuV4mX0qciXgXv1Mv22tCCHCQ0SbM0IFJ8cJP8e%2FEw2zK%2FeVC8JhMjDQqJ9w9z3dl7FpifWOnxBlzsB1f%2F2sk8MniuBREkUxl%2FbZANO0OMP6MjcEGOqUB9vlQhzCsN01c7BFHou0Fuw5Fcu41zXMoAGw3uYGYEHm1ICywwaduUmWdrwB6K7FONI%2FDT8MpsH2cCUCtR9y5PPJHH%2BJYXTY0BehRxUIaOFo%2FnDMmTALgUZXWvVvs%2Fs%2FD9ehefqYB8rewQNAgzYO%2FUwVy%2BgHL9L52twHQqo%2F%2FnSGoJnuIUteujDu%2BufxJCglkvU908FFEQH7qvxhROs02nATyo81%2B&X-Amz-Signature=41393906d2586e19934476db14619aac8384acef010f7231523f7d2d61994a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZBF4XZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDEuMTvC8ylTpNF8szo0pv8FUdZpl0Hq6%2FQwOM%2FoIed8QIgJEx00CAaOxit1zbRTjxRdOMy3n1ygl97Ocz0rOzj240qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXVXsISUpVDiK4n5CrcA39P4NWhKVjYSzCbqzpHMqQP0cyS0X2Y301LZyMJhSPYPDzK3ciybC01fLw8pN5NphpFpioC7JmLlVKuM6W1W2cGIVo%2FXbV04B3vtnoOo9VzhkIZvrhWLBN7tzh2LksRPKKItR4ne5Ix4mXqrJ0tuOqcHzkiyg1R3MS5WXSqSX10uqmoYA6p%2FNSeGRHeu%2FKxKwgP3oW0qQuwdKjKK7M0%2FBeiZHZqiG6GMrAuZHuYpp6GeTREydE0IVuhruoYInbWGKaEXbNiIGgv4JmMUny3USaJvDv8R9hBaCt%2F8dY6Ns3CqJWhj6DqMbKgq0j7tpVjAX1u6QUW2SZ43wU4PgyppFNHmEAgzFdeIdwmt4LtPRSWvRlocnGqEh8uhEGQ2jhfd5X%2BmxKcKmeoAYCaNQOQpTCwo2oLVnsKHATr3YXTHqZSAtvlpVi2WsoNvnk9Lg7OBSgeG%2FrcFFaWu5VcP8flfufKX0i5rrt9wfX8GSS1eiKhvQkYf17VYVDejtqMLA1QjBs1lARHPbsT1tMEoTkEuV4mX0qciXgXv1Mv22tCCHCQ0SbM0IFJ8cJP8e%2FEw2zK%2FeVC8JhMjDQqJ9w9z3dl7FpifWOnxBlzsB1f%2F2sk8MniuBREkUxl%2FbZANO0OMP6MjcEGOqUB9vlQhzCsN01c7BFHou0Fuw5Fcu41zXMoAGw3uYGYEHm1ICywwaduUmWdrwB6K7FONI%2FDT8MpsH2cCUCtR9y5PPJHH%2BJYXTY0BehRxUIaOFo%2FnDMmTALgUZXWvVvs%2Fs%2FD9ehefqYB8rewQNAgzYO%2FUwVy%2BgHL9L52twHQqo%2F%2FnSGoJnuIUteujDu%2BufxJCglkvU908FFEQH7qvxhROs02nATyo81%2B&X-Amz-Signature=680536efedccfd6692c0f03dbf5716da954cbcb3311ace62712e344bd52afe1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZBF4XZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDEuMTvC8ylTpNF8szo0pv8FUdZpl0Hq6%2FQwOM%2FoIed8QIgJEx00CAaOxit1zbRTjxRdOMy3n1ygl97Ocz0rOzj240qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXVXsISUpVDiK4n5CrcA39P4NWhKVjYSzCbqzpHMqQP0cyS0X2Y301LZyMJhSPYPDzK3ciybC01fLw8pN5NphpFpioC7JmLlVKuM6W1W2cGIVo%2FXbV04B3vtnoOo9VzhkIZvrhWLBN7tzh2LksRPKKItR4ne5Ix4mXqrJ0tuOqcHzkiyg1R3MS5WXSqSX10uqmoYA6p%2FNSeGRHeu%2FKxKwgP3oW0qQuwdKjKK7M0%2FBeiZHZqiG6GMrAuZHuYpp6GeTREydE0IVuhruoYInbWGKaEXbNiIGgv4JmMUny3USaJvDv8R9hBaCt%2F8dY6Ns3CqJWhj6DqMbKgq0j7tpVjAX1u6QUW2SZ43wU4PgyppFNHmEAgzFdeIdwmt4LtPRSWvRlocnGqEh8uhEGQ2jhfd5X%2BmxKcKmeoAYCaNQOQpTCwo2oLVnsKHATr3YXTHqZSAtvlpVi2WsoNvnk9Lg7OBSgeG%2FrcFFaWu5VcP8flfufKX0i5rrt9wfX8GSS1eiKhvQkYf17VYVDejtqMLA1QjBs1lARHPbsT1tMEoTkEuV4mX0qciXgXv1Mv22tCCHCQ0SbM0IFJ8cJP8e%2FEw2zK%2FeVC8JhMjDQqJ9w9z3dl7FpifWOnxBlzsB1f%2F2sk8MniuBREkUxl%2FbZANO0OMP6MjcEGOqUB9vlQhzCsN01c7BFHou0Fuw5Fcu41zXMoAGw3uYGYEHm1ICywwaduUmWdrwB6K7FONI%2FDT8MpsH2cCUCtR9y5PPJHH%2BJYXTY0BehRxUIaOFo%2FnDMmTALgUZXWvVvs%2Fs%2FD9ehefqYB8rewQNAgzYO%2FUwVy%2BgHL9L52twHQqo%2F%2FnSGoJnuIUteujDu%2BufxJCglkvU908FFEQH7qvxhROs02nATyo81%2B&X-Amz-Signature=a15f0e9d1780b3814d1ea97e932afbca4ea56c940c6029d8d734358aeb55fe27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

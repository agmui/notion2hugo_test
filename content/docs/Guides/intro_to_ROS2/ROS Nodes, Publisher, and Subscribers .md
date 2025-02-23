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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP62YSJL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLpTbReJ5x6euzzgRlZ4fBugCqFb9Cjhw8uSslOeEKSAiEA0%2BLGTKcHmL1ytgnLJNAhghCGf8qNTVXxN0nf%2BEewbjoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQm4kN0tVBEX0sIzyrcA3gk0tUphF%2F6hWsdPBH02vwZvU1g76stc08yhxfCmx9xGoxZ48MUg5kInNZIRr4Fu4jKMbbc%2B3QuvYzHRr5arQmtIAehKdbOqayKb50sSA70b2G%2FqXBLxMLvUxXzw4%2BkrbBo05LvVyoupUFNtt9RPdjB4e9niJ47sdcHcV8%2BMIZx1p0QNPmKMjPLk4YC4r2Bsmc7IwyJKh8gvP2GRz6ywcjIGMqN0vbs%2BbQOxnMI%2FjCQ8hczhqDSLOP2E1XRBqh6fAD43TYz80sd5cqsgy%2Bf5%2F%2FvnuIXmh5fmFXX3FLy3w3PMBl1EekmtNSgYIGRWFFx5xacty1hhSbofiQOmLXXwID5zCt1%2FEx0shmPvvPPa%2BigqYZSaBnaij3YJHGiuBL4QFAhA5tVYKb2qRBrM1kw6HX6STOACEgXkedIzjBGcMqF43qraTmEPy2sT6rB7vMbmHV6oxIS%2BXGkdPd8teJjZOV4dFHIuN9XHSKnyZmibFWtD5nagMO6X%2B2OdN%2BeX3B0R6BTr79IwCNneZWIqUjsyIxFpLAYsctaeh%2BOcjH8nWj1X8nWLgRWe4m06cniHPquHrHhV6fflSz8Uky37L5s6TEWlUhnPB7folx417Hu7AIRp7aeQiUjkdXl7GRDMPqs6b0GOqUBxIMb3%2FRi7L4bVHyWvz6YJiR%2BEzaCvT5qKjf1oWrsVE%2FWeXkx4ktwIhkKufGPpECiBmwCPPke50dgDNPZ6rGRx3sWxkP%2FGwMS1Ul36SUkk3C%2FCQFkJQ6GHAhX%2BOjtWwT2n6fdMzA2qMxyOR9B10UPEBkUZtecr9rEsFm3vjLB7IDd75booIHqUUhV9W0qZi6zLR5S3cP6miGAaRSY7SveHeSZ%2B7fX&X-Amz-Signature=6ca12f41f75b6edaac7313e3919fe4b7cd9bffbb9a941b2a6d2ee0e58f6b40d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP62YSJL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLpTbReJ5x6euzzgRlZ4fBugCqFb9Cjhw8uSslOeEKSAiEA0%2BLGTKcHmL1ytgnLJNAhghCGf8qNTVXxN0nf%2BEewbjoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQm4kN0tVBEX0sIzyrcA3gk0tUphF%2F6hWsdPBH02vwZvU1g76stc08yhxfCmx9xGoxZ48MUg5kInNZIRr4Fu4jKMbbc%2B3QuvYzHRr5arQmtIAehKdbOqayKb50sSA70b2G%2FqXBLxMLvUxXzw4%2BkrbBo05LvVyoupUFNtt9RPdjB4e9niJ47sdcHcV8%2BMIZx1p0QNPmKMjPLk4YC4r2Bsmc7IwyJKh8gvP2GRz6ywcjIGMqN0vbs%2BbQOxnMI%2FjCQ8hczhqDSLOP2E1XRBqh6fAD43TYz80sd5cqsgy%2Bf5%2F%2FvnuIXmh5fmFXX3FLy3w3PMBl1EekmtNSgYIGRWFFx5xacty1hhSbofiQOmLXXwID5zCt1%2FEx0shmPvvPPa%2BigqYZSaBnaij3YJHGiuBL4QFAhA5tVYKb2qRBrM1kw6HX6STOACEgXkedIzjBGcMqF43qraTmEPy2sT6rB7vMbmHV6oxIS%2BXGkdPd8teJjZOV4dFHIuN9XHSKnyZmibFWtD5nagMO6X%2B2OdN%2BeX3B0R6BTr79IwCNneZWIqUjsyIxFpLAYsctaeh%2BOcjH8nWj1X8nWLgRWe4m06cniHPquHrHhV6fflSz8Uky37L5s6TEWlUhnPB7folx417Hu7AIRp7aeQiUjkdXl7GRDMPqs6b0GOqUBxIMb3%2FRi7L4bVHyWvz6YJiR%2BEzaCvT5qKjf1oWrsVE%2FWeXkx4ktwIhkKufGPpECiBmwCPPke50dgDNPZ6rGRx3sWxkP%2FGwMS1Ul36SUkk3C%2FCQFkJQ6GHAhX%2BOjtWwT2n6fdMzA2qMxyOR9B10UPEBkUZtecr9rEsFm3vjLB7IDd75booIHqUUhV9W0qZi6zLR5S3cP6miGAaRSY7SveHeSZ%2B7fX&X-Amz-Signature=8a4f573c6c441d6aeefc4d4ff274612b6f9a7a4bf56994fd649a7a1ea0ac5521&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP62YSJL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLpTbReJ5x6euzzgRlZ4fBugCqFb9Cjhw8uSslOeEKSAiEA0%2BLGTKcHmL1ytgnLJNAhghCGf8qNTVXxN0nf%2BEewbjoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQm4kN0tVBEX0sIzyrcA3gk0tUphF%2F6hWsdPBH02vwZvU1g76stc08yhxfCmx9xGoxZ48MUg5kInNZIRr4Fu4jKMbbc%2B3QuvYzHRr5arQmtIAehKdbOqayKb50sSA70b2G%2FqXBLxMLvUxXzw4%2BkrbBo05LvVyoupUFNtt9RPdjB4e9niJ47sdcHcV8%2BMIZx1p0QNPmKMjPLk4YC4r2Bsmc7IwyJKh8gvP2GRz6ywcjIGMqN0vbs%2BbQOxnMI%2FjCQ8hczhqDSLOP2E1XRBqh6fAD43TYz80sd5cqsgy%2Bf5%2F%2FvnuIXmh5fmFXX3FLy3w3PMBl1EekmtNSgYIGRWFFx5xacty1hhSbofiQOmLXXwID5zCt1%2FEx0shmPvvPPa%2BigqYZSaBnaij3YJHGiuBL4QFAhA5tVYKb2qRBrM1kw6HX6STOACEgXkedIzjBGcMqF43qraTmEPy2sT6rB7vMbmHV6oxIS%2BXGkdPd8teJjZOV4dFHIuN9XHSKnyZmibFWtD5nagMO6X%2B2OdN%2BeX3B0R6BTr79IwCNneZWIqUjsyIxFpLAYsctaeh%2BOcjH8nWj1X8nWLgRWe4m06cniHPquHrHhV6fflSz8Uky37L5s6TEWlUhnPB7folx417Hu7AIRp7aeQiUjkdXl7GRDMPqs6b0GOqUBxIMb3%2FRi7L4bVHyWvz6YJiR%2BEzaCvT5qKjf1oWrsVE%2FWeXkx4ktwIhkKufGPpECiBmwCPPke50dgDNPZ6rGRx3sWxkP%2FGwMS1Ul36SUkk3C%2FCQFkJQ6GHAhX%2BOjtWwT2n6fdMzA2qMxyOR9B10UPEBkUZtecr9rEsFm3vjLB7IDd75booIHqUUhV9W0qZi6zLR5S3cP6miGAaRSY7SveHeSZ%2B7fX&X-Amz-Signature=30000b2ce8d6686efee05e90f07d1b6e17bd8bf57e264ed30bbaafdec7f1d8af&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP62YSJL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLpTbReJ5x6euzzgRlZ4fBugCqFb9Cjhw8uSslOeEKSAiEA0%2BLGTKcHmL1ytgnLJNAhghCGf8qNTVXxN0nf%2BEewbjoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQm4kN0tVBEX0sIzyrcA3gk0tUphF%2F6hWsdPBH02vwZvU1g76stc08yhxfCmx9xGoxZ48MUg5kInNZIRr4Fu4jKMbbc%2B3QuvYzHRr5arQmtIAehKdbOqayKb50sSA70b2G%2FqXBLxMLvUxXzw4%2BkrbBo05LvVyoupUFNtt9RPdjB4e9niJ47sdcHcV8%2BMIZx1p0QNPmKMjPLk4YC4r2Bsmc7IwyJKh8gvP2GRz6ywcjIGMqN0vbs%2BbQOxnMI%2FjCQ8hczhqDSLOP2E1XRBqh6fAD43TYz80sd5cqsgy%2Bf5%2F%2FvnuIXmh5fmFXX3FLy3w3PMBl1EekmtNSgYIGRWFFx5xacty1hhSbofiQOmLXXwID5zCt1%2FEx0shmPvvPPa%2BigqYZSaBnaij3YJHGiuBL4QFAhA5tVYKb2qRBrM1kw6HX6STOACEgXkedIzjBGcMqF43qraTmEPy2sT6rB7vMbmHV6oxIS%2BXGkdPd8teJjZOV4dFHIuN9XHSKnyZmibFWtD5nagMO6X%2B2OdN%2BeX3B0R6BTr79IwCNneZWIqUjsyIxFpLAYsctaeh%2BOcjH8nWj1X8nWLgRWe4m06cniHPquHrHhV6fflSz8Uky37L5s6TEWlUhnPB7folx417Hu7AIRp7aeQiUjkdXl7GRDMPqs6b0GOqUBxIMb3%2FRi7L4bVHyWvz6YJiR%2BEzaCvT5qKjf1oWrsVE%2FWeXkx4ktwIhkKufGPpECiBmwCPPke50dgDNPZ6rGRx3sWxkP%2FGwMS1Ul36SUkk3C%2FCQFkJQ6GHAhX%2BOjtWwT2n6fdMzA2qMxyOR9B10UPEBkUZtecr9rEsFm3vjLB7IDd75booIHqUUhV9W0qZi6zLR5S3cP6miGAaRSY7SveHeSZ%2B7fX&X-Amz-Signature=ff2fb85222e57a80526d1b1291cb767bb40cb536d5a9dfd65981cabc161f04f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP62YSJL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLpTbReJ5x6euzzgRlZ4fBugCqFb9Cjhw8uSslOeEKSAiEA0%2BLGTKcHmL1ytgnLJNAhghCGf8qNTVXxN0nf%2BEewbjoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQm4kN0tVBEX0sIzyrcA3gk0tUphF%2F6hWsdPBH02vwZvU1g76stc08yhxfCmx9xGoxZ48MUg5kInNZIRr4Fu4jKMbbc%2B3QuvYzHRr5arQmtIAehKdbOqayKb50sSA70b2G%2FqXBLxMLvUxXzw4%2BkrbBo05LvVyoupUFNtt9RPdjB4e9niJ47sdcHcV8%2BMIZx1p0QNPmKMjPLk4YC4r2Bsmc7IwyJKh8gvP2GRz6ywcjIGMqN0vbs%2BbQOxnMI%2FjCQ8hczhqDSLOP2E1XRBqh6fAD43TYz80sd5cqsgy%2Bf5%2F%2FvnuIXmh5fmFXX3FLy3w3PMBl1EekmtNSgYIGRWFFx5xacty1hhSbofiQOmLXXwID5zCt1%2FEx0shmPvvPPa%2BigqYZSaBnaij3YJHGiuBL4QFAhA5tVYKb2qRBrM1kw6HX6STOACEgXkedIzjBGcMqF43qraTmEPy2sT6rB7vMbmHV6oxIS%2BXGkdPd8teJjZOV4dFHIuN9XHSKnyZmibFWtD5nagMO6X%2B2OdN%2BeX3B0R6BTr79IwCNneZWIqUjsyIxFpLAYsctaeh%2BOcjH8nWj1X8nWLgRWe4m06cniHPquHrHhV6fflSz8Uky37L5s6TEWlUhnPB7folx417Hu7AIRp7aeQiUjkdXl7GRDMPqs6b0GOqUBxIMb3%2FRi7L4bVHyWvz6YJiR%2BEzaCvT5qKjf1oWrsVE%2FWeXkx4ktwIhkKufGPpECiBmwCPPke50dgDNPZ6rGRx3sWxkP%2FGwMS1Ul36SUkk3C%2FCQFkJQ6GHAhX%2BOjtWwT2n6fdMzA2qMxyOR9B10UPEBkUZtecr9rEsFm3vjLB7IDd75booIHqUUhV9W0qZi6zLR5S3cP6miGAaRSY7SveHeSZ%2B7fX&X-Amz-Signature=294f32ece8f59dad9325efe271aac093aa4adf23cd592562aa4a1687677b9755&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP62YSJL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLpTbReJ5x6euzzgRlZ4fBugCqFb9Cjhw8uSslOeEKSAiEA0%2BLGTKcHmL1ytgnLJNAhghCGf8qNTVXxN0nf%2BEewbjoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQm4kN0tVBEX0sIzyrcA3gk0tUphF%2F6hWsdPBH02vwZvU1g76stc08yhxfCmx9xGoxZ48MUg5kInNZIRr4Fu4jKMbbc%2B3QuvYzHRr5arQmtIAehKdbOqayKb50sSA70b2G%2FqXBLxMLvUxXzw4%2BkrbBo05LvVyoupUFNtt9RPdjB4e9niJ47sdcHcV8%2BMIZx1p0QNPmKMjPLk4YC4r2Bsmc7IwyJKh8gvP2GRz6ywcjIGMqN0vbs%2BbQOxnMI%2FjCQ8hczhqDSLOP2E1XRBqh6fAD43TYz80sd5cqsgy%2Bf5%2F%2FvnuIXmh5fmFXX3FLy3w3PMBl1EekmtNSgYIGRWFFx5xacty1hhSbofiQOmLXXwID5zCt1%2FEx0shmPvvPPa%2BigqYZSaBnaij3YJHGiuBL4QFAhA5tVYKb2qRBrM1kw6HX6STOACEgXkedIzjBGcMqF43qraTmEPy2sT6rB7vMbmHV6oxIS%2BXGkdPd8teJjZOV4dFHIuN9XHSKnyZmibFWtD5nagMO6X%2B2OdN%2BeX3B0R6BTr79IwCNneZWIqUjsyIxFpLAYsctaeh%2BOcjH8nWj1X8nWLgRWe4m06cniHPquHrHhV6fflSz8Uky37L5s6TEWlUhnPB7folx417Hu7AIRp7aeQiUjkdXl7GRDMPqs6b0GOqUBxIMb3%2FRi7L4bVHyWvz6YJiR%2BEzaCvT5qKjf1oWrsVE%2FWeXkx4ktwIhkKufGPpECiBmwCPPke50dgDNPZ6rGRx3sWxkP%2FGwMS1Ul36SUkk3C%2FCQFkJQ6GHAhX%2BOjtWwT2n6fdMzA2qMxyOR9B10UPEBkUZtecr9rEsFm3vjLB7IDd75booIHqUUhV9W0qZi6zLR5S3cP6miGAaRSY7SveHeSZ%2B7fX&X-Amz-Signature=4739632c97962b5a8abe65490aaa65cf1bdcaaf9d277def0a39801867b5c4b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP62YSJL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLpTbReJ5x6euzzgRlZ4fBugCqFb9Cjhw8uSslOeEKSAiEA0%2BLGTKcHmL1ytgnLJNAhghCGf8qNTVXxN0nf%2BEewbjoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQm4kN0tVBEX0sIzyrcA3gk0tUphF%2F6hWsdPBH02vwZvU1g76stc08yhxfCmx9xGoxZ48MUg5kInNZIRr4Fu4jKMbbc%2B3QuvYzHRr5arQmtIAehKdbOqayKb50sSA70b2G%2FqXBLxMLvUxXzw4%2BkrbBo05LvVyoupUFNtt9RPdjB4e9niJ47sdcHcV8%2BMIZx1p0QNPmKMjPLk4YC4r2Bsmc7IwyJKh8gvP2GRz6ywcjIGMqN0vbs%2BbQOxnMI%2FjCQ8hczhqDSLOP2E1XRBqh6fAD43TYz80sd5cqsgy%2Bf5%2F%2FvnuIXmh5fmFXX3FLy3w3PMBl1EekmtNSgYIGRWFFx5xacty1hhSbofiQOmLXXwID5zCt1%2FEx0shmPvvPPa%2BigqYZSaBnaij3YJHGiuBL4QFAhA5tVYKb2qRBrM1kw6HX6STOACEgXkedIzjBGcMqF43qraTmEPy2sT6rB7vMbmHV6oxIS%2BXGkdPd8teJjZOV4dFHIuN9XHSKnyZmibFWtD5nagMO6X%2B2OdN%2BeX3B0R6BTr79IwCNneZWIqUjsyIxFpLAYsctaeh%2BOcjH8nWj1X8nWLgRWe4m06cniHPquHrHhV6fflSz8Uky37L5s6TEWlUhnPB7folx417Hu7AIRp7aeQiUjkdXl7GRDMPqs6b0GOqUBxIMb3%2FRi7L4bVHyWvz6YJiR%2BEzaCvT5qKjf1oWrsVE%2FWeXkx4ktwIhkKufGPpECiBmwCPPke50dgDNPZ6rGRx3sWxkP%2FGwMS1Ul36SUkk3C%2FCQFkJQ6GHAhX%2BOjtWwT2n6fdMzA2qMxyOR9B10UPEBkUZtecr9rEsFm3vjLB7IDd75booIHqUUhV9W0qZi6zLR5S3cP6miGAaRSY7SveHeSZ%2B7fX&X-Amz-Signature=2cb6f07c9b9b7f5f35b218d8f9360c80fbb01ae8c55ea535dd6d3801da4ffb0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP62YSJL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLpTbReJ5x6euzzgRlZ4fBugCqFb9Cjhw8uSslOeEKSAiEA0%2BLGTKcHmL1ytgnLJNAhghCGf8qNTVXxN0nf%2BEewbjoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQm4kN0tVBEX0sIzyrcA3gk0tUphF%2F6hWsdPBH02vwZvU1g76stc08yhxfCmx9xGoxZ48MUg5kInNZIRr4Fu4jKMbbc%2B3QuvYzHRr5arQmtIAehKdbOqayKb50sSA70b2G%2FqXBLxMLvUxXzw4%2BkrbBo05LvVyoupUFNtt9RPdjB4e9niJ47sdcHcV8%2BMIZx1p0QNPmKMjPLk4YC4r2Bsmc7IwyJKh8gvP2GRz6ywcjIGMqN0vbs%2BbQOxnMI%2FjCQ8hczhqDSLOP2E1XRBqh6fAD43TYz80sd5cqsgy%2Bf5%2F%2FvnuIXmh5fmFXX3FLy3w3PMBl1EekmtNSgYIGRWFFx5xacty1hhSbofiQOmLXXwID5zCt1%2FEx0shmPvvPPa%2BigqYZSaBnaij3YJHGiuBL4QFAhA5tVYKb2qRBrM1kw6HX6STOACEgXkedIzjBGcMqF43qraTmEPy2sT6rB7vMbmHV6oxIS%2BXGkdPd8teJjZOV4dFHIuN9XHSKnyZmibFWtD5nagMO6X%2B2OdN%2BeX3B0R6BTr79IwCNneZWIqUjsyIxFpLAYsctaeh%2BOcjH8nWj1X8nWLgRWe4m06cniHPquHrHhV6fflSz8Uky37L5s6TEWlUhnPB7folx417Hu7AIRp7aeQiUjkdXl7GRDMPqs6b0GOqUBxIMb3%2FRi7L4bVHyWvz6YJiR%2BEzaCvT5qKjf1oWrsVE%2FWeXkx4ktwIhkKufGPpECiBmwCPPke50dgDNPZ6rGRx3sWxkP%2FGwMS1Ul36SUkk3C%2FCQFkJQ6GHAhX%2BOjtWwT2n6fdMzA2qMxyOR9B10UPEBkUZtecr9rEsFm3vjLB7IDd75booIHqUUhV9W0qZi6zLR5S3cP6miGAaRSY7SveHeSZ%2B7fX&X-Amz-Signature=af9eb01ead63bf3a6cce990d475689c89e572f032e36a4cdb8b5925c0b1ebe9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

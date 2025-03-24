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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAD4TN7M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTwITdZk3QUUb4tunyDJwJV2jFO6gtUqllE9hZq4vUAIgOtI042b%2FGdPXMiKWFpQfPJap%2B%2BFSNyAjaQB0oTPtD%2F4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGivKk%2BoBZBEt4DiCrcA%2FgUVL1h0WUQyiIL41V07O%2FH9OwbfcR%2B63nlM3sLA%2BPIOpTz4J1P0vRDmcWI2v4DbGghpmr%2BO0320FokCzngYSQXeKGZfJrO8mV%2FJc%2B9WLTEB6upHgftFLm8G46ItTyujA4YOQhW0x1%2FTeGC%2B015iug8YOifFWTW3uXVbbzFxLCJwOBT2GOJVyzj8ZeIAZXglorYzrZjl2pja5keP71hJvv40MXVY3avtVVScwzhGbdTvTFIpziFsDL06HaE4z2M%2FHGotCUa7ySIoModlWoXqe8rPq4pzrnZX4euTkTemkzaprdcQSSr%2FQgZx8rLhjcl%2BulfvTA%2BVjNeXYTbM3iyKvUcScOfT4AfQaJfYflXOZ2nQPZpflBO0PuzbilqTtjooHNLy%2BOsDspNo9ovmoKI1JMAs8BW5ZBFgNVH%2Fe9vZVnntNJUn89g8EzQ9%2FgOM4TfTugYM7%2FccUkryp1D4Ddb2dSYbZIEZolSzZF06gVOi3Qihf7MSepVGbHe62A%2Fw6Mh3Km95PdVp%2B65FuFb9%2BZM6uyDhm3zShUiCPQrZR3F3IdYyBdATNKlJM1yA9SkGSh9uJPsM41Ty74PI%2BG2d%2F87D4hZ24ZUaGD8ldnhBsWDLj7OOp4p42CGJX7pOsOmMJT%2Bhb8GOqUBwYu%2FIQ4yIFezFEgBqXnfKoRg9HvvoYDFPesrEQeo2NQGFZwcpPTZfSwmldxp675ipDaX2zWENml2xKpIZVprZpRPpD%2FbLHN7AUd20DIUlcejDu9DZ7RRnEKFBYqfh8RCH%2F4nfUV0fi7dnLrX936ePotE6WJkYyia7CpkTYY7IzxE0g85qDb0rn9afDDj%2FrU7uLLpi73JZguZF9hZwDNfF3gGsipI&X-Amz-Signature=f5ba7ec0d820cd0a95915317ea6c4ce201e75c171927be8f54295f9776e0e367&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAD4TN7M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTwITdZk3QUUb4tunyDJwJV2jFO6gtUqllE9hZq4vUAIgOtI042b%2FGdPXMiKWFpQfPJap%2B%2BFSNyAjaQB0oTPtD%2F4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGivKk%2BoBZBEt4DiCrcA%2FgUVL1h0WUQyiIL41V07O%2FH9OwbfcR%2B63nlM3sLA%2BPIOpTz4J1P0vRDmcWI2v4DbGghpmr%2BO0320FokCzngYSQXeKGZfJrO8mV%2FJc%2B9WLTEB6upHgftFLm8G46ItTyujA4YOQhW0x1%2FTeGC%2B015iug8YOifFWTW3uXVbbzFxLCJwOBT2GOJVyzj8ZeIAZXglorYzrZjl2pja5keP71hJvv40MXVY3avtVVScwzhGbdTvTFIpziFsDL06HaE4z2M%2FHGotCUa7ySIoModlWoXqe8rPq4pzrnZX4euTkTemkzaprdcQSSr%2FQgZx8rLhjcl%2BulfvTA%2BVjNeXYTbM3iyKvUcScOfT4AfQaJfYflXOZ2nQPZpflBO0PuzbilqTtjooHNLy%2BOsDspNo9ovmoKI1JMAs8BW5ZBFgNVH%2Fe9vZVnntNJUn89g8EzQ9%2FgOM4TfTugYM7%2FccUkryp1D4Ddb2dSYbZIEZolSzZF06gVOi3Qihf7MSepVGbHe62A%2Fw6Mh3Km95PdVp%2B65FuFb9%2BZM6uyDhm3zShUiCPQrZR3F3IdYyBdATNKlJM1yA9SkGSh9uJPsM41Ty74PI%2BG2d%2F87D4hZ24ZUaGD8ldnhBsWDLj7OOp4p42CGJX7pOsOmMJT%2Bhb8GOqUBwYu%2FIQ4yIFezFEgBqXnfKoRg9HvvoYDFPesrEQeo2NQGFZwcpPTZfSwmldxp675ipDaX2zWENml2xKpIZVprZpRPpD%2FbLHN7AUd20DIUlcejDu9DZ7RRnEKFBYqfh8RCH%2F4nfUV0fi7dnLrX936ePotE6WJkYyia7CpkTYY7IzxE0g85qDb0rn9afDDj%2FrU7uLLpi73JZguZF9hZwDNfF3gGsipI&X-Amz-Signature=aaa78ffc3cc05c393c24e068358d3a438832daa59a363f04f108e5979523a720&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAD4TN7M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTwITdZk3QUUb4tunyDJwJV2jFO6gtUqllE9hZq4vUAIgOtI042b%2FGdPXMiKWFpQfPJap%2B%2BFSNyAjaQB0oTPtD%2F4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGivKk%2BoBZBEt4DiCrcA%2FgUVL1h0WUQyiIL41V07O%2FH9OwbfcR%2B63nlM3sLA%2BPIOpTz4J1P0vRDmcWI2v4DbGghpmr%2BO0320FokCzngYSQXeKGZfJrO8mV%2FJc%2B9WLTEB6upHgftFLm8G46ItTyujA4YOQhW0x1%2FTeGC%2B015iug8YOifFWTW3uXVbbzFxLCJwOBT2GOJVyzj8ZeIAZXglorYzrZjl2pja5keP71hJvv40MXVY3avtVVScwzhGbdTvTFIpziFsDL06HaE4z2M%2FHGotCUa7ySIoModlWoXqe8rPq4pzrnZX4euTkTemkzaprdcQSSr%2FQgZx8rLhjcl%2BulfvTA%2BVjNeXYTbM3iyKvUcScOfT4AfQaJfYflXOZ2nQPZpflBO0PuzbilqTtjooHNLy%2BOsDspNo9ovmoKI1JMAs8BW5ZBFgNVH%2Fe9vZVnntNJUn89g8EzQ9%2FgOM4TfTugYM7%2FccUkryp1D4Ddb2dSYbZIEZolSzZF06gVOi3Qihf7MSepVGbHe62A%2Fw6Mh3Km95PdVp%2B65FuFb9%2BZM6uyDhm3zShUiCPQrZR3F3IdYyBdATNKlJM1yA9SkGSh9uJPsM41Ty74PI%2BG2d%2F87D4hZ24ZUaGD8ldnhBsWDLj7OOp4p42CGJX7pOsOmMJT%2Bhb8GOqUBwYu%2FIQ4yIFezFEgBqXnfKoRg9HvvoYDFPesrEQeo2NQGFZwcpPTZfSwmldxp675ipDaX2zWENml2xKpIZVprZpRPpD%2FbLHN7AUd20DIUlcejDu9DZ7RRnEKFBYqfh8RCH%2F4nfUV0fi7dnLrX936ePotE6WJkYyia7CpkTYY7IzxE0g85qDb0rn9afDDj%2FrU7uLLpi73JZguZF9hZwDNfF3gGsipI&X-Amz-Signature=3f19591ea689cf7b59effc81256a40ece27168106a88a6afd0967ae9bcff73c7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAD4TN7M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTwITdZk3QUUb4tunyDJwJV2jFO6gtUqllE9hZq4vUAIgOtI042b%2FGdPXMiKWFpQfPJap%2B%2BFSNyAjaQB0oTPtD%2F4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGivKk%2BoBZBEt4DiCrcA%2FgUVL1h0WUQyiIL41V07O%2FH9OwbfcR%2B63nlM3sLA%2BPIOpTz4J1P0vRDmcWI2v4DbGghpmr%2BO0320FokCzngYSQXeKGZfJrO8mV%2FJc%2B9WLTEB6upHgftFLm8G46ItTyujA4YOQhW0x1%2FTeGC%2B015iug8YOifFWTW3uXVbbzFxLCJwOBT2GOJVyzj8ZeIAZXglorYzrZjl2pja5keP71hJvv40MXVY3avtVVScwzhGbdTvTFIpziFsDL06HaE4z2M%2FHGotCUa7ySIoModlWoXqe8rPq4pzrnZX4euTkTemkzaprdcQSSr%2FQgZx8rLhjcl%2BulfvTA%2BVjNeXYTbM3iyKvUcScOfT4AfQaJfYflXOZ2nQPZpflBO0PuzbilqTtjooHNLy%2BOsDspNo9ovmoKI1JMAs8BW5ZBFgNVH%2Fe9vZVnntNJUn89g8EzQ9%2FgOM4TfTugYM7%2FccUkryp1D4Ddb2dSYbZIEZolSzZF06gVOi3Qihf7MSepVGbHe62A%2Fw6Mh3Km95PdVp%2B65FuFb9%2BZM6uyDhm3zShUiCPQrZR3F3IdYyBdATNKlJM1yA9SkGSh9uJPsM41Ty74PI%2BG2d%2F87D4hZ24ZUaGD8ldnhBsWDLj7OOp4p42CGJX7pOsOmMJT%2Bhb8GOqUBwYu%2FIQ4yIFezFEgBqXnfKoRg9HvvoYDFPesrEQeo2NQGFZwcpPTZfSwmldxp675ipDaX2zWENml2xKpIZVprZpRPpD%2FbLHN7AUd20DIUlcejDu9DZ7RRnEKFBYqfh8RCH%2F4nfUV0fi7dnLrX936ePotE6WJkYyia7CpkTYY7IzxE0g85qDb0rn9afDDj%2FrU7uLLpi73JZguZF9hZwDNfF3gGsipI&X-Amz-Signature=b9ffd896c835b7af874494cfdddd0115cb9fb4ba50d83d712c89e488fbfae59c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAD4TN7M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTwITdZk3QUUb4tunyDJwJV2jFO6gtUqllE9hZq4vUAIgOtI042b%2FGdPXMiKWFpQfPJap%2B%2BFSNyAjaQB0oTPtD%2F4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGivKk%2BoBZBEt4DiCrcA%2FgUVL1h0WUQyiIL41V07O%2FH9OwbfcR%2B63nlM3sLA%2BPIOpTz4J1P0vRDmcWI2v4DbGghpmr%2BO0320FokCzngYSQXeKGZfJrO8mV%2FJc%2B9WLTEB6upHgftFLm8G46ItTyujA4YOQhW0x1%2FTeGC%2B015iug8YOifFWTW3uXVbbzFxLCJwOBT2GOJVyzj8ZeIAZXglorYzrZjl2pja5keP71hJvv40MXVY3avtVVScwzhGbdTvTFIpziFsDL06HaE4z2M%2FHGotCUa7ySIoModlWoXqe8rPq4pzrnZX4euTkTemkzaprdcQSSr%2FQgZx8rLhjcl%2BulfvTA%2BVjNeXYTbM3iyKvUcScOfT4AfQaJfYflXOZ2nQPZpflBO0PuzbilqTtjooHNLy%2BOsDspNo9ovmoKI1JMAs8BW5ZBFgNVH%2Fe9vZVnntNJUn89g8EzQ9%2FgOM4TfTugYM7%2FccUkryp1D4Ddb2dSYbZIEZolSzZF06gVOi3Qihf7MSepVGbHe62A%2Fw6Mh3Km95PdVp%2B65FuFb9%2BZM6uyDhm3zShUiCPQrZR3F3IdYyBdATNKlJM1yA9SkGSh9uJPsM41Ty74PI%2BG2d%2F87D4hZ24ZUaGD8ldnhBsWDLj7OOp4p42CGJX7pOsOmMJT%2Bhb8GOqUBwYu%2FIQ4yIFezFEgBqXnfKoRg9HvvoYDFPesrEQeo2NQGFZwcpPTZfSwmldxp675ipDaX2zWENml2xKpIZVprZpRPpD%2FbLHN7AUd20DIUlcejDu9DZ7RRnEKFBYqfh8RCH%2F4nfUV0fi7dnLrX936ePotE6WJkYyia7CpkTYY7IzxE0g85qDb0rn9afDDj%2FrU7uLLpi73JZguZF9hZwDNfF3gGsipI&X-Amz-Signature=5c2f2eca38dfe593fa5ec3f6a37f0edd96821ea649b6e2327a69e3fcd28419c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAD4TN7M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTwITdZk3QUUb4tunyDJwJV2jFO6gtUqllE9hZq4vUAIgOtI042b%2FGdPXMiKWFpQfPJap%2B%2BFSNyAjaQB0oTPtD%2F4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGivKk%2BoBZBEt4DiCrcA%2FgUVL1h0WUQyiIL41V07O%2FH9OwbfcR%2B63nlM3sLA%2BPIOpTz4J1P0vRDmcWI2v4DbGghpmr%2BO0320FokCzngYSQXeKGZfJrO8mV%2FJc%2B9WLTEB6upHgftFLm8G46ItTyujA4YOQhW0x1%2FTeGC%2B015iug8YOifFWTW3uXVbbzFxLCJwOBT2GOJVyzj8ZeIAZXglorYzrZjl2pja5keP71hJvv40MXVY3avtVVScwzhGbdTvTFIpziFsDL06HaE4z2M%2FHGotCUa7ySIoModlWoXqe8rPq4pzrnZX4euTkTemkzaprdcQSSr%2FQgZx8rLhjcl%2BulfvTA%2BVjNeXYTbM3iyKvUcScOfT4AfQaJfYflXOZ2nQPZpflBO0PuzbilqTtjooHNLy%2BOsDspNo9ovmoKI1JMAs8BW5ZBFgNVH%2Fe9vZVnntNJUn89g8EzQ9%2FgOM4TfTugYM7%2FccUkryp1D4Ddb2dSYbZIEZolSzZF06gVOi3Qihf7MSepVGbHe62A%2Fw6Mh3Km95PdVp%2B65FuFb9%2BZM6uyDhm3zShUiCPQrZR3F3IdYyBdATNKlJM1yA9SkGSh9uJPsM41Ty74PI%2BG2d%2F87D4hZ24ZUaGD8ldnhBsWDLj7OOp4p42CGJX7pOsOmMJT%2Bhb8GOqUBwYu%2FIQ4yIFezFEgBqXnfKoRg9HvvoYDFPesrEQeo2NQGFZwcpPTZfSwmldxp675ipDaX2zWENml2xKpIZVprZpRPpD%2FbLHN7AUd20DIUlcejDu9DZ7RRnEKFBYqfh8RCH%2F4nfUV0fi7dnLrX936ePotE6WJkYyia7CpkTYY7IzxE0g85qDb0rn9afDDj%2FrU7uLLpi73JZguZF9hZwDNfF3gGsipI&X-Amz-Signature=f295ef18f458d70735b7a889332202e55cd95f2e4cea63a3e0184238ca18bbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAD4TN7M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTwITdZk3QUUb4tunyDJwJV2jFO6gtUqllE9hZq4vUAIgOtI042b%2FGdPXMiKWFpQfPJap%2B%2BFSNyAjaQB0oTPtD%2F4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGivKk%2BoBZBEt4DiCrcA%2FgUVL1h0WUQyiIL41V07O%2FH9OwbfcR%2B63nlM3sLA%2BPIOpTz4J1P0vRDmcWI2v4DbGghpmr%2BO0320FokCzngYSQXeKGZfJrO8mV%2FJc%2B9WLTEB6upHgftFLm8G46ItTyujA4YOQhW0x1%2FTeGC%2B015iug8YOifFWTW3uXVbbzFxLCJwOBT2GOJVyzj8ZeIAZXglorYzrZjl2pja5keP71hJvv40MXVY3avtVVScwzhGbdTvTFIpziFsDL06HaE4z2M%2FHGotCUa7ySIoModlWoXqe8rPq4pzrnZX4euTkTemkzaprdcQSSr%2FQgZx8rLhjcl%2BulfvTA%2BVjNeXYTbM3iyKvUcScOfT4AfQaJfYflXOZ2nQPZpflBO0PuzbilqTtjooHNLy%2BOsDspNo9ovmoKI1JMAs8BW5ZBFgNVH%2Fe9vZVnntNJUn89g8EzQ9%2FgOM4TfTugYM7%2FccUkryp1D4Ddb2dSYbZIEZolSzZF06gVOi3Qihf7MSepVGbHe62A%2Fw6Mh3Km95PdVp%2B65FuFb9%2BZM6uyDhm3zShUiCPQrZR3F3IdYyBdATNKlJM1yA9SkGSh9uJPsM41Ty74PI%2BG2d%2F87D4hZ24ZUaGD8ldnhBsWDLj7OOp4p42CGJX7pOsOmMJT%2Bhb8GOqUBwYu%2FIQ4yIFezFEgBqXnfKoRg9HvvoYDFPesrEQeo2NQGFZwcpPTZfSwmldxp675ipDaX2zWENml2xKpIZVprZpRPpD%2FbLHN7AUd20DIUlcejDu9DZ7RRnEKFBYqfh8RCH%2F4nfUV0fi7dnLrX936ePotE6WJkYyia7CpkTYY7IzxE0g85qDb0rn9afDDj%2FrU7uLLpi73JZguZF9hZwDNfF3gGsipI&X-Amz-Signature=82d1b9ab7799a0304545eb1e3ed8afe18a239127449f06c795d036c38b6bdaa2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAD4TN7M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcTwITdZk3QUUb4tunyDJwJV2jFO6gtUqllE9hZq4vUAIgOtI042b%2FGdPXMiKWFpQfPJap%2B%2BFSNyAjaQB0oTPtD%2F4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGivKk%2BoBZBEt4DiCrcA%2FgUVL1h0WUQyiIL41V07O%2FH9OwbfcR%2B63nlM3sLA%2BPIOpTz4J1P0vRDmcWI2v4DbGghpmr%2BO0320FokCzngYSQXeKGZfJrO8mV%2FJc%2B9WLTEB6upHgftFLm8G46ItTyujA4YOQhW0x1%2FTeGC%2B015iug8YOifFWTW3uXVbbzFxLCJwOBT2GOJVyzj8ZeIAZXglorYzrZjl2pja5keP71hJvv40MXVY3avtVVScwzhGbdTvTFIpziFsDL06HaE4z2M%2FHGotCUa7ySIoModlWoXqe8rPq4pzrnZX4euTkTemkzaprdcQSSr%2FQgZx8rLhjcl%2BulfvTA%2BVjNeXYTbM3iyKvUcScOfT4AfQaJfYflXOZ2nQPZpflBO0PuzbilqTtjooHNLy%2BOsDspNo9ovmoKI1JMAs8BW5ZBFgNVH%2Fe9vZVnntNJUn89g8EzQ9%2FgOM4TfTugYM7%2FccUkryp1D4Ddb2dSYbZIEZolSzZF06gVOi3Qihf7MSepVGbHe62A%2Fw6Mh3Km95PdVp%2B65FuFb9%2BZM6uyDhm3zShUiCPQrZR3F3IdYyBdATNKlJM1yA9SkGSh9uJPsM41Ty74PI%2BG2d%2F87D4hZ24ZUaGD8ldnhBsWDLj7OOp4p42CGJX7pOsOmMJT%2Bhb8GOqUBwYu%2FIQ4yIFezFEgBqXnfKoRg9HvvoYDFPesrEQeo2NQGFZwcpPTZfSwmldxp675ipDaX2zWENml2xKpIZVprZpRPpD%2FbLHN7AUd20DIUlcejDu9DZ7RRnEKFBYqfh8RCH%2F4nfUV0fi7dnLrX936ePotE6WJkYyia7CpkTYY7IzxE0g85qDb0rn9afDDj%2FrU7uLLpi73JZguZF9hZwDNfF3gGsipI&X-Amz-Signature=6f6a97d76c6940fbfe4f8ab3af30c6da9b639d45515da19a0c9e416a4263ee7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

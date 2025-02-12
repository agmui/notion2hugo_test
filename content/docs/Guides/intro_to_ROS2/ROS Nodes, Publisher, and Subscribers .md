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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TD6WV5O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt01YS4tyDDAi6Q5IQ4%2BuR%2FnReJUd7XRNyo2uDTz%2FQuAiAIUT9O6WRwse4oSaxtHBH0i1uWz8b2rPpUvUFJyV1shSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMspHWeQKivFB82xwjKtwDAio%2FFGuGoydhBRvnWjO5V8DG0z3iMu2Y3GIfSosXM6oSDtNJQIiOnwz9%2FHFYFzXNZ3RIn%2BvSSfz4Jjv%2BsjJcOaKnYPKxTHbB78jVFlDM2w1fuJUNFgWsq%2B0ZYcZTF75YhzWNN2MDdgne3PkUZjNqdTCHnlH9MJY%2FcurCrQS8QqYLm3KOSD878FWBCY9AuLHTCY2ID9PUaJpwzyIezwG1hMm3U9xGjaGFEsJCMv8PwLjnfqMArOmZY0pCLXcDYwAmSDpYmWA1iSjvX0dhFSdOnF4uDZSB2wuvPWLzghBpO1TKBBYITZMU6EswhJ9htzaxjoI5IfxQf9VdzdtpYvasE8jDr%2FMd2XOjWE%2BLXQ21tr87Au0Vew3BiDjuZxW4rRcOCdkdnJ5kP6dqKabHC8L6EOyqVTQ5dufvcDyKTk2pSMR1B7OJJAR8ufXnaf3bZgxvchnb2dDcnzlIWIEMS%2B7enqFStkC1V8Kke9zSKXgVyuu%2BAI361ZZW8xmcKpGtWkI3wGnx5y0W7TOM9zAICf8HJLoCaL2Jz1IP6QKrkSrsafZpnDHCgoUoiCIQk2X9H2aPA63yYTrpvTI%2BSu0JmFCyTPOz58N20a6nywoYSV3cU2tpj4dqFl6oCCJPv7gw0O2vvQY6pgEADLqkVd%2BDqkpL2K8VHPUGlsZ6vYhP3jd7ieIAx6eo0WgVmuIaRs6j6mIcisZMWdXhaWhiG5sxKm89HyG5NOh9g8j466bmI5AlcV920qdT4nR8jKI4YEDnGnG1mCrWpXtDfiVeNG8Smp0PfM2gCzxXdWITLK6uLYJTVjRo1wQF5rLtGbq8ODi%2BPkZU8l%2BVEjX68tzYXb%2BdIlhDOgQ%2Bc%2BAgZSbCC%2FHN&X-Amz-Signature=cb805dcf7a45cc9fc2675803ec6dbeb0b7aafa3706edf8ebea9fc15d51b6bcfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TD6WV5O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt01YS4tyDDAi6Q5IQ4%2BuR%2FnReJUd7XRNyo2uDTz%2FQuAiAIUT9O6WRwse4oSaxtHBH0i1uWz8b2rPpUvUFJyV1shSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMspHWeQKivFB82xwjKtwDAio%2FFGuGoydhBRvnWjO5V8DG0z3iMu2Y3GIfSosXM6oSDtNJQIiOnwz9%2FHFYFzXNZ3RIn%2BvSSfz4Jjv%2BsjJcOaKnYPKxTHbB78jVFlDM2w1fuJUNFgWsq%2B0ZYcZTF75YhzWNN2MDdgne3PkUZjNqdTCHnlH9MJY%2FcurCrQS8QqYLm3KOSD878FWBCY9AuLHTCY2ID9PUaJpwzyIezwG1hMm3U9xGjaGFEsJCMv8PwLjnfqMArOmZY0pCLXcDYwAmSDpYmWA1iSjvX0dhFSdOnF4uDZSB2wuvPWLzghBpO1TKBBYITZMU6EswhJ9htzaxjoI5IfxQf9VdzdtpYvasE8jDr%2FMd2XOjWE%2BLXQ21tr87Au0Vew3BiDjuZxW4rRcOCdkdnJ5kP6dqKabHC8L6EOyqVTQ5dufvcDyKTk2pSMR1B7OJJAR8ufXnaf3bZgxvchnb2dDcnzlIWIEMS%2B7enqFStkC1V8Kke9zSKXgVyuu%2BAI361ZZW8xmcKpGtWkI3wGnx5y0W7TOM9zAICf8HJLoCaL2Jz1IP6QKrkSrsafZpnDHCgoUoiCIQk2X9H2aPA63yYTrpvTI%2BSu0JmFCyTPOz58N20a6nywoYSV3cU2tpj4dqFl6oCCJPv7gw0O2vvQY6pgEADLqkVd%2BDqkpL2K8VHPUGlsZ6vYhP3jd7ieIAx6eo0WgVmuIaRs6j6mIcisZMWdXhaWhiG5sxKm89HyG5NOh9g8j466bmI5AlcV920qdT4nR8jKI4YEDnGnG1mCrWpXtDfiVeNG8Smp0PfM2gCzxXdWITLK6uLYJTVjRo1wQF5rLtGbq8ODi%2BPkZU8l%2BVEjX68tzYXb%2BdIlhDOgQ%2Bc%2BAgZSbCC%2FHN&X-Amz-Signature=7acf3bc3e757094603890fa7315568a910941040b48586c39bce33d69db3c040&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TD6WV5O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt01YS4tyDDAi6Q5IQ4%2BuR%2FnReJUd7XRNyo2uDTz%2FQuAiAIUT9O6WRwse4oSaxtHBH0i1uWz8b2rPpUvUFJyV1shSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMspHWeQKivFB82xwjKtwDAio%2FFGuGoydhBRvnWjO5V8DG0z3iMu2Y3GIfSosXM6oSDtNJQIiOnwz9%2FHFYFzXNZ3RIn%2BvSSfz4Jjv%2BsjJcOaKnYPKxTHbB78jVFlDM2w1fuJUNFgWsq%2B0ZYcZTF75YhzWNN2MDdgne3PkUZjNqdTCHnlH9MJY%2FcurCrQS8QqYLm3KOSD878FWBCY9AuLHTCY2ID9PUaJpwzyIezwG1hMm3U9xGjaGFEsJCMv8PwLjnfqMArOmZY0pCLXcDYwAmSDpYmWA1iSjvX0dhFSdOnF4uDZSB2wuvPWLzghBpO1TKBBYITZMU6EswhJ9htzaxjoI5IfxQf9VdzdtpYvasE8jDr%2FMd2XOjWE%2BLXQ21tr87Au0Vew3BiDjuZxW4rRcOCdkdnJ5kP6dqKabHC8L6EOyqVTQ5dufvcDyKTk2pSMR1B7OJJAR8ufXnaf3bZgxvchnb2dDcnzlIWIEMS%2B7enqFStkC1V8Kke9zSKXgVyuu%2BAI361ZZW8xmcKpGtWkI3wGnx5y0W7TOM9zAICf8HJLoCaL2Jz1IP6QKrkSrsafZpnDHCgoUoiCIQk2X9H2aPA63yYTrpvTI%2BSu0JmFCyTPOz58N20a6nywoYSV3cU2tpj4dqFl6oCCJPv7gw0O2vvQY6pgEADLqkVd%2BDqkpL2K8VHPUGlsZ6vYhP3jd7ieIAx6eo0WgVmuIaRs6j6mIcisZMWdXhaWhiG5sxKm89HyG5NOh9g8j466bmI5AlcV920qdT4nR8jKI4YEDnGnG1mCrWpXtDfiVeNG8Smp0PfM2gCzxXdWITLK6uLYJTVjRo1wQF5rLtGbq8ODi%2BPkZU8l%2BVEjX68tzYXb%2BdIlhDOgQ%2Bc%2BAgZSbCC%2FHN&X-Amz-Signature=80509154e475c72f10d6deed426d5c269bbee1d933116c7535f1ff83b93ed1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TD6WV5O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt01YS4tyDDAi6Q5IQ4%2BuR%2FnReJUd7XRNyo2uDTz%2FQuAiAIUT9O6WRwse4oSaxtHBH0i1uWz8b2rPpUvUFJyV1shSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMspHWeQKivFB82xwjKtwDAio%2FFGuGoydhBRvnWjO5V8DG0z3iMu2Y3GIfSosXM6oSDtNJQIiOnwz9%2FHFYFzXNZ3RIn%2BvSSfz4Jjv%2BsjJcOaKnYPKxTHbB78jVFlDM2w1fuJUNFgWsq%2B0ZYcZTF75YhzWNN2MDdgne3PkUZjNqdTCHnlH9MJY%2FcurCrQS8QqYLm3KOSD878FWBCY9AuLHTCY2ID9PUaJpwzyIezwG1hMm3U9xGjaGFEsJCMv8PwLjnfqMArOmZY0pCLXcDYwAmSDpYmWA1iSjvX0dhFSdOnF4uDZSB2wuvPWLzghBpO1TKBBYITZMU6EswhJ9htzaxjoI5IfxQf9VdzdtpYvasE8jDr%2FMd2XOjWE%2BLXQ21tr87Au0Vew3BiDjuZxW4rRcOCdkdnJ5kP6dqKabHC8L6EOyqVTQ5dufvcDyKTk2pSMR1B7OJJAR8ufXnaf3bZgxvchnb2dDcnzlIWIEMS%2B7enqFStkC1V8Kke9zSKXgVyuu%2BAI361ZZW8xmcKpGtWkI3wGnx5y0W7TOM9zAICf8HJLoCaL2Jz1IP6QKrkSrsafZpnDHCgoUoiCIQk2X9H2aPA63yYTrpvTI%2BSu0JmFCyTPOz58N20a6nywoYSV3cU2tpj4dqFl6oCCJPv7gw0O2vvQY6pgEADLqkVd%2BDqkpL2K8VHPUGlsZ6vYhP3jd7ieIAx6eo0WgVmuIaRs6j6mIcisZMWdXhaWhiG5sxKm89HyG5NOh9g8j466bmI5AlcV920qdT4nR8jKI4YEDnGnG1mCrWpXtDfiVeNG8Smp0PfM2gCzxXdWITLK6uLYJTVjRo1wQF5rLtGbq8ODi%2BPkZU8l%2BVEjX68tzYXb%2BdIlhDOgQ%2Bc%2BAgZSbCC%2FHN&X-Amz-Signature=8a1001762321b3bbb6ceb3ffe718a030e2c576ff10105e22677ab858d4fd8b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TD6WV5O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt01YS4tyDDAi6Q5IQ4%2BuR%2FnReJUd7XRNyo2uDTz%2FQuAiAIUT9O6WRwse4oSaxtHBH0i1uWz8b2rPpUvUFJyV1shSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMspHWeQKivFB82xwjKtwDAio%2FFGuGoydhBRvnWjO5V8DG0z3iMu2Y3GIfSosXM6oSDtNJQIiOnwz9%2FHFYFzXNZ3RIn%2BvSSfz4Jjv%2BsjJcOaKnYPKxTHbB78jVFlDM2w1fuJUNFgWsq%2B0ZYcZTF75YhzWNN2MDdgne3PkUZjNqdTCHnlH9MJY%2FcurCrQS8QqYLm3KOSD878FWBCY9AuLHTCY2ID9PUaJpwzyIezwG1hMm3U9xGjaGFEsJCMv8PwLjnfqMArOmZY0pCLXcDYwAmSDpYmWA1iSjvX0dhFSdOnF4uDZSB2wuvPWLzghBpO1TKBBYITZMU6EswhJ9htzaxjoI5IfxQf9VdzdtpYvasE8jDr%2FMd2XOjWE%2BLXQ21tr87Au0Vew3BiDjuZxW4rRcOCdkdnJ5kP6dqKabHC8L6EOyqVTQ5dufvcDyKTk2pSMR1B7OJJAR8ufXnaf3bZgxvchnb2dDcnzlIWIEMS%2B7enqFStkC1V8Kke9zSKXgVyuu%2BAI361ZZW8xmcKpGtWkI3wGnx5y0W7TOM9zAICf8HJLoCaL2Jz1IP6QKrkSrsafZpnDHCgoUoiCIQk2X9H2aPA63yYTrpvTI%2BSu0JmFCyTPOz58N20a6nywoYSV3cU2tpj4dqFl6oCCJPv7gw0O2vvQY6pgEADLqkVd%2BDqkpL2K8VHPUGlsZ6vYhP3jd7ieIAx6eo0WgVmuIaRs6j6mIcisZMWdXhaWhiG5sxKm89HyG5NOh9g8j466bmI5AlcV920qdT4nR8jKI4YEDnGnG1mCrWpXtDfiVeNG8Smp0PfM2gCzxXdWITLK6uLYJTVjRo1wQF5rLtGbq8ODi%2BPkZU8l%2BVEjX68tzYXb%2BdIlhDOgQ%2Bc%2BAgZSbCC%2FHN&X-Amz-Signature=add43375958154d732759cfa21685dd83edd87780243ac4aad40dc50201182e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TD6WV5O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt01YS4tyDDAi6Q5IQ4%2BuR%2FnReJUd7XRNyo2uDTz%2FQuAiAIUT9O6WRwse4oSaxtHBH0i1uWz8b2rPpUvUFJyV1shSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMspHWeQKivFB82xwjKtwDAio%2FFGuGoydhBRvnWjO5V8DG0z3iMu2Y3GIfSosXM6oSDtNJQIiOnwz9%2FHFYFzXNZ3RIn%2BvSSfz4Jjv%2BsjJcOaKnYPKxTHbB78jVFlDM2w1fuJUNFgWsq%2B0ZYcZTF75YhzWNN2MDdgne3PkUZjNqdTCHnlH9MJY%2FcurCrQS8QqYLm3KOSD878FWBCY9AuLHTCY2ID9PUaJpwzyIezwG1hMm3U9xGjaGFEsJCMv8PwLjnfqMArOmZY0pCLXcDYwAmSDpYmWA1iSjvX0dhFSdOnF4uDZSB2wuvPWLzghBpO1TKBBYITZMU6EswhJ9htzaxjoI5IfxQf9VdzdtpYvasE8jDr%2FMd2XOjWE%2BLXQ21tr87Au0Vew3BiDjuZxW4rRcOCdkdnJ5kP6dqKabHC8L6EOyqVTQ5dufvcDyKTk2pSMR1B7OJJAR8ufXnaf3bZgxvchnb2dDcnzlIWIEMS%2B7enqFStkC1V8Kke9zSKXgVyuu%2BAI361ZZW8xmcKpGtWkI3wGnx5y0W7TOM9zAICf8HJLoCaL2Jz1IP6QKrkSrsafZpnDHCgoUoiCIQk2X9H2aPA63yYTrpvTI%2BSu0JmFCyTPOz58N20a6nywoYSV3cU2tpj4dqFl6oCCJPv7gw0O2vvQY6pgEADLqkVd%2BDqkpL2K8VHPUGlsZ6vYhP3jd7ieIAx6eo0WgVmuIaRs6j6mIcisZMWdXhaWhiG5sxKm89HyG5NOh9g8j466bmI5AlcV920qdT4nR8jKI4YEDnGnG1mCrWpXtDfiVeNG8Smp0PfM2gCzxXdWITLK6uLYJTVjRo1wQF5rLtGbq8ODi%2BPkZU8l%2BVEjX68tzYXb%2BdIlhDOgQ%2Bc%2BAgZSbCC%2FHN&X-Amz-Signature=be3bb54c72e942c9d3d5ebd1e5934156783b6b157a3afdb9c7a4394a43133245&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TD6WV5O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt01YS4tyDDAi6Q5IQ4%2BuR%2FnReJUd7XRNyo2uDTz%2FQuAiAIUT9O6WRwse4oSaxtHBH0i1uWz8b2rPpUvUFJyV1shSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMspHWeQKivFB82xwjKtwDAio%2FFGuGoydhBRvnWjO5V8DG0z3iMu2Y3GIfSosXM6oSDtNJQIiOnwz9%2FHFYFzXNZ3RIn%2BvSSfz4Jjv%2BsjJcOaKnYPKxTHbB78jVFlDM2w1fuJUNFgWsq%2B0ZYcZTF75YhzWNN2MDdgne3PkUZjNqdTCHnlH9MJY%2FcurCrQS8QqYLm3KOSD878FWBCY9AuLHTCY2ID9PUaJpwzyIezwG1hMm3U9xGjaGFEsJCMv8PwLjnfqMArOmZY0pCLXcDYwAmSDpYmWA1iSjvX0dhFSdOnF4uDZSB2wuvPWLzghBpO1TKBBYITZMU6EswhJ9htzaxjoI5IfxQf9VdzdtpYvasE8jDr%2FMd2XOjWE%2BLXQ21tr87Au0Vew3BiDjuZxW4rRcOCdkdnJ5kP6dqKabHC8L6EOyqVTQ5dufvcDyKTk2pSMR1B7OJJAR8ufXnaf3bZgxvchnb2dDcnzlIWIEMS%2B7enqFStkC1V8Kke9zSKXgVyuu%2BAI361ZZW8xmcKpGtWkI3wGnx5y0W7TOM9zAICf8HJLoCaL2Jz1IP6QKrkSrsafZpnDHCgoUoiCIQk2X9H2aPA63yYTrpvTI%2BSu0JmFCyTPOz58N20a6nywoYSV3cU2tpj4dqFl6oCCJPv7gw0O2vvQY6pgEADLqkVd%2BDqkpL2K8VHPUGlsZ6vYhP3jd7ieIAx6eo0WgVmuIaRs6j6mIcisZMWdXhaWhiG5sxKm89HyG5NOh9g8j466bmI5AlcV920qdT4nR8jKI4YEDnGnG1mCrWpXtDfiVeNG8Smp0PfM2gCzxXdWITLK6uLYJTVjRo1wQF5rLtGbq8ODi%2BPkZU8l%2BVEjX68tzYXb%2BdIlhDOgQ%2Bc%2BAgZSbCC%2FHN&X-Amz-Signature=f8cba598518719485f5466a4655215cef1bf77c0e58c6d3501d2306e7a34e80e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TD6WV5O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt01YS4tyDDAi6Q5IQ4%2BuR%2FnReJUd7XRNyo2uDTz%2FQuAiAIUT9O6WRwse4oSaxtHBH0i1uWz8b2rPpUvUFJyV1shSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMspHWeQKivFB82xwjKtwDAio%2FFGuGoydhBRvnWjO5V8DG0z3iMu2Y3GIfSosXM6oSDtNJQIiOnwz9%2FHFYFzXNZ3RIn%2BvSSfz4Jjv%2BsjJcOaKnYPKxTHbB78jVFlDM2w1fuJUNFgWsq%2B0ZYcZTF75YhzWNN2MDdgne3PkUZjNqdTCHnlH9MJY%2FcurCrQS8QqYLm3KOSD878FWBCY9AuLHTCY2ID9PUaJpwzyIezwG1hMm3U9xGjaGFEsJCMv8PwLjnfqMArOmZY0pCLXcDYwAmSDpYmWA1iSjvX0dhFSdOnF4uDZSB2wuvPWLzghBpO1TKBBYITZMU6EswhJ9htzaxjoI5IfxQf9VdzdtpYvasE8jDr%2FMd2XOjWE%2BLXQ21tr87Au0Vew3BiDjuZxW4rRcOCdkdnJ5kP6dqKabHC8L6EOyqVTQ5dufvcDyKTk2pSMR1B7OJJAR8ufXnaf3bZgxvchnb2dDcnzlIWIEMS%2B7enqFStkC1V8Kke9zSKXgVyuu%2BAI361ZZW8xmcKpGtWkI3wGnx5y0W7TOM9zAICf8HJLoCaL2Jz1IP6QKrkSrsafZpnDHCgoUoiCIQk2X9H2aPA63yYTrpvTI%2BSu0JmFCyTPOz58N20a6nywoYSV3cU2tpj4dqFl6oCCJPv7gw0O2vvQY6pgEADLqkVd%2BDqkpL2K8VHPUGlsZ6vYhP3jd7ieIAx6eo0WgVmuIaRs6j6mIcisZMWdXhaWhiG5sxKm89HyG5NOh9g8j466bmI5AlcV920qdT4nR8jKI4YEDnGnG1mCrWpXtDfiVeNG8Smp0PfM2gCzxXdWITLK6uLYJTVjRo1wQF5rLtGbq8ODi%2BPkZU8l%2BVEjX68tzYXb%2BdIlhDOgQ%2Bc%2BAgZSbCC%2FHN&X-Amz-Signature=0bb80b5748f5ee69d8330b027a0c9d77fdb99ee633f8844a37e8a544d3332075&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

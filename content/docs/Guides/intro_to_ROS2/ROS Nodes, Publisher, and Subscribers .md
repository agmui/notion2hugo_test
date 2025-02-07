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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZTHMOLI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC6HFov4KRPSabR2DHrMsoOv4DddSHQ%2FHqlWLBoZLCmtAIhAKs0HYUs2IPXoy3Y1StTQVr7GWvUXtIcNGu%2FOSLfF2k9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igz0dCGTi1T7YAbfkDwq3APO%2Bka4cUVx8Qx308%2BCyQ3H0p4rMjamZl%2Bte1cS%2Fjn5UBViSE4GqoA82OOy8Y%2FFx5CClNrlpbu5%2FEs1QSJzJOP9eWLp0RDLYmDQy7Kj2KKk6V9YGsV%2FNt2Nh5JMh4%2BG%2FruwG06W%2FdZx2Posl9tU6K6A644FbtwG9XdxhWaS07leatHBmhQp79kQFavD3IQVsUe8HE00ZU7Nmf9Vk0L2TgGgdjZjsTwD7bPSCzsS3QC9e%2FIynjJJNYQSiyGKxUAqlQx9RILWMyJDUKJwQEAzLRC7taKvu65bXa6QcKZOJYQPDFMuozriLMGe%2FutYty2buS34lSN%2B%2BV8g1MGLtXnfuXEfOwe9aSzn0h6s54qVD%2By%2Bq5N8z%2Ft4VDVsg7p0yNDSp5AMl%2FJF4iFxHz0C%2FhS4OZlrQy1M9aVHdv9avW6OSjLKG0eGnv7%2B8A5ln1QRt6WaWMWTTUnKiNnBAp%2BNgejMSWbARNTi1SX1DTiIkWiFvSiuAWRGjtd1%2BmglpAOGFQMBnX4MMCecxXG6jdSaUeSggDrtoINFl0KOs0GIFmPkJDg6i9Fx4bSVioLPpNH%2FZCwk8XVf128b4mVNbo6WgdsTXIVMYpOVDFiwQ3%2BDWTBgGMBy1HM2hT3K%2FLNM%2FNksAzDsm5W9BjqkAVo8l25qSoCZGvV40Ghk9IJltpY7qwdpG%2BgIVFivTFOUSXIk1YSAk2CXYAxfHB2SQ7lN05E%2FNtyaS0hRp%2BKqk2Q3XVPJJCdLdFfWmDBwP8vUGJBzu0WTcXNX6zXKpkF9F2g7KXees8fDXJauwSX33%2B2hEC%2FVttAClwInxXp6S72EAXuqzFmw30JHCGvySYxaC%2BRmVDaqthDyTEUui3R6R98ylZDK&X-Amz-Signature=6b4998785c9af1dfd215764a8477e59112a5359bf47ff8a9932a47d03c1c11cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZTHMOLI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC6HFov4KRPSabR2DHrMsoOv4DddSHQ%2FHqlWLBoZLCmtAIhAKs0HYUs2IPXoy3Y1StTQVr7GWvUXtIcNGu%2FOSLfF2k9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igz0dCGTi1T7YAbfkDwq3APO%2Bka4cUVx8Qx308%2BCyQ3H0p4rMjamZl%2Bte1cS%2Fjn5UBViSE4GqoA82OOy8Y%2FFx5CClNrlpbu5%2FEs1QSJzJOP9eWLp0RDLYmDQy7Kj2KKk6V9YGsV%2FNt2Nh5JMh4%2BG%2FruwG06W%2FdZx2Posl9tU6K6A644FbtwG9XdxhWaS07leatHBmhQp79kQFavD3IQVsUe8HE00ZU7Nmf9Vk0L2TgGgdjZjsTwD7bPSCzsS3QC9e%2FIynjJJNYQSiyGKxUAqlQx9RILWMyJDUKJwQEAzLRC7taKvu65bXa6QcKZOJYQPDFMuozriLMGe%2FutYty2buS34lSN%2B%2BV8g1MGLtXnfuXEfOwe9aSzn0h6s54qVD%2By%2Bq5N8z%2Ft4VDVsg7p0yNDSp5AMl%2FJF4iFxHz0C%2FhS4OZlrQy1M9aVHdv9avW6OSjLKG0eGnv7%2B8A5ln1QRt6WaWMWTTUnKiNnBAp%2BNgejMSWbARNTi1SX1DTiIkWiFvSiuAWRGjtd1%2BmglpAOGFQMBnX4MMCecxXG6jdSaUeSggDrtoINFl0KOs0GIFmPkJDg6i9Fx4bSVioLPpNH%2FZCwk8XVf128b4mVNbo6WgdsTXIVMYpOVDFiwQ3%2BDWTBgGMBy1HM2hT3K%2FLNM%2FNksAzDsm5W9BjqkAVo8l25qSoCZGvV40Ghk9IJltpY7qwdpG%2BgIVFivTFOUSXIk1YSAk2CXYAxfHB2SQ7lN05E%2FNtyaS0hRp%2BKqk2Q3XVPJJCdLdFfWmDBwP8vUGJBzu0WTcXNX6zXKpkF9F2g7KXees8fDXJauwSX33%2B2hEC%2FVttAClwInxXp6S72EAXuqzFmw30JHCGvySYxaC%2BRmVDaqthDyTEUui3R6R98ylZDK&X-Amz-Signature=352e02282dbea0496ceb3be0628a9c53a2d0707121a35c123c23680a7b5b2aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZTHMOLI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC6HFov4KRPSabR2DHrMsoOv4DddSHQ%2FHqlWLBoZLCmtAIhAKs0HYUs2IPXoy3Y1StTQVr7GWvUXtIcNGu%2FOSLfF2k9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igz0dCGTi1T7YAbfkDwq3APO%2Bka4cUVx8Qx308%2BCyQ3H0p4rMjamZl%2Bte1cS%2Fjn5UBViSE4GqoA82OOy8Y%2FFx5CClNrlpbu5%2FEs1QSJzJOP9eWLp0RDLYmDQy7Kj2KKk6V9YGsV%2FNt2Nh5JMh4%2BG%2FruwG06W%2FdZx2Posl9tU6K6A644FbtwG9XdxhWaS07leatHBmhQp79kQFavD3IQVsUe8HE00ZU7Nmf9Vk0L2TgGgdjZjsTwD7bPSCzsS3QC9e%2FIynjJJNYQSiyGKxUAqlQx9RILWMyJDUKJwQEAzLRC7taKvu65bXa6QcKZOJYQPDFMuozriLMGe%2FutYty2buS34lSN%2B%2BV8g1MGLtXnfuXEfOwe9aSzn0h6s54qVD%2By%2Bq5N8z%2Ft4VDVsg7p0yNDSp5AMl%2FJF4iFxHz0C%2FhS4OZlrQy1M9aVHdv9avW6OSjLKG0eGnv7%2B8A5ln1QRt6WaWMWTTUnKiNnBAp%2BNgejMSWbARNTi1SX1DTiIkWiFvSiuAWRGjtd1%2BmglpAOGFQMBnX4MMCecxXG6jdSaUeSggDrtoINFl0KOs0GIFmPkJDg6i9Fx4bSVioLPpNH%2FZCwk8XVf128b4mVNbo6WgdsTXIVMYpOVDFiwQ3%2BDWTBgGMBy1HM2hT3K%2FLNM%2FNksAzDsm5W9BjqkAVo8l25qSoCZGvV40Ghk9IJltpY7qwdpG%2BgIVFivTFOUSXIk1YSAk2CXYAxfHB2SQ7lN05E%2FNtyaS0hRp%2BKqk2Q3XVPJJCdLdFfWmDBwP8vUGJBzu0WTcXNX6zXKpkF9F2g7KXees8fDXJauwSX33%2B2hEC%2FVttAClwInxXp6S72EAXuqzFmw30JHCGvySYxaC%2BRmVDaqthDyTEUui3R6R98ylZDK&X-Amz-Signature=eeedbb77c263cf7f6aae266e10123dbe16fe5e27deff07fca60d655a0e9e2cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZTHMOLI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC6HFov4KRPSabR2DHrMsoOv4DddSHQ%2FHqlWLBoZLCmtAIhAKs0HYUs2IPXoy3Y1StTQVr7GWvUXtIcNGu%2FOSLfF2k9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igz0dCGTi1T7YAbfkDwq3APO%2Bka4cUVx8Qx308%2BCyQ3H0p4rMjamZl%2Bte1cS%2Fjn5UBViSE4GqoA82OOy8Y%2FFx5CClNrlpbu5%2FEs1QSJzJOP9eWLp0RDLYmDQy7Kj2KKk6V9YGsV%2FNt2Nh5JMh4%2BG%2FruwG06W%2FdZx2Posl9tU6K6A644FbtwG9XdxhWaS07leatHBmhQp79kQFavD3IQVsUe8HE00ZU7Nmf9Vk0L2TgGgdjZjsTwD7bPSCzsS3QC9e%2FIynjJJNYQSiyGKxUAqlQx9RILWMyJDUKJwQEAzLRC7taKvu65bXa6QcKZOJYQPDFMuozriLMGe%2FutYty2buS34lSN%2B%2BV8g1MGLtXnfuXEfOwe9aSzn0h6s54qVD%2By%2Bq5N8z%2Ft4VDVsg7p0yNDSp5AMl%2FJF4iFxHz0C%2FhS4OZlrQy1M9aVHdv9avW6OSjLKG0eGnv7%2B8A5ln1QRt6WaWMWTTUnKiNnBAp%2BNgejMSWbARNTi1SX1DTiIkWiFvSiuAWRGjtd1%2BmglpAOGFQMBnX4MMCecxXG6jdSaUeSggDrtoINFl0KOs0GIFmPkJDg6i9Fx4bSVioLPpNH%2FZCwk8XVf128b4mVNbo6WgdsTXIVMYpOVDFiwQ3%2BDWTBgGMBy1HM2hT3K%2FLNM%2FNksAzDsm5W9BjqkAVo8l25qSoCZGvV40Ghk9IJltpY7qwdpG%2BgIVFivTFOUSXIk1YSAk2CXYAxfHB2SQ7lN05E%2FNtyaS0hRp%2BKqk2Q3XVPJJCdLdFfWmDBwP8vUGJBzu0WTcXNX6zXKpkF9F2g7KXees8fDXJauwSX33%2B2hEC%2FVttAClwInxXp6S72EAXuqzFmw30JHCGvySYxaC%2BRmVDaqthDyTEUui3R6R98ylZDK&X-Amz-Signature=18792bf1b9540fcf4ce258752436eea4fec4e5cacad7f577a744f5820bbbb2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZTHMOLI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC6HFov4KRPSabR2DHrMsoOv4DddSHQ%2FHqlWLBoZLCmtAIhAKs0HYUs2IPXoy3Y1StTQVr7GWvUXtIcNGu%2FOSLfF2k9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igz0dCGTi1T7YAbfkDwq3APO%2Bka4cUVx8Qx308%2BCyQ3H0p4rMjamZl%2Bte1cS%2Fjn5UBViSE4GqoA82OOy8Y%2FFx5CClNrlpbu5%2FEs1QSJzJOP9eWLp0RDLYmDQy7Kj2KKk6V9YGsV%2FNt2Nh5JMh4%2BG%2FruwG06W%2FdZx2Posl9tU6K6A644FbtwG9XdxhWaS07leatHBmhQp79kQFavD3IQVsUe8HE00ZU7Nmf9Vk0L2TgGgdjZjsTwD7bPSCzsS3QC9e%2FIynjJJNYQSiyGKxUAqlQx9RILWMyJDUKJwQEAzLRC7taKvu65bXa6QcKZOJYQPDFMuozriLMGe%2FutYty2buS34lSN%2B%2BV8g1MGLtXnfuXEfOwe9aSzn0h6s54qVD%2By%2Bq5N8z%2Ft4VDVsg7p0yNDSp5AMl%2FJF4iFxHz0C%2FhS4OZlrQy1M9aVHdv9avW6OSjLKG0eGnv7%2B8A5ln1QRt6WaWMWTTUnKiNnBAp%2BNgejMSWbARNTi1SX1DTiIkWiFvSiuAWRGjtd1%2BmglpAOGFQMBnX4MMCecxXG6jdSaUeSggDrtoINFl0KOs0GIFmPkJDg6i9Fx4bSVioLPpNH%2FZCwk8XVf128b4mVNbo6WgdsTXIVMYpOVDFiwQ3%2BDWTBgGMBy1HM2hT3K%2FLNM%2FNksAzDsm5W9BjqkAVo8l25qSoCZGvV40Ghk9IJltpY7qwdpG%2BgIVFivTFOUSXIk1YSAk2CXYAxfHB2SQ7lN05E%2FNtyaS0hRp%2BKqk2Q3XVPJJCdLdFfWmDBwP8vUGJBzu0WTcXNX6zXKpkF9F2g7KXees8fDXJauwSX33%2B2hEC%2FVttAClwInxXp6S72EAXuqzFmw30JHCGvySYxaC%2BRmVDaqthDyTEUui3R6R98ylZDK&X-Amz-Signature=c2578a3b03051a28c77bb2d93688d5c17c2f65bbdf6825470c6f92b6ada63fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZTHMOLI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC6HFov4KRPSabR2DHrMsoOv4DddSHQ%2FHqlWLBoZLCmtAIhAKs0HYUs2IPXoy3Y1StTQVr7GWvUXtIcNGu%2FOSLfF2k9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igz0dCGTi1T7YAbfkDwq3APO%2Bka4cUVx8Qx308%2BCyQ3H0p4rMjamZl%2Bte1cS%2Fjn5UBViSE4GqoA82OOy8Y%2FFx5CClNrlpbu5%2FEs1QSJzJOP9eWLp0RDLYmDQy7Kj2KKk6V9YGsV%2FNt2Nh5JMh4%2BG%2FruwG06W%2FdZx2Posl9tU6K6A644FbtwG9XdxhWaS07leatHBmhQp79kQFavD3IQVsUe8HE00ZU7Nmf9Vk0L2TgGgdjZjsTwD7bPSCzsS3QC9e%2FIynjJJNYQSiyGKxUAqlQx9RILWMyJDUKJwQEAzLRC7taKvu65bXa6QcKZOJYQPDFMuozriLMGe%2FutYty2buS34lSN%2B%2BV8g1MGLtXnfuXEfOwe9aSzn0h6s54qVD%2By%2Bq5N8z%2Ft4VDVsg7p0yNDSp5AMl%2FJF4iFxHz0C%2FhS4OZlrQy1M9aVHdv9avW6OSjLKG0eGnv7%2B8A5ln1QRt6WaWMWTTUnKiNnBAp%2BNgejMSWbARNTi1SX1DTiIkWiFvSiuAWRGjtd1%2BmglpAOGFQMBnX4MMCecxXG6jdSaUeSggDrtoINFl0KOs0GIFmPkJDg6i9Fx4bSVioLPpNH%2FZCwk8XVf128b4mVNbo6WgdsTXIVMYpOVDFiwQ3%2BDWTBgGMBy1HM2hT3K%2FLNM%2FNksAzDsm5W9BjqkAVo8l25qSoCZGvV40Ghk9IJltpY7qwdpG%2BgIVFivTFOUSXIk1YSAk2CXYAxfHB2SQ7lN05E%2FNtyaS0hRp%2BKqk2Q3XVPJJCdLdFfWmDBwP8vUGJBzu0WTcXNX6zXKpkF9F2g7KXees8fDXJauwSX33%2B2hEC%2FVttAClwInxXp6S72EAXuqzFmw30JHCGvySYxaC%2BRmVDaqthDyTEUui3R6R98ylZDK&X-Amz-Signature=c459a8f10da529cf2988675e1b571d437148a5b764faf2d83104bcdcb372df3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZTHMOLI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC6HFov4KRPSabR2DHrMsoOv4DddSHQ%2FHqlWLBoZLCmtAIhAKs0HYUs2IPXoy3Y1StTQVr7GWvUXtIcNGu%2FOSLfF2k9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igz0dCGTi1T7YAbfkDwq3APO%2Bka4cUVx8Qx308%2BCyQ3H0p4rMjamZl%2Bte1cS%2Fjn5UBViSE4GqoA82OOy8Y%2FFx5CClNrlpbu5%2FEs1QSJzJOP9eWLp0RDLYmDQy7Kj2KKk6V9YGsV%2FNt2Nh5JMh4%2BG%2FruwG06W%2FdZx2Posl9tU6K6A644FbtwG9XdxhWaS07leatHBmhQp79kQFavD3IQVsUe8HE00ZU7Nmf9Vk0L2TgGgdjZjsTwD7bPSCzsS3QC9e%2FIynjJJNYQSiyGKxUAqlQx9RILWMyJDUKJwQEAzLRC7taKvu65bXa6QcKZOJYQPDFMuozriLMGe%2FutYty2buS34lSN%2B%2BV8g1MGLtXnfuXEfOwe9aSzn0h6s54qVD%2By%2Bq5N8z%2Ft4VDVsg7p0yNDSp5AMl%2FJF4iFxHz0C%2FhS4OZlrQy1M9aVHdv9avW6OSjLKG0eGnv7%2B8A5ln1QRt6WaWMWTTUnKiNnBAp%2BNgejMSWbARNTi1SX1DTiIkWiFvSiuAWRGjtd1%2BmglpAOGFQMBnX4MMCecxXG6jdSaUeSggDrtoINFl0KOs0GIFmPkJDg6i9Fx4bSVioLPpNH%2FZCwk8XVf128b4mVNbo6WgdsTXIVMYpOVDFiwQ3%2BDWTBgGMBy1HM2hT3K%2FLNM%2FNksAzDsm5W9BjqkAVo8l25qSoCZGvV40Ghk9IJltpY7qwdpG%2BgIVFivTFOUSXIk1YSAk2CXYAxfHB2SQ7lN05E%2FNtyaS0hRp%2BKqk2Q3XVPJJCdLdFfWmDBwP8vUGJBzu0WTcXNX6zXKpkF9F2g7KXees8fDXJauwSX33%2B2hEC%2FVttAClwInxXp6S72EAXuqzFmw30JHCGvySYxaC%2BRmVDaqthDyTEUui3R6R98ylZDK&X-Amz-Signature=b1c475040ac6d25e48f4db2af3da441a4e6374001035dfc4167aa50faa14d390&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZTHMOLI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC6HFov4KRPSabR2DHrMsoOv4DddSHQ%2FHqlWLBoZLCmtAIhAKs0HYUs2IPXoy3Y1StTQVr7GWvUXtIcNGu%2FOSLfF2k9Kv8DCGkQABoMNjM3NDIzMTgzODA1Igz0dCGTi1T7YAbfkDwq3APO%2Bka4cUVx8Qx308%2BCyQ3H0p4rMjamZl%2Bte1cS%2Fjn5UBViSE4GqoA82OOy8Y%2FFx5CClNrlpbu5%2FEs1QSJzJOP9eWLp0RDLYmDQy7Kj2KKk6V9YGsV%2FNt2Nh5JMh4%2BG%2FruwG06W%2FdZx2Posl9tU6K6A644FbtwG9XdxhWaS07leatHBmhQp79kQFavD3IQVsUe8HE00ZU7Nmf9Vk0L2TgGgdjZjsTwD7bPSCzsS3QC9e%2FIynjJJNYQSiyGKxUAqlQx9RILWMyJDUKJwQEAzLRC7taKvu65bXa6QcKZOJYQPDFMuozriLMGe%2FutYty2buS34lSN%2B%2BV8g1MGLtXnfuXEfOwe9aSzn0h6s54qVD%2By%2Bq5N8z%2Ft4VDVsg7p0yNDSp5AMl%2FJF4iFxHz0C%2FhS4OZlrQy1M9aVHdv9avW6OSjLKG0eGnv7%2B8A5ln1QRt6WaWMWTTUnKiNnBAp%2BNgejMSWbARNTi1SX1DTiIkWiFvSiuAWRGjtd1%2BmglpAOGFQMBnX4MMCecxXG6jdSaUeSggDrtoINFl0KOs0GIFmPkJDg6i9Fx4bSVioLPpNH%2FZCwk8XVf128b4mVNbo6WgdsTXIVMYpOVDFiwQ3%2BDWTBgGMBy1HM2hT3K%2FLNM%2FNksAzDsm5W9BjqkAVo8l25qSoCZGvV40Ghk9IJltpY7qwdpG%2BgIVFivTFOUSXIk1YSAk2CXYAxfHB2SQ7lN05E%2FNtyaS0hRp%2BKqk2Q3XVPJJCdLdFfWmDBwP8vUGJBzu0WTcXNX6zXKpkF9F2g7KXees8fDXJauwSX33%2B2hEC%2FVttAClwInxXp6S72EAXuqzFmw30JHCGvySYxaC%2BRmVDaqthDyTEUui3R6R98ylZDK&X-Amz-Signature=d911f52628e6c4584c6d2d3eec08274af188756f60d4d2118fcae22baa958d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

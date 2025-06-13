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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF6XTAW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD9iR74Z57XQ9QKoVlVkaCJo5NmnEiTvyT1nySZANgQXQIhALfzvQVpACmVhQXPuetNXPNE8TWtPIwL6CeWktO8BeBUKv8DCBAQABoMNjM3NDIzMTgzODA1Igxeg3ctL6VM70S%2B9Isq3AO4SStq8znywXf%2B0jqH0N%2FRmWxHdri3EFlFKEEBKVSvfz%2FRwK4KHci4Dqw%2Bnr%2FuCxbE%2BaZN72ymDtoB46mAqvI9P3Q3%2BCaQoPXRA0FmOQ7zQFgRw7R%2B8rPvav6TlyvZHGDxwZIoQPCYbzsCcFXI3qts7DsFn%2Fe1yY0l%2FmkchLxUqgcaC%2B4zG6vsEtpx0YF9v1Os6XYr5kmrLeStvWpw0O7rD6Q0PwMWdlILCjJ6FZdFIxPLDwpQwu3wWabx44Yr4ByDXPn6eMFU7huXqmhrYTCxZJiQVkgxFt30Qxb9lofHrjQWEXrtufzWwhe5WAP8NHNmfCxFUGLBP%2BlLa9S8dSszNY3QVPmuVu1uAebcpAmCGcf%2B9uJqsC2LmodgJb3S41uxV1s10ivtQDneoZN08cZ0MlSJiSYMbFuNbrHtjV3SC%2BvMLf2OqGABUCj%2FzO07qejMKuyF65HaJOUBVDjEv5uleNCevAvXaSJdA5YZ0dbqb9Cnd%2FDlV1K3iAxWYDB6RDIa4MoiaiUIwHCfVWk%2BWVmR4t1ML014gRAWUWTZUAIQtfpJd4pjj%2FxpmpP1ySYIGfqhOokFIBUVqyRwtqtsCI4MGZH3T%2BrzBUyFFn1flplZwZFV4vTn%2Bag5agq2iDDDo6%2FCBjqkAVkMeL12NqtWXl%2Fu4O1oX1DH3JvdxAGoLLgn3A8rSQf4xlRd8bLqfpE9dlJOYua2%2Fq9ktOUOTln7LWUMbx3EwxoNBqLe8FbKO9kDCxNY3hVtCAEIrz4%2Fjq5DMRHstxmaYDtL4ehDi7krXRFMJB8EqFp1F12tZatgPJB3wvVdq909796zAy0uKNfIvPsrOTUgD8VRc3gY8s9rrzZ%2BPuBIqFq2oeAw&X-Amz-Signature=488ad7f3e29bd768d138dfd1ace22f68fd3a2907594249db7f922a7ccb8b16a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF6XTAW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD9iR74Z57XQ9QKoVlVkaCJo5NmnEiTvyT1nySZANgQXQIhALfzvQVpACmVhQXPuetNXPNE8TWtPIwL6CeWktO8BeBUKv8DCBAQABoMNjM3NDIzMTgzODA1Igxeg3ctL6VM70S%2B9Isq3AO4SStq8znywXf%2B0jqH0N%2FRmWxHdri3EFlFKEEBKVSvfz%2FRwK4KHci4Dqw%2Bnr%2FuCxbE%2BaZN72ymDtoB46mAqvI9P3Q3%2BCaQoPXRA0FmOQ7zQFgRw7R%2B8rPvav6TlyvZHGDxwZIoQPCYbzsCcFXI3qts7DsFn%2Fe1yY0l%2FmkchLxUqgcaC%2B4zG6vsEtpx0YF9v1Os6XYr5kmrLeStvWpw0O7rD6Q0PwMWdlILCjJ6FZdFIxPLDwpQwu3wWabx44Yr4ByDXPn6eMFU7huXqmhrYTCxZJiQVkgxFt30Qxb9lofHrjQWEXrtufzWwhe5WAP8NHNmfCxFUGLBP%2BlLa9S8dSszNY3QVPmuVu1uAebcpAmCGcf%2B9uJqsC2LmodgJb3S41uxV1s10ivtQDneoZN08cZ0MlSJiSYMbFuNbrHtjV3SC%2BvMLf2OqGABUCj%2FzO07qejMKuyF65HaJOUBVDjEv5uleNCevAvXaSJdA5YZ0dbqb9Cnd%2FDlV1K3iAxWYDB6RDIa4MoiaiUIwHCfVWk%2BWVmR4t1ML014gRAWUWTZUAIQtfpJd4pjj%2FxpmpP1ySYIGfqhOokFIBUVqyRwtqtsCI4MGZH3T%2BrzBUyFFn1flplZwZFV4vTn%2Bag5agq2iDDDo6%2FCBjqkAVkMeL12NqtWXl%2Fu4O1oX1DH3JvdxAGoLLgn3A8rSQf4xlRd8bLqfpE9dlJOYua2%2Fq9ktOUOTln7LWUMbx3EwxoNBqLe8FbKO9kDCxNY3hVtCAEIrz4%2Fjq5DMRHstxmaYDtL4ehDi7krXRFMJB8EqFp1F12tZatgPJB3wvVdq909796zAy0uKNfIvPsrOTUgD8VRc3gY8s9rrzZ%2BPuBIqFq2oeAw&X-Amz-Signature=0c739ba4628d62950f4b6e7fe6af968645228e52022fb7a46d2926456df10150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF6XTAW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD9iR74Z57XQ9QKoVlVkaCJo5NmnEiTvyT1nySZANgQXQIhALfzvQVpACmVhQXPuetNXPNE8TWtPIwL6CeWktO8BeBUKv8DCBAQABoMNjM3NDIzMTgzODA1Igxeg3ctL6VM70S%2B9Isq3AO4SStq8znywXf%2B0jqH0N%2FRmWxHdri3EFlFKEEBKVSvfz%2FRwK4KHci4Dqw%2Bnr%2FuCxbE%2BaZN72ymDtoB46mAqvI9P3Q3%2BCaQoPXRA0FmOQ7zQFgRw7R%2B8rPvav6TlyvZHGDxwZIoQPCYbzsCcFXI3qts7DsFn%2Fe1yY0l%2FmkchLxUqgcaC%2B4zG6vsEtpx0YF9v1Os6XYr5kmrLeStvWpw0O7rD6Q0PwMWdlILCjJ6FZdFIxPLDwpQwu3wWabx44Yr4ByDXPn6eMFU7huXqmhrYTCxZJiQVkgxFt30Qxb9lofHrjQWEXrtufzWwhe5WAP8NHNmfCxFUGLBP%2BlLa9S8dSszNY3QVPmuVu1uAebcpAmCGcf%2B9uJqsC2LmodgJb3S41uxV1s10ivtQDneoZN08cZ0MlSJiSYMbFuNbrHtjV3SC%2BvMLf2OqGABUCj%2FzO07qejMKuyF65HaJOUBVDjEv5uleNCevAvXaSJdA5YZ0dbqb9Cnd%2FDlV1K3iAxWYDB6RDIa4MoiaiUIwHCfVWk%2BWVmR4t1ML014gRAWUWTZUAIQtfpJd4pjj%2FxpmpP1ySYIGfqhOokFIBUVqyRwtqtsCI4MGZH3T%2BrzBUyFFn1flplZwZFV4vTn%2Bag5agq2iDDDo6%2FCBjqkAVkMeL12NqtWXl%2Fu4O1oX1DH3JvdxAGoLLgn3A8rSQf4xlRd8bLqfpE9dlJOYua2%2Fq9ktOUOTln7LWUMbx3EwxoNBqLe8FbKO9kDCxNY3hVtCAEIrz4%2Fjq5DMRHstxmaYDtL4ehDi7krXRFMJB8EqFp1F12tZatgPJB3wvVdq909796zAy0uKNfIvPsrOTUgD8VRc3gY8s9rrzZ%2BPuBIqFq2oeAw&X-Amz-Signature=2942a24b8b7c3496151b6e98005331ce3b19edb92fcfbc2f6ed4c3a5fe251da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF6XTAW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD9iR74Z57XQ9QKoVlVkaCJo5NmnEiTvyT1nySZANgQXQIhALfzvQVpACmVhQXPuetNXPNE8TWtPIwL6CeWktO8BeBUKv8DCBAQABoMNjM3NDIzMTgzODA1Igxeg3ctL6VM70S%2B9Isq3AO4SStq8znywXf%2B0jqH0N%2FRmWxHdri3EFlFKEEBKVSvfz%2FRwK4KHci4Dqw%2Bnr%2FuCxbE%2BaZN72ymDtoB46mAqvI9P3Q3%2BCaQoPXRA0FmOQ7zQFgRw7R%2B8rPvav6TlyvZHGDxwZIoQPCYbzsCcFXI3qts7DsFn%2Fe1yY0l%2FmkchLxUqgcaC%2B4zG6vsEtpx0YF9v1Os6XYr5kmrLeStvWpw0O7rD6Q0PwMWdlILCjJ6FZdFIxPLDwpQwu3wWabx44Yr4ByDXPn6eMFU7huXqmhrYTCxZJiQVkgxFt30Qxb9lofHrjQWEXrtufzWwhe5WAP8NHNmfCxFUGLBP%2BlLa9S8dSszNY3QVPmuVu1uAebcpAmCGcf%2B9uJqsC2LmodgJb3S41uxV1s10ivtQDneoZN08cZ0MlSJiSYMbFuNbrHtjV3SC%2BvMLf2OqGABUCj%2FzO07qejMKuyF65HaJOUBVDjEv5uleNCevAvXaSJdA5YZ0dbqb9Cnd%2FDlV1K3iAxWYDB6RDIa4MoiaiUIwHCfVWk%2BWVmR4t1ML014gRAWUWTZUAIQtfpJd4pjj%2FxpmpP1ySYIGfqhOokFIBUVqyRwtqtsCI4MGZH3T%2BrzBUyFFn1flplZwZFV4vTn%2Bag5agq2iDDDo6%2FCBjqkAVkMeL12NqtWXl%2Fu4O1oX1DH3JvdxAGoLLgn3A8rSQf4xlRd8bLqfpE9dlJOYua2%2Fq9ktOUOTln7LWUMbx3EwxoNBqLe8FbKO9kDCxNY3hVtCAEIrz4%2Fjq5DMRHstxmaYDtL4ehDi7krXRFMJB8EqFp1F12tZatgPJB3wvVdq909796zAy0uKNfIvPsrOTUgD8VRc3gY8s9rrzZ%2BPuBIqFq2oeAw&X-Amz-Signature=9d86ad0903b6e399177fe1be0f33a7cea1da0e3647ccbaef6759c3b0bf9d6f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF6XTAW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD9iR74Z57XQ9QKoVlVkaCJo5NmnEiTvyT1nySZANgQXQIhALfzvQVpACmVhQXPuetNXPNE8TWtPIwL6CeWktO8BeBUKv8DCBAQABoMNjM3NDIzMTgzODA1Igxeg3ctL6VM70S%2B9Isq3AO4SStq8znywXf%2B0jqH0N%2FRmWxHdri3EFlFKEEBKVSvfz%2FRwK4KHci4Dqw%2Bnr%2FuCxbE%2BaZN72ymDtoB46mAqvI9P3Q3%2BCaQoPXRA0FmOQ7zQFgRw7R%2B8rPvav6TlyvZHGDxwZIoQPCYbzsCcFXI3qts7DsFn%2Fe1yY0l%2FmkchLxUqgcaC%2B4zG6vsEtpx0YF9v1Os6XYr5kmrLeStvWpw0O7rD6Q0PwMWdlILCjJ6FZdFIxPLDwpQwu3wWabx44Yr4ByDXPn6eMFU7huXqmhrYTCxZJiQVkgxFt30Qxb9lofHrjQWEXrtufzWwhe5WAP8NHNmfCxFUGLBP%2BlLa9S8dSszNY3QVPmuVu1uAebcpAmCGcf%2B9uJqsC2LmodgJb3S41uxV1s10ivtQDneoZN08cZ0MlSJiSYMbFuNbrHtjV3SC%2BvMLf2OqGABUCj%2FzO07qejMKuyF65HaJOUBVDjEv5uleNCevAvXaSJdA5YZ0dbqb9Cnd%2FDlV1K3iAxWYDB6RDIa4MoiaiUIwHCfVWk%2BWVmR4t1ML014gRAWUWTZUAIQtfpJd4pjj%2FxpmpP1ySYIGfqhOokFIBUVqyRwtqtsCI4MGZH3T%2BrzBUyFFn1flplZwZFV4vTn%2Bag5agq2iDDDo6%2FCBjqkAVkMeL12NqtWXl%2Fu4O1oX1DH3JvdxAGoLLgn3A8rSQf4xlRd8bLqfpE9dlJOYua2%2Fq9ktOUOTln7LWUMbx3EwxoNBqLe8FbKO9kDCxNY3hVtCAEIrz4%2Fjq5DMRHstxmaYDtL4ehDi7krXRFMJB8EqFp1F12tZatgPJB3wvVdq909796zAy0uKNfIvPsrOTUgD8VRc3gY8s9rrzZ%2BPuBIqFq2oeAw&X-Amz-Signature=e491e80735b4bc99a2ab46511af458bd2e34573c70e41b6cb49864e9399fa47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF6XTAW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD9iR74Z57XQ9QKoVlVkaCJo5NmnEiTvyT1nySZANgQXQIhALfzvQVpACmVhQXPuetNXPNE8TWtPIwL6CeWktO8BeBUKv8DCBAQABoMNjM3NDIzMTgzODA1Igxeg3ctL6VM70S%2B9Isq3AO4SStq8znywXf%2B0jqH0N%2FRmWxHdri3EFlFKEEBKVSvfz%2FRwK4KHci4Dqw%2Bnr%2FuCxbE%2BaZN72ymDtoB46mAqvI9P3Q3%2BCaQoPXRA0FmOQ7zQFgRw7R%2B8rPvav6TlyvZHGDxwZIoQPCYbzsCcFXI3qts7DsFn%2Fe1yY0l%2FmkchLxUqgcaC%2B4zG6vsEtpx0YF9v1Os6XYr5kmrLeStvWpw0O7rD6Q0PwMWdlILCjJ6FZdFIxPLDwpQwu3wWabx44Yr4ByDXPn6eMFU7huXqmhrYTCxZJiQVkgxFt30Qxb9lofHrjQWEXrtufzWwhe5WAP8NHNmfCxFUGLBP%2BlLa9S8dSszNY3QVPmuVu1uAebcpAmCGcf%2B9uJqsC2LmodgJb3S41uxV1s10ivtQDneoZN08cZ0MlSJiSYMbFuNbrHtjV3SC%2BvMLf2OqGABUCj%2FzO07qejMKuyF65HaJOUBVDjEv5uleNCevAvXaSJdA5YZ0dbqb9Cnd%2FDlV1K3iAxWYDB6RDIa4MoiaiUIwHCfVWk%2BWVmR4t1ML014gRAWUWTZUAIQtfpJd4pjj%2FxpmpP1ySYIGfqhOokFIBUVqyRwtqtsCI4MGZH3T%2BrzBUyFFn1flplZwZFV4vTn%2Bag5agq2iDDDo6%2FCBjqkAVkMeL12NqtWXl%2Fu4O1oX1DH3JvdxAGoLLgn3A8rSQf4xlRd8bLqfpE9dlJOYua2%2Fq9ktOUOTln7LWUMbx3EwxoNBqLe8FbKO9kDCxNY3hVtCAEIrz4%2Fjq5DMRHstxmaYDtL4ehDi7krXRFMJB8EqFp1F12tZatgPJB3wvVdq909796zAy0uKNfIvPsrOTUgD8VRc3gY8s9rrzZ%2BPuBIqFq2oeAw&X-Amz-Signature=3a64dd94d01bb4de0e6fd1f6d74ccaa377a6d7f301d926e37be486c5b0f1c3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF6XTAW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD9iR74Z57XQ9QKoVlVkaCJo5NmnEiTvyT1nySZANgQXQIhALfzvQVpACmVhQXPuetNXPNE8TWtPIwL6CeWktO8BeBUKv8DCBAQABoMNjM3NDIzMTgzODA1Igxeg3ctL6VM70S%2B9Isq3AO4SStq8znywXf%2B0jqH0N%2FRmWxHdri3EFlFKEEBKVSvfz%2FRwK4KHci4Dqw%2Bnr%2FuCxbE%2BaZN72ymDtoB46mAqvI9P3Q3%2BCaQoPXRA0FmOQ7zQFgRw7R%2B8rPvav6TlyvZHGDxwZIoQPCYbzsCcFXI3qts7DsFn%2Fe1yY0l%2FmkchLxUqgcaC%2B4zG6vsEtpx0YF9v1Os6XYr5kmrLeStvWpw0O7rD6Q0PwMWdlILCjJ6FZdFIxPLDwpQwu3wWabx44Yr4ByDXPn6eMFU7huXqmhrYTCxZJiQVkgxFt30Qxb9lofHrjQWEXrtufzWwhe5WAP8NHNmfCxFUGLBP%2BlLa9S8dSszNY3QVPmuVu1uAebcpAmCGcf%2B9uJqsC2LmodgJb3S41uxV1s10ivtQDneoZN08cZ0MlSJiSYMbFuNbrHtjV3SC%2BvMLf2OqGABUCj%2FzO07qejMKuyF65HaJOUBVDjEv5uleNCevAvXaSJdA5YZ0dbqb9Cnd%2FDlV1K3iAxWYDB6RDIa4MoiaiUIwHCfVWk%2BWVmR4t1ML014gRAWUWTZUAIQtfpJd4pjj%2FxpmpP1ySYIGfqhOokFIBUVqyRwtqtsCI4MGZH3T%2BrzBUyFFn1flplZwZFV4vTn%2Bag5agq2iDDDo6%2FCBjqkAVkMeL12NqtWXl%2Fu4O1oX1DH3JvdxAGoLLgn3A8rSQf4xlRd8bLqfpE9dlJOYua2%2Fq9ktOUOTln7LWUMbx3EwxoNBqLe8FbKO9kDCxNY3hVtCAEIrz4%2Fjq5DMRHstxmaYDtL4ehDi7krXRFMJB8EqFp1F12tZatgPJB3wvVdq909796zAy0uKNfIvPsrOTUgD8VRc3gY8s9rrzZ%2BPuBIqFq2oeAw&X-Amz-Signature=c9bbb6faeeb62ef7b369c1987b6552351e2c36419fb11a8aa669b8dbf04a153a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF6XTAW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD9iR74Z57XQ9QKoVlVkaCJo5NmnEiTvyT1nySZANgQXQIhALfzvQVpACmVhQXPuetNXPNE8TWtPIwL6CeWktO8BeBUKv8DCBAQABoMNjM3NDIzMTgzODA1Igxeg3ctL6VM70S%2B9Isq3AO4SStq8znywXf%2B0jqH0N%2FRmWxHdri3EFlFKEEBKVSvfz%2FRwK4KHci4Dqw%2Bnr%2FuCxbE%2BaZN72ymDtoB46mAqvI9P3Q3%2BCaQoPXRA0FmOQ7zQFgRw7R%2B8rPvav6TlyvZHGDxwZIoQPCYbzsCcFXI3qts7DsFn%2Fe1yY0l%2FmkchLxUqgcaC%2B4zG6vsEtpx0YF9v1Os6XYr5kmrLeStvWpw0O7rD6Q0PwMWdlILCjJ6FZdFIxPLDwpQwu3wWabx44Yr4ByDXPn6eMFU7huXqmhrYTCxZJiQVkgxFt30Qxb9lofHrjQWEXrtufzWwhe5WAP8NHNmfCxFUGLBP%2BlLa9S8dSszNY3QVPmuVu1uAebcpAmCGcf%2B9uJqsC2LmodgJb3S41uxV1s10ivtQDneoZN08cZ0MlSJiSYMbFuNbrHtjV3SC%2BvMLf2OqGABUCj%2FzO07qejMKuyF65HaJOUBVDjEv5uleNCevAvXaSJdA5YZ0dbqb9Cnd%2FDlV1K3iAxWYDB6RDIa4MoiaiUIwHCfVWk%2BWVmR4t1ML014gRAWUWTZUAIQtfpJd4pjj%2FxpmpP1ySYIGfqhOokFIBUVqyRwtqtsCI4MGZH3T%2BrzBUyFFn1flplZwZFV4vTn%2Bag5agq2iDDDo6%2FCBjqkAVkMeL12NqtWXl%2Fu4O1oX1DH3JvdxAGoLLgn3A8rSQf4xlRd8bLqfpE9dlJOYua2%2Fq9ktOUOTln7LWUMbx3EwxoNBqLe8FbKO9kDCxNY3hVtCAEIrz4%2Fjq5DMRHstxmaYDtL4ehDi7krXRFMJB8EqFp1F12tZatgPJB3wvVdq909796zAy0uKNfIvPsrOTUgD8VRc3gY8s9rrzZ%2BPuBIqFq2oeAw&X-Amz-Signature=653e4bf60cf9a927f1168a7855f84d417f673cadab55410712a99041db37f284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6XF35T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID50egBBH6QJ3upzDdYd9FU6YWT6lNt1DnnwLOJ6NkaFAiAKMIse4OJW3tIE7D1vpLEzBZ9fMjT6okaeJcjqr5RmVyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYHEPSif8kz4XaegQKtwDFcL0QVsda1pyw9EfEjmzsDjruDb8Ml5Tt0PYCPPiz%2F79FwxEmVwkH0AjnBtbDW8iv%2FxQz%2FuM3Tzvx6KoLu16YpwTi4AFNmAbxxP8scpC2E3DhhKV4SkEYMWsFskPHKNc3iiBITnSCt4yve%2BhrcE22Fv%2B%2ByWT3V3neox78u2JLcaYYUOc4%2FGRn%2BH%2BM5tVo8sLXhbswhF1C5qF3%2BSK55OgJLJpmvvfP0S2re6U7RLDAJ9QAiwXkdYt6I0PwxxFDpEhM3YAC05yFvuvddUBlVWlx3Q92UgrW2vqw0jD9hMWSEZkFfek7dg0tRu6h1tHsn3Ytj1V1l6tUlRGoHtP2yL%2B7thm9CtjTkcDJzHJMsIOnGRKFIoB97MpcxspRKbpxf3455hIjVf4zaFxpSxjNZDfvW2tsC728zWKzeWeiQkLI51NKEHvmEcFeMIaJlv7DcrQAW6lZfGCGLTMNbLGHHo8gR4cvGvtiUaUUhPiY8xUyst7lFAx7zrI3VwyWp93qC%2Bp2LgsgEUzuDKXdyCHVehlWJ6rMtxPhTFLLo4jXwEZ3Rvm6WsvZsI7Z%2FmqMz74KnpjSaEKeKsJaD6BSfmMb9Z%2BdFKYPlT9o%2F4swoaMXyRBbaDmp01SWhtn1s6sIzIwu8y5vgY6pgHBIfLAZBXJymzuofnKEfx6bSvbA2iUXuwxuYEkAxeeGSDqc18CuV%2FCyYsUCD%2BdcGOeyPWFtKv7WeV0LVmRB2m6LK9L02gRVhF9KoPD%2BVYtDCVVTGOaE6hDaaFnY%2FO031tXEoo%2B2jQQ1S0NxJZEeHXgTRrPekzog7s89Gg%2Fz22jL5MaX4uj06kqMgNW0cvUq98VctMAB1ZyemrJckZSrDUfnL05ZUWs&X-Amz-Signature=27a04d7c141f029657c4c14637e4c8cd96cc5a7b395720827226920c250a71c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6XF35T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID50egBBH6QJ3upzDdYd9FU6YWT6lNt1DnnwLOJ6NkaFAiAKMIse4OJW3tIE7D1vpLEzBZ9fMjT6okaeJcjqr5RmVyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYHEPSif8kz4XaegQKtwDFcL0QVsda1pyw9EfEjmzsDjruDb8Ml5Tt0PYCPPiz%2F79FwxEmVwkH0AjnBtbDW8iv%2FxQz%2FuM3Tzvx6KoLu16YpwTi4AFNmAbxxP8scpC2E3DhhKV4SkEYMWsFskPHKNc3iiBITnSCt4yve%2BhrcE22Fv%2B%2ByWT3V3neox78u2JLcaYYUOc4%2FGRn%2BH%2BM5tVo8sLXhbswhF1C5qF3%2BSK55OgJLJpmvvfP0S2re6U7RLDAJ9QAiwXkdYt6I0PwxxFDpEhM3YAC05yFvuvddUBlVWlx3Q92UgrW2vqw0jD9hMWSEZkFfek7dg0tRu6h1tHsn3Ytj1V1l6tUlRGoHtP2yL%2B7thm9CtjTkcDJzHJMsIOnGRKFIoB97MpcxspRKbpxf3455hIjVf4zaFxpSxjNZDfvW2tsC728zWKzeWeiQkLI51NKEHvmEcFeMIaJlv7DcrQAW6lZfGCGLTMNbLGHHo8gR4cvGvtiUaUUhPiY8xUyst7lFAx7zrI3VwyWp93qC%2Bp2LgsgEUzuDKXdyCHVehlWJ6rMtxPhTFLLo4jXwEZ3Rvm6WsvZsI7Z%2FmqMz74KnpjSaEKeKsJaD6BSfmMb9Z%2BdFKYPlT9o%2F4swoaMXyRBbaDmp01SWhtn1s6sIzIwu8y5vgY6pgHBIfLAZBXJymzuofnKEfx6bSvbA2iUXuwxuYEkAxeeGSDqc18CuV%2FCyYsUCD%2BdcGOeyPWFtKv7WeV0LVmRB2m6LK9L02gRVhF9KoPD%2BVYtDCVVTGOaE6hDaaFnY%2FO031tXEoo%2B2jQQ1S0NxJZEeHXgTRrPekzog7s89Gg%2Fz22jL5MaX4uj06kqMgNW0cvUq98VctMAB1ZyemrJckZSrDUfnL05ZUWs&X-Amz-Signature=f72c02bb746d806a041cda91c82e4397277536b3808bbcaec0d5ea31b5e55d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6XF35T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID50egBBH6QJ3upzDdYd9FU6YWT6lNt1DnnwLOJ6NkaFAiAKMIse4OJW3tIE7D1vpLEzBZ9fMjT6okaeJcjqr5RmVyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYHEPSif8kz4XaegQKtwDFcL0QVsda1pyw9EfEjmzsDjruDb8Ml5Tt0PYCPPiz%2F79FwxEmVwkH0AjnBtbDW8iv%2FxQz%2FuM3Tzvx6KoLu16YpwTi4AFNmAbxxP8scpC2E3DhhKV4SkEYMWsFskPHKNc3iiBITnSCt4yve%2BhrcE22Fv%2B%2ByWT3V3neox78u2JLcaYYUOc4%2FGRn%2BH%2BM5tVo8sLXhbswhF1C5qF3%2BSK55OgJLJpmvvfP0S2re6U7RLDAJ9QAiwXkdYt6I0PwxxFDpEhM3YAC05yFvuvddUBlVWlx3Q92UgrW2vqw0jD9hMWSEZkFfek7dg0tRu6h1tHsn3Ytj1V1l6tUlRGoHtP2yL%2B7thm9CtjTkcDJzHJMsIOnGRKFIoB97MpcxspRKbpxf3455hIjVf4zaFxpSxjNZDfvW2tsC728zWKzeWeiQkLI51NKEHvmEcFeMIaJlv7DcrQAW6lZfGCGLTMNbLGHHo8gR4cvGvtiUaUUhPiY8xUyst7lFAx7zrI3VwyWp93qC%2Bp2LgsgEUzuDKXdyCHVehlWJ6rMtxPhTFLLo4jXwEZ3Rvm6WsvZsI7Z%2FmqMz74KnpjSaEKeKsJaD6BSfmMb9Z%2BdFKYPlT9o%2F4swoaMXyRBbaDmp01SWhtn1s6sIzIwu8y5vgY6pgHBIfLAZBXJymzuofnKEfx6bSvbA2iUXuwxuYEkAxeeGSDqc18CuV%2FCyYsUCD%2BdcGOeyPWFtKv7WeV0LVmRB2m6LK9L02gRVhF9KoPD%2BVYtDCVVTGOaE6hDaaFnY%2FO031tXEoo%2B2jQQ1S0NxJZEeHXgTRrPekzog7s89Gg%2Fz22jL5MaX4uj06kqMgNW0cvUq98VctMAB1ZyemrJckZSrDUfnL05ZUWs&X-Amz-Signature=c66844cd6c7352d292783ae77a93d94f4396c18d0f26218e14983275b346441c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6XF35T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID50egBBH6QJ3upzDdYd9FU6YWT6lNt1DnnwLOJ6NkaFAiAKMIse4OJW3tIE7D1vpLEzBZ9fMjT6okaeJcjqr5RmVyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYHEPSif8kz4XaegQKtwDFcL0QVsda1pyw9EfEjmzsDjruDb8Ml5Tt0PYCPPiz%2F79FwxEmVwkH0AjnBtbDW8iv%2FxQz%2FuM3Tzvx6KoLu16YpwTi4AFNmAbxxP8scpC2E3DhhKV4SkEYMWsFskPHKNc3iiBITnSCt4yve%2BhrcE22Fv%2B%2ByWT3V3neox78u2JLcaYYUOc4%2FGRn%2BH%2BM5tVo8sLXhbswhF1C5qF3%2BSK55OgJLJpmvvfP0S2re6U7RLDAJ9QAiwXkdYt6I0PwxxFDpEhM3YAC05yFvuvddUBlVWlx3Q92UgrW2vqw0jD9hMWSEZkFfek7dg0tRu6h1tHsn3Ytj1V1l6tUlRGoHtP2yL%2B7thm9CtjTkcDJzHJMsIOnGRKFIoB97MpcxspRKbpxf3455hIjVf4zaFxpSxjNZDfvW2tsC728zWKzeWeiQkLI51NKEHvmEcFeMIaJlv7DcrQAW6lZfGCGLTMNbLGHHo8gR4cvGvtiUaUUhPiY8xUyst7lFAx7zrI3VwyWp93qC%2Bp2LgsgEUzuDKXdyCHVehlWJ6rMtxPhTFLLo4jXwEZ3Rvm6WsvZsI7Z%2FmqMz74KnpjSaEKeKsJaD6BSfmMb9Z%2BdFKYPlT9o%2F4swoaMXyRBbaDmp01SWhtn1s6sIzIwu8y5vgY6pgHBIfLAZBXJymzuofnKEfx6bSvbA2iUXuwxuYEkAxeeGSDqc18CuV%2FCyYsUCD%2BdcGOeyPWFtKv7WeV0LVmRB2m6LK9L02gRVhF9KoPD%2BVYtDCVVTGOaE6hDaaFnY%2FO031tXEoo%2B2jQQ1S0NxJZEeHXgTRrPekzog7s89Gg%2Fz22jL5MaX4uj06kqMgNW0cvUq98VctMAB1ZyemrJckZSrDUfnL05ZUWs&X-Amz-Signature=acdf790ddd7086dfadb8736145195241920dc57192e4f8b5b3836499c69f9177&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6XF35T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID50egBBH6QJ3upzDdYd9FU6YWT6lNt1DnnwLOJ6NkaFAiAKMIse4OJW3tIE7D1vpLEzBZ9fMjT6okaeJcjqr5RmVyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYHEPSif8kz4XaegQKtwDFcL0QVsda1pyw9EfEjmzsDjruDb8Ml5Tt0PYCPPiz%2F79FwxEmVwkH0AjnBtbDW8iv%2FxQz%2FuM3Tzvx6KoLu16YpwTi4AFNmAbxxP8scpC2E3DhhKV4SkEYMWsFskPHKNc3iiBITnSCt4yve%2BhrcE22Fv%2B%2ByWT3V3neox78u2JLcaYYUOc4%2FGRn%2BH%2BM5tVo8sLXhbswhF1C5qF3%2BSK55OgJLJpmvvfP0S2re6U7RLDAJ9QAiwXkdYt6I0PwxxFDpEhM3YAC05yFvuvddUBlVWlx3Q92UgrW2vqw0jD9hMWSEZkFfek7dg0tRu6h1tHsn3Ytj1V1l6tUlRGoHtP2yL%2B7thm9CtjTkcDJzHJMsIOnGRKFIoB97MpcxspRKbpxf3455hIjVf4zaFxpSxjNZDfvW2tsC728zWKzeWeiQkLI51NKEHvmEcFeMIaJlv7DcrQAW6lZfGCGLTMNbLGHHo8gR4cvGvtiUaUUhPiY8xUyst7lFAx7zrI3VwyWp93qC%2Bp2LgsgEUzuDKXdyCHVehlWJ6rMtxPhTFLLo4jXwEZ3Rvm6WsvZsI7Z%2FmqMz74KnpjSaEKeKsJaD6BSfmMb9Z%2BdFKYPlT9o%2F4swoaMXyRBbaDmp01SWhtn1s6sIzIwu8y5vgY6pgHBIfLAZBXJymzuofnKEfx6bSvbA2iUXuwxuYEkAxeeGSDqc18CuV%2FCyYsUCD%2BdcGOeyPWFtKv7WeV0LVmRB2m6LK9L02gRVhF9KoPD%2BVYtDCVVTGOaE6hDaaFnY%2FO031tXEoo%2B2jQQ1S0NxJZEeHXgTRrPekzog7s89Gg%2Fz22jL5MaX4uj06kqMgNW0cvUq98VctMAB1ZyemrJckZSrDUfnL05ZUWs&X-Amz-Signature=11168e674ecfc722bbaccb68ef9afb19fd03a4bf90c6fea5406adfce72fab622&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6XF35T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID50egBBH6QJ3upzDdYd9FU6YWT6lNt1DnnwLOJ6NkaFAiAKMIse4OJW3tIE7D1vpLEzBZ9fMjT6okaeJcjqr5RmVyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYHEPSif8kz4XaegQKtwDFcL0QVsda1pyw9EfEjmzsDjruDb8Ml5Tt0PYCPPiz%2F79FwxEmVwkH0AjnBtbDW8iv%2FxQz%2FuM3Tzvx6KoLu16YpwTi4AFNmAbxxP8scpC2E3DhhKV4SkEYMWsFskPHKNc3iiBITnSCt4yve%2BhrcE22Fv%2B%2ByWT3V3neox78u2JLcaYYUOc4%2FGRn%2BH%2BM5tVo8sLXhbswhF1C5qF3%2BSK55OgJLJpmvvfP0S2re6U7RLDAJ9QAiwXkdYt6I0PwxxFDpEhM3YAC05yFvuvddUBlVWlx3Q92UgrW2vqw0jD9hMWSEZkFfek7dg0tRu6h1tHsn3Ytj1V1l6tUlRGoHtP2yL%2B7thm9CtjTkcDJzHJMsIOnGRKFIoB97MpcxspRKbpxf3455hIjVf4zaFxpSxjNZDfvW2tsC728zWKzeWeiQkLI51NKEHvmEcFeMIaJlv7DcrQAW6lZfGCGLTMNbLGHHo8gR4cvGvtiUaUUhPiY8xUyst7lFAx7zrI3VwyWp93qC%2Bp2LgsgEUzuDKXdyCHVehlWJ6rMtxPhTFLLo4jXwEZ3Rvm6WsvZsI7Z%2FmqMz74KnpjSaEKeKsJaD6BSfmMb9Z%2BdFKYPlT9o%2F4swoaMXyRBbaDmp01SWhtn1s6sIzIwu8y5vgY6pgHBIfLAZBXJymzuofnKEfx6bSvbA2iUXuwxuYEkAxeeGSDqc18CuV%2FCyYsUCD%2BdcGOeyPWFtKv7WeV0LVmRB2m6LK9L02gRVhF9KoPD%2BVYtDCVVTGOaE6hDaaFnY%2FO031tXEoo%2B2jQQ1S0NxJZEeHXgTRrPekzog7s89Gg%2Fz22jL5MaX4uj06kqMgNW0cvUq98VctMAB1ZyemrJckZSrDUfnL05ZUWs&X-Amz-Signature=180759b315ab87ee331b5a70a4e0cb4063372dc97838d1ebda847751c40ba1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6XF35T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID50egBBH6QJ3upzDdYd9FU6YWT6lNt1DnnwLOJ6NkaFAiAKMIse4OJW3tIE7D1vpLEzBZ9fMjT6okaeJcjqr5RmVyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYHEPSif8kz4XaegQKtwDFcL0QVsda1pyw9EfEjmzsDjruDb8Ml5Tt0PYCPPiz%2F79FwxEmVwkH0AjnBtbDW8iv%2FxQz%2FuM3Tzvx6KoLu16YpwTi4AFNmAbxxP8scpC2E3DhhKV4SkEYMWsFskPHKNc3iiBITnSCt4yve%2BhrcE22Fv%2B%2ByWT3V3neox78u2JLcaYYUOc4%2FGRn%2BH%2BM5tVo8sLXhbswhF1C5qF3%2BSK55OgJLJpmvvfP0S2re6U7RLDAJ9QAiwXkdYt6I0PwxxFDpEhM3YAC05yFvuvddUBlVWlx3Q92UgrW2vqw0jD9hMWSEZkFfek7dg0tRu6h1tHsn3Ytj1V1l6tUlRGoHtP2yL%2B7thm9CtjTkcDJzHJMsIOnGRKFIoB97MpcxspRKbpxf3455hIjVf4zaFxpSxjNZDfvW2tsC728zWKzeWeiQkLI51NKEHvmEcFeMIaJlv7DcrQAW6lZfGCGLTMNbLGHHo8gR4cvGvtiUaUUhPiY8xUyst7lFAx7zrI3VwyWp93qC%2Bp2LgsgEUzuDKXdyCHVehlWJ6rMtxPhTFLLo4jXwEZ3Rvm6WsvZsI7Z%2FmqMz74KnpjSaEKeKsJaD6BSfmMb9Z%2BdFKYPlT9o%2F4swoaMXyRBbaDmp01SWhtn1s6sIzIwu8y5vgY6pgHBIfLAZBXJymzuofnKEfx6bSvbA2iUXuwxuYEkAxeeGSDqc18CuV%2FCyYsUCD%2BdcGOeyPWFtKv7WeV0LVmRB2m6LK9L02gRVhF9KoPD%2BVYtDCVVTGOaE6hDaaFnY%2FO031tXEoo%2B2jQQ1S0NxJZEeHXgTRrPekzog7s89Gg%2Fz22jL5MaX4uj06kqMgNW0cvUq98VctMAB1ZyemrJckZSrDUfnL05ZUWs&X-Amz-Signature=bfe29ee1d0827f21adb9c7ba6810f3fc63fecc9f5cdec99f2bd6616175357134&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6XF35T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID50egBBH6QJ3upzDdYd9FU6YWT6lNt1DnnwLOJ6NkaFAiAKMIse4OJW3tIE7D1vpLEzBZ9fMjT6okaeJcjqr5RmVyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYHEPSif8kz4XaegQKtwDFcL0QVsda1pyw9EfEjmzsDjruDb8Ml5Tt0PYCPPiz%2F79FwxEmVwkH0AjnBtbDW8iv%2FxQz%2FuM3Tzvx6KoLu16YpwTi4AFNmAbxxP8scpC2E3DhhKV4SkEYMWsFskPHKNc3iiBITnSCt4yve%2BhrcE22Fv%2B%2ByWT3V3neox78u2JLcaYYUOc4%2FGRn%2BH%2BM5tVo8sLXhbswhF1C5qF3%2BSK55OgJLJpmvvfP0S2re6U7RLDAJ9QAiwXkdYt6I0PwxxFDpEhM3YAC05yFvuvddUBlVWlx3Q92UgrW2vqw0jD9hMWSEZkFfek7dg0tRu6h1tHsn3Ytj1V1l6tUlRGoHtP2yL%2B7thm9CtjTkcDJzHJMsIOnGRKFIoB97MpcxspRKbpxf3455hIjVf4zaFxpSxjNZDfvW2tsC728zWKzeWeiQkLI51NKEHvmEcFeMIaJlv7DcrQAW6lZfGCGLTMNbLGHHo8gR4cvGvtiUaUUhPiY8xUyst7lFAx7zrI3VwyWp93qC%2Bp2LgsgEUzuDKXdyCHVehlWJ6rMtxPhTFLLo4jXwEZ3Rvm6WsvZsI7Z%2FmqMz74KnpjSaEKeKsJaD6BSfmMb9Z%2BdFKYPlT9o%2F4swoaMXyRBbaDmp01SWhtn1s6sIzIwu8y5vgY6pgHBIfLAZBXJymzuofnKEfx6bSvbA2iUXuwxuYEkAxeeGSDqc18CuV%2FCyYsUCD%2BdcGOeyPWFtKv7WeV0LVmRB2m6LK9L02gRVhF9KoPD%2BVYtDCVVTGOaE6hDaaFnY%2FO031tXEoo%2B2jQQ1S0NxJZEeHXgTRrPekzog7s89Gg%2Fz22jL5MaX4uj06kqMgNW0cvUq98VctMAB1ZyemrJckZSrDUfnL05ZUWs&X-Amz-Signature=2bbc4cbf312eb3a3d320a2c211862fd992fe44cc3a2daf4a4c17566f7e69d281&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

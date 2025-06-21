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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWGXCAR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7RysSUixPhNrq%2FIn3Iq%2FodwxyW9hF%2FXHQUZSLeSofQQIhAKup%2BlIl1O%2B8WKxH5Ddaope%2BU5%2F2krZzlz58h1MKVvSEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB96IYXIv%2F9CWBmV0q3AOMQyusFzlunfcvYVH5kPkCel0jPfgpYLvTKS2vT%2FEUVM5tI%2FxnOCCMosIj%2FBTjo1ILHueTtLo6t1EYVFA5E6vhvl7E0vxHZXhyUKsCYdlnSHWT9dgRMlewVmB7FRIxAbx1xKW8iCfz47kD6o6ctZNSt3ezetTIaGhcTudhiQYDwgja374eJae61Kb2MuUgxe2GY0D9k%2Bgo6vU92UKJLMPRBfwQ8O4Yi62smGVmdS7sdU%2FDoFfJ2irPoRPeI07DZje2RwfvP9a6opt6YeH9XgW%2FUAx%2FgelaJ7hm%2FG9QzigRWxhfBEIqzvjzGp%2BRXWBjzKlQ9PsSqCQqHL%2F%2FsyFCmMheIJJgtMljzr1PzmUnThUJtxaapV6NQoGR8JT1Nns2Y%2Bleu81LPW6XB%2FhV0fBRUa%2BQWqBqsaL4l3GTW8YM%2F%2BWtF4y%2BClfiFnPMOSVWb9G%2FMYyWYhECWDqXJ6v4WE%2BtmiYuRdQj5ffUDRZqlj2IaJEIAXP7FprCxsJr4VY4O%2FyvzWoiDk5hRLnhwgd2V05VVAm4bYIkGrWUWqfABYazZN1lOqkQpb5tPgCzD9WTAO5dZXEvHMBJ%2BfZyzwtaT1eOw1fT5HAv4MoDa50FheR4tC2dduk%2FNFryCzuWdfTmJzDQ8NrCBjqkAWnu6fkf2M4rZSOIEKWq%2FoYoIQX7Yeikltn1ZXxW5ors8uRm17kanHs8IrTqSXJdIXVY4VeYxpT2a0bLVzeRBHNO9VmEEEpDBBrLicPTCZDkTP02GZjaSgfj3cuZfjKHNXLQsu%2FnGIGdn4TAajMBagbEFOKYSqpdiRykANUpmdFlpyUAItfanmNv2xB6v2VabRc4FCd288tNZw1e3vFsy5TIFMPq&X-Amz-Signature=ff9eb75d252c2601b8d8729a90d8776961620459a1d19ec040b07df9c2d4482f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWGXCAR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7RysSUixPhNrq%2FIn3Iq%2FodwxyW9hF%2FXHQUZSLeSofQQIhAKup%2BlIl1O%2B8WKxH5Ddaope%2BU5%2F2krZzlz58h1MKVvSEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB96IYXIv%2F9CWBmV0q3AOMQyusFzlunfcvYVH5kPkCel0jPfgpYLvTKS2vT%2FEUVM5tI%2FxnOCCMosIj%2FBTjo1ILHueTtLo6t1EYVFA5E6vhvl7E0vxHZXhyUKsCYdlnSHWT9dgRMlewVmB7FRIxAbx1xKW8iCfz47kD6o6ctZNSt3ezetTIaGhcTudhiQYDwgja374eJae61Kb2MuUgxe2GY0D9k%2Bgo6vU92UKJLMPRBfwQ8O4Yi62smGVmdS7sdU%2FDoFfJ2irPoRPeI07DZje2RwfvP9a6opt6YeH9XgW%2FUAx%2FgelaJ7hm%2FG9QzigRWxhfBEIqzvjzGp%2BRXWBjzKlQ9PsSqCQqHL%2F%2FsyFCmMheIJJgtMljzr1PzmUnThUJtxaapV6NQoGR8JT1Nns2Y%2Bleu81LPW6XB%2FhV0fBRUa%2BQWqBqsaL4l3GTW8YM%2F%2BWtF4y%2BClfiFnPMOSVWb9G%2FMYyWYhECWDqXJ6v4WE%2BtmiYuRdQj5ffUDRZqlj2IaJEIAXP7FprCxsJr4VY4O%2FyvzWoiDk5hRLnhwgd2V05VVAm4bYIkGrWUWqfABYazZN1lOqkQpb5tPgCzD9WTAO5dZXEvHMBJ%2BfZyzwtaT1eOw1fT5HAv4MoDa50FheR4tC2dduk%2FNFryCzuWdfTmJzDQ8NrCBjqkAWnu6fkf2M4rZSOIEKWq%2FoYoIQX7Yeikltn1ZXxW5ors8uRm17kanHs8IrTqSXJdIXVY4VeYxpT2a0bLVzeRBHNO9VmEEEpDBBrLicPTCZDkTP02GZjaSgfj3cuZfjKHNXLQsu%2FnGIGdn4TAajMBagbEFOKYSqpdiRykANUpmdFlpyUAItfanmNv2xB6v2VabRc4FCd288tNZw1e3vFsy5TIFMPq&X-Amz-Signature=c2b734beb6b9577881e33811f2f4feaa8af1b71402f5ed42c7a7f28e2cdc4387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWGXCAR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7RysSUixPhNrq%2FIn3Iq%2FodwxyW9hF%2FXHQUZSLeSofQQIhAKup%2BlIl1O%2B8WKxH5Ddaope%2BU5%2F2krZzlz58h1MKVvSEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB96IYXIv%2F9CWBmV0q3AOMQyusFzlunfcvYVH5kPkCel0jPfgpYLvTKS2vT%2FEUVM5tI%2FxnOCCMosIj%2FBTjo1ILHueTtLo6t1EYVFA5E6vhvl7E0vxHZXhyUKsCYdlnSHWT9dgRMlewVmB7FRIxAbx1xKW8iCfz47kD6o6ctZNSt3ezetTIaGhcTudhiQYDwgja374eJae61Kb2MuUgxe2GY0D9k%2Bgo6vU92UKJLMPRBfwQ8O4Yi62smGVmdS7sdU%2FDoFfJ2irPoRPeI07DZje2RwfvP9a6opt6YeH9XgW%2FUAx%2FgelaJ7hm%2FG9QzigRWxhfBEIqzvjzGp%2BRXWBjzKlQ9PsSqCQqHL%2F%2FsyFCmMheIJJgtMljzr1PzmUnThUJtxaapV6NQoGR8JT1Nns2Y%2Bleu81LPW6XB%2FhV0fBRUa%2BQWqBqsaL4l3GTW8YM%2F%2BWtF4y%2BClfiFnPMOSVWb9G%2FMYyWYhECWDqXJ6v4WE%2BtmiYuRdQj5ffUDRZqlj2IaJEIAXP7FprCxsJr4VY4O%2FyvzWoiDk5hRLnhwgd2V05VVAm4bYIkGrWUWqfABYazZN1lOqkQpb5tPgCzD9WTAO5dZXEvHMBJ%2BfZyzwtaT1eOw1fT5HAv4MoDa50FheR4tC2dduk%2FNFryCzuWdfTmJzDQ8NrCBjqkAWnu6fkf2M4rZSOIEKWq%2FoYoIQX7Yeikltn1ZXxW5ors8uRm17kanHs8IrTqSXJdIXVY4VeYxpT2a0bLVzeRBHNO9VmEEEpDBBrLicPTCZDkTP02GZjaSgfj3cuZfjKHNXLQsu%2FnGIGdn4TAajMBagbEFOKYSqpdiRykANUpmdFlpyUAItfanmNv2xB6v2VabRc4FCd288tNZw1e3vFsy5TIFMPq&X-Amz-Signature=8ec21b78a8611f50f28dcf0730f2af7a5f962120fa88c1fa2b45c4eec8c5be90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWGXCAR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7RysSUixPhNrq%2FIn3Iq%2FodwxyW9hF%2FXHQUZSLeSofQQIhAKup%2BlIl1O%2B8WKxH5Ddaope%2BU5%2F2krZzlz58h1MKVvSEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB96IYXIv%2F9CWBmV0q3AOMQyusFzlunfcvYVH5kPkCel0jPfgpYLvTKS2vT%2FEUVM5tI%2FxnOCCMosIj%2FBTjo1ILHueTtLo6t1EYVFA5E6vhvl7E0vxHZXhyUKsCYdlnSHWT9dgRMlewVmB7FRIxAbx1xKW8iCfz47kD6o6ctZNSt3ezetTIaGhcTudhiQYDwgja374eJae61Kb2MuUgxe2GY0D9k%2Bgo6vU92UKJLMPRBfwQ8O4Yi62smGVmdS7sdU%2FDoFfJ2irPoRPeI07DZje2RwfvP9a6opt6YeH9XgW%2FUAx%2FgelaJ7hm%2FG9QzigRWxhfBEIqzvjzGp%2BRXWBjzKlQ9PsSqCQqHL%2F%2FsyFCmMheIJJgtMljzr1PzmUnThUJtxaapV6NQoGR8JT1Nns2Y%2Bleu81LPW6XB%2FhV0fBRUa%2BQWqBqsaL4l3GTW8YM%2F%2BWtF4y%2BClfiFnPMOSVWb9G%2FMYyWYhECWDqXJ6v4WE%2BtmiYuRdQj5ffUDRZqlj2IaJEIAXP7FprCxsJr4VY4O%2FyvzWoiDk5hRLnhwgd2V05VVAm4bYIkGrWUWqfABYazZN1lOqkQpb5tPgCzD9WTAO5dZXEvHMBJ%2BfZyzwtaT1eOw1fT5HAv4MoDa50FheR4tC2dduk%2FNFryCzuWdfTmJzDQ8NrCBjqkAWnu6fkf2M4rZSOIEKWq%2FoYoIQX7Yeikltn1ZXxW5ors8uRm17kanHs8IrTqSXJdIXVY4VeYxpT2a0bLVzeRBHNO9VmEEEpDBBrLicPTCZDkTP02GZjaSgfj3cuZfjKHNXLQsu%2FnGIGdn4TAajMBagbEFOKYSqpdiRykANUpmdFlpyUAItfanmNv2xB6v2VabRc4FCd288tNZw1e3vFsy5TIFMPq&X-Amz-Signature=defab30c7bba141b3302f31fd1559a11df76270f4671c9d836c98127e9bab2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWGXCAR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7RysSUixPhNrq%2FIn3Iq%2FodwxyW9hF%2FXHQUZSLeSofQQIhAKup%2BlIl1O%2B8WKxH5Ddaope%2BU5%2F2krZzlz58h1MKVvSEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB96IYXIv%2F9CWBmV0q3AOMQyusFzlunfcvYVH5kPkCel0jPfgpYLvTKS2vT%2FEUVM5tI%2FxnOCCMosIj%2FBTjo1ILHueTtLo6t1EYVFA5E6vhvl7E0vxHZXhyUKsCYdlnSHWT9dgRMlewVmB7FRIxAbx1xKW8iCfz47kD6o6ctZNSt3ezetTIaGhcTudhiQYDwgja374eJae61Kb2MuUgxe2GY0D9k%2Bgo6vU92UKJLMPRBfwQ8O4Yi62smGVmdS7sdU%2FDoFfJ2irPoRPeI07DZje2RwfvP9a6opt6YeH9XgW%2FUAx%2FgelaJ7hm%2FG9QzigRWxhfBEIqzvjzGp%2BRXWBjzKlQ9PsSqCQqHL%2F%2FsyFCmMheIJJgtMljzr1PzmUnThUJtxaapV6NQoGR8JT1Nns2Y%2Bleu81LPW6XB%2FhV0fBRUa%2BQWqBqsaL4l3GTW8YM%2F%2BWtF4y%2BClfiFnPMOSVWb9G%2FMYyWYhECWDqXJ6v4WE%2BtmiYuRdQj5ffUDRZqlj2IaJEIAXP7FprCxsJr4VY4O%2FyvzWoiDk5hRLnhwgd2V05VVAm4bYIkGrWUWqfABYazZN1lOqkQpb5tPgCzD9WTAO5dZXEvHMBJ%2BfZyzwtaT1eOw1fT5HAv4MoDa50FheR4tC2dduk%2FNFryCzuWdfTmJzDQ8NrCBjqkAWnu6fkf2M4rZSOIEKWq%2FoYoIQX7Yeikltn1ZXxW5ors8uRm17kanHs8IrTqSXJdIXVY4VeYxpT2a0bLVzeRBHNO9VmEEEpDBBrLicPTCZDkTP02GZjaSgfj3cuZfjKHNXLQsu%2FnGIGdn4TAajMBagbEFOKYSqpdiRykANUpmdFlpyUAItfanmNv2xB6v2VabRc4FCd288tNZw1e3vFsy5TIFMPq&X-Amz-Signature=2f9c400c19766df77011724510c0a85f97c536346229d7888e645c902716318e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWGXCAR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7RysSUixPhNrq%2FIn3Iq%2FodwxyW9hF%2FXHQUZSLeSofQQIhAKup%2BlIl1O%2B8WKxH5Ddaope%2BU5%2F2krZzlz58h1MKVvSEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB96IYXIv%2F9CWBmV0q3AOMQyusFzlunfcvYVH5kPkCel0jPfgpYLvTKS2vT%2FEUVM5tI%2FxnOCCMosIj%2FBTjo1ILHueTtLo6t1EYVFA5E6vhvl7E0vxHZXhyUKsCYdlnSHWT9dgRMlewVmB7FRIxAbx1xKW8iCfz47kD6o6ctZNSt3ezetTIaGhcTudhiQYDwgja374eJae61Kb2MuUgxe2GY0D9k%2Bgo6vU92UKJLMPRBfwQ8O4Yi62smGVmdS7sdU%2FDoFfJ2irPoRPeI07DZje2RwfvP9a6opt6YeH9XgW%2FUAx%2FgelaJ7hm%2FG9QzigRWxhfBEIqzvjzGp%2BRXWBjzKlQ9PsSqCQqHL%2F%2FsyFCmMheIJJgtMljzr1PzmUnThUJtxaapV6NQoGR8JT1Nns2Y%2Bleu81LPW6XB%2FhV0fBRUa%2BQWqBqsaL4l3GTW8YM%2F%2BWtF4y%2BClfiFnPMOSVWb9G%2FMYyWYhECWDqXJ6v4WE%2BtmiYuRdQj5ffUDRZqlj2IaJEIAXP7FprCxsJr4VY4O%2FyvzWoiDk5hRLnhwgd2V05VVAm4bYIkGrWUWqfABYazZN1lOqkQpb5tPgCzD9WTAO5dZXEvHMBJ%2BfZyzwtaT1eOw1fT5HAv4MoDa50FheR4tC2dduk%2FNFryCzuWdfTmJzDQ8NrCBjqkAWnu6fkf2M4rZSOIEKWq%2FoYoIQX7Yeikltn1ZXxW5ors8uRm17kanHs8IrTqSXJdIXVY4VeYxpT2a0bLVzeRBHNO9VmEEEpDBBrLicPTCZDkTP02GZjaSgfj3cuZfjKHNXLQsu%2FnGIGdn4TAajMBagbEFOKYSqpdiRykANUpmdFlpyUAItfanmNv2xB6v2VabRc4FCd288tNZw1e3vFsy5TIFMPq&X-Amz-Signature=5ecc7c173541abda4f644ca50e3559eccc4538f6fbbffc97fd1b9bd41af17443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWGXCAR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7RysSUixPhNrq%2FIn3Iq%2FodwxyW9hF%2FXHQUZSLeSofQQIhAKup%2BlIl1O%2B8WKxH5Ddaope%2BU5%2F2krZzlz58h1MKVvSEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB96IYXIv%2F9CWBmV0q3AOMQyusFzlunfcvYVH5kPkCel0jPfgpYLvTKS2vT%2FEUVM5tI%2FxnOCCMosIj%2FBTjo1ILHueTtLo6t1EYVFA5E6vhvl7E0vxHZXhyUKsCYdlnSHWT9dgRMlewVmB7FRIxAbx1xKW8iCfz47kD6o6ctZNSt3ezetTIaGhcTudhiQYDwgja374eJae61Kb2MuUgxe2GY0D9k%2Bgo6vU92UKJLMPRBfwQ8O4Yi62smGVmdS7sdU%2FDoFfJ2irPoRPeI07DZje2RwfvP9a6opt6YeH9XgW%2FUAx%2FgelaJ7hm%2FG9QzigRWxhfBEIqzvjzGp%2BRXWBjzKlQ9PsSqCQqHL%2F%2FsyFCmMheIJJgtMljzr1PzmUnThUJtxaapV6NQoGR8JT1Nns2Y%2Bleu81LPW6XB%2FhV0fBRUa%2BQWqBqsaL4l3GTW8YM%2F%2BWtF4y%2BClfiFnPMOSVWb9G%2FMYyWYhECWDqXJ6v4WE%2BtmiYuRdQj5ffUDRZqlj2IaJEIAXP7FprCxsJr4VY4O%2FyvzWoiDk5hRLnhwgd2V05VVAm4bYIkGrWUWqfABYazZN1lOqkQpb5tPgCzD9WTAO5dZXEvHMBJ%2BfZyzwtaT1eOw1fT5HAv4MoDa50FheR4tC2dduk%2FNFryCzuWdfTmJzDQ8NrCBjqkAWnu6fkf2M4rZSOIEKWq%2FoYoIQX7Yeikltn1ZXxW5ors8uRm17kanHs8IrTqSXJdIXVY4VeYxpT2a0bLVzeRBHNO9VmEEEpDBBrLicPTCZDkTP02GZjaSgfj3cuZfjKHNXLQsu%2FnGIGdn4TAajMBagbEFOKYSqpdiRykANUpmdFlpyUAItfanmNv2xB6v2VabRc4FCd288tNZw1e3vFsy5TIFMPq&X-Amz-Signature=24804afe8033c3857fbcef7cbca3616d6da26d2bb9712e10b1164698fb581762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWGXCAR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7RysSUixPhNrq%2FIn3Iq%2FodwxyW9hF%2FXHQUZSLeSofQQIhAKup%2BlIl1O%2B8WKxH5Ddaope%2BU5%2F2krZzlz58h1MKVvSEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB96IYXIv%2F9CWBmV0q3AOMQyusFzlunfcvYVH5kPkCel0jPfgpYLvTKS2vT%2FEUVM5tI%2FxnOCCMosIj%2FBTjo1ILHueTtLo6t1EYVFA5E6vhvl7E0vxHZXhyUKsCYdlnSHWT9dgRMlewVmB7FRIxAbx1xKW8iCfz47kD6o6ctZNSt3ezetTIaGhcTudhiQYDwgja374eJae61Kb2MuUgxe2GY0D9k%2Bgo6vU92UKJLMPRBfwQ8O4Yi62smGVmdS7sdU%2FDoFfJ2irPoRPeI07DZje2RwfvP9a6opt6YeH9XgW%2FUAx%2FgelaJ7hm%2FG9QzigRWxhfBEIqzvjzGp%2BRXWBjzKlQ9PsSqCQqHL%2F%2FsyFCmMheIJJgtMljzr1PzmUnThUJtxaapV6NQoGR8JT1Nns2Y%2Bleu81LPW6XB%2FhV0fBRUa%2BQWqBqsaL4l3GTW8YM%2F%2BWtF4y%2BClfiFnPMOSVWb9G%2FMYyWYhECWDqXJ6v4WE%2BtmiYuRdQj5ffUDRZqlj2IaJEIAXP7FprCxsJr4VY4O%2FyvzWoiDk5hRLnhwgd2V05VVAm4bYIkGrWUWqfABYazZN1lOqkQpb5tPgCzD9WTAO5dZXEvHMBJ%2BfZyzwtaT1eOw1fT5HAv4MoDa50FheR4tC2dduk%2FNFryCzuWdfTmJzDQ8NrCBjqkAWnu6fkf2M4rZSOIEKWq%2FoYoIQX7Yeikltn1ZXxW5ors8uRm17kanHs8IrTqSXJdIXVY4VeYxpT2a0bLVzeRBHNO9VmEEEpDBBrLicPTCZDkTP02GZjaSgfj3cuZfjKHNXLQsu%2FnGIGdn4TAajMBagbEFOKYSqpdiRykANUpmdFlpyUAItfanmNv2xB6v2VabRc4FCd288tNZw1e3vFsy5TIFMPq&X-Amz-Signature=b62d482d105d946820fa9429609cba010e28333a34a1f38a16abca07c0686ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7IRPSF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2GIQwep02r0yd2tWuOzd9JB8Z09c3pbeYbpWfDa%2BcEAiAV%2FX30gzStaGtCKcCNMD4YX4%2Fbahvo5f%2F03vGOHjytoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBji6zg%2BO8oBGrLwyKtwDQy3nebpg%2Bj6uE6dddtkvmYgq81B%2B%2BqGjeZ%2FhrOQB2EZpneYO0nv9wYi1mOUFH29RVrqJhOn8qzqkgPCC4GIfEOgmpQXx1EkfIZpSQ%2BRBr9ujCqISC7mFXIgqQvfQ0kCto2K4TcDWrRGiQBaTU7myp2CKpiL8%2B1vPeoKwIKKjhr0lcFkuHI4FbUPBPu2Ax3BtupFItObGP5T9kqXLLXV38E2bcWIikA7rYBLGLpevdRSzM8t2khtqzrQ%2FVHSzRDNmPqD%2BiHQ6TMcjbniF6u2BVzBlRcQOIEDGrhZ55GGv5ET2MttWdeeqlrGOdglPhIb6F9cCdTrgY3%2F0JwnrrRfWhJWTENTrkSN9THmIGjaLNPrfIk8FJNsniFeSvANRYjtGM%2BCLY7%2B5jFH8d%2FM7hqegdxQ7d2gSC8UlXCc6nA12peMdFZVLm89nmmyyxm7LU3x6n1DUwzARMDqPoz8IVZ2wz%2BWfp0YnMHIHwK4tdbXF72dpOAuny9sg1MjyyKl7jREcTR8nZ5mnm7HQmnXP8NwIK9Zc7dDS%2BlczeccSS%2FE1W2BTu73BNRZaG6r8Lk3cYZiu0vSApGuoZksNvlrymoKCI0DMimeBivQAH5h6f6PgXHTPWKCcnRgZEsq14h0w1sfwwAY6pgFgjuiLxOlObi2xxe5O7BssjVfPnVj%2B0eKc4FC3bFVclACMgn75xWB7R4Yi%2BiSdWDW%2BgSrEC8N9Akj5pDXJn6SjzjTlqzaNadtWlr6Phk7hrrL%2BoSTUmMw9%2FqcjEsUdP8XZrZkqnWmbDuelP6ah%2BYjc%2B7jTLTUdeNWBqq5BmleaYvGZ418sJIEQky6idK%2FkhEQKCZLvauXBl25z0KgivmqS3J3YsI2T&X-Amz-Signature=05d327c4784428d796a4667cc85867f7ea28f2fc67dd815056252cec34353f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7IRPSF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2GIQwep02r0yd2tWuOzd9JB8Z09c3pbeYbpWfDa%2BcEAiAV%2FX30gzStaGtCKcCNMD4YX4%2Fbahvo5f%2F03vGOHjytoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBji6zg%2BO8oBGrLwyKtwDQy3nebpg%2Bj6uE6dddtkvmYgq81B%2B%2BqGjeZ%2FhrOQB2EZpneYO0nv9wYi1mOUFH29RVrqJhOn8qzqkgPCC4GIfEOgmpQXx1EkfIZpSQ%2BRBr9ujCqISC7mFXIgqQvfQ0kCto2K4TcDWrRGiQBaTU7myp2CKpiL8%2B1vPeoKwIKKjhr0lcFkuHI4FbUPBPu2Ax3BtupFItObGP5T9kqXLLXV38E2bcWIikA7rYBLGLpevdRSzM8t2khtqzrQ%2FVHSzRDNmPqD%2BiHQ6TMcjbniF6u2BVzBlRcQOIEDGrhZ55GGv5ET2MttWdeeqlrGOdglPhIb6F9cCdTrgY3%2F0JwnrrRfWhJWTENTrkSN9THmIGjaLNPrfIk8FJNsniFeSvANRYjtGM%2BCLY7%2B5jFH8d%2FM7hqegdxQ7d2gSC8UlXCc6nA12peMdFZVLm89nmmyyxm7LU3x6n1DUwzARMDqPoz8IVZ2wz%2BWfp0YnMHIHwK4tdbXF72dpOAuny9sg1MjyyKl7jREcTR8nZ5mnm7HQmnXP8NwIK9Zc7dDS%2BlczeccSS%2FE1W2BTu73BNRZaG6r8Lk3cYZiu0vSApGuoZksNvlrymoKCI0DMimeBivQAH5h6f6PgXHTPWKCcnRgZEsq14h0w1sfwwAY6pgFgjuiLxOlObi2xxe5O7BssjVfPnVj%2B0eKc4FC3bFVclACMgn75xWB7R4Yi%2BiSdWDW%2BgSrEC8N9Akj5pDXJn6SjzjTlqzaNadtWlr6Phk7hrrL%2BoSTUmMw9%2FqcjEsUdP8XZrZkqnWmbDuelP6ah%2BYjc%2B7jTLTUdeNWBqq5BmleaYvGZ418sJIEQky6idK%2FkhEQKCZLvauXBl25z0KgivmqS3J3YsI2T&X-Amz-Signature=a72e09745ff0393fa39b6ad3747f8a461c617be188fe6a93beb73b89cddcbb1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7IRPSF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2GIQwep02r0yd2tWuOzd9JB8Z09c3pbeYbpWfDa%2BcEAiAV%2FX30gzStaGtCKcCNMD4YX4%2Fbahvo5f%2F03vGOHjytoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBji6zg%2BO8oBGrLwyKtwDQy3nebpg%2Bj6uE6dddtkvmYgq81B%2B%2BqGjeZ%2FhrOQB2EZpneYO0nv9wYi1mOUFH29RVrqJhOn8qzqkgPCC4GIfEOgmpQXx1EkfIZpSQ%2BRBr9ujCqISC7mFXIgqQvfQ0kCto2K4TcDWrRGiQBaTU7myp2CKpiL8%2B1vPeoKwIKKjhr0lcFkuHI4FbUPBPu2Ax3BtupFItObGP5T9kqXLLXV38E2bcWIikA7rYBLGLpevdRSzM8t2khtqzrQ%2FVHSzRDNmPqD%2BiHQ6TMcjbniF6u2BVzBlRcQOIEDGrhZ55GGv5ET2MttWdeeqlrGOdglPhIb6F9cCdTrgY3%2F0JwnrrRfWhJWTENTrkSN9THmIGjaLNPrfIk8FJNsniFeSvANRYjtGM%2BCLY7%2B5jFH8d%2FM7hqegdxQ7d2gSC8UlXCc6nA12peMdFZVLm89nmmyyxm7LU3x6n1DUwzARMDqPoz8IVZ2wz%2BWfp0YnMHIHwK4tdbXF72dpOAuny9sg1MjyyKl7jREcTR8nZ5mnm7HQmnXP8NwIK9Zc7dDS%2BlczeccSS%2FE1W2BTu73BNRZaG6r8Lk3cYZiu0vSApGuoZksNvlrymoKCI0DMimeBivQAH5h6f6PgXHTPWKCcnRgZEsq14h0w1sfwwAY6pgFgjuiLxOlObi2xxe5O7BssjVfPnVj%2B0eKc4FC3bFVclACMgn75xWB7R4Yi%2BiSdWDW%2BgSrEC8N9Akj5pDXJn6SjzjTlqzaNadtWlr6Phk7hrrL%2BoSTUmMw9%2FqcjEsUdP8XZrZkqnWmbDuelP6ah%2BYjc%2B7jTLTUdeNWBqq5BmleaYvGZ418sJIEQky6idK%2FkhEQKCZLvauXBl25z0KgivmqS3J3YsI2T&X-Amz-Signature=6844044d2c220d46651efd1979965240ba64d9ce4b74aa284f4f5441c44df10c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7IRPSF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2GIQwep02r0yd2tWuOzd9JB8Z09c3pbeYbpWfDa%2BcEAiAV%2FX30gzStaGtCKcCNMD4YX4%2Fbahvo5f%2F03vGOHjytoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBji6zg%2BO8oBGrLwyKtwDQy3nebpg%2Bj6uE6dddtkvmYgq81B%2B%2BqGjeZ%2FhrOQB2EZpneYO0nv9wYi1mOUFH29RVrqJhOn8qzqkgPCC4GIfEOgmpQXx1EkfIZpSQ%2BRBr9ujCqISC7mFXIgqQvfQ0kCto2K4TcDWrRGiQBaTU7myp2CKpiL8%2B1vPeoKwIKKjhr0lcFkuHI4FbUPBPu2Ax3BtupFItObGP5T9kqXLLXV38E2bcWIikA7rYBLGLpevdRSzM8t2khtqzrQ%2FVHSzRDNmPqD%2BiHQ6TMcjbniF6u2BVzBlRcQOIEDGrhZ55GGv5ET2MttWdeeqlrGOdglPhIb6F9cCdTrgY3%2F0JwnrrRfWhJWTENTrkSN9THmIGjaLNPrfIk8FJNsniFeSvANRYjtGM%2BCLY7%2B5jFH8d%2FM7hqegdxQ7d2gSC8UlXCc6nA12peMdFZVLm89nmmyyxm7LU3x6n1DUwzARMDqPoz8IVZ2wz%2BWfp0YnMHIHwK4tdbXF72dpOAuny9sg1MjyyKl7jREcTR8nZ5mnm7HQmnXP8NwIK9Zc7dDS%2BlczeccSS%2FE1W2BTu73BNRZaG6r8Lk3cYZiu0vSApGuoZksNvlrymoKCI0DMimeBivQAH5h6f6PgXHTPWKCcnRgZEsq14h0w1sfwwAY6pgFgjuiLxOlObi2xxe5O7BssjVfPnVj%2B0eKc4FC3bFVclACMgn75xWB7R4Yi%2BiSdWDW%2BgSrEC8N9Akj5pDXJn6SjzjTlqzaNadtWlr6Phk7hrrL%2BoSTUmMw9%2FqcjEsUdP8XZrZkqnWmbDuelP6ah%2BYjc%2B7jTLTUdeNWBqq5BmleaYvGZ418sJIEQky6idK%2FkhEQKCZLvauXBl25z0KgivmqS3J3YsI2T&X-Amz-Signature=51a3646583374da0e5bf089161ed63f5962ed5d1652cffe2ddd6c06a7cbc3964&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7IRPSF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2GIQwep02r0yd2tWuOzd9JB8Z09c3pbeYbpWfDa%2BcEAiAV%2FX30gzStaGtCKcCNMD4YX4%2Fbahvo5f%2F03vGOHjytoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBji6zg%2BO8oBGrLwyKtwDQy3nebpg%2Bj6uE6dddtkvmYgq81B%2B%2BqGjeZ%2FhrOQB2EZpneYO0nv9wYi1mOUFH29RVrqJhOn8qzqkgPCC4GIfEOgmpQXx1EkfIZpSQ%2BRBr9ujCqISC7mFXIgqQvfQ0kCto2K4TcDWrRGiQBaTU7myp2CKpiL8%2B1vPeoKwIKKjhr0lcFkuHI4FbUPBPu2Ax3BtupFItObGP5T9kqXLLXV38E2bcWIikA7rYBLGLpevdRSzM8t2khtqzrQ%2FVHSzRDNmPqD%2BiHQ6TMcjbniF6u2BVzBlRcQOIEDGrhZ55GGv5ET2MttWdeeqlrGOdglPhIb6F9cCdTrgY3%2F0JwnrrRfWhJWTENTrkSN9THmIGjaLNPrfIk8FJNsniFeSvANRYjtGM%2BCLY7%2B5jFH8d%2FM7hqegdxQ7d2gSC8UlXCc6nA12peMdFZVLm89nmmyyxm7LU3x6n1DUwzARMDqPoz8IVZ2wz%2BWfp0YnMHIHwK4tdbXF72dpOAuny9sg1MjyyKl7jREcTR8nZ5mnm7HQmnXP8NwIK9Zc7dDS%2BlczeccSS%2FE1W2BTu73BNRZaG6r8Lk3cYZiu0vSApGuoZksNvlrymoKCI0DMimeBivQAH5h6f6PgXHTPWKCcnRgZEsq14h0w1sfwwAY6pgFgjuiLxOlObi2xxe5O7BssjVfPnVj%2B0eKc4FC3bFVclACMgn75xWB7R4Yi%2BiSdWDW%2BgSrEC8N9Akj5pDXJn6SjzjTlqzaNadtWlr6Phk7hrrL%2BoSTUmMw9%2FqcjEsUdP8XZrZkqnWmbDuelP6ah%2BYjc%2B7jTLTUdeNWBqq5BmleaYvGZ418sJIEQky6idK%2FkhEQKCZLvauXBl25z0KgivmqS3J3YsI2T&X-Amz-Signature=dd1c816bd7e5af850daac65dbc3bd430a679d8b27229f809ceed0908fd64a099&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7IRPSF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2GIQwep02r0yd2tWuOzd9JB8Z09c3pbeYbpWfDa%2BcEAiAV%2FX30gzStaGtCKcCNMD4YX4%2Fbahvo5f%2F03vGOHjytoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBji6zg%2BO8oBGrLwyKtwDQy3nebpg%2Bj6uE6dddtkvmYgq81B%2B%2BqGjeZ%2FhrOQB2EZpneYO0nv9wYi1mOUFH29RVrqJhOn8qzqkgPCC4GIfEOgmpQXx1EkfIZpSQ%2BRBr9ujCqISC7mFXIgqQvfQ0kCto2K4TcDWrRGiQBaTU7myp2CKpiL8%2B1vPeoKwIKKjhr0lcFkuHI4FbUPBPu2Ax3BtupFItObGP5T9kqXLLXV38E2bcWIikA7rYBLGLpevdRSzM8t2khtqzrQ%2FVHSzRDNmPqD%2BiHQ6TMcjbniF6u2BVzBlRcQOIEDGrhZ55GGv5ET2MttWdeeqlrGOdglPhIb6F9cCdTrgY3%2F0JwnrrRfWhJWTENTrkSN9THmIGjaLNPrfIk8FJNsniFeSvANRYjtGM%2BCLY7%2B5jFH8d%2FM7hqegdxQ7d2gSC8UlXCc6nA12peMdFZVLm89nmmyyxm7LU3x6n1DUwzARMDqPoz8IVZ2wz%2BWfp0YnMHIHwK4tdbXF72dpOAuny9sg1MjyyKl7jREcTR8nZ5mnm7HQmnXP8NwIK9Zc7dDS%2BlczeccSS%2FE1W2BTu73BNRZaG6r8Lk3cYZiu0vSApGuoZksNvlrymoKCI0DMimeBivQAH5h6f6PgXHTPWKCcnRgZEsq14h0w1sfwwAY6pgFgjuiLxOlObi2xxe5O7BssjVfPnVj%2B0eKc4FC3bFVclACMgn75xWB7R4Yi%2BiSdWDW%2BgSrEC8N9Akj5pDXJn6SjzjTlqzaNadtWlr6Phk7hrrL%2BoSTUmMw9%2FqcjEsUdP8XZrZkqnWmbDuelP6ah%2BYjc%2B7jTLTUdeNWBqq5BmleaYvGZ418sJIEQky6idK%2FkhEQKCZLvauXBl25z0KgivmqS3J3YsI2T&X-Amz-Signature=0f64de6186d5af97e5167321d8a6137bb5fabb2bc8de108de070dea8169d85e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7IRPSF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2GIQwep02r0yd2tWuOzd9JB8Z09c3pbeYbpWfDa%2BcEAiAV%2FX30gzStaGtCKcCNMD4YX4%2Fbahvo5f%2F03vGOHjytoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBji6zg%2BO8oBGrLwyKtwDQy3nebpg%2Bj6uE6dddtkvmYgq81B%2B%2BqGjeZ%2FhrOQB2EZpneYO0nv9wYi1mOUFH29RVrqJhOn8qzqkgPCC4GIfEOgmpQXx1EkfIZpSQ%2BRBr9ujCqISC7mFXIgqQvfQ0kCto2K4TcDWrRGiQBaTU7myp2CKpiL8%2B1vPeoKwIKKjhr0lcFkuHI4FbUPBPu2Ax3BtupFItObGP5T9kqXLLXV38E2bcWIikA7rYBLGLpevdRSzM8t2khtqzrQ%2FVHSzRDNmPqD%2BiHQ6TMcjbniF6u2BVzBlRcQOIEDGrhZ55GGv5ET2MttWdeeqlrGOdglPhIb6F9cCdTrgY3%2F0JwnrrRfWhJWTENTrkSN9THmIGjaLNPrfIk8FJNsniFeSvANRYjtGM%2BCLY7%2B5jFH8d%2FM7hqegdxQ7d2gSC8UlXCc6nA12peMdFZVLm89nmmyyxm7LU3x6n1DUwzARMDqPoz8IVZ2wz%2BWfp0YnMHIHwK4tdbXF72dpOAuny9sg1MjyyKl7jREcTR8nZ5mnm7HQmnXP8NwIK9Zc7dDS%2BlczeccSS%2FE1W2BTu73BNRZaG6r8Lk3cYZiu0vSApGuoZksNvlrymoKCI0DMimeBivQAH5h6f6PgXHTPWKCcnRgZEsq14h0w1sfwwAY6pgFgjuiLxOlObi2xxe5O7BssjVfPnVj%2B0eKc4FC3bFVclACMgn75xWB7R4Yi%2BiSdWDW%2BgSrEC8N9Akj5pDXJn6SjzjTlqzaNadtWlr6Phk7hrrL%2BoSTUmMw9%2FqcjEsUdP8XZrZkqnWmbDuelP6ah%2BYjc%2B7jTLTUdeNWBqq5BmleaYvGZ418sJIEQky6idK%2FkhEQKCZLvauXBl25z0KgivmqS3J3YsI2T&X-Amz-Signature=c27c3e7167acef5d7970b08d7fcc978ff08de8d37e2a3ec2fb38fbf61be3a731&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7IRPSF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2GIQwep02r0yd2tWuOzd9JB8Z09c3pbeYbpWfDa%2BcEAiAV%2FX30gzStaGtCKcCNMD4YX4%2Fbahvo5f%2F03vGOHjytoCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBji6zg%2BO8oBGrLwyKtwDQy3nebpg%2Bj6uE6dddtkvmYgq81B%2B%2BqGjeZ%2FhrOQB2EZpneYO0nv9wYi1mOUFH29RVrqJhOn8qzqkgPCC4GIfEOgmpQXx1EkfIZpSQ%2BRBr9ujCqISC7mFXIgqQvfQ0kCto2K4TcDWrRGiQBaTU7myp2CKpiL8%2B1vPeoKwIKKjhr0lcFkuHI4FbUPBPu2Ax3BtupFItObGP5T9kqXLLXV38E2bcWIikA7rYBLGLpevdRSzM8t2khtqzrQ%2FVHSzRDNmPqD%2BiHQ6TMcjbniF6u2BVzBlRcQOIEDGrhZ55GGv5ET2MttWdeeqlrGOdglPhIb6F9cCdTrgY3%2F0JwnrrRfWhJWTENTrkSN9THmIGjaLNPrfIk8FJNsniFeSvANRYjtGM%2BCLY7%2B5jFH8d%2FM7hqegdxQ7d2gSC8UlXCc6nA12peMdFZVLm89nmmyyxm7LU3x6n1DUwzARMDqPoz8IVZ2wz%2BWfp0YnMHIHwK4tdbXF72dpOAuny9sg1MjyyKl7jREcTR8nZ5mnm7HQmnXP8NwIK9Zc7dDS%2BlczeccSS%2FE1W2BTu73BNRZaG6r8Lk3cYZiu0vSApGuoZksNvlrymoKCI0DMimeBivQAH5h6f6PgXHTPWKCcnRgZEsq14h0w1sfwwAY6pgFgjuiLxOlObi2xxe5O7BssjVfPnVj%2B0eKc4FC3bFVclACMgn75xWB7R4Yi%2BiSdWDW%2BgSrEC8N9Akj5pDXJn6SjzjTlqzaNadtWlr6Phk7hrrL%2BoSTUmMw9%2FqcjEsUdP8XZrZkqnWmbDuelP6ah%2BYjc%2B7jTLTUdeNWBqq5BmleaYvGZ418sJIEQky6idK%2FkhEQKCZLvauXBl25z0KgivmqS3J3YsI2T&X-Amz-Signature=a474d5074d0315125000f3bdda0ba8551f94eee6860e65673a5221af4e037222&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

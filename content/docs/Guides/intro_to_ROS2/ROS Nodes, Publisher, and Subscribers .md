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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HCARTJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDMRXm4yl7kXjSJv7rMj1CrS4mTscCOdiOZ%2BdYc8o0VoAiEAt1P%2F1REZCJq3AGNP3FAGq1rbPCay22fNOvmQSWUpNFQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw%2B%2Bbsonch084nzJircA0Rk9Km1PzzvQRixOWxMm36g%2FNSA%2BHcnT11JnM6BmeJWRwM4d1ZerXhd6%2BNtUsx4tbJ24AivUcTbG2kAexMAOLu%2F%2FlwZwuhoQ6tshSsVP4Z2i568XAJzpX2X4A5I4uPiTu7zsl0birGJGgcFqHHXVq%2BZf0zu%2FSgz7hdpEFWYEFWPdgNba65bypIGGQIqrcgc23tdR3odgCZCeYCdAImDZPFRmfh6TDMasr%2BBky%2FI%2Fzo9oXmw6vwCrzOOvMxRyJwUZF2LxZM2e18rjqkeidf7NbeT9g3icyDcFwFFJ1SbVMxrVeKhqsd41EvwDom8PKd5PNDbSiSI5NYD9E5laDEGBmd5F%2BcZ%2Fw0K%2B9t63gA69myvcvoRne1AqMe%2BoOtfxOqtgkI5RtgKxXXwtLrDcASXCDnqUz5c%2Fk%2FiICqCpORfKpKHqTxdoJC9uT5kGv8p6O9qcZ%2Bqr%2B3j7ts4pJ%2FdyVhzTTN9Ad35otM5kBh8ZeIE3PlGkC7ZpoGK3J6b6aAAAerGzU3ChFOHf%2Bh6Z3Kyw%2Ba4B3xDYYhcdM8bN4oSvDsibJSBKUNfTG82cFC41NJJ8K28EazxPS3utTTP3hcUF%2FYmuoxUTTsJFdPdAP4ST3ZgIFoK%2BjSOnQ%2BdbH%2FbtMRXMP%2BdiMEGOqUBipjXJfxEWknyuetfEFptwJYl%2FSklsbqEDYoIiDb3oFYl8Xfru4pXIRx4bZVFOoiDdkzTNLvVUsmcsqViKD7Vy3LDF8QiObNxHUiY7%2FASyhDcyE5h7hksolJN16stAHKzP7eU47xY%2B2Q4a%2Bq9C3aGHlPOydF4%2FkeCdE1gVpw9NWhbA8%2FZ64HME7aro16wNFdnLgIp1CGBwmhG8fmV6HmnLT6caCur&X-Amz-Signature=a83f39916b50f1b666418ee7571880a956b421ae90c5bab580a499ce33a6393b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HCARTJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDMRXm4yl7kXjSJv7rMj1CrS4mTscCOdiOZ%2BdYc8o0VoAiEAt1P%2F1REZCJq3AGNP3FAGq1rbPCay22fNOvmQSWUpNFQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw%2B%2Bbsonch084nzJircA0Rk9Km1PzzvQRixOWxMm36g%2FNSA%2BHcnT11JnM6BmeJWRwM4d1ZerXhd6%2BNtUsx4tbJ24AivUcTbG2kAexMAOLu%2F%2FlwZwuhoQ6tshSsVP4Z2i568XAJzpX2X4A5I4uPiTu7zsl0birGJGgcFqHHXVq%2BZf0zu%2FSgz7hdpEFWYEFWPdgNba65bypIGGQIqrcgc23tdR3odgCZCeYCdAImDZPFRmfh6TDMasr%2BBky%2FI%2Fzo9oXmw6vwCrzOOvMxRyJwUZF2LxZM2e18rjqkeidf7NbeT9g3icyDcFwFFJ1SbVMxrVeKhqsd41EvwDom8PKd5PNDbSiSI5NYD9E5laDEGBmd5F%2BcZ%2Fw0K%2B9t63gA69myvcvoRne1AqMe%2BoOtfxOqtgkI5RtgKxXXwtLrDcASXCDnqUz5c%2Fk%2FiICqCpORfKpKHqTxdoJC9uT5kGv8p6O9qcZ%2Bqr%2B3j7ts4pJ%2FdyVhzTTN9Ad35otM5kBh8ZeIE3PlGkC7ZpoGK3J6b6aAAAerGzU3ChFOHf%2Bh6Z3Kyw%2Ba4B3xDYYhcdM8bN4oSvDsibJSBKUNfTG82cFC41NJJ8K28EazxPS3utTTP3hcUF%2FYmuoxUTTsJFdPdAP4ST3ZgIFoK%2BjSOnQ%2BdbH%2FbtMRXMP%2BdiMEGOqUBipjXJfxEWknyuetfEFptwJYl%2FSklsbqEDYoIiDb3oFYl8Xfru4pXIRx4bZVFOoiDdkzTNLvVUsmcsqViKD7Vy3LDF8QiObNxHUiY7%2FASyhDcyE5h7hksolJN16stAHKzP7eU47xY%2B2Q4a%2Bq9C3aGHlPOydF4%2FkeCdE1gVpw9NWhbA8%2FZ64HME7aro16wNFdnLgIp1CGBwmhG8fmV6HmnLT6caCur&X-Amz-Signature=7807c2f94eab1932ab9760cff49de5c111ad143c2456bcef3baa656fd87f93d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HCARTJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDMRXm4yl7kXjSJv7rMj1CrS4mTscCOdiOZ%2BdYc8o0VoAiEAt1P%2F1REZCJq3AGNP3FAGq1rbPCay22fNOvmQSWUpNFQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw%2B%2Bbsonch084nzJircA0Rk9Km1PzzvQRixOWxMm36g%2FNSA%2BHcnT11JnM6BmeJWRwM4d1ZerXhd6%2BNtUsx4tbJ24AivUcTbG2kAexMAOLu%2F%2FlwZwuhoQ6tshSsVP4Z2i568XAJzpX2X4A5I4uPiTu7zsl0birGJGgcFqHHXVq%2BZf0zu%2FSgz7hdpEFWYEFWPdgNba65bypIGGQIqrcgc23tdR3odgCZCeYCdAImDZPFRmfh6TDMasr%2BBky%2FI%2Fzo9oXmw6vwCrzOOvMxRyJwUZF2LxZM2e18rjqkeidf7NbeT9g3icyDcFwFFJ1SbVMxrVeKhqsd41EvwDom8PKd5PNDbSiSI5NYD9E5laDEGBmd5F%2BcZ%2Fw0K%2B9t63gA69myvcvoRne1AqMe%2BoOtfxOqtgkI5RtgKxXXwtLrDcASXCDnqUz5c%2Fk%2FiICqCpORfKpKHqTxdoJC9uT5kGv8p6O9qcZ%2Bqr%2B3j7ts4pJ%2FdyVhzTTN9Ad35otM5kBh8ZeIE3PlGkC7ZpoGK3J6b6aAAAerGzU3ChFOHf%2Bh6Z3Kyw%2Ba4B3xDYYhcdM8bN4oSvDsibJSBKUNfTG82cFC41NJJ8K28EazxPS3utTTP3hcUF%2FYmuoxUTTsJFdPdAP4ST3ZgIFoK%2BjSOnQ%2BdbH%2FbtMRXMP%2BdiMEGOqUBipjXJfxEWknyuetfEFptwJYl%2FSklsbqEDYoIiDb3oFYl8Xfru4pXIRx4bZVFOoiDdkzTNLvVUsmcsqViKD7Vy3LDF8QiObNxHUiY7%2FASyhDcyE5h7hksolJN16stAHKzP7eU47xY%2B2Q4a%2Bq9C3aGHlPOydF4%2FkeCdE1gVpw9NWhbA8%2FZ64HME7aro16wNFdnLgIp1CGBwmhG8fmV6HmnLT6caCur&X-Amz-Signature=65395d809c02e50ad2c7e57187b03597e1bfcd086bdf542265c87c3f59f4c466&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HCARTJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDMRXm4yl7kXjSJv7rMj1CrS4mTscCOdiOZ%2BdYc8o0VoAiEAt1P%2F1REZCJq3AGNP3FAGq1rbPCay22fNOvmQSWUpNFQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw%2B%2Bbsonch084nzJircA0Rk9Km1PzzvQRixOWxMm36g%2FNSA%2BHcnT11JnM6BmeJWRwM4d1ZerXhd6%2BNtUsx4tbJ24AivUcTbG2kAexMAOLu%2F%2FlwZwuhoQ6tshSsVP4Z2i568XAJzpX2X4A5I4uPiTu7zsl0birGJGgcFqHHXVq%2BZf0zu%2FSgz7hdpEFWYEFWPdgNba65bypIGGQIqrcgc23tdR3odgCZCeYCdAImDZPFRmfh6TDMasr%2BBky%2FI%2Fzo9oXmw6vwCrzOOvMxRyJwUZF2LxZM2e18rjqkeidf7NbeT9g3icyDcFwFFJ1SbVMxrVeKhqsd41EvwDom8PKd5PNDbSiSI5NYD9E5laDEGBmd5F%2BcZ%2Fw0K%2B9t63gA69myvcvoRne1AqMe%2BoOtfxOqtgkI5RtgKxXXwtLrDcASXCDnqUz5c%2Fk%2FiICqCpORfKpKHqTxdoJC9uT5kGv8p6O9qcZ%2Bqr%2B3j7ts4pJ%2FdyVhzTTN9Ad35otM5kBh8ZeIE3PlGkC7ZpoGK3J6b6aAAAerGzU3ChFOHf%2Bh6Z3Kyw%2Ba4B3xDYYhcdM8bN4oSvDsibJSBKUNfTG82cFC41NJJ8K28EazxPS3utTTP3hcUF%2FYmuoxUTTsJFdPdAP4ST3ZgIFoK%2BjSOnQ%2BdbH%2FbtMRXMP%2BdiMEGOqUBipjXJfxEWknyuetfEFptwJYl%2FSklsbqEDYoIiDb3oFYl8Xfru4pXIRx4bZVFOoiDdkzTNLvVUsmcsqViKD7Vy3LDF8QiObNxHUiY7%2FASyhDcyE5h7hksolJN16stAHKzP7eU47xY%2B2Q4a%2Bq9C3aGHlPOydF4%2FkeCdE1gVpw9NWhbA8%2FZ64HME7aro16wNFdnLgIp1CGBwmhG8fmV6HmnLT6caCur&X-Amz-Signature=baa35c0eaa940aac64568d1f6797b3aa20c38496cad554676972073d5ca266db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HCARTJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDMRXm4yl7kXjSJv7rMj1CrS4mTscCOdiOZ%2BdYc8o0VoAiEAt1P%2F1REZCJq3AGNP3FAGq1rbPCay22fNOvmQSWUpNFQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw%2B%2Bbsonch084nzJircA0Rk9Km1PzzvQRixOWxMm36g%2FNSA%2BHcnT11JnM6BmeJWRwM4d1ZerXhd6%2BNtUsx4tbJ24AivUcTbG2kAexMAOLu%2F%2FlwZwuhoQ6tshSsVP4Z2i568XAJzpX2X4A5I4uPiTu7zsl0birGJGgcFqHHXVq%2BZf0zu%2FSgz7hdpEFWYEFWPdgNba65bypIGGQIqrcgc23tdR3odgCZCeYCdAImDZPFRmfh6TDMasr%2BBky%2FI%2Fzo9oXmw6vwCrzOOvMxRyJwUZF2LxZM2e18rjqkeidf7NbeT9g3icyDcFwFFJ1SbVMxrVeKhqsd41EvwDom8PKd5PNDbSiSI5NYD9E5laDEGBmd5F%2BcZ%2Fw0K%2B9t63gA69myvcvoRne1AqMe%2BoOtfxOqtgkI5RtgKxXXwtLrDcASXCDnqUz5c%2Fk%2FiICqCpORfKpKHqTxdoJC9uT5kGv8p6O9qcZ%2Bqr%2B3j7ts4pJ%2FdyVhzTTN9Ad35otM5kBh8ZeIE3PlGkC7ZpoGK3J6b6aAAAerGzU3ChFOHf%2Bh6Z3Kyw%2Ba4B3xDYYhcdM8bN4oSvDsibJSBKUNfTG82cFC41NJJ8K28EazxPS3utTTP3hcUF%2FYmuoxUTTsJFdPdAP4ST3ZgIFoK%2BjSOnQ%2BdbH%2FbtMRXMP%2BdiMEGOqUBipjXJfxEWknyuetfEFptwJYl%2FSklsbqEDYoIiDb3oFYl8Xfru4pXIRx4bZVFOoiDdkzTNLvVUsmcsqViKD7Vy3LDF8QiObNxHUiY7%2FASyhDcyE5h7hksolJN16stAHKzP7eU47xY%2B2Q4a%2Bq9C3aGHlPOydF4%2FkeCdE1gVpw9NWhbA8%2FZ64HME7aro16wNFdnLgIp1CGBwmhG8fmV6HmnLT6caCur&X-Amz-Signature=d73f255074d57d48c7ad180a7fadabb1dab314d7cc506ce62d746b949f4ae2af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HCARTJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDMRXm4yl7kXjSJv7rMj1CrS4mTscCOdiOZ%2BdYc8o0VoAiEAt1P%2F1REZCJq3AGNP3FAGq1rbPCay22fNOvmQSWUpNFQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw%2B%2Bbsonch084nzJircA0Rk9Km1PzzvQRixOWxMm36g%2FNSA%2BHcnT11JnM6BmeJWRwM4d1ZerXhd6%2BNtUsx4tbJ24AivUcTbG2kAexMAOLu%2F%2FlwZwuhoQ6tshSsVP4Z2i568XAJzpX2X4A5I4uPiTu7zsl0birGJGgcFqHHXVq%2BZf0zu%2FSgz7hdpEFWYEFWPdgNba65bypIGGQIqrcgc23tdR3odgCZCeYCdAImDZPFRmfh6TDMasr%2BBky%2FI%2Fzo9oXmw6vwCrzOOvMxRyJwUZF2LxZM2e18rjqkeidf7NbeT9g3icyDcFwFFJ1SbVMxrVeKhqsd41EvwDom8PKd5PNDbSiSI5NYD9E5laDEGBmd5F%2BcZ%2Fw0K%2B9t63gA69myvcvoRne1AqMe%2BoOtfxOqtgkI5RtgKxXXwtLrDcASXCDnqUz5c%2Fk%2FiICqCpORfKpKHqTxdoJC9uT5kGv8p6O9qcZ%2Bqr%2B3j7ts4pJ%2FdyVhzTTN9Ad35otM5kBh8ZeIE3PlGkC7ZpoGK3J6b6aAAAerGzU3ChFOHf%2Bh6Z3Kyw%2Ba4B3xDYYhcdM8bN4oSvDsibJSBKUNfTG82cFC41NJJ8K28EazxPS3utTTP3hcUF%2FYmuoxUTTsJFdPdAP4ST3ZgIFoK%2BjSOnQ%2BdbH%2FbtMRXMP%2BdiMEGOqUBipjXJfxEWknyuetfEFptwJYl%2FSklsbqEDYoIiDb3oFYl8Xfru4pXIRx4bZVFOoiDdkzTNLvVUsmcsqViKD7Vy3LDF8QiObNxHUiY7%2FASyhDcyE5h7hksolJN16stAHKzP7eU47xY%2B2Q4a%2Bq9C3aGHlPOydF4%2FkeCdE1gVpw9NWhbA8%2FZ64HME7aro16wNFdnLgIp1CGBwmhG8fmV6HmnLT6caCur&X-Amz-Signature=142c68b61017acf085d040e868ee7ee0107fcc551ecdaeb61ce3be080a14b368&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HCARTJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDMRXm4yl7kXjSJv7rMj1CrS4mTscCOdiOZ%2BdYc8o0VoAiEAt1P%2F1REZCJq3AGNP3FAGq1rbPCay22fNOvmQSWUpNFQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw%2B%2Bbsonch084nzJircA0Rk9Km1PzzvQRixOWxMm36g%2FNSA%2BHcnT11JnM6BmeJWRwM4d1ZerXhd6%2BNtUsx4tbJ24AivUcTbG2kAexMAOLu%2F%2FlwZwuhoQ6tshSsVP4Z2i568XAJzpX2X4A5I4uPiTu7zsl0birGJGgcFqHHXVq%2BZf0zu%2FSgz7hdpEFWYEFWPdgNba65bypIGGQIqrcgc23tdR3odgCZCeYCdAImDZPFRmfh6TDMasr%2BBky%2FI%2Fzo9oXmw6vwCrzOOvMxRyJwUZF2LxZM2e18rjqkeidf7NbeT9g3icyDcFwFFJ1SbVMxrVeKhqsd41EvwDom8PKd5PNDbSiSI5NYD9E5laDEGBmd5F%2BcZ%2Fw0K%2B9t63gA69myvcvoRne1AqMe%2BoOtfxOqtgkI5RtgKxXXwtLrDcASXCDnqUz5c%2Fk%2FiICqCpORfKpKHqTxdoJC9uT5kGv8p6O9qcZ%2Bqr%2B3j7ts4pJ%2FdyVhzTTN9Ad35otM5kBh8ZeIE3PlGkC7ZpoGK3J6b6aAAAerGzU3ChFOHf%2Bh6Z3Kyw%2Ba4B3xDYYhcdM8bN4oSvDsibJSBKUNfTG82cFC41NJJ8K28EazxPS3utTTP3hcUF%2FYmuoxUTTsJFdPdAP4ST3ZgIFoK%2BjSOnQ%2BdbH%2FbtMRXMP%2BdiMEGOqUBipjXJfxEWknyuetfEFptwJYl%2FSklsbqEDYoIiDb3oFYl8Xfru4pXIRx4bZVFOoiDdkzTNLvVUsmcsqViKD7Vy3LDF8QiObNxHUiY7%2FASyhDcyE5h7hksolJN16stAHKzP7eU47xY%2B2Q4a%2Bq9C3aGHlPOydF4%2FkeCdE1gVpw9NWhbA8%2FZ64HME7aro16wNFdnLgIp1CGBwmhG8fmV6HmnLT6caCur&X-Amz-Signature=663e226c0a2aa636cea3808bd0690ce3f4b87df8f6a8a89abdbac0a4ac9813aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HCARTJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDMRXm4yl7kXjSJv7rMj1CrS4mTscCOdiOZ%2BdYc8o0VoAiEAt1P%2F1REZCJq3AGNP3FAGq1rbPCay22fNOvmQSWUpNFQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw%2B%2Bbsonch084nzJircA0Rk9Km1PzzvQRixOWxMm36g%2FNSA%2BHcnT11JnM6BmeJWRwM4d1ZerXhd6%2BNtUsx4tbJ24AivUcTbG2kAexMAOLu%2F%2FlwZwuhoQ6tshSsVP4Z2i568XAJzpX2X4A5I4uPiTu7zsl0birGJGgcFqHHXVq%2BZf0zu%2FSgz7hdpEFWYEFWPdgNba65bypIGGQIqrcgc23tdR3odgCZCeYCdAImDZPFRmfh6TDMasr%2BBky%2FI%2Fzo9oXmw6vwCrzOOvMxRyJwUZF2LxZM2e18rjqkeidf7NbeT9g3icyDcFwFFJ1SbVMxrVeKhqsd41EvwDom8PKd5PNDbSiSI5NYD9E5laDEGBmd5F%2BcZ%2Fw0K%2B9t63gA69myvcvoRne1AqMe%2BoOtfxOqtgkI5RtgKxXXwtLrDcASXCDnqUz5c%2Fk%2FiICqCpORfKpKHqTxdoJC9uT5kGv8p6O9qcZ%2Bqr%2B3j7ts4pJ%2FdyVhzTTN9Ad35otM5kBh8ZeIE3PlGkC7ZpoGK3J6b6aAAAerGzU3ChFOHf%2Bh6Z3Kyw%2Ba4B3xDYYhcdM8bN4oSvDsibJSBKUNfTG82cFC41NJJ8K28EazxPS3utTTP3hcUF%2FYmuoxUTTsJFdPdAP4ST3ZgIFoK%2BjSOnQ%2BdbH%2FbtMRXMP%2BdiMEGOqUBipjXJfxEWknyuetfEFptwJYl%2FSklsbqEDYoIiDb3oFYl8Xfru4pXIRx4bZVFOoiDdkzTNLvVUsmcsqViKD7Vy3LDF8QiObNxHUiY7%2FASyhDcyE5h7hksolJN16stAHKzP7eU47xY%2B2Q4a%2Bq9C3aGHlPOydF4%2FkeCdE1gVpw9NWhbA8%2FZ64HME7aro16wNFdnLgIp1CGBwmhG8fmV6HmnLT6caCur&X-Amz-Signature=d5d415f8981c338f4076235524c4db2b1cd389bf3d979a30ed816470476cf4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

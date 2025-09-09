---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YNLVPY%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD9uvbrw3hDLZ7NHNlEOmIHK%2FMIGOsMk8BV%2BthCOndMPwIgJ%2Fv37TdjVWfU4tjrxXmrcrLsL%2Bofr8Op6E5qnk2y%2FwgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoA9EwHmex8DPl%2FQircA7du9vt8G0ru7lpK37OQi2uT1V54lP5NcAB5HUu%2F2xvXoGs84myxpE7Xg%2Fr6O%2BUQBCRDzsi5%2BBeNOzGbK0f9ehh9slv2Lj86KNJdopwN3%2FKP25vjJmw02j3rLjowO5xK40qQtz1Dyp8qtpB2ZQHXZsVQ7QyfSg%2FztJ0EE1Fl%2BN0w6HF2A0ak5lh7oNPv61rzm78cJLnW0be5cv0v596g8zybTaIFFaPbdZkI8Ciq%2FORXv1lDXe%2BG8mRsP2cwywa8uSuJZJWmaAbpGWxzPvcob5dk%2BgRE88ekpJdBE0jNivKJp9p49aZMYMlKOAaw1e4XhCWBrBBRH5jDFh9qPdMUwZHvwy38fNyTQBvxWkhuIL%2BLuHWqIBp1ZgC7UTskjlgEhnBYLBx%2FP9APCmfZ%2Fv2rP8AD1rDm7PeVWI6NQD2OL5iAxM%2FiE0e5%2B5LyaF8%2FADC9IwKU0yzpmIBzznSoPSui8Or0A4N%2BTA02MG8umr02Cfq1EILW%2F2bjixSNINL3RKG9OJz4PWNavwOO%2Bhr65XES7%2BhxFhXpdW7snBX3wHCMUuuvAz5h8WPWZ07dWY8U869hok%2FRf7yAB%2BLpAVgQCRz4RenC8bIc8qM6%2BPktrz7gE0VPzN1DwniOje%2BEjIo%2BMNPy%2FcUGOqUBwbXelrchJSZxsVLjRMVWTzECxRIpIOmoqOpPV0MI9Gbnkq8TtQOCyLmtsKQORdLfNyzSYAMvNBQRCMSf%2Bx%2F7KzJQrzI7Jquux1%2FZl3fCMYrqoGoPpL9Yk%2FjmP31tsStk7k3JU9U5PIBZRXbmPno4ppFts5GOIDvnZv%2F%2BAZ7nKhJsWKUNEnotHDCIWqofH4Uqrxg9fYXZbhNj4d%2Bc1ndiUaGPTHC9&X-Amz-Signature=972d33e33f1e480eef99a6cc6e2297e585a6be25f61b7a2324107fcc6fdf233e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YNLVPY%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD9uvbrw3hDLZ7NHNlEOmIHK%2FMIGOsMk8BV%2BthCOndMPwIgJ%2Fv37TdjVWfU4tjrxXmrcrLsL%2Bofr8Op6E5qnk2y%2FwgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoA9EwHmex8DPl%2FQircA7du9vt8G0ru7lpK37OQi2uT1V54lP5NcAB5HUu%2F2xvXoGs84myxpE7Xg%2Fr6O%2BUQBCRDzsi5%2BBeNOzGbK0f9ehh9slv2Lj86KNJdopwN3%2FKP25vjJmw02j3rLjowO5xK40qQtz1Dyp8qtpB2ZQHXZsVQ7QyfSg%2FztJ0EE1Fl%2BN0w6HF2A0ak5lh7oNPv61rzm78cJLnW0be5cv0v596g8zybTaIFFaPbdZkI8Ciq%2FORXv1lDXe%2BG8mRsP2cwywa8uSuJZJWmaAbpGWxzPvcob5dk%2BgRE88ekpJdBE0jNivKJp9p49aZMYMlKOAaw1e4XhCWBrBBRH5jDFh9qPdMUwZHvwy38fNyTQBvxWkhuIL%2BLuHWqIBp1ZgC7UTskjlgEhnBYLBx%2FP9APCmfZ%2Fv2rP8AD1rDm7PeVWI6NQD2OL5iAxM%2FiE0e5%2B5LyaF8%2FADC9IwKU0yzpmIBzznSoPSui8Or0A4N%2BTA02MG8umr02Cfq1EILW%2F2bjixSNINL3RKG9OJz4PWNavwOO%2Bhr65XES7%2BhxFhXpdW7snBX3wHCMUuuvAz5h8WPWZ07dWY8U869hok%2FRf7yAB%2BLpAVgQCRz4RenC8bIc8qM6%2BPktrz7gE0VPzN1DwniOje%2BEjIo%2BMNPy%2FcUGOqUBwbXelrchJSZxsVLjRMVWTzECxRIpIOmoqOpPV0MI9Gbnkq8TtQOCyLmtsKQORdLfNyzSYAMvNBQRCMSf%2Bx%2F7KzJQrzI7Jquux1%2FZl3fCMYrqoGoPpL9Yk%2FjmP31tsStk7k3JU9U5PIBZRXbmPno4ppFts5GOIDvnZv%2F%2BAZ7nKhJsWKUNEnotHDCIWqofH4Uqrxg9fYXZbhNj4d%2Bc1ndiUaGPTHC9&X-Amz-Signature=37709b3a550beed17ea58bdea2b40151c3c0ed0e42898cd12ae913fcc7046474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YNLVPY%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD9uvbrw3hDLZ7NHNlEOmIHK%2FMIGOsMk8BV%2BthCOndMPwIgJ%2Fv37TdjVWfU4tjrxXmrcrLsL%2Bofr8Op6E5qnk2y%2FwgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoA9EwHmex8DPl%2FQircA7du9vt8G0ru7lpK37OQi2uT1V54lP5NcAB5HUu%2F2xvXoGs84myxpE7Xg%2Fr6O%2BUQBCRDzsi5%2BBeNOzGbK0f9ehh9slv2Lj86KNJdopwN3%2FKP25vjJmw02j3rLjowO5xK40qQtz1Dyp8qtpB2ZQHXZsVQ7QyfSg%2FztJ0EE1Fl%2BN0w6HF2A0ak5lh7oNPv61rzm78cJLnW0be5cv0v596g8zybTaIFFaPbdZkI8Ciq%2FORXv1lDXe%2BG8mRsP2cwywa8uSuJZJWmaAbpGWxzPvcob5dk%2BgRE88ekpJdBE0jNivKJp9p49aZMYMlKOAaw1e4XhCWBrBBRH5jDFh9qPdMUwZHvwy38fNyTQBvxWkhuIL%2BLuHWqIBp1ZgC7UTskjlgEhnBYLBx%2FP9APCmfZ%2Fv2rP8AD1rDm7PeVWI6NQD2OL5iAxM%2FiE0e5%2B5LyaF8%2FADC9IwKU0yzpmIBzznSoPSui8Or0A4N%2BTA02MG8umr02Cfq1EILW%2F2bjixSNINL3RKG9OJz4PWNavwOO%2Bhr65XES7%2BhxFhXpdW7snBX3wHCMUuuvAz5h8WPWZ07dWY8U869hok%2FRf7yAB%2BLpAVgQCRz4RenC8bIc8qM6%2BPktrz7gE0VPzN1DwniOje%2BEjIo%2BMNPy%2FcUGOqUBwbXelrchJSZxsVLjRMVWTzECxRIpIOmoqOpPV0MI9Gbnkq8TtQOCyLmtsKQORdLfNyzSYAMvNBQRCMSf%2Bx%2F7KzJQrzI7Jquux1%2FZl3fCMYrqoGoPpL9Yk%2FjmP31tsStk7k3JU9U5PIBZRXbmPno4ppFts5GOIDvnZv%2F%2BAZ7nKhJsWKUNEnotHDCIWqofH4Uqrxg9fYXZbhNj4d%2Bc1ndiUaGPTHC9&X-Amz-Signature=58105a7d2ab570ccf4d0bb740d1a5ff3bb3e2fcb1631eaee69975a02ed5d5015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YNLVPY%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD9uvbrw3hDLZ7NHNlEOmIHK%2FMIGOsMk8BV%2BthCOndMPwIgJ%2Fv37TdjVWfU4tjrxXmrcrLsL%2Bofr8Op6E5qnk2y%2FwgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoA9EwHmex8DPl%2FQircA7du9vt8G0ru7lpK37OQi2uT1V54lP5NcAB5HUu%2F2xvXoGs84myxpE7Xg%2Fr6O%2BUQBCRDzsi5%2BBeNOzGbK0f9ehh9slv2Lj86KNJdopwN3%2FKP25vjJmw02j3rLjowO5xK40qQtz1Dyp8qtpB2ZQHXZsVQ7QyfSg%2FztJ0EE1Fl%2BN0w6HF2A0ak5lh7oNPv61rzm78cJLnW0be5cv0v596g8zybTaIFFaPbdZkI8Ciq%2FORXv1lDXe%2BG8mRsP2cwywa8uSuJZJWmaAbpGWxzPvcob5dk%2BgRE88ekpJdBE0jNivKJp9p49aZMYMlKOAaw1e4XhCWBrBBRH5jDFh9qPdMUwZHvwy38fNyTQBvxWkhuIL%2BLuHWqIBp1ZgC7UTskjlgEhnBYLBx%2FP9APCmfZ%2Fv2rP8AD1rDm7PeVWI6NQD2OL5iAxM%2FiE0e5%2B5LyaF8%2FADC9IwKU0yzpmIBzznSoPSui8Or0A4N%2BTA02MG8umr02Cfq1EILW%2F2bjixSNINL3RKG9OJz4PWNavwOO%2Bhr65XES7%2BhxFhXpdW7snBX3wHCMUuuvAz5h8WPWZ07dWY8U869hok%2FRf7yAB%2BLpAVgQCRz4RenC8bIc8qM6%2BPktrz7gE0VPzN1DwniOje%2BEjIo%2BMNPy%2FcUGOqUBwbXelrchJSZxsVLjRMVWTzECxRIpIOmoqOpPV0MI9Gbnkq8TtQOCyLmtsKQORdLfNyzSYAMvNBQRCMSf%2Bx%2F7KzJQrzI7Jquux1%2FZl3fCMYrqoGoPpL9Yk%2FjmP31tsStk7k3JU9U5PIBZRXbmPno4ppFts5GOIDvnZv%2F%2BAZ7nKhJsWKUNEnotHDCIWqofH4Uqrxg9fYXZbhNj4d%2Bc1ndiUaGPTHC9&X-Amz-Signature=28f9aca3e634d1744aa562b26474911f337a5e0acbd4c50c5c1a49e46c5657d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YNLVPY%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD9uvbrw3hDLZ7NHNlEOmIHK%2FMIGOsMk8BV%2BthCOndMPwIgJ%2Fv37TdjVWfU4tjrxXmrcrLsL%2Bofr8Op6E5qnk2y%2FwgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoA9EwHmex8DPl%2FQircA7du9vt8G0ru7lpK37OQi2uT1V54lP5NcAB5HUu%2F2xvXoGs84myxpE7Xg%2Fr6O%2BUQBCRDzsi5%2BBeNOzGbK0f9ehh9slv2Lj86KNJdopwN3%2FKP25vjJmw02j3rLjowO5xK40qQtz1Dyp8qtpB2ZQHXZsVQ7QyfSg%2FztJ0EE1Fl%2BN0w6HF2A0ak5lh7oNPv61rzm78cJLnW0be5cv0v596g8zybTaIFFaPbdZkI8Ciq%2FORXv1lDXe%2BG8mRsP2cwywa8uSuJZJWmaAbpGWxzPvcob5dk%2BgRE88ekpJdBE0jNivKJp9p49aZMYMlKOAaw1e4XhCWBrBBRH5jDFh9qPdMUwZHvwy38fNyTQBvxWkhuIL%2BLuHWqIBp1ZgC7UTskjlgEhnBYLBx%2FP9APCmfZ%2Fv2rP8AD1rDm7PeVWI6NQD2OL5iAxM%2FiE0e5%2B5LyaF8%2FADC9IwKU0yzpmIBzznSoPSui8Or0A4N%2BTA02MG8umr02Cfq1EILW%2F2bjixSNINL3RKG9OJz4PWNavwOO%2Bhr65XES7%2BhxFhXpdW7snBX3wHCMUuuvAz5h8WPWZ07dWY8U869hok%2FRf7yAB%2BLpAVgQCRz4RenC8bIc8qM6%2BPktrz7gE0VPzN1DwniOje%2BEjIo%2BMNPy%2FcUGOqUBwbXelrchJSZxsVLjRMVWTzECxRIpIOmoqOpPV0MI9Gbnkq8TtQOCyLmtsKQORdLfNyzSYAMvNBQRCMSf%2Bx%2F7KzJQrzI7Jquux1%2FZl3fCMYrqoGoPpL9Yk%2FjmP31tsStk7k3JU9U5PIBZRXbmPno4ppFts5GOIDvnZv%2F%2BAZ7nKhJsWKUNEnotHDCIWqofH4Uqrxg9fYXZbhNj4d%2Bc1ndiUaGPTHC9&X-Amz-Signature=9bd6892c2be340a1890ee6bae7d7838b98903a8004db322c85649b3650077e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YNLVPY%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD9uvbrw3hDLZ7NHNlEOmIHK%2FMIGOsMk8BV%2BthCOndMPwIgJ%2Fv37TdjVWfU4tjrxXmrcrLsL%2Bofr8Op6E5qnk2y%2FwgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoA9EwHmex8DPl%2FQircA7du9vt8G0ru7lpK37OQi2uT1V54lP5NcAB5HUu%2F2xvXoGs84myxpE7Xg%2Fr6O%2BUQBCRDzsi5%2BBeNOzGbK0f9ehh9slv2Lj86KNJdopwN3%2FKP25vjJmw02j3rLjowO5xK40qQtz1Dyp8qtpB2ZQHXZsVQ7QyfSg%2FztJ0EE1Fl%2BN0w6HF2A0ak5lh7oNPv61rzm78cJLnW0be5cv0v596g8zybTaIFFaPbdZkI8Ciq%2FORXv1lDXe%2BG8mRsP2cwywa8uSuJZJWmaAbpGWxzPvcob5dk%2BgRE88ekpJdBE0jNivKJp9p49aZMYMlKOAaw1e4XhCWBrBBRH5jDFh9qPdMUwZHvwy38fNyTQBvxWkhuIL%2BLuHWqIBp1ZgC7UTskjlgEhnBYLBx%2FP9APCmfZ%2Fv2rP8AD1rDm7PeVWI6NQD2OL5iAxM%2FiE0e5%2B5LyaF8%2FADC9IwKU0yzpmIBzznSoPSui8Or0A4N%2BTA02MG8umr02Cfq1EILW%2F2bjixSNINL3RKG9OJz4PWNavwOO%2Bhr65XES7%2BhxFhXpdW7snBX3wHCMUuuvAz5h8WPWZ07dWY8U869hok%2FRf7yAB%2BLpAVgQCRz4RenC8bIc8qM6%2BPktrz7gE0VPzN1DwniOje%2BEjIo%2BMNPy%2FcUGOqUBwbXelrchJSZxsVLjRMVWTzECxRIpIOmoqOpPV0MI9Gbnkq8TtQOCyLmtsKQORdLfNyzSYAMvNBQRCMSf%2Bx%2F7KzJQrzI7Jquux1%2FZl3fCMYrqoGoPpL9Yk%2FjmP31tsStk7k3JU9U5PIBZRXbmPno4ppFts5GOIDvnZv%2F%2BAZ7nKhJsWKUNEnotHDCIWqofH4Uqrxg9fYXZbhNj4d%2Bc1ndiUaGPTHC9&X-Amz-Signature=1664e3d125f27eebd29ce7d0915f90fa9b4bd40a4337c1897861eed4cd79b6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YNLVPY%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD9uvbrw3hDLZ7NHNlEOmIHK%2FMIGOsMk8BV%2BthCOndMPwIgJ%2Fv37TdjVWfU4tjrxXmrcrLsL%2Bofr8Op6E5qnk2y%2FwgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoA9EwHmex8DPl%2FQircA7du9vt8G0ru7lpK37OQi2uT1V54lP5NcAB5HUu%2F2xvXoGs84myxpE7Xg%2Fr6O%2BUQBCRDzsi5%2BBeNOzGbK0f9ehh9slv2Lj86KNJdopwN3%2FKP25vjJmw02j3rLjowO5xK40qQtz1Dyp8qtpB2ZQHXZsVQ7QyfSg%2FztJ0EE1Fl%2BN0w6HF2A0ak5lh7oNPv61rzm78cJLnW0be5cv0v596g8zybTaIFFaPbdZkI8Ciq%2FORXv1lDXe%2BG8mRsP2cwywa8uSuJZJWmaAbpGWxzPvcob5dk%2BgRE88ekpJdBE0jNivKJp9p49aZMYMlKOAaw1e4XhCWBrBBRH5jDFh9qPdMUwZHvwy38fNyTQBvxWkhuIL%2BLuHWqIBp1ZgC7UTskjlgEhnBYLBx%2FP9APCmfZ%2Fv2rP8AD1rDm7PeVWI6NQD2OL5iAxM%2FiE0e5%2B5LyaF8%2FADC9IwKU0yzpmIBzznSoPSui8Or0A4N%2BTA02MG8umr02Cfq1EILW%2F2bjixSNINL3RKG9OJz4PWNavwOO%2Bhr65XES7%2BhxFhXpdW7snBX3wHCMUuuvAz5h8WPWZ07dWY8U869hok%2FRf7yAB%2BLpAVgQCRz4RenC8bIc8qM6%2BPktrz7gE0VPzN1DwniOje%2BEjIo%2BMNPy%2FcUGOqUBwbXelrchJSZxsVLjRMVWTzECxRIpIOmoqOpPV0MI9Gbnkq8TtQOCyLmtsKQORdLfNyzSYAMvNBQRCMSf%2Bx%2F7KzJQrzI7Jquux1%2FZl3fCMYrqoGoPpL9Yk%2FjmP31tsStk7k3JU9U5PIBZRXbmPno4ppFts5GOIDvnZv%2F%2BAZ7nKhJsWKUNEnotHDCIWqofH4Uqrxg9fYXZbhNj4d%2Bc1ndiUaGPTHC9&X-Amz-Signature=1e4b43051551616552a6dcff225f406a7ddeb5af7479dfd6cbfe3c535addfff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YNLVPY%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD9uvbrw3hDLZ7NHNlEOmIHK%2FMIGOsMk8BV%2BthCOndMPwIgJ%2Fv37TdjVWfU4tjrxXmrcrLsL%2Bofr8Op6E5qnk2y%2FwgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoA9EwHmex8DPl%2FQircA7du9vt8G0ru7lpK37OQi2uT1V54lP5NcAB5HUu%2F2xvXoGs84myxpE7Xg%2Fr6O%2BUQBCRDzsi5%2BBeNOzGbK0f9ehh9slv2Lj86KNJdopwN3%2FKP25vjJmw02j3rLjowO5xK40qQtz1Dyp8qtpB2ZQHXZsVQ7QyfSg%2FztJ0EE1Fl%2BN0w6HF2A0ak5lh7oNPv61rzm78cJLnW0be5cv0v596g8zybTaIFFaPbdZkI8Ciq%2FORXv1lDXe%2BG8mRsP2cwywa8uSuJZJWmaAbpGWxzPvcob5dk%2BgRE88ekpJdBE0jNivKJp9p49aZMYMlKOAaw1e4XhCWBrBBRH5jDFh9qPdMUwZHvwy38fNyTQBvxWkhuIL%2BLuHWqIBp1ZgC7UTskjlgEhnBYLBx%2FP9APCmfZ%2Fv2rP8AD1rDm7PeVWI6NQD2OL5iAxM%2FiE0e5%2B5LyaF8%2FADC9IwKU0yzpmIBzznSoPSui8Or0A4N%2BTA02MG8umr02Cfq1EILW%2F2bjixSNINL3RKG9OJz4PWNavwOO%2Bhr65XES7%2BhxFhXpdW7snBX3wHCMUuuvAz5h8WPWZ07dWY8U869hok%2FRf7yAB%2BLpAVgQCRz4RenC8bIc8qM6%2BPktrz7gE0VPzN1DwniOje%2BEjIo%2BMNPy%2FcUGOqUBwbXelrchJSZxsVLjRMVWTzECxRIpIOmoqOpPV0MI9Gbnkq8TtQOCyLmtsKQORdLfNyzSYAMvNBQRCMSf%2Bx%2F7KzJQrzI7Jquux1%2FZl3fCMYrqoGoPpL9Yk%2FjmP31tsStk7k3JU9U5PIBZRXbmPno4ppFts5GOIDvnZv%2F%2BAZ7nKhJsWKUNEnotHDCIWqofH4Uqrxg9fYXZbhNj4d%2Bc1ndiUaGPTHC9&X-Amz-Signature=6de0e73b639de6bb456a09a7a624fb315e82400d9094da5790cfd6629b8487e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U3PIJP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1v5QvUu66wQod7PRhzwgO%2BbHse5DChbAWX5OR3ezpTAiArbQDkkZQCSKpS4a9fPv8v24fORBkfqxqaWZSxAp%2BRryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5W3McF88a4mPI5SmKtwD1JRF1LkIqHEfyKhxF3Tn4ObhUEp8qo4%2BaNVML1j4%2BWS9IWLFK5KHcEz%2B%2Bh9tEm0YxGePZTHFBiHRbPJEiyY181EYLX5PQT%2FALHsvwktohw3jziDhFr%2FAe%2BW%2BZcyKAcP1dzJA5cQCjJHHatf4Rpd9MW1s54hdH8e%2BDMzHY3J6qbOvPLWscSklkM1%2F3nchgQZNPNK%2B38vNOgkBjceG5VzhhgcDYhj75hfp8E2sRtCPbv4dy%2Fvdv7TnL1X97rjfA3q9yLfMHYX0knWe1eb%2BMhJSObY665HHVM3KpmbciiXCvJ7fOiFVYbJz86HREbFlGAv0DlgvHHYdJ2%2BKdXjzGl4i507XFVXmZHo1jskTqt0lFowKNFREC8qz5x8PkoIZI2LO8PR%2BKRCpd%2B%2B%2FsddfPnLWyu9SS%2BcoCYqq7l0M5LMI7hGwMHXXevZb5rhofOkfmW1sNjbUfBg1v1TRdNJZLpVg%2BxB0IgdFTGFCZX4eoI%2BLctaKvSXysK3sIRVoEfKydawNZUETUmnB2dwoU3S4m3BnxQoeBbv6LAvCkXZejiEu5yudrJ8N0JYFqLlPWVv9NfDD3jKQafj%2FoZ%2FMaya%2B0VmXgcXRF4a6Xp8uIILupxf0R%2FAPzjva3Nq1iHvltsgwoYirwQY6pgEUJjjicwhYbw2FtRq58JYKZDOmEOVMwYwTwQOnUWfOdIdnfwIrTOxmFZvEt34PVsSz%2BcuV7dhJZ5lAN8%2FzzqTJLiAojR8GltX%2BkBcmlM0SqcQRKh0BzuJ9T1jMwHVQY70bX2SI%2BbW9kWz1Bw%2BLtDAwJ1OceDH%2FiokzUg%2BK5WHSp568kQEkb0bXqsJl4xjJBaeYRgGVOFUhB%2B%2FD4sfBb42lvBuQ3WbI&X-Amz-Signature=3ece917c383898b9fa919c03f3ea2c288c1e56fab2985191c5c8c52facbe6916&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U3PIJP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1v5QvUu66wQod7PRhzwgO%2BbHse5DChbAWX5OR3ezpTAiArbQDkkZQCSKpS4a9fPv8v24fORBkfqxqaWZSxAp%2BRryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5W3McF88a4mPI5SmKtwD1JRF1LkIqHEfyKhxF3Tn4ObhUEp8qo4%2BaNVML1j4%2BWS9IWLFK5KHcEz%2B%2Bh9tEm0YxGePZTHFBiHRbPJEiyY181EYLX5PQT%2FALHsvwktohw3jziDhFr%2FAe%2BW%2BZcyKAcP1dzJA5cQCjJHHatf4Rpd9MW1s54hdH8e%2BDMzHY3J6qbOvPLWscSklkM1%2F3nchgQZNPNK%2B38vNOgkBjceG5VzhhgcDYhj75hfp8E2sRtCPbv4dy%2Fvdv7TnL1X97rjfA3q9yLfMHYX0knWe1eb%2BMhJSObY665HHVM3KpmbciiXCvJ7fOiFVYbJz86HREbFlGAv0DlgvHHYdJ2%2BKdXjzGl4i507XFVXmZHo1jskTqt0lFowKNFREC8qz5x8PkoIZI2LO8PR%2BKRCpd%2B%2B%2FsddfPnLWyu9SS%2BcoCYqq7l0M5LMI7hGwMHXXevZb5rhofOkfmW1sNjbUfBg1v1TRdNJZLpVg%2BxB0IgdFTGFCZX4eoI%2BLctaKvSXysK3sIRVoEfKydawNZUETUmnB2dwoU3S4m3BnxQoeBbv6LAvCkXZejiEu5yudrJ8N0JYFqLlPWVv9NfDD3jKQafj%2FoZ%2FMaya%2B0VmXgcXRF4a6Xp8uIILupxf0R%2FAPzjva3Nq1iHvltsgwoYirwQY6pgEUJjjicwhYbw2FtRq58JYKZDOmEOVMwYwTwQOnUWfOdIdnfwIrTOxmFZvEt34PVsSz%2BcuV7dhJZ5lAN8%2FzzqTJLiAojR8GltX%2BkBcmlM0SqcQRKh0BzuJ9T1jMwHVQY70bX2SI%2BbW9kWz1Bw%2BLtDAwJ1OceDH%2FiokzUg%2BK5WHSp568kQEkb0bXqsJl4xjJBaeYRgGVOFUhB%2B%2FD4sfBb42lvBuQ3WbI&X-Amz-Signature=44d58d5b79a8cd7e4e21a5193e625ff442c531f82cdec94cc3097f8d8eb28312&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U3PIJP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1v5QvUu66wQod7PRhzwgO%2BbHse5DChbAWX5OR3ezpTAiArbQDkkZQCSKpS4a9fPv8v24fORBkfqxqaWZSxAp%2BRryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5W3McF88a4mPI5SmKtwD1JRF1LkIqHEfyKhxF3Tn4ObhUEp8qo4%2BaNVML1j4%2BWS9IWLFK5KHcEz%2B%2Bh9tEm0YxGePZTHFBiHRbPJEiyY181EYLX5PQT%2FALHsvwktohw3jziDhFr%2FAe%2BW%2BZcyKAcP1dzJA5cQCjJHHatf4Rpd9MW1s54hdH8e%2BDMzHY3J6qbOvPLWscSklkM1%2F3nchgQZNPNK%2B38vNOgkBjceG5VzhhgcDYhj75hfp8E2sRtCPbv4dy%2Fvdv7TnL1X97rjfA3q9yLfMHYX0knWe1eb%2BMhJSObY665HHVM3KpmbciiXCvJ7fOiFVYbJz86HREbFlGAv0DlgvHHYdJ2%2BKdXjzGl4i507XFVXmZHo1jskTqt0lFowKNFREC8qz5x8PkoIZI2LO8PR%2BKRCpd%2B%2B%2FsddfPnLWyu9SS%2BcoCYqq7l0M5LMI7hGwMHXXevZb5rhofOkfmW1sNjbUfBg1v1TRdNJZLpVg%2BxB0IgdFTGFCZX4eoI%2BLctaKvSXysK3sIRVoEfKydawNZUETUmnB2dwoU3S4m3BnxQoeBbv6LAvCkXZejiEu5yudrJ8N0JYFqLlPWVv9NfDD3jKQafj%2FoZ%2FMaya%2B0VmXgcXRF4a6Xp8uIILupxf0R%2FAPzjva3Nq1iHvltsgwoYirwQY6pgEUJjjicwhYbw2FtRq58JYKZDOmEOVMwYwTwQOnUWfOdIdnfwIrTOxmFZvEt34PVsSz%2BcuV7dhJZ5lAN8%2FzzqTJLiAojR8GltX%2BkBcmlM0SqcQRKh0BzuJ9T1jMwHVQY70bX2SI%2BbW9kWz1Bw%2BLtDAwJ1OceDH%2FiokzUg%2BK5WHSp568kQEkb0bXqsJl4xjJBaeYRgGVOFUhB%2B%2FD4sfBb42lvBuQ3WbI&X-Amz-Signature=223283f042e56d524b201414156e314dced51bd5ca58786b68a13b6701d973fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U3PIJP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1v5QvUu66wQod7PRhzwgO%2BbHse5DChbAWX5OR3ezpTAiArbQDkkZQCSKpS4a9fPv8v24fORBkfqxqaWZSxAp%2BRryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5W3McF88a4mPI5SmKtwD1JRF1LkIqHEfyKhxF3Tn4ObhUEp8qo4%2BaNVML1j4%2BWS9IWLFK5KHcEz%2B%2Bh9tEm0YxGePZTHFBiHRbPJEiyY181EYLX5PQT%2FALHsvwktohw3jziDhFr%2FAe%2BW%2BZcyKAcP1dzJA5cQCjJHHatf4Rpd9MW1s54hdH8e%2BDMzHY3J6qbOvPLWscSklkM1%2F3nchgQZNPNK%2B38vNOgkBjceG5VzhhgcDYhj75hfp8E2sRtCPbv4dy%2Fvdv7TnL1X97rjfA3q9yLfMHYX0knWe1eb%2BMhJSObY665HHVM3KpmbciiXCvJ7fOiFVYbJz86HREbFlGAv0DlgvHHYdJ2%2BKdXjzGl4i507XFVXmZHo1jskTqt0lFowKNFREC8qz5x8PkoIZI2LO8PR%2BKRCpd%2B%2B%2FsddfPnLWyu9SS%2BcoCYqq7l0M5LMI7hGwMHXXevZb5rhofOkfmW1sNjbUfBg1v1TRdNJZLpVg%2BxB0IgdFTGFCZX4eoI%2BLctaKvSXysK3sIRVoEfKydawNZUETUmnB2dwoU3S4m3BnxQoeBbv6LAvCkXZejiEu5yudrJ8N0JYFqLlPWVv9NfDD3jKQafj%2FoZ%2FMaya%2B0VmXgcXRF4a6Xp8uIILupxf0R%2FAPzjva3Nq1iHvltsgwoYirwQY6pgEUJjjicwhYbw2FtRq58JYKZDOmEOVMwYwTwQOnUWfOdIdnfwIrTOxmFZvEt34PVsSz%2BcuV7dhJZ5lAN8%2FzzqTJLiAojR8GltX%2BkBcmlM0SqcQRKh0BzuJ9T1jMwHVQY70bX2SI%2BbW9kWz1Bw%2BLtDAwJ1OceDH%2FiokzUg%2BK5WHSp568kQEkb0bXqsJl4xjJBaeYRgGVOFUhB%2B%2FD4sfBb42lvBuQ3WbI&X-Amz-Signature=a04323d529ac4699f24956663fa84237c0ff32640e04fed3f56576664bfbd858&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U3PIJP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1v5QvUu66wQod7PRhzwgO%2BbHse5DChbAWX5OR3ezpTAiArbQDkkZQCSKpS4a9fPv8v24fORBkfqxqaWZSxAp%2BRryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5W3McF88a4mPI5SmKtwD1JRF1LkIqHEfyKhxF3Tn4ObhUEp8qo4%2BaNVML1j4%2BWS9IWLFK5KHcEz%2B%2Bh9tEm0YxGePZTHFBiHRbPJEiyY181EYLX5PQT%2FALHsvwktohw3jziDhFr%2FAe%2BW%2BZcyKAcP1dzJA5cQCjJHHatf4Rpd9MW1s54hdH8e%2BDMzHY3J6qbOvPLWscSklkM1%2F3nchgQZNPNK%2B38vNOgkBjceG5VzhhgcDYhj75hfp8E2sRtCPbv4dy%2Fvdv7TnL1X97rjfA3q9yLfMHYX0knWe1eb%2BMhJSObY665HHVM3KpmbciiXCvJ7fOiFVYbJz86HREbFlGAv0DlgvHHYdJ2%2BKdXjzGl4i507XFVXmZHo1jskTqt0lFowKNFREC8qz5x8PkoIZI2LO8PR%2BKRCpd%2B%2B%2FsddfPnLWyu9SS%2BcoCYqq7l0M5LMI7hGwMHXXevZb5rhofOkfmW1sNjbUfBg1v1TRdNJZLpVg%2BxB0IgdFTGFCZX4eoI%2BLctaKvSXysK3sIRVoEfKydawNZUETUmnB2dwoU3S4m3BnxQoeBbv6LAvCkXZejiEu5yudrJ8N0JYFqLlPWVv9NfDD3jKQafj%2FoZ%2FMaya%2B0VmXgcXRF4a6Xp8uIILupxf0R%2FAPzjva3Nq1iHvltsgwoYirwQY6pgEUJjjicwhYbw2FtRq58JYKZDOmEOVMwYwTwQOnUWfOdIdnfwIrTOxmFZvEt34PVsSz%2BcuV7dhJZ5lAN8%2FzzqTJLiAojR8GltX%2BkBcmlM0SqcQRKh0BzuJ9T1jMwHVQY70bX2SI%2BbW9kWz1Bw%2BLtDAwJ1OceDH%2FiokzUg%2BK5WHSp568kQEkb0bXqsJl4xjJBaeYRgGVOFUhB%2B%2FD4sfBb42lvBuQ3WbI&X-Amz-Signature=41f07c675b6aa143b853d62c304baa2e30965c41db7e5f86b8d586df5792d67c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U3PIJP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1v5QvUu66wQod7PRhzwgO%2BbHse5DChbAWX5OR3ezpTAiArbQDkkZQCSKpS4a9fPv8v24fORBkfqxqaWZSxAp%2BRryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5W3McF88a4mPI5SmKtwD1JRF1LkIqHEfyKhxF3Tn4ObhUEp8qo4%2BaNVML1j4%2BWS9IWLFK5KHcEz%2B%2Bh9tEm0YxGePZTHFBiHRbPJEiyY181EYLX5PQT%2FALHsvwktohw3jziDhFr%2FAe%2BW%2BZcyKAcP1dzJA5cQCjJHHatf4Rpd9MW1s54hdH8e%2BDMzHY3J6qbOvPLWscSklkM1%2F3nchgQZNPNK%2B38vNOgkBjceG5VzhhgcDYhj75hfp8E2sRtCPbv4dy%2Fvdv7TnL1X97rjfA3q9yLfMHYX0knWe1eb%2BMhJSObY665HHVM3KpmbciiXCvJ7fOiFVYbJz86HREbFlGAv0DlgvHHYdJ2%2BKdXjzGl4i507XFVXmZHo1jskTqt0lFowKNFREC8qz5x8PkoIZI2LO8PR%2BKRCpd%2B%2B%2FsddfPnLWyu9SS%2BcoCYqq7l0M5LMI7hGwMHXXevZb5rhofOkfmW1sNjbUfBg1v1TRdNJZLpVg%2BxB0IgdFTGFCZX4eoI%2BLctaKvSXysK3sIRVoEfKydawNZUETUmnB2dwoU3S4m3BnxQoeBbv6LAvCkXZejiEu5yudrJ8N0JYFqLlPWVv9NfDD3jKQafj%2FoZ%2FMaya%2B0VmXgcXRF4a6Xp8uIILupxf0R%2FAPzjva3Nq1iHvltsgwoYirwQY6pgEUJjjicwhYbw2FtRq58JYKZDOmEOVMwYwTwQOnUWfOdIdnfwIrTOxmFZvEt34PVsSz%2BcuV7dhJZ5lAN8%2FzzqTJLiAojR8GltX%2BkBcmlM0SqcQRKh0BzuJ9T1jMwHVQY70bX2SI%2BbW9kWz1Bw%2BLtDAwJ1OceDH%2FiokzUg%2BK5WHSp568kQEkb0bXqsJl4xjJBaeYRgGVOFUhB%2B%2FD4sfBb42lvBuQ3WbI&X-Amz-Signature=7212d39eeb2c71b7c18f9894cbb2a927cb7efb4ac5a318bdeaa30d8ce7c30a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U3PIJP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1v5QvUu66wQod7PRhzwgO%2BbHse5DChbAWX5OR3ezpTAiArbQDkkZQCSKpS4a9fPv8v24fORBkfqxqaWZSxAp%2BRryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5W3McF88a4mPI5SmKtwD1JRF1LkIqHEfyKhxF3Tn4ObhUEp8qo4%2BaNVML1j4%2BWS9IWLFK5KHcEz%2B%2Bh9tEm0YxGePZTHFBiHRbPJEiyY181EYLX5PQT%2FALHsvwktohw3jziDhFr%2FAe%2BW%2BZcyKAcP1dzJA5cQCjJHHatf4Rpd9MW1s54hdH8e%2BDMzHY3J6qbOvPLWscSklkM1%2F3nchgQZNPNK%2B38vNOgkBjceG5VzhhgcDYhj75hfp8E2sRtCPbv4dy%2Fvdv7TnL1X97rjfA3q9yLfMHYX0knWe1eb%2BMhJSObY665HHVM3KpmbciiXCvJ7fOiFVYbJz86HREbFlGAv0DlgvHHYdJ2%2BKdXjzGl4i507XFVXmZHo1jskTqt0lFowKNFREC8qz5x8PkoIZI2LO8PR%2BKRCpd%2B%2B%2FsddfPnLWyu9SS%2BcoCYqq7l0M5LMI7hGwMHXXevZb5rhofOkfmW1sNjbUfBg1v1TRdNJZLpVg%2BxB0IgdFTGFCZX4eoI%2BLctaKvSXysK3sIRVoEfKydawNZUETUmnB2dwoU3S4m3BnxQoeBbv6LAvCkXZejiEu5yudrJ8N0JYFqLlPWVv9NfDD3jKQafj%2FoZ%2FMaya%2B0VmXgcXRF4a6Xp8uIILupxf0R%2FAPzjva3Nq1iHvltsgwoYirwQY6pgEUJjjicwhYbw2FtRq58JYKZDOmEOVMwYwTwQOnUWfOdIdnfwIrTOxmFZvEt34PVsSz%2BcuV7dhJZ5lAN8%2FzzqTJLiAojR8GltX%2BkBcmlM0SqcQRKh0BzuJ9T1jMwHVQY70bX2SI%2BbW9kWz1Bw%2BLtDAwJ1OceDH%2FiokzUg%2BK5WHSp568kQEkb0bXqsJl4xjJBaeYRgGVOFUhB%2B%2FD4sfBb42lvBuQ3WbI&X-Amz-Signature=f7e6e5fbb796a922ced501d59a8ac6a7ab2c48b6dfe1f83b302952fd7f902bac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U3PIJP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1v5QvUu66wQod7PRhzwgO%2BbHse5DChbAWX5OR3ezpTAiArbQDkkZQCSKpS4a9fPv8v24fORBkfqxqaWZSxAp%2BRryqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5W3McF88a4mPI5SmKtwD1JRF1LkIqHEfyKhxF3Tn4ObhUEp8qo4%2BaNVML1j4%2BWS9IWLFK5KHcEz%2B%2Bh9tEm0YxGePZTHFBiHRbPJEiyY181EYLX5PQT%2FALHsvwktohw3jziDhFr%2FAe%2BW%2BZcyKAcP1dzJA5cQCjJHHatf4Rpd9MW1s54hdH8e%2BDMzHY3J6qbOvPLWscSklkM1%2F3nchgQZNPNK%2B38vNOgkBjceG5VzhhgcDYhj75hfp8E2sRtCPbv4dy%2Fvdv7TnL1X97rjfA3q9yLfMHYX0knWe1eb%2BMhJSObY665HHVM3KpmbciiXCvJ7fOiFVYbJz86HREbFlGAv0DlgvHHYdJ2%2BKdXjzGl4i507XFVXmZHo1jskTqt0lFowKNFREC8qz5x8PkoIZI2LO8PR%2BKRCpd%2B%2B%2FsddfPnLWyu9SS%2BcoCYqq7l0M5LMI7hGwMHXXevZb5rhofOkfmW1sNjbUfBg1v1TRdNJZLpVg%2BxB0IgdFTGFCZX4eoI%2BLctaKvSXysK3sIRVoEfKydawNZUETUmnB2dwoU3S4m3BnxQoeBbv6LAvCkXZejiEu5yudrJ8N0JYFqLlPWVv9NfDD3jKQafj%2FoZ%2FMaya%2B0VmXgcXRF4a6Xp8uIILupxf0R%2FAPzjva3Nq1iHvltsgwoYirwQY6pgEUJjjicwhYbw2FtRq58JYKZDOmEOVMwYwTwQOnUWfOdIdnfwIrTOxmFZvEt34PVsSz%2BcuV7dhJZ5lAN8%2FzzqTJLiAojR8GltX%2BkBcmlM0SqcQRKh0BzuJ9T1jMwHVQY70bX2SI%2BbW9kWz1Bw%2BLtDAwJ1OceDH%2FiokzUg%2BK5WHSp568kQEkb0bXqsJl4xjJBaeYRgGVOFUhB%2B%2FD4sfBb42lvBuQ3WbI&X-Amz-Signature=e09aad0ca3a510d484cf9bd0826a8edc49adef675c39cce5610bceab1013ee3b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

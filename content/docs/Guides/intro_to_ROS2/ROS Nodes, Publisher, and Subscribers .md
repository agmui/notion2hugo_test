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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFRIILV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWHm0tmLzmbRJ1AWKlhtv3woCNh9QYUmEVpYbmkbK7HAiEAiCObjU2ODBidU528X1p2j1KW%2BFGUpr4esCH4268r8x0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXfF3irYIB8sMPL%2BCrcA%2F6YzDPED%2B4gK3w4Vup98kietyMEyOJl%2BFAmguJGDU8hVUF0NQ7N3eaoi5IIl5K0PPrvzZAG%2B%2FdCmJp7if6Xxs1nWBo5Z7FJ%2BCU8ZjKKssZlmXssT%2BKSzduTGbLhv8LQ7xgktaYedGskYg61WmYWxsduuWfM01Eu%2FLlvUIDYc5xp3b1qT4Ztpcx8LY6ttCyf5KBj%2FYrp6UgbLK8TW6bhRKhKEqmUyDAI6kUGypyMbcLhQWKxbBYiPrgvEo8YZUOG7dbp%2FXVn9Rb0fFL8uHJfH%2FioRkFkvt2iS5iv7yi44aCsvGOGDMOqXMrauUGovDD8Y1tF8oP1xfTwwVg3paiDfs7wQHRn%2F4Gy%2BEHTNjD%2BR7nRMUXSwt1HAT9Kd6E122HEG3FuxFyoEzAG3ouGhTynO7bQ3zalDlciX9p8rTRjoU11IzQO2bkOennnnMBfd6mFoyDC6lyp93Fyj6A143jvnGaxDjOKBUb0MdbsXHzSjiOi1T3LM6q5i4mb%2BQ1l%2FBgVOXcUmJj%2FOqbz5b%2BuQvW0E%2FXZItas8uap8vjr3gkLx52xOZeMa8b%2Fmh0OG6J%2FAIDJJkfqE%2FvQrYLwE4cuTtmvyuJZgqYiiXKzJT2bmuzBDzDAPmq%2BoLpxqX1aZt%2BvMJy1sr0GOqUBk5wNGBp48pJKFMogJlUVMgZh9y%2FBdARc9RJch5%2FF%2B3OmtLRQ4DYhg7YQ0Sv%2FYNZ05ByL%2FsmRsGRqk%2BW6f8PUP43ClM3OOz4jqzoPPNpMV1RoHIfL2lrxVa2MGR5ddgyWAl8BAcvJnVMV3kmilI5H21RdpxEc4kLWnmTHDvp3ZDuV69dqpdfzq0zMwck2lUa3flj8BDcqA358T70GN1ZYGpd22Qd4&X-Amz-Signature=cec06baeb0e0648767574713d20da5443347b1e11fe5f429732dfb679a743549&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFRIILV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWHm0tmLzmbRJ1AWKlhtv3woCNh9QYUmEVpYbmkbK7HAiEAiCObjU2ODBidU528X1p2j1KW%2BFGUpr4esCH4268r8x0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXfF3irYIB8sMPL%2BCrcA%2F6YzDPED%2B4gK3w4Vup98kietyMEyOJl%2BFAmguJGDU8hVUF0NQ7N3eaoi5IIl5K0PPrvzZAG%2B%2FdCmJp7if6Xxs1nWBo5Z7FJ%2BCU8ZjKKssZlmXssT%2BKSzduTGbLhv8LQ7xgktaYedGskYg61WmYWxsduuWfM01Eu%2FLlvUIDYc5xp3b1qT4Ztpcx8LY6ttCyf5KBj%2FYrp6UgbLK8TW6bhRKhKEqmUyDAI6kUGypyMbcLhQWKxbBYiPrgvEo8YZUOG7dbp%2FXVn9Rb0fFL8uHJfH%2FioRkFkvt2iS5iv7yi44aCsvGOGDMOqXMrauUGovDD8Y1tF8oP1xfTwwVg3paiDfs7wQHRn%2F4Gy%2BEHTNjD%2BR7nRMUXSwt1HAT9Kd6E122HEG3FuxFyoEzAG3ouGhTynO7bQ3zalDlciX9p8rTRjoU11IzQO2bkOennnnMBfd6mFoyDC6lyp93Fyj6A143jvnGaxDjOKBUb0MdbsXHzSjiOi1T3LM6q5i4mb%2BQ1l%2FBgVOXcUmJj%2FOqbz5b%2BuQvW0E%2FXZItas8uap8vjr3gkLx52xOZeMa8b%2Fmh0OG6J%2FAIDJJkfqE%2FvQrYLwE4cuTtmvyuJZgqYiiXKzJT2bmuzBDzDAPmq%2BoLpxqX1aZt%2BvMJy1sr0GOqUBk5wNGBp48pJKFMogJlUVMgZh9y%2FBdARc9RJch5%2FF%2B3OmtLRQ4DYhg7YQ0Sv%2FYNZ05ByL%2FsmRsGRqk%2BW6f8PUP43ClM3OOz4jqzoPPNpMV1RoHIfL2lrxVa2MGR5ddgyWAl8BAcvJnVMV3kmilI5H21RdpxEc4kLWnmTHDvp3ZDuV69dqpdfzq0zMwck2lUa3flj8BDcqA358T70GN1ZYGpd22Qd4&X-Amz-Signature=e6f438b9bf8898585f2de96aa00e03b8d76b4bbec1aa4b4d7814885edbf4a0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFRIILV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWHm0tmLzmbRJ1AWKlhtv3woCNh9QYUmEVpYbmkbK7HAiEAiCObjU2ODBidU528X1p2j1KW%2BFGUpr4esCH4268r8x0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXfF3irYIB8sMPL%2BCrcA%2F6YzDPED%2B4gK3w4Vup98kietyMEyOJl%2BFAmguJGDU8hVUF0NQ7N3eaoi5IIl5K0PPrvzZAG%2B%2FdCmJp7if6Xxs1nWBo5Z7FJ%2BCU8ZjKKssZlmXssT%2BKSzduTGbLhv8LQ7xgktaYedGskYg61WmYWxsduuWfM01Eu%2FLlvUIDYc5xp3b1qT4Ztpcx8LY6ttCyf5KBj%2FYrp6UgbLK8TW6bhRKhKEqmUyDAI6kUGypyMbcLhQWKxbBYiPrgvEo8YZUOG7dbp%2FXVn9Rb0fFL8uHJfH%2FioRkFkvt2iS5iv7yi44aCsvGOGDMOqXMrauUGovDD8Y1tF8oP1xfTwwVg3paiDfs7wQHRn%2F4Gy%2BEHTNjD%2BR7nRMUXSwt1HAT9Kd6E122HEG3FuxFyoEzAG3ouGhTynO7bQ3zalDlciX9p8rTRjoU11IzQO2bkOennnnMBfd6mFoyDC6lyp93Fyj6A143jvnGaxDjOKBUb0MdbsXHzSjiOi1T3LM6q5i4mb%2BQ1l%2FBgVOXcUmJj%2FOqbz5b%2BuQvW0E%2FXZItas8uap8vjr3gkLx52xOZeMa8b%2Fmh0OG6J%2FAIDJJkfqE%2FvQrYLwE4cuTtmvyuJZgqYiiXKzJT2bmuzBDzDAPmq%2BoLpxqX1aZt%2BvMJy1sr0GOqUBk5wNGBp48pJKFMogJlUVMgZh9y%2FBdARc9RJch5%2FF%2B3OmtLRQ4DYhg7YQ0Sv%2FYNZ05ByL%2FsmRsGRqk%2BW6f8PUP43ClM3OOz4jqzoPPNpMV1RoHIfL2lrxVa2MGR5ddgyWAl8BAcvJnVMV3kmilI5H21RdpxEc4kLWnmTHDvp3ZDuV69dqpdfzq0zMwck2lUa3flj8BDcqA358T70GN1ZYGpd22Qd4&X-Amz-Signature=e8990feddcfbc8666732f685e750bcd6391928d4a7824d77a15b40d6e7f7345e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFRIILV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWHm0tmLzmbRJ1AWKlhtv3woCNh9QYUmEVpYbmkbK7HAiEAiCObjU2ODBidU528X1p2j1KW%2BFGUpr4esCH4268r8x0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXfF3irYIB8sMPL%2BCrcA%2F6YzDPED%2B4gK3w4Vup98kietyMEyOJl%2BFAmguJGDU8hVUF0NQ7N3eaoi5IIl5K0PPrvzZAG%2B%2FdCmJp7if6Xxs1nWBo5Z7FJ%2BCU8ZjKKssZlmXssT%2BKSzduTGbLhv8LQ7xgktaYedGskYg61WmYWxsduuWfM01Eu%2FLlvUIDYc5xp3b1qT4Ztpcx8LY6ttCyf5KBj%2FYrp6UgbLK8TW6bhRKhKEqmUyDAI6kUGypyMbcLhQWKxbBYiPrgvEo8YZUOG7dbp%2FXVn9Rb0fFL8uHJfH%2FioRkFkvt2iS5iv7yi44aCsvGOGDMOqXMrauUGovDD8Y1tF8oP1xfTwwVg3paiDfs7wQHRn%2F4Gy%2BEHTNjD%2BR7nRMUXSwt1HAT9Kd6E122HEG3FuxFyoEzAG3ouGhTynO7bQ3zalDlciX9p8rTRjoU11IzQO2bkOennnnMBfd6mFoyDC6lyp93Fyj6A143jvnGaxDjOKBUb0MdbsXHzSjiOi1T3LM6q5i4mb%2BQ1l%2FBgVOXcUmJj%2FOqbz5b%2BuQvW0E%2FXZItas8uap8vjr3gkLx52xOZeMa8b%2Fmh0OG6J%2FAIDJJkfqE%2FvQrYLwE4cuTtmvyuJZgqYiiXKzJT2bmuzBDzDAPmq%2BoLpxqX1aZt%2BvMJy1sr0GOqUBk5wNGBp48pJKFMogJlUVMgZh9y%2FBdARc9RJch5%2FF%2B3OmtLRQ4DYhg7YQ0Sv%2FYNZ05ByL%2FsmRsGRqk%2BW6f8PUP43ClM3OOz4jqzoPPNpMV1RoHIfL2lrxVa2MGR5ddgyWAl8BAcvJnVMV3kmilI5H21RdpxEc4kLWnmTHDvp3ZDuV69dqpdfzq0zMwck2lUa3flj8BDcqA358T70GN1ZYGpd22Qd4&X-Amz-Signature=573ed9f16a2b230a0e2c489c7a91de7aa15f168ea71c547b92aabbd8552171b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFRIILV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWHm0tmLzmbRJ1AWKlhtv3woCNh9QYUmEVpYbmkbK7HAiEAiCObjU2ODBidU528X1p2j1KW%2BFGUpr4esCH4268r8x0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXfF3irYIB8sMPL%2BCrcA%2F6YzDPED%2B4gK3w4Vup98kietyMEyOJl%2BFAmguJGDU8hVUF0NQ7N3eaoi5IIl5K0PPrvzZAG%2B%2FdCmJp7if6Xxs1nWBo5Z7FJ%2BCU8ZjKKssZlmXssT%2BKSzduTGbLhv8LQ7xgktaYedGskYg61WmYWxsduuWfM01Eu%2FLlvUIDYc5xp3b1qT4Ztpcx8LY6ttCyf5KBj%2FYrp6UgbLK8TW6bhRKhKEqmUyDAI6kUGypyMbcLhQWKxbBYiPrgvEo8YZUOG7dbp%2FXVn9Rb0fFL8uHJfH%2FioRkFkvt2iS5iv7yi44aCsvGOGDMOqXMrauUGovDD8Y1tF8oP1xfTwwVg3paiDfs7wQHRn%2F4Gy%2BEHTNjD%2BR7nRMUXSwt1HAT9Kd6E122HEG3FuxFyoEzAG3ouGhTynO7bQ3zalDlciX9p8rTRjoU11IzQO2bkOennnnMBfd6mFoyDC6lyp93Fyj6A143jvnGaxDjOKBUb0MdbsXHzSjiOi1T3LM6q5i4mb%2BQ1l%2FBgVOXcUmJj%2FOqbz5b%2BuQvW0E%2FXZItas8uap8vjr3gkLx52xOZeMa8b%2Fmh0OG6J%2FAIDJJkfqE%2FvQrYLwE4cuTtmvyuJZgqYiiXKzJT2bmuzBDzDAPmq%2BoLpxqX1aZt%2BvMJy1sr0GOqUBk5wNGBp48pJKFMogJlUVMgZh9y%2FBdARc9RJch5%2FF%2B3OmtLRQ4DYhg7YQ0Sv%2FYNZ05ByL%2FsmRsGRqk%2BW6f8PUP43ClM3OOz4jqzoPPNpMV1RoHIfL2lrxVa2MGR5ddgyWAl8BAcvJnVMV3kmilI5H21RdpxEc4kLWnmTHDvp3ZDuV69dqpdfzq0zMwck2lUa3flj8BDcqA358T70GN1ZYGpd22Qd4&X-Amz-Signature=ba5305175ef84d5792d5ebe5f960d08c2d1b6813d78f83f485d2b50698e01ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFRIILV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWHm0tmLzmbRJ1AWKlhtv3woCNh9QYUmEVpYbmkbK7HAiEAiCObjU2ODBidU528X1p2j1KW%2BFGUpr4esCH4268r8x0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXfF3irYIB8sMPL%2BCrcA%2F6YzDPED%2B4gK3w4Vup98kietyMEyOJl%2BFAmguJGDU8hVUF0NQ7N3eaoi5IIl5K0PPrvzZAG%2B%2FdCmJp7if6Xxs1nWBo5Z7FJ%2BCU8ZjKKssZlmXssT%2BKSzduTGbLhv8LQ7xgktaYedGskYg61WmYWxsduuWfM01Eu%2FLlvUIDYc5xp3b1qT4Ztpcx8LY6ttCyf5KBj%2FYrp6UgbLK8TW6bhRKhKEqmUyDAI6kUGypyMbcLhQWKxbBYiPrgvEo8YZUOG7dbp%2FXVn9Rb0fFL8uHJfH%2FioRkFkvt2iS5iv7yi44aCsvGOGDMOqXMrauUGovDD8Y1tF8oP1xfTwwVg3paiDfs7wQHRn%2F4Gy%2BEHTNjD%2BR7nRMUXSwt1HAT9Kd6E122HEG3FuxFyoEzAG3ouGhTynO7bQ3zalDlciX9p8rTRjoU11IzQO2bkOennnnMBfd6mFoyDC6lyp93Fyj6A143jvnGaxDjOKBUb0MdbsXHzSjiOi1T3LM6q5i4mb%2BQ1l%2FBgVOXcUmJj%2FOqbz5b%2BuQvW0E%2FXZItas8uap8vjr3gkLx52xOZeMa8b%2Fmh0OG6J%2FAIDJJkfqE%2FvQrYLwE4cuTtmvyuJZgqYiiXKzJT2bmuzBDzDAPmq%2BoLpxqX1aZt%2BvMJy1sr0GOqUBk5wNGBp48pJKFMogJlUVMgZh9y%2FBdARc9RJch5%2FF%2B3OmtLRQ4DYhg7YQ0Sv%2FYNZ05ByL%2FsmRsGRqk%2BW6f8PUP43ClM3OOz4jqzoPPNpMV1RoHIfL2lrxVa2MGR5ddgyWAl8BAcvJnVMV3kmilI5H21RdpxEc4kLWnmTHDvp3ZDuV69dqpdfzq0zMwck2lUa3flj8BDcqA358T70GN1ZYGpd22Qd4&X-Amz-Signature=8c490f39215f4097a3485133a6982c341fd2f68ff9f248713016562982798ded&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFRIILV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWHm0tmLzmbRJ1AWKlhtv3woCNh9QYUmEVpYbmkbK7HAiEAiCObjU2ODBidU528X1p2j1KW%2BFGUpr4esCH4268r8x0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXfF3irYIB8sMPL%2BCrcA%2F6YzDPED%2B4gK3w4Vup98kietyMEyOJl%2BFAmguJGDU8hVUF0NQ7N3eaoi5IIl5K0PPrvzZAG%2B%2FdCmJp7if6Xxs1nWBo5Z7FJ%2BCU8ZjKKssZlmXssT%2BKSzduTGbLhv8LQ7xgktaYedGskYg61WmYWxsduuWfM01Eu%2FLlvUIDYc5xp3b1qT4Ztpcx8LY6ttCyf5KBj%2FYrp6UgbLK8TW6bhRKhKEqmUyDAI6kUGypyMbcLhQWKxbBYiPrgvEo8YZUOG7dbp%2FXVn9Rb0fFL8uHJfH%2FioRkFkvt2iS5iv7yi44aCsvGOGDMOqXMrauUGovDD8Y1tF8oP1xfTwwVg3paiDfs7wQHRn%2F4Gy%2BEHTNjD%2BR7nRMUXSwt1HAT9Kd6E122HEG3FuxFyoEzAG3ouGhTynO7bQ3zalDlciX9p8rTRjoU11IzQO2bkOennnnMBfd6mFoyDC6lyp93Fyj6A143jvnGaxDjOKBUb0MdbsXHzSjiOi1T3LM6q5i4mb%2BQ1l%2FBgVOXcUmJj%2FOqbz5b%2BuQvW0E%2FXZItas8uap8vjr3gkLx52xOZeMa8b%2Fmh0OG6J%2FAIDJJkfqE%2FvQrYLwE4cuTtmvyuJZgqYiiXKzJT2bmuzBDzDAPmq%2BoLpxqX1aZt%2BvMJy1sr0GOqUBk5wNGBp48pJKFMogJlUVMgZh9y%2FBdARc9RJch5%2FF%2B3OmtLRQ4DYhg7YQ0Sv%2FYNZ05ByL%2FsmRsGRqk%2BW6f8PUP43ClM3OOz4jqzoPPNpMV1RoHIfL2lrxVa2MGR5ddgyWAl8BAcvJnVMV3kmilI5H21RdpxEc4kLWnmTHDvp3ZDuV69dqpdfzq0zMwck2lUa3flj8BDcqA358T70GN1ZYGpd22Qd4&X-Amz-Signature=39640bde70f110a45f1ce1cdb9b2dd8c5d37c733ded091ac2ddf53df563bf83c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFRIILV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWHm0tmLzmbRJ1AWKlhtv3woCNh9QYUmEVpYbmkbK7HAiEAiCObjU2ODBidU528X1p2j1KW%2BFGUpr4esCH4268r8x0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXfF3irYIB8sMPL%2BCrcA%2F6YzDPED%2B4gK3w4Vup98kietyMEyOJl%2BFAmguJGDU8hVUF0NQ7N3eaoi5IIl5K0PPrvzZAG%2B%2FdCmJp7if6Xxs1nWBo5Z7FJ%2BCU8ZjKKssZlmXssT%2BKSzduTGbLhv8LQ7xgktaYedGskYg61WmYWxsduuWfM01Eu%2FLlvUIDYc5xp3b1qT4Ztpcx8LY6ttCyf5KBj%2FYrp6UgbLK8TW6bhRKhKEqmUyDAI6kUGypyMbcLhQWKxbBYiPrgvEo8YZUOG7dbp%2FXVn9Rb0fFL8uHJfH%2FioRkFkvt2iS5iv7yi44aCsvGOGDMOqXMrauUGovDD8Y1tF8oP1xfTwwVg3paiDfs7wQHRn%2F4Gy%2BEHTNjD%2BR7nRMUXSwt1HAT9Kd6E122HEG3FuxFyoEzAG3ouGhTynO7bQ3zalDlciX9p8rTRjoU11IzQO2bkOennnnMBfd6mFoyDC6lyp93Fyj6A143jvnGaxDjOKBUb0MdbsXHzSjiOi1T3LM6q5i4mb%2BQ1l%2FBgVOXcUmJj%2FOqbz5b%2BuQvW0E%2FXZItas8uap8vjr3gkLx52xOZeMa8b%2Fmh0OG6J%2FAIDJJkfqE%2FvQrYLwE4cuTtmvyuJZgqYiiXKzJT2bmuzBDzDAPmq%2BoLpxqX1aZt%2BvMJy1sr0GOqUBk5wNGBp48pJKFMogJlUVMgZh9y%2FBdARc9RJch5%2FF%2B3OmtLRQ4DYhg7YQ0Sv%2FYNZ05ByL%2FsmRsGRqk%2BW6f8PUP43ClM3OOz4jqzoPPNpMV1RoHIfL2lrxVa2MGR5ddgyWAl8BAcvJnVMV3kmilI5H21RdpxEc4kLWnmTHDvp3ZDuV69dqpdfzq0zMwck2lUa3flj8BDcqA358T70GN1ZYGpd22Qd4&X-Amz-Signature=cc68cf421df67e7f540e4d849b5bd72cdcd1308bfb464b1df8a691c0dfbe3118&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

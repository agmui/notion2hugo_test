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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP4BUHB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWMFNTdmnQSXyG4%2BHG6DRoY9Qlx%2FxCuvND1p1FAbl7dgIgCKHYg7JZ8A%2FxbvATBnqBpKCer6Rrza23WRFwvrUQXvYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqnPde1vK6KIh3ITyrcA3V6P6t%2FEcF2%2BGtt2Qna2111kWZPPVY20SyBK9Pd1pitEXciH%2FA%2BIgLw%2FXnoVg%2FqTONbbrXo%2FlhgUwD%2F9Qu16wawEV%2BBf1%2Bi8Tb5leQZj2C0qVKYaD4jPMash0jm6dD%2F2sIyywndo7KNV8lBVgngrdrIlRGc4abJUx9o3LFLZ17RlfbOH3dBdMB%2BwBBq9ab9I2xtfitDKec1NVacm6H%2FxkMxWPf8rp02MMTvKqeie6DVM4xQ%2BmdbALQMn1g8kslMB7GAuNf25GUF0VHy212g7Zd4VbVEUPq5R5iBhe34OHNZkr2quIX3W5NDl4yfeeFiQJ6Eo1a%2F0n6oAPJRqNPHBWVpWfZLoRZGIHMdmvNLXVbbAMKDxyCGDJaLkuxBIa6V4KS9%2FZKyGNWG3gEF6OyiSxxwZ0RWyNEkN%2Bv3BY5VFkDKcMLFYL9TtrgIZ5l%2FlJE4Y4DVgj34ySKRmPUbBgTSHUoIFYJGWmnNc5bBK868wDuX%2B29ODruCQqhvkT2A9s52t07aFBsMBOSoBlFpZmk1fHuSXSd4Kgo4Ql8bmlItptc%2F48%2B6PdB9M%2F7%2BE2lXhXgnwuzYlVlE2KazrQk27prxgHjy6CUDzdlAgaZgU3ZZUNCFyf%2B%2B9YVHnmWCb3cIMPPMhsMGOqUBWrUx%2F1uxzQZg0q94X%2FmUsFyy33JoHkE4PANGjlxs7%2FvhHLXf3e96HfukPRtmYd1I905cx4QXI%2FpUU8O2dKhSiecrXa5%2B8JV5n%2Buj%2FQrpXtOIVGspdiLztpS6XPXnw33RCWuWMQs7u%2FFfpUG0hXADEol55TT0%2FSNqrWypXDJQc%2FHg65AfVgXq5ak4kiID%2BzZnLY6y66O4GZG%2F5CW9XpMFlgrvaPIn&X-Amz-Signature=324280481ad54259cba12e7299f46817ecb0d84acfaa186d4a63fa006e9e6112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP4BUHB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWMFNTdmnQSXyG4%2BHG6DRoY9Qlx%2FxCuvND1p1FAbl7dgIgCKHYg7JZ8A%2FxbvATBnqBpKCer6Rrza23WRFwvrUQXvYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqnPde1vK6KIh3ITyrcA3V6P6t%2FEcF2%2BGtt2Qna2111kWZPPVY20SyBK9Pd1pitEXciH%2FA%2BIgLw%2FXnoVg%2FqTONbbrXo%2FlhgUwD%2F9Qu16wawEV%2BBf1%2Bi8Tb5leQZj2C0qVKYaD4jPMash0jm6dD%2F2sIyywndo7KNV8lBVgngrdrIlRGc4abJUx9o3LFLZ17RlfbOH3dBdMB%2BwBBq9ab9I2xtfitDKec1NVacm6H%2FxkMxWPf8rp02MMTvKqeie6DVM4xQ%2BmdbALQMn1g8kslMB7GAuNf25GUF0VHy212g7Zd4VbVEUPq5R5iBhe34OHNZkr2quIX3W5NDl4yfeeFiQJ6Eo1a%2F0n6oAPJRqNPHBWVpWfZLoRZGIHMdmvNLXVbbAMKDxyCGDJaLkuxBIa6V4KS9%2FZKyGNWG3gEF6OyiSxxwZ0RWyNEkN%2Bv3BY5VFkDKcMLFYL9TtrgIZ5l%2FlJE4Y4DVgj34ySKRmPUbBgTSHUoIFYJGWmnNc5bBK868wDuX%2B29ODruCQqhvkT2A9s52t07aFBsMBOSoBlFpZmk1fHuSXSd4Kgo4Ql8bmlItptc%2F48%2B6PdB9M%2F7%2BE2lXhXgnwuzYlVlE2KazrQk27prxgHjy6CUDzdlAgaZgU3ZZUNCFyf%2B%2B9YVHnmWCb3cIMPPMhsMGOqUBWrUx%2F1uxzQZg0q94X%2FmUsFyy33JoHkE4PANGjlxs7%2FvhHLXf3e96HfukPRtmYd1I905cx4QXI%2FpUU8O2dKhSiecrXa5%2B8JV5n%2Buj%2FQrpXtOIVGspdiLztpS6XPXnw33RCWuWMQs7u%2FFfpUG0hXADEol55TT0%2FSNqrWypXDJQc%2FHg65AfVgXq5ak4kiID%2BzZnLY6y66O4GZG%2F5CW9XpMFlgrvaPIn&X-Amz-Signature=8f4a9c058d8d4bb90aead05f301ed56518507b25e53c3e909adfc1fd6f7290b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP4BUHB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWMFNTdmnQSXyG4%2BHG6DRoY9Qlx%2FxCuvND1p1FAbl7dgIgCKHYg7JZ8A%2FxbvATBnqBpKCer6Rrza23WRFwvrUQXvYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqnPde1vK6KIh3ITyrcA3V6P6t%2FEcF2%2BGtt2Qna2111kWZPPVY20SyBK9Pd1pitEXciH%2FA%2BIgLw%2FXnoVg%2FqTONbbrXo%2FlhgUwD%2F9Qu16wawEV%2BBf1%2Bi8Tb5leQZj2C0qVKYaD4jPMash0jm6dD%2F2sIyywndo7KNV8lBVgngrdrIlRGc4abJUx9o3LFLZ17RlfbOH3dBdMB%2BwBBq9ab9I2xtfitDKec1NVacm6H%2FxkMxWPf8rp02MMTvKqeie6DVM4xQ%2BmdbALQMn1g8kslMB7GAuNf25GUF0VHy212g7Zd4VbVEUPq5R5iBhe34OHNZkr2quIX3W5NDl4yfeeFiQJ6Eo1a%2F0n6oAPJRqNPHBWVpWfZLoRZGIHMdmvNLXVbbAMKDxyCGDJaLkuxBIa6V4KS9%2FZKyGNWG3gEF6OyiSxxwZ0RWyNEkN%2Bv3BY5VFkDKcMLFYL9TtrgIZ5l%2FlJE4Y4DVgj34ySKRmPUbBgTSHUoIFYJGWmnNc5bBK868wDuX%2B29ODruCQqhvkT2A9s52t07aFBsMBOSoBlFpZmk1fHuSXSd4Kgo4Ql8bmlItptc%2F48%2B6PdB9M%2F7%2BE2lXhXgnwuzYlVlE2KazrQk27prxgHjy6CUDzdlAgaZgU3ZZUNCFyf%2B%2B9YVHnmWCb3cIMPPMhsMGOqUBWrUx%2F1uxzQZg0q94X%2FmUsFyy33JoHkE4PANGjlxs7%2FvhHLXf3e96HfukPRtmYd1I905cx4QXI%2FpUU8O2dKhSiecrXa5%2B8JV5n%2Buj%2FQrpXtOIVGspdiLztpS6XPXnw33RCWuWMQs7u%2FFfpUG0hXADEol55TT0%2FSNqrWypXDJQc%2FHg65AfVgXq5ak4kiID%2BzZnLY6y66O4GZG%2F5CW9XpMFlgrvaPIn&X-Amz-Signature=c629f24cbf9a2be3fbc7ea287110e97f8b5b1500ffd8ee191a2390be4fd99fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP4BUHB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWMFNTdmnQSXyG4%2BHG6DRoY9Qlx%2FxCuvND1p1FAbl7dgIgCKHYg7JZ8A%2FxbvATBnqBpKCer6Rrza23WRFwvrUQXvYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqnPde1vK6KIh3ITyrcA3V6P6t%2FEcF2%2BGtt2Qna2111kWZPPVY20SyBK9Pd1pitEXciH%2FA%2BIgLw%2FXnoVg%2FqTONbbrXo%2FlhgUwD%2F9Qu16wawEV%2BBf1%2Bi8Tb5leQZj2C0qVKYaD4jPMash0jm6dD%2F2sIyywndo7KNV8lBVgngrdrIlRGc4abJUx9o3LFLZ17RlfbOH3dBdMB%2BwBBq9ab9I2xtfitDKec1NVacm6H%2FxkMxWPf8rp02MMTvKqeie6DVM4xQ%2BmdbALQMn1g8kslMB7GAuNf25GUF0VHy212g7Zd4VbVEUPq5R5iBhe34OHNZkr2quIX3W5NDl4yfeeFiQJ6Eo1a%2F0n6oAPJRqNPHBWVpWfZLoRZGIHMdmvNLXVbbAMKDxyCGDJaLkuxBIa6V4KS9%2FZKyGNWG3gEF6OyiSxxwZ0RWyNEkN%2Bv3BY5VFkDKcMLFYL9TtrgIZ5l%2FlJE4Y4DVgj34ySKRmPUbBgTSHUoIFYJGWmnNc5bBK868wDuX%2B29ODruCQqhvkT2A9s52t07aFBsMBOSoBlFpZmk1fHuSXSd4Kgo4Ql8bmlItptc%2F48%2B6PdB9M%2F7%2BE2lXhXgnwuzYlVlE2KazrQk27prxgHjy6CUDzdlAgaZgU3ZZUNCFyf%2B%2B9YVHnmWCb3cIMPPMhsMGOqUBWrUx%2F1uxzQZg0q94X%2FmUsFyy33JoHkE4PANGjlxs7%2FvhHLXf3e96HfukPRtmYd1I905cx4QXI%2FpUU8O2dKhSiecrXa5%2B8JV5n%2Buj%2FQrpXtOIVGspdiLztpS6XPXnw33RCWuWMQs7u%2FFfpUG0hXADEol55TT0%2FSNqrWypXDJQc%2FHg65AfVgXq5ak4kiID%2BzZnLY6y66O4GZG%2F5CW9XpMFlgrvaPIn&X-Amz-Signature=b4987624885141505bb40bf3876e4fb725dae91c80486201fe53a7b35c83b986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP4BUHB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWMFNTdmnQSXyG4%2BHG6DRoY9Qlx%2FxCuvND1p1FAbl7dgIgCKHYg7JZ8A%2FxbvATBnqBpKCer6Rrza23WRFwvrUQXvYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqnPde1vK6KIh3ITyrcA3V6P6t%2FEcF2%2BGtt2Qna2111kWZPPVY20SyBK9Pd1pitEXciH%2FA%2BIgLw%2FXnoVg%2FqTONbbrXo%2FlhgUwD%2F9Qu16wawEV%2BBf1%2Bi8Tb5leQZj2C0qVKYaD4jPMash0jm6dD%2F2sIyywndo7KNV8lBVgngrdrIlRGc4abJUx9o3LFLZ17RlfbOH3dBdMB%2BwBBq9ab9I2xtfitDKec1NVacm6H%2FxkMxWPf8rp02MMTvKqeie6DVM4xQ%2BmdbALQMn1g8kslMB7GAuNf25GUF0VHy212g7Zd4VbVEUPq5R5iBhe34OHNZkr2quIX3W5NDl4yfeeFiQJ6Eo1a%2F0n6oAPJRqNPHBWVpWfZLoRZGIHMdmvNLXVbbAMKDxyCGDJaLkuxBIa6V4KS9%2FZKyGNWG3gEF6OyiSxxwZ0RWyNEkN%2Bv3BY5VFkDKcMLFYL9TtrgIZ5l%2FlJE4Y4DVgj34ySKRmPUbBgTSHUoIFYJGWmnNc5bBK868wDuX%2B29ODruCQqhvkT2A9s52t07aFBsMBOSoBlFpZmk1fHuSXSd4Kgo4Ql8bmlItptc%2F48%2B6PdB9M%2F7%2BE2lXhXgnwuzYlVlE2KazrQk27prxgHjy6CUDzdlAgaZgU3ZZUNCFyf%2B%2B9YVHnmWCb3cIMPPMhsMGOqUBWrUx%2F1uxzQZg0q94X%2FmUsFyy33JoHkE4PANGjlxs7%2FvhHLXf3e96HfukPRtmYd1I905cx4QXI%2FpUU8O2dKhSiecrXa5%2B8JV5n%2Buj%2FQrpXtOIVGspdiLztpS6XPXnw33RCWuWMQs7u%2FFfpUG0hXADEol55TT0%2FSNqrWypXDJQc%2FHg65AfVgXq5ak4kiID%2BzZnLY6y66O4GZG%2F5CW9XpMFlgrvaPIn&X-Amz-Signature=37e9e8c6d536716d5c7ceeebbf6273f74f32c3ef576daab1ce73e7c3975df2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP4BUHB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWMFNTdmnQSXyG4%2BHG6DRoY9Qlx%2FxCuvND1p1FAbl7dgIgCKHYg7JZ8A%2FxbvATBnqBpKCer6Rrza23WRFwvrUQXvYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqnPde1vK6KIh3ITyrcA3V6P6t%2FEcF2%2BGtt2Qna2111kWZPPVY20SyBK9Pd1pitEXciH%2FA%2BIgLw%2FXnoVg%2FqTONbbrXo%2FlhgUwD%2F9Qu16wawEV%2BBf1%2Bi8Tb5leQZj2C0qVKYaD4jPMash0jm6dD%2F2sIyywndo7KNV8lBVgngrdrIlRGc4abJUx9o3LFLZ17RlfbOH3dBdMB%2BwBBq9ab9I2xtfitDKec1NVacm6H%2FxkMxWPf8rp02MMTvKqeie6DVM4xQ%2BmdbALQMn1g8kslMB7GAuNf25GUF0VHy212g7Zd4VbVEUPq5R5iBhe34OHNZkr2quIX3W5NDl4yfeeFiQJ6Eo1a%2F0n6oAPJRqNPHBWVpWfZLoRZGIHMdmvNLXVbbAMKDxyCGDJaLkuxBIa6V4KS9%2FZKyGNWG3gEF6OyiSxxwZ0RWyNEkN%2Bv3BY5VFkDKcMLFYL9TtrgIZ5l%2FlJE4Y4DVgj34ySKRmPUbBgTSHUoIFYJGWmnNc5bBK868wDuX%2B29ODruCQqhvkT2A9s52t07aFBsMBOSoBlFpZmk1fHuSXSd4Kgo4Ql8bmlItptc%2F48%2B6PdB9M%2F7%2BE2lXhXgnwuzYlVlE2KazrQk27prxgHjy6CUDzdlAgaZgU3ZZUNCFyf%2B%2B9YVHnmWCb3cIMPPMhsMGOqUBWrUx%2F1uxzQZg0q94X%2FmUsFyy33JoHkE4PANGjlxs7%2FvhHLXf3e96HfukPRtmYd1I905cx4QXI%2FpUU8O2dKhSiecrXa5%2B8JV5n%2Buj%2FQrpXtOIVGspdiLztpS6XPXnw33RCWuWMQs7u%2FFfpUG0hXADEol55TT0%2FSNqrWypXDJQc%2FHg65AfVgXq5ak4kiID%2BzZnLY6y66O4GZG%2F5CW9XpMFlgrvaPIn&X-Amz-Signature=cdf8e29d5118849dbc34583ed2bf30d1385508e37bdfd918ed9032bb153eee16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP4BUHB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWMFNTdmnQSXyG4%2BHG6DRoY9Qlx%2FxCuvND1p1FAbl7dgIgCKHYg7JZ8A%2FxbvATBnqBpKCer6Rrza23WRFwvrUQXvYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqnPde1vK6KIh3ITyrcA3V6P6t%2FEcF2%2BGtt2Qna2111kWZPPVY20SyBK9Pd1pitEXciH%2FA%2BIgLw%2FXnoVg%2FqTONbbrXo%2FlhgUwD%2F9Qu16wawEV%2BBf1%2Bi8Tb5leQZj2C0qVKYaD4jPMash0jm6dD%2F2sIyywndo7KNV8lBVgngrdrIlRGc4abJUx9o3LFLZ17RlfbOH3dBdMB%2BwBBq9ab9I2xtfitDKec1NVacm6H%2FxkMxWPf8rp02MMTvKqeie6DVM4xQ%2BmdbALQMn1g8kslMB7GAuNf25GUF0VHy212g7Zd4VbVEUPq5R5iBhe34OHNZkr2quIX3W5NDl4yfeeFiQJ6Eo1a%2F0n6oAPJRqNPHBWVpWfZLoRZGIHMdmvNLXVbbAMKDxyCGDJaLkuxBIa6V4KS9%2FZKyGNWG3gEF6OyiSxxwZ0RWyNEkN%2Bv3BY5VFkDKcMLFYL9TtrgIZ5l%2FlJE4Y4DVgj34ySKRmPUbBgTSHUoIFYJGWmnNc5bBK868wDuX%2B29ODruCQqhvkT2A9s52t07aFBsMBOSoBlFpZmk1fHuSXSd4Kgo4Ql8bmlItptc%2F48%2B6PdB9M%2F7%2BE2lXhXgnwuzYlVlE2KazrQk27prxgHjy6CUDzdlAgaZgU3ZZUNCFyf%2B%2B9YVHnmWCb3cIMPPMhsMGOqUBWrUx%2F1uxzQZg0q94X%2FmUsFyy33JoHkE4PANGjlxs7%2FvhHLXf3e96HfukPRtmYd1I905cx4QXI%2FpUU8O2dKhSiecrXa5%2B8JV5n%2Buj%2FQrpXtOIVGspdiLztpS6XPXnw33RCWuWMQs7u%2FFfpUG0hXADEol55TT0%2FSNqrWypXDJQc%2FHg65AfVgXq5ak4kiID%2BzZnLY6y66O4GZG%2F5CW9XpMFlgrvaPIn&X-Amz-Signature=f9fbfad11c3bd6f3376257ac4be3facbc659a072649de5a145e899990416a188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP4BUHB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWMFNTdmnQSXyG4%2BHG6DRoY9Qlx%2FxCuvND1p1FAbl7dgIgCKHYg7JZ8A%2FxbvATBnqBpKCer6Rrza23WRFwvrUQXvYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqnPde1vK6KIh3ITyrcA3V6P6t%2FEcF2%2BGtt2Qna2111kWZPPVY20SyBK9Pd1pitEXciH%2FA%2BIgLw%2FXnoVg%2FqTONbbrXo%2FlhgUwD%2F9Qu16wawEV%2BBf1%2Bi8Tb5leQZj2C0qVKYaD4jPMash0jm6dD%2F2sIyywndo7KNV8lBVgngrdrIlRGc4abJUx9o3LFLZ17RlfbOH3dBdMB%2BwBBq9ab9I2xtfitDKec1NVacm6H%2FxkMxWPf8rp02MMTvKqeie6DVM4xQ%2BmdbALQMn1g8kslMB7GAuNf25GUF0VHy212g7Zd4VbVEUPq5R5iBhe34OHNZkr2quIX3W5NDl4yfeeFiQJ6Eo1a%2F0n6oAPJRqNPHBWVpWfZLoRZGIHMdmvNLXVbbAMKDxyCGDJaLkuxBIa6V4KS9%2FZKyGNWG3gEF6OyiSxxwZ0RWyNEkN%2Bv3BY5VFkDKcMLFYL9TtrgIZ5l%2FlJE4Y4DVgj34ySKRmPUbBgTSHUoIFYJGWmnNc5bBK868wDuX%2B29ODruCQqhvkT2A9s52t07aFBsMBOSoBlFpZmk1fHuSXSd4Kgo4Ql8bmlItptc%2F48%2B6PdB9M%2F7%2BE2lXhXgnwuzYlVlE2KazrQk27prxgHjy6CUDzdlAgaZgU3ZZUNCFyf%2B%2B9YVHnmWCb3cIMPPMhsMGOqUBWrUx%2F1uxzQZg0q94X%2FmUsFyy33JoHkE4PANGjlxs7%2FvhHLXf3e96HfukPRtmYd1I905cx4QXI%2FpUU8O2dKhSiecrXa5%2B8JV5n%2Buj%2FQrpXtOIVGspdiLztpS6XPXnw33RCWuWMQs7u%2FFfpUG0hXADEol55TT0%2FSNqrWypXDJQc%2FHg65AfVgXq5ak4kiID%2BzZnLY6y66O4GZG%2F5CW9XpMFlgrvaPIn&X-Amz-Signature=23cd95f0806cca08d00c9bef345c467878ba187ae8dd15476f54b5cb122df20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

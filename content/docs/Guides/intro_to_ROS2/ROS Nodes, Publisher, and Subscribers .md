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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZMBWFU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCa4ulKB8jlOtb2HdYTl23Sjyfi5x%2FUAF%2FokH8ze3yAtwIhANE1Aef93K2mBARp6N%2BVhl1ZXmpqA0P9MkQC%2Fr2tAPu1Kv8DCDcQABoMNjM3NDIzMTgzODA1IgySOs1wRlh5WW2NSB0q3APX4NDN%2FM2YbIpUTIPE3W5VmGRG1Xvskna8OiiIG%2FSyafdDnwAepy9KzarqFJ32EvoLz067tj1%2BnDltfxGSz%2BcD7TO1iPP2DwJc%2BsX2XWKFeSTFyZjb6XwLG7knm8zrWwKLSkkhP3ryCxvF1qMny%2B9kRBweWCvFywSGb6U%2B7g7DyPEjZktlr11WYjq5KBfWX0JUrLX%2Bd53iVTD8HKt710UlO6TjuRhgMO8WoYLjCtde16whMzIhhj4acha8SGz8MD98jQ79c6FFxjHv%2Bb%2FXk%2F5tbHlHQLm778zmab2Y%2FagQHNhKNNqkrxeo0ogRu749dMbh3y29BNLZm8bwQh53H2vAzqqoZXLasEkBTmlVOr%2F5Gg8vE6t%2F5ZfBp%2FNDse9dh4u8rHU52VPqbX5bCdhyt5DEO6LON8InBy4nXR0ikR0gV52E8rdlLV5b07YkNODxWfCYua%2BjT3hsP2yYDQBy2sQRitejPJxD%2BATGo1IsxQu3gKZ6wepDT%2BGEkBDdeq4X6x4COh5POcpR8FFbAoFhNDgMuJNWS48h2EXfBOLQbCkOvI2DYDv7R548Xk3a6h%2F%2FcZJcZBmQFbOcjgPhBOuLvS5oL%2FIQD3ZgWPw3i%2FcHoo9k5tJ0kQ5OCBzSYX0XXDCm99XDBjqkAZru2AApBG8Ovc9KKzk4nVmXDYQtsjjChxwbYjJdWWXr5nc8MB8%2BIPt0iL38C2mKDeKxkf0gnGJdu2LJ0%2Blx%2BgkLqPf%2BzhXJ2Q8gVfhp86tcyJ0uaT3rZzkD5aF3H8pOyg20ysax9IVyjlk5F4T1%2BtCa7x30c1B7t25nfncdAeOcWtd94cEOCRbAMPukiwQRQPysGrdq0%2B3cvOsETjnBhY3g00VG&X-Amz-Signature=729b06bb01185709fb85914b68060a79ed912bf70e41c6c1d2ccdeb805b81599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZMBWFU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCa4ulKB8jlOtb2HdYTl23Sjyfi5x%2FUAF%2FokH8ze3yAtwIhANE1Aef93K2mBARp6N%2BVhl1ZXmpqA0P9MkQC%2Fr2tAPu1Kv8DCDcQABoMNjM3NDIzMTgzODA1IgySOs1wRlh5WW2NSB0q3APX4NDN%2FM2YbIpUTIPE3W5VmGRG1Xvskna8OiiIG%2FSyafdDnwAepy9KzarqFJ32EvoLz067tj1%2BnDltfxGSz%2BcD7TO1iPP2DwJc%2BsX2XWKFeSTFyZjb6XwLG7knm8zrWwKLSkkhP3ryCxvF1qMny%2B9kRBweWCvFywSGb6U%2B7g7DyPEjZktlr11WYjq5KBfWX0JUrLX%2Bd53iVTD8HKt710UlO6TjuRhgMO8WoYLjCtde16whMzIhhj4acha8SGz8MD98jQ79c6FFxjHv%2Bb%2FXk%2F5tbHlHQLm778zmab2Y%2FagQHNhKNNqkrxeo0ogRu749dMbh3y29BNLZm8bwQh53H2vAzqqoZXLasEkBTmlVOr%2F5Gg8vE6t%2F5ZfBp%2FNDse9dh4u8rHU52VPqbX5bCdhyt5DEO6LON8InBy4nXR0ikR0gV52E8rdlLV5b07YkNODxWfCYua%2BjT3hsP2yYDQBy2sQRitejPJxD%2BATGo1IsxQu3gKZ6wepDT%2BGEkBDdeq4X6x4COh5POcpR8FFbAoFhNDgMuJNWS48h2EXfBOLQbCkOvI2DYDv7R548Xk3a6h%2F%2FcZJcZBmQFbOcjgPhBOuLvS5oL%2FIQD3ZgWPw3i%2FcHoo9k5tJ0kQ5OCBzSYX0XXDCm99XDBjqkAZru2AApBG8Ovc9KKzk4nVmXDYQtsjjChxwbYjJdWWXr5nc8MB8%2BIPt0iL38C2mKDeKxkf0gnGJdu2LJ0%2Blx%2BgkLqPf%2BzhXJ2Q8gVfhp86tcyJ0uaT3rZzkD5aF3H8pOyg20ysax9IVyjlk5F4T1%2BtCa7x30c1B7t25nfncdAeOcWtd94cEOCRbAMPukiwQRQPysGrdq0%2B3cvOsETjnBhY3g00VG&X-Amz-Signature=cf3968e42e18290e77deb54105c766111ff9b2d97d2b51482d7253f1444ee9e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZMBWFU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCa4ulKB8jlOtb2HdYTl23Sjyfi5x%2FUAF%2FokH8ze3yAtwIhANE1Aef93K2mBARp6N%2BVhl1ZXmpqA0P9MkQC%2Fr2tAPu1Kv8DCDcQABoMNjM3NDIzMTgzODA1IgySOs1wRlh5WW2NSB0q3APX4NDN%2FM2YbIpUTIPE3W5VmGRG1Xvskna8OiiIG%2FSyafdDnwAepy9KzarqFJ32EvoLz067tj1%2BnDltfxGSz%2BcD7TO1iPP2DwJc%2BsX2XWKFeSTFyZjb6XwLG7knm8zrWwKLSkkhP3ryCxvF1qMny%2B9kRBweWCvFywSGb6U%2B7g7DyPEjZktlr11WYjq5KBfWX0JUrLX%2Bd53iVTD8HKt710UlO6TjuRhgMO8WoYLjCtde16whMzIhhj4acha8SGz8MD98jQ79c6FFxjHv%2Bb%2FXk%2F5tbHlHQLm778zmab2Y%2FagQHNhKNNqkrxeo0ogRu749dMbh3y29BNLZm8bwQh53H2vAzqqoZXLasEkBTmlVOr%2F5Gg8vE6t%2F5ZfBp%2FNDse9dh4u8rHU52VPqbX5bCdhyt5DEO6LON8InBy4nXR0ikR0gV52E8rdlLV5b07YkNODxWfCYua%2BjT3hsP2yYDQBy2sQRitejPJxD%2BATGo1IsxQu3gKZ6wepDT%2BGEkBDdeq4X6x4COh5POcpR8FFbAoFhNDgMuJNWS48h2EXfBOLQbCkOvI2DYDv7R548Xk3a6h%2F%2FcZJcZBmQFbOcjgPhBOuLvS5oL%2FIQD3ZgWPw3i%2FcHoo9k5tJ0kQ5OCBzSYX0XXDCm99XDBjqkAZru2AApBG8Ovc9KKzk4nVmXDYQtsjjChxwbYjJdWWXr5nc8MB8%2BIPt0iL38C2mKDeKxkf0gnGJdu2LJ0%2Blx%2BgkLqPf%2BzhXJ2Q8gVfhp86tcyJ0uaT3rZzkD5aF3H8pOyg20ysax9IVyjlk5F4T1%2BtCa7x30c1B7t25nfncdAeOcWtd94cEOCRbAMPukiwQRQPysGrdq0%2B3cvOsETjnBhY3g00VG&X-Amz-Signature=a0f4c357fbed0c7ceb97826f5744e103e55f0bc416d83083dca94d09959d97ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZMBWFU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCa4ulKB8jlOtb2HdYTl23Sjyfi5x%2FUAF%2FokH8ze3yAtwIhANE1Aef93K2mBARp6N%2BVhl1ZXmpqA0P9MkQC%2Fr2tAPu1Kv8DCDcQABoMNjM3NDIzMTgzODA1IgySOs1wRlh5WW2NSB0q3APX4NDN%2FM2YbIpUTIPE3W5VmGRG1Xvskna8OiiIG%2FSyafdDnwAepy9KzarqFJ32EvoLz067tj1%2BnDltfxGSz%2BcD7TO1iPP2DwJc%2BsX2XWKFeSTFyZjb6XwLG7knm8zrWwKLSkkhP3ryCxvF1qMny%2B9kRBweWCvFywSGb6U%2B7g7DyPEjZktlr11WYjq5KBfWX0JUrLX%2Bd53iVTD8HKt710UlO6TjuRhgMO8WoYLjCtde16whMzIhhj4acha8SGz8MD98jQ79c6FFxjHv%2Bb%2FXk%2F5tbHlHQLm778zmab2Y%2FagQHNhKNNqkrxeo0ogRu749dMbh3y29BNLZm8bwQh53H2vAzqqoZXLasEkBTmlVOr%2F5Gg8vE6t%2F5ZfBp%2FNDse9dh4u8rHU52VPqbX5bCdhyt5DEO6LON8InBy4nXR0ikR0gV52E8rdlLV5b07YkNODxWfCYua%2BjT3hsP2yYDQBy2sQRitejPJxD%2BATGo1IsxQu3gKZ6wepDT%2BGEkBDdeq4X6x4COh5POcpR8FFbAoFhNDgMuJNWS48h2EXfBOLQbCkOvI2DYDv7R548Xk3a6h%2F%2FcZJcZBmQFbOcjgPhBOuLvS5oL%2FIQD3ZgWPw3i%2FcHoo9k5tJ0kQ5OCBzSYX0XXDCm99XDBjqkAZru2AApBG8Ovc9KKzk4nVmXDYQtsjjChxwbYjJdWWXr5nc8MB8%2BIPt0iL38C2mKDeKxkf0gnGJdu2LJ0%2Blx%2BgkLqPf%2BzhXJ2Q8gVfhp86tcyJ0uaT3rZzkD5aF3H8pOyg20ysax9IVyjlk5F4T1%2BtCa7x30c1B7t25nfncdAeOcWtd94cEOCRbAMPukiwQRQPysGrdq0%2B3cvOsETjnBhY3g00VG&X-Amz-Signature=062d580aa833e2f5dcbb094904ee3049d8196f233f00c430ea2dc460d74135a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZMBWFU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCa4ulKB8jlOtb2HdYTl23Sjyfi5x%2FUAF%2FokH8ze3yAtwIhANE1Aef93K2mBARp6N%2BVhl1ZXmpqA0P9MkQC%2Fr2tAPu1Kv8DCDcQABoMNjM3NDIzMTgzODA1IgySOs1wRlh5WW2NSB0q3APX4NDN%2FM2YbIpUTIPE3W5VmGRG1Xvskna8OiiIG%2FSyafdDnwAepy9KzarqFJ32EvoLz067tj1%2BnDltfxGSz%2BcD7TO1iPP2DwJc%2BsX2XWKFeSTFyZjb6XwLG7knm8zrWwKLSkkhP3ryCxvF1qMny%2B9kRBweWCvFywSGb6U%2B7g7DyPEjZktlr11WYjq5KBfWX0JUrLX%2Bd53iVTD8HKt710UlO6TjuRhgMO8WoYLjCtde16whMzIhhj4acha8SGz8MD98jQ79c6FFxjHv%2Bb%2FXk%2F5tbHlHQLm778zmab2Y%2FagQHNhKNNqkrxeo0ogRu749dMbh3y29BNLZm8bwQh53H2vAzqqoZXLasEkBTmlVOr%2F5Gg8vE6t%2F5ZfBp%2FNDse9dh4u8rHU52VPqbX5bCdhyt5DEO6LON8InBy4nXR0ikR0gV52E8rdlLV5b07YkNODxWfCYua%2BjT3hsP2yYDQBy2sQRitejPJxD%2BATGo1IsxQu3gKZ6wepDT%2BGEkBDdeq4X6x4COh5POcpR8FFbAoFhNDgMuJNWS48h2EXfBOLQbCkOvI2DYDv7R548Xk3a6h%2F%2FcZJcZBmQFbOcjgPhBOuLvS5oL%2FIQD3ZgWPw3i%2FcHoo9k5tJ0kQ5OCBzSYX0XXDCm99XDBjqkAZru2AApBG8Ovc9KKzk4nVmXDYQtsjjChxwbYjJdWWXr5nc8MB8%2BIPt0iL38C2mKDeKxkf0gnGJdu2LJ0%2Blx%2BgkLqPf%2BzhXJ2Q8gVfhp86tcyJ0uaT3rZzkD5aF3H8pOyg20ysax9IVyjlk5F4T1%2BtCa7x30c1B7t25nfncdAeOcWtd94cEOCRbAMPukiwQRQPysGrdq0%2B3cvOsETjnBhY3g00VG&X-Amz-Signature=02d9b12934e5b92ba8f958526d4c905c7e752d3787fe23f1a32bb8de06446c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZMBWFU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCa4ulKB8jlOtb2HdYTl23Sjyfi5x%2FUAF%2FokH8ze3yAtwIhANE1Aef93K2mBARp6N%2BVhl1ZXmpqA0P9MkQC%2Fr2tAPu1Kv8DCDcQABoMNjM3NDIzMTgzODA1IgySOs1wRlh5WW2NSB0q3APX4NDN%2FM2YbIpUTIPE3W5VmGRG1Xvskna8OiiIG%2FSyafdDnwAepy9KzarqFJ32EvoLz067tj1%2BnDltfxGSz%2BcD7TO1iPP2DwJc%2BsX2XWKFeSTFyZjb6XwLG7knm8zrWwKLSkkhP3ryCxvF1qMny%2B9kRBweWCvFywSGb6U%2B7g7DyPEjZktlr11WYjq5KBfWX0JUrLX%2Bd53iVTD8HKt710UlO6TjuRhgMO8WoYLjCtde16whMzIhhj4acha8SGz8MD98jQ79c6FFxjHv%2Bb%2FXk%2F5tbHlHQLm778zmab2Y%2FagQHNhKNNqkrxeo0ogRu749dMbh3y29BNLZm8bwQh53H2vAzqqoZXLasEkBTmlVOr%2F5Gg8vE6t%2F5ZfBp%2FNDse9dh4u8rHU52VPqbX5bCdhyt5DEO6LON8InBy4nXR0ikR0gV52E8rdlLV5b07YkNODxWfCYua%2BjT3hsP2yYDQBy2sQRitejPJxD%2BATGo1IsxQu3gKZ6wepDT%2BGEkBDdeq4X6x4COh5POcpR8FFbAoFhNDgMuJNWS48h2EXfBOLQbCkOvI2DYDv7R548Xk3a6h%2F%2FcZJcZBmQFbOcjgPhBOuLvS5oL%2FIQD3ZgWPw3i%2FcHoo9k5tJ0kQ5OCBzSYX0XXDCm99XDBjqkAZru2AApBG8Ovc9KKzk4nVmXDYQtsjjChxwbYjJdWWXr5nc8MB8%2BIPt0iL38C2mKDeKxkf0gnGJdu2LJ0%2Blx%2BgkLqPf%2BzhXJ2Q8gVfhp86tcyJ0uaT3rZzkD5aF3H8pOyg20ysax9IVyjlk5F4T1%2BtCa7x30c1B7t25nfncdAeOcWtd94cEOCRbAMPukiwQRQPysGrdq0%2B3cvOsETjnBhY3g00VG&X-Amz-Signature=9b95c0ee0b7a537a9af59b05f31478901b9c56ac67dd2c9970f14e1591fd9649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZMBWFU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCa4ulKB8jlOtb2HdYTl23Sjyfi5x%2FUAF%2FokH8ze3yAtwIhANE1Aef93K2mBARp6N%2BVhl1ZXmpqA0P9MkQC%2Fr2tAPu1Kv8DCDcQABoMNjM3NDIzMTgzODA1IgySOs1wRlh5WW2NSB0q3APX4NDN%2FM2YbIpUTIPE3W5VmGRG1Xvskna8OiiIG%2FSyafdDnwAepy9KzarqFJ32EvoLz067tj1%2BnDltfxGSz%2BcD7TO1iPP2DwJc%2BsX2XWKFeSTFyZjb6XwLG7knm8zrWwKLSkkhP3ryCxvF1qMny%2B9kRBweWCvFywSGb6U%2B7g7DyPEjZktlr11WYjq5KBfWX0JUrLX%2Bd53iVTD8HKt710UlO6TjuRhgMO8WoYLjCtde16whMzIhhj4acha8SGz8MD98jQ79c6FFxjHv%2Bb%2FXk%2F5tbHlHQLm778zmab2Y%2FagQHNhKNNqkrxeo0ogRu749dMbh3y29BNLZm8bwQh53H2vAzqqoZXLasEkBTmlVOr%2F5Gg8vE6t%2F5ZfBp%2FNDse9dh4u8rHU52VPqbX5bCdhyt5DEO6LON8InBy4nXR0ikR0gV52E8rdlLV5b07YkNODxWfCYua%2BjT3hsP2yYDQBy2sQRitejPJxD%2BATGo1IsxQu3gKZ6wepDT%2BGEkBDdeq4X6x4COh5POcpR8FFbAoFhNDgMuJNWS48h2EXfBOLQbCkOvI2DYDv7R548Xk3a6h%2F%2FcZJcZBmQFbOcjgPhBOuLvS5oL%2FIQD3ZgWPw3i%2FcHoo9k5tJ0kQ5OCBzSYX0XXDCm99XDBjqkAZru2AApBG8Ovc9KKzk4nVmXDYQtsjjChxwbYjJdWWXr5nc8MB8%2BIPt0iL38C2mKDeKxkf0gnGJdu2LJ0%2Blx%2BgkLqPf%2BzhXJ2Q8gVfhp86tcyJ0uaT3rZzkD5aF3H8pOyg20ysax9IVyjlk5F4T1%2BtCa7x30c1B7t25nfncdAeOcWtd94cEOCRbAMPukiwQRQPysGrdq0%2B3cvOsETjnBhY3g00VG&X-Amz-Signature=75d6383cef55998de7b459bf2ac65aaf77fd1114549f940ed161fedf793e1a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZMBWFU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCa4ulKB8jlOtb2HdYTl23Sjyfi5x%2FUAF%2FokH8ze3yAtwIhANE1Aef93K2mBARp6N%2BVhl1ZXmpqA0P9MkQC%2Fr2tAPu1Kv8DCDcQABoMNjM3NDIzMTgzODA1IgySOs1wRlh5WW2NSB0q3APX4NDN%2FM2YbIpUTIPE3W5VmGRG1Xvskna8OiiIG%2FSyafdDnwAepy9KzarqFJ32EvoLz067tj1%2BnDltfxGSz%2BcD7TO1iPP2DwJc%2BsX2XWKFeSTFyZjb6XwLG7knm8zrWwKLSkkhP3ryCxvF1qMny%2B9kRBweWCvFywSGb6U%2B7g7DyPEjZktlr11WYjq5KBfWX0JUrLX%2Bd53iVTD8HKt710UlO6TjuRhgMO8WoYLjCtde16whMzIhhj4acha8SGz8MD98jQ79c6FFxjHv%2Bb%2FXk%2F5tbHlHQLm778zmab2Y%2FagQHNhKNNqkrxeo0ogRu749dMbh3y29BNLZm8bwQh53H2vAzqqoZXLasEkBTmlVOr%2F5Gg8vE6t%2F5ZfBp%2FNDse9dh4u8rHU52VPqbX5bCdhyt5DEO6LON8InBy4nXR0ikR0gV52E8rdlLV5b07YkNODxWfCYua%2BjT3hsP2yYDQBy2sQRitejPJxD%2BATGo1IsxQu3gKZ6wepDT%2BGEkBDdeq4X6x4COh5POcpR8FFbAoFhNDgMuJNWS48h2EXfBOLQbCkOvI2DYDv7R548Xk3a6h%2F%2FcZJcZBmQFbOcjgPhBOuLvS5oL%2FIQD3ZgWPw3i%2FcHoo9k5tJ0kQ5OCBzSYX0XXDCm99XDBjqkAZru2AApBG8Ovc9KKzk4nVmXDYQtsjjChxwbYjJdWWXr5nc8MB8%2BIPt0iL38C2mKDeKxkf0gnGJdu2LJ0%2Blx%2BgkLqPf%2BzhXJ2Q8gVfhp86tcyJ0uaT3rZzkD5aF3H8pOyg20ysax9IVyjlk5F4T1%2BtCa7x30c1B7t25nfncdAeOcWtd94cEOCRbAMPukiwQRQPysGrdq0%2B3cvOsETjnBhY3g00VG&X-Amz-Signature=abe26f3d621df68636553ce9deb029e682f2493e937a7a2004d3003e662c6e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

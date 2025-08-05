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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARYER4Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCJhTPQlMuANoG0yRwUogDZjKqXfFL1PkO%2F0R2AX6WMbwIgexGHzu6rJe%2FD9i2lcC7YgwFyGltSWAc8jMfKvLQ6n6Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPvqkAKWxRtYqYuEjircA0V15FXhk9kKKMobn1D0J1LxUPjXRN7NuQmnscOTZ1xtdgY2zwY4PX6MBrbW7KpTn1ng5SJqjKqTOGEP2AsRWAGwKhsNlVNB33g%2BurbDqgHp2QSuAphqiK6ZQ40p5FMPvIdhZUYtpOURx00G2LHkLFJG3EivQmjxHAv6x5oAa8LOOXD0SNUzBEahJLUvrj8Jo%2Be8Xl3xTKQaEArXiOtrvDTJV%2FFILb0h49xC7iZ4k6fNUD4gCMoPwEjZvCSu2wbIsKKFKrAcpoOnkk%2BG%2FCp9mfQ0r1WVY7vxjlqU2pHsDfbO7SVuRn%2BNGI5XQyz7S3R8yq1%2FQtXIzpRkFYWvD6valGuc%2BK9a0hmjMjhWrNdXG3A0CtZJBDbnO12zO5XZ5w9FUPayP1%2B31734jccQ9xzRqRuAyXAPKcVPD9vJLyu9qAQHSpq2UZ7AQzAqoFoi%2FyIVfMuy1rvXk9K4G1mhlM86NITWMSNgK4CnkA4lx5cC0f2K8rfJ2jGL0bYuC7jJR8AD6JmAaENl62Q0P3iRgllGTsMYCuK6VgkkpiC7ZaW3r85PQ3933h2Q6rzIIWyOh2%2FRN7Qi46SQSLKcZBSs%2Fw1OgM1GZCbJO6j7miCkq11nB6j0CdE1SHkYXSJkzBenMM7hycQGOqUBaxOsmUf%2FUhD1kZrvovr5TON7USmcHqbQClIA8EKRHT47BesViFByFfx5IJC9zTNb5M%2BmMmtood%2FwHwu70k%2Bp2%2BL%2B7IrCplCsXJTLu5fUlo%2FZAs9XXmafetsZ7QohiDybV1D3lDJ%2FLcEdUWhnJZZ1FZVCog54Uf6qrnyfbXt5y7qB2jJGMKI9L1ROrX7lf0zyq%2FaELfCxmsf%2BC4rDnhADqDQZqtis&X-Amz-Signature=f385164303c1fb2fb0db4a742043b881a852e7d024423c018768b9a2d9e5ac4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARYER4Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCJhTPQlMuANoG0yRwUogDZjKqXfFL1PkO%2F0R2AX6WMbwIgexGHzu6rJe%2FD9i2lcC7YgwFyGltSWAc8jMfKvLQ6n6Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPvqkAKWxRtYqYuEjircA0V15FXhk9kKKMobn1D0J1LxUPjXRN7NuQmnscOTZ1xtdgY2zwY4PX6MBrbW7KpTn1ng5SJqjKqTOGEP2AsRWAGwKhsNlVNB33g%2BurbDqgHp2QSuAphqiK6ZQ40p5FMPvIdhZUYtpOURx00G2LHkLFJG3EivQmjxHAv6x5oAa8LOOXD0SNUzBEahJLUvrj8Jo%2Be8Xl3xTKQaEArXiOtrvDTJV%2FFILb0h49xC7iZ4k6fNUD4gCMoPwEjZvCSu2wbIsKKFKrAcpoOnkk%2BG%2FCp9mfQ0r1WVY7vxjlqU2pHsDfbO7SVuRn%2BNGI5XQyz7S3R8yq1%2FQtXIzpRkFYWvD6valGuc%2BK9a0hmjMjhWrNdXG3A0CtZJBDbnO12zO5XZ5w9FUPayP1%2B31734jccQ9xzRqRuAyXAPKcVPD9vJLyu9qAQHSpq2UZ7AQzAqoFoi%2FyIVfMuy1rvXk9K4G1mhlM86NITWMSNgK4CnkA4lx5cC0f2K8rfJ2jGL0bYuC7jJR8AD6JmAaENl62Q0P3iRgllGTsMYCuK6VgkkpiC7ZaW3r85PQ3933h2Q6rzIIWyOh2%2FRN7Qi46SQSLKcZBSs%2Fw1OgM1GZCbJO6j7miCkq11nB6j0CdE1SHkYXSJkzBenMM7hycQGOqUBaxOsmUf%2FUhD1kZrvovr5TON7USmcHqbQClIA8EKRHT47BesViFByFfx5IJC9zTNb5M%2BmMmtood%2FwHwu70k%2Bp2%2BL%2B7IrCplCsXJTLu5fUlo%2FZAs9XXmafetsZ7QohiDybV1D3lDJ%2FLcEdUWhnJZZ1FZVCog54Uf6qrnyfbXt5y7qB2jJGMKI9L1ROrX7lf0zyq%2FaELfCxmsf%2BC4rDnhADqDQZqtis&X-Amz-Signature=7dded7041572b77177a2b21f9ba449a39058dd813133a8a8b628f28f03190390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARYER4Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCJhTPQlMuANoG0yRwUogDZjKqXfFL1PkO%2F0R2AX6WMbwIgexGHzu6rJe%2FD9i2lcC7YgwFyGltSWAc8jMfKvLQ6n6Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPvqkAKWxRtYqYuEjircA0V15FXhk9kKKMobn1D0J1LxUPjXRN7NuQmnscOTZ1xtdgY2zwY4PX6MBrbW7KpTn1ng5SJqjKqTOGEP2AsRWAGwKhsNlVNB33g%2BurbDqgHp2QSuAphqiK6ZQ40p5FMPvIdhZUYtpOURx00G2LHkLFJG3EivQmjxHAv6x5oAa8LOOXD0SNUzBEahJLUvrj8Jo%2Be8Xl3xTKQaEArXiOtrvDTJV%2FFILb0h49xC7iZ4k6fNUD4gCMoPwEjZvCSu2wbIsKKFKrAcpoOnkk%2BG%2FCp9mfQ0r1WVY7vxjlqU2pHsDfbO7SVuRn%2BNGI5XQyz7S3R8yq1%2FQtXIzpRkFYWvD6valGuc%2BK9a0hmjMjhWrNdXG3A0CtZJBDbnO12zO5XZ5w9FUPayP1%2B31734jccQ9xzRqRuAyXAPKcVPD9vJLyu9qAQHSpq2UZ7AQzAqoFoi%2FyIVfMuy1rvXk9K4G1mhlM86NITWMSNgK4CnkA4lx5cC0f2K8rfJ2jGL0bYuC7jJR8AD6JmAaENl62Q0P3iRgllGTsMYCuK6VgkkpiC7ZaW3r85PQ3933h2Q6rzIIWyOh2%2FRN7Qi46SQSLKcZBSs%2Fw1OgM1GZCbJO6j7miCkq11nB6j0CdE1SHkYXSJkzBenMM7hycQGOqUBaxOsmUf%2FUhD1kZrvovr5TON7USmcHqbQClIA8EKRHT47BesViFByFfx5IJC9zTNb5M%2BmMmtood%2FwHwu70k%2Bp2%2BL%2B7IrCplCsXJTLu5fUlo%2FZAs9XXmafetsZ7QohiDybV1D3lDJ%2FLcEdUWhnJZZ1FZVCog54Uf6qrnyfbXt5y7qB2jJGMKI9L1ROrX7lf0zyq%2FaELfCxmsf%2BC4rDnhADqDQZqtis&X-Amz-Signature=2607ecc9712e969c2d9bf66b9778b4238a47f862b6e95bfd9ac23e41478b44ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARYER4Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCJhTPQlMuANoG0yRwUogDZjKqXfFL1PkO%2F0R2AX6WMbwIgexGHzu6rJe%2FD9i2lcC7YgwFyGltSWAc8jMfKvLQ6n6Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPvqkAKWxRtYqYuEjircA0V15FXhk9kKKMobn1D0J1LxUPjXRN7NuQmnscOTZ1xtdgY2zwY4PX6MBrbW7KpTn1ng5SJqjKqTOGEP2AsRWAGwKhsNlVNB33g%2BurbDqgHp2QSuAphqiK6ZQ40p5FMPvIdhZUYtpOURx00G2LHkLFJG3EivQmjxHAv6x5oAa8LOOXD0SNUzBEahJLUvrj8Jo%2Be8Xl3xTKQaEArXiOtrvDTJV%2FFILb0h49xC7iZ4k6fNUD4gCMoPwEjZvCSu2wbIsKKFKrAcpoOnkk%2BG%2FCp9mfQ0r1WVY7vxjlqU2pHsDfbO7SVuRn%2BNGI5XQyz7S3R8yq1%2FQtXIzpRkFYWvD6valGuc%2BK9a0hmjMjhWrNdXG3A0CtZJBDbnO12zO5XZ5w9FUPayP1%2B31734jccQ9xzRqRuAyXAPKcVPD9vJLyu9qAQHSpq2UZ7AQzAqoFoi%2FyIVfMuy1rvXk9K4G1mhlM86NITWMSNgK4CnkA4lx5cC0f2K8rfJ2jGL0bYuC7jJR8AD6JmAaENl62Q0P3iRgllGTsMYCuK6VgkkpiC7ZaW3r85PQ3933h2Q6rzIIWyOh2%2FRN7Qi46SQSLKcZBSs%2Fw1OgM1GZCbJO6j7miCkq11nB6j0CdE1SHkYXSJkzBenMM7hycQGOqUBaxOsmUf%2FUhD1kZrvovr5TON7USmcHqbQClIA8EKRHT47BesViFByFfx5IJC9zTNb5M%2BmMmtood%2FwHwu70k%2Bp2%2BL%2B7IrCplCsXJTLu5fUlo%2FZAs9XXmafetsZ7QohiDybV1D3lDJ%2FLcEdUWhnJZZ1FZVCog54Uf6qrnyfbXt5y7qB2jJGMKI9L1ROrX7lf0zyq%2FaELfCxmsf%2BC4rDnhADqDQZqtis&X-Amz-Signature=41444b29c4f20ff0e4d96ddd8a4b1107cd25c66a91bd41ac3026afedfed5719d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARYER4Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCJhTPQlMuANoG0yRwUogDZjKqXfFL1PkO%2F0R2AX6WMbwIgexGHzu6rJe%2FD9i2lcC7YgwFyGltSWAc8jMfKvLQ6n6Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPvqkAKWxRtYqYuEjircA0V15FXhk9kKKMobn1D0J1LxUPjXRN7NuQmnscOTZ1xtdgY2zwY4PX6MBrbW7KpTn1ng5SJqjKqTOGEP2AsRWAGwKhsNlVNB33g%2BurbDqgHp2QSuAphqiK6ZQ40p5FMPvIdhZUYtpOURx00G2LHkLFJG3EivQmjxHAv6x5oAa8LOOXD0SNUzBEahJLUvrj8Jo%2Be8Xl3xTKQaEArXiOtrvDTJV%2FFILb0h49xC7iZ4k6fNUD4gCMoPwEjZvCSu2wbIsKKFKrAcpoOnkk%2BG%2FCp9mfQ0r1WVY7vxjlqU2pHsDfbO7SVuRn%2BNGI5XQyz7S3R8yq1%2FQtXIzpRkFYWvD6valGuc%2BK9a0hmjMjhWrNdXG3A0CtZJBDbnO12zO5XZ5w9FUPayP1%2B31734jccQ9xzRqRuAyXAPKcVPD9vJLyu9qAQHSpq2UZ7AQzAqoFoi%2FyIVfMuy1rvXk9K4G1mhlM86NITWMSNgK4CnkA4lx5cC0f2K8rfJ2jGL0bYuC7jJR8AD6JmAaENl62Q0P3iRgllGTsMYCuK6VgkkpiC7ZaW3r85PQ3933h2Q6rzIIWyOh2%2FRN7Qi46SQSLKcZBSs%2Fw1OgM1GZCbJO6j7miCkq11nB6j0CdE1SHkYXSJkzBenMM7hycQGOqUBaxOsmUf%2FUhD1kZrvovr5TON7USmcHqbQClIA8EKRHT47BesViFByFfx5IJC9zTNb5M%2BmMmtood%2FwHwu70k%2Bp2%2BL%2B7IrCplCsXJTLu5fUlo%2FZAs9XXmafetsZ7QohiDybV1D3lDJ%2FLcEdUWhnJZZ1FZVCog54Uf6qrnyfbXt5y7qB2jJGMKI9L1ROrX7lf0zyq%2FaELfCxmsf%2BC4rDnhADqDQZqtis&X-Amz-Signature=b88152fc5602ce7e0926ebc75f5c319e65e0bf35427b3dad4627948f919bfae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARYER4Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCJhTPQlMuANoG0yRwUogDZjKqXfFL1PkO%2F0R2AX6WMbwIgexGHzu6rJe%2FD9i2lcC7YgwFyGltSWAc8jMfKvLQ6n6Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPvqkAKWxRtYqYuEjircA0V15FXhk9kKKMobn1D0J1LxUPjXRN7NuQmnscOTZ1xtdgY2zwY4PX6MBrbW7KpTn1ng5SJqjKqTOGEP2AsRWAGwKhsNlVNB33g%2BurbDqgHp2QSuAphqiK6ZQ40p5FMPvIdhZUYtpOURx00G2LHkLFJG3EivQmjxHAv6x5oAa8LOOXD0SNUzBEahJLUvrj8Jo%2Be8Xl3xTKQaEArXiOtrvDTJV%2FFILb0h49xC7iZ4k6fNUD4gCMoPwEjZvCSu2wbIsKKFKrAcpoOnkk%2BG%2FCp9mfQ0r1WVY7vxjlqU2pHsDfbO7SVuRn%2BNGI5XQyz7S3R8yq1%2FQtXIzpRkFYWvD6valGuc%2BK9a0hmjMjhWrNdXG3A0CtZJBDbnO12zO5XZ5w9FUPayP1%2B31734jccQ9xzRqRuAyXAPKcVPD9vJLyu9qAQHSpq2UZ7AQzAqoFoi%2FyIVfMuy1rvXk9K4G1mhlM86NITWMSNgK4CnkA4lx5cC0f2K8rfJ2jGL0bYuC7jJR8AD6JmAaENl62Q0P3iRgllGTsMYCuK6VgkkpiC7ZaW3r85PQ3933h2Q6rzIIWyOh2%2FRN7Qi46SQSLKcZBSs%2Fw1OgM1GZCbJO6j7miCkq11nB6j0CdE1SHkYXSJkzBenMM7hycQGOqUBaxOsmUf%2FUhD1kZrvovr5TON7USmcHqbQClIA8EKRHT47BesViFByFfx5IJC9zTNb5M%2BmMmtood%2FwHwu70k%2Bp2%2BL%2B7IrCplCsXJTLu5fUlo%2FZAs9XXmafetsZ7QohiDybV1D3lDJ%2FLcEdUWhnJZZ1FZVCog54Uf6qrnyfbXt5y7qB2jJGMKI9L1ROrX7lf0zyq%2FaELfCxmsf%2BC4rDnhADqDQZqtis&X-Amz-Signature=c13ecee489cebc59b281734e640a90fa79bf5ffd30605ac33528aea9694157d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARYER4Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCJhTPQlMuANoG0yRwUogDZjKqXfFL1PkO%2F0R2AX6WMbwIgexGHzu6rJe%2FD9i2lcC7YgwFyGltSWAc8jMfKvLQ6n6Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPvqkAKWxRtYqYuEjircA0V15FXhk9kKKMobn1D0J1LxUPjXRN7NuQmnscOTZ1xtdgY2zwY4PX6MBrbW7KpTn1ng5SJqjKqTOGEP2AsRWAGwKhsNlVNB33g%2BurbDqgHp2QSuAphqiK6ZQ40p5FMPvIdhZUYtpOURx00G2LHkLFJG3EivQmjxHAv6x5oAa8LOOXD0SNUzBEahJLUvrj8Jo%2Be8Xl3xTKQaEArXiOtrvDTJV%2FFILb0h49xC7iZ4k6fNUD4gCMoPwEjZvCSu2wbIsKKFKrAcpoOnkk%2BG%2FCp9mfQ0r1WVY7vxjlqU2pHsDfbO7SVuRn%2BNGI5XQyz7S3R8yq1%2FQtXIzpRkFYWvD6valGuc%2BK9a0hmjMjhWrNdXG3A0CtZJBDbnO12zO5XZ5w9FUPayP1%2B31734jccQ9xzRqRuAyXAPKcVPD9vJLyu9qAQHSpq2UZ7AQzAqoFoi%2FyIVfMuy1rvXk9K4G1mhlM86NITWMSNgK4CnkA4lx5cC0f2K8rfJ2jGL0bYuC7jJR8AD6JmAaENl62Q0P3iRgllGTsMYCuK6VgkkpiC7ZaW3r85PQ3933h2Q6rzIIWyOh2%2FRN7Qi46SQSLKcZBSs%2Fw1OgM1GZCbJO6j7miCkq11nB6j0CdE1SHkYXSJkzBenMM7hycQGOqUBaxOsmUf%2FUhD1kZrvovr5TON7USmcHqbQClIA8EKRHT47BesViFByFfx5IJC9zTNb5M%2BmMmtood%2FwHwu70k%2Bp2%2BL%2B7IrCplCsXJTLu5fUlo%2FZAs9XXmafetsZ7QohiDybV1D3lDJ%2FLcEdUWhnJZZ1FZVCog54Uf6qrnyfbXt5y7qB2jJGMKI9L1ROrX7lf0zyq%2FaELfCxmsf%2BC4rDnhADqDQZqtis&X-Amz-Signature=f040efaeb568f4392a2856fb16f2075ffd148760cf2497d14ebe756df4e6355d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARYER4Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCJhTPQlMuANoG0yRwUogDZjKqXfFL1PkO%2F0R2AX6WMbwIgexGHzu6rJe%2FD9i2lcC7YgwFyGltSWAc8jMfKvLQ6n6Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPvqkAKWxRtYqYuEjircA0V15FXhk9kKKMobn1D0J1LxUPjXRN7NuQmnscOTZ1xtdgY2zwY4PX6MBrbW7KpTn1ng5SJqjKqTOGEP2AsRWAGwKhsNlVNB33g%2BurbDqgHp2QSuAphqiK6ZQ40p5FMPvIdhZUYtpOURx00G2LHkLFJG3EivQmjxHAv6x5oAa8LOOXD0SNUzBEahJLUvrj8Jo%2Be8Xl3xTKQaEArXiOtrvDTJV%2FFILb0h49xC7iZ4k6fNUD4gCMoPwEjZvCSu2wbIsKKFKrAcpoOnkk%2BG%2FCp9mfQ0r1WVY7vxjlqU2pHsDfbO7SVuRn%2BNGI5XQyz7S3R8yq1%2FQtXIzpRkFYWvD6valGuc%2BK9a0hmjMjhWrNdXG3A0CtZJBDbnO12zO5XZ5w9FUPayP1%2B31734jccQ9xzRqRuAyXAPKcVPD9vJLyu9qAQHSpq2UZ7AQzAqoFoi%2FyIVfMuy1rvXk9K4G1mhlM86NITWMSNgK4CnkA4lx5cC0f2K8rfJ2jGL0bYuC7jJR8AD6JmAaENl62Q0P3iRgllGTsMYCuK6VgkkpiC7ZaW3r85PQ3933h2Q6rzIIWyOh2%2FRN7Qi46SQSLKcZBSs%2Fw1OgM1GZCbJO6j7miCkq11nB6j0CdE1SHkYXSJkzBenMM7hycQGOqUBaxOsmUf%2FUhD1kZrvovr5TON7USmcHqbQClIA8EKRHT47BesViFByFfx5IJC9zTNb5M%2BmMmtood%2FwHwu70k%2Bp2%2BL%2B7IrCplCsXJTLu5fUlo%2FZAs9XXmafetsZ7QohiDybV1D3lDJ%2FLcEdUWhnJZZ1FZVCog54Uf6qrnyfbXt5y7qB2jJGMKI9L1ROrX7lf0zyq%2FaELfCxmsf%2BC4rDnhADqDQZqtis&X-Amz-Signature=d961ed0cce843c93e59c885ba8096319cb7eed9c12e9dd48451ee45cb66c8d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

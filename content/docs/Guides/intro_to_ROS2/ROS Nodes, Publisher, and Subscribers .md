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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY2CG2H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCQV0oyI1YKU%2BpUP1ZIFUBWVxlfRKwD9cf8Wee5edxaewIhAMGcvUlHfp5aPfW1XmQuWuTQfUOBFC3RizhxsCHisOrDKv8DCGIQABoMNjM3NDIzMTgzODA1Igz0JirYBcmC1vy7gHkq3AOk1QQBlnoD8tnPfEhCIHP%2BKf0kqEvCeS6pb8Wj0NfaXA3N%2BwLtth3z9Vs1vJaPK35Tv%2BRm0%2Fstwnd%2BST33gI3UPifLvjmv3mg9R7ypZa5ligA5XAVlLNVppcB3v5nON91vhovjiFePxEGk%2BN%2BuTUC0MoV4Y%2FXIiLnOaq65Z08bfOYW%2BkWfv%2B0%2FgQaBoAGJs2g5tJ1X6yYZwVboH6dMJ61j2L5qSQa7QJXEZ%2BBIrt6XuV%2FeYwv07vDaFNRuFnh3pNFCm6N0wXbjcnTFMEOcsRtlFPfYSLF0B%2B2sbu9h9laOU%2FLKOn2F%2Bw67hNqZCpypHR%2FH2cVW19wnHwJo0AlgUKSQ4sDbdx2q%2BvE68dbOAkE2VXFyko3gf%2FOlVrUK7hwc1PWxdhrz%2FNHULYgSxRAascgKE1Hb3S%2B6vmLj0zDcIwYMnm%2FY%2FunS7SH6nS9C37K9ltduenoGqN5vSE6NbnyttLIK%2BgLSKgbQN3ssJIGrE8bXZm74zEMrz7gEYbIUa9v1SSHq1JryiyoJCft9pWqLibpxk762WtGjkfWY%2Ber1j81tfJWeJYNuhVa7EziozPFHAXYHQoIQK2zlGUgeilnxPCVsppbN6el7DSxtcuaZPq60YEhu3Gtqtet%2FIZ%2BwezCE2%2F3EBjqkAVvZK7G5%2FlrmPa0LyQ5%2BEnqo%2FVqJ17Y7Y7vj8%2BvcsG%2BYty42qmhV9qPdhrLqrRuPvUS%2F0bM%2FoUqUd2xls0R47QpjpsJuUa%2B0JyKUDmX7j2LUfEta6HbYa%2FitydlzLpGiGbqsBGqcQnRZ4har9bM%2BAR7qr1YpQiCiUtYKzm9KxIZ5YtrqAOo%2FA%2BDQrUpVBF7%2BeQiggVsdgEiVBcKl%2BcWTVzZYsgYA&X-Amz-Signature=0addfb10ccf50fbcf6941d4272f4146beb4d5b69b4ecf4e5e5132d0f9069964f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY2CG2H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCQV0oyI1YKU%2BpUP1ZIFUBWVxlfRKwD9cf8Wee5edxaewIhAMGcvUlHfp5aPfW1XmQuWuTQfUOBFC3RizhxsCHisOrDKv8DCGIQABoMNjM3NDIzMTgzODA1Igz0JirYBcmC1vy7gHkq3AOk1QQBlnoD8tnPfEhCIHP%2BKf0kqEvCeS6pb8Wj0NfaXA3N%2BwLtth3z9Vs1vJaPK35Tv%2BRm0%2Fstwnd%2BST33gI3UPifLvjmv3mg9R7ypZa5ligA5XAVlLNVppcB3v5nON91vhovjiFePxEGk%2BN%2BuTUC0MoV4Y%2FXIiLnOaq65Z08bfOYW%2BkWfv%2B0%2FgQaBoAGJs2g5tJ1X6yYZwVboH6dMJ61j2L5qSQa7QJXEZ%2BBIrt6XuV%2FeYwv07vDaFNRuFnh3pNFCm6N0wXbjcnTFMEOcsRtlFPfYSLF0B%2B2sbu9h9laOU%2FLKOn2F%2Bw67hNqZCpypHR%2FH2cVW19wnHwJo0AlgUKSQ4sDbdx2q%2BvE68dbOAkE2VXFyko3gf%2FOlVrUK7hwc1PWxdhrz%2FNHULYgSxRAascgKE1Hb3S%2B6vmLj0zDcIwYMnm%2FY%2FunS7SH6nS9C37K9ltduenoGqN5vSE6NbnyttLIK%2BgLSKgbQN3ssJIGrE8bXZm74zEMrz7gEYbIUa9v1SSHq1JryiyoJCft9pWqLibpxk762WtGjkfWY%2Ber1j81tfJWeJYNuhVa7EziozPFHAXYHQoIQK2zlGUgeilnxPCVsppbN6el7DSxtcuaZPq60YEhu3Gtqtet%2FIZ%2BwezCE2%2F3EBjqkAVvZK7G5%2FlrmPa0LyQ5%2BEnqo%2FVqJ17Y7Y7vj8%2BvcsG%2BYty42qmhV9qPdhrLqrRuPvUS%2F0bM%2FoUqUd2xls0R47QpjpsJuUa%2B0JyKUDmX7j2LUfEta6HbYa%2FitydlzLpGiGbqsBGqcQnRZ4har9bM%2BAR7qr1YpQiCiUtYKzm9KxIZ5YtrqAOo%2FA%2BDQrUpVBF7%2BeQiggVsdgEiVBcKl%2BcWTVzZYsgYA&X-Amz-Signature=4877e8b4d9f9e270b65b11b9d5cf8188baa65d97c47a9baf274694ca968c300c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY2CG2H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCQV0oyI1YKU%2BpUP1ZIFUBWVxlfRKwD9cf8Wee5edxaewIhAMGcvUlHfp5aPfW1XmQuWuTQfUOBFC3RizhxsCHisOrDKv8DCGIQABoMNjM3NDIzMTgzODA1Igz0JirYBcmC1vy7gHkq3AOk1QQBlnoD8tnPfEhCIHP%2BKf0kqEvCeS6pb8Wj0NfaXA3N%2BwLtth3z9Vs1vJaPK35Tv%2BRm0%2Fstwnd%2BST33gI3UPifLvjmv3mg9R7ypZa5ligA5XAVlLNVppcB3v5nON91vhovjiFePxEGk%2BN%2BuTUC0MoV4Y%2FXIiLnOaq65Z08bfOYW%2BkWfv%2B0%2FgQaBoAGJs2g5tJ1X6yYZwVboH6dMJ61j2L5qSQa7QJXEZ%2BBIrt6XuV%2FeYwv07vDaFNRuFnh3pNFCm6N0wXbjcnTFMEOcsRtlFPfYSLF0B%2B2sbu9h9laOU%2FLKOn2F%2Bw67hNqZCpypHR%2FH2cVW19wnHwJo0AlgUKSQ4sDbdx2q%2BvE68dbOAkE2VXFyko3gf%2FOlVrUK7hwc1PWxdhrz%2FNHULYgSxRAascgKE1Hb3S%2B6vmLj0zDcIwYMnm%2FY%2FunS7SH6nS9C37K9ltduenoGqN5vSE6NbnyttLIK%2BgLSKgbQN3ssJIGrE8bXZm74zEMrz7gEYbIUa9v1SSHq1JryiyoJCft9pWqLibpxk762WtGjkfWY%2Ber1j81tfJWeJYNuhVa7EziozPFHAXYHQoIQK2zlGUgeilnxPCVsppbN6el7DSxtcuaZPq60YEhu3Gtqtet%2FIZ%2BwezCE2%2F3EBjqkAVvZK7G5%2FlrmPa0LyQ5%2BEnqo%2FVqJ17Y7Y7vj8%2BvcsG%2BYty42qmhV9qPdhrLqrRuPvUS%2F0bM%2FoUqUd2xls0R47QpjpsJuUa%2B0JyKUDmX7j2LUfEta6HbYa%2FitydlzLpGiGbqsBGqcQnRZ4har9bM%2BAR7qr1YpQiCiUtYKzm9KxIZ5YtrqAOo%2FA%2BDQrUpVBF7%2BeQiggVsdgEiVBcKl%2BcWTVzZYsgYA&X-Amz-Signature=54b07e8dec8ab0658ebfe6f1aaf681dc15eadad9339064bed98f2285580dd4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY2CG2H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCQV0oyI1YKU%2BpUP1ZIFUBWVxlfRKwD9cf8Wee5edxaewIhAMGcvUlHfp5aPfW1XmQuWuTQfUOBFC3RizhxsCHisOrDKv8DCGIQABoMNjM3NDIzMTgzODA1Igz0JirYBcmC1vy7gHkq3AOk1QQBlnoD8tnPfEhCIHP%2BKf0kqEvCeS6pb8Wj0NfaXA3N%2BwLtth3z9Vs1vJaPK35Tv%2BRm0%2Fstwnd%2BST33gI3UPifLvjmv3mg9R7ypZa5ligA5XAVlLNVppcB3v5nON91vhovjiFePxEGk%2BN%2BuTUC0MoV4Y%2FXIiLnOaq65Z08bfOYW%2BkWfv%2B0%2FgQaBoAGJs2g5tJ1X6yYZwVboH6dMJ61j2L5qSQa7QJXEZ%2BBIrt6XuV%2FeYwv07vDaFNRuFnh3pNFCm6N0wXbjcnTFMEOcsRtlFPfYSLF0B%2B2sbu9h9laOU%2FLKOn2F%2Bw67hNqZCpypHR%2FH2cVW19wnHwJo0AlgUKSQ4sDbdx2q%2BvE68dbOAkE2VXFyko3gf%2FOlVrUK7hwc1PWxdhrz%2FNHULYgSxRAascgKE1Hb3S%2B6vmLj0zDcIwYMnm%2FY%2FunS7SH6nS9C37K9ltduenoGqN5vSE6NbnyttLIK%2BgLSKgbQN3ssJIGrE8bXZm74zEMrz7gEYbIUa9v1SSHq1JryiyoJCft9pWqLibpxk762WtGjkfWY%2Ber1j81tfJWeJYNuhVa7EziozPFHAXYHQoIQK2zlGUgeilnxPCVsppbN6el7DSxtcuaZPq60YEhu3Gtqtet%2FIZ%2BwezCE2%2F3EBjqkAVvZK7G5%2FlrmPa0LyQ5%2BEnqo%2FVqJ17Y7Y7vj8%2BvcsG%2BYty42qmhV9qPdhrLqrRuPvUS%2F0bM%2FoUqUd2xls0R47QpjpsJuUa%2B0JyKUDmX7j2LUfEta6HbYa%2FitydlzLpGiGbqsBGqcQnRZ4har9bM%2BAR7qr1YpQiCiUtYKzm9KxIZ5YtrqAOo%2FA%2BDQrUpVBF7%2BeQiggVsdgEiVBcKl%2BcWTVzZYsgYA&X-Amz-Signature=7a73cf648902a974f918f5e1ea8fb023a8b73c87685778f7baa68de2887dc2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY2CG2H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCQV0oyI1YKU%2BpUP1ZIFUBWVxlfRKwD9cf8Wee5edxaewIhAMGcvUlHfp5aPfW1XmQuWuTQfUOBFC3RizhxsCHisOrDKv8DCGIQABoMNjM3NDIzMTgzODA1Igz0JirYBcmC1vy7gHkq3AOk1QQBlnoD8tnPfEhCIHP%2BKf0kqEvCeS6pb8Wj0NfaXA3N%2BwLtth3z9Vs1vJaPK35Tv%2BRm0%2Fstwnd%2BST33gI3UPifLvjmv3mg9R7ypZa5ligA5XAVlLNVppcB3v5nON91vhovjiFePxEGk%2BN%2BuTUC0MoV4Y%2FXIiLnOaq65Z08bfOYW%2BkWfv%2B0%2FgQaBoAGJs2g5tJ1X6yYZwVboH6dMJ61j2L5qSQa7QJXEZ%2BBIrt6XuV%2FeYwv07vDaFNRuFnh3pNFCm6N0wXbjcnTFMEOcsRtlFPfYSLF0B%2B2sbu9h9laOU%2FLKOn2F%2Bw67hNqZCpypHR%2FH2cVW19wnHwJo0AlgUKSQ4sDbdx2q%2BvE68dbOAkE2VXFyko3gf%2FOlVrUK7hwc1PWxdhrz%2FNHULYgSxRAascgKE1Hb3S%2B6vmLj0zDcIwYMnm%2FY%2FunS7SH6nS9C37K9ltduenoGqN5vSE6NbnyttLIK%2BgLSKgbQN3ssJIGrE8bXZm74zEMrz7gEYbIUa9v1SSHq1JryiyoJCft9pWqLibpxk762WtGjkfWY%2Ber1j81tfJWeJYNuhVa7EziozPFHAXYHQoIQK2zlGUgeilnxPCVsppbN6el7DSxtcuaZPq60YEhu3Gtqtet%2FIZ%2BwezCE2%2F3EBjqkAVvZK7G5%2FlrmPa0LyQ5%2BEnqo%2FVqJ17Y7Y7vj8%2BvcsG%2BYty42qmhV9qPdhrLqrRuPvUS%2F0bM%2FoUqUd2xls0R47QpjpsJuUa%2B0JyKUDmX7j2LUfEta6HbYa%2FitydlzLpGiGbqsBGqcQnRZ4har9bM%2BAR7qr1YpQiCiUtYKzm9KxIZ5YtrqAOo%2FA%2BDQrUpVBF7%2BeQiggVsdgEiVBcKl%2BcWTVzZYsgYA&X-Amz-Signature=b8d55bfce13830440fcf76c424f98d82a3e11f09fba27f42dbd6fa07e97cc80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY2CG2H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCQV0oyI1YKU%2BpUP1ZIFUBWVxlfRKwD9cf8Wee5edxaewIhAMGcvUlHfp5aPfW1XmQuWuTQfUOBFC3RizhxsCHisOrDKv8DCGIQABoMNjM3NDIzMTgzODA1Igz0JirYBcmC1vy7gHkq3AOk1QQBlnoD8tnPfEhCIHP%2BKf0kqEvCeS6pb8Wj0NfaXA3N%2BwLtth3z9Vs1vJaPK35Tv%2BRm0%2Fstwnd%2BST33gI3UPifLvjmv3mg9R7ypZa5ligA5XAVlLNVppcB3v5nON91vhovjiFePxEGk%2BN%2BuTUC0MoV4Y%2FXIiLnOaq65Z08bfOYW%2BkWfv%2B0%2FgQaBoAGJs2g5tJ1X6yYZwVboH6dMJ61j2L5qSQa7QJXEZ%2BBIrt6XuV%2FeYwv07vDaFNRuFnh3pNFCm6N0wXbjcnTFMEOcsRtlFPfYSLF0B%2B2sbu9h9laOU%2FLKOn2F%2Bw67hNqZCpypHR%2FH2cVW19wnHwJo0AlgUKSQ4sDbdx2q%2BvE68dbOAkE2VXFyko3gf%2FOlVrUK7hwc1PWxdhrz%2FNHULYgSxRAascgKE1Hb3S%2B6vmLj0zDcIwYMnm%2FY%2FunS7SH6nS9C37K9ltduenoGqN5vSE6NbnyttLIK%2BgLSKgbQN3ssJIGrE8bXZm74zEMrz7gEYbIUa9v1SSHq1JryiyoJCft9pWqLibpxk762WtGjkfWY%2Ber1j81tfJWeJYNuhVa7EziozPFHAXYHQoIQK2zlGUgeilnxPCVsppbN6el7DSxtcuaZPq60YEhu3Gtqtet%2FIZ%2BwezCE2%2F3EBjqkAVvZK7G5%2FlrmPa0LyQ5%2BEnqo%2FVqJ17Y7Y7vj8%2BvcsG%2BYty42qmhV9qPdhrLqrRuPvUS%2F0bM%2FoUqUd2xls0R47QpjpsJuUa%2B0JyKUDmX7j2LUfEta6HbYa%2FitydlzLpGiGbqsBGqcQnRZ4har9bM%2BAR7qr1YpQiCiUtYKzm9KxIZ5YtrqAOo%2FA%2BDQrUpVBF7%2BeQiggVsdgEiVBcKl%2BcWTVzZYsgYA&X-Amz-Signature=00249e341a8ab9a36adb52af6c3214fd9d7cc78c0f235159a7e0d73cda21d441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY2CG2H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCQV0oyI1YKU%2BpUP1ZIFUBWVxlfRKwD9cf8Wee5edxaewIhAMGcvUlHfp5aPfW1XmQuWuTQfUOBFC3RizhxsCHisOrDKv8DCGIQABoMNjM3NDIzMTgzODA1Igz0JirYBcmC1vy7gHkq3AOk1QQBlnoD8tnPfEhCIHP%2BKf0kqEvCeS6pb8Wj0NfaXA3N%2BwLtth3z9Vs1vJaPK35Tv%2BRm0%2Fstwnd%2BST33gI3UPifLvjmv3mg9R7ypZa5ligA5XAVlLNVppcB3v5nON91vhovjiFePxEGk%2BN%2BuTUC0MoV4Y%2FXIiLnOaq65Z08bfOYW%2BkWfv%2B0%2FgQaBoAGJs2g5tJ1X6yYZwVboH6dMJ61j2L5qSQa7QJXEZ%2BBIrt6XuV%2FeYwv07vDaFNRuFnh3pNFCm6N0wXbjcnTFMEOcsRtlFPfYSLF0B%2B2sbu9h9laOU%2FLKOn2F%2Bw67hNqZCpypHR%2FH2cVW19wnHwJo0AlgUKSQ4sDbdx2q%2BvE68dbOAkE2VXFyko3gf%2FOlVrUK7hwc1PWxdhrz%2FNHULYgSxRAascgKE1Hb3S%2B6vmLj0zDcIwYMnm%2FY%2FunS7SH6nS9C37K9ltduenoGqN5vSE6NbnyttLIK%2BgLSKgbQN3ssJIGrE8bXZm74zEMrz7gEYbIUa9v1SSHq1JryiyoJCft9pWqLibpxk762WtGjkfWY%2Ber1j81tfJWeJYNuhVa7EziozPFHAXYHQoIQK2zlGUgeilnxPCVsppbN6el7DSxtcuaZPq60YEhu3Gtqtet%2FIZ%2BwezCE2%2F3EBjqkAVvZK7G5%2FlrmPa0LyQ5%2BEnqo%2FVqJ17Y7Y7vj8%2BvcsG%2BYty42qmhV9qPdhrLqrRuPvUS%2F0bM%2FoUqUd2xls0R47QpjpsJuUa%2B0JyKUDmX7j2LUfEta6HbYa%2FitydlzLpGiGbqsBGqcQnRZ4har9bM%2BAR7qr1YpQiCiUtYKzm9KxIZ5YtrqAOo%2FA%2BDQrUpVBF7%2BeQiggVsdgEiVBcKl%2BcWTVzZYsgYA&X-Amz-Signature=67f8b84162fa83a3555ebcaff24cf2c7029fcc47fdd8b2ece0f593e43a4be779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWY2CG2H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCQV0oyI1YKU%2BpUP1ZIFUBWVxlfRKwD9cf8Wee5edxaewIhAMGcvUlHfp5aPfW1XmQuWuTQfUOBFC3RizhxsCHisOrDKv8DCGIQABoMNjM3NDIzMTgzODA1Igz0JirYBcmC1vy7gHkq3AOk1QQBlnoD8tnPfEhCIHP%2BKf0kqEvCeS6pb8Wj0NfaXA3N%2BwLtth3z9Vs1vJaPK35Tv%2BRm0%2Fstwnd%2BST33gI3UPifLvjmv3mg9R7ypZa5ligA5XAVlLNVppcB3v5nON91vhovjiFePxEGk%2BN%2BuTUC0MoV4Y%2FXIiLnOaq65Z08bfOYW%2BkWfv%2B0%2FgQaBoAGJs2g5tJ1X6yYZwVboH6dMJ61j2L5qSQa7QJXEZ%2BBIrt6XuV%2FeYwv07vDaFNRuFnh3pNFCm6N0wXbjcnTFMEOcsRtlFPfYSLF0B%2B2sbu9h9laOU%2FLKOn2F%2Bw67hNqZCpypHR%2FH2cVW19wnHwJo0AlgUKSQ4sDbdx2q%2BvE68dbOAkE2VXFyko3gf%2FOlVrUK7hwc1PWxdhrz%2FNHULYgSxRAascgKE1Hb3S%2B6vmLj0zDcIwYMnm%2FY%2FunS7SH6nS9C37K9ltduenoGqN5vSE6NbnyttLIK%2BgLSKgbQN3ssJIGrE8bXZm74zEMrz7gEYbIUa9v1SSHq1JryiyoJCft9pWqLibpxk762WtGjkfWY%2Ber1j81tfJWeJYNuhVa7EziozPFHAXYHQoIQK2zlGUgeilnxPCVsppbN6el7DSxtcuaZPq60YEhu3Gtqtet%2FIZ%2BwezCE2%2F3EBjqkAVvZK7G5%2FlrmPa0LyQ5%2BEnqo%2FVqJ17Y7Y7vj8%2BvcsG%2BYty42qmhV9qPdhrLqrRuPvUS%2F0bM%2FoUqUd2xls0R47QpjpsJuUa%2B0JyKUDmX7j2LUfEta6HbYa%2FitydlzLpGiGbqsBGqcQnRZ4har9bM%2BAR7qr1YpQiCiUtYKzm9KxIZ5YtrqAOo%2FA%2BDQrUpVBF7%2BeQiggVsdgEiVBcKl%2BcWTVzZYsgYA&X-Amz-Signature=b4ff6e305499a4a28b995e7602e9665ee310ed50f987d53a057f0f3268ccd004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

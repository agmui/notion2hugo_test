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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVVU22E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCNz%2B6Ly9tLaeTN0xtuojU7yO%2Fy5UeJZf9r%2FR8yMrBeAiAeVPJRPUUADYA6ZE1HqvsIX%2BErICS0Q6gE1JUpKk9k3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDpeZfrIQfucQdIr2KtwDzIIFxncP7iqt3GMgVDTLURPYnMmrYA7WrdM0%2FwnhFaawJqDo30eTGCp1bJ9ezeHDlXzdHxQWUERNIFpIyqYeMG4XTFfU0SrvaqhiEoNYWi0DpnknSXO9UKAKx3IVP0GJzODJ7ydSO%2Bt%2F%2BXIPhfpJfkIxA90%2Fc7k37o8reN0qd2Nc483dL9QAJW4N4q0u9BSSDQ7u34ABNf2C7HaeXydnvNh14MQHL2mtmoqfHU0LQBoeHKXApTmoezG3ydhLra6E7LHlvWSXk%2BSlDu%2FXO6uCk0NF12uOtP4LbXRLsPFrHVLittiMwUOUu6%2BggeUCrobq4XuHpTAmlmY9x80FN%2FU9zSj30N%2Bl9wLDq7YB%2Fz8SsjXSvzeY49vn4U3A3Z6PuP9%2BEpdspOZ%2BwJGrH0SKJKWPfpuRSpn5kPeUN0PrnY%2BPH8skReKQOmv0x8%2Fcx1HPJARpYzOdJSTvXJqdS5oKlwecvndvhdXIoNr%2FxD%2FbzqEzVuLeWPkUkiG82TzAgdMq8C0jIZP7CxZkI7vFVNx%2B0NBHR4hSvVFd%2FzxIn7Hp1k9eV3jpZ7xUFQc%2BA19jXGK8xyF3pRhvkbjFwqXZOU%2FEb%2BSvGlWptM8vZqidx3ch85eiHBCdxAEG9zRYf4IfYHAw2J2%2BwAY6pgF3dcM10zO0%2BQNRcT07hmrcMAmafGGWYlKUF6P%2BcdiAcPSMkZ5I7TJac0KtmJeH68YaBobTA8MFRyo5%2BrlBaDo2BlVuGvpGM766uLY71lF3KOATmhS0A0XhXtGkqCRLUsdUiE2fNv%2Bb%2Fw5L3rnezXgCFcjBG%2BMJFjUD%2BoSqzwXzgopMFUF4HeiXfM3aU2lPP9ypv1ruD0f7d6IATAcWqOA2VQdi7TYQ&X-Amz-Signature=d07ca423e475e09582cd8533384998228ae71ce476f8e10edb058bbae5b6a1a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVVU22E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCNz%2B6Ly9tLaeTN0xtuojU7yO%2Fy5UeJZf9r%2FR8yMrBeAiAeVPJRPUUADYA6ZE1HqvsIX%2BErICS0Q6gE1JUpKk9k3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDpeZfrIQfucQdIr2KtwDzIIFxncP7iqt3GMgVDTLURPYnMmrYA7WrdM0%2FwnhFaawJqDo30eTGCp1bJ9ezeHDlXzdHxQWUERNIFpIyqYeMG4XTFfU0SrvaqhiEoNYWi0DpnknSXO9UKAKx3IVP0GJzODJ7ydSO%2Bt%2F%2BXIPhfpJfkIxA90%2Fc7k37o8reN0qd2Nc483dL9QAJW4N4q0u9BSSDQ7u34ABNf2C7HaeXydnvNh14MQHL2mtmoqfHU0LQBoeHKXApTmoezG3ydhLra6E7LHlvWSXk%2BSlDu%2FXO6uCk0NF12uOtP4LbXRLsPFrHVLittiMwUOUu6%2BggeUCrobq4XuHpTAmlmY9x80FN%2FU9zSj30N%2Bl9wLDq7YB%2Fz8SsjXSvzeY49vn4U3A3Z6PuP9%2BEpdspOZ%2BwJGrH0SKJKWPfpuRSpn5kPeUN0PrnY%2BPH8skReKQOmv0x8%2Fcx1HPJARpYzOdJSTvXJqdS5oKlwecvndvhdXIoNr%2FxD%2FbzqEzVuLeWPkUkiG82TzAgdMq8C0jIZP7CxZkI7vFVNx%2B0NBHR4hSvVFd%2FzxIn7Hp1k9eV3jpZ7xUFQc%2BA19jXGK8xyF3pRhvkbjFwqXZOU%2FEb%2BSvGlWptM8vZqidx3ch85eiHBCdxAEG9zRYf4IfYHAw2J2%2BwAY6pgF3dcM10zO0%2BQNRcT07hmrcMAmafGGWYlKUF6P%2BcdiAcPSMkZ5I7TJac0KtmJeH68YaBobTA8MFRyo5%2BrlBaDo2BlVuGvpGM766uLY71lF3KOATmhS0A0XhXtGkqCRLUsdUiE2fNv%2Bb%2Fw5L3rnezXgCFcjBG%2BMJFjUD%2BoSqzwXzgopMFUF4HeiXfM3aU2lPP9ypv1ruD0f7d6IATAcWqOA2VQdi7TYQ&X-Amz-Signature=4c0954179ce05a7bed47cf3428bb9f89744a0bfe714203728e726a9890a2f341&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVVU22E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCNz%2B6Ly9tLaeTN0xtuojU7yO%2Fy5UeJZf9r%2FR8yMrBeAiAeVPJRPUUADYA6ZE1HqvsIX%2BErICS0Q6gE1JUpKk9k3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDpeZfrIQfucQdIr2KtwDzIIFxncP7iqt3GMgVDTLURPYnMmrYA7WrdM0%2FwnhFaawJqDo30eTGCp1bJ9ezeHDlXzdHxQWUERNIFpIyqYeMG4XTFfU0SrvaqhiEoNYWi0DpnknSXO9UKAKx3IVP0GJzODJ7ydSO%2Bt%2F%2BXIPhfpJfkIxA90%2Fc7k37o8reN0qd2Nc483dL9QAJW4N4q0u9BSSDQ7u34ABNf2C7HaeXydnvNh14MQHL2mtmoqfHU0LQBoeHKXApTmoezG3ydhLra6E7LHlvWSXk%2BSlDu%2FXO6uCk0NF12uOtP4LbXRLsPFrHVLittiMwUOUu6%2BggeUCrobq4XuHpTAmlmY9x80FN%2FU9zSj30N%2Bl9wLDq7YB%2Fz8SsjXSvzeY49vn4U3A3Z6PuP9%2BEpdspOZ%2BwJGrH0SKJKWPfpuRSpn5kPeUN0PrnY%2BPH8skReKQOmv0x8%2Fcx1HPJARpYzOdJSTvXJqdS5oKlwecvndvhdXIoNr%2FxD%2FbzqEzVuLeWPkUkiG82TzAgdMq8C0jIZP7CxZkI7vFVNx%2B0NBHR4hSvVFd%2FzxIn7Hp1k9eV3jpZ7xUFQc%2BA19jXGK8xyF3pRhvkbjFwqXZOU%2FEb%2BSvGlWptM8vZqidx3ch85eiHBCdxAEG9zRYf4IfYHAw2J2%2BwAY6pgF3dcM10zO0%2BQNRcT07hmrcMAmafGGWYlKUF6P%2BcdiAcPSMkZ5I7TJac0KtmJeH68YaBobTA8MFRyo5%2BrlBaDo2BlVuGvpGM766uLY71lF3KOATmhS0A0XhXtGkqCRLUsdUiE2fNv%2Bb%2Fw5L3rnezXgCFcjBG%2BMJFjUD%2BoSqzwXzgopMFUF4HeiXfM3aU2lPP9ypv1ruD0f7d6IATAcWqOA2VQdi7TYQ&X-Amz-Signature=a37f4c45c507af2ffcdcec940b10ed658da572faeca4b66ee243d1b1658acc5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVVU22E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCNz%2B6Ly9tLaeTN0xtuojU7yO%2Fy5UeJZf9r%2FR8yMrBeAiAeVPJRPUUADYA6ZE1HqvsIX%2BErICS0Q6gE1JUpKk9k3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDpeZfrIQfucQdIr2KtwDzIIFxncP7iqt3GMgVDTLURPYnMmrYA7WrdM0%2FwnhFaawJqDo30eTGCp1bJ9ezeHDlXzdHxQWUERNIFpIyqYeMG4XTFfU0SrvaqhiEoNYWi0DpnknSXO9UKAKx3IVP0GJzODJ7ydSO%2Bt%2F%2BXIPhfpJfkIxA90%2Fc7k37o8reN0qd2Nc483dL9QAJW4N4q0u9BSSDQ7u34ABNf2C7HaeXydnvNh14MQHL2mtmoqfHU0LQBoeHKXApTmoezG3ydhLra6E7LHlvWSXk%2BSlDu%2FXO6uCk0NF12uOtP4LbXRLsPFrHVLittiMwUOUu6%2BggeUCrobq4XuHpTAmlmY9x80FN%2FU9zSj30N%2Bl9wLDq7YB%2Fz8SsjXSvzeY49vn4U3A3Z6PuP9%2BEpdspOZ%2BwJGrH0SKJKWPfpuRSpn5kPeUN0PrnY%2BPH8skReKQOmv0x8%2Fcx1HPJARpYzOdJSTvXJqdS5oKlwecvndvhdXIoNr%2FxD%2FbzqEzVuLeWPkUkiG82TzAgdMq8C0jIZP7CxZkI7vFVNx%2B0NBHR4hSvVFd%2FzxIn7Hp1k9eV3jpZ7xUFQc%2BA19jXGK8xyF3pRhvkbjFwqXZOU%2FEb%2BSvGlWptM8vZqidx3ch85eiHBCdxAEG9zRYf4IfYHAw2J2%2BwAY6pgF3dcM10zO0%2BQNRcT07hmrcMAmafGGWYlKUF6P%2BcdiAcPSMkZ5I7TJac0KtmJeH68YaBobTA8MFRyo5%2BrlBaDo2BlVuGvpGM766uLY71lF3KOATmhS0A0XhXtGkqCRLUsdUiE2fNv%2Bb%2Fw5L3rnezXgCFcjBG%2BMJFjUD%2BoSqzwXzgopMFUF4HeiXfM3aU2lPP9ypv1ruD0f7d6IATAcWqOA2VQdi7TYQ&X-Amz-Signature=69068b193e698725a831ec5ba1de53a05b057ce676d1b3bee4653d0950160dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVVU22E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCNz%2B6Ly9tLaeTN0xtuojU7yO%2Fy5UeJZf9r%2FR8yMrBeAiAeVPJRPUUADYA6ZE1HqvsIX%2BErICS0Q6gE1JUpKk9k3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDpeZfrIQfucQdIr2KtwDzIIFxncP7iqt3GMgVDTLURPYnMmrYA7WrdM0%2FwnhFaawJqDo30eTGCp1bJ9ezeHDlXzdHxQWUERNIFpIyqYeMG4XTFfU0SrvaqhiEoNYWi0DpnknSXO9UKAKx3IVP0GJzODJ7ydSO%2Bt%2F%2BXIPhfpJfkIxA90%2Fc7k37o8reN0qd2Nc483dL9QAJW4N4q0u9BSSDQ7u34ABNf2C7HaeXydnvNh14MQHL2mtmoqfHU0LQBoeHKXApTmoezG3ydhLra6E7LHlvWSXk%2BSlDu%2FXO6uCk0NF12uOtP4LbXRLsPFrHVLittiMwUOUu6%2BggeUCrobq4XuHpTAmlmY9x80FN%2FU9zSj30N%2Bl9wLDq7YB%2Fz8SsjXSvzeY49vn4U3A3Z6PuP9%2BEpdspOZ%2BwJGrH0SKJKWPfpuRSpn5kPeUN0PrnY%2BPH8skReKQOmv0x8%2Fcx1HPJARpYzOdJSTvXJqdS5oKlwecvndvhdXIoNr%2FxD%2FbzqEzVuLeWPkUkiG82TzAgdMq8C0jIZP7CxZkI7vFVNx%2B0NBHR4hSvVFd%2FzxIn7Hp1k9eV3jpZ7xUFQc%2BA19jXGK8xyF3pRhvkbjFwqXZOU%2FEb%2BSvGlWptM8vZqidx3ch85eiHBCdxAEG9zRYf4IfYHAw2J2%2BwAY6pgF3dcM10zO0%2BQNRcT07hmrcMAmafGGWYlKUF6P%2BcdiAcPSMkZ5I7TJac0KtmJeH68YaBobTA8MFRyo5%2BrlBaDo2BlVuGvpGM766uLY71lF3KOATmhS0A0XhXtGkqCRLUsdUiE2fNv%2Bb%2Fw5L3rnezXgCFcjBG%2BMJFjUD%2BoSqzwXzgopMFUF4HeiXfM3aU2lPP9ypv1ruD0f7d6IATAcWqOA2VQdi7TYQ&X-Amz-Signature=6765a392644fa3b8a4faa89860fb4edc7e9e2065e558dd394d4e0cc75aa35e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVVU22E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCNz%2B6Ly9tLaeTN0xtuojU7yO%2Fy5UeJZf9r%2FR8yMrBeAiAeVPJRPUUADYA6ZE1HqvsIX%2BErICS0Q6gE1JUpKk9k3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDpeZfrIQfucQdIr2KtwDzIIFxncP7iqt3GMgVDTLURPYnMmrYA7WrdM0%2FwnhFaawJqDo30eTGCp1bJ9ezeHDlXzdHxQWUERNIFpIyqYeMG4XTFfU0SrvaqhiEoNYWi0DpnknSXO9UKAKx3IVP0GJzODJ7ydSO%2Bt%2F%2BXIPhfpJfkIxA90%2Fc7k37o8reN0qd2Nc483dL9QAJW4N4q0u9BSSDQ7u34ABNf2C7HaeXydnvNh14MQHL2mtmoqfHU0LQBoeHKXApTmoezG3ydhLra6E7LHlvWSXk%2BSlDu%2FXO6uCk0NF12uOtP4LbXRLsPFrHVLittiMwUOUu6%2BggeUCrobq4XuHpTAmlmY9x80FN%2FU9zSj30N%2Bl9wLDq7YB%2Fz8SsjXSvzeY49vn4U3A3Z6PuP9%2BEpdspOZ%2BwJGrH0SKJKWPfpuRSpn5kPeUN0PrnY%2BPH8skReKQOmv0x8%2Fcx1HPJARpYzOdJSTvXJqdS5oKlwecvndvhdXIoNr%2FxD%2FbzqEzVuLeWPkUkiG82TzAgdMq8C0jIZP7CxZkI7vFVNx%2B0NBHR4hSvVFd%2FzxIn7Hp1k9eV3jpZ7xUFQc%2BA19jXGK8xyF3pRhvkbjFwqXZOU%2FEb%2BSvGlWptM8vZqidx3ch85eiHBCdxAEG9zRYf4IfYHAw2J2%2BwAY6pgF3dcM10zO0%2BQNRcT07hmrcMAmafGGWYlKUF6P%2BcdiAcPSMkZ5I7TJac0KtmJeH68YaBobTA8MFRyo5%2BrlBaDo2BlVuGvpGM766uLY71lF3KOATmhS0A0XhXtGkqCRLUsdUiE2fNv%2Bb%2Fw5L3rnezXgCFcjBG%2BMJFjUD%2BoSqzwXzgopMFUF4HeiXfM3aU2lPP9ypv1ruD0f7d6IATAcWqOA2VQdi7TYQ&X-Amz-Signature=f8c009d27c66efd9ca7b138659a20bfd26c0eb90f713386450727b14079dba54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVVU22E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCNz%2B6Ly9tLaeTN0xtuojU7yO%2Fy5UeJZf9r%2FR8yMrBeAiAeVPJRPUUADYA6ZE1HqvsIX%2BErICS0Q6gE1JUpKk9k3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDpeZfrIQfucQdIr2KtwDzIIFxncP7iqt3GMgVDTLURPYnMmrYA7WrdM0%2FwnhFaawJqDo30eTGCp1bJ9ezeHDlXzdHxQWUERNIFpIyqYeMG4XTFfU0SrvaqhiEoNYWi0DpnknSXO9UKAKx3IVP0GJzODJ7ydSO%2Bt%2F%2BXIPhfpJfkIxA90%2Fc7k37o8reN0qd2Nc483dL9QAJW4N4q0u9BSSDQ7u34ABNf2C7HaeXydnvNh14MQHL2mtmoqfHU0LQBoeHKXApTmoezG3ydhLra6E7LHlvWSXk%2BSlDu%2FXO6uCk0NF12uOtP4LbXRLsPFrHVLittiMwUOUu6%2BggeUCrobq4XuHpTAmlmY9x80FN%2FU9zSj30N%2Bl9wLDq7YB%2Fz8SsjXSvzeY49vn4U3A3Z6PuP9%2BEpdspOZ%2BwJGrH0SKJKWPfpuRSpn5kPeUN0PrnY%2BPH8skReKQOmv0x8%2Fcx1HPJARpYzOdJSTvXJqdS5oKlwecvndvhdXIoNr%2FxD%2FbzqEzVuLeWPkUkiG82TzAgdMq8C0jIZP7CxZkI7vFVNx%2B0NBHR4hSvVFd%2FzxIn7Hp1k9eV3jpZ7xUFQc%2BA19jXGK8xyF3pRhvkbjFwqXZOU%2FEb%2BSvGlWptM8vZqidx3ch85eiHBCdxAEG9zRYf4IfYHAw2J2%2BwAY6pgF3dcM10zO0%2BQNRcT07hmrcMAmafGGWYlKUF6P%2BcdiAcPSMkZ5I7TJac0KtmJeH68YaBobTA8MFRyo5%2BrlBaDo2BlVuGvpGM766uLY71lF3KOATmhS0A0XhXtGkqCRLUsdUiE2fNv%2Bb%2Fw5L3rnezXgCFcjBG%2BMJFjUD%2BoSqzwXzgopMFUF4HeiXfM3aU2lPP9ypv1ruD0f7d6IATAcWqOA2VQdi7TYQ&X-Amz-Signature=04b6347cdd65c22463f547368b81d8633b5ff374652d66c65cb6e15a08d5855a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVVU22E%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCNz%2B6Ly9tLaeTN0xtuojU7yO%2Fy5UeJZf9r%2FR8yMrBeAiAeVPJRPUUADYA6ZE1HqvsIX%2BErICS0Q6gE1JUpKk9k3Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDpeZfrIQfucQdIr2KtwDzIIFxncP7iqt3GMgVDTLURPYnMmrYA7WrdM0%2FwnhFaawJqDo30eTGCp1bJ9ezeHDlXzdHxQWUERNIFpIyqYeMG4XTFfU0SrvaqhiEoNYWi0DpnknSXO9UKAKx3IVP0GJzODJ7ydSO%2Bt%2F%2BXIPhfpJfkIxA90%2Fc7k37o8reN0qd2Nc483dL9QAJW4N4q0u9BSSDQ7u34ABNf2C7HaeXydnvNh14MQHL2mtmoqfHU0LQBoeHKXApTmoezG3ydhLra6E7LHlvWSXk%2BSlDu%2FXO6uCk0NF12uOtP4LbXRLsPFrHVLittiMwUOUu6%2BggeUCrobq4XuHpTAmlmY9x80FN%2FU9zSj30N%2Bl9wLDq7YB%2Fz8SsjXSvzeY49vn4U3A3Z6PuP9%2BEpdspOZ%2BwJGrH0SKJKWPfpuRSpn5kPeUN0PrnY%2BPH8skReKQOmv0x8%2Fcx1HPJARpYzOdJSTvXJqdS5oKlwecvndvhdXIoNr%2FxD%2FbzqEzVuLeWPkUkiG82TzAgdMq8C0jIZP7CxZkI7vFVNx%2B0NBHR4hSvVFd%2FzxIn7Hp1k9eV3jpZ7xUFQc%2BA19jXGK8xyF3pRhvkbjFwqXZOU%2FEb%2BSvGlWptM8vZqidx3ch85eiHBCdxAEG9zRYf4IfYHAw2J2%2BwAY6pgF3dcM10zO0%2BQNRcT07hmrcMAmafGGWYlKUF6P%2BcdiAcPSMkZ5I7TJac0KtmJeH68YaBobTA8MFRyo5%2BrlBaDo2BlVuGvpGM766uLY71lF3KOATmhS0A0XhXtGkqCRLUsdUiE2fNv%2Bb%2Fw5L3rnezXgCFcjBG%2BMJFjUD%2BoSqzwXzgopMFUF4HeiXfM3aU2lPP9ypv1ruD0f7d6IATAcWqOA2VQdi7TYQ&X-Amz-Signature=ed59713f16e0acdbf5e2c5be7a789abcaa2e7cc1513053dbfee49dfe292d0a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

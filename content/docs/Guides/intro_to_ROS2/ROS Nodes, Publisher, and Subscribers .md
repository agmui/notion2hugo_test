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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRDQGEV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEvy%2BE9ULLWc9zjF9RTYixzVWVm2qIXBd%2FAVNs%2FFQId%2FAiBxWxs9b94DEK1VfI2TGkynYwWgElZRvhe%2BndZVC21FqCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0rYzQt6F7GR6PHQiKtwDzUMCTrvHf89YJAx986hqRTAy2mmwz8bhxfnX3Sx0eg0%2BKNQCLAjE7NJrMNLaK6fJBsUl4aPTXa%2FuI%2BmwoG2jWhWzNV2JolJi%2BctmCaTD8sjptJ2NPhkwElHVfbPjj4w7SyRnhwiH60k2q%2Bm1j8XTVGFP3WD%2BQ33ap8BGz2IY3b8POZ%2FXVrmcXLw3Bf4wKDIRBvd7qt9GxLLSQfzSU1HaePQ7pzHcPQHP0g1BrU52qq7htf5EsaA5Pwkq5eI%2BSr%2BiZi3x3ibNXSdksByRLsGB52dgBefpQu7f4wLnWiC1zXT1%2FsN4YnEuMfnJkeXaihvlEufRktyIv5eqFtbf45il7GQ9jJ20dGjoXR6e0txK6wBuhyoR1qhBnvw2GTpUAbOrbx6fMStS%2BkJP0%2B7%2FNhX2XbeBsu0JazHfFZWdk2XAq27x389VsRhTj%2Fy1n57KCGk6TKBpyFUIgZwZBpiDiVADzARz8NC%2BxKtnAibwfhTj%2FBiuHzycolYvnUtGwtdYqNh4rfIG8xg6MYgLsa7NF%2FHSuUGGWuHmYDawtkr8upHIfJlKb0BnRoleuXbliBTzCo6xn9sJru4vJUisAe%2F%2FJ5p%2BP%2BJkMjE08ZGFP68EqyriFv8sNXZoRUkdB9bDVlIwkIyNvQY6pgEPR7e3Qm1P0FICCMngibo0EtcjS2UUO1NQ6rFUhlfuepxIVUfdVQQD914QQoL3nhIOaI%2FH3ENAA6HQOFXHo49jvGiegY6m5pRpO5u3T47Ju64Jk71spavoXDJeAJFwaMuXTM6dDngpb2jilCd6nvy7EM5Kv9u6AL%2BNBrmn60ZBdof%2FWDpZZuzB2IzK%2FlYaBigydLwvIrkvsB%2B%2FHFqkZYqJVB2wVlRQ&X-Amz-Signature=06ffec5428e267aa755e3f4d688a5e3cd226b6f725d2d65dbdb1de29e76c3d12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRDQGEV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEvy%2BE9ULLWc9zjF9RTYixzVWVm2qIXBd%2FAVNs%2FFQId%2FAiBxWxs9b94DEK1VfI2TGkynYwWgElZRvhe%2BndZVC21FqCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0rYzQt6F7GR6PHQiKtwDzUMCTrvHf89YJAx986hqRTAy2mmwz8bhxfnX3Sx0eg0%2BKNQCLAjE7NJrMNLaK6fJBsUl4aPTXa%2FuI%2BmwoG2jWhWzNV2JolJi%2BctmCaTD8sjptJ2NPhkwElHVfbPjj4w7SyRnhwiH60k2q%2Bm1j8XTVGFP3WD%2BQ33ap8BGz2IY3b8POZ%2FXVrmcXLw3Bf4wKDIRBvd7qt9GxLLSQfzSU1HaePQ7pzHcPQHP0g1BrU52qq7htf5EsaA5Pwkq5eI%2BSr%2BiZi3x3ibNXSdksByRLsGB52dgBefpQu7f4wLnWiC1zXT1%2FsN4YnEuMfnJkeXaihvlEufRktyIv5eqFtbf45il7GQ9jJ20dGjoXR6e0txK6wBuhyoR1qhBnvw2GTpUAbOrbx6fMStS%2BkJP0%2B7%2FNhX2XbeBsu0JazHfFZWdk2XAq27x389VsRhTj%2Fy1n57KCGk6TKBpyFUIgZwZBpiDiVADzARz8NC%2BxKtnAibwfhTj%2FBiuHzycolYvnUtGwtdYqNh4rfIG8xg6MYgLsa7NF%2FHSuUGGWuHmYDawtkr8upHIfJlKb0BnRoleuXbliBTzCo6xn9sJru4vJUisAe%2F%2FJ5p%2BP%2BJkMjE08ZGFP68EqyriFv8sNXZoRUkdB9bDVlIwkIyNvQY6pgEPR7e3Qm1P0FICCMngibo0EtcjS2UUO1NQ6rFUhlfuepxIVUfdVQQD914QQoL3nhIOaI%2FH3ENAA6HQOFXHo49jvGiegY6m5pRpO5u3T47Ju64Jk71spavoXDJeAJFwaMuXTM6dDngpb2jilCd6nvy7EM5Kv9u6AL%2BNBrmn60ZBdof%2FWDpZZuzB2IzK%2FlYaBigydLwvIrkvsB%2B%2FHFqkZYqJVB2wVlRQ&X-Amz-Signature=214aa39f0490cd56f364e740818295be53a998517d5d99d7257e81b0c2dd4708&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRDQGEV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEvy%2BE9ULLWc9zjF9RTYixzVWVm2qIXBd%2FAVNs%2FFQId%2FAiBxWxs9b94DEK1VfI2TGkynYwWgElZRvhe%2BndZVC21FqCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0rYzQt6F7GR6PHQiKtwDzUMCTrvHf89YJAx986hqRTAy2mmwz8bhxfnX3Sx0eg0%2BKNQCLAjE7NJrMNLaK6fJBsUl4aPTXa%2FuI%2BmwoG2jWhWzNV2JolJi%2BctmCaTD8sjptJ2NPhkwElHVfbPjj4w7SyRnhwiH60k2q%2Bm1j8XTVGFP3WD%2BQ33ap8BGz2IY3b8POZ%2FXVrmcXLw3Bf4wKDIRBvd7qt9GxLLSQfzSU1HaePQ7pzHcPQHP0g1BrU52qq7htf5EsaA5Pwkq5eI%2BSr%2BiZi3x3ibNXSdksByRLsGB52dgBefpQu7f4wLnWiC1zXT1%2FsN4YnEuMfnJkeXaihvlEufRktyIv5eqFtbf45il7GQ9jJ20dGjoXR6e0txK6wBuhyoR1qhBnvw2GTpUAbOrbx6fMStS%2BkJP0%2B7%2FNhX2XbeBsu0JazHfFZWdk2XAq27x389VsRhTj%2Fy1n57KCGk6TKBpyFUIgZwZBpiDiVADzARz8NC%2BxKtnAibwfhTj%2FBiuHzycolYvnUtGwtdYqNh4rfIG8xg6MYgLsa7NF%2FHSuUGGWuHmYDawtkr8upHIfJlKb0BnRoleuXbliBTzCo6xn9sJru4vJUisAe%2F%2FJ5p%2BP%2BJkMjE08ZGFP68EqyriFv8sNXZoRUkdB9bDVlIwkIyNvQY6pgEPR7e3Qm1P0FICCMngibo0EtcjS2UUO1NQ6rFUhlfuepxIVUfdVQQD914QQoL3nhIOaI%2FH3ENAA6HQOFXHo49jvGiegY6m5pRpO5u3T47Ju64Jk71spavoXDJeAJFwaMuXTM6dDngpb2jilCd6nvy7EM5Kv9u6AL%2BNBrmn60ZBdof%2FWDpZZuzB2IzK%2FlYaBigydLwvIrkvsB%2B%2FHFqkZYqJVB2wVlRQ&X-Amz-Signature=1100861cd5fb0261d5bbff5f7430363367290de17e875eccbef7e4ea6347eea0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRDQGEV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEvy%2BE9ULLWc9zjF9RTYixzVWVm2qIXBd%2FAVNs%2FFQId%2FAiBxWxs9b94DEK1VfI2TGkynYwWgElZRvhe%2BndZVC21FqCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0rYzQt6F7GR6PHQiKtwDzUMCTrvHf89YJAx986hqRTAy2mmwz8bhxfnX3Sx0eg0%2BKNQCLAjE7NJrMNLaK6fJBsUl4aPTXa%2FuI%2BmwoG2jWhWzNV2JolJi%2BctmCaTD8sjptJ2NPhkwElHVfbPjj4w7SyRnhwiH60k2q%2Bm1j8XTVGFP3WD%2BQ33ap8BGz2IY3b8POZ%2FXVrmcXLw3Bf4wKDIRBvd7qt9GxLLSQfzSU1HaePQ7pzHcPQHP0g1BrU52qq7htf5EsaA5Pwkq5eI%2BSr%2BiZi3x3ibNXSdksByRLsGB52dgBefpQu7f4wLnWiC1zXT1%2FsN4YnEuMfnJkeXaihvlEufRktyIv5eqFtbf45il7GQ9jJ20dGjoXR6e0txK6wBuhyoR1qhBnvw2GTpUAbOrbx6fMStS%2BkJP0%2B7%2FNhX2XbeBsu0JazHfFZWdk2XAq27x389VsRhTj%2Fy1n57KCGk6TKBpyFUIgZwZBpiDiVADzARz8NC%2BxKtnAibwfhTj%2FBiuHzycolYvnUtGwtdYqNh4rfIG8xg6MYgLsa7NF%2FHSuUGGWuHmYDawtkr8upHIfJlKb0BnRoleuXbliBTzCo6xn9sJru4vJUisAe%2F%2FJ5p%2BP%2BJkMjE08ZGFP68EqyriFv8sNXZoRUkdB9bDVlIwkIyNvQY6pgEPR7e3Qm1P0FICCMngibo0EtcjS2UUO1NQ6rFUhlfuepxIVUfdVQQD914QQoL3nhIOaI%2FH3ENAA6HQOFXHo49jvGiegY6m5pRpO5u3T47Ju64Jk71spavoXDJeAJFwaMuXTM6dDngpb2jilCd6nvy7EM5Kv9u6AL%2BNBrmn60ZBdof%2FWDpZZuzB2IzK%2FlYaBigydLwvIrkvsB%2B%2FHFqkZYqJVB2wVlRQ&X-Amz-Signature=9cea3a0b6283fc1c51fbe85c17b8b17e32948620524c0452c01637826e50987e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRDQGEV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEvy%2BE9ULLWc9zjF9RTYixzVWVm2qIXBd%2FAVNs%2FFQId%2FAiBxWxs9b94DEK1VfI2TGkynYwWgElZRvhe%2BndZVC21FqCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0rYzQt6F7GR6PHQiKtwDzUMCTrvHf89YJAx986hqRTAy2mmwz8bhxfnX3Sx0eg0%2BKNQCLAjE7NJrMNLaK6fJBsUl4aPTXa%2FuI%2BmwoG2jWhWzNV2JolJi%2BctmCaTD8sjptJ2NPhkwElHVfbPjj4w7SyRnhwiH60k2q%2Bm1j8XTVGFP3WD%2BQ33ap8BGz2IY3b8POZ%2FXVrmcXLw3Bf4wKDIRBvd7qt9GxLLSQfzSU1HaePQ7pzHcPQHP0g1BrU52qq7htf5EsaA5Pwkq5eI%2BSr%2BiZi3x3ibNXSdksByRLsGB52dgBefpQu7f4wLnWiC1zXT1%2FsN4YnEuMfnJkeXaihvlEufRktyIv5eqFtbf45il7GQ9jJ20dGjoXR6e0txK6wBuhyoR1qhBnvw2GTpUAbOrbx6fMStS%2BkJP0%2B7%2FNhX2XbeBsu0JazHfFZWdk2XAq27x389VsRhTj%2Fy1n57KCGk6TKBpyFUIgZwZBpiDiVADzARz8NC%2BxKtnAibwfhTj%2FBiuHzycolYvnUtGwtdYqNh4rfIG8xg6MYgLsa7NF%2FHSuUGGWuHmYDawtkr8upHIfJlKb0BnRoleuXbliBTzCo6xn9sJru4vJUisAe%2F%2FJ5p%2BP%2BJkMjE08ZGFP68EqyriFv8sNXZoRUkdB9bDVlIwkIyNvQY6pgEPR7e3Qm1P0FICCMngibo0EtcjS2UUO1NQ6rFUhlfuepxIVUfdVQQD914QQoL3nhIOaI%2FH3ENAA6HQOFXHo49jvGiegY6m5pRpO5u3T47Ju64Jk71spavoXDJeAJFwaMuXTM6dDngpb2jilCd6nvy7EM5Kv9u6AL%2BNBrmn60ZBdof%2FWDpZZuzB2IzK%2FlYaBigydLwvIrkvsB%2B%2FHFqkZYqJVB2wVlRQ&X-Amz-Signature=ee5eb2f40c227b220c1dadd4ec72b07760a01e7fef9c7aa0b77c7616a3deb791&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRDQGEV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEvy%2BE9ULLWc9zjF9RTYixzVWVm2qIXBd%2FAVNs%2FFQId%2FAiBxWxs9b94DEK1VfI2TGkynYwWgElZRvhe%2BndZVC21FqCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0rYzQt6F7GR6PHQiKtwDzUMCTrvHf89YJAx986hqRTAy2mmwz8bhxfnX3Sx0eg0%2BKNQCLAjE7NJrMNLaK6fJBsUl4aPTXa%2FuI%2BmwoG2jWhWzNV2JolJi%2BctmCaTD8sjptJ2NPhkwElHVfbPjj4w7SyRnhwiH60k2q%2Bm1j8XTVGFP3WD%2BQ33ap8BGz2IY3b8POZ%2FXVrmcXLw3Bf4wKDIRBvd7qt9GxLLSQfzSU1HaePQ7pzHcPQHP0g1BrU52qq7htf5EsaA5Pwkq5eI%2BSr%2BiZi3x3ibNXSdksByRLsGB52dgBefpQu7f4wLnWiC1zXT1%2FsN4YnEuMfnJkeXaihvlEufRktyIv5eqFtbf45il7GQ9jJ20dGjoXR6e0txK6wBuhyoR1qhBnvw2GTpUAbOrbx6fMStS%2BkJP0%2B7%2FNhX2XbeBsu0JazHfFZWdk2XAq27x389VsRhTj%2Fy1n57KCGk6TKBpyFUIgZwZBpiDiVADzARz8NC%2BxKtnAibwfhTj%2FBiuHzycolYvnUtGwtdYqNh4rfIG8xg6MYgLsa7NF%2FHSuUGGWuHmYDawtkr8upHIfJlKb0BnRoleuXbliBTzCo6xn9sJru4vJUisAe%2F%2FJ5p%2BP%2BJkMjE08ZGFP68EqyriFv8sNXZoRUkdB9bDVlIwkIyNvQY6pgEPR7e3Qm1P0FICCMngibo0EtcjS2UUO1NQ6rFUhlfuepxIVUfdVQQD914QQoL3nhIOaI%2FH3ENAA6HQOFXHo49jvGiegY6m5pRpO5u3T47Ju64Jk71spavoXDJeAJFwaMuXTM6dDngpb2jilCd6nvy7EM5Kv9u6AL%2BNBrmn60ZBdof%2FWDpZZuzB2IzK%2FlYaBigydLwvIrkvsB%2B%2FHFqkZYqJVB2wVlRQ&X-Amz-Signature=53411ecf9244fd160d04fbcca8d3b683e6ced7ca391485dfadf6e152dcd5aa95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRDQGEV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEvy%2BE9ULLWc9zjF9RTYixzVWVm2qIXBd%2FAVNs%2FFQId%2FAiBxWxs9b94DEK1VfI2TGkynYwWgElZRvhe%2BndZVC21FqCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0rYzQt6F7GR6PHQiKtwDzUMCTrvHf89YJAx986hqRTAy2mmwz8bhxfnX3Sx0eg0%2BKNQCLAjE7NJrMNLaK6fJBsUl4aPTXa%2FuI%2BmwoG2jWhWzNV2JolJi%2BctmCaTD8sjptJ2NPhkwElHVfbPjj4w7SyRnhwiH60k2q%2Bm1j8XTVGFP3WD%2BQ33ap8BGz2IY3b8POZ%2FXVrmcXLw3Bf4wKDIRBvd7qt9GxLLSQfzSU1HaePQ7pzHcPQHP0g1BrU52qq7htf5EsaA5Pwkq5eI%2BSr%2BiZi3x3ibNXSdksByRLsGB52dgBefpQu7f4wLnWiC1zXT1%2FsN4YnEuMfnJkeXaihvlEufRktyIv5eqFtbf45il7GQ9jJ20dGjoXR6e0txK6wBuhyoR1qhBnvw2GTpUAbOrbx6fMStS%2BkJP0%2B7%2FNhX2XbeBsu0JazHfFZWdk2XAq27x389VsRhTj%2Fy1n57KCGk6TKBpyFUIgZwZBpiDiVADzARz8NC%2BxKtnAibwfhTj%2FBiuHzycolYvnUtGwtdYqNh4rfIG8xg6MYgLsa7NF%2FHSuUGGWuHmYDawtkr8upHIfJlKb0BnRoleuXbliBTzCo6xn9sJru4vJUisAe%2F%2FJ5p%2BP%2BJkMjE08ZGFP68EqyriFv8sNXZoRUkdB9bDVlIwkIyNvQY6pgEPR7e3Qm1P0FICCMngibo0EtcjS2UUO1NQ6rFUhlfuepxIVUfdVQQD914QQoL3nhIOaI%2FH3ENAA6HQOFXHo49jvGiegY6m5pRpO5u3T47Ju64Jk71spavoXDJeAJFwaMuXTM6dDngpb2jilCd6nvy7EM5Kv9u6AL%2BNBrmn60ZBdof%2FWDpZZuzB2IzK%2FlYaBigydLwvIrkvsB%2B%2FHFqkZYqJVB2wVlRQ&X-Amz-Signature=7a1e467408e79f49c20eea073e5b5350ebe1b4a04f7610908e5b5dbd61c2e78f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRDQGEV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEvy%2BE9ULLWc9zjF9RTYixzVWVm2qIXBd%2FAVNs%2FFQId%2FAiBxWxs9b94DEK1VfI2TGkynYwWgElZRvhe%2BndZVC21FqCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0rYzQt6F7GR6PHQiKtwDzUMCTrvHf89YJAx986hqRTAy2mmwz8bhxfnX3Sx0eg0%2BKNQCLAjE7NJrMNLaK6fJBsUl4aPTXa%2FuI%2BmwoG2jWhWzNV2JolJi%2BctmCaTD8sjptJ2NPhkwElHVfbPjj4w7SyRnhwiH60k2q%2Bm1j8XTVGFP3WD%2BQ33ap8BGz2IY3b8POZ%2FXVrmcXLw3Bf4wKDIRBvd7qt9GxLLSQfzSU1HaePQ7pzHcPQHP0g1BrU52qq7htf5EsaA5Pwkq5eI%2BSr%2BiZi3x3ibNXSdksByRLsGB52dgBefpQu7f4wLnWiC1zXT1%2FsN4YnEuMfnJkeXaihvlEufRktyIv5eqFtbf45il7GQ9jJ20dGjoXR6e0txK6wBuhyoR1qhBnvw2GTpUAbOrbx6fMStS%2BkJP0%2B7%2FNhX2XbeBsu0JazHfFZWdk2XAq27x389VsRhTj%2Fy1n57KCGk6TKBpyFUIgZwZBpiDiVADzARz8NC%2BxKtnAibwfhTj%2FBiuHzycolYvnUtGwtdYqNh4rfIG8xg6MYgLsa7NF%2FHSuUGGWuHmYDawtkr8upHIfJlKb0BnRoleuXbliBTzCo6xn9sJru4vJUisAe%2F%2FJ5p%2BP%2BJkMjE08ZGFP68EqyriFv8sNXZoRUkdB9bDVlIwkIyNvQY6pgEPR7e3Qm1P0FICCMngibo0EtcjS2UUO1NQ6rFUhlfuepxIVUfdVQQD914QQoL3nhIOaI%2FH3ENAA6HQOFXHo49jvGiegY6m5pRpO5u3T47Ju64Jk71spavoXDJeAJFwaMuXTM6dDngpb2jilCd6nvy7EM5Kv9u6AL%2BNBrmn60ZBdof%2FWDpZZuzB2IzK%2FlYaBigydLwvIrkvsB%2B%2FHFqkZYqJVB2wVlRQ&X-Amz-Signature=71efb04ea7d4e71040a92b3a28403361139a794adb78db85ec71d0e3bd23d5b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

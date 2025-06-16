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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELVQSUK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEcj%2FObBzEaxDLGpjaWJ1U%2Fhxgtosc7b1CX09K14QGXgAiAE7Me8dHBLgWLbkkq5ez7C2Ljfeg796PSKeJ6lNSydPir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMl6eIRhX3GIlRsHWQKtwDOB%2B6sdaPTuo4b6k8RCW0D7e3Al6J5kQqlNT5i68jof1hyspAzP6QE1UPAJbbWSqn%2BOnEmmTWEvUX6AZ8bMFEh%2FbCJRbTdV4Zs0E9390EJ79ua2y1dnEbQaBrlfeoQJNau7AYvRIaOwmbZUkgRMLBJ3526c5%2FxtkTOzdsk6eIM13jX%2FDnBe1iBlZ5JKQVroF5zLZfEzcMJTP8FaAmFpSKODGZ8jWSoOYg7VpBX4Urz7GeJuAVQkT0OAT3qsrYKFAcDDlIl8z1C%2BwMBK0twrItBzsumTWMWdl8uLZIs0V2x%2B1uY1YUTytzwAtMYpsiDQXpM03Y244WJb0FQMbMmp4PyK3NshvYbPZtLx4EsglDcNpA9l4SD8RhhAQRkYfHNTgpyjiQkvRK3k%2BZZyOSJGU6ZHRHOnNpg6Ywp5fD00eWfGEnjMV7qZaT%2Bpw4xqgGReDxMu1HbWUEnHL6kjFx9gDZoFEWchecNufg4kIhBDfIv1sooHGnSpgnoij48MO4fFcPhhESIeGtDHaoSt0szEecw4I7TciNAsA0W7pU8PstVNCBD4a8Kwmer%2F5Ls%2FhLLxKFyPdKQOSGh1XVidd98KTEzSJwx%2BXzXQ%2BdDjoaCpRTNhpXVbO68kINCAzrhzownMjAwgY6pgEvGMjvYchvrOI8QZOom%2BAWWIoAM97rQvCtshWsdlAvv1t3cJztsHoW7r9csWZA6EjU0rk7WZ5V6seT5iiyWpIw5XO%2FqI94NJrdu0jutmjpsNhWv%2Bhnb%2BeIDecL5Zn%2FxlsNqUtaizxljEwDBjyEZSlUHfdsyn7zHe1ZXxIOm6r544enGMW6n3aeGdcQGhVL6T%2Bwo2UP7do4oG9kHDijwdp%2BM4TT0Hx0&X-Amz-Signature=0f2e1b252bb649ac8d0c99b8384e24507093df61d5fb0434287a8c56ed860001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELVQSUK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEcj%2FObBzEaxDLGpjaWJ1U%2Fhxgtosc7b1CX09K14QGXgAiAE7Me8dHBLgWLbkkq5ez7C2Ljfeg796PSKeJ6lNSydPir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMl6eIRhX3GIlRsHWQKtwDOB%2B6sdaPTuo4b6k8RCW0D7e3Al6J5kQqlNT5i68jof1hyspAzP6QE1UPAJbbWSqn%2BOnEmmTWEvUX6AZ8bMFEh%2FbCJRbTdV4Zs0E9390EJ79ua2y1dnEbQaBrlfeoQJNau7AYvRIaOwmbZUkgRMLBJ3526c5%2FxtkTOzdsk6eIM13jX%2FDnBe1iBlZ5JKQVroF5zLZfEzcMJTP8FaAmFpSKODGZ8jWSoOYg7VpBX4Urz7GeJuAVQkT0OAT3qsrYKFAcDDlIl8z1C%2BwMBK0twrItBzsumTWMWdl8uLZIs0V2x%2B1uY1YUTytzwAtMYpsiDQXpM03Y244WJb0FQMbMmp4PyK3NshvYbPZtLx4EsglDcNpA9l4SD8RhhAQRkYfHNTgpyjiQkvRK3k%2BZZyOSJGU6ZHRHOnNpg6Ywp5fD00eWfGEnjMV7qZaT%2Bpw4xqgGReDxMu1HbWUEnHL6kjFx9gDZoFEWchecNufg4kIhBDfIv1sooHGnSpgnoij48MO4fFcPhhESIeGtDHaoSt0szEecw4I7TciNAsA0W7pU8PstVNCBD4a8Kwmer%2F5Ls%2FhLLxKFyPdKQOSGh1XVidd98KTEzSJwx%2BXzXQ%2BdDjoaCpRTNhpXVbO68kINCAzrhzownMjAwgY6pgEvGMjvYchvrOI8QZOom%2BAWWIoAM97rQvCtshWsdlAvv1t3cJztsHoW7r9csWZA6EjU0rk7WZ5V6seT5iiyWpIw5XO%2FqI94NJrdu0jutmjpsNhWv%2Bhnb%2BeIDecL5Zn%2FxlsNqUtaizxljEwDBjyEZSlUHfdsyn7zHe1ZXxIOm6r544enGMW6n3aeGdcQGhVL6T%2Bwo2UP7do4oG9kHDijwdp%2BM4TT0Hx0&X-Amz-Signature=da2faf0fc10844709be012f146047ed735f5300471ad625f397836d20798e50e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELVQSUK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEcj%2FObBzEaxDLGpjaWJ1U%2Fhxgtosc7b1CX09K14QGXgAiAE7Me8dHBLgWLbkkq5ez7C2Ljfeg796PSKeJ6lNSydPir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMl6eIRhX3GIlRsHWQKtwDOB%2B6sdaPTuo4b6k8RCW0D7e3Al6J5kQqlNT5i68jof1hyspAzP6QE1UPAJbbWSqn%2BOnEmmTWEvUX6AZ8bMFEh%2FbCJRbTdV4Zs0E9390EJ79ua2y1dnEbQaBrlfeoQJNau7AYvRIaOwmbZUkgRMLBJ3526c5%2FxtkTOzdsk6eIM13jX%2FDnBe1iBlZ5JKQVroF5zLZfEzcMJTP8FaAmFpSKODGZ8jWSoOYg7VpBX4Urz7GeJuAVQkT0OAT3qsrYKFAcDDlIl8z1C%2BwMBK0twrItBzsumTWMWdl8uLZIs0V2x%2B1uY1YUTytzwAtMYpsiDQXpM03Y244WJb0FQMbMmp4PyK3NshvYbPZtLx4EsglDcNpA9l4SD8RhhAQRkYfHNTgpyjiQkvRK3k%2BZZyOSJGU6ZHRHOnNpg6Ywp5fD00eWfGEnjMV7qZaT%2Bpw4xqgGReDxMu1HbWUEnHL6kjFx9gDZoFEWchecNufg4kIhBDfIv1sooHGnSpgnoij48MO4fFcPhhESIeGtDHaoSt0szEecw4I7TciNAsA0W7pU8PstVNCBD4a8Kwmer%2F5Ls%2FhLLxKFyPdKQOSGh1XVidd98KTEzSJwx%2BXzXQ%2BdDjoaCpRTNhpXVbO68kINCAzrhzownMjAwgY6pgEvGMjvYchvrOI8QZOom%2BAWWIoAM97rQvCtshWsdlAvv1t3cJztsHoW7r9csWZA6EjU0rk7WZ5V6seT5iiyWpIw5XO%2FqI94NJrdu0jutmjpsNhWv%2Bhnb%2BeIDecL5Zn%2FxlsNqUtaizxljEwDBjyEZSlUHfdsyn7zHe1ZXxIOm6r544enGMW6n3aeGdcQGhVL6T%2Bwo2UP7do4oG9kHDijwdp%2BM4TT0Hx0&X-Amz-Signature=bb31323b894d50035a0fee1dd8c60a8f60383f41eb2ddfa64f2792a234e4029d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELVQSUK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEcj%2FObBzEaxDLGpjaWJ1U%2Fhxgtosc7b1CX09K14QGXgAiAE7Me8dHBLgWLbkkq5ez7C2Ljfeg796PSKeJ6lNSydPir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMl6eIRhX3GIlRsHWQKtwDOB%2B6sdaPTuo4b6k8RCW0D7e3Al6J5kQqlNT5i68jof1hyspAzP6QE1UPAJbbWSqn%2BOnEmmTWEvUX6AZ8bMFEh%2FbCJRbTdV4Zs0E9390EJ79ua2y1dnEbQaBrlfeoQJNau7AYvRIaOwmbZUkgRMLBJ3526c5%2FxtkTOzdsk6eIM13jX%2FDnBe1iBlZ5JKQVroF5zLZfEzcMJTP8FaAmFpSKODGZ8jWSoOYg7VpBX4Urz7GeJuAVQkT0OAT3qsrYKFAcDDlIl8z1C%2BwMBK0twrItBzsumTWMWdl8uLZIs0V2x%2B1uY1YUTytzwAtMYpsiDQXpM03Y244WJb0FQMbMmp4PyK3NshvYbPZtLx4EsglDcNpA9l4SD8RhhAQRkYfHNTgpyjiQkvRK3k%2BZZyOSJGU6ZHRHOnNpg6Ywp5fD00eWfGEnjMV7qZaT%2Bpw4xqgGReDxMu1HbWUEnHL6kjFx9gDZoFEWchecNufg4kIhBDfIv1sooHGnSpgnoij48MO4fFcPhhESIeGtDHaoSt0szEecw4I7TciNAsA0W7pU8PstVNCBD4a8Kwmer%2F5Ls%2FhLLxKFyPdKQOSGh1XVidd98KTEzSJwx%2BXzXQ%2BdDjoaCpRTNhpXVbO68kINCAzrhzownMjAwgY6pgEvGMjvYchvrOI8QZOom%2BAWWIoAM97rQvCtshWsdlAvv1t3cJztsHoW7r9csWZA6EjU0rk7WZ5V6seT5iiyWpIw5XO%2FqI94NJrdu0jutmjpsNhWv%2Bhnb%2BeIDecL5Zn%2FxlsNqUtaizxljEwDBjyEZSlUHfdsyn7zHe1ZXxIOm6r544enGMW6n3aeGdcQGhVL6T%2Bwo2UP7do4oG9kHDijwdp%2BM4TT0Hx0&X-Amz-Signature=2a19cec0ac5ce01c87ad3a068aaf566eecfe4811192aa27f48585caa43ace800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELVQSUK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEcj%2FObBzEaxDLGpjaWJ1U%2Fhxgtosc7b1CX09K14QGXgAiAE7Me8dHBLgWLbkkq5ez7C2Ljfeg796PSKeJ6lNSydPir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMl6eIRhX3GIlRsHWQKtwDOB%2B6sdaPTuo4b6k8RCW0D7e3Al6J5kQqlNT5i68jof1hyspAzP6QE1UPAJbbWSqn%2BOnEmmTWEvUX6AZ8bMFEh%2FbCJRbTdV4Zs0E9390EJ79ua2y1dnEbQaBrlfeoQJNau7AYvRIaOwmbZUkgRMLBJ3526c5%2FxtkTOzdsk6eIM13jX%2FDnBe1iBlZ5JKQVroF5zLZfEzcMJTP8FaAmFpSKODGZ8jWSoOYg7VpBX4Urz7GeJuAVQkT0OAT3qsrYKFAcDDlIl8z1C%2BwMBK0twrItBzsumTWMWdl8uLZIs0V2x%2B1uY1YUTytzwAtMYpsiDQXpM03Y244WJb0FQMbMmp4PyK3NshvYbPZtLx4EsglDcNpA9l4SD8RhhAQRkYfHNTgpyjiQkvRK3k%2BZZyOSJGU6ZHRHOnNpg6Ywp5fD00eWfGEnjMV7qZaT%2Bpw4xqgGReDxMu1HbWUEnHL6kjFx9gDZoFEWchecNufg4kIhBDfIv1sooHGnSpgnoij48MO4fFcPhhESIeGtDHaoSt0szEecw4I7TciNAsA0W7pU8PstVNCBD4a8Kwmer%2F5Ls%2FhLLxKFyPdKQOSGh1XVidd98KTEzSJwx%2BXzXQ%2BdDjoaCpRTNhpXVbO68kINCAzrhzownMjAwgY6pgEvGMjvYchvrOI8QZOom%2BAWWIoAM97rQvCtshWsdlAvv1t3cJztsHoW7r9csWZA6EjU0rk7WZ5V6seT5iiyWpIw5XO%2FqI94NJrdu0jutmjpsNhWv%2Bhnb%2BeIDecL5Zn%2FxlsNqUtaizxljEwDBjyEZSlUHfdsyn7zHe1ZXxIOm6r544enGMW6n3aeGdcQGhVL6T%2Bwo2UP7do4oG9kHDijwdp%2BM4TT0Hx0&X-Amz-Signature=083eb98a049d4bbba049a7d4a1b5107cd22a889349431a5c5b0e2d409066c660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELVQSUK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEcj%2FObBzEaxDLGpjaWJ1U%2Fhxgtosc7b1CX09K14QGXgAiAE7Me8dHBLgWLbkkq5ez7C2Ljfeg796PSKeJ6lNSydPir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMl6eIRhX3GIlRsHWQKtwDOB%2B6sdaPTuo4b6k8RCW0D7e3Al6J5kQqlNT5i68jof1hyspAzP6QE1UPAJbbWSqn%2BOnEmmTWEvUX6AZ8bMFEh%2FbCJRbTdV4Zs0E9390EJ79ua2y1dnEbQaBrlfeoQJNau7AYvRIaOwmbZUkgRMLBJ3526c5%2FxtkTOzdsk6eIM13jX%2FDnBe1iBlZ5JKQVroF5zLZfEzcMJTP8FaAmFpSKODGZ8jWSoOYg7VpBX4Urz7GeJuAVQkT0OAT3qsrYKFAcDDlIl8z1C%2BwMBK0twrItBzsumTWMWdl8uLZIs0V2x%2B1uY1YUTytzwAtMYpsiDQXpM03Y244WJb0FQMbMmp4PyK3NshvYbPZtLx4EsglDcNpA9l4SD8RhhAQRkYfHNTgpyjiQkvRK3k%2BZZyOSJGU6ZHRHOnNpg6Ywp5fD00eWfGEnjMV7qZaT%2Bpw4xqgGReDxMu1HbWUEnHL6kjFx9gDZoFEWchecNufg4kIhBDfIv1sooHGnSpgnoij48MO4fFcPhhESIeGtDHaoSt0szEecw4I7TciNAsA0W7pU8PstVNCBD4a8Kwmer%2F5Ls%2FhLLxKFyPdKQOSGh1XVidd98KTEzSJwx%2BXzXQ%2BdDjoaCpRTNhpXVbO68kINCAzrhzownMjAwgY6pgEvGMjvYchvrOI8QZOom%2BAWWIoAM97rQvCtshWsdlAvv1t3cJztsHoW7r9csWZA6EjU0rk7WZ5V6seT5iiyWpIw5XO%2FqI94NJrdu0jutmjpsNhWv%2Bhnb%2BeIDecL5Zn%2FxlsNqUtaizxljEwDBjyEZSlUHfdsyn7zHe1ZXxIOm6r544enGMW6n3aeGdcQGhVL6T%2Bwo2UP7do4oG9kHDijwdp%2BM4TT0Hx0&X-Amz-Signature=f4244fe85aad4ffa051132fa24e49ac6ab1830c76053b4a690e42a953ff805b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELVQSUK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEcj%2FObBzEaxDLGpjaWJ1U%2Fhxgtosc7b1CX09K14QGXgAiAE7Me8dHBLgWLbkkq5ez7C2Ljfeg796PSKeJ6lNSydPir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMl6eIRhX3GIlRsHWQKtwDOB%2B6sdaPTuo4b6k8RCW0D7e3Al6J5kQqlNT5i68jof1hyspAzP6QE1UPAJbbWSqn%2BOnEmmTWEvUX6AZ8bMFEh%2FbCJRbTdV4Zs0E9390EJ79ua2y1dnEbQaBrlfeoQJNau7AYvRIaOwmbZUkgRMLBJ3526c5%2FxtkTOzdsk6eIM13jX%2FDnBe1iBlZ5JKQVroF5zLZfEzcMJTP8FaAmFpSKODGZ8jWSoOYg7VpBX4Urz7GeJuAVQkT0OAT3qsrYKFAcDDlIl8z1C%2BwMBK0twrItBzsumTWMWdl8uLZIs0V2x%2B1uY1YUTytzwAtMYpsiDQXpM03Y244WJb0FQMbMmp4PyK3NshvYbPZtLx4EsglDcNpA9l4SD8RhhAQRkYfHNTgpyjiQkvRK3k%2BZZyOSJGU6ZHRHOnNpg6Ywp5fD00eWfGEnjMV7qZaT%2Bpw4xqgGReDxMu1HbWUEnHL6kjFx9gDZoFEWchecNufg4kIhBDfIv1sooHGnSpgnoij48MO4fFcPhhESIeGtDHaoSt0szEecw4I7TciNAsA0W7pU8PstVNCBD4a8Kwmer%2F5Ls%2FhLLxKFyPdKQOSGh1XVidd98KTEzSJwx%2BXzXQ%2BdDjoaCpRTNhpXVbO68kINCAzrhzownMjAwgY6pgEvGMjvYchvrOI8QZOom%2BAWWIoAM97rQvCtshWsdlAvv1t3cJztsHoW7r9csWZA6EjU0rk7WZ5V6seT5iiyWpIw5XO%2FqI94NJrdu0jutmjpsNhWv%2Bhnb%2BeIDecL5Zn%2FxlsNqUtaizxljEwDBjyEZSlUHfdsyn7zHe1ZXxIOm6r544enGMW6n3aeGdcQGhVL6T%2Bwo2UP7do4oG9kHDijwdp%2BM4TT0Hx0&X-Amz-Signature=bd240274ef83832aa34cceb73b8dfbd6c49bc81ba6683e800a713da2db23bf19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELVQSUK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEcj%2FObBzEaxDLGpjaWJ1U%2Fhxgtosc7b1CX09K14QGXgAiAE7Me8dHBLgWLbkkq5ez7C2Ljfeg796PSKeJ6lNSydPir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMl6eIRhX3GIlRsHWQKtwDOB%2B6sdaPTuo4b6k8RCW0D7e3Al6J5kQqlNT5i68jof1hyspAzP6QE1UPAJbbWSqn%2BOnEmmTWEvUX6AZ8bMFEh%2FbCJRbTdV4Zs0E9390EJ79ua2y1dnEbQaBrlfeoQJNau7AYvRIaOwmbZUkgRMLBJ3526c5%2FxtkTOzdsk6eIM13jX%2FDnBe1iBlZ5JKQVroF5zLZfEzcMJTP8FaAmFpSKODGZ8jWSoOYg7VpBX4Urz7GeJuAVQkT0OAT3qsrYKFAcDDlIl8z1C%2BwMBK0twrItBzsumTWMWdl8uLZIs0V2x%2B1uY1YUTytzwAtMYpsiDQXpM03Y244WJb0FQMbMmp4PyK3NshvYbPZtLx4EsglDcNpA9l4SD8RhhAQRkYfHNTgpyjiQkvRK3k%2BZZyOSJGU6ZHRHOnNpg6Ywp5fD00eWfGEnjMV7qZaT%2Bpw4xqgGReDxMu1HbWUEnHL6kjFx9gDZoFEWchecNufg4kIhBDfIv1sooHGnSpgnoij48MO4fFcPhhESIeGtDHaoSt0szEecw4I7TciNAsA0W7pU8PstVNCBD4a8Kwmer%2F5Ls%2FhLLxKFyPdKQOSGh1XVidd98KTEzSJwx%2BXzXQ%2BdDjoaCpRTNhpXVbO68kINCAzrhzownMjAwgY6pgEvGMjvYchvrOI8QZOom%2BAWWIoAM97rQvCtshWsdlAvv1t3cJztsHoW7r9csWZA6EjU0rk7WZ5V6seT5iiyWpIw5XO%2FqI94NJrdu0jutmjpsNhWv%2Bhnb%2BeIDecL5Zn%2FxlsNqUtaizxljEwDBjyEZSlUHfdsyn7zHe1ZXxIOm6r544enGMW6n3aeGdcQGhVL6T%2Bwo2UP7do4oG9kHDijwdp%2BM4TT0Hx0&X-Amz-Signature=ffb2036c90ff4887a04359f20a10b5e5cfe8c15846146feec80824620f81b7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

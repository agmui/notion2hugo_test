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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKKSXS5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMfSJPOewJ5ejw6jS%2Ff8WRyUgb2IMmXPxCxsBvCjt23gIhAP4aaaQGbS%2Ba7AxiodZpXLOV0hN59xAcjruVL3l5w1sgKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl3Qswl3xSQz%2B7CxUq3AMwfzRiNRGeFZ4QNXRm1hWaBmbjy6zP5Anfh3x0pwJ0JEu0ZDzY3FXSiOyS%2Bmy4eYELsW8Ah%2BYMu87Bt2VOAA1qEGqeuxkqK%2Bybq5TsN%2BdifvI2hMuxkrPwuP7kBkxs%2FijHedeYxTJu22KvbxjWTjPr7M%2FKUpGB6tZ%2B9Gd3GQCY%2BYnZMdVpn68vakALfw1RCBJUuif81nLVdMwXAkFU04%2BSbgrdCxKg%2FhJYRwvQvj%2BCmHYk4bwMtMO2XgZA%2ByZpyPY%2FDdf7GgUdE2JX4tL2yF7ruJR1liPCWr1LxenUlnygEECLwYgAtp%2B1aCc%2BdM3BP9lVSm4rS3EARTWJn%2FIOMg9FDa9RW5RGHYZSuJr0mnNyMYub3HK7WhwOFreLvt1tf0BfvHwZ5Mmlesf9jamr67bfLZ2nXrDKCpAmO0GnfGFdKtD2Q2RjfoErujGn9mxkexL9TvbqVkrNkPNyZRIgL%2BWe2gL5TKDBGvQWDG8%2FkpLHslWE58Gd4lHa4d%2B1d%2FurDq9kORxaSQ4%2Ftdaa8XZPfNS2X5k0oVplRPGK4fzjWOzrMFMKR3T8iAJvpOo3bqYXZNtfMplwGRTCMZWm74wzquqxNeMbqv815Pg0x%2F2HCn%2F4RjtBer216QDSf4eN9DDxj%2FzABjqkAUuIWifcI42G8wIeMgoGFkMsaAkkisS0%2BfPNQYsx8Ffmw%2FXKQNX8k6tWHU8%2FJ3KdprGQZASWxwWBaOPVr%2BdhuSGRtbLlvjAm8aGaSNeQzhxPZ9ueyZFZ6YTWkD%2FmfjfIvC8ZqzHXEco4dJWBVNxVBaN4ZwhhNlnqJCry9IFYGT%2B1g9r4jfKJhL%2FxoThgXQxN2BYos9CaSvET%2FLrEawXTO835dZK3&X-Amz-Signature=d4fb5263cf11dce82f694f3bbaad9a7fa7cc852048953b798f90b046cbda0815&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKKSXS5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMfSJPOewJ5ejw6jS%2Ff8WRyUgb2IMmXPxCxsBvCjt23gIhAP4aaaQGbS%2Ba7AxiodZpXLOV0hN59xAcjruVL3l5w1sgKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl3Qswl3xSQz%2B7CxUq3AMwfzRiNRGeFZ4QNXRm1hWaBmbjy6zP5Anfh3x0pwJ0JEu0ZDzY3FXSiOyS%2Bmy4eYELsW8Ah%2BYMu87Bt2VOAA1qEGqeuxkqK%2Bybq5TsN%2BdifvI2hMuxkrPwuP7kBkxs%2FijHedeYxTJu22KvbxjWTjPr7M%2FKUpGB6tZ%2B9Gd3GQCY%2BYnZMdVpn68vakALfw1RCBJUuif81nLVdMwXAkFU04%2BSbgrdCxKg%2FhJYRwvQvj%2BCmHYk4bwMtMO2XgZA%2ByZpyPY%2FDdf7GgUdE2JX4tL2yF7ruJR1liPCWr1LxenUlnygEECLwYgAtp%2B1aCc%2BdM3BP9lVSm4rS3EARTWJn%2FIOMg9FDa9RW5RGHYZSuJr0mnNyMYub3HK7WhwOFreLvt1tf0BfvHwZ5Mmlesf9jamr67bfLZ2nXrDKCpAmO0GnfGFdKtD2Q2RjfoErujGn9mxkexL9TvbqVkrNkPNyZRIgL%2BWe2gL5TKDBGvQWDG8%2FkpLHslWE58Gd4lHa4d%2B1d%2FurDq9kORxaSQ4%2Ftdaa8XZPfNS2X5k0oVplRPGK4fzjWOzrMFMKR3T8iAJvpOo3bqYXZNtfMplwGRTCMZWm74wzquqxNeMbqv815Pg0x%2F2HCn%2F4RjtBer216QDSf4eN9DDxj%2FzABjqkAUuIWifcI42G8wIeMgoGFkMsaAkkisS0%2BfPNQYsx8Ffmw%2FXKQNX8k6tWHU8%2FJ3KdprGQZASWxwWBaOPVr%2BdhuSGRtbLlvjAm8aGaSNeQzhxPZ9ueyZFZ6YTWkD%2FmfjfIvC8ZqzHXEco4dJWBVNxVBaN4ZwhhNlnqJCry9IFYGT%2B1g9r4jfKJhL%2FxoThgXQxN2BYos9CaSvET%2FLrEawXTO835dZK3&X-Amz-Signature=a02715e113e119b91b9a5ba24e0bcd0e45bf1439907c1fdf2db596587a33cb0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKKSXS5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMfSJPOewJ5ejw6jS%2Ff8WRyUgb2IMmXPxCxsBvCjt23gIhAP4aaaQGbS%2Ba7AxiodZpXLOV0hN59xAcjruVL3l5w1sgKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl3Qswl3xSQz%2B7CxUq3AMwfzRiNRGeFZ4QNXRm1hWaBmbjy6zP5Anfh3x0pwJ0JEu0ZDzY3FXSiOyS%2Bmy4eYELsW8Ah%2BYMu87Bt2VOAA1qEGqeuxkqK%2Bybq5TsN%2BdifvI2hMuxkrPwuP7kBkxs%2FijHedeYxTJu22KvbxjWTjPr7M%2FKUpGB6tZ%2B9Gd3GQCY%2BYnZMdVpn68vakALfw1RCBJUuif81nLVdMwXAkFU04%2BSbgrdCxKg%2FhJYRwvQvj%2BCmHYk4bwMtMO2XgZA%2ByZpyPY%2FDdf7GgUdE2JX4tL2yF7ruJR1liPCWr1LxenUlnygEECLwYgAtp%2B1aCc%2BdM3BP9lVSm4rS3EARTWJn%2FIOMg9FDa9RW5RGHYZSuJr0mnNyMYub3HK7WhwOFreLvt1tf0BfvHwZ5Mmlesf9jamr67bfLZ2nXrDKCpAmO0GnfGFdKtD2Q2RjfoErujGn9mxkexL9TvbqVkrNkPNyZRIgL%2BWe2gL5TKDBGvQWDG8%2FkpLHslWE58Gd4lHa4d%2B1d%2FurDq9kORxaSQ4%2Ftdaa8XZPfNS2X5k0oVplRPGK4fzjWOzrMFMKR3T8iAJvpOo3bqYXZNtfMplwGRTCMZWm74wzquqxNeMbqv815Pg0x%2F2HCn%2F4RjtBer216QDSf4eN9DDxj%2FzABjqkAUuIWifcI42G8wIeMgoGFkMsaAkkisS0%2BfPNQYsx8Ffmw%2FXKQNX8k6tWHU8%2FJ3KdprGQZASWxwWBaOPVr%2BdhuSGRtbLlvjAm8aGaSNeQzhxPZ9ueyZFZ6YTWkD%2FmfjfIvC8ZqzHXEco4dJWBVNxVBaN4ZwhhNlnqJCry9IFYGT%2B1g9r4jfKJhL%2FxoThgXQxN2BYos9CaSvET%2FLrEawXTO835dZK3&X-Amz-Signature=a1fb0ced3d686a434c7466dcc290459bc2f8d501c5bd807c33feaa8cd758915d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKKSXS5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMfSJPOewJ5ejw6jS%2Ff8WRyUgb2IMmXPxCxsBvCjt23gIhAP4aaaQGbS%2Ba7AxiodZpXLOV0hN59xAcjruVL3l5w1sgKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl3Qswl3xSQz%2B7CxUq3AMwfzRiNRGeFZ4QNXRm1hWaBmbjy6zP5Anfh3x0pwJ0JEu0ZDzY3FXSiOyS%2Bmy4eYELsW8Ah%2BYMu87Bt2VOAA1qEGqeuxkqK%2Bybq5TsN%2BdifvI2hMuxkrPwuP7kBkxs%2FijHedeYxTJu22KvbxjWTjPr7M%2FKUpGB6tZ%2B9Gd3GQCY%2BYnZMdVpn68vakALfw1RCBJUuif81nLVdMwXAkFU04%2BSbgrdCxKg%2FhJYRwvQvj%2BCmHYk4bwMtMO2XgZA%2ByZpyPY%2FDdf7GgUdE2JX4tL2yF7ruJR1liPCWr1LxenUlnygEECLwYgAtp%2B1aCc%2BdM3BP9lVSm4rS3EARTWJn%2FIOMg9FDa9RW5RGHYZSuJr0mnNyMYub3HK7WhwOFreLvt1tf0BfvHwZ5Mmlesf9jamr67bfLZ2nXrDKCpAmO0GnfGFdKtD2Q2RjfoErujGn9mxkexL9TvbqVkrNkPNyZRIgL%2BWe2gL5TKDBGvQWDG8%2FkpLHslWE58Gd4lHa4d%2B1d%2FurDq9kORxaSQ4%2Ftdaa8XZPfNS2X5k0oVplRPGK4fzjWOzrMFMKR3T8iAJvpOo3bqYXZNtfMplwGRTCMZWm74wzquqxNeMbqv815Pg0x%2F2HCn%2F4RjtBer216QDSf4eN9DDxj%2FzABjqkAUuIWifcI42G8wIeMgoGFkMsaAkkisS0%2BfPNQYsx8Ffmw%2FXKQNX8k6tWHU8%2FJ3KdprGQZASWxwWBaOPVr%2BdhuSGRtbLlvjAm8aGaSNeQzhxPZ9ueyZFZ6YTWkD%2FmfjfIvC8ZqzHXEco4dJWBVNxVBaN4ZwhhNlnqJCry9IFYGT%2B1g9r4jfKJhL%2FxoThgXQxN2BYos9CaSvET%2FLrEawXTO835dZK3&X-Amz-Signature=362f949ae32e99ab606004e913942a3369b9d0c45398b63e74b8f66b5dd1853f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKKSXS5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMfSJPOewJ5ejw6jS%2Ff8WRyUgb2IMmXPxCxsBvCjt23gIhAP4aaaQGbS%2Ba7AxiodZpXLOV0hN59xAcjruVL3l5w1sgKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl3Qswl3xSQz%2B7CxUq3AMwfzRiNRGeFZ4QNXRm1hWaBmbjy6zP5Anfh3x0pwJ0JEu0ZDzY3FXSiOyS%2Bmy4eYELsW8Ah%2BYMu87Bt2VOAA1qEGqeuxkqK%2Bybq5TsN%2BdifvI2hMuxkrPwuP7kBkxs%2FijHedeYxTJu22KvbxjWTjPr7M%2FKUpGB6tZ%2B9Gd3GQCY%2BYnZMdVpn68vakALfw1RCBJUuif81nLVdMwXAkFU04%2BSbgrdCxKg%2FhJYRwvQvj%2BCmHYk4bwMtMO2XgZA%2ByZpyPY%2FDdf7GgUdE2JX4tL2yF7ruJR1liPCWr1LxenUlnygEECLwYgAtp%2B1aCc%2BdM3BP9lVSm4rS3EARTWJn%2FIOMg9FDa9RW5RGHYZSuJr0mnNyMYub3HK7WhwOFreLvt1tf0BfvHwZ5Mmlesf9jamr67bfLZ2nXrDKCpAmO0GnfGFdKtD2Q2RjfoErujGn9mxkexL9TvbqVkrNkPNyZRIgL%2BWe2gL5TKDBGvQWDG8%2FkpLHslWE58Gd4lHa4d%2B1d%2FurDq9kORxaSQ4%2Ftdaa8XZPfNS2X5k0oVplRPGK4fzjWOzrMFMKR3T8iAJvpOo3bqYXZNtfMplwGRTCMZWm74wzquqxNeMbqv815Pg0x%2F2HCn%2F4RjtBer216QDSf4eN9DDxj%2FzABjqkAUuIWifcI42G8wIeMgoGFkMsaAkkisS0%2BfPNQYsx8Ffmw%2FXKQNX8k6tWHU8%2FJ3KdprGQZASWxwWBaOPVr%2BdhuSGRtbLlvjAm8aGaSNeQzhxPZ9ueyZFZ6YTWkD%2FmfjfIvC8ZqzHXEco4dJWBVNxVBaN4ZwhhNlnqJCry9IFYGT%2B1g9r4jfKJhL%2FxoThgXQxN2BYos9CaSvET%2FLrEawXTO835dZK3&X-Amz-Signature=d8d7d97ae6e5da75b1ce790bf15995eb58409a6f6aa853f5e92f4323a553aa4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKKSXS5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMfSJPOewJ5ejw6jS%2Ff8WRyUgb2IMmXPxCxsBvCjt23gIhAP4aaaQGbS%2Ba7AxiodZpXLOV0hN59xAcjruVL3l5w1sgKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl3Qswl3xSQz%2B7CxUq3AMwfzRiNRGeFZ4QNXRm1hWaBmbjy6zP5Anfh3x0pwJ0JEu0ZDzY3FXSiOyS%2Bmy4eYELsW8Ah%2BYMu87Bt2VOAA1qEGqeuxkqK%2Bybq5TsN%2BdifvI2hMuxkrPwuP7kBkxs%2FijHedeYxTJu22KvbxjWTjPr7M%2FKUpGB6tZ%2B9Gd3GQCY%2BYnZMdVpn68vakALfw1RCBJUuif81nLVdMwXAkFU04%2BSbgrdCxKg%2FhJYRwvQvj%2BCmHYk4bwMtMO2XgZA%2ByZpyPY%2FDdf7GgUdE2JX4tL2yF7ruJR1liPCWr1LxenUlnygEECLwYgAtp%2B1aCc%2BdM3BP9lVSm4rS3EARTWJn%2FIOMg9FDa9RW5RGHYZSuJr0mnNyMYub3HK7WhwOFreLvt1tf0BfvHwZ5Mmlesf9jamr67bfLZ2nXrDKCpAmO0GnfGFdKtD2Q2RjfoErujGn9mxkexL9TvbqVkrNkPNyZRIgL%2BWe2gL5TKDBGvQWDG8%2FkpLHslWE58Gd4lHa4d%2B1d%2FurDq9kORxaSQ4%2Ftdaa8XZPfNS2X5k0oVplRPGK4fzjWOzrMFMKR3T8iAJvpOo3bqYXZNtfMplwGRTCMZWm74wzquqxNeMbqv815Pg0x%2F2HCn%2F4RjtBer216QDSf4eN9DDxj%2FzABjqkAUuIWifcI42G8wIeMgoGFkMsaAkkisS0%2BfPNQYsx8Ffmw%2FXKQNX8k6tWHU8%2FJ3KdprGQZASWxwWBaOPVr%2BdhuSGRtbLlvjAm8aGaSNeQzhxPZ9ueyZFZ6YTWkD%2FmfjfIvC8ZqzHXEco4dJWBVNxVBaN4ZwhhNlnqJCry9IFYGT%2B1g9r4jfKJhL%2FxoThgXQxN2BYos9CaSvET%2FLrEawXTO835dZK3&X-Amz-Signature=f5de8492c160d6ff470853bcef35efd125292ccb91ccad68f697e2d4a7bb38e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKKSXS5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMfSJPOewJ5ejw6jS%2Ff8WRyUgb2IMmXPxCxsBvCjt23gIhAP4aaaQGbS%2Ba7AxiodZpXLOV0hN59xAcjruVL3l5w1sgKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl3Qswl3xSQz%2B7CxUq3AMwfzRiNRGeFZ4QNXRm1hWaBmbjy6zP5Anfh3x0pwJ0JEu0ZDzY3FXSiOyS%2Bmy4eYELsW8Ah%2BYMu87Bt2VOAA1qEGqeuxkqK%2Bybq5TsN%2BdifvI2hMuxkrPwuP7kBkxs%2FijHedeYxTJu22KvbxjWTjPr7M%2FKUpGB6tZ%2B9Gd3GQCY%2BYnZMdVpn68vakALfw1RCBJUuif81nLVdMwXAkFU04%2BSbgrdCxKg%2FhJYRwvQvj%2BCmHYk4bwMtMO2XgZA%2ByZpyPY%2FDdf7GgUdE2JX4tL2yF7ruJR1liPCWr1LxenUlnygEECLwYgAtp%2B1aCc%2BdM3BP9lVSm4rS3EARTWJn%2FIOMg9FDa9RW5RGHYZSuJr0mnNyMYub3HK7WhwOFreLvt1tf0BfvHwZ5Mmlesf9jamr67bfLZ2nXrDKCpAmO0GnfGFdKtD2Q2RjfoErujGn9mxkexL9TvbqVkrNkPNyZRIgL%2BWe2gL5TKDBGvQWDG8%2FkpLHslWE58Gd4lHa4d%2B1d%2FurDq9kORxaSQ4%2Ftdaa8XZPfNS2X5k0oVplRPGK4fzjWOzrMFMKR3T8iAJvpOo3bqYXZNtfMplwGRTCMZWm74wzquqxNeMbqv815Pg0x%2F2HCn%2F4RjtBer216QDSf4eN9DDxj%2FzABjqkAUuIWifcI42G8wIeMgoGFkMsaAkkisS0%2BfPNQYsx8Ffmw%2FXKQNX8k6tWHU8%2FJ3KdprGQZASWxwWBaOPVr%2BdhuSGRtbLlvjAm8aGaSNeQzhxPZ9ueyZFZ6YTWkD%2FmfjfIvC8ZqzHXEco4dJWBVNxVBaN4ZwhhNlnqJCry9IFYGT%2B1g9r4jfKJhL%2FxoThgXQxN2BYos9CaSvET%2FLrEawXTO835dZK3&X-Amz-Signature=6fe3276cd02c3a77012d2661152b31ee41eece2d875ae73ef4f34057a9abc06e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKKSXS5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMfSJPOewJ5ejw6jS%2Ff8WRyUgb2IMmXPxCxsBvCjt23gIhAP4aaaQGbS%2Ba7AxiodZpXLOV0hN59xAcjruVL3l5w1sgKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl3Qswl3xSQz%2B7CxUq3AMwfzRiNRGeFZ4QNXRm1hWaBmbjy6zP5Anfh3x0pwJ0JEu0ZDzY3FXSiOyS%2Bmy4eYELsW8Ah%2BYMu87Bt2VOAA1qEGqeuxkqK%2Bybq5TsN%2BdifvI2hMuxkrPwuP7kBkxs%2FijHedeYxTJu22KvbxjWTjPr7M%2FKUpGB6tZ%2B9Gd3GQCY%2BYnZMdVpn68vakALfw1RCBJUuif81nLVdMwXAkFU04%2BSbgrdCxKg%2FhJYRwvQvj%2BCmHYk4bwMtMO2XgZA%2ByZpyPY%2FDdf7GgUdE2JX4tL2yF7ruJR1liPCWr1LxenUlnygEECLwYgAtp%2B1aCc%2BdM3BP9lVSm4rS3EARTWJn%2FIOMg9FDa9RW5RGHYZSuJr0mnNyMYub3HK7WhwOFreLvt1tf0BfvHwZ5Mmlesf9jamr67bfLZ2nXrDKCpAmO0GnfGFdKtD2Q2RjfoErujGn9mxkexL9TvbqVkrNkPNyZRIgL%2BWe2gL5TKDBGvQWDG8%2FkpLHslWE58Gd4lHa4d%2B1d%2FurDq9kORxaSQ4%2Ftdaa8XZPfNS2X5k0oVplRPGK4fzjWOzrMFMKR3T8iAJvpOo3bqYXZNtfMplwGRTCMZWm74wzquqxNeMbqv815Pg0x%2F2HCn%2F4RjtBer216QDSf4eN9DDxj%2FzABjqkAUuIWifcI42G8wIeMgoGFkMsaAkkisS0%2BfPNQYsx8Ffmw%2FXKQNX8k6tWHU8%2FJ3KdprGQZASWxwWBaOPVr%2BdhuSGRtbLlvjAm8aGaSNeQzhxPZ9ueyZFZ6YTWkD%2FmfjfIvC8ZqzHXEco4dJWBVNxVBaN4ZwhhNlnqJCry9IFYGT%2B1g9r4jfKJhL%2FxoThgXQxN2BYos9CaSvET%2FLrEawXTO835dZK3&X-Amz-Signature=83814aab9568f15d9dd4cf1a44076f51243942bd62b3017541008e189ce0d374&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

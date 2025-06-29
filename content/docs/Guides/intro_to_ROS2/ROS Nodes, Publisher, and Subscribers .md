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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZTOUGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXoIMDsZDmXR7KBRuUuaMeh2gFUJuneT8nm21el3nUoQIhAJRCA3Qk2dNbUInyOp5DcyO0k7XnsRCj3JfZytI9VOs%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXtB84b6PIkQJ6QLUq3AMWr2c%2Fs83zBkkOPIl0RH9jGR5Fc2swULFdMUdVc1sazcKjFQx25CZa2koTDX7Y0ALVyDiua7uAPdlpDiHjmusOwZqaChVjw%2BTkROYoplXDx95IvRZEq8ZC1HvCdzoSmmJMBzO1qF%2F3wSKMRAh1GdaEn6S6DTu3F1LmMN3KWdni86XM3KePbwR2Xs51dwbh7Btf09WFKircGT94zq0E7I3AhpQZYXtJ1ydZl08jGgUJ76c3g4erqXCmne39Z%2FsEFDWrf0CwijuC%2B4AlDE%2BX5aIDbxu41dnWKU1DlpFujD7kzbvihJO%2B9Z4zWbSMJUWA0GOnGX6DSfvWh52ekrR5hF3hEh2Lgb%2B%2BVb4H0MVeYKaFiraefhI13R01hPucPbO652mlOdD2VGw1ME%2FfphVjqBKtgsEiTZpXQ6pubs9Y8HD177bG37JEiG%2FoF6Z2Q8r8oAEUMp1dJB8BnRCvU7FE5NyXL3l20Zt0DkItjzaK4Oik%2F%2Bo%2B8A1MrGP45jQaUnTClaXPBCF5CShIcA7P7Xq7wNQVWlR3AuJRbc%2FHMJByDCtBK9HPTxYBBkNNvO5%2BGdgtxOnYE3mUz4uw%2BlZOBGeEuFbdDZ%2BRLjcT3dMZy8rJmu5%2Fu4%2BA2koY3RrIPDMMrzCmmILDBjqkAf8FdA5V5BzUz%2FWgKws7IKB5LHrzG%2F9FFaIC4pwSPw2rQ8DtRIPd8dryW71aWda%2BOlD4C6VTWszJxYXERyadLiFf2gyfHlV33ewH3VKcBzX%2Fz8Zz4XzYljfUHHhP3eA2vEO6aaM7%2B0UVGKJDvCX52elgQ%2Bh2%2BWXR4EhdGMqMI1ObjZrAN7GEy5WG8RaL%2Fb7jYFL9ob48kO4ojFBr8DocwfO5CSKH&X-Amz-Signature=a28ea58c2209700633e1b3eb17466b14bf29af7f233f530803e7012d8f5fff72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZTOUGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXoIMDsZDmXR7KBRuUuaMeh2gFUJuneT8nm21el3nUoQIhAJRCA3Qk2dNbUInyOp5DcyO0k7XnsRCj3JfZytI9VOs%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXtB84b6PIkQJ6QLUq3AMWr2c%2Fs83zBkkOPIl0RH9jGR5Fc2swULFdMUdVc1sazcKjFQx25CZa2koTDX7Y0ALVyDiua7uAPdlpDiHjmusOwZqaChVjw%2BTkROYoplXDx95IvRZEq8ZC1HvCdzoSmmJMBzO1qF%2F3wSKMRAh1GdaEn6S6DTu3F1LmMN3KWdni86XM3KePbwR2Xs51dwbh7Btf09WFKircGT94zq0E7I3AhpQZYXtJ1ydZl08jGgUJ76c3g4erqXCmne39Z%2FsEFDWrf0CwijuC%2B4AlDE%2BX5aIDbxu41dnWKU1DlpFujD7kzbvihJO%2B9Z4zWbSMJUWA0GOnGX6DSfvWh52ekrR5hF3hEh2Lgb%2B%2BVb4H0MVeYKaFiraefhI13R01hPucPbO652mlOdD2VGw1ME%2FfphVjqBKtgsEiTZpXQ6pubs9Y8HD177bG37JEiG%2FoF6Z2Q8r8oAEUMp1dJB8BnRCvU7FE5NyXL3l20Zt0DkItjzaK4Oik%2F%2Bo%2B8A1MrGP45jQaUnTClaXPBCF5CShIcA7P7Xq7wNQVWlR3AuJRbc%2FHMJByDCtBK9HPTxYBBkNNvO5%2BGdgtxOnYE3mUz4uw%2BlZOBGeEuFbdDZ%2BRLjcT3dMZy8rJmu5%2Fu4%2BA2koY3RrIPDMMrzCmmILDBjqkAf8FdA5V5BzUz%2FWgKws7IKB5LHrzG%2F9FFaIC4pwSPw2rQ8DtRIPd8dryW71aWda%2BOlD4C6VTWszJxYXERyadLiFf2gyfHlV33ewH3VKcBzX%2Fz8Zz4XzYljfUHHhP3eA2vEO6aaM7%2B0UVGKJDvCX52elgQ%2Bh2%2BWXR4EhdGMqMI1ObjZrAN7GEy5WG8RaL%2Fb7jYFL9ob48kO4ojFBr8DocwfO5CSKH&X-Amz-Signature=cc850d4bc64abf262a8ace9573019249a05b8d8b1fb3a35b6b440966514f21bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZTOUGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXoIMDsZDmXR7KBRuUuaMeh2gFUJuneT8nm21el3nUoQIhAJRCA3Qk2dNbUInyOp5DcyO0k7XnsRCj3JfZytI9VOs%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXtB84b6PIkQJ6QLUq3AMWr2c%2Fs83zBkkOPIl0RH9jGR5Fc2swULFdMUdVc1sazcKjFQx25CZa2koTDX7Y0ALVyDiua7uAPdlpDiHjmusOwZqaChVjw%2BTkROYoplXDx95IvRZEq8ZC1HvCdzoSmmJMBzO1qF%2F3wSKMRAh1GdaEn6S6DTu3F1LmMN3KWdni86XM3KePbwR2Xs51dwbh7Btf09WFKircGT94zq0E7I3AhpQZYXtJ1ydZl08jGgUJ76c3g4erqXCmne39Z%2FsEFDWrf0CwijuC%2B4AlDE%2BX5aIDbxu41dnWKU1DlpFujD7kzbvihJO%2B9Z4zWbSMJUWA0GOnGX6DSfvWh52ekrR5hF3hEh2Lgb%2B%2BVb4H0MVeYKaFiraefhI13R01hPucPbO652mlOdD2VGw1ME%2FfphVjqBKtgsEiTZpXQ6pubs9Y8HD177bG37JEiG%2FoF6Z2Q8r8oAEUMp1dJB8BnRCvU7FE5NyXL3l20Zt0DkItjzaK4Oik%2F%2Bo%2B8A1MrGP45jQaUnTClaXPBCF5CShIcA7P7Xq7wNQVWlR3AuJRbc%2FHMJByDCtBK9HPTxYBBkNNvO5%2BGdgtxOnYE3mUz4uw%2BlZOBGeEuFbdDZ%2BRLjcT3dMZy8rJmu5%2Fu4%2BA2koY3RrIPDMMrzCmmILDBjqkAf8FdA5V5BzUz%2FWgKws7IKB5LHrzG%2F9FFaIC4pwSPw2rQ8DtRIPd8dryW71aWda%2BOlD4C6VTWszJxYXERyadLiFf2gyfHlV33ewH3VKcBzX%2Fz8Zz4XzYljfUHHhP3eA2vEO6aaM7%2B0UVGKJDvCX52elgQ%2Bh2%2BWXR4EhdGMqMI1ObjZrAN7GEy5WG8RaL%2Fb7jYFL9ob48kO4ojFBr8DocwfO5CSKH&X-Amz-Signature=e98e1504db76db97bea35560bfaf9c3b9b775cc115755880af1622456192a88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZTOUGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXoIMDsZDmXR7KBRuUuaMeh2gFUJuneT8nm21el3nUoQIhAJRCA3Qk2dNbUInyOp5DcyO0k7XnsRCj3JfZytI9VOs%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXtB84b6PIkQJ6QLUq3AMWr2c%2Fs83zBkkOPIl0RH9jGR5Fc2swULFdMUdVc1sazcKjFQx25CZa2koTDX7Y0ALVyDiua7uAPdlpDiHjmusOwZqaChVjw%2BTkROYoplXDx95IvRZEq8ZC1HvCdzoSmmJMBzO1qF%2F3wSKMRAh1GdaEn6S6DTu3F1LmMN3KWdni86XM3KePbwR2Xs51dwbh7Btf09WFKircGT94zq0E7I3AhpQZYXtJ1ydZl08jGgUJ76c3g4erqXCmne39Z%2FsEFDWrf0CwijuC%2B4AlDE%2BX5aIDbxu41dnWKU1DlpFujD7kzbvihJO%2B9Z4zWbSMJUWA0GOnGX6DSfvWh52ekrR5hF3hEh2Lgb%2B%2BVb4H0MVeYKaFiraefhI13R01hPucPbO652mlOdD2VGw1ME%2FfphVjqBKtgsEiTZpXQ6pubs9Y8HD177bG37JEiG%2FoF6Z2Q8r8oAEUMp1dJB8BnRCvU7FE5NyXL3l20Zt0DkItjzaK4Oik%2F%2Bo%2B8A1MrGP45jQaUnTClaXPBCF5CShIcA7P7Xq7wNQVWlR3AuJRbc%2FHMJByDCtBK9HPTxYBBkNNvO5%2BGdgtxOnYE3mUz4uw%2BlZOBGeEuFbdDZ%2BRLjcT3dMZy8rJmu5%2Fu4%2BA2koY3RrIPDMMrzCmmILDBjqkAf8FdA5V5BzUz%2FWgKws7IKB5LHrzG%2F9FFaIC4pwSPw2rQ8DtRIPd8dryW71aWda%2BOlD4C6VTWszJxYXERyadLiFf2gyfHlV33ewH3VKcBzX%2Fz8Zz4XzYljfUHHhP3eA2vEO6aaM7%2B0UVGKJDvCX52elgQ%2Bh2%2BWXR4EhdGMqMI1ObjZrAN7GEy5WG8RaL%2Fb7jYFL9ob48kO4ojFBr8DocwfO5CSKH&X-Amz-Signature=84ca3219a609211bb1413b31a3d9497a97ef495b14c99b3f6358f80601bf9f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZTOUGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXoIMDsZDmXR7KBRuUuaMeh2gFUJuneT8nm21el3nUoQIhAJRCA3Qk2dNbUInyOp5DcyO0k7XnsRCj3JfZytI9VOs%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXtB84b6PIkQJ6QLUq3AMWr2c%2Fs83zBkkOPIl0RH9jGR5Fc2swULFdMUdVc1sazcKjFQx25CZa2koTDX7Y0ALVyDiua7uAPdlpDiHjmusOwZqaChVjw%2BTkROYoplXDx95IvRZEq8ZC1HvCdzoSmmJMBzO1qF%2F3wSKMRAh1GdaEn6S6DTu3F1LmMN3KWdni86XM3KePbwR2Xs51dwbh7Btf09WFKircGT94zq0E7I3AhpQZYXtJ1ydZl08jGgUJ76c3g4erqXCmne39Z%2FsEFDWrf0CwijuC%2B4AlDE%2BX5aIDbxu41dnWKU1DlpFujD7kzbvihJO%2B9Z4zWbSMJUWA0GOnGX6DSfvWh52ekrR5hF3hEh2Lgb%2B%2BVb4H0MVeYKaFiraefhI13R01hPucPbO652mlOdD2VGw1ME%2FfphVjqBKtgsEiTZpXQ6pubs9Y8HD177bG37JEiG%2FoF6Z2Q8r8oAEUMp1dJB8BnRCvU7FE5NyXL3l20Zt0DkItjzaK4Oik%2F%2Bo%2B8A1MrGP45jQaUnTClaXPBCF5CShIcA7P7Xq7wNQVWlR3AuJRbc%2FHMJByDCtBK9HPTxYBBkNNvO5%2BGdgtxOnYE3mUz4uw%2BlZOBGeEuFbdDZ%2BRLjcT3dMZy8rJmu5%2Fu4%2BA2koY3RrIPDMMrzCmmILDBjqkAf8FdA5V5BzUz%2FWgKws7IKB5LHrzG%2F9FFaIC4pwSPw2rQ8DtRIPd8dryW71aWda%2BOlD4C6VTWszJxYXERyadLiFf2gyfHlV33ewH3VKcBzX%2Fz8Zz4XzYljfUHHhP3eA2vEO6aaM7%2B0UVGKJDvCX52elgQ%2Bh2%2BWXR4EhdGMqMI1ObjZrAN7GEy5WG8RaL%2Fb7jYFL9ob48kO4ojFBr8DocwfO5CSKH&X-Amz-Signature=ea7d79fdbdca0bf3911024d3ecfde6daac504a58e66640d3d497367fd9ec52c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZTOUGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXoIMDsZDmXR7KBRuUuaMeh2gFUJuneT8nm21el3nUoQIhAJRCA3Qk2dNbUInyOp5DcyO0k7XnsRCj3JfZytI9VOs%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXtB84b6PIkQJ6QLUq3AMWr2c%2Fs83zBkkOPIl0RH9jGR5Fc2swULFdMUdVc1sazcKjFQx25CZa2koTDX7Y0ALVyDiua7uAPdlpDiHjmusOwZqaChVjw%2BTkROYoplXDx95IvRZEq8ZC1HvCdzoSmmJMBzO1qF%2F3wSKMRAh1GdaEn6S6DTu3F1LmMN3KWdni86XM3KePbwR2Xs51dwbh7Btf09WFKircGT94zq0E7I3AhpQZYXtJ1ydZl08jGgUJ76c3g4erqXCmne39Z%2FsEFDWrf0CwijuC%2B4AlDE%2BX5aIDbxu41dnWKU1DlpFujD7kzbvihJO%2B9Z4zWbSMJUWA0GOnGX6DSfvWh52ekrR5hF3hEh2Lgb%2B%2BVb4H0MVeYKaFiraefhI13R01hPucPbO652mlOdD2VGw1ME%2FfphVjqBKtgsEiTZpXQ6pubs9Y8HD177bG37JEiG%2FoF6Z2Q8r8oAEUMp1dJB8BnRCvU7FE5NyXL3l20Zt0DkItjzaK4Oik%2F%2Bo%2B8A1MrGP45jQaUnTClaXPBCF5CShIcA7P7Xq7wNQVWlR3AuJRbc%2FHMJByDCtBK9HPTxYBBkNNvO5%2BGdgtxOnYE3mUz4uw%2BlZOBGeEuFbdDZ%2BRLjcT3dMZy8rJmu5%2Fu4%2BA2koY3RrIPDMMrzCmmILDBjqkAf8FdA5V5BzUz%2FWgKws7IKB5LHrzG%2F9FFaIC4pwSPw2rQ8DtRIPd8dryW71aWda%2BOlD4C6VTWszJxYXERyadLiFf2gyfHlV33ewH3VKcBzX%2Fz8Zz4XzYljfUHHhP3eA2vEO6aaM7%2B0UVGKJDvCX52elgQ%2Bh2%2BWXR4EhdGMqMI1ObjZrAN7GEy5WG8RaL%2Fb7jYFL9ob48kO4ojFBr8DocwfO5CSKH&X-Amz-Signature=00021be6c6c1bf621fd9c5d409f387dcf3405777cd25ff8d8b37c2d66ba1a162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZTOUGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXoIMDsZDmXR7KBRuUuaMeh2gFUJuneT8nm21el3nUoQIhAJRCA3Qk2dNbUInyOp5DcyO0k7XnsRCj3JfZytI9VOs%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXtB84b6PIkQJ6QLUq3AMWr2c%2Fs83zBkkOPIl0RH9jGR5Fc2swULFdMUdVc1sazcKjFQx25CZa2koTDX7Y0ALVyDiua7uAPdlpDiHjmusOwZqaChVjw%2BTkROYoplXDx95IvRZEq8ZC1HvCdzoSmmJMBzO1qF%2F3wSKMRAh1GdaEn6S6DTu3F1LmMN3KWdni86XM3KePbwR2Xs51dwbh7Btf09WFKircGT94zq0E7I3AhpQZYXtJ1ydZl08jGgUJ76c3g4erqXCmne39Z%2FsEFDWrf0CwijuC%2B4AlDE%2BX5aIDbxu41dnWKU1DlpFujD7kzbvihJO%2B9Z4zWbSMJUWA0GOnGX6DSfvWh52ekrR5hF3hEh2Lgb%2B%2BVb4H0MVeYKaFiraefhI13R01hPucPbO652mlOdD2VGw1ME%2FfphVjqBKtgsEiTZpXQ6pubs9Y8HD177bG37JEiG%2FoF6Z2Q8r8oAEUMp1dJB8BnRCvU7FE5NyXL3l20Zt0DkItjzaK4Oik%2F%2Bo%2B8A1MrGP45jQaUnTClaXPBCF5CShIcA7P7Xq7wNQVWlR3AuJRbc%2FHMJByDCtBK9HPTxYBBkNNvO5%2BGdgtxOnYE3mUz4uw%2BlZOBGeEuFbdDZ%2BRLjcT3dMZy8rJmu5%2Fu4%2BA2koY3RrIPDMMrzCmmILDBjqkAf8FdA5V5BzUz%2FWgKws7IKB5LHrzG%2F9FFaIC4pwSPw2rQ8DtRIPd8dryW71aWda%2BOlD4C6VTWszJxYXERyadLiFf2gyfHlV33ewH3VKcBzX%2Fz8Zz4XzYljfUHHhP3eA2vEO6aaM7%2B0UVGKJDvCX52elgQ%2Bh2%2BWXR4EhdGMqMI1ObjZrAN7GEy5WG8RaL%2Fb7jYFL9ob48kO4ojFBr8DocwfO5CSKH&X-Amz-Signature=86b9d6b05e69e4aa7868b9689c328c2e129806c1d1e6eea5025395226bf85640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZTOUGL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXoIMDsZDmXR7KBRuUuaMeh2gFUJuneT8nm21el3nUoQIhAJRCA3Qk2dNbUInyOp5DcyO0k7XnsRCj3JfZytI9VOs%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXtB84b6PIkQJ6QLUq3AMWr2c%2Fs83zBkkOPIl0RH9jGR5Fc2swULFdMUdVc1sazcKjFQx25CZa2koTDX7Y0ALVyDiua7uAPdlpDiHjmusOwZqaChVjw%2BTkROYoplXDx95IvRZEq8ZC1HvCdzoSmmJMBzO1qF%2F3wSKMRAh1GdaEn6S6DTu3F1LmMN3KWdni86XM3KePbwR2Xs51dwbh7Btf09WFKircGT94zq0E7I3AhpQZYXtJ1ydZl08jGgUJ76c3g4erqXCmne39Z%2FsEFDWrf0CwijuC%2B4AlDE%2BX5aIDbxu41dnWKU1DlpFujD7kzbvihJO%2B9Z4zWbSMJUWA0GOnGX6DSfvWh52ekrR5hF3hEh2Lgb%2B%2BVb4H0MVeYKaFiraefhI13R01hPucPbO652mlOdD2VGw1ME%2FfphVjqBKtgsEiTZpXQ6pubs9Y8HD177bG37JEiG%2FoF6Z2Q8r8oAEUMp1dJB8BnRCvU7FE5NyXL3l20Zt0DkItjzaK4Oik%2F%2Bo%2B8A1MrGP45jQaUnTClaXPBCF5CShIcA7P7Xq7wNQVWlR3AuJRbc%2FHMJByDCtBK9HPTxYBBkNNvO5%2BGdgtxOnYE3mUz4uw%2BlZOBGeEuFbdDZ%2BRLjcT3dMZy8rJmu5%2Fu4%2BA2koY3RrIPDMMrzCmmILDBjqkAf8FdA5V5BzUz%2FWgKws7IKB5LHrzG%2F9FFaIC4pwSPw2rQ8DtRIPd8dryW71aWda%2BOlD4C6VTWszJxYXERyadLiFf2gyfHlV33ewH3VKcBzX%2Fz8Zz4XzYljfUHHhP3eA2vEO6aaM7%2B0UVGKJDvCX52elgQ%2Bh2%2BWXR4EhdGMqMI1ObjZrAN7GEy5WG8RaL%2Fb7jYFL9ob48kO4ojFBr8DocwfO5CSKH&X-Amz-Signature=30f8733e2ff51658ae4a1cca8cc27be8988cc631da0eeed1dd3c7608a36bc273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMKIJS5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEXOckgW5sfIIPQ5kRGgfeURf1lhROXQcnUlxxZHh6AkAiAjOnIwGLNWoutaPTq9kL7P82TxNjzcgfM78uLCtX3p0iqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONaWkVDGBNV%2Bm0QcKtwDfceLX%2FiMedw0cimDce89w5mn9x1PVu2gNF9%2FNs%2BAfUvG902R4LG7RlwVgNbLeBpzkLScty0aq7XuAZLnqxA0gAEYMUwcXXeVjJy6PRu0s7LL1Ph%2BOmJPlEwIA5l2%2FoPBPXSVUYRxpCSbta2Anzz6tdMce%2FDsPG1bP8qYEhce9BV2vI7RnLTPQYIzc5hsKLJZQ5flAlA0HHnfUssOFkBjZZkPWFvKyDGiRaRG5dO3k98VCYhsJlt518mYv4dCK2I2KYa3nYK94La27SyKePh0G8h%2BgSwgX4u0yx9Z5vpNzgKcfZSb%2ByBqLVE%2Bb7egRXA33G%2BGOsH14qEWzDQR8hY%2FadX%2BYUAQulb5Kuhy1lJsiDduAaDSHPVOtUxRCHDftZ69YjscLc%2By%2BlGm%2BBrCtBHHkVrmkwN18SkXKhoZvS1noXbKAvKVPEajgUcS97OkigG47lePKj0nz2MPK9f6wnE8oIFZ1rxlpycNlpSVDuGYc89Ti8KphLIXuSfIYe0Jt%2BLSCYmYPKc5ma9FxEsSoWfdIz8KCMxL5%2BJvuU%2BeSyBELQtPCuEORrx5hoDtHEEtUVuPRqHhAVv7riZV%2BOu7GksmCadYR2TwD46Zf5dVVzaoZKlGgJolS5qZP%2FNtXl0w74WnvwY6pgH3XYbMi4Pjt1xkKo8a8n%2FA8ZzzT0R5eMBYHrJN6nuTDYkqYrVMTBDaYmxEfKzTwjp5KXyT38RwNakipEESVzOxiEfWDjvB0N9JnktJP0pb%2FnFaMOxb6apo%2BN%2FQIFNKXnHvZpgCkas2nfCini1HJpAyaLZ0M%2FkdKz54m1wTUHX1TrbiV8Mrb8PtZOMk07eV%2FJOF9J5sry2U3LhnDQqJcMPDvzlVFSYe&X-Amz-Signature=7f0a7c965f71e18d5b4460fa833c1795aa6fc07b91043b36fd5423a2c47b1f19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMKIJS5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEXOckgW5sfIIPQ5kRGgfeURf1lhROXQcnUlxxZHh6AkAiAjOnIwGLNWoutaPTq9kL7P82TxNjzcgfM78uLCtX3p0iqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONaWkVDGBNV%2Bm0QcKtwDfceLX%2FiMedw0cimDce89w5mn9x1PVu2gNF9%2FNs%2BAfUvG902R4LG7RlwVgNbLeBpzkLScty0aq7XuAZLnqxA0gAEYMUwcXXeVjJy6PRu0s7LL1Ph%2BOmJPlEwIA5l2%2FoPBPXSVUYRxpCSbta2Anzz6tdMce%2FDsPG1bP8qYEhce9BV2vI7RnLTPQYIzc5hsKLJZQ5flAlA0HHnfUssOFkBjZZkPWFvKyDGiRaRG5dO3k98VCYhsJlt518mYv4dCK2I2KYa3nYK94La27SyKePh0G8h%2BgSwgX4u0yx9Z5vpNzgKcfZSb%2ByBqLVE%2Bb7egRXA33G%2BGOsH14qEWzDQR8hY%2FadX%2BYUAQulb5Kuhy1lJsiDduAaDSHPVOtUxRCHDftZ69YjscLc%2By%2BlGm%2BBrCtBHHkVrmkwN18SkXKhoZvS1noXbKAvKVPEajgUcS97OkigG47lePKj0nz2MPK9f6wnE8oIFZ1rxlpycNlpSVDuGYc89Ti8KphLIXuSfIYe0Jt%2BLSCYmYPKc5ma9FxEsSoWfdIz8KCMxL5%2BJvuU%2BeSyBELQtPCuEORrx5hoDtHEEtUVuPRqHhAVv7riZV%2BOu7GksmCadYR2TwD46Zf5dVVzaoZKlGgJolS5qZP%2FNtXl0w74WnvwY6pgH3XYbMi4Pjt1xkKo8a8n%2FA8ZzzT0R5eMBYHrJN6nuTDYkqYrVMTBDaYmxEfKzTwjp5KXyT38RwNakipEESVzOxiEfWDjvB0N9JnktJP0pb%2FnFaMOxb6apo%2BN%2FQIFNKXnHvZpgCkas2nfCini1HJpAyaLZ0M%2FkdKz54m1wTUHX1TrbiV8Mrb8PtZOMk07eV%2FJOF9J5sry2U3LhnDQqJcMPDvzlVFSYe&X-Amz-Signature=29d8e91507c7b47e961f0c5d6d1d9853e7ab683d75a3f1080f807c6f8855bb21&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMKIJS5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEXOckgW5sfIIPQ5kRGgfeURf1lhROXQcnUlxxZHh6AkAiAjOnIwGLNWoutaPTq9kL7P82TxNjzcgfM78uLCtX3p0iqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONaWkVDGBNV%2Bm0QcKtwDfceLX%2FiMedw0cimDce89w5mn9x1PVu2gNF9%2FNs%2BAfUvG902R4LG7RlwVgNbLeBpzkLScty0aq7XuAZLnqxA0gAEYMUwcXXeVjJy6PRu0s7LL1Ph%2BOmJPlEwIA5l2%2FoPBPXSVUYRxpCSbta2Anzz6tdMce%2FDsPG1bP8qYEhce9BV2vI7RnLTPQYIzc5hsKLJZQ5flAlA0HHnfUssOFkBjZZkPWFvKyDGiRaRG5dO3k98VCYhsJlt518mYv4dCK2I2KYa3nYK94La27SyKePh0G8h%2BgSwgX4u0yx9Z5vpNzgKcfZSb%2ByBqLVE%2Bb7egRXA33G%2BGOsH14qEWzDQR8hY%2FadX%2BYUAQulb5Kuhy1lJsiDduAaDSHPVOtUxRCHDftZ69YjscLc%2By%2BlGm%2BBrCtBHHkVrmkwN18SkXKhoZvS1noXbKAvKVPEajgUcS97OkigG47lePKj0nz2MPK9f6wnE8oIFZ1rxlpycNlpSVDuGYc89Ti8KphLIXuSfIYe0Jt%2BLSCYmYPKc5ma9FxEsSoWfdIz8KCMxL5%2BJvuU%2BeSyBELQtPCuEORrx5hoDtHEEtUVuPRqHhAVv7riZV%2BOu7GksmCadYR2TwD46Zf5dVVzaoZKlGgJolS5qZP%2FNtXl0w74WnvwY6pgH3XYbMi4Pjt1xkKo8a8n%2FA8ZzzT0R5eMBYHrJN6nuTDYkqYrVMTBDaYmxEfKzTwjp5KXyT38RwNakipEESVzOxiEfWDjvB0N9JnktJP0pb%2FnFaMOxb6apo%2BN%2FQIFNKXnHvZpgCkas2nfCini1HJpAyaLZ0M%2FkdKz54m1wTUHX1TrbiV8Mrb8PtZOMk07eV%2FJOF9J5sry2U3LhnDQqJcMPDvzlVFSYe&X-Amz-Signature=0ec02e9e6c1d2193ace9fd1270b0f407ccd6a7a674a6f9771c07510876f17395&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMKIJS5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEXOckgW5sfIIPQ5kRGgfeURf1lhROXQcnUlxxZHh6AkAiAjOnIwGLNWoutaPTq9kL7P82TxNjzcgfM78uLCtX3p0iqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONaWkVDGBNV%2Bm0QcKtwDfceLX%2FiMedw0cimDce89w5mn9x1PVu2gNF9%2FNs%2BAfUvG902R4LG7RlwVgNbLeBpzkLScty0aq7XuAZLnqxA0gAEYMUwcXXeVjJy6PRu0s7LL1Ph%2BOmJPlEwIA5l2%2FoPBPXSVUYRxpCSbta2Anzz6tdMce%2FDsPG1bP8qYEhce9BV2vI7RnLTPQYIzc5hsKLJZQ5flAlA0HHnfUssOFkBjZZkPWFvKyDGiRaRG5dO3k98VCYhsJlt518mYv4dCK2I2KYa3nYK94La27SyKePh0G8h%2BgSwgX4u0yx9Z5vpNzgKcfZSb%2ByBqLVE%2Bb7egRXA33G%2BGOsH14qEWzDQR8hY%2FadX%2BYUAQulb5Kuhy1lJsiDduAaDSHPVOtUxRCHDftZ69YjscLc%2By%2BlGm%2BBrCtBHHkVrmkwN18SkXKhoZvS1noXbKAvKVPEajgUcS97OkigG47lePKj0nz2MPK9f6wnE8oIFZ1rxlpycNlpSVDuGYc89Ti8KphLIXuSfIYe0Jt%2BLSCYmYPKc5ma9FxEsSoWfdIz8KCMxL5%2BJvuU%2BeSyBELQtPCuEORrx5hoDtHEEtUVuPRqHhAVv7riZV%2BOu7GksmCadYR2TwD46Zf5dVVzaoZKlGgJolS5qZP%2FNtXl0w74WnvwY6pgH3XYbMi4Pjt1xkKo8a8n%2FA8ZzzT0R5eMBYHrJN6nuTDYkqYrVMTBDaYmxEfKzTwjp5KXyT38RwNakipEESVzOxiEfWDjvB0N9JnktJP0pb%2FnFaMOxb6apo%2BN%2FQIFNKXnHvZpgCkas2nfCini1HJpAyaLZ0M%2FkdKz54m1wTUHX1TrbiV8Mrb8PtZOMk07eV%2FJOF9J5sry2U3LhnDQqJcMPDvzlVFSYe&X-Amz-Signature=851dd8a4669970943808080be21f0828b1bbae30fc5cfe297dd32604a49cabdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMKIJS5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEXOckgW5sfIIPQ5kRGgfeURf1lhROXQcnUlxxZHh6AkAiAjOnIwGLNWoutaPTq9kL7P82TxNjzcgfM78uLCtX3p0iqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONaWkVDGBNV%2Bm0QcKtwDfceLX%2FiMedw0cimDce89w5mn9x1PVu2gNF9%2FNs%2BAfUvG902R4LG7RlwVgNbLeBpzkLScty0aq7XuAZLnqxA0gAEYMUwcXXeVjJy6PRu0s7LL1Ph%2BOmJPlEwIA5l2%2FoPBPXSVUYRxpCSbta2Anzz6tdMce%2FDsPG1bP8qYEhce9BV2vI7RnLTPQYIzc5hsKLJZQ5flAlA0HHnfUssOFkBjZZkPWFvKyDGiRaRG5dO3k98VCYhsJlt518mYv4dCK2I2KYa3nYK94La27SyKePh0G8h%2BgSwgX4u0yx9Z5vpNzgKcfZSb%2ByBqLVE%2Bb7egRXA33G%2BGOsH14qEWzDQR8hY%2FadX%2BYUAQulb5Kuhy1lJsiDduAaDSHPVOtUxRCHDftZ69YjscLc%2By%2BlGm%2BBrCtBHHkVrmkwN18SkXKhoZvS1noXbKAvKVPEajgUcS97OkigG47lePKj0nz2MPK9f6wnE8oIFZ1rxlpycNlpSVDuGYc89Ti8KphLIXuSfIYe0Jt%2BLSCYmYPKc5ma9FxEsSoWfdIz8KCMxL5%2BJvuU%2BeSyBELQtPCuEORrx5hoDtHEEtUVuPRqHhAVv7riZV%2BOu7GksmCadYR2TwD46Zf5dVVzaoZKlGgJolS5qZP%2FNtXl0w74WnvwY6pgH3XYbMi4Pjt1xkKo8a8n%2FA8ZzzT0R5eMBYHrJN6nuTDYkqYrVMTBDaYmxEfKzTwjp5KXyT38RwNakipEESVzOxiEfWDjvB0N9JnktJP0pb%2FnFaMOxb6apo%2BN%2FQIFNKXnHvZpgCkas2nfCini1HJpAyaLZ0M%2FkdKz54m1wTUHX1TrbiV8Mrb8PtZOMk07eV%2FJOF9J5sry2U3LhnDQqJcMPDvzlVFSYe&X-Amz-Signature=aeac590f84cbcee0265302deeec5a87d01e0b96f62c61f961cc431ada2db50af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMKIJS5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEXOckgW5sfIIPQ5kRGgfeURf1lhROXQcnUlxxZHh6AkAiAjOnIwGLNWoutaPTq9kL7P82TxNjzcgfM78uLCtX3p0iqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONaWkVDGBNV%2Bm0QcKtwDfceLX%2FiMedw0cimDce89w5mn9x1PVu2gNF9%2FNs%2BAfUvG902R4LG7RlwVgNbLeBpzkLScty0aq7XuAZLnqxA0gAEYMUwcXXeVjJy6PRu0s7LL1Ph%2BOmJPlEwIA5l2%2FoPBPXSVUYRxpCSbta2Anzz6tdMce%2FDsPG1bP8qYEhce9BV2vI7RnLTPQYIzc5hsKLJZQ5flAlA0HHnfUssOFkBjZZkPWFvKyDGiRaRG5dO3k98VCYhsJlt518mYv4dCK2I2KYa3nYK94La27SyKePh0G8h%2BgSwgX4u0yx9Z5vpNzgKcfZSb%2ByBqLVE%2Bb7egRXA33G%2BGOsH14qEWzDQR8hY%2FadX%2BYUAQulb5Kuhy1lJsiDduAaDSHPVOtUxRCHDftZ69YjscLc%2By%2BlGm%2BBrCtBHHkVrmkwN18SkXKhoZvS1noXbKAvKVPEajgUcS97OkigG47lePKj0nz2MPK9f6wnE8oIFZ1rxlpycNlpSVDuGYc89Ti8KphLIXuSfIYe0Jt%2BLSCYmYPKc5ma9FxEsSoWfdIz8KCMxL5%2BJvuU%2BeSyBELQtPCuEORrx5hoDtHEEtUVuPRqHhAVv7riZV%2BOu7GksmCadYR2TwD46Zf5dVVzaoZKlGgJolS5qZP%2FNtXl0w74WnvwY6pgH3XYbMi4Pjt1xkKo8a8n%2FA8ZzzT0R5eMBYHrJN6nuTDYkqYrVMTBDaYmxEfKzTwjp5KXyT38RwNakipEESVzOxiEfWDjvB0N9JnktJP0pb%2FnFaMOxb6apo%2BN%2FQIFNKXnHvZpgCkas2nfCini1HJpAyaLZ0M%2FkdKz54m1wTUHX1TrbiV8Mrb8PtZOMk07eV%2FJOF9J5sry2U3LhnDQqJcMPDvzlVFSYe&X-Amz-Signature=8703ce88b8b5bd9bec835b7357862b90194d9c559ea04d08cd2f3344fda3ca60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMKIJS5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEXOckgW5sfIIPQ5kRGgfeURf1lhROXQcnUlxxZHh6AkAiAjOnIwGLNWoutaPTq9kL7P82TxNjzcgfM78uLCtX3p0iqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONaWkVDGBNV%2Bm0QcKtwDfceLX%2FiMedw0cimDce89w5mn9x1PVu2gNF9%2FNs%2BAfUvG902R4LG7RlwVgNbLeBpzkLScty0aq7XuAZLnqxA0gAEYMUwcXXeVjJy6PRu0s7LL1Ph%2BOmJPlEwIA5l2%2FoPBPXSVUYRxpCSbta2Anzz6tdMce%2FDsPG1bP8qYEhce9BV2vI7RnLTPQYIzc5hsKLJZQ5flAlA0HHnfUssOFkBjZZkPWFvKyDGiRaRG5dO3k98VCYhsJlt518mYv4dCK2I2KYa3nYK94La27SyKePh0G8h%2BgSwgX4u0yx9Z5vpNzgKcfZSb%2ByBqLVE%2Bb7egRXA33G%2BGOsH14qEWzDQR8hY%2FadX%2BYUAQulb5Kuhy1lJsiDduAaDSHPVOtUxRCHDftZ69YjscLc%2By%2BlGm%2BBrCtBHHkVrmkwN18SkXKhoZvS1noXbKAvKVPEajgUcS97OkigG47lePKj0nz2MPK9f6wnE8oIFZ1rxlpycNlpSVDuGYc89Ti8KphLIXuSfIYe0Jt%2BLSCYmYPKc5ma9FxEsSoWfdIz8KCMxL5%2BJvuU%2BeSyBELQtPCuEORrx5hoDtHEEtUVuPRqHhAVv7riZV%2BOu7GksmCadYR2TwD46Zf5dVVzaoZKlGgJolS5qZP%2FNtXl0w74WnvwY6pgH3XYbMi4Pjt1xkKo8a8n%2FA8ZzzT0R5eMBYHrJN6nuTDYkqYrVMTBDaYmxEfKzTwjp5KXyT38RwNakipEESVzOxiEfWDjvB0N9JnktJP0pb%2FnFaMOxb6apo%2BN%2FQIFNKXnHvZpgCkas2nfCini1HJpAyaLZ0M%2FkdKz54m1wTUHX1TrbiV8Mrb8PtZOMk07eV%2FJOF9J5sry2U3LhnDQqJcMPDvzlVFSYe&X-Amz-Signature=e93cb936461dfba1e4675cbf3f6aaa4c4beb0c9b0dbd2f68cea121c18c2325be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DMKIJS5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEXOckgW5sfIIPQ5kRGgfeURf1lhROXQcnUlxxZHh6AkAiAjOnIwGLNWoutaPTq9kL7P82TxNjzcgfM78uLCtX3p0iqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMONaWkVDGBNV%2Bm0QcKtwDfceLX%2FiMedw0cimDce89w5mn9x1PVu2gNF9%2FNs%2BAfUvG902R4LG7RlwVgNbLeBpzkLScty0aq7XuAZLnqxA0gAEYMUwcXXeVjJy6PRu0s7LL1Ph%2BOmJPlEwIA5l2%2FoPBPXSVUYRxpCSbta2Anzz6tdMce%2FDsPG1bP8qYEhce9BV2vI7RnLTPQYIzc5hsKLJZQ5flAlA0HHnfUssOFkBjZZkPWFvKyDGiRaRG5dO3k98VCYhsJlt518mYv4dCK2I2KYa3nYK94La27SyKePh0G8h%2BgSwgX4u0yx9Z5vpNzgKcfZSb%2ByBqLVE%2Bb7egRXA33G%2BGOsH14qEWzDQR8hY%2FadX%2BYUAQulb5Kuhy1lJsiDduAaDSHPVOtUxRCHDftZ69YjscLc%2By%2BlGm%2BBrCtBHHkVrmkwN18SkXKhoZvS1noXbKAvKVPEajgUcS97OkigG47lePKj0nz2MPK9f6wnE8oIFZ1rxlpycNlpSVDuGYc89Ti8KphLIXuSfIYe0Jt%2BLSCYmYPKc5ma9FxEsSoWfdIz8KCMxL5%2BJvuU%2BeSyBELQtPCuEORrx5hoDtHEEtUVuPRqHhAVv7riZV%2BOu7GksmCadYR2TwD46Zf5dVVzaoZKlGgJolS5qZP%2FNtXl0w74WnvwY6pgH3XYbMi4Pjt1xkKo8a8n%2FA8ZzzT0R5eMBYHrJN6nuTDYkqYrVMTBDaYmxEfKzTwjp5KXyT38RwNakipEESVzOxiEfWDjvB0N9JnktJP0pb%2FnFaMOxb6apo%2BN%2FQIFNKXnHvZpgCkas2nfCini1HJpAyaLZ0M%2FkdKz54m1wTUHX1TrbiV8Mrb8PtZOMk07eV%2FJOF9J5sry2U3LhnDQqJcMPDvzlVFSYe&X-Amz-Signature=8b1a168f0e0da2f0b2f6b3435e810a4222a15aaa38f725e3b15c1bdfdae10876&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

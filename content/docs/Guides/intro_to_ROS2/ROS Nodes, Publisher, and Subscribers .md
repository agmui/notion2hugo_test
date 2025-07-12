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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OGKRVU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGn5L2lZ5Owt%2FAqHRNtPpVi0kPkM1BGWS7fbeyZH%2FfMwIgas%2B7bWRHdP%2BxOmF8Y0EI7Alt%2F0Ezo31U0%2FQ2o%2F%2Bj0yUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQTGqqfH8UNgRpzrircAzvlvkE7exek%2BcLjgMMVhl07G5fQRHalL4N9rfUoJrE5Fz8rU21W09mCKpuELF%2FRvNnYTM1A7g5tKEw6o6TGTFJrYTV3ZB5mEdm1khBDnc3g6slssZsT57Jo6rnoY5RI0LpNrIahvDTt%2Fus0jmQDlvzw9yYRM6DDIRlY3bmibrJ%2BbBEiFRa%2FS2S5biipblD4LAMTmQMICVJWDf2mDEVyDC0aqe1vtqmd%2B90YDvAVFZwzF1KDHSg99MyOJ4qL7nycv4i7bhk8Oz7rZcKAW68tMJvPP2dupMBF3ewitu8W61KeMDqwRj81ClLnxC%2Bx1bRqW0gicNv9s3k1s1rnKYT7%2BZkkq6wPokiJy0DLi87VWge7j0aRvMb88oZ%2FKWexLEFwVRqOf3Knr0l4ynKMXp%2FNC6nUoyd1NiNDd0cufezD2kgrbTg1LzSmmje9eTKpAzVC6pU9aHo0jZUevBSSRaAVP2u59Xx%2Fl0DFPeqGK6aaZ54DJ1%2Fh2ZxCWpZjCXTOaB27arvO8MlOJsX8GZqJcICH1LpJtr2KZO1rwB%2B634wXKZ0tSaMp%2FClTNPQr6T3ULZyEfEZz9WBOUiRUwGA4GDW5QAxHBhNvBLWKzakDcBZhWmCGkmuHZZrUneW0YaGDMJu1xsMGOqUBXC7jJf3tCtTgLcDphbL6Q1kkqv5fAhi0RzYjvXYEhVRMC9xw2izsOzWFWDy5mS4L3OjNBSB6D2czdEM73dTFqpBMEFRD8ToKgEpMG9pv%2BjrRLcKS8kSlWc4SAyijEWOBQraxHlVcKVoE9LX%2FVQHTrkXQjy7WIggKMcoiieDF3UTtAhPf0FOCg38d7OHXjky0O3teUxPT0mfijiH1BnJ3%2FhV2Ru3S&X-Amz-Signature=2d664d08da9bfbfca76e667871b3ff8a2639ad658c7a59c496de1bb0930fe33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OGKRVU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGn5L2lZ5Owt%2FAqHRNtPpVi0kPkM1BGWS7fbeyZH%2FfMwIgas%2B7bWRHdP%2BxOmF8Y0EI7Alt%2F0Ezo31U0%2FQ2o%2F%2Bj0yUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQTGqqfH8UNgRpzrircAzvlvkE7exek%2BcLjgMMVhl07G5fQRHalL4N9rfUoJrE5Fz8rU21W09mCKpuELF%2FRvNnYTM1A7g5tKEw6o6TGTFJrYTV3ZB5mEdm1khBDnc3g6slssZsT57Jo6rnoY5RI0LpNrIahvDTt%2Fus0jmQDlvzw9yYRM6DDIRlY3bmibrJ%2BbBEiFRa%2FS2S5biipblD4LAMTmQMICVJWDf2mDEVyDC0aqe1vtqmd%2B90YDvAVFZwzF1KDHSg99MyOJ4qL7nycv4i7bhk8Oz7rZcKAW68tMJvPP2dupMBF3ewitu8W61KeMDqwRj81ClLnxC%2Bx1bRqW0gicNv9s3k1s1rnKYT7%2BZkkq6wPokiJy0DLi87VWge7j0aRvMb88oZ%2FKWexLEFwVRqOf3Knr0l4ynKMXp%2FNC6nUoyd1NiNDd0cufezD2kgrbTg1LzSmmje9eTKpAzVC6pU9aHo0jZUevBSSRaAVP2u59Xx%2Fl0DFPeqGK6aaZ54DJ1%2Fh2ZxCWpZjCXTOaB27arvO8MlOJsX8GZqJcICH1LpJtr2KZO1rwB%2B634wXKZ0tSaMp%2FClTNPQr6T3ULZyEfEZz9WBOUiRUwGA4GDW5QAxHBhNvBLWKzakDcBZhWmCGkmuHZZrUneW0YaGDMJu1xsMGOqUBXC7jJf3tCtTgLcDphbL6Q1kkqv5fAhi0RzYjvXYEhVRMC9xw2izsOzWFWDy5mS4L3OjNBSB6D2czdEM73dTFqpBMEFRD8ToKgEpMG9pv%2BjrRLcKS8kSlWc4SAyijEWOBQraxHlVcKVoE9LX%2FVQHTrkXQjy7WIggKMcoiieDF3UTtAhPf0FOCg38d7OHXjky0O3teUxPT0mfijiH1BnJ3%2FhV2Ru3S&X-Amz-Signature=58baa82742da1457fa35e7b2284938fc32ceaf37f1e99411d615bef12525e4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OGKRVU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGn5L2lZ5Owt%2FAqHRNtPpVi0kPkM1BGWS7fbeyZH%2FfMwIgas%2B7bWRHdP%2BxOmF8Y0EI7Alt%2F0Ezo31U0%2FQ2o%2F%2Bj0yUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQTGqqfH8UNgRpzrircAzvlvkE7exek%2BcLjgMMVhl07G5fQRHalL4N9rfUoJrE5Fz8rU21W09mCKpuELF%2FRvNnYTM1A7g5tKEw6o6TGTFJrYTV3ZB5mEdm1khBDnc3g6slssZsT57Jo6rnoY5RI0LpNrIahvDTt%2Fus0jmQDlvzw9yYRM6DDIRlY3bmibrJ%2BbBEiFRa%2FS2S5biipblD4LAMTmQMICVJWDf2mDEVyDC0aqe1vtqmd%2B90YDvAVFZwzF1KDHSg99MyOJ4qL7nycv4i7bhk8Oz7rZcKAW68tMJvPP2dupMBF3ewitu8W61KeMDqwRj81ClLnxC%2Bx1bRqW0gicNv9s3k1s1rnKYT7%2BZkkq6wPokiJy0DLi87VWge7j0aRvMb88oZ%2FKWexLEFwVRqOf3Knr0l4ynKMXp%2FNC6nUoyd1NiNDd0cufezD2kgrbTg1LzSmmje9eTKpAzVC6pU9aHo0jZUevBSSRaAVP2u59Xx%2Fl0DFPeqGK6aaZ54DJ1%2Fh2ZxCWpZjCXTOaB27arvO8MlOJsX8GZqJcICH1LpJtr2KZO1rwB%2B634wXKZ0tSaMp%2FClTNPQr6T3ULZyEfEZz9WBOUiRUwGA4GDW5QAxHBhNvBLWKzakDcBZhWmCGkmuHZZrUneW0YaGDMJu1xsMGOqUBXC7jJf3tCtTgLcDphbL6Q1kkqv5fAhi0RzYjvXYEhVRMC9xw2izsOzWFWDy5mS4L3OjNBSB6D2czdEM73dTFqpBMEFRD8ToKgEpMG9pv%2BjrRLcKS8kSlWc4SAyijEWOBQraxHlVcKVoE9LX%2FVQHTrkXQjy7WIggKMcoiieDF3UTtAhPf0FOCg38d7OHXjky0O3teUxPT0mfijiH1BnJ3%2FhV2Ru3S&X-Amz-Signature=e13a0e2ef51dc0d391f6cbe5b06bd9c065235bd61acf21df7bbad6b07ca7a081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OGKRVU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGn5L2lZ5Owt%2FAqHRNtPpVi0kPkM1BGWS7fbeyZH%2FfMwIgas%2B7bWRHdP%2BxOmF8Y0EI7Alt%2F0Ezo31U0%2FQ2o%2F%2Bj0yUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQTGqqfH8UNgRpzrircAzvlvkE7exek%2BcLjgMMVhl07G5fQRHalL4N9rfUoJrE5Fz8rU21W09mCKpuELF%2FRvNnYTM1A7g5tKEw6o6TGTFJrYTV3ZB5mEdm1khBDnc3g6slssZsT57Jo6rnoY5RI0LpNrIahvDTt%2Fus0jmQDlvzw9yYRM6DDIRlY3bmibrJ%2BbBEiFRa%2FS2S5biipblD4LAMTmQMICVJWDf2mDEVyDC0aqe1vtqmd%2B90YDvAVFZwzF1KDHSg99MyOJ4qL7nycv4i7bhk8Oz7rZcKAW68tMJvPP2dupMBF3ewitu8W61KeMDqwRj81ClLnxC%2Bx1bRqW0gicNv9s3k1s1rnKYT7%2BZkkq6wPokiJy0DLi87VWge7j0aRvMb88oZ%2FKWexLEFwVRqOf3Knr0l4ynKMXp%2FNC6nUoyd1NiNDd0cufezD2kgrbTg1LzSmmje9eTKpAzVC6pU9aHo0jZUevBSSRaAVP2u59Xx%2Fl0DFPeqGK6aaZ54DJ1%2Fh2ZxCWpZjCXTOaB27arvO8MlOJsX8GZqJcICH1LpJtr2KZO1rwB%2B634wXKZ0tSaMp%2FClTNPQr6T3ULZyEfEZz9WBOUiRUwGA4GDW5QAxHBhNvBLWKzakDcBZhWmCGkmuHZZrUneW0YaGDMJu1xsMGOqUBXC7jJf3tCtTgLcDphbL6Q1kkqv5fAhi0RzYjvXYEhVRMC9xw2izsOzWFWDy5mS4L3OjNBSB6D2czdEM73dTFqpBMEFRD8ToKgEpMG9pv%2BjrRLcKS8kSlWc4SAyijEWOBQraxHlVcKVoE9LX%2FVQHTrkXQjy7WIggKMcoiieDF3UTtAhPf0FOCg38d7OHXjky0O3teUxPT0mfijiH1BnJ3%2FhV2Ru3S&X-Amz-Signature=762577954d569a90c5bec4dfc2293ed14d51e6ad8d346883653d6a1fd7aedf8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OGKRVU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGn5L2lZ5Owt%2FAqHRNtPpVi0kPkM1BGWS7fbeyZH%2FfMwIgas%2B7bWRHdP%2BxOmF8Y0EI7Alt%2F0Ezo31U0%2FQ2o%2F%2Bj0yUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQTGqqfH8UNgRpzrircAzvlvkE7exek%2BcLjgMMVhl07G5fQRHalL4N9rfUoJrE5Fz8rU21W09mCKpuELF%2FRvNnYTM1A7g5tKEw6o6TGTFJrYTV3ZB5mEdm1khBDnc3g6slssZsT57Jo6rnoY5RI0LpNrIahvDTt%2Fus0jmQDlvzw9yYRM6DDIRlY3bmibrJ%2BbBEiFRa%2FS2S5biipblD4LAMTmQMICVJWDf2mDEVyDC0aqe1vtqmd%2B90YDvAVFZwzF1KDHSg99MyOJ4qL7nycv4i7bhk8Oz7rZcKAW68tMJvPP2dupMBF3ewitu8W61KeMDqwRj81ClLnxC%2Bx1bRqW0gicNv9s3k1s1rnKYT7%2BZkkq6wPokiJy0DLi87VWge7j0aRvMb88oZ%2FKWexLEFwVRqOf3Knr0l4ynKMXp%2FNC6nUoyd1NiNDd0cufezD2kgrbTg1LzSmmje9eTKpAzVC6pU9aHo0jZUevBSSRaAVP2u59Xx%2Fl0DFPeqGK6aaZ54DJ1%2Fh2ZxCWpZjCXTOaB27arvO8MlOJsX8GZqJcICH1LpJtr2KZO1rwB%2B634wXKZ0tSaMp%2FClTNPQr6T3ULZyEfEZz9WBOUiRUwGA4GDW5QAxHBhNvBLWKzakDcBZhWmCGkmuHZZrUneW0YaGDMJu1xsMGOqUBXC7jJf3tCtTgLcDphbL6Q1kkqv5fAhi0RzYjvXYEhVRMC9xw2izsOzWFWDy5mS4L3OjNBSB6D2czdEM73dTFqpBMEFRD8ToKgEpMG9pv%2BjrRLcKS8kSlWc4SAyijEWOBQraxHlVcKVoE9LX%2FVQHTrkXQjy7WIggKMcoiieDF3UTtAhPf0FOCg38d7OHXjky0O3teUxPT0mfijiH1BnJ3%2FhV2Ru3S&X-Amz-Signature=d46c5417eb2a02a8e96d2d17502c667b6807547a39a8789ecf9529b3c0dd77c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OGKRVU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGn5L2lZ5Owt%2FAqHRNtPpVi0kPkM1BGWS7fbeyZH%2FfMwIgas%2B7bWRHdP%2BxOmF8Y0EI7Alt%2F0Ezo31U0%2FQ2o%2F%2Bj0yUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQTGqqfH8UNgRpzrircAzvlvkE7exek%2BcLjgMMVhl07G5fQRHalL4N9rfUoJrE5Fz8rU21W09mCKpuELF%2FRvNnYTM1A7g5tKEw6o6TGTFJrYTV3ZB5mEdm1khBDnc3g6slssZsT57Jo6rnoY5RI0LpNrIahvDTt%2Fus0jmQDlvzw9yYRM6DDIRlY3bmibrJ%2BbBEiFRa%2FS2S5biipblD4LAMTmQMICVJWDf2mDEVyDC0aqe1vtqmd%2B90YDvAVFZwzF1KDHSg99MyOJ4qL7nycv4i7bhk8Oz7rZcKAW68tMJvPP2dupMBF3ewitu8W61KeMDqwRj81ClLnxC%2Bx1bRqW0gicNv9s3k1s1rnKYT7%2BZkkq6wPokiJy0DLi87VWge7j0aRvMb88oZ%2FKWexLEFwVRqOf3Knr0l4ynKMXp%2FNC6nUoyd1NiNDd0cufezD2kgrbTg1LzSmmje9eTKpAzVC6pU9aHo0jZUevBSSRaAVP2u59Xx%2Fl0DFPeqGK6aaZ54DJ1%2Fh2ZxCWpZjCXTOaB27arvO8MlOJsX8GZqJcICH1LpJtr2KZO1rwB%2B634wXKZ0tSaMp%2FClTNPQr6T3ULZyEfEZz9WBOUiRUwGA4GDW5QAxHBhNvBLWKzakDcBZhWmCGkmuHZZrUneW0YaGDMJu1xsMGOqUBXC7jJf3tCtTgLcDphbL6Q1kkqv5fAhi0RzYjvXYEhVRMC9xw2izsOzWFWDy5mS4L3OjNBSB6D2czdEM73dTFqpBMEFRD8ToKgEpMG9pv%2BjrRLcKS8kSlWc4SAyijEWOBQraxHlVcKVoE9LX%2FVQHTrkXQjy7WIggKMcoiieDF3UTtAhPf0FOCg38d7OHXjky0O3teUxPT0mfijiH1BnJ3%2FhV2Ru3S&X-Amz-Signature=0c8c60b72c604f6da61c30e0bb2da6e69e0420d7ea5daae71c02b71aaa230661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OGKRVU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGn5L2lZ5Owt%2FAqHRNtPpVi0kPkM1BGWS7fbeyZH%2FfMwIgas%2B7bWRHdP%2BxOmF8Y0EI7Alt%2F0Ezo31U0%2FQ2o%2F%2Bj0yUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQTGqqfH8UNgRpzrircAzvlvkE7exek%2BcLjgMMVhl07G5fQRHalL4N9rfUoJrE5Fz8rU21W09mCKpuELF%2FRvNnYTM1A7g5tKEw6o6TGTFJrYTV3ZB5mEdm1khBDnc3g6slssZsT57Jo6rnoY5RI0LpNrIahvDTt%2Fus0jmQDlvzw9yYRM6DDIRlY3bmibrJ%2BbBEiFRa%2FS2S5biipblD4LAMTmQMICVJWDf2mDEVyDC0aqe1vtqmd%2B90YDvAVFZwzF1KDHSg99MyOJ4qL7nycv4i7bhk8Oz7rZcKAW68tMJvPP2dupMBF3ewitu8W61KeMDqwRj81ClLnxC%2Bx1bRqW0gicNv9s3k1s1rnKYT7%2BZkkq6wPokiJy0DLi87VWge7j0aRvMb88oZ%2FKWexLEFwVRqOf3Knr0l4ynKMXp%2FNC6nUoyd1NiNDd0cufezD2kgrbTg1LzSmmje9eTKpAzVC6pU9aHo0jZUevBSSRaAVP2u59Xx%2Fl0DFPeqGK6aaZ54DJ1%2Fh2ZxCWpZjCXTOaB27arvO8MlOJsX8GZqJcICH1LpJtr2KZO1rwB%2B634wXKZ0tSaMp%2FClTNPQr6T3ULZyEfEZz9WBOUiRUwGA4GDW5QAxHBhNvBLWKzakDcBZhWmCGkmuHZZrUneW0YaGDMJu1xsMGOqUBXC7jJf3tCtTgLcDphbL6Q1kkqv5fAhi0RzYjvXYEhVRMC9xw2izsOzWFWDy5mS4L3OjNBSB6D2czdEM73dTFqpBMEFRD8ToKgEpMG9pv%2BjrRLcKS8kSlWc4SAyijEWOBQraxHlVcKVoE9LX%2FVQHTrkXQjy7WIggKMcoiieDF3UTtAhPf0FOCg38d7OHXjky0O3teUxPT0mfijiH1BnJ3%2FhV2Ru3S&X-Amz-Signature=2bbcfa8b9b8c9d86d13360280e27b56acecf033a25dde2a69aef2d0fee6d547b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OGKRVU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGn5L2lZ5Owt%2FAqHRNtPpVi0kPkM1BGWS7fbeyZH%2FfMwIgas%2B7bWRHdP%2BxOmF8Y0EI7Alt%2F0Ezo31U0%2FQ2o%2F%2Bj0yUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQTGqqfH8UNgRpzrircAzvlvkE7exek%2BcLjgMMVhl07G5fQRHalL4N9rfUoJrE5Fz8rU21W09mCKpuELF%2FRvNnYTM1A7g5tKEw6o6TGTFJrYTV3ZB5mEdm1khBDnc3g6slssZsT57Jo6rnoY5RI0LpNrIahvDTt%2Fus0jmQDlvzw9yYRM6DDIRlY3bmibrJ%2BbBEiFRa%2FS2S5biipblD4LAMTmQMICVJWDf2mDEVyDC0aqe1vtqmd%2B90YDvAVFZwzF1KDHSg99MyOJ4qL7nycv4i7bhk8Oz7rZcKAW68tMJvPP2dupMBF3ewitu8W61KeMDqwRj81ClLnxC%2Bx1bRqW0gicNv9s3k1s1rnKYT7%2BZkkq6wPokiJy0DLi87VWge7j0aRvMb88oZ%2FKWexLEFwVRqOf3Knr0l4ynKMXp%2FNC6nUoyd1NiNDd0cufezD2kgrbTg1LzSmmje9eTKpAzVC6pU9aHo0jZUevBSSRaAVP2u59Xx%2Fl0DFPeqGK6aaZ54DJ1%2Fh2ZxCWpZjCXTOaB27arvO8MlOJsX8GZqJcICH1LpJtr2KZO1rwB%2B634wXKZ0tSaMp%2FClTNPQr6T3ULZyEfEZz9WBOUiRUwGA4GDW5QAxHBhNvBLWKzakDcBZhWmCGkmuHZZrUneW0YaGDMJu1xsMGOqUBXC7jJf3tCtTgLcDphbL6Q1kkqv5fAhi0RzYjvXYEhVRMC9xw2izsOzWFWDy5mS4L3OjNBSB6D2czdEM73dTFqpBMEFRD8ToKgEpMG9pv%2BjrRLcKS8kSlWc4SAyijEWOBQraxHlVcKVoE9LX%2FVQHTrkXQjy7WIggKMcoiieDF3UTtAhPf0FOCg38d7OHXjky0O3teUxPT0mfijiH1BnJ3%2FhV2Ru3S&X-Amz-Signature=cba3f5eafb1d7ce5a9656b99caafa29f11f005a83e35a61671f3f1efbb16760d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUKTK6L%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOHS4rOvpwua%2Fy5qgAJoFI7hL1zHDjGKQxMbGI0ccJAIgDurYswbM81Q4oEr830ZIbMY428LRWyWDw8ZVPQnFiJMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXhlpG1jqsDniS00CrcA%2B5Svq4YnArg55S7PUGO3BtZ3GZE5bZXT9ZVQqbWUgZLGX2coU4rQJUjDR0c38cORLIhbw8fd7ZGwNP8cX2XS2SaC3FPToQTljGSiSfeArvAtR03ACss0x%2BGw5O4eyzXsNOL5386HQbsCZtZvSBqU%2BmtfrAMqlIESWeJYVBdVlQcX7czXJhJWOIa0bReZGj9uYzx3KV6kGMvQ2nmVjooIazXikXy20G6v03gDwbNxrreWRewgPq8j1vDrAnc5BgKRzkUbKZI%2FGmHmTr2BuCarSg4EQAzcnAzUwxi2nlCXFFry9bauBgKwnSFyvt2DNnpclTvIFCdqip0AGs1Z%2FRYGKk1u0qZ3sKvVuYI16%2FK3MdVI9OET0RsqVQM9pDIg4NTYsOOOZK5y04J6Oehkkjlfv1uB7p510XIa9%2BixvupwDP4Btlp28iXPG6N9vyBY0X9u9YIRU9AygnkikwX3D0KXyeMWFzZ3j4D54U4drWkozcrvOnVfJka9a2WGH5ySJUqq%2BmRQ%2F3Bkq29o2Ue%2BtV8w2TJnbjMzSowUdsSnBP9Eyp5xkrT8YPsBW6MtgeJOvYLss6IAjiH%2Fd23sbV4LWWtfuDv5NQ7FhjLfVGzlLk21rxkt3Yb5qbzysZF%2Br44MLr5kL4GOqUBvjJJw35%2FTUOHFgWenAL3gNKQUgXs3ArBgEcgWqWhTauVYpYQwgJyZPa2enXFWxlXm%2FTPuJ0M1AoHwUuM8wDxseyi87izwWmqXa3BRojy0t%2Fr%2Foybr3j8rjYN1F8aJRPbIC4MdJKWMe9YxoKLEatugZDzreePdVV8x%2BMxAGjz%2BmiO3x4kfREpQ5nctq0KwaTNZA1gnCg8vNBJ84PXIbBbMVrOzmEZ&X-Amz-Signature=644216a2f0d6f7ca0d2204e6070be0f76795ce2046bf39f1e0902a02821e1f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUKTK6L%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOHS4rOvpwua%2Fy5qgAJoFI7hL1zHDjGKQxMbGI0ccJAIgDurYswbM81Q4oEr830ZIbMY428LRWyWDw8ZVPQnFiJMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXhlpG1jqsDniS00CrcA%2B5Svq4YnArg55S7PUGO3BtZ3GZE5bZXT9ZVQqbWUgZLGX2coU4rQJUjDR0c38cORLIhbw8fd7ZGwNP8cX2XS2SaC3FPToQTljGSiSfeArvAtR03ACss0x%2BGw5O4eyzXsNOL5386HQbsCZtZvSBqU%2BmtfrAMqlIESWeJYVBdVlQcX7czXJhJWOIa0bReZGj9uYzx3KV6kGMvQ2nmVjooIazXikXy20G6v03gDwbNxrreWRewgPq8j1vDrAnc5BgKRzkUbKZI%2FGmHmTr2BuCarSg4EQAzcnAzUwxi2nlCXFFry9bauBgKwnSFyvt2DNnpclTvIFCdqip0AGs1Z%2FRYGKk1u0qZ3sKvVuYI16%2FK3MdVI9OET0RsqVQM9pDIg4NTYsOOOZK5y04J6Oehkkjlfv1uB7p510XIa9%2BixvupwDP4Btlp28iXPG6N9vyBY0X9u9YIRU9AygnkikwX3D0KXyeMWFzZ3j4D54U4drWkozcrvOnVfJka9a2WGH5ySJUqq%2BmRQ%2F3Bkq29o2Ue%2BtV8w2TJnbjMzSowUdsSnBP9Eyp5xkrT8YPsBW6MtgeJOvYLss6IAjiH%2Fd23sbV4LWWtfuDv5NQ7FhjLfVGzlLk21rxkt3Yb5qbzysZF%2Br44MLr5kL4GOqUBvjJJw35%2FTUOHFgWenAL3gNKQUgXs3ArBgEcgWqWhTauVYpYQwgJyZPa2enXFWxlXm%2FTPuJ0M1AoHwUuM8wDxseyi87izwWmqXa3BRojy0t%2Fr%2Foybr3j8rjYN1F8aJRPbIC4MdJKWMe9YxoKLEatugZDzreePdVV8x%2BMxAGjz%2BmiO3x4kfREpQ5nctq0KwaTNZA1gnCg8vNBJ84PXIbBbMVrOzmEZ&X-Amz-Signature=519bb7f0bb007b522977f4296b2b55b83f01a59115c2ee553a414bd453926175&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUKTK6L%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOHS4rOvpwua%2Fy5qgAJoFI7hL1zHDjGKQxMbGI0ccJAIgDurYswbM81Q4oEr830ZIbMY428LRWyWDw8ZVPQnFiJMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXhlpG1jqsDniS00CrcA%2B5Svq4YnArg55S7PUGO3BtZ3GZE5bZXT9ZVQqbWUgZLGX2coU4rQJUjDR0c38cORLIhbw8fd7ZGwNP8cX2XS2SaC3FPToQTljGSiSfeArvAtR03ACss0x%2BGw5O4eyzXsNOL5386HQbsCZtZvSBqU%2BmtfrAMqlIESWeJYVBdVlQcX7czXJhJWOIa0bReZGj9uYzx3KV6kGMvQ2nmVjooIazXikXy20G6v03gDwbNxrreWRewgPq8j1vDrAnc5BgKRzkUbKZI%2FGmHmTr2BuCarSg4EQAzcnAzUwxi2nlCXFFry9bauBgKwnSFyvt2DNnpclTvIFCdqip0AGs1Z%2FRYGKk1u0qZ3sKvVuYI16%2FK3MdVI9OET0RsqVQM9pDIg4NTYsOOOZK5y04J6Oehkkjlfv1uB7p510XIa9%2BixvupwDP4Btlp28iXPG6N9vyBY0X9u9YIRU9AygnkikwX3D0KXyeMWFzZ3j4D54U4drWkozcrvOnVfJka9a2WGH5ySJUqq%2BmRQ%2F3Bkq29o2Ue%2BtV8w2TJnbjMzSowUdsSnBP9Eyp5xkrT8YPsBW6MtgeJOvYLss6IAjiH%2Fd23sbV4LWWtfuDv5NQ7FhjLfVGzlLk21rxkt3Yb5qbzysZF%2Br44MLr5kL4GOqUBvjJJw35%2FTUOHFgWenAL3gNKQUgXs3ArBgEcgWqWhTauVYpYQwgJyZPa2enXFWxlXm%2FTPuJ0M1AoHwUuM8wDxseyi87izwWmqXa3BRojy0t%2Fr%2Foybr3j8rjYN1F8aJRPbIC4MdJKWMe9YxoKLEatugZDzreePdVV8x%2BMxAGjz%2BmiO3x4kfREpQ5nctq0KwaTNZA1gnCg8vNBJ84PXIbBbMVrOzmEZ&X-Amz-Signature=ebd56017f0a11ef53db58c97d541a940ec2d6874b7a352dbde0bc01ad9ab3f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUKTK6L%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOHS4rOvpwua%2Fy5qgAJoFI7hL1zHDjGKQxMbGI0ccJAIgDurYswbM81Q4oEr830ZIbMY428LRWyWDw8ZVPQnFiJMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXhlpG1jqsDniS00CrcA%2B5Svq4YnArg55S7PUGO3BtZ3GZE5bZXT9ZVQqbWUgZLGX2coU4rQJUjDR0c38cORLIhbw8fd7ZGwNP8cX2XS2SaC3FPToQTljGSiSfeArvAtR03ACss0x%2BGw5O4eyzXsNOL5386HQbsCZtZvSBqU%2BmtfrAMqlIESWeJYVBdVlQcX7czXJhJWOIa0bReZGj9uYzx3KV6kGMvQ2nmVjooIazXikXy20G6v03gDwbNxrreWRewgPq8j1vDrAnc5BgKRzkUbKZI%2FGmHmTr2BuCarSg4EQAzcnAzUwxi2nlCXFFry9bauBgKwnSFyvt2DNnpclTvIFCdqip0AGs1Z%2FRYGKk1u0qZ3sKvVuYI16%2FK3MdVI9OET0RsqVQM9pDIg4NTYsOOOZK5y04J6Oehkkjlfv1uB7p510XIa9%2BixvupwDP4Btlp28iXPG6N9vyBY0X9u9YIRU9AygnkikwX3D0KXyeMWFzZ3j4D54U4drWkozcrvOnVfJka9a2WGH5ySJUqq%2BmRQ%2F3Bkq29o2Ue%2BtV8w2TJnbjMzSowUdsSnBP9Eyp5xkrT8YPsBW6MtgeJOvYLss6IAjiH%2Fd23sbV4LWWtfuDv5NQ7FhjLfVGzlLk21rxkt3Yb5qbzysZF%2Br44MLr5kL4GOqUBvjJJw35%2FTUOHFgWenAL3gNKQUgXs3ArBgEcgWqWhTauVYpYQwgJyZPa2enXFWxlXm%2FTPuJ0M1AoHwUuM8wDxseyi87izwWmqXa3BRojy0t%2Fr%2Foybr3j8rjYN1F8aJRPbIC4MdJKWMe9YxoKLEatugZDzreePdVV8x%2BMxAGjz%2BmiO3x4kfREpQ5nctq0KwaTNZA1gnCg8vNBJ84PXIbBbMVrOzmEZ&X-Amz-Signature=ad05ddd8f6c66090a958711d955bc1330b9e471ebc5d25e6db76ffd8961d4ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUKTK6L%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOHS4rOvpwua%2Fy5qgAJoFI7hL1zHDjGKQxMbGI0ccJAIgDurYswbM81Q4oEr830ZIbMY428LRWyWDw8ZVPQnFiJMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXhlpG1jqsDniS00CrcA%2B5Svq4YnArg55S7PUGO3BtZ3GZE5bZXT9ZVQqbWUgZLGX2coU4rQJUjDR0c38cORLIhbw8fd7ZGwNP8cX2XS2SaC3FPToQTljGSiSfeArvAtR03ACss0x%2BGw5O4eyzXsNOL5386HQbsCZtZvSBqU%2BmtfrAMqlIESWeJYVBdVlQcX7czXJhJWOIa0bReZGj9uYzx3KV6kGMvQ2nmVjooIazXikXy20G6v03gDwbNxrreWRewgPq8j1vDrAnc5BgKRzkUbKZI%2FGmHmTr2BuCarSg4EQAzcnAzUwxi2nlCXFFry9bauBgKwnSFyvt2DNnpclTvIFCdqip0AGs1Z%2FRYGKk1u0qZ3sKvVuYI16%2FK3MdVI9OET0RsqVQM9pDIg4NTYsOOOZK5y04J6Oehkkjlfv1uB7p510XIa9%2BixvupwDP4Btlp28iXPG6N9vyBY0X9u9YIRU9AygnkikwX3D0KXyeMWFzZ3j4D54U4drWkozcrvOnVfJka9a2WGH5ySJUqq%2BmRQ%2F3Bkq29o2Ue%2BtV8w2TJnbjMzSowUdsSnBP9Eyp5xkrT8YPsBW6MtgeJOvYLss6IAjiH%2Fd23sbV4LWWtfuDv5NQ7FhjLfVGzlLk21rxkt3Yb5qbzysZF%2Br44MLr5kL4GOqUBvjJJw35%2FTUOHFgWenAL3gNKQUgXs3ArBgEcgWqWhTauVYpYQwgJyZPa2enXFWxlXm%2FTPuJ0M1AoHwUuM8wDxseyi87izwWmqXa3BRojy0t%2Fr%2Foybr3j8rjYN1F8aJRPbIC4MdJKWMe9YxoKLEatugZDzreePdVV8x%2BMxAGjz%2BmiO3x4kfREpQ5nctq0KwaTNZA1gnCg8vNBJ84PXIbBbMVrOzmEZ&X-Amz-Signature=780e0b09b703f9f5fbd023b2c48da8ce44bb558d8f2e1109427ab5e39f0732c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUKTK6L%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOHS4rOvpwua%2Fy5qgAJoFI7hL1zHDjGKQxMbGI0ccJAIgDurYswbM81Q4oEr830ZIbMY428LRWyWDw8ZVPQnFiJMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXhlpG1jqsDniS00CrcA%2B5Svq4YnArg55S7PUGO3BtZ3GZE5bZXT9ZVQqbWUgZLGX2coU4rQJUjDR0c38cORLIhbw8fd7ZGwNP8cX2XS2SaC3FPToQTljGSiSfeArvAtR03ACss0x%2BGw5O4eyzXsNOL5386HQbsCZtZvSBqU%2BmtfrAMqlIESWeJYVBdVlQcX7czXJhJWOIa0bReZGj9uYzx3KV6kGMvQ2nmVjooIazXikXy20G6v03gDwbNxrreWRewgPq8j1vDrAnc5BgKRzkUbKZI%2FGmHmTr2BuCarSg4EQAzcnAzUwxi2nlCXFFry9bauBgKwnSFyvt2DNnpclTvIFCdqip0AGs1Z%2FRYGKk1u0qZ3sKvVuYI16%2FK3MdVI9OET0RsqVQM9pDIg4NTYsOOOZK5y04J6Oehkkjlfv1uB7p510XIa9%2BixvupwDP4Btlp28iXPG6N9vyBY0X9u9YIRU9AygnkikwX3D0KXyeMWFzZ3j4D54U4drWkozcrvOnVfJka9a2WGH5ySJUqq%2BmRQ%2F3Bkq29o2Ue%2BtV8w2TJnbjMzSowUdsSnBP9Eyp5xkrT8YPsBW6MtgeJOvYLss6IAjiH%2Fd23sbV4LWWtfuDv5NQ7FhjLfVGzlLk21rxkt3Yb5qbzysZF%2Br44MLr5kL4GOqUBvjJJw35%2FTUOHFgWenAL3gNKQUgXs3ArBgEcgWqWhTauVYpYQwgJyZPa2enXFWxlXm%2FTPuJ0M1AoHwUuM8wDxseyi87izwWmqXa3BRojy0t%2Fr%2Foybr3j8rjYN1F8aJRPbIC4MdJKWMe9YxoKLEatugZDzreePdVV8x%2BMxAGjz%2BmiO3x4kfREpQ5nctq0KwaTNZA1gnCg8vNBJ84PXIbBbMVrOzmEZ&X-Amz-Signature=e4e2e69bc3e44f03b9343a5cc348e09ff4d04012b263de896f4e14a35ce8aeaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUKTK6L%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOHS4rOvpwua%2Fy5qgAJoFI7hL1zHDjGKQxMbGI0ccJAIgDurYswbM81Q4oEr830ZIbMY428LRWyWDw8ZVPQnFiJMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXhlpG1jqsDniS00CrcA%2B5Svq4YnArg55S7PUGO3BtZ3GZE5bZXT9ZVQqbWUgZLGX2coU4rQJUjDR0c38cORLIhbw8fd7ZGwNP8cX2XS2SaC3FPToQTljGSiSfeArvAtR03ACss0x%2BGw5O4eyzXsNOL5386HQbsCZtZvSBqU%2BmtfrAMqlIESWeJYVBdVlQcX7czXJhJWOIa0bReZGj9uYzx3KV6kGMvQ2nmVjooIazXikXy20G6v03gDwbNxrreWRewgPq8j1vDrAnc5BgKRzkUbKZI%2FGmHmTr2BuCarSg4EQAzcnAzUwxi2nlCXFFry9bauBgKwnSFyvt2DNnpclTvIFCdqip0AGs1Z%2FRYGKk1u0qZ3sKvVuYI16%2FK3MdVI9OET0RsqVQM9pDIg4NTYsOOOZK5y04J6Oehkkjlfv1uB7p510XIa9%2BixvupwDP4Btlp28iXPG6N9vyBY0X9u9YIRU9AygnkikwX3D0KXyeMWFzZ3j4D54U4drWkozcrvOnVfJka9a2WGH5ySJUqq%2BmRQ%2F3Bkq29o2Ue%2BtV8w2TJnbjMzSowUdsSnBP9Eyp5xkrT8YPsBW6MtgeJOvYLss6IAjiH%2Fd23sbV4LWWtfuDv5NQ7FhjLfVGzlLk21rxkt3Yb5qbzysZF%2Br44MLr5kL4GOqUBvjJJw35%2FTUOHFgWenAL3gNKQUgXs3ArBgEcgWqWhTauVYpYQwgJyZPa2enXFWxlXm%2FTPuJ0M1AoHwUuM8wDxseyi87izwWmqXa3BRojy0t%2Fr%2Foybr3j8rjYN1F8aJRPbIC4MdJKWMe9YxoKLEatugZDzreePdVV8x%2BMxAGjz%2BmiO3x4kfREpQ5nctq0KwaTNZA1gnCg8vNBJ84PXIbBbMVrOzmEZ&X-Amz-Signature=2eb036a506369b7066c000c5321255eeefd456b261e1bd865343fc5f3b4a9f36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUKTK6L%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOHS4rOvpwua%2Fy5qgAJoFI7hL1zHDjGKQxMbGI0ccJAIgDurYswbM81Q4oEr830ZIbMY428LRWyWDw8ZVPQnFiJMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXhlpG1jqsDniS00CrcA%2B5Svq4YnArg55S7PUGO3BtZ3GZE5bZXT9ZVQqbWUgZLGX2coU4rQJUjDR0c38cORLIhbw8fd7ZGwNP8cX2XS2SaC3FPToQTljGSiSfeArvAtR03ACss0x%2BGw5O4eyzXsNOL5386HQbsCZtZvSBqU%2BmtfrAMqlIESWeJYVBdVlQcX7czXJhJWOIa0bReZGj9uYzx3KV6kGMvQ2nmVjooIazXikXy20G6v03gDwbNxrreWRewgPq8j1vDrAnc5BgKRzkUbKZI%2FGmHmTr2BuCarSg4EQAzcnAzUwxi2nlCXFFry9bauBgKwnSFyvt2DNnpclTvIFCdqip0AGs1Z%2FRYGKk1u0qZ3sKvVuYI16%2FK3MdVI9OET0RsqVQM9pDIg4NTYsOOOZK5y04J6Oehkkjlfv1uB7p510XIa9%2BixvupwDP4Btlp28iXPG6N9vyBY0X9u9YIRU9AygnkikwX3D0KXyeMWFzZ3j4D54U4drWkozcrvOnVfJka9a2WGH5ySJUqq%2BmRQ%2F3Bkq29o2Ue%2BtV8w2TJnbjMzSowUdsSnBP9Eyp5xkrT8YPsBW6MtgeJOvYLss6IAjiH%2Fd23sbV4LWWtfuDv5NQ7FhjLfVGzlLk21rxkt3Yb5qbzysZF%2Br44MLr5kL4GOqUBvjJJw35%2FTUOHFgWenAL3gNKQUgXs3ArBgEcgWqWhTauVYpYQwgJyZPa2enXFWxlXm%2FTPuJ0M1AoHwUuM8wDxseyi87izwWmqXa3BRojy0t%2Fr%2Foybr3j8rjYN1F8aJRPbIC4MdJKWMe9YxoKLEatugZDzreePdVV8x%2BMxAGjz%2BmiO3x4kfREpQ5nctq0KwaTNZA1gnCg8vNBJ84PXIbBbMVrOzmEZ&X-Amz-Signature=2eb2edff678f32a2da6784b179f4e64c953e3c6be4a9e18673e2fed7249fcf9b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

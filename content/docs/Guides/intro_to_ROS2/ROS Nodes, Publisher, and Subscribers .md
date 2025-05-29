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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XPEYFI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7f3VpKXPobeVZklrYLiHkCGcb1HZAI0nhb1O%2BlU9QZAiAS4oCWIIwReCyLcufiMhY%2Fp565BuSJCYJE4gBC5kRCuSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MW8u4xoBdVyUQezKtwD5qaoL6GwaK4Zw6ijYhP1Tf82mYh4tacmChwq%2BblS8aAwtW7dZGlxL0oZNZWRK5lIXBMlj8GyFoLxrPAbnZIEQ6SE0znSqwukEQYmFnSUXSIj5OOsH%2FNzY3YO4WF0UEZZbfg8OSPK6ZZT5GWAFZru%2FwWIP9fx7qMZuh8xYcVY%2BssSwBULLpzF4P8BooF52IjHAuId4hO4XuJECZQljmBb7xpPC%2Bk%2FNT7s6UQGBslDgGmTGKcF9uZGbZhoWG1iP%2BUFQ3IDsqaxwoXbFScrR%2BgWtmMJM6D0EeFO9U9eXTCW5RcVGX5q7PAjKmGXpHXaiSEKGJ50CB4qIpX7PHT%2FYkqYOyZoMAmVkqA6BJJ2YJHzJ6AFDk0CqEZSKkudZy01B3sugcCzTSQO8AjgwVWIOjDeEbD3XsPPeyTviNEigQ%2Fm1hK4UYmfiM1cM8o7DbZAv9XyGKLXdTLZqpkOSUvwsX4h7EH4NPpSnd13N7xwdS6o1aTw2JHV1Ng6RBn%2F9JPmBH4ef08f0AeYUlURCRoOKkxz9TD40yVxHPZDwFEBm5JbDt%2Foy392ZrH0%2FFzmR%2F8Qd2fu6tgJ1JoVTZ2pelsROMEeRJl9UKfjT6vPSF7mqbxJEKz8zYgR%2BUJ88Qeh9kgwtbLhwQY6pgEAvIMTMhYRRzzTuqBKKiWTocILqR52Ed9n7Ge1Qqowdf0BmPybGSeU2zaUAYdKrzz70NLerf9YmIHPbEsgy7q8vTfucYA1P1asw82efnGnZo%2Bb0pizdLenXGjBTtmzP8b4oFS6sFuTXDJhe%2FS0k1Z1xRIpq%2FjSH%2Bn9aAIvDECikHQbFwOINo5aV%2BHk%2FCStLTDbh8lNMk1vAjzvQo1VE%2Bu8Ix0cdj75&X-Amz-Signature=7618316371a168c92fb679312bb02cd5df46050080c3e5acc21b801e3fc7117d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XPEYFI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7f3VpKXPobeVZklrYLiHkCGcb1HZAI0nhb1O%2BlU9QZAiAS4oCWIIwReCyLcufiMhY%2Fp565BuSJCYJE4gBC5kRCuSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MW8u4xoBdVyUQezKtwD5qaoL6GwaK4Zw6ijYhP1Tf82mYh4tacmChwq%2BblS8aAwtW7dZGlxL0oZNZWRK5lIXBMlj8GyFoLxrPAbnZIEQ6SE0znSqwukEQYmFnSUXSIj5OOsH%2FNzY3YO4WF0UEZZbfg8OSPK6ZZT5GWAFZru%2FwWIP9fx7qMZuh8xYcVY%2BssSwBULLpzF4P8BooF52IjHAuId4hO4XuJECZQljmBb7xpPC%2Bk%2FNT7s6UQGBslDgGmTGKcF9uZGbZhoWG1iP%2BUFQ3IDsqaxwoXbFScrR%2BgWtmMJM6D0EeFO9U9eXTCW5RcVGX5q7PAjKmGXpHXaiSEKGJ50CB4qIpX7PHT%2FYkqYOyZoMAmVkqA6BJJ2YJHzJ6AFDk0CqEZSKkudZy01B3sugcCzTSQO8AjgwVWIOjDeEbD3XsPPeyTviNEigQ%2Fm1hK4UYmfiM1cM8o7DbZAv9XyGKLXdTLZqpkOSUvwsX4h7EH4NPpSnd13N7xwdS6o1aTw2JHV1Ng6RBn%2F9JPmBH4ef08f0AeYUlURCRoOKkxz9TD40yVxHPZDwFEBm5JbDt%2Foy392ZrH0%2FFzmR%2F8Qd2fu6tgJ1JoVTZ2pelsROMEeRJl9UKfjT6vPSF7mqbxJEKz8zYgR%2BUJ88Qeh9kgwtbLhwQY6pgEAvIMTMhYRRzzTuqBKKiWTocILqR52Ed9n7Ge1Qqowdf0BmPybGSeU2zaUAYdKrzz70NLerf9YmIHPbEsgy7q8vTfucYA1P1asw82efnGnZo%2Bb0pizdLenXGjBTtmzP8b4oFS6sFuTXDJhe%2FS0k1Z1xRIpq%2FjSH%2Bn9aAIvDECikHQbFwOINo5aV%2BHk%2FCStLTDbh8lNMk1vAjzvQo1VE%2Bu8Ix0cdj75&X-Amz-Signature=6f7b811bd146c68d53efc6da4f481ccd58205818f66c19d454a4f71d9f9bff48&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XPEYFI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7f3VpKXPobeVZklrYLiHkCGcb1HZAI0nhb1O%2BlU9QZAiAS4oCWIIwReCyLcufiMhY%2Fp565BuSJCYJE4gBC5kRCuSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MW8u4xoBdVyUQezKtwD5qaoL6GwaK4Zw6ijYhP1Tf82mYh4tacmChwq%2BblS8aAwtW7dZGlxL0oZNZWRK5lIXBMlj8GyFoLxrPAbnZIEQ6SE0znSqwukEQYmFnSUXSIj5OOsH%2FNzY3YO4WF0UEZZbfg8OSPK6ZZT5GWAFZru%2FwWIP9fx7qMZuh8xYcVY%2BssSwBULLpzF4P8BooF52IjHAuId4hO4XuJECZQljmBb7xpPC%2Bk%2FNT7s6UQGBslDgGmTGKcF9uZGbZhoWG1iP%2BUFQ3IDsqaxwoXbFScrR%2BgWtmMJM6D0EeFO9U9eXTCW5RcVGX5q7PAjKmGXpHXaiSEKGJ50CB4qIpX7PHT%2FYkqYOyZoMAmVkqA6BJJ2YJHzJ6AFDk0CqEZSKkudZy01B3sugcCzTSQO8AjgwVWIOjDeEbD3XsPPeyTviNEigQ%2Fm1hK4UYmfiM1cM8o7DbZAv9XyGKLXdTLZqpkOSUvwsX4h7EH4NPpSnd13N7xwdS6o1aTw2JHV1Ng6RBn%2F9JPmBH4ef08f0AeYUlURCRoOKkxz9TD40yVxHPZDwFEBm5JbDt%2Foy392ZrH0%2FFzmR%2F8Qd2fu6tgJ1JoVTZ2pelsROMEeRJl9UKfjT6vPSF7mqbxJEKz8zYgR%2BUJ88Qeh9kgwtbLhwQY6pgEAvIMTMhYRRzzTuqBKKiWTocILqR52Ed9n7Ge1Qqowdf0BmPybGSeU2zaUAYdKrzz70NLerf9YmIHPbEsgy7q8vTfucYA1P1asw82efnGnZo%2Bb0pizdLenXGjBTtmzP8b4oFS6sFuTXDJhe%2FS0k1Z1xRIpq%2FjSH%2Bn9aAIvDECikHQbFwOINo5aV%2BHk%2FCStLTDbh8lNMk1vAjzvQo1VE%2Bu8Ix0cdj75&X-Amz-Signature=4d6900bd6b6152a3ee5df0a6c0418ee2d5d17936a0aaf371f088e6f984090dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XPEYFI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7f3VpKXPobeVZklrYLiHkCGcb1HZAI0nhb1O%2BlU9QZAiAS4oCWIIwReCyLcufiMhY%2Fp565BuSJCYJE4gBC5kRCuSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MW8u4xoBdVyUQezKtwD5qaoL6GwaK4Zw6ijYhP1Tf82mYh4tacmChwq%2BblS8aAwtW7dZGlxL0oZNZWRK5lIXBMlj8GyFoLxrPAbnZIEQ6SE0znSqwukEQYmFnSUXSIj5OOsH%2FNzY3YO4WF0UEZZbfg8OSPK6ZZT5GWAFZru%2FwWIP9fx7qMZuh8xYcVY%2BssSwBULLpzF4P8BooF52IjHAuId4hO4XuJECZQljmBb7xpPC%2Bk%2FNT7s6UQGBslDgGmTGKcF9uZGbZhoWG1iP%2BUFQ3IDsqaxwoXbFScrR%2BgWtmMJM6D0EeFO9U9eXTCW5RcVGX5q7PAjKmGXpHXaiSEKGJ50CB4qIpX7PHT%2FYkqYOyZoMAmVkqA6BJJ2YJHzJ6AFDk0CqEZSKkudZy01B3sugcCzTSQO8AjgwVWIOjDeEbD3XsPPeyTviNEigQ%2Fm1hK4UYmfiM1cM8o7DbZAv9XyGKLXdTLZqpkOSUvwsX4h7EH4NPpSnd13N7xwdS6o1aTw2JHV1Ng6RBn%2F9JPmBH4ef08f0AeYUlURCRoOKkxz9TD40yVxHPZDwFEBm5JbDt%2Foy392ZrH0%2FFzmR%2F8Qd2fu6tgJ1JoVTZ2pelsROMEeRJl9UKfjT6vPSF7mqbxJEKz8zYgR%2BUJ88Qeh9kgwtbLhwQY6pgEAvIMTMhYRRzzTuqBKKiWTocILqR52Ed9n7Ge1Qqowdf0BmPybGSeU2zaUAYdKrzz70NLerf9YmIHPbEsgy7q8vTfucYA1P1asw82efnGnZo%2Bb0pizdLenXGjBTtmzP8b4oFS6sFuTXDJhe%2FS0k1Z1xRIpq%2FjSH%2Bn9aAIvDECikHQbFwOINo5aV%2BHk%2FCStLTDbh8lNMk1vAjzvQo1VE%2Bu8Ix0cdj75&X-Amz-Signature=42f5a963ea776937dccc61b4b26eccf63a552c873d544a48b851d3d96b17b19c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XPEYFI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7f3VpKXPobeVZklrYLiHkCGcb1HZAI0nhb1O%2BlU9QZAiAS4oCWIIwReCyLcufiMhY%2Fp565BuSJCYJE4gBC5kRCuSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MW8u4xoBdVyUQezKtwD5qaoL6GwaK4Zw6ijYhP1Tf82mYh4tacmChwq%2BblS8aAwtW7dZGlxL0oZNZWRK5lIXBMlj8GyFoLxrPAbnZIEQ6SE0znSqwukEQYmFnSUXSIj5OOsH%2FNzY3YO4WF0UEZZbfg8OSPK6ZZT5GWAFZru%2FwWIP9fx7qMZuh8xYcVY%2BssSwBULLpzF4P8BooF52IjHAuId4hO4XuJECZQljmBb7xpPC%2Bk%2FNT7s6UQGBslDgGmTGKcF9uZGbZhoWG1iP%2BUFQ3IDsqaxwoXbFScrR%2BgWtmMJM6D0EeFO9U9eXTCW5RcVGX5q7PAjKmGXpHXaiSEKGJ50CB4qIpX7PHT%2FYkqYOyZoMAmVkqA6BJJ2YJHzJ6AFDk0CqEZSKkudZy01B3sugcCzTSQO8AjgwVWIOjDeEbD3XsPPeyTviNEigQ%2Fm1hK4UYmfiM1cM8o7DbZAv9XyGKLXdTLZqpkOSUvwsX4h7EH4NPpSnd13N7xwdS6o1aTw2JHV1Ng6RBn%2F9JPmBH4ef08f0AeYUlURCRoOKkxz9TD40yVxHPZDwFEBm5JbDt%2Foy392ZrH0%2FFzmR%2F8Qd2fu6tgJ1JoVTZ2pelsROMEeRJl9UKfjT6vPSF7mqbxJEKz8zYgR%2BUJ88Qeh9kgwtbLhwQY6pgEAvIMTMhYRRzzTuqBKKiWTocILqR52Ed9n7Ge1Qqowdf0BmPybGSeU2zaUAYdKrzz70NLerf9YmIHPbEsgy7q8vTfucYA1P1asw82efnGnZo%2Bb0pizdLenXGjBTtmzP8b4oFS6sFuTXDJhe%2FS0k1Z1xRIpq%2FjSH%2Bn9aAIvDECikHQbFwOINo5aV%2BHk%2FCStLTDbh8lNMk1vAjzvQo1VE%2Bu8Ix0cdj75&X-Amz-Signature=154e6248f128566a9bbb2551a923eecb64315f177248fe974945db3826492484&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XPEYFI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7f3VpKXPobeVZklrYLiHkCGcb1HZAI0nhb1O%2BlU9QZAiAS4oCWIIwReCyLcufiMhY%2Fp565BuSJCYJE4gBC5kRCuSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MW8u4xoBdVyUQezKtwD5qaoL6GwaK4Zw6ijYhP1Tf82mYh4tacmChwq%2BblS8aAwtW7dZGlxL0oZNZWRK5lIXBMlj8GyFoLxrPAbnZIEQ6SE0znSqwukEQYmFnSUXSIj5OOsH%2FNzY3YO4WF0UEZZbfg8OSPK6ZZT5GWAFZru%2FwWIP9fx7qMZuh8xYcVY%2BssSwBULLpzF4P8BooF52IjHAuId4hO4XuJECZQljmBb7xpPC%2Bk%2FNT7s6UQGBslDgGmTGKcF9uZGbZhoWG1iP%2BUFQ3IDsqaxwoXbFScrR%2BgWtmMJM6D0EeFO9U9eXTCW5RcVGX5q7PAjKmGXpHXaiSEKGJ50CB4qIpX7PHT%2FYkqYOyZoMAmVkqA6BJJ2YJHzJ6AFDk0CqEZSKkudZy01B3sugcCzTSQO8AjgwVWIOjDeEbD3XsPPeyTviNEigQ%2Fm1hK4UYmfiM1cM8o7DbZAv9XyGKLXdTLZqpkOSUvwsX4h7EH4NPpSnd13N7xwdS6o1aTw2JHV1Ng6RBn%2F9JPmBH4ef08f0AeYUlURCRoOKkxz9TD40yVxHPZDwFEBm5JbDt%2Foy392ZrH0%2FFzmR%2F8Qd2fu6tgJ1JoVTZ2pelsROMEeRJl9UKfjT6vPSF7mqbxJEKz8zYgR%2BUJ88Qeh9kgwtbLhwQY6pgEAvIMTMhYRRzzTuqBKKiWTocILqR52Ed9n7Ge1Qqowdf0BmPybGSeU2zaUAYdKrzz70NLerf9YmIHPbEsgy7q8vTfucYA1P1asw82efnGnZo%2Bb0pizdLenXGjBTtmzP8b4oFS6sFuTXDJhe%2FS0k1Z1xRIpq%2FjSH%2Bn9aAIvDECikHQbFwOINo5aV%2BHk%2FCStLTDbh8lNMk1vAjzvQo1VE%2Bu8Ix0cdj75&X-Amz-Signature=799120c50756cdbc4ea0d5b778f777112c033f8a1eeca4d0445f01541d136294&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XPEYFI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7f3VpKXPobeVZklrYLiHkCGcb1HZAI0nhb1O%2BlU9QZAiAS4oCWIIwReCyLcufiMhY%2Fp565BuSJCYJE4gBC5kRCuSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MW8u4xoBdVyUQezKtwD5qaoL6GwaK4Zw6ijYhP1Tf82mYh4tacmChwq%2BblS8aAwtW7dZGlxL0oZNZWRK5lIXBMlj8GyFoLxrPAbnZIEQ6SE0znSqwukEQYmFnSUXSIj5OOsH%2FNzY3YO4WF0UEZZbfg8OSPK6ZZT5GWAFZru%2FwWIP9fx7qMZuh8xYcVY%2BssSwBULLpzF4P8BooF52IjHAuId4hO4XuJECZQljmBb7xpPC%2Bk%2FNT7s6UQGBslDgGmTGKcF9uZGbZhoWG1iP%2BUFQ3IDsqaxwoXbFScrR%2BgWtmMJM6D0EeFO9U9eXTCW5RcVGX5q7PAjKmGXpHXaiSEKGJ50CB4qIpX7PHT%2FYkqYOyZoMAmVkqA6BJJ2YJHzJ6AFDk0CqEZSKkudZy01B3sugcCzTSQO8AjgwVWIOjDeEbD3XsPPeyTviNEigQ%2Fm1hK4UYmfiM1cM8o7DbZAv9XyGKLXdTLZqpkOSUvwsX4h7EH4NPpSnd13N7xwdS6o1aTw2JHV1Ng6RBn%2F9JPmBH4ef08f0AeYUlURCRoOKkxz9TD40yVxHPZDwFEBm5JbDt%2Foy392ZrH0%2FFzmR%2F8Qd2fu6tgJ1JoVTZ2pelsROMEeRJl9UKfjT6vPSF7mqbxJEKz8zYgR%2BUJ88Qeh9kgwtbLhwQY6pgEAvIMTMhYRRzzTuqBKKiWTocILqR52Ed9n7Ge1Qqowdf0BmPybGSeU2zaUAYdKrzz70NLerf9YmIHPbEsgy7q8vTfucYA1P1asw82efnGnZo%2Bb0pizdLenXGjBTtmzP8b4oFS6sFuTXDJhe%2FS0k1Z1xRIpq%2FjSH%2Bn9aAIvDECikHQbFwOINo5aV%2BHk%2FCStLTDbh8lNMk1vAjzvQo1VE%2Bu8Ix0cdj75&X-Amz-Signature=7cbf9184da6209e2653f42d49ba79bb9ac30224f3b844d5c7659e294fe0059e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XPEYFI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7f3VpKXPobeVZklrYLiHkCGcb1HZAI0nhb1O%2BlU9QZAiAS4oCWIIwReCyLcufiMhY%2Fp565BuSJCYJE4gBC5kRCuSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MW8u4xoBdVyUQezKtwD5qaoL6GwaK4Zw6ijYhP1Tf82mYh4tacmChwq%2BblS8aAwtW7dZGlxL0oZNZWRK5lIXBMlj8GyFoLxrPAbnZIEQ6SE0znSqwukEQYmFnSUXSIj5OOsH%2FNzY3YO4WF0UEZZbfg8OSPK6ZZT5GWAFZru%2FwWIP9fx7qMZuh8xYcVY%2BssSwBULLpzF4P8BooF52IjHAuId4hO4XuJECZQljmBb7xpPC%2Bk%2FNT7s6UQGBslDgGmTGKcF9uZGbZhoWG1iP%2BUFQ3IDsqaxwoXbFScrR%2BgWtmMJM6D0EeFO9U9eXTCW5RcVGX5q7PAjKmGXpHXaiSEKGJ50CB4qIpX7PHT%2FYkqYOyZoMAmVkqA6BJJ2YJHzJ6AFDk0CqEZSKkudZy01B3sugcCzTSQO8AjgwVWIOjDeEbD3XsPPeyTviNEigQ%2Fm1hK4UYmfiM1cM8o7DbZAv9XyGKLXdTLZqpkOSUvwsX4h7EH4NPpSnd13N7xwdS6o1aTw2JHV1Ng6RBn%2F9JPmBH4ef08f0AeYUlURCRoOKkxz9TD40yVxHPZDwFEBm5JbDt%2Foy392ZrH0%2FFzmR%2F8Qd2fu6tgJ1JoVTZ2pelsROMEeRJl9UKfjT6vPSF7mqbxJEKz8zYgR%2BUJ88Qeh9kgwtbLhwQY6pgEAvIMTMhYRRzzTuqBKKiWTocILqR52Ed9n7Ge1Qqowdf0BmPybGSeU2zaUAYdKrzz70NLerf9YmIHPbEsgy7q8vTfucYA1P1asw82efnGnZo%2Bb0pizdLenXGjBTtmzP8b4oFS6sFuTXDJhe%2FS0k1Z1xRIpq%2FjSH%2Bn9aAIvDECikHQbFwOINo5aV%2BHk%2FCStLTDbh8lNMk1vAjzvQo1VE%2Bu8Ix0cdj75&X-Amz-Signature=d58cf995d99034a2ce834f55f57e3db43deb1b98868e8d1f4c44690997a6a7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

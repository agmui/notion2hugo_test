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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJMEA5M%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDio%2F%2BSNzQVEEkSz9KXs4JOOBnKIxfSgSykghYA2gWMjAIhAP7Bp%2BgiOLGC0FDpIyGnuIn9BJgVEkW9oXWQ%2B6%2Bq1QGDKv8DCF0QABoMNjM3NDIzMTgzODA1IgwXKS6qntYYDySp048q3AN4F1NTMUQCYmV2%2FJ3qyQ9KdJGVDfZFRH5V%2FPhw0K7LwIs3E%2Fi8YcgaBY56e414X7ygUS5eepXVYGdQhRXifBC%2B3MTucjqq8n97mc2lU11%2BOyqkWQaH%2BDRd5V3ArGOlS8m9QhCuMD5EuzOO5ffcwICKLNIEN9sDwbOYJ9AJR6dSL%2FEQYLVBnbEd6l03lJgfMNCA9LpP7bA6wbxfdLVwo4xPYGOey%2FkTa9jE%2BWCaDArcMbl%2FYUZ%2F6O2kiI4bdNyxd8i5ZZPJyq0o1C7Dri%2B2fvNopFD0HuLAinmDCpLXToXUBwmFGP519nvoO8hdPjffphCYXFNHfcdoWxrNNRWEQRUOmZL20SXvKhD2KkbxBihUOseIxVdUGUC2k4zsjzWWZ1jemcOii6OJ%2BgXJ5qUb9TwMM3pnLMWFudpwCrCdR5CZIB6B2sdBP7k%2BnZt5SyiGHaTVS9zQZrd8AuC4o65Y7828k2GwpChGJhMwRPA%2BGWl7zcL%2BVFa%2FFj9wgJ0kk6GrlQlFgU9Lat%2Fo4PSQcUcdujS6qdWEFrSLHhnCT4HRKtvNvGMSYbN%2FfLJde8jfMg1J7BbHeAR8PVAIZk4pWFOl0GxB5ZlJz0RqEMAs031ac6ETukyhd9uAH7oEVJevdzDNnce9BjqkAfG03wJCJWoDj8XevmraKazoryk2OzbktqcO92U3fPsJLHxvXHWWWo3TR4qz5N%2FMRRnDuVqDYFHB0GNswg1PFlSqcQ6VpkuCNw44cRSO4d9DBVh3Nrwsw07E6eoNJWHCIEa%2Fe5UMlr6wNgJwIT7gC%2F4v%2BB10Wv2naUj1bld5LLTUBzWr6FIxp0lBCrmvIfu%2Bjepm1l94KQLJkn%2FutL1lhDHm6Ony&X-Amz-Signature=ffe97ab733c60735e66141624d1ad5f4cc7067ce1d27474113eb9c0315f81f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJMEA5M%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDio%2F%2BSNzQVEEkSz9KXs4JOOBnKIxfSgSykghYA2gWMjAIhAP7Bp%2BgiOLGC0FDpIyGnuIn9BJgVEkW9oXWQ%2B6%2Bq1QGDKv8DCF0QABoMNjM3NDIzMTgzODA1IgwXKS6qntYYDySp048q3AN4F1NTMUQCYmV2%2FJ3qyQ9KdJGVDfZFRH5V%2FPhw0K7LwIs3E%2Fi8YcgaBY56e414X7ygUS5eepXVYGdQhRXifBC%2B3MTucjqq8n97mc2lU11%2BOyqkWQaH%2BDRd5V3ArGOlS8m9QhCuMD5EuzOO5ffcwICKLNIEN9sDwbOYJ9AJR6dSL%2FEQYLVBnbEd6l03lJgfMNCA9LpP7bA6wbxfdLVwo4xPYGOey%2FkTa9jE%2BWCaDArcMbl%2FYUZ%2F6O2kiI4bdNyxd8i5ZZPJyq0o1C7Dri%2B2fvNopFD0HuLAinmDCpLXToXUBwmFGP519nvoO8hdPjffphCYXFNHfcdoWxrNNRWEQRUOmZL20SXvKhD2KkbxBihUOseIxVdUGUC2k4zsjzWWZ1jemcOii6OJ%2BgXJ5qUb9TwMM3pnLMWFudpwCrCdR5CZIB6B2sdBP7k%2BnZt5SyiGHaTVS9zQZrd8AuC4o65Y7828k2GwpChGJhMwRPA%2BGWl7zcL%2BVFa%2FFj9wgJ0kk6GrlQlFgU9Lat%2Fo4PSQcUcdujS6qdWEFrSLHhnCT4HRKtvNvGMSYbN%2FfLJde8jfMg1J7BbHeAR8PVAIZk4pWFOl0GxB5ZlJz0RqEMAs031ac6ETukyhd9uAH7oEVJevdzDNnce9BjqkAfG03wJCJWoDj8XevmraKazoryk2OzbktqcO92U3fPsJLHxvXHWWWo3TR4qz5N%2FMRRnDuVqDYFHB0GNswg1PFlSqcQ6VpkuCNw44cRSO4d9DBVh3Nrwsw07E6eoNJWHCIEa%2Fe5UMlr6wNgJwIT7gC%2F4v%2BB10Wv2naUj1bld5LLTUBzWr6FIxp0lBCrmvIfu%2Bjepm1l94KQLJkn%2FutL1lhDHm6Ony&X-Amz-Signature=9c5670df93f2f6017c825928d669fb970176e6f09870f39ae5032cb51c1750b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJMEA5M%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDio%2F%2BSNzQVEEkSz9KXs4JOOBnKIxfSgSykghYA2gWMjAIhAP7Bp%2BgiOLGC0FDpIyGnuIn9BJgVEkW9oXWQ%2B6%2Bq1QGDKv8DCF0QABoMNjM3NDIzMTgzODA1IgwXKS6qntYYDySp048q3AN4F1NTMUQCYmV2%2FJ3qyQ9KdJGVDfZFRH5V%2FPhw0K7LwIs3E%2Fi8YcgaBY56e414X7ygUS5eepXVYGdQhRXifBC%2B3MTucjqq8n97mc2lU11%2BOyqkWQaH%2BDRd5V3ArGOlS8m9QhCuMD5EuzOO5ffcwICKLNIEN9sDwbOYJ9AJR6dSL%2FEQYLVBnbEd6l03lJgfMNCA9LpP7bA6wbxfdLVwo4xPYGOey%2FkTa9jE%2BWCaDArcMbl%2FYUZ%2F6O2kiI4bdNyxd8i5ZZPJyq0o1C7Dri%2B2fvNopFD0HuLAinmDCpLXToXUBwmFGP519nvoO8hdPjffphCYXFNHfcdoWxrNNRWEQRUOmZL20SXvKhD2KkbxBihUOseIxVdUGUC2k4zsjzWWZ1jemcOii6OJ%2BgXJ5qUb9TwMM3pnLMWFudpwCrCdR5CZIB6B2sdBP7k%2BnZt5SyiGHaTVS9zQZrd8AuC4o65Y7828k2GwpChGJhMwRPA%2BGWl7zcL%2BVFa%2FFj9wgJ0kk6GrlQlFgU9Lat%2Fo4PSQcUcdujS6qdWEFrSLHhnCT4HRKtvNvGMSYbN%2FfLJde8jfMg1J7BbHeAR8PVAIZk4pWFOl0GxB5ZlJz0RqEMAs031ac6ETukyhd9uAH7oEVJevdzDNnce9BjqkAfG03wJCJWoDj8XevmraKazoryk2OzbktqcO92U3fPsJLHxvXHWWWo3TR4qz5N%2FMRRnDuVqDYFHB0GNswg1PFlSqcQ6VpkuCNw44cRSO4d9DBVh3Nrwsw07E6eoNJWHCIEa%2Fe5UMlr6wNgJwIT7gC%2F4v%2BB10Wv2naUj1bld5LLTUBzWr6FIxp0lBCrmvIfu%2Bjepm1l94KQLJkn%2FutL1lhDHm6Ony&X-Amz-Signature=b83c1120ec35aeb1de6782a888114755de9d58ea8a651b5d696d7c7f764ec097&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJMEA5M%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDio%2F%2BSNzQVEEkSz9KXs4JOOBnKIxfSgSykghYA2gWMjAIhAP7Bp%2BgiOLGC0FDpIyGnuIn9BJgVEkW9oXWQ%2B6%2Bq1QGDKv8DCF0QABoMNjM3NDIzMTgzODA1IgwXKS6qntYYDySp048q3AN4F1NTMUQCYmV2%2FJ3qyQ9KdJGVDfZFRH5V%2FPhw0K7LwIs3E%2Fi8YcgaBY56e414X7ygUS5eepXVYGdQhRXifBC%2B3MTucjqq8n97mc2lU11%2BOyqkWQaH%2BDRd5V3ArGOlS8m9QhCuMD5EuzOO5ffcwICKLNIEN9sDwbOYJ9AJR6dSL%2FEQYLVBnbEd6l03lJgfMNCA9LpP7bA6wbxfdLVwo4xPYGOey%2FkTa9jE%2BWCaDArcMbl%2FYUZ%2F6O2kiI4bdNyxd8i5ZZPJyq0o1C7Dri%2B2fvNopFD0HuLAinmDCpLXToXUBwmFGP519nvoO8hdPjffphCYXFNHfcdoWxrNNRWEQRUOmZL20SXvKhD2KkbxBihUOseIxVdUGUC2k4zsjzWWZ1jemcOii6OJ%2BgXJ5qUb9TwMM3pnLMWFudpwCrCdR5CZIB6B2sdBP7k%2BnZt5SyiGHaTVS9zQZrd8AuC4o65Y7828k2GwpChGJhMwRPA%2BGWl7zcL%2BVFa%2FFj9wgJ0kk6GrlQlFgU9Lat%2Fo4PSQcUcdujS6qdWEFrSLHhnCT4HRKtvNvGMSYbN%2FfLJde8jfMg1J7BbHeAR8PVAIZk4pWFOl0GxB5ZlJz0RqEMAs031ac6ETukyhd9uAH7oEVJevdzDNnce9BjqkAfG03wJCJWoDj8XevmraKazoryk2OzbktqcO92U3fPsJLHxvXHWWWo3TR4qz5N%2FMRRnDuVqDYFHB0GNswg1PFlSqcQ6VpkuCNw44cRSO4d9DBVh3Nrwsw07E6eoNJWHCIEa%2Fe5UMlr6wNgJwIT7gC%2F4v%2BB10Wv2naUj1bld5LLTUBzWr6FIxp0lBCrmvIfu%2Bjepm1l94KQLJkn%2FutL1lhDHm6Ony&X-Amz-Signature=0b56a0f196ab06728e9a91aa3eb8a940512a7a004d7a9f89030f880dca6bdfaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJMEA5M%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDio%2F%2BSNzQVEEkSz9KXs4JOOBnKIxfSgSykghYA2gWMjAIhAP7Bp%2BgiOLGC0FDpIyGnuIn9BJgVEkW9oXWQ%2B6%2Bq1QGDKv8DCF0QABoMNjM3NDIzMTgzODA1IgwXKS6qntYYDySp048q3AN4F1NTMUQCYmV2%2FJ3qyQ9KdJGVDfZFRH5V%2FPhw0K7LwIs3E%2Fi8YcgaBY56e414X7ygUS5eepXVYGdQhRXifBC%2B3MTucjqq8n97mc2lU11%2BOyqkWQaH%2BDRd5V3ArGOlS8m9QhCuMD5EuzOO5ffcwICKLNIEN9sDwbOYJ9AJR6dSL%2FEQYLVBnbEd6l03lJgfMNCA9LpP7bA6wbxfdLVwo4xPYGOey%2FkTa9jE%2BWCaDArcMbl%2FYUZ%2F6O2kiI4bdNyxd8i5ZZPJyq0o1C7Dri%2B2fvNopFD0HuLAinmDCpLXToXUBwmFGP519nvoO8hdPjffphCYXFNHfcdoWxrNNRWEQRUOmZL20SXvKhD2KkbxBihUOseIxVdUGUC2k4zsjzWWZ1jemcOii6OJ%2BgXJ5qUb9TwMM3pnLMWFudpwCrCdR5CZIB6B2sdBP7k%2BnZt5SyiGHaTVS9zQZrd8AuC4o65Y7828k2GwpChGJhMwRPA%2BGWl7zcL%2BVFa%2FFj9wgJ0kk6GrlQlFgU9Lat%2Fo4PSQcUcdujS6qdWEFrSLHhnCT4HRKtvNvGMSYbN%2FfLJde8jfMg1J7BbHeAR8PVAIZk4pWFOl0GxB5ZlJz0RqEMAs031ac6ETukyhd9uAH7oEVJevdzDNnce9BjqkAfG03wJCJWoDj8XevmraKazoryk2OzbktqcO92U3fPsJLHxvXHWWWo3TR4qz5N%2FMRRnDuVqDYFHB0GNswg1PFlSqcQ6VpkuCNw44cRSO4d9DBVh3Nrwsw07E6eoNJWHCIEa%2Fe5UMlr6wNgJwIT7gC%2F4v%2BB10Wv2naUj1bld5LLTUBzWr6FIxp0lBCrmvIfu%2Bjepm1l94KQLJkn%2FutL1lhDHm6Ony&X-Amz-Signature=17be62c8cc291dd804123593b55240310951b6a0690f4c4a3d742e3b3cbafa65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJMEA5M%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDio%2F%2BSNzQVEEkSz9KXs4JOOBnKIxfSgSykghYA2gWMjAIhAP7Bp%2BgiOLGC0FDpIyGnuIn9BJgVEkW9oXWQ%2B6%2Bq1QGDKv8DCF0QABoMNjM3NDIzMTgzODA1IgwXKS6qntYYDySp048q3AN4F1NTMUQCYmV2%2FJ3qyQ9KdJGVDfZFRH5V%2FPhw0K7LwIs3E%2Fi8YcgaBY56e414X7ygUS5eepXVYGdQhRXifBC%2B3MTucjqq8n97mc2lU11%2BOyqkWQaH%2BDRd5V3ArGOlS8m9QhCuMD5EuzOO5ffcwICKLNIEN9sDwbOYJ9AJR6dSL%2FEQYLVBnbEd6l03lJgfMNCA9LpP7bA6wbxfdLVwo4xPYGOey%2FkTa9jE%2BWCaDArcMbl%2FYUZ%2F6O2kiI4bdNyxd8i5ZZPJyq0o1C7Dri%2B2fvNopFD0HuLAinmDCpLXToXUBwmFGP519nvoO8hdPjffphCYXFNHfcdoWxrNNRWEQRUOmZL20SXvKhD2KkbxBihUOseIxVdUGUC2k4zsjzWWZ1jemcOii6OJ%2BgXJ5qUb9TwMM3pnLMWFudpwCrCdR5CZIB6B2sdBP7k%2BnZt5SyiGHaTVS9zQZrd8AuC4o65Y7828k2GwpChGJhMwRPA%2BGWl7zcL%2BVFa%2FFj9wgJ0kk6GrlQlFgU9Lat%2Fo4PSQcUcdujS6qdWEFrSLHhnCT4HRKtvNvGMSYbN%2FfLJde8jfMg1J7BbHeAR8PVAIZk4pWFOl0GxB5ZlJz0RqEMAs031ac6ETukyhd9uAH7oEVJevdzDNnce9BjqkAfG03wJCJWoDj8XevmraKazoryk2OzbktqcO92U3fPsJLHxvXHWWWo3TR4qz5N%2FMRRnDuVqDYFHB0GNswg1PFlSqcQ6VpkuCNw44cRSO4d9DBVh3Nrwsw07E6eoNJWHCIEa%2Fe5UMlr6wNgJwIT7gC%2F4v%2BB10Wv2naUj1bld5LLTUBzWr6FIxp0lBCrmvIfu%2Bjepm1l94KQLJkn%2FutL1lhDHm6Ony&X-Amz-Signature=e6ab9edc0d1591b8fd9e37dd189e8a7f015c0d7cc0670c6dd375922319e5863f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJMEA5M%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDio%2F%2BSNzQVEEkSz9KXs4JOOBnKIxfSgSykghYA2gWMjAIhAP7Bp%2BgiOLGC0FDpIyGnuIn9BJgVEkW9oXWQ%2B6%2Bq1QGDKv8DCF0QABoMNjM3NDIzMTgzODA1IgwXKS6qntYYDySp048q3AN4F1NTMUQCYmV2%2FJ3qyQ9KdJGVDfZFRH5V%2FPhw0K7LwIs3E%2Fi8YcgaBY56e414X7ygUS5eepXVYGdQhRXifBC%2B3MTucjqq8n97mc2lU11%2BOyqkWQaH%2BDRd5V3ArGOlS8m9QhCuMD5EuzOO5ffcwICKLNIEN9sDwbOYJ9AJR6dSL%2FEQYLVBnbEd6l03lJgfMNCA9LpP7bA6wbxfdLVwo4xPYGOey%2FkTa9jE%2BWCaDArcMbl%2FYUZ%2F6O2kiI4bdNyxd8i5ZZPJyq0o1C7Dri%2B2fvNopFD0HuLAinmDCpLXToXUBwmFGP519nvoO8hdPjffphCYXFNHfcdoWxrNNRWEQRUOmZL20SXvKhD2KkbxBihUOseIxVdUGUC2k4zsjzWWZ1jemcOii6OJ%2BgXJ5qUb9TwMM3pnLMWFudpwCrCdR5CZIB6B2sdBP7k%2BnZt5SyiGHaTVS9zQZrd8AuC4o65Y7828k2GwpChGJhMwRPA%2BGWl7zcL%2BVFa%2FFj9wgJ0kk6GrlQlFgU9Lat%2Fo4PSQcUcdujS6qdWEFrSLHhnCT4HRKtvNvGMSYbN%2FfLJde8jfMg1J7BbHeAR8PVAIZk4pWFOl0GxB5ZlJz0RqEMAs031ac6ETukyhd9uAH7oEVJevdzDNnce9BjqkAfG03wJCJWoDj8XevmraKazoryk2OzbktqcO92U3fPsJLHxvXHWWWo3TR4qz5N%2FMRRnDuVqDYFHB0GNswg1PFlSqcQ6VpkuCNw44cRSO4d9DBVh3Nrwsw07E6eoNJWHCIEa%2Fe5UMlr6wNgJwIT7gC%2F4v%2BB10Wv2naUj1bld5LLTUBzWr6FIxp0lBCrmvIfu%2Bjepm1l94KQLJkn%2FutL1lhDHm6Ony&X-Amz-Signature=461b38d69cdfe04e511d1e42a2be41d4bed84bb6097bb618b562d95b13c80d83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJMEA5M%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDio%2F%2BSNzQVEEkSz9KXs4JOOBnKIxfSgSykghYA2gWMjAIhAP7Bp%2BgiOLGC0FDpIyGnuIn9BJgVEkW9oXWQ%2B6%2Bq1QGDKv8DCF0QABoMNjM3NDIzMTgzODA1IgwXKS6qntYYDySp048q3AN4F1NTMUQCYmV2%2FJ3qyQ9KdJGVDfZFRH5V%2FPhw0K7LwIs3E%2Fi8YcgaBY56e414X7ygUS5eepXVYGdQhRXifBC%2B3MTucjqq8n97mc2lU11%2BOyqkWQaH%2BDRd5V3ArGOlS8m9QhCuMD5EuzOO5ffcwICKLNIEN9sDwbOYJ9AJR6dSL%2FEQYLVBnbEd6l03lJgfMNCA9LpP7bA6wbxfdLVwo4xPYGOey%2FkTa9jE%2BWCaDArcMbl%2FYUZ%2F6O2kiI4bdNyxd8i5ZZPJyq0o1C7Dri%2B2fvNopFD0HuLAinmDCpLXToXUBwmFGP519nvoO8hdPjffphCYXFNHfcdoWxrNNRWEQRUOmZL20SXvKhD2KkbxBihUOseIxVdUGUC2k4zsjzWWZ1jemcOii6OJ%2BgXJ5qUb9TwMM3pnLMWFudpwCrCdR5CZIB6B2sdBP7k%2BnZt5SyiGHaTVS9zQZrd8AuC4o65Y7828k2GwpChGJhMwRPA%2BGWl7zcL%2BVFa%2FFj9wgJ0kk6GrlQlFgU9Lat%2Fo4PSQcUcdujS6qdWEFrSLHhnCT4HRKtvNvGMSYbN%2FfLJde8jfMg1J7BbHeAR8PVAIZk4pWFOl0GxB5ZlJz0RqEMAs031ac6ETukyhd9uAH7oEVJevdzDNnce9BjqkAfG03wJCJWoDj8XevmraKazoryk2OzbktqcO92U3fPsJLHxvXHWWWo3TR4qz5N%2FMRRnDuVqDYFHB0GNswg1PFlSqcQ6VpkuCNw44cRSO4d9DBVh3Nrwsw07E6eoNJWHCIEa%2Fe5UMlr6wNgJwIT7gC%2F4v%2BB10Wv2naUj1bld5LLTUBzWr6FIxp0lBCrmvIfu%2Bjepm1l94KQLJkn%2FutL1lhDHm6Ony&X-Amz-Signature=db2ac55ec50fd5480364d30c402e0131651cc71de80f7e65ab08fb627c65a381&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

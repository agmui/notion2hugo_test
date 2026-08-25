---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZTBOPM%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA1H53iJVg%2BntfSRFxJb118dJWiGt5fmyaoqJfJ45xHpAiBnnIYFKWMRD5J6jfJtS4ZZEb4CH6JY47u20bri4rDwvSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1Slo%2FiGaazcTI6vKtwDjZnWHNGJt%2BLNqHbEfTORCnXus9envwIJPJEHDR9B3ysYqWTZ%2Fn57GQ%2F6r2xSnFBE4F%2FTSzitkNF53PMSzHBmGEEqhqotuhC0JamnwB%2BZnxrnZf0pQp1jPuQ7r5kAUvZCwYcqc3oeg9L8i%2F28qmtHBY9YAv21ick8l%2FzvdI9YGs8Ns8h4fEVv9dKMB8fSwhQxodBrIT%2BTrcn%2B51DhULEhTvk%2FlucjU3wEH%2FV5Blyxhbc1jD9UaOhjFuUGV0V9F54U0YgsGp3dZLhQ3jOFKHOzfrfbj7t2vbHaElSBE7KjKpJS2rh6rrM%2BTSYikPIgQ5fvtbsPBO2RGrlZDCC%2BXs30if5h5FXjhvOiiUgJswcQnrzZ4MAiZT73Tt%2Fse9tQ5xjaRjU91DZjjAbp7zxBNjo6BfrH10pun5SK5DhwbMSb3MGvePMTgscHpausUCurEH0fwl%2FxrjEMm6sKd58a%2B9j1vhiHACyoyGD3pjuzBb10WQ4U1aVIxoE0LZzaqeWrVGrtP7mFbBrNwiUe7AXjgB29%2BcdmOmDDrTZgJjdMrLKASNhEWRfvlUTqB7ik73UT6%2BLA7hf28qSIcWNENtvz9tnqhEWlptMscnFp7prAuW95Q8V2EOBaaUyQX3gnSz8w09Oz1AY6pgEdfpizQ841mKmWrgLaDuW1mHGvF%2Bfd4zFPqmJH1Eo%2BcZNGqR9qjUaigPsoRQnpyCJuM9gtDzhiqmR2dTEn9zuGSDl3wqYH0%2BL8zZ0s2lNHiXvQQX4FttYVJP1%2Fk%2BQts2FerQZbfjXsfS1mHyL9mB45SkWLCc862p9clvCyr9xy%2BlvgdOaaUuBfejHW4ewGuQfO%2Bh6wF74g9y%2FPZ0Vg563Ao0YEsWnU&X-Amz-Signature=a972e48a6880c72152b2d802771bda97c67c6d39f80662c05f7d38865740dc98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZTBOPM%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA1H53iJVg%2BntfSRFxJb118dJWiGt5fmyaoqJfJ45xHpAiBnnIYFKWMRD5J6jfJtS4ZZEb4CH6JY47u20bri4rDwvSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1Slo%2FiGaazcTI6vKtwDjZnWHNGJt%2BLNqHbEfTORCnXus9envwIJPJEHDR9B3ysYqWTZ%2Fn57GQ%2F6r2xSnFBE4F%2FTSzitkNF53PMSzHBmGEEqhqotuhC0JamnwB%2BZnxrnZf0pQp1jPuQ7r5kAUvZCwYcqc3oeg9L8i%2F28qmtHBY9YAv21ick8l%2FzvdI9YGs8Ns8h4fEVv9dKMB8fSwhQxodBrIT%2BTrcn%2B51DhULEhTvk%2FlucjU3wEH%2FV5Blyxhbc1jD9UaOhjFuUGV0V9F54U0YgsGp3dZLhQ3jOFKHOzfrfbj7t2vbHaElSBE7KjKpJS2rh6rrM%2BTSYikPIgQ5fvtbsPBO2RGrlZDCC%2BXs30if5h5FXjhvOiiUgJswcQnrzZ4MAiZT73Tt%2Fse9tQ5xjaRjU91DZjjAbp7zxBNjo6BfrH10pun5SK5DhwbMSb3MGvePMTgscHpausUCurEH0fwl%2FxrjEMm6sKd58a%2B9j1vhiHACyoyGD3pjuzBb10WQ4U1aVIxoE0LZzaqeWrVGrtP7mFbBrNwiUe7AXjgB29%2BcdmOmDDrTZgJjdMrLKASNhEWRfvlUTqB7ik73UT6%2BLA7hf28qSIcWNENtvz9tnqhEWlptMscnFp7prAuW95Q8V2EOBaaUyQX3gnSz8w09Oz1AY6pgEdfpizQ841mKmWrgLaDuW1mHGvF%2Bfd4zFPqmJH1Eo%2BcZNGqR9qjUaigPsoRQnpyCJuM9gtDzhiqmR2dTEn9zuGSDl3wqYH0%2BL8zZ0s2lNHiXvQQX4FttYVJP1%2Fk%2BQts2FerQZbfjXsfS1mHyL9mB45SkWLCc862p9clvCyr9xy%2BlvgdOaaUuBfejHW4ewGuQfO%2Bh6wF74g9y%2FPZ0Vg563Ao0YEsWnU&X-Amz-Signature=bc48d80bccf495320e59cb48d36c71c4604eecbf02c52fe1484014ed58986ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZTBOPM%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA1H53iJVg%2BntfSRFxJb118dJWiGt5fmyaoqJfJ45xHpAiBnnIYFKWMRD5J6jfJtS4ZZEb4CH6JY47u20bri4rDwvSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1Slo%2FiGaazcTI6vKtwDjZnWHNGJt%2BLNqHbEfTORCnXus9envwIJPJEHDR9B3ysYqWTZ%2Fn57GQ%2F6r2xSnFBE4F%2FTSzitkNF53PMSzHBmGEEqhqotuhC0JamnwB%2BZnxrnZf0pQp1jPuQ7r5kAUvZCwYcqc3oeg9L8i%2F28qmtHBY9YAv21ick8l%2FzvdI9YGs8Ns8h4fEVv9dKMB8fSwhQxodBrIT%2BTrcn%2B51DhULEhTvk%2FlucjU3wEH%2FV5Blyxhbc1jD9UaOhjFuUGV0V9F54U0YgsGp3dZLhQ3jOFKHOzfrfbj7t2vbHaElSBE7KjKpJS2rh6rrM%2BTSYikPIgQ5fvtbsPBO2RGrlZDCC%2BXs30if5h5FXjhvOiiUgJswcQnrzZ4MAiZT73Tt%2Fse9tQ5xjaRjU91DZjjAbp7zxBNjo6BfrH10pun5SK5DhwbMSb3MGvePMTgscHpausUCurEH0fwl%2FxrjEMm6sKd58a%2B9j1vhiHACyoyGD3pjuzBb10WQ4U1aVIxoE0LZzaqeWrVGrtP7mFbBrNwiUe7AXjgB29%2BcdmOmDDrTZgJjdMrLKASNhEWRfvlUTqB7ik73UT6%2BLA7hf28qSIcWNENtvz9tnqhEWlptMscnFp7prAuW95Q8V2EOBaaUyQX3gnSz8w09Oz1AY6pgEdfpizQ841mKmWrgLaDuW1mHGvF%2Bfd4zFPqmJH1Eo%2BcZNGqR9qjUaigPsoRQnpyCJuM9gtDzhiqmR2dTEn9zuGSDl3wqYH0%2BL8zZ0s2lNHiXvQQX4FttYVJP1%2Fk%2BQts2FerQZbfjXsfS1mHyL9mB45SkWLCc862p9clvCyr9xy%2BlvgdOaaUuBfejHW4ewGuQfO%2Bh6wF74g9y%2FPZ0Vg563Ao0YEsWnU&X-Amz-Signature=313da7a030813b013792f1e7cddddb8ae9f1029735aada909e28a5ada98e0774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZTBOPM%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA1H53iJVg%2BntfSRFxJb118dJWiGt5fmyaoqJfJ45xHpAiBnnIYFKWMRD5J6jfJtS4ZZEb4CH6JY47u20bri4rDwvSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1Slo%2FiGaazcTI6vKtwDjZnWHNGJt%2BLNqHbEfTORCnXus9envwIJPJEHDR9B3ysYqWTZ%2Fn57GQ%2F6r2xSnFBE4F%2FTSzitkNF53PMSzHBmGEEqhqotuhC0JamnwB%2BZnxrnZf0pQp1jPuQ7r5kAUvZCwYcqc3oeg9L8i%2F28qmtHBY9YAv21ick8l%2FzvdI9YGs8Ns8h4fEVv9dKMB8fSwhQxodBrIT%2BTrcn%2B51DhULEhTvk%2FlucjU3wEH%2FV5Blyxhbc1jD9UaOhjFuUGV0V9F54U0YgsGp3dZLhQ3jOFKHOzfrfbj7t2vbHaElSBE7KjKpJS2rh6rrM%2BTSYikPIgQ5fvtbsPBO2RGrlZDCC%2BXs30if5h5FXjhvOiiUgJswcQnrzZ4MAiZT73Tt%2Fse9tQ5xjaRjU91DZjjAbp7zxBNjo6BfrH10pun5SK5DhwbMSb3MGvePMTgscHpausUCurEH0fwl%2FxrjEMm6sKd58a%2B9j1vhiHACyoyGD3pjuzBb10WQ4U1aVIxoE0LZzaqeWrVGrtP7mFbBrNwiUe7AXjgB29%2BcdmOmDDrTZgJjdMrLKASNhEWRfvlUTqB7ik73UT6%2BLA7hf28qSIcWNENtvz9tnqhEWlptMscnFp7prAuW95Q8V2EOBaaUyQX3gnSz8w09Oz1AY6pgEdfpizQ841mKmWrgLaDuW1mHGvF%2Bfd4zFPqmJH1Eo%2BcZNGqR9qjUaigPsoRQnpyCJuM9gtDzhiqmR2dTEn9zuGSDl3wqYH0%2BL8zZ0s2lNHiXvQQX4FttYVJP1%2Fk%2BQts2FerQZbfjXsfS1mHyL9mB45SkWLCc862p9clvCyr9xy%2BlvgdOaaUuBfejHW4ewGuQfO%2Bh6wF74g9y%2FPZ0Vg563Ao0YEsWnU&X-Amz-Signature=9cdec254ce7371832dfc4a210a0a1f81df6e4d5bc6215bdebfde7ead8c8130b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZTBOPM%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA1H53iJVg%2BntfSRFxJb118dJWiGt5fmyaoqJfJ45xHpAiBnnIYFKWMRD5J6jfJtS4ZZEb4CH6JY47u20bri4rDwvSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1Slo%2FiGaazcTI6vKtwDjZnWHNGJt%2BLNqHbEfTORCnXus9envwIJPJEHDR9B3ysYqWTZ%2Fn57GQ%2F6r2xSnFBE4F%2FTSzitkNF53PMSzHBmGEEqhqotuhC0JamnwB%2BZnxrnZf0pQp1jPuQ7r5kAUvZCwYcqc3oeg9L8i%2F28qmtHBY9YAv21ick8l%2FzvdI9YGs8Ns8h4fEVv9dKMB8fSwhQxodBrIT%2BTrcn%2B51DhULEhTvk%2FlucjU3wEH%2FV5Blyxhbc1jD9UaOhjFuUGV0V9F54U0YgsGp3dZLhQ3jOFKHOzfrfbj7t2vbHaElSBE7KjKpJS2rh6rrM%2BTSYikPIgQ5fvtbsPBO2RGrlZDCC%2BXs30if5h5FXjhvOiiUgJswcQnrzZ4MAiZT73Tt%2Fse9tQ5xjaRjU91DZjjAbp7zxBNjo6BfrH10pun5SK5DhwbMSb3MGvePMTgscHpausUCurEH0fwl%2FxrjEMm6sKd58a%2B9j1vhiHACyoyGD3pjuzBb10WQ4U1aVIxoE0LZzaqeWrVGrtP7mFbBrNwiUe7AXjgB29%2BcdmOmDDrTZgJjdMrLKASNhEWRfvlUTqB7ik73UT6%2BLA7hf28qSIcWNENtvz9tnqhEWlptMscnFp7prAuW95Q8V2EOBaaUyQX3gnSz8w09Oz1AY6pgEdfpizQ841mKmWrgLaDuW1mHGvF%2Bfd4zFPqmJH1Eo%2BcZNGqR9qjUaigPsoRQnpyCJuM9gtDzhiqmR2dTEn9zuGSDl3wqYH0%2BL8zZ0s2lNHiXvQQX4FttYVJP1%2Fk%2BQts2FerQZbfjXsfS1mHyL9mB45SkWLCc862p9clvCyr9xy%2BlvgdOaaUuBfejHW4ewGuQfO%2Bh6wF74g9y%2FPZ0Vg563Ao0YEsWnU&X-Amz-Signature=a0bce2724a507e1cddd006f2653d7062ce1e9c43c6ca0b42ec432592d78adfca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZTBOPM%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA1H53iJVg%2BntfSRFxJb118dJWiGt5fmyaoqJfJ45xHpAiBnnIYFKWMRD5J6jfJtS4ZZEb4CH6JY47u20bri4rDwvSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1Slo%2FiGaazcTI6vKtwDjZnWHNGJt%2BLNqHbEfTORCnXus9envwIJPJEHDR9B3ysYqWTZ%2Fn57GQ%2F6r2xSnFBE4F%2FTSzitkNF53PMSzHBmGEEqhqotuhC0JamnwB%2BZnxrnZf0pQp1jPuQ7r5kAUvZCwYcqc3oeg9L8i%2F28qmtHBY9YAv21ick8l%2FzvdI9YGs8Ns8h4fEVv9dKMB8fSwhQxodBrIT%2BTrcn%2B51DhULEhTvk%2FlucjU3wEH%2FV5Blyxhbc1jD9UaOhjFuUGV0V9F54U0YgsGp3dZLhQ3jOFKHOzfrfbj7t2vbHaElSBE7KjKpJS2rh6rrM%2BTSYikPIgQ5fvtbsPBO2RGrlZDCC%2BXs30if5h5FXjhvOiiUgJswcQnrzZ4MAiZT73Tt%2Fse9tQ5xjaRjU91DZjjAbp7zxBNjo6BfrH10pun5SK5DhwbMSb3MGvePMTgscHpausUCurEH0fwl%2FxrjEMm6sKd58a%2B9j1vhiHACyoyGD3pjuzBb10WQ4U1aVIxoE0LZzaqeWrVGrtP7mFbBrNwiUe7AXjgB29%2BcdmOmDDrTZgJjdMrLKASNhEWRfvlUTqB7ik73UT6%2BLA7hf28qSIcWNENtvz9tnqhEWlptMscnFp7prAuW95Q8V2EOBaaUyQX3gnSz8w09Oz1AY6pgEdfpizQ841mKmWrgLaDuW1mHGvF%2Bfd4zFPqmJH1Eo%2BcZNGqR9qjUaigPsoRQnpyCJuM9gtDzhiqmR2dTEn9zuGSDl3wqYH0%2BL8zZ0s2lNHiXvQQX4FttYVJP1%2Fk%2BQts2FerQZbfjXsfS1mHyL9mB45SkWLCc862p9clvCyr9xy%2BlvgdOaaUuBfejHW4ewGuQfO%2Bh6wF74g9y%2FPZ0Vg563Ao0YEsWnU&X-Amz-Signature=8202341105cc6910b722f4640007f5f00d09262daf564196c2abffc78876e408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZTBOPM%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA1H53iJVg%2BntfSRFxJb118dJWiGt5fmyaoqJfJ45xHpAiBnnIYFKWMRD5J6jfJtS4ZZEb4CH6JY47u20bri4rDwvSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1Slo%2FiGaazcTI6vKtwDjZnWHNGJt%2BLNqHbEfTORCnXus9envwIJPJEHDR9B3ysYqWTZ%2Fn57GQ%2F6r2xSnFBE4F%2FTSzitkNF53PMSzHBmGEEqhqotuhC0JamnwB%2BZnxrnZf0pQp1jPuQ7r5kAUvZCwYcqc3oeg9L8i%2F28qmtHBY9YAv21ick8l%2FzvdI9YGs8Ns8h4fEVv9dKMB8fSwhQxodBrIT%2BTrcn%2B51DhULEhTvk%2FlucjU3wEH%2FV5Blyxhbc1jD9UaOhjFuUGV0V9F54U0YgsGp3dZLhQ3jOFKHOzfrfbj7t2vbHaElSBE7KjKpJS2rh6rrM%2BTSYikPIgQ5fvtbsPBO2RGrlZDCC%2BXs30if5h5FXjhvOiiUgJswcQnrzZ4MAiZT73Tt%2Fse9tQ5xjaRjU91DZjjAbp7zxBNjo6BfrH10pun5SK5DhwbMSb3MGvePMTgscHpausUCurEH0fwl%2FxrjEMm6sKd58a%2B9j1vhiHACyoyGD3pjuzBb10WQ4U1aVIxoE0LZzaqeWrVGrtP7mFbBrNwiUe7AXjgB29%2BcdmOmDDrTZgJjdMrLKASNhEWRfvlUTqB7ik73UT6%2BLA7hf28qSIcWNENtvz9tnqhEWlptMscnFp7prAuW95Q8V2EOBaaUyQX3gnSz8w09Oz1AY6pgEdfpizQ841mKmWrgLaDuW1mHGvF%2Bfd4zFPqmJH1Eo%2BcZNGqR9qjUaigPsoRQnpyCJuM9gtDzhiqmR2dTEn9zuGSDl3wqYH0%2BL8zZ0s2lNHiXvQQX4FttYVJP1%2Fk%2BQts2FerQZbfjXsfS1mHyL9mB45SkWLCc862p9clvCyr9xy%2BlvgdOaaUuBfejHW4ewGuQfO%2Bh6wF74g9y%2FPZ0Vg563Ao0YEsWnU&X-Amz-Signature=2e1ca3316670eecb6b760ca4d49b6b3493fb4ab0b75378b5bc73d5540a41996c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZTBOPM%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA1H53iJVg%2BntfSRFxJb118dJWiGt5fmyaoqJfJ45xHpAiBnnIYFKWMRD5J6jfJtS4ZZEb4CH6JY47u20bri4rDwvSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1Slo%2FiGaazcTI6vKtwDjZnWHNGJt%2BLNqHbEfTORCnXus9envwIJPJEHDR9B3ysYqWTZ%2Fn57GQ%2F6r2xSnFBE4F%2FTSzitkNF53PMSzHBmGEEqhqotuhC0JamnwB%2BZnxrnZf0pQp1jPuQ7r5kAUvZCwYcqc3oeg9L8i%2F28qmtHBY9YAv21ick8l%2FzvdI9YGs8Ns8h4fEVv9dKMB8fSwhQxodBrIT%2BTrcn%2B51DhULEhTvk%2FlucjU3wEH%2FV5Blyxhbc1jD9UaOhjFuUGV0V9F54U0YgsGp3dZLhQ3jOFKHOzfrfbj7t2vbHaElSBE7KjKpJS2rh6rrM%2BTSYikPIgQ5fvtbsPBO2RGrlZDCC%2BXs30if5h5FXjhvOiiUgJswcQnrzZ4MAiZT73Tt%2Fse9tQ5xjaRjU91DZjjAbp7zxBNjo6BfrH10pun5SK5DhwbMSb3MGvePMTgscHpausUCurEH0fwl%2FxrjEMm6sKd58a%2B9j1vhiHACyoyGD3pjuzBb10WQ4U1aVIxoE0LZzaqeWrVGrtP7mFbBrNwiUe7AXjgB29%2BcdmOmDDrTZgJjdMrLKASNhEWRfvlUTqB7ik73UT6%2BLA7hf28qSIcWNENtvz9tnqhEWlptMscnFp7prAuW95Q8V2EOBaaUyQX3gnSz8w09Oz1AY6pgEdfpizQ841mKmWrgLaDuW1mHGvF%2Bfd4zFPqmJH1Eo%2BcZNGqR9qjUaigPsoRQnpyCJuM9gtDzhiqmR2dTEn9zuGSDl3wqYH0%2BL8zZ0s2lNHiXvQQX4FttYVJP1%2Fk%2BQts2FerQZbfjXsfS1mHyL9mB45SkWLCc862p9clvCyr9xy%2BlvgdOaaUuBfejHW4ewGuQfO%2Bh6wF74g9y%2FPZ0Vg563Ao0YEsWnU&X-Amz-Signature=f063910402916155b61c12db44a979885a078459799b5ad6cb51b33eab2ae2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

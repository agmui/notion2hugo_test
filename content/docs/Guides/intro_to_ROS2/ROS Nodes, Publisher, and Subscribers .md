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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q4YQAD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDRmPF4HBTBvEDhTAkCrOLn5VZOZf858hK4w3aq6n3mjgIhANeIEzObOb4pcPG1Xa9kVJX1dnuc%2FwNmcWrstoG0GiTGKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRDEHbkynIeQxuu9kq3APGrHYN9VQUq8AR8HXhoIKOf8MXyd5oFNfDjlrRUx49uyTblBmnPtXFs1TDJl6ZzyHktdvRK%2BpwYdrFytQR%2FtyeTS5jLlJ1nUCkx28M4B2CLR488B8bl4afhbgEE5yygar9psMfzO3dmNEOte1zfIxiunlM5KWi4yHOkoMYKN1zjrQd%2FODsUB4E%2FZfCFqzDrX%2BuF7JUTl4dHVJ1HSitszVgrRrK0pjQkV71gqmMMLMZONKc77vzH2p4VqXaVeKSk1clC5XC9ijbBkUx1AlKfL3b%2B2BjXpMaQegJosRaM5UDfznGZQ9K8QKCiH4tPqjF7gfhhgC1ruC09ro5LQc3T3ETzCQ5HlX0pBEeantdTcbHyNJDR9nQq1ZZM56u6i63k2tY7RpzT96TGIu5ovUDj2sRokdJ2Zxz%2FGMXgqqExZr4o3CnwA0bsqZc2BtN2mn5vFNe2v%2FLmDd5Mk9JLonAJ%2FF64PLyGW8CENt8cZ6Hme%2FFRXKxV1YUw%2Bj5do6%2BaJEn1hYRTQOCviOr6xVacOJMPD7AFm3se0QpoU00OyqWJRl3aTqSNUpDM4An%2BcPPV5UBNyWMX080r%2BAuwYBCqT6ssLx7ftKz9ndf5LLmb2d1SxdSuLaLDRTN06Nyb94p4jCIttHEBjqkAccyXNpkApthVDDCruWLNrnuh%2BtHCqkBhD4IMGSrBpBxH5G0bD5YA%2FCpYuaZ6gv3Fgz0R4UFn%2B%2Frlra4cgwHzK7bvcR%2FJbZ00%2BV%2FE9%2Fc5S5Xz0RtayUmHakszul%2FAw0sl0f6TkMF1r8RUuAJKxMGjaPow9hZ0xGiGpxUOJZ%2BVmXeR%2FrjiMnGzuiHdhBHQ4FMjkuu35aH8TJewFv5PXW%2FANZ4aD5O&X-Amz-Signature=11ab6b81f7049ccf7625fe76903d83ee41fadddfb201d150336cb47a0d0b9cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q4YQAD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDRmPF4HBTBvEDhTAkCrOLn5VZOZf858hK4w3aq6n3mjgIhANeIEzObOb4pcPG1Xa9kVJX1dnuc%2FwNmcWrstoG0GiTGKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRDEHbkynIeQxuu9kq3APGrHYN9VQUq8AR8HXhoIKOf8MXyd5oFNfDjlrRUx49uyTblBmnPtXFs1TDJl6ZzyHktdvRK%2BpwYdrFytQR%2FtyeTS5jLlJ1nUCkx28M4B2CLR488B8bl4afhbgEE5yygar9psMfzO3dmNEOte1zfIxiunlM5KWi4yHOkoMYKN1zjrQd%2FODsUB4E%2FZfCFqzDrX%2BuF7JUTl4dHVJ1HSitszVgrRrK0pjQkV71gqmMMLMZONKc77vzH2p4VqXaVeKSk1clC5XC9ijbBkUx1AlKfL3b%2B2BjXpMaQegJosRaM5UDfznGZQ9K8QKCiH4tPqjF7gfhhgC1ruC09ro5LQc3T3ETzCQ5HlX0pBEeantdTcbHyNJDR9nQq1ZZM56u6i63k2tY7RpzT96TGIu5ovUDj2sRokdJ2Zxz%2FGMXgqqExZr4o3CnwA0bsqZc2BtN2mn5vFNe2v%2FLmDd5Mk9JLonAJ%2FF64PLyGW8CENt8cZ6Hme%2FFRXKxV1YUw%2Bj5do6%2BaJEn1hYRTQOCviOr6xVacOJMPD7AFm3se0QpoU00OyqWJRl3aTqSNUpDM4An%2BcPPV5UBNyWMX080r%2BAuwYBCqT6ssLx7ftKz9ndf5LLmb2d1SxdSuLaLDRTN06Nyb94p4jCIttHEBjqkAccyXNpkApthVDDCruWLNrnuh%2BtHCqkBhD4IMGSrBpBxH5G0bD5YA%2FCpYuaZ6gv3Fgz0R4UFn%2B%2Frlra4cgwHzK7bvcR%2FJbZ00%2BV%2FE9%2Fc5S5Xz0RtayUmHakszul%2FAw0sl0f6TkMF1r8RUuAJKxMGjaPow9hZ0xGiGpxUOJZ%2BVmXeR%2FrjiMnGzuiHdhBHQ4FMjkuu35aH8TJewFv5PXW%2FANZ4aD5O&X-Amz-Signature=0a75e9e5a5c0fea370a989cefa104054a1c6bd456a0d954376185fbb923aa742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q4YQAD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDRmPF4HBTBvEDhTAkCrOLn5VZOZf858hK4w3aq6n3mjgIhANeIEzObOb4pcPG1Xa9kVJX1dnuc%2FwNmcWrstoG0GiTGKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRDEHbkynIeQxuu9kq3APGrHYN9VQUq8AR8HXhoIKOf8MXyd5oFNfDjlrRUx49uyTblBmnPtXFs1TDJl6ZzyHktdvRK%2BpwYdrFytQR%2FtyeTS5jLlJ1nUCkx28M4B2CLR488B8bl4afhbgEE5yygar9psMfzO3dmNEOte1zfIxiunlM5KWi4yHOkoMYKN1zjrQd%2FODsUB4E%2FZfCFqzDrX%2BuF7JUTl4dHVJ1HSitszVgrRrK0pjQkV71gqmMMLMZONKc77vzH2p4VqXaVeKSk1clC5XC9ijbBkUx1AlKfL3b%2B2BjXpMaQegJosRaM5UDfznGZQ9K8QKCiH4tPqjF7gfhhgC1ruC09ro5LQc3T3ETzCQ5HlX0pBEeantdTcbHyNJDR9nQq1ZZM56u6i63k2tY7RpzT96TGIu5ovUDj2sRokdJ2Zxz%2FGMXgqqExZr4o3CnwA0bsqZc2BtN2mn5vFNe2v%2FLmDd5Mk9JLonAJ%2FF64PLyGW8CENt8cZ6Hme%2FFRXKxV1YUw%2Bj5do6%2BaJEn1hYRTQOCviOr6xVacOJMPD7AFm3se0QpoU00OyqWJRl3aTqSNUpDM4An%2BcPPV5UBNyWMX080r%2BAuwYBCqT6ssLx7ftKz9ndf5LLmb2d1SxdSuLaLDRTN06Nyb94p4jCIttHEBjqkAccyXNpkApthVDDCruWLNrnuh%2BtHCqkBhD4IMGSrBpBxH5G0bD5YA%2FCpYuaZ6gv3Fgz0R4UFn%2B%2Frlra4cgwHzK7bvcR%2FJbZ00%2BV%2FE9%2Fc5S5Xz0RtayUmHakszul%2FAw0sl0f6TkMF1r8RUuAJKxMGjaPow9hZ0xGiGpxUOJZ%2BVmXeR%2FrjiMnGzuiHdhBHQ4FMjkuu35aH8TJewFv5PXW%2FANZ4aD5O&X-Amz-Signature=bdc97d554b0c7077fb6de4312ae7897a65dc71a56cb4472dbb7811a595936493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q4YQAD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDRmPF4HBTBvEDhTAkCrOLn5VZOZf858hK4w3aq6n3mjgIhANeIEzObOb4pcPG1Xa9kVJX1dnuc%2FwNmcWrstoG0GiTGKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRDEHbkynIeQxuu9kq3APGrHYN9VQUq8AR8HXhoIKOf8MXyd5oFNfDjlrRUx49uyTblBmnPtXFs1TDJl6ZzyHktdvRK%2BpwYdrFytQR%2FtyeTS5jLlJ1nUCkx28M4B2CLR488B8bl4afhbgEE5yygar9psMfzO3dmNEOte1zfIxiunlM5KWi4yHOkoMYKN1zjrQd%2FODsUB4E%2FZfCFqzDrX%2BuF7JUTl4dHVJ1HSitszVgrRrK0pjQkV71gqmMMLMZONKc77vzH2p4VqXaVeKSk1clC5XC9ijbBkUx1AlKfL3b%2B2BjXpMaQegJosRaM5UDfznGZQ9K8QKCiH4tPqjF7gfhhgC1ruC09ro5LQc3T3ETzCQ5HlX0pBEeantdTcbHyNJDR9nQq1ZZM56u6i63k2tY7RpzT96TGIu5ovUDj2sRokdJ2Zxz%2FGMXgqqExZr4o3CnwA0bsqZc2BtN2mn5vFNe2v%2FLmDd5Mk9JLonAJ%2FF64PLyGW8CENt8cZ6Hme%2FFRXKxV1YUw%2Bj5do6%2BaJEn1hYRTQOCviOr6xVacOJMPD7AFm3se0QpoU00OyqWJRl3aTqSNUpDM4An%2BcPPV5UBNyWMX080r%2BAuwYBCqT6ssLx7ftKz9ndf5LLmb2d1SxdSuLaLDRTN06Nyb94p4jCIttHEBjqkAccyXNpkApthVDDCruWLNrnuh%2BtHCqkBhD4IMGSrBpBxH5G0bD5YA%2FCpYuaZ6gv3Fgz0R4UFn%2B%2Frlra4cgwHzK7bvcR%2FJbZ00%2BV%2FE9%2Fc5S5Xz0RtayUmHakszul%2FAw0sl0f6TkMF1r8RUuAJKxMGjaPow9hZ0xGiGpxUOJZ%2BVmXeR%2FrjiMnGzuiHdhBHQ4FMjkuu35aH8TJewFv5PXW%2FANZ4aD5O&X-Amz-Signature=3f7dd293fa19f525db66e04b23898242689ce012507bd2156af959b899c867bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q4YQAD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDRmPF4HBTBvEDhTAkCrOLn5VZOZf858hK4w3aq6n3mjgIhANeIEzObOb4pcPG1Xa9kVJX1dnuc%2FwNmcWrstoG0GiTGKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRDEHbkynIeQxuu9kq3APGrHYN9VQUq8AR8HXhoIKOf8MXyd5oFNfDjlrRUx49uyTblBmnPtXFs1TDJl6ZzyHktdvRK%2BpwYdrFytQR%2FtyeTS5jLlJ1nUCkx28M4B2CLR488B8bl4afhbgEE5yygar9psMfzO3dmNEOte1zfIxiunlM5KWi4yHOkoMYKN1zjrQd%2FODsUB4E%2FZfCFqzDrX%2BuF7JUTl4dHVJ1HSitszVgrRrK0pjQkV71gqmMMLMZONKc77vzH2p4VqXaVeKSk1clC5XC9ijbBkUx1AlKfL3b%2B2BjXpMaQegJosRaM5UDfznGZQ9K8QKCiH4tPqjF7gfhhgC1ruC09ro5LQc3T3ETzCQ5HlX0pBEeantdTcbHyNJDR9nQq1ZZM56u6i63k2tY7RpzT96TGIu5ovUDj2sRokdJ2Zxz%2FGMXgqqExZr4o3CnwA0bsqZc2BtN2mn5vFNe2v%2FLmDd5Mk9JLonAJ%2FF64PLyGW8CENt8cZ6Hme%2FFRXKxV1YUw%2Bj5do6%2BaJEn1hYRTQOCviOr6xVacOJMPD7AFm3se0QpoU00OyqWJRl3aTqSNUpDM4An%2BcPPV5UBNyWMX080r%2BAuwYBCqT6ssLx7ftKz9ndf5LLmb2d1SxdSuLaLDRTN06Nyb94p4jCIttHEBjqkAccyXNpkApthVDDCruWLNrnuh%2BtHCqkBhD4IMGSrBpBxH5G0bD5YA%2FCpYuaZ6gv3Fgz0R4UFn%2B%2Frlra4cgwHzK7bvcR%2FJbZ00%2BV%2FE9%2Fc5S5Xz0RtayUmHakszul%2FAw0sl0f6TkMF1r8RUuAJKxMGjaPow9hZ0xGiGpxUOJZ%2BVmXeR%2FrjiMnGzuiHdhBHQ4FMjkuu35aH8TJewFv5PXW%2FANZ4aD5O&X-Amz-Signature=d5bf1d8e7b5eca5f701af60940a3e639d6f68e1bd9c935b8b7ae294baf37039e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q4YQAD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDRmPF4HBTBvEDhTAkCrOLn5VZOZf858hK4w3aq6n3mjgIhANeIEzObOb4pcPG1Xa9kVJX1dnuc%2FwNmcWrstoG0GiTGKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRDEHbkynIeQxuu9kq3APGrHYN9VQUq8AR8HXhoIKOf8MXyd5oFNfDjlrRUx49uyTblBmnPtXFs1TDJl6ZzyHktdvRK%2BpwYdrFytQR%2FtyeTS5jLlJ1nUCkx28M4B2CLR488B8bl4afhbgEE5yygar9psMfzO3dmNEOte1zfIxiunlM5KWi4yHOkoMYKN1zjrQd%2FODsUB4E%2FZfCFqzDrX%2BuF7JUTl4dHVJ1HSitszVgrRrK0pjQkV71gqmMMLMZONKc77vzH2p4VqXaVeKSk1clC5XC9ijbBkUx1AlKfL3b%2B2BjXpMaQegJosRaM5UDfznGZQ9K8QKCiH4tPqjF7gfhhgC1ruC09ro5LQc3T3ETzCQ5HlX0pBEeantdTcbHyNJDR9nQq1ZZM56u6i63k2tY7RpzT96TGIu5ovUDj2sRokdJ2Zxz%2FGMXgqqExZr4o3CnwA0bsqZc2BtN2mn5vFNe2v%2FLmDd5Mk9JLonAJ%2FF64PLyGW8CENt8cZ6Hme%2FFRXKxV1YUw%2Bj5do6%2BaJEn1hYRTQOCviOr6xVacOJMPD7AFm3se0QpoU00OyqWJRl3aTqSNUpDM4An%2BcPPV5UBNyWMX080r%2BAuwYBCqT6ssLx7ftKz9ndf5LLmb2d1SxdSuLaLDRTN06Nyb94p4jCIttHEBjqkAccyXNpkApthVDDCruWLNrnuh%2BtHCqkBhD4IMGSrBpBxH5G0bD5YA%2FCpYuaZ6gv3Fgz0R4UFn%2B%2Frlra4cgwHzK7bvcR%2FJbZ00%2BV%2FE9%2Fc5S5Xz0RtayUmHakszul%2FAw0sl0f6TkMF1r8RUuAJKxMGjaPow9hZ0xGiGpxUOJZ%2BVmXeR%2FrjiMnGzuiHdhBHQ4FMjkuu35aH8TJewFv5PXW%2FANZ4aD5O&X-Amz-Signature=f80b4b0988159736fad674dc642335f028651a50d17faaf5d99a9cfa1e99e154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q4YQAD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDRmPF4HBTBvEDhTAkCrOLn5VZOZf858hK4w3aq6n3mjgIhANeIEzObOb4pcPG1Xa9kVJX1dnuc%2FwNmcWrstoG0GiTGKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRDEHbkynIeQxuu9kq3APGrHYN9VQUq8AR8HXhoIKOf8MXyd5oFNfDjlrRUx49uyTblBmnPtXFs1TDJl6ZzyHktdvRK%2BpwYdrFytQR%2FtyeTS5jLlJ1nUCkx28M4B2CLR488B8bl4afhbgEE5yygar9psMfzO3dmNEOte1zfIxiunlM5KWi4yHOkoMYKN1zjrQd%2FODsUB4E%2FZfCFqzDrX%2BuF7JUTl4dHVJ1HSitszVgrRrK0pjQkV71gqmMMLMZONKc77vzH2p4VqXaVeKSk1clC5XC9ijbBkUx1AlKfL3b%2B2BjXpMaQegJosRaM5UDfznGZQ9K8QKCiH4tPqjF7gfhhgC1ruC09ro5LQc3T3ETzCQ5HlX0pBEeantdTcbHyNJDR9nQq1ZZM56u6i63k2tY7RpzT96TGIu5ovUDj2sRokdJ2Zxz%2FGMXgqqExZr4o3CnwA0bsqZc2BtN2mn5vFNe2v%2FLmDd5Mk9JLonAJ%2FF64PLyGW8CENt8cZ6Hme%2FFRXKxV1YUw%2Bj5do6%2BaJEn1hYRTQOCviOr6xVacOJMPD7AFm3se0QpoU00OyqWJRl3aTqSNUpDM4An%2BcPPV5UBNyWMX080r%2BAuwYBCqT6ssLx7ftKz9ndf5LLmb2d1SxdSuLaLDRTN06Nyb94p4jCIttHEBjqkAccyXNpkApthVDDCruWLNrnuh%2BtHCqkBhD4IMGSrBpBxH5G0bD5YA%2FCpYuaZ6gv3Fgz0R4UFn%2B%2Frlra4cgwHzK7bvcR%2FJbZ00%2BV%2FE9%2Fc5S5Xz0RtayUmHakszul%2FAw0sl0f6TkMF1r8RUuAJKxMGjaPow9hZ0xGiGpxUOJZ%2BVmXeR%2FrjiMnGzuiHdhBHQ4FMjkuu35aH8TJewFv5PXW%2FANZ4aD5O&X-Amz-Signature=458378463b6e6009ee5bb593f203e00b3c1a32723559907db5f2b613b3c20706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q4YQAD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDRmPF4HBTBvEDhTAkCrOLn5VZOZf858hK4w3aq6n3mjgIhANeIEzObOb4pcPG1Xa9kVJX1dnuc%2FwNmcWrstoG0GiTGKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRDEHbkynIeQxuu9kq3APGrHYN9VQUq8AR8HXhoIKOf8MXyd5oFNfDjlrRUx49uyTblBmnPtXFs1TDJl6ZzyHktdvRK%2BpwYdrFytQR%2FtyeTS5jLlJ1nUCkx28M4B2CLR488B8bl4afhbgEE5yygar9psMfzO3dmNEOte1zfIxiunlM5KWi4yHOkoMYKN1zjrQd%2FODsUB4E%2FZfCFqzDrX%2BuF7JUTl4dHVJ1HSitszVgrRrK0pjQkV71gqmMMLMZONKc77vzH2p4VqXaVeKSk1clC5XC9ijbBkUx1AlKfL3b%2B2BjXpMaQegJosRaM5UDfznGZQ9K8QKCiH4tPqjF7gfhhgC1ruC09ro5LQc3T3ETzCQ5HlX0pBEeantdTcbHyNJDR9nQq1ZZM56u6i63k2tY7RpzT96TGIu5ovUDj2sRokdJ2Zxz%2FGMXgqqExZr4o3CnwA0bsqZc2BtN2mn5vFNe2v%2FLmDd5Mk9JLonAJ%2FF64PLyGW8CENt8cZ6Hme%2FFRXKxV1YUw%2Bj5do6%2BaJEn1hYRTQOCviOr6xVacOJMPD7AFm3se0QpoU00OyqWJRl3aTqSNUpDM4An%2BcPPV5UBNyWMX080r%2BAuwYBCqT6ssLx7ftKz9ndf5LLmb2d1SxdSuLaLDRTN06Nyb94p4jCIttHEBjqkAccyXNpkApthVDDCruWLNrnuh%2BtHCqkBhD4IMGSrBpBxH5G0bD5YA%2FCpYuaZ6gv3Fgz0R4UFn%2B%2Frlra4cgwHzK7bvcR%2FJbZ00%2BV%2FE9%2Fc5S5Xz0RtayUmHakszul%2FAw0sl0f6TkMF1r8RUuAJKxMGjaPow9hZ0xGiGpxUOJZ%2BVmXeR%2FrjiMnGzuiHdhBHQ4FMjkuu35aH8TJewFv5PXW%2FANZ4aD5O&X-Amz-Signature=5c51b6cff0f8e7f3ee23f1e3c66eaa57d6faa2c9c3574510f3a6df9ebe3ecb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

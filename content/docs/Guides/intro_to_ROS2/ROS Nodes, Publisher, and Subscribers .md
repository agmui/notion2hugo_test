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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFES4GD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyYjXvLo35dS6mqkjo2KSxUwcxXH1om2slXbEW7FBZvwIhAMFTQOI0mjV8YH9dTqGmR4GerzN1rDZanL5w0ZbIvD93KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ErzJv0T9RZJzzSEq3AOMocu0lTIlWzG%2BxnXTX5Qdg0xRJdf5sVQb6wuCikplGc1IZHj5R8mXHzp%2Fczw4LBaFH3FNVFtus7U8w%2F8LY4Kd8D9%2FcZWnE6suEYIeRwP8%2BH4i4e31l8LConOTWVcNjhmEEcK%2FE%2BV5YhCF2tUmOqWRQuSBpbyy9%2FSLV0DGfCnmGRcGkIYbIoPyUuCRfOw6D7X2Z%2FsFcr0yWzPv9NvNCLwrYIEElKBxI48QyQO4WRbqn1tJucJ3iN8B%2FS4i0k48pKP%2FiIrhxuq6gOihI8BDs59WX%2F6NyTcr6RQxXTaST%2BDAdWND1QrlkDWsnmdNYcfIzL6d%2Ff0fopIm7yFy%2Fxk1qVQsDdOLq5RwuouwUrghXMhIyHpWUsGgzc0L15zziLwnmu%2BZEJGu%2FrGeK29sEJs2x0Chh15aV6W4Zi11ZF07UREYj2ZZrmqoljKTU1UGdt0crlr04M5OJIcsf7%2FU3HwJvQe1RoWFTTBreF%2BG3JbN9CHZ41%2Fe7aC5H%2FafM3dQnmsx36Csy4sWFxeSdciajBn476Qcyq3%2B9FRpuO7%2FsrFQtfKXBioGQbpjMNdlJH1S8b5CRSkT%2Fk1TC6wbZDnFJuSTCpJ7XB7z593X6U3WzCNEyp%2FzEnPj7ihGwq3tPe44sTD73tDCBjqkASI%2Bc8drzEsCa7cTrRWfOhkJu31IUMKLE2T%2FDoiHUewIWqEXoSkEZKqQF6EN1tezBp9ll5x%2FKaMZY7tWHNErU9CNEozp%2F1R9Q3s3VIvdfdU5AuZyaUa%2BwKfrer5hmd5w%2B14ncAAEH49VO7RirTV6kKOcwf8yzFi8%2BOdruJoBV6qPF%2BLTLbYn86Mlb%2FfBjEQHHiYwOlcnpYczqe8kmeWxVAtYEJaR&X-Amz-Signature=3232ffec39239dae7118c8257ca5ac74a8180b55d4928f7fd508a91b64d5f4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFES4GD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyYjXvLo35dS6mqkjo2KSxUwcxXH1om2slXbEW7FBZvwIhAMFTQOI0mjV8YH9dTqGmR4GerzN1rDZanL5w0ZbIvD93KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ErzJv0T9RZJzzSEq3AOMocu0lTIlWzG%2BxnXTX5Qdg0xRJdf5sVQb6wuCikplGc1IZHj5R8mXHzp%2Fczw4LBaFH3FNVFtus7U8w%2F8LY4Kd8D9%2FcZWnE6suEYIeRwP8%2BH4i4e31l8LConOTWVcNjhmEEcK%2FE%2BV5YhCF2tUmOqWRQuSBpbyy9%2FSLV0DGfCnmGRcGkIYbIoPyUuCRfOw6D7X2Z%2FsFcr0yWzPv9NvNCLwrYIEElKBxI48QyQO4WRbqn1tJucJ3iN8B%2FS4i0k48pKP%2FiIrhxuq6gOihI8BDs59WX%2F6NyTcr6RQxXTaST%2BDAdWND1QrlkDWsnmdNYcfIzL6d%2Ff0fopIm7yFy%2Fxk1qVQsDdOLq5RwuouwUrghXMhIyHpWUsGgzc0L15zziLwnmu%2BZEJGu%2FrGeK29sEJs2x0Chh15aV6W4Zi11ZF07UREYj2ZZrmqoljKTU1UGdt0crlr04M5OJIcsf7%2FU3HwJvQe1RoWFTTBreF%2BG3JbN9CHZ41%2Fe7aC5H%2FafM3dQnmsx36Csy4sWFxeSdciajBn476Qcyq3%2B9FRpuO7%2FsrFQtfKXBioGQbpjMNdlJH1S8b5CRSkT%2Fk1TC6wbZDnFJuSTCpJ7XB7z593X6U3WzCNEyp%2FzEnPj7ihGwq3tPe44sTD73tDCBjqkASI%2Bc8drzEsCa7cTrRWfOhkJu31IUMKLE2T%2FDoiHUewIWqEXoSkEZKqQF6EN1tezBp9ll5x%2FKaMZY7tWHNErU9CNEozp%2F1R9Q3s3VIvdfdU5AuZyaUa%2BwKfrer5hmd5w%2B14ncAAEH49VO7RirTV6kKOcwf8yzFi8%2BOdruJoBV6qPF%2BLTLbYn86Mlb%2FfBjEQHHiYwOlcnpYczqe8kmeWxVAtYEJaR&X-Amz-Signature=58b930e21d80be68cad966456c6ff645376d6d60a56dae6c923c01cf5ef3d0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFES4GD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyYjXvLo35dS6mqkjo2KSxUwcxXH1om2slXbEW7FBZvwIhAMFTQOI0mjV8YH9dTqGmR4GerzN1rDZanL5w0ZbIvD93KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ErzJv0T9RZJzzSEq3AOMocu0lTIlWzG%2BxnXTX5Qdg0xRJdf5sVQb6wuCikplGc1IZHj5R8mXHzp%2Fczw4LBaFH3FNVFtus7U8w%2F8LY4Kd8D9%2FcZWnE6suEYIeRwP8%2BH4i4e31l8LConOTWVcNjhmEEcK%2FE%2BV5YhCF2tUmOqWRQuSBpbyy9%2FSLV0DGfCnmGRcGkIYbIoPyUuCRfOw6D7X2Z%2FsFcr0yWzPv9NvNCLwrYIEElKBxI48QyQO4WRbqn1tJucJ3iN8B%2FS4i0k48pKP%2FiIrhxuq6gOihI8BDs59WX%2F6NyTcr6RQxXTaST%2BDAdWND1QrlkDWsnmdNYcfIzL6d%2Ff0fopIm7yFy%2Fxk1qVQsDdOLq5RwuouwUrghXMhIyHpWUsGgzc0L15zziLwnmu%2BZEJGu%2FrGeK29sEJs2x0Chh15aV6W4Zi11ZF07UREYj2ZZrmqoljKTU1UGdt0crlr04M5OJIcsf7%2FU3HwJvQe1RoWFTTBreF%2BG3JbN9CHZ41%2Fe7aC5H%2FafM3dQnmsx36Csy4sWFxeSdciajBn476Qcyq3%2B9FRpuO7%2FsrFQtfKXBioGQbpjMNdlJH1S8b5CRSkT%2Fk1TC6wbZDnFJuSTCpJ7XB7z593X6U3WzCNEyp%2FzEnPj7ihGwq3tPe44sTD73tDCBjqkASI%2Bc8drzEsCa7cTrRWfOhkJu31IUMKLE2T%2FDoiHUewIWqEXoSkEZKqQF6EN1tezBp9ll5x%2FKaMZY7tWHNErU9CNEozp%2F1R9Q3s3VIvdfdU5AuZyaUa%2BwKfrer5hmd5w%2B14ncAAEH49VO7RirTV6kKOcwf8yzFi8%2BOdruJoBV6qPF%2BLTLbYn86Mlb%2FfBjEQHHiYwOlcnpYczqe8kmeWxVAtYEJaR&X-Amz-Signature=1d0047402ce934cc79e9ee7644f6cbaef07037514941a075daf5ec73bc6cde2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFES4GD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyYjXvLo35dS6mqkjo2KSxUwcxXH1om2slXbEW7FBZvwIhAMFTQOI0mjV8YH9dTqGmR4GerzN1rDZanL5w0ZbIvD93KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ErzJv0T9RZJzzSEq3AOMocu0lTIlWzG%2BxnXTX5Qdg0xRJdf5sVQb6wuCikplGc1IZHj5R8mXHzp%2Fczw4LBaFH3FNVFtus7U8w%2F8LY4Kd8D9%2FcZWnE6suEYIeRwP8%2BH4i4e31l8LConOTWVcNjhmEEcK%2FE%2BV5YhCF2tUmOqWRQuSBpbyy9%2FSLV0DGfCnmGRcGkIYbIoPyUuCRfOw6D7X2Z%2FsFcr0yWzPv9NvNCLwrYIEElKBxI48QyQO4WRbqn1tJucJ3iN8B%2FS4i0k48pKP%2FiIrhxuq6gOihI8BDs59WX%2F6NyTcr6RQxXTaST%2BDAdWND1QrlkDWsnmdNYcfIzL6d%2Ff0fopIm7yFy%2Fxk1qVQsDdOLq5RwuouwUrghXMhIyHpWUsGgzc0L15zziLwnmu%2BZEJGu%2FrGeK29sEJs2x0Chh15aV6W4Zi11ZF07UREYj2ZZrmqoljKTU1UGdt0crlr04M5OJIcsf7%2FU3HwJvQe1RoWFTTBreF%2BG3JbN9CHZ41%2Fe7aC5H%2FafM3dQnmsx36Csy4sWFxeSdciajBn476Qcyq3%2B9FRpuO7%2FsrFQtfKXBioGQbpjMNdlJH1S8b5CRSkT%2Fk1TC6wbZDnFJuSTCpJ7XB7z593X6U3WzCNEyp%2FzEnPj7ihGwq3tPe44sTD73tDCBjqkASI%2Bc8drzEsCa7cTrRWfOhkJu31IUMKLE2T%2FDoiHUewIWqEXoSkEZKqQF6EN1tezBp9ll5x%2FKaMZY7tWHNErU9CNEozp%2F1R9Q3s3VIvdfdU5AuZyaUa%2BwKfrer5hmd5w%2B14ncAAEH49VO7RirTV6kKOcwf8yzFi8%2BOdruJoBV6qPF%2BLTLbYn86Mlb%2FfBjEQHHiYwOlcnpYczqe8kmeWxVAtYEJaR&X-Amz-Signature=255ae4ddff18204704a01e44f02b5ffabd12c8c64ce8e4de8b70e9a6345bc489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFES4GD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyYjXvLo35dS6mqkjo2KSxUwcxXH1om2slXbEW7FBZvwIhAMFTQOI0mjV8YH9dTqGmR4GerzN1rDZanL5w0ZbIvD93KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ErzJv0T9RZJzzSEq3AOMocu0lTIlWzG%2BxnXTX5Qdg0xRJdf5sVQb6wuCikplGc1IZHj5R8mXHzp%2Fczw4LBaFH3FNVFtus7U8w%2F8LY4Kd8D9%2FcZWnE6suEYIeRwP8%2BH4i4e31l8LConOTWVcNjhmEEcK%2FE%2BV5YhCF2tUmOqWRQuSBpbyy9%2FSLV0DGfCnmGRcGkIYbIoPyUuCRfOw6D7X2Z%2FsFcr0yWzPv9NvNCLwrYIEElKBxI48QyQO4WRbqn1tJucJ3iN8B%2FS4i0k48pKP%2FiIrhxuq6gOihI8BDs59WX%2F6NyTcr6RQxXTaST%2BDAdWND1QrlkDWsnmdNYcfIzL6d%2Ff0fopIm7yFy%2Fxk1qVQsDdOLq5RwuouwUrghXMhIyHpWUsGgzc0L15zziLwnmu%2BZEJGu%2FrGeK29sEJs2x0Chh15aV6W4Zi11ZF07UREYj2ZZrmqoljKTU1UGdt0crlr04M5OJIcsf7%2FU3HwJvQe1RoWFTTBreF%2BG3JbN9CHZ41%2Fe7aC5H%2FafM3dQnmsx36Csy4sWFxeSdciajBn476Qcyq3%2B9FRpuO7%2FsrFQtfKXBioGQbpjMNdlJH1S8b5CRSkT%2Fk1TC6wbZDnFJuSTCpJ7XB7z593X6U3WzCNEyp%2FzEnPj7ihGwq3tPe44sTD73tDCBjqkASI%2Bc8drzEsCa7cTrRWfOhkJu31IUMKLE2T%2FDoiHUewIWqEXoSkEZKqQF6EN1tezBp9ll5x%2FKaMZY7tWHNErU9CNEozp%2F1R9Q3s3VIvdfdU5AuZyaUa%2BwKfrer5hmd5w%2B14ncAAEH49VO7RirTV6kKOcwf8yzFi8%2BOdruJoBV6qPF%2BLTLbYn86Mlb%2FfBjEQHHiYwOlcnpYczqe8kmeWxVAtYEJaR&X-Amz-Signature=1fb245bb4c0f33904a8fafa39a430708b9e992b9db7f7b84507345db99dadb45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFES4GD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyYjXvLo35dS6mqkjo2KSxUwcxXH1om2slXbEW7FBZvwIhAMFTQOI0mjV8YH9dTqGmR4GerzN1rDZanL5w0ZbIvD93KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ErzJv0T9RZJzzSEq3AOMocu0lTIlWzG%2BxnXTX5Qdg0xRJdf5sVQb6wuCikplGc1IZHj5R8mXHzp%2Fczw4LBaFH3FNVFtus7U8w%2F8LY4Kd8D9%2FcZWnE6suEYIeRwP8%2BH4i4e31l8LConOTWVcNjhmEEcK%2FE%2BV5YhCF2tUmOqWRQuSBpbyy9%2FSLV0DGfCnmGRcGkIYbIoPyUuCRfOw6D7X2Z%2FsFcr0yWzPv9NvNCLwrYIEElKBxI48QyQO4WRbqn1tJucJ3iN8B%2FS4i0k48pKP%2FiIrhxuq6gOihI8BDs59WX%2F6NyTcr6RQxXTaST%2BDAdWND1QrlkDWsnmdNYcfIzL6d%2Ff0fopIm7yFy%2Fxk1qVQsDdOLq5RwuouwUrghXMhIyHpWUsGgzc0L15zziLwnmu%2BZEJGu%2FrGeK29sEJs2x0Chh15aV6W4Zi11ZF07UREYj2ZZrmqoljKTU1UGdt0crlr04M5OJIcsf7%2FU3HwJvQe1RoWFTTBreF%2BG3JbN9CHZ41%2Fe7aC5H%2FafM3dQnmsx36Csy4sWFxeSdciajBn476Qcyq3%2B9FRpuO7%2FsrFQtfKXBioGQbpjMNdlJH1S8b5CRSkT%2Fk1TC6wbZDnFJuSTCpJ7XB7z593X6U3WzCNEyp%2FzEnPj7ihGwq3tPe44sTD73tDCBjqkASI%2Bc8drzEsCa7cTrRWfOhkJu31IUMKLE2T%2FDoiHUewIWqEXoSkEZKqQF6EN1tezBp9ll5x%2FKaMZY7tWHNErU9CNEozp%2F1R9Q3s3VIvdfdU5AuZyaUa%2BwKfrer5hmd5w%2B14ncAAEH49VO7RirTV6kKOcwf8yzFi8%2BOdruJoBV6qPF%2BLTLbYn86Mlb%2FfBjEQHHiYwOlcnpYczqe8kmeWxVAtYEJaR&X-Amz-Signature=d58c7349fe078004d82b445e646dff912a6bf1606b618ca6934a54d2429f3b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFES4GD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyYjXvLo35dS6mqkjo2KSxUwcxXH1om2slXbEW7FBZvwIhAMFTQOI0mjV8YH9dTqGmR4GerzN1rDZanL5w0ZbIvD93KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ErzJv0T9RZJzzSEq3AOMocu0lTIlWzG%2BxnXTX5Qdg0xRJdf5sVQb6wuCikplGc1IZHj5R8mXHzp%2Fczw4LBaFH3FNVFtus7U8w%2F8LY4Kd8D9%2FcZWnE6suEYIeRwP8%2BH4i4e31l8LConOTWVcNjhmEEcK%2FE%2BV5YhCF2tUmOqWRQuSBpbyy9%2FSLV0DGfCnmGRcGkIYbIoPyUuCRfOw6D7X2Z%2FsFcr0yWzPv9NvNCLwrYIEElKBxI48QyQO4WRbqn1tJucJ3iN8B%2FS4i0k48pKP%2FiIrhxuq6gOihI8BDs59WX%2F6NyTcr6RQxXTaST%2BDAdWND1QrlkDWsnmdNYcfIzL6d%2Ff0fopIm7yFy%2Fxk1qVQsDdOLq5RwuouwUrghXMhIyHpWUsGgzc0L15zziLwnmu%2BZEJGu%2FrGeK29sEJs2x0Chh15aV6W4Zi11ZF07UREYj2ZZrmqoljKTU1UGdt0crlr04M5OJIcsf7%2FU3HwJvQe1RoWFTTBreF%2BG3JbN9CHZ41%2Fe7aC5H%2FafM3dQnmsx36Csy4sWFxeSdciajBn476Qcyq3%2B9FRpuO7%2FsrFQtfKXBioGQbpjMNdlJH1S8b5CRSkT%2Fk1TC6wbZDnFJuSTCpJ7XB7z593X6U3WzCNEyp%2FzEnPj7ihGwq3tPe44sTD73tDCBjqkASI%2Bc8drzEsCa7cTrRWfOhkJu31IUMKLE2T%2FDoiHUewIWqEXoSkEZKqQF6EN1tezBp9ll5x%2FKaMZY7tWHNErU9CNEozp%2F1R9Q3s3VIvdfdU5AuZyaUa%2BwKfrer5hmd5w%2B14ncAAEH49VO7RirTV6kKOcwf8yzFi8%2BOdruJoBV6qPF%2BLTLbYn86Mlb%2FfBjEQHHiYwOlcnpYczqe8kmeWxVAtYEJaR&X-Amz-Signature=25ad3e5ba6009a452925d37b6cc90b157b26a42a5a5e354e1780c31b78488548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFES4GD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyYjXvLo35dS6mqkjo2KSxUwcxXH1om2slXbEW7FBZvwIhAMFTQOI0mjV8YH9dTqGmR4GerzN1rDZanL5w0ZbIvD93KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ErzJv0T9RZJzzSEq3AOMocu0lTIlWzG%2BxnXTX5Qdg0xRJdf5sVQb6wuCikplGc1IZHj5R8mXHzp%2Fczw4LBaFH3FNVFtus7U8w%2F8LY4Kd8D9%2FcZWnE6suEYIeRwP8%2BH4i4e31l8LConOTWVcNjhmEEcK%2FE%2BV5YhCF2tUmOqWRQuSBpbyy9%2FSLV0DGfCnmGRcGkIYbIoPyUuCRfOw6D7X2Z%2FsFcr0yWzPv9NvNCLwrYIEElKBxI48QyQO4WRbqn1tJucJ3iN8B%2FS4i0k48pKP%2FiIrhxuq6gOihI8BDs59WX%2F6NyTcr6RQxXTaST%2BDAdWND1QrlkDWsnmdNYcfIzL6d%2Ff0fopIm7yFy%2Fxk1qVQsDdOLq5RwuouwUrghXMhIyHpWUsGgzc0L15zziLwnmu%2BZEJGu%2FrGeK29sEJs2x0Chh15aV6W4Zi11ZF07UREYj2ZZrmqoljKTU1UGdt0crlr04M5OJIcsf7%2FU3HwJvQe1RoWFTTBreF%2BG3JbN9CHZ41%2Fe7aC5H%2FafM3dQnmsx36Csy4sWFxeSdciajBn476Qcyq3%2B9FRpuO7%2FsrFQtfKXBioGQbpjMNdlJH1S8b5CRSkT%2Fk1TC6wbZDnFJuSTCpJ7XB7z593X6U3WzCNEyp%2FzEnPj7ihGwq3tPe44sTD73tDCBjqkASI%2Bc8drzEsCa7cTrRWfOhkJu31IUMKLE2T%2FDoiHUewIWqEXoSkEZKqQF6EN1tezBp9ll5x%2FKaMZY7tWHNErU9CNEozp%2F1R9Q3s3VIvdfdU5AuZyaUa%2BwKfrer5hmd5w%2B14ncAAEH49VO7RirTV6kKOcwf8yzFi8%2BOdruJoBV6qPF%2BLTLbYn86Mlb%2FfBjEQHHiYwOlcnpYczqe8kmeWxVAtYEJaR&X-Amz-Signature=6b775cc8971bad0e2ea33055297ff40ed2f3cb70c1c95954f22d36301aeeaef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

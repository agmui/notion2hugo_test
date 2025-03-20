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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVJFJW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIE0hKJ6HDw3ZS5FLr8lUhfNx%2Fu0OhRfVGy2g5Mmje2foAiAdXtVmPY7aC1XB3oRTw7SWNIlHLjluINM%2FmAfwnbSaUSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwk3cWi4BAExyYMEuKtwDwblvUYrwmfeQygriOOhsUIjjK1bCB24qDlirmgeOJ2jn%2Fbr0MgF8hivjlGDx0aX%2BPVVaNC0mbg4tzEAdFl4vF695biR4o6DweM%2BBaD8gmiGASuV9vVRbbgRQ%2B8QXm%2BX4%2Fgp9jnt2VWhW%2FvpOm8DgUpqL44RjBqDr3sBln4OPxHLC9aTOajAR5hDvFiW4isW%2Be1ROULVjIFjjxJ8mAUCXjVx1OYJYnCX3Ru1KhSx9PM8K2UWtRRRZ%2FnccXJP8%2BawVCe5Ef3hZ660AxQoZD4%2BXRJbdbelDBTwfmNYR1koyGea%2FgWdpC9ogbnDhMq0%2By26rtoErpKWQGxPomttGkZwGNHHV9A%2B0o9Xbj6SVhLd5zHwHsRDwv%2BIWCDOKLHLXxezbeUQ553ymXHtJ0yVRka29DXOu2oP8HMqSfZcKLgxhyVs5y4DbtZlHL6JvgygYQF%2BkR%2BXivMAlMdkrjUz%2F6w7GiutGnhayr1umH7eRVBRlNxLmgPt%2BjfZZ0%2B294dHZk5v4myN%2B32K1xtF2qUP8tFXF2W4GMhctQi%2BvqA5Biq8no9T3D3yBPc0uJGhWk7RL9xIIQI28L%2FrxToOUWRNnlkXg3FyG5uPm0e2SJRIQ5I4GdTv4XOd8Cl6xUGMy2oUwuertvgY6pgHWY4r418rKo0sCeGrXdHrgmloVpW1yJ45AyTS0FotFTk2t0LoDB7fFNxQ0nVF3%2Bm1XRy06u3Bjh2otihV0E0RFua1KX0xke94Ka2OYlXhnanK7CUSvAP4bKYm2veozqjvKAo5VZG26kUoJM1dU8oItOPLb7cL0ZVlfG%2BQnId1%2FlBEilmCDrSs5%2FaxzNOriGP%2BKCA1V66%2BTlNVYzKOOlM9uFQ%2BX5l82&X-Amz-Signature=e6dc22ee86b7367541f2da77572a1e52789868593610cb40b7d93db1fc86e62b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVJFJW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIE0hKJ6HDw3ZS5FLr8lUhfNx%2Fu0OhRfVGy2g5Mmje2foAiAdXtVmPY7aC1XB3oRTw7SWNIlHLjluINM%2FmAfwnbSaUSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwk3cWi4BAExyYMEuKtwDwblvUYrwmfeQygriOOhsUIjjK1bCB24qDlirmgeOJ2jn%2Fbr0MgF8hivjlGDx0aX%2BPVVaNC0mbg4tzEAdFl4vF695biR4o6DweM%2BBaD8gmiGASuV9vVRbbgRQ%2B8QXm%2BX4%2Fgp9jnt2VWhW%2FvpOm8DgUpqL44RjBqDr3sBln4OPxHLC9aTOajAR5hDvFiW4isW%2Be1ROULVjIFjjxJ8mAUCXjVx1OYJYnCX3Ru1KhSx9PM8K2UWtRRRZ%2FnccXJP8%2BawVCe5Ef3hZ660AxQoZD4%2BXRJbdbelDBTwfmNYR1koyGea%2FgWdpC9ogbnDhMq0%2By26rtoErpKWQGxPomttGkZwGNHHV9A%2B0o9Xbj6SVhLd5zHwHsRDwv%2BIWCDOKLHLXxezbeUQ553ymXHtJ0yVRka29DXOu2oP8HMqSfZcKLgxhyVs5y4DbtZlHL6JvgygYQF%2BkR%2BXivMAlMdkrjUz%2F6w7GiutGnhayr1umH7eRVBRlNxLmgPt%2BjfZZ0%2B294dHZk5v4myN%2B32K1xtF2qUP8tFXF2W4GMhctQi%2BvqA5Biq8no9T3D3yBPc0uJGhWk7RL9xIIQI28L%2FrxToOUWRNnlkXg3FyG5uPm0e2SJRIQ5I4GdTv4XOd8Cl6xUGMy2oUwuertvgY6pgHWY4r418rKo0sCeGrXdHrgmloVpW1yJ45AyTS0FotFTk2t0LoDB7fFNxQ0nVF3%2Bm1XRy06u3Bjh2otihV0E0RFua1KX0xke94Ka2OYlXhnanK7CUSvAP4bKYm2veozqjvKAo5VZG26kUoJM1dU8oItOPLb7cL0ZVlfG%2BQnId1%2FlBEilmCDrSs5%2FaxzNOriGP%2BKCA1V66%2BTlNVYzKOOlM9uFQ%2BX5l82&X-Amz-Signature=ba6a17e0aab7670710b6ea7ca688a2430ed46bf8e35d07527e25d07c9e7f6e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVJFJW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIE0hKJ6HDw3ZS5FLr8lUhfNx%2Fu0OhRfVGy2g5Mmje2foAiAdXtVmPY7aC1XB3oRTw7SWNIlHLjluINM%2FmAfwnbSaUSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwk3cWi4BAExyYMEuKtwDwblvUYrwmfeQygriOOhsUIjjK1bCB24qDlirmgeOJ2jn%2Fbr0MgF8hivjlGDx0aX%2BPVVaNC0mbg4tzEAdFl4vF695biR4o6DweM%2BBaD8gmiGASuV9vVRbbgRQ%2B8QXm%2BX4%2Fgp9jnt2VWhW%2FvpOm8DgUpqL44RjBqDr3sBln4OPxHLC9aTOajAR5hDvFiW4isW%2Be1ROULVjIFjjxJ8mAUCXjVx1OYJYnCX3Ru1KhSx9PM8K2UWtRRRZ%2FnccXJP8%2BawVCe5Ef3hZ660AxQoZD4%2BXRJbdbelDBTwfmNYR1koyGea%2FgWdpC9ogbnDhMq0%2By26rtoErpKWQGxPomttGkZwGNHHV9A%2B0o9Xbj6SVhLd5zHwHsRDwv%2BIWCDOKLHLXxezbeUQ553ymXHtJ0yVRka29DXOu2oP8HMqSfZcKLgxhyVs5y4DbtZlHL6JvgygYQF%2BkR%2BXivMAlMdkrjUz%2F6w7GiutGnhayr1umH7eRVBRlNxLmgPt%2BjfZZ0%2B294dHZk5v4myN%2B32K1xtF2qUP8tFXF2W4GMhctQi%2BvqA5Biq8no9T3D3yBPc0uJGhWk7RL9xIIQI28L%2FrxToOUWRNnlkXg3FyG5uPm0e2SJRIQ5I4GdTv4XOd8Cl6xUGMy2oUwuertvgY6pgHWY4r418rKo0sCeGrXdHrgmloVpW1yJ45AyTS0FotFTk2t0LoDB7fFNxQ0nVF3%2Bm1XRy06u3Bjh2otihV0E0RFua1KX0xke94Ka2OYlXhnanK7CUSvAP4bKYm2veozqjvKAo5VZG26kUoJM1dU8oItOPLb7cL0ZVlfG%2BQnId1%2FlBEilmCDrSs5%2FaxzNOriGP%2BKCA1V66%2BTlNVYzKOOlM9uFQ%2BX5l82&X-Amz-Signature=91f8cff4d64ae142453bef869de77942391177fbe490ee45a98180ed531245fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVJFJW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIE0hKJ6HDw3ZS5FLr8lUhfNx%2Fu0OhRfVGy2g5Mmje2foAiAdXtVmPY7aC1XB3oRTw7SWNIlHLjluINM%2FmAfwnbSaUSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwk3cWi4BAExyYMEuKtwDwblvUYrwmfeQygriOOhsUIjjK1bCB24qDlirmgeOJ2jn%2Fbr0MgF8hivjlGDx0aX%2BPVVaNC0mbg4tzEAdFl4vF695biR4o6DweM%2BBaD8gmiGASuV9vVRbbgRQ%2B8QXm%2BX4%2Fgp9jnt2VWhW%2FvpOm8DgUpqL44RjBqDr3sBln4OPxHLC9aTOajAR5hDvFiW4isW%2Be1ROULVjIFjjxJ8mAUCXjVx1OYJYnCX3Ru1KhSx9PM8K2UWtRRRZ%2FnccXJP8%2BawVCe5Ef3hZ660AxQoZD4%2BXRJbdbelDBTwfmNYR1koyGea%2FgWdpC9ogbnDhMq0%2By26rtoErpKWQGxPomttGkZwGNHHV9A%2B0o9Xbj6SVhLd5zHwHsRDwv%2BIWCDOKLHLXxezbeUQ553ymXHtJ0yVRka29DXOu2oP8HMqSfZcKLgxhyVs5y4DbtZlHL6JvgygYQF%2BkR%2BXivMAlMdkrjUz%2F6w7GiutGnhayr1umH7eRVBRlNxLmgPt%2BjfZZ0%2B294dHZk5v4myN%2B32K1xtF2qUP8tFXF2W4GMhctQi%2BvqA5Biq8no9T3D3yBPc0uJGhWk7RL9xIIQI28L%2FrxToOUWRNnlkXg3FyG5uPm0e2SJRIQ5I4GdTv4XOd8Cl6xUGMy2oUwuertvgY6pgHWY4r418rKo0sCeGrXdHrgmloVpW1yJ45AyTS0FotFTk2t0LoDB7fFNxQ0nVF3%2Bm1XRy06u3Bjh2otihV0E0RFua1KX0xke94Ka2OYlXhnanK7CUSvAP4bKYm2veozqjvKAo5VZG26kUoJM1dU8oItOPLb7cL0ZVlfG%2BQnId1%2FlBEilmCDrSs5%2FaxzNOriGP%2BKCA1V66%2BTlNVYzKOOlM9uFQ%2BX5l82&X-Amz-Signature=5367f3792f5a28e7302ef05054aa82f658c8f2c2d0b012a550ff1a5f00d14298&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVJFJW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIE0hKJ6HDw3ZS5FLr8lUhfNx%2Fu0OhRfVGy2g5Mmje2foAiAdXtVmPY7aC1XB3oRTw7SWNIlHLjluINM%2FmAfwnbSaUSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwk3cWi4BAExyYMEuKtwDwblvUYrwmfeQygriOOhsUIjjK1bCB24qDlirmgeOJ2jn%2Fbr0MgF8hivjlGDx0aX%2BPVVaNC0mbg4tzEAdFl4vF695biR4o6DweM%2BBaD8gmiGASuV9vVRbbgRQ%2B8QXm%2BX4%2Fgp9jnt2VWhW%2FvpOm8DgUpqL44RjBqDr3sBln4OPxHLC9aTOajAR5hDvFiW4isW%2Be1ROULVjIFjjxJ8mAUCXjVx1OYJYnCX3Ru1KhSx9PM8K2UWtRRRZ%2FnccXJP8%2BawVCe5Ef3hZ660AxQoZD4%2BXRJbdbelDBTwfmNYR1koyGea%2FgWdpC9ogbnDhMq0%2By26rtoErpKWQGxPomttGkZwGNHHV9A%2B0o9Xbj6SVhLd5zHwHsRDwv%2BIWCDOKLHLXxezbeUQ553ymXHtJ0yVRka29DXOu2oP8HMqSfZcKLgxhyVs5y4DbtZlHL6JvgygYQF%2BkR%2BXivMAlMdkrjUz%2F6w7GiutGnhayr1umH7eRVBRlNxLmgPt%2BjfZZ0%2B294dHZk5v4myN%2B32K1xtF2qUP8tFXF2W4GMhctQi%2BvqA5Biq8no9T3D3yBPc0uJGhWk7RL9xIIQI28L%2FrxToOUWRNnlkXg3FyG5uPm0e2SJRIQ5I4GdTv4XOd8Cl6xUGMy2oUwuertvgY6pgHWY4r418rKo0sCeGrXdHrgmloVpW1yJ45AyTS0FotFTk2t0LoDB7fFNxQ0nVF3%2Bm1XRy06u3Bjh2otihV0E0RFua1KX0xke94Ka2OYlXhnanK7CUSvAP4bKYm2veozqjvKAo5VZG26kUoJM1dU8oItOPLb7cL0ZVlfG%2BQnId1%2FlBEilmCDrSs5%2FaxzNOriGP%2BKCA1V66%2BTlNVYzKOOlM9uFQ%2BX5l82&X-Amz-Signature=a5035623bbc3ab1d27dcbaa87a749fcd87dc190276dbd2aaf8e49f11440e2b54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVJFJW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIE0hKJ6HDw3ZS5FLr8lUhfNx%2Fu0OhRfVGy2g5Mmje2foAiAdXtVmPY7aC1XB3oRTw7SWNIlHLjluINM%2FmAfwnbSaUSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwk3cWi4BAExyYMEuKtwDwblvUYrwmfeQygriOOhsUIjjK1bCB24qDlirmgeOJ2jn%2Fbr0MgF8hivjlGDx0aX%2BPVVaNC0mbg4tzEAdFl4vF695biR4o6DweM%2BBaD8gmiGASuV9vVRbbgRQ%2B8QXm%2BX4%2Fgp9jnt2VWhW%2FvpOm8DgUpqL44RjBqDr3sBln4OPxHLC9aTOajAR5hDvFiW4isW%2Be1ROULVjIFjjxJ8mAUCXjVx1OYJYnCX3Ru1KhSx9PM8K2UWtRRRZ%2FnccXJP8%2BawVCe5Ef3hZ660AxQoZD4%2BXRJbdbelDBTwfmNYR1koyGea%2FgWdpC9ogbnDhMq0%2By26rtoErpKWQGxPomttGkZwGNHHV9A%2B0o9Xbj6SVhLd5zHwHsRDwv%2BIWCDOKLHLXxezbeUQ553ymXHtJ0yVRka29DXOu2oP8HMqSfZcKLgxhyVs5y4DbtZlHL6JvgygYQF%2BkR%2BXivMAlMdkrjUz%2F6w7GiutGnhayr1umH7eRVBRlNxLmgPt%2BjfZZ0%2B294dHZk5v4myN%2B32K1xtF2qUP8tFXF2W4GMhctQi%2BvqA5Biq8no9T3D3yBPc0uJGhWk7RL9xIIQI28L%2FrxToOUWRNnlkXg3FyG5uPm0e2SJRIQ5I4GdTv4XOd8Cl6xUGMy2oUwuertvgY6pgHWY4r418rKo0sCeGrXdHrgmloVpW1yJ45AyTS0FotFTk2t0LoDB7fFNxQ0nVF3%2Bm1XRy06u3Bjh2otihV0E0RFua1KX0xke94Ka2OYlXhnanK7CUSvAP4bKYm2veozqjvKAo5VZG26kUoJM1dU8oItOPLb7cL0ZVlfG%2BQnId1%2FlBEilmCDrSs5%2FaxzNOriGP%2BKCA1V66%2BTlNVYzKOOlM9uFQ%2BX5l82&X-Amz-Signature=e01a66a73704f39c7aff07e2343d1eafcf17ea3ca9eee14846e4d0b28103803b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVJFJW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIE0hKJ6HDw3ZS5FLr8lUhfNx%2Fu0OhRfVGy2g5Mmje2foAiAdXtVmPY7aC1XB3oRTw7SWNIlHLjluINM%2FmAfwnbSaUSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwk3cWi4BAExyYMEuKtwDwblvUYrwmfeQygriOOhsUIjjK1bCB24qDlirmgeOJ2jn%2Fbr0MgF8hivjlGDx0aX%2BPVVaNC0mbg4tzEAdFl4vF695biR4o6DweM%2BBaD8gmiGASuV9vVRbbgRQ%2B8QXm%2BX4%2Fgp9jnt2VWhW%2FvpOm8DgUpqL44RjBqDr3sBln4OPxHLC9aTOajAR5hDvFiW4isW%2Be1ROULVjIFjjxJ8mAUCXjVx1OYJYnCX3Ru1KhSx9PM8K2UWtRRRZ%2FnccXJP8%2BawVCe5Ef3hZ660AxQoZD4%2BXRJbdbelDBTwfmNYR1koyGea%2FgWdpC9ogbnDhMq0%2By26rtoErpKWQGxPomttGkZwGNHHV9A%2B0o9Xbj6SVhLd5zHwHsRDwv%2BIWCDOKLHLXxezbeUQ553ymXHtJ0yVRka29DXOu2oP8HMqSfZcKLgxhyVs5y4DbtZlHL6JvgygYQF%2BkR%2BXivMAlMdkrjUz%2F6w7GiutGnhayr1umH7eRVBRlNxLmgPt%2BjfZZ0%2B294dHZk5v4myN%2B32K1xtF2qUP8tFXF2W4GMhctQi%2BvqA5Biq8no9T3D3yBPc0uJGhWk7RL9xIIQI28L%2FrxToOUWRNnlkXg3FyG5uPm0e2SJRIQ5I4GdTv4XOd8Cl6xUGMy2oUwuertvgY6pgHWY4r418rKo0sCeGrXdHrgmloVpW1yJ45AyTS0FotFTk2t0LoDB7fFNxQ0nVF3%2Bm1XRy06u3Bjh2otihV0E0RFua1KX0xke94Ka2OYlXhnanK7CUSvAP4bKYm2veozqjvKAo5VZG26kUoJM1dU8oItOPLb7cL0ZVlfG%2BQnId1%2FlBEilmCDrSs5%2FaxzNOriGP%2BKCA1V66%2BTlNVYzKOOlM9uFQ%2BX5l82&X-Amz-Signature=cbe652b61f64aaf4d666f1c110dc4a4e5cec0b0237548e8b670813c2024db006&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVJFJW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIE0hKJ6HDw3ZS5FLr8lUhfNx%2Fu0OhRfVGy2g5Mmje2foAiAdXtVmPY7aC1XB3oRTw7SWNIlHLjluINM%2FmAfwnbSaUSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwk3cWi4BAExyYMEuKtwDwblvUYrwmfeQygriOOhsUIjjK1bCB24qDlirmgeOJ2jn%2Fbr0MgF8hivjlGDx0aX%2BPVVaNC0mbg4tzEAdFl4vF695biR4o6DweM%2BBaD8gmiGASuV9vVRbbgRQ%2B8QXm%2BX4%2Fgp9jnt2VWhW%2FvpOm8DgUpqL44RjBqDr3sBln4OPxHLC9aTOajAR5hDvFiW4isW%2Be1ROULVjIFjjxJ8mAUCXjVx1OYJYnCX3Ru1KhSx9PM8K2UWtRRRZ%2FnccXJP8%2BawVCe5Ef3hZ660AxQoZD4%2BXRJbdbelDBTwfmNYR1koyGea%2FgWdpC9ogbnDhMq0%2By26rtoErpKWQGxPomttGkZwGNHHV9A%2B0o9Xbj6SVhLd5zHwHsRDwv%2BIWCDOKLHLXxezbeUQ553ymXHtJ0yVRka29DXOu2oP8HMqSfZcKLgxhyVs5y4DbtZlHL6JvgygYQF%2BkR%2BXivMAlMdkrjUz%2F6w7GiutGnhayr1umH7eRVBRlNxLmgPt%2BjfZZ0%2B294dHZk5v4myN%2B32K1xtF2qUP8tFXF2W4GMhctQi%2BvqA5Biq8no9T3D3yBPc0uJGhWk7RL9xIIQI28L%2FrxToOUWRNnlkXg3FyG5uPm0e2SJRIQ5I4GdTv4XOd8Cl6xUGMy2oUwuertvgY6pgHWY4r418rKo0sCeGrXdHrgmloVpW1yJ45AyTS0FotFTk2t0LoDB7fFNxQ0nVF3%2Bm1XRy06u3Bjh2otihV0E0RFua1KX0xke94Ka2OYlXhnanK7CUSvAP4bKYm2veozqjvKAo5VZG26kUoJM1dU8oItOPLb7cL0ZVlfG%2BQnId1%2FlBEilmCDrSs5%2FaxzNOriGP%2BKCA1V66%2BTlNVYzKOOlM9uFQ%2BX5l82&X-Amz-Signature=4ac03f0bea97e6f15642bdace2ef0901763ee86217af1c255c1574ff06d4e779&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

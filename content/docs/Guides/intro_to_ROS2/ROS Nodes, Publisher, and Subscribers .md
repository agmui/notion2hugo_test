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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FITA6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHFTdKVg5adR6AcdEPoh2t893dKqu6LfvMYFL%2BfSoChNAiAlFNfOGYcCrBXZo0w%2BLG9DG5x9mpl0ShR4rCP6MrwflSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2Bu0FnAAhp5azHOBGKtwDfXZC5YcQki%2BiPSePRcZhgRkCNGs3OHYBRtxygJcg7S96oG4BNvckq7wP8YLkWxHw4Gzw1DycTWGX9qGsvjtFbAHNLm%2BHCx%2FCuU4gUkRrhL3d8OCgFH937wn8sPb9X87Qv8lAruI5TrRberUOS4l9qmjdl2PQsEeWS6LqoFcpDIFsMuzAmmxwcVXRazc5b0%2BEFjHSPuWiSPfVY%2B9fEhXR0r6cmkbKYDE4mJ5WeVXJ%2BYbiFKjWFFkxqERIpboaoTZMt4ZACWO4dVoIr04VFxnD8boYhpJTVwtVluI2NZn8ZGRIzjnaDpTEI1sXzmcpBieKv%2FOuNaBciy3PHcPWWNqgrwm33N5T64LU1x6H9qfbGYFeP37Ql%2FgGMnwwXZKYpd%2FXNXeaLOxRW6fmT1N2DYJr1hR20vnXWcKjL9Q86qxZMtAO6BgJDyjH0FC9uBwhLhS8jDVCIp7AmdfRclRB2d0XWfbByl9i3tlS7ubHdwoxm8Itfcbs0fIdJbdN0fdA%2FUU%2F6Az%2Fghc1NUYjXm35ODwx0mZhhqsUQiJ%2BMsvh4IiqfuGsnUBAV8fGGndLdXbW7yZoUYrdtsRd%2Fc5L8C4jev4mQuE9%2BHQPtauaT6qQK44Q01HDpZ4bL2MHbl0krUcwpby0wgY6pgHNJSXtfhvReq8Qr%2B1jorsiYr%2Bx2s7%2FrQYKJ%2B4YTmFFbAnrAqxzyfO6AnV99lemavExAHZ7mnuU63WOTzt8sj5RjwnD8cc8%2BeW8W3xzT5QMTfjhLS813eBtAG34h1XkhePiI42bdQOkbmkTt6uqNOwhaUuguKQD18lhE8F8Hgl7T3Dcn8N%2Bljn80p11aGm4oNAfCl5QuBOjmHRE3HHm%2BSpTK3P%2B17bs&X-Amz-Signature=7e95542892a94cf50ebc512c582da4607e8284ff3a5366836ab338795185c3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FITA6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHFTdKVg5adR6AcdEPoh2t893dKqu6LfvMYFL%2BfSoChNAiAlFNfOGYcCrBXZo0w%2BLG9DG5x9mpl0ShR4rCP6MrwflSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2Bu0FnAAhp5azHOBGKtwDfXZC5YcQki%2BiPSePRcZhgRkCNGs3OHYBRtxygJcg7S96oG4BNvckq7wP8YLkWxHw4Gzw1DycTWGX9qGsvjtFbAHNLm%2BHCx%2FCuU4gUkRrhL3d8OCgFH937wn8sPb9X87Qv8lAruI5TrRberUOS4l9qmjdl2PQsEeWS6LqoFcpDIFsMuzAmmxwcVXRazc5b0%2BEFjHSPuWiSPfVY%2B9fEhXR0r6cmkbKYDE4mJ5WeVXJ%2BYbiFKjWFFkxqERIpboaoTZMt4ZACWO4dVoIr04VFxnD8boYhpJTVwtVluI2NZn8ZGRIzjnaDpTEI1sXzmcpBieKv%2FOuNaBciy3PHcPWWNqgrwm33N5T64LU1x6H9qfbGYFeP37Ql%2FgGMnwwXZKYpd%2FXNXeaLOxRW6fmT1N2DYJr1hR20vnXWcKjL9Q86qxZMtAO6BgJDyjH0FC9uBwhLhS8jDVCIp7AmdfRclRB2d0XWfbByl9i3tlS7ubHdwoxm8Itfcbs0fIdJbdN0fdA%2FUU%2F6Az%2Fghc1NUYjXm35ODwx0mZhhqsUQiJ%2BMsvh4IiqfuGsnUBAV8fGGndLdXbW7yZoUYrdtsRd%2Fc5L8C4jev4mQuE9%2BHQPtauaT6qQK44Q01HDpZ4bL2MHbl0krUcwpby0wgY6pgHNJSXtfhvReq8Qr%2B1jorsiYr%2Bx2s7%2FrQYKJ%2B4YTmFFbAnrAqxzyfO6AnV99lemavExAHZ7mnuU63WOTzt8sj5RjwnD8cc8%2BeW8W3xzT5QMTfjhLS813eBtAG34h1XkhePiI42bdQOkbmkTt6uqNOwhaUuguKQD18lhE8F8Hgl7T3Dcn8N%2Bljn80p11aGm4oNAfCl5QuBOjmHRE3HHm%2BSpTK3P%2B17bs&X-Amz-Signature=66fe1b1f841b3a12c05a68597cc16d212c4399f647c05f23dd5fe87c113ae865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FITA6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHFTdKVg5adR6AcdEPoh2t893dKqu6LfvMYFL%2BfSoChNAiAlFNfOGYcCrBXZo0w%2BLG9DG5x9mpl0ShR4rCP6MrwflSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2Bu0FnAAhp5azHOBGKtwDfXZC5YcQki%2BiPSePRcZhgRkCNGs3OHYBRtxygJcg7S96oG4BNvckq7wP8YLkWxHw4Gzw1DycTWGX9qGsvjtFbAHNLm%2BHCx%2FCuU4gUkRrhL3d8OCgFH937wn8sPb9X87Qv8lAruI5TrRberUOS4l9qmjdl2PQsEeWS6LqoFcpDIFsMuzAmmxwcVXRazc5b0%2BEFjHSPuWiSPfVY%2B9fEhXR0r6cmkbKYDE4mJ5WeVXJ%2BYbiFKjWFFkxqERIpboaoTZMt4ZACWO4dVoIr04VFxnD8boYhpJTVwtVluI2NZn8ZGRIzjnaDpTEI1sXzmcpBieKv%2FOuNaBciy3PHcPWWNqgrwm33N5T64LU1x6H9qfbGYFeP37Ql%2FgGMnwwXZKYpd%2FXNXeaLOxRW6fmT1N2DYJr1hR20vnXWcKjL9Q86qxZMtAO6BgJDyjH0FC9uBwhLhS8jDVCIp7AmdfRclRB2d0XWfbByl9i3tlS7ubHdwoxm8Itfcbs0fIdJbdN0fdA%2FUU%2F6Az%2Fghc1NUYjXm35ODwx0mZhhqsUQiJ%2BMsvh4IiqfuGsnUBAV8fGGndLdXbW7yZoUYrdtsRd%2Fc5L8C4jev4mQuE9%2BHQPtauaT6qQK44Q01HDpZ4bL2MHbl0krUcwpby0wgY6pgHNJSXtfhvReq8Qr%2B1jorsiYr%2Bx2s7%2FrQYKJ%2B4YTmFFbAnrAqxzyfO6AnV99lemavExAHZ7mnuU63WOTzt8sj5RjwnD8cc8%2BeW8W3xzT5QMTfjhLS813eBtAG34h1XkhePiI42bdQOkbmkTt6uqNOwhaUuguKQD18lhE8F8Hgl7T3Dcn8N%2Bljn80p11aGm4oNAfCl5QuBOjmHRE3HHm%2BSpTK3P%2B17bs&X-Amz-Signature=855c3968bec5b09eefcf3dc1d9f454cd575873d7bdd5a3a3dabaf5a899121734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FITA6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHFTdKVg5adR6AcdEPoh2t893dKqu6LfvMYFL%2BfSoChNAiAlFNfOGYcCrBXZo0w%2BLG9DG5x9mpl0ShR4rCP6MrwflSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2Bu0FnAAhp5azHOBGKtwDfXZC5YcQki%2BiPSePRcZhgRkCNGs3OHYBRtxygJcg7S96oG4BNvckq7wP8YLkWxHw4Gzw1DycTWGX9qGsvjtFbAHNLm%2BHCx%2FCuU4gUkRrhL3d8OCgFH937wn8sPb9X87Qv8lAruI5TrRberUOS4l9qmjdl2PQsEeWS6LqoFcpDIFsMuzAmmxwcVXRazc5b0%2BEFjHSPuWiSPfVY%2B9fEhXR0r6cmkbKYDE4mJ5WeVXJ%2BYbiFKjWFFkxqERIpboaoTZMt4ZACWO4dVoIr04VFxnD8boYhpJTVwtVluI2NZn8ZGRIzjnaDpTEI1sXzmcpBieKv%2FOuNaBciy3PHcPWWNqgrwm33N5T64LU1x6H9qfbGYFeP37Ql%2FgGMnwwXZKYpd%2FXNXeaLOxRW6fmT1N2DYJr1hR20vnXWcKjL9Q86qxZMtAO6BgJDyjH0FC9uBwhLhS8jDVCIp7AmdfRclRB2d0XWfbByl9i3tlS7ubHdwoxm8Itfcbs0fIdJbdN0fdA%2FUU%2F6Az%2Fghc1NUYjXm35ODwx0mZhhqsUQiJ%2BMsvh4IiqfuGsnUBAV8fGGndLdXbW7yZoUYrdtsRd%2Fc5L8C4jev4mQuE9%2BHQPtauaT6qQK44Q01HDpZ4bL2MHbl0krUcwpby0wgY6pgHNJSXtfhvReq8Qr%2B1jorsiYr%2Bx2s7%2FrQYKJ%2B4YTmFFbAnrAqxzyfO6AnV99lemavExAHZ7mnuU63WOTzt8sj5RjwnD8cc8%2BeW8W3xzT5QMTfjhLS813eBtAG34h1XkhePiI42bdQOkbmkTt6uqNOwhaUuguKQD18lhE8F8Hgl7T3Dcn8N%2Bljn80p11aGm4oNAfCl5QuBOjmHRE3HHm%2BSpTK3P%2B17bs&X-Amz-Signature=9580801a0863d3f3d9b701bb0862a2e6a63a2ecd074a5805795b1d888e6ca7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FITA6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHFTdKVg5adR6AcdEPoh2t893dKqu6LfvMYFL%2BfSoChNAiAlFNfOGYcCrBXZo0w%2BLG9DG5x9mpl0ShR4rCP6MrwflSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2Bu0FnAAhp5azHOBGKtwDfXZC5YcQki%2BiPSePRcZhgRkCNGs3OHYBRtxygJcg7S96oG4BNvckq7wP8YLkWxHw4Gzw1DycTWGX9qGsvjtFbAHNLm%2BHCx%2FCuU4gUkRrhL3d8OCgFH937wn8sPb9X87Qv8lAruI5TrRberUOS4l9qmjdl2PQsEeWS6LqoFcpDIFsMuzAmmxwcVXRazc5b0%2BEFjHSPuWiSPfVY%2B9fEhXR0r6cmkbKYDE4mJ5WeVXJ%2BYbiFKjWFFkxqERIpboaoTZMt4ZACWO4dVoIr04VFxnD8boYhpJTVwtVluI2NZn8ZGRIzjnaDpTEI1sXzmcpBieKv%2FOuNaBciy3PHcPWWNqgrwm33N5T64LU1x6H9qfbGYFeP37Ql%2FgGMnwwXZKYpd%2FXNXeaLOxRW6fmT1N2DYJr1hR20vnXWcKjL9Q86qxZMtAO6BgJDyjH0FC9uBwhLhS8jDVCIp7AmdfRclRB2d0XWfbByl9i3tlS7ubHdwoxm8Itfcbs0fIdJbdN0fdA%2FUU%2F6Az%2Fghc1NUYjXm35ODwx0mZhhqsUQiJ%2BMsvh4IiqfuGsnUBAV8fGGndLdXbW7yZoUYrdtsRd%2Fc5L8C4jev4mQuE9%2BHQPtauaT6qQK44Q01HDpZ4bL2MHbl0krUcwpby0wgY6pgHNJSXtfhvReq8Qr%2B1jorsiYr%2Bx2s7%2FrQYKJ%2B4YTmFFbAnrAqxzyfO6AnV99lemavExAHZ7mnuU63WOTzt8sj5RjwnD8cc8%2BeW8W3xzT5QMTfjhLS813eBtAG34h1XkhePiI42bdQOkbmkTt6uqNOwhaUuguKQD18lhE8F8Hgl7T3Dcn8N%2Bljn80p11aGm4oNAfCl5QuBOjmHRE3HHm%2BSpTK3P%2B17bs&X-Amz-Signature=efff898823ba7551db76211e095ba31e652988fef3132c9a1ab7bd9ae51227e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FITA6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHFTdKVg5adR6AcdEPoh2t893dKqu6LfvMYFL%2BfSoChNAiAlFNfOGYcCrBXZo0w%2BLG9DG5x9mpl0ShR4rCP6MrwflSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2Bu0FnAAhp5azHOBGKtwDfXZC5YcQki%2BiPSePRcZhgRkCNGs3OHYBRtxygJcg7S96oG4BNvckq7wP8YLkWxHw4Gzw1DycTWGX9qGsvjtFbAHNLm%2BHCx%2FCuU4gUkRrhL3d8OCgFH937wn8sPb9X87Qv8lAruI5TrRberUOS4l9qmjdl2PQsEeWS6LqoFcpDIFsMuzAmmxwcVXRazc5b0%2BEFjHSPuWiSPfVY%2B9fEhXR0r6cmkbKYDE4mJ5WeVXJ%2BYbiFKjWFFkxqERIpboaoTZMt4ZACWO4dVoIr04VFxnD8boYhpJTVwtVluI2NZn8ZGRIzjnaDpTEI1sXzmcpBieKv%2FOuNaBciy3PHcPWWNqgrwm33N5T64LU1x6H9qfbGYFeP37Ql%2FgGMnwwXZKYpd%2FXNXeaLOxRW6fmT1N2DYJr1hR20vnXWcKjL9Q86qxZMtAO6BgJDyjH0FC9uBwhLhS8jDVCIp7AmdfRclRB2d0XWfbByl9i3tlS7ubHdwoxm8Itfcbs0fIdJbdN0fdA%2FUU%2F6Az%2Fghc1NUYjXm35ODwx0mZhhqsUQiJ%2BMsvh4IiqfuGsnUBAV8fGGndLdXbW7yZoUYrdtsRd%2Fc5L8C4jev4mQuE9%2BHQPtauaT6qQK44Q01HDpZ4bL2MHbl0krUcwpby0wgY6pgHNJSXtfhvReq8Qr%2B1jorsiYr%2Bx2s7%2FrQYKJ%2B4YTmFFbAnrAqxzyfO6AnV99lemavExAHZ7mnuU63WOTzt8sj5RjwnD8cc8%2BeW8W3xzT5QMTfjhLS813eBtAG34h1XkhePiI42bdQOkbmkTt6uqNOwhaUuguKQD18lhE8F8Hgl7T3Dcn8N%2Bljn80p11aGm4oNAfCl5QuBOjmHRE3HHm%2BSpTK3P%2B17bs&X-Amz-Signature=f251cfd5efdda721a414dfd5602846832b5c5402d8449b53d0b67e8bba268135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FITA6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHFTdKVg5adR6AcdEPoh2t893dKqu6LfvMYFL%2BfSoChNAiAlFNfOGYcCrBXZo0w%2BLG9DG5x9mpl0ShR4rCP6MrwflSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2Bu0FnAAhp5azHOBGKtwDfXZC5YcQki%2BiPSePRcZhgRkCNGs3OHYBRtxygJcg7S96oG4BNvckq7wP8YLkWxHw4Gzw1DycTWGX9qGsvjtFbAHNLm%2BHCx%2FCuU4gUkRrhL3d8OCgFH937wn8sPb9X87Qv8lAruI5TrRberUOS4l9qmjdl2PQsEeWS6LqoFcpDIFsMuzAmmxwcVXRazc5b0%2BEFjHSPuWiSPfVY%2B9fEhXR0r6cmkbKYDE4mJ5WeVXJ%2BYbiFKjWFFkxqERIpboaoTZMt4ZACWO4dVoIr04VFxnD8boYhpJTVwtVluI2NZn8ZGRIzjnaDpTEI1sXzmcpBieKv%2FOuNaBciy3PHcPWWNqgrwm33N5T64LU1x6H9qfbGYFeP37Ql%2FgGMnwwXZKYpd%2FXNXeaLOxRW6fmT1N2DYJr1hR20vnXWcKjL9Q86qxZMtAO6BgJDyjH0FC9uBwhLhS8jDVCIp7AmdfRclRB2d0XWfbByl9i3tlS7ubHdwoxm8Itfcbs0fIdJbdN0fdA%2FUU%2F6Az%2Fghc1NUYjXm35ODwx0mZhhqsUQiJ%2BMsvh4IiqfuGsnUBAV8fGGndLdXbW7yZoUYrdtsRd%2Fc5L8C4jev4mQuE9%2BHQPtauaT6qQK44Q01HDpZ4bL2MHbl0krUcwpby0wgY6pgHNJSXtfhvReq8Qr%2B1jorsiYr%2Bx2s7%2FrQYKJ%2B4YTmFFbAnrAqxzyfO6AnV99lemavExAHZ7mnuU63WOTzt8sj5RjwnD8cc8%2BeW8W3xzT5QMTfjhLS813eBtAG34h1XkhePiI42bdQOkbmkTt6uqNOwhaUuguKQD18lhE8F8Hgl7T3Dcn8N%2Bljn80p11aGm4oNAfCl5QuBOjmHRE3HHm%2BSpTK3P%2B17bs&X-Amz-Signature=61804b3f9d37cea0d920c46f095cb4701f8eae331e551a78b0d62a8013e29b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FITA6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHFTdKVg5adR6AcdEPoh2t893dKqu6LfvMYFL%2BfSoChNAiAlFNfOGYcCrBXZo0w%2BLG9DG5x9mpl0ShR4rCP6MrwflSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2Bu0FnAAhp5azHOBGKtwDfXZC5YcQki%2BiPSePRcZhgRkCNGs3OHYBRtxygJcg7S96oG4BNvckq7wP8YLkWxHw4Gzw1DycTWGX9qGsvjtFbAHNLm%2BHCx%2FCuU4gUkRrhL3d8OCgFH937wn8sPb9X87Qv8lAruI5TrRberUOS4l9qmjdl2PQsEeWS6LqoFcpDIFsMuzAmmxwcVXRazc5b0%2BEFjHSPuWiSPfVY%2B9fEhXR0r6cmkbKYDE4mJ5WeVXJ%2BYbiFKjWFFkxqERIpboaoTZMt4ZACWO4dVoIr04VFxnD8boYhpJTVwtVluI2NZn8ZGRIzjnaDpTEI1sXzmcpBieKv%2FOuNaBciy3PHcPWWNqgrwm33N5T64LU1x6H9qfbGYFeP37Ql%2FgGMnwwXZKYpd%2FXNXeaLOxRW6fmT1N2DYJr1hR20vnXWcKjL9Q86qxZMtAO6BgJDyjH0FC9uBwhLhS8jDVCIp7AmdfRclRB2d0XWfbByl9i3tlS7ubHdwoxm8Itfcbs0fIdJbdN0fdA%2FUU%2F6Az%2Fghc1NUYjXm35ODwx0mZhhqsUQiJ%2BMsvh4IiqfuGsnUBAV8fGGndLdXbW7yZoUYrdtsRd%2Fc5L8C4jev4mQuE9%2BHQPtauaT6qQK44Q01HDpZ4bL2MHbl0krUcwpby0wgY6pgHNJSXtfhvReq8Qr%2B1jorsiYr%2Bx2s7%2FrQYKJ%2B4YTmFFbAnrAqxzyfO6AnV99lemavExAHZ7mnuU63WOTzt8sj5RjwnD8cc8%2BeW8W3xzT5QMTfjhLS813eBtAG34h1XkhePiI42bdQOkbmkTt6uqNOwhaUuguKQD18lhE8F8Hgl7T3Dcn8N%2Bljn80p11aGm4oNAfCl5QuBOjmHRE3HHm%2BSpTK3P%2B17bs&X-Amz-Signature=5d5f906df737bb97493345cb0b1d0c971119f847f45c132f30fbe3f1e6379f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

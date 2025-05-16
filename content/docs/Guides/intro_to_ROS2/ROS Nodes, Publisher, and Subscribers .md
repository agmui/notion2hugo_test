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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6PDC2D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BO9PAT8dyZ%2BWPM8nvN7hEVcB244VN8tdpQcsGbOjx1AiAzxa%2BN62aW6MnYILx%2FXt5IbTwDa%2BmZ22mt2XyZp%2BQ1fSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMux14a2g4stcrpMPWKtwDm0%2FcLoQzfQtcYhs1yOsXvAvSVZiQcF0fu7hEg8tMwNkz2DXZf1lEA%2FrbW5%2B4z8TWz9Luiqrwbtke2%2FOwnQbfMdhuSR4ilDmj7C%2FO%2FgJ0zI7pf1ZiV0XI6GntFITXyoNAhTtJCCWdiT5F86e5hHpeYNo6SZWF4D8tq8q%2FUSWe%2F706YEMwsl8lK1KM14mEEWCHAsxCzuGO6D%2FU9BO7Zc798dUdCA6vnI8OQYLpfa99gWZGM56zXpEN0m6iM6jscytugL2kwnbnSdHhasE29W4Ofu8jTwXGl0VAyRgXDIsuntsrk7aB9hJne32yH3FbEmniw1kDOAfScKR0GMZa9P9%2BXJGGOeIXxlIsAs0WIwvuNR9QJYXWRXZ1At3QSvuaMKHCoLmbEWjo%2BjuqLrdMCUFSDpoEPLJCDe%2FF7jOhHp%2Fax0Fk5n0NQxF%2Ff3BmrkkcsiFhXAbuRS5lHcpi%2Bjl1qKmlMcBAswfNY5HZi%2BP4xzStSLyPqbLxJ68VXfwJTzVD%2B6x3XM8ykaSmQjfpMBqP3U6jjyQC%2Ba2J1Vzg3SNutJ53PoNtiqiLqIPfIfgeJnak3ZXvbN6Z4xBrf6kbdhhXGK2nvMbhXnQ%2F5UCDpY9zKSuh1ixBWUzar6FRPoMvmSgwy5udwQY6pgEmxOZSaDIELe%2BiHDDVpdXUYMTarRo7PtDsytAgcBvPp7nVbZrZ%2FJDf%2F%2FWBJ%2BE1y7Lvmf17xT3fC7aZJSAjYlZtcaAyM%2Bixzt68fkXcLOJ3r8F3ps55n8o%2FwLl%2F5Aia0lKoETh9N1QoO8h%2Fnxteg02qV3gPGuaNZjfOtCVlOLFPC%2FotdoHd%2BFqwe%2FxZ6MekqYsLjlIQk%2BAj9HDLH7dG9CGJU0NHOefE&X-Amz-Signature=289a8869b1f232341f3e785c0c6f6d0910d3503a1eb0f940a6cfd372f656dc85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6PDC2D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BO9PAT8dyZ%2BWPM8nvN7hEVcB244VN8tdpQcsGbOjx1AiAzxa%2BN62aW6MnYILx%2FXt5IbTwDa%2BmZ22mt2XyZp%2BQ1fSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMux14a2g4stcrpMPWKtwDm0%2FcLoQzfQtcYhs1yOsXvAvSVZiQcF0fu7hEg8tMwNkz2DXZf1lEA%2FrbW5%2B4z8TWz9Luiqrwbtke2%2FOwnQbfMdhuSR4ilDmj7C%2FO%2FgJ0zI7pf1ZiV0XI6GntFITXyoNAhTtJCCWdiT5F86e5hHpeYNo6SZWF4D8tq8q%2FUSWe%2F706YEMwsl8lK1KM14mEEWCHAsxCzuGO6D%2FU9BO7Zc798dUdCA6vnI8OQYLpfa99gWZGM56zXpEN0m6iM6jscytugL2kwnbnSdHhasE29W4Ofu8jTwXGl0VAyRgXDIsuntsrk7aB9hJne32yH3FbEmniw1kDOAfScKR0GMZa9P9%2BXJGGOeIXxlIsAs0WIwvuNR9QJYXWRXZ1At3QSvuaMKHCoLmbEWjo%2BjuqLrdMCUFSDpoEPLJCDe%2FF7jOhHp%2Fax0Fk5n0NQxF%2Ff3BmrkkcsiFhXAbuRS5lHcpi%2Bjl1qKmlMcBAswfNY5HZi%2BP4xzStSLyPqbLxJ68VXfwJTzVD%2B6x3XM8ykaSmQjfpMBqP3U6jjyQC%2Ba2J1Vzg3SNutJ53PoNtiqiLqIPfIfgeJnak3ZXvbN6Z4xBrf6kbdhhXGK2nvMbhXnQ%2F5UCDpY9zKSuh1ixBWUzar6FRPoMvmSgwy5udwQY6pgEmxOZSaDIELe%2BiHDDVpdXUYMTarRo7PtDsytAgcBvPp7nVbZrZ%2FJDf%2F%2FWBJ%2BE1y7Lvmf17xT3fC7aZJSAjYlZtcaAyM%2Bixzt68fkXcLOJ3r8F3ps55n8o%2FwLl%2F5Aia0lKoETh9N1QoO8h%2Fnxteg02qV3gPGuaNZjfOtCVlOLFPC%2FotdoHd%2BFqwe%2FxZ6MekqYsLjlIQk%2BAj9HDLH7dG9CGJU0NHOefE&X-Amz-Signature=8227387ce58761eca47dc0ccebf27cc0eca032c0380528775fac6ec0b5472f69&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6PDC2D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BO9PAT8dyZ%2BWPM8nvN7hEVcB244VN8tdpQcsGbOjx1AiAzxa%2BN62aW6MnYILx%2FXt5IbTwDa%2BmZ22mt2XyZp%2BQ1fSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMux14a2g4stcrpMPWKtwDm0%2FcLoQzfQtcYhs1yOsXvAvSVZiQcF0fu7hEg8tMwNkz2DXZf1lEA%2FrbW5%2B4z8TWz9Luiqrwbtke2%2FOwnQbfMdhuSR4ilDmj7C%2FO%2FgJ0zI7pf1ZiV0XI6GntFITXyoNAhTtJCCWdiT5F86e5hHpeYNo6SZWF4D8tq8q%2FUSWe%2F706YEMwsl8lK1KM14mEEWCHAsxCzuGO6D%2FU9BO7Zc798dUdCA6vnI8OQYLpfa99gWZGM56zXpEN0m6iM6jscytugL2kwnbnSdHhasE29W4Ofu8jTwXGl0VAyRgXDIsuntsrk7aB9hJne32yH3FbEmniw1kDOAfScKR0GMZa9P9%2BXJGGOeIXxlIsAs0WIwvuNR9QJYXWRXZ1At3QSvuaMKHCoLmbEWjo%2BjuqLrdMCUFSDpoEPLJCDe%2FF7jOhHp%2Fax0Fk5n0NQxF%2Ff3BmrkkcsiFhXAbuRS5lHcpi%2Bjl1qKmlMcBAswfNY5HZi%2BP4xzStSLyPqbLxJ68VXfwJTzVD%2B6x3XM8ykaSmQjfpMBqP3U6jjyQC%2Ba2J1Vzg3SNutJ53PoNtiqiLqIPfIfgeJnak3ZXvbN6Z4xBrf6kbdhhXGK2nvMbhXnQ%2F5UCDpY9zKSuh1ixBWUzar6FRPoMvmSgwy5udwQY6pgEmxOZSaDIELe%2BiHDDVpdXUYMTarRo7PtDsytAgcBvPp7nVbZrZ%2FJDf%2F%2FWBJ%2BE1y7Lvmf17xT3fC7aZJSAjYlZtcaAyM%2Bixzt68fkXcLOJ3r8F3ps55n8o%2FwLl%2F5Aia0lKoETh9N1QoO8h%2Fnxteg02qV3gPGuaNZjfOtCVlOLFPC%2FotdoHd%2BFqwe%2FxZ6MekqYsLjlIQk%2BAj9HDLH7dG9CGJU0NHOefE&X-Amz-Signature=568e4477bd84588c79a4b7989110d9a9a1ccb83a245141eb769f4dc60fdb4e58&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6PDC2D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BO9PAT8dyZ%2BWPM8nvN7hEVcB244VN8tdpQcsGbOjx1AiAzxa%2BN62aW6MnYILx%2FXt5IbTwDa%2BmZ22mt2XyZp%2BQ1fSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMux14a2g4stcrpMPWKtwDm0%2FcLoQzfQtcYhs1yOsXvAvSVZiQcF0fu7hEg8tMwNkz2DXZf1lEA%2FrbW5%2B4z8TWz9Luiqrwbtke2%2FOwnQbfMdhuSR4ilDmj7C%2FO%2FgJ0zI7pf1ZiV0XI6GntFITXyoNAhTtJCCWdiT5F86e5hHpeYNo6SZWF4D8tq8q%2FUSWe%2F706YEMwsl8lK1KM14mEEWCHAsxCzuGO6D%2FU9BO7Zc798dUdCA6vnI8OQYLpfa99gWZGM56zXpEN0m6iM6jscytugL2kwnbnSdHhasE29W4Ofu8jTwXGl0VAyRgXDIsuntsrk7aB9hJne32yH3FbEmniw1kDOAfScKR0GMZa9P9%2BXJGGOeIXxlIsAs0WIwvuNR9QJYXWRXZ1At3QSvuaMKHCoLmbEWjo%2BjuqLrdMCUFSDpoEPLJCDe%2FF7jOhHp%2Fax0Fk5n0NQxF%2Ff3BmrkkcsiFhXAbuRS5lHcpi%2Bjl1qKmlMcBAswfNY5HZi%2BP4xzStSLyPqbLxJ68VXfwJTzVD%2B6x3XM8ykaSmQjfpMBqP3U6jjyQC%2Ba2J1Vzg3SNutJ53PoNtiqiLqIPfIfgeJnak3ZXvbN6Z4xBrf6kbdhhXGK2nvMbhXnQ%2F5UCDpY9zKSuh1ixBWUzar6FRPoMvmSgwy5udwQY6pgEmxOZSaDIELe%2BiHDDVpdXUYMTarRo7PtDsytAgcBvPp7nVbZrZ%2FJDf%2F%2FWBJ%2BE1y7Lvmf17xT3fC7aZJSAjYlZtcaAyM%2Bixzt68fkXcLOJ3r8F3ps55n8o%2FwLl%2F5Aia0lKoETh9N1QoO8h%2Fnxteg02qV3gPGuaNZjfOtCVlOLFPC%2FotdoHd%2BFqwe%2FxZ6MekqYsLjlIQk%2BAj9HDLH7dG9CGJU0NHOefE&X-Amz-Signature=e962ea962d46ca00759a2b4f849429d9b35cbb72f1e36fc85327bd12b5a4d258&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6PDC2D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BO9PAT8dyZ%2BWPM8nvN7hEVcB244VN8tdpQcsGbOjx1AiAzxa%2BN62aW6MnYILx%2FXt5IbTwDa%2BmZ22mt2XyZp%2BQ1fSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMux14a2g4stcrpMPWKtwDm0%2FcLoQzfQtcYhs1yOsXvAvSVZiQcF0fu7hEg8tMwNkz2DXZf1lEA%2FrbW5%2B4z8TWz9Luiqrwbtke2%2FOwnQbfMdhuSR4ilDmj7C%2FO%2FgJ0zI7pf1ZiV0XI6GntFITXyoNAhTtJCCWdiT5F86e5hHpeYNo6SZWF4D8tq8q%2FUSWe%2F706YEMwsl8lK1KM14mEEWCHAsxCzuGO6D%2FU9BO7Zc798dUdCA6vnI8OQYLpfa99gWZGM56zXpEN0m6iM6jscytugL2kwnbnSdHhasE29W4Ofu8jTwXGl0VAyRgXDIsuntsrk7aB9hJne32yH3FbEmniw1kDOAfScKR0GMZa9P9%2BXJGGOeIXxlIsAs0WIwvuNR9QJYXWRXZ1At3QSvuaMKHCoLmbEWjo%2BjuqLrdMCUFSDpoEPLJCDe%2FF7jOhHp%2Fax0Fk5n0NQxF%2Ff3BmrkkcsiFhXAbuRS5lHcpi%2Bjl1qKmlMcBAswfNY5HZi%2BP4xzStSLyPqbLxJ68VXfwJTzVD%2B6x3XM8ykaSmQjfpMBqP3U6jjyQC%2Ba2J1Vzg3SNutJ53PoNtiqiLqIPfIfgeJnak3ZXvbN6Z4xBrf6kbdhhXGK2nvMbhXnQ%2F5UCDpY9zKSuh1ixBWUzar6FRPoMvmSgwy5udwQY6pgEmxOZSaDIELe%2BiHDDVpdXUYMTarRo7PtDsytAgcBvPp7nVbZrZ%2FJDf%2F%2FWBJ%2BE1y7Lvmf17xT3fC7aZJSAjYlZtcaAyM%2Bixzt68fkXcLOJ3r8F3ps55n8o%2FwLl%2F5Aia0lKoETh9N1QoO8h%2Fnxteg02qV3gPGuaNZjfOtCVlOLFPC%2FotdoHd%2BFqwe%2FxZ6MekqYsLjlIQk%2BAj9HDLH7dG9CGJU0NHOefE&X-Amz-Signature=8aeec6997b6cb1b68d572ced8abaaa5b1f2260acd19ca88deb922a48b13327a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6PDC2D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BO9PAT8dyZ%2BWPM8nvN7hEVcB244VN8tdpQcsGbOjx1AiAzxa%2BN62aW6MnYILx%2FXt5IbTwDa%2BmZ22mt2XyZp%2BQ1fSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMux14a2g4stcrpMPWKtwDm0%2FcLoQzfQtcYhs1yOsXvAvSVZiQcF0fu7hEg8tMwNkz2DXZf1lEA%2FrbW5%2B4z8TWz9Luiqrwbtke2%2FOwnQbfMdhuSR4ilDmj7C%2FO%2FgJ0zI7pf1ZiV0XI6GntFITXyoNAhTtJCCWdiT5F86e5hHpeYNo6SZWF4D8tq8q%2FUSWe%2F706YEMwsl8lK1KM14mEEWCHAsxCzuGO6D%2FU9BO7Zc798dUdCA6vnI8OQYLpfa99gWZGM56zXpEN0m6iM6jscytugL2kwnbnSdHhasE29W4Ofu8jTwXGl0VAyRgXDIsuntsrk7aB9hJne32yH3FbEmniw1kDOAfScKR0GMZa9P9%2BXJGGOeIXxlIsAs0WIwvuNR9QJYXWRXZ1At3QSvuaMKHCoLmbEWjo%2BjuqLrdMCUFSDpoEPLJCDe%2FF7jOhHp%2Fax0Fk5n0NQxF%2Ff3BmrkkcsiFhXAbuRS5lHcpi%2Bjl1qKmlMcBAswfNY5HZi%2BP4xzStSLyPqbLxJ68VXfwJTzVD%2B6x3XM8ykaSmQjfpMBqP3U6jjyQC%2Ba2J1Vzg3SNutJ53PoNtiqiLqIPfIfgeJnak3ZXvbN6Z4xBrf6kbdhhXGK2nvMbhXnQ%2F5UCDpY9zKSuh1ixBWUzar6FRPoMvmSgwy5udwQY6pgEmxOZSaDIELe%2BiHDDVpdXUYMTarRo7PtDsytAgcBvPp7nVbZrZ%2FJDf%2F%2FWBJ%2BE1y7Lvmf17xT3fC7aZJSAjYlZtcaAyM%2Bixzt68fkXcLOJ3r8F3ps55n8o%2FwLl%2F5Aia0lKoETh9N1QoO8h%2Fnxteg02qV3gPGuaNZjfOtCVlOLFPC%2FotdoHd%2BFqwe%2FxZ6MekqYsLjlIQk%2BAj9HDLH7dG9CGJU0NHOefE&X-Amz-Signature=fd4c30f0c6f471cfe41744c2928b7649c7b380fb7ad34f816e245b7b028d9f22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6PDC2D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BO9PAT8dyZ%2BWPM8nvN7hEVcB244VN8tdpQcsGbOjx1AiAzxa%2BN62aW6MnYILx%2FXt5IbTwDa%2BmZ22mt2XyZp%2BQ1fSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMux14a2g4stcrpMPWKtwDm0%2FcLoQzfQtcYhs1yOsXvAvSVZiQcF0fu7hEg8tMwNkz2DXZf1lEA%2FrbW5%2B4z8TWz9Luiqrwbtke2%2FOwnQbfMdhuSR4ilDmj7C%2FO%2FgJ0zI7pf1ZiV0XI6GntFITXyoNAhTtJCCWdiT5F86e5hHpeYNo6SZWF4D8tq8q%2FUSWe%2F706YEMwsl8lK1KM14mEEWCHAsxCzuGO6D%2FU9BO7Zc798dUdCA6vnI8OQYLpfa99gWZGM56zXpEN0m6iM6jscytugL2kwnbnSdHhasE29W4Ofu8jTwXGl0VAyRgXDIsuntsrk7aB9hJne32yH3FbEmniw1kDOAfScKR0GMZa9P9%2BXJGGOeIXxlIsAs0WIwvuNR9QJYXWRXZ1At3QSvuaMKHCoLmbEWjo%2BjuqLrdMCUFSDpoEPLJCDe%2FF7jOhHp%2Fax0Fk5n0NQxF%2Ff3BmrkkcsiFhXAbuRS5lHcpi%2Bjl1qKmlMcBAswfNY5HZi%2BP4xzStSLyPqbLxJ68VXfwJTzVD%2B6x3XM8ykaSmQjfpMBqP3U6jjyQC%2Ba2J1Vzg3SNutJ53PoNtiqiLqIPfIfgeJnak3ZXvbN6Z4xBrf6kbdhhXGK2nvMbhXnQ%2F5UCDpY9zKSuh1ixBWUzar6FRPoMvmSgwy5udwQY6pgEmxOZSaDIELe%2BiHDDVpdXUYMTarRo7PtDsytAgcBvPp7nVbZrZ%2FJDf%2F%2FWBJ%2BE1y7Lvmf17xT3fC7aZJSAjYlZtcaAyM%2Bixzt68fkXcLOJ3r8F3ps55n8o%2FwLl%2F5Aia0lKoETh9N1QoO8h%2Fnxteg02qV3gPGuaNZjfOtCVlOLFPC%2FotdoHd%2BFqwe%2FxZ6MekqYsLjlIQk%2BAj9HDLH7dG9CGJU0NHOefE&X-Amz-Signature=d2aa1d330e7b03b6205e3e04ac38ac14ada20d8cdb05b02edde3caa3466c2b67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6PDC2D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BO9PAT8dyZ%2BWPM8nvN7hEVcB244VN8tdpQcsGbOjx1AiAzxa%2BN62aW6MnYILx%2FXt5IbTwDa%2BmZ22mt2XyZp%2BQ1fSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMux14a2g4stcrpMPWKtwDm0%2FcLoQzfQtcYhs1yOsXvAvSVZiQcF0fu7hEg8tMwNkz2DXZf1lEA%2FrbW5%2B4z8TWz9Luiqrwbtke2%2FOwnQbfMdhuSR4ilDmj7C%2FO%2FgJ0zI7pf1ZiV0XI6GntFITXyoNAhTtJCCWdiT5F86e5hHpeYNo6SZWF4D8tq8q%2FUSWe%2F706YEMwsl8lK1KM14mEEWCHAsxCzuGO6D%2FU9BO7Zc798dUdCA6vnI8OQYLpfa99gWZGM56zXpEN0m6iM6jscytugL2kwnbnSdHhasE29W4Ofu8jTwXGl0VAyRgXDIsuntsrk7aB9hJne32yH3FbEmniw1kDOAfScKR0GMZa9P9%2BXJGGOeIXxlIsAs0WIwvuNR9QJYXWRXZ1At3QSvuaMKHCoLmbEWjo%2BjuqLrdMCUFSDpoEPLJCDe%2FF7jOhHp%2Fax0Fk5n0NQxF%2Ff3BmrkkcsiFhXAbuRS5lHcpi%2Bjl1qKmlMcBAswfNY5HZi%2BP4xzStSLyPqbLxJ68VXfwJTzVD%2B6x3XM8ykaSmQjfpMBqP3U6jjyQC%2Ba2J1Vzg3SNutJ53PoNtiqiLqIPfIfgeJnak3ZXvbN6Z4xBrf6kbdhhXGK2nvMbhXnQ%2F5UCDpY9zKSuh1ixBWUzar6FRPoMvmSgwy5udwQY6pgEmxOZSaDIELe%2BiHDDVpdXUYMTarRo7PtDsytAgcBvPp7nVbZrZ%2FJDf%2F%2FWBJ%2BE1y7Lvmf17xT3fC7aZJSAjYlZtcaAyM%2Bixzt68fkXcLOJ3r8F3ps55n8o%2FwLl%2F5Aia0lKoETh9N1QoO8h%2Fnxteg02qV3gPGuaNZjfOtCVlOLFPC%2FotdoHd%2BFqwe%2FxZ6MekqYsLjlIQk%2BAj9HDLH7dG9CGJU0NHOefE&X-Amz-Signature=fa3017b85930b25dca1eb0cd9103a6bfd8ccff51714fc4705cbcd80dff8ef9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

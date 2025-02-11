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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJUXBJT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vJsK4QUJhMuSUPufr1KxbfaaZIxaZnC7U65rmEpPkwIhAIBt3cnI4DBJhQCzE5aN5dr4DH154U5cGAhehxFEq3i0KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Fz52nYU2B7D%2FTs0q3AOJiE9tbyoH2aqtMStq68NZaIDLmoDpMmBQs%2B5fNswq1Zh8UNthTJWQ03DxUi1TRoVaYiufGoLUUzEhh37OQtaiAnPEdru80qcKYEvk0bYdoPXf2k3uVDcho1SKLz%2Bpre5sDVOzxPRhNn0WredQ54CCiaLvZz6p57k2FAGC6hsgnukye2YCBmHgwufeW3g2jmthJibfHhjeVQFJX4hT1Jdo4qSIGZg%2Fz7kpq3Cz3IO7CnMawPsgrNlj07CDPiAvEfRm7Ue%2F%2B98%2FFZUfhuXyNQXg6Wd96xcY1cHBJReUURc53ibF0Z%2Bc9imRRK3bZAIkLBgGmljnjkbf2fciarItiw3%2Bt5eTOpdVQxqWE%2FiW87PP5HSaoC6g5J7RbE15Z40brfJqsFQHcDnlh2WReeXCy4OK9YBBGcG%2Bv0u33d9Y%2FCluQAh2XQiNE9SmeNe72gnRbkTzPLcRB9mDKpwEYY%2FCONNXK%2F3ute9VEqE7oqcq7pVL%2Bpt2TTTwPPU3g1Eu18t2OtYl1Hu6cJ5PKBekNIIyn3RONFDdkiQHhSiUrOlNiHuNwthSBD7RqElcb3zCqGKzQ4j7NZhc%2BLKep7e0r7t8H1LBloULvi6Jcyhd%2B10G1JtXMpLkIEdaQt%2B78RzedzDjwa29BjqkAfB%2FSNaDCSykPjupsaYGN7dOyF6j0xpoSR6b9fKIl%2BCc24Gc4qgeWZYDm%2FJR2IhvAJ%2Bm3Gd5bjqWmdurGODf%2FiZqx95DGct6wfdwttA7AgMibSYSLwj2DeKEHyqLlTwKdhhBm3ITpM94XV%2BuefHj6XYnMyVDBSV%2Fbnr1c8JG5KHQpY%2FnZTv7ZaGwe9qe9y43ySWCmOTSmXg2w1dVDXWdwvNrrCE5&X-Amz-Signature=4f2a984aebebb3db037a3e7187bbdeb1debeef6940b4bf6b35599d54bac0e588&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJUXBJT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vJsK4QUJhMuSUPufr1KxbfaaZIxaZnC7U65rmEpPkwIhAIBt3cnI4DBJhQCzE5aN5dr4DH154U5cGAhehxFEq3i0KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Fz52nYU2B7D%2FTs0q3AOJiE9tbyoH2aqtMStq68NZaIDLmoDpMmBQs%2B5fNswq1Zh8UNthTJWQ03DxUi1TRoVaYiufGoLUUzEhh37OQtaiAnPEdru80qcKYEvk0bYdoPXf2k3uVDcho1SKLz%2Bpre5sDVOzxPRhNn0WredQ54CCiaLvZz6p57k2FAGC6hsgnukye2YCBmHgwufeW3g2jmthJibfHhjeVQFJX4hT1Jdo4qSIGZg%2Fz7kpq3Cz3IO7CnMawPsgrNlj07CDPiAvEfRm7Ue%2F%2B98%2FFZUfhuXyNQXg6Wd96xcY1cHBJReUURc53ibF0Z%2Bc9imRRK3bZAIkLBgGmljnjkbf2fciarItiw3%2Bt5eTOpdVQxqWE%2FiW87PP5HSaoC6g5J7RbE15Z40brfJqsFQHcDnlh2WReeXCy4OK9YBBGcG%2Bv0u33d9Y%2FCluQAh2XQiNE9SmeNe72gnRbkTzPLcRB9mDKpwEYY%2FCONNXK%2F3ute9VEqE7oqcq7pVL%2Bpt2TTTwPPU3g1Eu18t2OtYl1Hu6cJ5PKBekNIIyn3RONFDdkiQHhSiUrOlNiHuNwthSBD7RqElcb3zCqGKzQ4j7NZhc%2BLKep7e0r7t8H1LBloULvi6Jcyhd%2B10G1JtXMpLkIEdaQt%2B78RzedzDjwa29BjqkAfB%2FSNaDCSykPjupsaYGN7dOyF6j0xpoSR6b9fKIl%2BCc24Gc4qgeWZYDm%2FJR2IhvAJ%2Bm3Gd5bjqWmdurGODf%2FiZqx95DGct6wfdwttA7AgMibSYSLwj2DeKEHyqLlTwKdhhBm3ITpM94XV%2BuefHj6XYnMyVDBSV%2Fbnr1c8JG5KHQpY%2FnZTv7ZaGwe9qe9y43ySWCmOTSmXg2w1dVDXWdwvNrrCE5&X-Amz-Signature=b51d3096f041df2e3dad71122bee5d5ac09d88dd1dde8b312462b1fc527041d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJUXBJT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vJsK4QUJhMuSUPufr1KxbfaaZIxaZnC7U65rmEpPkwIhAIBt3cnI4DBJhQCzE5aN5dr4DH154U5cGAhehxFEq3i0KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Fz52nYU2B7D%2FTs0q3AOJiE9tbyoH2aqtMStq68NZaIDLmoDpMmBQs%2B5fNswq1Zh8UNthTJWQ03DxUi1TRoVaYiufGoLUUzEhh37OQtaiAnPEdru80qcKYEvk0bYdoPXf2k3uVDcho1SKLz%2Bpre5sDVOzxPRhNn0WredQ54CCiaLvZz6p57k2FAGC6hsgnukye2YCBmHgwufeW3g2jmthJibfHhjeVQFJX4hT1Jdo4qSIGZg%2Fz7kpq3Cz3IO7CnMawPsgrNlj07CDPiAvEfRm7Ue%2F%2B98%2FFZUfhuXyNQXg6Wd96xcY1cHBJReUURc53ibF0Z%2Bc9imRRK3bZAIkLBgGmljnjkbf2fciarItiw3%2Bt5eTOpdVQxqWE%2FiW87PP5HSaoC6g5J7RbE15Z40brfJqsFQHcDnlh2WReeXCy4OK9YBBGcG%2Bv0u33d9Y%2FCluQAh2XQiNE9SmeNe72gnRbkTzPLcRB9mDKpwEYY%2FCONNXK%2F3ute9VEqE7oqcq7pVL%2Bpt2TTTwPPU3g1Eu18t2OtYl1Hu6cJ5PKBekNIIyn3RONFDdkiQHhSiUrOlNiHuNwthSBD7RqElcb3zCqGKzQ4j7NZhc%2BLKep7e0r7t8H1LBloULvi6Jcyhd%2B10G1JtXMpLkIEdaQt%2B78RzedzDjwa29BjqkAfB%2FSNaDCSykPjupsaYGN7dOyF6j0xpoSR6b9fKIl%2BCc24Gc4qgeWZYDm%2FJR2IhvAJ%2Bm3Gd5bjqWmdurGODf%2FiZqx95DGct6wfdwttA7AgMibSYSLwj2DeKEHyqLlTwKdhhBm3ITpM94XV%2BuefHj6XYnMyVDBSV%2Fbnr1c8JG5KHQpY%2FnZTv7ZaGwe9qe9y43ySWCmOTSmXg2w1dVDXWdwvNrrCE5&X-Amz-Signature=576bfb02f443f403e176e10ddd99b84bcc2a4f8ffdeb13a51ad1c735fc8ceb7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJUXBJT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vJsK4QUJhMuSUPufr1KxbfaaZIxaZnC7U65rmEpPkwIhAIBt3cnI4DBJhQCzE5aN5dr4DH154U5cGAhehxFEq3i0KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Fz52nYU2B7D%2FTs0q3AOJiE9tbyoH2aqtMStq68NZaIDLmoDpMmBQs%2B5fNswq1Zh8UNthTJWQ03DxUi1TRoVaYiufGoLUUzEhh37OQtaiAnPEdru80qcKYEvk0bYdoPXf2k3uVDcho1SKLz%2Bpre5sDVOzxPRhNn0WredQ54CCiaLvZz6p57k2FAGC6hsgnukye2YCBmHgwufeW3g2jmthJibfHhjeVQFJX4hT1Jdo4qSIGZg%2Fz7kpq3Cz3IO7CnMawPsgrNlj07CDPiAvEfRm7Ue%2F%2B98%2FFZUfhuXyNQXg6Wd96xcY1cHBJReUURc53ibF0Z%2Bc9imRRK3bZAIkLBgGmljnjkbf2fciarItiw3%2Bt5eTOpdVQxqWE%2FiW87PP5HSaoC6g5J7RbE15Z40brfJqsFQHcDnlh2WReeXCy4OK9YBBGcG%2Bv0u33d9Y%2FCluQAh2XQiNE9SmeNe72gnRbkTzPLcRB9mDKpwEYY%2FCONNXK%2F3ute9VEqE7oqcq7pVL%2Bpt2TTTwPPU3g1Eu18t2OtYl1Hu6cJ5PKBekNIIyn3RONFDdkiQHhSiUrOlNiHuNwthSBD7RqElcb3zCqGKzQ4j7NZhc%2BLKep7e0r7t8H1LBloULvi6Jcyhd%2B10G1JtXMpLkIEdaQt%2B78RzedzDjwa29BjqkAfB%2FSNaDCSykPjupsaYGN7dOyF6j0xpoSR6b9fKIl%2BCc24Gc4qgeWZYDm%2FJR2IhvAJ%2Bm3Gd5bjqWmdurGODf%2FiZqx95DGct6wfdwttA7AgMibSYSLwj2DeKEHyqLlTwKdhhBm3ITpM94XV%2BuefHj6XYnMyVDBSV%2Fbnr1c8JG5KHQpY%2FnZTv7ZaGwe9qe9y43ySWCmOTSmXg2w1dVDXWdwvNrrCE5&X-Amz-Signature=435ff25132007b2a61d1d975cf895f2b6e836968dc13d36e931f5ac5cb5f707f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJUXBJT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vJsK4QUJhMuSUPufr1KxbfaaZIxaZnC7U65rmEpPkwIhAIBt3cnI4DBJhQCzE5aN5dr4DH154U5cGAhehxFEq3i0KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Fz52nYU2B7D%2FTs0q3AOJiE9tbyoH2aqtMStq68NZaIDLmoDpMmBQs%2B5fNswq1Zh8UNthTJWQ03DxUi1TRoVaYiufGoLUUzEhh37OQtaiAnPEdru80qcKYEvk0bYdoPXf2k3uVDcho1SKLz%2Bpre5sDVOzxPRhNn0WredQ54CCiaLvZz6p57k2FAGC6hsgnukye2YCBmHgwufeW3g2jmthJibfHhjeVQFJX4hT1Jdo4qSIGZg%2Fz7kpq3Cz3IO7CnMawPsgrNlj07CDPiAvEfRm7Ue%2F%2B98%2FFZUfhuXyNQXg6Wd96xcY1cHBJReUURc53ibF0Z%2Bc9imRRK3bZAIkLBgGmljnjkbf2fciarItiw3%2Bt5eTOpdVQxqWE%2FiW87PP5HSaoC6g5J7RbE15Z40brfJqsFQHcDnlh2WReeXCy4OK9YBBGcG%2Bv0u33d9Y%2FCluQAh2XQiNE9SmeNe72gnRbkTzPLcRB9mDKpwEYY%2FCONNXK%2F3ute9VEqE7oqcq7pVL%2Bpt2TTTwPPU3g1Eu18t2OtYl1Hu6cJ5PKBekNIIyn3RONFDdkiQHhSiUrOlNiHuNwthSBD7RqElcb3zCqGKzQ4j7NZhc%2BLKep7e0r7t8H1LBloULvi6Jcyhd%2B10G1JtXMpLkIEdaQt%2B78RzedzDjwa29BjqkAfB%2FSNaDCSykPjupsaYGN7dOyF6j0xpoSR6b9fKIl%2BCc24Gc4qgeWZYDm%2FJR2IhvAJ%2Bm3Gd5bjqWmdurGODf%2FiZqx95DGct6wfdwttA7AgMibSYSLwj2DeKEHyqLlTwKdhhBm3ITpM94XV%2BuefHj6XYnMyVDBSV%2Fbnr1c8JG5KHQpY%2FnZTv7ZaGwe9qe9y43ySWCmOTSmXg2w1dVDXWdwvNrrCE5&X-Amz-Signature=9da8eac3bc2d1da68f3a3e1dccc8b1c6239bd9297cbe54a4481ccfd42505ad43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJUXBJT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vJsK4QUJhMuSUPufr1KxbfaaZIxaZnC7U65rmEpPkwIhAIBt3cnI4DBJhQCzE5aN5dr4DH154U5cGAhehxFEq3i0KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Fz52nYU2B7D%2FTs0q3AOJiE9tbyoH2aqtMStq68NZaIDLmoDpMmBQs%2B5fNswq1Zh8UNthTJWQ03DxUi1TRoVaYiufGoLUUzEhh37OQtaiAnPEdru80qcKYEvk0bYdoPXf2k3uVDcho1SKLz%2Bpre5sDVOzxPRhNn0WredQ54CCiaLvZz6p57k2FAGC6hsgnukye2YCBmHgwufeW3g2jmthJibfHhjeVQFJX4hT1Jdo4qSIGZg%2Fz7kpq3Cz3IO7CnMawPsgrNlj07CDPiAvEfRm7Ue%2F%2B98%2FFZUfhuXyNQXg6Wd96xcY1cHBJReUURc53ibF0Z%2Bc9imRRK3bZAIkLBgGmljnjkbf2fciarItiw3%2Bt5eTOpdVQxqWE%2FiW87PP5HSaoC6g5J7RbE15Z40brfJqsFQHcDnlh2WReeXCy4OK9YBBGcG%2Bv0u33d9Y%2FCluQAh2XQiNE9SmeNe72gnRbkTzPLcRB9mDKpwEYY%2FCONNXK%2F3ute9VEqE7oqcq7pVL%2Bpt2TTTwPPU3g1Eu18t2OtYl1Hu6cJ5PKBekNIIyn3RONFDdkiQHhSiUrOlNiHuNwthSBD7RqElcb3zCqGKzQ4j7NZhc%2BLKep7e0r7t8H1LBloULvi6Jcyhd%2B10G1JtXMpLkIEdaQt%2B78RzedzDjwa29BjqkAfB%2FSNaDCSykPjupsaYGN7dOyF6j0xpoSR6b9fKIl%2BCc24Gc4qgeWZYDm%2FJR2IhvAJ%2Bm3Gd5bjqWmdurGODf%2FiZqx95DGct6wfdwttA7AgMibSYSLwj2DeKEHyqLlTwKdhhBm3ITpM94XV%2BuefHj6XYnMyVDBSV%2Fbnr1c8JG5KHQpY%2FnZTv7ZaGwe9qe9y43ySWCmOTSmXg2w1dVDXWdwvNrrCE5&X-Amz-Signature=272d89646751ef7f8d85f9750d4a31d8f097dfbb21d451684ef22ecead30ae58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJUXBJT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vJsK4QUJhMuSUPufr1KxbfaaZIxaZnC7U65rmEpPkwIhAIBt3cnI4DBJhQCzE5aN5dr4DH154U5cGAhehxFEq3i0KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Fz52nYU2B7D%2FTs0q3AOJiE9tbyoH2aqtMStq68NZaIDLmoDpMmBQs%2B5fNswq1Zh8UNthTJWQ03DxUi1TRoVaYiufGoLUUzEhh37OQtaiAnPEdru80qcKYEvk0bYdoPXf2k3uVDcho1SKLz%2Bpre5sDVOzxPRhNn0WredQ54CCiaLvZz6p57k2FAGC6hsgnukye2YCBmHgwufeW3g2jmthJibfHhjeVQFJX4hT1Jdo4qSIGZg%2Fz7kpq3Cz3IO7CnMawPsgrNlj07CDPiAvEfRm7Ue%2F%2B98%2FFZUfhuXyNQXg6Wd96xcY1cHBJReUURc53ibF0Z%2Bc9imRRK3bZAIkLBgGmljnjkbf2fciarItiw3%2Bt5eTOpdVQxqWE%2FiW87PP5HSaoC6g5J7RbE15Z40brfJqsFQHcDnlh2WReeXCy4OK9YBBGcG%2Bv0u33d9Y%2FCluQAh2XQiNE9SmeNe72gnRbkTzPLcRB9mDKpwEYY%2FCONNXK%2F3ute9VEqE7oqcq7pVL%2Bpt2TTTwPPU3g1Eu18t2OtYl1Hu6cJ5PKBekNIIyn3RONFDdkiQHhSiUrOlNiHuNwthSBD7RqElcb3zCqGKzQ4j7NZhc%2BLKep7e0r7t8H1LBloULvi6Jcyhd%2B10G1JtXMpLkIEdaQt%2B78RzedzDjwa29BjqkAfB%2FSNaDCSykPjupsaYGN7dOyF6j0xpoSR6b9fKIl%2BCc24Gc4qgeWZYDm%2FJR2IhvAJ%2Bm3Gd5bjqWmdurGODf%2FiZqx95DGct6wfdwttA7AgMibSYSLwj2DeKEHyqLlTwKdhhBm3ITpM94XV%2BuefHj6XYnMyVDBSV%2Fbnr1c8JG5KHQpY%2FnZTv7ZaGwe9qe9y43ySWCmOTSmXg2w1dVDXWdwvNrrCE5&X-Amz-Signature=8f5a851d96ca28a342ca8d11431fec9321eadca55b6497a6992ce01865cba68c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJUXBJT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vJsK4QUJhMuSUPufr1KxbfaaZIxaZnC7U65rmEpPkwIhAIBt3cnI4DBJhQCzE5aN5dr4DH154U5cGAhehxFEq3i0KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Fz52nYU2B7D%2FTs0q3AOJiE9tbyoH2aqtMStq68NZaIDLmoDpMmBQs%2B5fNswq1Zh8UNthTJWQ03DxUi1TRoVaYiufGoLUUzEhh37OQtaiAnPEdru80qcKYEvk0bYdoPXf2k3uVDcho1SKLz%2Bpre5sDVOzxPRhNn0WredQ54CCiaLvZz6p57k2FAGC6hsgnukye2YCBmHgwufeW3g2jmthJibfHhjeVQFJX4hT1Jdo4qSIGZg%2Fz7kpq3Cz3IO7CnMawPsgrNlj07CDPiAvEfRm7Ue%2F%2B98%2FFZUfhuXyNQXg6Wd96xcY1cHBJReUURc53ibF0Z%2Bc9imRRK3bZAIkLBgGmljnjkbf2fciarItiw3%2Bt5eTOpdVQxqWE%2FiW87PP5HSaoC6g5J7RbE15Z40brfJqsFQHcDnlh2WReeXCy4OK9YBBGcG%2Bv0u33d9Y%2FCluQAh2XQiNE9SmeNe72gnRbkTzPLcRB9mDKpwEYY%2FCONNXK%2F3ute9VEqE7oqcq7pVL%2Bpt2TTTwPPU3g1Eu18t2OtYl1Hu6cJ5PKBekNIIyn3RONFDdkiQHhSiUrOlNiHuNwthSBD7RqElcb3zCqGKzQ4j7NZhc%2BLKep7e0r7t8H1LBloULvi6Jcyhd%2B10G1JtXMpLkIEdaQt%2B78RzedzDjwa29BjqkAfB%2FSNaDCSykPjupsaYGN7dOyF6j0xpoSR6b9fKIl%2BCc24Gc4qgeWZYDm%2FJR2IhvAJ%2Bm3Gd5bjqWmdurGODf%2FiZqx95DGct6wfdwttA7AgMibSYSLwj2DeKEHyqLlTwKdhhBm3ITpM94XV%2BuefHj6XYnMyVDBSV%2Fbnr1c8JG5KHQpY%2FnZTv7ZaGwe9qe9y43ySWCmOTSmXg2w1dVDXWdwvNrrCE5&X-Amz-Signature=8890c084d39878f8c3a6f52d5aad93239221e078ba0f31d0c745fa5efe01921b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

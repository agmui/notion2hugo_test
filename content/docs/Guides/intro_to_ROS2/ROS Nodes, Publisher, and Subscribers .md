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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPGJ4K6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrlMQ1JL17xWGAWcJAthOwRtLUHjO8KxyrtuY12jTuPwIgGr%2FRJ7A635sJNovb4Y%2FhY9WSD7r1H32AFkgq4nW6j1Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFd1lD03GBGMRfcQxircA9LE7ffy33WkGoe51R%2F7eRziXH3GqtDRW7pGDQnkC9S63Q%2BqoAmP52nV%2FNOegvmyAmdizFBK8OlAk2%2FfwtB2%2FFCbODKtDeWwIotiTr%2FtIm10HJlNJPjo93TAwJCijWXkulxijAnTK5O%2B2Ycqf%2FQrElnrOOm8w%2BdVCxj9atugQSMwNzbWJDF%2FTTZvV8KFz0aiVTP7%2BRMRy6go271MIvpY0tPON1Jd%2FRC94WAxxIrPiEm34JfwRavWI52Yhmoy5uOdffVPFmdedVO1%2FxdLDeumEDH4cburOw%2FwWsgLEGAABc4ASoTaVALBAKC764drKe0qwckenV5hH%2FnZvQmMgbUAwNBSXHdkdsf8lQcu8sombNhciMSiJup%2FeFAd41TFeh9EKfxie8%2BjxSkRqfU%2B9YYowiPFycclsTlGQD%2Fy5We1cLvnx1KUQnxNTQGrTM4m1Zjn%2B1zbvuk9HuX8ZzZD9TmhvM3iBrBVe0A7qLf7cl7ApCR8voyaGEa9%2FrSzx726gLBC8D8paY%2B5MkKPC4bxKerPZ1I2T6HZFBFxNuHCkR4lC%2FNJJ16%2FglPiSZn%2FN5rBOpZaBgbrs6NHivN00vofZWea6KOhYmStq9AF%2BBc7KeDfLxktL9lSX9gf1tKepNy7MLb7mMEGOqUBC6LDw5wgi5gsePg06aZ7U5q8O2S4naY7EmPnLKXuy%2BpMCJBov76OKSmLBS85BZzcD3sTTzOate6%2Fus6rzjul%2FU%2FyDwKX1j7F7XEs2YCUMNHy99G1ki57YGt%2BmzM9To2Bskr3kxHUbGQXUkq4l2GoAQM5x16wnvPWrYHyTcTUNWmx2YY2W1OA9dEjD9MhNIWIbNJQ1PyyQFtwWmWzlqxJpQD1NTHK&X-Amz-Signature=f4a73acc6b88724c6983f363bfa60e01a1ddb9da2916e920784e18f14a67e31c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPGJ4K6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrlMQ1JL17xWGAWcJAthOwRtLUHjO8KxyrtuY12jTuPwIgGr%2FRJ7A635sJNovb4Y%2FhY9WSD7r1H32AFkgq4nW6j1Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFd1lD03GBGMRfcQxircA9LE7ffy33WkGoe51R%2F7eRziXH3GqtDRW7pGDQnkC9S63Q%2BqoAmP52nV%2FNOegvmyAmdizFBK8OlAk2%2FfwtB2%2FFCbODKtDeWwIotiTr%2FtIm10HJlNJPjo93TAwJCijWXkulxijAnTK5O%2B2Ycqf%2FQrElnrOOm8w%2BdVCxj9atugQSMwNzbWJDF%2FTTZvV8KFz0aiVTP7%2BRMRy6go271MIvpY0tPON1Jd%2FRC94WAxxIrPiEm34JfwRavWI52Yhmoy5uOdffVPFmdedVO1%2FxdLDeumEDH4cburOw%2FwWsgLEGAABc4ASoTaVALBAKC764drKe0qwckenV5hH%2FnZvQmMgbUAwNBSXHdkdsf8lQcu8sombNhciMSiJup%2FeFAd41TFeh9EKfxie8%2BjxSkRqfU%2B9YYowiPFycclsTlGQD%2Fy5We1cLvnx1KUQnxNTQGrTM4m1Zjn%2B1zbvuk9HuX8ZzZD9TmhvM3iBrBVe0A7qLf7cl7ApCR8voyaGEa9%2FrSzx726gLBC8D8paY%2B5MkKPC4bxKerPZ1I2T6HZFBFxNuHCkR4lC%2FNJJ16%2FglPiSZn%2FN5rBOpZaBgbrs6NHivN00vofZWea6KOhYmStq9AF%2BBc7KeDfLxktL9lSX9gf1tKepNy7MLb7mMEGOqUBC6LDw5wgi5gsePg06aZ7U5q8O2S4naY7EmPnLKXuy%2BpMCJBov76OKSmLBS85BZzcD3sTTzOate6%2Fus6rzjul%2FU%2FyDwKX1j7F7XEs2YCUMNHy99G1ki57YGt%2BmzM9To2Bskr3kxHUbGQXUkq4l2GoAQM5x16wnvPWrYHyTcTUNWmx2YY2W1OA9dEjD9MhNIWIbNJQ1PyyQFtwWmWzlqxJpQD1NTHK&X-Amz-Signature=a155eb1dba88132e3357531e79ca1ddc25fb0446036d0a8da629b79ec0b43c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPGJ4K6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrlMQ1JL17xWGAWcJAthOwRtLUHjO8KxyrtuY12jTuPwIgGr%2FRJ7A635sJNovb4Y%2FhY9WSD7r1H32AFkgq4nW6j1Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFd1lD03GBGMRfcQxircA9LE7ffy33WkGoe51R%2F7eRziXH3GqtDRW7pGDQnkC9S63Q%2BqoAmP52nV%2FNOegvmyAmdizFBK8OlAk2%2FfwtB2%2FFCbODKtDeWwIotiTr%2FtIm10HJlNJPjo93TAwJCijWXkulxijAnTK5O%2B2Ycqf%2FQrElnrOOm8w%2BdVCxj9atugQSMwNzbWJDF%2FTTZvV8KFz0aiVTP7%2BRMRy6go271MIvpY0tPON1Jd%2FRC94WAxxIrPiEm34JfwRavWI52Yhmoy5uOdffVPFmdedVO1%2FxdLDeumEDH4cburOw%2FwWsgLEGAABc4ASoTaVALBAKC764drKe0qwckenV5hH%2FnZvQmMgbUAwNBSXHdkdsf8lQcu8sombNhciMSiJup%2FeFAd41TFeh9EKfxie8%2BjxSkRqfU%2B9YYowiPFycclsTlGQD%2Fy5We1cLvnx1KUQnxNTQGrTM4m1Zjn%2B1zbvuk9HuX8ZzZD9TmhvM3iBrBVe0A7qLf7cl7ApCR8voyaGEa9%2FrSzx726gLBC8D8paY%2B5MkKPC4bxKerPZ1I2T6HZFBFxNuHCkR4lC%2FNJJ16%2FglPiSZn%2FN5rBOpZaBgbrs6NHivN00vofZWea6KOhYmStq9AF%2BBc7KeDfLxktL9lSX9gf1tKepNy7MLb7mMEGOqUBC6LDw5wgi5gsePg06aZ7U5q8O2S4naY7EmPnLKXuy%2BpMCJBov76OKSmLBS85BZzcD3sTTzOate6%2Fus6rzjul%2FU%2FyDwKX1j7F7XEs2YCUMNHy99G1ki57YGt%2BmzM9To2Bskr3kxHUbGQXUkq4l2GoAQM5x16wnvPWrYHyTcTUNWmx2YY2W1OA9dEjD9MhNIWIbNJQ1PyyQFtwWmWzlqxJpQD1NTHK&X-Amz-Signature=116a79ec2a5ff3196c49144bdb6b68dd6d37ec7efe09740a32614ab24aae2cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPGJ4K6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrlMQ1JL17xWGAWcJAthOwRtLUHjO8KxyrtuY12jTuPwIgGr%2FRJ7A635sJNovb4Y%2FhY9WSD7r1H32AFkgq4nW6j1Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFd1lD03GBGMRfcQxircA9LE7ffy33WkGoe51R%2F7eRziXH3GqtDRW7pGDQnkC9S63Q%2BqoAmP52nV%2FNOegvmyAmdizFBK8OlAk2%2FfwtB2%2FFCbODKtDeWwIotiTr%2FtIm10HJlNJPjo93TAwJCijWXkulxijAnTK5O%2B2Ycqf%2FQrElnrOOm8w%2BdVCxj9atugQSMwNzbWJDF%2FTTZvV8KFz0aiVTP7%2BRMRy6go271MIvpY0tPON1Jd%2FRC94WAxxIrPiEm34JfwRavWI52Yhmoy5uOdffVPFmdedVO1%2FxdLDeumEDH4cburOw%2FwWsgLEGAABc4ASoTaVALBAKC764drKe0qwckenV5hH%2FnZvQmMgbUAwNBSXHdkdsf8lQcu8sombNhciMSiJup%2FeFAd41TFeh9EKfxie8%2BjxSkRqfU%2B9YYowiPFycclsTlGQD%2Fy5We1cLvnx1KUQnxNTQGrTM4m1Zjn%2B1zbvuk9HuX8ZzZD9TmhvM3iBrBVe0A7qLf7cl7ApCR8voyaGEa9%2FrSzx726gLBC8D8paY%2B5MkKPC4bxKerPZ1I2T6HZFBFxNuHCkR4lC%2FNJJ16%2FglPiSZn%2FN5rBOpZaBgbrs6NHivN00vofZWea6KOhYmStq9AF%2BBc7KeDfLxktL9lSX9gf1tKepNy7MLb7mMEGOqUBC6LDw5wgi5gsePg06aZ7U5q8O2S4naY7EmPnLKXuy%2BpMCJBov76OKSmLBS85BZzcD3sTTzOate6%2Fus6rzjul%2FU%2FyDwKX1j7F7XEs2YCUMNHy99G1ki57YGt%2BmzM9To2Bskr3kxHUbGQXUkq4l2GoAQM5x16wnvPWrYHyTcTUNWmx2YY2W1OA9dEjD9MhNIWIbNJQ1PyyQFtwWmWzlqxJpQD1NTHK&X-Amz-Signature=f246d57734c372319f3f9d5ff33ab8dfe9503933c34f7e4ce77b108a14df2ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPGJ4K6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrlMQ1JL17xWGAWcJAthOwRtLUHjO8KxyrtuY12jTuPwIgGr%2FRJ7A635sJNovb4Y%2FhY9WSD7r1H32AFkgq4nW6j1Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFd1lD03GBGMRfcQxircA9LE7ffy33WkGoe51R%2F7eRziXH3GqtDRW7pGDQnkC9S63Q%2BqoAmP52nV%2FNOegvmyAmdizFBK8OlAk2%2FfwtB2%2FFCbODKtDeWwIotiTr%2FtIm10HJlNJPjo93TAwJCijWXkulxijAnTK5O%2B2Ycqf%2FQrElnrOOm8w%2BdVCxj9atugQSMwNzbWJDF%2FTTZvV8KFz0aiVTP7%2BRMRy6go271MIvpY0tPON1Jd%2FRC94WAxxIrPiEm34JfwRavWI52Yhmoy5uOdffVPFmdedVO1%2FxdLDeumEDH4cburOw%2FwWsgLEGAABc4ASoTaVALBAKC764drKe0qwckenV5hH%2FnZvQmMgbUAwNBSXHdkdsf8lQcu8sombNhciMSiJup%2FeFAd41TFeh9EKfxie8%2BjxSkRqfU%2B9YYowiPFycclsTlGQD%2Fy5We1cLvnx1KUQnxNTQGrTM4m1Zjn%2B1zbvuk9HuX8ZzZD9TmhvM3iBrBVe0A7qLf7cl7ApCR8voyaGEa9%2FrSzx726gLBC8D8paY%2B5MkKPC4bxKerPZ1I2T6HZFBFxNuHCkR4lC%2FNJJ16%2FglPiSZn%2FN5rBOpZaBgbrs6NHivN00vofZWea6KOhYmStq9AF%2BBc7KeDfLxktL9lSX9gf1tKepNy7MLb7mMEGOqUBC6LDw5wgi5gsePg06aZ7U5q8O2S4naY7EmPnLKXuy%2BpMCJBov76OKSmLBS85BZzcD3sTTzOate6%2Fus6rzjul%2FU%2FyDwKX1j7F7XEs2YCUMNHy99G1ki57YGt%2BmzM9To2Bskr3kxHUbGQXUkq4l2GoAQM5x16wnvPWrYHyTcTUNWmx2YY2W1OA9dEjD9MhNIWIbNJQ1PyyQFtwWmWzlqxJpQD1NTHK&X-Amz-Signature=58310d56846d2f061c50c1fe6d455d61a1f22aed2a3982dbee54416ba7b29f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPGJ4K6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrlMQ1JL17xWGAWcJAthOwRtLUHjO8KxyrtuY12jTuPwIgGr%2FRJ7A635sJNovb4Y%2FhY9WSD7r1H32AFkgq4nW6j1Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFd1lD03GBGMRfcQxircA9LE7ffy33WkGoe51R%2F7eRziXH3GqtDRW7pGDQnkC9S63Q%2BqoAmP52nV%2FNOegvmyAmdizFBK8OlAk2%2FfwtB2%2FFCbODKtDeWwIotiTr%2FtIm10HJlNJPjo93TAwJCijWXkulxijAnTK5O%2B2Ycqf%2FQrElnrOOm8w%2BdVCxj9atugQSMwNzbWJDF%2FTTZvV8KFz0aiVTP7%2BRMRy6go271MIvpY0tPON1Jd%2FRC94WAxxIrPiEm34JfwRavWI52Yhmoy5uOdffVPFmdedVO1%2FxdLDeumEDH4cburOw%2FwWsgLEGAABc4ASoTaVALBAKC764drKe0qwckenV5hH%2FnZvQmMgbUAwNBSXHdkdsf8lQcu8sombNhciMSiJup%2FeFAd41TFeh9EKfxie8%2BjxSkRqfU%2B9YYowiPFycclsTlGQD%2Fy5We1cLvnx1KUQnxNTQGrTM4m1Zjn%2B1zbvuk9HuX8ZzZD9TmhvM3iBrBVe0A7qLf7cl7ApCR8voyaGEa9%2FrSzx726gLBC8D8paY%2B5MkKPC4bxKerPZ1I2T6HZFBFxNuHCkR4lC%2FNJJ16%2FglPiSZn%2FN5rBOpZaBgbrs6NHivN00vofZWea6KOhYmStq9AF%2BBc7KeDfLxktL9lSX9gf1tKepNy7MLb7mMEGOqUBC6LDw5wgi5gsePg06aZ7U5q8O2S4naY7EmPnLKXuy%2BpMCJBov76OKSmLBS85BZzcD3sTTzOate6%2Fus6rzjul%2FU%2FyDwKX1j7F7XEs2YCUMNHy99G1ki57YGt%2BmzM9To2Bskr3kxHUbGQXUkq4l2GoAQM5x16wnvPWrYHyTcTUNWmx2YY2W1OA9dEjD9MhNIWIbNJQ1PyyQFtwWmWzlqxJpQD1NTHK&X-Amz-Signature=8433ee58b3b331ab9439e163841d252cd276b43489aecbcf7fe88a8205cf1e27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPGJ4K6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrlMQ1JL17xWGAWcJAthOwRtLUHjO8KxyrtuY12jTuPwIgGr%2FRJ7A635sJNovb4Y%2FhY9WSD7r1H32AFkgq4nW6j1Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFd1lD03GBGMRfcQxircA9LE7ffy33WkGoe51R%2F7eRziXH3GqtDRW7pGDQnkC9S63Q%2BqoAmP52nV%2FNOegvmyAmdizFBK8OlAk2%2FfwtB2%2FFCbODKtDeWwIotiTr%2FtIm10HJlNJPjo93TAwJCijWXkulxijAnTK5O%2B2Ycqf%2FQrElnrOOm8w%2BdVCxj9atugQSMwNzbWJDF%2FTTZvV8KFz0aiVTP7%2BRMRy6go271MIvpY0tPON1Jd%2FRC94WAxxIrPiEm34JfwRavWI52Yhmoy5uOdffVPFmdedVO1%2FxdLDeumEDH4cburOw%2FwWsgLEGAABc4ASoTaVALBAKC764drKe0qwckenV5hH%2FnZvQmMgbUAwNBSXHdkdsf8lQcu8sombNhciMSiJup%2FeFAd41TFeh9EKfxie8%2BjxSkRqfU%2B9YYowiPFycclsTlGQD%2Fy5We1cLvnx1KUQnxNTQGrTM4m1Zjn%2B1zbvuk9HuX8ZzZD9TmhvM3iBrBVe0A7qLf7cl7ApCR8voyaGEa9%2FrSzx726gLBC8D8paY%2B5MkKPC4bxKerPZ1I2T6HZFBFxNuHCkR4lC%2FNJJ16%2FglPiSZn%2FN5rBOpZaBgbrs6NHivN00vofZWea6KOhYmStq9AF%2BBc7KeDfLxktL9lSX9gf1tKepNy7MLb7mMEGOqUBC6LDw5wgi5gsePg06aZ7U5q8O2S4naY7EmPnLKXuy%2BpMCJBov76OKSmLBS85BZzcD3sTTzOate6%2Fus6rzjul%2FU%2FyDwKX1j7F7XEs2YCUMNHy99G1ki57YGt%2BmzM9To2Bskr3kxHUbGQXUkq4l2GoAQM5x16wnvPWrYHyTcTUNWmx2YY2W1OA9dEjD9MhNIWIbNJQ1PyyQFtwWmWzlqxJpQD1NTHK&X-Amz-Signature=b7d650c688cde90615d12251afa00d65840b1d418ae272687d4ffc90c791bfc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPGJ4K6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrlMQ1JL17xWGAWcJAthOwRtLUHjO8KxyrtuY12jTuPwIgGr%2FRJ7A635sJNovb4Y%2FhY9WSD7r1H32AFkgq4nW6j1Iq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFd1lD03GBGMRfcQxircA9LE7ffy33WkGoe51R%2F7eRziXH3GqtDRW7pGDQnkC9S63Q%2BqoAmP52nV%2FNOegvmyAmdizFBK8OlAk2%2FfwtB2%2FFCbODKtDeWwIotiTr%2FtIm10HJlNJPjo93TAwJCijWXkulxijAnTK5O%2B2Ycqf%2FQrElnrOOm8w%2BdVCxj9atugQSMwNzbWJDF%2FTTZvV8KFz0aiVTP7%2BRMRy6go271MIvpY0tPON1Jd%2FRC94WAxxIrPiEm34JfwRavWI52Yhmoy5uOdffVPFmdedVO1%2FxdLDeumEDH4cburOw%2FwWsgLEGAABc4ASoTaVALBAKC764drKe0qwckenV5hH%2FnZvQmMgbUAwNBSXHdkdsf8lQcu8sombNhciMSiJup%2FeFAd41TFeh9EKfxie8%2BjxSkRqfU%2B9YYowiPFycclsTlGQD%2Fy5We1cLvnx1KUQnxNTQGrTM4m1Zjn%2B1zbvuk9HuX8ZzZD9TmhvM3iBrBVe0A7qLf7cl7ApCR8voyaGEa9%2FrSzx726gLBC8D8paY%2B5MkKPC4bxKerPZ1I2T6HZFBFxNuHCkR4lC%2FNJJ16%2FglPiSZn%2FN5rBOpZaBgbrs6NHivN00vofZWea6KOhYmStq9AF%2BBc7KeDfLxktL9lSX9gf1tKepNy7MLb7mMEGOqUBC6LDw5wgi5gsePg06aZ7U5q8O2S4naY7EmPnLKXuy%2BpMCJBov76OKSmLBS85BZzcD3sTTzOate6%2Fus6rzjul%2FU%2FyDwKX1j7F7XEs2YCUMNHy99G1ki57YGt%2BmzM9To2Bskr3kxHUbGQXUkq4l2GoAQM5x16wnvPWrYHyTcTUNWmx2YY2W1OA9dEjD9MhNIWIbNJQ1PyyQFtwWmWzlqxJpQD1NTHK&X-Amz-Signature=b4d82bd96610e554a98aceb667ba076c234fce2f6b5e06371b2a84b8d8d8bd7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

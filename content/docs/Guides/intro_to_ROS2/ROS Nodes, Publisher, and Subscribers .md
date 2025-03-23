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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPMNNCB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bf0iEDImIHrAe5k0OIQfi2lr3Km6KjpIde1obJU5lSgIgFYklGpqw46AWRLXdvjruRwacVxMQ9aXZWySZ4l5pefEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1lMY4sE7JNPa5dgSrcA90fF5Gz3zjGRA3gTHghtIto09wDZyEW9qCWhYbXW3UpYjgeWiCQ4CcYNQbH3zP4hKX3%2B6nvCi7i0a%2F3WAK9FCYBv%2BEZLSFyLtxRG5TF2MjHrRoO6QQ%2BUT29fSMkgNZY6fNqy40adFtiLVNlfeq2uQ52wClUW6qMAzY2rRViE8GQOROPs3Aei8GSxwfNF0ehXsGNCbylXQOQzikEli6B9dFt5BiK8XUQxYShowKx4yxd%2B4d%2FaCztyLyeLPM3%2BbQnK7Bm%2B0LG6TJgerIAfy%2BHxBp9BUgo0bdZvs0%2F3IiekskglwsSe%2B0sYNVwlmVfPTo%2BujgbUQL49owdZwL67JHeZpoXMejD2dc9EWe0hVCt7nhBp1RkM0b%2F8w7SHtq7pnMF1CmdPhsFa8%2B5gn0dPAWsq0DgBkE%2FY8aH%2BNRe7VnK8Hx8pIe731DElO5tAksrtSbbSjsFC4AmgGmnLMSP3g9azXEDJCFv1ymPQqy6WbhP1rKp7T31ubu%2BOxi%2BYv1SUn3v4xt2oMnk9jm%2FlCpRHPWc7mK9eJWWRJqLZbUN%2BORhz6VcobAO94lIuWOIhDvnnIVrNPZueEzkiYC6Vx6swGHwmziFs6jCdKDtLpYhdbvnTPOqzgO11FSTREYhtASZMKPLgb8GOqUBM0czhzDo8zcu%2BCoA5FgejEC%2Fl2nbf%2BoVnyun0Rgx7nmGCwh0MACdKeJNWpsQd6f4uryZmru%2B%2BDZmIQIFzUU4c5hxiwVl8A%2BCpAuizgrcQ0%2BUd41aLnOr3gmibs2DKtw82kvq4GRNyxjn4Ez4qN2kB5E3br9n27OJ%2BjfuUkCq3NTvc0aNS0v0nE9EyGXQbkuN8KxvxI70yGIV%2BT4oNLG3p1OPJUN9&X-Amz-Signature=063a79c2a6c1565af4eae9360b6eac86d21e3fe29fd3b7919bfad218c444bb3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPMNNCB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bf0iEDImIHrAe5k0OIQfi2lr3Km6KjpIde1obJU5lSgIgFYklGpqw46AWRLXdvjruRwacVxMQ9aXZWySZ4l5pefEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1lMY4sE7JNPa5dgSrcA90fF5Gz3zjGRA3gTHghtIto09wDZyEW9qCWhYbXW3UpYjgeWiCQ4CcYNQbH3zP4hKX3%2B6nvCi7i0a%2F3WAK9FCYBv%2BEZLSFyLtxRG5TF2MjHrRoO6QQ%2BUT29fSMkgNZY6fNqy40adFtiLVNlfeq2uQ52wClUW6qMAzY2rRViE8GQOROPs3Aei8GSxwfNF0ehXsGNCbylXQOQzikEli6B9dFt5BiK8XUQxYShowKx4yxd%2B4d%2FaCztyLyeLPM3%2BbQnK7Bm%2B0LG6TJgerIAfy%2BHxBp9BUgo0bdZvs0%2F3IiekskglwsSe%2B0sYNVwlmVfPTo%2BujgbUQL49owdZwL67JHeZpoXMejD2dc9EWe0hVCt7nhBp1RkM0b%2F8w7SHtq7pnMF1CmdPhsFa8%2B5gn0dPAWsq0DgBkE%2FY8aH%2BNRe7VnK8Hx8pIe731DElO5tAksrtSbbSjsFC4AmgGmnLMSP3g9azXEDJCFv1ymPQqy6WbhP1rKp7T31ubu%2BOxi%2BYv1SUn3v4xt2oMnk9jm%2FlCpRHPWc7mK9eJWWRJqLZbUN%2BORhz6VcobAO94lIuWOIhDvnnIVrNPZueEzkiYC6Vx6swGHwmziFs6jCdKDtLpYhdbvnTPOqzgO11FSTREYhtASZMKPLgb8GOqUBM0czhzDo8zcu%2BCoA5FgejEC%2Fl2nbf%2BoVnyun0Rgx7nmGCwh0MACdKeJNWpsQd6f4uryZmru%2B%2BDZmIQIFzUU4c5hxiwVl8A%2BCpAuizgrcQ0%2BUd41aLnOr3gmibs2DKtw82kvq4GRNyxjn4Ez4qN2kB5E3br9n27OJ%2BjfuUkCq3NTvc0aNS0v0nE9EyGXQbkuN8KxvxI70yGIV%2BT4oNLG3p1OPJUN9&X-Amz-Signature=15a9b8db9da535a0d07d2760bc6fbfbcf607d847858e39b6fc32b7feca4fcfde&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPMNNCB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bf0iEDImIHrAe5k0OIQfi2lr3Km6KjpIde1obJU5lSgIgFYklGpqw46AWRLXdvjruRwacVxMQ9aXZWySZ4l5pefEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1lMY4sE7JNPa5dgSrcA90fF5Gz3zjGRA3gTHghtIto09wDZyEW9qCWhYbXW3UpYjgeWiCQ4CcYNQbH3zP4hKX3%2B6nvCi7i0a%2F3WAK9FCYBv%2BEZLSFyLtxRG5TF2MjHrRoO6QQ%2BUT29fSMkgNZY6fNqy40adFtiLVNlfeq2uQ52wClUW6qMAzY2rRViE8GQOROPs3Aei8GSxwfNF0ehXsGNCbylXQOQzikEli6B9dFt5BiK8XUQxYShowKx4yxd%2B4d%2FaCztyLyeLPM3%2BbQnK7Bm%2B0LG6TJgerIAfy%2BHxBp9BUgo0bdZvs0%2F3IiekskglwsSe%2B0sYNVwlmVfPTo%2BujgbUQL49owdZwL67JHeZpoXMejD2dc9EWe0hVCt7nhBp1RkM0b%2F8w7SHtq7pnMF1CmdPhsFa8%2B5gn0dPAWsq0DgBkE%2FY8aH%2BNRe7VnK8Hx8pIe731DElO5tAksrtSbbSjsFC4AmgGmnLMSP3g9azXEDJCFv1ymPQqy6WbhP1rKp7T31ubu%2BOxi%2BYv1SUn3v4xt2oMnk9jm%2FlCpRHPWc7mK9eJWWRJqLZbUN%2BORhz6VcobAO94lIuWOIhDvnnIVrNPZueEzkiYC6Vx6swGHwmziFs6jCdKDtLpYhdbvnTPOqzgO11FSTREYhtASZMKPLgb8GOqUBM0czhzDo8zcu%2BCoA5FgejEC%2Fl2nbf%2BoVnyun0Rgx7nmGCwh0MACdKeJNWpsQd6f4uryZmru%2B%2BDZmIQIFzUU4c5hxiwVl8A%2BCpAuizgrcQ0%2BUd41aLnOr3gmibs2DKtw82kvq4GRNyxjn4Ez4qN2kB5E3br9n27OJ%2BjfuUkCq3NTvc0aNS0v0nE9EyGXQbkuN8KxvxI70yGIV%2BT4oNLG3p1OPJUN9&X-Amz-Signature=974c267b6ad9c0f4cff9f8eb04dd14c83c1d5a540936bc287881301c2a7b94be&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPMNNCB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bf0iEDImIHrAe5k0OIQfi2lr3Km6KjpIde1obJU5lSgIgFYklGpqw46AWRLXdvjruRwacVxMQ9aXZWySZ4l5pefEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1lMY4sE7JNPa5dgSrcA90fF5Gz3zjGRA3gTHghtIto09wDZyEW9qCWhYbXW3UpYjgeWiCQ4CcYNQbH3zP4hKX3%2B6nvCi7i0a%2F3WAK9FCYBv%2BEZLSFyLtxRG5TF2MjHrRoO6QQ%2BUT29fSMkgNZY6fNqy40adFtiLVNlfeq2uQ52wClUW6qMAzY2rRViE8GQOROPs3Aei8GSxwfNF0ehXsGNCbylXQOQzikEli6B9dFt5BiK8XUQxYShowKx4yxd%2B4d%2FaCztyLyeLPM3%2BbQnK7Bm%2B0LG6TJgerIAfy%2BHxBp9BUgo0bdZvs0%2F3IiekskglwsSe%2B0sYNVwlmVfPTo%2BujgbUQL49owdZwL67JHeZpoXMejD2dc9EWe0hVCt7nhBp1RkM0b%2F8w7SHtq7pnMF1CmdPhsFa8%2B5gn0dPAWsq0DgBkE%2FY8aH%2BNRe7VnK8Hx8pIe731DElO5tAksrtSbbSjsFC4AmgGmnLMSP3g9azXEDJCFv1ymPQqy6WbhP1rKp7T31ubu%2BOxi%2BYv1SUn3v4xt2oMnk9jm%2FlCpRHPWc7mK9eJWWRJqLZbUN%2BORhz6VcobAO94lIuWOIhDvnnIVrNPZueEzkiYC6Vx6swGHwmziFs6jCdKDtLpYhdbvnTPOqzgO11FSTREYhtASZMKPLgb8GOqUBM0czhzDo8zcu%2BCoA5FgejEC%2Fl2nbf%2BoVnyun0Rgx7nmGCwh0MACdKeJNWpsQd6f4uryZmru%2B%2BDZmIQIFzUU4c5hxiwVl8A%2BCpAuizgrcQ0%2BUd41aLnOr3gmibs2DKtw82kvq4GRNyxjn4Ez4qN2kB5E3br9n27OJ%2BjfuUkCq3NTvc0aNS0v0nE9EyGXQbkuN8KxvxI70yGIV%2BT4oNLG3p1OPJUN9&X-Amz-Signature=4ece0c7e7ff771641356e7af6fb378860f54d731e57347025e523c513ef5dedf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPMNNCB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bf0iEDImIHrAe5k0OIQfi2lr3Km6KjpIde1obJU5lSgIgFYklGpqw46AWRLXdvjruRwacVxMQ9aXZWySZ4l5pefEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1lMY4sE7JNPa5dgSrcA90fF5Gz3zjGRA3gTHghtIto09wDZyEW9qCWhYbXW3UpYjgeWiCQ4CcYNQbH3zP4hKX3%2B6nvCi7i0a%2F3WAK9FCYBv%2BEZLSFyLtxRG5TF2MjHrRoO6QQ%2BUT29fSMkgNZY6fNqy40adFtiLVNlfeq2uQ52wClUW6qMAzY2rRViE8GQOROPs3Aei8GSxwfNF0ehXsGNCbylXQOQzikEli6B9dFt5BiK8XUQxYShowKx4yxd%2B4d%2FaCztyLyeLPM3%2BbQnK7Bm%2B0LG6TJgerIAfy%2BHxBp9BUgo0bdZvs0%2F3IiekskglwsSe%2B0sYNVwlmVfPTo%2BujgbUQL49owdZwL67JHeZpoXMejD2dc9EWe0hVCt7nhBp1RkM0b%2F8w7SHtq7pnMF1CmdPhsFa8%2B5gn0dPAWsq0DgBkE%2FY8aH%2BNRe7VnK8Hx8pIe731DElO5tAksrtSbbSjsFC4AmgGmnLMSP3g9azXEDJCFv1ymPQqy6WbhP1rKp7T31ubu%2BOxi%2BYv1SUn3v4xt2oMnk9jm%2FlCpRHPWc7mK9eJWWRJqLZbUN%2BORhz6VcobAO94lIuWOIhDvnnIVrNPZueEzkiYC6Vx6swGHwmziFs6jCdKDtLpYhdbvnTPOqzgO11FSTREYhtASZMKPLgb8GOqUBM0czhzDo8zcu%2BCoA5FgejEC%2Fl2nbf%2BoVnyun0Rgx7nmGCwh0MACdKeJNWpsQd6f4uryZmru%2B%2BDZmIQIFzUU4c5hxiwVl8A%2BCpAuizgrcQ0%2BUd41aLnOr3gmibs2DKtw82kvq4GRNyxjn4Ez4qN2kB5E3br9n27OJ%2BjfuUkCq3NTvc0aNS0v0nE9EyGXQbkuN8KxvxI70yGIV%2BT4oNLG3p1OPJUN9&X-Amz-Signature=4e6ab70d251cf4a83cc5d8da9b18d8d9e42351bcf65e2615003e2ac0f7840636&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPMNNCB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bf0iEDImIHrAe5k0OIQfi2lr3Km6KjpIde1obJU5lSgIgFYklGpqw46AWRLXdvjruRwacVxMQ9aXZWySZ4l5pefEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1lMY4sE7JNPa5dgSrcA90fF5Gz3zjGRA3gTHghtIto09wDZyEW9qCWhYbXW3UpYjgeWiCQ4CcYNQbH3zP4hKX3%2B6nvCi7i0a%2F3WAK9FCYBv%2BEZLSFyLtxRG5TF2MjHrRoO6QQ%2BUT29fSMkgNZY6fNqy40adFtiLVNlfeq2uQ52wClUW6qMAzY2rRViE8GQOROPs3Aei8GSxwfNF0ehXsGNCbylXQOQzikEli6B9dFt5BiK8XUQxYShowKx4yxd%2B4d%2FaCztyLyeLPM3%2BbQnK7Bm%2B0LG6TJgerIAfy%2BHxBp9BUgo0bdZvs0%2F3IiekskglwsSe%2B0sYNVwlmVfPTo%2BujgbUQL49owdZwL67JHeZpoXMejD2dc9EWe0hVCt7nhBp1RkM0b%2F8w7SHtq7pnMF1CmdPhsFa8%2B5gn0dPAWsq0DgBkE%2FY8aH%2BNRe7VnK8Hx8pIe731DElO5tAksrtSbbSjsFC4AmgGmnLMSP3g9azXEDJCFv1ymPQqy6WbhP1rKp7T31ubu%2BOxi%2BYv1SUn3v4xt2oMnk9jm%2FlCpRHPWc7mK9eJWWRJqLZbUN%2BORhz6VcobAO94lIuWOIhDvnnIVrNPZueEzkiYC6Vx6swGHwmziFs6jCdKDtLpYhdbvnTPOqzgO11FSTREYhtASZMKPLgb8GOqUBM0czhzDo8zcu%2BCoA5FgejEC%2Fl2nbf%2BoVnyun0Rgx7nmGCwh0MACdKeJNWpsQd6f4uryZmru%2B%2BDZmIQIFzUU4c5hxiwVl8A%2BCpAuizgrcQ0%2BUd41aLnOr3gmibs2DKtw82kvq4GRNyxjn4Ez4qN2kB5E3br9n27OJ%2BjfuUkCq3NTvc0aNS0v0nE9EyGXQbkuN8KxvxI70yGIV%2BT4oNLG3p1OPJUN9&X-Amz-Signature=141848b2a24446c19d58d867a0cfb12cd9895dc3e62c3c220bddd373e92d9546&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPMNNCB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bf0iEDImIHrAe5k0OIQfi2lr3Km6KjpIde1obJU5lSgIgFYklGpqw46AWRLXdvjruRwacVxMQ9aXZWySZ4l5pefEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1lMY4sE7JNPa5dgSrcA90fF5Gz3zjGRA3gTHghtIto09wDZyEW9qCWhYbXW3UpYjgeWiCQ4CcYNQbH3zP4hKX3%2B6nvCi7i0a%2F3WAK9FCYBv%2BEZLSFyLtxRG5TF2MjHrRoO6QQ%2BUT29fSMkgNZY6fNqy40adFtiLVNlfeq2uQ52wClUW6qMAzY2rRViE8GQOROPs3Aei8GSxwfNF0ehXsGNCbylXQOQzikEli6B9dFt5BiK8XUQxYShowKx4yxd%2B4d%2FaCztyLyeLPM3%2BbQnK7Bm%2B0LG6TJgerIAfy%2BHxBp9BUgo0bdZvs0%2F3IiekskglwsSe%2B0sYNVwlmVfPTo%2BujgbUQL49owdZwL67JHeZpoXMejD2dc9EWe0hVCt7nhBp1RkM0b%2F8w7SHtq7pnMF1CmdPhsFa8%2B5gn0dPAWsq0DgBkE%2FY8aH%2BNRe7VnK8Hx8pIe731DElO5tAksrtSbbSjsFC4AmgGmnLMSP3g9azXEDJCFv1ymPQqy6WbhP1rKp7T31ubu%2BOxi%2BYv1SUn3v4xt2oMnk9jm%2FlCpRHPWc7mK9eJWWRJqLZbUN%2BORhz6VcobAO94lIuWOIhDvnnIVrNPZueEzkiYC6Vx6swGHwmziFs6jCdKDtLpYhdbvnTPOqzgO11FSTREYhtASZMKPLgb8GOqUBM0czhzDo8zcu%2BCoA5FgejEC%2Fl2nbf%2BoVnyun0Rgx7nmGCwh0MACdKeJNWpsQd6f4uryZmru%2B%2BDZmIQIFzUU4c5hxiwVl8A%2BCpAuizgrcQ0%2BUd41aLnOr3gmibs2DKtw82kvq4GRNyxjn4Ez4qN2kB5E3br9n27OJ%2BjfuUkCq3NTvc0aNS0v0nE9EyGXQbkuN8KxvxI70yGIV%2BT4oNLG3p1OPJUN9&X-Amz-Signature=ae31fa96dedb246c040c0d044e25c5f7b1564adc1464511cffcafd39475bf7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPMNNCB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bf0iEDImIHrAe5k0OIQfi2lr3Km6KjpIde1obJU5lSgIgFYklGpqw46AWRLXdvjruRwacVxMQ9aXZWySZ4l5pefEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1lMY4sE7JNPa5dgSrcA90fF5Gz3zjGRA3gTHghtIto09wDZyEW9qCWhYbXW3UpYjgeWiCQ4CcYNQbH3zP4hKX3%2B6nvCi7i0a%2F3WAK9FCYBv%2BEZLSFyLtxRG5TF2MjHrRoO6QQ%2BUT29fSMkgNZY6fNqy40adFtiLVNlfeq2uQ52wClUW6qMAzY2rRViE8GQOROPs3Aei8GSxwfNF0ehXsGNCbylXQOQzikEli6B9dFt5BiK8XUQxYShowKx4yxd%2B4d%2FaCztyLyeLPM3%2BbQnK7Bm%2B0LG6TJgerIAfy%2BHxBp9BUgo0bdZvs0%2F3IiekskglwsSe%2B0sYNVwlmVfPTo%2BujgbUQL49owdZwL67JHeZpoXMejD2dc9EWe0hVCt7nhBp1RkM0b%2F8w7SHtq7pnMF1CmdPhsFa8%2B5gn0dPAWsq0DgBkE%2FY8aH%2BNRe7VnK8Hx8pIe731DElO5tAksrtSbbSjsFC4AmgGmnLMSP3g9azXEDJCFv1ymPQqy6WbhP1rKp7T31ubu%2BOxi%2BYv1SUn3v4xt2oMnk9jm%2FlCpRHPWc7mK9eJWWRJqLZbUN%2BORhz6VcobAO94lIuWOIhDvnnIVrNPZueEzkiYC6Vx6swGHwmziFs6jCdKDtLpYhdbvnTPOqzgO11FSTREYhtASZMKPLgb8GOqUBM0czhzDo8zcu%2BCoA5FgejEC%2Fl2nbf%2BoVnyun0Rgx7nmGCwh0MACdKeJNWpsQd6f4uryZmru%2B%2BDZmIQIFzUU4c5hxiwVl8A%2BCpAuizgrcQ0%2BUd41aLnOr3gmibs2DKtw82kvq4GRNyxjn4Ez4qN2kB5E3br9n27OJ%2BjfuUkCq3NTvc0aNS0v0nE9EyGXQbkuN8KxvxI70yGIV%2BT4oNLG3p1OPJUN9&X-Amz-Signature=eec66389c7d353bfed52d99f62d83a7a0c6db74e0c5064f18652e3f5afae101e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

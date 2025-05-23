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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ2OAYR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE4fnsnFwZzXS5zOsW0uTGCezYVpNkvJZUjDoh73LS2NAiAnx5bPOn%2BCaM29eDf2Mjmtx2v9SFLBGJQpsVD%2BzVNRhCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6oZhvjZXTiYMTmZKtwDw%2BHIbRAomPftyFoUU9BbdXBWaA2O1w753o7TqUHD%2F7Nx0yhdFIjI4BJmSSLtUHfXz5R0O2w964h08KLBJepbie2ZPJVrYeFz27VRwbdyQ4e6a7b2TeMUCokB6ejbm05FaY0V%2BAPuwlHoLzUDITq%2FH2uxJoeAIFlapWd%2Fx7d%2BpyGwrZymYPcP7%2BXTXwem32VSGVIuh%2FLVbVZ7tmSiIRqWoUBn1HlaF8upZOzA3RFT3xGlsNhrXzy6undtwUXRR6g2%2FJ4xSm%2BoQC1%2FsNJa6JwhMrIpsFMZMr8i4ZICT3EoP7Ebw3mMGxU%2FzQSAfIU3hhCz0im4UJ2kWZ8fsNjQOnODSw%2BIWLtgPLEoten99194YEVAzIer9PcF0Dzi3zpAXt%2F7YyTW5vh6xis1bEaYeJxGQbzj60lQ%2BYytlq1abghIMFjaHo7Qprwoz%2Fgdw8CHvZ0DqBb9uMZMQlTBM3cFhUFh0USh3uj4GgZRcMNzizggkxFxabLPtrP3aEDQzsUD8ZJ2f3muG4kdj8NhLHKZ9zmiYrvMaHxqXO3%2FsrRYckEoib9augYo8QUaB6ZC5%2FtMIzLGILA8S2lWpPAal08izWEPHg9hO2AbJSHJdhLNwaXPfxEBMSphdeZGvNEANNkw0KfCwQY6pgGl6Gloie7Vp5%2Bw%2Bk5V7SWp7HpeEGzckiRnRIfsLKQA%2BV9G2NhDSZsMuXLdZMTOZRHnhUP5j%2BknFic3%2BKfCgzYT73PUxoFcuqmtXGyjc8n8b1EM7VL0SSYWdtxee43uiWbg%2F52TZ02xLyuNygl7hvNTdHm6etGy34NaOwFu9R7%2BFxVmeppmuLkc65olec5EVnY%2FJLCbTdHpWlgdt0wOmwBSwLelQLOY&X-Amz-Signature=9d958fc37fee730815f38aa2c75de545ee6a52cc26c988bc487bfb8658b96dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ2OAYR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE4fnsnFwZzXS5zOsW0uTGCezYVpNkvJZUjDoh73LS2NAiAnx5bPOn%2BCaM29eDf2Mjmtx2v9SFLBGJQpsVD%2BzVNRhCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6oZhvjZXTiYMTmZKtwDw%2BHIbRAomPftyFoUU9BbdXBWaA2O1w753o7TqUHD%2F7Nx0yhdFIjI4BJmSSLtUHfXz5R0O2w964h08KLBJepbie2ZPJVrYeFz27VRwbdyQ4e6a7b2TeMUCokB6ejbm05FaY0V%2BAPuwlHoLzUDITq%2FH2uxJoeAIFlapWd%2Fx7d%2BpyGwrZymYPcP7%2BXTXwem32VSGVIuh%2FLVbVZ7tmSiIRqWoUBn1HlaF8upZOzA3RFT3xGlsNhrXzy6undtwUXRR6g2%2FJ4xSm%2BoQC1%2FsNJa6JwhMrIpsFMZMr8i4ZICT3EoP7Ebw3mMGxU%2FzQSAfIU3hhCz0im4UJ2kWZ8fsNjQOnODSw%2BIWLtgPLEoten99194YEVAzIer9PcF0Dzi3zpAXt%2F7YyTW5vh6xis1bEaYeJxGQbzj60lQ%2BYytlq1abghIMFjaHo7Qprwoz%2Fgdw8CHvZ0DqBb9uMZMQlTBM3cFhUFh0USh3uj4GgZRcMNzizggkxFxabLPtrP3aEDQzsUD8ZJ2f3muG4kdj8NhLHKZ9zmiYrvMaHxqXO3%2FsrRYckEoib9augYo8QUaB6ZC5%2FtMIzLGILA8S2lWpPAal08izWEPHg9hO2AbJSHJdhLNwaXPfxEBMSphdeZGvNEANNkw0KfCwQY6pgGl6Gloie7Vp5%2Bw%2Bk5V7SWp7HpeEGzckiRnRIfsLKQA%2BV9G2NhDSZsMuXLdZMTOZRHnhUP5j%2BknFic3%2BKfCgzYT73PUxoFcuqmtXGyjc8n8b1EM7VL0SSYWdtxee43uiWbg%2F52TZ02xLyuNygl7hvNTdHm6etGy34NaOwFu9R7%2BFxVmeppmuLkc65olec5EVnY%2FJLCbTdHpWlgdt0wOmwBSwLelQLOY&X-Amz-Signature=9ecc9768b50c8e69268ffabdc0117ddc5a0a9dd972259ab774a7f10d352d7a53&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ2OAYR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE4fnsnFwZzXS5zOsW0uTGCezYVpNkvJZUjDoh73LS2NAiAnx5bPOn%2BCaM29eDf2Mjmtx2v9SFLBGJQpsVD%2BzVNRhCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6oZhvjZXTiYMTmZKtwDw%2BHIbRAomPftyFoUU9BbdXBWaA2O1w753o7TqUHD%2F7Nx0yhdFIjI4BJmSSLtUHfXz5R0O2w964h08KLBJepbie2ZPJVrYeFz27VRwbdyQ4e6a7b2TeMUCokB6ejbm05FaY0V%2BAPuwlHoLzUDITq%2FH2uxJoeAIFlapWd%2Fx7d%2BpyGwrZymYPcP7%2BXTXwem32VSGVIuh%2FLVbVZ7tmSiIRqWoUBn1HlaF8upZOzA3RFT3xGlsNhrXzy6undtwUXRR6g2%2FJ4xSm%2BoQC1%2FsNJa6JwhMrIpsFMZMr8i4ZICT3EoP7Ebw3mMGxU%2FzQSAfIU3hhCz0im4UJ2kWZ8fsNjQOnODSw%2BIWLtgPLEoten99194YEVAzIer9PcF0Dzi3zpAXt%2F7YyTW5vh6xis1bEaYeJxGQbzj60lQ%2BYytlq1abghIMFjaHo7Qprwoz%2Fgdw8CHvZ0DqBb9uMZMQlTBM3cFhUFh0USh3uj4GgZRcMNzizggkxFxabLPtrP3aEDQzsUD8ZJ2f3muG4kdj8NhLHKZ9zmiYrvMaHxqXO3%2FsrRYckEoib9augYo8QUaB6ZC5%2FtMIzLGILA8S2lWpPAal08izWEPHg9hO2AbJSHJdhLNwaXPfxEBMSphdeZGvNEANNkw0KfCwQY6pgGl6Gloie7Vp5%2Bw%2Bk5V7SWp7HpeEGzckiRnRIfsLKQA%2BV9G2NhDSZsMuXLdZMTOZRHnhUP5j%2BknFic3%2BKfCgzYT73PUxoFcuqmtXGyjc8n8b1EM7VL0SSYWdtxee43uiWbg%2F52TZ02xLyuNygl7hvNTdHm6etGy34NaOwFu9R7%2BFxVmeppmuLkc65olec5EVnY%2FJLCbTdHpWlgdt0wOmwBSwLelQLOY&X-Amz-Signature=b34e58f2e4818a4956c7ed8612b7818e2036fa6d0f0d8f4dded6e49d90bef535&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ2OAYR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE4fnsnFwZzXS5zOsW0uTGCezYVpNkvJZUjDoh73LS2NAiAnx5bPOn%2BCaM29eDf2Mjmtx2v9SFLBGJQpsVD%2BzVNRhCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6oZhvjZXTiYMTmZKtwDw%2BHIbRAomPftyFoUU9BbdXBWaA2O1w753o7TqUHD%2F7Nx0yhdFIjI4BJmSSLtUHfXz5R0O2w964h08KLBJepbie2ZPJVrYeFz27VRwbdyQ4e6a7b2TeMUCokB6ejbm05FaY0V%2BAPuwlHoLzUDITq%2FH2uxJoeAIFlapWd%2Fx7d%2BpyGwrZymYPcP7%2BXTXwem32VSGVIuh%2FLVbVZ7tmSiIRqWoUBn1HlaF8upZOzA3RFT3xGlsNhrXzy6undtwUXRR6g2%2FJ4xSm%2BoQC1%2FsNJa6JwhMrIpsFMZMr8i4ZICT3EoP7Ebw3mMGxU%2FzQSAfIU3hhCz0im4UJ2kWZ8fsNjQOnODSw%2BIWLtgPLEoten99194YEVAzIer9PcF0Dzi3zpAXt%2F7YyTW5vh6xis1bEaYeJxGQbzj60lQ%2BYytlq1abghIMFjaHo7Qprwoz%2Fgdw8CHvZ0DqBb9uMZMQlTBM3cFhUFh0USh3uj4GgZRcMNzizggkxFxabLPtrP3aEDQzsUD8ZJ2f3muG4kdj8NhLHKZ9zmiYrvMaHxqXO3%2FsrRYckEoib9augYo8QUaB6ZC5%2FtMIzLGILA8S2lWpPAal08izWEPHg9hO2AbJSHJdhLNwaXPfxEBMSphdeZGvNEANNkw0KfCwQY6pgGl6Gloie7Vp5%2Bw%2Bk5V7SWp7HpeEGzckiRnRIfsLKQA%2BV9G2NhDSZsMuXLdZMTOZRHnhUP5j%2BknFic3%2BKfCgzYT73PUxoFcuqmtXGyjc8n8b1EM7VL0SSYWdtxee43uiWbg%2F52TZ02xLyuNygl7hvNTdHm6etGy34NaOwFu9R7%2BFxVmeppmuLkc65olec5EVnY%2FJLCbTdHpWlgdt0wOmwBSwLelQLOY&X-Amz-Signature=2c9281bc36a6b8ab219c13591178dd77b9b9b91063b0b0da3543499e08096a38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ2OAYR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE4fnsnFwZzXS5zOsW0uTGCezYVpNkvJZUjDoh73LS2NAiAnx5bPOn%2BCaM29eDf2Mjmtx2v9SFLBGJQpsVD%2BzVNRhCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6oZhvjZXTiYMTmZKtwDw%2BHIbRAomPftyFoUU9BbdXBWaA2O1w753o7TqUHD%2F7Nx0yhdFIjI4BJmSSLtUHfXz5R0O2w964h08KLBJepbie2ZPJVrYeFz27VRwbdyQ4e6a7b2TeMUCokB6ejbm05FaY0V%2BAPuwlHoLzUDITq%2FH2uxJoeAIFlapWd%2Fx7d%2BpyGwrZymYPcP7%2BXTXwem32VSGVIuh%2FLVbVZ7tmSiIRqWoUBn1HlaF8upZOzA3RFT3xGlsNhrXzy6undtwUXRR6g2%2FJ4xSm%2BoQC1%2FsNJa6JwhMrIpsFMZMr8i4ZICT3EoP7Ebw3mMGxU%2FzQSAfIU3hhCz0im4UJ2kWZ8fsNjQOnODSw%2BIWLtgPLEoten99194YEVAzIer9PcF0Dzi3zpAXt%2F7YyTW5vh6xis1bEaYeJxGQbzj60lQ%2BYytlq1abghIMFjaHo7Qprwoz%2Fgdw8CHvZ0DqBb9uMZMQlTBM3cFhUFh0USh3uj4GgZRcMNzizggkxFxabLPtrP3aEDQzsUD8ZJ2f3muG4kdj8NhLHKZ9zmiYrvMaHxqXO3%2FsrRYckEoib9augYo8QUaB6ZC5%2FtMIzLGILA8S2lWpPAal08izWEPHg9hO2AbJSHJdhLNwaXPfxEBMSphdeZGvNEANNkw0KfCwQY6pgGl6Gloie7Vp5%2Bw%2Bk5V7SWp7HpeEGzckiRnRIfsLKQA%2BV9G2NhDSZsMuXLdZMTOZRHnhUP5j%2BknFic3%2BKfCgzYT73PUxoFcuqmtXGyjc8n8b1EM7VL0SSYWdtxee43uiWbg%2F52TZ02xLyuNygl7hvNTdHm6etGy34NaOwFu9R7%2BFxVmeppmuLkc65olec5EVnY%2FJLCbTdHpWlgdt0wOmwBSwLelQLOY&X-Amz-Signature=fa2943fe4adb6912335ca2ffb879bd0918957aa9492d9ee9abdec6c9f82498ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ2OAYR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE4fnsnFwZzXS5zOsW0uTGCezYVpNkvJZUjDoh73LS2NAiAnx5bPOn%2BCaM29eDf2Mjmtx2v9SFLBGJQpsVD%2BzVNRhCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6oZhvjZXTiYMTmZKtwDw%2BHIbRAomPftyFoUU9BbdXBWaA2O1w753o7TqUHD%2F7Nx0yhdFIjI4BJmSSLtUHfXz5R0O2w964h08KLBJepbie2ZPJVrYeFz27VRwbdyQ4e6a7b2TeMUCokB6ejbm05FaY0V%2BAPuwlHoLzUDITq%2FH2uxJoeAIFlapWd%2Fx7d%2BpyGwrZymYPcP7%2BXTXwem32VSGVIuh%2FLVbVZ7tmSiIRqWoUBn1HlaF8upZOzA3RFT3xGlsNhrXzy6undtwUXRR6g2%2FJ4xSm%2BoQC1%2FsNJa6JwhMrIpsFMZMr8i4ZICT3EoP7Ebw3mMGxU%2FzQSAfIU3hhCz0im4UJ2kWZ8fsNjQOnODSw%2BIWLtgPLEoten99194YEVAzIer9PcF0Dzi3zpAXt%2F7YyTW5vh6xis1bEaYeJxGQbzj60lQ%2BYytlq1abghIMFjaHo7Qprwoz%2Fgdw8CHvZ0DqBb9uMZMQlTBM3cFhUFh0USh3uj4GgZRcMNzizggkxFxabLPtrP3aEDQzsUD8ZJ2f3muG4kdj8NhLHKZ9zmiYrvMaHxqXO3%2FsrRYckEoib9augYo8QUaB6ZC5%2FtMIzLGILA8S2lWpPAal08izWEPHg9hO2AbJSHJdhLNwaXPfxEBMSphdeZGvNEANNkw0KfCwQY6pgGl6Gloie7Vp5%2Bw%2Bk5V7SWp7HpeEGzckiRnRIfsLKQA%2BV9G2NhDSZsMuXLdZMTOZRHnhUP5j%2BknFic3%2BKfCgzYT73PUxoFcuqmtXGyjc8n8b1EM7VL0SSYWdtxee43uiWbg%2F52TZ02xLyuNygl7hvNTdHm6etGy34NaOwFu9R7%2BFxVmeppmuLkc65olec5EVnY%2FJLCbTdHpWlgdt0wOmwBSwLelQLOY&X-Amz-Signature=260fa56598133055aa892703b720b5b6205933da1ca93741527a1db72b672938&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ2OAYR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE4fnsnFwZzXS5zOsW0uTGCezYVpNkvJZUjDoh73LS2NAiAnx5bPOn%2BCaM29eDf2Mjmtx2v9SFLBGJQpsVD%2BzVNRhCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6oZhvjZXTiYMTmZKtwDw%2BHIbRAomPftyFoUU9BbdXBWaA2O1w753o7TqUHD%2F7Nx0yhdFIjI4BJmSSLtUHfXz5R0O2w964h08KLBJepbie2ZPJVrYeFz27VRwbdyQ4e6a7b2TeMUCokB6ejbm05FaY0V%2BAPuwlHoLzUDITq%2FH2uxJoeAIFlapWd%2Fx7d%2BpyGwrZymYPcP7%2BXTXwem32VSGVIuh%2FLVbVZ7tmSiIRqWoUBn1HlaF8upZOzA3RFT3xGlsNhrXzy6undtwUXRR6g2%2FJ4xSm%2BoQC1%2FsNJa6JwhMrIpsFMZMr8i4ZICT3EoP7Ebw3mMGxU%2FzQSAfIU3hhCz0im4UJ2kWZ8fsNjQOnODSw%2BIWLtgPLEoten99194YEVAzIer9PcF0Dzi3zpAXt%2F7YyTW5vh6xis1bEaYeJxGQbzj60lQ%2BYytlq1abghIMFjaHo7Qprwoz%2Fgdw8CHvZ0DqBb9uMZMQlTBM3cFhUFh0USh3uj4GgZRcMNzizggkxFxabLPtrP3aEDQzsUD8ZJ2f3muG4kdj8NhLHKZ9zmiYrvMaHxqXO3%2FsrRYckEoib9augYo8QUaB6ZC5%2FtMIzLGILA8S2lWpPAal08izWEPHg9hO2AbJSHJdhLNwaXPfxEBMSphdeZGvNEANNkw0KfCwQY6pgGl6Gloie7Vp5%2Bw%2Bk5V7SWp7HpeEGzckiRnRIfsLKQA%2BV9G2NhDSZsMuXLdZMTOZRHnhUP5j%2BknFic3%2BKfCgzYT73PUxoFcuqmtXGyjc8n8b1EM7VL0SSYWdtxee43uiWbg%2F52TZ02xLyuNygl7hvNTdHm6etGy34NaOwFu9R7%2BFxVmeppmuLkc65olec5EVnY%2FJLCbTdHpWlgdt0wOmwBSwLelQLOY&X-Amz-Signature=dceaca1f11471c91d9a4577f491a01e9cddc337e233c5b23e2e2de98518b6b13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ2OAYR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE4fnsnFwZzXS5zOsW0uTGCezYVpNkvJZUjDoh73LS2NAiAnx5bPOn%2BCaM29eDf2Mjmtx2v9SFLBGJQpsVD%2BzVNRhCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6oZhvjZXTiYMTmZKtwDw%2BHIbRAomPftyFoUU9BbdXBWaA2O1w753o7TqUHD%2F7Nx0yhdFIjI4BJmSSLtUHfXz5R0O2w964h08KLBJepbie2ZPJVrYeFz27VRwbdyQ4e6a7b2TeMUCokB6ejbm05FaY0V%2BAPuwlHoLzUDITq%2FH2uxJoeAIFlapWd%2Fx7d%2BpyGwrZymYPcP7%2BXTXwem32VSGVIuh%2FLVbVZ7tmSiIRqWoUBn1HlaF8upZOzA3RFT3xGlsNhrXzy6undtwUXRR6g2%2FJ4xSm%2BoQC1%2FsNJa6JwhMrIpsFMZMr8i4ZICT3EoP7Ebw3mMGxU%2FzQSAfIU3hhCz0im4UJ2kWZ8fsNjQOnODSw%2BIWLtgPLEoten99194YEVAzIer9PcF0Dzi3zpAXt%2F7YyTW5vh6xis1bEaYeJxGQbzj60lQ%2BYytlq1abghIMFjaHo7Qprwoz%2Fgdw8CHvZ0DqBb9uMZMQlTBM3cFhUFh0USh3uj4GgZRcMNzizggkxFxabLPtrP3aEDQzsUD8ZJ2f3muG4kdj8NhLHKZ9zmiYrvMaHxqXO3%2FsrRYckEoib9augYo8QUaB6ZC5%2FtMIzLGILA8S2lWpPAal08izWEPHg9hO2AbJSHJdhLNwaXPfxEBMSphdeZGvNEANNkw0KfCwQY6pgGl6Gloie7Vp5%2Bw%2Bk5V7SWp7HpeEGzckiRnRIfsLKQA%2BV9G2NhDSZsMuXLdZMTOZRHnhUP5j%2BknFic3%2BKfCgzYT73PUxoFcuqmtXGyjc8n8b1EM7VL0SSYWdtxee43uiWbg%2F52TZ02xLyuNygl7hvNTdHm6etGy34NaOwFu9R7%2BFxVmeppmuLkc65olec5EVnY%2FJLCbTdHpWlgdt0wOmwBSwLelQLOY&X-Amz-Signature=6c8c4cd55a3e101cd1a8baeaaaa76fd62240c06d0f56c69f6739ed517ed75cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

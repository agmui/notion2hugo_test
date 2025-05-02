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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSYBZKW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC3AJ%2BPOVvR9elA1P2wdWintnPRrVuEU2uKzsmTzgPdTAIgQPAUFKDD2GE3%2BLM93FSfY99e4nanGWj2gFbhcC9YWm4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBaZzzHUiIderyg4CrcA80tMZhapqGm%2BolY9vuczO%2FzLkVLGppm8I8hFAMzzOh6KpLlvjA6W8x%2BhNfCKmLuy9Fhxxz%2BsxRp2qnKCHPeutCVo2UB42PNeN7ZLqBzdgLx48gxxtCGmU2n1%2FbK%2FFNweTXicPrle7i7VdKM1WBSss8m9nxO1wK%2Fg8lrDfUxKeqdWX3%2FX5OnaB8QQHEQPgWpdhEGNbH0ZE8L8yS8%2BXgOgiIs1bLfjz8tLkMGSt4h785mW%2F9PCGcPipKm8h1wxy76xuOiCn7B6AongTB39tK%2B263abWI6L3zPRsVw5ZpI6qvpybq5XJ8VU4rZU%2BLaXepa7ZK4nl7UflppaxWW7Akyjl8nUxqxKwxHGWU7zaacJ9tDIW101xecM2U0mCQ1plv6%2FnXRkyTC7cthMv6EKhgSfsZuhiCTIzFU6d7rkpyaTDUbjtYWVH4mpQi34cRFL%2F8WcwAwPDsKVPViFbpdM4WUiWZSUDDU5SusByS4zZ7gPylRcX2D2VkS8L40nBB2xPt6UfIApElj1jjEjvUvdGBwPrZF1PwvN2wG9Gjy%2Fr04H62Fw7JO50gc8%2Bn%2FYBD5o3c%2Fy%2B2p0xf6euDXRiQg7bwZsH3%2BPTQZMWHGYW5U9JpUSClRPPB9rcF2uhen8fcCMP7R0MAGOqUBEjbJo%2BKAUH%2F3xarY%2Fj1kM9bHnpn1w0%2Ft35Rc6pSWVVdISWKW0bQSfhRGkgTagnS3jrFzaws1DzagQ3b7ahd8NyUhtjIsPI0jTOZfgrcQUaT8QJ%2BD%2Bm62uh4SyHJKbnhE%2BiaZZ0iunYfFiwy54VK53B6o9qLtS49VQ5VAfV6cgvrXK8lJHU7kzFaojft6T2E1gk4b1IbKL4ekbrMOLA35EopHjpOe&X-Amz-Signature=679f0b88d1cf441899df9402e7b9767fbe6c53d9bcfcccd29b8e2fb50df955cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSYBZKW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC3AJ%2BPOVvR9elA1P2wdWintnPRrVuEU2uKzsmTzgPdTAIgQPAUFKDD2GE3%2BLM93FSfY99e4nanGWj2gFbhcC9YWm4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBaZzzHUiIderyg4CrcA80tMZhapqGm%2BolY9vuczO%2FzLkVLGppm8I8hFAMzzOh6KpLlvjA6W8x%2BhNfCKmLuy9Fhxxz%2BsxRp2qnKCHPeutCVo2UB42PNeN7ZLqBzdgLx48gxxtCGmU2n1%2FbK%2FFNweTXicPrle7i7VdKM1WBSss8m9nxO1wK%2Fg8lrDfUxKeqdWX3%2FX5OnaB8QQHEQPgWpdhEGNbH0ZE8L8yS8%2BXgOgiIs1bLfjz8tLkMGSt4h785mW%2F9PCGcPipKm8h1wxy76xuOiCn7B6AongTB39tK%2B263abWI6L3zPRsVw5ZpI6qvpybq5XJ8VU4rZU%2BLaXepa7ZK4nl7UflppaxWW7Akyjl8nUxqxKwxHGWU7zaacJ9tDIW101xecM2U0mCQ1plv6%2FnXRkyTC7cthMv6EKhgSfsZuhiCTIzFU6d7rkpyaTDUbjtYWVH4mpQi34cRFL%2F8WcwAwPDsKVPViFbpdM4WUiWZSUDDU5SusByS4zZ7gPylRcX2D2VkS8L40nBB2xPt6UfIApElj1jjEjvUvdGBwPrZF1PwvN2wG9Gjy%2Fr04H62Fw7JO50gc8%2Bn%2FYBD5o3c%2Fy%2B2p0xf6euDXRiQg7bwZsH3%2BPTQZMWHGYW5U9JpUSClRPPB9rcF2uhen8fcCMP7R0MAGOqUBEjbJo%2BKAUH%2F3xarY%2Fj1kM9bHnpn1w0%2Ft35Rc6pSWVVdISWKW0bQSfhRGkgTagnS3jrFzaws1DzagQ3b7ahd8NyUhtjIsPI0jTOZfgrcQUaT8QJ%2BD%2Bm62uh4SyHJKbnhE%2BiaZZ0iunYfFiwy54VK53B6o9qLtS49VQ5VAfV6cgvrXK8lJHU7kzFaojft6T2E1gk4b1IbKL4ekbrMOLA35EopHjpOe&X-Amz-Signature=886da52b547c0f5c04f6793a2308fb948d335d7cecf24122050891c24bbc21c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSYBZKW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC3AJ%2BPOVvR9elA1P2wdWintnPRrVuEU2uKzsmTzgPdTAIgQPAUFKDD2GE3%2BLM93FSfY99e4nanGWj2gFbhcC9YWm4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBaZzzHUiIderyg4CrcA80tMZhapqGm%2BolY9vuczO%2FzLkVLGppm8I8hFAMzzOh6KpLlvjA6W8x%2BhNfCKmLuy9Fhxxz%2BsxRp2qnKCHPeutCVo2UB42PNeN7ZLqBzdgLx48gxxtCGmU2n1%2FbK%2FFNweTXicPrle7i7VdKM1WBSss8m9nxO1wK%2Fg8lrDfUxKeqdWX3%2FX5OnaB8QQHEQPgWpdhEGNbH0ZE8L8yS8%2BXgOgiIs1bLfjz8tLkMGSt4h785mW%2F9PCGcPipKm8h1wxy76xuOiCn7B6AongTB39tK%2B263abWI6L3zPRsVw5ZpI6qvpybq5XJ8VU4rZU%2BLaXepa7ZK4nl7UflppaxWW7Akyjl8nUxqxKwxHGWU7zaacJ9tDIW101xecM2U0mCQ1plv6%2FnXRkyTC7cthMv6EKhgSfsZuhiCTIzFU6d7rkpyaTDUbjtYWVH4mpQi34cRFL%2F8WcwAwPDsKVPViFbpdM4WUiWZSUDDU5SusByS4zZ7gPylRcX2D2VkS8L40nBB2xPt6UfIApElj1jjEjvUvdGBwPrZF1PwvN2wG9Gjy%2Fr04H62Fw7JO50gc8%2Bn%2FYBD5o3c%2Fy%2B2p0xf6euDXRiQg7bwZsH3%2BPTQZMWHGYW5U9JpUSClRPPB9rcF2uhen8fcCMP7R0MAGOqUBEjbJo%2BKAUH%2F3xarY%2Fj1kM9bHnpn1w0%2Ft35Rc6pSWVVdISWKW0bQSfhRGkgTagnS3jrFzaws1DzagQ3b7ahd8NyUhtjIsPI0jTOZfgrcQUaT8QJ%2BD%2Bm62uh4SyHJKbnhE%2BiaZZ0iunYfFiwy54VK53B6o9qLtS49VQ5VAfV6cgvrXK8lJHU7kzFaojft6T2E1gk4b1IbKL4ekbrMOLA35EopHjpOe&X-Amz-Signature=e12ec78b2810ebd5a7d30a27eebfc594fdbff7b42073017a9dbb109061c9f3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSYBZKW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC3AJ%2BPOVvR9elA1P2wdWintnPRrVuEU2uKzsmTzgPdTAIgQPAUFKDD2GE3%2BLM93FSfY99e4nanGWj2gFbhcC9YWm4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBaZzzHUiIderyg4CrcA80tMZhapqGm%2BolY9vuczO%2FzLkVLGppm8I8hFAMzzOh6KpLlvjA6W8x%2BhNfCKmLuy9Fhxxz%2BsxRp2qnKCHPeutCVo2UB42PNeN7ZLqBzdgLx48gxxtCGmU2n1%2FbK%2FFNweTXicPrle7i7VdKM1WBSss8m9nxO1wK%2Fg8lrDfUxKeqdWX3%2FX5OnaB8QQHEQPgWpdhEGNbH0ZE8L8yS8%2BXgOgiIs1bLfjz8tLkMGSt4h785mW%2F9PCGcPipKm8h1wxy76xuOiCn7B6AongTB39tK%2B263abWI6L3zPRsVw5ZpI6qvpybq5XJ8VU4rZU%2BLaXepa7ZK4nl7UflppaxWW7Akyjl8nUxqxKwxHGWU7zaacJ9tDIW101xecM2U0mCQ1plv6%2FnXRkyTC7cthMv6EKhgSfsZuhiCTIzFU6d7rkpyaTDUbjtYWVH4mpQi34cRFL%2F8WcwAwPDsKVPViFbpdM4WUiWZSUDDU5SusByS4zZ7gPylRcX2D2VkS8L40nBB2xPt6UfIApElj1jjEjvUvdGBwPrZF1PwvN2wG9Gjy%2Fr04H62Fw7JO50gc8%2Bn%2FYBD5o3c%2Fy%2B2p0xf6euDXRiQg7bwZsH3%2BPTQZMWHGYW5U9JpUSClRPPB9rcF2uhen8fcCMP7R0MAGOqUBEjbJo%2BKAUH%2F3xarY%2Fj1kM9bHnpn1w0%2Ft35Rc6pSWVVdISWKW0bQSfhRGkgTagnS3jrFzaws1DzagQ3b7ahd8NyUhtjIsPI0jTOZfgrcQUaT8QJ%2BD%2Bm62uh4SyHJKbnhE%2BiaZZ0iunYfFiwy54VK53B6o9qLtS49VQ5VAfV6cgvrXK8lJHU7kzFaojft6T2E1gk4b1IbKL4ekbrMOLA35EopHjpOe&X-Amz-Signature=2a9cbb7e85c1b56ac51e5d8e13e8fe85d8ba8e08b3cc41a2badf47ad443eacc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSYBZKW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC3AJ%2BPOVvR9elA1P2wdWintnPRrVuEU2uKzsmTzgPdTAIgQPAUFKDD2GE3%2BLM93FSfY99e4nanGWj2gFbhcC9YWm4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBaZzzHUiIderyg4CrcA80tMZhapqGm%2BolY9vuczO%2FzLkVLGppm8I8hFAMzzOh6KpLlvjA6W8x%2BhNfCKmLuy9Fhxxz%2BsxRp2qnKCHPeutCVo2UB42PNeN7ZLqBzdgLx48gxxtCGmU2n1%2FbK%2FFNweTXicPrle7i7VdKM1WBSss8m9nxO1wK%2Fg8lrDfUxKeqdWX3%2FX5OnaB8QQHEQPgWpdhEGNbH0ZE8L8yS8%2BXgOgiIs1bLfjz8tLkMGSt4h785mW%2F9PCGcPipKm8h1wxy76xuOiCn7B6AongTB39tK%2B263abWI6L3zPRsVw5ZpI6qvpybq5XJ8VU4rZU%2BLaXepa7ZK4nl7UflppaxWW7Akyjl8nUxqxKwxHGWU7zaacJ9tDIW101xecM2U0mCQ1plv6%2FnXRkyTC7cthMv6EKhgSfsZuhiCTIzFU6d7rkpyaTDUbjtYWVH4mpQi34cRFL%2F8WcwAwPDsKVPViFbpdM4WUiWZSUDDU5SusByS4zZ7gPylRcX2D2VkS8L40nBB2xPt6UfIApElj1jjEjvUvdGBwPrZF1PwvN2wG9Gjy%2Fr04H62Fw7JO50gc8%2Bn%2FYBD5o3c%2Fy%2B2p0xf6euDXRiQg7bwZsH3%2BPTQZMWHGYW5U9JpUSClRPPB9rcF2uhen8fcCMP7R0MAGOqUBEjbJo%2BKAUH%2F3xarY%2Fj1kM9bHnpn1w0%2Ft35Rc6pSWVVdISWKW0bQSfhRGkgTagnS3jrFzaws1DzagQ3b7ahd8NyUhtjIsPI0jTOZfgrcQUaT8QJ%2BD%2Bm62uh4SyHJKbnhE%2BiaZZ0iunYfFiwy54VK53B6o9qLtS49VQ5VAfV6cgvrXK8lJHU7kzFaojft6T2E1gk4b1IbKL4ekbrMOLA35EopHjpOe&X-Amz-Signature=bd42ac5e1b06c1fcc6845fe1c5775068fdba93e42b97c8cf7903fbb6d8e0a105&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSYBZKW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC3AJ%2BPOVvR9elA1P2wdWintnPRrVuEU2uKzsmTzgPdTAIgQPAUFKDD2GE3%2BLM93FSfY99e4nanGWj2gFbhcC9YWm4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBaZzzHUiIderyg4CrcA80tMZhapqGm%2BolY9vuczO%2FzLkVLGppm8I8hFAMzzOh6KpLlvjA6W8x%2BhNfCKmLuy9Fhxxz%2BsxRp2qnKCHPeutCVo2UB42PNeN7ZLqBzdgLx48gxxtCGmU2n1%2FbK%2FFNweTXicPrle7i7VdKM1WBSss8m9nxO1wK%2Fg8lrDfUxKeqdWX3%2FX5OnaB8QQHEQPgWpdhEGNbH0ZE8L8yS8%2BXgOgiIs1bLfjz8tLkMGSt4h785mW%2F9PCGcPipKm8h1wxy76xuOiCn7B6AongTB39tK%2B263abWI6L3zPRsVw5ZpI6qvpybq5XJ8VU4rZU%2BLaXepa7ZK4nl7UflppaxWW7Akyjl8nUxqxKwxHGWU7zaacJ9tDIW101xecM2U0mCQ1plv6%2FnXRkyTC7cthMv6EKhgSfsZuhiCTIzFU6d7rkpyaTDUbjtYWVH4mpQi34cRFL%2F8WcwAwPDsKVPViFbpdM4WUiWZSUDDU5SusByS4zZ7gPylRcX2D2VkS8L40nBB2xPt6UfIApElj1jjEjvUvdGBwPrZF1PwvN2wG9Gjy%2Fr04H62Fw7JO50gc8%2Bn%2FYBD5o3c%2Fy%2B2p0xf6euDXRiQg7bwZsH3%2BPTQZMWHGYW5U9JpUSClRPPB9rcF2uhen8fcCMP7R0MAGOqUBEjbJo%2BKAUH%2F3xarY%2Fj1kM9bHnpn1w0%2Ft35Rc6pSWVVdISWKW0bQSfhRGkgTagnS3jrFzaws1DzagQ3b7ahd8NyUhtjIsPI0jTOZfgrcQUaT8QJ%2BD%2Bm62uh4SyHJKbnhE%2BiaZZ0iunYfFiwy54VK53B6o9qLtS49VQ5VAfV6cgvrXK8lJHU7kzFaojft6T2E1gk4b1IbKL4ekbrMOLA35EopHjpOe&X-Amz-Signature=e146cee54128fbfa037bbd447e70d99c0823d2ce8b36f0afd61748fc881bbaf3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSYBZKW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC3AJ%2BPOVvR9elA1P2wdWintnPRrVuEU2uKzsmTzgPdTAIgQPAUFKDD2GE3%2BLM93FSfY99e4nanGWj2gFbhcC9YWm4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBaZzzHUiIderyg4CrcA80tMZhapqGm%2BolY9vuczO%2FzLkVLGppm8I8hFAMzzOh6KpLlvjA6W8x%2BhNfCKmLuy9Fhxxz%2BsxRp2qnKCHPeutCVo2UB42PNeN7ZLqBzdgLx48gxxtCGmU2n1%2FbK%2FFNweTXicPrle7i7VdKM1WBSss8m9nxO1wK%2Fg8lrDfUxKeqdWX3%2FX5OnaB8QQHEQPgWpdhEGNbH0ZE8L8yS8%2BXgOgiIs1bLfjz8tLkMGSt4h785mW%2F9PCGcPipKm8h1wxy76xuOiCn7B6AongTB39tK%2B263abWI6L3zPRsVw5ZpI6qvpybq5XJ8VU4rZU%2BLaXepa7ZK4nl7UflppaxWW7Akyjl8nUxqxKwxHGWU7zaacJ9tDIW101xecM2U0mCQ1plv6%2FnXRkyTC7cthMv6EKhgSfsZuhiCTIzFU6d7rkpyaTDUbjtYWVH4mpQi34cRFL%2F8WcwAwPDsKVPViFbpdM4WUiWZSUDDU5SusByS4zZ7gPylRcX2D2VkS8L40nBB2xPt6UfIApElj1jjEjvUvdGBwPrZF1PwvN2wG9Gjy%2Fr04H62Fw7JO50gc8%2Bn%2FYBD5o3c%2Fy%2B2p0xf6euDXRiQg7bwZsH3%2BPTQZMWHGYW5U9JpUSClRPPB9rcF2uhen8fcCMP7R0MAGOqUBEjbJo%2BKAUH%2F3xarY%2Fj1kM9bHnpn1w0%2Ft35Rc6pSWVVdISWKW0bQSfhRGkgTagnS3jrFzaws1DzagQ3b7ahd8NyUhtjIsPI0jTOZfgrcQUaT8QJ%2BD%2Bm62uh4SyHJKbnhE%2BiaZZ0iunYfFiwy54VK53B6o9qLtS49VQ5VAfV6cgvrXK8lJHU7kzFaojft6T2E1gk4b1IbKL4ekbrMOLA35EopHjpOe&X-Amz-Signature=63ce971f5cb04c4251b4590ef57008516cd3177ef3bdfd9e82bb9200e034dc68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSYBZKW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC3AJ%2BPOVvR9elA1P2wdWintnPRrVuEU2uKzsmTzgPdTAIgQPAUFKDD2GE3%2BLM93FSfY99e4nanGWj2gFbhcC9YWm4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBaZzzHUiIderyg4CrcA80tMZhapqGm%2BolY9vuczO%2FzLkVLGppm8I8hFAMzzOh6KpLlvjA6W8x%2BhNfCKmLuy9Fhxxz%2BsxRp2qnKCHPeutCVo2UB42PNeN7ZLqBzdgLx48gxxtCGmU2n1%2FbK%2FFNweTXicPrle7i7VdKM1WBSss8m9nxO1wK%2Fg8lrDfUxKeqdWX3%2FX5OnaB8QQHEQPgWpdhEGNbH0ZE8L8yS8%2BXgOgiIs1bLfjz8tLkMGSt4h785mW%2F9PCGcPipKm8h1wxy76xuOiCn7B6AongTB39tK%2B263abWI6L3zPRsVw5ZpI6qvpybq5XJ8VU4rZU%2BLaXepa7ZK4nl7UflppaxWW7Akyjl8nUxqxKwxHGWU7zaacJ9tDIW101xecM2U0mCQ1plv6%2FnXRkyTC7cthMv6EKhgSfsZuhiCTIzFU6d7rkpyaTDUbjtYWVH4mpQi34cRFL%2F8WcwAwPDsKVPViFbpdM4WUiWZSUDDU5SusByS4zZ7gPylRcX2D2VkS8L40nBB2xPt6UfIApElj1jjEjvUvdGBwPrZF1PwvN2wG9Gjy%2Fr04H62Fw7JO50gc8%2Bn%2FYBD5o3c%2Fy%2B2p0xf6euDXRiQg7bwZsH3%2BPTQZMWHGYW5U9JpUSClRPPB9rcF2uhen8fcCMP7R0MAGOqUBEjbJo%2BKAUH%2F3xarY%2Fj1kM9bHnpn1w0%2Ft35Rc6pSWVVdISWKW0bQSfhRGkgTagnS3jrFzaws1DzagQ3b7ahd8NyUhtjIsPI0jTOZfgrcQUaT8QJ%2BD%2Bm62uh4SyHJKbnhE%2BiaZZ0iunYfFiwy54VK53B6o9qLtS49VQ5VAfV6cgvrXK8lJHU7kzFaojft6T2E1gk4b1IbKL4ekbrMOLA35EopHjpOe&X-Amz-Signature=f0fcbfd149229bdccdef794b7d2c4c7e241ab51419f1c6b36899abb654cf0796&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

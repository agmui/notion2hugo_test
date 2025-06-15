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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB6O5A%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDQr0wUzS%2BDBufGjidYxMSk2LVLVL4T8FjUAmwZJpwJowIgXOX57Sk6Fzv1cL1kIyRl5f7mDHDC76hEkh7k1WgwtlUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGObJXFaxcypRzlMZSrcAzpJWHk27OiVIU4lSKkotB17%2FJKcsb%2F3R2AUhEr%2FFbTS%2FO5RxI6lUYQ4i22WIvnCsH3clF1a%2BYvqCrTeQ8CzIKbm0phTscxXovwOQxW1z0gnE9AndZgnM6acGwhO%2FWMvYQkFDwh6aj6flQO9Yerf%2B59D9ueTH6kcuThHxpIr1Z8bXvb5rhGe9U1zphZHP%2FmpgCHLOR4ZUG6TW%2FLAdZG6R4eimEnHMyLDnO2A%2F2tkLoQEio7wRfQVUkiZ4cQqFdYvCSz0L7D5SuwVmAGltOm60J%2FHCy1shKICebPgq0h43ecggGMaRV95Nh24mxkMgAWL2l669eUIsOdwubn6j9OkUDA69csYr6e%2BF7kzW%2BMMoFye059sPgUGX203N7MfqX%2FJ6TxCOOjhaxiwpOIt2J%2FC1mlDZVsys8YUiTftLwm3ZFEyP0fxuSPDR8%2BsB0HzQBNnSW6Vm67xlkHU9bxiKgNb8WgHZIugS%2FOnhoWHUHdupq6Y6kLz8%2FbS2UhdoijUbAl41YfHTMJB6zYlUsv3RCmBe5zQ%2Bj6R5UeeHyOoboxysmUTCuE%2BnzlUb6lc67%2B4ycwm9Nufyx%2FN2X1NYN9pbWyo%2FH0DedjpVGIHQBeSxKSceVySQ4roH%2BERyRwScjZOMNWFusIGOqUBrlkBwrI1b4%2B6E7%2FZ1oYtZfh0ubO9K8Hk01FiwCSotkHDIyJPuQt%2BpCkq9hDZaugjAI7dgJX54YbM0yER5pRGL6isMQMjod0gPVLlBJFo1l1xwB%2BSB3sk4Umi3pYOHbsSO4AIo%2BRXTcD2uC1OqZWA625IHsWu0tvQFmbkfDju42e4qo8TUH6%2BYSt%2B7gB5kB3FKImt67AuwB%2B5W3htaOIEt4X8DYL9&X-Amz-Signature=d75855b8ab1437b1a98225dc0d9317456a9587937b15486469b018f6dcf8e8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB6O5A%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDQr0wUzS%2BDBufGjidYxMSk2LVLVL4T8FjUAmwZJpwJowIgXOX57Sk6Fzv1cL1kIyRl5f7mDHDC76hEkh7k1WgwtlUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGObJXFaxcypRzlMZSrcAzpJWHk27OiVIU4lSKkotB17%2FJKcsb%2F3R2AUhEr%2FFbTS%2FO5RxI6lUYQ4i22WIvnCsH3clF1a%2BYvqCrTeQ8CzIKbm0phTscxXovwOQxW1z0gnE9AndZgnM6acGwhO%2FWMvYQkFDwh6aj6flQO9Yerf%2B59D9ueTH6kcuThHxpIr1Z8bXvb5rhGe9U1zphZHP%2FmpgCHLOR4ZUG6TW%2FLAdZG6R4eimEnHMyLDnO2A%2F2tkLoQEio7wRfQVUkiZ4cQqFdYvCSz0L7D5SuwVmAGltOm60J%2FHCy1shKICebPgq0h43ecggGMaRV95Nh24mxkMgAWL2l669eUIsOdwubn6j9OkUDA69csYr6e%2BF7kzW%2BMMoFye059sPgUGX203N7MfqX%2FJ6TxCOOjhaxiwpOIt2J%2FC1mlDZVsys8YUiTftLwm3ZFEyP0fxuSPDR8%2BsB0HzQBNnSW6Vm67xlkHU9bxiKgNb8WgHZIugS%2FOnhoWHUHdupq6Y6kLz8%2FbS2UhdoijUbAl41YfHTMJB6zYlUsv3RCmBe5zQ%2Bj6R5UeeHyOoboxysmUTCuE%2BnzlUb6lc67%2B4ycwm9Nufyx%2FN2X1NYN9pbWyo%2FH0DedjpVGIHQBeSxKSceVySQ4roH%2BERyRwScjZOMNWFusIGOqUBrlkBwrI1b4%2B6E7%2FZ1oYtZfh0ubO9K8Hk01FiwCSotkHDIyJPuQt%2BpCkq9hDZaugjAI7dgJX54YbM0yER5pRGL6isMQMjod0gPVLlBJFo1l1xwB%2BSB3sk4Umi3pYOHbsSO4AIo%2BRXTcD2uC1OqZWA625IHsWu0tvQFmbkfDju42e4qo8TUH6%2BYSt%2B7gB5kB3FKImt67AuwB%2B5W3htaOIEt4X8DYL9&X-Amz-Signature=66b2eaca780ea342e7eec9847e4dc24f55995eb673308436c38e490a861a118c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB6O5A%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDQr0wUzS%2BDBufGjidYxMSk2LVLVL4T8FjUAmwZJpwJowIgXOX57Sk6Fzv1cL1kIyRl5f7mDHDC76hEkh7k1WgwtlUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGObJXFaxcypRzlMZSrcAzpJWHk27OiVIU4lSKkotB17%2FJKcsb%2F3R2AUhEr%2FFbTS%2FO5RxI6lUYQ4i22WIvnCsH3clF1a%2BYvqCrTeQ8CzIKbm0phTscxXovwOQxW1z0gnE9AndZgnM6acGwhO%2FWMvYQkFDwh6aj6flQO9Yerf%2B59D9ueTH6kcuThHxpIr1Z8bXvb5rhGe9U1zphZHP%2FmpgCHLOR4ZUG6TW%2FLAdZG6R4eimEnHMyLDnO2A%2F2tkLoQEio7wRfQVUkiZ4cQqFdYvCSz0L7D5SuwVmAGltOm60J%2FHCy1shKICebPgq0h43ecggGMaRV95Nh24mxkMgAWL2l669eUIsOdwubn6j9OkUDA69csYr6e%2BF7kzW%2BMMoFye059sPgUGX203N7MfqX%2FJ6TxCOOjhaxiwpOIt2J%2FC1mlDZVsys8YUiTftLwm3ZFEyP0fxuSPDR8%2BsB0HzQBNnSW6Vm67xlkHU9bxiKgNb8WgHZIugS%2FOnhoWHUHdupq6Y6kLz8%2FbS2UhdoijUbAl41YfHTMJB6zYlUsv3RCmBe5zQ%2Bj6R5UeeHyOoboxysmUTCuE%2BnzlUb6lc67%2B4ycwm9Nufyx%2FN2X1NYN9pbWyo%2FH0DedjpVGIHQBeSxKSceVySQ4roH%2BERyRwScjZOMNWFusIGOqUBrlkBwrI1b4%2B6E7%2FZ1oYtZfh0ubO9K8Hk01FiwCSotkHDIyJPuQt%2BpCkq9hDZaugjAI7dgJX54YbM0yER5pRGL6isMQMjod0gPVLlBJFo1l1xwB%2BSB3sk4Umi3pYOHbsSO4AIo%2BRXTcD2uC1OqZWA625IHsWu0tvQFmbkfDju42e4qo8TUH6%2BYSt%2B7gB5kB3FKImt67AuwB%2B5W3htaOIEt4X8DYL9&X-Amz-Signature=df13465fe2e40b2d2c2cde37dba1730e109685284612685a1bcb0fd09d6024f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB6O5A%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDQr0wUzS%2BDBufGjidYxMSk2LVLVL4T8FjUAmwZJpwJowIgXOX57Sk6Fzv1cL1kIyRl5f7mDHDC76hEkh7k1WgwtlUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGObJXFaxcypRzlMZSrcAzpJWHk27OiVIU4lSKkotB17%2FJKcsb%2F3R2AUhEr%2FFbTS%2FO5RxI6lUYQ4i22WIvnCsH3clF1a%2BYvqCrTeQ8CzIKbm0phTscxXovwOQxW1z0gnE9AndZgnM6acGwhO%2FWMvYQkFDwh6aj6flQO9Yerf%2B59D9ueTH6kcuThHxpIr1Z8bXvb5rhGe9U1zphZHP%2FmpgCHLOR4ZUG6TW%2FLAdZG6R4eimEnHMyLDnO2A%2F2tkLoQEio7wRfQVUkiZ4cQqFdYvCSz0L7D5SuwVmAGltOm60J%2FHCy1shKICebPgq0h43ecggGMaRV95Nh24mxkMgAWL2l669eUIsOdwubn6j9OkUDA69csYr6e%2BF7kzW%2BMMoFye059sPgUGX203N7MfqX%2FJ6TxCOOjhaxiwpOIt2J%2FC1mlDZVsys8YUiTftLwm3ZFEyP0fxuSPDR8%2BsB0HzQBNnSW6Vm67xlkHU9bxiKgNb8WgHZIugS%2FOnhoWHUHdupq6Y6kLz8%2FbS2UhdoijUbAl41YfHTMJB6zYlUsv3RCmBe5zQ%2Bj6R5UeeHyOoboxysmUTCuE%2BnzlUb6lc67%2B4ycwm9Nufyx%2FN2X1NYN9pbWyo%2FH0DedjpVGIHQBeSxKSceVySQ4roH%2BERyRwScjZOMNWFusIGOqUBrlkBwrI1b4%2B6E7%2FZ1oYtZfh0ubO9K8Hk01FiwCSotkHDIyJPuQt%2BpCkq9hDZaugjAI7dgJX54YbM0yER5pRGL6isMQMjod0gPVLlBJFo1l1xwB%2BSB3sk4Umi3pYOHbsSO4AIo%2BRXTcD2uC1OqZWA625IHsWu0tvQFmbkfDju42e4qo8TUH6%2BYSt%2B7gB5kB3FKImt67AuwB%2B5W3htaOIEt4X8DYL9&X-Amz-Signature=a1c91b2e66ae12532b38b07ab818f840fde819ed00640b03fbca29e890bb238c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB6O5A%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDQr0wUzS%2BDBufGjidYxMSk2LVLVL4T8FjUAmwZJpwJowIgXOX57Sk6Fzv1cL1kIyRl5f7mDHDC76hEkh7k1WgwtlUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGObJXFaxcypRzlMZSrcAzpJWHk27OiVIU4lSKkotB17%2FJKcsb%2F3R2AUhEr%2FFbTS%2FO5RxI6lUYQ4i22WIvnCsH3clF1a%2BYvqCrTeQ8CzIKbm0phTscxXovwOQxW1z0gnE9AndZgnM6acGwhO%2FWMvYQkFDwh6aj6flQO9Yerf%2B59D9ueTH6kcuThHxpIr1Z8bXvb5rhGe9U1zphZHP%2FmpgCHLOR4ZUG6TW%2FLAdZG6R4eimEnHMyLDnO2A%2F2tkLoQEio7wRfQVUkiZ4cQqFdYvCSz0L7D5SuwVmAGltOm60J%2FHCy1shKICebPgq0h43ecggGMaRV95Nh24mxkMgAWL2l669eUIsOdwubn6j9OkUDA69csYr6e%2BF7kzW%2BMMoFye059sPgUGX203N7MfqX%2FJ6TxCOOjhaxiwpOIt2J%2FC1mlDZVsys8YUiTftLwm3ZFEyP0fxuSPDR8%2BsB0HzQBNnSW6Vm67xlkHU9bxiKgNb8WgHZIugS%2FOnhoWHUHdupq6Y6kLz8%2FbS2UhdoijUbAl41YfHTMJB6zYlUsv3RCmBe5zQ%2Bj6R5UeeHyOoboxysmUTCuE%2BnzlUb6lc67%2B4ycwm9Nufyx%2FN2X1NYN9pbWyo%2FH0DedjpVGIHQBeSxKSceVySQ4roH%2BERyRwScjZOMNWFusIGOqUBrlkBwrI1b4%2B6E7%2FZ1oYtZfh0ubO9K8Hk01FiwCSotkHDIyJPuQt%2BpCkq9hDZaugjAI7dgJX54YbM0yER5pRGL6isMQMjod0gPVLlBJFo1l1xwB%2BSB3sk4Umi3pYOHbsSO4AIo%2BRXTcD2uC1OqZWA625IHsWu0tvQFmbkfDju42e4qo8TUH6%2BYSt%2B7gB5kB3FKImt67AuwB%2B5W3htaOIEt4X8DYL9&X-Amz-Signature=3bbf5fb669aa6aad3564d58fa14a6b7eef5f5d14b2951b4a5b76912235703348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB6O5A%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDQr0wUzS%2BDBufGjidYxMSk2LVLVL4T8FjUAmwZJpwJowIgXOX57Sk6Fzv1cL1kIyRl5f7mDHDC76hEkh7k1WgwtlUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGObJXFaxcypRzlMZSrcAzpJWHk27OiVIU4lSKkotB17%2FJKcsb%2F3R2AUhEr%2FFbTS%2FO5RxI6lUYQ4i22WIvnCsH3clF1a%2BYvqCrTeQ8CzIKbm0phTscxXovwOQxW1z0gnE9AndZgnM6acGwhO%2FWMvYQkFDwh6aj6flQO9Yerf%2B59D9ueTH6kcuThHxpIr1Z8bXvb5rhGe9U1zphZHP%2FmpgCHLOR4ZUG6TW%2FLAdZG6R4eimEnHMyLDnO2A%2F2tkLoQEio7wRfQVUkiZ4cQqFdYvCSz0L7D5SuwVmAGltOm60J%2FHCy1shKICebPgq0h43ecggGMaRV95Nh24mxkMgAWL2l669eUIsOdwubn6j9OkUDA69csYr6e%2BF7kzW%2BMMoFye059sPgUGX203N7MfqX%2FJ6TxCOOjhaxiwpOIt2J%2FC1mlDZVsys8YUiTftLwm3ZFEyP0fxuSPDR8%2BsB0HzQBNnSW6Vm67xlkHU9bxiKgNb8WgHZIugS%2FOnhoWHUHdupq6Y6kLz8%2FbS2UhdoijUbAl41YfHTMJB6zYlUsv3RCmBe5zQ%2Bj6R5UeeHyOoboxysmUTCuE%2BnzlUb6lc67%2B4ycwm9Nufyx%2FN2X1NYN9pbWyo%2FH0DedjpVGIHQBeSxKSceVySQ4roH%2BERyRwScjZOMNWFusIGOqUBrlkBwrI1b4%2B6E7%2FZ1oYtZfh0ubO9K8Hk01FiwCSotkHDIyJPuQt%2BpCkq9hDZaugjAI7dgJX54YbM0yER5pRGL6isMQMjod0gPVLlBJFo1l1xwB%2BSB3sk4Umi3pYOHbsSO4AIo%2BRXTcD2uC1OqZWA625IHsWu0tvQFmbkfDju42e4qo8TUH6%2BYSt%2B7gB5kB3FKImt67AuwB%2B5W3htaOIEt4X8DYL9&X-Amz-Signature=b9acf3de4449d1a60f97b9473b1b2b2f28632c33036424b18bc894d5965139d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB6O5A%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDQr0wUzS%2BDBufGjidYxMSk2LVLVL4T8FjUAmwZJpwJowIgXOX57Sk6Fzv1cL1kIyRl5f7mDHDC76hEkh7k1WgwtlUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGObJXFaxcypRzlMZSrcAzpJWHk27OiVIU4lSKkotB17%2FJKcsb%2F3R2AUhEr%2FFbTS%2FO5RxI6lUYQ4i22WIvnCsH3clF1a%2BYvqCrTeQ8CzIKbm0phTscxXovwOQxW1z0gnE9AndZgnM6acGwhO%2FWMvYQkFDwh6aj6flQO9Yerf%2B59D9ueTH6kcuThHxpIr1Z8bXvb5rhGe9U1zphZHP%2FmpgCHLOR4ZUG6TW%2FLAdZG6R4eimEnHMyLDnO2A%2F2tkLoQEio7wRfQVUkiZ4cQqFdYvCSz0L7D5SuwVmAGltOm60J%2FHCy1shKICebPgq0h43ecggGMaRV95Nh24mxkMgAWL2l669eUIsOdwubn6j9OkUDA69csYr6e%2BF7kzW%2BMMoFye059sPgUGX203N7MfqX%2FJ6TxCOOjhaxiwpOIt2J%2FC1mlDZVsys8YUiTftLwm3ZFEyP0fxuSPDR8%2BsB0HzQBNnSW6Vm67xlkHU9bxiKgNb8WgHZIugS%2FOnhoWHUHdupq6Y6kLz8%2FbS2UhdoijUbAl41YfHTMJB6zYlUsv3RCmBe5zQ%2Bj6R5UeeHyOoboxysmUTCuE%2BnzlUb6lc67%2B4ycwm9Nufyx%2FN2X1NYN9pbWyo%2FH0DedjpVGIHQBeSxKSceVySQ4roH%2BERyRwScjZOMNWFusIGOqUBrlkBwrI1b4%2B6E7%2FZ1oYtZfh0ubO9K8Hk01FiwCSotkHDIyJPuQt%2BpCkq9hDZaugjAI7dgJX54YbM0yER5pRGL6isMQMjod0gPVLlBJFo1l1xwB%2BSB3sk4Umi3pYOHbsSO4AIo%2BRXTcD2uC1OqZWA625IHsWu0tvQFmbkfDju42e4qo8TUH6%2BYSt%2B7gB5kB3FKImt67AuwB%2B5W3htaOIEt4X8DYL9&X-Amz-Signature=2d36d071f72beab0d8ca29a7e2c2ec6932647e0dfc702e32712a9af8333e610c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB6O5A%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDQr0wUzS%2BDBufGjidYxMSk2LVLVL4T8FjUAmwZJpwJowIgXOX57Sk6Fzv1cL1kIyRl5f7mDHDC76hEkh7k1WgwtlUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGObJXFaxcypRzlMZSrcAzpJWHk27OiVIU4lSKkotB17%2FJKcsb%2F3R2AUhEr%2FFbTS%2FO5RxI6lUYQ4i22WIvnCsH3clF1a%2BYvqCrTeQ8CzIKbm0phTscxXovwOQxW1z0gnE9AndZgnM6acGwhO%2FWMvYQkFDwh6aj6flQO9Yerf%2B59D9ueTH6kcuThHxpIr1Z8bXvb5rhGe9U1zphZHP%2FmpgCHLOR4ZUG6TW%2FLAdZG6R4eimEnHMyLDnO2A%2F2tkLoQEio7wRfQVUkiZ4cQqFdYvCSz0L7D5SuwVmAGltOm60J%2FHCy1shKICebPgq0h43ecggGMaRV95Nh24mxkMgAWL2l669eUIsOdwubn6j9OkUDA69csYr6e%2BF7kzW%2BMMoFye059sPgUGX203N7MfqX%2FJ6TxCOOjhaxiwpOIt2J%2FC1mlDZVsys8YUiTftLwm3ZFEyP0fxuSPDR8%2BsB0HzQBNnSW6Vm67xlkHU9bxiKgNb8WgHZIugS%2FOnhoWHUHdupq6Y6kLz8%2FbS2UhdoijUbAl41YfHTMJB6zYlUsv3RCmBe5zQ%2Bj6R5UeeHyOoboxysmUTCuE%2BnzlUb6lc67%2B4ycwm9Nufyx%2FN2X1NYN9pbWyo%2FH0DedjpVGIHQBeSxKSceVySQ4roH%2BERyRwScjZOMNWFusIGOqUBrlkBwrI1b4%2B6E7%2FZ1oYtZfh0ubO9K8Hk01FiwCSotkHDIyJPuQt%2BpCkq9hDZaugjAI7dgJX54YbM0yER5pRGL6isMQMjod0gPVLlBJFo1l1xwB%2BSB3sk4Umi3pYOHbsSO4AIo%2BRXTcD2uC1OqZWA625IHsWu0tvQFmbkfDju42e4qo8TUH6%2BYSt%2B7gB5kB3FKImt67AuwB%2B5W3htaOIEt4X8DYL9&X-Amz-Signature=bd0c479267f95b63001c43f57a8ffacc856d2828716c8308928ad90661ade613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

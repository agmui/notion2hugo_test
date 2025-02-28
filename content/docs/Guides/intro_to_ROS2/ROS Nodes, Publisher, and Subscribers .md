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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQHUUH2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCX70x9ewZKvWki6MrciRpLBZ20Zrvc5xrKkOYLgI9uwgIhALMhFUPusm4uJWYAExCCdzpy1POuQNOHuxlwRNjsUgA1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BP3QwnHYU9pl5%2Buoq3AMpe6RD6wAHCw%2BGOzaAdygaUE72DJEmA%2Fw6%2BaiBWPf6h7BfAzVR%2FKTugbaINdnsDGTTa2keCYHzXl9Z58wkplmr2xvFrHSY0ywttCFcxGfbCPO%2F57pW1K56dRqSnODZkDZ2BFMFRTlb15fUhOVoSdSNo6BYZeWs9DvhnzxhNtLsvhZ5F209pwDFlFtA7LdVld5XI25NpaHjOVkSsfXhLRj4gpbsx8wQUSHRbaDQNSU%2FutbXD2Vx17bk3MwDkh7u4eWFouSjmCIk1s9e6OyWBX2boTFCdh3GVU%2BIfsZP2numEWAT8c4aybF%2FDgTCwSJrO%2BuxcT6jmKcds3n%2BjVNceNQIvmQi4pR2U5RawzN2xoNih4qtcW9NIOS9GMUZ1xQbGwJelB%2FmVbsKQdtaEap5smjH1C6qCcNjzgDw8HqhUC3afK7S9Ru7ffQTV76B4ZGS4EdIKkBi1ddt0WivnBNa9z5aBp2nY3%2BQO%2BnbyVv1FgsO2VIflQrnW4a%2Bct07HVI%2BmLwQr7TFrX1YwXYJ7Ko5l7wmOO3fzQnikzTYsfTDs1QuDYzExMGl6mRUAKAPFmXovGDoo3HFlJ4ScZPvwUnJBB5MwSWhGRJlx05biksoMmTDK5BR2B4GXatOalOVXDDBkIe%2BBjqkAUVwdBxQpP%2FFEX4zdBkRitJdFe02T1%2FC877SIbs6PpEtKJaGbJZb1T4dfTMNGRYpjPIhrV8QS8227Np77KmCpROUoymuL7NsCm7gM%2FtG46H5dqr0TBH7jvW6xmvg8C9oRpNW7CC59Ys1YHJ0yDJFStXq20G3IAywd3KejZMT6C75kexwlYW89%2FCncDmG6wZeeOFnaIiQucahHs3maFnbh2S8CGsK&X-Amz-Signature=d2db337007f877dad789e06b48db23539ba6f9b602c35be4cb5df91e472ba06c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQHUUH2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCX70x9ewZKvWki6MrciRpLBZ20Zrvc5xrKkOYLgI9uwgIhALMhFUPusm4uJWYAExCCdzpy1POuQNOHuxlwRNjsUgA1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BP3QwnHYU9pl5%2Buoq3AMpe6RD6wAHCw%2BGOzaAdygaUE72DJEmA%2Fw6%2BaiBWPf6h7BfAzVR%2FKTugbaINdnsDGTTa2keCYHzXl9Z58wkplmr2xvFrHSY0ywttCFcxGfbCPO%2F57pW1K56dRqSnODZkDZ2BFMFRTlb15fUhOVoSdSNo6BYZeWs9DvhnzxhNtLsvhZ5F209pwDFlFtA7LdVld5XI25NpaHjOVkSsfXhLRj4gpbsx8wQUSHRbaDQNSU%2FutbXD2Vx17bk3MwDkh7u4eWFouSjmCIk1s9e6OyWBX2boTFCdh3GVU%2BIfsZP2numEWAT8c4aybF%2FDgTCwSJrO%2BuxcT6jmKcds3n%2BjVNceNQIvmQi4pR2U5RawzN2xoNih4qtcW9NIOS9GMUZ1xQbGwJelB%2FmVbsKQdtaEap5smjH1C6qCcNjzgDw8HqhUC3afK7S9Ru7ffQTV76B4ZGS4EdIKkBi1ddt0WivnBNa9z5aBp2nY3%2BQO%2BnbyVv1FgsO2VIflQrnW4a%2Bct07HVI%2BmLwQr7TFrX1YwXYJ7Ko5l7wmOO3fzQnikzTYsfTDs1QuDYzExMGl6mRUAKAPFmXovGDoo3HFlJ4ScZPvwUnJBB5MwSWhGRJlx05biksoMmTDK5BR2B4GXatOalOVXDDBkIe%2BBjqkAUVwdBxQpP%2FFEX4zdBkRitJdFe02T1%2FC877SIbs6PpEtKJaGbJZb1T4dfTMNGRYpjPIhrV8QS8227Np77KmCpROUoymuL7NsCm7gM%2FtG46H5dqr0TBH7jvW6xmvg8C9oRpNW7CC59Ys1YHJ0yDJFStXq20G3IAywd3KejZMT6C75kexwlYW89%2FCncDmG6wZeeOFnaIiQucahHs3maFnbh2S8CGsK&X-Amz-Signature=e04e510ab9d744337e8ad4aed249fda1562ebe923a2a833c19b102773f6fc60d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQHUUH2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCX70x9ewZKvWki6MrciRpLBZ20Zrvc5xrKkOYLgI9uwgIhALMhFUPusm4uJWYAExCCdzpy1POuQNOHuxlwRNjsUgA1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BP3QwnHYU9pl5%2Buoq3AMpe6RD6wAHCw%2BGOzaAdygaUE72DJEmA%2Fw6%2BaiBWPf6h7BfAzVR%2FKTugbaINdnsDGTTa2keCYHzXl9Z58wkplmr2xvFrHSY0ywttCFcxGfbCPO%2F57pW1K56dRqSnODZkDZ2BFMFRTlb15fUhOVoSdSNo6BYZeWs9DvhnzxhNtLsvhZ5F209pwDFlFtA7LdVld5XI25NpaHjOVkSsfXhLRj4gpbsx8wQUSHRbaDQNSU%2FutbXD2Vx17bk3MwDkh7u4eWFouSjmCIk1s9e6OyWBX2boTFCdh3GVU%2BIfsZP2numEWAT8c4aybF%2FDgTCwSJrO%2BuxcT6jmKcds3n%2BjVNceNQIvmQi4pR2U5RawzN2xoNih4qtcW9NIOS9GMUZ1xQbGwJelB%2FmVbsKQdtaEap5smjH1C6qCcNjzgDw8HqhUC3afK7S9Ru7ffQTV76B4ZGS4EdIKkBi1ddt0WivnBNa9z5aBp2nY3%2BQO%2BnbyVv1FgsO2VIflQrnW4a%2Bct07HVI%2BmLwQr7TFrX1YwXYJ7Ko5l7wmOO3fzQnikzTYsfTDs1QuDYzExMGl6mRUAKAPFmXovGDoo3HFlJ4ScZPvwUnJBB5MwSWhGRJlx05biksoMmTDK5BR2B4GXatOalOVXDDBkIe%2BBjqkAUVwdBxQpP%2FFEX4zdBkRitJdFe02T1%2FC877SIbs6PpEtKJaGbJZb1T4dfTMNGRYpjPIhrV8QS8227Np77KmCpROUoymuL7NsCm7gM%2FtG46H5dqr0TBH7jvW6xmvg8C9oRpNW7CC59Ys1YHJ0yDJFStXq20G3IAywd3KejZMT6C75kexwlYW89%2FCncDmG6wZeeOFnaIiQucahHs3maFnbh2S8CGsK&X-Amz-Signature=e171bbc35bd0586f10aacc8f0283c33a39b1a7db9123e695da7fc6f962091900&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQHUUH2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCX70x9ewZKvWki6MrciRpLBZ20Zrvc5xrKkOYLgI9uwgIhALMhFUPusm4uJWYAExCCdzpy1POuQNOHuxlwRNjsUgA1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BP3QwnHYU9pl5%2Buoq3AMpe6RD6wAHCw%2BGOzaAdygaUE72DJEmA%2Fw6%2BaiBWPf6h7BfAzVR%2FKTugbaINdnsDGTTa2keCYHzXl9Z58wkplmr2xvFrHSY0ywttCFcxGfbCPO%2F57pW1K56dRqSnODZkDZ2BFMFRTlb15fUhOVoSdSNo6BYZeWs9DvhnzxhNtLsvhZ5F209pwDFlFtA7LdVld5XI25NpaHjOVkSsfXhLRj4gpbsx8wQUSHRbaDQNSU%2FutbXD2Vx17bk3MwDkh7u4eWFouSjmCIk1s9e6OyWBX2boTFCdh3GVU%2BIfsZP2numEWAT8c4aybF%2FDgTCwSJrO%2BuxcT6jmKcds3n%2BjVNceNQIvmQi4pR2U5RawzN2xoNih4qtcW9NIOS9GMUZ1xQbGwJelB%2FmVbsKQdtaEap5smjH1C6qCcNjzgDw8HqhUC3afK7S9Ru7ffQTV76B4ZGS4EdIKkBi1ddt0WivnBNa9z5aBp2nY3%2BQO%2BnbyVv1FgsO2VIflQrnW4a%2Bct07HVI%2BmLwQr7TFrX1YwXYJ7Ko5l7wmOO3fzQnikzTYsfTDs1QuDYzExMGl6mRUAKAPFmXovGDoo3HFlJ4ScZPvwUnJBB5MwSWhGRJlx05biksoMmTDK5BR2B4GXatOalOVXDDBkIe%2BBjqkAUVwdBxQpP%2FFEX4zdBkRitJdFe02T1%2FC877SIbs6PpEtKJaGbJZb1T4dfTMNGRYpjPIhrV8QS8227Np77KmCpROUoymuL7NsCm7gM%2FtG46H5dqr0TBH7jvW6xmvg8C9oRpNW7CC59Ys1YHJ0yDJFStXq20G3IAywd3KejZMT6C75kexwlYW89%2FCncDmG6wZeeOFnaIiQucahHs3maFnbh2S8CGsK&X-Amz-Signature=603e83a898d110b242907719730f91fb632b84b78d1f9b88f2da99fa4b9d8d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQHUUH2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCX70x9ewZKvWki6MrciRpLBZ20Zrvc5xrKkOYLgI9uwgIhALMhFUPusm4uJWYAExCCdzpy1POuQNOHuxlwRNjsUgA1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BP3QwnHYU9pl5%2Buoq3AMpe6RD6wAHCw%2BGOzaAdygaUE72DJEmA%2Fw6%2BaiBWPf6h7BfAzVR%2FKTugbaINdnsDGTTa2keCYHzXl9Z58wkplmr2xvFrHSY0ywttCFcxGfbCPO%2F57pW1K56dRqSnODZkDZ2BFMFRTlb15fUhOVoSdSNo6BYZeWs9DvhnzxhNtLsvhZ5F209pwDFlFtA7LdVld5XI25NpaHjOVkSsfXhLRj4gpbsx8wQUSHRbaDQNSU%2FutbXD2Vx17bk3MwDkh7u4eWFouSjmCIk1s9e6OyWBX2boTFCdh3GVU%2BIfsZP2numEWAT8c4aybF%2FDgTCwSJrO%2BuxcT6jmKcds3n%2BjVNceNQIvmQi4pR2U5RawzN2xoNih4qtcW9NIOS9GMUZ1xQbGwJelB%2FmVbsKQdtaEap5smjH1C6qCcNjzgDw8HqhUC3afK7S9Ru7ffQTV76B4ZGS4EdIKkBi1ddt0WivnBNa9z5aBp2nY3%2BQO%2BnbyVv1FgsO2VIflQrnW4a%2Bct07HVI%2BmLwQr7TFrX1YwXYJ7Ko5l7wmOO3fzQnikzTYsfTDs1QuDYzExMGl6mRUAKAPFmXovGDoo3HFlJ4ScZPvwUnJBB5MwSWhGRJlx05biksoMmTDK5BR2B4GXatOalOVXDDBkIe%2BBjqkAUVwdBxQpP%2FFEX4zdBkRitJdFe02T1%2FC877SIbs6PpEtKJaGbJZb1T4dfTMNGRYpjPIhrV8QS8227Np77KmCpROUoymuL7NsCm7gM%2FtG46H5dqr0TBH7jvW6xmvg8C9oRpNW7CC59Ys1YHJ0yDJFStXq20G3IAywd3KejZMT6C75kexwlYW89%2FCncDmG6wZeeOFnaIiQucahHs3maFnbh2S8CGsK&X-Amz-Signature=91587f3570f0031434d0cdaab56c93a36947b171ab20f4f11417a7b8ff532b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQHUUH2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCX70x9ewZKvWki6MrciRpLBZ20Zrvc5xrKkOYLgI9uwgIhALMhFUPusm4uJWYAExCCdzpy1POuQNOHuxlwRNjsUgA1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BP3QwnHYU9pl5%2Buoq3AMpe6RD6wAHCw%2BGOzaAdygaUE72DJEmA%2Fw6%2BaiBWPf6h7BfAzVR%2FKTugbaINdnsDGTTa2keCYHzXl9Z58wkplmr2xvFrHSY0ywttCFcxGfbCPO%2F57pW1K56dRqSnODZkDZ2BFMFRTlb15fUhOVoSdSNo6BYZeWs9DvhnzxhNtLsvhZ5F209pwDFlFtA7LdVld5XI25NpaHjOVkSsfXhLRj4gpbsx8wQUSHRbaDQNSU%2FutbXD2Vx17bk3MwDkh7u4eWFouSjmCIk1s9e6OyWBX2boTFCdh3GVU%2BIfsZP2numEWAT8c4aybF%2FDgTCwSJrO%2BuxcT6jmKcds3n%2BjVNceNQIvmQi4pR2U5RawzN2xoNih4qtcW9NIOS9GMUZ1xQbGwJelB%2FmVbsKQdtaEap5smjH1C6qCcNjzgDw8HqhUC3afK7S9Ru7ffQTV76B4ZGS4EdIKkBi1ddt0WivnBNa9z5aBp2nY3%2BQO%2BnbyVv1FgsO2VIflQrnW4a%2Bct07HVI%2BmLwQr7TFrX1YwXYJ7Ko5l7wmOO3fzQnikzTYsfTDs1QuDYzExMGl6mRUAKAPFmXovGDoo3HFlJ4ScZPvwUnJBB5MwSWhGRJlx05biksoMmTDK5BR2B4GXatOalOVXDDBkIe%2BBjqkAUVwdBxQpP%2FFEX4zdBkRitJdFe02T1%2FC877SIbs6PpEtKJaGbJZb1T4dfTMNGRYpjPIhrV8QS8227Np77KmCpROUoymuL7NsCm7gM%2FtG46H5dqr0TBH7jvW6xmvg8C9oRpNW7CC59Ys1YHJ0yDJFStXq20G3IAywd3KejZMT6C75kexwlYW89%2FCncDmG6wZeeOFnaIiQucahHs3maFnbh2S8CGsK&X-Amz-Signature=1964f0a3e9787ca1748f2e7b6b05e4aea42a10cf6ad01c464ecb040cb5d0bcfa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQHUUH2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCX70x9ewZKvWki6MrciRpLBZ20Zrvc5xrKkOYLgI9uwgIhALMhFUPusm4uJWYAExCCdzpy1POuQNOHuxlwRNjsUgA1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BP3QwnHYU9pl5%2Buoq3AMpe6RD6wAHCw%2BGOzaAdygaUE72DJEmA%2Fw6%2BaiBWPf6h7BfAzVR%2FKTugbaINdnsDGTTa2keCYHzXl9Z58wkplmr2xvFrHSY0ywttCFcxGfbCPO%2F57pW1K56dRqSnODZkDZ2BFMFRTlb15fUhOVoSdSNo6BYZeWs9DvhnzxhNtLsvhZ5F209pwDFlFtA7LdVld5XI25NpaHjOVkSsfXhLRj4gpbsx8wQUSHRbaDQNSU%2FutbXD2Vx17bk3MwDkh7u4eWFouSjmCIk1s9e6OyWBX2boTFCdh3GVU%2BIfsZP2numEWAT8c4aybF%2FDgTCwSJrO%2BuxcT6jmKcds3n%2BjVNceNQIvmQi4pR2U5RawzN2xoNih4qtcW9NIOS9GMUZ1xQbGwJelB%2FmVbsKQdtaEap5smjH1C6qCcNjzgDw8HqhUC3afK7S9Ru7ffQTV76B4ZGS4EdIKkBi1ddt0WivnBNa9z5aBp2nY3%2BQO%2BnbyVv1FgsO2VIflQrnW4a%2Bct07HVI%2BmLwQr7TFrX1YwXYJ7Ko5l7wmOO3fzQnikzTYsfTDs1QuDYzExMGl6mRUAKAPFmXovGDoo3HFlJ4ScZPvwUnJBB5MwSWhGRJlx05biksoMmTDK5BR2B4GXatOalOVXDDBkIe%2BBjqkAUVwdBxQpP%2FFEX4zdBkRitJdFe02T1%2FC877SIbs6PpEtKJaGbJZb1T4dfTMNGRYpjPIhrV8QS8227Np77KmCpROUoymuL7NsCm7gM%2FtG46H5dqr0TBH7jvW6xmvg8C9oRpNW7CC59Ys1YHJ0yDJFStXq20G3IAywd3KejZMT6C75kexwlYW89%2FCncDmG6wZeeOFnaIiQucahHs3maFnbh2S8CGsK&X-Amz-Signature=3c45a45bdc742b1311f88d60795bd43d6da1e96a1ec495ab8797c2d5261b5630&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQHUUH2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCX70x9ewZKvWki6MrciRpLBZ20Zrvc5xrKkOYLgI9uwgIhALMhFUPusm4uJWYAExCCdzpy1POuQNOHuxlwRNjsUgA1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BP3QwnHYU9pl5%2Buoq3AMpe6RD6wAHCw%2BGOzaAdygaUE72DJEmA%2Fw6%2BaiBWPf6h7BfAzVR%2FKTugbaINdnsDGTTa2keCYHzXl9Z58wkplmr2xvFrHSY0ywttCFcxGfbCPO%2F57pW1K56dRqSnODZkDZ2BFMFRTlb15fUhOVoSdSNo6BYZeWs9DvhnzxhNtLsvhZ5F209pwDFlFtA7LdVld5XI25NpaHjOVkSsfXhLRj4gpbsx8wQUSHRbaDQNSU%2FutbXD2Vx17bk3MwDkh7u4eWFouSjmCIk1s9e6OyWBX2boTFCdh3GVU%2BIfsZP2numEWAT8c4aybF%2FDgTCwSJrO%2BuxcT6jmKcds3n%2BjVNceNQIvmQi4pR2U5RawzN2xoNih4qtcW9NIOS9GMUZ1xQbGwJelB%2FmVbsKQdtaEap5smjH1C6qCcNjzgDw8HqhUC3afK7S9Ru7ffQTV76B4ZGS4EdIKkBi1ddt0WivnBNa9z5aBp2nY3%2BQO%2BnbyVv1FgsO2VIflQrnW4a%2Bct07HVI%2BmLwQr7TFrX1YwXYJ7Ko5l7wmOO3fzQnikzTYsfTDs1QuDYzExMGl6mRUAKAPFmXovGDoo3HFlJ4ScZPvwUnJBB5MwSWhGRJlx05biksoMmTDK5BR2B4GXatOalOVXDDBkIe%2BBjqkAUVwdBxQpP%2FFEX4zdBkRitJdFe02T1%2FC877SIbs6PpEtKJaGbJZb1T4dfTMNGRYpjPIhrV8QS8227Np77KmCpROUoymuL7NsCm7gM%2FtG46H5dqr0TBH7jvW6xmvg8C9oRpNW7CC59Ys1YHJ0yDJFStXq20G3IAywd3KejZMT6C75kexwlYW89%2FCncDmG6wZeeOFnaIiQucahHs3maFnbh2S8CGsK&X-Amz-Signature=4b2e48748cdf57b5e50c3f9dc58696b3233a88652deed79369a15d9f53802672&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54KGO5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDngHGzt%2Bm8jOlwO4Wi9Lu%2BsM5F0%2FfI4BIrbpTtG6dBiQIgQfQPkAtNuZbaxHUGSlvi%2FokCbExRITbQAYvMGvFCiyIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDINWaLMqNCeDo3TJPyrcA%2BdkfRamltGBIQPSeaJP%2FE5XKLnyyMF%2BZWsw9yHkVfzqyQZCHZLQhY3t5m7PYaHqyOjdhHSMjqWWLRwVR3QuzQX867ANEXxMNwdNweMxRu%2BOO%2FBIX%2F86sVujr0Xw7TUUem5QJrsk8tj3Ny73yRRAYN2e8SaaT4qGUT9CPPagYf1cDDsFDt0l1dRtkJ6tkSZYcV1jsbz52LJ6iyTAl%2BKhUAwyeMDt9WmVFaL5bOFXQEsQJPJMnnRNjTg012GwWAx4J4wD0eq%2Bo34sSPo8PdvI8I8s3OKmRMpYJZdKWONOBrQRl5m%2FvUuU5BfKEbGSdEz80eL2gtPmEu%2BpF2tz0mgpruDegFn%2BvO98ogsuu60gtgOnbCmUALGnRmUkfuGswleFL1cAfyu6DHonKOh43x7Qs3lhTgNMzWvozT9Y2dY4C2jd9dInsaik5C5wlvvgQF0NDDpP%2Ba%2B6BSa1fW7cbgyw42YaDKiIY9ZjdjWUIUZismYDu%2ByB5SkfpUor8BJBiKDbNiApWJVEj6qoj5svyTiCxwAua0g45vu%2F%2FrJcozvlnzI%2F4YDXt2S%2FeDf78%2FjGXllwVR0DUYXqg9KlC%2FCfIXNo1fHot95qH1XvL9FNOL5a8LnC5V4IkkNJ6dLVp%2BgxMMak1cMGOqUBJrbcI4AVqRFE%2BSbrE3EPBW9f0Za%2BYJEP%2BXDORuBAsjtMPBsaZ9FmWD2LsrvzAfSZFt0teRLVbu68NH5SAbHSioiAO%2BLRCT292z5m3yFJC%2BuoPTLFti6gZmC2EYE5MLmo2hkbrdmQVNSGfRVFxloeekxUGyzce60B5QpGP7hDUVjg%2FK2X%2FvH4G6y%2BirKAvheDxNIG2IeixULy41vs8rZRWLPSrwFU&X-Amz-Signature=2260bae811fe04043ff49197cc9f511116c149ce064bbad8939d5451000a2d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54KGO5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDngHGzt%2Bm8jOlwO4Wi9Lu%2BsM5F0%2FfI4BIrbpTtG6dBiQIgQfQPkAtNuZbaxHUGSlvi%2FokCbExRITbQAYvMGvFCiyIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDINWaLMqNCeDo3TJPyrcA%2BdkfRamltGBIQPSeaJP%2FE5XKLnyyMF%2BZWsw9yHkVfzqyQZCHZLQhY3t5m7PYaHqyOjdhHSMjqWWLRwVR3QuzQX867ANEXxMNwdNweMxRu%2BOO%2FBIX%2F86sVujr0Xw7TUUem5QJrsk8tj3Ny73yRRAYN2e8SaaT4qGUT9CPPagYf1cDDsFDt0l1dRtkJ6tkSZYcV1jsbz52LJ6iyTAl%2BKhUAwyeMDt9WmVFaL5bOFXQEsQJPJMnnRNjTg012GwWAx4J4wD0eq%2Bo34sSPo8PdvI8I8s3OKmRMpYJZdKWONOBrQRl5m%2FvUuU5BfKEbGSdEz80eL2gtPmEu%2BpF2tz0mgpruDegFn%2BvO98ogsuu60gtgOnbCmUALGnRmUkfuGswleFL1cAfyu6DHonKOh43x7Qs3lhTgNMzWvozT9Y2dY4C2jd9dInsaik5C5wlvvgQF0NDDpP%2Ba%2B6BSa1fW7cbgyw42YaDKiIY9ZjdjWUIUZismYDu%2ByB5SkfpUor8BJBiKDbNiApWJVEj6qoj5svyTiCxwAua0g45vu%2F%2FrJcozvlnzI%2F4YDXt2S%2FeDf78%2FjGXllwVR0DUYXqg9KlC%2FCfIXNo1fHot95qH1XvL9FNOL5a8LnC5V4IkkNJ6dLVp%2BgxMMak1cMGOqUBJrbcI4AVqRFE%2BSbrE3EPBW9f0Za%2BYJEP%2BXDORuBAsjtMPBsaZ9FmWD2LsrvzAfSZFt0teRLVbu68NH5SAbHSioiAO%2BLRCT292z5m3yFJC%2BuoPTLFti6gZmC2EYE5MLmo2hkbrdmQVNSGfRVFxloeekxUGyzce60B5QpGP7hDUVjg%2FK2X%2FvH4G6y%2BirKAvheDxNIG2IeixULy41vs8rZRWLPSrwFU&X-Amz-Signature=2d44c7993131c45b5816fc320304bd01eb2b14dc1620e53f9d075c444340d429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54KGO5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDngHGzt%2Bm8jOlwO4Wi9Lu%2BsM5F0%2FfI4BIrbpTtG6dBiQIgQfQPkAtNuZbaxHUGSlvi%2FokCbExRITbQAYvMGvFCiyIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDINWaLMqNCeDo3TJPyrcA%2BdkfRamltGBIQPSeaJP%2FE5XKLnyyMF%2BZWsw9yHkVfzqyQZCHZLQhY3t5m7PYaHqyOjdhHSMjqWWLRwVR3QuzQX867ANEXxMNwdNweMxRu%2BOO%2FBIX%2F86sVujr0Xw7TUUem5QJrsk8tj3Ny73yRRAYN2e8SaaT4qGUT9CPPagYf1cDDsFDt0l1dRtkJ6tkSZYcV1jsbz52LJ6iyTAl%2BKhUAwyeMDt9WmVFaL5bOFXQEsQJPJMnnRNjTg012GwWAx4J4wD0eq%2Bo34sSPo8PdvI8I8s3OKmRMpYJZdKWONOBrQRl5m%2FvUuU5BfKEbGSdEz80eL2gtPmEu%2BpF2tz0mgpruDegFn%2BvO98ogsuu60gtgOnbCmUALGnRmUkfuGswleFL1cAfyu6DHonKOh43x7Qs3lhTgNMzWvozT9Y2dY4C2jd9dInsaik5C5wlvvgQF0NDDpP%2Ba%2B6BSa1fW7cbgyw42YaDKiIY9ZjdjWUIUZismYDu%2ByB5SkfpUor8BJBiKDbNiApWJVEj6qoj5svyTiCxwAua0g45vu%2F%2FrJcozvlnzI%2F4YDXt2S%2FeDf78%2FjGXllwVR0DUYXqg9KlC%2FCfIXNo1fHot95qH1XvL9FNOL5a8LnC5V4IkkNJ6dLVp%2BgxMMak1cMGOqUBJrbcI4AVqRFE%2BSbrE3EPBW9f0Za%2BYJEP%2BXDORuBAsjtMPBsaZ9FmWD2LsrvzAfSZFt0teRLVbu68NH5SAbHSioiAO%2BLRCT292z5m3yFJC%2BuoPTLFti6gZmC2EYE5MLmo2hkbrdmQVNSGfRVFxloeekxUGyzce60B5QpGP7hDUVjg%2FK2X%2FvH4G6y%2BirKAvheDxNIG2IeixULy41vs8rZRWLPSrwFU&X-Amz-Signature=462565ad6a2b1abd0d63c5510e0fc91cbfef296801e69a3e1c64f1323900b688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54KGO5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDngHGzt%2Bm8jOlwO4Wi9Lu%2BsM5F0%2FfI4BIrbpTtG6dBiQIgQfQPkAtNuZbaxHUGSlvi%2FokCbExRITbQAYvMGvFCiyIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDINWaLMqNCeDo3TJPyrcA%2BdkfRamltGBIQPSeaJP%2FE5XKLnyyMF%2BZWsw9yHkVfzqyQZCHZLQhY3t5m7PYaHqyOjdhHSMjqWWLRwVR3QuzQX867ANEXxMNwdNweMxRu%2BOO%2FBIX%2F86sVujr0Xw7TUUem5QJrsk8tj3Ny73yRRAYN2e8SaaT4qGUT9CPPagYf1cDDsFDt0l1dRtkJ6tkSZYcV1jsbz52LJ6iyTAl%2BKhUAwyeMDt9WmVFaL5bOFXQEsQJPJMnnRNjTg012GwWAx4J4wD0eq%2Bo34sSPo8PdvI8I8s3OKmRMpYJZdKWONOBrQRl5m%2FvUuU5BfKEbGSdEz80eL2gtPmEu%2BpF2tz0mgpruDegFn%2BvO98ogsuu60gtgOnbCmUALGnRmUkfuGswleFL1cAfyu6DHonKOh43x7Qs3lhTgNMzWvozT9Y2dY4C2jd9dInsaik5C5wlvvgQF0NDDpP%2Ba%2B6BSa1fW7cbgyw42YaDKiIY9ZjdjWUIUZismYDu%2ByB5SkfpUor8BJBiKDbNiApWJVEj6qoj5svyTiCxwAua0g45vu%2F%2FrJcozvlnzI%2F4YDXt2S%2FeDf78%2FjGXllwVR0DUYXqg9KlC%2FCfIXNo1fHot95qH1XvL9FNOL5a8LnC5V4IkkNJ6dLVp%2BgxMMak1cMGOqUBJrbcI4AVqRFE%2BSbrE3EPBW9f0Za%2BYJEP%2BXDORuBAsjtMPBsaZ9FmWD2LsrvzAfSZFt0teRLVbu68NH5SAbHSioiAO%2BLRCT292z5m3yFJC%2BuoPTLFti6gZmC2EYE5MLmo2hkbrdmQVNSGfRVFxloeekxUGyzce60B5QpGP7hDUVjg%2FK2X%2FvH4G6y%2BirKAvheDxNIG2IeixULy41vs8rZRWLPSrwFU&X-Amz-Signature=a88f67b2aa0b71a74103050337779d4aa0f705122673b39620b4154b22988fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54KGO5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDngHGzt%2Bm8jOlwO4Wi9Lu%2BsM5F0%2FfI4BIrbpTtG6dBiQIgQfQPkAtNuZbaxHUGSlvi%2FokCbExRITbQAYvMGvFCiyIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDINWaLMqNCeDo3TJPyrcA%2BdkfRamltGBIQPSeaJP%2FE5XKLnyyMF%2BZWsw9yHkVfzqyQZCHZLQhY3t5m7PYaHqyOjdhHSMjqWWLRwVR3QuzQX867ANEXxMNwdNweMxRu%2BOO%2FBIX%2F86sVujr0Xw7TUUem5QJrsk8tj3Ny73yRRAYN2e8SaaT4qGUT9CPPagYf1cDDsFDt0l1dRtkJ6tkSZYcV1jsbz52LJ6iyTAl%2BKhUAwyeMDt9WmVFaL5bOFXQEsQJPJMnnRNjTg012GwWAx4J4wD0eq%2Bo34sSPo8PdvI8I8s3OKmRMpYJZdKWONOBrQRl5m%2FvUuU5BfKEbGSdEz80eL2gtPmEu%2BpF2tz0mgpruDegFn%2BvO98ogsuu60gtgOnbCmUALGnRmUkfuGswleFL1cAfyu6DHonKOh43x7Qs3lhTgNMzWvozT9Y2dY4C2jd9dInsaik5C5wlvvgQF0NDDpP%2Ba%2B6BSa1fW7cbgyw42YaDKiIY9ZjdjWUIUZismYDu%2ByB5SkfpUor8BJBiKDbNiApWJVEj6qoj5svyTiCxwAua0g45vu%2F%2FrJcozvlnzI%2F4YDXt2S%2FeDf78%2FjGXllwVR0DUYXqg9KlC%2FCfIXNo1fHot95qH1XvL9FNOL5a8LnC5V4IkkNJ6dLVp%2BgxMMak1cMGOqUBJrbcI4AVqRFE%2BSbrE3EPBW9f0Za%2BYJEP%2BXDORuBAsjtMPBsaZ9FmWD2LsrvzAfSZFt0teRLVbu68NH5SAbHSioiAO%2BLRCT292z5m3yFJC%2BuoPTLFti6gZmC2EYE5MLmo2hkbrdmQVNSGfRVFxloeekxUGyzce60B5QpGP7hDUVjg%2FK2X%2FvH4G6y%2BirKAvheDxNIG2IeixULy41vs8rZRWLPSrwFU&X-Amz-Signature=7c8f82e95d5fa0c56c0fbc848e31ffce6ef31dc822022bfeed55f0143e5099e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54KGO5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDngHGzt%2Bm8jOlwO4Wi9Lu%2BsM5F0%2FfI4BIrbpTtG6dBiQIgQfQPkAtNuZbaxHUGSlvi%2FokCbExRITbQAYvMGvFCiyIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDINWaLMqNCeDo3TJPyrcA%2BdkfRamltGBIQPSeaJP%2FE5XKLnyyMF%2BZWsw9yHkVfzqyQZCHZLQhY3t5m7PYaHqyOjdhHSMjqWWLRwVR3QuzQX867ANEXxMNwdNweMxRu%2BOO%2FBIX%2F86sVujr0Xw7TUUem5QJrsk8tj3Ny73yRRAYN2e8SaaT4qGUT9CPPagYf1cDDsFDt0l1dRtkJ6tkSZYcV1jsbz52LJ6iyTAl%2BKhUAwyeMDt9WmVFaL5bOFXQEsQJPJMnnRNjTg012GwWAx4J4wD0eq%2Bo34sSPo8PdvI8I8s3OKmRMpYJZdKWONOBrQRl5m%2FvUuU5BfKEbGSdEz80eL2gtPmEu%2BpF2tz0mgpruDegFn%2BvO98ogsuu60gtgOnbCmUALGnRmUkfuGswleFL1cAfyu6DHonKOh43x7Qs3lhTgNMzWvozT9Y2dY4C2jd9dInsaik5C5wlvvgQF0NDDpP%2Ba%2B6BSa1fW7cbgyw42YaDKiIY9ZjdjWUIUZismYDu%2ByB5SkfpUor8BJBiKDbNiApWJVEj6qoj5svyTiCxwAua0g45vu%2F%2FrJcozvlnzI%2F4YDXt2S%2FeDf78%2FjGXllwVR0DUYXqg9KlC%2FCfIXNo1fHot95qH1XvL9FNOL5a8LnC5V4IkkNJ6dLVp%2BgxMMak1cMGOqUBJrbcI4AVqRFE%2BSbrE3EPBW9f0Za%2BYJEP%2BXDORuBAsjtMPBsaZ9FmWD2LsrvzAfSZFt0teRLVbu68NH5SAbHSioiAO%2BLRCT292z5m3yFJC%2BuoPTLFti6gZmC2EYE5MLmo2hkbrdmQVNSGfRVFxloeekxUGyzce60B5QpGP7hDUVjg%2FK2X%2FvH4G6y%2BirKAvheDxNIG2IeixULy41vs8rZRWLPSrwFU&X-Amz-Signature=1bff30b7c120b4d91055938fc4bc99223fe9b734efe96f31c0145ff2694c687b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54KGO5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDngHGzt%2Bm8jOlwO4Wi9Lu%2BsM5F0%2FfI4BIrbpTtG6dBiQIgQfQPkAtNuZbaxHUGSlvi%2FokCbExRITbQAYvMGvFCiyIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDINWaLMqNCeDo3TJPyrcA%2BdkfRamltGBIQPSeaJP%2FE5XKLnyyMF%2BZWsw9yHkVfzqyQZCHZLQhY3t5m7PYaHqyOjdhHSMjqWWLRwVR3QuzQX867ANEXxMNwdNweMxRu%2BOO%2FBIX%2F86sVujr0Xw7TUUem5QJrsk8tj3Ny73yRRAYN2e8SaaT4qGUT9CPPagYf1cDDsFDt0l1dRtkJ6tkSZYcV1jsbz52LJ6iyTAl%2BKhUAwyeMDt9WmVFaL5bOFXQEsQJPJMnnRNjTg012GwWAx4J4wD0eq%2Bo34sSPo8PdvI8I8s3OKmRMpYJZdKWONOBrQRl5m%2FvUuU5BfKEbGSdEz80eL2gtPmEu%2BpF2tz0mgpruDegFn%2BvO98ogsuu60gtgOnbCmUALGnRmUkfuGswleFL1cAfyu6DHonKOh43x7Qs3lhTgNMzWvozT9Y2dY4C2jd9dInsaik5C5wlvvgQF0NDDpP%2Ba%2B6BSa1fW7cbgyw42YaDKiIY9ZjdjWUIUZismYDu%2ByB5SkfpUor8BJBiKDbNiApWJVEj6qoj5svyTiCxwAua0g45vu%2F%2FrJcozvlnzI%2F4YDXt2S%2FeDf78%2FjGXllwVR0DUYXqg9KlC%2FCfIXNo1fHot95qH1XvL9FNOL5a8LnC5V4IkkNJ6dLVp%2BgxMMak1cMGOqUBJrbcI4AVqRFE%2BSbrE3EPBW9f0Za%2BYJEP%2BXDORuBAsjtMPBsaZ9FmWD2LsrvzAfSZFt0teRLVbu68NH5SAbHSioiAO%2BLRCT292z5m3yFJC%2BuoPTLFti6gZmC2EYE5MLmo2hkbrdmQVNSGfRVFxloeekxUGyzce60B5QpGP7hDUVjg%2FK2X%2FvH4G6y%2BirKAvheDxNIG2IeixULy41vs8rZRWLPSrwFU&X-Amz-Signature=d3938b00df96a006cfbf5ab2b95dd1bcae28470b74d346e78648dcda07b28416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54KGO5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDngHGzt%2Bm8jOlwO4Wi9Lu%2BsM5F0%2FfI4BIrbpTtG6dBiQIgQfQPkAtNuZbaxHUGSlvi%2FokCbExRITbQAYvMGvFCiyIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDINWaLMqNCeDo3TJPyrcA%2BdkfRamltGBIQPSeaJP%2FE5XKLnyyMF%2BZWsw9yHkVfzqyQZCHZLQhY3t5m7PYaHqyOjdhHSMjqWWLRwVR3QuzQX867ANEXxMNwdNweMxRu%2BOO%2FBIX%2F86sVujr0Xw7TUUem5QJrsk8tj3Ny73yRRAYN2e8SaaT4qGUT9CPPagYf1cDDsFDt0l1dRtkJ6tkSZYcV1jsbz52LJ6iyTAl%2BKhUAwyeMDt9WmVFaL5bOFXQEsQJPJMnnRNjTg012GwWAx4J4wD0eq%2Bo34sSPo8PdvI8I8s3OKmRMpYJZdKWONOBrQRl5m%2FvUuU5BfKEbGSdEz80eL2gtPmEu%2BpF2tz0mgpruDegFn%2BvO98ogsuu60gtgOnbCmUALGnRmUkfuGswleFL1cAfyu6DHonKOh43x7Qs3lhTgNMzWvozT9Y2dY4C2jd9dInsaik5C5wlvvgQF0NDDpP%2Ba%2B6BSa1fW7cbgyw42YaDKiIY9ZjdjWUIUZismYDu%2ByB5SkfpUor8BJBiKDbNiApWJVEj6qoj5svyTiCxwAua0g45vu%2F%2FrJcozvlnzI%2F4YDXt2S%2FeDf78%2FjGXllwVR0DUYXqg9KlC%2FCfIXNo1fHot95qH1XvL9FNOL5a8LnC5V4IkkNJ6dLVp%2BgxMMak1cMGOqUBJrbcI4AVqRFE%2BSbrE3EPBW9f0Za%2BYJEP%2BXDORuBAsjtMPBsaZ9FmWD2LsrvzAfSZFt0teRLVbu68NH5SAbHSioiAO%2BLRCT292z5m3yFJC%2BuoPTLFti6gZmC2EYE5MLmo2hkbrdmQVNSGfRVFxloeekxUGyzce60B5QpGP7hDUVjg%2FK2X%2FvH4G6y%2BirKAvheDxNIG2IeixULy41vs8rZRWLPSrwFU&X-Amz-Signature=cb3aed978ddd4cd0d079dc45c12e28116b4f29dc8e48125917334d6f512b9d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

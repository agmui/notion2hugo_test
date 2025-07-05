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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NIY6LLF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFCgs3uAyyBtj1fR9zSIr5KHFIfCymXnUo7V7XnjxUjoAiEAslqWOi3iul1JhSMaPk42xRbbfP3m0yLp5nd2aJYhYOQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL1m2W0ouYA99EIr%2FyrcA2Xvz4B2X%2Fk34KEHcVxlKtctraxXkAUYdARHs5QcV0J%2FEwyrR0tg8whxypuco0w3yZ5w7Ktpf6HfSMFODgKHP7zINi5bscUfFpjEB2zVg3v3J0aqQEAUf4E2LUvVouuQmcJPOMQSFjcZ9sh6wVeDX1GfthZJOcg4Y7jzqfywUcrQ4Ex0XcmF44siIG1xQtUYBul%2FI%2F9%2F%2F53sxpBgmAZJW89hUJjWSD4qLcuAT3%2Bct0LjzKeN1HVykjBw3mBJ9usqW%2BxBpk1Gv6Gs6zqQ9tOsA5tADgrq7%2FLNxatiw304YuJt9kan3tARBXqqNcmvkoGgsC2ELkrvvxaOnVdzgglgVju40YqG5%2FkEE0bgS3LDO02K56OCfWjvWyQnpwQOza6cmwDnJNZbJ4%2FDosqAXvKlRF1CzS3Hy6jPqgB244xbDKZ6m0IIwmDvIHxOH%2FBkzBTOXpDeQqVN1PaXoSlg%2Bzt3tkPG1wFe%2BLQV0UhQDH4fjxnyEzdx1H7qvYolXypP2CIttOgnyT7Z2PDDyrN%2Fb2LZezdsx1JDFZhalkAiYMWQEMkt29cU7FHl9x4vSpMG442M2ZfiP4tKkp%2FybduUYYbhSmFxW4BecVkMzHrUJ6h2MEMIKG87Mq0rc8Z6k%2BxXMJHBpMMGOqUBkgme9r0Yfd4g91CL%2FUyzCdLiPnCxPs8Lf34WUWiRAU0vA3GIf9%2Bakqrv0wOVt4DeOBsciheEDIH2jvPO2VyEKQQ%2BuvUknz9NBAglgDN6eM01zqwwv1iNOcwtCwf8Aq3%2B6HfuT9Qrfu3Q%2Fr%2BcslTIrKE1t5lJkALq2dOe6tZSBeiLMIIDG6qa3QpEQhYhUp1ZQ74BJKSnxhYuHRgy56ZrTs2uV0s3&X-Amz-Signature=619baf265bc380859b376b5ef3e2230b1df4b0ad56b2b35a7bead187423cca84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NIY6LLF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFCgs3uAyyBtj1fR9zSIr5KHFIfCymXnUo7V7XnjxUjoAiEAslqWOi3iul1JhSMaPk42xRbbfP3m0yLp5nd2aJYhYOQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL1m2W0ouYA99EIr%2FyrcA2Xvz4B2X%2Fk34KEHcVxlKtctraxXkAUYdARHs5QcV0J%2FEwyrR0tg8whxypuco0w3yZ5w7Ktpf6HfSMFODgKHP7zINi5bscUfFpjEB2zVg3v3J0aqQEAUf4E2LUvVouuQmcJPOMQSFjcZ9sh6wVeDX1GfthZJOcg4Y7jzqfywUcrQ4Ex0XcmF44siIG1xQtUYBul%2FI%2F9%2F%2F53sxpBgmAZJW89hUJjWSD4qLcuAT3%2Bct0LjzKeN1HVykjBw3mBJ9usqW%2BxBpk1Gv6Gs6zqQ9tOsA5tADgrq7%2FLNxatiw304YuJt9kan3tARBXqqNcmvkoGgsC2ELkrvvxaOnVdzgglgVju40YqG5%2FkEE0bgS3LDO02K56OCfWjvWyQnpwQOza6cmwDnJNZbJ4%2FDosqAXvKlRF1CzS3Hy6jPqgB244xbDKZ6m0IIwmDvIHxOH%2FBkzBTOXpDeQqVN1PaXoSlg%2Bzt3tkPG1wFe%2BLQV0UhQDH4fjxnyEzdx1H7qvYolXypP2CIttOgnyT7Z2PDDyrN%2Fb2LZezdsx1JDFZhalkAiYMWQEMkt29cU7FHl9x4vSpMG442M2ZfiP4tKkp%2FybduUYYbhSmFxW4BecVkMzHrUJ6h2MEMIKG87Mq0rc8Z6k%2BxXMJHBpMMGOqUBkgme9r0Yfd4g91CL%2FUyzCdLiPnCxPs8Lf34WUWiRAU0vA3GIf9%2Bakqrv0wOVt4DeOBsciheEDIH2jvPO2VyEKQQ%2BuvUknz9NBAglgDN6eM01zqwwv1iNOcwtCwf8Aq3%2B6HfuT9Qrfu3Q%2Fr%2BcslTIrKE1t5lJkALq2dOe6tZSBeiLMIIDG6qa3QpEQhYhUp1ZQ74BJKSnxhYuHRgy56ZrTs2uV0s3&X-Amz-Signature=3dc8ef1783964e507c9c31c1f31cd5866c01b990754010c25e0e4641aa76c673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NIY6LLF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFCgs3uAyyBtj1fR9zSIr5KHFIfCymXnUo7V7XnjxUjoAiEAslqWOi3iul1JhSMaPk42xRbbfP3m0yLp5nd2aJYhYOQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL1m2W0ouYA99EIr%2FyrcA2Xvz4B2X%2Fk34KEHcVxlKtctraxXkAUYdARHs5QcV0J%2FEwyrR0tg8whxypuco0w3yZ5w7Ktpf6HfSMFODgKHP7zINi5bscUfFpjEB2zVg3v3J0aqQEAUf4E2LUvVouuQmcJPOMQSFjcZ9sh6wVeDX1GfthZJOcg4Y7jzqfywUcrQ4Ex0XcmF44siIG1xQtUYBul%2FI%2F9%2F%2F53sxpBgmAZJW89hUJjWSD4qLcuAT3%2Bct0LjzKeN1HVykjBw3mBJ9usqW%2BxBpk1Gv6Gs6zqQ9tOsA5tADgrq7%2FLNxatiw304YuJt9kan3tARBXqqNcmvkoGgsC2ELkrvvxaOnVdzgglgVju40YqG5%2FkEE0bgS3LDO02K56OCfWjvWyQnpwQOza6cmwDnJNZbJ4%2FDosqAXvKlRF1CzS3Hy6jPqgB244xbDKZ6m0IIwmDvIHxOH%2FBkzBTOXpDeQqVN1PaXoSlg%2Bzt3tkPG1wFe%2BLQV0UhQDH4fjxnyEzdx1H7qvYolXypP2CIttOgnyT7Z2PDDyrN%2Fb2LZezdsx1JDFZhalkAiYMWQEMkt29cU7FHl9x4vSpMG442M2ZfiP4tKkp%2FybduUYYbhSmFxW4BecVkMzHrUJ6h2MEMIKG87Mq0rc8Z6k%2BxXMJHBpMMGOqUBkgme9r0Yfd4g91CL%2FUyzCdLiPnCxPs8Lf34WUWiRAU0vA3GIf9%2Bakqrv0wOVt4DeOBsciheEDIH2jvPO2VyEKQQ%2BuvUknz9NBAglgDN6eM01zqwwv1iNOcwtCwf8Aq3%2B6HfuT9Qrfu3Q%2Fr%2BcslTIrKE1t5lJkALq2dOe6tZSBeiLMIIDG6qa3QpEQhYhUp1ZQ74BJKSnxhYuHRgy56ZrTs2uV0s3&X-Amz-Signature=cb4da18c86f229fb0644e081ee66a88f4ea39d49de51cc7d24d038700d2c87c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NIY6LLF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFCgs3uAyyBtj1fR9zSIr5KHFIfCymXnUo7V7XnjxUjoAiEAslqWOi3iul1JhSMaPk42xRbbfP3m0yLp5nd2aJYhYOQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL1m2W0ouYA99EIr%2FyrcA2Xvz4B2X%2Fk34KEHcVxlKtctraxXkAUYdARHs5QcV0J%2FEwyrR0tg8whxypuco0w3yZ5w7Ktpf6HfSMFODgKHP7zINi5bscUfFpjEB2zVg3v3J0aqQEAUf4E2LUvVouuQmcJPOMQSFjcZ9sh6wVeDX1GfthZJOcg4Y7jzqfywUcrQ4Ex0XcmF44siIG1xQtUYBul%2FI%2F9%2F%2F53sxpBgmAZJW89hUJjWSD4qLcuAT3%2Bct0LjzKeN1HVykjBw3mBJ9usqW%2BxBpk1Gv6Gs6zqQ9tOsA5tADgrq7%2FLNxatiw304YuJt9kan3tARBXqqNcmvkoGgsC2ELkrvvxaOnVdzgglgVju40YqG5%2FkEE0bgS3LDO02K56OCfWjvWyQnpwQOza6cmwDnJNZbJ4%2FDosqAXvKlRF1CzS3Hy6jPqgB244xbDKZ6m0IIwmDvIHxOH%2FBkzBTOXpDeQqVN1PaXoSlg%2Bzt3tkPG1wFe%2BLQV0UhQDH4fjxnyEzdx1H7qvYolXypP2CIttOgnyT7Z2PDDyrN%2Fb2LZezdsx1JDFZhalkAiYMWQEMkt29cU7FHl9x4vSpMG442M2ZfiP4tKkp%2FybduUYYbhSmFxW4BecVkMzHrUJ6h2MEMIKG87Mq0rc8Z6k%2BxXMJHBpMMGOqUBkgme9r0Yfd4g91CL%2FUyzCdLiPnCxPs8Lf34WUWiRAU0vA3GIf9%2Bakqrv0wOVt4DeOBsciheEDIH2jvPO2VyEKQQ%2BuvUknz9NBAglgDN6eM01zqwwv1iNOcwtCwf8Aq3%2B6HfuT9Qrfu3Q%2Fr%2BcslTIrKE1t5lJkALq2dOe6tZSBeiLMIIDG6qa3QpEQhYhUp1ZQ74BJKSnxhYuHRgy56ZrTs2uV0s3&X-Amz-Signature=ac756e952d24dc240ef7fba7e7888972844aecbb0371e43b5e27840ba3c2aa4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NIY6LLF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFCgs3uAyyBtj1fR9zSIr5KHFIfCymXnUo7V7XnjxUjoAiEAslqWOi3iul1JhSMaPk42xRbbfP3m0yLp5nd2aJYhYOQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL1m2W0ouYA99EIr%2FyrcA2Xvz4B2X%2Fk34KEHcVxlKtctraxXkAUYdARHs5QcV0J%2FEwyrR0tg8whxypuco0w3yZ5w7Ktpf6HfSMFODgKHP7zINi5bscUfFpjEB2zVg3v3J0aqQEAUf4E2LUvVouuQmcJPOMQSFjcZ9sh6wVeDX1GfthZJOcg4Y7jzqfywUcrQ4Ex0XcmF44siIG1xQtUYBul%2FI%2F9%2F%2F53sxpBgmAZJW89hUJjWSD4qLcuAT3%2Bct0LjzKeN1HVykjBw3mBJ9usqW%2BxBpk1Gv6Gs6zqQ9tOsA5tADgrq7%2FLNxatiw304YuJt9kan3tARBXqqNcmvkoGgsC2ELkrvvxaOnVdzgglgVju40YqG5%2FkEE0bgS3LDO02K56OCfWjvWyQnpwQOza6cmwDnJNZbJ4%2FDosqAXvKlRF1CzS3Hy6jPqgB244xbDKZ6m0IIwmDvIHxOH%2FBkzBTOXpDeQqVN1PaXoSlg%2Bzt3tkPG1wFe%2BLQV0UhQDH4fjxnyEzdx1H7qvYolXypP2CIttOgnyT7Z2PDDyrN%2Fb2LZezdsx1JDFZhalkAiYMWQEMkt29cU7FHl9x4vSpMG442M2ZfiP4tKkp%2FybduUYYbhSmFxW4BecVkMzHrUJ6h2MEMIKG87Mq0rc8Z6k%2BxXMJHBpMMGOqUBkgme9r0Yfd4g91CL%2FUyzCdLiPnCxPs8Lf34WUWiRAU0vA3GIf9%2Bakqrv0wOVt4DeOBsciheEDIH2jvPO2VyEKQQ%2BuvUknz9NBAglgDN6eM01zqwwv1iNOcwtCwf8Aq3%2B6HfuT9Qrfu3Q%2Fr%2BcslTIrKE1t5lJkALq2dOe6tZSBeiLMIIDG6qa3QpEQhYhUp1ZQ74BJKSnxhYuHRgy56ZrTs2uV0s3&X-Amz-Signature=2c6f571c3f843311b5d756fa792dc61b020c6e2d000cbe6d7094465e9443e31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NIY6LLF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFCgs3uAyyBtj1fR9zSIr5KHFIfCymXnUo7V7XnjxUjoAiEAslqWOi3iul1JhSMaPk42xRbbfP3m0yLp5nd2aJYhYOQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL1m2W0ouYA99EIr%2FyrcA2Xvz4B2X%2Fk34KEHcVxlKtctraxXkAUYdARHs5QcV0J%2FEwyrR0tg8whxypuco0w3yZ5w7Ktpf6HfSMFODgKHP7zINi5bscUfFpjEB2zVg3v3J0aqQEAUf4E2LUvVouuQmcJPOMQSFjcZ9sh6wVeDX1GfthZJOcg4Y7jzqfywUcrQ4Ex0XcmF44siIG1xQtUYBul%2FI%2F9%2F%2F53sxpBgmAZJW89hUJjWSD4qLcuAT3%2Bct0LjzKeN1HVykjBw3mBJ9usqW%2BxBpk1Gv6Gs6zqQ9tOsA5tADgrq7%2FLNxatiw304YuJt9kan3tARBXqqNcmvkoGgsC2ELkrvvxaOnVdzgglgVju40YqG5%2FkEE0bgS3LDO02K56OCfWjvWyQnpwQOza6cmwDnJNZbJ4%2FDosqAXvKlRF1CzS3Hy6jPqgB244xbDKZ6m0IIwmDvIHxOH%2FBkzBTOXpDeQqVN1PaXoSlg%2Bzt3tkPG1wFe%2BLQV0UhQDH4fjxnyEzdx1H7qvYolXypP2CIttOgnyT7Z2PDDyrN%2Fb2LZezdsx1JDFZhalkAiYMWQEMkt29cU7FHl9x4vSpMG442M2ZfiP4tKkp%2FybduUYYbhSmFxW4BecVkMzHrUJ6h2MEMIKG87Mq0rc8Z6k%2BxXMJHBpMMGOqUBkgme9r0Yfd4g91CL%2FUyzCdLiPnCxPs8Lf34WUWiRAU0vA3GIf9%2Bakqrv0wOVt4DeOBsciheEDIH2jvPO2VyEKQQ%2BuvUknz9NBAglgDN6eM01zqwwv1iNOcwtCwf8Aq3%2B6HfuT9Qrfu3Q%2Fr%2BcslTIrKE1t5lJkALq2dOe6tZSBeiLMIIDG6qa3QpEQhYhUp1ZQ74BJKSnxhYuHRgy56ZrTs2uV0s3&X-Amz-Signature=831ebac8e383727648efe015ffe66ef0a256bb4c819649c1a008d1e4a679278b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NIY6LLF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFCgs3uAyyBtj1fR9zSIr5KHFIfCymXnUo7V7XnjxUjoAiEAslqWOi3iul1JhSMaPk42xRbbfP3m0yLp5nd2aJYhYOQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL1m2W0ouYA99EIr%2FyrcA2Xvz4B2X%2Fk34KEHcVxlKtctraxXkAUYdARHs5QcV0J%2FEwyrR0tg8whxypuco0w3yZ5w7Ktpf6HfSMFODgKHP7zINi5bscUfFpjEB2zVg3v3J0aqQEAUf4E2LUvVouuQmcJPOMQSFjcZ9sh6wVeDX1GfthZJOcg4Y7jzqfywUcrQ4Ex0XcmF44siIG1xQtUYBul%2FI%2F9%2F%2F53sxpBgmAZJW89hUJjWSD4qLcuAT3%2Bct0LjzKeN1HVykjBw3mBJ9usqW%2BxBpk1Gv6Gs6zqQ9tOsA5tADgrq7%2FLNxatiw304YuJt9kan3tARBXqqNcmvkoGgsC2ELkrvvxaOnVdzgglgVju40YqG5%2FkEE0bgS3LDO02K56OCfWjvWyQnpwQOza6cmwDnJNZbJ4%2FDosqAXvKlRF1CzS3Hy6jPqgB244xbDKZ6m0IIwmDvIHxOH%2FBkzBTOXpDeQqVN1PaXoSlg%2Bzt3tkPG1wFe%2BLQV0UhQDH4fjxnyEzdx1H7qvYolXypP2CIttOgnyT7Z2PDDyrN%2Fb2LZezdsx1JDFZhalkAiYMWQEMkt29cU7FHl9x4vSpMG442M2ZfiP4tKkp%2FybduUYYbhSmFxW4BecVkMzHrUJ6h2MEMIKG87Mq0rc8Z6k%2BxXMJHBpMMGOqUBkgme9r0Yfd4g91CL%2FUyzCdLiPnCxPs8Lf34WUWiRAU0vA3GIf9%2Bakqrv0wOVt4DeOBsciheEDIH2jvPO2VyEKQQ%2BuvUknz9NBAglgDN6eM01zqwwv1iNOcwtCwf8Aq3%2B6HfuT9Qrfu3Q%2Fr%2BcslTIrKE1t5lJkALq2dOe6tZSBeiLMIIDG6qa3QpEQhYhUp1ZQ74BJKSnxhYuHRgy56ZrTs2uV0s3&X-Amz-Signature=b9bba32af9ce8c187137acc751f305445a13fe338281eca5d6db6a2f52ba85b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NIY6LLF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFCgs3uAyyBtj1fR9zSIr5KHFIfCymXnUo7V7XnjxUjoAiEAslqWOi3iul1JhSMaPk42xRbbfP3m0yLp5nd2aJYhYOQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL1m2W0ouYA99EIr%2FyrcA2Xvz4B2X%2Fk34KEHcVxlKtctraxXkAUYdARHs5QcV0J%2FEwyrR0tg8whxypuco0w3yZ5w7Ktpf6HfSMFODgKHP7zINi5bscUfFpjEB2zVg3v3J0aqQEAUf4E2LUvVouuQmcJPOMQSFjcZ9sh6wVeDX1GfthZJOcg4Y7jzqfywUcrQ4Ex0XcmF44siIG1xQtUYBul%2FI%2F9%2F%2F53sxpBgmAZJW89hUJjWSD4qLcuAT3%2Bct0LjzKeN1HVykjBw3mBJ9usqW%2BxBpk1Gv6Gs6zqQ9tOsA5tADgrq7%2FLNxatiw304YuJt9kan3tARBXqqNcmvkoGgsC2ELkrvvxaOnVdzgglgVju40YqG5%2FkEE0bgS3LDO02K56OCfWjvWyQnpwQOza6cmwDnJNZbJ4%2FDosqAXvKlRF1CzS3Hy6jPqgB244xbDKZ6m0IIwmDvIHxOH%2FBkzBTOXpDeQqVN1PaXoSlg%2Bzt3tkPG1wFe%2BLQV0UhQDH4fjxnyEzdx1H7qvYolXypP2CIttOgnyT7Z2PDDyrN%2Fb2LZezdsx1JDFZhalkAiYMWQEMkt29cU7FHl9x4vSpMG442M2ZfiP4tKkp%2FybduUYYbhSmFxW4BecVkMzHrUJ6h2MEMIKG87Mq0rc8Z6k%2BxXMJHBpMMGOqUBkgme9r0Yfd4g91CL%2FUyzCdLiPnCxPs8Lf34WUWiRAU0vA3GIf9%2Bakqrv0wOVt4DeOBsciheEDIH2jvPO2VyEKQQ%2BuvUknz9NBAglgDN6eM01zqwwv1iNOcwtCwf8Aq3%2B6HfuT9Qrfu3Q%2Fr%2BcslTIrKE1t5lJkALq2dOe6tZSBeiLMIIDG6qa3QpEQhYhUp1ZQ74BJKSnxhYuHRgy56ZrTs2uV0s3&X-Amz-Signature=a43fb820ba2c0aebece30158bf0e72793f45b6280e0af5f5c9d7413daf171355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

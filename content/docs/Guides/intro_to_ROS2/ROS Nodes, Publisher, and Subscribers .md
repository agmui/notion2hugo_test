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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBE5F6F4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDTsTEMC7i%2BIb0ASVOhV73VrlRdeY%2BH4d%2Fx%2BgAA9QRrVAIhAMAv3klxckZ3wCIPTZ%2BU3zNm1EUo27nbdZICrn0x5Ss9Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxNOKri%2B9KFsKu4ywAq3AM6P9cis%2Fgv2WbW823bmses57X7t2okjzYwRV7MHOY5HbU%2FGE%2BmcUueDNb8FLNsXwevjJrjxwl5pvdAw0r8JtSn%2FwqhMOYq1Jp83qzrIBR7RvPpxvs9Kt9nNXIMFogIH7%2FIZF8%2FPGC66MaHHPP4B1KxLLxVaLqM94gGON1mAI3nJG15SirME%2BVTGXj9RFGMzu%2FSmg1mQjta%2Fiz326075cnGaCvG06gq4d9hpnCQ65c4fSMzNX36S4665gLTIMcgo66nWHBcON1%2BppT7qR3uV8AURlfd4qCbnGuX92k6eK1cZaITM6nH4cGGsHHHXlwq26cFlD%2BDnwtEsYXqXwiQkYwkIJhNQuXydb3twZqb9SRBMLeqH5K3oMzD0v4H67wnLLIbrtV%2BGteMfFTlmPkonJFIr%2Bc1s09o2eff5u5XXbRpo1rUG%2BC3KEm9QpybSXPaupoNoboW6jor1UmMVnX7vUEKb9ON6ikhK9KtAs1z%2Ft4Yeo7Byy2A5tL8k9bSYQE5THRwr9bfiyg2gitaEFrwBV48W8BX%2FSOCDKMbw3x4XorOAWC1aINXWdeUw0tGeRtbFt5MYDsoaqg9JgG1d%2BaMdZdpBFlwHNIo95DTSZFXSYhAjKbY%2Fr4RZmOqnt6%2BujDqps69BjqkAbURbD8MjlauqI5Zw%2BSs1rN7D%2ButOEOqBPb3wr6JRUie5KCL1yX0%2Bf%2F%2FbvhhB4RRWWb0vReBDTKvRNVrBaZEXSlNnYs1bertV0zEEM1xjED6JLTtMWSKrRvJbyLxdmAabNjfitfarujhJtSPMHj1rS%2FqcV0bTHjtqlsJ4kHGynjf9Mkz7gUh9LmQ3uU9LM64%2FhfaMGVxvg1qKgLQMtz%2Fa94gRsvH&X-Amz-Signature=848f6d3f9dbdf4dcc09f5c81233dfafe1549a36196bf8b2dc2a5cbc370bf4b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBE5F6F4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDTsTEMC7i%2BIb0ASVOhV73VrlRdeY%2BH4d%2Fx%2BgAA9QRrVAIhAMAv3klxckZ3wCIPTZ%2BU3zNm1EUo27nbdZICrn0x5Ss9Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxNOKri%2B9KFsKu4ywAq3AM6P9cis%2Fgv2WbW823bmses57X7t2okjzYwRV7MHOY5HbU%2FGE%2BmcUueDNb8FLNsXwevjJrjxwl5pvdAw0r8JtSn%2FwqhMOYq1Jp83qzrIBR7RvPpxvs9Kt9nNXIMFogIH7%2FIZF8%2FPGC66MaHHPP4B1KxLLxVaLqM94gGON1mAI3nJG15SirME%2BVTGXj9RFGMzu%2FSmg1mQjta%2Fiz326075cnGaCvG06gq4d9hpnCQ65c4fSMzNX36S4665gLTIMcgo66nWHBcON1%2BppT7qR3uV8AURlfd4qCbnGuX92k6eK1cZaITM6nH4cGGsHHHXlwq26cFlD%2BDnwtEsYXqXwiQkYwkIJhNQuXydb3twZqb9SRBMLeqH5K3oMzD0v4H67wnLLIbrtV%2BGteMfFTlmPkonJFIr%2Bc1s09o2eff5u5XXbRpo1rUG%2BC3KEm9QpybSXPaupoNoboW6jor1UmMVnX7vUEKb9ON6ikhK9KtAs1z%2Ft4Yeo7Byy2A5tL8k9bSYQE5THRwr9bfiyg2gitaEFrwBV48W8BX%2FSOCDKMbw3x4XorOAWC1aINXWdeUw0tGeRtbFt5MYDsoaqg9JgG1d%2BaMdZdpBFlwHNIo95DTSZFXSYhAjKbY%2Fr4RZmOqnt6%2BujDqps69BjqkAbURbD8MjlauqI5Zw%2BSs1rN7D%2ButOEOqBPb3wr6JRUie5KCL1yX0%2Bf%2F%2FbvhhB4RRWWb0vReBDTKvRNVrBaZEXSlNnYs1bertV0zEEM1xjED6JLTtMWSKrRvJbyLxdmAabNjfitfarujhJtSPMHj1rS%2FqcV0bTHjtqlsJ4kHGynjf9Mkz7gUh9LmQ3uU9LM64%2FhfaMGVxvg1qKgLQMtz%2Fa94gRsvH&X-Amz-Signature=4b4e37412a769604ec7f7d7263fe99449ae55bc7a0aa63a75aec17ba8fc01aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBE5F6F4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDTsTEMC7i%2BIb0ASVOhV73VrlRdeY%2BH4d%2Fx%2BgAA9QRrVAIhAMAv3klxckZ3wCIPTZ%2BU3zNm1EUo27nbdZICrn0x5Ss9Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxNOKri%2B9KFsKu4ywAq3AM6P9cis%2Fgv2WbW823bmses57X7t2okjzYwRV7MHOY5HbU%2FGE%2BmcUueDNb8FLNsXwevjJrjxwl5pvdAw0r8JtSn%2FwqhMOYq1Jp83qzrIBR7RvPpxvs9Kt9nNXIMFogIH7%2FIZF8%2FPGC66MaHHPP4B1KxLLxVaLqM94gGON1mAI3nJG15SirME%2BVTGXj9RFGMzu%2FSmg1mQjta%2Fiz326075cnGaCvG06gq4d9hpnCQ65c4fSMzNX36S4665gLTIMcgo66nWHBcON1%2BppT7qR3uV8AURlfd4qCbnGuX92k6eK1cZaITM6nH4cGGsHHHXlwq26cFlD%2BDnwtEsYXqXwiQkYwkIJhNQuXydb3twZqb9SRBMLeqH5K3oMzD0v4H67wnLLIbrtV%2BGteMfFTlmPkonJFIr%2Bc1s09o2eff5u5XXbRpo1rUG%2BC3KEm9QpybSXPaupoNoboW6jor1UmMVnX7vUEKb9ON6ikhK9KtAs1z%2Ft4Yeo7Byy2A5tL8k9bSYQE5THRwr9bfiyg2gitaEFrwBV48W8BX%2FSOCDKMbw3x4XorOAWC1aINXWdeUw0tGeRtbFt5MYDsoaqg9JgG1d%2BaMdZdpBFlwHNIo95DTSZFXSYhAjKbY%2Fr4RZmOqnt6%2BujDqps69BjqkAbURbD8MjlauqI5Zw%2BSs1rN7D%2ButOEOqBPb3wr6JRUie5KCL1yX0%2Bf%2F%2FbvhhB4RRWWb0vReBDTKvRNVrBaZEXSlNnYs1bertV0zEEM1xjED6JLTtMWSKrRvJbyLxdmAabNjfitfarujhJtSPMHj1rS%2FqcV0bTHjtqlsJ4kHGynjf9Mkz7gUh9LmQ3uU9LM64%2FhfaMGVxvg1qKgLQMtz%2Fa94gRsvH&X-Amz-Signature=695de28b9e699564960d41dd0aa35236a5d78e4cff7abaf022decb120812d2ed&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBE5F6F4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDTsTEMC7i%2BIb0ASVOhV73VrlRdeY%2BH4d%2Fx%2BgAA9QRrVAIhAMAv3klxckZ3wCIPTZ%2BU3zNm1EUo27nbdZICrn0x5Ss9Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxNOKri%2B9KFsKu4ywAq3AM6P9cis%2Fgv2WbW823bmses57X7t2okjzYwRV7MHOY5HbU%2FGE%2BmcUueDNb8FLNsXwevjJrjxwl5pvdAw0r8JtSn%2FwqhMOYq1Jp83qzrIBR7RvPpxvs9Kt9nNXIMFogIH7%2FIZF8%2FPGC66MaHHPP4B1KxLLxVaLqM94gGON1mAI3nJG15SirME%2BVTGXj9RFGMzu%2FSmg1mQjta%2Fiz326075cnGaCvG06gq4d9hpnCQ65c4fSMzNX36S4665gLTIMcgo66nWHBcON1%2BppT7qR3uV8AURlfd4qCbnGuX92k6eK1cZaITM6nH4cGGsHHHXlwq26cFlD%2BDnwtEsYXqXwiQkYwkIJhNQuXydb3twZqb9SRBMLeqH5K3oMzD0v4H67wnLLIbrtV%2BGteMfFTlmPkonJFIr%2Bc1s09o2eff5u5XXbRpo1rUG%2BC3KEm9QpybSXPaupoNoboW6jor1UmMVnX7vUEKb9ON6ikhK9KtAs1z%2Ft4Yeo7Byy2A5tL8k9bSYQE5THRwr9bfiyg2gitaEFrwBV48W8BX%2FSOCDKMbw3x4XorOAWC1aINXWdeUw0tGeRtbFt5MYDsoaqg9JgG1d%2BaMdZdpBFlwHNIo95DTSZFXSYhAjKbY%2Fr4RZmOqnt6%2BujDqps69BjqkAbURbD8MjlauqI5Zw%2BSs1rN7D%2ButOEOqBPb3wr6JRUie5KCL1yX0%2Bf%2F%2FbvhhB4RRWWb0vReBDTKvRNVrBaZEXSlNnYs1bertV0zEEM1xjED6JLTtMWSKrRvJbyLxdmAabNjfitfarujhJtSPMHj1rS%2FqcV0bTHjtqlsJ4kHGynjf9Mkz7gUh9LmQ3uU9LM64%2FhfaMGVxvg1qKgLQMtz%2Fa94gRsvH&X-Amz-Signature=9bc364f1bf5c88fcd9eaa79568d952b64fd74960754f98bcb12e1f87ffcc9de7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBE5F6F4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDTsTEMC7i%2BIb0ASVOhV73VrlRdeY%2BH4d%2Fx%2BgAA9QRrVAIhAMAv3klxckZ3wCIPTZ%2BU3zNm1EUo27nbdZICrn0x5Ss9Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxNOKri%2B9KFsKu4ywAq3AM6P9cis%2Fgv2WbW823bmses57X7t2okjzYwRV7MHOY5HbU%2FGE%2BmcUueDNb8FLNsXwevjJrjxwl5pvdAw0r8JtSn%2FwqhMOYq1Jp83qzrIBR7RvPpxvs9Kt9nNXIMFogIH7%2FIZF8%2FPGC66MaHHPP4B1KxLLxVaLqM94gGON1mAI3nJG15SirME%2BVTGXj9RFGMzu%2FSmg1mQjta%2Fiz326075cnGaCvG06gq4d9hpnCQ65c4fSMzNX36S4665gLTIMcgo66nWHBcON1%2BppT7qR3uV8AURlfd4qCbnGuX92k6eK1cZaITM6nH4cGGsHHHXlwq26cFlD%2BDnwtEsYXqXwiQkYwkIJhNQuXydb3twZqb9SRBMLeqH5K3oMzD0v4H67wnLLIbrtV%2BGteMfFTlmPkonJFIr%2Bc1s09o2eff5u5XXbRpo1rUG%2BC3KEm9QpybSXPaupoNoboW6jor1UmMVnX7vUEKb9ON6ikhK9KtAs1z%2Ft4Yeo7Byy2A5tL8k9bSYQE5THRwr9bfiyg2gitaEFrwBV48W8BX%2FSOCDKMbw3x4XorOAWC1aINXWdeUw0tGeRtbFt5MYDsoaqg9JgG1d%2BaMdZdpBFlwHNIo95DTSZFXSYhAjKbY%2Fr4RZmOqnt6%2BujDqps69BjqkAbURbD8MjlauqI5Zw%2BSs1rN7D%2ButOEOqBPb3wr6JRUie5KCL1yX0%2Bf%2F%2FbvhhB4RRWWb0vReBDTKvRNVrBaZEXSlNnYs1bertV0zEEM1xjED6JLTtMWSKrRvJbyLxdmAabNjfitfarujhJtSPMHj1rS%2FqcV0bTHjtqlsJ4kHGynjf9Mkz7gUh9LmQ3uU9LM64%2FhfaMGVxvg1qKgLQMtz%2Fa94gRsvH&X-Amz-Signature=6d1d089ba8e19112469edecc4fe0fbb2258221d48dc1eec98746bd843912ad91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBE5F6F4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDTsTEMC7i%2BIb0ASVOhV73VrlRdeY%2BH4d%2Fx%2BgAA9QRrVAIhAMAv3klxckZ3wCIPTZ%2BU3zNm1EUo27nbdZICrn0x5Ss9Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxNOKri%2B9KFsKu4ywAq3AM6P9cis%2Fgv2WbW823bmses57X7t2okjzYwRV7MHOY5HbU%2FGE%2BmcUueDNb8FLNsXwevjJrjxwl5pvdAw0r8JtSn%2FwqhMOYq1Jp83qzrIBR7RvPpxvs9Kt9nNXIMFogIH7%2FIZF8%2FPGC66MaHHPP4B1KxLLxVaLqM94gGON1mAI3nJG15SirME%2BVTGXj9RFGMzu%2FSmg1mQjta%2Fiz326075cnGaCvG06gq4d9hpnCQ65c4fSMzNX36S4665gLTIMcgo66nWHBcON1%2BppT7qR3uV8AURlfd4qCbnGuX92k6eK1cZaITM6nH4cGGsHHHXlwq26cFlD%2BDnwtEsYXqXwiQkYwkIJhNQuXydb3twZqb9SRBMLeqH5K3oMzD0v4H67wnLLIbrtV%2BGteMfFTlmPkonJFIr%2Bc1s09o2eff5u5XXbRpo1rUG%2BC3KEm9QpybSXPaupoNoboW6jor1UmMVnX7vUEKb9ON6ikhK9KtAs1z%2Ft4Yeo7Byy2A5tL8k9bSYQE5THRwr9bfiyg2gitaEFrwBV48W8BX%2FSOCDKMbw3x4XorOAWC1aINXWdeUw0tGeRtbFt5MYDsoaqg9JgG1d%2BaMdZdpBFlwHNIo95DTSZFXSYhAjKbY%2Fr4RZmOqnt6%2BujDqps69BjqkAbURbD8MjlauqI5Zw%2BSs1rN7D%2ButOEOqBPb3wr6JRUie5KCL1yX0%2Bf%2F%2FbvhhB4RRWWb0vReBDTKvRNVrBaZEXSlNnYs1bertV0zEEM1xjED6JLTtMWSKrRvJbyLxdmAabNjfitfarujhJtSPMHj1rS%2FqcV0bTHjtqlsJ4kHGynjf9Mkz7gUh9LmQ3uU9LM64%2FhfaMGVxvg1qKgLQMtz%2Fa94gRsvH&X-Amz-Signature=af1f818b09016d7777299253349b0ba91f9185f08d4172dc2830053b9812d505&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBE5F6F4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDTsTEMC7i%2BIb0ASVOhV73VrlRdeY%2BH4d%2Fx%2BgAA9QRrVAIhAMAv3klxckZ3wCIPTZ%2BU3zNm1EUo27nbdZICrn0x5Ss9Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxNOKri%2B9KFsKu4ywAq3AM6P9cis%2Fgv2WbW823bmses57X7t2okjzYwRV7MHOY5HbU%2FGE%2BmcUueDNb8FLNsXwevjJrjxwl5pvdAw0r8JtSn%2FwqhMOYq1Jp83qzrIBR7RvPpxvs9Kt9nNXIMFogIH7%2FIZF8%2FPGC66MaHHPP4B1KxLLxVaLqM94gGON1mAI3nJG15SirME%2BVTGXj9RFGMzu%2FSmg1mQjta%2Fiz326075cnGaCvG06gq4d9hpnCQ65c4fSMzNX36S4665gLTIMcgo66nWHBcON1%2BppT7qR3uV8AURlfd4qCbnGuX92k6eK1cZaITM6nH4cGGsHHHXlwq26cFlD%2BDnwtEsYXqXwiQkYwkIJhNQuXydb3twZqb9SRBMLeqH5K3oMzD0v4H67wnLLIbrtV%2BGteMfFTlmPkonJFIr%2Bc1s09o2eff5u5XXbRpo1rUG%2BC3KEm9QpybSXPaupoNoboW6jor1UmMVnX7vUEKb9ON6ikhK9KtAs1z%2Ft4Yeo7Byy2A5tL8k9bSYQE5THRwr9bfiyg2gitaEFrwBV48W8BX%2FSOCDKMbw3x4XorOAWC1aINXWdeUw0tGeRtbFt5MYDsoaqg9JgG1d%2BaMdZdpBFlwHNIo95DTSZFXSYhAjKbY%2Fr4RZmOqnt6%2BujDqps69BjqkAbURbD8MjlauqI5Zw%2BSs1rN7D%2ButOEOqBPb3wr6JRUie5KCL1yX0%2Bf%2F%2FbvhhB4RRWWb0vReBDTKvRNVrBaZEXSlNnYs1bertV0zEEM1xjED6JLTtMWSKrRvJbyLxdmAabNjfitfarujhJtSPMHj1rS%2FqcV0bTHjtqlsJ4kHGynjf9Mkz7gUh9LmQ3uU9LM64%2FhfaMGVxvg1qKgLQMtz%2Fa94gRsvH&X-Amz-Signature=c0f3512b83eff50c2cec6de1c53938da4f9fef95f8a3f5abbddc6df28679e857&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBE5F6F4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDTsTEMC7i%2BIb0ASVOhV73VrlRdeY%2BH4d%2Fx%2BgAA9QRrVAIhAMAv3klxckZ3wCIPTZ%2BU3zNm1EUo27nbdZICrn0x5Ss9Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxNOKri%2B9KFsKu4ywAq3AM6P9cis%2Fgv2WbW823bmses57X7t2okjzYwRV7MHOY5HbU%2FGE%2BmcUueDNb8FLNsXwevjJrjxwl5pvdAw0r8JtSn%2FwqhMOYq1Jp83qzrIBR7RvPpxvs9Kt9nNXIMFogIH7%2FIZF8%2FPGC66MaHHPP4B1KxLLxVaLqM94gGON1mAI3nJG15SirME%2BVTGXj9RFGMzu%2FSmg1mQjta%2Fiz326075cnGaCvG06gq4d9hpnCQ65c4fSMzNX36S4665gLTIMcgo66nWHBcON1%2BppT7qR3uV8AURlfd4qCbnGuX92k6eK1cZaITM6nH4cGGsHHHXlwq26cFlD%2BDnwtEsYXqXwiQkYwkIJhNQuXydb3twZqb9SRBMLeqH5K3oMzD0v4H67wnLLIbrtV%2BGteMfFTlmPkonJFIr%2Bc1s09o2eff5u5XXbRpo1rUG%2BC3KEm9QpybSXPaupoNoboW6jor1UmMVnX7vUEKb9ON6ikhK9KtAs1z%2Ft4Yeo7Byy2A5tL8k9bSYQE5THRwr9bfiyg2gitaEFrwBV48W8BX%2FSOCDKMbw3x4XorOAWC1aINXWdeUw0tGeRtbFt5MYDsoaqg9JgG1d%2BaMdZdpBFlwHNIo95DTSZFXSYhAjKbY%2Fr4RZmOqnt6%2BujDqps69BjqkAbURbD8MjlauqI5Zw%2BSs1rN7D%2ButOEOqBPb3wr6JRUie5KCL1yX0%2Bf%2F%2FbvhhB4RRWWb0vReBDTKvRNVrBaZEXSlNnYs1bertV0zEEM1xjED6JLTtMWSKrRvJbyLxdmAabNjfitfarujhJtSPMHj1rS%2FqcV0bTHjtqlsJ4kHGynjf9Mkz7gUh9LmQ3uU9LM64%2FhfaMGVxvg1qKgLQMtz%2Fa94gRsvH&X-Amz-Signature=2dba5613da37f5bf6023de745ce27d0b415e61f1c7aa589a7b0105a1b790db0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

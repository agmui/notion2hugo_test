---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627652QPT%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPSoUfw1jsZPkhqf7Suw0fOE9M0dvs6BNDB7xbEeOcQIhAMNB9wVOqkj0dYmGP11dqvl%2BVMaicnuK%2FcllYRDYZIgsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXzURou%2FC8UGqPS8q3AOnC1orq%2BtSZCNQywwDOfs%2FymNt6SFGk1oPkl0Y9zdvdK5hgFucfFe0nKwbV8JG9khZGuOuEpsHdaKhwTrWCiKq%2F6BwS9DEp5Pp3I6rCwUcwoopBkm%2BL0PJipTi2fA9vUv7XMrJby%2FDsizLdm2fylND4q3a7Pu%2Fyh5w7ADvWmW21WYS41UJnmVREtmIobs1w40AskQd%2F1WCkJCtPklCZSiv%2Bbgqot%2F3S0MKIdQDgmYsiLWwSz9kuwr%2F7CH4r2Og50V4Rb0rFuBk2ZfNxfMCqE5roY%2Ffnkt9PgQRsKXP9%2Bm9VpEEnBCTmTAj8I6OsPSLffNLyB8PAU8U9ykd3zodhyed%2BAeGcYlkhL9Nxwi0CbCL3GaeFJlXXPyXdTcoLT6aSTkLtwxVUFnRAj9UFeeBqUncfBsAqvOTtlgg02hHx%2B5otcXbuCaEwxYQsOB6QAu1jQgsjkOoGGYK1mzS0apGRnLhmvHEHbnQYaBbW7FnqAp5DzGs%2BiUl37USFlhD73XXyxHSzz%2F1kdhkfxtklTBkGGpv5Q4AcNymEKxPf1aWubHiPa4dxCrkmSuogfkvLawEi%2FgdEFzE28DdhszLLEy7vP9w4XIEIY3AU%2FkzFLXNNUBs%2Bj3DoAlh1AMidqaLpTC1r57UBjqkAQ5kTOEoD2vfv85Wx0aPIaZ2zmTWEVv00oyzalMPyct69EGDOc43zNNix14Rr%2FT62H4Z8wasC2LNSRjIPlmj7W2YYhFkKE0yQcKBtUuj%2FLHEBy8m1UqAjVVC9Rd1vKihh4uIS4MXuWT%2FU2Q613lJlg%2BnctaZexSg2M%2BIfH7C53f1n0JLtiWP9JV5VpLN8aFS5fOOO37GQxlc6F2SCcFvp75Y17UM&X-Amz-Signature=71388b5c9b01a5437239fbc71c9262f5956d81f63be734a5ff091c6eb0063736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627652QPT%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPSoUfw1jsZPkhqf7Suw0fOE9M0dvs6BNDB7xbEeOcQIhAMNB9wVOqkj0dYmGP11dqvl%2BVMaicnuK%2FcllYRDYZIgsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXzURou%2FC8UGqPS8q3AOnC1orq%2BtSZCNQywwDOfs%2FymNt6SFGk1oPkl0Y9zdvdK5hgFucfFe0nKwbV8JG9khZGuOuEpsHdaKhwTrWCiKq%2F6BwS9DEp5Pp3I6rCwUcwoopBkm%2BL0PJipTi2fA9vUv7XMrJby%2FDsizLdm2fylND4q3a7Pu%2Fyh5w7ADvWmW21WYS41UJnmVREtmIobs1w40AskQd%2F1WCkJCtPklCZSiv%2Bbgqot%2F3S0MKIdQDgmYsiLWwSz9kuwr%2F7CH4r2Og50V4Rb0rFuBk2ZfNxfMCqE5roY%2Ffnkt9PgQRsKXP9%2Bm9VpEEnBCTmTAj8I6OsPSLffNLyB8PAU8U9ykd3zodhyed%2BAeGcYlkhL9Nxwi0CbCL3GaeFJlXXPyXdTcoLT6aSTkLtwxVUFnRAj9UFeeBqUncfBsAqvOTtlgg02hHx%2B5otcXbuCaEwxYQsOB6QAu1jQgsjkOoGGYK1mzS0apGRnLhmvHEHbnQYaBbW7FnqAp5DzGs%2BiUl37USFlhD73XXyxHSzz%2F1kdhkfxtklTBkGGpv5Q4AcNymEKxPf1aWubHiPa4dxCrkmSuogfkvLawEi%2FgdEFzE28DdhszLLEy7vP9w4XIEIY3AU%2FkzFLXNNUBs%2Bj3DoAlh1AMidqaLpTC1r57UBjqkAQ5kTOEoD2vfv85Wx0aPIaZ2zmTWEVv00oyzalMPyct69EGDOc43zNNix14Rr%2FT62H4Z8wasC2LNSRjIPlmj7W2YYhFkKE0yQcKBtUuj%2FLHEBy8m1UqAjVVC9Rd1vKihh4uIS4MXuWT%2FU2Q613lJlg%2BnctaZexSg2M%2BIfH7C53f1n0JLtiWP9JV5VpLN8aFS5fOOO37GQxlc6F2SCcFvp75Y17UM&X-Amz-Signature=1f911e08751a336bad6ccb7548fb831d370c0745fc7a95f80e65417c9cf69193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627652QPT%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPSoUfw1jsZPkhqf7Suw0fOE9M0dvs6BNDB7xbEeOcQIhAMNB9wVOqkj0dYmGP11dqvl%2BVMaicnuK%2FcllYRDYZIgsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXzURou%2FC8UGqPS8q3AOnC1orq%2BtSZCNQywwDOfs%2FymNt6SFGk1oPkl0Y9zdvdK5hgFucfFe0nKwbV8JG9khZGuOuEpsHdaKhwTrWCiKq%2F6BwS9DEp5Pp3I6rCwUcwoopBkm%2BL0PJipTi2fA9vUv7XMrJby%2FDsizLdm2fylND4q3a7Pu%2Fyh5w7ADvWmW21WYS41UJnmVREtmIobs1w40AskQd%2F1WCkJCtPklCZSiv%2Bbgqot%2F3S0MKIdQDgmYsiLWwSz9kuwr%2F7CH4r2Og50V4Rb0rFuBk2ZfNxfMCqE5roY%2Ffnkt9PgQRsKXP9%2Bm9VpEEnBCTmTAj8I6OsPSLffNLyB8PAU8U9ykd3zodhyed%2BAeGcYlkhL9Nxwi0CbCL3GaeFJlXXPyXdTcoLT6aSTkLtwxVUFnRAj9UFeeBqUncfBsAqvOTtlgg02hHx%2B5otcXbuCaEwxYQsOB6QAu1jQgsjkOoGGYK1mzS0apGRnLhmvHEHbnQYaBbW7FnqAp5DzGs%2BiUl37USFlhD73XXyxHSzz%2F1kdhkfxtklTBkGGpv5Q4AcNymEKxPf1aWubHiPa4dxCrkmSuogfkvLawEi%2FgdEFzE28DdhszLLEy7vP9w4XIEIY3AU%2FkzFLXNNUBs%2Bj3DoAlh1AMidqaLpTC1r57UBjqkAQ5kTOEoD2vfv85Wx0aPIaZ2zmTWEVv00oyzalMPyct69EGDOc43zNNix14Rr%2FT62H4Z8wasC2LNSRjIPlmj7W2YYhFkKE0yQcKBtUuj%2FLHEBy8m1UqAjVVC9Rd1vKihh4uIS4MXuWT%2FU2Q613lJlg%2BnctaZexSg2M%2BIfH7C53f1n0JLtiWP9JV5VpLN8aFS5fOOO37GQxlc6F2SCcFvp75Y17UM&X-Amz-Signature=08b1a34e9ace81bf040f396da7c0462b02f4fb96f7cbf5ff5c55730eb7fa1602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627652QPT%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPSoUfw1jsZPkhqf7Suw0fOE9M0dvs6BNDB7xbEeOcQIhAMNB9wVOqkj0dYmGP11dqvl%2BVMaicnuK%2FcllYRDYZIgsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXzURou%2FC8UGqPS8q3AOnC1orq%2BtSZCNQywwDOfs%2FymNt6SFGk1oPkl0Y9zdvdK5hgFucfFe0nKwbV8JG9khZGuOuEpsHdaKhwTrWCiKq%2F6BwS9DEp5Pp3I6rCwUcwoopBkm%2BL0PJipTi2fA9vUv7XMrJby%2FDsizLdm2fylND4q3a7Pu%2Fyh5w7ADvWmW21WYS41UJnmVREtmIobs1w40AskQd%2F1WCkJCtPklCZSiv%2Bbgqot%2F3S0MKIdQDgmYsiLWwSz9kuwr%2F7CH4r2Og50V4Rb0rFuBk2ZfNxfMCqE5roY%2Ffnkt9PgQRsKXP9%2Bm9VpEEnBCTmTAj8I6OsPSLffNLyB8PAU8U9ykd3zodhyed%2BAeGcYlkhL9Nxwi0CbCL3GaeFJlXXPyXdTcoLT6aSTkLtwxVUFnRAj9UFeeBqUncfBsAqvOTtlgg02hHx%2B5otcXbuCaEwxYQsOB6QAu1jQgsjkOoGGYK1mzS0apGRnLhmvHEHbnQYaBbW7FnqAp5DzGs%2BiUl37USFlhD73XXyxHSzz%2F1kdhkfxtklTBkGGpv5Q4AcNymEKxPf1aWubHiPa4dxCrkmSuogfkvLawEi%2FgdEFzE28DdhszLLEy7vP9w4XIEIY3AU%2FkzFLXNNUBs%2Bj3DoAlh1AMidqaLpTC1r57UBjqkAQ5kTOEoD2vfv85Wx0aPIaZ2zmTWEVv00oyzalMPyct69EGDOc43zNNix14Rr%2FT62H4Z8wasC2LNSRjIPlmj7W2YYhFkKE0yQcKBtUuj%2FLHEBy8m1UqAjVVC9Rd1vKihh4uIS4MXuWT%2FU2Q613lJlg%2BnctaZexSg2M%2BIfH7C53f1n0JLtiWP9JV5VpLN8aFS5fOOO37GQxlc6F2SCcFvp75Y17UM&X-Amz-Signature=ac1894df1f1b98611edda92706fde6b03f70a102e7236d9e51e3992d95148063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627652QPT%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPSoUfw1jsZPkhqf7Suw0fOE9M0dvs6BNDB7xbEeOcQIhAMNB9wVOqkj0dYmGP11dqvl%2BVMaicnuK%2FcllYRDYZIgsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXzURou%2FC8UGqPS8q3AOnC1orq%2BtSZCNQywwDOfs%2FymNt6SFGk1oPkl0Y9zdvdK5hgFucfFe0nKwbV8JG9khZGuOuEpsHdaKhwTrWCiKq%2F6BwS9DEp5Pp3I6rCwUcwoopBkm%2BL0PJipTi2fA9vUv7XMrJby%2FDsizLdm2fylND4q3a7Pu%2Fyh5w7ADvWmW21WYS41UJnmVREtmIobs1w40AskQd%2F1WCkJCtPklCZSiv%2Bbgqot%2F3S0MKIdQDgmYsiLWwSz9kuwr%2F7CH4r2Og50V4Rb0rFuBk2ZfNxfMCqE5roY%2Ffnkt9PgQRsKXP9%2Bm9VpEEnBCTmTAj8I6OsPSLffNLyB8PAU8U9ykd3zodhyed%2BAeGcYlkhL9Nxwi0CbCL3GaeFJlXXPyXdTcoLT6aSTkLtwxVUFnRAj9UFeeBqUncfBsAqvOTtlgg02hHx%2B5otcXbuCaEwxYQsOB6QAu1jQgsjkOoGGYK1mzS0apGRnLhmvHEHbnQYaBbW7FnqAp5DzGs%2BiUl37USFlhD73XXyxHSzz%2F1kdhkfxtklTBkGGpv5Q4AcNymEKxPf1aWubHiPa4dxCrkmSuogfkvLawEi%2FgdEFzE28DdhszLLEy7vP9w4XIEIY3AU%2FkzFLXNNUBs%2Bj3DoAlh1AMidqaLpTC1r57UBjqkAQ5kTOEoD2vfv85Wx0aPIaZ2zmTWEVv00oyzalMPyct69EGDOc43zNNix14Rr%2FT62H4Z8wasC2LNSRjIPlmj7W2YYhFkKE0yQcKBtUuj%2FLHEBy8m1UqAjVVC9Rd1vKihh4uIS4MXuWT%2FU2Q613lJlg%2BnctaZexSg2M%2BIfH7C53f1n0JLtiWP9JV5VpLN8aFS5fOOO37GQxlc6F2SCcFvp75Y17UM&X-Amz-Signature=3850b4cfc6d2e9f0542d400bdf5a68da7e56dc87518cd7d5c35bc4611d4da5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627652QPT%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPSoUfw1jsZPkhqf7Suw0fOE9M0dvs6BNDB7xbEeOcQIhAMNB9wVOqkj0dYmGP11dqvl%2BVMaicnuK%2FcllYRDYZIgsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXzURou%2FC8UGqPS8q3AOnC1orq%2BtSZCNQywwDOfs%2FymNt6SFGk1oPkl0Y9zdvdK5hgFucfFe0nKwbV8JG9khZGuOuEpsHdaKhwTrWCiKq%2F6BwS9DEp5Pp3I6rCwUcwoopBkm%2BL0PJipTi2fA9vUv7XMrJby%2FDsizLdm2fylND4q3a7Pu%2Fyh5w7ADvWmW21WYS41UJnmVREtmIobs1w40AskQd%2F1WCkJCtPklCZSiv%2Bbgqot%2F3S0MKIdQDgmYsiLWwSz9kuwr%2F7CH4r2Og50V4Rb0rFuBk2ZfNxfMCqE5roY%2Ffnkt9PgQRsKXP9%2Bm9VpEEnBCTmTAj8I6OsPSLffNLyB8PAU8U9ykd3zodhyed%2BAeGcYlkhL9Nxwi0CbCL3GaeFJlXXPyXdTcoLT6aSTkLtwxVUFnRAj9UFeeBqUncfBsAqvOTtlgg02hHx%2B5otcXbuCaEwxYQsOB6QAu1jQgsjkOoGGYK1mzS0apGRnLhmvHEHbnQYaBbW7FnqAp5DzGs%2BiUl37USFlhD73XXyxHSzz%2F1kdhkfxtklTBkGGpv5Q4AcNymEKxPf1aWubHiPa4dxCrkmSuogfkvLawEi%2FgdEFzE28DdhszLLEy7vP9w4XIEIY3AU%2FkzFLXNNUBs%2Bj3DoAlh1AMidqaLpTC1r57UBjqkAQ5kTOEoD2vfv85Wx0aPIaZ2zmTWEVv00oyzalMPyct69EGDOc43zNNix14Rr%2FT62H4Z8wasC2LNSRjIPlmj7W2YYhFkKE0yQcKBtUuj%2FLHEBy8m1UqAjVVC9Rd1vKihh4uIS4MXuWT%2FU2Q613lJlg%2BnctaZexSg2M%2BIfH7C53f1n0JLtiWP9JV5VpLN8aFS5fOOO37GQxlc6F2SCcFvp75Y17UM&X-Amz-Signature=c66b18217d06e622ce526a8e8597e64bc93c63f17b34dcfc97b5be694ecf4de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627652QPT%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPSoUfw1jsZPkhqf7Suw0fOE9M0dvs6BNDB7xbEeOcQIhAMNB9wVOqkj0dYmGP11dqvl%2BVMaicnuK%2FcllYRDYZIgsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXzURou%2FC8UGqPS8q3AOnC1orq%2BtSZCNQywwDOfs%2FymNt6SFGk1oPkl0Y9zdvdK5hgFucfFe0nKwbV8JG9khZGuOuEpsHdaKhwTrWCiKq%2F6BwS9DEp5Pp3I6rCwUcwoopBkm%2BL0PJipTi2fA9vUv7XMrJby%2FDsizLdm2fylND4q3a7Pu%2Fyh5w7ADvWmW21WYS41UJnmVREtmIobs1w40AskQd%2F1WCkJCtPklCZSiv%2Bbgqot%2F3S0MKIdQDgmYsiLWwSz9kuwr%2F7CH4r2Og50V4Rb0rFuBk2ZfNxfMCqE5roY%2Ffnkt9PgQRsKXP9%2Bm9VpEEnBCTmTAj8I6OsPSLffNLyB8PAU8U9ykd3zodhyed%2BAeGcYlkhL9Nxwi0CbCL3GaeFJlXXPyXdTcoLT6aSTkLtwxVUFnRAj9UFeeBqUncfBsAqvOTtlgg02hHx%2B5otcXbuCaEwxYQsOB6QAu1jQgsjkOoGGYK1mzS0apGRnLhmvHEHbnQYaBbW7FnqAp5DzGs%2BiUl37USFlhD73XXyxHSzz%2F1kdhkfxtklTBkGGpv5Q4AcNymEKxPf1aWubHiPa4dxCrkmSuogfkvLawEi%2FgdEFzE28DdhszLLEy7vP9w4XIEIY3AU%2FkzFLXNNUBs%2Bj3DoAlh1AMidqaLpTC1r57UBjqkAQ5kTOEoD2vfv85Wx0aPIaZ2zmTWEVv00oyzalMPyct69EGDOc43zNNix14Rr%2FT62H4Z8wasC2LNSRjIPlmj7W2YYhFkKE0yQcKBtUuj%2FLHEBy8m1UqAjVVC9Rd1vKihh4uIS4MXuWT%2FU2Q613lJlg%2BnctaZexSg2M%2BIfH7C53f1n0JLtiWP9JV5VpLN8aFS5fOOO37GQxlc6F2SCcFvp75Y17UM&X-Amz-Signature=216e6cd4000b8cff68fc1aec3084693cab59c93ee75e085e2be020295f396324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627652QPT%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPSoUfw1jsZPkhqf7Suw0fOE9M0dvs6BNDB7xbEeOcQIhAMNB9wVOqkj0dYmGP11dqvl%2BVMaicnuK%2FcllYRDYZIgsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPXzURou%2FC8UGqPS8q3AOnC1orq%2BtSZCNQywwDOfs%2FymNt6SFGk1oPkl0Y9zdvdK5hgFucfFe0nKwbV8JG9khZGuOuEpsHdaKhwTrWCiKq%2F6BwS9DEp5Pp3I6rCwUcwoopBkm%2BL0PJipTi2fA9vUv7XMrJby%2FDsizLdm2fylND4q3a7Pu%2Fyh5w7ADvWmW21WYS41UJnmVREtmIobs1w40AskQd%2F1WCkJCtPklCZSiv%2Bbgqot%2F3S0MKIdQDgmYsiLWwSz9kuwr%2F7CH4r2Og50V4Rb0rFuBk2ZfNxfMCqE5roY%2Ffnkt9PgQRsKXP9%2Bm9VpEEnBCTmTAj8I6OsPSLffNLyB8PAU8U9ykd3zodhyed%2BAeGcYlkhL9Nxwi0CbCL3GaeFJlXXPyXdTcoLT6aSTkLtwxVUFnRAj9UFeeBqUncfBsAqvOTtlgg02hHx%2B5otcXbuCaEwxYQsOB6QAu1jQgsjkOoGGYK1mzS0apGRnLhmvHEHbnQYaBbW7FnqAp5DzGs%2BiUl37USFlhD73XXyxHSzz%2F1kdhkfxtklTBkGGpv5Q4AcNymEKxPf1aWubHiPa4dxCrkmSuogfkvLawEi%2FgdEFzE28DdhszLLEy7vP9w4XIEIY3AU%2FkzFLXNNUBs%2Bj3DoAlh1AMidqaLpTC1r57UBjqkAQ5kTOEoD2vfv85Wx0aPIaZ2zmTWEVv00oyzalMPyct69EGDOc43zNNix14Rr%2FT62H4Z8wasC2LNSRjIPlmj7W2YYhFkKE0yQcKBtUuj%2FLHEBy8m1UqAjVVC9Rd1vKihh4uIS4MXuWT%2FU2Q613lJlg%2BnctaZexSg2M%2BIfH7C53f1n0JLtiWP9JV5VpLN8aFS5fOOO37GQxlc6F2SCcFvp75Y17UM&X-Amz-Signature=4e0f8e8d853da8cf473e9016ed049065afc4f32386351c8731acc558d4063c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

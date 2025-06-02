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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OI3XI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCa2j2C7aGu0AC1FWQdiecQD3x02Oe%2F4yuppxpCP66YJAIgFRyqRHgpFVOm7LUErU%2ByQIqtLo%2BwLtiJ6E9FKDEh%2BREqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1Slh0TAvR%2FF%2FdYqCrcA2fpEcVS7lD5azQ4Kr%2BPJ2kfkc%2Be6eZfOxkZtAFrVvrrkJEoJacQuL0NzFoj0ye3t5TaQ03FErbUzqPsmkuYSRNvRUVB7m%2FWCxh2tD7tHvnEFU0u2C1Fs3XXdsCK5q0o26si8cR09%2F7sdtTgW42%2FxRZMgcVsq%2BiCdLyJmIa3o6UiUwtF9OfvUctwmFyi33OkXaEP4PTSKxHdNTsufeWtZ39R2KViml9wv4ruZVtxnLoglOdsNRYQgGaUUGBLa6b%2BBUSYAQcFDbCE9kVnuprRMb9Y9TNWvMejS7AfAKVh4oHZAovu6t7EI54Ib%2B7jxg%2B2p6pEPEWqBgKCqBbNxH7N0IeC2jYZQIpeDNfm2HsTO6mPYnw6ulyn52dN5Wo5WmNSQoC5xncFdat4Zao5W5tS8zKyLMWa4uIBGbbLOta5AzjIquHV2JOlg4v8JXxQFBE5rh4nvUSvw5nK6lfSiqcBed0z0XgGizmY5AkGGliZ8FJJZvK29qdhHQV5dzsSK6%2F2RhCez12EogCse6Oul4ZSfn7s7%2FU7moB9XX%2B75fMCz1iCWZppv5sJdcBEJOPPni8hXUK0PTo7mtU4DsKJuCBqrReciBv7zB%2BirxkNA0NSzLcStlmIBGPE%2B0FBJUNDMO3X9MEGOqUBMhbsvomhMuWoYFpB%2FnB5W3ev073N3tl7eJEvBAIZETkX050fDAFUGP6DD5UdOlGfOp5lo5lmQ49ixjs9LixhNUISAGBF%2BwHrdBPvpsxwPQ2OV8Kj1j6%2BCJSmEVRCRzzUca8LZkMR0he3YIZ88JmTFKL4kfiXG6pMxUAmdwd67NG9KSlum8ZuXzLqvslyxBoVuKFM8CS%2BmvGD7zcQFNUsc%2F4BBt1J&X-Amz-Signature=d4203bc0e7c035a07306b0593f73a865af7a044ea4f5679161a6d01fff5d48aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OI3XI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCa2j2C7aGu0AC1FWQdiecQD3x02Oe%2F4yuppxpCP66YJAIgFRyqRHgpFVOm7LUErU%2ByQIqtLo%2BwLtiJ6E9FKDEh%2BREqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1Slh0TAvR%2FF%2FdYqCrcA2fpEcVS7lD5azQ4Kr%2BPJ2kfkc%2Be6eZfOxkZtAFrVvrrkJEoJacQuL0NzFoj0ye3t5TaQ03FErbUzqPsmkuYSRNvRUVB7m%2FWCxh2tD7tHvnEFU0u2C1Fs3XXdsCK5q0o26si8cR09%2F7sdtTgW42%2FxRZMgcVsq%2BiCdLyJmIa3o6UiUwtF9OfvUctwmFyi33OkXaEP4PTSKxHdNTsufeWtZ39R2KViml9wv4ruZVtxnLoglOdsNRYQgGaUUGBLa6b%2BBUSYAQcFDbCE9kVnuprRMb9Y9TNWvMejS7AfAKVh4oHZAovu6t7EI54Ib%2B7jxg%2B2p6pEPEWqBgKCqBbNxH7N0IeC2jYZQIpeDNfm2HsTO6mPYnw6ulyn52dN5Wo5WmNSQoC5xncFdat4Zao5W5tS8zKyLMWa4uIBGbbLOta5AzjIquHV2JOlg4v8JXxQFBE5rh4nvUSvw5nK6lfSiqcBed0z0XgGizmY5AkGGliZ8FJJZvK29qdhHQV5dzsSK6%2F2RhCez12EogCse6Oul4ZSfn7s7%2FU7moB9XX%2B75fMCz1iCWZppv5sJdcBEJOPPni8hXUK0PTo7mtU4DsKJuCBqrReciBv7zB%2BirxkNA0NSzLcStlmIBGPE%2B0FBJUNDMO3X9MEGOqUBMhbsvomhMuWoYFpB%2FnB5W3ev073N3tl7eJEvBAIZETkX050fDAFUGP6DD5UdOlGfOp5lo5lmQ49ixjs9LixhNUISAGBF%2BwHrdBPvpsxwPQ2OV8Kj1j6%2BCJSmEVRCRzzUca8LZkMR0he3YIZ88JmTFKL4kfiXG6pMxUAmdwd67NG9KSlum8ZuXzLqvslyxBoVuKFM8CS%2BmvGD7zcQFNUsc%2F4BBt1J&X-Amz-Signature=2fdc1ea01c0d972b6ea84aefc67c46b164952ebb6d32f0fdbf5838ba214125fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OI3XI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCa2j2C7aGu0AC1FWQdiecQD3x02Oe%2F4yuppxpCP66YJAIgFRyqRHgpFVOm7LUErU%2ByQIqtLo%2BwLtiJ6E9FKDEh%2BREqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1Slh0TAvR%2FF%2FdYqCrcA2fpEcVS7lD5azQ4Kr%2BPJ2kfkc%2Be6eZfOxkZtAFrVvrrkJEoJacQuL0NzFoj0ye3t5TaQ03FErbUzqPsmkuYSRNvRUVB7m%2FWCxh2tD7tHvnEFU0u2C1Fs3XXdsCK5q0o26si8cR09%2F7sdtTgW42%2FxRZMgcVsq%2BiCdLyJmIa3o6UiUwtF9OfvUctwmFyi33OkXaEP4PTSKxHdNTsufeWtZ39R2KViml9wv4ruZVtxnLoglOdsNRYQgGaUUGBLa6b%2BBUSYAQcFDbCE9kVnuprRMb9Y9TNWvMejS7AfAKVh4oHZAovu6t7EI54Ib%2B7jxg%2B2p6pEPEWqBgKCqBbNxH7N0IeC2jYZQIpeDNfm2HsTO6mPYnw6ulyn52dN5Wo5WmNSQoC5xncFdat4Zao5W5tS8zKyLMWa4uIBGbbLOta5AzjIquHV2JOlg4v8JXxQFBE5rh4nvUSvw5nK6lfSiqcBed0z0XgGizmY5AkGGliZ8FJJZvK29qdhHQV5dzsSK6%2F2RhCez12EogCse6Oul4ZSfn7s7%2FU7moB9XX%2B75fMCz1iCWZppv5sJdcBEJOPPni8hXUK0PTo7mtU4DsKJuCBqrReciBv7zB%2BirxkNA0NSzLcStlmIBGPE%2B0FBJUNDMO3X9MEGOqUBMhbsvomhMuWoYFpB%2FnB5W3ev073N3tl7eJEvBAIZETkX050fDAFUGP6DD5UdOlGfOp5lo5lmQ49ixjs9LixhNUISAGBF%2BwHrdBPvpsxwPQ2OV8Kj1j6%2BCJSmEVRCRzzUca8LZkMR0he3YIZ88JmTFKL4kfiXG6pMxUAmdwd67NG9KSlum8ZuXzLqvslyxBoVuKFM8CS%2BmvGD7zcQFNUsc%2F4BBt1J&X-Amz-Signature=01e2fe66ee3585f8a96a6fd04feb6fcd8895a4bb0dbb1e9496d9e95bc2a56ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OI3XI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCa2j2C7aGu0AC1FWQdiecQD3x02Oe%2F4yuppxpCP66YJAIgFRyqRHgpFVOm7LUErU%2ByQIqtLo%2BwLtiJ6E9FKDEh%2BREqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1Slh0TAvR%2FF%2FdYqCrcA2fpEcVS7lD5azQ4Kr%2BPJ2kfkc%2Be6eZfOxkZtAFrVvrrkJEoJacQuL0NzFoj0ye3t5TaQ03FErbUzqPsmkuYSRNvRUVB7m%2FWCxh2tD7tHvnEFU0u2C1Fs3XXdsCK5q0o26si8cR09%2F7sdtTgW42%2FxRZMgcVsq%2BiCdLyJmIa3o6UiUwtF9OfvUctwmFyi33OkXaEP4PTSKxHdNTsufeWtZ39R2KViml9wv4ruZVtxnLoglOdsNRYQgGaUUGBLa6b%2BBUSYAQcFDbCE9kVnuprRMb9Y9TNWvMejS7AfAKVh4oHZAovu6t7EI54Ib%2B7jxg%2B2p6pEPEWqBgKCqBbNxH7N0IeC2jYZQIpeDNfm2HsTO6mPYnw6ulyn52dN5Wo5WmNSQoC5xncFdat4Zao5W5tS8zKyLMWa4uIBGbbLOta5AzjIquHV2JOlg4v8JXxQFBE5rh4nvUSvw5nK6lfSiqcBed0z0XgGizmY5AkGGliZ8FJJZvK29qdhHQV5dzsSK6%2F2RhCez12EogCse6Oul4ZSfn7s7%2FU7moB9XX%2B75fMCz1iCWZppv5sJdcBEJOPPni8hXUK0PTo7mtU4DsKJuCBqrReciBv7zB%2BirxkNA0NSzLcStlmIBGPE%2B0FBJUNDMO3X9MEGOqUBMhbsvomhMuWoYFpB%2FnB5W3ev073N3tl7eJEvBAIZETkX050fDAFUGP6DD5UdOlGfOp5lo5lmQ49ixjs9LixhNUISAGBF%2BwHrdBPvpsxwPQ2OV8Kj1j6%2BCJSmEVRCRzzUca8LZkMR0he3YIZ88JmTFKL4kfiXG6pMxUAmdwd67NG9KSlum8ZuXzLqvslyxBoVuKFM8CS%2BmvGD7zcQFNUsc%2F4BBt1J&X-Amz-Signature=d955f1742aa2699ebef5a9e05aa393eb2452a97b6b500720c7293089b2b7fcf1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OI3XI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCa2j2C7aGu0AC1FWQdiecQD3x02Oe%2F4yuppxpCP66YJAIgFRyqRHgpFVOm7LUErU%2ByQIqtLo%2BwLtiJ6E9FKDEh%2BREqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1Slh0TAvR%2FF%2FdYqCrcA2fpEcVS7lD5azQ4Kr%2BPJ2kfkc%2Be6eZfOxkZtAFrVvrrkJEoJacQuL0NzFoj0ye3t5TaQ03FErbUzqPsmkuYSRNvRUVB7m%2FWCxh2tD7tHvnEFU0u2C1Fs3XXdsCK5q0o26si8cR09%2F7sdtTgW42%2FxRZMgcVsq%2BiCdLyJmIa3o6UiUwtF9OfvUctwmFyi33OkXaEP4PTSKxHdNTsufeWtZ39R2KViml9wv4ruZVtxnLoglOdsNRYQgGaUUGBLa6b%2BBUSYAQcFDbCE9kVnuprRMb9Y9TNWvMejS7AfAKVh4oHZAovu6t7EI54Ib%2B7jxg%2B2p6pEPEWqBgKCqBbNxH7N0IeC2jYZQIpeDNfm2HsTO6mPYnw6ulyn52dN5Wo5WmNSQoC5xncFdat4Zao5W5tS8zKyLMWa4uIBGbbLOta5AzjIquHV2JOlg4v8JXxQFBE5rh4nvUSvw5nK6lfSiqcBed0z0XgGizmY5AkGGliZ8FJJZvK29qdhHQV5dzsSK6%2F2RhCez12EogCse6Oul4ZSfn7s7%2FU7moB9XX%2B75fMCz1iCWZppv5sJdcBEJOPPni8hXUK0PTo7mtU4DsKJuCBqrReciBv7zB%2BirxkNA0NSzLcStlmIBGPE%2B0FBJUNDMO3X9MEGOqUBMhbsvomhMuWoYFpB%2FnB5W3ev073N3tl7eJEvBAIZETkX050fDAFUGP6DD5UdOlGfOp5lo5lmQ49ixjs9LixhNUISAGBF%2BwHrdBPvpsxwPQ2OV8Kj1j6%2BCJSmEVRCRzzUca8LZkMR0he3YIZ88JmTFKL4kfiXG6pMxUAmdwd67NG9KSlum8ZuXzLqvslyxBoVuKFM8CS%2BmvGD7zcQFNUsc%2F4BBt1J&X-Amz-Signature=b0b107e1ef233d0683c39b1ff48df4c13802f236e541ee2fab383d4781b0bcc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OI3XI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCa2j2C7aGu0AC1FWQdiecQD3x02Oe%2F4yuppxpCP66YJAIgFRyqRHgpFVOm7LUErU%2ByQIqtLo%2BwLtiJ6E9FKDEh%2BREqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1Slh0TAvR%2FF%2FdYqCrcA2fpEcVS7lD5azQ4Kr%2BPJ2kfkc%2Be6eZfOxkZtAFrVvrrkJEoJacQuL0NzFoj0ye3t5TaQ03FErbUzqPsmkuYSRNvRUVB7m%2FWCxh2tD7tHvnEFU0u2C1Fs3XXdsCK5q0o26si8cR09%2F7sdtTgW42%2FxRZMgcVsq%2BiCdLyJmIa3o6UiUwtF9OfvUctwmFyi33OkXaEP4PTSKxHdNTsufeWtZ39R2KViml9wv4ruZVtxnLoglOdsNRYQgGaUUGBLa6b%2BBUSYAQcFDbCE9kVnuprRMb9Y9TNWvMejS7AfAKVh4oHZAovu6t7EI54Ib%2B7jxg%2B2p6pEPEWqBgKCqBbNxH7N0IeC2jYZQIpeDNfm2HsTO6mPYnw6ulyn52dN5Wo5WmNSQoC5xncFdat4Zao5W5tS8zKyLMWa4uIBGbbLOta5AzjIquHV2JOlg4v8JXxQFBE5rh4nvUSvw5nK6lfSiqcBed0z0XgGizmY5AkGGliZ8FJJZvK29qdhHQV5dzsSK6%2F2RhCez12EogCse6Oul4ZSfn7s7%2FU7moB9XX%2B75fMCz1iCWZppv5sJdcBEJOPPni8hXUK0PTo7mtU4DsKJuCBqrReciBv7zB%2BirxkNA0NSzLcStlmIBGPE%2B0FBJUNDMO3X9MEGOqUBMhbsvomhMuWoYFpB%2FnB5W3ev073N3tl7eJEvBAIZETkX050fDAFUGP6DD5UdOlGfOp5lo5lmQ49ixjs9LixhNUISAGBF%2BwHrdBPvpsxwPQ2OV8Kj1j6%2BCJSmEVRCRzzUca8LZkMR0he3YIZ88JmTFKL4kfiXG6pMxUAmdwd67NG9KSlum8ZuXzLqvslyxBoVuKFM8CS%2BmvGD7zcQFNUsc%2F4BBt1J&X-Amz-Signature=87783ebacfc8a3e862c4b3ee77daf767fbe8f05cdbcebd3e35561b0847bf3f48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OI3XI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCa2j2C7aGu0AC1FWQdiecQD3x02Oe%2F4yuppxpCP66YJAIgFRyqRHgpFVOm7LUErU%2ByQIqtLo%2BwLtiJ6E9FKDEh%2BREqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1Slh0TAvR%2FF%2FdYqCrcA2fpEcVS7lD5azQ4Kr%2BPJ2kfkc%2Be6eZfOxkZtAFrVvrrkJEoJacQuL0NzFoj0ye3t5TaQ03FErbUzqPsmkuYSRNvRUVB7m%2FWCxh2tD7tHvnEFU0u2C1Fs3XXdsCK5q0o26si8cR09%2F7sdtTgW42%2FxRZMgcVsq%2BiCdLyJmIa3o6UiUwtF9OfvUctwmFyi33OkXaEP4PTSKxHdNTsufeWtZ39R2KViml9wv4ruZVtxnLoglOdsNRYQgGaUUGBLa6b%2BBUSYAQcFDbCE9kVnuprRMb9Y9TNWvMejS7AfAKVh4oHZAovu6t7EI54Ib%2B7jxg%2B2p6pEPEWqBgKCqBbNxH7N0IeC2jYZQIpeDNfm2HsTO6mPYnw6ulyn52dN5Wo5WmNSQoC5xncFdat4Zao5W5tS8zKyLMWa4uIBGbbLOta5AzjIquHV2JOlg4v8JXxQFBE5rh4nvUSvw5nK6lfSiqcBed0z0XgGizmY5AkGGliZ8FJJZvK29qdhHQV5dzsSK6%2F2RhCez12EogCse6Oul4ZSfn7s7%2FU7moB9XX%2B75fMCz1iCWZppv5sJdcBEJOPPni8hXUK0PTo7mtU4DsKJuCBqrReciBv7zB%2BirxkNA0NSzLcStlmIBGPE%2B0FBJUNDMO3X9MEGOqUBMhbsvomhMuWoYFpB%2FnB5W3ev073N3tl7eJEvBAIZETkX050fDAFUGP6DD5UdOlGfOp5lo5lmQ49ixjs9LixhNUISAGBF%2BwHrdBPvpsxwPQ2OV8Kj1j6%2BCJSmEVRCRzzUca8LZkMR0he3YIZ88JmTFKL4kfiXG6pMxUAmdwd67NG9KSlum8ZuXzLqvslyxBoVuKFM8CS%2BmvGD7zcQFNUsc%2F4BBt1J&X-Amz-Signature=557363ebda52426081fd9c1ef61740d4843acf9eb11d3c8fa598b8329138453e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OI3XI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCa2j2C7aGu0AC1FWQdiecQD3x02Oe%2F4yuppxpCP66YJAIgFRyqRHgpFVOm7LUErU%2ByQIqtLo%2BwLtiJ6E9FKDEh%2BREqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1Slh0TAvR%2FF%2FdYqCrcA2fpEcVS7lD5azQ4Kr%2BPJ2kfkc%2Be6eZfOxkZtAFrVvrrkJEoJacQuL0NzFoj0ye3t5TaQ03FErbUzqPsmkuYSRNvRUVB7m%2FWCxh2tD7tHvnEFU0u2C1Fs3XXdsCK5q0o26si8cR09%2F7sdtTgW42%2FxRZMgcVsq%2BiCdLyJmIa3o6UiUwtF9OfvUctwmFyi33OkXaEP4PTSKxHdNTsufeWtZ39R2KViml9wv4ruZVtxnLoglOdsNRYQgGaUUGBLa6b%2BBUSYAQcFDbCE9kVnuprRMb9Y9TNWvMejS7AfAKVh4oHZAovu6t7EI54Ib%2B7jxg%2B2p6pEPEWqBgKCqBbNxH7N0IeC2jYZQIpeDNfm2HsTO6mPYnw6ulyn52dN5Wo5WmNSQoC5xncFdat4Zao5W5tS8zKyLMWa4uIBGbbLOta5AzjIquHV2JOlg4v8JXxQFBE5rh4nvUSvw5nK6lfSiqcBed0z0XgGizmY5AkGGliZ8FJJZvK29qdhHQV5dzsSK6%2F2RhCez12EogCse6Oul4ZSfn7s7%2FU7moB9XX%2B75fMCz1iCWZppv5sJdcBEJOPPni8hXUK0PTo7mtU4DsKJuCBqrReciBv7zB%2BirxkNA0NSzLcStlmIBGPE%2B0FBJUNDMO3X9MEGOqUBMhbsvomhMuWoYFpB%2FnB5W3ev073N3tl7eJEvBAIZETkX050fDAFUGP6DD5UdOlGfOp5lo5lmQ49ixjs9LixhNUISAGBF%2BwHrdBPvpsxwPQ2OV8Kj1j6%2BCJSmEVRCRzzUca8LZkMR0he3YIZ88JmTFKL4kfiXG6pMxUAmdwd67NG9KSlum8ZuXzLqvslyxBoVuKFM8CS%2BmvGD7zcQFNUsc%2F4BBt1J&X-Amz-Signature=65c0cabdfe6c902f0c05e725333b58b3ea4fb7a59823faa1aabe63e95d7cb487&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

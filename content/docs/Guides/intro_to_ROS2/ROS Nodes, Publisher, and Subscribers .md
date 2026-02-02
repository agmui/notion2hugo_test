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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHTCFKF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD7UkqMez3qi%2Fy3%2B5Xq5P8GgbrRmy3jkPk3Eb%2BbZfCcPAIgREUDbdCmhnoGaJB9Psa66WQq%2FmmtFIursuAMeiQOHUoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCERGV66T%2BXUEXU5uyrcA%2FHbkcHe9iKrPokROzBmk1CKnQr11fHM4gMvfBGMvmTFiiRX9iGQJwad6mVWu8Ow5vUOXpRkk%2FuJOFo58rAfh6OmPnPUYORlVllAwKo5QJlUCHLLIymJyqD1QN4sehWeIBhlksk0W126EBSLyFvcj0FP3ksCBMmsUlqhb0dbMLP1W%2Fqi%2BCW%2BhLEvOp86RbFoN7chBeRdAikIPNVzWZ%2FnRxsI%2F3eGQsz2SetdDrfBI0por0QQANjqoeoQgHLaIsyrfuRu6xcR2g8yW5NFS33wu%2FQpIBKI%2Be1pAEnYm34pkKK16Ewh0uuw7%2BoIU%2F1oLIdlNi%2FhPkKiWuH%2Bocf0avLbbsSB5vGW8nUBzeslLUjeMTnXJO8crpa5qkZDxXNu6sdZakOUOIaY3i8MhMf80mAG%2BIO7ZixCPVkhGpY719jej%2FZjMQ%2BC%2FteJcf86T03NfW6H96kwxUNcGUa%2Feh6nzSLGgGH7N5nCxASMKLWZn6ACm3vfCgQTzs2sG4WSkYLbfr0d374juRNSyd7BLQbFOzMmMcPLodZBopFmpr0gX52DyBm097o2wXxOegfVG4W9cKSKRI0VkDDqamm0OobHekNChbNes6KXQYfPybw83KN8wVdjpuXcC%2Bj%2F4KcMtOv9MICIgMwGOqUBlLPRKmyJMd0EvRfNx71TtueEGA8vtM4HoBx%2B6ug6aEtEVD1%2BNc%2BqoUgjISQpZeUNo5ImH8OJrt%2BBU3HIKoBd34vTTA%2BRPQsacuICYvjKkHAKbUQnVFed7LdW9t742ZHWA5RoanYEEeY05sv7yO1CAjrQXcNV%2BMSOQEXHcK7BHJjjzQoqNHK0RGb2yeqwSL7Ye6BecIDWNqTmut85enGPT62FJX8T&X-Amz-Signature=0b305a624cc06258f2a08d634ea694bf787e3c1f952eee9e6528567298076f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHTCFKF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD7UkqMez3qi%2Fy3%2B5Xq5P8GgbrRmy3jkPk3Eb%2BbZfCcPAIgREUDbdCmhnoGaJB9Psa66WQq%2FmmtFIursuAMeiQOHUoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCERGV66T%2BXUEXU5uyrcA%2FHbkcHe9iKrPokROzBmk1CKnQr11fHM4gMvfBGMvmTFiiRX9iGQJwad6mVWu8Ow5vUOXpRkk%2FuJOFo58rAfh6OmPnPUYORlVllAwKo5QJlUCHLLIymJyqD1QN4sehWeIBhlksk0W126EBSLyFvcj0FP3ksCBMmsUlqhb0dbMLP1W%2Fqi%2BCW%2BhLEvOp86RbFoN7chBeRdAikIPNVzWZ%2FnRxsI%2F3eGQsz2SetdDrfBI0por0QQANjqoeoQgHLaIsyrfuRu6xcR2g8yW5NFS33wu%2FQpIBKI%2Be1pAEnYm34pkKK16Ewh0uuw7%2BoIU%2F1oLIdlNi%2FhPkKiWuH%2Bocf0avLbbsSB5vGW8nUBzeslLUjeMTnXJO8crpa5qkZDxXNu6sdZakOUOIaY3i8MhMf80mAG%2BIO7ZixCPVkhGpY719jej%2FZjMQ%2BC%2FteJcf86T03NfW6H96kwxUNcGUa%2Feh6nzSLGgGH7N5nCxASMKLWZn6ACm3vfCgQTzs2sG4WSkYLbfr0d374juRNSyd7BLQbFOzMmMcPLodZBopFmpr0gX52DyBm097o2wXxOegfVG4W9cKSKRI0VkDDqamm0OobHekNChbNes6KXQYfPybw83KN8wVdjpuXcC%2Bj%2F4KcMtOv9MICIgMwGOqUBlLPRKmyJMd0EvRfNx71TtueEGA8vtM4HoBx%2B6ug6aEtEVD1%2BNc%2BqoUgjISQpZeUNo5ImH8OJrt%2BBU3HIKoBd34vTTA%2BRPQsacuICYvjKkHAKbUQnVFed7LdW9t742ZHWA5RoanYEEeY05sv7yO1CAjrQXcNV%2BMSOQEXHcK7BHJjjzQoqNHK0RGb2yeqwSL7Ye6BecIDWNqTmut85enGPT62FJX8T&X-Amz-Signature=5e19721b376f57aaa81461e0508f6bf7679317b03ffcd262a321f22d15d0dc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHTCFKF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD7UkqMez3qi%2Fy3%2B5Xq5P8GgbrRmy3jkPk3Eb%2BbZfCcPAIgREUDbdCmhnoGaJB9Psa66WQq%2FmmtFIursuAMeiQOHUoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCERGV66T%2BXUEXU5uyrcA%2FHbkcHe9iKrPokROzBmk1CKnQr11fHM4gMvfBGMvmTFiiRX9iGQJwad6mVWu8Ow5vUOXpRkk%2FuJOFo58rAfh6OmPnPUYORlVllAwKo5QJlUCHLLIymJyqD1QN4sehWeIBhlksk0W126EBSLyFvcj0FP3ksCBMmsUlqhb0dbMLP1W%2Fqi%2BCW%2BhLEvOp86RbFoN7chBeRdAikIPNVzWZ%2FnRxsI%2F3eGQsz2SetdDrfBI0por0QQANjqoeoQgHLaIsyrfuRu6xcR2g8yW5NFS33wu%2FQpIBKI%2Be1pAEnYm34pkKK16Ewh0uuw7%2BoIU%2F1oLIdlNi%2FhPkKiWuH%2Bocf0avLbbsSB5vGW8nUBzeslLUjeMTnXJO8crpa5qkZDxXNu6sdZakOUOIaY3i8MhMf80mAG%2BIO7ZixCPVkhGpY719jej%2FZjMQ%2BC%2FteJcf86T03NfW6H96kwxUNcGUa%2Feh6nzSLGgGH7N5nCxASMKLWZn6ACm3vfCgQTzs2sG4WSkYLbfr0d374juRNSyd7BLQbFOzMmMcPLodZBopFmpr0gX52DyBm097o2wXxOegfVG4W9cKSKRI0VkDDqamm0OobHekNChbNes6KXQYfPybw83KN8wVdjpuXcC%2Bj%2F4KcMtOv9MICIgMwGOqUBlLPRKmyJMd0EvRfNx71TtueEGA8vtM4HoBx%2B6ug6aEtEVD1%2BNc%2BqoUgjISQpZeUNo5ImH8OJrt%2BBU3HIKoBd34vTTA%2BRPQsacuICYvjKkHAKbUQnVFed7LdW9t742ZHWA5RoanYEEeY05sv7yO1CAjrQXcNV%2BMSOQEXHcK7BHJjjzQoqNHK0RGb2yeqwSL7Ye6BecIDWNqTmut85enGPT62FJX8T&X-Amz-Signature=74d41c24de70295f8d977a5b681146d387ffd7c86481d911cee0450add2d09a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHTCFKF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD7UkqMez3qi%2Fy3%2B5Xq5P8GgbrRmy3jkPk3Eb%2BbZfCcPAIgREUDbdCmhnoGaJB9Psa66WQq%2FmmtFIursuAMeiQOHUoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCERGV66T%2BXUEXU5uyrcA%2FHbkcHe9iKrPokROzBmk1CKnQr11fHM4gMvfBGMvmTFiiRX9iGQJwad6mVWu8Ow5vUOXpRkk%2FuJOFo58rAfh6OmPnPUYORlVllAwKo5QJlUCHLLIymJyqD1QN4sehWeIBhlksk0W126EBSLyFvcj0FP3ksCBMmsUlqhb0dbMLP1W%2Fqi%2BCW%2BhLEvOp86RbFoN7chBeRdAikIPNVzWZ%2FnRxsI%2F3eGQsz2SetdDrfBI0por0QQANjqoeoQgHLaIsyrfuRu6xcR2g8yW5NFS33wu%2FQpIBKI%2Be1pAEnYm34pkKK16Ewh0uuw7%2BoIU%2F1oLIdlNi%2FhPkKiWuH%2Bocf0avLbbsSB5vGW8nUBzeslLUjeMTnXJO8crpa5qkZDxXNu6sdZakOUOIaY3i8MhMf80mAG%2BIO7ZixCPVkhGpY719jej%2FZjMQ%2BC%2FteJcf86T03NfW6H96kwxUNcGUa%2Feh6nzSLGgGH7N5nCxASMKLWZn6ACm3vfCgQTzs2sG4WSkYLbfr0d374juRNSyd7BLQbFOzMmMcPLodZBopFmpr0gX52DyBm097o2wXxOegfVG4W9cKSKRI0VkDDqamm0OobHekNChbNes6KXQYfPybw83KN8wVdjpuXcC%2Bj%2F4KcMtOv9MICIgMwGOqUBlLPRKmyJMd0EvRfNx71TtueEGA8vtM4HoBx%2B6ug6aEtEVD1%2BNc%2BqoUgjISQpZeUNo5ImH8OJrt%2BBU3HIKoBd34vTTA%2BRPQsacuICYvjKkHAKbUQnVFed7LdW9t742ZHWA5RoanYEEeY05sv7yO1CAjrQXcNV%2BMSOQEXHcK7BHJjjzQoqNHK0RGb2yeqwSL7Ye6BecIDWNqTmut85enGPT62FJX8T&X-Amz-Signature=bd13cf1cc5a52beee030506097ec10fc8b0ec6c469ecb320976b4c21294efb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHTCFKF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD7UkqMez3qi%2Fy3%2B5Xq5P8GgbrRmy3jkPk3Eb%2BbZfCcPAIgREUDbdCmhnoGaJB9Psa66WQq%2FmmtFIursuAMeiQOHUoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCERGV66T%2BXUEXU5uyrcA%2FHbkcHe9iKrPokROzBmk1CKnQr11fHM4gMvfBGMvmTFiiRX9iGQJwad6mVWu8Ow5vUOXpRkk%2FuJOFo58rAfh6OmPnPUYORlVllAwKo5QJlUCHLLIymJyqD1QN4sehWeIBhlksk0W126EBSLyFvcj0FP3ksCBMmsUlqhb0dbMLP1W%2Fqi%2BCW%2BhLEvOp86RbFoN7chBeRdAikIPNVzWZ%2FnRxsI%2F3eGQsz2SetdDrfBI0por0QQANjqoeoQgHLaIsyrfuRu6xcR2g8yW5NFS33wu%2FQpIBKI%2Be1pAEnYm34pkKK16Ewh0uuw7%2BoIU%2F1oLIdlNi%2FhPkKiWuH%2Bocf0avLbbsSB5vGW8nUBzeslLUjeMTnXJO8crpa5qkZDxXNu6sdZakOUOIaY3i8MhMf80mAG%2BIO7ZixCPVkhGpY719jej%2FZjMQ%2BC%2FteJcf86T03NfW6H96kwxUNcGUa%2Feh6nzSLGgGH7N5nCxASMKLWZn6ACm3vfCgQTzs2sG4WSkYLbfr0d374juRNSyd7BLQbFOzMmMcPLodZBopFmpr0gX52DyBm097o2wXxOegfVG4W9cKSKRI0VkDDqamm0OobHekNChbNes6KXQYfPybw83KN8wVdjpuXcC%2Bj%2F4KcMtOv9MICIgMwGOqUBlLPRKmyJMd0EvRfNx71TtueEGA8vtM4HoBx%2B6ug6aEtEVD1%2BNc%2BqoUgjISQpZeUNo5ImH8OJrt%2BBU3HIKoBd34vTTA%2BRPQsacuICYvjKkHAKbUQnVFed7LdW9t742ZHWA5RoanYEEeY05sv7yO1CAjrQXcNV%2BMSOQEXHcK7BHJjjzQoqNHK0RGb2yeqwSL7Ye6BecIDWNqTmut85enGPT62FJX8T&X-Amz-Signature=4c95fcd81f5104adad8be325ec7a69f736a0011113190224cbc7d2d28cbfe5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHTCFKF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD7UkqMez3qi%2Fy3%2B5Xq5P8GgbrRmy3jkPk3Eb%2BbZfCcPAIgREUDbdCmhnoGaJB9Psa66WQq%2FmmtFIursuAMeiQOHUoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCERGV66T%2BXUEXU5uyrcA%2FHbkcHe9iKrPokROzBmk1CKnQr11fHM4gMvfBGMvmTFiiRX9iGQJwad6mVWu8Ow5vUOXpRkk%2FuJOFo58rAfh6OmPnPUYORlVllAwKo5QJlUCHLLIymJyqD1QN4sehWeIBhlksk0W126EBSLyFvcj0FP3ksCBMmsUlqhb0dbMLP1W%2Fqi%2BCW%2BhLEvOp86RbFoN7chBeRdAikIPNVzWZ%2FnRxsI%2F3eGQsz2SetdDrfBI0por0QQANjqoeoQgHLaIsyrfuRu6xcR2g8yW5NFS33wu%2FQpIBKI%2Be1pAEnYm34pkKK16Ewh0uuw7%2BoIU%2F1oLIdlNi%2FhPkKiWuH%2Bocf0avLbbsSB5vGW8nUBzeslLUjeMTnXJO8crpa5qkZDxXNu6sdZakOUOIaY3i8MhMf80mAG%2BIO7ZixCPVkhGpY719jej%2FZjMQ%2BC%2FteJcf86T03NfW6H96kwxUNcGUa%2Feh6nzSLGgGH7N5nCxASMKLWZn6ACm3vfCgQTzs2sG4WSkYLbfr0d374juRNSyd7BLQbFOzMmMcPLodZBopFmpr0gX52DyBm097o2wXxOegfVG4W9cKSKRI0VkDDqamm0OobHekNChbNes6KXQYfPybw83KN8wVdjpuXcC%2Bj%2F4KcMtOv9MICIgMwGOqUBlLPRKmyJMd0EvRfNx71TtueEGA8vtM4HoBx%2B6ug6aEtEVD1%2BNc%2BqoUgjISQpZeUNo5ImH8OJrt%2BBU3HIKoBd34vTTA%2BRPQsacuICYvjKkHAKbUQnVFed7LdW9t742ZHWA5RoanYEEeY05sv7yO1CAjrQXcNV%2BMSOQEXHcK7BHJjjzQoqNHK0RGb2yeqwSL7Ye6BecIDWNqTmut85enGPT62FJX8T&X-Amz-Signature=a1ec46d96de0fd13481727d9a1cdb4ae554f2fd0deef143d70b5a435a96ca437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHTCFKF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD7UkqMez3qi%2Fy3%2B5Xq5P8GgbrRmy3jkPk3Eb%2BbZfCcPAIgREUDbdCmhnoGaJB9Psa66WQq%2FmmtFIursuAMeiQOHUoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCERGV66T%2BXUEXU5uyrcA%2FHbkcHe9iKrPokROzBmk1CKnQr11fHM4gMvfBGMvmTFiiRX9iGQJwad6mVWu8Ow5vUOXpRkk%2FuJOFo58rAfh6OmPnPUYORlVllAwKo5QJlUCHLLIymJyqD1QN4sehWeIBhlksk0W126EBSLyFvcj0FP3ksCBMmsUlqhb0dbMLP1W%2Fqi%2BCW%2BhLEvOp86RbFoN7chBeRdAikIPNVzWZ%2FnRxsI%2F3eGQsz2SetdDrfBI0por0QQANjqoeoQgHLaIsyrfuRu6xcR2g8yW5NFS33wu%2FQpIBKI%2Be1pAEnYm34pkKK16Ewh0uuw7%2BoIU%2F1oLIdlNi%2FhPkKiWuH%2Bocf0avLbbsSB5vGW8nUBzeslLUjeMTnXJO8crpa5qkZDxXNu6sdZakOUOIaY3i8MhMf80mAG%2BIO7ZixCPVkhGpY719jej%2FZjMQ%2BC%2FteJcf86T03NfW6H96kwxUNcGUa%2Feh6nzSLGgGH7N5nCxASMKLWZn6ACm3vfCgQTzs2sG4WSkYLbfr0d374juRNSyd7BLQbFOzMmMcPLodZBopFmpr0gX52DyBm097o2wXxOegfVG4W9cKSKRI0VkDDqamm0OobHekNChbNes6KXQYfPybw83KN8wVdjpuXcC%2Bj%2F4KcMtOv9MICIgMwGOqUBlLPRKmyJMd0EvRfNx71TtueEGA8vtM4HoBx%2B6ug6aEtEVD1%2BNc%2BqoUgjISQpZeUNo5ImH8OJrt%2BBU3HIKoBd34vTTA%2BRPQsacuICYvjKkHAKbUQnVFed7LdW9t742ZHWA5RoanYEEeY05sv7yO1CAjrQXcNV%2BMSOQEXHcK7BHJjjzQoqNHK0RGb2yeqwSL7Ye6BecIDWNqTmut85enGPT62FJX8T&X-Amz-Signature=0929bc45bef399805290d881b35b3e40bf9e8df57055cc3377435b15f699e9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHTCFKF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD7UkqMez3qi%2Fy3%2B5Xq5P8GgbrRmy3jkPk3Eb%2BbZfCcPAIgREUDbdCmhnoGaJB9Psa66WQq%2FmmtFIursuAMeiQOHUoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCERGV66T%2BXUEXU5uyrcA%2FHbkcHe9iKrPokROzBmk1CKnQr11fHM4gMvfBGMvmTFiiRX9iGQJwad6mVWu8Ow5vUOXpRkk%2FuJOFo58rAfh6OmPnPUYORlVllAwKo5QJlUCHLLIymJyqD1QN4sehWeIBhlksk0W126EBSLyFvcj0FP3ksCBMmsUlqhb0dbMLP1W%2Fqi%2BCW%2BhLEvOp86RbFoN7chBeRdAikIPNVzWZ%2FnRxsI%2F3eGQsz2SetdDrfBI0por0QQANjqoeoQgHLaIsyrfuRu6xcR2g8yW5NFS33wu%2FQpIBKI%2Be1pAEnYm34pkKK16Ewh0uuw7%2BoIU%2F1oLIdlNi%2FhPkKiWuH%2Bocf0avLbbsSB5vGW8nUBzeslLUjeMTnXJO8crpa5qkZDxXNu6sdZakOUOIaY3i8MhMf80mAG%2BIO7ZixCPVkhGpY719jej%2FZjMQ%2BC%2FteJcf86T03NfW6H96kwxUNcGUa%2Feh6nzSLGgGH7N5nCxASMKLWZn6ACm3vfCgQTzs2sG4WSkYLbfr0d374juRNSyd7BLQbFOzMmMcPLodZBopFmpr0gX52DyBm097o2wXxOegfVG4W9cKSKRI0VkDDqamm0OobHekNChbNes6KXQYfPybw83KN8wVdjpuXcC%2Bj%2F4KcMtOv9MICIgMwGOqUBlLPRKmyJMd0EvRfNx71TtueEGA8vtM4HoBx%2B6ug6aEtEVD1%2BNc%2BqoUgjISQpZeUNo5ImH8OJrt%2BBU3HIKoBd34vTTA%2BRPQsacuICYvjKkHAKbUQnVFed7LdW9t742ZHWA5RoanYEEeY05sv7yO1CAjrQXcNV%2BMSOQEXHcK7BHJjjzQoqNHK0RGb2yeqwSL7Ye6BecIDWNqTmut85enGPT62FJX8T&X-Amz-Signature=1542e1e51cbf7b03628abc28260faaad7df1410f41e3aa0981ed3648c25ccc30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

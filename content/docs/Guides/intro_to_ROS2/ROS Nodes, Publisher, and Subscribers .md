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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEAGXLW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBmS2vIxjtAe%2FGyFnzd20eegXU3lwTgy49wfX05fy4GwAiAzHCuUfoy%2FfkMcA22I83eIfynODruWIbyhqmrnGByMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0e6gSvjZA7HFiUD%2FKtwD8eOa4jhtN1PSnVNqofrWw8PSzGKced%2BqXH8sUYxv43OtvABFuA8YEPdIlUtAGTeMmEqE4DzvLwlrZMbQQEb9y1mnsEv4s%2Fr9WSxAfWWjSqddQoKr4bA0wgPeY66TMwzemBuOueMsqTjv7uPVoCmaxktzD03%2BuvxTUHH5Svloc%2B9M0xmFLHjakZ5LqOdHA9PJFw9ojIFf2XpGg0jiuDt%2Bs0n8lRVF8qqOdDEMPMIYbTySaJvUOzYrizLhwW9AyoKCnDtPg5UQfwiPZlC8ZthSQTsFVZNzB7IgzyQW%2FBRqgWC%2BhRL4Bj7Tj%2FzQqTWYkd4ZobaAwXNkrigodYBcEpD8JO8KtC%2F1uYpWg5Epb4H9kqqV0bto%2BjFx5qu4X8vNdpXq6FWfdK%2FNUaJpnSJdJQpeJ2H%2FC8znGeN26S4m6Ixlk7c6VejfPyPQUFk7m%2FpfS5bjxTCWvtzp%2BUTJtMmDnd0qDIG7bRwpYYLlugMC5X%2FDBh15CfaE68aohP0%2FdldERSWkWLQJju4XtqqQA7J%2B2W1BrniwX2PKKCdZgVOZCfrZDkp0fvffj1D5iyPqPiE4LZX8uVMiCGSIGNUTd7cfSPieqmhrmwyTl6cMurJHeK9tdMRBZK3UDv2VC91AcdIwnoqwvgY6pgFjqSTMTRJFxSy27J8%2FOy5L0nanui8lBcQOiVeVr29leuua0Po8ZnliEju2z53A2Koj56%2BrpYXh%2BNI5xXJQ6Q4jJ%2FAOgjxmYBMFBd9Vy1nKbAwZl3i0dMY2aLHS%2FUBPF9mzB3vLLgHb0oTp2hAZ6TrG0iMkx260O4BB6W32Lro%2FX4X2DxVJRY1RTfLoHzJxUlT9uL9pQKfzYbISuXGsxbJJTsw4MZur&X-Amz-Signature=e2d15d5a46f59bf2d3b68a7615422561b63d42481c82cd843ddc2f81f4e66cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEAGXLW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBmS2vIxjtAe%2FGyFnzd20eegXU3lwTgy49wfX05fy4GwAiAzHCuUfoy%2FfkMcA22I83eIfynODruWIbyhqmrnGByMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0e6gSvjZA7HFiUD%2FKtwD8eOa4jhtN1PSnVNqofrWw8PSzGKced%2BqXH8sUYxv43OtvABFuA8YEPdIlUtAGTeMmEqE4DzvLwlrZMbQQEb9y1mnsEv4s%2Fr9WSxAfWWjSqddQoKr4bA0wgPeY66TMwzemBuOueMsqTjv7uPVoCmaxktzD03%2BuvxTUHH5Svloc%2B9M0xmFLHjakZ5LqOdHA9PJFw9ojIFf2XpGg0jiuDt%2Bs0n8lRVF8qqOdDEMPMIYbTySaJvUOzYrizLhwW9AyoKCnDtPg5UQfwiPZlC8ZthSQTsFVZNzB7IgzyQW%2FBRqgWC%2BhRL4Bj7Tj%2FzQqTWYkd4ZobaAwXNkrigodYBcEpD8JO8KtC%2F1uYpWg5Epb4H9kqqV0bto%2BjFx5qu4X8vNdpXq6FWfdK%2FNUaJpnSJdJQpeJ2H%2FC8znGeN26S4m6Ixlk7c6VejfPyPQUFk7m%2FpfS5bjxTCWvtzp%2BUTJtMmDnd0qDIG7bRwpYYLlugMC5X%2FDBh15CfaE68aohP0%2FdldERSWkWLQJju4XtqqQA7J%2B2W1BrniwX2PKKCdZgVOZCfrZDkp0fvffj1D5iyPqPiE4LZX8uVMiCGSIGNUTd7cfSPieqmhrmwyTl6cMurJHeK9tdMRBZK3UDv2VC91AcdIwnoqwvgY6pgFjqSTMTRJFxSy27J8%2FOy5L0nanui8lBcQOiVeVr29leuua0Po8ZnliEju2z53A2Koj56%2BrpYXh%2BNI5xXJQ6Q4jJ%2FAOgjxmYBMFBd9Vy1nKbAwZl3i0dMY2aLHS%2FUBPF9mzB3vLLgHb0oTp2hAZ6TrG0iMkx260O4BB6W32Lro%2FX4X2DxVJRY1RTfLoHzJxUlT9uL9pQKfzYbISuXGsxbJJTsw4MZur&X-Amz-Signature=4ed1f92664a18d017cba6c383f541e3e9036e19c6423e5f52dcda0ceaa71265e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEAGXLW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBmS2vIxjtAe%2FGyFnzd20eegXU3lwTgy49wfX05fy4GwAiAzHCuUfoy%2FfkMcA22I83eIfynODruWIbyhqmrnGByMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0e6gSvjZA7HFiUD%2FKtwD8eOa4jhtN1PSnVNqofrWw8PSzGKced%2BqXH8sUYxv43OtvABFuA8YEPdIlUtAGTeMmEqE4DzvLwlrZMbQQEb9y1mnsEv4s%2Fr9WSxAfWWjSqddQoKr4bA0wgPeY66TMwzemBuOueMsqTjv7uPVoCmaxktzD03%2BuvxTUHH5Svloc%2B9M0xmFLHjakZ5LqOdHA9PJFw9ojIFf2XpGg0jiuDt%2Bs0n8lRVF8qqOdDEMPMIYbTySaJvUOzYrizLhwW9AyoKCnDtPg5UQfwiPZlC8ZthSQTsFVZNzB7IgzyQW%2FBRqgWC%2BhRL4Bj7Tj%2FzQqTWYkd4ZobaAwXNkrigodYBcEpD8JO8KtC%2F1uYpWg5Epb4H9kqqV0bto%2BjFx5qu4X8vNdpXq6FWfdK%2FNUaJpnSJdJQpeJ2H%2FC8znGeN26S4m6Ixlk7c6VejfPyPQUFk7m%2FpfS5bjxTCWvtzp%2BUTJtMmDnd0qDIG7bRwpYYLlugMC5X%2FDBh15CfaE68aohP0%2FdldERSWkWLQJju4XtqqQA7J%2B2W1BrniwX2PKKCdZgVOZCfrZDkp0fvffj1D5iyPqPiE4LZX8uVMiCGSIGNUTd7cfSPieqmhrmwyTl6cMurJHeK9tdMRBZK3UDv2VC91AcdIwnoqwvgY6pgFjqSTMTRJFxSy27J8%2FOy5L0nanui8lBcQOiVeVr29leuua0Po8ZnliEju2z53A2Koj56%2BrpYXh%2BNI5xXJQ6Q4jJ%2FAOgjxmYBMFBd9Vy1nKbAwZl3i0dMY2aLHS%2FUBPF9mzB3vLLgHb0oTp2hAZ6TrG0iMkx260O4BB6W32Lro%2FX4X2DxVJRY1RTfLoHzJxUlT9uL9pQKfzYbISuXGsxbJJTsw4MZur&X-Amz-Signature=dd7977361d1976dd50efc053eba92138281105a16597d5e0afcf4a349247012f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEAGXLW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBmS2vIxjtAe%2FGyFnzd20eegXU3lwTgy49wfX05fy4GwAiAzHCuUfoy%2FfkMcA22I83eIfynODruWIbyhqmrnGByMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0e6gSvjZA7HFiUD%2FKtwD8eOa4jhtN1PSnVNqofrWw8PSzGKced%2BqXH8sUYxv43OtvABFuA8YEPdIlUtAGTeMmEqE4DzvLwlrZMbQQEb9y1mnsEv4s%2Fr9WSxAfWWjSqddQoKr4bA0wgPeY66TMwzemBuOueMsqTjv7uPVoCmaxktzD03%2BuvxTUHH5Svloc%2B9M0xmFLHjakZ5LqOdHA9PJFw9ojIFf2XpGg0jiuDt%2Bs0n8lRVF8qqOdDEMPMIYbTySaJvUOzYrizLhwW9AyoKCnDtPg5UQfwiPZlC8ZthSQTsFVZNzB7IgzyQW%2FBRqgWC%2BhRL4Bj7Tj%2FzQqTWYkd4ZobaAwXNkrigodYBcEpD8JO8KtC%2F1uYpWg5Epb4H9kqqV0bto%2BjFx5qu4X8vNdpXq6FWfdK%2FNUaJpnSJdJQpeJ2H%2FC8znGeN26S4m6Ixlk7c6VejfPyPQUFk7m%2FpfS5bjxTCWvtzp%2BUTJtMmDnd0qDIG7bRwpYYLlugMC5X%2FDBh15CfaE68aohP0%2FdldERSWkWLQJju4XtqqQA7J%2B2W1BrniwX2PKKCdZgVOZCfrZDkp0fvffj1D5iyPqPiE4LZX8uVMiCGSIGNUTd7cfSPieqmhrmwyTl6cMurJHeK9tdMRBZK3UDv2VC91AcdIwnoqwvgY6pgFjqSTMTRJFxSy27J8%2FOy5L0nanui8lBcQOiVeVr29leuua0Po8ZnliEju2z53A2Koj56%2BrpYXh%2BNI5xXJQ6Q4jJ%2FAOgjxmYBMFBd9Vy1nKbAwZl3i0dMY2aLHS%2FUBPF9mzB3vLLgHb0oTp2hAZ6TrG0iMkx260O4BB6W32Lro%2FX4X2DxVJRY1RTfLoHzJxUlT9uL9pQKfzYbISuXGsxbJJTsw4MZur&X-Amz-Signature=663c3ea0055768ab3fd0fea8df531a051f2e05b47bd98152a36d3a05e6db0326&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEAGXLW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBmS2vIxjtAe%2FGyFnzd20eegXU3lwTgy49wfX05fy4GwAiAzHCuUfoy%2FfkMcA22I83eIfynODruWIbyhqmrnGByMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0e6gSvjZA7HFiUD%2FKtwD8eOa4jhtN1PSnVNqofrWw8PSzGKced%2BqXH8sUYxv43OtvABFuA8YEPdIlUtAGTeMmEqE4DzvLwlrZMbQQEb9y1mnsEv4s%2Fr9WSxAfWWjSqddQoKr4bA0wgPeY66TMwzemBuOueMsqTjv7uPVoCmaxktzD03%2BuvxTUHH5Svloc%2B9M0xmFLHjakZ5LqOdHA9PJFw9ojIFf2XpGg0jiuDt%2Bs0n8lRVF8qqOdDEMPMIYbTySaJvUOzYrizLhwW9AyoKCnDtPg5UQfwiPZlC8ZthSQTsFVZNzB7IgzyQW%2FBRqgWC%2BhRL4Bj7Tj%2FzQqTWYkd4ZobaAwXNkrigodYBcEpD8JO8KtC%2F1uYpWg5Epb4H9kqqV0bto%2BjFx5qu4X8vNdpXq6FWfdK%2FNUaJpnSJdJQpeJ2H%2FC8znGeN26S4m6Ixlk7c6VejfPyPQUFk7m%2FpfS5bjxTCWvtzp%2BUTJtMmDnd0qDIG7bRwpYYLlugMC5X%2FDBh15CfaE68aohP0%2FdldERSWkWLQJju4XtqqQA7J%2B2W1BrniwX2PKKCdZgVOZCfrZDkp0fvffj1D5iyPqPiE4LZX8uVMiCGSIGNUTd7cfSPieqmhrmwyTl6cMurJHeK9tdMRBZK3UDv2VC91AcdIwnoqwvgY6pgFjqSTMTRJFxSy27J8%2FOy5L0nanui8lBcQOiVeVr29leuua0Po8ZnliEju2z53A2Koj56%2BrpYXh%2BNI5xXJQ6Q4jJ%2FAOgjxmYBMFBd9Vy1nKbAwZl3i0dMY2aLHS%2FUBPF9mzB3vLLgHb0oTp2hAZ6TrG0iMkx260O4BB6W32Lro%2FX4X2DxVJRY1RTfLoHzJxUlT9uL9pQKfzYbISuXGsxbJJTsw4MZur&X-Amz-Signature=72500838f2e48f328acac64a81ed3e5512e3e358e9a9c7a6a1e81490bb50fe74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEAGXLW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBmS2vIxjtAe%2FGyFnzd20eegXU3lwTgy49wfX05fy4GwAiAzHCuUfoy%2FfkMcA22I83eIfynODruWIbyhqmrnGByMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0e6gSvjZA7HFiUD%2FKtwD8eOa4jhtN1PSnVNqofrWw8PSzGKced%2BqXH8sUYxv43OtvABFuA8YEPdIlUtAGTeMmEqE4DzvLwlrZMbQQEb9y1mnsEv4s%2Fr9WSxAfWWjSqddQoKr4bA0wgPeY66TMwzemBuOueMsqTjv7uPVoCmaxktzD03%2BuvxTUHH5Svloc%2B9M0xmFLHjakZ5LqOdHA9PJFw9ojIFf2XpGg0jiuDt%2Bs0n8lRVF8qqOdDEMPMIYbTySaJvUOzYrizLhwW9AyoKCnDtPg5UQfwiPZlC8ZthSQTsFVZNzB7IgzyQW%2FBRqgWC%2BhRL4Bj7Tj%2FzQqTWYkd4ZobaAwXNkrigodYBcEpD8JO8KtC%2F1uYpWg5Epb4H9kqqV0bto%2BjFx5qu4X8vNdpXq6FWfdK%2FNUaJpnSJdJQpeJ2H%2FC8znGeN26S4m6Ixlk7c6VejfPyPQUFk7m%2FpfS5bjxTCWvtzp%2BUTJtMmDnd0qDIG7bRwpYYLlugMC5X%2FDBh15CfaE68aohP0%2FdldERSWkWLQJju4XtqqQA7J%2B2W1BrniwX2PKKCdZgVOZCfrZDkp0fvffj1D5iyPqPiE4LZX8uVMiCGSIGNUTd7cfSPieqmhrmwyTl6cMurJHeK9tdMRBZK3UDv2VC91AcdIwnoqwvgY6pgFjqSTMTRJFxSy27J8%2FOy5L0nanui8lBcQOiVeVr29leuua0Po8ZnliEju2z53A2Koj56%2BrpYXh%2BNI5xXJQ6Q4jJ%2FAOgjxmYBMFBd9Vy1nKbAwZl3i0dMY2aLHS%2FUBPF9mzB3vLLgHb0oTp2hAZ6TrG0iMkx260O4BB6W32Lro%2FX4X2DxVJRY1RTfLoHzJxUlT9uL9pQKfzYbISuXGsxbJJTsw4MZur&X-Amz-Signature=b423a88fcb9fafea24de82311b0211d9c0fb84baeb0181c2aad4fe8285068a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEAGXLW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBmS2vIxjtAe%2FGyFnzd20eegXU3lwTgy49wfX05fy4GwAiAzHCuUfoy%2FfkMcA22I83eIfynODruWIbyhqmrnGByMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0e6gSvjZA7HFiUD%2FKtwD8eOa4jhtN1PSnVNqofrWw8PSzGKced%2BqXH8sUYxv43OtvABFuA8YEPdIlUtAGTeMmEqE4DzvLwlrZMbQQEb9y1mnsEv4s%2Fr9WSxAfWWjSqddQoKr4bA0wgPeY66TMwzemBuOueMsqTjv7uPVoCmaxktzD03%2BuvxTUHH5Svloc%2B9M0xmFLHjakZ5LqOdHA9PJFw9ojIFf2XpGg0jiuDt%2Bs0n8lRVF8qqOdDEMPMIYbTySaJvUOzYrizLhwW9AyoKCnDtPg5UQfwiPZlC8ZthSQTsFVZNzB7IgzyQW%2FBRqgWC%2BhRL4Bj7Tj%2FzQqTWYkd4ZobaAwXNkrigodYBcEpD8JO8KtC%2F1uYpWg5Epb4H9kqqV0bto%2BjFx5qu4X8vNdpXq6FWfdK%2FNUaJpnSJdJQpeJ2H%2FC8znGeN26S4m6Ixlk7c6VejfPyPQUFk7m%2FpfS5bjxTCWvtzp%2BUTJtMmDnd0qDIG7bRwpYYLlugMC5X%2FDBh15CfaE68aohP0%2FdldERSWkWLQJju4XtqqQA7J%2B2W1BrniwX2PKKCdZgVOZCfrZDkp0fvffj1D5iyPqPiE4LZX8uVMiCGSIGNUTd7cfSPieqmhrmwyTl6cMurJHeK9tdMRBZK3UDv2VC91AcdIwnoqwvgY6pgFjqSTMTRJFxSy27J8%2FOy5L0nanui8lBcQOiVeVr29leuua0Po8ZnliEju2z53A2Koj56%2BrpYXh%2BNI5xXJQ6Q4jJ%2FAOgjxmYBMFBd9Vy1nKbAwZl3i0dMY2aLHS%2FUBPF9mzB3vLLgHb0oTp2hAZ6TrG0iMkx260O4BB6W32Lro%2FX4X2DxVJRY1RTfLoHzJxUlT9uL9pQKfzYbISuXGsxbJJTsw4MZur&X-Amz-Signature=07d911b0fa63f25db0799fc175dd726c45c444434fc0518d91d83752bddda342&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEAGXLW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBmS2vIxjtAe%2FGyFnzd20eegXU3lwTgy49wfX05fy4GwAiAzHCuUfoy%2FfkMcA22I83eIfynODruWIbyhqmrnGByMayr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0e6gSvjZA7HFiUD%2FKtwD8eOa4jhtN1PSnVNqofrWw8PSzGKced%2BqXH8sUYxv43OtvABFuA8YEPdIlUtAGTeMmEqE4DzvLwlrZMbQQEb9y1mnsEv4s%2Fr9WSxAfWWjSqddQoKr4bA0wgPeY66TMwzemBuOueMsqTjv7uPVoCmaxktzD03%2BuvxTUHH5Svloc%2B9M0xmFLHjakZ5LqOdHA9PJFw9ojIFf2XpGg0jiuDt%2Bs0n8lRVF8qqOdDEMPMIYbTySaJvUOzYrizLhwW9AyoKCnDtPg5UQfwiPZlC8ZthSQTsFVZNzB7IgzyQW%2FBRqgWC%2BhRL4Bj7Tj%2FzQqTWYkd4ZobaAwXNkrigodYBcEpD8JO8KtC%2F1uYpWg5Epb4H9kqqV0bto%2BjFx5qu4X8vNdpXq6FWfdK%2FNUaJpnSJdJQpeJ2H%2FC8znGeN26S4m6Ixlk7c6VejfPyPQUFk7m%2FpfS5bjxTCWvtzp%2BUTJtMmDnd0qDIG7bRwpYYLlugMC5X%2FDBh15CfaE68aohP0%2FdldERSWkWLQJju4XtqqQA7J%2B2W1BrniwX2PKKCdZgVOZCfrZDkp0fvffj1D5iyPqPiE4LZX8uVMiCGSIGNUTd7cfSPieqmhrmwyTl6cMurJHeK9tdMRBZK3UDv2VC91AcdIwnoqwvgY6pgFjqSTMTRJFxSy27J8%2FOy5L0nanui8lBcQOiVeVr29leuua0Po8ZnliEju2z53A2Koj56%2BrpYXh%2BNI5xXJQ6Q4jJ%2FAOgjxmYBMFBd9Vy1nKbAwZl3i0dMY2aLHS%2FUBPF9mzB3vLLgHb0oTp2hAZ6TrG0iMkx260O4BB6W32Lro%2FX4X2DxVJRY1RTfLoHzJxUlT9uL9pQKfzYbISuXGsxbJJTsw4MZur&X-Amz-Signature=de75449fe3eff9a1822f85e308345f1aae281363a58a6f13a67932e44babe4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

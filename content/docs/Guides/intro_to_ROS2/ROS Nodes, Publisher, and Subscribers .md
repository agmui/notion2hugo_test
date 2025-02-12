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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLPGJPL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2N6o8z7HAqho%2F31VmOs1wrLjaRLskGpnJZo6C7c%2BAVAIgbbzMqfdgzJ2N13nOHVMCu3jLHWqiglemlEuuNQynibgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF94i%2B2DfdL8KOWt7yrcA%2BMnm9WNXFPiqJuOwr2%2FtScf7YEyLDEB5DhMpYnW4Xg7639DpHEgce9PBsbs62MfQmXXdUIOBg96hnKFnjRrbVOoA6aY%2BHVqHmZORoXXdx6RGBHa7qzoMboW9vSZrGpOZs19NBlzp9tws4b3PDc8FTSaM0%2Fj0d9sNyQwWPVmT5o39ZBU9yKaLTo8wUTLxfRsDgkV2BFFmgbFcQnaySpM32qrUMpM3ZJVhTWY7tBWSU64S%2F3EBqsKGRfHhhyeE9iDtfIJeH%2B%2BR1E1tKwRBEWy%2F%2F%2F90PS6DVT1BXLKNdghiaV0%2FJhwFocsngGFm7oWYFMsYFM9ebKXZsBECh8h2F9XUSteP6QvWLqhevmOjr2eXc8F5m%2B9PEy%2FT4sj7riO6yClk%2FgJoQ32CPQpdKcQSJaifpLMPGnmBXZuUMQ76gWndgAY0%2FobldsK6ewp0CsjIllTsURkRg%2BIDzZZBpu28%2BL7RsPdJemMq05oLGkdfEmoEtaA8SktLfZMM8N5u%2BSn%2BPtxuT5e7m2dbAuS9ETikIy38eLIRTwqiZvD1UldrIjy2XHxusehjFRJY40C0S4CDpvLHC36xy7Afa%2Ber6n0J58GrqaaUoZIN5r45vmw2x9a4uzh9Y7s8I1%2FuEJNrAvvMJitsr0GOqUBBQA63F6H8g8mWpvkxewsO1bKdoeF96F%2BxyTLojs%2FX%2FE5%2FmJTpMedjzeL4JPsc1iW3SWUm6aE2WbMfARHsgCzBlhfVJnfjTZYKIem5v0Cjxc%2F4ztOvoq%2Fg54YOsfN1GFPS%2B5ROgAUsX8osidQDh4q06GS6jufpu35ai1c27LYJXQBHY6Yv%2BnHxJNQ02f3qkhlEkm3waZiPStvKYDAPTzh8tloPbcQ&X-Amz-Signature=92ed302e2bc3762949574c92275fda2f40600268c580fcb0249dae8447b9f533&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLPGJPL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2N6o8z7HAqho%2F31VmOs1wrLjaRLskGpnJZo6C7c%2BAVAIgbbzMqfdgzJ2N13nOHVMCu3jLHWqiglemlEuuNQynibgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF94i%2B2DfdL8KOWt7yrcA%2BMnm9WNXFPiqJuOwr2%2FtScf7YEyLDEB5DhMpYnW4Xg7639DpHEgce9PBsbs62MfQmXXdUIOBg96hnKFnjRrbVOoA6aY%2BHVqHmZORoXXdx6RGBHa7qzoMboW9vSZrGpOZs19NBlzp9tws4b3PDc8FTSaM0%2Fj0d9sNyQwWPVmT5o39ZBU9yKaLTo8wUTLxfRsDgkV2BFFmgbFcQnaySpM32qrUMpM3ZJVhTWY7tBWSU64S%2F3EBqsKGRfHhhyeE9iDtfIJeH%2B%2BR1E1tKwRBEWy%2F%2F%2F90PS6DVT1BXLKNdghiaV0%2FJhwFocsngGFm7oWYFMsYFM9ebKXZsBECh8h2F9XUSteP6QvWLqhevmOjr2eXc8F5m%2B9PEy%2FT4sj7riO6yClk%2FgJoQ32CPQpdKcQSJaifpLMPGnmBXZuUMQ76gWndgAY0%2FobldsK6ewp0CsjIllTsURkRg%2BIDzZZBpu28%2BL7RsPdJemMq05oLGkdfEmoEtaA8SktLfZMM8N5u%2BSn%2BPtxuT5e7m2dbAuS9ETikIy38eLIRTwqiZvD1UldrIjy2XHxusehjFRJY40C0S4CDpvLHC36xy7Afa%2Ber6n0J58GrqaaUoZIN5r45vmw2x9a4uzh9Y7s8I1%2FuEJNrAvvMJitsr0GOqUBBQA63F6H8g8mWpvkxewsO1bKdoeF96F%2BxyTLojs%2FX%2FE5%2FmJTpMedjzeL4JPsc1iW3SWUm6aE2WbMfARHsgCzBlhfVJnfjTZYKIem5v0Cjxc%2F4ztOvoq%2Fg54YOsfN1GFPS%2B5ROgAUsX8osidQDh4q06GS6jufpu35ai1c27LYJXQBHY6Yv%2BnHxJNQ02f3qkhlEkm3waZiPStvKYDAPTzh8tloPbcQ&X-Amz-Signature=8f831bc3f18c55be7f59c019dcafe74e3b873db6239520997fd09197b96404be&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLPGJPL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2N6o8z7HAqho%2F31VmOs1wrLjaRLskGpnJZo6C7c%2BAVAIgbbzMqfdgzJ2N13nOHVMCu3jLHWqiglemlEuuNQynibgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF94i%2B2DfdL8KOWt7yrcA%2BMnm9WNXFPiqJuOwr2%2FtScf7YEyLDEB5DhMpYnW4Xg7639DpHEgce9PBsbs62MfQmXXdUIOBg96hnKFnjRrbVOoA6aY%2BHVqHmZORoXXdx6RGBHa7qzoMboW9vSZrGpOZs19NBlzp9tws4b3PDc8FTSaM0%2Fj0d9sNyQwWPVmT5o39ZBU9yKaLTo8wUTLxfRsDgkV2BFFmgbFcQnaySpM32qrUMpM3ZJVhTWY7tBWSU64S%2F3EBqsKGRfHhhyeE9iDtfIJeH%2B%2BR1E1tKwRBEWy%2F%2F%2F90PS6DVT1BXLKNdghiaV0%2FJhwFocsngGFm7oWYFMsYFM9ebKXZsBECh8h2F9XUSteP6QvWLqhevmOjr2eXc8F5m%2B9PEy%2FT4sj7riO6yClk%2FgJoQ32CPQpdKcQSJaifpLMPGnmBXZuUMQ76gWndgAY0%2FobldsK6ewp0CsjIllTsURkRg%2BIDzZZBpu28%2BL7RsPdJemMq05oLGkdfEmoEtaA8SktLfZMM8N5u%2BSn%2BPtxuT5e7m2dbAuS9ETikIy38eLIRTwqiZvD1UldrIjy2XHxusehjFRJY40C0S4CDpvLHC36xy7Afa%2Ber6n0J58GrqaaUoZIN5r45vmw2x9a4uzh9Y7s8I1%2FuEJNrAvvMJitsr0GOqUBBQA63F6H8g8mWpvkxewsO1bKdoeF96F%2BxyTLojs%2FX%2FE5%2FmJTpMedjzeL4JPsc1iW3SWUm6aE2WbMfARHsgCzBlhfVJnfjTZYKIem5v0Cjxc%2F4ztOvoq%2Fg54YOsfN1GFPS%2B5ROgAUsX8osidQDh4q06GS6jufpu35ai1c27LYJXQBHY6Yv%2BnHxJNQ02f3qkhlEkm3waZiPStvKYDAPTzh8tloPbcQ&X-Amz-Signature=0e6db911eda95b533d8c1207946d0a91621f24c6ca836d5b175d1b9be847196c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLPGJPL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2N6o8z7HAqho%2F31VmOs1wrLjaRLskGpnJZo6C7c%2BAVAIgbbzMqfdgzJ2N13nOHVMCu3jLHWqiglemlEuuNQynibgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF94i%2B2DfdL8KOWt7yrcA%2BMnm9WNXFPiqJuOwr2%2FtScf7YEyLDEB5DhMpYnW4Xg7639DpHEgce9PBsbs62MfQmXXdUIOBg96hnKFnjRrbVOoA6aY%2BHVqHmZORoXXdx6RGBHa7qzoMboW9vSZrGpOZs19NBlzp9tws4b3PDc8FTSaM0%2Fj0d9sNyQwWPVmT5o39ZBU9yKaLTo8wUTLxfRsDgkV2BFFmgbFcQnaySpM32qrUMpM3ZJVhTWY7tBWSU64S%2F3EBqsKGRfHhhyeE9iDtfIJeH%2B%2BR1E1tKwRBEWy%2F%2F%2F90PS6DVT1BXLKNdghiaV0%2FJhwFocsngGFm7oWYFMsYFM9ebKXZsBECh8h2F9XUSteP6QvWLqhevmOjr2eXc8F5m%2B9PEy%2FT4sj7riO6yClk%2FgJoQ32CPQpdKcQSJaifpLMPGnmBXZuUMQ76gWndgAY0%2FobldsK6ewp0CsjIllTsURkRg%2BIDzZZBpu28%2BL7RsPdJemMq05oLGkdfEmoEtaA8SktLfZMM8N5u%2BSn%2BPtxuT5e7m2dbAuS9ETikIy38eLIRTwqiZvD1UldrIjy2XHxusehjFRJY40C0S4CDpvLHC36xy7Afa%2Ber6n0J58GrqaaUoZIN5r45vmw2x9a4uzh9Y7s8I1%2FuEJNrAvvMJitsr0GOqUBBQA63F6H8g8mWpvkxewsO1bKdoeF96F%2BxyTLojs%2FX%2FE5%2FmJTpMedjzeL4JPsc1iW3SWUm6aE2WbMfARHsgCzBlhfVJnfjTZYKIem5v0Cjxc%2F4ztOvoq%2Fg54YOsfN1GFPS%2B5ROgAUsX8osidQDh4q06GS6jufpu35ai1c27LYJXQBHY6Yv%2BnHxJNQ02f3qkhlEkm3waZiPStvKYDAPTzh8tloPbcQ&X-Amz-Signature=d9d45c3e8e87d68bb538da9d79b7a874875de4575fa00957079646e63955b4f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLPGJPL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2N6o8z7HAqho%2F31VmOs1wrLjaRLskGpnJZo6C7c%2BAVAIgbbzMqfdgzJ2N13nOHVMCu3jLHWqiglemlEuuNQynibgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF94i%2B2DfdL8KOWt7yrcA%2BMnm9WNXFPiqJuOwr2%2FtScf7YEyLDEB5DhMpYnW4Xg7639DpHEgce9PBsbs62MfQmXXdUIOBg96hnKFnjRrbVOoA6aY%2BHVqHmZORoXXdx6RGBHa7qzoMboW9vSZrGpOZs19NBlzp9tws4b3PDc8FTSaM0%2Fj0d9sNyQwWPVmT5o39ZBU9yKaLTo8wUTLxfRsDgkV2BFFmgbFcQnaySpM32qrUMpM3ZJVhTWY7tBWSU64S%2F3EBqsKGRfHhhyeE9iDtfIJeH%2B%2BR1E1tKwRBEWy%2F%2F%2F90PS6DVT1BXLKNdghiaV0%2FJhwFocsngGFm7oWYFMsYFM9ebKXZsBECh8h2F9XUSteP6QvWLqhevmOjr2eXc8F5m%2B9PEy%2FT4sj7riO6yClk%2FgJoQ32CPQpdKcQSJaifpLMPGnmBXZuUMQ76gWndgAY0%2FobldsK6ewp0CsjIllTsURkRg%2BIDzZZBpu28%2BL7RsPdJemMq05oLGkdfEmoEtaA8SktLfZMM8N5u%2BSn%2BPtxuT5e7m2dbAuS9ETikIy38eLIRTwqiZvD1UldrIjy2XHxusehjFRJY40C0S4CDpvLHC36xy7Afa%2Ber6n0J58GrqaaUoZIN5r45vmw2x9a4uzh9Y7s8I1%2FuEJNrAvvMJitsr0GOqUBBQA63F6H8g8mWpvkxewsO1bKdoeF96F%2BxyTLojs%2FX%2FE5%2FmJTpMedjzeL4JPsc1iW3SWUm6aE2WbMfARHsgCzBlhfVJnfjTZYKIem5v0Cjxc%2F4ztOvoq%2Fg54YOsfN1GFPS%2B5ROgAUsX8osidQDh4q06GS6jufpu35ai1c27LYJXQBHY6Yv%2BnHxJNQ02f3qkhlEkm3waZiPStvKYDAPTzh8tloPbcQ&X-Amz-Signature=eaa917a2bee656c1fb818789bcc39d0ed596c04f178ea2505a6e3b04ceb258ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLPGJPL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2N6o8z7HAqho%2F31VmOs1wrLjaRLskGpnJZo6C7c%2BAVAIgbbzMqfdgzJ2N13nOHVMCu3jLHWqiglemlEuuNQynibgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF94i%2B2DfdL8KOWt7yrcA%2BMnm9WNXFPiqJuOwr2%2FtScf7YEyLDEB5DhMpYnW4Xg7639DpHEgce9PBsbs62MfQmXXdUIOBg96hnKFnjRrbVOoA6aY%2BHVqHmZORoXXdx6RGBHa7qzoMboW9vSZrGpOZs19NBlzp9tws4b3PDc8FTSaM0%2Fj0d9sNyQwWPVmT5o39ZBU9yKaLTo8wUTLxfRsDgkV2BFFmgbFcQnaySpM32qrUMpM3ZJVhTWY7tBWSU64S%2F3EBqsKGRfHhhyeE9iDtfIJeH%2B%2BR1E1tKwRBEWy%2F%2F%2F90PS6DVT1BXLKNdghiaV0%2FJhwFocsngGFm7oWYFMsYFM9ebKXZsBECh8h2F9XUSteP6QvWLqhevmOjr2eXc8F5m%2B9PEy%2FT4sj7riO6yClk%2FgJoQ32CPQpdKcQSJaifpLMPGnmBXZuUMQ76gWndgAY0%2FobldsK6ewp0CsjIllTsURkRg%2BIDzZZBpu28%2BL7RsPdJemMq05oLGkdfEmoEtaA8SktLfZMM8N5u%2BSn%2BPtxuT5e7m2dbAuS9ETikIy38eLIRTwqiZvD1UldrIjy2XHxusehjFRJY40C0S4CDpvLHC36xy7Afa%2Ber6n0J58GrqaaUoZIN5r45vmw2x9a4uzh9Y7s8I1%2FuEJNrAvvMJitsr0GOqUBBQA63F6H8g8mWpvkxewsO1bKdoeF96F%2BxyTLojs%2FX%2FE5%2FmJTpMedjzeL4JPsc1iW3SWUm6aE2WbMfARHsgCzBlhfVJnfjTZYKIem5v0Cjxc%2F4ztOvoq%2Fg54YOsfN1GFPS%2B5ROgAUsX8osidQDh4q06GS6jufpu35ai1c27LYJXQBHY6Yv%2BnHxJNQ02f3qkhlEkm3waZiPStvKYDAPTzh8tloPbcQ&X-Amz-Signature=cb1e370aa071fd85ea7b703900e1cdffaf2e71f633080d7b1e57d77d6954f606&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLPGJPL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2N6o8z7HAqho%2F31VmOs1wrLjaRLskGpnJZo6C7c%2BAVAIgbbzMqfdgzJ2N13nOHVMCu3jLHWqiglemlEuuNQynibgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF94i%2B2DfdL8KOWt7yrcA%2BMnm9WNXFPiqJuOwr2%2FtScf7YEyLDEB5DhMpYnW4Xg7639DpHEgce9PBsbs62MfQmXXdUIOBg96hnKFnjRrbVOoA6aY%2BHVqHmZORoXXdx6RGBHa7qzoMboW9vSZrGpOZs19NBlzp9tws4b3PDc8FTSaM0%2Fj0d9sNyQwWPVmT5o39ZBU9yKaLTo8wUTLxfRsDgkV2BFFmgbFcQnaySpM32qrUMpM3ZJVhTWY7tBWSU64S%2F3EBqsKGRfHhhyeE9iDtfIJeH%2B%2BR1E1tKwRBEWy%2F%2F%2F90PS6DVT1BXLKNdghiaV0%2FJhwFocsngGFm7oWYFMsYFM9ebKXZsBECh8h2F9XUSteP6QvWLqhevmOjr2eXc8F5m%2B9PEy%2FT4sj7riO6yClk%2FgJoQ32CPQpdKcQSJaifpLMPGnmBXZuUMQ76gWndgAY0%2FobldsK6ewp0CsjIllTsURkRg%2BIDzZZBpu28%2BL7RsPdJemMq05oLGkdfEmoEtaA8SktLfZMM8N5u%2BSn%2BPtxuT5e7m2dbAuS9ETikIy38eLIRTwqiZvD1UldrIjy2XHxusehjFRJY40C0S4CDpvLHC36xy7Afa%2Ber6n0J58GrqaaUoZIN5r45vmw2x9a4uzh9Y7s8I1%2FuEJNrAvvMJitsr0GOqUBBQA63F6H8g8mWpvkxewsO1bKdoeF96F%2BxyTLojs%2FX%2FE5%2FmJTpMedjzeL4JPsc1iW3SWUm6aE2WbMfARHsgCzBlhfVJnfjTZYKIem5v0Cjxc%2F4ztOvoq%2Fg54YOsfN1GFPS%2B5ROgAUsX8osidQDh4q06GS6jufpu35ai1c27LYJXQBHY6Yv%2BnHxJNQ02f3qkhlEkm3waZiPStvKYDAPTzh8tloPbcQ&X-Amz-Signature=d38282aef90856e1f851473a292f3c2fa6e443cdba7d8b0ba183d795bc1796eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLPGJPL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2N6o8z7HAqho%2F31VmOs1wrLjaRLskGpnJZo6C7c%2BAVAIgbbzMqfdgzJ2N13nOHVMCu3jLHWqiglemlEuuNQynibgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF94i%2B2DfdL8KOWt7yrcA%2BMnm9WNXFPiqJuOwr2%2FtScf7YEyLDEB5DhMpYnW4Xg7639DpHEgce9PBsbs62MfQmXXdUIOBg96hnKFnjRrbVOoA6aY%2BHVqHmZORoXXdx6RGBHa7qzoMboW9vSZrGpOZs19NBlzp9tws4b3PDc8FTSaM0%2Fj0d9sNyQwWPVmT5o39ZBU9yKaLTo8wUTLxfRsDgkV2BFFmgbFcQnaySpM32qrUMpM3ZJVhTWY7tBWSU64S%2F3EBqsKGRfHhhyeE9iDtfIJeH%2B%2BR1E1tKwRBEWy%2F%2F%2F90PS6DVT1BXLKNdghiaV0%2FJhwFocsngGFm7oWYFMsYFM9ebKXZsBECh8h2F9XUSteP6QvWLqhevmOjr2eXc8F5m%2B9PEy%2FT4sj7riO6yClk%2FgJoQ32CPQpdKcQSJaifpLMPGnmBXZuUMQ76gWndgAY0%2FobldsK6ewp0CsjIllTsURkRg%2BIDzZZBpu28%2BL7RsPdJemMq05oLGkdfEmoEtaA8SktLfZMM8N5u%2BSn%2BPtxuT5e7m2dbAuS9ETikIy38eLIRTwqiZvD1UldrIjy2XHxusehjFRJY40C0S4CDpvLHC36xy7Afa%2Ber6n0J58GrqaaUoZIN5r45vmw2x9a4uzh9Y7s8I1%2FuEJNrAvvMJitsr0GOqUBBQA63F6H8g8mWpvkxewsO1bKdoeF96F%2BxyTLojs%2FX%2FE5%2FmJTpMedjzeL4JPsc1iW3SWUm6aE2WbMfARHsgCzBlhfVJnfjTZYKIem5v0Cjxc%2F4ztOvoq%2Fg54YOsfN1GFPS%2B5ROgAUsX8osidQDh4q06GS6jufpu35ai1c27LYJXQBHY6Yv%2BnHxJNQ02f3qkhlEkm3waZiPStvKYDAPTzh8tloPbcQ&X-Amz-Signature=2310630234ba8f823583f251f4d1ceb892ed45eedef283f29507dc9287dc10a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

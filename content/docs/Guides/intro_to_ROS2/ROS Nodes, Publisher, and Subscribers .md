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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEKJDO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD33ulj6TG9dJZUILx%2B%2B3SbehWMRD0BZ7zqDFpqb1wf8QIhAIFCcTr9xq9SASxyO4BljvAnYSTXpFzZUp%2B3MwfaOjZMKv8DCDEQABoMNjM3NDIzMTgzODA1IgxtF0o271mRDUwPWbQq3AOw5eOdJX55y7TqS%2FhkPkt6SWSuItktjtoxv4FLL7tYWjDBuDRud%2BtHvFuPHcTwFnf8V989wWo0GpKo%2B%2Fd%2B0NAfB7VWQU2ViJzT0CoTsqqrhONj9MzzZO0rURuIA4SgqXvBbDaSbT7D5mLEHXu0zw2VXFGq4JO4q34rM2S93vkvOBAxRxzx9B2XRWv0OXu4d%2FZAa4nDH02l%2F6Er2tL%2FE1GFSYJrHeCwQPAu4RyZDeQOPFtxu8DjtOY9TQVVDFpo%2FAaAraqIhqBYKmrnG8ngf0Q3DLrPejsyYzQGgX%2Fet0DkvoCga7DxgN4snKvmY3r%2BLfuEXVWnVWyF4hstlvhl4UV82khPUAv7f2FZVb3%2BIE8JLwnNFWFJvHdHUZxrpka1cokIYeJGscSsJ2zZb4fjPSp5bnggdBm3Thbq639eJHHdbac0LknQL%2BNrsLlwVgec9Ua7zcI5IFvBGiSPeM8%2BYMnV%2FR7jNvPM1ibkVgQ41lT1k0YLrozifS7OJk6Xbze3WRqH3ubm8Yo4gCBl47wFbuzJNr9p4rgOYbaTt9Y%2BIKroDlNEUot%2FR2QULzw3baXMiKp%2F84Ti%2FegGlac7HW%2FwvnaFgBbAIUNmcC8wR4a4Wuf2fJYx2lBJmD5PjiJcdzCOkKe%2BBjqkAbpW3k0A%2BHc%2BYbtqH2CjrZeGDTwl1l6xVvD3ozOBex63yh%2FmVbBTiztPSXm%2Fqsl70EHpRkh%2Bd9HA0ptJ%2BS%2BVdtpf4M1WfLkmdpofjsmJk8zGiVR5HnVpQnnsjPPFq3Yp2UeyyJom8iMoqibKKqpf0e23mSGcodbf7TtTlmrpCkOtY%2BQpNwRrhBxu4R5riDgy14KP25gBwj%2FOCFfBjJg5stPC3WQt&X-Amz-Signature=09bd6176eb6e10b9efde611e35895683e060f7c997d045dd96da2ff7422aabb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEKJDO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD33ulj6TG9dJZUILx%2B%2B3SbehWMRD0BZ7zqDFpqb1wf8QIhAIFCcTr9xq9SASxyO4BljvAnYSTXpFzZUp%2B3MwfaOjZMKv8DCDEQABoMNjM3NDIzMTgzODA1IgxtF0o271mRDUwPWbQq3AOw5eOdJX55y7TqS%2FhkPkt6SWSuItktjtoxv4FLL7tYWjDBuDRud%2BtHvFuPHcTwFnf8V989wWo0GpKo%2B%2Fd%2B0NAfB7VWQU2ViJzT0CoTsqqrhONj9MzzZO0rURuIA4SgqXvBbDaSbT7D5mLEHXu0zw2VXFGq4JO4q34rM2S93vkvOBAxRxzx9B2XRWv0OXu4d%2FZAa4nDH02l%2F6Er2tL%2FE1GFSYJrHeCwQPAu4RyZDeQOPFtxu8DjtOY9TQVVDFpo%2FAaAraqIhqBYKmrnG8ngf0Q3DLrPejsyYzQGgX%2Fet0DkvoCga7DxgN4snKvmY3r%2BLfuEXVWnVWyF4hstlvhl4UV82khPUAv7f2FZVb3%2BIE8JLwnNFWFJvHdHUZxrpka1cokIYeJGscSsJ2zZb4fjPSp5bnggdBm3Thbq639eJHHdbac0LknQL%2BNrsLlwVgec9Ua7zcI5IFvBGiSPeM8%2BYMnV%2FR7jNvPM1ibkVgQ41lT1k0YLrozifS7OJk6Xbze3WRqH3ubm8Yo4gCBl47wFbuzJNr9p4rgOYbaTt9Y%2BIKroDlNEUot%2FR2QULzw3baXMiKp%2F84Ti%2FegGlac7HW%2FwvnaFgBbAIUNmcC8wR4a4Wuf2fJYx2lBJmD5PjiJcdzCOkKe%2BBjqkAbpW3k0A%2BHc%2BYbtqH2CjrZeGDTwl1l6xVvD3ozOBex63yh%2FmVbBTiztPSXm%2Fqsl70EHpRkh%2Bd9HA0ptJ%2BS%2BVdtpf4M1WfLkmdpofjsmJk8zGiVR5HnVpQnnsjPPFq3Yp2UeyyJom8iMoqibKKqpf0e23mSGcodbf7TtTlmrpCkOtY%2BQpNwRrhBxu4R5riDgy14KP25gBwj%2FOCFfBjJg5stPC3WQt&X-Amz-Signature=537667f3eacc13e3fde8bba358b44900765fdd1a2d0eaefdd7acc3f65983b59d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEKJDO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD33ulj6TG9dJZUILx%2B%2B3SbehWMRD0BZ7zqDFpqb1wf8QIhAIFCcTr9xq9SASxyO4BljvAnYSTXpFzZUp%2B3MwfaOjZMKv8DCDEQABoMNjM3NDIzMTgzODA1IgxtF0o271mRDUwPWbQq3AOw5eOdJX55y7TqS%2FhkPkt6SWSuItktjtoxv4FLL7tYWjDBuDRud%2BtHvFuPHcTwFnf8V989wWo0GpKo%2B%2Fd%2B0NAfB7VWQU2ViJzT0CoTsqqrhONj9MzzZO0rURuIA4SgqXvBbDaSbT7D5mLEHXu0zw2VXFGq4JO4q34rM2S93vkvOBAxRxzx9B2XRWv0OXu4d%2FZAa4nDH02l%2F6Er2tL%2FE1GFSYJrHeCwQPAu4RyZDeQOPFtxu8DjtOY9TQVVDFpo%2FAaAraqIhqBYKmrnG8ngf0Q3DLrPejsyYzQGgX%2Fet0DkvoCga7DxgN4snKvmY3r%2BLfuEXVWnVWyF4hstlvhl4UV82khPUAv7f2FZVb3%2BIE8JLwnNFWFJvHdHUZxrpka1cokIYeJGscSsJ2zZb4fjPSp5bnggdBm3Thbq639eJHHdbac0LknQL%2BNrsLlwVgec9Ua7zcI5IFvBGiSPeM8%2BYMnV%2FR7jNvPM1ibkVgQ41lT1k0YLrozifS7OJk6Xbze3WRqH3ubm8Yo4gCBl47wFbuzJNr9p4rgOYbaTt9Y%2BIKroDlNEUot%2FR2QULzw3baXMiKp%2F84Ti%2FegGlac7HW%2FwvnaFgBbAIUNmcC8wR4a4Wuf2fJYx2lBJmD5PjiJcdzCOkKe%2BBjqkAbpW3k0A%2BHc%2BYbtqH2CjrZeGDTwl1l6xVvD3ozOBex63yh%2FmVbBTiztPSXm%2Fqsl70EHpRkh%2Bd9HA0ptJ%2BS%2BVdtpf4M1WfLkmdpofjsmJk8zGiVR5HnVpQnnsjPPFq3Yp2UeyyJom8iMoqibKKqpf0e23mSGcodbf7TtTlmrpCkOtY%2BQpNwRrhBxu4R5riDgy14KP25gBwj%2FOCFfBjJg5stPC3WQt&X-Amz-Signature=ada67a4e7bf31c6bcea00aad1103bd5e3319be67b58cbbfe2424bc519244e49b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEKJDO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD33ulj6TG9dJZUILx%2B%2B3SbehWMRD0BZ7zqDFpqb1wf8QIhAIFCcTr9xq9SASxyO4BljvAnYSTXpFzZUp%2B3MwfaOjZMKv8DCDEQABoMNjM3NDIzMTgzODA1IgxtF0o271mRDUwPWbQq3AOw5eOdJX55y7TqS%2FhkPkt6SWSuItktjtoxv4FLL7tYWjDBuDRud%2BtHvFuPHcTwFnf8V989wWo0GpKo%2B%2Fd%2B0NAfB7VWQU2ViJzT0CoTsqqrhONj9MzzZO0rURuIA4SgqXvBbDaSbT7D5mLEHXu0zw2VXFGq4JO4q34rM2S93vkvOBAxRxzx9B2XRWv0OXu4d%2FZAa4nDH02l%2F6Er2tL%2FE1GFSYJrHeCwQPAu4RyZDeQOPFtxu8DjtOY9TQVVDFpo%2FAaAraqIhqBYKmrnG8ngf0Q3DLrPejsyYzQGgX%2Fet0DkvoCga7DxgN4snKvmY3r%2BLfuEXVWnVWyF4hstlvhl4UV82khPUAv7f2FZVb3%2BIE8JLwnNFWFJvHdHUZxrpka1cokIYeJGscSsJ2zZb4fjPSp5bnggdBm3Thbq639eJHHdbac0LknQL%2BNrsLlwVgec9Ua7zcI5IFvBGiSPeM8%2BYMnV%2FR7jNvPM1ibkVgQ41lT1k0YLrozifS7OJk6Xbze3WRqH3ubm8Yo4gCBl47wFbuzJNr9p4rgOYbaTt9Y%2BIKroDlNEUot%2FR2QULzw3baXMiKp%2F84Ti%2FegGlac7HW%2FwvnaFgBbAIUNmcC8wR4a4Wuf2fJYx2lBJmD5PjiJcdzCOkKe%2BBjqkAbpW3k0A%2BHc%2BYbtqH2CjrZeGDTwl1l6xVvD3ozOBex63yh%2FmVbBTiztPSXm%2Fqsl70EHpRkh%2Bd9HA0ptJ%2BS%2BVdtpf4M1WfLkmdpofjsmJk8zGiVR5HnVpQnnsjPPFq3Yp2UeyyJom8iMoqibKKqpf0e23mSGcodbf7TtTlmrpCkOtY%2BQpNwRrhBxu4R5riDgy14KP25gBwj%2FOCFfBjJg5stPC3WQt&X-Amz-Signature=967b753167fe0b1a4121194fbce13edf7a582439414bd762e34644d4f0b6fe74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEKJDO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD33ulj6TG9dJZUILx%2B%2B3SbehWMRD0BZ7zqDFpqb1wf8QIhAIFCcTr9xq9SASxyO4BljvAnYSTXpFzZUp%2B3MwfaOjZMKv8DCDEQABoMNjM3NDIzMTgzODA1IgxtF0o271mRDUwPWbQq3AOw5eOdJX55y7TqS%2FhkPkt6SWSuItktjtoxv4FLL7tYWjDBuDRud%2BtHvFuPHcTwFnf8V989wWo0GpKo%2B%2Fd%2B0NAfB7VWQU2ViJzT0CoTsqqrhONj9MzzZO0rURuIA4SgqXvBbDaSbT7D5mLEHXu0zw2VXFGq4JO4q34rM2S93vkvOBAxRxzx9B2XRWv0OXu4d%2FZAa4nDH02l%2F6Er2tL%2FE1GFSYJrHeCwQPAu4RyZDeQOPFtxu8DjtOY9TQVVDFpo%2FAaAraqIhqBYKmrnG8ngf0Q3DLrPejsyYzQGgX%2Fet0DkvoCga7DxgN4snKvmY3r%2BLfuEXVWnVWyF4hstlvhl4UV82khPUAv7f2FZVb3%2BIE8JLwnNFWFJvHdHUZxrpka1cokIYeJGscSsJ2zZb4fjPSp5bnggdBm3Thbq639eJHHdbac0LknQL%2BNrsLlwVgec9Ua7zcI5IFvBGiSPeM8%2BYMnV%2FR7jNvPM1ibkVgQ41lT1k0YLrozifS7OJk6Xbze3WRqH3ubm8Yo4gCBl47wFbuzJNr9p4rgOYbaTt9Y%2BIKroDlNEUot%2FR2QULzw3baXMiKp%2F84Ti%2FegGlac7HW%2FwvnaFgBbAIUNmcC8wR4a4Wuf2fJYx2lBJmD5PjiJcdzCOkKe%2BBjqkAbpW3k0A%2BHc%2BYbtqH2CjrZeGDTwl1l6xVvD3ozOBex63yh%2FmVbBTiztPSXm%2Fqsl70EHpRkh%2Bd9HA0ptJ%2BS%2BVdtpf4M1WfLkmdpofjsmJk8zGiVR5HnVpQnnsjPPFq3Yp2UeyyJom8iMoqibKKqpf0e23mSGcodbf7TtTlmrpCkOtY%2BQpNwRrhBxu4R5riDgy14KP25gBwj%2FOCFfBjJg5stPC3WQt&X-Amz-Signature=71416c82a986dbdf3a08ea96e04f425331b6b47a67b5c8e9547e2103658c48cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEKJDO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD33ulj6TG9dJZUILx%2B%2B3SbehWMRD0BZ7zqDFpqb1wf8QIhAIFCcTr9xq9SASxyO4BljvAnYSTXpFzZUp%2B3MwfaOjZMKv8DCDEQABoMNjM3NDIzMTgzODA1IgxtF0o271mRDUwPWbQq3AOw5eOdJX55y7TqS%2FhkPkt6SWSuItktjtoxv4FLL7tYWjDBuDRud%2BtHvFuPHcTwFnf8V989wWo0GpKo%2B%2Fd%2B0NAfB7VWQU2ViJzT0CoTsqqrhONj9MzzZO0rURuIA4SgqXvBbDaSbT7D5mLEHXu0zw2VXFGq4JO4q34rM2S93vkvOBAxRxzx9B2XRWv0OXu4d%2FZAa4nDH02l%2F6Er2tL%2FE1GFSYJrHeCwQPAu4RyZDeQOPFtxu8DjtOY9TQVVDFpo%2FAaAraqIhqBYKmrnG8ngf0Q3DLrPejsyYzQGgX%2Fet0DkvoCga7DxgN4snKvmY3r%2BLfuEXVWnVWyF4hstlvhl4UV82khPUAv7f2FZVb3%2BIE8JLwnNFWFJvHdHUZxrpka1cokIYeJGscSsJ2zZb4fjPSp5bnggdBm3Thbq639eJHHdbac0LknQL%2BNrsLlwVgec9Ua7zcI5IFvBGiSPeM8%2BYMnV%2FR7jNvPM1ibkVgQ41lT1k0YLrozifS7OJk6Xbze3WRqH3ubm8Yo4gCBl47wFbuzJNr9p4rgOYbaTt9Y%2BIKroDlNEUot%2FR2QULzw3baXMiKp%2F84Ti%2FegGlac7HW%2FwvnaFgBbAIUNmcC8wR4a4Wuf2fJYx2lBJmD5PjiJcdzCOkKe%2BBjqkAbpW3k0A%2BHc%2BYbtqH2CjrZeGDTwl1l6xVvD3ozOBex63yh%2FmVbBTiztPSXm%2Fqsl70EHpRkh%2Bd9HA0ptJ%2BS%2BVdtpf4M1WfLkmdpofjsmJk8zGiVR5HnVpQnnsjPPFq3Yp2UeyyJom8iMoqibKKqpf0e23mSGcodbf7TtTlmrpCkOtY%2BQpNwRrhBxu4R5riDgy14KP25gBwj%2FOCFfBjJg5stPC3WQt&X-Amz-Signature=157edd50cfe75546895230a807e8def99fe5f080caafa9819d17d2dc1c1ce11c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEKJDO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD33ulj6TG9dJZUILx%2B%2B3SbehWMRD0BZ7zqDFpqb1wf8QIhAIFCcTr9xq9SASxyO4BljvAnYSTXpFzZUp%2B3MwfaOjZMKv8DCDEQABoMNjM3NDIzMTgzODA1IgxtF0o271mRDUwPWbQq3AOw5eOdJX55y7TqS%2FhkPkt6SWSuItktjtoxv4FLL7tYWjDBuDRud%2BtHvFuPHcTwFnf8V989wWo0GpKo%2B%2Fd%2B0NAfB7VWQU2ViJzT0CoTsqqrhONj9MzzZO0rURuIA4SgqXvBbDaSbT7D5mLEHXu0zw2VXFGq4JO4q34rM2S93vkvOBAxRxzx9B2XRWv0OXu4d%2FZAa4nDH02l%2F6Er2tL%2FE1GFSYJrHeCwQPAu4RyZDeQOPFtxu8DjtOY9TQVVDFpo%2FAaAraqIhqBYKmrnG8ngf0Q3DLrPejsyYzQGgX%2Fet0DkvoCga7DxgN4snKvmY3r%2BLfuEXVWnVWyF4hstlvhl4UV82khPUAv7f2FZVb3%2BIE8JLwnNFWFJvHdHUZxrpka1cokIYeJGscSsJ2zZb4fjPSp5bnggdBm3Thbq639eJHHdbac0LknQL%2BNrsLlwVgec9Ua7zcI5IFvBGiSPeM8%2BYMnV%2FR7jNvPM1ibkVgQ41lT1k0YLrozifS7OJk6Xbze3WRqH3ubm8Yo4gCBl47wFbuzJNr9p4rgOYbaTt9Y%2BIKroDlNEUot%2FR2QULzw3baXMiKp%2F84Ti%2FegGlac7HW%2FwvnaFgBbAIUNmcC8wR4a4Wuf2fJYx2lBJmD5PjiJcdzCOkKe%2BBjqkAbpW3k0A%2BHc%2BYbtqH2CjrZeGDTwl1l6xVvD3ozOBex63yh%2FmVbBTiztPSXm%2Fqsl70EHpRkh%2Bd9HA0ptJ%2BS%2BVdtpf4M1WfLkmdpofjsmJk8zGiVR5HnVpQnnsjPPFq3Yp2UeyyJom8iMoqibKKqpf0e23mSGcodbf7TtTlmrpCkOtY%2BQpNwRrhBxu4R5riDgy14KP25gBwj%2FOCFfBjJg5stPC3WQt&X-Amz-Signature=d588c7c75d59958ff65d6573b658cea605c9c4ae4597e69651e6ae7eeb9027cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEEKJDO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD33ulj6TG9dJZUILx%2B%2B3SbehWMRD0BZ7zqDFpqb1wf8QIhAIFCcTr9xq9SASxyO4BljvAnYSTXpFzZUp%2B3MwfaOjZMKv8DCDEQABoMNjM3NDIzMTgzODA1IgxtF0o271mRDUwPWbQq3AOw5eOdJX55y7TqS%2FhkPkt6SWSuItktjtoxv4FLL7tYWjDBuDRud%2BtHvFuPHcTwFnf8V989wWo0GpKo%2B%2Fd%2B0NAfB7VWQU2ViJzT0CoTsqqrhONj9MzzZO0rURuIA4SgqXvBbDaSbT7D5mLEHXu0zw2VXFGq4JO4q34rM2S93vkvOBAxRxzx9B2XRWv0OXu4d%2FZAa4nDH02l%2F6Er2tL%2FE1GFSYJrHeCwQPAu4RyZDeQOPFtxu8DjtOY9TQVVDFpo%2FAaAraqIhqBYKmrnG8ngf0Q3DLrPejsyYzQGgX%2Fet0DkvoCga7DxgN4snKvmY3r%2BLfuEXVWnVWyF4hstlvhl4UV82khPUAv7f2FZVb3%2BIE8JLwnNFWFJvHdHUZxrpka1cokIYeJGscSsJ2zZb4fjPSp5bnggdBm3Thbq639eJHHdbac0LknQL%2BNrsLlwVgec9Ua7zcI5IFvBGiSPeM8%2BYMnV%2FR7jNvPM1ibkVgQ41lT1k0YLrozifS7OJk6Xbze3WRqH3ubm8Yo4gCBl47wFbuzJNr9p4rgOYbaTt9Y%2BIKroDlNEUot%2FR2QULzw3baXMiKp%2F84Ti%2FegGlac7HW%2FwvnaFgBbAIUNmcC8wR4a4Wuf2fJYx2lBJmD5PjiJcdzCOkKe%2BBjqkAbpW3k0A%2BHc%2BYbtqH2CjrZeGDTwl1l6xVvD3ozOBex63yh%2FmVbBTiztPSXm%2Fqsl70EHpRkh%2Bd9HA0ptJ%2BS%2BVdtpf4M1WfLkmdpofjsmJk8zGiVR5HnVpQnnsjPPFq3Yp2UeyyJom8iMoqibKKqpf0e23mSGcodbf7TtTlmrpCkOtY%2BQpNwRrhBxu4R5riDgy14KP25gBwj%2FOCFfBjJg5stPC3WQt&X-Amz-Signature=48dab57298a365a4e4084999823fb412c4908750428fbcf6623bf97d62a9e338&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

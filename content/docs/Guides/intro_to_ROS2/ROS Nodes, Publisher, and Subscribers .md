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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6OHKDR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhwjSmikLMYJn5m1Bd0x%2FjwXORw14hT3AhS%2BNePYwAAIgAqSKOc2%2Fv2ckwdSh5Nexfc5BX89TNXuS8MxBS3gw5v8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJSWkuKfLgSPd6fBPircA1FBJpGfblOJ6CLQ6LQFKo%2F2AqfZSuAnb55qpTqpygPbHuVdNbIGuFLDlhGwD6e1fujMi9zxK29Gur9sHGdNe75w8swfKslFL%2Bro1EANrDxGkicsF5Gh7gXH806kz6mDx%2Fb86%2Fp8%2FIUkg%2BZnkgl%2FzGxGKVhjmbotTHkuhG%2FTJWzUIF7wOHZ%2BeEMnZNJYRQGEVr30KyTKKVLRwnVgLcUrNPn25uEIfEvLaZvctxMDtbJoTN3lRwEXtEdFAHWrlth9NtU6wXKIU3lReglmT%2FW6MY7MO6Yt4FhUx0AakNyQGZg4%2F69ots9LfeyRfJT2qSGpkGt8gsCXN0v8JfMi2ih5MTvhSXfZcb2HRmC1rk8tfROcLui7TVZThI6%2BE6vW1k6168hN698MfmLyRjIrcQZDrdIdxhYaM3V%2FDkrB%2FvpfUtWgrPGbFJr7nFspZaC%2BGAb%2BjAXRGeAUy%2FAl8q7izAEX0BbGYAMNQ2lkzGkH4dE5lfBMLHQ2zC3ruO%2BFdqGyQEmVkDPnvO%2FiN3%2Bu09ij7OiTzChKrYEscY%2B5b6qWIIUkoFwOs9uvE01PHGoO9LnDKU5o2%2BxV1B4Eg7Wg1OyezRMzYTePkVDyN1AN2onovyACI0icaqsFo2SWD4L%2FoJ0tMNGf8cQGOqUB7PPXlZRTV8oCSEJbL2s%2B7BPcU%2BrODfDKqoVChHycx1AjqAYAZV5yYUMi%2BIIWgSNQYScp7h8u8eSULxpSajFk929AGu3ssuEOfYUfk5FdxxSV2Yxg7XeLyNAIc4NUDLo5LFSq4nuTU3oue3SwXGG0fQC9VDbHYZXsKPjzD43SsO7T9uFChTAZT3J%2BIkZ743i0znf8mBiGiKyZS4TT5qLWy6PjW7pM&X-Amz-Signature=f920b5a57eee43595a6793595507ffa724502cb11c9c92f8c0ad6bdae6078c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6OHKDR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhwjSmikLMYJn5m1Bd0x%2FjwXORw14hT3AhS%2BNePYwAAIgAqSKOc2%2Fv2ckwdSh5Nexfc5BX89TNXuS8MxBS3gw5v8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJSWkuKfLgSPd6fBPircA1FBJpGfblOJ6CLQ6LQFKo%2F2AqfZSuAnb55qpTqpygPbHuVdNbIGuFLDlhGwD6e1fujMi9zxK29Gur9sHGdNe75w8swfKslFL%2Bro1EANrDxGkicsF5Gh7gXH806kz6mDx%2Fb86%2Fp8%2FIUkg%2BZnkgl%2FzGxGKVhjmbotTHkuhG%2FTJWzUIF7wOHZ%2BeEMnZNJYRQGEVr30KyTKKVLRwnVgLcUrNPn25uEIfEvLaZvctxMDtbJoTN3lRwEXtEdFAHWrlth9NtU6wXKIU3lReglmT%2FW6MY7MO6Yt4FhUx0AakNyQGZg4%2F69ots9LfeyRfJT2qSGpkGt8gsCXN0v8JfMi2ih5MTvhSXfZcb2HRmC1rk8tfROcLui7TVZThI6%2BE6vW1k6168hN698MfmLyRjIrcQZDrdIdxhYaM3V%2FDkrB%2FvpfUtWgrPGbFJr7nFspZaC%2BGAb%2BjAXRGeAUy%2FAl8q7izAEX0BbGYAMNQ2lkzGkH4dE5lfBMLHQ2zC3ruO%2BFdqGyQEmVkDPnvO%2FiN3%2Bu09ij7OiTzChKrYEscY%2B5b6qWIIUkoFwOs9uvE01PHGoO9LnDKU5o2%2BxV1B4Eg7Wg1OyezRMzYTePkVDyN1AN2onovyACI0icaqsFo2SWD4L%2FoJ0tMNGf8cQGOqUB7PPXlZRTV8oCSEJbL2s%2B7BPcU%2BrODfDKqoVChHycx1AjqAYAZV5yYUMi%2BIIWgSNQYScp7h8u8eSULxpSajFk929AGu3ssuEOfYUfk5FdxxSV2Yxg7XeLyNAIc4NUDLo5LFSq4nuTU3oue3SwXGG0fQC9VDbHYZXsKPjzD43SsO7T9uFChTAZT3J%2BIkZ743i0znf8mBiGiKyZS4TT5qLWy6PjW7pM&X-Amz-Signature=1c4a65399f6942454c0ef284e789ace36c605d8297c7af93efd95a8ed7d1f254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6OHKDR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhwjSmikLMYJn5m1Bd0x%2FjwXORw14hT3AhS%2BNePYwAAIgAqSKOc2%2Fv2ckwdSh5Nexfc5BX89TNXuS8MxBS3gw5v8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJSWkuKfLgSPd6fBPircA1FBJpGfblOJ6CLQ6LQFKo%2F2AqfZSuAnb55qpTqpygPbHuVdNbIGuFLDlhGwD6e1fujMi9zxK29Gur9sHGdNe75w8swfKslFL%2Bro1EANrDxGkicsF5Gh7gXH806kz6mDx%2Fb86%2Fp8%2FIUkg%2BZnkgl%2FzGxGKVhjmbotTHkuhG%2FTJWzUIF7wOHZ%2BeEMnZNJYRQGEVr30KyTKKVLRwnVgLcUrNPn25uEIfEvLaZvctxMDtbJoTN3lRwEXtEdFAHWrlth9NtU6wXKIU3lReglmT%2FW6MY7MO6Yt4FhUx0AakNyQGZg4%2F69ots9LfeyRfJT2qSGpkGt8gsCXN0v8JfMi2ih5MTvhSXfZcb2HRmC1rk8tfROcLui7TVZThI6%2BE6vW1k6168hN698MfmLyRjIrcQZDrdIdxhYaM3V%2FDkrB%2FvpfUtWgrPGbFJr7nFspZaC%2BGAb%2BjAXRGeAUy%2FAl8q7izAEX0BbGYAMNQ2lkzGkH4dE5lfBMLHQ2zC3ruO%2BFdqGyQEmVkDPnvO%2FiN3%2Bu09ij7OiTzChKrYEscY%2B5b6qWIIUkoFwOs9uvE01PHGoO9LnDKU5o2%2BxV1B4Eg7Wg1OyezRMzYTePkVDyN1AN2onovyACI0icaqsFo2SWD4L%2FoJ0tMNGf8cQGOqUB7PPXlZRTV8oCSEJbL2s%2B7BPcU%2BrODfDKqoVChHycx1AjqAYAZV5yYUMi%2BIIWgSNQYScp7h8u8eSULxpSajFk929AGu3ssuEOfYUfk5FdxxSV2Yxg7XeLyNAIc4NUDLo5LFSq4nuTU3oue3SwXGG0fQC9VDbHYZXsKPjzD43SsO7T9uFChTAZT3J%2BIkZ743i0znf8mBiGiKyZS4TT5qLWy6PjW7pM&X-Amz-Signature=6e0e2d7036dafcc02ccffdc06176a1ea9effe1ad649584c967e70de9be10cfa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6OHKDR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhwjSmikLMYJn5m1Bd0x%2FjwXORw14hT3AhS%2BNePYwAAIgAqSKOc2%2Fv2ckwdSh5Nexfc5BX89TNXuS8MxBS3gw5v8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJSWkuKfLgSPd6fBPircA1FBJpGfblOJ6CLQ6LQFKo%2F2AqfZSuAnb55qpTqpygPbHuVdNbIGuFLDlhGwD6e1fujMi9zxK29Gur9sHGdNe75w8swfKslFL%2Bro1EANrDxGkicsF5Gh7gXH806kz6mDx%2Fb86%2Fp8%2FIUkg%2BZnkgl%2FzGxGKVhjmbotTHkuhG%2FTJWzUIF7wOHZ%2BeEMnZNJYRQGEVr30KyTKKVLRwnVgLcUrNPn25uEIfEvLaZvctxMDtbJoTN3lRwEXtEdFAHWrlth9NtU6wXKIU3lReglmT%2FW6MY7MO6Yt4FhUx0AakNyQGZg4%2F69ots9LfeyRfJT2qSGpkGt8gsCXN0v8JfMi2ih5MTvhSXfZcb2HRmC1rk8tfROcLui7TVZThI6%2BE6vW1k6168hN698MfmLyRjIrcQZDrdIdxhYaM3V%2FDkrB%2FvpfUtWgrPGbFJr7nFspZaC%2BGAb%2BjAXRGeAUy%2FAl8q7izAEX0BbGYAMNQ2lkzGkH4dE5lfBMLHQ2zC3ruO%2BFdqGyQEmVkDPnvO%2FiN3%2Bu09ij7OiTzChKrYEscY%2B5b6qWIIUkoFwOs9uvE01PHGoO9LnDKU5o2%2BxV1B4Eg7Wg1OyezRMzYTePkVDyN1AN2onovyACI0icaqsFo2SWD4L%2FoJ0tMNGf8cQGOqUB7PPXlZRTV8oCSEJbL2s%2B7BPcU%2BrODfDKqoVChHycx1AjqAYAZV5yYUMi%2BIIWgSNQYScp7h8u8eSULxpSajFk929AGu3ssuEOfYUfk5FdxxSV2Yxg7XeLyNAIc4NUDLo5LFSq4nuTU3oue3SwXGG0fQC9VDbHYZXsKPjzD43SsO7T9uFChTAZT3J%2BIkZ743i0znf8mBiGiKyZS4TT5qLWy6PjW7pM&X-Amz-Signature=b41ad7c0d60695dba18a5094e88f033ac11d9256c711fa48a0ef0257ff7ba3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6OHKDR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhwjSmikLMYJn5m1Bd0x%2FjwXORw14hT3AhS%2BNePYwAAIgAqSKOc2%2Fv2ckwdSh5Nexfc5BX89TNXuS8MxBS3gw5v8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJSWkuKfLgSPd6fBPircA1FBJpGfblOJ6CLQ6LQFKo%2F2AqfZSuAnb55qpTqpygPbHuVdNbIGuFLDlhGwD6e1fujMi9zxK29Gur9sHGdNe75w8swfKslFL%2Bro1EANrDxGkicsF5Gh7gXH806kz6mDx%2Fb86%2Fp8%2FIUkg%2BZnkgl%2FzGxGKVhjmbotTHkuhG%2FTJWzUIF7wOHZ%2BeEMnZNJYRQGEVr30KyTKKVLRwnVgLcUrNPn25uEIfEvLaZvctxMDtbJoTN3lRwEXtEdFAHWrlth9NtU6wXKIU3lReglmT%2FW6MY7MO6Yt4FhUx0AakNyQGZg4%2F69ots9LfeyRfJT2qSGpkGt8gsCXN0v8JfMi2ih5MTvhSXfZcb2HRmC1rk8tfROcLui7TVZThI6%2BE6vW1k6168hN698MfmLyRjIrcQZDrdIdxhYaM3V%2FDkrB%2FvpfUtWgrPGbFJr7nFspZaC%2BGAb%2BjAXRGeAUy%2FAl8q7izAEX0BbGYAMNQ2lkzGkH4dE5lfBMLHQ2zC3ruO%2BFdqGyQEmVkDPnvO%2FiN3%2Bu09ij7OiTzChKrYEscY%2B5b6qWIIUkoFwOs9uvE01PHGoO9LnDKU5o2%2BxV1B4Eg7Wg1OyezRMzYTePkVDyN1AN2onovyACI0icaqsFo2SWD4L%2FoJ0tMNGf8cQGOqUB7PPXlZRTV8oCSEJbL2s%2B7BPcU%2BrODfDKqoVChHycx1AjqAYAZV5yYUMi%2BIIWgSNQYScp7h8u8eSULxpSajFk929AGu3ssuEOfYUfk5FdxxSV2Yxg7XeLyNAIc4NUDLo5LFSq4nuTU3oue3SwXGG0fQC9VDbHYZXsKPjzD43SsO7T9uFChTAZT3J%2BIkZ743i0znf8mBiGiKyZS4TT5qLWy6PjW7pM&X-Amz-Signature=cb0e3ef9a10dbbc5b15be9da1029603e82e7d3690933d3b5e57a58961fefb723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6OHKDR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhwjSmikLMYJn5m1Bd0x%2FjwXORw14hT3AhS%2BNePYwAAIgAqSKOc2%2Fv2ckwdSh5Nexfc5BX89TNXuS8MxBS3gw5v8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJSWkuKfLgSPd6fBPircA1FBJpGfblOJ6CLQ6LQFKo%2F2AqfZSuAnb55qpTqpygPbHuVdNbIGuFLDlhGwD6e1fujMi9zxK29Gur9sHGdNe75w8swfKslFL%2Bro1EANrDxGkicsF5Gh7gXH806kz6mDx%2Fb86%2Fp8%2FIUkg%2BZnkgl%2FzGxGKVhjmbotTHkuhG%2FTJWzUIF7wOHZ%2BeEMnZNJYRQGEVr30KyTKKVLRwnVgLcUrNPn25uEIfEvLaZvctxMDtbJoTN3lRwEXtEdFAHWrlth9NtU6wXKIU3lReglmT%2FW6MY7MO6Yt4FhUx0AakNyQGZg4%2F69ots9LfeyRfJT2qSGpkGt8gsCXN0v8JfMi2ih5MTvhSXfZcb2HRmC1rk8tfROcLui7TVZThI6%2BE6vW1k6168hN698MfmLyRjIrcQZDrdIdxhYaM3V%2FDkrB%2FvpfUtWgrPGbFJr7nFspZaC%2BGAb%2BjAXRGeAUy%2FAl8q7izAEX0BbGYAMNQ2lkzGkH4dE5lfBMLHQ2zC3ruO%2BFdqGyQEmVkDPnvO%2FiN3%2Bu09ij7OiTzChKrYEscY%2B5b6qWIIUkoFwOs9uvE01PHGoO9LnDKU5o2%2BxV1B4Eg7Wg1OyezRMzYTePkVDyN1AN2onovyACI0icaqsFo2SWD4L%2FoJ0tMNGf8cQGOqUB7PPXlZRTV8oCSEJbL2s%2B7BPcU%2BrODfDKqoVChHycx1AjqAYAZV5yYUMi%2BIIWgSNQYScp7h8u8eSULxpSajFk929AGu3ssuEOfYUfk5FdxxSV2Yxg7XeLyNAIc4NUDLo5LFSq4nuTU3oue3SwXGG0fQC9VDbHYZXsKPjzD43SsO7T9uFChTAZT3J%2BIkZ743i0znf8mBiGiKyZS4TT5qLWy6PjW7pM&X-Amz-Signature=90e3f1319a0fcc431f72c2a9a5292ceb1b95240b934bdeb7ec09b39dc399c0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6OHKDR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhwjSmikLMYJn5m1Bd0x%2FjwXORw14hT3AhS%2BNePYwAAIgAqSKOc2%2Fv2ckwdSh5Nexfc5BX89TNXuS8MxBS3gw5v8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJSWkuKfLgSPd6fBPircA1FBJpGfblOJ6CLQ6LQFKo%2F2AqfZSuAnb55qpTqpygPbHuVdNbIGuFLDlhGwD6e1fujMi9zxK29Gur9sHGdNe75w8swfKslFL%2Bro1EANrDxGkicsF5Gh7gXH806kz6mDx%2Fb86%2Fp8%2FIUkg%2BZnkgl%2FzGxGKVhjmbotTHkuhG%2FTJWzUIF7wOHZ%2BeEMnZNJYRQGEVr30KyTKKVLRwnVgLcUrNPn25uEIfEvLaZvctxMDtbJoTN3lRwEXtEdFAHWrlth9NtU6wXKIU3lReglmT%2FW6MY7MO6Yt4FhUx0AakNyQGZg4%2F69ots9LfeyRfJT2qSGpkGt8gsCXN0v8JfMi2ih5MTvhSXfZcb2HRmC1rk8tfROcLui7TVZThI6%2BE6vW1k6168hN698MfmLyRjIrcQZDrdIdxhYaM3V%2FDkrB%2FvpfUtWgrPGbFJr7nFspZaC%2BGAb%2BjAXRGeAUy%2FAl8q7izAEX0BbGYAMNQ2lkzGkH4dE5lfBMLHQ2zC3ruO%2BFdqGyQEmVkDPnvO%2FiN3%2Bu09ij7OiTzChKrYEscY%2B5b6qWIIUkoFwOs9uvE01PHGoO9LnDKU5o2%2BxV1B4Eg7Wg1OyezRMzYTePkVDyN1AN2onovyACI0icaqsFo2SWD4L%2FoJ0tMNGf8cQGOqUB7PPXlZRTV8oCSEJbL2s%2B7BPcU%2BrODfDKqoVChHycx1AjqAYAZV5yYUMi%2BIIWgSNQYScp7h8u8eSULxpSajFk929AGu3ssuEOfYUfk5FdxxSV2Yxg7XeLyNAIc4NUDLo5LFSq4nuTU3oue3SwXGG0fQC9VDbHYZXsKPjzD43SsO7T9uFChTAZT3J%2BIkZ743i0znf8mBiGiKyZS4TT5qLWy6PjW7pM&X-Amz-Signature=fdc91831747b3f3089ec9b325333a5ce583375f39cc6f2bb44fc2c47c9b2d0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6OHKDR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyhwjSmikLMYJn5m1Bd0x%2FjwXORw14hT3AhS%2BNePYwAAIgAqSKOc2%2Fv2ckwdSh5Nexfc5BX89TNXuS8MxBS3gw5v8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJSWkuKfLgSPd6fBPircA1FBJpGfblOJ6CLQ6LQFKo%2F2AqfZSuAnb55qpTqpygPbHuVdNbIGuFLDlhGwD6e1fujMi9zxK29Gur9sHGdNe75w8swfKslFL%2Bro1EANrDxGkicsF5Gh7gXH806kz6mDx%2Fb86%2Fp8%2FIUkg%2BZnkgl%2FzGxGKVhjmbotTHkuhG%2FTJWzUIF7wOHZ%2BeEMnZNJYRQGEVr30KyTKKVLRwnVgLcUrNPn25uEIfEvLaZvctxMDtbJoTN3lRwEXtEdFAHWrlth9NtU6wXKIU3lReglmT%2FW6MY7MO6Yt4FhUx0AakNyQGZg4%2F69ots9LfeyRfJT2qSGpkGt8gsCXN0v8JfMi2ih5MTvhSXfZcb2HRmC1rk8tfROcLui7TVZThI6%2BE6vW1k6168hN698MfmLyRjIrcQZDrdIdxhYaM3V%2FDkrB%2FvpfUtWgrPGbFJr7nFspZaC%2BGAb%2BjAXRGeAUy%2FAl8q7izAEX0BbGYAMNQ2lkzGkH4dE5lfBMLHQ2zC3ruO%2BFdqGyQEmVkDPnvO%2FiN3%2Bu09ij7OiTzChKrYEscY%2B5b6qWIIUkoFwOs9uvE01PHGoO9LnDKU5o2%2BxV1B4Eg7Wg1OyezRMzYTePkVDyN1AN2onovyACI0icaqsFo2SWD4L%2FoJ0tMNGf8cQGOqUB7PPXlZRTV8oCSEJbL2s%2B7BPcU%2BrODfDKqoVChHycx1AjqAYAZV5yYUMi%2BIIWgSNQYScp7h8u8eSULxpSajFk929AGu3ssuEOfYUfk5FdxxSV2Yxg7XeLyNAIc4NUDLo5LFSq4nuTU3oue3SwXGG0fQC9VDbHYZXsKPjzD43SsO7T9uFChTAZT3J%2BIkZ743i0znf8mBiGiKyZS4TT5qLWy6PjW7pM&X-Amz-Signature=a514079b515edb0b6b914fd14a5d3d1e69c2c786520302409e479bdb08254549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

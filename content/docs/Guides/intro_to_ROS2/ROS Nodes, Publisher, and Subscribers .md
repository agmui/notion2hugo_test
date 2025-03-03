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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P4Z77L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC61h4YUcOOlpwuh2fSssnoE9O4JbnnuF7Rs1ANDow2WQIhAP36KxbGIhAaEGxmXemAiWfWqW7jzaLoPykHYxjbHxLHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0m6KJYMfbXN8YilEq3ANvhy%2BaVkaouuZE70W2p4SX%2BbHfNyP17mP2%2FrwAD9ZaZ4guIOrblo0Oa%2BZgjeelVmE9i9SvW6V9B1vGRlij5nBkZWzUnDugciviX7TnX5hYyhVULG%2Baroi3CwgQW1nSI1qkYVC%2FR%2Bpzw7hWrb9xF2k43jJiJk1eBw7UQYye2kn2En0%2FxJA%2Bkv9cp3k9q8w9wa1r3V6yS3pwPOwCdjSVPjBK4x5bb7NqzK4dk9OZ1eujCjkpd5t7RcQv2GTkJ7cbl8NnsZhJTrzzrSYnB%2Bh%2FxzTROtaHSfcT%2Ffm3N6WDzBSl%2F%2BFXOnNGErocljxpf27Ex6DsAA3VAi6HpukgXucnaNhJYdAiCGUhg6vqus15hOMDaP6ymIbwIS7LIESIB9JhKsKmVLKvNVMtB%2BTtv%2BoDd%2FUUsYN89Tlnxq9S38bxKBu4YmO46B1yru4d4ipt9G120mYauyScybmPleodMTP4kyqxbB5OppRPsv6Qi3RUA3R%2BInsctlEeiWTH%2Bdd1YJEDavWfQmr1NUUJaZ1pV0uL2WFSqH1lmCz%2BcBFEcMGqclrZo5NdDVocrlYEGvGeb43lGxUbQ%2BWT1B5%2BQXSZNyt6H1aOkE%2BzC0e%2BrMxh8j6GHNbA0eu%2BWqdBO7uZXfQHvDDF2Zi%2BBjqkAbSXnuZoya6DR3DH9a4GN3lZFBUslandHVcsEKhrgzUMTT94SEwS%2FVrJ6NwmR%2B02O8M6o9hUbpQ1JlxWuTqLMrPAC1wUIVZquhdq%2Fh%2FBXCquJhkrD3Cm3yyWVq9jp7PN9MZKnZ3KNIiVdH2lF5lMSdtlK%2FA1%2BalPIjVZnHA%2Bi%2F2vlf1Xn9Hmq1xwGM%2BuzpoyELWi%2BleZed7uHYtkkf%2B%2F%2FRoJjkXp&X-Amz-Signature=db9a047ea30dffc7ad65e8598ca9da47dcb17312ecd5cb4ae1c32427250d7542&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P4Z77L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC61h4YUcOOlpwuh2fSssnoE9O4JbnnuF7Rs1ANDow2WQIhAP36KxbGIhAaEGxmXemAiWfWqW7jzaLoPykHYxjbHxLHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0m6KJYMfbXN8YilEq3ANvhy%2BaVkaouuZE70W2p4SX%2BbHfNyP17mP2%2FrwAD9ZaZ4guIOrblo0Oa%2BZgjeelVmE9i9SvW6V9B1vGRlij5nBkZWzUnDugciviX7TnX5hYyhVULG%2Baroi3CwgQW1nSI1qkYVC%2FR%2Bpzw7hWrb9xF2k43jJiJk1eBw7UQYye2kn2En0%2FxJA%2Bkv9cp3k9q8w9wa1r3V6yS3pwPOwCdjSVPjBK4x5bb7NqzK4dk9OZ1eujCjkpd5t7RcQv2GTkJ7cbl8NnsZhJTrzzrSYnB%2Bh%2FxzTROtaHSfcT%2Ffm3N6WDzBSl%2F%2BFXOnNGErocljxpf27Ex6DsAA3VAi6HpukgXucnaNhJYdAiCGUhg6vqus15hOMDaP6ymIbwIS7LIESIB9JhKsKmVLKvNVMtB%2BTtv%2BoDd%2FUUsYN89Tlnxq9S38bxKBu4YmO46B1yru4d4ipt9G120mYauyScybmPleodMTP4kyqxbB5OppRPsv6Qi3RUA3R%2BInsctlEeiWTH%2Bdd1YJEDavWfQmr1NUUJaZ1pV0uL2WFSqH1lmCz%2BcBFEcMGqclrZo5NdDVocrlYEGvGeb43lGxUbQ%2BWT1B5%2BQXSZNyt6H1aOkE%2BzC0e%2BrMxh8j6GHNbA0eu%2BWqdBO7uZXfQHvDDF2Zi%2BBjqkAbSXnuZoya6DR3DH9a4GN3lZFBUslandHVcsEKhrgzUMTT94SEwS%2FVrJ6NwmR%2B02O8M6o9hUbpQ1JlxWuTqLMrPAC1wUIVZquhdq%2Fh%2FBXCquJhkrD3Cm3yyWVq9jp7PN9MZKnZ3KNIiVdH2lF5lMSdtlK%2FA1%2BalPIjVZnHA%2Bi%2F2vlf1Xn9Hmq1xwGM%2BuzpoyELWi%2BleZed7uHYtkkf%2B%2F%2FRoJjkXp&X-Amz-Signature=b48fa5421523a702261cfd21111f7f6514f453dc1ecd49bec60f7c29ecf5edd6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P4Z77L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC61h4YUcOOlpwuh2fSssnoE9O4JbnnuF7Rs1ANDow2WQIhAP36KxbGIhAaEGxmXemAiWfWqW7jzaLoPykHYxjbHxLHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0m6KJYMfbXN8YilEq3ANvhy%2BaVkaouuZE70W2p4SX%2BbHfNyP17mP2%2FrwAD9ZaZ4guIOrblo0Oa%2BZgjeelVmE9i9SvW6V9B1vGRlij5nBkZWzUnDugciviX7TnX5hYyhVULG%2Baroi3CwgQW1nSI1qkYVC%2FR%2Bpzw7hWrb9xF2k43jJiJk1eBw7UQYye2kn2En0%2FxJA%2Bkv9cp3k9q8w9wa1r3V6yS3pwPOwCdjSVPjBK4x5bb7NqzK4dk9OZ1eujCjkpd5t7RcQv2GTkJ7cbl8NnsZhJTrzzrSYnB%2Bh%2FxzTROtaHSfcT%2Ffm3N6WDzBSl%2F%2BFXOnNGErocljxpf27Ex6DsAA3VAi6HpukgXucnaNhJYdAiCGUhg6vqus15hOMDaP6ymIbwIS7LIESIB9JhKsKmVLKvNVMtB%2BTtv%2BoDd%2FUUsYN89Tlnxq9S38bxKBu4YmO46B1yru4d4ipt9G120mYauyScybmPleodMTP4kyqxbB5OppRPsv6Qi3RUA3R%2BInsctlEeiWTH%2Bdd1YJEDavWfQmr1NUUJaZ1pV0uL2WFSqH1lmCz%2BcBFEcMGqclrZo5NdDVocrlYEGvGeb43lGxUbQ%2BWT1B5%2BQXSZNyt6H1aOkE%2BzC0e%2BrMxh8j6GHNbA0eu%2BWqdBO7uZXfQHvDDF2Zi%2BBjqkAbSXnuZoya6DR3DH9a4GN3lZFBUslandHVcsEKhrgzUMTT94SEwS%2FVrJ6NwmR%2B02O8M6o9hUbpQ1JlxWuTqLMrPAC1wUIVZquhdq%2Fh%2FBXCquJhkrD3Cm3yyWVq9jp7PN9MZKnZ3KNIiVdH2lF5lMSdtlK%2FA1%2BalPIjVZnHA%2Bi%2F2vlf1Xn9Hmq1xwGM%2BuzpoyELWi%2BleZed7uHYtkkf%2B%2F%2FRoJjkXp&X-Amz-Signature=0145cc3acc834736f778d4ba9ba8b5fec9b443bd51f960e037b317ce66be7a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P4Z77L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC61h4YUcOOlpwuh2fSssnoE9O4JbnnuF7Rs1ANDow2WQIhAP36KxbGIhAaEGxmXemAiWfWqW7jzaLoPykHYxjbHxLHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0m6KJYMfbXN8YilEq3ANvhy%2BaVkaouuZE70W2p4SX%2BbHfNyP17mP2%2FrwAD9ZaZ4guIOrblo0Oa%2BZgjeelVmE9i9SvW6V9B1vGRlij5nBkZWzUnDugciviX7TnX5hYyhVULG%2Baroi3CwgQW1nSI1qkYVC%2FR%2Bpzw7hWrb9xF2k43jJiJk1eBw7UQYye2kn2En0%2FxJA%2Bkv9cp3k9q8w9wa1r3V6yS3pwPOwCdjSVPjBK4x5bb7NqzK4dk9OZ1eujCjkpd5t7RcQv2GTkJ7cbl8NnsZhJTrzzrSYnB%2Bh%2FxzTROtaHSfcT%2Ffm3N6WDzBSl%2F%2BFXOnNGErocljxpf27Ex6DsAA3VAi6HpukgXucnaNhJYdAiCGUhg6vqus15hOMDaP6ymIbwIS7LIESIB9JhKsKmVLKvNVMtB%2BTtv%2BoDd%2FUUsYN89Tlnxq9S38bxKBu4YmO46B1yru4d4ipt9G120mYauyScybmPleodMTP4kyqxbB5OppRPsv6Qi3RUA3R%2BInsctlEeiWTH%2Bdd1YJEDavWfQmr1NUUJaZ1pV0uL2WFSqH1lmCz%2BcBFEcMGqclrZo5NdDVocrlYEGvGeb43lGxUbQ%2BWT1B5%2BQXSZNyt6H1aOkE%2BzC0e%2BrMxh8j6GHNbA0eu%2BWqdBO7uZXfQHvDDF2Zi%2BBjqkAbSXnuZoya6DR3DH9a4GN3lZFBUslandHVcsEKhrgzUMTT94SEwS%2FVrJ6NwmR%2B02O8M6o9hUbpQ1JlxWuTqLMrPAC1wUIVZquhdq%2Fh%2FBXCquJhkrD3Cm3yyWVq9jp7PN9MZKnZ3KNIiVdH2lF5lMSdtlK%2FA1%2BalPIjVZnHA%2Bi%2F2vlf1Xn9Hmq1xwGM%2BuzpoyELWi%2BleZed7uHYtkkf%2B%2F%2FRoJjkXp&X-Amz-Signature=dbc1be1f1e8dedec899ecfcff00cbfce487e38ab8edeee0269a744e764a22fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P4Z77L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC61h4YUcOOlpwuh2fSssnoE9O4JbnnuF7Rs1ANDow2WQIhAP36KxbGIhAaEGxmXemAiWfWqW7jzaLoPykHYxjbHxLHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0m6KJYMfbXN8YilEq3ANvhy%2BaVkaouuZE70W2p4SX%2BbHfNyP17mP2%2FrwAD9ZaZ4guIOrblo0Oa%2BZgjeelVmE9i9SvW6V9B1vGRlij5nBkZWzUnDugciviX7TnX5hYyhVULG%2Baroi3CwgQW1nSI1qkYVC%2FR%2Bpzw7hWrb9xF2k43jJiJk1eBw7UQYye2kn2En0%2FxJA%2Bkv9cp3k9q8w9wa1r3V6yS3pwPOwCdjSVPjBK4x5bb7NqzK4dk9OZ1eujCjkpd5t7RcQv2GTkJ7cbl8NnsZhJTrzzrSYnB%2Bh%2FxzTROtaHSfcT%2Ffm3N6WDzBSl%2F%2BFXOnNGErocljxpf27Ex6DsAA3VAi6HpukgXucnaNhJYdAiCGUhg6vqus15hOMDaP6ymIbwIS7LIESIB9JhKsKmVLKvNVMtB%2BTtv%2BoDd%2FUUsYN89Tlnxq9S38bxKBu4YmO46B1yru4d4ipt9G120mYauyScybmPleodMTP4kyqxbB5OppRPsv6Qi3RUA3R%2BInsctlEeiWTH%2Bdd1YJEDavWfQmr1NUUJaZ1pV0uL2WFSqH1lmCz%2BcBFEcMGqclrZo5NdDVocrlYEGvGeb43lGxUbQ%2BWT1B5%2BQXSZNyt6H1aOkE%2BzC0e%2BrMxh8j6GHNbA0eu%2BWqdBO7uZXfQHvDDF2Zi%2BBjqkAbSXnuZoya6DR3DH9a4GN3lZFBUslandHVcsEKhrgzUMTT94SEwS%2FVrJ6NwmR%2B02O8M6o9hUbpQ1JlxWuTqLMrPAC1wUIVZquhdq%2Fh%2FBXCquJhkrD3Cm3yyWVq9jp7PN9MZKnZ3KNIiVdH2lF5lMSdtlK%2FA1%2BalPIjVZnHA%2Bi%2F2vlf1Xn9Hmq1xwGM%2BuzpoyELWi%2BleZed7uHYtkkf%2B%2F%2FRoJjkXp&X-Amz-Signature=698d4545dd8c4f2c60ab17d98eb034e9db8261dd6cee5a387f5600e78144f7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P4Z77L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC61h4YUcOOlpwuh2fSssnoE9O4JbnnuF7Rs1ANDow2WQIhAP36KxbGIhAaEGxmXemAiWfWqW7jzaLoPykHYxjbHxLHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0m6KJYMfbXN8YilEq3ANvhy%2BaVkaouuZE70W2p4SX%2BbHfNyP17mP2%2FrwAD9ZaZ4guIOrblo0Oa%2BZgjeelVmE9i9SvW6V9B1vGRlij5nBkZWzUnDugciviX7TnX5hYyhVULG%2Baroi3CwgQW1nSI1qkYVC%2FR%2Bpzw7hWrb9xF2k43jJiJk1eBw7UQYye2kn2En0%2FxJA%2Bkv9cp3k9q8w9wa1r3V6yS3pwPOwCdjSVPjBK4x5bb7NqzK4dk9OZ1eujCjkpd5t7RcQv2GTkJ7cbl8NnsZhJTrzzrSYnB%2Bh%2FxzTROtaHSfcT%2Ffm3N6WDzBSl%2F%2BFXOnNGErocljxpf27Ex6DsAA3VAi6HpukgXucnaNhJYdAiCGUhg6vqus15hOMDaP6ymIbwIS7LIESIB9JhKsKmVLKvNVMtB%2BTtv%2BoDd%2FUUsYN89Tlnxq9S38bxKBu4YmO46B1yru4d4ipt9G120mYauyScybmPleodMTP4kyqxbB5OppRPsv6Qi3RUA3R%2BInsctlEeiWTH%2Bdd1YJEDavWfQmr1NUUJaZ1pV0uL2WFSqH1lmCz%2BcBFEcMGqclrZo5NdDVocrlYEGvGeb43lGxUbQ%2BWT1B5%2BQXSZNyt6H1aOkE%2BzC0e%2BrMxh8j6GHNbA0eu%2BWqdBO7uZXfQHvDDF2Zi%2BBjqkAbSXnuZoya6DR3DH9a4GN3lZFBUslandHVcsEKhrgzUMTT94SEwS%2FVrJ6NwmR%2B02O8M6o9hUbpQ1JlxWuTqLMrPAC1wUIVZquhdq%2Fh%2FBXCquJhkrD3Cm3yyWVq9jp7PN9MZKnZ3KNIiVdH2lF5lMSdtlK%2FA1%2BalPIjVZnHA%2Bi%2F2vlf1Xn9Hmq1xwGM%2BuzpoyELWi%2BleZed7uHYtkkf%2B%2F%2FRoJjkXp&X-Amz-Signature=d4ad662d724ba00428d38458a4713bd4785ae45839c25c5ee6cc82fb709a1aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P4Z77L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC61h4YUcOOlpwuh2fSssnoE9O4JbnnuF7Rs1ANDow2WQIhAP36KxbGIhAaEGxmXemAiWfWqW7jzaLoPykHYxjbHxLHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0m6KJYMfbXN8YilEq3ANvhy%2BaVkaouuZE70W2p4SX%2BbHfNyP17mP2%2FrwAD9ZaZ4guIOrblo0Oa%2BZgjeelVmE9i9SvW6V9B1vGRlij5nBkZWzUnDugciviX7TnX5hYyhVULG%2Baroi3CwgQW1nSI1qkYVC%2FR%2Bpzw7hWrb9xF2k43jJiJk1eBw7UQYye2kn2En0%2FxJA%2Bkv9cp3k9q8w9wa1r3V6yS3pwPOwCdjSVPjBK4x5bb7NqzK4dk9OZ1eujCjkpd5t7RcQv2GTkJ7cbl8NnsZhJTrzzrSYnB%2Bh%2FxzTROtaHSfcT%2Ffm3N6WDzBSl%2F%2BFXOnNGErocljxpf27Ex6DsAA3VAi6HpukgXucnaNhJYdAiCGUhg6vqus15hOMDaP6ymIbwIS7LIESIB9JhKsKmVLKvNVMtB%2BTtv%2BoDd%2FUUsYN89Tlnxq9S38bxKBu4YmO46B1yru4d4ipt9G120mYauyScybmPleodMTP4kyqxbB5OppRPsv6Qi3RUA3R%2BInsctlEeiWTH%2Bdd1YJEDavWfQmr1NUUJaZ1pV0uL2WFSqH1lmCz%2BcBFEcMGqclrZo5NdDVocrlYEGvGeb43lGxUbQ%2BWT1B5%2BQXSZNyt6H1aOkE%2BzC0e%2BrMxh8j6GHNbA0eu%2BWqdBO7uZXfQHvDDF2Zi%2BBjqkAbSXnuZoya6DR3DH9a4GN3lZFBUslandHVcsEKhrgzUMTT94SEwS%2FVrJ6NwmR%2B02O8M6o9hUbpQ1JlxWuTqLMrPAC1wUIVZquhdq%2Fh%2FBXCquJhkrD3Cm3yyWVq9jp7PN9MZKnZ3KNIiVdH2lF5lMSdtlK%2FA1%2BalPIjVZnHA%2Bi%2F2vlf1Xn9Hmq1xwGM%2BuzpoyELWi%2BleZed7uHYtkkf%2B%2F%2FRoJjkXp&X-Amz-Signature=cbcf4bf44a4f9559393eceaa7f31b3bda3377de80a77e9129f6b18b88f6fc6aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P4Z77L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC61h4YUcOOlpwuh2fSssnoE9O4JbnnuF7Rs1ANDow2WQIhAP36KxbGIhAaEGxmXemAiWfWqW7jzaLoPykHYxjbHxLHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0m6KJYMfbXN8YilEq3ANvhy%2BaVkaouuZE70W2p4SX%2BbHfNyP17mP2%2FrwAD9ZaZ4guIOrblo0Oa%2BZgjeelVmE9i9SvW6V9B1vGRlij5nBkZWzUnDugciviX7TnX5hYyhVULG%2Baroi3CwgQW1nSI1qkYVC%2FR%2Bpzw7hWrb9xF2k43jJiJk1eBw7UQYye2kn2En0%2FxJA%2Bkv9cp3k9q8w9wa1r3V6yS3pwPOwCdjSVPjBK4x5bb7NqzK4dk9OZ1eujCjkpd5t7RcQv2GTkJ7cbl8NnsZhJTrzzrSYnB%2Bh%2FxzTROtaHSfcT%2Ffm3N6WDzBSl%2F%2BFXOnNGErocljxpf27Ex6DsAA3VAi6HpukgXucnaNhJYdAiCGUhg6vqus15hOMDaP6ymIbwIS7LIESIB9JhKsKmVLKvNVMtB%2BTtv%2BoDd%2FUUsYN89Tlnxq9S38bxKBu4YmO46B1yru4d4ipt9G120mYauyScybmPleodMTP4kyqxbB5OppRPsv6Qi3RUA3R%2BInsctlEeiWTH%2Bdd1YJEDavWfQmr1NUUJaZ1pV0uL2WFSqH1lmCz%2BcBFEcMGqclrZo5NdDVocrlYEGvGeb43lGxUbQ%2BWT1B5%2BQXSZNyt6H1aOkE%2BzC0e%2BrMxh8j6GHNbA0eu%2BWqdBO7uZXfQHvDDF2Zi%2BBjqkAbSXnuZoya6DR3DH9a4GN3lZFBUslandHVcsEKhrgzUMTT94SEwS%2FVrJ6NwmR%2B02O8M6o9hUbpQ1JlxWuTqLMrPAC1wUIVZquhdq%2Fh%2FBXCquJhkrD3Cm3yyWVq9jp7PN9MZKnZ3KNIiVdH2lF5lMSdtlK%2FA1%2BalPIjVZnHA%2Bi%2F2vlf1Xn9Hmq1xwGM%2BuzpoyELWi%2BleZed7uHYtkkf%2B%2F%2FRoJjkXp&X-Amz-Signature=47a636962148dd84820a58cebf0e5688baeadd404bb629747a8c4e446c86f3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS54LYMJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC1zvdS%2F7hhfB491eptiWumcibCc56cxSoPKZAC3zXxMAIhALOc20m8gIVIBJKFBadR9BZ4cbtPTXu%2Fd5U%2FTFItYnlzKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznPrYu6ngO5OHuDLMq3AOI5X5R%2Fyu2X8Nq4YPWx7hnkUHAq8DzMXr2k71tcD63qrj56gQ7ougTpgBT55VnCTvTgaAyXmh52Co7qlGs2V9BIdxDTmLV6uThUWFy2tifeQwWy75MPWeB%2BAWO6KfLuE7wAyZP2PzJUryU6qr3ATxgdzEO4QVgpg545y8UhvmgcLqjpofxZ8h4HMF4gHq9M35HN0cdI0c%2FuqUbkhTAp2ZDw9wluDsM7lz4NioRW5QZ35QP7D6l6JgQRj1yxywWroIf12RIZUyuYOJDehYXDfQEOuw%2B1CFexiOEx%2FYdtTcLP0rt3S2C%2FkolaxEXzMTyPUotFs9Tz%2BGwebuin%2FFC7PN9PBvJtpsbSXkFIJZ9JNBZS4uneRAIKvKHvHQAohMqRs%2FIrNmtxXE5UcEgCwEUkxaDu2b8ZSf9rB4Y6eLorUS12g7NrzBjoKxpTKkm8fuBBgeGMWQUWSWnaFZ5iS4%2FYhv1Nv9tN2ktpi8uhdthuQFsAHGv0hkc%2FNMgCU1z%2FviU0nabrXmICZwvbpP5Wx2jrEMcNc%2BxbPzB9KUio%2BD4ZPV1DwmYfQsJwahSFG%2BfY5Kxm%2F7GaD7%2F1iziJw%2F2l0h636%2BSUW9%2F%2F9QYtqak8GXOBVLyAaqqfLQtNjIK%2BPFq%2FjCCi72%2BBjqkAQLXvkylPl8co%2BNjXyZGQWYw9%2FYYcsVkVjG9pAlijEg4Ph2v9XnCYbgSDBhOxfBC3cc4%2BzkiiAfY8sWXc2lH9Xnl%2Bd3Lf2vNs19bxq0TnakUNgQTrLD%2BrScW3RdzNWK4z8TVx8BhcoTStPlvaVAMQz3FVHlTTVPOFEtC5ADHL%2BPcmGzMNMKfJhEDpdy8hWqZrjxFXlqcTofxGx3SsMK3LC5hs6dQ&X-Amz-Signature=02e7db9f3ea0ac0190c3abee770506ea094d041381813170e53acfae65dd9c69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS54LYMJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC1zvdS%2F7hhfB491eptiWumcibCc56cxSoPKZAC3zXxMAIhALOc20m8gIVIBJKFBadR9BZ4cbtPTXu%2Fd5U%2FTFItYnlzKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznPrYu6ngO5OHuDLMq3AOI5X5R%2Fyu2X8Nq4YPWx7hnkUHAq8DzMXr2k71tcD63qrj56gQ7ougTpgBT55VnCTvTgaAyXmh52Co7qlGs2V9BIdxDTmLV6uThUWFy2tifeQwWy75MPWeB%2BAWO6KfLuE7wAyZP2PzJUryU6qr3ATxgdzEO4QVgpg545y8UhvmgcLqjpofxZ8h4HMF4gHq9M35HN0cdI0c%2FuqUbkhTAp2ZDw9wluDsM7lz4NioRW5QZ35QP7D6l6JgQRj1yxywWroIf12RIZUyuYOJDehYXDfQEOuw%2B1CFexiOEx%2FYdtTcLP0rt3S2C%2FkolaxEXzMTyPUotFs9Tz%2BGwebuin%2FFC7PN9PBvJtpsbSXkFIJZ9JNBZS4uneRAIKvKHvHQAohMqRs%2FIrNmtxXE5UcEgCwEUkxaDu2b8ZSf9rB4Y6eLorUS12g7NrzBjoKxpTKkm8fuBBgeGMWQUWSWnaFZ5iS4%2FYhv1Nv9tN2ktpi8uhdthuQFsAHGv0hkc%2FNMgCU1z%2FviU0nabrXmICZwvbpP5Wx2jrEMcNc%2BxbPzB9KUio%2BD4ZPV1DwmYfQsJwahSFG%2BfY5Kxm%2F7GaD7%2F1iziJw%2F2l0h636%2BSUW9%2F%2F9QYtqak8GXOBVLyAaqqfLQtNjIK%2BPFq%2FjCCi72%2BBjqkAQLXvkylPl8co%2BNjXyZGQWYw9%2FYYcsVkVjG9pAlijEg4Ph2v9XnCYbgSDBhOxfBC3cc4%2BzkiiAfY8sWXc2lH9Xnl%2Bd3Lf2vNs19bxq0TnakUNgQTrLD%2BrScW3RdzNWK4z8TVx8BhcoTStPlvaVAMQz3FVHlTTVPOFEtC5ADHL%2BPcmGzMNMKfJhEDpdy8hWqZrjxFXlqcTofxGx3SsMK3LC5hs6dQ&X-Amz-Signature=4eba1c88896dc08e5b605fd81d1d954682812a556f42cce211faf5290f2b346d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS54LYMJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC1zvdS%2F7hhfB491eptiWumcibCc56cxSoPKZAC3zXxMAIhALOc20m8gIVIBJKFBadR9BZ4cbtPTXu%2Fd5U%2FTFItYnlzKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznPrYu6ngO5OHuDLMq3AOI5X5R%2Fyu2X8Nq4YPWx7hnkUHAq8DzMXr2k71tcD63qrj56gQ7ougTpgBT55VnCTvTgaAyXmh52Co7qlGs2V9BIdxDTmLV6uThUWFy2tifeQwWy75MPWeB%2BAWO6KfLuE7wAyZP2PzJUryU6qr3ATxgdzEO4QVgpg545y8UhvmgcLqjpofxZ8h4HMF4gHq9M35HN0cdI0c%2FuqUbkhTAp2ZDw9wluDsM7lz4NioRW5QZ35QP7D6l6JgQRj1yxywWroIf12RIZUyuYOJDehYXDfQEOuw%2B1CFexiOEx%2FYdtTcLP0rt3S2C%2FkolaxEXzMTyPUotFs9Tz%2BGwebuin%2FFC7PN9PBvJtpsbSXkFIJZ9JNBZS4uneRAIKvKHvHQAohMqRs%2FIrNmtxXE5UcEgCwEUkxaDu2b8ZSf9rB4Y6eLorUS12g7NrzBjoKxpTKkm8fuBBgeGMWQUWSWnaFZ5iS4%2FYhv1Nv9tN2ktpi8uhdthuQFsAHGv0hkc%2FNMgCU1z%2FviU0nabrXmICZwvbpP5Wx2jrEMcNc%2BxbPzB9KUio%2BD4ZPV1DwmYfQsJwahSFG%2BfY5Kxm%2F7GaD7%2F1iziJw%2F2l0h636%2BSUW9%2F%2F9QYtqak8GXOBVLyAaqqfLQtNjIK%2BPFq%2FjCCi72%2BBjqkAQLXvkylPl8co%2BNjXyZGQWYw9%2FYYcsVkVjG9pAlijEg4Ph2v9XnCYbgSDBhOxfBC3cc4%2BzkiiAfY8sWXc2lH9Xnl%2Bd3Lf2vNs19bxq0TnakUNgQTrLD%2BrScW3RdzNWK4z8TVx8BhcoTStPlvaVAMQz3FVHlTTVPOFEtC5ADHL%2BPcmGzMNMKfJhEDpdy8hWqZrjxFXlqcTofxGx3SsMK3LC5hs6dQ&X-Amz-Signature=4d58af628c77806397fdcbd685c575dc85fbe6c88fd9bbd4e7e0005ad1ccf3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS54LYMJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC1zvdS%2F7hhfB491eptiWumcibCc56cxSoPKZAC3zXxMAIhALOc20m8gIVIBJKFBadR9BZ4cbtPTXu%2Fd5U%2FTFItYnlzKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznPrYu6ngO5OHuDLMq3AOI5X5R%2Fyu2X8Nq4YPWx7hnkUHAq8DzMXr2k71tcD63qrj56gQ7ougTpgBT55VnCTvTgaAyXmh52Co7qlGs2V9BIdxDTmLV6uThUWFy2tifeQwWy75MPWeB%2BAWO6KfLuE7wAyZP2PzJUryU6qr3ATxgdzEO4QVgpg545y8UhvmgcLqjpofxZ8h4HMF4gHq9M35HN0cdI0c%2FuqUbkhTAp2ZDw9wluDsM7lz4NioRW5QZ35QP7D6l6JgQRj1yxywWroIf12RIZUyuYOJDehYXDfQEOuw%2B1CFexiOEx%2FYdtTcLP0rt3S2C%2FkolaxEXzMTyPUotFs9Tz%2BGwebuin%2FFC7PN9PBvJtpsbSXkFIJZ9JNBZS4uneRAIKvKHvHQAohMqRs%2FIrNmtxXE5UcEgCwEUkxaDu2b8ZSf9rB4Y6eLorUS12g7NrzBjoKxpTKkm8fuBBgeGMWQUWSWnaFZ5iS4%2FYhv1Nv9tN2ktpi8uhdthuQFsAHGv0hkc%2FNMgCU1z%2FviU0nabrXmICZwvbpP5Wx2jrEMcNc%2BxbPzB9KUio%2BD4ZPV1DwmYfQsJwahSFG%2BfY5Kxm%2F7GaD7%2F1iziJw%2F2l0h636%2BSUW9%2F%2F9QYtqak8GXOBVLyAaqqfLQtNjIK%2BPFq%2FjCCi72%2BBjqkAQLXvkylPl8co%2BNjXyZGQWYw9%2FYYcsVkVjG9pAlijEg4Ph2v9XnCYbgSDBhOxfBC3cc4%2BzkiiAfY8sWXc2lH9Xnl%2Bd3Lf2vNs19bxq0TnakUNgQTrLD%2BrScW3RdzNWK4z8TVx8BhcoTStPlvaVAMQz3FVHlTTVPOFEtC5ADHL%2BPcmGzMNMKfJhEDpdy8hWqZrjxFXlqcTofxGx3SsMK3LC5hs6dQ&X-Amz-Signature=bf8ef1996c18b2cd11a83d982beca07682096e49214bdf680d18e390682a8d90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS54LYMJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC1zvdS%2F7hhfB491eptiWumcibCc56cxSoPKZAC3zXxMAIhALOc20m8gIVIBJKFBadR9BZ4cbtPTXu%2Fd5U%2FTFItYnlzKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznPrYu6ngO5OHuDLMq3AOI5X5R%2Fyu2X8Nq4YPWx7hnkUHAq8DzMXr2k71tcD63qrj56gQ7ougTpgBT55VnCTvTgaAyXmh52Co7qlGs2V9BIdxDTmLV6uThUWFy2tifeQwWy75MPWeB%2BAWO6KfLuE7wAyZP2PzJUryU6qr3ATxgdzEO4QVgpg545y8UhvmgcLqjpofxZ8h4HMF4gHq9M35HN0cdI0c%2FuqUbkhTAp2ZDw9wluDsM7lz4NioRW5QZ35QP7D6l6JgQRj1yxywWroIf12RIZUyuYOJDehYXDfQEOuw%2B1CFexiOEx%2FYdtTcLP0rt3S2C%2FkolaxEXzMTyPUotFs9Tz%2BGwebuin%2FFC7PN9PBvJtpsbSXkFIJZ9JNBZS4uneRAIKvKHvHQAohMqRs%2FIrNmtxXE5UcEgCwEUkxaDu2b8ZSf9rB4Y6eLorUS12g7NrzBjoKxpTKkm8fuBBgeGMWQUWSWnaFZ5iS4%2FYhv1Nv9tN2ktpi8uhdthuQFsAHGv0hkc%2FNMgCU1z%2FviU0nabrXmICZwvbpP5Wx2jrEMcNc%2BxbPzB9KUio%2BD4ZPV1DwmYfQsJwahSFG%2BfY5Kxm%2F7GaD7%2F1iziJw%2F2l0h636%2BSUW9%2F%2F9QYtqak8GXOBVLyAaqqfLQtNjIK%2BPFq%2FjCCi72%2BBjqkAQLXvkylPl8co%2BNjXyZGQWYw9%2FYYcsVkVjG9pAlijEg4Ph2v9XnCYbgSDBhOxfBC3cc4%2BzkiiAfY8sWXc2lH9Xnl%2Bd3Lf2vNs19bxq0TnakUNgQTrLD%2BrScW3RdzNWK4z8TVx8BhcoTStPlvaVAMQz3FVHlTTVPOFEtC5ADHL%2BPcmGzMNMKfJhEDpdy8hWqZrjxFXlqcTofxGx3SsMK3LC5hs6dQ&X-Amz-Signature=5674c3350471100cf6db8e3eef0482c02bd673a9145452c17e91de4448d6705a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS54LYMJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC1zvdS%2F7hhfB491eptiWumcibCc56cxSoPKZAC3zXxMAIhALOc20m8gIVIBJKFBadR9BZ4cbtPTXu%2Fd5U%2FTFItYnlzKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznPrYu6ngO5OHuDLMq3AOI5X5R%2Fyu2X8Nq4YPWx7hnkUHAq8DzMXr2k71tcD63qrj56gQ7ougTpgBT55VnCTvTgaAyXmh52Co7qlGs2V9BIdxDTmLV6uThUWFy2tifeQwWy75MPWeB%2BAWO6KfLuE7wAyZP2PzJUryU6qr3ATxgdzEO4QVgpg545y8UhvmgcLqjpofxZ8h4HMF4gHq9M35HN0cdI0c%2FuqUbkhTAp2ZDw9wluDsM7lz4NioRW5QZ35QP7D6l6JgQRj1yxywWroIf12RIZUyuYOJDehYXDfQEOuw%2B1CFexiOEx%2FYdtTcLP0rt3S2C%2FkolaxEXzMTyPUotFs9Tz%2BGwebuin%2FFC7PN9PBvJtpsbSXkFIJZ9JNBZS4uneRAIKvKHvHQAohMqRs%2FIrNmtxXE5UcEgCwEUkxaDu2b8ZSf9rB4Y6eLorUS12g7NrzBjoKxpTKkm8fuBBgeGMWQUWSWnaFZ5iS4%2FYhv1Nv9tN2ktpi8uhdthuQFsAHGv0hkc%2FNMgCU1z%2FviU0nabrXmICZwvbpP5Wx2jrEMcNc%2BxbPzB9KUio%2BD4ZPV1DwmYfQsJwahSFG%2BfY5Kxm%2F7GaD7%2F1iziJw%2F2l0h636%2BSUW9%2F%2F9QYtqak8GXOBVLyAaqqfLQtNjIK%2BPFq%2FjCCi72%2BBjqkAQLXvkylPl8co%2BNjXyZGQWYw9%2FYYcsVkVjG9pAlijEg4Ph2v9XnCYbgSDBhOxfBC3cc4%2BzkiiAfY8sWXc2lH9Xnl%2Bd3Lf2vNs19bxq0TnakUNgQTrLD%2BrScW3RdzNWK4z8TVx8BhcoTStPlvaVAMQz3FVHlTTVPOFEtC5ADHL%2BPcmGzMNMKfJhEDpdy8hWqZrjxFXlqcTofxGx3SsMK3LC5hs6dQ&X-Amz-Signature=bb6ddc056759ed23ae3f881e75f32348ac644bef5751007590d79f6c24e93c00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS54LYMJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC1zvdS%2F7hhfB491eptiWumcibCc56cxSoPKZAC3zXxMAIhALOc20m8gIVIBJKFBadR9BZ4cbtPTXu%2Fd5U%2FTFItYnlzKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznPrYu6ngO5OHuDLMq3AOI5X5R%2Fyu2X8Nq4YPWx7hnkUHAq8DzMXr2k71tcD63qrj56gQ7ougTpgBT55VnCTvTgaAyXmh52Co7qlGs2V9BIdxDTmLV6uThUWFy2tifeQwWy75MPWeB%2BAWO6KfLuE7wAyZP2PzJUryU6qr3ATxgdzEO4QVgpg545y8UhvmgcLqjpofxZ8h4HMF4gHq9M35HN0cdI0c%2FuqUbkhTAp2ZDw9wluDsM7lz4NioRW5QZ35QP7D6l6JgQRj1yxywWroIf12RIZUyuYOJDehYXDfQEOuw%2B1CFexiOEx%2FYdtTcLP0rt3S2C%2FkolaxEXzMTyPUotFs9Tz%2BGwebuin%2FFC7PN9PBvJtpsbSXkFIJZ9JNBZS4uneRAIKvKHvHQAohMqRs%2FIrNmtxXE5UcEgCwEUkxaDu2b8ZSf9rB4Y6eLorUS12g7NrzBjoKxpTKkm8fuBBgeGMWQUWSWnaFZ5iS4%2FYhv1Nv9tN2ktpi8uhdthuQFsAHGv0hkc%2FNMgCU1z%2FviU0nabrXmICZwvbpP5Wx2jrEMcNc%2BxbPzB9KUio%2BD4ZPV1DwmYfQsJwahSFG%2BfY5Kxm%2F7GaD7%2F1iziJw%2F2l0h636%2BSUW9%2F%2F9QYtqak8GXOBVLyAaqqfLQtNjIK%2BPFq%2FjCCi72%2BBjqkAQLXvkylPl8co%2BNjXyZGQWYw9%2FYYcsVkVjG9pAlijEg4Ph2v9XnCYbgSDBhOxfBC3cc4%2BzkiiAfY8sWXc2lH9Xnl%2Bd3Lf2vNs19bxq0TnakUNgQTrLD%2BrScW3RdzNWK4z8TVx8BhcoTStPlvaVAMQz3FVHlTTVPOFEtC5ADHL%2BPcmGzMNMKfJhEDpdy8hWqZrjxFXlqcTofxGx3SsMK3LC5hs6dQ&X-Amz-Signature=e0aed310ea9d1abe2e681953b022c79677388d2a04db8125b5c12c81853b4353&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS54LYMJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC1zvdS%2F7hhfB491eptiWumcibCc56cxSoPKZAC3zXxMAIhALOc20m8gIVIBJKFBadR9BZ4cbtPTXu%2Fd5U%2FTFItYnlzKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznPrYu6ngO5OHuDLMq3AOI5X5R%2Fyu2X8Nq4YPWx7hnkUHAq8DzMXr2k71tcD63qrj56gQ7ougTpgBT55VnCTvTgaAyXmh52Co7qlGs2V9BIdxDTmLV6uThUWFy2tifeQwWy75MPWeB%2BAWO6KfLuE7wAyZP2PzJUryU6qr3ATxgdzEO4QVgpg545y8UhvmgcLqjpofxZ8h4HMF4gHq9M35HN0cdI0c%2FuqUbkhTAp2ZDw9wluDsM7lz4NioRW5QZ35QP7D6l6JgQRj1yxywWroIf12RIZUyuYOJDehYXDfQEOuw%2B1CFexiOEx%2FYdtTcLP0rt3S2C%2FkolaxEXzMTyPUotFs9Tz%2BGwebuin%2FFC7PN9PBvJtpsbSXkFIJZ9JNBZS4uneRAIKvKHvHQAohMqRs%2FIrNmtxXE5UcEgCwEUkxaDu2b8ZSf9rB4Y6eLorUS12g7NrzBjoKxpTKkm8fuBBgeGMWQUWSWnaFZ5iS4%2FYhv1Nv9tN2ktpi8uhdthuQFsAHGv0hkc%2FNMgCU1z%2FviU0nabrXmICZwvbpP5Wx2jrEMcNc%2BxbPzB9KUio%2BD4ZPV1DwmYfQsJwahSFG%2BfY5Kxm%2F7GaD7%2F1iziJw%2F2l0h636%2BSUW9%2F%2F9QYtqak8GXOBVLyAaqqfLQtNjIK%2BPFq%2FjCCi72%2BBjqkAQLXvkylPl8co%2BNjXyZGQWYw9%2FYYcsVkVjG9pAlijEg4Ph2v9XnCYbgSDBhOxfBC3cc4%2BzkiiAfY8sWXc2lH9Xnl%2Bd3Lf2vNs19bxq0TnakUNgQTrLD%2BrScW3RdzNWK4z8TVx8BhcoTStPlvaVAMQz3FVHlTTVPOFEtC5ADHL%2BPcmGzMNMKfJhEDpdy8hWqZrjxFXlqcTofxGx3SsMK3LC5hs6dQ&X-Amz-Signature=da310afa36d2b91bf89db7b583fcef9e96016fc7ddd01ae18aacba88683793d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

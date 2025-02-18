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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY7D5T4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHvJNmE7bTYWwjbZWoaXpBK%2FrMUgG3QMUUna8bq1v7VpAiEA%2FTkiihGOHvm921bZKpgjeMfoX3GMNqGEGDKXx2uHCWYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpRK47D5VxXGFtxHircA4MqJkVgvykefxmw4yRtEzRwDmn1rJ43hodHXCNf9WQeVJVFI3CwcOXZ77zD1YtXIhVGzpEx0zGxA2OfA3a58a3UNKoxQDYslhT6LMB5jNnOu4dqfuISvBpdHeW0RNx97jLM4wRqCXQmBi7vdjRCuLV2rwdWYYsDN%2BMGHv2t4%2BptrQo0tbtEFQvuudAjPaJO7%2FKhc6FJRQunFJdUY8Q21IHjlN0fgXiLBmj1SLozL2%2FHmmafZTTktUIO0HK9ZadGKjXS9tBzaqGXps%2BZMYgfh3AACRo4XyTgmTOjsZwG3pBGznDjKbpgJR88yqlpHAY%2FuBrKJBe9QUlqd0p8zwr0d6FfdRS%2FNyjQkb0vrAxd4XI0L8JFaSOA6h0OzECCyuqQGHt1ddtPpbtCcAoXGxy3Fb0aUSLxXn6Jlfv2Qtv5%2Bwc6Xkbro%2FWWqFlBwESJmGi4a%2FPL4yxP%2BtBxcHsY92BuPunXwyAFdeFHyVdd9maYH0rE6L4eQybniwJ4XsxKtCtICDdsNLjaD3Er6AgJPB5PCZogN0gVSVRyHJdq0P3DIW7DsG2rFkybucuJlDHh1DPxXeScgSn5gA4Q0RkVkl3QarifQrWnt2Jb8z%2BX5U91hX0hXnD0E9AjGrlGTuqvMPe%2B0b0GOqUB7C38ZFnVLTAe63wBpaDFcVMDLO6fufw3jFO7VEs4PgvdxTcnE2TtwToWiBZIcnWC2pjfOfnC3Dmhj7GwT%2FF3oOIR%2BfEGI78pkx4%2BvyoqlEO5k4cnL79TZ9bI9cQ3vlWuZXZHYipKo622wnXzH7pRiNIlxRTqkJoTSz8pJxeCQKB1FiwaNUg7QBfawHVmPDXcqFkkWuFZb%2FOoxZEH1AIJgHIBjlSw&X-Amz-Signature=30023b7136b408cc762174ddc3fd738ac231b84a31b6df4cf41e36b783226780&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY7D5T4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHvJNmE7bTYWwjbZWoaXpBK%2FrMUgG3QMUUna8bq1v7VpAiEA%2FTkiihGOHvm921bZKpgjeMfoX3GMNqGEGDKXx2uHCWYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpRK47D5VxXGFtxHircA4MqJkVgvykefxmw4yRtEzRwDmn1rJ43hodHXCNf9WQeVJVFI3CwcOXZ77zD1YtXIhVGzpEx0zGxA2OfA3a58a3UNKoxQDYslhT6LMB5jNnOu4dqfuISvBpdHeW0RNx97jLM4wRqCXQmBi7vdjRCuLV2rwdWYYsDN%2BMGHv2t4%2BptrQo0tbtEFQvuudAjPaJO7%2FKhc6FJRQunFJdUY8Q21IHjlN0fgXiLBmj1SLozL2%2FHmmafZTTktUIO0HK9ZadGKjXS9tBzaqGXps%2BZMYgfh3AACRo4XyTgmTOjsZwG3pBGznDjKbpgJR88yqlpHAY%2FuBrKJBe9QUlqd0p8zwr0d6FfdRS%2FNyjQkb0vrAxd4XI0L8JFaSOA6h0OzECCyuqQGHt1ddtPpbtCcAoXGxy3Fb0aUSLxXn6Jlfv2Qtv5%2Bwc6Xkbro%2FWWqFlBwESJmGi4a%2FPL4yxP%2BtBxcHsY92BuPunXwyAFdeFHyVdd9maYH0rE6L4eQybniwJ4XsxKtCtICDdsNLjaD3Er6AgJPB5PCZogN0gVSVRyHJdq0P3DIW7DsG2rFkybucuJlDHh1DPxXeScgSn5gA4Q0RkVkl3QarifQrWnt2Jb8z%2BX5U91hX0hXnD0E9AjGrlGTuqvMPe%2B0b0GOqUB7C38ZFnVLTAe63wBpaDFcVMDLO6fufw3jFO7VEs4PgvdxTcnE2TtwToWiBZIcnWC2pjfOfnC3Dmhj7GwT%2FF3oOIR%2BfEGI78pkx4%2BvyoqlEO5k4cnL79TZ9bI9cQ3vlWuZXZHYipKo622wnXzH7pRiNIlxRTqkJoTSz8pJxeCQKB1FiwaNUg7QBfawHVmPDXcqFkkWuFZb%2FOoxZEH1AIJgHIBjlSw&X-Amz-Signature=b1dd12b540c11eb1ca861f276b0dcdf838200c099bce2784d8cce0a48cd404d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY7D5T4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHvJNmE7bTYWwjbZWoaXpBK%2FrMUgG3QMUUna8bq1v7VpAiEA%2FTkiihGOHvm921bZKpgjeMfoX3GMNqGEGDKXx2uHCWYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpRK47D5VxXGFtxHircA4MqJkVgvykefxmw4yRtEzRwDmn1rJ43hodHXCNf9WQeVJVFI3CwcOXZ77zD1YtXIhVGzpEx0zGxA2OfA3a58a3UNKoxQDYslhT6LMB5jNnOu4dqfuISvBpdHeW0RNx97jLM4wRqCXQmBi7vdjRCuLV2rwdWYYsDN%2BMGHv2t4%2BptrQo0tbtEFQvuudAjPaJO7%2FKhc6FJRQunFJdUY8Q21IHjlN0fgXiLBmj1SLozL2%2FHmmafZTTktUIO0HK9ZadGKjXS9tBzaqGXps%2BZMYgfh3AACRo4XyTgmTOjsZwG3pBGznDjKbpgJR88yqlpHAY%2FuBrKJBe9QUlqd0p8zwr0d6FfdRS%2FNyjQkb0vrAxd4XI0L8JFaSOA6h0OzECCyuqQGHt1ddtPpbtCcAoXGxy3Fb0aUSLxXn6Jlfv2Qtv5%2Bwc6Xkbro%2FWWqFlBwESJmGi4a%2FPL4yxP%2BtBxcHsY92BuPunXwyAFdeFHyVdd9maYH0rE6L4eQybniwJ4XsxKtCtICDdsNLjaD3Er6AgJPB5PCZogN0gVSVRyHJdq0P3DIW7DsG2rFkybucuJlDHh1DPxXeScgSn5gA4Q0RkVkl3QarifQrWnt2Jb8z%2BX5U91hX0hXnD0E9AjGrlGTuqvMPe%2B0b0GOqUB7C38ZFnVLTAe63wBpaDFcVMDLO6fufw3jFO7VEs4PgvdxTcnE2TtwToWiBZIcnWC2pjfOfnC3Dmhj7GwT%2FF3oOIR%2BfEGI78pkx4%2BvyoqlEO5k4cnL79TZ9bI9cQ3vlWuZXZHYipKo622wnXzH7pRiNIlxRTqkJoTSz8pJxeCQKB1FiwaNUg7QBfawHVmPDXcqFkkWuFZb%2FOoxZEH1AIJgHIBjlSw&X-Amz-Signature=5c42b02d74fb70cf5f8ce5cdddd166d2cb6c46658065c7b4e91501d690b7c92b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY7D5T4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHvJNmE7bTYWwjbZWoaXpBK%2FrMUgG3QMUUna8bq1v7VpAiEA%2FTkiihGOHvm921bZKpgjeMfoX3GMNqGEGDKXx2uHCWYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpRK47D5VxXGFtxHircA4MqJkVgvykefxmw4yRtEzRwDmn1rJ43hodHXCNf9WQeVJVFI3CwcOXZ77zD1YtXIhVGzpEx0zGxA2OfA3a58a3UNKoxQDYslhT6LMB5jNnOu4dqfuISvBpdHeW0RNx97jLM4wRqCXQmBi7vdjRCuLV2rwdWYYsDN%2BMGHv2t4%2BptrQo0tbtEFQvuudAjPaJO7%2FKhc6FJRQunFJdUY8Q21IHjlN0fgXiLBmj1SLozL2%2FHmmafZTTktUIO0HK9ZadGKjXS9tBzaqGXps%2BZMYgfh3AACRo4XyTgmTOjsZwG3pBGznDjKbpgJR88yqlpHAY%2FuBrKJBe9QUlqd0p8zwr0d6FfdRS%2FNyjQkb0vrAxd4XI0L8JFaSOA6h0OzECCyuqQGHt1ddtPpbtCcAoXGxy3Fb0aUSLxXn6Jlfv2Qtv5%2Bwc6Xkbro%2FWWqFlBwESJmGi4a%2FPL4yxP%2BtBxcHsY92BuPunXwyAFdeFHyVdd9maYH0rE6L4eQybniwJ4XsxKtCtICDdsNLjaD3Er6AgJPB5PCZogN0gVSVRyHJdq0P3DIW7DsG2rFkybucuJlDHh1DPxXeScgSn5gA4Q0RkVkl3QarifQrWnt2Jb8z%2BX5U91hX0hXnD0E9AjGrlGTuqvMPe%2B0b0GOqUB7C38ZFnVLTAe63wBpaDFcVMDLO6fufw3jFO7VEs4PgvdxTcnE2TtwToWiBZIcnWC2pjfOfnC3Dmhj7GwT%2FF3oOIR%2BfEGI78pkx4%2BvyoqlEO5k4cnL79TZ9bI9cQ3vlWuZXZHYipKo622wnXzH7pRiNIlxRTqkJoTSz8pJxeCQKB1FiwaNUg7QBfawHVmPDXcqFkkWuFZb%2FOoxZEH1AIJgHIBjlSw&X-Amz-Signature=4f499b6942ab4f2794011658ed46fbd20a33dd75fb1de5dc0a5d9e589eb8d247&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY7D5T4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHvJNmE7bTYWwjbZWoaXpBK%2FrMUgG3QMUUna8bq1v7VpAiEA%2FTkiihGOHvm921bZKpgjeMfoX3GMNqGEGDKXx2uHCWYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpRK47D5VxXGFtxHircA4MqJkVgvykefxmw4yRtEzRwDmn1rJ43hodHXCNf9WQeVJVFI3CwcOXZ77zD1YtXIhVGzpEx0zGxA2OfA3a58a3UNKoxQDYslhT6LMB5jNnOu4dqfuISvBpdHeW0RNx97jLM4wRqCXQmBi7vdjRCuLV2rwdWYYsDN%2BMGHv2t4%2BptrQo0tbtEFQvuudAjPaJO7%2FKhc6FJRQunFJdUY8Q21IHjlN0fgXiLBmj1SLozL2%2FHmmafZTTktUIO0HK9ZadGKjXS9tBzaqGXps%2BZMYgfh3AACRo4XyTgmTOjsZwG3pBGznDjKbpgJR88yqlpHAY%2FuBrKJBe9QUlqd0p8zwr0d6FfdRS%2FNyjQkb0vrAxd4XI0L8JFaSOA6h0OzECCyuqQGHt1ddtPpbtCcAoXGxy3Fb0aUSLxXn6Jlfv2Qtv5%2Bwc6Xkbro%2FWWqFlBwESJmGi4a%2FPL4yxP%2BtBxcHsY92BuPunXwyAFdeFHyVdd9maYH0rE6L4eQybniwJ4XsxKtCtICDdsNLjaD3Er6AgJPB5PCZogN0gVSVRyHJdq0P3DIW7DsG2rFkybucuJlDHh1DPxXeScgSn5gA4Q0RkVkl3QarifQrWnt2Jb8z%2BX5U91hX0hXnD0E9AjGrlGTuqvMPe%2B0b0GOqUB7C38ZFnVLTAe63wBpaDFcVMDLO6fufw3jFO7VEs4PgvdxTcnE2TtwToWiBZIcnWC2pjfOfnC3Dmhj7GwT%2FF3oOIR%2BfEGI78pkx4%2BvyoqlEO5k4cnL79TZ9bI9cQ3vlWuZXZHYipKo622wnXzH7pRiNIlxRTqkJoTSz8pJxeCQKB1FiwaNUg7QBfawHVmPDXcqFkkWuFZb%2FOoxZEH1AIJgHIBjlSw&X-Amz-Signature=890a7c7365ed4466c4b29c0795f6aa82ebc13644b7bbbbe56098a2f6625c843a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY7D5T4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHvJNmE7bTYWwjbZWoaXpBK%2FrMUgG3QMUUna8bq1v7VpAiEA%2FTkiihGOHvm921bZKpgjeMfoX3GMNqGEGDKXx2uHCWYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpRK47D5VxXGFtxHircA4MqJkVgvykefxmw4yRtEzRwDmn1rJ43hodHXCNf9WQeVJVFI3CwcOXZ77zD1YtXIhVGzpEx0zGxA2OfA3a58a3UNKoxQDYslhT6LMB5jNnOu4dqfuISvBpdHeW0RNx97jLM4wRqCXQmBi7vdjRCuLV2rwdWYYsDN%2BMGHv2t4%2BptrQo0tbtEFQvuudAjPaJO7%2FKhc6FJRQunFJdUY8Q21IHjlN0fgXiLBmj1SLozL2%2FHmmafZTTktUIO0HK9ZadGKjXS9tBzaqGXps%2BZMYgfh3AACRo4XyTgmTOjsZwG3pBGznDjKbpgJR88yqlpHAY%2FuBrKJBe9QUlqd0p8zwr0d6FfdRS%2FNyjQkb0vrAxd4XI0L8JFaSOA6h0OzECCyuqQGHt1ddtPpbtCcAoXGxy3Fb0aUSLxXn6Jlfv2Qtv5%2Bwc6Xkbro%2FWWqFlBwESJmGi4a%2FPL4yxP%2BtBxcHsY92BuPunXwyAFdeFHyVdd9maYH0rE6L4eQybniwJ4XsxKtCtICDdsNLjaD3Er6AgJPB5PCZogN0gVSVRyHJdq0P3DIW7DsG2rFkybucuJlDHh1DPxXeScgSn5gA4Q0RkVkl3QarifQrWnt2Jb8z%2BX5U91hX0hXnD0E9AjGrlGTuqvMPe%2B0b0GOqUB7C38ZFnVLTAe63wBpaDFcVMDLO6fufw3jFO7VEs4PgvdxTcnE2TtwToWiBZIcnWC2pjfOfnC3Dmhj7GwT%2FF3oOIR%2BfEGI78pkx4%2BvyoqlEO5k4cnL79TZ9bI9cQ3vlWuZXZHYipKo622wnXzH7pRiNIlxRTqkJoTSz8pJxeCQKB1FiwaNUg7QBfawHVmPDXcqFkkWuFZb%2FOoxZEH1AIJgHIBjlSw&X-Amz-Signature=632b7968e426e37cad64449fd64f372f78a76f11e3a705ddc039086a1e39c998&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY7D5T4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHvJNmE7bTYWwjbZWoaXpBK%2FrMUgG3QMUUna8bq1v7VpAiEA%2FTkiihGOHvm921bZKpgjeMfoX3GMNqGEGDKXx2uHCWYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpRK47D5VxXGFtxHircA4MqJkVgvykefxmw4yRtEzRwDmn1rJ43hodHXCNf9WQeVJVFI3CwcOXZ77zD1YtXIhVGzpEx0zGxA2OfA3a58a3UNKoxQDYslhT6LMB5jNnOu4dqfuISvBpdHeW0RNx97jLM4wRqCXQmBi7vdjRCuLV2rwdWYYsDN%2BMGHv2t4%2BptrQo0tbtEFQvuudAjPaJO7%2FKhc6FJRQunFJdUY8Q21IHjlN0fgXiLBmj1SLozL2%2FHmmafZTTktUIO0HK9ZadGKjXS9tBzaqGXps%2BZMYgfh3AACRo4XyTgmTOjsZwG3pBGznDjKbpgJR88yqlpHAY%2FuBrKJBe9QUlqd0p8zwr0d6FfdRS%2FNyjQkb0vrAxd4XI0L8JFaSOA6h0OzECCyuqQGHt1ddtPpbtCcAoXGxy3Fb0aUSLxXn6Jlfv2Qtv5%2Bwc6Xkbro%2FWWqFlBwESJmGi4a%2FPL4yxP%2BtBxcHsY92BuPunXwyAFdeFHyVdd9maYH0rE6L4eQybniwJ4XsxKtCtICDdsNLjaD3Er6AgJPB5PCZogN0gVSVRyHJdq0P3DIW7DsG2rFkybucuJlDHh1DPxXeScgSn5gA4Q0RkVkl3QarifQrWnt2Jb8z%2BX5U91hX0hXnD0E9AjGrlGTuqvMPe%2B0b0GOqUB7C38ZFnVLTAe63wBpaDFcVMDLO6fufw3jFO7VEs4PgvdxTcnE2TtwToWiBZIcnWC2pjfOfnC3Dmhj7GwT%2FF3oOIR%2BfEGI78pkx4%2BvyoqlEO5k4cnL79TZ9bI9cQ3vlWuZXZHYipKo622wnXzH7pRiNIlxRTqkJoTSz8pJxeCQKB1FiwaNUg7QBfawHVmPDXcqFkkWuFZb%2FOoxZEH1AIJgHIBjlSw&X-Amz-Signature=fc9c8dda47dfa7d0221da19eed51d548c1d68102aebfc2894cef3e1d372fec71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAY7D5T4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHvJNmE7bTYWwjbZWoaXpBK%2FrMUgG3QMUUna8bq1v7VpAiEA%2FTkiihGOHvm921bZKpgjeMfoX3GMNqGEGDKXx2uHCWYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpRK47D5VxXGFtxHircA4MqJkVgvykefxmw4yRtEzRwDmn1rJ43hodHXCNf9WQeVJVFI3CwcOXZ77zD1YtXIhVGzpEx0zGxA2OfA3a58a3UNKoxQDYslhT6LMB5jNnOu4dqfuISvBpdHeW0RNx97jLM4wRqCXQmBi7vdjRCuLV2rwdWYYsDN%2BMGHv2t4%2BptrQo0tbtEFQvuudAjPaJO7%2FKhc6FJRQunFJdUY8Q21IHjlN0fgXiLBmj1SLozL2%2FHmmafZTTktUIO0HK9ZadGKjXS9tBzaqGXps%2BZMYgfh3AACRo4XyTgmTOjsZwG3pBGznDjKbpgJR88yqlpHAY%2FuBrKJBe9QUlqd0p8zwr0d6FfdRS%2FNyjQkb0vrAxd4XI0L8JFaSOA6h0OzECCyuqQGHt1ddtPpbtCcAoXGxy3Fb0aUSLxXn6Jlfv2Qtv5%2Bwc6Xkbro%2FWWqFlBwESJmGi4a%2FPL4yxP%2BtBxcHsY92BuPunXwyAFdeFHyVdd9maYH0rE6L4eQybniwJ4XsxKtCtICDdsNLjaD3Er6AgJPB5PCZogN0gVSVRyHJdq0P3DIW7DsG2rFkybucuJlDHh1DPxXeScgSn5gA4Q0RkVkl3QarifQrWnt2Jb8z%2BX5U91hX0hXnD0E9AjGrlGTuqvMPe%2B0b0GOqUB7C38ZFnVLTAe63wBpaDFcVMDLO6fufw3jFO7VEs4PgvdxTcnE2TtwToWiBZIcnWC2pjfOfnC3Dmhj7GwT%2FF3oOIR%2BfEGI78pkx4%2BvyoqlEO5k4cnL79TZ9bI9cQ3vlWuZXZHYipKo622wnXzH7pRiNIlxRTqkJoTSz8pJxeCQKB1FiwaNUg7QBfawHVmPDXcqFkkWuFZb%2FOoxZEH1AIJgHIBjlSw&X-Amz-Signature=11e4a340842838da98d6e9e5f0eeb97deb704b3a008a40061598d405061ed1d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUZUOSQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID0yjm65xsXDDnR36%2BtAnAxKXqFiQrbNZI2AjqCcRu%2FuAiB%2BcQilfbTjLS%2FAOFePsOxf51pCbBorEKuaJhXOiIMpRyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLyZgEVPt1%2FVEJPh5KtwD21JaLEe4WCoW3aF9MNtg1NbRDze7tQG6XpiD5emVg4CrnQwUP7XZNNgLb7egCTZAFGdlh6IUVy%2BRJ5S65y2RMvPgHbF1CR3t26utJiaBjvDYsxB3TTB1nj6qgZpcqd9H%2F1YUSv8FyQLGhcWE90xTOLjnvLAI1DFh48yQB%2FNJbpyrJrswHRQ07BVcBqGtodfK7Pjui2ljULHlv3Hz6y%2B9IaCMCThHRsnCdkfeoClp326p1%2BoFLWlcL5eHP4FBCNsWn2Gm46yCVHnRaUxNoWZh%2FSyspLTIpfuUC0mXIF%2BrHjl77lpd66W1mKhsdd2ZUXixZNWN%2FvuQekZkSFqIpAVe4wQ5HjKNnsKk7gLugXITtNCeabiYFbZaoZbg%2F4A2TfjZMll0pSZsj38HHIUXzo9hp018w7zpU%2BVH%2Fnyc77CtGPqhPB5Qcglxak%2BgqiD1M5ljGEAq%2Fh8mc%2BGc91YWQmRjDRww8ic0JDiRNrs7YvdyaWiQ8l8gCCc4n7wgI6rJQGsvZ839WAsZkmw3oO7wPvFrLRt140N5zrm1w23ihjAysva%2FJFIDVbF4kGcVivJYhppnUN%2B6CsnvhhXnBV7B4cR85H23WBmF5Nc1QxOq8k5NPulgbSwlMoHOXKiUtqUwqOTxvgY6pgHf2Ll0UEunEIpEz8HYaWRj3TqJfcze%2FSjpgVhD8OEbqilXjiN%2B7h57va%2BYJ4Ln1mnOY1wZAyAGpcQ5cDfzAzMEON0vXNr4Bep15IVfeScE6AIzAYi92NAw5cjhnO4jgTxMC5K7CKo7ic%2BuOxdPJuidLCcxMCGEoyGRKtfA6Zzs%2FqowKYptMTJsdnNxtjthSzuZ4BW6gMkJ8lJIB%2FPvMKvSDTG2iEJg&X-Amz-Signature=820d78dcb476e3a9443da230110646fa1eba4548108243e7891dbd9174a2980f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUZUOSQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID0yjm65xsXDDnR36%2BtAnAxKXqFiQrbNZI2AjqCcRu%2FuAiB%2BcQilfbTjLS%2FAOFePsOxf51pCbBorEKuaJhXOiIMpRyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLyZgEVPt1%2FVEJPh5KtwD21JaLEe4WCoW3aF9MNtg1NbRDze7tQG6XpiD5emVg4CrnQwUP7XZNNgLb7egCTZAFGdlh6IUVy%2BRJ5S65y2RMvPgHbF1CR3t26utJiaBjvDYsxB3TTB1nj6qgZpcqd9H%2F1YUSv8FyQLGhcWE90xTOLjnvLAI1DFh48yQB%2FNJbpyrJrswHRQ07BVcBqGtodfK7Pjui2ljULHlv3Hz6y%2B9IaCMCThHRsnCdkfeoClp326p1%2BoFLWlcL5eHP4FBCNsWn2Gm46yCVHnRaUxNoWZh%2FSyspLTIpfuUC0mXIF%2BrHjl77lpd66W1mKhsdd2ZUXixZNWN%2FvuQekZkSFqIpAVe4wQ5HjKNnsKk7gLugXITtNCeabiYFbZaoZbg%2F4A2TfjZMll0pSZsj38HHIUXzo9hp018w7zpU%2BVH%2Fnyc77CtGPqhPB5Qcglxak%2BgqiD1M5ljGEAq%2Fh8mc%2BGc91YWQmRjDRww8ic0JDiRNrs7YvdyaWiQ8l8gCCc4n7wgI6rJQGsvZ839WAsZkmw3oO7wPvFrLRt140N5zrm1w23ihjAysva%2FJFIDVbF4kGcVivJYhppnUN%2B6CsnvhhXnBV7B4cR85H23WBmF5Nc1QxOq8k5NPulgbSwlMoHOXKiUtqUwqOTxvgY6pgHf2Ll0UEunEIpEz8HYaWRj3TqJfcze%2FSjpgVhD8OEbqilXjiN%2B7h57va%2BYJ4Ln1mnOY1wZAyAGpcQ5cDfzAzMEON0vXNr4Bep15IVfeScE6AIzAYi92NAw5cjhnO4jgTxMC5K7CKo7ic%2BuOxdPJuidLCcxMCGEoyGRKtfA6Zzs%2FqowKYptMTJsdnNxtjthSzuZ4BW6gMkJ8lJIB%2FPvMKvSDTG2iEJg&X-Amz-Signature=6fc8784721b19dbc6e516851d9bfdda8f1d18516d20178cccebbdf32cc692423&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUZUOSQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID0yjm65xsXDDnR36%2BtAnAxKXqFiQrbNZI2AjqCcRu%2FuAiB%2BcQilfbTjLS%2FAOFePsOxf51pCbBorEKuaJhXOiIMpRyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLyZgEVPt1%2FVEJPh5KtwD21JaLEe4WCoW3aF9MNtg1NbRDze7tQG6XpiD5emVg4CrnQwUP7XZNNgLb7egCTZAFGdlh6IUVy%2BRJ5S65y2RMvPgHbF1CR3t26utJiaBjvDYsxB3TTB1nj6qgZpcqd9H%2F1YUSv8FyQLGhcWE90xTOLjnvLAI1DFh48yQB%2FNJbpyrJrswHRQ07BVcBqGtodfK7Pjui2ljULHlv3Hz6y%2B9IaCMCThHRsnCdkfeoClp326p1%2BoFLWlcL5eHP4FBCNsWn2Gm46yCVHnRaUxNoWZh%2FSyspLTIpfuUC0mXIF%2BrHjl77lpd66W1mKhsdd2ZUXixZNWN%2FvuQekZkSFqIpAVe4wQ5HjKNnsKk7gLugXITtNCeabiYFbZaoZbg%2F4A2TfjZMll0pSZsj38HHIUXzo9hp018w7zpU%2BVH%2Fnyc77CtGPqhPB5Qcglxak%2BgqiD1M5ljGEAq%2Fh8mc%2BGc91YWQmRjDRww8ic0JDiRNrs7YvdyaWiQ8l8gCCc4n7wgI6rJQGsvZ839WAsZkmw3oO7wPvFrLRt140N5zrm1w23ihjAysva%2FJFIDVbF4kGcVivJYhppnUN%2B6CsnvhhXnBV7B4cR85H23WBmF5Nc1QxOq8k5NPulgbSwlMoHOXKiUtqUwqOTxvgY6pgHf2Ll0UEunEIpEz8HYaWRj3TqJfcze%2FSjpgVhD8OEbqilXjiN%2B7h57va%2BYJ4Ln1mnOY1wZAyAGpcQ5cDfzAzMEON0vXNr4Bep15IVfeScE6AIzAYi92NAw5cjhnO4jgTxMC5K7CKo7ic%2BuOxdPJuidLCcxMCGEoyGRKtfA6Zzs%2FqowKYptMTJsdnNxtjthSzuZ4BW6gMkJ8lJIB%2FPvMKvSDTG2iEJg&X-Amz-Signature=f233f8054e1647ed7f1c0bd5628e324e5437db61081ea73989622360ee8d193a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUZUOSQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID0yjm65xsXDDnR36%2BtAnAxKXqFiQrbNZI2AjqCcRu%2FuAiB%2BcQilfbTjLS%2FAOFePsOxf51pCbBorEKuaJhXOiIMpRyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLyZgEVPt1%2FVEJPh5KtwD21JaLEe4WCoW3aF9MNtg1NbRDze7tQG6XpiD5emVg4CrnQwUP7XZNNgLb7egCTZAFGdlh6IUVy%2BRJ5S65y2RMvPgHbF1CR3t26utJiaBjvDYsxB3TTB1nj6qgZpcqd9H%2F1YUSv8FyQLGhcWE90xTOLjnvLAI1DFh48yQB%2FNJbpyrJrswHRQ07BVcBqGtodfK7Pjui2ljULHlv3Hz6y%2B9IaCMCThHRsnCdkfeoClp326p1%2BoFLWlcL5eHP4FBCNsWn2Gm46yCVHnRaUxNoWZh%2FSyspLTIpfuUC0mXIF%2BrHjl77lpd66W1mKhsdd2ZUXixZNWN%2FvuQekZkSFqIpAVe4wQ5HjKNnsKk7gLugXITtNCeabiYFbZaoZbg%2F4A2TfjZMll0pSZsj38HHIUXzo9hp018w7zpU%2BVH%2Fnyc77CtGPqhPB5Qcglxak%2BgqiD1M5ljGEAq%2Fh8mc%2BGc91YWQmRjDRww8ic0JDiRNrs7YvdyaWiQ8l8gCCc4n7wgI6rJQGsvZ839WAsZkmw3oO7wPvFrLRt140N5zrm1w23ihjAysva%2FJFIDVbF4kGcVivJYhppnUN%2B6CsnvhhXnBV7B4cR85H23WBmF5Nc1QxOq8k5NPulgbSwlMoHOXKiUtqUwqOTxvgY6pgHf2Ll0UEunEIpEz8HYaWRj3TqJfcze%2FSjpgVhD8OEbqilXjiN%2B7h57va%2BYJ4Ln1mnOY1wZAyAGpcQ5cDfzAzMEON0vXNr4Bep15IVfeScE6AIzAYi92NAw5cjhnO4jgTxMC5K7CKo7ic%2BuOxdPJuidLCcxMCGEoyGRKtfA6Zzs%2FqowKYptMTJsdnNxtjthSzuZ4BW6gMkJ8lJIB%2FPvMKvSDTG2iEJg&X-Amz-Signature=58a2c34befecbfd8864a547798f58e77c1b841c8ffbf8ff98482859a9ec3a6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUZUOSQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID0yjm65xsXDDnR36%2BtAnAxKXqFiQrbNZI2AjqCcRu%2FuAiB%2BcQilfbTjLS%2FAOFePsOxf51pCbBorEKuaJhXOiIMpRyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLyZgEVPt1%2FVEJPh5KtwD21JaLEe4WCoW3aF9MNtg1NbRDze7tQG6XpiD5emVg4CrnQwUP7XZNNgLb7egCTZAFGdlh6IUVy%2BRJ5S65y2RMvPgHbF1CR3t26utJiaBjvDYsxB3TTB1nj6qgZpcqd9H%2F1YUSv8FyQLGhcWE90xTOLjnvLAI1DFh48yQB%2FNJbpyrJrswHRQ07BVcBqGtodfK7Pjui2ljULHlv3Hz6y%2B9IaCMCThHRsnCdkfeoClp326p1%2BoFLWlcL5eHP4FBCNsWn2Gm46yCVHnRaUxNoWZh%2FSyspLTIpfuUC0mXIF%2BrHjl77lpd66W1mKhsdd2ZUXixZNWN%2FvuQekZkSFqIpAVe4wQ5HjKNnsKk7gLugXITtNCeabiYFbZaoZbg%2F4A2TfjZMll0pSZsj38HHIUXzo9hp018w7zpU%2BVH%2Fnyc77CtGPqhPB5Qcglxak%2BgqiD1M5ljGEAq%2Fh8mc%2BGc91YWQmRjDRww8ic0JDiRNrs7YvdyaWiQ8l8gCCc4n7wgI6rJQGsvZ839WAsZkmw3oO7wPvFrLRt140N5zrm1w23ihjAysva%2FJFIDVbF4kGcVivJYhppnUN%2B6CsnvhhXnBV7B4cR85H23WBmF5Nc1QxOq8k5NPulgbSwlMoHOXKiUtqUwqOTxvgY6pgHf2Ll0UEunEIpEz8HYaWRj3TqJfcze%2FSjpgVhD8OEbqilXjiN%2B7h57va%2BYJ4Ln1mnOY1wZAyAGpcQ5cDfzAzMEON0vXNr4Bep15IVfeScE6AIzAYi92NAw5cjhnO4jgTxMC5K7CKo7ic%2BuOxdPJuidLCcxMCGEoyGRKtfA6Zzs%2FqowKYptMTJsdnNxtjthSzuZ4BW6gMkJ8lJIB%2FPvMKvSDTG2iEJg&X-Amz-Signature=5a2a06b8224480a14bd558ded377185e5cbd0da98ea6567ba152e6d6a0f9777d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUZUOSQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID0yjm65xsXDDnR36%2BtAnAxKXqFiQrbNZI2AjqCcRu%2FuAiB%2BcQilfbTjLS%2FAOFePsOxf51pCbBorEKuaJhXOiIMpRyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLyZgEVPt1%2FVEJPh5KtwD21JaLEe4WCoW3aF9MNtg1NbRDze7tQG6XpiD5emVg4CrnQwUP7XZNNgLb7egCTZAFGdlh6IUVy%2BRJ5S65y2RMvPgHbF1CR3t26utJiaBjvDYsxB3TTB1nj6qgZpcqd9H%2F1YUSv8FyQLGhcWE90xTOLjnvLAI1DFh48yQB%2FNJbpyrJrswHRQ07BVcBqGtodfK7Pjui2ljULHlv3Hz6y%2B9IaCMCThHRsnCdkfeoClp326p1%2BoFLWlcL5eHP4FBCNsWn2Gm46yCVHnRaUxNoWZh%2FSyspLTIpfuUC0mXIF%2BrHjl77lpd66W1mKhsdd2ZUXixZNWN%2FvuQekZkSFqIpAVe4wQ5HjKNnsKk7gLugXITtNCeabiYFbZaoZbg%2F4A2TfjZMll0pSZsj38HHIUXzo9hp018w7zpU%2BVH%2Fnyc77CtGPqhPB5Qcglxak%2BgqiD1M5ljGEAq%2Fh8mc%2BGc91YWQmRjDRww8ic0JDiRNrs7YvdyaWiQ8l8gCCc4n7wgI6rJQGsvZ839WAsZkmw3oO7wPvFrLRt140N5zrm1w23ihjAysva%2FJFIDVbF4kGcVivJYhppnUN%2B6CsnvhhXnBV7B4cR85H23WBmF5Nc1QxOq8k5NPulgbSwlMoHOXKiUtqUwqOTxvgY6pgHf2Ll0UEunEIpEz8HYaWRj3TqJfcze%2FSjpgVhD8OEbqilXjiN%2B7h57va%2BYJ4Ln1mnOY1wZAyAGpcQ5cDfzAzMEON0vXNr4Bep15IVfeScE6AIzAYi92NAw5cjhnO4jgTxMC5K7CKo7ic%2BuOxdPJuidLCcxMCGEoyGRKtfA6Zzs%2FqowKYptMTJsdnNxtjthSzuZ4BW6gMkJ8lJIB%2FPvMKvSDTG2iEJg&X-Amz-Signature=b68af7eec0bcca76c773792d3034f3bce86379e17c23b39887e74b3ab1b7a18f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUZUOSQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID0yjm65xsXDDnR36%2BtAnAxKXqFiQrbNZI2AjqCcRu%2FuAiB%2BcQilfbTjLS%2FAOFePsOxf51pCbBorEKuaJhXOiIMpRyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLyZgEVPt1%2FVEJPh5KtwD21JaLEe4WCoW3aF9MNtg1NbRDze7tQG6XpiD5emVg4CrnQwUP7XZNNgLb7egCTZAFGdlh6IUVy%2BRJ5S65y2RMvPgHbF1CR3t26utJiaBjvDYsxB3TTB1nj6qgZpcqd9H%2F1YUSv8FyQLGhcWE90xTOLjnvLAI1DFh48yQB%2FNJbpyrJrswHRQ07BVcBqGtodfK7Pjui2ljULHlv3Hz6y%2B9IaCMCThHRsnCdkfeoClp326p1%2BoFLWlcL5eHP4FBCNsWn2Gm46yCVHnRaUxNoWZh%2FSyspLTIpfuUC0mXIF%2BrHjl77lpd66W1mKhsdd2ZUXixZNWN%2FvuQekZkSFqIpAVe4wQ5HjKNnsKk7gLugXITtNCeabiYFbZaoZbg%2F4A2TfjZMll0pSZsj38HHIUXzo9hp018w7zpU%2BVH%2Fnyc77CtGPqhPB5Qcglxak%2BgqiD1M5ljGEAq%2Fh8mc%2BGc91YWQmRjDRww8ic0JDiRNrs7YvdyaWiQ8l8gCCc4n7wgI6rJQGsvZ839WAsZkmw3oO7wPvFrLRt140N5zrm1w23ihjAysva%2FJFIDVbF4kGcVivJYhppnUN%2B6CsnvhhXnBV7B4cR85H23WBmF5Nc1QxOq8k5NPulgbSwlMoHOXKiUtqUwqOTxvgY6pgHf2Ll0UEunEIpEz8HYaWRj3TqJfcze%2FSjpgVhD8OEbqilXjiN%2B7h57va%2BYJ4Ln1mnOY1wZAyAGpcQ5cDfzAzMEON0vXNr4Bep15IVfeScE6AIzAYi92NAw5cjhnO4jgTxMC5K7CKo7ic%2BuOxdPJuidLCcxMCGEoyGRKtfA6Zzs%2FqowKYptMTJsdnNxtjthSzuZ4BW6gMkJ8lJIB%2FPvMKvSDTG2iEJg&X-Amz-Signature=29cbcd19b00fa1f2fdc9ffa69dfef842bcbb9fa957d9c7215a2f725397b1689e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUZUOSQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCID0yjm65xsXDDnR36%2BtAnAxKXqFiQrbNZI2AjqCcRu%2FuAiB%2BcQilfbTjLS%2FAOFePsOxf51pCbBorEKuaJhXOiIMpRyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLyZgEVPt1%2FVEJPh5KtwD21JaLEe4WCoW3aF9MNtg1NbRDze7tQG6XpiD5emVg4CrnQwUP7XZNNgLb7egCTZAFGdlh6IUVy%2BRJ5S65y2RMvPgHbF1CR3t26utJiaBjvDYsxB3TTB1nj6qgZpcqd9H%2F1YUSv8FyQLGhcWE90xTOLjnvLAI1DFh48yQB%2FNJbpyrJrswHRQ07BVcBqGtodfK7Pjui2ljULHlv3Hz6y%2B9IaCMCThHRsnCdkfeoClp326p1%2BoFLWlcL5eHP4FBCNsWn2Gm46yCVHnRaUxNoWZh%2FSyspLTIpfuUC0mXIF%2BrHjl77lpd66W1mKhsdd2ZUXixZNWN%2FvuQekZkSFqIpAVe4wQ5HjKNnsKk7gLugXITtNCeabiYFbZaoZbg%2F4A2TfjZMll0pSZsj38HHIUXzo9hp018w7zpU%2BVH%2Fnyc77CtGPqhPB5Qcglxak%2BgqiD1M5ljGEAq%2Fh8mc%2BGc91YWQmRjDRww8ic0JDiRNrs7YvdyaWiQ8l8gCCc4n7wgI6rJQGsvZ839WAsZkmw3oO7wPvFrLRt140N5zrm1w23ihjAysva%2FJFIDVbF4kGcVivJYhppnUN%2B6CsnvhhXnBV7B4cR85H23WBmF5Nc1QxOq8k5NPulgbSwlMoHOXKiUtqUwqOTxvgY6pgHf2Ll0UEunEIpEz8HYaWRj3TqJfcze%2FSjpgVhD8OEbqilXjiN%2B7h57va%2BYJ4Ln1mnOY1wZAyAGpcQ5cDfzAzMEON0vXNr4Bep15IVfeScE6AIzAYi92NAw5cjhnO4jgTxMC5K7CKo7ic%2BuOxdPJuidLCcxMCGEoyGRKtfA6Zzs%2FqowKYptMTJsdnNxtjthSzuZ4BW6gMkJ8lJIB%2FPvMKvSDTG2iEJg&X-Amz-Signature=0bbcce8a9b6029f024c0c60984ee82cfc473e627d89862771877cfe5be716644&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

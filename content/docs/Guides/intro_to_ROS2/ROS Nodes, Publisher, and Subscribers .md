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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT3RGC7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnSYmPJrfiQX632ZspX5gtUxesjt%2ByiGZLHeJ9%2BFkyyAiB2w6Yvai4m9miY6KNTt%2FbKRgkC3JwBX8OzQFBNMSpsKyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMEzWsrhitR2ouVFaEKtwDVUDFl8L2ZeB9Gx0Yo58JF73oSzDJVO01j9MVDGgRVG7JtGX7UqABcpw0JCuHrn%2BuYBGq4JLWLoLfwYxt9Aa0pbkNvRfRVCHH8VVzdvQ0UGM2cPOtttzt31FeI2dcpEJszY1Xwixcr%2FdVXp1s0b%2BHvpvNTq6SXjOp34K7SLt2ScisqY9wkz51ILS2iU8RHB%2Fs5DNhkD8VDIEufr0zaRtyrc7I4aMg6G6b7POVs1ga7ZVmHXX7gvKBSEyCD1kBPu64ARc17c4tpPgWFkiRvtaEcsaTk0jYXgAH5AIvQDLKfT20MjELABNWDrpAFv5Zbj02qun97ZEyVL8krI%2FnXfsBapiyYj5gKMYc2fmTWzmIt8Bos1lOHH3S6IoAEysMHs6HsV9M7yL2JFZQ9FSd9zroL%2BzvQhMSLSiiYpFvD5E1n0r0PbK11%2F912kWxHIk%2Bqls1ynl6n%2BxGvQGP%2FWMNLFaPUqTFfphA%2B78NhsIA3uvxP1pmrojO1P5vKEb2IRTL%2Fib2jAJtNjhECrIFzJJiIrMBX0PA0HJPJzpuRsDZzaGGhUWURH%2BuFCUYMCJEK2nF%2FVLzHGATPbiA1jdYchpUMOmfkvrCTou%2F3TlwvseQh2XvD4d4TIGnFZL9NkEIiKow%2FunzxAY6pgGAmQ%2FvXOGE5YAqGyqRgNjNMB2uuhky1wyr6uIrYm3gOWjnnCLTZ7adQOBlCNUW8kg7M5qf%2Be6Z4FKX%2FCzCiOQzvCimzC%2BdNdABO8N9yvaqflTdEZZX1H3%2BpJts6hTvCswUzA4SFXJzkv%2FioK%2FuBj4vGiO1umwF32XnklJORV%2FoZt7t1VmiCcrPgNAGZR2XA1tD63ez8OMlJTgqrua9xYYThsO7Fn2f&X-Amz-Signature=67de09048294f45693ed9d4b67b8777f2a1854383ddafd16280e8aeb2d491231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT3RGC7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnSYmPJrfiQX632ZspX5gtUxesjt%2ByiGZLHeJ9%2BFkyyAiB2w6Yvai4m9miY6KNTt%2FbKRgkC3JwBX8OzQFBNMSpsKyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMEzWsrhitR2ouVFaEKtwDVUDFl8L2ZeB9Gx0Yo58JF73oSzDJVO01j9MVDGgRVG7JtGX7UqABcpw0JCuHrn%2BuYBGq4JLWLoLfwYxt9Aa0pbkNvRfRVCHH8VVzdvQ0UGM2cPOtttzt31FeI2dcpEJszY1Xwixcr%2FdVXp1s0b%2BHvpvNTq6SXjOp34K7SLt2ScisqY9wkz51ILS2iU8RHB%2Fs5DNhkD8VDIEufr0zaRtyrc7I4aMg6G6b7POVs1ga7ZVmHXX7gvKBSEyCD1kBPu64ARc17c4tpPgWFkiRvtaEcsaTk0jYXgAH5AIvQDLKfT20MjELABNWDrpAFv5Zbj02qun97ZEyVL8krI%2FnXfsBapiyYj5gKMYc2fmTWzmIt8Bos1lOHH3S6IoAEysMHs6HsV9M7yL2JFZQ9FSd9zroL%2BzvQhMSLSiiYpFvD5E1n0r0PbK11%2F912kWxHIk%2Bqls1ynl6n%2BxGvQGP%2FWMNLFaPUqTFfphA%2B78NhsIA3uvxP1pmrojO1P5vKEb2IRTL%2Fib2jAJtNjhECrIFzJJiIrMBX0PA0HJPJzpuRsDZzaGGhUWURH%2BuFCUYMCJEK2nF%2FVLzHGATPbiA1jdYchpUMOmfkvrCTou%2F3TlwvseQh2XvD4d4TIGnFZL9NkEIiKow%2FunzxAY6pgGAmQ%2FvXOGE5YAqGyqRgNjNMB2uuhky1wyr6uIrYm3gOWjnnCLTZ7adQOBlCNUW8kg7M5qf%2Be6Z4FKX%2FCzCiOQzvCimzC%2BdNdABO8N9yvaqflTdEZZX1H3%2BpJts6hTvCswUzA4SFXJzkv%2FioK%2FuBj4vGiO1umwF32XnklJORV%2FoZt7t1VmiCcrPgNAGZR2XA1tD63ez8OMlJTgqrua9xYYThsO7Fn2f&X-Amz-Signature=b5aae6b69cb4a7c920468db33f272be79d1263b88c72896624bf3ab1e4139150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT3RGC7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnSYmPJrfiQX632ZspX5gtUxesjt%2ByiGZLHeJ9%2BFkyyAiB2w6Yvai4m9miY6KNTt%2FbKRgkC3JwBX8OzQFBNMSpsKyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMEzWsrhitR2ouVFaEKtwDVUDFl8L2ZeB9Gx0Yo58JF73oSzDJVO01j9MVDGgRVG7JtGX7UqABcpw0JCuHrn%2BuYBGq4JLWLoLfwYxt9Aa0pbkNvRfRVCHH8VVzdvQ0UGM2cPOtttzt31FeI2dcpEJszY1Xwixcr%2FdVXp1s0b%2BHvpvNTq6SXjOp34K7SLt2ScisqY9wkz51ILS2iU8RHB%2Fs5DNhkD8VDIEufr0zaRtyrc7I4aMg6G6b7POVs1ga7ZVmHXX7gvKBSEyCD1kBPu64ARc17c4tpPgWFkiRvtaEcsaTk0jYXgAH5AIvQDLKfT20MjELABNWDrpAFv5Zbj02qun97ZEyVL8krI%2FnXfsBapiyYj5gKMYc2fmTWzmIt8Bos1lOHH3S6IoAEysMHs6HsV9M7yL2JFZQ9FSd9zroL%2BzvQhMSLSiiYpFvD5E1n0r0PbK11%2F912kWxHIk%2Bqls1ynl6n%2BxGvQGP%2FWMNLFaPUqTFfphA%2B78NhsIA3uvxP1pmrojO1P5vKEb2IRTL%2Fib2jAJtNjhECrIFzJJiIrMBX0PA0HJPJzpuRsDZzaGGhUWURH%2BuFCUYMCJEK2nF%2FVLzHGATPbiA1jdYchpUMOmfkvrCTou%2F3TlwvseQh2XvD4d4TIGnFZL9NkEIiKow%2FunzxAY6pgGAmQ%2FvXOGE5YAqGyqRgNjNMB2uuhky1wyr6uIrYm3gOWjnnCLTZ7adQOBlCNUW8kg7M5qf%2Be6Z4FKX%2FCzCiOQzvCimzC%2BdNdABO8N9yvaqflTdEZZX1H3%2BpJts6hTvCswUzA4SFXJzkv%2FioK%2FuBj4vGiO1umwF32XnklJORV%2FoZt7t1VmiCcrPgNAGZR2XA1tD63ez8OMlJTgqrua9xYYThsO7Fn2f&X-Amz-Signature=ae37d0706488447fe9e220e3c4d4198c12367dbaa797eac9add304b300171f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT3RGC7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnSYmPJrfiQX632ZspX5gtUxesjt%2ByiGZLHeJ9%2BFkyyAiB2w6Yvai4m9miY6KNTt%2FbKRgkC3JwBX8OzQFBNMSpsKyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMEzWsrhitR2ouVFaEKtwDVUDFl8L2ZeB9Gx0Yo58JF73oSzDJVO01j9MVDGgRVG7JtGX7UqABcpw0JCuHrn%2BuYBGq4JLWLoLfwYxt9Aa0pbkNvRfRVCHH8VVzdvQ0UGM2cPOtttzt31FeI2dcpEJszY1Xwixcr%2FdVXp1s0b%2BHvpvNTq6SXjOp34K7SLt2ScisqY9wkz51ILS2iU8RHB%2Fs5DNhkD8VDIEufr0zaRtyrc7I4aMg6G6b7POVs1ga7ZVmHXX7gvKBSEyCD1kBPu64ARc17c4tpPgWFkiRvtaEcsaTk0jYXgAH5AIvQDLKfT20MjELABNWDrpAFv5Zbj02qun97ZEyVL8krI%2FnXfsBapiyYj5gKMYc2fmTWzmIt8Bos1lOHH3S6IoAEysMHs6HsV9M7yL2JFZQ9FSd9zroL%2BzvQhMSLSiiYpFvD5E1n0r0PbK11%2F912kWxHIk%2Bqls1ynl6n%2BxGvQGP%2FWMNLFaPUqTFfphA%2B78NhsIA3uvxP1pmrojO1P5vKEb2IRTL%2Fib2jAJtNjhECrIFzJJiIrMBX0PA0HJPJzpuRsDZzaGGhUWURH%2BuFCUYMCJEK2nF%2FVLzHGATPbiA1jdYchpUMOmfkvrCTou%2F3TlwvseQh2XvD4d4TIGnFZL9NkEIiKow%2FunzxAY6pgGAmQ%2FvXOGE5YAqGyqRgNjNMB2uuhky1wyr6uIrYm3gOWjnnCLTZ7adQOBlCNUW8kg7M5qf%2Be6Z4FKX%2FCzCiOQzvCimzC%2BdNdABO8N9yvaqflTdEZZX1H3%2BpJts6hTvCswUzA4SFXJzkv%2FioK%2FuBj4vGiO1umwF32XnklJORV%2FoZt7t1VmiCcrPgNAGZR2XA1tD63ez8OMlJTgqrua9xYYThsO7Fn2f&X-Amz-Signature=b4822034dc98d6a3919f95f43f54ac04c0f460ca85cdad350af7b8ad2ba42c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT3RGC7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnSYmPJrfiQX632ZspX5gtUxesjt%2ByiGZLHeJ9%2BFkyyAiB2w6Yvai4m9miY6KNTt%2FbKRgkC3JwBX8OzQFBNMSpsKyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMEzWsrhitR2ouVFaEKtwDVUDFl8L2ZeB9Gx0Yo58JF73oSzDJVO01j9MVDGgRVG7JtGX7UqABcpw0JCuHrn%2BuYBGq4JLWLoLfwYxt9Aa0pbkNvRfRVCHH8VVzdvQ0UGM2cPOtttzt31FeI2dcpEJszY1Xwixcr%2FdVXp1s0b%2BHvpvNTq6SXjOp34K7SLt2ScisqY9wkz51ILS2iU8RHB%2Fs5DNhkD8VDIEufr0zaRtyrc7I4aMg6G6b7POVs1ga7ZVmHXX7gvKBSEyCD1kBPu64ARc17c4tpPgWFkiRvtaEcsaTk0jYXgAH5AIvQDLKfT20MjELABNWDrpAFv5Zbj02qun97ZEyVL8krI%2FnXfsBapiyYj5gKMYc2fmTWzmIt8Bos1lOHH3S6IoAEysMHs6HsV9M7yL2JFZQ9FSd9zroL%2BzvQhMSLSiiYpFvD5E1n0r0PbK11%2F912kWxHIk%2Bqls1ynl6n%2BxGvQGP%2FWMNLFaPUqTFfphA%2B78NhsIA3uvxP1pmrojO1P5vKEb2IRTL%2Fib2jAJtNjhECrIFzJJiIrMBX0PA0HJPJzpuRsDZzaGGhUWURH%2BuFCUYMCJEK2nF%2FVLzHGATPbiA1jdYchpUMOmfkvrCTou%2F3TlwvseQh2XvD4d4TIGnFZL9NkEIiKow%2FunzxAY6pgGAmQ%2FvXOGE5YAqGyqRgNjNMB2uuhky1wyr6uIrYm3gOWjnnCLTZ7adQOBlCNUW8kg7M5qf%2Be6Z4FKX%2FCzCiOQzvCimzC%2BdNdABO8N9yvaqflTdEZZX1H3%2BpJts6hTvCswUzA4SFXJzkv%2FioK%2FuBj4vGiO1umwF32XnklJORV%2FoZt7t1VmiCcrPgNAGZR2XA1tD63ez8OMlJTgqrua9xYYThsO7Fn2f&X-Amz-Signature=4a464c2df7b05711f4843149e0883d68b55b15d4c558ac207820492b8e20b28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT3RGC7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnSYmPJrfiQX632ZspX5gtUxesjt%2ByiGZLHeJ9%2BFkyyAiB2w6Yvai4m9miY6KNTt%2FbKRgkC3JwBX8OzQFBNMSpsKyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMEzWsrhitR2ouVFaEKtwDVUDFl8L2ZeB9Gx0Yo58JF73oSzDJVO01j9MVDGgRVG7JtGX7UqABcpw0JCuHrn%2BuYBGq4JLWLoLfwYxt9Aa0pbkNvRfRVCHH8VVzdvQ0UGM2cPOtttzt31FeI2dcpEJszY1Xwixcr%2FdVXp1s0b%2BHvpvNTq6SXjOp34K7SLt2ScisqY9wkz51ILS2iU8RHB%2Fs5DNhkD8VDIEufr0zaRtyrc7I4aMg6G6b7POVs1ga7ZVmHXX7gvKBSEyCD1kBPu64ARc17c4tpPgWFkiRvtaEcsaTk0jYXgAH5AIvQDLKfT20MjELABNWDrpAFv5Zbj02qun97ZEyVL8krI%2FnXfsBapiyYj5gKMYc2fmTWzmIt8Bos1lOHH3S6IoAEysMHs6HsV9M7yL2JFZQ9FSd9zroL%2BzvQhMSLSiiYpFvD5E1n0r0PbK11%2F912kWxHIk%2Bqls1ynl6n%2BxGvQGP%2FWMNLFaPUqTFfphA%2B78NhsIA3uvxP1pmrojO1P5vKEb2IRTL%2Fib2jAJtNjhECrIFzJJiIrMBX0PA0HJPJzpuRsDZzaGGhUWURH%2BuFCUYMCJEK2nF%2FVLzHGATPbiA1jdYchpUMOmfkvrCTou%2F3TlwvseQh2XvD4d4TIGnFZL9NkEIiKow%2FunzxAY6pgGAmQ%2FvXOGE5YAqGyqRgNjNMB2uuhky1wyr6uIrYm3gOWjnnCLTZ7adQOBlCNUW8kg7M5qf%2Be6Z4FKX%2FCzCiOQzvCimzC%2BdNdABO8N9yvaqflTdEZZX1H3%2BpJts6hTvCswUzA4SFXJzkv%2FioK%2FuBj4vGiO1umwF32XnklJORV%2FoZt7t1VmiCcrPgNAGZR2XA1tD63ez8OMlJTgqrua9xYYThsO7Fn2f&X-Amz-Signature=1724c22e45b3ca862db6e16225866e9ea0121a381ca8e6d488b91f4a38db15a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT3RGC7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnSYmPJrfiQX632ZspX5gtUxesjt%2ByiGZLHeJ9%2BFkyyAiB2w6Yvai4m9miY6KNTt%2FbKRgkC3JwBX8OzQFBNMSpsKyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMEzWsrhitR2ouVFaEKtwDVUDFl8L2ZeB9Gx0Yo58JF73oSzDJVO01j9MVDGgRVG7JtGX7UqABcpw0JCuHrn%2BuYBGq4JLWLoLfwYxt9Aa0pbkNvRfRVCHH8VVzdvQ0UGM2cPOtttzt31FeI2dcpEJszY1Xwixcr%2FdVXp1s0b%2BHvpvNTq6SXjOp34K7SLt2ScisqY9wkz51ILS2iU8RHB%2Fs5DNhkD8VDIEufr0zaRtyrc7I4aMg6G6b7POVs1ga7ZVmHXX7gvKBSEyCD1kBPu64ARc17c4tpPgWFkiRvtaEcsaTk0jYXgAH5AIvQDLKfT20MjELABNWDrpAFv5Zbj02qun97ZEyVL8krI%2FnXfsBapiyYj5gKMYc2fmTWzmIt8Bos1lOHH3S6IoAEysMHs6HsV9M7yL2JFZQ9FSd9zroL%2BzvQhMSLSiiYpFvD5E1n0r0PbK11%2F912kWxHIk%2Bqls1ynl6n%2BxGvQGP%2FWMNLFaPUqTFfphA%2B78NhsIA3uvxP1pmrojO1P5vKEb2IRTL%2Fib2jAJtNjhECrIFzJJiIrMBX0PA0HJPJzpuRsDZzaGGhUWURH%2BuFCUYMCJEK2nF%2FVLzHGATPbiA1jdYchpUMOmfkvrCTou%2F3TlwvseQh2XvD4d4TIGnFZL9NkEIiKow%2FunzxAY6pgGAmQ%2FvXOGE5YAqGyqRgNjNMB2uuhky1wyr6uIrYm3gOWjnnCLTZ7adQOBlCNUW8kg7M5qf%2Be6Z4FKX%2FCzCiOQzvCimzC%2BdNdABO8N9yvaqflTdEZZX1H3%2BpJts6hTvCswUzA4SFXJzkv%2FioK%2FuBj4vGiO1umwF32XnklJORV%2FoZt7t1VmiCcrPgNAGZR2XA1tD63ez8OMlJTgqrua9xYYThsO7Fn2f&X-Amz-Signature=69964ac71d7a392f1e7eaea9b61f6a0b22baf3de7c2e4cde9a1ad113a0e86834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT3RGC7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnSYmPJrfiQX632ZspX5gtUxesjt%2ByiGZLHeJ9%2BFkyyAiB2w6Yvai4m9miY6KNTt%2FbKRgkC3JwBX8OzQFBNMSpsKyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMEzWsrhitR2ouVFaEKtwDVUDFl8L2ZeB9Gx0Yo58JF73oSzDJVO01j9MVDGgRVG7JtGX7UqABcpw0JCuHrn%2BuYBGq4JLWLoLfwYxt9Aa0pbkNvRfRVCHH8VVzdvQ0UGM2cPOtttzt31FeI2dcpEJszY1Xwixcr%2FdVXp1s0b%2BHvpvNTq6SXjOp34K7SLt2ScisqY9wkz51ILS2iU8RHB%2Fs5DNhkD8VDIEufr0zaRtyrc7I4aMg6G6b7POVs1ga7ZVmHXX7gvKBSEyCD1kBPu64ARc17c4tpPgWFkiRvtaEcsaTk0jYXgAH5AIvQDLKfT20MjELABNWDrpAFv5Zbj02qun97ZEyVL8krI%2FnXfsBapiyYj5gKMYc2fmTWzmIt8Bos1lOHH3S6IoAEysMHs6HsV9M7yL2JFZQ9FSd9zroL%2BzvQhMSLSiiYpFvD5E1n0r0PbK11%2F912kWxHIk%2Bqls1ynl6n%2BxGvQGP%2FWMNLFaPUqTFfphA%2B78NhsIA3uvxP1pmrojO1P5vKEb2IRTL%2Fib2jAJtNjhECrIFzJJiIrMBX0PA0HJPJzpuRsDZzaGGhUWURH%2BuFCUYMCJEK2nF%2FVLzHGATPbiA1jdYchpUMOmfkvrCTou%2F3TlwvseQh2XvD4d4TIGnFZL9NkEIiKow%2FunzxAY6pgGAmQ%2FvXOGE5YAqGyqRgNjNMB2uuhky1wyr6uIrYm3gOWjnnCLTZ7adQOBlCNUW8kg7M5qf%2Be6Z4FKX%2FCzCiOQzvCimzC%2BdNdABO8N9yvaqflTdEZZX1H3%2BpJts6hTvCswUzA4SFXJzkv%2FioK%2FuBj4vGiO1umwF32XnklJORV%2FoZt7t1VmiCcrPgNAGZR2XA1tD63ez8OMlJTgqrua9xYYThsO7Fn2f&X-Amz-Signature=f512d162ceaa129da1e49b17d60c66843574ca3d920bfbf06bd08e33dcbdea5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

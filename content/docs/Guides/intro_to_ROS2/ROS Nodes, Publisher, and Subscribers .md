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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWYBHN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCvH0%2Fw6KBjF28O%2FJZiraswF2zGqK38xIaqu0s72go4wgIgW4QB1FwxlZhanSNK3G2Jp65EbpID2uaX%2FfRZE5D8UpgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN0MbQi8W%2BpXrbGQSrcA%2Fv7%2FvjtpSjXpC%2FikqrTPD%2FG0IBP1ppGKjyzcTPBjX2xbNhZO1WHtdWgcP4LTno8DL1DeQlvVMIIpDuRhmhk5QcxYLRXpcVDq63jNa%2F6VFVJD7wzUhwcjCWT6eDkPSY5RHWLyuWfiptvC%2F7uXh4NCWfJkPnVtv46hm6nmc%2Bl%2B7QQ8si%2FURPQsWMAn27gm8V1Y8bxjDmDlpMmxlOLsB9xbqg5XCuVMPjpn9gNRj5OMq2nhWOHkHkGL3i1lciPFuLXrgedYQV8mJaW7hh9Q0LJeMeeDSRKgi2CgNnGdb4fdpk1k%2FslQx06cX7KQ8wvRPdWBD%2BQsgRjBgPCMgXe8Wsg4e2sIfhzR8vyNAHwpJXDjIG0FnzVHyPeS7tX2Lei7d6GBi3Mv6lP%2Bv3jVam0DcNGsK34Z9klzJ6LKGfoVH2WFUnKJK%2BK2EXnCJVnbUI5XL%2BiuVm65yXfnmftEUOLic%2FmddSFTixgpSOKQfrgcWZYEYrhT25ykToyF0qsi11jXBbTk3l1LCJA2vg21yEDEZZgwZ8RnpIV945pLGP2QIKii6%2FdkXlDMf6VoBfmWKKzEg4KvMb8d6Ou9CULVOPo%2FCqNdPer53IDIgR6QRpsH3kxUDxQLZekkCEIFDdG%2BChFMJGu1cQGOqUBOVEEZ7RmBjTDIoPgMC2eP3mGbkPrm4CavHaQdyy6vX2q%2F4342xNH2u9shXkTrqkqhJOoPVitUsIqkBz3wKNkSN8qxE3HvmfegcyIRA5oItuFL%2B2VXcKdjhLsikNqEGx4oVYsALuZGGEHLWxbz3cr4TbRxoYXOd0M%2B8MWe9%2BpB7Zy%2Br%2FhtSOLmhLdF2R0ERLL4yPqXnbMT%2F4j2F5GasEcaXEv2ZFU&X-Amz-Signature=37838d8a7842e803f1ff469224fd3baf326207368d372dd55cece33e2fb95dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWYBHN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCvH0%2Fw6KBjF28O%2FJZiraswF2zGqK38xIaqu0s72go4wgIgW4QB1FwxlZhanSNK3G2Jp65EbpID2uaX%2FfRZE5D8UpgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN0MbQi8W%2BpXrbGQSrcA%2Fv7%2FvjtpSjXpC%2FikqrTPD%2FG0IBP1ppGKjyzcTPBjX2xbNhZO1WHtdWgcP4LTno8DL1DeQlvVMIIpDuRhmhk5QcxYLRXpcVDq63jNa%2F6VFVJD7wzUhwcjCWT6eDkPSY5RHWLyuWfiptvC%2F7uXh4NCWfJkPnVtv46hm6nmc%2Bl%2B7QQ8si%2FURPQsWMAn27gm8V1Y8bxjDmDlpMmxlOLsB9xbqg5XCuVMPjpn9gNRj5OMq2nhWOHkHkGL3i1lciPFuLXrgedYQV8mJaW7hh9Q0LJeMeeDSRKgi2CgNnGdb4fdpk1k%2FslQx06cX7KQ8wvRPdWBD%2BQsgRjBgPCMgXe8Wsg4e2sIfhzR8vyNAHwpJXDjIG0FnzVHyPeS7tX2Lei7d6GBi3Mv6lP%2Bv3jVam0DcNGsK34Z9klzJ6LKGfoVH2WFUnKJK%2BK2EXnCJVnbUI5XL%2BiuVm65yXfnmftEUOLic%2FmddSFTixgpSOKQfrgcWZYEYrhT25ykToyF0qsi11jXBbTk3l1LCJA2vg21yEDEZZgwZ8RnpIV945pLGP2QIKii6%2FdkXlDMf6VoBfmWKKzEg4KvMb8d6Ou9CULVOPo%2FCqNdPer53IDIgR6QRpsH3kxUDxQLZekkCEIFDdG%2BChFMJGu1cQGOqUBOVEEZ7RmBjTDIoPgMC2eP3mGbkPrm4CavHaQdyy6vX2q%2F4342xNH2u9shXkTrqkqhJOoPVitUsIqkBz3wKNkSN8qxE3HvmfegcyIRA5oItuFL%2B2VXcKdjhLsikNqEGx4oVYsALuZGGEHLWxbz3cr4TbRxoYXOd0M%2B8MWe9%2BpB7Zy%2Br%2FhtSOLmhLdF2R0ERLL4yPqXnbMT%2F4j2F5GasEcaXEv2ZFU&X-Amz-Signature=cb1ea85ba939e5c49b7d3d69512175e9faf21cfe880413e555bfae3692025290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWYBHN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCvH0%2Fw6KBjF28O%2FJZiraswF2zGqK38xIaqu0s72go4wgIgW4QB1FwxlZhanSNK3G2Jp65EbpID2uaX%2FfRZE5D8UpgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN0MbQi8W%2BpXrbGQSrcA%2Fv7%2FvjtpSjXpC%2FikqrTPD%2FG0IBP1ppGKjyzcTPBjX2xbNhZO1WHtdWgcP4LTno8DL1DeQlvVMIIpDuRhmhk5QcxYLRXpcVDq63jNa%2F6VFVJD7wzUhwcjCWT6eDkPSY5RHWLyuWfiptvC%2F7uXh4NCWfJkPnVtv46hm6nmc%2Bl%2B7QQ8si%2FURPQsWMAn27gm8V1Y8bxjDmDlpMmxlOLsB9xbqg5XCuVMPjpn9gNRj5OMq2nhWOHkHkGL3i1lciPFuLXrgedYQV8mJaW7hh9Q0LJeMeeDSRKgi2CgNnGdb4fdpk1k%2FslQx06cX7KQ8wvRPdWBD%2BQsgRjBgPCMgXe8Wsg4e2sIfhzR8vyNAHwpJXDjIG0FnzVHyPeS7tX2Lei7d6GBi3Mv6lP%2Bv3jVam0DcNGsK34Z9klzJ6LKGfoVH2WFUnKJK%2BK2EXnCJVnbUI5XL%2BiuVm65yXfnmftEUOLic%2FmddSFTixgpSOKQfrgcWZYEYrhT25ykToyF0qsi11jXBbTk3l1LCJA2vg21yEDEZZgwZ8RnpIV945pLGP2QIKii6%2FdkXlDMf6VoBfmWKKzEg4KvMb8d6Ou9CULVOPo%2FCqNdPer53IDIgR6QRpsH3kxUDxQLZekkCEIFDdG%2BChFMJGu1cQGOqUBOVEEZ7RmBjTDIoPgMC2eP3mGbkPrm4CavHaQdyy6vX2q%2F4342xNH2u9shXkTrqkqhJOoPVitUsIqkBz3wKNkSN8qxE3HvmfegcyIRA5oItuFL%2B2VXcKdjhLsikNqEGx4oVYsALuZGGEHLWxbz3cr4TbRxoYXOd0M%2B8MWe9%2BpB7Zy%2Br%2FhtSOLmhLdF2R0ERLL4yPqXnbMT%2F4j2F5GasEcaXEv2ZFU&X-Amz-Signature=c99093e942bfb34105f395c0533a47cddcdfba45cb40c28dd4b33a4e6cc9b4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWYBHN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCvH0%2Fw6KBjF28O%2FJZiraswF2zGqK38xIaqu0s72go4wgIgW4QB1FwxlZhanSNK3G2Jp65EbpID2uaX%2FfRZE5D8UpgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN0MbQi8W%2BpXrbGQSrcA%2Fv7%2FvjtpSjXpC%2FikqrTPD%2FG0IBP1ppGKjyzcTPBjX2xbNhZO1WHtdWgcP4LTno8DL1DeQlvVMIIpDuRhmhk5QcxYLRXpcVDq63jNa%2F6VFVJD7wzUhwcjCWT6eDkPSY5RHWLyuWfiptvC%2F7uXh4NCWfJkPnVtv46hm6nmc%2Bl%2B7QQ8si%2FURPQsWMAn27gm8V1Y8bxjDmDlpMmxlOLsB9xbqg5XCuVMPjpn9gNRj5OMq2nhWOHkHkGL3i1lciPFuLXrgedYQV8mJaW7hh9Q0LJeMeeDSRKgi2CgNnGdb4fdpk1k%2FslQx06cX7KQ8wvRPdWBD%2BQsgRjBgPCMgXe8Wsg4e2sIfhzR8vyNAHwpJXDjIG0FnzVHyPeS7tX2Lei7d6GBi3Mv6lP%2Bv3jVam0DcNGsK34Z9klzJ6LKGfoVH2WFUnKJK%2BK2EXnCJVnbUI5XL%2BiuVm65yXfnmftEUOLic%2FmddSFTixgpSOKQfrgcWZYEYrhT25ykToyF0qsi11jXBbTk3l1LCJA2vg21yEDEZZgwZ8RnpIV945pLGP2QIKii6%2FdkXlDMf6VoBfmWKKzEg4KvMb8d6Ou9CULVOPo%2FCqNdPer53IDIgR6QRpsH3kxUDxQLZekkCEIFDdG%2BChFMJGu1cQGOqUBOVEEZ7RmBjTDIoPgMC2eP3mGbkPrm4CavHaQdyy6vX2q%2F4342xNH2u9shXkTrqkqhJOoPVitUsIqkBz3wKNkSN8qxE3HvmfegcyIRA5oItuFL%2B2VXcKdjhLsikNqEGx4oVYsALuZGGEHLWxbz3cr4TbRxoYXOd0M%2B8MWe9%2BpB7Zy%2Br%2FhtSOLmhLdF2R0ERLL4yPqXnbMT%2F4j2F5GasEcaXEv2ZFU&X-Amz-Signature=9b7fc1decbff8bb8c28d319ea496579765792f079bc316e587e18b62a69d68bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWYBHN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCvH0%2Fw6KBjF28O%2FJZiraswF2zGqK38xIaqu0s72go4wgIgW4QB1FwxlZhanSNK3G2Jp65EbpID2uaX%2FfRZE5D8UpgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN0MbQi8W%2BpXrbGQSrcA%2Fv7%2FvjtpSjXpC%2FikqrTPD%2FG0IBP1ppGKjyzcTPBjX2xbNhZO1WHtdWgcP4LTno8DL1DeQlvVMIIpDuRhmhk5QcxYLRXpcVDq63jNa%2F6VFVJD7wzUhwcjCWT6eDkPSY5RHWLyuWfiptvC%2F7uXh4NCWfJkPnVtv46hm6nmc%2Bl%2B7QQ8si%2FURPQsWMAn27gm8V1Y8bxjDmDlpMmxlOLsB9xbqg5XCuVMPjpn9gNRj5OMq2nhWOHkHkGL3i1lciPFuLXrgedYQV8mJaW7hh9Q0LJeMeeDSRKgi2CgNnGdb4fdpk1k%2FslQx06cX7KQ8wvRPdWBD%2BQsgRjBgPCMgXe8Wsg4e2sIfhzR8vyNAHwpJXDjIG0FnzVHyPeS7tX2Lei7d6GBi3Mv6lP%2Bv3jVam0DcNGsK34Z9klzJ6LKGfoVH2WFUnKJK%2BK2EXnCJVnbUI5XL%2BiuVm65yXfnmftEUOLic%2FmddSFTixgpSOKQfrgcWZYEYrhT25ykToyF0qsi11jXBbTk3l1LCJA2vg21yEDEZZgwZ8RnpIV945pLGP2QIKii6%2FdkXlDMf6VoBfmWKKzEg4KvMb8d6Ou9CULVOPo%2FCqNdPer53IDIgR6QRpsH3kxUDxQLZekkCEIFDdG%2BChFMJGu1cQGOqUBOVEEZ7RmBjTDIoPgMC2eP3mGbkPrm4CavHaQdyy6vX2q%2F4342xNH2u9shXkTrqkqhJOoPVitUsIqkBz3wKNkSN8qxE3HvmfegcyIRA5oItuFL%2B2VXcKdjhLsikNqEGx4oVYsALuZGGEHLWxbz3cr4TbRxoYXOd0M%2B8MWe9%2BpB7Zy%2Br%2FhtSOLmhLdF2R0ERLL4yPqXnbMT%2F4j2F5GasEcaXEv2ZFU&X-Amz-Signature=6539e417487b7a59f5c3e35612077b44a7d455dbe5308cb3b494e9f744b49815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWYBHN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCvH0%2Fw6KBjF28O%2FJZiraswF2zGqK38xIaqu0s72go4wgIgW4QB1FwxlZhanSNK3G2Jp65EbpID2uaX%2FfRZE5D8UpgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN0MbQi8W%2BpXrbGQSrcA%2Fv7%2FvjtpSjXpC%2FikqrTPD%2FG0IBP1ppGKjyzcTPBjX2xbNhZO1WHtdWgcP4LTno8DL1DeQlvVMIIpDuRhmhk5QcxYLRXpcVDq63jNa%2F6VFVJD7wzUhwcjCWT6eDkPSY5RHWLyuWfiptvC%2F7uXh4NCWfJkPnVtv46hm6nmc%2Bl%2B7QQ8si%2FURPQsWMAn27gm8V1Y8bxjDmDlpMmxlOLsB9xbqg5XCuVMPjpn9gNRj5OMq2nhWOHkHkGL3i1lciPFuLXrgedYQV8mJaW7hh9Q0LJeMeeDSRKgi2CgNnGdb4fdpk1k%2FslQx06cX7KQ8wvRPdWBD%2BQsgRjBgPCMgXe8Wsg4e2sIfhzR8vyNAHwpJXDjIG0FnzVHyPeS7tX2Lei7d6GBi3Mv6lP%2Bv3jVam0DcNGsK34Z9klzJ6LKGfoVH2WFUnKJK%2BK2EXnCJVnbUI5XL%2BiuVm65yXfnmftEUOLic%2FmddSFTixgpSOKQfrgcWZYEYrhT25ykToyF0qsi11jXBbTk3l1LCJA2vg21yEDEZZgwZ8RnpIV945pLGP2QIKii6%2FdkXlDMf6VoBfmWKKzEg4KvMb8d6Ou9CULVOPo%2FCqNdPer53IDIgR6QRpsH3kxUDxQLZekkCEIFDdG%2BChFMJGu1cQGOqUBOVEEZ7RmBjTDIoPgMC2eP3mGbkPrm4CavHaQdyy6vX2q%2F4342xNH2u9shXkTrqkqhJOoPVitUsIqkBz3wKNkSN8qxE3HvmfegcyIRA5oItuFL%2B2VXcKdjhLsikNqEGx4oVYsALuZGGEHLWxbz3cr4TbRxoYXOd0M%2B8MWe9%2BpB7Zy%2Br%2FhtSOLmhLdF2R0ERLL4yPqXnbMT%2F4j2F5GasEcaXEv2ZFU&X-Amz-Signature=fe1df7559978815a89a08ec6dc39ef195c0348a6275a2b43cc13633fd19d170a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWYBHN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCvH0%2Fw6KBjF28O%2FJZiraswF2zGqK38xIaqu0s72go4wgIgW4QB1FwxlZhanSNK3G2Jp65EbpID2uaX%2FfRZE5D8UpgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN0MbQi8W%2BpXrbGQSrcA%2Fv7%2FvjtpSjXpC%2FikqrTPD%2FG0IBP1ppGKjyzcTPBjX2xbNhZO1WHtdWgcP4LTno8DL1DeQlvVMIIpDuRhmhk5QcxYLRXpcVDq63jNa%2F6VFVJD7wzUhwcjCWT6eDkPSY5RHWLyuWfiptvC%2F7uXh4NCWfJkPnVtv46hm6nmc%2Bl%2B7QQ8si%2FURPQsWMAn27gm8V1Y8bxjDmDlpMmxlOLsB9xbqg5XCuVMPjpn9gNRj5OMq2nhWOHkHkGL3i1lciPFuLXrgedYQV8mJaW7hh9Q0LJeMeeDSRKgi2CgNnGdb4fdpk1k%2FslQx06cX7KQ8wvRPdWBD%2BQsgRjBgPCMgXe8Wsg4e2sIfhzR8vyNAHwpJXDjIG0FnzVHyPeS7tX2Lei7d6GBi3Mv6lP%2Bv3jVam0DcNGsK34Z9klzJ6LKGfoVH2WFUnKJK%2BK2EXnCJVnbUI5XL%2BiuVm65yXfnmftEUOLic%2FmddSFTixgpSOKQfrgcWZYEYrhT25ykToyF0qsi11jXBbTk3l1LCJA2vg21yEDEZZgwZ8RnpIV945pLGP2QIKii6%2FdkXlDMf6VoBfmWKKzEg4KvMb8d6Ou9CULVOPo%2FCqNdPer53IDIgR6QRpsH3kxUDxQLZekkCEIFDdG%2BChFMJGu1cQGOqUBOVEEZ7RmBjTDIoPgMC2eP3mGbkPrm4CavHaQdyy6vX2q%2F4342xNH2u9shXkTrqkqhJOoPVitUsIqkBz3wKNkSN8qxE3HvmfegcyIRA5oItuFL%2B2VXcKdjhLsikNqEGx4oVYsALuZGGEHLWxbz3cr4TbRxoYXOd0M%2B8MWe9%2BpB7Zy%2Br%2FhtSOLmhLdF2R0ERLL4yPqXnbMT%2F4j2F5GasEcaXEv2ZFU&X-Amz-Signature=5beb7279142c079f480a3c73b9c9b6e80e6d84dcef5be911b5c54f1552d4b628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWYBHN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCvH0%2Fw6KBjF28O%2FJZiraswF2zGqK38xIaqu0s72go4wgIgW4QB1FwxlZhanSNK3G2Jp65EbpID2uaX%2FfRZE5D8UpgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN0MbQi8W%2BpXrbGQSrcA%2Fv7%2FvjtpSjXpC%2FikqrTPD%2FG0IBP1ppGKjyzcTPBjX2xbNhZO1WHtdWgcP4LTno8DL1DeQlvVMIIpDuRhmhk5QcxYLRXpcVDq63jNa%2F6VFVJD7wzUhwcjCWT6eDkPSY5RHWLyuWfiptvC%2F7uXh4NCWfJkPnVtv46hm6nmc%2Bl%2B7QQ8si%2FURPQsWMAn27gm8V1Y8bxjDmDlpMmxlOLsB9xbqg5XCuVMPjpn9gNRj5OMq2nhWOHkHkGL3i1lciPFuLXrgedYQV8mJaW7hh9Q0LJeMeeDSRKgi2CgNnGdb4fdpk1k%2FslQx06cX7KQ8wvRPdWBD%2BQsgRjBgPCMgXe8Wsg4e2sIfhzR8vyNAHwpJXDjIG0FnzVHyPeS7tX2Lei7d6GBi3Mv6lP%2Bv3jVam0DcNGsK34Z9klzJ6LKGfoVH2WFUnKJK%2BK2EXnCJVnbUI5XL%2BiuVm65yXfnmftEUOLic%2FmddSFTixgpSOKQfrgcWZYEYrhT25ykToyF0qsi11jXBbTk3l1LCJA2vg21yEDEZZgwZ8RnpIV945pLGP2QIKii6%2FdkXlDMf6VoBfmWKKzEg4KvMb8d6Ou9CULVOPo%2FCqNdPer53IDIgR6QRpsH3kxUDxQLZekkCEIFDdG%2BChFMJGu1cQGOqUBOVEEZ7RmBjTDIoPgMC2eP3mGbkPrm4CavHaQdyy6vX2q%2F4342xNH2u9shXkTrqkqhJOoPVitUsIqkBz3wKNkSN8qxE3HvmfegcyIRA5oItuFL%2B2VXcKdjhLsikNqEGx4oVYsALuZGGEHLWxbz3cr4TbRxoYXOd0M%2B8MWe9%2BpB7Zy%2Br%2FhtSOLmhLdF2R0ERLL4yPqXnbMT%2F4j2F5GasEcaXEv2ZFU&X-Amz-Signature=b13ce48b3b7a2c577c6902a7ddbda12c97c7881e1f235f78f608d523fcfe54bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSBKBL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0z4Zt5DYZMgKtUgH1UMZhBInVcahULwKwLRFw5ipMwIgbeRS2Xjh2PCgwwpOR18kDXx%2FsyzoD8aWibmLOf%2B8rNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIzIpKYkJWEedJRtCrcA8Qv9ZsV86ijFF4kk6oMYplXdU%2BOkv540BAn5tU%2F6gSdMGe3ZvqCBtBBEg3mDb6fCrDTC1PvsF81QySl2xKB7QRFLceS9PCeIgKGckDW1tJllujtlezKrb5quIRuz%2FKKzJOjX5kssenljxMlzm2kX0Um77KV9FsvPJGVipDlllH4pxs8eYQgdP%2BMee0DW5a219fyJ9X3mwmjhZT%2Ba5qTf%2BPwr0SbmOxagcuiCHjZ2o1TLBegpPKqe3BmToo%2FbyJM1l5n%2FkqTH%2FaJe6pNnmnlGg9xdtm5bdr48Ed4wiaxL7KWDASrP%2BVqhNjJHDxhNIwQQRSP%2B5WU%2FAt%2FrycWn1dy38nPyjqlOTPNEGKole6ZOKHyEqodaNMmNzBrg%2BMk1rbW6KDzi1U0IggDrIduvOYwRC%2FZX0%2BgPngDAWBFRoac9JGoynYawKPLch%2BNp84WmSeHeVAG3AH8JCNCN1ccQzDjZBQPvdXyp7kCP25r2Jt1I4%2BoKq3JMccjBO%2BkBVU7BtwUALsTLjAH44F705u8iSn%2BF8wzPy11DKVCYg7U4w1ysy8LgYVb%2BVk4c0vxcROZ6d%2BRJq%2BWzlY%2FxqPm5OSe34IDpuecFD1PZeE7Pf0nHXy1KMClprUcpSF4YVRigZGpMPCJsb0GOqUBkvEGQIycYmfouWAkpL9HGlXVwyUALb1KV9EKS9BN8SZ2W8jnJ1StsejltzW6Pwm%2BXzRyQZx7YELoKX7IIlI94twCRfk2f44cV9FiauF8ioCo2bmhuCDQOcOJRn%2BW4eT45h3j2wsQmq%2B6c8meGptwcBWw9%2FJJb9YOm%2FR5XgTH3mqQfzEO92KhCMiYvtLj0cKn7BxjKu0OSax%2BHJIhhtBe218CH3xW&X-Amz-Signature=6cb21096c0c07c823fec49f999614016f31fc068d6fd8de39e24f2f89a62f775&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSBKBL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0z4Zt5DYZMgKtUgH1UMZhBInVcahULwKwLRFw5ipMwIgbeRS2Xjh2PCgwwpOR18kDXx%2FsyzoD8aWibmLOf%2B8rNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIzIpKYkJWEedJRtCrcA8Qv9ZsV86ijFF4kk6oMYplXdU%2BOkv540BAn5tU%2F6gSdMGe3ZvqCBtBBEg3mDb6fCrDTC1PvsF81QySl2xKB7QRFLceS9PCeIgKGckDW1tJllujtlezKrb5quIRuz%2FKKzJOjX5kssenljxMlzm2kX0Um77KV9FsvPJGVipDlllH4pxs8eYQgdP%2BMee0DW5a219fyJ9X3mwmjhZT%2Ba5qTf%2BPwr0SbmOxagcuiCHjZ2o1TLBegpPKqe3BmToo%2FbyJM1l5n%2FkqTH%2FaJe6pNnmnlGg9xdtm5bdr48Ed4wiaxL7KWDASrP%2BVqhNjJHDxhNIwQQRSP%2B5WU%2FAt%2FrycWn1dy38nPyjqlOTPNEGKole6ZOKHyEqodaNMmNzBrg%2BMk1rbW6KDzi1U0IggDrIduvOYwRC%2FZX0%2BgPngDAWBFRoac9JGoynYawKPLch%2BNp84WmSeHeVAG3AH8JCNCN1ccQzDjZBQPvdXyp7kCP25r2Jt1I4%2BoKq3JMccjBO%2BkBVU7BtwUALsTLjAH44F705u8iSn%2BF8wzPy11DKVCYg7U4w1ysy8LgYVb%2BVk4c0vxcROZ6d%2BRJq%2BWzlY%2FxqPm5OSe34IDpuecFD1PZeE7Pf0nHXy1KMClprUcpSF4YVRigZGpMPCJsb0GOqUBkvEGQIycYmfouWAkpL9HGlXVwyUALb1KV9EKS9BN8SZ2W8jnJ1StsejltzW6Pwm%2BXzRyQZx7YELoKX7IIlI94twCRfk2f44cV9FiauF8ioCo2bmhuCDQOcOJRn%2BW4eT45h3j2wsQmq%2B6c8meGptwcBWw9%2FJJb9YOm%2FR5XgTH3mqQfzEO92KhCMiYvtLj0cKn7BxjKu0OSax%2BHJIhhtBe218CH3xW&X-Amz-Signature=f77ae008666d9d281ee37b07111f0bca7e1486bc2f777c8854675d2755312341&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSBKBL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0z4Zt5DYZMgKtUgH1UMZhBInVcahULwKwLRFw5ipMwIgbeRS2Xjh2PCgwwpOR18kDXx%2FsyzoD8aWibmLOf%2B8rNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIzIpKYkJWEedJRtCrcA8Qv9ZsV86ijFF4kk6oMYplXdU%2BOkv540BAn5tU%2F6gSdMGe3ZvqCBtBBEg3mDb6fCrDTC1PvsF81QySl2xKB7QRFLceS9PCeIgKGckDW1tJllujtlezKrb5quIRuz%2FKKzJOjX5kssenljxMlzm2kX0Um77KV9FsvPJGVipDlllH4pxs8eYQgdP%2BMee0DW5a219fyJ9X3mwmjhZT%2Ba5qTf%2BPwr0SbmOxagcuiCHjZ2o1TLBegpPKqe3BmToo%2FbyJM1l5n%2FkqTH%2FaJe6pNnmnlGg9xdtm5bdr48Ed4wiaxL7KWDASrP%2BVqhNjJHDxhNIwQQRSP%2B5WU%2FAt%2FrycWn1dy38nPyjqlOTPNEGKole6ZOKHyEqodaNMmNzBrg%2BMk1rbW6KDzi1U0IggDrIduvOYwRC%2FZX0%2BgPngDAWBFRoac9JGoynYawKPLch%2BNp84WmSeHeVAG3AH8JCNCN1ccQzDjZBQPvdXyp7kCP25r2Jt1I4%2BoKq3JMccjBO%2BkBVU7BtwUALsTLjAH44F705u8iSn%2BF8wzPy11DKVCYg7U4w1ysy8LgYVb%2BVk4c0vxcROZ6d%2BRJq%2BWzlY%2FxqPm5OSe34IDpuecFD1PZeE7Pf0nHXy1KMClprUcpSF4YVRigZGpMPCJsb0GOqUBkvEGQIycYmfouWAkpL9HGlXVwyUALb1KV9EKS9BN8SZ2W8jnJ1StsejltzW6Pwm%2BXzRyQZx7YELoKX7IIlI94twCRfk2f44cV9FiauF8ioCo2bmhuCDQOcOJRn%2BW4eT45h3j2wsQmq%2B6c8meGptwcBWw9%2FJJb9YOm%2FR5XgTH3mqQfzEO92KhCMiYvtLj0cKn7BxjKu0OSax%2BHJIhhtBe218CH3xW&X-Amz-Signature=7913781e954775f7b71591983dec53f4e20ee55620b578215dd58c739629ea13&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSBKBL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0z4Zt5DYZMgKtUgH1UMZhBInVcahULwKwLRFw5ipMwIgbeRS2Xjh2PCgwwpOR18kDXx%2FsyzoD8aWibmLOf%2B8rNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIzIpKYkJWEedJRtCrcA8Qv9ZsV86ijFF4kk6oMYplXdU%2BOkv540BAn5tU%2F6gSdMGe3ZvqCBtBBEg3mDb6fCrDTC1PvsF81QySl2xKB7QRFLceS9PCeIgKGckDW1tJllujtlezKrb5quIRuz%2FKKzJOjX5kssenljxMlzm2kX0Um77KV9FsvPJGVipDlllH4pxs8eYQgdP%2BMee0DW5a219fyJ9X3mwmjhZT%2Ba5qTf%2BPwr0SbmOxagcuiCHjZ2o1TLBegpPKqe3BmToo%2FbyJM1l5n%2FkqTH%2FaJe6pNnmnlGg9xdtm5bdr48Ed4wiaxL7KWDASrP%2BVqhNjJHDxhNIwQQRSP%2B5WU%2FAt%2FrycWn1dy38nPyjqlOTPNEGKole6ZOKHyEqodaNMmNzBrg%2BMk1rbW6KDzi1U0IggDrIduvOYwRC%2FZX0%2BgPngDAWBFRoac9JGoynYawKPLch%2BNp84WmSeHeVAG3AH8JCNCN1ccQzDjZBQPvdXyp7kCP25r2Jt1I4%2BoKq3JMccjBO%2BkBVU7BtwUALsTLjAH44F705u8iSn%2BF8wzPy11DKVCYg7U4w1ysy8LgYVb%2BVk4c0vxcROZ6d%2BRJq%2BWzlY%2FxqPm5OSe34IDpuecFD1PZeE7Pf0nHXy1KMClprUcpSF4YVRigZGpMPCJsb0GOqUBkvEGQIycYmfouWAkpL9HGlXVwyUALb1KV9EKS9BN8SZ2W8jnJ1StsejltzW6Pwm%2BXzRyQZx7YELoKX7IIlI94twCRfk2f44cV9FiauF8ioCo2bmhuCDQOcOJRn%2BW4eT45h3j2wsQmq%2B6c8meGptwcBWw9%2FJJb9YOm%2FR5XgTH3mqQfzEO92KhCMiYvtLj0cKn7BxjKu0OSax%2BHJIhhtBe218CH3xW&X-Amz-Signature=a4f87382126d775b43dc67ed348ef68da4f74c4d5e23289215a84f5d8065012f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSBKBL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0z4Zt5DYZMgKtUgH1UMZhBInVcahULwKwLRFw5ipMwIgbeRS2Xjh2PCgwwpOR18kDXx%2FsyzoD8aWibmLOf%2B8rNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIzIpKYkJWEedJRtCrcA8Qv9ZsV86ijFF4kk6oMYplXdU%2BOkv540BAn5tU%2F6gSdMGe3ZvqCBtBBEg3mDb6fCrDTC1PvsF81QySl2xKB7QRFLceS9PCeIgKGckDW1tJllujtlezKrb5quIRuz%2FKKzJOjX5kssenljxMlzm2kX0Um77KV9FsvPJGVipDlllH4pxs8eYQgdP%2BMee0DW5a219fyJ9X3mwmjhZT%2Ba5qTf%2BPwr0SbmOxagcuiCHjZ2o1TLBegpPKqe3BmToo%2FbyJM1l5n%2FkqTH%2FaJe6pNnmnlGg9xdtm5bdr48Ed4wiaxL7KWDASrP%2BVqhNjJHDxhNIwQQRSP%2B5WU%2FAt%2FrycWn1dy38nPyjqlOTPNEGKole6ZOKHyEqodaNMmNzBrg%2BMk1rbW6KDzi1U0IggDrIduvOYwRC%2FZX0%2BgPngDAWBFRoac9JGoynYawKPLch%2BNp84WmSeHeVAG3AH8JCNCN1ccQzDjZBQPvdXyp7kCP25r2Jt1I4%2BoKq3JMccjBO%2BkBVU7BtwUALsTLjAH44F705u8iSn%2BF8wzPy11DKVCYg7U4w1ysy8LgYVb%2BVk4c0vxcROZ6d%2BRJq%2BWzlY%2FxqPm5OSe34IDpuecFD1PZeE7Pf0nHXy1KMClprUcpSF4YVRigZGpMPCJsb0GOqUBkvEGQIycYmfouWAkpL9HGlXVwyUALb1KV9EKS9BN8SZ2W8jnJ1StsejltzW6Pwm%2BXzRyQZx7YELoKX7IIlI94twCRfk2f44cV9FiauF8ioCo2bmhuCDQOcOJRn%2BW4eT45h3j2wsQmq%2B6c8meGptwcBWw9%2FJJb9YOm%2FR5XgTH3mqQfzEO92KhCMiYvtLj0cKn7BxjKu0OSax%2BHJIhhtBe218CH3xW&X-Amz-Signature=e1eb87699c9509760f9bdf89ffdf713683658d2421615e714576ecc67a74214c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSBKBL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0z4Zt5DYZMgKtUgH1UMZhBInVcahULwKwLRFw5ipMwIgbeRS2Xjh2PCgwwpOR18kDXx%2FsyzoD8aWibmLOf%2B8rNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIzIpKYkJWEedJRtCrcA8Qv9ZsV86ijFF4kk6oMYplXdU%2BOkv540BAn5tU%2F6gSdMGe3ZvqCBtBBEg3mDb6fCrDTC1PvsF81QySl2xKB7QRFLceS9PCeIgKGckDW1tJllujtlezKrb5quIRuz%2FKKzJOjX5kssenljxMlzm2kX0Um77KV9FsvPJGVipDlllH4pxs8eYQgdP%2BMee0DW5a219fyJ9X3mwmjhZT%2Ba5qTf%2BPwr0SbmOxagcuiCHjZ2o1TLBegpPKqe3BmToo%2FbyJM1l5n%2FkqTH%2FaJe6pNnmnlGg9xdtm5bdr48Ed4wiaxL7KWDASrP%2BVqhNjJHDxhNIwQQRSP%2B5WU%2FAt%2FrycWn1dy38nPyjqlOTPNEGKole6ZOKHyEqodaNMmNzBrg%2BMk1rbW6KDzi1U0IggDrIduvOYwRC%2FZX0%2BgPngDAWBFRoac9JGoynYawKPLch%2BNp84WmSeHeVAG3AH8JCNCN1ccQzDjZBQPvdXyp7kCP25r2Jt1I4%2BoKq3JMccjBO%2BkBVU7BtwUALsTLjAH44F705u8iSn%2BF8wzPy11DKVCYg7U4w1ysy8LgYVb%2BVk4c0vxcROZ6d%2BRJq%2BWzlY%2FxqPm5OSe34IDpuecFD1PZeE7Pf0nHXy1KMClprUcpSF4YVRigZGpMPCJsb0GOqUBkvEGQIycYmfouWAkpL9HGlXVwyUALb1KV9EKS9BN8SZ2W8jnJ1StsejltzW6Pwm%2BXzRyQZx7YELoKX7IIlI94twCRfk2f44cV9FiauF8ioCo2bmhuCDQOcOJRn%2BW4eT45h3j2wsQmq%2B6c8meGptwcBWw9%2FJJb9YOm%2FR5XgTH3mqQfzEO92KhCMiYvtLj0cKn7BxjKu0OSax%2BHJIhhtBe218CH3xW&X-Amz-Signature=76805fd2da0af120c9d79300b2face9493c0d4e5262b69fe0649d6bd0143b8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSBKBL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0z4Zt5DYZMgKtUgH1UMZhBInVcahULwKwLRFw5ipMwIgbeRS2Xjh2PCgwwpOR18kDXx%2FsyzoD8aWibmLOf%2B8rNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIzIpKYkJWEedJRtCrcA8Qv9ZsV86ijFF4kk6oMYplXdU%2BOkv540BAn5tU%2F6gSdMGe3ZvqCBtBBEg3mDb6fCrDTC1PvsF81QySl2xKB7QRFLceS9PCeIgKGckDW1tJllujtlezKrb5quIRuz%2FKKzJOjX5kssenljxMlzm2kX0Um77KV9FsvPJGVipDlllH4pxs8eYQgdP%2BMee0DW5a219fyJ9X3mwmjhZT%2Ba5qTf%2BPwr0SbmOxagcuiCHjZ2o1TLBegpPKqe3BmToo%2FbyJM1l5n%2FkqTH%2FaJe6pNnmnlGg9xdtm5bdr48Ed4wiaxL7KWDASrP%2BVqhNjJHDxhNIwQQRSP%2B5WU%2FAt%2FrycWn1dy38nPyjqlOTPNEGKole6ZOKHyEqodaNMmNzBrg%2BMk1rbW6KDzi1U0IggDrIduvOYwRC%2FZX0%2BgPngDAWBFRoac9JGoynYawKPLch%2BNp84WmSeHeVAG3AH8JCNCN1ccQzDjZBQPvdXyp7kCP25r2Jt1I4%2BoKq3JMccjBO%2BkBVU7BtwUALsTLjAH44F705u8iSn%2BF8wzPy11DKVCYg7U4w1ysy8LgYVb%2BVk4c0vxcROZ6d%2BRJq%2BWzlY%2FxqPm5OSe34IDpuecFD1PZeE7Pf0nHXy1KMClprUcpSF4YVRigZGpMPCJsb0GOqUBkvEGQIycYmfouWAkpL9HGlXVwyUALb1KV9EKS9BN8SZ2W8jnJ1StsejltzW6Pwm%2BXzRyQZx7YELoKX7IIlI94twCRfk2f44cV9FiauF8ioCo2bmhuCDQOcOJRn%2BW4eT45h3j2wsQmq%2B6c8meGptwcBWw9%2FJJb9YOm%2FR5XgTH3mqQfzEO92KhCMiYvtLj0cKn7BxjKu0OSax%2BHJIhhtBe218CH3xW&X-Amz-Signature=3ddbd893addf56c2e27ff7657bc304ec5373dd1e08dedde0407b7d9aa8eb5b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSBKBL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn0z4Zt5DYZMgKtUgH1UMZhBInVcahULwKwLRFw5ipMwIgbeRS2Xjh2PCgwwpOR18kDXx%2FsyzoD8aWibmLOf%2B8rNsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIzIpKYkJWEedJRtCrcA8Qv9ZsV86ijFF4kk6oMYplXdU%2BOkv540BAn5tU%2F6gSdMGe3ZvqCBtBBEg3mDb6fCrDTC1PvsF81QySl2xKB7QRFLceS9PCeIgKGckDW1tJllujtlezKrb5quIRuz%2FKKzJOjX5kssenljxMlzm2kX0Um77KV9FsvPJGVipDlllH4pxs8eYQgdP%2BMee0DW5a219fyJ9X3mwmjhZT%2Ba5qTf%2BPwr0SbmOxagcuiCHjZ2o1TLBegpPKqe3BmToo%2FbyJM1l5n%2FkqTH%2FaJe6pNnmnlGg9xdtm5bdr48Ed4wiaxL7KWDASrP%2BVqhNjJHDxhNIwQQRSP%2B5WU%2FAt%2FrycWn1dy38nPyjqlOTPNEGKole6ZOKHyEqodaNMmNzBrg%2BMk1rbW6KDzi1U0IggDrIduvOYwRC%2FZX0%2BgPngDAWBFRoac9JGoynYawKPLch%2BNp84WmSeHeVAG3AH8JCNCN1ccQzDjZBQPvdXyp7kCP25r2Jt1I4%2BoKq3JMccjBO%2BkBVU7BtwUALsTLjAH44F705u8iSn%2BF8wzPy11DKVCYg7U4w1ysy8LgYVb%2BVk4c0vxcROZ6d%2BRJq%2BWzlY%2FxqPm5OSe34IDpuecFD1PZeE7Pf0nHXy1KMClprUcpSF4YVRigZGpMPCJsb0GOqUBkvEGQIycYmfouWAkpL9HGlXVwyUALb1KV9EKS9BN8SZ2W8jnJ1StsejltzW6Pwm%2BXzRyQZx7YELoKX7IIlI94twCRfk2f44cV9FiauF8ioCo2bmhuCDQOcOJRn%2BW4eT45h3j2wsQmq%2B6c8meGptwcBWw9%2FJJb9YOm%2FR5XgTH3mqQfzEO92KhCMiYvtLj0cKn7BxjKu0OSax%2BHJIhhtBe218CH3xW&X-Amz-Signature=f3344905ff015655a223ad53784d4de21d4be898362c84d6e2961934446c476d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

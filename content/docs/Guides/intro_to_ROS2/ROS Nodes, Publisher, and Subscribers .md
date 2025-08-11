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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRCPQDE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaJdNDsBPdFcnd%2Bxhuc%2BwhEHtZAPUK1ra1hRDaHUydHAIgAKi3U9t4vjs4sp689woSSWEtDcA5HQlcoPbMcgXW%2F7UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTVRpkMIIM5OOqCBCrcAxf%2Bw6ogNHw3psQ5FsKnegTlelz%2FP5pbWvhPdd5%2Fracscq05pFjb85UoO6eSHLQ%2FgBlocS83qGeUvLNGeTbO8FR2%2BirMk%2FHSuZPJIzLo4Wae2z1mNGE4B1f2pWL6AF85BYVLcKw9NZQbDLqG7OjjkgOIbV7aI1KpGQtiSly09%2BKZQM7QBaV9aGfU9lopRgmpa%2BjQOS9U3alBBp9Rr6vz21iNp%2B9OiMIxYhWkTrLRKoSDKKw6en4II3xKQo%2Bxu6NENRz5jEhpt%2FUDRGtdCgLnED80cqUznRww4DTUZoK6r7yACfOtceCXqx1cldq5sgiyOk7ZlTASLxJtClBqrmsWx%2BCtuF%2B0pG3CN1Xr2cGm4zu93M1red5YjX%2Bsw%2FxM%2FActOtHVNBi0HEvXaLB637zFSwlgDAS1IAM1Ujrk0AmayUVLxKAnCzDdCejcwe%2FKSxo5kqvtaLqByYY67XHJ5fF4Yf%2B%2FISYN1IL3BoM3YNmMEVvKPdwp4CD7p%2BWypi3fw71ea8IHurIKzN6m5gR5Ph0bCi1mIY6r98X3X16Mcy1EP2iRYuuZpGAkNVc%2FXTnCe4XlK6wE8d6pxy72x8msYeqlrOIo%2FcVpcCtUXL%2FXwpb8DPp72n0bodjeOQbLnTDRMI735cQGOqUBHD%2BG6ME6npQoVAYUwlHYqNCLrceBLmgVN02D5W%2BeKJiZDz4zcyBxeyFWJem4ibBgW0%2Bke0BUjsqIP901VOwQcR3lVNQpsNKe8LV65ZGM2U7PqHfIHnHMU2DfK0TL9UNEzDyrSeQcuf8CK2joJBmsN%2BUM3FuBSsStfpyHNSjOOsVRkfk5%2FENk%2BUzQ3pSlG5xjehA6xALsl0OfEvoGIGeFIMNIYf9%2F&X-Amz-Signature=4bac29917bfc816353c0588d45f7f65eb9a0ad77eccf0523981ebaa67ee1d5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRCPQDE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaJdNDsBPdFcnd%2Bxhuc%2BwhEHtZAPUK1ra1hRDaHUydHAIgAKi3U9t4vjs4sp689woSSWEtDcA5HQlcoPbMcgXW%2F7UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTVRpkMIIM5OOqCBCrcAxf%2Bw6ogNHw3psQ5FsKnegTlelz%2FP5pbWvhPdd5%2Fracscq05pFjb85UoO6eSHLQ%2FgBlocS83qGeUvLNGeTbO8FR2%2BirMk%2FHSuZPJIzLo4Wae2z1mNGE4B1f2pWL6AF85BYVLcKw9NZQbDLqG7OjjkgOIbV7aI1KpGQtiSly09%2BKZQM7QBaV9aGfU9lopRgmpa%2BjQOS9U3alBBp9Rr6vz21iNp%2B9OiMIxYhWkTrLRKoSDKKw6en4II3xKQo%2Bxu6NENRz5jEhpt%2FUDRGtdCgLnED80cqUznRww4DTUZoK6r7yACfOtceCXqx1cldq5sgiyOk7ZlTASLxJtClBqrmsWx%2BCtuF%2B0pG3CN1Xr2cGm4zu93M1red5YjX%2Bsw%2FxM%2FActOtHVNBi0HEvXaLB637zFSwlgDAS1IAM1Ujrk0AmayUVLxKAnCzDdCejcwe%2FKSxo5kqvtaLqByYY67XHJ5fF4Yf%2B%2FISYN1IL3BoM3YNmMEVvKPdwp4CD7p%2BWypi3fw71ea8IHurIKzN6m5gR5Ph0bCi1mIY6r98X3X16Mcy1EP2iRYuuZpGAkNVc%2FXTnCe4XlK6wE8d6pxy72x8msYeqlrOIo%2FcVpcCtUXL%2FXwpb8DPp72n0bodjeOQbLnTDRMI735cQGOqUBHD%2BG6ME6npQoVAYUwlHYqNCLrceBLmgVN02D5W%2BeKJiZDz4zcyBxeyFWJem4ibBgW0%2Bke0BUjsqIP901VOwQcR3lVNQpsNKe8LV65ZGM2U7PqHfIHnHMU2DfK0TL9UNEzDyrSeQcuf8CK2joJBmsN%2BUM3FuBSsStfpyHNSjOOsVRkfk5%2FENk%2BUzQ3pSlG5xjehA6xALsl0OfEvoGIGeFIMNIYf9%2F&X-Amz-Signature=d4e571fac5347e1740b7dfb0a8a87675436e81b628f4c42450128ef1aa129004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRCPQDE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaJdNDsBPdFcnd%2Bxhuc%2BwhEHtZAPUK1ra1hRDaHUydHAIgAKi3U9t4vjs4sp689woSSWEtDcA5HQlcoPbMcgXW%2F7UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTVRpkMIIM5OOqCBCrcAxf%2Bw6ogNHw3psQ5FsKnegTlelz%2FP5pbWvhPdd5%2Fracscq05pFjb85UoO6eSHLQ%2FgBlocS83qGeUvLNGeTbO8FR2%2BirMk%2FHSuZPJIzLo4Wae2z1mNGE4B1f2pWL6AF85BYVLcKw9NZQbDLqG7OjjkgOIbV7aI1KpGQtiSly09%2BKZQM7QBaV9aGfU9lopRgmpa%2BjQOS9U3alBBp9Rr6vz21iNp%2B9OiMIxYhWkTrLRKoSDKKw6en4II3xKQo%2Bxu6NENRz5jEhpt%2FUDRGtdCgLnED80cqUznRww4DTUZoK6r7yACfOtceCXqx1cldq5sgiyOk7ZlTASLxJtClBqrmsWx%2BCtuF%2B0pG3CN1Xr2cGm4zu93M1red5YjX%2Bsw%2FxM%2FActOtHVNBi0HEvXaLB637zFSwlgDAS1IAM1Ujrk0AmayUVLxKAnCzDdCejcwe%2FKSxo5kqvtaLqByYY67XHJ5fF4Yf%2B%2FISYN1IL3BoM3YNmMEVvKPdwp4CD7p%2BWypi3fw71ea8IHurIKzN6m5gR5Ph0bCi1mIY6r98X3X16Mcy1EP2iRYuuZpGAkNVc%2FXTnCe4XlK6wE8d6pxy72x8msYeqlrOIo%2FcVpcCtUXL%2FXwpb8DPp72n0bodjeOQbLnTDRMI735cQGOqUBHD%2BG6ME6npQoVAYUwlHYqNCLrceBLmgVN02D5W%2BeKJiZDz4zcyBxeyFWJem4ibBgW0%2Bke0BUjsqIP901VOwQcR3lVNQpsNKe8LV65ZGM2U7PqHfIHnHMU2DfK0TL9UNEzDyrSeQcuf8CK2joJBmsN%2BUM3FuBSsStfpyHNSjOOsVRkfk5%2FENk%2BUzQ3pSlG5xjehA6xALsl0OfEvoGIGeFIMNIYf9%2F&X-Amz-Signature=8311e6ea3f880652f7e4a7628cce43b0e41d25d129fc2a380d2caada0396cd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRCPQDE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaJdNDsBPdFcnd%2Bxhuc%2BwhEHtZAPUK1ra1hRDaHUydHAIgAKi3U9t4vjs4sp689woSSWEtDcA5HQlcoPbMcgXW%2F7UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTVRpkMIIM5OOqCBCrcAxf%2Bw6ogNHw3psQ5FsKnegTlelz%2FP5pbWvhPdd5%2Fracscq05pFjb85UoO6eSHLQ%2FgBlocS83qGeUvLNGeTbO8FR2%2BirMk%2FHSuZPJIzLo4Wae2z1mNGE4B1f2pWL6AF85BYVLcKw9NZQbDLqG7OjjkgOIbV7aI1KpGQtiSly09%2BKZQM7QBaV9aGfU9lopRgmpa%2BjQOS9U3alBBp9Rr6vz21iNp%2B9OiMIxYhWkTrLRKoSDKKw6en4II3xKQo%2Bxu6NENRz5jEhpt%2FUDRGtdCgLnED80cqUznRww4DTUZoK6r7yACfOtceCXqx1cldq5sgiyOk7ZlTASLxJtClBqrmsWx%2BCtuF%2B0pG3CN1Xr2cGm4zu93M1red5YjX%2Bsw%2FxM%2FActOtHVNBi0HEvXaLB637zFSwlgDAS1IAM1Ujrk0AmayUVLxKAnCzDdCejcwe%2FKSxo5kqvtaLqByYY67XHJ5fF4Yf%2B%2FISYN1IL3BoM3YNmMEVvKPdwp4CD7p%2BWypi3fw71ea8IHurIKzN6m5gR5Ph0bCi1mIY6r98X3X16Mcy1EP2iRYuuZpGAkNVc%2FXTnCe4XlK6wE8d6pxy72x8msYeqlrOIo%2FcVpcCtUXL%2FXwpb8DPp72n0bodjeOQbLnTDRMI735cQGOqUBHD%2BG6ME6npQoVAYUwlHYqNCLrceBLmgVN02D5W%2BeKJiZDz4zcyBxeyFWJem4ibBgW0%2Bke0BUjsqIP901VOwQcR3lVNQpsNKe8LV65ZGM2U7PqHfIHnHMU2DfK0TL9UNEzDyrSeQcuf8CK2joJBmsN%2BUM3FuBSsStfpyHNSjOOsVRkfk5%2FENk%2BUzQ3pSlG5xjehA6xALsl0OfEvoGIGeFIMNIYf9%2F&X-Amz-Signature=b8e71f9f0656dce4082877eec416a3d5b3ff318034f6197275fed482eeaf674c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRCPQDE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaJdNDsBPdFcnd%2Bxhuc%2BwhEHtZAPUK1ra1hRDaHUydHAIgAKi3U9t4vjs4sp689woSSWEtDcA5HQlcoPbMcgXW%2F7UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTVRpkMIIM5OOqCBCrcAxf%2Bw6ogNHw3psQ5FsKnegTlelz%2FP5pbWvhPdd5%2Fracscq05pFjb85UoO6eSHLQ%2FgBlocS83qGeUvLNGeTbO8FR2%2BirMk%2FHSuZPJIzLo4Wae2z1mNGE4B1f2pWL6AF85BYVLcKw9NZQbDLqG7OjjkgOIbV7aI1KpGQtiSly09%2BKZQM7QBaV9aGfU9lopRgmpa%2BjQOS9U3alBBp9Rr6vz21iNp%2B9OiMIxYhWkTrLRKoSDKKw6en4II3xKQo%2Bxu6NENRz5jEhpt%2FUDRGtdCgLnED80cqUznRww4DTUZoK6r7yACfOtceCXqx1cldq5sgiyOk7ZlTASLxJtClBqrmsWx%2BCtuF%2B0pG3CN1Xr2cGm4zu93M1red5YjX%2Bsw%2FxM%2FActOtHVNBi0HEvXaLB637zFSwlgDAS1IAM1Ujrk0AmayUVLxKAnCzDdCejcwe%2FKSxo5kqvtaLqByYY67XHJ5fF4Yf%2B%2FISYN1IL3BoM3YNmMEVvKPdwp4CD7p%2BWypi3fw71ea8IHurIKzN6m5gR5Ph0bCi1mIY6r98X3X16Mcy1EP2iRYuuZpGAkNVc%2FXTnCe4XlK6wE8d6pxy72x8msYeqlrOIo%2FcVpcCtUXL%2FXwpb8DPp72n0bodjeOQbLnTDRMI735cQGOqUBHD%2BG6ME6npQoVAYUwlHYqNCLrceBLmgVN02D5W%2BeKJiZDz4zcyBxeyFWJem4ibBgW0%2Bke0BUjsqIP901VOwQcR3lVNQpsNKe8LV65ZGM2U7PqHfIHnHMU2DfK0TL9UNEzDyrSeQcuf8CK2joJBmsN%2BUM3FuBSsStfpyHNSjOOsVRkfk5%2FENk%2BUzQ3pSlG5xjehA6xALsl0OfEvoGIGeFIMNIYf9%2F&X-Amz-Signature=f9dc51a06d14b94fe7d492e1309e3aa9bfb5f8b274d53f182d1607eb750b22a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRCPQDE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaJdNDsBPdFcnd%2Bxhuc%2BwhEHtZAPUK1ra1hRDaHUydHAIgAKi3U9t4vjs4sp689woSSWEtDcA5HQlcoPbMcgXW%2F7UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTVRpkMIIM5OOqCBCrcAxf%2Bw6ogNHw3psQ5FsKnegTlelz%2FP5pbWvhPdd5%2Fracscq05pFjb85UoO6eSHLQ%2FgBlocS83qGeUvLNGeTbO8FR2%2BirMk%2FHSuZPJIzLo4Wae2z1mNGE4B1f2pWL6AF85BYVLcKw9NZQbDLqG7OjjkgOIbV7aI1KpGQtiSly09%2BKZQM7QBaV9aGfU9lopRgmpa%2BjQOS9U3alBBp9Rr6vz21iNp%2B9OiMIxYhWkTrLRKoSDKKw6en4II3xKQo%2Bxu6NENRz5jEhpt%2FUDRGtdCgLnED80cqUznRww4DTUZoK6r7yACfOtceCXqx1cldq5sgiyOk7ZlTASLxJtClBqrmsWx%2BCtuF%2B0pG3CN1Xr2cGm4zu93M1red5YjX%2Bsw%2FxM%2FActOtHVNBi0HEvXaLB637zFSwlgDAS1IAM1Ujrk0AmayUVLxKAnCzDdCejcwe%2FKSxo5kqvtaLqByYY67XHJ5fF4Yf%2B%2FISYN1IL3BoM3YNmMEVvKPdwp4CD7p%2BWypi3fw71ea8IHurIKzN6m5gR5Ph0bCi1mIY6r98X3X16Mcy1EP2iRYuuZpGAkNVc%2FXTnCe4XlK6wE8d6pxy72x8msYeqlrOIo%2FcVpcCtUXL%2FXwpb8DPp72n0bodjeOQbLnTDRMI735cQGOqUBHD%2BG6ME6npQoVAYUwlHYqNCLrceBLmgVN02D5W%2BeKJiZDz4zcyBxeyFWJem4ibBgW0%2Bke0BUjsqIP901VOwQcR3lVNQpsNKe8LV65ZGM2U7PqHfIHnHMU2DfK0TL9UNEzDyrSeQcuf8CK2joJBmsN%2BUM3FuBSsStfpyHNSjOOsVRkfk5%2FENk%2BUzQ3pSlG5xjehA6xALsl0OfEvoGIGeFIMNIYf9%2F&X-Amz-Signature=38a45f5c93e3672259107cf0f0cd4c52bd13a096e8b009afbf2046048c0bf800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRCPQDE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaJdNDsBPdFcnd%2Bxhuc%2BwhEHtZAPUK1ra1hRDaHUydHAIgAKi3U9t4vjs4sp689woSSWEtDcA5HQlcoPbMcgXW%2F7UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTVRpkMIIM5OOqCBCrcAxf%2Bw6ogNHw3psQ5FsKnegTlelz%2FP5pbWvhPdd5%2Fracscq05pFjb85UoO6eSHLQ%2FgBlocS83qGeUvLNGeTbO8FR2%2BirMk%2FHSuZPJIzLo4Wae2z1mNGE4B1f2pWL6AF85BYVLcKw9NZQbDLqG7OjjkgOIbV7aI1KpGQtiSly09%2BKZQM7QBaV9aGfU9lopRgmpa%2BjQOS9U3alBBp9Rr6vz21iNp%2B9OiMIxYhWkTrLRKoSDKKw6en4II3xKQo%2Bxu6NENRz5jEhpt%2FUDRGtdCgLnED80cqUznRww4DTUZoK6r7yACfOtceCXqx1cldq5sgiyOk7ZlTASLxJtClBqrmsWx%2BCtuF%2B0pG3CN1Xr2cGm4zu93M1red5YjX%2Bsw%2FxM%2FActOtHVNBi0HEvXaLB637zFSwlgDAS1IAM1Ujrk0AmayUVLxKAnCzDdCejcwe%2FKSxo5kqvtaLqByYY67XHJ5fF4Yf%2B%2FISYN1IL3BoM3YNmMEVvKPdwp4CD7p%2BWypi3fw71ea8IHurIKzN6m5gR5Ph0bCi1mIY6r98X3X16Mcy1EP2iRYuuZpGAkNVc%2FXTnCe4XlK6wE8d6pxy72x8msYeqlrOIo%2FcVpcCtUXL%2FXwpb8DPp72n0bodjeOQbLnTDRMI735cQGOqUBHD%2BG6ME6npQoVAYUwlHYqNCLrceBLmgVN02D5W%2BeKJiZDz4zcyBxeyFWJem4ibBgW0%2Bke0BUjsqIP901VOwQcR3lVNQpsNKe8LV65ZGM2U7PqHfIHnHMU2DfK0TL9UNEzDyrSeQcuf8CK2joJBmsN%2BUM3FuBSsStfpyHNSjOOsVRkfk5%2FENk%2BUzQ3pSlG5xjehA6xALsl0OfEvoGIGeFIMNIYf9%2F&X-Amz-Signature=68022ea8a9682fd2c95b30593ce7ce942dec913d29409e74b26ebfdad9c8293c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LRCPQDE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaJdNDsBPdFcnd%2Bxhuc%2BwhEHtZAPUK1ra1hRDaHUydHAIgAKi3U9t4vjs4sp689woSSWEtDcA5HQlcoPbMcgXW%2F7UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTVRpkMIIM5OOqCBCrcAxf%2Bw6ogNHw3psQ5FsKnegTlelz%2FP5pbWvhPdd5%2Fracscq05pFjb85UoO6eSHLQ%2FgBlocS83qGeUvLNGeTbO8FR2%2BirMk%2FHSuZPJIzLo4Wae2z1mNGE4B1f2pWL6AF85BYVLcKw9NZQbDLqG7OjjkgOIbV7aI1KpGQtiSly09%2BKZQM7QBaV9aGfU9lopRgmpa%2BjQOS9U3alBBp9Rr6vz21iNp%2B9OiMIxYhWkTrLRKoSDKKw6en4II3xKQo%2Bxu6NENRz5jEhpt%2FUDRGtdCgLnED80cqUznRww4DTUZoK6r7yACfOtceCXqx1cldq5sgiyOk7ZlTASLxJtClBqrmsWx%2BCtuF%2B0pG3CN1Xr2cGm4zu93M1red5YjX%2Bsw%2FxM%2FActOtHVNBi0HEvXaLB637zFSwlgDAS1IAM1Ujrk0AmayUVLxKAnCzDdCejcwe%2FKSxo5kqvtaLqByYY67XHJ5fF4Yf%2B%2FISYN1IL3BoM3YNmMEVvKPdwp4CD7p%2BWypi3fw71ea8IHurIKzN6m5gR5Ph0bCi1mIY6r98X3X16Mcy1EP2iRYuuZpGAkNVc%2FXTnCe4XlK6wE8d6pxy72x8msYeqlrOIo%2FcVpcCtUXL%2FXwpb8DPp72n0bodjeOQbLnTDRMI735cQGOqUBHD%2BG6ME6npQoVAYUwlHYqNCLrceBLmgVN02D5W%2BeKJiZDz4zcyBxeyFWJem4ibBgW0%2Bke0BUjsqIP901VOwQcR3lVNQpsNKe8LV65ZGM2U7PqHfIHnHMU2DfK0TL9UNEzDyrSeQcuf8CK2joJBmsN%2BUM3FuBSsStfpyHNSjOOsVRkfk5%2FENk%2BUzQ3pSlG5xjehA6xALsl0OfEvoGIGeFIMNIYf9%2F&X-Amz-Signature=c370c308306c582d9622afe080b645fdb263594799cdcf4f8ea8ac1ec07a05df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3TMRHA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu1fjl5hRQ4cpkOtIXaHO1wOEYkaTmh6yUAYqMRHpKwAiEA%2FIDbUIgT2jU%2Ferw3qbvdV0N0ZwswBG%2B40RrNLXWPEW0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxJ62wOLBIlkMEWHCrcAyc22XOnSXwunRLGCZCJhmMZe0M%2BIMCRf0cA4nSBrqO9rgVHuQE5MnSc%2BT6ihD1XCJWtgLJj15hcV5BFmrQR9m7%2Bqt3n5x0verwXNKPv27t4YOCqXDHi6rcXKjPcF4XnKPzNgNmyKetEYQzYVIKZDoZJ3eSgtY6PyuuGSxNJ2L8uU1ZYNtOPCCYEYnGDWGqdCbF5BYxJfO5FaQiRP0%2BPclHByGsIcMZoRvH0j7gNxJnSqlcIs5giWrc%2Fitfi2pt3%2BezvYJlWErxVNm%2Fc6AeR2D1RaSpGR%2FHEK5JDYqhMwm2sF1cIhu%2B9UczROJ7dAArSrmBfPQdHyKX2RHNx4cGDF80JjzWnjMjDcSM6bIqrZdUH7h%2BSu6Tt6PKzpAC3b3vv52bLEcZMKKvm%2BiyS%2FGGUL04HCQ7M51vrfdTqnTKMSEtgc0TyxKZOBKTA%2BW2z4qUlv7gpaRcVhSqcgnxYMDQph%2BykABvSrLQ9fU5Xl3GDFb4fGBpQooalITjXJZQSTAOKOSapbIlnAqXckzDxs3y58j3nv%2FbPAmfY0yiRBtDshXK1snmOQTjOI%2FDBnMpOzULiNz6s5O4yFC1r1tM44jDVBDbeuW%2Bz1z1lJdeTxdssv%2FUn5bVUBaI6IT%2Frx7hCMPCLnL4GOqUBjUdju8sP44ViDmQAmPf01ZgQ8kcQTizQ3Jb%2Bza%2FLGtYRvLNDCEbRxQS9WWratGytrLOPq%2F%2BtV0oNLLJog71o%2F16Y%2FGDJ23Iu3L9K%2FydFUhivskT12tx0B6YmUG%2F9mSqZemqvzcwJ9Yr%2B8hla88oOzAyH1ErDpJsZ7V6Xam7Gvi0atAa7pjnw6m7VVMvDsJy1z82XQ35%2FA4qZ3xLXU15E3DwMza9D&X-Amz-Signature=dea74335869c4bbf1ecf853609d3da80db6f31ab90975da2ce2f1be70a72d200&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3TMRHA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu1fjl5hRQ4cpkOtIXaHO1wOEYkaTmh6yUAYqMRHpKwAiEA%2FIDbUIgT2jU%2Ferw3qbvdV0N0ZwswBG%2B40RrNLXWPEW0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxJ62wOLBIlkMEWHCrcAyc22XOnSXwunRLGCZCJhmMZe0M%2BIMCRf0cA4nSBrqO9rgVHuQE5MnSc%2BT6ihD1XCJWtgLJj15hcV5BFmrQR9m7%2Bqt3n5x0verwXNKPv27t4YOCqXDHi6rcXKjPcF4XnKPzNgNmyKetEYQzYVIKZDoZJ3eSgtY6PyuuGSxNJ2L8uU1ZYNtOPCCYEYnGDWGqdCbF5BYxJfO5FaQiRP0%2BPclHByGsIcMZoRvH0j7gNxJnSqlcIs5giWrc%2Fitfi2pt3%2BezvYJlWErxVNm%2Fc6AeR2D1RaSpGR%2FHEK5JDYqhMwm2sF1cIhu%2B9UczROJ7dAArSrmBfPQdHyKX2RHNx4cGDF80JjzWnjMjDcSM6bIqrZdUH7h%2BSu6Tt6PKzpAC3b3vv52bLEcZMKKvm%2BiyS%2FGGUL04HCQ7M51vrfdTqnTKMSEtgc0TyxKZOBKTA%2BW2z4qUlv7gpaRcVhSqcgnxYMDQph%2BykABvSrLQ9fU5Xl3GDFb4fGBpQooalITjXJZQSTAOKOSapbIlnAqXckzDxs3y58j3nv%2FbPAmfY0yiRBtDshXK1snmOQTjOI%2FDBnMpOzULiNz6s5O4yFC1r1tM44jDVBDbeuW%2Bz1z1lJdeTxdssv%2FUn5bVUBaI6IT%2Frx7hCMPCLnL4GOqUBjUdju8sP44ViDmQAmPf01ZgQ8kcQTizQ3Jb%2Bza%2FLGtYRvLNDCEbRxQS9WWratGytrLOPq%2F%2BtV0oNLLJog71o%2F16Y%2FGDJ23Iu3L9K%2FydFUhivskT12tx0B6YmUG%2F9mSqZemqvzcwJ9Yr%2B8hla88oOzAyH1ErDpJsZ7V6Xam7Gvi0atAa7pjnw6m7VVMvDsJy1z82XQ35%2FA4qZ3xLXU15E3DwMza9D&X-Amz-Signature=915d9138b4791eadcafa819e55591f650d5253967fac06264091c1c61a33178c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3TMRHA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu1fjl5hRQ4cpkOtIXaHO1wOEYkaTmh6yUAYqMRHpKwAiEA%2FIDbUIgT2jU%2Ferw3qbvdV0N0ZwswBG%2B40RrNLXWPEW0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxJ62wOLBIlkMEWHCrcAyc22XOnSXwunRLGCZCJhmMZe0M%2BIMCRf0cA4nSBrqO9rgVHuQE5MnSc%2BT6ihD1XCJWtgLJj15hcV5BFmrQR9m7%2Bqt3n5x0verwXNKPv27t4YOCqXDHi6rcXKjPcF4XnKPzNgNmyKetEYQzYVIKZDoZJ3eSgtY6PyuuGSxNJ2L8uU1ZYNtOPCCYEYnGDWGqdCbF5BYxJfO5FaQiRP0%2BPclHByGsIcMZoRvH0j7gNxJnSqlcIs5giWrc%2Fitfi2pt3%2BezvYJlWErxVNm%2Fc6AeR2D1RaSpGR%2FHEK5JDYqhMwm2sF1cIhu%2B9UczROJ7dAArSrmBfPQdHyKX2RHNx4cGDF80JjzWnjMjDcSM6bIqrZdUH7h%2BSu6Tt6PKzpAC3b3vv52bLEcZMKKvm%2BiyS%2FGGUL04HCQ7M51vrfdTqnTKMSEtgc0TyxKZOBKTA%2BW2z4qUlv7gpaRcVhSqcgnxYMDQph%2BykABvSrLQ9fU5Xl3GDFb4fGBpQooalITjXJZQSTAOKOSapbIlnAqXckzDxs3y58j3nv%2FbPAmfY0yiRBtDshXK1snmOQTjOI%2FDBnMpOzULiNz6s5O4yFC1r1tM44jDVBDbeuW%2Bz1z1lJdeTxdssv%2FUn5bVUBaI6IT%2Frx7hCMPCLnL4GOqUBjUdju8sP44ViDmQAmPf01ZgQ8kcQTizQ3Jb%2Bza%2FLGtYRvLNDCEbRxQS9WWratGytrLOPq%2F%2BtV0oNLLJog71o%2F16Y%2FGDJ23Iu3L9K%2FydFUhivskT12tx0B6YmUG%2F9mSqZemqvzcwJ9Yr%2B8hla88oOzAyH1ErDpJsZ7V6Xam7Gvi0atAa7pjnw6m7VVMvDsJy1z82XQ35%2FA4qZ3xLXU15E3DwMza9D&X-Amz-Signature=12b7d1995033ec60acb8094b912084b99d5b54c071288fea31ecd0efd303c9d1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3TMRHA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu1fjl5hRQ4cpkOtIXaHO1wOEYkaTmh6yUAYqMRHpKwAiEA%2FIDbUIgT2jU%2Ferw3qbvdV0N0ZwswBG%2B40RrNLXWPEW0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxJ62wOLBIlkMEWHCrcAyc22XOnSXwunRLGCZCJhmMZe0M%2BIMCRf0cA4nSBrqO9rgVHuQE5MnSc%2BT6ihD1XCJWtgLJj15hcV5BFmrQR9m7%2Bqt3n5x0verwXNKPv27t4YOCqXDHi6rcXKjPcF4XnKPzNgNmyKetEYQzYVIKZDoZJ3eSgtY6PyuuGSxNJ2L8uU1ZYNtOPCCYEYnGDWGqdCbF5BYxJfO5FaQiRP0%2BPclHByGsIcMZoRvH0j7gNxJnSqlcIs5giWrc%2Fitfi2pt3%2BezvYJlWErxVNm%2Fc6AeR2D1RaSpGR%2FHEK5JDYqhMwm2sF1cIhu%2B9UczROJ7dAArSrmBfPQdHyKX2RHNx4cGDF80JjzWnjMjDcSM6bIqrZdUH7h%2BSu6Tt6PKzpAC3b3vv52bLEcZMKKvm%2BiyS%2FGGUL04HCQ7M51vrfdTqnTKMSEtgc0TyxKZOBKTA%2BW2z4qUlv7gpaRcVhSqcgnxYMDQph%2BykABvSrLQ9fU5Xl3GDFb4fGBpQooalITjXJZQSTAOKOSapbIlnAqXckzDxs3y58j3nv%2FbPAmfY0yiRBtDshXK1snmOQTjOI%2FDBnMpOzULiNz6s5O4yFC1r1tM44jDVBDbeuW%2Bz1z1lJdeTxdssv%2FUn5bVUBaI6IT%2Frx7hCMPCLnL4GOqUBjUdju8sP44ViDmQAmPf01ZgQ8kcQTizQ3Jb%2Bza%2FLGtYRvLNDCEbRxQS9WWratGytrLOPq%2F%2BtV0oNLLJog71o%2F16Y%2FGDJ23Iu3L9K%2FydFUhivskT12tx0B6YmUG%2F9mSqZemqvzcwJ9Yr%2B8hla88oOzAyH1ErDpJsZ7V6Xam7Gvi0atAa7pjnw6m7VVMvDsJy1z82XQ35%2FA4qZ3xLXU15E3DwMza9D&X-Amz-Signature=50f5fa88824e6739891eed628421cbd50dfb05967d80d64a8b6732cf2f8dc106&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3TMRHA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu1fjl5hRQ4cpkOtIXaHO1wOEYkaTmh6yUAYqMRHpKwAiEA%2FIDbUIgT2jU%2Ferw3qbvdV0N0ZwswBG%2B40RrNLXWPEW0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxJ62wOLBIlkMEWHCrcAyc22XOnSXwunRLGCZCJhmMZe0M%2BIMCRf0cA4nSBrqO9rgVHuQE5MnSc%2BT6ihD1XCJWtgLJj15hcV5BFmrQR9m7%2Bqt3n5x0verwXNKPv27t4YOCqXDHi6rcXKjPcF4XnKPzNgNmyKetEYQzYVIKZDoZJ3eSgtY6PyuuGSxNJ2L8uU1ZYNtOPCCYEYnGDWGqdCbF5BYxJfO5FaQiRP0%2BPclHByGsIcMZoRvH0j7gNxJnSqlcIs5giWrc%2Fitfi2pt3%2BezvYJlWErxVNm%2Fc6AeR2D1RaSpGR%2FHEK5JDYqhMwm2sF1cIhu%2B9UczROJ7dAArSrmBfPQdHyKX2RHNx4cGDF80JjzWnjMjDcSM6bIqrZdUH7h%2BSu6Tt6PKzpAC3b3vv52bLEcZMKKvm%2BiyS%2FGGUL04HCQ7M51vrfdTqnTKMSEtgc0TyxKZOBKTA%2BW2z4qUlv7gpaRcVhSqcgnxYMDQph%2BykABvSrLQ9fU5Xl3GDFb4fGBpQooalITjXJZQSTAOKOSapbIlnAqXckzDxs3y58j3nv%2FbPAmfY0yiRBtDshXK1snmOQTjOI%2FDBnMpOzULiNz6s5O4yFC1r1tM44jDVBDbeuW%2Bz1z1lJdeTxdssv%2FUn5bVUBaI6IT%2Frx7hCMPCLnL4GOqUBjUdju8sP44ViDmQAmPf01ZgQ8kcQTizQ3Jb%2Bza%2FLGtYRvLNDCEbRxQS9WWratGytrLOPq%2F%2BtV0oNLLJog71o%2F16Y%2FGDJ23Iu3L9K%2FydFUhivskT12tx0B6YmUG%2F9mSqZemqvzcwJ9Yr%2B8hla88oOzAyH1ErDpJsZ7V6Xam7Gvi0atAa7pjnw6m7VVMvDsJy1z82XQ35%2FA4qZ3xLXU15E3DwMza9D&X-Amz-Signature=f7a1a2dbb9f32aa32e32c7bcbb0000867cf2a95b278099a652fc3c3f74e1730c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3TMRHA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu1fjl5hRQ4cpkOtIXaHO1wOEYkaTmh6yUAYqMRHpKwAiEA%2FIDbUIgT2jU%2Ferw3qbvdV0N0ZwswBG%2B40RrNLXWPEW0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxJ62wOLBIlkMEWHCrcAyc22XOnSXwunRLGCZCJhmMZe0M%2BIMCRf0cA4nSBrqO9rgVHuQE5MnSc%2BT6ihD1XCJWtgLJj15hcV5BFmrQR9m7%2Bqt3n5x0verwXNKPv27t4YOCqXDHi6rcXKjPcF4XnKPzNgNmyKetEYQzYVIKZDoZJ3eSgtY6PyuuGSxNJ2L8uU1ZYNtOPCCYEYnGDWGqdCbF5BYxJfO5FaQiRP0%2BPclHByGsIcMZoRvH0j7gNxJnSqlcIs5giWrc%2Fitfi2pt3%2BezvYJlWErxVNm%2Fc6AeR2D1RaSpGR%2FHEK5JDYqhMwm2sF1cIhu%2B9UczROJ7dAArSrmBfPQdHyKX2RHNx4cGDF80JjzWnjMjDcSM6bIqrZdUH7h%2BSu6Tt6PKzpAC3b3vv52bLEcZMKKvm%2BiyS%2FGGUL04HCQ7M51vrfdTqnTKMSEtgc0TyxKZOBKTA%2BW2z4qUlv7gpaRcVhSqcgnxYMDQph%2BykABvSrLQ9fU5Xl3GDFb4fGBpQooalITjXJZQSTAOKOSapbIlnAqXckzDxs3y58j3nv%2FbPAmfY0yiRBtDshXK1snmOQTjOI%2FDBnMpOzULiNz6s5O4yFC1r1tM44jDVBDbeuW%2Bz1z1lJdeTxdssv%2FUn5bVUBaI6IT%2Frx7hCMPCLnL4GOqUBjUdju8sP44ViDmQAmPf01ZgQ8kcQTizQ3Jb%2Bza%2FLGtYRvLNDCEbRxQS9WWratGytrLOPq%2F%2BtV0oNLLJog71o%2F16Y%2FGDJ23Iu3L9K%2FydFUhivskT12tx0B6YmUG%2F9mSqZemqvzcwJ9Yr%2B8hla88oOzAyH1ErDpJsZ7V6Xam7Gvi0atAa7pjnw6m7VVMvDsJy1z82XQ35%2FA4qZ3xLXU15E3DwMza9D&X-Amz-Signature=8a25a94c53103a12abbbdbb27d72f2bf83f920c15ca9abf7a49d6a54ce2a3cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3TMRHA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu1fjl5hRQ4cpkOtIXaHO1wOEYkaTmh6yUAYqMRHpKwAiEA%2FIDbUIgT2jU%2Ferw3qbvdV0N0ZwswBG%2B40RrNLXWPEW0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxJ62wOLBIlkMEWHCrcAyc22XOnSXwunRLGCZCJhmMZe0M%2BIMCRf0cA4nSBrqO9rgVHuQE5MnSc%2BT6ihD1XCJWtgLJj15hcV5BFmrQR9m7%2Bqt3n5x0verwXNKPv27t4YOCqXDHi6rcXKjPcF4XnKPzNgNmyKetEYQzYVIKZDoZJ3eSgtY6PyuuGSxNJ2L8uU1ZYNtOPCCYEYnGDWGqdCbF5BYxJfO5FaQiRP0%2BPclHByGsIcMZoRvH0j7gNxJnSqlcIs5giWrc%2Fitfi2pt3%2BezvYJlWErxVNm%2Fc6AeR2D1RaSpGR%2FHEK5JDYqhMwm2sF1cIhu%2B9UczROJ7dAArSrmBfPQdHyKX2RHNx4cGDF80JjzWnjMjDcSM6bIqrZdUH7h%2BSu6Tt6PKzpAC3b3vv52bLEcZMKKvm%2BiyS%2FGGUL04HCQ7M51vrfdTqnTKMSEtgc0TyxKZOBKTA%2BW2z4qUlv7gpaRcVhSqcgnxYMDQph%2BykABvSrLQ9fU5Xl3GDFb4fGBpQooalITjXJZQSTAOKOSapbIlnAqXckzDxs3y58j3nv%2FbPAmfY0yiRBtDshXK1snmOQTjOI%2FDBnMpOzULiNz6s5O4yFC1r1tM44jDVBDbeuW%2Bz1z1lJdeTxdssv%2FUn5bVUBaI6IT%2Frx7hCMPCLnL4GOqUBjUdju8sP44ViDmQAmPf01ZgQ8kcQTizQ3Jb%2Bza%2FLGtYRvLNDCEbRxQS9WWratGytrLOPq%2F%2BtV0oNLLJog71o%2F16Y%2FGDJ23Iu3L9K%2FydFUhivskT12tx0B6YmUG%2F9mSqZemqvzcwJ9Yr%2B8hla88oOzAyH1ErDpJsZ7V6Xam7Gvi0atAa7pjnw6m7VVMvDsJy1z82XQ35%2FA4qZ3xLXU15E3DwMza9D&X-Amz-Signature=0f4e27cf757c5a45d43aae880b5569ea04fe1ef9d8269137e632946b5366e2cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3TMRHA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu1fjl5hRQ4cpkOtIXaHO1wOEYkaTmh6yUAYqMRHpKwAiEA%2FIDbUIgT2jU%2Ferw3qbvdV0N0ZwswBG%2B40RrNLXWPEW0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxJ62wOLBIlkMEWHCrcAyc22XOnSXwunRLGCZCJhmMZe0M%2BIMCRf0cA4nSBrqO9rgVHuQE5MnSc%2BT6ihD1XCJWtgLJj15hcV5BFmrQR9m7%2Bqt3n5x0verwXNKPv27t4YOCqXDHi6rcXKjPcF4XnKPzNgNmyKetEYQzYVIKZDoZJ3eSgtY6PyuuGSxNJ2L8uU1ZYNtOPCCYEYnGDWGqdCbF5BYxJfO5FaQiRP0%2BPclHByGsIcMZoRvH0j7gNxJnSqlcIs5giWrc%2Fitfi2pt3%2BezvYJlWErxVNm%2Fc6AeR2D1RaSpGR%2FHEK5JDYqhMwm2sF1cIhu%2B9UczROJ7dAArSrmBfPQdHyKX2RHNx4cGDF80JjzWnjMjDcSM6bIqrZdUH7h%2BSu6Tt6PKzpAC3b3vv52bLEcZMKKvm%2BiyS%2FGGUL04HCQ7M51vrfdTqnTKMSEtgc0TyxKZOBKTA%2BW2z4qUlv7gpaRcVhSqcgnxYMDQph%2BykABvSrLQ9fU5Xl3GDFb4fGBpQooalITjXJZQSTAOKOSapbIlnAqXckzDxs3y58j3nv%2FbPAmfY0yiRBtDshXK1snmOQTjOI%2FDBnMpOzULiNz6s5O4yFC1r1tM44jDVBDbeuW%2Bz1z1lJdeTxdssv%2FUn5bVUBaI6IT%2Frx7hCMPCLnL4GOqUBjUdju8sP44ViDmQAmPf01ZgQ8kcQTizQ3Jb%2Bza%2FLGtYRvLNDCEbRxQS9WWratGytrLOPq%2F%2BtV0oNLLJog71o%2F16Y%2FGDJ23Iu3L9K%2FydFUhivskT12tx0B6YmUG%2F9mSqZemqvzcwJ9Yr%2B8hla88oOzAyH1ErDpJsZ7V6Xam7Gvi0atAa7pjnw6m7VVMvDsJy1z82XQ35%2FA4qZ3xLXU15E3DwMza9D&X-Amz-Signature=a905e0c96245f103736bbb3a415109961396d8e309a22d047b5b191d9f9c5e62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

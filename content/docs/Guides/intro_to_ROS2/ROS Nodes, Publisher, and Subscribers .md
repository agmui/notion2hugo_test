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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZR3BO%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7dWI64hzhiavaaSrf23fHhxqoUZzawXs3x%2FszQDtPwQIgLZAZRt2nS7bp3ZFcbf2l1Mw3l3fAcPTv7IuM%2BHoSVZcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOznc8U1t8ZgJr8ZLSrcA2uVtLI5syEO4TGiD5y7ewNgpGFqrspDjYR4ganCchXOxt0aOqpRmJEjRIsGHrDCFy16TtV6blMPsrmZ93pfLpxiC%2BRBLH0%2BNQZ2QMyYGbQDQaSA3F7M%2B7Ec8sBuUOoB021JFta9%2B1Dg%2B%2FHVMdrTz%2Bq%2FBMUoFFcX1Fu7%2Fdpul1PCrTD4yeDgQCpH4DCUTYRAs3LmCFAmuQmFm6%2BBySCQ0Nr2YdwshqydsKwgsc3ml35%2FS%2BaTjT3ZmHZSP%2FC0QZEp9jIfeCo1B8iAKpZ8n120k8xiZtRKAV%2FgDz1A8k8PRYieyypetdU2dr2V7wYc6dCsmucPMSNg7kDKMQfbTjbtGqSv%2Bfcx8816%2F1QSL78WekVxSF5nHwxFI2to9wKe45IcID3cgBa6Q48oWBwiv6zm19GygC72rwry9LVguDaOi%2F5xtxWKvFAi8FqZjhn0lx8Y9PwbdjmqAmNrempuqG6eQiAEO6vcbzRILotzj%2BE2RjbQCDpXRwJ66THSqtm%2Fg%2BKtGo4PXi0oj40PSKnRy8PIi3aSWvvs5pgGddPoG%2BiTen0b92jGWg3kZv1Gj2vdp8EZknwjTh4KlF5Z6U94UNZ9OiMFvC61i8vDN3YACvQDbI7hSU7%2B3XMuxHXCmxVVMLzQjcYGOqUBUw%2BSTxbmt3llDWak1mAgohH%2BjMITQrsFfOcauG3SJd5AhszQUfnPah9k63Lx%2FON%2FJ1BFA5ZTEEE42WaFm8EGiaFuS5j11NA2ph6n4SMf7Ll%2B06l04gSrNmt978Hj5Bpi0MH4%2BVhjmWM%2FagKTVWB46OtQ2xXCyoaJrO6eMUcm7XuevS6O27hEOlGneiQ%2FY8uJ9cb2m4uOhcga7DpcS7DZ4ydbGWZL&X-Amz-Signature=0be181325db13c7e7120d27549ad5bc9e1dd180882c02ba7c58f134bdd5378df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZR3BO%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7dWI64hzhiavaaSrf23fHhxqoUZzawXs3x%2FszQDtPwQIgLZAZRt2nS7bp3ZFcbf2l1Mw3l3fAcPTv7IuM%2BHoSVZcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOznc8U1t8ZgJr8ZLSrcA2uVtLI5syEO4TGiD5y7ewNgpGFqrspDjYR4ganCchXOxt0aOqpRmJEjRIsGHrDCFy16TtV6blMPsrmZ93pfLpxiC%2BRBLH0%2BNQZ2QMyYGbQDQaSA3F7M%2B7Ec8sBuUOoB021JFta9%2B1Dg%2B%2FHVMdrTz%2Bq%2FBMUoFFcX1Fu7%2Fdpul1PCrTD4yeDgQCpH4DCUTYRAs3LmCFAmuQmFm6%2BBySCQ0Nr2YdwshqydsKwgsc3ml35%2FS%2BaTjT3ZmHZSP%2FC0QZEp9jIfeCo1B8iAKpZ8n120k8xiZtRKAV%2FgDz1A8k8PRYieyypetdU2dr2V7wYc6dCsmucPMSNg7kDKMQfbTjbtGqSv%2Bfcx8816%2F1QSL78WekVxSF5nHwxFI2to9wKe45IcID3cgBa6Q48oWBwiv6zm19GygC72rwry9LVguDaOi%2F5xtxWKvFAi8FqZjhn0lx8Y9PwbdjmqAmNrempuqG6eQiAEO6vcbzRILotzj%2BE2RjbQCDpXRwJ66THSqtm%2Fg%2BKtGo4PXi0oj40PSKnRy8PIi3aSWvvs5pgGddPoG%2BiTen0b92jGWg3kZv1Gj2vdp8EZknwjTh4KlF5Z6U94UNZ9OiMFvC61i8vDN3YACvQDbI7hSU7%2B3XMuxHXCmxVVMLzQjcYGOqUBUw%2BSTxbmt3llDWak1mAgohH%2BjMITQrsFfOcauG3SJd5AhszQUfnPah9k63Lx%2FON%2FJ1BFA5ZTEEE42WaFm8EGiaFuS5j11NA2ph6n4SMf7Ll%2B06l04gSrNmt978Hj5Bpi0MH4%2BVhjmWM%2FagKTVWB46OtQ2xXCyoaJrO6eMUcm7XuevS6O27hEOlGneiQ%2FY8uJ9cb2m4uOhcga7DpcS7DZ4ydbGWZL&X-Amz-Signature=3db64adbb21b35a3b75f8009af805e8ddb3aa5c0eaa02ca1cf7e321ccdbcc946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZR3BO%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7dWI64hzhiavaaSrf23fHhxqoUZzawXs3x%2FszQDtPwQIgLZAZRt2nS7bp3ZFcbf2l1Mw3l3fAcPTv7IuM%2BHoSVZcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOznc8U1t8ZgJr8ZLSrcA2uVtLI5syEO4TGiD5y7ewNgpGFqrspDjYR4ganCchXOxt0aOqpRmJEjRIsGHrDCFy16TtV6blMPsrmZ93pfLpxiC%2BRBLH0%2BNQZ2QMyYGbQDQaSA3F7M%2B7Ec8sBuUOoB021JFta9%2B1Dg%2B%2FHVMdrTz%2Bq%2FBMUoFFcX1Fu7%2Fdpul1PCrTD4yeDgQCpH4DCUTYRAs3LmCFAmuQmFm6%2BBySCQ0Nr2YdwshqydsKwgsc3ml35%2FS%2BaTjT3ZmHZSP%2FC0QZEp9jIfeCo1B8iAKpZ8n120k8xiZtRKAV%2FgDz1A8k8PRYieyypetdU2dr2V7wYc6dCsmucPMSNg7kDKMQfbTjbtGqSv%2Bfcx8816%2F1QSL78WekVxSF5nHwxFI2to9wKe45IcID3cgBa6Q48oWBwiv6zm19GygC72rwry9LVguDaOi%2F5xtxWKvFAi8FqZjhn0lx8Y9PwbdjmqAmNrempuqG6eQiAEO6vcbzRILotzj%2BE2RjbQCDpXRwJ66THSqtm%2Fg%2BKtGo4PXi0oj40PSKnRy8PIi3aSWvvs5pgGddPoG%2BiTen0b92jGWg3kZv1Gj2vdp8EZknwjTh4KlF5Z6U94UNZ9OiMFvC61i8vDN3YACvQDbI7hSU7%2B3XMuxHXCmxVVMLzQjcYGOqUBUw%2BSTxbmt3llDWak1mAgohH%2BjMITQrsFfOcauG3SJd5AhszQUfnPah9k63Lx%2FON%2FJ1BFA5ZTEEE42WaFm8EGiaFuS5j11NA2ph6n4SMf7Ll%2B06l04gSrNmt978Hj5Bpi0MH4%2BVhjmWM%2FagKTVWB46OtQ2xXCyoaJrO6eMUcm7XuevS6O27hEOlGneiQ%2FY8uJ9cb2m4uOhcga7DpcS7DZ4ydbGWZL&X-Amz-Signature=98354a493906a8965c7efb7adfc35c9dfed76bc1dd61b382ca7f172d1654ce89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZR3BO%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7dWI64hzhiavaaSrf23fHhxqoUZzawXs3x%2FszQDtPwQIgLZAZRt2nS7bp3ZFcbf2l1Mw3l3fAcPTv7IuM%2BHoSVZcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOznc8U1t8ZgJr8ZLSrcA2uVtLI5syEO4TGiD5y7ewNgpGFqrspDjYR4ganCchXOxt0aOqpRmJEjRIsGHrDCFy16TtV6blMPsrmZ93pfLpxiC%2BRBLH0%2BNQZ2QMyYGbQDQaSA3F7M%2B7Ec8sBuUOoB021JFta9%2B1Dg%2B%2FHVMdrTz%2Bq%2FBMUoFFcX1Fu7%2Fdpul1PCrTD4yeDgQCpH4DCUTYRAs3LmCFAmuQmFm6%2BBySCQ0Nr2YdwshqydsKwgsc3ml35%2FS%2BaTjT3ZmHZSP%2FC0QZEp9jIfeCo1B8iAKpZ8n120k8xiZtRKAV%2FgDz1A8k8PRYieyypetdU2dr2V7wYc6dCsmucPMSNg7kDKMQfbTjbtGqSv%2Bfcx8816%2F1QSL78WekVxSF5nHwxFI2to9wKe45IcID3cgBa6Q48oWBwiv6zm19GygC72rwry9LVguDaOi%2F5xtxWKvFAi8FqZjhn0lx8Y9PwbdjmqAmNrempuqG6eQiAEO6vcbzRILotzj%2BE2RjbQCDpXRwJ66THSqtm%2Fg%2BKtGo4PXi0oj40PSKnRy8PIi3aSWvvs5pgGddPoG%2BiTen0b92jGWg3kZv1Gj2vdp8EZknwjTh4KlF5Z6U94UNZ9OiMFvC61i8vDN3YACvQDbI7hSU7%2B3XMuxHXCmxVVMLzQjcYGOqUBUw%2BSTxbmt3llDWak1mAgohH%2BjMITQrsFfOcauG3SJd5AhszQUfnPah9k63Lx%2FON%2FJ1BFA5ZTEEE42WaFm8EGiaFuS5j11NA2ph6n4SMf7Ll%2B06l04gSrNmt978Hj5Bpi0MH4%2BVhjmWM%2FagKTVWB46OtQ2xXCyoaJrO6eMUcm7XuevS6O27hEOlGneiQ%2FY8uJ9cb2m4uOhcga7DpcS7DZ4ydbGWZL&X-Amz-Signature=26c319e4908642425aabd24506f93bab2d34d1199cc9324183c80e751eee24a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZR3BO%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7dWI64hzhiavaaSrf23fHhxqoUZzawXs3x%2FszQDtPwQIgLZAZRt2nS7bp3ZFcbf2l1Mw3l3fAcPTv7IuM%2BHoSVZcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOznc8U1t8ZgJr8ZLSrcA2uVtLI5syEO4TGiD5y7ewNgpGFqrspDjYR4ganCchXOxt0aOqpRmJEjRIsGHrDCFy16TtV6blMPsrmZ93pfLpxiC%2BRBLH0%2BNQZ2QMyYGbQDQaSA3F7M%2B7Ec8sBuUOoB021JFta9%2B1Dg%2B%2FHVMdrTz%2Bq%2FBMUoFFcX1Fu7%2Fdpul1PCrTD4yeDgQCpH4DCUTYRAs3LmCFAmuQmFm6%2BBySCQ0Nr2YdwshqydsKwgsc3ml35%2FS%2BaTjT3ZmHZSP%2FC0QZEp9jIfeCo1B8iAKpZ8n120k8xiZtRKAV%2FgDz1A8k8PRYieyypetdU2dr2V7wYc6dCsmucPMSNg7kDKMQfbTjbtGqSv%2Bfcx8816%2F1QSL78WekVxSF5nHwxFI2to9wKe45IcID3cgBa6Q48oWBwiv6zm19GygC72rwry9LVguDaOi%2F5xtxWKvFAi8FqZjhn0lx8Y9PwbdjmqAmNrempuqG6eQiAEO6vcbzRILotzj%2BE2RjbQCDpXRwJ66THSqtm%2Fg%2BKtGo4PXi0oj40PSKnRy8PIi3aSWvvs5pgGddPoG%2BiTen0b92jGWg3kZv1Gj2vdp8EZknwjTh4KlF5Z6U94UNZ9OiMFvC61i8vDN3YACvQDbI7hSU7%2B3XMuxHXCmxVVMLzQjcYGOqUBUw%2BSTxbmt3llDWak1mAgohH%2BjMITQrsFfOcauG3SJd5AhszQUfnPah9k63Lx%2FON%2FJ1BFA5ZTEEE42WaFm8EGiaFuS5j11NA2ph6n4SMf7Ll%2B06l04gSrNmt978Hj5Bpi0MH4%2BVhjmWM%2FagKTVWB46OtQ2xXCyoaJrO6eMUcm7XuevS6O27hEOlGneiQ%2FY8uJ9cb2m4uOhcga7DpcS7DZ4ydbGWZL&X-Amz-Signature=bb9e9050f812d73da840fb764d70a4e72234b9d4e6dfacd8d4a199ceed94ac9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZR3BO%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7dWI64hzhiavaaSrf23fHhxqoUZzawXs3x%2FszQDtPwQIgLZAZRt2nS7bp3ZFcbf2l1Mw3l3fAcPTv7IuM%2BHoSVZcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOznc8U1t8ZgJr8ZLSrcA2uVtLI5syEO4TGiD5y7ewNgpGFqrspDjYR4ganCchXOxt0aOqpRmJEjRIsGHrDCFy16TtV6blMPsrmZ93pfLpxiC%2BRBLH0%2BNQZ2QMyYGbQDQaSA3F7M%2B7Ec8sBuUOoB021JFta9%2B1Dg%2B%2FHVMdrTz%2Bq%2FBMUoFFcX1Fu7%2Fdpul1PCrTD4yeDgQCpH4DCUTYRAs3LmCFAmuQmFm6%2BBySCQ0Nr2YdwshqydsKwgsc3ml35%2FS%2BaTjT3ZmHZSP%2FC0QZEp9jIfeCo1B8iAKpZ8n120k8xiZtRKAV%2FgDz1A8k8PRYieyypetdU2dr2V7wYc6dCsmucPMSNg7kDKMQfbTjbtGqSv%2Bfcx8816%2F1QSL78WekVxSF5nHwxFI2to9wKe45IcID3cgBa6Q48oWBwiv6zm19GygC72rwry9LVguDaOi%2F5xtxWKvFAi8FqZjhn0lx8Y9PwbdjmqAmNrempuqG6eQiAEO6vcbzRILotzj%2BE2RjbQCDpXRwJ66THSqtm%2Fg%2BKtGo4PXi0oj40PSKnRy8PIi3aSWvvs5pgGddPoG%2BiTen0b92jGWg3kZv1Gj2vdp8EZknwjTh4KlF5Z6U94UNZ9OiMFvC61i8vDN3YACvQDbI7hSU7%2B3XMuxHXCmxVVMLzQjcYGOqUBUw%2BSTxbmt3llDWak1mAgohH%2BjMITQrsFfOcauG3SJd5AhszQUfnPah9k63Lx%2FON%2FJ1BFA5ZTEEE42WaFm8EGiaFuS5j11NA2ph6n4SMf7Ll%2B06l04gSrNmt978Hj5Bpi0MH4%2BVhjmWM%2FagKTVWB46OtQ2xXCyoaJrO6eMUcm7XuevS6O27hEOlGneiQ%2FY8uJ9cb2m4uOhcga7DpcS7DZ4ydbGWZL&X-Amz-Signature=415c911ce3e6294175bc333cb6eb5e4e43160717cc36f6ce2d49b8dcdc85c969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZR3BO%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7dWI64hzhiavaaSrf23fHhxqoUZzawXs3x%2FszQDtPwQIgLZAZRt2nS7bp3ZFcbf2l1Mw3l3fAcPTv7IuM%2BHoSVZcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOznc8U1t8ZgJr8ZLSrcA2uVtLI5syEO4TGiD5y7ewNgpGFqrspDjYR4ganCchXOxt0aOqpRmJEjRIsGHrDCFy16TtV6blMPsrmZ93pfLpxiC%2BRBLH0%2BNQZ2QMyYGbQDQaSA3F7M%2B7Ec8sBuUOoB021JFta9%2B1Dg%2B%2FHVMdrTz%2Bq%2FBMUoFFcX1Fu7%2Fdpul1PCrTD4yeDgQCpH4DCUTYRAs3LmCFAmuQmFm6%2BBySCQ0Nr2YdwshqydsKwgsc3ml35%2FS%2BaTjT3ZmHZSP%2FC0QZEp9jIfeCo1B8iAKpZ8n120k8xiZtRKAV%2FgDz1A8k8PRYieyypetdU2dr2V7wYc6dCsmucPMSNg7kDKMQfbTjbtGqSv%2Bfcx8816%2F1QSL78WekVxSF5nHwxFI2to9wKe45IcID3cgBa6Q48oWBwiv6zm19GygC72rwry9LVguDaOi%2F5xtxWKvFAi8FqZjhn0lx8Y9PwbdjmqAmNrempuqG6eQiAEO6vcbzRILotzj%2BE2RjbQCDpXRwJ66THSqtm%2Fg%2BKtGo4PXi0oj40PSKnRy8PIi3aSWvvs5pgGddPoG%2BiTen0b92jGWg3kZv1Gj2vdp8EZknwjTh4KlF5Z6U94UNZ9OiMFvC61i8vDN3YACvQDbI7hSU7%2B3XMuxHXCmxVVMLzQjcYGOqUBUw%2BSTxbmt3llDWak1mAgohH%2BjMITQrsFfOcauG3SJd5AhszQUfnPah9k63Lx%2FON%2FJ1BFA5ZTEEE42WaFm8EGiaFuS5j11NA2ph6n4SMf7Ll%2B06l04gSrNmt978Hj5Bpi0MH4%2BVhjmWM%2FagKTVWB46OtQ2xXCyoaJrO6eMUcm7XuevS6O27hEOlGneiQ%2FY8uJ9cb2m4uOhcga7DpcS7DZ4ydbGWZL&X-Amz-Signature=2dd0785050358c67020b3df73410214f53fadb15613f64fb0a344f051138593d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZR3BO%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7dWI64hzhiavaaSrf23fHhxqoUZzawXs3x%2FszQDtPwQIgLZAZRt2nS7bp3ZFcbf2l1Mw3l3fAcPTv7IuM%2BHoSVZcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOznc8U1t8ZgJr8ZLSrcA2uVtLI5syEO4TGiD5y7ewNgpGFqrspDjYR4ganCchXOxt0aOqpRmJEjRIsGHrDCFy16TtV6blMPsrmZ93pfLpxiC%2BRBLH0%2BNQZ2QMyYGbQDQaSA3F7M%2B7Ec8sBuUOoB021JFta9%2B1Dg%2B%2FHVMdrTz%2Bq%2FBMUoFFcX1Fu7%2Fdpul1PCrTD4yeDgQCpH4DCUTYRAs3LmCFAmuQmFm6%2BBySCQ0Nr2YdwshqydsKwgsc3ml35%2FS%2BaTjT3ZmHZSP%2FC0QZEp9jIfeCo1B8iAKpZ8n120k8xiZtRKAV%2FgDz1A8k8PRYieyypetdU2dr2V7wYc6dCsmucPMSNg7kDKMQfbTjbtGqSv%2Bfcx8816%2F1QSL78WekVxSF5nHwxFI2to9wKe45IcID3cgBa6Q48oWBwiv6zm19GygC72rwry9LVguDaOi%2F5xtxWKvFAi8FqZjhn0lx8Y9PwbdjmqAmNrempuqG6eQiAEO6vcbzRILotzj%2BE2RjbQCDpXRwJ66THSqtm%2Fg%2BKtGo4PXi0oj40PSKnRy8PIi3aSWvvs5pgGddPoG%2BiTen0b92jGWg3kZv1Gj2vdp8EZknwjTh4KlF5Z6U94UNZ9OiMFvC61i8vDN3YACvQDbI7hSU7%2B3XMuxHXCmxVVMLzQjcYGOqUBUw%2BSTxbmt3llDWak1mAgohH%2BjMITQrsFfOcauG3SJd5AhszQUfnPah9k63Lx%2FON%2FJ1BFA5ZTEEE42WaFm8EGiaFuS5j11NA2ph6n4SMf7Ll%2B06l04gSrNmt978Hj5Bpi0MH4%2BVhjmWM%2FagKTVWB46OtQ2xXCyoaJrO6eMUcm7XuevS6O27hEOlGneiQ%2FY8uJ9cb2m4uOhcga7DpcS7DZ4ydbGWZL&X-Amz-Signature=abf211f594348cdb56414de62a98aa96c319a289e45d11072e3f2cc7376450be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

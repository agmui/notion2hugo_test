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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOP65YSP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDsBch9bCMmEcAF0gOvaoi19Hlo%2BnVUjsmWuI2YECCB%2FQIhAKtGT%2BiUL%2FCaJMQNU3k1Xwt2ED0s95%2Bv3E6DESS%2BbysyKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbIZwEcsVRZS%2BCfcMq3AOV0UaGf990cuDL9GcQlVHkflLT0dZr5sFSDMBHBm6Qr5b7ouLO8SevM%2Boeg%2F3zeT2l%2BV%2BPjNDItfRFTaWVSqoB%2BvTtAbwAnXGy9B5CMkWE6BF59H%2F3GRRa1V7eyiArqaTsZCPzEvPgeAAdyFyKGE548fVfSKKyYEHWy9V3ZSVFY2r12YSoQQw49Fff9CWRsu6Fb1bCwMqR3dSRCY6MLRoaXzT8G7ZXvOkTIaRSlJ5RsmpCdIHqRmTInkuxXQou96QMp6WThWuWZX7AboG6lGAorhUu%2FKTKlIvXYsZRhyUOPuRTA9FEM8NgEjEGIi9GaJVAt8O4MFFvj9y1gu7OTwLIdduVvNQ2FFtodkbCWdotzLbf%2BbyoDsLkhCWYve6dTyO0oNnLSDPQU5F%2Fnv5KI0sSEFPXxagVNFIHpYvMKYl9jyCwO05GkCuOkk6nNQoAe4BG2vbX%2Bpt1DIBpmFXcJbLxF85B936zE6A42J5W03gdX7eqqSo3MauiRHwds%2FMhJMxfrMLNBCGMYSG9VdqUhCdIAL5ekdetFlnDk6VDsM8D7%2BisA%2FlG5ClqrHtQbEH2iT%2B4XVnif3X1ADJYdIZ1HTheI3vgdRArjntYyOYjIOk9glFO23yG9RQib%2B0CgzCbt%2Be%2FBjqkAZi%2F%2B3v9Hmdh2UqddIDp0mklbylmV94ieQF5tI%2B9zzXTgMqp7QmF7AxYYMAfN3XmefM%2BRcgg8GfLYUtF2o0rSxEJWSBcqWG%2Bi9EOTT72ffLjsKeO0URfgKFFN09sQBX2SmttC19d93gskJ6QhZXPr5WVBGUiuxcuS244FeGVG7ZUSrOVh%2BV8aKkNmmSn0XGVI3QkqV%2B0y5l%2Bsq%2Bu2cbIFlRosECQ&X-Amz-Signature=2c71e4bab2040dc41bbbf47ddbda1dedbf2f315b43f873ebb1096a55a17729e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOP65YSP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDsBch9bCMmEcAF0gOvaoi19Hlo%2BnVUjsmWuI2YECCB%2FQIhAKtGT%2BiUL%2FCaJMQNU3k1Xwt2ED0s95%2Bv3E6DESS%2BbysyKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbIZwEcsVRZS%2BCfcMq3AOV0UaGf990cuDL9GcQlVHkflLT0dZr5sFSDMBHBm6Qr5b7ouLO8SevM%2Boeg%2F3zeT2l%2BV%2BPjNDItfRFTaWVSqoB%2BvTtAbwAnXGy9B5CMkWE6BF59H%2F3GRRa1V7eyiArqaTsZCPzEvPgeAAdyFyKGE548fVfSKKyYEHWy9V3ZSVFY2r12YSoQQw49Fff9CWRsu6Fb1bCwMqR3dSRCY6MLRoaXzT8G7ZXvOkTIaRSlJ5RsmpCdIHqRmTInkuxXQou96QMp6WThWuWZX7AboG6lGAorhUu%2FKTKlIvXYsZRhyUOPuRTA9FEM8NgEjEGIi9GaJVAt8O4MFFvj9y1gu7OTwLIdduVvNQ2FFtodkbCWdotzLbf%2BbyoDsLkhCWYve6dTyO0oNnLSDPQU5F%2Fnv5KI0sSEFPXxagVNFIHpYvMKYl9jyCwO05GkCuOkk6nNQoAe4BG2vbX%2Bpt1DIBpmFXcJbLxF85B936zE6A42J5W03gdX7eqqSo3MauiRHwds%2FMhJMxfrMLNBCGMYSG9VdqUhCdIAL5ekdetFlnDk6VDsM8D7%2BisA%2FlG5ClqrHtQbEH2iT%2B4XVnif3X1ADJYdIZ1HTheI3vgdRArjntYyOYjIOk9glFO23yG9RQib%2B0CgzCbt%2Be%2FBjqkAZi%2F%2B3v9Hmdh2UqddIDp0mklbylmV94ieQF5tI%2B9zzXTgMqp7QmF7AxYYMAfN3XmefM%2BRcgg8GfLYUtF2o0rSxEJWSBcqWG%2Bi9EOTT72ffLjsKeO0URfgKFFN09sQBX2SmttC19d93gskJ6QhZXPr5WVBGUiuxcuS244FeGVG7ZUSrOVh%2BV8aKkNmmSn0XGVI3QkqV%2B0y5l%2Bsq%2Bu2cbIFlRosECQ&X-Amz-Signature=619b00822002071b8d4bfc11ea145ce6602c3fc600c9edbb511f2feb5fe7f4d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOP65YSP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDsBch9bCMmEcAF0gOvaoi19Hlo%2BnVUjsmWuI2YECCB%2FQIhAKtGT%2BiUL%2FCaJMQNU3k1Xwt2ED0s95%2Bv3E6DESS%2BbysyKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbIZwEcsVRZS%2BCfcMq3AOV0UaGf990cuDL9GcQlVHkflLT0dZr5sFSDMBHBm6Qr5b7ouLO8SevM%2Boeg%2F3zeT2l%2BV%2BPjNDItfRFTaWVSqoB%2BvTtAbwAnXGy9B5CMkWE6BF59H%2F3GRRa1V7eyiArqaTsZCPzEvPgeAAdyFyKGE548fVfSKKyYEHWy9V3ZSVFY2r12YSoQQw49Fff9CWRsu6Fb1bCwMqR3dSRCY6MLRoaXzT8G7ZXvOkTIaRSlJ5RsmpCdIHqRmTInkuxXQou96QMp6WThWuWZX7AboG6lGAorhUu%2FKTKlIvXYsZRhyUOPuRTA9FEM8NgEjEGIi9GaJVAt8O4MFFvj9y1gu7OTwLIdduVvNQ2FFtodkbCWdotzLbf%2BbyoDsLkhCWYve6dTyO0oNnLSDPQU5F%2Fnv5KI0sSEFPXxagVNFIHpYvMKYl9jyCwO05GkCuOkk6nNQoAe4BG2vbX%2Bpt1DIBpmFXcJbLxF85B936zE6A42J5W03gdX7eqqSo3MauiRHwds%2FMhJMxfrMLNBCGMYSG9VdqUhCdIAL5ekdetFlnDk6VDsM8D7%2BisA%2FlG5ClqrHtQbEH2iT%2B4XVnif3X1ADJYdIZ1HTheI3vgdRArjntYyOYjIOk9glFO23yG9RQib%2B0CgzCbt%2Be%2FBjqkAZi%2F%2B3v9Hmdh2UqddIDp0mklbylmV94ieQF5tI%2B9zzXTgMqp7QmF7AxYYMAfN3XmefM%2BRcgg8GfLYUtF2o0rSxEJWSBcqWG%2Bi9EOTT72ffLjsKeO0URfgKFFN09sQBX2SmttC19d93gskJ6QhZXPr5WVBGUiuxcuS244FeGVG7ZUSrOVh%2BV8aKkNmmSn0XGVI3QkqV%2B0y5l%2Bsq%2Bu2cbIFlRosECQ&X-Amz-Signature=f410fdb57e81e9730c077f336f95eff37e6deefa141ebeca448b1765fc544fad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOP65YSP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDsBch9bCMmEcAF0gOvaoi19Hlo%2BnVUjsmWuI2YECCB%2FQIhAKtGT%2BiUL%2FCaJMQNU3k1Xwt2ED0s95%2Bv3E6DESS%2BbysyKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbIZwEcsVRZS%2BCfcMq3AOV0UaGf990cuDL9GcQlVHkflLT0dZr5sFSDMBHBm6Qr5b7ouLO8SevM%2Boeg%2F3zeT2l%2BV%2BPjNDItfRFTaWVSqoB%2BvTtAbwAnXGy9B5CMkWE6BF59H%2F3GRRa1V7eyiArqaTsZCPzEvPgeAAdyFyKGE548fVfSKKyYEHWy9V3ZSVFY2r12YSoQQw49Fff9CWRsu6Fb1bCwMqR3dSRCY6MLRoaXzT8G7ZXvOkTIaRSlJ5RsmpCdIHqRmTInkuxXQou96QMp6WThWuWZX7AboG6lGAorhUu%2FKTKlIvXYsZRhyUOPuRTA9FEM8NgEjEGIi9GaJVAt8O4MFFvj9y1gu7OTwLIdduVvNQ2FFtodkbCWdotzLbf%2BbyoDsLkhCWYve6dTyO0oNnLSDPQU5F%2Fnv5KI0sSEFPXxagVNFIHpYvMKYl9jyCwO05GkCuOkk6nNQoAe4BG2vbX%2Bpt1DIBpmFXcJbLxF85B936zE6A42J5W03gdX7eqqSo3MauiRHwds%2FMhJMxfrMLNBCGMYSG9VdqUhCdIAL5ekdetFlnDk6VDsM8D7%2BisA%2FlG5ClqrHtQbEH2iT%2B4XVnif3X1ADJYdIZ1HTheI3vgdRArjntYyOYjIOk9glFO23yG9RQib%2B0CgzCbt%2Be%2FBjqkAZi%2F%2B3v9Hmdh2UqddIDp0mklbylmV94ieQF5tI%2B9zzXTgMqp7QmF7AxYYMAfN3XmefM%2BRcgg8GfLYUtF2o0rSxEJWSBcqWG%2Bi9EOTT72ffLjsKeO0URfgKFFN09sQBX2SmttC19d93gskJ6QhZXPr5WVBGUiuxcuS244FeGVG7ZUSrOVh%2BV8aKkNmmSn0XGVI3QkqV%2B0y5l%2Bsq%2Bu2cbIFlRosECQ&X-Amz-Signature=4e20a66dc65f1fc42f31c4164be81a8bb568ea1f1d1812adb275fec882c5cdd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOP65YSP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDsBch9bCMmEcAF0gOvaoi19Hlo%2BnVUjsmWuI2YECCB%2FQIhAKtGT%2BiUL%2FCaJMQNU3k1Xwt2ED0s95%2Bv3E6DESS%2BbysyKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbIZwEcsVRZS%2BCfcMq3AOV0UaGf990cuDL9GcQlVHkflLT0dZr5sFSDMBHBm6Qr5b7ouLO8SevM%2Boeg%2F3zeT2l%2BV%2BPjNDItfRFTaWVSqoB%2BvTtAbwAnXGy9B5CMkWE6BF59H%2F3GRRa1V7eyiArqaTsZCPzEvPgeAAdyFyKGE548fVfSKKyYEHWy9V3ZSVFY2r12YSoQQw49Fff9CWRsu6Fb1bCwMqR3dSRCY6MLRoaXzT8G7ZXvOkTIaRSlJ5RsmpCdIHqRmTInkuxXQou96QMp6WThWuWZX7AboG6lGAorhUu%2FKTKlIvXYsZRhyUOPuRTA9FEM8NgEjEGIi9GaJVAt8O4MFFvj9y1gu7OTwLIdduVvNQ2FFtodkbCWdotzLbf%2BbyoDsLkhCWYve6dTyO0oNnLSDPQU5F%2Fnv5KI0sSEFPXxagVNFIHpYvMKYl9jyCwO05GkCuOkk6nNQoAe4BG2vbX%2Bpt1DIBpmFXcJbLxF85B936zE6A42J5W03gdX7eqqSo3MauiRHwds%2FMhJMxfrMLNBCGMYSG9VdqUhCdIAL5ekdetFlnDk6VDsM8D7%2BisA%2FlG5ClqrHtQbEH2iT%2B4XVnif3X1ADJYdIZ1HTheI3vgdRArjntYyOYjIOk9glFO23yG9RQib%2B0CgzCbt%2Be%2FBjqkAZi%2F%2B3v9Hmdh2UqddIDp0mklbylmV94ieQF5tI%2B9zzXTgMqp7QmF7AxYYMAfN3XmefM%2BRcgg8GfLYUtF2o0rSxEJWSBcqWG%2Bi9EOTT72ffLjsKeO0URfgKFFN09sQBX2SmttC19d93gskJ6QhZXPr5WVBGUiuxcuS244FeGVG7ZUSrOVh%2BV8aKkNmmSn0XGVI3QkqV%2B0y5l%2Bsq%2Bu2cbIFlRosECQ&X-Amz-Signature=bfc8224f4168043f2ec0c39833fdd9bdd150b5a7f8f558002c70b12d905068cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOP65YSP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDsBch9bCMmEcAF0gOvaoi19Hlo%2BnVUjsmWuI2YECCB%2FQIhAKtGT%2BiUL%2FCaJMQNU3k1Xwt2ED0s95%2Bv3E6DESS%2BbysyKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbIZwEcsVRZS%2BCfcMq3AOV0UaGf990cuDL9GcQlVHkflLT0dZr5sFSDMBHBm6Qr5b7ouLO8SevM%2Boeg%2F3zeT2l%2BV%2BPjNDItfRFTaWVSqoB%2BvTtAbwAnXGy9B5CMkWE6BF59H%2F3GRRa1V7eyiArqaTsZCPzEvPgeAAdyFyKGE548fVfSKKyYEHWy9V3ZSVFY2r12YSoQQw49Fff9CWRsu6Fb1bCwMqR3dSRCY6MLRoaXzT8G7ZXvOkTIaRSlJ5RsmpCdIHqRmTInkuxXQou96QMp6WThWuWZX7AboG6lGAorhUu%2FKTKlIvXYsZRhyUOPuRTA9FEM8NgEjEGIi9GaJVAt8O4MFFvj9y1gu7OTwLIdduVvNQ2FFtodkbCWdotzLbf%2BbyoDsLkhCWYve6dTyO0oNnLSDPQU5F%2Fnv5KI0sSEFPXxagVNFIHpYvMKYl9jyCwO05GkCuOkk6nNQoAe4BG2vbX%2Bpt1DIBpmFXcJbLxF85B936zE6A42J5W03gdX7eqqSo3MauiRHwds%2FMhJMxfrMLNBCGMYSG9VdqUhCdIAL5ekdetFlnDk6VDsM8D7%2BisA%2FlG5ClqrHtQbEH2iT%2B4XVnif3X1ADJYdIZ1HTheI3vgdRArjntYyOYjIOk9glFO23yG9RQib%2B0CgzCbt%2Be%2FBjqkAZi%2F%2B3v9Hmdh2UqddIDp0mklbylmV94ieQF5tI%2B9zzXTgMqp7QmF7AxYYMAfN3XmefM%2BRcgg8GfLYUtF2o0rSxEJWSBcqWG%2Bi9EOTT72ffLjsKeO0URfgKFFN09sQBX2SmttC19d93gskJ6QhZXPr5WVBGUiuxcuS244FeGVG7ZUSrOVh%2BV8aKkNmmSn0XGVI3QkqV%2B0y5l%2Bsq%2Bu2cbIFlRosECQ&X-Amz-Signature=12400ec17c611d6e325940be541f314b3e62941d62d26b0b03e6d3dc09f40a30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOP65YSP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDsBch9bCMmEcAF0gOvaoi19Hlo%2BnVUjsmWuI2YECCB%2FQIhAKtGT%2BiUL%2FCaJMQNU3k1Xwt2ED0s95%2Bv3E6DESS%2BbysyKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbIZwEcsVRZS%2BCfcMq3AOV0UaGf990cuDL9GcQlVHkflLT0dZr5sFSDMBHBm6Qr5b7ouLO8SevM%2Boeg%2F3zeT2l%2BV%2BPjNDItfRFTaWVSqoB%2BvTtAbwAnXGy9B5CMkWE6BF59H%2F3GRRa1V7eyiArqaTsZCPzEvPgeAAdyFyKGE548fVfSKKyYEHWy9V3ZSVFY2r12YSoQQw49Fff9CWRsu6Fb1bCwMqR3dSRCY6MLRoaXzT8G7ZXvOkTIaRSlJ5RsmpCdIHqRmTInkuxXQou96QMp6WThWuWZX7AboG6lGAorhUu%2FKTKlIvXYsZRhyUOPuRTA9FEM8NgEjEGIi9GaJVAt8O4MFFvj9y1gu7OTwLIdduVvNQ2FFtodkbCWdotzLbf%2BbyoDsLkhCWYve6dTyO0oNnLSDPQU5F%2Fnv5KI0sSEFPXxagVNFIHpYvMKYl9jyCwO05GkCuOkk6nNQoAe4BG2vbX%2Bpt1DIBpmFXcJbLxF85B936zE6A42J5W03gdX7eqqSo3MauiRHwds%2FMhJMxfrMLNBCGMYSG9VdqUhCdIAL5ekdetFlnDk6VDsM8D7%2BisA%2FlG5ClqrHtQbEH2iT%2B4XVnif3X1ADJYdIZ1HTheI3vgdRArjntYyOYjIOk9glFO23yG9RQib%2B0CgzCbt%2Be%2FBjqkAZi%2F%2B3v9Hmdh2UqddIDp0mklbylmV94ieQF5tI%2B9zzXTgMqp7QmF7AxYYMAfN3XmefM%2BRcgg8GfLYUtF2o0rSxEJWSBcqWG%2Bi9EOTT72ffLjsKeO0URfgKFFN09sQBX2SmttC19d93gskJ6QhZXPr5WVBGUiuxcuS244FeGVG7ZUSrOVh%2BV8aKkNmmSn0XGVI3QkqV%2B0y5l%2Bsq%2Bu2cbIFlRosECQ&X-Amz-Signature=763b61f7e8ad30bccceba975a646a379ee3436756376da0793bf78e8b3a37981&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOP65YSP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDsBch9bCMmEcAF0gOvaoi19Hlo%2BnVUjsmWuI2YECCB%2FQIhAKtGT%2BiUL%2FCaJMQNU3k1Xwt2ED0s95%2Bv3E6DESS%2BbysyKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbIZwEcsVRZS%2BCfcMq3AOV0UaGf990cuDL9GcQlVHkflLT0dZr5sFSDMBHBm6Qr5b7ouLO8SevM%2Boeg%2F3zeT2l%2BV%2BPjNDItfRFTaWVSqoB%2BvTtAbwAnXGy9B5CMkWE6BF59H%2F3GRRa1V7eyiArqaTsZCPzEvPgeAAdyFyKGE548fVfSKKyYEHWy9V3ZSVFY2r12YSoQQw49Fff9CWRsu6Fb1bCwMqR3dSRCY6MLRoaXzT8G7ZXvOkTIaRSlJ5RsmpCdIHqRmTInkuxXQou96QMp6WThWuWZX7AboG6lGAorhUu%2FKTKlIvXYsZRhyUOPuRTA9FEM8NgEjEGIi9GaJVAt8O4MFFvj9y1gu7OTwLIdduVvNQ2FFtodkbCWdotzLbf%2BbyoDsLkhCWYve6dTyO0oNnLSDPQU5F%2Fnv5KI0sSEFPXxagVNFIHpYvMKYl9jyCwO05GkCuOkk6nNQoAe4BG2vbX%2Bpt1DIBpmFXcJbLxF85B936zE6A42J5W03gdX7eqqSo3MauiRHwds%2FMhJMxfrMLNBCGMYSG9VdqUhCdIAL5ekdetFlnDk6VDsM8D7%2BisA%2FlG5ClqrHtQbEH2iT%2B4XVnif3X1ADJYdIZ1HTheI3vgdRArjntYyOYjIOk9glFO23yG9RQib%2B0CgzCbt%2Be%2FBjqkAZi%2F%2B3v9Hmdh2UqddIDp0mklbylmV94ieQF5tI%2B9zzXTgMqp7QmF7AxYYMAfN3XmefM%2BRcgg8GfLYUtF2o0rSxEJWSBcqWG%2Bi9EOTT72ffLjsKeO0URfgKFFN09sQBX2SmttC19d93gskJ6QhZXPr5WVBGUiuxcuS244FeGVG7ZUSrOVh%2BV8aKkNmmSn0XGVI3QkqV%2B0y5l%2Bsq%2Bu2cbIFlRosECQ&X-Amz-Signature=72646416733374eb1a79b0e1bdae2a45faae73f016dd7d03735231301189ce17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

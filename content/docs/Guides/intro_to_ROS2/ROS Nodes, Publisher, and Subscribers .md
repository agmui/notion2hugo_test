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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTQCIT4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE6Rfh3BU5C9cKc%2Bq255lj%2BjoYY5IlckuYWhn8Jiw5xaAiEAwB1vPfo47rgKIFZAtHi%2BE0PCN05iW4qWo4CJGZn19MgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn2Qx1p%2FpofVLwBXircA2s2yENKIXRE7c6UvJ8LM91sQ9EuHxD56HMTv0LeqhR9qlKVpt1BqKzbqnn%2BVHL2QDC2XXnnubbh155rPYu07D0n5I7K3CtMJ8UCEEkPShiuWZddh5dDvMF9%2FlRmexx2RB1m%2Ff61WsoG6gNyS9jxOdeVgXx%2FJ2KNstG6NHTzgsWf5X8SIjmEyWEMQG%2F06IrQK8G9Exr5emBanN2F7j4ZMo6SJ1CaKpTdF3%2BpNCJgCB8gDKBq3Ga54JdIYfCHlCG6wgEt1nZu4D6pa1rQaOIsGcjfhhE6PKA4CKrKeCKgvs5k3MfWYUGoZvspHr%2BpXU0nyiYGyal9xEJBb3xlkKH3n46pYKYtDMaplawhUFWwD6kX%2FSzpYR7cqOZA%2FY5Ax6iF30SDIcwu3Mp2n1NhKpnZ1O5iZDQ6upEsmt9JTRFGyDXDTB908B884%2B4Ru%2BZyjvCZxLSexW32jclOlqHQakIZ5r8EI9%2FdhAbH1a%2BKluIB6869SJv3PLvj0ZGZJ04rA8PmPgXk0EIpu%2Fhb%2FBnYTWhTm24mWgc2qg528RyPdwVziBeSG0JpYuikAvb%2FcuKOeoWLvPp%2F8wlUJW%2FTyP4Y2FVzrXD6S4fzY0PIl1olb2Wv2yWELOR5Z%2BgBrUZitLS2MOax0r0GOqUBFn1NwEN3%2FjcfoFmf7uBoF2QbIDC5hRnysBp27gpnRCNdSPlpn7O2MhNaLIoEKwKHofPH62J1TSK%2Fr8tAq4FLEUVlBLiVfYgqxTCVguIed6lq%2BDyJwzPBrvZCKZV%2Fvqtde7txGhpuZK2uQ6daxCsir6AgsZPKcH7bgDujY%2BSl7rPF1UCMMLPovuB0fCUc2o45l6bvrxL0PP3NDNUHzQbbMAq3PKLN&X-Amz-Signature=fe5e664c89e9949b56b03f0a0a4d4ca5bacc7f4fcf6fe71bcc96bd70cc4202cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTQCIT4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE6Rfh3BU5C9cKc%2Bq255lj%2BjoYY5IlckuYWhn8Jiw5xaAiEAwB1vPfo47rgKIFZAtHi%2BE0PCN05iW4qWo4CJGZn19MgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn2Qx1p%2FpofVLwBXircA2s2yENKIXRE7c6UvJ8LM91sQ9EuHxD56HMTv0LeqhR9qlKVpt1BqKzbqnn%2BVHL2QDC2XXnnubbh155rPYu07D0n5I7K3CtMJ8UCEEkPShiuWZddh5dDvMF9%2FlRmexx2RB1m%2Ff61WsoG6gNyS9jxOdeVgXx%2FJ2KNstG6NHTzgsWf5X8SIjmEyWEMQG%2F06IrQK8G9Exr5emBanN2F7j4ZMo6SJ1CaKpTdF3%2BpNCJgCB8gDKBq3Ga54JdIYfCHlCG6wgEt1nZu4D6pa1rQaOIsGcjfhhE6PKA4CKrKeCKgvs5k3MfWYUGoZvspHr%2BpXU0nyiYGyal9xEJBb3xlkKH3n46pYKYtDMaplawhUFWwD6kX%2FSzpYR7cqOZA%2FY5Ax6iF30SDIcwu3Mp2n1NhKpnZ1O5iZDQ6upEsmt9JTRFGyDXDTB908B884%2B4Ru%2BZyjvCZxLSexW32jclOlqHQakIZ5r8EI9%2FdhAbH1a%2BKluIB6869SJv3PLvj0ZGZJ04rA8PmPgXk0EIpu%2Fhb%2FBnYTWhTm24mWgc2qg528RyPdwVziBeSG0JpYuikAvb%2FcuKOeoWLvPp%2F8wlUJW%2FTyP4Y2FVzrXD6S4fzY0PIl1olb2Wv2yWELOR5Z%2BgBrUZitLS2MOax0r0GOqUBFn1NwEN3%2FjcfoFmf7uBoF2QbIDC5hRnysBp27gpnRCNdSPlpn7O2MhNaLIoEKwKHofPH62J1TSK%2Fr8tAq4FLEUVlBLiVfYgqxTCVguIed6lq%2BDyJwzPBrvZCKZV%2Fvqtde7txGhpuZK2uQ6daxCsir6AgsZPKcH7bgDujY%2BSl7rPF1UCMMLPovuB0fCUc2o45l6bvrxL0PP3NDNUHzQbbMAq3PKLN&X-Amz-Signature=bf597de1076fd1dd4050f837cbf9e2d3773325592d0608289fc8326b9f63e8b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTQCIT4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE6Rfh3BU5C9cKc%2Bq255lj%2BjoYY5IlckuYWhn8Jiw5xaAiEAwB1vPfo47rgKIFZAtHi%2BE0PCN05iW4qWo4CJGZn19MgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn2Qx1p%2FpofVLwBXircA2s2yENKIXRE7c6UvJ8LM91sQ9EuHxD56HMTv0LeqhR9qlKVpt1BqKzbqnn%2BVHL2QDC2XXnnubbh155rPYu07D0n5I7K3CtMJ8UCEEkPShiuWZddh5dDvMF9%2FlRmexx2RB1m%2Ff61WsoG6gNyS9jxOdeVgXx%2FJ2KNstG6NHTzgsWf5X8SIjmEyWEMQG%2F06IrQK8G9Exr5emBanN2F7j4ZMo6SJ1CaKpTdF3%2BpNCJgCB8gDKBq3Ga54JdIYfCHlCG6wgEt1nZu4D6pa1rQaOIsGcjfhhE6PKA4CKrKeCKgvs5k3MfWYUGoZvspHr%2BpXU0nyiYGyal9xEJBb3xlkKH3n46pYKYtDMaplawhUFWwD6kX%2FSzpYR7cqOZA%2FY5Ax6iF30SDIcwu3Mp2n1NhKpnZ1O5iZDQ6upEsmt9JTRFGyDXDTB908B884%2B4Ru%2BZyjvCZxLSexW32jclOlqHQakIZ5r8EI9%2FdhAbH1a%2BKluIB6869SJv3PLvj0ZGZJ04rA8PmPgXk0EIpu%2Fhb%2FBnYTWhTm24mWgc2qg528RyPdwVziBeSG0JpYuikAvb%2FcuKOeoWLvPp%2F8wlUJW%2FTyP4Y2FVzrXD6S4fzY0PIl1olb2Wv2yWELOR5Z%2BgBrUZitLS2MOax0r0GOqUBFn1NwEN3%2FjcfoFmf7uBoF2QbIDC5hRnysBp27gpnRCNdSPlpn7O2MhNaLIoEKwKHofPH62J1TSK%2Fr8tAq4FLEUVlBLiVfYgqxTCVguIed6lq%2BDyJwzPBrvZCKZV%2Fvqtde7txGhpuZK2uQ6daxCsir6AgsZPKcH7bgDujY%2BSl7rPF1UCMMLPovuB0fCUc2o45l6bvrxL0PP3NDNUHzQbbMAq3PKLN&X-Amz-Signature=645b5e14a4da119b5f575c5b9a49a28da5a284e36baf917b4dd74f3c5e9ce79f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTQCIT4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE6Rfh3BU5C9cKc%2Bq255lj%2BjoYY5IlckuYWhn8Jiw5xaAiEAwB1vPfo47rgKIFZAtHi%2BE0PCN05iW4qWo4CJGZn19MgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn2Qx1p%2FpofVLwBXircA2s2yENKIXRE7c6UvJ8LM91sQ9EuHxD56HMTv0LeqhR9qlKVpt1BqKzbqnn%2BVHL2QDC2XXnnubbh155rPYu07D0n5I7K3CtMJ8UCEEkPShiuWZddh5dDvMF9%2FlRmexx2RB1m%2Ff61WsoG6gNyS9jxOdeVgXx%2FJ2KNstG6NHTzgsWf5X8SIjmEyWEMQG%2F06IrQK8G9Exr5emBanN2F7j4ZMo6SJ1CaKpTdF3%2BpNCJgCB8gDKBq3Ga54JdIYfCHlCG6wgEt1nZu4D6pa1rQaOIsGcjfhhE6PKA4CKrKeCKgvs5k3MfWYUGoZvspHr%2BpXU0nyiYGyal9xEJBb3xlkKH3n46pYKYtDMaplawhUFWwD6kX%2FSzpYR7cqOZA%2FY5Ax6iF30SDIcwu3Mp2n1NhKpnZ1O5iZDQ6upEsmt9JTRFGyDXDTB908B884%2B4Ru%2BZyjvCZxLSexW32jclOlqHQakIZ5r8EI9%2FdhAbH1a%2BKluIB6869SJv3PLvj0ZGZJ04rA8PmPgXk0EIpu%2Fhb%2FBnYTWhTm24mWgc2qg528RyPdwVziBeSG0JpYuikAvb%2FcuKOeoWLvPp%2F8wlUJW%2FTyP4Y2FVzrXD6S4fzY0PIl1olb2Wv2yWELOR5Z%2BgBrUZitLS2MOax0r0GOqUBFn1NwEN3%2FjcfoFmf7uBoF2QbIDC5hRnysBp27gpnRCNdSPlpn7O2MhNaLIoEKwKHofPH62J1TSK%2Fr8tAq4FLEUVlBLiVfYgqxTCVguIed6lq%2BDyJwzPBrvZCKZV%2Fvqtde7txGhpuZK2uQ6daxCsir6AgsZPKcH7bgDujY%2BSl7rPF1UCMMLPovuB0fCUc2o45l6bvrxL0PP3NDNUHzQbbMAq3PKLN&X-Amz-Signature=bdc4274556c06db197c93b7a3a25ba73a806a210925b2a1a48b463a948b02114&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTQCIT4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE6Rfh3BU5C9cKc%2Bq255lj%2BjoYY5IlckuYWhn8Jiw5xaAiEAwB1vPfo47rgKIFZAtHi%2BE0PCN05iW4qWo4CJGZn19MgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn2Qx1p%2FpofVLwBXircA2s2yENKIXRE7c6UvJ8LM91sQ9EuHxD56HMTv0LeqhR9qlKVpt1BqKzbqnn%2BVHL2QDC2XXnnubbh155rPYu07D0n5I7K3CtMJ8UCEEkPShiuWZddh5dDvMF9%2FlRmexx2RB1m%2Ff61WsoG6gNyS9jxOdeVgXx%2FJ2KNstG6NHTzgsWf5X8SIjmEyWEMQG%2F06IrQK8G9Exr5emBanN2F7j4ZMo6SJ1CaKpTdF3%2BpNCJgCB8gDKBq3Ga54JdIYfCHlCG6wgEt1nZu4D6pa1rQaOIsGcjfhhE6PKA4CKrKeCKgvs5k3MfWYUGoZvspHr%2BpXU0nyiYGyal9xEJBb3xlkKH3n46pYKYtDMaplawhUFWwD6kX%2FSzpYR7cqOZA%2FY5Ax6iF30SDIcwu3Mp2n1NhKpnZ1O5iZDQ6upEsmt9JTRFGyDXDTB908B884%2B4Ru%2BZyjvCZxLSexW32jclOlqHQakIZ5r8EI9%2FdhAbH1a%2BKluIB6869SJv3PLvj0ZGZJ04rA8PmPgXk0EIpu%2Fhb%2FBnYTWhTm24mWgc2qg528RyPdwVziBeSG0JpYuikAvb%2FcuKOeoWLvPp%2F8wlUJW%2FTyP4Y2FVzrXD6S4fzY0PIl1olb2Wv2yWELOR5Z%2BgBrUZitLS2MOax0r0GOqUBFn1NwEN3%2FjcfoFmf7uBoF2QbIDC5hRnysBp27gpnRCNdSPlpn7O2MhNaLIoEKwKHofPH62J1TSK%2Fr8tAq4FLEUVlBLiVfYgqxTCVguIed6lq%2BDyJwzPBrvZCKZV%2Fvqtde7txGhpuZK2uQ6daxCsir6AgsZPKcH7bgDujY%2BSl7rPF1UCMMLPovuB0fCUc2o45l6bvrxL0PP3NDNUHzQbbMAq3PKLN&X-Amz-Signature=1c887eb48bbb7485465327df27d336b1a08618858248bac2f72c7e3d8c74d658&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTQCIT4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE6Rfh3BU5C9cKc%2Bq255lj%2BjoYY5IlckuYWhn8Jiw5xaAiEAwB1vPfo47rgKIFZAtHi%2BE0PCN05iW4qWo4CJGZn19MgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn2Qx1p%2FpofVLwBXircA2s2yENKIXRE7c6UvJ8LM91sQ9EuHxD56HMTv0LeqhR9qlKVpt1BqKzbqnn%2BVHL2QDC2XXnnubbh155rPYu07D0n5I7K3CtMJ8UCEEkPShiuWZddh5dDvMF9%2FlRmexx2RB1m%2Ff61WsoG6gNyS9jxOdeVgXx%2FJ2KNstG6NHTzgsWf5X8SIjmEyWEMQG%2F06IrQK8G9Exr5emBanN2F7j4ZMo6SJ1CaKpTdF3%2BpNCJgCB8gDKBq3Ga54JdIYfCHlCG6wgEt1nZu4D6pa1rQaOIsGcjfhhE6PKA4CKrKeCKgvs5k3MfWYUGoZvspHr%2BpXU0nyiYGyal9xEJBb3xlkKH3n46pYKYtDMaplawhUFWwD6kX%2FSzpYR7cqOZA%2FY5Ax6iF30SDIcwu3Mp2n1NhKpnZ1O5iZDQ6upEsmt9JTRFGyDXDTB908B884%2B4Ru%2BZyjvCZxLSexW32jclOlqHQakIZ5r8EI9%2FdhAbH1a%2BKluIB6869SJv3PLvj0ZGZJ04rA8PmPgXk0EIpu%2Fhb%2FBnYTWhTm24mWgc2qg528RyPdwVziBeSG0JpYuikAvb%2FcuKOeoWLvPp%2F8wlUJW%2FTyP4Y2FVzrXD6S4fzY0PIl1olb2Wv2yWELOR5Z%2BgBrUZitLS2MOax0r0GOqUBFn1NwEN3%2FjcfoFmf7uBoF2QbIDC5hRnysBp27gpnRCNdSPlpn7O2MhNaLIoEKwKHofPH62J1TSK%2Fr8tAq4FLEUVlBLiVfYgqxTCVguIed6lq%2BDyJwzPBrvZCKZV%2Fvqtde7txGhpuZK2uQ6daxCsir6AgsZPKcH7bgDujY%2BSl7rPF1UCMMLPovuB0fCUc2o45l6bvrxL0PP3NDNUHzQbbMAq3PKLN&X-Amz-Signature=7d6b68cef53e0bc4fb40cfe3ddee3bccbb866d187e0435f6b50e02d0b7623493&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTQCIT4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE6Rfh3BU5C9cKc%2Bq255lj%2BjoYY5IlckuYWhn8Jiw5xaAiEAwB1vPfo47rgKIFZAtHi%2BE0PCN05iW4qWo4CJGZn19MgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn2Qx1p%2FpofVLwBXircA2s2yENKIXRE7c6UvJ8LM91sQ9EuHxD56HMTv0LeqhR9qlKVpt1BqKzbqnn%2BVHL2QDC2XXnnubbh155rPYu07D0n5I7K3CtMJ8UCEEkPShiuWZddh5dDvMF9%2FlRmexx2RB1m%2Ff61WsoG6gNyS9jxOdeVgXx%2FJ2KNstG6NHTzgsWf5X8SIjmEyWEMQG%2F06IrQK8G9Exr5emBanN2F7j4ZMo6SJ1CaKpTdF3%2BpNCJgCB8gDKBq3Ga54JdIYfCHlCG6wgEt1nZu4D6pa1rQaOIsGcjfhhE6PKA4CKrKeCKgvs5k3MfWYUGoZvspHr%2BpXU0nyiYGyal9xEJBb3xlkKH3n46pYKYtDMaplawhUFWwD6kX%2FSzpYR7cqOZA%2FY5Ax6iF30SDIcwu3Mp2n1NhKpnZ1O5iZDQ6upEsmt9JTRFGyDXDTB908B884%2B4Ru%2BZyjvCZxLSexW32jclOlqHQakIZ5r8EI9%2FdhAbH1a%2BKluIB6869SJv3PLvj0ZGZJ04rA8PmPgXk0EIpu%2Fhb%2FBnYTWhTm24mWgc2qg528RyPdwVziBeSG0JpYuikAvb%2FcuKOeoWLvPp%2F8wlUJW%2FTyP4Y2FVzrXD6S4fzY0PIl1olb2Wv2yWELOR5Z%2BgBrUZitLS2MOax0r0GOqUBFn1NwEN3%2FjcfoFmf7uBoF2QbIDC5hRnysBp27gpnRCNdSPlpn7O2MhNaLIoEKwKHofPH62J1TSK%2Fr8tAq4FLEUVlBLiVfYgqxTCVguIed6lq%2BDyJwzPBrvZCKZV%2Fvqtde7txGhpuZK2uQ6daxCsir6AgsZPKcH7bgDujY%2BSl7rPF1UCMMLPovuB0fCUc2o45l6bvrxL0PP3NDNUHzQbbMAq3PKLN&X-Amz-Signature=4e6a7ed2fefae65828be091dd2871f47b93ac8207046fda52294bea67855f051&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTQCIT4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE6Rfh3BU5C9cKc%2Bq255lj%2BjoYY5IlckuYWhn8Jiw5xaAiEAwB1vPfo47rgKIFZAtHi%2BE0PCN05iW4qWo4CJGZn19MgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn2Qx1p%2FpofVLwBXircA2s2yENKIXRE7c6UvJ8LM91sQ9EuHxD56HMTv0LeqhR9qlKVpt1BqKzbqnn%2BVHL2QDC2XXnnubbh155rPYu07D0n5I7K3CtMJ8UCEEkPShiuWZddh5dDvMF9%2FlRmexx2RB1m%2Ff61WsoG6gNyS9jxOdeVgXx%2FJ2KNstG6NHTzgsWf5X8SIjmEyWEMQG%2F06IrQK8G9Exr5emBanN2F7j4ZMo6SJ1CaKpTdF3%2BpNCJgCB8gDKBq3Ga54JdIYfCHlCG6wgEt1nZu4D6pa1rQaOIsGcjfhhE6PKA4CKrKeCKgvs5k3MfWYUGoZvspHr%2BpXU0nyiYGyal9xEJBb3xlkKH3n46pYKYtDMaplawhUFWwD6kX%2FSzpYR7cqOZA%2FY5Ax6iF30SDIcwu3Mp2n1NhKpnZ1O5iZDQ6upEsmt9JTRFGyDXDTB908B884%2B4Ru%2BZyjvCZxLSexW32jclOlqHQakIZ5r8EI9%2FdhAbH1a%2BKluIB6869SJv3PLvj0ZGZJ04rA8PmPgXk0EIpu%2Fhb%2FBnYTWhTm24mWgc2qg528RyPdwVziBeSG0JpYuikAvb%2FcuKOeoWLvPp%2F8wlUJW%2FTyP4Y2FVzrXD6S4fzY0PIl1olb2Wv2yWELOR5Z%2BgBrUZitLS2MOax0r0GOqUBFn1NwEN3%2FjcfoFmf7uBoF2QbIDC5hRnysBp27gpnRCNdSPlpn7O2MhNaLIoEKwKHofPH62J1TSK%2Fr8tAq4FLEUVlBLiVfYgqxTCVguIed6lq%2BDyJwzPBrvZCKZV%2Fvqtde7txGhpuZK2uQ6daxCsir6AgsZPKcH7bgDujY%2BSl7rPF1UCMMLPovuB0fCUc2o45l6bvrxL0PP3NDNUHzQbbMAq3PKLN&X-Amz-Signature=dbb9432be498509184df38fcb67bae36c891fa88807d7569703e57f40e13d8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

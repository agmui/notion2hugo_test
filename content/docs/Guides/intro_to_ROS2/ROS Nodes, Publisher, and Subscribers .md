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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXXACPB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD43MYtmEBVDd85fgMaE97HDC%2B7Kn%2BBN0TQJFi37nAuwgIgSJ0yvddtDLhRtSNeN0%2Bsidghohheq%2Boq7QBZvJuD54EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl4RcEt151%2FaA09HCrcA7wEOXyST5oF4M4z3Dja9vKt3Opi28IXTUJNcl3Ji%2FPDioMcrKbzlTu6CC9dtR02M0uKxGsjrpe60u2LfwUMPkBhQeqzyBIxFZeBeoFUoeyNqLI3kExbUD%2B5M4589cVq9jhkJxiws8Cty5BUni0L4IHc80Ivb6YW3I3d%2FeyUmI%2FoLHoKgqeP%2BH1gy88x8ZenPshPCSh4BLQUGKqST%2FS8%2FuHfJfMMH1J5BuZKrd4fqNQZfvj1VKS0Jg4Ea9CGM4Epo%2BxpzBhiCnR%2BYCZ789%2BT5%2F005RJz1PITuOGpHW6rpx7YhQ2TF%2BwCodsMNJ0AordtiZ2ItuZM1jUuqpXgFyaQibmnTJ0cWUbSbg2Ru94PHrFja3dduMBLpJ1Sa%2BfBCO7kMdWzxSJhOxna9o%2FITKHKKsXFeIO3X%2F3%2F7xuIS4%2BJUj73ifwRfElVH68CMONrxNTdTIugbnXlCTC1Fls9KSsa7dV05rL9JGiFcKwEQqxkiXFe9P9Rq%2BVRvZnAe8EdyRqxrg4vjRpRbcKXlxH0oGjTx9At9PDCfpdgwG%2ByWpnID8152TRilJlzTVFAyGYcAR6v2PVb0lom68VvnmFwTL672aI%2BKi%2FZBkOy0eoCGuoitPlzLbOneAknqEDBd9QvMPf7xL4GOqUBB6S3X6rst7DKN3agbzBIdu7biU22PyPDs6I%2BHO0KYV49%2BEAhLTL6%2FLU1M7XszDNeVz5e%2Fgo7x87xpQaBD30qyAu9NPRnoRv2MDXo1%2BNImVz3vbi85ybVaWLKKI493Vr11Q6E9%2BlSiinALCWK%2BF6SLZ3juXSVJYcg8i5znHAW2dXQ9r1%2Fp7KW0ExttBwVXPA5A5EvRsU%2BOaaFB%2F0cnL9ZmQODo5nA&X-Amz-Signature=f22ce547052f72bbd41ff5870f6072f0f57a93acf4b6656ef9aff69b295068b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXXACPB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD43MYtmEBVDd85fgMaE97HDC%2B7Kn%2BBN0TQJFi37nAuwgIgSJ0yvddtDLhRtSNeN0%2Bsidghohheq%2Boq7QBZvJuD54EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl4RcEt151%2FaA09HCrcA7wEOXyST5oF4M4z3Dja9vKt3Opi28IXTUJNcl3Ji%2FPDioMcrKbzlTu6CC9dtR02M0uKxGsjrpe60u2LfwUMPkBhQeqzyBIxFZeBeoFUoeyNqLI3kExbUD%2B5M4589cVq9jhkJxiws8Cty5BUni0L4IHc80Ivb6YW3I3d%2FeyUmI%2FoLHoKgqeP%2BH1gy88x8ZenPshPCSh4BLQUGKqST%2FS8%2FuHfJfMMH1J5BuZKrd4fqNQZfvj1VKS0Jg4Ea9CGM4Epo%2BxpzBhiCnR%2BYCZ789%2BT5%2F005RJz1PITuOGpHW6rpx7YhQ2TF%2BwCodsMNJ0AordtiZ2ItuZM1jUuqpXgFyaQibmnTJ0cWUbSbg2Ru94PHrFja3dduMBLpJ1Sa%2BfBCO7kMdWzxSJhOxna9o%2FITKHKKsXFeIO3X%2F3%2F7xuIS4%2BJUj73ifwRfElVH68CMONrxNTdTIugbnXlCTC1Fls9KSsa7dV05rL9JGiFcKwEQqxkiXFe9P9Rq%2BVRvZnAe8EdyRqxrg4vjRpRbcKXlxH0oGjTx9At9PDCfpdgwG%2ByWpnID8152TRilJlzTVFAyGYcAR6v2PVb0lom68VvnmFwTL672aI%2BKi%2FZBkOy0eoCGuoitPlzLbOneAknqEDBd9QvMPf7xL4GOqUBB6S3X6rst7DKN3agbzBIdu7biU22PyPDs6I%2BHO0KYV49%2BEAhLTL6%2FLU1M7XszDNeVz5e%2Fgo7x87xpQaBD30qyAu9NPRnoRv2MDXo1%2BNImVz3vbi85ybVaWLKKI493Vr11Q6E9%2BlSiinALCWK%2BF6SLZ3juXSVJYcg8i5znHAW2dXQ9r1%2Fp7KW0ExttBwVXPA5A5EvRsU%2BOaaFB%2F0cnL9ZmQODo5nA&X-Amz-Signature=c7457fefc4fd309d2bca35ee9aba327596e7e0714585ffa0de190d98449186d9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXXACPB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD43MYtmEBVDd85fgMaE97HDC%2B7Kn%2BBN0TQJFi37nAuwgIgSJ0yvddtDLhRtSNeN0%2Bsidghohheq%2Boq7QBZvJuD54EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl4RcEt151%2FaA09HCrcA7wEOXyST5oF4M4z3Dja9vKt3Opi28IXTUJNcl3Ji%2FPDioMcrKbzlTu6CC9dtR02M0uKxGsjrpe60u2LfwUMPkBhQeqzyBIxFZeBeoFUoeyNqLI3kExbUD%2B5M4589cVq9jhkJxiws8Cty5BUni0L4IHc80Ivb6YW3I3d%2FeyUmI%2FoLHoKgqeP%2BH1gy88x8ZenPshPCSh4BLQUGKqST%2FS8%2FuHfJfMMH1J5BuZKrd4fqNQZfvj1VKS0Jg4Ea9CGM4Epo%2BxpzBhiCnR%2BYCZ789%2BT5%2F005RJz1PITuOGpHW6rpx7YhQ2TF%2BwCodsMNJ0AordtiZ2ItuZM1jUuqpXgFyaQibmnTJ0cWUbSbg2Ru94PHrFja3dduMBLpJ1Sa%2BfBCO7kMdWzxSJhOxna9o%2FITKHKKsXFeIO3X%2F3%2F7xuIS4%2BJUj73ifwRfElVH68CMONrxNTdTIugbnXlCTC1Fls9KSsa7dV05rL9JGiFcKwEQqxkiXFe9P9Rq%2BVRvZnAe8EdyRqxrg4vjRpRbcKXlxH0oGjTx9At9PDCfpdgwG%2ByWpnID8152TRilJlzTVFAyGYcAR6v2PVb0lom68VvnmFwTL672aI%2BKi%2FZBkOy0eoCGuoitPlzLbOneAknqEDBd9QvMPf7xL4GOqUBB6S3X6rst7DKN3agbzBIdu7biU22PyPDs6I%2BHO0KYV49%2BEAhLTL6%2FLU1M7XszDNeVz5e%2Fgo7x87xpQaBD30qyAu9NPRnoRv2MDXo1%2BNImVz3vbi85ybVaWLKKI493Vr11Q6E9%2BlSiinALCWK%2BF6SLZ3juXSVJYcg8i5znHAW2dXQ9r1%2Fp7KW0ExttBwVXPA5A5EvRsU%2BOaaFB%2F0cnL9ZmQODo5nA&X-Amz-Signature=4473ecd095f845e774e736ae6bb9002bfbb07f20ae749f5495f75cd37971f402&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXXACPB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD43MYtmEBVDd85fgMaE97HDC%2B7Kn%2BBN0TQJFi37nAuwgIgSJ0yvddtDLhRtSNeN0%2Bsidghohheq%2Boq7QBZvJuD54EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl4RcEt151%2FaA09HCrcA7wEOXyST5oF4M4z3Dja9vKt3Opi28IXTUJNcl3Ji%2FPDioMcrKbzlTu6CC9dtR02M0uKxGsjrpe60u2LfwUMPkBhQeqzyBIxFZeBeoFUoeyNqLI3kExbUD%2B5M4589cVq9jhkJxiws8Cty5BUni0L4IHc80Ivb6YW3I3d%2FeyUmI%2FoLHoKgqeP%2BH1gy88x8ZenPshPCSh4BLQUGKqST%2FS8%2FuHfJfMMH1J5BuZKrd4fqNQZfvj1VKS0Jg4Ea9CGM4Epo%2BxpzBhiCnR%2BYCZ789%2BT5%2F005RJz1PITuOGpHW6rpx7YhQ2TF%2BwCodsMNJ0AordtiZ2ItuZM1jUuqpXgFyaQibmnTJ0cWUbSbg2Ru94PHrFja3dduMBLpJ1Sa%2BfBCO7kMdWzxSJhOxna9o%2FITKHKKsXFeIO3X%2F3%2F7xuIS4%2BJUj73ifwRfElVH68CMONrxNTdTIugbnXlCTC1Fls9KSsa7dV05rL9JGiFcKwEQqxkiXFe9P9Rq%2BVRvZnAe8EdyRqxrg4vjRpRbcKXlxH0oGjTx9At9PDCfpdgwG%2ByWpnID8152TRilJlzTVFAyGYcAR6v2PVb0lom68VvnmFwTL672aI%2BKi%2FZBkOy0eoCGuoitPlzLbOneAknqEDBd9QvMPf7xL4GOqUBB6S3X6rst7DKN3agbzBIdu7biU22PyPDs6I%2BHO0KYV49%2BEAhLTL6%2FLU1M7XszDNeVz5e%2Fgo7x87xpQaBD30qyAu9NPRnoRv2MDXo1%2BNImVz3vbi85ybVaWLKKI493Vr11Q6E9%2BlSiinALCWK%2BF6SLZ3juXSVJYcg8i5znHAW2dXQ9r1%2Fp7KW0ExttBwVXPA5A5EvRsU%2BOaaFB%2F0cnL9ZmQODo5nA&X-Amz-Signature=a23bda8bd993d8d34895f91fdb5895f70273afe1d127d251cd200b5d4b757588&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXXACPB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD43MYtmEBVDd85fgMaE97HDC%2B7Kn%2BBN0TQJFi37nAuwgIgSJ0yvddtDLhRtSNeN0%2Bsidghohheq%2Boq7QBZvJuD54EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl4RcEt151%2FaA09HCrcA7wEOXyST5oF4M4z3Dja9vKt3Opi28IXTUJNcl3Ji%2FPDioMcrKbzlTu6CC9dtR02M0uKxGsjrpe60u2LfwUMPkBhQeqzyBIxFZeBeoFUoeyNqLI3kExbUD%2B5M4589cVq9jhkJxiws8Cty5BUni0L4IHc80Ivb6YW3I3d%2FeyUmI%2FoLHoKgqeP%2BH1gy88x8ZenPshPCSh4BLQUGKqST%2FS8%2FuHfJfMMH1J5BuZKrd4fqNQZfvj1VKS0Jg4Ea9CGM4Epo%2BxpzBhiCnR%2BYCZ789%2BT5%2F005RJz1PITuOGpHW6rpx7YhQ2TF%2BwCodsMNJ0AordtiZ2ItuZM1jUuqpXgFyaQibmnTJ0cWUbSbg2Ru94PHrFja3dduMBLpJ1Sa%2BfBCO7kMdWzxSJhOxna9o%2FITKHKKsXFeIO3X%2F3%2F7xuIS4%2BJUj73ifwRfElVH68CMONrxNTdTIugbnXlCTC1Fls9KSsa7dV05rL9JGiFcKwEQqxkiXFe9P9Rq%2BVRvZnAe8EdyRqxrg4vjRpRbcKXlxH0oGjTx9At9PDCfpdgwG%2ByWpnID8152TRilJlzTVFAyGYcAR6v2PVb0lom68VvnmFwTL672aI%2BKi%2FZBkOy0eoCGuoitPlzLbOneAknqEDBd9QvMPf7xL4GOqUBB6S3X6rst7DKN3agbzBIdu7biU22PyPDs6I%2BHO0KYV49%2BEAhLTL6%2FLU1M7XszDNeVz5e%2Fgo7x87xpQaBD30qyAu9NPRnoRv2MDXo1%2BNImVz3vbi85ybVaWLKKI493Vr11Q6E9%2BlSiinALCWK%2BF6SLZ3juXSVJYcg8i5znHAW2dXQ9r1%2Fp7KW0ExttBwVXPA5A5EvRsU%2BOaaFB%2F0cnL9ZmQODo5nA&X-Amz-Signature=cc77ca9c9b1bcf30a864c6db092de030e445d73ec5c351a81dba41ec16c87cca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXXACPB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD43MYtmEBVDd85fgMaE97HDC%2B7Kn%2BBN0TQJFi37nAuwgIgSJ0yvddtDLhRtSNeN0%2Bsidghohheq%2Boq7QBZvJuD54EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl4RcEt151%2FaA09HCrcA7wEOXyST5oF4M4z3Dja9vKt3Opi28IXTUJNcl3Ji%2FPDioMcrKbzlTu6CC9dtR02M0uKxGsjrpe60u2LfwUMPkBhQeqzyBIxFZeBeoFUoeyNqLI3kExbUD%2B5M4589cVq9jhkJxiws8Cty5BUni0L4IHc80Ivb6YW3I3d%2FeyUmI%2FoLHoKgqeP%2BH1gy88x8ZenPshPCSh4BLQUGKqST%2FS8%2FuHfJfMMH1J5BuZKrd4fqNQZfvj1VKS0Jg4Ea9CGM4Epo%2BxpzBhiCnR%2BYCZ789%2BT5%2F005RJz1PITuOGpHW6rpx7YhQ2TF%2BwCodsMNJ0AordtiZ2ItuZM1jUuqpXgFyaQibmnTJ0cWUbSbg2Ru94PHrFja3dduMBLpJ1Sa%2BfBCO7kMdWzxSJhOxna9o%2FITKHKKsXFeIO3X%2F3%2F7xuIS4%2BJUj73ifwRfElVH68CMONrxNTdTIugbnXlCTC1Fls9KSsa7dV05rL9JGiFcKwEQqxkiXFe9P9Rq%2BVRvZnAe8EdyRqxrg4vjRpRbcKXlxH0oGjTx9At9PDCfpdgwG%2ByWpnID8152TRilJlzTVFAyGYcAR6v2PVb0lom68VvnmFwTL672aI%2BKi%2FZBkOy0eoCGuoitPlzLbOneAknqEDBd9QvMPf7xL4GOqUBB6S3X6rst7DKN3agbzBIdu7biU22PyPDs6I%2BHO0KYV49%2BEAhLTL6%2FLU1M7XszDNeVz5e%2Fgo7x87xpQaBD30qyAu9NPRnoRv2MDXo1%2BNImVz3vbi85ybVaWLKKI493Vr11Q6E9%2BlSiinALCWK%2BF6SLZ3juXSVJYcg8i5znHAW2dXQ9r1%2Fp7KW0ExttBwVXPA5A5EvRsU%2BOaaFB%2F0cnL9ZmQODo5nA&X-Amz-Signature=27e4728dd6c24b7f8656a78834c05bc09c062c3c7105297474c7ee01527d2e45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXXACPB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD43MYtmEBVDd85fgMaE97HDC%2B7Kn%2BBN0TQJFi37nAuwgIgSJ0yvddtDLhRtSNeN0%2Bsidghohheq%2Boq7QBZvJuD54EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl4RcEt151%2FaA09HCrcA7wEOXyST5oF4M4z3Dja9vKt3Opi28IXTUJNcl3Ji%2FPDioMcrKbzlTu6CC9dtR02M0uKxGsjrpe60u2LfwUMPkBhQeqzyBIxFZeBeoFUoeyNqLI3kExbUD%2B5M4589cVq9jhkJxiws8Cty5BUni0L4IHc80Ivb6YW3I3d%2FeyUmI%2FoLHoKgqeP%2BH1gy88x8ZenPshPCSh4BLQUGKqST%2FS8%2FuHfJfMMH1J5BuZKrd4fqNQZfvj1VKS0Jg4Ea9CGM4Epo%2BxpzBhiCnR%2BYCZ789%2BT5%2F005RJz1PITuOGpHW6rpx7YhQ2TF%2BwCodsMNJ0AordtiZ2ItuZM1jUuqpXgFyaQibmnTJ0cWUbSbg2Ru94PHrFja3dduMBLpJ1Sa%2BfBCO7kMdWzxSJhOxna9o%2FITKHKKsXFeIO3X%2F3%2F7xuIS4%2BJUj73ifwRfElVH68CMONrxNTdTIugbnXlCTC1Fls9KSsa7dV05rL9JGiFcKwEQqxkiXFe9P9Rq%2BVRvZnAe8EdyRqxrg4vjRpRbcKXlxH0oGjTx9At9PDCfpdgwG%2ByWpnID8152TRilJlzTVFAyGYcAR6v2PVb0lom68VvnmFwTL672aI%2BKi%2FZBkOy0eoCGuoitPlzLbOneAknqEDBd9QvMPf7xL4GOqUBB6S3X6rst7DKN3agbzBIdu7biU22PyPDs6I%2BHO0KYV49%2BEAhLTL6%2FLU1M7XszDNeVz5e%2Fgo7x87xpQaBD30qyAu9NPRnoRv2MDXo1%2BNImVz3vbi85ybVaWLKKI493Vr11Q6E9%2BlSiinALCWK%2BF6SLZ3juXSVJYcg8i5znHAW2dXQ9r1%2Fp7KW0ExttBwVXPA5A5EvRsU%2BOaaFB%2F0cnL9ZmQODo5nA&X-Amz-Signature=06960957ce3fff4e20d1a9b772d5b047fd0511c50798860e792cec158a9cea50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXXACPB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD43MYtmEBVDd85fgMaE97HDC%2B7Kn%2BBN0TQJFi37nAuwgIgSJ0yvddtDLhRtSNeN0%2Bsidghohheq%2Boq7QBZvJuD54EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl4RcEt151%2FaA09HCrcA7wEOXyST5oF4M4z3Dja9vKt3Opi28IXTUJNcl3Ji%2FPDioMcrKbzlTu6CC9dtR02M0uKxGsjrpe60u2LfwUMPkBhQeqzyBIxFZeBeoFUoeyNqLI3kExbUD%2B5M4589cVq9jhkJxiws8Cty5BUni0L4IHc80Ivb6YW3I3d%2FeyUmI%2FoLHoKgqeP%2BH1gy88x8ZenPshPCSh4BLQUGKqST%2FS8%2FuHfJfMMH1J5BuZKrd4fqNQZfvj1VKS0Jg4Ea9CGM4Epo%2BxpzBhiCnR%2BYCZ789%2BT5%2F005RJz1PITuOGpHW6rpx7YhQ2TF%2BwCodsMNJ0AordtiZ2ItuZM1jUuqpXgFyaQibmnTJ0cWUbSbg2Ru94PHrFja3dduMBLpJ1Sa%2BfBCO7kMdWzxSJhOxna9o%2FITKHKKsXFeIO3X%2F3%2F7xuIS4%2BJUj73ifwRfElVH68CMONrxNTdTIugbnXlCTC1Fls9KSsa7dV05rL9JGiFcKwEQqxkiXFe9P9Rq%2BVRvZnAe8EdyRqxrg4vjRpRbcKXlxH0oGjTx9At9PDCfpdgwG%2ByWpnID8152TRilJlzTVFAyGYcAR6v2PVb0lom68VvnmFwTL672aI%2BKi%2FZBkOy0eoCGuoitPlzLbOneAknqEDBd9QvMPf7xL4GOqUBB6S3X6rst7DKN3agbzBIdu7biU22PyPDs6I%2BHO0KYV49%2BEAhLTL6%2FLU1M7XszDNeVz5e%2Fgo7x87xpQaBD30qyAu9NPRnoRv2MDXo1%2BNImVz3vbi85ybVaWLKKI493Vr11Q6E9%2BlSiinALCWK%2BF6SLZ3juXSVJYcg8i5znHAW2dXQ9r1%2Fp7KW0ExttBwVXPA5A5EvRsU%2BOaaFB%2F0cnL9ZmQODo5nA&X-Amz-Signature=dff029d816a778398316a8776b342e15f649d9671dac75eaea2d2d2d7d7120bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEEOZ6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWLQz6mWzO5OHN357CeAud%2FLVOUNa47S62w9mVNNh%2BwIgAQwkZdzyB9FaY%2BJa9jfiVdJOWKJ7%2Btoy8AG98Uf5amUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHJMH4KIbQ39BC5%2BUircAzm6q5bRzQFlOk0q1DSt4JB6DtDWQR8JR90Col0QIWDrCURElvFMEXM0fnpj%2FAESjqCoooskgpl0TJiiQjyTeeze6jPWp9hB8gm9T0BtqUOB8DeXsqHgzTE%2FKso%2Ful5fxszf9dXqYJmCBmku29dYVT5PD9UIwTdnF5sfQ6GFNrDXgC%2BtDuAljpIrUA6q67U38LbPTHEjh3KYoZxKKhVkHZb%2FfzFFc6eAJA28Q1jykqbxqiZpDDt%2BFuKO9FxCraWjE0G8DXu7%2BgcshQpTLCReh5xJTDqpKAcS%2BR92FRdj9Rgjq0rtfOXJmME7xpZ8vpuXr7wEDAZPWeJJI0HfKTe54tCdjkyxeXfhzgrkNBX49my2sle0RIxVucEefA3QrNtM96HgQWpI66jQ0CydU%2BBghmVPz2ppyFG4S6199RshKW6EbT2b26oSVWpummY4JntHEpogi2y5xRdRXuU8y6iIOmQQn9LNnCvgAbMGgO1EzWmsRLzDYb4nMREEE%2BT03ah5OvfzTbzOBzoraVCL3WbQBso8asGVohHEnROoVLNVRrCRn8KkU37g7DTu8pzuw8cHdPqaSuyDVVB1c79eFqjdcauu9LS1BNERT6fKYjqQNBkybfv5RzFLhcCe15ynMN3mqMEGOqUBoGG68RUOp3A7fiyPaelRNuy3w4ka6%2F6kCcQs%2FxpniJh%2FwqxA1pzCq7P4zJpqOonoKhLkSSDew%2BFDu2UENOoP1%2FJRu7rRepjjeMKV%2FdjJ6g05YW7wpseO5M3ABa%2FfL%2Bgol9NzX3670dfI5WO2vD8xfNeCYT%2BKKKOAYhfUrY6af8MK98q53BmvnTesXc%2BUZXGtxaG93TgUMxpV%2Bk3RokB%2F8Cyb7o5m&X-Amz-Signature=ad31c68de5a61270619698d0b5b65382b47839515903ef224616ba28ef13944f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEEOZ6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWLQz6mWzO5OHN357CeAud%2FLVOUNa47S62w9mVNNh%2BwIgAQwkZdzyB9FaY%2BJa9jfiVdJOWKJ7%2Btoy8AG98Uf5amUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHJMH4KIbQ39BC5%2BUircAzm6q5bRzQFlOk0q1DSt4JB6DtDWQR8JR90Col0QIWDrCURElvFMEXM0fnpj%2FAESjqCoooskgpl0TJiiQjyTeeze6jPWp9hB8gm9T0BtqUOB8DeXsqHgzTE%2FKso%2Ful5fxszf9dXqYJmCBmku29dYVT5PD9UIwTdnF5sfQ6GFNrDXgC%2BtDuAljpIrUA6q67U38LbPTHEjh3KYoZxKKhVkHZb%2FfzFFc6eAJA28Q1jykqbxqiZpDDt%2BFuKO9FxCraWjE0G8DXu7%2BgcshQpTLCReh5xJTDqpKAcS%2BR92FRdj9Rgjq0rtfOXJmME7xpZ8vpuXr7wEDAZPWeJJI0HfKTe54tCdjkyxeXfhzgrkNBX49my2sle0RIxVucEefA3QrNtM96HgQWpI66jQ0CydU%2BBghmVPz2ppyFG4S6199RshKW6EbT2b26oSVWpummY4JntHEpogi2y5xRdRXuU8y6iIOmQQn9LNnCvgAbMGgO1EzWmsRLzDYb4nMREEE%2BT03ah5OvfzTbzOBzoraVCL3WbQBso8asGVohHEnROoVLNVRrCRn8KkU37g7DTu8pzuw8cHdPqaSuyDVVB1c79eFqjdcauu9LS1BNERT6fKYjqQNBkybfv5RzFLhcCe15ynMN3mqMEGOqUBoGG68RUOp3A7fiyPaelRNuy3w4ka6%2F6kCcQs%2FxpniJh%2FwqxA1pzCq7P4zJpqOonoKhLkSSDew%2BFDu2UENOoP1%2FJRu7rRepjjeMKV%2FdjJ6g05YW7wpseO5M3ABa%2FfL%2Bgol9NzX3670dfI5WO2vD8xfNeCYT%2BKKKOAYhfUrY6af8MK98q53BmvnTesXc%2BUZXGtxaG93TgUMxpV%2Bk3RokB%2F8Cyb7o5m&X-Amz-Signature=3a2c3d0be5d9f8ba4bce3e630660f001cff7459954bf1e334ecb6af3e3fd2e06&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEEOZ6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWLQz6mWzO5OHN357CeAud%2FLVOUNa47S62w9mVNNh%2BwIgAQwkZdzyB9FaY%2BJa9jfiVdJOWKJ7%2Btoy8AG98Uf5amUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHJMH4KIbQ39BC5%2BUircAzm6q5bRzQFlOk0q1DSt4JB6DtDWQR8JR90Col0QIWDrCURElvFMEXM0fnpj%2FAESjqCoooskgpl0TJiiQjyTeeze6jPWp9hB8gm9T0BtqUOB8DeXsqHgzTE%2FKso%2Ful5fxszf9dXqYJmCBmku29dYVT5PD9UIwTdnF5sfQ6GFNrDXgC%2BtDuAljpIrUA6q67U38LbPTHEjh3KYoZxKKhVkHZb%2FfzFFc6eAJA28Q1jykqbxqiZpDDt%2BFuKO9FxCraWjE0G8DXu7%2BgcshQpTLCReh5xJTDqpKAcS%2BR92FRdj9Rgjq0rtfOXJmME7xpZ8vpuXr7wEDAZPWeJJI0HfKTe54tCdjkyxeXfhzgrkNBX49my2sle0RIxVucEefA3QrNtM96HgQWpI66jQ0CydU%2BBghmVPz2ppyFG4S6199RshKW6EbT2b26oSVWpummY4JntHEpogi2y5xRdRXuU8y6iIOmQQn9LNnCvgAbMGgO1EzWmsRLzDYb4nMREEE%2BT03ah5OvfzTbzOBzoraVCL3WbQBso8asGVohHEnROoVLNVRrCRn8KkU37g7DTu8pzuw8cHdPqaSuyDVVB1c79eFqjdcauu9LS1BNERT6fKYjqQNBkybfv5RzFLhcCe15ynMN3mqMEGOqUBoGG68RUOp3A7fiyPaelRNuy3w4ka6%2F6kCcQs%2FxpniJh%2FwqxA1pzCq7P4zJpqOonoKhLkSSDew%2BFDu2UENOoP1%2FJRu7rRepjjeMKV%2FdjJ6g05YW7wpseO5M3ABa%2FfL%2Bgol9NzX3670dfI5WO2vD8xfNeCYT%2BKKKOAYhfUrY6af8MK98q53BmvnTesXc%2BUZXGtxaG93TgUMxpV%2Bk3RokB%2F8Cyb7o5m&X-Amz-Signature=ce27388789d67cb5bfcc40981ca6ed20b6a6ae2f57090e9668961dc0eb86cc5e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEEOZ6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWLQz6mWzO5OHN357CeAud%2FLVOUNa47S62w9mVNNh%2BwIgAQwkZdzyB9FaY%2BJa9jfiVdJOWKJ7%2Btoy8AG98Uf5amUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHJMH4KIbQ39BC5%2BUircAzm6q5bRzQFlOk0q1DSt4JB6DtDWQR8JR90Col0QIWDrCURElvFMEXM0fnpj%2FAESjqCoooskgpl0TJiiQjyTeeze6jPWp9hB8gm9T0BtqUOB8DeXsqHgzTE%2FKso%2Ful5fxszf9dXqYJmCBmku29dYVT5PD9UIwTdnF5sfQ6GFNrDXgC%2BtDuAljpIrUA6q67U38LbPTHEjh3KYoZxKKhVkHZb%2FfzFFc6eAJA28Q1jykqbxqiZpDDt%2BFuKO9FxCraWjE0G8DXu7%2BgcshQpTLCReh5xJTDqpKAcS%2BR92FRdj9Rgjq0rtfOXJmME7xpZ8vpuXr7wEDAZPWeJJI0HfKTe54tCdjkyxeXfhzgrkNBX49my2sle0RIxVucEefA3QrNtM96HgQWpI66jQ0CydU%2BBghmVPz2ppyFG4S6199RshKW6EbT2b26oSVWpummY4JntHEpogi2y5xRdRXuU8y6iIOmQQn9LNnCvgAbMGgO1EzWmsRLzDYb4nMREEE%2BT03ah5OvfzTbzOBzoraVCL3WbQBso8asGVohHEnROoVLNVRrCRn8KkU37g7DTu8pzuw8cHdPqaSuyDVVB1c79eFqjdcauu9LS1BNERT6fKYjqQNBkybfv5RzFLhcCe15ynMN3mqMEGOqUBoGG68RUOp3A7fiyPaelRNuy3w4ka6%2F6kCcQs%2FxpniJh%2FwqxA1pzCq7P4zJpqOonoKhLkSSDew%2BFDu2UENOoP1%2FJRu7rRepjjeMKV%2FdjJ6g05YW7wpseO5M3ABa%2FfL%2Bgol9NzX3670dfI5WO2vD8xfNeCYT%2BKKKOAYhfUrY6af8MK98q53BmvnTesXc%2BUZXGtxaG93TgUMxpV%2Bk3RokB%2F8Cyb7o5m&X-Amz-Signature=922c8159560b1b800d2f607663ca4ab385a8fd75ec4840c0092476c064b938f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEEOZ6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWLQz6mWzO5OHN357CeAud%2FLVOUNa47S62w9mVNNh%2BwIgAQwkZdzyB9FaY%2BJa9jfiVdJOWKJ7%2Btoy8AG98Uf5amUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHJMH4KIbQ39BC5%2BUircAzm6q5bRzQFlOk0q1DSt4JB6DtDWQR8JR90Col0QIWDrCURElvFMEXM0fnpj%2FAESjqCoooskgpl0TJiiQjyTeeze6jPWp9hB8gm9T0BtqUOB8DeXsqHgzTE%2FKso%2Ful5fxszf9dXqYJmCBmku29dYVT5PD9UIwTdnF5sfQ6GFNrDXgC%2BtDuAljpIrUA6q67U38LbPTHEjh3KYoZxKKhVkHZb%2FfzFFc6eAJA28Q1jykqbxqiZpDDt%2BFuKO9FxCraWjE0G8DXu7%2BgcshQpTLCReh5xJTDqpKAcS%2BR92FRdj9Rgjq0rtfOXJmME7xpZ8vpuXr7wEDAZPWeJJI0HfKTe54tCdjkyxeXfhzgrkNBX49my2sle0RIxVucEefA3QrNtM96HgQWpI66jQ0CydU%2BBghmVPz2ppyFG4S6199RshKW6EbT2b26oSVWpummY4JntHEpogi2y5xRdRXuU8y6iIOmQQn9LNnCvgAbMGgO1EzWmsRLzDYb4nMREEE%2BT03ah5OvfzTbzOBzoraVCL3WbQBso8asGVohHEnROoVLNVRrCRn8KkU37g7DTu8pzuw8cHdPqaSuyDVVB1c79eFqjdcauu9LS1BNERT6fKYjqQNBkybfv5RzFLhcCe15ynMN3mqMEGOqUBoGG68RUOp3A7fiyPaelRNuy3w4ka6%2F6kCcQs%2FxpniJh%2FwqxA1pzCq7P4zJpqOonoKhLkSSDew%2BFDu2UENOoP1%2FJRu7rRepjjeMKV%2FdjJ6g05YW7wpseO5M3ABa%2FfL%2Bgol9NzX3670dfI5WO2vD8xfNeCYT%2BKKKOAYhfUrY6af8MK98q53BmvnTesXc%2BUZXGtxaG93TgUMxpV%2Bk3RokB%2F8Cyb7o5m&X-Amz-Signature=ecc2afdb9b572e09845b182c6a4e706a501bab8a03d923efd9382354b664c8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEEOZ6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWLQz6mWzO5OHN357CeAud%2FLVOUNa47S62w9mVNNh%2BwIgAQwkZdzyB9FaY%2BJa9jfiVdJOWKJ7%2Btoy8AG98Uf5amUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHJMH4KIbQ39BC5%2BUircAzm6q5bRzQFlOk0q1DSt4JB6DtDWQR8JR90Col0QIWDrCURElvFMEXM0fnpj%2FAESjqCoooskgpl0TJiiQjyTeeze6jPWp9hB8gm9T0BtqUOB8DeXsqHgzTE%2FKso%2Ful5fxszf9dXqYJmCBmku29dYVT5PD9UIwTdnF5sfQ6GFNrDXgC%2BtDuAljpIrUA6q67U38LbPTHEjh3KYoZxKKhVkHZb%2FfzFFc6eAJA28Q1jykqbxqiZpDDt%2BFuKO9FxCraWjE0G8DXu7%2BgcshQpTLCReh5xJTDqpKAcS%2BR92FRdj9Rgjq0rtfOXJmME7xpZ8vpuXr7wEDAZPWeJJI0HfKTe54tCdjkyxeXfhzgrkNBX49my2sle0RIxVucEefA3QrNtM96HgQWpI66jQ0CydU%2BBghmVPz2ppyFG4S6199RshKW6EbT2b26oSVWpummY4JntHEpogi2y5xRdRXuU8y6iIOmQQn9LNnCvgAbMGgO1EzWmsRLzDYb4nMREEE%2BT03ah5OvfzTbzOBzoraVCL3WbQBso8asGVohHEnROoVLNVRrCRn8KkU37g7DTu8pzuw8cHdPqaSuyDVVB1c79eFqjdcauu9LS1BNERT6fKYjqQNBkybfv5RzFLhcCe15ynMN3mqMEGOqUBoGG68RUOp3A7fiyPaelRNuy3w4ka6%2F6kCcQs%2FxpniJh%2FwqxA1pzCq7P4zJpqOonoKhLkSSDew%2BFDu2UENOoP1%2FJRu7rRepjjeMKV%2FdjJ6g05YW7wpseO5M3ABa%2FfL%2Bgol9NzX3670dfI5WO2vD8xfNeCYT%2BKKKOAYhfUrY6af8MK98q53BmvnTesXc%2BUZXGtxaG93TgUMxpV%2Bk3RokB%2F8Cyb7o5m&X-Amz-Signature=155d14e5f5146051d2417d6731a89b98a79f6ae19cbd0762d38e15756fe7d904&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEEOZ6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWLQz6mWzO5OHN357CeAud%2FLVOUNa47S62w9mVNNh%2BwIgAQwkZdzyB9FaY%2BJa9jfiVdJOWKJ7%2Btoy8AG98Uf5amUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHJMH4KIbQ39BC5%2BUircAzm6q5bRzQFlOk0q1DSt4JB6DtDWQR8JR90Col0QIWDrCURElvFMEXM0fnpj%2FAESjqCoooskgpl0TJiiQjyTeeze6jPWp9hB8gm9T0BtqUOB8DeXsqHgzTE%2FKso%2Ful5fxszf9dXqYJmCBmku29dYVT5PD9UIwTdnF5sfQ6GFNrDXgC%2BtDuAljpIrUA6q67U38LbPTHEjh3KYoZxKKhVkHZb%2FfzFFc6eAJA28Q1jykqbxqiZpDDt%2BFuKO9FxCraWjE0G8DXu7%2BgcshQpTLCReh5xJTDqpKAcS%2BR92FRdj9Rgjq0rtfOXJmME7xpZ8vpuXr7wEDAZPWeJJI0HfKTe54tCdjkyxeXfhzgrkNBX49my2sle0RIxVucEefA3QrNtM96HgQWpI66jQ0CydU%2BBghmVPz2ppyFG4S6199RshKW6EbT2b26oSVWpummY4JntHEpogi2y5xRdRXuU8y6iIOmQQn9LNnCvgAbMGgO1EzWmsRLzDYb4nMREEE%2BT03ah5OvfzTbzOBzoraVCL3WbQBso8asGVohHEnROoVLNVRrCRn8KkU37g7DTu8pzuw8cHdPqaSuyDVVB1c79eFqjdcauu9LS1BNERT6fKYjqQNBkybfv5RzFLhcCe15ynMN3mqMEGOqUBoGG68RUOp3A7fiyPaelRNuy3w4ka6%2F6kCcQs%2FxpniJh%2FwqxA1pzCq7P4zJpqOonoKhLkSSDew%2BFDu2UENOoP1%2FJRu7rRepjjeMKV%2FdjJ6g05YW7wpseO5M3ABa%2FfL%2Bgol9NzX3670dfI5WO2vD8xfNeCYT%2BKKKOAYhfUrY6af8MK98q53BmvnTesXc%2BUZXGtxaG93TgUMxpV%2Bk3RokB%2F8Cyb7o5m&X-Amz-Signature=cf6b2accdac86aed299f185aa109a74558a33ac81aa06445df436523008c8684&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEEOZ6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeWLQz6mWzO5OHN357CeAud%2FLVOUNa47S62w9mVNNh%2BwIgAQwkZdzyB9FaY%2BJa9jfiVdJOWKJ7%2Btoy8AG98Uf5amUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHJMH4KIbQ39BC5%2BUircAzm6q5bRzQFlOk0q1DSt4JB6DtDWQR8JR90Col0QIWDrCURElvFMEXM0fnpj%2FAESjqCoooskgpl0TJiiQjyTeeze6jPWp9hB8gm9T0BtqUOB8DeXsqHgzTE%2FKso%2Ful5fxszf9dXqYJmCBmku29dYVT5PD9UIwTdnF5sfQ6GFNrDXgC%2BtDuAljpIrUA6q67U38LbPTHEjh3KYoZxKKhVkHZb%2FfzFFc6eAJA28Q1jykqbxqiZpDDt%2BFuKO9FxCraWjE0G8DXu7%2BgcshQpTLCReh5xJTDqpKAcS%2BR92FRdj9Rgjq0rtfOXJmME7xpZ8vpuXr7wEDAZPWeJJI0HfKTe54tCdjkyxeXfhzgrkNBX49my2sle0RIxVucEefA3QrNtM96HgQWpI66jQ0CydU%2BBghmVPz2ppyFG4S6199RshKW6EbT2b26oSVWpummY4JntHEpogi2y5xRdRXuU8y6iIOmQQn9LNnCvgAbMGgO1EzWmsRLzDYb4nMREEE%2BT03ah5OvfzTbzOBzoraVCL3WbQBso8asGVohHEnROoVLNVRrCRn8KkU37g7DTu8pzuw8cHdPqaSuyDVVB1c79eFqjdcauu9LS1BNERT6fKYjqQNBkybfv5RzFLhcCe15ynMN3mqMEGOqUBoGG68RUOp3A7fiyPaelRNuy3w4ka6%2F6kCcQs%2FxpniJh%2FwqxA1pzCq7P4zJpqOonoKhLkSSDew%2BFDu2UENOoP1%2FJRu7rRepjjeMKV%2FdjJ6g05YW7wpseO5M3ABa%2FfL%2Bgol9NzX3670dfI5WO2vD8xfNeCYT%2BKKKOAYhfUrY6af8MK98q53BmvnTesXc%2BUZXGtxaG93TgUMxpV%2Bk3RokB%2F8Cyb7o5m&X-Amz-Signature=d30dba9402fb44467cbf4b98aac950cf1d9232128850af676090a75afa384e71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

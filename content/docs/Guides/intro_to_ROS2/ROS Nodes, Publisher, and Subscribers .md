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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425QJXS5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDn9U26Q19KIx3zIrjGnRxmKf2wjqa%2Fc1jlhGa4EssS6wIgMztsswokwF9KBpfMhru6geTpAcOp81Ulf3oGYu90EEIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIm94PKPz7%2BfrWfMircA28LONMq1ZuxZLrDsyESVr9x1GCzgdazcaKLH2NqPRNH1v%2FKNoTIJgZyS3RsQ5RFwJOM7W%2F34l1%2Fse0eAXqPmqfe5SIgCuBvn5EAM0dtvqWhjGxFfIKxdXfW4bRCDwXNLOdKxaSywGTpB7cUXCtYWgoEgkEmjrFueD3I54j1bP4cbNPOvJjsjufZQBsQ4gSqoyQCTiyNkZBjox8he3RnD8xg%2BvG74qB8bJSk4OwNhwHN2YaS1jVAmt2QHdXQBdcVzEZ%2Boakv8R0KgvIektQ%2FW7Nf5scMeMz6hDAD65uNRBAILQAVvl7CfjZwkslSAfXhBe8EUlvMy0oidnzeeVnJRivet%2BbY%2BrQi9zqtht2kmq0bjhhNxV8AScPZQTZhd31LOsOCtJ53FY2ysEjZavSjykoWsWJtwg6MI289%2FyIcv%2B2Nq0m4DtpJp1oh07lICv1eGpQmNhA4qzri9dORfhrFxM2PAGhC4jjhFy%2Fku3eWM5uvVohqA9mRnjm09GBsp8NtllOnXaoJ9Yr4ZJcBaqkZFpD525PM2RK%2F1BdzlFUEWMm5OQ4iqpfDURvRyU5zwQuYA6enNUq1tJrL2HeT0Z2I6DWCJ3oxf64%2FO%2F%2F5PvVksFDZu3y17FKfTI4aUBBBMI2o8r4GOqUBbyDG7VmkKG3tzJFrkPJiyhDIn4EcYEz1rBgZhW%2BlG4BpZzeHLYA8Rk8oJAEBJQFt7LPPISPb3DZGzqdDUSz%2Fv5st3QUfXbeZ14Z00AeVu30TEexbxC3VN6dFzqtsBVMcePvYfzvOG4Iyes7ZPl51du9QbS5xi%2FKPsGwPGfkcTMeLZxuLhGk8FGwZuEAQXfRJZ5yD3ipN7REaNsL%2BPk1pBTvGiL2w&X-Amz-Signature=0a5e3f3519774da243eb788ff37e7919eab10831d8ed34ec7351e17eee8d1081&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425QJXS5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDn9U26Q19KIx3zIrjGnRxmKf2wjqa%2Fc1jlhGa4EssS6wIgMztsswokwF9KBpfMhru6geTpAcOp81Ulf3oGYu90EEIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIm94PKPz7%2BfrWfMircA28LONMq1ZuxZLrDsyESVr9x1GCzgdazcaKLH2NqPRNH1v%2FKNoTIJgZyS3RsQ5RFwJOM7W%2F34l1%2Fse0eAXqPmqfe5SIgCuBvn5EAM0dtvqWhjGxFfIKxdXfW4bRCDwXNLOdKxaSywGTpB7cUXCtYWgoEgkEmjrFueD3I54j1bP4cbNPOvJjsjufZQBsQ4gSqoyQCTiyNkZBjox8he3RnD8xg%2BvG74qB8bJSk4OwNhwHN2YaS1jVAmt2QHdXQBdcVzEZ%2Boakv8R0KgvIektQ%2FW7Nf5scMeMz6hDAD65uNRBAILQAVvl7CfjZwkslSAfXhBe8EUlvMy0oidnzeeVnJRivet%2BbY%2BrQi9zqtht2kmq0bjhhNxV8AScPZQTZhd31LOsOCtJ53FY2ysEjZavSjykoWsWJtwg6MI289%2FyIcv%2B2Nq0m4DtpJp1oh07lICv1eGpQmNhA4qzri9dORfhrFxM2PAGhC4jjhFy%2Fku3eWM5uvVohqA9mRnjm09GBsp8NtllOnXaoJ9Yr4ZJcBaqkZFpD525PM2RK%2F1BdzlFUEWMm5OQ4iqpfDURvRyU5zwQuYA6enNUq1tJrL2HeT0Z2I6DWCJ3oxf64%2FO%2F%2F5PvVksFDZu3y17FKfTI4aUBBBMI2o8r4GOqUBbyDG7VmkKG3tzJFrkPJiyhDIn4EcYEz1rBgZhW%2BlG4BpZzeHLYA8Rk8oJAEBJQFt7LPPISPb3DZGzqdDUSz%2Fv5st3QUfXbeZ14Z00AeVu30TEexbxC3VN6dFzqtsBVMcePvYfzvOG4Iyes7ZPl51du9QbS5xi%2FKPsGwPGfkcTMeLZxuLhGk8FGwZuEAQXfRJZ5yD3ipN7REaNsL%2BPk1pBTvGiL2w&X-Amz-Signature=5807dab154244ee765cf6ba507e988094ccd8703580e300c3c69c11a7438aa56&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425QJXS5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDn9U26Q19KIx3zIrjGnRxmKf2wjqa%2Fc1jlhGa4EssS6wIgMztsswokwF9KBpfMhru6geTpAcOp81Ulf3oGYu90EEIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIm94PKPz7%2BfrWfMircA28LONMq1ZuxZLrDsyESVr9x1GCzgdazcaKLH2NqPRNH1v%2FKNoTIJgZyS3RsQ5RFwJOM7W%2F34l1%2Fse0eAXqPmqfe5SIgCuBvn5EAM0dtvqWhjGxFfIKxdXfW4bRCDwXNLOdKxaSywGTpB7cUXCtYWgoEgkEmjrFueD3I54j1bP4cbNPOvJjsjufZQBsQ4gSqoyQCTiyNkZBjox8he3RnD8xg%2BvG74qB8bJSk4OwNhwHN2YaS1jVAmt2QHdXQBdcVzEZ%2Boakv8R0KgvIektQ%2FW7Nf5scMeMz6hDAD65uNRBAILQAVvl7CfjZwkslSAfXhBe8EUlvMy0oidnzeeVnJRivet%2BbY%2BrQi9zqtht2kmq0bjhhNxV8AScPZQTZhd31LOsOCtJ53FY2ysEjZavSjykoWsWJtwg6MI289%2FyIcv%2B2Nq0m4DtpJp1oh07lICv1eGpQmNhA4qzri9dORfhrFxM2PAGhC4jjhFy%2Fku3eWM5uvVohqA9mRnjm09GBsp8NtllOnXaoJ9Yr4ZJcBaqkZFpD525PM2RK%2F1BdzlFUEWMm5OQ4iqpfDURvRyU5zwQuYA6enNUq1tJrL2HeT0Z2I6DWCJ3oxf64%2FO%2F%2F5PvVksFDZu3y17FKfTI4aUBBBMI2o8r4GOqUBbyDG7VmkKG3tzJFrkPJiyhDIn4EcYEz1rBgZhW%2BlG4BpZzeHLYA8Rk8oJAEBJQFt7LPPISPb3DZGzqdDUSz%2Fv5st3QUfXbeZ14Z00AeVu30TEexbxC3VN6dFzqtsBVMcePvYfzvOG4Iyes7ZPl51du9QbS5xi%2FKPsGwPGfkcTMeLZxuLhGk8FGwZuEAQXfRJZ5yD3ipN7REaNsL%2BPk1pBTvGiL2w&X-Amz-Signature=2b48c10d392426b08357d330b9c096e5ad634dfb29362d73424480bde22036ce&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425QJXS5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDn9U26Q19KIx3zIrjGnRxmKf2wjqa%2Fc1jlhGa4EssS6wIgMztsswokwF9KBpfMhru6geTpAcOp81Ulf3oGYu90EEIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIm94PKPz7%2BfrWfMircA28LONMq1ZuxZLrDsyESVr9x1GCzgdazcaKLH2NqPRNH1v%2FKNoTIJgZyS3RsQ5RFwJOM7W%2F34l1%2Fse0eAXqPmqfe5SIgCuBvn5EAM0dtvqWhjGxFfIKxdXfW4bRCDwXNLOdKxaSywGTpB7cUXCtYWgoEgkEmjrFueD3I54j1bP4cbNPOvJjsjufZQBsQ4gSqoyQCTiyNkZBjox8he3RnD8xg%2BvG74qB8bJSk4OwNhwHN2YaS1jVAmt2QHdXQBdcVzEZ%2Boakv8R0KgvIektQ%2FW7Nf5scMeMz6hDAD65uNRBAILQAVvl7CfjZwkslSAfXhBe8EUlvMy0oidnzeeVnJRivet%2BbY%2BrQi9zqtht2kmq0bjhhNxV8AScPZQTZhd31LOsOCtJ53FY2ysEjZavSjykoWsWJtwg6MI289%2FyIcv%2B2Nq0m4DtpJp1oh07lICv1eGpQmNhA4qzri9dORfhrFxM2PAGhC4jjhFy%2Fku3eWM5uvVohqA9mRnjm09GBsp8NtllOnXaoJ9Yr4ZJcBaqkZFpD525PM2RK%2F1BdzlFUEWMm5OQ4iqpfDURvRyU5zwQuYA6enNUq1tJrL2HeT0Z2I6DWCJ3oxf64%2FO%2F%2F5PvVksFDZu3y17FKfTI4aUBBBMI2o8r4GOqUBbyDG7VmkKG3tzJFrkPJiyhDIn4EcYEz1rBgZhW%2BlG4BpZzeHLYA8Rk8oJAEBJQFt7LPPISPb3DZGzqdDUSz%2Fv5st3QUfXbeZ14Z00AeVu30TEexbxC3VN6dFzqtsBVMcePvYfzvOG4Iyes7ZPl51du9QbS5xi%2FKPsGwPGfkcTMeLZxuLhGk8FGwZuEAQXfRJZ5yD3ipN7REaNsL%2BPk1pBTvGiL2w&X-Amz-Signature=50f99dc8a0aaa485c8e53159301467e94dbbb393cb015b7d8c3dd9eef71ae8fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425QJXS5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDn9U26Q19KIx3zIrjGnRxmKf2wjqa%2Fc1jlhGa4EssS6wIgMztsswokwF9KBpfMhru6geTpAcOp81Ulf3oGYu90EEIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIm94PKPz7%2BfrWfMircA28LONMq1ZuxZLrDsyESVr9x1GCzgdazcaKLH2NqPRNH1v%2FKNoTIJgZyS3RsQ5RFwJOM7W%2F34l1%2Fse0eAXqPmqfe5SIgCuBvn5EAM0dtvqWhjGxFfIKxdXfW4bRCDwXNLOdKxaSywGTpB7cUXCtYWgoEgkEmjrFueD3I54j1bP4cbNPOvJjsjufZQBsQ4gSqoyQCTiyNkZBjox8he3RnD8xg%2BvG74qB8bJSk4OwNhwHN2YaS1jVAmt2QHdXQBdcVzEZ%2Boakv8R0KgvIektQ%2FW7Nf5scMeMz6hDAD65uNRBAILQAVvl7CfjZwkslSAfXhBe8EUlvMy0oidnzeeVnJRivet%2BbY%2BrQi9zqtht2kmq0bjhhNxV8AScPZQTZhd31LOsOCtJ53FY2ysEjZavSjykoWsWJtwg6MI289%2FyIcv%2B2Nq0m4DtpJp1oh07lICv1eGpQmNhA4qzri9dORfhrFxM2PAGhC4jjhFy%2Fku3eWM5uvVohqA9mRnjm09GBsp8NtllOnXaoJ9Yr4ZJcBaqkZFpD525PM2RK%2F1BdzlFUEWMm5OQ4iqpfDURvRyU5zwQuYA6enNUq1tJrL2HeT0Z2I6DWCJ3oxf64%2FO%2F%2F5PvVksFDZu3y17FKfTI4aUBBBMI2o8r4GOqUBbyDG7VmkKG3tzJFrkPJiyhDIn4EcYEz1rBgZhW%2BlG4BpZzeHLYA8Rk8oJAEBJQFt7LPPISPb3DZGzqdDUSz%2Fv5st3QUfXbeZ14Z00AeVu30TEexbxC3VN6dFzqtsBVMcePvYfzvOG4Iyes7ZPl51du9QbS5xi%2FKPsGwPGfkcTMeLZxuLhGk8FGwZuEAQXfRJZ5yD3ipN7REaNsL%2BPk1pBTvGiL2w&X-Amz-Signature=2a78630ad7e1e94efc4b6c35bb6e1f24d8f51afa6ab46a854a2a1de160baefc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425QJXS5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDn9U26Q19KIx3zIrjGnRxmKf2wjqa%2Fc1jlhGa4EssS6wIgMztsswokwF9KBpfMhru6geTpAcOp81Ulf3oGYu90EEIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIm94PKPz7%2BfrWfMircA28LONMq1ZuxZLrDsyESVr9x1GCzgdazcaKLH2NqPRNH1v%2FKNoTIJgZyS3RsQ5RFwJOM7W%2F34l1%2Fse0eAXqPmqfe5SIgCuBvn5EAM0dtvqWhjGxFfIKxdXfW4bRCDwXNLOdKxaSywGTpB7cUXCtYWgoEgkEmjrFueD3I54j1bP4cbNPOvJjsjufZQBsQ4gSqoyQCTiyNkZBjox8he3RnD8xg%2BvG74qB8bJSk4OwNhwHN2YaS1jVAmt2QHdXQBdcVzEZ%2Boakv8R0KgvIektQ%2FW7Nf5scMeMz6hDAD65uNRBAILQAVvl7CfjZwkslSAfXhBe8EUlvMy0oidnzeeVnJRivet%2BbY%2BrQi9zqtht2kmq0bjhhNxV8AScPZQTZhd31LOsOCtJ53FY2ysEjZavSjykoWsWJtwg6MI289%2FyIcv%2B2Nq0m4DtpJp1oh07lICv1eGpQmNhA4qzri9dORfhrFxM2PAGhC4jjhFy%2Fku3eWM5uvVohqA9mRnjm09GBsp8NtllOnXaoJ9Yr4ZJcBaqkZFpD525PM2RK%2F1BdzlFUEWMm5OQ4iqpfDURvRyU5zwQuYA6enNUq1tJrL2HeT0Z2I6DWCJ3oxf64%2FO%2F%2F5PvVksFDZu3y17FKfTI4aUBBBMI2o8r4GOqUBbyDG7VmkKG3tzJFrkPJiyhDIn4EcYEz1rBgZhW%2BlG4BpZzeHLYA8Rk8oJAEBJQFt7LPPISPb3DZGzqdDUSz%2Fv5st3QUfXbeZ14Z00AeVu30TEexbxC3VN6dFzqtsBVMcePvYfzvOG4Iyes7ZPl51du9QbS5xi%2FKPsGwPGfkcTMeLZxuLhGk8FGwZuEAQXfRJZ5yD3ipN7REaNsL%2BPk1pBTvGiL2w&X-Amz-Signature=a76a73050443e03275125cb6d2239c0e70a3e8ca02fde48ec71c1973b27f235d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425QJXS5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDn9U26Q19KIx3zIrjGnRxmKf2wjqa%2Fc1jlhGa4EssS6wIgMztsswokwF9KBpfMhru6geTpAcOp81Ulf3oGYu90EEIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIm94PKPz7%2BfrWfMircA28LONMq1ZuxZLrDsyESVr9x1GCzgdazcaKLH2NqPRNH1v%2FKNoTIJgZyS3RsQ5RFwJOM7W%2F34l1%2Fse0eAXqPmqfe5SIgCuBvn5EAM0dtvqWhjGxFfIKxdXfW4bRCDwXNLOdKxaSywGTpB7cUXCtYWgoEgkEmjrFueD3I54j1bP4cbNPOvJjsjufZQBsQ4gSqoyQCTiyNkZBjox8he3RnD8xg%2BvG74qB8bJSk4OwNhwHN2YaS1jVAmt2QHdXQBdcVzEZ%2Boakv8R0KgvIektQ%2FW7Nf5scMeMz6hDAD65uNRBAILQAVvl7CfjZwkslSAfXhBe8EUlvMy0oidnzeeVnJRivet%2BbY%2BrQi9zqtht2kmq0bjhhNxV8AScPZQTZhd31LOsOCtJ53FY2ysEjZavSjykoWsWJtwg6MI289%2FyIcv%2B2Nq0m4DtpJp1oh07lICv1eGpQmNhA4qzri9dORfhrFxM2PAGhC4jjhFy%2Fku3eWM5uvVohqA9mRnjm09GBsp8NtllOnXaoJ9Yr4ZJcBaqkZFpD525PM2RK%2F1BdzlFUEWMm5OQ4iqpfDURvRyU5zwQuYA6enNUq1tJrL2HeT0Z2I6DWCJ3oxf64%2FO%2F%2F5PvVksFDZu3y17FKfTI4aUBBBMI2o8r4GOqUBbyDG7VmkKG3tzJFrkPJiyhDIn4EcYEz1rBgZhW%2BlG4BpZzeHLYA8Rk8oJAEBJQFt7LPPISPb3DZGzqdDUSz%2Fv5st3QUfXbeZ14Z00AeVu30TEexbxC3VN6dFzqtsBVMcePvYfzvOG4Iyes7ZPl51du9QbS5xi%2FKPsGwPGfkcTMeLZxuLhGk8FGwZuEAQXfRJZ5yD3ipN7REaNsL%2BPk1pBTvGiL2w&X-Amz-Signature=cedeb475f1b85a7e1a656d4f300a6f8d8d4aaa9abd2b9f73bafbf88faa483643&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425QJXS5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDn9U26Q19KIx3zIrjGnRxmKf2wjqa%2Fc1jlhGa4EssS6wIgMztsswokwF9KBpfMhru6geTpAcOp81Ulf3oGYu90EEIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIm94PKPz7%2BfrWfMircA28LONMq1ZuxZLrDsyESVr9x1GCzgdazcaKLH2NqPRNH1v%2FKNoTIJgZyS3RsQ5RFwJOM7W%2F34l1%2Fse0eAXqPmqfe5SIgCuBvn5EAM0dtvqWhjGxFfIKxdXfW4bRCDwXNLOdKxaSywGTpB7cUXCtYWgoEgkEmjrFueD3I54j1bP4cbNPOvJjsjufZQBsQ4gSqoyQCTiyNkZBjox8he3RnD8xg%2BvG74qB8bJSk4OwNhwHN2YaS1jVAmt2QHdXQBdcVzEZ%2Boakv8R0KgvIektQ%2FW7Nf5scMeMz6hDAD65uNRBAILQAVvl7CfjZwkslSAfXhBe8EUlvMy0oidnzeeVnJRivet%2BbY%2BrQi9zqtht2kmq0bjhhNxV8AScPZQTZhd31LOsOCtJ53FY2ysEjZavSjykoWsWJtwg6MI289%2FyIcv%2B2Nq0m4DtpJp1oh07lICv1eGpQmNhA4qzri9dORfhrFxM2PAGhC4jjhFy%2Fku3eWM5uvVohqA9mRnjm09GBsp8NtllOnXaoJ9Yr4ZJcBaqkZFpD525PM2RK%2F1BdzlFUEWMm5OQ4iqpfDURvRyU5zwQuYA6enNUq1tJrL2HeT0Z2I6DWCJ3oxf64%2FO%2F%2F5PvVksFDZu3y17FKfTI4aUBBBMI2o8r4GOqUBbyDG7VmkKG3tzJFrkPJiyhDIn4EcYEz1rBgZhW%2BlG4BpZzeHLYA8Rk8oJAEBJQFt7LPPISPb3DZGzqdDUSz%2Fv5st3QUfXbeZ14Z00AeVu30TEexbxC3VN6dFzqtsBVMcePvYfzvOG4Iyes7ZPl51du9QbS5xi%2FKPsGwPGfkcTMeLZxuLhGk8FGwZuEAQXfRJZ5yD3ipN7REaNsL%2BPk1pBTvGiL2w&X-Amz-Signature=71a400bdac111eb16d857995257ff59fe17fa83d0d264d695049ad69ebbc555b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

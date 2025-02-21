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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4FPJHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlpudhbOQ1PKTZN5OCdQxKYntW71MpSUJAJxwptt42QIgKwGhEYGRtGvQlBeGBuKMfxgJvTpk%2ByiuJ6cH4gn2l1UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuYOWZSpZ2NXFwPUircA5MVaUHb1%2FKXtmb3t4OUEjk8l4uO6ZZv7teJEsmksKpCkAsU0JtDdGyHJ7KeloQlAATTVaIR4WQEV%2Fz1Ml0JgqOSsDEf8aEFdSFJz90RtLsHqRmLOFfFVyMTQFQFhprrOxf2eGfiSbUd1KdPmxY%2BBuAkiD5X0MYfiI5VIzRxzqDbIpbCTnSLvLI7sda5UyvWaTNtbxIsZd%2FkWWhvTAudIYV80yxFClDZwzy4xzi0jtGQcxy4OXCIgY9GEFB1JRudgh9zDBq6kNuTS0zmYOvlhugIabIo8G2YYBhbe1QANrdbyEeLeEjZte42NWLjsSSxKAlyVbGsI2pkq7496t7yFJ3dMvUru2GmDSlmOf%2Fw7FmIvEO6BreFIYzMpzOWzwBT1SEVnRSzova5FV7y%2FWorAODFrVMFLqAeZf%2F%2F9o6pw9zLyBU1OVFsCvB6WJa2iK2UVivdwZZdlIaLGAur42MBxrgdrzubqFRyFDDf9rdDBJ3uD%2FQAHb4a8KSOHcK1JLbe7vonRGJ6OB%2BX7eD%2FwNGjyeRaQSopF3vaveF7oe6CRcBu5qn3oiyxp%2BIrwQmfbn%2FyOLtTwPi0XNSR%2FErbbufo8bh1MyezXLI0fKfZzbxQemZ13563de6B1XvuYu59MOmi4L0GOqUBE1ZyBuJl45bSDfEkWfr2m7AFJW5HpMYAuVYOeC3ngDS9CnxcKS6Zr85LbW6lMKXB8i4pjr3kdiJGhfX8SbvWzYzfMo0KjsJ68NpoTwiBKPKH1c83dPa9cUYAEaifjcUaFrUbzAT0yTQuNQCR7ME0ZeFAbJttFKW%2B1ksi3PFUugN6eqAY7QMCHDiE5faZuloK6sIGIya3HvIzh19sRZu1IrlrMScK&X-Amz-Signature=0803c65b26be961923459481d334dfb4e2ab4b2755436a3f8791cf24c084eb68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4FPJHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlpudhbOQ1PKTZN5OCdQxKYntW71MpSUJAJxwptt42QIgKwGhEYGRtGvQlBeGBuKMfxgJvTpk%2ByiuJ6cH4gn2l1UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuYOWZSpZ2NXFwPUircA5MVaUHb1%2FKXtmb3t4OUEjk8l4uO6ZZv7teJEsmksKpCkAsU0JtDdGyHJ7KeloQlAATTVaIR4WQEV%2Fz1Ml0JgqOSsDEf8aEFdSFJz90RtLsHqRmLOFfFVyMTQFQFhprrOxf2eGfiSbUd1KdPmxY%2BBuAkiD5X0MYfiI5VIzRxzqDbIpbCTnSLvLI7sda5UyvWaTNtbxIsZd%2FkWWhvTAudIYV80yxFClDZwzy4xzi0jtGQcxy4OXCIgY9GEFB1JRudgh9zDBq6kNuTS0zmYOvlhugIabIo8G2YYBhbe1QANrdbyEeLeEjZte42NWLjsSSxKAlyVbGsI2pkq7496t7yFJ3dMvUru2GmDSlmOf%2Fw7FmIvEO6BreFIYzMpzOWzwBT1SEVnRSzova5FV7y%2FWorAODFrVMFLqAeZf%2F%2F9o6pw9zLyBU1OVFsCvB6WJa2iK2UVivdwZZdlIaLGAur42MBxrgdrzubqFRyFDDf9rdDBJ3uD%2FQAHb4a8KSOHcK1JLbe7vonRGJ6OB%2BX7eD%2FwNGjyeRaQSopF3vaveF7oe6CRcBu5qn3oiyxp%2BIrwQmfbn%2FyOLtTwPi0XNSR%2FErbbufo8bh1MyezXLI0fKfZzbxQemZ13563de6B1XvuYu59MOmi4L0GOqUBE1ZyBuJl45bSDfEkWfr2m7AFJW5HpMYAuVYOeC3ngDS9CnxcKS6Zr85LbW6lMKXB8i4pjr3kdiJGhfX8SbvWzYzfMo0KjsJ68NpoTwiBKPKH1c83dPa9cUYAEaifjcUaFrUbzAT0yTQuNQCR7ME0ZeFAbJttFKW%2B1ksi3PFUugN6eqAY7QMCHDiE5faZuloK6sIGIya3HvIzh19sRZu1IrlrMScK&X-Amz-Signature=a3f7f6a7991b7b835e5887a9cf13a7b1adb39bf3c79488c6c37af6c104f4c1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4FPJHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlpudhbOQ1PKTZN5OCdQxKYntW71MpSUJAJxwptt42QIgKwGhEYGRtGvQlBeGBuKMfxgJvTpk%2ByiuJ6cH4gn2l1UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuYOWZSpZ2NXFwPUircA5MVaUHb1%2FKXtmb3t4OUEjk8l4uO6ZZv7teJEsmksKpCkAsU0JtDdGyHJ7KeloQlAATTVaIR4WQEV%2Fz1Ml0JgqOSsDEf8aEFdSFJz90RtLsHqRmLOFfFVyMTQFQFhprrOxf2eGfiSbUd1KdPmxY%2BBuAkiD5X0MYfiI5VIzRxzqDbIpbCTnSLvLI7sda5UyvWaTNtbxIsZd%2FkWWhvTAudIYV80yxFClDZwzy4xzi0jtGQcxy4OXCIgY9GEFB1JRudgh9zDBq6kNuTS0zmYOvlhugIabIo8G2YYBhbe1QANrdbyEeLeEjZte42NWLjsSSxKAlyVbGsI2pkq7496t7yFJ3dMvUru2GmDSlmOf%2Fw7FmIvEO6BreFIYzMpzOWzwBT1SEVnRSzova5FV7y%2FWorAODFrVMFLqAeZf%2F%2F9o6pw9zLyBU1OVFsCvB6WJa2iK2UVivdwZZdlIaLGAur42MBxrgdrzubqFRyFDDf9rdDBJ3uD%2FQAHb4a8KSOHcK1JLbe7vonRGJ6OB%2BX7eD%2FwNGjyeRaQSopF3vaveF7oe6CRcBu5qn3oiyxp%2BIrwQmfbn%2FyOLtTwPi0XNSR%2FErbbufo8bh1MyezXLI0fKfZzbxQemZ13563de6B1XvuYu59MOmi4L0GOqUBE1ZyBuJl45bSDfEkWfr2m7AFJW5HpMYAuVYOeC3ngDS9CnxcKS6Zr85LbW6lMKXB8i4pjr3kdiJGhfX8SbvWzYzfMo0KjsJ68NpoTwiBKPKH1c83dPa9cUYAEaifjcUaFrUbzAT0yTQuNQCR7ME0ZeFAbJttFKW%2B1ksi3PFUugN6eqAY7QMCHDiE5faZuloK6sIGIya3HvIzh19sRZu1IrlrMScK&X-Amz-Signature=cf7158e739f1999874ef52c4e1eda8e908fc79d48c6047ca21ede065078e8420&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4FPJHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlpudhbOQ1PKTZN5OCdQxKYntW71MpSUJAJxwptt42QIgKwGhEYGRtGvQlBeGBuKMfxgJvTpk%2ByiuJ6cH4gn2l1UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuYOWZSpZ2NXFwPUircA5MVaUHb1%2FKXtmb3t4OUEjk8l4uO6ZZv7teJEsmksKpCkAsU0JtDdGyHJ7KeloQlAATTVaIR4WQEV%2Fz1Ml0JgqOSsDEf8aEFdSFJz90RtLsHqRmLOFfFVyMTQFQFhprrOxf2eGfiSbUd1KdPmxY%2BBuAkiD5X0MYfiI5VIzRxzqDbIpbCTnSLvLI7sda5UyvWaTNtbxIsZd%2FkWWhvTAudIYV80yxFClDZwzy4xzi0jtGQcxy4OXCIgY9GEFB1JRudgh9zDBq6kNuTS0zmYOvlhugIabIo8G2YYBhbe1QANrdbyEeLeEjZte42NWLjsSSxKAlyVbGsI2pkq7496t7yFJ3dMvUru2GmDSlmOf%2Fw7FmIvEO6BreFIYzMpzOWzwBT1SEVnRSzova5FV7y%2FWorAODFrVMFLqAeZf%2F%2F9o6pw9zLyBU1OVFsCvB6WJa2iK2UVivdwZZdlIaLGAur42MBxrgdrzubqFRyFDDf9rdDBJ3uD%2FQAHb4a8KSOHcK1JLbe7vonRGJ6OB%2BX7eD%2FwNGjyeRaQSopF3vaveF7oe6CRcBu5qn3oiyxp%2BIrwQmfbn%2FyOLtTwPi0XNSR%2FErbbufo8bh1MyezXLI0fKfZzbxQemZ13563de6B1XvuYu59MOmi4L0GOqUBE1ZyBuJl45bSDfEkWfr2m7AFJW5HpMYAuVYOeC3ngDS9CnxcKS6Zr85LbW6lMKXB8i4pjr3kdiJGhfX8SbvWzYzfMo0KjsJ68NpoTwiBKPKH1c83dPa9cUYAEaifjcUaFrUbzAT0yTQuNQCR7ME0ZeFAbJttFKW%2B1ksi3PFUugN6eqAY7QMCHDiE5faZuloK6sIGIya3HvIzh19sRZu1IrlrMScK&X-Amz-Signature=d781674dcc8fefb741bce6e52666b2ebc8cb0e86c14c7a63a6f7d77e9f75624d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4FPJHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlpudhbOQ1PKTZN5OCdQxKYntW71MpSUJAJxwptt42QIgKwGhEYGRtGvQlBeGBuKMfxgJvTpk%2ByiuJ6cH4gn2l1UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuYOWZSpZ2NXFwPUircA5MVaUHb1%2FKXtmb3t4OUEjk8l4uO6ZZv7teJEsmksKpCkAsU0JtDdGyHJ7KeloQlAATTVaIR4WQEV%2Fz1Ml0JgqOSsDEf8aEFdSFJz90RtLsHqRmLOFfFVyMTQFQFhprrOxf2eGfiSbUd1KdPmxY%2BBuAkiD5X0MYfiI5VIzRxzqDbIpbCTnSLvLI7sda5UyvWaTNtbxIsZd%2FkWWhvTAudIYV80yxFClDZwzy4xzi0jtGQcxy4OXCIgY9GEFB1JRudgh9zDBq6kNuTS0zmYOvlhugIabIo8G2YYBhbe1QANrdbyEeLeEjZte42NWLjsSSxKAlyVbGsI2pkq7496t7yFJ3dMvUru2GmDSlmOf%2Fw7FmIvEO6BreFIYzMpzOWzwBT1SEVnRSzova5FV7y%2FWorAODFrVMFLqAeZf%2F%2F9o6pw9zLyBU1OVFsCvB6WJa2iK2UVivdwZZdlIaLGAur42MBxrgdrzubqFRyFDDf9rdDBJ3uD%2FQAHb4a8KSOHcK1JLbe7vonRGJ6OB%2BX7eD%2FwNGjyeRaQSopF3vaveF7oe6CRcBu5qn3oiyxp%2BIrwQmfbn%2FyOLtTwPi0XNSR%2FErbbufo8bh1MyezXLI0fKfZzbxQemZ13563de6B1XvuYu59MOmi4L0GOqUBE1ZyBuJl45bSDfEkWfr2m7AFJW5HpMYAuVYOeC3ngDS9CnxcKS6Zr85LbW6lMKXB8i4pjr3kdiJGhfX8SbvWzYzfMo0KjsJ68NpoTwiBKPKH1c83dPa9cUYAEaifjcUaFrUbzAT0yTQuNQCR7ME0ZeFAbJttFKW%2B1ksi3PFUugN6eqAY7QMCHDiE5faZuloK6sIGIya3HvIzh19sRZu1IrlrMScK&X-Amz-Signature=6fe5e0b3ffd5fd70d14d8c25650309bc4255f01cf844e0693ece7ec6a75e7793&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4FPJHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlpudhbOQ1PKTZN5OCdQxKYntW71MpSUJAJxwptt42QIgKwGhEYGRtGvQlBeGBuKMfxgJvTpk%2ByiuJ6cH4gn2l1UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuYOWZSpZ2NXFwPUircA5MVaUHb1%2FKXtmb3t4OUEjk8l4uO6ZZv7teJEsmksKpCkAsU0JtDdGyHJ7KeloQlAATTVaIR4WQEV%2Fz1Ml0JgqOSsDEf8aEFdSFJz90RtLsHqRmLOFfFVyMTQFQFhprrOxf2eGfiSbUd1KdPmxY%2BBuAkiD5X0MYfiI5VIzRxzqDbIpbCTnSLvLI7sda5UyvWaTNtbxIsZd%2FkWWhvTAudIYV80yxFClDZwzy4xzi0jtGQcxy4OXCIgY9GEFB1JRudgh9zDBq6kNuTS0zmYOvlhugIabIo8G2YYBhbe1QANrdbyEeLeEjZte42NWLjsSSxKAlyVbGsI2pkq7496t7yFJ3dMvUru2GmDSlmOf%2Fw7FmIvEO6BreFIYzMpzOWzwBT1SEVnRSzova5FV7y%2FWorAODFrVMFLqAeZf%2F%2F9o6pw9zLyBU1OVFsCvB6WJa2iK2UVivdwZZdlIaLGAur42MBxrgdrzubqFRyFDDf9rdDBJ3uD%2FQAHb4a8KSOHcK1JLbe7vonRGJ6OB%2BX7eD%2FwNGjyeRaQSopF3vaveF7oe6CRcBu5qn3oiyxp%2BIrwQmfbn%2FyOLtTwPi0XNSR%2FErbbufo8bh1MyezXLI0fKfZzbxQemZ13563de6B1XvuYu59MOmi4L0GOqUBE1ZyBuJl45bSDfEkWfr2m7AFJW5HpMYAuVYOeC3ngDS9CnxcKS6Zr85LbW6lMKXB8i4pjr3kdiJGhfX8SbvWzYzfMo0KjsJ68NpoTwiBKPKH1c83dPa9cUYAEaifjcUaFrUbzAT0yTQuNQCR7ME0ZeFAbJttFKW%2B1ksi3PFUugN6eqAY7QMCHDiE5faZuloK6sIGIya3HvIzh19sRZu1IrlrMScK&X-Amz-Signature=d134c526f7321f85f1a3dfdddff474b9b49585cf8e2191c46147f2a8f61fd8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4FPJHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlpudhbOQ1PKTZN5OCdQxKYntW71MpSUJAJxwptt42QIgKwGhEYGRtGvQlBeGBuKMfxgJvTpk%2ByiuJ6cH4gn2l1UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuYOWZSpZ2NXFwPUircA5MVaUHb1%2FKXtmb3t4OUEjk8l4uO6ZZv7teJEsmksKpCkAsU0JtDdGyHJ7KeloQlAATTVaIR4WQEV%2Fz1Ml0JgqOSsDEf8aEFdSFJz90RtLsHqRmLOFfFVyMTQFQFhprrOxf2eGfiSbUd1KdPmxY%2BBuAkiD5X0MYfiI5VIzRxzqDbIpbCTnSLvLI7sda5UyvWaTNtbxIsZd%2FkWWhvTAudIYV80yxFClDZwzy4xzi0jtGQcxy4OXCIgY9GEFB1JRudgh9zDBq6kNuTS0zmYOvlhugIabIo8G2YYBhbe1QANrdbyEeLeEjZte42NWLjsSSxKAlyVbGsI2pkq7496t7yFJ3dMvUru2GmDSlmOf%2Fw7FmIvEO6BreFIYzMpzOWzwBT1SEVnRSzova5FV7y%2FWorAODFrVMFLqAeZf%2F%2F9o6pw9zLyBU1OVFsCvB6WJa2iK2UVivdwZZdlIaLGAur42MBxrgdrzubqFRyFDDf9rdDBJ3uD%2FQAHb4a8KSOHcK1JLbe7vonRGJ6OB%2BX7eD%2FwNGjyeRaQSopF3vaveF7oe6CRcBu5qn3oiyxp%2BIrwQmfbn%2FyOLtTwPi0XNSR%2FErbbufo8bh1MyezXLI0fKfZzbxQemZ13563de6B1XvuYu59MOmi4L0GOqUBE1ZyBuJl45bSDfEkWfr2m7AFJW5HpMYAuVYOeC3ngDS9CnxcKS6Zr85LbW6lMKXB8i4pjr3kdiJGhfX8SbvWzYzfMo0KjsJ68NpoTwiBKPKH1c83dPa9cUYAEaifjcUaFrUbzAT0yTQuNQCR7ME0ZeFAbJttFKW%2B1ksi3PFUugN6eqAY7QMCHDiE5faZuloK6sIGIya3HvIzh19sRZu1IrlrMScK&X-Amz-Signature=4d32665b92ae3858ed787563309dddc3e231902a4587f3cbe4a91c9136491f44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4FPJHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlpudhbOQ1PKTZN5OCdQxKYntW71MpSUJAJxwptt42QIgKwGhEYGRtGvQlBeGBuKMfxgJvTpk%2ByiuJ6cH4gn2l1UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuYOWZSpZ2NXFwPUircA5MVaUHb1%2FKXtmb3t4OUEjk8l4uO6ZZv7teJEsmksKpCkAsU0JtDdGyHJ7KeloQlAATTVaIR4WQEV%2Fz1Ml0JgqOSsDEf8aEFdSFJz90RtLsHqRmLOFfFVyMTQFQFhprrOxf2eGfiSbUd1KdPmxY%2BBuAkiD5X0MYfiI5VIzRxzqDbIpbCTnSLvLI7sda5UyvWaTNtbxIsZd%2FkWWhvTAudIYV80yxFClDZwzy4xzi0jtGQcxy4OXCIgY9GEFB1JRudgh9zDBq6kNuTS0zmYOvlhugIabIo8G2YYBhbe1QANrdbyEeLeEjZte42NWLjsSSxKAlyVbGsI2pkq7496t7yFJ3dMvUru2GmDSlmOf%2Fw7FmIvEO6BreFIYzMpzOWzwBT1SEVnRSzova5FV7y%2FWorAODFrVMFLqAeZf%2F%2F9o6pw9zLyBU1OVFsCvB6WJa2iK2UVivdwZZdlIaLGAur42MBxrgdrzubqFRyFDDf9rdDBJ3uD%2FQAHb4a8KSOHcK1JLbe7vonRGJ6OB%2BX7eD%2FwNGjyeRaQSopF3vaveF7oe6CRcBu5qn3oiyxp%2BIrwQmfbn%2FyOLtTwPi0XNSR%2FErbbufo8bh1MyezXLI0fKfZzbxQemZ13563de6B1XvuYu59MOmi4L0GOqUBE1ZyBuJl45bSDfEkWfr2m7AFJW5HpMYAuVYOeC3ngDS9CnxcKS6Zr85LbW6lMKXB8i4pjr3kdiJGhfX8SbvWzYzfMo0KjsJ68NpoTwiBKPKH1c83dPa9cUYAEaifjcUaFrUbzAT0yTQuNQCR7ME0ZeFAbJttFKW%2B1ksi3PFUugN6eqAY7QMCHDiE5faZuloK6sIGIya3HvIzh19sRZu1IrlrMScK&X-Amz-Signature=7ce1049dcd174323e4c3282fa183f2a4b6cb8aa931ddcc6a26a8a2cd4abc9d00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

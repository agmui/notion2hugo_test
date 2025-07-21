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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAMYA73%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7D3EE0c0cN7NAD7KAbxHBNl9r3X5tciVsSNF9R71diAiEAnR7x%2B2BENc2n0fnCst8obB55abfNPdWNWFdGgK4z8JQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVkTTw6vb3uvc62MircA1xZwbc9JR9K6V6wdTsfxqKXA0FfaZtmQkLVXxQ2ALOTTgqrZSH2ziZGcXcQN%2FC%2Bwb1n31%2BobzpMC7agg0uLcRf7OzT5a6BHx4efsM3z6vG024TatILfxOeaw9yPNbmyYLl%2FzgDMJ3sANgtUOjpIzfBrnfEq%2B1dBEDdZ9hwcSS7e2AdcbTWuHcVULIMCLeLgsUqvmjdZH1c%2FCFOprwp3TCdrpFSU9v7IxKrVS058qpX0RRwHW3CUe1P%2FltorT2BDKhsaOLOWxVJd1PqVTlWp1OyZ%2B3wau%2FtvfCe8%2Bfyebcru980dyBV7Z7PIH1j5D2lDeYz3%2FmKcwuHDU14QAr73JtPlrryEwDtspz%2BFmQ%2BsSiWifMPd8c7KzQ1IAbrt52Nw2aB2eQIoVqRlF50Ol46Od7POA%2Ba0v7MUe9yNzuFjZq7CSPMBELqJDV0sUJTvpLO3S7CEzDnNhA5XRAFzweLxeUtwnENHoJU2iUfBX3Dvz5Tj3NOndQp%2BDlJI%2B%2BE%2FO%2FpfZGaAxS9uKS3KyWA3ymAY%2FRcGs9afyPG473MPHPdXtZBD2J%2FBv%2BRv8lXQ1A6gHsLQdAkcZtdEDraTfzgIi%2BPVGhvCBh2d2VpUXfMG7FE9mYy%2FO%2BaIruiZ3nwng6dFMNad%2BcMGOqUBVghAwHYmH9cxIaZDPBnnlS2Jk%2FBj6uOX3sgkWIAXzMVOBfpzNs8pQZpbGD6THdAP8a8vtBU221Vt22WStdMvaAaXnCvevdMdig223XjP8GWdIBL09QThumjxDofpDtlLQbAwbMIxfzBGK2neE6tO2tvnd%2FMgSqjEqwv1RC0HG7TinYuLIWx3pIXUPZpDiw1Wqk%2FBIlO3hlKEheJJ0%2B%2FoyMszxnuT&X-Amz-Signature=f0d3d54a91174ec8548ee87f1bd31e133e2cfa6c8a169be76dd0e3a49c80ceee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAMYA73%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7D3EE0c0cN7NAD7KAbxHBNl9r3X5tciVsSNF9R71diAiEAnR7x%2B2BENc2n0fnCst8obB55abfNPdWNWFdGgK4z8JQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVkTTw6vb3uvc62MircA1xZwbc9JR9K6V6wdTsfxqKXA0FfaZtmQkLVXxQ2ALOTTgqrZSH2ziZGcXcQN%2FC%2Bwb1n31%2BobzpMC7agg0uLcRf7OzT5a6BHx4efsM3z6vG024TatILfxOeaw9yPNbmyYLl%2FzgDMJ3sANgtUOjpIzfBrnfEq%2B1dBEDdZ9hwcSS7e2AdcbTWuHcVULIMCLeLgsUqvmjdZH1c%2FCFOprwp3TCdrpFSU9v7IxKrVS058qpX0RRwHW3CUe1P%2FltorT2BDKhsaOLOWxVJd1PqVTlWp1OyZ%2B3wau%2FtvfCe8%2Bfyebcru980dyBV7Z7PIH1j5D2lDeYz3%2FmKcwuHDU14QAr73JtPlrryEwDtspz%2BFmQ%2BsSiWifMPd8c7KzQ1IAbrt52Nw2aB2eQIoVqRlF50Ol46Od7POA%2Ba0v7MUe9yNzuFjZq7CSPMBELqJDV0sUJTvpLO3S7CEzDnNhA5XRAFzweLxeUtwnENHoJU2iUfBX3Dvz5Tj3NOndQp%2BDlJI%2B%2BE%2FO%2FpfZGaAxS9uKS3KyWA3ymAY%2FRcGs9afyPG473MPHPdXtZBD2J%2FBv%2BRv8lXQ1A6gHsLQdAkcZtdEDraTfzgIi%2BPVGhvCBh2d2VpUXfMG7FE9mYy%2FO%2BaIruiZ3nwng6dFMNad%2BcMGOqUBVghAwHYmH9cxIaZDPBnnlS2Jk%2FBj6uOX3sgkWIAXzMVOBfpzNs8pQZpbGD6THdAP8a8vtBU221Vt22WStdMvaAaXnCvevdMdig223XjP8GWdIBL09QThumjxDofpDtlLQbAwbMIxfzBGK2neE6tO2tvnd%2FMgSqjEqwv1RC0HG7TinYuLIWx3pIXUPZpDiw1Wqk%2FBIlO3hlKEheJJ0%2B%2FoyMszxnuT&X-Amz-Signature=85495342314ed394f3aceb474e61c0b77e3188b376e0048b9a7bbb2848b2be68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAMYA73%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7D3EE0c0cN7NAD7KAbxHBNl9r3X5tciVsSNF9R71diAiEAnR7x%2B2BENc2n0fnCst8obB55abfNPdWNWFdGgK4z8JQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVkTTw6vb3uvc62MircA1xZwbc9JR9K6V6wdTsfxqKXA0FfaZtmQkLVXxQ2ALOTTgqrZSH2ziZGcXcQN%2FC%2Bwb1n31%2BobzpMC7agg0uLcRf7OzT5a6BHx4efsM3z6vG024TatILfxOeaw9yPNbmyYLl%2FzgDMJ3sANgtUOjpIzfBrnfEq%2B1dBEDdZ9hwcSS7e2AdcbTWuHcVULIMCLeLgsUqvmjdZH1c%2FCFOprwp3TCdrpFSU9v7IxKrVS058qpX0RRwHW3CUe1P%2FltorT2BDKhsaOLOWxVJd1PqVTlWp1OyZ%2B3wau%2FtvfCe8%2Bfyebcru980dyBV7Z7PIH1j5D2lDeYz3%2FmKcwuHDU14QAr73JtPlrryEwDtspz%2BFmQ%2BsSiWifMPd8c7KzQ1IAbrt52Nw2aB2eQIoVqRlF50Ol46Od7POA%2Ba0v7MUe9yNzuFjZq7CSPMBELqJDV0sUJTvpLO3S7CEzDnNhA5XRAFzweLxeUtwnENHoJU2iUfBX3Dvz5Tj3NOndQp%2BDlJI%2B%2BE%2FO%2FpfZGaAxS9uKS3KyWA3ymAY%2FRcGs9afyPG473MPHPdXtZBD2J%2FBv%2BRv8lXQ1A6gHsLQdAkcZtdEDraTfzgIi%2BPVGhvCBh2d2VpUXfMG7FE9mYy%2FO%2BaIruiZ3nwng6dFMNad%2BcMGOqUBVghAwHYmH9cxIaZDPBnnlS2Jk%2FBj6uOX3sgkWIAXzMVOBfpzNs8pQZpbGD6THdAP8a8vtBU221Vt22WStdMvaAaXnCvevdMdig223XjP8GWdIBL09QThumjxDofpDtlLQbAwbMIxfzBGK2neE6tO2tvnd%2FMgSqjEqwv1RC0HG7TinYuLIWx3pIXUPZpDiw1Wqk%2FBIlO3hlKEheJJ0%2B%2FoyMszxnuT&X-Amz-Signature=63db85311f097af03af101668084aec40a6ad54f60c1ad51ff57a3f08c36a300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAMYA73%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7D3EE0c0cN7NAD7KAbxHBNl9r3X5tciVsSNF9R71diAiEAnR7x%2B2BENc2n0fnCst8obB55abfNPdWNWFdGgK4z8JQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVkTTw6vb3uvc62MircA1xZwbc9JR9K6V6wdTsfxqKXA0FfaZtmQkLVXxQ2ALOTTgqrZSH2ziZGcXcQN%2FC%2Bwb1n31%2BobzpMC7agg0uLcRf7OzT5a6BHx4efsM3z6vG024TatILfxOeaw9yPNbmyYLl%2FzgDMJ3sANgtUOjpIzfBrnfEq%2B1dBEDdZ9hwcSS7e2AdcbTWuHcVULIMCLeLgsUqvmjdZH1c%2FCFOprwp3TCdrpFSU9v7IxKrVS058qpX0RRwHW3CUe1P%2FltorT2BDKhsaOLOWxVJd1PqVTlWp1OyZ%2B3wau%2FtvfCe8%2Bfyebcru980dyBV7Z7PIH1j5D2lDeYz3%2FmKcwuHDU14QAr73JtPlrryEwDtspz%2BFmQ%2BsSiWifMPd8c7KzQ1IAbrt52Nw2aB2eQIoVqRlF50Ol46Od7POA%2Ba0v7MUe9yNzuFjZq7CSPMBELqJDV0sUJTvpLO3S7CEzDnNhA5XRAFzweLxeUtwnENHoJU2iUfBX3Dvz5Tj3NOndQp%2BDlJI%2B%2BE%2FO%2FpfZGaAxS9uKS3KyWA3ymAY%2FRcGs9afyPG473MPHPdXtZBD2J%2FBv%2BRv8lXQ1A6gHsLQdAkcZtdEDraTfzgIi%2BPVGhvCBh2d2VpUXfMG7FE9mYy%2FO%2BaIruiZ3nwng6dFMNad%2BcMGOqUBVghAwHYmH9cxIaZDPBnnlS2Jk%2FBj6uOX3sgkWIAXzMVOBfpzNs8pQZpbGD6THdAP8a8vtBU221Vt22WStdMvaAaXnCvevdMdig223XjP8GWdIBL09QThumjxDofpDtlLQbAwbMIxfzBGK2neE6tO2tvnd%2FMgSqjEqwv1RC0HG7TinYuLIWx3pIXUPZpDiw1Wqk%2FBIlO3hlKEheJJ0%2B%2FoyMszxnuT&X-Amz-Signature=ba7a3c6e042e66223c527bb9a76f0b1251b6e31383a72ea9800a0b5784d5b929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAMYA73%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7D3EE0c0cN7NAD7KAbxHBNl9r3X5tciVsSNF9R71diAiEAnR7x%2B2BENc2n0fnCst8obB55abfNPdWNWFdGgK4z8JQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVkTTw6vb3uvc62MircA1xZwbc9JR9K6V6wdTsfxqKXA0FfaZtmQkLVXxQ2ALOTTgqrZSH2ziZGcXcQN%2FC%2Bwb1n31%2BobzpMC7agg0uLcRf7OzT5a6BHx4efsM3z6vG024TatILfxOeaw9yPNbmyYLl%2FzgDMJ3sANgtUOjpIzfBrnfEq%2B1dBEDdZ9hwcSS7e2AdcbTWuHcVULIMCLeLgsUqvmjdZH1c%2FCFOprwp3TCdrpFSU9v7IxKrVS058qpX0RRwHW3CUe1P%2FltorT2BDKhsaOLOWxVJd1PqVTlWp1OyZ%2B3wau%2FtvfCe8%2Bfyebcru980dyBV7Z7PIH1j5D2lDeYz3%2FmKcwuHDU14QAr73JtPlrryEwDtspz%2BFmQ%2BsSiWifMPd8c7KzQ1IAbrt52Nw2aB2eQIoVqRlF50Ol46Od7POA%2Ba0v7MUe9yNzuFjZq7CSPMBELqJDV0sUJTvpLO3S7CEzDnNhA5XRAFzweLxeUtwnENHoJU2iUfBX3Dvz5Tj3NOndQp%2BDlJI%2B%2BE%2FO%2FpfZGaAxS9uKS3KyWA3ymAY%2FRcGs9afyPG473MPHPdXtZBD2J%2FBv%2BRv8lXQ1A6gHsLQdAkcZtdEDraTfzgIi%2BPVGhvCBh2d2VpUXfMG7FE9mYy%2FO%2BaIruiZ3nwng6dFMNad%2BcMGOqUBVghAwHYmH9cxIaZDPBnnlS2Jk%2FBj6uOX3sgkWIAXzMVOBfpzNs8pQZpbGD6THdAP8a8vtBU221Vt22WStdMvaAaXnCvevdMdig223XjP8GWdIBL09QThumjxDofpDtlLQbAwbMIxfzBGK2neE6tO2tvnd%2FMgSqjEqwv1RC0HG7TinYuLIWx3pIXUPZpDiw1Wqk%2FBIlO3hlKEheJJ0%2B%2FoyMszxnuT&X-Amz-Signature=5699681e538b3725d17dd7eb2a1391be4a827360f985c9ed789638c342899420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAMYA73%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7D3EE0c0cN7NAD7KAbxHBNl9r3X5tciVsSNF9R71diAiEAnR7x%2B2BENc2n0fnCst8obB55abfNPdWNWFdGgK4z8JQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVkTTw6vb3uvc62MircA1xZwbc9JR9K6V6wdTsfxqKXA0FfaZtmQkLVXxQ2ALOTTgqrZSH2ziZGcXcQN%2FC%2Bwb1n31%2BobzpMC7agg0uLcRf7OzT5a6BHx4efsM3z6vG024TatILfxOeaw9yPNbmyYLl%2FzgDMJ3sANgtUOjpIzfBrnfEq%2B1dBEDdZ9hwcSS7e2AdcbTWuHcVULIMCLeLgsUqvmjdZH1c%2FCFOprwp3TCdrpFSU9v7IxKrVS058qpX0RRwHW3CUe1P%2FltorT2BDKhsaOLOWxVJd1PqVTlWp1OyZ%2B3wau%2FtvfCe8%2Bfyebcru980dyBV7Z7PIH1j5D2lDeYz3%2FmKcwuHDU14QAr73JtPlrryEwDtspz%2BFmQ%2BsSiWifMPd8c7KzQ1IAbrt52Nw2aB2eQIoVqRlF50Ol46Od7POA%2Ba0v7MUe9yNzuFjZq7CSPMBELqJDV0sUJTvpLO3S7CEzDnNhA5XRAFzweLxeUtwnENHoJU2iUfBX3Dvz5Tj3NOndQp%2BDlJI%2B%2BE%2FO%2FpfZGaAxS9uKS3KyWA3ymAY%2FRcGs9afyPG473MPHPdXtZBD2J%2FBv%2BRv8lXQ1A6gHsLQdAkcZtdEDraTfzgIi%2BPVGhvCBh2d2VpUXfMG7FE9mYy%2FO%2BaIruiZ3nwng6dFMNad%2BcMGOqUBVghAwHYmH9cxIaZDPBnnlS2Jk%2FBj6uOX3sgkWIAXzMVOBfpzNs8pQZpbGD6THdAP8a8vtBU221Vt22WStdMvaAaXnCvevdMdig223XjP8GWdIBL09QThumjxDofpDtlLQbAwbMIxfzBGK2neE6tO2tvnd%2FMgSqjEqwv1RC0HG7TinYuLIWx3pIXUPZpDiw1Wqk%2FBIlO3hlKEheJJ0%2B%2FoyMszxnuT&X-Amz-Signature=47b57927422dcf8d94926b7f91fee5214128e835e673504da37c432007cb5c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAMYA73%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7D3EE0c0cN7NAD7KAbxHBNl9r3X5tciVsSNF9R71diAiEAnR7x%2B2BENc2n0fnCst8obB55abfNPdWNWFdGgK4z8JQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVkTTw6vb3uvc62MircA1xZwbc9JR9K6V6wdTsfxqKXA0FfaZtmQkLVXxQ2ALOTTgqrZSH2ziZGcXcQN%2FC%2Bwb1n31%2BobzpMC7agg0uLcRf7OzT5a6BHx4efsM3z6vG024TatILfxOeaw9yPNbmyYLl%2FzgDMJ3sANgtUOjpIzfBrnfEq%2B1dBEDdZ9hwcSS7e2AdcbTWuHcVULIMCLeLgsUqvmjdZH1c%2FCFOprwp3TCdrpFSU9v7IxKrVS058qpX0RRwHW3CUe1P%2FltorT2BDKhsaOLOWxVJd1PqVTlWp1OyZ%2B3wau%2FtvfCe8%2Bfyebcru980dyBV7Z7PIH1j5D2lDeYz3%2FmKcwuHDU14QAr73JtPlrryEwDtspz%2BFmQ%2BsSiWifMPd8c7KzQ1IAbrt52Nw2aB2eQIoVqRlF50Ol46Od7POA%2Ba0v7MUe9yNzuFjZq7CSPMBELqJDV0sUJTvpLO3S7CEzDnNhA5XRAFzweLxeUtwnENHoJU2iUfBX3Dvz5Tj3NOndQp%2BDlJI%2B%2BE%2FO%2FpfZGaAxS9uKS3KyWA3ymAY%2FRcGs9afyPG473MPHPdXtZBD2J%2FBv%2BRv8lXQ1A6gHsLQdAkcZtdEDraTfzgIi%2BPVGhvCBh2d2VpUXfMG7FE9mYy%2FO%2BaIruiZ3nwng6dFMNad%2BcMGOqUBVghAwHYmH9cxIaZDPBnnlS2Jk%2FBj6uOX3sgkWIAXzMVOBfpzNs8pQZpbGD6THdAP8a8vtBU221Vt22WStdMvaAaXnCvevdMdig223XjP8GWdIBL09QThumjxDofpDtlLQbAwbMIxfzBGK2neE6tO2tvnd%2FMgSqjEqwv1RC0HG7TinYuLIWx3pIXUPZpDiw1Wqk%2FBIlO3hlKEheJJ0%2B%2FoyMszxnuT&X-Amz-Signature=4649bd368845fdc2cbe74279ff4c068eec46564577d748a8f9d1e5853c77676f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNAMYA73%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7D3EE0c0cN7NAD7KAbxHBNl9r3X5tciVsSNF9R71diAiEAnR7x%2B2BENc2n0fnCst8obB55abfNPdWNWFdGgK4z8JQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVkTTw6vb3uvc62MircA1xZwbc9JR9K6V6wdTsfxqKXA0FfaZtmQkLVXxQ2ALOTTgqrZSH2ziZGcXcQN%2FC%2Bwb1n31%2BobzpMC7agg0uLcRf7OzT5a6BHx4efsM3z6vG024TatILfxOeaw9yPNbmyYLl%2FzgDMJ3sANgtUOjpIzfBrnfEq%2B1dBEDdZ9hwcSS7e2AdcbTWuHcVULIMCLeLgsUqvmjdZH1c%2FCFOprwp3TCdrpFSU9v7IxKrVS058qpX0RRwHW3CUe1P%2FltorT2BDKhsaOLOWxVJd1PqVTlWp1OyZ%2B3wau%2FtvfCe8%2Bfyebcru980dyBV7Z7PIH1j5D2lDeYz3%2FmKcwuHDU14QAr73JtPlrryEwDtspz%2BFmQ%2BsSiWifMPd8c7KzQ1IAbrt52Nw2aB2eQIoVqRlF50Ol46Od7POA%2Ba0v7MUe9yNzuFjZq7CSPMBELqJDV0sUJTvpLO3S7CEzDnNhA5XRAFzweLxeUtwnENHoJU2iUfBX3Dvz5Tj3NOndQp%2BDlJI%2B%2BE%2FO%2FpfZGaAxS9uKS3KyWA3ymAY%2FRcGs9afyPG473MPHPdXtZBD2J%2FBv%2BRv8lXQ1A6gHsLQdAkcZtdEDraTfzgIi%2BPVGhvCBh2d2VpUXfMG7FE9mYy%2FO%2BaIruiZ3nwng6dFMNad%2BcMGOqUBVghAwHYmH9cxIaZDPBnnlS2Jk%2FBj6uOX3sgkWIAXzMVOBfpzNs8pQZpbGD6THdAP8a8vtBU221Vt22WStdMvaAaXnCvevdMdig223XjP8GWdIBL09QThumjxDofpDtlLQbAwbMIxfzBGK2neE6tO2tvnd%2FMgSqjEqwv1RC0HG7TinYuLIWx3pIXUPZpDiw1Wqk%2FBIlO3hlKEheJJ0%2B%2FoyMszxnuT&X-Amz-Signature=3fe7b14df12d461361d06076abd188bb0a1100280b62b6ee77469289ff2cbe21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

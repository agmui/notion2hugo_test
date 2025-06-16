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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZS74NM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDUqXljg2f0rTjsfvRTCCiOBD1esDDNfiLvqMJXD3YEwgIgMzN0lyAfnP8oEuwH05joA9XzSt%2BT%2B%2FGENPV9Cf3ndq4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHPAGzMf1%2BpS6viIXyrcAyNXBExUo0%2FB4MLkYn1Zjb8vJMTV35%2BQsmX8f3RX0Kd70wYx%2B6LCdWkpuE%2FpPUxtULnq%2Fe2fucj5h5F1hsrxFmvcPOuI%2Fg7eUvGF34Ip8NP67HrkbUR5%2FQg04GLCwFz9BvYwyvZlf9L%2BDe41OuU9K69zB2T3MNqxtyt1dS%2FTY3Imagz4I%2FY8iB0rSi7mg%2FYWZ9JtJipuXZRccs3V5fCer6edVjaVibyRhjS5tBxL0HDAWW5MfixDJ0dSB7lyWYn1xmb%2B5db%2BrMRe8M4EwqZzft7tfSYrYPLzMU8Ndg6O3ORqRgF1bCtXLMO4hUzv4IVLlSlww1gaQ2DeNktBDFgcb9jClJDM0zYSSCeh83MCLzjg3az5zCyOOwmpL%2B%2FJ%2BL9CZ1RWY3YIu4pH9SsRksYHgq2dc0pMAoHkVouJDvAxP4vm3Iu2wVQBPfMdlskhX61xC7UMSXDobPVyURohRSVgItecPfsO76A5oFwpM2frtXLs5f6cJ3Td%2F8Qw7kjmc0pVLFkinShJ2tWsaoUh0sYc0BbR2RXeRwSolIUhCQC28IAB48%2BAL%2F2kjNTrOYTwst50FU7IB%2BNhC6k7GKqYHlarYr12DUoFq0Ofi%2BOKmmBk08uSyYWwrLsXuiTrVdzCMLizv8IGOqUBY9BQAvwSrI21bSMLd0Ku5rZw4t40nsViNwPnzvjhj8JYKaRPVOOCXFaIWr2fYRPX2CY%2FxfKC6kqyIWdg%2Bet%2B6MWRBKrbZ%2FVR76KPtKbNgDzbK4ndaCMsY%2Bhbv7Z3DHBfbbkLJ%2B97kZmSfW%2FFV5h6Gss76ShtIB4QpD4KDl%2B7JlLXR2gvFLtaCE0n1jO3Ar4ff6x6jMNs5tLElIjhsd2TYY4FLc8x&X-Amz-Signature=57c390bdcdc4d45d9b3045235fea51bf40b04cc0c85a8844ebedbf12d26ed171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZS74NM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDUqXljg2f0rTjsfvRTCCiOBD1esDDNfiLvqMJXD3YEwgIgMzN0lyAfnP8oEuwH05joA9XzSt%2BT%2B%2FGENPV9Cf3ndq4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHPAGzMf1%2BpS6viIXyrcAyNXBExUo0%2FB4MLkYn1Zjb8vJMTV35%2BQsmX8f3RX0Kd70wYx%2B6LCdWkpuE%2FpPUxtULnq%2Fe2fucj5h5F1hsrxFmvcPOuI%2Fg7eUvGF34Ip8NP67HrkbUR5%2FQg04GLCwFz9BvYwyvZlf9L%2BDe41OuU9K69zB2T3MNqxtyt1dS%2FTY3Imagz4I%2FY8iB0rSi7mg%2FYWZ9JtJipuXZRccs3V5fCer6edVjaVibyRhjS5tBxL0HDAWW5MfixDJ0dSB7lyWYn1xmb%2B5db%2BrMRe8M4EwqZzft7tfSYrYPLzMU8Ndg6O3ORqRgF1bCtXLMO4hUzv4IVLlSlww1gaQ2DeNktBDFgcb9jClJDM0zYSSCeh83MCLzjg3az5zCyOOwmpL%2B%2FJ%2BL9CZ1RWY3YIu4pH9SsRksYHgq2dc0pMAoHkVouJDvAxP4vm3Iu2wVQBPfMdlskhX61xC7UMSXDobPVyURohRSVgItecPfsO76A5oFwpM2frtXLs5f6cJ3Td%2F8Qw7kjmc0pVLFkinShJ2tWsaoUh0sYc0BbR2RXeRwSolIUhCQC28IAB48%2BAL%2F2kjNTrOYTwst50FU7IB%2BNhC6k7GKqYHlarYr12DUoFq0Ofi%2BOKmmBk08uSyYWwrLsXuiTrVdzCMLizv8IGOqUBY9BQAvwSrI21bSMLd0Ku5rZw4t40nsViNwPnzvjhj8JYKaRPVOOCXFaIWr2fYRPX2CY%2FxfKC6kqyIWdg%2Bet%2B6MWRBKrbZ%2FVR76KPtKbNgDzbK4ndaCMsY%2Bhbv7Z3DHBfbbkLJ%2B97kZmSfW%2FFV5h6Gss76ShtIB4QpD4KDl%2B7JlLXR2gvFLtaCE0n1jO3Ar4ff6x6jMNs5tLElIjhsd2TYY4FLc8x&X-Amz-Signature=c1292a5b22d5309a0e18742bb4e2108601c3b8a2d1d4f8969cdd0ab359ae6d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZS74NM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDUqXljg2f0rTjsfvRTCCiOBD1esDDNfiLvqMJXD3YEwgIgMzN0lyAfnP8oEuwH05joA9XzSt%2BT%2B%2FGENPV9Cf3ndq4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHPAGzMf1%2BpS6viIXyrcAyNXBExUo0%2FB4MLkYn1Zjb8vJMTV35%2BQsmX8f3RX0Kd70wYx%2B6LCdWkpuE%2FpPUxtULnq%2Fe2fucj5h5F1hsrxFmvcPOuI%2Fg7eUvGF34Ip8NP67HrkbUR5%2FQg04GLCwFz9BvYwyvZlf9L%2BDe41OuU9K69zB2T3MNqxtyt1dS%2FTY3Imagz4I%2FY8iB0rSi7mg%2FYWZ9JtJipuXZRccs3V5fCer6edVjaVibyRhjS5tBxL0HDAWW5MfixDJ0dSB7lyWYn1xmb%2B5db%2BrMRe8M4EwqZzft7tfSYrYPLzMU8Ndg6O3ORqRgF1bCtXLMO4hUzv4IVLlSlww1gaQ2DeNktBDFgcb9jClJDM0zYSSCeh83MCLzjg3az5zCyOOwmpL%2B%2FJ%2BL9CZ1RWY3YIu4pH9SsRksYHgq2dc0pMAoHkVouJDvAxP4vm3Iu2wVQBPfMdlskhX61xC7UMSXDobPVyURohRSVgItecPfsO76A5oFwpM2frtXLs5f6cJ3Td%2F8Qw7kjmc0pVLFkinShJ2tWsaoUh0sYc0BbR2RXeRwSolIUhCQC28IAB48%2BAL%2F2kjNTrOYTwst50FU7IB%2BNhC6k7GKqYHlarYr12DUoFq0Ofi%2BOKmmBk08uSyYWwrLsXuiTrVdzCMLizv8IGOqUBY9BQAvwSrI21bSMLd0Ku5rZw4t40nsViNwPnzvjhj8JYKaRPVOOCXFaIWr2fYRPX2CY%2FxfKC6kqyIWdg%2Bet%2B6MWRBKrbZ%2FVR76KPtKbNgDzbK4ndaCMsY%2Bhbv7Z3DHBfbbkLJ%2B97kZmSfW%2FFV5h6Gss76ShtIB4QpD4KDl%2B7JlLXR2gvFLtaCE0n1jO3Ar4ff6x6jMNs5tLElIjhsd2TYY4FLc8x&X-Amz-Signature=76ce06ba0800742e3740341d13adbbe9f5f6ba1849faf369f0cc87947e79daab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZS74NM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDUqXljg2f0rTjsfvRTCCiOBD1esDDNfiLvqMJXD3YEwgIgMzN0lyAfnP8oEuwH05joA9XzSt%2BT%2B%2FGENPV9Cf3ndq4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHPAGzMf1%2BpS6viIXyrcAyNXBExUo0%2FB4MLkYn1Zjb8vJMTV35%2BQsmX8f3RX0Kd70wYx%2B6LCdWkpuE%2FpPUxtULnq%2Fe2fucj5h5F1hsrxFmvcPOuI%2Fg7eUvGF34Ip8NP67HrkbUR5%2FQg04GLCwFz9BvYwyvZlf9L%2BDe41OuU9K69zB2T3MNqxtyt1dS%2FTY3Imagz4I%2FY8iB0rSi7mg%2FYWZ9JtJipuXZRccs3V5fCer6edVjaVibyRhjS5tBxL0HDAWW5MfixDJ0dSB7lyWYn1xmb%2B5db%2BrMRe8M4EwqZzft7tfSYrYPLzMU8Ndg6O3ORqRgF1bCtXLMO4hUzv4IVLlSlww1gaQ2DeNktBDFgcb9jClJDM0zYSSCeh83MCLzjg3az5zCyOOwmpL%2B%2FJ%2BL9CZ1RWY3YIu4pH9SsRksYHgq2dc0pMAoHkVouJDvAxP4vm3Iu2wVQBPfMdlskhX61xC7UMSXDobPVyURohRSVgItecPfsO76A5oFwpM2frtXLs5f6cJ3Td%2F8Qw7kjmc0pVLFkinShJ2tWsaoUh0sYc0BbR2RXeRwSolIUhCQC28IAB48%2BAL%2F2kjNTrOYTwst50FU7IB%2BNhC6k7GKqYHlarYr12DUoFq0Ofi%2BOKmmBk08uSyYWwrLsXuiTrVdzCMLizv8IGOqUBY9BQAvwSrI21bSMLd0Ku5rZw4t40nsViNwPnzvjhj8JYKaRPVOOCXFaIWr2fYRPX2CY%2FxfKC6kqyIWdg%2Bet%2B6MWRBKrbZ%2FVR76KPtKbNgDzbK4ndaCMsY%2Bhbv7Z3DHBfbbkLJ%2B97kZmSfW%2FFV5h6Gss76ShtIB4QpD4KDl%2B7JlLXR2gvFLtaCE0n1jO3Ar4ff6x6jMNs5tLElIjhsd2TYY4FLc8x&X-Amz-Signature=52d543db73d5fa1371b0f0a4e510c38382550c33f2c20b53848f29fc6fccb69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZS74NM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDUqXljg2f0rTjsfvRTCCiOBD1esDDNfiLvqMJXD3YEwgIgMzN0lyAfnP8oEuwH05joA9XzSt%2BT%2B%2FGENPV9Cf3ndq4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHPAGzMf1%2BpS6viIXyrcAyNXBExUo0%2FB4MLkYn1Zjb8vJMTV35%2BQsmX8f3RX0Kd70wYx%2B6LCdWkpuE%2FpPUxtULnq%2Fe2fucj5h5F1hsrxFmvcPOuI%2Fg7eUvGF34Ip8NP67HrkbUR5%2FQg04GLCwFz9BvYwyvZlf9L%2BDe41OuU9K69zB2T3MNqxtyt1dS%2FTY3Imagz4I%2FY8iB0rSi7mg%2FYWZ9JtJipuXZRccs3V5fCer6edVjaVibyRhjS5tBxL0HDAWW5MfixDJ0dSB7lyWYn1xmb%2B5db%2BrMRe8M4EwqZzft7tfSYrYPLzMU8Ndg6O3ORqRgF1bCtXLMO4hUzv4IVLlSlww1gaQ2DeNktBDFgcb9jClJDM0zYSSCeh83MCLzjg3az5zCyOOwmpL%2B%2FJ%2BL9CZ1RWY3YIu4pH9SsRksYHgq2dc0pMAoHkVouJDvAxP4vm3Iu2wVQBPfMdlskhX61xC7UMSXDobPVyURohRSVgItecPfsO76A5oFwpM2frtXLs5f6cJ3Td%2F8Qw7kjmc0pVLFkinShJ2tWsaoUh0sYc0BbR2RXeRwSolIUhCQC28IAB48%2BAL%2F2kjNTrOYTwst50FU7IB%2BNhC6k7GKqYHlarYr12DUoFq0Ofi%2BOKmmBk08uSyYWwrLsXuiTrVdzCMLizv8IGOqUBY9BQAvwSrI21bSMLd0Ku5rZw4t40nsViNwPnzvjhj8JYKaRPVOOCXFaIWr2fYRPX2CY%2FxfKC6kqyIWdg%2Bet%2B6MWRBKrbZ%2FVR76KPtKbNgDzbK4ndaCMsY%2Bhbv7Z3DHBfbbkLJ%2B97kZmSfW%2FFV5h6Gss76ShtIB4QpD4KDl%2B7JlLXR2gvFLtaCE0n1jO3Ar4ff6x6jMNs5tLElIjhsd2TYY4FLc8x&X-Amz-Signature=d2e23c464a4e6603eea0599feb66894f0f25d64c485e287948bfd1228dfdb4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZS74NM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDUqXljg2f0rTjsfvRTCCiOBD1esDDNfiLvqMJXD3YEwgIgMzN0lyAfnP8oEuwH05joA9XzSt%2BT%2B%2FGENPV9Cf3ndq4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHPAGzMf1%2BpS6viIXyrcAyNXBExUo0%2FB4MLkYn1Zjb8vJMTV35%2BQsmX8f3RX0Kd70wYx%2B6LCdWkpuE%2FpPUxtULnq%2Fe2fucj5h5F1hsrxFmvcPOuI%2Fg7eUvGF34Ip8NP67HrkbUR5%2FQg04GLCwFz9BvYwyvZlf9L%2BDe41OuU9K69zB2T3MNqxtyt1dS%2FTY3Imagz4I%2FY8iB0rSi7mg%2FYWZ9JtJipuXZRccs3V5fCer6edVjaVibyRhjS5tBxL0HDAWW5MfixDJ0dSB7lyWYn1xmb%2B5db%2BrMRe8M4EwqZzft7tfSYrYPLzMU8Ndg6O3ORqRgF1bCtXLMO4hUzv4IVLlSlww1gaQ2DeNktBDFgcb9jClJDM0zYSSCeh83MCLzjg3az5zCyOOwmpL%2B%2FJ%2BL9CZ1RWY3YIu4pH9SsRksYHgq2dc0pMAoHkVouJDvAxP4vm3Iu2wVQBPfMdlskhX61xC7UMSXDobPVyURohRSVgItecPfsO76A5oFwpM2frtXLs5f6cJ3Td%2F8Qw7kjmc0pVLFkinShJ2tWsaoUh0sYc0BbR2RXeRwSolIUhCQC28IAB48%2BAL%2F2kjNTrOYTwst50FU7IB%2BNhC6k7GKqYHlarYr12DUoFq0Ofi%2BOKmmBk08uSyYWwrLsXuiTrVdzCMLizv8IGOqUBY9BQAvwSrI21bSMLd0Ku5rZw4t40nsViNwPnzvjhj8JYKaRPVOOCXFaIWr2fYRPX2CY%2FxfKC6kqyIWdg%2Bet%2B6MWRBKrbZ%2FVR76KPtKbNgDzbK4ndaCMsY%2Bhbv7Z3DHBfbbkLJ%2B97kZmSfW%2FFV5h6Gss76ShtIB4QpD4KDl%2B7JlLXR2gvFLtaCE0n1jO3Ar4ff6x6jMNs5tLElIjhsd2TYY4FLc8x&X-Amz-Signature=f1ea2d56f5a1fc001b67bb440bb3ffd89a1451e0ce170299598d70a4bbc3400d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZS74NM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDUqXljg2f0rTjsfvRTCCiOBD1esDDNfiLvqMJXD3YEwgIgMzN0lyAfnP8oEuwH05joA9XzSt%2BT%2B%2FGENPV9Cf3ndq4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHPAGzMf1%2BpS6viIXyrcAyNXBExUo0%2FB4MLkYn1Zjb8vJMTV35%2BQsmX8f3RX0Kd70wYx%2B6LCdWkpuE%2FpPUxtULnq%2Fe2fucj5h5F1hsrxFmvcPOuI%2Fg7eUvGF34Ip8NP67HrkbUR5%2FQg04GLCwFz9BvYwyvZlf9L%2BDe41OuU9K69zB2T3MNqxtyt1dS%2FTY3Imagz4I%2FY8iB0rSi7mg%2FYWZ9JtJipuXZRccs3V5fCer6edVjaVibyRhjS5tBxL0HDAWW5MfixDJ0dSB7lyWYn1xmb%2B5db%2BrMRe8M4EwqZzft7tfSYrYPLzMU8Ndg6O3ORqRgF1bCtXLMO4hUzv4IVLlSlww1gaQ2DeNktBDFgcb9jClJDM0zYSSCeh83MCLzjg3az5zCyOOwmpL%2B%2FJ%2BL9CZ1RWY3YIu4pH9SsRksYHgq2dc0pMAoHkVouJDvAxP4vm3Iu2wVQBPfMdlskhX61xC7UMSXDobPVyURohRSVgItecPfsO76A5oFwpM2frtXLs5f6cJ3Td%2F8Qw7kjmc0pVLFkinShJ2tWsaoUh0sYc0BbR2RXeRwSolIUhCQC28IAB48%2BAL%2F2kjNTrOYTwst50FU7IB%2BNhC6k7GKqYHlarYr12DUoFq0Ofi%2BOKmmBk08uSyYWwrLsXuiTrVdzCMLizv8IGOqUBY9BQAvwSrI21bSMLd0Ku5rZw4t40nsViNwPnzvjhj8JYKaRPVOOCXFaIWr2fYRPX2CY%2FxfKC6kqyIWdg%2Bet%2B6MWRBKrbZ%2FVR76KPtKbNgDzbK4ndaCMsY%2Bhbv7Z3DHBfbbkLJ%2B97kZmSfW%2FFV5h6Gss76ShtIB4QpD4KDl%2B7JlLXR2gvFLtaCE0n1jO3Ar4ff6x6jMNs5tLElIjhsd2TYY4FLc8x&X-Amz-Signature=d6c49a6b84b0c51af0baf666fd6dd8347a060301c47405d298a084631b1e36f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZS74NM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDUqXljg2f0rTjsfvRTCCiOBD1esDDNfiLvqMJXD3YEwgIgMzN0lyAfnP8oEuwH05joA9XzSt%2BT%2B%2FGENPV9Cf3ndq4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHPAGzMf1%2BpS6viIXyrcAyNXBExUo0%2FB4MLkYn1Zjb8vJMTV35%2BQsmX8f3RX0Kd70wYx%2B6LCdWkpuE%2FpPUxtULnq%2Fe2fucj5h5F1hsrxFmvcPOuI%2Fg7eUvGF34Ip8NP67HrkbUR5%2FQg04GLCwFz9BvYwyvZlf9L%2BDe41OuU9K69zB2T3MNqxtyt1dS%2FTY3Imagz4I%2FY8iB0rSi7mg%2FYWZ9JtJipuXZRccs3V5fCer6edVjaVibyRhjS5tBxL0HDAWW5MfixDJ0dSB7lyWYn1xmb%2B5db%2BrMRe8M4EwqZzft7tfSYrYPLzMU8Ndg6O3ORqRgF1bCtXLMO4hUzv4IVLlSlww1gaQ2DeNktBDFgcb9jClJDM0zYSSCeh83MCLzjg3az5zCyOOwmpL%2B%2FJ%2BL9CZ1RWY3YIu4pH9SsRksYHgq2dc0pMAoHkVouJDvAxP4vm3Iu2wVQBPfMdlskhX61xC7UMSXDobPVyURohRSVgItecPfsO76A5oFwpM2frtXLs5f6cJ3Td%2F8Qw7kjmc0pVLFkinShJ2tWsaoUh0sYc0BbR2RXeRwSolIUhCQC28IAB48%2BAL%2F2kjNTrOYTwst50FU7IB%2BNhC6k7GKqYHlarYr12DUoFq0Ofi%2BOKmmBk08uSyYWwrLsXuiTrVdzCMLizv8IGOqUBY9BQAvwSrI21bSMLd0Ku5rZw4t40nsViNwPnzvjhj8JYKaRPVOOCXFaIWr2fYRPX2CY%2FxfKC6kqyIWdg%2Bet%2B6MWRBKrbZ%2FVR76KPtKbNgDzbK4ndaCMsY%2Bhbv7Z3DHBfbbkLJ%2B97kZmSfW%2FFV5h6Gss76ShtIB4QpD4KDl%2B7JlLXR2gvFLtaCE0n1jO3Ar4ff6x6jMNs5tLElIjhsd2TYY4FLc8x&X-Amz-Signature=a177061340a1b27d74e4e131443ae89437fd918adc91f9b08adbac2fe1430a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

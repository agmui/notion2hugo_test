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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGMRZUR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIQDuNKMtVbdrHWSUb6EMgbMtCkdnOYBPbPUgC9XOaxfhUgIfHoPknnxtgCTcMegKv%2FKavi%2FvMxK1YHtRY6h%2FPBhVZyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVVWNOE%2FKJXFslKbzKtwDJXPiGmOYiEH%2BocXnWaA61h3akJf5lhrfnpKGzc1ZOqt6Jmqi0EPNQLpczMVDNP58zE4QhcNF0oB%2BynGK%2BTIZKjvCAbT9p%2FVwCMWeZi56R%2BdQ5pVkSZjZdrvUovcYpyLLzhrLViv1OLmvRjjyXBUXdAzVaG4Hc%2Bo2rHA65TXzPaLp1Y%2Fixxa8MnDvYi9L%2BCQXxpWq1DuHCacG5t%2FYjA5wfXfCnMm3B1l65Ta%2BIfsPEZGGWkFkWBa56QT5Z%2FYzfLm9ABcNPPYo0m%2BiPMjeh8hNW63HIddJlUx3MRE3bjinljIEdINOce3QEWJzINC5vWQMLm3r8RjAbafNFWR0tjhaXZfI2tkuU3EFb%2B3mIUti%2BeJuD84VPFMEl4kGYi0taNY%2BXAWYexktKWy%2F046ecjGHN1g1XvF%2FbouJxEGxqMu3D%2BK47kbotO%2FFbWMLk5vZC0R4PN6yzFl6V8kRG2idgCNofXqC05ikr1F11JgyE9RW76UofGnRHr6uQoykOmTuVkTYE2oqdOAbKUdEdavk4b8Dwl4xac4gloGBfp7r%2B8DF914IETnZkIt9AaUWdJm7nxz4JtF%2BFugoJf2t1kQ64G7fMoZSVmCaYSFK18EOg0Awp2WYXRIxihwsdkNkiwQw%2BebPwwY6pgFCXL%2BW34FRxVSYjQO0uq2cdStQnhxkzxdEESH3YNdMnQKf9sedkFZBx%2BXJ8h96DcBNi6q9skPCtb0EL%2BDvlqxeCFTIQgnSbJbe2kp%2FavDDWCnjew%2FjCwWEuOscDNpc4H0E8OWcSPIR8WgFXggfcXa7v4iKOeirWMvOMaZecwJZagq%2BicCvBAS%2FzKL8hsI%2B78bXAxCTitkQ6ik2US51nXnGsp1mMV6t&X-Amz-Signature=d3877714b869d3219459637cb5181e242f747f4c2673ae902a4c9377172045b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGMRZUR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIQDuNKMtVbdrHWSUb6EMgbMtCkdnOYBPbPUgC9XOaxfhUgIfHoPknnxtgCTcMegKv%2FKavi%2FvMxK1YHtRY6h%2FPBhVZyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVVWNOE%2FKJXFslKbzKtwDJXPiGmOYiEH%2BocXnWaA61h3akJf5lhrfnpKGzc1ZOqt6Jmqi0EPNQLpczMVDNP58zE4QhcNF0oB%2BynGK%2BTIZKjvCAbT9p%2FVwCMWeZi56R%2BdQ5pVkSZjZdrvUovcYpyLLzhrLViv1OLmvRjjyXBUXdAzVaG4Hc%2Bo2rHA65TXzPaLp1Y%2Fixxa8MnDvYi9L%2BCQXxpWq1DuHCacG5t%2FYjA5wfXfCnMm3B1l65Ta%2BIfsPEZGGWkFkWBa56QT5Z%2FYzfLm9ABcNPPYo0m%2BiPMjeh8hNW63HIddJlUx3MRE3bjinljIEdINOce3QEWJzINC5vWQMLm3r8RjAbafNFWR0tjhaXZfI2tkuU3EFb%2B3mIUti%2BeJuD84VPFMEl4kGYi0taNY%2BXAWYexktKWy%2F046ecjGHN1g1XvF%2FbouJxEGxqMu3D%2BK47kbotO%2FFbWMLk5vZC0R4PN6yzFl6V8kRG2idgCNofXqC05ikr1F11JgyE9RW76UofGnRHr6uQoykOmTuVkTYE2oqdOAbKUdEdavk4b8Dwl4xac4gloGBfp7r%2B8DF914IETnZkIt9AaUWdJm7nxz4JtF%2BFugoJf2t1kQ64G7fMoZSVmCaYSFK18EOg0Awp2WYXRIxihwsdkNkiwQw%2BebPwwY6pgFCXL%2BW34FRxVSYjQO0uq2cdStQnhxkzxdEESH3YNdMnQKf9sedkFZBx%2BXJ8h96DcBNi6q9skPCtb0EL%2BDvlqxeCFTIQgnSbJbe2kp%2FavDDWCnjew%2FjCwWEuOscDNpc4H0E8OWcSPIR8WgFXggfcXa7v4iKOeirWMvOMaZecwJZagq%2BicCvBAS%2FzKL8hsI%2B78bXAxCTitkQ6ik2US51nXnGsp1mMV6t&X-Amz-Signature=54c1eec03cd3ff59dd216ad94bdde4d52354ee2a1801ac9bbb994438b24d411a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGMRZUR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIQDuNKMtVbdrHWSUb6EMgbMtCkdnOYBPbPUgC9XOaxfhUgIfHoPknnxtgCTcMegKv%2FKavi%2FvMxK1YHtRY6h%2FPBhVZyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVVWNOE%2FKJXFslKbzKtwDJXPiGmOYiEH%2BocXnWaA61h3akJf5lhrfnpKGzc1ZOqt6Jmqi0EPNQLpczMVDNP58zE4QhcNF0oB%2BynGK%2BTIZKjvCAbT9p%2FVwCMWeZi56R%2BdQ5pVkSZjZdrvUovcYpyLLzhrLViv1OLmvRjjyXBUXdAzVaG4Hc%2Bo2rHA65TXzPaLp1Y%2Fixxa8MnDvYi9L%2BCQXxpWq1DuHCacG5t%2FYjA5wfXfCnMm3B1l65Ta%2BIfsPEZGGWkFkWBa56QT5Z%2FYzfLm9ABcNPPYo0m%2BiPMjeh8hNW63HIddJlUx3MRE3bjinljIEdINOce3QEWJzINC5vWQMLm3r8RjAbafNFWR0tjhaXZfI2tkuU3EFb%2B3mIUti%2BeJuD84VPFMEl4kGYi0taNY%2BXAWYexktKWy%2F046ecjGHN1g1XvF%2FbouJxEGxqMu3D%2BK47kbotO%2FFbWMLk5vZC0R4PN6yzFl6V8kRG2idgCNofXqC05ikr1F11JgyE9RW76UofGnRHr6uQoykOmTuVkTYE2oqdOAbKUdEdavk4b8Dwl4xac4gloGBfp7r%2B8DF914IETnZkIt9AaUWdJm7nxz4JtF%2BFugoJf2t1kQ64G7fMoZSVmCaYSFK18EOg0Awp2WYXRIxihwsdkNkiwQw%2BebPwwY6pgFCXL%2BW34FRxVSYjQO0uq2cdStQnhxkzxdEESH3YNdMnQKf9sedkFZBx%2BXJ8h96DcBNi6q9skPCtb0EL%2BDvlqxeCFTIQgnSbJbe2kp%2FavDDWCnjew%2FjCwWEuOscDNpc4H0E8OWcSPIR8WgFXggfcXa7v4iKOeirWMvOMaZecwJZagq%2BicCvBAS%2FzKL8hsI%2B78bXAxCTitkQ6ik2US51nXnGsp1mMV6t&X-Amz-Signature=66a1d783a58276f05511c3057f56ea6a29efff1bcbf8e4ff2354abf52fc53447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGMRZUR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIQDuNKMtVbdrHWSUb6EMgbMtCkdnOYBPbPUgC9XOaxfhUgIfHoPknnxtgCTcMegKv%2FKavi%2FvMxK1YHtRY6h%2FPBhVZyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVVWNOE%2FKJXFslKbzKtwDJXPiGmOYiEH%2BocXnWaA61h3akJf5lhrfnpKGzc1ZOqt6Jmqi0EPNQLpczMVDNP58zE4QhcNF0oB%2BynGK%2BTIZKjvCAbT9p%2FVwCMWeZi56R%2BdQ5pVkSZjZdrvUovcYpyLLzhrLViv1OLmvRjjyXBUXdAzVaG4Hc%2Bo2rHA65TXzPaLp1Y%2Fixxa8MnDvYi9L%2BCQXxpWq1DuHCacG5t%2FYjA5wfXfCnMm3B1l65Ta%2BIfsPEZGGWkFkWBa56QT5Z%2FYzfLm9ABcNPPYo0m%2BiPMjeh8hNW63HIddJlUx3MRE3bjinljIEdINOce3QEWJzINC5vWQMLm3r8RjAbafNFWR0tjhaXZfI2tkuU3EFb%2B3mIUti%2BeJuD84VPFMEl4kGYi0taNY%2BXAWYexktKWy%2F046ecjGHN1g1XvF%2FbouJxEGxqMu3D%2BK47kbotO%2FFbWMLk5vZC0R4PN6yzFl6V8kRG2idgCNofXqC05ikr1F11JgyE9RW76UofGnRHr6uQoykOmTuVkTYE2oqdOAbKUdEdavk4b8Dwl4xac4gloGBfp7r%2B8DF914IETnZkIt9AaUWdJm7nxz4JtF%2BFugoJf2t1kQ64G7fMoZSVmCaYSFK18EOg0Awp2WYXRIxihwsdkNkiwQw%2BebPwwY6pgFCXL%2BW34FRxVSYjQO0uq2cdStQnhxkzxdEESH3YNdMnQKf9sedkFZBx%2BXJ8h96DcBNi6q9skPCtb0EL%2BDvlqxeCFTIQgnSbJbe2kp%2FavDDWCnjew%2FjCwWEuOscDNpc4H0E8OWcSPIR8WgFXggfcXa7v4iKOeirWMvOMaZecwJZagq%2BicCvBAS%2FzKL8hsI%2B78bXAxCTitkQ6ik2US51nXnGsp1mMV6t&X-Amz-Signature=df5ac8c1610468f78a7acddc94bca5907511ae0f3e59b91c9b7cf13db32551cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGMRZUR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIQDuNKMtVbdrHWSUb6EMgbMtCkdnOYBPbPUgC9XOaxfhUgIfHoPknnxtgCTcMegKv%2FKavi%2FvMxK1YHtRY6h%2FPBhVZyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVVWNOE%2FKJXFslKbzKtwDJXPiGmOYiEH%2BocXnWaA61h3akJf5lhrfnpKGzc1ZOqt6Jmqi0EPNQLpczMVDNP58zE4QhcNF0oB%2BynGK%2BTIZKjvCAbT9p%2FVwCMWeZi56R%2BdQ5pVkSZjZdrvUovcYpyLLzhrLViv1OLmvRjjyXBUXdAzVaG4Hc%2Bo2rHA65TXzPaLp1Y%2Fixxa8MnDvYi9L%2BCQXxpWq1DuHCacG5t%2FYjA5wfXfCnMm3B1l65Ta%2BIfsPEZGGWkFkWBa56QT5Z%2FYzfLm9ABcNPPYo0m%2BiPMjeh8hNW63HIddJlUx3MRE3bjinljIEdINOce3QEWJzINC5vWQMLm3r8RjAbafNFWR0tjhaXZfI2tkuU3EFb%2B3mIUti%2BeJuD84VPFMEl4kGYi0taNY%2BXAWYexktKWy%2F046ecjGHN1g1XvF%2FbouJxEGxqMu3D%2BK47kbotO%2FFbWMLk5vZC0R4PN6yzFl6V8kRG2idgCNofXqC05ikr1F11JgyE9RW76UofGnRHr6uQoykOmTuVkTYE2oqdOAbKUdEdavk4b8Dwl4xac4gloGBfp7r%2B8DF914IETnZkIt9AaUWdJm7nxz4JtF%2BFugoJf2t1kQ64G7fMoZSVmCaYSFK18EOg0Awp2WYXRIxihwsdkNkiwQw%2BebPwwY6pgFCXL%2BW34FRxVSYjQO0uq2cdStQnhxkzxdEESH3YNdMnQKf9sedkFZBx%2BXJ8h96DcBNi6q9skPCtb0EL%2BDvlqxeCFTIQgnSbJbe2kp%2FavDDWCnjew%2FjCwWEuOscDNpc4H0E8OWcSPIR8WgFXggfcXa7v4iKOeirWMvOMaZecwJZagq%2BicCvBAS%2FzKL8hsI%2B78bXAxCTitkQ6ik2US51nXnGsp1mMV6t&X-Amz-Signature=1fbdccc431315cc3bb7c19408bc80d80c6935ce5be8c4eb4cf2af1578cc34d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGMRZUR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIQDuNKMtVbdrHWSUb6EMgbMtCkdnOYBPbPUgC9XOaxfhUgIfHoPknnxtgCTcMegKv%2FKavi%2FvMxK1YHtRY6h%2FPBhVZyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVVWNOE%2FKJXFslKbzKtwDJXPiGmOYiEH%2BocXnWaA61h3akJf5lhrfnpKGzc1ZOqt6Jmqi0EPNQLpczMVDNP58zE4QhcNF0oB%2BynGK%2BTIZKjvCAbT9p%2FVwCMWeZi56R%2BdQ5pVkSZjZdrvUovcYpyLLzhrLViv1OLmvRjjyXBUXdAzVaG4Hc%2Bo2rHA65TXzPaLp1Y%2Fixxa8MnDvYi9L%2BCQXxpWq1DuHCacG5t%2FYjA5wfXfCnMm3B1l65Ta%2BIfsPEZGGWkFkWBa56QT5Z%2FYzfLm9ABcNPPYo0m%2BiPMjeh8hNW63HIddJlUx3MRE3bjinljIEdINOce3QEWJzINC5vWQMLm3r8RjAbafNFWR0tjhaXZfI2tkuU3EFb%2B3mIUti%2BeJuD84VPFMEl4kGYi0taNY%2BXAWYexktKWy%2F046ecjGHN1g1XvF%2FbouJxEGxqMu3D%2BK47kbotO%2FFbWMLk5vZC0R4PN6yzFl6V8kRG2idgCNofXqC05ikr1F11JgyE9RW76UofGnRHr6uQoykOmTuVkTYE2oqdOAbKUdEdavk4b8Dwl4xac4gloGBfp7r%2B8DF914IETnZkIt9AaUWdJm7nxz4JtF%2BFugoJf2t1kQ64G7fMoZSVmCaYSFK18EOg0Awp2WYXRIxihwsdkNkiwQw%2BebPwwY6pgFCXL%2BW34FRxVSYjQO0uq2cdStQnhxkzxdEESH3YNdMnQKf9sedkFZBx%2BXJ8h96DcBNi6q9skPCtb0EL%2BDvlqxeCFTIQgnSbJbe2kp%2FavDDWCnjew%2FjCwWEuOscDNpc4H0E8OWcSPIR8WgFXggfcXa7v4iKOeirWMvOMaZecwJZagq%2BicCvBAS%2FzKL8hsI%2B78bXAxCTitkQ6ik2US51nXnGsp1mMV6t&X-Amz-Signature=9b7e070cf20afd481ddaad7107c737a66e04989f8758d1ec5ba1c29f32a49906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGMRZUR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIQDuNKMtVbdrHWSUb6EMgbMtCkdnOYBPbPUgC9XOaxfhUgIfHoPknnxtgCTcMegKv%2FKavi%2FvMxK1YHtRY6h%2FPBhVZyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVVWNOE%2FKJXFslKbzKtwDJXPiGmOYiEH%2BocXnWaA61h3akJf5lhrfnpKGzc1ZOqt6Jmqi0EPNQLpczMVDNP58zE4QhcNF0oB%2BynGK%2BTIZKjvCAbT9p%2FVwCMWeZi56R%2BdQ5pVkSZjZdrvUovcYpyLLzhrLViv1OLmvRjjyXBUXdAzVaG4Hc%2Bo2rHA65TXzPaLp1Y%2Fixxa8MnDvYi9L%2BCQXxpWq1DuHCacG5t%2FYjA5wfXfCnMm3B1l65Ta%2BIfsPEZGGWkFkWBa56QT5Z%2FYzfLm9ABcNPPYo0m%2BiPMjeh8hNW63HIddJlUx3MRE3bjinljIEdINOce3QEWJzINC5vWQMLm3r8RjAbafNFWR0tjhaXZfI2tkuU3EFb%2B3mIUti%2BeJuD84VPFMEl4kGYi0taNY%2BXAWYexktKWy%2F046ecjGHN1g1XvF%2FbouJxEGxqMu3D%2BK47kbotO%2FFbWMLk5vZC0R4PN6yzFl6V8kRG2idgCNofXqC05ikr1F11JgyE9RW76UofGnRHr6uQoykOmTuVkTYE2oqdOAbKUdEdavk4b8Dwl4xac4gloGBfp7r%2B8DF914IETnZkIt9AaUWdJm7nxz4JtF%2BFugoJf2t1kQ64G7fMoZSVmCaYSFK18EOg0Awp2WYXRIxihwsdkNkiwQw%2BebPwwY6pgFCXL%2BW34FRxVSYjQO0uq2cdStQnhxkzxdEESH3YNdMnQKf9sedkFZBx%2BXJ8h96DcBNi6q9skPCtb0EL%2BDvlqxeCFTIQgnSbJbe2kp%2FavDDWCnjew%2FjCwWEuOscDNpc4H0E8OWcSPIR8WgFXggfcXa7v4iKOeirWMvOMaZecwJZagq%2BicCvBAS%2FzKL8hsI%2B78bXAxCTitkQ6ik2US51nXnGsp1mMV6t&X-Amz-Signature=dfebdb4572279f3ad5f917b9fe2fe0f813f8384b90f995f6989cbdab872aec10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGMRZUR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIQDuNKMtVbdrHWSUb6EMgbMtCkdnOYBPbPUgC9XOaxfhUgIfHoPknnxtgCTcMegKv%2FKavi%2FvMxK1YHtRY6h%2FPBhVZyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMVVWNOE%2FKJXFslKbzKtwDJXPiGmOYiEH%2BocXnWaA61h3akJf5lhrfnpKGzc1ZOqt6Jmqi0EPNQLpczMVDNP58zE4QhcNF0oB%2BynGK%2BTIZKjvCAbT9p%2FVwCMWeZi56R%2BdQ5pVkSZjZdrvUovcYpyLLzhrLViv1OLmvRjjyXBUXdAzVaG4Hc%2Bo2rHA65TXzPaLp1Y%2Fixxa8MnDvYi9L%2BCQXxpWq1DuHCacG5t%2FYjA5wfXfCnMm3B1l65Ta%2BIfsPEZGGWkFkWBa56QT5Z%2FYzfLm9ABcNPPYo0m%2BiPMjeh8hNW63HIddJlUx3MRE3bjinljIEdINOce3QEWJzINC5vWQMLm3r8RjAbafNFWR0tjhaXZfI2tkuU3EFb%2B3mIUti%2BeJuD84VPFMEl4kGYi0taNY%2BXAWYexktKWy%2F046ecjGHN1g1XvF%2FbouJxEGxqMu3D%2BK47kbotO%2FFbWMLk5vZC0R4PN6yzFl6V8kRG2idgCNofXqC05ikr1F11JgyE9RW76UofGnRHr6uQoykOmTuVkTYE2oqdOAbKUdEdavk4b8Dwl4xac4gloGBfp7r%2B8DF914IETnZkIt9AaUWdJm7nxz4JtF%2BFugoJf2t1kQ64G7fMoZSVmCaYSFK18EOg0Awp2WYXRIxihwsdkNkiwQw%2BebPwwY6pgFCXL%2BW34FRxVSYjQO0uq2cdStQnhxkzxdEESH3YNdMnQKf9sedkFZBx%2BXJ8h96DcBNi6q9skPCtb0EL%2BDvlqxeCFTIQgnSbJbe2kp%2FavDDWCnjew%2FjCwWEuOscDNpc4H0E8OWcSPIR8WgFXggfcXa7v4iKOeirWMvOMaZecwJZagq%2BicCvBAS%2FzKL8hsI%2B78bXAxCTitkQ6ik2US51nXnGsp1mMV6t&X-Amz-Signature=e8dbb847b5b58b7809c07fceac581feacf8c6c8f93715cef092e60f92c8be6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

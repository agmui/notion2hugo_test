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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOXSLBJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCXZJpM1N3YdgVCShEYg0WrP6xixDTgPHfrhvAWiUd%2FYwIgIi84LMH4CS4P1bZS%2F6ezOWlDyOieudxJ%2BtcEKsOBD4cq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBecfvg%2Bdcv%2FdoDthyrcA8q8PznRlqXIrsKiCBFGR9qZI%2BuZq6pNvLFzn6Mus12USN65EYRz7aV0bf2SHJtMbZZTaB9c%2Bn%2BcM4NvHFVrIzWv6RcrW6XD4IBtw4iTXST6FYeBMfNeFxFrlAtzLmPO4kWIw2uy2sugczMKuTCrdZHpD9eVVz5%2FUz7n1ALsurcUdEfKbs8E606QQ1wDsfogd9S77c3turga6hdGLFVmESbERf40wIGYIN%2B9%2F8Xycq4Xz36VNtOMNopLd6%2BI2AKmqr5dBVIYx0ziQfk8MW13jzWMY7a9KuLi2UHSHp%2BuLShDcJOwnNyDdx3D8ImWJP40FQO5J1TfOu899MyNUHPYiXz0xYA4Mxx2gd4zb32M9BcEz77v1qjgDhLq1U2MDR%2FrRMLR2bkjVSkbYmWpYSK6zv277fVccyj0gPzFw8edThKs2KfTG%2Fhma%2Bb0vGtdlzeWW3Rgv5KKunqQPxF9s7fx9zgcDN3eZUUfVzd9v6agBT84RJz8HxOCTRTZ1Ah%2FV7SyHWSBNFdS3j3zqsklPAhFKVBXMv2VKnFD%2Fsb0XrDnD32OKEDSXjkZWTHo1k2UU8mAX8L5fpPrFdA0YzYP6sNxepZ6GOC7efsciIUa%2FWiEkHe0qfw5t8n3w06boIuhMJ7Z7L4GOqUBe0JvLV8FGN5TeY94F9WP3H4v%2Fd3SZlYT%2B9ZJlvGEGW6U3whEmuGd7h1vMBsCuHRQzuRKb9mOpxzZtYkWNdt%2BW2HSveXe8rwk9BZVks1kNKEpgrqxa%2B7W7HsPtx7KhoE7qBsifSSGSYkLLCdLnTrN3SBKIXGBBdzldc7svfOcNIRShSx41IX6Oqp2OuF6PYIsy3k3RuxgSQg1WsH17XEjtnCucvi4&X-Amz-Signature=041989ac48ba72a0072059f9f431368b81cd330bae65b8d6f6504d8f5de71513&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOXSLBJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCXZJpM1N3YdgVCShEYg0WrP6xixDTgPHfrhvAWiUd%2FYwIgIi84LMH4CS4P1bZS%2F6ezOWlDyOieudxJ%2BtcEKsOBD4cq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBecfvg%2Bdcv%2FdoDthyrcA8q8PznRlqXIrsKiCBFGR9qZI%2BuZq6pNvLFzn6Mus12USN65EYRz7aV0bf2SHJtMbZZTaB9c%2Bn%2BcM4NvHFVrIzWv6RcrW6XD4IBtw4iTXST6FYeBMfNeFxFrlAtzLmPO4kWIw2uy2sugczMKuTCrdZHpD9eVVz5%2FUz7n1ALsurcUdEfKbs8E606QQ1wDsfogd9S77c3turga6hdGLFVmESbERf40wIGYIN%2B9%2F8Xycq4Xz36VNtOMNopLd6%2BI2AKmqr5dBVIYx0ziQfk8MW13jzWMY7a9KuLi2UHSHp%2BuLShDcJOwnNyDdx3D8ImWJP40FQO5J1TfOu899MyNUHPYiXz0xYA4Mxx2gd4zb32M9BcEz77v1qjgDhLq1U2MDR%2FrRMLR2bkjVSkbYmWpYSK6zv277fVccyj0gPzFw8edThKs2KfTG%2Fhma%2Bb0vGtdlzeWW3Rgv5KKunqQPxF9s7fx9zgcDN3eZUUfVzd9v6agBT84RJz8HxOCTRTZ1Ah%2FV7SyHWSBNFdS3j3zqsklPAhFKVBXMv2VKnFD%2Fsb0XrDnD32OKEDSXjkZWTHo1k2UU8mAX8L5fpPrFdA0YzYP6sNxepZ6GOC7efsciIUa%2FWiEkHe0qfw5t8n3w06boIuhMJ7Z7L4GOqUBe0JvLV8FGN5TeY94F9WP3H4v%2Fd3SZlYT%2B9ZJlvGEGW6U3whEmuGd7h1vMBsCuHRQzuRKb9mOpxzZtYkWNdt%2BW2HSveXe8rwk9BZVks1kNKEpgrqxa%2B7W7HsPtx7KhoE7qBsifSSGSYkLLCdLnTrN3SBKIXGBBdzldc7svfOcNIRShSx41IX6Oqp2OuF6PYIsy3k3RuxgSQg1WsH17XEjtnCucvi4&X-Amz-Signature=6967dc308442d91cb10ae0e35b06d2f6da440f166dc674ca57da9cad76388b31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOXSLBJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCXZJpM1N3YdgVCShEYg0WrP6xixDTgPHfrhvAWiUd%2FYwIgIi84LMH4CS4P1bZS%2F6ezOWlDyOieudxJ%2BtcEKsOBD4cq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBecfvg%2Bdcv%2FdoDthyrcA8q8PznRlqXIrsKiCBFGR9qZI%2BuZq6pNvLFzn6Mus12USN65EYRz7aV0bf2SHJtMbZZTaB9c%2Bn%2BcM4NvHFVrIzWv6RcrW6XD4IBtw4iTXST6FYeBMfNeFxFrlAtzLmPO4kWIw2uy2sugczMKuTCrdZHpD9eVVz5%2FUz7n1ALsurcUdEfKbs8E606QQ1wDsfogd9S77c3turga6hdGLFVmESbERf40wIGYIN%2B9%2F8Xycq4Xz36VNtOMNopLd6%2BI2AKmqr5dBVIYx0ziQfk8MW13jzWMY7a9KuLi2UHSHp%2BuLShDcJOwnNyDdx3D8ImWJP40FQO5J1TfOu899MyNUHPYiXz0xYA4Mxx2gd4zb32M9BcEz77v1qjgDhLq1U2MDR%2FrRMLR2bkjVSkbYmWpYSK6zv277fVccyj0gPzFw8edThKs2KfTG%2Fhma%2Bb0vGtdlzeWW3Rgv5KKunqQPxF9s7fx9zgcDN3eZUUfVzd9v6agBT84RJz8HxOCTRTZ1Ah%2FV7SyHWSBNFdS3j3zqsklPAhFKVBXMv2VKnFD%2Fsb0XrDnD32OKEDSXjkZWTHo1k2UU8mAX8L5fpPrFdA0YzYP6sNxepZ6GOC7efsciIUa%2FWiEkHe0qfw5t8n3w06boIuhMJ7Z7L4GOqUBe0JvLV8FGN5TeY94F9WP3H4v%2Fd3SZlYT%2B9ZJlvGEGW6U3whEmuGd7h1vMBsCuHRQzuRKb9mOpxzZtYkWNdt%2BW2HSveXe8rwk9BZVks1kNKEpgrqxa%2B7W7HsPtx7KhoE7qBsifSSGSYkLLCdLnTrN3SBKIXGBBdzldc7svfOcNIRShSx41IX6Oqp2OuF6PYIsy3k3RuxgSQg1WsH17XEjtnCucvi4&X-Amz-Signature=946ed8d9ac436bd60ff34f14630a655cdd57f7627f03117ac7f39da77b02edd1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOXSLBJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCXZJpM1N3YdgVCShEYg0WrP6xixDTgPHfrhvAWiUd%2FYwIgIi84LMH4CS4P1bZS%2F6ezOWlDyOieudxJ%2BtcEKsOBD4cq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBecfvg%2Bdcv%2FdoDthyrcA8q8PznRlqXIrsKiCBFGR9qZI%2BuZq6pNvLFzn6Mus12USN65EYRz7aV0bf2SHJtMbZZTaB9c%2Bn%2BcM4NvHFVrIzWv6RcrW6XD4IBtw4iTXST6FYeBMfNeFxFrlAtzLmPO4kWIw2uy2sugczMKuTCrdZHpD9eVVz5%2FUz7n1ALsurcUdEfKbs8E606QQ1wDsfogd9S77c3turga6hdGLFVmESbERf40wIGYIN%2B9%2F8Xycq4Xz36VNtOMNopLd6%2BI2AKmqr5dBVIYx0ziQfk8MW13jzWMY7a9KuLi2UHSHp%2BuLShDcJOwnNyDdx3D8ImWJP40FQO5J1TfOu899MyNUHPYiXz0xYA4Mxx2gd4zb32M9BcEz77v1qjgDhLq1U2MDR%2FrRMLR2bkjVSkbYmWpYSK6zv277fVccyj0gPzFw8edThKs2KfTG%2Fhma%2Bb0vGtdlzeWW3Rgv5KKunqQPxF9s7fx9zgcDN3eZUUfVzd9v6agBT84RJz8HxOCTRTZ1Ah%2FV7SyHWSBNFdS3j3zqsklPAhFKVBXMv2VKnFD%2Fsb0XrDnD32OKEDSXjkZWTHo1k2UU8mAX8L5fpPrFdA0YzYP6sNxepZ6GOC7efsciIUa%2FWiEkHe0qfw5t8n3w06boIuhMJ7Z7L4GOqUBe0JvLV8FGN5TeY94F9WP3H4v%2Fd3SZlYT%2B9ZJlvGEGW6U3whEmuGd7h1vMBsCuHRQzuRKb9mOpxzZtYkWNdt%2BW2HSveXe8rwk9BZVks1kNKEpgrqxa%2B7W7HsPtx7KhoE7qBsifSSGSYkLLCdLnTrN3SBKIXGBBdzldc7svfOcNIRShSx41IX6Oqp2OuF6PYIsy3k3RuxgSQg1WsH17XEjtnCucvi4&X-Amz-Signature=58a31948b70459bcfc5b7eaae0a03564994b802ebc9d71ac2ad9f34e371ae5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOXSLBJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCXZJpM1N3YdgVCShEYg0WrP6xixDTgPHfrhvAWiUd%2FYwIgIi84LMH4CS4P1bZS%2F6ezOWlDyOieudxJ%2BtcEKsOBD4cq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBecfvg%2Bdcv%2FdoDthyrcA8q8PznRlqXIrsKiCBFGR9qZI%2BuZq6pNvLFzn6Mus12USN65EYRz7aV0bf2SHJtMbZZTaB9c%2Bn%2BcM4NvHFVrIzWv6RcrW6XD4IBtw4iTXST6FYeBMfNeFxFrlAtzLmPO4kWIw2uy2sugczMKuTCrdZHpD9eVVz5%2FUz7n1ALsurcUdEfKbs8E606QQ1wDsfogd9S77c3turga6hdGLFVmESbERf40wIGYIN%2B9%2F8Xycq4Xz36VNtOMNopLd6%2BI2AKmqr5dBVIYx0ziQfk8MW13jzWMY7a9KuLi2UHSHp%2BuLShDcJOwnNyDdx3D8ImWJP40FQO5J1TfOu899MyNUHPYiXz0xYA4Mxx2gd4zb32M9BcEz77v1qjgDhLq1U2MDR%2FrRMLR2bkjVSkbYmWpYSK6zv277fVccyj0gPzFw8edThKs2KfTG%2Fhma%2Bb0vGtdlzeWW3Rgv5KKunqQPxF9s7fx9zgcDN3eZUUfVzd9v6agBT84RJz8HxOCTRTZ1Ah%2FV7SyHWSBNFdS3j3zqsklPAhFKVBXMv2VKnFD%2Fsb0XrDnD32OKEDSXjkZWTHo1k2UU8mAX8L5fpPrFdA0YzYP6sNxepZ6GOC7efsciIUa%2FWiEkHe0qfw5t8n3w06boIuhMJ7Z7L4GOqUBe0JvLV8FGN5TeY94F9WP3H4v%2Fd3SZlYT%2B9ZJlvGEGW6U3whEmuGd7h1vMBsCuHRQzuRKb9mOpxzZtYkWNdt%2BW2HSveXe8rwk9BZVks1kNKEpgrqxa%2B7W7HsPtx7KhoE7qBsifSSGSYkLLCdLnTrN3SBKIXGBBdzldc7svfOcNIRShSx41IX6Oqp2OuF6PYIsy3k3RuxgSQg1WsH17XEjtnCucvi4&X-Amz-Signature=3816f6c7a187534a8bdd543af98c1200ce7e91526852a207dd7e566836e4429f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOXSLBJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCXZJpM1N3YdgVCShEYg0WrP6xixDTgPHfrhvAWiUd%2FYwIgIi84LMH4CS4P1bZS%2F6ezOWlDyOieudxJ%2BtcEKsOBD4cq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBecfvg%2Bdcv%2FdoDthyrcA8q8PznRlqXIrsKiCBFGR9qZI%2BuZq6pNvLFzn6Mus12USN65EYRz7aV0bf2SHJtMbZZTaB9c%2Bn%2BcM4NvHFVrIzWv6RcrW6XD4IBtw4iTXST6FYeBMfNeFxFrlAtzLmPO4kWIw2uy2sugczMKuTCrdZHpD9eVVz5%2FUz7n1ALsurcUdEfKbs8E606QQ1wDsfogd9S77c3turga6hdGLFVmESbERf40wIGYIN%2B9%2F8Xycq4Xz36VNtOMNopLd6%2BI2AKmqr5dBVIYx0ziQfk8MW13jzWMY7a9KuLi2UHSHp%2BuLShDcJOwnNyDdx3D8ImWJP40FQO5J1TfOu899MyNUHPYiXz0xYA4Mxx2gd4zb32M9BcEz77v1qjgDhLq1U2MDR%2FrRMLR2bkjVSkbYmWpYSK6zv277fVccyj0gPzFw8edThKs2KfTG%2Fhma%2Bb0vGtdlzeWW3Rgv5KKunqQPxF9s7fx9zgcDN3eZUUfVzd9v6agBT84RJz8HxOCTRTZ1Ah%2FV7SyHWSBNFdS3j3zqsklPAhFKVBXMv2VKnFD%2Fsb0XrDnD32OKEDSXjkZWTHo1k2UU8mAX8L5fpPrFdA0YzYP6sNxepZ6GOC7efsciIUa%2FWiEkHe0qfw5t8n3w06boIuhMJ7Z7L4GOqUBe0JvLV8FGN5TeY94F9WP3H4v%2Fd3SZlYT%2B9ZJlvGEGW6U3whEmuGd7h1vMBsCuHRQzuRKb9mOpxzZtYkWNdt%2BW2HSveXe8rwk9BZVks1kNKEpgrqxa%2B7W7HsPtx7KhoE7qBsifSSGSYkLLCdLnTrN3SBKIXGBBdzldc7svfOcNIRShSx41IX6Oqp2OuF6PYIsy3k3RuxgSQg1WsH17XEjtnCucvi4&X-Amz-Signature=8b719774477ee373683615ec2595387aa943a0abe0ecbb8b17f0c5fa19a9b177&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOXSLBJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCXZJpM1N3YdgVCShEYg0WrP6xixDTgPHfrhvAWiUd%2FYwIgIi84LMH4CS4P1bZS%2F6ezOWlDyOieudxJ%2BtcEKsOBD4cq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBecfvg%2Bdcv%2FdoDthyrcA8q8PznRlqXIrsKiCBFGR9qZI%2BuZq6pNvLFzn6Mus12USN65EYRz7aV0bf2SHJtMbZZTaB9c%2Bn%2BcM4NvHFVrIzWv6RcrW6XD4IBtw4iTXST6FYeBMfNeFxFrlAtzLmPO4kWIw2uy2sugczMKuTCrdZHpD9eVVz5%2FUz7n1ALsurcUdEfKbs8E606QQ1wDsfogd9S77c3turga6hdGLFVmESbERf40wIGYIN%2B9%2F8Xycq4Xz36VNtOMNopLd6%2BI2AKmqr5dBVIYx0ziQfk8MW13jzWMY7a9KuLi2UHSHp%2BuLShDcJOwnNyDdx3D8ImWJP40FQO5J1TfOu899MyNUHPYiXz0xYA4Mxx2gd4zb32M9BcEz77v1qjgDhLq1U2MDR%2FrRMLR2bkjVSkbYmWpYSK6zv277fVccyj0gPzFw8edThKs2KfTG%2Fhma%2Bb0vGtdlzeWW3Rgv5KKunqQPxF9s7fx9zgcDN3eZUUfVzd9v6agBT84RJz8HxOCTRTZ1Ah%2FV7SyHWSBNFdS3j3zqsklPAhFKVBXMv2VKnFD%2Fsb0XrDnD32OKEDSXjkZWTHo1k2UU8mAX8L5fpPrFdA0YzYP6sNxepZ6GOC7efsciIUa%2FWiEkHe0qfw5t8n3w06boIuhMJ7Z7L4GOqUBe0JvLV8FGN5TeY94F9WP3H4v%2Fd3SZlYT%2B9ZJlvGEGW6U3whEmuGd7h1vMBsCuHRQzuRKb9mOpxzZtYkWNdt%2BW2HSveXe8rwk9BZVks1kNKEpgrqxa%2B7W7HsPtx7KhoE7qBsifSSGSYkLLCdLnTrN3SBKIXGBBdzldc7svfOcNIRShSx41IX6Oqp2OuF6PYIsy3k3RuxgSQg1WsH17XEjtnCucvi4&X-Amz-Signature=7e2cb1b1d8e46b07fc05f91f81b6728303d9eab3ed39144e4a0eec5ac3516ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOXSLBJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCXZJpM1N3YdgVCShEYg0WrP6xixDTgPHfrhvAWiUd%2FYwIgIi84LMH4CS4P1bZS%2F6ezOWlDyOieudxJ%2BtcEKsOBD4cq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBecfvg%2Bdcv%2FdoDthyrcA8q8PznRlqXIrsKiCBFGR9qZI%2BuZq6pNvLFzn6Mus12USN65EYRz7aV0bf2SHJtMbZZTaB9c%2Bn%2BcM4NvHFVrIzWv6RcrW6XD4IBtw4iTXST6FYeBMfNeFxFrlAtzLmPO4kWIw2uy2sugczMKuTCrdZHpD9eVVz5%2FUz7n1ALsurcUdEfKbs8E606QQ1wDsfogd9S77c3turga6hdGLFVmESbERf40wIGYIN%2B9%2F8Xycq4Xz36VNtOMNopLd6%2BI2AKmqr5dBVIYx0ziQfk8MW13jzWMY7a9KuLi2UHSHp%2BuLShDcJOwnNyDdx3D8ImWJP40FQO5J1TfOu899MyNUHPYiXz0xYA4Mxx2gd4zb32M9BcEz77v1qjgDhLq1U2MDR%2FrRMLR2bkjVSkbYmWpYSK6zv277fVccyj0gPzFw8edThKs2KfTG%2Fhma%2Bb0vGtdlzeWW3Rgv5KKunqQPxF9s7fx9zgcDN3eZUUfVzd9v6agBT84RJz8HxOCTRTZ1Ah%2FV7SyHWSBNFdS3j3zqsklPAhFKVBXMv2VKnFD%2Fsb0XrDnD32OKEDSXjkZWTHo1k2UU8mAX8L5fpPrFdA0YzYP6sNxepZ6GOC7efsciIUa%2FWiEkHe0qfw5t8n3w06boIuhMJ7Z7L4GOqUBe0JvLV8FGN5TeY94F9WP3H4v%2Fd3SZlYT%2B9ZJlvGEGW6U3whEmuGd7h1vMBsCuHRQzuRKb9mOpxzZtYkWNdt%2BW2HSveXe8rwk9BZVks1kNKEpgrqxa%2B7W7HsPtx7KhoE7qBsifSSGSYkLLCdLnTrN3SBKIXGBBdzldc7svfOcNIRShSx41IX6Oqp2OuF6PYIsy3k3RuxgSQg1WsH17XEjtnCucvi4&X-Amz-Signature=fb66521182fbb5be44fc9ff8ade67d22e51e99bb0efd61012f6a3cd7d9b07dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

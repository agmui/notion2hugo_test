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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OTCSG2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGFKyxOGY7rKyLX8WTaqvwd%2BN5b6eiJkWjgMFa%2BB%2F2G%2FAiADXx2CcR4KTDF5c4qfzVS%2B0BT%2B0NSESqBYrVaiE%2B6Umir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMdUHoVNORXYugWbF6KtwDqsF9RolicT9H5C6%2F7LPJi4Unef0xEdVn5ULmHxEF55KZhdcJBkbJuLSgCDX94ZNHAkTC0Qc0Q0HYyJUW%2BbtN%2FdgTSSO9C3CASXhdPxVptsRqEzFcyWoKPKe3kjg0NW4J1WDt3PXtelsGAdmK4GO6capa4NgqQzWZJbntEIdEm13BMlLeg7HOWugULNzynT4aj6LUoV%2FiGgvW4P3Bw51WhYPanch8BvH80TK1ehzy59vuPxjIblDnmAfbjIi0xl7fgkJZgKu6Q5DqqUvmZ7rb5Njc6RAJhIqF1mA0mROn5NlrwgB9f8ksDIDmeQEm9KVvq6h8Ka%2FHf3hXQxoByoYHPUoVgyc4PbAXISYjTpd8HpJZj9Hd93iAr%2BPicByxtNe2RgD11UoRcsNK3Aeo5CUmSYis1BhZCqXvbaD9ufc2p6fbJtalmAdSnboAjk0TuX292lGaGkGhTyxTPQ3HPgxDp%2BTnnaeKMqtzZJiMgVQMWrYMDFKt9sZTM7loqJJMXAfjR1rTq%2BAc%2BWfpzb09VTkZpWv1CQJL7kEUiZGpjYyLMzW2PYxRuYl3Fn5uwtJpt9zdXpSBUk2X5Af8ex6r9jym5k1qEB7jDakl%2BNp8iABRtmo87Kx66z%2FrVD9Jx7Iwoq25wgY6pgHVkomGn6FAXG3wyMS%2BRuCnYyUKpeU%2FjaXWpIQKicV9fzDzDa75NQMMnHIawfKqg%2Ff0oKg6Al7HTTqWCF65WkWfW7%2FnxnTKjiOoWqSxIGagHTTBxzQR7TAPIB5ZEep%2FFDa1GWspYVmb8YSla7Z59zyoY3YNZnE2TtT0QeOAZWmL2lKdQslYGpy6CmSRZtxx4SYmqXCEQn0eHlad8AIlbuosemUDryUn&X-Amz-Signature=381f46473c266a903744200f9e1c68b4548aba33ed947c67e44c4501b3edb488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OTCSG2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGFKyxOGY7rKyLX8WTaqvwd%2BN5b6eiJkWjgMFa%2BB%2F2G%2FAiADXx2CcR4KTDF5c4qfzVS%2B0BT%2B0NSESqBYrVaiE%2B6Umir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMdUHoVNORXYugWbF6KtwDqsF9RolicT9H5C6%2F7LPJi4Unef0xEdVn5ULmHxEF55KZhdcJBkbJuLSgCDX94ZNHAkTC0Qc0Q0HYyJUW%2BbtN%2FdgTSSO9C3CASXhdPxVptsRqEzFcyWoKPKe3kjg0NW4J1WDt3PXtelsGAdmK4GO6capa4NgqQzWZJbntEIdEm13BMlLeg7HOWugULNzynT4aj6LUoV%2FiGgvW4P3Bw51WhYPanch8BvH80TK1ehzy59vuPxjIblDnmAfbjIi0xl7fgkJZgKu6Q5DqqUvmZ7rb5Njc6RAJhIqF1mA0mROn5NlrwgB9f8ksDIDmeQEm9KVvq6h8Ka%2FHf3hXQxoByoYHPUoVgyc4PbAXISYjTpd8HpJZj9Hd93iAr%2BPicByxtNe2RgD11UoRcsNK3Aeo5CUmSYis1BhZCqXvbaD9ufc2p6fbJtalmAdSnboAjk0TuX292lGaGkGhTyxTPQ3HPgxDp%2BTnnaeKMqtzZJiMgVQMWrYMDFKt9sZTM7loqJJMXAfjR1rTq%2BAc%2BWfpzb09VTkZpWv1CQJL7kEUiZGpjYyLMzW2PYxRuYl3Fn5uwtJpt9zdXpSBUk2X5Af8ex6r9jym5k1qEB7jDakl%2BNp8iABRtmo87Kx66z%2FrVD9Jx7Iwoq25wgY6pgHVkomGn6FAXG3wyMS%2BRuCnYyUKpeU%2FjaXWpIQKicV9fzDzDa75NQMMnHIawfKqg%2Ff0oKg6Al7HTTqWCF65WkWfW7%2FnxnTKjiOoWqSxIGagHTTBxzQR7TAPIB5ZEep%2FFDa1GWspYVmb8YSla7Z59zyoY3YNZnE2TtT0QeOAZWmL2lKdQslYGpy6CmSRZtxx4SYmqXCEQn0eHlad8AIlbuosemUDryUn&X-Amz-Signature=20639824743d0facdaef6497c8c9e976ed74a955ed6544c995387920e6fb545e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OTCSG2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGFKyxOGY7rKyLX8WTaqvwd%2BN5b6eiJkWjgMFa%2BB%2F2G%2FAiADXx2CcR4KTDF5c4qfzVS%2B0BT%2B0NSESqBYrVaiE%2B6Umir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMdUHoVNORXYugWbF6KtwDqsF9RolicT9H5C6%2F7LPJi4Unef0xEdVn5ULmHxEF55KZhdcJBkbJuLSgCDX94ZNHAkTC0Qc0Q0HYyJUW%2BbtN%2FdgTSSO9C3CASXhdPxVptsRqEzFcyWoKPKe3kjg0NW4J1WDt3PXtelsGAdmK4GO6capa4NgqQzWZJbntEIdEm13BMlLeg7HOWugULNzynT4aj6LUoV%2FiGgvW4P3Bw51WhYPanch8BvH80TK1ehzy59vuPxjIblDnmAfbjIi0xl7fgkJZgKu6Q5DqqUvmZ7rb5Njc6RAJhIqF1mA0mROn5NlrwgB9f8ksDIDmeQEm9KVvq6h8Ka%2FHf3hXQxoByoYHPUoVgyc4PbAXISYjTpd8HpJZj9Hd93iAr%2BPicByxtNe2RgD11UoRcsNK3Aeo5CUmSYis1BhZCqXvbaD9ufc2p6fbJtalmAdSnboAjk0TuX292lGaGkGhTyxTPQ3HPgxDp%2BTnnaeKMqtzZJiMgVQMWrYMDFKt9sZTM7loqJJMXAfjR1rTq%2BAc%2BWfpzb09VTkZpWv1CQJL7kEUiZGpjYyLMzW2PYxRuYl3Fn5uwtJpt9zdXpSBUk2X5Af8ex6r9jym5k1qEB7jDakl%2BNp8iABRtmo87Kx66z%2FrVD9Jx7Iwoq25wgY6pgHVkomGn6FAXG3wyMS%2BRuCnYyUKpeU%2FjaXWpIQKicV9fzDzDa75NQMMnHIawfKqg%2Ff0oKg6Al7HTTqWCF65WkWfW7%2FnxnTKjiOoWqSxIGagHTTBxzQR7TAPIB5ZEep%2FFDa1GWspYVmb8YSla7Z59zyoY3YNZnE2TtT0QeOAZWmL2lKdQslYGpy6CmSRZtxx4SYmqXCEQn0eHlad8AIlbuosemUDryUn&X-Amz-Signature=e69032afe2026e1e42c07fc29746ac73fe5c3287d5dcbffa16885188f3c83504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OTCSG2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGFKyxOGY7rKyLX8WTaqvwd%2BN5b6eiJkWjgMFa%2BB%2F2G%2FAiADXx2CcR4KTDF5c4qfzVS%2B0BT%2B0NSESqBYrVaiE%2B6Umir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMdUHoVNORXYugWbF6KtwDqsF9RolicT9H5C6%2F7LPJi4Unef0xEdVn5ULmHxEF55KZhdcJBkbJuLSgCDX94ZNHAkTC0Qc0Q0HYyJUW%2BbtN%2FdgTSSO9C3CASXhdPxVptsRqEzFcyWoKPKe3kjg0NW4J1WDt3PXtelsGAdmK4GO6capa4NgqQzWZJbntEIdEm13BMlLeg7HOWugULNzynT4aj6LUoV%2FiGgvW4P3Bw51WhYPanch8BvH80TK1ehzy59vuPxjIblDnmAfbjIi0xl7fgkJZgKu6Q5DqqUvmZ7rb5Njc6RAJhIqF1mA0mROn5NlrwgB9f8ksDIDmeQEm9KVvq6h8Ka%2FHf3hXQxoByoYHPUoVgyc4PbAXISYjTpd8HpJZj9Hd93iAr%2BPicByxtNe2RgD11UoRcsNK3Aeo5CUmSYis1BhZCqXvbaD9ufc2p6fbJtalmAdSnboAjk0TuX292lGaGkGhTyxTPQ3HPgxDp%2BTnnaeKMqtzZJiMgVQMWrYMDFKt9sZTM7loqJJMXAfjR1rTq%2BAc%2BWfpzb09VTkZpWv1CQJL7kEUiZGpjYyLMzW2PYxRuYl3Fn5uwtJpt9zdXpSBUk2X5Af8ex6r9jym5k1qEB7jDakl%2BNp8iABRtmo87Kx66z%2FrVD9Jx7Iwoq25wgY6pgHVkomGn6FAXG3wyMS%2BRuCnYyUKpeU%2FjaXWpIQKicV9fzDzDa75NQMMnHIawfKqg%2Ff0oKg6Al7HTTqWCF65WkWfW7%2FnxnTKjiOoWqSxIGagHTTBxzQR7TAPIB5ZEep%2FFDa1GWspYVmb8YSla7Z59zyoY3YNZnE2TtT0QeOAZWmL2lKdQslYGpy6CmSRZtxx4SYmqXCEQn0eHlad8AIlbuosemUDryUn&X-Amz-Signature=605aad107fed733267319d90360f3d2b9064f959fbdb07d36edd92bd5b329cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OTCSG2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGFKyxOGY7rKyLX8WTaqvwd%2BN5b6eiJkWjgMFa%2BB%2F2G%2FAiADXx2CcR4KTDF5c4qfzVS%2B0BT%2B0NSESqBYrVaiE%2B6Umir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMdUHoVNORXYugWbF6KtwDqsF9RolicT9H5C6%2F7LPJi4Unef0xEdVn5ULmHxEF55KZhdcJBkbJuLSgCDX94ZNHAkTC0Qc0Q0HYyJUW%2BbtN%2FdgTSSO9C3CASXhdPxVptsRqEzFcyWoKPKe3kjg0NW4J1WDt3PXtelsGAdmK4GO6capa4NgqQzWZJbntEIdEm13BMlLeg7HOWugULNzynT4aj6LUoV%2FiGgvW4P3Bw51WhYPanch8BvH80TK1ehzy59vuPxjIblDnmAfbjIi0xl7fgkJZgKu6Q5DqqUvmZ7rb5Njc6RAJhIqF1mA0mROn5NlrwgB9f8ksDIDmeQEm9KVvq6h8Ka%2FHf3hXQxoByoYHPUoVgyc4PbAXISYjTpd8HpJZj9Hd93iAr%2BPicByxtNe2RgD11UoRcsNK3Aeo5CUmSYis1BhZCqXvbaD9ufc2p6fbJtalmAdSnboAjk0TuX292lGaGkGhTyxTPQ3HPgxDp%2BTnnaeKMqtzZJiMgVQMWrYMDFKt9sZTM7loqJJMXAfjR1rTq%2BAc%2BWfpzb09VTkZpWv1CQJL7kEUiZGpjYyLMzW2PYxRuYl3Fn5uwtJpt9zdXpSBUk2X5Af8ex6r9jym5k1qEB7jDakl%2BNp8iABRtmo87Kx66z%2FrVD9Jx7Iwoq25wgY6pgHVkomGn6FAXG3wyMS%2BRuCnYyUKpeU%2FjaXWpIQKicV9fzDzDa75NQMMnHIawfKqg%2Ff0oKg6Al7HTTqWCF65WkWfW7%2FnxnTKjiOoWqSxIGagHTTBxzQR7TAPIB5ZEep%2FFDa1GWspYVmb8YSla7Z59zyoY3YNZnE2TtT0QeOAZWmL2lKdQslYGpy6CmSRZtxx4SYmqXCEQn0eHlad8AIlbuosemUDryUn&X-Amz-Signature=603d9a527a0d661c9d4f87301fcc5fe5ff5d05067ebf670a8675f524da9029a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OTCSG2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGFKyxOGY7rKyLX8WTaqvwd%2BN5b6eiJkWjgMFa%2BB%2F2G%2FAiADXx2CcR4KTDF5c4qfzVS%2B0BT%2B0NSESqBYrVaiE%2B6Umir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMdUHoVNORXYugWbF6KtwDqsF9RolicT9H5C6%2F7LPJi4Unef0xEdVn5ULmHxEF55KZhdcJBkbJuLSgCDX94ZNHAkTC0Qc0Q0HYyJUW%2BbtN%2FdgTSSO9C3CASXhdPxVptsRqEzFcyWoKPKe3kjg0NW4J1WDt3PXtelsGAdmK4GO6capa4NgqQzWZJbntEIdEm13BMlLeg7HOWugULNzynT4aj6LUoV%2FiGgvW4P3Bw51WhYPanch8BvH80TK1ehzy59vuPxjIblDnmAfbjIi0xl7fgkJZgKu6Q5DqqUvmZ7rb5Njc6RAJhIqF1mA0mROn5NlrwgB9f8ksDIDmeQEm9KVvq6h8Ka%2FHf3hXQxoByoYHPUoVgyc4PbAXISYjTpd8HpJZj9Hd93iAr%2BPicByxtNe2RgD11UoRcsNK3Aeo5CUmSYis1BhZCqXvbaD9ufc2p6fbJtalmAdSnboAjk0TuX292lGaGkGhTyxTPQ3HPgxDp%2BTnnaeKMqtzZJiMgVQMWrYMDFKt9sZTM7loqJJMXAfjR1rTq%2BAc%2BWfpzb09VTkZpWv1CQJL7kEUiZGpjYyLMzW2PYxRuYl3Fn5uwtJpt9zdXpSBUk2X5Af8ex6r9jym5k1qEB7jDakl%2BNp8iABRtmo87Kx66z%2FrVD9Jx7Iwoq25wgY6pgHVkomGn6FAXG3wyMS%2BRuCnYyUKpeU%2FjaXWpIQKicV9fzDzDa75NQMMnHIawfKqg%2Ff0oKg6Al7HTTqWCF65WkWfW7%2FnxnTKjiOoWqSxIGagHTTBxzQR7TAPIB5ZEep%2FFDa1GWspYVmb8YSla7Z59zyoY3YNZnE2TtT0QeOAZWmL2lKdQslYGpy6CmSRZtxx4SYmqXCEQn0eHlad8AIlbuosemUDryUn&X-Amz-Signature=f757f079f1e21891ddad6fa7b9a410f02a92cb7597bddcebda0d86ca256799d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OTCSG2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGFKyxOGY7rKyLX8WTaqvwd%2BN5b6eiJkWjgMFa%2BB%2F2G%2FAiADXx2CcR4KTDF5c4qfzVS%2B0BT%2B0NSESqBYrVaiE%2B6Umir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMdUHoVNORXYugWbF6KtwDqsF9RolicT9H5C6%2F7LPJi4Unef0xEdVn5ULmHxEF55KZhdcJBkbJuLSgCDX94ZNHAkTC0Qc0Q0HYyJUW%2BbtN%2FdgTSSO9C3CASXhdPxVptsRqEzFcyWoKPKe3kjg0NW4J1WDt3PXtelsGAdmK4GO6capa4NgqQzWZJbntEIdEm13BMlLeg7HOWugULNzynT4aj6LUoV%2FiGgvW4P3Bw51WhYPanch8BvH80TK1ehzy59vuPxjIblDnmAfbjIi0xl7fgkJZgKu6Q5DqqUvmZ7rb5Njc6RAJhIqF1mA0mROn5NlrwgB9f8ksDIDmeQEm9KVvq6h8Ka%2FHf3hXQxoByoYHPUoVgyc4PbAXISYjTpd8HpJZj9Hd93iAr%2BPicByxtNe2RgD11UoRcsNK3Aeo5CUmSYis1BhZCqXvbaD9ufc2p6fbJtalmAdSnboAjk0TuX292lGaGkGhTyxTPQ3HPgxDp%2BTnnaeKMqtzZJiMgVQMWrYMDFKt9sZTM7loqJJMXAfjR1rTq%2BAc%2BWfpzb09VTkZpWv1CQJL7kEUiZGpjYyLMzW2PYxRuYl3Fn5uwtJpt9zdXpSBUk2X5Af8ex6r9jym5k1qEB7jDakl%2BNp8iABRtmo87Kx66z%2FrVD9Jx7Iwoq25wgY6pgHVkomGn6FAXG3wyMS%2BRuCnYyUKpeU%2FjaXWpIQKicV9fzDzDa75NQMMnHIawfKqg%2Ff0oKg6Al7HTTqWCF65WkWfW7%2FnxnTKjiOoWqSxIGagHTTBxzQR7TAPIB5ZEep%2FFDa1GWspYVmb8YSla7Z59zyoY3YNZnE2TtT0QeOAZWmL2lKdQslYGpy6CmSRZtxx4SYmqXCEQn0eHlad8AIlbuosemUDryUn&X-Amz-Signature=420ad76447eceb12adeab104bd89d68cc357cf1474e30cae8603c4f87b1c7701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OTCSG2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGFKyxOGY7rKyLX8WTaqvwd%2BN5b6eiJkWjgMFa%2BB%2F2G%2FAiADXx2CcR4KTDF5c4qfzVS%2B0BT%2B0NSESqBYrVaiE%2B6Umir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMdUHoVNORXYugWbF6KtwDqsF9RolicT9H5C6%2F7LPJi4Unef0xEdVn5ULmHxEF55KZhdcJBkbJuLSgCDX94ZNHAkTC0Qc0Q0HYyJUW%2BbtN%2FdgTSSO9C3CASXhdPxVptsRqEzFcyWoKPKe3kjg0NW4J1WDt3PXtelsGAdmK4GO6capa4NgqQzWZJbntEIdEm13BMlLeg7HOWugULNzynT4aj6LUoV%2FiGgvW4P3Bw51WhYPanch8BvH80TK1ehzy59vuPxjIblDnmAfbjIi0xl7fgkJZgKu6Q5DqqUvmZ7rb5Njc6RAJhIqF1mA0mROn5NlrwgB9f8ksDIDmeQEm9KVvq6h8Ka%2FHf3hXQxoByoYHPUoVgyc4PbAXISYjTpd8HpJZj9Hd93iAr%2BPicByxtNe2RgD11UoRcsNK3Aeo5CUmSYis1BhZCqXvbaD9ufc2p6fbJtalmAdSnboAjk0TuX292lGaGkGhTyxTPQ3HPgxDp%2BTnnaeKMqtzZJiMgVQMWrYMDFKt9sZTM7loqJJMXAfjR1rTq%2BAc%2BWfpzb09VTkZpWv1CQJL7kEUiZGpjYyLMzW2PYxRuYl3Fn5uwtJpt9zdXpSBUk2X5Af8ex6r9jym5k1qEB7jDakl%2BNp8iABRtmo87Kx66z%2FrVD9Jx7Iwoq25wgY6pgHVkomGn6FAXG3wyMS%2BRuCnYyUKpeU%2FjaXWpIQKicV9fzDzDa75NQMMnHIawfKqg%2Ff0oKg6Al7HTTqWCF65WkWfW7%2FnxnTKjiOoWqSxIGagHTTBxzQR7TAPIB5ZEep%2FFDa1GWspYVmb8YSla7Z59zyoY3YNZnE2TtT0QeOAZWmL2lKdQslYGpy6CmSRZtxx4SYmqXCEQn0eHlad8AIlbuosemUDryUn&X-Amz-Signature=70a95a404ab4a6591e1236a6dba2fa33721158c934eef14da73affd1acb9e153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

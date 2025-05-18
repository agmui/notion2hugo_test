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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBRCUAY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo7aUSjH2RO9NWSMS43Xm1G0jH2YCwzwBRS6LupQKbHAiAoTsWO%2FCdyzzqOAIjeZoCk8lRqMmPyocvcsC0%2F9MO5Gyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMHhW0CIlQgXhDDUS5KtwDFDfP7OY5R%2B5lFPEPi%2Brpn6VxwGxDvn2ajQ%2FRGTgX2pMePDIOVXLUI%2BJLBT7eqxrAnJulaHwBe4MOC3KBSZHw7Jl0Xr7mGZw%2F1ILFVMmziE14vXugMrh1WjBZtywXNr0hlwEdXIwbZ4hllxogfoUMHQE7VqB6LoazO3SxpPSTAuPluuMGcCl3ywjosOH7qu7SEMEuysEibQ48%2Byk4fo%2FroYA2X%2BnS%2FgzJaXD515s%2BznKhgMwrKVehMunY5XMZANhhurxPcUCkv1awXFtrO9esRaCsEM0DvRpB4JVJS4vkAW4SnJ8Pbc7aUq%2FEfhVfskBqBzO0FQgc4EfIGCxyc6LN1hLIA6k4lOKTmmxeI3zAPs%2Fmg5g5T5%2BDsie5Ctth9kxYX20oZYwf%2BtlF7BoJtEXQOGQbgUJpwlUi8F%2FCrKPGKPOPR84LWsncuvimG4xixDtUlTkwXaqGHtXpEBb3ZoGJzESihM1InuHbLv6zG8RTKX5LdTolMpCAdN6AGGG1OprLGeS8zN6fEQ6lyphX7qnI5yPY6nr88qVQnlAe8BOdP3OB2ODiXOA2ST7s1%2FxjEdNOu1T2z2%2Fp2Kmi%2FlG1Sjbm56tug2ZqqszVlY5%2BmTSPayo7Mo1tNhLkm2xlUnEwr9ekwQY6pgFZ%2Bb5mKhFYzDonWJW2Wu6r78uBeCexNo1RUMMgpCSd%2FLr%2F6v6JnGpaF1AMn2XDkkQRgjqNImC%2FRG4%2BftoILRZnRPGPlAmwlb%2BtY0kRq99zCt3Aw2Eu%2B8Smv6uH5jaiXjt1vFSQUtdCruJ%2FqsEnZnAwantbOrqIr3bqwAn3l1lBZ1onrHe0h3zgBwOklZ75nKhlUByvw2jGRBLZOWeojDipsT0EoDyH&X-Amz-Signature=fe6d981b11aefbc4688c0acdfafce6eb61cac13eca8c110114172a75a91f640a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBRCUAY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo7aUSjH2RO9NWSMS43Xm1G0jH2YCwzwBRS6LupQKbHAiAoTsWO%2FCdyzzqOAIjeZoCk8lRqMmPyocvcsC0%2F9MO5Gyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMHhW0CIlQgXhDDUS5KtwDFDfP7OY5R%2B5lFPEPi%2Brpn6VxwGxDvn2ajQ%2FRGTgX2pMePDIOVXLUI%2BJLBT7eqxrAnJulaHwBe4MOC3KBSZHw7Jl0Xr7mGZw%2F1ILFVMmziE14vXugMrh1WjBZtywXNr0hlwEdXIwbZ4hllxogfoUMHQE7VqB6LoazO3SxpPSTAuPluuMGcCl3ywjosOH7qu7SEMEuysEibQ48%2Byk4fo%2FroYA2X%2BnS%2FgzJaXD515s%2BznKhgMwrKVehMunY5XMZANhhurxPcUCkv1awXFtrO9esRaCsEM0DvRpB4JVJS4vkAW4SnJ8Pbc7aUq%2FEfhVfskBqBzO0FQgc4EfIGCxyc6LN1hLIA6k4lOKTmmxeI3zAPs%2Fmg5g5T5%2BDsie5Ctth9kxYX20oZYwf%2BtlF7BoJtEXQOGQbgUJpwlUi8F%2FCrKPGKPOPR84LWsncuvimG4xixDtUlTkwXaqGHtXpEBb3ZoGJzESihM1InuHbLv6zG8RTKX5LdTolMpCAdN6AGGG1OprLGeS8zN6fEQ6lyphX7qnI5yPY6nr88qVQnlAe8BOdP3OB2ODiXOA2ST7s1%2FxjEdNOu1T2z2%2Fp2Kmi%2FlG1Sjbm56tug2ZqqszVlY5%2BmTSPayo7Mo1tNhLkm2xlUnEwr9ekwQY6pgFZ%2Bb5mKhFYzDonWJW2Wu6r78uBeCexNo1RUMMgpCSd%2FLr%2F6v6JnGpaF1AMn2XDkkQRgjqNImC%2FRG4%2BftoILRZnRPGPlAmwlb%2BtY0kRq99zCt3Aw2Eu%2B8Smv6uH5jaiXjt1vFSQUtdCruJ%2FqsEnZnAwantbOrqIr3bqwAn3l1lBZ1onrHe0h3zgBwOklZ75nKhlUByvw2jGRBLZOWeojDipsT0EoDyH&X-Amz-Signature=090a0384e9998c3478f012f9f28daaf0ea31658ba0dd70b7191c9729abf76cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBRCUAY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo7aUSjH2RO9NWSMS43Xm1G0jH2YCwzwBRS6LupQKbHAiAoTsWO%2FCdyzzqOAIjeZoCk8lRqMmPyocvcsC0%2F9MO5Gyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMHhW0CIlQgXhDDUS5KtwDFDfP7OY5R%2B5lFPEPi%2Brpn6VxwGxDvn2ajQ%2FRGTgX2pMePDIOVXLUI%2BJLBT7eqxrAnJulaHwBe4MOC3KBSZHw7Jl0Xr7mGZw%2F1ILFVMmziE14vXugMrh1WjBZtywXNr0hlwEdXIwbZ4hllxogfoUMHQE7VqB6LoazO3SxpPSTAuPluuMGcCl3ywjosOH7qu7SEMEuysEibQ48%2Byk4fo%2FroYA2X%2BnS%2FgzJaXD515s%2BznKhgMwrKVehMunY5XMZANhhurxPcUCkv1awXFtrO9esRaCsEM0DvRpB4JVJS4vkAW4SnJ8Pbc7aUq%2FEfhVfskBqBzO0FQgc4EfIGCxyc6LN1hLIA6k4lOKTmmxeI3zAPs%2Fmg5g5T5%2BDsie5Ctth9kxYX20oZYwf%2BtlF7BoJtEXQOGQbgUJpwlUi8F%2FCrKPGKPOPR84LWsncuvimG4xixDtUlTkwXaqGHtXpEBb3ZoGJzESihM1InuHbLv6zG8RTKX5LdTolMpCAdN6AGGG1OprLGeS8zN6fEQ6lyphX7qnI5yPY6nr88qVQnlAe8BOdP3OB2ODiXOA2ST7s1%2FxjEdNOu1T2z2%2Fp2Kmi%2FlG1Sjbm56tug2ZqqszVlY5%2BmTSPayo7Mo1tNhLkm2xlUnEwr9ekwQY6pgFZ%2Bb5mKhFYzDonWJW2Wu6r78uBeCexNo1RUMMgpCSd%2FLr%2F6v6JnGpaF1AMn2XDkkQRgjqNImC%2FRG4%2BftoILRZnRPGPlAmwlb%2BtY0kRq99zCt3Aw2Eu%2B8Smv6uH5jaiXjt1vFSQUtdCruJ%2FqsEnZnAwantbOrqIr3bqwAn3l1lBZ1onrHe0h3zgBwOklZ75nKhlUByvw2jGRBLZOWeojDipsT0EoDyH&X-Amz-Signature=868e085224c545a1739fbd6f017f6c3ea7b822604884ea20a1edd39075bafe47&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBRCUAY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo7aUSjH2RO9NWSMS43Xm1G0jH2YCwzwBRS6LupQKbHAiAoTsWO%2FCdyzzqOAIjeZoCk8lRqMmPyocvcsC0%2F9MO5Gyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMHhW0CIlQgXhDDUS5KtwDFDfP7OY5R%2B5lFPEPi%2Brpn6VxwGxDvn2ajQ%2FRGTgX2pMePDIOVXLUI%2BJLBT7eqxrAnJulaHwBe4MOC3KBSZHw7Jl0Xr7mGZw%2F1ILFVMmziE14vXugMrh1WjBZtywXNr0hlwEdXIwbZ4hllxogfoUMHQE7VqB6LoazO3SxpPSTAuPluuMGcCl3ywjosOH7qu7SEMEuysEibQ48%2Byk4fo%2FroYA2X%2BnS%2FgzJaXD515s%2BznKhgMwrKVehMunY5XMZANhhurxPcUCkv1awXFtrO9esRaCsEM0DvRpB4JVJS4vkAW4SnJ8Pbc7aUq%2FEfhVfskBqBzO0FQgc4EfIGCxyc6LN1hLIA6k4lOKTmmxeI3zAPs%2Fmg5g5T5%2BDsie5Ctth9kxYX20oZYwf%2BtlF7BoJtEXQOGQbgUJpwlUi8F%2FCrKPGKPOPR84LWsncuvimG4xixDtUlTkwXaqGHtXpEBb3ZoGJzESihM1InuHbLv6zG8RTKX5LdTolMpCAdN6AGGG1OprLGeS8zN6fEQ6lyphX7qnI5yPY6nr88qVQnlAe8BOdP3OB2ODiXOA2ST7s1%2FxjEdNOu1T2z2%2Fp2Kmi%2FlG1Sjbm56tug2ZqqszVlY5%2BmTSPayo7Mo1tNhLkm2xlUnEwr9ekwQY6pgFZ%2Bb5mKhFYzDonWJW2Wu6r78uBeCexNo1RUMMgpCSd%2FLr%2F6v6JnGpaF1AMn2XDkkQRgjqNImC%2FRG4%2BftoILRZnRPGPlAmwlb%2BtY0kRq99zCt3Aw2Eu%2B8Smv6uH5jaiXjt1vFSQUtdCruJ%2FqsEnZnAwantbOrqIr3bqwAn3l1lBZ1onrHe0h3zgBwOklZ75nKhlUByvw2jGRBLZOWeojDipsT0EoDyH&X-Amz-Signature=a77b516d538dd95044365d14fdef0040b5ee08bd7f6da472fb1a549f090eb550&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBRCUAY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo7aUSjH2RO9NWSMS43Xm1G0jH2YCwzwBRS6LupQKbHAiAoTsWO%2FCdyzzqOAIjeZoCk8lRqMmPyocvcsC0%2F9MO5Gyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMHhW0CIlQgXhDDUS5KtwDFDfP7OY5R%2B5lFPEPi%2Brpn6VxwGxDvn2ajQ%2FRGTgX2pMePDIOVXLUI%2BJLBT7eqxrAnJulaHwBe4MOC3KBSZHw7Jl0Xr7mGZw%2F1ILFVMmziE14vXugMrh1WjBZtywXNr0hlwEdXIwbZ4hllxogfoUMHQE7VqB6LoazO3SxpPSTAuPluuMGcCl3ywjosOH7qu7SEMEuysEibQ48%2Byk4fo%2FroYA2X%2BnS%2FgzJaXD515s%2BznKhgMwrKVehMunY5XMZANhhurxPcUCkv1awXFtrO9esRaCsEM0DvRpB4JVJS4vkAW4SnJ8Pbc7aUq%2FEfhVfskBqBzO0FQgc4EfIGCxyc6LN1hLIA6k4lOKTmmxeI3zAPs%2Fmg5g5T5%2BDsie5Ctth9kxYX20oZYwf%2BtlF7BoJtEXQOGQbgUJpwlUi8F%2FCrKPGKPOPR84LWsncuvimG4xixDtUlTkwXaqGHtXpEBb3ZoGJzESihM1InuHbLv6zG8RTKX5LdTolMpCAdN6AGGG1OprLGeS8zN6fEQ6lyphX7qnI5yPY6nr88qVQnlAe8BOdP3OB2ODiXOA2ST7s1%2FxjEdNOu1T2z2%2Fp2Kmi%2FlG1Sjbm56tug2ZqqszVlY5%2BmTSPayo7Mo1tNhLkm2xlUnEwr9ekwQY6pgFZ%2Bb5mKhFYzDonWJW2Wu6r78uBeCexNo1RUMMgpCSd%2FLr%2F6v6JnGpaF1AMn2XDkkQRgjqNImC%2FRG4%2BftoILRZnRPGPlAmwlb%2BtY0kRq99zCt3Aw2Eu%2B8Smv6uH5jaiXjt1vFSQUtdCruJ%2FqsEnZnAwantbOrqIr3bqwAn3l1lBZ1onrHe0h3zgBwOklZ75nKhlUByvw2jGRBLZOWeojDipsT0EoDyH&X-Amz-Signature=91b1ae2de458b94dab04e2ab9051c89e335025581266439c313c6efdfe09b440&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBRCUAY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo7aUSjH2RO9NWSMS43Xm1G0jH2YCwzwBRS6LupQKbHAiAoTsWO%2FCdyzzqOAIjeZoCk8lRqMmPyocvcsC0%2F9MO5Gyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMHhW0CIlQgXhDDUS5KtwDFDfP7OY5R%2B5lFPEPi%2Brpn6VxwGxDvn2ajQ%2FRGTgX2pMePDIOVXLUI%2BJLBT7eqxrAnJulaHwBe4MOC3KBSZHw7Jl0Xr7mGZw%2F1ILFVMmziE14vXugMrh1WjBZtywXNr0hlwEdXIwbZ4hllxogfoUMHQE7VqB6LoazO3SxpPSTAuPluuMGcCl3ywjosOH7qu7SEMEuysEibQ48%2Byk4fo%2FroYA2X%2BnS%2FgzJaXD515s%2BznKhgMwrKVehMunY5XMZANhhurxPcUCkv1awXFtrO9esRaCsEM0DvRpB4JVJS4vkAW4SnJ8Pbc7aUq%2FEfhVfskBqBzO0FQgc4EfIGCxyc6LN1hLIA6k4lOKTmmxeI3zAPs%2Fmg5g5T5%2BDsie5Ctth9kxYX20oZYwf%2BtlF7BoJtEXQOGQbgUJpwlUi8F%2FCrKPGKPOPR84LWsncuvimG4xixDtUlTkwXaqGHtXpEBb3ZoGJzESihM1InuHbLv6zG8RTKX5LdTolMpCAdN6AGGG1OprLGeS8zN6fEQ6lyphX7qnI5yPY6nr88qVQnlAe8BOdP3OB2ODiXOA2ST7s1%2FxjEdNOu1T2z2%2Fp2Kmi%2FlG1Sjbm56tug2ZqqszVlY5%2BmTSPayo7Mo1tNhLkm2xlUnEwr9ekwQY6pgFZ%2Bb5mKhFYzDonWJW2Wu6r78uBeCexNo1RUMMgpCSd%2FLr%2F6v6JnGpaF1AMn2XDkkQRgjqNImC%2FRG4%2BftoILRZnRPGPlAmwlb%2BtY0kRq99zCt3Aw2Eu%2B8Smv6uH5jaiXjt1vFSQUtdCruJ%2FqsEnZnAwantbOrqIr3bqwAn3l1lBZ1onrHe0h3zgBwOklZ75nKhlUByvw2jGRBLZOWeojDipsT0EoDyH&X-Amz-Signature=e19ab8137dc1ff8574312e2dd7d610af5c69758ebf52365d63d8d0ab0561118f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBRCUAY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo7aUSjH2RO9NWSMS43Xm1G0jH2YCwzwBRS6LupQKbHAiAoTsWO%2FCdyzzqOAIjeZoCk8lRqMmPyocvcsC0%2F9MO5Gyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMHhW0CIlQgXhDDUS5KtwDFDfP7OY5R%2B5lFPEPi%2Brpn6VxwGxDvn2ajQ%2FRGTgX2pMePDIOVXLUI%2BJLBT7eqxrAnJulaHwBe4MOC3KBSZHw7Jl0Xr7mGZw%2F1ILFVMmziE14vXugMrh1WjBZtywXNr0hlwEdXIwbZ4hllxogfoUMHQE7VqB6LoazO3SxpPSTAuPluuMGcCl3ywjosOH7qu7SEMEuysEibQ48%2Byk4fo%2FroYA2X%2BnS%2FgzJaXD515s%2BznKhgMwrKVehMunY5XMZANhhurxPcUCkv1awXFtrO9esRaCsEM0DvRpB4JVJS4vkAW4SnJ8Pbc7aUq%2FEfhVfskBqBzO0FQgc4EfIGCxyc6LN1hLIA6k4lOKTmmxeI3zAPs%2Fmg5g5T5%2BDsie5Ctth9kxYX20oZYwf%2BtlF7BoJtEXQOGQbgUJpwlUi8F%2FCrKPGKPOPR84LWsncuvimG4xixDtUlTkwXaqGHtXpEBb3ZoGJzESihM1InuHbLv6zG8RTKX5LdTolMpCAdN6AGGG1OprLGeS8zN6fEQ6lyphX7qnI5yPY6nr88qVQnlAe8BOdP3OB2ODiXOA2ST7s1%2FxjEdNOu1T2z2%2Fp2Kmi%2FlG1Sjbm56tug2ZqqszVlY5%2BmTSPayo7Mo1tNhLkm2xlUnEwr9ekwQY6pgFZ%2Bb5mKhFYzDonWJW2Wu6r78uBeCexNo1RUMMgpCSd%2FLr%2F6v6JnGpaF1AMn2XDkkQRgjqNImC%2FRG4%2BftoILRZnRPGPlAmwlb%2BtY0kRq99zCt3Aw2Eu%2B8Smv6uH5jaiXjt1vFSQUtdCruJ%2FqsEnZnAwantbOrqIr3bqwAn3l1lBZ1onrHe0h3zgBwOklZ75nKhlUByvw2jGRBLZOWeojDipsT0EoDyH&X-Amz-Signature=0b4582dd4173a1f635c48cd215e6efdd4228c6266a3724a75f36bc144eca2f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBRCUAY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo7aUSjH2RO9NWSMS43Xm1G0jH2YCwzwBRS6LupQKbHAiAoTsWO%2FCdyzzqOAIjeZoCk8lRqMmPyocvcsC0%2F9MO5Gyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMHhW0CIlQgXhDDUS5KtwDFDfP7OY5R%2B5lFPEPi%2Brpn6VxwGxDvn2ajQ%2FRGTgX2pMePDIOVXLUI%2BJLBT7eqxrAnJulaHwBe4MOC3KBSZHw7Jl0Xr7mGZw%2F1ILFVMmziE14vXugMrh1WjBZtywXNr0hlwEdXIwbZ4hllxogfoUMHQE7VqB6LoazO3SxpPSTAuPluuMGcCl3ywjosOH7qu7SEMEuysEibQ48%2Byk4fo%2FroYA2X%2BnS%2FgzJaXD515s%2BznKhgMwrKVehMunY5XMZANhhurxPcUCkv1awXFtrO9esRaCsEM0DvRpB4JVJS4vkAW4SnJ8Pbc7aUq%2FEfhVfskBqBzO0FQgc4EfIGCxyc6LN1hLIA6k4lOKTmmxeI3zAPs%2Fmg5g5T5%2BDsie5Ctth9kxYX20oZYwf%2BtlF7BoJtEXQOGQbgUJpwlUi8F%2FCrKPGKPOPR84LWsncuvimG4xixDtUlTkwXaqGHtXpEBb3ZoGJzESihM1InuHbLv6zG8RTKX5LdTolMpCAdN6AGGG1OprLGeS8zN6fEQ6lyphX7qnI5yPY6nr88qVQnlAe8BOdP3OB2ODiXOA2ST7s1%2FxjEdNOu1T2z2%2Fp2Kmi%2FlG1Sjbm56tug2ZqqszVlY5%2BmTSPayo7Mo1tNhLkm2xlUnEwr9ekwQY6pgFZ%2Bb5mKhFYzDonWJW2Wu6r78uBeCexNo1RUMMgpCSd%2FLr%2F6v6JnGpaF1AMn2XDkkQRgjqNImC%2FRG4%2BftoILRZnRPGPlAmwlb%2BtY0kRq99zCt3Aw2Eu%2B8Smv6uH5jaiXjt1vFSQUtdCruJ%2FqsEnZnAwantbOrqIr3bqwAn3l1lBZ1onrHe0h3zgBwOklZ75nKhlUByvw2jGRBLZOWeojDipsT0EoDyH&X-Amz-Signature=f461c5f24be5a1e62c7756ae8cf66d24db70b43de822f602f56abf496dbc9da9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

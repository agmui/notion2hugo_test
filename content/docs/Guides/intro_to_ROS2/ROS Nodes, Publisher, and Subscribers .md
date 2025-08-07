---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575W5YGU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBhj2cwnWlb8%2F6JQFrHRdAHNu%2FW%2BL5yS%2B3yIh6d6reaFAiBVQJxQvM3IDsGZXFXE0%2FGpAW%2BlSTFSQ3kkMoXf%2B5QWIyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMww0EkPToHqepAAP3KtwD%2F0LvW%2BHng5aEXh%2FQK2Vp44U9O6syTDi8TI5zeA2CCXd2i9h2P%2Fxwg0N0FlNha3JLhLFhiznUW3iNKNdYy407ou4cLsiJjdzIQnd%2BN3enM15JLHtSrXr4yAjMXvzfPuJN9XGC8yFg1MsP2BHyN%2BxHf9qW%2FCokfetFXErPhugYTCeYo2IABsZjx7vHO81Q9aGQh93FCpgmXvgwh4GK0M55CyFyqphxUZJovMMCFNQ2KabmFWa3DOwnfSmSfs%2BdvH56fnWaYE3aPWcFOUa45XfsXyJsMfrYrounG8UFYdCwaNMHVCoTZBEer5vbKOrw%2BsiZmGVO5VStHMkvoQ4GNl0zF6ZZAjrHgBjYcuJXhHK3uBlV8g7iWHWRUD6iBMnfNRPSPs547zrzOP158C44xakhlaA9dwgx1dE3dymCPmK3DAdqTrWdQkRSeLBlAcN3aYe0cLdS3czK8xn7jhSeC3tnlSSUHSWsquvqQmYpD%2FOWIV6E2n%2BMzgAdSZLgtUuNXcqJZOOdkm%2Flra4vZYXH%2FcQ6GJIpkMY0t0lcJsuoHw6WD%2BCZrnNQWX0QWuVsnIhkxpjMz3xrAhE9pnMotP1mcRmprb40tUZ6gCQWN6XpcjKtMygwxmujVBOVwa3lR3Ywwe7TxAY6pgH81HmGYFH9oX%2FCRDZiXqxYwKg2lz106ZZELbc0bonx4Dotn%2F%2BA%2FmqKrvC6ivk4LERI3Sn75pbP6zo4bnyfiR2CoFaJk9Zdr7lZnxMJFo%2BW4v0hA7WHmIE2mRGNoYuQqSFuOEyWP%2B7wwa3VYFUFHe28JT2n%2BrGcFrHaa%2Bj9n2vn3oWPNhkOSxqcEeNvSFpuPdN%2F1dQW%2FuhMk1CLCPSCn76i8eZSTcug&X-Amz-Signature=6ac0ac783cc04f0c56ce3389d47c60c78d06a6fbf15bcbe446de587eb635471a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575W5YGU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBhj2cwnWlb8%2F6JQFrHRdAHNu%2FW%2BL5yS%2B3yIh6d6reaFAiBVQJxQvM3IDsGZXFXE0%2FGpAW%2BlSTFSQ3kkMoXf%2B5QWIyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMww0EkPToHqepAAP3KtwD%2F0LvW%2BHng5aEXh%2FQK2Vp44U9O6syTDi8TI5zeA2CCXd2i9h2P%2Fxwg0N0FlNha3JLhLFhiznUW3iNKNdYy407ou4cLsiJjdzIQnd%2BN3enM15JLHtSrXr4yAjMXvzfPuJN9XGC8yFg1MsP2BHyN%2BxHf9qW%2FCokfetFXErPhugYTCeYo2IABsZjx7vHO81Q9aGQh93FCpgmXvgwh4GK0M55CyFyqphxUZJovMMCFNQ2KabmFWa3DOwnfSmSfs%2BdvH56fnWaYE3aPWcFOUa45XfsXyJsMfrYrounG8UFYdCwaNMHVCoTZBEer5vbKOrw%2BsiZmGVO5VStHMkvoQ4GNl0zF6ZZAjrHgBjYcuJXhHK3uBlV8g7iWHWRUD6iBMnfNRPSPs547zrzOP158C44xakhlaA9dwgx1dE3dymCPmK3DAdqTrWdQkRSeLBlAcN3aYe0cLdS3czK8xn7jhSeC3tnlSSUHSWsquvqQmYpD%2FOWIV6E2n%2BMzgAdSZLgtUuNXcqJZOOdkm%2Flra4vZYXH%2FcQ6GJIpkMY0t0lcJsuoHw6WD%2BCZrnNQWX0QWuVsnIhkxpjMz3xrAhE9pnMotP1mcRmprb40tUZ6gCQWN6XpcjKtMygwxmujVBOVwa3lR3Ywwe7TxAY6pgH81HmGYFH9oX%2FCRDZiXqxYwKg2lz106ZZELbc0bonx4Dotn%2F%2BA%2FmqKrvC6ivk4LERI3Sn75pbP6zo4bnyfiR2CoFaJk9Zdr7lZnxMJFo%2BW4v0hA7WHmIE2mRGNoYuQqSFuOEyWP%2B7wwa3VYFUFHe28JT2n%2BrGcFrHaa%2Bj9n2vn3oWPNhkOSxqcEeNvSFpuPdN%2F1dQW%2FuhMk1CLCPSCn76i8eZSTcug&X-Amz-Signature=646526a3c81bc9a02b228cea9c98b5a1bbb964d2493bf5d979fae4d91d31e205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575W5YGU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBhj2cwnWlb8%2F6JQFrHRdAHNu%2FW%2BL5yS%2B3yIh6d6reaFAiBVQJxQvM3IDsGZXFXE0%2FGpAW%2BlSTFSQ3kkMoXf%2B5QWIyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMww0EkPToHqepAAP3KtwD%2F0LvW%2BHng5aEXh%2FQK2Vp44U9O6syTDi8TI5zeA2CCXd2i9h2P%2Fxwg0N0FlNha3JLhLFhiznUW3iNKNdYy407ou4cLsiJjdzIQnd%2BN3enM15JLHtSrXr4yAjMXvzfPuJN9XGC8yFg1MsP2BHyN%2BxHf9qW%2FCokfetFXErPhugYTCeYo2IABsZjx7vHO81Q9aGQh93FCpgmXvgwh4GK0M55CyFyqphxUZJovMMCFNQ2KabmFWa3DOwnfSmSfs%2BdvH56fnWaYE3aPWcFOUa45XfsXyJsMfrYrounG8UFYdCwaNMHVCoTZBEer5vbKOrw%2BsiZmGVO5VStHMkvoQ4GNl0zF6ZZAjrHgBjYcuJXhHK3uBlV8g7iWHWRUD6iBMnfNRPSPs547zrzOP158C44xakhlaA9dwgx1dE3dymCPmK3DAdqTrWdQkRSeLBlAcN3aYe0cLdS3czK8xn7jhSeC3tnlSSUHSWsquvqQmYpD%2FOWIV6E2n%2BMzgAdSZLgtUuNXcqJZOOdkm%2Flra4vZYXH%2FcQ6GJIpkMY0t0lcJsuoHw6WD%2BCZrnNQWX0QWuVsnIhkxpjMz3xrAhE9pnMotP1mcRmprb40tUZ6gCQWN6XpcjKtMygwxmujVBOVwa3lR3Ywwe7TxAY6pgH81HmGYFH9oX%2FCRDZiXqxYwKg2lz106ZZELbc0bonx4Dotn%2F%2BA%2FmqKrvC6ivk4LERI3Sn75pbP6zo4bnyfiR2CoFaJk9Zdr7lZnxMJFo%2BW4v0hA7WHmIE2mRGNoYuQqSFuOEyWP%2B7wwa3VYFUFHe28JT2n%2BrGcFrHaa%2Bj9n2vn3oWPNhkOSxqcEeNvSFpuPdN%2F1dQW%2FuhMk1CLCPSCn76i8eZSTcug&X-Amz-Signature=45a120bd4223064d0fe0bf7901e45e38c821e1b8e6d0b225186e5cb95039fe5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575W5YGU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBhj2cwnWlb8%2F6JQFrHRdAHNu%2FW%2BL5yS%2B3yIh6d6reaFAiBVQJxQvM3IDsGZXFXE0%2FGpAW%2BlSTFSQ3kkMoXf%2B5QWIyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMww0EkPToHqepAAP3KtwD%2F0LvW%2BHng5aEXh%2FQK2Vp44U9O6syTDi8TI5zeA2CCXd2i9h2P%2Fxwg0N0FlNha3JLhLFhiznUW3iNKNdYy407ou4cLsiJjdzIQnd%2BN3enM15JLHtSrXr4yAjMXvzfPuJN9XGC8yFg1MsP2BHyN%2BxHf9qW%2FCokfetFXErPhugYTCeYo2IABsZjx7vHO81Q9aGQh93FCpgmXvgwh4GK0M55CyFyqphxUZJovMMCFNQ2KabmFWa3DOwnfSmSfs%2BdvH56fnWaYE3aPWcFOUa45XfsXyJsMfrYrounG8UFYdCwaNMHVCoTZBEer5vbKOrw%2BsiZmGVO5VStHMkvoQ4GNl0zF6ZZAjrHgBjYcuJXhHK3uBlV8g7iWHWRUD6iBMnfNRPSPs547zrzOP158C44xakhlaA9dwgx1dE3dymCPmK3DAdqTrWdQkRSeLBlAcN3aYe0cLdS3czK8xn7jhSeC3tnlSSUHSWsquvqQmYpD%2FOWIV6E2n%2BMzgAdSZLgtUuNXcqJZOOdkm%2Flra4vZYXH%2FcQ6GJIpkMY0t0lcJsuoHw6WD%2BCZrnNQWX0QWuVsnIhkxpjMz3xrAhE9pnMotP1mcRmprb40tUZ6gCQWN6XpcjKtMygwxmujVBOVwa3lR3Ywwe7TxAY6pgH81HmGYFH9oX%2FCRDZiXqxYwKg2lz106ZZELbc0bonx4Dotn%2F%2BA%2FmqKrvC6ivk4LERI3Sn75pbP6zo4bnyfiR2CoFaJk9Zdr7lZnxMJFo%2BW4v0hA7WHmIE2mRGNoYuQqSFuOEyWP%2B7wwa3VYFUFHe28JT2n%2BrGcFrHaa%2Bj9n2vn3oWPNhkOSxqcEeNvSFpuPdN%2F1dQW%2FuhMk1CLCPSCn76i8eZSTcug&X-Amz-Signature=7107a3d47a35f9293f922c1a3265a9473ade91703d49919679f2659f404ff588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575W5YGU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBhj2cwnWlb8%2F6JQFrHRdAHNu%2FW%2BL5yS%2B3yIh6d6reaFAiBVQJxQvM3IDsGZXFXE0%2FGpAW%2BlSTFSQ3kkMoXf%2B5QWIyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMww0EkPToHqepAAP3KtwD%2F0LvW%2BHng5aEXh%2FQK2Vp44U9O6syTDi8TI5zeA2CCXd2i9h2P%2Fxwg0N0FlNha3JLhLFhiznUW3iNKNdYy407ou4cLsiJjdzIQnd%2BN3enM15JLHtSrXr4yAjMXvzfPuJN9XGC8yFg1MsP2BHyN%2BxHf9qW%2FCokfetFXErPhugYTCeYo2IABsZjx7vHO81Q9aGQh93FCpgmXvgwh4GK0M55CyFyqphxUZJovMMCFNQ2KabmFWa3DOwnfSmSfs%2BdvH56fnWaYE3aPWcFOUa45XfsXyJsMfrYrounG8UFYdCwaNMHVCoTZBEer5vbKOrw%2BsiZmGVO5VStHMkvoQ4GNl0zF6ZZAjrHgBjYcuJXhHK3uBlV8g7iWHWRUD6iBMnfNRPSPs547zrzOP158C44xakhlaA9dwgx1dE3dymCPmK3DAdqTrWdQkRSeLBlAcN3aYe0cLdS3czK8xn7jhSeC3tnlSSUHSWsquvqQmYpD%2FOWIV6E2n%2BMzgAdSZLgtUuNXcqJZOOdkm%2Flra4vZYXH%2FcQ6GJIpkMY0t0lcJsuoHw6WD%2BCZrnNQWX0QWuVsnIhkxpjMz3xrAhE9pnMotP1mcRmprb40tUZ6gCQWN6XpcjKtMygwxmujVBOVwa3lR3Ywwe7TxAY6pgH81HmGYFH9oX%2FCRDZiXqxYwKg2lz106ZZELbc0bonx4Dotn%2F%2BA%2FmqKrvC6ivk4LERI3Sn75pbP6zo4bnyfiR2CoFaJk9Zdr7lZnxMJFo%2BW4v0hA7WHmIE2mRGNoYuQqSFuOEyWP%2B7wwa3VYFUFHe28JT2n%2BrGcFrHaa%2Bj9n2vn3oWPNhkOSxqcEeNvSFpuPdN%2F1dQW%2FuhMk1CLCPSCn76i8eZSTcug&X-Amz-Signature=b9c960f158360af16c9b57ce87fb2f51c4fce52eb87bf85dc57a6623c32ac5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575W5YGU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBhj2cwnWlb8%2F6JQFrHRdAHNu%2FW%2BL5yS%2B3yIh6d6reaFAiBVQJxQvM3IDsGZXFXE0%2FGpAW%2BlSTFSQ3kkMoXf%2B5QWIyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMww0EkPToHqepAAP3KtwD%2F0LvW%2BHng5aEXh%2FQK2Vp44U9O6syTDi8TI5zeA2CCXd2i9h2P%2Fxwg0N0FlNha3JLhLFhiznUW3iNKNdYy407ou4cLsiJjdzIQnd%2BN3enM15JLHtSrXr4yAjMXvzfPuJN9XGC8yFg1MsP2BHyN%2BxHf9qW%2FCokfetFXErPhugYTCeYo2IABsZjx7vHO81Q9aGQh93FCpgmXvgwh4GK0M55CyFyqphxUZJovMMCFNQ2KabmFWa3DOwnfSmSfs%2BdvH56fnWaYE3aPWcFOUa45XfsXyJsMfrYrounG8UFYdCwaNMHVCoTZBEer5vbKOrw%2BsiZmGVO5VStHMkvoQ4GNl0zF6ZZAjrHgBjYcuJXhHK3uBlV8g7iWHWRUD6iBMnfNRPSPs547zrzOP158C44xakhlaA9dwgx1dE3dymCPmK3DAdqTrWdQkRSeLBlAcN3aYe0cLdS3czK8xn7jhSeC3tnlSSUHSWsquvqQmYpD%2FOWIV6E2n%2BMzgAdSZLgtUuNXcqJZOOdkm%2Flra4vZYXH%2FcQ6GJIpkMY0t0lcJsuoHw6WD%2BCZrnNQWX0QWuVsnIhkxpjMz3xrAhE9pnMotP1mcRmprb40tUZ6gCQWN6XpcjKtMygwxmujVBOVwa3lR3Ywwe7TxAY6pgH81HmGYFH9oX%2FCRDZiXqxYwKg2lz106ZZELbc0bonx4Dotn%2F%2BA%2FmqKrvC6ivk4LERI3Sn75pbP6zo4bnyfiR2CoFaJk9Zdr7lZnxMJFo%2BW4v0hA7WHmIE2mRGNoYuQqSFuOEyWP%2B7wwa3VYFUFHe28JT2n%2BrGcFrHaa%2Bj9n2vn3oWPNhkOSxqcEeNvSFpuPdN%2F1dQW%2FuhMk1CLCPSCn76i8eZSTcug&X-Amz-Signature=e65215fbcc4b39a4e363d2a96f461f3cf2eb2db0c1746ede772f10e995d8d8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575W5YGU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBhj2cwnWlb8%2F6JQFrHRdAHNu%2FW%2BL5yS%2B3yIh6d6reaFAiBVQJxQvM3IDsGZXFXE0%2FGpAW%2BlSTFSQ3kkMoXf%2B5QWIyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMww0EkPToHqepAAP3KtwD%2F0LvW%2BHng5aEXh%2FQK2Vp44U9O6syTDi8TI5zeA2CCXd2i9h2P%2Fxwg0N0FlNha3JLhLFhiznUW3iNKNdYy407ou4cLsiJjdzIQnd%2BN3enM15JLHtSrXr4yAjMXvzfPuJN9XGC8yFg1MsP2BHyN%2BxHf9qW%2FCokfetFXErPhugYTCeYo2IABsZjx7vHO81Q9aGQh93FCpgmXvgwh4GK0M55CyFyqphxUZJovMMCFNQ2KabmFWa3DOwnfSmSfs%2BdvH56fnWaYE3aPWcFOUa45XfsXyJsMfrYrounG8UFYdCwaNMHVCoTZBEer5vbKOrw%2BsiZmGVO5VStHMkvoQ4GNl0zF6ZZAjrHgBjYcuJXhHK3uBlV8g7iWHWRUD6iBMnfNRPSPs547zrzOP158C44xakhlaA9dwgx1dE3dymCPmK3DAdqTrWdQkRSeLBlAcN3aYe0cLdS3czK8xn7jhSeC3tnlSSUHSWsquvqQmYpD%2FOWIV6E2n%2BMzgAdSZLgtUuNXcqJZOOdkm%2Flra4vZYXH%2FcQ6GJIpkMY0t0lcJsuoHw6WD%2BCZrnNQWX0QWuVsnIhkxpjMz3xrAhE9pnMotP1mcRmprb40tUZ6gCQWN6XpcjKtMygwxmujVBOVwa3lR3Ywwe7TxAY6pgH81HmGYFH9oX%2FCRDZiXqxYwKg2lz106ZZELbc0bonx4Dotn%2F%2BA%2FmqKrvC6ivk4LERI3Sn75pbP6zo4bnyfiR2CoFaJk9Zdr7lZnxMJFo%2BW4v0hA7WHmIE2mRGNoYuQqSFuOEyWP%2B7wwa3VYFUFHe28JT2n%2BrGcFrHaa%2Bj9n2vn3oWPNhkOSxqcEeNvSFpuPdN%2F1dQW%2FuhMk1CLCPSCn76i8eZSTcug&X-Amz-Signature=8436f0a33bb88e6c6a9fc8bfb70c62742be152dd84d03d59f5a6bd1be3e39461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575W5YGU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBhj2cwnWlb8%2F6JQFrHRdAHNu%2FW%2BL5yS%2B3yIh6d6reaFAiBVQJxQvM3IDsGZXFXE0%2FGpAW%2BlSTFSQ3kkMoXf%2B5QWIyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMww0EkPToHqepAAP3KtwD%2F0LvW%2BHng5aEXh%2FQK2Vp44U9O6syTDi8TI5zeA2CCXd2i9h2P%2Fxwg0N0FlNha3JLhLFhiznUW3iNKNdYy407ou4cLsiJjdzIQnd%2BN3enM15JLHtSrXr4yAjMXvzfPuJN9XGC8yFg1MsP2BHyN%2BxHf9qW%2FCokfetFXErPhugYTCeYo2IABsZjx7vHO81Q9aGQh93FCpgmXvgwh4GK0M55CyFyqphxUZJovMMCFNQ2KabmFWa3DOwnfSmSfs%2BdvH56fnWaYE3aPWcFOUa45XfsXyJsMfrYrounG8UFYdCwaNMHVCoTZBEer5vbKOrw%2BsiZmGVO5VStHMkvoQ4GNl0zF6ZZAjrHgBjYcuJXhHK3uBlV8g7iWHWRUD6iBMnfNRPSPs547zrzOP158C44xakhlaA9dwgx1dE3dymCPmK3DAdqTrWdQkRSeLBlAcN3aYe0cLdS3czK8xn7jhSeC3tnlSSUHSWsquvqQmYpD%2FOWIV6E2n%2BMzgAdSZLgtUuNXcqJZOOdkm%2Flra4vZYXH%2FcQ6GJIpkMY0t0lcJsuoHw6WD%2BCZrnNQWX0QWuVsnIhkxpjMz3xrAhE9pnMotP1mcRmprb40tUZ6gCQWN6XpcjKtMygwxmujVBOVwa3lR3Ywwe7TxAY6pgH81HmGYFH9oX%2FCRDZiXqxYwKg2lz106ZZELbc0bonx4Dotn%2F%2BA%2FmqKrvC6ivk4LERI3Sn75pbP6zo4bnyfiR2CoFaJk9Zdr7lZnxMJFo%2BW4v0hA7WHmIE2mRGNoYuQqSFuOEyWP%2B7wwa3VYFUFHe28JT2n%2BrGcFrHaa%2Bj9n2vn3oWPNhkOSxqcEeNvSFpuPdN%2F1dQW%2FuhMk1CLCPSCn76i8eZSTcug&X-Amz-Signature=b40ef3f54fb69acb679d955e47e24edb414f1a32a08292dd71192aadae7a3645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

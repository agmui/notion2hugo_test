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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVL2UED%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2qxAvPgsl5OfuNu1D2UMUAbOZ9TmeA3w%2FAJttZc1%2BQAiAR3cLjjpvfDXaaUfvu%2FkOGdw8S%2FtnhmQl8oXGvi%2F9WCCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMggko8MV9oTxhxnXxKtwDQfhw7huLihRVEAzhGrNGMmShH6LIIMxDGFIL9ikdjhs1RT%2BuhqO76XE0%2F9QYGCetwiCFpsVI%2FrxjgqEc4FKFmml%2FCAIzwWrSAsDUrXg3VaDdZ9NcvWcWi6osWL4vx1QmFNxvojlKlHKWOlTkFeQjo3itKotZswVNRihivTyqxyTGWSTea6gAv52Ive5pee4mc%2B2VvP1mGhZh6go%2Fw7XhcelA3fpZ7EaT%2FVZFXJQbQj9Zp%2FQx0W7WBYx10TZw5e9Qu0tJZUmIygPGcLnPlz4B6bPJreKd%2FogKthT%2FA%2FviDymVcZu1UktxNwOSx8297CVeqYCL2UpUjqMwlezAHK19sqGobUPxVA5ok5RMIpL%2FBOgo99lIAFiOx1tgiaTXajJnd%2BdXm3ZCvuPQOxtx7x6u8osG1rklNmUNTCnP1RMtU0Zp2g%2BseQbQDZRl0Sye6H%2F7OWjtvQw7iEUWXhSTSdFwo4AqEohvg3Yncc2bO6DU4GM5L3vuYgALJ2MV%2FS%2Bkn96kr1QyfdDwpj4aCl2J1qNnIYbZ1SYos03Fcuqfq%2BKSffum4YMB0idv34dVB%2BUBDLZ%2BJjq5wXDGqYHhAtBIJgikH%2FfLnAMk3MATE9Kwu9QBucEcF3TcLzpCkRWC54Uwgu22wAY6pgGEhRamiQZvAMTkirEAgSjD6clpxWaobtCmcBST%2B8LD8nadSV8FafH9ffeDQ%2BXIHcIkeaYelzFLg4sqQ%2FlxcpthbuNH8LQjvZBiQjDWhXhp%2FGyovaXZRY8fcfUZJYezplw7Lr4vsz%2F5a1Fp2gRn%2B32QxEEiLY7oNFvJIEZwM7mbkTrOdbQ049QK9PvU2Pg69srmVa668RK72lAk4yb%2FBbt2PHDLRGGN&X-Amz-Signature=11c1c96284092f4c7317deb2c0fd3bce6a7e0194bccfcb1eb71483d2b8164c31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVL2UED%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2qxAvPgsl5OfuNu1D2UMUAbOZ9TmeA3w%2FAJttZc1%2BQAiAR3cLjjpvfDXaaUfvu%2FkOGdw8S%2FtnhmQl8oXGvi%2F9WCCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMggko8MV9oTxhxnXxKtwDQfhw7huLihRVEAzhGrNGMmShH6LIIMxDGFIL9ikdjhs1RT%2BuhqO76XE0%2F9QYGCetwiCFpsVI%2FrxjgqEc4FKFmml%2FCAIzwWrSAsDUrXg3VaDdZ9NcvWcWi6osWL4vx1QmFNxvojlKlHKWOlTkFeQjo3itKotZswVNRihivTyqxyTGWSTea6gAv52Ive5pee4mc%2B2VvP1mGhZh6go%2Fw7XhcelA3fpZ7EaT%2FVZFXJQbQj9Zp%2FQx0W7WBYx10TZw5e9Qu0tJZUmIygPGcLnPlz4B6bPJreKd%2FogKthT%2FA%2FviDymVcZu1UktxNwOSx8297CVeqYCL2UpUjqMwlezAHK19sqGobUPxVA5ok5RMIpL%2FBOgo99lIAFiOx1tgiaTXajJnd%2BdXm3ZCvuPQOxtx7x6u8osG1rklNmUNTCnP1RMtU0Zp2g%2BseQbQDZRl0Sye6H%2F7OWjtvQw7iEUWXhSTSdFwo4AqEohvg3Yncc2bO6DU4GM5L3vuYgALJ2MV%2FS%2Bkn96kr1QyfdDwpj4aCl2J1qNnIYbZ1SYos03Fcuqfq%2BKSffum4YMB0idv34dVB%2BUBDLZ%2BJjq5wXDGqYHhAtBIJgikH%2FfLnAMk3MATE9Kwu9QBucEcF3TcLzpCkRWC54Uwgu22wAY6pgGEhRamiQZvAMTkirEAgSjD6clpxWaobtCmcBST%2B8LD8nadSV8FafH9ffeDQ%2BXIHcIkeaYelzFLg4sqQ%2FlxcpthbuNH8LQjvZBiQjDWhXhp%2FGyovaXZRY8fcfUZJYezplw7Lr4vsz%2F5a1Fp2gRn%2B32QxEEiLY7oNFvJIEZwM7mbkTrOdbQ049QK9PvU2Pg69srmVa668RK72lAk4yb%2FBbt2PHDLRGGN&X-Amz-Signature=314dc47b95c83b8c3be4311ccf428f608d6c67cbe518588e14fb8eb3a86e712b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVL2UED%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2qxAvPgsl5OfuNu1D2UMUAbOZ9TmeA3w%2FAJttZc1%2BQAiAR3cLjjpvfDXaaUfvu%2FkOGdw8S%2FtnhmQl8oXGvi%2F9WCCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMggko8MV9oTxhxnXxKtwDQfhw7huLihRVEAzhGrNGMmShH6LIIMxDGFIL9ikdjhs1RT%2BuhqO76XE0%2F9QYGCetwiCFpsVI%2FrxjgqEc4FKFmml%2FCAIzwWrSAsDUrXg3VaDdZ9NcvWcWi6osWL4vx1QmFNxvojlKlHKWOlTkFeQjo3itKotZswVNRihivTyqxyTGWSTea6gAv52Ive5pee4mc%2B2VvP1mGhZh6go%2Fw7XhcelA3fpZ7EaT%2FVZFXJQbQj9Zp%2FQx0W7WBYx10TZw5e9Qu0tJZUmIygPGcLnPlz4B6bPJreKd%2FogKthT%2FA%2FviDymVcZu1UktxNwOSx8297CVeqYCL2UpUjqMwlezAHK19sqGobUPxVA5ok5RMIpL%2FBOgo99lIAFiOx1tgiaTXajJnd%2BdXm3ZCvuPQOxtx7x6u8osG1rklNmUNTCnP1RMtU0Zp2g%2BseQbQDZRl0Sye6H%2F7OWjtvQw7iEUWXhSTSdFwo4AqEohvg3Yncc2bO6DU4GM5L3vuYgALJ2MV%2FS%2Bkn96kr1QyfdDwpj4aCl2J1qNnIYbZ1SYos03Fcuqfq%2BKSffum4YMB0idv34dVB%2BUBDLZ%2BJjq5wXDGqYHhAtBIJgikH%2FfLnAMk3MATE9Kwu9QBucEcF3TcLzpCkRWC54Uwgu22wAY6pgGEhRamiQZvAMTkirEAgSjD6clpxWaobtCmcBST%2B8LD8nadSV8FafH9ffeDQ%2BXIHcIkeaYelzFLg4sqQ%2FlxcpthbuNH8LQjvZBiQjDWhXhp%2FGyovaXZRY8fcfUZJYezplw7Lr4vsz%2F5a1Fp2gRn%2B32QxEEiLY7oNFvJIEZwM7mbkTrOdbQ049QK9PvU2Pg69srmVa668RK72lAk4yb%2FBbt2PHDLRGGN&X-Amz-Signature=88d4b8f16207c1b291f53bb97c3e0c3de3785d197637dd7364c93a6bcd0273da&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVL2UED%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2qxAvPgsl5OfuNu1D2UMUAbOZ9TmeA3w%2FAJttZc1%2BQAiAR3cLjjpvfDXaaUfvu%2FkOGdw8S%2FtnhmQl8oXGvi%2F9WCCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMggko8MV9oTxhxnXxKtwDQfhw7huLihRVEAzhGrNGMmShH6LIIMxDGFIL9ikdjhs1RT%2BuhqO76XE0%2F9QYGCetwiCFpsVI%2FrxjgqEc4FKFmml%2FCAIzwWrSAsDUrXg3VaDdZ9NcvWcWi6osWL4vx1QmFNxvojlKlHKWOlTkFeQjo3itKotZswVNRihivTyqxyTGWSTea6gAv52Ive5pee4mc%2B2VvP1mGhZh6go%2Fw7XhcelA3fpZ7EaT%2FVZFXJQbQj9Zp%2FQx0W7WBYx10TZw5e9Qu0tJZUmIygPGcLnPlz4B6bPJreKd%2FogKthT%2FA%2FviDymVcZu1UktxNwOSx8297CVeqYCL2UpUjqMwlezAHK19sqGobUPxVA5ok5RMIpL%2FBOgo99lIAFiOx1tgiaTXajJnd%2BdXm3ZCvuPQOxtx7x6u8osG1rklNmUNTCnP1RMtU0Zp2g%2BseQbQDZRl0Sye6H%2F7OWjtvQw7iEUWXhSTSdFwo4AqEohvg3Yncc2bO6DU4GM5L3vuYgALJ2MV%2FS%2Bkn96kr1QyfdDwpj4aCl2J1qNnIYbZ1SYos03Fcuqfq%2BKSffum4YMB0idv34dVB%2BUBDLZ%2BJjq5wXDGqYHhAtBIJgikH%2FfLnAMk3MATE9Kwu9QBucEcF3TcLzpCkRWC54Uwgu22wAY6pgGEhRamiQZvAMTkirEAgSjD6clpxWaobtCmcBST%2B8LD8nadSV8FafH9ffeDQ%2BXIHcIkeaYelzFLg4sqQ%2FlxcpthbuNH8LQjvZBiQjDWhXhp%2FGyovaXZRY8fcfUZJYezplw7Lr4vsz%2F5a1Fp2gRn%2B32QxEEiLY7oNFvJIEZwM7mbkTrOdbQ049QK9PvU2Pg69srmVa668RK72lAk4yb%2FBbt2PHDLRGGN&X-Amz-Signature=19dbee6353dba0dc566d37ed60967292a754da8d70b5960b4a4e2db947020dae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVL2UED%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2qxAvPgsl5OfuNu1D2UMUAbOZ9TmeA3w%2FAJttZc1%2BQAiAR3cLjjpvfDXaaUfvu%2FkOGdw8S%2FtnhmQl8oXGvi%2F9WCCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMggko8MV9oTxhxnXxKtwDQfhw7huLihRVEAzhGrNGMmShH6LIIMxDGFIL9ikdjhs1RT%2BuhqO76XE0%2F9QYGCetwiCFpsVI%2FrxjgqEc4FKFmml%2FCAIzwWrSAsDUrXg3VaDdZ9NcvWcWi6osWL4vx1QmFNxvojlKlHKWOlTkFeQjo3itKotZswVNRihivTyqxyTGWSTea6gAv52Ive5pee4mc%2B2VvP1mGhZh6go%2Fw7XhcelA3fpZ7EaT%2FVZFXJQbQj9Zp%2FQx0W7WBYx10TZw5e9Qu0tJZUmIygPGcLnPlz4B6bPJreKd%2FogKthT%2FA%2FviDymVcZu1UktxNwOSx8297CVeqYCL2UpUjqMwlezAHK19sqGobUPxVA5ok5RMIpL%2FBOgo99lIAFiOx1tgiaTXajJnd%2BdXm3ZCvuPQOxtx7x6u8osG1rklNmUNTCnP1RMtU0Zp2g%2BseQbQDZRl0Sye6H%2F7OWjtvQw7iEUWXhSTSdFwo4AqEohvg3Yncc2bO6DU4GM5L3vuYgALJ2MV%2FS%2Bkn96kr1QyfdDwpj4aCl2J1qNnIYbZ1SYos03Fcuqfq%2BKSffum4YMB0idv34dVB%2BUBDLZ%2BJjq5wXDGqYHhAtBIJgikH%2FfLnAMk3MATE9Kwu9QBucEcF3TcLzpCkRWC54Uwgu22wAY6pgGEhRamiQZvAMTkirEAgSjD6clpxWaobtCmcBST%2B8LD8nadSV8FafH9ffeDQ%2BXIHcIkeaYelzFLg4sqQ%2FlxcpthbuNH8LQjvZBiQjDWhXhp%2FGyovaXZRY8fcfUZJYezplw7Lr4vsz%2F5a1Fp2gRn%2B32QxEEiLY7oNFvJIEZwM7mbkTrOdbQ049QK9PvU2Pg69srmVa668RK72lAk4yb%2FBbt2PHDLRGGN&X-Amz-Signature=5b47e87b065507a7dcbe00727a623f3c9c6780379c41279f4b173110e7d561fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVL2UED%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2qxAvPgsl5OfuNu1D2UMUAbOZ9TmeA3w%2FAJttZc1%2BQAiAR3cLjjpvfDXaaUfvu%2FkOGdw8S%2FtnhmQl8oXGvi%2F9WCCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMggko8MV9oTxhxnXxKtwDQfhw7huLihRVEAzhGrNGMmShH6LIIMxDGFIL9ikdjhs1RT%2BuhqO76XE0%2F9QYGCetwiCFpsVI%2FrxjgqEc4FKFmml%2FCAIzwWrSAsDUrXg3VaDdZ9NcvWcWi6osWL4vx1QmFNxvojlKlHKWOlTkFeQjo3itKotZswVNRihivTyqxyTGWSTea6gAv52Ive5pee4mc%2B2VvP1mGhZh6go%2Fw7XhcelA3fpZ7EaT%2FVZFXJQbQj9Zp%2FQx0W7WBYx10TZw5e9Qu0tJZUmIygPGcLnPlz4B6bPJreKd%2FogKthT%2FA%2FviDymVcZu1UktxNwOSx8297CVeqYCL2UpUjqMwlezAHK19sqGobUPxVA5ok5RMIpL%2FBOgo99lIAFiOx1tgiaTXajJnd%2BdXm3ZCvuPQOxtx7x6u8osG1rklNmUNTCnP1RMtU0Zp2g%2BseQbQDZRl0Sye6H%2F7OWjtvQw7iEUWXhSTSdFwo4AqEohvg3Yncc2bO6DU4GM5L3vuYgALJ2MV%2FS%2Bkn96kr1QyfdDwpj4aCl2J1qNnIYbZ1SYos03Fcuqfq%2BKSffum4YMB0idv34dVB%2BUBDLZ%2BJjq5wXDGqYHhAtBIJgikH%2FfLnAMk3MATE9Kwu9QBucEcF3TcLzpCkRWC54Uwgu22wAY6pgGEhRamiQZvAMTkirEAgSjD6clpxWaobtCmcBST%2B8LD8nadSV8FafH9ffeDQ%2BXIHcIkeaYelzFLg4sqQ%2FlxcpthbuNH8LQjvZBiQjDWhXhp%2FGyovaXZRY8fcfUZJYezplw7Lr4vsz%2F5a1Fp2gRn%2B32QxEEiLY7oNFvJIEZwM7mbkTrOdbQ049QK9PvU2Pg69srmVa668RK72lAk4yb%2FBbt2PHDLRGGN&X-Amz-Signature=283c29396d74c9f76f053d8c7fd6319cdcfcb55db8a948735e958e96c4c62a45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVL2UED%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2qxAvPgsl5OfuNu1D2UMUAbOZ9TmeA3w%2FAJttZc1%2BQAiAR3cLjjpvfDXaaUfvu%2FkOGdw8S%2FtnhmQl8oXGvi%2F9WCCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMggko8MV9oTxhxnXxKtwDQfhw7huLihRVEAzhGrNGMmShH6LIIMxDGFIL9ikdjhs1RT%2BuhqO76XE0%2F9QYGCetwiCFpsVI%2FrxjgqEc4FKFmml%2FCAIzwWrSAsDUrXg3VaDdZ9NcvWcWi6osWL4vx1QmFNxvojlKlHKWOlTkFeQjo3itKotZswVNRihivTyqxyTGWSTea6gAv52Ive5pee4mc%2B2VvP1mGhZh6go%2Fw7XhcelA3fpZ7EaT%2FVZFXJQbQj9Zp%2FQx0W7WBYx10TZw5e9Qu0tJZUmIygPGcLnPlz4B6bPJreKd%2FogKthT%2FA%2FviDymVcZu1UktxNwOSx8297CVeqYCL2UpUjqMwlezAHK19sqGobUPxVA5ok5RMIpL%2FBOgo99lIAFiOx1tgiaTXajJnd%2BdXm3ZCvuPQOxtx7x6u8osG1rklNmUNTCnP1RMtU0Zp2g%2BseQbQDZRl0Sye6H%2F7OWjtvQw7iEUWXhSTSdFwo4AqEohvg3Yncc2bO6DU4GM5L3vuYgALJ2MV%2FS%2Bkn96kr1QyfdDwpj4aCl2J1qNnIYbZ1SYos03Fcuqfq%2BKSffum4YMB0idv34dVB%2BUBDLZ%2BJjq5wXDGqYHhAtBIJgikH%2FfLnAMk3MATE9Kwu9QBucEcF3TcLzpCkRWC54Uwgu22wAY6pgGEhRamiQZvAMTkirEAgSjD6clpxWaobtCmcBST%2B8LD8nadSV8FafH9ffeDQ%2BXIHcIkeaYelzFLg4sqQ%2FlxcpthbuNH8LQjvZBiQjDWhXhp%2FGyovaXZRY8fcfUZJYezplw7Lr4vsz%2F5a1Fp2gRn%2B32QxEEiLY7oNFvJIEZwM7mbkTrOdbQ049QK9PvU2Pg69srmVa668RK72lAk4yb%2FBbt2PHDLRGGN&X-Amz-Signature=010ec4c099eca336fb61d24d8cbc2661c84976415808a062017302ecc1236b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVL2UED%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2qxAvPgsl5OfuNu1D2UMUAbOZ9TmeA3w%2FAJttZc1%2BQAiAR3cLjjpvfDXaaUfvu%2FkOGdw8S%2FtnhmQl8oXGvi%2F9WCCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMggko8MV9oTxhxnXxKtwDQfhw7huLihRVEAzhGrNGMmShH6LIIMxDGFIL9ikdjhs1RT%2BuhqO76XE0%2F9QYGCetwiCFpsVI%2FrxjgqEc4FKFmml%2FCAIzwWrSAsDUrXg3VaDdZ9NcvWcWi6osWL4vx1QmFNxvojlKlHKWOlTkFeQjo3itKotZswVNRihivTyqxyTGWSTea6gAv52Ive5pee4mc%2B2VvP1mGhZh6go%2Fw7XhcelA3fpZ7EaT%2FVZFXJQbQj9Zp%2FQx0W7WBYx10TZw5e9Qu0tJZUmIygPGcLnPlz4B6bPJreKd%2FogKthT%2FA%2FviDymVcZu1UktxNwOSx8297CVeqYCL2UpUjqMwlezAHK19sqGobUPxVA5ok5RMIpL%2FBOgo99lIAFiOx1tgiaTXajJnd%2BdXm3ZCvuPQOxtx7x6u8osG1rklNmUNTCnP1RMtU0Zp2g%2BseQbQDZRl0Sye6H%2F7OWjtvQw7iEUWXhSTSdFwo4AqEohvg3Yncc2bO6DU4GM5L3vuYgALJ2MV%2FS%2Bkn96kr1QyfdDwpj4aCl2J1qNnIYbZ1SYos03Fcuqfq%2BKSffum4YMB0idv34dVB%2BUBDLZ%2BJjq5wXDGqYHhAtBIJgikH%2FfLnAMk3MATE9Kwu9QBucEcF3TcLzpCkRWC54Uwgu22wAY6pgGEhRamiQZvAMTkirEAgSjD6clpxWaobtCmcBST%2B8LD8nadSV8FafH9ffeDQ%2BXIHcIkeaYelzFLg4sqQ%2FlxcpthbuNH8LQjvZBiQjDWhXhp%2FGyovaXZRY8fcfUZJYezplw7Lr4vsz%2F5a1Fp2gRn%2B32QxEEiLY7oNFvJIEZwM7mbkTrOdbQ049QK9PvU2Pg69srmVa668RK72lAk4yb%2FBbt2PHDLRGGN&X-Amz-Signature=d29c856d9abee202f3d6c7ee860de72c669d4792faa4ae83742264fc8e6d0c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

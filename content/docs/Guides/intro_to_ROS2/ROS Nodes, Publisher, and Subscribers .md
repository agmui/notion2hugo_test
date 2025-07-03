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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWWO3G4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDsdYx4PXDd6AqEpMa4JaOn0xxaL9iVm0jjHs6JRCoxwwIhAJdclukaD1woOIaG3L5UbsqIMBMm8BlsA%2F1VsVgh%2BMenKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP48YANr9z0%2FTqc0Uq3AOb3VXpJm1yNweQQUDEge8T32mtK2Iws03x6fjRlayw0OGFBOuhIH8l9eHZpezy3VP%2BvChI2Jdf8J%2FFveXjd5PxVyHn5L4GHJgOTRJhb3oTW0V%2BVqmdS%2BAAovHSeSqWxK87lZJoo8HuRUnofPz8vCU6R3JnP9ZeEVUOEYow3mk%2BWXwwhhxLVnUwSHTdf%2F2k1riA17NQE4ObXYZF5Q3qkFFt4QCOhGXDhtBikOBxktSIXbRmLo%2FY1LScHOQIIIwdpeC82WC63939uTIHK%2FYLi%2F%2FDbbbB6D2UKm85tbro6riIWYgX7YspVa5PwZiJgm1h5ue4Cl6Ku8WQtM8mvcH4Bdj6O7kt0nKPjXz1lrQtE8Pmm1uU59MqBJlP5cH7fEFi5khtQWCQBfVJ99TXZwxGmH6sEYpAjq5kRIrTCOPWnDpK21mrsz6j51k%2BK7IW9qrHkjtuvkqrR6iWh%2BP8J3Dk5OrE%2BcV0UMS2%2BIlId6WQFagrqqZPzd2lEMhWB2RIXzkSLwoT1uK7kBY2oI%2BArbh0vw22w%2Bq3tYQr5Nmw3jbGU9q10T3PHWM%2BB9ou0zjWZg44XXbIU%2B%2FXQKVkelZWwajOFapxN5L8CB6K%2FjNZswvraBWcYNe8dlWFVnj4cqYmyzChr5jDBjqkAdZ7R8Uy3272hgkztXHXMzDTLXafFMvEFsIb0gxNx%2B7pP29EZVVTNuK2WNh3sfGNtm3N9f91EK9P4VIamUXTVxAfSLshFTw8dcck05GMgonaNTlIsB9bJM9vzNVw3dFQwi1kGtnG1YP4oujzxwslya0mm%2FRJbbkgdzvP0M32VlDYDcu7ILIs%2FeH8LUlbKTnkTdakukapJtH6lSk86KfK5jkl%2F6St&X-Amz-Signature=b96318c3d6ac5769ce2cebae3cebf698c36271fe7d7f244f434c947b4eef39db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWWO3G4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDsdYx4PXDd6AqEpMa4JaOn0xxaL9iVm0jjHs6JRCoxwwIhAJdclukaD1woOIaG3L5UbsqIMBMm8BlsA%2F1VsVgh%2BMenKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP48YANr9z0%2FTqc0Uq3AOb3VXpJm1yNweQQUDEge8T32mtK2Iws03x6fjRlayw0OGFBOuhIH8l9eHZpezy3VP%2BvChI2Jdf8J%2FFveXjd5PxVyHn5L4GHJgOTRJhb3oTW0V%2BVqmdS%2BAAovHSeSqWxK87lZJoo8HuRUnofPz8vCU6R3JnP9ZeEVUOEYow3mk%2BWXwwhhxLVnUwSHTdf%2F2k1riA17NQE4ObXYZF5Q3qkFFt4QCOhGXDhtBikOBxktSIXbRmLo%2FY1LScHOQIIIwdpeC82WC63939uTIHK%2FYLi%2F%2FDbbbB6D2UKm85tbro6riIWYgX7YspVa5PwZiJgm1h5ue4Cl6Ku8WQtM8mvcH4Bdj6O7kt0nKPjXz1lrQtE8Pmm1uU59MqBJlP5cH7fEFi5khtQWCQBfVJ99TXZwxGmH6sEYpAjq5kRIrTCOPWnDpK21mrsz6j51k%2BK7IW9qrHkjtuvkqrR6iWh%2BP8J3Dk5OrE%2BcV0UMS2%2BIlId6WQFagrqqZPzd2lEMhWB2RIXzkSLwoT1uK7kBY2oI%2BArbh0vw22w%2Bq3tYQr5Nmw3jbGU9q10T3PHWM%2BB9ou0zjWZg44XXbIU%2B%2FXQKVkelZWwajOFapxN5L8CB6K%2FjNZswvraBWcYNe8dlWFVnj4cqYmyzChr5jDBjqkAdZ7R8Uy3272hgkztXHXMzDTLXafFMvEFsIb0gxNx%2B7pP29EZVVTNuK2WNh3sfGNtm3N9f91EK9P4VIamUXTVxAfSLshFTw8dcck05GMgonaNTlIsB9bJM9vzNVw3dFQwi1kGtnG1YP4oujzxwslya0mm%2FRJbbkgdzvP0M32VlDYDcu7ILIs%2FeH8LUlbKTnkTdakukapJtH6lSk86KfK5jkl%2F6St&X-Amz-Signature=2aad34c0000f88688184d9a38bc6c63d9d6e9bc5c9c1fb6a3f20a85b2144c70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWWO3G4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDsdYx4PXDd6AqEpMa4JaOn0xxaL9iVm0jjHs6JRCoxwwIhAJdclukaD1woOIaG3L5UbsqIMBMm8BlsA%2F1VsVgh%2BMenKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP48YANr9z0%2FTqc0Uq3AOb3VXpJm1yNweQQUDEge8T32mtK2Iws03x6fjRlayw0OGFBOuhIH8l9eHZpezy3VP%2BvChI2Jdf8J%2FFveXjd5PxVyHn5L4GHJgOTRJhb3oTW0V%2BVqmdS%2BAAovHSeSqWxK87lZJoo8HuRUnofPz8vCU6R3JnP9ZeEVUOEYow3mk%2BWXwwhhxLVnUwSHTdf%2F2k1riA17NQE4ObXYZF5Q3qkFFt4QCOhGXDhtBikOBxktSIXbRmLo%2FY1LScHOQIIIwdpeC82WC63939uTIHK%2FYLi%2F%2FDbbbB6D2UKm85tbro6riIWYgX7YspVa5PwZiJgm1h5ue4Cl6Ku8WQtM8mvcH4Bdj6O7kt0nKPjXz1lrQtE8Pmm1uU59MqBJlP5cH7fEFi5khtQWCQBfVJ99TXZwxGmH6sEYpAjq5kRIrTCOPWnDpK21mrsz6j51k%2BK7IW9qrHkjtuvkqrR6iWh%2BP8J3Dk5OrE%2BcV0UMS2%2BIlId6WQFagrqqZPzd2lEMhWB2RIXzkSLwoT1uK7kBY2oI%2BArbh0vw22w%2Bq3tYQr5Nmw3jbGU9q10T3PHWM%2BB9ou0zjWZg44XXbIU%2B%2FXQKVkelZWwajOFapxN5L8CB6K%2FjNZswvraBWcYNe8dlWFVnj4cqYmyzChr5jDBjqkAdZ7R8Uy3272hgkztXHXMzDTLXafFMvEFsIb0gxNx%2B7pP29EZVVTNuK2WNh3sfGNtm3N9f91EK9P4VIamUXTVxAfSLshFTw8dcck05GMgonaNTlIsB9bJM9vzNVw3dFQwi1kGtnG1YP4oujzxwslya0mm%2FRJbbkgdzvP0M32VlDYDcu7ILIs%2FeH8LUlbKTnkTdakukapJtH6lSk86KfK5jkl%2F6St&X-Amz-Signature=d5e07a21c0401947a991df7c19e6e38621f45c25ce95679dde9c6c931a4d55d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWWO3G4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDsdYx4PXDd6AqEpMa4JaOn0xxaL9iVm0jjHs6JRCoxwwIhAJdclukaD1woOIaG3L5UbsqIMBMm8BlsA%2F1VsVgh%2BMenKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP48YANr9z0%2FTqc0Uq3AOb3VXpJm1yNweQQUDEge8T32mtK2Iws03x6fjRlayw0OGFBOuhIH8l9eHZpezy3VP%2BvChI2Jdf8J%2FFveXjd5PxVyHn5L4GHJgOTRJhb3oTW0V%2BVqmdS%2BAAovHSeSqWxK87lZJoo8HuRUnofPz8vCU6R3JnP9ZeEVUOEYow3mk%2BWXwwhhxLVnUwSHTdf%2F2k1riA17NQE4ObXYZF5Q3qkFFt4QCOhGXDhtBikOBxktSIXbRmLo%2FY1LScHOQIIIwdpeC82WC63939uTIHK%2FYLi%2F%2FDbbbB6D2UKm85tbro6riIWYgX7YspVa5PwZiJgm1h5ue4Cl6Ku8WQtM8mvcH4Bdj6O7kt0nKPjXz1lrQtE8Pmm1uU59MqBJlP5cH7fEFi5khtQWCQBfVJ99TXZwxGmH6sEYpAjq5kRIrTCOPWnDpK21mrsz6j51k%2BK7IW9qrHkjtuvkqrR6iWh%2BP8J3Dk5OrE%2BcV0UMS2%2BIlId6WQFagrqqZPzd2lEMhWB2RIXzkSLwoT1uK7kBY2oI%2BArbh0vw22w%2Bq3tYQr5Nmw3jbGU9q10T3PHWM%2BB9ou0zjWZg44XXbIU%2B%2FXQKVkelZWwajOFapxN5L8CB6K%2FjNZswvraBWcYNe8dlWFVnj4cqYmyzChr5jDBjqkAdZ7R8Uy3272hgkztXHXMzDTLXafFMvEFsIb0gxNx%2B7pP29EZVVTNuK2WNh3sfGNtm3N9f91EK9P4VIamUXTVxAfSLshFTw8dcck05GMgonaNTlIsB9bJM9vzNVw3dFQwi1kGtnG1YP4oujzxwslya0mm%2FRJbbkgdzvP0M32VlDYDcu7ILIs%2FeH8LUlbKTnkTdakukapJtH6lSk86KfK5jkl%2F6St&X-Amz-Signature=5437585eba9c3ce9471e934c8882d61d87b53d33fe6a690682d1fa7425cb45df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWWO3G4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDsdYx4PXDd6AqEpMa4JaOn0xxaL9iVm0jjHs6JRCoxwwIhAJdclukaD1woOIaG3L5UbsqIMBMm8BlsA%2F1VsVgh%2BMenKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP48YANr9z0%2FTqc0Uq3AOb3VXpJm1yNweQQUDEge8T32mtK2Iws03x6fjRlayw0OGFBOuhIH8l9eHZpezy3VP%2BvChI2Jdf8J%2FFveXjd5PxVyHn5L4GHJgOTRJhb3oTW0V%2BVqmdS%2BAAovHSeSqWxK87lZJoo8HuRUnofPz8vCU6R3JnP9ZeEVUOEYow3mk%2BWXwwhhxLVnUwSHTdf%2F2k1riA17NQE4ObXYZF5Q3qkFFt4QCOhGXDhtBikOBxktSIXbRmLo%2FY1LScHOQIIIwdpeC82WC63939uTIHK%2FYLi%2F%2FDbbbB6D2UKm85tbro6riIWYgX7YspVa5PwZiJgm1h5ue4Cl6Ku8WQtM8mvcH4Bdj6O7kt0nKPjXz1lrQtE8Pmm1uU59MqBJlP5cH7fEFi5khtQWCQBfVJ99TXZwxGmH6sEYpAjq5kRIrTCOPWnDpK21mrsz6j51k%2BK7IW9qrHkjtuvkqrR6iWh%2BP8J3Dk5OrE%2BcV0UMS2%2BIlId6WQFagrqqZPzd2lEMhWB2RIXzkSLwoT1uK7kBY2oI%2BArbh0vw22w%2Bq3tYQr5Nmw3jbGU9q10T3PHWM%2BB9ou0zjWZg44XXbIU%2B%2FXQKVkelZWwajOFapxN5L8CB6K%2FjNZswvraBWcYNe8dlWFVnj4cqYmyzChr5jDBjqkAdZ7R8Uy3272hgkztXHXMzDTLXafFMvEFsIb0gxNx%2B7pP29EZVVTNuK2WNh3sfGNtm3N9f91EK9P4VIamUXTVxAfSLshFTw8dcck05GMgonaNTlIsB9bJM9vzNVw3dFQwi1kGtnG1YP4oujzxwslya0mm%2FRJbbkgdzvP0M32VlDYDcu7ILIs%2FeH8LUlbKTnkTdakukapJtH6lSk86KfK5jkl%2F6St&X-Amz-Signature=2aaf8bcea0a54c425f73005305caee79feb0c6e64baaa39da11368670ab903a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWWO3G4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDsdYx4PXDd6AqEpMa4JaOn0xxaL9iVm0jjHs6JRCoxwwIhAJdclukaD1woOIaG3L5UbsqIMBMm8BlsA%2F1VsVgh%2BMenKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP48YANr9z0%2FTqc0Uq3AOb3VXpJm1yNweQQUDEge8T32mtK2Iws03x6fjRlayw0OGFBOuhIH8l9eHZpezy3VP%2BvChI2Jdf8J%2FFveXjd5PxVyHn5L4GHJgOTRJhb3oTW0V%2BVqmdS%2BAAovHSeSqWxK87lZJoo8HuRUnofPz8vCU6R3JnP9ZeEVUOEYow3mk%2BWXwwhhxLVnUwSHTdf%2F2k1riA17NQE4ObXYZF5Q3qkFFt4QCOhGXDhtBikOBxktSIXbRmLo%2FY1LScHOQIIIwdpeC82WC63939uTIHK%2FYLi%2F%2FDbbbB6D2UKm85tbro6riIWYgX7YspVa5PwZiJgm1h5ue4Cl6Ku8WQtM8mvcH4Bdj6O7kt0nKPjXz1lrQtE8Pmm1uU59MqBJlP5cH7fEFi5khtQWCQBfVJ99TXZwxGmH6sEYpAjq5kRIrTCOPWnDpK21mrsz6j51k%2BK7IW9qrHkjtuvkqrR6iWh%2BP8J3Dk5OrE%2BcV0UMS2%2BIlId6WQFagrqqZPzd2lEMhWB2RIXzkSLwoT1uK7kBY2oI%2BArbh0vw22w%2Bq3tYQr5Nmw3jbGU9q10T3PHWM%2BB9ou0zjWZg44XXbIU%2B%2FXQKVkelZWwajOFapxN5L8CB6K%2FjNZswvraBWcYNe8dlWFVnj4cqYmyzChr5jDBjqkAdZ7R8Uy3272hgkztXHXMzDTLXafFMvEFsIb0gxNx%2B7pP29EZVVTNuK2WNh3sfGNtm3N9f91EK9P4VIamUXTVxAfSLshFTw8dcck05GMgonaNTlIsB9bJM9vzNVw3dFQwi1kGtnG1YP4oujzxwslya0mm%2FRJbbkgdzvP0M32VlDYDcu7ILIs%2FeH8LUlbKTnkTdakukapJtH6lSk86KfK5jkl%2F6St&X-Amz-Signature=f573f9e2d2e29462044a4bbfa127368662afd311143d6e2862fa95995043e661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWWO3G4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDsdYx4PXDd6AqEpMa4JaOn0xxaL9iVm0jjHs6JRCoxwwIhAJdclukaD1woOIaG3L5UbsqIMBMm8BlsA%2F1VsVgh%2BMenKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP48YANr9z0%2FTqc0Uq3AOb3VXpJm1yNweQQUDEge8T32mtK2Iws03x6fjRlayw0OGFBOuhIH8l9eHZpezy3VP%2BvChI2Jdf8J%2FFveXjd5PxVyHn5L4GHJgOTRJhb3oTW0V%2BVqmdS%2BAAovHSeSqWxK87lZJoo8HuRUnofPz8vCU6R3JnP9ZeEVUOEYow3mk%2BWXwwhhxLVnUwSHTdf%2F2k1riA17NQE4ObXYZF5Q3qkFFt4QCOhGXDhtBikOBxktSIXbRmLo%2FY1LScHOQIIIwdpeC82WC63939uTIHK%2FYLi%2F%2FDbbbB6D2UKm85tbro6riIWYgX7YspVa5PwZiJgm1h5ue4Cl6Ku8WQtM8mvcH4Bdj6O7kt0nKPjXz1lrQtE8Pmm1uU59MqBJlP5cH7fEFi5khtQWCQBfVJ99TXZwxGmH6sEYpAjq5kRIrTCOPWnDpK21mrsz6j51k%2BK7IW9qrHkjtuvkqrR6iWh%2BP8J3Dk5OrE%2BcV0UMS2%2BIlId6WQFagrqqZPzd2lEMhWB2RIXzkSLwoT1uK7kBY2oI%2BArbh0vw22w%2Bq3tYQr5Nmw3jbGU9q10T3PHWM%2BB9ou0zjWZg44XXbIU%2B%2FXQKVkelZWwajOFapxN5L8CB6K%2FjNZswvraBWcYNe8dlWFVnj4cqYmyzChr5jDBjqkAdZ7R8Uy3272hgkztXHXMzDTLXafFMvEFsIb0gxNx%2B7pP29EZVVTNuK2WNh3sfGNtm3N9f91EK9P4VIamUXTVxAfSLshFTw8dcck05GMgonaNTlIsB9bJM9vzNVw3dFQwi1kGtnG1YP4oujzxwslya0mm%2FRJbbkgdzvP0M32VlDYDcu7ILIs%2FeH8LUlbKTnkTdakukapJtH6lSk86KfK5jkl%2F6St&X-Amz-Signature=f70f7df7a3f050dd2500564a939375ef362c15afe0ca3264bec1b286d5a83e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWWO3G4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDsdYx4PXDd6AqEpMa4JaOn0xxaL9iVm0jjHs6JRCoxwwIhAJdclukaD1woOIaG3L5UbsqIMBMm8BlsA%2F1VsVgh%2BMenKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP48YANr9z0%2FTqc0Uq3AOb3VXpJm1yNweQQUDEge8T32mtK2Iws03x6fjRlayw0OGFBOuhIH8l9eHZpezy3VP%2BvChI2Jdf8J%2FFveXjd5PxVyHn5L4GHJgOTRJhb3oTW0V%2BVqmdS%2BAAovHSeSqWxK87lZJoo8HuRUnofPz8vCU6R3JnP9ZeEVUOEYow3mk%2BWXwwhhxLVnUwSHTdf%2F2k1riA17NQE4ObXYZF5Q3qkFFt4QCOhGXDhtBikOBxktSIXbRmLo%2FY1LScHOQIIIwdpeC82WC63939uTIHK%2FYLi%2F%2FDbbbB6D2UKm85tbro6riIWYgX7YspVa5PwZiJgm1h5ue4Cl6Ku8WQtM8mvcH4Bdj6O7kt0nKPjXz1lrQtE8Pmm1uU59MqBJlP5cH7fEFi5khtQWCQBfVJ99TXZwxGmH6sEYpAjq5kRIrTCOPWnDpK21mrsz6j51k%2BK7IW9qrHkjtuvkqrR6iWh%2BP8J3Dk5OrE%2BcV0UMS2%2BIlId6WQFagrqqZPzd2lEMhWB2RIXzkSLwoT1uK7kBY2oI%2BArbh0vw22w%2Bq3tYQr5Nmw3jbGU9q10T3PHWM%2BB9ou0zjWZg44XXbIU%2B%2FXQKVkelZWwajOFapxN5L8CB6K%2FjNZswvraBWcYNe8dlWFVnj4cqYmyzChr5jDBjqkAdZ7R8Uy3272hgkztXHXMzDTLXafFMvEFsIb0gxNx%2B7pP29EZVVTNuK2WNh3sfGNtm3N9f91EK9P4VIamUXTVxAfSLshFTw8dcck05GMgonaNTlIsB9bJM9vzNVw3dFQwi1kGtnG1YP4oujzxwslya0mm%2FRJbbkgdzvP0M32VlDYDcu7ILIs%2FeH8LUlbKTnkTdakukapJtH6lSk86KfK5jkl%2F6St&X-Amz-Signature=28e50e4c6019b8b85844600e66890cb2f3875cfc28ab340b8521d03efc11e401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

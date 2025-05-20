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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDSBV7T%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B8UcIS%2B34E3WS6XCFgX02l0wwnJLvXUS6Gh%2F6Xwb90QIhAPPeFShX8PWmyZnWKlWfmaYPlI%2BCUcCqGGQBnz%2FNzggOKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdiGtejrgm6AdTY1wq3APu5mKy%2B6cU8c8FnNKEKRV0lHpTOuRJqVh%2BxcHkJQeuLPuzfFppyvZwMsVRkkK%2FizSJPcQRWnIWtMG%2Bh4OZ%2FCHBSn1Cz7qeQNd47R%2BQuLcmnLu86PViyp5nizuhtHex0sd83o2ZBrCzLX26FtMtwkhtev2Zby3mvl%2BG2EFphqXuZkPz9ND7olAA9ClAG5DMohmFV4K2pVV2ahjBwqkRLR0Dqn8yqHayaCV3ZzEYhwf1dhbMEkfiF20Rbfa91upCe3D1gkwiahS2x1RLwczo6wb16VMRpg79VYDkSEFjbP94VdLeH3%2F8VjBTIUSZV1%2FH5vGyF%2B60WqbEGto25GPm7oEstMyNmqP1I4lyzjq2ZCHlb1GHexqnFr6xwTdMaoe97iKfWVWfSmAz%2Bbknk%2BVH4Ib1VJSPWOIaJ7fh%2BS2t2HLEQw8Jpb%2FgeAcTyqB3iy1D7o2wsImk8Y52STGCcMazp%2BiBfIp0X8kscnW5yb4sXwiAWtoFPlPe4Gr8lci%2FHbCTDaCmw817GL3Yfrt1ziJgsG%2FK4rrFSIIItuLAlHQD8HouvDD3OSLHdsqoDSD5q3j6eP4EzOC3MbZhO5W3YmbnD54N6RdA0Yd3FdhvQcaT24kxH4J4ewi21Ocx0vcNmzDcmq%2FBBjqkAdjbMvf11V00mqQm22hESNFeX%2BX%2B4OGD2q0vGSHs3eOgR0ASnHZ588s35u1WCkKGTfUK%2BlG9Dci8T1nnP9TokmaneACkS6UpH56ck3vIR9DaTbQvMML%2FXPBnONpQDi49cvX6cxKvCBfKLZ%2Bo%2FC9x8j2WMHYGoiC%2BnIV52OEDQUjPNV4DHduENQr8eM443YtE5vP4vKvRKFqR3%2FzNn%2FYBgD7bE%2Bpf&X-Amz-Signature=a3d2cbf2cf7d9d331d05f6655469b5991cddd2c02af274aabc182c05287ce0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDSBV7T%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B8UcIS%2B34E3WS6XCFgX02l0wwnJLvXUS6Gh%2F6Xwb90QIhAPPeFShX8PWmyZnWKlWfmaYPlI%2BCUcCqGGQBnz%2FNzggOKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdiGtejrgm6AdTY1wq3APu5mKy%2B6cU8c8FnNKEKRV0lHpTOuRJqVh%2BxcHkJQeuLPuzfFppyvZwMsVRkkK%2FizSJPcQRWnIWtMG%2Bh4OZ%2FCHBSn1Cz7qeQNd47R%2BQuLcmnLu86PViyp5nizuhtHex0sd83o2ZBrCzLX26FtMtwkhtev2Zby3mvl%2BG2EFphqXuZkPz9ND7olAA9ClAG5DMohmFV4K2pVV2ahjBwqkRLR0Dqn8yqHayaCV3ZzEYhwf1dhbMEkfiF20Rbfa91upCe3D1gkwiahS2x1RLwczo6wb16VMRpg79VYDkSEFjbP94VdLeH3%2F8VjBTIUSZV1%2FH5vGyF%2B60WqbEGto25GPm7oEstMyNmqP1I4lyzjq2ZCHlb1GHexqnFr6xwTdMaoe97iKfWVWfSmAz%2Bbknk%2BVH4Ib1VJSPWOIaJ7fh%2BS2t2HLEQw8Jpb%2FgeAcTyqB3iy1D7o2wsImk8Y52STGCcMazp%2BiBfIp0X8kscnW5yb4sXwiAWtoFPlPe4Gr8lci%2FHbCTDaCmw817GL3Yfrt1ziJgsG%2FK4rrFSIIItuLAlHQD8HouvDD3OSLHdsqoDSD5q3j6eP4EzOC3MbZhO5W3YmbnD54N6RdA0Yd3FdhvQcaT24kxH4J4ewi21Ocx0vcNmzDcmq%2FBBjqkAdjbMvf11V00mqQm22hESNFeX%2BX%2B4OGD2q0vGSHs3eOgR0ASnHZ588s35u1WCkKGTfUK%2BlG9Dci8T1nnP9TokmaneACkS6UpH56ck3vIR9DaTbQvMML%2FXPBnONpQDi49cvX6cxKvCBfKLZ%2Bo%2FC9x8j2WMHYGoiC%2BnIV52OEDQUjPNV4DHduENQr8eM443YtE5vP4vKvRKFqR3%2FzNn%2FYBgD7bE%2Bpf&X-Amz-Signature=37e95b442fc5a0d17cfe3b35b6aa2d042bc2fc1cb46ebcfaa771e550a2c90836&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDSBV7T%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B8UcIS%2B34E3WS6XCFgX02l0wwnJLvXUS6Gh%2F6Xwb90QIhAPPeFShX8PWmyZnWKlWfmaYPlI%2BCUcCqGGQBnz%2FNzggOKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdiGtejrgm6AdTY1wq3APu5mKy%2B6cU8c8FnNKEKRV0lHpTOuRJqVh%2BxcHkJQeuLPuzfFppyvZwMsVRkkK%2FizSJPcQRWnIWtMG%2Bh4OZ%2FCHBSn1Cz7qeQNd47R%2BQuLcmnLu86PViyp5nizuhtHex0sd83o2ZBrCzLX26FtMtwkhtev2Zby3mvl%2BG2EFphqXuZkPz9ND7olAA9ClAG5DMohmFV4K2pVV2ahjBwqkRLR0Dqn8yqHayaCV3ZzEYhwf1dhbMEkfiF20Rbfa91upCe3D1gkwiahS2x1RLwczo6wb16VMRpg79VYDkSEFjbP94VdLeH3%2F8VjBTIUSZV1%2FH5vGyF%2B60WqbEGto25GPm7oEstMyNmqP1I4lyzjq2ZCHlb1GHexqnFr6xwTdMaoe97iKfWVWfSmAz%2Bbknk%2BVH4Ib1VJSPWOIaJ7fh%2BS2t2HLEQw8Jpb%2FgeAcTyqB3iy1D7o2wsImk8Y52STGCcMazp%2BiBfIp0X8kscnW5yb4sXwiAWtoFPlPe4Gr8lci%2FHbCTDaCmw817GL3Yfrt1ziJgsG%2FK4rrFSIIItuLAlHQD8HouvDD3OSLHdsqoDSD5q3j6eP4EzOC3MbZhO5W3YmbnD54N6RdA0Yd3FdhvQcaT24kxH4J4ewi21Ocx0vcNmzDcmq%2FBBjqkAdjbMvf11V00mqQm22hESNFeX%2BX%2B4OGD2q0vGSHs3eOgR0ASnHZ588s35u1WCkKGTfUK%2BlG9Dci8T1nnP9TokmaneACkS6UpH56ck3vIR9DaTbQvMML%2FXPBnONpQDi49cvX6cxKvCBfKLZ%2Bo%2FC9x8j2WMHYGoiC%2BnIV52OEDQUjPNV4DHduENQr8eM443YtE5vP4vKvRKFqR3%2FzNn%2FYBgD7bE%2Bpf&X-Amz-Signature=af433ad30115b013eda5e42c8ecab099538ba01548136ec89c31eff52e0e4958&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDSBV7T%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B8UcIS%2B34E3WS6XCFgX02l0wwnJLvXUS6Gh%2F6Xwb90QIhAPPeFShX8PWmyZnWKlWfmaYPlI%2BCUcCqGGQBnz%2FNzggOKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdiGtejrgm6AdTY1wq3APu5mKy%2B6cU8c8FnNKEKRV0lHpTOuRJqVh%2BxcHkJQeuLPuzfFppyvZwMsVRkkK%2FizSJPcQRWnIWtMG%2Bh4OZ%2FCHBSn1Cz7qeQNd47R%2BQuLcmnLu86PViyp5nizuhtHex0sd83o2ZBrCzLX26FtMtwkhtev2Zby3mvl%2BG2EFphqXuZkPz9ND7olAA9ClAG5DMohmFV4K2pVV2ahjBwqkRLR0Dqn8yqHayaCV3ZzEYhwf1dhbMEkfiF20Rbfa91upCe3D1gkwiahS2x1RLwczo6wb16VMRpg79VYDkSEFjbP94VdLeH3%2F8VjBTIUSZV1%2FH5vGyF%2B60WqbEGto25GPm7oEstMyNmqP1I4lyzjq2ZCHlb1GHexqnFr6xwTdMaoe97iKfWVWfSmAz%2Bbknk%2BVH4Ib1VJSPWOIaJ7fh%2BS2t2HLEQw8Jpb%2FgeAcTyqB3iy1D7o2wsImk8Y52STGCcMazp%2BiBfIp0X8kscnW5yb4sXwiAWtoFPlPe4Gr8lci%2FHbCTDaCmw817GL3Yfrt1ziJgsG%2FK4rrFSIIItuLAlHQD8HouvDD3OSLHdsqoDSD5q3j6eP4EzOC3MbZhO5W3YmbnD54N6RdA0Yd3FdhvQcaT24kxH4J4ewi21Ocx0vcNmzDcmq%2FBBjqkAdjbMvf11V00mqQm22hESNFeX%2BX%2B4OGD2q0vGSHs3eOgR0ASnHZ588s35u1WCkKGTfUK%2BlG9Dci8T1nnP9TokmaneACkS6UpH56ck3vIR9DaTbQvMML%2FXPBnONpQDi49cvX6cxKvCBfKLZ%2Bo%2FC9x8j2WMHYGoiC%2BnIV52OEDQUjPNV4DHduENQr8eM443YtE5vP4vKvRKFqR3%2FzNn%2FYBgD7bE%2Bpf&X-Amz-Signature=38db6647b704fc7ce4661c9408ac235689585490d67c0df7fdaa5c8534a78ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDSBV7T%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B8UcIS%2B34E3WS6XCFgX02l0wwnJLvXUS6Gh%2F6Xwb90QIhAPPeFShX8PWmyZnWKlWfmaYPlI%2BCUcCqGGQBnz%2FNzggOKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdiGtejrgm6AdTY1wq3APu5mKy%2B6cU8c8FnNKEKRV0lHpTOuRJqVh%2BxcHkJQeuLPuzfFppyvZwMsVRkkK%2FizSJPcQRWnIWtMG%2Bh4OZ%2FCHBSn1Cz7qeQNd47R%2BQuLcmnLu86PViyp5nizuhtHex0sd83o2ZBrCzLX26FtMtwkhtev2Zby3mvl%2BG2EFphqXuZkPz9ND7olAA9ClAG5DMohmFV4K2pVV2ahjBwqkRLR0Dqn8yqHayaCV3ZzEYhwf1dhbMEkfiF20Rbfa91upCe3D1gkwiahS2x1RLwczo6wb16VMRpg79VYDkSEFjbP94VdLeH3%2F8VjBTIUSZV1%2FH5vGyF%2B60WqbEGto25GPm7oEstMyNmqP1I4lyzjq2ZCHlb1GHexqnFr6xwTdMaoe97iKfWVWfSmAz%2Bbknk%2BVH4Ib1VJSPWOIaJ7fh%2BS2t2HLEQw8Jpb%2FgeAcTyqB3iy1D7o2wsImk8Y52STGCcMazp%2BiBfIp0X8kscnW5yb4sXwiAWtoFPlPe4Gr8lci%2FHbCTDaCmw817GL3Yfrt1ziJgsG%2FK4rrFSIIItuLAlHQD8HouvDD3OSLHdsqoDSD5q3j6eP4EzOC3MbZhO5W3YmbnD54N6RdA0Yd3FdhvQcaT24kxH4J4ewi21Ocx0vcNmzDcmq%2FBBjqkAdjbMvf11V00mqQm22hESNFeX%2BX%2B4OGD2q0vGSHs3eOgR0ASnHZ588s35u1WCkKGTfUK%2BlG9Dci8T1nnP9TokmaneACkS6UpH56ck3vIR9DaTbQvMML%2FXPBnONpQDi49cvX6cxKvCBfKLZ%2Bo%2FC9x8j2WMHYGoiC%2BnIV52OEDQUjPNV4DHduENQr8eM443YtE5vP4vKvRKFqR3%2FzNn%2FYBgD7bE%2Bpf&X-Amz-Signature=58773842cccdfa7b6655e9c9be1f0a25634e2616fb634bee780b30f40643fc72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDSBV7T%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B8UcIS%2B34E3WS6XCFgX02l0wwnJLvXUS6Gh%2F6Xwb90QIhAPPeFShX8PWmyZnWKlWfmaYPlI%2BCUcCqGGQBnz%2FNzggOKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdiGtejrgm6AdTY1wq3APu5mKy%2B6cU8c8FnNKEKRV0lHpTOuRJqVh%2BxcHkJQeuLPuzfFppyvZwMsVRkkK%2FizSJPcQRWnIWtMG%2Bh4OZ%2FCHBSn1Cz7qeQNd47R%2BQuLcmnLu86PViyp5nizuhtHex0sd83o2ZBrCzLX26FtMtwkhtev2Zby3mvl%2BG2EFphqXuZkPz9ND7olAA9ClAG5DMohmFV4K2pVV2ahjBwqkRLR0Dqn8yqHayaCV3ZzEYhwf1dhbMEkfiF20Rbfa91upCe3D1gkwiahS2x1RLwczo6wb16VMRpg79VYDkSEFjbP94VdLeH3%2F8VjBTIUSZV1%2FH5vGyF%2B60WqbEGto25GPm7oEstMyNmqP1I4lyzjq2ZCHlb1GHexqnFr6xwTdMaoe97iKfWVWfSmAz%2Bbknk%2BVH4Ib1VJSPWOIaJ7fh%2BS2t2HLEQw8Jpb%2FgeAcTyqB3iy1D7o2wsImk8Y52STGCcMazp%2BiBfIp0X8kscnW5yb4sXwiAWtoFPlPe4Gr8lci%2FHbCTDaCmw817GL3Yfrt1ziJgsG%2FK4rrFSIIItuLAlHQD8HouvDD3OSLHdsqoDSD5q3j6eP4EzOC3MbZhO5W3YmbnD54N6RdA0Yd3FdhvQcaT24kxH4J4ewi21Ocx0vcNmzDcmq%2FBBjqkAdjbMvf11V00mqQm22hESNFeX%2BX%2B4OGD2q0vGSHs3eOgR0ASnHZ588s35u1WCkKGTfUK%2BlG9Dci8T1nnP9TokmaneACkS6UpH56ck3vIR9DaTbQvMML%2FXPBnONpQDi49cvX6cxKvCBfKLZ%2Bo%2FC9x8j2WMHYGoiC%2BnIV52OEDQUjPNV4DHduENQr8eM443YtE5vP4vKvRKFqR3%2FzNn%2FYBgD7bE%2Bpf&X-Amz-Signature=ddbf0f6a0fa35dfb07566d0c7f7edd49fa68b3ee2eb8ad3ec66d8f5bb943a11c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDSBV7T%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B8UcIS%2B34E3WS6XCFgX02l0wwnJLvXUS6Gh%2F6Xwb90QIhAPPeFShX8PWmyZnWKlWfmaYPlI%2BCUcCqGGQBnz%2FNzggOKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdiGtejrgm6AdTY1wq3APu5mKy%2B6cU8c8FnNKEKRV0lHpTOuRJqVh%2BxcHkJQeuLPuzfFppyvZwMsVRkkK%2FizSJPcQRWnIWtMG%2Bh4OZ%2FCHBSn1Cz7qeQNd47R%2BQuLcmnLu86PViyp5nizuhtHex0sd83o2ZBrCzLX26FtMtwkhtev2Zby3mvl%2BG2EFphqXuZkPz9ND7olAA9ClAG5DMohmFV4K2pVV2ahjBwqkRLR0Dqn8yqHayaCV3ZzEYhwf1dhbMEkfiF20Rbfa91upCe3D1gkwiahS2x1RLwczo6wb16VMRpg79VYDkSEFjbP94VdLeH3%2F8VjBTIUSZV1%2FH5vGyF%2B60WqbEGto25GPm7oEstMyNmqP1I4lyzjq2ZCHlb1GHexqnFr6xwTdMaoe97iKfWVWfSmAz%2Bbknk%2BVH4Ib1VJSPWOIaJ7fh%2BS2t2HLEQw8Jpb%2FgeAcTyqB3iy1D7o2wsImk8Y52STGCcMazp%2BiBfIp0X8kscnW5yb4sXwiAWtoFPlPe4Gr8lci%2FHbCTDaCmw817GL3Yfrt1ziJgsG%2FK4rrFSIIItuLAlHQD8HouvDD3OSLHdsqoDSD5q3j6eP4EzOC3MbZhO5W3YmbnD54N6RdA0Yd3FdhvQcaT24kxH4J4ewi21Ocx0vcNmzDcmq%2FBBjqkAdjbMvf11V00mqQm22hESNFeX%2BX%2B4OGD2q0vGSHs3eOgR0ASnHZ588s35u1WCkKGTfUK%2BlG9Dci8T1nnP9TokmaneACkS6UpH56ck3vIR9DaTbQvMML%2FXPBnONpQDi49cvX6cxKvCBfKLZ%2Bo%2FC9x8j2WMHYGoiC%2BnIV52OEDQUjPNV4DHduENQr8eM443YtE5vP4vKvRKFqR3%2FzNn%2FYBgD7bE%2Bpf&X-Amz-Signature=d144997e59ace83c83fd55631f559e96dd727845576a8ec0983cabdfd291b0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QDSBV7T%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B8UcIS%2B34E3WS6XCFgX02l0wwnJLvXUS6Gh%2F6Xwb90QIhAPPeFShX8PWmyZnWKlWfmaYPlI%2BCUcCqGGQBnz%2FNzggOKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdiGtejrgm6AdTY1wq3APu5mKy%2B6cU8c8FnNKEKRV0lHpTOuRJqVh%2BxcHkJQeuLPuzfFppyvZwMsVRkkK%2FizSJPcQRWnIWtMG%2Bh4OZ%2FCHBSn1Cz7qeQNd47R%2BQuLcmnLu86PViyp5nizuhtHex0sd83o2ZBrCzLX26FtMtwkhtev2Zby3mvl%2BG2EFphqXuZkPz9ND7olAA9ClAG5DMohmFV4K2pVV2ahjBwqkRLR0Dqn8yqHayaCV3ZzEYhwf1dhbMEkfiF20Rbfa91upCe3D1gkwiahS2x1RLwczo6wb16VMRpg79VYDkSEFjbP94VdLeH3%2F8VjBTIUSZV1%2FH5vGyF%2B60WqbEGto25GPm7oEstMyNmqP1I4lyzjq2ZCHlb1GHexqnFr6xwTdMaoe97iKfWVWfSmAz%2Bbknk%2BVH4Ib1VJSPWOIaJ7fh%2BS2t2HLEQw8Jpb%2FgeAcTyqB3iy1D7o2wsImk8Y52STGCcMazp%2BiBfIp0X8kscnW5yb4sXwiAWtoFPlPe4Gr8lci%2FHbCTDaCmw817GL3Yfrt1ziJgsG%2FK4rrFSIIItuLAlHQD8HouvDD3OSLHdsqoDSD5q3j6eP4EzOC3MbZhO5W3YmbnD54N6RdA0Yd3FdhvQcaT24kxH4J4ewi21Ocx0vcNmzDcmq%2FBBjqkAdjbMvf11V00mqQm22hESNFeX%2BX%2B4OGD2q0vGSHs3eOgR0ASnHZ588s35u1WCkKGTfUK%2BlG9Dci8T1nnP9TokmaneACkS6UpH56ck3vIR9DaTbQvMML%2FXPBnONpQDi49cvX6cxKvCBfKLZ%2Bo%2FC9x8j2WMHYGoiC%2BnIV52OEDQUjPNV4DHduENQr8eM443YtE5vP4vKvRKFqR3%2FzNn%2FYBgD7bE%2Bpf&X-Amz-Signature=ea5d9303e2872023f88cb633b680b80ad164e31ccc7b952660e7d3a535f10a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYSWTCW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT98fDDLG1tIYodDgq1QNMuhy%2FAPMj4DRJUk4AA%2F1s9AiBsWZ7EJG93%2F0iqTR0zrGonoUfdFJMwd8LG5KZKE%2FBz2Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1z1V%2FQUmNXMuvYShKtwDTPSA%2FG7eZgasH4tMhoA6c4J0lqu4Qthw4tka0NPHlwDW5AANPo%2BaV9OejDNMcmrwl8UmcVKakAIKXOax1LXzGREWJzhWiFAH3Fq9S1fUMri%2Bz22j3AdVeRkba4%2Fs47y166y5Pdpn24xn2q7ofuy%2BSiqrnbQrN%2FCErwDOeL9QXWb8coOZzh4VwklYGL9xKRt7CltaPXd67gwFG%2B9zxeh7jdsrZpGKRCJc8Ap9N%2F6iUjLsjauyGvZLiNj4rqqgoqegnbEdkdY4ubpHrFXsVarCW%2FX%2BNzPd%2FZu4xyZraFDVxLpnYDG8WAQm7lR9FomK3mAWAh3MSb5jGAzDRj%2B8OxxEGXt2ZSQbK9Q%2B%2BZ5SMz2nWQhdIUPz8XphlQagm9PX%2BW7nvYVbQ0aM2nppzccCVIk2kLrOoufxt8nfLRISV%2BqaD2QGpWO890o6YZJEUjBRgGlCTtapF6UWJi4%2BmkgQESoR%2Blnk0aHBlde464snMJDr1049IFyuGTVsLi38uLJzRo9BYwgQTxCC%2BZ6nNhj99gJKoT%2Fq2W6EJQwz5FdqnawmN3hleue8viqp3ogiHLw6AR6PV0q2N0BdeE4nkO%2BN5vN%2FSKBc45RbbFBKbpUDCaBHrJMqsuLKi3Ye3hjApugwq4ervgY6pgHSN0KCpvkhxmuuw89rDe7uOJvLfLobFS0xN4gl4BZ779EGcDkGAZCUZB9F20CRXTXEzlJX6e4h%2BaSXWnsKp2tQv0aZnWX%2Bo1RLMBVvR8%2B9HhpTEDGkVscgcp30V1USUVgMWhZb8PXASX1yPeDlBqG0FHGfzmDcsfXyKrsoLYpQzU8Agsc1n3njdIFIfZcHAtS2NiL8b46jWBZX752MpCnz9H0x4d2v&X-Amz-Signature=cf4b37096c32d79332536418f44f8367893e6d3a38bd269fba9d7b3efd8b348e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYSWTCW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT98fDDLG1tIYodDgq1QNMuhy%2FAPMj4DRJUk4AA%2F1s9AiBsWZ7EJG93%2F0iqTR0zrGonoUfdFJMwd8LG5KZKE%2FBz2Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1z1V%2FQUmNXMuvYShKtwDTPSA%2FG7eZgasH4tMhoA6c4J0lqu4Qthw4tka0NPHlwDW5AANPo%2BaV9OejDNMcmrwl8UmcVKakAIKXOax1LXzGREWJzhWiFAH3Fq9S1fUMri%2Bz22j3AdVeRkba4%2Fs47y166y5Pdpn24xn2q7ofuy%2BSiqrnbQrN%2FCErwDOeL9QXWb8coOZzh4VwklYGL9xKRt7CltaPXd67gwFG%2B9zxeh7jdsrZpGKRCJc8Ap9N%2F6iUjLsjauyGvZLiNj4rqqgoqegnbEdkdY4ubpHrFXsVarCW%2FX%2BNzPd%2FZu4xyZraFDVxLpnYDG8WAQm7lR9FomK3mAWAh3MSb5jGAzDRj%2B8OxxEGXt2ZSQbK9Q%2B%2BZ5SMz2nWQhdIUPz8XphlQagm9PX%2BW7nvYVbQ0aM2nppzccCVIk2kLrOoufxt8nfLRISV%2BqaD2QGpWO890o6YZJEUjBRgGlCTtapF6UWJi4%2BmkgQESoR%2Blnk0aHBlde464snMJDr1049IFyuGTVsLi38uLJzRo9BYwgQTxCC%2BZ6nNhj99gJKoT%2Fq2W6EJQwz5FdqnawmN3hleue8viqp3ogiHLw6AR6PV0q2N0BdeE4nkO%2BN5vN%2FSKBc45RbbFBKbpUDCaBHrJMqsuLKi3Ye3hjApugwq4ervgY6pgHSN0KCpvkhxmuuw89rDe7uOJvLfLobFS0xN4gl4BZ779EGcDkGAZCUZB9F20CRXTXEzlJX6e4h%2BaSXWnsKp2tQv0aZnWX%2Bo1RLMBVvR8%2B9HhpTEDGkVscgcp30V1USUVgMWhZb8PXASX1yPeDlBqG0FHGfzmDcsfXyKrsoLYpQzU8Agsc1n3njdIFIfZcHAtS2NiL8b46jWBZX752MpCnz9H0x4d2v&X-Amz-Signature=5ff9d2113cc74080d03b41d4af15732004f9243e5cdf1ff7918fd63e444a1c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYSWTCW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT98fDDLG1tIYodDgq1QNMuhy%2FAPMj4DRJUk4AA%2F1s9AiBsWZ7EJG93%2F0iqTR0zrGonoUfdFJMwd8LG5KZKE%2FBz2Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1z1V%2FQUmNXMuvYShKtwDTPSA%2FG7eZgasH4tMhoA6c4J0lqu4Qthw4tka0NPHlwDW5AANPo%2BaV9OejDNMcmrwl8UmcVKakAIKXOax1LXzGREWJzhWiFAH3Fq9S1fUMri%2Bz22j3AdVeRkba4%2Fs47y166y5Pdpn24xn2q7ofuy%2BSiqrnbQrN%2FCErwDOeL9QXWb8coOZzh4VwklYGL9xKRt7CltaPXd67gwFG%2B9zxeh7jdsrZpGKRCJc8Ap9N%2F6iUjLsjauyGvZLiNj4rqqgoqegnbEdkdY4ubpHrFXsVarCW%2FX%2BNzPd%2FZu4xyZraFDVxLpnYDG8WAQm7lR9FomK3mAWAh3MSb5jGAzDRj%2B8OxxEGXt2ZSQbK9Q%2B%2BZ5SMz2nWQhdIUPz8XphlQagm9PX%2BW7nvYVbQ0aM2nppzccCVIk2kLrOoufxt8nfLRISV%2BqaD2QGpWO890o6YZJEUjBRgGlCTtapF6UWJi4%2BmkgQESoR%2Blnk0aHBlde464snMJDr1049IFyuGTVsLi38uLJzRo9BYwgQTxCC%2BZ6nNhj99gJKoT%2Fq2W6EJQwz5FdqnawmN3hleue8viqp3ogiHLw6AR6PV0q2N0BdeE4nkO%2BN5vN%2FSKBc45RbbFBKbpUDCaBHrJMqsuLKi3Ye3hjApugwq4ervgY6pgHSN0KCpvkhxmuuw89rDe7uOJvLfLobFS0xN4gl4BZ779EGcDkGAZCUZB9F20CRXTXEzlJX6e4h%2BaSXWnsKp2tQv0aZnWX%2Bo1RLMBVvR8%2B9HhpTEDGkVscgcp30V1USUVgMWhZb8PXASX1yPeDlBqG0FHGfzmDcsfXyKrsoLYpQzU8Agsc1n3njdIFIfZcHAtS2NiL8b46jWBZX752MpCnz9H0x4d2v&X-Amz-Signature=bc5747bfbf3284f692c7491530768e5b52610f06c619beee7134cf84d1f71b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYSWTCW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT98fDDLG1tIYodDgq1QNMuhy%2FAPMj4DRJUk4AA%2F1s9AiBsWZ7EJG93%2F0iqTR0zrGonoUfdFJMwd8LG5KZKE%2FBz2Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1z1V%2FQUmNXMuvYShKtwDTPSA%2FG7eZgasH4tMhoA6c4J0lqu4Qthw4tka0NPHlwDW5AANPo%2BaV9OejDNMcmrwl8UmcVKakAIKXOax1LXzGREWJzhWiFAH3Fq9S1fUMri%2Bz22j3AdVeRkba4%2Fs47y166y5Pdpn24xn2q7ofuy%2BSiqrnbQrN%2FCErwDOeL9QXWb8coOZzh4VwklYGL9xKRt7CltaPXd67gwFG%2B9zxeh7jdsrZpGKRCJc8Ap9N%2F6iUjLsjauyGvZLiNj4rqqgoqegnbEdkdY4ubpHrFXsVarCW%2FX%2BNzPd%2FZu4xyZraFDVxLpnYDG8WAQm7lR9FomK3mAWAh3MSb5jGAzDRj%2B8OxxEGXt2ZSQbK9Q%2B%2BZ5SMz2nWQhdIUPz8XphlQagm9PX%2BW7nvYVbQ0aM2nppzccCVIk2kLrOoufxt8nfLRISV%2BqaD2QGpWO890o6YZJEUjBRgGlCTtapF6UWJi4%2BmkgQESoR%2Blnk0aHBlde464snMJDr1049IFyuGTVsLi38uLJzRo9BYwgQTxCC%2BZ6nNhj99gJKoT%2Fq2W6EJQwz5FdqnawmN3hleue8viqp3ogiHLw6AR6PV0q2N0BdeE4nkO%2BN5vN%2FSKBc45RbbFBKbpUDCaBHrJMqsuLKi3Ye3hjApugwq4ervgY6pgHSN0KCpvkhxmuuw89rDe7uOJvLfLobFS0xN4gl4BZ779EGcDkGAZCUZB9F20CRXTXEzlJX6e4h%2BaSXWnsKp2tQv0aZnWX%2Bo1RLMBVvR8%2B9HhpTEDGkVscgcp30V1USUVgMWhZb8PXASX1yPeDlBqG0FHGfzmDcsfXyKrsoLYpQzU8Agsc1n3njdIFIfZcHAtS2NiL8b46jWBZX752MpCnz9H0x4d2v&X-Amz-Signature=841d29b8654f0d590b15d2e7528073a9887c7f3d56f9bc551723991c8581f79f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYSWTCW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT98fDDLG1tIYodDgq1QNMuhy%2FAPMj4DRJUk4AA%2F1s9AiBsWZ7EJG93%2F0iqTR0zrGonoUfdFJMwd8LG5KZKE%2FBz2Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1z1V%2FQUmNXMuvYShKtwDTPSA%2FG7eZgasH4tMhoA6c4J0lqu4Qthw4tka0NPHlwDW5AANPo%2BaV9OejDNMcmrwl8UmcVKakAIKXOax1LXzGREWJzhWiFAH3Fq9S1fUMri%2Bz22j3AdVeRkba4%2Fs47y166y5Pdpn24xn2q7ofuy%2BSiqrnbQrN%2FCErwDOeL9QXWb8coOZzh4VwklYGL9xKRt7CltaPXd67gwFG%2B9zxeh7jdsrZpGKRCJc8Ap9N%2F6iUjLsjauyGvZLiNj4rqqgoqegnbEdkdY4ubpHrFXsVarCW%2FX%2BNzPd%2FZu4xyZraFDVxLpnYDG8WAQm7lR9FomK3mAWAh3MSb5jGAzDRj%2B8OxxEGXt2ZSQbK9Q%2B%2BZ5SMz2nWQhdIUPz8XphlQagm9PX%2BW7nvYVbQ0aM2nppzccCVIk2kLrOoufxt8nfLRISV%2BqaD2QGpWO890o6YZJEUjBRgGlCTtapF6UWJi4%2BmkgQESoR%2Blnk0aHBlde464snMJDr1049IFyuGTVsLi38uLJzRo9BYwgQTxCC%2BZ6nNhj99gJKoT%2Fq2W6EJQwz5FdqnawmN3hleue8viqp3ogiHLw6AR6PV0q2N0BdeE4nkO%2BN5vN%2FSKBc45RbbFBKbpUDCaBHrJMqsuLKi3Ye3hjApugwq4ervgY6pgHSN0KCpvkhxmuuw89rDe7uOJvLfLobFS0xN4gl4BZ779EGcDkGAZCUZB9F20CRXTXEzlJX6e4h%2BaSXWnsKp2tQv0aZnWX%2Bo1RLMBVvR8%2B9HhpTEDGkVscgcp30V1USUVgMWhZb8PXASX1yPeDlBqG0FHGfzmDcsfXyKrsoLYpQzU8Agsc1n3njdIFIfZcHAtS2NiL8b46jWBZX752MpCnz9H0x4d2v&X-Amz-Signature=a544f286b8365ea313bc6ad0db0c1a17e36f5660582d58eb10e06ee55f8df44d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYSWTCW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT98fDDLG1tIYodDgq1QNMuhy%2FAPMj4DRJUk4AA%2F1s9AiBsWZ7EJG93%2F0iqTR0zrGonoUfdFJMwd8LG5KZKE%2FBz2Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1z1V%2FQUmNXMuvYShKtwDTPSA%2FG7eZgasH4tMhoA6c4J0lqu4Qthw4tka0NPHlwDW5AANPo%2BaV9OejDNMcmrwl8UmcVKakAIKXOax1LXzGREWJzhWiFAH3Fq9S1fUMri%2Bz22j3AdVeRkba4%2Fs47y166y5Pdpn24xn2q7ofuy%2BSiqrnbQrN%2FCErwDOeL9QXWb8coOZzh4VwklYGL9xKRt7CltaPXd67gwFG%2B9zxeh7jdsrZpGKRCJc8Ap9N%2F6iUjLsjauyGvZLiNj4rqqgoqegnbEdkdY4ubpHrFXsVarCW%2FX%2BNzPd%2FZu4xyZraFDVxLpnYDG8WAQm7lR9FomK3mAWAh3MSb5jGAzDRj%2B8OxxEGXt2ZSQbK9Q%2B%2BZ5SMz2nWQhdIUPz8XphlQagm9PX%2BW7nvYVbQ0aM2nppzccCVIk2kLrOoufxt8nfLRISV%2BqaD2QGpWO890o6YZJEUjBRgGlCTtapF6UWJi4%2BmkgQESoR%2Blnk0aHBlde464snMJDr1049IFyuGTVsLi38uLJzRo9BYwgQTxCC%2BZ6nNhj99gJKoT%2Fq2W6EJQwz5FdqnawmN3hleue8viqp3ogiHLw6AR6PV0q2N0BdeE4nkO%2BN5vN%2FSKBc45RbbFBKbpUDCaBHrJMqsuLKi3Ye3hjApugwq4ervgY6pgHSN0KCpvkhxmuuw89rDe7uOJvLfLobFS0xN4gl4BZ779EGcDkGAZCUZB9F20CRXTXEzlJX6e4h%2BaSXWnsKp2tQv0aZnWX%2Bo1RLMBVvR8%2B9HhpTEDGkVscgcp30V1USUVgMWhZb8PXASX1yPeDlBqG0FHGfzmDcsfXyKrsoLYpQzU8Agsc1n3njdIFIfZcHAtS2NiL8b46jWBZX752MpCnz9H0x4d2v&X-Amz-Signature=1b96654ec8ef419c5591b5d44633b05fc87fefddeec227212955dacdfcf8b8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYSWTCW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT98fDDLG1tIYodDgq1QNMuhy%2FAPMj4DRJUk4AA%2F1s9AiBsWZ7EJG93%2F0iqTR0zrGonoUfdFJMwd8LG5KZKE%2FBz2Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1z1V%2FQUmNXMuvYShKtwDTPSA%2FG7eZgasH4tMhoA6c4J0lqu4Qthw4tka0NPHlwDW5AANPo%2BaV9OejDNMcmrwl8UmcVKakAIKXOax1LXzGREWJzhWiFAH3Fq9S1fUMri%2Bz22j3AdVeRkba4%2Fs47y166y5Pdpn24xn2q7ofuy%2BSiqrnbQrN%2FCErwDOeL9QXWb8coOZzh4VwklYGL9xKRt7CltaPXd67gwFG%2B9zxeh7jdsrZpGKRCJc8Ap9N%2F6iUjLsjauyGvZLiNj4rqqgoqegnbEdkdY4ubpHrFXsVarCW%2FX%2BNzPd%2FZu4xyZraFDVxLpnYDG8WAQm7lR9FomK3mAWAh3MSb5jGAzDRj%2B8OxxEGXt2ZSQbK9Q%2B%2BZ5SMz2nWQhdIUPz8XphlQagm9PX%2BW7nvYVbQ0aM2nppzccCVIk2kLrOoufxt8nfLRISV%2BqaD2QGpWO890o6YZJEUjBRgGlCTtapF6UWJi4%2BmkgQESoR%2Blnk0aHBlde464snMJDr1049IFyuGTVsLi38uLJzRo9BYwgQTxCC%2BZ6nNhj99gJKoT%2Fq2W6EJQwz5FdqnawmN3hleue8viqp3ogiHLw6AR6PV0q2N0BdeE4nkO%2BN5vN%2FSKBc45RbbFBKbpUDCaBHrJMqsuLKi3Ye3hjApugwq4ervgY6pgHSN0KCpvkhxmuuw89rDe7uOJvLfLobFS0xN4gl4BZ779EGcDkGAZCUZB9F20CRXTXEzlJX6e4h%2BaSXWnsKp2tQv0aZnWX%2Bo1RLMBVvR8%2B9HhpTEDGkVscgcp30V1USUVgMWhZb8PXASX1yPeDlBqG0FHGfzmDcsfXyKrsoLYpQzU8Agsc1n3njdIFIfZcHAtS2NiL8b46jWBZX752MpCnz9H0x4d2v&X-Amz-Signature=bdaf0495f964837f0f0b8b569a83497b9bbea5057043243c3aed20ca9d8b504c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYSWTCW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT98fDDLG1tIYodDgq1QNMuhy%2FAPMj4DRJUk4AA%2F1s9AiBsWZ7EJG93%2F0iqTR0zrGonoUfdFJMwd8LG5KZKE%2FBz2Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1z1V%2FQUmNXMuvYShKtwDTPSA%2FG7eZgasH4tMhoA6c4J0lqu4Qthw4tka0NPHlwDW5AANPo%2BaV9OejDNMcmrwl8UmcVKakAIKXOax1LXzGREWJzhWiFAH3Fq9S1fUMri%2Bz22j3AdVeRkba4%2Fs47y166y5Pdpn24xn2q7ofuy%2BSiqrnbQrN%2FCErwDOeL9QXWb8coOZzh4VwklYGL9xKRt7CltaPXd67gwFG%2B9zxeh7jdsrZpGKRCJc8Ap9N%2F6iUjLsjauyGvZLiNj4rqqgoqegnbEdkdY4ubpHrFXsVarCW%2FX%2BNzPd%2FZu4xyZraFDVxLpnYDG8WAQm7lR9FomK3mAWAh3MSb5jGAzDRj%2B8OxxEGXt2ZSQbK9Q%2B%2BZ5SMz2nWQhdIUPz8XphlQagm9PX%2BW7nvYVbQ0aM2nppzccCVIk2kLrOoufxt8nfLRISV%2BqaD2QGpWO890o6YZJEUjBRgGlCTtapF6UWJi4%2BmkgQESoR%2Blnk0aHBlde464snMJDr1049IFyuGTVsLi38uLJzRo9BYwgQTxCC%2BZ6nNhj99gJKoT%2Fq2W6EJQwz5FdqnawmN3hleue8viqp3ogiHLw6AR6PV0q2N0BdeE4nkO%2BN5vN%2FSKBc45RbbFBKbpUDCaBHrJMqsuLKi3Ye3hjApugwq4ervgY6pgHSN0KCpvkhxmuuw89rDe7uOJvLfLobFS0xN4gl4BZ779EGcDkGAZCUZB9F20CRXTXEzlJX6e4h%2BaSXWnsKp2tQv0aZnWX%2Bo1RLMBVvR8%2B9HhpTEDGkVscgcp30V1USUVgMWhZb8PXASX1yPeDlBqG0FHGfzmDcsfXyKrsoLYpQzU8Agsc1n3njdIFIfZcHAtS2NiL8b46jWBZX752MpCnz9H0x4d2v&X-Amz-Signature=4b6c9d54d26fae9a660ac27557fdcd4f4de018c30a205563dde4c190fdcea085&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

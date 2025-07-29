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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BF4G57%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEZ6P5prsu2LOKcY%2B5AiT1xBCN62BX0tZ9zFin3uxdDpAiAZTHohrxY%2B5yyINJtanqcutTcZeOtQoGsh4sFQB%2Fp4tCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Jg58p6xSiIZ5JWVKtwDmkfvzCmeXkEikZtV6KM0%2BhQ1KuGoiS85PJOt0%2BzuhJX8MtKTp5TFRh8EvrzyKMmmPFfuhph81JtEBEljIfOssh7ejDSdX9iQglE055wWyS0rreoqMwaeKDyjIuDDlblKbcdEnoBIsUzh%2FjxUPfYq8qWT4yMdoZK03HA0lY9NnrVN%2FGjesNJdQvyzrrFgYIxn2r2W4a%2F5e5OwSX1qiJ1%2Fj6kA3%2Be8hsq0QKPKUFD2AE1tAZtBP%2BSFjb8oB9PE0NXreb0QqQP0Ba6KtQgeibVSak0Ombdhld0CKtQmAWKvLGZIc22N1Ll%2FSCNQZ7i6%2BSS4Fspshs2Dl5OClnpSprGmQ9kQoygRC49GS2qVpwxtaYcg343hlNCxWOMS%2Fcep7EIaky%2F7Z2rW2dtgE2NTlUgdnQ9d5A5TaObZm8VY8tVPbeZFElzopo4PfR6MHLOvtMwpBzi5ZyM8DpyLqjxMN8vDN8hqzQsRC%2Ft0L6mOnaKUpnQgA8i9ohFWQyC2WxtbiCEhg%2FijJ7jIByH0voKE81EsfNpE0fEVkNq8gKD13vej61xQhU49hVBV8g3cnv8xlkWkOV63uT7iz2eWPVdCW%2B3eqiof08QVkVz3qNqivm5vxZFLfzKOPCEnaKOcPL0ws7WhxAY6pgHJu%2FhUOHy%2FS2bUCgyQC4y75bFZOSG%2FfSDlon4Ze1L03ljo18pPMcyw6w0mQPLZlq%2BqPz2DOjuCEgUEpyn%2Fy%2B8DIExo6ROK4t3N3iVVWZEjPajPYgjlYwF6bnnPppg7XUhRgpEfeXueP2wmJGT%2FepNpvQarNE5VYeW7SIKHEAYgTNB2trGAsNLr3UOhuaUt5xnFaS%2BsORaORsoPOdfViwPEYOnEq2G2&X-Amz-Signature=a3d6593f63c6ccd873a732f1b2573b2ff03a0434b1c4ff609b39c225a286f933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BF4G57%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEZ6P5prsu2LOKcY%2B5AiT1xBCN62BX0tZ9zFin3uxdDpAiAZTHohrxY%2B5yyINJtanqcutTcZeOtQoGsh4sFQB%2Fp4tCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Jg58p6xSiIZ5JWVKtwDmkfvzCmeXkEikZtV6KM0%2BhQ1KuGoiS85PJOt0%2BzuhJX8MtKTp5TFRh8EvrzyKMmmPFfuhph81JtEBEljIfOssh7ejDSdX9iQglE055wWyS0rreoqMwaeKDyjIuDDlblKbcdEnoBIsUzh%2FjxUPfYq8qWT4yMdoZK03HA0lY9NnrVN%2FGjesNJdQvyzrrFgYIxn2r2W4a%2F5e5OwSX1qiJ1%2Fj6kA3%2Be8hsq0QKPKUFD2AE1tAZtBP%2BSFjb8oB9PE0NXreb0QqQP0Ba6KtQgeibVSak0Ombdhld0CKtQmAWKvLGZIc22N1Ll%2FSCNQZ7i6%2BSS4Fspshs2Dl5OClnpSprGmQ9kQoygRC49GS2qVpwxtaYcg343hlNCxWOMS%2Fcep7EIaky%2F7Z2rW2dtgE2NTlUgdnQ9d5A5TaObZm8VY8tVPbeZFElzopo4PfR6MHLOvtMwpBzi5ZyM8DpyLqjxMN8vDN8hqzQsRC%2Ft0L6mOnaKUpnQgA8i9ohFWQyC2WxtbiCEhg%2FijJ7jIByH0voKE81EsfNpE0fEVkNq8gKD13vej61xQhU49hVBV8g3cnv8xlkWkOV63uT7iz2eWPVdCW%2B3eqiof08QVkVz3qNqivm5vxZFLfzKOPCEnaKOcPL0ws7WhxAY6pgHJu%2FhUOHy%2FS2bUCgyQC4y75bFZOSG%2FfSDlon4Ze1L03ljo18pPMcyw6w0mQPLZlq%2BqPz2DOjuCEgUEpyn%2Fy%2B8DIExo6ROK4t3N3iVVWZEjPajPYgjlYwF6bnnPppg7XUhRgpEfeXueP2wmJGT%2FepNpvQarNE5VYeW7SIKHEAYgTNB2trGAsNLr3UOhuaUt5xnFaS%2BsORaORsoPOdfViwPEYOnEq2G2&X-Amz-Signature=6a0f61a687c92fee290899de0e3c5d48ea844a49cb316e888f788b2b6b68292d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BF4G57%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEZ6P5prsu2LOKcY%2B5AiT1xBCN62BX0tZ9zFin3uxdDpAiAZTHohrxY%2B5yyINJtanqcutTcZeOtQoGsh4sFQB%2Fp4tCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Jg58p6xSiIZ5JWVKtwDmkfvzCmeXkEikZtV6KM0%2BhQ1KuGoiS85PJOt0%2BzuhJX8MtKTp5TFRh8EvrzyKMmmPFfuhph81JtEBEljIfOssh7ejDSdX9iQglE055wWyS0rreoqMwaeKDyjIuDDlblKbcdEnoBIsUzh%2FjxUPfYq8qWT4yMdoZK03HA0lY9NnrVN%2FGjesNJdQvyzrrFgYIxn2r2W4a%2F5e5OwSX1qiJ1%2Fj6kA3%2Be8hsq0QKPKUFD2AE1tAZtBP%2BSFjb8oB9PE0NXreb0QqQP0Ba6KtQgeibVSak0Ombdhld0CKtQmAWKvLGZIc22N1Ll%2FSCNQZ7i6%2BSS4Fspshs2Dl5OClnpSprGmQ9kQoygRC49GS2qVpwxtaYcg343hlNCxWOMS%2Fcep7EIaky%2F7Z2rW2dtgE2NTlUgdnQ9d5A5TaObZm8VY8tVPbeZFElzopo4PfR6MHLOvtMwpBzi5ZyM8DpyLqjxMN8vDN8hqzQsRC%2Ft0L6mOnaKUpnQgA8i9ohFWQyC2WxtbiCEhg%2FijJ7jIByH0voKE81EsfNpE0fEVkNq8gKD13vej61xQhU49hVBV8g3cnv8xlkWkOV63uT7iz2eWPVdCW%2B3eqiof08QVkVz3qNqivm5vxZFLfzKOPCEnaKOcPL0ws7WhxAY6pgHJu%2FhUOHy%2FS2bUCgyQC4y75bFZOSG%2FfSDlon4Ze1L03ljo18pPMcyw6w0mQPLZlq%2BqPz2DOjuCEgUEpyn%2Fy%2B8DIExo6ROK4t3N3iVVWZEjPajPYgjlYwF6bnnPppg7XUhRgpEfeXueP2wmJGT%2FepNpvQarNE5VYeW7SIKHEAYgTNB2trGAsNLr3UOhuaUt5xnFaS%2BsORaORsoPOdfViwPEYOnEq2G2&X-Amz-Signature=cd4d795ae17fc8796c59d423731e2e45f1ce285b1adc2d752afa0e58c7d13756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BF4G57%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEZ6P5prsu2LOKcY%2B5AiT1xBCN62BX0tZ9zFin3uxdDpAiAZTHohrxY%2B5yyINJtanqcutTcZeOtQoGsh4sFQB%2Fp4tCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Jg58p6xSiIZ5JWVKtwDmkfvzCmeXkEikZtV6KM0%2BhQ1KuGoiS85PJOt0%2BzuhJX8MtKTp5TFRh8EvrzyKMmmPFfuhph81JtEBEljIfOssh7ejDSdX9iQglE055wWyS0rreoqMwaeKDyjIuDDlblKbcdEnoBIsUzh%2FjxUPfYq8qWT4yMdoZK03HA0lY9NnrVN%2FGjesNJdQvyzrrFgYIxn2r2W4a%2F5e5OwSX1qiJ1%2Fj6kA3%2Be8hsq0QKPKUFD2AE1tAZtBP%2BSFjb8oB9PE0NXreb0QqQP0Ba6KtQgeibVSak0Ombdhld0CKtQmAWKvLGZIc22N1Ll%2FSCNQZ7i6%2BSS4Fspshs2Dl5OClnpSprGmQ9kQoygRC49GS2qVpwxtaYcg343hlNCxWOMS%2Fcep7EIaky%2F7Z2rW2dtgE2NTlUgdnQ9d5A5TaObZm8VY8tVPbeZFElzopo4PfR6MHLOvtMwpBzi5ZyM8DpyLqjxMN8vDN8hqzQsRC%2Ft0L6mOnaKUpnQgA8i9ohFWQyC2WxtbiCEhg%2FijJ7jIByH0voKE81EsfNpE0fEVkNq8gKD13vej61xQhU49hVBV8g3cnv8xlkWkOV63uT7iz2eWPVdCW%2B3eqiof08QVkVz3qNqivm5vxZFLfzKOPCEnaKOcPL0ws7WhxAY6pgHJu%2FhUOHy%2FS2bUCgyQC4y75bFZOSG%2FfSDlon4Ze1L03ljo18pPMcyw6w0mQPLZlq%2BqPz2DOjuCEgUEpyn%2Fy%2B8DIExo6ROK4t3N3iVVWZEjPajPYgjlYwF6bnnPppg7XUhRgpEfeXueP2wmJGT%2FepNpvQarNE5VYeW7SIKHEAYgTNB2trGAsNLr3UOhuaUt5xnFaS%2BsORaORsoPOdfViwPEYOnEq2G2&X-Amz-Signature=5230444ec3cc9c76e83f514248020a74286139814934888c8724a145a5b6975c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BF4G57%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEZ6P5prsu2LOKcY%2B5AiT1xBCN62BX0tZ9zFin3uxdDpAiAZTHohrxY%2B5yyINJtanqcutTcZeOtQoGsh4sFQB%2Fp4tCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Jg58p6xSiIZ5JWVKtwDmkfvzCmeXkEikZtV6KM0%2BhQ1KuGoiS85PJOt0%2BzuhJX8MtKTp5TFRh8EvrzyKMmmPFfuhph81JtEBEljIfOssh7ejDSdX9iQglE055wWyS0rreoqMwaeKDyjIuDDlblKbcdEnoBIsUzh%2FjxUPfYq8qWT4yMdoZK03HA0lY9NnrVN%2FGjesNJdQvyzrrFgYIxn2r2W4a%2F5e5OwSX1qiJ1%2Fj6kA3%2Be8hsq0QKPKUFD2AE1tAZtBP%2BSFjb8oB9PE0NXreb0QqQP0Ba6KtQgeibVSak0Ombdhld0CKtQmAWKvLGZIc22N1Ll%2FSCNQZ7i6%2BSS4Fspshs2Dl5OClnpSprGmQ9kQoygRC49GS2qVpwxtaYcg343hlNCxWOMS%2Fcep7EIaky%2F7Z2rW2dtgE2NTlUgdnQ9d5A5TaObZm8VY8tVPbeZFElzopo4PfR6MHLOvtMwpBzi5ZyM8DpyLqjxMN8vDN8hqzQsRC%2Ft0L6mOnaKUpnQgA8i9ohFWQyC2WxtbiCEhg%2FijJ7jIByH0voKE81EsfNpE0fEVkNq8gKD13vej61xQhU49hVBV8g3cnv8xlkWkOV63uT7iz2eWPVdCW%2B3eqiof08QVkVz3qNqivm5vxZFLfzKOPCEnaKOcPL0ws7WhxAY6pgHJu%2FhUOHy%2FS2bUCgyQC4y75bFZOSG%2FfSDlon4Ze1L03ljo18pPMcyw6w0mQPLZlq%2BqPz2DOjuCEgUEpyn%2Fy%2B8DIExo6ROK4t3N3iVVWZEjPajPYgjlYwF6bnnPppg7XUhRgpEfeXueP2wmJGT%2FepNpvQarNE5VYeW7SIKHEAYgTNB2trGAsNLr3UOhuaUt5xnFaS%2BsORaORsoPOdfViwPEYOnEq2G2&X-Amz-Signature=6c86859e02ee9ee0421092781f23a0b40172eda0bdfbe76c9ab90289a157e33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BF4G57%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEZ6P5prsu2LOKcY%2B5AiT1xBCN62BX0tZ9zFin3uxdDpAiAZTHohrxY%2B5yyINJtanqcutTcZeOtQoGsh4sFQB%2Fp4tCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Jg58p6xSiIZ5JWVKtwDmkfvzCmeXkEikZtV6KM0%2BhQ1KuGoiS85PJOt0%2BzuhJX8MtKTp5TFRh8EvrzyKMmmPFfuhph81JtEBEljIfOssh7ejDSdX9iQglE055wWyS0rreoqMwaeKDyjIuDDlblKbcdEnoBIsUzh%2FjxUPfYq8qWT4yMdoZK03HA0lY9NnrVN%2FGjesNJdQvyzrrFgYIxn2r2W4a%2F5e5OwSX1qiJ1%2Fj6kA3%2Be8hsq0QKPKUFD2AE1tAZtBP%2BSFjb8oB9PE0NXreb0QqQP0Ba6KtQgeibVSak0Ombdhld0CKtQmAWKvLGZIc22N1Ll%2FSCNQZ7i6%2BSS4Fspshs2Dl5OClnpSprGmQ9kQoygRC49GS2qVpwxtaYcg343hlNCxWOMS%2Fcep7EIaky%2F7Z2rW2dtgE2NTlUgdnQ9d5A5TaObZm8VY8tVPbeZFElzopo4PfR6MHLOvtMwpBzi5ZyM8DpyLqjxMN8vDN8hqzQsRC%2Ft0L6mOnaKUpnQgA8i9ohFWQyC2WxtbiCEhg%2FijJ7jIByH0voKE81EsfNpE0fEVkNq8gKD13vej61xQhU49hVBV8g3cnv8xlkWkOV63uT7iz2eWPVdCW%2B3eqiof08QVkVz3qNqivm5vxZFLfzKOPCEnaKOcPL0ws7WhxAY6pgHJu%2FhUOHy%2FS2bUCgyQC4y75bFZOSG%2FfSDlon4Ze1L03ljo18pPMcyw6w0mQPLZlq%2BqPz2DOjuCEgUEpyn%2Fy%2B8DIExo6ROK4t3N3iVVWZEjPajPYgjlYwF6bnnPppg7XUhRgpEfeXueP2wmJGT%2FepNpvQarNE5VYeW7SIKHEAYgTNB2trGAsNLr3UOhuaUt5xnFaS%2BsORaORsoPOdfViwPEYOnEq2G2&X-Amz-Signature=2226e3df66ce99ab401fdc7358f6fd966881aa002f78641547119705200a23b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BF4G57%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEZ6P5prsu2LOKcY%2B5AiT1xBCN62BX0tZ9zFin3uxdDpAiAZTHohrxY%2B5yyINJtanqcutTcZeOtQoGsh4sFQB%2Fp4tCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Jg58p6xSiIZ5JWVKtwDmkfvzCmeXkEikZtV6KM0%2BhQ1KuGoiS85PJOt0%2BzuhJX8MtKTp5TFRh8EvrzyKMmmPFfuhph81JtEBEljIfOssh7ejDSdX9iQglE055wWyS0rreoqMwaeKDyjIuDDlblKbcdEnoBIsUzh%2FjxUPfYq8qWT4yMdoZK03HA0lY9NnrVN%2FGjesNJdQvyzrrFgYIxn2r2W4a%2F5e5OwSX1qiJ1%2Fj6kA3%2Be8hsq0QKPKUFD2AE1tAZtBP%2BSFjb8oB9PE0NXreb0QqQP0Ba6KtQgeibVSak0Ombdhld0CKtQmAWKvLGZIc22N1Ll%2FSCNQZ7i6%2BSS4Fspshs2Dl5OClnpSprGmQ9kQoygRC49GS2qVpwxtaYcg343hlNCxWOMS%2Fcep7EIaky%2F7Z2rW2dtgE2NTlUgdnQ9d5A5TaObZm8VY8tVPbeZFElzopo4PfR6MHLOvtMwpBzi5ZyM8DpyLqjxMN8vDN8hqzQsRC%2Ft0L6mOnaKUpnQgA8i9ohFWQyC2WxtbiCEhg%2FijJ7jIByH0voKE81EsfNpE0fEVkNq8gKD13vej61xQhU49hVBV8g3cnv8xlkWkOV63uT7iz2eWPVdCW%2B3eqiof08QVkVz3qNqivm5vxZFLfzKOPCEnaKOcPL0ws7WhxAY6pgHJu%2FhUOHy%2FS2bUCgyQC4y75bFZOSG%2FfSDlon4Ze1L03ljo18pPMcyw6w0mQPLZlq%2BqPz2DOjuCEgUEpyn%2Fy%2B8DIExo6ROK4t3N3iVVWZEjPajPYgjlYwF6bnnPppg7XUhRgpEfeXueP2wmJGT%2FepNpvQarNE5VYeW7SIKHEAYgTNB2trGAsNLr3UOhuaUt5xnFaS%2BsORaORsoPOdfViwPEYOnEq2G2&X-Amz-Signature=a931a56a729b22de583280fc37c2aa0a5f9f9144b86f785853883c37b9f965d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BF4G57%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEZ6P5prsu2LOKcY%2B5AiT1xBCN62BX0tZ9zFin3uxdDpAiAZTHohrxY%2B5yyINJtanqcutTcZeOtQoGsh4sFQB%2Fp4tCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Jg58p6xSiIZ5JWVKtwDmkfvzCmeXkEikZtV6KM0%2BhQ1KuGoiS85PJOt0%2BzuhJX8MtKTp5TFRh8EvrzyKMmmPFfuhph81JtEBEljIfOssh7ejDSdX9iQglE055wWyS0rreoqMwaeKDyjIuDDlblKbcdEnoBIsUzh%2FjxUPfYq8qWT4yMdoZK03HA0lY9NnrVN%2FGjesNJdQvyzrrFgYIxn2r2W4a%2F5e5OwSX1qiJ1%2Fj6kA3%2Be8hsq0QKPKUFD2AE1tAZtBP%2BSFjb8oB9PE0NXreb0QqQP0Ba6KtQgeibVSak0Ombdhld0CKtQmAWKvLGZIc22N1Ll%2FSCNQZ7i6%2BSS4Fspshs2Dl5OClnpSprGmQ9kQoygRC49GS2qVpwxtaYcg343hlNCxWOMS%2Fcep7EIaky%2F7Z2rW2dtgE2NTlUgdnQ9d5A5TaObZm8VY8tVPbeZFElzopo4PfR6MHLOvtMwpBzi5ZyM8DpyLqjxMN8vDN8hqzQsRC%2Ft0L6mOnaKUpnQgA8i9ohFWQyC2WxtbiCEhg%2FijJ7jIByH0voKE81EsfNpE0fEVkNq8gKD13vej61xQhU49hVBV8g3cnv8xlkWkOV63uT7iz2eWPVdCW%2B3eqiof08QVkVz3qNqivm5vxZFLfzKOPCEnaKOcPL0ws7WhxAY6pgHJu%2FhUOHy%2FS2bUCgyQC4y75bFZOSG%2FfSDlon4Ze1L03ljo18pPMcyw6w0mQPLZlq%2BqPz2DOjuCEgUEpyn%2Fy%2B8DIExo6ROK4t3N3iVVWZEjPajPYgjlYwF6bnnPppg7XUhRgpEfeXueP2wmJGT%2FepNpvQarNE5VYeW7SIKHEAYgTNB2trGAsNLr3UOhuaUt5xnFaS%2BsORaORsoPOdfViwPEYOnEq2G2&X-Amz-Signature=234497b04d8a5aaaea42692f2fcaee7bb474ce45864db995552b71dd4739e36b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

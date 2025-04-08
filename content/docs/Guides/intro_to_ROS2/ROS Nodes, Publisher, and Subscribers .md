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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWY7LMM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVzDi2L3h08TVBLBbMPBAwwvH5RWehKXFuFbdftQrKgIgGN08OlS0y0sBwox%2BDr7LaHyXBYHsxwh%2BM4Sxyxv%2Bu9oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP2wUuhrjzmixMMziyrcA5a2AY70ciCt9bxkJeiCraAtPglfgUYPKaaQYkrtz22rp5ipTLb1aBOsBgx9ENZFdjVvrCz%2B6tNgIVb1%2BtaigKCk5TbUARkLg8NUrtE4emEbgtHDsWr7lf3sqE0LyTikhDDNndxt%2Bj7v7ogHUAzrT1XsQVkjcGIeLh%2FecZJK30ORvbWYVAc%2FyBaDuB1DVzaJNqon%2Fo3rOuCAJthYAY%2BAhQtZF4JQCm2R35G7p55n4dlRvjd5kb6cEP3d3pHLkE5DbFUqvRfJPhpjJKZbnAcgth32zFpuv7gHqwuKk05WCQbCy6wBGztMKzUfVnejeMpT%2F39ETmiX6QRZp%2FjIVVGM3rc74vC6O3HEspOM085Le3t4FUM3RmqpXjrMlzrhgQ0a3PTlmD%2BzyLBkyrrnAvjddNVHx0TkEtJru%2Fc8qeiiutR1hE2PvFzHxMImovxbYO%2FjfCYNZ5H0lmnBGKlke6p6IMD6GmyC6LRkHFcfOTr%2FyVHAvvRnqJ4W%2FDAr0IZCy1vDxed12rkb%2Fx9toszNeo7GgvxAqFgBOqFrSnHBL0gqeXv4DRCdb3ceXJdLLwdNKjDYZIOStw64j3XoUU%2Brkwd02OihlhRuD02OtAXUbfAkyiPaE3DJoNNI871eE10ZML650r8GOqUBUNYGx8RoCifdD%2FjGAkiM7zN8Npz76sixT9NxzaC310805pXV0QC%2B3iKEhkZaLnX0y7uZTPOw0v5%2F90CB92lSjgQEUSSDXQBt9W3j4u%2FcQs8TGFGZBPSwAiAa4W5K00ecull1eXH5MbMK5KDsTvaRnaT3ZAMaD4x0MUL7J0yGUCYcNxo%2FqxxaZ1YBG81I5VYhu8dke1UhVMhsi62Oy3iNGPVS1fDB&X-Amz-Signature=16c39ee958d8e944807ab3a3fdfe1e8082fe428c8c4f6103ad094fa84617c443&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWY7LMM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVzDi2L3h08TVBLBbMPBAwwvH5RWehKXFuFbdftQrKgIgGN08OlS0y0sBwox%2BDr7LaHyXBYHsxwh%2BM4Sxyxv%2Bu9oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP2wUuhrjzmixMMziyrcA5a2AY70ciCt9bxkJeiCraAtPglfgUYPKaaQYkrtz22rp5ipTLb1aBOsBgx9ENZFdjVvrCz%2B6tNgIVb1%2BtaigKCk5TbUARkLg8NUrtE4emEbgtHDsWr7lf3sqE0LyTikhDDNndxt%2Bj7v7ogHUAzrT1XsQVkjcGIeLh%2FecZJK30ORvbWYVAc%2FyBaDuB1DVzaJNqon%2Fo3rOuCAJthYAY%2BAhQtZF4JQCm2R35G7p55n4dlRvjd5kb6cEP3d3pHLkE5DbFUqvRfJPhpjJKZbnAcgth32zFpuv7gHqwuKk05WCQbCy6wBGztMKzUfVnejeMpT%2F39ETmiX6QRZp%2FjIVVGM3rc74vC6O3HEspOM085Le3t4FUM3RmqpXjrMlzrhgQ0a3PTlmD%2BzyLBkyrrnAvjddNVHx0TkEtJru%2Fc8qeiiutR1hE2PvFzHxMImovxbYO%2FjfCYNZ5H0lmnBGKlke6p6IMD6GmyC6LRkHFcfOTr%2FyVHAvvRnqJ4W%2FDAr0IZCy1vDxed12rkb%2Fx9toszNeo7GgvxAqFgBOqFrSnHBL0gqeXv4DRCdb3ceXJdLLwdNKjDYZIOStw64j3XoUU%2Brkwd02OihlhRuD02OtAXUbfAkyiPaE3DJoNNI871eE10ZML650r8GOqUBUNYGx8RoCifdD%2FjGAkiM7zN8Npz76sixT9NxzaC310805pXV0QC%2B3iKEhkZaLnX0y7uZTPOw0v5%2F90CB92lSjgQEUSSDXQBt9W3j4u%2FcQs8TGFGZBPSwAiAa4W5K00ecull1eXH5MbMK5KDsTvaRnaT3ZAMaD4x0MUL7J0yGUCYcNxo%2FqxxaZ1YBG81I5VYhu8dke1UhVMhsi62Oy3iNGPVS1fDB&X-Amz-Signature=833eadd1c594a78a8a8cc4c3a89b7364e0d0ac5c9733ab9c70d0d8993b3c604e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWY7LMM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVzDi2L3h08TVBLBbMPBAwwvH5RWehKXFuFbdftQrKgIgGN08OlS0y0sBwox%2BDr7LaHyXBYHsxwh%2BM4Sxyxv%2Bu9oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP2wUuhrjzmixMMziyrcA5a2AY70ciCt9bxkJeiCraAtPglfgUYPKaaQYkrtz22rp5ipTLb1aBOsBgx9ENZFdjVvrCz%2B6tNgIVb1%2BtaigKCk5TbUARkLg8NUrtE4emEbgtHDsWr7lf3sqE0LyTikhDDNndxt%2Bj7v7ogHUAzrT1XsQVkjcGIeLh%2FecZJK30ORvbWYVAc%2FyBaDuB1DVzaJNqon%2Fo3rOuCAJthYAY%2BAhQtZF4JQCm2R35G7p55n4dlRvjd5kb6cEP3d3pHLkE5DbFUqvRfJPhpjJKZbnAcgth32zFpuv7gHqwuKk05WCQbCy6wBGztMKzUfVnejeMpT%2F39ETmiX6QRZp%2FjIVVGM3rc74vC6O3HEspOM085Le3t4FUM3RmqpXjrMlzrhgQ0a3PTlmD%2BzyLBkyrrnAvjddNVHx0TkEtJru%2Fc8qeiiutR1hE2PvFzHxMImovxbYO%2FjfCYNZ5H0lmnBGKlke6p6IMD6GmyC6LRkHFcfOTr%2FyVHAvvRnqJ4W%2FDAr0IZCy1vDxed12rkb%2Fx9toszNeo7GgvxAqFgBOqFrSnHBL0gqeXv4DRCdb3ceXJdLLwdNKjDYZIOStw64j3XoUU%2Brkwd02OihlhRuD02OtAXUbfAkyiPaE3DJoNNI871eE10ZML650r8GOqUBUNYGx8RoCifdD%2FjGAkiM7zN8Npz76sixT9NxzaC310805pXV0QC%2B3iKEhkZaLnX0y7uZTPOw0v5%2F90CB92lSjgQEUSSDXQBt9W3j4u%2FcQs8TGFGZBPSwAiAa4W5K00ecull1eXH5MbMK5KDsTvaRnaT3ZAMaD4x0MUL7J0yGUCYcNxo%2FqxxaZ1YBG81I5VYhu8dke1UhVMhsi62Oy3iNGPVS1fDB&X-Amz-Signature=6dee47eac4d1c24eb56433afd0ab290d463f249f59c723f060b03d9e80302353&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWY7LMM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVzDi2L3h08TVBLBbMPBAwwvH5RWehKXFuFbdftQrKgIgGN08OlS0y0sBwox%2BDr7LaHyXBYHsxwh%2BM4Sxyxv%2Bu9oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP2wUuhrjzmixMMziyrcA5a2AY70ciCt9bxkJeiCraAtPglfgUYPKaaQYkrtz22rp5ipTLb1aBOsBgx9ENZFdjVvrCz%2B6tNgIVb1%2BtaigKCk5TbUARkLg8NUrtE4emEbgtHDsWr7lf3sqE0LyTikhDDNndxt%2Bj7v7ogHUAzrT1XsQVkjcGIeLh%2FecZJK30ORvbWYVAc%2FyBaDuB1DVzaJNqon%2Fo3rOuCAJthYAY%2BAhQtZF4JQCm2R35G7p55n4dlRvjd5kb6cEP3d3pHLkE5DbFUqvRfJPhpjJKZbnAcgth32zFpuv7gHqwuKk05WCQbCy6wBGztMKzUfVnejeMpT%2F39ETmiX6QRZp%2FjIVVGM3rc74vC6O3HEspOM085Le3t4FUM3RmqpXjrMlzrhgQ0a3PTlmD%2BzyLBkyrrnAvjddNVHx0TkEtJru%2Fc8qeiiutR1hE2PvFzHxMImovxbYO%2FjfCYNZ5H0lmnBGKlke6p6IMD6GmyC6LRkHFcfOTr%2FyVHAvvRnqJ4W%2FDAr0IZCy1vDxed12rkb%2Fx9toszNeo7GgvxAqFgBOqFrSnHBL0gqeXv4DRCdb3ceXJdLLwdNKjDYZIOStw64j3XoUU%2Brkwd02OihlhRuD02OtAXUbfAkyiPaE3DJoNNI871eE10ZML650r8GOqUBUNYGx8RoCifdD%2FjGAkiM7zN8Npz76sixT9NxzaC310805pXV0QC%2B3iKEhkZaLnX0y7uZTPOw0v5%2F90CB92lSjgQEUSSDXQBt9W3j4u%2FcQs8TGFGZBPSwAiAa4W5K00ecull1eXH5MbMK5KDsTvaRnaT3ZAMaD4x0MUL7J0yGUCYcNxo%2FqxxaZ1YBG81I5VYhu8dke1UhVMhsi62Oy3iNGPVS1fDB&X-Amz-Signature=1c29f383aed2c90f0afb0661a99fa726a1c3839bcca4b0a450c6b184ec7db59a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWY7LMM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVzDi2L3h08TVBLBbMPBAwwvH5RWehKXFuFbdftQrKgIgGN08OlS0y0sBwox%2BDr7LaHyXBYHsxwh%2BM4Sxyxv%2Bu9oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP2wUuhrjzmixMMziyrcA5a2AY70ciCt9bxkJeiCraAtPglfgUYPKaaQYkrtz22rp5ipTLb1aBOsBgx9ENZFdjVvrCz%2B6tNgIVb1%2BtaigKCk5TbUARkLg8NUrtE4emEbgtHDsWr7lf3sqE0LyTikhDDNndxt%2Bj7v7ogHUAzrT1XsQVkjcGIeLh%2FecZJK30ORvbWYVAc%2FyBaDuB1DVzaJNqon%2Fo3rOuCAJthYAY%2BAhQtZF4JQCm2R35G7p55n4dlRvjd5kb6cEP3d3pHLkE5DbFUqvRfJPhpjJKZbnAcgth32zFpuv7gHqwuKk05WCQbCy6wBGztMKzUfVnejeMpT%2F39ETmiX6QRZp%2FjIVVGM3rc74vC6O3HEspOM085Le3t4FUM3RmqpXjrMlzrhgQ0a3PTlmD%2BzyLBkyrrnAvjddNVHx0TkEtJru%2Fc8qeiiutR1hE2PvFzHxMImovxbYO%2FjfCYNZ5H0lmnBGKlke6p6IMD6GmyC6LRkHFcfOTr%2FyVHAvvRnqJ4W%2FDAr0IZCy1vDxed12rkb%2Fx9toszNeo7GgvxAqFgBOqFrSnHBL0gqeXv4DRCdb3ceXJdLLwdNKjDYZIOStw64j3XoUU%2Brkwd02OihlhRuD02OtAXUbfAkyiPaE3DJoNNI871eE10ZML650r8GOqUBUNYGx8RoCifdD%2FjGAkiM7zN8Npz76sixT9NxzaC310805pXV0QC%2B3iKEhkZaLnX0y7uZTPOw0v5%2F90CB92lSjgQEUSSDXQBt9W3j4u%2FcQs8TGFGZBPSwAiAa4W5K00ecull1eXH5MbMK5KDsTvaRnaT3ZAMaD4x0MUL7J0yGUCYcNxo%2FqxxaZ1YBG81I5VYhu8dke1UhVMhsi62Oy3iNGPVS1fDB&X-Amz-Signature=75fea96dca75d24607477ae879f32a6a419cdd4c0c6706239c6357df0d7d614e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWY7LMM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVzDi2L3h08TVBLBbMPBAwwvH5RWehKXFuFbdftQrKgIgGN08OlS0y0sBwox%2BDr7LaHyXBYHsxwh%2BM4Sxyxv%2Bu9oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP2wUuhrjzmixMMziyrcA5a2AY70ciCt9bxkJeiCraAtPglfgUYPKaaQYkrtz22rp5ipTLb1aBOsBgx9ENZFdjVvrCz%2B6tNgIVb1%2BtaigKCk5TbUARkLg8NUrtE4emEbgtHDsWr7lf3sqE0LyTikhDDNndxt%2Bj7v7ogHUAzrT1XsQVkjcGIeLh%2FecZJK30ORvbWYVAc%2FyBaDuB1DVzaJNqon%2Fo3rOuCAJthYAY%2BAhQtZF4JQCm2R35G7p55n4dlRvjd5kb6cEP3d3pHLkE5DbFUqvRfJPhpjJKZbnAcgth32zFpuv7gHqwuKk05WCQbCy6wBGztMKzUfVnejeMpT%2F39ETmiX6QRZp%2FjIVVGM3rc74vC6O3HEspOM085Le3t4FUM3RmqpXjrMlzrhgQ0a3PTlmD%2BzyLBkyrrnAvjddNVHx0TkEtJru%2Fc8qeiiutR1hE2PvFzHxMImovxbYO%2FjfCYNZ5H0lmnBGKlke6p6IMD6GmyC6LRkHFcfOTr%2FyVHAvvRnqJ4W%2FDAr0IZCy1vDxed12rkb%2Fx9toszNeo7GgvxAqFgBOqFrSnHBL0gqeXv4DRCdb3ceXJdLLwdNKjDYZIOStw64j3XoUU%2Brkwd02OihlhRuD02OtAXUbfAkyiPaE3DJoNNI871eE10ZML650r8GOqUBUNYGx8RoCifdD%2FjGAkiM7zN8Npz76sixT9NxzaC310805pXV0QC%2B3iKEhkZaLnX0y7uZTPOw0v5%2F90CB92lSjgQEUSSDXQBt9W3j4u%2FcQs8TGFGZBPSwAiAa4W5K00ecull1eXH5MbMK5KDsTvaRnaT3ZAMaD4x0MUL7J0yGUCYcNxo%2FqxxaZ1YBG81I5VYhu8dke1UhVMhsi62Oy3iNGPVS1fDB&X-Amz-Signature=2717665f5db4b6ee7dd05593b8cbffa298a6edac23e00c3ba50049eb8614590c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWY7LMM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVzDi2L3h08TVBLBbMPBAwwvH5RWehKXFuFbdftQrKgIgGN08OlS0y0sBwox%2BDr7LaHyXBYHsxwh%2BM4Sxyxv%2Bu9oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP2wUuhrjzmixMMziyrcA5a2AY70ciCt9bxkJeiCraAtPglfgUYPKaaQYkrtz22rp5ipTLb1aBOsBgx9ENZFdjVvrCz%2B6tNgIVb1%2BtaigKCk5TbUARkLg8NUrtE4emEbgtHDsWr7lf3sqE0LyTikhDDNndxt%2Bj7v7ogHUAzrT1XsQVkjcGIeLh%2FecZJK30ORvbWYVAc%2FyBaDuB1DVzaJNqon%2Fo3rOuCAJthYAY%2BAhQtZF4JQCm2R35G7p55n4dlRvjd5kb6cEP3d3pHLkE5DbFUqvRfJPhpjJKZbnAcgth32zFpuv7gHqwuKk05WCQbCy6wBGztMKzUfVnejeMpT%2F39ETmiX6QRZp%2FjIVVGM3rc74vC6O3HEspOM085Le3t4FUM3RmqpXjrMlzrhgQ0a3PTlmD%2BzyLBkyrrnAvjddNVHx0TkEtJru%2Fc8qeiiutR1hE2PvFzHxMImovxbYO%2FjfCYNZ5H0lmnBGKlke6p6IMD6GmyC6LRkHFcfOTr%2FyVHAvvRnqJ4W%2FDAr0IZCy1vDxed12rkb%2Fx9toszNeo7GgvxAqFgBOqFrSnHBL0gqeXv4DRCdb3ceXJdLLwdNKjDYZIOStw64j3XoUU%2Brkwd02OihlhRuD02OtAXUbfAkyiPaE3DJoNNI871eE10ZML650r8GOqUBUNYGx8RoCifdD%2FjGAkiM7zN8Npz76sixT9NxzaC310805pXV0QC%2B3iKEhkZaLnX0y7uZTPOw0v5%2F90CB92lSjgQEUSSDXQBt9W3j4u%2FcQs8TGFGZBPSwAiAa4W5K00ecull1eXH5MbMK5KDsTvaRnaT3ZAMaD4x0MUL7J0yGUCYcNxo%2FqxxaZ1YBG81I5VYhu8dke1UhVMhsi62Oy3iNGPVS1fDB&X-Amz-Signature=0c7ce45889df3cc8a07a9bca620b42b7b728d5100d4dfb49853795090c8a8d46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWY7LMM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVzDi2L3h08TVBLBbMPBAwwvH5RWehKXFuFbdftQrKgIgGN08OlS0y0sBwox%2BDr7LaHyXBYHsxwh%2BM4Sxyxv%2Bu9oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP2wUuhrjzmixMMziyrcA5a2AY70ciCt9bxkJeiCraAtPglfgUYPKaaQYkrtz22rp5ipTLb1aBOsBgx9ENZFdjVvrCz%2B6tNgIVb1%2BtaigKCk5TbUARkLg8NUrtE4emEbgtHDsWr7lf3sqE0LyTikhDDNndxt%2Bj7v7ogHUAzrT1XsQVkjcGIeLh%2FecZJK30ORvbWYVAc%2FyBaDuB1DVzaJNqon%2Fo3rOuCAJthYAY%2BAhQtZF4JQCm2R35G7p55n4dlRvjd5kb6cEP3d3pHLkE5DbFUqvRfJPhpjJKZbnAcgth32zFpuv7gHqwuKk05WCQbCy6wBGztMKzUfVnejeMpT%2F39ETmiX6QRZp%2FjIVVGM3rc74vC6O3HEspOM085Le3t4FUM3RmqpXjrMlzrhgQ0a3PTlmD%2BzyLBkyrrnAvjddNVHx0TkEtJru%2Fc8qeiiutR1hE2PvFzHxMImovxbYO%2FjfCYNZ5H0lmnBGKlke6p6IMD6GmyC6LRkHFcfOTr%2FyVHAvvRnqJ4W%2FDAr0IZCy1vDxed12rkb%2Fx9toszNeo7GgvxAqFgBOqFrSnHBL0gqeXv4DRCdb3ceXJdLLwdNKjDYZIOStw64j3XoUU%2Brkwd02OihlhRuD02OtAXUbfAkyiPaE3DJoNNI871eE10ZML650r8GOqUBUNYGx8RoCifdD%2FjGAkiM7zN8Npz76sixT9NxzaC310805pXV0QC%2B3iKEhkZaLnX0y7uZTPOw0v5%2F90CB92lSjgQEUSSDXQBt9W3j4u%2FcQs8TGFGZBPSwAiAa4W5K00ecull1eXH5MbMK5KDsTvaRnaT3ZAMaD4x0MUL7J0yGUCYcNxo%2FqxxaZ1YBG81I5VYhu8dke1UhVMhsi62Oy3iNGPVS1fDB&X-Amz-Signature=43fb7940b5cccc70da36e0a46166ddd93d8fb82cc0961a3073d0e01cc07396af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

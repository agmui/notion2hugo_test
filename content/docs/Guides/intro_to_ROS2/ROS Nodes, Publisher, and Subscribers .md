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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAU4YBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBsVYnavERsrWL%2F6hia9HOzH2tT5obT5%2F48hhztOy13LAiBoDBSGyPxQvvKYveO4ztK60HEgiXmeHLkZ3wJ7yT2SdCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6QoyZUMYo98oGAdyKtwDSv1aP3HlZHhascxpSaYWS4Y3pCVsVmdXPel%2BrlD0ftAfz5GUsycnZnRfh2NPIiJko9TEmWF5QFAP%2Bt%2Byo2au0714fXK53JQumsb%2FBgq2puIGY%2B9WhI%2FCNoBGOd%2FYhw9by9lmjFpvbe%2B4irJWMe2zMbDb3laYYqJ%2FBSU%2BD6RTyr2kYQ7Md2ECD5Xb%2BPp7nQU%2BJPEK%2FFpfeSIgDEYUoKRsBoJkDnoRAByPGrmbswEHG%2B8FWPSH%2FdEWrD6xQ%2FwK8Ek00UvGPleP5W64m8XzH2qHyqLF10P60TlbZcVWE3eyX6IS%2BF%2BrHd1qdOwolsM7DwfJ9uecaR2E%2FHAWVmMy8KJDb7mPS0sRMf0aSslB89EjZiF4LV0EJziOzL55i1kZwlaUVG2kNC43Bg6kA1D4RISN7SjQ0nK2%2FRgniXOI3B4w1nzg9e5spxowNoNzyjBYL0%2FT0GaaAYH8A5cTcVLQTDEqSymrBPOEClHiHFPvpg0iSnFGzFUCeJ%2FI7Qu7aEESzhAOKOr8RUe8aUCq2GtSDemoaqoKsZeU7dsHBbJ6HCZXNClIbjHcoUGiBoaaIOuLDS10pt3lX5GS4bnWDI4wh4OLobE7uqboyxWwD6IJwP%2FxXdXBZiGwHIlpwrBPcCswpdqIxAY6pgEpxQSguKM8jqiaQa%2BaYTFo81LE5j7yMzD9mf0WIBshs4QFAaTGJh9VdEzT4EwV%2BFLByJPVLrC538dw9CuFRSYg0Yv18RykMcsBGDZVcodtvOvMNsuxnkifnoUZ0e3d4Pfmxu3JgqPf1eIjW1iK2T7OXuSxE%2FMQ4o4wGxbadMWhAYRlEpRASDBXTchBMyP8jfgfa7Qw6LzV3%2F7fzkQyrRYdc2L%2Bx6%2Bh&X-Amz-Signature=7486e1bc03a2798c88e2f03db1082d97abae4780b0643a38547b4520ebe81e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAU4YBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBsVYnavERsrWL%2F6hia9HOzH2tT5obT5%2F48hhztOy13LAiBoDBSGyPxQvvKYveO4ztK60HEgiXmeHLkZ3wJ7yT2SdCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6QoyZUMYo98oGAdyKtwDSv1aP3HlZHhascxpSaYWS4Y3pCVsVmdXPel%2BrlD0ftAfz5GUsycnZnRfh2NPIiJko9TEmWF5QFAP%2Bt%2Byo2au0714fXK53JQumsb%2FBgq2puIGY%2B9WhI%2FCNoBGOd%2FYhw9by9lmjFpvbe%2B4irJWMe2zMbDb3laYYqJ%2FBSU%2BD6RTyr2kYQ7Md2ECD5Xb%2BPp7nQU%2BJPEK%2FFpfeSIgDEYUoKRsBoJkDnoRAByPGrmbswEHG%2B8FWPSH%2FdEWrD6xQ%2FwK8Ek00UvGPleP5W64m8XzH2qHyqLF10P60TlbZcVWE3eyX6IS%2BF%2BrHd1qdOwolsM7DwfJ9uecaR2E%2FHAWVmMy8KJDb7mPS0sRMf0aSslB89EjZiF4LV0EJziOzL55i1kZwlaUVG2kNC43Bg6kA1D4RISN7SjQ0nK2%2FRgniXOI3B4w1nzg9e5spxowNoNzyjBYL0%2FT0GaaAYH8A5cTcVLQTDEqSymrBPOEClHiHFPvpg0iSnFGzFUCeJ%2FI7Qu7aEESzhAOKOr8RUe8aUCq2GtSDemoaqoKsZeU7dsHBbJ6HCZXNClIbjHcoUGiBoaaIOuLDS10pt3lX5GS4bnWDI4wh4OLobE7uqboyxWwD6IJwP%2FxXdXBZiGwHIlpwrBPcCswpdqIxAY6pgEpxQSguKM8jqiaQa%2BaYTFo81LE5j7yMzD9mf0WIBshs4QFAaTGJh9VdEzT4EwV%2BFLByJPVLrC538dw9CuFRSYg0Yv18RykMcsBGDZVcodtvOvMNsuxnkifnoUZ0e3d4Pfmxu3JgqPf1eIjW1iK2T7OXuSxE%2FMQ4o4wGxbadMWhAYRlEpRASDBXTchBMyP8jfgfa7Qw6LzV3%2F7fzkQyrRYdc2L%2Bx6%2Bh&X-Amz-Signature=f4c2790cdab5113107d08777b576bde2365653b762e3383dc7a72a94fa35f7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAU4YBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBsVYnavERsrWL%2F6hia9HOzH2tT5obT5%2F48hhztOy13LAiBoDBSGyPxQvvKYveO4ztK60HEgiXmeHLkZ3wJ7yT2SdCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6QoyZUMYo98oGAdyKtwDSv1aP3HlZHhascxpSaYWS4Y3pCVsVmdXPel%2BrlD0ftAfz5GUsycnZnRfh2NPIiJko9TEmWF5QFAP%2Bt%2Byo2au0714fXK53JQumsb%2FBgq2puIGY%2B9WhI%2FCNoBGOd%2FYhw9by9lmjFpvbe%2B4irJWMe2zMbDb3laYYqJ%2FBSU%2BD6RTyr2kYQ7Md2ECD5Xb%2BPp7nQU%2BJPEK%2FFpfeSIgDEYUoKRsBoJkDnoRAByPGrmbswEHG%2B8FWPSH%2FdEWrD6xQ%2FwK8Ek00UvGPleP5W64m8XzH2qHyqLF10P60TlbZcVWE3eyX6IS%2BF%2BrHd1qdOwolsM7DwfJ9uecaR2E%2FHAWVmMy8KJDb7mPS0sRMf0aSslB89EjZiF4LV0EJziOzL55i1kZwlaUVG2kNC43Bg6kA1D4RISN7SjQ0nK2%2FRgniXOI3B4w1nzg9e5spxowNoNzyjBYL0%2FT0GaaAYH8A5cTcVLQTDEqSymrBPOEClHiHFPvpg0iSnFGzFUCeJ%2FI7Qu7aEESzhAOKOr8RUe8aUCq2GtSDemoaqoKsZeU7dsHBbJ6HCZXNClIbjHcoUGiBoaaIOuLDS10pt3lX5GS4bnWDI4wh4OLobE7uqboyxWwD6IJwP%2FxXdXBZiGwHIlpwrBPcCswpdqIxAY6pgEpxQSguKM8jqiaQa%2BaYTFo81LE5j7yMzD9mf0WIBshs4QFAaTGJh9VdEzT4EwV%2BFLByJPVLrC538dw9CuFRSYg0Yv18RykMcsBGDZVcodtvOvMNsuxnkifnoUZ0e3d4Pfmxu3JgqPf1eIjW1iK2T7OXuSxE%2FMQ4o4wGxbadMWhAYRlEpRASDBXTchBMyP8jfgfa7Qw6LzV3%2F7fzkQyrRYdc2L%2Bx6%2Bh&X-Amz-Signature=9d55d5ed6b1132222fbd05746d5f8f1ac638c599110e4546de92cb90477bc7fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAU4YBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBsVYnavERsrWL%2F6hia9HOzH2tT5obT5%2F48hhztOy13LAiBoDBSGyPxQvvKYveO4ztK60HEgiXmeHLkZ3wJ7yT2SdCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6QoyZUMYo98oGAdyKtwDSv1aP3HlZHhascxpSaYWS4Y3pCVsVmdXPel%2BrlD0ftAfz5GUsycnZnRfh2NPIiJko9TEmWF5QFAP%2Bt%2Byo2au0714fXK53JQumsb%2FBgq2puIGY%2B9WhI%2FCNoBGOd%2FYhw9by9lmjFpvbe%2B4irJWMe2zMbDb3laYYqJ%2FBSU%2BD6RTyr2kYQ7Md2ECD5Xb%2BPp7nQU%2BJPEK%2FFpfeSIgDEYUoKRsBoJkDnoRAByPGrmbswEHG%2B8FWPSH%2FdEWrD6xQ%2FwK8Ek00UvGPleP5W64m8XzH2qHyqLF10P60TlbZcVWE3eyX6IS%2BF%2BrHd1qdOwolsM7DwfJ9uecaR2E%2FHAWVmMy8KJDb7mPS0sRMf0aSslB89EjZiF4LV0EJziOzL55i1kZwlaUVG2kNC43Bg6kA1D4RISN7SjQ0nK2%2FRgniXOI3B4w1nzg9e5spxowNoNzyjBYL0%2FT0GaaAYH8A5cTcVLQTDEqSymrBPOEClHiHFPvpg0iSnFGzFUCeJ%2FI7Qu7aEESzhAOKOr8RUe8aUCq2GtSDemoaqoKsZeU7dsHBbJ6HCZXNClIbjHcoUGiBoaaIOuLDS10pt3lX5GS4bnWDI4wh4OLobE7uqboyxWwD6IJwP%2FxXdXBZiGwHIlpwrBPcCswpdqIxAY6pgEpxQSguKM8jqiaQa%2BaYTFo81LE5j7yMzD9mf0WIBshs4QFAaTGJh9VdEzT4EwV%2BFLByJPVLrC538dw9CuFRSYg0Yv18RykMcsBGDZVcodtvOvMNsuxnkifnoUZ0e3d4Pfmxu3JgqPf1eIjW1iK2T7OXuSxE%2FMQ4o4wGxbadMWhAYRlEpRASDBXTchBMyP8jfgfa7Qw6LzV3%2F7fzkQyrRYdc2L%2Bx6%2Bh&X-Amz-Signature=ec698242d9b6fbd1467c6ba4f740801adca46c37c26b372dcbe400779c60f500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAU4YBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBsVYnavERsrWL%2F6hia9HOzH2tT5obT5%2F48hhztOy13LAiBoDBSGyPxQvvKYveO4ztK60HEgiXmeHLkZ3wJ7yT2SdCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6QoyZUMYo98oGAdyKtwDSv1aP3HlZHhascxpSaYWS4Y3pCVsVmdXPel%2BrlD0ftAfz5GUsycnZnRfh2NPIiJko9TEmWF5QFAP%2Bt%2Byo2au0714fXK53JQumsb%2FBgq2puIGY%2B9WhI%2FCNoBGOd%2FYhw9by9lmjFpvbe%2B4irJWMe2zMbDb3laYYqJ%2FBSU%2BD6RTyr2kYQ7Md2ECD5Xb%2BPp7nQU%2BJPEK%2FFpfeSIgDEYUoKRsBoJkDnoRAByPGrmbswEHG%2B8FWPSH%2FdEWrD6xQ%2FwK8Ek00UvGPleP5W64m8XzH2qHyqLF10P60TlbZcVWE3eyX6IS%2BF%2BrHd1qdOwolsM7DwfJ9uecaR2E%2FHAWVmMy8KJDb7mPS0sRMf0aSslB89EjZiF4LV0EJziOzL55i1kZwlaUVG2kNC43Bg6kA1D4RISN7SjQ0nK2%2FRgniXOI3B4w1nzg9e5spxowNoNzyjBYL0%2FT0GaaAYH8A5cTcVLQTDEqSymrBPOEClHiHFPvpg0iSnFGzFUCeJ%2FI7Qu7aEESzhAOKOr8RUe8aUCq2GtSDemoaqoKsZeU7dsHBbJ6HCZXNClIbjHcoUGiBoaaIOuLDS10pt3lX5GS4bnWDI4wh4OLobE7uqboyxWwD6IJwP%2FxXdXBZiGwHIlpwrBPcCswpdqIxAY6pgEpxQSguKM8jqiaQa%2BaYTFo81LE5j7yMzD9mf0WIBshs4QFAaTGJh9VdEzT4EwV%2BFLByJPVLrC538dw9CuFRSYg0Yv18RykMcsBGDZVcodtvOvMNsuxnkifnoUZ0e3d4Pfmxu3JgqPf1eIjW1iK2T7OXuSxE%2FMQ4o4wGxbadMWhAYRlEpRASDBXTchBMyP8jfgfa7Qw6LzV3%2F7fzkQyrRYdc2L%2Bx6%2Bh&X-Amz-Signature=dcf21c82af11bf19c958a31754a15b0627a07175ecf950b3b8202d5334f8142d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAU4YBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBsVYnavERsrWL%2F6hia9HOzH2tT5obT5%2F48hhztOy13LAiBoDBSGyPxQvvKYveO4ztK60HEgiXmeHLkZ3wJ7yT2SdCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6QoyZUMYo98oGAdyKtwDSv1aP3HlZHhascxpSaYWS4Y3pCVsVmdXPel%2BrlD0ftAfz5GUsycnZnRfh2NPIiJko9TEmWF5QFAP%2Bt%2Byo2au0714fXK53JQumsb%2FBgq2puIGY%2B9WhI%2FCNoBGOd%2FYhw9by9lmjFpvbe%2B4irJWMe2zMbDb3laYYqJ%2FBSU%2BD6RTyr2kYQ7Md2ECD5Xb%2BPp7nQU%2BJPEK%2FFpfeSIgDEYUoKRsBoJkDnoRAByPGrmbswEHG%2B8FWPSH%2FdEWrD6xQ%2FwK8Ek00UvGPleP5W64m8XzH2qHyqLF10P60TlbZcVWE3eyX6IS%2BF%2BrHd1qdOwolsM7DwfJ9uecaR2E%2FHAWVmMy8KJDb7mPS0sRMf0aSslB89EjZiF4LV0EJziOzL55i1kZwlaUVG2kNC43Bg6kA1D4RISN7SjQ0nK2%2FRgniXOI3B4w1nzg9e5spxowNoNzyjBYL0%2FT0GaaAYH8A5cTcVLQTDEqSymrBPOEClHiHFPvpg0iSnFGzFUCeJ%2FI7Qu7aEESzhAOKOr8RUe8aUCq2GtSDemoaqoKsZeU7dsHBbJ6HCZXNClIbjHcoUGiBoaaIOuLDS10pt3lX5GS4bnWDI4wh4OLobE7uqboyxWwD6IJwP%2FxXdXBZiGwHIlpwrBPcCswpdqIxAY6pgEpxQSguKM8jqiaQa%2BaYTFo81LE5j7yMzD9mf0WIBshs4QFAaTGJh9VdEzT4EwV%2BFLByJPVLrC538dw9CuFRSYg0Yv18RykMcsBGDZVcodtvOvMNsuxnkifnoUZ0e3d4Pfmxu3JgqPf1eIjW1iK2T7OXuSxE%2FMQ4o4wGxbadMWhAYRlEpRASDBXTchBMyP8jfgfa7Qw6LzV3%2F7fzkQyrRYdc2L%2Bx6%2Bh&X-Amz-Signature=6d53d76f499cab68559dc22a1ce8b826454c29e4b12164bd3db202353ac18781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAU4YBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBsVYnavERsrWL%2F6hia9HOzH2tT5obT5%2F48hhztOy13LAiBoDBSGyPxQvvKYveO4ztK60HEgiXmeHLkZ3wJ7yT2SdCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6QoyZUMYo98oGAdyKtwDSv1aP3HlZHhascxpSaYWS4Y3pCVsVmdXPel%2BrlD0ftAfz5GUsycnZnRfh2NPIiJko9TEmWF5QFAP%2Bt%2Byo2au0714fXK53JQumsb%2FBgq2puIGY%2B9WhI%2FCNoBGOd%2FYhw9by9lmjFpvbe%2B4irJWMe2zMbDb3laYYqJ%2FBSU%2BD6RTyr2kYQ7Md2ECD5Xb%2BPp7nQU%2BJPEK%2FFpfeSIgDEYUoKRsBoJkDnoRAByPGrmbswEHG%2B8FWPSH%2FdEWrD6xQ%2FwK8Ek00UvGPleP5W64m8XzH2qHyqLF10P60TlbZcVWE3eyX6IS%2BF%2BrHd1qdOwolsM7DwfJ9uecaR2E%2FHAWVmMy8KJDb7mPS0sRMf0aSslB89EjZiF4LV0EJziOzL55i1kZwlaUVG2kNC43Bg6kA1D4RISN7SjQ0nK2%2FRgniXOI3B4w1nzg9e5spxowNoNzyjBYL0%2FT0GaaAYH8A5cTcVLQTDEqSymrBPOEClHiHFPvpg0iSnFGzFUCeJ%2FI7Qu7aEESzhAOKOr8RUe8aUCq2GtSDemoaqoKsZeU7dsHBbJ6HCZXNClIbjHcoUGiBoaaIOuLDS10pt3lX5GS4bnWDI4wh4OLobE7uqboyxWwD6IJwP%2FxXdXBZiGwHIlpwrBPcCswpdqIxAY6pgEpxQSguKM8jqiaQa%2BaYTFo81LE5j7yMzD9mf0WIBshs4QFAaTGJh9VdEzT4EwV%2BFLByJPVLrC538dw9CuFRSYg0Yv18RykMcsBGDZVcodtvOvMNsuxnkifnoUZ0e3d4Pfmxu3JgqPf1eIjW1iK2T7OXuSxE%2FMQ4o4wGxbadMWhAYRlEpRASDBXTchBMyP8jfgfa7Qw6LzV3%2F7fzkQyrRYdc2L%2Bx6%2Bh&X-Amz-Signature=b5e125b26c20807bac3d7605efcf7e658055f2ae27536fef63e2132c41dc4b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAU4YBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBsVYnavERsrWL%2F6hia9HOzH2tT5obT5%2F48hhztOy13LAiBoDBSGyPxQvvKYveO4ztK60HEgiXmeHLkZ3wJ7yT2SdCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6QoyZUMYo98oGAdyKtwDSv1aP3HlZHhascxpSaYWS4Y3pCVsVmdXPel%2BrlD0ftAfz5GUsycnZnRfh2NPIiJko9TEmWF5QFAP%2Bt%2Byo2au0714fXK53JQumsb%2FBgq2puIGY%2B9WhI%2FCNoBGOd%2FYhw9by9lmjFpvbe%2B4irJWMe2zMbDb3laYYqJ%2FBSU%2BD6RTyr2kYQ7Md2ECD5Xb%2BPp7nQU%2BJPEK%2FFpfeSIgDEYUoKRsBoJkDnoRAByPGrmbswEHG%2B8FWPSH%2FdEWrD6xQ%2FwK8Ek00UvGPleP5W64m8XzH2qHyqLF10P60TlbZcVWE3eyX6IS%2BF%2BrHd1qdOwolsM7DwfJ9uecaR2E%2FHAWVmMy8KJDb7mPS0sRMf0aSslB89EjZiF4LV0EJziOzL55i1kZwlaUVG2kNC43Bg6kA1D4RISN7SjQ0nK2%2FRgniXOI3B4w1nzg9e5spxowNoNzyjBYL0%2FT0GaaAYH8A5cTcVLQTDEqSymrBPOEClHiHFPvpg0iSnFGzFUCeJ%2FI7Qu7aEESzhAOKOr8RUe8aUCq2GtSDemoaqoKsZeU7dsHBbJ6HCZXNClIbjHcoUGiBoaaIOuLDS10pt3lX5GS4bnWDI4wh4OLobE7uqboyxWwD6IJwP%2FxXdXBZiGwHIlpwrBPcCswpdqIxAY6pgEpxQSguKM8jqiaQa%2BaYTFo81LE5j7yMzD9mf0WIBshs4QFAaTGJh9VdEzT4EwV%2BFLByJPVLrC538dw9CuFRSYg0Yv18RykMcsBGDZVcodtvOvMNsuxnkifnoUZ0e3d4Pfmxu3JgqPf1eIjW1iK2T7OXuSxE%2FMQ4o4wGxbadMWhAYRlEpRASDBXTchBMyP8jfgfa7Qw6LzV3%2F7fzkQyrRYdc2L%2Bx6%2Bh&X-Amz-Signature=f1164f163d9b4eed5ad6f696940972245e6bc0ef8a88f5c8141f1d37f6abb33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

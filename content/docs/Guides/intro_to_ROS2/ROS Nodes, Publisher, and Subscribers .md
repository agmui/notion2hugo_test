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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQDI2DG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFYiYUGeTtUTR0AocE1MP0VplnR%2Fto7JLdqIMXqysLZUAiEAzGaq2tsyppeHm3gUaf1jU7qTWHscyheDOFm8bgtq1xIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP2L1UpaO8eh6p2%2BoircA9EN2on602EBMJNKWy5O2yvK9FaPuCoxhItxwxQ73FL3DLlXb2YGrvvlv%2FjGOfh1zgcN2TB%2BhX%2F5WmvdAyNr498hxHYd6h4ae6ctcBfYYAeN9eDzKFjbrwBiv74IzYfAvzDvG52f8QauiqLi1QQbjBbj1NhAdZPPa0hwTxMnG7EqrHyKjuKeuGvS0N0Qasp2k4UdGVvmz7EAtG8TVCkQQNrYLshb%2BaL9YPA7bEL%2B2dhluC8MdVw0X3SBk0vO%2BgggAkxy3SfN6o7thzUyOm9EJ8AyG8WOeXuoFpZAMsfzD2hxZjYVJMdmrfETgubcbqH9U%2FpkivC7R4%2BxXAm5ojYIrC9ex87YaLlH5fhB%2BEhT73w4b5tp7HPkW2yFerGQq9nDI1vtdS8GByepN60oKHTqo6GWOd8IbF2D8VqhoCaMpFoW5YXPi0AXwUORCC3X35YCifctlV%2Fh8eYIUgm7JpZutW0pvRGjP7NM1tN2H0QSJwp%2BB9FqcNlZ5zjHWUpzUHOIXy4kdq5JBeIFTK%2Fy8UMPSvb1nKdZdY4dG3OKHTfH2fhUm9k11iCGZTozsE7UQd2dh6cixfLxDuiD%2F6Ecn1ncU%2FujDaFrb1GwhVbbEmfUn37Z97ALtqRLxY%2Ftc%2BjEMIXnldMGOqUBX6h%2BRCArAXpN5f3qMg9HA9cxbC7KNzHmw3tTwusEHeio79fHY%2BYgEq%2FoB8wXT9Lnb64YMLEpsHHvsv7NI%2FJx1D%2FAeoPpmY6GxneV4nbDN2XoZju8EVvFZc%2FDwAuxCLKmU35jnCKDJjmToTYcG6lek6VZmm3xrSy264QkwYZBvjvGbGRRl5A6gI%2FvSubkc2bcsmJ1kLYBUvN7dL1yP9hEco%2FM6ULf&X-Amz-Signature=1f36ac9518e770f2d46bb33156553aebf63d76c7ba49d7987245c79f2f6157dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQDI2DG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFYiYUGeTtUTR0AocE1MP0VplnR%2Fto7JLdqIMXqysLZUAiEAzGaq2tsyppeHm3gUaf1jU7qTWHscyheDOFm8bgtq1xIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP2L1UpaO8eh6p2%2BoircA9EN2on602EBMJNKWy5O2yvK9FaPuCoxhItxwxQ73FL3DLlXb2YGrvvlv%2FjGOfh1zgcN2TB%2BhX%2F5WmvdAyNr498hxHYd6h4ae6ctcBfYYAeN9eDzKFjbrwBiv74IzYfAvzDvG52f8QauiqLi1QQbjBbj1NhAdZPPa0hwTxMnG7EqrHyKjuKeuGvS0N0Qasp2k4UdGVvmz7EAtG8TVCkQQNrYLshb%2BaL9YPA7bEL%2B2dhluC8MdVw0X3SBk0vO%2BgggAkxy3SfN6o7thzUyOm9EJ8AyG8WOeXuoFpZAMsfzD2hxZjYVJMdmrfETgubcbqH9U%2FpkivC7R4%2BxXAm5ojYIrC9ex87YaLlH5fhB%2BEhT73w4b5tp7HPkW2yFerGQq9nDI1vtdS8GByepN60oKHTqo6GWOd8IbF2D8VqhoCaMpFoW5YXPi0AXwUORCC3X35YCifctlV%2Fh8eYIUgm7JpZutW0pvRGjP7NM1tN2H0QSJwp%2BB9FqcNlZ5zjHWUpzUHOIXy4kdq5JBeIFTK%2Fy8UMPSvb1nKdZdY4dG3OKHTfH2fhUm9k11iCGZTozsE7UQd2dh6cixfLxDuiD%2F6Ecn1ncU%2FujDaFrb1GwhVbbEmfUn37Z97ALtqRLxY%2Ftc%2BjEMIXnldMGOqUBX6h%2BRCArAXpN5f3qMg9HA9cxbC7KNzHmw3tTwusEHeio79fHY%2BYgEq%2FoB8wXT9Lnb64YMLEpsHHvsv7NI%2FJx1D%2FAeoPpmY6GxneV4nbDN2XoZju8EVvFZc%2FDwAuxCLKmU35jnCKDJjmToTYcG6lek6VZmm3xrSy264QkwYZBvjvGbGRRl5A6gI%2FvSubkc2bcsmJ1kLYBUvN7dL1yP9hEco%2FM6ULf&X-Amz-Signature=dbc46a2b2dbf13752f76c13fc3f74bf638e40577637d95b6e128658d850304aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQDI2DG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFYiYUGeTtUTR0AocE1MP0VplnR%2Fto7JLdqIMXqysLZUAiEAzGaq2tsyppeHm3gUaf1jU7qTWHscyheDOFm8bgtq1xIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP2L1UpaO8eh6p2%2BoircA9EN2on602EBMJNKWy5O2yvK9FaPuCoxhItxwxQ73FL3DLlXb2YGrvvlv%2FjGOfh1zgcN2TB%2BhX%2F5WmvdAyNr498hxHYd6h4ae6ctcBfYYAeN9eDzKFjbrwBiv74IzYfAvzDvG52f8QauiqLi1QQbjBbj1NhAdZPPa0hwTxMnG7EqrHyKjuKeuGvS0N0Qasp2k4UdGVvmz7EAtG8TVCkQQNrYLshb%2BaL9YPA7bEL%2B2dhluC8MdVw0X3SBk0vO%2BgggAkxy3SfN6o7thzUyOm9EJ8AyG8WOeXuoFpZAMsfzD2hxZjYVJMdmrfETgubcbqH9U%2FpkivC7R4%2BxXAm5ojYIrC9ex87YaLlH5fhB%2BEhT73w4b5tp7HPkW2yFerGQq9nDI1vtdS8GByepN60oKHTqo6GWOd8IbF2D8VqhoCaMpFoW5YXPi0AXwUORCC3X35YCifctlV%2Fh8eYIUgm7JpZutW0pvRGjP7NM1tN2H0QSJwp%2BB9FqcNlZ5zjHWUpzUHOIXy4kdq5JBeIFTK%2Fy8UMPSvb1nKdZdY4dG3OKHTfH2fhUm9k11iCGZTozsE7UQd2dh6cixfLxDuiD%2F6Ecn1ncU%2FujDaFrb1GwhVbbEmfUn37Z97ALtqRLxY%2Ftc%2BjEMIXnldMGOqUBX6h%2BRCArAXpN5f3qMg9HA9cxbC7KNzHmw3tTwusEHeio79fHY%2BYgEq%2FoB8wXT9Lnb64YMLEpsHHvsv7NI%2FJx1D%2FAeoPpmY6GxneV4nbDN2XoZju8EVvFZc%2FDwAuxCLKmU35jnCKDJjmToTYcG6lek6VZmm3xrSy264QkwYZBvjvGbGRRl5A6gI%2FvSubkc2bcsmJ1kLYBUvN7dL1yP9hEco%2FM6ULf&X-Amz-Signature=3b3bb77bcc386a3867384e4cce991a6d6d5dc21dffaed3e451dd00940cec9ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQDI2DG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFYiYUGeTtUTR0AocE1MP0VplnR%2Fto7JLdqIMXqysLZUAiEAzGaq2tsyppeHm3gUaf1jU7qTWHscyheDOFm8bgtq1xIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP2L1UpaO8eh6p2%2BoircA9EN2on602EBMJNKWy5O2yvK9FaPuCoxhItxwxQ73FL3DLlXb2YGrvvlv%2FjGOfh1zgcN2TB%2BhX%2F5WmvdAyNr498hxHYd6h4ae6ctcBfYYAeN9eDzKFjbrwBiv74IzYfAvzDvG52f8QauiqLi1QQbjBbj1NhAdZPPa0hwTxMnG7EqrHyKjuKeuGvS0N0Qasp2k4UdGVvmz7EAtG8TVCkQQNrYLshb%2BaL9YPA7bEL%2B2dhluC8MdVw0X3SBk0vO%2BgggAkxy3SfN6o7thzUyOm9EJ8AyG8WOeXuoFpZAMsfzD2hxZjYVJMdmrfETgubcbqH9U%2FpkivC7R4%2BxXAm5ojYIrC9ex87YaLlH5fhB%2BEhT73w4b5tp7HPkW2yFerGQq9nDI1vtdS8GByepN60oKHTqo6GWOd8IbF2D8VqhoCaMpFoW5YXPi0AXwUORCC3X35YCifctlV%2Fh8eYIUgm7JpZutW0pvRGjP7NM1tN2H0QSJwp%2BB9FqcNlZ5zjHWUpzUHOIXy4kdq5JBeIFTK%2Fy8UMPSvb1nKdZdY4dG3OKHTfH2fhUm9k11iCGZTozsE7UQd2dh6cixfLxDuiD%2F6Ecn1ncU%2FujDaFrb1GwhVbbEmfUn37Z97ALtqRLxY%2Ftc%2BjEMIXnldMGOqUBX6h%2BRCArAXpN5f3qMg9HA9cxbC7KNzHmw3tTwusEHeio79fHY%2BYgEq%2FoB8wXT9Lnb64YMLEpsHHvsv7NI%2FJx1D%2FAeoPpmY6GxneV4nbDN2XoZju8EVvFZc%2FDwAuxCLKmU35jnCKDJjmToTYcG6lek6VZmm3xrSy264QkwYZBvjvGbGRRl5A6gI%2FvSubkc2bcsmJ1kLYBUvN7dL1yP9hEco%2FM6ULf&X-Amz-Signature=7a65760ee65f2f1fbd032fec49a2d5e74aa71c2c79c9eb6b13bfcec7a09f375d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQDI2DG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFYiYUGeTtUTR0AocE1MP0VplnR%2Fto7JLdqIMXqysLZUAiEAzGaq2tsyppeHm3gUaf1jU7qTWHscyheDOFm8bgtq1xIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP2L1UpaO8eh6p2%2BoircA9EN2on602EBMJNKWy5O2yvK9FaPuCoxhItxwxQ73FL3DLlXb2YGrvvlv%2FjGOfh1zgcN2TB%2BhX%2F5WmvdAyNr498hxHYd6h4ae6ctcBfYYAeN9eDzKFjbrwBiv74IzYfAvzDvG52f8QauiqLi1QQbjBbj1NhAdZPPa0hwTxMnG7EqrHyKjuKeuGvS0N0Qasp2k4UdGVvmz7EAtG8TVCkQQNrYLshb%2BaL9YPA7bEL%2B2dhluC8MdVw0X3SBk0vO%2BgggAkxy3SfN6o7thzUyOm9EJ8AyG8WOeXuoFpZAMsfzD2hxZjYVJMdmrfETgubcbqH9U%2FpkivC7R4%2BxXAm5ojYIrC9ex87YaLlH5fhB%2BEhT73w4b5tp7HPkW2yFerGQq9nDI1vtdS8GByepN60oKHTqo6GWOd8IbF2D8VqhoCaMpFoW5YXPi0AXwUORCC3X35YCifctlV%2Fh8eYIUgm7JpZutW0pvRGjP7NM1tN2H0QSJwp%2BB9FqcNlZ5zjHWUpzUHOIXy4kdq5JBeIFTK%2Fy8UMPSvb1nKdZdY4dG3OKHTfH2fhUm9k11iCGZTozsE7UQd2dh6cixfLxDuiD%2F6Ecn1ncU%2FujDaFrb1GwhVbbEmfUn37Z97ALtqRLxY%2Ftc%2BjEMIXnldMGOqUBX6h%2BRCArAXpN5f3qMg9HA9cxbC7KNzHmw3tTwusEHeio79fHY%2BYgEq%2FoB8wXT9Lnb64YMLEpsHHvsv7NI%2FJx1D%2FAeoPpmY6GxneV4nbDN2XoZju8EVvFZc%2FDwAuxCLKmU35jnCKDJjmToTYcG6lek6VZmm3xrSy264QkwYZBvjvGbGRRl5A6gI%2FvSubkc2bcsmJ1kLYBUvN7dL1yP9hEco%2FM6ULf&X-Amz-Signature=7026b024d8315666e745527bf99f615003d8a2299de34dbb901c2ceadbd32bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQDI2DG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFYiYUGeTtUTR0AocE1MP0VplnR%2Fto7JLdqIMXqysLZUAiEAzGaq2tsyppeHm3gUaf1jU7qTWHscyheDOFm8bgtq1xIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP2L1UpaO8eh6p2%2BoircA9EN2on602EBMJNKWy5O2yvK9FaPuCoxhItxwxQ73FL3DLlXb2YGrvvlv%2FjGOfh1zgcN2TB%2BhX%2F5WmvdAyNr498hxHYd6h4ae6ctcBfYYAeN9eDzKFjbrwBiv74IzYfAvzDvG52f8QauiqLi1QQbjBbj1NhAdZPPa0hwTxMnG7EqrHyKjuKeuGvS0N0Qasp2k4UdGVvmz7EAtG8TVCkQQNrYLshb%2BaL9YPA7bEL%2B2dhluC8MdVw0X3SBk0vO%2BgggAkxy3SfN6o7thzUyOm9EJ8AyG8WOeXuoFpZAMsfzD2hxZjYVJMdmrfETgubcbqH9U%2FpkivC7R4%2BxXAm5ojYIrC9ex87YaLlH5fhB%2BEhT73w4b5tp7HPkW2yFerGQq9nDI1vtdS8GByepN60oKHTqo6GWOd8IbF2D8VqhoCaMpFoW5YXPi0AXwUORCC3X35YCifctlV%2Fh8eYIUgm7JpZutW0pvRGjP7NM1tN2H0QSJwp%2BB9FqcNlZ5zjHWUpzUHOIXy4kdq5JBeIFTK%2Fy8UMPSvb1nKdZdY4dG3OKHTfH2fhUm9k11iCGZTozsE7UQd2dh6cixfLxDuiD%2F6Ecn1ncU%2FujDaFrb1GwhVbbEmfUn37Z97ALtqRLxY%2Ftc%2BjEMIXnldMGOqUBX6h%2BRCArAXpN5f3qMg9HA9cxbC7KNzHmw3tTwusEHeio79fHY%2BYgEq%2FoB8wXT9Lnb64YMLEpsHHvsv7NI%2FJx1D%2FAeoPpmY6GxneV4nbDN2XoZju8EVvFZc%2FDwAuxCLKmU35jnCKDJjmToTYcG6lek6VZmm3xrSy264QkwYZBvjvGbGRRl5A6gI%2FvSubkc2bcsmJ1kLYBUvN7dL1yP9hEco%2FM6ULf&X-Amz-Signature=1b1fea8c5edd921b40d29505a952bac2a133943d23daf70a026b9b15d7c9bc3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQDI2DG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFYiYUGeTtUTR0AocE1MP0VplnR%2Fto7JLdqIMXqysLZUAiEAzGaq2tsyppeHm3gUaf1jU7qTWHscyheDOFm8bgtq1xIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP2L1UpaO8eh6p2%2BoircA9EN2on602EBMJNKWy5O2yvK9FaPuCoxhItxwxQ73FL3DLlXb2YGrvvlv%2FjGOfh1zgcN2TB%2BhX%2F5WmvdAyNr498hxHYd6h4ae6ctcBfYYAeN9eDzKFjbrwBiv74IzYfAvzDvG52f8QauiqLi1QQbjBbj1NhAdZPPa0hwTxMnG7EqrHyKjuKeuGvS0N0Qasp2k4UdGVvmz7EAtG8TVCkQQNrYLshb%2BaL9YPA7bEL%2B2dhluC8MdVw0X3SBk0vO%2BgggAkxy3SfN6o7thzUyOm9EJ8AyG8WOeXuoFpZAMsfzD2hxZjYVJMdmrfETgubcbqH9U%2FpkivC7R4%2BxXAm5ojYIrC9ex87YaLlH5fhB%2BEhT73w4b5tp7HPkW2yFerGQq9nDI1vtdS8GByepN60oKHTqo6GWOd8IbF2D8VqhoCaMpFoW5YXPi0AXwUORCC3X35YCifctlV%2Fh8eYIUgm7JpZutW0pvRGjP7NM1tN2H0QSJwp%2BB9FqcNlZ5zjHWUpzUHOIXy4kdq5JBeIFTK%2Fy8UMPSvb1nKdZdY4dG3OKHTfH2fhUm9k11iCGZTozsE7UQd2dh6cixfLxDuiD%2F6Ecn1ncU%2FujDaFrb1GwhVbbEmfUn37Z97ALtqRLxY%2Ftc%2BjEMIXnldMGOqUBX6h%2BRCArAXpN5f3qMg9HA9cxbC7KNzHmw3tTwusEHeio79fHY%2BYgEq%2FoB8wXT9Lnb64YMLEpsHHvsv7NI%2FJx1D%2FAeoPpmY6GxneV4nbDN2XoZju8EVvFZc%2FDwAuxCLKmU35jnCKDJjmToTYcG6lek6VZmm3xrSy264QkwYZBvjvGbGRRl5A6gI%2FvSubkc2bcsmJ1kLYBUvN7dL1yP9hEco%2FM6ULf&X-Amz-Signature=4f9872f8f9790b29ff36a03addb64bf4d17a5f4ee04010c56b55dcf4f3c6d27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQDI2DG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFYiYUGeTtUTR0AocE1MP0VplnR%2Fto7JLdqIMXqysLZUAiEAzGaq2tsyppeHm3gUaf1jU7qTWHscyheDOFm8bgtq1xIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP2L1UpaO8eh6p2%2BoircA9EN2on602EBMJNKWy5O2yvK9FaPuCoxhItxwxQ73FL3DLlXb2YGrvvlv%2FjGOfh1zgcN2TB%2BhX%2F5WmvdAyNr498hxHYd6h4ae6ctcBfYYAeN9eDzKFjbrwBiv74IzYfAvzDvG52f8QauiqLi1QQbjBbj1NhAdZPPa0hwTxMnG7EqrHyKjuKeuGvS0N0Qasp2k4UdGVvmz7EAtG8TVCkQQNrYLshb%2BaL9YPA7bEL%2B2dhluC8MdVw0X3SBk0vO%2BgggAkxy3SfN6o7thzUyOm9EJ8AyG8WOeXuoFpZAMsfzD2hxZjYVJMdmrfETgubcbqH9U%2FpkivC7R4%2BxXAm5ojYIrC9ex87YaLlH5fhB%2BEhT73w4b5tp7HPkW2yFerGQq9nDI1vtdS8GByepN60oKHTqo6GWOd8IbF2D8VqhoCaMpFoW5YXPi0AXwUORCC3X35YCifctlV%2Fh8eYIUgm7JpZutW0pvRGjP7NM1tN2H0QSJwp%2BB9FqcNlZ5zjHWUpzUHOIXy4kdq5JBeIFTK%2Fy8UMPSvb1nKdZdY4dG3OKHTfH2fhUm9k11iCGZTozsE7UQd2dh6cixfLxDuiD%2F6Ecn1ncU%2FujDaFrb1GwhVbbEmfUn37Z97ALtqRLxY%2Ftc%2BjEMIXnldMGOqUBX6h%2BRCArAXpN5f3qMg9HA9cxbC7KNzHmw3tTwusEHeio79fHY%2BYgEq%2FoB8wXT9Lnb64YMLEpsHHvsv7NI%2FJx1D%2FAeoPpmY6GxneV4nbDN2XoZju8EVvFZc%2FDwAuxCLKmU35jnCKDJjmToTYcG6lek6VZmm3xrSy264QkwYZBvjvGbGRRl5A6gI%2FvSubkc2bcsmJ1kLYBUvN7dL1yP9hEco%2FM6ULf&X-Amz-Signature=13887a9de994e6d5936b478f928b603365296c4bfdea55776f26abcb1da67eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

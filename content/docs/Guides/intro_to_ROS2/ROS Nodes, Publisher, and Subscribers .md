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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXKO7H6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD7nOhIK0gNy%2Fv9pgXuUag4A7e1dsne9HvkA1Rk5Rbz0wIgN1OeJttkwScQ%2BReDKzSh0cXLQvqr9RDfhb6P0OmTK7Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHKoeDUd7TERcTXReircA05C4u7squD8JceOnXov0GxfBL%2Br33GP5on0F9Yrx%2BZhVhbTV1FTcR0XpI6JQB5fM9H5piGUGgEKWlvGorXTlM4SMZR7XZrTZIJzq2%2BH0S8skLc1LdZ7NYxlxz%2FaKIbqbD9Yi92wXBJYLcjRxr0wre7mvlPa97KotZMGzrsQbSNiToEOltjFxaQG%2FSe12wJcKOAVPLEjixuZaFIWSDHjxnkIerdCUv7dOb4ZTqObJNG5XiXtOulHh5IXqT9pNG%2F8S32zgW%2FLswXBqm7YF%2FeVpSgDPvgsBCG5uynhFjNNPrG6G8KQ4btEyKMrOyvMeRzdUfphssu0K8trnnPed5X3QsXv%2FJaZrkjfnX16K2RI0e3Dc5rOnfLLeo5PvnldmCFjnNZcJGxrrqkL7CplxUR6VWPADXhY8XbjiGhJDS%2Ffq612HMn4v2vXyIBve%2FVKuONJUEn7JdXpFOee%2FPIzcQtMlWIM9fBn8kokWZFxc7CHUkv4uYIO80dXf9XR8GKz5Vei7nhYvAtDn2zo0mHmBTkYx%2F9TlyCZyYA0gUZRiRY%2BuPeL8CYa1jypF1SBTNHHiAr%2Bi5ICR1q3O1VlWRK7kT9sn%2BjSayxOYXDllW9OIb5fkG%2Fy1UERhK%2FLSOLb2zs0MI2SmMEGOqUBEpfsSjV8jopXi2IjicpvilfccAdqCrKS7YmmkJLPPMFahUSeosEXkgM1pGGxeI0vj8UL1MhGyvK9AVn%2B%2BKQ4zVjAYGOrD8CJEmJbrmbMeTm%2BvG%2BDiUzObeMxIKqXjru0HEI4PtFLkQq2bEYjklVj0z7B1%2BtUQMAgGc87WmEJ9rfO9Ba4UCX%2FUg4QyR%2BwCwDK9D5B3ijiH7ul7gNcvt%2BrewY5VMS9&X-Amz-Signature=3865fc7642e1882d76b0cde12c56f353b79b106939d9423eb070ed3469dcf5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXKO7H6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD7nOhIK0gNy%2Fv9pgXuUag4A7e1dsne9HvkA1Rk5Rbz0wIgN1OeJttkwScQ%2BReDKzSh0cXLQvqr9RDfhb6P0OmTK7Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHKoeDUd7TERcTXReircA05C4u7squD8JceOnXov0GxfBL%2Br33GP5on0F9Yrx%2BZhVhbTV1FTcR0XpI6JQB5fM9H5piGUGgEKWlvGorXTlM4SMZR7XZrTZIJzq2%2BH0S8skLc1LdZ7NYxlxz%2FaKIbqbD9Yi92wXBJYLcjRxr0wre7mvlPa97KotZMGzrsQbSNiToEOltjFxaQG%2FSe12wJcKOAVPLEjixuZaFIWSDHjxnkIerdCUv7dOb4ZTqObJNG5XiXtOulHh5IXqT9pNG%2F8S32zgW%2FLswXBqm7YF%2FeVpSgDPvgsBCG5uynhFjNNPrG6G8KQ4btEyKMrOyvMeRzdUfphssu0K8trnnPed5X3QsXv%2FJaZrkjfnX16K2RI0e3Dc5rOnfLLeo5PvnldmCFjnNZcJGxrrqkL7CplxUR6VWPADXhY8XbjiGhJDS%2Ffq612HMn4v2vXyIBve%2FVKuONJUEn7JdXpFOee%2FPIzcQtMlWIM9fBn8kokWZFxc7CHUkv4uYIO80dXf9XR8GKz5Vei7nhYvAtDn2zo0mHmBTkYx%2F9TlyCZyYA0gUZRiRY%2BuPeL8CYa1jypF1SBTNHHiAr%2Bi5ICR1q3O1VlWRK7kT9sn%2BjSayxOYXDllW9OIb5fkG%2Fy1UERhK%2FLSOLb2zs0MI2SmMEGOqUBEpfsSjV8jopXi2IjicpvilfccAdqCrKS7YmmkJLPPMFahUSeosEXkgM1pGGxeI0vj8UL1MhGyvK9AVn%2B%2BKQ4zVjAYGOrD8CJEmJbrmbMeTm%2BvG%2BDiUzObeMxIKqXjru0HEI4PtFLkQq2bEYjklVj0z7B1%2BtUQMAgGc87WmEJ9rfO9Ba4UCX%2FUg4QyR%2BwCwDK9D5B3ijiH7ul7gNcvt%2BrewY5VMS9&X-Amz-Signature=ca32a31353094bfb1512e510523310e4990aecbea99578b35d551c4cd4949e42&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXKO7H6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD7nOhIK0gNy%2Fv9pgXuUag4A7e1dsne9HvkA1Rk5Rbz0wIgN1OeJttkwScQ%2BReDKzSh0cXLQvqr9RDfhb6P0OmTK7Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHKoeDUd7TERcTXReircA05C4u7squD8JceOnXov0GxfBL%2Br33GP5on0F9Yrx%2BZhVhbTV1FTcR0XpI6JQB5fM9H5piGUGgEKWlvGorXTlM4SMZR7XZrTZIJzq2%2BH0S8skLc1LdZ7NYxlxz%2FaKIbqbD9Yi92wXBJYLcjRxr0wre7mvlPa97KotZMGzrsQbSNiToEOltjFxaQG%2FSe12wJcKOAVPLEjixuZaFIWSDHjxnkIerdCUv7dOb4ZTqObJNG5XiXtOulHh5IXqT9pNG%2F8S32zgW%2FLswXBqm7YF%2FeVpSgDPvgsBCG5uynhFjNNPrG6G8KQ4btEyKMrOyvMeRzdUfphssu0K8trnnPed5X3QsXv%2FJaZrkjfnX16K2RI0e3Dc5rOnfLLeo5PvnldmCFjnNZcJGxrrqkL7CplxUR6VWPADXhY8XbjiGhJDS%2Ffq612HMn4v2vXyIBve%2FVKuONJUEn7JdXpFOee%2FPIzcQtMlWIM9fBn8kokWZFxc7CHUkv4uYIO80dXf9XR8GKz5Vei7nhYvAtDn2zo0mHmBTkYx%2F9TlyCZyYA0gUZRiRY%2BuPeL8CYa1jypF1SBTNHHiAr%2Bi5ICR1q3O1VlWRK7kT9sn%2BjSayxOYXDllW9OIb5fkG%2Fy1UERhK%2FLSOLb2zs0MI2SmMEGOqUBEpfsSjV8jopXi2IjicpvilfccAdqCrKS7YmmkJLPPMFahUSeosEXkgM1pGGxeI0vj8UL1MhGyvK9AVn%2B%2BKQ4zVjAYGOrD8CJEmJbrmbMeTm%2BvG%2BDiUzObeMxIKqXjru0HEI4PtFLkQq2bEYjklVj0z7B1%2BtUQMAgGc87WmEJ9rfO9Ba4UCX%2FUg4QyR%2BwCwDK9D5B3ijiH7ul7gNcvt%2BrewY5VMS9&X-Amz-Signature=ef490d5a6979c61d6274702a8c19229b8fd7102a99e77f30b82e60640818ea39&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXKO7H6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD7nOhIK0gNy%2Fv9pgXuUag4A7e1dsne9HvkA1Rk5Rbz0wIgN1OeJttkwScQ%2BReDKzSh0cXLQvqr9RDfhb6P0OmTK7Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHKoeDUd7TERcTXReircA05C4u7squD8JceOnXov0GxfBL%2Br33GP5on0F9Yrx%2BZhVhbTV1FTcR0XpI6JQB5fM9H5piGUGgEKWlvGorXTlM4SMZR7XZrTZIJzq2%2BH0S8skLc1LdZ7NYxlxz%2FaKIbqbD9Yi92wXBJYLcjRxr0wre7mvlPa97KotZMGzrsQbSNiToEOltjFxaQG%2FSe12wJcKOAVPLEjixuZaFIWSDHjxnkIerdCUv7dOb4ZTqObJNG5XiXtOulHh5IXqT9pNG%2F8S32zgW%2FLswXBqm7YF%2FeVpSgDPvgsBCG5uynhFjNNPrG6G8KQ4btEyKMrOyvMeRzdUfphssu0K8trnnPed5X3QsXv%2FJaZrkjfnX16K2RI0e3Dc5rOnfLLeo5PvnldmCFjnNZcJGxrrqkL7CplxUR6VWPADXhY8XbjiGhJDS%2Ffq612HMn4v2vXyIBve%2FVKuONJUEn7JdXpFOee%2FPIzcQtMlWIM9fBn8kokWZFxc7CHUkv4uYIO80dXf9XR8GKz5Vei7nhYvAtDn2zo0mHmBTkYx%2F9TlyCZyYA0gUZRiRY%2BuPeL8CYa1jypF1SBTNHHiAr%2Bi5ICR1q3O1VlWRK7kT9sn%2BjSayxOYXDllW9OIb5fkG%2Fy1UERhK%2FLSOLb2zs0MI2SmMEGOqUBEpfsSjV8jopXi2IjicpvilfccAdqCrKS7YmmkJLPPMFahUSeosEXkgM1pGGxeI0vj8UL1MhGyvK9AVn%2B%2BKQ4zVjAYGOrD8CJEmJbrmbMeTm%2BvG%2BDiUzObeMxIKqXjru0HEI4PtFLkQq2bEYjklVj0z7B1%2BtUQMAgGc87WmEJ9rfO9Ba4UCX%2FUg4QyR%2BwCwDK9D5B3ijiH7ul7gNcvt%2BrewY5VMS9&X-Amz-Signature=0edbc5f3e43a00320dff4930cd6ae2d88e1a739c787a46b8bfa44d8c4ac8a636&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXKO7H6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD7nOhIK0gNy%2Fv9pgXuUag4A7e1dsne9HvkA1Rk5Rbz0wIgN1OeJttkwScQ%2BReDKzSh0cXLQvqr9RDfhb6P0OmTK7Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHKoeDUd7TERcTXReircA05C4u7squD8JceOnXov0GxfBL%2Br33GP5on0F9Yrx%2BZhVhbTV1FTcR0XpI6JQB5fM9H5piGUGgEKWlvGorXTlM4SMZR7XZrTZIJzq2%2BH0S8skLc1LdZ7NYxlxz%2FaKIbqbD9Yi92wXBJYLcjRxr0wre7mvlPa97KotZMGzrsQbSNiToEOltjFxaQG%2FSe12wJcKOAVPLEjixuZaFIWSDHjxnkIerdCUv7dOb4ZTqObJNG5XiXtOulHh5IXqT9pNG%2F8S32zgW%2FLswXBqm7YF%2FeVpSgDPvgsBCG5uynhFjNNPrG6G8KQ4btEyKMrOyvMeRzdUfphssu0K8trnnPed5X3QsXv%2FJaZrkjfnX16K2RI0e3Dc5rOnfLLeo5PvnldmCFjnNZcJGxrrqkL7CplxUR6VWPADXhY8XbjiGhJDS%2Ffq612HMn4v2vXyIBve%2FVKuONJUEn7JdXpFOee%2FPIzcQtMlWIM9fBn8kokWZFxc7CHUkv4uYIO80dXf9XR8GKz5Vei7nhYvAtDn2zo0mHmBTkYx%2F9TlyCZyYA0gUZRiRY%2BuPeL8CYa1jypF1SBTNHHiAr%2Bi5ICR1q3O1VlWRK7kT9sn%2BjSayxOYXDllW9OIb5fkG%2Fy1UERhK%2FLSOLb2zs0MI2SmMEGOqUBEpfsSjV8jopXi2IjicpvilfccAdqCrKS7YmmkJLPPMFahUSeosEXkgM1pGGxeI0vj8UL1MhGyvK9AVn%2B%2BKQ4zVjAYGOrD8CJEmJbrmbMeTm%2BvG%2BDiUzObeMxIKqXjru0HEI4PtFLkQq2bEYjklVj0z7B1%2BtUQMAgGc87WmEJ9rfO9Ba4UCX%2FUg4QyR%2BwCwDK9D5B3ijiH7ul7gNcvt%2BrewY5VMS9&X-Amz-Signature=d7e3dbefe825ccfb14f9cbe7c09ea94b65eed261b9a5d678de821138136ecd1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXKO7H6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD7nOhIK0gNy%2Fv9pgXuUag4A7e1dsne9HvkA1Rk5Rbz0wIgN1OeJttkwScQ%2BReDKzSh0cXLQvqr9RDfhb6P0OmTK7Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHKoeDUd7TERcTXReircA05C4u7squD8JceOnXov0GxfBL%2Br33GP5on0F9Yrx%2BZhVhbTV1FTcR0XpI6JQB5fM9H5piGUGgEKWlvGorXTlM4SMZR7XZrTZIJzq2%2BH0S8skLc1LdZ7NYxlxz%2FaKIbqbD9Yi92wXBJYLcjRxr0wre7mvlPa97KotZMGzrsQbSNiToEOltjFxaQG%2FSe12wJcKOAVPLEjixuZaFIWSDHjxnkIerdCUv7dOb4ZTqObJNG5XiXtOulHh5IXqT9pNG%2F8S32zgW%2FLswXBqm7YF%2FeVpSgDPvgsBCG5uynhFjNNPrG6G8KQ4btEyKMrOyvMeRzdUfphssu0K8trnnPed5X3QsXv%2FJaZrkjfnX16K2RI0e3Dc5rOnfLLeo5PvnldmCFjnNZcJGxrrqkL7CplxUR6VWPADXhY8XbjiGhJDS%2Ffq612HMn4v2vXyIBve%2FVKuONJUEn7JdXpFOee%2FPIzcQtMlWIM9fBn8kokWZFxc7CHUkv4uYIO80dXf9XR8GKz5Vei7nhYvAtDn2zo0mHmBTkYx%2F9TlyCZyYA0gUZRiRY%2BuPeL8CYa1jypF1SBTNHHiAr%2Bi5ICR1q3O1VlWRK7kT9sn%2BjSayxOYXDllW9OIb5fkG%2Fy1UERhK%2FLSOLb2zs0MI2SmMEGOqUBEpfsSjV8jopXi2IjicpvilfccAdqCrKS7YmmkJLPPMFahUSeosEXkgM1pGGxeI0vj8UL1MhGyvK9AVn%2B%2BKQ4zVjAYGOrD8CJEmJbrmbMeTm%2BvG%2BDiUzObeMxIKqXjru0HEI4PtFLkQq2bEYjklVj0z7B1%2BtUQMAgGc87WmEJ9rfO9Ba4UCX%2FUg4QyR%2BwCwDK9D5B3ijiH7ul7gNcvt%2BrewY5VMS9&X-Amz-Signature=72603bd757d8064818484c25ac05177d68d7b19617dfacf75441c4fd02d0e066&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXKO7H6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD7nOhIK0gNy%2Fv9pgXuUag4A7e1dsne9HvkA1Rk5Rbz0wIgN1OeJttkwScQ%2BReDKzSh0cXLQvqr9RDfhb6P0OmTK7Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHKoeDUd7TERcTXReircA05C4u7squD8JceOnXov0GxfBL%2Br33GP5on0F9Yrx%2BZhVhbTV1FTcR0XpI6JQB5fM9H5piGUGgEKWlvGorXTlM4SMZR7XZrTZIJzq2%2BH0S8skLc1LdZ7NYxlxz%2FaKIbqbD9Yi92wXBJYLcjRxr0wre7mvlPa97KotZMGzrsQbSNiToEOltjFxaQG%2FSe12wJcKOAVPLEjixuZaFIWSDHjxnkIerdCUv7dOb4ZTqObJNG5XiXtOulHh5IXqT9pNG%2F8S32zgW%2FLswXBqm7YF%2FeVpSgDPvgsBCG5uynhFjNNPrG6G8KQ4btEyKMrOyvMeRzdUfphssu0K8trnnPed5X3QsXv%2FJaZrkjfnX16K2RI0e3Dc5rOnfLLeo5PvnldmCFjnNZcJGxrrqkL7CplxUR6VWPADXhY8XbjiGhJDS%2Ffq612HMn4v2vXyIBve%2FVKuONJUEn7JdXpFOee%2FPIzcQtMlWIM9fBn8kokWZFxc7CHUkv4uYIO80dXf9XR8GKz5Vei7nhYvAtDn2zo0mHmBTkYx%2F9TlyCZyYA0gUZRiRY%2BuPeL8CYa1jypF1SBTNHHiAr%2Bi5ICR1q3O1VlWRK7kT9sn%2BjSayxOYXDllW9OIb5fkG%2Fy1UERhK%2FLSOLb2zs0MI2SmMEGOqUBEpfsSjV8jopXi2IjicpvilfccAdqCrKS7YmmkJLPPMFahUSeosEXkgM1pGGxeI0vj8UL1MhGyvK9AVn%2B%2BKQ4zVjAYGOrD8CJEmJbrmbMeTm%2BvG%2BDiUzObeMxIKqXjru0HEI4PtFLkQq2bEYjklVj0z7B1%2BtUQMAgGc87WmEJ9rfO9Ba4UCX%2FUg4QyR%2BwCwDK9D5B3ijiH7ul7gNcvt%2BrewY5VMS9&X-Amz-Signature=bb22f60d0de19a95857571ddf313429053fb7b7a14634da5d79a75136701e4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXKO7H6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD7nOhIK0gNy%2Fv9pgXuUag4A7e1dsne9HvkA1Rk5Rbz0wIgN1OeJttkwScQ%2BReDKzSh0cXLQvqr9RDfhb6P0OmTK7Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHKoeDUd7TERcTXReircA05C4u7squD8JceOnXov0GxfBL%2Br33GP5on0F9Yrx%2BZhVhbTV1FTcR0XpI6JQB5fM9H5piGUGgEKWlvGorXTlM4SMZR7XZrTZIJzq2%2BH0S8skLc1LdZ7NYxlxz%2FaKIbqbD9Yi92wXBJYLcjRxr0wre7mvlPa97KotZMGzrsQbSNiToEOltjFxaQG%2FSe12wJcKOAVPLEjixuZaFIWSDHjxnkIerdCUv7dOb4ZTqObJNG5XiXtOulHh5IXqT9pNG%2F8S32zgW%2FLswXBqm7YF%2FeVpSgDPvgsBCG5uynhFjNNPrG6G8KQ4btEyKMrOyvMeRzdUfphssu0K8trnnPed5X3QsXv%2FJaZrkjfnX16K2RI0e3Dc5rOnfLLeo5PvnldmCFjnNZcJGxrrqkL7CplxUR6VWPADXhY8XbjiGhJDS%2Ffq612HMn4v2vXyIBve%2FVKuONJUEn7JdXpFOee%2FPIzcQtMlWIM9fBn8kokWZFxc7CHUkv4uYIO80dXf9XR8GKz5Vei7nhYvAtDn2zo0mHmBTkYx%2F9TlyCZyYA0gUZRiRY%2BuPeL8CYa1jypF1SBTNHHiAr%2Bi5ICR1q3O1VlWRK7kT9sn%2BjSayxOYXDllW9OIb5fkG%2Fy1UERhK%2FLSOLb2zs0MI2SmMEGOqUBEpfsSjV8jopXi2IjicpvilfccAdqCrKS7YmmkJLPPMFahUSeosEXkgM1pGGxeI0vj8UL1MhGyvK9AVn%2B%2BKQ4zVjAYGOrD8CJEmJbrmbMeTm%2BvG%2BDiUzObeMxIKqXjru0HEI4PtFLkQq2bEYjklVj0z7B1%2BtUQMAgGc87WmEJ9rfO9Ba4UCX%2FUg4QyR%2BwCwDK9D5B3ijiH7ul7gNcvt%2BrewY5VMS9&X-Amz-Signature=f91f2faa2735d652c203aafed367f3f26925d332a84e25a2e34dd5d5364abb28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

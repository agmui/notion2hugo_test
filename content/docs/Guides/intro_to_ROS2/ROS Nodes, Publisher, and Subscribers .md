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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CC4JQK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgQLf7lk8HXARLqtPDx%2B6fSgdWuymuxOx48D%2FNfMKbJgIgZD90a9UxRGcRCeM5YS9Juo9qM81EOb6o2smMqbxhCbQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOgbETUeQ9KoRrDircA6V5DHq7zgJ3kGbeHDf5FKZKQNrORXXq7psZjXMaNls7JjCBviFwrkUKmtksEaNKkUzN4%2FuHEgQVmVBShXGv1hBwr2%2BZWjmSJRzI4mvvzpokOZXFR0Oqq2C6t4r8EjDqpxQp2G5Eytq77IA9IpPFuIcX2xkVQ2x2bdNB38SOcJOirYovULbXP%2FYu%2FKyEJx2wlu5KttOzG%2BmVGR2iuq4OthCy1gjiXs9lSUQfZdSqoaO%2FEEo3X%2FXq4yV9zdXz4spJhs9fc4%2B%2FyvBjoRrhqHOKVQMNHlHI0Sz0%2BpomodeDt8UbI3dsP5VLM%2FobEWwgnPLejpYfBFYGuur%2FtUqp2Q2B54jyJhRYR3xustr4jRaYBDGwen1EFKbLTNs7Hg0XJfuvuPs%2F5UckJYy5NIDSNvbd1EPPlF%2FwlaYTE085QyXeTmTurstJH4xzNpdqK4HsjPUk6piEvN3jYS5Nc%2BcvK6d6KEt2AqRqj5ahhFrRS78Ln3gVBhTXkxCw3LkfdrI7NX8gd2u7PjcsleFDiEfMmJUnorXOaDuLyydEEJwH0TyCouuAzSnyVo1%2BNA%2BDwRZOjj9t%2F8givQRAXdnIknncZu4AGLaIITn71svyi2J4xqBhe2u3QzbRgNwdyaT9PxTjMIiQrMIGOqUB%2B0ddduIR%2FhfxTxtuVOipnWSi%2BuhOiEZ0CidoGf5OklBo%2BltLfaCmZPhS4X9DO1F74EP2GKvs%2BZBb%2BWXz%2FLVQME2I1BnS5IXZvA5LWJHaZfvUhfr7UIu7rWCdgxF5guGa9uS8TGkrlykYV4%2FRiOReGuPXdsY43suONGxTDgLUijbljWgffSma%2BUUtPsRJxfhSYVxEXaZROBgE%2BUdq6MPLfiv3dr3F&X-Amz-Signature=b1c2a6e9d846a066ccca6e4ec44207b7b33f51250d7167b8e49cebddb81fc75c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CC4JQK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgQLf7lk8HXARLqtPDx%2B6fSgdWuymuxOx48D%2FNfMKbJgIgZD90a9UxRGcRCeM5YS9Juo9qM81EOb6o2smMqbxhCbQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOgbETUeQ9KoRrDircA6V5DHq7zgJ3kGbeHDf5FKZKQNrORXXq7psZjXMaNls7JjCBviFwrkUKmtksEaNKkUzN4%2FuHEgQVmVBShXGv1hBwr2%2BZWjmSJRzI4mvvzpokOZXFR0Oqq2C6t4r8EjDqpxQp2G5Eytq77IA9IpPFuIcX2xkVQ2x2bdNB38SOcJOirYovULbXP%2FYu%2FKyEJx2wlu5KttOzG%2BmVGR2iuq4OthCy1gjiXs9lSUQfZdSqoaO%2FEEo3X%2FXq4yV9zdXz4spJhs9fc4%2B%2FyvBjoRrhqHOKVQMNHlHI0Sz0%2BpomodeDt8UbI3dsP5VLM%2FobEWwgnPLejpYfBFYGuur%2FtUqp2Q2B54jyJhRYR3xustr4jRaYBDGwen1EFKbLTNs7Hg0XJfuvuPs%2F5UckJYy5NIDSNvbd1EPPlF%2FwlaYTE085QyXeTmTurstJH4xzNpdqK4HsjPUk6piEvN3jYS5Nc%2BcvK6d6KEt2AqRqj5ahhFrRS78Ln3gVBhTXkxCw3LkfdrI7NX8gd2u7PjcsleFDiEfMmJUnorXOaDuLyydEEJwH0TyCouuAzSnyVo1%2BNA%2BDwRZOjj9t%2F8givQRAXdnIknncZu4AGLaIITn71svyi2J4xqBhe2u3QzbRgNwdyaT9PxTjMIiQrMIGOqUB%2B0ddduIR%2FhfxTxtuVOipnWSi%2BuhOiEZ0CidoGf5OklBo%2BltLfaCmZPhS4X9DO1F74EP2GKvs%2BZBb%2BWXz%2FLVQME2I1BnS5IXZvA5LWJHaZfvUhfr7UIu7rWCdgxF5guGa9uS8TGkrlykYV4%2FRiOReGuPXdsY43suONGxTDgLUijbljWgffSma%2BUUtPsRJxfhSYVxEXaZROBgE%2BUdq6MPLfiv3dr3F&X-Amz-Signature=277a38d95d3a774cc6f30437c7733b8d69ff5de95fd9c71309e487626e87fe41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CC4JQK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgQLf7lk8HXARLqtPDx%2B6fSgdWuymuxOx48D%2FNfMKbJgIgZD90a9UxRGcRCeM5YS9Juo9qM81EOb6o2smMqbxhCbQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOgbETUeQ9KoRrDircA6V5DHq7zgJ3kGbeHDf5FKZKQNrORXXq7psZjXMaNls7JjCBviFwrkUKmtksEaNKkUzN4%2FuHEgQVmVBShXGv1hBwr2%2BZWjmSJRzI4mvvzpokOZXFR0Oqq2C6t4r8EjDqpxQp2G5Eytq77IA9IpPFuIcX2xkVQ2x2bdNB38SOcJOirYovULbXP%2FYu%2FKyEJx2wlu5KttOzG%2BmVGR2iuq4OthCy1gjiXs9lSUQfZdSqoaO%2FEEo3X%2FXq4yV9zdXz4spJhs9fc4%2B%2FyvBjoRrhqHOKVQMNHlHI0Sz0%2BpomodeDt8UbI3dsP5VLM%2FobEWwgnPLejpYfBFYGuur%2FtUqp2Q2B54jyJhRYR3xustr4jRaYBDGwen1EFKbLTNs7Hg0XJfuvuPs%2F5UckJYy5NIDSNvbd1EPPlF%2FwlaYTE085QyXeTmTurstJH4xzNpdqK4HsjPUk6piEvN3jYS5Nc%2BcvK6d6KEt2AqRqj5ahhFrRS78Ln3gVBhTXkxCw3LkfdrI7NX8gd2u7PjcsleFDiEfMmJUnorXOaDuLyydEEJwH0TyCouuAzSnyVo1%2BNA%2BDwRZOjj9t%2F8givQRAXdnIknncZu4AGLaIITn71svyi2J4xqBhe2u3QzbRgNwdyaT9PxTjMIiQrMIGOqUB%2B0ddduIR%2FhfxTxtuVOipnWSi%2BuhOiEZ0CidoGf5OklBo%2BltLfaCmZPhS4X9DO1F74EP2GKvs%2BZBb%2BWXz%2FLVQME2I1BnS5IXZvA5LWJHaZfvUhfr7UIu7rWCdgxF5guGa9uS8TGkrlykYV4%2FRiOReGuPXdsY43suONGxTDgLUijbljWgffSma%2BUUtPsRJxfhSYVxEXaZROBgE%2BUdq6MPLfiv3dr3F&X-Amz-Signature=d8218e3bb33c58093a0894711a3bb25e01b80d6caaff57cb93f6fbd92d0cd56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CC4JQK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgQLf7lk8HXARLqtPDx%2B6fSgdWuymuxOx48D%2FNfMKbJgIgZD90a9UxRGcRCeM5YS9Juo9qM81EOb6o2smMqbxhCbQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOgbETUeQ9KoRrDircA6V5DHq7zgJ3kGbeHDf5FKZKQNrORXXq7psZjXMaNls7JjCBviFwrkUKmtksEaNKkUzN4%2FuHEgQVmVBShXGv1hBwr2%2BZWjmSJRzI4mvvzpokOZXFR0Oqq2C6t4r8EjDqpxQp2G5Eytq77IA9IpPFuIcX2xkVQ2x2bdNB38SOcJOirYovULbXP%2FYu%2FKyEJx2wlu5KttOzG%2BmVGR2iuq4OthCy1gjiXs9lSUQfZdSqoaO%2FEEo3X%2FXq4yV9zdXz4spJhs9fc4%2B%2FyvBjoRrhqHOKVQMNHlHI0Sz0%2BpomodeDt8UbI3dsP5VLM%2FobEWwgnPLejpYfBFYGuur%2FtUqp2Q2B54jyJhRYR3xustr4jRaYBDGwen1EFKbLTNs7Hg0XJfuvuPs%2F5UckJYy5NIDSNvbd1EPPlF%2FwlaYTE085QyXeTmTurstJH4xzNpdqK4HsjPUk6piEvN3jYS5Nc%2BcvK6d6KEt2AqRqj5ahhFrRS78Ln3gVBhTXkxCw3LkfdrI7NX8gd2u7PjcsleFDiEfMmJUnorXOaDuLyydEEJwH0TyCouuAzSnyVo1%2BNA%2BDwRZOjj9t%2F8givQRAXdnIknncZu4AGLaIITn71svyi2J4xqBhe2u3QzbRgNwdyaT9PxTjMIiQrMIGOqUB%2B0ddduIR%2FhfxTxtuVOipnWSi%2BuhOiEZ0CidoGf5OklBo%2BltLfaCmZPhS4X9DO1F74EP2GKvs%2BZBb%2BWXz%2FLVQME2I1BnS5IXZvA5LWJHaZfvUhfr7UIu7rWCdgxF5guGa9uS8TGkrlykYV4%2FRiOReGuPXdsY43suONGxTDgLUijbljWgffSma%2BUUtPsRJxfhSYVxEXaZROBgE%2BUdq6MPLfiv3dr3F&X-Amz-Signature=982f6b3b41417c66b3dfaaaa025a0c4c751e2d60f43b4b2f05abcf86c9aed87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CC4JQK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgQLf7lk8HXARLqtPDx%2B6fSgdWuymuxOx48D%2FNfMKbJgIgZD90a9UxRGcRCeM5YS9Juo9qM81EOb6o2smMqbxhCbQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOgbETUeQ9KoRrDircA6V5DHq7zgJ3kGbeHDf5FKZKQNrORXXq7psZjXMaNls7JjCBviFwrkUKmtksEaNKkUzN4%2FuHEgQVmVBShXGv1hBwr2%2BZWjmSJRzI4mvvzpokOZXFR0Oqq2C6t4r8EjDqpxQp2G5Eytq77IA9IpPFuIcX2xkVQ2x2bdNB38SOcJOirYovULbXP%2FYu%2FKyEJx2wlu5KttOzG%2BmVGR2iuq4OthCy1gjiXs9lSUQfZdSqoaO%2FEEo3X%2FXq4yV9zdXz4spJhs9fc4%2B%2FyvBjoRrhqHOKVQMNHlHI0Sz0%2BpomodeDt8UbI3dsP5VLM%2FobEWwgnPLejpYfBFYGuur%2FtUqp2Q2B54jyJhRYR3xustr4jRaYBDGwen1EFKbLTNs7Hg0XJfuvuPs%2F5UckJYy5NIDSNvbd1EPPlF%2FwlaYTE085QyXeTmTurstJH4xzNpdqK4HsjPUk6piEvN3jYS5Nc%2BcvK6d6KEt2AqRqj5ahhFrRS78Ln3gVBhTXkxCw3LkfdrI7NX8gd2u7PjcsleFDiEfMmJUnorXOaDuLyydEEJwH0TyCouuAzSnyVo1%2BNA%2BDwRZOjj9t%2F8givQRAXdnIknncZu4AGLaIITn71svyi2J4xqBhe2u3QzbRgNwdyaT9PxTjMIiQrMIGOqUB%2B0ddduIR%2FhfxTxtuVOipnWSi%2BuhOiEZ0CidoGf5OklBo%2BltLfaCmZPhS4X9DO1F74EP2GKvs%2BZBb%2BWXz%2FLVQME2I1BnS5IXZvA5LWJHaZfvUhfr7UIu7rWCdgxF5guGa9uS8TGkrlykYV4%2FRiOReGuPXdsY43suONGxTDgLUijbljWgffSma%2BUUtPsRJxfhSYVxEXaZROBgE%2BUdq6MPLfiv3dr3F&X-Amz-Signature=78de4065b1b42c614a4a4042ea86ff735c9d5e6fd28962846991b92b9861ed53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CC4JQK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgQLf7lk8HXARLqtPDx%2B6fSgdWuymuxOx48D%2FNfMKbJgIgZD90a9UxRGcRCeM5YS9Juo9qM81EOb6o2smMqbxhCbQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOgbETUeQ9KoRrDircA6V5DHq7zgJ3kGbeHDf5FKZKQNrORXXq7psZjXMaNls7JjCBviFwrkUKmtksEaNKkUzN4%2FuHEgQVmVBShXGv1hBwr2%2BZWjmSJRzI4mvvzpokOZXFR0Oqq2C6t4r8EjDqpxQp2G5Eytq77IA9IpPFuIcX2xkVQ2x2bdNB38SOcJOirYovULbXP%2FYu%2FKyEJx2wlu5KttOzG%2BmVGR2iuq4OthCy1gjiXs9lSUQfZdSqoaO%2FEEo3X%2FXq4yV9zdXz4spJhs9fc4%2B%2FyvBjoRrhqHOKVQMNHlHI0Sz0%2BpomodeDt8UbI3dsP5VLM%2FobEWwgnPLejpYfBFYGuur%2FtUqp2Q2B54jyJhRYR3xustr4jRaYBDGwen1EFKbLTNs7Hg0XJfuvuPs%2F5UckJYy5NIDSNvbd1EPPlF%2FwlaYTE085QyXeTmTurstJH4xzNpdqK4HsjPUk6piEvN3jYS5Nc%2BcvK6d6KEt2AqRqj5ahhFrRS78Ln3gVBhTXkxCw3LkfdrI7NX8gd2u7PjcsleFDiEfMmJUnorXOaDuLyydEEJwH0TyCouuAzSnyVo1%2BNA%2BDwRZOjj9t%2F8givQRAXdnIknncZu4AGLaIITn71svyi2J4xqBhe2u3QzbRgNwdyaT9PxTjMIiQrMIGOqUB%2B0ddduIR%2FhfxTxtuVOipnWSi%2BuhOiEZ0CidoGf5OklBo%2BltLfaCmZPhS4X9DO1F74EP2GKvs%2BZBb%2BWXz%2FLVQME2I1BnS5IXZvA5LWJHaZfvUhfr7UIu7rWCdgxF5guGa9uS8TGkrlykYV4%2FRiOReGuPXdsY43suONGxTDgLUijbljWgffSma%2BUUtPsRJxfhSYVxEXaZROBgE%2BUdq6MPLfiv3dr3F&X-Amz-Signature=bce3b07dcf89131c15a6c5e4886c3d8b0f2e10a3a9f7c2e36130a9bc985d2a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CC4JQK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgQLf7lk8HXARLqtPDx%2B6fSgdWuymuxOx48D%2FNfMKbJgIgZD90a9UxRGcRCeM5YS9Juo9qM81EOb6o2smMqbxhCbQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOgbETUeQ9KoRrDircA6V5DHq7zgJ3kGbeHDf5FKZKQNrORXXq7psZjXMaNls7JjCBviFwrkUKmtksEaNKkUzN4%2FuHEgQVmVBShXGv1hBwr2%2BZWjmSJRzI4mvvzpokOZXFR0Oqq2C6t4r8EjDqpxQp2G5Eytq77IA9IpPFuIcX2xkVQ2x2bdNB38SOcJOirYovULbXP%2FYu%2FKyEJx2wlu5KttOzG%2BmVGR2iuq4OthCy1gjiXs9lSUQfZdSqoaO%2FEEo3X%2FXq4yV9zdXz4spJhs9fc4%2B%2FyvBjoRrhqHOKVQMNHlHI0Sz0%2BpomodeDt8UbI3dsP5VLM%2FobEWwgnPLejpYfBFYGuur%2FtUqp2Q2B54jyJhRYR3xustr4jRaYBDGwen1EFKbLTNs7Hg0XJfuvuPs%2F5UckJYy5NIDSNvbd1EPPlF%2FwlaYTE085QyXeTmTurstJH4xzNpdqK4HsjPUk6piEvN3jYS5Nc%2BcvK6d6KEt2AqRqj5ahhFrRS78Ln3gVBhTXkxCw3LkfdrI7NX8gd2u7PjcsleFDiEfMmJUnorXOaDuLyydEEJwH0TyCouuAzSnyVo1%2BNA%2BDwRZOjj9t%2F8givQRAXdnIknncZu4AGLaIITn71svyi2J4xqBhe2u3QzbRgNwdyaT9PxTjMIiQrMIGOqUB%2B0ddduIR%2FhfxTxtuVOipnWSi%2BuhOiEZ0CidoGf5OklBo%2BltLfaCmZPhS4X9DO1F74EP2GKvs%2BZBb%2BWXz%2FLVQME2I1BnS5IXZvA5LWJHaZfvUhfr7UIu7rWCdgxF5guGa9uS8TGkrlykYV4%2FRiOReGuPXdsY43suONGxTDgLUijbljWgffSma%2BUUtPsRJxfhSYVxEXaZROBgE%2BUdq6MPLfiv3dr3F&X-Amz-Signature=a6767c6e2cf2184b90afd5567a2189f5f68c4897da43f0c882122bc91087f99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CC4JQK%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgQLf7lk8HXARLqtPDx%2B6fSgdWuymuxOx48D%2FNfMKbJgIgZD90a9UxRGcRCeM5YS9Juo9qM81EOb6o2smMqbxhCbQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpOgbETUeQ9KoRrDircA6V5DHq7zgJ3kGbeHDf5FKZKQNrORXXq7psZjXMaNls7JjCBviFwrkUKmtksEaNKkUzN4%2FuHEgQVmVBShXGv1hBwr2%2BZWjmSJRzI4mvvzpokOZXFR0Oqq2C6t4r8EjDqpxQp2G5Eytq77IA9IpPFuIcX2xkVQ2x2bdNB38SOcJOirYovULbXP%2FYu%2FKyEJx2wlu5KttOzG%2BmVGR2iuq4OthCy1gjiXs9lSUQfZdSqoaO%2FEEo3X%2FXq4yV9zdXz4spJhs9fc4%2B%2FyvBjoRrhqHOKVQMNHlHI0Sz0%2BpomodeDt8UbI3dsP5VLM%2FobEWwgnPLejpYfBFYGuur%2FtUqp2Q2B54jyJhRYR3xustr4jRaYBDGwen1EFKbLTNs7Hg0XJfuvuPs%2F5UckJYy5NIDSNvbd1EPPlF%2FwlaYTE085QyXeTmTurstJH4xzNpdqK4HsjPUk6piEvN3jYS5Nc%2BcvK6d6KEt2AqRqj5ahhFrRS78Ln3gVBhTXkxCw3LkfdrI7NX8gd2u7PjcsleFDiEfMmJUnorXOaDuLyydEEJwH0TyCouuAzSnyVo1%2BNA%2BDwRZOjj9t%2F8givQRAXdnIknncZu4AGLaIITn71svyi2J4xqBhe2u3QzbRgNwdyaT9PxTjMIiQrMIGOqUB%2B0ddduIR%2FhfxTxtuVOipnWSi%2BuhOiEZ0CidoGf5OklBo%2BltLfaCmZPhS4X9DO1F74EP2GKvs%2BZBb%2BWXz%2FLVQME2I1BnS5IXZvA5LWJHaZfvUhfr7UIu7rWCdgxF5guGa9uS8TGkrlykYV4%2FRiOReGuPXdsY43suONGxTDgLUijbljWgffSma%2BUUtPsRJxfhSYVxEXaZROBgE%2BUdq6MPLfiv3dr3F&X-Amz-Signature=a31829c623e51497c409c8f86ec869f2de27dcf50864f7cc9069b17fd147b7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

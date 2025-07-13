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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQUTZ4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuKJuLxQBIALOYrG9tc38iZVfC9rpkdJ3ECUpDib5ZIQIgV3tbufb%2F0gUZ5DRRVxDRi4WlN%2F8kiNrsSlKpxbqIn2Aq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPA5UuOWkHaEeMmK5yrcA9OF5%2BTzNZyGFFEY5EezUSM5czANvLNJ5hSSwWqYfx0n0%2BcRUIvubcTQ22ZLaOmI61M%2B1cCWzhw3sCIfqvZ7dInT7H5xpmvEbyp0nP0Db1iWSnKT4a3EEjOOAtXDWVOsDSDnBHJcx7JhV%2Fkg5tzDMVTfy8O8XI0BOnM4ztRy%2BT8bhslKElycu2TTZoKF9%2BKZ4ab2QoPwMf%2F3Xl1MCQKc0ZLTTUSfUJ7YSO7fuHwtqUtOfqiFa1Q%2F7xNntw2L5UdYn3%2Ba88WhHthNyTvW4IdZ1vfWnzhX34WW2LSC%2FefMnl8woP%2BMtE6Pzr%2FPoH5EyDLohuUKqNTPLbcGscBwJ2JQuwFg2zNCdZCh5rZy0ZOcL%2FMJjNLlXFkyIEaqh3FiTlVK%2FuA4RX%2FcaXugsnnOSWfMsjaEYXcYInfageEQGpcDHLMbNMejVuGlHCO1lxpOVbJIZJ%2Bc0ha3oIMDWyZFIgubvXWZq7h1WZ1JjktUal3v1JjwgLsN6WceIuZUhGY%2BImAuo0i8HkdYwc6nSmp2TpYnMR6CjuC7AnClEddOsbyrX7TOPZVmVAKrNRrigO1WYnPmO1gU2vbzwExFMEEOYeUFpaO9f5c%2F8G%2BOm7UG1JV8H2v8DQ1qPpZ4PlGmX%2BfzMKqkzcMGOqUBJ%2FmOS1r2%2B6CuqpqJU66cgfKuXtc9EFgDwyQX4sFBqhdXz9dqF8j8AbDDUsNfYJZfQlQCqQytTmKmv7gBRIg6G1pmsM1rZhitcUPmy0SIXMBVEV%2F4qjCgHHHoBBxrbnZcqzuP%2BdrAwt9u9TNLhIK0qoiumJSMffwCwR0CCZwrmJvCa%2FYttJT8D7SfBNclyCyHGp0saIRIcxIDMR2dTkoazC0Y7ss8&X-Amz-Signature=c9c07746718733318629257deaff41a709207560c354f0372503b7146b511714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQUTZ4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuKJuLxQBIALOYrG9tc38iZVfC9rpkdJ3ECUpDib5ZIQIgV3tbufb%2F0gUZ5DRRVxDRi4WlN%2F8kiNrsSlKpxbqIn2Aq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPA5UuOWkHaEeMmK5yrcA9OF5%2BTzNZyGFFEY5EezUSM5czANvLNJ5hSSwWqYfx0n0%2BcRUIvubcTQ22ZLaOmI61M%2B1cCWzhw3sCIfqvZ7dInT7H5xpmvEbyp0nP0Db1iWSnKT4a3EEjOOAtXDWVOsDSDnBHJcx7JhV%2Fkg5tzDMVTfy8O8XI0BOnM4ztRy%2BT8bhslKElycu2TTZoKF9%2BKZ4ab2QoPwMf%2F3Xl1MCQKc0ZLTTUSfUJ7YSO7fuHwtqUtOfqiFa1Q%2F7xNntw2L5UdYn3%2Ba88WhHthNyTvW4IdZ1vfWnzhX34WW2LSC%2FefMnl8woP%2BMtE6Pzr%2FPoH5EyDLohuUKqNTPLbcGscBwJ2JQuwFg2zNCdZCh5rZy0ZOcL%2FMJjNLlXFkyIEaqh3FiTlVK%2FuA4RX%2FcaXugsnnOSWfMsjaEYXcYInfageEQGpcDHLMbNMejVuGlHCO1lxpOVbJIZJ%2Bc0ha3oIMDWyZFIgubvXWZq7h1WZ1JjktUal3v1JjwgLsN6WceIuZUhGY%2BImAuo0i8HkdYwc6nSmp2TpYnMR6CjuC7AnClEddOsbyrX7TOPZVmVAKrNRrigO1WYnPmO1gU2vbzwExFMEEOYeUFpaO9f5c%2F8G%2BOm7UG1JV8H2v8DQ1qPpZ4PlGmX%2BfzMKqkzcMGOqUBJ%2FmOS1r2%2B6CuqpqJU66cgfKuXtc9EFgDwyQX4sFBqhdXz9dqF8j8AbDDUsNfYJZfQlQCqQytTmKmv7gBRIg6G1pmsM1rZhitcUPmy0SIXMBVEV%2F4qjCgHHHoBBxrbnZcqzuP%2BdrAwt9u9TNLhIK0qoiumJSMffwCwR0CCZwrmJvCa%2FYttJT8D7SfBNclyCyHGp0saIRIcxIDMR2dTkoazC0Y7ss8&X-Amz-Signature=4047205f19de7a632070ae6fceb1b309b82aac7327beeca84c88030fbab420ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQUTZ4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuKJuLxQBIALOYrG9tc38iZVfC9rpkdJ3ECUpDib5ZIQIgV3tbufb%2F0gUZ5DRRVxDRi4WlN%2F8kiNrsSlKpxbqIn2Aq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPA5UuOWkHaEeMmK5yrcA9OF5%2BTzNZyGFFEY5EezUSM5czANvLNJ5hSSwWqYfx0n0%2BcRUIvubcTQ22ZLaOmI61M%2B1cCWzhw3sCIfqvZ7dInT7H5xpmvEbyp0nP0Db1iWSnKT4a3EEjOOAtXDWVOsDSDnBHJcx7JhV%2Fkg5tzDMVTfy8O8XI0BOnM4ztRy%2BT8bhslKElycu2TTZoKF9%2BKZ4ab2QoPwMf%2F3Xl1MCQKc0ZLTTUSfUJ7YSO7fuHwtqUtOfqiFa1Q%2F7xNntw2L5UdYn3%2Ba88WhHthNyTvW4IdZ1vfWnzhX34WW2LSC%2FefMnl8woP%2BMtE6Pzr%2FPoH5EyDLohuUKqNTPLbcGscBwJ2JQuwFg2zNCdZCh5rZy0ZOcL%2FMJjNLlXFkyIEaqh3FiTlVK%2FuA4RX%2FcaXugsnnOSWfMsjaEYXcYInfageEQGpcDHLMbNMejVuGlHCO1lxpOVbJIZJ%2Bc0ha3oIMDWyZFIgubvXWZq7h1WZ1JjktUal3v1JjwgLsN6WceIuZUhGY%2BImAuo0i8HkdYwc6nSmp2TpYnMR6CjuC7AnClEddOsbyrX7TOPZVmVAKrNRrigO1WYnPmO1gU2vbzwExFMEEOYeUFpaO9f5c%2F8G%2BOm7UG1JV8H2v8DQ1qPpZ4PlGmX%2BfzMKqkzcMGOqUBJ%2FmOS1r2%2B6CuqpqJU66cgfKuXtc9EFgDwyQX4sFBqhdXz9dqF8j8AbDDUsNfYJZfQlQCqQytTmKmv7gBRIg6G1pmsM1rZhitcUPmy0SIXMBVEV%2F4qjCgHHHoBBxrbnZcqzuP%2BdrAwt9u9TNLhIK0qoiumJSMffwCwR0CCZwrmJvCa%2FYttJT8D7SfBNclyCyHGp0saIRIcxIDMR2dTkoazC0Y7ss8&X-Amz-Signature=c57a2a279356fcc1d31c3faf0c179e38c59d39ad043e50c87b0745e97bc134b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQUTZ4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuKJuLxQBIALOYrG9tc38iZVfC9rpkdJ3ECUpDib5ZIQIgV3tbufb%2F0gUZ5DRRVxDRi4WlN%2F8kiNrsSlKpxbqIn2Aq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPA5UuOWkHaEeMmK5yrcA9OF5%2BTzNZyGFFEY5EezUSM5czANvLNJ5hSSwWqYfx0n0%2BcRUIvubcTQ22ZLaOmI61M%2B1cCWzhw3sCIfqvZ7dInT7H5xpmvEbyp0nP0Db1iWSnKT4a3EEjOOAtXDWVOsDSDnBHJcx7JhV%2Fkg5tzDMVTfy8O8XI0BOnM4ztRy%2BT8bhslKElycu2TTZoKF9%2BKZ4ab2QoPwMf%2F3Xl1MCQKc0ZLTTUSfUJ7YSO7fuHwtqUtOfqiFa1Q%2F7xNntw2L5UdYn3%2Ba88WhHthNyTvW4IdZ1vfWnzhX34WW2LSC%2FefMnl8woP%2BMtE6Pzr%2FPoH5EyDLohuUKqNTPLbcGscBwJ2JQuwFg2zNCdZCh5rZy0ZOcL%2FMJjNLlXFkyIEaqh3FiTlVK%2FuA4RX%2FcaXugsnnOSWfMsjaEYXcYInfageEQGpcDHLMbNMejVuGlHCO1lxpOVbJIZJ%2Bc0ha3oIMDWyZFIgubvXWZq7h1WZ1JjktUal3v1JjwgLsN6WceIuZUhGY%2BImAuo0i8HkdYwc6nSmp2TpYnMR6CjuC7AnClEddOsbyrX7TOPZVmVAKrNRrigO1WYnPmO1gU2vbzwExFMEEOYeUFpaO9f5c%2F8G%2BOm7UG1JV8H2v8DQ1qPpZ4PlGmX%2BfzMKqkzcMGOqUBJ%2FmOS1r2%2B6CuqpqJU66cgfKuXtc9EFgDwyQX4sFBqhdXz9dqF8j8AbDDUsNfYJZfQlQCqQytTmKmv7gBRIg6G1pmsM1rZhitcUPmy0SIXMBVEV%2F4qjCgHHHoBBxrbnZcqzuP%2BdrAwt9u9TNLhIK0qoiumJSMffwCwR0CCZwrmJvCa%2FYttJT8D7SfBNclyCyHGp0saIRIcxIDMR2dTkoazC0Y7ss8&X-Amz-Signature=9ab9197d2276f3da614b1e62d7d5b429079c5ee99b09089f419a1d4928d28f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQUTZ4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuKJuLxQBIALOYrG9tc38iZVfC9rpkdJ3ECUpDib5ZIQIgV3tbufb%2F0gUZ5DRRVxDRi4WlN%2F8kiNrsSlKpxbqIn2Aq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPA5UuOWkHaEeMmK5yrcA9OF5%2BTzNZyGFFEY5EezUSM5czANvLNJ5hSSwWqYfx0n0%2BcRUIvubcTQ22ZLaOmI61M%2B1cCWzhw3sCIfqvZ7dInT7H5xpmvEbyp0nP0Db1iWSnKT4a3EEjOOAtXDWVOsDSDnBHJcx7JhV%2Fkg5tzDMVTfy8O8XI0BOnM4ztRy%2BT8bhslKElycu2TTZoKF9%2BKZ4ab2QoPwMf%2F3Xl1MCQKc0ZLTTUSfUJ7YSO7fuHwtqUtOfqiFa1Q%2F7xNntw2L5UdYn3%2Ba88WhHthNyTvW4IdZ1vfWnzhX34WW2LSC%2FefMnl8woP%2BMtE6Pzr%2FPoH5EyDLohuUKqNTPLbcGscBwJ2JQuwFg2zNCdZCh5rZy0ZOcL%2FMJjNLlXFkyIEaqh3FiTlVK%2FuA4RX%2FcaXugsnnOSWfMsjaEYXcYInfageEQGpcDHLMbNMejVuGlHCO1lxpOVbJIZJ%2Bc0ha3oIMDWyZFIgubvXWZq7h1WZ1JjktUal3v1JjwgLsN6WceIuZUhGY%2BImAuo0i8HkdYwc6nSmp2TpYnMR6CjuC7AnClEddOsbyrX7TOPZVmVAKrNRrigO1WYnPmO1gU2vbzwExFMEEOYeUFpaO9f5c%2F8G%2BOm7UG1JV8H2v8DQ1qPpZ4PlGmX%2BfzMKqkzcMGOqUBJ%2FmOS1r2%2B6CuqpqJU66cgfKuXtc9EFgDwyQX4sFBqhdXz9dqF8j8AbDDUsNfYJZfQlQCqQytTmKmv7gBRIg6G1pmsM1rZhitcUPmy0SIXMBVEV%2F4qjCgHHHoBBxrbnZcqzuP%2BdrAwt9u9TNLhIK0qoiumJSMffwCwR0CCZwrmJvCa%2FYttJT8D7SfBNclyCyHGp0saIRIcxIDMR2dTkoazC0Y7ss8&X-Amz-Signature=fdd51b0d66387992bd412640611db453209c052dfdf2eb8ca52e5584aae6e26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQUTZ4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuKJuLxQBIALOYrG9tc38iZVfC9rpkdJ3ECUpDib5ZIQIgV3tbufb%2F0gUZ5DRRVxDRi4WlN%2F8kiNrsSlKpxbqIn2Aq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPA5UuOWkHaEeMmK5yrcA9OF5%2BTzNZyGFFEY5EezUSM5czANvLNJ5hSSwWqYfx0n0%2BcRUIvubcTQ22ZLaOmI61M%2B1cCWzhw3sCIfqvZ7dInT7H5xpmvEbyp0nP0Db1iWSnKT4a3EEjOOAtXDWVOsDSDnBHJcx7JhV%2Fkg5tzDMVTfy8O8XI0BOnM4ztRy%2BT8bhslKElycu2TTZoKF9%2BKZ4ab2QoPwMf%2F3Xl1MCQKc0ZLTTUSfUJ7YSO7fuHwtqUtOfqiFa1Q%2F7xNntw2L5UdYn3%2Ba88WhHthNyTvW4IdZ1vfWnzhX34WW2LSC%2FefMnl8woP%2BMtE6Pzr%2FPoH5EyDLohuUKqNTPLbcGscBwJ2JQuwFg2zNCdZCh5rZy0ZOcL%2FMJjNLlXFkyIEaqh3FiTlVK%2FuA4RX%2FcaXugsnnOSWfMsjaEYXcYInfageEQGpcDHLMbNMejVuGlHCO1lxpOVbJIZJ%2Bc0ha3oIMDWyZFIgubvXWZq7h1WZ1JjktUal3v1JjwgLsN6WceIuZUhGY%2BImAuo0i8HkdYwc6nSmp2TpYnMR6CjuC7AnClEddOsbyrX7TOPZVmVAKrNRrigO1WYnPmO1gU2vbzwExFMEEOYeUFpaO9f5c%2F8G%2BOm7UG1JV8H2v8DQ1qPpZ4PlGmX%2BfzMKqkzcMGOqUBJ%2FmOS1r2%2B6CuqpqJU66cgfKuXtc9EFgDwyQX4sFBqhdXz9dqF8j8AbDDUsNfYJZfQlQCqQytTmKmv7gBRIg6G1pmsM1rZhitcUPmy0SIXMBVEV%2F4qjCgHHHoBBxrbnZcqzuP%2BdrAwt9u9TNLhIK0qoiumJSMffwCwR0CCZwrmJvCa%2FYttJT8D7SfBNclyCyHGp0saIRIcxIDMR2dTkoazC0Y7ss8&X-Amz-Signature=dba6b7029835421e6c5a93c5bef71d1c9220d2cff2e98e57dabd3ee48c9ad73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQUTZ4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuKJuLxQBIALOYrG9tc38iZVfC9rpkdJ3ECUpDib5ZIQIgV3tbufb%2F0gUZ5DRRVxDRi4WlN%2F8kiNrsSlKpxbqIn2Aq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPA5UuOWkHaEeMmK5yrcA9OF5%2BTzNZyGFFEY5EezUSM5czANvLNJ5hSSwWqYfx0n0%2BcRUIvubcTQ22ZLaOmI61M%2B1cCWzhw3sCIfqvZ7dInT7H5xpmvEbyp0nP0Db1iWSnKT4a3EEjOOAtXDWVOsDSDnBHJcx7JhV%2Fkg5tzDMVTfy8O8XI0BOnM4ztRy%2BT8bhslKElycu2TTZoKF9%2BKZ4ab2QoPwMf%2F3Xl1MCQKc0ZLTTUSfUJ7YSO7fuHwtqUtOfqiFa1Q%2F7xNntw2L5UdYn3%2Ba88WhHthNyTvW4IdZ1vfWnzhX34WW2LSC%2FefMnl8woP%2BMtE6Pzr%2FPoH5EyDLohuUKqNTPLbcGscBwJ2JQuwFg2zNCdZCh5rZy0ZOcL%2FMJjNLlXFkyIEaqh3FiTlVK%2FuA4RX%2FcaXugsnnOSWfMsjaEYXcYInfageEQGpcDHLMbNMejVuGlHCO1lxpOVbJIZJ%2Bc0ha3oIMDWyZFIgubvXWZq7h1WZ1JjktUal3v1JjwgLsN6WceIuZUhGY%2BImAuo0i8HkdYwc6nSmp2TpYnMR6CjuC7AnClEddOsbyrX7TOPZVmVAKrNRrigO1WYnPmO1gU2vbzwExFMEEOYeUFpaO9f5c%2F8G%2BOm7UG1JV8H2v8DQ1qPpZ4PlGmX%2BfzMKqkzcMGOqUBJ%2FmOS1r2%2B6CuqpqJU66cgfKuXtc9EFgDwyQX4sFBqhdXz9dqF8j8AbDDUsNfYJZfQlQCqQytTmKmv7gBRIg6G1pmsM1rZhitcUPmy0SIXMBVEV%2F4qjCgHHHoBBxrbnZcqzuP%2BdrAwt9u9TNLhIK0qoiumJSMffwCwR0CCZwrmJvCa%2FYttJT8D7SfBNclyCyHGp0saIRIcxIDMR2dTkoazC0Y7ss8&X-Amz-Signature=c3cc65162151cc16d3824e535a1dccc0494cf9cebfdb45aaf4b25657903e64c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQUTZ4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuKJuLxQBIALOYrG9tc38iZVfC9rpkdJ3ECUpDib5ZIQIgV3tbufb%2F0gUZ5DRRVxDRi4WlN%2F8kiNrsSlKpxbqIn2Aq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPA5UuOWkHaEeMmK5yrcA9OF5%2BTzNZyGFFEY5EezUSM5czANvLNJ5hSSwWqYfx0n0%2BcRUIvubcTQ22ZLaOmI61M%2B1cCWzhw3sCIfqvZ7dInT7H5xpmvEbyp0nP0Db1iWSnKT4a3EEjOOAtXDWVOsDSDnBHJcx7JhV%2Fkg5tzDMVTfy8O8XI0BOnM4ztRy%2BT8bhslKElycu2TTZoKF9%2BKZ4ab2QoPwMf%2F3Xl1MCQKc0ZLTTUSfUJ7YSO7fuHwtqUtOfqiFa1Q%2F7xNntw2L5UdYn3%2Ba88WhHthNyTvW4IdZ1vfWnzhX34WW2LSC%2FefMnl8woP%2BMtE6Pzr%2FPoH5EyDLohuUKqNTPLbcGscBwJ2JQuwFg2zNCdZCh5rZy0ZOcL%2FMJjNLlXFkyIEaqh3FiTlVK%2FuA4RX%2FcaXugsnnOSWfMsjaEYXcYInfageEQGpcDHLMbNMejVuGlHCO1lxpOVbJIZJ%2Bc0ha3oIMDWyZFIgubvXWZq7h1WZ1JjktUal3v1JjwgLsN6WceIuZUhGY%2BImAuo0i8HkdYwc6nSmp2TpYnMR6CjuC7AnClEddOsbyrX7TOPZVmVAKrNRrigO1WYnPmO1gU2vbzwExFMEEOYeUFpaO9f5c%2F8G%2BOm7UG1JV8H2v8DQ1qPpZ4PlGmX%2BfzMKqkzcMGOqUBJ%2FmOS1r2%2B6CuqpqJU66cgfKuXtc9EFgDwyQX4sFBqhdXz9dqF8j8AbDDUsNfYJZfQlQCqQytTmKmv7gBRIg6G1pmsM1rZhitcUPmy0SIXMBVEV%2F4qjCgHHHoBBxrbnZcqzuP%2BdrAwt9u9TNLhIK0qoiumJSMffwCwR0CCZwrmJvCa%2FYttJT8D7SfBNclyCyHGp0saIRIcxIDMR2dTkoazC0Y7ss8&X-Amz-Signature=a70c62afe81e2647dd584ab206b3f9568a27fd1e553405fac68eed09cd35259a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

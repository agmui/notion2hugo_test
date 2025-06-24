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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDGEZMK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCY79zswDRZRhMQSeZsN3VQur6irPl1yS6e7171v9dSXwIgDhnVuee9gGxJTGfQ6nZqZjaXB11uySIqEsyjRcpVhNoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMaRqESxIRE85gILuSrcAxEzfpGgYcuOwN6KEyHqoXYGA49XiK%2BHLKw5cls0RQfgxatXJ2ZldwvsrAz3elHmzKJEWgjTKjBj8GJet0jdaz%2BBFEnMvH7OKM5Mc6FNs2X0rSxK4K9shj9BbDHoO%2FVARzpyWESSYWOmXsSt0bG5yy6b9TBBdlaz%2BmFgjp1UXkt2fga4VYIcjwBXE7o06MMsbQU5jJxSX3WFCkT2ItiXt6I8FNMcksJx8t2Dbiv6WweoFKyFWfO%2BHBpwjYhdAv%2BPQ%2Ba%2BB%2F71VolaYkHBCWh%2FzkmT8fESyTJWm9OSh6siGmyfNMLhITWVfTKOaKEjYMXtlyd%2BfN1efH71CmupA8g%2Ba%2BZXqfX%2BprQQ0UwK%2FIEgKH9XYoxy5txVHOYiGlLZIlYx%2FIq3tnk6UmTd%2B7LA08RXLA2%2BzRGIsXCxDtmayDWOg4jOzKpy4Azluw1V0nEE%2B0UHTEaqvKe8JYCSxsueQ%2Fph0OgP3iIWCFLJcWoDsDC3eyTOIE2FuABlfdWbl%2BfApoJDeX7oOuR7P3L%2FvAlbzAIPdRx7aT%2FXAIl%2BnpjB48u5wQeYsdUQhmEwQJHkuDzguJ4hWSFxc94eZZWvSJQFjA2HNnKZfPg94w9S0NhJZENkkce5CZU4tOhKAALcniDfMPi968IGOqUBHTmSnVsnj3x4c%2FvXJ1Niud7MVrf0F42UsiKxgdknja4iGVQu7p4GxqzEL8suaZEqGzC5zh4UZzcXKBzch70oLq4jisnXPqh9aNUsyDywY5hzBg0EVrKCOISQPrcouL1bC2Rhf86Zj0yblmqaOl%2FKlANdZl%2Bch464wDw6lXHv8YAK%2Fj97skSc7Ifd2nZtrYU7GknvqPTYxr0eOG6EaYPvNVfQgrej&X-Amz-Signature=7e4a79fb48415bdfb71f8de79d7c93eaa33ec52e755241bf1c6d9118dddb14e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDGEZMK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCY79zswDRZRhMQSeZsN3VQur6irPl1yS6e7171v9dSXwIgDhnVuee9gGxJTGfQ6nZqZjaXB11uySIqEsyjRcpVhNoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMaRqESxIRE85gILuSrcAxEzfpGgYcuOwN6KEyHqoXYGA49XiK%2BHLKw5cls0RQfgxatXJ2ZldwvsrAz3elHmzKJEWgjTKjBj8GJet0jdaz%2BBFEnMvH7OKM5Mc6FNs2X0rSxK4K9shj9BbDHoO%2FVARzpyWESSYWOmXsSt0bG5yy6b9TBBdlaz%2BmFgjp1UXkt2fga4VYIcjwBXE7o06MMsbQU5jJxSX3WFCkT2ItiXt6I8FNMcksJx8t2Dbiv6WweoFKyFWfO%2BHBpwjYhdAv%2BPQ%2Ba%2BB%2F71VolaYkHBCWh%2FzkmT8fESyTJWm9OSh6siGmyfNMLhITWVfTKOaKEjYMXtlyd%2BfN1efH71CmupA8g%2Ba%2BZXqfX%2BprQQ0UwK%2FIEgKH9XYoxy5txVHOYiGlLZIlYx%2FIq3tnk6UmTd%2B7LA08RXLA2%2BzRGIsXCxDtmayDWOg4jOzKpy4Azluw1V0nEE%2B0UHTEaqvKe8JYCSxsueQ%2Fph0OgP3iIWCFLJcWoDsDC3eyTOIE2FuABlfdWbl%2BfApoJDeX7oOuR7P3L%2FvAlbzAIPdRx7aT%2FXAIl%2BnpjB48u5wQeYsdUQhmEwQJHkuDzguJ4hWSFxc94eZZWvSJQFjA2HNnKZfPg94w9S0NhJZENkkce5CZU4tOhKAALcniDfMPi968IGOqUBHTmSnVsnj3x4c%2FvXJ1Niud7MVrf0F42UsiKxgdknja4iGVQu7p4GxqzEL8suaZEqGzC5zh4UZzcXKBzch70oLq4jisnXPqh9aNUsyDywY5hzBg0EVrKCOISQPrcouL1bC2Rhf86Zj0yblmqaOl%2FKlANdZl%2Bch464wDw6lXHv8YAK%2Fj97skSc7Ifd2nZtrYU7GknvqPTYxr0eOG6EaYPvNVfQgrej&X-Amz-Signature=d409332ccb80ab985fc811a5662abbea01bdb2e2cb232fc61908f4f67aec9e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDGEZMK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCY79zswDRZRhMQSeZsN3VQur6irPl1yS6e7171v9dSXwIgDhnVuee9gGxJTGfQ6nZqZjaXB11uySIqEsyjRcpVhNoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMaRqESxIRE85gILuSrcAxEzfpGgYcuOwN6KEyHqoXYGA49XiK%2BHLKw5cls0RQfgxatXJ2ZldwvsrAz3elHmzKJEWgjTKjBj8GJet0jdaz%2BBFEnMvH7OKM5Mc6FNs2X0rSxK4K9shj9BbDHoO%2FVARzpyWESSYWOmXsSt0bG5yy6b9TBBdlaz%2BmFgjp1UXkt2fga4VYIcjwBXE7o06MMsbQU5jJxSX3WFCkT2ItiXt6I8FNMcksJx8t2Dbiv6WweoFKyFWfO%2BHBpwjYhdAv%2BPQ%2Ba%2BB%2F71VolaYkHBCWh%2FzkmT8fESyTJWm9OSh6siGmyfNMLhITWVfTKOaKEjYMXtlyd%2BfN1efH71CmupA8g%2Ba%2BZXqfX%2BprQQ0UwK%2FIEgKH9XYoxy5txVHOYiGlLZIlYx%2FIq3tnk6UmTd%2B7LA08RXLA2%2BzRGIsXCxDtmayDWOg4jOzKpy4Azluw1V0nEE%2B0UHTEaqvKe8JYCSxsueQ%2Fph0OgP3iIWCFLJcWoDsDC3eyTOIE2FuABlfdWbl%2BfApoJDeX7oOuR7P3L%2FvAlbzAIPdRx7aT%2FXAIl%2BnpjB48u5wQeYsdUQhmEwQJHkuDzguJ4hWSFxc94eZZWvSJQFjA2HNnKZfPg94w9S0NhJZENkkce5CZU4tOhKAALcniDfMPi968IGOqUBHTmSnVsnj3x4c%2FvXJ1Niud7MVrf0F42UsiKxgdknja4iGVQu7p4GxqzEL8suaZEqGzC5zh4UZzcXKBzch70oLq4jisnXPqh9aNUsyDywY5hzBg0EVrKCOISQPrcouL1bC2Rhf86Zj0yblmqaOl%2FKlANdZl%2Bch464wDw6lXHv8YAK%2Fj97skSc7Ifd2nZtrYU7GknvqPTYxr0eOG6EaYPvNVfQgrej&X-Amz-Signature=06a3d3c6a075c6cd4b53bfa2a74a68b71404ef3cbb71595e6dfb905901554efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDGEZMK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCY79zswDRZRhMQSeZsN3VQur6irPl1yS6e7171v9dSXwIgDhnVuee9gGxJTGfQ6nZqZjaXB11uySIqEsyjRcpVhNoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMaRqESxIRE85gILuSrcAxEzfpGgYcuOwN6KEyHqoXYGA49XiK%2BHLKw5cls0RQfgxatXJ2ZldwvsrAz3elHmzKJEWgjTKjBj8GJet0jdaz%2BBFEnMvH7OKM5Mc6FNs2X0rSxK4K9shj9BbDHoO%2FVARzpyWESSYWOmXsSt0bG5yy6b9TBBdlaz%2BmFgjp1UXkt2fga4VYIcjwBXE7o06MMsbQU5jJxSX3WFCkT2ItiXt6I8FNMcksJx8t2Dbiv6WweoFKyFWfO%2BHBpwjYhdAv%2BPQ%2Ba%2BB%2F71VolaYkHBCWh%2FzkmT8fESyTJWm9OSh6siGmyfNMLhITWVfTKOaKEjYMXtlyd%2BfN1efH71CmupA8g%2Ba%2BZXqfX%2BprQQ0UwK%2FIEgKH9XYoxy5txVHOYiGlLZIlYx%2FIq3tnk6UmTd%2B7LA08RXLA2%2BzRGIsXCxDtmayDWOg4jOzKpy4Azluw1V0nEE%2B0UHTEaqvKe8JYCSxsueQ%2Fph0OgP3iIWCFLJcWoDsDC3eyTOIE2FuABlfdWbl%2BfApoJDeX7oOuR7P3L%2FvAlbzAIPdRx7aT%2FXAIl%2BnpjB48u5wQeYsdUQhmEwQJHkuDzguJ4hWSFxc94eZZWvSJQFjA2HNnKZfPg94w9S0NhJZENkkce5CZU4tOhKAALcniDfMPi968IGOqUBHTmSnVsnj3x4c%2FvXJ1Niud7MVrf0F42UsiKxgdknja4iGVQu7p4GxqzEL8suaZEqGzC5zh4UZzcXKBzch70oLq4jisnXPqh9aNUsyDywY5hzBg0EVrKCOISQPrcouL1bC2Rhf86Zj0yblmqaOl%2FKlANdZl%2Bch464wDw6lXHv8YAK%2Fj97skSc7Ifd2nZtrYU7GknvqPTYxr0eOG6EaYPvNVfQgrej&X-Amz-Signature=b2a93ffe36124b49089fa6a817d37dd72f9c1816ba0674f2671903c211a3986a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDGEZMK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCY79zswDRZRhMQSeZsN3VQur6irPl1yS6e7171v9dSXwIgDhnVuee9gGxJTGfQ6nZqZjaXB11uySIqEsyjRcpVhNoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMaRqESxIRE85gILuSrcAxEzfpGgYcuOwN6KEyHqoXYGA49XiK%2BHLKw5cls0RQfgxatXJ2ZldwvsrAz3elHmzKJEWgjTKjBj8GJet0jdaz%2BBFEnMvH7OKM5Mc6FNs2X0rSxK4K9shj9BbDHoO%2FVARzpyWESSYWOmXsSt0bG5yy6b9TBBdlaz%2BmFgjp1UXkt2fga4VYIcjwBXE7o06MMsbQU5jJxSX3WFCkT2ItiXt6I8FNMcksJx8t2Dbiv6WweoFKyFWfO%2BHBpwjYhdAv%2BPQ%2Ba%2BB%2F71VolaYkHBCWh%2FzkmT8fESyTJWm9OSh6siGmyfNMLhITWVfTKOaKEjYMXtlyd%2BfN1efH71CmupA8g%2Ba%2BZXqfX%2BprQQ0UwK%2FIEgKH9XYoxy5txVHOYiGlLZIlYx%2FIq3tnk6UmTd%2B7LA08RXLA2%2BzRGIsXCxDtmayDWOg4jOzKpy4Azluw1V0nEE%2B0UHTEaqvKe8JYCSxsueQ%2Fph0OgP3iIWCFLJcWoDsDC3eyTOIE2FuABlfdWbl%2BfApoJDeX7oOuR7P3L%2FvAlbzAIPdRx7aT%2FXAIl%2BnpjB48u5wQeYsdUQhmEwQJHkuDzguJ4hWSFxc94eZZWvSJQFjA2HNnKZfPg94w9S0NhJZENkkce5CZU4tOhKAALcniDfMPi968IGOqUBHTmSnVsnj3x4c%2FvXJ1Niud7MVrf0F42UsiKxgdknja4iGVQu7p4GxqzEL8suaZEqGzC5zh4UZzcXKBzch70oLq4jisnXPqh9aNUsyDywY5hzBg0EVrKCOISQPrcouL1bC2Rhf86Zj0yblmqaOl%2FKlANdZl%2Bch464wDw6lXHv8YAK%2Fj97skSc7Ifd2nZtrYU7GknvqPTYxr0eOG6EaYPvNVfQgrej&X-Amz-Signature=7c3a4042372ace8957442453480238b616a319ab6d79d676db1c69abba4cee89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDGEZMK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCY79zswDRZRhMQSeZsN3VQur6irPl1yS6e7171v9dSXwIgDhnVuee9gGxJTGfQ6nZqZjaXB11uySIqEsyjRcpVhNoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMaRqESxIRE85gILuSrcAxEzfpGgYcuOwN6KEyHqoXYGA49XiK%2BHLKw5cls0RQfgxatXJ2ZldwvsrAz3elHmzKJEWgjTKjBj8GJet0jdaz%2BBFEnMvH7OKM5Mc6FNs2X0rSxK4K9shj9BbDHoO%2FVARzpyWESSYWOmXsSt0bG5yy6b9TBBdlaz%2BmFgjp1UXkt2fga4VYIcjwBXE7o06MMsbQU5jJxSX3WFCkT2ItiXt6I8FNMcksJx8t2Dbiv6WweoFKyFWfO%2BHBpwjYhdAv%2BPQ%2Ba%2BB%2F71VolaYkHBCWh%2FzkmT8fESyTJWm9OSh6siGmyfNMLhITWVfTKOaKEjYMXtlyd%2BfN1efH71CmupA8g%2Ba%2BZXqfX%2BprQQ0UwK%2FIEgKH9XYoxy5txVHOYiGlLZIlYx%2FIq3tnk6UmTd%2B7LA08RXLA2%2BzRGIsXCxDtmayDWOg4jOzKpy4Azluw1V0nEE%2B0UHTEaqvKe8JYCSxsueQ%2Fph0OgP3iIWCFLJcWoDsDC3eyTOIE2FuABlfdWbl%2BfApoJDeX7oOuR7P3L%2FvAlbzAIPdRx7aT%2FXAIl%2BnpjB48u5wQeYsdUQhmEwQJHkuDzguJ4hWSFxc94eZZWvSJQFjA2HNnKZfPg94w9S0NhJZENkkce5CZU4tOhKAALcniDfMPi968IGOqUBHTmSnVsnj3x4c%2FvXJ1Niud7MVrf0F42UsiKxgdknja4iGVQu7p4GxqzEL8suaZEqGzC5zh4UZzcXKBzch70oLq4jisnXPqh9aNUsyDywY5hzBg0EVrKCOISQPrcouL1bC2Rhf86Zj0yblmqaOl%2FKlANdZl%2Bch464wDw6lXHv8YAK%2Fj97skSc7Ifd2nZtrYU7GknvqPTYxr0eOG6EaYPvNVfQgrej&X-Amz-Signature=2f33f5c6b4f678d1a0719e7d2cd7a032e65b49e6a14e9656e12b11f9f982ffeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDGEZMK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCY79zswDRZRhMQSeZsN3VQur6irPl1yS6e7171v9dSXwIgDhnVuee9gGxJTGfQ6nZqZjaXB11uySIqEsyjRcpVhNoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMaRqESxIRE85gILuSrcAxEzfpGgYcuOwN6KEyHqoXYGA49XiK%2BHLKw5cls0RQfgxatXJ2ZldwvsrAz3elHmzKJEWgjTKjBj8GJet0jdaz%2BBFEnMvH7OKM5Mc6FNs2X0rSxK4K9shj9BbDHoO%2FVARzpyWESSYWOmXsSt0bG5yy6b9TBBdlaz%2BmFgjp1UXkt2fga4VYIcjwBXE7o06MMsbQU5jJxSX3WFCkT2ItiXt6I8FNMcksJx8t2Dbiv6WweoFKyFWfO%2BHBpwjYhdAv%2BPQ%2Ba%2BB%2F71VolaYkHBCWh%2FzkmT8fESyTJWm9OSh6siGmyfNMLhITWVfTKOaKEjYMXtlyd%2BfN1efH71CmupA8g%2Ba%2BZXqfX%2BprQQ0UwK%2FIEgKH9XYoxy5txVHOYiGlLZIlYx%2FIq3tnk6UmTd%2B7LA08RXLA2%2BzRGIsXCxDtmayDWOg4jOzKpy4Azluw1V0nEE%2B0UHTEaqvKe8JYCSxsueQ%2Fph0OgP3iIWCFLJcWoDsDC3eyTOIE2FuABlfdWbl%2BfApoJDeX7oOuR7P3L%2FvAlbzAIPdRx7aT%2FXAIl%2BnpjB48u5wQeYsdUQhmEwQJHkuDzguJ4hWSFxc94eZZWvSJQFjA2HNnKZfPg94w9S0NhJZENkkce5CZU4tOhKAALcniDfMPi968IGOqUBHTmSnVsnj3x4c%2FvXJ1Niud7MVrf0F42UsiKxgdknja4iGVQu7p4GxqzEL8suaZEqGzC5zh4UZzcXKBzch70oLq4jisnXPqh9aNUsyDywY5hzBg0EVrKCOISQPrcouL1bC2Rhf86Zj0yblmqaOl%2FKlANdZl%2Bch464wDw6lXHv8YAK%2Fj97skSc7Ifd2nZtrYU7GknvqPTYxr0eOG6EaYPvNVfQgrej&X-Amz-Signature=87175274806293fba4cce4add14c0d84c40df8d9b4cf3930e46cb3b7977498bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDGEZMK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCY79zswDRZRhMQSeZsN3VQur6irPl1yS6e7171v9dSXwIgDhnVuee9gGxJTGfQ6nZqZjaXB11uySIqEsyjRcpVhNoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMaRqESxIRE85gILuSrcAxEzfpGgYcuOwN6KEyHqoXYGA49XiK%2BHLKw5cls0RQfgxatXJ2ZldwvsrAz3elHmzKJEWgjTKjBj8GJet0jdaz%2BBFEnMvH7OKM5Mc6FNs2X0rSxK4K9shj9BbDHoO%2FVARzpyWESSYWOmXsSt0bG5yy6b9TBBdlaz%2BmFgjp1UXkt2fga4VYIcjwBXE7o06MMsbQU5jJxSX3WFCkT2ItiXt6I8FNMcksJx8t2Dbiv6WweoFKyFWfO%2BHBpwjYhdAv%2BPQ%2Ba%2BB%2F71VolaYkHBCWh%2FzkmT8fESyTJWm9OSh6siGmyfNMLhITWVfTKOaKEjYMXtlyd%2BfN1efH71CmupA8g%2Ba%2BZXqfX%2BprQQ0UwK%2FIEgKH9XYoxy5txVHOYiGlLZIlYx%2FIq3tnk6UmTd%2B7LA08RXLA2%2BzRGIsXCxDtmayDWOg4jOzKpy4Azluw1V0nEE%2B0UHTEaqvKe8JYCSxsueQ%2Fph0OgP3iIWCFLJcWoDsDC3eyTOIE2FuABlfdWbl%2BfApoJDeX7oOuR7P3L%2FvAlbzAIPdRx7aT%2FXAIl%2BnpjB48u5wQeYsdUQhmEwQJHkuDzguJ4hWSFxc94eZZWvSJQFjA2HNnKZfPg94w9S0NhJZENkkce5CZU4tOhKAALcniDfMPi968IGOqUBHTmSnVsnj3x4c%2FvXJ1Niud7MVrf0F42UsiKxgdknja4iGVQu7p4GxqzEL8suaZEqGzC5zh4UZzcXKBzch70oLq4jisnXPqh9aNUsyDywY5hzBg0EVrKCOISQPrcouL1bC2Rhf86Zj0yblmqaOl%2FKlANdZl%2Bch464wDw6lXHv8YAK%2Fj97skSc7Ifd2nZtrYU7GknvqPTYxr0eOG6EaYPvNVfQgrej&X-Amz-Signature=e09190ad480ae1f863d69a5069811d4552796574ac747ab78f77f23659f66317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3VBVVR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQConL2d2y6MtDWHrmDuLxC8iKT8MfmAoaXDhvVVAjzZFAIhAP7Gcff2eURQUfgRUf4NTQJceVjFfSjibMFJxrW%2BMehdKv8DCBkQABoMNjM3NDIzMTgzODA1IgzXpS0wIlUS8WMoDl4q3AML9uc4%2B8Pq5pU7Opd0wrALZbkSQ2CdIo0xzrBROjXWEuoqyx65z8StBuaD%2Frg0qnFrFsjriy%2F5By3O1G7x%2FOx%2FrNUAp%2BQpCgosZsPC8%2F8IC2m2QcAKDqMP8RQUjOcELuP%2FD%2BucvGq2avn35ELKO9b5P01X%2B4Eoo72XZydv5pVwNOC%2Fdoc1td3LSjvlUTEJJcF4wKyYJtt4k%2BVIC8RIirBrUyd6TCnkYRlk%2FFiMKErYAG6djcL7eroEQ3mXU%2FEn8bDLceBZa1t3jy99HsGkeP2YXXzztCKQoq%2FG4zH06APV8j0CV%2FrgYTCw9umIlLFXcKPpZnDeLfFC7fxLqzut1J8p3zJIaHfqvh%2FhBVxv%2FaOc1IFridhAg1vQ%2BWU8AhX0FJEBDSeGowPLrUjyPMzC8Z2ARs0Ctfw9dWtbcd0ZLU5A9%2ByeIa6P9cl7MURJ3is9cWVLW%2B%2BC3mvGr1Ze4CDDCuZkOV7gfvcSFtlbVW2Cy1bh%2FSQFnZsRrMGJZHwBBiO3F%2FkcNHo4sLlEUncxeWw8xhvyy%2BCHEZAy9fx7UmZCDikVXJSQrUER0b7a2MTrf%2Bq4jMVxKSXOYMt75rRKCVQstNc6SR21udfH3hnAoquR9H4wsPxqgGvG7wBijUcZ%2FTC1j%2B29BjqkATCxFzCK7k3l%2BJraBr7rvHnmzrluZJZN4ASX5SBA%2BuLozBJ3hTwUAZO4NnI2gcDfImcXkwgc3yULQ0PGNGmR8oBooXiW2RYrBiF2NKoCDWWjLWnrlPq5JkvhMohtbNGGAj7MIBBErTuSpYr6yyUIGucZA0iWLfek2KAK3Eq1b6AjGOxC5Z1E5Q5hDnL%2BwFO04JAADwIBMWN4ggT%2F6uH5HOBy4Qa6&X-Amz-Signature=8fac5a7ab8f2fe7293ff7bfa28452effa006855ce0c63899d11c4e3c64246e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3VBVVR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQConL2d2y6MtDWHrmDuLxC8iKT8MfmAoaXDhvVVAjzZFAIhAP7Gcff2eURQUfgRUf4NTQJceVjFfSjibMFJxrW%2BMehdKv8DCBkQABoMNjM3NDIzMTgzODA1IgzXpS0wIlUS8WMoDl4q3AML9uc4%2B8Pq5pU7Opd0wrALZbkSQ2CdIo0xzrBROjXWEuoqyx65z8StBuaD%2Frg0qnFrFsjriy%2F5By3O1G7x%2FOx%2FrNUAp%2BQpCgosZsPC8%2F8IC2m2QcAKDqMP8RQUjOcELuP%2FD%2BucvGq2avn35ELKO9b5P01X%2B4Eoo72XZydv5pVwNOC%2Fdoc1td3LSjvlUTEJJcF4wKyYJtt4k%2BVIC8RIirBrUyd6TCnkYRlk%2FFiMKErYAG6djcL7eroEQ3mXU%2FEn8bDLceBZa1t3jy99HsGkeP2YXXzztCKQoq%2FG4zH06APV8j0CV%2FrgYTCw9umIlLFXcKPpZnDeLfFC7fxLqzut1J8p3zJIaHfqvh%2FhBVxv%2FaOc1IFridhAg1vQ%2BWU8AhX0FJEBDSeGowPLrUjyPMzC8Z2ARs0Ctfw9dWtbcd0ZLU5A9%2ByeIa6P9cl7MURJ3is9cWVLW%2B%2BC3mvGr1Ze4CDDCuZkOV7gfvcSFtlbVW2Cy1bh%2FSQFnZsRrMGJZHwBBiO3F%2FkcNHo4sLlEUncxeWw8xhvyy%2BCHEZAy9fx7UmZCDikVXJSQrUER0b7a2MTrf%2Bq4jMVxKSXOYMt75rRKCVQstNc6SR21udfH3hnAoquR9H4wsPxqgGvG7wBijUcZ%2FTC1j%2B29BjqkATCxFzCK7k3l%2BJraBr7rvHnmzrluZJZN4ASX5SBA%2BuLozBJ3hTwUAZO4NnI2gcDfImcXkwgc3yULQ0PGNGmR8oBooXiW2RYrBiF2NKoCDWWjLWnrlPq5JkvhMohtbNGGAj7MIBBErTuSpYr6yyUIGucZA0iWLfek2KAK3Eq1b6AjGOxC5Z1E5Q5hDnL%2BwFO04JAADwIBMWN4ggT%2F6uH5HOBy4Qa6&X-Amz-Signature=4f2951c4f902e3c9cd425407d723c4aaf913bf6540febdee55967705041e916c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3VBVVR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQConL2d2y6MtDWHrmDuLxC8iKT8MfmAoaXDhvVVAjzZFAIhAP7Gcff2eURQUfgRUf4NTQJceVjFfSjibMFJxrW%2BMehdKv8DCBkQABoMNjM3NDIzMTgzODA1IgzXpS0wIlUS8WMoDl4q3AML9uc4%2B8Pq5pU7Opd0wrALZbkSQ2CdIo0xzrBROjXWEuoqyx65z8StBuaD%2Frg0qnFrFsjriy%2F5By3O1G7x%2FOx%2FrNUAp%2BQpCgosZsPC8%2F8IC2m2QcAKDqMP8RQUjOcELuP%2FD%2BucvGq2avn35ELKO9b5P01X%2B4Eoo72XZydv5pVwNOC%2Fdoc1td3LSjvlUTEJJcF4wKyYJtt4k%2BVIC8RIirBrUyd6TCnkYRlk%2FFiMKErYAG6djcL7eroEQ3mXU%2FEn8bDLceBZa1t3jy99HsGkeP2YXXzztCKQoq%2FG4zH06APV8j0CV%2FrgYTCw9umIlLFXcKPpZnDeLfFC7fxLqzut1J8p3zJIaHfqvh%2FhBVxv%2FaOc1IFridhAg1vQ%2BWU8AhX0FJEBDSeGowPLrUjyPMzC8Z2ARs0Ctfw9dWtbcd0ZLU5A9%2ByeIa6P9cl7MURJ3is9cWVLW%2B%2BC3mvGr1Ze4CDDCuZkOV7gfvcSFtlbVW2Cy1bh%2FSQFnZsRrMGJZHwBBiO3F%2FkcNHo4sLlEUncxeWw8xhvyy%2BCHEZAy9fx7UmZCDikVXJSQrUER0b7a2MTrf%2Bq4jMVxKSXOYMt75rRKCVQstNc6SR21udfH3hnAoquR9H4wsPxqgGvG7wBijUcZ%2FTC1j%2B29BjqkATCxFzCK7k3l%2BJraBr7rvHnmzrluZJZN4ASX5SBA%2BuLozBJ3hTwUAZO4NnI2gcDfImcXkwgc3yULQ0PGNGmR8oBooXiW2RYrBiF2NKoCDWWjLWnrlPq5JkvhMohtbNGGAj7MIBBErTuSpYr6yyUIGucZA0iWLfek2KAK3Eq1b6AjGOxC5Z1E5Q5hDnL%2BwFO04JAADwIBMWN4ggT%2F6uH5HOBy4Qa6&X-Amz-Signature=5535d3fcb7178ed8ba1ec585b6850cc7f9bfbfd5626444af1e545d38ab950be2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3VBVVR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQConL2d2y6MtDWHrmDuLxC8iKT8MfmAoaXDhvVVAjzZFAIhAP7Gcff2eURQUfgRUf4NTQJceVjFfSjibMFJxrW%2BMehdKv8DCBkQABoMNjM3NDIzMTgzODA1IgzXpS0wIlUS8WMoDl4q3AML9uc4%2B8Pq5pU7Opd0wrALZbkSQ2CdIo0xzrBROjXWEuoqyx65z8StBuaD%2Frg0qnFrFsjriy%2F5By3O1G7x%2FOx%2FrNUAp%2BQpCgosZsPC8%2F8IC2m2QcAKDqMP8RQUjOcELuP%2FD%2BucvGq2avn35ELKO9b5P01X%2B4Eoo72XZydv5pVwNOC%2Fdoc1td3LSjvlUTEJJcF4wKyYJtt4k%2BVIC8RIirBrUyd6TCnkYRlk%2FFiMKErYAG6djcL7eroEQ3mXU%2FEn8bDLceBZa1t3jy99HsGkeP2YXXzztCKQoq%2FG4zH06APV8j0CV%2FrgYTCw9umIlLFXcKPpZnDeLfFC7fxLqzut1J8p3zJIaHfqvh%2FhBVxv%2FaOc1IFridhAg1vQ%2BWU8AhX0FJEBDSeGowPLrUjyPMzC8Z2ARs0Ctfw9dWtbcd0ZLU5A9%2ByeIa6P9cl7MURJ3is9cWVLW%2B%2BC3mvGr1Ze4CDDCuZkOV7gfvcSFtlbVW2Cy1bh%2FSQFnZsRrMGJZHwBBiO3F%2FkcNHo4sLlEUncxeWw8xhvyy%2BCHEZAy9fx7UmZCDikVXJSQrUER0b7a2MTrf%2Bq4jMVxKSXOYMt75rRKCVQstNc6SR21udfH3hnAoquR9H4wsPxqgGvG7wBijUcZ%2FTC1j%2B29BjqkATCxFzCK7k3l%2BJraBr7rvHnmzrluZJZN4ASX5SBA%2BuLozBJ3hTwUAZO4NnI2gcDfImcXkwgc3yULQ0PGNGmR8oBooXiW2RYrBiF2NKoCDWWjLWnrlPq5JkvhMohtbNGGAj7MIBBErTuSpYr6yyUIGucZA0iWLfek2KAK3Eq1b6AjGOxC5Z1E5Q5hDnL%2BwFO04JAADwIBMWN4ggT%2F6uH5HOBy4Qa6&X-Amz-Signature=8324510c42b3183efa640fb708ce5fe731ec57e0c26e7c0dfe3d1760c85b183f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3VBVVR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQConL2d2y6MtDWHrmDuLxC8iKT8MfmAoaXDhvVVAjzZFAIhAP7Gcff2eURQUfgRUf4NTQJceVjFfSjibMFJxrW%2BMehdKv8DCBkQABoMNjM3NDIzMTgzODA1IgzXpS0wIlUS8WMoDl4q3AML9uc4%2B8Pq5pU7Opd0wrALZbkSQ2CdIo0xzrBROjXWEuoqyx65z8StBuaD%2Frg0qnFrFsjriy%2F5By3O1G7x%2FOx%2FrNUAp%2BQpCgosZsPC8%2F8IC2m2QcAKDqMP8RQUjOcELuP%2FD%2BucvGq2avn35ELKO9b5P01X%2B4Eoo72XZydv5pVwNOC%2Fdoc1td3LSjvlUTEJJcF4wKyYJtt4k%2BVIC8RIirBrUyd6TCnkYRlk%2FFiMKErYAG6djcL7eroEQ3mXU%2FEn8bDLceBZa1t3jy99HsGkeP2YXXzztCKQoq%2FG4zH06APV8j0CV%2FrgYTCw9umIlLFXcKPpZnDeLfFC7fxLqzut1J8p3zJIaHfqvh%2FhBVxv%2FaOc1IFridhAg1vQ%2BWU8AhX0FJEBDSeGowPLrUjyPMzC8Z2ARs0Ctfw9dWtbcd0ZLU5A9%2ByeIa6P9cl7MURJ3is9cWVLW%2B%2BC3mvGr1Ze4CDDCuZkOV7gfvcSFtlbVW2Cy1bh%2FSQFnZsRrMGJZHwBBiO3F%2FkcNHo4sLlEUncxeWw8xhvyy%2BCHEZAy9fx7UmZCDikVXJSQrUER0b7a2MTrf%2Bq4jMVxKSXOYMt75rRKCVQstNc6SR21udfH3hnAoquR9H4wsPxqgGvG7wBijUcZ%2FTC1j%2B29BjqkATCxFzCK7k3l%2BJraBr7rvHnmzrluZJZN4ASX5SBA%2BuLozBJ3hTwUAZO4NnI2gcDfImcXkwgc3yULQ0PGNGmR8oBooXiW2RYrBiF2NKoCDWWjLWnrlPq5JkvhMohtbNGGAj7MIBBErTuSpYr6yyUIGucZA0iWLfek2KAK3Eq1b6AjGOxC5Z1E5Q5hDnL%2BwFO04JAADwIBMWN4ggT%2F6uH5HOBy4Qa6&X-Amz-Signature=5afae84c9d24e2d3e08431b25237274b5dfd1ed8eb1e81fcf30a7f7066d3228a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3VBVVR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQConL2d2y6MtDWHrmDuLxC8iKT8MfmAoaXDhvVVAjzZFAIhAP7Gcff2eURQUfgRUf4NTQJceVjFfSjibMFJxrW%2BMehdKv8DCBkQABoMNjM3NDIzMTgzODA1IgzXpS0wIlUS8WMoDl4q3AML9uc4%2B8Pq5pU7Opd0wrALZbkSQ2CdIo0xzrBROjXWEuoqyx65z8StBuaD%2Frg0qnFrFsjriy%2F5By3O1G7x%2FOx%2FrNUAp%2BQpCgosZsPC8%2F8IC2m2QcAKDqMP8RQUjOcELuP%2FD%2BucvGq2avn35ELKO9b5P01X%2B4Eoo72XZydv5pVwNOC%2Fdoc1td3LSjvlUTEJJcF4wKyYJtt4k%2BVIC8RIirBrUyd6TCnkYRlk%2FFiMKErYAG6djcL7eroEQ3mXU%2FEn8bDLceBZa1t3jy99HsGkeP2YXXzztCKQoq%2FG4zH06APV8j0CV%2FrgYTCw9umIlLFXcKPpZnDeLfFC7fxLqzut1J8p3zJIaHfqvh%2FhBVxv%2FaOc1IFridhAg1vQ%2BWU8AhX0FJEBDSeGowPLrUjyPMzC8Z2ARs0Ctfw9dWtbcd0ZLU5A9%2ByeIa6P9cl7MURJ3is9cWVLW%2B%2BC3mvGr1Ze4CDDCuZkOV7gfvcSFtlbVW2Cy1bh%2FSQFnZsRrMGJZHwBBiO3F%2FkcNHo4sLlEUncxeWw8xhvyy%2BCHEZAy9fx7UmZCDikVXJSQrUER0b7a2MTrf%2Bq4jMVxKSXOYMt75rRKCVQstNc6SR21udfH3hnAoquR9H4wsPxqgGvG7wBijUcZ%2FTC1j%2B29BjqkATCxFzCK7k3l%2BJraBr7rvHnmzrluZJZN4ASX5SBA%2BuLozBJ3hTwUAZO4NnI2gcDfImcXkwgc3yULQ0PGNGmR8oBooXiW2RYrBiF2NKoCDWWjLWnrlPq5JkvhMohtbNGGAj7MIBBErTuSpYr6yyUIGucZA0iWLfek2KAK3Eq1b6AjGOxC5Z1E5Q5hDnL%2BwFO04JAADwIBMWN4ggT%2F6uH5HOBy4Qa6&X-Amz-Signature=624c0a26c4e60bc5c62d3ef2274b60e1895ee04791db201e31ed03d550c44620&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3VBVVR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQConL2d2y6MtDWHrmDuLxC8iKT8MfmAoaXDhvVVAjzZFAIhAP7Gcff2eURQUfgRUf4NTQJceVjFfSjibMFJxrW%2BMehdKv8DCBkQABoMNjM3NDIzMTgzODA1IgzXpS0wIlUS8WMoDl4q3AML9uc4%2B8Pq5pU7Opd0wrALZbkSQ2CdIo0xzrBROjXWEuoqyx65z8StBuaD%2Frg0qnFrFsjriy%2F5By3O1G7x%2FOx%2FrNUAp%2BQpCgosZsPC8%2F8IC2m2QcAKDqMP8RQUjOcELuP%2FD%2BucvGq2avn35ELKO9b5P01X%2B4Eoo72XZydv5pVwNOC%2Fdoc1td3LSjvlUTEJJcF4wKyYJtt4k%2BVIC8RIirBrUyd6TCnkYRlk%2FFiMKErYAG6djcL7eroEQ3mXU%2FEn8bDLceBZa1t3jy99HsGkeP2YXXzztCKQoq%2FG4zH06APV8j0CV%2FrgYTCw9umIlLFXcKPpZnDeLfFC7fxLqzut1J8p3zJIaHfqvh%2FhBVxv%2FaOc1IFridhAg1vQ%2BWU8AhX0FJEBDSeGowPLrUjyPMzC8Z2ARs0Ctfw9dWtbcd0ZLU5A9%2ByeIa6P9cl7MURJ3is9cWVLW%2B%2BC3mvGr1Ze4CDDCuZkOV7gfvcSFtlbVW2Cy1bh%2FSQFnZsRrMGJZHwBBiO3F%2FkcNHo4sLlEUncxeWw8xhvyy%2BCHEZAy9fx7UmZCDikVXJSQrUER0b7a2MTrf%2Bq4jMVxKSXOYMt75rRKCVQstNc6SR21udfH3hnAoquR9H4wsPxqgGvG7wBijUcZ%2FTC1j%2B29BjqkATCxFzCK7k3l%2BJraBr7rvHnmzrluZJZN4ASX5SBA%2BuLozBJ3hTwUAZO4NnI2gcDfImcXkwgc3yULQ0PGNGmR8oBooXiW2RYrBiF2NKoCDWWjLWnrlPq5JkvhMohtbNGGAj7MIBBErTuSpYr6yyUIGucZA0iWLfek2KAK3Eq1b6AjGOxC5Z1E5Q5hDnL%2BwFO04JAADwIBMWN4ggT%2F6uH5HOBy4Qa6&X-Amz-Signature=51308195cb07866147102af2ef23ad1991ff1474b8d4ae30325456a9f362b3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3VBVVR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQConL2d2y6MtDWHrmDuLxC8iKT8MfmAoaXDhvVVAjzZFAIhAP7Gcff2eURQUfgRUf4NTQJceVjFfSjibMFJxrW%2BMehdKv8DCBkQABoMNjM3NDIzMTgzODA1IgzXpS0wIlUS8WMoDl4q3AML9uc4%2B8Pq5pU7Opd0wrALZbkSQ2CdIo0xzrBROjXWEuoqyx65z8StBuaD%2Frg0qnFrFsjriy%2F5By3O1G7x%2FOx%2FrNUAp%2BQpCgosZsPC8%2F8IC2m2QcAKDqMP8RQUjOcELuP%2FD%2BucvGq2avn35ELKO9b5P01X%2B4Eoo72XZydv5pVwNOC%2Fdoc1td3LSjvlUTEJJcF4wKyYJtt4k%2BVIC8RIirBrUyd6TCnkYRlk%2FFiMKErYAG6djcL7eroEQ3mXU%2FEn8bDLceBZa1t3jy99HsGkeP2YXXzztCKQoq%2FG4zH06APV8j0CV%2FrgYTCw9umIlLFXcKPpZnDeLfFC7fxLqzut1J8p3zJIaHfqvh%2FhBVxv%2FaOc1IFridhAg1vQ%2BWU8AhX0FJEBDSeGowPLrUjyPMzC8Z2ARs0Ctfw9dWtbcd0ZLU5A9%2ByeIa6P9cl7MURJ3is9cWVLW%2B%2BC3mvGr1Ze4CDDCuZkOV7gfvcSFtlbVW2Cy1bh%2FSQFnZsRrMGJZHwBBiO3F%2FkcNHo4sLlEUncxeWw8xhvyy%2BCHEZAy9fx7UmZCDikVXJSQrUER0b7a2MTrf%2Bq4jMVxKSXOYMt75rRKCVQstNc6SR21udfH3hnAoquR9H4wsPxqgGvG7wBijUcZ%2FTC1j%2B29BjqkATCxFzCK7k3l%2BJraBr7rvHnmzrluZJZN4ASX5SBA%2BuLozBJ3hTwUAZO4NnI2gcDfImcXkwgc3yULQ0PGNGmR8oBooXiW2RYrBiF2NKoCDWWjLWnrlPq5JkvhMohtbNGGAj7MIBBErTuSpYr6yyUIGucZA0iWLfek2KAK3Eq1b6AjGOxC5Z1E5Q5hDnL%2BwFO04JAADwIBMWN4ggT%2F6uH5HOBy4Qa6&X-Amz-Signature=14f8947cdd283a759cb605288dfe9666981c3893ccdfeae2b8a8bd7a25774ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

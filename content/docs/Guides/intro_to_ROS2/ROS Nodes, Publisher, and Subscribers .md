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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNM2W2E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3QcW6eZAWhsTpGtgLrQLEMB53mWQWSXU%2F%2F9Ep90XEAiAZxBlFQKlsiO4keBsAuXsB5ZsK4HMX7H4Q1Vg3hEXsDCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMA9zfxF59j1uei8b5KtwDgKghW904Q7jQYHNZ8edDtxZLTFUNzTEZd8RXg07kDJ4%2BMyy1%2F8T5KiHMUBUdM%2BXT4O92tGkIZm80QdjUHbI7CIQ60SKvcJ78Nw5ZDPTW0DIpv5m8wksPkVpRRHWXcC6QKlPj9tSzzA82m5%2BxG9dgqPieO9iZ1ROg4nCj8a5sSmbkQflr6FZ%2FcvNCOrKi4phzhtS4upTMZ55MKEPbEa0i7FQvAfVafUXZpSWD1%2BB%2BQH9Cr4zO7v41aSoWNlmyn%2B8xiApJncDmHAMbWjFlA28wpPvWj8G8b1%2BKXwRqNcrXNMCbsRVqBqaFvgU1vSDrMnUQgBCDXGTUgnun%2Fc5YKofXOoo28bkyVEQ2oCAgckiWoOaTtqbC2h9gVoPZ8QCHyXqDNweIvzuM1DW1hUAQMrJAa0vjktHpaBzJUjmUNPIjQsMtJdY9Fl3lD4mUT9wcfgfRn53e0kbmn6wKJrEi8jt%2BkhC%2FSv1ssKhuBd7L0rCqYIL9%2B%2BbTTJvqzDtBGjs02h%2B6HQoULyZnbH2v%2BMWb1wy0QJPPRZBJqVzy5JnUlwd7aD%2B58gBwgAZwODBDiyvs5RZ3h401D%2F7F9BLimfdn5Ins9kO5GiAxvywy9MxY%2FiBv0Ap10Aef8ovA8Sr9N8Ywi9uPvwY6pgGt1MDFqoMLbrI4cx49f2ycAGIFgUkqjEZzhdqUO%2Bd8tcyzsnYqrR78HpqccTQfCeI8LRZb04HMCtsocFDZM2z%2BZZEDJ5eU3L5PyHkoNHAHAYxmUr7UVBLwZt45ls6rnpgiYMJWJQP1Pd6pR3vu6PLj%2FI%2Fpk45yqgPY8XlutL5fK9AcuZVjSfwWXfBGbrXNQ5cMbQELz4E%2BOW%2FlQb1LAxWBenm3urGj&X-Amz-Signature=fe344d47e31d15af6fb20b5c10a08d5572c1ace36ef7250fd8133145622b85ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNM2W2E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3QcW6eZAWhsTpGtgLrQLEMB53mWQWSXU%2F%2F9Ep90XEAiAZxBlFQKlsiO4keBsAuXsB5ZsK4HMX7H4Q1Vg3hEXsDCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMA9zfxF59j1uei8b5KtwDgKghW904Q7jQYHNZ8edDtxZLTFUNzTEZd8RXg07kDJ4%2BMyy1%2F8T5KiHMUBUdM%2BXT4O92tGkIZm80QdjUHbI7CIQ60SKvcJ78Nw5ZDPTW0DIpv5m8wksPkVpRRHWXcC6QKlPj9tSzzA82m5%2BxG9dgqPieO9iZ1ROg4nCj8a5sSmbkQflr6FZ%2FcvNCOrKi4phzhtS4upTMZ55MKEPbEa0i7FQvAfVafUXZpSWD1%2BB%2BQH9Cr4zO7v41aSoWNlmyn%2B8xiApJncDmHAMbWjFlA28wpPvWj8G8b1%2BKXwRqNcrXNMCbsRVqBqaFvgU1vSDrMnUQgBCDXGTUgnun%2Fc5YKofXOoo28bkyVEQ2oCAgckiWoOaTtqbC2h9gVoPZ8QCHyXqDNweIvzuM1DW1hUAQMrJAa0vjktHpaBzJUjmUNPIjQsMtJdY9Fl3lD4mUT9wcfgfRn53e0kbmn6wKJrEi8jt%2BkhC%2FSv1ssKhuBd7L0rCqYIL9%2B%2BbTTJvqzDtBGjs02h%2B6HQoULyZnbH2v%2BMWb1wy0QJPPRZBJqVzy5JnUlwd7aD%2B58gBwgAZwODBDiyvs5RZ3h401D%2F7F9BLimfdn5Ins9kO5GiAxvywy9MxY%2FiBv0Ap10Aef8ovA8Sr9N8Ywi9uPvwY6pgGt1MDFqoMLbrI4cx49f2ycAGIFgUkqjEZzhdqUO%2Bd8tcyzsnYqrR78HpqccTQfCeI8LRZb04HMCtsocFDZM2z%2BZZEDJ5eU3L5PyHkoNHAHAYxmUr7UVBLwZt45ls6rnpgiYMJWJQP1Pd6pR3vu6PLj%2FI%2Fpk45yqgPY8XlutL5fK9AcuZVjSfwWXfBGbrXNQ5cMbQELz4E%2BOW%2FlQb1LAxWBenm3urGj&X-Amz-Signature=c8771a6e71639d0cf2e0e24ae5918750ed875ee4be97b2648474ac50c6b09e53&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNM2W2E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3QcW6eZAWhsTpGtgLrQLEMB53mWQWSXU%2F%2F9Ep90XEAiAZxBlFQKlsiO4keBsAuXsB5ZsK4HMX7H4Q1Vg3hEXsDCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMA9zfxF59j1uei8b5KtwDgKghW904Q7jQYHNZ8edDtxZLTFUNzTEZd8RXg07kDJ4%2BMyy1%2F8T5KiHMUBUdM%2BXT4O92tGkIZm80QdjUHbI7CIQ60SKvcJ78Nw5ZDPTW0DIpv5m8wksPkVpRRHWXcC6QKlPj9tSzzA82m5%2BxG9dgqPieO9iZ1ROg4nCj8a5sSmbkQflr6FZ%2FcvNCOrKi4phzhtS4upTMZ55MKEPbEa0i7FQvAfVafUXZpSWD1%2BB%2BQH9Cr4zO7v41aSoWNlmyn%2B8xiApJncDmHAMbWjFlA28wpPvWj8G8b1%2BKXwRqNcrXNMCbsRVqBqaFvgU1vSDrMnUQgBCDXGTUgnun%2Fc5YKofXOoo28bkyVEQ2oCAgckiWoOaTtqbC2h9gVoPZ8QCHyXqDNweIvzuM1DW1hUAQMrJAa0vjktHpaBzJUjmUNPIjQsMtJdY9Fl3lD4mUT9wcfgfRn53e0kbmn6wKJrEi8jt%2BkhC%2FSv1ssKhuBd7L0rCqYIL9%2B%2BbTTJvqzDtBGjs02h%2B6HQoULyZnbH2v%2BMWb1wy0QJPPRZBJqVzy5JnUlwd7aD%2B58gBwgAZwODBDiyvs5RZ3h401D%2F7F9BLimfdn5Ins9kO5GiAxvywy9MxY%2FiBv0Ap10Aef8ovA8Sr9N8Ywi9uPvwY6pgGt1MDFqoMLbrI4cx49f2ycAGIFgUkqjEZzhdqUO%2Bd8tcyzsnYqrR78HpqccTQfCeI8LRZb04HMCtsocFDZM2z%2BZZEDJ5eU3L5PyHkoNHAHAYxmUr7UVBLwZt45ls6rnpgiYMJWJQP1Pd6pR3vu6PLj%2FI%2Fpk45yqgPY8XlutL5fK9AcuZVjSfwWXfBGbrXNQ5cMbQELz4E%2BOW%2FlQb1LAxWBenm3urGj&X-Amz-Signature=62c26022a9b93904b0b3e57544de3046c0c74dfafed0e1548a21722c787e2427&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNM2W2E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3QcW6eZAWhsTpGtgLrQLEMB53mWQWSXU%2F%2F9Ep90XEAiAZxBlFQKlsiO4keBsAuXsB5ZsK4HMX7H4Q1Vg3hEXsDCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMA9zfxF59j1uei8b5KtwDgKghW904Q7jQYHNZ8edDtxZLTFUNzTEZd8RXg07kDJ4%2BMyy1%2F8T5KiHMUBUdM%2BXT4O92tGkIZm80QdjUHbI7CIQ60SKvcJ78Nw5ZDPTW0DIpv5m8wksPkVpRRHWXcC6QKlPj9tSzzA82m5%2BxG9dgqPieO9iZ1ROg4nCj8a5sSmbkQflr6FZ%2FcvNCOrKi4phzhtS4upTMZ55MKEPbEa0i7FQvAfVafUXZpSWD1%2BB%2BQH9Cr4zO7v41aSoWNlmyn%2B8xiApJncDmHAMbWjFlA28wpPvWj8G8b1%2BKXwRqNcrXNMCbsRVqBqaFvgU1vSDrMnUQgBCDXGTUgnun%2Fc5YKofXOoo28bkyVEQ2oCAgckiWoOaTtqbC2h9gVoPZ8QCHyXqDNweIvzuM1DW1hUAQMrJAa0vjktHpaBzJUjmUNPIjQsMtJdY9Fl3lD4mUT9wcfgfRn53e0kbmn6wKJrEi8jt%2BkhC%2FSv1ssKhuBd7L0rCqYIL9%2B%2BbTTJvqzDtBGjs02h%2B6HQoULyZnbH2v%2BMWb1wy0QJPPRZBJqVzy5JnUlwd7aD%2B58gBwgAZwODBDiyvs5RZ3h401D%2F7F9BLimfdn5Ins9kO5GiAxvywy9MxY%2FiBv0Ap10Aef8ovA8Sr9N8Ywi9uPvwY6pgGt1MDFqoMLbrI4cx49f2ycAGIFgUkqjEZzhdqUO%2Bd8tcyzsnYqrR78HpqccTQfCeI8LRZb04HMCtsocFDZM2z%2BZZEDJ5eU3L5PyHkoNHAHAYxmUr7UVBLwZt45ls6rnpgiYMJWJQP1Pd6pR3vu6PLj%2FI%2Fpk45yqgPY8XlutL5fK9AcuZVjSfwWXfBGbrXNQ5cMbQELz4E%2BOW%2FlQb1LAxWBenm3urGj&X-Amz-Signature=a9041de37e39b896171b569f2c4f0e119c0888bef3701922febe7b0d799ddf72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNM2W2E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3QcW6eZAWhsTpGtgLrQLEMB53mWQWSXU%2F%2F9Ep90XEAiAZxBlFQKlsiO4keBsAuXsB5ZsK4HMX7H4Q1Vg3hEXsDCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMA9zfxF59j1uei8b5KtwDgKghW904Q7jQYHNZ8edDtxZLTFUNzTEZd8RXg07kDJ4%2BMyy1%2F8T5KiHMUBUdM%2BXT4O92tGkIZm80QdjUHbI7CIQ60SKvcJ78Nw5ZDPTW0DIpv5m8wksPkVpRRHWXcC6QKlPj9tSzzA82m5%2BxG9dgqPieO9iZ1ROg4nCj8a5sSmbkQflr6FZ%2FcvNCOrKi4phzhtS4upTMZ55MKEPbEa0i7FQvAfVafUXZpSWD1%2BB%2BQH9Cr4zO7v41aSoWNlmyn%2B8xiApJncDmHAMbWjFlA28wpPvWj8G8b1%2BKXwRqNcrXNMCbsRVqBqaFvgU1vSDrMnUQgBCDXGTUgnun%2Fc5YKofXOoo28bkyVEQ2oCAgckiWoOaTtqbC2h9gVoPZ8QCHyXqDNweIvzuM1DW1hUAQMrJAa0vjktHpaBzJUjmUNPIjQsMtJdY9Fl3lD4mUT9wcfgfRn53e0kbmn6wKJrEi8jt%2BkhC%2FSv1ssKhuBd7L0rCqYIL9%2B%2BbTTJvqzDtBGjs02h%2B6HQoULyZnbH2v%2BMWb1wy0QJPPRZBJqVzy5JnUlwd7aD%2B58gBwgAZwODBDiyvs5RZ3h401D%2F7F9BLimfdn5Ins9kO5GiAxvywy9MxY%2FiBv0Ap10Aef8ovA8Sr9N8Ywi9uPvwY6pgGt1MDFqoMLbrI4cx49f2ycAGIFgUkqjEZzhdqUO%2Bd8tcyzsnYqrR78HpqccTQfCeI8LRZb04HMCtsocFDZM2z%2BZZEDJ5eU3L5PyHkoNHAHAYxmUr7UVBLwZt45ls6rnpgiYMJWJQP1Pd6pR3vu6PLj%2FI%2Fpk45yqgPY8XlutL5fK9AcuZVjSfwWXfBGbrXNQ5cMbQELz4E%2BOW%2FlQb1LAxWBenm3urGj&X-Amz-Signature=f37053045e1635a2f6242610f7a79128d7dae970bc087182d84cec5bb37c72e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNM2W2E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3QcW6eZAWhsTpGtgLrQLEMB53mWQWSXU%2F%2F9Ep90XEAiAZxBlFQKlsiO4keBsAuXsB5ZsK4HMX7H4Q1Vg3hEXsDCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMA9zfxF59j1uei8b5KtwDgKghW904Q7jQYHNZ8edDtxZLTFUNzTEZd8RXg07kDJ4%2BMyy1%2F8T5KiHMUBUdM%2BXT4O92tGkIZm80QdjUHbI7CIQ60SKvcJ78Nw5ZDPTW0DIpv5m8wksPkVpRRHWXcC6QKlPj9tSzzA82m5%2BxG9dgqPieO9iZ1ROg4nCj8a5sSmbkQflr6FZ%2FcvNCOrKi4phzhtS4upTMZ55MKEPbEa0i7FQvAfVafUXZpSWD1%2BB%2BQH9Cr4zO7v41aSoWNlmyn%2B8xiApJncDmHAMbWjFlA28wpPvWj8G8b1%2BKXwRqNcrXNMCbsRVqBqaFvgU1vSDrMnUQgBCDXGTUgnun%2Fc5YKofXOoo28bkyVEQ2oCAgckiWoOaTtqbC2h9gVoPZ8QCHyXqDNweIvzuM1DW1hUAQMrJAa0vjktHpaBzJUjmUNPIjQsMtJdY9Fl3lD4mUT9wcfgfRn53e0kbmn6wKJrEi8jt%2BkhC%2FSv1ssKhuBd7L0rCqYIL9%2B%2BbTTJvqzDtBGjs02h%2B6HQoULyZnbH2v%2BMWb1wy0QJPPRZBJqVzy5JnUlwd7aD%2B58gBwgAZwODBDiyvs5RZ3h401D%2F7F9BLimfdn5Ins9kO5GiAxvywy9MxY%2FiBv0Ap10Aef8ovA8Sr9N8Ywi9uPvwY6pgGt1MDFqoMLbrI4cx49f2ycAGIFgUkqjEZzhdqUO%2Bd8tcyzsnYqrR78HpqccTQfCeI8LRZb04HMCtsocFDZM2z%2BZZEDJ5eU3L5PyHkoNHAHAYxmUr7UVBLwZt45ls6rnpgiYMJWJQP1Pd6pR3vu6PLj%2FI%2Fpk45yqgPY8XlutL5fK9AcuZVjSfwWXfBGbrXNQ5cMbQELz4E%2BOW%2FlQb1LAxWBenm3urGj&X-Amz-Signature=12d2d22f2d58917fa2622bb28dc4e127235a7e8b670e5b5d5f6ae80577199978&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNM2W2E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3QcW6eZAWhsTpGtgLrQLEMB53mWQWSXU%2F%2F9Ep90XEAiAZxBlFQKlsiO4keBsAuXsB5ZsK4HMX7H4Q1Vg3hEXsDCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMA9zfxF59j1uei8b5KtwDgKghW904Q7jQYHNZ8edDtxZLTFUNzTEZd8RXg07kDJ4%2BMyy1%2F8T5KiHMUBUdM%2BXT4O92tGkIZm80QdjUHbI7CIQ60SKvcJ78Nw5ZDPTW0DIpv5m8wksPkVpRRHWXcC6QKlPj9tSzzA82m5%2BxG9dgqPieO9iZ1ROg4nCj8a5sSmbkQflr6FZ%2FcvNCOrKi4phzhtS4upTMZ55MKEPbEa0i7FQvAfVafUXZpSWD1%2BB%2BQH9Cr4zO7v41aSoWNlmyn%2B8xiApJncDmHAMbWjFlA28wpPvWj8G8b1%2BKXwRqNcrXNMCbsRVqBqaFvgU1vSDrMnUQgBCDXGTUgnun%2Fc5YKofXOoo28bkyVEQ2oCAgckiWoOaTtqbC2h9gVoPZ8QCHyXqDNweIvzuM1DW1hUAQMrJAa0vjktHpaBzJUjmUNPIjQsMtJdY9Fl3lD4mUT9wcfgfRn53e0kbmn6wKJrEi8jt%2BkhC%2FSv1ssKhuBd7L0rCqYIL9%2B%2BbTTJvqzDtBGjs02h%2B6HQoULyZnbH2v%2BMWb1wy0QJPPRZBJqVzy5JnUlwd7aD%2B58gBwgAZwODBDiyvs5RZ3h401D%2F7F9BLimfdn5Ins9kO5GiAxvywy9MxY%2FiBv0Ap10Aef8ovA8Sr9N8Ywi9uPvwY6pgGt1MDFqoMLbrI4cx49f2ycAGIFgUkqjEZzhdqUO%2Bd8tcyzsnYqrR78HpqccTQfCeI8LRZb04HMCtsocFDZM2z%2BZZEDJ5eU3L5PyHkoNHAHAYxmUr7UVBLwZt45ls6rnpgiYMJWJQP1Pd6pR3vu6PLj%2FI%2Fpk45yqgPY8XlutL5fK9AcuZVjSfwWXfBGbrXNQ5cMbQELz4E%2BOW%2FlQb1LAxWBenm3urGj&X-Amz-Signature=f18d3039e71216e1673b4e30b8274403c941b44dc056feee8e478c2552f0a017&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNM2W2E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD3QcW6eZAWhsTpGtgLrQLEMB53mWQWSXU%2F%2F9Ep90XEAiAZxBlFQKlsiO4keBsAuXsB5ZsK4HMX7H4Q1Vg3hEXsDCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMA9zfxF59j1uei8b5KtwDgKghW904Q7jQYHNZ8edDtxZLTFUNzTEZd8RXg07kDJ4%2BMyy1%2F8T5KiHMUBUdM%2BXT4O92tGkIZm80QdjUHbI7CIQ60SKvcJ78Nw5ZDPTW0DIpv5m8wksPkVpRRHWXcC6QKlPj9tSzzA82m5%2BxG9dgqPieO9iZ1ROg4nCj8a5sSmbkQflr6FZ%2FcvNCOrKi4phzhtS4upTMZ55MKEPbEa0i7FQvAfVafUXZpSWD1%2BB%2BQH9Cr4zO7v41aSoWNlmyn%2B8xiApJncDmHAMbWjFlA28wpPvWj8G8b1%2BKXwRqNcrXNMCbsRVqBqaFvgU1vSDrMnUQgBCDXGTUgnun%2Fc5YKofXOoo28bkyVEQ2oCAgckiWoOaTtqbC2h9gVoPZ8QCHyXqDNweIvzuM1DW1hUAQMrJAa0vjktHpaBzJUjmUNPIjQsMtJdY9Fl3lD4mUT9wcfgfRn53e0kbmn6wKJrEi8jt%2BkhC%2FSv1ssKhuBd7L0rCqYIL9%2B%2BbTTJvqzDtBGjs02h%2B6HQoULyZnbH2v%2BMWb1wy0QJPPRZBJqVzy5JnUlwd7aD%2B58gBwgAZwODBDiyvs5RZ3h401D%2F7F9BLimfdn5Ins9kO5GiAxvywy9MxY%2FiBv0Ap10Aef8ovA8Sr9N8Ywi9uPvwY6pgGt1MDFqoMLbrI4cx49f2ycAGIFgUkqjEZzhdqUO%2Bd8tcyzsnYqrR78HpqccTQfCeI8LRZb04HMCtsocFDZM2z%2BZZEDJ5eU3L5PyHkoNHAHAYxmUr7UVBLwZt45ls6rnpgiYMJWJQP1Pd6pR3vu6PLj%2FI%2Fpk45yqgPY8XlutL5fK9AcuZVjSfwWXfBGbrXNQ5cMbQELz4E%2BOW%2FlQb1LAxWBenm3urGj&X-Amz-Signature=4b58f1c309088e916d8f93467e9454b3c8cf6e03b31d5c3a9d080ea9f92ae010&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

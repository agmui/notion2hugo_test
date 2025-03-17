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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NTJZQU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5cQCDd7jyNCvOCEGX9nGexn7zHKPlNPMXiwZrPLGu9AiAh%2FZcqoggI%2FUz8MQyZ470%2B%2FfCnu3WLUpfhQQrkZDXJFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjWVpZqPa0fueulGNKtwDkSKK8pVJS6DL5c%2F0fBxm0iGNDHgtMFYc9YQLTAWUEuUzt2qI%2F9RR627hLftbh4isK24no9TMAtyKo5nA3zaqe7YU0TUFN94aid3UHKWryhVWAJtzWrIcPRlWu5Er0bBmj7sXpE9AQhCZX7lPTzK4SaLey%2BaLajRgBj0Kovf%2Fyw7xEYwwkoGcaswQUu1WyrJF8vML1QoScs7eNbZKpRaUErFw2BKSzeMmD8mc8rNc2jqnqbXIwUHpBSqWeXBX61zXqqlvislw2Q2tWQJXwVu1gdE0PEXOz2TJvFdkp71v%2BptpJ9x7%2FkPYs31CkXEUpFWXVZmqwXHvF5CNcaXlfWrteR8u7MN6LGYcXGNyyJEMEu76pFCihh8Wa7KVBrwKgj%2FEKedn6kyNXMw1%2FLV6aCvtOx4tZhWQw7BZjUkzjFwen2X21SfoKU5AwuasBUwlRw0DIkIL%2FR83CTDqFL9PT0cUdsZotc%2BIlVkqUqZ%2FNXlck%2BYg4SPMQHYt3TIxQqxEOOp5Ykb6s1vzS%2BAHo%2BIAiNqYiSZhv1bQrUaaOgaMCVZnm%2BV6SoE%2Fm00U8N0GyUmdpbBtrHVHIOC873ilvUEpGWIjcRoABmnpBqsZwN%2BYaP1nsrIQH3NtiYFt8yRHVYIw9rzevgY6pgFCZbKwVCDFwtH%2F2L%2ByzZjKE3%2FNtRk%2FQn3HmWymXYsx7EepKXVI4MBlQzaUDV6T9imj4CDSKYP68XZI%2BPvGfzwhKrpUNRGyLrb90Gj%2BIOackHyDIngbPYARK%2FaMvqeRhsPNLnx2oqUV4l1lgUfaSCp2Vtt6uzuxt86S4ec2aVhuApBu6dAKU8bFOjo17NycOCAZtSB%2Bgrfv8XV7cuMt4T96nreBMwM3&X-Amz-Signature=ec908e1fb25b4b0379e04ced9cc17abbff8270e84705574131ac2e78ec6939c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NTJZQU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5cQCDd7jyNCvOCEGX9nGexn7zHKPlNPMXiwZrPLGu9AiAh%2FZcqoggI%2FUz8MQyZ470%2B%2FfCnu3WLUpfhQQrkZDXJFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjWVpZqPa0fueulGNKtwDkSKK8pVJS6DL5c%2F0fBxm0iGNDHgtMFYc9YQLTAWUEuUzt2qI%2F9RR627hLftbh4isK24no9TMAtyKo5nA3zaqe7YU0TUFN94aid3UHKWryhVWAJtzWrIcPRlWu5Er0bBmj7sXpE9AQhCZX7lPTzK4SaLey%2BaLajRgBj0Kovf%2Fyw7xEYwwkoGcaswQUu1WyrJF8vML1QoScs7eNbZKpRaUErFw2BKSzeMmD8mc8rNc2jqnqbXIwUHpBSqWeXBX61zXqqlvislw2Q2tWQJXwVu1gdE0PEXOz2TJvFdkp71v%2BptpJ9x7%2FkPYs31CkXEUpFWXVZmqwXHvF5CNcaXlfWrteR8u7MN6LGYcXGNyyJEMEu76pFCihh8Wa7KVBrwKgj%2FEKedn6kyNXMw1%2FLV6aCvtOx4tZhWQw7BZjUkzjFwen2X21SfoKU5AwuasBUwlRw0DIkIL%2FR83CTDqFL9PT0cUdsZotc%2BIlVkqUqZ%2FNXlck%2BYg4SPMQHYt3TIxQqxEOOp5Ykb6s1vzS%2BAHo%2BIAiNqYiSZhv1bQrUaaOgaMCVZnm%2BV6SoE%2Fm00U8N0GyUmdpbBtrHVHIOC873ilvUEpGWIjcRoABmnpBqsZwN%2BYaP1nsrIQH3NtiYFt8yRHVYIw9rzevgY6pgFCZbKwVCDFwtH%2F2L%2ByzZjKE3%2FNtRk%2FQn3HmWymXYsx7EepKXVI4MBlQzaUDV6T9imj4CDSKYP68XZI%2BPvGfzwhKrpUNRGyLrb90Gj%2BIOackHyDIngbPYARK%2FaMvqeRhsPNLnx2oqUV4l1lgUfaSCp2Vtt6uzuxt86S4ec2aVhuApBu6dAKU8bFOjo17NycOCAZtSB%2Bgrfv8XV7cuMt4T96nreBMwM3&X-Amz-Signature=4f848c2621ce3e46656fe7938a6b6e272e84e00a2734f89bad28591521089343&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NTJZQU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5cQCDd7jyNCvOCEGX9nGexn7zHKPlNPMXiwZrPLGu9AiAh%2FZcqoggI%2FUz8MQyZ470%2B%2FfCnu3WLUpfhQQrkZDXJFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjWVpZqPa0fueulGNKtwDkSKK8pVJS6DL5c%2F0fBxm0iGNDHgtMFYc9YQLTAWUEuUzt2qI%2F9RR627hLftbh4isK24no9TMAtyKo5nA3zaqe7YU0TUFN94aid3UHKWryhVWAJtzWrIcPRlWu5Er0bBmj7sXpE9AQhCZX7lPTzK4SaLey%2BaLajRgBj0Kovf%2Fyw7xEYwwkoGcaswQUu1WyrJF8vML1QoScs7eNbZKpRaUErFw2BKSzeMmD8mc8rNc2jqnqbXIwUHpBSqWeXBX61zXqqlvislw2Q2tWQJXwVu1gdE0PEXOz2TJvFdkp71v%2BptpJ9x7%2FkPYs31CkXEUpFWXVZmqwXHvF5CNcaXlfWrteR8u7MN6LGYcXGNyyJEMEu76pFCihh8Wa7KVBrwKgj%2FEKedn6kyNXMw1%2FLV6aCvtOx4tZhWQw7BZjUkzjFwen2X21SfoKU5AwuasBUwlRw0DIkIL%2FR83CTDqFL9PT0cUdsZotc%2BIlVkqUqZ%2FNXlck%2BYg4SPMQHYt3TIxQqxEOOp5Ykb6s1vzS%2BAHo%2BIAiNqYiSZhv1bQrUaaOgaMCVZnm%2BV6SoE%2Fm00U8N0GyUmdpbBtrHVHIOC873ilvUEpGWIjcRoABmnpBqsZwN%2BYaP1nsrIQH3NtiYFt8yRHVYIw9rzevgY6pgFCZbKwVCDFwtH%2F2L%2ByzZjKE3%2FNtRk%2FQn3HmWymXYsx7EepKXVI4MBlQzaUDV6T9imj4CDSKYP68XZI%2BPvGfzwhKrpUNRGyLrb90Gj%2BIOackHyDIngbPYARK%2FaMvqeRhsPNLnx2oqUV4l1lgUfaSCp2Vtt6uzuxt86S4ec2aVhuApBu6dAKU8bFOjo17NycOCAZtSB%2Bgrfv8XV7cuMt4T96nreBMwM3&X-Amz-Signature=0251eac7b7732f73742d2796f827a9a414566f98ff1a9326e4fd544dccb64cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NTJZQU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5cQCDd7jyNCvOCEGX9nGexn7zHKPlNPMXiwZrPLGu9AiAh%2FZcqoggI%2FUz8MQyZ470%2B%2FfCnu3WLUpfhQQrkZDXJFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjWVpZqPa0fueulGNKtwDkSKK8pVJS6DL5c%2F0fBxm0iGNDHgtMFYc9YQLTAWUEuUzt2qI%2F9RR627hLftbh4isK24no9TMAtyKo5nA3zaqe7YU0TUFN94aid3UHKWryhVWAJtzWrIcPRlWu5Er0bBmj7sXpE9AQhCZX7lPTzK4SaLey%2BaLajRgBj0Kovf%2Fyw7xEYwwkoGcaswQUu1WyrJF8vML1QoScs7eNbZKpRaUErFw2BKSzeMmD8mc8rNc2jqnqbXIwUHpBSqWeXBX61zXqqlvislw2Q2tWQJXwVu1gdE0PEXOz2TJvFdkp71v%2BptpJ9x7%2FkPYs31CkXEUpFWXVZmqwXHvF5CNcaXlfWrteR8u7MN6LGYcXGNyyJEMEu76pFCihh8Wa7KVBrwKgj%2FEKedn6kyNXMw1%2FLV6aCvtOx4tZhWQw7BZjUkzjFwen2X21SfoKU5AwuasBUwlRw0DIkIL%2FR83CTDqFL9PT0cUdsZotc%2BIlVkqUqZ%2FNXlck%2BYg4SPMQHYt3TIxQqxEOOp5Ykb6s1vzS%2BAHo%2BIAiNqYiSZhv1bQrUaaOgaMCVZnm%2BV6SoE%2Fm00U8N0GyUmdpbBtrHVHIOC873ilvUEpGWIjcRoABmnpBqsZwN%2BYaP1nsrIQH3NtiYFt8yRHVYIw9rzevgY6pgFCZbKwVCDFwtH%2F2L%2ByzZjKE3%2FNtRk%2FQn3HmWymXYsx7EepKXVI4MBlQzaUDV6T9imj4CDSKYP68XZI%2BPvGfzwhKrpUNRGyLrb90Gj%2BIOackHyDIngbPYARK%2FaMvqeRhsPNLnx2oqUV4l1lgUfaSCp2Vtt6uzuxt86S4ec2aVhuApBu6dAKU8bFOjo17NycOCAZtSB%2Bgrfv8XV7cuMt4T96nreBMwM3&X-Amz-Signature=70847122d8a035d45f0613489cfa87b55bdd37f4ece53805f975b19579e4941c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NTJZQU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5cQCDd7jyNCvOCEGX9nGexn7zHKPlNPMXiwZrPLGu9AiAh%2FZcqoggI%2FUz8MQyZ470%2B%2FfCnu3WLUpfhQQrkZDXJFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjWVpZqPa0fueulGNKtwDkSKK8pVJS6DL5c%2F0fBxm0iGNDHgtMFYc9YQLTAWUEuUzt2qI%2F9RR627hLftbh4isK24no9TMAtyKo5nA3zaqe7YU0TUFN94aid3UHKWryhVWAJtzWrIcPRlWu5Er0bBmj7sXpE9AQhCZX7lPTzK4SaLey%2BaLajRgBj0Kovf%2Fyw7xEYwwkoGcaswQUu1WyrJF8vML1QoScs7eNbZKpRaUErFw2BKSzeMmD8mc8rNc2jqnqbXIwUHpBSqWeXBX61zXqqlvislw2Q2tWQJXwVu1gdE0PEXOz2TJvFdkp71v%2BptpJ9x7%2FkPYs31CkXEUpFWXVZmqwXHvF5CNcaXlfWrteR8u7MN6LGYcXGNyyJEMEu76pFCihh8Wa7KVBrwKgj%2FEKedn6kyNXMw1%2FLV6aCvtOx4tZhWQw7BZjUkzjFwen2X21SfoKU5AwuasBUwlRw0DIkIL%2FR83CTDqFL9PT0cUdsZotc%2BIlVkqUqZ%2FNXlck%2BYg4SPMQHYt3TIxQqxEOOp5Ykb6s1vzS%2BAHo%2BIAiNqYiSZhv1bQrUaaOgaMCVZnm%2BV6SoE%2Fm00U8N0GyUmdpbBtrHVHIOC873ilvUEpGWIjcRoABmnpBqsZwN%2BYaP1nsrIQH3NtiYFt8yRHVYIw9rzevgY6pgFCZbKwVCDFwtH%2F2L%2ByzZjKE3%2FNtRk%2FQn3HmWymXYsx7EepKXVI4MBlQzaUDV6T9imj4CDSKYP68XZI%2BPvGfzwhKrpUNRGyLrb90Gj%2BIOackHyDIngbPYARK%2FaMvqeRhsPNLnx2oqUV4l1lgUfaSCp2Vtt6uzuxt86S4ec2aVhuApBu6dAKU8bFOjo17NycOCAZtSB%2Bgrfv8XV7cuMt4T96nreBMwM3&X-Amz-Signature=6f2f0a36c6308690008c84e735d3ab795a841cc12b78d109a8022070662c1894&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NTJZQU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5cQCDd7jyNCvOCEGX9nGexn7zHKPlNPMXiwZrPLGu9AiAh%2FZcqoggI%2FUz8MQyZ470%2B%2FfCnu3WLUpfhQQrkZDXJFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjWVpZqPa0fueulGNKtwDkSKK8pVJS6DL5c%2F0fBxm0iGNDHgtMFYc9YQLTAWUEuUzt2qI%2F9RR627hLftbh4isK24no9TMAtyKo5nA3zaqe7YU0TUFN94aid3UHKWryhVWAJtzWrIcPRlWu5Er0bBmj7sXpE9AQhCZX7lPTzK4SaLey%2BaLajRgBj0Kovf%2Fyw7xEYwwkoGcaswQUu1WyrJF8vML1QoScs7eNbZKpRaUErFw2BKSzeMmD8mc8rNc2jqnqbXIwUHpBSqWeXBX61zXqqlvislw2Q2tWQJXwVu1gdE0PEXOz2TJvFdkp71v%2BptpJ9x7%2FkPYs31CkXEUpFWXVZmqwXHvF5CNcaXlfWrteR8u7MN6LGYcXGNyyJEMEu76pFCihh8Wa7KVBrwKgj%2FEKedn6kyNXMw1%2FLV6aCvtOx4tZhWQw7BZjUkzjFwen2X21SfoKU5AwuasBUwlRw0DIkIL%2FR83CTDqFL9PT0cUdsZotc%2BIlVkqUqZ%2FNXlck%2BYg4SPMQHYt3TIxQqxEOOp5Ykb6s1vzS%2BAHo%2BIAiNqYiSZhv1bQrUaaOgaMCVZnm%2BV6SoE%2Fm00U8N0GyUmdpbBtrHVHIOC873ilvUEpGWIjcRoABmnpBqsZwN%2BYaP1nsrIQH3NtiYFt8yRHVYIw9rzevgY6pgFCZbKwVCDFwtH%2F2L%2ByzZjKE3%2FNtRk%2FQn3HmWymXYsx7EepKXVI4MBlQzaUDV6T9imj4CDSKYP68XZI%2BPvGfzwhKrpUNRGyLrb90Gj%2BIOackHyDIngbPYARK%2FaMvqeRhsPNLnx2oqUV4l1lgUfaSCp2Vtt6uzuxt86S4ec2aVhuApBu6dAKU8bFOjo17NycOCAZtSB%2Bgrfv8XV7cuMt4T96nreBMwM3&X-Amz-Signature=1da7792dba51883b5c98339b1019fcbe2aabaa72ca35911dd950a9cb7d55c7d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NTJZQU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5cQCDd7jyNCvOCEGX9nGexn7zHKPlNPMXiwZrPLGu9AiAh%2FZcqoggI%2FUz8MQyZ470%2B%2FfCnu3WLUpfhQQrkZDXJFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjWVpZqPa0fueulGNKtwDkSKK8pVJS6DL5c%2F0fBxm0iGNDHgtMFYc9YQLTAWUEuUzt2qI%2F9RR627hLftbh4isK24no9TMAtyKo5nA3zaqe7YU0TUFN94aid3UHKWryhVWAJtzWrIcPRlWu5Er0bBmj7sXpE9AQhCZX7lPTzK4SaLey%2BaLajRgBj0Kovf%2Fyw7xEYwwkoGcaswQUu1WyrJF8vML1QoScs7eNbZKpRaUErFw2BKSzeMmD8mc8rNc2jqnqbXIwUHpBSqWeXBX61zXqqlvislw2Q2tWQJXwVu1gdE0PEXOz2TJvFdkp71v%2BptpJ9x7%2FkPYs31CkXEUpFWXVZmqwXHvF5CNcaXlfWrteR8u7MN6LGYcXGNyyJEMEu76pFCihh8Wa7KVBrwKgj%2FEKedn6kyNXMw1%2FLV6aCvtOx4tZhWQw7BZjUkzjFwen2X21SfoKU5AwuasBUwlRw0DIkIL%2FR83CTDqFL9PT0cUdsZotc%2BIlVkqUqZ%2FNXlck%2BYg4SPMQHYt3TIxQqxEOOp5Ykb6s1vzS%2BAHo%2BIAiNqYiSZhv1bQrUaaOgaMCVZnm%2BV6SoE%2Fm00U8N0GyUmdpbBtrHVHIOC873ilvUEpGWIjcRoABmnpBqsZwN%2BYaP1nsrIQH3NtiYFt8yRHVYIw9rzevgY6pgFCZbKwVCDFwtH%2F2L%2ByzZjKE3%2FNtRk%2FQn3HmWymXYsx7EepKXVI4MBlQzaUDV6T9imj4CDSKYP68XZI%2BPvGfzwhKrpUNRGyLrb90Gj%2BIOackHyDIngbPYARK%2FaMvqeRhsPNLnx2oqUV4l1lgUfaSCp2Vtt6uzuxt86S4ec2aVhuApBu6dAKU8bFOjo17NycOCAZtSB%2Bgrfv8XV7cuMt4T96nreBMwM3&X-Amz-Signature=721720fd7f849ec7977cefad67241652c5fb32f45a87c2602e79e90bfb48b3da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NTJZQU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5cQCDd7jyNCvOCEGX9nGexn7zHKPlNPMXiwZrPLGu9AiAh%2FZcqoggI%2FUz8MQyZ470%2B%2FfCnu3WLUpfhQQrkZDXJFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMjWVpZqPa0fueulGNKtwDkSKK8pVJS6DL5c%2F0fBxm0iGNDHgtMFYc9YQLTAWUEuUzt2qI%2F9RR627hLftbh4isK24no9TMAtyKo5nA3zaqe7YU0TUFN94aid3UHKWryhVWAJtzWrIcPRlWu5Er0bBmj7sXpE9AQhCZX7lPTzK4SaLey%2BaLajRgBj0Kovf%2Fyw7xEYwwkoGcaswQUu1WyrJF8vML1QoScs7eNbZKpRaUErFw2BKSzeMmD8mc8rNc2jqnqbXIwUHpBSqWeXBX61zXqqlvislw2Q2tWQJXwVu1gdE0PEXOz2TJvFdkp71v%2BptpJ9x7%2FkPYs31CkXEUpFWXVZmqwXHvF5CNcaXlfWrteR8u7MN6LGYcXGNyyJEMEu76pFCihh8Wa7KVBrwKgj%2FEKedn6kyNXMw1%2FLV6aCvtOx4tZhWQw7BZjUkzjFwen2X21SfoKU5AwuasBUwlRw0DIkIL%2FR83CTDqFL9PT0cUdsZotc%2BIlVkqUqZ%2FNXlck%2BYg4SPMQHYt3TIxQqxEOOp5Ykb6s1vzS%2BAHo%2BIAiNqYiSZhv1bQrUaaOgaMCVZnm%2BV6SoE%2Fm00U8N0GyUmdpbBtrHVHIOC873ilvUEpGWIjcRoABmnpBqsZwN%2BYaP1nsrIQH3NtiYFt8yRHVYIw9rzevgY6pgFCZbKwVCDFwtH%2F2L%2ByzZjKE3%2FNtRk%2FQn3HmWymXYsx7EepKXVI4MBlQzaUDV6T9imj4CDSKYP68XZI%2BPvGfzwhKrpUNRGyLrb90Gj%2BIOackHyDIngbPYARK%2FaMvqeRhsPNLnx2oqUV4l1lgUfaSCp2Vtt6uzuxt86S4ec2aVhuApBu6dAKU8bFOjo17NycOCAZtSB%2Bgrfv8XV7cuMt4T96nreBMwM3&X-Amz-Signature=cb6755953ed2b190c782507948b24f4a590f98ba4802c57ab297d1883e1e2f12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

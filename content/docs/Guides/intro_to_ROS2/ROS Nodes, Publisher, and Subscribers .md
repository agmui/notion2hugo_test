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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KM4IE6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqFQcdhEFvreYdy0n3CWskEVZRn3h%2FDuGMNZjnbACxkgIhAN7iLksslwBNAsQWUY0ZXReINRjFets7ZkPlCWQxqC7UKv8DCBAQABoMNjM3NDIzMTgzODA1Igz3Prh%2F8nOBDegA%2B%2FIq3APLbyAMbF8HvG3LUAhxoJMprDnyL9bOifjroZnuQ1Je2iZmyr%2FeOJXpDz7ObZQnkAoHBQVlFeyiWidskxK%2BWbZX%2B5QPjcRUnyyEsScXlxn20Sf77c1pGfUHBUs9bVxMgjg77G2%2FGMtWJoXpjKrW4ULqF3IZCocz4ZRVZOSZ9qJhwNPduI9f7B3YB1JHqZHPiX37mwrDTM3nlac1Tc12%2BLiH7ESP0T9wMTJUMhHJsmAB%2BrV8IrFYN5Nv6LzxV2z63jozQN4C%2B87LkHbUj%2FlB78qHMOqPjEIe3hqv%2F3gGs%2Fy7P385Xp6PZMUq2c5imiejCx5BrRUjUk5XTJzTdviqN5rWLqVuZ%2Bmdo7y52EpVKvUB2n%2FBlfu2HbxCL6rQyaaVNikISlSY99YgJFglNz6IC0%2FtlkfQYB%2B40vnjuL57lFdod9JZiGi7N1Cn8hY9YXojbJdzKo9s%2BOtH1g0LanJNtS%2FobM1G70uwGsFoxkF0zuIpECTzVhVi3%2B6otWH32%2BudNHu3MITpxJxEO%2FZ%2BBxEduhBn%2BbcDh8qIwAb6r9TQRiGjdpFz5L39tIgRAP6Nhn%2B7RBhKpQuCNrzTA5YRsImrN0uWZdzDN2ZT8Wj7C5U%2FbSSah3%2FFVQwfCzHIfUeJ0jDG77bEBjqkARAJfZYNMwBGcP4SOIDnVWWYKBle4VDZtJkKHmYLXjxz42YZL5g3PT8VD2f8STmU4uiYOQFMeHxfKajNeo4sPp1v6%2FRlhNuuy7k1TLlq4ZXh3jmy7uDqEP3gSN5zAfHYeow8py2GnkaSOpJoS1VdzpuFMy6kpNFOitIaolYFMSRhBAcJudTrjSKqHSeGDDl8PKnz8hXgUiaLM5Zu9IOinKjhkwMi&X-Amz-Signature=065ba3e663d673d62ed6c241a264f590aac28326b810747e03728080f3f67534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KM4IE6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqFQcdhEFvreYdy0n3CWskEVZRn3h%2FDuGMNZjnbACxkgIhAN7iLksslwBNAsQWUY0ZXReINRjFets7ZkPlCWQxqC7UKv8DCBAQABoMNjM3NDIzMTgzODA1Igz3Prh%2F8nOBDegA%2B%2FIq3APLbyAMbF8HvG3LUAhxoJMprDnyL9bOifjroZnuQ1Je2iZmyr%2FeOJXpDz7ObZQnkAoHBQVlFeyiWidskxK%2BWbZX%2B5QPjcRUnyyEsScXlxn20Sf77c1pGfUHBUs9bVxMgjg77G2%2FGMtWJoXpjKrW4ULqF3IZCocz4ZRVZOSZ9qJhwNPduI9f7B3YB1JHqZHPiX37mwrDTM3nlac1Tc12%2BLiH7ESP0T9wMTJUMhHJsmAB%2BrV8IrFYN5Nv6LzxV2z63jozQN4C%2B87LkHbUj%2FlB78qHMOqPjEIe3hqv%2F3gGs%2Fy7P385Xp6PZMUq2c5imiejCx5BrRUjUk5XTJzTdviqN5rWLqVuZ%2Bmdo7y52EpVKvUB2n%2FBlfu2HbxCL6rQyaaVNikISlSY99YgJFglNz6IC0%2FtlkfQYB%2B40vnjuL57lFdod9JZiGi7N1Cn8hY9YXojbJdzKo9s%2BOtH1g0LanJNtS%2FobM1G70uwGsFoxkF0zuIpECTzVhVi3%2B6otWH32%2BudNHu3MITpxJxEO%2FZ%2BBxEduhBn%2BbcDh8qIwAb6r9TQRiGjdpFz5L39tIgRAP6Nhn%2B7RBhKpQuCNrzTA5YRsImrN0uWZdzDN2ZT8Wj7C5U%2FbSSah3%2FFVQwfCzHIfUeJ0jDG77bEBjqkARAJfZYNMwBGcP4SOIDnVWWYKBle4VDZtJkKHmYLXjxz42YZL5g3PT8VD2f8STmU4uiYOQFMeHxfKajNeo4sPp1v6%2FRlhNuuy7k1TLlq4ZXh3jmy7uDqEP3gSN5zAfHYeow8py2GnkaSOpJoS1VdzpuFMy6kpNFOitIaolYFMSRhBAcJudTrjSKqHSeGDDl8PKnz8hXgUiaLM5Zu9IOinKjhkwMi&X-Amz-Signature=b450b2556d4531a6b20fb5fe4582205a6c73e21189dc8fe697a874639eb07e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KM4IE6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqFQcdhEFvreYdy0n3CWskEVZRn3h%2FDuGMNZjnbACxkgIhAN7iLksslwBNAsQWUY0ZXReINRjFets7ZkPlCWQxqC7UKv8DCBAQABoMNjM3NDIzMTgzODA1Igz3Prh%2F8nOBDegA%2B%2FIq3APLbyAMbF8HvG3LUAhxoJMprDnyL9bOifjroZnuQ1Je2iZmyr%2FeOJXpDz7ObZQnkAoHBQVlFeyiWidskxK%2BWbZX%2B5QPjcRUnyyEsScXlxn20Sf77c1pGfUHBUs9bVxMgjg77G2%2FGMtWJoXpjKrW4ULqF3IZCocz4ZRVZOSZ9qJhwNPduI9f7B3YB1JHqZHPiX37mwrDTM3nlac1Tc12%2BLiH7ESP0T9wMTJUMhHJsmAB%2BrV8IrFYN5Nv6LzxV2z63jozQN4C%2B87LkHbUj%2FlB78qHMOqPjEIe3hqv%2F3gGs%2Fy7P385Xp6PZMUq2c5imiejCx5BrRUjUk5XTJzTdviqN5rWLqVuZ%2Bmdo7y52EpVKvUB2n%2FBlfu2HbxCL6rQyaaVNikISlSY99YgJFglNz6IC0%2FtlkfQYB%2B40vnjuL57lFdod9JZiGi7N1Cn8hY9YXojbJdzKo9s%2BOtH1g0LanJNtS%2FobM1G70uwGsFoxkF0zuIpECTzVhVi3%2B6otWH32%2BudNHu3MITpxJxEO%2FZ%2BBxEduhBn%2BbcDh8qIwAb6r9TQRiGjdpFz5L39tIgRAP6Nhn%2B7RBhKpQuCNrzTA5YRsImrN0uWZdzDN2ZT8Wj7C5U%2FbSSah3%2FFVQwfCzHIfUeJ0jDG77bEBjqkARAJfZYNMwBGcP4SOIDnVWWYKBle4VDZtJkKHmYLXjxz42YZL5g3PT8VD2f8STmU4uiYOQFMeHxfKajNeo4sPp1v6%2FRlhNuuy7k1TLlq4ZXh3jmy7uDqEP3gSN5zAfHYeow8py2GnkaSOpJoS1VdzpuFMy6kpNFOitIaolYFMSRhBAcJudTrjSKqHSeGDDl8PKnz8hXgUiaLM5Zu9IOinKjhkwMi&X-Amz-Signature=37351fe31a29323f61b5d849c9d203c13710e1c96496425831ae84fde26d6e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KM4IE6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqFQcdhEFvreYdy0n3CWskEVZRn3h%2FDuGMNZjnbACxkgIhAN7iLksslwBNAsQWUY0ZXReINRjFets7ZkPlCWQxqC7UKv8DCBAQABoMNjM3NDIzMTgzODA1Igz3Prh%2F8nOBDegA%2B%2FIq3APLbyAMbF8HvG3LUAhxoJMprDnyL9bOifjroZnuQ1Je2iZmyr%2FeOJXpDz7ObZQnkAoHBQVlFeyiWidskxK%2BWbZX%2B5QPjcRUnyyEsScXlxn20Sf77c1pGfUHBUs9bVxMgjg77G2%2FGMtWJoXpjKrW4ULqF3IZCocz4ZRVZOSZ9qJhwNPduI9f7B3YB1JHqZHPiX37mwrDTM3nlac1Tc12%2BLiH7ESP0T9wMTJUMhHJsmAB%2BrV8IrFYN5Nv6LzxV2z63jozQN4C%2B87LkHbUj%2FlB78qHMOqPjEIe3hqv%2F3gGs%2Fy7P385Xp6PZMUq2c5imiejCx5BrRUjUk5XTJzTdviqN5rWLqVuZ%2Bmdo7y52EpVKvUB2n%2FBlfu2HbxCL6rQyaaVNikISlSY99YgJFglNz6IC0%2FtlkfQYB%2B40vnjuL57lFdod9JZiGi7N1Cn8hY9YXojbJdzKo9s%2BOtH1g0LanJNtS%2FobM1G70uwGsFoxkF0zuIpECTzVhVi3%2B6otWH32%2BudNHu3MITpxJxEO%2FZ%2BBxEduhBn%2BbcDh8qIwAb6r9TQRiGjdpFz5L39tIgRAP6Nhn%2B7RBhKpQuCNrzTA5YRsImrN0uWZdzDN2ZT8Wj7C5U%2FbSSah3%2FFVQwfCzHIfUeJ0jDG77bEBjqkARAJfZYNMwBGcP4SOIDnVWWYKBle4VDZtJkKHmYLXjxz42YZL5g3PT8VD2f8STmU4uiYOQFMeHxfKajNeo4sPp1v6%2FRlhNuuy7k1TLlq4ZXh3jmy7uDqEP3gSN5zAfHYeow8py2GnkaSOpJoS1VdzpuFMy6kpNFOitIaolYFMSRhBAcJudTrjSKqHSeGDDl8PKnz8hXgUiaLM5Zu9IOinKjhkwMi&X-Amz-Signature=0c495f7bec762ea503a2f46a8e2157fe40a43aff51c17cced8c35e8aa3f97a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KM4IE6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqFQcdhEFvreYdy0n3CWskEVZRn3h%2FDuGMNZjnbACxkgIhAN7iLksslwBNAsQWUY0ZXReINRjFets7ZkPlCWQxqC7UKv8DCBAQABoMNjM3NDIzMTgzODA1Igz3Prh%2F8nOBDegA%2B%2FIq3APLbyAMbF8HvG3LUAhxoJMprDnyL9bOifjroZnuQ1Je2iZmyr%2FeOJXpDz7ObZQnkAoHBQVlFeyiWidskxK%2BWbZX%2B5QPjcRUnyyEsScXlxn20Sf77c1pGfUHBUs9bVxMgjg77G2%2FGMtWJoXpjKrW4ULqF3IZCocz4ZRVZOSZ9qJhwNPduI9f7B3YB1JHqZHPiX37mwrDTM3nlac1Tc12%2BLiH7ESP0T9wMTJUMhHJsmAB%2BrV8IrFYN5Nv6LzxV2z63jozQN4C%2B87LkHbUj%2FlB78qHMOqPjEIe3hqv%2F3gGs%2Fy7P385Xp6PZMUq2c5imiejCx5BrRUjUk5XTJzTdviqN5rWLqVuZ%2Bmdo7y52EpVKvUB2n%2FBlfu2HbxCL6rQyaaVNikISlSY99YgJFglNz6IC0%2FtlkfQYB%2B40vnjuL57lFdod9JZiGi7N1Cn8hY9YXojbJdzKo9s%2BOtH1g0LanJNtS%2FobM1G70uwGsFoxkF0zuIpECTzVhVi3%2B6otWH32%2BudNHu3MITpxJxEO%2FZ%2BBxEduhBn%2BbcDh8qIwAb6r9TQRiGjdpFz5L39tIgRAP6Nhn%2B7RBhKpQuCNrzTA5YRsImrN0uWZdzDN2ZT8Wj7C5U%2FbSSah3%2FFVQwfCzHIfUeJ0jDG77bEBjqkARAJfZYNMwBGcP4SOIDnVWWYKBle4VDZtJkKHmYLXjxz42YZL5g3PT8VD2f8STmU4uiYOQFMeHxfKajNeo4sPp1v6%2FRlhNuuy7k1TLlq4ZXh3jmy7uDqEP3gSN5zAfHYeow8py2GnkaSOpJoS1VdzpuFMy6kpNFOitIaolYFMSRhBAcJudTrjSKqHSeGDDl8PKnz8hXgUiaLM5Zu9IOinKjhkwMi&X-Amz-Signature=9ee1610c17cddb9e4733a25db8bf0826d7bbe32bd78fbe131698e9cdc10c51c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KM4IE6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqFQcdhEFvreYdy0n3CWskEVZRn3h%2FDuGMNZjnbACxkgIhAN7iLksslwBNAsQWUY0ZXReINRjFets7ZkPlCWQxqC7UKv8DCBAQABoMNjM3NDIzMTgzODA1Igz3Prh%2F8nOBDegA%2B%2FIq3APLbyAMbF8HvG3LUAhxoJMprDnyL9bOifjroZnuQ1Je2iZmyr%2FeOJXpDz7ObZQnkAoHBQVlFeyiWidskxK%2BWbZX%2B5QPjcRUnyyEsScXlxn20Sf77c1pGfUHBUs9bVxMgjg77G2%2FGMtWJoXpjKrW4ULqF3IZCocz4ZRVZOSZ9qJhwNPduI9f7B3YB1JHqZHPiX37mwrDTM3nlac1Tc12%2BLiH7ESP0T9wMTJUMhHJsmAB%2BrV8IrFYN5Nv6LzxV2z63jozQN4C%2B87LkHbUj%2FlB78qHMOqPjEIe3hqv%2F3gGs%2Fy7P385Xp6PZMUq2c5imiejCx5BrRUjUk5XTJzTdviqN5rWLqVuZ%2Bmdo7y52EpVKvUB2n%2FBlfu2HbxCL6rQyaaVNikISlSY99YgJFglNz6IC0%2FtlkfQYB%2B40vnjuL57lFdod9JZiGi7N1Cn8hY9YXojbJdzKo9s%2BOtH1g0LanJNtS%2FobM1G70uwGsFoxkF0zuIpECTzVhVi3%2B6otWH32%2BudNHu3MITpxJxEO%2FZ%2BBxEduhBn%2BbcDh8qIwAb6r9TQRiGjdpFz5L39tIgRAP6Nhn%2B7RBhKpQuCNrzTA5YRsImrN0uWZdzDN2ZT8Wj7C5U%2FbSSah3%2FFVQwfCzHIfUeJ0jDG77bEBjqkARAJfZYNMwBGcP4SOIDnVWWYKBle4VDZtJkKHmYLXjxz42YZL5g3PT8VD2f8STmU4uiYOQFMeHxfKajNeo4sPp1v6%2FRlhNuuy7k1TLlq4ZXh3jmy7uDqEP3gSN5zAfHYeow8py2GnkaSOpJoS1VdzpuFMy6kpNFOitIaolYFMSRhBAcJudTrjSKqHSeGDDl8PKnz8hXgUiaLM5Zu9IOinKjhkwMi&X-Amz-Signature=8e1d4829c2672cee546cdb8f410dade6db1dd0e0d418de57eaf0e38eaf646032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KM4IE6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqFQcdhEFvreYdy0n3CWskEVZRn3h%2FDuGMNZjnbACxkgIhAN7iLksslwBNAsQWUY0ZXReINRjFets7ZkPlCWQxqC7UKv8DCBAQABoMNjM3NDIzMTgzODA1Igz3Prh%2F8nOBDegA%2B%2FIq3APLbyAMbF8HvG3LUAhxoJMprDnyL9bOifjroZnuQ1Je2iZmyr%2FeOJXpDz7ObZQnkAoHBQVlFeyiWidskxK%2BWbZX%2B5QPjcRUnyyEsScXlxn20Sf77c1pGfUHBUs9bVxMgjg77G2%2FGMtWJoXpjKrW4ULqF3IZCocz4ZRVZOSZ9qJhwNPduI9f7B3YB1JHqZHPiX37mwrDTM3nlac1Tc12%2BLiH7ESP0T9wMTJUMhHJsmAB%2BrV8IrFYN5Nv6LzxV2z63jozQN4C%2B87LkHbUj%2FlB78qHMOqPjEIe3hqv%2F3gGs%2Fy7P385Xp6PZMUq2c5imiejCx5BrRUjUk5XTJzTdviqN5rWLqVuZ%2Bmdo7y52EpVKvUB2n%2FBlfu2HbxCL6rQyaaVNikISlSY99YgJFglNz6IC0%2FtlkfQYB%2B40vnjuL57lFdod9JZiGi7N1Cn8hY9YXojbJdzKo9s%2BOtH1g0LanJNtS%2FobM1G70uwGsFoxkF0zuIpECTzVhVi3%2B6otWH32%2BudNHu3MITpxJxEO%2FZ%2BBxEduhBn%2BbcDh8qIwAb6r9TQRiGjdpFz5L39tIgRAP6Nhn%2B7RBhKpQuCNrzTA5YRsImrN0uWZdzDN2ZT8Wj7C5U%2FbSSah3%2FFVQwfCzHIfUeJ0jDG77bEBjqkARAJfZYNMwBGcP4SOIDnVWWYKBle4VDZtJkKHmYLXjxz42YZL5g3PT8VD2f8STmU4uiYOQFMeHxfKajNeo4sPp1v6%2FRlhNuuy7k1TLlq4ZXh3jmy7uDqEP3gSN5zAfHYeow8py2GnkaSOpJoS1VdzpuFMy6kpNFOitIaolYFMSRhBAcJudTrjSKqHSeGDDl8PKnz8hXgUiaLM5Zu9IOinKjhkwMi&X-Amz-Signature=b40b7ea0f46a8cec971595dcca6a9ad312c4a50aa3a22db3a87a9a218ecd37b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KM4IE6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqFQcdhEFvreYdy0n3CWskEVZRn3h%2FDuGMNZjnbACxkgIhAN7iLksslwBNAsQWUY0ZXReINRjFets7ZkPlCWQxqC7UKv8DCBAQABoMNjM3NDIzMTgzODA1Igz3Prh%2F8nOBDegA%2B%2FIq3APLbyAMbF8HvG3LUAhxoJMprDnyL9bOifjroZnuQ1Je2iZmyr%2FeOJXpDz7ObZQnkAoHBQVlFeyiWidskxK%2BWbZX%2B5QPjcRUnyyEsScXlxn20Sf77c1pGfUHBUs9bVxMgjg77G2%2FGMtWJoXpjKrW4ULqF3IZCocz4ZRVZOSZ9qJhwNPduI9f7B3YB1JHqZHPiX37mwrDTM3nlac1Tc12%2BLiH7ESP0T9wMTJUMhHJsmAB%2BrV8IrFYN5Nv6LzxV2z63jozQN4C%2B87LkHbUj%2FlB78qHMOqPjEIe3hqv%2F3gGs%2Fy7P385Xp6PZMUq2c5imiejCx5BrRUjUk5XTJzTdviqN5rWLqVuZ%2Bmdo7y52EpVKvUB2n%2FBlfu2HbxCL6rQyaaVNikISlSY99YgJFglNz6IC0%2FtlkfQYB%2B40vnjuL57lFdod9JZiGi7N1Cn8hY9YXojbJdzKo9s%2BOtH1g0LanJNtS%2FobM1G70uwGsFoxkF0zuIpECTzVhVi3%2B6otWH32%2BudNHu3MITpxJxEO%2FZ%2BBxEduhBn%2BbcDh8qIwAb6r9TQRiGjdpFz5L39tIgRAP6Nhn%2B7RBhKpQuCNrzTA5YRsImrN0uWZdzDN2ZT8Wj7C5U%2FbSSah3%2FFVQwfCzHIfUeJ0jDG77bEBjqkARAJfZYNMwBGcP4SOIDnVWWYKBle4VDZtJkKHmYLXjxz42YZL5g3PT8VD2f8STmU4uiYOQFMeHxfKajNeo4sPp1v6%2FRlhNuuy7k1TLlq4ZXh3jmy7uDqEP3gSN5zAfHYeow8py2GnkaSOpJoS1VdzpuFMy6kpNFOitIaolYFMSRhBAcJudTrjSKqHSeGDDl8PKnz8hXgUiaLM5Zu9IOinKjhkwMi&X-Amz-Signature=5e7954f6410dea4b9ce699cc76fa8db7a030296e6ad45a566df22616a253113e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

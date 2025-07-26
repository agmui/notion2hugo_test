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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=8c79f175cf7c7fcf3ae4748880f2429967da8b00a724f6d6f4060542b4ff9fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=4a35ee6bcd864db31c51c6b85fe8e2821dea38990f969de3c23ccfe778115b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=646bd2a0a9268d90c586b33b799f3c57f844a9c8ab86ac4098ff767aa13fe758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=0bffaf949eb4e07069b348abaf0dee32504e0509f88cfe9e706d97277701a6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=305d71575a4445b1f5b665a1efab2e691b2c10cea85054e1ec7a23f67344015e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=adc50d33fbe8fb9ad1bb58749d02c871fd1038afad7c98e08c5ae35bb4cb6570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=44cef290167011fa2b8cc8550a2f64e031978078b968f756cac78dcc716ac31e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TP4FFG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDEVzccFbOuqvEK0flNQKzHXS8cl9oZ0O5TyqjVWBKO%2FQIhAPHzayo%2FcVUtP6T4iU4n0APgH%2FoizA7E3g6uSDR%2BYCbOKv8DCGYQABoMNjM3NDIzMTgzODA1IgzhJyKsgm%2Fy1I6JPbQq3ANmN65zODxMR%2BDjiYNKe3Anjvw05LgYJrsMG5zLk8K1artvqlpvHNQfmv8hWzthyMm3%2B1wXBAk6SFzJXZ2bYVtgjRthy0kpK0vsYfimebR%2FP1rsy%2FslqW%2FQrMyPjBJ%2BP050MWjVyYYTp5Id00f7uBoxWeiY4ykKpXyQFd3QInYvvWGB3XDb4LOJ90O2rGMTJpZdBVAUeBuALbgHOz8iGuMWtdEeq5Mm1Q6uPEaJtzqpuyW3KY3Co82EFZlzVyUBKGEy0wom5b94Uy8tIj1UhrXP6ROYIOX6Cj0PVoeqH6AD3%2BLdaZTbDYF1boEYA4A64oOAij8s9aCjJUWL2vukQPzhsqsSk2jZD3FZ%2FVhgWwKz0DmDqyjfnkIwJA%2Fort8u6ArxLYSrD5ns%2B4cWREcstLj0XxcoY7wpDBorK41HPzsPiEMAJw0EjFypKW30dsK6JhFR%2FxIAV51WMTrs0Pw4MObgUg8qhORzwCpxbyaIzqONG3FIU4M8Q0PnBYRI7nD1Ay5c%2FbbFI7iezGhLUzwEVv6O%2FxiX3%2F4r4Vkij5xt9ff0i8Z%2BY2msrHclQIgw8%2BZ%2FQtqKD89P5IjHLW1EbyWEU6qX3j6r5VcFRF7gFCjxSxlXl0qT9Z5kUP5PbUxivDCk%2F5TEBjqkAdW4dLYnkjfHKUapSrUrh03urr%2FjBoYTB25nCa4kJ2WyVhntJJ3bxkqtS%2B8HtnyXy91CDh07iS%2FhtNUQWOZKCINvrIIGTnqVD5MNxDJXUJVRAJ87cjbppejNoQNfu0G2j5RJuBc4tgcJZDn2PIe6PPCq3euWQ0fokrjoz3pcHNFR1udgZXl6EEyj7caQN9xXv67pVBUWsTBB0uEEaFIdsz9VPcDv&X-Amz-Signature=22694f13f9b36de242df23694d8b86d4ad91b0fe331134164f770f1ae60df7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

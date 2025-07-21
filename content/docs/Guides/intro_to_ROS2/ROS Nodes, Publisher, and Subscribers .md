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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POAOJK5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHCGOkUdkT5FAOLZDyPZBxGWqEgjWDzwAAL8vaipoaAiEA6dmZf2UdJ1Py8YZeG2fZv4KIZwlfm15PGkzNnvuvDb4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3bogWqPddc%2FdTcWSrcA8HbJJ8zSKnCZx4DVYIzDuC8uE0B4%2FP1jUKLuf3EEtcYYYVSD4SkR%2FXBgLjk%2FeSOO8P7CwoUOI1kPT6SGh6lwhpkFmRDOvgixvsm76xwcSwdqOF9sKJlnrW1%2Fc%2FO2Z%2B8UsAyB9lbcBh0qcR234LV3M6P5ufpVZlq5eIgFpWJDfzMfC%2B2ptnCQOHcrjZ5zzxW%2FFrhRlzDbkE9n7qMHQOXQUpqXaEviXU5Ujsr%2FZPGat%2BYPI5XamKq9FWc6bmlImr1BXHU9PMVurt7ty25iCvNrafnGLba1rtZN7f48IdVxF2pP5fr0wuLDk4cdwakEK4EH4dkyf676aVHcSO2kTZHA%2BRToKkn3vgZYwUICgaXj8LfXy4%2Bk6IJtnPWJJGG8AM6P0I%2Bf7r9sIwNEKfM8cPw1YS9Diwi5IFQeIXDOfAPP9i3qD4WGkHoNj1HT551yeG14gXZ9MoLTRulSXpEF%2BLxhMawC0HZdF1lnBW5tZMLxUYIfqn5eO3yk9OgphiMH3ehqTZvN0WSTQr%2FwcaJtWkaL5WuTzwHWhuHqnfletj55y8DB2pjwT5r7s8Orj1TZia4%2Fb6c4X0f6KzN%2BoeVLIYb2VfYna%2BUN40fYCjal82lvzkDXV65UwL7eKxQIa9vMIGN%2BMMGOqUB3cNCOWmQ29sGcCuUN%2FW5GZg7ht%2BSe5YHWyVQoXNF0MdFxNT7ihG%2BzMlgy3rMCNyY5AZR7VoGC6QFtiB26tloJHAzZGNANFgL8f5UpSW18aILzUIlkEZunxnyp%2F9Vm6bGNKGx7LT2oayqpBeE68FMGPBAma7miPjhv37HW0wobUCz0lqCQrYVJHqlBWqujcxBA%2FdfqdJWvutl6rv4OlXVqbVQm8b8&X-Amz-Signature=477dfbb104086bfee2791bfc39a1d9fbf4663ae644ec65ae1e43ff0eb21cfe97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POAOJK5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHCGOkUdkT5FAOLZDyPZBxGWqEgjWDzwAAL8vaipoaAiEA6dmZf2UdJ1Py8YZeG2fZv4KIZwlfm15PGkzNnvuvDb4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3bogWqPddc%2FdTcWSrcA8HbJJ8zSKnCZx4DVYIzDuC8uE0B4%2FP1jUKLuf3EEtcYYYVSD4SkR%2FXBgLjk%2FeSOO8P7CwoUOI1kPT6SGh6lwhpkFmRDOvgixvsm76xwcSwdqOF9sKJlnrW1%2Fc%2FO2Z%2B8UsAyB9lbcBh0qcR234LV3M6P5ufpVZlq5eIgFpWJDfzMfC%2B2ptnCQOHcrjZ5zzxW%2FFrhRlzDbkE9n7qMHQOXQUpqXaEviXU5Ujsr%2FZPGat%2BYPI5XamKq9FWc6bmlImr1BXHU9PMVurt7ty25iCvNrafnGLba1rtZN7f48IdVxF2pP5fr0wuLDk4cdwakEK4EH4dkyf676aVHcSO2kTZHA%2BRToKkn3vgZYwUICgaXj8LfXy4%2Bk6IJtnPWJJGG8AM6P0I%2Bf7r9sIwNEKfM8cPw1YS9Diwi5IFQeIXDOfAPP9i3qD4WGkHoNj1HT551yeG14gXZ9MoLTRulSXpEF%2BLxhMawC0HZdF1lnBW5tZMLxUYIfqn5eO3yk9OgphiMH3ehqTZvN0WSTQr%2FwcaJtWkaL5WuTzwHWhuHqnfletj55y8DB2pjwT5r7s8Orj1TZia4%2Fb6c4X0f6KzN%2BoeVLIYb2VfYna%2BUN40fYCjal82lvzkDXV65UwL7eKxQIa9vMIGN%2BMMGOqUB3cNCOWmQ29sGcCuUN%2FW5GZg7ht%2BSe5YHWyVQoXNF0MdFxNT7ihG%2BzMlgy3rMCNyY5AZR7VoGC6QFtiB26tloJHAzZGNANFgL8f5UpSW18aILzUIlkEZunxnyp%2F9Vm6bGNKGx7LT2oayqpBeE68FMGPBAma7miPjhv37HW0wobUCz0lqCQrYVJHqlBWqujcxBA%2FdfqdJWvutl6rv4OlXVqbVQm8b8&X-Amz-Signature=af4aad69ea16ed4802e74b667e38fec99bd27410ceffd5c18371267ac72db95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POAOJK5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHCGOkUdkT5FAOLZDyPZBxGWqEgjWDzwAAL8vaipoaAiEA6dmZf2UdJ1Py8YZeG2fZv4KIZwlfm15PGkzNnvuvDb4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3bogWqPddc%2FdTcWSrcA8HbJJ8zSKnCZx4DVYIzDuC8uE0B4%2FP1jUKLuf3EEtcYYYVSD4SkR%2FXBgLjk%2FeSOO8P7CwoUOI1kPT6SGh6lwhpkFmRDOvgixvsm76xwcSwdqOF9sKJlnrW1%2Fc%2FO2Z%2B8UsAyB9lbcBh0qcR234LV3M6P5ufpVZlq5eIgFpWJDfzMfC%2B2ptnCQOHcrjZ5zzxW%2FFrhRlzDbkE9n7qMHQOXQUpqXaEviXU5Ujsr%2FZPGat%2BYPI5XamKq9FWc6bmlImr1BXHU9PMVurt7ty25iCvNrafnGLba1rtZN7f48IdVxF2pP5fr0wuLDk4cdwakEK4EH4dkyf676aVHcSO2kTZHA%2BRToKkn3vgZYwUICgaXj8LfXy4%2Bk6IJtnPWJJGG8AM6P0I%2Bf7r9sIwNEKfM8cPw1YS9Diwi5IFQeIXDOfAPP9i3qD4WGkHoNj1HT551yeG14gXZ9MoLTRulSXpEF%2BLxhMawC0HZdF1lnBW5tZMLxUYIfqn5eO3yk9OgphiMH3ehqTZvN0WSTQr%2FwcaJtWkaL5WuTzwHWhuHqnfletj55y8DB2pjwT5r7s8Orj1TZia4%2Fb6c4X0f6KzN%2BoeVLIYb2VfYna%2BUN40fYCjal82lvzkDXV65UwL7eKxQIa9vMIGN%2BMMGOqUB3cNCOWmQ29sGcCuUN%2FW5GZg7ht%2BSe5YHWyVQoXNF0MdFxNT7ihG%2BzMlgy3rMCNyY5AZR7VoGC6QFtiB26tloJHAzZGNANFgL8f5UpSW18aILzUIlkEZunxnyp%2F9Vm6bGNKGx7LT2oayqpBeE68FMGPBAma7miPjhv37HW0wobUCz0lqCQrYVJHqlBWqujcxBA%2FdfqdJWvutl6rv4OlXVqbVQm8b8&X-Amz-Signature=da913f64e510a4db4d9c5fe727b44a3fc55eed4f5d5d27bf2f4542fc41647a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POAOJK5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHCGOkUdkT5FAOLZDyPZBxGWqEgjWDzwAAL8vaipoaAiEA6dmZf2UdJ1Py8YZeG2fZv4KIZwlfm15PGkzNnvuvDb4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3bogWqPddc%2FdTcWSrcA8HbJJ8zSKnCZx4DVYIzDuC8uE0B4%2FP1jUKLuf3EEtcYYYVSD4SkR%2FXBgLjk%2FeSOO8P7CwoUOI1kPT6SGh6lwhpkFmRDOvgixvsm76xwcSwdqOF9sKJlnrW1%2Fc%2FO2Z%2B8UsAyB9lbcBh0qcR234LV3M6P5ufpVZlq5eIgFpWJDfzMfC%2B2ptnCQOHcrjZ5zzxW%2FFrhRlzDbkE9n7qMHQOXQUpqXaEviXU5Ujsr%2FZPGat%2BYPI5XamKq9FWc6bmlImr1BXHU9PMVurt7ty25iCvNrafnGLba1rtZN7f48IdVxF2pP5fr0wuLDk4cdwakEK4EH4dkyf676aVHcSO2kTZHA%2BRToKkn3vgZYwUICgaXj8LfXy4%2Bk6IJtnPWJJGG8AM6P0I%2Bf7r9sIwNEKfM8cPw1YS9Diwi5IFQeIXDOfAPP9i3qD4WGkHoNj1HT551yeG14gXZ9MoLTRulSXpEF%2BLxhMawC0HZdF1lnBW5tZMLxUYIfqn5eO3yk9OgphiMH3ehqTZvN0WSTQr%2FwcaJtWkaL5WuTzwHWhuHqnfletj55y8DB2pjwT5r7s8Orj1TZia4%2Fb6c4X0f6KzN%2BoeVLIYb2VfYna%2BUN40fYCjal82lvzkDXV65UwL7eKxQIa9vMIGN%2BMMGOqUB3cNCOWmQ29sGcCuUN%2FW5GZg7ht%2BSe5YHWyVQoXNF0MdFxNT7ihG%2BzMlgy3rMCNyY5AZR7VoGC6QFtiB26tloJHAzZGNANFgL8f5UpSW18aILzUIlkEZunxnyp%2F9Vm6bGNKGx7LT2oayqpBeE68FMGPBAma7miPjhv37HW0wobUCz0lqCQrYVJHqlBWqujcxBA%2FdfqdJWvutl6rv4OlXVqbVQm8b8&X-Amz-Signature=10f94df6f47edaf1ab3fa7a412736827f8f8f345fbfa62faa963c32fb0d77930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POAOJK5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHCGOkUdkT5FAOLZDyPZBxGWqEgjWDzwAAL8vaipoaAiEA6dmZf2UdJ1Py8YZeG2fZv4KIZwlfm15PGkzNnvuvDb4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3bogWqPddc%2FdTcWSrcA8HbJJ8zSKnCZx4DVYIzDuC8uE0B4%2FP1jUKLuf3EEtcYYYVSD4SkR%2FXBgLjk%2FeSOO8P7CwoUOI1kPT6SGh6lwhpkFmRDOvgixvsm76xwcSwdqOF9sKJlnrW1%2Fc%2FO2Z%2B8UsAyB9lbcBh0qcR234LV3M6P5ufpVZlq5eIgFpWJDfzMfC%2B2ptnCQOHcrjZ5zzxW%2FFrhRlzDbkE9n7qMHQOXQUpqXaEviXU5Ujsr%2FZPGat%2BYPI5XamKq9FWc6bmlImr1BXHU9PMVurt7ty25iCvNrafnGLba1rtZN7f48IdVxF2pP5fr0wuLDk4cdwakEK4EH4dkyf676aVHcSO2kTZHA%2BRToKkn3vgZYwUICgaXj8LfXy4%2Bk6IJtnPWJJGG8AM6P0I%2Bf7r9sIwNEKfM8cPw1YS9Diwi5IFQeIXDOfAPP9i3qD4WGkHoNj1HT551yeG14gXZ9MoLTRulSXpEF%2BLxhMawC0HZdF1lnBW5tZMLxUYIfqn5eO3yk9OgphiMH3ehqTZvN0WSTQr%2FwcaJtWkaL5WuTzwHWhuHqnfletj55y8DB2pjwT5r7s8Orj1TZia4%2Fb6c4X0f6KzN%2BoeVLIYb2VfYna%2BUN40fYCjal82lvzkDXV65UwL7eKxQIa9vMIGN%2BMMGOqUB3cNCOWmQ29sGcCuUN%2FW5GZg7ht%2BSe5YHWyVQoXNF0MdFxNT7ihG%2BzMlgy3rMCNyY5AZR7VoGC6QFtiB26tloJHAzZGNANFgL8f5UpSW18aILzUIlkEZunxnyp%2F9Vm6bGNKGx7LT2oayqpBeE68FMGPBAma7miPjhv37HW0wobUCz0lqCQrYVJHqlBWqujcxBA%2FdfqdJWvutl6rv4OlXVqbVQm8b8&X-Amz-Signature=3ac03fffe22c4d1a1b8f83fb06320748ccc39e756d5575bdc09ca656f296ff4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POAOJK5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHCGOkUdkT5FAOLZDyPZBxGWqEgjWDzwAAL8vaipoaAiEA6dmZf2UdJ1Py8YZeG2fZv4KIZwlfm15PGkzNnvuvDb4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3bogWqPddc%2FdTcWSrcA8HbJJ8zSKnCZx4DVYIzDuC8uE0B4%2FP1jUKLuf3EEtcYYYVSD4SkR%2FXBgLjk%2FeSOO8P7CwoUOI1kPT6SGh6lwhpkFmRDOvgixvsm76xwcSwdqOF9sKJlnrW1%2Fc%2FO2Z%2B8UsAyB9lbcBh0qcR234LV3M6P5ufpVZlq5eIgFpWJDfzMfC%2B2ptnCQOHcrjZ5zzxW%2FFrhRlzDbkE9n7qMHQOXQUpqXaEviXU5Ujsr%2FZPGat%2BYPI5XamKq9FWc6bmlImr1BXHU9PMVurt7ty25iCvNrafnGLba1rtZN7f48IdVxF2pP5fr0wuLDk4cdwakEK4EH4dkyf676aVHcSO2kTZHA%2BRToKkn3vgZYwUICgaXj8LfXy4%2Bk6IJtnPWJJGG8AM6P0I%2Bf7r9sIwNEKfM8cPw1YS9Diwi5IFQeIXDOfAPP9i3qD4WGkHoNj1HT551yeG14gXZ9MoLTRulSXpEF%2BLxhMawC0HZdF1lnBW5tZMLxUYIfqn5eO3yk9OgphiMH3ehqTZvN0WSTQr%2FwcaJtWkaL5WuTzwHWhuHqnfletj55y8DB2pjwT5r7s8Orj1TZia4%2Fb6c4X0f6KzN%2BoeVLIYb2VfYna%2BUN40fYCjal82lvzkDXV65UwL7eKxQIa9vMIGN%2BMMGOqUB3cNCOWmQ29sGcCuUN%2FW5GZg7ht%2BSe5YHWyVQoXNF0MdFxNT7ihG%2BzMlgy3rMCNyY5AZR7VoGC6QFtiB26tloJHAzZGNANFgL8f5UpSW18aILzUIlkEZunxnyp%2F9Vm6bGNKGx7LT2oayqpBeE68FMGPBAma7miPjhv37HW0wobUCz0lqCQrYVJHqlBWqujcxBA%2FdfqdJWvutl6rv4OlXVqbVQm8b8&X-Amz-Signature=42d815f46afc63318dfe3d56100839f6c4063a17828bbbfc8ae6ceb373a93c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POAOJK5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHCGOkUdkT5FAOLZDyPZBxGWqEgjWDzwAAL8vaipoaAiEA6dmZf2UdJ1Py8YZeG2fZv4KIZwlfm15PGkzNnvuvDb4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3bogWqPddc%2FdTcWSrcA8HbJJ8zSKnCZx4DVYIzDuC8uE0B4%2FP1jUKLuf3EEtcYYYVSD4SkR%2FXBgLjk%2FeSOO8P7CwoUOI1kPT6SGh6lwhpkFmRDOvgixvsm76xwcSwdqOF9sKJlnrW1%2Fc%2FO2Z%2B8UsAyB9lbcBh0qcR234LV3M6P5ufpVZlq5eIgFpWJDfzMfC%2B2ptnCQOHcrjZ5zzxW%2FFrhRlzDbkE9n7qMHQOXQUpqXaEviXU5Ujsr%2FZPGat%2BYPI5XamKq9FWc6bmlImr1BXHU9PMVurt7ty25iCvNrafnGLba1rtZN7f48IdVxF2pP5fr0wuLDk4cdwakEK4EH4dkyf676aVHcSO2kTZHA%2BRToKkn3vgZYwUICgaXj8LfXy4%2Bk6IJtnPWJJGG8AM6P0I%2Bf7r9sIwNEKfM8cPw1YS9Diwi5IFQeIXDOfAPP9i3qD4WGkHoNj1HT551yeG14gXZ9MoLTRulSXpEF%2BLxhMawC0HZdF1lnBW5tZMLxUYIfqn5eO3yk9OgphiMH3ehqTZvN0WSTQr%2FwcaJtWkaL5WuTzwHWhuHqnfletj55y8DB2pjwT5r7s8Orj1TZia4%2Fb6c4X0f6KzN%2BoeVLIYb2VfYna%2BUN40fYCjal82lvzkDXV65UwL7eKxQIa9vMIGN%2BMMGOqUB3cNCOWmQ29sGcCuUN%2FW5GZg7ht%2BSe5YHWyVQoXNF0MdFxNT7ihG%2BzMlgy3rMCNyY5AZR7VoGC6QFtiB26tloJHAzZGNANFgL8f5UpSW18aILzUIlkEZunxnyp%2F9Vm6bGNKGx7LT2oayqpBeE68FMGPBAma7miPjhv37HW0wobUCz0lqCQrYVJHqlBWqujcxBA%2FdfqdJWvutl6rv4OlXVqbVQm8b8&X-Amz-Signature=302b82c8ba17c2a98cbe3df9ac2dd0c2599ca3b6d158daf4aa10c824ae9aff60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POAOJK5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHCGOkUdkT5FAOLZDyPZBxGWqEgjWDzwAAL8vaipoaAiEA6dmZf2UdJ1Py8YZeG2fZv4KIZwlfm15PGkzNnvuvDb4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3bogWqPddc%2FdTcWSrcA8HbJJ8zSKnCZx4DVYIzDuC8uE0B4%2FP1jUKLuf3EEtcYYYVSD4SkR%2FXBgLjk%2FeSOO8P7CwoUOI1kPT6SGh6lwhpkFmRDOvgixvsm76xwcSwdqOF9sKJlnrW1%2Fc%2FO2Z%2B8UsAyB9lbcBh0qcR234LV3M6P5ufpVZlq5eIgFpWJDfzMfC%2B2ptnCQOHcrjZ5zzxW%2FFrhRlzDbkE9n7qMHQOXQUpqXaEviXU5Ujsr%2FZPGat%2BYPI5XamKq9FWc6bmlImr1BXHU9PMVurt7ty25iCvNrafnGLba1rtZN7f48IdVxF2pP5fr0wuLDk4cdwakEK4EH4dkyf676aVHcSO2kTZHA%2BRToKkn3vgZYwUICgaXj8LfXy4%2Bk6IJtnPWJJGG8AM6P0I%2Bf7r9sIwNEKfM8cPw1YS9Diwi5IFQeIXDOfAPP9i3qD4WGkHoNj1HT551yeG14gXZ9MoLTRulSXpEF%2BLxhMawC0HZdF1lnBW5tZMLxUYIfqn5eO3yk9OgphiMH3ehqTZvN0WSTQr%2FwcaJtWkaL5WuTzwHWhuHqnfletj55y8DB2pjwT5r7s8Orj1TZia4%2Fb6c4X0f6KzN%2BoeVLIYb2VfYna%2BUN40fYCjal82lvzkDXV65UwL7eKxQIa9vMIGN%2BMMGOqUB3cNCOWmQ29sGcCuUN%2FW5GZg7ht%2BSe5YHWyVQoXNF0MdFxNT7ihG%2BzMlgy3rMCNyY5AZR7VoGC6QFtiB26tloJHAzZGNANFgL8f5UpSW18aILzUIlkEZunxnyp%2F9Vm6bGNKGx7LT2oayqpBeE68FMGPBAma7miPjhv37HW0wobUCz0lqCQrYVJHqlBWqujcxBA%2FdfqdJWvutl6rv4OlXVqbVQm8b8&X-Amz-Signature=8ebc6381598f3096320647ebcfc0d11f1702fbd7648484456573b9866886ba9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

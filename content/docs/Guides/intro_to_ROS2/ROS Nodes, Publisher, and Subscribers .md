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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCV542U%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuqUZgUknkgoRtoe5HY%2B9jt5ZgV5FyNsLUhAWglIwE3wIhAPgvHQF5SU94BL%2F3THsR6PulzUfYMrNhoVUFPHWxxiWjKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyUQhCMYgo9rQyLvAq3AN%2Bc4%2FXUJrnJ0v1KWN4g5B6GRWmW21dNBU2%2B5qkqrtrL8wF06KoKJeYwy93jrzKA5WYV5D38g2dDRllLN0khQb0i0C%2F4bn1jnXA%2Bepk9MFMsjgMeoCx%2B64cwVTtMhY17Jk5cOU75z3WuWqLrVUlWOZyUqpf8Ut4gOaVVacQ4yskrD%2FJgjtEEdtJ3bUetEJUGCP2byBdn5Kai%2FEAZF5uVmYKjMimTOsEw6F0ZSAb%2BI236GVxtCzoaCvv%2F2nF2s%2BfqxlMHxIBzGeC0K115SmI9bf3bHa61fOqIKMilFyowp1XXe8riVx4FhPN%2F6wLpNrsbrPS72kB0p3tBNF3rL0B9xof2oLeqy0aiJxeFIO9v4Alu%2F7De4verLxSvM0%2F9%2BqPg2a%2BjRAhxdG382YafGmyVG2yjqrC8XaF6DncvIYX38l65L%2BJ0pN9%2Fy1jQld3Fds1BRPp%2BpNTT6HqpvtHqOPxG4R%2FHQwFWjzAqlY%2FVayIF2z%2BiGj5SEkbj%2FlZjVEwelvgaESnkEAOqI4vKFATIyHggACyVdhQ5Vv0ZVhlRJKNHUiOJgEOiTMFQirlfu7d7Fzu8ygdOCwgKMuyO1YDAi4m4rVoUmF7m%2BvIfvVt8yT8%2F%2Fyuiv%2Fq%2FE4dg%2FBKxpxjGDDEr4TABjqkAXqvxZf64X%2F%2B3gA9u2jkSk7LtnWYWUogv51S3o9Vj0EnDTAZx6oIj1ASBXU%2BPKlEIL4QT8LIuiYQ0NfSg9TJIBJaWnoUYNjz5idAdJgSpB6C0B%2FboMWR%2FFR5R21W%2F%2FuXlKVruuo%2FmIPIZncNzbzEyCSvkO2zlPD%2FZnfhjhx1aUiUywo1Tx%2FdluuzYBDbOQT0QIQ0k6R6R6%2BNCVOxeJn0C3qGo4Tv&X-Amz-Signature=c844c18a70d6e605d8cbccc03d06d4a7e108d49177babf25854aff4943390e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCV542U%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuqUZgUknkgoRtoe5HY%2B9jt5ZgV5FyNsLUhAWglIwE3wIhAPgvHQF5SU94BL%2F3THsR6PulzUfYMrNhoVUFPHWxxiWjKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyUQhCMYgo9rQyLvAq3AN%2Bc4%2FXUJrnJ0v1KWN4g5B6GRWmW21dNBU2%2B5qkqrtrL8wF06KoKJeYwy93jrzKA5WYV5D38g2dDRllLN0khQb0i0C%2F4bn1jnXA%2Bepk9MFMsjgMeoCx%2B64cwVTtMhY17Jk5cOU75z3WuWqLrVUlWOZyUqpf8Ut4gOaVVacQ4yskrD%2FJgjtEEdtJ3bUetEJUGCP2byBdn5Kai%2FEAZF5uVmYKjMimTOsEw6F0ZSAb%2BI236GVxtCzoaCvv%2F2nF2s%2BfqxlMHxIBzGeC0K115SmI9bf3bHa61fOqIKMilFyowp1XXe8riVx4FhPN%2F6wLpNrsbrPS72kB0p3tBNF3rL0B9xof2oLeqy0aiJxeFIO9v4Alu%2F7De4verLxSvM0%2F9%2BqPg2a%2BjRAhxdG382YafGmyVG2yjqrC8XaF6DncvIYX38l65L%2BJ0pN9%2Fy1jQld3Fds1BRPp%2BpNTT6HqpvtHqOPxG4R%2FHQwFWjzAqlY%2FVayIF2z%2BiGj5SEkbj%2FlZjVEwelvgaESnkEAOqI4vKFATIyHggACyVdhQ5Vv0ZVhlRJKNHUiOJgEOiTMFQirlfu7d7Fzu8ygdOCwgKMuyO1YDAi4m4rVoUmF7m%2BvIfvVt8yT8%2F%2Fyuiv%2Fq%2FE4dg%2FBKxpxjGDDEr4TABjqkAXqvxZf64X%2F%2B3gA9u2jkSk7LtnWYWUogv51S3o9Vj0EnDTAZx6oIj1ASBXU%2BPKlEIL4QT8LIuiYQ0NfSg9TJIBJaWnoUYNjz5idAdJgSpB6C0B%2FboMWR%2FFR5R21W%2F%2FuXlKVruuo%2FmIPIZncNzbzEyCSvkO2zlPD%2FZnfhjhx1aUiUywo1Tx%2FdluuzYBDbOQT0QIQ0k6R6R6%2BNCVOxeJn0C3qGo4Tv&X-Amz-Signature=5dbb190248c95acc2e441e75d9d990359c1fab7025e08076f83ba3eab4ddb45b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCV542U%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuqUZgUknkgoRtoe5HY%2B9jt5ZgV5FyNsLUhAWglIwE3wIhAPgvHQF5SU94BL%2F3THsR6PulzUfYMrNhoVUFPHWxxiWjKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyUQhCMYgo9rQyLvAq3AN%2Bc4%2FXUJrnJ0v1KWN4g5B6GRWmW21dNBU2%2B5qkqrtrL8wF06KoKJeYwy93jrzKA5WYV5D38g2dDRllLN0khQb0i0C%2F4bn1jnXA%2Bepk9MFMsjgMeoCx%2B64cwVTtMhY17Jk5cOU75z3WuWqLrVUlWOZyUqpf8Ut4gOaVVacQ4yskrD%2FJgjtEEdtJ3bUetEJUGCP2byBdn5Kai%2FEAZF5uVmYKjMimTOsEw6F0ZSAb%2BI236GVxtCzoaCvv%2F2nF2s%2BfqxlMHxIBzGeC0K115SmI9bf3bHa61fOqIKMilFyowp1XXe8riVx4FhPN%2F6wLpNrsbrPS72kB0p3tBNF3rL0B9xof2oLeqy0aiJxeFIO9v4Alu%2F7De4verLxSvM0%2F9%2BqPg2a%2BjRAhxdG382YafGmyVG2yjqrC8XaF6DncvIYX38l65L%2BJ0pN9%2Fy1jQld3Fds1BRPp%2BpNTT6HqpvtHqOPxG4R%2FHQwFWjzAqlY%2FVayIF2z%2BiGj5SEkbj%2FlZjVEwelvgaESnkEAOqI4vKFATIyHggACyVdhQ5Vv0ZVhlRJKNHUiOJgEOiTMFQirlfu7d7Fzu8ygdOCwgKMuyO1YDAi4m4rVoUmF7m%2BvIfvVt8yT8%2F%2Fyuiv%2Fq%2FE4dg%2FBKxpxjGDDEr4TABjqkAXqvxZf64X%2F%2B3gA9u2jkSk7LtnWYWUogv51S3o9Vj0EnDTAZx6oIj1ASBXU%2BPKlEIL4QT8LIuiYQ0NfSg9TJIBJaWnoUYNjz5idAdJgSpB6C0B%2FboMWR%2FFR5R21W%2F%2FuXlKVruuo%2FmIPIZncNzbzEyCSvkO2zlPD%2FZnfhjhx1aUiUywo1Tx%2FdluuzYBDbOQT0QIQ0k6R6R6%2BNCVOxeJn0C3qGo4Tv&X-Amz-Signature=17142290b603a8f1d291200951d67933ab4f7657e5a88843d5a945e8498dc421&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCV542U%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuqUZgUknkgoRtoe5HY%2B9jt5ZgV5FyNsLUhAWglIwE3wIhAPgvHQF5SU94BL%2F3THsR6PulzUfYMrNhoVUFPHWxxiWjKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyUQhCMYgo9rQyLvAq3AN%2Bc4%2FXUJrnJ0v1KWN4g5B6GRWmW21dNBU2%2B5qkqrtrL8wF06KoKJeYwy93jrzKA5WYV5D38g2dDRllLN0khQb0i0C%2F4bn1jnXA%2Bepk9MFMsjgMeoCx%2B64cwVTtMhY17Jk5cOU75z3WuWqLrVUlWOZyUqpf8Ut4gOaVVacQ4yskrD%2FJgjtEEdtJ3bUetEJUGCP2byBdn5Kai%2FEAZF5uVmYKjMimTOsEw6F0ZSAb%2BI236GVxtCzoaCvv%2F2nF2s%2BfqxlMHxIBzGeC0K115SmI9bf3bHa61fOqIKMilFyowp1XXe8riVx4FhPN%2F6wLpNrsbrPS72kB0p3tBNF3rL0B9xof2oLeqy0aiJxeFIO9v4Alu%2F7De4verLxSvM0%2F9%2BqPg2a%2BjRAhxdG382YafGmyVG2yjqrC8XaF6DncvIYX38l65L%2BJ0pN9%2Fy1jQld3Fds1BRPp%2BpNTT6HqpvtHqOPxG4R%2FHQwFWjzAqlY%2FVayIF2z%2BiGj5SEkbj%2FlZjVEwelvgaESnkEAOqI4vKFATIyHggACyVdhQ5Vv0ZVhlRJKNHUiOJgEOiTMFQirlfu7d7Fzu8ygdOCwgKMuyO1YDAi4m4rVoUmF7m%2BvIfvVt8yT8%2F%2Fyuiv%2Fq%2FE4dg%2FBKxpxjGDDEr4TABjqkAXqvxZf64X%2F%2B3gA9u2jkSk7LtnWYWUogv51S3o9Vj0EnDTAZx6oIj1ASBXU%2BPKlEIL4QT8LIuiYQ0NfSg9TJIBJaWnoUYNjz5idAdJgSpB6C0B%2FboMWR%2FFR5R21W%2F%2FuXlKVruuo%2FmIPIZncNzbzEyCSvkO2zlPD%2FZnfhjhx1aUiUywo1Tx%2FdluuzYBDbOQT0QIQ0k6R6R6%2BNCVOxeJn0C3qGo4Tv&X-Amz-Signature=093534d9f67adb4385b76d4066e07182affdc78e3f339af652f80ad7d4e01da6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCV542U%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuqUZgUknkgoRtoe5HY%2B9jt5ZgV5FyNsLUhAWglIwE3wIhAPgvHQF5SU94BL%2F3THsR6PulzUfYMrNhoVUFPHWxxiWjKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyUQhCMYgo9rQyLvAq3AN%2Bc4%2FXUJrnJ0v1KWN4g5B6GRWmW21dNBU2%2B5qkqrtrL8wF06KoKJeYwy93jrzKA5WYV5D38g2dDRllLN0khQb0i0C%2F4bn1jnXA%2Bepk9MFMsjgMeoCx%2B64cwVTtMhY17Jk5cOU75z3WuWqLrVUlWOZyUqpf8Ut4gOaVVacQ4yskrD%2FJgjtEEdtJ3bUetEJUGCP2byBdn5Kai%2FEAZF5uVmYKjMimTOsEw6F0ZSAb%2BI236GVxtCzoaCvv%2F2nF2s%2BfqxlMHxIBzGeC0K115SmI9bf3bHa61fOqIKMilFyowp1XXe8riVx4FhPN%2F6wLpNrsbrPS72kB0p3tBNF3rL0B9xof2oLeqy0aiJxeFIO9v4Alu%2F7De4verLxSvM0%2F9%2BqPg2a%2BjRAhxdG382YafGmyVG2yjqrC8XaF6DncvIYX38l65L%2BJ0pN9%2Fy1jQld3Fds1BRPp%2BpNTT6HqpvtHqOPxG4R%2FHQwFWjzAqlY%2FVayIF2z%2BiGj5SEkbj%2FlZjVEwelvgaESnkEAOqI4vKFATIyHggACyVdhQ5Vv0ZVhlRJKNHUiOJgEOiTMFQirlfu7d7Fzu8ygdOCwgKMuyO1YDAi4m4rVoUmF7m%2BvIfvVt8yT8%2F%2Fyuiv%2Fq%2FE4dg%2FBKxpxjGDDEr4TABjqkAXqvxZf64X%2F%2B3gA9u2jkSk7LtnWYWUogv51S3o9Vj0EnDTAZx6oIj1ASBXU%2BPKlEIL4QT8LIuiYQ0NfSg9TJIBJaWnoUYNjz5idAdJgSpB6C0B%2FboMWR%2FFR5R21W%2F%2FuXlKVruuo%2FmIPIZncNzbzEyCSvkO2zlPD%2FZnfhjhx1aUiUywo1Tx%2FdluuzYBDbOQT0QIQ0k6R6R6%2BNCVOxeJn0C3qGo4Tv&X-Amz-Signature=c5961fc213c9b6a628df6ff0c616e986755b4e5969926ac594c54cf499351437&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCV542U%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuqUZgUknkgoRtoe5HY%2B9jt5ZgV5FyNsLUhAWglIwE3wIhAPgvHQF5SU94BL%2F3THsR6PulzUfYMrNhoVUFPHWxxiWjKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyUQhCMYgo9rQyLvAq3AN%2Bc4%2FXUJrnJ0v1KWN4g5B6GRWmW21dNBU2%2B5qkqrtrL8wF06KoKJeYwy93jrzKA5WYV5D38g2dDRllLN0khQb0i0C%2F4bn1jnXA%2Bepk9MFMsjgMeoCx%2B64cwVTtMhY17Jk5cOU75z3WuWqLrVUlWOZyUqpf8Ut4gOaVVacQ4yskrD%2FJgjtEEdtJ3bUetEJUGCP2byBdn5Kai%2FEAZF5uVmYKjMimTOsEw6F0ZSAb%2BI236GVxtCzoaCvv%2F2nF2s%2BfqxlMHxIBzGeC0K115SmI9bf3bHa61fOqIKMilFyowp1XXe8riVx4FhPN%2F6wLpNrsbrPS72kB0p3tBNF3rL0B9xof2oLeqy0aiJxeFIO9v4Alu%2F7De4verLxSvM0%2F9%2BqPg2a%2BjRAhxdG382YafGmyVG2yjqrC8XaF6DncvIYX38l65L%2BJ0pN9%2Fy1jQld3Fds1BRPp%2BpNTT6HqpvtHqOPxG4R%2FHQwFWjzAqlY%2FVayIF2z%2BiGj5SEkbj%2FlZjVEwelvgaESnkEAOqI4vKFATIyHggACyVdhQ5Vv0ZVhlRJKNHUiOJgEOiTMFQirlfu7d7Fzu8ygdOCwgKMuyO1YDAi4m4rVoUmF7m%2BvIfvVt8yT8%2F%2Fyuiv%2Fq%2FE4dg%2FBKxpxjGDDEr4TABjqkAXqvxZf64X%2F%2B3gA9u2jkSk7LtnWYWUogv51S3o9Vj0EnDTAZx6oIj1ASBXU%2BPKlEIL4QT8LIuiYQ0NfSg9TJIBJaWnoUYNjz5idAdJgSpB6C0B%2FboMWR%2FFR5R21W%2F%2FuXlKVruuo%2FmIPIZncNzbzEyCSvkO2zlPD%2FZnfhjhx1aUiUywo1Tx%2FdluuzYBDbOQT0QIQ0k6R6R6%2BNCVOxeJn0C3qGo4Tv&X-Amz-Signature=91d404e4fb7518c0ef80d1e16e3d8b1bd29f752a5b3d114173dc12f85c27d8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCV542U%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuqUZgUknkgoRtoe5HY%2B9jt5ZgV5FyNsLUhAWglIwE3wIhAPgvHQF5SU94BL%2F3THsR6PulzUfYMrNhoVUFPHWxxiWjKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyUQhCMYgo9rQyLvAq3AN%2Bc4%2FXUJrnJ0v1KWN4g5B6GRWmW21dNBU2%2B5qkqrtrL8wF06KoKJeYwy93jrzKA5WYV5D38g2dDRllLN0khQb0i0C%2F4bn1jnXA%2Bepk9MFMsjgMeoCx%2B64cwVTtMhY17Jk5cOU75z3WuWqLrVUlWOZyUqpf8Ut4gOaVVacQ4yskrD%2FJgjtEEdtJ3bUetEJUGCP2byBdn5Kai%2FEAZF5uVmYKjMimTOsEw6F0ZSAb%2BI236GVxtCzoaCvv%2F2nF2s%2BfqxlMHxIBzGeC0K115SmI9bf3bHa61fOqIKMilFyowp1XXe8riVx4FhPN%2F6wLpNrsbrPS72kB0p3tBNF3rL0B9xof2oLeqy0aiJxeFIO9v4Alu%2F7De4verLxSvM0%2F9%2BqPg2a%2BjRAhxdG382YafGmyVG2yjqrC8XaF6DncvIYX38l65L%2BJ0pN9%2Fy1jQld3Fds1BRPp%2BpNTT6HqpvtHqOPxG4R%2FHQwFWjzAqlY%2FVayIF2z%2BiGj5SEkbj%2FlZjVEwelvgaESnkEAOqI4vKFATIyHggACyVdhQ5Vv0ZVhlRJKNHUiOJgEOiTMFQirlfu7d7Fzu8ygdOCwgKMuyO1YDAi4m4rVoUmF7m%2BvIfvVt8yT8%2F%2Fyuiv%2Fq%2FE4dg%2FBKxpxjGDDEr4TABjqkAXqvxZf64X%2F%2B3gA9u2jkSk7LtnWYWUogv51S3o9Vj0EnDTAZx6oIj1ASBXU%2BPKlEIL4QT8LIuiYQ0NfSg9TJIBJaWnoUYNjz5idAdJgSpB6C0B%2FboMWR%2FFR5R21W%2F%2FuXlKVruuo%2FmIPIZncNzbzEyCSvkO2zlPD%2FZnfhjhx1aUiUywo1Tx%2FdluuzYBDbOQT0QIQ0k6R6R6%2BNCVOxeJn0C3qGo4Tv&X-Amz-Signature=b95fec9f0b3f6657c2fbb687d1981a54d76bb932b02fbbf0c327d98d8453a305&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCV542U%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuqUZgUknkgoRtoe5HY%2B9jt5ZgV5FyNsLUhAWglIwE3wIhAPgvHQF5SU94BL%2F3THsR6PulzUfYMrNhoVUFPHWxxiWjKv8DCGAQABoMNjM3NDIzMTgzODA1IgwyUQhCMYgo9rQyLvAq3AN%2Bc4%2FXUJrnJ0v1KWN4g5B6GRWmW21dNBU2%2B5qkqrtrL8wF06KoKJeYwy93jrzKA5WYV5D38g2dDRllLN0khQb0i0C%2F4bn1jnXA%2Bepk9MFMsjgMeoCx%2B64cwVTtMhY17Jk5cOU75z3WuWqLrVUlWOZyUqpf8Ut4gOaVVacQ4yskrD%2FJgjtEEdtJ3bUetEJUGCP2byBdn5Kai%2FEAZF5uVmYKjMimTOsEw6F0ZSAb%2BI236GVxtCzoaCvv%2F2nF2s%2BfqxlMHxIBzGeC0K115SmI9bf3bHa61fOqIKMilFyowp1XXe8riVx4FhPN%2F6wLpNrsbrPS72kB0p3tBNF3rL0B9xof2oLeqy0aiJxeFIO9v4Alu%2F7De4verLxSvM0%2F9%2BqPg2a%2BjRAhxdG382YafGmyVG2yjqrC8XaF6DncvIYX38l65L%2BJ0pN9%2Fy1jQld3Fds1BRPp%2BpNTT6HqpvtHqOPxG4R%2FHQwFWjzAqlY%2FVayIF2z%2BiGj5SEkbj%2FlZjVEwelvgaESnkEAOqI4vKFATIyHggACyVdhQ5Vv0ZVhlRJKNHUiOJgEOiTMFQirlfu7d7Fzu8ygdOCwgKMuyO1YDAi4m4rVoUmF7m%2BvIfvVt8yT8%2F%2Fyuiv%2Fq%2FE4dg%2FBKxpxjGDDEr4TABjqkAXqvxZf64X%2F%2B3gA9u2jkSk7LtnWYWUogv51S3o9Vj0EnDTAZx6oIj1ASBXU%2BPKlEIL4QT8LIuiYQ0NfSg9TJIBJaWnoUYNjz5idAdJgSpB6C0B%2FboMWR%2FFR5R21W%2F%2FuXlKVruuo%2FmIPIZncNzbzEyCSvkO2zlPD%2FZnfhjhx1aUiUywo1Tx%2FdluuzYBDbOQT0QIQ0k6R6R6%2BNCVOxeJn0C3qGo4Tv&X-Amz-Signature=c382aa11e3cfd55ba9a60dbb5786364ccf0713749e69ab39e688d1ebd7636ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

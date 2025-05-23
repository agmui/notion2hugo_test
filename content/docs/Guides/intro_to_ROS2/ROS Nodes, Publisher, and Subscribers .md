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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LANLRRC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE6pX4KGeb0hTme%2FTkW3lZbGIr1jdY12UoglUV%2Ff7f0vAiAc377UIbcNtCU0iKIBk8EwBcQX9rUNDo5oZywJh2ORuiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqUZeeNCf7nPIDN4KtwDUlUjNYpGemNI11wp4fQaWgnlYgYhawrj5DtCWtwyeSdi0ZsM8sz4T2%2FXJXlJIJZLBeEaoXjECrZt8UEo4Yl6LNJq9LJhEiU2qQs%2BKr%2BmH%2F0A%2FnQUtS0QuyZrMqdKi98Etu9LFJNEXcsWeTMbzwqTlxfjGZzKPYOddQm9x3Ayv6P%2FvOtNhRAtJhaCk%2FOXHnRTqmMQMuQQIlU%2FdZok2aOWNSOLZoDOGWgIABZfT%2BX62NwHo4kY9UJe5DIk3IA6jmx2Tz%2F0eTTyYZCO0OnmJKqCG3Vf9EJpPHM2vwmfRveisuwbjEdBxbkbMdJnr6JzugGuK1h38QXgvQgYPe8jsz60RNkzZ7Guf9W6Yw%2BpRA%2F4Npb%2FQ2toy47d2GJ%2F1c1b3cPpjq0zhsrdZc%2Be2ZRgEVx7jIB0xtvx63ou%2FQn0qM9kZkI%2B56s1Uk9BdaQM4ELeffEcg7enAE%2FmeCQG%2BVSYuGD%2F6bYEC0%2FtAQSVIQcUqLlnhb80baqbumffvpJiTQ%2Fggz52vengm3%2FmMktoYNPz2bbhA0CmmcGDkdl48TEerTmsce75klaVJHBrOaJrWpw9BMHTG27wah%2F6sJHQT57hi06NS9UTrotGLmmxCfr9gDt23KfiWJEhwDym7%2FFw%2Bcowp8K%2FwQY6pgGXgE624xhiVpFublem9Rj5Orav3awpzwwvNiwcN1oX7A6nXqoyqnTj7UZcBRKrjdUxTRse2aUU9qxIvhJ8hSD3%2F45ShZVIgeu338UePn9oziegBNFPndR3xsgP3q%2FakyiVt36Z13LHzMbrAehfCXGsqk2ljm696D6GSfRRVU%2FdABN3AoNNXYcGSCENuFiLgu76I8AsXGAbXtLiZppEWJo8El6qDx25&X-Amz-Signature=08c4fb7d11f8a74167842b4001aae9f44000e9eb7ae63fd993657b2437fa3a98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LANLRRC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE6pX4KGeb0hTme%2FTkW3lZbGIr1jdY12UoglUV%2Ff7f0vAiAc377UIbcNtCU0iKIBk8EwBcQX9rUNDo5oZywJh2ORuiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqUZeeNCf7nPIDN4KtwDUlUjNYpGemNI11wp4fQaWgnlYgYhawrj5DtCWtwyeSdi0ZsM8sz4T2%2FXJXlJIJZLBeEaoXjECrZt8UEo4Yl6LNJq9LJhEiU2qQs%2BKr%2BmH%2F0A%2FnQUtS0QuyZrMqdKi98Etu9LFJNEXcsWeTMbzwqTlxfjGZzKPYOddQm9x3Ayv6P%2FvOtNhRAtJhaCk%2FOXHnRTqmMQMuQQIlU%2FdZok2aOWNSOLZoDOGWgIABZfT%2BX62NwHo4kY9UJe5DIk3IA6jmx2Tz%2F0eTTyYZCO0OnmJKqCG3Vf9EJpPHM2vwmfRveisuwbjEdBxbkbMdJnr6JzugGuK1h38QXgvQgYPe8jsz60RNkzZ7Guf9W6Yw%2BpRA%2F4Npb%2FQ2toy47d2GJ%2F1c1b3cPpjq0zhsrdZc%2Be2ZRgEVx7jIB0xtvx63ou%2FQn0qM9kZkI%2B56s1Uk9BdaQM4ELeffEcg7enAE%2FmeCQG%2BVSYuGD%2F6bYEC0%2FtAQSVIQcUqLlnhb80baqbumffvpJiTQ%2Fggz52vengm3%2FmMktoYNPz2bbhA0CmmcGDkdl48TEerTmsce75klaVJHBrOaJrWpw9BMHTG27wah%2F6sJHQT57hi06NS9UTrotGLmmxCfr9gDt23KfiWJEhwDym7%2FFw%2Bcowp8K%2FwQY6pgGXgE624xhiVpFublem9Rj5Orav3awpzwwvNiwcN1oX7A6nXqoyqnTj7UZcBRKrjdUxTRse2aUU9qxIvhJ8hSD3%2F45ShZVIgeu338UePn9oziegBNFPndR3xsgP3q%2FakyiVt36Z13LHzMbrAehfCXGsqk2ljm696D6GSfRRVU%2FdABN3AoNNXYcGSCENuFiLgu76I8AsXGAbXtLiZppEWJo8El6qDx25&X-Amz-Signature=305c8bd2d70ffe1d1fa4b489cec95229224e2baae605ff896bc89dce6b89243d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LANLRRC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE6pX4KGeb0hTme%2FTkW3lZbGIr1jdY12UoglUV%2Ff7f0vAiAc377UIbcNtCU0iKIBk8EwBcQX9rUNDo5oZywJh2ORuiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqUZeeNCf7nPIDN4KtwDUlUjNYpGemNI11wp4fQaWgnlYgYhawrj5DtCWtwyeSdi0ZsM8sz4T2%2FXJXlJIJZLBeEaoXjECrZt8UEo4Yl6LNJq9LJhEiU2qQs%2BKr%2BmH%2F0A%2FnQUtS0QuyZrMqdKi98Etu9LFJNEXcsWeTMbzwqTlxfjGZzKPYOddQm9x3Ayv6P%2FvOtNhRAtJhaCk%2FOXHnRTqmMQMuQQIlU%2FdZok2aOWNSOLZoDOGWgIABZfT%2BX62NwHo4kY9UJe5DIk3IA6jmx2Tz%2F0eTTyYZCO0OnmJKqCG3Vf9EJpPHM2vwmfRveisuwbjEdBxbkbMdJnr6JzugGuK1h38QXgvQgYPe8jsz60RNkzZ7Guf9W6Yw%2BpRA%2F4Npb%2FQ2toy47d2GJ%2F1c1b3cPpjq0zhsrdZc%2Be2ZRgEVx7jIB0xtvx63ou%2FQn0qM9kZkI%2B56s1Uk9BdaQM4ELeffEcg7enAE%2FmeCQG%2BVSYuGD%2F6bYEC0%2FtAQSVIQcUqLlnhb80baqbumffvpJiTQ%2Fggz52vengm3%2FmMktoYNPz2bbhA0CmmcGDkdl48TEerTmsce75klaVJHBrOaJrWpw9BMHTG27wah%2F6sJHQT57hi06NS9UTrotGLmmxCfr9gDt23KfiWJEhwDym7%2FFw%2Bcowp8K%2FwQY6pgGXgE624xhiVpFublem9Rj5Orav3awpzwwvNiwcN1oX7A6nXqoyqnTj7UZcBRKrjdUxTRse2aUU9qxIvhJ8hSD3%2F45ShZVIgeu338UePn9oziegBNFPndR3xsgP3q%2FakyiVt36Z13LHzMbrAehfCXGsqk2ljm696D6GSfRRVU%2FdABN3AoNNXYcGSCENuFiLgu76I8AsXGAbXtLiZppEWJo8El6qDx25&X-Amz-Signature=48d283107607e0e42b24fd0d5be8ec5b37f9869a242f56eaeca115a858266e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LANLRRC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE6pX4KGeb0hTme%2FTkW3lZbGIr1jdY12UoglUV%2Ff7f0vAiAc377UIbcNtCU0iKIBk8EwBcQX9rUNDo5oZywJh2ORuiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqUZeeNCf7nPIDN4KtwDUlUjNYpGemNI11wp4fQaWgnlYgYhawrj5DtCWtwyeSdi0ZsM8sz4T2%2FXJXlJIJZLBeEaoXjECrZt8UEo4Yl6LNJq9LJhEiU2qQs%2BKr%2BmH%2F0A%2FnQUtS0QuyZrMqdKi98Etu9LFJNEXcsWeTMbzwqTlxfjGZzKPYOddQm9x3Ayv6P%2FvOtNhRAtJhaCk%2FOXHnRTqmMQMuQQIlU%2FdZok2aOWNSOLZoDOGWgIABZfT%2BX62NwHo4kY9UJe5DIk3IA6jmx2Tz%2F0eTTyYZCO0OnmJKqCG3Vf9EJpPHM2vwmfRveisuwbjEdBxbkbMdJnr6JzugGuK1h38QXgvQgYPe8jsz60RNkzZ7Guf9W6Yw%2BpRA%2F4Npb%2FQ2toy47d2GJ%2F1c1b3cPpjq0zhsrdZc%2Be2ZRgEVx7jIB0xtvx63ou%2FQn0qM9kZkI%2B56s1Uk9BdaQM4ELeffEcg7enAE%2FmeCQG%2BVSYuGD%2F6bYEC0%2FtAQSVIQcUqLlnhb80baqbumffvpJiTQ%2Fggz52vengm3%2FmMktoYNPz2bbhA0CmmcGDkdl48TEerTmsce75klaVJHBrOaJrWpw9BMHTG27wah%2F6sJHQT57hi06NS9UTrotGLmmxCfr9gDt23KfiWJEhwDym7%2FFw%2Bcowp8K%2FwQY6pgGXgE624xhiVpFublem9Rj5Orav3awpzwwvNiwcN1oX7A6nXqoyqnTj7UZcBRKrjdUxTRse2aUU9qxIvhJ8hSD3%2F45ShZVIgeu338UePn9oziegBNFPndR3xsgP3q%2FakyiVt36Z13LHzMbrAehfCXGsqk2ljm696D6GSfRRVU%2FdABN3AoNNXYcGSCENuFiLgu76I8AsXGAbXtLiZppEWJo8El6qDx25&X-Amz-Signature=e1e767064f33181ec8168fd15480f099201c3582739d36ccd243cd5feeca091e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LANLRRC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE6pX4KGeb0hTme%2FTkW3lZbGIr1jdY12UoglUV%2Ff7f0vAiAc377UIbcNtCU0iKIBk8EwBcQX9rUNDo5oZywJh2ORuiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqUZeeNCf7nPIDN4KtwDUlUjNYpGemNI11wp4fQaWgnlYgYhawrj5DtCWtwyeSdi0ZsM8sz4T2%2FXJXlJIJZLBeEaoXjECrZt8UEo4Yl6LNJq9LJhEiU2qQs%2BKr%2BmH%2F0A%2FnQUtS0QuyZrMqdKi98Etu9LFJNEXcsWeTMbzwqTlxfjGZzKPYOddQm9x3Ayv6P%2FvOtNhRAtJhaCk%2FOXHnRTqmMQMuQQIlU%2FdZok2aOWNSOLZoDOGWgIABZfT%2BX62NwHo4kY9UJe5DIk3IA6jmx2Tz%2F0eTTyYZCO0OnmJKqCG3Vf9EJpPHM2vwmfRveisuwbjEdBxbkbMdJnr6JzugGuK1h38QXgvQgYPe8jsz60RNkzZ7Guf9W6Yw%2BpRA%2F4Npb%2FQ2toy47d2GJ%2F1c1b3cPpjq0zhsrdZc%2Be2ZRgEVx7jIB0xtvx63ou%2FQn0qM9kZkI%2B56s1Uk9BdaQM4ELeffEcg7enAE%2FmeCQG%2BVSYuGD%2F6bYEC0%2FtAQSVIQcUqLlnhb80baqbumffvpJiTQ%2Fggz52vengm3%2FmMktoYNPz2bbhA0CmmcGDkdl48TEerTmsce75klaVJHBrOaJrWpw9BMHTG27wah%2F6sJHQT57hi06NS9UTrotGLmmxCfr9gDt23KfiWJEhwDym7%2FFw%2Bcowp8K%2FwQY6pgGXgE624xhiVpFublem9Rj5Orav3awpzwwvNiwcN1oX7A6nXqoyqnTj7UZcBRKrjdUxTRse2aUU9qxIvhJ8hSD3%2F45ShZVIgeu338UePn9oziegBNFPndR3xsgP3q%2FakyiVt36Z13LHzMbrAehfCXGsqk2ljm696D6GSfRRVU%2FdABN3AoNNXYcGSCENuFiLgu76I8AsXGAbXtLiZppEWJo8El6qDx25&X-Amz-Signature=d39041320c10e8f389297ff720b4138aa6157e0ecd193a4efd9707f42963dd5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LANLRRC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE6pX4KGeb0hTme%2FTkW3lZbGIr1jdY12UoglUV%2Ff7f0vAiAc377UIbcNtCU0iKIBk8EwBcQX9rUNDo5oZywJh2ORuiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqUZeeNCf7nPIDN4KtwDUlUjNYpGemNI11wp4fQaWgnlYgYhawrj5DtCWtwyeSdi0ZsM8sz4T2%2FXJXlJIJZLBeEaoXjECrZt8UEo4Yl6LNJq9LJhEiU2qQs%2BKr%2BmH%2F0A%2FnQUtS0QuyZrMqdKi98Etu9LFJNEXcsWeTMbzwqTlxfjGZzKPYOddQm9x3Ayv6P%2FvOtNhRAtJhaCk%2FOXHnRTqmMQMuQQIlU%2FdZok2aOWNSOLZoDOGWgIABZfT%2BX62NwHo4kY9UJe5DIk3IA6jmx2Tz%2F0eTTyYZCO0OnmJKqCG3Vf9EJpPHM2vwmfRveisuwbjEdBxbkbMdJnr6JzugGuK1h38QXgvQgYPe8jsz60RNkzZ7Guf9W6Yw%2BpRA%2F4Npb%2FQ2toy47d2GJ%2F1c1b3cPpjq0zhsrdZc%2Be2ZRgEVx7jIB0xtvx63ou%2FQn0qM9kZkI%2B56s1Uk9BdaQM4ELeffEcg7enAE%2FmeCQG%2BVSYuGD%2F6bYEC0%2FtAQSVIQcUqLlnhb80baqbumffvpJiTQ%2Fggz52vengm3%2FmMktoYNPz2bbhA0CmmcGDkdl48TEerTmsce75klaVJHBrOaJrWpw9BMHTG27wah%2F6sJHQT57hi06NS9UTrotGLmmxCfr9gDt23KfiWJEhwDym7%2FFw%2Bcowp8K%2FwQY6pgGXgE624xhiVpFublem9Rj5Orav3awpzwwvNiwcN1oX7A6nXqoyqnTj7UZcBRKrjdUxTRse2aUU9qxIvhJ8hSD3%2F45ShZVIgeu338UePn9oziegBNFPndR3xsgP3q%2FakyiVt36Z13LHzMbrAehfCXGsqk2ljm696D6GSfRRVU%2FdABN3AoNNXYcGSCENuFiLgu76I8AsXGAbXtLiZppEWJo8El6qDx25&X-Amz-Signature=3bfd62720fe548bd3440722c657bf55123bd99cb9a27c26b91c31e482c05bf94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LANLRRC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE6pX4KGeb0hTme%2FTkW3lZbGIr1jdY12UoglUV%2Ff7f0vAiAc377UIbcNtCU0iKIBk8EwBcQX9rUNDo5oZywJh2ORuiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqUZeeNCf7nPIDN4KtwDUlUjNYpGemNI11wp4fQaWgnlYgYhawrj5DtCWtwyeSdi0ZsM8sz4T2%2FXJXlJIJZLBeEaoXjECrZt8UEo4Yl6LNJq9LJhEiU2qQs%2BKr%2BmH%2F0A%2FnQUtS0QuyZrMqdKi98Etu9LFJNEXcsWeTMbzwqTlxfjGZzKPYOddQm9x3Ayv6P%2FvOtNhRAtJhaCk%2FOXHnRTqmMQMuQQIlU%2FdZok2aOWNSOLZoDOGWgIABZfT%2BX62NwHo4kY9UJe5DIk3IA6jmx2Tz%2F0eTTyYZCO0OnmJKqCG3Vf9EJpPHM2vwmfRveisuwbjEdBxbkbMdJnr6JzugGuK1h38QXgvQgYPe8jsz60RNkzZ7Guf9W6Yw%2BpRA%2F4Npb%2FQ2toy47d2GJ%2F1c1b3cPpjq0zhsrdZc%2Be2ZRgEVx7jIB0xtvx63ou%2FQn0qM9kZkI%2B56s1Uk9BdaQM4ELeffEcg7enAE%2FmeCQG%2BVSYuGD%2F6bYEC0%2FtAQSVIQcUqLlnhb80baqbumffvpJiTQ%2Fggz52vengm3%2FmMktoYNPz2bbhA0CmmcGDkdl48TEerTmsce75klaVJHBrOaJrWpw9BMHTG27wah%2F6sJHQT57hi06NS9UTrotGLmmxCfr9gDt23KfiWJEhwDym7%2FFw%2Bcowp8K%2FwQY6pgGXgE624xhiVpFublem9Rj5Orav3awpzwwvNiwcN1oX7A6nXqoyqnTj7UZcBRKrjdUxTRse2aUU9qxIvhJ8hSD3%2F45ShZVIgeu338UePn9oziegBNFPndR3xsgP3q%2FakyiVt36Z13LHzMbrAehfCXGsqk2ljm696D6GSfRRVU%2FdABN3AoNNXYcGSCENuFiLgu76I8AsXGAbXtLiZppEWJo8El6qDx25&X-Amz-Signature=38a9a6a2dd8ab998f4dd8a5fc6899ae4a41d105e58f86ffd94efa5d1f72fd340&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LANLRRC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE6pX4KGeb0hTme%2FTkW3lZbGIr1jdY12UoglUV%2Ff7f0vAiAc377UIbcNtCU0iKIBk8EwBcQX9rUNDo5oZywJh2ORuiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtqUZeeNCf7nPIDN4KtwDUlUjNYpGemNI11wp4fQaWgnlYgYhawrj5DtCWtwyeSdi0ZsM8sz4T2%2FXJXlJIJZLBeEaoXjECrZt8UEo4Yl6LNJq9LJhEiU2qQs%2BKr%2BmH%2F0A%2FnQUtS0QuyZrMqdKi98Etu9LFJNEXcsWeTMbzwqTlxfjGZzKPYOddQm9x3Ayv6P%2FvOtNhRAtJhaCk%2FOXHnRTqmMQMuQQIlU%2FdZok2aOWNSOLZoDOGWgIABZfT%2BX62NwHo4kY9UJe5DIk3IA6jmx2Tz%2F0eTTyYZCO0OnmJKqCG3Vf9EJpPHM2vwmfRveisuwbjEdBxbkbMdJnr6JzugGuK1h38QXgvQgYPe8jsz60RNkzZ7Guf9W6Yw%2BpRA%2F4Npb%2FQ2toy47d2GJ%2F1c1b3cPpjq0zhsrdZc%2Be2ZRgEVx7jIB0xtvx63ou%2FQn0qM9kZkI%2B56s1Uk9BdaQM4ELeffEcg7enAE%2FmeCQG%2BVSYuGD%2F6bYEC0%2FtAQSVIQcUqLlnhb80baqbumffvpJiTQ%2Fggz52vengm3%2FmMktoYNPz2bbhA0CmmcGDkdl48TEerTmsce75klaVJHBrOaJrWpw9BMHTG27wah%2F6sJHQT57hi06NS9UTrotGLmmxCfr9gDt23KfiWJEhwDym7%2FFw%2Bcowp8K%2FwQY6pgGXgE624xhiVpFublem9Rj5Orav3awpzwwvNiwcN1oX7A6nXqoyqnTj7UZcBRKrjdUxTRse2aUU9qxIvhJ8hSD3%2F45ShZVIgeu338UePn9oziegBNFPndR3xsgP3q%2FakyiVt36Z13LHzMbrAehfCXGsqk2ljm696D6GSfRRVU%2FdABN3AoNNXYcGSCENuFiLgu76I8AsXGAbXtLiZppEWJo8El6qDx25&X-Amz-Signature=df9005a76eeca21f9748b009cc8adaaa9d6fa7b664b7bc35dc6ae9f0d28050b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

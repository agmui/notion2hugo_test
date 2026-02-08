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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMLJXMO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYF4%2Fmh9gA%2FZTv7RrmyjDxBxadMXqhpZe9TR5fb56uAIhANqf0%2Bg1aevAoLP1pQbHt0M5nth5k9YPCg7T66I%2BopJyKv8DCGwQABoMNjM3NDIzMTgzODA1Igz32I8tQ3HJs7TrNXoq3AMxoK%2FfivhvPHIn0YY0NrnarJv0%2FncO%2B%2F0oSMDaT0zq5t1Z3LUKoqHsw8Lyuc%2FFEEfeSD5JxNOUm1fJ0taDIX5B2WH9wj9%2FQWNsG%2BN5toOZkOISI%2FcZLWgFxEz7iyU0cphxF7IPbYM3WHgqBCnDoZQMwynxQC37dn3RKXX%2FY%2BJKEzFERqjjIDZAaFXzFq9j1Kl15LdyvpvdKmTMtiT%2BCk2gl4COzuuO1VpVrjgAPeCuVo0Sr%2FFXYxP3%2F2ziU0ntdpewxr3Vnt%2BwSvSJ72%2F5cCCIkuArwhXHrExcNoM5Taewx2MW1rXe0Gu3K0fbclqCMlpUioj5KZaRLgA9C2wGmO8ypSfYB27Jm4ss%2B6AigWBRGUJj7IXwlD3XibeX52%2Bh%2F3noa%2BWvSTXeE0zZ%2BJdRsCkJpdiFnbYBI4%2BkDCWeYVvOgzAj8piErmpPWBfwUadMf0xMyIvkaRuCv%2FIW3LuNnKiWcRY7gZuba%2Bdhz2Lso6VUt%2BD5IxphA5IQsHkG0zKARw0rYHfeMIYj5S1UMcW7AP%2BhQJXymTYCEI17yw4qlt0kzxO0zyq2eFg6wgQncSC0XtoU5IXsV7v9ntDy18PP4lHxZOEbdIDArz74EqGyRyVnrb1Qdg8X%2FiNiCWt1DzCV6p%2FMBjqkAQMVqAIc44N9%2BMc316VL%2BBlScGuXh3Utku3yOSzyiEIMROu9jlUV03WbZFzBcRb29tMGu%2BZTfMhl45nFia16EkjTntGZ38JEpLKycP4V5O8ZGwYetuLjF0cGbt9CarRP14DNBBfDoJrtT%2BAlR9BIetuCXnFZB1C5yELMvGp5aFffG08WNDYBOjElthMs0KZ6EmWKLtW6a%2FUF%2BI%2FLYlSRK9M48PEO&X-Amz-Signature=6634e5edaadf57183b270f8ec9fb658174fa55fe4055e17a8944bb7f28d42fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMLJXMO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYF4%2Fmh9gA%2FZTv7RrmyjDxBxadMXqhpZe9TR5fb56uAIhANqf0%2Bg1aevAoLP1pQbHt0M5nth5k9YPCg7T66I%2BopJyKv8DCGwQABoMNjM3NDIzMTgzODA1Igz32I8tQ3HJs7TrNXoq3AMxoK%2FfivhvPHIn0YY0NrnarJv0%2FncO%2B%2F0oSMDaT0zq5t1Z3LUKoqHsw8Lyuc%2FFEEfeSD5JxNOUm1fJ0taDIX5B2WH9wj9%2FQWNsG%2BN5toOZkOISI%2FcZLWgFxEz7iyU0cphxF7IPbYM3WHgqBCnDoZQMwynxQC37dn3RKXX%2FY%2BJKEzFERqjjIDZAaFXzFq9j1Kl15LdyvpvdKmTMtiT%2BCk2gl4COzuuO1VpVrjgAPeCuVo0Sr%2FFXYxP3%2F2ziU0ntdpewxr3Vnt%2BwSvSJ72%2F5cCCIkuArwhXHrExcNoM5Taewx2MW1rXe0Gu3K0fbclqCMlpUioj5KZaRLgA9C2wGmO8ypSfYB27Jm4ss%2B6AigWBRGUJj7IXwlD3XibeX52%2Bh%2F3noa%2BWvSTXeE0zZ%2BJdRsCkJpdiFnbYBI4%2BkDCWeYVvOgzAj8piErmpPWBfwUadMf0xMyIvkaRuCv%2FIW3LuNnKiWcRY7gZuba%2Bdhz2Lso6VUt%2BD5IxphA5IQsHkG0zKARw0rYHfeMIYj5S1UMcW7AP%2BhQJXymTYCEI17yw4qlt0kzxO0zyq2eFg6wgQncSC0XtoU5IXsV7v9ntDy18PP4lHxZOEbdIDArz74EqGyRyVnrb1Qdg8X%2FiNiCWt1DzCV6p%2FMBjqkAQMVqAIc44N9%2BMc316VL%2BBlScGuXh3Utku3yOSzyiEIMROu9jlUV03WbZFzBcRb29tMGu%2BZTfMhl45nFia16EkjTntGZ38JEpLKycP4V5O8ZGwYetuLjF0cGbt9CarRP14DNBBfDoJrtT%2BAlR9BIetuCXnFZB1C5yELMvGp5aFffG08WNDYBOjElthMs0KZ6EmWKLtW6a%2FUF%2BI%2FLYlSRK9M48PEO&X-Amz-Signature=2e70ed21c5f2eb065c25c05d9eed692a2a4a53f1c294489e8cbab47c3b800dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMLJXMO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYF4%2Fmh9gA%2FZTv7RrmyjDxBxadMXqhpZe9TR5fb56uAIhANqf0%2Bg1aevAoLP1pQbHt0M5nth5k9YPCg7T66I%2BopJyKv8DCGwQABoMNjM3NDIzMTgzODA1Igz32I8tQ3HJs7TrNXoq3AMxoK%2FfivhvPHIn0YY0NrnarJv0%2FncO%2B%2F0oSMDaT0zq5t1Z3LUKoqHsw8Lyuc%2FFEEfeSD5JxNOUm1fJ0taDIX5B2WH9wj9%2FQWNsG%2BN5toOZkOISI%2FcZLWgFxEz7iyU0cphxF7IPbYM3WHgqBCnDoZQMwynxQC37dn3RKXX%2FY%2BJKEzFERqjjIDZAaFXzFq9j1Kl15LdyvpvdKmTMtiT%2BCk2gl4COzuuO1VpVrjgAPeCuVo0Sr%2FFXYxP3%2F2ziU0ntdpewxr3Vnt%2BwSvSJ72%2F5cCCIkuArwhXHrExcNoM5Taewx2MW1rXe0Gu3K0fbclqCMlpUioj5KZaRLgA9C2wGmO8ypSfYB27Jm4ss%2B6AigWBRGUJj7IXwlD3XibeX52%2Bh%2F3noa%2BWvSTXeE0zZ%2BJdRsCkJpdiFnbYBI4%2BkDCWeYVvOgzAj8piErmpPWBfwUadMf0xMyIvkaRuCv%2FIW3LuNnKiWcRY7gZuba%2Bdhz2Lso6VUt%2BD5IxphA5IQsHkG0zKARw0rYHfeMIYj5S1UMcW7AP%2BhQJXymTYCEI17yw4qlt0kzxO0zyq2eFg6wgQncSC0XtoU5IXsV7v9ntDy18PP4lHxZOEbdIDArz74EqGyRyVnrb1Qdg8X%2FiNiCWt1DzCV6p%2FMBjqkAQMVqAIc44N9%2BMc316VL%2BBlScGuXh3Utku3yOSzyiEIMROu9jlUV03WbZFzBcRb29tMGu%2BZTfMhl45nFia16EkjTntGZ38JEpLKycP4V5O8ZGwYetuLjF0cGbt9CarRP14DNBBfDoJrtT%2BAlR9BIetuCXnFZB1C5yELMvGp5aFffG08WNDYBOjElthMs0KZ6EmWKLtW6a%2FUF%2BI%2FLYlSRK9M48PEO&X-Amz-Signature=4f9bf5412be751b10609324b2acfdce9e9dabcb4273733db0392000bc60e53a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMLJXMO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYF4%2Fmh9gA%2FZTv7RrmyjDxBxadMXqhpZe9TR5fb56uAIhANqf0%2Bg1aevAoLP1pQbHt0M5nth5k9YPCg7T66I%2BopJyKv8DCGwQABoMNjM3NDIzMTgzODA1Igz32I8tQ3HJs7TrNXoq3AMxoK%2FfivhvPHIn0YY0NrnarJv0%2FncO%2B%2F0oSMDaT0zq5t1Z3LUKoqHsw8Lyuc%2FFEEfeSD5JxNOUm1fJ0taDIX5B2WH9wj9%2FQWNsG%2BN5toOZkOISI%2FcZLWgFxEz7iyU0cphxF7IPbYM3WHgqBCnDoZQMwynxQC37dn3RKXX%2FY%2BJKEzFERqjjIDZAaFXzFq9j1Kl15LdyvpvdKmTMtiT%2BCk2gl4COzuuO1VpVrjgAPeCuVo0Sr%2FFXYxP3%2F2ziU0ntdpewxr3Vnt%2BwSvSJ72%2F5cCCIkuArwhXHrExcNoM5Taewx2MW1rXe0Gu3K0fbclqCMlpUioj5KZaRLgA9C2wGmO8ypSfYB27Jm4ss%2B6AigWBRGUJj7IXwlD3XibeX52%2Bh%2F3noa%2BWvSTXeE0zZ%2BJdRsCkJpdiFnbYBI4%2BkDCWeYVvOgzAj8piErmpPWBfwUadMf0xMyIvkaRuCv%2FIW3LuNnKiWcRY7gZuba%2Bdhz2Lso6VUt%2BD5IxphA5IQsHkG0zKARw0rYHfeMIYj5S1UMcW7AP%2BhQJXymTYCEI17yw4qlt0kzxO0zyq2eFg6wgQncSC0XtoU5IXsV7v9ntDy18PP4lHxZOEbdIDArz74EqGyRyVnrb1Qdg8X%2FiNiCWt1DzCV6p%2FMBjqkAQMVqAIc44N9%2BMc316VL%2BBlScGuXh3Utku3yOSzyiEIMROu9jlUV03WbZFzBcRb29tMGu%2BZTfMhl45nFia16EkjTntGZ38JEpLKycP4V5O8ZGwYetuLjF0cGbt9CarRP14DNBBfDoJrtT%2BAlR9BIetuCXnFZB1C5yELMvGp5aFffG08WNDYBOjElthMs0KZ6EmWKLtW6a%2FUF%2BI%2FLYlSRK9M48PEO&X-Amz-Signature=5ef8eff68d9f4a6eaefee811b2e8dd3e9ca8b99b0f623ba688caed49edf0db07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMLJXMO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYF4%2Fmh9gA%2FZTv7RrmyjDxBxadMXqhpZe9TR5fb56uAIhANqf0%2Bg1aevAoLP1pQbHt0M5nth5k9YPCg7T66I%2BopJyKv8DCGwQABoMNjM3NDIzMTgzODA1Igz32I8tQ3HJs7TrNXoq3AMxoK%2FfivhvPHIn0YY0NrnarJv0%2FncO%2B%2F0oSMDaT0zq5t1Z3LUKoqHsw8Lyuc%2FFEEfeSD5JxNOUm1fJ0taDIX5B2WH9wj9%2FQWNsG%2BN5toOZkOISI%2FcZLWgFxEz7iyU0cphxF7IPbYM3WHgqBCnDoZQMwynxQC37dn3RKXX%2FY%2BJKEzFERqjjIDZAaFXzFq9j1Kl15LdyvpvdKmTMtiT%2BCk2gl4COzuuO1VpVrjgAPeCuVo0Sr%2FFXYxP3%2F2ziU0ntdpewxr3Vnt%2BwSvSJ72%2F5cCCIkuArwhXHrExcNoM5Taewx2MW1rXe0Gu3K0fbclqCMlpUioj5KZaRLgA9C2wGmO8ypSfYB27Jm4ss%2B6AigWBRGUJj7IXwlD3XibeX52%2Bh%2F3noa%2BWvSTXeE0zZ%2BJdRsCkJpdiFnbYBI4%2BkDCWeYVvOgzAj8piErmpPWBfwUadMf0xMyIvkaRuCv%2FIW3LuNnKiWcRY7gZuba%2Bdhz2Lso6VUt%2BD5IxphA5IQsHkG0zKARw0rYHfeMIYj5S1UMcW7AP%2BhQJXymTYCEI17yw4qlt0kzxO0zyq2eFg6wgQncSC0XtoU5IXsV7v9ntDy18PP4lHxZOEbdIDArz74EqGyRyVnrb1Qdg8X%2FiNiCWt1DzCV6p%2FMBjqkAQMVqAIc44N9%2BMc316VL%2BBlScGuXh3Utku3yOSzyiEIMROu9jlUV03WbZFzBcRb29tMGu%2BZTfMhl45nFia16EkjTntGZ38JEpLKycP4V5O8ZGwYetuLjF0cGbt9CarRP14DNBBfDoJrtT%2BAlR9BIetuCXnFZB1C5yELMvGp5aFffG08WNDYBOjElthMs0KZ6EmWKLtW6a%2FUF%2BI%2FLYlSRK9M48PEO&X-Amz-Signature=ec0eedc07440fb0791073729ea42514d97ce2d81979c0c6b0c75434fabb74680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMLJXMO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYF4%2Fmh9gA%2FZTv7RrmyjDxBxadMXqhpZe9TR5fb56uAIhANqf0%2Bg1aevAoLP1pQbHt0M5nth5k9YPCg7T66I%2BopJyKv8DCGwQABoMNjM3NDIzMTgzODA1Igz32I8tQ3HJs7TrNXoq3AMxoK%2FfivhvPHIn0YY0NrnarJv0%2FncO%2B%2F0oSMDaT0zq5t1Z3LUKoqHsw8Lyuc%2FFEEfeSD5JxNOUm1fJ0taDIX5B2WH9wj9%2FQWNsG%2BN5toOZkOISI%2FcZLWgFxEz7iyU0cphxF7IPbYM3WHgqBCnDoZQMwynxQC37dn3RKXX%2FY%2BJKEzFERqjjIDZAaFXzFq9j1Kl15LdyvpvdKmTMtiT%2BCk2gl4COzuuO1VpVrjgAPeCuVo0Sr%2FFXYxP3%2F2ziU0ntdpewxr3Vnt%2BwSvSJ72%2F5cCCIkuArwhXHrExcNoM5Taewx2MW1rXe0Gu3K0fbclqCMlpUioj5KZaRLgA9C2wGmO8ypSfYB27Jm4ss%2B6AigWBRGUJj7IXwlD3XibeX52%2Bh%2F3noa%2BWvSTXeE0zZ%2BJdRsCkJpdiFnbYBI4%2BkDCWeYVvOgzAj8piErmpPWBfwUadMf0xMyIvkaRuCv%2FIW3LuNnKiWcRY7gZuba%2Bdhz2Lso6VUt%2BD5IxphA5IQsHkG0zKARw0rYHfeMIYj5S1UMcW7AP%2BhQJXymTYCEI17yw4qlt0kzxO0zyq2eFg6wgQncSC0XtoU5IXsV7v9ntDy18PP4lHxZOEbdIDArz74EqGyRyVnrb1Qdg8X%2FiNiCWt1DzCV6p%2FMBjqkAQMVqAIc44N9%2BMc316VL%2BBlScGuXh3Utku3yOSzyiEIMROu9jlUV03WbZFzBcRb29tMGu%2BZTfMhl45nFia16EkjTntGZ38JEpLKycP4V5O8ZGwYetuLjF0cGbt9CarRP14DNBBfDoJrtT%2BAlR9BIetuCXnFZB1C5yELMvGp5aFffG08WNDYBOjElthMs0KZ6EmWKLtW6a%2FUF%2BI%2FLYlSRK9M48PEO&X-Amz-Signature=4dcd00bfc0a096dee0f1f74d005ea76d81796d2e7d7ecef53741aabb9593e496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMLJXMO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYF4%2Fmh9gA%2FZTv7RrmyjDxBxadMXqhpZe9TR5fb56uAIhANqf0%2Bg1aevAoLP1pQbHt0M5nth5k9YPCg7T66I%2BopJyKv8DCGwQABoMNjM3NDIzMTgzODA1Igz32I8tQ3HJs7TrNXoq3AMxoK%2FfivhvPHIn0YY0NrnarJv0%2FncO%2B%2F0oSMDaT0zq5t1Z3LUKoqHsw8Lyuc%2FFEEfeSD5JxNOUm1fJ0taDIX5B2WH9wj9%2FQWNsG%2BN5toOZkOISI%2FcZLWgFxEz7iyU0cphxF7IPbYM3WHgqBCnDoZQMwynxQC37dn3RKXX%2FY%2BJKEzFERqjjIDZAaFXzFq9j1Kl15LdyvpvdKmTMtiT%2BCk2gl4COzuuO1VpVrjgAPeCuVo0Sr%2FFXYxP3%2F2ziU0ntdpewxr3Vnt%2BwSvSJ72%2F5cCCIkuArwhXHrExcNoM5Taewx2MW1rXe0Gu3K0fbclqCMlpUioj5KZaRLgA9C2wGmO8ypSfYB27Jm4ss%2B6AigWBRGUJj7IXwlD3XibeX52%2Bh%2F3noa%2BWvSTXeE0zZ%2BJdRsCkJpdiFnbYBI4%2BkDCWeYVvOgzAj8piErmpPWBfwUadMf0xMyIvkaRuCv%2FIW3LuNnKiWcRY7gZuba%2Bdhz2Lso6VUt%2BD5IxphA5IQsHkG0zKARw0rYHfeMIYj5S1UMcW7AP%2BhQJXymTYCEI17yw4qlt0kzxO0zyq2eFg6wgQncSC0XtoU5IXsV7v9ntDy18PP4lHxZOEbdIDArz74EqGyRyVnrb1Qdg8X%2FiNiCWt1DzCV6p%2FMBjqkAQMVqAIc44N9%2BMc316VL%2BBlScGuXh3Utku3yOSzyiEIMROu9jlUV03WbZFzBcRb29tMGu%2BZTfMhl45nFia16EkjTntGZ38JEpLKycP4V5O8ZGwYetuLjF0cGbt9CarRP14DNBBfDoJrtT%2BAlR9BIetuCXnFZB1C5yELMvGp5aFffG08WNDYBOjElthMs0KZ6EmWKLtW6a%2FUF%2BI%2FLYlSRK9M48PEO&X-Amz-Signature=b2d8cfd73d60ebbc3cb9827316009e91545c8fb13ca092e3672df8275f95342e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMLJXMO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYF4%2Fmh9gA%2FZTv7RrmyjDxBxadMXqhpZe9TR5fb56uAIhANqf0%2Bg1aevAoLP1pQbHt0M5nth5k9YPCg7T66I%2BopJyKv8DCGwQABoMNjM3NDIzMTgzODA1Igz32I8tQ3HJs7TrNXoq3AMxoK%2FfivhvPHIn0YY0NrnarJv0%2FncO%2B%2F0oSMDaT0zq5t1Z3LUKoqHsw8Lyuc%2FFEEfeSD5JxNOUm1fJ0taDIX5B2WH9wj9%2FQWNsG%2BN5toOZkOISI%2FcZLWgFxEz7iyU0cphxF7IPbYM3WHgqBCnDoZQMwynxQC37dn3RKXX%2FY%2BJKEzFERqjjIDZAaFXzFq9j1Kl15LdyvpvdKmTMtiT%2BCk2gl4COzuuO1VpVrjgAPeCuVo0Sr%2FFXYxP3%2F2ziU0ntdpewxr3Vnt%2BwSvSJ72%2F5cCCIkuArwhXHrExcNoM5Taewx2MW1rXe0Gu3K0fbclqCMlpUioj5KZaRLgA9C2wGmO8ypSfYB27Jm4ss%2B6AigWBRGUJj7IXwlD3XibeX52%2Bh%2F3noa%2BWvSTXeE0zZ%2BJdRsCkJpdiFnbYBI4%2BkDCWeYVvOgzAj8piErmpPWBfwUadMf0xMyIvkaRuCv%2FIW3LuNnKiWcRY7gZuba%2Bdhz2Lso6VUt%2BD5IxphA5IQsHkG0zKARw0rYHfeMIYj5S1UMcW7AP%2BhQJXymTYCEI17yw4qlt0kzxO0zyq2eFg6wgQncSC0XtoU5IXsV7v9ntDy18PP4lHxZOEbdIDArz74EqGyRyVnrb1Qdg8X%2FiNiCWt1DzCV6p%2FMBjqkAQMVqAIc44N9%2BMc316VL%2BBlScGuXh3Utku3yOSzyiEIMROu9jlUV03WbZFzBcRb29tMGu%2BZTfMhl45nFia16EkjTntGZ38JEpLKycP4V5O8ZGwYetuLjF0cGbt9CarRP14DNBBfDoJrtT%2BAlR9BIetuCXnFZB1C5yELMvGp5aFffG08WNDYBOjElthMs0KZ6EmWKLtW6a%2FUF%2BI%2FLYlSRK9M48PEO&X-Amz-Signature=16a2fc7661b70471d5fff3c92f6d169bdc5f7d9a99e2f20c8418db2ad817cbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

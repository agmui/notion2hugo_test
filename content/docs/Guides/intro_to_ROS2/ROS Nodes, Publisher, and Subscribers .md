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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZ75LRQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6KuVvKTdDsxHlCrZz1SF5Jhv6%2Fnl1VT1SFSwHn5vEOAiB6EALLi%2BVgaDGGOWu9xzv%2B2F%2Fvd%2FlxnpiMjK8p8HAQJyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYATHQQbeu%2FHZXR7KtwDReLYQwk9Xevm7dJUaqeu%2Fc%2BniIviXf1jnorlvOGzxXYxX%2BcQVMbXqdApujPzQNA8HZVVH3%2B7KGnY9lD6dkCX%2FQnKjHtCUkmqx2zKb9boJ6OJE4xweP0aM1IKio3SYukD5uIv04MQG6pUnYCDAPj%2B9AKhI30EYlIj4%2Btqqtl2BrmXqxZGBM14f0VAmwj1OJcRRgELCt9T3XT%2B6UyLjh4YlRZh7L7ANrvtlBKCyoS6EUqGs38p%2FhBRLHcT2GZuUxzPQZj19jOpApcr3fonEo1xLKkFew0tqfciwzvv0LTexsEFnNR%2FLu5DNei5e4K5q9QRH%2Fn691D7by4h76W4Se5MXz%2B3%2Be9g%2FE3TKavf7ummSwF9xlB%2Fxp8X7k6mcmMk8N6UDfXs3dYFF4%2FaqZyijQBnnIjBzEbg%2BFcXh7l0WCAYEbJWtVh1V8q9eIrZtLP%2BXzJ8fb%2BTj9pwP6HlzYBHmF%2BjXsMBI9gtSvVJT%2BlZwxTkXtohUsd7r61sT2Qtkj7YG1s0GXGwsn741iBTfcmR9LD0yJDu395YO1AYvueS1T6hY0j54ScfeCKHHKMgEv82c1Gb%2FwVqcxwP1T5nAOau80%2BXGQ%2BONv68k%2BoJbLLd%2FhzAn%2Fii9%2Bef5KvsvDybYskwlJmdwgY6pgGbCbWWjuDZri2vHOLLCDiuBpprFwyldphjNJNnKuUjEhN6lDmVUTZHe%2BE%2Fa6daYVApxqFhhc3ObutTtTBXmTjJ7ANy8FQ3XFpAg42eqAdIfvwHgfADT%2FyOnheiD5FauyPiwJrS3xSyjckIW8x2h1ZIIU7PZliQS6aHyasEkLYoSwmIKuOnM%2Bx4NDeYFd2JtkqXBueJ%2F2TlHxl3bu6%2FNG7E96SqEv%2Fm&X-Amz-Signature=fd35fa4ad22460edf63d9344dda0c6351a568b93dd0a225a31d395fb8d05b6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZ75LRQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6KuVvKTdDsxHlCrZz1SF5Jhv6%2Fnl1VT1SFSwHn5vEOAiB6EALLi%2BVgaDGGOWu9xzv%2B2F%2Fvd%2FlxnpiMjK8p8HAQJyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYATHQQbeu%2FHZXR7KtwDReLYQwk9Xevm7dJUaqeu%2Fc%2BniIviXf1jnorlvOGzxXYxX%2BcQVMbXqdApujPzQNA8HZVVH3%2B7KGnY9lD6dkCX%2FQnKjHtCUkmqx2zKb9boJ6OJE4xweP0aM1IKio3SYukD5uIv04MQG6pUnYCDAPj%2B9AKhI30EYlIj4%2Btqqtl2BrmXqxZGBM14f0VAmwj1OJcRRgELCt9T3XT%2B6UyLjh4YlRZh7L7ANrvtlBKCyoS6EUqGs38p%2FhBRLHcT2GZuUxzPQZj19jOpApcr3fonEo1xLKkFew0tqfciwzvv0LTexsEFnNR%2FLu5DNei5e4K5q9QRH%2Fn691D7by4h76W4Se5MXz%2B3%2Be9g%2FE3TKavf7ummSwF9xlB%2Fxp8X7k6mcmMk8N6UDfXs3dYFF4%2FaqZyijQBnnIjBzEbg%2BFcXh7l0WCAYEbJWtVh1V8q9eIrZtLP%2BXzJ8fb%2BTj9pwP6HlzYBHmF%2BjXsMBI9gtSvVJT%2BlZwxTkXtohUsd7r61sT2Qtkj7YG1s0GXGwsn741iBTfcmR9LD0yJDu395YO1AYvueS1T6hY0j54ScfeCKHHKMgEv82c1Gb%2FwVqcxwP1T5nAOau80%2BXGQ%2BONv68k%2BoJbLLd%2FhzAn%2Fii9%2Bef5KvsvDybYskwlJmdwgY6pgGbCbWWjuDZri2vHOLLCDiuBpprFwyldphjNJNnKuUjEhN6lDmVUTZHe%2BE%2Fa6daYVApxqFhhc3ObutTtTBXmTjJ7ANy8FQ3XFpAg42eqAdIfvwHgfADT%2FyOnheiD5FauyPiwJrS3xSyjckIW8x2h1ZIIU7PZliQS6aHyasEkLYoSwmIKuOnM%2Bx4NDeYFd2JtkqXBueJ%2F2TlHxl3bu6%2FNG7E96SqEv%2Fm&X-Amz-Signature=dc3beaf2fda73c885f050055b9a68c68508dcebe74e4bbfbb49dbb71e00fb236&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZ75LRQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6KuVvKTdDsxHlCrZz1SF5Jhv6%2Fnl1VT1SFSwHn5vEOAiB6EALLi%2BVgaDGGOWu9xzv%2B2F%2Fvd%2FlxnpiMjK8p8HAQJyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYATHQQbeu%2FHZXR7KtwDReLYQwk9Xevm7dJUaqeu%2Fc%2BniIviXf1jnorlvOGzxXYxX%2BcQVMbXqdApujPzQNA8HZVVH3%2B7KGnY9lD6dkCX%2FQnKjHtCUkmqx2zKb9boJ6OJE4xweP0aM1IKio3SYukD5uIv04MQG6pUnYCDAPj%2B9AKhI30EYlIj4%2Btqqtl2BrmXqxZGBM14f0VAmwj1OJcRRgELCt9T3XT%2B6UyLjh4YlRZh7L7ANrvtlBKCyoS6EUqGs38p%2FhBRLHcT2GZuUxzPQZj19jOpApcr3fonEo1xLKkFew0tqfciwzvv0LTexsEFnNR%2FLu5DNei5e4K5q9QRH%2Fn691D7by4h76W4Se5MXz%2B3%2Be9g%2FE3TKavf7ummSwF9xlB%2Fxp8X7k6mcmMk8N6UDfXs3dYFF4%2FaqZyijQBnnIjBzEbg%2BFcXh7l0WCAYEbJWtVh1V8q9eIrZtLP%2BXzJ8fb%2BTj9pwP6HlzYBHmF%2BjXsMBI9gtSvVJT%2BlZwxTkXtohUsd7r61sT2Qtkj7YG1s0GXGwsn741iBTfcmR9LD0yJDu395YO1AYvueS1T6hY0j54ScfeCKHHKMgEv82c1Gb%2FwVqcxwP1T5nAOau80%2BXGQ%2BONv68k%2BoJbLLd%2FhzAn%2Fii9%2Bef5KvsvDybYskwlJmdwgY6pgGbCbWWjuDZri2vHOLLCDiuBpprFwyldphjNJNnKuUjEhN6lDmVUTZHe%2BE%2Fa6daYVApxqFhhc3ObutTtTBXmTjJ7ANy8FQ3XFpAg42eqAdIfvwHgfADT%2FyOnheiD5FauyPiwJrS3xSyjckIW8x2h1ZIIU7PZliQS6aHyasEkLYoSwmIKuOnM%2Bx4NDeYFd2JtkqXBueJ%2F2TlHxl3bu6%2FNG7E96SqEv%2Fm&X-Amz-Signature=184b59c5cd2f965f7c1d42ef86203ea1ec2eabbdc38ea1935599eb02e24eaf04&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZ75LRQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6KuVvKTdDsxHlCrZz1SF5Jhv6%2Fnl1VT1SFSwHn5vEOAiB6EALLi%2BVgaDGGOWu9xzv%2B2F%2Fvd%2FlxnpiMjK8p8HAQJyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYATHQQbeu%2FHZXR7KtwDReLYQwk9Xevm7dJUaqeu%2Fc%2BniIviXf1jnorlvOGzxXYxX%2BcQVMbXqdApujPzQNA8HZVVH3%2B7KGnY9lD6dkCX%2FQnKjHtCUkmqx2zKb9boJ6OJE4xweP0aM1IKio3SYukD5uIv04MQG6pUnYCDAPj%2B9AKhI30EYlIj4%2Btqqtl2BrmXqxZGBM14f0VAmwj1OJcRRgELCt9T3XT%2B6UyLjh4YlRZh7L7ANrvtlBKCyoS6EUqGs38p%2FhBRLHcT2GZuUxzPQZj19jOpApcr3fonEo1xLKkFew0tqfciwzvv0LTexsEFnNR%2FLu5DNei5e4K5q9QRH%2Fn691D7by4h76W4Se5MXz%2B3%2Be9g%2FE3TKavf7ummSwF9xlB%2Fxp8X7k6mcmMk8N6UDfXs3dYFF4%2FaqZyijQBnnIjBzEbg%2BFcXh7l0WCAYEbJWtVh1V8q9eIrZtLP%2BXzJ8fb%2BTj9pwP6HlzYBHmF%2BjXsMBI9gtSvVJT%2BlZwxTkXtohUsd7r61sT2Qtkj7YG1s0GXGwsn741iBTfcmR9LD0yJDu395YO1AYvueS1T6hY0j54ScfeCKHHKMgEv82c1Gb%2FwVqcxwP1T5nAOau80%2BXGQ%2BONv68k%2BoJbLLd%2FhzAn%2Fii9%2Bef5KvsvDybYskwlJmdwgY6pgGbCbWWjuDZri2vHOLLCDiuBpprFwyldphjNJNnKuUjEhN6lDmVUTZHe%2BE%2Fa6daYVApxqFhhc3ObutTtTBXmTjJ7ANy8FQ3XFpAg42eqAdIfvwHgfADT%2FyOnheiD5FauyPiwJrS3xSyjckIW8x2h1ZIIU7PZliQS6aHyasEkLYoSwmIKuOnM%2Bx4NDeYFd2JtkqXBueJ%2F2TlHxl3bu6%2FNG7E96SqEv%2Fm&X-Amz-Signature=bca40b38f5b7405bc0e204a9cee8f46c4832d0376a1c9b9e4551beecb8dfd85d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZ75LRQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6KuVvKTdDsxHlCrZz1SF5Jhv6%2Fnl1VT1SFSwHn5vEOAiB6EALLi%2BVgaDGGOWu9xzv%2B2F%2Fvd%2FlxnpiMjK8p8HAQJyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYATHQQbeu%2FHZXR7KtwDReLYQwk9Xevm7dJUaqeu%2Fc%2BniIviXf1jnorlvOGzxXYxX%2BcQVMbXqdApujPzQNA8HZVVH3%2B7KGnY9lD6dkCX%2FQnKjHtCUkmqx2zKb9boJ6OJE4xweP0aM1IKio3SYukD5uIv04MQG6pUnYCDAPj%2B9AKhI30EYlIj4%2Btqqtl2BrmXqxZGBM14f0VAmwj1OJcRRgELCt9T3XT%2B6UyLjh4YlRZh7L7ANrvtlBKCyoS6EUqGs38p%2FhBRLHcT2GZuUxzPQZj19jOpApcr3fonEo1xLKkFew0tqfciwzvv0LTexsEFnNR%2FLu5DNei5e4K5q9QRH%2Fn691D7by4h76W4Se5MXz%2B3%2Be9g%2FE3TKavf7ummSwF9xlB%2Fxp8X7k6mcmMk8N6UDfXs3dYFF4%2FaqZyijQBnnIjBzEbg%2BFcXh7l0WCAYEbJWtVh1V8q9eIrZtLP%2BXzJ8fb%2BTj9pwP6HlzYBHmF%2BjXsMBI9gtSvVJT%2BlZwxTkXtohUsd7r61sT2Qtkj7YG1s0GXGwsn741iBTfcmR9LD0yJDu395YO1AYvueS1T6hY0j54ScfeCKHHKMgEv82c1Gb%2FwVqcxwP1T5nAOau80%2BXGQ%2BONv68k%2BoJbLLd%2FhzAn%2Fii9%2Bef5KvsvDybYskwlJmdwgY6pgGbCbWWjuDZri2vHOLLCDiuBpprFwyldphjNJNnKuUjEhN6lDmVUTZHe%2BE%2Fa6daYVApxqFhhc3ObutTtTBXmTjJ7ANy8FQ3XFpAg42eqAdIfvwHgfADT%2FyOnheiD5FauyPiwJrS3xSyjckIW8x2h1ZIIU7PZliQS6aHyasEkLYoSwmIKuOnM%2Bx4NDeYFd2JtkqXBueJ%2F2TlHxl3bu6%2FNG7E96SqEv%2Fm&X-Amz-Signature=eeb4ab561f53821138495ebca4af01c7dbba74be9b834a52df4a534c046fe708&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZ75LRQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6KuVvKTdDsxHlCrZz1SF5Jhv6%2Fnl1VT1SFSwHn5vEOAiB6EALLi%2BVgaDGGOWu9xzv%2B2F%2Fvd%2FlxnpiMjK8p8HAQJyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYATHQQbeu%2FHZXR7KtwDReLYQwk9Xevm7dJUaqeu%2Fc%2BniIviXf1jnorlvOGzxXYxX%2BcQVMbXqdApujPzQNA8HZVVH3%2B7KGnY9lD6dkCX%2FQnKjHtCUkmqx2zKb9boJ6OJE4xweP0aM1IKio3SYukD5uIv04MQG6pUnYCDAPj%2B9AKhI30EYlIj4%2Btqqtl2BrmXqxZGBM14f0VAmwj1OJcRRgELCt9T3XT%2B6UyLjh4YlRZh7L7ANrvtlBKCyoS6EUqGs38p%2FhBRLHcT2GZuUxzPQZj19jOpApcr3fonEo1xLKkFew0tqfciwzvv0LTexsEFnNR%2FLu5DNei5e4K5q9QRH%2Fn691D7by4h76W4Se5MXz%2B3%2Be9g%2FE3TKavf7ummSwF9xlB%2Fxp8X7k6mcmMk8N6UDfXs3dYFF4%2FaqZyijQBnnIjBzEbg%2BFcXh7l0WCAYEbJWtVh1V8q9eIrZtLP%2BXzJ8fb%2BTj9pwP6HlzYBHmF%2BjXsMBI9gtSvVJT%2BlZwxTkXtohUsd7r61sT2Qtkj7YG1s0GXGwsn741iBTfcmR9LD0yJDu395YO1AYvueS1T6hY0j54ScfeCKHHKMgEv82c1Gb%2FwVqcxwP1T5nAOau80%2BXGQ%2BONv68k%2BoJbLLd%2FhzAn%2Fii9%2Bef5KvsvDybYskwlJmdwgY6pgGbCbWWjuDZri2vHOLLCDiuBpprFwyldphjNJNnKuUjEhN6lDmVUTZHe%2BE%2Fa6daYVApxqFhhc3ObutTtTBXmTjJ7ANy8FQ3XFpAg42eqAdIfvwHgfADT%2FyOnheiD5FauyPiwJrS3xSyjckIW8x2h1ZIIU7PZliQS6aHyasEkLYoSwmIKuOnM%2Bx4NDeYFd2JtkqXBueJ%2F2TlHxl3bu6%2FNG7E96SqEv%2Fm&X-Amz-Signature=080411eace483dc61802457a0d1551dd25f7bf802d0d5c4efe839d46a970f31c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZ75LRQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6KuVvKTdDsxHlCrZz1SF5Jhv6%2Fnl1VT1SFSwHn5vEOAiB6EALLi%2BVgaDGGOWu9xzv%2B2F%2Fvd%2FlxnpiMjK8p8HAQJyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYATHQQbeu%2FHZXR7KtwDReLYQwk9Xevm7dJUaqeu%2Fc%2BniIviXf1jnorlvOGzxXYxX%2BcQVMbXqdApujPzQNA8HZVVH3%2B7KGnY9lD6dkCX%2FQnKjHtCUkmqx2zKb9boJ6OJE4xweP0aM1IKio3SYukD5uIv04MQG6pUnYCDAPj%2B9AKhI30EYlIj4%2Btqqtl2BrmXqxZGBM14f0VAmwj1OJcRRgELCt9T3XT%2B6UyLjh4YlRZh7L7ANrvtlBKCyoS6EUqGs38p%2FhBRLHcT2GZuUxzPQZj19jOpApcr3fonEo1xLKkFew0tqfciwzvv0LTexsEFnNR%2FLu5DNei5e4K5q9QRH%2Fn691D7by4h76W4Se5MXz%2B3%2Be9g%2FE3TKavf7ummSwF9xlB%2Fxp8X7k6mcmMk8N6UDfXs3dYFF4%2FaqZyijQBnnIjBzEbg%2BFcXh7l0WCAYEbJWtVh1V8q9eIrZtLP%2BXzJ8fb%2BTj9pwP6HlzYBHmF%2BjXsMBI9gtSvVJT%2BlZwxTkXtohUsd7r61sT2Qtkj7YG1s0GXGwsn741iBTfcmR9LD0yJDu395YO1AYvueS1T6hY0j54ScfeCKHHKMgEv82c1Gb%2FwVqcxwP1T5nAOau80%2BXGQ%2BONv68k%2BoJbLLd%2FhzAn%2Fii9%2Bef5KvsvDybYskwlJmdwgY6pgGbCbWWjuDZri2vHOLLCDiuBpprFwyldphjNJNnKuUjEhN6lDmVUTZHe%2BE%2Fa6daYVApxqFhhc3ObutTtTBXmTjJ7ANy8FQ3XFpAg42eqAdIfvwHgfADT%2FyOnheiD5FauyPiwJrS3xSyjckIW8x2h1ZIIU7PZliQS6aHyasEkLYoSwmIKuOnM%2Bx4NDeYFd2JtkqXBueJ%2F2TlHxl3bu6%2FNG7E96SqEv%2Fm&X-Amz-Signature=53a5ce4a439c9d57be9145f0116fc1caacf8bd764d9f92d1bc7602b66aaa3685&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZ75LRQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6KuVvKTdDsxHlCrZz1SF5Jhv6%2Fnl1VT1SFSwHn5vEOAiB6EALLi%2BVgaDGGOWu9xzv%2B2F%2Fvd%2FlxnpiMjK8p8HAQJyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYATHQQbeu%2FHZXR7KtwDReLYQwk9Xevm7dJUaqeu%2Fc%2BniIviXf1jnorlvOGzxXYxX%2BcQVMbXqdApujPzQNA8HZVVH3%2B7KGnY9lD6dkCX%2FQnKjHtCUkmqx2zKb9boJ6OJE4xweP0aM1IKio3SYukD5uIv04MQG6pUnYCDAPj%2B9AKhI30EYlIj4%2Btqqtl2BrmXqxZGBM14f0VAmwj1OJcRRgELCt9T3XT%2B6UyLjh4YlRZh7L7ANrvtlBKCyoS6EUqGs38p%2FhBRLHcT2GZuUxzPQZj19jOpApcr3fonEo1xLKkFew0tqfciwzvv0LTexsEFnNR%2FLu5DNei5e4K5q9QRH%2Fn691D7by4h76W4Se5MXz%2B3%2Be9g%2FE3TKavf7ummSwF9xlB%2Fxp8X7k6mcmMk8N6UDfXs3dYFF4%2FaqZyijQBnnIjBzEbg%2BFcXh7l0WCAYEbJWtVh1V8q9eIrZtLP%2BXzJ8fb%2BTj9pwP6HlzYBHmF%2BjXsMBI9gtSvVJT%2BlZwxTkXtohUsd7r61sT2Qtkj7YG1s0GXGwsn741iBTfcmR9LD0yJDu395YO1AYvueS1T6hY0j54ScfeCKHHKMgEv82c1Gb%2FwVqcxwP1T5nAOau80%2BXGQ%2BONv68k%2BoJbLLd%2FhzAn%2Fii9%2Bef5KvsvDybYskwlJmdwgY6pgGbCbWWjuDZri2vHOLLCDiuBpprFwyldphjNJNnKuUjEhN6lDmVUTZHe%2BE%2Fa6daYVApxqFhhc3ObutTtTBXmTjJ7ANy8FQ3XFpAg42eqAdIfvwHgfADT%2FyOnheiD5FauyPiwJrS3xSyjckIW8x2h1ZIIU7PZliQS6aHyasEkLYoSwmIKuOnM%2Bx4NDeYFd2JtkqXBueJ%2F2TlHxl3bu6%2FNG7E96SqEv%2Fm&X-Amz-Signature=793a0d4673731f97073be64d314fdde7135a88077cff5abae66dd4e44029dd85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

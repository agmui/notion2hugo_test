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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7D35QQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6IGssnWNt9VgPtlZAZyOubXL8uyibGnwaLAVZSMrWAiAfOdV5v6jOj6Qggxde56kTJ8mMD6YUPeo9IrR3tzqG6yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBoxjs9Iv01voc9YjKtwDSzNosCetD3BPFDmGvx7SS8iQoYwEOyhVA7EQ%2BaFjwS%2FBfch2i6XG4lJGglGK6kdRzwqOCNR%2Bh6t3psPt3Sj7bNiCtY4ncPu1F2errWD9TKf3gYb8JMxXe0n8SSJoYA%2FaS150Uv7L1%2BWR3eNATTcMNOoShxUWEG1lod%2FQk6kuZfvn2wib01SxBgR5tIkV2FKxDgfT%2BBmDkxC0bvGMtkAzlV8lp6SJhG1ZHtx45qPi9cgpekxu32wKd44JXeHOlbNqUvJYZ4MsWRBF6z9IQZh3FXTdnzF%2B50IMckpx7DUhKmnhiK0axO8lmJDAy6QP8pc0U9nHsVJqs44TOy7iOlO1gQ6sOvYsU1CGmJjbWmeLMGUQZwCpsER00XWYl8jAwSfGSUuHlYjQs2Qv4QExoEXWnZ6SCEYBv1zi6dBgrjMieDSOxsCbG2Q4vajxhTTX%2FBZei1DP%2FNBRr4%2B6t3VUehCnZU9ooieCCKNKIwnGszXdo4z3Se3EvfPGD6%2FvjTQB2BKduttQksZXnttNSZNWegor5yRSCL6keRf2xxRWHZe6BhBeDX5ZsL98AW5Wj2mkUb%2BDG%2FkYikw1INK94%2F75GiveZ0HLrWQWVPNoNkUM0Dr8qvbk4qO82nArH%2Ft%2FqogwpZfpwQY6pgE9K23f5W5dRcNb%2F5EotHD%2Bbq6ojWwH%2Bs8JbwRsreAENZC6gyEYtdipZtEb60sYHEmTuSf9doCjFTM3%2BOzK%2FLUt2Tey8H5kSKBZIjJCTNk%2BnDMLJiPTIQzJCeWEk3ychjtcy1aGTN1SY%2Fw5vTkzOzVkx5Jq%2FNLReO7mM2WvVkbHakH258CL6bkGr4%2BurBviuhNBxRbvnbgcHYN2j8EI9sQGI5qMNk4l&X-Amz-Signature=930fb0ac346cd0bf97f55a0850991c5bf0aeaf17e61f0454996732edb78ae343&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7D35QQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6IGssnWNt9VgPtlZAZyOubXL8uyibGnwaLAVZSMrWAiAfOdV5v6jOj6Qggxde56kTJ8mMD6YUPeo9IrR3tzqG6yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBoxjs9Iv01voc9YjKtwDSzNosCetD3BPFDmGvx7SS8iQoYwEOyhVA7EQ%2BaFjwS%2FBfch2i6XG4lJGglGK6kdRzwqOCNR%2Bh6t3psPt3Sj7bNiCtY4ncPu1F2errWD9TKf3gYb8JMxXe0n8SSJoYA%2FaS150Uv7L1%2BWR3eNATTcMNOoShxUWEG1lod%2FQk6kuZfvn2wib01SxBgR5tIkV2FKxDgfT%2BBmDkxC0bvGMtkAzlV8lp6SJhG1ZHtx45qPi9cgpekxu32wKd44JXeHOlbNqUvJYZ4MsWRBF6z9IQZh3FXTdnzF%2B50IMckpx7DUhKmnhiK0axO8lmJDAy6QP8pc0U9nHsVJqs44TOy7iOlO1gQ6sOvYsU1CGmJjbWmeLMGUQZwCpsER00XWYl8jAwSfGSUuHlYjQs2Qv4QExoEXWnZ6SCEYBv1zi6dBgrjMieDSOxsCbG2Q4vajxhTTX%2FBZei1DP%2FNBRr4%2B6t3VUehCnZU9ooieCCKNKIwnGszXdo4z3Se3EvfPGD6%2FvjTQB2BKduttQksZXnttNSZNWegor5yRSCL6keRf2xxRWHZe6BhBeDX5ZsL98AW5Wj2mkUb%2BDG%2FkYikw1INK94%2F75GiveZ0HLrWQWVPNoNkUM0Dr8qvbk4qO82nArH%2Ft%2FqogwpZfpwQY6pgE9K23f5W5dRcNb%2F5EotHD%2Bbq6ojWwH%2Bs8JbwRsreAENZC6gyEYtdipZtEb60sYHEmTuSf9doCjFTM3%2BOzK%2FLUt2Tey8H5kSKBZIjJCTNk%2BnDMLJiPTIQzJCeWEk3ychjtcy1aGTN1SY%2Fw5vTkzOzVkx5Jq%2FNLReO7mM2WvVkbHakH258CL6bkGr4%2BurBviuhNBxRbvnbgcHYN2j8EI9sQGI5qMNk4l&X-Amz-Signature=e9a294bc60e5a7ed3e0c42e3c15d249da044aebd7b5b901a22f544f60dfa480d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7D35QQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6IGssnWNt9VgPtlZAZyOubXL8uyibGnwaLAVZSMrWAiAfOdV5v6jOj6Qggxde56kTJ8mMD6YUPeo9IrR3tzqG6yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBoxjs9Iv01voc9YjKtwDSzNosCetD3BPFDmGvx7SS8iQoYwEOyhVA7EQ%2BaFjwS%2FBfch2i6XG4lJGglGK6kdRzwqOCNR%2Bh6t3psPt3Sj7bNiCtY4ncPu1F2errWD9TKf3gYb8JMxXe0n8SSJoYA%2FaS150Uv7L1%2BWR3eNATTcMNOoShxUWEG1lod%2FQk6kuZfvn2wib01SxBgR5tIkV2FKxDgfT%2BBmDkxC0bvGMtkAzlV8lp6SJhG1ZHtx45qPi9cgpekxu32wKd44JXeHOlbNqUvJYZ4MsWRBF6z9IQZh3FXTdnzF%2B50IMckpx7DUhKmnhiK0axO8lmJDAy6QP8pc0U9nHsVJqs44TOy7iOlO1gQ6sOvYsU1CGmJjbWmeLMGUQZwCpsER00XWYl8jAwSfGSUuHlYjQs2Qv4QExoEXWnZ6SCEYBv1zi6dBgrjMieDSOxsCbG2Q4vajxhTTX%2FBZei1DP%2FNBRr4%2B6t3VUehCnZU9ooieCCKNKIwnGszXdo4z3Se3EvfPGD6%2FvjTQB2BKduttQksZXnttNSZNWegor5yRSCL6keRf2xxRWHZe6BhBeDX5ZsL98AW5Wj2mkUb%2BDG%2FkYikw1INK94%2F75GiveZ0HLrWQWVPNoNkUM0Dr8qvbk4qO82nArH%2Ft%2FqogwpZfpwQY6pgE9K23f5W5dRcNb%2F5EotHD%2Bbq6ojWwH%2Bs8JbwRsreAENZC6gyEYtdipZtEb60sYHEmTuSf9doCjFTM3%2BOzK%2FLUt2Tey8H5kSKBZIjJCTNk%2BnDMLJiPTIQzJCeWEk3ychjtcy1aGTN1SY%2Fw5vTkzOzVkx5Jq%2FNLReO7mM2WvVkbHakH258CL6bkGr4%2BurBviuhNBxRbvnbgcHYN2j8EI9sQGI5qMNk4l&X-Amz-Signature=64b890c9767f5f12faf578f9f333522f00cf14ffc5bde922cfe8371d4573b3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7D35QQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6IGssnWNt9VgPtlZAZyOubXL8uyibGnwaLAVZSMrWAiAfOdV5v6jOj6Qggxde56kTJ8mMD6YUPeo9IrR3tzqG6yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBoxjs9Iv01voc9YjKtwDSzNosCetD3BPFDmGvx7SS8iQoYwEOyhVA7EQ%2BaFjwS%2FBfch2i6XG4lJGglGK6kdRzwqOCNR%2Bh6t3psPt3Sj7bNiCtY4ncPu1F2errWD9TKf3gYb8JMxXe0n8SSJoYA%2FaS150Uv7L1%2BWR3eNATTcMNOoShxUWEG1lod%2FQk6kuZfvn2wib01SxBgR5tIkV2FKxDgfT%2BBmDkxC0bvGMtkAzlV8lp6SJhG1ZHtx45qPi9cgpekxu32wKd44JXeHOlbNqUvJYZ4MsWRBF6z9IQZh3FXTdnzF%2B50IMckpx7DUhKmnhiK0axO8lmJDAy6QP8pc0U9nHsVJqs44TOy7iOlO1gQ6sOvYsU1CGmJjbWmeLMGUQZwCpsER00XWYl8jAwSfGSUuHlYjQs2Qv4QExoEXWnZ6SCEYBv1zi6dBgrjMieDSOxsCbG2Q4vajxhTTX%2FBZei1DP%2FNBRr4%2B6t3VUehCnZU9ooieCCKNKIwnGszXdo4z3Se3EvfPGD6%2FvjTQB2BKduttQksZXnttNSZNWegor5yRSCL6keRf2xxRWHZe6BhBeDX5ZsL98AW5Wj2mkUb%2BDG%2FkYikw1INK94%2F75GiveZ0HLrWQWVPNoNkUM0Dr8qvbk4qO82nArH%2Ft%2FqogwpZfpwQY6pgE9K23f5W5dRcNb%2F5EotHD%2Bbq6ojWwH%2Bs8JbwRsreAENZC6gyEYtdipZtEb60sYHEmTuSf9doCjFTM3%2BOzK%2FLUt2Tey8H5kSKBZIjJCTNk%2BnDMLJiPTIQzJCeWEk3ychjtcy1aGTN1SY%2Fw5vTkzOzVkx5Jq%2FNLReO7mM2WvVkbHakH258CL6bkGr4%2BurBviuhNBxRbvnbgcHYN2j8EI9sQGI5qMNk4l&X-Amz-Signature=0fecdf749210b3516c8e413f1a70ad89bbb86f9d53ee5165dc67fccb4beb1fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7D35QQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6IGssnWNt9VgPtlZAZyOubXL8uyibGnwaLAVZSMrWAiAfOdV5v6jOj6Qggxde56kTJ8mMD6YUPeo9IrR3tzqG6yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBoxjs9Iv01voc9YjKtwDSzNosCetD3BPFDmGvx7SS8iQoYwEOyhVA7EQ%2BaFjwS%2FBfch2i6XG4lJGglGK6kdRzwqOCNR%2Bh6t3psPt3Sj7bNiCtY4ncPu1F2errWD9TKf3gYb8JMxXe0n8SSJoYA%2FaS150Uv7L1%2BWR3eNATTcMNOoShxUWEG1lod%2FQk6kuZfvn2wib01SxBgR5tIkV2FKxDgfT%2BBmDkxC0bvGMtkAzlV8lp6SJhG1ZHtx45qPi9cgpekxu32wKd44JXeHOlbNqUvJYZ4MsWRBF6z9IQZh3FXTdnzF%2B50IMckpx7DUhKmnhiK0axO8lmJDAy6QP8pc0U9nHsVJqs44TOy7iOlO1gQ6sOvYsU1CGmJjbWmeLMGUQZwCpsER00XWYl8jAwSfGSUuHlYjQs2Qv4QExoEXWnZ6SCEYBv1zi6dBgrjMieDSOxsCbG2Q4vajxhTTX%2FBZei1DP%2FNBRr4%2B6t3VUehCnZU9ooieCCKNKIwnGszXdo4z3Se3EvfPGD6%2FvjTQB2BKduttQksZXnttNSZNWegor5yRSCL6keRf2xxRWHZe6BhBeDX5ZsL98AW5Wj2mkUb%2BDG%2FkYikw1INK94%2F75GiveZ0HLrWQWVPNoNkUM0Dr8qvbk4qO82nArH%2Ft%2FqogwpZfpwQY6pgE9K23f5W5dRcNb%2F5EotHD%2Bbq6ojWwH%2Bs8JbwRsreAENZC6gyEYtdipZtEb60sYHEmTuSf9doCjFTM3%2BOzK%2FLUt2Tey8H5kSKBZIjJCTNk%2BnDMLJiPTIQzJCeWEk3ychjtcy1aGTN1SY%2Fw5vTkzOzVkx5Jq%2FNLReO7mM2WvVkbHakH258CL6bkGr4%2BurBviuhNBxRbvnbgcHYN2j8EI9sQGI5qMNk4l&X-Amz-Signature=727ccf31c31717e731960470843ece9774cc77cab513f0c95aa937de61ef8f84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7D35QQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6IGssnWNt9VgPtlZAZyOubXL8uyibGnwaLAVZSMrWAiAfOdV5v6jOj6Qggxde56kTJ8mMD6YUPeo9IrR3tzqG6yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBoxjs9Iv01voc9YjKtwDSzNosCetD3BPFDmGvx7SS8iQoYwEOyhVA7EQ%2BaFjwS%2FBfch2i6XG4lJGglGK6kdRzwqOCNR%2Bh6t3psPt3Sj7bNiCtY4ncPu1F2errWD9TKf3gYb8JMxXe0n8SSJoYA%2FaS150Uv7L1%2BWR3eNATTcMNOoShxUWEG1lod%2FQk6kuZfvn2wib01SxBgR5tIkV2FKxDgfT%2BBmDkxC0bvGMtkAzlV8lp6SJhG1ZHtx45qPi9cgpekxu32wKd44JXeHOlbNqUvJYZ4MsWRBF6z9IQZh3FXTdnzF%2B50IMckpx7DUhKmnhiK0axO8lmJDAy6QP8pc0U9nHsVJqs44TOy7iOlO1gQ6sOvYsU1CGmJjbWmeLMGUQZwCpsER00XWYl8jAwSfGSUuHlYjQs2Qv4QExoEXWnZ6SCEYBv1zi6dBgrjMieDSOxsCbG2Q4vajxhTTX%2FBZei1DP%2FNBRr4%2B6t3VUehCnZU9ooieCCKNKIwnGszXdo4z3Se3EvfPGD6%2FvjTQB2BKduttQksZXnttNSZNWegor5yRSCL6keRf2xxRWHZe6BhBeDX5ZsL98AW5Wj2mkUb%2BDG%2FkYikw1INK94%2F75GiveZ0HLrWQWVPNoNkUM0Dr8qvbk4qO82nArH%2Ft%2FqogwpZfpwQY6pgE9K23f5W5dRcNb%2F5EotHD%2Bbq6ojWwH%2Bs8JbwRsreAENZC6gyEYtdipZtEb60sYHEmTuSf9doCjFTM3%2BOzK%2FLUt2Tey8H5kSKBZIjJCTNk%2BnDMLJiPTIQzJCeWEk3ychjtcy1aGTN1SY%2Fw5vTkzOzVkx5Jq%2FNLReO7mM2WvVkbHakH258CL6bkGr4%2BurBviuhNBxRbvnbgcHYN2j8EI9sQGI5qMNk4l&X-Amz-Signature=44154f07a2576bc47d095dd431be525cfe13bcac81e10080a56438176e2168ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7D35QQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6IGssnWNt9VgPtlZAZyOubXL8uyibGnwaLAVZSMrWAiAfOdV5v6jOj6Qggxde56kTJ8mMD6YUPeo9IrR3tzqG6yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBoxjs9Iv01voc9YjKtwDSzNosCetD3BPFDmGvx7SS8iQoYwEOyhVA7EQ%2BaFjwS%2FBfch2i6XG4lJGglGK6kdRzwqOCNR%2Bh6t3psPt3Sj7bNiCtY4ncPu1F2errWD9TKf3gYb8JMxXe0n8SSJoYA%2FaS150Uv7L1%2BWR3eNATTcMNOoShxUWEG1lod%2FQk6kuZfvn2wib01SxBgR5tIkV2FKxDgfT%2BBmDkxC0bvGMtkAzlV8lp6SJhG1ZHtx45qPi9cgpekxu32wKd44JXeHOlbNqUvJYZ4MsWRBF6z9IQZh3FXTdnzF%2B50IMckpx7DUhKmnhiK0axO8lmJDAy6QP8pc0U9nHsVJqs44TOy7iOlO1gQ6sOvYsU1CGmJjbWmeLMGUQZwCpsER00XWYl8jAwSfGSUuHlYjQs2Qv4QExoEXWnZ6SCEYBv1zi6dBgrjMieDSOxsCbG2Q4vajxhTTX%2FBZei1DP%2FNBRr4%2B6t3VUehCnZU9ooieCCKNKIwnGszXdo4z3Se3EvfPGD6%2FvjTQB2BKduttQksZXnttNSZNWegor5yRSCL6keRf2xxRWHZe6BhBeDX5ZsL98AW5Wj2mkUb%2BDG%2FkYikw1INK94%2F75GiveZ0HLrWQWVPNoNkUM0Dr8qvbk4qO82nArH%2Ft%2FqogwpZfpwQY6pgE9K23f5W5dRcNb%2F5EotHD%2Bbq6ojWwH%2Bs8JbwRsreAENZC6gyEYtdipZtEb60sYHEmTuSf9doCjFTM3%2BOzK%2FLUt2Tey8H5kSKBZIjJCTNk%2BnDMLJiPTIQzJCeWEk3ychjtcy1aGTN1SY%2Fw5vTkzOzVkx5Jq%2FNLReO7mM2WvVkbHakH258CL6bkGr4%2BurBviuhNBxRbvnbgcHYN2j8EI9sQGI5qMNk4l&X-Amz-Signature=bc3b0a65755d4b19c0e321a0c1966dd559613e053818279ff844479f1d50fc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7D35QQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6IGssnWNt9VgPtlZAZyOubXL8uyibGnwaLAVZSMrWAiAfOdV5v6jOj6Qggxde56kTJ8mMD6YUPeo9IrR3tzqG6yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBoxjs9Iv01voc9YjKtwDSzNosCetD3BPFDmGvx7SS8iQoYwEOyhVA7EQ%2BaFjwS%2FBfch2i6XG4lJGglGK6kdRzwqOCNR%2Bh6t3psPt3Sj7bNiCtY4ncPu1F2errWD9TKf3gYb8JMxXe0n8SSJoYA%2FaS150Uv7L1%2BWR3eNATTcMNOoShxUWEG1lod%2FQk6kuZfvn2wib01SxBgR5tIkV2FKxDgfT%2BBmDkxC0bvGMtkAzlV8lp6SJhG1ZHtx45qPi9cgpekxu32wKd44JXeHOlbNqUvJYZ4MsWRBF6z9IQZh3FXTdnzF%2B50IMckpx7DUhKmnhiK0axO8lmJDAy6QP8pc0U9nHsVJqs44TOy7iOlO1gQ6sOvYsU1CGmJjbWmeLMGUQZwCpsER00XWYl8jAwSfGSUuHlYjQs2Qv4QExoEXWnZ6SCEYBv1zi6dBgrjMieDSOxsCbG2Q4vajxhTTX%2FBZei1DP%2FNBRr4%2B6t3VUehCnZU9ooieCCKNKIwnGszXdo4z3Se3EvfPGD6%2FvjTQB2BKduttQksZXnttNSZNWegor5yRSCL6keRf2xxRWHZe6BhBeDX5ZsL98AW5Wj2mkUb%2BDG%2FkYikw1INK94%2F75GiveZ0HLrWQWVPNoNkUM0Dr8qvbk4qO82nArH%2Ft%2FqogwpZfpwQY6pgE9K23f5W5dRcNb%2F5EotHD%2Bbq6ojWwH%2Bs8JbwRsreAENZC6gyEYtdipZtEb60sYHEmTuSf9doCjFTM3%2BOzK%2FLUt2Tey8H5kSKBZIjJCTNk%2BnDMLJiPTIQzJCeWEk3ychjtcy1aGTN1SY%2Fw5vTkzOzVkx5Jq%2FNLReO7mM2WvVkbHakH258CL6bkGr4%2BurBviuhNBxRbvnbgcHYN2j8EI9sQGI5qMNk4l&X-Amz-Signature=fe333448b94342ca7e5ae3507ca1998fea0ee58261f8665a078fe271105634d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

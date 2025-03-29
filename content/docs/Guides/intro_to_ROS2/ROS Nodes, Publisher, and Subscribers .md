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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJATCB5Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIH07hy0mBIuFT5nd2R7CZ7c5k2SxbI2lh4LXXpCp5YGzAiAOEq8DDY0ByVYPwUhyNNo2%2BnXxY3LE1iSev7u39ZtlVyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMkVwpARLbved%2BQxwEKtwDyGOkx9u%2B98%2BKNiSFI6QyoxPyJSzQUXmtSnaTjSw%2F81Lsof934yETyV23FXQjT81NFCmJQQYKgkFvJCY%2Bx8oOLCwZwuvXIi1bFNObGX50StygLUd3LE4SfvazmJtTCu8nFtK%2BwsQvyLstUHm1eTEyCI48FH80rA8iUzYtaLQEaxAbebCCFRYjFM1zPNiQcFnO5xnzRM%2BrgT4%2B0iE6KchHgA9buOL7sax9OJjg8KEO%2F%2BitWdwST8Ii8HLOyCwwYAMkarWHswZT7uV1zHcngRGhubDTyg3wLLoSOFS7bRRzt02oS3Aca1HK1B2BgYRmJwquZFXugaSfHAZSNsZVfZdR6EafmKgtoJdWuf9NKsMVrMUZwQ7ogMHeYs0nd1%2BAhyfaiXImcZsbBQozgi4g7ZUdWtA0HNY7gs2N%2BOpX6dYYhZt10HriYa06YhLzCNwzAfP17%2B7rdvRlzrAVl8S3wSYTltLHNGJPaWhfUCNu5oQeaBWpwk9ENF0jfdMjckcJgdPJ5Kjtx1WwFTJfRgmQUunle774URl7v%2BG7K5lA3aZKJnVj9VH4rQMSRYF80XNmh8KvHEHY%2FZigBfe4voyz73aLd0%2BWaOYDXks6A6NFODna%2BVPGFTUR%2FHA3XqU9%2BRIw%2Fp%2BgvwY6pgHBpApN4FLiDR6zVzzdCgktlyIucuVQdm5Ir%2F188PI3Ys86UhA8pvukjVBBBtzJJNyvFBpdh8387ZUkdVFM%2B7yJtHxS23z7VOqzCHCkJw1qgRZtUpwt9%2FoVrhzGpSuEDN1%2F3CgFhsFTc4yt72P7094EgKZXHPmlEq1ncWZMsnIgAJVf%2FuTX0%2FsXUGwS7pl3OZzeK1NMvVWmbodjLIWEcBm6LJVkX7Vs&X-Amz-Signature=1b01d033cfd8276b75b485cd622d4b69342954ba51e148471d5150b378da6fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJATCB5Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIH07hy0mBIuFT5nd2R7CZ7c5k2SxbI2lh4LXXpCp5YGzAiAOEq8DDY0ByVYPwUhyNNo2%2BnXxY3LE1iSev7u39ZtlVyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMkVwpARLbved%2BQxwEKtwDyGOkx9u%2B98%2BKNiSFI6QyoxPyJSzQUXmtSnaTjSw%2F81Lsof934yETyV23FXQjT81NFCmJQQYKgkFvJCY%2Bx8oOLCwZwuvXIi1bFNObGX50StygLUd3LE4SfvazmJtTCu8nFtK%2BwsQvyLstUHm1eTEyCI48FH80rA8iUzYtaLQEaxAbebCCFRYjFM1zPNiQcFnO5xnzRM%2BrgT4%2B0iE6KchHgA9buOL7sax9OJjg8KEO%2F%2BitWdwST8Ii8HLOyCwwYAMkarWHswZT7uV1zHcngRGhubDTyg3wLLoSOFS7bRRzt02oS3Aca1HK1B2BgYRmJwquZFXugaSfHAZSNsZVfZdR6EafmKgtoJdWuf9NKsMVrMUZwQ7ogMHeYs0nd1%2BAhyfaiXImcZsbBQozgi4g7ZUdWtA0HNY7gs2N%2BOpX6dYYhZt10HriYa06YhLzCNwzAfP17%2B7rdvRlzrAVl8S3wSYTltLHNGJPaWhfUCNu5oQeaBWpwk9ENF0jfdMjckcJgdPJ5Kjtx1WwFTJfRgmQUunle774URl7v%2BG7K5lA3aZKJnVj9VH4rQMSRYF80XNmh8KvHEHY%2FZigBfe4voyz73aLd0%2BWaOYDXks6A6NFODna%2BVPGFTUR%2FHA3XqU9%2BRIw%2Fp%2BgvwY6pgHBpApN4FLiDR6zVzzdCgktlyIucuVQdm5Ir%2F188PI3Ys86UhA8pvukjVBBBtzJJNyvFBpdh8387ZUkdVFM%2B7yJtHxS23z7VOqzCHCkJw1qgRZtUpwt9%2FoVrhzGpSuEDN1%2F3CgFhsFTc4yt72P7094EgKZXHPmlEq1ncWZMsnIgAJVf%2FuTX0%2FsXUGwS7pl3OZzeK1NMvVWmbodjLIWEcBm6LJVkX7Vs&X-Amz-Signature=1e244006163f9095fd7048d22e9853b20e16ee4a39b4db68acea1d4f670b29f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJATCB5Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIH07hy0mBIuFT5nd2R7CZ7c5k2SxbI2lh4LXXpCp5YGzAiAOEq8DDY0ByVYPwUhyNNo2%2BnXxY3LE1iSev7u39ZtlVyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMkVwpARLbved%2BQxwEKtwDyGOkx9u%2B98%2BKNiSFI6QyoxPyJSzQUXmtSnaTjSw%2F81Lsof934yETyV23FXQjT81NFCmJQQYKgkFvJCY%2Bx8oOLCwZwuvXIi1bFNObGX50StygLUd3LE4SfvazmJtTCu8nFtK%2BwsQvyLstUHm1eTEyCI48FH80rA8iUzYtaLQEaxAbebCCFRYjFM1zPNiQcFnO5xnzRM%2BrgT4%2B0iE6KchHgA9buOL7sax9OJjg8KEO%2F%2BitWdwST8Ii8HLOyCwwYAMkarWHswZT7uV1zHcngRGhubDTyg3wLLoSOFS7bRRzt02oS3Aca1HK1B2BgYRmJwquZFXugaSfHAZSNsZVfZdR6EafmKgtoJdWuf9NKsMVrMUZwQ7ogMHeYs0nd1%2BAhyfaiXImcZsbBQozgi4g7ZUdWtA0HNY7gs2N%2BOpX6dYYhZt10HriYa06YhLzCNwzAfP17%2B7rdvRlzrAVl8S3wSYTltLHNGJPaWhfUCNu5oQeaBWpwk9ENF0jfdMjckcJgdPJ5Kjtx1WwFTJfRgmQUunle774URl7v%2BG7K5lA3aZKJnVj9VH4rQMSRYF80XNmh8KvHEHY%2FZigBfe4voyz73aLd0%2BWaOYDXks6A6NFODna%2BVPGFTUR%2FHA3XqU9%2BRIw%2Fp%2BgvwY6pgHBpApN4FLiDR6zVzzdCgktlyIucuVQdm5Ir%2F188PI3Ys86UhA8pvukjVBBBtzJJNyvFBpdh8387ZUkdVFM%2B7yJtHxS23z7VOqzCHCkJw1qgRZtUpwt9%2FoVrhzGpSuEDN1%2F3CgFhsFTc4yt72P7094EgKZXHPmlEq1ncWZMsnIgAJVf%2FuTX0%2FsXUGwS7pl3OZzeK1NMvVWmbodjLIWEcBm6LJVkX7Vs&X-Amz-Signature=ab6f3d730c784fbf62772b4637db327650eda271e62f5b1694e5cfde19725cec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJATCB5Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIH07hy0mBIuFT5nd2R7CZ7c5k2SxbI2lh4LXXpCp5YGzAiAOEq8DDY0ByVYPwUhyNNo2%2BnXxY3LE1iSev7u39ZtlVyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMkVwpARLbved%2BQxwEKtwDyGOkx9u%2B98%2BKNiSFI6QyoxPyJSzQUXmtSnaTjSw%2F81Lsof934yETyV23FXQjT81NFCmJQQYKgkFvJCY%2Bx8oOLCwZwuvXIi1bFNObGX50StygLUd3LE4SfvazmJtTCu8nFtK%2BwsQvyLstUHm1eTEyCI48FH80rA8iUzYtaLQEaxAbebCCFRYjFM1zPNiQcFnO5xnzRM%2BrgT4%2B0iE6KchHgA9buOL7sax9OJjg8KEO%2F%2BitWdwST8Ii8HLOyCwwYAMkarWHswZT7uV1zHcngRGhubDTyg3wLLoSOFS7bRRzt02oS3Aca1HK1B2BgYRmJwquZFXugaSfHAZSNsZVfZdR6EafmKgtoJdWuf9NKsMVrMUZwQ7ogMHeYs0nd1%2BAhyfaiXImcZsbBQozgi4g7ZUdWtA0HNY7gs2N%2BOpX6dYYhZt10HriYa06YhLzCNwzAfP17%2B7rdvRlzrAVl8S3wSYTltLHNGJPaWhfUCNu5oQeaBWpwk9ENF0jfdMjckcJgdPJ5Kjtx1WwFTJfRgmQUunle774URl7v%2BG7K5lA3aZKJnVj9VH4rQMSRYF80XNmh8KvHEHY%2FZigBfe4voyz73aLd0%2BWaOYDXks6A6NFODna%2BVPGFTUR%2FHA3XqU9%2BRIw%2Fp%2BgvwY6pgHBpApN4FLiDR6zVzzdCgktlyIucuVQdm5Ir%2F188PI3Ys86UhA8pvukjVBBBtzJJNyvFBpdh8387ZUkdVFM%2B7yJtHxS23z7VOqzCHCkJw1qgRZtUpwt9%2FoVrhzGpSuEDN1%2F3CgFhsFTc4yt72P7094EgKZXHPmlEq1ncWZMsnIgAJVf%2FuTX0%2FsXUGwS7pl3OZzeK1NMvVWmbodjLIWEcBm6LJVkX7Vs&X-Amz-Signature=73eb62ce6ee404be6bc5ef7e2b8f15642e31f68f4b1b0ccea886cab8c49643a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJATCB5Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIH07hy0mBIuFT5nd2R7CZ7c5k2SxbI2lh4LXXpCp5YGzAiAOEq8DDY0ByVYPwUhyNNo2%2BnXxY3LE1iSev7u39ZtlVyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMkVwpARLbved%2BQxwEKtwDyGOkx9u%2B98%2BKNiSFI6QyoxPyJSzQUXmtSnaTjSw%2F81Lsof934yETyV23FXQjT81NFCmJQQYKgkFvJCY%2Bx8oOLCwZwuvXIi1bFNObGX50StygLUd3LE4SfvazmJtTCu8nFtK%2BwsQvyLstUHm1eTEyCI48FH80rA8iUzYtaLQEaxAbebCCFRYjFM1zPNiQcFnO5xnzRM%2BrgT4%2B0iE6KchHgA9buOL7sax9OJjg8KEO%2F%2BitWdwST8Ii8HLOyCwwYAMkarWHswZT7uV1zHcngRGhubDTyg3wLLoSOFS7bRRzt02oS3Aca1HK1B2BgYRmJwquZFXugaSfHAZSNsZVfZdR6EafmKgtoJdWuf9NKsMVrMUZwQ7ogMHeYs0nd1%2BAhyfaiXImcZsbBQozgi4g7ZUdWtA0HNY7gs2N%2BOpX6dYYhZt10HriYa06YhLzCNwzAfP17%2B7rdvRlzrAVl8S3wSYTltLHNGJPaWhfUCNu5oQeaBWpwk9ENF0jfdMjckcJgdPJ5Kjtx1WwFTJfRgmQUunle774URl7v%2BG7K5lA3aZKJnVj9VH4rQMSRYF80XNmh8KvHEHY%2FZigBfe4voyz73aLd0%2BWaOYDXks6A6NFODna%2BVPGFTUR%2FHA3XqU9%2BRIw%2Fp%2BgvwY6pgHBpApN4FLiDR6zVzzdCgktlyIucuVQdm5Ir%2F188PI3Ys86UhA8pvukjVBBBtzJJNyvFBpdh8387ZUkdVFM%2B7yJtHxS23z7VOqzCHCkJw1qgRZtUpwt9%2FoVrhzGpSuEDN1%2F3CgFhsFTc4yt72P7094EgKZXHPmlEq1ncWZMsnIgAJVf%2FuTX0%2FsXUGwS7pl3OZzeK1NMvVWmbodjLIWEcBm6LJVkX7Vs&X-Amz-Signature=fa585e2cbf67c94f5a6756c1b08d55d0bb4ad1b4447a41870fb71591e33fd82f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJATCB5Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIH07hy0mBIuFT5nd2R7CZ7c5k2SxbI2lh4LXXpCp5YGzAiAOEq8DDY0ByVYPwUhyNNo2%2BnXxY3LE1iSev7u39ZtlVyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMkVwpARLbved%2BQxwEKtwDyGOkx9u%2B98%2BKNiSFI6QyoxPyJSzQUXmtSnaTjSw%2F81Lsof934yETyV23FXQjT81NFCmJQQYKgkFvJCY%2Bx8oOLCwZwuvXIi1bFNObGX50StygLUd3LE4SfvazmJtTCu8nFtK%2BwsQvyLstUHm1eTEyCI48FH80rA8iUzYtaLQEaxAbebCCFRYjFM1zPNiQcFnO5xnzRM%2BrgT4%2B0iE6KchHgA9buOL7sax9OJjg8KEO%2F%2BitWdwST8Ii8HLOyCwwYAMkarWHswZT7uV1zHcngRGhubDTyg3wLLoSOFS7bRRzt02oS3Aca1HK1B2BgYRmJwquZFXugaSfHAZSNsZVfZdR6EafmKgtoJdWuf9NKsMVrMUZwQ7ogMHeYs0nd1%2BAhyfaiXImcZsbBQozgi4g7ZUdWtA0HNY7gs2N%2BOpX6dYYhZt10HriYa06YhLzCNwzAfP17%2B7rdvRlzrAVl8S3wSYTltLHNGJPaWhfUCNu5oQeaBWpwk9ENF0jfdMjckcJgdPJ5Kjtx1WwFTJfRgmQUunle774URl7v%2BG7K5lA3aZKJnVj9VH4rQMSRYF80XNmh8KvHEHY%2FZigBfe4voyz73aLd0%2BWaOYDXks6A6NFODna%2BVPGFTUR%2FHA3XqU9%2BRIw%2Fp%2BgvwY6pgHBpApN4FLiDR6zVzzdCgktlyIucuVQdm5Ir%2F188PI3Ys86UhA8pvukjVBBBtzJJNyvFBpdh8387ZUkdVFM%2B7yJtHxS23z7VOqzCHCkJw1qgRZtUpwt9%2FoVrhzGpSuEDN1%2F3CgFhsFTc4yt72P7094EgKZXHPmlEq1ncWZMsnIgAJVf%2FuTX0%2FsXUGwS7pl3OZzeK1NMvVWmbodjLIWEcBm6LJVkX7Vs&X-Amz-Signature=1a0a47c951941d4a98b7e76bebf2dc332ad1f5d54934700e67e0e4946fcfa5ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJATCB5Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIH07hy0mBIuFT5nd2R7CZ7c5k2SxbI2lh4LXXpCp5YGzAiAOEq8DDY0ByVYPwUhyNNo2%2BnXxY3LE1iSev7u39ZtlVyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMkVwpARLbved%2BQxwEKtwDyGOkx9u%2B98%2BKNiSFI6QyoxPyJSzQUXmtSnaTjSw%2F81Lsof934yETyV23FXQjT81NFCmJQQYKgkFvJCY%2Bx8oOLCwZwuvXIi1bFNObGX50StygLUd3LE4SfvazmJtTCu8nFtK%2BwsQvyLstUHm1eTEyCI48FH80rA8iUzYtaLQEaxAbebCCFRYjFM1zPNiQcFnO5xnzRM%2BrgT4%2B0iE6KchHgA9buOL7sax9OJjg8KEO%2F%2BitWdwST8Ii8HLOyCwwYAMkarWHswZT7uV1zHcngRGhubDTyg3wLLoSOFS7bRRzt02oS3Aca1HK1B2BgYRmJwquZFXugaSfHAZSNsZVfZdR6EafmKgtoJdWuf9NKsMVrMUZwQ7ogMHeYs0nd1%2BAhyfaiXImcZsbBQozgi4g7ZUdWtA0HNY7gs2N%2BOpX6dYYhZt10HriYa06YhLzCNwzAfP17%2B7rdvRlzrAVl8S3wSYTltLHNGJPaWhfUCNu5oQeaBWpwk9ENF0jfdMjckcJgdPJ5Kjtx1WwFTJfRgmQUunle774URl7v%2BG7K5lA3aZKJnVj9VH4rQMSRYF80XNmh8KvHEHY%2FZigBfe4voyz73aLd0%2BWaOYDXks6A6NFODna%2BVPGFTUR%2FHA3XqU9%2BRIw%2Fp%2BgvwY6pgHBpApN4FLiDR6zVzzdCgktlyIucuVQdm5Ir%2F188PI3Ys86UhA8pvukjVBBBtzJJNyvFBpdh8387ZUkdVFM%2B7yJtHxS23z7VOqzCHCkJw1qgRZtUpwt9%2FoVrhzGpSuEDN1%2F3CgFhsFTc4yt72P7094EgKZXHPmlEq1ncWZMsnIgAJVf%2FuTX0%2FsXUGwS7pl3OZzeK1NMvVWmbodjLIWEcBm6LJVkX7Vs&X-Amz-Signature=06808b7888a95862720a05ee5c35dac3b5f14cd849c167e8b8c727d1b49c8fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJATCB5Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIH07hy0mBIuFT5nd2R7CZ7c5k2SxbI2lh4LXXpCp5YGzAiAOEq8DDY0ByVYPwUhyNNo2%2BnXxY3LE1iSev7u39ZtlVyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMkVwpARLbved%2BQxwEKtwDyGOkx9u%2B98%2BKNiSFI6QyoxPyJSzQUXmtSnaTjSw%2F81Lsof934yETyV23FXQjT81NFCmJQQYKgkFvJCY%2Bx8oOLCwZwuvXIi1bFNObGX50StygLUd3LE4SfvazmJtTCu8nFtK%2BwsQvyLstUHm1eTEyCI48FH80rA8iUzYtaLQEaxAbebCCFRYjFM1zPNiQcFnO5xnzRM%2BrgT4%2B0iE6KchHgA9buOL7sax9OJjg8KEO%2F%2BitWdwST8Ii8HLOyCwwYAMkarWHswZT7uV1zHcngRGhubDTyg3wLLoSOFS7bRRzt02oS3Aca1HK1B2BgYRmJwquZFXugaSfHAZSNsZVfZdR6EafmKgtoJdWuf9NKsMVrMUZwQ7ogMHeYs0nd1%2BAhyfaiXImcZsbBQozgi4g7ZUdWtA0HNY7gs2N%2BOpX6dYYhZt10HriYa06YhLzCNwzAfP17%2B7rdvRlzrAVl8S3wSYTltLHNGJPaWhfUCNu5oQeaBWpwk9ENF0jfdMjckcJgdPJ5Kjtx1WwFTJfRgmQUunle774URl7v%2BG7K5lA3aZKJnVj9VH4rQMSRYF80XNmh8KvHEHY%2FZigBfe4voyz73aLd0%2BWaOYDXks6A6NFODna%2BVPGFTUR%2FHA3XqU9%2BRIw%2Fp%2BgvwY6pgHBpApN4FLiDR6zVzzdCgktlyIucuVQdm5Ir%2F188PI3Ys86UhA8pvukjVBBBtzJJNyvFBpdh8387ZUkdVFM%2B7yJtHxS23z7VOqzCHCkJw1qgRZtUpwt9%2FoVrhzGpSuEDN1%2F3CgFhsFTc4yt72P7094EgKZXHPmlEq1ncWZMsnIgAJVf%2FuTX0%2FsXUGwS7pl3OZzeK1NMvVWmbodjLIWEcBm6LJVkX7Vs&X-Amz-Signature=3cbbf58052c8f289dc6f034d3fee329fb31c805fbc0eb7a916a6dc92121528ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

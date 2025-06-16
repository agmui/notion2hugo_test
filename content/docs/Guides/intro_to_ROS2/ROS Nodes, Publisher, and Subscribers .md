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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FTTSPQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD6AjknSXmYAiktXJQcS%2BBzi192ed7IDG9smuGrIRQsIwIhAIKoew2XQG%2BK1uYH56laVbw7Dy3qraorMDFFymlJ5hmVKv8DCGYQABoMNjM3NDIzMTgzODA1IgwaN3OT79Uoi1wESDYq3APYk%2F6gZ7WBXbgnLApMgRKwb79nMHH5XsB3ig1kSDDqI772%2B7fbyvbv62oHgOAwU4IN5acbS%2F9NJL8WVdGwFPYQAZXDuo2N8gy72wWzZY23YREhoZ5UFo8abtoCxmmFaRhAtBKhoke%2FDZ6jRFqktKpIOAX68PEWBaerKcqVSmqVC0lukThh%2FpKsLV317ND2Va31wrVswZfZ85h7tV%2FpM6ZgvOvra7oLvurOUki6ghlxOBSrYaOpYDW5KGCZi9vjhd0msPhp4dwMj6HgzWXqdDlYsES2%2F7XA1QZ%2BdUaN4mB%2BNrwhzytN3l%2B8OVkQQ7lWjJGl%2FnKD0fzjfIX4jqhsj3s9g%2F8bhxIzFRyyYNpBAw7Vmy1T0r8uYxZQOWkCBfkDwKp0ObzKYBXQVxT25t18y%2B2gS2uhsG9mnz0roen1cTP1MC0MhZGEkcrXIx1U6XCVCQLfN7yFPC%2FNm8IHmxzoNMY%2BXvBqsvd3bCW%2BrN3CEWQWGk7UDiMmyOX24bWta3aN7vnub9hvYQi7Hw1HF%2BZgAl7VLa15Xhv%2BiWkKxahn%2FrytcvmN7lE8A7SDy2Fj03h84NGx4oRVyK2BBCUO7Vq3Sa%2Be6wPYLZ%2BqMoje99UVgWiPRd39fQC2A8mVteNW5zC0jsLCBjqkAf4vM7QnOpz667wgI90hFGUPaSqoorRBof0txKYf2V5olBfj6DcM9knpKDIMXfWkz%2BArAzGExVaMVUxgD1fywrsmgWdYuESPg1mOcUeilKuWLjMHkbb5aZ65Ix%2B2fnaM%2FRAkR5FZ0MkYnmv6u85WBHmXMbortwOD%2BhGK1%2F%2FlbkyrtcRiN1EOfzJUdn8JogZQsXDdylTV6tDiOx%2Bvl%2B3GdYwro5u4&X-Amz-Signature=d7dc57924ffd25ca02b8ff11ac18f956355b8f952281323c962130dc8b043c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FTTSPQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD6AjknSXmYAiktXJQcS%2BBzi192ed7IDG9smuGrIRQsIwIhAIKoew2XQG%2BK1uYH56laVbw7Dy3qraorMDFFymlJ5hmVKv8DCGYQABoMNjM3NDIzMTgzODA1IgwaN3OT79Uoi1wESDYq3APYk%2F6gZ7WBXbgnLApMgRKwb79nMHH5XsB3ig1kSDDqI772%2B7fbyvbv62oHgOAwU4IN5acbS%2F9NJL8WVdGwFPYQAZXDuo2N8gy72wWzZY23YREhoZ5UFo8abtoCxmmFaRhAtBKhoke%2FDZ6jRFqktKpIOAX68PEWBaerKcqVSmqVC0lukThh%2FpKsLV317ND2Va31wrVswZfZ85h7tV%2FpM6ZgvOvra7oLvurOUki6ghlxOBSrYaOpYDW5KGCZi9vjhd0msPhp4dwMj6HgzWXqdDlYsES2%2F7XA1QZ%2BdUaN4mB%2BNrwhzytN3l%2B8OVkQQ7lWjJGl%2FnKD0fzjfIX4jqhsj3s9g%2F8bhxIzFRyyYNpBAw7Vmy1T0r8uYxZQOWkCBfkDwKp0ObzKYBXQVxT25t18y%2B2gS2uhsG9mnz0roen1cTP1MC0MhZGEkcrXIx1U6XCVCQLfN7yFPC%2FNm8IHmxzoNMY%2BXvBqsvd3bCW%2BrN3CEWQWGk7UDiMmyOX24bWta3aN7vnub9hvYQi7Hw1HF%2BZgAl7VLa15Xhv%2BiWkKxahn%2FrytcvmN7lE8A7SDy2Fj03h84NGx4oRVyK2BBCUO7Vq3Sa%2Be6wPYLZ%2BqMoje99UVgWiPRd39fQC2A8mVteNW5zC0jsLCBjqkAf4vM7QnOpz667wgI90hFGUPaSqoorRBof0txKYf2V5olBfj6DcM9knpKDIMXfWkz%2BArAzGExVaMVUxgD1fywrsmgWdYuESPg1mOcUeilKuWLjMHkbb5aZ65Ix%2B2fnaM%2FRAkR5FZ0MkYnmv6u85WBHmXMbortwOD%2BhGK1%2F%2FlbkyrtcRiN1EOfzJUdn8JogZQsXDdylTV6tDiOx%2Bvl%2B3GdYwro5u4&X-Amz-Signature=b16e5ac66d8175422e4c78bf02cc26e19bd23fbfa31c2e1fba9567ce945ee57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FTTSPQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD6AjknSXmYAiktXJQcS%2BBzi192ed7IDG9smuGrIRQsIwIhAIKoew2XQG%2BK1uYH56laVbw7Dy3qraorMDFFymlJ5hmVKv8DCGYQABoMNjM3NDIzMTgzODA1IgwaN3OT79Uoi1wESDYq3APYk%2F6gZ7WBXbgnLApMgRKwb79nMHH5XsB3ig1kSDDqI772%2B7fbyvbv62oHgOAwU4IN5acbS%2F9NJL8WVdGwFPYQAZXDuo2N8gy72wWzZY23YREhoZ5UFo8abtoCxmmFaRhAtBKhoke%2FDZ6jRFqktKpIOAX68PEWBaerKcqVSmqVC0lukThh%2FpKsLV317ND2Va31wrVswZfZ85h7tV%2FpM6ZgvOvra7oLvurOUki6ghlxOBSrYaOpYDW5KGCZi9vjhd0msPhp4dwMj6HgzWXqdDlYsES2%2F7XA1QZ%2BdUaN4mB%2BNrwhzytN3l%2B8OVkQQ7lWjJGl%2FnKD0fzjfIX4jqhsj3s9g%2F8bhxIzFRyyYNpBAw7Vmy1T0r8uYxZQOWkCBfkDwKp0ObzKYBXQVxT25t18y%2B2gS2uhsG9mnz0roen1cTP1MC0MhZGEkcrXIx1U6XCVCQLfN7yFPC%2FNm8IHmxzoNMY%2BXvBqsvd3bCW%2BrN3CEWQWGk7UDiMmyOX24bWta3aN7vnub9hvYQi7Hw1HF%2BZgAl7VLa15Xhv%2BiWkKxahn%2FrytcvmN7lE8A7SDy2Fj03h84NGx4oRVyK2BBCUO7Vq3Sa%2Be6wPYLZ%2BqMoje99UVgWiPRd39fQC2A8mVteNW5zC0jsLCBjqkAf4vM7QnOpz667wgI90hFGUPaSqoorRBof0txKYf2V5olBfj6DcM9knpKDIMXfWkz%2BArAzGExVaMVUxgD1fywrsmgWdYuESPg1mOcUeilKuWLjMHkbb5aZ65Ix%2B2fnaM%2FRAkR5FZ0MkYnmv6u85WBHmXMbortwOD%2BhGK1%2F%2FlbkyrtcRiN1EOfzJUdn8JogZQsXDdylTV6tDiOx%2Bvl%2B3GdYwro5u4&X-Amz-Signature=709f08a921b973e2b874ec528bfcf5ef05a99f0db4f9c3a2038eec7a7e38ddc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FTTSPQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD6AjknSXmYAiktXJQcS%2BBzi192ed7IDG9smuGrIRQsIwIhAIKoew2XQG%2BK1uYH56laVbw7Dy3qraorMDFFymlJ5hmVKv8DCGYQABoMNjM3NDIzMTgzODA1IgwaN3OT79Uoi1wESDYq3APYk%2F6gZ7WBXbgnLApMgRKwb79nMHH5XsB3ig1kSDDqI772%2B7fbyvbv62oHgOAwU4IN5acbS%2F9NJL8WVdGwFPYQAZXDuo2N8gy72wWzZY23YREhoZ5UFo8abtoCxmmFaRhAtBKhoke%2FDZ6jRFqktKpIOAX68PEWBaerKcqVSmqVC0lukThh%2FpKsLV317ND2Va31wrVswZfZ85h7tV%2FpM6ZgvOvra7oLvurOUki6ghlxOBSrYaOpYDW5KGCZi9vjhd0msPhp4dwMj6HgzWXqdDlYsES2%2F7XA1QZ%2BdUaN4mB%2BNrwhzytN3l%2B8OVkQQ7lWjJGl%2FnKD0fzjfIX4jqhsj3s9g%2F8bhxIzFRyyYNpBAw7Vmy1T0r8uYxZQOWkCBfkDwKp0ObzKYBXQVxT25t18y%2B2gS2uhsG9mnz0roen1cTP1MC0MhZGEkcrXIx1U6XCVCQLfN7yFPC%2FNm8IHmxzoNMY%2BXvBqsvd3bCW%2BrN3CEWQWGk7UDiMmyOX24bWta3aN7vnub9hvYQi7Hw1HF%2BZgAl7VLa15Xhv%2BiWkKxahn%2FrytcvmN7lE8A7SDy2Fj03h84NGx4oRVyK2BBCUO7Vq3Sa%2Be6wPYLZ%2BqMoje99UVgWiPRd39fQC2A8mVteNW5zC0jsLCBjqkAf4vM7QnOpz667wgI90hFGUPaSqoorRBof0txKYf2V5olBfj6DcM9knpKDIMXfWkz%2BArAzGExVaMVUxgD1fywrsmgWdYuESPg1mOcUeilKuWLjMHkbb5aZ65Ix%2B2fnaM%2FRAkR5FZ0MkYnmv6u85WBHmXMbortwOD%2BhGK1%2F%2FlbkyrtcRiN1EOfzJUdn8JogZQsXDdylTV6tDiOx%2Bvl%2B3GdYwro5u4&X-Amz-Signature=2bbc84b7b7487a4694e816eff169511e2282831d81a3bed4cd4fbcd6f58350c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FTTSPQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD6AjknSXmYAiktXJQcS%2BBzi192ed7IDG9smuGrIRQsIwIhAIKoew2XQG%2BK1uYH56laVbw7Dy3qraorMDFFymlJ5hmVKv8DCGYQABoMNjM3NDIzMTgzODA1IgwaN3OT79Uoi1wESDYq3APYk%2F6gZ7WBXbgnLApMgRKwb79nMHH5XsB3ig1kSDDqI772%2B7fbyvbv62oHgOAwU4IN5acbS%2F9NJL8WVdGwFPYQAZXDuo2N8gy72wWzZY23YREhoZ5UFo8abtoCxmmFaRhAtBKhoke%2FDZ6jRFqktKpIOAX68PEWBaerKcqVSmqVC0lukThh%2FpKsLV317ND2Va31wrVswZfZ85h7tV%2FpM6ZgvOvra7oLvurOUki6ghlxOBSrYaOpYDW5KGCZi9vjhd0msPhp4dwMj6HgzWXqdDlYsES2%2F7XA1QZ%2BdUaN4mB%2BNrwhzytN3l%2B8OVkQQ7lWjJGl%2FnKD0fzjfIX4jqhsj3s9g%2F8bhxIzFRyyYNpBAw7Vmy1T0r8uYxZQOWkCBfkDwKp0ObzKYBXQVxT25t18y%2B2gS2uhsG9mnz0roen1cTP1MC0MhZGEkcrXIx1U6XCVCQLfN7yFPC%2FNm8IHmxzoNMY%2BXvBqsvd3bCW%2BrN3CEWQWGk7UDiMmyOX24bWta3aN7vnub9hvYQi7Hw1HF%2BZgAl7VLa15Xhv%2BiWkKxahn%2FrytcvmN7lE8A7SDy2Fj03h84NGx4oRVyK2BBCUO7Vq3Sa%2Be6wPYLZ%2BqMoje99UVgWiPRd39fQC2A8mVteNW5zC0jsLCBjqkAf4vM7QnOpz667wgI90hFGUPaSqoorRBof0txKYf2V5olBfj6DcM9knpKDIMXfWkz%2BArAzGExVaMVUxgD1fywrsmgWdYuESPg1mOcUeilKuWLjMHkbb5aZ65Ix%2B2fnaM%2FRAkR5FZ0MkYnmv6u85WBHmXMbortwOD%2BhGK1%2F%2FlbkyrtcRiN1EOfzJUdn8JogZQsXDdylTV6tDiOx%2Bvl%2B3GdYwro5u4&X-Amz-Signature=21b69efdc4509c1b82d457493cedd32504731157f24069619f3f261ca03972eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FTTSPQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD6AjknSXmYAiktXJQcS%2BBzi192ed7IDG9smuGrIRQsIwIhAIKoew2XQG%2BK1uYH56laVbw7Dy3qraorMDFFymlJ5hmVKv8DCGYQABoMNjM3NDIzMTgzODA1IgwaN3OT79Uoi1wESDYq3APYk%2F6gZ7WBXbgnLApMgRKwb79nMHH5XsB3ig1kSDDqI772%2B7fbyvbv62oHgOAwU4IN5acbS%2F9NJL8WVdGwFPYQAZXDuo2N8gy72wWzZY23YREhoZ5UFo8abtoCxmmFaRhAtBKhoke%2FDZ6jRFqktKpIOAX68PEWBaerKcqVSmqVC0lukThh%2FpKsLV317ND2Va31wrVswZfZ85h7tV%2FpM6ZgvOvra7oLvurOUki6ghlxOBSrYaOpYDW5KGCZi9vjhd0msPhp4dwMj6HgzWXqdDlYsES2%2F7XA1QZ%2BdUaN4mB%2BNrwhzytN3l%2B8OVkQQ7lWjJGl%2FnKD0fzjfIX4jqhsj3s9g%2F8bhxIzFRyyYNpBAw7Vmy1T0r8uYxZQOWkCBfkDwKp0ObzKYBXQVxT25t18y%2B2gS2uhsG9mnz0roen1cTP1MC0MhZGEkcrXIx1U6XCVCQLfN7yFPC%2FNm8IHmxzoNMY%2BXvBqsvd3bCW%2BrN3CEWQWGk7UDiMmyOX24bWta3aN7vnub9hvYQi7Hw1HF%2BZgAl7VLa15Xhv%2BiWkKxahn%2FrytcvmN7lE8A7SDy2Fj03h84NGx4oRVyK2BBCUO7Vq3Sa%2Be6wPYLZ%2BqMoje99UVgWiPRd39fQC2A8mVteNW5zC0jsLCBjqkAf4vM7QnOpz667wgI90hFGUPaSqoorRBof0txKYf2V5olBfj6DcM9knpKDIMXfWkz%2BArAzGExVaMVUxgD1fywrsmgWdYuESPg1mOcUeilKuWLjMHkbb5aZ65Ix%2B2fnaM%2FRAkR5FZ0MkYnmv6u85WBHmXMbortwOD%2BhGK1%2F%2FlbkyrtcRiN1EOfzJUdn8JogZQsXDdylTV6tDiOx%2Bvl%2B3GdYwro5u4&X-Amz-Signature=a38065a09a3dbf99e969d249adf97196ed8d74ab071fc98de2e6a1bf68de600c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FTTSPQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD6AjknSXmYAiktXJQcS%2BBzi192ed7IDG9smuGrIRQsIwIhAIKoew2XQG%2BK1uYH56laVbw7Dy3qraorMDFFymlJ5hmVKv8DCGYQABoMNjM3NDIzMTgzODA1IgwaN3OT79Uoi1wESDYq3APYk%2F6gZ7WBXbgnLApMgRKwb79nMHH5XsB3ig1kSDDqI772%2B7fbyvbv62oHgOAwU4IN5acbS%2F9NJL8WVdGwFPYQAZXDuo2N8gy72wWzZY23YREhoZ5UFo8abtoCxmmFaRhAtBKhoke%2FDZ6jRFqktKpIOAX68PEWBaerKcqVSmqVC0lukThh%2FpKsLV317ND2Va31wrVswZfZ85h7tV%2FpM6ZgvOvra7oLvurOUki6ghlxOBSrYaOpYDW5KGCZi9vjhd0msPhp4dwMj6HgzWXqdDlYsES2%2F7XA1QZ%2BdUaN4mB%2BNrwhzytN3l%2B8OVkQQ7lWjJGl%2FnKD0fzjfIX4jqhsj3s9g%2F8bhxIzFRyyYNpBAw7Vmy1T0r8uYxZQOWkCBfkDwKp0ObzKYBXQVxT25t18y%2B2gS2uhsG9mnz0roen1cTP1MC0MhZGEkcrXIx1U6XCVCQLfN7yFPC%2FNm8IHmxzoNMY%2BXvBqsvd3bCW%2BrN3CEWQWGk7UDiMmyOX24bWta3aN7vnub9hvYQi7Hw1HF%2BZgAl7VLa15Xhv%2BiWkKxahn%2FrytcvmN7lE8A7SDy2Fj03h84NGx4oRVyK2BBCUO7Vq3Sa%2Be6wPYLZ%2BqMoje99UVgWiPRd39fQC2A8mVteNW5zC0jsLCBjqkAf4vM7QnOpz667wgI90hFGUPaSqoorRBof0txKYf2V5olBfj6DcM9knpKDIMXfWkz%2BArAzGExVaMVUxgD1fywrsmgWdYuESPg1mOcUeilKuWLjMHkbb5aZ65Ix%2B2fnaM%2FRAkR5FZ0MkYnmv6u85WBHmXMbortwOD%2BhGK1%2F%2FlbkyrtcRiN1EOfzJUdn8JogZQsXDdylTV6tDiOx%2Bvl%2B3GdYwro5u4&X-Amz-Signature=460a84e2712513eae88c1a0eaa1f8e53d7ef76396cd49b4ee55117818f1880f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FTTSPQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD6AjknSXmYAiktXJQcS%2BBzi192ed7IDG9smuGrIRQsIwIhAIKoew2XQG%2BK1uYH56laVbw7Dy3qraorMDFFymlJ5hmVKv8DCGYQABoMNjM3NDIzMTgzODA1IgwaN3OT79Uoi1wESDYq3APYk%2F6gZ7WBXbgnLApMgRKwb79nMHH5XsB3ig1kSDDqI772%2B7fbyvbv62oHgOAwU4IN5acbS%2F9NJL8WVdGwFPYQAZXDuo2N8gy72wWzZY23YREhoZ5UFo8abtoCxmmFaRhAtBKhoke%2FDZ6jRFqktKpIOAX68PEWBaerKcqVSmqVC0lukThh%2FpKsLV317ND2Va31wrVswZfZ85h7tV%2FpM6ZgvOvra7oLvurOUki6ghlxOBSrYaOpYDW5KGCZi9vjhd0msPhp4dwMj6HgzWXqdDlYsES2%2F7XA1QZ%2BdUaN4mB%2BNrwhzytN3l%2B8OVkQQ7lWjJGl%2FnKD0fzjfIX4jqhsj3s9g%2F8bhxIzFRyyYNpBAw7Vmy1T0r8uYxZQOWkCBfkDwKp0ObzKYBXQVxT25t18y%2B2gS2uhsG9mnz0roen1cTP1MC0MhZGEkcrXIx1U6XCVCQLfN7yFPC%2FNm8IHmxzoNMY%2BXvBqsvd3bCW%2BrN3CEWQWGk7UDiMmyOX24bWta3aN7vnub9hvYQi7Hw1HF%2BZgAl7VLa15Xhv%2BiWkKxahn%2FrytcvmN7lE8A7SDy2Fj03h84NGx4oRVyK2BBCUO7Vq3Sa%2Be6wPYLZ%2BqMoje99UVgWiPRd39fQC2A8mVteNW5zC0jsLCBjqkAf4vM7QnOpz667wgI90hFGUPaSqoorRBof0txKYf2V5olBfj6DcM9knpKDIMXfWkz%2BArAzGExVaMVUxgD1fywrsmgWdYuESPg1mOcUeilKuWLjMHkbb5aZ65Ix%2B2fnaM%2FRAkR5FZ0MkYnmv6u85WBHmXMbortwOD%2BhGK1%2F%2FlbkyrtcRiN1EOfzJUdn8JogZQsXDdylTV6tDiOx%2Bvl%2B3GdYwro5u4&X-Amz-Signature=effd3f513b8396e4b02279f547641e359de852db88bd6c4afa06ff1fe80aa489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

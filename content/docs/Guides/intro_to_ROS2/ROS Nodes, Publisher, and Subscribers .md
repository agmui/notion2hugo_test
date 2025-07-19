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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPZCFM5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzCQfzV1QnJBMYV7y1nHiddWyxSlfFddRsMxaYQBPJxwIhAOH%2F6HKFHcrJDW%2BajEPMDZYXGBWouoZUJseqDYn3FZzEKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8vmq8qB30F31lcUEq3APwoZmVnZHXgfYWwtzu3N2Iunn8fmfcf1X00pdhQXMsJ5cFaqMUs%2BCXBus1eJV%2FWrQ%2FbPah2fkAK%2FLC5WBNkQlN6LiGN7a5yuTY6deJFkH04J78oYdmi9n5jvbiRyBT5jJn6volVdAzCTjtLEzEUU86Uo2m3T9AHyijhxcnFLLjlx2ZbF%2Fzre1HpfwtjreUlODi808ViEyQsRMDhQVFeq5VqPmpOaO%2BYU8dqw3rzTqe080zIaazH3LoUC0XV56yg%2F32uWIyGccV8VoQeZNfuxygSgEUTtCuGfIfj0tlJjitIw5HYAK%2BMHvTChW4HNi%2FUr0lfyG1hBS9aG1q72pQ2%2Bbj8uqPHfhp6%2B7zU9wK1kF9odYS2LCf8EH%2BQVW9kice6sDSBi0mF3bbhmtwDzej3%2FbFIqkKWc%2FZVj8WkzDPF1%2Ba0cYEi6Ry9Wg1Tsh85IRhSbv6yV895Rutat5ZAyggZIku%2BocJy8E8Dk2rX1LGlrHATwNRtkmJzIDv1f0mvFCPcxCB3ZxGV7tUOAF0c6fB%2BPY1xrnCpiql6%2Bk67Zbn%2BFt6%2BiDcZe0EUblGwbaAfjODAzN19kiI2fdcechyO1%2FMNq5ovbSGubguTRYdVWGg1wo%2BNVH2uiCODHB6d%2Fe%2B8TCk4e3DBjqkAYnjBb9Eo4WNTVILhMseP5c5Ch%2F3sF1XqoSx2RBDp4dL9OCT%2FVi%2FaNjwcNmanaB2f1ctXJUpCrrBtOkEIg4AMe2Db4uf8swVCAnx11hi%2FsgwzWfdpmWoqz88hKg1AHHoVOpK%2BAjVAOZXGrZU5aJtHZMumtETd857s%2FUm6uScWNYxO6SM3oxBb6%2BS%2FbcSpIc%2F4FCQ5IFcdRj57hfuikHkxyXdz0SY&X-Amz-Signature=8a6ed185540d20aea40e687cfbf48758447d5bc3d9591d32703555566ffd2359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPZCFM5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzCQfzV1QnJBMYV7y1nHiddWyxSlfFddRsMxaYQBPJxwIhAOH%2F6HKFHcrJDW%2BajEPMDZYXGBWouoZUJseqDYn3FZzEKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8vmq8qB30F31lcUEq3APwoZmVnZHXgfYWwtzu3N2Iunn8fmfcf1X00pdhQXMsJ5cFaqMUs%2BCXBus1eJV%2FWrQ%2FbPah2fkAK%2FLC5WBNkQlN6LiGN7a5yuTY6deJFkH04J78oYdmi9n5jvbiRyBT5jJn6volVdAzCTjtLEzEUU86Uo2m3T9AHyijhxcnFLLjlx2ZbF%2Fzre1HpfwtjreUlODi808ViEyQsRMDhQVFeq5VqPmpOaO%2BYU8dqw3rzTqe080zIaazH3LoUC0XV56yg%2F32uWIyGccV8VoQeZNfuxygSgEUTtCuGfIfj0tlJjitIw5HYAK%2BMHvTChW4HNi%2FUr0lfyG1hBS9aG1q72pQ2%2Bbj8uqPHfhp6%2B7zU9wK1kF9odYS2LCf8EH%2BQVW9kice6sDSBi0mF3bbhmtwDzej3%2FbFIqkKWc%2FZVj8WkzDPF1%2Ba0cYEi6Ry9Wg1Tsh85IRhSbv6yV895Rutat5ZAyggZIku%2BocJy8E8Dk2rX1LGlrHATwNRtkmJzIDv1f0mvFCPcxCB3ZxGV7tUOAF0c6fB%2BPY1xrnCpiql6%2Bk67Zbn%2BFt6%2BiDcZe0EUblGwbaAfjODAzN19kiI2fdcechyO1%2FMNq5ovbSGubguTRYdVWGg1wo%2BNVH2uiCODHB6d%2Fe%2B8TCk4e3DBjqkAYnjBb9Eo4WNTVILhMseP5c5Ch%2F3sF1XqoSx2RBDp4dL9OCT%2FVi%2FaNjwcNmanaB2f1ctXJUpCrrBtOkEIg4AMe2Db4uf8swVCAnx11hi%2FsgwzWfdpmWoqz88hKg1AHHoVOpK%2BAjVAOZXGrZU5aJtHZMumtETd857s%2FUm6uScWNYxO6SM3oxBb6%2BS%2FbcSpIc%2F4FCQ5IFcdRj57hfuikHkxyXdz0SY&X-Amz-Signature=788bb3fa9998d87c65666ec640a3626ff06f0466a7787c10c72de8958b9cf62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPZCFM5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzCQfzV1QnJBMYV7y1nHiddWyxSlfFddRsMxaYQBPJxwIhAOH%2F6HKFHcrJDW%2BajEPMDZYXGBWouoZUJseqDYn3FZzEKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8vmq8qB30F31lcUEq3APwoZmVnZHXgfYWwtzu3N2Iunn8fmfcf1X00pdhQXMsJ5cFaqMUs%2BCXBus1eJV%2FWrQ%2FbPah2fkAK%2FLC5WBNkQlN6LiGN7a5yuTY6deJFkH04J78oYdmi9n5jvbiRyBT5jJn6volVdAzCTjtLEzEUU86Uo2m3T9AHyijhxcnFLLjlx2ZbF%2Fzre1HpfwtjreUlODi808ViEyQsRMDhQVFeq5VqPmpOaO%2BYU8dqw3rzTqe080zIaazH3LoUC0XV56yg%2F32uWIyGccV8VoQeZNfuxygSgEUTtCuGfIfj0tlJjitIw5HYAK%2BMHvTChW4HNi%2FUr0lfyG1hBS9aG1q72pQ2%2Bbj8uqPHfhp6%2B7zU9wK1kF9odYS2LCf8EH%2BQVW9kice6sDSBi0mF3bbhmtwDzej3%2FbFIqkKWc%2FZVj8WkzDPF1%2Ba0cYEi6Ry9Wg1Tsh85IRhSbv6yV895Rutat5ZAyggZIku%2BocJy8E8Dk2rX1LGlrHATwNRtkmJzIDv1f0mvFCPcxCB3ZxGV7tUOAF0c6fB%2BPY1xrnCpiql6%2Bk67Zbn%2BFt6%2BiDcZe0EUblGwbaAfjODAzN19kiI2fdcechyO1%2FMNq5ovbSGubguTRYdVWGg1wo%2BNVH2uiCODHB6d%2Fe%2B8TCk4e3DBjqkAYnjBb9Eo4WNTVILhMseP5c5Ch%2F3sF1XqoSx2RBDp4dL9OCT%2FVi%2FaNjwcNmanaB2f1ctXJUpCrrBtOkEIg4AMe2Db4uf8swVCAnx11hi%2FsgwzWfdpmWoqz88hKg1AHHoVOpK%2BAjVAOZXGrZU5aJtHZMumtETd857s%2FUm6uScWNYxO6SM3oxBb6%2BS%2FbcSpIc%2F4FCQ5IFcdRj57hfuikHkxyXdz0SY&X-Amz-Signature=ec5906ae386af50a5679fc789c894f45b1e0dbdd4e4858244b8afb8770bccee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPZCFM5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzCQfzV1QnJBMYV7y1nHiddWyxSlfFddRsMxaYQBPJxwIhAOH%2F6HKFHcrJDW%2BajEPMDZYXGBWouoZUJseqDYn3FZzEKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8vmq8qB30F31lcUEq3APwoZmVnZHXgfYWwtzu3N2Iunn8fmfcf1X00pdhQXMsJ5cFaqMUs%2BCXBus1eJV%2FWrQ%2FbPah2fkAK%2FLC5WBNkQlN6LiGN7a5yuTY6deJFkH04J78oYdmi9n5jvbiRyBT5jJn6volVdAzCTjtLEzEUU86Uo2m3T9AHyijhxcnFLLjlx2ZbF%2Fzre1HpfwtjreUlODi808ViEyQsRMDhQVFeq5VqPmpOaO%2BYU8dqw3rzTqe080zIaazH3LoUC0XV56yg%2F32uWIyGccV8VoQeZNfuxygSgEUTtCuGfIfj0tlJjitIw5HYAK%2BMHvTChW4HNi%2FUr0lfyG1hBS9aG1q72pQ2%2Bbj8uqPHfhp6%2B7zU9wK1kF9odYS2LCf8EH%2BQVW9kice6sDSBi0mF3bbhmtwDzej3%2FbFIqkKWc%2FZVj8WkzDPF1%2Ba0cYEi6Ry9Wg1Tsh85IRhSbv6yV895Rutat5ZAyggZIku%2BocJy8E8Dk2rX1LGlrHATwNRtkmJzIDv1f0mvFCPcxCB3ZxGV7tUOAF0c6fB%2BPY1xrnCpiql6%2Bk67Zbn%2BFt6%2BiDcZe0EUblGwbaAfjODAzN19kiI2fdcechyO1%2FMNq5ovbSGubguTRYdVWGg1wo%2BNVH2uiCODHB6d%2Fe%2B8TCk4e3DBjqkAYnjBb9Eo4WNTVILhMseP5c5Ch%2F3sF1XqoSx2RBDp4dL9OCT%2FVi%2FaNjwcNmanaB2f1ctXJUpCrrBtOkEIg4AMe2Db4uf8swVCAnx11hi%2FsgwzWfdpmWoqz88hKg1AHHoVOpK%2BAjVAOZXGrZU5aJtHZMumtETd857s%2FUm6uScWNYxO6SM3oxBb6%2BS%2FbcSpIc%2F4FCQ5IFcdRj57hfuikHkxyXdz0SY&X-Amz-Signature=fb344325084f2d824b3a39f58967113a380e3cc350ef1b0170d019aaef356ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPZCFM5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzCQfzV1QnJBMYV7y1nHiddWyxSlfFddRsMxaYQBPJxwIhAOH%2F6HKFHcrJDW%2BajEPMDZYXGBWouoZUJseqDYn3FZzEKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8vmq8qB30F31lcUEq3APwoZmVnZHXgfYWwtzu3N2Iunn8fmfcf1X00pdhQXMsJ5cFaqMUs%2BCXBus1eJV%2FWrQ%2FbPah2fkAK%2FLC5WBNkQlN6LiGN7a5yuTY6deJFkH04J78oYdmi9n5jvbiRyBT5jJn6volVdAzCTjtLEzEUU86Uo2m3T9AHyijhxcnFLLjlx2ZbF%2Fzre1HpfwtjreUlODi808ViEyQsRMDhQVFeq5VqPmpOaO%2BYU8dqw3rzTqe080zIaazH3LoUC0XV56yg%2F32uWIyGccV8VoQeZNfuxygSgEUTtCuGfIfj0tlJjitIw5HYAK%2BMHvTChW4HNi%2FUr0lfyG1hBS9aG1q72pQ2%2Bbj8uqPHfhp6%2B7zU9wK1kF9odYS2LCf8EH%2BQVW9kice6sDSBi0mF3bbhmtwDzej3%2FbFIqkKWc%2FZVj8WkzDPF1%2Ba0cYEi6Ry9Wg1Tsh85IRhSbv6yV895Rutat5ZAyggZIku%2BocJy8E8Dk2rX1LGlrHATwNRtkmJzIDv1f0mvFCPcxCB3ZxGV7tUOAF0c6fB%2BPY1xrnCpiql6%2Bk67Zbn%2BFt6%2BiDcZe0EUblGwbaAfjODAzN19kiI2fdcechyO1%2FMNq5ovbSGubguTRYdVWGg1wo%2BNVH2uiCODHB6d%2Fe%2B8TCk4e3DBjqkAYnjBb9Eo4WNTVILhMseP5c5Ch%2F3sF1XqoSx2RBDp4dL9OCT%2FVi%2FaNjwcNmanaB2f1ctXJUpCrrBtOkEIg4AMe2Db4uf8swVCAnx11hi%2FsgwzWfdpmWoqz88hKg1AHHoVOpK%2BAjVAOZXGrZU5aJtHZMumtETd857s%2FUm6uScWNYxO6SM3oxBb6%2BS%2FbcSpIc%2F4FCQ5IFcdRj57hfuikHkxyXdz0SY&X-Amz-Signature=21716c5fad302d09860d4c760cd6acab529d56b10ed284c4b04f4cdc0f333abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPZCFM5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzCQfzV1QnJBMYV7y1nHiddWyxSlfFddRsMxaYQBPJxwIhAOH%2F6HKFHcrJDW%2BajEPMDZYXGBWouoZUJseqDYn3FZzEKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8vmq8qB30F31lcUEq3APwoZmVnZHXgfYWwtzu3N2Iunn8fmfcf1X00pdhQXMsJ5cFaqMUs%2BCXBus1eJV%2FWrQ%2FbPah2fkAK%2FLC5WBNkQlN6LiGN7a5yuTY6deJFkH04J78oYdmi9n5jvbiRyBT5jJn6volVdAzCTjtLEzEUU86Uo2m3T9AHyijhxcnFLLjlx2ZbF%2Fzre1HpfwtjreUlODi808ViEyQsRMDhQVFeq5VqPmpOaO%2BYU8dqw3rzTqe080zIaazH3LoUC0XV56yg%2F32uWIyGccV8VoQeZNfuxygSgEUTtCuGfIfj0tlJjitIw5HYAK%2BMHvTChW4HNi%2FUr0lfyG1hBS9aG1q72pQ2%2Bbj8uqPHfhp6%2B7zU9wK1kF9odYS2LCf8EH%2BQVW9kice6sDSBi0mF3bbhmtwDzej3%2FbFIqkKWc%2FZVj8WkzDPF1%2Ba0cYEi6Ry9Wg1Tsh85IRhSbv6yV895Rutat5ZAyggZIku%2BocJy8E8Dk2rX1LGlrHATwNRtkmJzIDv1f0mvFCPcxCB3ZxGV7tUOAF0c6fB%2BPY1xrnCpiql6%2Bk67Zbn%2BFt6%2BiDcZe0EUblGwbaAfjODAzN19kiI2fdcechyO1%2FMNq5ovbSGubguTRYdVWGg1wo%2BNVH2uiCODHB6d%2Fe%2B8TCk4e3DBjqkAYnjBb9Eo4WNTVILhMseP5c5Ch%2F3sF1XqoSx2RBDp4dL9OCT%2FVi%2FaNjwcNmanaB2f1ctXJUpCrrBtOkEIg4AMe2Db4uf8swVCAnx11hi%2FsgwzWfdpmWoqz88hKg1AHHoVOpK%2BAjVAOZXGrZU5aJtHZMumtETd857s%2FUm6uScWNYxO6SM3oxBb6%2BS%2FbcSpIc%2F4FCQ5IFcdRj57hfuikHkxyXdz0SY&X-Amz-Signature=bacd92fca2bdaa31969ae85c49e72f73cfff9c82df18f5557161c9ff37d03bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPZCFM5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzCQfzV1QnJBMYV7y1nHiddWyxSlfFddRsMxaYQBPJxwIhAOH%2F6HKFHcrJDW%2BajEPMDZYXGBWouoZUJseqDYn3FZzEKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8vmq8qB30F31lcUEq3APwoZmVnZHXgfYWwtzu3N2Iunn8fmfcf1X00pdhQXMsJ5cFaqMUs%2BCXBus1eJV%2FWrQ%2FbPah2fkAK%2FLC5WBNkQlN6LiGN7a5yuTY6deJFkH04J78oYdmi9n5jvbiRyBT5jJn6volVdAzCTjtLEzEUU86Uo2m3T9AHyijhxcnFLLjlx2ZbF%2Fzre1HpfwtjreUlODi808ViEyQsRMDhQVFeq5VqPmpOaO%2BYU8dqw3rzTqe080zIaazH3LoUC0XV56yg%2F32uWIyGccV8VoQeZNfuxygSgEUTtCuGfIfj0tlJjitIw5HYAK%2BMHvTChW4HNi%2FUr0lfyG1hBS9aG1q72pQ2%2Bbj8uqPHfhp6%2B7zU9wK1kF9odYS2LCf8EH%2BQVW9kice6sDSBi0mF3bbhmtwDzej3%2FbFIqkKWc%2FZVj8WkzDPF1%2Ba0cYEi6Ry9Wg1Tsh85IRhSbv6yV895Rutat5ZAyggZIku%2BocJy8E8Dk2rX1LGlrHATwNRtkmJzIDv1f0mvFCPcxCB3ZxGV7tUOAF0c6fB%2BPY1xrnCpiql6%2Bk67Zbn%2BFt6%2BiDcZe0EUblGwbaAfjODAzN19kiI2fdcechyO1%2FMNq5ovbSGubguTRYdVWGg1wo%2BNVH2uiCODHB6d%2Fe%2B8TCk4e3DBjqkAYnjBb9Eo4WNTVILhMseP5c5Ch%2F3sF1XqoSx2RBDp4dL9OCT%2FVi%2FaNjwcNmanaB2f1ctXJUpCrrBtOkEIg4AMe2Db4uf8swVCAnx11hi%2FsgwzWfdpmWoqz88hKg1AHHoVOpK%2BAjVAOZXGrZU5aJtHZMumtETd857s%2FUm6uScWNYxO6SM3oxBb6%2BS%2FbcSpIc%2F4FCQ5IFcdRj57hfuikHkxyXdz0SY&X-Amz-Signature=c0355dfd2ede08bd8e7b47882ec91804e6ba7eccef1735f1f652b1629f770643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAPZCFM5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzCQfzV1QnJBMYV7y1nHiddWyxSlfFddRsMxaYQBPJxwIhAOH%2F6HKFHcrJDW%2BajEPMDZYXGBWouoZUJseqDYn3FZzEKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8vmq8qB30F31lcUEq3APwoZmVnZHXgfYWwtzu3N2Iunn8fmfcf1X00pdhQXMsJ5cFaqMUs%2BCXBus1eJV%2FWrQ%2FbPah2fkAK%2FLC5WBNkQlN6LiGN7a5yuTY6deJFkH04J78oYdmi9n5jvbiRyBT5jJn6volVdAzCTjtLEzEUU86Uo2m3T9AHyijhxcnFLLjlx2ZbF%2Fzre1HpfwtjreUlODi808ViEyQsRMDhQVFeq5VqPmpOaO%2BYU8dqw3rzTqe080zIaazH3LoUC0XV56yg%2F32uWIyGccV8VoQeZNfuxygSgEUTtCuGfIfj0tlJjitIw5HYAK%2BMHvTChW4HNi%2FUr0lfyG1hBS9aG1q72pQ2%2Bbj8uqPHfhp6%2B7zU9wK1kF9odYS2LCf8EH%2BQVW9kice6sDSBi0mF3bbhmtwDzej3%2FbFIqkKWc%2FZVj8WkzDPF1%2Ba0cYEi6Ry9Wg1Tsh85IRhSbv6yV895Rutat5ZAyggZIku%2BocJy8E8Dk2rX1LGlrHATwNRtkmJzIDv1f0mvFCPcxCB3ZxGV7tUOAF0c6fB%2BPY1xrnCpiql6%2Bk67Zbn%2BFt6%2BiDcZe0EUblGwbaAfjODAzN19kiI2fdcechyO1%2FMNq5ovbSGubguTRYdVWGg1wo%2BNVH2uiCODHB6d%2Fe%2B8TCk4e3DBjqkAYnjBb9Eo4WNTVILhMseP5c5Ch%2F3sF1XqoSx2RBDp4dL9OCT%2FVi%2FaNjwcNmanaB2f1ctXJUpCrrBtOkEIg4AMe2Db4uf8swVCAnx11hi%2FsgwzWfdpmWoqz88hKg1AHHoVOpK%2BAjVAOZXGrZU5aJtHZMumtETd857s%2FUm6uScWNYxO6SM3oxBb6%2BS%2FbcSpIc%2F4FCQ5IFcdRj57hfuikHkxyXdz0SY&X-Amz-Signature=79dbcb038b4a795758a381db06b77343b6b12f90e57123b86a63d66d8b2b9c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

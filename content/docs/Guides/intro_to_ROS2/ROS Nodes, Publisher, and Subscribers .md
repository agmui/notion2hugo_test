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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TX7ZXOM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxj%2FTAv3rik0HLJ6j%2BBR%2BM9vm89HEteTZlD9zQ3lruGAiBnUyIKpTigvAWLo%2Fzkwxrpi79Fj6YiYdV%2BiopzyOC7LSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnuOc2r5AbnQaHQlKtwDdL1jTuW0L9n%2FZ%2BEsWThkKQJ908T4hhv%2FzluoXXU4vIoZfhmuPkuuWCquDw6eOJJJc5Wg9SGnB4fc0DOl%2BL4IrsvHGqAt0Dn%2FKbsXLRJrKp9OdyqojAP%2BKYpvfs3w3iVovi0cs7aoxcdJlFp7u6yJrmnL4q5cf5qgDi14fa1YyOa6DNHhwDxf%2FETWPgtYedhg4%2BY9PD8q29jRfKfPMugDfeO8jKFJJEB7kLny8ciwRR0Db5RktgUkmK9HEoHvbTy5IVK0QP4Ufgboq6tCsPwME2emyAcR5dLPeM4MSiTOSCbEwXs%2Bc9qWVRbN3QcGqGCiYa4uzT3m8xr21%2BGNbIHxX19UN6hOHR7%2BjJ8Bmp13rhRKQvzpBLBPl0WVgUfoMdKy%2F6QVL4Ww%2F79Z3MBig8hLK9fBbfAI40hLpi0YJnIyIk3zNTdKY9iR%2F8tL61qpsNrce23jiGBqY5mWGAUlSNM6knTGkRUwUlN5En4%2BFQykQHOiTWZyOEcAvSzO7v4P%2FgIQ2kXnqtEBnK2eUVm3cu6yc1B3x8Xnls29VirEm0b%2B%2Bwt7XJhtqpC6Kmb2qc7KUf3MY5r42bUsni1n2VEZGmxQV3MSYHsBEqcjk7fY4SLc3nqs8lCppsV045haNiswuaTsvAY6pgEQjCuW9dfFsxyIbyxwpDtWrdkuxz1IZo9nCPIX%2Fj60wfRhB%2ButcBHW4%2FqV2bUaE9C4aOlDf3W349uvA9f2%2B18BA9znjU3EP726G8l864hcRJTXa3L3Xso0P6YDqPXAHmLsD0jrjC6c2k3%2BfnsevtdAxwvmzLpRXqJvLmH2IGBiLGQCnVjH7VU0zRVxiGBzTZBPdzuvuzAFhMPVBFVXl7Vgqdqvxno0&X-Amz-Signature=e4c5432607c5d7cd4b1db8fd92ab304d622b8151013274cb7b822e67442c976a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TX7ZXOM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxj%2FTAv3rik0HLJ6j%2BBR%2BM9vm89HEteTZlD9zQ3lruGAiBnUyIKpTigvAWLo%2Fzkwxrpi79Fj6YiYdV%2BiopzyOC7LSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnuOc2r5AbnQaHQlKtwDdL1jTuW0L9n%2FZ%2BEsWThkKQJ908T4hhv%2FzluoXXU4vIoZfhmuPkuuWCquDw6eOJJJc5Wg9SGnB4fc0DOl%2BL4IrsvHGqAt0Dn%2FKbsXLRJrKp9OdyqojAP%2BKYpvfs3w3iVovi0cs7aoxcdJlFp7u6yJrmnL4q5cf5qgDi14fa1YyOa6DNHhwDxf%2FETWPgtYedhg4%2BY9PD8q29jRfKfPMugDfeO8jKFJJEB7kLny8ciwRR0Db5RktgUkmK9HEoHvbTy5IVK0QP4Ufgboq6tCsPwME2emyAcR5dLPeM4MSiTOSCbEwXs%2Bc9qWVRbN3QcGqGCiYa4uzT3m8xr21%2BGNbIHxX19UN6hOHR7%2BjJ8Bmp13rhRKQvzpBLBPl0WVgUfoMdKy%2F6QVL4Ww%2F79Z3MBig8hLK9fBbfAI40hLpi0YJnIyIk3zNTdKY9iR%2F8tL61qpsNrce23jiGBqY5mWGAUlSNM6knTGkRUwUlN5En4%2BFQykQHOiTWZyOEcAvSzO7v4P%2FgIQ2kXnqtEBnK2eUVm3cu6yc1B3x8Xnls29VirEm0b%2B%2Bwt7XJhtqpC6Kmb2qc7KUf3MY5r42bUsni1n2VEZGmxQV3MSYHsBEqcjk7fY4SLc3nqs8lCppsV045haNiswuaTsvAY6pgEQjCuW9dfFsxyIbyxwpDtWrdkuxz1IZo9nCPIX%2Fj60wfRhB%2ButcBHW4%2FqV2bUaE9C4aOlDf3W349uvA9f2%2B18BA9znjU3EP726G8l864hcRJTXa3L3Xso0P6YDqPXAHmLsD0jrjC6c2k3%2BfnsevtdAxwvmzLpRXqJvLmH2IGBiLGQCnVjH7VU0zRVxiGBzTZBPdzuvuzAFhMPVBFVXl7Vgqdqvxno0&X-Amz-Signature=c74c8b70fe3ba3a4eebbffdc8580901cb4be204442c8cbd46bed09f402a1b6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TX7ZXOM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxj%2FTAv3rik0HLJ6j%2BBR%2BM9vm89HEteTZlD9zQ3lruGAiBnUyIKpTigvAWLo%2Fzkwxrpi79Fj6YiYdV%2BiopzyOC7LSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnuOc2r5AbnQaHQlKtwDdL1jTuW0L9n%2FZ%2BEsWThkKQJ908T4hhv%2FzluoXXU4vIoZfhmuPkuuWCquDw6eOJJJc5Wg9SGnB4fc0DOl%2BL4IrsvHGqAt0Dn%2FKbsXLRJrKp9OdyqojAP%2BKYpvfs3w3iVovi0cs7aoxcdJlFp7u6yJrmnL4q5cf5qgDi14fa1YyOa6DNHhwDxf%2FETWPgtYedhg4%2BY9PD8q29jRfKfPMugDfeO8jKFJJEB7kLny8ciwRR0Db5RktgUkmK9HEoHvbTy5IVK0QP4Ufgboq6tCsPwME2emyAcR5dLPeM4MSiTOSCbEwXs%2Bc9qWVRbN3QcGqGCiYa4uzT3m8xr21%2BGNbIHxX19UN6hOHR7%2BjJ8Bmp13rhRKQvzpBLBPl0WVgUfoMdKy%2F6QVL4Ww%2F79Z3MBig8hLK9fBbfAI40hLpi0YJnIyIk3zNTdKY9iR%2F8tL61qpsNrce23jiGBqY5mWGAUlSNM6knTGkRUwUlN5En4%2BFQykQHOiTWZyOEcAvSzO7v4P%2FgIQ2kXnqtEBnK2eUVm3cu6yc1B3x8Xnls29VirEm0b%2B%2Bwt7XJhtqpC6Kmb2qc7KUf3MY5r42bUsni1n2VEZGmxQV3MSYHsBEqcjk7fY4SLc3nqs8lCppsV045haNiswuaTsvAY6pgEQjCuW9dfFsxyIbyxwpDtWrdkuxz1IZo9nCPIX%2Fj60wfRhB%2ButcBHW4%2FqV2bUaE9C4aOlDf3W349uvA9f2%2B18BA9znjU3EP726G8l864hcRJTXa3L3Xso0P6YDqPXAHmLsD0jrjC6c2k3%2BfnsevtdAxwvmzLpRXqJvLmH2IGBiLGQCnVjH7VU0zRVxiGBzTZBPdzuvuzAFhMPVBFVXl7Vgqdqvxno0&X-Amz-Signature=a529c435981d94754945a75b2e0b4a10e92be131e42c9d4932f0044f230bfe3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TX7ZXOM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxj%2FTAv3rik0HLJ6j%2BBR%2BM9vm89HEteTZlD9zQ3lruGAiBnUyIKpTigvAWLo%2Fzkwxrpi79Fj6YiYdV%2BiopzyOC7LSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnuOc2r5AbnQaHQlKtwDdL1jTuW0L9n%2FZ%2BEsWThkKQJ908T4hhv%2FzluoXXU4vIoZfhmuPkuuWCquDw6eOJJJc5Wg9SGnB4fc0DOl%2BL4IrsvHGqAt0Dn%2FKbsXLRJrKp9OdyqojAP%2BKYpvfs3w3iVovi0cs7aoxcdJlFp7u6yJrmnL4q5cf5qgDi14fa1YyOa6DNHhwDxf%2FETWPgtYedhg4%2BY9PD8q29jRfKfPMugDfeO8jKFJJEB7kLny8ciwRR0Db5RktgUkmK9HEoHvbTy5IVK0QP4Ufgboq6tCsPwME2emyAcR5dLPeM4MSiTOSCbEwXs%2Bc9qWVRbN3QcGqGCiYa4uzT3m8xr21%2BGNbIHxX19UN6hOHR7%2BjJ8Bmp13rhRKQvzpBLBPl0WVgUfoMdKy%2F6QVL4Ww%2F79Z3MBig8hLK9fBbfAI40hLpi0YJnIyIk3zNTdKY9iR%2F8tL61qpsNrce23jiGBqY5mWGAUlSNM6knTGkRUwUlN5En4%2BFQykQHOiTWZyOEcAvSzO7v4P%2FgIQ2kXnqtEBnK2eUVm3cu6yc1B3x8Xnls29VirEm0b%2B%2Bwt7XJhtqpC6Kmb2qc7KUf3MY5r42bUsni1n2VEZGmxQV3MSYHsBEqcjk7fY4SLc3nqs8lCppsV045haNiswuaTsvAY6pgEQjCuW9dfFsxyIbyxwpDtWrdkuxz1IZo9nCPIX%2Fj60wfRhB%2ButcBHW4%2FqV2bUaE9C4aOlDf3W349uvA9f2%2B18BA9znjU3EP726G8l864hcRJTXa3L3Xso0P6YDqPXAHmLsD0jrjC6c2k3%2BfnsevtdAxwvmzLpRXqJvLmH2IGBiLGQCnVjH7VU0zRVxiGBzTZBPdzuvuzAFhMPVBFVXl7Vgqdqvxno0&X-Amz-Signature=8f9d4ea46591390884d57071f9bbdba44f9a3bbbbfe3cf2f0bd75e283065c156&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TX7ZXOM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxj%2FTAv3rik0HLJ6j%2BBR%2BM9vm89HEteTZlD9zQ3lruGAiBnUyIKpTigvAWLo%2Fzkwxrpi79Fj6YiYdV%2BiopzyOC7LSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnuOc2r5AbnQaHQlKtwDdL1jTuW0L9n%2FZ%2BEsWThkKQJ908T4hhv%2FzluoXXU4vIoZfhmuPkuuWCquDw6eOJJJc5Wg9SGnB4fc0DOl%2BL4IrsvHGqAt0Dn%2FKbsXLRJrKp9OdyqojAP%2BKYpvfs3w3iVovi0cs7aoxcdJlFp7u6yJrmnL4q5cf5qgDi14fa1YyOa6DNHhwDxf%2FETWPgtYedhg4%2BY9PD8q29jRfKfPMugDfeO8jKFJJEB7kLny8ciwRR0Db5RktgUkmK9HEoHvbTy5IVK0QP4Ufgboq6tCsPwME2emyAcR5dLPeM4MSiTOSCbEwXs%2Bc9qWVRbN3QcGqGCiYa4uzT3m8xr21%2BGNbIHxX19UN6hOHR7%2BjJ8Bmp13rhRKQvzpBLBPl0WVgUfoMdKy%2F6QVL4Ww%2F79Z3MBig8hLK9fBbfAI40hLpi0YJnIyIk3zNTdKY9iR%2F8tL61qpsNrce23jiGBqY5mWGAUlSNM6knTGkRUwUlN5En4%2BFQykQHOiTWZyOEcAvSzO7v4P%2FgIQ2kXnqtEBnK2eUVm3cu6yc1B3x8Xnls29VirEm0b%2B%2Bwt7XJhtqpC6Kmb2qc7KUf3MY5r42bUsni1n2VEZGmxQV3MSYHsBEqcjk7fY4SLc3nqs8lCppsV045haNiswuaTsvAY6pgEQjCuW9dfFsxyIbyxwpDtWrdkuxz1IZo9nCPIX%2Fj60wfRhB%2ButcBHW4%2FqV2bUaE9C4aOlDf3W349uvA9f2%2B18BA9znjU3EP726G8l864hcRJTXa3L3Xso0P6YDqPXAHmLsD0jrjC6c2k3%2BfnsevtdAxwvmzLpRXqJvLmH2IGBiLGQCnVjH7VU0zRVxiGBzTZBPdzuvuzAFhMPVBFVXl7Vgqdqvxno0&X-Amz-Signature=bf356d1bd54a96804b8ff2321ccc4fa39a1fc6cee200b5c55a082d6bfc31df29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TX7ZXOM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxj%2FTAv3rik0HLJ6j%2BBR%2BM9vm89HEteTZlD9zQ3lruGAiBnUyIKpTigvAWLo%2Fzkwxrpi79Fj6YiYdV%2BiopzyOC7LSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnuOc2r5AbnQaHQlKtwDdL1jTuW0L9n%2FZ%2BEsWThkKQJ908T4hhv%2FzluoXXU4vIoZfhmuPkuuWCquDw6eOJJJc5Wg9SGnB4fc0DOl%2BL4IrsvHGqAt0Dn%2FKbsXLRJrKp9OdyqojAP%2BKYpvfs3w3iVovi0cs7aoxcdJlFp7u6yJrmnL4q5cf5qgDi14fa1YyOa6DNHhwDxf%2FETWPgtYedhg4%2BY9PD8q29jRfKfPMugDfeO8jKFJJEB7kLny8ciwRR0Db5RktgUkmK9HEoHvbTy5IVK0QP4Ufgboq6tCsPwME2emyAcR5dLPeM4MSiTOSCbEwXs%2Bc9qWVRbN3QcGqGCiYa4uzT3m8xr21%2BGNbIHxX19UN6hOHR7%2BjJ8Bmp13rhRKQvzpBLBPl0WVgUfoMdKy%2F6QVL4Ww%2F79Z3MBig8hLK9fBbfAI40hLpi0YJnIyIk3zNTdKY9iR%2F8tL61qpsNrce23jiGBqY5mWGAUlSNM6knTGkRUwUlN5En4%2BFQykQHOiTWZyOEcAvSzO7v4P%2FgIQ2kXnqtEBnK2eUVm3cu6yc1B3x8Xnls29VirEm0b%2B%2Bwt7XJhtqpC6Kmb2qc7KUf3MY5r42bUsni1n2VEZGmxQV3MSYHsBEqcjk7fY4SLc3nqs8lCppsV045haNiswuaTsvAY6pgEQjCuW9dfFsxyIbyxwpDtWrdkuxz1IZo9nCPIX%2Fj60wfRhB%2ButcBHW4%2FqV2bUaE9C4aOlDf3W349uvA9f2%2B18BA9znjU3EP726G8l864hcRJTXa3L3Xso0P6YDqPXAHmLsD0jrjC6c2k3%2BfnsevtdAxwvmzLpRXqJvLmH2IGBiLGQCnVjH7VU0zRVxiGBzTZBPdzuvuzAFhMPVBFVXl7Vgqdqvxno0&X-Amz-Signature=470d9636dcfc8ea9a9364a91b023f16f441762d2bf3e67479ff5036dd6757934&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TX7ZXOM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxj%2FTAv3rik0HLJ6j%2BBR%2BM9vm89HEteTZlD9zQ3lruGAiBnUyIKpTigvAWLo%2Fzkwxrpi79Fj6YiYdV%2BiopzyOC7LSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnuOc2r5AbnQaHQlKtwDdL1jTuW0L9n%2FZ%2BEsWThkKQJ908T4hhv%2FzluoXXU4vIoZfhmuPkuuWCquDw6eOJJJc5Wg9SGnB4fc0DOl%2BL4IrsvHGqAt0Dn%2FKbsXLRJrKp9OdyqojAP%2BKYpvfs3w3iVovi0cs7aoxcdJlFp7u6yJrmnL4q5cf5qgDi14fa1YyOa6DNHhwDxf%2FETWPgtYedhg4%2BY9PD8q29jRfKfPMugDfeO8jKFJJEB7kLny8ciwRR0Db5RktgUkmK9HEoHvbTy5IVK0QP4Ufgboq6tCsPwME2emyAcR5dLPeM4MSiTOSCbEwXs%2Bc9qWVRbN3QcGqGCiYa4uzT3m8xr21%2BGNbIHxX19UN6hOHR7%2BjJ8Bmp13rhRKQvzpBLBPl0WVgUfoMdKy%2F6QVL4Ww%2F79Z3MBig8hLK9fBbfAI40hLpi0YJnIyIk3zNTdKY9iR%2F8tL61qpsNrce23jiGBqY5mWGAUlSNM6knTGkRUwUlN5En4%2BFQykQHOiTWZyOEcAvSzO7v4P%2FgIQ2kXnqtEBnK2eUVm3cu6yc1B3x8Xnls29VirEm0b%2B%2Bwt7XJhtqpC6Kmb2qc7KUf3MY5r42bUsni1n2VEZGmxQV3MSYHsBEqcjk7fY4SLc3nqs8lCppsV045haNiswuaTsvAY6pgEQjCuW9dfFsxyIbyxwpDtWrdkuxz1IZo9nCPIX%2Fj60wfRhB%2ButcBHW4%2FqV2bUaE9C4aOlDf3W349uvA9f2%2B18BA9znjU3EP726G8l864hcRJTXa3L3Xso0P6YDqPXAHmLsD0jrjC6c2k3%2BfnsevtdAxwvmzLpRXqJvLmH2IGBiLGQCnVjH7VU0zRVxiGBzTZBPdzuvuzAFhMPVBFVXl7Vgqdqvxno0&X-Amz-Signature=9ee0414c716a6f1c1708cc4a842932b2a11dc7f263f0a3f682f5ce2382d70679&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TX7ZXOM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxj%2FTAv3rik0HLJ6j%2BBR%2BM9vm89HEteTZlD9zQ3lruGAiBnUyIKpTigvAWLo%2Fzkwxrpi79Fj6YiYdV%2BiopzyOC7LSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnuOc2r5AbnQaHQlKtwDdL1jTuW0L9n%2FZ%2BEsWThkKQJ908T4hhv%2FzluoXXU4vIoZfhmuPkuuWCquDw6eOJJJc5Wg9SGnB4fc0DOl%2BL4IrsvHGqAt0Dn%2FKbsXLRJrKp9OdyqojAP%2BKYpvfs3w3iVovi0cs7aoxcdJlFp7u6yJrmnL4q5cf5qgDi14fa1YyOa6DNHhwDxf%2FETWPgtYedhg4%2BY9PD8q29jRfKfPMugDfeO8jKFJJEB7kLny8ciwRR0Db5RktgUkmK9HEoHvbTy5IVK0QP4Ufgboq6tCsPwME2emyAcR5dLPeM4MSiTOSCbEwXs%2Bc9qWVRbN3QcGqGCiYa4uzT3m8xr21%2BGNbIHxX19UN6hOHR7%2BjJ8Bmp13rhRKQvzpBLBPl0WVgUfoMdKy%2F6QVL4Ww%2F79Z3MBig8hLK9fBbfAI40hLpi0YJnIyIk3zNTdKY9iR%2F8tL61qpsNrce23jiGBqY5mWGAUlSNM6knTGkRUwUlN5En4%2BFQykQHOiTWZyOEcAvSzO7v4P%2FgIQ2kXnqtEBnK2eUVm3cu6yc1B3x8Xnls29VirEm0b%2B%2Bwt7XJhtqpC6Kmb2qc7KUf3MY5r42bUsni1n2VEZGmxQV3MSYHsBEqcjk7fY4SLc3nqs8lCppsV045haNiswuaTsvAY6pgEQjCuW9dfFsxyIbyxwpDtWrdkuxz1IZo9nCPIX%2Fj60wfRhB%2ButcBHW4%2FqV2bUaE9C4aOlDf3W349uvA9f2%2B18BA9znjU3EP726G8l864hcRJTXa3L3Xso0P6YDqPXAHmLsD0jrjC6c2k3%2BfnsevtdAxwvmzLpRXqJvLmH2IGBiLGQCnVjH7VU0zRVxiGBzTZBPdzuvuzAFhMPVBFVXl7Vgqdqvxno0&X-Amz-Signature=9a54e82f86b05c91b7bacb3d78671e7c54a8188a5fed80c670e691da5c9eb373&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

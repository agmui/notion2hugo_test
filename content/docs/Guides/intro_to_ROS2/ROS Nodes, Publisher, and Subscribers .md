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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVWQTWK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA%2B5rZNFlaxUQYdi6lXmBB%2Fckat7sE7XkkkpghZPiBbAiAcamVb4QJ7SlQZoaj9FVoVcRKwIoEbU06qIhJ1XZylZSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBT3c5ls6VAxC1%2BxKtwDxtLYXDkMEk5o2UzM33yGzcWYwzyE6ZJpBvwpWPBcUFG0kWhEYPDJ9zMNDfmKlR7kqmX0OnfPO1P0WtyMqqXIMyKiMcH%2BAf1XOhSjxfMsGbloxpxwSKyxgzfRDJdUpYCBKxxGaYRQ7VUs1S2fx8%2F26A5r%2BacTb1I4QbYRynLhGYN%2Fqoj9OorHWa7w6dCHTE8uCiUb%2F9r0VXbUFhQ72%2BEExtAAeGHstCDo9Vw%2FvPuFxPjhxzUsx1Eftmjz3RFbviExn547aUYaOUd%2BAvWnqw1gjtnceBpVX9UMoaq3KDWyYsp%2FDJFf%2BCPB8Yf%2F0ta5Y81DuEYCh2yKI5rXkkuEIil3qe3rdW1Dt0u5Ytzt9UJkKGqPEzgcoxHkvA%2F9Rcm9HC6xXtu0%2FE6WPPIhd84W2n2Xr9BD4bxXmc4y5rYlHP8xbL0UQOk0n6xUJR9s%2Ff%2BjRs5fo2QlFHyzbL%2FGdU6Y0E%2BqzkFZ%2FbTCalkd6Lk5gRvRKJfGrg5X9peTy6qm1v%2BPjjeyTHKYn%2FVht2IgVbohpUbFp8x%2F8DLuSQSDoSUpXi44rJ66D2pVTJGN3OffM4LLsDlEBFJcqld5z1%2BqADCLB8KoeU9cX6qdiAU%2Fsvulb9LX87oAvgwZ0gr%2F7i0h1KMwlIiQwwY6pgGJR3%2FDgEZvxEOgjQN%2F7IZOIy9zUfaWvIY6I9F2N8oCY43%2B7EUPbHBQqEvcC8liTKQoxELHpYrGe3EBdYsuFC1L9lFVG4alSPXrwu2IPBNMmWkhWSgg0jR%2B%2BROYougqhVg5c%2BvsLyD27f8ttsYRa64cUMTK%2FtvVrfb0b7G8gyhGMApPzhYn2gz%2FTdlgXoL6edu4HOYE%2FfTDnatLYDlJIe3LYfJYiRTy&X-Amz-Signature=d587a3a233acb85a3808211c836475aacb1d858a7951ee21b894b638d1dd7cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVWQTWK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA%2B5rZNFlaxUQYdi6lXmBB%2Fckat7sE7XkkkpghZPiBbAiAcamVb4QJ7SlQZoaj9FVoVcRKwIoEbU06qIhJ1XZylZSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBT3c5ls6VAxC1%2BxKtwDxtLYXDkMEk5o2UzM33yGzcWYwzyE6ZJpBvwpWPBcUFG0kWhEYPDJ9zMNDfmKlR7kqmX0OnfPO1P0WtyMqqXIMyKiMcH%2BAf1XOhSjxfMsGbloxpxwSKyxgzfRDJdUpYCBKxxGaYRQ7VUs1S2fx8%2F26A5r%2BacTb1I4QbYRynLhGYN%2Fqoj9OorHWa7w6dCHTE8uCiUb%2F9r0VXbUFhQ72%2BEExtAAeGHstCDo9Vw%2FvPuFxPjhxzUsx1Eftmjz3RFbviExn547aUYaOUd%2BAvWnqw1gjtnceBpVX9UMoaq3KDWyYsp%2FDJFf%2BCPB8Yf%2F0ta5Y81DuEYCh2yKI5rXkkuEIil3qe3rdW1Dt0u5Ytzt9UJkKGqPEzgcoxHkvA%2F9Rcm9HC6xXtu0%2FE6WPPIhd84W2n2Xr9BD4bxXmc4y5rYlHP8xbL0UQOk0n6xUJR9s%2Ff%2BjRs5fo2QlFHyzbL%2FGdU6Y0E%2BqzkFZ%2FbTCalkd6Lk5gRvRKJfGrg5X9peTy6qm1v%2BPjjeyTHKYn%2FVht2IgVbohpUbFp8x%2F8DLuSQSDoSUpXi44rJ66D2pVTJGN3OffM4LLsDlEBFJcqld5z1%2BqADCLB8KoeU9cX6qdiAU%2Fsvulb9LX87oAvgwZ0gr%2F7i0h1KMwlIiQwwY6pgGJR3%2FDgEZvxEOgjQN%2F7IZOIy9zUfaWvIY6I9F2N8oCY43%2B7EUPbHBQqEvcC8liTKQoxELHpYrGe3EBdYsuFC1L9lFVG4alSPXrwu2IPBNMmWkhWSgg0jR%2B%2BROYougqhVg5c%2BvsLyD27f8ttsYRa64cUMTK%2FtvVrfb0b7G8gyhGMApPzhYn2gz%2FTdlgXoL6edu4HOYE%2FfTDnatLYDlJIe3LYfJYiRTy&X-Amz-Signature=83f288a7036efe8702b4c2991873042c6a59042619a2fb779f679f07d2780793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVWQTWK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA%2B5rZNFlaxUQYdi6lXmBB%2Fckat7sE7XkkkpghZPiBbAiAcamVb4QJ7SlQZoaj9FVoVcRKwIoEbU06qIhJ1XZylZSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBT3c5ls6VAxC1%2BxKtwDxtLYXDkMEk5o2UzM33yGzcWYwzyE6ZJpBvwpWPBcUFG0kWhEYPDJ9zMNDfmKlR7kqmX0OnfPO1P0WtyMqqXIMyKiMcH%2BAf1XOhSjxfMsGbloxpxwSKyxgzfRDJdUpYCBKxxGaYRQ7VUs1S2fx8%2F26A5r%2BacTb1I4QbYRynLhGYN%2Fqoj9OorHWa7w6dCHTE8uCiUb%2F9r0VXbUFhQ72%2BEExtAAeGHstCDo9Vw%2FvPuFxPjhxzUsx1Eftmjz3RFbviExn547aUYaOUd%2BAvWnqw1gjtnceBpVX9UMoaq3KDWyYsp%2FDJFf%2BCPB8Yf%2F0ta5Y81DuEYCh2yKI5rXkkuEIil3qe3rdW1Dt0u5Ytzt9UJkKGqPEzgcoxHkvA%2F9Rcm9HC6xXtu0%2FE6WPPIhd84W2n2Xr9BD4bxXmc4y5rYlHP8xbL0UQOk0n6xUJR9s%2Ff%2BjRs5fo2QlFHyzbL%2FGdU6Y0E%2BqzkFZ%2FbTCalkd6Lk5gRvRKJfGrg5X9peTy6qm1v%2BPjjeyTHKYn%2FVht2IgVbohpUbFp8x%2F8DLuSQSDoSUpXi44rJ66D2pVTJGN3OffM4LLsDlEBFJcqld5z1%2BqADCLB8KoeU9cX6qdiAU%2Fsvulb9LX87oAvgwZ0gr%2F7i0h1KMwlIiQwwY6pgGJR3%2FDgEZvxEOgjQN%2F7IZOIy9zUfaWvIY6I9F2N8oCY43%2B7EUPbHBQqEvcC8liTKQoxELHpYrGe3EBdYsuFC1L9lFVG4alSPXrwu2IPBNMmWkhWSgg0jR%2B%2BROYougqhVg5c%2BvsLyD27f8ttsYRa64cUMTK%2FtvVrfb0b7G8gyhGMApPzhYn2gz%2FTdlgXoL6edu4HOYE%2FfTDnatLYDlJIe3LYfJYiRTy&X-Amz-Signature=c3defee865cd2a69e21cd8547951383ac734e467c9792adafd5ccbe62a1823b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVWQTWK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA%2B5rZNFlaxUQYdi6lXmBB%2Fckat7sE7XkkkpghZPiBbAiAcamVb4QJ7SlQZoaj9FVoVcRKwIoEbU06qIhJ1XZylZSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBT3c5ls6VAxC1%2BxKtwDxtLYXDkMEk5o2UzM33yGzcWYwzyE6ZJpBvwpWPBcUFG0kWhEYPDJ9zMNDfmKlR7kqmX0OnfPO1P0WtyMqqXIMyKiMcH%2BAf1XOhSjxfMsGbloxpxwSKyxgzfRDJdUpYCBKxxGaYRQ7VUs1S2fx8%2F26A5r%2BacTb1I4QbYRynLhGYN%2Fqoj9OorHWa7w6dCHTE8uCiUb%2F9r0VXbUFhQ72%2BEExtAAeGHstCDo9Vw%2FvPuFxPjhxzUsx1Eftmjz3RFbviExn547aUYaOUd%2BAvWnqw1gjtnceBpVX9UMoaq3KDWyYsp%2FDJFf%2BCPB8Yf%2F0ta5Y81DuEYCh2yKI5rXkkuEIil3qe3rdW1Dt0u5Ytzt9UJkKGqPEzgcoxHkvA%2F9Rcm9HC6xXtu0%2FE6WPPIhd84W2n2Xr9BD4bxXmc4y5rYlHP8xbL0UQOk0n6xUJR9s%2Ff%2BjRs5fo2QlFHyzbL%2FGdU6Y0E%2BqzkFZ%2FbTCalkd6Lk5gRvRKJfGrg5X9peTy6qm1v%2BPjjeyTHKYn%2FVht2IgVbohpUbFp8x%2F8DLuSQSDoSUpXi44rJ66D2pVTJGN3OffM4LLsDlEBFJcqld5z1%2BqADCLB8KoeU9cX6qdiAU%2Fsvulb9LX87oAvgwZ0gr%2F7i0h1KMwlIiQwwY6pgGJR3%2FDgEZvxEOgjQN%2F7IZOIy9zUfaWvIY6I9F2N8oCY43%2B7EUPbHBQqEvcC8liTKQoxELHpYrGe3EBdYsuFC1L9lFVG4alSPXrwu2IPBNMmWkhWSgg0jR%2B%2BROYougqhVg5c%2BvsLyD27f8ttsYRa64cUMTK%2FtvVrfb0b7G8gyhGMApPzhYn2gz%2FTdlgXoL6edu4HOYE%2FfTDnatLYDlJIe3LYfJYiRTy&X-Amz-Signature=88bd4d9b89c14da1f5ac5a64ef1c96107d0e29ff85110a23619b5d7a829e6d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVWQTWK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA%2B5rZNFlaxUQYdi6lXmBB%2Fckat7sE7XkkkpghZPiBbAiAcamVb4QJ7SlQZoaj9FVoVcRKwIoEbU06qIhJ1XZylZSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBT3c5ls6VAxC1%2BxKtwDxtLYXDkMEk5o2UzM33yGzcWYwzyE6ZJpBvwpWPBcUFG0kWhEYPDJ9zMNDfmKlR7kqmX0OnfPO1P0WtyMqqXIMyKiMcH%2BAf1XOhSjxfMsGbloxpxwSKyxgzfRDJdUpYCBKxxGaYRQ7VUs1S2fx8%2F26A5r%2BacTb1I4QbYRynLhGYN%2Fqoj9OorHWa7w6dCHTE8uCiUb%2F9r0VXbUFhQ72%2BEExtAAeGHstCDo9Vw%2FvPuFxPjhxzUsx1Eftmjz3RFbviExn547aUYaOUd%2BAvWnqw1gjtnceBpVX9UMoaq3KDWyYsp%2FDJFf%2BCPB8Yf%2F0ta5Y81DuEYCh2yKI5rXkkuEIil3qe3rdW1Dt0u5Ytzt9UJkKGqPEzgcoxHkvA%2F9Rcm9HC6xXtu0%2FE6WPPIhd84W2n2Xr9BD4bxXmc4y5rYlHP8xbL0UQOk0n6xUJR9s%2Ff%2BjRs5fo2QlFHyzbL%2FGdU6Y0E%2BqzkFZ%2FbTCalkd6Lk5gRvRKJfGrg5X9peTy6qm1v%2BPjjeyTHKYn%2FVht2IgVbohpUbFp8x%2F8DLuSQSDoSUpXi44rJ66D2pVTJGN3OffM4LLsDlEBFJcqld5z1%2BqADCLB8KoeU9cX6qdiAU%2Fsvulb9LX87oAvgwZ0gr%2F7i0h1KMwlIiQwwY6pgGJR3%2FDgEZvxEOgjQN%2F7IZOIy9zUfaWvIY6I9F2N8oCY43%2B7EUPbHBQqEvcC8liTKQoxELHpYrGe3EBdYsuFC1L9lFVG4alSPXrwu2IPBNMmWkhWSgg0jR%2B%2BROYougqhVg5c%2BvsLyD27f8ttsYRa64cUMTK%2FtvVrfb0b7G8gyhGMApPzhYn2gz%2FTdlgXoL6edu4HOYE%2FfTDnatLYDlJIe3LYfJYiRTy&X-Amz-Signature=e720c396a71f2d504999151f8eb2ef54b4ad1239fd1ff8255960bb82c46180fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVWQTWK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA%2B5rZNFlaxUQYdi6lXmBB%2Fckat7sE7XkkkpghZPiBbAiAcamVb4QJ7SlQZoaj9FVoVcRKwIoEbU06qIhJ1XZylZSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBT3c5ls6VAxC1%2BxKtwDxtLYXDkMEk5o2UzM33yGzcWYwzyE6ZJpBvwpWPBcUFG0kWhEYPDJ9zMNDfmKlR7kqmX0OnfPO1P0WtyMqqXIMyKiMcH%2BAf1XOhSjxfMsGbloxpxwSKyxgzfRDJdUpYCBKxxGaYRQ7VUs1S2fx8%2F26A5r%2BacTb1I4QbYRynLhGYN%2Fqoj9OorHWa7w6dCHTE8uCiUb%2F9r0VXbUFhQ72%2BEExtAAeGHstCDo9Vw%2FvPuFxPjhxzUsx1Eftmjz3RFbviExn547aUYaOUd%2BAvWnqw1gjtnceBpVX9UMoaq3KDWyYsp%2FDJFf%2BCPB8Yf%2F0ta5Y81DuEYCh2yKI5rXkkuEIil3qe3rdW1Dt0u5Ytzt9UJkKGqPEzgcoxHkvA%2F9Rcm9HC6xXtu0%2FE6WPPIhd84W2n2Xr9BD4bxXmc4y5rYlHP8xbL0UQOk0n6xUJR9s%2Ff%2BjRs5fo2QlFHyzbL%2FGdU6Y0E%2BqzkFZ%2FbTCalkd6Lk5gRvRKJfGrg5X9peTy6qm1v%2BPjjeyTHKYn%2FVht2IgVbohpUbFp8x%2F8DLuSQSDoSUpXi44rJ66D2pVTJGN3OffM4LLsDlEBFJcqld5z1%2BqADCLB8KoeU9cX6qdiAU%2Fsvulb9LX87oAvgwZ0gr%2F7i0h1KMwlIiQwwY6pgGJR3%2FDgEZvxEOgjQN%2F7IZOIy9zUfaWvIY6I9F2N8oCY43%2B7EUPbHBQqEvcC8liTKQoxELHpYrGe3EBdYsuFC1L9lFVG4alSPXrwu2IPBNMmWkhWSgg0jR%2B%2BROYougqhVg5c%2BvsLyD27f8ttsYRa64cUMTK%2FtvVrfb0b7G8gyhGMApPzhYn2gz%2FTdlgXoL6edu4HOYE%2FfTDnatLYDlJIe3LYfJYiRTy&X-Amz-Signature=4fd904776faed5a664accee6e637168d946fdfbdd35a752db05561f6b3e2fcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVWQTWK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA%2B5rZNFlaxUQYdi6lXmBB%2Fckat7sE7XkkkpghZPiBbAiAcamVb4QJ7SlQZoaj9FVoVcRKwIoEbU06qIhJ1XZylZSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBT3c5ls6VAxC1%2BxKtwDxtLYXDkMEk5o2UzM33yGzcWYwzyE6ZJpBvwpWPBcUFG0kWhEYPDJ9zMNDfmKlR7kqmX0OnfPO1P0WtyMqqXIMyKiMcH%2BAf1XOhSjxfMsGbloxpxwSKyxgzfRDJdUpYCBKxxGaYRQ7VUs1S2fx8%2F26A5r%2BacTb1I4QbYRynLhGYN%2Fqoj9OorHWa7w6dCHTE8uCiUb%2F9r0VXbUFhQ72%2BEExtAAeGHstCDo9Vw%2FvPuFxPjhxzUsx1Eftmjz3RFbviExn547aUYaOUd%2BAvWnqw1gjtnceBpVX9UMoaq3KDWyYsp%2FDJFf%2BCPB8Yf%2F0ta5Y81DuEYCh2yKI5rXkkuEIil3qe3rdW1Dt0u5Ytzt9UJkKGqPEzgcoxHkvA%2F9Rcm9HC6xXtu0%2FE6WPPIhd84W2n2Xr9BD4bxXmc4y5rYlHP8xbL0UQOk0n6xUJR9s%2Ff%2BjRs5fo2QlFHyzbL%2FGdU6Y0E%2BqzkFZ%2FbTCalkd6Lk5gRvRKJfGrg5X9peTy6qm1v%2BPjjeyTHKYn%2FVht2IgVbohpUbFp8x%2F8DLuSQSDoSUpXi44rJ66D2pVTJGN3OffM4LLsDlEBFJcqld5z1%2BqADCLB8KoeU9cX6qdiAU%2Fsvulb9LX87oAvgwZ0gr%2F7i0h1KMwlIiQwwY6pgGJR3%2FDgEZvxEOgjQN%2F7IZOIy9zUfaWvIY6I9F2N8oCY43%2B7EUPbHBQqEvcC8liTKQoxELHpYrGe3EBdYsuFC1L9lFVG4alSPXrwu2IPBNMmWkhWSgg0jR%2B%2BROYougqhVg5c%2BvsLyD27f8ttsYRa64cUMTK%2FtvVrfb0b7G8gyhGMApPzhYn2gz%2FTdlgXoL6edu4HOYE%2FfTDnatLYDlJIe3LYfJYiRTy&X-Amz-Signature=a223bed865d747bf6ef72308cc7a364921bbd8e2f9832485975cf8959aa91ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVWQTWK%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA%2B5rZNFlaxUQYdi6lXmBB%2Fckat7sE7XkkkpghZPiBbAiAcamVb4QJ7SlQZoaj9FVoVcRKwIoEbU06qIhJ1XZylZSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBT3c5ls6VAxC1%2BxKtwDxtLYXDkMEk5o2UzM33yGzcWYwzyE6ZJpBvwpWPBcUFG0kWhEYPDJ9zMNDfmKlR7kqmX0OnfPO1P0WtyMqqXIMyKiMcH%2BAf1XOhSjxfMsGbloxpxwSKyxgzfRDJdUpYCBKxxGaYRQ7VUs1S2fx8%2F26A5r%2BacTb1I4QbYRynLhGYN%2Fqoj9OorHWa7w6dCHTE8uCiUb%2F9r0VXbUFhQ72%2BEExtAAeGHstCDo9Vw%2FvPuFxPjhxzUsx1Eftmjz3RFbviExn547aUYaOUd%2BAvWnqw1gjtnceBpVX9UMoaq3KDWyYsp%2FDJFf%2BCPB8Yf%2F0ta5Y81DuEYCh2yKI5rXkkuEIil3qe3rdW1Dt0u5Ytzt9UJkKGqPEzgcoxHkvA%2F9Rcm9HC6xXtu0%2FE6WPPIhd84W2n2Xr9BD4bxXmc4y5rYlHP8xbL0UQOk0n6xUJR9s%2Ff%2BjRs5fo2QlFHyzbL%2FGdU6Y0E%2BqzkFZ%2FbTCalkd6Lk5gRvRKJfGrg5X9peTy6qm1v%2BPjjeyTHKYn%2FVht2IgVbohpUbFp8x%2F8DLuSQSDoSUpXi44rJ66D2pVTJGN3OffM4LLsDlEBFJcqld5z1%2BqADCLB8KoeU9cX6qdiAU%2Fsvulb9LX87oAvgwZ0gr%2F7i0h1KMwlIiQwwY6pgGJR3%2FDgEZvxEOgjQN%2F7IZOIy9zUfaWvIY6I9F2N8oCY43%2B7EUPbHBQqEvcC8liTKQoxELHpYrGe3EBdYsuFC1L9lFVG4alSPXrwu2IPBNMmWkhWSgg0jR%2B%2BROYougqhVg5c%2BvsLyD27f8ttsYRa64cUMTK%2FtvVrfb0b7G8gyhGMApPzhYn2gz%2FTdlgXoL6edu4HOYE%2FfTDnatLYDlJIe3LYfJYiRTy&X-Amz-Signature=0501163e2a39a45ceaf244ffd1f4d89f4cb932c4c3b85a13b9ba958553de9b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

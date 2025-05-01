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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7IUP6I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICLS8s4wuplGNSEaKX3YCeTrEraLmVQf5I6k9PH%2FeWZBAiAxxS5rImeZjPCoFd3RLcpwxlDMqxpYUG7RaCtDlU1jbSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTBYMgsEm7e%2BkcXCGKtwDoUEr5MXyCMvvECckUISyYyW12bgSI4cIF2QDjCyWLYxxtwDzOdzIKXov0bsgO2hwe%2BbZKMahKl5DJGxAY145E475gpzwOyfdV320uRxj%2BOmsUcc2JkoiJ9OCG%2BzFwSkPcHAvTzrcUxbg5cGzbN%2FPYHXWAga0GSrpZT%2FXCmqo1jmvdu3SmDPKLvu6fhBmza6JqpBnb1buAfJBASHvF9Ipnk3TpGJFmudNxz4t3c%2BYjFAFg7WExHS8DhERpHHGaxhcFzOnQktbFMJQBozXi6snzmonhqtH2i6Nz7d4l7umy5US64LUqYjmHDU4DinhuDA6snA3hhxGdJdObEt4RR5LI9SNmLH8MBAGsVUYsNJTS7eauFqcBWGCwvhF01iCYjzIfj9PAD1fzMDM86uP2YRGiV4Hj8xvvtjogJYvSiJJ%2B2AgEjpQRMhwF8bWW%2FYqLIJvQFHG8WnNxDGb6qx%2B0%2BFiz9ONvZfpJBM%2BpNqFDkG2LsTclwkP3fmgcTeKKHOHKIBgsM9Ln90Vjwi2igK0FVt1czEqgcPUcjlLqyhGwXLg3gP3HFap4GrG3UcSyXNTn6A6HkruBJkKX9B0huC0%2Ftk9Gc24e%2FTLVUFrZMj%2B37afihkK2aIeqzSMxqXlQq8wk%2BPPwAY6pgGQfJfowPUmV7JRXvNcxusd5Pntby9S%2B0AextK07cgU65cxLAblgrlrpRwdL3Qaw8761Jhm%2FPpD9I3fxDbZK3DHu9tra%2Ba%2FhJM9UjpjQRz3Kq%2Flgi8IwzCbWXEd%2BdWtmCaynXzCfwvh2qIewVMR0%2F4Hc7yTN6EJlPLtu2ivc6LkzMbyZcM7A4DU97zBvuO0DdZx8jnqbDffEGh6qWHBLAO9nvmwCBSx&X-Amz-Signature=8dadd9b9f297d5ba3344a9709a7054dea53c270919837bfb0728eaf6801f528f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7IUP6I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICLS8s4wuplGNSEaKX3YCeTrEraLmVQf5I6k9PH%2FeWZBAiAxxS5rImeZjPCoFd3RLcpwxlDMqxpYUG7RaCtDlU1jbSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTBYMgsEm7e%2BkcXCGKtwDoUEr5MXyCMvvECckUISyYyW12bgSI4cIF2QDjCyWLYxxtwDzOdzIKXov0bsgO2hwe%2BbZKMahKl5DJGxAY145E475gpzwOyfdV320uRxj%2BOmsUcc2JkoiJ9OCG%2BzFwSkPcHAvTzrcUxbg5cGzbN%2FPYHXWAga0GSrpZT%2FXCmqo1jmvdu3SmDPKLvu6fhBmza6JqpBnb1buAfJBASHvF9Ipnk3TpGJFmudNxz4t3c%2BYjFAFg7WExHS8DhERpHHGaxhcFzOnQktbFMJQBozXi6snzmonhqtH2i6Nz7d4l7umy5US64LUqYjmHDU4DinhuDA6snA3hhxGdJdObEt4RR5LI9SNmLH8MBAGsVUYsNJTS7eauFqcBWGCwvhF01iCYjzIfj9PAD1fzMDM86uP2YRGiV4Hj8xvvtjogJYvSiJJ%2B2AgEjpQRMhwF8bWW%2FYqLIJvQFHG8WnNxDGb6qx%2B0%2BFiz9ONvZfpJBM%2BpNqFDkG2LsTclwkP3fmgcTeKKHOHKIBgsM9Ln90Vjwi2igK0FVt1czEqgcPUcjlLqyhGwXLg3gP3HFap4GrG3UcSyXNTn6A6HkruBJkKX9B0huC0%2Ftk9Gc24e%2FTLVUFrZMj%2B37afihkK2aIeqzSMxqXlQq8wk%2BPPwAY6pgGQfJfowPUmV7JRXvNcxusd5Pntby9S%2B0AextK07cgU65cxLAblgrlrpRwdL3Qaw8761Jhm%2FPpD9I3fxDbZK3DHu9tra%2Ba%2FhJM9UjpjQRz3Kq%2Flgi8IwzCbWXEd%2BdWtmCaynXzCfwvh2qIewVMR0%2F4Hc7yTN6EJlPLtu2ivc6LkzMbyZcM7A4DU97zBvuO0DdZx8jnqbDffEGh6qWHBLAO9nvmwCBSx&X-Amz-Signature=343dc935eaa61128eb828dd82649f219813017e5e6e57d365d4176b926cbfbcf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7IUP6I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICLS8s4wuplGNSEaKX3YCeTrEraLmVQf5I6k9PH%2FeWZBAiAxxS5rImeZjPCoFd3RLcpwxlDMqxpYUG7RaCtDlU1jbSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTBYMgsEm7e%2BkcXCGKtwDoUEr5MXyCMvvECckUISyYyW12bgSI4cIF2QDjCyWLYxxtwDzOdzIKXov0bsgO2hwe%2BbZKMahKl5DJGxAY145E475gpzwOyfdV320uRxj%2BOmsUcc2JkoiJ9OCG%2BzFwSkPcHAvTzrcUxbg5cGzbN%2FPYHXWAga0GSrpZT%2FXCmqo1jmvdu3SmDPKLvu6fhBmza6JqpBnb1buAfJBASHvF9Ipnk3TpGJFmudNxz4t3c%2BYjFAFg7WExHS8DhERpHHGaxhcFzOnQktbFMJQBozXi6snzmonhqtH2i6Nz7d4l7umy5US64LUqYjmHDU4DinhuDA6snA3hhxGdJdObEt4RR5LI9SNmLH8MBAGsVUYsNJTS7eauFqcBWGCwvhF01iCYjzIfj9PAD1fzMDM86uP2YRGiV4Hj8xvvtjogJYvSiJJ%2B2AgEjpQRMhwF8bWW%2FYqLIJvQFHG8WnNxDGb6qx%2B0%2BFiz9ONvZfpJBM%2BpNqFDkG2LsTclwkP3fmgcTeKKHOHKIBgsM9Ln90Vjwi2igK0FVt1czEqgcPUcjlLqyhGwXLg3gP3HFap4GrG3UcSyXNTn6A6HkruBJkKX9B0huC0%2Ftk9Gc24e%2FTLVUFrZMj%2B37afihkK2aIeqzSMxqXlQq8wk%2BPPwAY6pgGQfJfowPUmV7JRXvNcxusd5Pntby9S%2B0AextK07cgU65cxLAblgrlrpRwdL3Qaw8761Jhm%2FPpD9I3fxDbZK3DHu9tra%2Ba%2FhJM9UjpjQRz3Kq%2Flgi8IwzCbWXEd%2BdWtmCaynXzCfwvh2qIewVMR0%2F4Hc7yTN6EJlPLtu2ivc6LkzMbyZcM7A4DU97zBvuO0DdZx8jnqbDffEGh6qWHBLAO9nvmwCBSx&X-Amz-Signature=495562119cfa237d18b179c1aa8d4fcc5a10c4530e074c851f3fab01cedd8c66&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7IUP6I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICLS8s4wuplGNSEaKX3YCeTrEraLmVQf5I6k9PH%2FeWZBAiAxxS5rImeZjPCoFd3RLcpwxlDMqxpYUG7RaCtDlU1jbSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTBYMgsEm7e%2BkcXCGKtwDoUEr5MXyCMvvECckUISyYyW12bgSI4cIF2QDjCyWLYxxtwDzOdzIKXov0bsgO2hwe%2BbZKMahKl5DJGxAY145E475gpzwOyfdV320uRxj%2BOmsUcc2JkoiJ9OCG%2BzFwSkPcHAvTzrcUxbg5cGzbN%2FPYHXWAga0GSrpZT%2FXCmqo1jmvdu3SmDPKLvu6fhBmza6JqpBnb1buAfJBASHvF9Ipnk3TpGJFmudNxz4t3c%2BYjFAFg7WExHS8DhERpHHGaxhcFzOnQktbFMJQBozXi6snzmonhqtH2i6Nz7d4l7umy5US64LUqYjmHDU4DinhuDA6snA3hhxGdJdObEt4RR5LI9SNmLH8MBAGsVUYsNJTS7eauFqcBWGCwvhF01iCYjzIfj9PAD1fzMDM86uP2YRGiV4Hj8xvvtjogJYvSiJJ%2B2AgEjpQRMhwF8bWW%2FYqLIJvQFHG8WnNxDGb6qx%2B0%2BFiz9ONvZfpJBM%2BpNqFDkG2LsTclwkP3fmgcTeKKHOHKIBgsM9Ln90Vjwi2igK0FVt1czEqgcPUcjlLqyhGwXLg3gP3HFap4GrG3UcSyXNTn6A6HkruBJkKX9B0huC0%2Ftk9Gc24e%2FTLVUFrZMj%2B37afihkK2aIeqzSMxqXlQq8wk%2BPPwAY6pgGQfJfowPUmV7JRXvNcxusd5Pntby9S%2B0AextK07cgU65cxLAblgrlrpRwdL3Qaw8761Jhm%2FPpD9I3fxDbZK3DHu9tra%2Ba%2FhJM9UjpjQRz3Kq%2Flgi8IwzCbWXEd%2BdWtmCaynXzCfwvh2qIewVMR0%2F4Hc7yTN6EJlPLtu2ivc6LkzMbyZcM7A4DU97zBvuO0DdZx8jnqbDffEGh6qWHBLAO9nvmwCBSx&X-Amz-Signature=a540d8248015e6def34760a3fcbd986d1f3733d1c80d3f74da66e7361f83ce3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7IUP6I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICLS8s4wuplGNSEaKX3YCeTrEraLmVQf5I6k9PH%2FeWZBAiAxxS5rImeZjPCoFd3RLcpwxlDMqxpYUG7RaCtDlU1jbSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTBYMgsEm7e%2BkcXCGKtwDoUEr5MXyCMvvECckUISyYyW12bgSI4cIF2QDjCyWLYxxtwDzOdzIKXov0bsgO2hwe%2BbZKMahKl5DJGxAY145E475gpzwOyfdV320uRxj%2BOmsUcc2JkoiJ9OCG%2BzFwSkPcHAvTzrcUxbg5cGzbN%2FPYHXWAga0GSrpZT%2FXCmqo1jmvdu3SmDPKLvu6fhBmza6JqpBnb1buAfJBASHvF9Ipnk3TpGJFmudNxz4t3c%2BYjFAFg7WExHS8DhERpHHGaxhcFzOnQktbFMJQBozXi6snzmonhqtH2i6Nz7d4l7umy5US64LUqYjmHDU4DinhuDA6snA3hhxGdJdObEt4RR5LI9SNmLH8MBAGsVUYsNJTS7eauFqcBWGCwvhF01iCYjzIfj9PAD1fzMDM86uP2YRGiV4Hj8xvvtjogJYvSiJJ%2B2AgEjpQRMhwF8bWW%2FYqLIJvQFHG8WnNxDGb6qx%2B0%2BFiz9ONvZfpJBM%2BpNqFDkG2LsTclwkP3fmgcTeKKHOHKIBgsM9Ln90Vjwi2igK0FVt1czEqgcPUcjlLqyhGwXLg3gP3HFap4GrG3UcSyXNTn6A6HkruBJkKX9B0huC0%2Ftk9Gc24e%2FTLVUFrZMj%2B37afihkK2aIeqzSMxqXlQq8wk%2BPPwAY6pgGQfJfowPUmV7JRXvNcxusd5Pntby9S%2B0AextK07cgU65cxLAblgrlrpRwdL3Qaw8761Jhm%2FPpD9I3fxDbZK3DHu9tra%2Ba%2FhJM9UjpjQRz3Kq%2Flgi8IwzCbWXEd%2BdWtmCaynXzCfwvh2qIewVMR0%2F4Hc7yTN6EJlPLtu2ivc6LkzMbyZcM7A4DU97zBvuO0DdZx8jnqbDffEGh6qWHBLAO9nvmwCBSx&X-Amz-Signature=994e660f7299fd2695e8e95f49fd1ccac3e104fb545553f96db5280ecf33dded&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7IUP6I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICLS8s4wuplGNSEaKX3YCeTrEraLmVQf5I6k9PH%2FeWZBAiAxxS5rImeZjPCoFd3RLcpwxlDMqxpYUG7RaCtDlU1jbSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTBYMgsEm7e%2BkcXCGKtwDoUEr5MXyCMvvECckUISyYyW12bgSI4cIF2QDjCyWLYxxtwDzOdzIKXov0bsgO2hwe%2BbZKMahKl5DJGxAY145E475gpzwOyfdV320uRxj%2BOmsUcc2JkoiJ9OCG%2BzFwSkPcHAvTzrcUxbg5cGzbN%2FPYHXWAga0GSrpZT%2FXCmqo1jmvdu3SmDPKLvu6fhBmza6JqpBnb1buAfJBASHvF9Ipnk3TpGJFmudNxz4t3c%2BYjFAFg7WExHS8DhERpHHGaxhcFzOnQktbFMJQBozXi6snzmonhqtH2i6Nz7d4l7umy5US64LUqYjmHDU4DinhuDA6snA3hhxGdJdObEt4RR5LI9SNmLH8MBAGsVUYsNJTS7eauFqcBWGCwvhF01iCYjzIfj9PAD1fzMDM86uP2YRGiV4Hj8xvvtjogJYvSiJJ%2B2AgEjpQRMhwF8bWW%2FYqLIJvQFHG8WnNxDGb6qx%2B0%2BFiz9ONvZfpJBM%2BpNqFDkG2LsTclwkP3fmgcTeKKHOHKIBgsM9Ln90Vjwi2igK0FVt1czEqgcPUcjlLqyhGwXLg3gP3HFap4GrG3UcSyXNTn6A6HkruBJkKX9B0huC0%2Ftk9Gc24e%2FTLVUFrZMj%2B37afihkK2aIeqzSMxqXlQq8wk%2BPPwAY6pgGQfJfowPUmV7JRXvNcxusd5Pntby9S%2B0AextK07cgU65cxLAblgrlrpRwdL3Qaw8761Jhm%2FPpD9I3fxDbZK3DHu9tra%2Ba%2FhJM9UjpjQRz3Kq%2Flgi8IwzCbWXEd%2BdWtmCaynXzCfwvh2qIewVMR0%2F4Hc7yTN6EJlPLtu2ivc6LkzMbyZcM7A4DU97zBvuO0DdZx8jnqbDffEGh6qWHBLAO9nvmwCBSx&X-Amz-Signature=f4760aee2f38d15268a3b22dde1e5841040802714ba9175dcc6897d80aec6998&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7IUP6I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICLS8s4wuplGNSEaKX3YCeTrEraLmVQf5I6k9PH%2FeWZBAiAxxS5rImeZjPCoFd3RLcpwxlDMqxpYUG7RaCtDlU1jbSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTBYMgsEm7e%2BkcXCGKtwDoUEr5MXyCMvvECckUISyYyW12bgSI4cIF2QDjCyWLYxxtwDzOdzIKXov0bsgO2hwe%2BbZKMahKl5DJGxAY145E475gpzwOyfdV320uRxj%2BOmsUcc2JkoiJ9OCG%2BzFwSkPcHAvTzrcUxbg5cGzbN%2FPYHXWAga0GSrpZT%2FXCmqo1jmvdu3SmDPKLvu6fhBmza6JqpBnb1buAfJBASHvF9Ipnk3TpGJFmudNxz4t3c%2BYjFAFg7WExHS8DhERpHHGaxhcFzOnQktbFMJQBozXi6snzmonhqtH2i6Nz7d4l7umy5US64LUqYjmHDU4DinhuDA6snA3hhxGdJdObEt4RR5LI9SNmLH8MBAGsVUYsNJTS7eauFqcBWGCwvhF01iCYjzIfj9PAD1fzMDM86uP2YRGiV4Hj8xvvtjogJYvSiJJ%2B2AgEjpQRMhwF8bWW%2FYqLIJvQFHG8WnNxDGb6qx%2B0%2BFiz9ONvZfpJBM%2BpNqFDkG2LsTclwkP3fmgcTeKKHOHKIBgsM9Ln90Vjwi2igK0FVt1czEqgcPUcjlLqyhGwXLg3gP3HFap4GrG3UcSyXNTn6A6HkruBJkKX9B0huC0%2Ftk9Gc24e%2FTLVUFrZMj%2B37afihkK2aIeqzSMxqXlQq8wk%2BPPwAY6pgGQfJfowPUmV7JRXvNcxusd5Pntby9S%2B0AextK07cgU65cxLAblgrlrpRwdL3Qaw8761Jhm%2FPpD9I3fxDbZK3DHu9tra%2Ba%2FhJM9UjpjQRz3Kq%2Flgi8IwzCbWXEd%2BdWtmCaynXzCfwvh2qIewVMR0%2F4Hc7yTN6EJlPLtu2ivc6LkzMbyZcM7A4DU97zBvuO0DdZx8jnqbDffEGh6qWHBLAO9nvmwCBSx&X-Amz-Signature=e5115edadf04578d14559850ac6db5c25bbdc75e13beaf077436b57eb2ebaf5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7IUP6I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICLS8s4wuplGNSEaKX3YCeTrEraLmVQf5I6k9PH%2FeWZBAiAxxS5rImeZjPCoFd3RLcpwxlDMqxpYUG7RaCtDlU1jbSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTBYMgsEm7e%2BkcXCGKtwDoUEr5MXyCMvvECckUISyYyW12bgSI4cIF2QDjCyWLYxxtwDzOdzIKXov0bsgO2hwe%2BbZKMahKl5DJGxAY145E475gpzwOyfdV320uRxj%2BOmsUcc2JkoiJ9OCG%2BzFwSkPcHAvTzrcUxbg5cGzbN%2FPYHXWAga0GSrpZT%2FXCmqo1jmvdu3SmDPKLvu6fhBmza6JqpBnb1buAfJBASHvF9Ipnk3TpGJFmudNxz4t3c%2BYjFAFg7WExHS8DhERpHHGaxhcFzOnQktbFMJQBozXi6snzmonhqtH2i6Nz7d4l7umy5US64LUqYjmHDU4DinhuDA6snA3hhxGdJdObEt4RR5LI9SNmLH8MBAGsVUYsNJTS7eauFqcBWGCwvhF01iCYjzIfj9PAD1fzMDM86uP2YRGiV4Hj8xvvtjogJYvSiJJ%2B2AgEjpQRMhwF8bWW%2FYqLIJvQFHG8WnNxDGb6qx%2B0%2BFiz9ONvZfpJBM%2BpNqFDkG2LsTclwkP3fmgcTeKKHOHKIBgsM9Ln90Vjwi2igK0FVt1czEqgcPUcjlLqyhGwXLg3gP3HFap4GrG3UcSyXNTn6A6HkruBJkKX9B0huC0%2Ftk9Gc24e%2FTLVUFrZMj%2B37afihkK2aIeqzSMxqXlQq8wk%2BPPwAY6pgGQfJfowPUmV7JRXvNcxusd5Pntby9S%2B0AextK07cgU65cxLAblgrlrpRwdL3Qaw8761Jhm%2FPpD9I3fxDbZK3DHu9tra%2Ba%2FhJM9UjpjQRz3Kq%2Flgi8IwzCbWXEd%2BdWtmCaynXzCfwvh2qIewVMR0%2F4Hc7yTN6EJlPLtu2ivc6LkzMbyZcM7A4DU97zBvuO0DdZx8jnqbDffEGh6qWHBLAO9nvmwCBSx&X-Amz-Signature=d04c1887a3e7cb9a5e7d86845b59ddd0e7ead8b377651599408283f2d828e982&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

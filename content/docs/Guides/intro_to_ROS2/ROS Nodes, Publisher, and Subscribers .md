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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSJN3J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY7UaqlMKy9DTS9Z1vJZ63PGz9smZZ%2FV9yMca37fEm2QIgP5Y0Metzhv0%2FDznx3EFkuW4WUzBULNOWpLN5%2BXwLy%2BQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsDRxK5zr8F1NrUCrcA022jUWH29uaVSelwvAQd3kqu5gtq5ql9NEXKElHys8O83oDyZ7Ypo%2F%2BGInNZRzyAyIazoF8LnIl2M45BcHkxD3bMp4SbU0qreIZOEQ5nAXBYcPi%2F4T4VB61ohYUlpDwa3edJyeYLXYWgNqrMrdfeiEyujvFGHYWDNFF%2BBvMTCfhgL00h%2BWidFizT0j4Ml694AN1k%2FpCrPiNU%2By7K5xh8%2FwPdBnc2rcxxeu3Zl%2FUtXvjjssaH%2B0C0YsuREyJ4sC1Qhr00470lm9OYybFPzPyZPeciuaPWUP%2BcBs42wE61WG2XbhYt7eFZyn3LOD2e%2BMDCZgwaGr8crBpf0%2FOdUYdJYMSbdG1tDk7MPTddEb7CA4KzG7LODEO%2B%2BJAGp7t7BDDQPM5Me8%2F5YshMb6Ngs4WDGIqDPt68ZerCywEpROH9wYl6Ccsuc5xZonsYoKQgFt7DBBxc1VBGFcHgSDhceAwTSomjmXxdrZm%2BjGzGx%2Fdob2H2YjIZ9aKENbCukAzN1wkgStmCLmAOBJl9iXEYsysT%2BQdX5El7kjNvPGGU%2FAIdiovDzHfFNb4ZsB3f5pQFm6FCPNieKdX%2BIFhaYHx%2FhBsWKMS0ygPUKw65RLXjFyI7aXsWcKWU4ThIJR1KhAcMKGz6sEGOqUB4Wvk9dikvALBz0LcHb%2FSBK%2BLP5AlarjzVQvwoT001ahX9LkHKTaHZUS3TPJzC0gUwMvSraflmmfRJVjQBFGyccl%2FvDOHj3WI3c4oMmDqTNwaSq0CEzUvWdN0dDaO6mDUoLae3xwoXysJ%2F2rDEBZdeXK%2Fm%2FmFbBXJre1G%2F%2B2bYMtyeAcylqiZwZkyXl5yA%2BPgSZIEVxl1QyeIW%2F5lzVKpHiT8L%2Bly&X-Amz-Signature=325c96b4ac3ec72def281b8387ebabab7b52f5b59988b770f9d8722b68879244&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSJN3J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY7UaqlMKy9DTS9Z1vJZ63PGz9smZZ%2FV9yMca37fEm2QIgP5Y0Metzhv0%2FDznx3EFkuW4WUzBULNOWpLN5%2BXwLy%2BQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsDRxK5zr8F1NrUCrcA022jUWH29uaVSelwvAQd3kqu5gtq5ql9NEXKElHys8O83oDyZ7Ypo%2F%2BGInNZRzyAyIazoF8LnIl2M45BcHkxD3bMp4SbU0qreIZOEQ5nAXBYcPi%2F4T4VB61ohYUlpDwa3edJyeYLXYWgNqrMrdfeiEyujvFGHYWDNFF%2BBvMTCfhgL00h%2BWidFizT0j4Ml694AN1k%2FpCrPiNU%2By7K5xh8%2FwPdBnc2rcxxeu3Zl%2FUtXvjjssaH%2B0C0YsuREyJ4sC1Qhr00470lm9OYybFPzPyZPeciuaPWUP%2BcBs42wE61WG2XbhYt7eFZyn3LOD2e%2BMDCZgwaGr8crBpf0%2FOdUYdJYMSbdG1tDk7MPTddEb7CA4KzG7LODEO%2B%2BJAGp7t7BDDQPM5Me8%2F5YshMb6Ngs4WDGIqDPt68ZerCywEpROH9wYl6Ccsuc5xZonsYoKQgFt7DBBxc1VBGFcHgSDhceAwTSomjmXxdrZm%2BjGzGx%2Fdob2H2YjIZ9aKENbCukAzN1wkgStmCLmAOBJl9iXEYsysT%2BQdX5El7kjNvPGGU%2FAIdiovDzHfFNb4ZsB3f5pQFm6FCPNieKdX%2BIFhaYHx%2FhBsWKMS0ygPUKw65RLXjFyI7aXsWcKWU4ThIJR1KhAcMKGz6sEGOqUB4Wvk9dikvALBz0LcHb%2FSBK%2BLP5AlarjzVQvwoT001ahX9LkHKTaHZUS3TPJzC0gUwMvSraflmmfRJVjQBFGyccl%2FvDOHj3WI3c4oMmDqTNwaSq0CEzUvWdN0dDaO6mDUoLae3xwoXysJ%2F2rDEBZdeXK%2Fm%2FmFbBXJre1G%2F%2B2bYMtyeAcylqiZwZkyXl5yA%2BPgSZIEVxl1QyeIW%2F5lzVKpHiT8L%2Bly&X-Amz-Signature=0e429c82b723984b97589a221c3b28c5e95910faaf844c5c9259aac63adc3f88&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSJN3J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY7UaqlMKy9DTS9Z1vJZ63PGz9smZZ%2FV9yMca37fEm2QIgP5Y0Metzhv0%2FDznx3EFkuW4WUzBULNOWpLN5%2BXwLy%2BQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsDRxK5zr8F1NrUCrcA022jUWH29uaVSelwvAQd3kqu5gtq5ql9NEXKElHys8O83oDyZ7Ypo%2F%2BGInNZRzyAyIazoF8LnIl2M45BcHkxD3bMp4SbU0qreIZOEQ5nAXBYcPi%2F4T4VB61ohYUlpDwa3edJyeYLXYWgNqrMrdfeiEyujvFGHYWDNFF%2BBvMTCfhgL00h%2BWidFizT0j4Ml694AN1k%2FpCrPiNU%2By7K5xh8%2FwPdBnc2rcxxeu3Zl%2FUtXvjjssaH%2B0C0YsuREyJ4sC1Qhr00470lm9OYybFPzPyZPeciuaPWUP%2BcBs42wE61WG2XbhYt7eFZyn3LOD2e%2BMDCZgwaGr8crBpf0%2FOdUYdJYMSbdG1tDk7MPTddEb7CA4KzG7LODEO%2B%2BJAGp7t7BDDQPM5Me8%2F5YshMb6Ngs4WDGIqDPt68ZerCywEpROH9wYl6Ccsuc5xZonsYoKQgFt7DBBxc1VBGFcHgSDhceAwTSomjmXxdrZm%2BjGzGx%2Fdob2H2YjIZ9aKENbCukAzN1wkgStmCLmAOBJl9iXEYsysT%2BQdX5El7kjNvPGGU%2FAIdiovDzHfFNb4ZsB3f5pQFm6FCPNieKdX%2BIFhaYHx%2FhBsWKMS0ygPUKw65RLXjFyI7aXsWcKWU4ThIJR1KhAcMKGz6sEGOqUB4Wvk9dikvALBz0LcHb%2FSBK%2BLP5AlarjzVQvwoT001ahX9LkHKTaHZUS3TPJzC0gUwMvSraflmmfRJVjQBFGyccl%2FvDOHj3WI3c4oMmDqTNwaSq0CEzUvWdN0dDaO6mDUoLae3xwoXysJ%2F2rDEBZdeXK%2Fm%2FmFbBXJre1G%2F%2B2bYMtyeAcylqiZwZkyXl5yA%2BPgSZIEVxl1QyeIW%2F5lzVKpHiT8L%2Bly&X-Amz-Signature=f00fbd1dff0a82b317c128ee302e4ab9110188e5828114a83bda87ce24b3a11d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSJN3J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY7UaqlMKy9DTS9Z1vJZ63PGz9smZZ%2FV9yMca37fEm2QIgP5Y0Metzhv0%2FDznx3EFkuW4WUzBULNOWpLN5%2BXwLy%2BQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsDRxK5zr8F1NrUCrcA022jUWH29uaVSelwvAQd3kqu5gtq5ql9NEXKElHys8O83oDyZ7Ypo%2F%2BGInNZRzyAyIazoF8LnIl2M45BcHkxD3bMp4SbU0qreIZOEQ5nAXBYcPi%2F4T4VB61ohYUlpDwa3edJyeYLXYWgNqrMrdfeiEyujvFGHYWDNFF%2BBvMTCfhgL00h%2BWidFizT0j4Ml694AN1k%2FpCrPiNU%2By7K5xh8%2FwPdBnc2rcxxeu3Zl%2FUtXvjjssaH%2B0C0YsuREyJ4sC1Qhr00470lm9OYybFPzPyZPeciuaPWUP%2BcBs42wE61WG2XbhYt7eFZyn3LOD2e%2BMDCZgwaGr8crBpf0%2FOdUYdJYMSbdG1tDk7MPTddEb7CA4KzG7LODEO%2B%2BJAGp7t7BDDQPM5Me8%2F5YshMb6Ngs4WDGIqDPt68ZerCywEpROH9wYl6Ccsuc5xZonsYoKQgFt7DBBxc1VBGFcHgSDhceAwTSomjmXxdrZm%2BjGzGx%2Fdob2H2YjIZ9aKENbCukAzN1wkgStmCLmAOBJl9iXEYsysT%2BQdX5El7kjNvPGGU%2FAIdiovDzHfFNb4ZsB3f5pQFm6FCPNieKdX%2BIFhaYHx%2FhBsWKMS0ygPUKw65RLXjFyI7aXsWcKWU4ThIJR1KhAcMKGz6sEGOqUB4Wvk9dikvALBz0LcHb%2FSBK%2BLP5AlarjzVQvwoT001ahX9LkHKTaHZUS3TPJzC0gUwMvSraflmmfRJVjQBFGyccl%2FvDOHj3WI3c4oMmDqTNwaSq0CEzUvWdN0dDaO6mDUoLae3xwoXysJ%2F2rDEBZdeXK%2Fm%2FmFbBXJre1G%2F%2B2bYMtyeAcylqiZwZkyXl5yA%2BPgSZIEVxl1QyeIW%2F5lzVKpHiT8L%2Bly&X-Amz-Signature=342ab65236ecd1540ebbb66ba0be24a249be8f61ad81c2d508a5fecd40819f39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSJN3J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY7UaqlMKy9DTS9Z1vJZ63PGz9smZZ%2FV9yMca37fEm2QIgP5Y0Metzhv0%2FDznx3EFkuW4WUzBULNOWpLN5%2BXwLy%2BQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsDRxK5zr8F1NrUCrcA022jUWH29uaVSelwvAQd3kqu5gtq5ql9NEXKElHys8O83oDyZ7Ypo%2F%2BGInNZRzyAyIazoF8LnIl2M45BcHkxD3bMp4SbU0qreIZOEQ5nAXBYcPi%2F4T4VB61ohYUlpDwa3edJyeYLXYWgNqrMrdfeiEyujvFGHYWDNFF%2BBvMTCfhgL00h%2BWidFizT0j4Ml694AN1k%2FpCrPiNU%2By7K5xh8%2FwPdBnc2rcxxeu3Zl%2FUtXvjjssaH%2B0C0YsuREyJ4sC1Qhr00470lm9OYybFPzPyZPeciuaPWUP%2BcBs42wE61WG2XbhYt7eFZyn3LOD2e%2BMDCZgwaGr8crBpf0%2FOdUYdJYMSbdG1tDk7MPTddEb7CA4KzG7LODEO%2B%2BJAGp7t7BDDQPM5Me8%2F5YshMb6Ngs4WDGIqDPt68ZerCywEpROH9wYl6Ccsuc5xZonsYoKQgFt7DBBxc1VBGFcHgSDhceAwTSomjmXxdrZm%2BjGzGx%2Fdob2H2YjIZ9aKENbCukAzN1wkgStmCLmAOBJl9iXEYsysT%2BQdX5El7kjNvPGGU%2FAIdiovDzHfFNb4ZsB3f5pQFm6FCPNieKdX%2BIFhaYHx%2FhBsWKMS0ygPUKw65RLXjFyI7aXsWcKWU4ThIJR1KhAcMKGz6sEGOqUB4Wvk9dikvALBz0LcHb%2FSBK%2BLP5AlarjzVQvwoT001ahX9LkHKTaHZUS3TPJzC0gUwMvSraflmmfRJVjQBFGyccl%2FvDOHj3WI3c4oMmDqTNwaSq0CEzUvWdN0dDaO6mDUoLae3xwoXysJ%2F2rDEBZdeXK%2Fm%2FmFbBXJre1G%2F%2B2bYMtyeAcylqiZwZkyXl5yA%2BPgSZIEVxl1QyeIW%2F5lzVKpHiT8L%2Bly&X-Amz-Signature=ae80f0886f7d7f96e255e05eb616c9ff2cd5f478aeceef7eb9c690fbe8454986&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSJN3J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY7UaqlMKy9DTS9Z1vJZ63PGz9smZZ%2FV9yMca37fEm2QIgP5Y0Metzhv0%2FDznx3EFkuW4WUzBULNOWpLN5%2BXwLy%2BQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsDRxK5zr8F1NrUCrcA022jUWH29uaVSelwvAQd3kqu5gtq5ql9NEXKElHys8O83oDyZ7Ypo%2F%2BGInNZRzyAyIazoF8LnIl2M45BcHkxD3bMp4SbU0qreIZOEQ5nAXBYcPi%2F4T4VB61ohYUlpDwa3edJyeYLXYWgNqrMrdfeiEyujvFGHYWDNFF%2BBvMTCfhgL00h%2BWidFizT0j4Ml694AN1k%2FpCrPiNU%2By7K5xh8%2FwPdBnc2rcxxeu3Zl%2FUtXvjjssaH%2B0C0YsuREyJ4sC1Qhr00470lm9OYybFPzPyZPeciuaPWUP%2BcBs42wE61WG2XbhYt7eFZyn3LOD2e%2BMDCZgwaGr8crBpf0%2FOdUYdJYMSbdG1tDk7MPTddEb7CA4KzG7LODEO%2B%2BJAGp7t7BDDQPM5Me8%2F5YshMb6Ngs4WDGIqDPt68ZerCywEpROH9wYl6Ccsuc5xZonsYoKQgFt7DBBxc1VBGFcHgSDhceAwTSomjmXxdrZm%2BjGzGx%2Fdob2H2YjIZ9aKENbCukAzN1wkgStmCLmAOBJl9iXEYsysT%2BQdX5El7kjNvPGGU%2FAIdiovDzHfFNb4ZsB3f5pQFm6FCPNieKdX%2BIFhaYHx%2FhBsWKMS0ygPUKw65RLXjFyI7aXsWcKWU4ThIJR1KhAcMKGz6sEGOqUB4Wvk9dikvALBz0LcHb%2FSBK%2BLP5AlarjzVQvwoT001ahX9LkHKTaHZUS3TPJzC0gUwMvSraflmmfRJVjQBFGyccl%2FvDOHj3WI3c4oMmDqTNwaSq0CEzUvWdN0dDaO6mDUoLae3xwoXysJ%2F2rDEBZdeXK%2Fm%2FmFbBXJre1G%2F%2B2bYMtyeAcylqiZwZkyXl5yA%2BPgSZIEVxl1QyeIW%2F5lzVKpHiT8L%2Bly&X-Amz-Signature=75b729714ced4142191e126409aab4ec42a5e132e9e2fa9143be70287b49b9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSJN3J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY7UaqlMKy9DTS9Z1vJZ63PGz9smZZ%2FV9yMca37fEm2QIgP5Y0Metzhv0%2FDznx3EFkuW4WUzBULNOWpLN5%2BXwLy%2BQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsDRxK5zr8F1NrUCrcA022jUWH29uaVSelwvAQd3kqu5gtq5ql9NEXKElHys8O83oDyZ7Ypo%2F%2BGInNZRzyAyIazoF8LnIl2M45BcHkxD3bMp4SbU0qreIZOEQ5nAXBYcPi%2F4T4VB61ohYUlpDwa3edJyeYLXYWgNqrMrdfeiEyujvFGHYWDNFF%2BBvMTCfhgL00h%2BWidFizT0j4Ml694AN1k%2FpCrPiNU%2By7K5xh8%2FwPdBnc2rcxxeu3Zl%2FUtXvjjssaH%2B0C0YsuREyJ4sC1Qhr00470lm9OYybFPzPyZPeciuaPWUP%2BcBs42wE61WG2XbhYt7eFZyn3LOD2e%2BMDCZgwaGr8crBpf0%2FOdUYdJYMSbdG1tDk7MPTddEb7CA4KzG7LODEO%2B%2BJAGp7t7BDDQPM5Me8%2F5YshMb6Ngs4WDGIqDPt68ZerCywEpROH9wYl6Ccsuc5xZonsYoKQgFt7DBBxc1VBGFcHgSDhceAwTSomjmXxdrZm%2BjGzGx%2Fdob2H2YjIZ9aKENbCukAzN1wkgStmCLmAOBJl9iXEYsysT%2BQdX5El7kjNvPGGU%2FAIdiovDzHfFNb4ZsB3f5pQFm6FCPNieKdX%2BIFhaYHx%2FhBsWKMS0ygPUKw65RLXjFyI7aXsWcKWU4ThIJR1KhAcMKGz6sEGOqUB4Wvk9dikvALBz0LcHb%2FSBK%2BLP5AlarjzVQvwoT001ahX9LkHKTaHZUS3TPJzC0gUwMvSraflmmfRJVjQBFGyccl%2FvDOHj3WI3c4oMmDqTNwaSq0CEzUvWdN0dDaO6mDUoLae3xwoXysJ%2F2rDEBZdeXK%2Fm%2FmFbBXJre1G%2F%2B2bYMtyeAcylqiZwZkyXl5yA%2BPgSZIEVxl1QyeIW%2F5lzVKpHiT8L%2Bly&X-Amz-Signature=ac1adad14580ba1b42fdc44c3df075ad4d5a78dcaeaccbc261dd6067084c37d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSJN3J%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY7UaqlMKy9DTS9Z1vJZ63PGz9smZZ%2FV9yMca37fEm2QIgP5Y0Metzhv0%2FDznx3EFkuW4WUzBULNOWpLN5%2BXwLy%2BQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBsDRxK5zr8F1NrUCrcA022jUWH29uaVSelwvAQd3kqu5gtq5ql9NEXKElHys8O83oDyZ7Ypo%2F%2BGInNZRzyAyIazoF8LnIl2M45BcHkxD3bMp4SbU0qreIZOEQ5nAXBYcPi%2F4T4VB61ohYUlpDwa3edJyeYLXYWgNqrMrdfeiEyujvFGHYWDNFF%2BBvMTCfhgL00h%2BWidFizT0j4Ml694AN1k%2FpCrPiNU%2By7K5xh8%2FwPdBnc2rcxxeu3Zl%2FUtXvjjssaH%2B0C0YsuREyJ4sC1Qhr00470lm9OYybFPzPyZPeciuaPWUP%2BcBs42wE61WG2XbhYt7eFZyn3LOD2e%2BMDCZgwaGr8crBpf0%2FOdUYdJYMSbdG1tDk7MPTddEb7CA4KzG7LODEO%2B%2BJAGp7t7BDDQPM5Me8%2F5YshMb6Ngs4WDGIqDPt68ZerCywEpROH9wYl6Ccsuc5xZonsYoKQgFt7DBBxc1VBGFcHgSDhceAwTSomjmXxdrZm%2BjGzGx%2Fdob2H2YjIZ9aKENbCukAzN1wkgStmCLmAOBJl9iXEYsysT%2BQdX5El7kjNvPGGU%2FAIdiovDzHfFNb4ZsB3f5pQFm6FCPNieKdX%2BIFhaYHx%2FhBsWKMS0ygPUKw65RLXjFyI7aXsWcKWU4ThIJR1KhAcMKGz6sEGOqUB4Wvk9dikvALBz0LcHb%2FSBK%2BLP5AlarjzVQvwoT001ahX9LkHKTaHZUS3TPJzC0gUwMvSraflmmfRJVjQBFGyccl%2FvDOHj3WI3c4oMmDqTNwaSq0CEzUvWdN0dDaO6mDUoLae3xwoXysJ%2F2rDEBZdeXK%2Fm%2FmFbBXJre1G%2F%2B2bYMtyeAcylqiZwZkyXl5yA%2BPgSZIEVxl1QyeIW%2F5lzVKpHiT8L%2Bly&X-Amz-Signature=a008d5cb26209da6aefaf5edcd01bc7a70624fc0de578a2ff2e944e7ff1c67c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

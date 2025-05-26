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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNVJJKI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHhsIv8CrcNsSiToBAVm4wDEpW%2FrWLZ1G8yrPdnIAaeAiBox0RQpEjSWMJzOUBa8u%2FVvL%2BsU9%2FIuZaH%2FwQfp57pxyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM4gyF0UkZVoppzytTKtwDcGocmUIuUUVMi9xAbq0sE22hkjbrr8zwRXxZ8uurBn2SmY5S1cbzDez6ZIVRFIoMlUwOczPIQUa2vn0t2qLxTGRBQoGAephIoh9Bmnt7fyPrAzwuR6cEJUhPX6jf9KMjWTJk5XIHazUf9NnfZaeDLjNk02NKCoixZsXssbQX5iJgAsLCKbLDH3bXzDcvYRgCfSnTmi0ZT6BnPXmeB1UO4CNTz7wlnZlJ03VKL2eDd7K%2F8zAwccgUgUfK7ZVvLnOnKbie0WqDNlFKEsjT2zSOvsjeHrO8NPRcAtt0wBXpjItkE%2FJrpBdzDjQ7RxKv8UQb6mQyO91YJpn08PkF8gEWGQCzhmgd1i%2FZeiIV9dOoU8AozXs24Dv4W%2BEolfRdkP08qFG2whCGuq8V5%2FgVMkFa%2FaU7BY0F7LEvJeoNeLUQ%2BpAVq51ji0kWEyd3hs2vj3vDPG5aFqGIHP2Fbvm2KTz9xdzHnOFe%2F8wOlzzvpebUL%2BVZg6l5YCBPBt%2BqpyMvKGJACpXjgKo25mY3H6nJiuKI6k3okRUsciM0LmOj03%2BMbEJkushzhncRRRR%2FPLS8RJdU%2FSJbfHiCUKsqmq%2BiUgb0EPVO1UjKZqvZ1yYSJAqnxR41wb9Z7ldeiTnwKq8wuZLSwQY6pgEk%2F%2FGxM0fZxhn4ST%2Fgm1SqtD%2BWf%2Fxava1xNsur3wpXKeibmDhUbMuPXLzZjFG4BBoKkIcOAa7GBUlYpoOLWGp8Xo3c3jRhN58Q8SeGnwwb791hhDv0dAov4%2BNhDHO4ZMsIE15oL3Oue8Hxxi%2FCAc69bdviEYPU338u2eB9QImHPZ4LUKuBrqKKhLaffnF9gcpQnbHN0Gu4L4KqeYueUSFGXZFTW00Q&X-Amz-Signature=86553f61f4d7c5b1705c5b88420002dedad2907cfce094f4c2943f3e8a172ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNVJJKI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHhsIv8CrcNsSiToBAVm4wDEpW%2FrWLZ1G8yrPdnIAaeAiBox0RQpEjSWMJzOUBa8u%2FVvL%2BsU9%2FIuZaH%2FwQfp57pxyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM4gyF0UkZVoppzytTKtwDcGocmUIuUUVMi9xAbq0sE22hkjbrr8zwRXxZ8uurBn2SmY5S1cbzDez6ZIVRFIoMlUwOczPIQUa2vn0t2qLxTGRBQoGAephIoh9Bmnt7fyPrAzwuR6cEJUhPX6jf9KMjWTJk5XIHazUf9NnfZaeDLjNk02NKCoixZsXssbQX5iJgAsLCKbLDH3bXzDcvYRgCfSnTmi0ZT6BnPXmeB1UO4CNTz7wlnZlJ03VKL2eDd7K%2F8zAwccgUgUfK7ZVvLnOnKbie0WqDNlFKEsjT2zSOvsjeHrO8NPRcAtt0wBXpjItkE%2FJrpBdzDjQ7RxKv8UQb6mQyO91YJpn08PkF8gEWGQCzhmgd1i%2FZeiIV9dOoU8AozXs24Dv4W%2BEolfRdkP08qFG2whCGuq8V5%2FgVMkFa%2FaU7BY0F7LEvJeoNeLUQ%2BpAVq51ji0kWEyd3hs2vj3vDPG5aFqGIHP2Fbvm2KTz9xdzHnOFe%2F8wOlzzvpebUL%2BVZg6l5YCBPBt%2BqpyMvKGJACpXjgKo25mY3H6nJiuKI6k3okRUsciM0LmOj03%2BMbEJkushzhncRRRR%2FPLS8RJdU%2FSJbfHiCUKsqmq%2BiUgb0EPVO1UjKZqvZ1yYSJAqnxR41wb9Z7ldeiTnwKq8wuZLSwQY6pgEk%2F%2FGxM0fZxhn4ST%2Fgm1SqtD%2BWf%2Fxava1xNsur3wpXKeibmDhUbMuPXLzZjFG4BBoKkIcOAa7GBUlYpoOLWGp8Xo3c3jRhN58Q8SeGnwwb791hhDv0dAov4%2BNhDHO4ZMsIE15oL3Oue8Hxxi%2FCAc69bdviEYPU338u2eB9QImHPZ4LUKuBrqKKhLaffnF9gcpQnbHN0Gu4L4KqeYueUSFGXZFTW00Q&X-Amz-Signature=3235a4075b6db68130ba34ab1494a8eeeb8eeed0d8fdf3f34035b85eb8bca641&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNVJJKI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHhsIv8CrcNsSiToBAVm4wDEpW%2FrWLZ1G8yrPdnIAaeAiBox0RQpEjSWMJzOUBa8u%2FVvL%2BsU9%2FIuZaH%2FwQfp57pxyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM4gyF0UkZVoppzytTKtwDcGocmUIuUUVMi9xAbq0sE22hkjbrr8zwRXxZ8uurBn2SmY5S1cbzDez6ZIVRFIoMlUwOczPIQUa2vn0t2qLxTGRBQoGAephIoh9Bmnt7fyPrAzwuR6cEJUhPX6jf9KMjWTJk5XIHazUf9NnfZaeDLjNk02NKCoixZsXssbQX5iJgAsLCKbLDH3bXzDcvYRgCfSnTmi0ZT6BnPXmeB1UO4CNTz7wlnZlJ03VKL2eDd7K%2F8zAwccgUgUfK7ZVvLnOnKbie0WqDNlFKEsjT2zSOvsjeHrO8NPRcAtt0wBXpjItkE%2FJrpBdzDjQ7RxKv8UQb6mQyO91YJpn08PkF8gEWGQCzhmgd1i%2FZeiIV9dOoU8AozXs24Dv4W%2BEolfRdkP08qFG2whCGuq8V5%2FgVMkFa%2FaU7BY0F7LEvJeoNeLUQ%2BpAVq51ji0kWEyd3hs2vj3vDPG5aFqGIHP2Fbvm2KTz9xdzHnOFe%2F8wOlzzvpebUL%2BVZg6l5YCBPBt%2BqpyMvKGJACpXjgKo25mY3H6nJiuKI6k3okRUsciM0LmOj03%2BMbEJkushzhncRRRR%2FPLS8RJdU%2FSJbfHiCUKsqmq%2BiUgb0EPVO1UjKZqvZ1yYSJAqnxR41wb9Z7ldeiTnwKq8wuZLSwQY6pgEk%2F%2FGxM0fZxhn4ST%2Fgm1SqtD%2BWf%2Fxava1xNsur3wpXKeibmDhUbMuPXLzZjFG4BBoKkIcOAa7GBUlYpoOLWGp8Xo3c3jRhN58Q8SeGnwwb791hhDv0dAov4%2BNhDHO4ZMsIE15oL3Oue8Hxxi%2FCAc69bdviEYPU338u2eB9QImHPZ4LUKuBrqKKhLaffnF9gcpQnbHN0Gu4L4KqeYueUSFGXZFTW00Q&X-Amz-Signature=7583c6507eef2e2f8627186dbcfe667d9a5ef6fdc84f0b753cc24dc8c16fbee3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNVJJKI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHhsIv8CrcNsSiToBAVm4wDEpW%2FrWLZ1G8yrPdnIAaeAiBox0RQpEjSWMJzOUBa8u%2FVvL%2BsU9%2FIuZaH%2FwQfp57pxyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM4gyF0UkZVoppzytTKtwDcGocmUIuUUVMi9xAbq0sE22hkjbrr8zwRXxZ8uurBn2SmY5S1cbzDez6ZIVRFIoMlUwOczPIQUa2vn0t2qLxTGRBQoGAephIoh9Bmnt7fyPrAzwuR6cEJUhPX6jf9KMjWTJk5XIHazUf9NnfZaeDLjNk02NKCoixZsXssbQX5iJgAsLCKbLDH3bXzDcvYRgCfSnTmi0ZT6BnPXmeB1UO4CNTz7wlnZlJ03VKL2eDd7K%2F8zAwccgUgUfK7ZVvLnOnKbie0WqDNlFKEsjT2zSOvsjeHrO8NPRcAtt0wBXpjItkE%2FJrpBdzDjQ7RxKv8UQb6mQyO91YJpn08PkF8gEWGQCzhmgd1i%2FZeiIV9dOoU8AozXs24Dv4W%2BEolfRdkP08qFG2whCGuq8V5%2FgVMkFa%2FaU7BY0F7LEvJeoNeLUQ%2BpAVq51ji0kWEyd3hs2vj3vDPG5aFqGIHP2Fbvm2KTz9xdzHnOFe%2F8wOlzzvpebUL%2BVZg6l5YCBPBt%2BqpyMvKGJACpXjgKo25mY3H6nJiuKI6k3okRUsciM0LmOj03%2BMbEJkushzhncRRRR%2FPLS8RJdU%2FSJbfHiCUKsqmq%2BiUgb0EPVO1UjKZqvZ1yYSJAqnxR41wb9Z7ldeiTnwKq8wuZLSwQY6pgEk%2F%2FGxM0fZxhn4ST%2Fgm1SqtD%2BWf%2Fxava1xNsur3wpXKeibmDhUbMuPXLzZjFG4BBoKkIcOAa7GBUlYpoOLWGp8Xo3c3jRhN58Q8SeGnwwb791hhDv0dAov4%2BNhDHO4ZMsIE15oL3Oue8Hxxi%2FCAc69bdviEYPU338u2eB9QImHPZ4LUKuBrqKKhLaffnF9gcpQnbHN0Gu4L4KqeYueUSFGXZFTW00Q&X-Amz-Signature=460f48b8c51f49b62af6862de08a7c8707499c37105bf0f71f18678a872daab4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNVJJKI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHhsIv8CrcNsSiToBAVm4wDEpW%2FrWLZ1G8yrPdnIAaeAiBox0RQpEjSWMJzOUBa8u%2FVvL%2BsU9%2FIuZaH%2FwQfp57pxyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM4gyF0UkZVoppzytTKtwDcGocmUIuUUVMi9xAbq0sE22hkjbrr8zwRXxZ8uurBn2SmY5S1cbzDez6ZIVRFIoMlUwOczPIQUa2vn0t2qLxTGRBQoGAephIoh9Bmnt7fyPrAzwuR6cEJUhPX6jf9KMjWTJk5XIHazUf9NnfZaeDLjNk02NKCoixZsXssbQX5iJgAsLCKbLDH3bXzDcvYRgCfSnTmi0ZT6BnPXmeB1UO4CNTz7wlnZlJ03VKL2eDd7K%2F8zAwccgUgUfK7ZVvLnOnKbie0WqDNlFKEsjT2zSOvsjeHrO8NPRcAtt0wBXpjItkE%2FJrpBdzDjQ7RxKv8UQb6mQyO91YJpn08PkF8gEWGQCzhmgd1i%2FZeiIV9dOoU8AozXs24Dv4W%2BEolfRdkP08qFG2whCGuq8V5%2FgVMkFa%2FaU7BY0F7LEvJeoNeLUQ%2BpAVq51ji0kWEyd3hs2vj3vDPG5aFqGIHP2Fbvm2KTz9xdzHnOFe%2F8wOlzzvpebUL%2BVZg6l5YCBPBt%2BqpyMvKGJACpXjgKo25mY3H6nJiuKI6k3okRUsciM0LmOj03%2BMbEJkushzhncRRRR%2FPLS8RJdU%2FSJbfHiCUKsqmq%2BiUgb0EPVO1UjKZqvZ1yYSJAqnxR41wb9Z7ldeiTnwKq8wuZLSwQY6pgEk%2F%2FGxM0fZxhn4ST%2Fgm1SqtD%2BWf%2Fxava1xNsur3wpXKeibmDhUbMuPXLzZjFG4BBoKkIcOAa7GBUlYpoOLWGp8Xo3c3jRhN58Q8SeGnwwb791hhDv0dAov4%2BNhDHO4ZMsIE15oL3Oue8Hxxi%2FCAc69bdviEYPU338u2eB9QImHPZ4LUKuBrqKKhLaffnF9gcpQnbHN0Gu4L4KqeYueUSFGXZFTW00Q&X-Amz-Signature=392f66843f326ab425d50c40d2f178c4c17f637196efc7a253c5bc3ada1b37f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNVJJKI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHhsIv8CrcNsSiToBAVm4wDEpW%2FrWLZ1G8yrPdnIAaeAiBox0RQpEjSWMJzOUBa8u%2FVvL%2BsU9%2FIuZaH%2FwQfp57pxyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM4gyF0UkZVoppzytTKtwDcGocmUIuUUVMi9xAbq0sE22hkjbrr8zwRXxZ8uurBn2SmY5S1cbzDez6ZIVRFIoMlUwOczPIQUa2vn0t2qLxTGRBQoGAephIoh9Bmnt7fyPrAzwuR6cEJUhPX6jf9KMjWTJk5XIHazUf9NnfZaeDLjNk02NKCoixZsXssbQX5iJgAsLCKbLDH3bXzDcvYRgCfSnTmi0ZT6BnPXmeB1UO4CNTz7wlnZlJ03VKL2eDd7K%2F8zAwccgUgUfK7ZVvLnOnKbie0WqDNlFKEsjT2zSOvsjeHrO8NPRcAtt0wBXpjItkE%2FJrpBdzDjQ7RxKv8UQb6mQyO91YJpn08PkF8gEWGQCzhmgd1i%2FZeiIV9dOoU8AozXs24Dv4W%2BEolfRdkP08qFG2whCGuq8V5%2FgVMkFa%2FaU7BY0F7LEvJeoNeLUQ%2BpAVq51ji0kWEyd3hs2vj3vDPG5aFqGIHP2Fbvm2KTz9xdzHnOFe%2F8wOlzzvpebUL%2BVZg6l5YCBPBt%2BqpyMvKGJACpXjgKo25mY3H6nJiuKI6k3okRUsciM0LmOj03%2BMbEJkushzhncRRRR%2FPLS8RJdU%2FSJbfHiCUKsqmq%2BiUgb0EPVO1UjKZqvZ1yYSJAqnxR41wb9Z7ldeiTnwKq8wuZLSwQY6pgEk%2F%2FGxM0fZxhn4ST%2Fgm1SqtD%2BWf%2Fxava1xNsur3wpXKeibmDhUbMuPXLzZjFG4BBoKkIcOAa7GBUlYpoOLWGp8Xo3c3jRhN58Q8SeGnwwb791hhDv0dAov4%2BNhDHO4ZMsIE15oL3Oue8Hxxi%2FCAc69bdviEYPU338u2eB9QImHPZ4LUKuBrqKKhLaffnF9gcpQnbHN0Gu4L4KqeYueUSFGXZFTW00Q&X-Amz-Signature=9f874482d27ad184719f0996ad1314e1377343dd6f112d8e9fbe572cde5f21f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNVJJKI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHhsIv8CrcNsSiToBAVm4wDEpW%2FrWLZ1G8yrPdnIAaeAiBox0RQpEjSWMJzOUBa8u%2FVvL%2BsU9%2FIuZaH%2FwQfp57pxyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM4gyF0UkZVoppzytTKtwDcGocmUIuUUVMi9xAbq0sE22hkjbrr8zwRXxZ8uurBn2SmY5S1cbzDez6ZIVRFIoMlUwOczPIQUa2vn0t2qLxTGRBQoGAephIoh9Bmnt7fyPrAzwuR6cEJUhPX6jf9KMjWTJk5XIHazUf9NnfZaeDLjNk02NKCoixZsXssbQX5iJgAsLCKbLDH3bXzDcvYRgCfSnTmi0ZT6BnPXmeB1UO4CNTz7wlnZlJ03VKL2eDd7K%2F8zAwccgUgUfK7ZVvLnOnKbie0WqDNlFKEsjT2zSOvsjeHrO8NPRcAtt0wBXpjItkE%2FJrpBdzDjQ7RxKv8UQb6mQyO91YJpn08PkF8gEWGQCzhmgd1i%2FZeiIV9dOoU8AozXs24Dv4W%2BEolfRdkP08qFG2whCGuq8V5%2FgVMkFa%2FaU7BY0F7LEvJeoNeLUQ%2BpAVq51ji0kWEyd3hs2vj3vDPG5aFqGIHP2Fbvm2KTz9xdzHnOFe%2F8wOlzzvpebUL%2BVZg6l5YCBPBt%2BqpyMvKGJACpXjgKo25mY3H6nJiuKI6k3okRUsciM0LmOj03%2BMbEJkushzhncRRRR%2FPLS8RJdU%2FSJbfHiCUKsqmq%2BiUgb0EPVO1UjKZqvZ1yYSJAqnxR41wb9Z7ldeiTnwKq8wuZLSwQY6pgEk%2F%2FGxM0fZxhn4ST%2Fgm1SqtD%2BWf%2Fxava1xNsur3wpXKeibmDhUbMuPXLzZjFG4BBoKkIcOAa7GBUlYpoOLWGp8Xo3c3jRhN58Q8SeGnwwb791hhDv0dAov4%2BNhDHO4ZMsIE15oL3Oue8Hxxi%2FCAc69bdviEYPU338u2eB9QImHPZ4LUKuBrqKKhLaffnF9gcpQnbHN0Gu4L4KqeYueUSFGXZFTW00Q&X-Amz-Signature=544cab4156a2c031b676921a8e57470817f58e90b9fe3cc53a16813711679c67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNVJJKI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHhsIv8CrcNsSiToBAVm4wDEpW%2FrWLZ1G8yrPdnIAaeAiBox0RQpEjSWMJzOUBa8u%2FVvL%2BsU9%2FIuZaH%2FwQfp57pxyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM4gyF0UkZVoppzytTKtwDcGocmUIuUUVMi9xAbq0sE22hkjbrr8zwRXxZ8uurBn2SmY5S1cbzDez6ZIVRFIoMlUwOczPIQUa2vn0t2qLxTGRBQoGAephIoh9Bmnt7fyPrAzwuR6cEJUhPX6jf9KMjWTJk5XIHazUf9NnfZaeDLjNk02NKCoixZsXssbQX5iJgAsLCKbLDH3bXzDcvYRgCfSnTmi0ZT6BnPXmeB1UO4CNTz7wlnZlJ03VKL2eDd7K%2F8zAwccgUgUfK7ZVvLnOnKbie0WqDNlFKEsjT2zSOvsjeHrO8NPRcAtt0wBXpjItkE%2FJrpBdzDjQ7RxKv8UQb6mQyO91YJpn08PkF8gEWGQCzhmgd1i%2FZeiIV9dOoU8AozXs24Dv4W%2BEolfRdkP08qFG2whCGuq8V5%2FgVMkFa%2FaU7BY0F7LEvJeoNeLUQ%2BpAVq51ji0kWEyd3hs2vj3vDPG5aFqGIHP2Fbvm2KTz9xdzHnOFe%2F8wOlzzvpebUL%2BVZg6l5YCBPBt%2BqpyMvKGJACpXjgKo25mY3H6nJiuKI6k3okRUsciM0LmOj03%2BMbEJkushzhncRRRR%2FPLS8RJdU%2FSJbfHiCUKsqmq%2BiUgb0EPVO1UjKZqvZ1yYSJAqnxR41wb9Z7ldeiTnwKq8wuZLSwQY6pgEk%2F%2FGxM0fZxhn4ST%2Fgm1SqtD%2BWf%2Fxava1xNsur3wpXKeibmDhUbMuPXLzZjFG4BBoKkIcOAa7GBUlYpoOLWGp8Xo3c3jRhN58Q8SeGnwwb791hhDv0dAov4%2BNhDHO4ZMsIE15oL3Oue8Hxxi%2FCAc69bdviEYPU338u2eB9QImHPZ4LUKuBrqKKhLaffnF9gcpQnbHN0Gu4L4KqeYueUSFGXZFTW00Q&X-Amz-Signature=045ce76d1da6617d12225f12f0d8fcf3274f3228fb5f118c271ba2b8b9c2e790&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

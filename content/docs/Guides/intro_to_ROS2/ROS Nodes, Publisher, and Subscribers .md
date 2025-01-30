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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5CTMRV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVRV3tiknwGkCCSl%2FWUPGtgtyOZAPEbeA5LWWvqwOnNAiADvNvCqzWMzfoGhcSESZqcmwAq%2BmnawVTBd6u9c6Gp7yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf93PP9BvbjUvd6FxKtwDLGBD4XXPjD%2FWVK3VW5USFZ83v0As3uDckj1w0%2BzBie8ma8XsqcNRuQT6gC83wyvOKL0umWMzZKkw%2Fr%2BxP%2FqsEw3LXyMKf0jeVz8e1BQeQP94H%2B8oWM%2BG9QHjYbqhl8%2FkHTvowWP%2FOjHzlVXFi9zTmkPCXA9252%2BY2Sd6bmLclo7sM4cawsLd0hcODdwsgle3mDBSzeo%2Be7GiD82NAawmXOQ1OyOyAy6yaKT53i2%2FFyBPVoSqU7Q4106vvEWRXLjxbwVFCx5aYxx6dU%2BNoJNkqa3H6TWi6fF%2Fq7KmhzSDnKmLak4YByaGBgRIOaiDNHkBlpDyXR3CkXSYBjXkZg0QqknYMEfjUxdl3dVlnC4UJPhjKql%2BHMFRTf%2Biapfui5bqOgo%2FW5CDywJNqRvDc7nS2GVOT%2BJc5dLiWm0FID5pHKc%2BNqjWo%2BUMvDk%2FYq9qk%2FsUMe1dsOIpfn8kd648gP32PpJ7zXsOA6aYpkh9dr4VmrZHo8kE6lTMhcoNeBgKCsM1mmrsJmt1%2FsvYEg60xXSLSaDVeZ9TyVy3ozGzlnD5lvRsHHw%2FXwXvAC3BFpFApbE68QpCKVmnxiecGqympsuK4N%2BttvmOFHZPlmlkYlBUlsVDeEMbky26slmEr1owt7TrvAY6pgF%2Fhebht1HRo3JC8PXb0ZU%2BIQU8Ri3Md689DM1wP%2BnJB0fk33CUyWs%2FUELJGvOPHW0zv7tUJXxBquq0OfqoBqSkby3UbdeeDo76x9L2uLgy0hSUTyxWHIt1MzAuaPfvE%2BUzTQC%2BDkNb19hFoYyvYQBxWn7IxYKnGemluJBafIVHd9ZX8mVXe4LjZBPBzQHHOTHTsd5uAasGzG1Ng7iDSuvZxZRzN9Gn&X-Amz-Signature=3ae43614f99213bd89d50d644a221420420c4b3f85e63ea042cf9c8c96231040&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5CTMRV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVRV3tiknwGkCCSl%2FWUPGtgtyOZAPEbeA5LWWvqwOnNAiADvNvCqzWMzfoGhcSESZqcmwAq%2BmnawVTBd6u9c6Gp7yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf93PP9BvbjUvd6FxKtwDLGBD4XXPjD%2FWVK3VW5USFZ83v0As3uDckj1w0%2BzBie8ma8XsqcNRuQT6gC83wyvOKL0umWMzZKkw%2Fr%2BxP%2FqsEw3LXyMKf0jeVz8e1BQeQP94H%2B8oWM%2BG9QHjYbqhl8%2FkHTvowWP%2FOjHzlVXFi9zTmkPCXA9252%2BY2Sd6bmLclo7sM4cawsLd0hcODdwsgle3mDBSzeo%2Be7GiD82NAawmXOQ1OyOyAy6yaKT53i2%2FFyBPVoSqU7Q4106vvEWRXLjxbwVFCx5aYxx6dU%2BNoJNkqa3H6TWi6fF%2Fq7KmhzSDnKmLak4YByaGBgRIOaiDNHkBlpDyXR3CkXSYBjXkZg0QqknYMEfjUxdl3dVlnC4UJPhjKql%2BHMFRTf%2Biapfui5bqOgo%2FW5CDywJNqRvDc7nS2GVOT%2BJc5dLiWm0FID5pHKc%2BNqjWo%2BUMvDk%2FYq9qk%2FsUMe1dsOIpfn8kd648gP32PpJ7zXsOA6aYpkh9dr4VmrZHo8kE6lTMhcoNeBgKCsM1mmrsJmt1%2FsvYEg60xXSLSaDVeZ9TyVy3ozGzlnD5lvRsHHw%2FXwXvAC3BFpFApbE68QpCKVmnxiecGqympsuK4N%2BttvmOFHZPlmlkYlBUlsVDeEMbky26slmEr1owt7TrvAY6pgF%2Fhebht1HRo3JC8PXb0ZU%2BIQU8Ri3Md689DM1wP%2BnJB0fk33CUyWs%2FUELJGvOPHW0zv7tUJXxBquq0OfqoBqSkby3UbdeeDo76x9L2uLgy0hSUTyxWHIt1MzAuaPfvE%2BUzTQC%2BDkNb19hFoYyvYQBxWn7IxYKnGemluJBafIVHd9ZX8mVXe4LjZBPBzQHHOTHTsd5uAasGzG1Ng7iDSuvZxZRzN9Gn&X-Amz-Signature=796aa49eee7f04e15723a566236ba9a00a8edbefa1183f929c4058c2f57c9210&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5CTMRV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVRV3tiknwGkCCSl%2FWUPGtgtyOZAPEbeA5LWWvqwOnNAiADvNvCqzWMzfoGhcSESZqcmwAq%2BmnawVTBd6u9c6Gp7yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf93PP9BvbjUvd6FxKtwDLGBD4XXPjD%2FWVK3VW5USFZ83v0As3uDckj1w0%2BzBie8ma8XsqcNRuQT6gC83wyvOKL0umWMzZKkw%2Fr%2BxP%2FqsEw3LXyMKf0jeVz8e1BQeQP94H%2B8oWM%2BG9QHjYbqhl8%2FkHTvowWP%2FOjHzlVXFi9zTmkPCXA9252%2BY2Sd6bmLclo7sM4cawsLd0hcODdwsgle3mDBSzeo%2Be7GiD82NAawmXOQ1OyOyAy6yaKT53i2%2FFyBPVoSqU7Q4106vvEWRXLjxbwVFCx5aYxx6dU%2BNoJNkqa3H6TWi6fF%2Fq7KmhzSDnKmLak4YByaGBgRIOaiDNHkBlpDyXR3CkXSYBjXkZg0QqknYMEfjUxdl3dVlnC4UJPhjKql%2BHMFRTf%2Biapfui5bqOgo%2FW5CDywJNqRvDc7nS2GVOT%2BJc5dLiWm0FID5pHKc%2BNqjWo%2BUMvDk%2FYq9qk%2FsUMe1dsOIpfn8kd648gP32PpJ7zXsOA6aYpkh9dr4VmrZHo8kE6lTMhcoNeBgKCsM1mmrsJmt1%2FsvYEg60xXSLSaDVeZ9TyVy3ozGzlnD5lvRsHHw%2FXwXvAC3BFpFApbE68QpCKVmnxiecGqympsuK4N%2BttvmOFHZPlmlkYlBUlsVDeEMbky26slmEr1owt7TrvAY6pgF%2Fhebht1HRo3JC8PXb0ZU%2BIQU8Ri3Md689DM1wP%2BnJB0fk33CUyWs%2FUELJGvOPHW0zv7tUJXxBquq0OfqoBqSkby3UbdeeDo76x9L2uLgy0hSUTyxWHIt1MzAuaPfvE%2BUzTQC%2BDkNb19hFoYyvYQBxWn7IxYKnGemluJBafIVHd9ZX8mVXe4LjZBPBzQHHOTHTsd5uAasGzG1Ng7iDSuvZxZRzN9Gn&X-Amz-Signature=4ad3db07329f6c6e19176d5ad5ce62a5a7244b675f874c8b0a93254618f72af2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5CTMRV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVRV3tiknwGkCCSl%2FWUPGtgtyOZAPEbeA5LWWvqwOnNAiADvNvCqzWMzfoGhcSESZqcmwAq%2BmnawVTBd6u9c6Gp7yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf93PP9BvbjUvd6FxKtwDLGBD4XXPjD%2FWVK3VW5USFZ83v0As3uDckj1w0%2BzBie8ma8XsqcNRuQT6gC83wyvOKL0umWMzZKkw%2Fr%2BxP%2FqsEw3LXyMKf0jeVz8e1BQeQP94H%2B8oWM%2BG9QHjYbqhl8%2FkHTvowWP%2FOjHzlVXFi9zTmkPCXA9252%2BY2Sd6bmLclo7sM4cawsLd0hcODdwsgle3mDBSzeo%2Be7GiD82NAawmXOQ1OyOyAy6yaKT53i2%2FFyBPVoSqU7Q4106vvEWRXLjxbwVFCx5aYxx6dU%2BNoJNkqa3H6TWi6fF%2Fq7KmhzSDnKmLak4YByaGBgRIOaiDNHkBlpDyXR3CkXSYBjXkZg0QqknYMEfjUxdl3dVlnC4UJPhjKql%2BHMFRTf%2Biapfui5bqOgo%2FW5CDywJNqRvDc7nS2GVOT%2BJc5dLiWm0FID5pHKc%2BNqjWo%2BUMvDk%2FYq9qk%2FsUMe1dsOIpfn8kd648gP32PpJ7zXsOA6aYpkh9dr4VmrZHo8kE6lTMhcoNeBgKCsM1mmrsJmt1%2FsvYEg60xXSLSaDVeZ9TyVy3ozGzlnD5lvRsHHw%2FXwXvAC3BFpFApbE68QpCKVmnxiecGqympsuK4N%2BttvmOFHZPlmlkYlBUlsVDeEMbky26slmEr1owt7TrvAY6pgF%2Fhebht1HRo3JC8PXb0ZU%2BIQU8Ri3Md689DM1wP%2BnJB0fk33CUyWs%2FUELJGvOPHW0zv7tUJXxBquq0OfqoBqSkby3UbdeeDo76x9L2uLgy0hSUTyxWHIt1MzAuaPfvE%2BUzTQC%2BDkNb19hFoYyvYQBxWn7IxYKnGemluJBafIVHd9ZX8mVXe4LjZBPBzQHHOTHTsd5uAasGzG1Ng7iDSuvZxZRzN9Gn&X-Amz-Signature=520d70af0fad47f639507eb1af5b64cabcc0c17697f66fa984e7a08afdcc0ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5CTMRV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVRV3tiknwGkCCSl%2FWUPGtgtyOZAPEbeA5LWWvqwOnNAiADvNvCqzWMzfoGhcSESZqcmwAq%2BmnawVTBd6u9c6Gp7yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf93PP9BvbjUvd6FxKtwDLGBD4XXPjD%2FWVK3VW5USFZ83v0As3uDckj1w0%2BzBie8ma8XsqcNRuQT6gC83wyvOKL0umWMzZKkw%2Fr%2BxP%2FqsEw3LXyMKf0jeVz8e1BQeQP94H%2B8oWM%2BG9QHjYbqhl8%2FkHTvowWP%2FOjHzlVXFi9zTmkPCXA9252%2BY2Sd6bmLclo7sM4cawsLd0hcODdwsgle3mDBSzeo%2Be7GiD82NAawmXOQ1OyOyAy6yaKT53i2%2FFyBPVoSqU7Q4106vvEWRXLjxbwVFCx5aYxx6dU%2BNoJNkqa3H6TWi6fF%2Fq7KmhzSDnKmLak4YByaGBgRIOaiDNHkBlpDyXR3CkXSYBjXkZg0QqknYMEfjUxdl3dVlnC4UJPhjKql%2BHMFRTf%2Biapfui5bqOgo%2FW5CDywJNqRvDc7nS2GVOT%2BJc5dLiWm0FID5pHKc%2BNqjWo%2BUMvDk%2FYq9qk%2FsUMe1dsOIpfn8kd648gP32PpJ7zXsOA6aYpkh9dr4VmrZHo8kE6lTMhcoNeBgKCsM1mmrsJmt1%2FsvYEg60xXSLSaDVeZ9TyVy3ozGzlnD5lvRsHHw%2FXwXvAC3BFpFApbE68QpCKVmnxiecGqympsuK4N%2BttvmOFHZPlmlkYlBUlsVDeEMbky26slmEr1owt7TrvAY6pgF%2Fhebht1HRo3JC8PXb0ZU%2BIQU8Ri3Md689DM1wP%2BnJB0fk33CUyWs%2FUELJGvOPHW0zv7tUJXxBquq0OfqoBqSkby3UbdeeDo76x9L2uLgy0hSUTyxWHIt1MzAuaPfvE%2BUzTQC%2BDkNb19hFoYyvYQBxWn7IxYKnGemluJBafIVHd9ZX8mVXe4LjZBPBzQHHOTHTsd5uAasGzG1Ng7iDSuvZxZRzN9Gn&X-Amz-Signature=b0ce91739f22471a16597ecc247c144b35bf8d5f2af37dd5603a844cd305a806&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5CTMRV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVRV3tiknwGkCCSl%2FWUPGtgtyOZAPEbeA5LWWvqwOnNAiADvNvCqzWMzfoGhcSESZqcmwAq%2BmnawVTBd6u9c6Gp7yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf93PP9BvbjUvd6FxKtwDLGBD4XXPjD%2FWVK3VW5USFZ83v0As3uDckj1w0%2BzBie8ma8XsqcNRuQT6gC83wyvOKL0umWMzZKkw%2Fr%2BxP%2FqsEw3LXyMKf0jeVz8e1BQeQP94H%2B8oWM%2BG9QHjYbqhl8%2FkHTvowWP%2FOjHzlVXFi9zTmkPCXA9252%2BY2Sd6bmLclo7sM4cawsLd0hcODdwsgle3mDBSzeo%2Be7GiD82NAawmXOQ1OyOyAy6yaKT53i2%2FFyBPVoSqU7Q4106vvEWRXLjxbwVFCx5aYxx6dU%2BNoJNkqa3H6TWi6fF%2Fq7KmhzSDnKmLak4YByaGBgRIOaiDNHkBlpDyXR3CkXSYBjXkZg0QqknYMEfjUxdl3dVlnC4UJPhjKql%2BHMFRTf%2Biapfui5bqOgo%2FW5CDywJNqRvDc7nS2GVOT%2BJc5dLiWm0FID5pHKc%2BNqjWo%2BUMvDk%2FYq9qk%2FsUMe1dsOIpfn8kd648gP32PpJ7zXsOA6aYpkh9dr4VmrZHo8kE6lTMhcoNeBgKCsM1mmrsJmt1%2FsvYEg60xXSLSaDVeZ9TyVy3ozGzlnD5lvRsHHw%2FXwXvAC3BFpFApbE68QpCKVmnxiecGqympsuK4N%2BttvmOFHZPlmlkYlBUlsVDeEMbky26slmEr1owt7TrvAY6pgF%2Fhebht1HRo3JC8PXb0ZU%2BIQU8Ri3Md689DM1wP%2BnJB0fk33CUyWs%2FUELJGvOPHW0zv7tUJXxBquq0OfqoBqSkby3UbdeeDo76x9L2uLgy0hSUTyxWHIt1MzAuaPfvE%2BUzTQC%2BDkNb19hFoYyvYQBxWn7IxYKnGemluJBafIVHd9ZX8mVXe4LjZBPBzQHHOTHTsd5uAasGzG1Ng7iDSuvZxZRzN9Gn&X-Amz-Signature=8e04fde160f0b874a2236468d9ad7229b36db2427a2ca5a76b16d44018681daf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5CTMRV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVRV3tiknwGkCCSl%2FWUPGtgtyOZAPEbeA5LWWvqwOnNAiADvNvCqzWMzfoGhcSESZqcmwAq%2BmnawVTBd6u9c6Gp7yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf93PP9BvbjUvd6FxKtwDLGBD4XXPjD%2FWVK3VW5USFZ83v0As3uDckj1w0%2BzBie8ma8XsqcNRuQT6gC83wyvOKL0umWMzZKkw%2Fr%2BxP%2FqsEw3LXyMKf0jeVz8e1BQeQP94H%2B8oWM%2BG9QHjYbqhl8%2FkHTvowWP%2FOjHzlVXFi9zTmkPCXA9252%2BY2Sd6bmLclo7sM4cawsLd0hcODdwsgle3mDBSzeo%2Be7GiD82NAawmXOQ1OyOyAy6yaKT53i2%2FFyBPVoSqU7Q4106vvEWRXLjxbwVFCx5aYxx6dU%2BNoJNkqa3H6TWi6fF%2Fq7KmhzSDnKmLak4YByaGBgRIOaiDNHkBlpDyXR3CkXSYBjXkZg0QqknYMEfjUxdl3dVlnC4UJPhjKql%2BHMFRTf%2Biapfui5bqOgo%2FW5CDywJNqRvDc7nS2GVOT%2BJc5dLiWm0FID5pHKc%2BNqjWo%2BUMvDk%2FYq9qk%2FsUMe1dsOIpfn8kd648gP32PpJ7zXsOA6aYpkh9dr4VmrZHo8kE6lTMhcoNeBgKCsM1mmrsJmt1%2FsvYEg60xXSLSaDVeZ9TyVy3ozGzlnD5lvRsHHw%2FXwXvAC3BFpFApbE68QpCKVmnxiecGqympsuK4N%2BttvmOFHZPlmlkYlBUlsVDeEMbky26slmEr1owt7TrvAY6pgF%2Fhebht1HRo3JC8PXb0ZU%2BIQU8Ri3Md689DM1wP%2BnJB0fk33CUyWs%2FUELJGvOPHW0zv7tUJXxBquq0OfqoBqSkby3UbdeeDo76x9L2uLgy0hSUTyxWHIt1MzAuaPfvE%2BUzTQC%2BDkNb19hFoYyvYQBxWn7IxYKnGemluJBafIVHd9ZX8mVXe4LjZBPBzQHHOTHTsd5uAasGzG1Ng7iDSuvZxZRzN9Gn&X-Amz-Signature=56b822b24c00399ad6fc76594d8546ecf574be088133b174c63f6e520601c6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5CTMRV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVRV3tiknwGkCCSl%2FWUPGtgtyOZAPEbeA5LWWvqwOnNAiADvNvCqzWMzfoGhcSESZqcmwAq%2BmnawVTBd6u9c6Gp7yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf93PP9BvbjUvd6FxKtwDLGBD4XXPjD%2FWVK3VW5USFZ83v0As3uDckj1w0%2BzBie8ma8XsqcNRuQT6gC83wyvOKL0umWMzZKkw%2Fr%2BxP%2FqsEw3LXyMKf0jeVz8e1BQeQP94H%2B8oWM%2BG9QHjYbqhl8%2FkHTvowWP%2FOjHzlVXFi9zTmkPCXA9252%2BY2Sd6bmLclo7sM4cawsLd0hcODdwsgle3mDBSzeo%2Be7GiD82NAawmXOQ1OyOyAy6yaKT53i2%2FFyBPVoSqU7Q4106vvEWRXLjxbwVFCx5aYxx6dU%2BNoJNkqa3H6TWi6fF%2Fq7KmhzSDnKmLak4YByaGBgRIOaiDNHkBlpDyXR3CkXSYBjXkZg0QqknYMEfjUxdl3dVlnC4UJPhjKql%2BHMFRTf%2Biapfui5bqOgo%2FW5CDywJNqRvDc7nS2GVOT%2BJc5dLiWm0FID5pHKc%2BNqjWo%2BUMvDk%2FYq9qk%2FsUMe1dsOIpfn8kd648gP32PpJ7zXsOA6aYpkh9dr4VmrZHo8kE6lTMhcoNeBgKCsM1mmrsJmt1%2FsvYEg60xXSLSaDVeZ9TyVy3ozGzlnD5lvRsHHw%2FXwXvAC3BFpFApbE68QpCKVmnxiecGqympsuK4N%2BttvmOFHZPlmlkYlBUlsVDeEMbky26slmEr1owt7TrvAY6pgF%2Fhebht1HRo3JC8PXb0ZU%2BIQU8Ri3Md689DM1wP%2BnJB0fk33CUyWs%2FUELJGvOPHW0zv7tUJXxBquq0OfqoBqSkby3UbdeeDo76x9L2uLgy0hSUTyxWHIt1MzAuaPfvE%2BUzTQC%2BDkNb19hFoYyvYQBxWn7IxYKnGemluJBafIVHd9ZX8mVXe4LjZBPBzQHHOTHTsd5uAasGzG1Ng7iDSuvZxZRzN9Gn&X-Amz-Signature=a6673847239eb1035c5875359539efd165b6bbff31856953095ed5937d7cb468&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3COTE7S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BtektoNwlau6oDZSE2nj8HSpKZHJ9UAmp6JgHHbx%2BjQIhANA7h0E8iWSyVk6OQ0UHvOflcixabN3QQPz61C%2B7vR8XKv8DCFIQABoMNjM3NDIzMTgzODA1IgxcZn0XKwCsMVNFTW4q3AOFIu%2FLAZn4DupPFhd9Cs8SPY9hVLULyBHv5UhsPBVSXZmiXLR%2Fn5DoF8zV6CMUfRAsEJaHIik6iFUQMEU3ymTafpZtII16iPhN1floUXwVUcd8h%2Fpzn5jWWqmWeZoVLRgTjlbTQp78iNR%2Fb1GCcb31ih2qr4EiuT2wW946U2AvjxxIzqdyM1ZttUmH0GTKLj3IGSjYxzRXyPalrhhGBsU55j4TeOgrjT3fOk1e3zOthvpQ4R%2BYgcAVly6syz2Ka0ykgV8gj%2Bch9fy7BJ811F0w%2BkQhPV%2BdkOBC6%2Fw1dRFn5vIUleTmAndJIKuNUuyb9J2mVNndfdJ1PqZMOaCMiGRHCz5mzBB1Z0Lx2yEaP1k8IcXDVMGdWmlc5sY7KvxRAfr%2BtAxqefH2Xcn2HYMiyQk4xyJKrwriRkLzem4kEaksebY89DBHiIyjYgvHbwdvi6SMEe5TnJlAJ1iCD6hsJOS8bXLGOwCjZXC3wsFdqlJesLpG0%2Fo1vGjaR6XQ3M%2Bj486xxXtTmO3A9OEkbJcjCEpLRGkmwaQjh4t6g4FVIbh1QrN4DqFw1f7hl45MivAmrXX6nE0FnmUZEeOGQzsXD5QD7dxU%2FOcahnMUw5UA6PHSO%2Bjnnfx3jmLQf5%2FVvjCal9TBBjqkAZ8EcvGoaIT3yQaKVYCHSyNCAiJi5JQDwXpjVN62WiO4FozhXJ8BggLQJHy5Vq1IgM7VkgwfoMVexAcayzvkGGv2SHJ8vukDvmTtZN4ozc2N8aUFMX0d1Dm%2B%2FpFvttVvZPlqR%2FdeymrO8mI%2Fvu%2B27gBjhS3sotjmLqRrIrwmnigr5XgVSXCqCAfDD7HDbc7ZqmW2tyoB3d7zWdEQbqwi2hHArZ0u&X-Amz-Signature=8d581df8f4ae47d3d976f29972b33641bf53f871085a2432ac0caf163bfb861d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3COTE7S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BtektoNwlau6oDZSE2nj8HSpKZHJ9UAmp6JgHHbx%2BjQIhANA7h0E8iWSyVk6OQ0UHvOflcixabN3QQPz61C%2B7vR8XKv8DCFIQABoMNjM3NDIzMTgzODA1IgxcZn0XKwCsMVNFTW4q3AOFIu%2FLAZn4DupPFhd9Cs8SPY9hVLULyBHv5UhsPBVSXZmiXLR%2Fn5DoF8zV6CMUfRAsEJaHIik6iFUQMEU3ymTafpZtII16iPhN1floUXwVUcd8h%2Fpzn5jWWqmWeZoVLRgTjlbTQp78iNR%2Fb1GCcb31ih2qr4EiuT2wW946U2AvjxxIzqdyM1ZttUmH0GTKLj3IGSjYxzRXyPalrhhGBsU55j4TeOgrjT3fOk1e3zOthvpQ4R%2BYgcAVly6syz2Ka0ykgV8gj%2Bch9fy7BJ811F0w%2BkQhPV%2BdkOBC6%2Fw1dRFn5vIUleTmAndJIKuNUuyb9J2mVNndfdJ1PqZMOaCMiGRHCz5mzBB1Z0Lx2yEaP1k8IcXDVMGdWmlc5sY7KvxRAfr%2BtAxqefH2Xcn2HYMiyQk4xyJKrwriRkLzem4kEaksebY89DBHiIyjYgvHbwdvi6SMEe5TnJlAJ1iCD6hsJOS8bXLGOwCjZXC3wsFdqlJesLpG0%2Fo1vGjaR6XQ3M%2Bj486xxXtTmO3A9OEkbJcjCEpLRGkmwaQjh4t6g4FVIbh1QrN4DqFw1f7hl45MivAmrXX6nE0FnmUZEeOGQzsXD5QD7dxU%2FOcahnMUw5UA6PHSO%2Bjnnfx3jmLQf5%2FVvjCal9TBBjqkAZ8EcvGoaIT3yQaKVYCHSyNCAiJi5JQDwXpjVN62WiO4FozhXJ8BggLQJHy5Vq1IgM7VkgwfoMVexAcayzvkGGv2SHJ8vukDvmTtZN4ozc2N8aUFMX0d1Dm%2B%2FpFvttVvZPlqR%2FdeymrO8mI%2Fvu%2B27gBjhS3sotjmLqRrIrwmnigr5XgVSXCqCAfDD7HDbc7ZqmW2tyoB3d7zWdEQbqwi2hHArZ0u&X-Amz-Signature=ba15d100ea9bbe99fc2a8155f99e6f46abfc897cbc47557e0bfeed834d13c67a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3COTE7S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BtektoNwlau6oDZSE2nj8HSpKZHJ9UAmp6JgHHbx%2BjQIhANA7h0E8iWSyVk6OQ0UHvOflcixabN3QQPz61C%2B7vR8XKv8DCFIQABoMNjM3NDIzMTgzODA1IgxcZn0XKwCsMVNFTW4q3AOFIu%2FLAZn4DupPFhd9Cs8SPY9hVLULyBHv5UhsPBVSXZmiXLR%2Fn5DoF8zV6CMUfRAsEJaHIik6iFUQMEU3ymTafpZtII16iPhN1floUXwVUcd8h%2Fpzn5jWWqmWeZoVLRgTjlbTQp78iNR%2Fb1GCcb31ih2qr4EiuT2wW946U2AvjxxIzqdyM1ZttUmH0GTKLj3IGSjYxzRXyPalrhhGBsU55j4TeOgrjT3fOk1e3zOthvpQ4R%2BYgcAVly6syz2Ka0ykgV8gj%2Bch9fy7BJ811F0w%2BkQhPV%2BdkOBC6%2Fw1dRFn5vIUleTmAndJIKuNUuyb9J2mVNndfdJ1PqZMOaCMiGRHCz5mzBB1Z0Lx2yEaP1k8IcXDVMGdWmlc5sY7KvxRAfr%2BtAxqefH2Xcn2HYMiyQk4xyJKrwriRkLzem4kEaksebY89DBHiIyjYgvHbwdvi6SMEe5TnJlAJ1iCD6hsJOS8bXLGOwCjZXC3wsFdqlJesLpG0%2Fo1vGjaR6XQ3M%2Bj486xxXtTmO3A9OEkbJcjCEpLRGkmwaQjh4t6g4FVIbh1QrN4DqFw1f7hl45MivAmrXX6nE0FnmUZEeOGQzsXD5QD7dxU%2FOcahnMUw5UA6PHSO%2Bjnnfx3jmLQf5%2FVvjCal9TBBjqkAZ8EcvGoaIT3yQaKVYCHSyNCAiJi5JQDwXpjVN62WiO4FozhXJ8BggLQJHy5Vq1IgM7VkgwfoMVexAcayzvkGGv2SHJ8vukDvmTtZN4ozc2N8aUFMX0d1Dm%2B%2FpFvttVvZPlqR%2FdeymrO8mI%2Fvu%2B27gBjhS3sotjmLqRrIrwmnigr5XgVSXCqCAfDD7HDbc7ZqmW2tyoB3d7zWdEQbqwi2hHArZ0u&X-Amz-Signature=3afa34cba1bce528b24f2fef70bc03f5756e02abc6ef676c613940f43688d75e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3COTE7S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BtektoNwlau6oDZSE2nj8HSpKZHJ9UAmp6JgHHbx%2BjQIhANA7h0E8iWSyVk6OQ0UHvOflcixabN3QQPz61C%2B7vR8XKv8DCFIQABoMNjM3NDIzMTgzODA1IgxcZn0XKwCsMVNFTW4q3AOFIu%2FLAZn4DupPFhd9Cs8SPY9hVLULyBHv5UhsPBVSXZmiXLR%2Fn5DoF8zV6CMUfRAsEJaHIik6iFUQMEU3ymTafpZtII16iPhN1floUXwVUcd8h%2Fpzn5jWWqmWeZoVLRgTjlbTQp78iNR%2Fb1GCcb31ih2qr4EiuT2wW946U2AvjxxIzqdyM1ZttUmH0GTKLj3IGSjYxzRXyPalrhhGBsU55j4TeOgrjT3fOk1e3zOthvpQ4R%2BYgcAVly6syz2Ka0ykgV8gj%2Bch9fy7BJ811F0w%2BkQhPV%2BdkOBC6%2Fw1dRFn5vIUleTmAndJIKuNUuyb9J2mVNndfdJ1PqZMOaCMiGRHCz5mzBB1Z0Lx2yEaP1k8IcXDVMGdWmlc5sY7KvxRAfr%2BtAxqefH2Xcn2HYMiyQk4xyJKrwriRkLzem4kEaksebY89DBHiIyjYgvHbwdvi6SMEe5TnJlAJ1iCD6hsJOS8bXLGOwCjZXC3wsFdqlJesLpG0%2Fo1vGjaR6XQ3M%2Bj486xxXtTmO3A9OEkbJcjCEpLRGkmwaQjh4t6g4FVIbh1QrN4DqFw1f7hl45MivAmrXX6nE0FnmUZEeOGQzsXD5QD7dxU%2FOcahnMUw5UA6PHSO%2Bjnnfx3jmLQf5%2FVvjCal9TBBjqkAZ8EcvGoaIT3yQaKVYCHSyNCAiJi5JQDwXpjVN62WiO4FozhXJ8BggLQJHy5Vq1IgM7VkgwfoMVexAcayzvkGGv2SHJ8vukDvmTtZN4ozc2N8aUFMX0d1Dm%2B%2FpFvttVvZPlqR%2FdeymrO8mI%2Fvu%2B27gBjhS3sotjmLqRrIrwmnigr5XgVSXCqCAfDD7HDbc7ZqmW2tyoB3d7zWdEQbqwi2hHArZ0u&X-Amz-Signature=583f5cf52072b66db218fb6912d2ee27f2fecd6d0737221fd3028dbdeeaf259b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3COTE7S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BtektoNwlau6oDZSE2nj8HSpKZHJ9UAmp6JgHHbx%2BjQIhANA7h0E8iWSyVk6OQ0UHvOflcixabN3QQPz61C%2B7vR8XKv8DCFIQABoMNjM3NDIzMTgzODA1IgxcZn0XKwCsMVNFTW4q3AOFIu%2FLAZn4DupPFhd9Cs8SPY9hVLULyBHv5UhsPBVSXZmiXLR%2Fn5DoF8zV6CMUfRAsEJaHIik6iFUQMEU3ymTafpZtII16iPhN1floUXwVUcd8h%2Fpzn5jWWqmWeZoVLRgTjlbTQp78iNR%2Fb1GCcb31ih2qr4EiuT2wW946U2AvjxxIzqdyM1ZttUmH0GTKLj3IGSjYxzRXyPalrhhGBsU55j4TeOgrjT3fOk1e3zOthvpQ4R%2BYgcAVly6syz2Ka0ykgV8gj%2Bch9fy7BJ811F0w%2BkQhPV%2BdkOBC6%2Fw1dRFn5vIUleTmAndJIKuNUuyb9J2mVNndfdJ1PqZMOaCMiGRHCz5mzBB1Z0Lx2yEaP1k8IcXDVMGdWmlc5sY7KvxRAfr%2BtAxqefH2Xcn2HYMiyQk4xyJKrwriRkLzem4kEaksebY89DBHiIyjYgvHbwdvi6SMEe5TnJlAJ1iCD6hsJOS8bXLGOwCjZXC3wsFdqlJesLpG0%2Fo1vGjaR6XQ3M%2Bj486xxXtTmO3A9OEkbJcjCEpLRGkmwaQjh4t6g4FVIbh1QrN4DqFw1f7hl45MivAmrXX6nE0FnmUZEeOGQzsXD5QD7dxU%2FOcahnMUw5UA6PHSO%2Bjnnfx3jmLQf5%2FVvjCal9TBBjqkAZ8EcvGoaIT3yQaKVYCHSyNCAiJi5JQDwXpjVN62WiO4FozhXJ8BggLQJHy5Vq1IgM7VkgwfoMVexAcayzvkGGv2SHJ8vukDvmTtZN4ozc2N8aUFMX0d1Dm%2B%2FpFvttVvZPlqR%2FdeymrO8mI%2Fvu%2B27gBjhS3sotjmLqRrIrwmnigr5XgVSXCqCAfDD7HDbc7ZqmW2tyoB3d7zWdEQbqwi2hHArZ0u&X-Amz-Signature=76bca001d5c7f1a9df0df3b8f64fc4043d6937d948f7e25141d392a74e62d304&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3COTE7S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BtektoNwlau6oDZSE2nj8HSpKZHJ9UAmp6JgHHbx%2BjQIhANA7h0E8iWSyVk6OQ0UHvOflcixabN3QQPz61C%2B7vR8XKv8DCFIQABoMNjM3NDIzMTgzODA1IgxcZn0XKwCsMVNFTW4q3AOFIu%2FLAZn4DupPFhd9Cs8SPY9hVLULyBHv5UhsPBVSXZmiXLR%2Fn5DoF8zV6CMUfRAsEJaHIik6iFUQMEU3ymTafpZtII16iPhN1floUXwVUcd8h%2Fpzn5jWWqmWeZoVLRgTjlbTQp78iNR%2Fb1GCcb31ih2qr4EiuT2wW946U2AvjxxIzqdyM1ZttUmH0GTKLj3IGSjYxzRXyPalrhhGBsU55j4TeOgrjT3fOk1e3zOthvpQ4R%2BYgcAVly6syz2Ka0ykgV8gj%2Bch9fy7BJ811F0w%2BkQhPV%2BdkOBC6%2Fw1dRFn5vIUleTmAndJIKuNUuyb9J2mVNndfdJ1PqZMOaCMiGRHCz5mzBB1Z0Lx2yEaP1k8IcXDVMGdWmlc5sY7KvxRAfr%2BtAxqefH2Xcn2HYMiyQk4xyJKrwriRkLzem4kEaksebY89DBHiIyjYgvHbwdvi6SMEe5TnJlAJ1iCD6hsJOS8bXLGOwCjZXC3wsFdqlJesLpG0%2Fo1vGjaR6XQ3M%2Bj486xxXtTmO3A9OEkbJcjCEpLRGkmwaQjh4t6g4FVIbh1QrN4DqFw1f7hl45MivAmrXX6nE0FnmUZEeOGQzsXD5QD7dxU%2FOcahnMUw5UA6PHSO%2Bjnnfx3jmLQf5%2FVvjCal9TBBjqkAZ8EcvGoaIT3yQaKVYCHSyNCAiJi5JQDwXpjVN62WiO4FozhXJ8BggLQJHy5Vq1IgM7VkgwfoMVexAcayzvkGGv2SHJ8vukDvmTtZN4ozc2N8aUFMX0d1Dm%2B%2FpFvttVvZPlqR%2FdeymrO8mI%2Fvu%2B27gBjhS3sotjmLqRrIrwmnigr5XgVSXCqCAfDD7HDbc7ZqmW2tyoB3d7zWdEQbqwi2hHArZ0u&X-Amz-Signature=c648278d079340dda848e19c33352aa5ed4af314b1b194cc8e2c4f7019c62c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3COTE7S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BtektoNwlau6oDZSE2nj8HSpKZHJ9UAmp6JgHHbx%2BjQIhANA7h0E8iWSyVk6OQ0UHvOflcixabN3QQPz61C%2B7vR8XKv8DCFIQABoMNjM3NDIzMTgzODA1IgxcZn0XKwCsMVNFTW4q3AOFIu%2FLAZn4DupPFhd9Cs8SPY9hVLULyBHv5UhsPBVSXZmiXLR%2Fn5DoF8zV6CMUfRAsEJaHIik6iFUQMEU3ymTafpZtII16iPhN1floUXwVUcd8h%2Fpzn5jWWqmWeZoVLRgTjlbTQp78iNR%2Fb1GCcb31ih2qr4EiuT2wW946U2AvjxxIzqdyM1ZttUmH0GTKLj3IGSjYxzRXyPalrhhGBsU55j4TeOgrjT3fOk1e3zOthvpQ4R%2BYgcAVly6syz2Ka0ykgV8gj%2Bch9fy7BJ811F0w%2BkQhPV%2BdkOBC6%2Fw1dRFn5vIUleTmAndJIKuNUuyb9J2mVNndfdJ1PqZMOaCMiGRHCz5mzBB1Z0Lx2yEaP1k8IcXDVMGdWmlc5sY7KvxRAfr%2BtAxqefH2Xcn2HYMiyQk4xyJKrwriRkLzem4kEaksebY89DBHiIyjYgvHbwdvi6SMEe5TnJlAJ1iCD6hsJOS8bXLGOwCjZXC3wsFdqlJesLpG0%2Fo1vGjaR6XQ3M%2Bj486xxXtTmO3A9OEkbJcjCEpLRGkmwaQjh4t6g4FVIbh1QrN4DqFw1f7hl45MivAmrXX6nE0FnmUZEeOGQzsXD5QD7dxU%2FOcahnMUw5UA6PHSO%2Bjnnfx3jmLQf5%2FVvjCal9TBBjqkAZ8EcvGoaIT3yQaKVYCHSyNCAiJi5JQDwXpjVN62WiO4FozhXJ8BggLQJHy5Vq1IgM7VkgwfoMVexAcayzvkGGv2SHJ8vukDvmTtZN4ozc2N8aUFMX0d1Dm%2B%2FpFvttVvZPlqR%2FdeymrO8mI%2Fvu%2B27gBjhS3sotjmLqRrIrwmnigr5XgVSXCqCAfDD7HDbc7ZqmW2tyoB3d7zWdEQbqwi2hHArZ0u&X-Amz-Signature=77c641c8552ae45ebf0a455fa7cccdf26ec50482cbb7b4d20a682e48a1c7eeb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3COTE7S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BtektoNwlau6oDZSE2nj8HSpKZHJ9UAmp6JgHHbx%2BjQIhANA7h0E8iWSyVk6OQ0UHvOflcixabN3QQPz61C%2B7vR8XKv8DCFIQABoMNjM3NDIzMTgzODA1IgxcZn0XKwCsMVNFTW4q3AOFIu%2FLAZn4DupPFhd9Cs8SPY9hVLULyBHv5UhsPBVSXZmiXLR%2Fn5DoF8zV6CMUfRAsEJaHIik6iFUQMEU3ymTafpZtII16iPhN1floUXwVUcd8h%2Fpzn5jWWqmWeZoVLRgTjlbTQp78iNR%2Fb1GCcb31ih2qr4EiuT2wW946U2AvjxxIzqdyM1ZttUmH0GTKLj3IGSjYxzRXyPalrhhGBsU55j4TeOgrjT3fOk1e3zOthvpQ4R%2BYgcAVly6syz2Ka0ykgV8gj%2Bch9fy7BJ811F0w%2BkQhPV%2BdkOBC6%2Fw1dRFn5vIUleTmAndJIKuNUuyb9J2mVNndfdJ1PqZMOaCMiGRHCz5mzBB1Z0Lx2yEaP1k8IcXDVMGdWmlc5sY7KvxRAfr%2BtAxqefH2Xcn2HYMiyQk4xyJKrwriRkLzem4kEaksebY89DBHiIyjYgvHbwdvi6SMEe5TnJlAJ1iCD6hsJOS8bXLGOwCjZXC3wsFdqlJesLpG0%2Fo1vGjaR6XQ3M%2Bj486xxXtTmO3A9OEkbJcjCEpLRGkmwaQjh4t6g4FVIbh1QrN4DqFw1f7hl45MivAmrXX6nE0FnmUZEeOGQzsXD5QD7dxU%2FOcahnMUw5UA6PHSO%2Bjnnfx3jmLQf5%2FVvjCal9TBBjqkAZ8EcvGoaIT3yQaKVYCHSyNCAiJi5JQDwXpjVN62WiO4FozhXJ8BggLQJHy5Vq1IgM7VkgwfoMVexAcayzvkGGv2SHJ8vukDvmTtZN4ozc2N8aUFMX0d1Dm%2B%2FpFvttVvZPlqR%2FdeymrO8mI%2Fvu%2B27gBjhS3sotjmLqRrIrwmnigr5XgVSXCqCAfDD7HDbc7ZqmW2tyoB3d7zWdEQbqwi2hHArZ0u&X-Amz-Signature=c89e84303be287f9c30cb3bde962422ba3a64fbc98729b79868c0948798db0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

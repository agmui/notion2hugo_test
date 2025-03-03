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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOXKXFF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALsRbrLBzyFnmTemQ3BXDFWCex%2FosjmAgtB7ejZyk4dAiBkbTrU0SZGretJIlL6AuDic%2BqD3EpBxZt8H5XR1a9NOyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORI%2BMglRyqFFzb%2BfKtwDTl0VeOroVigR4%2BkILvF85YLZ9n%2F%2FQtQ%2FwjiDq3Rd%2FLzuqWK%2FmvFsYYO%2FLYUG2fVOz0JVYTnxxlP1QrR9aL70A337HO1B%2B8ys2k4AJI711Cfr3K%2BHBlPSwp0WpWxY%2B7wbnS4ipYfaysSGkKcjEzQ9uZph%2B0z3CIPxHAhcqncNNMpvgwI6ej5qs532wpSz2Lu9FB1mampP%2FHIF%2Fu2hyVc%2Bby%2Fos37Hrczv%2BhM%2FDPqFKjrGbgdGK32xrdZ0dOjgwFaJNdFvPX2Ppi68hSlc6PDBX6d%2B3jYJh5QO2ZxCoBjccYyMNlRPxxqIUBM6GQavCEB%2BNabVIwcUIMyRyO79%2B5TtRpKhpZqCO00DfUg%2BALxR4KMh%2BUh5V4BrXu%2FnUMXxIN50BeVk2SjV9T0fHjmqkZ8TuhwewvZZgGfTC65QkKWUgfppfl9tV2AGBqFJgHkebSOsqab0MQG5iuEeep84EsrwtUqBsds4kfo%2ByGt8atXjGl8HozhV%2BWPD09rwy%2BCXbtceq%2FwJMkJ2f19%2BFq1H7rEBK2sJ2bnzi4f63bNyB5D68WtbHxL6Fnnoas%2Fzl1BanlNFdq4KRBb0O1PccPK91qUdrqxqImICzBd0PENVaWjOyGm3WhwHX5M71V9NBYgwqbuWvgY6pgEpPzqUlj%2BUuzorgl4qf0DBivj3h9xDhOkfv%2FE630Jwq%2FRTnnfuspSPq9PnzmI5cQT5ZYeqGA1Nr4wjemRTzxRGO%2FXA%2F%2Bhvjf%2FelkHAQN3yysciWMZX6z%2FKmkgh12Iby58pAKuLv4vau3QtKCairu3qJEXoyyQZu%2B0pnY9nUGh2iyCB1oa8ezM13RABwv9qDcJdZ6SeBgAgtZeBJBaPaf%2BIJDTNmVrJ&X-Amz-Signature=df0221f23b7d825547dd96a0fd1c12a692092fcf5b3768ef7268b69e8e240e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOXKXFF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALsRbrLBzyFnmTemQ3BXDFWCex%2FosjmAgtB7ejZyk4dAiBkbTrU0SZGretJIlL6AuDic%2BqD3EpBxZt8H5XR1a9NOyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORI%2BMglRyqFFzb%2BfKtwDTl0VeOroVigR4%2BkILvF85YLZ9n%2F%2FQtQ%2FwjiDq3Rd%2FLzuqWK%2FmvFsYYO%2FLYUG2fVOz0JVYTnxxlP1QrR9aL70A337HO1B%2B8ys2k4AJI711Cfr3K%2BHBlPSwp0WpWxY%2B7wbnS4ipYfaysSGkKcjEzQ9uZph%2B0z3CIPxHAhcqncNNMpvgwI6ej5qs532wpSz2Lu9FB1mampP%2FHIF%2Fu2hyVc%2Bby%2Fos37Hrczv%2BhM%2FDPqFKjrGbgdGK32xrdZ0dOjgwFaJNdFvPX2Ppi68hSlc6PDBX6d%2B3jYJh5QO2ZxCoBjccYyMNlRPxxqIUBM6GQavCEB%2BNabVIwcUIMyRyO79%2B5TtRpKhpZqCO00DfUg%2BALxR4KMh%2BUh5V4BrXu%2FnUMXxIN50BeVk2SjV9T0fHjmqkZ8TuhwewvZZgGfTC65QkKWUgfppfl9tV2AGBqFJgHkebSOsqab0MQG5iuEeep84EsrwtUqBsds4kfo%2ByGt8atXjGl8HozhV%2BWPD09rwy%2BCXbtceq%2FwJMkJ2f19%2BFq1H7rEBK2sJ2bnzi4f63bNyB5D68WtbHxL6Fnnoas%2Fzl1BanlNFdq4KRBb0O1PccPK91qUdrqxqImICzBd0PENVaWjOyGm3WhwHX5M71V9NBYgwqbuWvgY6pgEpPzqUlj%2BUuzorgl4qf0DBivj3h9xDhOkfv%2FE630Jwq%2FRTnnfuspSPq9PnzmI5cQT5ZYeqGA1Nr4wjemRTzxRGO%2FXA%2F%2Bhvjf%2FelkHAQN3yysciWMZX6z%2FKmkgh12Iby58pAKuLv4vau3QtKCairu3qJEXoyyQZu%2B0pnY9nUGh2iyCB1oa8ezM13RABwv9qDcJdZ6SeBgAgtZeBJBaPaf%2BIJDTNmVrJ&X-Amz-Signature=5491d0459f26f1e6f54318a959cc2f57fb3ca5f874a4bfdee1e2fe8566ef0cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOXKXFF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALsRbrLBzyFnmTemQ3BXDFWCex%2FosjmAgtB7ejZyk4dAiBkbTrU0SZGretJIlL6AuDic%2BqD3EpBxZt8H5XR1a9NOyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORI%2BMglRyqFFzb%2BfKtwDTl0VeOroVigR4%2BkILvF85YLZ9n%2F%2FQtQ%2FwjiDq3Rd%2FLzuqWK%2FmvFsYYO%2FLYUG2fVOz0JVYTnxxlP1QrR9aL70A337HO1B%2B8ys2k4AJI711Cfr3K%2BHBlPSwp0WpWxY%2B7wbnS4ipYfaysSGkKcjEzQ9uZph%2B0z3CIPxHAhcqncNNMpvgwI6ej5qs532wpSz2Lu9FB1mampP%2FHIF%2Fu2hyVc%2Bby%2Fos37Hrczv%2BhM%2FDPqFKjrGbgdGK32xrdZ0dOjgwFaJNdFvPX2Ppi68hSlc6PDBX6d%2B3jYJh5QO2ZxCoBjccYyMNlRPxxqIUBM6GQavCEB%2BNabVIwcUIMyRyO79%2B5TtRpKhpZqCO00DfUg%2BALxR4KMh%2BUh5V4BrXu%2FnUMXxIN50BeVk2SjV9T0fHjmqkZ8TuhwewvZZgGfTC65QkKWUgfppfl9tV2AGBqFJgHkebSOsqab0MQG5iuEeep84EsrwtUqBsds4kfo%2ByGt8atXjGl8HozhV%2BWPD09rwy%2BCXbtceq%2FwJMkJ2f19%2BFq1H7rEBK2sJ2bnzi4f63bNyB5D68WtbHxL6Fnnoas%2Fzl1BanlNFdq4KRBb0O1PccPK91qUdrqxqImICzBd0PENVaWjOyGm3WhwHX5M71V9NBYgwqbuWvgY6pgEpPzqUlj%2BUuzorgl4qf0DBivj3h9xDhOkfv%2FE630Jwq%2FRTnnfuspSPq9PnzmI5cQT5ZYeqGA1Nr4wjemRTzxRGO%2FXA%2F%2Bhvjf%2FelkHAQN3yysciWMZX6z%2FKmkgh12Iby58pAKuLv4vau3QtKCairu3qJEXoyyQZu%2B0pnY9nUGh2iyCB1oa8ezM13RABwv9qDcJdZ6SeBgAgtZeBJBaPaf%2BIJDTNmVrJ&X-Amz-Signature=524281593adaeed9c2a57a74fe05b782fa8695f7cacce38868802521ee90867e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOXKXFF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALsRbrLBzyFnmTemQ3BXDFWCex%2FosjmAgtB7ejZyk4dAiBkbTrU0SZGretJIlL6AuDic%2BqD3EpBxZt8H5XR1a9NOyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORI%2BMglRyqFFzb%2BfKtwDTl0VeOroVigR4%2BkILvF85YLZ9n%2F%2FQtQ%2FwjiDq3Rd%2FLzuqWK%2FmvFsYYO%2FLYUG2fVOz0JVYTnxxlP1QrR9aL70A337HO1B%2B8ys2k4AJI711Cfr3K%2BHBlPSwp0WpWxY%2B7wbnS4ipYfaysSGkKcjEzQ9uZph%2B0z3CIPxHAhcqncNNMpvgwI6ej5qs532wpSz2Lu9FB1mampP%2FHIF%2Fu2hyVc%2Bby%2Fos37Hrczv%2BhM%2FDPqFKjrGbgdGK32xrdZ0dOjgwFaJNdFvPX2Ppi68hSlc6PDBX6d%2B3jYJh5QO2ZxCoBjccYyMNlRPxxqIUBM6GQavCEB%2BNabVIwcUIMyRyO79%2B5TtRpKhpZqCO00DfUg%2BALxR4KMh%2BUh5V4BrXu%2FnUMXxIN50BeVk2SjV9T0fHjmqkZ8TuhwewvZZgGfTC65QkKWUgfppfl9tV2AGBqFJgHkebSOsqab0MQG5iuEeep84EsrwtUqBsds4kfo%2ByGt8atXjGl8HozhV%2BWPD09rwy%2BCXbtceq%2FwJMkJ2f19%2BFq1H7rEBK2sJ2bnzi4f63bNyB5D68WtbHxL6Fnnoas%2Fzl1BanlNFdq4KRBb0O1PccPK91qUdrqxqImICzBd0PENVaWjOyGm3WhwHX5M71V9NBYgwqbuWvgY6pgEpPzqUlj%2BUuzorgl4qf0DBivj3h9xDhOkfv%2FE630Jwq%2FRTnnfuspSPq9PnzmI5cQT5ZYeqGA1Nr4wjemRTzxRGO%2FXA%2F%2Bhvjf%2FelkHAQN3yysciWMZX6z%2FKmkgh12Iby58pAKuLv4vau3QtKCairu3qJEXoyyQZu%2B0pnY9nUGh2iyCB1oa8ezM13RABwv9qDcJdZ6SeBgAgtZeBJBaPaf%2BIJDTNmVrJ&X-Amz-Signature=b395bdc0405424d1e3b7cc4d7a14073d72f0ae20a2a5782b73ab16c45e1d967e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOXKXFF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALsRbrLBzyFnmTemQ3BXDFWCex%2FosjmAgtB7ejZyk4dAiBkbTrU0SZGretJIlL6AuDic%2BqD3EpBxZt8H5XR1a9NOyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORI%2BMglRyqFFzb%2BfKtwDTl0VeOroVigR4%2BkILvF85YLZ9n%2F%2FQtQ%2FwjiDq3Rd%2FLzuqWK%2FmvFsYYO%2FLYUG2fVOz0JVYTnxxlP1QrR9aL70A337HO1B%2B8ys2k4AJI711Cfr3K%2BHBlPSwp0WpWxY%2B7wbnS4ipYfaysSGkKcjEzQ9uZph%2B0z3CIPxHAhcqncNNMpvgwI6ej5qs532wpSz2Lu9FB1mampP%2FHIF%2Fu2hyVc%2Bby%2Fos37Hrczv%2BhM%2FDPqFKjrGbgdGK32xrdZ0dOjgwFaJNdFvPX2Ppi68hSlc6PDBX6d%2B3jYJh5QO2ZxCoBjccYyMNlRPxxqIUBM6GQavCEB%2BNabVIwcUIMyRyO79%2B5TtRpKhpZqCO00DfUg%2BALxR4KMh%2BUh5V4BrXu%2FnUMXxIN50BeVk2SjV9T0fHjmqkZ8TuhwewvZZgGfTC65QkKWUgfppfl9tV2AGBqFJgHkebSOsqab0MQG5iuEeep84EsrwtUqBsds4kfo%2ByGt8atXjGl8HozhV%2BWPD09rwy%2BCXbtceq%2FwJMkJ2f19%2BFq1H7rEBK2sJ2bnzi4f63bNyB5D68WtbHxL6Fnnoas%2Fzl1BanlNFdq4KRBb0O1PccPK91qUdrqxqImICzBd0PENVaWjOyGm3WhwHX5M71V9NBYgwqbuWvgY6pgEpPzqUlj%2BUuzorgl4qf0DBivj3h9xDhOkfv%2FE630Jwq%2FRTnnfuspSPq9PnzmI5cQT5ZYeqGA1Nr4wjemRTzxRGO%2FXA%2F%2Bhvjf%2FelkHAQN3yysciWMZX6z%2FKmkgh12Iby58pAKuLv4vau3QtKCairu3qJEXoyyQZu%2B0pnY9nUGh2iyCB1oa8ezM13RABwv9qDcJdZ6SeBgAgtZeBJBaPaf%2BIJDTNmVrJ&X-Amz-Signature=f877be78beae40fea8bbc0c947fd68d2103372de9a09f459318a3e9893dd0ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOXKXFF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALsRbrLBzyFnmTemQ3BXDFWCex%2FosjmAgtB7ejZyk4dAiBkbTrU0SZGretJIlL6AuDic%2BqD3EpBxZt8H5XR1a9NOyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORI%2BMglRyqFFzb%2BfKtwDTl0VeOroVigR4%2BkILvF85YLZ9n%2F%2FQtQ%2FwjiDq3Rd%2FLzuqWK%2FmvFsYYO%2FLYUG2fVOz0JVYTnxxlP1QrR9aL70A337HO1B%2B8ys2k4AJI711Cfr3K%2BHBlPSwp0WpWxY%2B7wbnS4ipYfaysSGkKcjEzQ9uZph%2B0z3CIPxHAhcqncNNMpvgwI6ej5qs532wpSz2Lu9FB1mampP%2FHIF%2Fu2hyVc%2Bby%2Fos37Hrczv%2BhM%2FDPqFKjrGbgdGK32xrdZ0dOjgwFaJNdFvPX2Ppi68hSlc6PDBX6d%2B3jYJh5QO2ZxCoBjccYyMNlRPxxqIUBM6GQavCEB%2BNabVIwcUIMyRyO79%2B5TtRpKhpZqCO00DfUg%2BALxR4KMh%2BUh5V4BrXu%2FnUMXxIN50BeVk2SjV9T0fHjmqkZ8TuhwewvZZgGfTC65QkKWUgfppfl9tV2AGBqFJgHkebSOsqab0MQG5iuEeep84EsrwtUqBsds4kfo%2ByGt8atXjGl8HozhV%2BWPD09rwy%2BCXbtceq%2FwJMkJ2f19%2BFq1H7rEBK2sJ2bnzi4f63bNyB5D68WtbHxL6Fnnoas%2Fzl1BanlNFdq4KRBb0O1PccPK91qUdrqxqImICzBd0PENVaWjOyGm3WhwHX5M71V9NBYgwqbuWvgY6pgEpPzqUlj%2BUuzorgl4qf0DBivj3h9xDhOkfv%2FE630Jwq%2FRTnnfuspSPq9PnzmI5cQT5ZYeqGA1Nr4wjemRTzxRGO%2FXA%2F%2Bhvjf%2FelkHAQN3yysciWMZX6z%2FKmkgh12Iby58pAKuLv4vau3QtKCairu3qJEXoyyQZu%2B0pnY9nUGh2iyCB1oa8ezM13RABwv9qDcJdZ6SeBgAgtZeBJBaPaf%2BIJDTNmVrJ&X-Amz-Signature=3992d4020c05f13285f0f028f88149f0cd31e38af260fcaf2711aea99bfb1270&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOXKXFF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALsRbrLBzyFnmTemQ3BXDFWCex%2FosjmAgtB7ejZyk4dAiBkbTrU0SZGretJIlL6AuDic%2BqD3EpBxZt8H5XR1a9NOyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORI%2BMglRyqFFzb%2BfKtwDTl0VeOroVigR4%2BkILvF85YLZ9n%2F%2FQtQ%2FwjiDq3Rd%2FLzuqWK%2FmvFsYYO%2FLYUG2fVOz0JVYTnxxlP1QrR9aL70A337HO1B%2B8ys2k4AJI711Cfr3K%2BHBlPSwp0WpWxY%2B7wbnS4ipYfaysSGkKcjEzQ9uZph%2B0z3CIPxHAhcqncNNMpvgwI6ej5qs532wpSz2Lu9FB1mampP%2FHIF%2Fu2hyVc%2Bby%2Fos37Hrczv%2BhM%2FDPqFKjrGbgdGK32xrdZ0dOjgwFaJNdFvPX2Ppi68hSlc6PDBX6d%2B3jYJh5QO2ZxCoBjccYyMNlRPxxqIUBM6GQavCEB%2BNabVIwcUIMyRyO79%2B5TtRpKhpZqCO00DfUg%2BALxR4KMh%2BUh5V4BrXu%2FnUMXxIN50BeVk2SjV9T0fHjmqkZ8TuhwewvZZgGfTC65QkKWUgfppfl9tV2AGBqFJgHkebSOsqab0MQG5iuEeep84EsrwtUqBsds4kfo%2ByGt8atXjGl8HozhV%2BWPD09rwy%2BCXbtceq%2FwJMkJ2f19%2BFq1H7rEBK2sJ2bnzi4f63bNyB5D68WtbHxL6Fnnoas%2Fzl1BanlNFdq4KRBb0O1PccPK91qUdrqxqImICzBd0PENVaWjOyGm3WhwHX5M71V9NBYgwqbuWvgY6pgEpPzqUlj%2BUuzorgl4qf0DBivj3h9xDhOkfv%2FE630Jwq%2FRTnnfuspSPq9PnzmI5cQT5ZYeqGA1Nr4wjemRTzxRGO%2FXA%2F%2Bhvjf%2FelkHAQN3yysciWMZX6z%2FKmkgh12Iby58pAKuLv4vau3QtKCairu3qJEXoyyQZu%2B0pnY9nUGh2iyCB1oa8ezM13RABwv9qDcJdZ6SeBgAgtZeBJBaPaf%2BIJDTNmVrJ&X-Amz-Signature=203d6f02d89367cbea3a2bdd3dda6aea9b8620c0536ad43301a762280d91fa1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOXKXFF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALsRbrLBzyFnmTemQ3BXDFWCex%2FosjmAgtB7ejZyk4dAiBkbTrU0SZGretJIlL6AuDic%2BqD3EpBxZt8H5XR1a9NOyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORI%2BMglRyqFFzb%2BfKtwDTl0VeOroVigR4%2BkILvF85YLZ9n%2F%2FQtQ%2FwjiDq3Rd%2FLzuqWK%2FmvFsYYO%2FLYUG2fVOz0JVYTnxxlP1QrR9aL70A337HO1B%2B8ys2k4AJI711Cfr3K%2BHBlPSwp0WpWxY%2B7wbnS4ipYfaysSGkKcjEzQ9uZph%2B0z3CIPxHAhcqncNNMpvgwI6ej5qs532wpSz2Lu9FB1mampP%2FHIF%2Fu2hyVc%2Bby%2Fos37Hrczv%2BhM%2FDPqFKjrGbgdGK32xrdZ0dOjgwFaJNdFvPX2Ppi68hSlc6PDBX6d%2B3jYJh5QO2ZxCoBjccYyMNlRPxxqIUBM6GQavCEB%2BNabVIwcUIMyRyO79%2B5TtRpKhpZqCO00DfUg%2BALxR4KMh%2BUh5V4BrXu%2FnUMXxIN50BeVk2SjV9T0fHjmqkZ8TuhwewvZZgGfTC65QkKWUgfppfl9tV2AGBqFJgHkebSOsqab0MQG5iuEeep84EsrwtUqBsds4kfo%2ByGt8atXjGl8HozhV%2BWPD09rwy%2BCXbtceq%2FwJMkJ2f19%2BFq1H7rEBK2sJ2bnzi4f63bNyB5D68WtbHxL6Fnnoas%2Fzl1BanlNFdq4KRBb0O1PccPK91qUdrqxqImICzBd0PENVaWjOyGm3WhwHX5M71V9NBYgwqbuWvgY6pgEpPzqUlj%2BUuzorgl4qf0DBivj3h9xDhOkfv%2FE630Jwq%2FRTnnfuspSPq9PnzmI5cQT5ZYeqGA1Nr4wjemRTzxRGO%2FXA%2F%2Bhvjf%2FelkHAQN3yysciWMZX6z%2FKmkgh12Iby58pAKuLv4vau3QtKCairu3qJEXoyyQZu%2B0pnY9nUGh2iyCB1oa8ezM13RABwv9qDcJdZ6SeBgAgtZeBJBaPaf%2BIJDTNmVrJ&X-Amz-Signature=d3f470961b759afdc9638fce654556f5bca442920dd2696d1b66f99981aa34f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

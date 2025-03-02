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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC2YFLF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAijj3y3q%2B2%2F5He6EG2e0zYqjTRsp8a3muCCD%2Bs3NSgyAiBGAmmHqDZw5SyZXmw2Mw13f0Z0O1Z4usa%2FKq2SNeamWCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrTiY0R%2BexDItbUmlKtwDQBFjKJgqCAcvzIO8jdVBcPab5IYkdr%2BpiGoIMf3QQD9mNUd12%2BpdNcmcolZDjz%2BakBSe5vlCGkEfQKGzyCpD%2B97LETsRoIOnyJPErCNIl3PPjFCNYF3nvMZF8hXzk3dyqun26OaFHue2FzdbRarbQ%2B%2F0Eal0yoZjNc6PPGH%2BKzMsCRtc4dC3nlWpIFKjQCWB%2FjyhSlZrRXFvedoJRVEuzZ1StvdCrAvLU4JgCjh1KWT%2BD4k86eFlqKuuKlDgjmCbbiY43DBmWWK5LeFBBQjI6UD9PP9cPaA4hHlfGvwoCBE%2BnaXbGoNcJfGbEKLAa5cLcpzfQCAu4FuT7IQoCEfIHQvYzP4OAaRRUQp964V4J3CbMo%2FGSKzUBUuAccllyLCXw4fQ%2FbkKcp%2BfBNvxXG43%2FDSXyDzhBmQ9zEou92WdMicFUG8ZBKW4a6hJ2iots206TfmBgs%2BNP9bnkKyyOwUwYFn%2Bvcj53VWbNTChTuly0kZ4SloPBEc7fvGvqgBrFurB7C59O%2F1ahVZDS5Vp8F2%2FzQngHoZwY25bSvqLTp5U0XF2mTdukUGrKrnnsYL7uE9zp%2F1cVBFDmjeNTF05%2F59E6fEvjTFZH%2FPFWM%2BdL%2BV9MAitEwHm%2FW72p8x%2BNV0wlPyQvgY6pgFsBmMMShvrM7PZHCudKCgQIhAqskgJfkOjFXdE8S3bQm9IuB%2Bg4ZwJXj3hyYF8e7rYdmuXMULyzh4UTfdLMHO4P6Nx%2B64A0WoDlaZyAb%2FfNQOWJJFuet%2BWCwSj6XJkeuz89NHOrDn0fJ2yjDxOAK08EBU8vyfx8TOhnVOlgwsvT3NZuK1lYvbWIwQ%2FJd7hYVXPf2%2BYR%2FafmPcU%2BVtv5ETQPJCB2cby&X-Amz-Signature=123d74cbceae3f4edb4ff8e67652735e386d5a515949969fd62041b23aed67ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC2YFLF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAijj3y3q%2B2%2F5He6EG2e0zYqjTRsp8a3muCCD%2Bs3NSgyAiBGAmmHqDZw5SyZXmw2Mw13f0Z0O1Z4usa%2FKq2SNeamWCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrTiY0R%2BexDItbUmlKtwDQBFjKJgqCAcvzIO8jdVBcPab5IYkdr%2BpiGoIMf3QQD9mNUd12%2BpdNcmcolZDjz%2BakBSe5vlCGkEfQKGzyCpD%2B97LETsRoIOnyJPErCNIl3PPjFCNYF3nvMZF8hXzk3dyqun26OaFHue2FzdbRarbQ%2B%2F0Eal0yoZjNc6PPGH%2BKzMsCRtc4dC3nlWpIFKjQCWB%2FjyhSlZrRXFvedoJRVEuzZ1StvdCrAvLU4JgCjh1KWT%2BD4k86eFlqKuuKlDgjmCbbiY43DBmWWK5LeFBBQjI6UD9PP9cPaA4hHlfGvwoCBE%2BnaXbGoNcJfGbEKLAa5cLcpzfQCAu4FuT7IQoCEfIHQvYzP4OAaRRUQp964V4J3CbMo%2FGSKzUBUuAccllyLCXw4fQ%2FbkKcp%2BfBNvxXG43%2FDSXyDzhBmQ9zEou92WdMicFUG8ZBKW4a6hJ2iots206TfmBgs%2BNP9bnkKyyOwUwYFn%2Bvcj53VWbNTChTuly0kZ4SloPBEc7fvGvqgBrFurB7C59O%2F1ahVZDS5Vp8F2%2FzQngHoZwY25bSvqLTp5U0XF2mTdukUGrKrnnsYL7uE9zp%2F1cVBFDmjeNTF05%2F59E6fEvjTFZH%2FPFWM%2BdL%2BV9MAitEwHm%2FW72p8x%2BNV0wlPyQvgY6pgFsBmMMShvrM7PZHCudKCgQIhAqskgJfkOjFXdE8S3bQm9IuB%2Bg4ZwJXj3hyYF8e7rYdmuXMULyzh4UTfdLMHO4P6Nx%2B64A0WoDlaZyAb%2FfNQOWJJFuet%2BWCwSj6XJkeuz89NHOrDn0fJ2yjDxOAK08EBU8vyfx8TOhnVOlgwsvT3NZuK1lYvbWIwQ%2FJd7hYVXPf2%2BYR%2FafmPcU%2BVtv5ETQPJCB2cby&X-Amz-Signature=96f64b1a95ed10e2cc3b4c50be5098cd1bcac1cacd94dbe9989084eb990c8c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC2YFLF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAijj3y3q%2B2%2F5He6EG2e0zYqjTRsp8a3muCCD%2Bs3NSgyAiBGAmmHqDZw5SyZXmw2Mw13f0Z0O1Z4usa%2FKq2SNeamWCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrTiY0R%2BexDItbUmlKtwDQBFjKJgqCAcvzIO8jdVBcPab5IYkdr%2BpiGoIMf3QQD9mNUd12%2BpdNcmcolZDjz%2BakBSe5vlCGkEfQKGzyCpD%2B97LETsRoIOnyJPErCNIl3PPjFCNYF3nvMZF8hXzk3dyqun26OaFHue2FzdbRarbQ%2B%2F0Eal0yoZjNc6PPGH%2BKzMsCRtc4dC3nlWpIFKjQCWB%2FjyhSlZrRXFvedoJRVEuzZ1StvdCrAvLU4JgCjh1KWT%2BD4k86eFlqKuuKlDgjmCbbiY43DBmWWK5LeFBBQjI6UD9PP9cPaA4hHlfGvwoCBE%2BnaXbGoNcJfGbEKLAa5cLcpzfQCAu4FuT7IQoCEfIHQvYzP4OAaRRUQp964V4J3CbMo%2FGSKzUBUuAccllyLCXw4fQ%2FbkKcp%2BfBNvxXG43%2FDSXyDzhBmQ9zEou92WdMicFUG8ZBKW4a6hJ2iots206TfmBgs%2BNP9bnkKyyOwUwYFn%2Bvcj53VWbNTChTuly0kZ4SloPBEc7fvGvqgBrFurB7C59O%2F1ahVZDS5Vp8F2%2FzQngHoZwY25bSvqLTp5U0XF2mTdukUGrKrnnsYL7uE9zp%2F1cVBFDmjeNTF05%2F59E6fEvjTFZH%2FPFWM%2BdL%2BV9MAitEwHm%2FW72p8x%2BNV0wlPyQvgY6pgFsBmMMShvrM7PZHCudKCgQIhAqskgJfkOjFXdE8S3bQm9IuB%2Bg4ZwJXj3hyYF8e7rYdmuXMULyzh4UTfdLMHO4P6Nx%2B64A0WoDlaZyAb%2FfNQOWJJFuet%2BWCwSj6XJkeuz89NHOrDn0fJ2yjDxOAK08EBU8vyfx8TOhnVOlgwsvT3NZuK1lYvbWIwQ%2FJd7hYVXPf2%2BYR%2FafmPcU%2BVtv5ETQPJCB2cby&X-Amz-Signature=b481df830315fe6321aeb7611f8d0c951998d5357f1aee707440b86e9021dff6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC2YFLF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAijj3y3q%2B2%2F5He6EG2e0zYqjTRsp8a3muCCD%2Bs3NSgyAiBGAmmHqDZw5SyZXmw2Mw13f0Z0O1Z4usa%2FKq2SNeamWCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrTiY0R%2BexDItbUmlKtwDQBFjKJgqCAcvzIO8jdVBcPab5IYkdr%2BpiGoIMf3QQD9mNUd12%2BpdNcmcolZDjz%2BakBSe5vlCGkEfQKGzyCpD%2B97LETsRoIOnyJPErCNIl3PPjFCNYF3nvMZF8hXzk3dyqun26OaFHue2FzdbRarbQ%2B%2F0Eal0yoZjNc6PPGH%2BKzMsCRtc4dC3nlWpIFKjQCWB%2FjyhSlZrRXFvedoJRVEuzZ1StvdCrAvLU4JgCjh1KWT%2BD4k86eFlqKuuKlDgjmCbbiY43DBmWWK5LeFBBQjI6UD9PP9cPaA4hHlfGvwoCBE%2BnaXbGoNcJfGbEKLAa5cLcpzfQCAu4FuT7IQoCEfIHQvYzP4OAaRRUQp964V4J3CbMo%2FGSKzUBUuAccllyLCXw4fQ%2FbkKcp%2BfBNvxXG43%2FDSXyDzhBmQ9zEou92WdMicFUG8ZBKW4a6hJ2iots206TfmBgs%2BNP9bnkKyyOwUwYFn%2Bvcj53VWbNTChTuly0kZ4SloPBEc7fvGvqgBrFurB7C59O%2F1ahVZDS5Vp8F2%2FzQngHoZwY25bSvqLTp5U0XF2mTdukUGrKrnnsYL7uE9zp%2F1cVBFDmjeNTF05%2F59E6fEvjTFZH%2FPFWM%2BdL%2BV9MAitEwHm%2FW72p8x%2BNV0wlPyQvgY6pgFsBmMMShvrM7PZHCudKCgQIhAqskgJfkOjFXdE8S3bQm9IuB%2Bg4ZwJXj3hyYF8e7rYdmuXMULyzh4UTfdLMHO4P6Nx%2B64A0WoDlaZyAb%2FfNQOWJJFuet%2BWCwSj6XJkeuz89NHOrDn0fJ2yjDxOAK08EBU8vyfx8TOhnVOlgwsvT3NZuK1lYvbWIwQ%2FJd7hYVXPf2%2BYR%2FafmPcU%2BVtv5ETQPJCB2cby&X-Amz-Signature=db1d859ca1d45727912a3073c2dafbc20c454248985748ab29b2f9e127275204&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC2YFLF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAijj3y3q%2B2%2F5He6EG2e0zYqjTRsp8a3muCCD%2Bs3NSgyAiBGAmmHqDZw5SyZXmw2Mw13f0Z0O1Z4usa%2FKq2SNeamWCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrTiY0R%2BexDItbUmlKtwDQBFjKJgqCAcvzIO8jdVBcPab5IYkdr%2BpiGoIMf3QQD9mNUd12%2BpdNcmcolZDjz%2BakBSe5vlCGkEfQKGzyCpD%2B97LETsRoIOnyJPErCNIl3PPjFCNYF3nvMZF8hXzk3dyqun26OaFHue2FzdbRarbQ%2B%2F0Eal0yoZjNc6PPGH%2BKzMsCRtc4dC3nlWpIFKjQCWB%2FjyhSlZrRXFvedoJRVEuzZ1StvdCrAvLU4JgCjh1KWT%2BD4k86eFlqKuuKlDgjmCbbiY43DBmWWK5LeFBBQjI6UD9PP9cPaA4hHlfGvwoCBE%2BnaXbGoNcJfGbEKLAa5cLcpzfQCAu4FuT7IQoCEfIHQvYzP4OAaRRUQp964V4J3CbMo%2FGSKzUBUuAccllyLCXw4fQ%2FbkKcp%2BfBNvxXG43%2FDSXyDzhBmQ9zEou92WdMicFUG8ZBKW4a6hJ2iots206TfmBgs%2BNP9bnkKyyOwUwYFn%2Bvcj53VWbNTChTuly0kZ4SloPBEc7fvGvqgBrFurB7C59O%2F1ahVZDS5Vp8F2%2FzQngHoZwY25bSvqLTp5U0XF2mTdukUGrKrnnsYL7uE9zp%2F1cVBFDmjeNTF05%2F59E6fEvjTFZH%2FPFWM%2BdL%2BV9MAitEwHm%2FW72p8x%2BNV0wlPyQvgY6pgFsBmMMShvrM7PZHCudKCgQIhAqskgJfkOjFXdE8S3bQm9IuB%2Bg4ZwJXj3hyYF8e7rYdmuXMULyzh4UTfdLMHO4P6Nx%2B64A0WoDlaZyAb%2FfNQOWJJFuet%2BWCwSj6XJkeuz89NHOrDn0fJ2yjDxOAK08EBU8vyfx8TOhnVOlgwsvT3NZuK1lYvbWIwQ%2FJd7hYVXPf2%2BYR%2FafmPcU%2BVtv5ETQPJCB2cby&X-Amz-Signature=46536db287f29975e46cadaa9af9057a7996e0ed4f72fb253032776a69983d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC2YFLF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAijj3y3q%2B2%2F5He6EG2e0zYqjTRsp8a3muCCD%2Bs3NSgyAiBGAmmHqDZw5SyZXmw2Mw13f0Z0O1Z4usa%2FKq2SNeamWCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrTiY0R%2BexDItbUmlKtwDQBFjKJgqCAcvzIO8jdVBcPab5IYkdr%2BpiGoIMf3QQD9mNUd12%2BpdNcmcolZDjz%2BakBSe5vlCGkEfQKGzyCpD%2B97LETsRoIOnyJPErCNIl3PPjFCNYF3nvMZF8hXzk3dyqun26OaFHue2FzdbRarbQ%2B%2F0Eal0yoZjNc6PPGH%2BKzMsCRtc4dC3nlWpIFKjQCWB%2FjyhSlZrRXFvedoJRVEuzZ1StvdCrAvLU4JgCjh1KWT%2BD4k86eFlqKuuKlDgjmCbbiY43DBmWWK5LeFBBQjI6UD9PP9cPaA4hHlfGvwoCBE%2BnaXbGoNcJfGbEKLAa5cLcpzfQCAu4FuT7IQoCEfIHQvYzP4OAaRRUQp964V4J3CbMo%2FGSKzUBUuAccllyLCXw4fQ%2FbkKcp%2BfBNvxXG43%2FDSXyDzhBmQ9zEou92WdMicFUG8ZBKW4a6hJ2iots206TfmBgs%2BNP9bnkKyyOwUwYFn%2Bvcj53VWbNTChTuly0kZ4SloPBEc7fvGvqgBrFurB7C59O%2F1ahVZDS5Vp8F2%2FzQngHoZwY25bSvqLTp5U0XF2mTdukUGrKrnnsYL7uE9zp%2F1cVBFDmjeNTF05%2F59E6fEvjTFZH%2FPFWM%2BdL%2BV9MAitEwHm%2FW72p8x%2BNV0wlPyQvgY6pgFsBmMMShvrM7PZHCudKCgQIhAqskgJfkOjFXdE8S3bQm9IuB%2Bg4ZwJXj3hyYF8e7rYdmuXMULyzh4UTfdLMHO4P6Nx%2B64A0WoDlaZyAb%2FfNQOWJJFuet%2BWCwSj6XJkeuz89NHOrDn0fJ2yjDxOAK08EBU8vyfx8TOhnVOlgwsvT3NZuK1lYvbWIwQ%2FJd7hYVXPf2%2BYR%2FafmPcU%2BVtv5ETQPJCB2cby&X-Amz-Signature=2182bceaf9085b43f4752ed69232e595e699de5f68377bee131aaf43d710496d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC2YFLF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAijj3y3q%2B2%2F5He6EG2e0zYqjTRsp8a3muCCD%2Bs3NSgyAiBGAmmHqDZw5SyZXmw2Mw13f0Z0O1Z4usa%2FKq2SNeamWCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrTiY0R%2BexDItbUmlKtwDQBFjKJgqCAcvzIO8jdVBcPab5IYkdr%2BpiGoIMf3QQD9mNUd12%2BpdNcmcolZDjz%2BakBSe5vlCGkEfQKGzyCpD%2B97LETsRoIOnyJPErCNIl3PPjFCNYF3nvMZF8hXzk3dyqun26OaFHue2FzdbRarbQ%2B%2F0Eal0yoZjNc6PPGH%2BKzMsCRtc4dC3nlWpIFKjQCWB%2FjyhSlZrRXFvedoJRVEuzZ1StvdCrAvLU4JgCjh1KWT%2BD4k86eFlqKuuKlDgjmCbbiY43DBmWWK5LeFBBQjI6UD9PP9cPaA4hHlfGvwoCBE%2BnaXbGoNcJfGbEKLAa5cLcpzfQCAu4FuT7IQoCEfIHQvYzP4OAaRRUQp964V4J3CbMo%2FGSKzUBUuAccllyLCXw4fQ%2FbkKcp%2BfBNvxXG43%2FDSXyDzhBmQ9zEou92WdMicFUG8ZBKW4a6hJ2iots206TfmBgs%2BNP9bnkKyyOwUwYFn%2Bvcj53VWbNTChTuly0kZ4SloPBEc7fvGvqgBrFurB7C59O%2F1ahVZDS5Vp8F2%2FzQngHoZwY25bSvqLTp5U0XF2mTdukUGrKrnnsYL7uE9zp%2F1cVBFDmjeNTF05%2F59E6fEvjTFZH%2FPFWM%2BdL%2BV9MAitEwHm%2FW72p8x%2BNV0wlPyQvgY6pgFsBmMMShvrM7PZHCudKCgQIhAqskgJfkOjFXdE8S3bQm9IuB%2Bg4ZwJXj3hyYF8e7rYdmuXMULyzh4UTfdLMHO4P6Nx%2B64A0WoDlaZyAb%2FfNQOWJJFuet%2BWCwSj6XJkeuz89NHOrDn0fJ2yjDxOAK08EBU8vyfx8TOhnVOlgwsvT3NZuK1lYvbWIwQ%2FJd7hYVXPf2%2BYR%2FafmPcU%2BVtv5ETQPJCB2cby&X-Amz-Signature=cfc1a1c5356e10a9eb7fe890416a5586521807fc8cb4ed724be00ecd56b3dd4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC2YFLF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAijj3y3q%2B2%2F5He6EG2e0zYqjTRsp8a3muCCD%2Bs3NSgyAiBGAmmHqDZw5SyZXmw2Mw13f0Z0O1Z4usa%2FKq2SNeamWCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrTiY0R%2BexDItbUmlKtwDQBFjKJgqCAcvzIO8jdVBcPab5IYkdr%2BpiGoIMf3QQD9mNUd12%2BpdNcmcolZDjz%2BakBSe5vlCGkEfQKGzyCpD%2B97LETsRoIOnyJPErCNIl3PPjFCNYF3nvMZF8hXzk3dyqun26OaFHue2FzdbRarbQ%2B%2F0Eal0yoZjNc6PPGH%2BKzMsCRtc4dC3nlWpIFKjQCWB%2FjyhSlZrRXFvedoJRVEuzZ1StvdCrAvLU4JgCjh1KWT%2BD4k86eFlqKuuKlDgjmCbbiY43DBmWWK5LeFBBQjI6UD9PP9cPaA4hHlfGvwoCBE%2BnaXbGoNcJfGbEKLAa5cLcpzfQCAu4FuT7IQoCEfIHQvYzP4OAaRRUQp964V4J3CbMo%2FGSKzUBUuAccllyLCXw4fQ%2FbkKcp%2BfBNvxXG43%2FDSXyDzhBmQ9zEou92WdMicFUG8ZBKW4a6hJ2iots206TfmBgs%2BNP9bnkKyyOwUwYFn%2Bvcj53VWbNTChTuly0kZ4SloPBEc7fvGvqgBrFurB7C59O%2F1ahVZDS5Vp8F2%2FzQngHoZwY25bSvqLTp5U0XF2mTdukUGrKrnnsYL7uE9zp%2F1cVBFDmjeNTF05%2F59E6fEvjTFZH%2FPFWM%2BdL%2BV9MAitEwHm%2FW72p8x%2BNV0wlPyQvgY6pgFsBmMMShvrM7PZHCudKCgQIhAqskgJfkOjFXdE8S3bQm9IuB%2Bg4ZwJXj3hyYF8e7rYdmuXMULyzh4UTfdLMHO4P6Nx%2B64A0WoDlaZyAb%2FfNQOWJJFuet%2BWCwSj6XJkeuz89NHOrDn0fJ2yjDxOAK08EBU8vyfx8TOhnVOlgwsvT3NZuK1lYvbWIwQ%2FJd7hYVXPf2%2BYR%2FafmPcU%2BVtv5ETQPJCB2cby&X-Amz-Signature=97e478cbd4275a668b7678cfcff38a53126c14ad3a17e241cbf4d3ffc5b5f4a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

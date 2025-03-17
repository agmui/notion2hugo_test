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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFMHPSD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrZ56SqpVR8WaBweixb21zoCjEz8vTR%2Fj4OE7PWQq0IAIhAOwOH%2FoTDo8gYKd3VSLwuethuKaDigF7WEq5xsZK7B7eKv8DCEkQABoMNjM3NDIzMTgzODA1Igy9d41Ehk5LDDQBw6gq3ANxKCcSu0yMXSurxAisjg%2FBkbhjE91BUktxw0d8ypyVIz%2Fd6Oe7BbvD5bKTY3pZU%2Bhw5NYLBNDS3%2FhtviDY1Ea%2B6KChpUdsqg0JDXf49%2Fi1rzlKOze35KfyTygD%2FPNqtGSJ20ihjHeqqc2rdpx%2Bj%2B4MqPQPzGkr50roZ1hIyvhqe0sQuH8CU022QE5qDvFPq%2Fy3JUYFZitd6PNCxId2C9xKkdJ%2FPddE2hFYmweFsrfE7VF3AfOyCnYl6TyOUs%2Fu85AkwJIP5kYVoyIqDRPRWLRX798s5dS56T94nkMmYdm71F9hOpYg2Dd7l%2FJIOpeSnmRtRl1L8DucXcpGqTgEvUDwoTaxiJOqOoAJNjXZ5I8OrAXgXETzsIXuc7soelCqgdptAocHwywDLIUK4y%2FepIyKOfPWTERzvH5GhQyo5FiJABdFLfZJllm2iR9K7zphNGB88JlHlRgRxSo9kpGOPo6DTnn%2BIDb22tJBhnhGJtI8TRhsHJjGYHwvd7Vaj4KULm63d0fcJ1awK8Fn1QpCeOqTKbbWxuW7XDgVTQzFne%2By3t0I%2BJRA22wQvJGttb%2FQfxlDxYgqmelQ55q9Hww4pF6uU6GeLPkdM5cwWPcgLOlq7rBbcjBWJ3wgCMN%2BPjDoiOG%2BBjqkAU7mJng%2Bw0pVFFjkZDeCTk4Wlxx3E%2F%2Be0MY3ACvSowONL0o2jczhXh6Q6Y0%2FC0c9MD%2BgfYW9K0m2B9h%2BMSewgKJsVpgivRi%2FS6equ4F2oamKsQCHmxu9IVH6bOw5M8Llm25aJ3JZRfHLypDwoyvXNLdnZSK1C9CK9STALV60j6TaURjFbjk04xcNjV3ymsNiJzZx13Fcme4KqQl6cNchModcHwtz&X-Amz-Signature=c07e3fccddb63f91b3e5d0aa3048115574b635b2746502237f4d18be7c3680d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFMHPSD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrZ56SqpVR8WaBweixb21zoCjEz8vTR%2Fj4OE7PWQq0IAIhAOwOH%2FoTDo8gYKd3VSLwuethuKaDigF7WEq5xsZK7B7eKv8DCEkQABoMNjM3NDIzMTgzODA1Igy9d41Ehk5LDDQBw6gq3ANxKCcSu0yMXSurxAisjg%2FBkbhjE91BUktxw0d8ypyVIz%2Fd6Oe7BbvD5bKTY3pZU%2Bhw5NYLBNDS3%2FhtviDY1Ea%2B6KChpUdsqg0JDXf49%2Fi1rzlKOze35KfyTygD%2FPNqtGSJ20ihjHeqqc2rdpx%2Bj%2B4MqPQPzGkr50roZ1hIyvhqe0sQuH8CU022QE5qDvFPq%2Fy3JUYFZitd6PNCxId2C9xKkdJ%2FPddE2hFYmweFsrfE7VF3AfOyCnYl6TyOUs%2Fu85AkwJIP5kYVoyIqDRPRWLRX798s5dS56T94nkMmYdm71F9hOpYg2Dd7l%2FJIOpeSnmRtRl1L8DucXcpGqTgEvUDwoTaxiJOqOoAJNjXZ5I8OrAXgXETzsIXuc7soelCqgdptAocHwywDLIUK4y%2FepIyKOfPWTERzvH5GhQyo5FiJABdFLfZJllm2iR9K7zphNGB88JlHlRgRxSo9kpGOPo6DTnn%2BIDb22tJBhnhGJtI8TRhsHJjGYHwvd7Vaj4KULm63d0fcJ1awK8Fn1QpCeOqTKbbWxuW7XDgVTQzFne%2By3t0I%2BJRA22wQvJGttb%2FQfxlDxYgqmelQ55q9Hww4pF6uU6GeLPkdM5cwWPcgLOlq7rBbcjBWJ3wgCMN%2BPjDoiOG%2BBjqkAU7mJng%2Bw0pVFFjkZDeCTk4Wlxx3E%2F%2Be0MY3ACvSowONL0o2jczhXh6Q6Y0%2FC0c9MD%2BgfYW9K0m2B9h%2BMSewgKJsVpgivRi%2FS6equ4F2oamKsQCHmxu9IVH6bOw5M8Llm25aJ3JZRfHLypDwoyvXNLdnZSK1C9CK9STALV60j6TaURjFbjk04xcNjV3ymsNiJzZx13Fcme4KqQl6cNchModcHwtz&X-Amz-Signature=9f1eeb0f52a9daf4b6955b8a9329371de3e424484f3654d75c01b139f62c7819&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFMHPSD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrZ56SqpVR8WaBweixb21zoCjEz8vTR%2Fj4OE7PWQq0IAIhAOwOH%2FoTDo8gYKd3VSLwuethuKaDigF7WEq5xsZK7B7eKv8DCEkQABoMNjM3NDIzMTgzODA1Igy9d41Ehk5LDDQBw6gq3ANxKCcSu0yMXSurxAisjg%2FBkbhjE91BUktxw0d8ypyVIz%2Fd6Oe7BbvD5bKTY3pZU%2Bhw5NYLBNDS3%2FhtviDY1Ea%2B6KChpUdsqg0JDXf49%2Fi1rzlKOze35KfyTygD%2FPNqtGSJ20ihjHeqqc2rdpx%2Bj%2B4MqPQPzGkr50roZ1hIyvhqe0sQuH8CU022QE5qDvFPq%2Fy3JUYFZitd6PNCxId2C9xKkdJ%2FPddE2hFYmweFsrfE7VF3AfOyCnYl6TyOUs%2Fu85AkwJIP5kYVoyIqDRPRWLRX798s5dS56T94nkMmYdm71F9hOpYg2Dd7l%2FJIOpeSnmRtRl1L8DucXcpGqTgEvUDwoTaxiJOqOoAJNjXZ5I8OrAXgXETzsIXuc7soelCqgdptAocHwywDLIUK4y%2FepIyKOfPWTERzvH5GhQyo5FiJABdFLfZJllm2iR9K7zphNGB88JlHlRgRxSo9kpGOPo6DTnn%2BIDb22tJBhnhGJtI8TRhsHJjGYHwvd7Vaj4KULm63d0fcJ1awK8Fn1QpCeOqTKbbWxuW7XDgVTQzFne%2By3t0I%2BJRA22wQvJGttb%2FQfxlDxYgqmelQ55q9Hww4pF6uU6GeLPkdM5cwWPcgLOlq7rBbcjBWJ3wgCMN%2BPjDoiOG%2BBjqkAU7mJng%2Bw0pVFFjkZDeCTk4Wlxx3E%2F%2Be0MY3ACvSowONL0o2jczhXh6Q6Y0%2FC0c9MD%2BgfYW9K0m2B9h%2BMSewgKJsVpgivRi%2FS6equ4F2oamKsQCHmxu9IVH6bOw5M8Llm25aJ3JZRfHLypDwoyvXNLdnZSK1C9CK9STALV60j6TaURjFbjk04xcNjV3ymsNiJzZx13Fcme4KqQl6cNchModcHwtz&X-Amz-Signature=65d37d7be78631e3721d941e233ff27296bcea7d39bcaa5af70c23aa4abae5f9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFMHPSD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrZ56SqpVR8WaBweixb21zoCjEz8vTR%2Fj4OE7PWQq0IAIhAOwOH%2FoTDo8gYKd3VSLwuethuKaDigF7WEq5xsZK7B7eKv8DCEkQABoMNjM3NDIzMTgzODA1Igy9d41Ehk5LDDQBw6gq3ANxKCcSu0yMXSurxAisjg%2FBkbhjE91BUktxw0d8ypyVIz%2Fd6Oe7BbvD5bKTY3pZU%2Bhw5NYLBNDS3%2FhtviDY1Ea%2B6KChpUdsqg0JDXf49%2Fi1rzlKOze35KfyTygD%2FPNqtGSJ20ihjHeqqc2rdpx%2Bj%2B4MqPQPzGkr50roZ1hIyvhqe0sQuH8CU022QE5qDvFPq%2Fy3JUYFZitd6PNCxId2C9xKkdJ%2FPddE2hFYmweFsrfE7VF3AfOyCnYl6TyOUs%2Fu85AkwJIP5kYVoyIqDRPRWLRX798s5dS56T94nkMmYdm71F9hOpYg2Dd7l%2FJIOpeSnmRtRl1L8DucXcpGqTgEvUDwoTaxiJOqOoAJNjXZ5I8OrAXgXETzsIXuc7soelCqgdptAocHwywDLIUK4y%2FepIyKOfPWTERzvH5GhQyo5FiJABdFLfZJllm2iR9K7zphNGB88JlHlRgRxSo9kpGOPo6DTnn%2BIDb22tJBhnhGJtI8TRhsHJjGYHwvd7Vaj4KULm63d0fcJ1awK8Fn1QpCeOqTKbbWxuW7XDgVTQzFne%2By3t0I%2BJRA22wQvJGttb%2FQfxlDxYgqmelQ55q9Hww4pF6uU6GeLPkdM5cwWPcgLOlq7rBbcjBWJ3wgCMN%2BPjDoiOG%2BBjqkAU7mJng%2Bw0pVFFjkZDeCTk4Wlxx3E%2F%2Be0MY3ACvSowONL0o2jczhXh6Q6Y0%2FC0c9MD%2BgfYW9K0m2B9h%2BMSewgKJsVpgivRi%2FS6equ4F2oamKsQCHmxu9IVH6bOw5M8Llm25aJ3JZRfHLypDwoyvXNLdnZSK1C9CK9STALV60j6TaURjFbjk04xcNjV3ymsNiJzZx13Fcme4KqQl6cNchModcHwtz&X-Amz-Signature=af437468979abeafe09f60897b938ba09a7482bb145efad4ce577758d6259527&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFMHPSD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrZ56SqpVR8WaBweixb21zoCjEz8vTR%2Fj4OE7PWQq0IAIhAOwOH%2FoTDo8gYKd3VSLwuethuKaDigF7WEq5xsZK7B7eKv8DCEkQABoMNjM3NDIzMTgzODA1Igy9d41Ehk5LDDQBw6gq3ANxKCcSu0yMXSurxAisjg%2FBkbhjE91BUktxw0d8ypyVIz%2Fd6Oe7BbvD5bKTY3pZU%2Bhw5NYLBNDS3%2FhtviDY1Ea%2B6KChpUdsqg0JDXf49%2Fi1rzlKOze35KfyTygD%2FPNqtGSJ20ihjHeqqc2rdpx%2Bj%2B4MqPQPzGkr50roZ1hIyvhqe0sQuH8CU022QE5qDvFPq%2Fy3JUYFZitd6PNCxId2C9xKkdJ%2FPddE2hFYmweFsrfE7VF3AfOyCnYl6TyOUs%2Fu85AkwJIP5kYVoyIqDRPRWLRX798s5dS56T94nkMmYdm71F9hOpYg2Dd7l%2FJIOpeSnmRtRl1L8DucXcpGqTgEvUDwoTaxiJOqOoAJNjXZ5I8OrAXgXETzsIXuc7soelCqgdptAocHwywDLIUK4y%2FepIyKOfPWTERzvH5GhQyo5FiJABdFLfZJllm2iR9K7zphNGB88JlHlRgRxSo9kpGOPo6DTnn%2BIDb22tJBhnhGJtI8TRhsHJjGYHwvd7Vaj4KULm63d0fcJ1awK8Fn1QpCeOqTKbbWxuW7XDgVTQzFne%2By3t0I%2BJRA22wQvJGttb%2FQfxlDxYgqmelQ55q9Hww4pF6uU6GeLPkdM5cwWPcgLOlq7rBbcjBWJ3wgCMN%2BPjDoiOG%2BBjqkAU7mJng%2Bw0pVFFjkZDeCTk4Wlxx3E%2F%2Be0MY3ACvSowONL0o2jczhXh6Q6Y0%2FC0c9MD%2BgfYW9K0m2B9h%2BMSewgKJsVpgivRi%2FS6equ4F2oamKsQCHmxu9IVH6bOw5M8Llm25aJ3JZRfHLypDwoyvXNLdnZSK1C9CK9STALV60j6TaURjFbjk04xcNjV3ymsNiJzZx13Fcme4KqQl6cNchModcHwtz&X-Amz-Signature=e19f539ca0c237f2582ecb0d7faa4cfad1a6378f985df504f91cf0268a70e30d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFMHPSD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrZ56SqpVR8WaBweixb21zoCjEz8vTR%2Fj4OE7PWQq0IAIhAOwOH%2FoTDo8gYKd3VSLwuethuKaDigF7WEq5xsZK7B7eKv8DCEkQABoMNjM3NDIzMTgzODA1Igy9d41Ehk5LDDQBw6gq3ANxKCcSu0yMXSurxAisjg%2FBkbhjE91BUktxw0d8ypyVIz%2Fd6Oe7BbvD5bKTY3pZU%2Bhw5NYLBNDS3%2FhtviDY1Ea%2B6KChpUdsqg0JDXf49%2Fi1rzlKOze35KfyTygD%2FPNqtGSJ20ihjHeqqc2rdpx%2Bj%2B4MqPQPzGkr50roZ1hIyvhqe0sQuH8CU022QE5qDvFPq%2Fy3JUYFZitd6PNCxId2C9xKkdJ%2FPddE2hFYmweFsrfE7VF3AfOyCnYl6TyOUs%2Fu85AkwJIP5kYVoyIqDRPRWLRX798s5dS56T94nkMmYdm71F9hOpYg2Dd7l%2FJIOpeSnmRtRl1L8DucXcpGqTgEvUDwoTaxiJOqOoAJNjXZ5I8OrAXgXETzsIXuc7soelCqgdptAocHwywDLIUK4y%2FepIyKOfPWTERzvH5GhQyo5FiJABdFLfZJllm2iR9K7zphNGB88JlHlRgRxSo9kpGOPo6DTnn%2BIDb22tJBhnhGJtI8TRhsHJjGYHwvd7Vaj4KULm63d0fcJ1awK8Fn1QpCeOqTKbbWxuW7XDgVTQzFne%2By3t0I%2BJRA22wQvJGttb%2FQfxlDxYgqmelQ55q9Hww4pF6uU6GeLPkdM5cwWPcgLOlq7rBbcjBWJ3wgCMN%2BPjDoiOG%2BBjqkAU7mJng%2Bw0pVFFjkZDeCTk4Wlxx3E%2F%2Be0MY3ACvSowONL0o2jczhXh6Q6Y0%2FC0c9MD%2BgfYW9K0m2B9h%2BMSewgKJsVpgivRi%2FS6equ4F2oamKsQCHmxu9IVH6bOw5M8Llm25aJ3JZRfHLypDwoyvXNLdnZSK1C9CK9STALV60j6TaURjFbjk04xcNjV3ymsNiJzZx13Fcme4KqQl6cNchModcHwtz&X-Amz-Signature=d6f1d4a6aaa3855ede0b74f3be608e49f98ecff83a05603800ecc48e99d9eee0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFMHPSD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrZ56SqpVR8WaBweixb21zoCjEz8vTR%2Fj4OE7PWQq0IAIhAOwOH%2FoTDo8gYKd3VSLwuethuKaDigF7WEq5xsZK7B7eKv8DCEkQABoMNjM3NDIzMTgzODA1Igy9d41Ehk5LDDQBw6gq3ANxKCcSu0yMXSurxAisjg%2FBkbhjE91BUktxw0d8ypyVIz%2Fd6Oe7BbvD5bKTY3pZU%2Bhw5NYLBNDS3%2FhtviDY1Ea%2B6KChpUdsqg0JDXf49%2Fi1rzlKOze35KfyTygD%2FPNqtGSJ20ihjHeqqc2rdpx%2Bj%2B4MqPQPzGkr50roZ1hIyvhqe0sQuH8CU022QE5qDvFPq%2Fy3JUYFZitd6PNCxId2C9xKkdJ%2FPddE2hFYmweFsrfE7VF3AfOyCnYl6TyOUs%2Fu85AkwJIP5kYVoyIqDRPRWLRX798s5dS56T94nkMmYdm71F9hOpYg2Dd7l%2FJIOpeSnmRtRl1L8DucXcpGqTgEvUDwoTaxiJOqOoAJNjXZ5I8OrAXgXETzsIXuc7soelCqgdptAocHwywDLIUK4y%2FepIyKOfPWTERzvH5GhQyo5FiJABdFLfZJllm2iR9K7zphNGB88JlHlRgRxSo9kpGOPo6DTnn%2BIDb22tJBhnhGJtI8TRhsHJjGYHwvd7Vaj4KULm63d0fcJ1awK8Fn1QpCeOqTKbbWxuW7XDgVTQzFne%2By3t0I%2BJRA22wQvJGttb%2FQfxlDxYgqmelQ55q9Hww4pF6uU6GeLPkdM5cwWPcgLOlq7rBbcjBWJ3wgCMN%2BPjDoiOG%2BBjqkAU7mJng%2Bw0pVFFjkZDeCTk4Wlxx3E%2F%2Be0MY3ACvSowONL0o2jczhXh6Q6Y0%2FC0c9MD%2BgfYW9K0m2B9h%2BMSewgKJsVpgivRi%2FS6equ4F2oamKsQCHmxu9IVH6bOw5M8Llm25aJ3JZRfHLypDwoyvXNLdnZSK1C9CK9STALV60j6TaURjFbjk04xcNjV3ymsNiJzZx13Fcme4KqQl6cNchModcHwtz&X-Amz-Signature=0d1ed839e1844d96cca0ca0f948ab3ed0eb036eb411dc44716dc5ab0751eaf3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFMHPSD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrZ56SqpVR8WaBweixb21zoCjEz8vTR%2Fj4OE7PWQq0IAIhAOwOH%2FoTDo8gYKd3VSLwuethuKaDigF7WEq5xsZK7B7eKv8DCEkQABoMNjM3NDIzMTgzODA1Igy9d41Ehk5LDDQBw6gq3ANxKCcSu0yMXSurxAisjg%2FBkbhjE91BUktxw0d8ypyVIz%2Fd6Oe7BbvD5bKTY3pZU%2Bhw5NYLBNDS3%2FhtviDY1Ea%2B6KChpUdsqg0JDXf49%2Fi1rzlKOze35KfyTygD%2FPNqtGSJ20ihjHeqqc2rdpx%2Bj%2B4MqPQPzGkr50roZ1hIyvhqe0sQuH8CU022QE5qDvFPq%2Fy3JUYFZitd6PNCxId2C9xKkdJ%2FPddE2hFYmweFsrfE7VF3AfOyCnYl6TyOUs%2Fu85AkwJIP5kYVoyIqDRPRWLRX798s5dS56T94nkMmYdm71F9hOpYg2Dd7l%2FJIOpeSnmRtRl1L8DucXcpGqTgEvUDwoTaxiJOqOoAJNjXZ5I8OrAXgXETzsIXuc7soelCqgdptAocHwywDLIUK4y%2FepIyKOfPWTERzvH5GhQyo5FiJABdFLfZJllm2iR9K7zphNGB88JlHlRgRxSo9kpGOPo6DTnn%2BIDb22tJBhnhGJtI8TRhsHJjGYHwvd7Vaj4KULm63d0fcJ1awK8Fn1QpCeOqTKbbWxuW7XDgVTQzFne%2By3t0I%2BJRA22wQvJGttb%2FQfxlDxYgqmelQ55q9Hww4pF6uU6GeLPkdM5cwWPcgLOlq7rBbcjBWJ3wgCMN%2BPjDoiOG%2BBjqkAU7mJng%2Bw0pVFFjkZDeCTk4Wlxx3E%2F%2Be0MY3ACvSowONL0o2jczhXh6Q6Y0%2FC0c9MD%2BgfYW9K0m2B9h%2BMSewgKJsVpgivRi%2FS6equ4F2oamKsQCHmxu9IVH6bOw5M8Llm25aJ3JZRfHLypDwoyvXNLdnZSK1C9CK9STALV60j6TaURjFbjk04xcNjV3ymsNiJzZx13Fcme4KqQl6cNchModcHwtz&X-Amz-Signature=bf924409a5ed638490fd0a8cb625bcbebe4fcda3cf019d5bd17e674913484938&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVIIS4E%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGE%2FU7dRLmiu%2FWn7zeGzF0GcYlbCzvzvgiuOaiRV0YKpAiAFFMsgMdMrbakg%2BLw%2FFNk4EwEoiZV52sbV0MWpNSLQVyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5lZwJe14K3SVg4XKKtwDJbYyg1UHYJXsgQp1rAkRwPI8Yx4ndheA6qqL4JZxw2MZS56NHtW2c%2BGGZ8iAUspCjGJRn6QtWIjNiEOXW7TzIBZvcKmpBmrCMCW4emWDqpCoF9OJlxmN70qo4uFbzI2HYSXdVnsrGu6u56s0AuziwdU7jQH5AGFjgTaVx%2Bqhk8CaD4yAeHfc8aYBz4J01qdZd0Y22B8MtabzbNFvnZQKqsPTd1e%2FUqOBWND%2BX35S%2FU1xiqfj%2BIDAqBoF9C9HzasOzWcHI8fO%2Fs%2FsYVaV0B7oav5CI9NAC9PegheNVFl1c%2B%2BANb2MIYBFnxQm%2FXtcrKjXoibaeRT3WbFbpB83H1ceMxjMZSxJlVrieDlHZrQ4Z0lN%2BdOxzvF4CuTJzqOJMEVMl3%2FYEBevWtsp0u1E4tn2ZemyhS14708IzKMp0y3%2BKA6rPtc%2Fx%2FnHKfSMO1y3wpFTyVx%2F8aB8yieG27oaFvExrtC3JMZE%2Ba6WyakeX%2FH0W%2FNcZlq6%2BWd6Ca0Y%2BXebQnksomXoKStzqd8WFn2iRWDiIqPKrQfUkHx024n0Q9381bgfQP%2BUD8y%2FKXxAvhBkZt8LxvoyxBUEbp43HmigSkxSmp1UypasW1K3mEX472exyNJ03n0V%2F653BJ%2BcMekwy4fGwAY6pgFfHPtx7UkEE0yrFP%2FvYhwluf5AfwGfxQHqVTWJLPRQVeuZ8cBJ1HSH6UvydYFhjU332lbnG40ZwMm4QvGaT56CaC7bxHAALAj%2BSNs4z%2Br%2F4z4LOyWY397bIDBsNRN4BfXd8XBjx4vkCX7M4EH7idhoNNfcO38tIH4i7Km3lXrRRA1JDFeM%2FGEaLazJMcWrVIwoNNax7XSCfxmXGzimacZESL1jXXdc&X-Amz-Signature=82344078b8c574bd6665eee83f4176bf31e90f2a73b44464b1ca596ebde4a8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVIIS4E%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGE%2FU7dRLmiu%2FWn7zeGzF0GcYlbCzvzvgiuOaiRV0YKpAiAFFMsgMdMrbakg%2BLw%2FFNk4EwEoiZV52sbV0MWpNSLQVyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5lZwJe14K3SVg4XKKtwDJbYyg1UHYJXsgQp1rAkRwPI8Yx4ndheA6qqL4JZxw2MZS56NHtW2c%2BGGZ8iAUspCjGJRn6QtWIjNiEOXW7TzIBZvcKmpBmrCMCW4emWDqpCoF9OJlxmN70qo4uFbzI2HYSXdVnsrGu6u56s0AuziwdU7jQH5AGFjgTaVx%2Bqhk8CaD4yAeHfc8aYBz4J01qdZd0Y22B8MtabzbNFvnZQKqsPTd1e%2FUqOBWND%2BX35S%2FU1xiqfj%2BIDAqBoF9C9HzasOzWcHI8fO%2Fs%2FsYVaV0B7oav5CI9NAC9PegheNVFl1c%2B%2BANb2MIYBFnxQm%2FXtcrKjXoibaeRT3WbFbpB83H1ceMxjMZSxJlVrieDlHZrQ4Z0lN%2BdOxzvF4CuTJzqOJMEVMl3%2FYEBevWtsp0u1E4tn2ZemyhS14708IzKMp0y3%2BKA6rPtc%2Fx%2FnHKfSMO1y3wpFTyVx%2F8aB8yieG27oaFvExrtC3JMZE%2Ba6WyakeX%2FH0W%2FNcZlq6%2BWd6Ca0Y%2BXebQnksomXoKStzqd8WFn2iRWDiIqPKrQfUkHx024n0Q9381bgfQP%2BUD8y%2FKXxAvhBkZt8LxvoyxBUEbp43HmigSkxSmp1UypasW1K3mEX472exyNJ03n0V%2F653BJ%2BcMekwy4fGwAY6pgFfHPtx7UkEE0yrFP%2FvYhwluf5AfwGfxQHqVTWJLPRQVeuZ8cBJ1HSH6UvydYFhjU332lbnG40ZwMm4QvGaT56CaC7bxHAALAj%2BSNs4z%2Br%2F4z4LOyWY397bIDBsNRN4BfXd8XBjx4vkCX7M4EH7idhoNNfcO38tIH4i7Km3lXrRRA1JDFeM%2FGEaLazJMcWrVIwoNNax7XSCfxmXGzimacZESL1jXXdc&X-Amz-Signature=2c8f083e867e1812e0e044e93706ca2dfc14635c85e3365235e7cdf8dc2b1470&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVIIS4E%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGE%2FU7dRLmiu%2FWn7zeGzF0GcYlbCzvzvgiuOaiRV0YKpAiAFFMsgMdMrbakg%2BLw%2FFNk4EwEoiZV52sbV0MWpNSLQVyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5lZwJe14K3SVg4XKKtwDJbYyg1UHYJXsgQp1rAkRwPI8Yx4ndheA6qqL4JZxw2MZS56NHtW2c%2BGGZ8iAUspCjGJRn6QtWIjNiEOXW7TzIBZvcKmpBmrCMCW4emWDqpCoF9OJlxmN70qo4uFbzI2HYSXdVnsrGu6u56s0AuziwdU7jQH5AGFjgTaVx%2Bqhk8CaD4yAeHfc8aYBz4J01qdZd0Y22B8MtabzbNFvnZQKqsPTd1e%2FUqOBWND%2BX35S%2FU1xiqfj%2BIDAqBoF9C9HzasOzWcHI8fO%2Fs%2FsYVaV0B7oav5CI9NAC9PegheNVFl1c%2B%2BANb2MIYBFnxQm%2FXtcrKjXoibaeRT3WbFbpB83H1ceMxjMZSxJlVrieDlHZrQ4Z0lN%2BdOxzvF4CuTJzqOJMEVMl3%2FYEBevWtsp0u1E4tn2ZemyhS14708IzKMp0y3%2BKA6rPtc%2Fx%2FnHKfSMO1y3wpFTyVx%2F8aB8yieG27oaFvExrtC3JMZE%2Ba6WyakeX%2FH0W%2FNcZlq6%2BWd6Ca0Y%2BXebQnksomXoKStzqd8WFn2iRWDiIqPKrQfUkHx024n0Q9381bgfQP%2BUD8y%2FKXxAvhBkZt8LxvoyxBUEbp43HmigSkxSmp1UypasW1K3mEX472exyNJ03n0V%2F653BJ%2BcMekwy4fGwAY6pgFfHPtx7UkEE0yrFP%2FvYhwluf5AfwGfxQHqVTWJLPRQVeuZ8cBJ1HSH6UvydYFhjU332lbnG40ZwMm4QvGaT56CaC7bxHAALAj%2BSNs4z%2Br%2F4z4LOyWY397bIDBsNRN4BfXd8XBjx4vkCX7M4EH7idhoNNfcO38tIH4i7Km3lXrRRA1JDFeM%2FGEaLazJMcWrVIwoNNax7XSCfxmXGzimacZESL1jXXdc&X-Amz-Signature=7eb4a7ec3b667b10f126415a9525dafaf534527ff8410b076d478cfcc5e9a72a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVIIS4E%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGE%2FU7dRLmiu%2FWn7zeGzF0GcYlbCzvzvgiuOaiRV0YKpAiAFFMsgMdMrbakg%2BLw%2FFNk4EwEoiZV52sbV0MWpNSLQVyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5lZwJe14K3SVg4XKKtwDJbYyg1UHYJXsgQp1rAkRwPI8Yx4ndheA6qqL4JZxw2MZS56NHtW2c%2BGGZ8iAUspCjGJRn6QtWIjNiEOXW7TzIBZvcKmpBmrCMCW4emWDqpCoF9OJlxmN70qo4uFbzI2HYSXdVnsrGu6u56s0AuziwdU7jQH5AGFjgTaVx%2Bqhk8CaD4yAeHfc8aYBz4J01qdZd0Y22B8MtabzbNFvnZQKqsPTd1e%2FUqOBWND%2BX35S%2FU1xiqfj%2BIDAqBoF9C9HzasOzWcHI8fO%2Fs%2FsYVaV0B7oav5CI9NAC9PegheNVFl1c%2B%2BANb2MIYBFnxQm%2FXtcrKjXoibaeRT3WbFbpB83H1ceMxjMZSxJlVrieDlHZrQ4Z0lN%2BdOxzvF4CuTJzqOJMEVMl3%2FYEBevWtsp0u1E4tn2ZemyhS14708IzKMp0y3%2BKA6rPtc%2Fx%2FnHKfSMO1y3wpFTyVx%2F8aB8yieG27oaFvExrtC3JMZE%2Ba6WyakeX%2FH0W%2FNcZlq6%2BWd6Ca0Y%2BXebQnksomXoKStzqd8WFn2iRWDiIqPKrQfUkHx024n0Q9381bgfQP%2BUD8y%2FKXxAvhBkZt8LxvoyxBUEbp43HmigSkxSmp1UypasW1K3mEX472exyNJ03n0V%2F653BJ%2BcMekwy4fGwAY6pgFfHPtx7UkEE0yrFP%2FvYhwluf5AfwGfxQHqVTWJLPRQVeuZ8cBJ1HSH6UvydYFhjU332lbnG40ZwMm4QvGaT56CaC7bxHAALAj%2BSNs4z%2Br%2F4z4LOyWY397bIDBsNRN4BfXd8XBjx4vkCX7M4EH7idhoNNfcO38tIH4i7Km3lXrRRA1JDFeM%2FGEaLazJMcWrVIwoNNax7XSCfxmXGzimacZESL1jXXdc&X-Amz-Signature=6e1a4e14e2493933a510ce5474cbb6a3614fbeda29db999d78848747bd64dcf4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVIIS4E%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGE%2FU7dRLmiu%2FWn7zeGzF0GcYlbCzvzvgiuOaiRV0YKpAiAFFMsgMdMrbakg%2BLw%2FFNk4EwEoiZV52sbV0MWpNSLQVyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5lZwJe14K3SVg4XKKtwDJbYyg1UHYJXsgQp1rAkRwPI8Yx4ndheA6qqL4JZxw2MZS56NHtW2c%2BGGZ8iAUspCjGJRn6QtWIjNiEOXW7TzIBZvcKmpBmrCMCW4emWDqpCoF9OJlxmN70qo4uFbzI2HYSXdVnsrGu6u56s0AuziwdU7jQH5AGFjgTaVx%2Bqhk8CaD4yAeHfc8aYBz4J01qdZd0Y22B8MtabzbNFvnZQKqsPTd1e%2FUqOBWND%2BX35S%2FU1xiqfj%2BIDAqBoF9C9HzasOzWcHI8fO%2Fs%2FsYVaV0B7oav5CI9NAC9PegheNVFl1c%2B%2BANb2MIYBFnxQm%2FXtcrKjXoibaeRT3WbFbpB83H1ceMxjMZSxJlVrieDlHZrQ4Z0lN%2BdOxzvF4CuTJzqOJMEVMl3%2FYEBevWtsp0u1E4tn2ZemyhS14708IzKMp0y3%2BKA6rPtc%2Fx%2FnHKfSMO1y3wpFTyVx%2F8aB8yieG27oaFvExrtC3JMZE%2Ba6WyakeX%2FH0W%2FNcZlq6%2BWd6Ca0Y%2BXebQnksomXoKStzqd8WFn2iRWDiIqPKrQfUkHx024n0Q9381bgfQP%2BUD8y%2FKXxAvhBkZt8LxvoyxBUEbp43HmigSkxSmp1UypasW1K3mEX472exyNJ03n0V%2F653BJ%2BcMekwy4fGwAY6pgFfHPtx7UkEE0yrFP%2FvYhwluf5AfwGfxQHqVTWJLPRQVeuZ8cBJ1HSH6UvydYFhjU332lbnG40ZwMm4QvGaT56CaC7bxHAALAj%2BSNs4z%2Br%2F4z4LOyWY397bIDBsNRN4BfXd8XBjx4vkCX7M4EH7idhoNNfcO38tIH4i7Km3lXrRRA1JDFeM%2FGEaLazJMcWrVIwoNNax7XSCfxmXGzimacZESL1jXXdc&X-Amz-Signature=df225c0215c7cf71dd441b54b2ca4cd23263180ba63a3ece02485f9aaf4e6f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVIIS4E%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGE%2FU7dRLmiu%2FWn7zeGzF0GcYlbCzvzvgiuOaiRV0YKpAiAFFMsgMdMrbakg%2BLw%2FFNk4EwEoiZV52sbV0MWpNSLQVyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5lZwJe14K3SVg4XKKtwDJbYyg1UHYJXsgQp1rAkRwPI8Yx4ndheA6qqL4JZxw2MZS56NHtW2c%2BGGZ8iAUspCjGJRn6QtWIjNiEOXW7TzIBZvcKmpBmrCMCW4emWDqpCoF9OJlxmN70qo4uFbzI2HYSXdVnsrGu6u56s0AuziwdU7jQH5AGFjgTaVx%2Bqhk8CaD4yAeHfc8aYBz4J01qdZd0Y22B8MtabzbNFvnZQKqsPTd1e%2FUqOBWND%2BX35S%2FU1xiqfj%2BIDAqBoF9C9HzasOzWcHI8fO%2Fs%2FsYVaV0B7oav5CI9NAC9PegheNVFl1c%2B%2BANb2MIYBFnxQm%2FXtcrKjXoibaeRT3WbFbpB83H1ceMxjMZSxJlVrieDlHZrQ4Z0lN%2BdOxzvF4CuTJzqOJMEVMl3%2FYEBevWtsp0u1E4tn2ZemyhS14708IzKMp0y3%2BKA6rPtc%2Fx%2FnHKfSMO1y3wpFTyVx%2F8aB8yieG27oaFvExrtC3JMZE%2Ba6WyakeX%2FH0W%2FNcZlq6%2BWd6Ca0Y%2BXebQnksomXoKStzqd8WFn2iRWDiIqPKrQfUkHx024n0Q9381bgfQP%2BUD8y%2FKXxAvhBkZt8LxvoyxBUEbp43HmigSkxSmp1UypasW1K3mEX472exyNJ03n0V%2F653BJ%2BcMekwy4fGwAY6pgFfHPtx7UkEE0yrFP%2FvYhwluf5AfwGfxQHqVTWJLPRQVeuZ8cBJ1HSH6UvydYFhjU332lbnG40ZwMm4QvGaT56CaC7bxHAALAj%2BSNs4z%2Br%2F4z4LOyWY397bIDBsNRN4BfXd8XBjx4vkCX7M4EH7idhoNNfcO38tIH4i7Km3lXrRRA1JDFeM%2FGEaLazJMcWrVIwoNNax7XSCfxmXGzimacZESL1jXXdc&X-Amz-Signature=d1dd1811ab52f9619dcb03f15d91c2f24d29572c944285489c68e742bf793eda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVIIS4E%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGE%2FU7dRLmiu%2FWn7zeGzF0GcYlbCzvzvgiuOaiRV0YKpAiAFFMsgMdMrbakg%2BLw%2FFNk4EwEoiZV52sbV0MWpNSLQVyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5lZwJe14K3SVg4XKKtwDJbYyg1UHYJXsgQp1rAkRwPI8Yx4ndheA6qqL4JZxw2MZS56NHtW2c%2BGGZ8iAUspCjGJRn6QtWIjNiEOXW7TzIBZvcKmpBmrCMCW4emWDqpCoF9OJlxmN70qo4uFbzI2HYSXdVnsrGu6u56s0AuziwdU7jQH5AGFjgTaVx%2Bqhk8CaD4yAeHfc8aYBz4J01qdZd0Y22B8MtabzbNFvnZQKqsPTd1e%2FUqOBWND%2BX35S%2FU1xiqfj%2BIDAqBoF9C9HzasOzWcHI8fO%2Fs%2FsYVaV0B7oav5CI9NAC9PegheNVFl1c%2B%2BANb2MIYBFnxQm%2FXtcrKjXoibaeRT3WbFbpB83H1ceMxjMZSxJlVrieDlHZrQ4Z0lN%2BdOxzvF4CuTJzqOJMEVMl3%2FYEBevWtsp0u1E4tn2ZemyhS14708IzKMp0y3%2BKA6rPtc%2Fx%2FnHKfSMO1y3wpFTyVx%2F8aB8yieG27oaFvExrtC3JMZE%2Ba6WyakeX%2FH0W%2FNcZlq6%2BWd6Ca0Y%2BXebQnksomXoKStzqd8WFn2iRWDiIqPKrQfUkHx024n0Q9381bgfQP%2BUD8y%2FKXxAvhBkZt8LxvoyxBUEbp43HmigSkxSmp1UypasW1K3mEX472exyNJ03n0V%2F653BJ%2BcMekwy4fGwAY6pgFfHPtx7UkEE0yrFP%2FvYhwluf5AfwGfxQHqVTWJLPRQVeuZ8cBJ1HSH6UvydYFhjU332lbnG40ZwMm4QvGaT56CaC7bxHAALAj%2BSNs4z%2Br%2F4z4LOyWY397bIDBsNRN4BfXd8XBjx4vkCX7M4EH7idhoNNfcO38tIH4i7Km3lXrRRA1JDFeM%2FGEaLazJMcWrVIwoNNax7XSCfxmXGzimacZESL1jXXdc&X-Amz-Signature=832865f41b38851b3d020206ab3ba50bb2baa2275440804b650259bc1131f2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVIIS4E%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGE%2FU7dRLmiu%2FWn7zeGzF0GcYlbCzvzvgiuOaiRV0YKpAiAFFMsgMdMrbakg%2BLw%2FFNk4EwEoiZV52sbV0MWpNSLQVyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5lZwJe14K3SVg4XKKtwDJbYyg1UHYJXsgQp1rAkRwPI8Yx4ndheA6qqL4JZxw2MZS56NHtW2c%2BGGZ8iAUspCjGJRn6QtWIjNiEOXW7TzIBZvcKmpBmrCMCW4emWDqpCoF9OJlxmN70qo4uFbzI2HYSXdVnsrGu6u56s0AuziwdU7jQH5AGFjgTaVx%2Bqhk8CaD4yAeHfc8aYBz4J01qdZd0Y22B8MtabzbNFvnZQKqsPTd1e%2FUqOBWND%2BX35S%2FU1xiqfj%2BIDAqBoF9C9HzasOzWcHI8fO%2Fs%2FsYVaV0B7oav5CI9NAC9PegheNVFl1c%2B%2BANb2MIYBFnxQm%2FXtcrKjXoibaeRT3WbFbpB83H1ceMxjMZSxJlVrieDlHZrQ4Z0lN%2BdOxzvF4CuTJzqOJMEVMl3%2FYEBevWtsp0u1E4tn2ZemyhS14708IzKMp0y3%2BKA6rPtc%2Fx%2FnHKfSMO1y3wpFTyVx%2F8aB8yieG27oaFvExrtC3JMZE%2Ba6WyakeX%2FH0W%2FNcZlq6%2BWd6Ca0Y%2BXebQnksomXoKStzqd8WFn2iRWDiIqPKrQfUkHx024n0Q9381bgfQP%2BUD8y%2FKXxAvhBkZt8LxvoyxBUEbp43HmigSkxSmp1UypasW1K3mEX472exyNJ03n0V%2F653BJ%2BcMekwy4fGwAY6pgFfHPtx7UkEE0yrFP%2FvYhwluf5AfwGfxQHqVTWJLPRQVeuZ8cBJ1HSH6UvydYFhjU332lbnG40ZwMm4QvGaT56CaC7bxHAALAj%2BSNs4z%2Br%2F4z4LOyWY397bIDBsNRN4BfXd8XBjx4vkCX7M4EH7idhoNNfcO38tIH4i7Km3lXrRRA1JDFeM%2FGEaLazJMcWrVIwoNNax7XSCfxmXGzimacZESL1jXXdc&X-Amz-Signature=c0b0b1424c8867a795eea6eab4288b2b3a6d4823e6d804f1b2960c307b594462&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBV4WYM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEAy55w7jOx0T3G5WaYHgA5hVND3ssfdWfFd3SnkAMJwIgF2aAfqvlywWjOSH%2Bx85sMKiRwP%2BQs1agbPFT%2F5RLt%2B4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMJa3gU4qdrrxWEuSircA8nS%2F3Z%2BmycMKGHlA2CWF7BbpnKsfGYqZnWW2hjV3N2JUpTniv6gMQ9zNCexRHbCO%2FzVMHmzmJi51K%2FtsCOMWIzynS%2BSOg%2B0wr0FlTuVgFP2m6Dy%2FDNvqC7N42RNV3GfiFqPTEO06J8u%2FASfOrVYylpnmyTYXGgqpMir3CCpMFOaQePlo%2FkjwbDrOBOpbNLfrTbVgIOxEsW%2B8MuumfmpseROyNLs71eFCZwyVHvKbK%2BB1po%2FG9LyoMkjzn3u0sX%2BEsHGChnoXgfeQEXworNprCr3BjdXMa7rzsKlG9Cv0WynDWcMKHLgFH0XO41R4ld6Kk9%2FvzPBs7RctmT02IqCqGPExjCdRCTxSxIvcRm3lYVqC%2FSdBsmH3qhDZfrcy8vwxgH%2F1gVMeKiPvZ9sdJgcbZSo9Twyib4hqYBQxFrbqrkPrQuQemrYW0Mj%2BXRLhe3pK7mF5WMVZuPx0v2mq7sdu5fKqKsXsI6%2BpqKHgGy9Yam2ZzCJXoq7Te%2Fb2ul1AxyZb0AMACGuA19JrjVp6C0j%2F%2F1zVWTdM1lAjyD4%2BaISswLVPOQlJtAnqnHwpqqZf7MIRfVuVX%2BP9eigBU6Rn1kntAc7mL1kTnN9s5m2gOJ1BqE8lUU4VEa7V957IgkWMM6OicAGOqUBTrg5Jv5Y2Cryk9g7rsZ7SfOh6uwOHg%2FxOJJFZILP3osF0OY8Y2uTiTAaB0k4Nq%2F3LidEt%2B8dinlqq9hleHlQN%2FqSbQZY12jbQcVrxrhiTpYbiRHnKnwI4PggXbzG7trmRbaeqYuues0CVinQ%2BhjR7hW35moBnAEFR2m6wV5IKb988NAELESulakpGQf%2B5eIrgKRpvCRf1WHf71iaReZxtT3ORuIa&X-Amz-Signature=90c8ebd5efe391a98167fb0107b7d725b93fd6f69479068c70f1248c26f543c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBV4WYM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEAy55w7jOx0T3G5WaYHgA5hVND3ssfdWfFd3SnkAMJwIgF2aAfqvlywWjOSH%2Bx85sMKiRwP%2BQs1agbPFT%2F5RLt%2B4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMJa3gU4qdrrxWEuSircA8nS%2F3Z%2BmycMKGHlA2CWF7BbpnKsfGYqZnWW2hjV3N2JUpTniv6gMQ9zNCexRHbCO%2FzVMHmzmJi51K%2FtsCOMWIzynS%2BSOg%2B0wr0FlTuVgFP2m6Dy%2FDNvqC7N42RNV3GfiFqPTEO06J8u%2FASfOrVYylpnmyTYXGgqpMir3CCpMFOaQePlo%2FkjwbDrOBOpbNLfrTbVgIOxEsW%2B8MuumfmpseROyNLs71eFCZwyVHvKbK%2BB1po%2FG9LyoMkjzn3u0sX%2BEsHGChnoXgfeQEXworNprCr3BjdXMa7rzsKlG9Cv0WynDWcMKHLgFH0XO41R4ld6Kk9%2FvzPBs7RctmT02IqCqGPExjCdRCTxSxIvcRm3lYVqC%2FSdBsmH3qhDZfrcy8vwxgH%2F1gVMeKiPvZ9sdJgcbZSo9Twyib4hqYBQxFrbqrkPrQuQemrYW0Mj%2BXRLhe3pK7mF5WMVZuPx0v2mq7sdu5fKqKsXsI6%2BpqKHgGy9Yam2ZzCJXoq7Te%2Fb2ul1AxyZb0AMACGuA19JrjVp6C0j%2F%2F1zVWTdM1lAjyD4%2BaISswLVPOQlJtAnqnHwpqqZf7MIRfVuVX%2BP9eigBU6Rn1kntAc7mL1kTnN9s5m2gOJ1BqE8lUU4VEa7V957IgkWMM6OicAGOqUBTrg5Jv5Y2Cryk9g7rsZ7SfOh6uwOHg%2FxOJJFZILP3osF0OY8Y2uTiTAaB0k4Nq%2F3LidEt%2B8dinlqq9hleHlQN%2FqSbQZY12jbQcVrxrhiTpYbiRHnKnwI4PggXbzG7trmRbaeqYuues0CVinQ%2BhjR7hW35moBnAEFR2m6wV5IKb988NAELESulakpGQf%2B5eIrgKRpvCRf1WHf71iaReZxtT3ORuIa&X-Amz-Signature=2991642d42f045493b1afc9389d11b10c28c8bd515e479ce4000a403b74161b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBV4WYM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEAy55w7jOx0T3G5WaYHgA5hVND3ssfdWfFd3SnkAMJwIgF2aAfqvlywWjOSH%2Bx85sMKiRwP%2BQs1agbPFT%2F5RLt%2B4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMJa3gU4qdrrxWEuSircA8nS%2F3Z%2BmycMKGHlA2CWF7BbpnKsfGYqZnWW2hjV3N2JUpTniv6gMQ9zNCexRHbCO%2FzVMHmzmJi51K%2FtsCOMWIzynS%2BSOg%2B0wr0FlTuVgFP2m6Dy%2FDNvqC7N42RNV3GfiFqPTEO06J8u%2FASfOrVYylpnmyTYXGgqpMir3CCpMFOaQePlo%2FkjwbDrOBOpbNLfrTbVgIOxEsW%2B8MuumfmpseROyNLs71eFCZwyVHvKbK%2BB1po%2FG9LyoMkjzn3u0sX%2BEsHGChnoXgfeQEXworNprCr3BjdXMa7rzsKlG9Cv0WynDWcMKHLgFH0XO41R4ld6Kk9%2FvzPBs7RctmT02IqCqGPExjCdRCTxSxIvcRm3lYVqC%2FSdBsmH3qhDZfrcy8vwxgH%2F1gVMeKiPvZ9sdJgcbZSo9Twyib4hqYBQxFrbqrkPrQuQemrYW0Mj%2BXRLhe3pK7mF5WMVZuPx0v2mq7sdu5fKqKsXsI6%2BpqKHgGy9Yam2ZzCJXoq7Te%2Fb2ul1AxyZb0AMACGuA19JrjVp6C0j%2F%2F1zVWTdM1lAjyD4%2BaISswLVPOQlJtAnqnHwpqqZf7MIRfVuVX%2BP9eigBU6Rn1kntAc7mL1kTnN9s5m2gOJ1BqE8lUU4VEa7V957IgkWMM6OicAGOqUBTrg5Jv5Y2Cryk9g7rsZ7SfOh6uwOHg%2FxOJJFZILP3osF0OY8Y2uTiTAaB0k4Nq%2F3LidEt%2B8dinlqq9hleHlQN%2FqSbQZY12jbQcVrxrhiTpYbiRHnKnwI4PggXbzG7trmRbaeqYuues0CVinQ%2BhjR7hW35moBnAEFR2m6wV5IKb988NAELESulakpGQf%2B5eIrgKRpvCRf1WHf71iaReZxtT3ORuIa&X-Amz-Signature=3a378886cfa471516bad22fb25c94c28d67a73b9cd7a5195d765e5051d459d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBV4WYM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEAy55w7jOx0T3G5WaYHgA5hVND3ssfdWfFd3SnkAMJwIgF2aAfqvlywWjOSH%2Bx85sMKiRwP%2BQs1agbPFT%2F5RLt%2B4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMJa3gU4qdrrxWEuSircA8nS%2F3Z%2BmycMKGHlA2CWF7BbpnKsfGYqZnWW2hjV3N2JUpTniv6gMQ9zNCexRHbCO%2FzVMHmzmJi51K%2FtsCOMWIzynS%2BSOg%2B0wr0FlTuVgFP2m6Dy%2FDNvqC7N42RNV3GfiFqPTEO06J8u%2FASfOrVYylpnmyTYXGgqpMir3CCpMFOaQePlo%2FkjwbDrOBOpbNLfrTbVgIOxEsW%2B8MuumfmpseROyNLs71eFCZwyVHvKbK%2BB1po%2FG9LyoMkjzn3u0sX%2BEsHGChnoXgfeQEXworNprCr3BjdXMa7rzsKlG9Cv0WynDWcMKHLgFH0XO41R4ld6Kk9%2FvzPBs7RctmT02IqCqGPExjCdRCTxSxIvcRm3lYVqC%2FSdBsmH3qhDZfrcy8vwxgH%2F1gVMeKiPvZ9sdJgcbZSo9Twyib4hqYBQxFrbqrkPrQuQemrYW0Mj%2BXRLhe3pK7mF5WMVZuPx0v2mq7sdu5fKqKsXsI6%2BpqKHgGy9Yam2ZzCJXoq7Te%2Fb2ul1AxyZb0AMACGuA19JrjVp6C0j%2F%2F1zVWTdM1lAjyD4%2BaISswLVPOQlJtAnqnHwpqqZf7MIRfVuVX%2BP9eigBU6Rn1kntAc7mL1kTnN9s5m2gOJ1BqE8lUU4VEa7V957IgkWMM6OicAGOqUBTrg5Jv5Y2Cryk9g7rsZ7SfOh6uwOHg%2FxOJJFZILP3osF0OY8Y2uTiTAaB0k4Nq%2F3LidEt%2B8dinlqq9hleHlQN%2FqSbQZY12jbQcVrxrhiTpYbiRHnKnwI4PggXbzG7trmRbaeqYuues0CVinQ%2BhjR7hW35moBnAEFR2m6wV5IKb988NAELESulakpGQf%2B5eIrgKRpvCRf1WHf71iaReZxtT3ORuIa&X-Amz-Signature=fd2285e39a60c4577db0c60a9b6f3b9a1535361be2ad4320a6ffc9dacca98c54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBV4WYM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEAy55w7jOx0T3G5WaYHgA5hVND3ssfdWfFd3SnkAMJwIgF2aAfqvlywWjOSH%2Bx85sMKiRwP%2BQs1agbPFT%2F5RLt%2B4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMJa3gU4qdrrxWEuSircA8nS%2F3Z%2BmycMKGHlA2CWF7BbpnKsfGYqZnWW2hjV3N2JUpTniv6gMQ9zNCexRHbCO%2FzVMHmzmJi51K%2FtsCOMWIzynS%2BSOg%2B0wr0FlTuVgFP2m6Dy%2FDNvqC7N42RNV3GfiFqPTEO06J8u%2FASfOrVYylpnmyTYXGgqpMir3CCpMFOaQePlo%2FkjwbDrOBOpbNLfrTbVgIOxEsW%2B8MuumfmpseROyNLs71eFCZwyVHvKbK%2BB1po%2FG9LyoMkjzn3u0sX%2BEsHGChnoXgfeQEXworNprCr3BjdXMa7rzsKlG9Cv0WynDWcMKHLgFH0XO41R4ld6Kk9%2FvzPBs7RctmT02IqCqGPExjCdRCTxSxIvcRm3lYVqC%2FSdBsmH3qhDZfrcy8vwxgH%2F1gVMeKiPvZ9sdJgcbZSo9Twyib4hqYBQxFrbqrkPrQuQemrYW0Mj%2BXRLhe3pK7mF5WMVZuPx0v2mq7sdu5fKqKsXsI6%2BpqKHgGy9Yam2ZzCJXoq7Te%2Fb2ul1AxyZb0AMACGuA19JrjVp6C0j%2F%2F1zVWTdM1lAjyD4%2BaISswLVPOQlJtAnqnHwpqqZf7MIRfVuVX%2BP9eigBU6Rn1kntAc7mL1kTnN9s5m2gOJ1BqE8lUU4VEa7V957IgkWMM6OicAGOqUBTrg5Jv5Y2Cryk9g7rsZ7SfOh6uwOHg%2FxOJJFZILP3osF0OY8Y2uTiTAaB0k4Nq%2F3LidEt%2B8dinlqq9hleHlQN%2FqSbQZY12jbQcVrxrhiTpYbiRHnKnwI4PggXbzG7trmRbaeqYuues0CVinQ%2BhjR7hW35moBnAEFR2m6wV5IKb988NAELESulakpGQf%2B5eIrgKRpvCRf1WHf71iaReZxtT3ORuIa&X-Amz-Signature=e3ffbb1be3a7b0b5b2726da8ecf3f24e4663d4f86669fbd9824eb0530a3f8f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBV4WYM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEAy55w7jOx0T3G5WaYHgA5hVND3ssfdWfFd3SnkAMJwIgF2aAfqvlywWjOSH%2Bx85sMKiRwP%2BQs1agbPFT%2F5RLt%2B4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMJa3gU4qdrrxWEuSircA8nS%2F3Z%2BmycMKGHlA2CWF7BbpnKsfGYqZnWW2hjV3N2JUpTniv6gMQ9zNCexRHbCO%2FzVMHmzmJi51K%2FtsCOMWIzynS%2BSOg%2B0wr0FlTuVgFP2m6Dy%2FDNvqC7N42RNV3GfiFqPTEO06J8u%2FASfOrVYylpnmyTYXGgqpMir3CCpMFOaQePlo%2FkjwbDrOBOpbNLfrTbVgIOxEsW%2B8MuumfmpseROyNLs71eFCZwyVHvKbK%2BB1po%2FG9LyoMkjzn3u0sX%2BEsHGChnoXgfeQEXworNprCr3BjdXMa7rzsKlG9Cv0WynDWcMKHLgFH0XO41R4ld6Kk9%2FvzPBs7RctmT02IqCqGPExjCdRCTxSxIvcRm3lYVqC%2FSdBsmH3qhDZfrcy8vwxgH%2F1gVMeKiPvZ9sdJgcbZSo9Twyib4hqYBQxFrbqrkPrQuQemrYW0Mj%2BXRLhe3pK7mF5WMVZuPx0v2mq7sdu5fKqKsXsI6%2BpqKHgGy9Yam2ZzCJXoq7Te%2Fb2ul1AxyZb0AMACGuA19JrjVp6C0j%2F%2F1zVWTdM1lAjyD4%2BaISswLVPOQlJtAnqnHwpqqZf7MIRfVuVX%2BP9eigBU6Rn1kntAc7mL1kTnN9s5m2gOJ1BqE8lUU4VEa7V957IgkWMM6OicAGOqUBTrg5Jv5Y2Cryk9g7rsZ7SfOh6uwOHg%2FxOJJFZILP3osF0OY8Y2uTiTAaB0k4Nq%2F3LidEt%2B8dinlqq9hleHlQN%2FqSbQZY12jbQcVrxrhiTpYbiRHnKnwI4PggXbzG7trmRbaeqYuues0CVinQ%2BhjR7hW35moBnAEFR2m6wV5IKb988NAELESulakpGQf%2B5eIrgKRpvCRf1WHf71iaReZxtT3ORuIa&X-Amz-Signature=b2de922f122d13a0a30fe2217ca16f6e0d6b90f546aae6723b9f2a6ee2a20ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBV4WYM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEAy55w7jOx0T3G5WaYHgA5hVND3ssfdWfFd3SnkAMJwIgF2aAfqvlywWjOSH%2Bx85sMKiRwP%2BQs1agbPFT%2F5RLt%2B4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMJa3gU4qdrrxWEuSircA8nS%2F3Z%2BmycMKGHlA2CWF7BbpnKsfGYqZnWW2hjV3N2JUpTniv6gMQ9zNCexRHbCO%2FzVMHmzmJi51K%2FtsCOMWIzynS%2BSOg%2B0wr0FlTuVgFP2m6Dy%2FDNvqC7N42RNV3GfiFqPTEO06J8u%2FASfOrVYylpnmyTYXGgqpMir3CCpMFOaQePlo%2FkjwbDrOBOpbNLfrTbVgIOxEsW%2B8MuumfmpseROyNLs71eFCZwyVHvKbK%2BB1po%2FG9LyoMkjzn3u0sX%2BEsHGChnoXgfeQEXworNprCr3BjdXMa7rzsKlG9Cv0WynDWcMKHLgFH0XO41R4ld6Kk9%2FvzPBs7RctmT02IqCqGPExjCdRCTxSxIvcRm3lYVqC%2FSdBsmH3qhDZfrcy8vwxgH%2F1gVMeKiPvZ9sdJgcbZSo9Twyib4hqYBQxFrbqrkPrQuQemrYW0Mj%2BXRLhe3pK7mF5WMVZuPx0v2mq7sdu5fKqKsXsI6%2BpqKHgGy9Yam2ZzCJXoq7Te%2Fb2ul1AxyZb0AMACGuA19JrjVp6C0j%2F%2F1zVWTdM1lAjyD4%2BaISswLVPOQlJtAnqnHwpqqZf7MIRfVuVX%2BP9eigBU6Rn1kntAc7mL1kTnN9s5m2gOJ1BqE8lUU4VEa7V957IgkWMM6OicAGOqUBTrg5Jv5Y2Cryk9g7rsZ7SfOh6uwOHg%2FxOJJFZILP3osF0OY8Y2uTiTAaB0k4Nq%2F3LidEt%2B8dinlqq9hleHlQN%2FqSbQZY12jbQcVrxrhiTpYbiRHnKnwI4PggXbzG7trmRbaeqYuues0CVinQ%2BhjR7hW35moBnAEFR2m6wV5IKb988NAELESulakpGQf%2B5eIrgKRpvCRf1WHf71iaReZxtT3ORuIa&X-Amz-Signature=a4beaa09ce4d8f5971e7a55225ada72eda19757be3f56d1c4a3089e447cf8787&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBV4WYM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEAy55w7jOx0T3G5WaYHgA5hVND3ssfdWfFd3SnkAMJwIgF2aAfqvlywWjOSH%2Bx85sMKiRwP%2BQs1agbPFT%2F5RLt%2B4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMJa3gU4qdrrxWEuSircA8nS%2F3Z%2BmycMKGHlA2CWF7BbpnKsfGYqZnWW2hjV3N2JUpTniv6gMQ9zNCexRHbCO%2FzVMHmzmJi51K%2FtsCOMWIzynS%2BSOg%2B0wr0FlTuVgFP2m6Dy%2FDNvqC7N42RNV3GfiFqPTEO06J8u%2FASfOrVYylpnmyTYXGgqpMir3CCpMFOaQePlo%2FkjwbDrOBOpbNLfrTbVgIOxEsW%2B8MuumfmpseROyNLs71eFCZwyVHvKbK%2BB1po%2FG9LyoMkjzn3u0sX%2BEsHGChnoXgfeQEXworNprCr3BjdXMa7rzsKlG9Cv0WynDWcMKHLgFH0XO41R4ld6Kk9%2FvzPBs7RctmT02IqCqGPExjCdRCTxSxIvcRm3lYVqC%2FSdBsmH3qhDZfrcy8vwxgH%2F1gVMeKiPvZ9sdJgcbZSo9Twyib4hqYBQxFrbqrkPrQuQemrYW0Mj%2BXRLhe3pK7mF5WMVZuPx0v2mq7sdu5fKqKsXsI6%2BpqKHgGy9Yam2ZzCJXoq7Te%2Fb2ul1AxyZb0AMACGuA19JrjVp6C0j%2F%2F1zVWTdM1lAjyD4%2BaISswLVPOQlJtAnqnHwpqqZf7MIRfVuVX%2BP9eigBU6Rn1kntAc7mL1kTnN9s5m2gOJ1BqE8lUU4VEa7V957IgkWMM6OicAGOqUBTrg5Jv5Y2Cryk9g7rsZ7SfOh6uwOHg%2FxOJJFZILP3osF0OY8Y2uTiTAaB0k4Nq%2F3LidEt%2B8dinlqq9hleHlQN%2FqSbQZY12jbQcVrxrhiTpYbiRHnKnwI4PggXbzG7trmRbaeqYuues0CVinQ%2BhjR7hW35moBnAEFR2m6wV5IKb988NAELESulakpGQf%2B5eIrgKRpvCRf1WHf71iaReZxtT3ORuIa&X-Amz-Signature=2ee804877e0a5de6708427d93010430b85b02527b95a25259051c9bf86133422&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

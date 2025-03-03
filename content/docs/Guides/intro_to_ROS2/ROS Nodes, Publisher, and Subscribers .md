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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=3fe4286bfb9878bfc299e53b70a472d4fced598eb660d8d82e26eeea6652a197&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=9204a5e08f191eb4e24b80d540b14eef57080e6bc6657125290f99b346dd7bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=20b80734dfd50d2958a497a592d2550ca903c3b00e57540969c2f981972e4f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=2d6be1fbfb753d27638e5783fd5af56dbf4018ebc3e5d15dd95966939a37ed94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=0bd9629dfe81c6300ad86ccd6076ecd0c69676a4481da7fd20263e4ff4a62d11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=de95d79e328044afcef2799e72c88982026fa6a9a398d1851e1bd83aabc7aa58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=a765b0a25194144e26c5a39fb75eb73b9867583270fffd83a65461219c6ace76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQOANLL%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzI%2FTnN%2B1kGqHwY5BM1JMsNKfWPH7xidaQjxi%2FvdzLgIgJA5%2B0H2P3Gq3GShrou9MeeTWAje8l1nDPQdCZVzNo6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyaJ5qMG7vmhABV0yrcAwV5YUmrPK4uHQZ0EeQz7IoIOrGGfOgcQggFMljl3i73cD8Z%2BNyRluGlPaYvj45pTkIh4Pmm3y2lJl6YALqTwP%2BAyzSEQhzi9psI%2FifvgYgQB9M1%2BxP3IqYqI%2F7N1%2FQ%2F49HCuaVWkcorPzdJH3I7mKUpqfOnl0yJc%2BFP09mlh1jDZ0dv3m7jB5TEWg2lPNjjdATFIOOzZzR0cadM7Knwkk9WoglMampMvW%2FSHz%2Bx0mpwZIkKMbhTK%2FQFfSWCL902xuxPJYGWlaXC02KjYba3gBSCQj%2BSrDRIfAEmxCUyEUfsGokwQ07p4F9k8%2Bdp3FiPxz47RzO2T9LUbE1jqSCCxfqjWICiac8DqBy0PxAaSL%2FpNarcmABHwGnRlY6JUH9R9bdacv0BPkxYo7ZxAi%2FhhjtV5aCs1sbiNMT9NaRrjnewbd%2BwpzxBB96brPDkoWPnMTFsJpihAsUIeRY5hFqoeZ0MSivAy6AWZAVyDCfMoAylAVBY3oHCbwqamude7XlzySBgHAIx2hca%2BrOn%2B5L0kxE270MbbpzW8u7hcmd4g9TX8WULer5yO%2BopxcILusnl1lYsN8vcdphs7sNzv576%2FlfpJxiwfY4%2FG8P7irzqYJUv5skSTUKxGDo4G1lOMLralr4GOqUB2RVbeF11tezyMEGyPuDWZfYqRMNVxZ82t%2Fz8Luz8AyqqaqbgsTK4s9W0lP5t0opkY%2F%2FlQLQjg6dUlS%2BJGvdA%2Fyxxm4GKtq6xm4kv44IByhqBySCuhHF%2Fly%2FB2crSqxFqfK2ppls9G5QjTrqHYhprhh6H21UXAKQCmHFSO%2BP4woJQMyYPnrAItizkcM5074bUX8NdXqq1%2FGYzxKYjhQpMf2Q4XcWN&X-Amz-Signature=c6752988e52d5bcea5dd224bd67942089c4e0195564d2d007dc3c9902bd11d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUWPZTS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFGKhUuqOimzhQCqD%2FTZNVSZqKZf0i56G9O0XzjJKbwIhAIbroF4QebIrCpXzkgUpH%2Fif1UQUO9sUJGjxhodQIMw8Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwzfGgQnbuRNOz4oT8q3AO1M6NNMcDRBm7HM6XnMQcCyRL1mui%2B4WtK1JZNlg4PYKisDCvk5pDpmc67M5sVYWuDOywzdxsiyrYsPOLDQ%2FZvyR%2Bs6fAHH74vPKjw3josIfBwIE8iv7Qvo8fzXn%2BCYa4%2FbzTnWc7hX8XFbY%2Fx2MqEEpEDMnBKz%2FKy5s4hAaNaTo0vsokqhahClkDMiAAwepG5%2FQxnVOApB%2FroKWEQActtvC8hpCiPL%2Bqmxk%2BHmcSuLKSvglOLwx1gMLTysIW8XXhaDAbLPe%2BpOw836qZclrbCDylfIO8VdDfhT5VyZHKqkPf%2FEz4S8r0YnzYz3HFbXN9KK4H3VP%2FS9PU0FNPyfgh7xVuBFmrTd%2B6lmW2wMCm7yk0UefaPxOypRwwokNA34wG9%2BZYg%2Fa1DBfqs8f2PxImYKLx068frTyvyqZaPBBOrgCqhgMV0vNs3yApqcToB9YgQZbWY3fxu2xBQSSUzgzH%2BET0JScS5LmDwsUcvsg2Qe3tkQxxZ6V11R6omVgs2CeaRYV8CbR77YiB8Yt%2FdQM7A9EgXs6sq5M70iF%2F%2BbYu%2BS3aYecIBlpeFMOEpfJRp22PQdRtJk4qqF4nUeQKb4BkhqyBmNGCGqNF3Z%2FYPZi9Xdvx5vKD4myLU4VVlVzCc%2BZ7BBjqkAVbHAkiQ2ZZ91CqUeEM5DB2Qwc%2F3g19%2BuQi9c3AP5omdRw9mOksq%2BSNORIDYVfuVe3VwSCxJc4liGdkvtBA0fTdnoSkSddY0qyGFHTajpAmmPpNcGhLS9CHQaNHsRA3wBHS6G3MCf7qgy%2B%2FcRajNjhMnO2tbIHFhnAzd0ELzquN%2FpqHr0E%2FS3HROpSeeSIafBg6YTqaY9CvnEqd1sNOC6QwmxQ3A&X-Amz-Signature=674e37740b93b02ec51f154b033224160442e2cd40d99e402f910c62e548dc5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUWPZTS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFGKhUuqOimzhQCqD%2FTZNVSZqKZf0i56G9O0XzjJKbwIhAIbroF4QebIrCpXzkgUpH%2Fif1UQUO9sUJGjxhodQIMw8Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwzfGgQnbuRNOz4oT8q3AO1M6NNMcDRBm7HM6XnMQcCyRL1mui%2B4WtK1JZNlg4PYKisDCvk5pDpmc67M5sVYWuDOywzdxsiyrYsPOLDQ%2FZvyR%2Bs6fAHH74vPKjw3josIfBwIE8iv7Qvo8fzXn%2BCYa4%2FbzTnWc7hX8XFbY%2Fx2MqEEpEDMnBKz%2FKy5s4hAaNaTo0vsokqhahClkDMiAAwepG5%2FQxnVOApB%2FroKWEQActtvC8hpCiPL%2Bqmxk%2BHmcSuLKSvglOLwx1gMLTysIW8XXhaDAbLPe%2BpOw836qZclrbCDylfIO8VdDfhT5VyZHKqkPf%2FEz4S8r0YnzYz3HFbXN9KK4H3VP%2FS9PU0FNPyfgh7xVuBFmrTd%2B6lmW2wMCm7yk0UefaPxOypRwwokNA34wG9%2BZYg%2Fa1DBfqs8f2PxImYKLx068frTyvyqZaPBBOrgCqhgMV0vNs3yApqcToB9YgQZbWY3fxu2xBQSSUzgzH%2BET0JScS5LmDwsUcvsg2Qe3tkQxxZ6V11R6omVgs2CeaRYV8CbR77YiB8Yt%2FdQM7A9EgXs6sq5M70iF%2F%2BbYu%2BS3aYecIBlpeFMOEpfJRp22PQdRtJk4qqF4nUeQKb4BkhqyBmNGCGqNF3Z%2FYPZi9Xdvx5vKD4myLU4VVlVzCc%2BZ7BBjqkAVbHAkiQ2ZZ91CqUeEM5DB2Qwc%2F3g19%2BuQi9c3AP5omdRw9mOksq%2BSNORIDYVfuVe3VwSCxJc4liGdkvtBA0fTdnoSkSddY0qyGFHTajpAmmPpNcGhLS9CHQaNHsRA3wBHS6G3MCf7qgy%2B%2FcRajNjhMnO2tbIHFhnAzd0ELzquN%2FpqHr0E%2FS3HROpSeeSIafBg6YTqaY9CvnEqd1sNOC6QwmxQ3A&X-Amz-Signature=0e42038d67cde88484f9c29897a22021392176b3ad61886ae97d6d3e20a58406&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUWPZTS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFGKhUuqOimzhQCqD%2FTZNVSZqKZf0i56G9O0XzjJKbwIhAIbroF4QebIrCpXzkgUpH%2Fif1UQUO9sUJGjxhodQIMw8Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwzfGgQnbuRNOz4oT8q3AO1M6NNMcDRBm7HM6XnMQcCyRL1mui%2B4WtK1JZNlg4PYKisDCvk5pDpmc67M5sVYWuDOywzdxsiyrYsPOLDQ%2FZvyR%2Bs6fAHH74vPKjw3josIfBwIE8iv7Qvo8fzXn%2BCYa4%2FbzTnWc7hX8XFbY%2Fx2MqEEpEDMnBKz%2FKy5s4hAaNaTo0vsokqhahClkDMiAAwepG5%2FQxnVOApB%2FroKWEQActtvC8hpCiPL%2Bqmxk%2BHmcSuLKSvglOLwx1gMLTysIW8XXhaDAbLPe%2BpOw836qZclrbCDylfIO8VdDfhT5VyZHKqkPf%2FEz4S8r0YnzYz3HFbXN9KK4H3VP%2FS9PU0FNPyfgh7xVuBFmrTd%2B6lmW2wMCm7yk0UefaPxOypRwwokNA34wG9%2BZYg%2Fa1DBfqs8f2PxImYKLx068frTyvyqZaPBBOrgCqhgMV0vNs3yApqcToB9YgQZbWY3fxu2xBQSSUzgzH%2BET0JScS5LmDwsUcvsg2Qe3tkQxxZ6V11R6omVgs2CeaRYV8CbR77YiB8Yt%2FdQM7A9EgXs6sq5M70iF%2F%2BbYu%2BS3aYecIBlpeFMOEpfJRp22PQdRtJk4qqF4nUeQKb4BkhqyBmNGCGqNF3Z%2FYPZi9Xdvx5vKD4myLU4VVlVzCc%2BZ7BBjqkAVbHAkiQ2ZZ91CqUeEM5DB2Qwc%2F3g19%2BuQi9c3AP5omdRw9mOksq%2BSNORIDYVfuVe3VwSCxJc4liGdkvtBA0fTdnoSkSddY0qyGFHTajpAmmPpNcGhLS9CHQaNHsRA3wBHS6G3MCf7qgy%2B%2FcRajNjhMnO2tbIHFhnAzd0ELzquN%2FpqHr0E%2FS3HROpSeeSIafBg6YTqaY9CvnEqd1sNOC6QwmxQ3A&X-Amz-Signature=8bfb6cb8137e5690835fb071e0bb0e49250b4d45276a7aa2ac721c13aa04e847&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUWPZTS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFGKhUuqOimzhQCqD%2FTZNVSZqKZf0i56G9O0XzjJKbwIhAIbroF4QebIrCpXzkgUpH%2Fif1UQUO9sUJGjxhodQIMw8Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwzfGgQnbuRNOz4oT8q3AO1M6NNMcDRBm7HM6XnMQcCyRL1mui%2B4WtK1JZNlg4PYKisDCvk5pDpmc67M5sVYWuDOywzdxsiyrYsPOLDQ%2FZvyR%2Bs6fAHH74vPKjw3josIfBwIE8iv7Qvo8fzXn%2BCYa4%2FbzTnWc7hX8XFbY%2Fx2MqEEpEDMnBKz%2FKy5s4hAaNaTo0vsokqhahClkDMiAAwepG5%2FQxnVOApB%2FroKWEQActtvC8hpCiPL%2Bqmxk%2BHmcSuLKSvglOLwx1gMLTysIW8XXhaDAbLPe%2BpOw836qZclrbCDylfIO8VdDfhT5VyZHKqkPf%2FEz4S8r0YnzYz3HFbXN9KK4H3VP%2FS9PU0FNPyfgh7xVuBFmrTd%2B6lmW2wMCm7yk0UefaPxOypRwwokNA34wG9%2BZYg%2Fa1DBfqs8f2PxImYKLx068frTyvyqZaPBBOrgCqhgMV0vNs3yApqcToB9YgQZbWY3fxu2xBQSSUzgzH%2BET0JScS5LmDwsUcvsg2Qe3tkQxxZ6V11R6omVgs2CeaRYV8CbR77YiB8Yt%2FdQM7A9EgXs6sq5M70iF%2F%2BbYu%2BS3aYecIBlpeFMOEpfJRp22PQdRtJk4qqF4nUeQKb4BkhqyBmNGCGqNF3Z%2FYPZi9Xdvx5vKD4myLU4VVlVzCc%2BZ7BBjqkAVbHAkiQ2ZZ91CqUeEM5DB2Qwc%2F3g19%2BuQi9c3AP5omdRw9mOksq%2BSNORIDYVfuVe3VwSCxJc4liGdkvtBA0fTdnoSkSddY0qyGFHTajpAmmPpNcGhLS9CHQaNHsRA3wBHS6G3MCf7qgy%2B%2FcRajNjhMnO2tbIHFhnAzd0ELzquN%2FpqHr0E%2FS3HROpSeeSIafBg6YTqaY9CvnEqd1sNOC6QwmxQ3A&X-Amz-Signature=b3825ca624e9d5ae31f217a7d397a81479b825b81b447f5cfa00c94be377e1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUWPZTS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFGKhUuqOimzhQCqD%2FTZNVSZqKZf0i56G9O0XzjJKbwIhAIbroF4QebIrCpXzkgUpH%2Fif1UQUO9sUJGjxhodQIMw8Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwzfGgQnbuRNOz4oT8q3AO1M6NNMcDRBm7HM6XnMQcCyRL1mui%2B4WtK1JZNlg4PYKisDCvk5pDpmc67M5sVYWuDOywzdxsiyrYsPOLDQ%2FZvyR%2Bs6fAHH74vPKjw3josIfBwIE8iv7Qvo8fzXn%2BCYa4%2FbzTnWc7hX8XFbY%2Fx2MqEEpEDMnBKz%2FKy5s4hAaNaTo0vsokqhahClkDMiAAwepG5%2FQxnVOApB%2FroKWEQActtvC8hpCiPL%2Bqmxk%2BHmcSuLKSvglOLwx1gMLTysIW8XXhaDAbLPe%2BpOw836qZclrbCDylfIO8VdDfhT5VyZHKqkPf%2FEz4S8r0YnzYz3HFbXN9KK4H3VP%2FS9PU0FNPyfgh7xVuBFmrTd%2B6lmW2wMCm7yk0UefaPxOypRwwokNA34wG9%2BZYg%2Fa1DBfqs8f2PxImYKLx068frTyvyqZaPBBOrgCqhgMV0vNs3yApqcToB9YgQZbWY3fxu2xBQSSUzgzH%2BET0JScS5LmDwsUcvsg2Qe3tkQxxZ6V11R6omVgs2CeaRYV8CbR77YiB8Yt%2FdQM7A9EgXs6sq5M70iF%2F%2BbYu%2BS3aYecIBlpeFMOEpfJRp22PQdRtJk4qqF4nUeQKb4BkhqyBmNGCGqNF3Z%2FYPZi9Xdvx5vKD4myLU4VVlVzCc%2BZ7BBjqkAVbHAkiQ2ZZ91CqUeEM5DB2Qwc%2F3g19%2BuQi9c3AP5omdRw9mOksq%2BSNORIDYVfuVe3VwSCxJc4liGdkvtBA0fTdnoSkSddY0qyGFHTajpAmmPpNcGhLS9CHQaNHsRA3wBHS6G3MCf7qgy%2B%2FcRajNjhMnO2tbIHFhnAzd0ELzquN%2FpqHr0E%2FS3HROpSeeSIafBg6YTqaY9CvnEqd1sNOC6QwmxQ3A&X-Amz-Signature=9805e9e4aa7c0a18124127dc15f6d1dbcd1c2e30aaa9428d1771487098565a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUWPZTS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFGKhUuqOimzhQCqD%2FTZNVSZqKZf0i56G9O0XzjJKbwIhAIbroF4QebIrCpXzkgUpH%2Fif1UQUO9sUJGjxhodQIMw8Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwzfGgQnbuRNOz4oT8q3AO1M6NNMcDRBm7HM6XnMQcCyRL1mui%2B4WtK1JZNlg4PYKisDCvk5pDpmc67M5sVYWuDOywzdxsiyrYsPOLDQ%2FZvyR%2Bs6fAHH74vPKjw3josIfBwIE8iv7Qvo8fzXn%2BCYa4%2FbzTnWc7hX8XFbY%2Fx2MqEEpEDMnBKz%2FKy5s4hAaNaTo0vsokqhahClkDMiAAwepG5%2FQxnVOApB%2FroKWEQActtvC8hpCiPL%2Bqmxk%2BHmcSuLKSvglOLwx1gMLTysIW8XXhaDAbLPe%2BpOw836qZclrbCDylfIO8VdDfhT5VyZHKqkPf%2FEz4S8r0YnzYz3HFbXN9KK4H3VP%2FS9PU0FNPyfgh7xVuBFmrTd%2B6lmW2wMCm7yk0UefaPxOypRwwokNA34wG9%2BZYg%2Fa1DBfqs8f2PxImYKLx068frTyvyqZaPBBOrgCqhgMV0vNs3yApqcToB9YgQZbWY3fxu2xBQSSUzgzH%2BET0JScS5LmDwsUcvsg2Qe3tkQxxZ6V11R6omVgs2CeaRYV8CbR77YiB8Yt%2FdQM7A9EgXs6sq5M70iF%2F%2BbYu%2BS3aYecIBlpeFMOEpfJRp22PQdRtJk4qqF4nUeQKb4BkhqyBmNGCGqNF3Z%2FYPZi9Xdvx5vKD4myLU4VVlVzCc%2BZ7BBjqkAVbHAkiQ2ZZ91CqUeEM5DB2Qwc%2F3g19%2BuQi9c3AP5omdRw9mOksq%2BSNORIDYVfuVe3VwSCxJc4liGdkvtBA0fTdnoSkSddY0qyGFHTajpAmmPpNcGhLS9CHQaNHsRA3wBHS6G3MCf7qgy%2B%2FcRajNjhMnO2tbIHFhnAzd0ELzquN%2FpqHr0E%2FS3HROpSeeSIafBg6YTqaY9CvnEqd1sNOC6QwmxQ3A&X-Amz-Signature=b15e80a85d5863949012bb69ba9a0d569b523ce8e656d3ea35a814e4c8be2e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUWPZTS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFGKhUuqOimzhQCqD%2FTZNVSZqKZf0i56G9O0XzjJKbwIhAIbroF4QebIrCpXzkgUpH%2Fif1UQUO9sUJGjxhodQIMw8Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwzfGgQnbuRNOz4oT8q3AO1M6NNMcDRBm7HM6XnMQcCyRL1mui%2B4WtK1JZNlg4PYKisDCvk5pDpmc67M5sVYWuDOywzdxsiyrYsPOLDQ%2FZvyR%2Bs6fAHH74vPKjw3josIfBwIE8iv7Qvo8fzXn%2BCYa4%2FbzTnWc7hX8XFbY%2Fx2MqEEpEDMnBKz%2FKy5s4hAaNaTo0vsokqhahClkDMiAAwepG5%2FQxnVOApB%2FroKWEQActtvC8hpCiPL%2Bqmxk%2BHmcSuLKSvglOLwx1gMLTysIW8XXhaDAbLPe%2BpOw836qZclrbCDylfIO8VdDfhT5VyZHKqkPf%2FEz4S8r0YnzYz3HFbXN9KK4H3VP%2FS9PU0FNPyfgh7xVuBFmrTd%2B6lmW2wMCm7yk0UefaPxOypRwwokNA34wG9%2BZYg%2Fa1DBfqs8f2PxImYKLx068frTyvyqZaPBBOrgCqhgMV0vNs3yApqcToB9YgQZbWY3fxu2xBQSSUzgzH%2BET0JScS5LmDwsUcvsg2Qe3tkQxxZ6V11R6omVgs2CeaRYV8CbR77YiB8Yt%2FdQM7A9EgXs6sq5M70iF%2F%2BbYu%2BS3aYecIBlpeFMOEpfJRp22PQdRtJk4qqF4nUeQKb4BkhqyBmNGCGqNF3Z%2FYPZi9Xdvx5vKD4myLU4VVlVzCc%2BZ7BBjqkAVbHAkiQ2ZZ91CqUeEM5DB2Qwc%2F3g19%2BuQi9c3AP5omdRw9mOksq%2BSNORIDYVfuVe3VwSCxJc4liGdkvtBA0fTdnoSkSddY0qyGFHTajpAmmPpNcGhLS9CHQaNHsRA3wBHS6G3MCf7qgy%2B%2FcRajNjhMnO2tbIHFhnAzd0ELzquN%2FpqHr0E%2FS3HROpSeeSIafBg6YTqaY9CvnEqd1sNOC6QwmxQ3A&X-Amz-Signature=f94cbf022d6e686991f949b8b2aebcb780f86f056ba1dd86a4760418a817916e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AUWPZTS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFGKhUuqOimzhQCqD%2FTZNVSZqKZf0i56G9O0XzjJKbwIhAIbroF4QebIrCpXzkgUpH%2Fif1UQUO9sUJGjxhodQIMw8Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwzfGgQnbuRNOz4oT8q3AO1M6NNMcDRBm7HM6XnMQcCyRL1mui%2B4WtK1JZNlg4PYKisDCvk5pDpmc67M5sVYWuDOywzdxsiyrYsPOLDQ%2FZvyR%2Bs6fAHH74vPKjw3josIfBwIE8iv7Qvo8fzXn%2BCYa4%2FbzTnWc7hX8XFbY%2Fx2MqEEpEDMnBKz%2FKy5s4hAaNaTo0vsokqhahClkDMiAAwepG5%2FQxnVOApB%2FroKWEQActtvC8hpCiPL%2Bqmxk%2BHmcSuLKSvglOLwx1gMLTysIW8XXhaDAbLPe%2BpOw836qZclrbCDylfIO8VdDfhT5VyZHKqkPf%2FEz4S8r0YnzYz3HFbXN9KK4H3VP%2FS9PU0FNPyfgh7xVuBFmrTd%2B6lmW2wMCm7yk0UefaPxOypRwwokNA34wG9%2BZYg%2Fa1DBfqs8f2PxImYKLx068frTyvyqZaPBBOrgCqhgMV0vNs3yApqcToB9YgQZbWY3fxu2xBQSSUzgzH%2BET0JScS5LmDwsUcvsg2Qe3tkQxxZ6V11R6omVgs2CeaRYV8CbR77YiB8Yt%2FdQM7A9EgXs6sq5M70iF%2F%2BbYu%2BS3aYecIBlpeFMOEpfJRp22PQdRtJk4qqF4nUeQKb4BkhqyBmNGCGqNF3Z%2FYPZi9Xdvx5vKD4myLU4VVlVzCc%2BZ7BBjqkAVbHAkiQ2ZZ91CqUeEM5DB2Qwc%2F3g19%2BuQi9c3AP5omdRw9mOksq%2BSNORIDYVfuVe3VwSCxJc4liGdkvtBA0fTdnoSkSddY0qyGFHTajpAmmPpNcGhLS9CHQaNHsRA3wBHS6G3MCf7qgy%2B%2FcRajNjhMnO2tbIHFhnAzd0ELzquN%2FpqHr0E%2FS3HROpSeeSIafBg6YTqaY9CvnEqd1sNOC6QwmxQ3A&X-Amz-Signature=f5c501b421616f1231ce461d5db9d937a0853dac8e10f0c19f19ff78550d2f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

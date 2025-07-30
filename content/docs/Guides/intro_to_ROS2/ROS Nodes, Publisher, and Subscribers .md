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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJLT4KE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDzspyVUpbLOFYeB%2FAfAwmLkAZ%2FnL9LT%2F%2F%2FOE9FQncgIhAJDDAuSB1eYihMIgKHw6fv8XacWs5oUdNOoKqcWuFk5XKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkeaahy9yW35uzFKIq3APtalifAXEe%2BL9hUSU5jzAa5BqL52IwAWXmXxkCN7%2BMxHwLMJdWpHLZvr7HKLeI8MTVNHayRAnDHhCN%2FzeoxqnM%2BT8GYZ4QSYbZjVtfgV6mDjFgzR3QedMSid90kqijp8wf5KZ0PXM%2FAnvw6%2Fx1jNOaRiu92np09LE55NmVmNk6a7%2Bw4%2FUG4utEUMw888NhG3Li1wuE9YaNwMbL95yTOo8kOc0EQp274tZCb%2Bp1WkI9FIMPuIZKhZ6IX7v8FriusZVOMHS%2BdzakdQDSldb7uHTSRJDvfb9qSxTBzqCC4LG0O4K%2Bfo4bQufd0yyOYJz4kO019b6MA3Ttb6NcsQvN%2BwfKkwXXL0qz16eZADSjVgSK1h0d5TofMLF1odWqyASfGZGcBi2AY6JQWDMRuR6e6HMarQa6Vo74F0TwkzG%2F238E3FuNrYWRMw8S5iUdXqiZwweWDZxig%2FZkZDOYeaoHtS0nA8OOn2A%2Ffxq4RevQmrl3lBBHACGjMlriNhzYgZ71QDVVrUSVAJIsftAuXmWyOUIh6YBc%2BiXS4GxhAsBiS%2FSBS2HTFCgpOW%2FrgZn5lvZ%2FteKX7bUQyyWqE1xoNztRAhWcbrFkQA4U3VspUN56PhHT3U57%2B1QOZwfCEc92QjCsparEBjqkAdLVAsnnQBGpqtShucb2SLfJkqFJfJX1PPXXyp8m%2FeYU%2F%2FRaoshXE%2F%2BxxyQ50mWEOAXIcfHhF%2B%2BFBf6yWT56UklrRZNmtbKPmiAnZnuIJRlUYH%2Fd4J3aXqsipGK%2FahGpu0sEsR5BpaI5%2BD2ibOT9VPtXBeCGrNPI9iz5ByjaRKm%2FQ9R5Wpz6Qz7sJk3tpsjB5q%2FBkNvRWFYUBHkQJsmqCYHIpjLY&X-Amz-Signature=f0703c9f28dae7de9853b00fa71a23a05ce1cd76f229131a1f74f1bbee11aad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJLT4KE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDzspyVUpbLOFYeB%2FAfAwmLkAZ%2FnL9LT%2F%2F%2FOE9FQncgIhAJDDAuSB1eYihMIgKHw6fv8XacWs5oUdNOoKqcWuFk5XKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkeaahy9yW35uzFKIq3APtalifAXEe%2BL9hUSU5jzAa5BqL52IwAWXmXxkCN7%2BMxHwLMJdWpHLZvr7HKLeI8MTVNHayRAnDHhCN%2FzeoxqnM%2BT8GYZ4QSYbZjVtfgV6mDjFgzR3QedMSid90kqijp8wf5KZ0PXM%2FAnvw6%2Fx1jNOaRiu92np09LE55NmVmNk6a7%2Bw4%2FUG4utEUMw888NhG3Li1wuE9YaNwMbL95yTOo8kOc0EQp274tZCb%2Bp1WkI9FIMPuIZKhZ6IX7v8FriusZVOMHS%2BdzakdQDSldb7uHTSRJDvfb9qSxTBzqCC4LG0O4K%2Bfo4bQufd0yyOYJz4kO019b6MA3Ttb6NcsQvN%2BwfKkwXXL0qz16eZADSjVgSK1h0d5TofMLF1odWqyASfGZGcBi2AY6JQWDMRuR6e6HMarQa6Vo74F0TwkzG%2F238E3FuNrYWRMw8S5iUdXqiZwweWDZxig%2FZkZDOYeaoHtS0nA8OOn2A%2Ffxq4RevQmrl3lBBHACGjMlriNhzYgZ71QDVVrUSVAJIsftAuXmWyOUIh6YBc%2BiXS4GxhAsBiS%2FSBS2HTFCgpOW%2FrgZn5lvZ%2FteKX7bUQyyWqE1xoNztRAhWcbrFkQA4U3VspUN56PhHT3U57%2B1QOZwfCEc92QjCsparEBjqkAdLVAsnnQBGpqtShucb2SLfJkqFJfJX1PPXXyp8m%2FeYU%2F%2FRaoshXE%2F%2BxxyQ50mWEOAXIcfHhF%2B%2BFBf6yWT56UklrRZNmtbKPmiAnZnuIJRlUYH%2Fd4J3aXqsipGK%2FahGpu0sEsR5BpaI5%2BD2ibOT9VPtXBeCGrNPI9iz5ByjaRKm%2FQ9R5Wpz6Qz7sJk3tpsjB5q%2FBkNvRWFYUBHkQJsmqCYHIpjLY&X-Amz-Signature=ced705a0fecfe83cb6182848b6bcc34d5487d52aaf917aa798f2a73c0eff7925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJLT4KE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDzspyVUpbLOFYeB%2FAfAwmLkAZ%2FnL9LT%2F%2F%2FOE9FQncgIhAJDDAuSB1eYihMIgKHw6fv8XacWs5oUdNOoKqcWuFk5XKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkeaahy9yW35uzFKIq3APtalifAXEe%2BL9hUSU5jzAa5BqL52IwAWXmXxkCN7%2BMxHwLMJdWpHLZvr7HKLeI8MTVNHayRAnDHhCN%2FzeoxqnM%2BT8GYZ4QSYbZjVtfgV6mDjFgzR3QedMSid90kqijp8wf5KZ0PXM%2FAnvw6%2Fx1jNOaRiu92np09LE55NmVmNk6a7%2Bw4%2FUG4utEUMw888NhG3Li1wuE9YaNwMbL95yTOo8kOc0EQp274tZCb%2Bp1WkI9FIMPuIZKhZ6IX7v8FriusZVOMHS%2BdzakdQDSldb7uHTSRJDvfb9qSxTBzqCC4LG0O4K%2Bfo4bQufd0yyOYJz4kO019b6MA3Ttb6NcsQvN%2BwfKkwXXL0qz16eZADSjVgSK1h0d5TofMLF1odWqyASfGZGcBi2AY6JQWDMRuR6e6HMarQa6Vo74F0TwkzG%2F238E3FuNrYWRMw8S5iUdXqiZwweWDZxig%2FZkZDOYeaoHtS0nA8OOn2A%2Ffxq4RevQmrl3lBBHACGjMlriNhzYgZ71QDVVrUSVAJIsftAuXmWyOUIh6YBc%2BiXS4GxhAsBiS%2FSBS2HTFCgpOW%2FrgZn5lvZ%2FteKX7bUQyyWqE1xoNztRAhWcbrFkQA4U3VspUN56PhHT3U57%2B1QOZwfCEc92QjCsparEBjqkAdLVAsnnQBGpqtShucb2SLfJkqFJfJX1PPXXyp8m%2FeYU%2F%2FRaoshXE%2F%2BxxyQ50mWEOAXIcfHhF%2B%2BFBf6yWT56UklrRZNmtbKPmiAnZnuIJRlUYH%2Fd4J3aXqsipGK%2FahGpu0sEsR5BpaI5%2BD2ibOT9VPtXBeCGrNPI9iz5ByjaRKm%2FQ9R5Wpz6Qz7sJk3tpsjB5q%2FBkNvRWFYUBHkQJsmqCYHIpjLY&X-Amz-Signature=ffcf926c745dcb89e8c2afb77ef8510703e44e84b144880dc94412368ba359ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJLT4KE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDzspyVUpbLOFYeB%2FAfAwmLkAZ%2FnL9LT%2F%2F%2FOE9FQncgIhAJDDAuSB1eYihMIgKHw6fv8XacWs5oUdNOoKqcWuFk5XKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkeaahy9yW35uzFKIq3APtalifAXEe%2BL9hUSU5jzAa5BqL52IwAWXmXxkCN7%2BMxHwLMJdWpHLZvr7HKLeI8MTVNHayRAnDHhCN%2FzeoxqnM%2BT8GYZ4QSYbZjVtfgV6mDjFgzR3QedMSid90kqijp8wf5KZ0PXM%2FAnvw6%2Fx1jNOaRiu92np09LE55NmVmNk6a7%2Bw4%2FUG4utEUMw888NhG3Li1wuE9YaNwMbL95yTOo8kOc0EQp274tZCb%2Bp1WkI9FIMPuIZKhZ6IX7v8FriusZVOMHS%2BdzakdQDSldb7uHTSRJDvfb9qSxTBzqCC4LG0O4K%2Bfo4bQufd0yyOYJz4kO019b6MA3Ttb6NcsQvN%2BwfKkwXXL0qz16eZADSjVgSK1h0d5TofMLF1odWqyASfGZGcBi2AY6JQWDMRuR6e6HMarQa6Vo74F0TwkzG%2F238E3FuNrYWRMw8S5iUdXqiZwweWDZxig%2FZkZDOYeaoHtS0nA8OOn2A%2Ffxq4RevQmrl3lBBHACGjMlriNhzYgZ71QDVVrUSVAJIsftAuXmWyOUIh6YBc%2BiXS4GxhAsBiS%2FSBS2HTFCgpOW%2FrgZn5lvZ%2FteKX7bUQyyWqE1xoNztRAhWcbrFkQA4U3VspUN56PhHT3U57%2B1QOZwfCEc92QjCsparEBjqkAdLVAsnnQBGpqtShucb2SLfJkqFJfJX1PPXXyp8m%2FeYU%2F%2FRaoshXE%2F%2BxxyQ50mWEOAXIcfHhF%2B%2BFBf6yWT56UklrRZNmtbKPmiAnZnuIJRlUYH%2Fd4J3aXqsipGK%2FahGpu0sEsR5BpaI5%2BD2ibOT9VPtXBeCGrNPI9iz5ByjaRKm%2FQ9R5Wpz6Qz7sJk3tpsjB5q%2FBkNvRWFYUBHkQJsmqCYHIpjLY&X-Amz-Signature=a9003db1f1e91efb3f1125d96ee45141ec762fb7d32f9b90d93e28c67318208d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJLT4KE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDzspyVUpbLOFYeB%2FAfAwmLkAZ%2FnL9LT%2F%2F%2FOE9FQncgIhAJDDAuSB1eYihMIgKHw6fv8XacWs5oUdNOoKqcWuFk5XKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkeaahy9yW35uzFKIq3APtalifAXEe%2BL9hUSU5jzAa5BqL52IwAWXmXxkCN7%2BMxHwLMJdWpHLZvr7HKLeI8MTVNHayRAnDHhCN%2FzeoxqnM%2BT8GYZ4QSYbZjVtfgV6mDjFgzR3QedMSid90kqijp8wf5KZ0PXM%2FAnvw6%2Fx1jNOaRiu92np09LE55NmVmNk6a7%2Bw4%2FUG4utEUMw888NhG3Li1wuE9YaNwMbL95yTOo8kOc0EQp274tZCb%2Bp1WkI9FIMPuIZKhZ6IX7v8FriusZVOMHS%2BdzakdQDSldb7uHTSRJDvfb9qSxTBzqCC4LG0O4K%2Bfo4bQufd0yyOYJz4kO019b6MA3Ttb6NcsQvN%2BwfKkwXXL0qz16eZADSjVgSK1h0d5TofMLF1odWqyASfGZGcBi2AY6JQWDMRuR6e6HMarQa6Vo74F0TwkzG%2F238E3FuNrYWRMw8S5iUdXqiZwweWDZxig%2FZkZDOYeaoHtS0nA8OOn2A%2Ffxq4RevQmrl3lBBHACGjMlriNhzYgZ71QDVVrUSVAJIsftAuXmWyOUIh6YBc%2BiXS4GxhAsBiS%2FSBS2HTFCgpOW%2FrgZn5lvZ%2FteKX7bUQyyWqE1xoNztRAhWcbrFkQA4U3VspUN56PhHT3U57%2B1QOZwfCEc92QjCsparEBjqkAdLVAsnnQBGpqtShucb2SLfJkqFJfJX1PPXXyp8m%2FeYU%2F%2FRaoshXE%2F%2BxxyQ50mWEOAXIcfHhF%2B%2BFBf6yWT56UklrRZNmtbKPmiAnZnuIJRlUYH%2Fd4J3aXqsipGK%2FahGpu0sEsR5BpaI5%2BD2ibOT9VPtXBeCGrNPI9iz5ByjaRKm%2FQ9R5Wpz6Qz7sJk3tpsjB5q%2FBkNvRWFYUBHkQJsmqCYHIpjLY&X-Amz-Signature=d37d456ea7ceac4748d1ad6a16bbc9c25849bff9881f716f2d29495a1476cf44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJLT4KE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDzspyVUpbLOFYeB%2FAfAwmLkAZ%2FnL9LT%2F%2F%2FOE9FQncgIhAJDDAuSB1eYihMIgKHw6fv8XacWs5oUdNOoKqcWuFk5XKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkeaahy9yW35uzFKIq3APtalifAXEe%2BL9hUSU5jzAa5BqL52IwAWXmXxkCN7%2BMxHwLMJdWpHLZvr7HKLeI8MTVNHayRAnDHhCN%2FzeoxqnM%2BT8GYZ4QSYbZjVtfgV6mDjFgzR3QedMSid90kqijp8wf5KZ0PXM%2FAnvw6%2Fx1jNOaRiu92np09LE55NmVmNk6a7%2Bw4%2FUG4utEUMw888NhG3Li1wuE9YaNwMbL95yTOo8kOc0EQp274tZCb%2Bp1WkI9FIMPuIZKhZ6IX7v8FriusZVOMHS%2BdzakdQDSldb7uHTSRJDvfb9qSxTBzqCC4LG0O4K%2Bfo4bQufd0yyOYJz4kO019b6MA3Ttb6NcsQvN%2BwfKkwXXL0qz16eZADSjVgSK1h0d5TofMLF1odWqyASfGZGcBi2AY6JQWDMRuR6e6HMarQa6Vo74F0TwkzG%2F238E3FuNrYWRMw8S5iUdXqiZwweWDZxig%2FZkZDOYeaoHtS0nA8OOn2A%2Ffxq4RevQmrl3lBBHACGjMlriNhzYgZ71QDVVrUSVAJIsftAuXmWyOUIh6YBc%2BiXS4GxhAsBiS%2FSBS2HTFCgpOW%2FrgZn5lvZ%2FteKX7bUQyyWqE1xoNztRAhWcbrFkQA4U3VspUN56PhHT3U57%2B1QOZwfCEc92QjCsparEBjqkAdLVAsnnQBGpqtShucb2SLfJkqFJfJX1PPXXyp8m%2FeYU%2F%2FRaoshXE%2F%2BxxyQ50mWEOAXIcfHhF%2B%2BFBf6yWT56UklrRZNmtbKPmiAnZnuIJRlUYH%2Fd4J3aXqsipGK%2FahGpu0sEsR5BpaI5%2BD2ibOT9VPtXBeCGrNPI9iz5ByjaRKm%2FQ9R5Wpz6Qz7sJk3tpsjB5q%2FBkNvRWFYUBHkQJsmqCYHIpjLY&X-Amz-Signature=cf390e3eaf8c3aae766dc4b18c0f2cd1ff78f4e94af5f7dc61f469dc20477368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJLT4KE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDzspyVUpbLOFYeB%2FAfAwmLkAZ%2FnL9LT%2F%2F%2FOE9FQncgIhAJDDAuSB1eYihMIgKHw6fv8XacWs5oUdNOoKqcWuFk5XKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkeaahy9yW35uzFKIq3APtalifAXEe%2BL9hUSU5jzAa5BqL52IwAWXmXxkCN7%2BMxHwLMJdWpHLZvr7HKLeI8MTVNHayRAnDHhCN%2FzeoxqnM%2BT8GYZ4QSYbZjVtfgV6mDjFgzR3QedMSid90kqijp8wf5KZ0PXM%2FAnvw6%2Fx1jNOaRiu92np09LE55NmVmNk6a7%2Bw4%2FUG4utEUMw888NhG3Li1wuE9YaNwMbL95yTOo8kOc0EQp274tZCb%2Bp1WkI9FIMPuIZKhZ6IX7v8FriusZVOMHS%2BdzakdQDSldb7uHTSRJDvfb9qSxTBzqCC4LG0O4K%2Bfo4bQufd0yyOYJz4kO019b6MA3Ttb6NcsQvN%2BwfKkwXXL0qz16eZADSjVgSK1h0d5TofMLF1odWqyASfGZGcBi2AY6JQWDMRuR6e6HMarQa6Vo74F0TwkzG%2F238E3FuNrYWRMw8S5iUdXqiZwweWDZxig%2FZkZDOYeaoHtS0nA8OOn2A%2Ffxq4RevQmrl3lBBHACGjMlriNhzYgZ71QDVVrUSVAJIsftAuXmWyOUIh6YBc%2BiXS4GxhAsBiS%2FSBS2HTFCgpOW%2FrgZn5lvZ%2FteKX7bUQyyWqE1xoNztRAhWcbrFkQA4U3VspUN56PhHT3U57%2B1QOZwfCEc92QjCsparEBjqkAdLVAsnnQBGpqtShucb2SLfJkqFJfJX1PPXXyp8m%2FeYU%2F%2FRaoshXE%2F%2BxxyQ50mWEOAXIcfHhF%2B%2BFBf6yWT56UklrRZNmtbKPmiAnZnuIJRlUYH%2Fd4J3aXqsipGK%2FahGpu0sEsR5BpaI5%2BD2ibOT9VPtXBeCGrNPI9iz5ByjaRKm%2FQ9R5Wpz6Qz7sJk3tpsjB5q%2FBkNvRWFYUBHkQJsmqCYHIpjLY&X-Amz-Signature=329bb774efa6685f1f2c65e969b004dc6e0ca5f86845c06d264be99be7e7e6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJLT4KE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqDzspyVUpbLOFYeB%2FAfAwmLkAZ%2FnL9LT%2F%2F%2FOE9FQncgIhAJDDAuSB1eYihMIgKHw6fv8XacWs5oUdNOoKqcWuFk5XKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkeaahy9yW35uzFKIq3APtalifAXEe%2BL9hUSU5jzAa5BqL52IwAWXmXxkCN7%2BMxHwLMJdWpHLZvr7HKLeI8MTVNHayRAnDHhCN%2FzeoxqnM%2BT8GYZ4QSYbZjVtfgV6mDjFgzR3QedMSid90kqijp8wf5KZ0PXM%2FAnvw6%2Fx1jNOaRiu92np09LE55NmVmNk6a7%2Bw4%2FUG4utEUMw888NhG3Li1wuE9YaNwMbL95yTOo8kOc0EQp274tZCb%2Bp1WkI9FIMPuIZKhZ6IX7v8FriusZVOMHS%2BdzakdQDSldb7uHTSRJDvfb9qSxTBzqCC4LG0O4K%2Bfo4bQufd0yyOYJz4kO019b6MA3Ttb6NcsQvN%2BwfKkwXXL0qz16eZADSjVgSK1h0d5TofMLF1odWqyASfGZGcBi2AY6JQWDMRuR6e6HMarQa6Vo74F0TwkzG%2F238E3FuNrYWRMw8S5iUdXqiZwweWDZxig%2FZkZDOYeaoHtS0nA8OOn2A%2Ffxq4RevQmrl3lBBHACGjMlriNhzYgZ71QDVVrUSVAJIsftAuXmWyOUIh6YBc%2BiXS4GxhAsBiS%2FSBS2HTFCgpOW%2FrgZn5lvZ%2FteKX7bUQyyWqE1xoNztRAhWcbrFkQA4U3VspUN56PhHT3U57%2B1QOZwfCEc92QjCsparEBjqkAdLVAsnnQBGpqtShucb2SLfJkqFJfJX1PPXXyp8m%2FeYU%2F%2FRaoshXE%2F%2BxxyQ50mWEOAXIcfHhF%2B%2BFBf6yWT56UklrRZNmtbKPmiAnZnuIJRlUYH%2Fd4J3aXqsipGK%2FahGpu0sEsR5BpaI5%2BD2ibOT9VPtXBeCGrNPI9iz5ByjaRKm%2FQ9R5Wpz6Qz7sJk3tpsjB5q%2FBkNvRWFYUBHkQJsmqCYHIpjLY&X-Amz-Signature=63bb3b36d82e71def8e2650a6daf6cd5ff48569f73ced92aeae22717b39c6248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

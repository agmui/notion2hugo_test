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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN7EHDQ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9qqu3gKfxjf7pZUziqwNDukYOJR2WTd7QI%2F0bpbiUAAiAYAzRrGl%2F4AGWR1AgGw8%2BpYB%2FQ8Mpl%2BAsSmz9iyKPAPSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FYHkJEY34HgTdq6KtwD3DimXfaeyLAva%2BAS9msw6%2FgOjYhdSUPiNTaghjvmJJle9FVY3O%2B0CBdKFP7DhyD2Mss0WiQj5XpIKEH9ex4%2BwJij41TZoOOMCrPa%2FAe5VytQYJmcwhKpyoZWrN9%2FHGmKq3BGTQ16Nrwjwpsu6EnqoTT%2FxmdEYmQAljaMftlJLu3toYq0A3LLUkdEJgNd%2FzPN9yw4TqpFwvyxfnCfAvEN3sg72Uki8G0niB4YQIibE1ID%2BC1sYb2rem70gudIHHBrgEfpK3QO%2FZ3zrrGcKoVXmshCiX0%2FveR8VgVwI%2FzaFMg09OEwA4HpoAoauZRavtMWm0mPw6J%2FoIBjcSUk6usY%2FChxcMT%2B%2B3hAhhJJDdXp6nUR1boINOY%2BaPeyCg6v5vDNSkFMu7eajTrp7uNsx%2FMB4cGxo4g8cMLKL97q5cFdC4eTQ2JuGmlICmPr9ey5dUQdr1i9E1tyyHIxpMOivtFJoSVe1FhdWptRrCYUlyJHfq2gBFr%2BIZ%2BzE5%2FCWV9e6qxxnlJiBUAxXwsFtY4vliZeiXjLOHkVGn%2FG%2FyB%2Bfc6%2F6iB6C2zAS%2B1yDCoyom0jKwJ8PM%2FNAao5GAGzRu0Ea0kCyzxbsbx9wMEWz0mX34jNT75e81IjHPnbuoaVrLwwg7juwwY6pgEl0U7MT3%2F7ZssYH73ZBaLUPK7JTanftTnF0m0r4mBUy8nNER5%2BPagoDRQxS7sOTj8R3paKn1VHmph96rqVlTWcIMmgnTTsNutuCOWZvElxlj8ks1O%2BLDxnkdRN4UACjURlygNoU0g1J%2BFm0is9eSJS35SEWcRAFeXmD%2Bqq%2BTFLpSnKGc%2F6G%2FfDCz7X5mzAuJa7cNvi%2F5LXjrBYpYvOda4%2FVbMQolkx&X-Amz-Signature=bd74a07a9d7ecb227d72aa5723713db802f64002637985373d0b849fe5cab453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN7EHDQ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9qqu3gKfxjf7pZUziqwNDukYOJR2WTd7QI%2F0bpbiUAAiAYAzRrGl%2F4AGWR1AgGw8%2BpYB%2FQ8Mpl%2BAsSmz9iyKPAPSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FYHkJEY34HgTdq6KtwD3DimXfaeyLAva%2BAS9msw6%2FgOjYhdSUPiNTaghjvmJJle9FVY3O%2B0CBdKFP7DhyD2Mss0WiQj5XpIKEH9ex4%2BwJij41TZoOOMCrPa%2FAe5VytQYJmcwhKpyoZWrN9%2FHGmKq3BGTQ16Nrwjwpsu6EnqoTT%2FxmdEYmQAljaMftlJLu3toYq0A3LLUkdEJgNd%2FzPN9yw4TqpFwvyxfnCfAvEN3sg72Uki8G0niB4YQIibE1ID%2BC1sYb2rem70gudIHHBrgEfpK3QO%2FZ3zrrGcKoVXmshCiX0%2FveR8VgVwI%2FzaFMg09OEwA4HpoAoauZRavtMWm0mPw6J%2FoIBjcSUk6usY%2FChxcMT%2B%2B3hAhhJJDdXp6nUR1boINOY%2BaPeyCg6v5vDNSkFMu7eajTrp7uNsx%2FMB4cGxo4g8cMLKL97q5cFdC4eTQ2JuGmlICmPr9ey5dUQdr1i9E1tyyHIxpMOivtFJoSVe1FhdWptRrCYUlyJHfq2gBFr%2BIZ%2BzE5%2FCWV9e6qxxnlJiBUAxXwsFtY4vliZeiXjLOHkVGn%2FG%2FyB%2Bfc6%2F6iB6C2zAS%2B1yDCoyom0jKwJ8PM%2FNAao5GAGzRu0Ea0kCyzxbsbx9wMEWz0mX34jNT75e81IjHPnbuoaVrLwwg7juwwY6pgEl0U7MT3%2F7ZssYH73ZBaLUPK7JTanftTnF0m0r4mBUy8nNER5%2BPagoDRQxS7sOTj8R3paKn1VHmph96rqVlTWcIMmgnTTsNutuCOWZvElxlj8ks1O%2BLDxnkdRN4UACjURlygNoU0g1J%2BFm0is9eSJS35SEWcRAFeXmD%2Bqq%2BTFLpSnKGc%2F6G%2FfDCz7X5mzAuJa7cNvi%2F5LXjrBYpYvOda4%2FVbMQolkx&X-Amz-Signature=50005ba69e3b9111c91e54f1b1c38c807cb92c7232d13cd6e794759ed7f95400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN7EHDQ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9qqu3gKfxjf7pZUziqwNDukYOJR2WTd7QI%2F0bpbiUAAiAYAzRrGl%2F4AGWR1AgGw8%2BpYB%2FQ8Mpl%2BAsSmz9iyKPAPSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FYHkJEY34HgTdq6KtwD3DimXfaeyLAva%2BAS9msw6%2FgOjYhdSUPiNTaghjvmJJle9FVY3O%2B0CBdKFP7DhyD2Mss0WiQj5XpIKEH9ex4%2BwJij41TZoOOMCrPa%2FAe5VytQYJmcwhKpyoZWrN9%2FHGmKq3BGTQ16Nrwjwpsu6EnqoTT%2FxmdEYmQAljaMftlJLu3toYq0A3LLUkdEJgNd%2FzPN9yw4TqpFwvyxfnCfAvEN3sg72Uki8G0niB4YQIibE1ID%2BC1sYb2rem70gudIHHBrgEfpK3QO%2FZ3zrrGcKoVXmshCiX0%2FveR8VgVwI%2FzaFMg09OEwA4HpoAoauZRavtMWm0mPw6J%2FoIBjcSUk6usY%2FChxcMT%2B%2B3hAhhJJDdXp6nUR1boINOY%2BaPeyCg6v5vDNSkFMu7eajTrp7uNsx%2FMB4cGxo4g8cMLKL97q5cFdC4eTQ2JuGmlICmPr9ey5dUQdr1i9E1tyyHIxpMOivtFJoSVe1FhdWptRrCYUlyJHfq2gBFr%2BIZ%2BzE5%2FCWV9e6qxxnlJiBUAxXwsFtY4vliZeiXjLOHkVGn%2FG%2FyB%2Bfc6%2F6iB6C2zAS%2B1yDCoyom0jKwJ8PM%2FNAao5GAGzRu0Ea0kCyzxbsbx9wMEWz0mX34jNT75e81IjHPnbuoaVrLwwg7juwwY6pgEl0U7MT3%2F7ZssYH73ZBaLUPK7JTanftTnF0m0r4mBUy8nNER5%2BPagoDRQxS7sOTj8R3paKn1VHmph96rqVlTWcIMmgnTTsNutuCOWZvElxlj8ks1O%2BLDxnkdRN4UACjURlygNoU0g1J%2BFm0is9eSJS35SEWcRAFeXmD%2Bqq%2BTFLpSnKGc%2F6G%2FfDCz7X5mzAuJa7cNvi%2F5LXjrBYpYvOda4%2FVbMQolkx&X-Amz-Signature=61714f3113b60f8c36f4328f7c437e72831ee4fd9e80768178b0efc313a1f13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN7EHDQ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9qqu3gKfxjf7pZUziqwNDukYOJR2WTd7QI%2F0bpbiUAAiAYAzRrGl%2F4AGWR1AgGw8%2BpYB%2FQ8Mpl%2BAsSmz9iyKPAPSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FYHkJEY34HgTdq6KtwD3DimXfaeyLAva%2BAS9msw6%2FgOjYhdSUPiNTaghjvmJJle9FVY3O%2B0CBdKFP7DhyD2Mss0WiQj5XpIKEH9ex4%2BwJij41TZoOOMCrPa%2FAe5VytQYJmcwhKpyoZWrN9%2FHGmKq3BGTQ16Nrwjwpsu6EnqoTT%2FxmdEYmQAljaMftlJLu3toYq0A3LLUkdEJgNd%2FzPN9yw4TqpFwvyxfnCfAvEN3sg72Uki8G0niB4YQIibE1ID%2BC1sYb2rem70gudIHHBrgEfpK3QO%2FZ3zrrGcKoVXmshCiX0%2FveR8VgVwI%2FzaFMg09OEwA4HpoAoauZRavtMWm0mPw6J%2FoIBjcSUk6usY%2FChxcMT%2B%2B3hAhhJJDdXp6nUR1boINOY%2BaPeyCg6v5vDNSkFMu7eajTrp7uNsx%2FMB4cGxo4g8cMLKL97q5cFdC4eTQ2JuGmlICmPr9ey5dUQdr1i9E1tyyHIxpMOivtFJoSVe1FhdWptRrCYUlyJHfq2gBFr%2BIZ%2BzE5%2FCWV9e6qxxnlJiBUAxXwsFtY4vliZeiXjLOHkVGn%2FG%2FyB%2Bfc6%2F6iB6C2zAS%2B1yDCoyom0jKwJ8PM%2FNAao5GAGzRu0Ea0kCyzxbsbx9wMEWz0mX34jNT75e81IjHPnbuoaVrLwwg7juwwY6pgEl0U7MT3%2F7ZssYH73ZBaLUPK7JTanftTnF0m0r4mBUy8nNER5%2BPagoDRQxS7sOTj8R3paKn1VHmph96rqVlTWcIMmgnTTsNutuCOWZvElxlj8ks1O%2BLDxnkdRN4UACjURlygNoU0g1J%2BFm0is9eSJS35SEWcRAFeXmD%2Bqq%2BTFLpSnKGc%2F6G%2FfDCz7X5mzAuJa7cNvi%2F5LXjrBYpYvOda4%2FVbMQolkx&X-Amz-Signature=e41254728b59c76994f4c68be93b64b35ff940d15aacaf6bd2d53eb64a6479f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN7EHDQ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9qqu3gKfxjf7pZUziqwNDukYOJR2WTd7QI%2F0bpbiUAAiAYAzRrGl%2F4AGWR1AgGw8%2BpYB%2FQ8Mpl%2BAsSmz9iyKPAPSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FYHkJEY34HgTdq6KtwD3DimXfaeyLAva%2BAS9msw6%2FgOjYhdSUPiNTaghjvmJJle9FVY3O%2B0CBdKFP7DhyD2Mss0WiQj5XpIKEH9ex4%2BwJij41TZoOOMCrPa%2FAe5VytQYJmcwhKpyoZWrN9%2FHGmKq3BGTQ16Nrwjwpsu6EnqoTT%2FxmdEYmQAljaMftlJLu3toYq0A3LLUkdEJgNd%2FzPN9yw4TqpFwvyxfnCfAvEN3sg72Uki8G0niB4YQIibE1ID%2BC1sYb2rem70gudIHHBrgEfpK3QO%2FZ3zrrGcKoVXmshCiX0%2FveR8VgVwI%2FzaFMg09OEwA4HpoAoauZRavtMWm0mPw6J%2FoIBjcSUk6usY%2FChxcMT%2B%2B3hAhhJJDdXp6nUR1boINOY%2BaPeyCg6v5vDNSkFMu7eajTrp7uNsx%2FMB4cGxo4g8cMLKL97q5cFdC4eTQ2JuGmlICmPr9ey5dUQdr1i9E1tyyHIxpMOivtFJoSVe1FhdWptRrCYUlyJHfq2gBFr%2BIZ%2BzE5%2FCWV9e6qxxnlJiBUAxXwsFtY4vliZeiXjLOHkVGn%2FG%2FyB%2Bfc6%2F6iB6C2zAS%2B1yDCoyom0jKwJ8PM%2FNAao5GAGzRu0Ea0kCyzxbsbx9wMEWz0mX34jNT75e81IjHPnbuoaVrLwwg7juwwY6pgEl0U7MT3%2F7ZssYH73ZBaLUPK7JTanftTnF0m0r4mBUy8nNER5%2BPagoDRQxS7sOTj8R3paKn1VHmph96rqVlTWcIMmgnTTsNutuCOWZvElxlj8ks1O%2BLDxnkdRN4UACjURlygNoU0g1J%2BFm0is9eSJS35SEWcRAFeXmD%2Bqq%2BTFLpSnKGc%2F6G%2FfDCz7X5mzAuJa7cNvi%2F5LXjrBYpYvOda4%2FVbMQolkx&X-Amz-Signature=2ac39824eae41e9f3753f831ed5c3f0496238c793979471404ac6cb6db631f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN7EHDQ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9qqu3gKfxjf7pZUziqwNDukYOJR2WTd7QI%2F0bpbiUAAiAYAzRrGl%2F4AGWR1AgGw8%2BpYB%2FQ8Mpl%2BAsSmz9iyKPAPSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FYHkJEY34HgTdq6KtwD3DimXfaeyLAva%2BAS9msw6%2FgOjYhdSUPiNTaghjvmJJle9FVY3O%2B0CBdKFP7DhyD2Mss0WiQj5XpIKEH9ex4%2BwJij41TZoOOMCrPa%2FAe5VytQYJmcwhKpyoZWrN9%2FHGmKq3BGTQ16Nrwjwpsu6EnqoTT%2FxmdEYmQAljaMftlJLu3toYq0A3LLUkdEJgNd%2FzPN9yw4TqpFwvyxfnCfAvEN3sg72Uki8G0niB4YQIibE1ID%2BC1sYb2rem70gudIHHBrgEfpK3QO%2FZ3zrrGcKoVXmshCiX0%2FveR8VgVwI%2FzaFMg09OEwA4HpoAoauZRavtMWm0mPw6J%2FoIBjcSUk6usY%2FChxcMT%2B%2B3hAhhJJDdXp6nUR1boINOY%2BaPeyCg6v5vDNSkFMu7eajTrp7uNsx%2FMB4cGxo4g8cMLKL97q5cFdC4eTQ2JuGmlICmPr9ey5dUQdr1i9E1tyyHIxpMOivtFJoSVe1FhdWptRrCYUlyJHfq2gBFr%2BIZ%2BzE5%2FCWV9e6qxxnlJiBUAxXwsFtY4vliZeiXjLOHkVGn%2FG%2FyB%2Bfc6%2F6iB6C2zAS%2B1yDCoyom0jKwJ8PM%2FNAao5GAGzRu0Ea0kCyzxbsbx9wMEWz0mX34jNT75e81IjHPnbuoaVrLwwg7juwwY6pgEl0U7MT3%2F7ZssYH73ZBaLUPK7JTanftTnF0m0r4mBUy8nNER5%2BPagoDRQxS7sOTj8R3paKn1VHmph96rqVlTWcIMmgnTTsNutuCOWZvElxlj8ks1O%2BLDxnkdRN4UACjURlygNoU0g1J%2BFm0is9eSJS35SEWcRAFeXmD%2Bqq%2BTFLpSnKGc%2F6G%2FfDCz7X5mzAuJa7cNvi%2F5LXjrBYpYvOda4%2FVbMQolkx&X-Amz-Signature=a08aa9dd877f888aba7642d2b9cc237ca04df69bbbb442cec3a12f9f3ce36d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN7EHDQ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9qqu3gKfxjf7pZUziqwNDukYOJR2WTd7QI%2F0bpbiUAAiAYAzRrGl%2F4AGWR1AgGw8%2BpYB%2FQ8Mpl%2BAsSmz9iyKPAPSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FYHkJEY34HgTdq6KtwD3DimXfaeyLAva%2BAS9msw6%2FgOjYhdSUPiNTaghjvmJJle9FVY3O%2B0CBdKFP7DhyD2Mss0WiQj5XpIKEH9ex4%2BwJij41TZoOOMCrPa%2FAe5VytQYJmcwhKpyoZWrN9%2FHGmKq3BGTQ16Nrwjwpsu6EnqoTT%2FxmdEYmQAljaMftlJLu3toYq0A3LLUkdEJgNd%2FzPN9yw4TqpFwvyxfnCfAvEN3sg72Uki8G0niB4YQIibE1ID%2BC1sYb2rem70gudIHHBrgEfpK3QO%2FZ3zrrGcKoVXmshCiX0%2FveR8VgVwI%2FzaFMg09OEwA4HpoAoauZRavtMWm0mPw6J%2FoIBjcSUk6usY%2FChxcMT%2B%2B3hAhhJJDdXp6nUR1boINOY%2BaPeyCg6v5vDNSkFMu7eajTrp7uNsx%2FMB4cGxo4g8cMLKL97q5cFdC4eTQ2JuGmlICmPr9ey5dUQdr1i9E1tyyHIxpMOivtFJoSVe1FhdWptRrCYUlyJHfq2gBFr%2BIZ%2BzE5%2FCWV9e6qxxnlJiBUAxXwsFtY4vliZeiXjLOHkVGn%2FG%2FyB%2Bfc6%2F6iB6C2zAS%2B1yDCoyom0jKwJ8PM%2FNAao5GAGzRu0Ea0kCyzxbsbx9wMEWz0mX34jNT75e81IjHPnbuoaVrLwwg7juwwY6pgEl0U7MT3%2F7ZssYH73ZBaLUPK7JTanftTnF0m0r4mBUy8nNER5%2BPagoDRQxS7sOTj8R3paKn1VHmph96rqVlTWcIMmgnTTsNutuCOWZvElxlj8ks1O%2BLDxnkdRN4UACjURlygNoU0g1J%2BFm0is9eSJS35SEWcRAFeXmD%2Bqq%2BTFLpSnKGc%2F6G%2FfDCz7X5mzAuJa7cNvi%2F5LXjrBYpYvOda4%2FVbMQolkx&X-Amz-Signature=6a172769c068c4350e00afb598cacaf5caae22d089bb7368e2fe3018a5f7ec8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN7EHDQ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9qqu3gKfxjf7pZUziqwNDukYOJR2WTd7QI%2F0bpbiUAAiAYAzRrGl%2F4AGWR1AgGw8%2BpYB%2FQ8Mpl%2BAsSmz9iyKPAPSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FYHkJEY34HgTdq6KtwD3DimXfaeyLAva%2BAS9msw6%2FgOjYhdSUPiNTaghjvmJJle9FVY3O%2B0CBdKFP7DhyD2Mss0WiQj5XpIKEH9ex4%2BwJij41TZoOOMCrPa%2FAe5VytQYJmcwhKpyoZWrN9%2FHGmKq3BGTQ16Nrwjwpsu6EnqoTT%2FxmdEYmQAljaMftlJLu3toYq0A3LLUkdEJgNd%2FzPN9yw4TqpFwvyxfnCfAvEN3sg72Uki8G0niB4YQIibE1ID%2BC1sYb2rem70gudIHHBrgEfpK3QO%2FZ3zrrGcKoVXmshCiX0%2FveR8VgVwI%2FzaFMg09OEwA4HpoAoauZRavtMWm0mPw6J%2FoIBjcSUk6usY%2FChxcMT%2B%2B3hAhhJJDdXp6nUR1boINOY%2BaPeyCg6v5vDNSkFMu7eajTrp7uNsx%2FMB4cGxo4g8cMLKL97q5cFdC4eTQ2JuGmlICmPr9ey5dUQdr1i9E1tyyHIxpMOivtFJoSVe1FhdWptRrCYUlyJHfq2gBFr%2BIZ%2BzE5%2FCWV9e6qxxnlJiBUAxXwsFtY4vliZeiXjLOHkVGn%2FG%2FyB%2Bfc6%2F6iB6C2zAS%2B1yDCoyom0jKwJ8PM%2FNAao5GAGzRu0Ea0kCyzxbsbx9wMEWz0mX34jNT75e81IjHPnbuoaVrLwwg7juwwY6pgEl0U7MT3%2F7ZssYH73ZBaLUPK7JTanftTnF0m0r4mBUy8nNER5%2BPagoDRQxS7sOTj8R3paKn1VHmph96rqVlTWcIMmgnTTsNutuCOWZvElxlj8ks1O%2BLDxnkdRN4UACjURlygNoU0g1J%2BFm0is9eSJS35SEWcRAFeXmD%2Bqq%2BTFLpSnKGc%2F6G%2FfDCz7X5mzAuJa7cNvi%2F5LXjrBYpYvOda4%2FVbMQolkx&X-Amz-Signature=5059dca2ea4954ea40f7d62976e59c35ff841796155a8292c334d04bff841922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

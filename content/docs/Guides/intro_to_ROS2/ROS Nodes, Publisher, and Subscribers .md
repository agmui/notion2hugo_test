---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQZXSEG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbn1LwVA7pK077yYVHGVQxLDK%2FIXCVmh9W9gSYfAQFnQIhAL1HahFSFBbJQNP3WSK3KRHtOslydQZtGtqEwk8snDRgKv8DCHsQABoMNjM3NDIzMTgzODA1Igwt8gqSADaq%2Bsj69wEq3APwFHKc297v%2BLj%2B3uJlaiLsEcbOTu9As3ZzEs9DHSu7q18wgBRlLJsToRV1nBpYfDdqo8R4EIFr8eTfk5kXfvPWSGtCreq2fA2wNQcQ5GKipsqlwTHmai%2FaJiFHZkREgPhk4dTpJqZlbfzSsMeNn0%2BcEFspbG4sXS1K2XuDW2lFaVWJzh7bh6HjUdlAtlfn0CNo4j2jSyGtEdr79GzuGm22vKxENQJOlizlLqlh9XMmLac3tSGcBNpYcP2kobKxeq%2BqJEgWAqGmp4VjT%2B40k2aE3N1n51OL8ieA7XYQiqmvWiDvmDdyMi6VV%2BEwqU6XWpN14dgnQzw0hiFKJ0Buap%2Fz9Flh3D90gKFEIp4T3ndn1HvLTaM%2Feyr3firMvRsOA46tRfMH7CEPk3Vgejw%2BB9oByIh2KYAVIeGI8JQ%2FZlYTNhNT%2FtEB8depRYU%2Bv14JpY67PuBovUbwflVgAjKUBsHA0av7QlhA%2BZFV9OaaZKkNU2ddcVKQKjDwThFdsU4N9zwiDfKgybFPrp89z2rSCXur11oOLwr3gX65rnKkkPQCsz%2B%2FdyF%2BpkUpch4LUwytl0NRnXO0xdccCQn8dIt0iDH3cnXC3bIyJybE6Hgd61oulYa1W70SxCnQFudrezCEsZnJBjqkAVb%2FriGMIY4oeunO8RIm4gTXsGSFPx1%2BtT9xz7wrFJomcYyExLqiUh1y0r%2F47Xjj0OqvF6Q5HbIfu4Epdf79rWi8d4YUxb7TVe8Fm4bTho%2BGyqp9tRRXH0JaPW12sFPLuOKHBPvq7BgcB5lqI7nklhIoUv%2B6DQpqbpvr%2BctIkhzupSm7SN75V56akr3F6zrt%2BslwOc3EPV5wb539wYD9T2mPeo1l&X-Amz-Signature=f2f61d77288d88741381628d6bd88c7b369e8f44b59e0390b943286e63d6a83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQZXSEG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbn1LwVA7pK077yYVHGVQxLDK%2FIXCVmh9W9gSYfAQFnQIhAL1HahFSFBbJQNP3WSK3KRHtOslydQZtGtqEwk8snDRgKv8DCHsQABoMNjM3NDIzMTgzODA1Igwt8gqSADaq%2Bsj69wEq3APwFHKc297v%2BLj%2B3uJlaiLsEcbOTu9As3ZzEs9DHSu7q18wgBRlLJsToRV1nBpYfDdqo8R4EIFr8eTfk5kXfvPWSGtCreq2fA2wNQcQ5GKipsqlwTHmai%2FaJiFHZkREgPhk4dTpJqZlbfzSsMeNn0%2BcEFspbG4sXS1K2XuDW2lFaVWJzh7bh6HjUdlAtlfn0CNo4j2jSyGtEdr79GzuGm22vKxENQJOlizlLqlh9XMmLac3tSGcBNpYcP2kobKxeq%2BqJEgWAqGmp4VjT%2B40k2aE3N1n51OL8ieA7XYQiqmvWiDvmDdyMi6VV%2BEwqU6XWpN14dgnQzw0hiFKJ0Buap%2Fz9Flh3D90gKFEIp4T3ndn1HvLTaM%2Feyr3firMvRsOA46tRfMH7CEPk3Vgejw%2BB9oByIh2KYAVIeGI8JQ%2FZlYTNhNT%2FtEB8depRYU%2Bv14JpY67PuBovUbwflVgAjKUBsHA0av7QlhA%2BZFV9OaaZKkNU2ddcVKQKjDwThFdsU4N9zwiDfKgybFPrp89z2rSCXur11oOLwr3gX65rnKkkPQCsz%2B%2FdyF%2BpkUpch4LUwytl0NRnXO0xdccCQn8dIt0iDH3cnXC3bIyJybE6Hgd61oulYa1W70SxCnQFudrezCEsZnJBjqkAVb%2FriGMIY4oeunO8RIm4gTXsGSFPx1%2BtT9xz7wrFJomcYyExLqiUh1y0r%2F47Xjj0OqvF6Q5HbIfu4Epdf79rWi8d4YUxb7TVe8Fm4bTho%2BGyqp9tRRXH0JaPW12sFPLuOKHBPvq7BgcB5lqI7nklhIoUv%2B6DQpqbpvr%2BctIkhzupSm7SN75V56akr3F6zrt%2BslwOc3EPV5wb539wYD9T2mPeo1l&X-Amz-Signature=f501d109fec7611ac8afeec8b40bd0310c94349404a4fc6eb36e6b21b04d6b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQZXSEG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbn1LwVA7pK077yYVHGVQxLDK%2FIXCVmh9W9gSYfAQFnQIhAL1HahFSFBbJQNP3WSK3KRHtOslydQZtGtqEwk8snDRgKv8DCHsQABoMNjM3NDIzMTgzODA1Igwt8gqSADaq%2Bsj69wEq3APwFHKc297v%2BLj%2B3uJlaiLsEcbOTu9As3ZzEs9DHSu7q18wgBRlLJsToRV1nBpYfDdqo8R4EIFr8eTfk5kXfvPWSGtCreq2fA2wNQcQ5GKipsqlwTHmai%2FaJiFHZkREgPhk4dTpJqZlbfzSsMeNn0%2BcEFspbG4sXS1K2XuDW2lFaVWJzh7bh6HjUdlAtlfn0CNo4j2jSyGtEdr79GzuGm22vKxENQJOlizlLqlh9XMmLac3tSGcBNpYcP2kobKxeq%2BqJEgWAqGmp4VjT%2B40k2aE3N1n51OL8ieA7XYQiqmvWiDvmDdyMi6VV%2BEwqU6XWpN14dgnQzw0hiFKJ0Buap%2Fz9Flh3D90gKFEIp4T3ndn1HvLTaM%2Feyr3firMvRsOA46tRfMH7CEPk3Vgejw%2BB9oByIh2KYAVIeGI8JQ%2FZlYTNhNT%2FtEB8depRYU%2Bv14JpY67PuBovUbwflVgAjKUBsHA0av7QlhA%2BZFV9OaaZKkNU2ddcVKQKjDwThFdsU4N9zwiDfKgybFPrp89z2rSCXur11oOLwr3gX65rnKkkPQCsz%2B%2FdyF%2BpkUpch4LUwytl0NRnXO0xdccCQn8dIt0iDH3cnXC3bIyJybE6Hgd61oulYa1W70SxCnQFudrezCEsZnJBjqkAVb%2FriGMIY4oeunO8RIm4gTXsGSFPx1%2BtT9xz7wrFJomcYyExLqiUh1y0r%2F47Xjj0OqvF6Q5HbIfu4Epdf79rWi8d4YUxb7TVe8Fm4bTho%2BGyqp9tRRXH0JaPW12sFPLuOKHBPvq7BgcB5lqI7nklhIoUv%2B6DQpqbpvr%2BctIkhzupSm7SN75V56akr3F6zrt%2BslwOc3EPV5wb539wYD9T2mPeo1l&X-Amz-Signature=dc35e500fdf70aee4b51dc300a584eb55095ee011cd80629a9e41b9ce2455f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQZXSEG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbn1LwVA7pK077yYVHGVQxLDK%2FIXCVmh9W9gSYfAQFnQIhAL1HahFSFBbJQNP3WSK3KRHtOslydQZtGtqEwk8snDRgKv8DCHsQABoMNjM3NDIzMTgzODA1Igwt8gqSADaq%2Bsj69wEq3APwFHKc297v%2BLj%2B3uJlaiLsEcbOTu9As3ZzEs9DHSu7q18wgBRlLJsToRV1nBpYfDdqo8R4EIFr8eTfk5kXfvPWSGtCreq2fA2wNQcQ5GKipsqlwTHmai%2FaJiFHZkREgPhk4dTpJqZlbfzSsMeNn0%2BcEFspbG4sXS1K2XuDW2lFaVWJzh7bh6HjUdlAtlfn0CNo4j2jSyGtEdr79GzuGm22vKxENQJOlizlLqlh9XMmLac3tSGcBNpYcP2kobKxeq%2BqJEgWAqGmp4VjT%2B40k2aE3N1n51OL8ieA7XYQiqmvWiDvmDdyMi6VV%2BEwqU6XWpN14dgnQzw0hiFKJ0Buap%2Fz9Flh3D90gKFEIp4T3ndn1HvLTaM%2Feyr3firMvRsOA46tRfMH7CEPk3Vgejw%2BB9oByIh2KYAVIeGI8JQ%2FZlYTNhNT%2FtEB8depRYU%2Bv14JpY67PuBovUbwflVgAjKUBsHA0av7QlhA%2BZFV9OaaZKkNU2ddcVKQKjDwThFdsU4N9zwiDfKgybFPrp89z2rSCXur11oOLwr3gX65rnKkkPQCsz%2B%2FdyF%2BpkUpch4LUwytl0NRnXO0xdccCQn8dIt0iDH3cnXC3bIyJybE6Hgd61oulYa1W70SxCnQFudrezCEsZnJBjqkAVb%2FriGMIY4oeunO8RIm4gTXsGSFPx1%2BtT9xz7wrFJomcYyExLqiUh1y0r%2F47Xjj0OqvF6Q5HbIfu4Epdf79rWi8d4YUxb7TVe8Fm4bTho%2BGyqp9tRRXH0JaPW12sFPLuOKHBPvq7BgcB5lqI7nklhIoUv%2B6DQpqbpvr%2BctIkhzupSm7SN75V56akr3F6zrt%2BslwOc3EPV5wb539wYD9T2mPeo1l&X-Amz-Signature=68a62f8ed81444ba08cc7370722eda437cc3bb03425d1c2fbfde18d1847ca006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQZXSEG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbn1LwVA7pK077yYVHGVQxLDK%2FIXCVmh9W9gSYfAQFnQIhAL1HahFSFBbJQNP3WSK3KRHtOslydQZtGtqEwk8snDRgKv8DCHsQABoMNjM3NDIzMTgzODA1Igwt8gqSADaq%2Bsj69wEq3APwFHKc297v%2BLj%2B3uJlaiLsEcbOTu9As3ZzEs9DHSu7q18wgBRlLJsToRV1nBpYfDdqo8R4EIFr8eTfk5kXfvPWSGtCreq2fA2wNQcQ5GKipsqlwTHmai%2FaJiFHZkREgPhk4dTpJqZlbfzSsMeNn0%2BcEFspbG4sXS1K2XuDW2lFaVWJzh7bh6HjUdlAtlfn0CNo4j2jSyGtEdr79GzuGm22vKxENQJOlizlLqlh9XMmLac3tSGcBNpYcP2kobKxeq%2BqJEgWAqGmp4VjT%2B40k2aE3N1n51OL8ieA7XYQiqmvWiDvmDdyMi6VV%2BEwqU6XWpN14dgnQzw0hiFKJ0Buap%2Fz9Flh3D90gKFEIp4T3ndn1HvLTaM%2Feyr3firMvRsOA46tRfMH7CEPk3Vgejw%2BB9oByIh2KYAVIeGI8JQ%2FZlYTNhNT%2FtEB8depRYU%2Bv14JpY67PuBovUbwflVgAjKUBsHA0av7QlhA%2BZFV9OaaZKkNU2ddcVKQKjDwThFdsU4N9zwiDfKgybFPrp89z2rSCXur11oOLwr3gX65rnKkkPQCsz%2B%2FdyF%2BpkUpch4LUwytl0NRnXO0xdccCQn8dIt0iDH3cnXC3bIyJybE6Hgd61oulYa1W70SxCnQFudrezCEsZnJBjqkAVb%2FriGMIY4oeunO8RIm4gTXsGSFPx1%2BtT9xz7wrFJomcYyExLqiUh1y0r%2F47Xjj0OqvF6Q5HbIfu4Epdf79rWi8d4YUxb7TVe8Fm4bTho%2BGyqp9tRRXH0JaPW12sFPLuOKHBPvq7BgcB5lqI7nklhIoUv%2B6DQpqbpvr%2BctIkhzupSm7SN75V56akr3F6zrt%2BslwOc3EPV5wb539wYD9T2mPeo1l&X-Amz-Signature=23d9618e10dd0790158586473e2f561bb2565de2e2090d364b60f3ae052b9770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQZXSEG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbn1LwVA7pK077yYVHGVQxLDK%2FIXCVmh9W9gSYfAQFnQIhAL1HahFSFBbJQNP3WSK3KRHtOslydQZtGtqEwk8snDRgKv8DCHsQABoMNjM3NDIzMTgzODA1Igwt8gqSADaq%2Bsj69wEq3APwFHKc297v%2BLj%2B3uJlaiLsEcbOTu9As3ZzEs9DHSu7q18wgBRlLJsToRV1nBpYfDdqo8R4EIFr8eTfk5kXfvPWSGtCreq2fA2wNQcQ5GKipsqlwTHmai%2FaJiFHZkREgPhk4dTpJqZlbfzSsMeNn0%2BcEFspbG4sXS1K2XuDW2lFaVWJzh7bh6HjUdlAtlfn0CNo4j2jSyGtEdr79GzuGm22vKxENQJOlizlLqlh9XMmLac3tSGcBNpYcP2kobKxeq%2BqJEgWAqGmp4VjT%2B40k2aE3N1n51OL8ieA7XYQiqmvWiDvmDdyMi6VV%2BEwqU6XWpN14dgnQzw0hiFKJ0Buap%2Fz9Flh3D90gKFEIp4T3ndn1HvLTaM%2Feyr3firMvRsOA46tRfMH7CEPk3Vgejw%2BB9oByIh2KYAVIeGI8JQ%2FZlYTNhNT%2FtEB8depRYU%2Bv14JpY67PuBovUbwflVgAjKUBsHA0av7QlhA%2BZFV9OaaZKkNU2ddcVKQKjDwThFdsU4N9zwiDfKgybFPrp89z2rSCXur11oOLwr3gX65rnKkkPQCsz%2B%2FdyF%2BpkUpch4LUwytl0NRnXO0xdccCQn8dIt0iDH3cnXC3bIyJybE6Hgd61oulYa1W70SxCnQFudrezCEsZnJBjqkAVb%2FriGMIY4oeunO8RIm4gTXsGSFPx1%2BtT9xz7wrFJomcYyExLqiUh1y0r%2F47Xjj0OqvF6Q5HbIfu4Epdf79rWi8d4YUxb7TVe8Fm4bTho%2BGyqp9tRRXH0JaPW12sFPLuOKHBPvq7BgcB5lqI7nklhIoUv%2B6DQpqbpvr%2BctIkhzupSm7SN75V56akr3F6zrt%2BslwOc3EPV5wb539wYD9T2mPeo1l&X-Amz-Signature=77e9890ed7af1d7aea61c40e08782039e2ba07500010d8c4f409e6fa70dd9262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQZXSEG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbn1LwVA7pK077yYVHGVQxLDK%2FIXCVmh9W9gSYfAQFnQIhAL1HahFSFBbJQNP3WSK3KRHtOslydQZtGtqEwk8snDRgKv8DCHsQABoMNjM3NDIzMTgzODA1Igwt8gqSADaq%2Bsj69wEq3APwFHKc297v%2BLj%2B3uJlaiLsEcbOTu9As3ZzEs9DHSu7q18wgBRlLJsToRV1nBpYfDdqo8R4EIFr8eTfk5kXfvPWSGtCreq2fA2wNQcQ5GKipsqlwTHmai%2FaJiFHZkREgPhk4dTpJqZlbfzSsMeNn0%2BcEFspbG4sXS1K2XuDW2lFaVWJzh7bh6HjUdlAtlfn0CNo4j2jSyGtEdr79GzuGm22vKxENQJOlizlLqlh9XMmLac3tSGcBNpYcP2kobKxeq%2BqJEgWAqGmp4VjT%2B40k2aE3N1n51OL8ieA7XYQiqmvWiDvmDdyMi6VV%2BEwqU6XWpN14dgnQzw0hiFKJ0Buap%2Fz9Flh3D90gKFEIp4T3ndn1HvLTaM%2Feyr3firMvRsOA46tRfMH7CEPk3Vgejw%2BB9oByIh2KYAVIeGI8JQ%2FZlYTNhNT%2FtEB8depRYU%2Bv14JpY67PuBovUbwflVgAjKUBsHA0av7QlhA%2BZFV9OaaZKkNU2ddcVKQKjDwThFdsU4N9zwiDfKgybFPrp89z2rSCXur11oOLwr3gX65rnKkkPQCsz%2B%2FdyF%2BpkUpch4LUwytl0NRnXO0xdccCQn8dIt0iDH3cnXC3bIyJybE6Hgd61oulYa1W70SxCnQFudrezCEsZnJBjqkAVb%2FriGMIY4oeunO8RIm4gTXsGSFPx1%2BtT9xz7wrFJomcYyExLqiUh1y0r%2F47Xjj0OqvF6Q5HbIfu4Epdf79rWi8d4YUxb7TVe8Fm4bTho%2BGyqp9tRRXH0JaPW12sFPLuOKHBPvq7BgcB5lqI7nklhIoUv%2B6DQpqbpvr%2BctIkhzupSm7SN75V56akr3F6zrt%2BslwOc3EPV5wb539wYD9T2mPeo1l&X-Amz-Signature=e3c7450c7bc70157f3b43874f0b1edfd1d3900055316f0bd9b85432e3db9d2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQZXSEG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbn1LwVA7pK077yYVHGVQxLDK%2FIXCVmh9W9gSYfAQFnQIhAL1HahFSFBbJQNP3WSK3KRHtOslydQZtGtqEwk8snDRgKv8DCHsQABoMNjM3NDIzMTgzODA1Igwt8gqSADaq%2Bsj69wEq3APwFHKc297v%2BLj%2B3uJlaiLsEcbOTu9As3ZzEs9DHSu7q18wgBRlLJsToRV1nBpYfDdqo8R4EIFr8eTfk5kXfvPWSGtCreq2fA2wNQcQ5GKipsqlwTHmai%2FaJiFHZkREgPhk4dTpJqZlbfzSsMeNn0%2BcEFspbG4sXS1K2XuDW2lFaVWJzh7bh6HjUdlAtlfn0CNo4j2jSyGtEdr79GzuGm22vKxENQJOlizlLqlh9XMmLac3tSGcBNpYcP2kobKxeq%2BqJEgWAqGmp4VjT%2B40k2aE3N1n51OL8ieA7XYQiqmvWiDvmDdyMi6VV%2BEwqU6XWpN14dgnQzw0hiFKJ0Buap%2Fz9Flh3D90gKFEIp4T3ndn1HvLTaM%2Feyr3firMvRsOA46tRfMH7CEPk3Vgejw%2BB9oByIh2KYAVIeGI8JQ%2FZlYTNhNT%2FtEB8depRYU%2Bv14JpY67PuBovUbwflVgAjKUBsHA0av7QlhA%2BZFV9OaaZKkNU2ddcVKQKjDwThFdsU4N9zwiDfKgybFPrp89z2rSCXur11oOLwr3gX65rnKkkPQCsz%2B%2FdyF%2BpkUpch4LUwytl0NRnXO0xdccCQn8dIt0iDH3cnXC3bIyJybE6Hgd61oulYa1W70SxCnQFudrezCEsZnJBjqkAVb%2FriGMIY4oeunO8RIm4gTXsGSFPx1%2BtT9xz7wrFJomcYyExLqiUh1y0r%2F47Xjj0OqvF6Q5HbIfu4Epdf79rWi8d4YUxb7TVe8Fm4bTho%2BGyqp9tRRXH0JaPW12sFPLuOKHBPvq7BgcB5lqI7nklhIoUv%2B6DQpqbpvr%2BctIkhzupSm7SN75V56akr3F6zrt%2BslwOc3EPV5wb539wYD9T2mPeo1l&X-Amz-Signature=1aca814bd978f72295bf70f1dbc057d22d7a8648398a1ecd9992621f39f64ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

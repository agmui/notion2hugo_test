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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXZL5JM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUE2kZHCru8lhUeL6ZP74IvMr9SHeT9OsUUUqzA1PugIhAOllfST9eIrXIw4m4CB2NUjxKts4XwpeGYcxxT3p%2B%2FTVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwplAUvNmXrXWbwiocq3ANIs0w%2FehD6yal5UCGe6vo87jk4pOX%2FAUt22lj3yFBd8dP%2BpEpdbNf%2Fi6DqAZMCnlZeVgO9A9KnzaLcPVZZDC4qjRbelmnf338b7LfDbAdYB4CDWVTLGIran%2BWryo9ephWAIO36K%2BTzvGBPJTYy33C9ebYcR6ghOxM%2FmBOcgWnZPi%2FrBh0I6ZKX9SNRRHEnHiwRrb%2FObn8ghQ%2FLQ1zF%2BKwjunkoueNWE75ogzjT4HnTvVnLUZHv7Hn9CPZCZSl%2BMMKnCtyYbT6ughfllhPRU8Ry52gY7cmQKd%2Fk8z50qSyE%2FV1n4%2FVJjMLkJ%2BOivXbAoAsbJi3w9dFr6yyQ7AJANdh%2BapHNncdf9XueKsMSx3InLWpEtfldXOYuFNfQ666f5KJIgyJlrxGksYxjb9cmAdw3yXb4DGqRYHP7c0PZkWu1Fh1xrRETuZknZ17yPPZAk8IOC3E%2BRBSDFvo%2FEfZySJ3UBCSfOvPKG2SJ0qaFPF1IDo%2BBIKbqQXPq%2BYOMNtjZ4OdJ%2Fmvep9TBaTELAk70QTV3DrUaRqRF21yDk2CSaKMC0u15WkAMiqAu8UJArBWQ2sZ1qHlc%2FhOGk%2Bmx6qisHKWTNVrJoWlX3gk5aqTk7C%2FiVjOw1BTu7%2FWhyTPuiDDOgJ3BBjqkAYShJ6Kdi4IANme%2B0m0o9rZDRmDTZaQM74sLTALccNuFuo8GlPzOTWVZskXpJTY3SiKF1hH60nrN%2FPc3kB%2BzG%2BjNGEWJEN05mlYPRQeRHg3zgnbnqd4nyPC9dFE5hVc7ad30cs5hPSya30zFRVQ1deyFapS1%2F2Y9TrJKEM552KxAuM5zV2gH%2BNVcbWx1VE5p1VY1s2dKDk1R1aEsHMs4VLffqv1%2F&X-Amz-Signature=12fae003ef8c457c0aec5c35c811f187d3ae77c47f5f982b5d1518ab296f3213&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXZL5JM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUE2kZHCru8lhUeL6ZP74IvMr9SHeT9OsUUUqzA1PugIhAOllfST9eIrXIw4m4CB2NUjxKts4XwpeGYcxxT3p%2B%2FTVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwplAUvNmXrXWbwiocq3ANIs0w%2FehD6yal5UCGe6vo87jk4pOX%2FAUt22lj3yFBd8dP%2BpEpdbNf%2Fi6DqAZMCnlZeVgO9A9KnzaLcPVZZDC4qjRbelmnf338b7LfDbAdYB4CDWVTLGIran%2BWryo9ephWAIO36K%2BTzvGBPJTYy33C9ebYcR6ghOxM%2FmBOcgWnZPi%2FrBh0I6ZKX9SNRRHEnHiwRrb%2FObn8ghQ%2FLQ1zF%2BKwjunkoueNWE75ogzjT4HnTvVnLUZHv7Hn9CPZCZSl%2BMMKnCtyYbT6ughfllhPRU8Ry52gY7cmQKd%2Fk8z50qSyE%2FV1n4%2FVJjMLkJ%2BOivXbAoAsbJi3w9dFr6yyQ7AJANdh%2BapHNncdf9XueKsMSx3InLWpEtfldXOYuFNfQ666f5KJIgyJlrxGksYxjb9cmAdw3yXb4DGqRYHP7c0PZkWu1Fh1xrRETuZknZ17yPPZAk8IOC3E%2BRBSDFvo%2FEfZySJ3UBCSfOvPKG2SJ0qaFPF1IDo%2BBIKbqQXPq%2BYOMNtjZ4OdJ%2Fmvep9TBaTELAk70QTV3DrUaRqRF21yDk2CSaKMC0u15WkAMiqAu8UJArBWQ2sZ1qHlc%2FhOGk%2Bmx6qisHKWTNVrJoWlX3gk5aqTk7C%2FiVjOw1BTu7%2FWhyTPuiDDOgJ3BBjqkAYShJ6Kdi4IANme%2B0m0o9rZDRmDTZaQM74sLTALccNuFuo8GlPzOTWVZskXpJTY3SiKF1hH60nrN%2FPc3kB%2BzG%2BjNGEWJEN05mlYPRQeRHg3zgnbnqd4nyPC9dFE5hVc7ad30cs5hPSya30zFRVQ1deyFapS1%2F2Y9TrJKEM552KxAuM5zV2gH%2BNVcbWx1VE5p1VY1s2dKDk1R1aEsHMs4VLffqv1%2F&X-Amz-Signature=a9b3e5eb3be5a6e1649004b9b9fcb5e9c4a6880c4ae0512d96d349a59b7901d9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXZL5JM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUE2kZHCru8lhUeL6ZP74IvMr9SHeT9OsUUUqzA1PugIhAOllfST9eIrXIw4m4CB2NUjxKts4XwpeGYcxxT3p%2B%2FTVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwplAUvNmXrXWbwiocq3ANIs0w%2FehD6yal5UCGe6vo87jk4pOX%2FAUt22lj3yFBd8dP%2BpEpdbNf%2Fi6DqAZMCnlZeVgO9A9KnzaLcPVZZDC4qjRbelmnf338b7LfDbAdYB4CDWVTLGIran%2BWryo9ephWAIO36K%2BTzvGBPJTYy33C9ebYcR6ghOxM%2FmBOcgWnZPi%2FrBh0I6ZKX9SNRRHEnHiwRrb%2FObn8ghQ%2FLQ1zF%2BKwjunkoueNWE75ogzjT4HnTvVnLUZHv7Hn9CPZCZSl%2BMMKnCtyYbT6ughfllhPRU8Ry52gY7cmQKd%2Fk8z50qSyE%2FV1n4%2FVJjMLkJ%2BOivXbAoAsbJi3w9dFr6yyQ7AJANdh%2BapHNncdf9XueKsMSx3InLWpEtfldXOYuFNfQ666f5KJIgyJlrxGksYxjb9cmAdw3yXb4DGqRYHP7c0PZkWu1Fh1xrRETuZknZ17yPPZAk8IOC3E%2BRBSDFvo%2FEfZySJ3UBCSfOvPKG2SJ0qaFPF1IDo%2BBIKbqQXPq%2BYOMNtjZ4OdJ%2Fmvep9TBaTELAk70QTV3DrUaRqRF21yDk2CSaKMC0u15WkAMiqAu8UJArBWQ2sZ1qHlc%2FhOGk%2Bmx6qisHKWTNVrJoWlX3gk5aqTk7C%2FiVjOw1BTu7%2FWhyTPuiDDOgJ3BBjqkAYShJ6Kdi4IANme%2B0m0o9rZDRmDTZaQM74sLTALccNuFuo8GlPzOTWVZskXpJTY3SiKF1hH60nrN%2FPc3kB%2BzG%2BjNGEWJEN05mlYPRQeRHg3zgnbnqd4nyPC9dFE5hVc7ad30cs5hPSya30zFRVQ1deyFapS1%2F2Y9TrJKEM552KxAuM5zV2gH%2BNVcbWx1VE5p1VY1s2dKDk1R1aEsHMs4VLffqv1%2F&X-Amz-Signature=9b00b4ad918374a5d27144e315ceb5ba7a22a1e0c47270c325ea237a90d4692b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXZL5JM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUE2kZHCru8lhUeL6ZP74IvMr9SHeT9OsUUUqzA1PugIhAOllfST9eIrXIw4m4CB2NUjxKts4XwpeGYcxxT3p%2B%2FTVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwplAUvNmXrXWbwiocq3ANIs0w%2FehD6yal5UCGe6vo87jk4pOX%2FAUt22lj3yFBd8dP%2BpEpdbNf%2Fi6DqAZMCnlZeVgO9A9KnzaLcPVZZDC4qjRbelmnf338b7LfDbAdYB4CDWVTLGIran%2BWryo9ephWAIO36K%2BTzvGBPJTYy33C9ebYcR6ghOxM%2FmBOcgWnZPi%2FrBh0I6ZKX9SNRRHEnHiwRrb%2FObn8ghQ%2FLQ1zF%2BKwjunkoueNWE75ogzjT4HnTvVnLUZHv7Hn9CPZCZSl%2BMMKnCtyYbT6ughfllhPRU8Ry52gY7cmQKd%2Fk8z50qSyE%2FV1n4%2FVJjMLkJ%2BOivXbAoAsbJi3w9dFr6yyQ7AJANdh%2BapHNncdf9XueKsMSx3InLWpEtfldXOYuFNfQ666f5KJIgyJlrxGksYxjb9cmAdw3yXb4DGqRYHP7c0PZkWu1Fh1xrRETuZknZ17yPPZAk8IOC3E%2BRBSDFvo%2FEfZySJ3UBCSfOvPKG2SJ0qaFPF1IDo%2BBIKbqQXPq%2BYOMNtjZ4OdJ%2Fmvep9TBaTELAk70QTV3DrUaRqRF21yDk2CSaKMC0u15WkAMiqAu8UJArBWQ2sZ1qHlc%2FhOGk%2Bmx6qisHKWTNVrJoWlX3gk5aqTk7C%2FiVjOw1BTu7%2FWhyTPuiDDOgJ3BBjqkAYShJ6Kdi4IANme%2B0m0o9rZDRmDTZaQM74sLTALccNuFuo8GlPzOTWVZskXpJTY3SiKF1hH60nrN%2FPc3kB%2BzG%2BjNGEWJEN05mlYPRQeRHg3zgnbnqd4nyPC9dFE5hVc7ad30cs5hPSya30zFRVQ1deyFapS1%2F2Y9TrJKEM552KxAuM5zV2gH%2BNVcbWx1VE5p1VY1s2dKDk1R1aEsHMs4VLffqv1%2F&X-Amz-Signature=43b079a2a9239de4d9e76fa8aa2b20797c94a6eaf87c6cf0f1189eb652c08db1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXZL5JM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUE2kZHCru8lhUeL6ZP74IvMr9SHeT9OsUUUqzA1PugIhAOllfST9eIrXIw4m4CB2NUjxKts4XwpeGYcxxT3p%2B%2FTVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwplAUvNmXrXWbwiocq3ANIs0w%2FehD6yal5UCGe6vo87jk4pOX%2FAUt22lj3yFBd8dP%2BpEpdbNf%2Fi6DqAZMCnlZeVgO9A9KnzaLcPVZZDC4qjRbelmnf338b7LfDbAdYB4CDWVTLGIran%2BWryo9ephWAIO36K%2BTzvGBPJTYy33C9ebYcR6ghOxM%2FmBOcgWnZPi%2FrBh0I6ZKX9SNRRHEnHiwRrb%2FObn8ghQ%2FLQ1zF%2BKwjunkoueNWE75ogzjT4HnTvVnLUZHv7Hn9CPZCZSl%2BMMKnCtyYbT6ughfllhPRU8Ry52gY7cmQKd%2Fk8z50qSyE%2FV1n4%2FVJjMLkJ%2BOivXbAoAsbJi3w9dFr6yyQ7AJANdh%2BapHNncdf9XueKsMSx3InLWpEtfldXOYuFNfQ666f5KJIgyJlrxGksYxjb9cmAdw3yXb4DGqRYHP7c0PZkWu1Fh1xrRETuZknZ17yPPZAk8IOC3E%2BRBSDFvo%2FEfZySJ3UBCSfOvPKG2SJ0qaFPF1IDo%2BBIKbqQXPq%2BYOMNtjZ4OdJ%2Fmvep9TBaTELAk70QTV3DrUaRqRF21yDk2CSaKMC0u15WkAMiqAu8UJArBWQ2sZ1qHlc%2FhOGk%2Bmx6qisHKWTNVrJoWlX3gk5aqTk7C%2FiVjOw1BTu7%2FWhyTPuiDDOgJ3BBjqkAYShJ6Kdi4IANme%2B0m0o9rZDRmDTZaQM74sLTALccNuFuo8GlPzOTWVZskXpJTY3SiKF1hH60nrN%2FPc3kB%2BzG%2BjNGEWJEN05mlYPRQeRHg3zgnbnqd4nyPC9dFE5hVc7ad30cs5hPSya30zFRVQ1deyFapS1%2F2Y9TrJKEM552KxAuM5zV2gH%2BNVcbWx1VE5p1VY1s2dKDk1R1aEsHMs4VLffqv1%2F&X-Amz-Signature=e6be446d03eb7f5ccb051583df388e8d1d68d554ef1b174b3b73753fa6090d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXZL5JM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUE2kZHCru8lhUeL6ZP74IvMr9SHeT9OsUUUqzA1PugIhAOllfST9eIrXIw4m4CB2NUjxKts4XwpeGYcxxT3p%2B%2FTVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwplAUvNmXrXWbwiocq3ANIs0w%2FehD6yal5UCGe6vo87jk4pOX%2FAUt22lj3yFBd8dP%2BpEpdbNf%2Fi6DqAZMCnlZeVgO9A9KnzaLcPVZZDC4qjRbelmnf338b7LfDbAdYB4CDWVTLGIran%2BWryo9ephWAIO36K%2BTzvGBPJTYy33C9ebYcR6ghOxM%2FmBOcgWnZPi%2FrBh0I6ZKX9SNRRHEnHiwRrb%2FObn8ghQ%2FLQ1zF%2BKwjunkoueNWE75ogzjT4HnTvVnLUZHv7Hn9CPZCZSl%2BMMKnCtyYbT6ughfllhPRU8Ry52gY7cmQKd%2Fk8z50qSyE%2FV1n4%2FVJjMLkJ%2BOivXbAoAsbJi3w9dFr6yyQ7AJANdh%2BapHNncdf9XueKsMSx3InLWpEtfldXOYuFNfQ666f5KJIgyJlrxGksYxjb9cmAdw3yXb4DGqRYHP7c0PZkWu1Fh1xrRETuZknZ17yPPZAk8IOC3E%2BRBSDFvo%2FEfZySJ3UBCSfOvPKG2SJ0qaFPF1IDo%2BBIKbqQXPq%2BYOMNtjZ4OdJ%2Fmvep9TBaTELAk70QTV3DrUaRqRF21yDk2CSaKMC0u15WkAMiqAu8UJArBWQ2sZ1qHlc%2FhOGk%2Bmx6qisHKWTNVrJoWlX3gk5aqTk7C%2FiVjOw1BTu7%2FWhyTPuiDDOgJ3BBjqkAYShJ6Kdi4IANme%2B0m0o9rZDRmDTZaQM74sLTALccNuFuo8GlPzOTWVZskXpJTY3SiKF1hH60nrN%2FPc3kB%2BzG%2BjNGEWJEN05mlYPRQeRHg3zgnbnqd4nyPC9dFE5hVc7ad30cs5hPSya30zFRVQ1deyFapS1%2F2Y9TrJKEM552KxAuM5zV2gH%2BNVcbWx1VE5p1VY1s2dKDk1R1aEsHMs4VLffqv1%2F&X-Amz-Signature=a0cc6a60b9fd01c2b74a9ef8c9db8686b3d9204018c9803114dede561fbed258&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXZL5JM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUE2kZHCru8lhUeL6ZP74IvMr9SHeT9OsUUUqzA1PugIhAOllfST9eIrXIw4m4CB2NUjxKts4XwpeGYcxxT3p%2B%2FTVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwplAUvNmXrXWbwiocq3ANIs0w%2FehD6yal5UCGe6vo87jk4pOX%2FAUt22lj3yFBd8dP%2BpEpdbNf%2Fi6DqAZMCnlZeVgO9A9KnzaLcPVZZDC4qjRbelmnf338b7LfDbAdYB4CDWVTLGIran%2BWryo9ephWAIO36K%2BTzvGBPJTYy33C9ebYcR6ghOxM%2FmBOcgWnZPi%2FrBh0I6ZKX9SNRRHEnHiwRrb%2FObn8ghQ%2FLQ1zF%2BKwjunkoueNWE75ogzjT4HnTvVnLUZHv7Hn9CPZCZSl%2BMMKnCtyYbT6ughfllhPRU8Ry52gY7cmQKd%2Fk8z50qSyE%2FV1n4%2FVJjMLkJ%2BOivXbAoAsbJi3w9dFr6yyQ7AJANdh%2BapHNncdf9XueKsMSx3InLWpEtfldXOYuFNfQ666f5KJIgyJlrxGksYxjb9cmAdw3yXb4DGqRYHP7c0PZkWu1Fh1xrRETuZknZ17yPPZAk8IOC3E%2BRBSDFvo%2FEfZySJ3UBCSfOvPKG2SJ0qaFPF1IDo%2BBIKbqQXPq%2BYOMNtjZ4OdJ%2Fmvep9TBaTELAk70QTV3DrUaRqRF21yDk2CSaKMC0u15WkAMiqAu8UJArBWQ2sZ1qHlc%2FhOGk%2Bmx6qisHKWTNVrJoWlX3gk5aqTk7C%2FiVjOw1BTu7%2FWhyTPuiDDOgJ3BBjqkAYShJ6Kdi4IANme%2B0m0o9rZDRmDTZaQM74sLTALccNuFuo8GlPzOTWVZskXpJTY3SiKF1hH60nrN%2FPc3kB%2BzG%2BjNGEWJEN05mlYPRQeRHg3zgnbnqd4nyPC9dFE5hVc7ad30cs5hPSya30zFRVQ1deyFapS1%2F2Y9TrJKEM552KxAuM5zV2gH%2BNVcbWx1VE5p1VY1s2dKDk1R1aEsHMs4VLffqv1%2F&X-Amz-Signature=f2f0b089c632a9407b5a9dca7a48f04cf8c777715fd55232fa04642b1a4b8933&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXZL5JM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLUE2kZHCru8lhUeL6ZP74IvMr9SHeT9OsUUUqzA1PugIhAOllfST9eIrXIw4m4CB2NUjxKts4XwpeGYcxxT3p%2B%2FTVKv8DCEcQABoMNjM3NDIzMTgzODA1IgwplAUvNmXrXWbwiocq3ANIs0w%2FehD6yal5UCGe6vo87jk4pOX%2FAUt22lj3yFBd8dP%2BpEpdbNf%2Fi6DqAZMCnlZeVgO9A9KnzaLcPVZZDC4qjRbelmnf338b7LfDbAdYB4CDWVTLGIran%2BWryo9ephWAIO36K%2BTzvGBPJTYy33C9ebYcR6ghOxM%2FmBOcgWnZPi%2FrBh0I6ZKX9SNRRHEnHiwRrb%2FObn8ghQ%2FLQ1zF%2BKwjunkoueNWE75ogzjT4HnTvVnLUZHv7Hn9CPZCZSl%2BMMKnCtyYbT6ughfllhPRU8Ry52gY7cmQKd%2Fk8z50qSyE%2FV1n4%2FVJjMLkJ%2BOivXbAoAsbJi3w9dFr6yyQ7AJANdh%2BapHNncdf9XueKsMSx3InLWpEtfldXOYuFNfQ666f5KJIgyJlrxGksYxjb9cmAdw3yXb4DGqRYHP7c0PZkWu1Fh1xrRETuZknZ17yPPZAk8IOC3E%2BRBSDFvo%2FEfZySJ3UBCSfOvPKG2SJ0qaFPF1IDo%2BBIKbqQXPq%2BYOMNtjZ4OdJ%2Fmvep9TBaTELAk70QTV3DrUaRqRF21yDk2CSaKMC0u15WkAMiqAu8UJArBWQ2sZ1qHlc%2FhOGk%2Bmx6qisHKWTNVrJoWlX3gk5aqTk7C%2FiVjOw1BTu7%2FWhyTPuiDDOgJ3BBjqkAYShJ6Kdi4IANme%2B0m0o9rZDRmDTZaQM74sLTALccNuFuo8GlPzOTWVZskXpJTY3SiKF1hH60nrN%2FPc3kB%2BzG%2BjNGEWJEN05mlYPRQeRHg3zgnbnqd4nyPC9dFE5hVc7ad30cs5hPSya30zFRVQ1deyFapS1%2F2Y9TrJKEM552KxAuM5zV2gH%2BNVcbWx1VE5p1VY1s2dKDk1R1aEsHMs4VLffqv1%2F&X-Amz-Signature=889c6bbeb8bfc14359ea6ec95164a5c44845c5742af157d1e01a8d3edfa35754&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

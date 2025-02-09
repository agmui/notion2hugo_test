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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBNLLDF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGwq5yWuJHzf%2F6wSfUsr2rFJCcyMjX%2BRl%2Fb%2BXPi2OduAiAixkZi6q0fa4ALYcd%2Fizd9CFrR9Fu4wjryD36FFBYDzCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnKWWYXtNWROHupTKtwDKh%2F1CRUcoybii2QSEcstyNrE3SYrl6sA7MCmKcCr6vDZHXhbx4cZY13jJjUwNJfb1SVoY39kLQfFwYTBbKH25w2ttBZbttM8mKy0fyFoSob48CQLbJR1kijmWKewCfXbwSBXyhBUIGPUlpUEa0C%2F%2BTWPwfvw7Ug%2Fz5mhKUMSUrxzZCdxlvPT4ub3P%2F4dXmL70SCH%2BEftJkqOQH%2BFW%2Fz86oWU3Vl9qWhSpqJybFItvOOIKrVGJKMxqu6kqwrSfaDAJh0%2Bf2sD8i61wrlaFfqgKtgfanRwmFF6MEe3sUymQriEuLQ4%2BCcKnfMy06DNjJsAuaeAng1q%2B6g5bkT3doB%2Ff%2BYXkGYzwPkUHkO3TCO9G833JXtsWXbwG5lGhiUpmn7jb4rApLsi6FfwgMx%2BsDWhKnhJH5cPg6U9SePi9K9MN1uj0E%2F9J0PJhKn822gmwoavmqmDML%2BNaZYcq6wmRcM%2Bdo0B2CmkjAQv6a51hYFwclW3eJpirUSog5X2Gf8A%2B8A0WWO4Qzfq2m3tgxH182VRqmbG4o3CkHuVt7x4%2Fpxu33bClY20D%2FBocRF89Lp%2BN39xASPUKSI2vIM2lf15uagTlDwzFSsUg5YLXDJZlCGtbITawZvw3EO7%2FBHU09sw5Y6kvQY6pgGeTtwZa1riUblr0lxXdckLUsGt7Yk0Ceq4nhopBFvLtpqyhzob%2BPJaCoaVQl%2FHQ2YbarB9IFyhL07p5gRbcdm8AS7rtDjpzsYadvt1HoA6%2F0xdA7ap1OZ0X4yF%2FoDhCM4fvSMG6ylityQIyDGHdXY1mW8sggqBW0IkLTYJSAjE8aqU8pxNzoWAeOluvVZ6iJ71SIoZdeIp481scYWwtlTC2xXfEDRp&X-Amz-Signature=8d3abb979b532fa1686ab15d8b535bcab98f4eebed359ea6cf8a992734865616&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBNLLDF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGwq5yWuJHzf%2F6wSfUsr2rFJCcyMjX%2BRl%2Fb%2BXPi2OduAiAixkZi6q0fa4ALYcd%2Fizd9CFrR9Fu4wjryD36FFBYDzCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnKWWYXtNWROHupTKtwDKh%2F1CRUcoybii2QSEcstyNrE3SYrl6sA7MCmKcCr6vDZHXhbx4cZY13jJjUwNJfb1SVoY39kLQfFwYTBbKH25w2ttBZbttM8mKy0fyFoSob48CQLbJR1kijmWKewCfXbwSBXyhBUIGPUlpUEa0C%2F%2BTWPwfvw7Ug%2Fz5mhKUMSUrxzZCdxlvPT4ub3P%2F4dXmL70SCH%2BEftJkqOQH%2BFW%2Fz86oWU3Vl9qWhSpqJybFItvOOIKrVGJKMxqu6kqwrSfaDAJh0%2Bf2sD8i61wrlaFfqgKtgfanRwmFF6MEe3sUymQriEuLQ4%2BCcKnfMy06DNjJsAuaeAng1q%2B6g5bkT3doB%2Ff%2BYXkGYzwPkUHkO3TCO9G833JXtsWXbwG5lGhiUpmn7jb4rApLsi6FfwgMx%2BsDWhKnhJH5cPg6U9SePi9K9MN1uj0E%2F9J0PJhKn822gmwoavmqmDML%2BNaZYcq6wmRcM%2Bdo0B2CmkjAQv6a51hYFwclW3eJpirUSog5X2Gf8A%2B8A0WWO4Qzfq2m3tgxH182VRqmbG4o3CkHuVt7x4%2Fpxu33bClY20D%2FBocRF89Lp%2BN39xASPUKSI2vIM2lf15uagTlDwzFSsUg5YLXDJZlCGtbITawZvw3EO7%2FBHU09sw5Y6kvQY6pgGeTtwZa1riUblr0lxXdckLUsGt7Yk0Ceq4nhopBFvLtpqyhzob%2BPJaCoaVQl%2FHQ2YbarB9IFyhL07p5gRbcdm8AS7rtDjpzsYadvt1HoA6%2F0xdA7ap1OZ0X4yF%2FoDhCM4fvSMG6ylityQIyDGHdXY1mW8sggqBW0IkLTYJSAjE8aqU8pxNzoWAeOluvVZ6iJ71SIoZdeIp481scYWwtlTC2xXfEDRp&X-Amz-Signature=ebfc1dee500480ecff31ae4099a259c8e1703e6ccd7c74b09079149e77d6928a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBNLLDF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGwq5yWuJHzf%2F6wSfUsr2rFJCcyMjX%2BRl%2Fb%2BXPi2OduAiAixkZi6q0fa4ALYcd%2Fizd9CFrR9Fu4wjryD36FFBYDzCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnKWWYXtNWROHupTKtwDKh%2F1CRUcoybii2QSEcstyNrE3SYrl6sA7MCmKcCr6vDZHXhbx4cZY13jJjUwNJfb1SVoY39kLQfFwYTBbKH25w2ttBZbttM8mKy0fyFoSob48CQLbJR1kijmWKewCfXbwSBXyhBUIGPUlpUEa0C%2F%2BTWPwfvw7Ug%2Fz5mhKUMSUrxzZCdxlvPT4ub3P%2F4dXmL70SCH%2BEftJkqOQH%2BFW%2Fz86oWU3Vl9qWhSpqJybFItvOOIKrVGJKMxqu6kqwrSfaDAJh0%2Bf2sD8i61wrlaFfqgKtgfanRwmFF6MEe3sUymQriEuLQ4%2BCcKnfMy06DNjJsAuaeAng1q%2B6g5bkT3doB%2Ff%2BYXkGYzwPkUHkO3TCO9G833JXtsWXbwG5lGhiUpmn7jb4rApLsi6FfwgMx%2BsDWhKnhJH5cPg6U9SePi9K9MN1uj0E%2F9J0PJhKn822gmwoavmqmDML%2BNaZYcq6wmRcM%2Bdo0B2CmkjAQv6a51hYFwclW3eJpirUSog5X2Gf8A%2B8A0WWO4Qzfq2m3tgxH182VRqmbG4o3CkHuVt7x4%2Fpxu33bClY20D%2FBocRF89Lp%2BN39xASPUKSI2vIM2lf15uagTlDwzFSsUg5YLXDJZlCGtbITawZvw3EO7%2FBHU09sw5Y6kvQY6pgGeTtwZa1riUblr0lxXdckLUsGt7Yk0Ceq4nhopBFvLtpqyhzob%2BPJaCoaVQl%2FHQ2YbarB9IFyhL07p5gRbcdm8AS7rtDjpzsYadvt1HoA6%2F0xdA7ap1OZ0X4yF%2FoDhCM4fvSMG6ylityQIyDGHdXY1mW8sggqBW0IkLTYJSAjE8aqU8pxNzoWAeOluvVZ6iJ71SIoZdeIp481scYWwtlTC2xXfEDRp&X-Amz-Signature=3ca50a1dda7b1aae3e688ffb390bf8b48cda86b2c8f3ffb169e3464b49fc52b8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBNLLDF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGwq5yWuJHzf%2F6wSfUsr2rFJCcyMjX%2BRl%2Fb%2BXPi2OduAiAixkZi6q0fa4ALYcd%2Fizd9CFrR9Fu4wjryD36FFBYDzCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnKWWYXtNWROHupTKtwDKh%2F1CRUcoybii2QSEcstyNrE3SYrl6sA7MCmKcCr6vDZHXhbx4cZY13jJjUwNJfb1SVoY39kLQfFwYTBbKH25w2ttBZbttM8mKy0fyFoSob48CQLbJR1kijmWKewCfXbwSBXyhBUIGPUlpUEa0C%2F%2BTWPwfvw7Ug%2Fz5mhKUMSUrxzZCdxlvPT4ub3P%2F4dXmL70SCH%2BEftJkqOQH%2BFW%2Fz86oWU3Vl9qWhSpqJybFItvOOIKrVGJKMxqu6kqwrSfaDAJh0%2Bf2sD8i61wrlaFfqgKtgfanRwmFF6MEe3sUymQriEuLQ4%2BCcKnfMy06DNjJsAuaeAng1q%2B6g5bkT3doB%2Ff%2BYXkGYzwPkUHkO3TCO9G833JXtsWXbwG5lGhiUpmn7jb4rApLsi6FfwgMx%2BsDWhKnhJH5cPg6U9SePi9K9MN1uj0E%2F9J0PJhKn822gmwoavmqmDML%2BNaZYcq6wmRcM%2Bdo0B2CmkjAQv6a51hYFwclW3eJpirUSog5X2Gf8A%2B8A0WWO4Qzfq2m3tgxH182VRqmbG4o3CkHuVt7x4%2Fpxu33bClY20D%2FBocRF89Lp%2BN39xASPUKSI2vIM2lf15uagTlDwzFSsUg5YLXDJZlCGtbITawZvw3EO7%2FBHU09sw5Y6kvQY6pgGeTtwZa1riUblr0lxXdckLUsGt7Yk0Ceq4nhopBFvLtpqyhzob%2BPJaCoaVQl%2FHQ2YbarB9IFyhL07p5gRbcdm8AS7rtDjpzsYadvt1HoA6%2F0xdA7ap1OZ0X4yF%2FoDhCM4fvSMG6ylityQIyDGHdXY1mW8sggqBW0IkLTYJSAjE8aqU8pxNzoWAeOluvVZ6iJ71SIoZdeIp481scYWwtlTC2xXfEDRp&X-Amz-Signature=9515015ae37e2b1f9a936b5c023c3b926478acf5cb7a5630eeb4c1932cc9efe4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBNLLDF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGwq5yWuJHzf%2F6wSfUsr2rFJCcyMjX%2BRl%2Fb%2BXPi2OduAiAixkZi6q0fa4ALYcd%2Fizd9CFrR9Fu4wjryD36FFBYDzCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnKWWYXtNWROHupTKtwDKh%2F1CRUcoybii2QSEcstyNrE3SYrl6sA7MCmKcCr6vDZHXhbx4cZY13jJjUwNJfb1SVoY39kLQfFwYTBbKH25w2ttBZbttM8mKy0fyFoSob48CQLbJR1kijmWKewCfXbwSBXyhBUIGPUlpUEa0C%2F%2BTWPwfvw7Ug%2Fz5mhKUMSUrxzZCdxlvPT4ub3P%2F4dXmL70SCH%2BEftJkqOQH%2BFW%2Fz86oWU3Vl9qWhSpqJybFItvOOIKrVGJKMxqu6kqwrSfaDAJh0%2Bf2sD8i61wrlaFfqgKtgfanRwmFF6MEe3sUymQriEuLQ4%2BCcKnfMy06DNjJsAuaeAng1q%2B6g5bkT3doB%2Ff%2BYXkGYzwPkUHkO3TCO9G833JXtsWXbwG5lGhiUpmn7jb4rApLsi6FfwgMx%2BsDWhKnhJH5cPg6U9SePi9K9MN1uj0E%2F9J0PJhKn822gmwoavmqmDML%2BNaZYcq6wmRcM%2Bdo0B2CmkjAQv6a51hYFwclW3eJpirUSog5X2Gf8A%2B8A0WWO4Qzfq2m3tgxH182VRqmbG4o3CkHuVt7x4%2Fpxu33bClY20D%2FBocRF89Lp%2BN39xASPUKSI2vIM2lf15uagTlDwzFSsUg5YLXDJZlCGtbITawZvw3EO7%2FBHU09sw5Y6kvQY6pgGeTtwZa1riUblr0lxXdckLUsGt7Yk0Ceq4nhopBFvLtpqyhzob%2BPJaCoaVQl%2FHQ2YbarB9IFyhL07p5gRbcdm8AS7rtDjpzsYadvt1HoA6%2F0xdA7ap1OZ0X4yF%2FoDhCM4fvSMG6ylityQIyDGHdXY1mW8sggqBW0IkLTYJSAjE8aqU8pxNzoWAeOluvVZ6iJ71SIoZdeIp481scYWwtlTC2xXfEDRp&X-Amz-Signature=f83c1a1a8aef9407f5e82f97dd239a3d6bfe02f45e72daf9cd7e9bec008912e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBNLLDF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGwq5yWuJHzf%2F6wSfUsr2rFJCcyMjX%2BRl%2Fb%2BXPi2OduAiAixkZi6q0fa4ALYcd%2Fizd9CFrR9Fu4wjryD36FFBYDzCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnKWWYXtNWROHupTKtwDKh%2F1CRUcoybii2QSEcstyNrE3SYrl6sA7MCmKcCr6vDZHXhbx4cZY13jJjUwNJfb1SVoY39kLQfFwYTBbKH25w2ttBZbttM8mKy0fyFoSob48CQLbJR1kijmWKewCfXbwSBXyhBUIGPUlpUEa0C%2F%2BTWPwfvw7Ug%2Fz5mhKUMSUrxzZCdxlvPT4ub3P%2F4dXmL70SCH%2BEftJkqOQH%2BFW%2Fz86oWU3Vl9qWhSpqJybFItvOOIKrVGJKMxqu6kqwrSfaDAJh0%2Bf2sD8i61wrlaFfqgKtgfanRwmFF6MEe3sUymQriEuLQ4%2BCcKnfMy06DNjJsAuaeAng1q%2B6g5bkT3doB%2Ff%2BYXkGYzwPkUHkO3TCO9G833JXtsWXbwG5lGhiUpmn7jb4rApLsi6FfwgMx%2BsDWhKnhJH5cPg6U9SePi9K9MN1uj0E%2F9J0PJhKn822gmwoavmqmDML%2BNaZYcq6wmRcM%2Bdo0B2CmkjAQv6a51hYFwclW3eJpirUSog5X2Gf8A%2B8A0WWO4Qzfq2m3tgxH182VRqmbG4o3CkHuVt7x4%2Fpxu33bClY20D%2FBocRF89Lp%2BN39xASPUKSI2vIM2lf15uagTlDwzFSsUg5YLXDJZlCGtbITawZvw3EO7%2FBHU09sw5Y6kvQY6pgGeTtwZa1riUblr0lxXdckLUsGt7Yk0Ceq4nhopBFvLtpqyhzob%2BPJaCoaVQl%2FHQ2YbarB9IFyhL07p5gRbcdm8AS7rtDjpzsYadvt1HoA6%2F0xdA7ap1OZ0X4yF%2FoDhCM4fvSMG6ylityQIyDGHdXY1mW8sggqBW0IkLTYJSAjE8aqU8pxNzoWAeOluvVZ6iJ71SIoZdeIp481scYWwtlTC2xXfEDRp&X-Amz-Signature=b4e8785115e6ba0d0169d86338a08238635f45fe59601be5a6cc03c5d3cbc30a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBNLLDF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGwq5yWuJHzf%2F6wSfUsr2rFJCcyMjX%2BRl%2Fb%2BXPi2OduAiAixkZi6q0fa4ALYcd%2Fizd9CFrR9Fu4wjryD36FFBYDzCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnKWWYXtNWROHupTKtwDKh%2F1CRUcoybii2QSEcstyNrE3SYrl6sA7MCmKcCr6vDZHXhbx4cZY13jJjUwNJfb1SVoY39kLQfFwYTBbKH25w2ttBZbttM8mKy0fyFoSob48CQLbJR1kijmWKewCfXbwSBXyhBUIGPUlpUEa0C%2F%2BTWPwfvw7Ug%2Fz5mhKUMSUrxzZCdxlvPT4ub3P%2F4dXmL70SCH%2BEftJkqOQH%2BFW%2Fz86oWU3Vl9qWhSpqJybFItvOOIKrVGJKMxqu6kqwrSfaDAJh0%2Bf2sD8i61wrlaFfqgKtgfanRwmFF6MEe3sUymQriEuLQ4%2BCcKnfMy06DNjJsAuaeAng1q%2B6g5bkT3doB%2Ff%2BYXkGYzwPkUHkO3TCO9G833JXtsWXbwG5lGhiUpmn7jb4rApLsi6FfwgMx%2BsDWhKnhJH5cPg6U9SePi9K9MN1uj0E%2F9J0PJhKn822gmwoavmqmDML%2BNaZYcq6wmRcM%2Bdo0B2CmkjAQv6a51hYFwclW3eJpirUSog5X2Gf8A%2B8A0WWO4Qzfq2m3tgxH182VRqmbG4o3CkHuVt7x4%2Fpxu33bClY20D%2FBocRF89Lp%2BN39xASPUKSI2vIM2lf15uagTlDwzFSsUg5YLXDJZlCGtbITawZvw3EO7%2FBHU09sw5Y6kvQY6pgGeTtwZa1riUblr0lxXdckLUsGt7Yk0Ceq4nhopBFvLtpqyhzob%2BPJaCoaVQl%2FHQ2YbarB9IFyhL07p5gRbcdm8AS7rtDjpzsYadvt1HoA6%2F0xdA7ap1OZ0X4yF%2FoDhCM4fvSMG6ylityQIyDGHdXY1mW8sggqBW0IkLTYJSAjE8aqU8pxNzoWAeOluvVZ6iJ71SIoZdeIp481scYWwtlTC2xXfEDRp&X-Amz-Signature=462792ce3abcbfa2ac32ad25670b1473e62c11bffd513c3fce8f9458e4736e36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBNLLDF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGwq5yWuJHzf%2F6wSfUsr2rFJCcyMjX%2BRl%2Fb%2BXPi2OduAiAixkZi6q0fa4ALYcd%2Fizd9CFrR9Fu4wjryD36FFBYDzCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnKWWYXtNWROHupTKtwDKh%2F1CRUcoybii2QSEcstyNrE3SYrl6sA7MCmKcCr6vDZHXhbx4cZY13jJjUwNJfb1SVoY39kLQfFwYTBbKH25w2ttBZbttM8mKy0fyFoSob48CQLbJR1kijmWKewCfXbwSBXyhBUIGPUlpUEa0C%2F%2BTWPwfvw7Ug%2Fz5mhKUMSUrxzZCdxlvPT4ub3P%2F4dXmL70SCH%2BEftJkqOQH%2BFW%2Fz86oWU3Vl9qWhSpqJybFItvOOIKrVGJKMxqu6kqwrSfaDAJh0%2Bf2sD8i61wrlaFfqgKtgfanRwmFF6MEe3sUymQriEuLQ4%2BCcKnfMy06DNjJsAuaeAng1q%2B6g5bkT3doB%2Ff%2BYXkGYzwPkUHkO3TCO9G833JXtsWXbwG5lGhiUpmn7jb4rApLsi6FfwgMx%2BsDWhKnhJH5cPg6U9SePi9K9MN1uj0E%2F9J0PJhKn822gmwoavmqmDML%2BNaZYcq6wmRcM%2Bdo0B2CmkjAQv6a51hYFwclW3eJpirUSog5X2Gf8A%2B8A0WWO4Qzfq2m3tgxH182VRqmbG4o3CkHuVt7x4%2Fpxu33bClY20D%2FBocRF89Lp%2BN39xASPUKSI2vIM2lf15uagTlDwzFSsUg5YLXDJZlCGtbITawZvw3EO7%2FBHU09sw5Y6kvQY6pgGeTtwZa1riUblr0lxXdckLUsGt7Yk0Ceq4nhopBFvLtpqyhzob%2BPJaCoaVQl%2FHQ2YbarB9IFyhL07p5gRbcdm8AS7rtDjpzsYadvt1HoA6%2F0xdA7ap1OZ0X4yF%2FoDhCM4fvSMG6ylityQIyDGHdXY1mW8sggqBW0IkLTYJSAjE8aqU8pxNzoWAeOluvVZ6iJ71SIoZdeIp481scYWwtlTC2xXfEDRp&X-Amz-Signature=0a7614ba492395c5240754644413eceba2589c517c1e4678597aec3b227fa931&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

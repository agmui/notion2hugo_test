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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DI6WZV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9tRYjSb1yLsJJC4s9Xub5GdfXnGJpwGKivF8yt7m1dAiBVNM9eMmDp4sSVj6Qd5M9bfQoWuZbWHTgPcddwOceLIyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv8QiaPn9Mv35pZaKtwD3cQXEvp1Pg2e7jIio2xPf%2BZcMqZA7sJ%2F8uCds7BwAk31rEFYuG%2BrMTgiBRdaJNXtXb%2BvTwP%2Bh9voyzU4ZNJd9Wwjm1am4kclRnI2%2FZuME0nSYp6%2FAGkYI4ByficuFwnP6qH7OT6b9Gd6rOoz12tTecY%2BIILN29gspg6DarDfl2bN2s8YOzfLi9MXGB1ZBoLyHLvwZjjIG5M33p0B4tnacBvZwUeFEnMRFKVNFmTEZgldSilt6%2BzYt0DxrsicwkJZyh48oZM5gLUBOuTluR%2Bgs1wNYwZ2qDkOU185iqrz0EbLNHA7HK7NWqRM5IKjpn2diezb24l5bX4bZWz%2BzaPNz8EJyR1sk%2FeRzhdmAaH9krUv1sXTlDFfBgdmJln8AMS8WcvKPrmOY0eur%2B7gKAXLX%2FT8orvnhMPrQhem3XualmnPL2CZ7xVqylfJNmBRTA6%2BF%2F1fqbx6DPtc2tl8QjObHcq6NwssgCKZ%2BpuZnB7lm9khO0i4S%2FOdrfnl7xl0TvprzX8szUr90OCLgMVHAkxXcPjUaQeGY93%2FxHbXUVjDpS6RNjpDo%2FS56emzzka0q0mJxfMFmLC0U18mcSqBm2pXiN7BpJSoZW%2BujM0WXS8iH5bjEv1XlCFPgIJIdbIw0%2F2FvwY6pgE2j78qVQVTEBOEBL3pMacOIEt%2BPBVyBryi86hmnaScKD5hrNIa5It0J1Kig2qh3uTXiec9jFeelc6vVJN%2Bd%2FL%2FY1xlpT8p1gxcAUZ%2FUg5QumnTOuW3VAA1MVFuBYSXQKw1buFbBD6VzRypot%2FnLe%2F8uJzWq%2FYfgCTn4kOIEMxLt7LQ1gVDmEDfBhf6AAezNqsIouXHkXBYbcyEsFaaUQIYRqOlk0yK&X-Amz-Signature=1e4d1412c79622f00d55938bc5afffea7c22999ef81c7a2b11acac67680edcfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DI6WZV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9tRYjSb1yLsJJC4s9Xub5GdfXnGJpwGKivF8yt7m1dAiBVNM9eMmDp4sSVj6Qd5M9bfQoWuZbWHTgPcddwOceLIyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv8QiaPn9Mv35pZaKtwD3cQXEvp1Pg2e7jIio2xPf%2BZcMqZA7sJ%2F8uCds7BwAk31rEFYuG%2BrMTgiBRdaJNXtXb%2BvTwP%2Bh9voyzU4ZNJd9Wwjm1am4kclRnI2%2FZuME0nSYp6%2FAGkYI4ByficuFwnP6qH7OT6b9Gd6rOoz12tTecY%2BIILN29gspg6DarDfl2bN2s8YOzfLi9MXGB1ZBoLyHLvwZjjIG5M33p0B4tnacBvZwUeFEnMRFKVNFmTEZgldSilt6%2BzYt0DxrsicwkJZyh48oZM5gLUBOuTluR%2Bgs1wNYwZ2qDkOU185iqrz0EbLNHA7HK7NWqRM5IKjpn2diezb24l5bX4bZWz%2BzaPNz8EJyR1sk%2FeRzhdmAaH9krUv1sXTlDFfBgdmJln8AMS8WcvKPrmOY0eur%2B7gKAXLX%2FT8orvnhMPrQhem3XualmnPL2CZ7xVqylfJNmBRTA6%2BF%2F1fqbx6DPtc2tl8QjObHcq6NwssgCKZ%2BpuZnB7lm9khO0i4S%2FOdrfnl7xl0TvprzX8szUr90OCLgMVHAkxXcPjUaQeGY93%2FxHbXUVjDpS6RNjpDo%2FS56emzzka0q0mJxfMFmLC0U18mcSqBm2pXiN7BpJSoZW%2BujM0WXS8iH5bjEv1XlCFPgIJIdbIw0%2F2FvwY6pgE2j78qVQVTEBOEBL3pMacOIEt%2BPBVyBryi86hmnaScKD5hrNIa5It0J1Kig2qh3uTXiec9jFeelc6vVJN%2Bd%2FL%2FY1xlpT8p1gxcAUZ%2FUg5QumnTOuW3VAA1MVFuBYSXQKw1buFbBD6VzRypot%2FnLe%2F8uJzWq%2FYfgCTn4kOIEMxLt7LQ1gVDmEDfBhf6AAezNqsIouXHkXBYbcyEsFaaUQIYRqOlk0yK&X-Amz-Signature=94a075a59d262dfbfb248603605c1e79d5dc9fd6637b6fdcb66a0a1d98fe4697&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DI6WZV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9tRYjSb1yLsJJC4s9Xub5GdfXnGJpwGKivF8yt7m1dAiBVNM9eMmDp4sSVj6Qd5M9bfQoWuZbWHTgPcddwOceLIyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv8QiaPn9Mv35pZaKtwD3cQXEvp1Pg2e7jIio2xPf%2BZcMqZA7sJ%2F8uCds7BwAk31rEFYuG%2BrMTgiBRdaJNXtXb%2BvTwP%2Bh9voyzU4ZNJd9Wwjm1am4kclRnI2%2FZuME0nSYp6%2FAGkYI4ByficuFwnP6qH7OT6b9Gd6rOoz12tTecY%2BIILN29gspg6DarDfl2bN2s8YOzfLi9MXGB1ZBoLyHLvwZjjIG5M33p0B4tnacBvZwUeFEnMRFKVNFmTEZgldSilt6%2BzYt0DxrsicwkJZyh48oZM5gLUBOuTluR%2Bgs1wNYwZ2qDkOU185iqrz0EbLNHA7HK7NWqRM5IKjpn2diezb24l5bX4bZWz%2BzaPNz8EJyR1sk%2FeRzhdmAaH9krUv1sXTlDFfBgdmJln8AMS8WcvKPrmOY0eur%2B7gKAXLX%2FT8orvnhMPrQhem3XualmnPL2CZ7xVqylfJNmBRTA6%2BF%2F1fqbx6DPtc2tl8QjObHcq6NwssgCKZ%2BpuZnB7lm9khO0i4S%2FOdrfnl7xl0TvprzX8szUr90OCLgMVHAkxXcPjUaQeGY93%2FxHbXUVjDpS6RNjpDo%2FS56emzzka0q0mJxfMFmLC0U18mcSqBm2pXiN7BpJSoZW%2BujM0WXS8iH5bjEv1XlCFPgIJIdbIw0%2F2FvwY6pgE2j78qVQVTEBOEBL3pMacOIEt%2BPBVyBryi86hmnaScKD5hrNIa5It0J1Kig2qh3uTXiec9jFeelc6vVJN%2Bd%2FL%2FY1xlpT8p1gxcAUZ%2FUg5QumnTOuW3VAA1MVFuBYSXQKw1buFbBD6VzRypot%2FnLe%2F8uJzWq%2FYfgCTn4kOIEMxLt7LQ1gVDmEDfBhf6AAezNqsIouXHkXBYbcyEsFaaUQIYRqOlk0yK&X-Amz-Signature=a5db486baa0d3fdceab1a587100a8d468e0ff84569804b0e928b7a3be8235f05&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DI6WZV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9tRYjSb1yLsJJC4s9Xub5GdfXnGJpwGKivF8yt7m1dAiBVNM9eMmDp4sSVj6Qd5M9bfQoWuZbWHTgPcddwOceLIyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv8QiaPn9Mv35pZaKtwD3cQXEvp1Pg2e7jIio2xPf%2BZcMqZA7sJ%2F8uCds7BwAk31rEFYuG%2BrMTgiBRdaJNXtXb%2BvTwP%2Bh9voyzU4ZNJd9Wwjm1am4kclRnI2%2FZuME0nSYp6%2FAGkYI4ByficuFwnP6qH7OT6b9Gd6rOoz12tTecY%2BIILN29gspg6DarDfl2bN2s8YOzfLi9MXGB1ZBoLyHLvwZjjIG5M33p0B4tnacBvZwUeFEnMRFKVNFmTEZgldSilt6%2BzYt0DxrsicwkJZyh48oZM5gLUBOuTluR%2Bgs1wNYwZ2qDkOU185iqrz0EbLNHA7HK7NWqRM5IKjpn2diezb24l5bX4bZWz%2BzaPNz8EJyR1sk%2FeRzhdmAaH9krUv1sXTlDFfBgdmJln8AMS8WcvKPrmOY0eur%2B7gKAXLX%2FT8orvnhMPrQhem3XualmnPL2CZ7xVqylfJNmBRTA6%2BF%2F1fqbx6DPtc2tl8QjObHcq6NwssgCKZ%2BpuZnB7lm9khO0i4S%2FOdrfnl7xl0TvprzX8szUr90OCLgMVHAkxXcPjUaQeGY93%2FxHbXUVjDpS6RNjpDo%2FS56emzzka0q0mJxfMFmLC0U18mcSqBm2pXiN7BpJSoZW%2BujM0WXS8iH5bjEv1XlCFPgIJIdbIw0%2F2FvwY6pgE2j78qVQVTEBOEBL3pMacOIEt%2BPBVyBryi86hmnaScKD5hrNIa5It0J1Kig2qh3uTXiec9jFeelc6vVJN%2Bd%2FL%2FY1xlpT8p1gxcAUZ%2FUg5QumnTOuW3VAA1MVFuBYSXQKw1buFbBD6VzRypot%2FnLe%2F8uJzWq%2FYfgCTn4kOIEMxLt7LQ1gVDmEDfBhf6AAezNqsIouXHkXBYbcyEsFaaUQIYRqOlk0yK&X-Amz-Signature=cbbefe646be69d4aad793f7c2b6f2a4720315e3b8fabcffa8fa1bba0f903f244&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DI6WZV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9tRYjSb1yLsJJC4s9Xub5GdfXnGJpwGKivF8yt7m1dAiBVNM9eMmDp4sSVj6Qd5M9bfQoWuZbWHTgPcddwOceLIyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv8QiaPn9Mv35pZaKtwD3cQXEvp1Pg2e7jIio2xPf%2BZcMqZA7sJ%2F8uCds7BwAk31rEFYuG%2BrMTgiBRdaJNXtXb%2BvTwP%2Bh9voyzU4ZNJd9Wwjm1am4kclRnI2%2FZuME0nSYp6%2FAGkYI4ByficuFwnP6qH7OT6b9Gd6rOoz12tTecY%2BIILN29gspg6DarDfl2bN2s8YOzfLi9MXGB1ZBoLyHLvwZjjIG5M33p0B4tnacBvZwUeFEnMRFKVNFmTEZgldSilt6%2BzYt0DxrsicwkJZyh48oZM5gLUBOuTluR%2Bgs1wNYwZ2qDkOU185iqrz0EbLNHA7HK7NWqRM5IKjpn2diezb24l5bX4bZWz%2BzaPNz8EJyR1sk%2FeRzhdmAaH9krUv1sXTlDFfBgdmJln8AMS8WcvKPrmOY0eur%2B7gKAXLX%2FT8orvnhMPrQhem3XualmnPL2CZ7xVqylfJNmBRTA6%2BF%2F1fqbx6DPtc2tl8QjObHcq6NwssgCKZ%2BpuZnB7lm9khO0i4S%2FOdrfnl7xl0TvprzX8szUr90OCLgMVHAkxXcPjUaQeGY93%2FxHbXUVjDpS6RNjpDo%2FS56emzzka0q0mJxfMFmLC0U18mcSqBm2pXiN7BpJSoZW%2BujM0WXS8iH5bjEv1XlCFPgIJIdbIw0%2F2FvwY6pgE2j78qVQVTEBOEBL3pMacOIEt%2BPBVyBryi86hmnaScKD5hrNIa5It0J1Kig2qh3uTXiec9jFeelc6vVJN%2Bd%2FL%2FY1xlpT8p1gxcAUZ%2FUg5QumnTOuW3VAA1MVFuBYSXQKw1buFbBD6VzRypot%2FnLe%2F8uJzWq%2FYfgCTn4kOIEMxLt7LQ1gVDmEDfBhf6AAezNqsIouXHkXBYbcyEsFaaUQIYRqOlk0yK&X-Amz-Signature=622ed7117894c66fa83a7083fab2766c472b2b9120381c56e0433d50e1849c27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DI6WZV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9tRYjSb1yLsJJC4s9Xub5GdfXnGJpwGKivF8yt7m1dAiBVNM9eMmDp4sSVj6Qd5M9bfQoWuZbWHTgPcddwOceLIyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv8QiaPn9Mv35pZaKtwD3cQXEvp1Pg2e7jIio2xPf%2BZcMqZA7sJ%2F8uCds7BwAk31rEFYuG%2BrMTgiBRdaJNXtXb%2BvTwP%2Bh9voyzU4ZNJd9Wwjm1am4kclRnI2%2FZuME0nSYp6%2FAGkYI4ByficuFwnP6qH7OT6b9Gd6rOoz12tTecY%2BIILN29gspg6DarDfl2bN2s8YOzfLi9MXGB1ZBoLyHLvwZjjIG5M33p0B4tnacBvZwUeFEnMRFKVNFmTEZgldSilt6%2BzYt0DxrsicwkJZyh48oZM5gLUBOuTluR%2Bgs1wNYwZ2qDkOU185iqrz0EbLNHA7HK7NWqRM5IKjpn2diezb24l5bX4bZWz%2BzaPNz8EJyR1sk%2FeRzhdmAaH9krUv1sXTlDFfBgdmJln8AMS8WcvKPrmOY0eur%2B7gKAXLX%2FT8orvnhMPrQhem3XualmnPL2CZ7xVqylfJNmBRTA6%2BF%2F1fqbx6DPtc2tl8QjObHcq6NwssgCKZ%2BpuZnB7lm9khO0i4S%2FOdrfnl7xl0TvprzX8szUr90OCLgMVHAkxXcPjUaQeGY93%2FxHbXUVjDpS6RNjpDo%2FS56emzzka0q0mJxfMFmLC0U18mcSqBm2pXiN7BpJSoZW%2BujM0WXS8iH5bjEv1XlCFPgIJIdbIw0%2F2FvwY6pgE2j78qVQVTEBOEBL3pMacOIEt%2BPBVyBryi86hmnaScKD5hrNIa5It0J1Kig2qh3uTXiec9jFeelc6vVJN%2Bd%2FL%2FY1xlpT8p1gxcAUZ%2FUg5QumnTOuW3VAA1MVFuBYSXQKw1buFbBD6VzRypot%2FnLe%2F8uJzWq%2FYfgCTn4kOIEMxLt7LQ1gVDmEDfBhf6AAezNqsIouXHkXBYbcyEsFaaUQIYRqOlk0yK&X-Amz-Signature=818e064fd627298a62defdef6e3c5aec96cd55f85154ca2c8c9c8d755b961c61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DI6WZV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9tRYjSb1yLsJJC4s9Xub5GdfXnGJpwGKivF8yt7m1dAiBVNM9eMmDp4sSVj6Qd5M9bfQoWuZbWHTgPcddwOceLIyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv8QiaPn9Mv35pZaKtwD3cQXEvp1Pg2e7jIio2xPf%2BZcMqZA7sJ%2F8uCds7BwAk31rEFYuG%2BrMTgiBRdaJNXtXb%2BvTwP%2Bh9voyzU4ZNJd9Wwjm1am4kclRnI2%2FZuME0nSYp6%2FAGkYI4ByficuFwnP6qH7OT6b9Gd6rOoz12tTecY%2BIILN29gspg6DarDfl2bN2s8YOzfLi9MXGB1ZBoLyHLvwZjjIG5M33p0B4tnacBvZwUeFEnMRFKVNFmTEZgldSilt6%2BzYt0DxrsicwkJZyh48oZM5gLUBOuTluR%2Bgs1wNYwZ2qDkOU185iqrz0EbLNHA7HK7NWqRM5IKjpn2diezb24l5bX4bZWz%2BzaPNz8EJyR1sk%2FeRzhdmAaH9krUv1sXTlDFfBgdmJln8AMS8WcvKPrmOY0eur%2B7gKAXLX%2FT8orvnhMPrQhem3XualmnPL2CZ7xVqylfJNmBRTA6%2BF%2F1fqbx6DPtc2tl8QjObHcq6NwssgCKZ%2BpuZnB7lm9khO0i4S%2FOdrfnl7xl0TvprzX8szUr90OCLgMVHAkxXcPjUaQeGY93%2FxHbXUVjDpS6RNjpDo%2FS56emzzka0q0mJxfMFmLC0U18mcSqBm2pXiN7BpJSoZW%2BujM0WXS8iH5bjEv1XlCFPgIJIdbIw0%2F2FvwY6pgE2j78qVQVTEBOEBL3pMacOIEt%2BPBVyBryi86hmnaScKD5hrNIa5It0J1Kig2qh3uTXiec9jFeelc6vVJN%2Bd%2FL%2FY1xlpT8p1gxcAUZ%2FUg5QumnTOuW3VAA1MVFuBYSXQKw1buFbBD6VzRypot%2FnLe%2F8uJzWq%2FYfgCTn4kOIEMxLt7LQ1gVDmEDfBhf6AAezNqsIouXHkXBYbcyEsFaaUQIYRqOlk0yK&X-Amz-Signature=407242c3620038679ddcb5a7e834d9d948a426197f3fa2b6e94bd134bd8f2026&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DI6WZV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9tRYjSb1yLsJJC4s9Xub5GdfXnGJpwGKivF8yt7m1dAiBVNM9eMmDp4sSVj6Qd5M9bfQoWuZbWHTgPcddwOceLIyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv8QiaPn9Mv35pZaKtwD3cQXEvp1Pg2e7jIio2xPf%2BZcMqZA7sJ%2F8uCds7BwAk31rEFYuG%2BrMTgiBRdaJNXtXb%2BvTwP%2Bh9voyzU4ZNJd9Wwjm1am4kclRnI2%2FZuME0nSYp6%2FAGkYI4ByficuFwnP6qH7OT6b9Gd6rOoz12tTecY%2BIILN29gspg6DarDfl2bN2s8YOzfLi9MXGB1ZBoLyHLvwZjjIG5M33p0B4tnacBvZwUeFEnMRFKVNFmTEZgldSilt6%2BzYt0DxrsicwkJZyh48oZM5gLUBOuTluR%2Bgs1wNYwZ2qDkOU185iqrz0EbLNHA7HK7NWqRM5IKjpn2diezb24l5bX4bZWz%2BzaPNz8EJyR1sk%2FeRzhdmAaH9krUv1sXTlDFfBgdmJln8AMS8WcvKPrmOY0eur%2B7gKAXLX%2FT8orvnhMPrQhem3XualmnPL2CZ7xVqylfJNmBRTA6%2BF%2F1fqbx6DPtc2tl8QjObHcq6NwssgCKZ%2BpuZnB7lm9khO0i4S%2FOdrfnl7xl0TvprzX8szUr90OCLgMVHAkxXcPjUaQeGY93%2FxHbXUVjDpS6RNjpDo%2FS56emzzka0q0mJxfMFmLC0U18mcSqBm2pXiN7BpJSoZW%2BujM0WXS8iH5bjEv1XlCFPgIJIdbIw0%2F2FvwY6pgE2j78qVQVTEBOEBL3pMacOIEt%2BPBVyBryi86hmnaScKD5hrNIa5It0J1Kig2qh3uTXiec9jFeelc6vVJN%2Bd%2FL%2FY1xlpT8p1gxcAUZ%2FUg5QumnTOuW3VAA1MVFuBYSXQKw1buFbBD6VzRypot%2FnLe%2F8uJzWq%2FYfgCTn4kOIEMxLt7LQ1gVDmEDfBhf6AAezNqsIouXHkXBYbcyEsFaaUQIYRqOlk0yK&X-Amz-Signature=28f43da4de665dbfb12bbd81ea32d5830c4035a26db8025fa39f66ec75db21e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

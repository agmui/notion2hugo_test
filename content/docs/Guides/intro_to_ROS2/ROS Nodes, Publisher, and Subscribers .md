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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22CCPBE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmJvM9WLBPlFLgIvr6%2FWgphyktT6BUKhf9zBbek5LlHAiA51obfgYAkE0vP5Ts2eoa9N8rDs9FbvIngkBjo8J75HSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM615lMND5%2FDDDWV66KtwDj9qr9hFenMY%2BoZPptkb0qkMlmOffmWCTL5sdu18q53Uh8EAhQYGIGV2e3IGmH9bc2M9sEvucy9L2DoqTfJ0z2VMDVcEBQnCFGM59GhSxYz3pOtOTYGeoimiI7nys0NF74ss5LTIEdGihbedu5TSiqhi0teFIAz5yJvxrdc0A7FWrrApTKJ%2Fa4Dqan4bWD5%2BXtW8TR%2FKmyE5GDHBoTDQJola9cEgLirJ0%2BJXKwkKk6mjpmjhQQPQMYAsVPPH54gTfcPI%2FWAVjBgSGyBoS8wST4V3fQcoBBiPKiHHTYLWD9tJs8R4wv7mvC1Z8yxDi3w3jB90H6rDE5FKWJv63Th7PCKYH%2BqPEyv%2F7iyknX2ofIL%2FRuKFM2MG093eNbQ0JEy0H4lNvmn3ycGzzkcpJ%2FRo6qBUJ2l5YFt%2B0RrlMF9AdIl6AHi%2BP9Z%2B0%2FeJu9TC0dUYOIkKxruqu2GTfg4iiphJLyu7pSBDqHgEnAR4mXC9IUCnygpoBttRTtSamo4QyvHuLDOTQE5VaHl9XAdkMkOBKjkUtdBWKq7a%2Bc27VqXZ9gh5p%2BhYxAzHp2n%2FFhqyH%2BB365LCZ4EgSFxFus346ArwwMXSSAG96AkBSkPmtyjQHMrWPbF9VaMkAcNus3kYw%2F%2FbMwgY6pgHBI4ucG2sFQC5GzckeTiAQjnOn9c77qbBoE0lnxPlDdo9e3ji4SQWT2qUvGaJXjzBnKBG%2BL2A4GvvOpmUY4le9EiAcAZnLo9x66cKP2gA62cL%2FB0LiCy1tRlFDSuQWklrSRRbqEGILtmmlH%2BRjCcDaBUUyks1QLeloa8YSz3Sl6Smmniz%2Fi4nhDD9icpuJl84F1iGKkCHZvxIWL2FROv6bJe3EsLvs&X-Amz-Signature=6b5e065e2f3963a2d19d70c1f774d2d977f90a68abb6ca4388cb984b5c659206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22CCPBE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmJvM9WLBPlFLgIvr6%2FWgphyktT6BUKhf9zBbek5LlHAiA51obfgYAkE0vP5Ts2eoa9N8rDs9FbvIngkBjo8J75HSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM615lMND5%2FDDDWV66KtwDj9qr9hFenMY%2BoZPptkb0qkMlmOffmWCTL5sdu18q53Uh8EAhQYGIGV2e3IGmH9bc2M9sEvucy9L2DoqTfJ0z2VMDVcEBQnCFGM59GhSxYz3pOtOTYGeoimiI7nys0NF74ss5LTIEdGihbedu5TSiqhi0teFIAz5yJvxrdc0A7FWrrApTKJ%2Fa4Dqan4bWD5%2BXtW8TR%2FKmyE5GDHBoTDQJola9cEgLirJ0%2BJXKwkKk6mjpmjhQQPQMYAsVPPH54gTfcPI%2FWAVjBgSGyBoS8wST4V3fQcoBBiPKiHHTYLWD9tJs8R4wv7mvC1Z8yxDi3w3jB90H6rDE5FKWJv63Th7PCKYH%2BqPEyv%2F7iyknX2ofIL%2FRuKFM2MG093eNbQ0JEy0H4lNvmn3ycGzzkcpJ%2FRo6qBUJ2l5YFt%2B0RrlMF9AdIl6AHi%2BP9Z%2B0%2FeJu9TC0dUYOIkKxruqu2GTfg4iiphJLyu7pSBDqHgEnAR4mXC9IUCnygpoBttRTtSamo4QyvHuLDOTQE5VaHl9XAdkMkOBKjkUtdBWKq7a%2Bc27VqXZ9gh5p%2BhYxAzHp2n%2FFhqyH%2BB365LCZ4EgSFxFus346ArwwMXSSAG96AkBSkPmtyjQHMrWPbF9VaMkAcNus3kYw%2F%2FbMwgY6pgHBI4ucG2sFQC5GzckeTiAQjnOn9c77qbBoE0lnxPlDdo9e3ji4SQWT2qUvGaJXjzBnKBG%2BL2A4GvvOpmUY4le9EiAcAZnLo9x66cKP2gA62cL%2FB0LiCy1tRlFDSuQWklrSRRbqEGILtmmlH%2BRjCcDaBUUyks1QLeloa8YSz3Sl6Smmniz%2Fi4nhDD9icpuJl84F1iGKkCHZvxIWL2FROv6bJe3EsLvs&X-Amz-Signature=8218f8669752b402f1ba22d02a063c76216232c31e6dc2dca65ef4b6dcd3d922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22CCPBE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmJvM9WLBPlFLgIvr6%2FWgphyktT6BUKhf9zBbek5LlHAiA51obfgYAkE0vP5Ts2eoa9N8rDs9FbvIngkBjo8J75HSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM615lMND5%2FDDDWV66KtwDj9qr9hFenMY%2BoZPptkb0qkMlmOffmWCTL5sdu18q53Uh8EAhQYGIGV2e3IGmH9bc2M9sEvucy9L2DoqTfJ0z2VMDVcEBQnCFGM59GhSxYz3pOtOTYGeoimiI7nys0NF74ss5LTIEdGihbedu5TSiqhi0teFIAz5yJvxrdc0A7FWrrApTKJ%2Fa4Dqan4bWD5%2BXtW8TR%2FKmyE5GDHBoTDQJola9cEgLirJ0%2BJXKwkKk6mjpmjhQQPQMYAsVPPH54gTfcPI%2FWAVjBgSGyBoS8wST4V3fQcoBBiPKiHHTYLWD9tJs8R4wv7mvC1Z8yxDi3w3jB90H6rDE5FKWJv63Th7PCKYH%2BqPEyv%2F7iyknX2ofIL%2FRuKFM2MG093eNbQ0JEy0H4lNvmn3ycGzzkcpJ%2FRo6qBUJ2l5YFt%2B0RrlMF9AdIl6AHi%2BP9Z%2B0%2FeJu9TC0dUYOIkKxruqu2GTfg4iiphJLyu7pSBDqHgEnAR4mXC9IUCnygpoBttRTtSamo4QyvHuLDOTQE5VaHl9XAdkMkOBKjkUtdBWKq7a%2Bc27VqXZ9gh5p%2BhYxAzHp2n%2FFhqyH%2BB365LCZ4EgSFxFus346ArwwMXSSAG96AkBSkPmtyjQHMrWPbF9VaMkAcNus3kYw%2F%2FbMwgY6pgHBI4ucG2sFQC5GzckeTiAQjnOn9c77qbBoE0lnxPlDdo9e3ji4SQWT2qUvGaJXjzBnKBG%2BL2A4GvvOpmUY4le9EiAcAZnLo9x66cKP2gA62cL%2FB0LiCy1tRlFDSuQWklrSRRbqEGILtmmlH%2BRjCcDaBUUyks1QLeloa8YSz3Sl6Smmniz%2Fi4nhDD9icpuJl84F1iGKkCHZvxIWL2FROv6bJe3EsLvs&X-Amz-Signature=d6d883f9964bd1491507da67096b651b220575bae0ad0748b7867eba6db45ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22CCPBE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmJvM9WLBPlFLgIvr6%2FWgphyktT6BUKhf9zBbek5LlHAiA51obfgYAkE0vP5Ts2eoa9N8rDs9FbvIngkBjo8J75HSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM615lMND5%2FDDDWV66KtwDj9qr9hFenMY%2BoZPptkb0qkMlmOffmWCTL5sdu18q53Uh8EAhQYGIGV2e3IGmH9bc2M9sEvucy9L2DoqTfJ0z2VMDVcEBQnCFGM59GhSxYz3pOtOTYGeoimiI7nys0NF74ss5LTIEdGihbedu5TSiqhi0teFIAz5yJvxrdc0A7FWrrApTKJ%2Fa4Dqan4bWD5%2BXtW8TR%2FKmyE5GDHBoTDQJola9cEgLirJ0%2BJXKwkKk6mjpmjhQQPQMYAsVPPH54gTfcPI%2FWAVjBgSGyBoS8wST4V3fQcoBBiPKiHHTYLWD9tJs8R4wv7mvC1Z8yxDi3w3jB90H6rDE5FKWJv63Th7PCKYH%2BqPEyv%2F7iyknX2ofIL%2FRuKFM2MG093eNbQ0JEy0H4lNvmn3ycGzzkcpJ%2FRo6qBUJ2l5YFt%2B0RrlMF9AdIl6AHi%2BP9Z%2B0%2FeJu9TC0dUYOIkKxruqu2GTfg4iiphJLyu7pSBDqHgEnAR4mXC9IUCnygpoBttRTtSamo4QyvHuLDOTQE5VaHl9XAdkMkOBKjkUtdBWKq7a%2Bc27VqXZ9gh5p%2BhYxAzHp2n%2FFhqyH%2BB365LCZ4EgSFxFus346ArwwMXSSAG96AkBSkPmtyjQHMrWPbF9VaMkAcNus3kYw%2F%2FbMwgY6pgHBI4ucG2sFQC5GzckeTiAQjnOn9c77qbBoE0lnxPlDdo9e3ji4SQWT2qUvGaJXjzBnKBG%2BL2A4GvvOpmUY4le9EiAcAZnLo9x66cKP2gA62cL%2FB0LiCy1tRlFDSuQWklrSRRbqEGILtmmlH%2BRjCcDaBUUyks1QLeloa8YSz3Sl6Smmniz%2Fi4nhDD9icpuJl84F1iGKkCHZvxIWL2FROv6bJe3EsLvs&X-Amz-Signature=6fbaef8fda5d1cf9453689c386dbd7fd9dd9e8a0fdab9f268340ab22cf6162c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22CCPBE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmJvM9WLBPlFLgIvr6%2FWgphyktT6BUKhf9zBbek5LlHAiA51obfgYAkE0vP5Ts2eoa9N8rDs9FbvIngkBjo8J75HSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM615lMND5%2FDDDWV66KtwDj9qr9hFenMY%2BoZPptkb0qkMlmOffmWCTL5sdu18q53Uh8EAhQYGIGV2e3IGmH9bc2M9sEvucy9L2DoqTfJ0z2VMDVcEBQnCFGM59GhSxYz3pOtOTYGeoimiI7nys0NF74ss5LTIEdGihbedu5TSiqhi0teFIAz5yJvxrdc0A7FWrrApTKJ%2Fa4Dqan4bWD5%2BXtW8TR%2FKmyE5GDHBoTDQJola9cEgLirJ0%2BJXKwkKk6mjpmjhQQPQMYAsVPPH54gTfcPI%2FWAVjBgSGyBoS8wST4V3fQcoBBiPKiHHTYLWD9tJs8R4wv7mvC1Z8yxDi3w3jB90H6rDE5FKWJv63Th7PCKYH%2BqPEyv%2F7iyknX2ofIL%2FRuKFM2MG093eNbQ0JEy0H4lNvmn3ycGzzkcpJ%2FRo6qBUJ2l5YFt%2B0RrlMF9AdIl6AHi%2BP9Z%2B0%2FeJu9TC0dUYOIkKxruqu2GTfg4iiphJLyu7pSBDqHgEnAR4mXC9IUCnygpoBttRTtSamo4QyvHuLDOTQE5VaHl9XAdkMkOBKjkUtdBWKq7a%2Bc27VqXZ9gh5p%2BhYxAzHp2n%2FFhqyH%2BB365LCZ4EgSFxFus346ArwwMXSSAG96AkBSkPmtyjQHMrWPbF9VaMkAcNus3kYw%2F%2FbMwgY6pgHBI4ucG2sFQC5GzckeTiAQjnOn9c77qbBoE0lnxPlDdo9e3ji4SQWT2qUvGaJXjzBnKBG%2BL2A4GvvOpmUY4le9EiAcAZnLo9x66cKP2gA62cL%2FB0LiCy1tRlFDSuQWklrSRRbqEGILtmmlH%2BRjCcDaBUUyks1QLeloa8YSz3Sl6Smmniz%2Fi4nhDD9icpuJl84F1iGKkCHZvxIWL2FROv6bJe3EsLvs&X-Amz-Signature=a932c88b69b0fa05e1d9b8e87698b762434f5fa1a6872bfd969c78d6c1fea7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22CCPBE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmJvM9WLBPlFLgIvr6%2FWgphyktT6BUKhf9zBbek5LlHAiA51obfgYAkE0vP5Ts2eoa9N8rDs9FbvIngkBjo8J75HSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM615lMND5%2FDDDWV66KtwDj9qr9hFenMY%2BoZPptkb0qkMlmOffmWCTL5sdu18q53Uh8EAhQYGIGV2e3IGmH9bc2M9sEvucy9L2DoqTfJ0z2VMDVcEBQnCFGM59GhSxYz3pOtOTYGeoimiI7nys0NF74ss5LTIEdGihbedu5TSiqhi0teFIAz5yJvxrdc0A7FWrrApTKJ%2Fa4Dqan4bWD5%2BXtW8TR%2FKmyE5GDHBoTDQJola9cEgLirJ0%2BJXKwkKk6mjpmjhQQPQMYAsVPPH54gTfcPI%2FWAVjBgSGyBoS8wST4V3fQcoBBiPKiHHTYLWD9tJs8R4wv7mvC1Z8yxDi3w3jB90H6rDE5FKWJv63Th7PCKYH%2BqPEyv%2F7iyknX2ofIL%2FRuKFM2MG093eNbQ0JEy0H4lNvmn3ycGzzkcpJ%2FRo6qBUJ2l5YFt%2B0RrlMF9AdIl6AHi%2BP9Z%2B0%2FeJu9TC0dUYOIkKxruqu2GTfg4iiphJLyu7pSBDqHgEnAR4mXC9IUCnygpoBttRTtSamo4QyvHuLDOTQE5VaHl9XAdkMkOBKjkUtdBWKq7a%2Bc27VqXZ9gh5p%2BhYxAzHp2n%2FFhqyH%2BB365LCZ4EgSFxFus346ArwwMXSSAG96AkBSkPmtyjQHMrWPbF9VaMkAcNus3kYw%2F%2FbMwgY6pgHBI4ucG2sFQC5GzckeTiAQjnOn9c77qbBoE0lnxPlDdo9e3ji4SQWT2qUvGaJXjzBnKBG%2BL2A4GvvOpmUY4le9EiAcAZnLo9x66cKP2gA62cL%2FB0LiCy1tRlFDSuQWklrSRRbqEGILtmmlH%2BRjCcDaBUUyks1QLeloa8YSz3Sl6Smmniz%2Fi4nhDD9icpuJl84F1iGKkCHZvxIWL2FROv6bJe3EsLvs&X-Amz-Signature=a56f99a2379b7189f3baaf6157d3086955b60e5e2128df5bd50d5c846109351d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22CCPBE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmJvM9WLBPlFLgIvr6%2FWgphyktT6BUKhf9zBbek5LlHAiA51obfgYAkE0vP5Ts2eoa9N8rDs9FbvIngkBjo8J75HSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM615lMND5%2FDDDWV66KtwDj9qr9hFenMY%2BoZPptkb0qkMlmOffmWCTL5sdu18q53Uh8EAhQYGIGV2e3IGmH9bc2M9sEvucy9L2DoqTfJ0z2VMDVcEBQnCFGM59GhSxYz3pOtOTYGeoimiI7nys0NF74ss5LTIEdGihbedu5TSiqhi0teFIAz5yJvxrdc0A7FWrrApTKJ%2Fa4Dqan4bWD5%2BXtW8TR%2FKmyE5GDHBoTDQJola9cEgLirJ0%2BJXKwkKk6mjpmjhQQPQMYAsVPPH54gTfcPI%2FWAVjBgSGyBoS8wST4V3fQcoBBiPKiHHTYLWD9tJs8R4wv7mvC1Z8yxDi3w3jB90H6rDE5FKWJv63Th7PCKYH%2BqPEyv%2F7iyknX2ofIL%2FRuKFM2MG093eNbQ0JEy0H4lNvmn3ycGzzkcpJ%2FRo6qBUJ2l5YFt%2B0RrlMF9AdIl6AHi%2BP9Z%2B0%2FeJu9TC0dUYOIkKxruqu2GTfg4iiphJLyu7pSBDqHgEnAR4mXC9IUCnygpoBttRTtSamo4QyvHuLDOTQE5VaHl9XAdkMkOBKjkUtdBWKq7a%2Bc27VqXZ9gh5p%2BhYxAzHp2n%2FFhqyH%2BB365LCZ4EgSFxFus346ArwwMXSSAG96AkBSkPmtyjQHMrWPbF9VaMkAcNus3kYw%2F%2FbMwgY6pgHBI4ucG2sFQC5GzckeTiAQjnOn9c77qbBoE0lnxPlDdo9e3ji4SQWT2qUvGaJXjzBnKBG%2BL2A4GvvOpmUY4le9EiAcAZnLo9x66cKP2gA62cL%2FB0LiCy1tRlFDSuQWklrSRRbqEGILtmmlH%2BRjCcDaBUUyks1QLeloa8YSz3Sl6Smmniz%2Fi4nhDD9icpuJl84F1iGKkCHZvxIWL2FROv6bJe3EsLvs&X-Amz-Signature=54dba2afffdf0446292c6484f32f456f6fa752f97f724d29a575d9764c649ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22CCPBE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmJvM9WLBPlFLgIvr6%2FWgphyktT6BUKhf9zBbek5LlHAiA51obfgYAkE0vP5Ts2eoa9N8rDs9FbvIngkBjo8J75HSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM615lMND5%2FDDDWV66KtwDj9qr9hFenMY%2BoZPptkb0qkMlmOffmWCTL5sdu18q53Uh8EAhQYGIGV2e3IGmH9bc2M9sEvucy9L2DoqTfJ0z2VMDVcEBQnCFGM59GhSxYz3pOtOTYGeoimiI7nys0NF74ss5LTIEdGihbedu5TSiqhi0teFIAz5yJvxrdc0A7FWrrApTKJ%2Fa4Dqan4bWD5%2BXtW8TR%2FKmyE5GDHBoTDQJola9cEgLirJ0%2BJXKwkKk6mjpmjhQQPQMYAsVPPH54gTfcPI%2FWAVjBgSGyBoS8wST4V3fQcoBBiPKiHHTYLWD9tJs8R4wv7mvC1Z8yxDi3w3jB90H6rDE5FKWJv63Th7PCKYH%2BqPEyv%2F7iyknX2ofIL%2FRuKFM2MG093eNbQ0JEy0H4lNvmn3ycGzzkcpJ%2FRo6qBUJ2l5YFt%2B0RrlMF9AdIl6AHi%2BP9Z%2B0%2FeJu9TC0dUYOIkKxruqu2GTfg4iiphJLyu7pSBDqHgEnAR4mXC9IUCnygpoBttRTtSamo4QyvHuLDOTQE5VaHl9XAdkMkOBKjkUtdBWKq7a%2Bc27VqXZ9gh5p%2BhYxAzHp2n%2FFhqyH%2BB365LCZ4EgSFxFus346ArwwMXSSAG96AkBSkPmtyjQHMrWPbF9VaMkAcNus3kYw%2F%2FbMwgY6pgHBI4ucG2sFQC5GzckeTiAQjnOn9c77qbBoE0lnxPlDdo9e3ji4SQWT2qUvGaJXjzBnKBG%2BL2A4GvvOpmUY4le9EiAcAZnLo9x66cKP2gA62cL%2FB0LiCy1tRlFDSuQWklrSRRbqEGILtmmlH%2BRjCcDaBUUyks1QLeloa8YSz3Sl6Smmniz%2Fi4nhDD9icpuJl84F1iGKkCHZvxIWL2FROv6bJe3EsLvs&X-Amz-Signature=d0a6083827afb5bfa3714ef5866fe136f648ef4a49729bdc86333e8be592caf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

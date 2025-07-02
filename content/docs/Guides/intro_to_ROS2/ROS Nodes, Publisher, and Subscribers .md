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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VY432H%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FiWlxiF8MIKxi255REKUPvMNrmlQ%2BqxGvVN2qs6aPaAiEA%2FKeBYoOOeYtU2WISAfTgeorY1n7N1WWF6GZCHKP1m4oqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm1cvJ7lQNIHMIxaircA8%2FEai1Lj0KeFFm9ao9sjL88r8mOeV%2FzYLCJwRyo9jjRX5HFODTcKT9aBxbnIJ%2FywaH5tdvbuQ5ETKoNdFevOwk72My9u2rhcSR4YnRh47LvRL%2BJJuKrQFPV8UYHXC8OOEbvW%2BN%2BXWLyXTn9CgN%2F6vvsPEV%2FmWgsqEimjBLa6AXzwJXesqBVgJVGCI%2FmBP0znXjdfYzsnHP%2BmxcPIohjgOe%2B5c5h768BjS0CWBafKIXEtQYpm239yTXPKWoCp4k6OmtHrqd%2B4NXsUmLEYAUqLuCjP8ACCSa5Z6Z%2Bt9w2ySXu8Euoz1dXHA7j8bCo%2FuT2IjAVvMMJKQO06MpVNZWZi7ojOClUOzVZOi6Kw%2F6R0fQ%2FQfhQHfwym%2BZswo72bm925J%2BrqT4mNoRAZ4jfGSbCkZh19KE3yVDq9BAOhUzgezkKyVKUxPmAHg1HCcUncj4SQy6zygpbrHtTYi6UeMLA109hFhrSUwntGDPiMcrsaBPll25j3nhfY7udXNb1BIM3MaOyVD%2F6dZiuZWnZ44QAcW6Cblv9SZdbWcjOf%2BB36LaFGBUkxbaRtXSzJUmBAIVPX6oq09wTPB07zWFTpEF%2FCbjj5oTDhpmhPwsTGuF7RyyYwp%2F3SPfW667kdMnZMIm7lMMGOqUBplrM5vAZy07iJwldXmU%2FvcIkewAvGGBa1xh2DVcZVtdJCNa81SrdWp6z4qQVAWmiOOweZe36%2B1c44TQd12FQC6rHNRdHDfvW2Gcy%2FM5FbpT2XBkTAo7wZgnmKqHTq6S9OkU6btQbpKxJkZzoRWe2ed6xDYMQCGH8u9j21Hs9wngaEDubfo3pbxcD3Prd4rKeRpeXJcJG10rPG%2FDVXagLgUo%2B7MVr&X-Amz-Signature=108dc397a6ad51b7c92909711ea337da1bd2777a6208180b5477d935dd9a00b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VY432H%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FiWlxiF8MIKxi255REKUPvMNrmlQ%2BqxGvVN2qs6aPaAiEA%2FKeBYoOOeYtU2WISAfTgeorY1n7N1WWF6GZCHKP1m4oqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm1cvJ7lQNIHMIxaircA8%2FEai1Lj0KeFFm9ao9sjL88r8mOeV%2FzYLCJwRyo9jjRX5HFODTcKT9aBxbnIJ%2FywaH5tdvbuQ5ETKoNdFevOwk72My9u2rhcSR4YnRh47LvRL%2BJJuKrQFPV8UYHXC8OOEbvW%2BN%2BXWLyXTn9CgN%2F6vvsPEV%2FmWgsqEimjBLa6AXzwJXesqBVgJVGCI%2FmBP0znXjdfYzsnHP%2BmxcPIohjgOe%2B5c5h768BjS0CWBafKIXEtQYpm239yTXPKWoCp4k6OmtHrqd%2B4NXsUmLEYAUqLuCjP8ACCSa5Z6Z%2Bt9w2ySXu8Euoz1dXHA7j8bCo%2FuT2IjAVvMMJKQO06MpVNZWZi7ojOClUOzVZOi6Kw%2F6R0fQ%2FQfhQHfwym%2BZswo72bm925J%2BrqT4mNoRAZ4jfGSbCkZh19KE3yVDq9BAOhUzgezkKyVKUxPmAHg1HCcUncj4SQy6zygpbrHtTYi6UeMLA109hFhrSUwntGDPiMcrsaBPll25j3nhfY7udXNb1BIM3MaOyVD%2F6dZiuZWnZ44QAcW6Cblv9SZdbWcjOf%2BB36LaFGBUkxbaRtXSzJUmBAIVPX6oq09wTPB07zWFTpEF%2FCbjj5oTDhpmhPwsTGuF7RyyYwp%2F3SPfW667kdMnZMIm7lMMGOqUBplrM5vAZy07iJwldXmU%2FvcIkewAvGGBa1xh2DVcZVtdJCNa81SrdWp6z4qQVAWmiOOweZe36%2B1c44TQd12FQC6rHNRdHDfvW2Gcy%2FM5FbpT2XBkTAo7wZgnmKqHTq6S9OkU6btQbpKxJkZzoRWe2ed6xDYMQCGH8u9j21Hs9wngaEDubfo3pbxcD3Prd4rKeRpeXJcJG10rPG%2FDVXagLgUo%2B7MVr&X-Amz-Signature=0d1895ccf58c437d1ab711aaa195aa9a0cdcab73e9e10478e808f4821154b7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VY432H%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FiWlxiF8MIKxi255REKUPvMNrmlQ%2BqxGvVN2qs6aPaAiEA%2FKeBYoOOeYtU2WISAfTgeorY1n7N1WWF6GZCHKP1m4oqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm1cvJ7lQNIHMIxaircA8%2FEai1Lj0KeFFm9ao9sjL88r8mOeV%2FzYLCJwRyo9jjRX5HFODTcKT9aBxbnIJ%2FywaH5tdvbuQ5ETKoNdFevOwk72My9u2rhcSR4YnRh47LvRL%2BJJuKrQFPV8UYHXC8OOEbvW%2BN%2BXWLyXTn9CgN%2F6vvsPEV%2FmWgsqEimjBLa6AXzwJXesqBVgJVGCI%2FmBP0znXjdfYzsnHP%2BmxcPIohjgOe%2B5c5h768BjS0CWBafKIXEtQYpm239yTXPKWoCp4k6OmtHrqd%2B4NXsUmLEYAUqLuCjP8ACCSa5Z6Z%2Bt9w2ySXu8Euoz1dXHA7j8bCo%2FuT2IjAVvMMJKQO06MpVNZWZi7ojOClUOzVZOi6Kw%2F6R0fQ%2FQfhQHfwym%2BZswo72bm925J%2BrqT4mNoRAZ4jfGSbCkZh19KE3yVDq9BAOhUzgezkKyVKUxPmAHg1HCcUncj4SQy6zygpbrHtTYi6UeMLA109hFhrSUwntGDPiMcrsaBPll25j3nhfY7udXNb1BIM3MaOyVD%2F6dZiuZWnZ44QAcW6Cblv9SZdbWcjOf%2BB36LaFGBUkxbaRtXSzJUmBAIVPX6oq09wTPB07zWFTpEF%2FCbjj5oTDhpmhPwsTGuF7RyyYwp%2F3SPfW667kdMnZMIm7lMMGOqUBplrM5vAZy07iJwldXmU%2FvcIkewAvGGBa1xh2DVcZVtdJCNa81SrdWp6z4qQVAWmiOOweZe36%2B1c44TQd12FQC6rHNRdHDfvW2Gcy%2FM5FbpT2XBkTAo7wZgnmKqHTq6S9OkU6btQbpKxJkZzoRWe2ed6xDYMQCGH8u9j21Hs9wngaEDubfo3pbxcD3Prd4rKeRpeXJcJG10rPG%2FDVXagLgUo%2B7MVr&X-Amz-Signature=dbd55775a8c433d50e24f5033fd3956841471bbb65d4dfb57b0bdc459cb6f2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VY432H%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FiWlxiF8MIKxi255REKUPvMNrmlQ%2BqxGvVN2qs6aPaAiEA%2FKeBYoOOeYtU2WISAfTgeorY1n7N1WWF6GZCHKP1m4oqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm1cvJ7lQNIHMIxaircA8%2FEai1Lj0KeFFm9ao9sjL88r8mOeV%2FzYLCJwRyo9jjRX5HFODTcKT9aBxbnIJ%2FywaH5tdvbuQ5ETKoNdFevOwk72My9u2rhcSR4YnRh47LvRL%2BJJuKrQFPV8UYHXC8OOEbvW%2BN%2BXWLyXTn9CgN%2F6vvsPEV%2FmWgsqEimjBLa6AXzwJXesqBVgJVGCI%2FmBP0znXjdfYzsnHP%2BmxcPIohjgOe%2B5c5h768BjS0CWBafKIXEtQYpm239yTXPKWoCp4k6OmtHrqd%2B4NXsUmLEYAUqLuCjP8ACCSa5Z6Z%2Bt9w2ySXu8Euoz1dXHA7j8bCo%2FuT2IjAVvMMJKQO06MpVNZWZi7ojOClUOzVZOi6Kw%2F6R0fQ%2FQfhQHfwym%2BZswo72bm925J%2BrqT4mNoRAZ4jfGSbCkZh19KE3yVDq9BAOhUzgezkKyVKUxPmAHg1HCcUncj4SQy6zygpbrHtTYi6UeMLA109hFhrSUwntGDPiMcrsaBPll25j3nhfY7udXNb1BIM3MaOyVD%2F6dZiuZWnZ44QAcW6Cblv9SZdbWcjOf%2BB36LaFGBUkxbaRtXSzJUmBAIVPX6oq09wTPB07zWFTpEF%2FCbjj5oTDhpmhPwsTGuF7RyyYwp%2F3SPfW667kdMnZMIm7lMMGOqUBplrM5vAZy07iJwldXmU%2FvcIkewAvGGBa1xh2DVcZVtdJCNa81SrdWp6z4qQVAWmiOOweZe36%2B1c44TQd12FQC6rHNRdHDfvW2Gcy%2FM5FbpT2XBkTAo7wZgnmKqHTq6S9OkU6btQbpKxJkZzoRWe2ed6xDYMQCGH8u9j21Hs9wngaEDubfo3pbxcD3Prd4rKeRpeXJcJG10rPG%2FDVXagLgUo%2B7MVr&X-Amz-Signature=cbf859c2b0b7fdd7aa8d8a29d4a9d14acdaf1cd3c1fd8097c77158da60c96d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VY432H%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FiWlxiF8MIKxi255REKUPvMNrmlQ%2BqxGvVN2qs6aPaAiEA%2FKeBYoOOeYtU2WISAfTgeorY1n7N1WWF6GZCHKP1m4oqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm1cvJ7lQNIHMIxaircA8%2FEai1Lj0KeFFm9ao9sjL88r8mOeV%2FzYLCJwRyo9jjRX5HFODTcKT9aBxbnIJ%2FywaH5tdvbuQ5ETKoNdFevOwk72My9u2rhcSR4YnRh47LvRL%2BJJuKrQFPV8UYHXC8OOEbvW%2BN%2BXWLyXTn9CgN%2F6vvsPEV%2FmWgsqEimjBLa6AXzwJXesqBVgJVGCI%2FmBP0znXjdfYzsnHP%2BmxcPIohjgOe%2B5c5h768BjS0CWBafKIXEtQYpm239yTXPKWoCp4k6OmtHrqd%2B4NXsUmLEYAUqLuCjP8ACCSa5Z6Z%2Bt9w2ySXu8Euoz1dXHA7j8bCo%2FuT2IjAVvMMJKQO06MpVNZWZi7ojOClUOzVZOi6Kw%2F6R0fQ%2FQfhQHfwym%2BZswo72bm925J%2BrqT4mNoRAZ4jfGSbCkZh19KE3yVDq9BAOhUzgezkKyVKUxPmAHg1HCcUncj4SQy6zygpbrHtTYi6UeMLA109hFhrSUwntGDPiMcrsaBPll25j3nhfY7udXNb1BIM3MaOyVD%2F6dZiuZWnZ44QAcW6Cblv9SZdbWcjOf%2BB36LaFGBUkxbaRtXSzJUmBAIVPX6oq09wTPB07zWFTpEF%2FCbjj5oTDhpmhPwsTGuF7RyyYwp%2F3SPfW667kdMnZMIm7lMMGOqUBplrM5vAZy07iJwldXmU%2FvcIkewAvGGBa1xh2DVcZVtdJCNa81SrdWp6z4qQVAWmiOOweZe36%2B1c44TQd12FQC6rHNRdHDfvW2Gcy%2FM5FbpT2XBkTAo7wZgnmKqHTq6S9OkU6btQbpKxJkZzoRWe2ed6xDYMQCGH8u9j21Hs9wngaEDubfo3pbxcD3Prd4rKeRpeXJcJG10rPG%2FDVXagLgUo%2B7MVr&X-Amz-Signature=b581426c181bf7795c9e1fc6ed7ceb22e0619aad6ebde3bea95976c0c9c77806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VY432H%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FiWlxiF8MIKxi255REKUPvMNrmlQ%2BqxGvVN2qs6aPaAiEA%2FKeBYoOOeYtU2WISAfTgeorY1n7N1WWF6GZCHKP1m4oqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm1cvJ7lQNIHMIxaircA8%2FEai1Lj0KeFFm9ao9sjL88r8mOeV%2FzYLCJwRyo9jjRX5HFODTcKT9aBxbnIJ%2FywaH5tdvbuQ5ETKoNdFevOwk72My9u2rhcSR4YnRh47LvRL%2BJJuKrQFPV8UYHXC8OOEbvW%2BN%2BXWLyXTn9CgN%2F6vvsPEV%2FmWgsqEimjBLa6AXzwJXesqBVgJVGCI%2FmBP0znXjdfYzsnHP%2BmxcPIohjgOe%2B5c5h768BjS0CWBafKIXEtQYpm239yTXPKWoCp4k6OmtHrqd%2B4NXsUmLEYAUqLuCjP8ACCSa5Z6Z%2Bt9w2ySXu8Euoz1dXHA7j8bCo%2FuT2IjAVvMMJKQO06MpVNZWZi7ojOClUOzVZOi6Kw%2F6R0fQ%2FQfhQHfwym%2BZswo72bm925J%2BrqT4mNoRAZ4jfGSbCkZh19KE3yVDq9BAOhUzgezkKyVKUxPmAHg1HCcUncj4SQy6zygpbrHtTYi6UeMLA109hFhrSUwntGDPiMcrsaBPll25j3nhfY7udXNb1BIM3MaOyVD%2F6dZiuZWnZ44QAcW6Cblv9SZdbWcjOf%2BB36LaFGBUkxbaRtXSzJUmBAIVPX6oq09wTPB07zWFTpEF%2FCbjj5oTDhpmhPwsTGuF7RyyYwp%2F3SPfW667kdMnZMIm7lMMGOqUBplrM5vAZy07iJwldXmU%2FvcIkewAvGGBa1xh2DVcZVtdJCNa81SrdWp6z4qQVAWmiOOweZe36%2B1c44TQd12FQC6rHNRdHDfvW2Gcy%2FM5FbpT2XBkTAo7wZgnmKqHTq6S9OkU6btQbpKxJkZzoRWe2ed6xDYMQCGH8u9j21Hs9wngaEDubfo3pbxcD3Prd4rKeRpeXJcJG10rPG%2FDVXagLgUo%2B7MVr&X-Amz-Signature=74afc965dbc455cc7a753abd2194e08643bba903e6f1ab1a61c36272cd551f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VY432H%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FiWlxiF8MIKxi255REKUPvMNrmlQ%2BqxGvVN2qs6aPaAiEA%2FKeBYoOOeYtU2WISAfTgeorY1n7N1WWF6GZCHKP1m4oqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm1cvJ7lQNIHMIxaircA8%2FEai1Lj0KeFFm9ao9sjL88r8mOeV%2FzYLCJwRyo9jjRX5HFODTcKT9aBxbnIJ%2FywaH5tdvbuQ5ETKoNdFevOwk72My9u2rhcSR4YnRh47LvRL%2BJJuKrQFPV8UYHXC8OOEbvW%2BN%2BXWLyXTn9CgN%2F6vvsPEV%2FmWgsqEimjBLa6AXzwJXesqBVgJVGCI%2FmBP0znXjdfYzsnHP%2BmxcPIohjgOe%2B5c5h768BjS0CWBafKIXEtQYpm239yTXPKWoCp4k6OmtHrqd%2B4NXsUmLEYAUqLuCjP8ACCSa5Z6Z%2Bt9w2ySXu8Euoz1dXHA7j8bCo%2FuT2IjAVvMMJKQO06MpVNZWZi7ojOClUOzVZOi6Kw%2F6R0fQ%2FQfhQHfwym%2BZswo72bm925J%2BrqT4mNoRAZ4jfGSbCkZh19KE3yVDq9BAOhUzgezkKyVKUxPmAHg1HCcUncj4SQy6zygpbrHtTYi6UeMLA109hFhrSUwntGDPiMcrsaBPll25j3nhfY7udXNb1BIM3MaOyVD%2F6dZiuZWnZ44QAcW6Cblv9SZdbWcjOf%2BB36LaFGBUkxbaRtXSzJUmBAIVPX6oq09wTPB07zWFTpEF%2FCbjj5oTDhpmhPwsTGuF7RyyYwp%2F3SPfW667kdMnZMIm7lMMGOqUBplrM5vAZy07iJwldXmU%2FvcIkewAvGGBa1xh2DVcZVtdJCNa81SrdWp6z4qQVAWmiOOweZe36%2B1c44TQd12FQC6rHNRdHDfvW2Gcy%2FM5FbpT2XBkTAo7wZgnmKqHTq6S9OkU6btQbpKxJkZzoRWe2ed6xDYMQCGH8u9j21Hs9wngaEDubfo3pbxcD3Prd4rKeRpeXJcJG10rPG%2FDVXagLgUo%2B7MVr&X-Amz-Signature=79551b6075f595302e6003eaa29953182fa160d205ecdb2e02ace5cc21904317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VY432H%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FiWlxiF8MIKxi255REKUPvMNrmlQ%2BqxGvVN2qs6aPaAiEA%2FKeBYoOOeYtU2WISAfTgeorY1n7N1WWF6GZCHKP1m4oqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJm1cvJ7lQNIHMIxaircA8%2FEai1Lj0KeFFm9ao9sjL88r8mOeV%2FzYLCJwRyo9jjRX5HFODTcKT9aBxbnIJ%2FywaH5tdvbuQ5ETKoNdFevOwk72My9u2rhcSR4YnRh47LvRL%2BJJuKrQFPV8UYHXC8OOEbvW%2BN%2BXWLyXTn9CgN%2F6vvsPEV%2FmWgsqEimjBLa6AXzwJXesqBVgJVGCI%2FmBP0znXjdfYzsnHP%2BmxcPIohjgOe%2B5c5h768BjS0CWBafKIXEtQYpm239yTXPKWoCp4k6OmtHrqd%2B4NXsUmLEYAUqLuCjP8ACCSa5Z6Z%2Bt9w2ySXu8Euoz1dXHA7j8bCo%2FuT2IjAVvMMJKQO06MpVNZWZi7ojOClUOzVZOi6Kw%2F6R0fQ%2FQfhQHfwym%2BZswo72bm925J%2BrqT4mNoRAZ4jfGSbCkZh19KE3yVDq9BAOhUzgezkKyVKUxPmAHg1HCcUncj4SQy6zygpbrHtTYi6UeMLA109hFhrSUwntGDPiMcrsaBPll25j3nhfY7udXNb1BIM3MaOyVD%2F6dZiuZWnZ44QAcW6Cblv9SZdbWcjOf%2BB36LaFGBUkxbaRtXSzJUmBAIVPX6oq09wTPB07zWFTpEF%2FCbjj5oTDhpmhPwsTGuF7RyyYwp%2F3SPfW667kdMnZMIm7lMMGOqUBplrM5vAZy07iJwldXmU%2FvcIkewAvGGBa1xh2DVcZVtdJCNa81SrdWp6z4qQVAWmiOOweZe36%2B1c44TQd12FQC6rHNRdHDfvW2Gcy%2FM5FbpT2XBkTAo7wZgnmKqHTq6S9OkU6btQbpKxJkZzoRWe2ed6xDYMQCGH8u9j21Hs9wngaEDubfo3pbxcD3Prd4rKeRpeXJcJG10rPG%2FDVXagLgUo%2B7MVr&X-Amz-Signature=a8cad3a107a398a18370ab58c0ffbee57e0fbbed448bcf3b7fb9394e95f51ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLLMXHA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Dmn3fvV4fO84NjLMY4b7xSCWfLK58PgwnNeSjbnPTQIgJ34LWBPI1zkdg9jC2Uirkmh1NDVJ6DnEORv48eBqtTgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmSVFHxFj3orpHXQSrcAx2HpBmgTnJwvLLzus5aLOBOFqg1FD4yezjaY4pt9sLYgPZvZCvJk0H%2FnIxLdLPgYkakFITdhVpfz1N0Scgqmu6mgg9bh4Aj6%2FNIwDDV9c1uOpGgn3wg1DA2s0AD82pHecpvC%2F1GrVNB9i7FN24M0ZesDElXyidsRaE%2BQavsjIZqlF2%2BCVNSrOVD2prmC7OE3e3cTBj%2FcFHDtjVK29YZHYlXr5ytP9LRub3vQi9cLYhFfVukMZZUSBrH4yJIiufOUnJTLP9%2FuKWHkigTokenKB7cWuLmkLXvaJ9cXtOinvtsf%2BC7w1u6XNsMVDmTHDUXMsj2tcreJTzlHGjEMdGvHZjgFz7nqrGKL5m4o2QklTdLSnOaJuYTXZOIUf2CvDND0RUQ62snvWxKyQsBfYcYlYqXElt3UHO3hvjStJ4UQJiZ5ADm8whiAWFgb2pnChVyOqWyE8MzLxaPrSZO%2F07Y%2BCoGVIO5f0aCpETSeSLEVrL2gB5taRtSqz4jnROrpH74eZuqg7O5XX7%2FM2VlgcDIGlP2dnpIBtAHZaBanEZfbwoNUpbos0l2cYZnctInXbqeD7mbrpv6RnwtPQur025bNMapRWzf7THE2makya1lJBJt6eC5Ykj%2F%2F6n36mk%2BMKOKpcQGOqUBJ2VNEoKdqwFp%2Bq%2FLnWGnawrvuQGAy1A0HxAIsdAwRlDfkAo6VKag%2BgGeOT526OOjM0OWPrf1Ul9P4tyit5gLCDvuAQ4ToziC4JbScO5noVvtjGD26%2FJNdB880Qfbl2mDL1uZjKkHO%2BPs5NWcpJkp5vB%2FLtIKNSEMHnRioCzvmQUJLjF1PG1xDe1ZeMPkC5EFzk15AxFbszDkuDA%2Fuo6lXYywhvYf&X-Amz-Signature=14233e3b0581a0fcf87344990413928aa0ef886f6b878a2f95241a7775cec41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLLMXHA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Dmn3fvV4fO84NjLMY4b7xSCWfLK58PgwnNeSjbnPTQIgJ34LWBPI1zkdg9jC2Uirkmh1NDVJ6DnEORv48eBqtTgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmSVFHxFj3orpHXQSrcAx2HpBmgTnJwvLLzus5aLOBOFqg1FD4yezjaY4pt9sLYgPZvZCvJk0H%2FnIxLdLPgYkakFITdhVpfz1N0Scgqmu6mgg9bh4Aj6%2FNIwDDV9c1uOpGgn3wg1DA2s0AD82pHecpvC%2F1GrVNB9i7FN24M0ZesDElXyidsRaE%2BQavsjIZqlF2%2BCVNSrOVD2prmC7OE3e3cTBj%2FcFHDtjVK29YZHYlXr5ytP9LRub3vQi9cLYhFfVukMZZUSBrH4yJIiufOUnJTLP9%2FuKWHkigTokenKB7cWuLmkLXvaJ9cXtOinvtsf%2BC7w1u6XNsMVDmTHDUXMsj2tcreJTzlHGjEMdGvHZjgFz7nqrGKL5m4o2QklTdLSnOaJuYTXZOIUf2CvDND0RUQ62snvWxKyQsBfYcYlYqXElt3UHO3hvjStJ4UQJiZ5ADm8whiAWFgb2pnChVyOqWyE8MzLxaPrSZO%2F07Y%2BCoGVIO5f0aCpETSeSLEVrL2gB5taRtSqz4jnROrpH74eZuqg7O5XX7%2FM2VlgcDIGlP2dnpIBtAHZaBanEZfbwoNUpbos0l2cYZnctInXbqeD7mbrpv6RnwtPQur025bNMapRWzf7THE2makya1lJBJt6eC5Ykj%2F%2F6n36mk%2BMKOKpcQGOqUBJ2VNEoKdqwFp%2Bq%2FLnWGnawrvuQGAy1A0HxAIsdAwRlDfkAo6VKag%2BgGeOT526OOjM0OWPrf1Ul9P4tyit5gLCDvuAQ4ToziC4JbScO5noVvtjGD26%2FJNdB880Qfbl2mDL1uZjKkHO%2BPs5NWcpJkp5vB%2FLtIKNSEMHnRioCzvmQUJLjF1PG1xDe1ZeMPkC5EFzk15AxFbszDkuDA%2Fuo6lXYywhvYf&X-Amz-Signature=14d6a709acde469c8fff79d128acc1fc1e7c2644c351a492f7a66e4070c903a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLLMXHA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Dmn3fvV4fO84NjLMY4b7xSCWfLK58PgwnNeSjbnPTQIgJ34LWBPI1zkdg9jC2Uirkmh1NDVJ6DnEORv48eBqtTgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmSVFHxFj3orpHXQSrcAx2HpBmgTnJwvLLzus5aLOBOFqg1FD4yezjaY4pt9sLYgPZvZCvJk0H%2FnIxLdLPgYkakFITdhVpfz1N0Scgqmu6mgg9bh4Aj6%2FNIwDDV9c1uOpGgn3wg1DA2s0AD82pHecpvC%2F1GrVNB9i7FN24M0ZesDElXyidsRaE%2BQavsjIZqlF2%2BCVNSrOVD2prmC7OE3e3cTBj%2FcFHDtjVK29YZHYlXr5ytP9LRub3vQi9cLYhFfVukMZZUSBrH4yJIiufOUnJTLP9%2FuKWHkigTokenKB7cWuLmkLXvaJ9cXtOinvtsf%2BC7w1u6XNsMVDmTHDUXMsj2tcreJTzlHGjEMdGvHZjgFz7nqrGKL5m4o2QklTdLSnOaJuYTXZOIUf2CvDND0RUQ62snvWxKyQsBfYcYlYqXElt3UHO3hvjStJ4UQJiZ5ADm8whiAWFgb2pnChVyOqWyE8MzLxaPrSZO%2F07Y%2BCoGVIO5f0aCpETSeSLEVrL2gB5taRtSqz4jnROrpH74eZuqg7O5XX7%2FM2VlgcDIGlP2dnpIBtAHZaBanEZfbwoNUpbos0l2cYZnctInXbqeD7mbrpv6RnwtPQur025bNMapRWzf7THE2makya1lJBJt6eC5Ykj%2F%2F6n36mk%2BMKOKpcQGOqUBJ2VNEoKdqwFp%2Bq%2FLnWGnawrvuQGAy1A0HxAIsdAwRlDfkAo6VKag%2BgGeOT526OOjM0OWPrf1Ul9P4tyit5gLCDvuAQ4ToziC4JbScO5noVvtjGD26%2FJNdB880Qfbl2mDL1uZjKkHO%2BPs5NWcpJkp5vB%2FLtIKNSEMHnRioCzvmQUJLjF1PG1xDe1ZeMPkC5EFzk15AxFbszDkuDA%2Fuo6lXYywhvYf&X-Amz-Signature=058ad37ede29d06d519d69088335dd1cb1489fdf8b528d444172d63874611f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLLMXHA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Dmn3fvV4fO84NjLMY4b7xSCWfLK58PgwnNeSjbnPTQIgJ34LWBPI1zkdg9jC2Uirkmh1NDVJ6DnEORv48eBqtTgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmSVFHxFj3orpHXQSrcAx2HpBmgTnJwvLLzus5aLOBOFqg1FD4yezjaY4pt9sLYgPZvZCvJk0H%2FnIxLdLPgYkakFITdhVpfz1N0Scgqmu6mgg9bh4Aj6%2FNIwDDV9c1uOpGgn3wg1DA2s0AD82pHecpvC%2F1GrVNB9i7FN24M0ZesDElXyidsRaE%2BQavsjIZqlF2%2BCVNSrOVD2prmC7OE3e3cTBj%2FcFHDtjVK29YZHYlXr5ytP9LRub3vQi9cLYhFfVukMZZUSBrH4yJIiufOUnJTLP9%2FuKWHkigTokenKB7cWuLmkLXvaJ9cXtOinvtsf%2BC7w1u6XNsMVDmTHDUXMsj2tcreJTzlHGjEMdGvHZjgFz7nqrGKL5m4o2QklTdLSnOaJuYTXZOIUf2CvDND0RUQ62snvWxKyQsBfYcYlYqXElt3UHO3hvjStJ4UQJiZ5ADm8whiAWFgb2pnChVyOqWyE8MzLxaPrSZO%2F07Y%2BCoGVIO5f0aCpETSeSLEVrL2gB5taRtSqz4jnROrpH74eZuqg7O5XX7%2FM2VlgcDIGlP2dnpIBtAHZaBanEZfbwoNUpbos0l2cYZnctInXbqeD7mbrpv6RnwtPQur025bNMapRWzf7THE2makya1lJBJt6eC5Ykj%2F%2F6n36mk%2BMKOKpcQGOqUBJ2VNEoKdqwFp%2Bq%2FLnWGnawrvuQGAy1A0HxAIsdAwRlDfkAo6VKag%2BgGeOT526OOjM0OWPrf1Ul9P4tyit5gLCDvuAQ4ToziC4JbScO5noVvtjGD26%2FJNdB880Qfbl2mDL1uZjKkHO%2BPs5NWcpJkp5vB%2FLtIKNSEMHnRioCzvmQUJLjF1PG1xDe1ZeMPkC5EFzk15AxFbszDkuDA%2Fuo6lXYywhvYf&X-Amz-Signature=60b83d06bf138e6c5eca927941771fa9e5d74cc7861af482cd7eef183d0a7cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLLMXHA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Dmn3fvV4fO84NjLMY4b7xSCWfLK58PgwnNeSjbnPTQIgJ34LWBPI1zkdg9jC2Uirkmh1NDVJ6DnEORv48eBqtTgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmSVFHxFj3orpHXQSrcAx2HpBmgTnJwvLLzus5aLOBOFqg1FD4yezjaY4pt9sLYgPZvZCvJk0H%2FnIxLdLPgYkakFITdhVpfz1N0Scgqmu6mgg9bh4Aj6%2FNIwDDV9c1uOpGgn3wg1DA2s0AD82pHecpvC%2F1GrVNB9i7FN24M0ZesDElXyidsRaE%2BQavsjIZqlF2%2BCVNSrOVD2prmC7OE3e3cTBj%2FcFHDtjVK29YZHYlXr5ytP9LRub3vQi9cLYhFfVukMZZUSBrH4yJIiufOUnJTLP9%2FuKWHkigTokenKB7cWuLmkLXvaJ9cXtOinvtsf%2BC7w1u6XNsMVDmTHDUXMsj2tcreJTzlHGjEMdGvHZjgFz7nqrGKL5m4o2QklTdLSnOaJuYTXZOIUf2CvDND0RUQ62snvWxKyQsBfYcYlYqXElt3UHO3hvjStJ4UQJiZ5ADm8whiAWFgb2pnChVyOqWyE8MzLxaPrSZO%2F07Y%2BCoGVIO5f0aCpETSeSLEVrL2gB5taRtSqz4jnROrpH74eZuqg7O5XX7%2FM2VlgcDIGlP2dnpIBtAHZaBanEZfbwoNUpbos0l2cYZnctInXbqeD7mbrpv6RnwtPQur025bNMapRWzf7THE2makya1lJBJt6eC5Ykj%2F%2F6n36mk%2BMKOKpcQGOqUBJ2VNEoKdqwFp%2Bq%2FLnWGnawrvuQGAy1A0HxAIsdAwRlDfkAo6VKag%2BgGeOT526OOjM0OWPrf1Ul9P4tyit5gLCDvuAQ4ToziC4JbScO5noVvtjGD26%2FJNdB880Qfbl2mDL1uZjKkHO%2BPs5NWcpJkp5vB%2FLtIKNSEMHnRioCzvmQUJLjF1PG1xDe1ZeMPkC5EFzk15AxFbszDkuDA%2Fuo6lXYywhvYf&X-Amz-Signature=7f93e2c4e33b24e480e29fcbd826a83549e624d41174198f5aba30d4dea1e1cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLLMXHA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Dmn3fvV4fO84NjLMY4b7xSCWfLK58PgwnNeSjbnPTQIgJ34LWBPI1zkdg9jC2Uirkmh1NDVJ6DnEORv48eBqtTgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmSVFHxFj3orpHXQSrcAx2HpBmgTnJwvLLzus5aLOBOFqg1FD4yezjaY4pt9sLYgPZvZCvJk0H%2FnIxLdLPgYkakFITdhVpfz1N0Scgqmu6mgg9bh4Aj6%2FNIwDDV9c1uOpGgn3wg1DA2s0AD82pHecpvC%2F1GrVNB9i7FN24M0ZesDElXyidsRaE%2BQavsjIZqlF2%2BCVNSrOVD2prmC7OE3e3cTBj%2FcFHDtjVK29YZHYlXr5ytP9LRub3vQi9cLYhFfVukMZZUSBrH4yJIiufOUnJTLP9%2FuKWHkigTokenKB7cWuLmkLXvaJ9cXtOinvtsf%2BC7w1u6XNsMVDmTHDUXMsj2tcreJTzlHGjEMdGvHZjgFz7nqrGKL5m4o2QklTdLSnOaJuYTXZOIUf2CvDND0RUQ62snvWxKyQsBfYcYlYqXElt3UHO3hvjStJ4UQJiZ5ADm8whiAWFgb2pnChVyOqWyE8MzLxaPrSZO%2F07Y%2BCoGVIO5f0aCpETSeSLEVrL2gB5taRtSqz4jnROrpH74eZuqg7O5XX7%2FM2VlgcDIGlP2dnpIBtAHZaBanEZfbwoNUpbos0l2cYZnctInXbqeD7mbrpv6RnwtPQur025bNMapRWzf7THE2makya1lJBJt6eC5Ykj%2F%2F6n36mk%2BMKOKpcQGOqUBJ2VNEoKdqwFp%2Bq%2FLnWGnawrvuQGAy1A0HxAIsdAwRlDfkAo6VKag%2BgGeOT526OOjM0OWPrf1Ul9P4tyit5gLCDvuAQ4ToziC4JbScO5noVvtjGD26%2FJNdB880Qfbl2mDL1uZjKkHO%2BPs5NWcpJkp5vB%2FLtIKNSEMHnRioCzvmQUJLjF1PG1xDe1ZeMPkC5EFzk15AxFbszDkuDA%2Fuo6lXYywhvYf&X-Amz-Signature=6be27b0c778ae63519e11be705c7224902785fbd27f070d5b640b635767a1552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLLMXHA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Dmn3fvV4fO84NjLMY4b7xSCWfLK58PgwnNeSjbnPTQIgJ34LWBPI1zkdg9jC2Uirkmh1NDVJ6DnEORv48eBqtTgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmSVFHxFj3orpHXQSrcAx2HpBmgTnJwvLLzus5aLOBOFqg1FD4yezjaY4pt9sLYgPZvZCvJk0H%2FnIxLdLPgYkakFITdhVpfz1N0Scgqmu6mgg9bh4Aj6%2FNIwDDV9c1uOpGgn3wg1DA2s0AD82pHecpvC%2F1GrVNB9i7FN24M0ZesDElXyidsRaE%2BQavsjIZqlF2%2BCVNSrOVD2prmC7OE3e3cTBj%2FcFHDtjVK29YZHYlXr5ytP9LRub3vQi9cLYhFfVukMZZUSBrH4yJIiufOUnJTLP9%2FuKWHkigTokenKB7cWuLmkLXvaJ9cXtOinvtsf%2BC7w1u6XNsMVDmTHDUXMsj2tcreJTzlHGjEMdGvHZjgFz7nqrGKL5m4o2QklTdLSnOaJuYTXZOIUf2CvDND0RUQ62snvWxKyQsBfYcYlYqXElt3UHO3hvjStJ4UQJiZ5ADm8whiAWFgb2pnChVyOqWyE8MzLxaPrSZO%2F07Y%2BCoGVIO5f0aCpETSeSLEVrL2gB5taRtSqz4jnROrpH74eZuqg7O5XX7%2FM2VlgcDIGlP2dnpIBtAHZaBanEZfbwoNUpbos0l2cYZnctInXbqeD7mbrpv6RnwtPQur025bNMapRWzf7THE2makya1lJBJt6eC5Ykj%2F%2F6n36mk%2BMKOKpcQGOqUBJ2VNEoKdqwFp%2Bq%2FLnWGnawrvuQGAy1A0HxAIsdAwRlDfkAo6VKag%2BgGeOT526OOjM0OWPrf1Ul9P4tyit5gLCDvuAQ4ToziC4JbScO5noVvtjGD26%2FJNdB880Qfbl2mDL1uZjKkHO%2BPs5NWcpJkp5vB%2FLtIKNSEMHnRioCzvmQUJLjF1PG1xDe1ZeMPkC5EFzk15AxFbszDkuDA%2Fuo6lXYywhvYf&X-Amz-Signature=36c20db1e4f964b97abd56f5953bb9e4c1bcf97c5eeb12e068162a0868132468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLLMXHA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Dmn3fvV4fO84NjLMY4b7xSCWfLK58PgwnNeSjbnPTQIgJ34LWBPI1zkdg9jC2Uirkmh1NDVJ6DnEORv48eBqtTgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmSVFHxFj3orpHXQSrcAx2HpBmgTnJwvLLzus5aLOBOFqg1FD4yezjaY4pt9sLYgPZvZCvJk0H%2FnIxLdLPgYkakFITdhVpfz1N0Scgqmu6mgg9bh4Aj6%2FNIwDDV9c1uOpGgn3wg1DA2s0AD82pHecpvC%2F1GrVNB9i7FN24M0ZesDElXyidsRaE%2BQavsjIZqlF2%2BCVNSrOVD2prmC7OE3e3cTBj%2FcFHDtjVK29YZHYlXr5ytP9LRub3vQi9cLYhFfVukMZZUSBrH4yJIiufOUnJTLP9%2FuKWHkigTokenKB7cWuLmkLXvaJ9cXtOinvtsf%2BC7w1u6XNsMVDmTHDUXMsj2tcreJTzlHGjEMdGvHZjgFz7nqrGKL5m4o2QklTdLSnOaJuYTXZOIUf2CvDND0RUQ62snvWxKyQsBfYcYlYqXElt3UHO3hvjStJ4UQJiZ5ADm8whiAWFgb2pnChVyOqWyE8MzLxaPrSZO%2F07Y%2BCoGVIO5f0aCpETSeSLEVrL2gB5taRtSqz4jnROrpH74eZuqg7O5XX7%2FM2VlgcDIGlP2dnpIBtAHZaBanEZfbwoNUpbos0l2cYZnctInXbqeD7mbrpv6RnwtPQur025bNMapRWzf7THE2makya1lJBJt6eC5Ykj%2F%2F6n36mk%2BMKOKpcQGOqUBJ2VNEoKdqwFp%2Bq%2FLnWGnawrvuQGAy1A0HxAIsdAwRlDfkAo6VKag%2BgGeOT526OOjM0OWPrf1Ul9P4tyit5gLCDvuAQ4ToziC4JbScO5noVvtjGD26%2FJNdB880Qfbl2mDL1uZjKkHO%2BPs5NWcpJkp5vB%2FLtIKNSEMHnRioCzvmQUJLjF1PG1xDe1ZeMPkC5EFzk15AxFbszDkuDA%2Fuo6lXYywhvYf&X-Amz-Signature=d5ed6f23d48fc801e0ad69514fe3733f9a1c178a6f5f9c736f0a2402b23a0c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

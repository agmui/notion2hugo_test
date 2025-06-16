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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN5RDYF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBqaInj5yUA%2B7Fpa2c2era6XUtohigDYPCB0oJ1pBSwBAiEA4cSFtyI4tnsvoeQRyrzwNx6uocdwzR2b%2FnhDOinLa0kq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE5LAxQLikEkfml3oSrcAw2jM0uuv3RH4pGMlAeStWAlxm1fw3nKCVVLBD6594eSq7bAoyXRs6kAI4AVblYgFSYLT7XbrZuVV%2FwHK1bGYs8QzAFtAbex5eKH0pZKUhjWRwJBuW3Ep28a4EJMDefVZptcYZOS2YqrPSWuhgavYGJ%2B41KlvoKR1LzfZeTiI6kxYL9YvLrlY1DYsgOSyCdxU0fNdamcGV5w5vz1%2FRluzupIC0iUVQ6nd0OvLVlKNAW4WSWi36TgvopoLdyui46s5VKU7NC0jWlbqBjgQvvTcJntS0m06QcLGKYIPzyw8Ujnxg91JXhCIS2Ow3hdJeoOQOXjrDn7%2BwSuvpm1eN7%2BX8zfJgHxnLErBaHCidB%2BmRMS0%2FOOy%2Bz%2BsRxkFYdAKwNf1ro%2FqpRow448wWag3I3QiE%2BXVg0%2FcIyoPJpSF2ChO9enfMwz9YmQ9Rq4tW3GdnvTkGehUUsAr8HDjfiqxAp72RkPdqZnyJzU9RcEHKE94xQhuzOCAmCHUFnDvSl7a7uIP7w9aekXchwBx%2F1uQv6vlvhzkhfVmu25B2BA3zZW%2BDQnNDSnPVOjjVQZb7%2FUnNk4UPBLyI7VxY39R5PLNY6Un0dTAZcJ3FXUj0Os5r6HsMD44%2BCLLnpUr3CG2s8UMIXkv8IGOqUBN8iP2fPhy4CEqHNOahUPMjMTOP7cH8Ts5wvT43vChUqG91zLBWm6Vl6GoQGfjc2WdxetAI4sXLIpyzilhMj8wOAe6fhfxpob2FmTrMzBDnNIH6P%2FAEOOYKYh11kUYRS6r9HYR%2FVnbUxF960ojpd%2FJcV1sSKRRvSDvuj3cgQFLmmcNeH4a93zBjhRKbADn1kyLBwDdd0IWJEQzKmRUvc%2BJnTKKKHA&X-Amz-Signature=5ad1bbf65ecb2a4a1c4efa1b8c49d1160dd68a50f96fcb904741b59559509a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN5RDYF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBqaInj5yUA%2B7Fpa2c2era6XUtohigDYPCB0oJ1pBSwBAiEA4cSFtyI4tnsvoeQRyrzwNx6uocdwzR2b%2FnhDOinLa0kq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE5LAxQLikEkfml3oSrcAw2jM0uuv3RH4pGMlAeStWAlxm1fw3nKCVVLBD6594eSq7bAoyXRs6kAI4AVblYgFSYLT7XbrZuVV%2FwHK1bGYs8QzAFtAbex5eKH0pZKUhjWRwJBuW3Ep28a4EJMDefVZptcYZOS2YqrPSWuhgavYGJ%2B41KlvoKR1LzfZeTiI6kxYL9YvLrlY1DYsgOSyCdxU0fNdamcGV5w5vz1%2FRluzupIC0iUVQ6nd0OvLVlKNAW4WSWi36TgvopoLdyui46s5VKU7NC0jWlbqBjgQvvTcJntS0m06QcLGKYIPzyw8Ujnxg91JXhCIS2Ow3hdJeoOQOXjrDn7%2BwSuvpm1eN7%2BX8zfJgHxnLErBaHCidB%2BmRMS0%2FOOy%2Bz%2BsRxkFYdAKwNf1ro%2FqpRow448wWag3I3QiE%2BXVg0%2FcIyoPJpSF2ChO9enfMwz9YmQ9Rq4tW3GdnvTkGehUUsAr8HDjfiqxAp72RkPdqZnyJzU9RcEHKE94xQhuzOCAmCHUFnDvSl7a7uIP7w9aekXchwBx%2F1uQv6vlvhzkhfVmu25B2BA3zZW%2BDQnNDSnPVOjjVQZb7%2FUnNk4UPBLyI7VxY39R5PLNY6Un0dTAZcJ3FXUj0Os5r6HsMD44%2BCLLnpUr3CG2s8UMIXkv8IGOqUBN8iP2fPhy4CEqHNOahUPMjMTOP7cH8Ts5wvT43vChUqG91zLBWm6Vl6GoQGfjc2WdxetAI4sXLIpyzilhMj8wOAe6fhfxpob2FmTrMzBDnNIH6P%2FAEOOYKYh11kUYRS6r9HYR%2FVnbUxF960ojpd%2FJcV1sSKRRvSDvuj3cgQFLmmcNeH4a93zBjhRKbADn1kyLBwDdd0IWJEQzKmRUvc%2BJnTKKKHA&X-Amz-Signature=f9eea22da313d0c6ef8815d58fa9e9b20b4aa7061b16bb2eb37e7c505cb17e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN5RDYF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBqaInj5yUA%2B7Fpa2c2era6XUtohigDYPCB0oJ1pBSwBAiEA4cSFtyI4tnsvoeQRyrzwNx6uocdwzR2b%2FnhDOinLa0kq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE5LAxQLikEkfml3oSrcAw2jM0uuv3RH4pGMlAeStWAlxm1fw3nKCVVLBD6594eSq7bAoyXRs6kAI4AVblYgFSYLT7XbrZuVV%2FwHK1bGYs8QzAFtAbex5eKH0pZKUhjWRwJBuW3Ep28a4EJMDefVZptcYZOS2YqrPSWuhgavYGJ%2B41KlvoKR1LzfZeTiI6kxYL9YvLrlY1DYsgOSyCdxU0fNdamcGV5w5vz1%2FRluzupIC0iUVQ6nd0OvLVlKNAW4WSWi36TgvopoLdyui46s5VKU7NC0jWlbqBjgQvvTcJntS0m06QcLGKYIPzyw8Ujnxg91JXhCIS2Ow3hdJeoOQOXjrDn7%2BwSuvpm1eN7%2BX8zfJgHxnLErBaHCidB%2BmRMS0%2FOOy%2Bz%2BsRxkFYdAKwNf1ro%2FqpRow448wWag3I3QiE%2BXVg0%2FcIyoPJpSF2ChO9enfMwz9YmQ9Rq4tW3GdnvTkGehUUsAr8HDjfiqxAp72RkPdqZnyJzU9RcEHKE94xQhuzOCAmCHUFnDvSl7a7uIP7w9aekXchwBx%2F1uQv6vlvhzkhfVmu25B2BA3zZW%2BDQnNDSnPVOjjVQZb7%2FUnNk4UPBLyI7VxY39R5PLNY6Un0dTAZcJ3FXUj0Os5r6HsMD44%2BCLLnpUr3CG2s8UMIXkv8IGOqUBN8iP2fPhy4CEqHNOahUPMjMTOP7cH8Ts5wvT43vChUqG91zLBWm6Vl6GoQGfjc2WdxetAI4sXLIpyzilhMj8wOAe6fhfxpob2FmTrMzBDnNIH6P%2FAEOOYKYh11kUYRS6r9HYR%2FVnbUxF960ojpd%2FJcV1sSKRRvSDvuj3cgQFLmmcNeH4a93zBjhRKbADn1kyLBwDdd0IWJEQzKmRUvc%2BJnTKKKHA&X-Amz-Signature=a9c479b15689558f0ac133473e66c58a00e970548663d4dee064c43976d6bd4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN5RDYF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBqaInj5yUA%2B7Fpa2c2era6XUtohigDYPCB0oJ1pBSwBAiEA4cSFtyI4tnsvoeQRyrzwNx6uocdwzR2b%2FnhDOinLa0kq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE5LAxQLikEkfml3oSrcAw2jM0uuv3RH4pGMlAeStWAlxm1fw3nKCVVLBD6594eSq7bAoyXRs6kAI4AVblYgFSYLT7XbrZuVV%2FwHK1bGYs8QzAFtAbex5eKH0pZKUhjWRwJBuW3Ep28a4EJMDefVZptcYZOS2YqrPSWuhgavYGJ%2B41KlvoKR1LzfZeTiI6kxYL9YvLrlY1DYsgOSyCdxU0fNdamcGV5w5vz1%2FRluzupIC0iUVQ6nd0OvLVlKNAW4WSWi36TgvopoLdyui46s5VKU7NC0jWlbqBjgQvvTcJntS0m06QcLGKYIPzyw8Ujnxg91JXhCIS2Ow3hdJeoOQOXjrDn7%2BwSuvpm1eN7%2BX8zfJgHxnLErBaHCidB%2BmRMS0%2FOOy%2Bz%2BsRxkFYdAKwNf1ro%2FqpRow448wWag3I3QiE%2BXVg0%2FcIyoPJpSF2ChO9enfMwz9YmQ9Rq4tW3GdnvTkGehUUsAr8HDjfiqxAp72RkPdqZnyJzU9RcEHKE94xQhuzOCAmCHUFnDvSl7a7uIP7w9aekXchwBx%2F1uQv6vlvhzkhfVmu25B2BA3zZW%2BDQnNDSnPVOjjVQZb7%2FUnNk4UPBLyI7VxY39R5PLNY6Un0dTAZcJ3FXUj0Os5r6HsMD44%2BCLLnpUr3CG2s8UMIXkv8IGOqUBN8iP2fPhy4CEqHNOahUPMjMTOP7cH8Ts5wvT43vChUqG91zLBWm6Vl6GoQGfjc2WdxetAI4sXLIpyzilhMj8wOAe6fhfxpob2FmTrMzBDnNIH6P%2FAEOOYKYh11kUYRS6r9HYR%2FVnbUxF960ojpd%2FJcV1sSKRRvSDvuj3cgQFLmmcNeH4a93zBjhRKbADn1kyLBwDdd0IWJEQzKmRUvc%2BJnTKKKHA&X-Amz-Signature=3dc70e1f08ef50552dcfa94634777eb87fa8a2cd1214183a4f920b19e17b0191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN5RDYF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBqaInj5yUA%2B7Fpa2c2era6XUtohigDYPCB0oJ1pBSwBAiEA4cSFtyI4tnsvoeQRyrzwNx6uocdwzR2b%2FnhDOinLa0kq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE5LAxQLikEkfml3oSrcAw2jM0uuv3RH4pGMlAeStWAlxm1fw3nKCVVLBD6594eSq7bAoyXRs6kAI4AVblYgFSYLT7XbrZuVV%2FwHK1bGYs8QzAFtAbex5eKH0pZKUhjWRwJBuW3Ep28a4EJMDefVZptcYZOS2YqrPSWuhgavYGJ%2B41KlvoKR1LzfZeTiI6kxYL9YvLrlY1DYsgOSyCdxU0fNdamcGV5w5vz1%2FRluzupIC0iUVQ6nd0OvLVlKNAW4WSWi36TgvopoLdyui46s5VKU7NC0jWlbqBjgQvvTcJntS0m06QcLGKYIPzyw8Ujnxg91JXhCIS2Ow3hdJeoOQOXjrDn7%2BwSuvpm1eN7%2BX8zfJgHxnLErBaHCidB%2BmRMS0%2FOOy%2Bz%2BsRxkFYdAKwNf1ro%2FqpRow448wWag3I3QiE%2BXVg0%2FcIyoPJpSF2ChO9enfMwz9YmQ9Rq4tW3GdnvTkGehUUsAr8HDjfiqxAp72RkPdqZnyJzU9RcEHKE94xQhuzOCAmCHUFnDvSl7a7uIP7w9aekXchwBx%2F1uQv6vlvhzkhfVmu25B2BA3zZW%2BDQnNDSnPVOjjVQZb7%2FUnNk4UPBLyI7VxY39R5PLNY6Un0dTAZcJ3FXUj0Os5r6HsMD44%2BCLLnpUr3CG2s8UMIXkv8IGOqUBN8iP2fPhy4CEqHNOahUPMjMTOP7cH8Ts5wvT43vChUqG91zLBWm6Vl6GoQGfjc2WdxetAI4sXLIpyzilhMj8wOAe6fhfxpob2FmTrMzBDnNIH6P%2FAEOOYKYh11kUYRS6r9HYR%2FVnbUxF960ojpd%2FJcV1sSKRRvSDvuj3cgQFLmmcNeH4a93zBjhRKbADn1kyLBwDdd0IWJEQzKmRUvc%2BJnTKKKHA&X-Amz-Signature=4d3e20d5bf6d4e5ffb185a93947d48cd78f0b326d4641da1a3fc570523c8bf5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN5RDYF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBqaInj5yUA%2B7Fpa2c2era6XUtohigDYPCB0oJ1pBSwBAiEA4cSFtyI4tnsvoeQRyrzwNx6uocdwzR2b%2FnhDOinLa0kq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE5LAxQLikEkfml3oSrcAw2jM0uuv3RH4pGMlAeStWAlxm1fw3nKCVVLBD6594eSq7bAoyXRs6kAI4AVblYgFSYLT7XbrZuVV%2FwHK1bGYs8QzAFtAbex5eKH0pZKUhjWRwJBuW3Ep28a4EJMDefVZptcYZOS2YqrPSWuhgavYGJ%2B41KlvoKR1LzfZeTiI6kxYL9YvLrlY1DYsgOSyCdxU0fNdamcGV5w5vz1%2FRluzupIC0iUVQ6nd0OvLVlKNAW4WSWi36TgvopoLdyui46s5VKU7NC0jWlbqBjgQvvTcJntS0m06QcLGKYIPzyw8Ujnxg91JXhCIS2Ow3hdJeoOQOXjrDn7%2BwSuvpm1eN7%2BX8zfJgHxnLErBaHCidB%2BmRMS0%2FOOy%2Bz%2BsRxkFYdAKwNf1ro%2FqpRow448wWag3I3QiE%2BXVg0%2FcIyoPJpSF2ChO9enfMwz9YmQ9Rq4tW3GdnvTkGehUUsAr8HDjfiqxAp72RkPdqZnyJzU9RcEHKE94xQhuzOCAmCHUFnDvSl7a7uIP7w9aekXchwBx%2F1uQv6vlvhzkhfVmu25B2BA3zZW%2BDQnNDSnPVOjjVQZb7%2FUnNk4UPBLyI7VxY39R5PLNY6Un0dTAZcJ3FXUj0Os5r6HsMD44%2BCLLnpUr3CG2s8UMIXkv8IGOqUBN8iP2fPhy4CEqHNOahUPMjMTOP7cH8Ts5wvT43vChUqG91zLBWm6Vl6GoQGfjc2WdxetAI4sXLIpyzilhMj8wOAe6fhfxpob2FmTrMzBDnNIH6P%2FAEOOYKYh11kUYRS6r9HYR%2FVnbUxF960ojpd%2FJcV1sSKRRvSDvuj3cgQFLmmcNeH4a93zBjhRKbADn1kyLBwDdd0IWJEQzKmRUvc%2BJnTKKKHA&X-Amz-Signature=77c80ff5bc70834e244e2bc0635a6026d1544c30be2aef8244b8dd11a4baf2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN5RDYF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBqaInj5yUA%2B7Fpa2c2era6XUtohigDYPCB0oJ1pBSwBAiEA4cSFtyI4tnsvoeQRyrzwNx6uocdwzR2b%2FnhDOinLa0kq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE5LAxQLikEkfml3oSrcAw2jM0uuv3RH4pGMlAeStWAlxm1fw3nKCVVLBD6594eSq7bAoyXRs6kAI4AVblYgFSYLT7XbrZuVV%2FwHK1bGYs8QzAFtAbex5eKH0pZKUhjWRwJBuW3Ep28a4EJMDefVZptcYZOS2YqrPSWuhgavYGJ%2B41KlvoKR1LzfZeTiI6kxYL9YvLrlY1DYsgOSyCdxU0fNdamcGV5w5vz1%2FRluzupIC0iUVQ6nd0OvLVlKNAW4WSWi36TgvopoLdyui46s5VKU7NC0jWlbqBjgQvvTcJntS0m06QcLGKYIPzyw8Ujnxg91JXhCIS2Ow3hdJeoOQOXjrDn7%2BwSuvpm1eN7%2BX8zfJgHxnLErBaHCidB%2BmRMS0%2FOOy%2Bz%2BsRxkFYdAKwNf1ro%2FqpRow448wWag3I3QiE%2BXVg0%2FcIyoPJpSF2ChO9enfMwz9YmQ9Rq4tW3GdnvTkGehUUsAr8HDjfiqxAp72RkPdqZnyJzU9RcEHKE94xQhuzOCAmCHUFnDvSl7a7uIP7w9aekXchwBx%2F1uQv6vlvhzkhfVmu25B2BA3zZW%2BDQnNDSnPVOjjVQZb7%2FUnNk4UPBLyI7VxY39R5PLNY6Un0dTAZcJ3FXUj0Os5r6HsMD44%2BCLLnpUr3CG2s8UMIXkv8IGOqUBN8iP2fPhy4CEqHNOahUPMjMTOP7cH8Ts5wvT43vChUqG91zLBWm6Vl6GoQGfjc2WdxetAI4sXLIpyzilhMj8wOAe6fhfxpob2FmTrMzBDnNIH6P%2FAEOOYKYh11kUYRS6r9HYR%2FVnbUxF960ojpd%2FJcV1sSKRRvSDvuj3cgQFLmmcNeH4a93zBjhRKbADn1kyLBwDdd0IWJEQzKmRUvc%2BJnTKKKHA&X-Amz-Signature=5111fc56d8038d3b78d71fc3e418febf2122ca8bcb63cb71ed9a1abbc4207067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN5RDYF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBqaInj5yUA%2B7Fpa2c2era6XUtohigDYPCB0oJ1pBSwBAiEA4cSFtyI4tnsvoeQRyrzwNx6uocdwzR2b%2FnhDOinLa0kq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE5LAxQLikEkfml3oSrcAw2jM0uuv3RH4pGMlAeStWAlxm1fw3nKCVVLBD6594eSq7bAoyXRs6kAI4AVblYgFSYLT7XbrZuVV%2FwHK1bGYs8QzAFtAbex5eKH0pZKUhjWRwJBuW3Ep28a4EJMDefVZptcYZOS2YqrPSWuhgavYGJ%2B41KlvoKR1LzfZeTiI6kxYL9YvLrlY1DYsgOSyCdxU0fNdamcGV5w5vz1%2FRluzupIC0iUVQ6nd0OvLVlKNAW4WSWi36TgvopoLdyui46s5VKU7NC0jWlbqBjgQvvTcJntS0m06QcLGKYIPzyw8Ujnxg91JXhCIS2Ow3hdJeoOQOXjrDn7%2BwSuvpm1eN7%2BX8zfJgHxnLErBaHCidB%2BmRMS0%2FOOy%2Bz%2BsRxkFYdAKwNf1ro%2FqpRow448wWag3I3QiE%2BXVg0%2FcIyoPJpSF2ChO9enfMwz9YmQ9Rq4tW3GdnvTkGehUUsAr8HDjfiqxAp72RkPdqZnyJzU9RcEHKE94xQhuzOCAmCHUFnDvSl7a7uIP7w9aekXchwBx%2F1uQv6vlvhzkhfVmu25B2BA3zZW%2BDQnNDSnPVOjjVQZb7%2FUnNk4UPBLyI7VxY39R5PLNY6Un0dTAZcJ3FXUj0Os5r6HsMD44%2BCLLnpUr3CG2s8UMIXkv8IGOqUBN8iP2fPhy4CEqHNOahUPMjMTOP7cH8Ts5wvT43vChUqG91zLBWm6Vl6GoQGfjc2WdxetAI4sXLIpyzilhMj8wOAe6fhfxpob2FmTrMzBDnNIH6P%2FAEOOYKYh11kUYRS6r9HYR%2FVnbUxF960ojpd%2FJcV1sSKRRvSDvuj3cgQFLmmcNeH4a93zBjhRKbADn1kyLBwDdd0IWJEQzKmRUvc%2BJnTKKKHA&X-Amz-Signature=175134e014dd0f16e8a0d882d2e61253ed336c9f50c782a9c3a102671c171d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

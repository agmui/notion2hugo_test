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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJN4MQ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXz9bg1b3X2ooXb%2FqmDhbYYvFFQCvlCcCbQ5aEy%2BRwwAiEAtUZNM94JqehQdTq9DusOCr6fRsmz33v6XWugvhH4T6gq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAtBrRMwhxgicNvMoCrcA7EtlKIFj7vc62FNBHeS5jQwBXoo5B%2FDlXLIQ09wqihgZEwxV2BVfzcnBAuRUNA1gDubw0JtqgK2Pc7OYisrRUjHjDHuk%2FZG0Mxh7pqsjJTmhll8VkNOkvowLh2knhO9McFMmdIE4yTajht%2BQFNbDgwAUaI4mhZM5px3PxeHPe24aUpMRY3TM5AfjchbtJg7NHhiUndySNVz%2B9TjaTGVKqXr8uLHWmpRrz7uxCS6bI9ilMG0jPDy9KIo2L1lzBSpWpeErafQ8R7lsnXoXJ98u2ZTSvH0Id1nJpGtceMTpBMuaBFI4%2FiyaUDoiKKfCYZ5Y%2F5h%2FzFnmR5%2F0%2F3nlh62LsVkCZHcVy0rhcfYLi32C84wcxvZ%2F0VpW6HuHbvyWhlELaOZAr7KvfK3xfYEFXYPSqgjwW5JMJGtkt1pZC%2BKhWVn9651C6bMAahKOqJidj34e84Grx9t2EbLpfg7Vf0Ig5UH7SXfMjQH8%2BYQvhoSj4XUVEabR3ByuI8yQuEJ0B0d4xA%2FQquiVzU4ZGOP0W9%2BDydwnpoZUEfU8eYHRA%2FNh%2F71j6eBq1WQf3rFLtAA9nv1CZput5g1cCRKYtxlcy2MIiJYbw2nfL68efhdRA6G6pPGv6spIjSKLcr7RPpJMOi8ocEGOqUB%2BpUAvTvFO8z78n0XuGvKv%2BgIjn%2FL1rt%2B0evDDWdq%2FBqQ%2FDlfSZCqA0BST8AMrbPFQXuUPGBo3nueylMYfsHkdcy7Lk34Ma0lifPYhMKjZFDlwKHQ%2BK9GlcdfJP6uobljOmcQBtsaL1dL2uh1crBcRtGWFW2MCCZbgnISGq%2FMSD1EA09dpOQFF9TDHhejABtZ1wOiBAaLwGimEu6DOSNTBeL9lS2I&X-Amz-Signature=d3cd68f84c7340c36cd8ba9cde24e1868a5c1e67b825e8feb888f02ce5e59f05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJN4MQ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXz9bg1b3X2ooXb%2FqmDhbYYvFFQCvlCcCbQ5aEy%2BRwwAiEAtUZNM94JqehQdTq9DusOCr6fRsmz33v6XWugvhH4T6gq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAtBrRMwhxgicNvMoCrcA7EtlKIFj7vc62FNBHeS5jQwBXoo5B%2FDlXLIQ09wqihgZEwxV2BVfzcnBAuRUNA1gDubw0JtqgK2Pc7OYisrRUjHjDHuk%2FZG0Mxh7pqsjJTmhll8VkNOkvowLh2knhO9McFMmdIE4yTajht%2BQFNbDgwAUaI4mhZM5px3PxeHPe24aUpMRY3TM5AfjchbtJg7NHhiUndySNVz%2B9TjaTGVKqXr8uLHWmpRrz7uxCS6bI9ilMG0jPDy9KIo2L1lzBSpWpeErafQ8R7lsnXoXJ98u2ZTSvH0Id1nJpGtceMTpBMuaBFI4%2FiyaUDoiKKfCYZ5Y%2F5h%2FzFnmR5%2F0%2F3nlh62LsVkCZHcVy0rhcfYLi32C84wcxvZ%2F0VpW6HuHbvyWhlELaOZAr7KvfK3xfYEFXYPSqgjwW5JMJGtkt1pZC%2BKhWVn9651C6bMAahKOqJidj34e84Grx9t2EbLpfg7Vf0Ig5UH7SXfMjQH8%2BYQvhoSj4XUVEabR3ByuI8yQuEJ0B0d4xA%2FQquiVzU4ZGOP0W9%2BDydwnpoZUEfU8eYHRA%2FNh%2F71j6eBq1WQf3rFLtAA9nv1CZput5g1cCRKYtxlcy2MIiJYbw2nfL68efhdRA6G6pPGv6spIjSKLcr7RPpJMOi8ocEGOqUB%2BpUAvTvFO8z78n0XuGvKv%2BgIjn%2FL1rt%2B0evDDWdq%2FBqQ%2FDlfSZCqA0BST8AMrbPFQXuUPGBo3nueylMYfsHkdcy7Lk34Ma0lifPYhMKjZFDlwKHQ%2BK9GlcdfJP6uobljOmcQBtsaL1dL2uh1crBcRtGWFW2MCCZbgnISGq%2FMSD1EA09dpOQFF9TDHhejABtZ1wOiBAaLwGimEu6DOSNTBeL9lS2I&X-Amz-Signature=c963007b8c97f0ce707b62cc91e5998297303f48fa2011514f1c801fed947511&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJN4MQ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXz9bg1b3X2ooXb%2FqmDhbYYvFFQCvlCcCbQ5aEy%2BRwwAiEAtUZNM94JqehQdTq9DusOCr6fRsmz33v6XWugvhH4T6gq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAtBrRMwhxgicNvMoCrcA7EtlKIFj7vc62FNBHeS5jQwBXoo5B%2FDlXLIQ09wqihgZEwxV2BVfzcnBAuRUNA1gDubw0JtqgK2Pc7OYisrRUjHjDHuk%2FZG0Mxh7pqsjJTmhll8VkNOkvowLh2knhO9McFMmdIE4yTajht%2BQFNbDgwAUaI4mhZM5px3PxeHPe24aUpMRY3TM5AfjchbtJg7NHhiUndySNVz%2B9TjaTGVKqXr8uLHWmpRrz7uxCS6bI9ilMG0jPDy9KIo2L1lzBSpWpeErafQ8R7lsnXoXJ98u2ZTSvH0Id1nJpGtceMTpBMuaBFI4%2FiyaUDoiKKfCYZ5Y%2F5h%2FzFnmR5%2F0%2F3nlh62LsVkCZHcVy0rhcfYLi32C84wcxvZ%2F0VpW6HuHbvyWhlELaOZAr7KvfK3xfYEFXYPSqgjwW5JMJGtkt1pZC%2BKhWVn9651C6bMAahKOqJidj34e84Grx9t2EbLpfg7Vf0Ig5UH7SXfMjQH8%2BYQvhoSj4XUVEabR3ByuI8yQuEJ0B0d4xA%2FQquiVzU4ZGOP0W9%2BDydwnpoZUEfU8eYHRA%2FNh%2F71j6eBq1WQf3rFLtAA9nv1CZput5g1cCRKYtxlcy2MIiJYbw2nfL68efhdRA6G6pPGv6spIjSKLcr7RPpJMOi8ocEGOqUB%2BpUAvTvFO8z78n0XuGvKv%2BgIjn%2FL1rt%2B0evDDWdq%2FBqQ%2FDlfSZCqA0BST8AMrbPFQXuUPGBo3nueylMYfsHkdcy7Lk34Ma0lifPYhMKjZFDlwKHQ%2BK9GlcdfJP6uobljOmcQBtsaL1dL2uh1crBcRtGWFW2MCCZbgnISGq%2FMSD1EA09dpOQFF9TDHhejABtZ1wOiBAaLwGimEu6DOSNTBeL9lS2I&X-Amz-Signature=74a10cb1074785bf76ce8fe98ad0b67631d130e76571c2c49b2cc22d483c6079&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJN4MQ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXz9bg1b3X2ooXb%2FqmDhbYYvFFQCvlCcCbQ5aEy%2BRwwAiEAtUZNM94JqehQdTq9DusOCr6fRsmz33v6XWugvhH4T6gq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAtBrRMwhxgicNvMoCrcA7EtlKIFj7vc62FNBHeS5jQwBXoo5B%2FDlXLIQ09wqihgZEwxV2BVfzcnBAuRUNA1gDubw0JtqgK2Pc7OYisrRUjHjDHuk%2FZG0Mxh7pqsjJTmhll8VkNOkvowLh2knhO9McFMmdIE4yTajht%2BQFNbDgwAUaI4mhZM5px3PxeHPe24aUpMRY3TM5AfjchbtJg7NHhiUndySNVz%2B9TjaTGVKqXr8uLHWmpRrz7uxCS6bI9ilMG0jPDy9KIo2L1lzBSpWpeErafQ8R7lsnXoXJ98u2ZTSvH0Id1nJpGtceMTpBMuaBFI4%2FiyaUDoiKKfCYZ5Y%2F5h%2FzFnmR5%2F0%2F3nlh62LsVkCZHcVy0rhcfYLi32C84wcxvZ%2F0VpW6HuHbvyWhlELaOZAr7KvfK3xfYEFXYPSqgjwW5JMJGtkt1pZC%2BKhWVn9651C6bMAahKOqJidj34e84Grx9t2EbLpfg7Vf0Ig5UH7SXfMjQH8%2BYQvhoSj4XUVEabR3ByuI8yQuEJ0B0d4xA%2FQquiVzU4ZGOP0W9%2BDydwnpoZUEfU8eYHRA%2FNh%2F71j6eBq1WQf3rFLtAA9nv1CZput5g1cCRKYtxlcy2MIiJYbw2nfL68efhdRA6G6pPGv6spIjSKLcr7RPpJMOi8ocEGOqUB%2BpUAvTvFO8z78n0XuGvKv%2BgIjn%2FL1rt%2B0evDDWdq%2FBqQ%2FDlfSZCqA0BST8AMrbPFQXuUPGBo3nueylMYfsHkdcy7Lk34Ma0lifPYhMKjZFDlwKHQ%2BK9GlcdfJP6uobljOmcQBtsaL1dL2uh1crBcRtGWFW2MCCZbgnISGq%2FMSD1EA09dpOQFF9TDHhejABtZ1wOiBAaLwGimEu6DOSNTBeL9lS2I&X-Amz-Signature=f19c4121cf98d965df994657e3fac7a4f4403f2beae07ca3f54f56247bec9616&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJN4MQ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXz9bg1b3X2ooXb%2FqmDhbYYvFFQCvlCcCbQ5aEy%2BRwwAiEAtUZNM94JqehQdTq9DusOCr6fRsmz33v6XWugvhH4T6gq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAtBrRMwhxgicNvMoCrcA7EtlKIFj7vc62FNBHeS5jQwBXoo5B%2FDlXLIQ09wqihgZEwxV2BVfzcnBAuRUNA1gDubw0JtqgK2Pc7OYisrRUjHjDHuk%2FZG0Mxh7pqsjJTmhll8VkNOkvowLh2knhO9McFMmdIE4yTajht%2BQFNbDgwAUaI4mhZM5px3PxeHPe24aUpMRY3TM5AfjchbtJg7NHhiUndySNVz%2B9TjaTGVKqXr8uLHWmpRrz7uxCS6bI9ilMG0jPDy9KIo2L1lzBSpWpeErafQ8R7lsnXoXJ98u2ZTSvH0Id1nJpGtceMTpBMuaBFI4%2FiyaUDoiKKfCYZ5Y%2F5h%2FzFnmR5%2F0%2F3nlh62LsVkCZHcVy0rhcfYLi32C84wcxvZ%2F0VpW6HuHbvyWhlELaOZAr7KvfK3xfYEFXYPSqgjwW5JMJGtkt1pZC%2BKhWVn9651C6bMAahKOqJidj34e84Grx9t2EbLpfg7Vf0Ig5UH7SXfMjQH8%2BYQvhoSj4XUVEabR3ByuI8yQuEJ0B0d4xA%2FQquiVzU4ZGOP0W9%2BDydwnpoZUEfU8eYHRA%2FNh%2F71j6eBq1WQf3rFLtAA9nv1CZput5g1cCRKYtxlcy2MIiJYbw2nfL68efhdRA6G6pPGv6spIjSKLcr7RPpJMOi8ocEGOqUB%2BpUAvTvFO8z78n0XuGvKv%2BgIjn%2FL1rt%2B0evDDWdq%2FBqQ%2FDlfSZCqA0BST8AMrbPFQXuUPGBo3nueylMYfsHkdcy7Lk34Ma0lifPYhMKjZFDlwKHQ%2BK9GlcdfJP6uobljOmcQBtsaL1dL2uh1crBcRtGWFW2MCCZbgnISGq%2FMSD1EA09dpOQFF9TDHhejABtZ1wOiBAaLwGimEu6DOSNTBeL9lS2I&X-Amz-Signature=c0c086f9565059e795a1caba96075595f21c81c8fdc96034a93df2283901167f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJN4MQ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXz9bg1b3X2ooXb%2FqmDhbYYvFFQCvlCcCbQ5aEy%2BRwwAiEAtUZNM94JqehQdTq9DusOCr6fRsmz33v6XWugvhH4T6gq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAtBrRMwhxgicNvMoCrcA7EtlKIFj7vc62FNBHeS5jQwBXoo5B%2FDlXLIQ09wqihgZEwxV2BVfzcnBAuRUNA1gDubw0JtqgK2Pc7OYisrRUjHjDHuk%2FZG0Mxh7pqsjJTmhll8VkNOkvowLh2knhO9McFMmdIE4yTajht%2BQFNbDgwAUaI4mhZM5px3PxeHPe24aUpMRY3TM5AfjchbtJg7NHhiUndySNVz%2B9TjaTGVKqXr8uLHWmpRrz7uxCS6bI9ilMG0jPDy9KIo2L1lzBSpWpeErafQ8R7lsnXoXJ98u2ZTSvH0Id1nJpGtceMTpBMuaBFI4%2FiyaUDoiKKfCYZ5Y%2F5h%2FzFnmR5%2F0%2F3nlh62LsVkCZHcVy0rhcfYLi32C84wcxvZ%2F0VpW6HuHbvyWhlELaOZAr7KvfK3xfYEFXYPSqgjwW5JMJGtkt1pZC%2BKhWVn9651C6bMAahKOqJidj34e84Grx9t2EbLpfg7Vf0Ig5UH7SXfMjQH8%2BYQvhoSj4XUVEabR3ByuI8yQuEJ0B0d4xA%2FQquiVzU4ZGOP0W9%2BDydwnpoZUEfU8eYHRA%2FNh%2F71j6eBq1WQf3rFLtAA9nv1CZput5g1cCRKYtxlcy2MIiJYbw2nfL68efhdRA6G6pPGv6spIjSKLcr7RPpJMOi8ocEGOqUB%2BpUAvTvFO8z78n0XuGvKv%2BgIjn%2FL1rt%2B0evDDWdq%2FBqQ%2FDlfSZCqA0BST8AMrbPFQXuUPGBo3nueylMYfsHkdcy7Lk34Ma0lifPYhMKjZFDlwKHQ%2BK9GlcdfJP6uobljOmcQBtsaL1dL2uh1crBcRtGWFW2MCCZbgnISGq%2FMSD1EA09dpOQFF9TDHhejABtZ1wOiBAaLwGimEu6DOSNTBeL9lS2I&X-Amz-Signature=1a79a2f9beb0724289ab150372c1c7360ea750b7a1cedb3e1aa86c44bf1dd0f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJN4MQ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXz9bg1b3X2ooXb%2FqmDhbYYvFFQCvlCcCbQ5aEy%2BRwwAiEAtUZNM94JqehQdTq9DusOCr6fRsmz33v6XWugvhH4T6gq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAtBrRMwhxgicNvMoCrcA7EtlKIFj7vc62FNBHeS5jQwBXoo5B%2FDlXLIQ09wqihgZEwxV2BVfzcnBAuRUNA1gDubw0JtqgK2Pc7OYisrRUjHjDHuk%2FZG0Mxh7pqsjJTmhll8VkNOkvowLh2knhO9McFMmdIE4yTajht%2BQFNbDgwAUaI4mhZM5px3PxeHPe24aUpMRY3TM5AfjchbtJg7NHhiUndySNVz%2B9TjaTGVKqXr8uLHWmpRrz7uxCS6bI9ilMG0jPDy9KIo2L1lzBSpWpeErafQ8R7lsnXoXJ98u2ZTSvH0Id1nJpGtceMTpBMuaBFI4%2FiyaUDoiKKfCYZ5Y%2F5h%2FzFnmR5%2F0%2F3nlh62LsVkCZHcVy0rhcfYLi32C84wcxvZ%2F0VpW6HuHbvyWhlELaOZAr7KvfK3xfYEFXYPSqgjwW5JMJGtkt1pZC%2BKhWVn9651C6bMAahKOqJidj34e84Grx9t2EbLpfg7Vf0Ig5UH7SXfMjQH8%2BYQvhoSj4XUVEabR3ByuI8yQuEJ0B0d4xA%2FQquiVzU4ZGOP0W9%2BDydwnpoZUEfU8eYHRA%2FNh%2F71j6eBq1WQf3rFLtAA9nv1CZput5g1cCRKYtxlcy2MIiJYbw2nfL68efhdRA6G6pPGv6spIjSKLcr7RPpJMOi8ocEGOqUB%2BpUAvTvFO8z78n0XuGvKv%2BgIjn%2FL1rt%2B0evDDWdq%2FBqQ%2FDlfSZCqA0BST8AMrbPFQXuUPGBo3nueylMYfsHkdcy7Lk34Ma0lifPYhMKjZFDlwKHQ%2BK9GlcdfJP6uobljOmcQBtsaL1dL2uh1crBcRtGWFW2MCCZbgnISGq%2FMSD1EA09dpOQFF9TDHhejABtZ1wOiBAaLwGimEu6DOSNTBeL9lS2I&X-Amz-Signature=1ccad68d852a4f5a471638ae7809600997d69117500b741d4b73b8eb349746b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJN4MQ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXz9bg1b3X2ooXb%2FqmDhbYYvFFQCvlCcCbQ5aEy%2BRwwAiEAtUZNM94JqehQdTq9DusOCr6fRsmz33v6XWugvhH4T6gq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAtBrRMwhxgicNvMoCrcA7EtlKIFj7vc62FNBHeS5jQwBXoo5B%2FDlXLIQ09wqihgZEwxV2BVfzcnBAuRUNA1gDubw0JtqgK2Pc7OYisrRUjHjDHuk%2FZG0Mxh7pqsjJTmhll8VkNOkvowLh2knhO9McFMmdIE4yTajht%2BQFNbDgwAUaI4mhZM5px3PxeHPe24aUpMRY3TM5AfjchbtJg7NHhiUndySNVz%2B9TjaTGVKqXr8uLHWmpRrz7uxCS6bI9ilMG0jPDy9KIo2L1lzBSpWpeErafQ8R7lsnXoXJ98u2ZTSvH0Id1nJpGtceMTpBMuaBFI4%2FiyaUDoiKKfCYZ5Y%2F5h%2FzFnmR5%2F0%2F3nlh62LsVkCZHcVy0rhcfYLi32C84wcxvZ%2F0VpW6HuHbvyWhlELaOZAr7KvfK3xfYEFXYPSqgjwW5JMJGtkt1pZC%2BKhWVn9651C6bMAahKOqJidj34e84Grx9t2EbLpfg7Vf0Ig5UH7SXfMjQH8%2BYQvhoSj4XUVEabR3ByuI8yQuEJ0B0d4xA%2FQquiVzU4ZGOP0W9%2BDydwnpoZUEfU8eYHRA%2FNh%2F71j6eBq1WQf3rFLtAA9nv1CZput5g1cCRKYtxlcy2MIiJYbw2nfL68efhdRA6G6pPGv6spIjSKLcr7RPpJMOi8ocEGOqUB%2BpUAvTvFO8z78n0XuGvKv%2BgIjn%2FL1rt%2B0evDDWdq%2FBqQ%2FDlfSZCqA0BST8AMrbPFQXuUPGBo3nueylMYfsHkdcy7Lk34Ma0lifPYhMKjZFDlwKHQ%2BK9GlcdfJP6uobljOmcQBtsaL1dL2uh1crBcRtGWFW2MCCZbgnISGq%2FMSD1EA09dpOQFF9TDHhejABtZ1wOiBAaLwGimEu6DOSNTBeL9lS2I&X-Amz-Signature=aef200b03c9a85d9aad788b63dd4f02378beb0958feb54ae46ad25565dbd7740&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

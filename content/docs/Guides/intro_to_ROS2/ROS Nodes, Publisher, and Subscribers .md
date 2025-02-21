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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHY5KNGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWfdsvu0uehzTSQ4muXPmOjgXluepheAE93iGXSF5RdAiEA%2FLt9HgSdos3QTDnZLpVASj3p9h6rxcG6KgRhBBTUGwQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLE0Yg3kCbd%2FfYr1ircA62aqKb38fpiv5Q5JSE5KYMqy3ze3uk%2FCH2DcEPzT9QwH0VZRnAr90HpmWViHo2f%2ByoqKeWmz3SMCm5PDXtxHgefkx8PmpVls5cQf9%2FCrX%2F9Tl9ptehgUuqNDiRS9Rkbhoc4duM%2Fg2x96iqahMOPfFvCNeuvU7WyaLmc6Wcw%2FE1aRwzJZSyYOOvW6qGRbrJJw%2BzUGnpn0NciCLnAQbK3HUl79K%2F87CrxeICdMOlX3Tiqj8vyBOXGMwAFF%2FR7S5Surm21Kqe26Z94xs5pMjdX1S5tIntycEFW8Kx4Pti%2BWacxneTVOBqLkFUndSKLG%2B2KdESJ6u9tA2Y2chgYwLjI%2BAC2Nv4Y9pzwPltddPgGRwkkkeEXx6BjZGAkIXBH2wEi0P3Sx8s0iyfX9CdrTWlxTKjC2hf8denImGrzE1Bf8%2FitOKAb%2Bx6qs%2Fl43cRShLQPUHzsA6oqWOUAPYAx4YS0Rz6pRhz%2Fe3vfaCmYTwLdD%2BVMn%2B%2BDCThUvceGwVcAype8IjPVG3OT2BbuKvro%2FW8eoLj0pSvANoRxw%2BB9MYvVXiRPN%2BVCrlcuJCFVlktxcKDPDZT3Acd7x414KOLEekpA10AspIUaBi6CcAaCE6R5i0nnXz8%2FlAXsJo%2BIQzZjMIK%2B4r0GOqUBZv4DATitm%2BZOn5VrSTyLdsIeSi7IOtCAxm1t8RjQPxTPrF87qEhL4Qqt2JdsaOhWuE%2BtUDoxI5ZEVR3zig4F76knfZT3Tl7dbHN21N%2B3A1%2BInxc5uEsW%2F8U0jG8OiUY%2BG%2BVznesavdVOaNxPlBZ0AuKadPsCyKsb6Fz2n8rJsoWqYIOjrcK0XhRYA4Hn%2FY%2BpSZI%2Fn3BL2B%2BDjlXSQsTVb7jMecGO&X-Amz-Signature=b7ef0cdbc46f634275d364b02f55cbc4b5e9f61faaeb978dd5595b36005e2a75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHY5KNGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWfdsvu0uehzTSQ4muXPmOjgXluepheAE93iGXSF5RdAiEA%2FLt9HgSdos3QTDnZLpVASj3p9h6rxcG6KgRhBBTUGwQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLE0Yg3kCbd%2FfYr1ircA62aqKb38fpiv5Q5JSE5KYMqy3ze3uk%2FCH2DcEPzT9QwH0VZRnAr90HpmWViHo2f%2ByoqKeWmz3SMCm5PDXtxHgefkx8PmpVls5cQf9%2FCrX%2F9Tl9ptehgUuqNDiRS9Rkbhoc4duM%2Fg2x96iqahMOPfFvCNeuvU7WyaLmc6Wcw%2FE1aRwzJZSyYOOvW6qGRbrJJw%2BzUGnpn0NciCLnAQbK3HUl79K%2F87CrxeICdMOlX3Tiqj8vyBOXGMwAFF%2FR7S5Surm21Kqe26Z94xs5pMjdX1S5tIntycEFW8Kx4Pti%2BWacxneTVOBqLkFUndSKLG%2B2KdESJ6u9tA2Y2chgYwLjI%2BAC2Nv4Y9pzwPltddPgGRwkkkeEXx6BjZGAkIXBH2wEi0P3Sx8s0iyfX9CdrTWlxTKjC2hf8denImGrzE1Bf8%2FitOKAb%2Bx6qs%2Fl43cRShLQPUHzsA6oqWOUAPYAx4YS0Rz6pRhz%2Fe3vfaCmYTwLdD%2BVMn%2B%2BDCThUvceGwVcAype8IjPVG3OT2BbuKvro%2FW8eoLj0pSvANoRxw%2BB9MYvVXiRPN%2BVCrlcuJCFVlktxcKDPDZT3Acd7x414KOLEekpA10AspIUaBi6CcAaCE6R5i0nnXz8%2FlAXsJo%2BIQzZjMIK%2B4r0GOqUBZv4DATitm%2BZOn5VrSTyLdsIeSi7IOtCAxm1t8RjQPxTPrF87qEhL4Qqt2JdsaOhWuE%2BtUDoxI5ZEVR3zig4F76knfZT3Tl7dbHN21N%2B3A1%2BInxc5uEsW%2F8U0jG8OiUY%2BG%2BVznesavdVOaNxPlBZ0AuKadPsCyKsb6Fz2n8rJsoWqYIOjrcK0XhRYA4Hn%2FY%2BpSZI%2Fn3BL2B%2BDjlXSQsTVb7jMecGO&X-Amz-Signature=c514b3952900f897ff5e2a6daa1893ec4d9acf417dd4a686e3ccd5b2ccca8117&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHY5KNGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWfdsvu0uehzTSQ4muXPmOjgXluepheAE93iGXSF5RdAiEA%2FLt9HgSdos3QTDnZLpVASj3p9h6rxcG6KgRhBBTUGwQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLE0Yg3kCbd%2FfYr1ircA62aqKb38fpiv5Q5JSE5KYMqy3ze3uk%2FCH2DcEPzT9QwH0VZRnAr90HpmWViHo2f%2ByoqKeWmz3SMCm5PDXtxHgefkx8PmpVls5cQf9%2FCrX%2F9Tl9ptehgUuqNDiRS9Rkbhoc4duM%2Fg2x96iqahMOPfFvCNeuvU7WyaLmc6Wcw%2FE1aRwzJZSyYOOvW6qGRbrJJw%2BzUGnpn0NciCLnAQbK3HUl79K%2F87CrxeICdMOlX3Tiqj8vyBOXGMwAFF%2FR7S5Surm21Kqe26Z94xs5pMjdX1S5tIntycEFW8Kx4Pti%2BWacxneTVOBqLkFUndSKLG%2B2KdESJ6u9tA2Y2chgYwLjI%2BAC2Nv4Y9pzwPltddPgGRwkkkeEXx6BjZGAkIXBH2wEi0P3Sx8s0iyfX9CdrTWlxTKjC2hf8denImGrzE1Bf8%2FitOKAb%2Bx6qs%2Fl43cRShLQPUHzsA6oqWOUAPYAx4YS0Rz6pRhz%2Fe3vfaCmYTwLdD%2BVMn%2B%2BDCThUvceGwVcAype8IjPVG3OT2BbuKvro%2FW8eoLj0pSvANoRxw%2BB9MYvVXiRPN%2BVCrlcuJCFVlktxcKDPDZT3Acd7x414KOLEekpA10AspIUaBi6CcAaCE6R5i0nnXz8%2FlAXsJo%2BIQzZjMIK%2B4r0GOqUBZv4DATitm%2BZOn5VrSTyLdsIeSi7IOtCAxm1t8RjQPxTPrF87qEhL4Qqt2JdsaOhWuE%2BtUDoxI5ZEVR3zig4F76knfZT3Tl7dbHN21N%2B3A1%2BInxc5uEsW%2F8U0jG8OiUY%2BG%2BVznesavdVOaNxPlBZ0AuKadPsCyKsb6Fz2n8rJsoWqYIOjrcK0XhRYA4Hn%2FY%2BpSZI%2Fn3BL2B%2BDjlXSQsTVb7jMecGO&X-Amz-Signature=c0fa5d78c4cfef7a6f91f0a7e95ac2a91e96cfa67dfcd331c3b566d8cb5c8504&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHY5KNGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWfdsvu0uehzTSQ4muXPmOjgXluepheAE93iGXSF5RdAiEA%2FLt9HgSdos3QTDnZLpVASj3p9h6rxcG6KgRhBBTUGwQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLE0Yg3kCbd%2FfYr1ircA62aqKb38fpiv5Q5JSE5KYMqy3ze3uk%2FCH2DcEPzT9QwH0VZRnAr90HpmWViHo2f%2ByoqKeWmz3SMCm5PDXtxHgefkx8PmpVls5cQf9%2FCrX%2F9Tl9ptehgUuqNDiRS9Rkbhoc4duM%2Fg2x96iqahMOPfFvCNeuvU7WyaLmc6Wcw%2FE1aRwzJZSyYOOvW6qGRbrJJw%2BzUGnpn0NciCLnAQbK3HUl79K%2F87CrxeICdMOlX3Tiqj8vyBOXGMwAFF%2FR7S5Surm21Kqe26Z94xs5pMjdX1S5tIntycEFW8Kx4Pti%2BWacxneTVOBqLkFUndSKLG%2B2KdESJ6u9tA2Y2chgYwLjI%2BAC2Nv4Y9pzwPltddPgGRwkkkeEXx6BjZGAkIXBH2wEi0P3Sx8s0iyfX9CdrTWlxTKjC2hf8denImGrzE1Bf8%2FitOKAb%2Bx6qs%2Fl43cRShLQPUHzsA6oqWOUAPYAx4YS0Rz6pRhz%2Fe3vfaCmYTwLdD%2BVMn%2B%2BDCThUvceGwVcAype8IjPVG3OT2BbuKvro%2FW8eoLj0pSvANoRxw%2BB9MYvVXiRPN%2BVCrlcuJCFVlktxcKDPDZT3Acd7x414KOLEekpA10AspIUaBi6CcAaCE6R5i0nnXz8%2FlAXsJo%2BIQzZjMIK%2B4r0GOqUBZv4DATitm%2BZOn5VrSTyLdsIeSi7IOtCAxm1t8RjQPxTPrF87qEhL4Qqt2JdsaOhWuE%2BtUDoxI5ZEVR3zig4F76knfZT3Tl7dbHN21N%2B3A1%2BInxc5uEsW%2F8U0jG8OiUY%2BG%2BVznesavdVOaNxPlBZ0AuKadPsCyKsb6Fz2n8rJsoWqYIOjrcK0XhRYA4Hn%2FY%2BpSZI%2Fn3BL2B%2BDjlXSQsTVb7jMecGO&X-Amz-Signature=672f8b9717eef3771957fcb2fc6eda597c738c970c3c14d493994e7d2ee3e5af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHY5KNGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWfdsvu0uehzTSQ4muXPmOjgXluepheAE93iGXSF5RdAiEA%2FLt9HgSdos3QTDnZLpVASj3p9h6rxcG6KgRhBBTUGwQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLE0Yg3kCbd%2FfYr1ircA62aqKb38fpiv5Q5JSE5KYMqy3ze3uk%2FCH2DcEPzT9QwH0VZRnAr90HpmWViHo2f%2ByoqKeWmz3SMCm5PDXtxHgefkx8PmpVls5cQf9%2FCrX%2F9Tl9ptehgUuqNDiRS9Rkbhoc4duM%2Fg2x96iqahMOPfFvCNeuvU7WyaLmc6Wcw%2FE1aRwzJZSyYOOvW6qGRbrJJw%2BzUGnpn0NciCLnAQbK3HUl79K%2F87CrxeICdMOlX3Tiqj8vyBOXGMwAFF%2FR7S5Surm21Kqe26Z94xs5pMjdX1S5tIntycEFW8Kx4Pti%2BWacxneTVOBqLkFUndSKLG%2B2KdESJ6u9tA2Y2chgYwLjI%2BAC2Nv4Y9pzwPltddPgGRwkkkeEXx6BjZGAkIXBH2wEi0P3Sx8s0iyfX9CdrTWlxTKjC2hf8denImGrzE1Bf8%2FitOKAb%2Bx6qs%2Fl43cRShLQPUHzsA6oqWOUAPYAx4YS0Rz6pRhz%2Fe3vfaCmYTwLdD%2BVMn%2B%2BDCThUvceGwVcAype8IjPVG3OT2BbuKvro%2FW8eoLj0pSvANoRxw%2BB9MYvVXiRPN%2BVCrlcuJCFVlktxcKDPDZT3Acd7x414KOLEekpA10AspIUaBi6CcAaCE6R5i0nnXz8%2FlAXsJo%2BIQzZjMIK%2B4r0GOqUBZv4DATitm%2BZOn5VrSTyLdsIeSi7IOtCAxm1t8RjQPxTPrF87qEhL4Qqt2JdsaOhWuE%2BtUDoxI5ZEVR3zig4F76knfZT3Tl7dbHN21N%2B3A1%2BInxc5uEsW%2F8U0jG8OiUY%2BG%2BVznesavdVOaNxPlBZ0AuKadPsCyKsb6Fz2n8rJsoWqYIOjrcK0XhRYA4Hn%2FY%2BpSZI%2Fn3BL2B%2BDjlXSQsTVb7jMecGO&X-Amz-Signature=d3630d829c4d97f69b1312ffbd38d91cdc9587c83c2f96d2cb3d51f795c3cf0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHY5KNGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWfdsvu0uehzTSQ4muXPmOjgXluepheAE93iGXSF5RdAiEA%2FLt9HgSdos3QTDnZLpVASj3p9h6rxcG6KgRhBBTUGwQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLE0Yg3kCbd%2FfYr1ircA62aqKb38fpiv5Q5JSE5KYMqy3ze3uk%2FCH2DcEPzT9QwH0VZRnAr90HpmWViHo2f%2ByoqKeWmz3SMCm5PDXtxHgefkx8PmpVls5cQf9%2FCrX%2F9Tl9ptehgUuqNDiRS9Rkbhoc4duM%2Fg2x96iqahMOPfFvCNeuvU7WyaLmc6Wcw%2FE1aRwzJZSyYOOvW6qGRbrJJw%2BzUGnpn0NciCLnAQbK3HUl79K%2F87CrxeICdMOlX3Tiqj8vyBOXGMwAFF%2FR7S5Surm21Kqe26Z94xs5pMjdX1S5tIntycEFW8Kx4Pti%2BWacxneTVOBqLkFUndSKLG%2B2KdESJ6u9tA2Y2chgYwLjI%2BAC2Nv4Y9pzwPltddPgGRwkkkeEXx6BjZGAkIXBH2wEi0P3Sx8s0iyfX9CdrTWlxTKjC2hf8denImGrzE1Bf8%2FitOKAb%2Bx6qs%2Fl43cRShLQPUHzsA6oqWOUAPYAx4YS0Rz6pRhz%2Fe3vfaCmYTwLdD%2BVMn%2B%2BDCThUvceGwVcAype8IjPVG3OT2BbuKvro%2FW8eoLj0pSvANoRxw%2BB9MYvVXiRPN%2BVCrlcuJCFVlktxcKDPDZT3Acd7x414KOLEekpA10AspIUaBi6CcAaCE6R5i0nnXz8%2FlAXsJo%2BIQzZjMIK%2B4r0GOqUBZv4DATitm%2BZOn5VrSTyLdsIeSi7IOtCAxm1t8RjQPxTPrF87qEhL4Qqt2JdsaOhWuE%2BtUDoxI5ZEVR3zig4F76knfZT3Tl7dbHN21N%2B3A1%2BInxc5uEsW%2F8U0jG8OiUY%2BG%2BVznesavdVOaNxPlBZ0AuKadPsCyKsb6Fz2n8rJsoWqYIOjrcK0XhRYA4Hn%2FY%2BpSZI%2Fn3BL2B%2BDjlXSQsTVb7jMecGO&X-Amz-Signature=b6faeaf2a2bc382b09cf8e15f9fad6656155c60a2b48187eaab58f6af1f44ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHY5KNGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWfdsvu0uehzTSQ4muXPmOjgXluepheAE93iGXSF5RdAiEA%2FLt9HgSdos3QTDnZLpVASj3p9h6rxcG6KgRhBBTUGwQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLE0Yg3kCbd%2FfYr1ircA62aqKb38fpiv5Q5JSE5KYMqy3ze3uk%2FCH2DcEPzT9QwH0VZRnAr90HpmWViHo2f%2ByoqKeWmz3SMCm5PDXtxHgefkx8PmpVls5cQf9%2FCrX%2F9Tl9ptehgUuqNDiRS9Rkbhoc4duM%2Fg2x96iqahMOPfFvCNeuvU7WyaLmc6Wcw%2FE1aRwzJZSyYOOvW6qGRbrJJw%2BzUGnpn0NciCLnAQbK3HUl79K%2F87CrxeICdMOlX3Tiqj8vyBOXGMwAFF%2FR7S5Surm21Kqe26Z94xs5pMjdX1S5tIntycEFW8Kx4Pti%2BWacxneTVOBqLkFUndSKLG%2B2KdESJ6u9tA2Y2chgYwLjI%2BAC2Nv4Y9pzwPltddPgGRwkkkeEXx6BjZGAkIXBH2wEi0P3Sx8s0iyfX9CdrTWlxTKjC2hf8denImGrzE1Bf8%2FitOKAb%2Bx6qs%2Fl43cRShLQPUHzsA6oqWOUAPYAx4YS0Rz6pRhz%2Fe3vfaCmYTwLdD%2BVMn%2B%2BDCThUvceGwVcAype8IjPVG3OT2BbuKvro%2FW8eoLj0pSvANoRxw%2BB9MYvVXiRPN%2BVCrlcuJCFVlktxcKDPDZT3Acd7x414KOLEekpA10AspIUaBi6CcAaCE6R5i0nnXz8%2FlAXsJo%2BIQzZjMIK%2B4r0GOqUBZv4DATitm%2BZOn5VrSTyLdsIeSi7IOtCAxm1t8RjQPxTPrF87qEhL4Qqt2JdsaOhWuE%2BtUDoxI5ZEVR3zig4F76knfZT3Tl7dbHN21N%2B3A1%2BInxc5uEsW%2F8U0jG8OiUY%2BG%2BVznesavdVOaNxPlBZ0AuKadPsCyKsb6Fz2n8rJsoWqYIOjrcK0XhRYA4Hn%2FY%2BpSZI%2Fn3BL2B%2BDjlXSQsTVb7jMecGO&X-Amz-Signature=997f39c72e45022dcefbc6bcf781abba7c4eef9bd8886baaa0f915f2e34e6e67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHY5KNGX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWfdsvu0uehzTSQ4muXPmOjgXluepheAE93iGXSF5RdAiEA%2FLt9HgSdos3QTDnZLpVASj3p9h6rxcG6KgRhBBTUGwQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLE0Yg3kCbd%2FfYr1ircA62aqKb38fpiv5Q5JSE5KYMqy3ze3uk%2FCH2DcEPzT9QwH0VZRnAr90HpmWViHo2f%2ByoqKeWmz3SMCm5PDXtxHgefkx8PmpVls5cQf9%2FCrX%2F9Tl9ptehgUuqNDiRS9Rkbhoc4duM%2Fg2x96iqahMOPfFvCNeuvU7WyaLmc6Wcw%2FE1aRwzJZSyYOOvW6qGRbrJJw%2BzUGnpn0NciCLnAQbK3HUl79K%2F87CrxeICdMOlX3Tiqj8vyBOXGMwAFF%2FR7S5Surm21Kqe26Z94xs5pMjdX1S5tIntycEFW8Kx4Pti%2BWacxneTVOBqLkFUndSKLG%2B2KdESJ6u9tA2Y2chgYwLjI%2BAC2Nv4Y9pzwPltddPgGRwkkkeEXx6BjZGAkIXBH2wEi0P3Sx8s0iyfX9CdrTWlxTKjC2hf8denImGrzE1Bf8%2FitOKAb%2Bx6qs%2Fl43cRShLQPUHzsA6oqWOUAPYAx4YS0Rz6pRhz%2Fe3vfaCmYTwLdD%2BVMn%2B%2BDCThUvceGwVcAype8IjPVG3OT2BbuKvro%2FW8eoLj0pSvANoRxw%2BB9MYvVXiRPN%2BVCrlcuJCFVlktxcKDPDZT3Acd7x414KOLEekpA10AspIUaBi6CcAaCE6R5i0nnXz8%2FlAXsJo%2BIQzZjMIK%2B4r0GOqUBZv4DATitm%2BZOn5VrSTyLdsIeSi7IOtCAxm1t8RjQPxTPrF87qEhL4Qqt2JdsaOhWuE%2BtUDoxI5ZEVR3zig4F76knfZT3Tl7dbHN21N%2B3A1%2BInxc5uEsW%2F8U0jG8OiUY%2BG%2BVznesavdVOaNxPlBZ0AuKadPsCyKsb6Fz2n8rJsoWqYIOjrcK0XhRYA4Hn%2FY%2BpSZI%2Fn3BL2B%2BDjlXSQsTVb7jMecGO&X-Amz-Signature=cc579711cbd0cd321604ba7ccbd5237b9b459a71e4186573504efcb37cdb4db8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W463CCKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDr2OHPu5IKJjDNJ1sX0R9CSWImU%2Fkvi%2BOqKYpjN9ezdAiEAq0rmxmJwgK7xzhii5gcZ6bEM%2FEpLwAEzHmPqiGAm6xEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAKarkrq6wqrj5LmaCrcA3VtNIGYZt2y6DRmtkkdYYVhdLksOpx0WQqF8xPJyTA7TbHH3a60LSC8nD1ZQ6rtsKnspDp%2FGOe%2FUBCWWO2Fe6BQW7189i5KJZZ0pxg3JcfJlRnsqyEBganMeUr%2B0KBKbSJDAbdTuMJpOXzFyPXm%2FQfdj8HVxXLbwT%2BTxNJR9ufJnOQQRCQmEPL1iQo%2BL8%2FNi7ZkS%2FuceU35EWM%2FU44F2y4IQN3409rsfwtpcyMbMdAQe2GsZ1rDJsR3vyEXx88aR%2B%2FELQRbMJNu943AmjvzID8NIRuBMjVkORtuVmRnMv%2Bgs7066wQsFjVpqCK0%2Bu0IRWdKaIauAOPhZgBCmIM%2Bvd19k9uPBjxlG%2BSMv54vH%2BU98Jn9eZzEwV%2BgU8igY5Jqzypvy4a0IsMc%2FRaWcnIu5qXIxiuObPpbQKGpWXn%2FidkA2kVXk0psYgf%2FUUuWFd76GmriBWb1ls%2F52r%2BlToYUycvZnOiHj8E2ZpbyxXqZCwAItDebtJlHFn0bUSHxsIFR%2FrWlrfcqw2oW0Bkdr7%2FFWrLFpEeuFE1EcMUjoHlfoOeG9cp1GpSMRBsb4Da18vzHkomp2C5xrNY%2BAgLnPARzG1BOkdyUWOxCzNAkjwZG5qRg4azDE6K8O2QYWLHrMPfu7MIGOqUBZ2rTKuFY050OH0YSUCoNOzs7aVwR%2B1A%2F3GQJEDEwhuJAmKUVTVjFjLI1eJorTB4rPs2lD37jawfHucF%2BDaawTtL5D67rPjpTVDYW1DUZ1VzqcPC7C9mvm4TD1EiaY%2Bi7Odkquz6%2BLPHs%2BMybzN4A%2BFr22AHtmBnPMe84OZSarRhCSWKw%2FQwjLpkTpIyKY3wzuN2fmBrNUIbdU21BVWRF2EHUm3wV&X-Amz-Signature=fe2d648974853874b0a189d875c6bcc8be1ec2dc214832279f96bb55ded433fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W463CCKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDr2OHPu5IKJjDNJ1sX0R9CSWImU%2Fkvi%2BOqKYpjN9ezdAiEAq0rmxmJwgK7xzhii5gcZ6bEM%2FEpLwAEzHmPqiGAm6xEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAKarkrq6wqrj5LmaCrcA3VtNIGYZt2y6DRmtkkdYYVhdLksOpx0WQqF8xPJyTA7TbHH3a60LSC8nD1ZQ6rtsKnspDp%2FGOe%2FUBCWWO2Fe6BQW7189i5KJZZ0pxg3JcfJlRnsqyEBganMeUr%2B0KBKbSJDAbdTuMJpOXzFyPXm%2FQfdj8HVxXLbwT%2BTxNJR9ufJnOQQRCQmEPL1iQo%2BL8%2FNi7ZkS%2FuceU35EWM%2FU44F2y4IQN3409rsfwtpcyMbMdAQe2GsZ1rDJsR3vyEXx88aR%2B%2FELQRbMJNu943AmjvzID8NIRuBMjVkORtuVmRnMv%2Bgs7066wQsFjVpqCK0%2Bu0IRWdKaIauAOPhZgBCmIM%2Bvd19k9uPBjxlG%2BSMv54vH%2BU98Jn9eZzEwV%2BgU8igY5Jqzypvy4a0IsMc%2FRaWcnIu5qXIxiuObPpbQKGpWXn%2FidkA2kVXk0psYgf%2FUUuWFd76GmriBWb1ls%2F52r%2BlToYUycvZnOiHj8E2ZpbyxXqZCwAItDebtJlHFn0bUSHxsIFR%2FrWlrfcqw2oW0Bkdr7%2FFWrLFpEeuFE1EcMUjoHlfoOeG9cp1GpSMRBsb4Da18vzHkomp2C5xrNY%2BAgLnPARzG1BOkdyUWOxCzNAkjwZG5qRg4azDE6K8O2QYWLHrMPfu7MIGOqUBZ2rTKuFY050OH0YSUCoNOzs7aVwR%2B1A%2F3GQJEDEwhuJAmKUVTVjFjLI1eJorTB4rPs2lD37jawfHucF%2BDaawTtL5D67rPjpTVDYW1DUZ1VzqcPC7C9mvm4TD1EiaY%2Bi7Odkquz6%2BLPHs%2BMybzN4A%2BFr22AHtmBnPMe84OZSarRhCSWKw%2FQwjLpkTpIyKY3wzuN2fmBrNUIbdU21BVWRF2EHUm3wV&X-Amz-Signature=3d35c9e5bb78ae4b33b2584a2c575fe62c108446cde6529becb83a7128d59423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W463CCKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDr2OHPu5IKJjDNJ1sX0R9CSWImU%2Fkvi%2BOqKYpjN9ezdAiEAq0rmxmJwgK7xzhii5gcZ6bEM%2FEpLwAEzHmPqiGAm6xEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAKarkrq6wqrj5LmaCrcA3VtNIGYZt2y6DRmtkkdYYVhdLksOpx0WQqF8xPJyTA7TbHH3a60LSC8nD1ZQ6rtsKnspDp%2FGOe%2FUBCWWO2Fe6BQW7189i5KJZZ0pxg3JcfJlRnsqyEBganMeUr%2B0KBKbSJDAbdTuMJpOXzFyPXm%2FQfdj8HVxXLbwT%2BTxNJR9ufJnOQQRCQmEPL1iQo%2BL8%2FNi7ZkS%2FuceU35EWM%2FU44F2y4IQN3409rsfwtpcyMbMdAQe2GsZ1rDJsR3vyEXx88aR%2B%2FELQRbMJNu943AmjvzID8NIRuBMjVkORtuVmRnMv%2Bgs7066wQsFjVpqCK0%2Bu0IRWdKaIauAOPhZgBCmIM%2Bvd19k9uPBjxlG%2BSMv54vH%2BU98Jn9eZzEwV%2BgU8igY5Jqzypvy4a0IsMc%2FRaWcnIu5qXIxiuObPpbQKGpWXn%2FidkA2kVXk0psYgf%2FUUuWFd76GmriBWb1ls%2F52r%2BlToYUycvZnOiHj8E2ZpbyxXqZCwAItDebtJlHFn0bUSHxsIFR%2FrWlrfcqw2oW0Bkdr7%2FFWrLFpEeuFE1EcMUjoHlfoOeG9cp1GpSMRBsb4Da18vzHkomp2C5xrNY%2BAgLnPARzG1BOkdyUWOxCzNAkjwZG5qRg4azDE6K8O2QYWLHrMPfu7MIGOqUBZ2rTKuFY050OH0YSUCoNOzs7aVwR%2B1A%2F3GQJEDEwhuJAmKUVTVjFjLI1eJorTB4rPs2lD37jawfHucF%2BDaawTtL5D67rPjpTVDYW1DUZ1VzqcPC7C9mvm4TD1EiaY%2Bi7Odkquz6%2BLPHs%2BMybzN4A%2BFr22AHtmBnPMe84OZSarRhCSWKw%2FQwjLpkTpIyKY3wzuN2fmBrNUIbdU21BVWRF2EHUm3wV&X-Amz-Signature=dc2ec466bde400df108b94a4dbced0b4b427775e88fec62c20f3ea2551de2a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W463CCKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDr2OHPu5IKJjDNJ1sX0R9CSWImU%2Fkvi%2BOqKYpjN9ezdAiEAq0rmxmJwgK7xzhii5gcZ6bEM%2FEpLwAEzHmPqiGAm6xEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAKarkrq6wqrj5LmaCrcA3VtNIGYZt2y6DRmtkkdYYVhdLksOpx0WQqF8xPJyTA7TbHH3a60LSC8nD1ZQ6rtsKnspDp%2FGOe%2FUBCWWO2Fe6BQW7189i5KJZZ0pxg3JcfJlRnsqyEBganMeUr%2B0KBKbSJDAbdTuMJpOXzFyPXm%2FQfdj8HVxXLbwT%2BTxNJR9ufJnOQQRCQmEPL1iQo%2BL8%2FNi7ZkS%2FuceU35EWM%2FU44F2y4IQN3409rsfwtpcyMbMdAQe2GsZ1rDJsR3vyEXx88aR%2B%2FELQRbMJNu943AmjvzID8NIRuBMjVkORtuVmRnMv%2Bgs7066wQsFjVpqCK0%2Bu0IRWdKaIauAOPhZgBCmIM%2Bvd19k9uPBjxlG%2BSMv54vH%2BU98Jn9eZzEwV%2BgU8igY5Jqzypvy4a0IsMc%2FRaWcnIu5qXIxiuObPpbQKGpWXn%2FidkA2kVXk0psYgf%2FUUuWFd76GmriBWb1ls%2F52r%2BlToYUycvZnOiHj8E2ZpbyxXqZCwAItDebtJlHFn0bUSHxsIFR%2FrWlrfcqw2oW0Bkdr7%2FFWrLFpEeuFE1EcMUjoHlfoOeG9cp1GpSMRBsb4Da18vzHkomp2C5xrNY%2BAgLnPARzG1BOkdyUWOxCzNAkjwZG5qRg4azDE6K8O2QYWLHrMPfu7MIGOqUBZ2rTKuFY050OH0YSUCoNOzs7aVwR%2B1A%2F3GQJEDEwhuJAmKUVTVjFjLI1eJorTB4rPs2lD37jawfHucF%2BDaawTtL5D67rPjpTVDYW1DUZ1VzqcPC7C9mvm4TD1EiaY%2Bi7Odkquz6%2BLPHs%2BMybzN4A%2BFr22AHtmBnPMe84OZSarRhCSWKw%2FQwjLpkTpIyKY3wzuN2fmBrNUIbdU21BVWRF2EHUm3wV&X-Amz-Signature=15b1ddf90afdd0baf27f41f1d299a3a20bd40e988081b51f0b9a6bf0f6c664c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W463CCKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDr2OHPu5IKJjDNJ1sX0R9CSWImU%2Fkvi%2BOqKYpjN9ezdAiEAq0rmxmJwgK7xzhii5gcZ6bEM%2FEpLwAEzHmPqiGAm6xEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAKarkrq6wqrj5LmaCrcA3VtNIGYZt2y6DRmtkkdYYVhdLksOpx0WQqF8xPJyTA7TbHH3a60LSC8nD1ZQ6rtsKnspDp%2FGOe%2FUBCWWO2Fe6BQW7189i5KJZZ0pxg3JcfJlRnsqyEBganMeUr%2B0KBKbSJDAbdTuMJpOXzFyPXm%2FQfdj8HVxXLbwT%2BTxNJR9ufJnOQQRCQmEPL1iQo%2BL8%2FNi7ZkS%2FuceU35EWM%2FU44F2y4IQN3409rsfwtpcyMbMdAQe2GsZ1rDJsR3vyEXx88aR%2B%2FELQRbMJNu943AmjvzID8NIRuBMjVkORtuVmRnMv%2Bgs7066wQsFjVpqCK0%2Bu0IRWdKaIauAOPhZgBCmIM%2Bvd19k9uPBjxlG%2BSMv54vH%2BU98Jn9eZzEwV%2BgU8igY5Jqzypvy4a0IsMc%2FRaWcnIu5qXIxiuObPpbQKGpWXn%2FidkA2kVXk0psYgf%2FUUuWFd76GmriBWb1ls%2F52r%2BlToYUycvZnOiHj8E2ZpbyxXqZCwAItDebtJlHFn0bUSHxsIFR%2FrWlrfcqw2oW0Bkdr7%2FFWrLFpEeuFE1EcMUjoHlfoOeG9cp1GpSMRBsb4Da18vzHkomp2C5xrNY%2BAgLnPARzG1BOkdyUWOxCzNAkjwZG5qRg4azDE6K8O2QYWLHrMPfu7MIGOqUBZ2rTKuFY050OH0YSUCoNOzs7aVwR%2B1A%2F3GQJEDEwhuJAmKUVTVjFjLI1eJorTB4rPs2lD37jawfHucF%2BDaawTtL5D67rPjpTVDYW1DUZ1VzqcPC7C9mvm4TD1EiaY%2Bi7Odkquz6%2BLPHs%2BMybzN4A%2BFr22AHtmBnPMe84OZSarRhCSWKw%2FQwjLpkTpIyKY3wzuN2fmBrNUIbdU21BVWRF2EHUm3wV&X-Amz-Signature=d2305d8ef181aa509a35cc611c1456a62d7b6204ef99a8f9148c7aae7c6d2969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W463CCKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDr2OHPu5IKJjDNJ1sX0R9CSWImU%2Fkvi%2BOqKYpjN9ezdAiEAq0rmxmJwgK7xzhii5gcZ6bEM%2FEpLwAEzHmPqiGAm6xEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAKarkrq6wqrj5LmaCrcA3VtNIGYZt2y6DRmtkkdYYVhdLksOpx0WQqF8xPJyTA7TbHH3a60LSC8nD1ZQ6rtsKnspDp%2FGOe%2FUBCWWO2Fe6BQW7189i5KJZZ0pxg3JcfJlRnsqyEBganMeUr%2B0KBKbSJDAbdTuMJpOXzFyPXm%2FQfdj8HVxXLbwT%2BTxNJR9ufJnOQQRCQmEPL1iQo%2BL8%2FNi7ZkS%2FuceU35EWM%2FU44F2y4IQN3409rsfwtpcyMbMdAQe2GsZ1rDJsR3vyEXx88aR%2B%2FELQRbMJNu943AmjvzID8NIRuBMjVkORtuVmRnMv%2Bgs7066wQsFjVpqCK0%2Bu0IRWdKaIauAOPhZgBCmIM%2Bvd19k9uPBjxlG%2BSMv54vH%2BU98Jn9eZzEwV%2BgU8igY5Jqzypvy4a0IsMc%2FRaWcnIu5qXIxiuObPpbQKGpWXn%2FidkA2kVXk0psYgf%2FUUuWFd76GmriBWb1ls%2F52r%2BlToYUycvZnOiHj8E2ZpbyxXqZCwAItDebtJlHFn0bUSHxsIFR%2FrWlrfcqw2oW0Bkdr7%2FFWrLFpEeuFE1EcMUjoHlfoOeG9cp1GpSMRBsb4Da18vzHkomp2C5xrNY%2BAgLnPARzG1BOkdyUWOxCzNAkjwZG5qRg4azDE6K8O2QYWLHrMPfu7MIGOqUBZ2rTKuFY050OH0YSUCoNOzs7aVwR%2B1A%2F3GQJEDEwhuJAmKUVTVjFjLI1eJorTB4rPs2lD37jawfHucF%2BDaawTtL5D67rPjpTVDYW1DUZ1VzqcPC7C9mvm4TD1EiaY%2Bi7Odkquz6%2BLPHs%2BMybzN4A%2BFr22AHtmBnPMe84OZSarRhCSWKw%2FQwjLpkTpIyKY3wzuN2fmBrNUIbdU21BVWRF2EHUm3wV&X-Amz-Signature=af4034993e083774d180ecafb150c7f0e867123cfef6f856be547e996dec0a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W463CCKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDr2OHPu5IKJjDNJ1sX0R9CSWImU%2Fkvi%2BOqKYpjN9ezdAiEAq0rmxmJwgK7xzhii5gcZ6bEM%2FEpLwAEzHmPqiGAm6xEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAKarkrq6wqrj5LmaCrcA3VtNIGYZt2y6DRmtkkdYYVhdLksOpx0WQqF8xPJyTA7TbHH3a60LSC8nD1ZQ6rtsKnspDp%2FGOe%2FUBCWWO2Fe6BQW7189i5KJZZ0pxg3JcfJlRnsqyEBganMeUr%2B0KBKbSJDAbdTuMJpOXzFyPXm%2FQfdj8HVxXLbwT%2BTxNJR9ufJnOQQRCQmEPL1iQo%2BL8%2FNi7ZkS%2FuceU35EWM%2FU44F2y4IQN3409rsfwtpcyMbMdAQe2GsZ1rDJsR3vyEXx88aR%2B%2FELQRbMJNu943AmjvzID8NIRuBMjVkORtuVmRnMv%2Bgs7066wQsFjVpqCK0%2Bu0IRWdKaIauAOPhZgBCmIM%2Bvd19k9uPBjxlG%2BSMv54vH%2BU98Jn9eZzEwV%2BgU8igY5Jqzypvy4a0IsMc%2FRaWcnIu5qXIxiuObPpbQKGpWXn%2FidkA2kVXk0psYgf%2FUUuWFd76GmriBWb1ls%2F52r%2BlToYUycvZnOiHj8E2ZpbyxXqZCwAItDebtJlHFn0bUSHxsIFR%2FrWlrfcqw2oW0Bkdr7%2FFWrLFpEeuFE1EcMUjoHlfoOeG9cp1GpSMRBsb4Da18vzHkomp2C5xrNY%2BAgLnPARzG1BOkdyUWOxCzNAkjwZG5qRg4azDE6K8O2QYWLHrMPfu7MIGOqUBZ2rTKuFY050OH0YSUCoNOzs7aVwR%2B1A%2F3GQJEDEwhuJAmKUVTVjFjLI1eJorTB4rPs2lD37jawfHucF%2BDaawTtL5D67rPjpTVDYW1DUZ1VzqcPC7C9mvm4TD1EiaY%2Bi7Odkquz6%2BLPHs%2BMybzN4A%2BFr22AHtmBnPMe84OZSarRhCSWKw%2FQwjLpkTpIyKY3wzuN2fmBrNUIbdU21BVWRF2EHUm3wV&X-Amz-Signature=6861391983b654b1467c5729effb8740f4e503867f8a8e0c8e6c4dd1129dfffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W463CCKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDr2OHPu5IKJjDNJ1sX0R9CSWImU%2Fkvi%2BOqKYpjN9ezdAiEAq0rmxmJwgK7xzhii5gcZ6bEM%2FEpLwAEzHmPqiGAm6xEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAKarkrq6wqrj5LmaCrcA3VtNIGYZt2y6DRmtkkdYYVhdLksOpx0WQqF8xPJyTA7TbHH3a60LSC8nD1ZQ6rtsKnspDp%2FGOe%2FUBCWWO2Fe6BQW7189i5KJZZ0pxg3JcfJlRnsqyEBganMeUr%2B0KBKbSJDAbdTuMJpOXzFyPXm%2FQfdj8HVxXLbwT%2BTxNJR9ufJnOQQRCQmEPL1iQo%2BL8%2FNi7ZkS%2FuceU35EWM%2FU44F2y4IQN3409rsfwtpcyMbMdAQe2GsZ1rDJsR3vyEXx88aR%2B%2FELQRbMJNu943AmjvzID8NIRuBMjVkORtuVmRnMv%2Bgs7066wQsFjVpqCK0%2Bu0IRWdKaIauAOPhZgBCmIM%2Bvd19k9uPBjxlG%2BSMv54vH%2BU98Jn9eZzEwV%2BgU8igY5Jqzypvy4a0IsMc%2FRaWcnIu5qXIxiuObPpbQKGpWXn%2FidkA2kVXk0psYgf%2FUUuWFd76GmriBWb1ls%2F52r%2BlToYUycvZnOiHj8E2ZpbyxXqZCwAItDebtJlHFn0bUSHxsIFR%2FrWlrfcqw2oW0Bkdr7%2FFWrLFpEeuFE1EcMUjoHlfoOeG9cp1GpSMRBsb4Da18vzHkomp2C5xrNY%2BAgLnPARzG1BOkdyUWOxCzNAkjwZG5qRg4azDE6K8O2QYWLHrMPfu7MIGOqUBZ2rTKuFY050OH0YSUCoNOzs7aVwR%2B1A%2F3GQJEDEwhuJAmKUVTVjFjLI1eJorTB4rPs2lD37jawfHucF%2BDaawTtL5D67rPjpTVDYW1DUZ1VzqcPC7C9mvm4TD1EiaY%2Bi7Odkquz6%2BLPHs%2BMybzN4A%2BFr22AHtmBnPMe84OZSarRhCSWKw%2FQwjLpkTpIyKY3wzuN2fmBrNUIbdU21BVWRF2EHUm3wV&X-Amz-Signature=77725887adbb70d9f48f1e4970de852098459535d73b90d3a305491145637d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

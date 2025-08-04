---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7CFOL3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHTHazdYuMsaOpbO60TX3ERxWVj4HEVjvDw01biXh0bPAiAUkGUyJdyXcvnyY8ZCOM8Jgx2mJp5wGB6yUxkHPIl8lir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWhwdwZFD3tGFuv1%2BKtwDbI%2BQw%2F9%2BTp834%2F0QEJH1t3M4ZGPOU%2F4vEHdYQWIbRdDGYCRwZJeMNw0PPSBf2tf3CJFplX43xRciWAp6mmUxNAm%2Bo0swgHQh557dh%2BQZSDSMl075T9St84iSdeF%2BwMb7jUVzGmEVNaDH58pN%2BfngVSjd2hPFuWuS%2BQ0ZiWbUj3iABoH%2BNgZqjzVXAfsgV62kRHJMRoBECRiGacABs6uQ90za%2BuFTZ8fpUdLP%2FH7MhxOdNxxkWaf8BmeKagqLbIXaE2jToQhQ%2FMr6pD7EweCKFlJCKLmksR%2BmlKruYDuZ3jcVcfFcLfMMZnJNq2pTY%2FA8pf%2BUO4PY7GoOqDH1uz%2BNvRtOuGvQgzwTLwlf0%2Be6bBgfDweNueiRySESvj0NVMiCJgeXmyTyXwcDb4oci59%2FW356CdqaKvhTz9%2FV%2BK4Vd5jmtdZFMQ6OtE7Q3CUJaqAzjBCCb2ajmkPWPVkQ1ZhmGIh6vQlPHeHFPpQBoKGEGcx08lEF%2BCXyrUyc5Qb2rdWka0vnAqjBZwS7VXCgpmob%2Fwh1Dr4tdayP6iZiqAdiep96N7GMTYSJRej0PqLgKIHlY%2F2cBVAP2FoalfWIkOLMn1URoa6Jxg%2FZj4vLGMSmzLII1Xa5iE2%2BNMz5yLEwioLCxAY6pgErXVUIDNQc8phLF91AFtpm4a3hCWApaRefXkkqGf5fEBJnSBgqU%2FLMZACj5n%2Ftmz7DnviFZYiSDWRh2aUu%2FHDLoNrBI%2FHZ4yfjhGnRPhmFNp3cKc6plhpVinlAOMo%2B7k18KKhZRNIMkZslT9h2PRWz2dWTR%2FLX1IJAMkDxgf19ISmyrvQedv6glIl714VxERQlpAWm50lSCBkLllAi9551tYJRrkLk&X-Amz-Signature=811f8149c0dfe45a1e268e8b235f1bb3c7e6a67e809e5e2d8ca4844f18a763db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7CFOL3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHTHazdYuMsaOpbO60TX3ERxWVj4HEVjvDw01biXh0bPAiAUkGUyJdyXcvnyY8ZCOM8Jgx2mJp5wGB6yUxkHPIl8lir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWhwdwZFD3tGFuv1%2BKtwDbI%2BQw%2F9%2BTp834%2F0QEJH1t3M4ZGPOU%2F4vEHdYQWIbRdDGYCRwZJeMNw0PPSBf2tf3CJFplX43xRciWAp6mmUxNAm%2Bo0swgHQh557dh%2BQZSDSMl075T9St84iSdeF%2BwMb7jUVzGmEVNaDH58pN%2BfngVSjd2hPFuWuS%2BQ0ZiWbUj3iABoH%2BNgZqjzVXAfsgV62kRHJMRoBECRiGacABs6uQ90za%2BuFTZ8fpUdLP%2FH7MhxOdNxxkWaf8BmeKagqLbIXaE2jToQhQ%2FMr6pD7EweCKFlJCKLmksR%2BmlKruYDuZ3jcVcfFcLfMMZnJNq2pTY%2FA8pf%2BUO4PY7GoOqDH1uz%2BNvRtOuGvQgzwTLwlf0%2Be6bBgfDweNueiRySESvj0NVMiCJgeXmyTyXwcDb4oci59%2FW356CdqaKvhTz9%2FV%2BK4Vd5jmtdZFMQ6OtE7Q3CUJaqAzjBCCb2ajmkPWPVkQ1ZhmGIh6vQlPHeHFPpQBoKGEGcx08lEF%2BCXyrUyc5Qb2rdWka0vnAqjBZwS7VXCgpmob%2Fwh1Dr4tdayP6iZiqAdiep96N7GMTYSJRej0PqLgKIHlY%2F2cBVAP2FoalfWIkOLMn1URoa6Jxg%2FZj4vLGMSmzLII1Xa5iE2%2BNMz5yLEwioLCxAY6pgErXVUIDNQc8phLF91AFtpm4a3hCWApaRefXkkqGf5fEBJnSBgqU%2FLMZACj5n%2Ftmz7DnviFZYiSDWRh2aUu%2FHDLoNrBI%2FHZ4yfjhGnRPhmFNp3cKc6plhpVinlAOMo%2B7k18KKhZRNIMkZslT9h2PRWz2dWTR%2FLX1IJAMkDxgf19ISmyrvQedv6glIl714VxERQlpAWm50lSCBkLllAi9551tYJRrkLk&X-Amz-Signature=ed32c3e6be2bbfc3fdf66e0aabe7b70287d6c5d618cc1ab599ea9231283a17d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7CFOL3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHTHazdYuMsaOpbO60TX3ERxWVj4HEVjvDw01biXh0bPAiAUkGUyJdyXcvnyY8ZCOM8Jgx2mJp5wGB6yUxkHPIl8lir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWhwdwZFD3tGFuv1%2BKtwDbI%2BQw%2F9%2BTp834%2F0QEJH1t3M4ZGPOU%2F4vEHdYQWIbRdDGYCRwZJeMNw0PPSBf2tf3CJFplX43xRciWAp6mmUxNAm%2Bo0swgHQh557dh%2BQZSDSMl075T9St84iSdeF%2BwMb7jUVzGmEVNaDH58pN%2BfngVSjd2hPFuWuS%2BQ0ZiWbUj3iABoH%2BNgZqjzVXAfsgV62kRHJMRoBECRiGacABs6uQ90za%2BuFTZ8fpUdLP%2FH7MhxOdNxxkWaf8BmeKagqLbIXaE2jToQhQ%2FMr6pD7EweCKFlJCKLmksR%2BmlKruYDuZ3jcVcfFcLfMMZnJNq2pTY%2FA8pf%2BUO4PY7GoOqDH1uz%2BNvRtOuGvQgzwTLwlf0%2Be6bBgfDweNueiRySESvj0NVMiCJgeXmyTyXwcDb4oci59%2FW356CdqaKvhTz9%2FV%2BK4Vd5jmtdZFMQ6OtE7Q3CUJaqAzjBCCb2ajmkPWPVkQ1ZhmGIh6vQlPHeHFPpQBoKGEGcx08lEF%2BCXyrUyc5Qb2rdWka0vnAqjBZwS7VXCgpmob%2Fwh1Dr4tdayP6iZiqAdiep96N7GMTYSJRej0PqLgKIHlY%2F2cBVAP2FoalfWIkOLMn1URoa6Jxg%2FZj4vLGMSmzLII1Xa5iE2%2BNMz5yLEwioLCxAY6pgErXVUIDNQc8phLF91AFtpm4a3hCWApaRefXkkqGf5fEBJnSBgqU%2FLMZACj5n%2Ftmz7DnviFZYiSDWRh2aUu%2FHDLoNrBI%2FHZ4yfjhGnRPhmFNp3cKc6plhpVinlAOMo%2B7k18KKhZRNIMkZslT9h2PRWz2dWTR%2FLX1IJAMkDxgf19ISmyrvQedv6glIl714VxERQlpAWm50lSCBkLllAi9551tYJRrkLk&X-Amz-Signature=7c3f276b36fa13fc4074b15cbf87a25dbb65a3db832368ba51e3440c9775c157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7CFOL3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHTHazdYuMsaOpbO60TX3ERxWVj4HEVjvDw01biXh0bPAiAUkGUyJdyXcvnyY8ZCOM8Jgx2mJp5wGB6yUxkHPIl8lir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWhwdwZFD3tGFuv1%2BKtwDbI%2BQw%2F9%2BTp834%2F0QEJH1t3M4ZGPOU%2F4vEHdYQWIbRdDGYCRwZJeMNw0PPSBf2tf3CJFplX43xRciWAp6mmUxNAm%2Bo0swgHQh557dh%2BQZSDSMl075T9St84iSdeF%2BwMb7jUVzGmEVNaDH58pN%2BfngVSjd2hPFuWuS%2BQ0ZiWbUj3iABoH%2BNgZqjzVXAfsgV62kRHJMRoBECRiGacABs6uQ90za%2BuFTZ8fpUdLP%2FH7MhxOdNxxkWaf8BmeKagqLbIXaE2jToQhQ%2FMr6pD7EweCKFlJCKLmksR%2BmlKruYDuZ3jcVcfFcLfMMZnJNq2pTY%2FA8pf%2BUO4PY7GoOqDH1uz%2BNvRtOuGvQgzwTLwlf0%2Be6bBgfDweNueiRySESvj0NVMiCJgeXmyTyXwcDb4oci59%2FW356CdqaKvhTz9%2FV%2BK4Vd5jmtdZFMQ6OtE7Q3CUJaqAzjBCCb2ajmkPWPVkQ1ZhmGIh6vQlPHeHFPpQBoKGEGcx08lEF%2BCXyrUyc5Qb2rdWka0vnAqjBZwS7VXCgpmob%2Fwh1Dr4tdayP6iZiqAdiep96N7GMTYSJRej0PqLgKIHlY%2F2cBVAP2FoalfWIkOLMn1URoa6Jxg%2FZj4vLGMSmzLII1Xa5iE2%2BNMz5yLEwioLCxAY6pgErXVUIDNQc8phLF91AFtpm4a3hCWApaRefXkkqGf5fEBJnSBgqU%2FLMZACj5n%2Ftmz7DnviFZYiSDWRh2aUu%2FHDLoNrBI%2FHZ4yfjhGnRPhmFNp3cKc6plhpVinlAOMo%2B7k18KKhZRNIMkZslT9h2PRWz2dWTR%2FLX1IJAMkDxgf19ISmyrvQedv6glIl714VxERQlpAWm50lSCBkLllAi9551tYJRrkLk&X-Amz-Signature=5f9c2c761e7be7ab0f3d6a70dcbe314decc12d5411f071135503caa5bddb2647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7CFOL3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHTHazdYuMsaOpbO60TX3ERxWVj4HEVjvDw01biXh0bPAiAUkGUyJdyXcvnyY8ZCOM8Jgx2mJp5wGB6yUxkHPIl8lir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWhwdwZFD3tGFuv1%2BKtwDbI%2BQw%2F9%2BTp834%2F0QEJH1t3M4ZGPOU%2F4vEHdYQWIbRdDGYCRwZJeMNw0PPSBf2tf3CJFplX43xRciWAp6mmUxNAm%2Bo0swgHQh557dh%2BQZSDSMl075T9St84iSdeF%2BwMb7jUVzGmEVNaDH58pN%2BfngVSjd2hPFuWuS%2BQ0ZiWbUj3iABoH%2BNgZqjzVXAfsgV62kRHJMRoBECRiGacABs6uQ90za%2BuFTZ8fpUdLP%2FH7MhxOdNxxkWaf8BmeKagqLbIXaE2jToQhQ%2FMr6pD7EweCKFlJCKLmksR%2BmlKruYDuZ3jcVcfFcLfMMZnJNq2pTY%2FA8pf%2BUO4PY7GoOqDH1uz%2BNvRtOuGvQgzwTLwlf0%2Be6bBgfDweNueiRySESvj0NVMiCJgeXmyTyXwcDb4oci59%2FW356CdqaKvhTz9%2FV%2BK4Vd5jmtdZFMQ6OtE7Q3CUJaqAzjBCCb2ajmkPWPVkQ1ZhmGIh6vQlPHeHFPpQBoKGEGcx08lEF%2BCXyrUyc5Qb2rdWka0vnAqjBZwS7VXCgpmob%2Fwh1Dr4tdayP6iZiqAdiep96N7GMTYSJRej0PqLgKIHlY%2F2cBVAP2FoalfWIkOLMn1URoa6Jxg%2FZj4vLGMSmzLII1Xa5iE2%2BNMz5yLEwioLCxAY6pgErXVUIDNQc8phLF91AFtpm4a3hCWApaRefXkkqGf5fEBJnSBgqU%2FLMZACj5n%2Ftmz7DnviFZYiSDWRh2aUu%2FHDLoNrBI%2FHZ4yfjhGnRPhmFNp3cKc6plhpVinlAOMo%2B7k18KKhZRNIMkZslT9h2PRWz2dWTR%2FLX1IJAMkDxgf19ISmyrvQedv6glIl714VxERQlpAWm50lSCBkLllAi9551tYJRrkLk&X-Amz-Signature=e5e26f91dda9edac99deee8fd52a67389f590a1b3a15d260cf69c538374d34f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7CFOL3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHTHazdYuMsaOpbO60TX3ERxWVj4HEVjvDw01biXh0bPAiAUkGUyJdyXcvnyY8ZCOM8Jgx2mJp5wGB6yUxkHPIl8lir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWhwdwZFD3tGFuv1%2BKtwDbI%2BQw%2F9%2BTp834%2F0QEJH1t3M4ZGPOU%2F4vEHdYQWIbRdDGYCRwZJeMNw0PPSBf2tf3CJFplX43xRciWAp6mmUxNAm%2Bo0swgHQh557dh%2BQZSDSMl075T9St84iSdeF%2BwMb7jUVzGmEVNaDH58pN%2BfngVSjd2hPFuWuS%2BQ0ZiWbUj3iABoH%2BNgZqjzVXAfsgV62kRHJMRoBECRiGacABs6uQ90za%2BuFTZ8fpUdLP%2FH7MhxOdNxxkWaf8BmeKagqLbIXaE2jToQhQ%2FMr6pD7EweCKFlJCKLmksR%2BmlKruYDuZ3jcVcfFcLfMMZnJNq2pTY%2FA8pf%2BUO4PY7GoOqDH1uz%2BNvRtOuGvQgzwTLwlf0%2Be6bBgfDweNueiRySESvj0NVMiCJgeXmyTyXwcDb4oci59%2FW356CdqaKvhTz9%2FV%2BK4Vd5jmtdZFMQ6OtE7Q3CUJaqAzjBCCb2ajmkPWPVkQ1ZhmGIh6vQlPHeHFPpQBoKGEGcx08lEF%2BCXyrUyc5Qb2rdWka0vnAqjBZwS7VXCgpmob%2Fwh1Dr4tdayP6iZiqAdiep96N7GMTYSJRej0PqLgKIHlY%2F2cBVAP2FoalfWIkOLMn1URoa6Jxg%2FZj4vLGMSmzLII1Xa5iE2%2BNMz5yLEwioLCxAY6pgErXVUIDNQc8phLF91AFtpm4a3hCWApaRefXkkqGf5fEBJnSBgqU%2FLMZACj5n%2Ftmz7DnviFZYiSDWRh2aUu%2FHDLoNrBI%2FHZ4yfjhGnRPhmFNp3cKc6plhpVinlAOMo%2B7k18KKhZRNIMkZslT9h2PRWz2dWTR%2FLX1IJAMkDxgf19ISmyrvQedv6glIl714VxERQlpAWm50lSCBkLllAi9551tYJRrkLk&X-Amz-Signature=a2a7290c5ef509dfc06113d6fde017910618f7a8912709b4737c9626e79ee4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7CFOL3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHTHazdYuMsaOpbO60TX3ERxWVj4HEVjvDw01biXh0bPAiAUkGUyJdyXcvnyY8ZCOM8Jgx2mJp5wGB6yUxkHPIl8lir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWhwdwZFD3tGFuv1%2BKtwDbI%2BQw%2F9%2BTp834%2F0QEJH1t3M4ZGPOU%2F4vEHdYQWIbRdDGYCRwZJeMNw0PPSBf2tf3CJFplX43xRciWAp6mmUxNAm%2Bo0swgHQh557dh%2BQZSDSMl075T9St84iSdeF%2BwMb7jUVzGmEVNaDH58pN%2BfngVSjd2hPFuWuS%2BQ0ZiWbUj3iABoH%2BNgZqjzVXAfsgV62kRHJMRoBECRiGacABs6uQ90za%2BuFTZ8fpUdLP%2FH7MhxOdNxxkWaf8BmeKagqLbIXaE2jToQhQ%2FMr6pD7EweCKFlJCKLmksR%2BmlKruYDuZ3jcVcfFcLfMMZnJNq2pTY%2FA8pf%2BUO4PY7GoOqDH1uz%2BNvRtOuGvQgzwTLwlf0%2Be6bBgfDweNueiRySESvj0NVMiCJgeXmyTyXwcDb4oci59%2FW356CdqaKvhTz9%2FV%2BK4Vd5jmtdZFMQ6OtE7Q3CUJaqAzjBCCb2ajmkPWPVkQ1ZhmGIh6vQlPHeHFPpQBoKGEGcx08lEF%2BCXyrUyc5Qb2rdWka0vnAqjBZwS7VXCgpmob%2Fwh1Dr4tdayP6iZiqAdiep96N7GMTYSJRej0PqLgKIHlY%2F2cBVAP2FoalfWIkOLMn1URoa6Jxg%2FZj4vLGMSmzLII1Xa5iE2%2BNMz5yLEwioLCxAY6pgErXVUIDNQc8phLF91AFtpm4a3hCWApaRefXkkqGf5fEBJnSBgqU%2FLMZACj5n%2Ftmz7DnviFZYiSDWRh2aUu%2FHDLoNrBI%2FHZ4yfjhGnRPhmFNp3cKc6plhpVinlAOMo%2B7k18KKhZRNIMkZslT9h2PRWz2dWTR%2FLX1IJAMkDxgf19ISmyrvQedv6glIl714VxERQlpAWm50lSCBkLllAi9551tYJRrkLk&X-Amz-Signature=75190d8d696cf86dabc9ce9e3ac2e6821569602c84d02eacd7bf43ae66c494ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7CFOL3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHTHazdYuMsaOpbO60TX3ERxWVj4HEVjvDw01biXh0bPAiAUkGUyJdyXcvnyY8ZCOM8Jgx2mJp5wGB6yUxkHPIl8lir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWhwdwZFD3tGFuv1%2BKtwDbI%2BQw%2F9%2BTp834%2F0QEJH1t3M4ZGPOU%2F4vEHdYQWIbRdDGYCRwZJeMNw0PPSBf2tf3CJFplX43xRciWAp6mmUxNAm%2Bo0swgHQh557dh%2BQZSDSMl075T9St84iSdeF%2BwMb7jUVzGmEVNaDH58pN%2BfngVSjd2hPFuWuS%2BQ0ZiWbUj3iABoH%2BNgZqjzVXAfsgV62kRHJMRoBECRiGacABs6uQ90za%2BuFTZ8fpUdLP%2FH7MhxOdNxxkWaf8BmeKagqLbIXaE2jToQhQ%2FMr6pD7EweCKFlJCKLmksR%2BmlKruYDuZ3jcVcfFcLfMMZnJNq2pTY%2FA8pf%2BUO4PY7GoOqDH1uz%2BNvRtOuGvQgzwTLwlf0%2Be6bBgfDweNueiRySESvj0NVMiCJgeXmyTyXwcDb4oci59%2FW356CdqaKvhTz9%2FV%2BK4Vd5jmtdZFMQ6OtE7Q3CUJaqAzjBCCb2ajmkPWPVkQ1ZhmGIh6vQlPHeHFPpQBoKGEGcx08lEF%2BCXyrUyc5Qb2rdWka0vnAqjBZwS7VXCgpmob%2Fwh1Dr4tdayP6iZiqAdiep96N7GMTYSJRej0PqLgKIHlY%2F2cBVAP2FoalfWIkOLMn1URoa6Jxg%2FZj4vLGMSmzLII1Xa5iE2%2BNMz5yLEwioLCxAY6pgErXVUIDNQc8phLF91AFtpm4a3hCWApaRefXkkqGf5fEBJnSBgqU%2FLMZACj5n%2Ftmz7DnviFZYiSDWRh2aUu%2FHDLoNrBI%2FHZ4yfjhGnRPhmFNp3cKc6plhpVinlAOMo%2B7k18KKhZRNIMkZslT9h2PRWz2dWTR%2FLX1IJAMkDxgf19ISmyrvQedv6glIl714VxERQlpAWm50lSCBkLllAi9551tYJRrkLk&X-Amz-Signature=6b29c1f7628bf5d40f68fefad7668a5e9091eeef033729bcd6b09b5b89981c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

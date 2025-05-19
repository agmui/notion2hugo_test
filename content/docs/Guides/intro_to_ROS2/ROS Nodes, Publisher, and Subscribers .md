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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO7STDY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTig5XRIdhJQSuOPtOgi3XbJ0fxTCGmoi6RZVq3SrSoQIhANzrQ8txqFfgF5%2B5Q%2FIjm7JSAQKxZMsqaq7E6A0RuFBlKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyav%2BI1SRoSq%2BaBHrEq3ANwMpwwBlErrEehXm7fg4Ltv%2FPIJUp4e2wnfhehO7ohmaVxmrgqpPNIVrwf6207H6RYggxPRLOxM9D1aNmpBsis%2BV0oE7%2BAr6%2BQYMGWjftZVX1lp0%2BbwdPqU%2BWbll4euA9gKQqll7AmPgfKeaW2bPnGnCX%2FRaJmHVSwu4U0XV3UY4r%2FBgKEgYVcXLqbgUqHBZCoqTzWSwiM5Wx0UIcKoPCMyyz3Jc19EVYjycHnCCcJ6%2FMRa8osj5q7EOFWrqt84KLBJiBzjyLspy59ucTflQqAtvo9QDuyKzI6uYr1Hfw%2FyV1rdhK%2FZOUBo%2BDaAv6iuNRSpYODUclpS6G8Q%2BEpTe2anQhExJgchEUDLfsWEJ%2F8Wyx0zTzzZfefb%2Ficb04gi7EbEPPrEvDPGnPy1r4XLGJoi8eL9fG6mCtImkxwjVydhZ0sNuTsm3TW209tl1Eo%2BKoHF7lLFdg1CDO6njIVSeoPJiHM9aEi1oXqpy1mz6sD9vcKoglEPn%2FhxKvnVvq0K7UZEXw9QQ9ikQ432IJGGoRCZs5JGF0Naa%2B%2BTup6029h70awjIdskG1i7hCW%2FJ%2B9cFu%2Bsl9c2mTYPwormEkxu9gXefCq3mI0XZRM%2F3zSBTS8NHQzayoGK8QpZoXzJzDY%2Bq3BBjqkAaoMTdJRlxZWdMkRjfuM%2Fi%2F%2FnpT%2BDoD8tbw9bYRK%2FSBpG%2FbCMpAAI6yJgd6KJdaaYhQS8u%2FBgiE6%2BdT%2BqYeKLO9BwmRVgAmxIja9MWz0m6RdOz8QF2o78Qb35aP1tA2oyMmft0t0GpJt4lHFTM8UD2cxkbIRecowu%2F6ydTAr2KEN0fwwtRHQBrJLPf%2BV5WBz1QaykxICiPiERU2lMZ9LPUHOZD4t&X-Amz-Signature=d60878288a89b7c0cb82b629c0680e35140540a5d4228810e14ccd3e68d875ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO7STDY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTig5XRIdhJQSuOPtOgi3XbJ0fxTCGmoi6RZVq3SrSoQIhANzrQ8txqFfgF5%2B5Q%2FIjm7JSAQKxZMsqaq7E6A0RuFBlKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyav%2BI1SRoSq%2BaBHrEq3ANwMpwwBlErrEehXm7fg4Ltv%2FPIJUp4e2wnfhehO7ohmaVxmrgqpPNIVrwf6207H6RYggxPRLOxM9D1aNmpBsis%2BV0oE7%2BAr6%2BQYMGWjftZVX1lp0%2BbwdPqU%2BWbll4euA9gKQqll7AmPgfKeaW2bPnGnCX%2FRaJmHVSwu4U0XV3UY4r%2FBgKEgYVcXLqbgUqHBZCoqTzWSwiM5Wx0UIcKoPCMyyz3Jc19EVYjycHnCCcJ6%2FMRa8osj5q7EOFWrqt84KLBJiBzjyLspy59ucTflQqAtvo9QDuyKzI6uYr1Hfw%2FyV1rdhK%2FZOUBo%2BDaAv6iuNRSpYODUclpS6G8Q%2BEpTe2anQhExJgchEUDLfsWEJ%2F8Wyx0zTzzZfefb%2Ficb04gi7EbEPPrEvDPGnPy1r4XLGJoi8eL9fG6mCtImkxwjVydhZ0sNuTsm3TW209tl1Eo%2BKoHF7lLFdg1CDO6njIVSeoPJiHM9aEi1oXqpy1mz6sD9vcKoglEPn%2FhxKvnVvq0K7UZEXw9QQ9ikQ432IJGGoRCZs5JGF0Naa%2B%2BTup6029h70awjIdskG1i7hCW%2FJ%2B9cFu%2Bsl9c2mTYPwormEkxu9gXefCq3mI0XZRM%2F3zSBTS8NHQzayoGK8QpZoXzJzDY%2Bq3BBjqkAaoMTdJRlxZWdMkRjfuM%2Fi%2F%2FnpT%2BDoD8tbw9bYRK%2FSBpG%2FbCMpAAI6yJgd6KJdaaYhQS8u%2FBgiE6%2BdT%2BqYeKLO9BwmRVgAmxIja9MWz0m6RdOz8QF2o78Qb35aP1tA2oyMmft0t0GpJt4lHFTM8UD2cxkbIRecowu%2F6ydTAr2KEN0fwwtRHQBrJLPf%2BV5WBz1QaykxICiPiERU2lMZ9LPUHOZD4t&X-Amz-Signature=b029f0a5a8705921f39d232cacef2c39fd8c7747046b4765d812d899eaa1e6de&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO7STDY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTig5XRIdhJQSuOPtOgi3XbJ0fxTCGmoi6RZVq3SrSoQIhANzrQ8txqFfgF5%2B5Q%2FIjm7JSAQKxZMsqaq7E6A0RuFBlKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyav%2BI1SRoSq%2BaBHrEq3ANwMpwwBlErrEehXm7fg4Ltv%2FPIJUp4e2wnfhehO7ohmaVxmrgqpPNIVrwf6207H6RYggxPRLOxM9D1aNmpBsis%2BV0oE7%2BAr6%2BQYMGWjftZVX1lp0%2BbwdPqU%2BWbll4euA9gKQqll7AmPgfKeaW2bPnGnCX%2FRaJmHVSwu4U0XV3UY4r%2FBgKEgYVcXLqbgUqHBZCoqTzWSwiM5Wx0UIcKoPCMyyz3Jc19EVYjycHnCCcJ6%2FMRa8osj5q7EOFWrqt84KLBJiBzjyLspy59ucTflQqAtvo9QDuyKzI6uYr1Hfw%2FyV1rdhK%2FZOUBo%2BDaAv6iuNRSpYODUclpS6G8Q%2BEpTe2anQhExJgchEUDLfsWEJ%2F8Wyx0zTzzZfefb%2Ficb04gi7EbEPPrEvDPGnPy1r4XLGJoi8eL9fG6mCtImkxwjVydhZ0sNuTsm3TW209tl1Eo%2BKoHF7lLFdg1CDO6njIVSeoPJiHM9aEi1oXqpy1mz6sD9vcKoglEPn%2FhxKvnVvq0K7UZEXw9QQ9ikQ432IJGGoRCZs5JGF0Naa%2B%2BTup6029h70awjIdskG1i7hCW%2FJ%2B9cFu%2Bsl9c2mTYPwormEkxu9gXefCq3mI0XZRM%2F3zSBTS8NHQzayoGK8QpZoXzJzDY%2Bq3BBjqkAaoMTdJRlxZWdMkRjfuM%2Fi%2F%2FnpT%2BDoD8tbw9bYRK%2FSBpG%2FbCMpAAI6yJgd6KJdaaYhQS8u%2FBgiE6%2BdT%2BqYeKLO9BwmRVgAmxIja9MWz0m6RdOz8QF2o78Qb35aP1tA2oyMmft0t0GpJt4lHFTM8UD2cxkbIRecowu%2F6ydTAr2KEN0fwwtRHQBrJLPf%2BV5WBz1QaykxICiPiERU2lMZ9LPUHOZD4t&X-Amz-Signature=7a0c020dc975dad16844fb5315892c5c9879667175b3223b1b8ec65da1248187&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO7STDY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTig5XRIdhJQSuOPtOgi3XbJ0fxTCGmoi6RZVq3SrSoQIhANzrQ8txqFfgF5%2B5Q%2FIjm7JSAQKxZMsqaq7E6A0RuFBlKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyav%2BI1SRoSq%2BaBHrEq3ANwMpwwBlErrEehXm7fg4Ltv%2FPIJUp4e2wnfhehO7ohmaVxmrgqpPNIVrwf6207H6RYggxPRLOxM9D1aNmpBsis%2BV0oE7%2BAr6%2BQYMGWjftZVX1lp0%2BbwdPqU%2BWbll4euA9gKQqll7AmPgfKeaW2bPnGnCX%2FRaJmHVSwu4U0XV3UY4r%2FBgKEgYVcXLqbgUqHBZCoqTzWSwiM5Wx0UIcKoPCMyyz3Jc19EVYjycHnCCcJ6%2FMRa8osj5q7EOFWrqt84KLBJiBzjyLspy59ucTflQqAtvo9QDuyKzI6uYr1Hfw%2FyV1rdhK%2FZOUBo%2BDaAv6iuNRSpYODUclpS6G8Q%2BEpTe2anQhExJgchEUDLfsWEJ%2F8Wyx0zTzzZfefb%2Ficb04gi7EbEPPrEvDPGnPy1r4XLGJoi8eL9fG6mCtImkxwjVydhZ0sNuTsm3TW209tl1Eo%2BKoHF7lLFdg1CDO6njIVSeoPJiHM9aEi1oXqpy1mz6sD9vcKoglEPn%2FhxKvnVvq0K7UZEXw9QQ9ikQ432IJGGoRCZs5JGF0Naa%2B%2BTup6029h70awjIdskG1i7hCW%2FJ%2B9cFu%2Bsl9c2mTYPwormEkxu9gXefCq3mI0XZRM%2F3zSBTS8NHQzayoGK8QpZoXzJzDY%2Bq3BBjqkAaoMTdJRlxZWdMkRjfuM%2Fi%2F%2FnpT%2BDoD8tbw9bYRK%2FSBpG%2FbCMpAAI6yJgd6KJdaaYhQS8u%2FBgiE6%2BdT%2BqYeKLO9BwmRVgAmxIja9MWz0m6RdOz8QF2o78Qb35aP1tA2oyMmft0t0GpJt4lHFTM8UD2cxkbIRecowu%2F6ydTAr2KEN0fwwtRHQBrJLPf%2BV5WBz1QaykxICiPiERU2lMZ9LPUHOZD4t&X-Amz-Signature=4947b6b79ca9294f5245fda1bff40ceb35727a9d051bea15a78cd8ca94dfd0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO7STDY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTig5XRIdhJQSuOPtOgi3XbJ0fxTCGmoi6RZVq3SrSoQIhANzrQ8txqFfgF5%2B5Q%2FIjm7JSAQKxZMsqaq7E6A0RuFBlKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyav%2BI1SRoSq%2BaBHrEq3ANwMpwwBlErrEehXm7fg4Ltv%2FPIJUp4e2wnfhehO7ohmaVxmrgqpPNIVrwf6207H6RYggxPRLOxM9D1aNmpBsis%2BV0oE7%2BAr6%2BQYMGWjftZVX1lp0%2BbwdPqU%2BWbll4euA9gKQqll7AmPgfKeaW2bPnGnCX%2FRaJmHVSwu4U0XV3UY4r%2FBgKEgYVcXLqbgUqHBZCoqTzWSwiM5Wx0UIcKoPCMyyz3Jc19EVYjycHnCCcJ6%2FMRa8osj5q7EOFWrqt84KLBJiBzjyLspy59ucTflQqAtvo9QDuyKzI6uYr1Hfw%2FyV1rdhK%2FZOUBo%2BDaAv6iuNRSpYODUclpS6G8Q%2BEpTe2anQhExJgchEUDLfsWEJ%2F8Wyx0zTzzZfefb%2Ficb04gi7EbEPPrEvDPGnPy1r4XLGJoi8eL9fG6mCtImkxwjVydhZ0sNuTsm3TW209tl1Eo%2BKoHF7lLFdg1CDO6njIVSeoPJiHM9aEi1oXqpy1mz6sD9vcKoglEPn%2FhxKvnVvq0K7UZEXw9QQ9ikQ432IJGGoRCZs5JGF0Naa%2B%2BTup6029h70awjIdskG1i7hCW%2FJ%2B9cFu%2Bsl9c2mTYPwormEkxu9gXefCq3mI0XZRM%2F3zSBTS8NHQzayoGK8QpZoXzJzDY%2Bq3BBjqkAaoMTdJRlxZWdMkRjfuM%2Fi%2F%2FnpT%2BDoD8tbw9bYRK%2FSBpG%2FbCMpAAI6yJgd6KJdaaYhQS8u%2FBgiE6%2BdT%2BqYeKLO9BwmRVgAmxIja9MWz0m6RdOz8QF2o78Qb35aP1tA2oyMmft0t0GpJt4lHFTM8UD2cxkbIRecowu%2F6ydTAr2KEN0fwwtRHQBrJLPf%2BV5WBz1QaykxICiPiERU2lMZ9LPUHOZD4t&X-Amz-Signature=56f7e2cfe566219cd4fe288f050c89f9c9d7da8378d9051c1cee52ce35b16191&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO7STDY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTig5XRIdhJQSuOPtOgi3XbJ0fxTCGmoi6RZVq3SrSoQIhANzrQ8txqFfgF5%2B5Q%2FIjm7JSAQKxZMsqaq7E6A0RuFBlKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyav%2BI1SRoSq%2BaBHrEq3ANwMpwwBlErrEehXm7fg4Ltv%2FPIJUp4e2wnfhehO7ohmaVxmrgqpPNIVrwf6207H6RYggxPRLOxM9D1aNmpBsis%2BV0oE7%2BAr6%2BQYMGWjftZVX1lp0%2BbwdPqU%2BWbll4euA9gKQqll7AmPgfKeaW2bPnGnCX%2FRaJmHVSwu4U0XV3UY4r%2FBgKEgYVcXLqbgUqHBZCoqTzWSwiM5Wx0UIcKoPCMyyz3Jc19EVYjycHnCCcJ6%2FMRa8osj5q7EOFWrqt84KLBJiBzjyLspy59ucTflQqAtvo9QDuyKzI6uYr1Hfw%2FyV1rdhK%2FZOUBo%2BDaAv6iuNRSpYODUclpS6G8Q%2BEpTe2anQhExJgchEUDLfsWEJ%2F8Wyx0zTzzZfefb%2Ficb04gi7EbEPPrEvDPGnPy1r4XLGJoi8eL9fG6mCtImkxwjVydhZ0sNuTsm3TW209tl1Eo%2BKoHF7lLFdg1CDO6njIVSeoPJiHM9aEi1oXqpy1mz6sD9vcKoglEPn%2FhxKvnVvq0K7UZEXw9QQ9ikQ432IJGGoRCZs5JGF0Naa%2B%2BTup6029h70awjIdskG1i7hCW%2FJ%2B9cFu%2Bsl9c2mTYPwormEkxu9gXefCq3mI0XZRM%2F3zSBTS8NHQzayoGK8QpZoXzJzDY%2Bq3BBjqkAaoMTdJRlxZWdMkRjfuM%2Fi%2F%2FnpT%2BDoD8tbw9bYRK%2FSBpG%2FbCMpAAI6yJgd6KJdaaYhQS8u%2FBgiE6%2BdT%2BqYeKLO9BwmRVgAmxIja9MWz0m6RdOz8QF2o78Qb35aP1tA2oyMmft0t0GpJt4lHFTM8UD2cxkbIRecowu%2F6ydTAr2KEN0fwwtRHQBrJLPf%2BV5WBz1QaykxICiPiERU2lMZ9LPUHOZD4t&X-Amz-Signature=d679d7bce70341274b96858b4c458f0e3eb7ffd172ec98beed52a84d44fbcfad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO7STDY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTig5XRIdhJQSuOPtOgi3XbJ0fxTCGmoi6RZVq3SrSoQIhANzrQ8txqFfgF5%2B5Q%2FIjm7JSAQKxZMsqaq7E6A0RuFBlKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyav%2BI1SRoSq%2BaBHrEq3ANwMpwwBlErrEehXm7fg4Ltv%2FPIJUp4e2wnfhehO7ohmaVxmrgqpPNIVrwf6207H6RYggxPRLOxM9D1aNmpBsis%2BV0oE7%2BAr6%2BQYMGWjftZVX1lp0%2BbwdPqU%2BWbll4euA9gKQqll7AmPgfKeaW2bPnGnCX%2FRaJmHVSwu4U0XV3UY4r%2FBgKEgYVcXLqbgUqHBZCoqTzWSwiM5Wx0UIcKoPCMyyz3Jc19EVYjycHnCCcJ6%2FMRa8osj5q7EOFWrqt84KLBJiBzjyLspy59ucTflQqAtvo9QDuyKzI6uYr1Hfw%2FyV1rdhK%2FZOUBo%2BDaAv6iuNRSpYODUclpS6G8Q%2BEpTe2anQhExJgchEUDLfsWEJ%2F8Wyx0zTzzZfefb%2Ficb04gi7EbEPPrEvDPGnPy1r4XLGJoi8eL9fG6mCtImkxwjVydhZ0sNuTsm3TW209tl1Eo%2BKoHF7lLFdg1CDO6njIVSeoPJiHM9aEi1oXqpy1mz6sD9vcKoglEPn%2FhxKvnVvq0K7UZEXw9QQ9ikQ432IJGGoRCZs5JGF0Naa%2B%2BTup6029h70awjIdskG1i7hCW%2FJ%2B9cFu%2Bsl9c2mTYPwormEkxu9gXefCq3mI0XZRM%2F3zSBTS8NHQzayoGK8QpZoXzJzDY%2Bq3BBjqkAaoMTdJRlxZWdMkRjfuM%2Fi%2F%2FnpT%2BDoD8tbw9bYRK%2FSBpG%2FbCMpAAI6yJgd6KJdaaYhQS8u%2FBgiE6%2BdT%2BqYeKLO9BwmRVgAmxIja9MWz0m6RdOz8QF2o78Qb35aP1tA2oyMmft0t0GpJt4lHFTM8UD2cxkbIRecowu%2F6ydTAr2KEN0fwwtRHQBrJLPf%2BV5WBz1QaykxICiPiERU2lMZ9LPUHOZD4t&X-Amz-Signature=01860f8e020307c74ce867f887489ab7bc78496426180ec47f992fdb31724512&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO7STDY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTig5XRIdhJQSuOPtOgi3XbJ0fxTCGmoi6RZVq3SrSoQIhANzrQ8txqFfgF5%2B5Q%2FIjm7JSAQKxZMsqaq7E6A0RuFBlKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyav%2BI1SRoSq%2BaBHrEq3ANwMpwwBlErrEehXm7fg4Ltv%2FPIJUp4e2wnfhehO7ohmaVxmrgqpPNIVrwf6207H6RYggxPRLOxM9D1aNmpBsis%2BV0oE7%2BAr6%2BQYMGWjftZVX1lp0%2BbwdPqU%2BWbll4euA9gKQqll7AmPgfKeaW2bPnGnCX%2FRaJmHVSwu4U0XV3UY4r%2FBgKEgYVcXLqbgUqHBZCoqTzWSwiM5Wx0UIcKoPCMyyz3Jc19EVYjycHnCCcJ6%2FMRa8osj5q7EOFWrqt84KLBJiBzjyLspy59ucTflQqAtvo9QDuyKzI6uYr1Hfw%2FyV1rdhK%2FZOUBo%2BDaAv6iuNRSpYODUclpS6G8Q%2BEpTe2anQhExJgchEUDLfsWEJ%2F8Wyx0zTzzZfefb%2Ficb04gi7EbEPPrEvDPGnPy1r4XLGJoi8eL9fG6mCtImkxwjVydhZ0sNuTsm3TW209tl1Eo%2BKoHF7lLFdg1CDO6njIVSeoPJiHM9aEi1oXqpy1mz6sD9vcKoglEPn%2FhxKvnVvq0K7UZEXw9QQ9ikQ432IJGGoRCZs5JGF0Naa%2B%2BTup6029h70awjIdskG1i7hCW%2FJ%2B9cFu%2Bsl9c2mTYPwormEkxu9gXefCq3mI0XZRM%2F3zSBTS8NHQzayoGK8QpZoXzJzDY%2Bq3BBjqkAaoMTdJRlxZWdMkRjfuM%2Fi%2F%2FnpT%2BDoD8tbw9bYRK%2FSBpG%2FbCMpAAI6yJgd6KJdaaYhQS8u%2FBgiE6%2BdT%2BqYeKLO9BwmRVgAmxIja9MWz0m6RdOz8QF2o78Qb35aP1tA2oyMmft0t0GpJt4lHFTM8UD2cxkbIRecowu%2F6ydTAr2KEN0fwwtRHQBrJLPf%2BV5WBz1QaykxICiPiERU2lMZ9LPUHOZD4t&X-Amz-Signature=3bed085b935d2af2e4a86c591b64b39de3051b03863fa726a9bf0289f9b688a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

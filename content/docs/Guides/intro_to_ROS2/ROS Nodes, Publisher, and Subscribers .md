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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJCHN65%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGppB0Nn%2ByUVgnlSi6fpWiZR4gNZsfz4ojHLC9Z0UYZLAiA9iIxJDSzatx2BdR%2Bw9J8mYn%2BiAfgjq3SD2XUUt%2B7eBSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMq%2FU8gGdIQvoCR69BKtwDbAgN%2BkH%2BOLnBv%2BQS76%2FrLrJ%2B9euJfDjsDh%2BCia9IDmxMZqMb8H%2BHCFTn%2B%2FVQFYDhFoaAcStjbgkmuKo8IUdAAk2TV9a7KOzLmS8OGl0E7YE0%2FFP9zpoJS8D6sbFscQHJlpdiDfC1HwA1YGOcMuO2YonJFuH3To5ySY1ZKnmrCfxdFxFo9NDDCvF1lZeL7N9%2Bfv%2FSMCV3f4u25ZSY445EWuMOWSs4XP1Z6PE%2FPC85hEXdqu1i8WrirHzvzMibklVU9oP6cUBaiIV88mQAlOC45l9KVQcIBUfvoQWYPBwwxOZ1TgMQ03KgwpvIhZDZruEO9SAkhhw16Yvmw3riiApJMS9xXdMligglHG6puQbIMX3s9Q5iaaSMdsmArmptn9O3%2BN%2FZC6Fv%2BCw%2BKI7n08WpH2%2BCVN3RximlV39OCeFjtS33ivgdIHKnaEI922irKxFYsm4CqkRNX7v8v9UE1l6P28XJicojLY7Mnq62WdkDmB2v%2B571rf186vimT2DMcuPm%2FWvC5%2Fb%2Bwv%2BOr8R0K29XF%2FM46p%2FC%2B7qYSQ6rImbgpugOrKCQVZ3PlDSqwnsSDIKOWmgXcBaUQQtCLVVpiJFAngPqOKmCDZqhiYnK%2BPbFYNCOuIjQudZkv%2ByKIlow3fqPwgY6pgGXU0TwGtOQmw4jEL7v1so8rjCmP9Hg7sLy1iPxJZ1GsvzxaqINFHx8%2BovmOY%2F11FnhcMqDNbSh4B%2FdAZYCmot5gl2ir%2FHQp%2BrkUhyb%2BGFelvREsS8yA%2Bhh44Ucean%2B7Hyaq8JQSYVhPFi332qflgVS%2BuP0uaemXuXSBmPIyAMRl9ctpBr0Hs1RpzqjEcdDu33YHpN3bHImSgc74FB7FCkOlx6zn9B9&X-Amz-Signature=3deb3fbd20bc3f7b9718de9347120714ebf9066fbb5049f5db67052dc0b266c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJCHN65%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGppB0Nn%2ByUVgnlSi6fpWiZR4gNZsfz4ojHLC9Z0UYZLAiA9iIxJDSzatx2BdR%2Bw9J8mYn%2BiAfgjq3SD2XUUt%2B7eBSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMq%2FU8gGdIQvoCR69BKtwDbAgN%2BkH%2BOLnBv%2BQS76%2FrLrJ%2B9euJfDjsDh%2BCia9IDmxMZqMb8H%2BHCFTn%2B%2FVQFYDhFoaAcStjbgkmuKo8IUdAAk2TV9a7KOzLmS8OGl0E7YE0%2FFP9zpoJS8D6sbFscQHJlpdiDfC1HwA1YGOcMuO2YonJFuH3To5ySY1ZKnmrCfxdFxFo9NDDCvF1lZeL7N9%2Bfv%2FSMCV3f4u25ZSY445EWuMOWSs4XP1Z6PE%2FPC85hEXdqu1i8WrirHzvzMibklVU9oP6cUBaiIV88mQAlOC45l9KVQcIBUfvoQWYPBwwxOZ1TgMQ03KgwpvIhZDZruEO9SAkhhw16Yvmw3riiApJMS9xXdMligglHG6puQbIMX3s9Q5iaaSMdsmArmptn9O3%2BN%2FZC6Fv%2BCw%2BKI7n08WpH2%2BCVN3RximlV39OCeFjtS33ivgdIHKnaEI922irKxFYsm4CqkRNX7v8v9UE1l6P28XJicojLY7Mnq62WdkDmB2v%2B571rf186vimT2DMcuPm%2FWvC5%2Fb%2Bwv%2BOr8R0K29XF%2FM46p%2FC%2B7qYSQ6rImbgpugOrKCQVZ3PlDSqwnsSDIKOWmgXcBaUQQtCLVVpiJFAngPqOKmCDZqhiYnK%2BPbFYNCOuIjQudZkv%2ByKIlow3fqPwgY6pgGXU0TwGtOQmw4jEL7v1so8rjCmP9Hg7sLy1iPxJZ1GsvzxaqINFHx8%2BovmOY%2F11FnhcMqDNbSh4B%2FdAZYCmot5gl2ir%2FHQp%2BrkUhyb%2BGFelvREsS8yA%2Bhh44Ucean%2B7Hyaq8JQSYVhPFi332qflgVS%2BuP0uaemXuXSBmPIyAMRl9ctpBr0Hs1RpzqjEcdDu33YHpN3bHImSgc74FB7FCkOlx6zn9B9&X-Amz-Signature=3ecb48a63403ea817e06655a70d25cfd0701f0080d55a7b4c248afef8d921178&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJCHN65%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGppB0Nn%2ByUVgnlSi6fpWiZR4gNZsfz4ojHLC9Z0UYZLAiA9iIxJDSzatx2BdR%2Bw9J8mYn%2BiAfgjq3SD2XUUt%2B7eBSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMq%2FU8gGdIQvoCR69BKtwDbAgN%2BkH%2BOLnBv%2BQS76%2FrLrJ%2B9euJfDjsDh%2BCia9IDmxMZqMb8H%2BHCFTn%2B%2FVQFYDhFoaAcStjbgkmuKo8IUdAAk2TV9a7KOzLmS8OGl0E7YE0%2FFP9zpoJS8D6sbFscQHJlpdiDfC1HwA1YGOcMuO2YonJFuH3To5ySY1ZKnmrCfxdFxFo9NDDCvF1lZeL7N9%2Bfv%2FSMCV3f4u25ZSY445EWuMOWSs4XP1Z6PE%2FPC85hEXdqu1i8WrirHzvzMibklVU9oP6cUBaiIV88mQAlOC45l9KVQcIBUfvoQWYPBwwxOZ1TgMQ03KgwpvIhZDZruEO9SAkhhw16Yvmw3riiApJMS9xXdMligglHG6puQbIMX3s9Q5iaaSMdsmArmptn9O3%2BN%2FZC6Fv%2BCw%2BKI7n08WpH2%2BCVN3RximlV39OCeFjtS33ivgdIHKnaEI922irKxFYsm4CqkRNX7v8v9UE1l6P28XJicojLY7Mnq62WdkDmB2v%2B571rf186vimT2DMcuPm%2FWvC5%2Fb%2Bwv%2BOr8R0K29XF%2FM46p%2FC%2B7qYSQ6rImbgpugOrKCQVZ3PlDSqwnsSDIKOWmgXcBaUQQtCLVVpiJFAngPqOKmCDZqhiYnK%2BPbFYNCOuIjQudZkv%2ByKIlow3fqPwgY6pgGXU0TwGtOQmw4jEL7v1so8rjCmP9Hg7sLy1iPxJZ1GsvzxaqINFHx8%2BovmOY%2F11FnhcMqDNbSh4B%2FdAZYCmot5gl2ir%2FHQp%2BrkUhyb%2BGFelvREsS8yA%2Bhh44Ucean%2B7Hyaq8JQSYVhPFi332qflgVS%2BuP0uaemXuXSBmPIyAMRl9ctpBr0Hs1RpzqjEcdDu33YHpN3bHImSgc74FB7FCkOlx6zn9B9&X-Amz-Signature=3fbc4f896f1b902549afcbaedb6617a7ed976b63c02df2b81e523c61852542d3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJCHN65%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGppB0Nn%2ByUVgnlSi6fpWiZR4gNZsfz4ojHLC9Z0UYZLAiA9iIxJDSzatx2BdR%2Bw9J8mYn%2BiAfgjq3SD2XUUt%2B7eBSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMq%2FU8gGdIQvoCR69BKtwDbAgN%2BkH%2BOLnBv%2BQS76%2FrLrJ%2B9euJfDjsDh%2BCia9IDmxMZqMb8H%2BHCFTn%2B%2FVQFYDhFoaAcStjbgkmuKo8IUdAAk2TV9a7KOzLmS8OGl0E7YE0%2FFP9zpoJS8D6sbFscQHJlpdiDfC1HwA1YGOcMuO2YonJFuH3To5ySY1ZKnmrCfxdFxFo9NDDCvF1lZeL7N9%2Bfv%2FSMCV3f4u25ZSY445EWuMOWSs4XP1Z6PE%2FPC85hEXdqu1i8WrirHzvzMibklVU9oP6cUBaiIV88mQAlOC45l9KVQcIBUfvoQWYPBwwxOZ1TgMQ03KgwpvIhZDZruEO9SAkhhw16Yvmw3riiApJMS9xXdMligglHG6puQbIMX3s9Q5iaaSMdsmArmptn9O3%2BN%2FZC6Fv%2BCw%2BKI7n08WpH2%2BCVN3RximlV39OCeFjtS33ivgdIHKnaEI922irKxFYsm4CqkRNX7v8v9UE1l6P28XJicojLY7Mnq62WdkDmB2v%2B571rf186vimT2DMcuPm%2FWvC5%2Fb%2Bwv%2BOr8R0K29XF%2FM46p%2FC%2B7qYSQ6rImbgpugOrKCQVZ3PlDSqwnsSDIKOWmgXcBaUQQtCLVVpiJFAngPqOKmCDZqhiYnK%2BPbFYNCOuIjQudZkv%2ByKIlow3fqPwgY6pgGXU0TwGtOQmw4jEL7v1so8rjCmP9Hg7sLy1iPxJZ1GsvzxaqINFHx8%2BovmOY%2F11FnhcMqDNbSh4B%2FdAZYCmot5gl2ir%2FHQp%2BrkUhyb%2BGFelvREsS8yA%2Bhh44Ucean%2B7Hyaq8JQSYVhPFi332qflgVS%2BuP0uaemXuXSBmPIyAMRl9ctpBr0Hs1RpzqjEcdDu33YHpN3bHImSgc74FB7FCkOlx6zn9B9&X-Amz-Signature=b588c099ed60388c2e897ef5767fd81d334b882b966c7e303e399ad520832248&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJCHN65%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGppB0Nn%2ByUVgnlSi6fpWiZR4gNZsfz4ojHLC9Z0UYZLAiA9iIxJDSzatx2BdR%2Bw9J8mYn%2BiAfgjq3SD2XUUt%2B7eBSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMq%2FU8gGdIQvoCR69BKtwDbAgN%2BkH%2BOLnBv%2BQS76%2FrLrJ%2B9euJfDjsDh%2BCia9IDmxMZqMb8H%2BHCFTn%2B%2FVQFYDhFoaAcStjbgkmuKo8IUdAAk2TV9a7KOzLmS8OGl0E7YE0%2FFP9zpoJS8D6sbFscQHJlpdiDfC1HwA1YGOcMuO2YonJFuH3To5ySY1ZKnmrCfxdFxFo9NDDCvF1lZeL7N9%2Bfv%2FSMCV3f4u25ZSY445EWuMOWSs4XP1Z6PE%2FPC85hEXdqu1i8WrirHzvzMibklVU9oP6cUBaiIV88mQAlOC45l9KVQcIBUfvoQWYPBwwxOZ1TgMQ03KgwpvIhZDZruEO9SAkhhw16Yvmw3riiApJMS9xXdMligglHG6puQbIMX3s9Q5iaaSMdsmArmptn9O3%2BN%2FZC6Fv%2BCw%2BKI7n08WpH2%2BCVN3RximlV39OCeFjtS33ivgdIHKnaEI922irKxFYsm4CqkRNX7v8v9UE1l6P28XJicojLY7Mnq62WdkDmB2v%2B571rf186vimT2DMcuPm%2FWvC5%2Fb%2Bwv%2BOr8R0K29XF%2FM46p%2FC%2B7qYSQ6rImbgpugOrKCQVZ3PlDSqwnsSDIKOWmgXcBaUQQtCLVVpiJFAngPqOKmCDZqhiYnK%2BPbFYNCOuIjQudZkv%2ByKIlow3fqPwgY6pgGXU0TwGtOQmw4jEL7v1so8rjCmP9Hg7sLy1iPxJZ1GsvzxaqINFHx8%2BovmOY%2F11FnhcMqDNbSh4B%2FdAZYCmot5gl2ir%2FHQp%2BrkUhyb%2BGFelvREsS8yA%2Bhh44Ucean%2B7Hyaq8JQSYVhPFi332qflgVS%2BuP0uaemXuXSBmPIyAMRl9ctpBr0Hs1RpzqjEcdDu33YHpN3bHImSgc74FB7FCkOlx6zn9B9&X-Amz-Signature=7e1e4a4f1ef0ae8f878a21903ae71fcf9c7b44dcb4c449b0a36c74cb2bf6f85d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJCHN65%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGppB0Nn%2ByUVgnlSi6fpWiZR4gNZsfz4ojHLC9Z0UYZLAiA9iIxJDSzatx2BdR%2Bw9J8mYn%2BiAfgjq3SD2XUUt%2B7eBSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMq%2FU8gGdIQvoCR69BKtwDbAgN%2BkH%2BOLnBv%2BQS76%2FrLrJ%2B9euJfDjsDh%2BCia9IDmxMZqMb8H%2BHCFTn%2B%2FVQFYDhFoaAcStjbgkmuKo8IUdAAk2TV9a7KOzLmS8OGl0E7YE0%2FFP9zpoJS8D6sbFscQHJlpdiDfC1HwA1YGOcMuO2YonJFuH3To5ySY1ZKnmrCfxdFxFo9NDDCvF1lZeL7N9%2Bfv%2FSMCV3f4u25ZSY445EWuMOWSs4XP1Z6PE%2FPC85hEXdqu1i8WrirHzvzMibklVU9oP6cUBaiIV88mQAlOC45l9KVQcIBUfvoQWYPBwwxOZ1TgMQ03KgwpvIhZDZruEO9SAkhhw16Yvmw3riiApJMS9xXdMligglHG6puQbIMX3s9Q5iaaSMdsmArmptn9O3%2BN%2FZC6Fv%2BCw%2BKI7n08WpH2%2BCVN3RximlV39OCeFjtS33ivgdIHKnaEI922irKxFYsm4CqkRNX7v8v9UE1l6P28XJicojLY7Mnq62WdkDmB2v%2B571rf186vimT2DMcuPm%2FWvC5%2Fb%2Bwv%2BOr8R0K29XF%2FM46p%2FC%2B7qYSQ6rImbgpugOrKCQVZ3PlDSqwnsSDIKOWmgXcBaUQQtCLVVpiJFAngPqOKmCDZqhiYnK%2BPbFYNCOuIjQudZkv%2ByKIlow3fqPwgY6pgGXU0TwGtOQmw4jEL7v1so8rjCmP9Hg7sLy1iPxJZ1GsvzxaqINFHx8%2BovmOY%2F11FnhcMqDNbSh4B%2FdAZYCmot5gl2ir%2FHQp%2BrkUhyb%2BGFelvREsS8yA%2Bhh44Ucean%2B7Hyaq8JQSYVhPFi332qflgVS%2BuP0uaemXuXSBmPIyAMRl9ctpBr0Hs1RpzqjEcdDu33YHpN3bHImSgc74FB7FCkOlx6zn9B9&X-Amz-Signature=c873f98f15da215dfd4be7df9ea3ebac307833af83a84dc19ff73354e318dc54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJCHN65%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGppB0Nn%2ByUVgnlSi6fpWiZR4gNZsfz4ojHLC9Z0UYZLAiA9iIxJDSzatx2BdR%2Bw9J8mYn%2BiAfgjq3SD2XUUt%2B7eBSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMq%2FU8gGdIQvoCR69BKtwDbAgN%2BkH%2BOLnBv%2BQS76%2FrLrJ%2B9euJfDjsDh%2BCia9IDmxMZqMb8H%2BHCFTn%2B%2FVQFYDhFoaAcStjbgkmuKo8IUdAAk2TV9a7KOzLmS8OGl0E7YE0%2FFP9zpoJS8D6sbFscQHJlpdiDfC1HwA1YGOcMuO2YonJFuH3To5ySY1ZKnmrCfxdFxFo9NDDCvF1lZeL7N9%2Bfv%2FSMCV3f4u25ZSY445EWuMOWSs4XP1Z6PE%2FPC85hEXdqu1i8WrirHzvzMibklVU9oP6cUBaiIV88mQAlOC45l9KVQcIBUfvoQWYPBwwxOZ1TgMQ03KgwpvIhZDZruEO9SAkhhw16Yvmw3riiApJMS9xXdMligglHG6puQbIMX3s9Q5iaaSMdsmArmptn9O3%2BN%2FZC6Fv%2BCw%2BKI7n08WpH2%2BCVN3RximlV39OCeFjtS33ivgdIHKnaEI922irKxFYsm4CqkRNX7v8v9UE1l6P28XJicojLY7Mnq62WdkDmB2v%2B571rf186vimT2DMcuPm%2FWvC5%2Fb%2Bwv%2BOr8R0K29XF%2FM46p%2FC%2B7qYSQ6rImbgpugOrKCQVZ3PlDSqwnsSDIKOWmgXcBaUQQtCLVVpiJFAngPqOKmCDZqhiYnK%2BPbFYNCOuIjQudZkv%2ByKIlow3fqPwgY6pgGXU0TwGtOQmw4jEL7v1so8rjCmP9Hg7sLy1iPxJZ1GsvzxaqINFHx8%2BovmOY%2F11FnhcMqDNbSh4B%2FdAZYCmot5gl2ir%2FHQp%2BrkUhyb%2BGFelvREsS8yA%2Bhh44Ucean%2B7Hyaq8JQSYVhPFi332qflgVS%2BuP0uaemXuXSBmPIyAMRl9ctpBr0Hs1RpzqjEcdDu33YHpN3bHImSgc74FB7FCkOlx6zn9B9&X-Amz-Signature=cb3fb4d625241a7c69f3d1586488b71b694f2d50f2ef23a94845e631970046d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJCHN65%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGppB0Nn%2ByUVgnlSi6fpWiZR4gNZsfz4ojHLC9Z0UYZLAiA9iIxJDSzatx2BdR%2Bw9J8mYn%2BiAfgjq3SD2XUUt%2B7eBSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMq%2FU8gGdIQvoCR69BKtwDbAgN%2BkH%2BOLnBv%2BQS76%2FrLrJ%2B9euJfDjsDh%2BCia9IDmxMZqMb8H%2BHCFTn%2B%2FVQFYDhFoaAcStjbgkmuKo8IUdAAk2TV9a7KOzLmS8OGl0E7YE0%2FFP9zpoJS8D6sbFscQHJlpdiDfC1HwA1YGOcMuO2YonJFuH3To5ySY1ZKnmrCfxdFxFo9NDDCvF1lZeL7N9%2Bfv%2FSMCV3f4u25ZSY445EWuMOWSs4XP1Z6PE%2FPC85hEXdqu1i8WrirHzvzMibklVU9oP6cUBaiIV88mQAlOC45l9KVQcIBUfvoQWYPBwwxOZ1TgMQ03KgwpvIhZDZruEO9SAkhhw16Yvmw3riiApJMS9xXdMligglHG6puQbIMX3s9Q5iaaSMdsmArmptn9O3%2BN%2FZC6Fv%2BCw%2BKI7n08WpH2%2BCVN3RximlV39OCeFjtS33ivgdIHKnaEI922irKxFYsm4CqkRNX7v8v9UE1l6P28XJicojLY7Mnq62WdkDmB2v%2B571rf186vimT2DMcuPm%2FWvC5%2Fb%2Bwv%2BOr8R0K29XF%2FM46p%2FC%2B7qYSQ6rImbgpugOrKCQVZ3PlDSqwnsSDIKOWmgXcBaUQQtCLVVpiJFAngPqOKmCDZqhiYnK%2BPbFYNCOuIjQudZkv%2ByKIlow3fqPwgY6pgGXU0TwGtOQmw4jEL7v1so8rjCmP9Hg7sLy1iPxJZ1GsvzxaqINFHx8%2BovmOY%2F11FnhcMqDNbSh4B%2FdAZYCmot5gl2ir%2FHQp%2BrkUhyb%2BGFelvREsS8yA%2Bhh44Ucean%2B7Hyaq8JQSYVhPFi332qflgVS%2BuP0uaemXuXSBmPIyAMRl9ctpBr0Hs1RpzqjEcdDu33YHpN3bHImSgc74FB7FCkOlx6zn9B9&X-Amz-Signature=573c095f50f1a8e41c3972f07d99c777023f9ead8148e8670651d0c229612b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

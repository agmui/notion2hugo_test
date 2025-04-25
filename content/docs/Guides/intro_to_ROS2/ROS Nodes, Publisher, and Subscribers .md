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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G3HPGV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyw8siJijRFdHmGfiIGww8cSFF0t1hEOHEIO84HfzM6AiAHkuwn6FCMtlo0hcmK1TmWJfUhHjKi14Kbo8yunDjBoSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMvIelzujlXKVzahuPKtwDl%2BmA%2BOz7Lzo5NEugn%2BnEUPndb17wafiNELPoowGtsWKY4rRXtb6YhCPiwVuAVu2WdhbEnP8RcYIboTg742vP6HnxC1%2FgsrUxL9f9ALXjoSwWppsWH20aSn31LAB7ug38BCcVpxkQQCpDpBqra1pAd%2FTdimBb%2BcnMahcT6eSc1U8m8jR7fkNtb%2FXYGgtuWlPktMIhIN9B3TWmzbTdA79xmvYWeQV2dn7nGBno9%2BftJVmeuHjk%2BWV%2BSex0%2F9%2FkG9A3zxSorzTsrNVEC%2FZb5FncvBzHa4zTVSAv32aVdM7L1qOqUPTKo5hTkJa2BQir80uFfWpLRcHRPWSw8OSUOqSWvqILq7hImAJXHGzdZgfXaLoAuMA5zIOFyCsp1Aje62X3Uy8990fNf75He%2BXw3g17OHUxrkwvNJykZl9Bi9l3iOxWFrc5d9JkmRItupzY%2Bt4dUdsaPN3gAQJIXQhP%2FY%2Bnl6bNsKrm89NLRh8oY%2BDc6UWeqoqOeboJdKbgL5gZGDMyXhnkiiM8w2HGMJVKMkIcc7F7Tc%2BU%2Bzvvfyr3d%2BZYp3tfmpvwgSEQA32WDRGjUTtb97FYKLEknxSi3PpT7uBqWDHAHoyPHdLuWsPo2GdtU8V6WB5qDVAT8w80YUAwp5WswAY6pgERy6UnSPWAdSoUTF6DBiTEbyM2lkvHP9%2F%2BcN0oaSLsOxfFqdWJGLXwuwYf2phT4Wmkx8wRJxy0u4GfjAufgoYuZc62WTtpC%2BbKIgs%2FDkluDwndiDSFVNrLPnRlgxEOE5k9HbcN2UiakdxUXnhH%2FKTbtKB9k9C6PYByXJ1j5cuYPK9ibxOJ7oFhEyC09SBkmzvfcgtnKzZvOYZF%2BcPEFqTeqP585JoJ&X-Amz-Signature=a60c7ca6ec4c0a1220571ec4d665f864649a99f7721d5560912ccd313f071b85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G3HPGV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyw8siJijRFdHmGfiIGww8cSFF0t1hEOHEIO84HfzM6AiAHkuwn6FCMtlo0hcmK1TmWJfUhHjKi14Kbo8yunDjBoSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMvIelzujlXKVzahuPKtwDl%2BmA%2BOz7Lzo5NEugn%2BnEUPndb17wafiNELPoowGtsWKY4rRXtb6YhCPiwVuAVu2WdhbEnP8RcYIboTg742vP6HnxC1%2FgsrUxL9f9ALXjoSwWppsWH20aSn31LAB7ug38BCcVpxkQQCpDpBqra1pAd%2FTdimBb%2BcnMahcT6eSc1U8m8jR7fkNtb%2FXYGgtuWlPktMIhIN9B3TWmzbTdA79xmvYWeQV2dn7nGBno9%2BftJVmeuHjk%2BWV%2BSex0%2F9%2FkG9A3zxSorzTsrNVEC%2FZb5FncvBzHa4zTVSAv32aVdM7L1qOqUPTKo5hTkJa2BQir80uFfWpLRcHRPWSw8OSUOqSWvqILq7hImAJXHGzdZgfXaLoAuMA5zIOFyCsp1Aje62X3Uy8990fNf75He%2BXw3g17OHUxrkwvNJykZl9Bi9l3iOxWFrc5d9JkmRItupzY%2Bt4dUdsaPN3gAQJIXQhP%2FY%2Bnl6bNsKrm89NLRh8oY%2BDc6UWeqoqOeboJdKbgL5gZGDMyXhnkiiM8w2HGMJVKMkIcc7F7Tc%2BU%2Bzvvfyr3d%2BZYp3tfmpvwgSEQA32WDRGjUTtb97FYKLEknxSi3PpT7uBqWDHAHoyPHdLuWsPo2GdtU8V6WB5qDVAT8w80YUAwp5WswAY6pgERy6UnSPWAdSoUTF6DBiTEbyM2lkvHP9%2F%2BcN0oaSLsOxfFqdWJGLXwuwYf2phT4Wmkx8wRJxy0u4GfjAufgoYuZc62WTtpC%2BbKIgs%2FDkluDwndiDSFVNrLPnRlgxEOE5k9HbcN2UiakdxUXnhH%2FKTbtKB9k9C6PYByXJ1j5cuYPK9ibxOJ7oFhEyC09SBkmzvfcgtnKzZvOYZF%2BcPEFqTeqP585JoJ&X-Amz-Signature=f89053fd9e08ee3b3dcd6a802e3500cc90c2309f8fbead8ce04bbdd8f839d239&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G3HPGV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyw8siJijRFdHmGfiIGww8cSFF0t1hEOHEIO84HfzM6AiAHkuwn6FCMtlo0hcmK1TmWJfUhHjKi14Kbo8yunDjBoSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMvIelzujlXKVzahuPKtwDl%2BmA%2BOz7Lzo5NEugn%2BnEUPndb17wafiNELPoowGtsWKY4rRXtb6YhCPiwVuAVu2WdhbEnP8RcYIboTg742vP6HnxC1%2FgsrUxL9f9ALXjoSwWppsWH20aSn31LAB7ug38BCcVpxkQQCpDpBqra1pAd%2FTdimBb%2BcnMahcT6eSc1U8m8jR7fkNtb%2FXYGgtuWlPktMIhIN9B3TWmzbTdA79xmvYWeQV2dn7nGBno9%2BftJVmeuHjk%2BWV%2BSex0%2F9%2FkG9A3zxSorzTsrNVEC%2FZb5FncvBzHa4zTVSAv32aVdM7L1qOqUPTKo5hTkJa2BQir80uFfWpLRcHRPWSw8OSUOqSWvqILq7hImAJXHGzdZgfXaLoAuMA5zIOFyCsp1Aje62X3Uy8990fNf75He%2BXw3g17OHUxrkwvNJykZl9Bi9l3iOxWFrc5d9JkmRItupzY%2Bt4dUdsaPN3gAQJIXQhP%2FY%2Bnl6bNsKrm89NLRh8oY%2BDc6UWeqoqOeboJdKbgL5gZGDMyXhnkiiM8w2HGMJVKMkIcc7F7Tc%2BU%2Bzvvfyr3d%2BZYp3tfmpvwgSEQA32WDRGjUTtb97FYKLEknxSi3PpT7uBqWDHAHoyPHdLuWsPo2GdtU8V6WB5qDVAT8w80YUAwp5WswAY6pgERy6UnSPWAdSoUTF6DBiTEbyM2lkvHP9%2F%2BcN0oaSLsOxfFqdWJGLXwuwYf2phT4Wmkx8wRJxy0u4GfjAufgoYuZc62WTtpC%2BbKIgs%2FDkluDwndiDSFVNrLPnRlgxEOE5k9HbcN2UiakdxUXnhH%2FKTbtKB9k9C6PYByXJ1j5cuYPK9ibxOJ7oFhEyC09SBkmzvfcgtnKzZvOYZF%2BcPEFqTeqP585JoJ&X-Amz-Signature=4c716d55441017160e4855b253113c8439f175f430b744a94ec7bd885e026278&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G3HPGV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyw8siJijRFdHmGfiIGww8cSFF0t1hEOHEIO84HfzM6AiAHkuwn6FCMtlo0hcmK1TmWJfUhHjKi14Kbo8yunDjBoSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMvIelzujlXKVzahuPKtwDl%2BmA%2BOz7Lzo5NEugn%2BnEUPndb17wafiNELPoowGtsWKY4rRXtb6YhCPiwVuAVu2WdhbEnP8RcYIboTg742vP6HnxC1%2FgsrUxL9f9ALXjoSwWppsWH20aSn31LAB7ug38BCcVpxkQQCpDpBqra1pAd%2FTdimBb%2BcnMahcT6eSc1U8m8jR7fkNtb%2FXYGgtuWlPktMIhIN9B3TWmzbTdA79xmvYWeQV2dn7nGBno9%2BftJVmeuHjk%2BWV%2BSex0%2F9%2FkG9A3zxSorzTsrNVEC%2FZb5FncvBzHa4zTVSAv32aVdM7L1qOqUPTKo5hTkJa2BQir80uFfWpLRcHRPWSw8OSUOqSWvqILq7hImAJXHGzdZgfXaLoAuMA5zIOFyCsp1Aje62X3Uy8990fNf75He%2BXw3g17OHUxrkwvNJykZl9Bi9l3iOxWFrc5d9JkmRItupzY%2Bt4dUdsaPN3gAQJIXQhP%2FY%2Bnl6bNsKrm89NLRh8oY%2BDc6UWeqoqOeboJdKbgL5gZGDMyXhnkiiM8w2HGMJVKMkIcc7F7Tc%2BU%2Bzvvfyr3d%2BZYp3tfmpvwgSEQA32WDRGjUTtb97FYKLEknxSi3PpT7uBqWDHAHoyPHdLuWsPo2GdtU8V6WB5qDVAT8w80YUAwp5WswAY6pgERy6UnSPWAdSoUTF6DBiTEbyM2lkvHP9%2F%2BcN0oaSLsOxfFqdWJGLXwuwYf2phT4Wmkx8wRJxy0u4GfjAufgoYuZc62WTtpC%2BbKIgs%2FDkluDwndiDSFVNrLPnRlgxEOE5k9HbcN2UiakdxUXnhH%2FKTbtKB9k9C6PYByXJ1j5cuYPK9ibxOJ7oFhEyC09SBkmzvfcgtnKzZvOYZF%2BcPEFqTeqP585JoJ&X-Amz-Signature=3d3a3a592518b0c3164ad2a214efe88f6443dc7310d9b35909c9cb651995fd60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G3HPGV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyw8siJijRFdHmGfiIGww8cSFF0t1hEOHEIO84HfzM6AiAHkuwn6FCMtlo0hcmK1TmWJfUhHjKi14Kbo8yunDjBoSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMvIelzujlXKVzahuPKtwDl%2BmA%2BOz7Lzo5NEugn%2BnEUPndb17wafiNELPoowGtsWKY4rRXtb6YhCPiwVuAVu2WdhbEnP8RcYIboTg742vP6HnxC1%2FgsrUxL9f9ALXjoSwWppsWH20aSn31LAB7ug38BCcVpxkQQCpDpBqra1pAd%2FTdimBb%2BcnMahcT6eSc1U8m8jR7fkNtb%2FXYGgtuWlPktMIhIN9B3TWmzbTdA79xmvYWeQV2dn7nGBno9%2BftJVmeuHjk%2BWV%2BSex0%2F9%2FkG9A3zxSorzTsrNVEC%2FZb5FncvBzHa4zTVSAv32aVdM7L1qOqUPTKo5hTkJa2BQir80uFfWpLRcHRPWSw8OSUOqSWvqILq7hImAJXHGzdZgfXaLoAuMA5zIOFyCsp1Aje62X3Uy8990fNf75He%2BXw3g17OHUxrkwvNJykZl9Bi9l3iOxWFrc5d9JkmRItupzY%2Bt4dUdsaPN3gAQJIXQhP%2FY%2Bnl6bNsKrm89NLRh8oY%2BDc6UWeqoqOeboJdKbgL5gZGDMyXhnkiiM8w2HGMJVKMkIcc7F7Tc%2BU%2Bzvvfyr3d%2BZYp3tfmpvwgSEQA32WDRGjUTtb97FYKLEknxSi3PpT7uBqWDHAHoyPHdLuWsPo2GdtU8V6WB5qDVAT8w80YUAwp5WswAY6pgERy6UnSPWAdSoUTF6DBiTEbyM2lkvHP9%2F%2BcN0oaSLsOxfFqdWJGLXwuwYf2phT4Wmkx8wRJxy0u4GfjAufgoYuZc62WTtpC%2BbKIgs%2FDkluDwndiDSFVNrLPnRlgxEOE5k9HbcN2UiakdxUXnhH%2FKTbtKB9k9C6PYByXJ1j5cuYPK9ibxOJ7oFhEyC09SBkmzvfcgtnKzZvOYZF%2BcPEFqTeqP585JoJ&X-Amz-Signature=e8d9ed5972bc25688ba95a2ac75882cc766431efa905dbfce14b77014a662845&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G3HPGV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyw8siJijRFdHmGfiIGww8cSFF0t1hEOHEIO84HfzM6AiAHkuwn6FCMtlo0hcmK1TmWJfUhHjKi14Kbo8yunDjBoSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMvIelzujlXKVzahuPKtwDl%2BmA%2BOz7Lzo5NEugn%2BnEUPndb17wafiNELPoowGtsWKY4rRXtb6YhCPiwVuAVu2WdhbEnP8RcYIboTg742vP6HnxC1%2FgsrUxL9f9ALXjoSwWppsWH20aSn31LAB7ug38BCcVpxkQQCpDpBqra1pAd%2FTdimBb%2BcnMahcT6eSc1U8m8jR7fkNtb%2FXYGgtuWlPktMIhIN9B3TWmzbTdA79xmvYWeQV2dn7nGBno9%2BftJVmeuHjk%2BWV%2BSex0%2F9%2FkG9A3zxSorzTsrNVEC%2FZb5FncvBzHa4zTVSAv32aVdM7L1qOqUPTKo5hTkJa2BQir80uFfWpLRcHRPWSw8OSUOqSWvqILq7hImAJXHGzdZgfXaLoAuMA5zIOFyCsp1Aje62X3Uy8990fNf75He%2BXw3g17OHUxrkwvNJykZl9Bi9l3iOxWFrc5d9JkmRItupzY%2Bt4dUdsaPN3gAQJIXQhP%2FY%2Bnl6bNsKrm89NLRh8oY%2BDc6UWeqoqOeboJdKbgL5gZGDMyXhnkiiM8w2HGMJVKMkIcc7F7Tc%2BU%2Bzvvfyr3d%2BZYp3tfmpvwgSEQA32WDRGjUTtb97FYKLEknxSi3PpT7uBqWDHAHoyPHdLuWsPo2GdtU8V6WB5qDVAT8w80YUAwp5WswAY6pgERy6UnSPWAdSoUTF6DBiTEbyM2lkvHP9%2F%2BcN0oaSLsOxfFqdWJGLXwuwYf2phT4Wmkx8wRJxy0u4GfjAufgoYuZc62WTtpC%2BbKIgs%2FDkluDwndiDSFVNrLPnRlgxEOE5k9HbcN2UiakdxUXnhH%2FKTbtKB9k9C6PYByXJ1j5cuYPK9ibxOJ7oFhEyC09SBkmzvfcgtnKzZvOYZF%2BcPEFqTeqP585JoJ&X-Amz-Signature=e2a8187ed0040b8cbb91fc76042b77ae6c247e654f93011e020f89585ee58657&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G3HPGV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyw8siJijRFdHmGfiIGww8cSFF0t1hEOHEIO84HfzM6AiAHkuwn6FCMtlo0hcmK1TmWJfUhHjKi14Kbo8yunDjBoSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMvIelzujlXKVzahuPKtwDl%2BmA%2BOz7Lzo5NEugn%2BnEUPndb17wafiNELPoowGtsWKY4rRXtb6YhCPiwVuAVu2WdhbEnP8RcYIboTg742vP6HnxC1%2FgsrUxL9f9ALXjoSwWppsWH20aSn31LAB7ug38BCcVpxkQQCpDpBqra1pAd%2FTdimBb%2BcnMahcT6eSc1U8m8jR7fkNtb%2FXYGgtuWlPktMIhIN9B3TWmzbTdA79xmvYWeQV2dn7nGBno9%2BftJVmeuHjk%2BWV%2BSex0%2F9%2FkG9A3zxSorzTsrNVEC%2FZb5FncvBzHa4zTVSAv32aVdM7L1qOqUPTKo5hTkJa2BQir80uFfWpLRcHRPWSw8OSUOqSWvqILq7hImAJXHGzdZgfXaLoAuMA5zIOFyCsp1Aje62X3Uy8990fNf75He%2BXw3g17OHUxrkwvNJykZl9Bi9l3iOxWFrc5d9JkmRItupzY%2Bt4dUdsaPN3gAQJIXQhP%2FY%2Bnl6bNsKrm89NLRh8oY%2BDc6UWeqoqOeboJdKbgL5gZGDMyXhnkiiM8w2HGMJVKMkIcc7F7Tc%2BU%2Bzvvfyr3d%2BZYp3tfmpvwgSEQA32WDRGjUTtb97FYKLEknxSi3PpT7uBqWDHAHoyPHdLuWsPo2GdtU8V6WB5qDVAT8w80YUAwp5WswAY6pgERy6UnSPWAdSoUTF6DBiTEbyM2lkvHP9%2F%2BcN0oaSLsOxfFqdWJGLXwuwYf2phT4Wmkx8wRJxy0u4GfjAufgoYuZc62WTtpC%2BbKIgs%2FDkluDwndiDSFVNrLPnRlgxEOE5k9HbcN2UiakdxUXnhH%2FKTbtKB9k9C6PYByXJ1j5cuYPK9ibxOJ7oFhEyC09SBkmzvfcgtnKzZvOYZF%2BcPEFqTeqP585JoJ&X-Amz-Signature=7717a288bff12ff3cd0334739b61b15b43c880e9318e2a15cdf315e909190cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6G3HPGV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyw8siJijRFdHmGfiIGww8cSFF0t1hEOHEIO84HfzM6AiAHkuwn6FCMtlo0hcmK1TmWJfUhHjKi14Kbo8yunDjBoSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMvIelzujlXKVzahuPKtwDl%2BmA%2BOz7Lzo5NEugn%2BnEUPndb17wafiNELPoowGtsWKY4rRXtb6YhCPiwVuAVu2WdhbEnP8RcYIboTg742vP6HnxC1%2FgsrUxL9f9ALXjoSwWppsWH20aSn31LAB7ug38BCcVpxkQQCpDpBqra1pAd%2FTdimBb%2BcnMahcT6eSc1U8m8jR7fkNtb%2FXYGgtuWlPktMIhIN9B3TWmzbTdA79xmvYWeQV2dn7nGBno9%2BftJVmeuHjk%2BWV%2BSex0%2F9%2FkG9A3zxSorzTsrNVEC%2FZb5FncvBzHa4zTVSAv32aVdM7L1qOqUPTKo5hTkJa2BQir80uFfWpLRcHRPWSw8OSUOqSWvqILq7hImAJXHGzdZgfXaLoAuMA5zIOFyCsp1Aje62X3Uy8990fNf75He%2BXw3g17OHUxrkwvNJykZl9Bi9l3iOxWFrc5d9JkmRItupzY%2Bt4dUdsaPN3gAQJIXQhP%2FY%2Bnl6bNsKrm89NLRh8oY%2BDc6UWeqoqOeboJdKbgL5gZGDMyXhnkiiM8w2HGMJVKMkIcc7F7Tc%2BU%2Bzvvfyr3d%2BZYp3tfmpvwgSEQA32WDRGjUTtb97FYKLEknxSi3PpT7uBqWDHAHoyPHdLuWsPo2GdtU8V6WB5qDVAT8w80YUAwp5WswAY6pgERy6UnSPWAdSoUTF6DBiTEbyM2lkvHP9%2F%2BcN0oaSLsOxfFqdWJGLXwuwYf2phT4Wmkx8wRJxy0u4GfjAufgoYuZc62WTtpC%2BbKIgs%2FDkluDwndiDSFVNrLPnRlgxEOE5k9HbcN2UiakdxUXnhH%2FKTbtKB9k9C6PYByXJ1j5cuYPK9ibxOJ7oFhEyC09SBkmzvfcgtnKzZvOYZF%2BcPEFqTeqP585JoJ&X-Amz-Signature=b4f5762494cb1e215fc550bb51f9b3aeca77f2e1ac35c10cbacf67f09f6d9186&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

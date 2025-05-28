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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZRQXQB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGg9Gf4cvwpAhYsPje3Ln1avjBqDNJI7V8Ixwq06p8gIhANKl2SbJPnv73z54d7CkpF%2BklxGOneYPh6gmHwRuNJ40Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzXkco4T1zMEhmBOHcq3AMIthzLzabL6ks2ebMq0srqdPLAx3RC1M1m86Gr4H5T8jNvdhpJXI8HhxbiRh4fJ9MnvvarAxFEzyD9BHg2NJTAhRhT25a8sBsiFF75vp5g1LVqAcIiuh0sA0AZp4BHdgmFT%2BDES%2FT%2BIpUypE7G1VlTuGNQum1dkc9p0JdfRMzTCLub5ST2WLndrhNqdUGK20tf5j86Cn4MHKFX7Ob1mgS8CSS%2FtwYW1wyUNU0XfUDEkQwd7c5IBDY75ccVcWoSNo1mCNLPFz9bdQ%2FPUQuXJx30vYII4qErUl%2Bhk1Pi4jCf%2BPoRe8WjrXr7NySQe4fhJAKv2wvmftTZ8fggC3z5ikI0fCHX%2B%2Ba%2FbzldtxxFl95awR7KaWyRWG%2BDnAoZ7hbnbYzPYn238dcpyRXDM1E48QuvEOmPLMXV%2BRPrctBBmH0kpRYvlojUTd0AIXTRlNfDdKVpz1yIAtxVlLkOwoo8fM%2F4eNUF4CcOtC8gYr%2FVtPfU6Sj5gylY0F5XS%2BtcfmoD%2F%2BE%2Ftgbu6zv7MYgTjWYp4O2ELXQia3fbbPER1Oi8sSgtq9v0u98RtWyHkh952yx0qMhVl9OJ7C62mlTlalVueG%2FC6AMqdSMVwf7AxIVWP8B%2B%2FRQjbZ%2FbhJPeVQ0EADCj5NvBBjqkAXgmekuLu21aM5Ez7bawLMWcHfT67NyqXivuQuS3hxcEcSga6jGwSHSV3BohqSEO8yffcwm1yeKpDJ1Wg7tMl5EghbmuGWBEKPyst%2FptNYGOsoRQTqVPCseRbtiq8PrmdNO9%2B4Uk%2Ffxe9Wy18uA%2FSQlOP8zkGJHBnWc02VadrcOIPUlCJwrTwodnJjVQ1x3Txn5b7myrpYG1a7uzv9iWyFVo%2BVQC&X-Amz-Signature=eea287a9741dc7a1f6273d8a96e42836fd0eb8eaa0e79ca24b12dd31f38bc057&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZRQXQB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGg9Gf4cvwpAhYsPje3Ln1avjBqDNJI7V8Ixwq06p8gIhANKl2SbJPnv73z54d7CkpF%2BklxGOneYPh6gmHwRuNJ40Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzXkco4T1zMEhmBOHcq3AMIthzLzabL6ks2ebMq0srqdPLAx3RC1M1m86Gr4H5T8jNvdhpJXI8HhxbiRh4fJ9MnvvarAxFEzyD9BHg2NJTAhRhT25a8sBsiFF75vp5g1LVqAcIiuh0sA0AZp4BHdgmFT%2BDES%2FT%2BIpUypE7G1VlTuGNQum1dkc9p0JdfRMzTCLub5ST2WLndrhNqdUGK20tf5j86Cn4MHKFX7Ob1mgS8CSS%2FtwYW1wyUNU0XfUDEkQwd7c5IBDY75ccVcWoSNo1mCNLPFz9bdQ%2FPUQuXJx30vYII4qErUl%2Bhk1Pi4jCf%2BPoRe8WjrXr7NySQe4fhJAKv2wvmftTZ8fggC3z5ikI0fCHX%2B%2Ba%2FbzldtxxFl95awR7KaWyRWG%2BDnAoZ7hbnbYzPYn238dcpyRXDM1E48QuvEOmPLMXV%2BRPrctBBmH0kpRYvlojUTd0AIXTRlNfDdKVpz1yIAtxVlLkOwoo8fM%2F4eNUF4CcOtC8gYr%2FVtPfU6Sj5gylY0F5XS%2BtcfmoD%2F%2BE%2Ftgbu6zv7MYgTjWYp4O2ELXQia3fbbPER1Oi8sSgtq9v0u98RtWyHkh952yx0qMhVl9OJ7C62mlTlalVueG%2FC6AMqdSMVwf7AxIVWP8B%2B%2FRQjbZ%2FbhJPeVQ0EADCj5NvBBjqkAXgmekuLu21aM5Ez7bawLMWcHfT67NyqXivuQuS3hxcEcSga6jGwSHSV3BohqSEO8yffcwm1yeKpDJ1Wg7tMl5EghbmuGWBEKPyst%2FptNYGOsoRQTqVPCseRbtiq8PrmdNO9%2B4Uk%2Ffxe9Wy18uA%2FSQlOP8zkGJHBnWc02VadrcOIPUlCJwrTwodnJjVQ1x3Txn5b7myrpYG1a7uzv9iWyFVo%2BVQC&X-Amz-Signature=a1bcb98697f92f56763e1ed6ce1736d82b0e5d8892784c11d9259abf3cd73e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZRQXQB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGg9Gf4cvwpAhYsPje3Ln1avjBqDNJI7V8Ixwq06p8gIhANKl2SbJPnv73z54d7CkpF%2BklxGOneYPh6gmHwRuNJ40Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzXkco4T1zMEhmBOHcq3AMIthzLzabL6ks2ebMq0srqdPLAx3RC1M1m86Gr4H5T8jNvdhpJXI8HhxbiRh4fJ9MnvvarAxFEzyD9BHg2NJTAhRhT25a8sBsiFF75vp5g1LVqAcIiuh0sA0AZp4BHdgmFT%2BDES%2FT%2BIpUypE7G1VlTuGNQum1dkc9p0JdfRMzTCLub5ST2WLndrhNqdUGK20tf5j86Cn4MHKFX7Ob1mgS8CSS%2FtwYW1wyUNU0XfUDEkQwd7c5IBDY75ccVcWoSNo1mCNLPFz9bdQ%2FPUQuXJx30vYII4qErUl%2Bhk1Pi4jCf%2BPoRe8WjrXr7NySQe4fhJAKv2wvmftTZ8fggC3z5ikI0fCHX%2B%2Ba%2FbzldtxxFl95awR7KaWyRWG%2BDnAoZ7hbnbYzPYn238dcpyRXDM1E48QuvEOmPLMXV%2BRPrctBBmH0kpRYvlojUTd0AIXTRlNfDdKVpz1yIAtxVlLkOwoo8fM%2F4eNUF4CcOtC8gYr%2FVtPfU6Sj5gylY0F5XS%2BtcfmoD%2F%2BE%2Ftgbu6zv7MYgTjWYp4O2ELXQia3fbbPER1Oi8sSgtq9v0u98RtWyHkh952yx0qMhVl9OJ7C62mlTlalVueG%2FC6AMqdSMVwf7AxIVWP8B%2B%2FRQjbZ%2FbhJPeVQ0EADCj5NvBBjqkAXgmekuLu21aM5Ez7bawLMWcHfT67NyqXivuQuS3hxcEcSga6jGwSHSV3BohqSEO8yffcwm1yeKpDJ1Wg7tMl5EghbmuGWBEKPyst%2FptNYGOsoRQTqVPCseRbtiq8PrmdNO9%2B4Uk%2Ffxe9Wy18uA%2FSQlOP8zkGJHBnWc02VadrcOIPUlCJwrTwodnJjVQ1x3Txn5b7myrpYG1a7uzv9iWyFVo%2BVQC&X-Amz-Signature=3e2e4a634b0952bf873385a89fa02c8d4888904f764119852b1d1d6dddcb8437&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZRQXQB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGg9Gf4cvwpAhYsPje3Ln1avjBqDNJI7V8Ixwq06p8gIhANKl2SbJPnv73z54d7CkpF%2BklxGOneYPh6gmHwRuNJ40Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzXkco4T1zMEhmBOHcq3AMIthzLzabL6ks2ebMq0srqdPLAx3RC1M1m86Gr4H5T8jNvdhpJXI8HhxbiRh4fJ9MnvvarAxFEzyD9BHg2NJTAhRhT25a8sBsiFF75vp5g1LVqAcIiuh0sA0AZp4BHdgmFT%2BDES%2FT%2BIpUypE7G1VlTuGNQum1dkc9p0JdfRMzTCLub5ST2WLndrhNqdUGK20tf5j86Cn4MHKFX7Ob1mgS8CSS%2FtwYW1wyUNU0XfUDEkQwd7c5IBDY75ccVcWoSNo1mCNLPFz9bdQ%2FPUQuXJx30vYII4qErUl%2Bhk1Pi4jCf%2BPoRe8WjrXr7NySQe4fhJAKv2wvmftTZ8fggC3z5ikI0fCHX%2B%2Ba%2FbzldtxxFl95awR7KaWyRWG%2BDnAoZ7hbnbYzPYn238dcpyRXDM1E48QuvEOmPLMXV%2BRPrctBBmH0kpRYvlojUTd0AIXTRlNfDdKVpz1yIAtxVlLkOwoo8fM%2F4eNUF4CcOtC8gYr%2FVtPfU6Sj5gylY0F5XS%2BtcfmoD%2F%2BE%2Ftgbu6zv7MYgTjWYp4O2ELXQia3fbbPER1Oi8sSgtq9v0u98RtWyHkh952yx0qMhVl9OJ7C62mlTlalVueG%2FC6AMqdSMVwf7AxIVWP8B%2B%2FRQjbZ%2FbhJPeVQ0EADCj5NvBBjqkAXgmekuLu21aM5Ez7bawLMWcHfT67NyqXivuQuS3hxcEcSga6jGwSHSV3BohqSEO8yffcwm1yeKpDJ1Wg7tMl5EghbmuGWBEKPyst%2FptNYGOsoRQTqVPCseRbtiq8PrmdNO9%2B4Uk%2Ffxe9Wy18uA%2FSQlOP8zkGJHBnWc02VadrcOIPUlCJwrTwodnJjVQ1x3Txn5b7myrpYG1a7uzv9iWyFVo%2BVQC&X-Amz-Signature=7e1ce1a8bfc647d62bb7130e1b582192b2459db3b2798508cc32b6ad923d3336&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZRQXQB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGg9Gf4cvwpAhYsPje3Ln1avjBqDNJI7V8Ixwq06p8gIhANKl2SbJPnv73z54d7CkpF%2BklxGOneYPh6gmHwRuNJ40Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzXkco4T1zMEhmBOHcq3AMIthzLzabL6ks2ebMq0srqdPLAx3RC1M1m86Gr4H5T8jNvdhpJXI8HhxbiRh4fJ9MnvvarAxFEzyD9BHg2NJTAhRhT25a8sBsiFF75vp5g1LVqAcIiuh0sA0AZp4BHdgmFT%2BDES%2FT%2BIpUypE7G1VlTuGNQum1dkc9p0JdfRMzTCLub5ST2WLndrhNqdUGK20tf5j86Cn4MHKFX7Ob1mgS8CSS%2FtwYW1wyUNU0XfUDEkQwd7c5IBDY75ccVcWoSNo1mCNLPFz9bdQ%2FPUQuXJx30vYII4qErUl%2Bhk1Pi4jCf%2BPoRe8WjrXr7NySQe4fhJAKv2wvmftTZ8fggC3z5ikI0fCHX%2B%2Ba%2FbzldtxxFl95awR7KaWyRWG%2BDnAoZ7hbnbYzPYn238dcpyRXDM1E48QuvEOmPLMXV%2BRPrctBBmH0kpRYvlojUTd0AIXTRlNfDdKVpz1yIAtxVlLkOwoo8fM%2F4eNUF4CcOtC8gYr%2FVtPfU6Sj5gylY0F5XS%2BtcfmoD%2F%2BE%2Ftgbu6zv7MYgTjWYp4O2ELXQia3fbbPER1Oi8sSgtq9v0u98RtWyHkh952yx0qMhVl9OJ7C62mlTlalVueG%2FC6AMqdSMVwf7AxIVWP8B%2B%2FRQjbZ%2FbhJPeVQ0EADCj5NvBBjqkAXgmekuLu21aM5Ez7bawLMWcHfT67NyqXivuQuS3hxcEcSga6jGwSHSV3BohqSEO8yffcwm1yeKpDJ1Wg7tMl5EghbmuGWBEKPyst%2FptNYGOsoRQTqVPCseRbtiq8PrmdNO9%2B4Uk%2Ffxe9Wy18uA%2FSQlOP8zkGJHBnWc02VadrcOIPUlCJwrTwodnJjVQ1x3Txn5b7myrpYG1a7uzv9iWyFVo%2BVQC&X-Amz-Signature=0a1359617a24e5c0aacc80fd6b3ba112014b650c3694fff26c1144778d07d7d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZRQXQB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGg9Gf4cvwpAhYsPje3Ln1avjBqDNJI7V8Ixwq06p8gIhANKl2SbJPnv73z54d7CkpF%2BklxGOneYPh6gmHwRuNJ40Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzXkco4T1zMEhmBOHcq3AMIthzLzabL6ks2ebMq0srqdPLAx3RC1M1m86Gr4H5T8jNvdhpJXI8HhxbiRh4fJ9MnvvarAxFEzyD9BHg2NJTAhRhT25a8sBsiFF75vp5g1LVqAcIiuh0sA0AZp4BHdgmFT%2BDES%2FT%2BIpUypE7G1VlTuGNQum1dkc9p0JdfRMzTCLub5ST2WLndrhNqdUGK20tf5j86Cn4MHKFX7Ob1mgS8CSS%2FtwYW1wyUNU0XfUDEkQwd7c5IBDY75ccVcWoSNo1mCNLPFz9bdQ%2FPUQuXJx30vYII4qErUl%2Bhk1Pi4jCf%2BPoRe8WjrXr7NySQe4fhJAKv2wvmftTZ8fggC3z5ikI0fCHX%2B%2Ba%2FbzldtxxFl95awR7KaWyRWG%2BDnAoZ7hbnbYzPYn238dcpyRXDM1E48QuvEOmPLMXV%2BRPrctBBmH0kpRYvlojUTd0AIXTRlNfDdKVpz1yIAtxVlLkOwoo8fM%2F4eNUF4CcOtC8gYr%2FVtPfU6Sj5gylY0F5XS%2BtcfmoD%2F%2BE%2Ftgbu6zv7MYgTjWYp4O2ELXQia3fbbPER1Oi8sSgtq9v0u98RtWyHkh952yx0qMhVl9OJ7C62mlTlalVueG%2FC6AMqdSMVwf7AxIVWP8B%2B%2FRQjbZ%2FbhJPeVQ0EADCj5NvBBjqkAXgmekuLu21aM5Ez7bawLMWcHfT67NyqXivuQuS3hxcEcSga6jGwSHSV3BohqSEO8yffcwm1yeKpDJ1Wg7tMl5EghbmuGWBEKPyst%2FptNYGOsoRQTqVPCseRbtiq8PrmdNO9%2B4Uk%2Ffxe9Wy18uA%2FSQlOP8zkGJHBnWc02VadrcOIPUlCJwrTwodnJjVQ1x3Txn5b7myrpYG1a7uzv9iWyFVo%2BVQC&X-Amz-Signature=2db54834990f4fc9a188f92e42de811cecd241ed28cb23e2d3cfcd7bb6c1145a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZRQXQB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGg9Gf4cvwpAhYsPje3Ln1avjBqDNJI7V8Ixwq06p8gIhANKl2SbJPnv73z54d7CkpF%2BklxGOneYPh6gmHwRuNJ40Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzXkco4T1zMEhmBOHcq3AMIthzLzabL6ks2ebMq0srqdPLAx3RC1M1m86Gr4H5T8jNvdhpJXI8HhxbiRh4fJ9MnvvarAxFEzyD9BHg2NJTAhRhT25a8sBsiFF75vp5g1LVqAcIiuh0sA0AZp4BHdgmFT%2BDES%2FT%2BIpUypE7G1VlTuGNQum1dkc9p0JdfRMzTCLub5ST2WLndrhNqdUGK20tf5j86Cn4MHKFX7Ob1mgS8CSS%2FtwYW1wyUNU0XfUDEkQwd7c5IBDY75ccVcWoSNo1mCNLPFz9bdQ%2FPUQuXJx30vYII4qErUl%2Bhk1Pi4jCf%2BPoRe8WjrXr7NySQe4fhJAKv2wvmftTZ8fggC3z5ikI0fCHX%2B%2Ba%2FbzldtxxFl95awR7KaWyRWG%2BDnAoZ7hbnbYzPYn238dcpyRXDM1E48QuvEOmPLMXV%2BRPrctBBmH0kpRYvlojUTd0AIXTRlNfDdKVpz1yIAtxVlLkOwoo8fM%2F4eNUF4CcOtC8gYr%2FVtPfU6Sj5gylY0F5XS%2BtcfmoD%2F%2BE%2Ftgbu6zv7MYgTjWYp4O2ELXQia3fbbPER1Oi8sSgtq9v0u98RtWyHkh952yx0qMhVl9OJ7C62mlTlalVueG%2FC6AMqdSMVwf7AxIVWP8B%2B%2FRQjbZ%2FbhJPeVQ0EADCj5NvBBjqkAXgmekuLu21aM5Ez7bawLMWcHfT67NyqXivuQuS3hxcEcSga6jGwSHSV3BohqSEO8yffcwm1yeKpDJ1Wg7tMl5EghbmuGWBEKPyst%2FptNYGOsoRQTqVPCseRbtiq8PrmdNO9%2B4Uk%2Ffxe9Wy18uA%2FSQlOP8zkGJHBnWc02VadrcOIPUlCJwrTwodnJjVQ1x3Txn5b7myrpYG1a7uzv9iWyFVo%2BVQC&X-Amz-Signature=61bf144175a3bf35ed86568022b9de89759299e5da051f1f43490a234d1f9655&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZRQXQB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGg9Gf4cvwpAhYsPje3Ln1avjBqDNJI7V8Ixwq06p8gIhANKl2SbJPnv73z54d7CkpF%2BklxGOneYPh6gmHwRuNJ40Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzXkco4T1zMEhmBOHcq3AMIthzLzabL6ks2ebMq0srqdPLAx3RC1M1m86Gr4H5T8jNvdhpJXI8HhxbiRh4fJ9MnvvarAxFEzyD9BHg2NJTAhRhT25a8sBsiFF75vp5g1LVqAcIiuh0sA0AZp4BHdgmFT%2BDES%2FT%2BIpUypE7G1VlTuGNQum1dkc9p0JdfRMzTCLub5ST2WLndrhNqdUGK20tf5j86Cn4MHKFX7Ob1mgS8CSS%2FtwYW1wyUNU0XfUDEkQwd7c5IBDY75ccVcWoSNo1mCNLPFz9bdQ%2FPUQuXJx30vYII4qErUl%2Bhk1Pi4jCf%2BPoRe8WjrXr7NySQe4fhJAKv2wvmftTZ8fggC3z5ikI0fCHX%2B%2Ba%2FbzldtxxFl95awR7KaWyRWG%2BDnAoZ7hbnbYzPYn238dcpyRXDM1E48QuvEOmPLMXV%2BRPrctBBmH0kpRYvlojUTd0AIXTRlNfDdKVpz1yIAtxVlLkOwoo8fM%2F4eNUF4CcOtC8gYr%2FVtPfU6Sj5gylY0F5XS%2BtcfmoD%2F%2BE%2Ftgbu6zv7MYgTjWYp4O2ELXQia3fbbPER1Oi8sSgtq9v0u98RtWyHkh952yx0qMhVl9OJ7C62mlTlalVueG%2FC6AMqdSMVwf7AxIVWP8B%2B%2FRQjbZ%2FbhJPeVQ0EADCj5NvBBjqkAXgmekuLu21aM5Ez7bawLMWcHfT67NyqXivuQuS3hxcEcSga6jGwSHSV3BohqSEO8yffcwm1yeKpDJ1Wg7tMl5EghbmuGWBEKPyst%2FptNYGOsoRQTqVPCseRbtiq8PrmdNO9%2B4Uk%2Ffxe9Wy18uA%2FSQlOP8zkGJHBnWc02VadrcOIPUlCJwrTwodnJjVQ1x3Txn5b7myrpYG1a7uzv9iWyFVo%2BVQC&X-Amz-Signature=e22d7f08f383f369ecf041cca1cb4d098d8937699c6b533ebaef791266a051eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

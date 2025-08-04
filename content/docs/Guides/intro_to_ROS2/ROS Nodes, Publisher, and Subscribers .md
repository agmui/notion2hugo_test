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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66JGUEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGPUyLxeOAqAiUJny0IsH6wJiPcfUcsuh6C7KCoNmHLyAiAZa98h8QWA69hWK%2BOIFy570FmOP7PZVWYajWvJoJWwQSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMKwLaNZRBrwyfzDc9KtwD%2FljIL%2BcRHHi6tkCMn7%2FfU0q81LuECBOpjMkN9gymV3AnVaz56NMdTEwZPN5vHfJY0ria0%2B5bTyT7hAXrIDfWkvy%2F1vIAJX8cdaKwwjZhkR0fwpDbltCW%2Fkbky%2BWPTvSLMUMUCG8A640vZBxp730al2hZoTZTLUmPiRlPoE%2FiuGxh4D2G1dupxVxijVwYUz8PlPzpdNfY5YbpQ%2F0K6KV%2F3Gt1JftsqWH2DJrtcy5QOmpgPcrWnDNZa9DwAo4o4MLehSxWKgsz82sKJOwoWwAHJZsKz1Owfh0qxi%2BjUJzcRrQW%2B05wY2GNpIp4HulfPaLknSd7wAgC0kl%2BfpiegkJF3XHe9GzDzFUwLeIbweK1SBZWcWERv7GxYqjDcl01AkabZTNnCBuUfSiCjycNGFWqAnD5urnCPHFF587y7t1c6TnZj2huRmMl9XWv8TWJD2ftZZrKP4cvF%2Ff7fFRGSKzpek3hmOOvxHKfHdui1pP13j9z1PQ%2BqEvC2CH4Qup%2BIuve6ImNHIvQRz%2BJ9BRobhUofhJCTvFCGZu%2BjAqtZrdpp%2BZCqi9%2FqXq4hItpdI%2B5VveXPO5Y5nT6BqcCtozQ0W7L60VOz%2Bgl7fd2Gcg%2B5I%2FDKwT33EEFO2lYzlOK7oUwrPnDxAY6pgF0whczqE8YjhV%2Fl1VmPTXlF8Z4Jc00pbXQkUG7iRQNy7wSWTi57tdvZAz3Pa5Sz5V1dFRxCvb0blICDPh9DGG0I7pV5PpIBV0X8MtJSjCPdVJGaiAmwZvHP3Kw8COhYO0GvzeQntMLUxEYoHGACEd3ctJR5FbsQwXKXsQf1FIPuGVAK0Soez3GzdugVLApEdRvZvvjpyOp7pNV0x6mir5WFEMsKqCs&X-Amz-Signature=7b680473643dd0f1bdbab0bedc7191f58dcd3f1a2f9dc4fdb0913d4e8562dd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66JGUEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGPUyLxeOAqAiUJny0IsH6wJiPcfUcsuh6C7KCoNmHLyAiAZa98h8QWA69hWK%2BOIFy570FmOP7PZVWYajWvJoJWwQSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMKwLaNZRBrwyfzDc9KtwD%2FljIL%2BcRHHi6tkCMn7%2FfU0q81LuECBOpjMkN9gymV3AnVaz56NMdTEwZPN5vHfJY0ria0%2B5bTyT7hAXrIDfWkvy%2F1vIAJX8cdaKwwjZhkR0fwpDbltCW%2Fkbky%2BWPTvSLMUMUCG8A640vZBxp730al2hZoTZTLUmPiRlPoE%2FiuGxh4D2G1dupxVxijVwYUz8PlPzpdNfY5YbpQ%2F0K6KV%2F3Gt1JftsqWH2DJrtcy5QOmpgPcrWnDNZa9DwAo4o4MLehSxWKgsz82sKJOwoWwAHJZsKz1Owfh0qxi%2BjUJzcRrQW%2B05wY2GNpIp4HulfPaLknSd7wAgC0kl%2BfpiegkJF3XHe9GzDzFUwLeIbweK1SBZWcWERv7GxYqjDcl01AkabZTNnCBuUfSiCjycNGFWqAnD5urnCPHFF587y7t1c6TnZj2huRmMl9XWv8TWJD2ftZZrKP4cvF%2Ff7fFRGSKzpek3hmOOvxHKfHdui1pP13j9z1PQ%2BqEvC2CH4Qup%2BIuve6ImNHIvQRz%2BJ9BRobhUofhJCTvFCGZu%2BjAqtZrdpp%2BZCqi9%2FqXq4hItpdI%2B5VveXPO5Y5nT6BqcCtozQ0W7L60VOz%2Bgl7fd2Gcg%2B5I%2FDKwT33EEFO2lYzlOK7oUwrPnDxAY6pgF0whczqE8YjhV%2Fl1VmPTXlF8Z4Jc00pbXQkUG7iRQNy7wSWTi57tdvZAz3Pa5Sz5V1dFRxCvb0blICDPh9DGG0I7pV5PpIBV0X8MtJSjCPdVJGaiAmwZvHP3Kw8COhYO0GvzeQntMLUxEYoHGACEd3ctJR5FbsQwXKXsQf1FIPuGVAK0Soez3GzdugVLApEdRvZvvjpyOp7pNV0x6mir5WFEMsKqCs&X-Amz-Signature=492e0b3f15af905d8b37e79559ff8ec752ba710f2af12b249e7efc4ee4791685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66JGUEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGPUyLxeOAqAiUJny0IsH6wJiPcfUcsuh6C7KCoNmHLyAiAZa98h8QWA69hWK%2BOIFy570FmOP7PZVWYajWvJoJWwQSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMKwLaNZRBrwyfzDc9KtwD%2FljIL%2BcRHHi6tkCMn7%2FfU0q81LuECBOpjMkN9gymV3AnVaz56NMdTEwZPN5vHfJY0ria0%2B5bTyT7hAXrIDfWkvy%2F1vIAJX8cdaKwwjZhkR0fwpDbltCW%2Fkbky%2BWPTvSLMUMUCG8A640vZBxp730al2hZoTZTLUmPiRlPoE%2FiuGxh4D2G1dupxVxijVwYUz8PlPzpdNfY5YbpQ%2F0K6KV%2F3Gt1JftsqWH2DJrtcy5QOmpgPcrWnDNZa9DwAo4o4MLehSxWKgsz82sKJOwoWwAHJZsKz1Owfh0qxi%2BjUJzcRrQW%2B05wY2GNpIp4HulfPaLknSd7wAgC0kl%2BfpiegkJF3XHe9GzDzFUwLeIbweK1SBZWcWERv7GxYqjDcl01AkabZTNnCBuUfSiCjycNGFWqAnD5urnCPHFF587y7t1c6TnZj2huRmMl9XWv8TWJD2ftZZrKP4cvF%2Ff7fFRGSKzpek3hmOOvxHKfHdui1pP13j9z1PQ%2BqEvC2CH4Qup%2BIuve6ImNHIvQRz%2BJ9BRobhUofhJCTvFCGZu%2BjAqtZrdpp%2BZCqi9%2FqXq4hItpdI%2B5VveXPO5Y5nT6BqcCtozQ0W7L60VOz%2Bgl7fd2Gcg%2B5I%2FDKwT33EEFO2lYzlOK7oUwrPnDxAY6pgF0whczqE8YjhV%2Fl1VmPTXlF8Z4Jc00pbXQkUG7iRQNy7wSWTi57tdvZAz3Pa5Sz5V1dFRxCvb0blICDPh9DGG0I7pV5PpIBV0X8MtJSjCPdVJGaiAmwZvHP3Kw8COhYO0GvzeQntMLUxEYoHGACEd3ctJR5FbsQwXKXsQf1FIPuGVAK0Soez3GzdugVLApEdRvZvvjpyOp7pNV0x6mir5WFEMsKqCs&X-Amz-Signature=c101fe0652c9e2ff8d53e28f16337bd8b4d964e764b00c433b0f0d8ed7835551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66JGUEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGPUyLxeOAqAiUJny0IsH6wJiPcfUcsuh6C7KCoNmHLyAiAZa98h8QWA69hWK%2BOIFy570FmOP7PZVWYajWvJoJWwQSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMKwLaNZRBrwyfzDc9KtwD%2FljIL%2BcRHHi6tkCMn7%2FfU0q81LuECBOpjMkN9gymV3AnVaz56NMdTEwZPN5vHfJY0ria0%2B5bTyT7hAXrIDfWkvy%2F1vIAJX8cdaKwwjZhkR0fwpDbltCW%2Fkbky%2BWPTvSLMUMUCG8A640vZBxp730al2hZoTZTLUmPiRlPoE%2FiuGxh4D2G1dupxVxijVwYUz8PlPzpdNfY5YbpQ%2F0K6KV%2F3Gt1JftsqWH2DJrtcy5QOmpgPcrWnDNZa9DwAo4o4MLehSxWKgsz82sKJOwoWwAHJZsKz1Owfh0qxi%2BjUJzcRrQW%2B05wY2GNpIp4HulfPaLknSd7wAgC0kl%2BfpiegkJF3XHe9GzDzFUwLeIbweK1SBZWcWERv7GxYqjDcl01AkabZTNnCBuUfSiCjycNGFWqAnD5urnCPHFF587y7t1c6TnZj2huRmMl9XWv8TWJD2ftZZrKP4cvF%2Ff7fFRGSKzpek3hmOOvxHKfHdui1pP13j9z1PQ%2BqEvC2CH4Qup%2BIuve6ImNHIvQRz%2BJ9BRobhUofhJCTvFCGZu%2BjAqtZrdpp%2BZCqi9%2FqXq4hItpdI%2B5VveXPO5Y5nT6BqcCtozQ0W7L60VOz%2Bgl7fd2Gcg%2B5I%2FDKwT33EEFO2lYzlOK7oUwrPnDxAY6pgF0whczqE8YjhV%2Fl1VmPTXlF8Z4Jc00pbXQkUG7iRQNy7wSWTi57tdvZAz3Pa5Sz5V1dFRxCvb0blICDPh9DGG0I7pV5PpIBV0X8MtJSjCPdVJGaiAmwZvHP3Kw8COhYO0GvzeQntMLUxEYoHGACEd3ctJR5FbsQwXKXsQf1FIPuGVAK0Soez3GzdugVLApEdRvZvvjpyOp7pNV0x6mir5WFEMsKqCs&X-Amz-Signature=a3f1de54e73e4609425fa56c9f4c5b6a52eae9356000661edf3c93cc78f209b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66JGUEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGPUyLxeOAqAiUJny0IsH6wJiPcfUcsuh6C7KCoNmHLyAiAZa98h8QWA69hWK%2BOIFy570FmOP7PZVWYajWvJoJWwQSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMKwLaNZRBrwyfzDc9KtwD%2FljIL%2BcRHHi6tkCMn7%2FfU0q81LuECBOpjMkN9gymV3AnVaz56NMdTEwZPN5vHfJY0ria0%2B5bTyT7hAXrIDfWkvy%2F1vIAJX8cdaKwwjZhkR0fwpDbltCW%2Fkbky%2BWPTvSLMUMUCG8A640vZBxp730al2hZoTZTLUmPiRlPoE%2FiuGxh4D2G1dupxVxijVwYUz8PlPzpdNfY5YbpQ%2F0K6KV%2F3Gt1JftsqWH2DJrtcy5QOmpgPcrWnDNZa9DwAo4o4MLehSxWKgsz82sKJOwoWwAHJZsKz1Owfh0qxi%2BjUJzcRrQW%2B05wY2GNpIp4HulfPaLknSd7wAgC0kl%2BfpiegkJF3XHe9GzDzFUwLeIbweK1SBZWcWERv7GxYqjDcl01AkabZTNnCBuUfSiCjycNGFWqAnD5urnCPHFF587y7t1c6TnZj2huRmMl9XWv8TWJD2ftZZrKP4cvF%2Ff7fFRGSKzpek3hmOOvxHKfHdui1pP13j9z1PQ%2BqEvC2CH4Qup%2BIuve6ImNHIvQRz%2BJ9BRobhUofhJCTvFCGZu%2BjAqtZrdpp%2BZCqi9%2FqXq4hItpdI%2B5VveXPO5Y5nT6BqcCtozQ0W7L60VOz%2Bgl7fd2Gcg%2B5I%2FDKwT33EEFO2lYzlOK7oUwrPnDxAY6pgF0whczqE8YjhV%2Fl1VmPTXlF8Z4Jc00pbXQkUG7iRQNy7wSWTi57tdvZAz3Pa5Sz5V1dFRxCvb0blICDPh9DGG0I7pV5PpIBV0X8MtJSjCPdVJGaiAmwZvHP3Kw8COhYO0GvzeQntMLUxEYoHGACEd3ctJR5FbsQwXKXsQf1FIPuGVAK0Soez3GzdugVLApEdRvZvvjpyOp7pNV0x6mir5WFEMsKqCs&X-Amz-Signature=43eea1f2bd95d49e4285cb80423e54040372f760f50d0b1aaa90f67b7fafb67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66JGUEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGPUyLxeOAqAiUJny0IsH6wJiPcfUcsuh6C7KCoNmHLyAiAZa98h8QWA69hWK%2BOIFy570FmOP7PZVWYajWvJoJWwQSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMKwLaNZRBrwyfzDc9KtwD%2FljIL%2BcRHHi6tkCMn7%2FfU0q81LuECBOpjMkN9gymV3AnVaz56NMdTEwZPN5vHfJY0ria0%2B5bTyT7hAXrIDfWkvy%2F1vIAJX8cdaKwwjZhkR0fwpDbltCW%2Fkbky%2BWPTvSLMUMUCG8A640vZBxp730al2hZoTZTLUmPiRlPoE%2FiuGxh4D2G1dupxVxijVwYUz8PlPzpdNfY5YbpQ%2F0K6KV%2F3Gt1JftsqWH2DJrtcy5QOmpgPcrWnDNZa9DwAo4o4MLehSxWKgsz82sKJOwoWwAHJZsKz1Owfh0qxi%2BjUJzcRrQW%2B05wY2GNpIp4HulfPaLknSd7wAgC0kl%2BfpiegkJF3XHe9GzDzFUwLeIbweK1SBZWcWERv7GxYqjDcl01AkabZTNnCBuUfSiCjycNGFWqAnD5urnCPHFF587y7t1c6TnZj2huRmMl9XWv8TWJD2ftZZrKP4cvF%2Ff7fFRGSKzpek3hmOOvxHKfHdui1pP13j9z1PQ%2BqEvC2CH4Qup%2BIuve6ImNHIvQRz%2BJ9BRobhUofhJCTvFCGZu%2BjAqtZrdpp%2BZCqi9%2FqXq4hItpdI%2B5VveXPO5Y5nT6BqcCtozQ0W7L60VOz%2Bgl7fd2Gcg%2B5I%2FDKwT33EEFO2lYzlOK7oUwrPnDxAY6pgF0whczqE8YjhV%2Fl1VmPTXlF8Z4Jc00pbXQkUG7iRQNy7wSWTi57tdvZAz3Pa5Sz5V1dFRxCvb0blICDPh9DGG0I7pV5PpIBV0X8MtJSjCPdVJGaiAmwZvHP3Kw8COhYO0GvzeQntMLUxEYoHGACEd3ctJR5FbsQwXKXsQf1FIPuGVAK0Soez3GzdugVLApEdRvZvvjpyOp7pNV0x6mir5WFEMsKqCs&X-Amz-Signature=9a01ee2c84184d390ca358f7b3b71da3e519488811013d6dbb883f0632df028a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66JGUEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGPUyLxeOAqAiUJny0IsH6wJiPcfUcsuh6C7KCoNmHLyAiAZa98h8QWA69hWK%2BOIFy570FmOP7PZVWYajWvJoJWwQSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMKwLaNZRBrwyfzDc9KtwD%2FljIL%2BcRHHi6tkCMn7%2FfU0q81LuECBOpjMkN9gymV3AnVaz56NMdTEwZPN5vHfJY0ria0%2B5bTyT7hAXrIDfWkvy%2F1vIAJX8cdaKwwjZhkR0fwpDbltCW%2Fkbky%2BWPTvSLMUMUCG8A640vZBxp730al2hZoTZTLUmPiRlPoE%2FiuGxh4D2G1dupxVxijVwYUz8PlPzpdNfY5YbpQ%2F0K6KV%2F3Gt1JftsqWH2DJrtcy5QOmpgPcrWnDNZa9DwAo4o4MLehSxWKgsz82sKJOwoWwAHJZsKz1Owfh0qxi%2BjUJzcRrQW%2B05wY2GNpIp4HulfPaLknSd7wAgC0kl%2BfpiegkJF3XHe9GzDzFUwLeIbweK1SBZWcWERv7GxYqjDcl01AkabZTNnCBuUfSiCjycNGFWqAnD5urnCPHFF587y7t1c6TnZj2huRmMl9XWv8TWJD2ftZZrKP4cvF%2Ff7fFRGSKzpek3hmOOvxHKfHdui1pP13j9z1PQ%2BqEvC2CH4Qup%2BIuve6ImNHIvQRz%2BJ9BRobhUofhJCTvFCGZu%2BjAqtZrdpp%2BZCqi9%2FqXq4hItpdI%2B5VveXPO5Y5nT6BqcCtozQ0W7L60VOz%2Bgl7fd2Gcg%2B5I%2FDKwT33EEFO2lYzlOK7oUwrPnDxAY6pgF0whczqE8YjhV%2Fl1VmPTXlF8Z4Jc00pbXQkUG7iRQNy7wSWTi57tdvZAz3Pa5Sz5V1dFRxCvb0blICDPh9DGG0I7pV5PpIBV0X8MtJSjCPdVJGaiAmwZvHP3Kw8COhYO0GvzeQntMLUxEYoHGACEd3ctJR5FbsQwXKXsQf1FIPuGVAK0Soez3GzdugVLApEdRvZvvjpyOp7pNV0x6mir5WFEMsKqCs&X-Amz-Signature=c4e3dc873180595d11b358d2388c1b3c4e3de0615f972ca71fc60ee4b66c5c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y66JGUEW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGPUyLxeOAqAiUJny0IsH6wJiPcfUcsuh6C7KCoNmHLyAiAZa98h8QWA69hWK%2BOIFy570FmOP7PZVWYajWvJoJWwQSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMKwLaNZRBrwyfzDc9KtwD%2FljIL%2BcRHHi6tkCMn7%2FfU0q81LuECBOpjMkN9gymV3AnVaz56NMdTEwZPN5vHfJY0ria0%2B5bTyT7hAXrIDfWkvy%2F1vIAJX8cdaKwwjZhkR0fwpDbltCW%2Fkbky%2BWPTvSLMUMUCG8A640vZBxp730al2hZoTZTLUmPiRlPoE%2FiuGxh4D2G1dupxVxijVwYUz8PlPzpdNfY5YbpQ%2F0K6KV%2F3Gt1JftsqWH2DJrtcy5QOmpgPcrWnDNZa9DwAo4o4MLehSxWKgsz82sKJOwoWwAHJZsKz1Owfh0qxi%2BjUJzcRrQW%2B05wY2GNpIp4HulfPaLknSd7wAgC0kl%2BfpiegkJF3XHe9GzDzFUwLeIbweK1SBZWcWERv7GxYqjDcl01AkabZTNnCBuUfSiCjycNGFWqAnD5urnCPHFF587y7t1c6TnZj2huRmMl9XWv8TWJD2ftZZrKP4cvF%2Ff7fFRGSKzpek3hmOOvxHKfHdui1pP13j9z1PQ%2BqEvC2CH4Qup%2BIuve6ImNHIvQRz%2BJ9BRobhUofhJCTvFCGZu%2BjAqtZrdpp%2BZCqi9%2FqXq4hItpdI%2B5VveXPO5Y5nT6BqcCtozQ0W7L60VOz%2Bgl7fd2Gcg%2B5I%2FDKwT33EEFO2lYzlOK7oUwrPnDxAY6pgF0whczqE8YjhV%2Fl1VmPTXlF8Z4Jc00pbXQkUG7iRQNy7wSWTi57tdvZAz3Pa5Sz5V1dFRxCvb0blICDPh9DGG0I7pV5PpIBV0X8MtJSjCPdVJGaiAmwZvHP3Kw8COhYO0GvzeQntMLUxEYoHGACEd3ctJR5FbsQwXKXsQf1FIPuGVAK0Soez3GzdugVLApEdRvZvvjpyOp7pNV0x6mir5WFEMsKqCs&X-Amz-Signature=6f9197ca15418d45a53e5abb6120bedae5f220d6d8cbb69c5afa90f1ee98823b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

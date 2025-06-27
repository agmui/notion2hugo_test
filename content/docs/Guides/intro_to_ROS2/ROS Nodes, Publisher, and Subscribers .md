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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2B4WZA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDU1gKm6yGBej8Au5z6cuiDwJUQO1cGYROZg%2FqQdnoPEAIhANc6zRteiE2prIVVa2tZqYpDT1pcFU0ErhyaFbY4KXCdKv8DCHMQABoMNjM3NDIzMTgzODA1Igxh6f4kzFHddDFa9r8q3APRLxIdZ%2F%2BhM98WChQLBxbOUWxJ3M9sf9EG1pRXSbw32LRnSKBxbmoH1GhRB8j4h7ayK9fWqLXKQ1Xk9d0kqTrrAydXrpat3WXCBq7tv5ml2K%2FWnDpnh5wJfX3l7ZV3n0izwtA0N%2BQCqkyGs3IUpO0uczQN97Dzx%2FIY3KvFRFxGEdLS0XRRu0WApkoO6wOhKSyIypuVh71NlPDw%2FeX6dWTacWz857VinQo4zBQfc1TCPbtp4cGRLz%2FUdD1i6yM9QxTFXgYPF%2FJ46yAn8W5hhIzO0zxpj4Xy3wD2PD6FsDob6CfP253UImq6MHsb3MT6GY7RWDOZVhtgRp4ZeXDao%2BpMH1BlB4ZAI1RhFkN4LJZleBEP%2FG7%2BlReLfA9jGYRNveME4vkRqKKwKUExqjfO0b0IFKXggON44qNzqt3Qx1N9RiZXxusJ1US3T%2FMpigk7c641KZn%2FxPzq4bNhtTQOw9VPvim34jAg8%2B0g4Wmslb5JsYvUGWRUR%2BNZm5GajT7jaxIduzbMpR4vprOttWWKlW%2FxwvwsoEh9UIZQ8UXeR2gZMPeiMFNED43535R2eIjEtA8PridDVM%2BbWBtqsK3qPRZWvzTCSfz5ZFd7aMbDLRJEJz9w1Rw1gKkQ2Q0VoDDk0%2FnCBjqkASuGj07bFhX3ugxROMpeLd3QiZACNjFN07f1ELDxiaH5I%2BPMPlICdbv9d9aqs8vskHIRCUqIy2%2BMY5h7aSl7L%2FEfVhSWr0eb80wSp3bbLwNIiiKX8n1SsVq0eAhOHFST9aHNTYOYUo8JTaX%2BbzdWPZJG5OQbJ5%2BjTPDxIcFvtVsXkKPUS%2FAEJp8cCo0JnZwpAFgN07jcyyANtSe0npaLFcv%2FvunX&X-Amz-Signature=59ca6770c8208a4dd28d90864febddc791a4b7cab38b57753143f63158586e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2B4WZA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDU1gKm6yGBej8Au5z6cuiDwJUQO1cGYROZg%2FqQdnoPEAIhANc6zRteiE2prIVVa2tZqYpDT1pcFU0ErhyaFbY4KXCdKv8DCHMQABoMNjM3NDIzMTgzODA1Igxh6f4kzFHddDFa9r8q3APRLxIdZ%2F%2BhM98WChQLBxbOUWxJ3M9sf9EG1pRXSbw32LRnSKBxbmoH1GhRB8j4h7ayK9fWqLXKQ1Xk9d0kqTrrAydXrpat3WXCBq7tv5ml2K%2FWnDpnh5wJfX3l7ZV3n0izwtA0N%2BQCqkyGs3IUpO0uczQN97Dzx%2FIY3KvFRFxGEdLS0XRRu0WApkoO6wOhKSyIypuVh71NlPDw%2FeX6dWTacWz857VinQo4zBQfc1TCPbtp4cGRLz%2FUdD1i6yM9QxTFXgYPF%2FJ46yAn8W5hhIzO0zxpj4Xy3wD2PD6FsDob6CfP253UImq6MHsb3MT6GY7RWDOZVhtgRp4ZeXDao%2BpMH1BlB4ZAI1RhFkN4LJZleBEP%2FG7%2BlReLfA9jGYRNveME4vkRqKKwKUExqjfO0b0IFKXggON44qNzqt3Qx1N9RiZXxusJ1US3T%2FMpigk7c641KZn%2FxPzq4bNhtTQOw9VPvim34jAg8%2B0g4Wmslb5JsYvUGWRUR%2BNZm5GajT7jaxIduzbMpR4vprOttWWKlW%2FxwvwsoEh9UIZQ8UXeR2gZMPeiMFNED43535R2eIjEtA8PridDVM%2BbWBtqsK3qPRZWvzTCSfz5ZFd7aMbDLRJEJz9w1Rw1gKkQ2Q0VoDDk0%2FnCBjqkASuGj07bFhX3ugxROMpeLd3QiZACNjFN07f1ELDxiaH5I%2BPMPlICdbv9d9aqs8vskHIRCUqIy2%2BMY5h7aSl7L%2FEfVhSWr0eb80wSp3bbLwNIiiKX8n1SsVq0eAhOHFST9aHNTYOYUo8JTaX%2BbzdWPZJG5OQbJ5%2BjTPDxIcFvtVsXkKPUS%2FAEJp8cCo0JnZwpAFgN07jcyyANtSe0npaLFcv%2FvunX&X-Amz-Signature=786eac30457e9c38b96b7546d0d8ee8b5033031fdd4eb8a65a5b19b86fd77b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2B4WZA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDU1gKm6yGBej8Au5z6cuiDwJUQO1cGYROZg%2FqQdnoPEAIhANc6zRteiE2prIVVa2tZqYpDT1pcFU0ErhyaFbY4KXCdKv8DCHMQABoMNjM3NDIzMTgzODA1Igxh6f4kzFHddDFa9r8q3APRLxIdZ%2F%2BhM98WChQLBxbOUWxJ3M9sf9EG1pRXSbw32LRnSKBxbmoH1GhRB8j4h7ayK9fWqLXKQ1Xk9d0kqTrrAydXrpat3WXCBq7tv5ml2K%2FWnDpnh5wJfX3l7ZV3n0izwtA0N%2BQCqkyGs3IUpO0uczQN97Dzx%2FIY3KvFRFxGEdLS0XRRu0WApkoO6wOhKSyIypuVh71NlPDw%2FeX6dWTacWz857VinQo4zBQfc1TCPbtp4cGRLz%2FUdD1i6yM9QxTFXgYPF%2FJ46yAn8W5hhIzO0zxpj4Xy3wD2PD6FsDob6CfP253UImq6MHsb3MT6GY7RWDOZVhtgRp4ZeXDao%2BpMH1BlB4ZAI1RhFkN4LJZleBEP%2FG7%2BlReLfA9jGYRNveME4vkRqKKwKUExqjfO0b0IFKXggON44qNzqt3Qx1N9RiZXxusJ1US3T%2FMpigk7c641KZn%2FxPzq4bNhtTQOw9VPvim34jAg8%2B0g4Wmslb5JsYvUGWRUR%2BNZm5GajT7jaxIduzbMpR4vprOttWWKlW%2FxwvwsoEh9UIZQ8UXeR2gZMPeiMFNED43535R2eIjEtA8PridDVM%2BbWBtqsK3qPRZWvzTCSfz5ZFd7aMbDLRJEJz9w1Rw1gKkQ2Q0VoDDk0%2FnCBjqkASuGj07bFhX3ugxROMpeLd3QiZACNjFN07f1ELDxiaH5I%2BPMPlICdbv9d9aqs8vskHIRCUqIy2%2BMY5h7aSl7L%2FEfVhSWr0eb80wSp3bbLwNIiiKX8n1SsVq0eAhOHFST9aHNTYOYUo8JTaX%2BbzdWPZJG5OQbJ5%2BjTPDxIcFvtVsXkKPUS%2FAEJp8cCo0JnZwpAFgN07jcyyANtSe0npaLFcv%2FvunX&X-Amz-Signature=c29a79fd3071678ed70edc4194431bbf2e587766d69a221cafc02538bf806c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2B4WZA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDU1gKm6yGBej8Au5z6cuiDwJUQO1cGYROZg%2FqQdnoPEAIhANc6zRteiE2prIVVa2tZqYpDT1pcFU0ErhyaFbY4KXCdKv8DCHMQABoMNjM3NDIzMTgzODA1Igxh6f4kzFHddDFa9r8q3APRLxIdZ%2F%2BhM98WChQLBxbOUWxJ3M9sf9EG1pRXSbw32LRnSKBxbmoH1GhRB8j4h7ayK9fWqLXKQ1Xk9d0kqTrrAydXrpat3WXCBq7tv5ml2K%2FWnDpnh5wJfX3l7ZV3n0izwtA0N%2BQCqkyGs3IUpO0uczQN97Dzx%2FIY3KvFRFxGEdLS0XRRu0WApkoO6wOhKSyIypuVh71NlPDw%2FeX6dWTacWz857VinQo4zBQfc1TCPbtp4cGRLz%2FUdD1i6yM9QxTFXgYPF%2FJ46yAn8W5hhIzO0zxpj4Xy3wD2PD6FsDob6CfP253UImq6MHsb3MT6GY7RWDOZVhtgRp4ZeXDao%2BpMH1BlB4ZAI1RhFkN4LJZleBEP%2FG7%2BlReLfA9jGYRNveME4vkRqKKwKUExqjfO0b0IFKXggON44qNzqt3Qx1N9RiZXxusJ1US3T%2FMpigk7c641KZn%2FxPzq4bNhtTQOw9VPvim34jAg8%2B0g4Wmslb5JsYvUGWRUR%2BNZm5GajT7jaxIduzbMpR4vprOttWWKlW%2FxwvwsoEh9UIZQ8UXeR2gZMPeiMFNED43535R2eIjEtA8PridDVM%2BbWBtqsK3qPRZWvzTCSfz5ZFd7aMbDLRJEJz9w1Rw1gKkQ2Q0VoDDk0%2FnCBjqkASuGj07bFhX3ugxROMpeLd3QiZACNjFN07f1ELDxiaH5I%2BPMPlICdbv9d9aqs8vskHIRCUqIy2%2BMY5h7aSl7L%2FEfVhSWr0eb80wSp3bbLwNIiiKX8n1SsVq0eAhOHFST9aHNTYOYUo8JTaX%2BbzdWPZJG5OQbJ5%2BjTPDxIcFvtVsXkKPUS%2FAEJp8cCo0JnZwpAFgN07jcyyANtSe0npaLFcv%2FvunX&X-Amz-Signature=06b8915f36beae764644f09c6adc0196927cd3a9843de84ee1b83f494857ca66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2B4WZA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDU1gKm6yGBej8Au5z6cuiDwJUQO1cGYROZg%2FqQdnoPEAIhANc6zRteiE2prIVVa2tZqYpDT1pcFU0ErhyaFbY4KXCdKv8DCHMQABoMNjM3NDIzMTgzODA1Igxh6f4kzFHddDFa9r8q3APRLxIdZ%2F%2BhM98WChQLBxbOUWxJ3M9sf9EG1pRXSbw32LRnSKBxbmoH1GhRB8j4h7ayK9fWqLXKQ1Xk9d0kqTrrAydXrpat3WXCBq7tv5ml2K%2FWnDpnh5wJfX3l7ZV3n0izwtA0N%2BQCqkyGs3IUpO0uczQN97Dzx%2FIY3KvFRFxGEdLS0XRRu0WApkoO6wOhKSyIypuVh71NlPDw%2FeX6dWTacWz857VinQo4zBQfc1TCPbtp4cGRLz%2FUdD1i6yM9QxTFXgYPF%2FJ46yAn8W5hhIzO0zxpj4Xy3wD2PD6FsDob6CfP253UImq6MHsb3MT6GY7RWDOZVhtgRp4ZeXDao%2BpMH1BlB4ZAI1RhFkN4LJZleBEP%2FG7%2BlReLfA9jGYRNveME4vkRqKKwKUExqjfO0b0IFKXggON44qNzqt3Qx1N9RiZXxusJ1US3T%2FMpigk7c641KZn%2FxPzq4bNhtTQOw9VPvim34jAg8%2B0g4Wmslb5JsYvUGWRUR%2BNZm5GajT7jaxIduzbMpR4vprOttWWKlW%2FxwvwsoEh9UIZQ8UXeR2gZMPeiMFNED43535R2eIjEtA8PridDVM%2BbWBtqsK3qPRZWvzTCSfz5ZFd7aMbDLRJEJz9w1Rw1gKkQ2Q0VoDDk0%2FnCBjqkASuGj07bFhX3ugxROMpeLd3QiZACNjFN07f1ELDxiaH5I%2BPMPlICdbv9d9aqs8vskHIRCUqIy2%2BMY5h7aSl7L%2FEfVhSWr0eb80wSp3bbLwNIiiKX8n1SsVq0eAhOHFST9aHNTYOYUo8JTaX%2BbzdWPZJG5OQbJ5%2BjTPDxIcFvtVsXkKPUS%2FAEJp8cCo0JnZwpAFgN07jcyyANtSe0npaLFcv%2FvunX&X-Amz-Signature=e9fcbe270e316c12257d03f798da892d96b2a66ae7f3cacbc003699a2e01a363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2B4WZA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDU1gKm6yGBej8Au5z6cuiDwJUQO1cGYROZg%2FqQdnoPEAIhANc6zRteiE2prIVVa2tZqYpDT1pcFU0ErhyaFbY4KXCdKv8DCHMQABoMNjM3NDIzMTgzODA1Igxh6f4kzFHddDFa9r8q3APRLxIdZ%2F%2BhM98WChQLBxbOUWxJ3M9sf9EG1pRXSbw32LRnSKBxbmoH1GhRB8j4h7ayK9fWqLXKQ1Xk9d0kqTrrAydXrpat3WXCBq7tv5ml2K%2FWnDpnh5wJfX3l7ZV3n0izwtA0N%2BQCqkyGs3IUpO0uczQN97Dzx%2FIY3KvFRFxGEdLS0XRRu0WApkoO6wOhKSyIypuVh71NlPDw%2FeX6dWTacWz857VinQo4zBQfc1TCPbtp4cGRLz%2FUdD1i6yM9QxTFXgYPF%2FJ46yAn8W5hhIzO0zxpj4Xy3wD2PD6FsDob6CfP253UImq6MHsb3MT6GY7RWDOZVhtgRp4ZeXDao%2BpMH1BlB4ZAI1RhFkN4LJZleBEP%2FG7%2BlReLfA9jGYRNveME4vkRqKKwKUExqjfO0b0IFKXggON44qNzqt3Qx1N9RiZXxusJ1US3T%2FMpigk7c641KZn%2FxPzq4bNhtTQOw9VPvim34jAg8%2B0g4Wmslb5JsYvUGWRUR%2BNZm5GajT7jaxIduzbMpR4vprOttWWKlW%2FxwvwsoEh9UIZQ8UXeR2gZMPeiMFNED43535R2eIjEtA8PridDVM%2BbWBtqsK3qPRZWvzTCSfz5ZFd7aMbDLRJEJz9w1Rw1gKkQ2Q0VoDDk0%2FnCBjqkASuGj07bFhX3ugxROMpeLd3QiZACNjFN07f1ELDxiaH5I%2BPMPlICdbv9d9aqs8vskHIRCUqIy2%2BMY5h7aSl7L%2FEfVhSWr0eb80wSp3bbLwNIiiKX8n1SsVq0eAhOHFST9aHNTYOYUo8JTaX%2BbzdWPZJG5OQbJ5%2BjTPDxIcFvtVsXkKPUS%2FAEJp8cCo0JnZwpAFgN07jcyyANtSe0npaLFcv%2FvunX&X-Amz-Signature=0b0dafc2943be1ad372f1d77a1e2f39332d1102518932b5e0a60ce806e0a87d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2B4WZA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDU1gKm6yGBej8Au5z6cuiDwJUQO1cGYROZg%2FqQdnoPEAIhANc6zRteiE2prIVVa2tZqYpDT1pcFU0ErhyaFbY4KXCdKv8DCHMQABoMNjM3NDIzMTgzODA1Igxh6f4kzFHddDFa9r8q3APRLxIdZ%2F%2BhM98WChQLBxbOUWxJ3M9sf9EG1pRXSbw32LRnSKBxbmoH1GhRB8j4h7ayK9fWqLXKQ1Xk9d0kqTrrAydXrpat3WXCBq7tv5ml2K%2FWnDpnh5wJfX3l7ZV3n0izwtA0N%2BQCqkyGs3IUpO0uczQN97Dzx%2FIY3KvFRFxGEdLS0XRRu0WApkoO6wOhKSyIypuVh71NlPDw%2FeX6dWTacWz857VinQo4zBQfc1TCPbtp4cGRLz%2FUdD1i6yM9QxTFXgYPF%2FJ46yAn8W5hhIzO0zxpj4Xy3wD2PD6FsDob6CfP253UImq6MHsb3MT6GY7RWDOZVhtgRp4ZeXDao%2BpMH1BlB4ZAI1RhFkN4LJZleBEP%2FG7%2BlReLfA9jGYRNveME4vkRqKKwKUExqjfO0b0IFKXggON44qNzqt3Qx1N9RiZXxusJ1US3T%2FMpigk7c641KZn%2FxPzq4bNhtTQOw9VPvim34jAg8%2B0g4Wmslb5JsYvUGWRUR%2BNZm5GajT7jaxIduzbMpR4vprOttWWKlW%2FxwvwsoEh9UIZQ8UXeR2gZMPeiMFNED43535R2eIjEtA8PridDVM%2BbWBtqsK3qPRZWvzTCSfz5ZFd7aMbDLRJEJz9w1Rw1gKkQ2Q0VoDDk0%2FnCBjqkASuGj07bFhX3ugxROMpeLd3QiZACNjFN07f1ELDxiaH5I%2BPMPlICdbv9d9aqs8vskHIRCUqIy2%2BMY5h7aSl7L%2FEfVhSWr0eb80wSp3bbLwNIiiKX8n1SsVq0eAhOHFST9aHNTYOYUo8JTaX%2BbzdWPZJG5OQbJ5%2BjTPDxIcFvtVsXkKPUS%2FAEJp8cCo0JnZwpAFgN07jcyyANtSe0npaLFcv%2FvunX&X-Amz-Signature=79d69f84b8e6ee09ea0499aa19c8dfc78a769e32e1433482c19444176b56dd73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2B4WZA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDU1gKm6yGBej8Au5z6cuiDwJUQO1cGYROZg%2FqQdnoPEAIhANc6zRteiE2prIVVa2tZqYpDT1pcFU0ErhyaFbY4KXCdKv8DCHMQABoMNjM3NDIzMTgzODA1Igxh6f4kzFHddDFa9r8q3APRLxIdZ%2F%2BhM98WChQLBxbOUWxJ3M9sf9EG1pRXSbw32LRnSKBxbmoH1GhRB8j4h7ayK9fWqLXKQ1Xk9d0kqTrrAydXrpat3WXCBq7tv5ml2K%2FWnDpnh5wJfX3l7ZV3n0izwtA0N%2BQCqkyGs3IUpO0uczQN97Dzx%2FIY3KvFRFxGEdLS0XRRu0WApkoO6wOhKSyIypuVh71NlPDw%2FeX6dWTacWz857VinQo4zBQfc1TCPbtp4cGRLz%2FUdD1i6yM9QxTFXgYPF%2FJ46yAn8W5hhIzO0zxpj4Xy3wD2PD6FsDob6CfP253UImq6MHsb3MT6GY7RWDOZVhtgRp4ZeXDao%2BpMH1BlB4ZAI1RhFkN4LJZleBEP%2FG7%2BlReLfA9jGYRNveME4vkRqKKwKUExqjfO0b0IFKXggON44qNzqt3Qx1N9RiZXxusJ1US3T%2FMpigk7c641KZn%2FxPzq4bNhtTQOw9VPvim34jAg8%2B0g4Wmslb5JsYvUGWRUR%2BNZm5GajT7jaxIduzbMpR4vprOttWWKlW%2FxwvwsoEh9UIZQ8UXeR2gZMPeiMFNED43535R2eIjEtA8PridDVM%2BbWBtqsK3qPRZWvzTCSfz5ZFd7aMbDLRJEJz9w1Rw1gKkQ2Q0VoDDk0%2FnCBjqkASuGj07bFhX3ugxROMpeLd3QiZACNjFN07f1ELDxiaH5I%2BPMPlICdbv9d9aqs8vskHIRCUqIy2%2BMY5h7aSl7L%2FEfVhSWr0eb80wSp3bbLwNIiiKX8n1SsVq0eAhOHFST9aHNTYOYUo8JTaX%2BbzdWPZJG5OQbJ5%2BjTPDxIcFvtVsXkKPUS%2FAEJp8cCo0JnZwpAFgN07jcyyANtSe0npaLFcv%2FvunX&X-Amz-Signature=cc0ab027aeb49b2d7e40f48dbbfce03159ba09a37d51b05aa09f88042218e820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHATPL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0uUGwR0x7Phw%2F%2BEHdDfVrYBBktPMEfXnSM6eeEsKpRAiB%2BTMTCVP2jVr8kYtRNlGsG1rYBMAVi8o9dJm5%2BPsNJZiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5s%2B43XbAB5OYiQcKtwDFK96MAld8E%2FBWyJthgF45ttWb4%2BKK5KnW0hPf9dM6oCLP%2FHrHjHRw%2FOV1YAvio6gYx%2Fxh9qjzsjrxoeWawIpj%2BzPbPRjQcqUtsDZitOnr14wNbPbbXzR005WbAeZ%2FonqwfOvEG%2BkuRvmS0UUDiZnMfskf1K2crYoO7osyyHw8%2BXJY8iKo23htQSdI1RtIO7%2FxDfV0WNggm9VVtGnBoXQrhkeOYP%2BXSshQa64oj1%2F3rQZl6inlXAzP%2F2aU3A5rdP%2F98YaOiIpkutlA6K7C50htYAc6esOzHBpkdnL6VZrQrYcGYAQj849Ag9Ki1CPVNITLfRg0lcbfbCe5Y9t%2B3lbWtiBJaWR68IB2uH1bdTMutR4J3lzAUszPIGZb5TJSHzQAdvzlRLLdbhiHNk9sodDFXhQ4wLkkLcXGL6w4vUuAVkkjCxh6lCB6%2FZNVMwhiXjsTRJoAKiirt3wYyANVwdU7WCDDT8ZjRe0gAOFFqeehAGH0y1gFnDwGMJ38CL7GXF7LGcJfyFqLH1d3GwphxJQEI5RdeEovzzO2QrfvaMFhNPCNjZOZds457dtIs81Y5BB4EIhI8eVnOkV2OkAQJg51wkGPnakF%2BjyuibTcphKs4EjSI84KvNoRaHqaUMwiMfvvAY6pgFMgAHwBG2nxKvPjcgPl8KyK2YT51J3S2aoN34v%2FrFnm5XrRFW8cbfPJclzj8rydQH7p4CsSCDveHD%2FInGh0vDPaNUyaSVYnsNxJnViDzomKrdv6V36hozgvyu9LXhM%2Fosdqkqs3sYymBmUPlU2Flv9ROntuGiF65cQ5CDJ18t6rO27CvRp%2B1o1giKDzhCSc17lKyE%2BNmjTZtyDvo%2B4KZP%2F42iy6ABS&X-Amz-Signature=afd24dd29e84b61900b0b14e9d3d2761509fb923d98dab3b89d82698e6e5bfb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHATPL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0uUGwR0x7Phw%2F%2BEHdDfVrYBBktPMEfXnSM6eeEsKpRAiB%2BTMTCVP2jVr8kYtRNlGsG1rYBMAVi8o9dJm5%2BPsNJZiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5s%2B43XbAB5OYiQcKtwDFK96MAld8E%2FBWyJthgF45ttWb4%2BKK5KnW0hPf9dM6oCLP%2FHrHjHRw%2FOV1YAvio6gYx%2Fxh9qjzsjrxoeWawIpj%2BzPbPRjQcqUtsDZitOnr14wNbPbbXzR005WbAeZ%2FonqwfOvEG%2BkuRvmS0UUDiZnMfskf1K2crYoO7osyyHw8%2BXJY8iKo23htQSdI1RtIO7%2FxDfV0WNggm9VVtGnBoXQrhkeOYP%2BXSshQa64oj1%2F3rQZl6inlXAzP%2F2aU3A5rdP%2F98YaOiIpkutlA6K7C50htYAc6esOzHBpkdnL6VZrQrYcGYAQj849Ag9Ki1CPVNITLfRg0lcbfbCe5Y9t%2B3lbWtiBJaWR68IB2uH1bdTMutR4J3lzAUszPIGZb5TJSHzQAdvzlRLLdbhiHNk9sodDFXhQ4wLkkLcXGL6w4vUuAVkkjCxh6lCB6%2FZNVMwhiXjsTRJoAKiirt3wYyANVwdU7WCDDT8ZjRe0gAOFFqeehAGH0y1gFnDwGMJ38CL7GXF7LGcJfyFqLH1d3GwphxJQEI5RdeEovzzO2QrfvaMFhNPCNjZOZds457dtIs81Y5BB4EIhI8eVnOkV2OkAQJg51wkGPnakF%2BjyuibTcphKs4EjSI84KvNoRaHqaUMwiMfvvAY6pgFMgAHwBG2nxKvPjcgPl8KyK2YT51J3S2aoN34v%2FrFnm5XrRFW8cbfPJclzj8rydQH7p4CsSCDveHD%2FInGh0vDPaNUyaSVYnsNxJnViDzomKrdv6V36hozgvyu9LXhM%2Fosdqkqs3sYymBmUPlU2Flv9ROntuGiF65cQ5CDJ18t6rO27CvRp%2B1o1giKDzhCSc17lKyE%2BNmjTZtyDvo%2B4KZP%2F42iy6ABS&X-Amz-Signature=15e741581aca7656dcfeeca9c409830d5bf9623f065ed4dd9d79276712d7bc6f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHATPL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0uUGwR0x7Phw%2F%2BEHdDfVrYBBktPMEfXnSM6eeEsKpRAiB%2BTMTCVP2jVr8kYtRNlGsG1rYBMAVi8o9dJm5%2BPsNJZiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5s%2B43XbAB5OYiQcKtwDFK96MAld8E%2FBWyJthgF45ttWb4%2BKK5KnW0hPf9dM6oCLP%2FHrHjHRw%2FOV1YAvio6gYx%2Fxh9qjzsjrxoeWawIpj%2BzPbPRjQcqUtsDZitOnr14wNbPbbXzR005WbAeZ%2FonqwfOvEG%2BkuRvmS0UUDiZnMfskf1K2crYoO7osyyHw8%2BXJY8iKo23htQSdI1RtIO7%2FxDfV0WNggm9VVtGnBoXQrhkeOYP%2BXSshQa64oj1%2F3rQZl6inlXAzP%2F2aU3A5rdP%2F98YaOiIpkutlA6K7C50htYAc6esOzHBpkdnL6VZrQrYcGYAQj849Ag9Ki1CPVNITLfRg0lcbfbCe5Y9t%2B3lbWtiBJaWR68IB2uH1bdTMutR4J3lzAUszPIGZb5TJSHzQAdvzlRLLdbhiHNk9sodDFXhQ4wLkkLcXGL6w4vUuAVkkjCxh6lCB6%2FZNVMwhiXjsTRJoAKiirt3wYyANVwdU7WCDDT8ZjRe0gAOFFqeehAGH0y1gFnDwGMJ38CL7GXF7LGcJfyFqLH1d3GwphxJQEI5RdeEovzzO2QrfvaMFhNPCNjZOZds457dtIs81Y5BB4EIhI8eVnOkV2OkAQJg51wkGPnakF%2BjyuibTcphKs4EjSI84KvNoRaHqaUMwiMfvvAY6pgFMgAHwBG2nxKvPjcgPl8KyK2YT51J3S2aoN34v%2FrFnm5XrRFW8cbfPJclzj8rydQH7p4CsSCDveHD%2FInGh0vDPaNUyaSVYnsNxJnViDzomKrdv6V36hozgvyu9LXhM%2Fosdqkqs3sYymBmUPlU2Flv9ROntuGiF65cQ5CDJ18t6rO27CvRp%2B1o1giKDzhCSc17lKyE%2BNmjTZtyDvo%2B4KZP%2F42iy6ABS&X-Amz-Signature=f31d26e1b74c151bcc5e4e88659d9831876ca688a6a7eec8136c11e94cee4444&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHATPL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0uUGwR0x7Phw%2F%2BEHdDfVrYBBktPMEfXnSM6eeEsKpRAiB%2BTMTCVP2jVr8kYtRNlGsG1rYBMAVi8o9dJm5%2BPsNJZiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5s%2B43XbAB5OYiQcKtwDFK96MAld8E%2FBWyJthgF45ttWb4%2BKK5KnW0hPf9dM6oCLP%2FHrHjHRw%2FOV1YAvio6gYx%2Fxh9qjzsjrxoeWawIpj%2BzPbPRjQcqUtsDZitOnr14wNbPbbXzR005WbAeZ%2FonqwfOvEG%2BkuRvmS0UUDiZnMfskf1K2crYoO7osyyHw8%2BXJY8iKo23htQSdI1RtIO7%2FxDfV0WNggm9VVtGnBoXQrhkeOYP%2BXSshQa64oj1%2F3rQZl6inlXAzP%2F2aU3A5rdP%2F98YaOiIpkutlA6K7C50htYAc6esOzHBpkdnL6VZrQrYcGYAQj849Ag9Ki1CPVNITLfRg0lcbfbCe5Y9t%2B3lbWtiBJaWR68IB2uH1bdTMutR4J3lzAUszPIGZb5TJSHzQAdvzlRLLdbhiHNk9sodDFXhQ4wLkkLcXGL6w4vUuAVkkjCxh6lCB6%2FZNVMwhiXjsTRJoAKiirt3wYyANVwdU7WCDDT8ZjRe0gAOFFqeehAGH0y1gFnDwGMJ38CL7GXF7LGcJfyFqLH1d3GwphxJQEI5RdeEovzzO2QrfvaMFhNPCNjZOZds457dtIs81Y5BB4EIhI8eVnOkV2OkAQJg51wkGPnakF%2BjyuibTcphKs4EjSI84KvNoRaHqaUMwiMfvvAY6pgFMgAHwBG2nxKvPjcgPl8KyK2YT51J3S2aoN34v%2FrFnm5XrRFW8cbfPJclzj8rydQH7p4CsSCDveHD%2FInGh0vDPaNUyaSVYnsNxJnViDzomKrdv6V36hozgvyu9LXhM%2Fosdqkqs3sYymBmUPlU2Flv9ROntuGiF65cQ5CDJ18t6rO27CvRp%2B1o1giKDzhCSc17lKyE%2BNmjTZtyDvo%2B4KZP%2F42iy6ABS&X-Amz-Signature=50f8fa2a9a4a705cc8e0b1bba09fd2e13f8ce3712068c74ba8c94bc5df485060&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHATPL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0uUGwR0x7Phw%2F%2BEHdDfVrYBBktPMEfXnSM6eeEsKpRAiB%2BTMTCVP2jVr8kYtRNlGsG1rYBMAVi8o9dJm5%2BPsNJZiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5s%2B43XbAB5OYiQcKtwDFK96MAld8E%2FBWyJthgF45ttWb4%2BKK5KnW0hPf9dM6oCLP%2FHrHjHRw%2FOV1YAvio6gYx%2Fxh9qjzsjrxoeWawIpj%2BzPbPRjQcqUtsDZitOnr14wNbPbbXzR005WbAeZ%2FonqwfOvEG%2BkuRvmS0UUDiZnMfskf1K2crYoO7osyyHw8%2BXJY8iKo23htQSdI1RtIO7%2FxDfV0WNggm9VVtGnBoXQrhkeOYP%2BXSshQa64oj1%2F3rQZl6inlXAzP%2F2aU3A5rdP%2F98YaOiIpkutlA6K7C50htYAc6esOzHBpkdnL6VZrQrYcGYAQj849Ag9Ki1CPVNITLfRg0lcbfbCe5Y9t%2B3lbWtiBJaWR68IB2uH1bdTMutR4J3lzAUszPIGZb5TJSHzQAdvzlRLLdbhiHNk9sodDFXhQ4wLkkLcXGL6w4vUuAVkkjCxh6lCB6%2FZNVMwhiXjsTRJoAKiirt3wYyANVwdU7WCDDT8ZjRe0gAOFFqeehAGH0y1gFnDwGMJ38CL7GXF7LGcJfyFqLH1d3GwphxJQEI5RdeEovzzO2QrfvaMFhNPCNjZOZds457dtIs81Y5BB4EIhI8eVnOkV2OkAQJg51wkGPnakF%2BjyuibTcphKs4EjSI84KvNoRaHqaUMwiMfvvAY6pgFMgAHwBG2nxKvPjcgPl8KyK2YT51J3S2aoN34v%2FrFnm5XrRFW8cbfPJclzj8rydQH7p4CsSCDveHD%2FInGh0vDPaNUyaSVYnsNxJnViDzomKrdv6V36hozgvyu9LXhM%2Fosdqkqs3sYymBmUPlU2Flv9ROntuGiF65cQ5CDJ18t6rO27CvRp%2B1o1giKDzhCSc17lKyE%2BNmjTZtyDvo%2B4KZP%2F42iy6ABS&X-Amz-Signature=c4c77d24ef391c9fb2b195ac4042a681fc82567d190d044c1a45081b1ebe4db6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHATPL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0uUGwR0x7Phw%2F%2BEHdDfVrYBBktPMEfXnSM6eeEsKpRAiB%2BTMTCVP2jVr8kYtRNlGsG1rYBMAVi8o9dJm5%2BPsNJZiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5s%2B43XbAB5OYiQcKtwDFK96MAld8E%2FBWyJthgF45ttWb4%2BKK5KnW0hPf9dM6oCLP%2FHrHjHRw%2FOV1YAvio6gYx%2Fxh9qjzsjrxoeWawIpj%2BzPbPRjQcqUtsDZitOnr14wNbPbbXzR005WbAeZ%2FonqwfOvEG%2BkuRvmS0UUDiZnMfskf1K2crYoO7osyyHw8%2BXJY8iKo23htQSdI1RtIO7%2FxDfV0WNggm9VVtGnBoXQrhkeOYP%2BXSshQa64oj1%2F3rQZl6inlXAzP%2F2aU3A5rdP%2F98YaOiIpkutlA6K7C50htYAc6esOzHBpkdnL6VZrQrYcGYAQj849Ag9Ki1CPVNITLfRg0lcbfbCe5Y9t%2B3lbWtiBJaWR68IB2uH1bdTMutR4J3lzAUszPIGZb5TJSHzQAdvzlRLLdbhiHNk9sodDFXhQ4wLkkLcXGL6w4vUuAVkkjCxh6lCB6%2FZNVMwhiXjsTRJoAKiirt3wYyANVwdU7WCDDT8ZjRe0gAOFFqeehAGH0y1gFnDwGMJ38CL7GXF7LGcJfyFqLH1d3GwphxJQEI5RdeEovzzO2QrfvaMFhNPCNjZOZds457dtIs81Y5BB4EIhI8eVnOkV2OkAQJg51wkGPnakF%2BjyuibTcphKs4EjSI84KvNoRaHqaUMwiMfvvAY6pgFMgAHwBG2nxKvPjcgPl8KyK2YT51J3S2aoN34v%2FrFnm5XrRFW8cbfPJclzj8rydQH7p4CsSCDveHD%2FInGh0vDPaNUyaSVYnsNxJnViDzomKrdv6V36hozgvyu9LXhM%2Fosdqkqs3sYymBmUPlU2Flv9ROntuGiF65cQ5CDJ18t6rO27CvRp%2B1o1giKDzhCSc17lKyE%2BNmjTZtyDvo%2B4KZP%2F42iy6ABS&X-Amz-Signature=7cb96a096fb16893f5345d1589f9c6d1675cb193683f8646a56e207d3ef71d99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHATPL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0uUGwR0x7Phw%2F%2BEHdDfVrYBBktPMEfXnSM6eeEsKpRAiB%2BTMTCVP2jVr8kYtRNlGsG1rYBMAVi8o9dJm5%2BPsNJZiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5s%2B43XbAB5OYiQcKtwDFK96MAld8E%2FBWyJthgF45ttWb4%2BKK5KnW0hPf9dM6oCLP%2FHrHjHRw%2FOV1YAvio6gYx%2Fxh9qjzsjrxoeWawIpj%2BzPbPRjQcqUtsDZitOnr14wNbPbbXzR005WbAeZ%2FonqwfOvEG%2BkuRvmS0UUDiZnMfskf1K2crYoO7osyyHw8%2BXJY8iKo23htQSdI1RtIO7%2FxDfV0WNggm9VVtGnBoXQrhkeOYP%2BXSshQa64oj1%2F3rQZl6inlXAzP%2F2aU3A5rdP%2F98YaOiIpkutlA6K7C50htYAc6esOzHBpkdnL6VZrQrYcGYAQj849Ag9Ki1CPVNITLfRg0lcbfbCe5Y9t%2B3lbWtiBJaWR68IB2uH1bdTMutR4J3lzAUszPIGZb5TJSHzQAdvzlRLLdbhiHNk9sodDFXhQ4wLkkLcXGL6w4vUuAVkkjCxh6lCB6%2FZNVMwhiXjsTRJoAKiirt3wYyANVwdU7WCDDT8ZjRe0gAOFFqeehAGH0y1gFnDwGMJ38CL7GXF7LGcJfyFqLH1d3GwphxJQEI5RdeEovzzO2QrfvaMFhNPCNjZOZds457dtIs81Y5BB4EIhI8eVnOkV2OkAQJg51wkGPnakF%2BjyuibTcphKs4EjSI84KvNoRaHqaUMwiMfvvAY6pgFMgAHwBG2nxKvPjcgPl8KyK2YT51J3S2aoN34v%2FrFnm5XrRFW8cbfPJclzj8rydQH7p4CsSCDveHD%2FInGh0vDPaNUyaSVYnsNxJnViDzomKrdv6V36hozgvyu9LXhM%2Fosdqkqs3sYymBmUPlU2Flv9ROntuGiF65cQ5CDJ18t6rO27CvRp%2B1o1giKDzhCSc17lKyE%2BNmjTZtyDvo%2B4KZP%2F42iy6ABS&X-Amz-Signature=e5e7c3082f55a36e83b6d7ef3fc237e8954425c5b456f6403607e0886f3260fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHATPL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0uUGwR0x7Phw%2F%2BEHdDfVrYBBktPMEfXnSM6eeEsKpRAiB%2BTMTCVP2jVr8kYtRNlGsG1rYBMAVi8o9dJm5%2BPsNJZiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5s%2B43XbAB5OYiQcKtwDFK96MAld8E%2FBWyJthgF45ttWb4%2BKK5KnW0hPf9dM6oCLP%2FHrHjHRw%2FOV1YAvio6gYx%2Fxh9qjzsjrxoeWawIpj%2BzPbPRjQcqUtsDZitOnr14wNbPbbXzR005WbAeZ%2FonqwfOvEG%2BkuRvmS0UUDiZnMfskf1K2crYoO7osyyHw8%2BXJY8iKo23htQSdI1RtIO7%2FxDfV0WNggm9VVtGnBoXQrhkeOYP%2BXSshQa64oj1%2F3rQZl6inlXAzP%2F2aU3A5rdP%2F98YaOiIpkutlA6K7C50htYAc6esOzHBpkdnL6VZrQrYcGYAQj849Ag9Ki1CPVNITLfRg0lcbfbCe5Y9t%2B3lbWtiBJaWR68IB2uH1bdTMutR4J3lzAUszPIGZb5TJSHzQAdvzlRLLdbhiHNk9sodDFXhQ4wLkkLcXGL6w4vUuAVkkjCxh6lCB6%2FZNVMwhiXjsTRJoAKiirt3wYyANVwdU7WCDDT8ZjRe0gAOFFqeehAGH0y1gFnDwGMJ38CL7GXF7LGcJfyFqLH1d3GwphxJQEI5RdeEovzzO2QrfvaMFhNPCNjZOZds457dtIs81Y5BB4EIhI8eVnOkV2OkAQJg51wkGPnakF%2BjyuibTcphKs4EjSI84KvNoRaHqaUMwiMfvvAY6pgFMgAHwBG2nxKvPjcgPl8KyK2YT51J3S2aoN34v%2FrFnm5XrRFW8cbfPJclzj8rydQH7p4CsSCDveHD%2FInGh0vDPaNUyaSVYnsNxJnViDzomKrdv6V36hozgvyu9LXhM%2Fosdqkqs3sYymBmUPlU2Flv9ROntuGiF65cQ5CDJ18t6rO27CvRp%2B1o1giKDzhCSc17lKyE%2BNmjTZtyDvo%2B4KZP%2F42iy6ABS&X-Amz-Signature=79c8e8ab479c82e3e0082d3f89c1f5eed67e964b1231ecbce176ae001e3ee4ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

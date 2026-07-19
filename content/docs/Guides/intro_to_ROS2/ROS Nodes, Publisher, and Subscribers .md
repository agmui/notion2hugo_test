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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMFHKLW%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFAH6CnqA2AI9%2BNrDusMCpuvt6ld6JEM5vgS0%2F7cLu2wIgWU2vhrZks6z9nF2Dz7SVGCTCrMY4DdP8FYzdMMOg8OIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPhCwReG5Wfd4sFbSrcAxTCdi%2FfjSr2qfwV9CuCnxIazGtoQJ2BDxjm%2B9HAFNyPFTKXbA%2Fnb8TxYw11Wqf%2Bd4P8WxoZsjUp7Px9nXtMCtnmdaQ6E3nH4B4EwUnhEqiWZaFLINbUUFDZx5NZVWshDTsrotdqTfvE33OjTZaxgcztZuBWR%2FpCWBZpjh4GT1o4MmFhdrbRFZCs5qIWVBou97SSEDBskwmA%2Boud2qpjfRO1k1M9dgbeeWGTBvefm7DEd%2BPJKTVcavhBWAXRzEecH1GA2MagRDNMuA2t14CREYaZZvRhbi3eNQCmzkBKZzlpMMc1byIGvt%2B41U4I6NeyMoeCv483%2FRwhH99SytPB5nvYANxL1JSVlEotVsvCJvZwZhtf08lpw1eFSHKgSKc7Hmm8NzcyGxfLwYr%2BIxbbIR765SQE%2FypETyfsWNKVbgHbXCkyOHwtTeBDRMjQDFvLbK5E8dKCyhDiDQ2s6WFYc4BTPK24hAqha23lqCvAZKGMpV%2FqHEZMN46RZGLjKY0o7IyOQOW%2FUdvCrU7Uf%2BvVyIGBnqzzgYm0XtwrI9GnGuV6ERK1e%2BVAoDGVt%2Fd50IqidFni9VGp%2FWex%2Br3mfUePG7mjDhWwkVIYAfD%2F9ZNX%2BcBvIvgpxelYTaDgYYA6MPvW8NIGOqUBBIo0Ai2ZCY7WX72XA%2BcbMAzTfc8lXd0vd%2FuUSEStAM9wrFz1k5oZASF8h7e9aVqrwiFb4qYtBvEMLadkZE0IsOAYyck0MfRr3On8EfA7AjMnJ6U4t%2Fj3s3i3G0v77T5ZyasIKBjaMBY5r1g4tZhp4jDJceHMuIs6kccRTfEi4VaeC0T5GoB80%2FO6qg8AOwhTbTGN%2BBN9IsNmcj%2BNlT%2FYKcyC5ewg&X-Amz-Signature=a124634a3dba2531fae54d72649f36f056f03362e860ca63698431a29d18855f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMFHKLW%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFAH6CnqA2AI9%2BNrDusMCpuvt6ld6JEM5vgS0%2F7cLu2wIgWU2vhrZks6z9nF2Dz7SVGCTCrMY4DdP8FYzdMMOg8OIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPhCwReG5Wfd4sFbSrcAxTCdi%2FfjSr2qfwV9CuCnxIazGtoQJ2BDxjm%2B9HAFNyPFTKXbA%2Fnb8TxYw11Wqf%2Bd4P8WxoZsjUp7Px9nXtMCtnmdaQ6E3nH4B4EwUnhEqiWZaFLINbUUFDZx5NZVWshDTsrotdqTfvE33OjTZaxgcztZuBWR%2FpCWBZpjh4GT1o4MmFhdrbRFZCs5qIWVBou97SSEDBskwmA%2Boud2qpjfRO1k1M9dgbeeWGTBvefm7DEd%2BPJKTVcavhBWAXRzEecH1GA2MagRDNMuA2t14CREYaZZvRhbi3eNQCmzkBKZzlpMMc1byIGvt%2B41U4I6NeyMoeCv483%2FRwhH99SytPB5nvYANxL1JSVlEotVsvCJvZwZhtf08lpw1eFSHKgSKc7Hmm8NzcyGxfLwYr%2BIxbbIR765SQE%2FypETyfsWNKVbgHbXCkyOHwtTeBDRMjQDFvLbK5E8dKCyhDiDQ2s6WFYc4BTPK24hAqha23lqCvAZKGMpV%2FqHEZMN46RZGLjKY0o7IyOQOW%2FUdvCrU7Uf%2BvVyIGBnqzzgYm0XtwrI9GnGuV6ERK1e%2BVAoDGVt%2Fd50IqidFni9VGp%2FWex%2Br3mfUePG7mjDhWwkVIYAfD%2F9ZNX%2BcBvIvgpxelYTaDgYYA6MPvW8NIGOqUBBIo0Ai2ZCY7WX72XA%2BcbMAzTfc8lXd0vd%2FuUSEStAM9wrFz1k5oZASF8h7e9aVqrwiFb4qYtBvEMLadkZE0IsOAYyck0MfRr3On8EfA7AjMnJ6U4t%2Fj3s3i3G0v77T5ZyasIKBjaMBY5r1g4tZhp4jDJceHMuIs6kccRTfEi4VaeC0T5GoB80%2FO6qg8AOwhTbTGN%2BBN9IsNmcj%2BNlT%2FYKcyC5ewg&X-Amz-Signature=e28559595266d2747c897d219c015be5f3811e0488ee6592d081261d6a57c693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMFHKLW%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFAH6CnqA2AI9%2BNrDusMCpuvt6ld6JEM5vgS0%2F7cLu2wIgWU2vhrZks6z9nF2Dz7SVGCTCrMY4DdP8FYzdMMOg8OIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPhCwReG5Wfd4sFbSrcAxTCdi%2FfjSr2qfwV9CuCnxIazGtoQJ2BDxjm%2B9HAFNyPFTKXbA%2Fnb8TxYw11Wqf%2Bd4P8WxoZsjUp7Px9nXtMCtnmdaQ6E3nH4B4EwUnhEqiWZaFLINbUUFDZx5NZVWshDTsrotdqTfvE33OjTZaxgcztZuBWR%2FpCWBZpjh4GT1o4MmFhdrbRFZCs5qIWVBou97SSEDBskwmA%2Boud2qpjfRO1k1M9dgbeeWGTBvefm7DEd%2BPJKTVcavhBWAXRzEecH1GA2MagRDNMuA2t14CREYaZZvRhbi3eNQCmzkBKZzlpMMc1byIGvt%2B41U4I6NeyMoeCv483%2FRwhH99SytPB5nvYANxL1JSVlEotVsvCJvZwZhtf08lpw1eFSHKgSKc7Hmm8NzcyGxfLwYr%2BIxbbIR765SQE%2FypETyfsWNKVbgHbXCkyOHwtTeBDRMjQDFvLbK5E8dKCyhDiDQ2s6WFYc4BTPK24hAqha23lqCvAZKGMpV%2FqHEZMN46RZGLjKY0o7IyOQOW%2FUdvCrU7Uf%2BvVyIGBnqzzgYm0XtwrI9GnGuV6ERK1e%2BVAoDGVt%2Fd50IqidFni9VGp%2FWex%2Br3mfUePG7mjDhWwkVIYAfD%2F9ZNX%2BcBvIvgpxelYTaDgYYA6MPvW8NIGOqUBBIo0Ai2ZCY7WX72XA%2BcbMAzTfc8lXd0vd%2FuUSEStAM9wrFz1k5oZASF8h7e9aVqrwiFb4qYtBvEMLadkZE0IsOAYyck0MfRr3On8EfA7AjMnJ6U4t%2Fj3s3i3G0v77T5ZyasIKBjaMBY5r1g4tZhp4jDJceHMuIs6kccRTfEi4VaeC0T5GoB80%2FO6qg8AOwhTbTGN%2BBN9IsNmcj%2BNlT%2FYKcyC5ewg&X-Amz-Signature=a09cb52f127c9e423d7db49f3960853ef60e344fab174ef53514bcca28f4d468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMFHKLW%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFAH6CnqA2AI9%2BNrDusMCpuvt6ld6JEM5vgS0%2F7cLu2wIgWU2vhrZks6z9nF2Dz7SVGCTCrMY4DdP8FYzdMMOg8OIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPhCwReG5Wfd4sFbSrcAxTCdi%2FfjSr2qfwV9CuCnxIazGtoQJ2BDxjm%2B9HAFNyPFTKXbA%2Fnb8TxYw11Wqf%2Bd4P8WxoZsjUp7Px9nXtMCtnmdaQ6E3nH4B4EwUnhEqiWZaFLINbUUFDZx5NZVWshDTsrotdqTfvE33OjTZaxgcztZuBWR%2FpCWBZpjh4GT1o4MmFhdrbRFZCs5qIWVBou97SSEDBskwmA%2Boud2qpjfRO1k1M9dgbeeWGTBvefm7DEd%2BPJKTVcavhBWAXRzEecH1GA2MagRDNMuA2t14CREYaZZvRhbi3eNQCmzkBKZzlpMMc1byIGvt%2B41U4I6NeyMoeCv483%2FRwhH99SytPB5nvYANxL1JSVlEotVsvCJvZwZhtf08lpw1eFSHKgSKc7Hmm8NzcyGxfLwYr%2BIxbbIR765SQE%2FypETyfsWNKVbgHbXCkyOHwtTeBDRMjQDFvLbK5E8dKCyhDiDQ2s6WFYc4BTPK24hAqha23lqCvAZKGMpV%2FqHEZMN46RZGLjKY0o7IyOQOW%2FUdvCrU7Uf%2BvVyIGBnqzzgYm0XtwrI9GnGuV6ERK1e%2BVAoDGVt%2Fd50IqidFni9VGp%2FWex%2Br3mfUePG7mjDhWwkVIYAfD%2F9ZNX%2BcBvIvgpxelYTaDgYYA6MPvW8NIGOqUBBIo0Ai2ZCY7WX72XA%2BcbMAzTfc8lXd0vd%2FuUSEStAM9wrFz1k5oZASF8h7e9aVqrwiFb4qYtBvEMLadkZE0IsOAYyck0MfRr3On8EfA7AjMnJ6U4t%2Fj3s3i3G0v77T5ZyasIKBjaMBY5r1g4tZhp4jDJceHMuIs6kccRTfEi4VaeC0T5GoB80%2FO6qg8AOwhTbTGN%2BBN9IsNmcj%2BNlT%2FYKcyC5ewg&X-Amz-Signature=a977e4ba9343ea414e3563ea1c75342b9214c8f1b97eeefa86f043c20194df27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMFHKLW%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFAH6CnqA2AI9%2BNrDusMCpuvt6ld6JEM5vgS0%2F7cLu2wIgWU2vhrZks6z9nF2Dz7SVGCTCrMY4DdP8FYzdMMOg8OIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPhCwReG5Wfd4sFbSrcAxTCdi%2FfjSr2qfwV9CuCnxIazGtoQJ2BDxjm%2B9HAFNyPFTKXbA%2Fnb8TxYw11Wqf%2Bd4P8WxoZsjUp7Px9nXtMCtnmdaQ6E3nH4B4EwUnhEqiWZaFLINbUUFDZx5NZVWshDTsrotdqTfvE33OjTZaxgcztZuBWR%2FpCWBZpjh4GT1o4MmFhdrbRFZCs5qIWVBou97SSEDBskwmA%2Boud2qpjfRO1k1M9dgbeeWGTBvefm7DEd%2BPJKTVcavhBWAXRzEecH1GA2MagRDNMuA2t14CREYaZZvRhbi3eNQCmzkBKZzlpMMc1byIGvt%2B41U4I6NeyMoeCv483%2FRwhH99SytPB5nvYANxL1JSVlEotVsvCJvZwZhtf08lpw1eFSHKgSKc7Hmm8NzcyGxfLwYr%2BIxbbIR765SQE%2FypETyfsWNKVbgHbXCkyOHwtTeBDRMjQDFvLbK5E8dKCyhDiDQ2s6WFYc4BTPK24hAqha23lqCvAZKGMpV%2FqHEZMN46RZGLjKY0o7IyOQOW%2FUdvCrU7Uf%2BvVyIGBnqzzgYm0XtwrI9GnGuV6ERK1e%2BVAoDGVt%2Fd50IqidFni9VGp%2FWex%2Br3mfUePG7mjDhWwkVIYAfD%2F9ZNX%2BcBvIvgpxelYTaDgYYA6MPvW8NIGOqUBBIo0Ai2ZCY7WX72XA%2BcbMAzTfc8lXd0vd%2FuUSEStAM9wrFz1k5oZASF8h7e9aVqrwiFb4qYtBvEMLadkZE0IsOAYyck0MfRr3On8EfA7AjMnJ6U4t%2Fj3s3i3G0v77T5ZyasIKBjaMBY5r1g4tZhp4jDJceHMuIs6kccRTfEi4VaeC0T5GoB80%2FO6qg8AOwhTbTGN%2BBN9IsNmcj%2BNlT%2FYKcyC5ewg&X-Amz-Signature=780ab3c59eafdb0e21aa330128b3b6a6a39c7c3ff1f97f5ac16e441bfc125569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMFHKLW%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFAH6CnqA2AI9%2BNrDusMCpuvt6ld6JEM5vgS0%2F7cLu2wIgWU2vhrZks6z9nF2Dz7SVGCTCrMY4DdP8FYzdMMOg8OIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPhCwReG5Wfd4sFbSrcAxTCdi%2FfjSr2qfwV9CuCnxIazGtoQJ2BDxjm%2B9HAFNyPFTKXbA%2Fnb8TxYw11Wqf%2Bd4P8WxoZsjUp7Px9nXtMCtnmdaQ6E3nH4B4EwUnhEqiWZaFLINbUUFDZx5NZVWshDTsrotdqTfvE33OjTZaxgcztZuBWR%2FpCWBZpjh4GT1o4MmFhdrbRFZCs5qIWVBou97SSEDBskwmA%2Boud2qpjfRO1k1M9dgbeeWGTBvefm7DEd%2BPJKTVcavhBWAXRzEecH1GA2MagRDNMuA2t14CREYaZZvRhbi3eNQCmzkBKZzlpMMc1byIGvt%2B41U4I6NeyMoeCv483%2FRwhH99SytPB5nvYANxL1JSVlEotVsvCJvZwZhtf08lpw1eFSHKgSKc7Hmm8NzcyGxfLwYr%2BIxbbIR765SQE%2FypETyfsWNKVbgHbXCkyOHwtTeBDRMjQDFvLbK5E8dKCyhDiDQ2s6WFYc4BTPK24hAqha23lqCvAZKGMpV%2FqHEZMN46RZGLjKY0o7IyOQOW%2FUdvCrU7Uf%2BvVyIGBnqzzgYm0XtwrI9GnGuV6ERK1e%2BVAoDGVt%2Fd50IqidFni9VGp%2FWex%2Br3mfUePG7mjDhWwkVIYAfD%2F9ZNX%2BcBvIvgpxelYTaDgYYA6MPvW8NIGOqUBBIo0Ai2ZCY7WX72XA%2BcbMAzTfc8lXd0vd%2FuUSEStAM9wrFz1k5oZASF8h7e9aVqrwiFb4qYtBvEMLadkZE0IsOAYyck0MfRr3On8EfA7AjMnJ6U4t%2Fj3s3i3G0v77T5ZyasIKBjaMBY5r1g4tZhp4jDJceHMuIs6kccRTfEi4VaeC0T5GoB80%2FO6qg8AOwhTbTGN%2BBN9IsNmcj%2BNlT%2FYKcyC5ewg&X-Amz-Signature=14fa93f015780c47e04cb20dca74215fe7cef5ad3080edd2a589272508068514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMFHKLW%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFAH6CnqA2AI9%2BNrDusMCpuvt6ld6JEM5vgS0%2F7cLu2wIgWU2vhrZks6z9nF2Dz7SVGCTCrMY4DdP8FYzdMMOg8OIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPhCwReG5Wfd4sFbSrcAxTCdi%2FfjSr2qfwV9CuCnxIazGtoQJ2BDxjm%2B9HAFNyPFTKXbA%2Fnb8TxYw11Wqf%2Bd4P8WxoZsjUp7Px9nXtMCtnmdaQ6E3nH4B4EwUnhEqiWZaFLINbUUFDZx5NZVWshDTsrotdqTfvE33OjTZaxgcztZuBWR%2FpCWBZpjh4GT1o4MmFhdrbRFZCs5qIWVBou97SSEDBskwmA%2Boud2qpjfRO1k1M9dgbeeWGTBvefm7DEd%2BPJKTVcavhBWAXRzEecH1GA2MagRDNMuA2t14CREYaZZvRhbi3eNQCmzkBKZzlpMMc1byIGvt%2B41U4I6NeyMoeCv483%2FRwhH99SytPB5nvYANxL1JSVlEotVsvCJvZwZhtf08lpw1eFSHKgSKc7Hmm8NzcyGxfLwYr%2BIxbbIR765SQE%2FypETyfsWNKVbgHbXCkyOHwtTeBDRMjQDFvLbK5E8dKCyhDiDQ2s6WFYc4BTPK24hAqha23lqCvAZKGMpV%2FqHEZMN46RZGLjKY0o7IyOQOW%2FUdvCrU7Uf%2BvVyIGBnqzzgYm0XtwrI9GnGuV6ERK1e%2BVAoDGVt%2Fd50IqidFni9VGp%2FWex%2Br3mfUePG7mjDhWwkVIYAfD%2F9ZNX%2BcBvIvgpxelYTaDgYYA6MPvW8NIGOqUBBIo0Ai2ZCY7WX72XA%2BcbMAzTfc8lXd0vd%2FuUSEStAM9wrFz1k5oZASF8h7e9aVqrwiFb4qYtBvEMLadkZE0IsOAYyck0MfRr3On8EfA7AjMnJ6U4t%2Fj3s3i3G0v77T5ZyasIKBjaMBY5r1g4tZhp4jDJceHMuIs6kccRTfEi4VaeC0T5GoB80%2FO6qg8AOwhTbTGN%2BBN9IsNmcj%2BNlT%2FYKcyC5ewg&X-Amz-Signature=2ef8953dd93909cdc313384f732f5823752aaa4af21b31f33e2b7944cdc88af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMFHKLW%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFAH6CnqA2AI9%2BNrDusMCpuvt6ld6JEM5vgS0%2F7cLu2wIgWU2vhrZks6z9nF2Dz7SVGCTCrMY4DdP8FYzdMMOg8OIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPhCwReG5Wfd4sFbSrcAxTCdi%2FfjSr2qfwV9CuCnxIazGtoQJ2BDxjm%2B9HAFNyPFTKXbA%2Fnb8TxYw11Wqf%2Bd4P8WxoZsjUp7Px9nXtMCtnmdaQ6E3nH4B4EwUnhEqiWZaFLINbUUFDZx5NZVWshDTsrotdqTfvE33OjTZaxgcztZuBWR%2FpCWBZpjh4GT1o4MmFhdrbRFZCs5qIWVBou97SSEDBskwmA%2Boud2qpjfRO1k1M9dgbeeWGTBvefm7DEd%2BPJKTVcavhBWAXRzEecH1GA2MagRDNMuA2t14CREYaZZvRhbi3eNQCmzkBKZzlpMMc1byIGvt%2B41U4I6NeyMoeCv483%2FRwhH99SytPB5nvYANxL1JSVlEotVsvCJvZwZhtf08lpw1eFSHKgSKc7Hmm8NzcyGxfLwYr%2BIxbbIR765SQE%2FypETyfsWNKVbgHbXCkyOHwtTeBDRMjQDFvLbK5E8dKCyhDiDQ2s6WFYc4BTPK24hAqha23lqCvAZKGMpV%2FqHEZMN46RZGLjKY0o7IyOQOW%2FUdvCrU7Uf%2BvVyIGBnqzzgYm0XtwrI9GnGuV6ERK1e%2BVAoDGVt%2Fd50IqidFni9VGp%2FWex%2Br3mfUePG7mjDhWwkVIYAfD%2F9ZNX%2BcBvIvgpxelYTaDgYYA6MPvW8NIGOqUBBIo0Ai2ZCY7WX72XA%2BcbMAzTfc8lXd0vd%2FuUSEStAM9wrFz1k5oZASF8h7e9aVqrwiFb4qYtBvEMLadkZE0IsOAYyck0MfRr3On8EfA7AjMnJ6U4t%2Fj3s3i3G0v77T5ZyasIKBjaMBY5r1g4tZhp4jDJceHMuIs6kccRTfEi4VaeC0T5GoB80%2FO6qg8AOwhTbTGN%2BBN9IsNmcj%2BNlT%2FYKcyC5ewg&X-Amz-Signature=4e77cc7b92ad40488b5fb667d1378a0ed4aededbbbd3fedcf99cfdc0c98fec98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

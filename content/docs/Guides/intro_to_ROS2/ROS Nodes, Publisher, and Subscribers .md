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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFM3WRP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BZQ%2BrRIOJrKf3MdyiLOA9znQeICdEqCVGnt40iEWU%2FAiA6upZJepwkyD2%2Fy5TjbkK%2FcsZXzmM4VDiYw0B59UiKjCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQspUlk245RL0VHX7KtwDiM7NuZ%2FK%2F73GQ%2FVKHRhs2zenZUR0BRG5juEj%2FWh2Kqq5MG23hteysMcw9a6kGYBRpNC%2FPOv5hHcrxSmlAaS%2BqSSMvOvbwLthpCpRWlMVfec%2FxIAWJwqt%2F9cZ7tNQrMjZC32PQ6dZ9KXqfAn7c6%2Br0AgFGnvmChE2zmse10Fc0nsf%2BWuS2szPaN4QXHxDfTRJh6hb9inADENvwWg%2BMmu88D0%2BvJAwc9MvxLfaG4FPZhwrwLeNSJLXRaYjbjyUkCeAmYuKVB1SI5O7NqB5hffFZQKeMyc6ycQ7Jjr7XdSVSLx%2BI%2Bw2LWnwY62i101OqiKDtv1EwQyqZ3roLKvZ5mYpsPuyfRWkeTlTidurLfhQbbzGEhytC1BntIS72AtpA7XlkWqCUiiazx5d340pr8evjxxl6XwbLgGKdYlmXRpg7nieocE5LQCaMwb68wELmTZtop6JQky%2F5RVIDAFHQyGrvmtV3YsVjmlECqC4akW%2FMDvNMq4rsWLx6YvfGpJqf4kyvVNIPz2PbquJ4l3DQ9KUTk5ANXjonJSRi5IcXP0qXvUiyy%2FrlxidzHNunV2%2B5xyg1WTLG%2Bb3YwJe9otOSjJ649tGDFlpk4GD7KXjr78XzXmoAkA24zl0hTvuhTAwzuuVvwY6pgET5RZ4HR0%2FjQF03JtOehfF8K2stsryYT42mld5QhXvXBWio11f9yhh69PLNLdnw6XTm7%2BmGedA58OtOUkmJUMA2r9clo3i7hpXwi9XzrpKioZCDmu%2BPd%2BA1v1IKuXuMJ8GbDC6HiivkaWwXCGSQHjUaomUVplVkZwojd%2B5VOTwbapdP8XGTWsd74jB%2Bx%2F5piVDB1xlRI%2FO2TMPpiv2eq5TsK1%2Bpp5g&X-Amz-Signature=487f7f7ef09278bc872cc232912e10244a7285e079a214d02066cdeb92ebd8cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFM3WRP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BZQ%2BrRIOJrKf3MdyiLOA9znQeICdEqCVGnt40iEWU%2FAiA6upZJepwkyD2%2Fy5TjbkK%2FcsZXzmM4VDiYw0B59UiKjCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQspUlk245RL0VHX7KtwDiM7NuZ%2FK%2F73GQ%2FVKHRhs2zenZUR0BRG5juEj%2FWh2Kqq5MG23hteysMcw9a6kGYBRpNC%2FPOv5hHcrxSmlAaS%2BqSSMvOvbwLthpCpRWlMVfec%2FxIAWJwqt%2F9cZ7tNQrMjZC32PQ6dZ9KXqfAn7c6%2Br0AgFGnvmChE2zmse10Fc0nsf%2BWuS2szPaN4QXHxDfTRJh6hb9inADENvwWg%2BMmu88D0%2BvJAwc9MvxLfaG4FPZhwrwLeNSJLXRaYjbjyUkCeAmYuKVB1SI5O7NqB5hffFZQKeMyc6ycQ7Jjr7XdSVSLx%2BI%2Bw2LWnwY62i101OqiKDtv1EwQyqZ3roLKvZ5mYpsPuyfRWkeTlTidurLfhQbbzGEhytC1BntIS72AtpA7XlkWqCUiiazx5d340pr8evjxxl6XwbLgGKdYlmXRpg7nieocE5LQCaMwb68wELmTZtop6JQky%2F5RVIDAFHQyGrvmtV3YsVjmlECqC4akW%2FMDvNMq4rsWLx6YvfGpJqf4kyvVNIPz2PbquJ4l3DQ9KUTk5ANXjonJSRi5IcXP0qXvUiyy%2FrlxidzHNunV2%2B5xyg1WTLG%2Bb3YwJe9otOSjJ649tGDFlpk4GD7KXjr78XzXmoAkA24zl0hTvuhTAwzuuVvwY6pgET5RZ4HR0%2FjQF03JtOehfF8K2stsryYT42mld5QhXvXBWio11f9yhh69PLNLdnw6XTm7%2BmGedA58OtOUkmJUMA2r9clo3i7hpXwi9XzrpKioZCDmu%2BPd%2BA1v1IKuXuMJ8GbDC6HiivkaWwXCGSQHjUaomUVplVkZwojd%2B5VOTwbapdP8XGTWsd74jB%2Bx%2F5piVDB1xlRI%2FO2TMPpiv2eq5TsK1%2Bpp5g&X-Amz-Signature=81fc0fe781294fdc834e1d436db8980dff11f247f17dc1e5a8d9629292fcb182&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFM3WRP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BZQ%2BrRIOJrKf3MdyiLOA9znQeICdEqCVGnt40iEWU%2FAiA6upZJepwkyD2%2Fy5TjbkK%2FcsZXzmM4VDiYw0B59UiKjCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQspUlk245RL0VHX7KtwDiM7NuZ%2FK%2F73GQ%2FVKHRhs2zenZUR0BRG5juEj%2FWh2Kqq5MG23hteysMcw9a6kGYBRpNC%2FPOv5hHcrxSmlAaS%2BqSSMvOvbwLthpCpRWlMVfec%2FxIAWJwqt%2F9cZ7tNQrMjZC32PQ6dZ9KXqfAn7c6%2Br0AgFGnvmChE2zmse10Fc0nsf%2BWuS2szPaN4QXHxDfTRJh6hb9inADENvwWg%2BMmu88D0%2BvJAwc9MvxLfaG4FPZhwrwLeNSJLXRaYjbjyUkCeAmYuKVB1SI5O7NqB5hffFZQKeMyc6ycQ7Jjr7XdSVSLx%2BI%2Bw2LWnwY62i101OqiKDtv1EwQyqZ3roLKvZ5mYpsPuyfRWkeTlTidurLfhQbbzGEhytC1BntIS72AtpA7XlkWqCUiiazx5d340pr8evjxxl6XwbLgGKdYlmXRpg7nieocE5LQCaMwb68wELmTZtop6JQky%2F5RVIDAFHQyGrvmtV3YsVjmlECqC4akW%2FMDvNMq4rsWLx6YvfGpJqf4kyvVNIPz2PbquJ4l3DQ9KUTk5ANXjonJSRi5IcXP0qXvUiyy%2FrlxidzHNunV2%2B5xyg1WTLG%2Bb3YwJe9otOSjJ649tGDFlpk4GD7KXjr78XzXmoAkA24zl0hTvuhTAwzuuVvwY6pgET5RZ4HR0%2FjQF03JtOehfF8K2stsryYT42mld5QhXvXBWio11f9yhh69PLNLdnw6XTm7%2BmGedA58OtOUkmJUMA2r9clo3i7hpXwi9XzrpKioZCDmu%2BPd%2BA1v1IKuXuMJ8GbDC6HiivkaWwXCGSQHjUaomUVplVkZwojd%2B5VOTwbapdP8XGTWsd74jB%2Bx%2F5piVDB1xlRI%2FO2TMPpiv2eq5TsK1%2Bpp5g&X-Amz-Signature=032bb1c6a195ea0c840c1b65c2ab070c61893b29dd8c6539f6424c306dce7314&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFM3WRP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BZQ%2BrRIOJrKf3MdyiLOA9znQeICdEqCVGnt40iEWU%2FAiA6upZJepwkyD2%2Fy5TjbkK%2FcsZXzmM4VDiYw0B59UiKjCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQspUlk245RL0VHX7KtwDiM7NuZ%2FK%2F73GQ%2FVKHRhs2zenZUR0BRG5juEj%2FWh2Kqq5MG23hteysMcw9a6kGYBRpNC%2FPOv5hHcrxSmlAaS%2BqSSMvOvbwLthpCpRWlMVfec%2FxIAWJwqt%2F9cZ7tNQrMjZC32PQ6dZ9KXqfAn7c6%2Br0AgFGnvmChE2zmse10Fc0nsf%2BWuS2szPaN4QXHxDfTRJh6hb9inADENvwWg%2BMmu88D0%2BvJAwc9MvxLfaG4FPZhwrwLeNSJLXRaYjbjyUkCeAmYuKVB1SI5O7NqB5hffFZQKeMyc6ycQ7Jjr7XdSVSLx%2BI%2Bw2LWnwY62i101OqiKDtv1EwQyqZ3roLKvZ5mYpsPuyfRWkeTlTidurLfhQbbzGEhytC1BntIS72AtpA7XlkWqCUiiazx5d340pr8evjxxl6XwbLgGKdYlmXRpg7nieocE5LQCaMwb68wELmTZtop6JQky%2F5RVIDAFHQyGrvmtV3YsVjmlECqC4akW%2FMDvNMq4rsWLx6YvfGpJqf4kyvVNIPz2PbquJ4l3DQ9KUTk5ANXjonJSRi5IcXP0qXvUiyy%2FrlxidzHNunV2%2B5xyg1WTLG%2Bb3YwJe9otOSjJ649tGDFlpk4GD7KXjr78XzXmoAkA24zl0hTvuhTAwzuuVvwY6pgET5RZ4HR0%2FjQF03JtOehfF8K2stsryYT42mld5QhXvXBWio11f9yhh69PLNLdnw6XTm7%2BmGedA58OtOUkmJUMA2r9clo3i7hpXwi9XzrpKioZCDmu%2BPd%2BA1v1IKuXuMJ8GbDC6HiivkaWwXCGSQHjUaomUVplVkZwojd%2B5VOTwbapdP8XGTWsd74jB%2Bx%2F5piVDB1xlRI%2FO2TMPpiv2eq5TsK1%2Bpp5g&X-Amz-Signature=f5f8c0783515e43797fa425a97b84a328e242b33f6c4a4cf1757ecbfe8ff3951&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFM3WRP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BZQ%2BrRIOJrKf3MdyiLOA9znQeICdEqCVGnt40iEWU%2FAiA6upZJepwkyD2%2Fy5TjbkK%2FcsZXzmM4VDiYw0B59UiKjCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQspUlk245RL0VHX7KtwDiM7NuZ%2FK%2F73GQ%2FVKHRhs2zenZUR0BRG5juEj%2FWh2Kqq5MG23hteysMcw9a6kGYBRpNC%2FPOv5hHcrxSmlAaS%2BqSSMvOvbwLthpCpRWlMVfec%2FxIAWJwqt%2F9cZ7tNQrMjZC32PQ6dZ9KXqfAn7c6%2Br0AgFGnvmChE2zmse10Fc0nsf%2BWuS2szPaN4QXHxDfTRJh6hb9inADENvwWg%2BMmu88D0%2BvJAwc9MvxLfaG4FPZhwrwLeNSJLXRaYjbjyUkCeAmYuKVB1SI5O7NqB5hffFZQKeMyc6ycQ7Jjr7XdSVSLx%2BI%2Bw2LWnwY62i101OqiKDtv1EwQyqZ3roLKvZ5mYpsPuyfRWkeTlTidurLfhQbbzGEhytC1BntIS72AtpA7XlkWqCUiiazx5d340pr8evjxxl6XwbLgGKdYlmXRpg7nieocE5LQCaMwb68wELmTZtop6JQky%2F5RVIDAFHQyGrvmtV3YsVjmlECqC4akW%2FMDvNMq4rsWLx6YvfGpJqf4kyvVNIPz2PbquJ4l3DQ9KUTk5ANXjonJSRi5IcXP0qXvUiyy%2FrlxidzHNunV2%2B5xyg1WTLG%2Bb3YwJe9otOSjJ649tGDFlpk4GD7KXjr78XzXmoAkA24zl0hTvuhTAwzuuVvwY6pgET5RZ4HR0%2FjQF03JtOehfF8K2stsryYT42mld5QhXvXBWio11f9yhh69PLNLdnw6XTm7%2BmGedA58OtOUkmJUMA2r9clo3i7hpXwi9XzrpKioZCDmu%2BPd%2BA1v1IKuXuMJ8GbDC6HiivkaWwXCGSQHjUaomUVplVkZwojd%2B5VOTwbapdP8XGTWsd74jB%2Bx%2F5piVDB1xlRI%2FO2TMPpiv2eq5TsK1%2Bpp5g&X-Amz-Signature=6528a34619781871bf322841d97b46a2d251209cb8a4b69240d08074314c42e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFM3WRP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BZQ%2BrRIOJrKf3MdyiLOA9znQeICdEqCVGnt40iEWU%2FAiA6upZJepwkyD2%2Fy5TjbkK%2FcsZXzmM4VDiYw0B59UiKjCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQspUlk245RL0VHX7KtwDiM7NuZ%2FK%2F73GQ%2FVKHRhs2zenZUR0BRG5juEj%2FWh2Kqq5MG23hteysMcw9a6kGYBRpNC%2FPOv5hHcrxSmlAaS%2BqSSMvOvbwLthpCpRWlMVfec%2FxIAWJwqt%2F9cZ7tNQrMjZC32PQ6dZ9KXqfAn7c6%2Br0AgFGnvmChE2zmse10Fc0nsf%2BWuS2szPaN4QXHxDfTRJh6hb9inADENvwWg%2BMmu88D0%2BvJAwc9MvxLfaG4FPZhwrwLeNSJLXRaYjbjyUkCeAmYuKVB1SI5O7NqB5hffFZQKeMyc6ycQ7Jjr7XdSVSLx%2BI%2Bw2LWnwY62i101OqiKDtv1EwQyqZ3roLKvZ5mYpsPuyfRWkeTlTidurLfhQbbzGEhytC1BntIS72AtpA7XlkWqCUiiazx5d340pr8evjxxl6XwbLgGKdYlmXRpg7nieocE5LQCaMwb68wELmTZtop6JQky%2F5RVIDAFHQyGrvmtV3YsVjmlECqC4akW%2FMDvNMq4rsWLx6YvfGpJqf4kyvVNIPz2PbquJ4l3DQ9KUTk5ANXjonJSRi5IcXP0qXvUiyy%2FrlxidzHNunV2%2B5xyg1WTLG%2Bb3YwJe9otOSjJ649tGDFlpk4GD7KXjr78XzXmoAkA24zl0hTvuhTAwzuuVvwY6pgET5RZ4HR0%2FjQF03JtOehfF8K2stsryYT42mld5QhXvXBWio11f9yhh69PLNLdnw6XTm7%2BmGedA58OtOUkmJUMA2r9clo3i7hpXwi9XzrpKioZCDmu%2BPd%2BA1v1IKuXuMJ8GbDC6HiivkaWwXCGSQHjUaomUVplVkZwojd%2B5VOTwbapdP8XGTWsd74jB%2Bx%2F5piVDB1xlRI%2FO2TMPpiv2eq5TsK1%2Bpp5g&X-Amz-Signature=d9631f8a815f779917349e78a75bb261ff6219c884adf0b08618b2ea864f12ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFM3WRP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BZQ%2BrRIOJrKf3MdyiLOA9znQeICdEqCVGnt40iEWU%2FAiA6upZJepwkyD2%2Fy5TjbkK%2FcsZXzmM4VDiYw0B59UiKjCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQspUlk245RL0VHX7KtwDiM7NuZ%2FK%2F73GQ%2FVKHRhs2zenZUR0BRG5juEj%2FWh2Kqq5MG23hteysMcw9a6kGYBRpNC%2FPOv5hHcrxSmlAaS%2BqSSMvOvbwLthpCpRWlMVfec%2FxIAWJwqt%2F9cZ7tNQrMjZC32PQ6dZ9KXqfAn7c6%2Br0AgFGnvmChE2zmse10Fc0nsf%2BWuS2szPaN4QXHxDfTRJh6hb9inADENvwWg%2BMmu88D0%2BvJAwc9MvxLfaG4FPZhwrwLeNSJLXRaYjbjyUkCeAmYuKVB1SI5O7NqB5hffFZQKeMyc6ycQ7Jjr7XdSVSLx%2BI%2Bw2LWnwY62i101OqiKDtv1EwQyqZ3roLKvZ5mYpsPuyfRWkeTlTidurLfhQbbzGEhytC1BntIS72AtpA7XlkWqCUiiazx5d340pr8evjxxl6XwbLgGKdYlmXRpg7nieocE5LQCaMwb68wELmTZtop6JQky%2F5RVIDAFHQyGrvmtV3YsVjmlECqC4akW%2FMDvNMq4rsWLx6YvfGpJqf4kyvVNIPz2PbquJ4l3DQ9KUTk5ANXjonJSRi5IcXP0qXvUiyy%2FrlxidzHNunV2%2B5xyg1WTLG%2Bb3YwJe9otOSjJ649tGDFlpk4GD7KXjr78XzXmoAkA24zl0hTvuhTAwzuuVvwY6pgET5RZ4HR0%2FjQF03JtOehfF8K2stsryYT42mld5QhXvXBWio11f9yhh69PLNLdnw6XTm7%2BmGedA58OtOUkmJUMA2r9clo3i7hpXwi9XzrpKioZCDmu%2BPd%2BA1v1IKuXuMJ8GbDC6HiivkaWwXCGSQHjUaomUVplVkZwojd%2B5VOTwbapdP8XGTWsd74jB%2Bx%2F5piVDB1xlRI%2FO2TMPpiv2eq5TsK1%2Bpp5g&X-Amz-Signature=46d67156cdd8cbb5195961443be0bedea0c3cf6864f36b0edd783fdd505d9371&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFM3WRP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BZQ%2BrRIOJrKf3MdyiLOA9znQeICdEqCVGnt40iEWU%2FAiA6upZJepwkyD2%2Fy5TjbkK%2FcsZXzmM4VDiYw0B59UiKjCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQspUlk245RL0VHX7KtwDiM7NuZ%2FK%2F73GQ%2FVKHRhs2zenZUR0BRG5juEj%2FWh2Kqq5MG23hteysMcw9a6kGYBRpNC%2FPOv5hHcrxSmlAaS%2BqSSMvOvbwLthpCpRWlMVfec%2FxIAWJwqt%2F9cZ7tNQrMjZC32PQ6dZ9KXqfAn7c6%2Br0AgFGnvmChE2zmse10Fc0nsf%2BWuS2szPaN4QXHxDfTRJh6hb9inADENvwWg%2BMmu88D0%2BvJAwc9MvxLfaG4FPZhwrwLeNSJLXRaYjbjyUkCeAmYuKVB1SI5O7NqB5hffFZQKeMyc6ycQ7Jjr7XdSVSLx%2BI%2Bw2LWnwY62i101OqiKDtv1EwQyqZ3roLKvZ5mYpsPuyfRWkeTlTidurLfhQbbzGEhytC1BntIS72AtpA7XlkWqCUiiazx5d340pr8evjxxl6XwbLgGKdYlmXRpg7nieocE5LQCaMwb68wELmTZtop6JQky%2F5RVIDAFHQyGrvmtV3YsVjmlECqC4akW%2FMDvNMq4rsWLx6YvfGpJqf4kyvVNIPz2PbquJ4l3DQ9KUTk5ANXjonJSRi5IcXP0qXvUiyy%2FrlxidzHNunV2%2B5xyg1WTLG%2Bb3YwJe9otOSjJ649tGDFlpk4GD7KXjr78XzXmoAkA24zl0hTvuhTAwzuuVvwY6pgET5RZ4HR0%2FjQF03JtOehfF8K2stsryYT42mld5QhXvXBWio11f9yhh69PLNLdnw6XTm7%2BmGedA58OtOUkmJUMA2r9clo3i7hpXwi9XzrpKioZCDmu%2BPd%2BA1v1IKuXuMJ8GbDC6HiivkaWwXCGSQHjUaomUVplVkZwojd%2B5VOTwbapdP8XGTWsd74jB%2Bx%2F5piVDB1xlRI%2FO2TMPpiv2eq5TsK1%2Bpp5g&X-Amz-Signature=03279d3f7b15fec0dd5d450f0d3125ec9eae97574e76ab7a64202fd99c42fab6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

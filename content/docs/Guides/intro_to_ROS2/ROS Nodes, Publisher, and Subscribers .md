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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKFSIR7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIATos8%2FjC03gW%2BIOXEhN8mi%2FCkQbl6%2FwFOHkg%2BS%2F0UFJAiA0JEVu3IVJ%2BEPCPaHFXjZ%2FOua11vhWfrw9x2JVUw%2F%2BMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhhGsW0V77fWnC%2FXKKtwDIxys%2BlhceZtbfMSbfwoRiQg35WATsHioNWGMqrHU%2ByLVr6TXmYopZe0WWT%2Bq%2Bpk0jqtDNMYM3o4K%2F9S2FDQxwQsFCVVhB%2BZSFjjWGZFfc5HfbjjAlkQBfdE5DM6n4kduO%2BXbHOnNMCtR1BLwlYUVnqB808iG044i0lZZtaOwmjv%2BUNhVfiYYmGEK%2BPLXGWfHxB%2BGHdS7o5QKpG0YGQF2%2BbNRSYSJG7Ts%2BSk%2FIg%2F5dCTGF5ln7z1SW5D1ZatOOqSN75HLd%2FRtiM8eAIj%2BQ1LlNz%2FG0MdiK%2BlIvYdo9lQOK%2BId2ZWBaRMRnYxXiYufptaOQweVFg7Mjm8ZE6sp60Yzd1SRwCtdFhH5brsy0F8DVfAWvy0ETDZ1n%2FfNLu%2FRqXFgNVmcwpX1SK%2BBy0gSyUZMUM3HNp9wZTHAwI0UtLs8e7Ee1d2DC6MJXJTw2uGK6UYZaXeQPIkUEdtpVCk0lXH3oXG%2FM6GYBinW%2FE0FkiCS3yLd62Y8knPcmM8BGQZ36HkooHPkPpF1kjhm3m%2FujTGJPpdL44XDSOejdjYay78JKA8yS79RHM8S%2BJb2lUGsrIF05evM%2BPBFqbdxyf19iyFkvnj6lLTjmrkQRZUjti9gxJJ1br9ZlIPvigr6%2BqEwutOpwwY6pgFRFbS4UC0TOUyOtPYZplVIGlzi8q90urGUIzUIOsdY6FaHrm3RTbkdjmwt3vbsPPuy%2FVOCfizU6PY2lOCSehFwya5YU23tTzUOuzok9fl3f%2FJtALt8vASu7dtwVG8aXYaC1zwX1LYbBKZip91%2FPfIahiF8H730z6IYXOsLxtK5uwieuUTXZIOnf%2FtP4JplHXrCABuU4nlLesgEe3reG7VRJ3AgaaEb&X-Amz-Signature=e008231a3847d18442e6beb457719a7292b08d6031b16e73095109a6a958ae50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKFSIR7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIATos8%2FjC03gW%2BIOXEhN8mi%2FCkQbl6%2FwFOHkg%2BS%2F0UFJAiA0JEVu3IVJ%2BEPCPaHFXjZ%2FOua11vhWfrw9x2JVUw%2F%2BMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhhGsW0V77fWnC%2FXKKtwDIxys%2BlhceZtbfMSbfwoRiQg35WATsHioNWGMqrHU%2ByLVr6TXmYopZe0WWT%2Bq%2Bpk0jqtDNMYM3o4K%2F9S2FDQxwQsFCVVhB%2BZSFjjWGZFfc5HfbjjAlkQBfdE5DM6n4kduO%2BXbHOnNMCtR1BLwlYUVnqB808iG044i0lZZtaOwmjv%2BUNhVfiYYmGEK%2BPLXGWfHxB%2BGHdS7o5QKpG0YGQF2%2BbNRSYSJG7Ts%2BSk%2FIg%2F5dCTGF5ln7z1SW5D1ZatOOqSN75HLd%2FRtiM8eAIj%2BQ1LlNz%2FG0MdiK%2BlIvYdo9lQOK%2BId2ZWBaRMRnYxXiYufptaOQweVFg7Mjm8ZE6sp60Yzd1SRwCtdFhH5brsy0F8DVfAWvy0ETDZ1n%2FfNLu%2FRqXFgNVmcwpX1SK%2BBy0gSyUZMUM3HNp9wZTHAwI0UtLs8e7Ee1d2DC6MJXJTw2uGK6UYZaXeQPIkUEdtpVCk0lXH3oXG%2FM6GYBinW%2FE0FkiCS3yLd62Y8knPcmM8BGQZ36HkooHPkPpF1kjhm3m%2FujTGJPpdL44XDSOejdjYay78JKA8yS79RHM8S%2BJb2lUGsrIF05evM%2BPBFqbdxyf19iyFkvnj6lLTjmrkQRZUjti9gxJJ1br9ZlIPvigr6%2BqEwutOpwwY6pgFRFbS4UC0TOUyOtPYZplVIGlzi8q90urGUIzUIOsdY6FaHrm3RTbkdjmwt3vbsPPuy%2FVOCfizU6PY2lOCSehFwya5YU23tTzUOuzok9fl3f%2FJtALt8vASu7dtwVG8aXYaC1zwX1LYbBKZip91%2FPfIahiF8H730z6IYXOsLxtK5uwieuUTXZIOnf%2FtP4JplHXrCABuU4nlLesgEe3reG7VRJ3AgaaEb&X-Amz-Signature=805ff26fcfd692887d6d75245aa9dc6f9360f7f11b8cbf08d73cd3007064f419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKFSIR7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIATos8%2FjC03gW%2BIOXEhN8mi%2FCkQbl6%2FwFOHkg%2BS%2F0UFJAiA0JEVu3IVJ%2BEPCPaHFXjZ%2FOua11vhWfrw9x2JVUw%2F%2BMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhhGsW0V77fWnC%2FXKKtwDIxys%2BlhceZtbfMSbfwoRiQg35WATsHioNWGMqrHU%2ByLVr6TXmYopZe0WWT%2Bq%2Bpk0jqtDNMYM3o4K%2F9S2FDQxwQsFCVVhB%2BZSFjjWGZFfc5HfbjjAlkQBfdE5DM6n4kduO%2BXbHOnNMCtR1BLwlYUVnqB808iG044i0lZZtaOwmjv%2BUNhVfiYYmGEK%2BPLXGWfHxB%2BGHdS7o5QKpG0YGQF2%2BbNRSYSJG7Ts%2BSk%2FIg%2F5dCTGF5ln7z1SW5D1ZatOOqSN75HLd%2FRtiM8eAIj%2BQ1LlNz%2FG0MdiK%2BlIvYdo9lQOK%2BId2ZWBaRMRnYxXiYufptaOQweVFg7Mjm8ZE6sp60Yzd1SRwCtdFhH5brsy0F8DVfAWvy0ETDZ1n%2FfNLu%2FRqXFgNVmcwpX1SK%2BBy0gSyUZMUM3HNp9wZTHAwI0UtLs8e7Ee1d2DC6MJXJTw2uGK6UYZaXeQPIkUEdtpVCk0lXH3oXG%2FM6GYBinW%2FE0FkiCS3yLd62Y8knPcmM8BGQZ36HkooHPkPpF1kjhm3m%2FujTGJPpdL44XDSOejdjYay78JKA8yS79RHM8S%2BJb2lUGsrIF05evM%2BPBFqbdxyf19iyFkvnj6lLTjmrkQRZUjti9gxJJ1br9ZlIPvigr6%2BqEwutOpwwY6pgFRFbS4UC0TOUyOtPYZplVIGlzi8q90urGUIzUIOsdY6FaHrm3RTbkdjmwt3vbsPPuy%2FVOCfizU6PY2lOCSehFwya5YU23tTzUOuzok9fl3f%2FJtALt8vASu7dtwVG8aXYaC1zwX1LYbBKZip91%2FPfIahiF8H730z6IYXOsLxtK5uwieuUTXZIOnf%2FtP4JplHXrCABuU4nlLesgEe3reG7VRJ3AgaaEb&X-Amz-Signature=1fc2fc3a3ddc0fe2ab47274372be4d0c2748257d3c46872a0a580de41c288f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKFSIR7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIATos8%2FjC03gW%2BIOXEhN8mi%2FCkQbl6%2FwFOHkg%2BS%2F0UFJAiA0JEVu3IVJ%2BEPCPaHFXjZ%2FOua11vhWfrw9x2JVUw%2F%2BMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhhGsW0V77fWnC%2FXKKtwDIxys%2BlhceZtbfMSbfwoRiQg35WATsHioNWGMqrHU%2ByLVr6TXmYopZe0WWT%2Bq%2Bpk0jqtDNMYM3o4K%2F9S2FDQxwQsFCVVhB%2BZSFjjWGZFfc5HfbjjAlkQBfdE5DM6n4kduO%2BXbHOnNMCtR1BLwlYUVnqB808iG044i0lZZtaOwmjv%2BUNhVfiYYmGEK%2BPLXGWfHxB%2BGHdS7o5QKpG0YGQF2%2BbNRSYSJG7Ts%2BSk%2FIg%2F5dCTGF5ln7z1SW5D1ZatOOqSN75HLd%2FRtiM8eAIj%2BQ1LlNz%2FG0MdiK%2BlIvYdo9lQOK%2BId2ZWBaRMRnYxXiYufptaOQweVFg7Mjm8ZE6sp60Yzd1SRwCtdFhH5brsy0F8DVfAWvy0ETDZ1n%2FfNLu%2FRqXFgNVmcwpX1SK%2BBy0gSyUZMUM3HNp9wZTHAwI0UtLs8e7Ee1d2DC6MJXJTw2uGK6UYZaXeQPIkUEdtpVCk0lXH3oXG%2FM6GYBinW%2FE0FkiCS3yLd62Y8knPcmM8BGQZ36HkooHPkPpF1kjhm3m%2FujTGJPpdL44XDSOejdjYay78JKA8yS79RHM8S%2BJb2lUGsrIF05evM%2BPBFqbdxyf19iyFkvnj6lLTjmrkQRZUjti9gxJJ1br9ZlIPvigr6%2BqEwutOpwwY6pgFRFbS4UC0TOUyOtPYZplVIGlzi8q90urGUIzUIOsdY6FaHrm3RTbkdjmwt3vbsPPuy%2FVOCfizU6PY2lOCSehFwya5YU23tTzUOuzok9fl3f%2FJtALt8vASu7dtwVG8aXYaC1zwX1LYbBKZip91%2FPfIahiF8H730z6IYXOsLxtK5uwieuUTXZIOnf%2FtP4JplHXrCABuU4nlLesgEe3reG7VRJ3AgaaEb&X-Amz-Signature=da33ace030e068087aeb9a2df8a5168b44cec709a1e9b7e7fcdaa90224a00bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKFSIR7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIATos8%2FjC03gW%2BIOXEhN8mi%2FCkQbl6%2FwFOHkg%2BS%2F0UFJAiA0JEVu3IVJ%2BEPCPaHFXjZ%2FOua11vhWfrw9x2JVUw%2F%2BMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhhGsW0V77fWnC%2FXKKtwDIxys%2BlhceZtbfMSbfwoRiQg35WATsHioNWGMqrHU%2ByLVr6TXmYopZe0WWT%2Bq%2Bpk0jqtDNMYM3o4K%2F9S2FDQxwQsFCVVhB%2BZSFjjWGZFfc5HfbjjAlkQBfdE5DM6n4kduO%2BXbHOnNMCtR1BLwlYUVnqB808iG044i0lZZtaOwmjv%2BUNhVfiYYmGEK%2BPLXGWfHxB%2BGHdS7o5QKpG0YGQF2%2BbNRSYSJG7Ts%2BSk%2FIg%2F5dCTGF5ln7z1SW5D1ZatOOqSN75HLd%2FRtiM8eAIj%2BQ1LlNz%2FG0MdiK%2BlIvYdo9lQOK%2BId2ZWBaRMRnYxXiYufptaOQweVFg7Mjm8ZE6sp60Yzd1SRwCtdFhH5brsy0F8DVfAWvy0ETDZ1n%2FfNLu%2FRqXFgNVmcwpX1SK%2BBy0gSyUZMUM3HNp9wZTHAwI0UtLs8e7Ee1d2DC6MJXJTw2uGK6UYZaXeQPIkUEdtpVCk0lXH3oXG%2FM6GYBinW%2FE0FkiCS3yLd62Y8knPcmM8BGQZ36HkooHPkPpF1kjhm3m%2FujTGJPpdL44XDSOejdjYay78JKA8yS79RHM8S%2BJb2lUGsrIF05evM%2BPBFqbdxyf19iyFkvnj6lLTjmrkQRZUjti9gxJJ1br9ZlIPvigr6%2BqEwutOpwwY6pgFRFbS4UC0TOUyOtPYZplVIGlzi8q90urGUIzUIOsdY6FaHrm3RTbkdjmwt3vbsPPuy%2FVOCfizU6PY2lOCSehFwya5YU23tTzUOuzok9fl3f%2FJtALt8vASu7dtwVG8aXYaC1zwX1LYbBKZip91%2FPfIahiF8H730z6IYXOsLxtK5uwieuUTXZIOnf%2FtP4JplHXrCABuU4nlLesgEe3reG7VRJ3AgaaEb&X-Amz-Signature=1b4a1f946648eb65b736e24cd4ab680aefe33f13646d535d17a763b8152b2344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKFSIR7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIATos8%2FjC03gW%2BIOXEhN8mi%2FCkQbl6%2FwFOHkg%2BS%2F0UFJAiA0JEVu3IVJ%2BEPCPaHFXjZ%2FOua11vhWfrw9x2JVUw%2F%2BMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhhGsW0V77fWnC%2FXKKtwDIxys%2BlhceZtbfMSbfwoRiQg35WATsHioNWGMqrHU%2ByLVr6TXmYopZe0WWT%2Bq%2Bpk0jqtDNMYM3o4K%2F9S2FDQxwQsFCVVhB%2BZSFjjWGZFfc5HfbjjAlkQBfdE5DM6n4kduO%2BXbHOnNMCtR1BLwlYUVnqB808iG044i0lZZtaOwmjv%2BUNhVfiYYmGEK%2BPLXGWfHxB%2BGHdS7o5QKpG0YGQF2%2BbNRSYSJG7Ts%2BSk%2FIg%2F5dCTGF5ln7z1SW5D1ZatOOqSN75HLd%2FRtiM8eAIj%2BQ1LlNz%2FG0MdiK%2BlIvYdo9lQOK%2BId2ZWBaRMRnYxXiYufptaOQweVFg7Mjm8ZE6sp60Yzd1SRwCtdFhH5brsy0F8DVfAWvy0ETDZ1n%2FfNLu%2FRqXFgNVmcwpX1SK%2BBy0gSyUZMUM3HNp9wZTHAwI0UtLs8e7Ee1d2DC6MJXJTw2uGK6UYZaXeQPIkUEdtpVCk0lXH3oXG%2FM6GYBinW%2FE0FkiCS3yLd62Y8knPcmM8BGQZ36HkooHPkPpF1kjhm3m%2FujTGJPpdL44XDSOejdjYay78JKA8yS79RHM8S%2BJb2lUGsrIF05evM%2BPBFqbdxyf19iyFkvnj6lLTjmrkQRZUjti9gxJJ1br9ZlIPvigr6%2BqEwutOpwwY6pgFRFbS4UC0TOUyOtPYZplVIGlzi8q90urGUIzUIOsdY6FaHrm3RTbkdjmwt3vbsPPuy%2FVOCfizU6PY2lOCSehFwya5YU23tTzUOuzok9fl3f%2FJtALt8vASu7dtwVG8aXYaC1zwX1LYbBKZip91%2FPfIahiF8H730z6IYXOsLxtK5uwieuUTXZIOnf%2FtP4JplHXrCABuU4nlLesgEe3reG7VRJ3AgaaEb&X-Amz-Signature=df1862866a1dfee7405da971a4785e953c8e5c646b4e064dc11748eb2617f73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKFSIR7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIATos8%2FjC03gW%2BIOXEhN8mi%2FCkQbl6%2FwFOHkg%2BS%2F0UFJAiA0JEVu3IVJ%2BEPCPaHFXjZ%2FOua11vhWfrw9x2JVUw%2F%2BMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhhGsW0V77fWnC%2FXKKtwDIxys%2BlhceZtbfMSbfwoRiQg35WATsHioNWGMqrHU%2ByLVr6TXmYopZe0WWT%2Bq%2Bpk0jqtDNMYM3o4K%2F9S2FDQxwQsFCVVhB%2BZSFjjWGZFfc5HfbjjAlkQBfdE5DM6n4kduO%2BXbHOnNMCtR1BLwlYUVnqB808iG044i0lZZtaOwmjv%2BUNhVfiYYmGEK%2BPLXGWfHxB%2BGHdS7o5QKpG0YGQF2%2BbNRSYSJG7Ts%2BSk%2FIg%2F5dCTGF5ln7z1SW5D1ZatOOqSN75HLd%2FRtiM8eAIj%2BQ1LlNz%2FG0MdiK%2BlIvYdo9lQOK%2BId2ZWBaRMRnYxXiYufptaOQweVFg7Mjm8ZE6sp60Yzd1SRwCtdFhH5brsy0F8DVfAWvy0ETDZ1n%2FfNLu%2FRqXFgNVmcwpX1SK%2BBy0gSyUZMUM3HNp9wZTHAwI0UtLs8e7Ee1d2DC6MJXJTw2uGK6UYZaXeQPIkUEdtpVCk0lXH3oXG%2FM6GYBinW%2FE0FkiCS3yLd62Y8knPcmM8BGQZ36HkooHPkPpF1kjhm3m%2FujTGJPpdL44XDSOejdjYay78JKA8yS79RHM8S%2BJb2lUGsrIF05evM%2BPBFqbdxyf19iyFkvnj6lLTjmrkQRZUjti9gxJJ1br9ZlIPvigr6%2BqEwutOpwwY6pgFRFbS4UC0TOUyOtPYZplVIGlzi8q90urGUIzUIOsdY6FaHrm3RTbkdjmwt3vbsPPuy%2FVOCfizU6PY2lOCSehFwya5YU23tTzUOuzok9fl3f%2FJtALt8vASu7dtwVG8aXYaC1zwX1LYbBKZip91%2FPfIahiF8H730z6IYXOsLxtK5uwieuUTXZIOnf%2FtP4JplHXrCABuU4nlLesgEe3reG7VRJ3AgaaEb&X-Amz-Signature=52b1ebe8e9a6ebdc8f960c68e5fbc82ff43238c37ad386bac697fd09c35c3218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKFSIR7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIATos8%2FjC03gW%2BIOXEhN8mi%2FCkQbl6%2FwFOHkg%2BS%2F0UFJAiA0JEVu3IVJ%2BEPCPaHFXjZ%2FOua11vhWfrw9x2JVUw%2F%2BMSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhhGsW0V77fWnC%2FXKKtwDIxys%2BlhceZtbfMSbfwoRiQg35WATsHioNWGMqrHU%2ByLVr6TXmYopZe0WWT%2Bq%2Bpk0jqtDNMYM3o4K%2F9S2FDQxwQsFCVVhB%2BZSFjjWGZFfc5HfbjjAlkQBfdE5DM6n4kduO%2BXbHOnNMCtR1BLwlYUVnqB808iG044i0lZZtaOwmjv%2BUNhVfiYYmGEK%2BPLXGWfHxB%2BGHdS7o5QKpG0YGQF2%2BbNRSYSJG7Ts%2BSk%2FIg%2F5dCTGF5ln7z1SW5D1ZatOOqSN75HLd%2FRtiM8eAIj%2BQ1LlNz%2FG0MdiK%2BlIvYdo9lQOK%2BId2ZWBaRMRnYxXiYufptaOQweVFg7Mjm8ZE6sp60Yzd1SRwCtdFhH5brsy0F8DVfAWvy0ETDZ1n%2FfNLu%2FRqXFgNVmcwpX1SK%2BBy0gSyUZMUM3HNp9wZTHAwI0UtLs8e7Ee1d2DC6MJXJTw2uGK6UYZaXeQPIkUEdtpVCk0lXH3oXG%2FM6GYBinW%2FE0FkiCS3yLd62Y8knPcmM8BGQZ36HkooHPkPpF1kjhm3m%2FujTGJPpdL44XDSOejdjYay78JKA8yS79RHM8S%2BJb2lUGsrIF05evM%2BPBFqbdxyf19iyFkvnj6lLTjmrkQRZUjti9gxJJ1br9ZlIPvigr6%2BqEwutOpwwY6pgFRFbS4UC0TOUyOtPYZplVIGlzi8q90urGUIzUIOsdY6FaHrm3RTbkdjmwt3vbsPPuy%2FVOCfizU6PY2lOCSehFwya5YU23tTzUOuzok9fl3f%2FJtALt8vASu7dtwVG8aXYaC1zwX1LYbBKZip91%2FPfIahiF8H730z6IYXOsLxtK5uwieuUTXZIOnf%2FtP4JplHXrCABuU4nlLesgEe3reG7VRJ3AgaaEb&X-Amz-Signature=a39c342b4e13dddd9672c011228712e12eb57c01e9469f562b849c3373c921de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

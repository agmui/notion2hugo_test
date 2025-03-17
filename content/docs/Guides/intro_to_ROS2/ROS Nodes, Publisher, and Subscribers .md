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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERCRRF5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEGHC18MRzveY8zGuKUpOvlqJG1i6Ohmbe8PrKodvb19Ah9ZPAVwwRsYQrfbypP7RBLukvnEbks2OVvVjeCBGZRDKv8DCD4QABoMNjM3NDIzMTgzODA1IgzITrWuwJ%2BAy%2BKqevMq3AMvjkS1%2B0ot6UB%2FbY0w6NMHlq6677wHMKxNYIEfxYhwwAh86sN7Ozg%2FAKqO2%2BanRw4bXNjudfGZD5S%2FUlqcOBy7SbQQfAsCtTRS2W15XfyyobnjkN2V5WqNsh9x%2Fa02aRBYw4nrvEYyCvFzksaoxHgQbIBfZqVytep7qwpFgq8szIBIPjemFDC9bbFEvwyCcR8MO5ZR2s7NwLJCCNxWlOgS5F7%2F3ENKdFkDx%2Fkqvo2B56klh4ltpc92Nk6qk7IE4lxnkPLf6wUe7yY3cycy6cK1YTkULdC8Q85b32VInamm0StRMxvUEi8iYe6P2v9xSIRh60i%2FMl7P4JoA0%2FTTOhMWX79UR%2B4C32H3SX1Rap%2F23dZaubk%2B7vAFApQKmc%2BcKHMPlDskdz8DFMAVym9vIpuIhurJcjia4wK%2FdrVfGK8Od9RqslgbrIDIbLQOdn9ipt8X1DV2xOh8Bbw7fKekMJqecX8%2FJjOwkiGUW90eRaOsUVXvSmX6TfqaTwNCMDNZVQ2Gyk3KD3IRVvc4G3D1qwl5lAGmG9RIExkHExQe4Zpj1szD1sgJ8u4gna0HxlXrxxk6AGILvyA4wPYedo%2BKBIqvt168i%2FjAo74Z%2FKUZzNqyHU1kQtP0TJ12RcPtHjCF296%2BBjqnAWtFeIXHjtfy5HZMnbw2BX6aOpwpuZo2Z%2BYyL77vaz9W%2BkjK2thHnmeWqV1iWJpfiNoNsSwFnLQ6KXsxEW1Utx3pXixZEfEl%2BNuyG8pCoHWxrgg2ntJ5SmMkNm0VrFaJHqPtJDGtk08r%2BHBtUou1XglaQoDzfxeHPM%2FsAyoiwalQj8e4FB6F721TPxFI9Cf%2FfCZHdD3y7Th3FgKV4C4ynN2pqg01uUxo&X-Amz-Signature=39b736bfa8e5fde494461b1aea41bf01472ef8484ec829ec66ae62274284fe14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERCRRF5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEGHC18MRzveY8zGuKUpOvlqJG1i6Ohmbe8PrKodvb19Ah9ZPAVwwRsYQrfbypP7RBLukvnEbks2OVvVjeCBGZRDKv8DCD4QABoMNjM3NDIzMTgzODA1IgzITrWuwJ%2BAy%2BKqevMq3AMvjkS1%2B0ot6UB%2FbY0w6NMHlq6677wHMKxNYIEfxYhwwAh86sN7Ozg%2FAKqO2%2BanRw4bXNjudfGZD5S%2FUlqcOBy7SbQQfAsCtTRS2W15XfyyobnjkN2V5WqNsh9x%2Fa02aRBYw4nrvEYyCvFzksaoxHgQbIBfZqVytep7qwpFgq8szIBIPjemFDC9bbFEvwyCcR8MO5ZR2s7NwLJCCNxWlOgS5F7%2F3ENKdFkDx%2Fkqvo2B56klh4ltpc92Nk6qk7IE4lxnkPLf6wUe7yY3cycy6cK1YTkULdC8Q85b32VInamm0StRMxvUEi8iYe6P2v9xSIRh60i%2FMl7P4JoA0%2FTTOhMWX79UR%2B4C32H3SX1Rap%2F23dZaubk%2B7vAFApQKmc%2BcKHMPlDskdz8DFMAVym9vIpuIhurJcjia4wK%2FdrVfGK8Od9RqslgbrIDIbLQOdn9ipt8X1DV2xOh8Bbw7fKekMJqecX8%2FJjOwkiGUW90eRaOsUVXvSmX6TfqaTwNCMDNZVQ2Gyk3KD3IRVvc4G3D1qwl5lAGmG9RIExkHExQe4Zpj1szD1sgJ8u4gna0HxlXrxxk6AGILvyA4wPYedo%2BKBIqvt168i%2FjAo74Z%2FKUZzNqyHU1kQtP0TJ12RcPtHjCF296%2BBjqnAWtFeIXHjtfy5HZMnbw2BX6aOpwpuZo2Z%2BYyL77vaz9W%2BkjK2thHnmeWqV1iWJpfiNoNsSwFnLQ6KXsxEW1Utx3pXixZEfEl%2BNuyG8pCoHWxrgg2ntJ5SmMkNm0VrFaJHqPtJDGtk08r%2BHBtUou1XglaQoDzfxeHPM%2FsAyoiwalQj8e4FB6F721TPxFI9Cf%2FfCZHdD3y7Th3FgKV4C4ynN2pqg01uUxo&X-Amz-Signature=dcb4b87c4b17cd2e77215ae8f96825a1f5e6b66d4eec3373b98ebca290c4bbe8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERCRRF5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEGHC18MRzveY8zGuKUpOvlqJG1i6Ohmbe8PrKodvb19Ah9ZPAVwwRsYQrfbypP7RBLukvnEbks2OVvVjeCBGZRDKv8DCD4QABoMNjM3NDIzMTgzODA1IgzITrWuwJ%2BAy%2BKqevMq3AMvjkS1%2B0ot6UB%2FbY0w6NMHlq6677wHMKxNYIEfxYhwwAh86sN7Ozg%2FAKqO2%2BanRw4bXNjudfGZD5S%2FUlqcOBy7SbQQfAsCtTRS2W15XfyyobnjkN2V5WqNsh9x%2Fa02aRBYw4nrvEYyCvFzksaoxHgQbIBfZqVytep7qwpFgq8szIBIPjemFDC9bbFEvwyCcR8MO5ZR2s7NwLJCCNxWlOgS5F7%2F3ENKdFkDx%2Fkqvo2B56klh4ltpc92Nk6qk7IE4lxnkPLf6wUe7yY3cycy6cK1YTkULdC8Q85b32VInamm0StRMxvUEi8iYe6P2v9xSIRh60i%2FMl7P4JoA0%2FTTOhMWX79UR%2B4C32H3SX1Rap%2F23dZaubk%2B7vAFApQKmc%2BcKHMPlDskdz8DFMAVym9vIpuIhurJcjia4wK%2FdrVfGK8Od9RqslgbrIDIbLQOdn9ipt8X1DV2xOh8Bbw7fKekMJqecX8%2FJjOwkiGUW90eRaOsUVXvSmX6TfqaTwNCMDNZVQ2Gyk3KD3IRVvc4G3D1qwl5lAGmG9RIExkHExQe4Zpj1szD1sgJ8u4gna0HxlXrxxk6AGILvyA4wPYedo%2BKBIqvt168i%2FjAo74Z%2FKUZzNqyHU1kQtP0TJ12RcPtHjCF296%2BBjqnAWtFeIXHjtfy5HZMnbw2BX6aOpwpuZo2Z%2BYyL77vaz9W%2BkjK2thHnmeWqV1iWJpfiNoNsSwFnLQ6KXsxEW1Utx3pXixZEfEl%2BNuyG8pCoHWxrgg2ntJ5SmMkNm0VrFaJHqPtJDGtk08r%2BHBtUou1XglaQoDzfxeHPM%2FsAyoiwalQj8e4FB6F721TPxFI9Cf%2FfCZHdD3y7Th3FgKV4C4ynN2pqg01uUxo&X-Amz-Signature=eaad9f27e37c2e5c2304d1c78b275ea61df84969fc173d04c5edf4276e474a85&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERCRRF5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEGHC18MRzveY8zGuKUpOvlqJG1i6Ohmbe8PrKodvb19Ah9ZPAVwwRsYQrfbypP7RBLukvnEbks2OVvVjeCBGZRDKv8DCD4QABoMNjM3NDIzMTgzODA1IgzITrWuwJ%2BAy%2BKqevMq3AMvjkS1%2B0ot6UB%2FbY0w6NMHlq6677wHMKxNYIEfxYhwwAh86sN7Ozg%2FAKqO2%2BanRw4bXNjudfGZD5S%2FUlqcOBy7SbQQfAsCtTRS2W15XfyyobnjkN2V5WqNsh9x%2Fa02aRBYw4nrvEYyCvFzksaoxHgQbIBfZqVytep7qwpFgq8szIBIPjemFDC9bbFEvwyCcR8MO5ZR2s7NwLJCCNxWlOgS5F7%2F3ENKdFkDx%2Fkqvo2B56klh4ltpc92Nk6qk7IE4lxnkPLf6wUe7yY3cycy6cK1YTkULdC8Q85b32VInamm0StRMxvUEi8iYe6P2v9xSIRh60i%2FMl7P4JoA0%2FTTOhMWX79UR%2B4C32H3SX1Rap%2F23dZaubk%2B7vAFApQKmc%2BcKHMPlDskdz8DFMAVym9vIpuIhurJcjia4wK%2FdrVfGK8Od9RqslgbrIDIbLQOdn9ipt8X1DV2xOh8Bbw7fKekMJqecX8%2FJjOwkiGUW90eRaOsUVXvSmX6TfqaTwNCMDNZVQ2Gyk3KD3IRVvc4G3D1qwl5lAGmG9RIExkHExQe4Zpj1szD1sgJ8u4gna0HxlXrxxk6AGILvyA4wPYedo%2BKBIqvt168i%2FjAo74Z%2FKUZzNqyHU1kQtP0TJ12RcPtHjCF296%2BBjqnAWtFeIXHjtfy5HZMnbw2BX6aOpwpuZo2Z%2BYyL77vaz9W%2BkjK2thHnmeWqV1iWJpfiNoNsSwFnLQ6KXsxEW1Utx3pXixZEfEl%2BNuyG8pCoHWxrgg2ntJ5SmMkNm0VrFaJHqPtJDGtk08r%2BHBtUou1XglaQoDzfxeHPM%2FsAyoiwalQj8e4FB6F721TPxFI9Cf%2FfCZHdD3y7Th3FgKV4C4ynN2pqg01uUxo&X-Amz-Signature=ee897907b2449530c600320fe4049a85c6899ddddf0e14596211e2b5583220c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERCRRF5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEGHC18MRzveY8zGuKUpOvlqJG1i6Ohmbe8PrKodvb19Ah9ZPAVwwRsYQrfbypP7RBLukvnEbks2OVvVjeCBGZRDKv8DCD4QABoMNjM3NDIzMTgzODA1IgzITrWuwJ%2BAy%2BKqevMq3AMvjkS1%2B0ot6UB%2FbY0w6NMHlq6677wHMKxNYIEfxYhwwAh86sN7Ozg%2FAKqO2%2BanRw4bXNjudfGZD5S%2FUlqcOBy7SbQQfAsCtTRS2W15XfyyobnjkN2V5WqNsh9x%2Fa02aRBYw4nrvEYyCvFzksaoxHgQbIBfZqVytep7qwpFgq8szIBIPjemFDC9bbFEvwyCcR8MO5ZR2s7NwLJCCNxWlOgS5F7%2F3ENKdFkDx%2Fkqvo2B56klh4ltpc92Nk6qk7IE4lxnkPLf6wUe7yY3cycy6cK1YTkULdC8Q85b32VInamm0StRMxvUEi8iYe6P2v9xSIRh60i%2FMl7P4JoA0%2FTTOhMWX79UR%2B4C32H3SX1Rap%2F23dZaubk%2B7vAFApQKmc%2BcKHMPlDskdz8DFMAVym9vIpuIhurJcjia4wK%2FdrVfGK8Od9RqslgbrIDIbLQOdn9ipt8X1DV2xOh8Bbw7fKekMJqecX8%2FJjOwkiGUW90eRaOsUVXvSmX6TfqaTwNCMDNZVQ2Gyk3KD3IRVvc4G3D1qwl5lAGmG9RIExkHExQe4Zpj1szD1sgJ8u4gna0HxlXrxxk6AGILvyA4wPYedo%2BKBIqvt168i%2FjAo74Z%2FKUZzNqyHU1kQtP0TJ12RcPtHjCF296%2BBjqnAWtFeIXHjtfy5HZMnbw2BX6aOpwpuZo2Z%2BYyL77vaz9W%2BkjK2thHnmeWqV1iWJpfiNoNsSwFnLQ6KXsxEW1Utx3pXixZEfEl%2BNuyG8pCoHWxrgg2ntJ5SmMkNm0VrFaJHqPtJDGtk08r%2BHBtUou1XglaQoDzfxeHPM%2FsAyoiwalQj8e4FB6F721TPxFI9Cf%2FfCZHdD3y7Th3FgKV4C4ynN2pqg01uUxo&X-Amz-Signature=790ec2748540efa00ada8305c76aaf0057c8e54e47db67c962a2f1e26a3e7bae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERCRRF5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEGHC18MRzveY8zGuKUpOvlqJG1i6Ohmbe8PrKodvb19Ah9ZPAVwwRsYQrfbypP7RBLukvnEbks2OVvVjeCBGZRDKv8DCD4QABoMNjM3NDIzMTgzODA1IgzITrWuwJ%2BAy%2BKqevMq3AMvjkS1%2B0ot6UB%2FbY0w6NMHlq6677wHMKxNYIEfxYhwwAh86sN7Ozg%2FAKqO2%2BanRw4bXNjudfGZD5S%2FUlqcOBy7SbQQfAsCtTRS2W15XfyyobnjkN2V5WqNsh9x%2Fa02aRBYw4nrvEYyCvFzksaoxHgQbIBfZqVytep7qwpFgq8szIBIPjemFDC9bbFEvwyCcR8MO5ZR2s7NwLJCCNxWlOgS5F7%2F3ENKdFkDx%2Fkqvo2B56klh4ltpc92Nk6qk7IE4lxnkPLf6wUe7yY3cycy6cK1YTkULdC8Q85b32VInamm0StRMxvUEi8iYe6P2v9xSIRh60i%2FMl7P4JoA0%2FTTOhMWX79UR%2B4C32H3SX1Rap%2F23dZaubk%2B7vAFApQKmc%2BcKHMPlDskdz8DFMAVym9vIpuIhurJcjia4wK%2FdrVfGK8Od9RqslgbrIDIbLQOdn9ipt8X1DV2xOh8Bbw7fKekMJqecX8%2FJjOwkiGUW90eRaOsUVXvSmX6TfqaTwNCMDNZVQ2Gyk3KD3IRVvc4G3D1qwl5lAGmG9RIExkHExQe4Zpj1szD1sgJ8u4gna0HxlXrxxk6AGILvyA4wPYedo%2BKBIqvt168i%2FjAo74Z%2FKUZzNqyHU1kQtP0TJ12RcPtHjCF296%2BBjqnAWtFeIXHjtfy5HZMnbw2BX6aOpwpuZo2Z%2BYyL77vaz9W%2BkjK2thHnmeWqV1iWJpfiNoNsSwFnLQ6KXsxEW1Utx3pXixZEfEl%2BNuyG8pCoHWxrgg2ntJ5SmMkNm0VrFaJHqPtJDGtk08r%2BHBtUou1XglaQoDzfxeHPM%2FsAyoiwalQj8e4FB6F721TPxFI9Cf%2FfCZHdD3y7Th3FgKV4C4ynN2pqg01uUxo&X-Amz-Signature=a85b95cb2f142fe816a07db34df2f0503dc60627b5384f21f161469fae99cc8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERCRRF5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEGHC18MRzveY8zGuKUpOvlqJG1i6Ohmbe8PrKodvb19Ah9ZPAVwwRsYQrfbypP7RBLukvnEbks2OVvVjeCBGZRDKv8DCD4QABoMNjM3NDIzMTgzODA1IgzITrWuwJ%2BAy%2BKqevMq3AMvjkS1%2B0ot6UB%2FbY0w6NMHlq6677wHMKxNYIEfxYhwwAh86sN7Ozg%2FAKqO2%2BanRw4bXNjudfGZD5S%2FUlqcOBy7SbQQfAsCtTRS2W15XfyyobnjkN2V5WqNsh9x%2Fa02aRBYw4nrvEYyCvFzksaoxHgQbIBfZqVytep7qwpFgq8szIBIPjemFDC9bbFEvwyCcR8MO5ZR2s7NwLJCCNxWlOgS5F7%2F3ENKdFkDx%2Fkqvo2B56klh4ltpc92Nk6qk7IE4lxnkPLf6wUe7yY3cycy6cK1YTkULdC8Q85b32VInamm0StRMxvUEi8iYe6P2v9xSIRh60i%2FMl7P4JoA0%2FTTOhMWX79UR%2B4C32H3SX1Rap%2F23dZaubk%2B7vAFApQKmc%2BcKHMPlDskdz8DFMAVym9vIpuIhurJcjia4wK%2FdrVfGK8Od9RqslgbrIDIbLQOdn9ipt8X1DV2xOh8Bbw7fKekMJqecX8%2FJjOwkiGUW90eRaOsUVXvSmX6TfqaTwNCMDNZVQ2Gyk3KD3IRVvc4G3D1qwl5lAGmG9RIExkHExQe4Zpj1szD1sgJ8u4gna0HxlXrxxk6AGILvyA4wPYedo%2BKBIqvt168i%2FjAo74Z%2FKUZzNqyHU1kQtP0TJ12RcPtHjCF296%2BBjqnAWtFeIXHjtfy5HZMnbw2BX6aOpwpuZo2Z%2BYyL77vaz9W%2BkjK2thHnmeWqV1iWJpfiNoNsSwFnLQ6KXsxEW1Utx3pXixZEfEl%2BNuyG8pCoHWxrgg2ntJ5SmMkNm0VrFaJHqPtJDGtk08r%2BHBtUou1XglaQoDzfxeHPM%2FsAyoiwalQj8e4FB6F721TPxFI9Cf%2FfCZHdD3y7Th3FgKV4C4ynN2pqg01uUxo&X-Amz-Signature=72e88f4ae79b6ded7d66ddf804cad89641c849d41e563490ecb8634f7c78c47d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERCRRF5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEGHC18MRzveY8zGuKUpOvlqJG1i6Ohmbe8PrKodvb19Ah9ZPAVwwRsYQrfbypP7RBLukvnEbks2OVvVjeCBGZRDKv8DCD4QABoMNjM3NDIzMTgzODA1IgzITrWuwJ%2BAy%2BKqevMq3AMvjkS1%2B0ot6UB%2FbY0w6NMHlq6677wHMKxNYIEfxYhwwAh86sN7Ozg%2FAKqO2%2BanRw4bXNjudfGZD5S%2FUlqcOBy7SbQQfAsCtTRS2W15XfyyobnjkN2V5WqNsh9x%2Fa02aRBYw4nrvEYyCvFzksaoxHgQbIBfZqVytep7qwpFgq8szIBIPjemFDC9bbFEvwyCcR8MO5ZR2s7NwLJCCNxWlOgS5F7%2F3ENKdFkDx%2Fkqvo2B56klh4ltpc92Nk6qk7IE4lxnkPLf6wUe7yY3cycy6cK1YTkULdC8Q85b32VInamm0StRMxvUEi8iYe6P2v9xSIRh60i%2FMl7P4JoA0%2FTTOhMWX79UR%2B4C32H3SX1Rap%2F23dZaubk%2B7vAFApQKmc%2BcKHMPlDskdz8DFMAVym9vIpuIhurJcjia4wK%2FdrVfGK8Od9RqslgbrIDIbLQOdn9ipt8X1DV2xOh8Bbw7fKekMJqecX8%2FJjOwkiGUW90eRaOsUVXvSmX6TfqaTwNCMDNZVQ2Gyk3KD3IRVvc4G3D1qwl5lAGmG9RIExkHExQe4Zpj1szD1sgJ8u4gna0HxlXrxxk6AGILvyA4wPYedo%2BKBIqvt168i%2FjAo74Z%2FKUZzNqyHU1kQtP0TJ12RcPtHjCF296%2BBjqnAWtFeIXHjtfy5HZMnbw2BX6aOpwpuZo2Z%2BYyL77vaz9W%2BkjK2thHnmeWqV1iWJpfiNoNsSwFnLQ6KXsxEW1Utx3pXixZEfEl%2BNuyG8pCoHWxrgg2ntJ5SmMkNm0VrFaJHqPtJDGtk08r%2BHBtUou1XglaQoDzfxeHPM%2FsAyoiwalQj8e4FB6F721TPxFI9Cf%2FfCZHdD3y7Th3FgKV4C4ynN2pqg01uUxo&X-Amz-Signature=5ae69a057d85395f763990cb046de4fa6d8c966e4a3df0279fc3f3b87abcc51c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

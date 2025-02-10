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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ANGNNP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkeBTVCjhE1CbUZmII7yeEdePxLrwkUKo3HxICWaDScAiEAkbj9t9REiKDRnkNV7rKHUz6k1iGH11rYuqjM%2Fjy%2B4OMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpzKIWZpFdnoQblQSrcA%2FDQWx81Kj2cr8MA8yEo2lDgwamBw%2BtrQR900q4Vco%2B%2BqnoMK%2F8Jr2pG1r%2BJOfZ4sQ3Xd6VG8NF6B9oRCwQUr6MyjzzgG1fEZttvM1mMqPhXWxbyAfSiZwZJiodk5durJi3t6iEncHar8wkG7gz7rUrw1b8rCsEwVTVt3paKMgvQsBsrQDRNkv7e3gWCH3PI4Kk4zKWoOrgxAI%2F95FYLLF%2Fo3kSNVhSJbGFlDGGISZembECVdbcEMltEGU15e3DE3XusSU7DlxG%2Fx%2BXILH6FhU4lR4qaE5r3oP7hylHwjNk7gjYSe7fjhQg3Djr8HEw8%2FaFlyE8rFakU7PiFmytoqSPoBnOPL6PzEz8mokn0%2F3UKdejB0KHpQtCElbU80Q1tRiRwFhkEIX6Yw8agZxlSKerWlra%2BGPaBODTuY5WdtRUv6ykBl%2FHnW0GAdZ9n03s7s7zqsH%2BU4nORZ%2BchuWTo2sk5Yd5BtIj2vZqlkmDNwMdFbdqmToGzrJIpWfyNT3bCjnXfafr819xBLcqgBh82%2BPtwLHnPWHAM3JgnKxi5obcEQF9SEV0pzume6oQCX0uw3eMohjAy%2FnKg2As8nkLjC%2F7KvPuJF7Y31tZe9k1jScmzOJ1atur%2BIr2sGXgJMPm7qL0GOqUB2yyMuH38YOjYsAcsY4Fw%2B%2FOHmb39WeyNWDfRYy6kcQ3njpZyus%2FyBd34%2FKYBAbDVTfO4vuQ58a67f6hKbpNVos0fEEvVGtgSOA09rtwGUcNw4mf8Ev4DNUrct6cFQ9wEuaMFBhyyiWXwPL0hRKAw5Ed9PU25xJFULf2Vwb6EJARzUa4fxDxVbP6lOGuSUIx7pYBIfIKO0LtV7TWGPZ0YQeE3MdAo&X-Amz-Signature=1692cb3baa3aee0027b679367742209336e3ac369a8747df7d1676473cb9f810&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ANGNNP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkeBTVCjhE1CbUZmII7yeEdePxLrwkUKo3HxICWaDScAiEAkbj9t9REiKDRnkNV7rKHUz6k1iGH11rYuqjM%2Fjy%2B4OMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpzKIWZpFdnoQblQSrcA%2FDQWx81Kj2cr8MA8yEo2lDgwamBw%2BtrQR900q4Vco%2B%2BqnoMK%2F8Jr2pG1r%2BJOfZ4sQ3Xd6VG8NF6B9oRCwQUr6MyjzzgG1fEZttvM1mMqPhXWxbyAfSiZwZJiodk5durJi3t6iEncHar8wkG7gz7rUrw1b8rCsEwVTVt3paKMgvQsBsrQDRNkv7e3gWCH3PI4Kk4zKWoOrgxAI%2F95FYLLF%2Fo3kSNVhSJbGFlDGGISZembECVdbcEMltEGU15e3DE3XusSU7DlxG%2Fx%2BXILH6FhU4lR4qaE5r3oP7hylHwjNk7gjYSe7fjhQg3Djr8HEw8%2FaFlyE8rFakU7PiFmytoqSPoBnOPL6PzEz8mokn0%2F3UKdejB0KHpQtCElbU80Q1tRiRwFhkEIX6Yw8agZxlSKerWlra%2BGPaBODTuY5WdtRUv6ykBl%2FHnW0GAdZ9n03s7s7zqsH%2BU4nORZ%2BchuWTo2sk5Yd5BtIj2vZqlkmDNwMdFbdqmToGzrJIpWfyNT3bCjnXfafr819xBLcqgBh82%2BPtwLHnPWHAM3JgnKxi5obcEQF9SEV0pzume6oQCX0uw3eMohjAy%2FnKg2As8nkLjC%2F7KvPuJF7Y31tZe9k1jScmzOJ1atur%2BIr2sGXgJMPm7qL0GOqUB2yyMuH38YOjYsAcsY4Fw%2B%2FOHmb39WeyNWDfRYy6kcQ3njpZyus%2FyBd34%2FKYBAbDVTfO4vuQ58a67f6hKbpNVos0fEEvVGtgSOA09rtwGUcNw4mf8Ev4DNUrct6cFQ9wEuaMFBhyyiWXwPL0hRKAw5Ed9PU25xJFULf2Vwb6EJARzUa4fxDxVbP6lOGuSUIx7pYBIfIKO0LtV7TWGPZ0YQeE3MdAo&X-Amz-Signature=a4d6cbd63bcedf3fe6bf8e556740aa90a136ea9f843b3594633dcff01ce6e246&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ANGNNP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkeBTVCjhE1CbUZmII7yeEdePxLrwkUKo3HxICWaDScAiEAkbj9t9REiKDRnkNV7rKHUz6k1iGH11rYuqjM%2Fjy%2B4OMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpzKIWZpFdnoQblQSrcA%2FDQWx81Kj2cr8MA8yEo2lDgwamBw%2BtrQR900q4Vco%2B%2BqnoMK%2F8Jr2pG1r%2BJOfZ4sQ3Xd6VG8NF6B9oRCwQUr6MyjzzgG1fEZttvM1mMqPhXWxbyAfSiZwZJiodk5durJi3t6iEncHar8wkG7gz7rUrw1b8rCsEwVTVt3paKMgvQsBsrQDRNkv7e3gWCH3PI4Kk4zKWoOrgxAI%2F95FYLLF%2Fo3kSNVhSJbGFlDGGISZembECVdbcEMltEGU15e3DE3XusSU7DlxG%2Fx%2BXILH6FhU4lR4qaE5r3oP7hylHwjNk7gjYSe7fjhQg3Djr8HEw8%2FaFlyE8rFakU7PiFmytoqSPoBnOPL6PzEz8mokn0%2F3UKdejB0KHpQtCElbU80Q1tRiRwFhkEIX6Yw8agZxlSKerWlra%2BGPaBODTuY5WdtRUv6ykBl%2FHnW0GAdZ9n03s7s7zqsH%2BU4nORZ%2BchuWTo2sk5Yd5BtIj2vZqlkmDNwMdFbdqmToGzrJIpWfyNT3bCjnXfafr819xBLcqgBh82%2BPtwLHnPWHAM3JgnKxi5obcEQF9SEV0pzume6oQCX0uw3eMohjAy%2FnKg2As8nkLjC%2F7KvPuJF7Y31tZe9k1jScmzOJ1atur%2BIr2sGXgJMPm7qL0GOqUB2yyMuH38YOjYsAcsY4Fw%2B%2FOHmb39WeyNWDfRYy6kcQ3njpZyus%2FyBd34%2FKYBAbDVTfO4vuQ58a67f6hKbpNVos0fEEvVGtgSOA09rtwGUcNw4mf8Ev4DNUrct6cFQ9wEuaMFBhyyiWXwPL0hRKAw5Ed9PU25xJFULf2Vwb6EJARzUa4fxDxVbP6lOGuSUIx7pYBIfIKO0LtV7TWGPZ0YQeE3MdAo&X-Amz-Signature=0bde813d938360be219765f889bc1685ce8f1764dd09e61eb2d1e6d509e4c51d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ANGNNP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkeBTVCjhE1CbUZmII7yeEdePxLrwkUKo3HxICWaDScAiEAkbj9t9REiKDRnkNV7rKHUz6k1iGH11rYuqjM%2Fjy%2B4OMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpzKIWZpFdnoQblQSrcA%2FDQWx81Kj2cr8MA8yEo2lDgwamBw%2BtrQR900q4Vco%2B%2BqnoMK%2F8Jr2pG1r%2BJOfZ4sQ3Xd6VG8NF6B9oRCwQUr6MyjzzgG1fEZttvM1mMqPhXWxbyAfSiZwZJiodk5durJi3t6iEncHar8wkG7gz7rUrw1b8rCsEwVTVt3paKMgvQsBsrQDRNkv7e3gWCH3PI4Kk4zKWoOrgxAI%2F95FYLLF%2Fo3kSNVhSJbGFlDGGISZembECVdbcEMltEGU15e3DE3XusSU7DlxG%2Fx%2BXILH6FhU4lR4qaE5r3oP7hylHwjNk7gjYSe7fjhQg3Djr8HEw8%2FaFlyE8rFakU7PiFmytoqSPoBnOPL6PzEz8mokn0%2F3UKdejB0KHpQtCElbU80Q1tRiRwFhkEIX6Yw8agZxlSKerWlra%2BGPaBODTuY5WdtRUv6ykBl%2FHnW0GAdZ9n03s7s7zqsH%2BU4nORZ%2BchuWTo2sk5Yd5BtIj2vZqlkmDNwMdFbdqmToGzrJIpWfyNT3bCjnXfafr819xBLcqgBh82%2BPtwLHnPWHAM3JgnKxi5obcEQF9SEV0pzume6oQCX0uw3eMohjAy%2FnKg2As8nkLjC%2F7KvPuJF7Y31tZe9k1jScmzOJ1atur%2BIr2sGXgJMPm7qL0GOqUB2yyMuH38YOjYsAcsY4Fw%2B%2FOHmb39WeyNWDfRYy6kcQ3njpZyus%2FyBd34%2FKYBAbDVTfO4vuQ58a67f6hKbpNVos0fEEvVGtgSOA09rtwGUcNw4mf8Ev4DNUrct6cFQ9wEuaMFBhyyiWXwPL0hRKAw5Ed9PU25xJFULf2Vwb6EJARzUa4fxDxVbP6lOGuSUIx7pYBIfIKO0LtV7TWGPZ0YQeE3MdAo&X-Amz-Signature=2edf527fd57f132aa18d97145e49db561aa0d276f86a023c3bc3e77b0f5d34fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ANGNNP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkeBTVCjhE1CbUZmII7yeEdePxLrwkUKo3HxICWaDScAiEAkbj9t9REiKDRnkNV7rKHUz6k1iGH11rYuqjM%2Fjy%2B4OMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpzKIWZpFdnoQblQSrcA%2FDQWx81Kj2cr8MA8yEo2lDgwamBw%2BtrQR900q4Vco%2B%2BqnoMK%2F8Jr2pG1r%2BJOfZ4sQ3Xd6VG8NF6B9oRCwQUr6MyjzzgG1fEZttvM1mMqPhXWxbyAfSiZwZJiodk5durJi3t6iEncHar8wkG7gz7rUrw1b8rCsEwVTVt3paKMgvQsBsrQDRNkv7e3gWCH3PI4Kk4zKWoOrgxAI%2F95FYLLF%2Fo3kSNVhSJbGFlDGGISZembECVdbcEMltEGU15e3DE3XusSU7DlxG%2Fx%2BXILH6FhU4lR4qaE5r3oP7hylHwjNk7gjYSe7fjhQg3Djr8HEw8%2FaFlyE8rFakU7PiFmytoqSPoBnOPL6PzEz8mokn0%2F3UKdejB0KHpQtCElbU80Q1tRiRwFhkEIX6Yw8agZxlSKerWlra%2BGPaBODTuY5WdtRUv6ykBl%2FHnW0GAdZ9n03s7s7zqsH%2BU4nORZ%2BchuWTo2sk5Yd5BtIj2vZqlkmDNwMdFbdqmToGzrJIpWfyNT3bCjnXfafr819xBLcqgBh82%2BPtwLHnPWHAM3JgnKxi5obcEQF9SEV0pzume6oQCX0uw3eMohjAy%2FnKg2As8nkLjC%2F7KvPuJF7Y31tZe9k1jScmzOJ1atur%2BIr2sGXgJMPm7qL0GOqUB2yyMuH38YOjYsAcsY4Fw%2B%2FOHmb39WeyNWDfRYy6kcQ3njpZyus%2FyBd34%2FKYBAbDVTfO4vuQ58a67f6hKbpNVos0fEEvVGtgSOA09rtwGUcNw4mf8Ev4DNUrct6cFQ9wEuaMFBhyyiWXwPL0hRKAw5Ed9PU25xJFULf2Vwb6EJARzUa4fxDxVbP6lOGuSUIx7pYBIfIKO0LtV7TWGPZ0YQeE3MdAo&X-Amz-Signature=29e7de40da356480f370ebf1ee70ae65966b81f5703dcfdf1629d0730e6f4ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ANGNNP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkeBTVCjhE1CbUZmII7yeEdePxLrwkUKo3HxICWaDScAiEAkbj9t9REiKDRnkNV7rKHUz6k1iGH11rYuqjM%2Fjy%2B4OMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpzKIWZpFdnoQblQSrcA%2FDQWx81Kj2cr8MA8yEo2lDgwamBw%2BtrQR900q4Vco%2B%2BqnoMK%2F8Jr2pG1r%2BJOfZ4sQ3Xd6VG8NF6B9oRCwQUr6MyjzzgG1fEZttvM1mMqPhXWxbyAfSiZwZJiodk5durJi3t6iEncHar8wkG7gz7rUrw1b8rCsEwVTVt3paKMgvQsBsrQDRNkv7e3gWCH3PI4Kk4zKWoOrgxAI%2F95FYLLF%2Fo3kSNVhSJbGFlDGGISZembECVdbcEMltEGU15e3DE3XusSU7DlxG%2Fx%2BXILH6FhU4lR4qaE5r3oP7hylHwjNk7gjYSe7fjhQg3Djr8HEw8%2FaFlyE8rFakU7PiFmytoqSPoBnOPL6PzEz8mokn0%2F3UKdejB0KHpQtCElbU80Q1tRiRwFhkEIX6Yw8agZxlSKerWlra%2BGPaBODTuY5WdtRUv6ykBl%2FHnW0GAdZ9n03s7s7zqsH%2BU4nORZ%2BchuWTo2sk5Yd5BtIj2vZqlkmDNwMdFbdqmToGzrJIpWfyNT3bCjnXfafr819xBLcqgBh82%2BPtwLHnPWHAM3JgnKxi5obcEQF9SEV0pzume6oQCX0uw3eMohjAy%2FnKg2As8nkLjC%2F7KvPuJF7Y31tZe9k1jScmzOJ1atur%2BIr2sGXgJMPm7qL0GOqUB2yyMuH38YOjYsAcsY4Fw%2B%2FOHmb39WeyNWDfRYy6kcQ3njpZyus%2FyBd34%2FKYBAbDVTfO4vuQ58a67f6hKbpNVos0fEEvVGtgSOA09rtwGUcNw4mf8Ev4DNUrct6cFQ9wEuaMFBhyyiWXwPL0hRKAw5Ed9PU25xJFULf2Vwb6EJARzUa4fxDxVbP6lOGuSUIx7pYBIfIKO0LtV7TWGPZ0YQeE3MdAo&X-Amz-Signature=224e4ac39f68d6760a1513090308a9144c7a8ba671ef6004ac9a1ea111a72dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ANGNNP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkeBTVCjhE1CbUZmII7yeEdePxLrwkUKo3HxICWaDScAiEAkbj9t9REiKDRnkNV7rKHUz6k1iGH11rYuqjM%2Fjy%2B4OMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpzKIWZpFdnoQblQSrcA%2FDQWx81Kj2cr8MA8yEo2lDgwamBw%2BtrQR900q4Vco%2B%2BqnoMK%2F8Jr2pG1r%2BJOfZ4sQ3Xd6VG8NF6B9oRCwQUr6MyjzzgG1fEZttvM1mMqPhXWxbyAfSiZwZJiodk5durJi3t6iEncHar8wkG7gz7rUrw1b8rCsEwVTVt3paKMgvQsBsrQDRNkv7e3gWCH3PI4Kk4zKWoOrgxAI%2F95FYLLF%2Fo3kSNVhSJbGFlDGGISZembECVdbcEMltEGU15e3DE3XusSU7DlxG%2Fx%2BXILH6FhU4lR4qaE5r3oP7hylHwjNk7gjYSe7fjhQg3Djr8HEw8%2FaFlyE8rFakU7PiFmytoqSPoBnOPL6PzEz8mokn0%2F3UKdejB0KHpQtCElbU80Q1tRiRwFhkEIX6Yw8agZxlSKerWlra%2BGPaBODTuY5WdtRUv6ykBl%2FHnW0GAdZ9n03s7s7zqsH%2BU4nORZ%2BchuWTo2sk5Yd5BtIj2vZqlkmDNwMdFbdqmToGzrJIpWfyNT3bCjnXfafr819xBLcqgBh82%2BPtwLHnPWHAM3JgnKxi5obcEQF9SEV0pzume6oQCX0uw3eMohjAy%2FnKg2As8nkLjC%2F7KvPuJF7Y31tZe9k1jScmzOJ1atur%2BIr2sGXgJMPm7qL0GOqUB2yyMuH38YOjYsAcsY4Fw%2B%2FOHmb39WeyNWDfRYy6kcQ3njpZyus%2FyBd34%2FKYBAbDVTfO4vuQ58a67f6hKbpNVos0fEEvVGtgSOA09rtwGUcNw4mf8Ev4DNUrct6cFQ9wEuaMFBhyyiWXwPL0hRKAw5Ed9PU25xJFULf2Vwb6EJARzUa4fxDxVbP6lOGuSUIx7pYBIfIKO0LtV7TWGPZ0YQeE3MdAo&X-Amz-Signature=d8f40b740bf219ade45d01edffcf099f1884d132d41d5e07e93e1df66057718e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ANGNNP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkeBTVCjhE1CbUZmII7yeEdePxLrwkUKo3HxICWaDScAiEAkbj9t9REiKDRnkNV7rKHUz6k1iGH11rYuqjM%2Fjy%2B4OMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpzKIWZpFdnoQblQSrcA%2FDQWx81Kj2cr8MA8yEo2lDgwamBw%2BtrQR900q4Vco%2B%2BqnoMK%2F8Jr2pG1r%2BJOfZ4sQ3Xd6VG8NF6B9oRCwQUr6MyjzzgG1fEZttvM1mMqPhXWxbyAfSiZwZJiodk5durJi3t6iEncHar8wkG7gz7rUrw1b8rCsEwVTVt3paKMgvQsBsrQDRNkv7e3gWCH3PI4Kk4zKWoOrgxAI%2F95FYLLF%2Fo3kSNVhSJbGFlDGGISZembECVdbcEMltEGU15e3DE3XusSU7DlxG%2Fx%2BXILH6FhU4lR4qaE5r3oP7hylHwjNk7gjYSe7fjhQg3Djr8HEw8%2FaFlyE8rFakU7PiFmytoqSPoBnOPL6PzEz8mokn0%2F3UKdejB0KHpQtCElbU80Q1tRiRwFhkEIX6Yw8agZxlSKerWlra%2BGPaBODTuY5WdtRUv6ykBl%2FHnW0GAdZ9n03s7s7zqsH%2BU4nORZ%2BchuWTo2sk5Yd5BtIj2vZqlkmDNwMdFbdqmToGzrJIpWfyNT3bCjnXfafr819xBLcqgBh82%2BPtwLHnPWHAM3JgnKxi5obcEQF9SEV0pzume6oQCX0uw3eMohjAy%2FnKg2As8nkLjC%2F7KvPuJF7Y31tZe9k1jScmzOJ1atur%2BIr2sGXgJMPm7qL0GOqUB2yyMuH38YOjYsAcsY4Fw%2B%2FOHmb39WeyNWDfRYy6kcQ3njpZyus%2FyBd34%2FKYBAbDVTfO4vuQ58a67f6hKbpNVos0fEEvVGtgSOA09rtwGUcNw4mf8Ev4DNUrct6cFQ9wEuaMFBhyyiWXwPL0hRKAw5Ed9PU25xJFULf2Vwb6EJARzUa4fxDxVbP6lOGuSUIx7pYBIfIKO0LtV7TWGPZ0YQeE3MdAo&X-Amz-Signature=cfcd1e09606f33e0ee320ba1e8b5b40916508d4c4c0895bb978544a56c3a7966&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

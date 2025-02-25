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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHH6NREF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDOz6B%2FT9aNo5encL51KV0qZYWv27NFYyvyNCHwcSJkQQIgIz81WsIa8uU65HTid7whQ3w%2BXGKgJLE7mp2VGn1toVUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMgV9LCn1%2F%2F8AcmU7CrcA79yPKxGkS7pAFKel4Xk1V82x%2BSPLPcmyOQQ9jdvNGCzk6eIVTkVec7BHr8ArlM2uFMmbLjjmz%2F0IdVE22Kz%2BcyCVzJU26ILXbahDInUJXBXMbONQP2zhohKq4oPIKhmD8EQpDgTwwJIB9t%2BTF0rxgJ%2B6%2FVuSYOvPHVEKxwgpUsyPcYv%2B9jgpjFhkGxxmMm%2BWCDIvlsRwp3XUjebzBCbJ1SxNVIBNIhgqhtauPO0DlSxZw1pT7yrXJM655SrHj9joT5QemubK3Gw92khHFnnU6vc%2FudDbUlMPHKrQjp8Qs%2BV%2BP2HNOUoVvq2kTa0M5nPqEacp5Z1Gw2Dr3wI6WSh8pZteNL0rSndY48QlXWf%2BYx6E8TX2G4F7fXRdQwJ6%2FsxXWxuT0SwtHT8NUHleBbTDddvN5htd6z3FW3hC2MGYl3qSvjxOtVQLq9gyMxfosBhpmycFgosqgEPg9wI%2FqJrjw9Pat3zh4xcXtKDB8His0cphXZS6NGjmj3ql%2ByloW5Q5waEZPMafGRWU9txwBsjgrFMlbEpXVnhnuCaChANfIBjAB2zUXoJYcox7%2Fo%2FVRbdIDiWxsZ%2BzB0pnfzwyjh7IOOXu7AcYOOvFI7QDeo%2B3iKyE8rzuXF2YJwKhUvVMKTo9b0GOqUBePjtEOemgi3jzGtD2BdyE4XtLIKMCniZjUgvfeS9ZCXQnkhjFd2AHTP0mPatO7lzcbgSKmQiMHz1prZpXo%2BP8z8da%2F6SQlu8SjlORUbEG%2BGJobwy%2FSIFdTCAWLsWIHHvVNolwYVtniBxy7ySuXgPFqHibIEc%2FlZXgzXKevVGWAKa2eSvV6b9rGBSTVXSrCREye56spM2zBT1MfO6ENV6%2FiRG8V0w&X-Amz-Signature=8d9bbbe666f5e4397354438ac05ae4719ced0cdc2f72c8c30ec10a15d4b0c73e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHH6NREF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDOz6B%2FT9aNo5encL51KV0qZYWv27NFYyvyNCHwcSJkQQIgIz81WsIa8uU65HTid7whQ3w%2BXGKgJLE7mp2VGn1toVUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMgV9LCn1%2F%2F8AcmU7CrcA79yPKxGkS7pAFKel4Xk1V82x%2BSPLPcmyOQQ9jdvNGCzk6eIVTkVec7BHr8ArlM2uFMmbLjjmz%2F0IdVE22Kz%2BcyCVzJU26ILXbahDInUJXBXMbONQP2zhohKq4oPIKhmD8EQpDgTwwJIB9t%2BTF0rxgJ%2B6%2FVuSYOvPHVEKxwgpUsyPcYv%2B9jgpjFhkGxxmMm%2BWCDIvlsRwp3XUjebzBCbJ1SxNVIBNIhgqhtauPO0DlSxZw1pT7yrXJM655SrHj9joT5QemubK3Gw92khHFnnU6vc%2FudDbUlMPHKrQjp8Qs%2BV%2BP2HNOUoVvq2kTa0M5nPqEacp5Z1Gw2Dr3wI6WSh8pZteNL0rSndY48QlXWf%2BYx6E8TX2G4F7fXRdQwJ6%2FsxXWxuT0SwtHT8NUHleBbTDddvN5htd6z3FW3hC2MGYl3qSvjxOtVQLq9gyMxfosBhpmycFgosqgEPg9wI%2FqJrjw9Pat3zh4xcXtKDB8His0cphXZS6NGjmj3ql%2ByloW5Q5waEZPMafGRWU9txwBsjgrFMlbEpXVnhnuCaChANfIBjAB2zUXoJYcox7%2Fo%2FVRbdIDiWxsZ%2BzB0pnfzwyjh7IOOXu7AcYOOvFI7QDeo%2B3iKyE8rzuXF2YJwKhUvVMKTo9b0GOqUBePjtEOemgi3jzGtD2BdyE4XtLIKMCniZjUgvfeS9ZCXQnkhjFd2AHTP0mPatO7lzcbgSKmQiMHz1prZpXo%2BP8z8da%2F6SQlu8SjlORUbEG%2BGJobwy%2FSIFdTCAWLsWIHHvVNolwYVtniBxy7ySuXgPFqHibIEc%2FlZXgzXKevVGWAKa2eSvV6b9rGBSTVXSrCREye56spM2zBT1MfO6ENV6%2FiRG8V0w&X-Amz-Signature=00b7a1d4b19a0761c50389cbe5ea3427065fcc57f7b5e8ef7671a7f8a65c77bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHH6NREF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDOz6B%2FT9aNo5encL51KV0qZYWv27NFYyvyNCHwcSJkQQIgIz81WsIa8uU65HTid7whQ3w%2BXGKgJLE7mp2VGn1toVUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMgV9LCn1%2F%2F8AcmU7CrcA79yPKxGkS7pAFKel4Xk1V82x%2BSPLPcmyOQQ9jdvNGCzk6eIVTkVec7BHr8ArlM2uFMmbLjjmz%2F0IdVE22Kz%2BcyCVzJU26ILXbahDInUJXBXMbONQP2zhohKq4oPIKhmD8EQpDgTwwJIB9t%2BTF0rxgJ%2B6%2FVuSYOvPHVEKxwgpUsyPcYv%2B9jgpjFhkGxxmMm%2BWCDIvlsRwp3XUjebzBCbJ1SxNVIBNIhgqhtauPO0DlSxZw1pT7yrXJM655SrHj9joT5QemubK3Gw92khHFnnU6vc%2FudDbUlMPHKrQjp8Qs%2BV%2BP2HNOUoVvq2kTa0M5nPqEacp5Z1Gw2Dr3wI6WSh8pZteNL0rSndY48QlXWf%2BYx6E8TX2G4F7fXRdQwJ6%2FsxXWxuT0SwtHT8NUHleBbTDddvN5htd6z3FW3hC2MGYl3qSvjxOtVQLq9gyMxfosBhpmycFgosqgEPg9wI%2FqJrjw9Pat3zh4xcXtKDB8His0cphXZS6NGjmj3ql%2ByloW5Q5waEZPMafGRWU9txwBsjgrFMlbEpXVnhnuCaChANfIBjAB2zUXoJYcox7%2Fo%2FVRbdIDiWxsZ%2BzB0pnfzwyjh7IOOXu7AcYOOvFI7QDeo%2B3iKyE8rzuXF2YJwKhUvVMKTo9b0GOqUBePjtEOemgi3jzGtD2BdyE4XtLIKMCniZjUgvfeS9ZCXQnkhjFd2AHTP0mPatO7lzcbgSKmQiMHz1prZpXo%2BP8z8da%2F6SQlu8SjlORUbEG%2BGJobwy%2FSIFdTCAWLsWIHHvVNolwYVtniBxy7ySuXgPFqHibIEc%2FlZXgzXKevVGWAKa2eSvV6b9rGBSTVXSrCREye56spM2zBT1MfO6ENV6%2FiRG8V0w&X-Amz-Signature=1273fd6da33ef98b8e1bebdc8c94184ef993a75271caa0be1fbd7d87efd3b166&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHH6NREF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDOz6B%2FT9aNo5encL51KV0qZYWv27NFYyvyNCHwcSJkQQIgIz81WsIa8uU65HTid7whQ3w%2BXGKgJLE7mp2VGn1toVUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMgV9LCn1%2F%2F8AcmU7CrcA79yPKxGkS7pAFKel4Xk1V82x%2BSPLPcmyOQQ9jdvNGCzk6eIVTkVec7BHr8ArlM2uFMmbLjjmz%2F0IdVE22Kz%2BcyCVzJU26ILXbahDInUJXBXMbONQP2zhohKq4oPIKhmD8EQpDgTwwJIB9t%2BTF0rxgJ%2B6%2FVuSYOvPHVEKxwgpUsyPcYv%2B9jgpjFhkGxxmMm%2BWCDIvlsRwp3XUjebzBCbJ1SxNVIBNIhgqhtauPO0DlSxZw1pT7yrXJM655SrHj9joT5QemubK3Gw92khHFnnU6vc%2FudDbUlMPHKrQjp8Qs%2BV%2BP2HNOUoVvq2kTa0M5nPqEacp5Z1Gw2Dr3wI6WSh8pZteNL0rSndY48QlXWf%2BYx6E8TX2G4F7fXRdQwJ6%2FsxXWxuT0SwtHT8NUHleBbTDddvN5htd6z3FW3hC2MGYl3qSvjxOtVQLq9gyMxfosBhpmycFgosqgEPg9wI%2FqJrjw9Pat3zh4xcXtKDB8His0cphXZS6NGjmj3ql%2ByloW5Q5waEZPMafGRWU9txwBsjgrFMlbEpXVnhnuCaChANfIBjAB2zUXoJYcox7%2Fo%2FVRbdIDiWxsZ%2BzB0pnfzwyjh7IOOXu7AcYOOvFI7QDeo%2B3iKyE8rzuXF2YJwKhUvVMKTo9b0GOqUBePjtEOemgi3jzGtD2BdyE4XtLIKMCniZjUgvfeS9ZCXQnkhjFd2AHTP0mPatO7lzcbgSKmQiMHz1prZpXo%2BP8z8da%2F6SQlu8SjlORUbEG%2BGJobwy%2FSIFdTCAWLsWIHHvVNolwYVtniBxy7ySuXgPFqHibIEc%2FlZXgzXKevVGWAKa2eSvV6b9rGBSTVXSrCREye56spM2zBT1MfO6ENV6%2FiRG8V0w&X-Amz-Signature=8df451b357b0a8aaef21a4c0bec90c98f4268a7be9d60d5b1ade32866ca09f70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHH6NREF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDOz6B%2FT9aNo5encL51KV0qZYWv27NFYyvyNCHwcSJkQQIgIz81WsIa8uU65HTid7whQ3w%2BXGKgJLE7mp2VGn1toVUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMgV9LCn1%2F%2F8AcmU7CrcA79yPKxGkS7pAFKel4Xk1V82x%2BSPLPcmyOQQ9jdvNGCzk6eIVTkVec7BHr8ArlM2uFMmbLjjmz%2F0IdVE22Kz%2BcyCVzJU26ILXbahDInUJXBXMbONQP2zhohKq4oPIKhmD8EQpDgTwwJIB9t%2BTF0rxgJ%2B6%2FVuSYOvPHVEKxwgpUsyPcYv%2B9jgpjFhkGxxmMm%2BWCDIvlsRwp3XUjebzBCbJ1SxNVIBNIhgqhtauPO0DlSxZw1pT7yrXJM655SrHj9joT5QemubK3Gw92khHFnnU6vc%2FudDbUlMPHKrQjp8Qs%2BV%2BP2HNOUoVvq2kTa0M5nPqEacp5Z1Gw2Dr3wI6WSh8pZteNL0rSndY48QlXWf%2BYx6E8TX2G4F7fXRdQwJ6%2FsxXWxuT0SwtHT8NUHleBbTDddvN5htd6z3FW3hC2MGYl3qSvjxOtVQLq9gyMxfosBhpmycFgosqgEPg9wI%2FqJrjw9Pat3zh4xcXtKDB8His0cphXZS6NGjmj3ql%2ByloW5Q5waEZPMafGRWU9txwBsjgrFMlbEpXVnhnuCaChANfIBjAB2zUXoJYcox7%2Fo%2FVRbdIDiWxsZ%2BzB0pnfzwyjh7IOOXu7AcYOOvFI7QDeo%2B3iKyE8rzuXF2YJwKhUvVMKTo9b0GOqUBePjtEOemgi3jzGtD2BdyE4XtLIKMCniZjUgvfeS9ZCXQnkhjFd2AHTP0mPatO7lzcbgSKmQiMHz1prZpXo%2BP8z8da%2F6SQlu8SjlORUbEG%2BGJobwy%2FSIFdTCAWLsWIHHvVNolwYVtniBxy7ySuXgPFqHibIEc%2FlZXgzXKevVGWAKa2eSvV6b9rGBSTVXSrCREye56spM2zBT1MfO6ENV6%2FiRG8V0w&X-Amz-Signature=6700cafc41cd76c02deef5d85fe30b2107594b560cb54d07f509bd0231ddc756&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHH6NREF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDOz6B%2FT9aNo5encL51KV0qZYWv27NFYyvyNCHwcSJkQQIgIz81WsIa8uU65HTid7whQ3w%2BXGKgJLE7mp2VGn1toVUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMgV9LCn1%2F%2F8AcmU7CrcA79yPKxGkS7pAFKel4Xk1V82x%2BSPLPcmyOQQ9jdvNGCzk6eIVTkVec7BHr8ArlM2uFMmbLjjmz%2F0IdVE22Kz%2BcyCVzJU26ILXbahDInUJXBXMbONQP2zhohKq4oPIKhmD8EQpDgTwwJIB9t%2BTF0rxgJ%2B6%2FVuSYOvPHVEKxwgpUsyPcYv%2B9jgpjFhkGxxmMm%2BWCDIvlsRwp3XUjebzBCbJ1SxNVIBNIhgqhtauPO0DlSxZw1pT7yrXJM655SrHj9joT5QemubK3Gw92khHFnnU6vc%2FudDbUlMPHKrQjp8Qs%2BV%2BP2HNOUoVvq2kTa0M5nPqEacp5Z1Gw2Dr3wI6WSh8pZteNL0rSndY48QlXWf%2BYx6E8TX2G4F7fXRdQwJ6%2FsxXWxuT0SwtHT8NUHleBbTDddvN5htd6z3FW3hC2MGYl3qSvjxOtVQLq9gyMxfosBhpmycFgosqgEPg9wI%2FqJrjw9Pat3zh4xcXtKDB8His0cphXZS6NGjmj3ql%2ByloW5Q5waEZPMafGRWU9txwBsjgrFMlbEpXVnhnuCaChANfIBjAB2zUXoJYcox7%2Fo%2FVRbdIDiWxsZ%2BzB0pnfzwyjh7IOOXu7AcYOOvFI7QDeo%2B3iKyE8rzuXF2YJwKhUvVMKTo9b0GOqUBePjtEOemgi3jzGtD2BdyE4XtLIKMCniZjUgvfeS9ZCXQnkhjFd2AHTP0mPatO7lzcbgSKmQiMHz1prZpXo%2BP8z8da%2F6SQlu8SjlORUbEG%2BGJobwy%2FSIFdTCAWLsWIHHvVNolwYVtniBxy7ySuXgPFqHibIEc%2FlZXgzXKevVGWAKa2eSvV6b9rGBSTVXSrCREye56spM2zBT1MfO6ENV6%2FiRG8V0w&X-Amz-Signature=d50a78cdf3fb7325eca2224267591c1b81050d15841389c3ec78f26534befc90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHH6NREF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDOz6B%2FT9aNo5encL51KV0qZYWv27NFYyvyNCHwcSJkQQIgIz81WsIa8uU65HTid7whQ3w%2BXGKgJLE7mp2VGn1toVUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMgV9LCn1%2F%2F8AcmU7CrcA79yPKxGkS7pAFKel4Xk1V82x%2BSPLPcmyOQQ9jdvNGCzk6eIVTkVec7BHr8ArlM2uFMmbLjjmz%2F0IdVE22Kz%2BcyCVzJU26ILXbahDInUJXBXMbONQP2zhohKq4oPIKhmD8EQpDgTwwJIB9t%2BTF0rxgJ%2B6%2FVuSYOvPHVEKxwgpUsyPcYv%2B9jgpjFhkGxxmMm%2BWCDIvlsRwp3XUjebzBCbJ1SxNVIBNIhgqhtauPO0DlSxZw1pT7yrXJM655SrHj9joT5QemubK3Gw92khHFnnU6vc%2FudDbUlMPHKrQjp8Qs%2BV%2BP2HNOUoVvq2kTa0M5nPqEacp5Z1Gw2Dr3wI6WSh8pZteNL0rSndY48QlXWf%2BYx6E8TX2G4F7fXRdQwJ6%2FsxXWxuT0SwtHT8NUHleBbTDddvN5htd6z3FW3hC2MGYl3qSvjxOtVQLq9gyMxfosBhpmycFgosqgEPg9wI%2FqJrjw9Pat3zh4xcXtKDB8His0cphXZS6NGjmj3ql%2ByloW5Q5waEZPMafGRWU9txwBsjgrFMlbEpXVnhnuCaChANfIBjAB2zUXoJYcox7%2Fo%2FVRbdIDiWxsZ%2BzB0pnfzwyjh7IOOXu7AcYOOvFI7QDeo%2B3iKyE8rzuXF2YJwKhUvVMKTo9b0GOqUBePjtEOemgi3jzGtD2BdyE4XtLIKMCniZjUgvfeS9ZCXQnkhjFd2AHTP0mPatO7lzcbgSKmQiMHz1prZpXo%2BP8z8da%2F6SQlu8SjlORUbEG%2BGJobwy%2FSIFdTCAWLsWIHHvVNolwYVtniBxy7ySuXgPFqHibIEc%2FlZXgzXKevVGWAKa2eSvV6b9rGBSTVXSrCREye56spM2zBT1MfO6ENV6%2FiRG8V0w&X-Amz-Signature=396330017278838b82658ef8bb9161d487201970f391d2ec8f6cf74f023893b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHH6NREF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDOz6B%2FT9aNo5encL51KV0qZYWv27NFYyvyNCHwcSJkQQIgIz81WsIa8uU65HTid7whQ3w%2BXGKgJLE7mp2VGn1toVUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMgV9LCn1%2F%2F8AcmU7CrcA79yPKxGkS7pAFKel4Xk1V82x%2BSPLPcmyOQQ9jdvNGCzk6eIVTkVec7BHr8ArlM2uFMmbLjjmz%2F0IdVE22Kz%2BcyCVzJU26ILXbahDInUJXBXMbONQP2zhohKq4oPIKhmD8EQpDgTwwJIB9t%2BTF0rxgJ%2B6%2FVuSYOvPHVEKxwgpUsyPcYv%2B9jgpjFhkGxxmMm%2BWCDIvlsRwp3XUjebzBCbJ1SxNVIBNIhgqhtauPO0DlSxZw1pT7yrXJM655SrHj9joT5QemubK3Gw92khHFnnU6vc%2FudDbUlMPHKrQjp8Qs%2BV%2BP2HNOUoVvq2kTa0M5nPqEacp5Z1Gw2Dr3wI6WSh8pZteNL0rSndY48QlXWf%2BYx6E8TX2G4F7fXRdQwJ6%2FsxXWxuT0SwtHT8NUHleBbTDddvN5htd6z3FW3hC2MGYl3qSvjxOtVQLq9gyMxfosBhpmycFgosqgEPg9wI%2FqJrjw9Pat3zh4xcXtKDB8His0cphXZS6NGjmj3ql%2ByloW5Q5waEZPMafGRWU9txwBsjgrFMlbEpXVnhnuCaChANfIBjAB2zUXoJYcox7%2Fo%2FVRbdIDiWxsZ%2BzB0pnfzwyjh7IOOXu7AcYOOvFI7QDeo%2B3iKyE8rzuXF2YJwKhUvVMKTo9b0GOqUBePjtEOemgi3jzGtD2BdyE4XtLIKMCniZjUgvfeS9ZCXQnkhjFd2AHTP0mPatO7lzcbgSKmQiMHz1prZpXo%2BP8z8da%2F6SQlu8SjlORUbEG%2BGJobwy%2FSIFdTCAWLsWIHHvVNolwYVtniBxy7ySuXgPFqHibIEc%2FlZXgzXKevVGWAKa2eSvV6b9rGBSTVXSrCREye56spM2zBT1MfO6ENV6%2FiRG8V0w&X-Amz-Signature=49af02837ac328de0fdb62227ac6517712c88d1bd3a088d4f75ab870a0f6d91f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

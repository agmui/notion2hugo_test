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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7657ZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYS7MuzHt8Xfu8bE2Ml7kx%2BEs89qQvkIZqLu8ETahlQQIhAJcCWMaYnxQeCpbGrQYU69%2FI6VKTKB%2BO%2BblHqHw7960VKv8DCCgQABoMNjM3NDIzMTgzODA1IgyaJ5ibBFax8ji9rXQq3APwo%2FYnXUTr0qbMb8HusxTS79gjLL4NiZIQ8nGEoHA4zPjI9FAdOz6BVrhlhOwF2vIgD3ZWR8kz1C%2FBTxBbwRWQxslK%2BB8pM8mRnAWDk7Qwve3ld3FRO2hY84LT%2FmMnZT%2BDN292h3KV%2FS7hrQRSog0OaRq1M10Ce%2FH16IEGkDrpDdZwGqeQiNblU3ow7wcWvSauMs5%2FL4VppHpmjS99pOmuBMnn1ydmKhnpV%2FfOBvwhknDspqcSEqE8QRNtWphn1P5EGW7sFYAHth0bNDRgTw7u3V9CteoLoT3M7lR1xQw0XZLyv9GuUZ%2BqMTCvT8MlvaNM7LtBUkS2%2BWNskrHP%2B1%2FFpp8Fy87%2BRhCKZDZ87PTKayok3Kq%2BkMZVI%2FR7DKOKh3SRnEuhhttFJ0yT5AbVMtQy6MUlJGfZ%2BhvjQ%2FNFSSSnRrwMMRF4EECXp4hdv3UJjbKXcZ0PJfvUf7hPCQrqKmDju1Jk5h9K%2FQO20Ae%2FdjrNLA%2BvuAyuVJmY2%2Fv%2BZLiS1S2nfnJ1tvBZy2tIG24MsyTe8ZQUsKOYn7a9F6z0eyD1u8zEeZAM%2FTSilFwQDGVk1UT%2FHd7Ow%2B2BpCDoRgY%2FHbh68srf1kBmCLD902iuHlNDf0WnYCANbqxZLKpt%2BTCLvLTCBjqkAWK2vF%2FiAHXBDNpR6Jxxq88ktNs9WRvB5sc%2BBbqetcHgChvR1sxGNKiWNMZR5cGvNNYObeYw7mI1wUYxm%2BI8L2d0sFVfNjTEqn3e2UHwxUYnBo1n5jLtIcdFfQz4V1Xul7KppuzFDZ9bV7P3OPtGlKgbb%2BcMjF2dsJ8C2rMGPmvqgZLXpDi7B30qyZFzhlvtxAF8r0W2D8iKnWKnWuU0ur6S0CwI&X-Amz-Signature=96bdf95ebb602e6b211c01d9799c917b26a0df445564e89c6e678ca7b2efa540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7657ZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYS7MuzHt8Xfu8bE2Ml7kx%2BEs89qQvkIZqLu8ETahlQQIhAJcCWMaYnxQeCpbGrQYU69%2FI6VKTKB%2BO%2BblHqHw7960VKv8DCCgQABoMNjM3NDIzMTgzODA1IgyaJ5ibBFax8ji9rXQq3APwo%2FYnXUTr0qbMb8HusxTS79gjLL4NiZIQ8nGEoHA4zPjI9FAdOz6BVrhlhOwF2vIgD3ZWR8kz1C%2FBTxBbwRWQxslK%2BB8pM8mRnAWDk7Qwve3ld3FRO2hY84LT%2FmMnZT%2BDN292h3KV%2FS7hrQRSog0OaRq1M10Ce%2FH16IEGkDrpDdZwGqeQiNblU3ow7wcWvSauMs5%2FL4VppHpmjS99pOmuBMnn1ydmKhnpV%2FfOBvwhknDspqcSEqE8QRNtWphn1P5EGW7sFYAHth0bNDRgTw7u3V9CteoLoT3M7lR1xQw0XZLyv9GuUZ%2BqMTCvT8MlvaNM7LtBUkS2%2BWNskrHP%2B1%2FFpp8Fy87%2BRhCKZDZ87PTKayok3Kq%2BkMZVI%2FR7DKOKh3SRnEuhhttFJ0yT5AbVMtQy6MUlJGfZ%2BhvjQ%2FNFSSSnRrwMMRF4EECXp4hdv3UJjbKXcZ0PJfvUf7hPCQrqKmDju1Jk5h9K%2FQO20Ae%2FdjrNLA%2BvuAyuVJmY2%2Fv%2BZLiS1S2nfnJ1tvBZy2tIG24MsyTe8ZQUsKOYn7a9F6z0eyD1u8zEeZAM%2FTSilFwQDGVk1UT%2FHd7Ow%2B2BpCDoRgY%2FHbh68srf1kBmCLD902iuHlNDf0WnYCANbqxZLKpt%2BTCLvLTCBjqkAWK2vF%2FiAHXBDNpR6Jxxq88ktNs9WRvB5sc%2BBbqetcHgChvR1sxGNKiWNMZR5cGvNNYObeYw7mI1wUYxm%2BI8L2d0sFVfNjTEqn3e2UHwxUYnBo1n5jLtIcdFfQz4V1Xul7KppuzFDZ9bV7P3OPtGlKgbb%2BcMjF2dsJ8C2rMGPmvqgZLXpDi7B30qyZFzhlvtxAF8r0W2D8iKnWKnWuU0ur6S0CwI&X-Amz-Signature=f7582cd7ad5d27a6e47e9946c94edf3646c1bddc1d638fe4ef0aefe277d661be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7657ZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYS7MuzHt8Xfu8bE2Ml7kx%2BEs89qQvkIZqLu8ETahlQQIhAJcCWMaYnxQeCpbGrQYU69%2FI6VKTKB%2BO%2BblHqHw7960VKv8DCCgQABoMNjM3NDIzMTgzODA1IgyaJ5ibBFax8ji9rXQq3APwo%2FYnXUTr0qbMb8HusxTS79gjLL4NiZIQ8nGEoHA4zPjI9FAdOz6BVrhlhOwF2vIgD3ZWR8kz1C%2FBTxBbwRWQxslK%2BB8pM8mRnAWDk7Qwve3ld3FRO2hY84LT%2FmMnZT%2BDN292h3KV%2FS7hrQRSog0OaRq1M10Ce%2FH16IEGkDrpDdZwGqeQiNblU3ow7wcWvSauMs5%2FL4VppHpmjS99pOmuBMnn1ydmKhnpV%2FfOBvwhknDspqcSEqE8QRNtWphn1P5EGW7sFYAHth0bNDRgTw7u3V9CteoLoT3M7lR1xQw0XZLyv9GuUZ%2BqMTCvT8MlvaNM7LtBUkS2%2BWNskrHP%2B1%2FFpp8Fy87%2BRhCKZDZ87PTKayok3Kq%2BkMZVI%2FR7DKOKh3SRnEuhhttFJ0yT5AbVMtQy6MUlJGfZ%2BhvjQ%2FNFSSSnRrwMMRF4EECXp4hdv3UJjbKXcZ0PJfvUf7hPCQrqKmDju1Jk5h9K%2FQO20Ae%2FdjrNLA%2BvuAyuVJmY2%2Fv%2BZLiS1S2nfnJ1tvBZy2tIG24MsyTe8ZQUsKOYn7a9F6z0eyD1u8zEeZAM%2FTSilFwQDGVk1UT%2FHd7Ow%2B2BpCDoRgY%2FHbh68srf1kBmCLD902iuHlNDf0WnYCANbqxZLKpt%2BTCLvLTCBjqkAWK2vF%2FiAHXBDNpR6Jxxq88ktNs9WRvB5sc%2BBbqetcHgChvR1sxGNKiWNMZR5cGvNNYObeYw7mI1wUYxm%2BI8L2d0sFVfNjTEqn3e2UHwxUYnBo1n5jLtIcdFfQz4V1Xul7KppuzFDZ9bV7P3OPtGlKgbb%2BcMjF2dsJ8C2rMGPmvqgZLXpDi7B30qyZFzhlvtxAF8r0W2D8iKnWKnWuU0ur6S0CwI&X-Amz-Signature=75011a77e878abb7bf7e1bb3c11c9c56c8bc396aa74adbec66336df7e028d14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7657ZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYS7MuzHt8Xfu8bE2Ml7kx%2BEs89qQvkIZqLu8ETahlQQIhAJcCWMaYnxQeCpbGrQYU69%2FI6VKTKB%2BO%2BblHqHw7960VKv8DCCgQABoMNjM3NDIzMTgzODA1IgyaJ5ibBFax8ji9rXQq3APwo%2FYnXUTr0qbMb8HusxTS79gjLL4NiZIQ8nGEoHA4zPjI9FAdOz6BVrhlhOwF2vIgD3ZWR8kz1C%2FBTxBbwRWQxslK%2BB8pM8mRnAWDk7Qwve3ld3FRO2hY84LT%2FmMnZT%2BDN292h3KV%2FS7hrQRSog0OaRq1M10Ce%2FH16IEGkDrpDdZwGqeQiNblU3ow7wcWvSauMs5%2FL4VppHpmjS99pOmuBMnn1ydmKhnpV%2FfOBvwhknDspqcSEqE8QRNtWphn1P5EGW7sFYAHth0bNDRgTw7u3V9CteoLoT3M7lR1xQw0XZLyv9GuUZ%2BqMTCvT8MlvaNM7LtBUkS2%2BWNskrHP%2B1%2FFpp8Fy87%2BRhCKZDZ87PTKayok3Kq%2BkMZVI%2FR7DKOKh3SRnEuhhttFJ0yT5AbVMtQy6MUlJGfZ%2BhvjQ%2FNFSSSnRrwMMRF4EECXp4hdv3UJjbKXcZ0PJfvUf7hPCQrqKmDju1Jk5h9K%2FQO20Ae%2FdjrNLA%2BvuAyuVJmY2%2Fv%2BZLiS1S2nfnJ1tvBZy2tIG24MsyTe8ZQUsKOYn7a9F6z0eyD1u8zEeZAM%2FTSilFwQDGVk1UT%2FHd7Ow%2B2BpCDoRgY%2FHbh68srf1kBmCLD902iuHlNDf0WnYCANbqxZLKpt%2BTCLvLTCBjqkAWK2vF%2FiAHXBDNpR6Jxxq88ktNs9WRvB5sc%2BBbqetcHgChvR1sxGNKiWNMZR5cGvNNYObeYw7mI1wUYxm%2BI8L2d0sFVfNjTEqn3e2UHwxUYnBo1n5jLtIcdFfQz4V1Xul7KppuzFDZ9bV7P3OPtGlKgbb%2BcMjF2dsJ8C2rMGPmvqgZLXpDi7B30qyZFzhlvtxAF8r0W2D8iKnWKnWuU0ur6S0CwI&X-Amz-Signature=f139d3fedfa7f6547ba5361b5779a41c83a15f50d4cfde44f0864cf9eda17986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7657ZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYS7MuzHt8Xfu8bE2Ml7kx%2BEs89qQvkIZqLu8ETahlQQIhAJcCWMaYnxQeCpbGrQYU69%2FI6VKTKB%2BO%2BblHqHw7960VKv8DCCgQABoMNjM3NDIzMTgzODA1IgyaJ5ibBFax8ji9rXQq3APwo%2FYnXUTr0qbMb8HusxTS79gjLL4NiZIQ8nGEoHA4zPjI9FAdOz6BVrhlhOwF2vIgD3ZWR8kz1C%2FBTxBbwRWQxslK%2BB8pM8mRnAWDk7Qwve3ld3FRO2hY84LT%2FmMnZT%2BDN292h3KV%2FS7hrQRSog0OaRq1M10Ce%2FH16IEGkDrpDdZwGqeQiNblU3ow7wcWvSauMs5%2FL4VppHpmjS99pOmuBMnn1ydmKhnpV%2FfOBvwhknDspqcSEqE8QRNtWphn1P5EGW7sFYAHth0bNDRgTw7u3V9CteoLoT3M7lR1xQw0XZLyv9GuUZ%2BqMTCvT8MlvaNM7LtBUkS2%2BWNskrHP%2B1%2FFpp8Fy87%2BRhCKZDZ87PTKayok3Kq%2BkMZVI%2FR7DKOKh3SRnEuhhttFJ0yT5AbVMtQy6MUlJGfZ%2BhvjQ%2FNFSSSnRrwMMRF4EECXp4hdv3UJjbKXcZ0PJfvUf7hPCQrqKmDju1Jk5h9K%2FQO20Ae%2FdjrNLA%2BvuAyuVJmY2%2Fv%2BZLiS1S2nfnJ1tvBZy2tIG24MsyTe8ZQUsKOYn7a9F6z0eyD1u8zEeZAM%2FTSilFwQDGVk1UT%2FHd7Ow%2B2BpCDoRgY%2FHbh68srf1kBmCLD902iuHlNDf0WnYCANbqxZLKpt%2BTCLvLTCBjqkAWK2vF%2FiAHXBDNpR6Jxxq88ktNs9WRvB5sc%2BBbqetcHgChvR1sxGNKiWNMZR5cGvNNYObeYw7mI1wUYxm%2BI8L2d0sFVfNjTEqn3e2UHwxUYnBo1n5jLtIcdFfQz4V1Xul7KppuzFDZ9bV7P3OPtGlKgbb%2BcMjF2dsJ8C2rMGPmvqgZLXpDi7B30qyZFzhlvtxAF8r0W2D8iKnWKnWuU0ur6S0CwI&X-Amz-Signature=42deecc71895efe81944a5836ab0f5637661888369b588191aa063ebfe891ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7657ZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYS7MuzHt8Xfu8bE2Ml7kx%2BEs89qQvkIZqLu8ETahlQQIhAJcCWMaYnxQeCpbGrQYU69%2FI6VKTKB%2BO%2BblHqHw7960VKv8DCCgQABoMNjM3NDIzMTgzODA1IgyaJ5ibBFax8ji9rXQq3APwo%2FYnXUTr0qbMb8HusxTS79gjLL4NiZIQ8nGEoHA4zPjI9FAdOz6BVrhlhOwF2vIgD3ZWR8kz1C%2FBTxBbwRWQxslK%2BB8pM8mRnAWDk7Qwve3ld3FRO2hY84LT%2FmMnZT%2BDN292h3KV%2FS7hrQRSog0OaRq1M10Ce%2FH16IEGkDrpDdZwGqeQiNblU3ow7wcWvSauMs5%2FL4VppHpmjS99pOmuBMnn1ydmKhnpV%2FfOBvwhknDspqcSEqE8QRNtWphn1P5EGW7sFYAHth0bNDRgTw7u3V9CteoLoT3M7lR1xQw0XZLyv9GuUZ%2BqMTCvT8MlvaNM7LtBUkS2%2BWNskrHP%2B1%2FFpp8Fy87%2BRhCKZDZ87PTKayok3Kq%2BkMZVI%2FR7DKOKh3SRnEuhhttFJ0yT5AbVMtQy6MUlJGfZ%2BhvjQ%2FNFSSSnRrwMMRF4EECXp4hdv3UJjbKXcZ0PJfvUf7hPCQrqKmDju1Jk5h9K%2FQO20Ae%2FdjrNLA%2BvuAyuVJmY2%2Fv%2BZLiS1S2nfnJ1tvBZy2tIG24MsyTe8ZQUsKOYn7a9F6z0eyD1u8zEeZAM%2FTSilFwQDGVk1UT%2FHd7Ow%2B2BpCDoRgY%2FHbh68srf1kBmCLD902iuHlNDf0WnYCANbqxZLKpt%2BTCLvLTCBjqkAWK2vF%2FiAHXBDNpR6Jxxq88ktNs9WRvB5sc%2BBbqetcHgChvR1sxGNKiWNMZR5cGvNNYObeYw7mI1wUYxm%2BI8L2d0sFVfNjTEqn3e2UHwxUYnBo1n5jLtIcdFfQz4V1Xul7KppuzFDZ9bV7P3OPtGlKgbb%2BcMjF2dsJ8C2rMGPmvqgZLXpDi7B30qyZFzhlvtxAF8r0W2D8iKnWKnWuU0ur6S0CwI&X-Amz-Signature=623ff525d572e9128ebe3bbb9ed6d345084c2ae689686f2a76fdaeca36337143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7657ZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYS7MuzHt8Xfu8bE2Ml7kx%2BEs89qQvkIZqLu8ETahlQQIhAJcCWMaYnxQeCpbGrQYU69%2FI6VKTKB%2BO%2BblHqHw7960VKv8DCCgQABoMNjM3NDIzMTgzODA1IgyaJ5ibBFax8ji9rXQq3APwo%2FYnXUTr0qbMb8HusxTS79gjLL4NiZIQ8nGEoHA4zPjI9FAdOz6BVrhlhOwF2vIgD3ZWR8kz1C%2FBTxBbwRWQxslK%2BB8pM8mRnAWDk7Qwve3ld3FRO2hY84LT%2FmMnZT%2BDN292h3KV%2FS7hrQRSog0OaRq1M10Ce%2FH16IEGkDrpDdZwGqeQiNblU3ow7wcWvSauMs5%2FL4VppHpmjS99pOmuBMnn1ydmKhnpV%2FfOBvwhknDspqcSEqE8QRNtWphn1P5EGW7sFYAHth0bNDRgTw7u3V9CteoLoT3M7lR1xQw0XZLyv9GuUZ%2BqMTCvT8MlvaNM7LtBUkS2%2BWNskrHP%2B1%2FFpp8Fy87%2BRhCKZDZ87PTKayok3Kq%2BkMZVI%2FR7DKOKh3SRnEuhhttFJ0yT5AbVMtQy6MUlJGfZ%2BhvjQ%2FNFSSSnRrwMMRF4EECXp4hdv3UJjbKXcZ0PJfvUf7hPCQrqKmDju1Jk5h9K%2FQO20Ae%2FdjrNLA%2BvuAyuVJmY2%2Fv%2BZLiS1S2nfnJ1tvBZy2tIG24MsyTe8ZQUsKOYn7a9F6z0eyD1u8zEeZAM%2FTSilFwQDGVk1UT%2FHd7Ow%2B2BpCDoRgY%2FHbh68srf1kBmCLD902iuHlNDf0WnYCANbqxZLKpt%2BTCLvLTCBjqkAWK2vF%2FiAHXBDNpR6Jxxq88ktNs9WRvB5sc%2BBbqetcHgChvR1sxGNKiWNMZR5cGvNNYObeYw7mI1wUYxm%2BI8L2d0sFVfNjTEqn3e2UHwxUYnBo1n5jLtIcdFfQz4V1Xul7KppuzFDZ9bV7P3OPtGlKgbb%2BcMjF2dsJ8C2rMGPmvqgZLXpDi7B30qyZFzhlvtxAF8r0W2D8iKnWKnWuU0ur6S0CwI&X-Amz-Signature=bdc0920155d691c3a99c3d55d0c6059fc81beac51558bc58b55fc3d5c0a3936d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7657ZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYS7MuzHt8Xfu8bE2Ml7kx%2BEs89qQvkIZqLu8ETahlQQIhAJcCWMaYnxQeCpbGrQYU69%2FI6VKTKB%2BO%2BblHqHw7960VKv8DCCgQABoMNjM3NDIzMTgzODA1IgyaJ5ibBFax8ji9rXQq3APwo%2FYnXUTr0qbMb8HusxTS79gjLL4NiZIQ8nGEoHA4zPjI9FAdOz6BVrhlhOwF2vIgD3ZWR8kz1C%2FBTxBbwRWQxslK%2BB8pM8mRnAWDk7Qwve3ld3FRO2hY84LT%2FmMnZT%2BDN292h3KV%2FS7hrQRSog0OaRq1M10Ce%2FH16IEGkDrpDdZwGqeQiNblU3ow7wcWvSauMs5%2FL4VppHpmjS99pOmuBMnn1ydmKhnpV%2FfOBvwhknDspqcSEqE8QRNtWphn1P5EGW7sFYAHth0bNDRgTw7u3V9CteoLoT3M7lR1xQw0XZLyv9GuUZ%2BqMTCvT8MlvaNM7LtBUkS2%2BWNskrHP%2B1%2FFpp8Fy87%2BRhCKZDZ87PTKayok3Kq%2BkMZVI%2FR7DKOKh3SRnEuhhttFJ0yT5AbVMtQy6MUlJGfZ%2BhvjQ%2FNFSSSnRrwMMRF4EECXp4hdv3UJjbKXcZ0PJfvUf7hPCQrqKmDju1Jk5h9K%2FQO20Ae%2FdjrNLA%2BvuAyuVJmY2%2Fv%2BZLiS1S2nfnJ1tvBZy2tIG24MsyTe8ZQUsKOYn7a9F6z0eyD1u8zEeZAM%2FTSilFwQDGVk1UT%2FHd7Ow%2B2BpCDoRgY%2FHbh68srf1kBmCLD902iuHlNDf0WnYCANbqxZLKpt%2BTCLvLTCBjqkAWK2vF%2FiAHXBDNpR6Jxxq88ktNs9WRvB5sc%2BBbqetcHgChvR1sxGNKiWNMZR5cGvNNYObeYw7mI1wUYxm%2BI8L2d0sFVfNjTEqn3e2UHwxUYnBo1n5jLtIcdFfQz4V1Xul7KppuzFDZ9bV7P3OPtGlKgbb%2BcMjF2dsJ8C2rMGPmvqgZLXpDi7B30qyZFzhlvtxAF8r0W2D8iKnWKnWuU0ur6S0CwI&X-Amz-Signature=6f800fb4fcd4b2ec7e0575a8e45b0af706d3fe32de5c5bafb188cbc58a49feba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

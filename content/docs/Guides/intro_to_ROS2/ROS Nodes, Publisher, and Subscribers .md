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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LGDJUD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDRFRREPXFHUo5MKsq7JAj1xf12OvU4eQYWRway%2F4UYKQIhAMIdc5U1SlhBmEX9Gv4nozCLtahlzYnAJ%2B4VUK1oKd4tKv8DCGYQABoMNjM3NDIzMTgzODA1IgyvDNm5VzE6kh%2BzmjYq3APXLazuBrTAC5CGb8UD99wtYxuMARXs8NGTpzBvAm3P9%2F5UCRXw7t76oZZYH4K76qrDkxgUDJdVDRoIwfcTfZkbmIemiYwdQHxO8%2BmTeewUKnHhqB5jNce5B8TjfSBhk23wpvczTJvtg1RrFVo8%2FbGsJ7R%2Bc5JmvpMROmlb5HfRA%2FZmQApNjqh%2FdMk0nBfC%2BX1KfY%2BNN%2FsBtPISFx0ohXPYG5sjkMlkG2AegYFw%2BzMASJVO%2FP3hRR9fZyTeiAcMBbXZ0OUNhRUIn8mnfg9x6VABMbKcGDUfIQBEs4mylxDC0VQltx1Zwe%2BstW36L4MouXUC8D8ftmB8uaxGsOrEaJ3%2Funu41DCQYMlZdYuKlCCvifIoqf4LHIwuRw3nwLNk9TLNEi6S5rlulujtwsVsNHd%2F9urq9MxwDlJ16Bn8p%2FRuQTBPTp7VkucUO8wv3u8c90jcwLv%2FJK3ejnJns1vCCgrvEQniA%2BpEf9nn6PXmn4PeXYId4IPPk0Odnc9TcYV74KWN4vgswirPm8Fjha3PrVlkX289p7cHgwDYx9AZhMtnzo6sUK0TP0AOcWpj%2FXJ2r8FNFVcH5bzoGasXjYVItda8TYjAQBOeL5fr4XMApIFyCFDdC9g4P6Zs2S68GDDnsee%2BBjqkAUQv8rx0v8HR6trsiNOPeabo5ThU6n7TB34JReFQkkIw%2FqzVvS7Egq5F%2BxSoWdvSWawlINU%2BNrHdz3ucdVHs6293ChLKpzmZNXXtkVcBp1Kwlm4zAnbVC8SJMsUDFPjE0SJ%2BnxsUu2o4t6C0FFryVgi3JKCljwOI3%2Br1mZl8hG1Vgmg6uYdw440imzbYmi3wHtjGWB%2Bavh%2BFVg%2F8fbDDZTbp9V7K&X-Amz-Signature=e9bb585165bb7dddd289c25db1af18c5cda7c314a9bbf2ae4ce113be647676e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LGDJUD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDRFRREPXFHUo5MKsq7JAj1xf12OvU4eQYWRway%2F4UYKQIhAMIdc5U1SlhBmEX9Gv4nozCLtahlzYnAJ%2B4VUK1oKd4tKv8DCGYQABoMNjM3NDIzMTgzODA1IgyvDNm5VzE6kh%2BzmjYq3APXLazuBrTAC5CGb8UD99wtYxuMARXs8NGTpzBvAm3P9%2F5UCRXw7t76oZZYH4K76qrDkxgUDJdVDRoIwfcTfZkbmIemiYwdQHxO8%2BmTeewUKnHhqB5jNce5B8TjfSBhk23wpvczTJvtg1RrFVo8%2FbGsJ7R%2Bc5JmvpMROmlb5HfRA%2FZmQApNjqh%2FdMk0nBfC%2BX1KfY%2BNN%2FsBtPISFx0ohXPYG5sjkMlkG2AegYFw%2BzMASJVO%2FP3hRR9fZyTeiAcMBbXZ0OUNhRUIn8mnfg9x6VABMbKcGDUfIQBEs4mylxDC0VQltx1Zwe%2BstW36L4MouXUC8D8ftmB8uaxGsOrEaJ3%2Funu41DCQYMlZdYuKlCCvifIoqf4LHIwuRw3nwLNk9TLNEi6S5rlulujtwsVsNHd%2F9urq9MxwDlJ16Bn8p%2FRuQTBPTp7VkucUO8wv3u8c90jcwLv%2FJK3ejnJns1vCCgrvEQniA%2BpEf9nn6PXmn4PeXYId4IPPk0Odnc9TcYV74KWN4vgswirPm8Fjha3PrVlkX289p7cHgwDYx9AZhMtnzo6sUK0TP0AOcWpj%2FXJ2r8FNFVcH5bzoGasXjYVItda8TYjAQBOeL5fr4XMApIFyCFDdC9g4P6Zs2S68GDDnsee%2BBjqkAUQv8rx0v8HR6trsiNOPeabo5ThU6n7TB34JReFQkkIw%2FqzVvS7Egq5F%2BxSoWdvSWawlINU%2BNrHdz3ucdVHs6293ChLKpzmZNXXtkVcBp1Kwlm4zAnbVC8SJMsUDFPjE0SJ%2BnxsUu2o4t6C0FFryVgi3JKCljwOI3%2Br1mZl8hG1Vgmg6uYdw440imzbYmi3wHtjGWB%2Bavh%2BFVg%2F8fbDDZTbp9V7K&X-Amz-Signature=a8e5664330e7f6744d431b83e0900569fdceb7d67104182cf4e0d547717bc5b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LGDJUD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDRFRREPXFHUo5MKsq7JAj1xf12OvU4eQYWRway%2F4UYKQIhAMIdc5U1SlhBmEX9Gv4nozCLtahlzYnAJ%2B4VUK1oKd4tKv8DCGYQABoMNjM3NDIzMTgzODA1IgyvDNm5VzE6kh%2BzmjYq3APXLazuBrTAC5CGb8UD99wtYxuMARXs8NGTpzBvAm3P9%2F5UCRXw7t76oZZYH4K76qrDkxgUDJdVDRoIwfcTfZkbmIemiYwdQHxO8%2BmTeewUKnHhqB5jNce5B8TjfSBhk23wpvczTJvtg1RrFVo8%2FbGsJ7R%2Bc5JmvpMROmlb5HfRA%2FZmQApNjqh%2FdMk0nBfC%2BX1KfY%2BNN%2FsBtPISFx0ohXPYG5sjkMlkG2AegYFw%2BzMASJVO%2FP3hRR9fZyTeiAcMBbXZ0OUNhRUIn8mnfg9x6VABMbKcGDUfIQBEs4mylxDC0VQltx1Zwe%2BstW36L4MouXUC8D8ftmB8uaxGsOrEaJ3%2Funu41DCQYMlZdYuKlCCvifIoqf4LHIwuRw3nwLNk9TLNEi6S5rlulujtwsVsNHd%2F9urq9MxwDlJ16Bn8p%2FRuQTBPTp7VkucUO8wv3u8c90jcwLv%2FJK3ejnJns1vCCgrvEQniA%2BpEf9nn6PXmn4PeXYId4IPPk0Odnc9TcYV74KWN4vgswirPm8Fjha3PrVlkX289p7cHgwDYx9AZhMtnzo6sUK0TP0AOcWpj%2FXJ2r8FNFVcH5bzoGasXjYVItda8TYjAQBOeL5fr4XMApIFyCFDdC9g4P6Zs2S68GDDnsee%2BBjqkAUQv8rx0v8HR6trsiNOPeabo5ThU6n7TB34JReFQkkIw%2FqzVvS7Egq5F%2BxSoWdvSWawlINU%2BNrHdz3ucdVHs6293ChLKpzmZNXXtkVcBp1Kwlm4zAnbVC8SJMsUDFPjE0SJ%2BnxsUu2o4t6C0FFryVgi3JKCljwOI3%2Br1mZl8hG1Vgmg6uYdw440imzbYmi3wHtjGWB%2Bavh%2BFVg%2F8fbDDZTbp9V7K&X-Amz-Signature=60ba5b3c95ee8cf374038a0558eafb7c020ece55ca3bd9d5d0852f362fc020a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LGDJUD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDRFRREPXFHUo5MKsq7JAj1xf12OvU4eQYWRway%2F4UYKQIhAMIdc5U1SlhBmEX9Gv4nozCLtahlzYnAJ%2B4VUK1oKd4tKv8DCGYQABoMNjM3NDIzMTgzODA1IgyvDNm5VzE6kh%2BzmjYq3APXLazuBrTAC5CGb8UD99wtYxuMARXs8NGTpzBvAm3P9%2F5UCRXw7t76oZZYH4K76qrDkxgUDJdVDRoIwfcTfZkbmIemiYwdQHxO8%2BmTeewUKnHhqB5jNce5B8TjfSBhk23wpvczTJvtg1RrFVo8%2FbGsJ7R%2Bc5JmvpMROmlb5HfRA%2FZmQApNjqh%2FdMk0nBfC%2BX1KfY%2BNN%2FsBtPISFx0ohXPYG5sjkMlkG2AegYFw%2BzMASJVO%2FP3hRR9fZyTeiAcMBbXZ0OUNhRUIn8mnfg9x6VABMbKcGDUfIQBEs4mylxDC0VQltx1Zwe%2BstW36L4MouXUC8D8ftmB8uaxGsOrEaJ3%2Funu41DCQYMlZdYuKlCCvifIoqf4LHIwuRw3nwLNk9TLNEi6S5rlulujtwsVsNHd%2F9urq9MxwDlJ16Bn8p%2FRuQTBPTp7VkucUO8wv3u8c90jcwLv%2FJK3ejnJns1vCCgrvEQniA%2BpEf9nn6PXmn4PeXYId4IPPk0Odnc9TcYV74KWN4vgswirPm8Fjha3PrVlkX289p7cHgwDYx9AZhMtnzo6sUK0TP0AOcWpj%2FXJ2r8FNFVcH5bzoGasXjYVItda8TYjAQBOeL5fr4XMApIFyCFDdC9g4P6Zs2S68GDDnsee%2BBjqkAUQv8rx0v8HR6trsiNOPeabo5ThU6n7TB34JReFQkkIw%2FqzVvS7Egq5F%2BxSoWdvSWawlINU%2BNrHdz3ucdVHs6293ChLKpzmZNXXtkVcBp1Kwlm4zAnbVC8SJMsUDFPjE0SJ%2BnxsUu2o4t6C0FFryVgi3JKCljwOI3%2Br1mZl8hG1Vgmg6uYdw440imzbYmi3wHtjGWB%2Bavh%2BFVg%2F8fbDDZTbp9V7K&X-Amz-Signature=d10656186b960a8470dc99c24f6cd7326fcbf3291e2bbefb4c67fb43bd3e4811&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LGDJUD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDRFRREPXFHUo5MKsq7JAj1xf12OvU4eQYWRway%2F4UYKQIhAMIdc5U1SlhBmEX9Gv4nozCLtahlzYnAJ%2B4VUK1oKd4tKv8DCGYQABoMNjM3NDIzMTgzODA1IgyvDNm5VzE6kh%2BzmjYq3APXLazuBrTAC5CGb8UD99wtYxuMARXs8NGTpzBvAm3P9%2F5UCRXw7t76oZZYH4K76qrDkxgUDJdVDRoIwfcTfZkbmIemiYwdQHxO8%2BmTeewUKnHhqB5jNce5B8TjfSBhk23wpvczTJvtg1RrFVo8%2FbGsJ7R%2Bc5JmvpMROmlb5HfRA%2FZmQApNjqh%2FdMk0nBfC%2BX1KfY%2BNN%2FsBtPISFx0ohXPYG5sjkMlkG2AegYFw%2BzMASJVO%2FP3hRR9fZyTeiAcMBbXZ0OUNhRUIn8mnfg9x6VABMbKcGDUfIQBEs4mylxDC0VQltx1Zwe%2BstW36L4MouXUC8D8ftmB8uaxGsOrEaJ3%2Funu41DCQYMlZdYuKlCCvifIoqf4LHIwuRw3nwLNk9TLNEi6S5rlulujtwsVsNHd%2F9urq9MxwDlJ16Bn8p%2FRuQTBPTp7VkucUO8wv3u8c90jcwLv%2FJK3ejnJns1vCCgrvEQniA%2BpEf9nn6PXmn4PeXYId4IPPk0Odnc9TcYV74KWN4vgswirPm8Fjha3PrVlkX289p7cHgwDYx9AZhMtnzo6sUK0TP0AOcWpj%2FXJ2r8FNFVcH5bzoGasXjYVItda8TYjAQBOeL5fr4XMApIFyCFDdC9g4P6Zs2S68GDDnsee%2BBjqkAUQv8rx0v8HR6trsiNOPeabo5ThU6n7TB34JReFQkkIw%2FqzVvS7Egq5F%2BxSoWdvSWawlINU%2BNrHdz3ucdVHs6293ChLKpzmZNXXtkVcBp1Kwlm4zAnbVC8SJMsUDFPjE0SJ%2BnxsUu2o4t6C0FFryVgi3JKCljwOI3%2Br1mZl8hG1Vgmg6uYdw440imzbYmi3wHtjGWB%2Bavh%2BFVg%2F8fbDDZTbp9V7K&X-Amz-Signature=ef9cafdfea780ba107d82b4d0c2f8da6aa298b317fe873e3ba2281f57e28387c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LGDJUD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDRFRREPXFHUo5MKsq7JAj1xf12OvU4eQYWRway%2F4UYKQIhAMIdc5U1SlhBmEX9Gv4nozCLtahlzYnAJ%2B4VUK1oKd4tKv8DCGYQABoMNjM3NDIzMTgzODA1IgyvDNm5VzE6kh%2BzmjYq3APXLazuBrTAC5CGb8UD99wtYxuMARXs8NGTpzBvAm3P9%2F5UCRXw7t76oZZYH4K76qrDkxgUDJdVDRoIwfcTfZkbmIemiYwdQHxO8%2BmTeewUKnHhqB5jNce5B8TjfSBhk23wpvczTJvtg1RrFVo8%2FbGsJ7R%2Bc5JmvpMROmlb5HfRA%2FZmQApNjqh%2FdMk0nBfC%2BX1KfY%2BNN%2FsBtPISFx0ohXPYG5sjkMlkG2AegYFw%2BzMASJVO%2FP3hRR9fZyTeiAcMBbXZ0OUNhRUIn8mnfg9x6VABMbKcGDUfIQBEs4mylxDC0VQltx1Zwe%2BstW36L4MouXUC8D8ftmB8uaxGsOrEaJ3%2Funu41DCQYMlZdYuKlCCvifIoqf4LHIwuRw3nwLNk9TLNEi6S5rlulujtwsVsNHd%2F9urq9MxwDlJ16Bn8p%2FRuQTBPTp7VkucUO8wv3u8c90jcwLv%2FJK3ejnJns1vCCgrvEQniA%2BpEf9nn6PXmn4PeXYId4IPPk0Odnc9TcYV74KWN4vgswirPm8Fjha3PrVlkX289p7cHgwDYx9AZhMtnzo6sUK0TP0AOcWpj%2FXJ2r8FNFVcH5bzoGasXjYVItda8TYjAQBOeL5fr4XMApIFyCFDdC9g4P6Zs2S68GDDnsee%2BBjqkAUQv8rx0v8HR6trsiNOPeabo5ThU6n7TB34JReFQkkIw%2FqzVvS7Egq5F%2BxSoWdvSWawlINU%2BNrHdz3ucdVHs6293ChLKpzmZNXXtkVcBp1Kwlm4zAnbVC8SJMsUDFPjE0SJ%2BnxsUu2o4t6C0FFryVgi3JKCljwOI3%2Br1mZl8hG1Vgmg6uYdw440imzbYmi3wHtjGWB%2Bavh%2BFVg%2F8fbDDZTbp9V7K&X-Amz-Signature=d628ca43570847f82d7b956c5992c97286a38b7a69832ac53399717a410ac02f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LGDJUD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDRFRREPXFHUo5MKsq7JAj1xf12OvU4eQYWRway%2F4UYKQIhAMIdc5U1SlhBmEX9Gv4nozCLtahlzYnAJ%2B4VUK1oKd4tKv8DCGYQABoMNjM3NDIzMTgzODA1IgyvDNm5VzE6kh%2BzmjYq3APXLazuBrTAC5CGb8UD99wtYxuMARXs8NGTpzBvAm3P9%2F5UCRXw7t76oZZYH4K76qrDkxgUDJdVDRoIwfcTfZkbmIemiYwdQHxO8%2BmTeewUKnHhqB5jNce5B8TjfSBhk23wpvczTJvtg1RrFVo8%2FbGsJ7R%2Bc5JmvpMROmlb5HfRA%2FZmQApNjqh%2FdMk0nBfC%2BX1KfY%2BNN%2FsBtPISFx0ohXPYG5sjkMlkG2AegYFw%2BzMASJVO%2FP3hRR9fZyTeiAcMBbXZ0OUNhRUIn8mnfg9x6VABMbKcGDUfIQBEs4mylxDC0VQltx1Zwe%2BstW36L4MouXUC8D8ftmB8uaxGsOrEaJ3%2Funu41DCQYMlZdYuKlCCvifIoqf4LHIwuRw3nwLNk9TLNEi6S5rlulujtwsVsNHd%2F9urq9MxwDlJ16Bn8p%2FRuQTBPTp7VkucUO8wv3u8c90jcwLv%2FJK3ejnJns1vCCgrvEQniA%2BpEf9nn6PXmn4PeXYId4IPPk0Odnc9TcYV74KWN4vgswirPm8Fjha3PrVlkX289p7cHgwDYx9AZhMtnzo6sUK0TP0AOcWpj%2FXJ2r8FNFVcH5bzoGasXjYVItda8TYjAQBOeL5fr4XMApIFyCFDdC9g4P6Zs2S68GDDnsee%2BBjqkAUQv8rx0v8HR6trsiNOPeabo5ThU6n7TB34JReFQkkIw%2FqzVvS7Egq5F%2BxSoWdvSWawlINU%2BNrHdz3ucdVHs6293ChLKpzmZNXXtkVcBp1Kwlm4zAnbVC8SJMsUDFPjE0SJ%2BnxsUu2o4t6C0FFryVgi3JKCljwOI3%2Br1mZl8hG1Vgmg6uYdw440imzbYmi3wHtjGWB%2Bavh%2BFVg%2F8fbDDZTbp9V7K&X-Amz-Signature=b000726d25d76ebfeace8caea7ed4ff505a131069a1bb1d5c792642785790083&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LGDJUD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDRFRREPXFHUo5MKsq7JAj1xf12OvU4eQYWRway%2F4UYKQIhAMIdc5U1SlhBmEX9Gv4nozCLtahlzYnAJ%2B4VUK1oKd4tKv8DCGYQABoMNjM3NDIzMTgzODA1IgyvDNm5VzE6kh%2BzmjYq3APXLazuBrTAC5CGb8UD99wtYxuMARXs8NGTpzBvAm3P9%2F5UCRXw7t76oZZYH4K76qrDkxgUDJdVDRoIwfcTfZkbmIemiYwdQHxO8%2BmTeewUKnHhqB5jNce5B8TjfSBhk23wpvczTJvtg1RrFVo8%2FbGsJ7R%2Bc5JmvpMROmlb5HfRA%2FZmQApNjqh%2FdMk0nBfC%2BX1KfY%2BNN%2FsBtPISFx0ohXPYG5sjkMlkG2AegYFw%2BzMASJVO%2FP3hRR9fZyTeiAcMBbXZ0OUNhRUIn8mnfg9x6VABMbKcGDUfIQBEs4mylxDC0VQltx1Zwe%2BstW36L4MouXUC8D8ftmB8uaxGsOrEaJ3%2Funu41DCQYMlZdYuKlCCvifIoqf4LHIwuRw3nwLNk9TLNEi6S5rlulujtwsVsNHd%2F9urq9MxwDlJ16Bn8p%2FRuQTBPTp7VkucUO8wv3u8c90jcwLv%2FJK3ejnJns1vCCgrvEQniA%2BpEf9nn6PXmn4PeXYId4IPPk0Odnc9TcYV74KWN4vgswirPm8Fjha3PrVlkX289p7cHgwDYx9AZhMtnzo6sUK0TP0AOcWpj%2FXJ2r8FNFVcH5bzoGasXjYVItda8TYjAQBOeL5fr4XMApIFyCFDdC9g4P6Zs2S68GDDnsee%2BBjqkAUQv8rx0v8HR6trsiNOPeabo5ThU6n7TB34JReFQkkIw%2FqzVvS7Egq5F%2BxSoWdvSWawlINU%2BNrHdz3ucdVHs6293ChLKpzmZNXXtkVcBp1Kwlm4zAnbVC8SJMsUDFPjE0SJ%2BnxsUu2o4t6C0FFryVgi3JKCljwOI3%2Br1mZl8hG1Vgmg6uYdw440imzbYmi3wHtjGWB%2Bavh%2BFVg%2F8fbDDZTbp9V7K&X-Amz-Signature=ae2f4bed2991785e7533cd432d5b6e943309404aeead0c2d47301590f9627d14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7YE7KJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC7SezsaA36L71IkKu3CK3y4vhhkNTVPWnVEYGlD%2BPIgwIgdB0RXPVzmx%2BlZmG9pojPhrdFnYuQsLgLLELculyRSt4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIrwVJEsSOSgFPselircAwodW8wowXrBQaRWMnf9pf0RovJSLj1f6xh7Asxaq96b8njMS8VaQ7%2FT%2BMiv3gFLpfkf1GnJEYQZecrT4JX7pJCuYiWUSUwX645rUl0EEbMtDeaIw6WntPEeE%2B1SNRE8bf0aQ2tg8XVnVcuRLUd3hfusejsKVD5M1zm01dkWY9SeF5p2OIztAfTWqP7yvp%2Fn6tJ4SdGe5Q6JhZF29bhsZi6QvOwfDfGBXxIOJ0m9ymdrdo1noNVislDJ546uaxLxNxAeTJm2Ngavsda8Rz7xkerlAG%2BaWZ3FKDwdXtufyyDZ9NeVUQI3KLVYDQBBFH0%2FIFzZk%2BQlLYuUPS2lsCPBQWUQ4OchKPR4LtxyjyMP1i2yw7M0dEzXPrF%2BkAY9YkzidSpYhJMBRdH3cgT1O%2BPCjWmI6vtP0E2jieIM55ur29y37Ev1cgDAt9UETUlXnCNdx9xtHKQQ3yf8aOCLLA2rBz2uF3uG72Yhyxkbd23FYMzTKW7G1tTBU8HuaSBVV7gQHEwhHs0D12Ly21kV0MfZwBsID%2BdlG4xJqEmvqevs0Inm%2BN%2BhpoJhbU%2FVj%2FVqSIdhaG%2B8Ln7VkMQZolbiYreG7OZWyn8uRgruD1VkGogWE6GG2FRBZIPhZSsndoeVMJ2N8cIGOqUB8YEkaUyxpkXUO%2BvWdY7kvSvDsO87tTmjz0guucq%2FBrPKVffB0R0sndLsfkMJTSndsXZHVNiYhRAbBHAdO%2BkQESSH9%2BEGZsXGtRHBDYiT1XcflOQzQiwNSfFl5SJ150ZJQAkJEYRWZNMXMiQ6sVnxNk3nGNpsRRfMbyaEoJ%2BMRlB46DSOpIIX%2FYMRr8981YJVJYQyWiIydGFcQzVNSlKkqf5j%2Fl4a&X-Amz-Signature=62d7132c7c8d347c594af1ca26a490bd5d6bc45a68773a584dc5dd86c46e9e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7YE7KJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC7SezsaA36L71IkKu3CK3y4vhhkNTVPWnVEYGlD%2BPIgwIgdB0RXPVzmx%2BlZmG9pojPhrdFnYuQsLgLLELculyRSt4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIrwVJEsSOSgFPselircAwodW8wowXrBQaRWMnf9pf0RovJSLj1f6xh7Asxaq96b8njMS8VaQ7%2FT%2BMiv3gFLpfkf1GnJEYQZecrT4JX7pJCuYiWUSUwX645rUl0EEbMtDeaIw6WntPEeE%2B1SNRE8bf0aQ2tg8XVnVcuRLUd3hfusejsKVD5M1zm01dkWY9SeF5p2OIztAfTWqP7yvp%2Fn6tJ4SdGe5Q6JhZF29bhsZi6QvOwfDfGBXxIOJ0m9ymdrdo1noNVislDJ546uaxLxNxAeTJm2Ngavsda8Rz7xkerlAG%2BaWZ3FKDwdXtufyyDZ9NeVUQI3KLVYDQBBFH0%2FIFzZk%2BQlLYuUPS2lsCPBQWUQ4OchKPR4LtxyjyMP1i2yw7M0dEzXPrF%2BkAY9YkzidSpYhJMBRdH3cgT1O%2BPCjWmI6vtP0E2jieIM55ur29y37Ev1cgDAt9UETUlXnCNdx9xtHKQQ3yf8aOCLLA2rBz2uF3uG72Yhyxkbd23FYMzTKW7G1tTBU8HuaSBVV7gQHEwhHs0D12Ly21kV0MfZwBsID%2BdlG4xJqEmvqevs0Inm%2BN%2BhpoJhbU%2FVj%2FVqSIdhaG%2B8Ln7VkMQZolbiYreG7OZWyn8uRgruD1VkGogWE6GG2FRBZIPhZSsndoeVMJ2N8cIGOqUB8YEkaUyxpkXUO%2BvWdY7kvSvDsO87tTmjz0guucq%2FBrPKVffB0R0sndLsfkMJTSndsXZHVNiYhRAbBHAdO%2BkQESSH9%2BEGZsXGtRHBDYiT1XcflOQzQiwNSfFl5SJ150ZJQAkJEYRWZNMXMiQ6sVnxNk3nGNpsRRfMbyaEoJ%2BMRlB46DSOpIIX%2FYMRr8981YJVJYQyWiIydGFcQzVNSlKkqf5j%2Fl4a&X-Amz-Signature=622ba81bef2494673f946204e8237b51879efde7d788c6a38df0ef78c556977f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7YE7KJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC7SezsaA36L71IkKu3CK3y4vhhkNTVPWnVEYGlD%2BPIgwIgdB0RXPVzmx%2BlZmG9pojPhrdFnYuQsLgLLELculyRSt4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIrwVJEsSOSgFPselircAwodW8wowXrBQaRWMnf9pf0RovJSLj1f6xh7Asxaq96b8njMS8VaQ7%2FT%2BMiv3gFLpfkf1GnJEYQZecrT4JX7pJCuYiWUSUwX645rUl0EEbMtDeaIw6WntPEeE%2B1SNRE8bf0aQ2tg8XVnVcuRLUd3hfusejsKVD5M1zm01dkWY9SeF5p2OIztAfTWqP7yvp%2Fn6tJ4SdGe5Q6JhZF29bhsZi6QvOwfDfGBXxIOJ0m9ymdrdo1noNVislDJ546uaxLxNxAeTJm2Ngavsda8Rz7xkerlAG%2BaWZ3FKDwdXtufyyDZ9NeVUQI3KLVYDQBBFH0%2FIFzZk%2BQlLYuUPS2lsCPBQWUQ4OchKPR4LtxyjyMP1i2yw7M0dEzXPrF%2BkAY9YkzidSpYhJMBRdH3cgT1O%2BPCjWmI6vtP0E2jieIM55ur29y37Ev1cgDAt9UETUlXnCNdx9xtHKQQ3yf8aOCLLA2rBz2uF3uG72Yhyxkbd23FYMzTKW7G1tTBU8HuaSBVV7gQHEwhHs0D12Ly21kV0MfZwBsID%2BdlG4xJqEmvqevs0Inm%2BN%2BhpoJhbU%2FVj%2FVqSIdhaG%2B8Ln7VkMQZolbiYreG7OZWyn8uRgruD1VkGogWE6GG2FRBZIPhZSsndoeVMJ2N8cIGOqUB8YEkaUyxpkXUO%2BvWdY7kvSvDsO87tTmjz0guucq%2FBrPKVffB0R0sndLsfkMJTSndsXZHVNiYhRAbBHAdO%2BkQESSH9%2BEGZsXGtRHBDYiT1XcflOQzQiwNSfFl5SJ150ZJQAkJEYRWZNMXMiQ6sVnxNk3nGNpsRRfMbyaEoJ%2BMRlB46DSOpIIX%2FYMRr8981YJVJYQyWiIydGFcQzVNSlKkqf5j%2Fl4a&X-Amz-Signature=fadf715556ee6254dd5af1adefe1a56a8feff39c20f05fa41b54a0a6b58e14e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7YE7KJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC7SezsaA36L71IkKu3CK3y4vhhkNTVPWnVEYGlD%2BPIgwIgdB0RXPVzmx%2BlZmG9pojPhrdFnYuQsLgLLELculyRSt4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIrwVJEsSOSgFPselircAwodW8wowXrBQaRWMnf9pf0RovJSLj1f6xh7Asxaq96b8njMS8VaQ7%2FT%2BMiv3gFLpfkf1GnJEYQZecrT4JX7pJCuYiWUSUwX645rUl0EEbMtDeaIw6WntPEeE%2B1SNRE8bf0aQ2tg8XVnVcuRLUd3hfusejsKVD5M1zm01dkWY9SeF5p2OIztAfTWqP7yvp%2Fn6tJ4SdGe5Q6JhZF29bhsZi6QvOwfDfGBXxIOJ0m9ymdrdo1noNVislDJ546uaxLxNxAeTJm2Ngavsda8Rz7xkerlAG%2BaWZ3FKDwdXtufyyDZ9NeVUQI3KLVYDQBBFH0%2FIFzZk%2BQlLYuUPS2lsCPBQWUQ4OchKPR4LtxyjyMP1i2yw7M0dEzXPrF%2BkAY9YkzidSpYhJMBRdH3cgT1O%2BPCjWmI6vtP0E2jieIM55ur29y37Ev1cgDAt9UETUlXnCNdx9xtHKQQ3yf8aOCLLA2rBz2uF3uG72Yhyxkbd23FYMzTKW7G1tTBU8HuaSBVV7gQHEwhHs0D12Ly21kV0MfZwBsID%2BdlG4xJqEmvqevs0Inm%2BN%2BhpoJhbU%2FVj%2FVqSIdhaG%2B8Ln7VkMQZolbiYreG7OZWyn8uRgruD1VkGogWE6GG2FRBZIPhZSsndoeVMJ2N8cIGOqUB8YEkaUyxpkXUO%2BvWdY7kvSvDsO87tTmjz0guucq%2FBrPKVffB0R0sndLsfkMJTSndsXZHVNiYhRAbBHAdO%2BkQESSH9%2BEGZsXGtRHBDYiT1XcflOQzQiwNSfFl5SJ150ZJQAkJEYRWZNMXMiQ6sVnxNk3nGNpsRRfMbyaEoJ%2BMRlB46DSOpIIX%2FYMRr8981YJVJYQyWiIydGFcQzVNSlKkqf5j%2Fl4a&X-Amz-Signature=423c8f9e3b5dce95ed648838b0236c042f018efa6af735343a84139e461dbaf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7YE7KJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC7SezsaA36L71IkKu3CK3y4vhhkNTVPWnVEYGlD%2BPIgwIgdB0RXPVzmx%2BlZmG9pojPhrdFnYuQsLgLLELculyRSt4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIrwVJEsSOSgFPselircAwodW8wowXrBQaRWMnf9pf0RovJSLj1f6xh7Asxaq96b8njMS8VaQ7%2FT%2BMiv3gFLpfkf1GnJEYQZecrT4JX7pJCuYiWUSUwX645rUl0EEbMtDeaIw6WntPEeE%2B1SNRE8bf0aQ2tg8XVnVcuRLUd3hfusejsKVD5M1zm01dkWY9SeF5p2OIztAfTWqP7yvp%2Fn6tJ4SdGe5Q6JhZF29bhsZi6QvOwfDfGBXxIOJ0m9ymdrdo1noNVislDJ546uaxLxNxAeTJm2Ngavsda8Rz7xkerlAG%2BaWZ3FKDwdXtufyyDZ9NeVUQI3KLVYDQBBFH0%2FIFzZk%2BQlLYuUPS2lsCPBQWUQ4OchKPR4LtxyjyMP1i2yw7M0dEzXPrF%2BkAY9YkzidSpYhJMBRdH3cgT1O%2BPCjWmI6vtP0E2jieIM55ur29y37Ev1cgDAt9UETUlXnCNdx9xtHKQQ3yf8aOCLLA2rBz2uF3uG72Yhyxkbd23FYMzTKW7G1tTBU8HuaSBVV7gQHEwhHs0D12Ly21kV0MfZwBsID%2BdlG4xJqEmvqevs0Inm%2BN%2BhpoJhbU%2FVj%2FVqSIdhaG%2B8Ln7VkMQZolbiYreG7OZWyn8uRgruD1VkGogWE6GG2FRBZIPhZSsndoeVMJ2N8cIGOqUB8YEkaUyxpkXUO%2BvWdY7kvSvDsO87tTmjz0guucq%2FBrPKVffB0R0sndLsfkMJTSndsXZHVNiYhRAbBHAdO%2BkQESSH9%2BEGZsXGtRHBDYiT1XcflOQzQiwNSfFl5SJ150ZJQAkJEYRWZNMXMiQ6sVnxNk3nGNpsRRfMbyaEoJ%2BMRlB46DSOpIIX%2FYMRr8981YJVJYQyWiIydGFcQzVNSlKkqf5j%2Fl4a&X-Amz-Signature=0119addbd1d8efdfa79fdb6ced42829859320d4e277a0e824e97c9dcec50a235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7YE7KJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC7SezsaA36L71IkKu3CK3y4vhhkNTVPWnVEYGlD%2BPIgwIgdB0RXPVzmx%2BlZmG9pojPhrdFnYuQsLgLLELculyRSt4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIrwVJEsSOSgFPselircAwodW8wowXrBQaRWMnf9pf0RovJSLj1f6xh7Asxaq96b8njMS8VaQ7%2FT%2BMiv3gFLpfkf1GnJEYQZecrT4JX7pJCuYiWUSUwX645rUl0EEbMtDeaIw6WntPEeE%2B1SNRE8bf0aQ2tg8XVnVcuRLUd3hfusejsKVD5M1zm01dkWY9SeF5p2OIztAfTWqP7yvp%2Fn6tJ4SdGe5Q6JhZF29bhsZi6QvOwfDfGBXxIOJ0m9ymdrdo1noNVislDJ546uaxLxNxAeTJm2Ngavsda8Rz7xkerlAG%2BaWZ3FKDwdXtufyyDZ9NeVUQI3KLVYDQBBFH0%2FIFzZk%2BQlLYuUPS2lsCPBQWUQ4OchKPR4LtxyjyMP1i2yw7M0dEzXPrF%2BkAY9YkzidSpYhJMBRdH3cgT1O%2BPCjWmI6vtP0E2jieIM55ur29y37Ev1cgDAt9UETUlXnCNdx9xtHKQQ3yf8aOCLLA2rBz2uF3uG72Yhyxkbd23FYMzTKW7G1tTBU8HuaSBVV7gQHEwhHs0D12Ly21kV0MfZwBsID%2BdlG4xJqEmvqevs0Inm%2BN%2BhpoJhbU%2FVj%2FVqSIdhaG%2B8Ln7VkMQZolbiYreG7OZWyn8uRgruD1VkGogWE6GG2FRBZIPhZSsndoeVMJ2N8cIGOqUB8YEkaUyxpkXUO%2BvWdY7kvSvDsO87tTmjz0guucq%2FBrPKVffB0R0sndLsfkMJTSndsXZHVNiYhRAbBHAdO%2BkQESSH9%2BEGZsXGtRHBDYiT1XcflOQzQiwNSfFl5SJ150ZJQAkJEYRWZNMXMiQ6sVnxNk3nGNpsRRfMbyaEoJ%2BMRlB46DSOpIIX%2FYMRr8981YJVJYQyWiIydGFcQzVNSlKkqf5j%2Fl4a&X-Amz-Signature=035ae9c87c4d3dfce23dd3cce882f2ec18a30b29e026933cc978444a0e7a0b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7YE7KJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC7SezsaA36L71IkKu3CK3y4vhhkNTVPWnVEYGlD%2BPIgwIgdB0RXPVzmx%2BlZmG9pojPhrdFnYuQsLgLLELculyRSt4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIrwVJEsSOSgFPselircAwodW8wowXrBQaRWMnf9pf0RovJSLj1f6xh7Asxaq96b8njMS8VaQ7%2FT%2BMiv3gFLpfkf1GnJEYQZecrT4JX7pJCuYiWUSUwX645rUl0EEbMtDeaIw6WntPEeE%2B1SNRE8bf0aQ2tg8XVnVcuRLUd3hfusejsKVD5M1zm01dkWY9SeF5p2OIztAfTWqP7yvp%2Fn6tJ4SdGe5Q6JhZF29bhsZi6QvOwfDfGBXxIOJ0m9ymdrdo1noNVislDJ546uaxLxNxAeTJm2Ngavsda8Rz7xkerlAG%2BaWZ3FKDwdXtufyyDZ9NeVUQI3KLVYDQBBFH0%2FIFzZk%2BQlLYuUPS2lsCPBQWUQ4OchKPR4LtxyjyMP1i2yw7M0dEzXPrF%2BkAY9YkzidSpYhJMBRdH3cgT1O%2BPCjWmI6vtP0E2jieIM55ur29y37Ev1cgDAt9UETUlXnCNdx9xtHKQQ3yf8aOCLLA2rBz2uF3uG72Yhyxkbd23FYMzTKW7G1tTBU8HuaSBVV7gQHEwhHs0D12Ly21kV0MfZwBsID%2BdlG4xJqEmvqevs0Inm%2BN%2BhpoJhbU%2FVj%2FVqSIdhaG%2B8Ln7VkMQZolbiYreG7OZWyn8uRgruD1VkGogWE6GG2FRBZIPhZSsndoeVMJ2N8cIGOqUB8YEkaUyxpkXUO%2BvWdY7kvSvDsO87tTmjz0guucq%2FBrPKVffB0R0sndLsfkMJTSndsXZHVNiYhRAbBHAdO%2BkQESSH9%2BEGZsXGtRHBDYiT1XcflOQzQiwNSfFl5SJ150ZJQAkJEYRWZNMXMiQ6sVnxNk3nGNpsRRfMbyaEoJ%2BMRlB46DSOpIIX%2FYMRr8981YJVJYQyWiIydGFcQzVNSlKkqf5j%2Fl4a&X-Amz-Signature=558997b0f278484ca2a25ad0195353de297c8434ada2e50cdbe8052b0b347514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7YE7KJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC7SezsaA36L71IkKu3CK3y4vhhkNTVPWnVEYGlD%2BPIgwIgdB0RXPVzmx%2BlZmG9pojPhrdFnYuQsLgLLELculyRSt4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIrwVJEsSOSgFPselircAwodW8wowXrBQaRWMnf9pf0RovJSLj1f6xh7Asxaq96b8njMS8VaQ7%2FT%2BMiv3gFLpfkf1GnJEYQZecrT4JX7pJCuYiWUSUwX645rUl0EEbMtDeaIw6WntPEeE%2B1SNRE8bf0aQ2tg8XVnVcuRLUd3hfusejsKVD5M1zm01dkWY9SeF5p2OIztAfTWqP7yvp%2Fn6tJ4SdGe5Q6JhZF29bhsZi6QvOwfDfGBXxIOJ0m9ymdrdo1noNVislDJ546uaxLxNxAeTJm2Ngavsda8Rz7xkerlAG%2BaWZ3FKDwdXtufyyDZ9NeVUQI3KLVYDQBBFH0%2FIFzZk%2BQlLYuUPS2lsCPBQWUQ4OchKPR4LtxyjyMP1i2yw7M0dEzXPrF%2BkAY9YkzidSpYhJMBRdH3cgT1O%2BPCjWmI6vtP0E2jieIM55ur29y37Ev1cgDAt9UETUlXnCNdx9xtHKQQ3yf8aOCLLA2rBz2uF3uG72Yhyxkbd23FYMzTKW7G1tTBU8HuaSBVV7gQHEwhHs0D12Ly21kV0MfZwBsID%2BdlG4xJqEmvqevs0Inm%2BN%2BhpoJhbU%2FVj%2FVqSIdhaG%2B8Ln7VkMQZolbiYreG7OZWyn8uRgruD1VkGogWE6GG2FRBZIPhZSsndoeVMJ2N8cIGOqUB8YEkaUyxpkXUO%2BvWdY7kvSvDsO87tTmjz0guucq%2FBrPKVffB0R0sndLsfkMJTSndsXZHVNiYhRAbBHAdO%2BkQESSH9%2BEGZsXGtRHBDYiT1XcflOQzQiwNSfFl5SJ150ZJQAkJEYRWZNMXMiQ6sVnxNk3nGNpsRRfMbyaEoJ%2BMRlB46DSOpIIX%2FYMRr8981YJVJYQyWiIydGFcQzVNSlKkqf5j%2Fl4a&X-Amz-Signature=709f108359ef0faff3ef2b506fab6a2e1c6aa0fab4a91c2e12677b63c67b77b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

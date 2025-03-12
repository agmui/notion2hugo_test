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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTWGPZ4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIC46b2uiOMTuIsG1EY01fHhHgiSJW%2FWyti8w1kIutp3QAiAS7%2FPKcGLKdRZ0CDROnxusY7jBcAqyTcJKfI4lBmk%2F1SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldnXHUt0mQZ4b122KtwDn45IEG2WYXTKz6BkW4GLq3QsnRAV6btCL4GpMfxXAt49Ygxwj6o0M4BlgE8rERAmEP47MPMdL10NzRvuTdioMYYwxq0EKVUXnRJl3009JIA6cv5fiE%2BdOv5vII0e467EFEPGJyPI9XHEGdN833lfhL28eqYwSQ7tWNkYDVoq8KgLd0bmetLAA4H2kKU0lxl%2BLAd%2F%2B3epiRONuVGb2TQD0vB0Dy8coXF%2F7OqHBP1eQIKwCaRAiOaMUApcTHS78IBYwU9LDx9q6p2b32Ps7xA12ToiFJclfiOXf7PMb4iNuOiPVAwUfaaSjXHM5zy4RBNLVDKGias6atq%2B%2FrYTBMWSaxf0krFqhPTQu88IWrdMT9e6XOp%2F8578ADU5SGXKAnUJ5SbjpVDinI5kHsUEQ7Eir7zrCESASiwEFgkptFyworJ8Wyfz8pB9El1XA0%2B%2BIjVBSfjR%2B9Wv6YvZzYqgOSh0PTvNbnhrRso5tUc0KQXNBjX4NGg9ggM2B49LLB289b30gTGUUT2JjHwMTckSMOSKkgxY%2FZrvtNn%2BJqkkQdQrZhTzyEAZ%2FeroMF75yYGXa7LuUA7vKb37%2BnVyJn0J3MwPpiy%2FQ%2BsufnPFDssSr3%2FjGcNrAq%2BnBg7eHSIXwCIwpuTHvgY6pgFjGsXdbpIgivnfI3N5GFGOMVKsB02mNURGc7igNHgEl1CUYLxHaPLgnsKNZ6sF9Gi4SI4a4y3EUwpkZDwkXpqgp1pkY%2FDyI2dxgw3tUjdu2A4gijUQ83Esmoc6VmhPE1n3uBZZJ7GYVP061Z4oExRxCepOHhgPWXAeixYWtVZBWSsmPaOepXhv4EBwSRLayH8V2vVhtXoZxifzSTs4H3%2FswhQYqCpd&X-Amz-Signature=a6f47a4458e4bd5297022d1e4194d4e2214aa1458160d202e24a5597e8c44d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTWGPZ4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIC46b2uiOMTuIsG1EY01fHhHgiSJW%2FWyti8w1kIutp3QAiAS7%2FPKcGLKdRZ0CDROnxusY7jBcAqyTcJKfI4lBmk%2F1SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldnXHUt0mQZ4b122KtwDn45IEG2WYXTKz6BkW4GLq3QsnRAV6btCL4GpMfxXAt49Ygxwj6o0M4BlgE8rERAmEP47MPMdL10NzRvuTdioMYYwxq0EKVUXnRJl3009JIA6cv5fiE%2BdOv5vII0e467EFEPGJyPI9XHEGdN833lfhL28eqYwSQ7tWNkYDVoq8KgLd0bmetLAA4H2kKU0lxl%2BLAd%2F%2B3epiRONuVGb2TQD0vB0Dy8coXF%2F7OqHBP1eQIKwCaRAiOaMUApcTHS78IBYwU9LDx9q6p2b32Ps7xA12ToiFJclfiOXf7PMb4iNuOiPVAwUfaaSjXHM5zy4RBNLVDKGias6atq%2B%2FrYTBMWSaxf0krFqhPTQu88IWrdMT9e6XOp%2F8578ADU5SGXKAnUJ5SbjpVDinI5kHsUEQ7Eir7zrCESASiwEFgkptFyworJ8Wyfz8pB9El1XA0%2B%2BIjVBSfjR%2B9Wv6YvZzYqgOSh0PTvNbnhrRso5tUc0KQXNBjX4NGg9ggM2B49LLB289b30gTGUUT2JjHwMTckSMOSKkgxY%2FZrvtNn%2BJqkkQdQrZhTzyEAZ%2FeroMF75yYGXa7LuUA7vKb37%2BnVyJn0J3MwPpiy%2FQ%2BsufnPFDssSr3%2FjGcNrAq%2BnBg7eHSIXwCIwpuTHvgY6pgFjGsXdbpIgivnfI3N5GFGOMVKsB02mNURGc7igNHgEl1CUYLxHaPLgnsKNZ6sF9Gi4SI4a4y3EUwpkZDwkXpqgp1pkY%2FDyI2dxgw3tUjdu2A4gijUQ83Esmoc6VmhPE1n3uBZZJ7GYVP061Z4oExRxCepOHhgPWXAeixYWtVZBWSsmPaOepXhv4EBwSRLayH8V2vVhtXoZxifzSTs4H3%2FswhQYqCpd&X-Amz-Signature=d04afc63c3c4d6a33af03033d2e36b55d92e4b47178ddc11191a23c3c33c062d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTWGPZ4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIC46b2uiOMTuIsG1EY01fHhHgiSJW%2FWyti8w1kIutp3QAiAS7%2FPKcGLKdRZ0CDROnxusY7jBcAqyTcJKfI4lBmk%2F1SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldnXHUt0mQZ4b122KtwDn45IEG2WYXTKz6BkW4GLq3QsnRAV6btCL4GpMfxXAt49Ygxwj6o0M4BlgE8rERAmEP47MPMdL10NzRvuTdioMYYwxq0EKVUXnRJl3009JIA6cv5fiE%2BdOv5vII0e467EFEPGJyPI9XHEGdN833lfhL28eqYwSQ7tWNkYDVoq8KgLd0bmetLAA4H2kKU0lxl%2BLAd%2F%2B3epiRONuVGb2TQD0vB0Dy8coXF%2F7OqHBP1eQIKwCaRAiOaMUApcTHS78IBYwU9LDx9q6p2b32Ps7xA12ToiFJclfiOXf7PMb4iNuOiPVAwUfaaSjXHM5zy4RBNLVDKGias6atq%2B%2FrYTBMWSaxf0krFqhPTQu88IWrdMT9e6XOp%2F8578ADU5SGXKAnUJ5SbjpVDinI5kHsUEQ7Eir7zrCESASiwEFgkptFyworJ8Wyfz8pB9El1XA0%2B%2BIjVBSfjR%2B9Wv6YvZzYqgOSh0PTvNbnhrRso5tUc0KQXNBjX4NGg9ggM2B49LLB289b30gTGUUT2JjHwMTckSMOSKkgxY%2FZrvtNn%2BJqkkQdQrZhTzyEAZ%2FeroMF75yYGXa7LuUA7vKb37%2BnVyJn0J3MwPpiy%2FQ%2BsufnPFDssSr3%2FjGcNrAq%2BnBg7eHSIXwCIwpuTHvgY6pgFjGsXdbpIgivnfI3N5GFGOMVKsB02mNURGc7igNHgEl1CUYLxHaPLgnsKNZ6sF9Gi4SI4a4y3EUwpkZDwkXpqgp1pkY%2FDyI2dxgw3tUjdu2A4gijUQ83Esmoc6VmhPE1n3uBZZJ7GYVP061Z4oExRxCepOHhgPWXAeixYWtVZBWSsmPaOepXhv4EBwSRLayH8V2vVhtXoZxifzSTs4H3%2FswhQYqCpd&X-Amz-Signature=81b9c229935d1b501f35b3773aa009342af8964eb17e1b5e0283db45bb73866e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTWGPZ4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIC46b2uiOMTuIsG1EY01fHhHgiSJW%2FWyti8w1kIutp3QAiAS7%2FPKcGLKdRZ0CDROnxusY7jBcAqyTcJKfI4lBmk%2F1SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldnXHUt0mQZ4b122KtwDn45IEG2WYXTKz6BkW4GLq3QsnRAV6btCL4GpMfxXAt49Ygxwj6o0M4BlgE8rERAmEP47MPMdL10NzRvuTdioMYYwxq0EKVUXnRJl3009JIA6cv5fiE%2BdOv5vII0e467EFEPGJyPI9XHEGdN833lfhL28eqYwSQ7tWNkYDVoq8KgLd0bmetLAA4H2kKU0lxl%2BLAd%2F%2B3epiRONuVGb2TQD0vB0Dy8coXF%2F7OqHBP1eQIKwCaRAiOaMUApcTHS78IBYwU9LDx9q6p2b32Ps7xA12ToiFJclfiOXf7PMb4iNuOiPVAwUfaaSjXHM5zy4RBNLVDKGias6atq%2B%2FrYTBMWSaxf0krFqhPTQu88IWrdMT9e6XOp%2F8578ADU5SGXKAnUJ5SbjpVDinI5kHsUEQ7Eir7zrCESASiwEFgkptFyworJ8Wyfz8pB9El1XA0%2B%2BIjVBSfjR%2B9Wv6YvZzYqgOSh0PTvNbnhrRso5tUc0KQXNBjX4NGg9ggM2B49LLB289b30gTGUUT2JjHwMTckSMOSKkgxY%2FZrvtNn%2BJqkkQdQrZhTzyEAZ%2FeroMF75yYGXa7LuUA7vKb37%2BnVyJn0J3MwPpiy%2FQ%2BsufnPFDssSr3%2FjGcNrAq%2BnBg7eHSIXwCIwpuTHvgY6pgFjGsXdbpIgivnfI3N5GFGOMVKsB02mNURGc7igNHgEl1CUYLxHaPLgnsKNZ6sF9Gi4SI4a4y3EUwpkZDwkXpqgp1pkY%2FDyI2dxgw3tUjdu2A4gijUQ83Esmoc6VmhPE1n3uBZZJ7GYVP061Z4oExRxCepOHhgPWXAeixYWtVZBWSsmPaOepXhv4EBwSRLayH8V2vVhtXoZxifzSTs4H3%2FswhQYqCpd&X-Amz-Signature=2a5bbb70c2987337831da005903ab6bfeb5752b84c2db492a9ccf7482c24e235&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTWGPZ4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIC46b2uiOMTuIsG1EY01fHhHgiSJW%2FWyti8w1kIutp3QAiAS7%2FPKcGLKdRZ0CDROnxusY7jBcAqyTcJKfI4lBmk%2F1SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldnXHUt0mQZ4b122KtwDn45IEG2WYXTKz6BkW4GLq3QsnRAV6btCL4GpMfxXAt49Ygxwj6o0M4BlgE8rERAmEP47MPMdL10NzRvuTdioMYYwxq0EKVUXnRJl3009JIA6cv5fiE%2BdOv5vII0e467EFEPGJyPI9XHEGdN833lfhL28eqYwSQ7tWNkYDVoq8KgLd0bmetLAA4H2kKU0lxl%2BLAd%2F%2B3epiRONuVGb2TQD0vB0Dy8coXF%2F7OqHBP1eQIKwCaRAiOaMUApcTHS78IBYwU9LDx9q6p2b32Ps7xA12ToiFJclfiOXf7PMb4iNuOiPVAwUfaaSjXHM5zy4RBNLVDKGias6atq%2B%2FrYTBMWSaxf0krFqhPTQu88IWrdMT9e6XOp%2F8578ADU5SGXKAnUJ5SbjpVDinI5kHsUEQ7Eir7zrCESASiwEFgkptFyworJ8Wyfz8pB9El1XA0%2B%2BIjVBSfjR%2B9Wv6YvZzYqgOSh0PTvNbnhrRso5tUc0KQXNBjX4NGg9ggM2B49LLB289b30gTGUUT2JjHwMTckSMOSKkgxY%2FZrvtNn%2BJqkkQdQrZhTzyEAZ%2FeroMF75yYGXa7LuUA7vKb37%2BnVyJn0J3MwPpiy%2FQ%2BsufnPFDssSr3%2FjGcNrAq%2BnBg7eHSIXwCIwpuTHvgY6pgFjGsXdbpIgivnfI3N5GFGOMVKsB02mNURGc7igNHgEl1CUYLxHaPLgnsKNZ6sF9Gi4SI4a4y3EUwpkZDwkXpqgp1pkY%2FDyI2dxgw3tUjdu2A4gijUQ83Esmoc6VmhPE1n3uBZZJ7GYVP061Z4oExRxCepOHhgPWXAeixYWtVZBWSsmPaOepXhv4EBwSRLayH8V2vVhtXoZxifzSTs4H3%2FswhQYqCpd&X-Amz-Signature=7a8ee4da35697e73c63086a18f8561a777840824c4a13b737bf8c918a9a3530c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTWGPZ4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIC46b2uiOMTuIsG1EY01fHhHgiSJW%2FWyti8w1kIutp3QAiAS7%2FPKcGLKdRZ0CDROnxusY7jBcAqyTcJKfI4lBmk%2F1SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldnXHUt0mQZ4b122KtwDn45IEG2WYXTKz6BkW4GLq3QsnRAV6btCL4GpMfxXAt49Ygxwj6o0M4BlgE8rERAmEP47MPMdL10NzRvuTdioMYYwxq0EKVUXnRJl3009JIA6cv5fiE%2BdOv5vII0e467EFEPGJyPI9XHEGdN833lfhL28eqYwSQ7tWNkYDVoq8KgLd0bmetLAA4H2kKU0lxl%2BLAd%2F%2B3epiRONuVGb2TQD0vB0Dy8coXF%2F7OqHBP1eQIKwCaRAiOaMUApcTHS78IBYwU9LDx9q6p2b32Ps7xA12ToiFJclfiOXf7PMb4iNuOiPVAwUfaaSjXHM5zy4RBNLVDKGias6atq%2B%2FrYTBMWSaxf0krFqhPTQu88IWrdMT9e6XOp%2F8578ADU5SGXKAnUJ5SbjpVDinI5kHsUEQ7Eir7zrCESASiwEFgkptFyworJ8Wyfz8pB9El1XA0%2B%2BIjVBSfjR%2B9Wv6YvZzYqgOSh0PTvNbnhrRso5tUc0KQXNBjX4NGg9ggM2B49LLB289b30gTGUUT2JjHwMTckSMOSKkgxY%2FZrvtNn%2BJqkkQdQrZhTzyEAZ%2FeroMF75yYGXa7LuUA7vKb37%2BnVyJn0J3MwPpiy%2FQ%2BsufnPFDssSr3%2FjGcNrAq%2BnBg7eHSIXwCIwpuTHvgY6pgFjGsXdbpIgivnfI3N5GFGOMVKsB02mNURGc7igNHgEl1CUYLxHaPLgnsKNZ6sF9Gi4SI4a4y3EUwpkZDwkXpqgp1pkY%2FDyI2dxgw3tUjdu2A4gijUQ83Esmoc6VmhPE1n3uBZZJ7GYVP061Z4oExRxCepOHhgPWXAeixYWtVZBWSsmPaOepXhv4EBwSRLayH8V2vVhtXoZxifzSTs4H3%2FswhQYqCpd&X-Amz-Signature=2bb4d9395e4024f05408b07df6432fea1c89635fb2fbfe227b57d7208f5e0783&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTWGPZ4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIC46b2uiOMTuIsG1EY01fHhHgiSJW%2FWyti8w1kIutp3QAiAS7%2FPKcGLKdRZ0CDROnxusY7jBcAqyTcJKfI4lBmk%2F1SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldnXHUt0mQZ4b122KtwDn45IEG2WYXTKz6BkW4GLq3QsnRAV6btCL4GpMfxXAt49Ygxwj6o0M4BlgE8rERAmEP47MPMdL10NzRvuTdioMYYwxq0EKVUXnRJl3009JIA6cv5fiE%2BdOv5vII0e467EFEPGJyPI9XHEGdN833lfhL28eqYwSQ7tWNkYDVoq8KgLd0bmetLAA4H2kKU0lxl%2BLAd%2F%2B3epiRONuVGb2TQD0vB0Dy8coXF%2F7OqHBP1eQIKwCaRAiOaMUApcTHS78IBYwU9LDx9q6p2b32Ps7xA12ToiFJclfiOXf7PMb4iNuOiPVAwUfaaSjXHM5zy4RBNLVDKGias6atq%2B%2FrYTBMWSaxf0krFqhPTQu88IWrdMT9e6XOp%2F8578ADU5SGXKAnUJ5SbjpVDinI5kHsUEQ7Eir7zrCESASiwEFgkptFyworJ8Wyfz8pB9El1XA0%2B%2BIjVBSfjR%2B9Wv6YvZzYqgOSh0PTvNbnhrRso5tUc0KQXNBjX4NGg9ggM2B49LLB289b30gTGUUT2JjHwMTckSMOSKkgxY%2FZrvtNn%2BJqkkQdQrZhTzyEAZ%2FeroMF75yYGXa7LuUA7vKb37%2BnVyJn0J3MwPpiy%2FQ%2BsufnPFDssSr3%2FjGcNrAq%2BnBg7eHSIXwCIwpuTHvgY6pgFjGsXdbpIgivnfI3N5GFGOMVKsB02mNURGc7igNHgEl1CUYLxHaPLgnsKNZ6sF9Gi4SI4a4y3EUwpkZDwkXpqgp1pkY%2FDyI2dxgw3tUjdu2A4gijUQ83Esmoc6VmhPE1n3uBZZJ7GYVP061Z4oExRxCepOHhgPWXAeixYWtVZBWSsmPaOepXhv4EBwSRLayH8V2vVhtXoZxifzSTs4H3%2FswhQYqCpd&X-Amz-Signature=2f8f9b8e4d0f4eb7d5a5f4fda70e3126f75432bc44f882cfc3851983d22c1b54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTWGPZ4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIC46b2uiOMTuIsG1EY01fHhHgiSJW%2FWyti8w1kIutp3QAiAS7%2FPKcGLKdRZ0CDROnxusY7jBcAqyTcJKfI4lBmk%2F1SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldnXHUt0mQZ4b122KtwDn45IEG2WYXTKz6BkW4GLq3QsnRAV6btCL4GpMfxXAt49Ygxwj6o0M4BlgE8rERAmEP47MPMdL10NzRvuTdioMYYwxq0EKVUXnRJl3009JIA6cv5fiE%2BdOv5vII0e467EFEPGJyPI9XHEGdN833lfhL28eqYwSQ7tWNkYDVoq8KgLd0bmetLAA4H2kKU0lxl%2BLAd%2F%2B3epiRONuVGb2TQD0vB0Dy8coXF%2F7OqHBP1eQIKwCaRAiOaMUApcTHS78IBYwU9LDx9q6p2b32Ps7xA12ToiFJclfiOXf7PMb4iNuOiPVAwUfaaSjXHM5zy4RBNLVDKGias6atq%2B%2FrYTBMWSaxf0krFqhPTQu88IWrdMT9e6XOp%2F8578ADU5SGXKAnUJ5SbjpVDinI5kHsUEQ7Eir7zrCESASiwEFgkptFyworJ8Wyfz8pB9El1XA0%2B%2BIjVBSfjR%2B9Wv6YvZzYqgOSh0PTvNbnhrRso5tUc0KQXNBjX4NGg9ggM2B49LLB289b30gTGUUT2JjHwMTckSMOSKkgxY%2FZrvtNn%2BJqkkQdQrZhTzyEAZ%2FeroMF75yYGXa7LuUA7vKb37%2BnVyJn0J3MwPpiy%2FQ%2BsufnPFDssSr3%2FjGcNrAq%2BnBg7eHSIXwCIwpuTHvgY6pgFjGsXdbpIgivnfI3N5GFGOMVKsB02mNURGc7igNHgEl1CUYLxHaPLgnsKNZ6sF9Gi4SI4a4y3EUwpkZDwkXpqgp1pkY%2FDyI2dxgw3tUjdu2A4gijUQ83Esmoc6VmhPE1n3uBZZJ7GYVP061Z4oExRxCepOHhgPWXAeixYWtVZBWSsmPaOepXhv4EBwSRLayH8V2vVhtXoZxifzSTs4H3%2FswhQYqCpd&X-Amz-Signature=14c0229b1d0efd8f04b3d91d491297a5e8192be5551d5fc105caa6b644294c29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

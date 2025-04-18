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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWNJ367%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbjgGB9d4yDv0gFAyHbd%2FEgGxlBKBlxKfkgEhFpZUAXAIhANJXG4HugoMGocQPLygWKsxOISJ7oHp9kYDWLx4%2FfBTtKv8DCH8QABoMNjM3NDIzMTgzODA1IgyaT0tk56sY%2Fh62tFMq3APEkwklPggEJuxkar60wyyPLhn2OtNPxWI9T40nIUoCZedcgQkJYdGl3PIkiiLr8LEFWgAcIugFiPBamlcSYXjKLTVGdeUabE01qk6%2Bt4Qh6WbMN0ToRwwlSvB3VhgaJPaQ8AX3KYpczDNJ%2BVtA8V1xdANWCmYSqa%2BG%2B9b0o01IshovirEclUjp1bQKhKI7G4j1u3%2B5%2FXKIG5mpSLZzfXOz3K4S9p6tl8F2sOTMcFt5S5KKA4Pybyj3%2BrAew61DwCeBCczu6HiBOiGUq87cYVBHlTgQ0P5sA%2BFR%2F%2BGBgw9qhDjKGJpL3md1hoRbSB8yx%2FumgbQoKBL1bZGMuqQoboWygiec1s3qU1TA15F%2FUUOWK3pxvBaBVdx6%2Fx4dBgQ9CXdOZoiNMIGYvjRi%2BUxJVZIZ1askNzz0C2AHNo3ruFonxoZowMfx%2B7MGhwURczACFyr7EjV2BkA6%2Fifk6%2BH%2FZH9Kgc2LQGnPwg3SQugeLl5suYX2anu10zbso77pQPVElJzdUY8V63GwRf4fFDdh5huyNHb8LdO4YuX90JR%2FbTGza5WcCLqyNdMDbRunj%2Fuwu6IDWKQidrr5%2F4P0gQc9%2BCTsPuirnm4Fv%2Bcx3Au6KksEIR7lTc62MUvp1ouRNzC8mIvABjqkAeY0xY%2BFIe7hVad%2FjqNHOJwM2VD3wPk%2BxfZZsWOYN3Kdk4nu6iCmRSPdgAR1g2oy9I7tjwk%2BuWNuSbWD4GbWBjrQiR8xSfpjgcLti7lyhfVB3pw5mKVulJRbM4qLBQg%2FQhonqh4F7qj8Nm7tOYC%2F5NvuceQZkaCyexDGvGKVRTsF5LlNc6gBkz1316KZHzrxsc4%2BwAflfCeXIkthYUojfAtXELtL&X-Amz-Signature=eec51f94870175dff11752b0625a1ad1955e8a2ff65da32959e59de0ef05db83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWNJ367%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbjgGB9d4yDv0gFAyHbd%2FEgGxlBKBlxKfkgEhFpZUAXAIhANJXG4HugoMGocQPLygWKsxOISJ7oHp9kYDWLx4%2FfBTtKv8DCH8QABoMNjM3NDIzMTgzODA1IgyaT0tk56sY%2Fh62tFMq3APEkwklPggEJuxkar60wyyPLhn2OtNPxWI9T40nIUoCZedcgQkJYdGl3PIkiiLr8LEFWgAcIugFiPBamlcSYXjKLTVGdeUabE01qk6%2Bt4Qh6WbMN0ToRwwlSvB3VhgaJPaQ8AX3KYpczDNJ%2BVtA8V1xdANWCmYSqa%2BG%2B9b0o01IshovirEclUjp1bQKhKI7G4j1u3%2B5%2FXKIG5mpSLZzfXOz3K4S9p6tl8F2sOTMcFt5S5KKA4Pybyj3%2BrAew61DwCeBCczu6HiBOiGUq87cYVBHlTgQ0P5sA%2BFR%2F%2BGBgw9qhDjKGJpL3md1hoRbSB8yx%2FumgbQoKBL1bZGMuqQoboWygiec1s3qU1TA15F%2FUUOWK3pxvBaBVdx6%2Fx4dBgQ9CXdOZoiNMIGYvjRi%2BUxJVZIZ1askNzz0C2AHNo3ruFonxoZowMfx%2B7MGhwURczACFyr7EjV2BkA6%2Fifk6%2BH%2FZH9Kgc2LQGnPwg3SQugeLl5suYX2anu10zbso77pQPVElJzdUY8V63GwRf4fFDdh5huyNHb8LdO4YuX90JR%2FbTGza5WcCLqyNdMDbRunj%2Fuwu6IDWKQidrr5%2F4P0gQc9%2BCTsPuirnm4Fv%2Bcx3Au6KksEIR7lTc62MUvp1ouRNzC8mIvABjqkAeY0xY%2BFIe7hVad%2FjqNHOJwM2VD3wPk%2BxfZZsWOYN3Kdk4nu6iCmRSPdgAR1g2oy9I7tjwk%2BuWNuSbWD4GbWBjrQiR8xSfpjgcLti7lyhfVB3pw5mKVulJRbM4qLBQg%2FQhonqh4F7qj8Nm7tOYC%2F5NvuceQZkaCyexDGvGKVRTsF5LlNc6gBkz1316KZHzrxsc4%2BwAflfCeXIkthYUojfAtXELtL&X-Amz-Signature=39d43a9c3498047ae1bf406cecde03a7ceb1a4b74bd9580385b326e35ef835e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWNJ367%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbjgGB9d4yDv0gFAyHbd%2FEgGxlBKBlxKfkgEhFpZUAXAIhANJXG4HugoMGocQPLygWKsxOISJ7oHp9kYDWLx4%2FfBTtKv8DCH8QABoMNjM3NDIzMTgzODA1IgyaT0tk56sY%2Fh62tFMq3APEkwklPggEJuxkar60wyyPLhn2OtNPxWI9T40nIUoCZedcgQkJYdGl3PIkiiLr8LEFWgAcIugFiPBamlcSYXjKLTVGdeUabE01qk6%2Bt4Qh6WbMN0ToRwwlSvB3VhgaJPaQ8AX3KYpczDNJ%2BVtA8V1xdANWCmYSqa%2BG%2B9b0o01IshovirEclUjp1bQKhKI7G4j1u3%2B5%2FXKIG5mpSLZzfXOz3K4S9p6tl8F2sOTMcFt5S5KKA4Pybyj3%2BrAew61DwCeBCczu6HiBOiGUq87cYVBHlTgQ0P5sA%2BFR%2F%2BGBgw9qhDjKGJpL3md1hoRbSB8yx%2FumgbQoKBL1bZGMuqQoboWygiec1s3qU1TA15F%2FUUOWK3pxvBaBVdx6%2Fx4dBgQ9CXdOZoiNMIGYvjRi%2BUxJVZIZ1askNzz0C2AHNo3ruFonxoZowMfx%2B7MGhwURczACFyr7EjV2BkA6%2Fifk6%2BH%2FZH9Kgc2LQGnPwg3SQugeLl5suYX2anu10zbso77pQPVElJzdUY8V63GwRf4fFDdh5huyNHb8LdO4YuX90JR%2FbTGza5WcCLqyNdMDbRunj%2Fuwu6IDWKQidrr5%2F4P0gQc9%2BCTsPuirnm4Fv%2Bcx3Au6KksEIR7lTc62MUvp1ouRNzC8mIvABjqkAeY0xY%2BFIe7hVad%2FjqNHOJwM2VD3wPk%2BxfZZsWOYN3Kdk4nu6iCmRSPdgAR1g2oy9I7tjwk%2BuWNuSbWD4GbWBjrQiR8xSfpjgcLti7lyhfVB3pw5mKVulJRbM4qLBQg%2FQhonqh4F7qj8Nm7tOYC%2F5NvuceQZkaCyexDGvGKVRTsF5LlNc6gBkz1316KZHzrxsc4%2BwAflfCeXIkthYUojfAtXELtL&X-Amz-Signature=1b7e9f9da5e83735c0812d4a604ea14a5cf7960665e49a7e915d926f7b55e31c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWNJ367%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbjgGB9d4yDv0gFAyHbd%2FEgGxlBKBlxKfkgEhFpZUAXAIhANJXG4HugoMGocQPLygWKsxOISJ7oHp9kYDWLx4%2FfBTtKv8DCH8QABoMNjM3NDIzMTgzODA1IgyaT0tk56sY%2Fh62tFMq3APEkwklPggEJuxkar60wyyPLhn2OtNPxWI9T40nIUoCZedcgQkJYdGl3PIkiiLr8LEFWgAcIugFiPBamlcSYXjKLTVGdeUabE01qk6%2Bt4Qh6WbMN0ToRwwlSvB3VhgaJPaQ8AX3KYpczDNJ%2BVtA8V1xdANWCmYSqa%2BG%2B9b0o01IshovirEclUjp1bQKhKI7G4j1u3%2B5%2FXKIG5mpSLZzfXOz3K4S9p6tl8F2sOTMcFt5S5KKA4Pybyj3%2BrAew61DwCeBCczu6HiBOiGUq87cYVBHlTgQ0P5sA%2BFR%2F%2BGBgw9qhDjKGJpL3md1hoRbSB8yx%2FumgbQoKBL1bZGMuqQoboWygiec1s3qU1TA15F%2FUUOWK3pxvBaBVdx6%2Fx4dBgQ9CXdOZoiNMIGYvjRi%2BUxJVZIZ1askNzz0C2AHNo3ruFonxoZowMfx%2B7MGhwURczACFyr7EjV2BkA6%2Fifk6%2BH%2FZH9Kgc2LQGnPwg3SQugeLl5suYX2anu10zbso77pQPVElJzdUY8V63GwRf4fFDdh5huyNHb8LdO4YuX90JR%2FbTGza5WcCLqyNdMDbRunj%2Fuwu6IDWKQidrr5%2F4P0gQc9%2BCTsPuirnm4Fv%2Bcx3Au6KksEIR7lTc62MUvp1ouRNzC8mIvABjqkAeY0xY%2BFIe7hVad%2FjqNHOJwM2VD3wPk%2BxfZZsWOYN3Kdk4nu6iCmRSPdgAR1g2oy9I7tjwk%2BuWNuSbWD4GbWBjrQiR8xSfpjgcLti7lyhfVB3pw5mKVulJRbM4qLBQg%2FQhonqh4F7qj8Nm7tOYC%2F5NvuceQZkaCyexDGvGKVRTsF5LlNc6gBkz1316KZHzrxsc4%2BwAflfCeXIkthYUojfAtXELtL&X-Amz-Signature=fbf58199099471941c39d1574bcf13b186b9cb0489920b28bf9d3f7812460403&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWNJ367%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbjgGB9d4yDv0gFAyHbd%2FEgGxlBKBlxKfkgEhFpZUAXAIhANJXG4HugoMGocQPLygWKsxOISJ7oHp9kYDWLx4%2FfBTtKv8DCH8QABoMNjM3NDIzMTgzODA1IgyaT0tk56sY%2Fh62tFMq3APEkwklPggEJuxkar60wyyPLhn2OtNPxWI9T40nIUoCZedcgQkJYdGl3PIkiiLr8LEFWgAcIugFiPBamlcSYXjKLTVGdeUabE01qk6%2Bt4Qh6WbMN0ToRwwlSvB3VhgaJPaQ8AX3KYpczDNJ%2BVtA8V1xdANWCmYSqa%2BG%2B9b0o01IshovirEclUjp1bQKhKI7G4j1u3%2B5%2FXKIG5mpSLZzfXOz3K4S9p6tl8F2sOTMcFt5S5KKA4Pybyj3%2BrAew61DwCeBCczu6HiBOiGUq87cYVBHlTgQ0P5sA%2BFR%2F%2BGBgw9qhDjKGJpL3md1hoRbSB8yx%2FumgbQoKBL1bZGMuqQoboWygiec1s3qU1TA15F%2FUUOWK3pxvBaBVdx6%2Fx4dBgQ9CXdOZoiNMIGYvjRi%2BUxJVZIZ1askNzz0C2AHNo3ruFonxoZowMfx%2B7MGhwURczACFyr7EjV2BkA6%2Fifk6%2BH%2FZH9Kgc2LQGnPwg3SQugeLl5suYX2anu10zbso77pQPVElJzdUY8V63GwRf4fFDdh5huyNHb8LdO4YuX90JR%2FbTGza5WcCLqyNdMDbRunj%2Fuwu6IDWKQidrr5%2F4P0gQc9%2BCTsPuirnm4Fv%2Bcx3Au6KksEIR7lTc62MUvp1ouRNzC8mIvABjqkAeY0xY%2BFIe7hVad%2FjqNHOJwM2VD3wPk%2BxfZZsWOYN3Kdk4nu6iCmRSPdgAR1g2oy9I7tjwk%2BuWNuSbWD4GbWBjrQiR8xSfpjgcLti7lyhfVB3pw5mKVulJRbM4qLBQg%2FQhonqh4F7qj8Nm7tOYC%2F5NvuceQZkaCyexDGvGKVRTsF5LlNc6gBkz1316KZHzrxsc4%2BwAflfCeXIkthYUojfAtXELtL&X-Amz-Signature=c8b5a20c8f7e88f0673600ebda8bb3e8604e29dde1dba9541bf15a23ecb83de4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWNJ367%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbjgGB9d4yDv0gFAyHbd%2FEgGxlBKBlxKfkgEhFpZUAXAIhANJXG4HugoMGocQPLygWKsxOISJ7oHp9kYDWLx4%2FfBTtKv8DCH8QABoMNjM3NDIzMTgzODA1IgyaT0tk56sY%2Fh62tFMq3APEkwklPggEJuxkar60wyyPLhn2OtNPxWI9T40nIUoCZedcgQkJYdGl3PIkiiLr8LEFWgAcIugFiPBamlcSYXjKLTVGdeUabE01qk6%2Bt4Qh6WbMN0ToRwwlSvB3VhgaJPaQ8AX3KYpczDNJ%2BVtA8V1xdANWCmYSqa%2BG%2B9b0o01IshovirEclUjp1bQKhKI7G4j1u3%2B5%2FXKIG5mpSLZzfXOz3K4S9p6tl8F2sOTMcFt5S5KKA4Pybyj3%2BrAew61DwCeBCczu6HiBOiGUq87cYVBHlTgQ0P5sA%2BFR%2F%2BGBgw9qhDjKGJpL3md1hoRbSB8yx%2FumgbQoKBL1bZGMuqQoboWygiec1s3qU1TA15F%2FUUOWK3pxvBaBVdx6%2Fx4dBgQ9CXdOZoiNMIGYvjRi%2BUxJVZIZ1askNzz0C2AHNo3ruFonxoZowMfx%2B7MGhwURczACFyr7EjV2BkA6%2Fifk6%2BH%2FZH9Kgc2LQGnPwg3SQugeLl5suYX2anu10zbso77pQPVElJzdUY8V63GwRf4fFDdh5huyNHb8LdO4YuX90JR%2FbTGza5WcCLqyNdMDbRunj%2Fuwu6IDWKQidrr5%2F4P0gQc9%2BCTsPuirnm4Fv%2Bcx3Au6KksEIR7lTc62MUvp1ouRNzC8mIvABjqkAeY0xY%2BFIe7hVad%2FjqNHOJwM2VD3wPk%2BxfZZsWOYN3Kdk4nu6iCmRSPdgAR1g2oy9I7tjwk%2BuWNuSbWD4GbWBjrQiR8xSfpjgcLti7lyhfVB3pw5mKVulJRbM4qLBQg%2FQhonqh4F7qj8Nm7tOYC%2F5NvuceQZkaCyexDGvGKVRTsF5LlNc6gBkz1316KZHzrxsc4%2BwAflfCeXIkthYUojfAtXELtL&X-Amz-Signature=3d34a70ad2bb1053795c22f5d99514aec185b31a884ed27cf23b5ca54aa7b90d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWNJ367%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbjgGB9d4yDv0gFAyHbd%2FEgGxlBKBlxKfkgEhFpZUAXAIhANJXG4HugoMGocQPLygWKsxOISJ7oHp9kYDWLx4%2FfBTtKv8DCH8QABoMNjM3NDIzMTgzODA1IgyaT0tk56sY%2Fh62tFMq3APEkwklPggEJuxkar60wyyPLhn2OtNPxWI9T40nIUoCZedcgQkJYdGl3PIkiiLr8LEFWgAcIugFiPBamlcSYXjKLTVGdeUabE01qk6%2Bt4Qh6WbMN0ToRwwlSvB3VhgaJPaQ8AX3KYpczDNJ%2BVtA8V1xdANWCmYSqa%2BG%2B9b0o01IshovirEclUjp1bQKhKI7G4j1u3%2B5%2FXKIG5mpSLZzfXOz3K4S9p6tl8F2sOTMcFt5S5KKA4Pybyj3%2BrAew61DwCeBCczu6HiBOiGUq87cYVBHlTgQ0P5sA%2BFR%2F%2BGBgw9qhDjKGJpL3md1hoRbSB8yx%2FumgbQoKBL1bZGMuqQoboWygiec1s3qU1TA15F%2FUUOWK3pxvBaBVdx6%2Fx4dBgQ9CXdOZoiNMIGYvjRi%2BUxJVZIZ1askNzz0C2AHNo3ruFonxoZowMfx%2B7MGhwURczACFyr7EjV2BkA6%2Fifk6%2BH%2FZH9Kgc2LQGnPwg3SQugeLl5suYX2anu10zbso77pQPVElJzdUY8V63GwRf4fFDdh5huyNHb8LdO4YuX90JR%2FbTGza5WcCLqyNdMDbRunj%2Fuwu6IDWKQidrr5%2F4P0gQc9%2BCTsPuirnm4Fv%2Bcx3Au6KksEIR7lTc62MUvp1ouRNzC8mIvABjqkAeY0xY%2BFIe7hVad%2FjqNHOJwM2VD3wPk%2BxfZZsWOYN3Kdk4nu6iCmRSPdgAR1g2oy9I7tjwk%2BuWNuSbWD4GbWBjrQiR8xSfpjgcLti7lyhfVB3pw5mKVulJRbM4qLBQg%2FQhonqh4F7qj8Nm7tOYC%2F5NvuceQZkaCyexDGvGKVRTsF5LlNc6gBkz1316KZHzrxsc4%2BwAflfCeXIkthYUojfAtXELtL&X-Amz-Signature=b68804fc9fed8f7662a6b81e9db1a95a340098e0456030cdadbcc93c79372329&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWNJ367%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbjgGB9d4yDv0gFAyHbd%2FEgGxlBKBlxKfkgEhFpZUAXAIhANJXG4HugoMGocQPLygWKsxOISJ7oHp9kYDWLx4%2FfBTtKv8DCH8QABoMNjM3NDIzMTgzODA1IgyaT0tk56sY%2Fh62tFMq3APEkwklPggEJuxkar60wyyPLhn2OtNPxWI9T40nIUoCZedcgQkJYdGl3PIkiiLr8LEFWgAcIugFiPBamlcSYXjKLTVGdeUabE01qk6%2Bt4Qh6WbMN0ToRwwlSvB3VhgaJPaQ8AX3KYpczDNJ%2BVtA8V1xdANWCmYSqa%2BG%2B9b0o01IshovirEclUjp1bQKhKI7G4j1u3%2B5%2FXKIG5mpSLZzfXOz3K4S9p6tl8F2sOTMcFt5S5KKA4Pybyj3%2BrAew61DwCeBCczu6HiBOiGUq87cYVBHlTgQ0P5sA%2BFR%2F%2BGBgw9qhDjKGJpL3md1hoRbSB8yx%2FumgbQoKBL1bZGMuqQoboWygiec1s3qU1TA15F%2FUUOWK3pxvBaBVdx6%2Fx4dBgQ9CXdOZoiNMIGYvjRi%2BUxJVZIZ1askNzz0C2AHNo3ruFonxoZowMfx%2B7MGhwURczACFyr7EjV2BkA6%2Fifk6%2BH%2FZH9Kgc2LQGnPwg3SQugeLl5suYX2anu10zbso77pQPVElJzdUY8V63GwRf4fFDdh5huyNHb8LdO4YuX90JR%2FbTGza5WcCLqyNdMDbRunj%2Fuwu6IDWKQidrr5%2F4P0gQc9%2BCTsPuirnm4Fv%2Bcx3Au6KksEIR7lTc62MUvp1ouRNzC8mIvABjqkAeY0xY%2BFIe7hVad%2FjqNHOJwM2VD3wPk%2BxfZZsWOYN3Kdk4nu6iCmRSPdgAR1g2oy9I7tjwk%2BuWNuSbWD4GbWBjrQiR8xSfpjgcLti7lyhfVB3pw5mKVulJRbM4qLBQg%2FQhonqh4F7qj8Nm7tOYC%2F5NvuceQZkaCyexDGvGKVRTsF5LlNc6gBkz1316KZHzrxsc4%2BwAflfCeXIkthYUojfAtXELtL&X-Amz-Signature=fef9ab6001fdae8886f240f18af928447d6d4387d0cbacba4f572542ea9ace8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

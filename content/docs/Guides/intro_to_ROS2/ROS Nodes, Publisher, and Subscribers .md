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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6EIAQM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDqpfafCfTwqjJ4CladEgtV6dvo6RiyCqLrVSnOa%2FMaUwIhALmvDnkel71rYZE4GHt0AJVJLDIBfgGAUeiejzdD06EvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVRgChjXDV9vuzIuQq3APJBJSOB2dJiwPO%2FUh5vNyXL3wNRaN4XgL3CyVUExzq8lcHqXJKIH2f9TdKsAdduyCAfMVbUm8GA%2FMyLNKKzXXI1uuTPfMAp4JA5%2B%2BqFBlcZ%2BiSEIUcAS8P6tl3uTEdeTanLCPjpgObOpXx%2FBj0jWLDBw2TzxATlGvg66DmDNXSnTF9Z2Md3wlSuFSz38vPp8me4Gfquoq%2BpUUb4tGMOw7IG5UZoAuSJriBMHQlTJ5t7Q%2FlT3SDehrdkDRmaT6KpJT%2FNPKgzkdSg2pK5%2BFWf3x7Hty5YAuQ8t2BIzp%2BfiFOPKxFX%2BHSabSFEFOmOC9v66cA34KKe%2F7PGkzlBdw%2Fd4t3wlIpCx2pyOMsN9C4E8fJiM5eQ8Q%2FNPRsEQ1YIRddHS9jJVcOr3nM0XCkhRDqTwMy2%2Foo0nqd1df8b8zaMnFXsVvg8cXRGMnGzp4J%2FJEF9Z44ZLK5FiPoXWwGQM%2FExUv0m%2FCj2Kph7kg7ehmIkNYPDla2aen9FjNQ9dEh4bbPq4vBx%2FDPreQ%2BOvPMrediuNf9c0gesXa5In4q5cJ7UHjTi%2BoIpeQ7zJj%2BDYu%2BAr%2FD2BU7K8%2BBe%2FVZiKTmJoZzisSwfmCwKOSBYLSLuBeQWgylr%2BSGf%2F1PdWQRnaPIyzDcmo7ABjqkAUBv908d8sLlhettDuBYonMwf%2BlibriMmicYdAGAGOWBJUbagwT5jzNjt3yUUYyQVr9iXkYfCjqxXywFXTAz4QXsQL5cR0LyxvLaTn855hJqbnYWFkMk3ZdWBJJnyij7v8%2FFhg3GXK%2BrrH40%2BGmVRwWOwvQcLX5hv3vJbCR8aRxQYS36Yk%2FEpL%2FxwKMkjK3e0IMQJ1yW%2FenNKEwPNxSbHOxWxTvS&X-Amz-Signature=83038734f8b4f34cfcaa771dc93dafb4d36f8252460ba7cfe4d7fdfe667ea1cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6EIAQM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDqpfafCfTwqjJ4CladEgtV6dvo6RiyCqLrVSnOa%2FMaUwIhALmvDnkel71rYZE4GHt0AJVJLDIBfgGAUeiejzdD06EvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVRgChjXDV9vuzIuQq3APJBJSOB2dJiwPO%2FUh5vNyXL3wNRaN4XgL3CyVUExzq8lcHqXJKIH2f9TdKsAdduyCAfMVbUm8GA%2FMyLNKKzXXI1uuTPfMAp4JA5%2B%2BqFBlcZ%2BiSEIUcAS8P6tl3uTEdeTanLCPjpgObOpXx%2FBj0jWLDBw2TzxATlGvg66DmDNXSnTF9Z2Md3wlSuFSz38vPp8me4Gfquoq%2BpUUb4tGMOw7IG5UZoAuSJriBMHQlTJ5t7Q%2FlT3SDehrdkDRmaT6KpJT%2FNPKgzkdSg2pK5%2BFWf3x7Hty5YAuQ8t2BIzp%2BfiFOPKxFX%2BHSabSFEFOmOC9v66cA34KKe%2F7PGkzlBdw%2Fd4t3wlIpCx2pyOMsN9C4E8fJiM5eQ8Q%2FNPRsEQ1YIRddHS9jJVcOr3nM0XCkhRDqTwMy2%2Foo0nqd1df8b8zaMnFXsVvg8cXRGMnGzp4J%2FJEF9Z44ZLK5FiPoXWwGQM%2FExUv0m%2FCj2Kph7kg7ehmIkNYPDla2aen9FjNQ9dEh4bbPq4vBx%2FDPreQ%2BOvPMrediuNf9c0gesXa5In4q5cJ7UHjTi%2BoIpeQ7zJj%2BDYu%2BAr%2FD2BU7K8%2BBe%2FVZiKTmJoZzisSwfmCwKOSBYLSLuBeQWgylr%2BSGf%2F1PdWQRnaPIyzDcmo7ABjqkAUBv908d8sLlhettDuBYonMwf%2BlibriMmicYdAGAGOWBJUbagwT5jzNjt3yUUYyQVr9iXkYfCjqxXywFXTAz4QXsQL5cR0LyxvLaTn855hJqbnYWFkMk3ZdWBJJnyij7v8%2FFhg3GXK%2BrrH40%2BGmVRwWOwvQcLX5hv3vJbCR8aRxQYS36Yk%2FEpL%2FxwKMkjK3e0IMQJ1yW%2FenNKEwPNxSbHOxWxTvS&X-Amz-Signature=947795cdb51300881ce090b39ca562ee2349c3b9d6e3a6785f3c3104bff08ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6EIAQM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDqpfafCfTwqjJ4CladEgtV6dvo6RiyCqLrVSnOa%2FMaUwIhALmvDnkel71rYZE4GHt0AJVJLDIBfgGAUeiejzdD06EvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVRgChjXDV9vuzIuQq3APJBJSOB2dJiwPO%2FUh5vNyXL3wNRaN4XgL3CyVUExzq8lcHqXJKIH2f9TdKsAdduyCAfMVbUm8GA%2FMyLNKKzXXI1uuTPfMAp4JA5%2B%2BqFBlcZ%2BiSEIUcAS8P6tl3uTEdeTanLCPjpgObOpXx%2FBj0jWLDBw2TzxATlGvg66DmDNXSnTF9Z2Md3wlSuFSz38vPp8me4Gfquoq%2BpUUb4tGMOw7IG5UZoAuSJriBMHQlTJ5t7Q%2FlT3SDehrdkDRmaT6KpJT%2FNPKgzkdSg2pK5%2BFWf3x7Hty5YAuQ8t2BIzp%2BfiFOPKxFX%2BHSabSFEFOmOC9v66cA34KKe%2F7PGkzlBdw%2Fd4t3wlIpCx2pyOMsN9C4E8fJiM5eQ8Q%2FNPRsEQ1YIRddHS9jJVcOr3nM0XCkhRDqTwMy2%2Foo0nqd1df8b8zaMnFXsVvg8cXRGMnGzp4J%2FJEF9Z44ZLK5FiPoXWwGQM%2FExUv0m%2FCj2Kph7kg7ehmIkNYPDla2aen9FjNQ9dEh4bbPq4vBx%2FDPreQ%2BOvPMrediuNf9c0gesXa5In4q5cJ7UHjTi%2BoIpeQ7zJj%2BDYu%2BAr%2FD2BU7K8%2BBe%2FVZiKTmJoZzisSwfmCwKOSBYLSLuBeQWgylr%2BSGf%2F1PdWQRnaPIyzDcmo7ABjqkAUBv908d8sLlhettDuBYonMwf%2BlibriMmicYdAGAGOWBJUbagwT5jzNjt3yUUYyQVr9iXkYfCjqxXywFXTAz4QXsQL5cR0LyxvLaTn855hJqbnYWFkMk3ZdWBJJnyij7v8%2FFhg3GXK%2BrrH40%2BGmVRwWOwvQcLX5hv3vJbCR8aRxQYS36Yk%2FEpL%2FxwKMkjK3e0IMQJ1yW%2FenNKEwPNxSbHOxWxTvS&X-Amz-Signature=61a577787823eb09abc5c86c924c2afa50145312a690e971b15b4e62fc8f753f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6EIAQM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDqpfafCfTwqjJ4CladEgtV6dvo6RiyCqLrVSnOa%2FMaUwIhALmvDnkel71rYZE4GHt0AJVJLDIBfgGAUeiejzdD06EvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVRgChjXDV9vuzIuQq3APJBJSOB2dJiwPO%2FUh5vNyXL3wNRaN4XgL3CyVUExzq8lcHqXJKIH2f9TdKsAdduyCAfMVbUm8GA%2FMyLNKKzXXI1uuTPfMAp4JA5%2B%2BqFBlcZ%2BiSEIUcAS8P6tl3uTEdeTanLCPjpgObOpXx%2FBj0jWLDBw2TzxATlGvg66DmDNXSnTF9Z2Md3wlSuFSz38vPp8me4Gfquoq%2BpUUb4tGMOw7IG5UZoAuSJriBMHQlTJ5t7Q%2FlT3SDehrdkDRmaT6KpJT%2FNPKgzkdSg2pK5%2BFWf3x7Hty5YAuQ8t2BIzp%2BfiFOPKxFX%2BHSabSFEFOmOC9v66cA34KKe%2F7PGkzlBdw%2Fd4t3wlIpCx2pyOMsN9C4E8fJiM5eQ8Q%2FNPRsEQ1YIRddHS9jJVcOr3nM0XCkhRDqTwMy2%2Foo0nqd1df8b8zaMnFXsVvg8cXRGMnGzp4J%2FJEF9Z44ZLK5FiPoXWwGQM%2FExUv0m%2FCj2Kph7kg7ehmIkNYPDla2aen9FjNQ9dEh4bbPq4vBx%2FDPreQ%2BOvPMrediuNf9c0gesXa5In4q5cJ7UHjTi%2BoIpeQ7zJj%2BDYu%2BAr%2FD2BU7K8%2BBe%2FVZiKTmJoZzisSwfmCwKOSBYLSLuBeQWgylr%2BSGf%2F1PdWQRnaPIyzDcmo7ABjqkAUBv908d8sLlhettDuBYonMwf%2BlibriMmicYdAGAGOWBJUbagwT5jzNjt3yUUYyQVr9iXkYfCjqxXywFXTAz4QXsQL5cR0LyxvLaTn855hJqbnYWFkMk3ZdWBJJnyij7v8%2FFhg3GXK%2BrrH40%2BGmVRwWOwvQcLX5hv3vJbCR8aRxQYS36Yk%2FEpL%2FxwKMkjK3e0IMQJ1yW%2FenNKEwPNxSbHOxWxTvS&X-Amz-Signature=fd12d619f96e606f9e2aa367a853bebf132d62d3c35cea4992b0d06e32df4171&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6EIAQM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDqpfafCfTwqjJ4CladEgtV6dvo6RiyCqLrVSnOa%2FMaUwIhALmvDnkel71rYZE4GHt0AJVJLDIBfgGAUeiejzdD06EvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVRgChjXDV9vuzIuQq3APJBJSOB2dJiwPO%2FUh5vNyXL3wNRaN4XgL3CyVUExzq8lcHqXJKIH2f9TdKsAdduyCAfMVbUm8GA%2FMyLNKKzXXI1uuTPfMAp4JA5%2B%2BqFBlcZ%2BiSEIUcAS8P6tl3uTEdeTanLCPjpgObOpXx%2FBj0jWLDBw2TzxATlGvg66DmDNXSnTF9Z2Md3wlSuFSz38vPp8me4Gfquoq%2BpUUb4tGMOw7IG5UZoAuSJriBMHQlTJ5t7Q%2FlT3SDehrdkDRmaT6KpJT%2FNPKgzkdSg2pK5%2BFWf3x7Hty5YAuQ8t2BIzp%2BfiFOPKxFX%2BHSabSFEFOmOC9v66cA34KKe%2F7PGkzlBdw%2Fd4t3wlIpCx2pyOMsN9C4E8fJiM5eQ8Q%2FNPRsEQ1YIRddHS9jJVcOr3nM0XCkhRDqTwMy2%2Foo0nqd1df8b8zaMnFXsVvg8cXRGMnGzp4J%2FJEF9Z44ZLK5FiPoXWwGQM%2FExUv0m%2FCj2Kph7kg7ehmIkNYPDla2aen9FjNQ9dEh4bbPq4vBx%2FDPreQ%2BOvPMrediuNf9c0gesXa5In4q5cJ7UHjTi%2BoIpeQ7zJj%2BDYu%2BAr%2FD2BU7K8%2BBe%2FVZiKTmJoZzisSwfmCwKOSBYLSLuBeQWgylr%2BSGf%2F1PdWQRnaPIyzDcmo7ABjqkAUBv908d8sLlhettDuBYonMwf%2BlibriMmicYdAGAGOWBJUbagwT5jzNjt3yUUYyQVr9iXkYfCjqxXywFXTAz4QXsQL5cR0LyxvLaTn855hJqbnYWFkMk3ZdWBJJnyij7v8%2FFhg3GXK%2BrrH40%2BGmVRwWOwvQcLX5hv3vJbCR8aRxQYS36Yk%2FEpL%2FxwKMkjK3e0IMQJ1yW%2FenNKEwPNxSbHOxWxTvS&X-Amz-Signature=48a15974ab68982b5c778b56a23ad7dc64a7426b9b7c69aa8b33c813667a8680&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6EIAQM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDqpfafCfTwqjJ4CladEgtV6dvo6RiyCqLrVSnOa%2FMaUwIhALmvDnkel71rYZE4GHt0AJVJLDIBfgGAUeiejzdD06EvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVRgChjXDV9vuzIuQq3APJBJSOB2dJiwPO%2FUh5vNyXL3wNRaN4XgL3CyVUExzq8lcHqXJKIH2f9TdKsAdduyCAfMVbUm8GA%2FMyLNKKzXXI1uuTPfMAp4JA5%2B%2BqFBlcZ%2BiSEIUcAS8P6tl3uTEdeTanLCPjpgObOpXx%2FBj0jWLDBw2TzxATlGvg66DmDNXSnTF9Z2Md3wlSuFSz38vPp8me4Gfquoq%2BpUUb4tGMOw7IG5UZoAuSJriBMHQlTJ5t7Q%2FlT3SDehrdkDRmaT6KpJT%2FNPKgzkdSg2pK5%2BFWf3x7Hty5YAuQ8t2BIzp%2BfiFOPKxFX%2BHSabSFEFOmOC9v66cA34KKe%2F7PGkzlBdw%2Fd4t3wlIpCx2pyOMsN9C4E8fJiM5eQ8Q%2FNPRsEQ1YIRddHS9jJVcOr3nM0XCkhRDqTwMy2%2Foo0nqd1df8b8zaMnFXsVvg8cXRGMnGzp4J%2FJEF9Z44ZLK5FiPoXWwGQM%2FExUv0m%2FCj2Kph7kg7ehmIkNYPDla2aen9FjNQ9dEh4bbPq4vBx%2FDPreQ%2BOvPMrediuNf9c0gesXa5In4q5cJ7UHjTi%2BoIpeQ7zJj%2BDYu%2BAr%2FD2BU7K8%2BBe%2FVZiKTmJoZzisSwfmCwKOSBYLSLuBeQWgylr%2BSGf%2F1PdWQRnaPIyzDcmo7ABjqkAUBv908d8sLlhettDuBYonMwf%2BlibriMmicYdAGAGOWBJUbagwT5jzNjt3yUUYyQVr9iXkYfCjqxXywFXTAz4QXsQL5cR0LyxvLaTn855hJqbnYWFkMk3ZdWBJJnyij7v8%2FFhg3GXK%2BrrH40%2BGmVRwWOwvQcLX5hv3vJbCR8aRxQYS36Yk%2FEpL%2FxwKMkjK3e0IMQJ1yW%2FenNKEwPNxSbHOxWxTvS&X-Amz-Signature=e50ca79516f511a8c54d2b6c55a494002d5404e37b99f7c81eb14bcf069f6300&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6EIAQM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDqpfafCfTwqjJ4CladEgtV6dvo6RiyCqLrVSnOa%2FMaUwIhALmvDnkel71rYZE4GHt0AJVJLDIBfgGAUeiejzdD06EvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVRgChjXDV9vuzIuQq3APJBJSOB2dJiwPO%2FUh5vNyXL3wNRaN4XgL3CyVUExzq8lcHqXJKIH2f9TdKsAdduyCAfMVbUm8GA%2FMyLNKKzXXI1uuTPfMAp4JA5%2B%2BqFBlcZ%2BiSEIUcAS8P6tl3uTEdeTanLCPjpgObOpXx%2FBj0jWLDBw2TzxATlGvg66DmDNXSnTF9Z2Md3wlSuFSz38vPp8me4Gfquoq%2BpUUb4tGMOw7IG5UZoAuSJriBMHQlTJ5t7Q%2FlT3SDehrdkDRmaT6KpJT%2FNPKgzkdSg2pK5%2BFWf3x7Hty5YAuQ8t2BIzp%2BfiFOPKxFX%2BHSabSFEFOmOC9v66cA34KKe%2F7PGkzlBdw%2Fd4t3wlIpCx2pyOMsN9C4E8fJiM5eQ8Q%2FNPRsEQ1YIRddHS9jJVcOr3nM0XCkhRDqTwMy2%2Foo0nqd1df8b8zaMnFXsVvg8cXRGMnGzp4J%2FJEF9Z44ZLK5FiPoXWwGQM%2FExUv0m%2FCj2Kph7kg7ehmIkNYPDla2aen9FjNQ9dEh4bbPq4vBx%2FDPreQ%2BOvPMrediuNf9c0gesXa5In4q5cJ7UHjTi%2BoIpeQ7zJj%2BDYu%2BAr%2FD2BU7K8%2BBe%2FVZiKTmJoZzisSwfmCwKOSBYLSLuBeQWgylr%2BSGf%2F1PdWQRnaPIyzDcmo7ABjqkAUBv908d8sLlhettDuBYonMwf%2BlibriMmicYdAGAGOWBJUbagwT5jzNjt3yUUYyQVr9iXkYfCjqxXywFXTAz4QXsQL5cR0LyxvLaTn855hJqbnYWFkMk3ZdWBJJnyij7v8%2FFhg3GXK%2BrrH40%2BGmVRwWOwvQcLX5hv3vJbCR8aRxQYS36Yk%2FEpL%2FxwKMkjK3e0IMQJ1yW%2FenNKEwPNxSbHOxWxTvS&X-Amz-Signature=70f35fabbb81863574a52b7fd75a2093ae546e98dcbf92a07bf37db8cdb5eaff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR6EIAQM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDqpfafCfTwqjJ4CladEgtV6dvo6RiyCqLrVSnOa%2FMaUwIhALmvDnkel71rYZE4GHt0AJVJLDIBfgGAUeiejzdD06EvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVRgChjXDV9vuzIuQq3APJBJSOB2dJiwPO%2FUh5vNyXL3wNRaN4XgL3CyVUExzq8lcHqXJKIH2f9TdKsAdduyCAfMVbUm8GA%2FMyLNKKzXXI1uuTPfMAp4JA5%2B%2BqFBlcZ%2BiSEIUcAS8P6tl3uTEdeTanLCPjpgObOpXx%2FBj0jWLDBw2TzxATlGvg66DmDNXSnTF9Z2Md3wlSuFSz38vPp8me4Gfquoq%2BpUUb4tGMOw7IG5UZoAuSJriBMHQlTJ5t7Q%2FlT3SDehrdkDRmaT6KpJT%2FNPKgzkdSg2pK5%2BFWf3x7Hty5YAuQ8t2BIzp%2BfiFOPKxFX%2BHSabSFEFOmOC9v66cA34KKe%2F7PGkzlBdw%2Fd4t3wlIpCx2pyOMsN9C4E8fJiM5eQ8Q%2FNPRsEQ1YIRddHS9jJVcOr3nM0XCkhRDqTwMy2%2Foo0nqd1df8b8zaMnFXsVvg8cXRGMnGzp4J%2FJEF9Z44ZLK5FiPoXWwGQM%2FExUv0m%2FCj2Kph7kg7ehmIkNYPDla2aen9FjNQ9dEh4bbPq4vBx%2FDPreQ%2BOvPMrediuNf9c0gesXa5In4q5cJ7UHjTi%2BoIpeQ7zJj%2BDYu%2BAr%2FD2BU7K8%2BBe%2FVZiKTmJoZzisSwfmCwKOSBYLSLuBeQWgylr%2BSGf%2F1PdWQRnaPIyzDcmo7ABjqkAUBv908d8sLlhettDuBYonMwf%2BlibriMmicYdAGAGOWBJUbagwT5jzNjt3yUUYyQVr9iXkYfCjqxXywFXTAz4QXsQL5cR0LyxvLaTn855hJqbnYWFkMk3ZdWBJJnyij7v8%2FFhg3GXK%2BrrH40%2BGmVRwWOwvQcLX5hv3vJbCR8aRxQYS36Yk%2FEpL%2FxwKMkjK3e0IMQJ1yW%2FenNKEwPNxSbHOxWxTvS&X-Amz-Signature=a1c30d55698b76898952dc1edb297d6205d5384146d6000256b82f43982df2c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYR23RO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcrHNxlO6bAsidVkN5jhzmS0qd486HnAxXtfk3Yy8jAIhAJ%2FyooMSS0%2Fa4ItChxgl0dxVJU5aLKXgbuF1R4dB9olLKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HViN3mLzhMg6te4q3AOfV3fT24mGVbZDGr7mb9iNlAlS13UeMC0CQzzzODT9PIGrbM5t74eYDRkrWLlnFC9LxVfYvNfQKsISVhCB%2BHMXIxyc5oOOS7Ts7MDO%2BHF4yHSviJYbQExS4yreUn7zLEAG06RPTa7cs%2FyF5J8LvTC6f%2Brl6ejR4smCGHuKTIwSmmkNDjbemjZNboVjyHS1SkF0Mj9aRedsJ%2F8KN5X9P1NOs9ExebDFmLJ3eOcOCtjuV%2BFt4QJPF7g2tg5zI%2BJRHdT3GFuYrUGNzZ7VFl4iRDvdHXwIhKdcwI4jEgioKjeroog5p3zWq1B9P3WIdlKEsCIk9i7r1XFsD23J%2FHEQmV4qYd63Hi60ng4cg30s4P%2FMYUziHxlZgtNbdI2t8sKxyOHTNqOvmOieLQcVHKLtHulyosANw1CEJoVaWhx68NO9DpOv1y3IiDi0oSRiIVmTGh84LkqJvCK1UrA8XmAB4Bo5ZzdISKVyqU0J11X%2BtVAzoBXdiqROmfEc64PS9bVWNjDX21A5%2FTRl8jLeHaYRdCGFPRo66R6t1%2BvL1qhhsQPTwI9y8wiBrrl5C3%2FIkru1R5hOoJlgxovdCvWdKZtPCYU1cmL%2FFuN%2FwfyWyDN3HQRGwp1j2p33ynVESyEuzTDxoufEBjqkAfWFMZ5S%2BWVPJsEoQHv1T4dzRgMDdfbXvGH7oukPPgpqHNyiagGUCKQbVQq9zNzaUv83xPHjG79i%2BNqGE3xhjG4K6UkkNe9jIf1I%2BDGCIBKTb9se9%2FDf2YKUB9TUCGe%2FA%2FfJZPkeJbdjsFewKrbzVWbrv%2F3Djv374p6jyNtu16f74%2FmGGgSiBbJ1zY0ot0MHMccg2QIw%2BI%2F%2FSAiZhYyF2aGuVIbD&X-Amz-Signature=0598c6204279e2ad9d14834622c91421dc653d2a0f837581989c985187db5345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYR23RO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcrHNxlO6bAsidVkN5jhzmS0qd486HnAxXtfk3Yy8jAIhAJ%2FyooMSS0%2Fa4ItChxgl0dxVJU5aLKXgbuF1R4dB9olLKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HViN3mLzhMg6te4q3AOfV3fT24mGVbZDGr7mb9iNlAlS13UeMC0CQzzzODT9PIGrbM5t74eYDRkrWLlnFC9LxVfYvNfQKsISVhCB%2BHMXIxyc5oOOS7Ts7MDO%2BHF4yHSviJYbQExS4yreUn7zLEAG06RPTa7cs%2FyF5J8LvTC6f%2Brl6ejR4smCGHuKTIwSmmkNDjbemjZNboVjyHS1SkF0Mj9aRedsJ%2F8KN5X9P1NOs9ExebDFmLJ3eOcOCtjuV%2BFt4QJPF7g2tg5zI%2BJRHdT3GFuYrUGNzZ7VFl4iRDvdHXwIhKdcwI4jEgioKjeroog5p3zWq1B9P3WIdlKEsCIk9i7r1XFsD23J%2FHEQmV4qYd63Hi60ng4cg30s4P%2FMYUziHxlZgtNbdI2t8sKxyOHTNqOvmOieLQcVHKLtHulyosANw1CEJoVaWhx68NO9DpOv1y3IiDi0oSRiIVmTGh84LkqJvCK1UrA8XmAB4Bo5ZzdISKVyqU0J11X%2BtVAzoBXdiqROmfEc64PS9bVWNjDX21A5%2FTRl8jLeHaYRdCGFPRo66R6t1%2BvL1qhhsQPTwI9y8wiBrrl5C3%2FIkru1R5hOoJlgxovdCvWdKZtPCYU1cmL%2FFuN%2FwfyWyDN3HQRGwp1j2p33ynVESyEuzTDxoufEBjqkAfWFMZ5S%2BWVPJsEoQHv1T4dzRgMDdfbXvGH7oukPPgpqHNyiagGUCKQbVQq9zNzaUv83xPHjG79i%2BNqGE3xhjG4K6UkkNe9jIf1I%2BDGCIBKTb9se9%2FDf2YKUB9TUCGe%2FA%2FfJZPkeJbdjsFewKrbzVWbrv%2F3Djv374p6jyNtu16f74%2FmGGgSiBbJ1zY0ot0MHMccg2QIw%2BI%2F%2FSAiZhYyF2aGuVIbD&X-Amz-Signature=34ab53a3302cf9b742336e4e1924b7e6e507a40739a1d7d40e08e37122442f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYR23RO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcrHNxlO6bAsidVkN5jhzmS0qd486HnAxXtfk3Yy8jAIhAJ%2FyooMSS0%2Fa4ItChxgl0dxVJU5aLKXgbuF1R4dB9olLKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HViN3mLzhMg6te4q3AOfV3fT24mGVbZDGr7mb9iNlAlS13UeMC0CQzzzODT9PIGrbM5t74eYDRkrWLlnFC9LxVfYvNfQKsISVhCB%2BHMXIxyc5oOOS7Ts7MDO%2BHF4yHSviJYbQExS4yreUn7zLEAG06RPTa7cs%2FyF5J8LvTC6f%2Brl6ejR4smCGHuKTIwSmmkNDjbemjZNboVjyHS1SkF0Mj9aRedsJ%2F8KN5X9P1NOs9ExebDFmLJ3eOcOCtjuV%2BFt4QJPF7g2tg5zI%2BJRHdT3GFuYrUGNzZ7VFl4iRDvdHXwIhKdcwI4jEgioKjeroog5p3zWq1B9P3WIdlKEsCIk9i7r1XFsD23J%2FHEQmV4qYd63Hi60ng4cg30s4P%2FMYUziHxlZgtNbdI2t8sKxyOHTNqOvmOieLQcVHKLtHulyosANw1CEJoVaWhx68NO9DpOv1y3IiDi0oSRiIVmTGh84LkqJvCK1UrA8XmAB4Bo5ZzdISKVyqU0J11X%2BtVAzoBXdiqROmfEc64PS9bVWNjDX21A5%2FTRl8jLeHaYRdCGFPRo66R6t1%2BvL1qhhsQPTwI9y8wiBrrl5C3%2FIkru1R5hOoJlgxovdCvWdKZtPCYU1cmL%2FFuN%2FwfyWyDN3HQRGwp1j2p33ynVESyEuzTDxoufEBjqkAfWFMZ5S%2BWVPJsEoQHv1T4dzRgMDdfbXvGH7oukPPgpqHNyiagGUCKQbVQq9zNzaUv83xPHjG79i%2BNqGE3xhjG4K6UkkNe9jIf1I%2BDGCIBKTb9se9%2FDf2YKUB9TUCGe%2FA%2FfJZPkeJbdjsFewKrbzVWbrv%2F3Djv374p6jyNtu16f74%2FmGGgSiBbJ1zY0ot0MHMccg2QIw%2BI%2F%2FSAiZhYyF2aGuVIbD&X-Amz-Signature=46e6fb6e8c38b619b41381113c99594b62e2f82187bac45de1e3966f81424948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYR23RO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcrHNxlO6bAsidVkN5jhzmS0qd486HnAxXtfk3Yy8jAIhAJ%2FyooMSS0%2Fa4ItChxgl0dxVJU5aLKXgbuF1R4dB9olLKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HViN3mLzhMg6te4q3AOfV3fT24mGVbZDGr7mb9iNlAlS13UeMC0CQzzzODT9PIGrbM5t74eYDRkrWLlnFC9LxVfYvNfQKsISVhCB%2BHMXIxyc5oOOS7Ts7MDO%2BHF4yHSviJYbQExS4yreUn7zLEAG06RPTa7cs%2FyF5J8LvTC6f%2Brl6ejR4smCGHuKTIwSmmkNDjbemjZNboVjyHS1SkF0Mj9aRedsJ%2F8KN5X9P1NOs9ExebDFmLJ3eOcOCtjuV%2BFt4QJPF7g2tg5zI%2BJRHdT3GFuYrUGNzZ7VFl4iRDvdHXwIhKdcwI4jEgioKjeroog5p3zWq1B9P3WIdlKEsCIk9i7r1XFsD23J%2FHEQmV4qYd63Hi60ng4cg30s4P%2FMYUziHxlZgtNbdI2t8sKxyOHTNqOvmOieLQcVHKLtHulyosANw1CEJoVaWhx68NO9DpOv1y3IiDi0oSRiIVmTGh84LkqJvCK1UrA8XmAB4Bo5ZzdISKVyqU0J11X%2BtVAzoBXdiqROmfEc64PS9bVWNjDX21A5%2FTRl8jLeHaYRdCGFPRo66R6t1%2BvL1qhhsQPTwI9y8wiBrrl5C3%2FIkru1R5hOoJlgxovdCvWdKZtPCYU1cmL%2FFuN%2FwfyWyDN3HQRGwp1j2p33ynVESyEuzTDxoufEBjqkAfWFMZ5S%2BWVPJsEoQHv1T4dzRgMDdfbXvGH7oukPPgpqHNyiagGUCKQbVQq9zNzaUv83xPHjG79i%2BNqGE3xhjG4K6UkkNe9jIf1I%2BDGCIBKTb9se9%2FDf2YKUB9TUCGe%2FA%2FfJZPkeJbdjsFewKrbzVWbrv%2F3Djv374p6jyNtu16f74%2FmGGgSiBbJ1zY0ot0MHMccg2QIw%2BI%2F%2FSAiZhYyF2aGuVIbD&X-Amz-Signature=113594194d6d6ade360f7c90d3aaa698333e4d0171cf230653a7ad6a66225433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYR23RO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcrHNxlO6bAsidVkN5jhzmS0qd486HnAxXtfk3Yy8jAIhAJ%2FyooMSS0%2Fa4ItChxgl0dxVJU5aLKXgbuF1R4dB9olLKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HViN3mLzhMg6te4q3AOfV3fT24mGVbZDGr7mb9iNlAlS13UeMC0CQzzzODT9PIGrbM5t74eYDRkrWLlnFC9LxVfYvNfQKsISVhCB%2BHMXIxyc5oOOS7Ts7MDO%2BHF4yHSviJYbQExS4yreUn7zLEAG06RPTa7cs%2FyF5J8LvTC6f%2Brl6ejR4smCGHuKTIwSmmkNDjbemjZNboVjyHS1SkF0Mj9aRedsJ%2F8KN5X9P1NOs9ExebDFmLJ3eOcOCtjuV%2BFt4QJPF7g2tg5zI%2BJRHdT3GFuYrUGNzZ7VFl4iRDvdHXwIhKdcwI4jEgioKjeroog5p3zWq1B9P3WIdlKEsCIk9i7r1XFsD23J%2FHEQmV4qYd63Hi60ng4cg30s4P%2FMYUziHxlZgtNbdI2t8sKxyOHTNqOvmOieLQcVHKLtHulyosANw1CEJoVaWhx68NO9DpOv1y3IiDi0oSRiIVmTGh84LkqJvCK1UrA8XmAB4Bo5ZzdISKVyqU0J11X%2BtVAzoBXdiqROmfEc64PS9bVWNjDX21A5%2FTRl8jLeHaYRdCGFPRo66R6t1%2BvL1qhhsQPTwI9y8wiBrrl5C3%2FIkru1R5hOoJlgxovdCvWdKZtPCYU1cmL%2FFuN%2FwfyWyDN3HQRGwp1j2p33ynVESyEuzTDxoufEBjqkAfWFMZ5S%2BWVPJsEoQHv1T4dzRgMDdfbXvGH7oukPPgpqHNyiagGUCKQbVQq9zNzaUv83xPHjG79i%2BNqGE3xhjG4K6UkkNe9jIf1I%2BDGCIBKTb9se9%2FDf2YKUB9TUCGe%2FA%2FfJZPkeJbdjsFewKrbzVWbrv%2F3Djv374p6jyNtu16f74%2FmGGgSiBbJ1zY0ot0MHMccg2QIw%2BI%2F%2FSAiZhYyF2aGuVIbD&X-Amz-Signature=11f848feaade500d901c501dacb5bf13dbef21843bd156c9a2a6fbfdd2115eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYR23RO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcrHNxlO6bAsidVkN5jhzmS0qd486HnAxXtfk3Yy8jAIhAJ%2FyooMSS0%2Fa4ItChxgl0dxVJU5aLKXgbuF1R4dB9olLKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HViN3mLzhMg6te4q3AOfV3fT24mGVbZDGr7mb9iNlAlS13UeMC0CQzzzODT9PIGrbM5t74eYDRkrWLlnFC9LxVfYvNfQKsISVhCB%2BHMXIxyc5oOOS7Ts7MDO%2BHF4yHSviJYbQExS4yreUn7zLEAG06RPTa7cs%2FyF5J8LvTC6f%2Brl6ejR4smCGHuKTIwSmmkNDjbemjZNboVjyHS1SkF0Mj9aRedsJ%2F8KN5X9P1NOs9ExebDFmLJ3eOcOCtjuV%2BFt4QJPF7g2tg5zI%2BJRHdT3GFuYrUGNzZ7VFl4iRDvdHXwIhKdcwI4jEgioKjeroog5p3zWq1B9P3WIdlKEsCIk9i7r1XFsD23J%2FHEQmV4qYd63Hi60ng4cg30s4P%2FMYUziHxlZgtNbdI2t8sKxyOHTNqOvmOieLQcVHKLtHulyosANw1CEJoVaWhx68NO9DpOv1y3IiDi0oSRiIVmTGh84LkqJvCK1UrA8XmAB4Bo5ZzdISKVyqU0J11X%2BtVAzoBXdiqROmfEc64PS9bVWNjDX21A5%2FTRl8jLeHaYRdCGFPRo66R6t1%2BvL1qhhsQPTwI9y8wiBrrl5C3%2FIkru1R5hOoJlgxovdCvWdKZtPCYU1cmL%2FFuN%2FwfyWyDN3HQRGwp1j2p33ynVESyEuzTDxoufEBjqkAfWFMZ5S%2BWVPJsEoQHv1T4dzRgMDdfbXvGH7oukPPgpqHNyiagGUCKQbVQq9zNzaUv83xPHjG79i%2BNqGE3xhjG4K6UkkNe9jIf1I%2BDGCIBKTb9se9%2FDf2YKUB9TUCGe%2FA%2FfJZPkeJbdjsFewKrbzVWbrv%2F3Djv374p6jyNtu16f74%2FmGGgSiBbJ1zY0ot0MHMccg2QIw%2BI%2F%2FSAiZhYyF2aGuVIbD&X-Amz-Signature=1837ba2fec8458f3766b7c6ce32cfbf3d3e730b271d7ed8ffaefe64f1fc393f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYR23RO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcrHNxlO6bAsidVkN5jhzmS0qd486HnAxXtfk3Yy8jAIhAJ%2FyooMSS0%2Fa4ItChxgl0dxVJU5aLKXgbuF1R4dB9olLKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HViN3mLzhMg6te4q3AOfV3fT24mGVbZDGr7mb9iNlAlS13UeMC0CQzzzODT9PIGrbM5t74eYDRkrWLlnFC9LxVfYvNfQKsISVhCB%2BHMXIxyc5oOOS7Ts7MDO%2BHF4yHSviJYbQExS4yreUn7zLEAG06RPTa7cs%2FyF5J8LvTC6f%2Brl6ejR4smCGHuKTIwSmmkNDjbemjZNboVjyHS1SkF0Mj9aRedsJ%2F8KN5X9P1NOs9ExebDFmLJ3eOcOCtjuV%2BFt4QJPF7g2tg5zI%2BJRHdT3GFuYrUGNzZ7VFl4iRDvdHXwIhKdcwI4jEgioKjeroog5p3zWq1B9P3WIdlKEsCIk9i7r1XFsD23J%2FHEQmV4qYd63Hi60ng4cg30s4P%2FMYUziHxlZgtNbdI2t8sKxyOHTNqOvmOieLQcVHKLtHulyosANw1CEJoVaWhx68NO9DpOv1y3IiDi0oSRiIVmTGh84LkqJvCK1UrA8XmAB4Bo5ZzdISKVyqU0J11X%2BtVAzoBXdiqROmfEc64PS9bVWNjDX21A5%2FTRl8jLeHaYRdCGFPRo66R6t1%2BvL1qhhsQPTwI9y8wiBrrl5C3%2FIkru1R5hOoJlgxovdCvWdKZtPCYU1cmL%2FFuN%2FwfyWyDN3HQRGwp1j2p33ynVESyEuzTDxoufEBjqkAfWFMZ5S%2BWVPJsEoQHv1T4dzRgMDdfbXvGH7oukPPgpqHNyiagGUCKQbVQq9zNzaUv83xPHjG79i%2BNqGE3xhjG4K6UkkNe9jIf1I%2BDGCIBKTb9se9%2FDf2YKUB9TUCGe%2FA%2FfJZPkeJbdjsFewKrbzVWbrv%2F3Djv374p6jyNtu16f74%2FmGGgSiBbJ1zY0ot0MHMccg2QIw%2BI%2F%2FSAiZhYyF2aGuVIbD&X-Amz-Signature=045aa58abff5718b5788a68cacc484f4a1a098d55a755641fcaecc8ed2e94f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYR23RO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcrHNxlO6bAsidVkN5jhzmS0qd486HnAxXtfk3Yy8jAIhAJ%2FyooMSS0%2Fa4ItChxgl0dxVJU5aLKXgbuF1R4dB9olLKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HViN3mLzhMg6te4q3AOfV3fT24mGVbZDGr7mb9iNlAlS13UeMC0CQzzzODT9PIGrbM5t74eYDRkrWLlnFC9LxVfYvNfQKsISVhCB%2BHMXIxyc5oOOS7Ts7MDO%2BHF4yHSviJYbQExS4yreUn7zLEAG06RPTa7cs%2FyF5J8LvTC6f%2Brl6ejR4smCGHuKTIwSmmkNDjbemjZNboVjyHS1SkF0Mj9aRedsJ%2F8KN5X9P1NOs9ExebDFmLJ3eOcOCtjuV%2BFt4QJPF7g2tg5zI%2BJRHdT3GFuYrUGNzZ7VFl4iRDvdHXwIhKdcwI4jEgioKjeroog5p3zWq1B9P3WIdlKEsCIk9i7r1XFsD23J%2FHEQmV4qYd63Hi60ng4cg30s4P%2FMYUziHxlZgtNbdI2t8sKxyOHTNqOvmOieLQcVHKLtHulyosANw1CEJoVaWhx68NO9DpOv1y3IiDi0oSRiIVmTGh84LkqJvCK1UrA8XmAB4Bo5ZzdISKVyqU0J11X%2BtVAzoBXdiqROmfEc64PS9bVWNjDX21A5%2FTRl8jLeHaYRdCGFPRo66R6t1%2BvL1qhhsQPTwI9y8wiBrrl5C3%2FIkru1R5hOoJlgxovdCvWdKZtPCYU1cmL%2FFuN%2FwfyWyDN3HQRGwp1j2p33ynVESyEuzTDxoufEBjqkAfWFMZ5S%2BWVPJsEoQHv1T4dzRgMDdfbXvGH7oukPPgpqHNyiagGUCKQbVQq9zNzaUv83xPHjG79i%2BNqGE3xhjG4K6UkkNe9jIf1I%2BDGCIBKTb9se9%2FDf2YKUB9TUCGe%2FA%2FfJZPkeJbdjsFewKrbzVWbrv%2F3Djv374p6jyNtu16f74%2FmGGgSiBbJ1zY0ot0MHMccg2QIw%2BI%2F%2FSAiZhYyF2aGuVIbD&X-Amz-Signature=a177e3cfa882fea6e393fbf38eafcf5a7edc07b14241dabfd4e8beb2f8a33a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

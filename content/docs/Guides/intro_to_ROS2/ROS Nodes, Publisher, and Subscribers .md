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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQ2RQKB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgrO%2FL7dpYkrQRFktZmHtj01wyi4o22%2BYvLDFCrLMW9AiAjVG8OgCOJrq056XdwGfD%2FBxA4YnKKEtB2SgHbu0FD3SqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjuDJEk%2BKd4iHfGLKtwDCoOhdV9Te27fTgaKIAsRYy4HgAojaNMnV8JEXvjlQPWWB9SPJ0Mq7tErL48g8DH0xahj3E2pfEp96WuBkk%2FXiOBx3zIQXHRrmWeIjYbcITMIy6bOk779nKzq7yahYjxwGYc56RANIDwW%2BD%2B78TvX9c56HCKGPJFncKuFcQhGWE6dnkPoEBWsuN4zfcjXPMVZmqNGUl3d9M6JdPIQ6klUgE7ugoOPKr6y%2B6F699CuuNlX4rDscCvMWKqB%2Brayu9Yqo92xqLndhEpefHO6vtfnTI3lxH6n%2FBSCQyFo6YYJlEQ%2B8R3%2Bac0XMeQnFZLFqfyPzstviUfIgpP16H08SVrbOK4WI3Sr6tIBQMGofgfdxHR3LBfCg6VRQG9pW1djdZlfo6FacLPSVv9NF5Ls2wFy28yZe7dHc1typwwMcUxu3q7IAs%2BTdNeJyrojlA1QNG%2Fxxt7e1mjakx1jbCtxZeKR6E5mHViKIoTSJHoBL431L%2FA6a8LPkeCdP%2FIkLQm27T4mP9LtsE8Xe%2BEfJ66fVyNmuBhISBG96KhXLun4bZdlZOuDdr1YFFyebbvgOlMOJD9IYKIuDwHrCqfH2au%2FurRsjAmuJbHHLzCGW4Sc%2BLE5r1b17A%2BIUn3byd597bIwn%2F2VvgY6pgG0gx9kOrt1EmzOuCc7sPDHGGDTUsYb9fwx4j0kD%2BvMWFPFFzsKNU%2Bt2RaTVTPbLMzcnl3GPsGNUgpW7aI3cZ7TF3419X%2BRvQsPBivVrxjSyTrvYN25Ama6xpdYQE1Z2Ira6%2Bs1VYUrDCNcKKrvVkFdGUk28F6GX7mx%2BixRhcICYSZ45l1b9TqAiKGHtSdrBmQDRWsek1p2Sq4B9JGi8xqrbQsiN6aq&X-Amz-Signature=38fc650a028437a5c8700d428925b2d6130c4827c1c24e360f2942119be67bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQ2RQKB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgrO%2FL7dpYkrQRFktZmHtj01wyi4o22%2BYvLDFCrLMW9AiAjVG8OgCOJrq056XdwGfD%2FBxA4YnKKEtB2SgHbu0FD3SqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjuDJEk%2BKd4iHfGLKtwDCoOhdV9Te27fTgaKIAsRYy4HgAojaNMnV8JEXvjlQPWWB9SPJ0Mq7tErL48g8DH0xahj3E2pfEp96WuBkk%2FXiOBx3zIQXHRrmWeIjYbcITMIy6bOk779nKzq7yahYjxwGYc56RANIDwW%2BD%2B78TvX9c56HCKGPJFncKuFcQhGWE6dnkPoEBWsuN4zfcjXPMVZmqNGUl3d9M6JdPIQ6klUgE7ugoOPKr6y%2B6F699CuuNlX4rDscCvMWKqB%2Brayu9Yqo92xqLndhEpefHO6vtfnTI3lxH6n%2FBSCQyFo6YYJlEQ%2B8R3%2Bac0XMeQnFZLFqfyPzstviUfIgpP16H08SVrbOK4WI3Sr6tIBQMGofgfdxHR3LBfCg6VRQG9pW1djdZlfo6FacLPSVv9NF5Ls2wFy28yZe7dHc1typwwMcUxu3q7IAs%2BTdNeJyrojlA1QNG%2Fxxt7e1mjakx1jbCtxZeKR6E5mHViKIoTSJHoBL431L%2FA6a8LPkeCdP%2FIkLQm27T4mP9LtsE8Xe%2BEfJ66fVyNmuBhISBG96KhXLun4bZdlZOuDdr1YFFyebbvgOlMOJD9IYKIuDwHrCqfH2au%2FurRsjAmuJbHHLzCGW4Sc%2BLE5r1b17A%2BIUn3byd597bIwn%2F2VvgY6pgG0gx9kOrt1EmzOuCc7sPDHGGDTUsYb9fwx4j0kD%2BvMWFPFFzsKNU%2Bt2RaTVTPbLMzcnl3GPsGNUgpW7aI3cZ7TF3419X%2BRvQsPBivVrxjSyTrvYN25Ama6xpdYQE1Z2Ira6%2Bs1VYUrDCNcKKrvVkFdGUk28F6GX7mx%2BixRhcICYSZ45l1b9TqAiKGHtSdrBmQDRWsek1p2Sq4B9JGi8xqrbQsiN6aq&X-Amz-Signature=ee97b854e147d536409533b519a7ae4f0dcf05aedee5ced2f51a24d772af98bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQ2RQKB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgrO%2FL7dpYkrQRFktZmHtj01wyi4o22%2BYvLDFCrLMW9AiAjVG8OgCOJrq056XdwGfD%2FBxA4YnKKEtB2SgHbu0FD3SqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjuDJEk%2BKd4iHfGLKtwDCoOhdV9Te27fTgaKIAsRYy4HgAojaNMnV8JEXvjlQPWWB9SPJ0Mq7tErL48g8DH0xahj3E2pfEp96WuBkk%2FXiOBx3zIQXHRrmWeIjYbcITMIy6bOk779nKzq7yahYjxwGYc56RANIDwW%2BD%2B78TvX9c56HCKGPJFncKuFcQhGWE6dnkPoEBWsuN4zfcjXPMVZmqNGUl3d9M6JdPIQ6klUgE7ugoOPKr6y%2B6F699CuuNlX4rDscCvMWKqB%2Brayu9Yqo92xqLndhEpefHO6vtfnTI3lxH6n%2FBSCQyFo6YYJlEQ%2B8R3%2Bac0XMeQnFZLFqfyPzstviUfIgpP16H08SVrbOK4WI3Sr6tIBQMGofgfdxHR3LBfCg6VRQG9pW1djdZlfo6FacLPSVv9NF5Ls2wFy28yZe7dHc1typwwMcUxu3q7IAs%2BTdNeJyrojlA1QNG%2Fxxt7e1mjakx1jbCtxZeKR6E5mHViKIoTSJHoBL431L%2FA6a8LPkeCdP%2FIkLQm27T4mP9LtsE8Xe%2BEfJ66fVyNmuBhISBG96KhXLun4bZdlZOuDdr1YFFyebbvgOlMOJD9IYKIuDwHrCqfH2au%2FurRsjAmuJbHHLzCGW4Sc%2BLE5r1b17A%2BIUn3byd597bIwn%2F2VvgY6pgG0gx9kOrt1EmzOuCc7sPDHGGDTUsYb9fwx4j0kD%2BvMWFPFFzsKNU%2Bt2RaTVTPbLMzcnl3GPsGNUgpW7aI3cZ7TF3419X%2BRvQsPBivVrxjSyTrvYN25Ama6xpdYQE1Z2Ira6%2Bs1VYUrDCNcKKrvVkFdGUk28F6GX7mx%2BixRhcICYSZ45l1b9TqAiKGHtSdrBmQDRWsek1p2Sq4B9JGi8xqrbQsiN6aq&X-Amz-Signature=48dc0e8725bca343200ab36c2ee7295293ce0b357ae9a4623953f4f533a5be41&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQ2RQKB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgrO%2FL7dpYkrQRFktZmHtj01wyi4o22%2BYvLDFCrLMW9AiAjVG8OgCOJrq056XdwGfD%2FBxA4YnKKEtB2SgHbu0FD3SqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjuDJEk%2BKd4iHfGLKtwDCoOhdV9Te27fTgaKIAsRYy4HgAojaNMnV8JEXvjlQPWWB9SPJ0Mq7tErL48g8DH0xahj3E2pfEp96WuBkk%2FXiOBx3zIQXHRrmWeIjYbcITMIy6bOk779nKzq7yahYjxwGYc56RANIDwW%2BD%2B78TvX9c56HCKGPJFncKuFcQhGWE6dnkPoEBWsuN4zfcjXPMVZmqNGUl3d9M6JdPIQ6klUgE7ugoOPKr6y%2B6F699CuuNlX4rDscCvMWKqB%2Brayu9Yqo92xqLndhEpefHO6vtfnTI3lxH6n%2FBSCQyFo6YYJlEQ%2B8R3%2Bac0XMeQnFZLFqfyPzstviUfIgpP16H08SVrbOK4WI3Sr6tIBQMGofgfdxHR3LBfCg6VRQG9pW1djdZlfo6FacLPSVv9NF5Ls2wFy28yZe7dHc1typwwMcUxu3q7IAs%2BTdNeJyrojlA1QNG%2Fxxt7e1mjakx1jbCtxZeKR6E5mHViKIoTSJHoBL431L%2FA6a8LPkeCdP%2FIkLQm27T4mP9LtsE8Xe%2BEfJ66fVyNmuBhISBG96KhXLun4bZdlZOuDdr1YFFyebbvgOlMOJD9IYKIuDwHrCqfH2au%2FurRsjAmuJbHHLzCGW4Sc%2BLE5r1b17A%2BIUn3byd597bIwn%2F2VvgY6pgG0gx9kOrt1EmzOuCc7sPDHGGDTUsYb9fwx4j0kD%2BvMWFPFFzsKNU%2Bt2RaTVTPbLMzcnl3GPsGNUgpW7aI3cZ7TF3419X%2BRvQsPBivVrxjSyTrvYN25Ama6xpdYQE1Z2Ira6%2Bs1VYUrDCNcKKrvVkFdGUk28F6GX7mx%2BixRhcICYSZ45l1b9TqAiKGHtSdrBmQDRWsek1p2Sq4B9JGi8xqrbQsiN6aq&X-Amz-Signature=7b8a610fb9393c247e0a97105e846fc7071b339c0dc4afa628a328f45eeb01ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQ2RQKB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgrO%2FL7dpYkrQRFktZmHtj01wyi4o22%2BYvLDFCrLMW9AiAjVG8OgCOJrq056XdwGfD%2FBxA4YnKKEtB2SgHbu0FD3SqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjuDJEk%2BKd4iHfGLKtwDCoOhdV9Te27fTgaKIAsRYy4HgAojaNMnV8JEXvjlQPWWB9SPJ0Mq7tErL48g8DH0xahj3E2pfEp96WuBkk%2FXiOBx3zIQXHRrmWeIjYbcITMIy6bOk779nKzq7yahYjxwGYc56RANIDwW%2BD%2B78TvX9c56HCKGPJFncKuFcQhGWE6dnkPoEBWsuN4zfcjXPMVZmqNGUl3d9M6JdPIQ6klUgE7ugoOPKr6y%2B6F699CuuNlX4rDscCvMWKqB%2Brayu9Yqo92xqLndhEpefHO6vtfnTI3lxH6n%2FBSCQyFo6YYJlEQ%2B8R3%2Bac0XMeQnFZLFqfyPzstviUfIgpP16H08SVrbOK4WI3Sr6tIBQMGofgfdxHR3LBfCg6VRQG9pW1djdZlfo6FacLPSVv9NF5Ls2wFy28yZe7dHc1typwwMcUxu3q7IAs%2BTdNeJyrojlA1QNG%2Fxxt7e1mjakx1jbCtxZeKR6E5mHViKIoTSJHoBL431L%2FA6a8LPkeCdP%2FIkLQm27T4mP9LtsE8Xe%2BEfJ66fVyNmuBhISBG96KhXLun4bZdlZOuDdr1YFFyebbvgOlMOJD9IYKIuDwHrCqfH2au%2FurRsjAmuJbHHLzCGW4Sc%2BLE5r1b17A%2BIUn3byd597bIwn%2F2VvgY6pgG0gx9kOrt1EmzOuCc7sPDHGGDTUsYb9fwx4j0kD%2BvMWFPFFzsKNU%2Bt2RaTVTPbLMzcnl3GPsGNUgpW7aI3cZ7TF3419X%2BRvQsPBivVrxjSyTrvYN25Ama6xpdYQE1Z2Ira6%2Bs1VYUrDCNcKKrvVkFdGUk28F6GX7mx%2BixRhcICYSZ45l1b9TqAiKGHtSdrBmQDRWsek1p2Sq4B9JGi8xqrbQsiN6aq&X-Amz-Signature=408b284d4924316e850a2a594e32154862d9091976ce9188376e21de495e33b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQ2RQKB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgrO%2FL7dpYkrQRFktZmHtj01wyi4o22%2BYvLDFCrLMW9AiAjVG8OgCOJrq056XdwGfD%2FBxA4YnKKEtB2SgHbu0FD3SqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjuDJEk%2BKd4iHfGLKtwDCoOhdV9Te27fTgaKIAsRYy4HgAojaNMnV8JEXvjlQPWWB9SPJ0Mq7tErL48g8DH0xahj3E2pfEp96WuBkk%2FXiOBx3zIQXHRrmWeIjYbcITMIy6bOk779nKzq7yahYjxwGYc56RANIDwW%2BD%2B78TvX9c56HCKGPJFncKuFcQhGWE6dnkPoEBWsuN4zfcjXPMVZmqNGUl3d9M6JdPIQ6klUgE7ugoOPKr6y%2B6F699CuuNlX4rDscCvMWKqB%2Brayu9Yqo92xqLndhEpefHO6vtfnTI3lxH6n%2FBSCQyFo6YYJlEQ%2B8R3%2Bac0XMeQnFZLFqfyPzstviUfIgpP16H08SVrbOK4WI3Sr6tIBQMGofgfdxHR3LBfCg6VRQG9pW1djdZlfo6FacLPSVv9NF5Ls2wFy28yZe7dHc1typwwMcUxu3q7IAs%2BTdNeJyrojlA1QNG%2Fxxt7e1mjakx1jbCtxZeKR6E5mHViKIoTSJHoBL431L%2FA6a8LPkeCdP%2FIkLQm27T4mP9LtsE8Xe%2BEfJ66fVyNmuBhISBG96KhXLun4bZdlZOuDdr1YFFyebbvgOlMOJD9IYKIuDwHrCqfH2au%2FurRsjAmuJbHHLzCGW4Sc%2BLE5r1b17A%2BIUn3byd597bIwn%2F2VvgY6pgG0gx9kOrt1EmzOuCc7sPDHGGDTUsYb9fwx4j0kD%2BvMWFPFFzsKNU%2Bt2RaTVTPbLMzcnl3GPsGNUgpW7aI3cZ7TF3419X%2BRvQsPBivVrxjSyTrvYN25Ama6xpdYQE1Z2Ira6%2Bs1VYUrDCNcKKrvVkFdGUk28F6GX7mx%2BixRhcICYSZ45l1b9TqAiKGHtSdrBmQDRWsek1p2Sq4B9JGi8xqrbQsiN6aq&X-Amz-Signature=6f02697a6f54f44fd2c8449a9e5801666dead40c1d8542ed208eab8ff79cbde4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQ2RQKB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgrO%2FL7dpYkrQRFktZmHtj01wyi4o22%2BYvLDFCrLMW9AiAjVG8OgCOJrq056XdwGfD%2FBxA4YnKKEtB2SgHbu0FD3SqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjuDJEk%2BKd4iHfGLKtwDCoOhdV9Te27fTgaKIAsRYy4HgAojaNMnV8JEXvjlQPWWB9SPJ0Mq7tErL48g8DH0xahj3E2pfEp96WuBkk%2FXiOBx3zIQXHRrmWeIjYbcITMIy6bOk779nKzq7yahYjxwGYc56RANIDwW%2BD%2B78TvX9c56HCKGPJFncKuFcQhGWE6dnkPoEBWsuN4zfcjXPMVZmqNGUl3d9M6JdPIQ6klUgE7ugoOPKr6y%2B6F699CuuNlX4rDscCvMWKqB%2Brayu9Yqo92xqLndhEpefHO6vtfnTI3lxH6n%2FBSCQyFo6YYJlEQ%2B8R3%2Bac0XMeQnFZLFqfyPzstviUfIgpP16H08SVrbOK4WI3Sr6tIBQMGofgfdxHR3LBfCg6VRQG9pW1djdZlfo6FacLPSVv9NF5Ls2wFy28yZe7dHc1typwwMcUxu3q7IAs%2BTdNeJyrojlA1QNG%2Fxxt7e1mjakx1jbCtxZeKR6E5mHViKIoTSJHoBL431L%2FA6a8LPkeCdP%2FIkLQm27T4mP9LtsE8Xe%2BEfJ66fVyNmuBhISBG96KhXLun4bZdlZOuDdr1YFFyebbvgOlMOJD9IYKIuDwHrCqfH2au%2FurRsjAmuJbHHLzCGW4Sc%2BLE5r1b17A%2BIUn3byd597bIwn%2F2VvgY6pgG0gx9kOrt1EmzOuCc7sPDHGGDTUsYb9fwx4j0kD%2BvMWFPFFzsKNU%2Bt2RaTVTPbLMzcnl3GPsGNUgpW7aI3cZ7TF3419X%2BRvQsPBivVrxjSyTrvYN25Ama6xpdYQE1Z2Ira6%2Bs1VYUrDCNcKKrvVkFdGUk28F6GX7mx%2BixRhcICYSZ45l1b9TqAiKGHtSdrBmQDRWsek1p2Sq4B9JGi8xqrbQsiN6aq&X-Amz-Signature=23538115dad1e10391c566a88ccc87ed0c207314bf791327638de33b561443e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQ2RQKB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgrO%2FL7dpYkrQRFktZmHtj01wyi4o22%2BYvLDFCrLMW9AiAjVG8OgCOJrq056XdwGfD%2FBxA4YnKKEtB2SgHbu0FD3SqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjuDJEk%2BKd4iHfGLKtwDCoOhdV9Te27fTgaKIAsRYy4HgAojaNMnV8JEXvjlQPWWB9SPJ0Mq7tErL48g8DH0xahj3E2pfEp96WuBkk%2FXiOBx3zIQXHRrmWeIjYbcITMIy6bOk779nKzq7yahYjxwGYc56RANIDwW%2BD%2B78TvX9c56HCKGPJFncKuFcQhGWE6dnkPoEBWsuN4zfcjXPMVZmqNGUl3d9M6JdPIQ6klUgE7ugoOPKr6y%2B6F699CuuNlX4rDscCvMWKqB%2Brayu9Yqo92xqLndhEpefHO6vtfnTI3lxH6n%2FBSCQyFo6YYJlEQ%2B8R3%2Bac0XMeQnFZLFqfyPzstviUfIgpP16H08SVrbOK4WI3Sr6tIBQMGofgfdxHR3LBfCg6VRQG9pW1djdZlfo6FacLPSVv9NF5Ls2wFy28yZe7dHc1typwwMcUxu3q7IAs%2BTdNeJyrojlA1QNG%2Fxxt7e1mjakx1jbCtxZeKR6E5mHViKIoTSJHoBL431L%2FA6a8LPkeCdP%2FIkLQm27T4mP9LtsE8Xe%2BEfJ66fVyNmuBhISBG96KhXLun4bZdlZOuDdr1YFFyebbvgOlMOJD9IYKIuDwHrCqfH2au%2FurRsjAmuJbHHLzCGW4Sc%2BLE5r1b17A%2BIUn3byd597bIwn%2F2VvgY6pgG0gx9kOrt1EmzOuCc7sPDHGGDTUsYb9fwx4j0kD%2BvMWFPFFzsKNU%2Bt2RaTVTPbLMzcnl3GPsGNUgpW7aI3cZ7TF3419X%2BRvQsPBivVrxjSyTrvYN25Ama6xpdYQE1Z2Ira6%2Bs1VYUrDCNcKKrvVkFdGUk28F6GX7mx%2BixRhcICYSZ45l1b9TqAiKGHtSdrBmQDRWsek1p2Sq4B9JGi8xqrbQsiN6aq&X-Amz-Signature=c855c7b26381494870b78f878a9199764b4951c7cbb49326f13507fddbf702ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

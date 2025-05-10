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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI4JKR7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp0bxvPXwhjBo7uST%2FpoUAPhmwPjzF6vYzY63AFaPCFAiB648RQplCr61Q7KtNO4phPGuwiRBtjyLiXRkD9BxHW2SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFh6RWZ3rVTbCnd2KtwDjiUItdEIARS%2F0TDQt%2Fp%2Fq9OjMacLvqAb3%2B8CWubHlyZcsxkltOcJB0qO8mQcEhlwsnHraE5yIwZjs%2Bfgsin1uCv118N%2Br9acizZqXOv3QddvAJBndL%2B5Z0l6hTjcGZig79NGgBqac4z5sy%2FpIXuQqGTuquai%2FhkCTwjH8hIovZ7O0JicEua0XB1qSWrLctHWstrbUlzH1WRGKjcccsxX0fWYqMMJX0rRZl1KESUN7koFL9T0aRnbhFJOdMnpGCEcgs2s8LSPURhKqpMX1nZOWCGlTbPJtIdqZnarCLDECK05lwjlMnjoryLR%2FT2rkb%2F0M7pvoeLAHGmHkNuypnWo2VBJYXLAqfIretxWmPVnxkkHbVHhzLcEN2IfM95dg0cEU4FOacMtGhJHeVF0Uyr2QRiPRYlnrCfjgqwqBgQ40e0kQDYFfiLYRbAGmqBeFIPnO4kKM%2F7fchIj4beT2CuL37f1%2B%2F44dUBSev4yaAXHnV1zr%2Bmq69om2fztDsd%2FciArt%2F9B9FAQ8iAKqTaDrxJpEt2CSA7Oe6YnXDpEOSOMIWUE8%2Fs24pL330aEdcqayCx8vU2hu3xNB1G6RrBMVbznSWyxgqop5DluuDCWEc9%2F%2Bug3mbrrIylXgd2zNXAwnLb6wAY6pgH%2BmOBUZm46uLu5twoKQGftrHcMjyQz2snCwPf6V%2FhESgfdMyf3138HMx4Te7KzRbafHLv%2FaiYE4LtvZxwx3OFB3CUWbNnZ4Fcvg0PbN0OgND5ZNwp46ijF1f17OelKSgWPlWQh%2F6v9e3VFQzTd2LN9TK1H3CEWq1rldZ02ZW8n35vKewRNMXMzizUPAYF8goHmVmZl%2Fhg4OC1QzkdAK%2BsLUto88JOV&X-Amz-Signature=8bff837f3bf992643d3867875c3d9db6f3a49abd01f8c54576cd0ea4eb048653&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI4JKR7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp0bxvPXwhjBo7uST%2FpoUAPhmwPjzF6vYzY63AFaPCFAiB648RQplCr61Q7KtNO4phPGuwiRBtjyLiXRkD9BxHW2SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFh6RWZ3rVTbCnd2KtwDjiUItdEIARS%2F0TDQt%2Fp%2Fq9OjMacLvqAb3%2B8CWubHlyZcsxkltOcJB0qO8mQcEhlwsnHraE5yIwZjs%2Bfgsin1uCv118N%2Br9acizZqXOv3QddvAJBndL%2B5Z0l6hTjcGZig79NGgBqac4z5sy%2FpIXuQqGTuquai%2FhkCTwjH8hIovZ7O0JicEua0XB1qSWrLctHWstrbUlzH1WRGKjcccsxX0fWYqMMJX0rRZl1KESUN7koFL9T0aRnbhFJOdMnpGCEcgs2s8LSPURhKqpMX1nZOWCGlTbPJtIdqZnarCLDECK05lwjlMnjoryLR%2FT2rkb%2F0M7pvoeLAHGmHkNuypnWo2VBJYXLAqfIretxWmPVnxkkHbVHhzLcEN2IfM95dg0cEU4FOacMtGhJHeVF0Uyr2QRiPRYlnrCfjgqwqBgQ40e0kQDYFfiLYRbAGmqBeFIPnO4kKM%2F7fchIj4beT2CuL37f1%2B%2F44dUBSev4yaAXHnV1zr%2Bmq69om2fztDsd%2FciArt%2F9B9FAQ8iAKqTaDrxJpEt2CSA7Oe6YnXDpEOSOMIWUE8%2Fs24pL330aEdcqayCx8vU2hu3xNB1G6RrBMVbznSWyxgqop5DluuDCWEc9%2F%2Bug3mbrrIylXgd2zNXAwnLb6wAY6pgH%2BmOBUZm46uLu5twoKQGftrHcMjyQz2snCwPf6V%2FhESgfdMyf3138HMx4Te7KzRbafHLv%2FaiYE4LtvZxwx3OFB3CUWbNnZ4Fcvg0PbN0OgND5ZNwp46ijF1f17OelKSgWPlWQh%2F6v9e3VFQzTd2LN9TK1H3CEWq1rldZ02ZW8n35vKewRNMXMzizUPAYF8goHmVmZl%2Fhg4OC1QzkdAK%2BsLUto88JOV&X-Amz-Signature=430d1c8ce6579759e95528fe175cf14b427bc9cfbdcb685c0fc04f90cd3a95f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI4JKR7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp0bxvPXwhjBo7uST%2FpoUAPhmwPjzF6vYzY63AFaPCFAiB648RQplCr61Q7KtNO4phPGuwiRBtjyLiXRkD9BxHW2SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFh6RWZ3rVTbCnd2KtwDjiUItdEIARS%2F0TDQt%2Fp%2Fq9OjMacLvqAb3%2B8CWubHlyZcsxkltOcJB0qO8mQcEhlwsnHraE5yIwZjs%2Bfgsin1uCv118N%2Br9acizZqXOv3QddvAJBndL%2B5Z0l6hTjcGZig79NGgBqac4z5sy%2FpIXuQqGTuquai%2FhkCTwjH8hIovZ7O0JicEua0XB1qSWrLctHWstrbUlzH1WRGKjcccsxX0fWYqMMJX0rRZl1KESUN7koFL9T0aRnbhFJOdMnpGCEcgs2s8LSPURhKqpMX1nZOWCGlTbPJtIdqZnarCLDECK05lwjlMnjoryLR%2FT2rkb%2F0M7pvoeLAHGmHkNuypnWo2VBJYXLAqfIretxWmPVnxkkHbVHhzLcEN2IfM95dg0cEU4FOacMtGhJHeVF0Uyr2QRiPRYlnrCfjgqwqBgQ40e0kQDYFfiLYRbAGmqBeFIPnO4kKM%2F7fchIj4beT2CuL37f1%2B%2F44dUBSev4yaAXHnV1zr%2Bmq69om2fztDsd%2FciArt%2F9B9FAQ8iAKqTaDrxJpEt2CSA7Oe6YnXDpEOSOMIWUE8%2Fs24pL330aEdcqayCx8vU2hu3xNB1G6RrBMVbznSWyxgqop5DluuDCWEc9%2F%2Bug3mbrrIylXgd2zNXAwnLb6wAY6pgH%2BmOBUZm46uLu5twoKQGftrHcMjyQz2snCwPf6V%2FhESgfdMyf3138HMx4Te7KzRbafHLv%2FaiYE4LtvZxwx3OFB3CUWbNnZ4Fcvg0PbN0OgND5ZNwp46ijF1f17OelKSgWPlWQh%2F6v9e3VFQzTd2LN9TK1H3CEWq1rldZ02ZW8n35vKewRNMXMzizUPAYF8goHmVmZl%2Fhg4OC1QzkdAK%2BsLUto88JOV&X-Amz-Signature=eaa471ce014b7767ead794cff6e29fc78ecee03bf5128b4e82162055a4ecc105&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI4JKR7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp0bxvPXwhjBo7uST%2FpoUAPhmwPjzF6vYzY63AFaPCFAiB648RQplCr61Q7KtNO4phPGuwiRBtjyLiXRkD9BxHW2SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFh6RWZ3rVTbCnd2KtwDjiUItdEIARS%2F0TDQt%2Fp%2Fq9OjMacLvqAb3%2B8CWubHlyZcsxkltOcJB0qO8mQcEhlwsnHraE5yIwZjs%2Bfgsin1uCv118N%2Br9acizZqXOv3QddvAJBndL%2B5Z0l6hTjcGZig79NGgBqac4z5sy%2FpIXuQqGTuquai%2FhkCTwjH8hIovZ7O0JicEua0XB1qSWrLctHWstrbUlzH1WRGKjcccsxX0fWYqMMJX0rRZl1KESUN7koFL9T0aRnbhFJOdMnpGCEcgs2s8LSPURhKqpMX1nZOWCGlTbPJtIdqZnarCLDECK05lwjlMnjoryLR%2FT2rkb%2F0M7pvoeLAHGmHkNuypnWo2VBJYXLAqfIretxWmPVnxkkHbVHhzLcEN2IfM95dg0cEU4FOacMtGhJHeVF0Uyr2QRiPRYlnrCfjgqwqBgQ40e0kQDYFfiLYRbAGmqBeFIPnO4kKM%2F7fchIj4beT2CuL37f1%2B%2F44dUBSev4yaAXHnV1zr%2Bmq69om2fztDsd%2FciArt%2F9B9FAQ8iAKqTaDrxJpEt2CSA7Oe6YnXDpEOSOMIWUE8%2Fs24pL330aEdcqayCx8vU2hu3xNB1G6RrBMVbznSWyxgqop5DluuDCWEc9%2F%2Bug3mbrrIylXgd2zNXAwnLb6wAY6pgH%2BmOBUZm46uLu5twoKQGftrHcMjyQz2snCwPf6V%2FhESgfdMyf3138HMx4Te7KzRbafHLv%2FaiYE4LtvZxwx3OFB3CUWbNnZ4Fcvg0PbN0OgND5ZNwp46ijF1f17OelKSgWPlWQh%2F6v9e3VFQzTd2LN9TK1H3CEWq1rldZ02ZW8n35vKewRNMXMzizUPAYF8goHmVmZl%2Fhg4OC1QzkdAK%2BsLUto88JOV&X-Amz-Signature=3e052e8364d6bd03ed7daa7a6423d3b46088a53f81aed275fbd2892449c49fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI4JKR7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp0bxvPXwhjBo7uST%2FpoUAPhmwPjzF6vYzY63AFaPCFAiB648RQplCr61Q7KtNO4phPGuwiRBtjyLiXRkD9BxHW2SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFh6RWZ3rVTbCnd2KtwDjiUItdEIARS%2F0TDQt%2Fp%2Fq9OjMacLvqAb3%2B8CWubHlyZcsxkltOcJB0qO8mQcEhlwsnHraE5yIwZjs%2Bfgsin1uCv118N%2Br9acizZqXOv3QddvAJBndL%2B5Z0l6hTjcGZig79NGgBqac4z5sy%2FpIXuQqGTuquai%2FhkCTwjH8hIovZ7O0JicEua0XB1qSWrLctHWstrbUlzH1WRGKjcccsxX0fWYqMMJX0rRZl1KESUN7koFL9T0aRnbhFJOdMnpGCEcgs2s8LSPURhKqpMX1nZOWCGlTbPJtIdqZnarCLDECK05lwjlMnjoryLR%2FT2rkb%2F0M7pvoeLAHGmHkNuypnWo2VBJYXLAqfIretxWmPVnxkkHbVHhzLcEN2IfM95dg0cEU4FOacMtGhJHeVF0Uyr2QRiPRYlnrCfjgqwqBgQ40e0kQDYFfiLYRbAGmqBeFIPnO4kKM%2F7fchIj4beT2CuL37f1%2B%2F44dUBSev4yaAXHnV1zr%2Bmq69om2fztDsd%2FciArt%2F9B9FAQ8iAKqTaDrxJpEt2CSA7Oe6YnXDpEOSOMIWUE8%2Fs24pL330aEdcqayCx8vU2hu3xNB1G6RrBMVbznSWyxgqop5DluuDCWEc9%2F%2Bug3mbrrIylXgd2zNXAwnLb6wAY6pgH%2BmOBUZm46uLu5twoKQGftrHcMjyQz2snCwPf6V%2FhESgfdMyf3138HMx4Te7KzRbafHLv%2FaiYE4LtvZxwx3OFB3CUWbNnZ4Fcvg0PbN0OgND5ZNwp46ijF1f17OelKSgWPlWQh%2F6v9e3VFQzTd2LN9TK1H3CEWq1rldZ02ZW8n35vKewRNMXMzizUPAYF8goHmVmZl%2Fhg4OC1QzkdAK%2BsLUto88JOV&X-Amz-Signature=b5b3028a524764129ebf134434d74e82cbe4a17446fb0d66872491738aea3202&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI4JKR7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp0bxvPXwhjBo7uST%2FpoUAPhmwPjzF6vYzY63AFaPCFAiB648RQplCr61Q7KtNO4phPGuwiRBtjyLiXRkD9BxHW2SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFh6RWZ3rVTbCnd2KtwDjiUItdEIARS%2F0TDQt%2Fp%2Fq9OjMacLvqAb3%2B8CWubHlyZcsxkltOcJB0qO8mQcEhlwsnHraE5yIwZjs%2Bfgsin1uCv118N%2Br9acizZqXOv3QddvAJBndL%2B5Z0l6hTjcGZig79NGgBqac4z5sy%2FpIXuQqGTuquai%2FhkCTwjH8hIovZ7O0JicEua0XB1qSWrLctHWstrbUlzH1WRGKjcccsxX0fWYqMMJX0rRZl1KESUN7koFL9T0aRnbhFJOdMnpGCEcgs2s8LSPURhKqpMX1nZOWCGlTbPJtIdqZnarCLDECK05lwjlMnjoryLR%2FT2rkb%2F0M7pvoeLAHGmHkNuypnWo2VBJYXLAqfIretxWmPVnxkkHbVHhzLcEN2IfM95dg0cEU4FOacMtGhJHeVF0Uyr2QRiPRYlnrCfjgqwqBgQ40e0kQDYFfiLYRbAGmqBeFIPnO4kKM%2F7fchIj4beT2CuL37f1%2B%2F44dUBSev4yaAXHnV1zr%2Bmq69om2fztDsd%2FciArt%2F9B9FAQ8iAKqTaDrxJpEt2CSA7Oe6YnXDpEOSOMIWUE8%2Fs24pL330aEdcqayCx8vU2hu3xNB1G6RrBMVbznSWyxgqop5DluuDCWEc9%2F%2Bug3mbrrIylXgd2zNXAwnLb6wAY6pgH%2BmOBUZm46uLu5twoKQGftrHcMjyQz2snCwPf6V%2FhESgfdMyf3138HMx4Te7KzRbafHLv%2FaiYE4LtvZxwx3OFB3CUWbNnZ4Fcvg0PbN0OgND5ZNwp46ijF1f17OelKSgWPlWQh%2F6v9e3VFQzTd2LN9TK1H3CEWq1rldZ02ZW8n35vKewRNMXMzizUPAYF8goHmVmZl%2Fhg4OC1QzkdAK%2BsLUto88JOV&X-Amz-Signature=9760cab90f5b432ff3a2c3d5f2fecaf1edbf7f8dd94165fe3fbae547bed44d53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI4JKR7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp0bxvPXwhjBo7uST%2FpoUAPhmwPjzF6vYzY63AFaPCFAiB648RQplCr61Q7KtNO4phPGuwiRBtjyLiXRkD9BxHW2SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFh6RWZ3rVTbCnd2KtwDjiUItdEIARS%2F0TDQt%2Fp%2Fq9OjMacLvqAb3%2B8CWubHlyZcsxkltOcJB0qO8mQcEhlwsnHraE5yIwZjs%2Bfgsin1uCv118N%2Br9acizZqXOv3QddvAJBndL%2B5Z0l6hTjcGZig79NGgBqac4z5sy%2FpIXuQqGTuquai%2FhkCTwjH8hIovZ7O0JicEua0XB1qSWrLctHWstrbUlzH1WRGKjcccsxX0fWYqMMJX0rRZl1KESUN7koFL9T0aRnbhFJOdMnpGCEcgs2s8LSPURhKqpMX1nZOWCGlTbPJtIdqZnarCLDECK05lwjlMnjoryLR%2FT2rkb%2F0M7pvoeLAHGmHkNuypnWo2VBJYXLAqfIretxWmPVnxkkHbVHhzLcEN2IfM95dg0cEU4FOacMtGhJHeVF0Uyr2QRiPRYlnrCfjgqwqBgQ40e0kQDYFfiLYRbAGmqBeFIPnO4kKM%2F7fchIj4beT2CuL37f1%2B%2F44dUBSev4yaAXHnV1zr%2Bmq69om2fztDsd%2FciArt%2F9B9FAQ8iAKqTaDrxJpEt2CSA7Oe6YnXDpEOSOMIWUE8%2Fs24pL330aEdcqayCx8vU2hu3xNB1G6RrBMVbznSWyxgqop5DluuDCWEc9%2F%2Bug3mbrrIylXgd2zNXAwnLb6wAY6pgH%2BmOBUZm46uLu5twoKQGftrHcMjyQz2snCwPf6V%2FhESgfdMyf3138HMx4Te7KzRbafHLv%2FaiYE4LtvZxwx3OFB3CUWbNnZ4Fcvg0PbN0OgND5ZNwp46ijF1f17OelKSgWPlWQh%2F6v9e3VFQzTd2LN9TK1H3CEWq1rldZ02ZW8n35vKewRNMXMzizUPAYF8goHmVmZl%2Fhg4OC1QzkdAK%2BsLUto88JOV&X-Amz-Signature=a01300d8a0c8f77a9e908d27f7d77cf1a1bd77fbb80ede60b0c0502a0d3adf38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI4JKR7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp0bxvPXwhjBo7uST%2FpoUAPhmwPjzF6vYzY63AFaPCFAiB648RQplCr61Q7KtNO4phPGuwiRBtjyLiXRkD9BxHW2SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFh6RWZ3rVTbCnd2KtwDjiUItdEIARS%2F0TDQt%2Fp%2Fq9OjMacLvqAb3%2B8CWubHlyZcsxkltOcJB0qO8mQcEhlwsnHraE5yIwZjs%2Bfgsin1uCv118N%2Br9acizZqXOv3QddvAJBndL%2B5Z0l6hTjcGZig79NGgBqac4z5sy%2FpIXuQqGTuquai%2FhkCTwjH8hIovZ7O0JicEua0XB1qSWrLctHWstrbUlzH1WRGKjcccsxX0fWYqMMJX0rRZl1KESUN7koFL9T0aRnbhFJOdMnpGCEcgs2s8LSPURhKqpMX1nZOWCGlTbPJtIdqZnarCLDECK05lwjlMnjoryLR%2FT2rkb%2F0M7pvoeLAHGmHkNuypnWo2VBJYXLAqfIretxWmPVnxkkHbVHhzLcEN2IfM95dg0cEU4FOacMtGhJHeVF0Uyr2QRiPRYlnrCfjgqwqBgQ40e0kQDYFfiLYRbAGmqBeFIPnO4kKM%2F7fchIj4beT2CuL37f1%2B%2F44dUBSev4yaAXHnV1zr%2Bmq69om2fztDsd%2FciArt%2F9B9FAQ8iAKqTaDrxJpEt2CSA7Oe6YnXDpEOSOMIWUE8%2Fs24pL330aEdcqayCx8vU2hu3xNB1G6RrBMVbznSWyxgqop5DluuDCWEc9%2F%2Bug3mbrrIylXgd2zNXAwnLb6wAY6pgH%2BmOBUZm46uLu5twoKQGftrHcMjyQz2snCwPf6V%2FhESgfdMyf3138HMx4Te7KzRbafHLv%2FaiYE4LtvZxwx3OFB3CUWbNnZ4Fcvg0PbN0OgND5ZNwp46ijF1f17OelKSgWPlWQh%2F6v9e3VFQzTd2LN9TK1H3CEWq1rldZ02ZW8n35vKewRNMXMzizUPAYF8goHmVmZl%2Fhg4OC1QzkdAK%2BsLUto88JOV&X-Amz-Signature=94f341f351f4eee90fbb6787823e25dccc7780739b2eba9df764edd649dc6958&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

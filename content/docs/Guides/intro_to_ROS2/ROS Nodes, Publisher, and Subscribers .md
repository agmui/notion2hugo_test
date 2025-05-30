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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2SC52N%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqHBVLw%2B1ztgSNkqV%2BS9jtrbuUbgk5t%2FuR9a4%2BK57DHAiEAryWDfEiFoqoJAZc6pzx%2BJboxCa9Be%2B%2Bv8SEjEursGkwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNVC49r4T6%2Fj3p5JyrcA7NBgeUKBtb%2B%2BirVLJGb9FF4VrIzkQQEbbKf1fm4g4V9zOjK1X2NfZdnnDB7f1DIwaRCDILAKsDWdZyn5L5Z22rZdxuOK%2BXblPQHwbdmj0Uv2KpmQEyIL4AgQloN5jjM01I3PblBVHTdUtJhRu3RvqpNOP%2BzTOYGIH08pdtqtATil03aOMJo72sxWxdt3UTKaEPHKwbn2ELaHRy1LNx5JzDS%2Fm3yrL%2BCls1oAirAZnpRFKRX5Jo1kWt3zj2CqMzHmUjTjYgh%2FP5J3PnCvV611LLwOOr4izFFrgn0jrfpEADirSdqCglwWz9YoP%2FZ9WmF9zJDo6Nur3%2BcrxQ0GuGIFb35T%2F77%2Fz%2BzzBlxgfDddmkpMXvhGTczElwzJoRxqlf1bVeQDb2p8lLRY5hMD859ljjuuzVMhzk9qrRpBaL3taIEIQ%2Bc6XVN5PlJo2tv6JWAypgEqj%2FHZ0Zwmals0o9CKdI01h9xcrTstlsyzY74DYErqTOlIkW3AzJtm5qrixA97oM%2BaHb2igg3m8uUKbYT8zUoC65BNCFGsKRD9eTOeMZkTsdVbaBiarzFe%2FDMLDvidv3JzEyFaeOXa7%2Fn9THhabK6Lo2z56tjadzw1j0A%2BRAxReSnqwcOIwmtGZOnMJr%2B5sEGOqUBY1cKZvxulkhQ%2BczKC821k2TiqjU5PbSisP%2Fklfw4yCLTOjGJN88sCLp47%2FWKkLCCKKNWOgUW3FUmU6LmYk53qDaHlB1hSF5ZLMJ7vgbKdkNfqPQEX7VI4aJplapK0fnI50gi6N%2Bmp4jTqsLlGv091WqaDcQ%2BXBKt2nT1uGg2ZSSPpkFiwPXlNXXGmD7vCd9Eki34HfU6fDlZv%2FbpaFY%2FX6c0s6aI&X-Amz-Signature=79c5d0d08310de125a8552d56e20c7cfa23619688cdf92e7b3fe71cb467994cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2SC52N%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqHBVLw%2B1ztgSNkqV%2BS9jtrbuUbgk5t%2FuR9a4%2BK57DHAiEAryWDfEiFoqoJAZc6pzx%2BJboxCa9Be%2B%2Bv8SEjEursGkwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNVC49r4T6%2Fj3p5JyrcA7NBgeUKBtb%2B%2BirVLJGb9FF4VrIzkQQEbbKf1fm4g4V9zOjK1X2NfZdnnDB7f1DIwaRCDILAKsDWdZyn5L5Z22rZdxuOK%2BXblPQHwbdmj0Uv2KpmQEyIL4AgQloN5jjM01I3PblBVHTdUtJhRu3RvqpNOP%2BzTOYGIH08pdtqtATil03aOMJo72sxWxdt3UTKaEPHKwbn2ELaHRy1LNx5JzDS%2Fm3yrL%2BCls1oAirAZnpRFKRX5Jo1kWt3zj2CqMzHmUjTjYgh%2FP5J3PnCvV611LLwOOr4izFFrgn0jrfpEADirSdqCglwWz9YoP%2FZ9WmF9zJDo6Nur3%2BcrxQ0GuGIFb35T%2F77%2Fz%2BzzBlxgfDddmkpMXvhGTczElwzJoRxqlf1bVeQDb2p8lLRY5hMD859ljjuuzVMhzk9qrRpBaL3taIEIQ%2Bc6XVN5PlJo2tv6JWAypgEqj%2FHZ0Zwmals0o9CKdI01h9xcrTstlsyzY74DYErqTOlIkW3AzJtm5qrixA97oM%2BaHb2igg3m8uUKbYT8zUoC65BNCFGsKRD9eTOeMZkTsdVbaBiarzFe%2FDMLDvidv3JzEyFaeOXa7%2Fn9THhabK6Lo2z56tjadzw1j0A%2BRAxReSnqwcOIwmtGZOnMJr%2B5sEGOqUBY1cKZvxulkhQ%2BczKC821k2TiqjU5PbSisP%2Fklfw4yCLTOjGJN88sCLp47%2FWKkLCCKKNWOgUW3FUmU6LmYk53qDaHlB1hSF5ZLMJ7vgbKdkNfqPQEX7VI4aJplapK0fnI50gi6N%2Bmp4jTqsLlGv091WqaDcQ%2BXBKt2nT1uGg2ZSSPpkFiwPXlNXXGmD7vCd9Eki34HfU6fDlZv%2FbpaFY%2FX6c0s6aI&X-Amz-Signature=e3ad8cd5f18bb59b4ce47217805c53a2fa58fd4dfd23fca5e5f68c3117d3ff48&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2SC52N%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqHBVLw%2B1ztgSNkqV%2BS9jtrbuUbgk5t%2FuR9a4%2BK57DHAiEAryWDfEiFoqoJAZc6pzx%2BJboxCa9Be%2B%2Bv8SEjEursGkwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNVC49r4T6%2Fj3p5JyrcA7NBgeUKBtb%2B%2BirVLJGb9FF4VrIzkQQEbbKf1fm4g4V9zOjK1X2NfZdnnDB7f1DIwaRCDILAKsDWdZyn5L5Z22rZdxuOK%2BXblPQHwbdmj0Uv2KpmQEyIL4AgQloN5jjM01I3PblBVHTdUtJhRu3RvqpNOP%2BzTOYGIH08pdtqtATil03aOMJo72sxWxdt3UTKaEPHKwbn2ELaHRy1LNx5JzDS%2Fm3yrL%2BCls1oAirAZnpRFKRX5Jo1kWt3zj2CqMzHmUjTjYgh%2FP5J3PnCvV611LLwOOr4izFFrgn0jrfpEADirSdqCglwWz9YoP%2FZ9WmF9zJDo6Nur3%2BcrxQ0GuGIFb35T%2F77%2Fz%2BzzBlxgfDddmkpMXvhGTczElwzJoRxqlf1bVeQDb2p8lLRY5hMD859ljjuuzVMhzk9qrRpBaL3taIEIQ%2Bc6XVN5PlJo2tv6JWAypgEqj%2FHZ0Zwmals0o9CKdI01h9xcrTstlsyzY74DYErqTOlIkW3AzJtm5qrixA97oM%2BaHb2igg3m8uUKbYT8zUoC65BNCFGsKRD9eTOeMZkTsdVbaBiarzFe%2FDMLDvidv3JzEyFaeOXa7%2Fn9THhabK6Lo2z56tjadzw1j0A%2BRAxReSnqwcOIwmtGZOnMJr%2B5sEGOqUBY1cKZvxulkhQ%2BczKC821k2TiqjU5PbSisP%2Fklfw4yCLTOjGJN88sCLp47%2FWKkLCCKKNWOgUW3FUmU6LmYk53qDaHlB1hSF5ZLMJ7vgbKdkNfqPQEX7VI4aJplapK0fnI50gi6N%2Bmp4jTqsLlGv091WqaDcQ%2BXBKt2nT1uGg2ZSSPpkFiwPXlNXXGmD7vCd9Eki34HfU6fDlZv%2FbpaFY%2FX6c0s6aI&X-Amz-Signature=558fac7118088cc8ec96124bac0d63a343a54cff21370a7d0df41ba6da20e979&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2SC52N%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqHBVLw%2B1ztgSNkqV%2BS9jtrbuUbgk5t%2FuR9a4%2BK57DHAiEAryWDfEiFoqoJAZc6pzx%2BJboxCa9Be%2B%2Bv8SEjEursGkwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNVC49r4T6%2Fj3p5JyrcA7NBgeUKBtb%2B%2BirVLJGb9FF4VrIzkQQEbbKf1fm4g4V9zOjK1X2NfZdnnDB7f1DIwaRCDILAKsDWdZyn5L5Z22rZdxuOK%2BXblPQHwbdmj0Uv2KpmQEyIL4AgQloN5jjM01I3PblBVHTdUtJhRu3RvqpNOP%2BzTOYGIH08pdtqtATil03aOMJo72sxWxdt3UTKaEPHKwbn2ELaHRy1LNx5JzDS%2Fm3yrL%2BCls1oAirAZnpRFKRX5Jo1kWt3zj2CqMzHmUjTjYgh%2FP5J3PnCvV611LLwOOr4izFFrgn0jrfpEADirSdqCglwWz9YoP%2FZ9WmF9zJDo6Nur3%2BcrxQ0GuGIFb35T%2F77%2Fz%2BzzBlxgfDddmkpMXvhGTczElwzJoRxqlf1bVeQDb2p8lLRY5hMD859ljjuuzVMhzk9qrRpBaL3taIEIQ%2Bc6XVN5PlJo2tv6JWAypgEqj%2FHZ0Zwmals0o9CKdI01h9xcrTstlsyzY74DYErqTOlIkW3AzJtm5qrixA97oM%2BaHb2igg3m8uUKbYT8zUoC65BNCFGsKRD9eTOeMZkTsdVbaBiarzFe%2FDMLDvidv3JzEyFaeOXa7%2Fn9THhabK6Lo2z56tjadzw1j0A%2BRAxReSnqwcOIwmtGZOnMJr%2B5sEGOqUBY1cKZvxulkhQ%2BczKC821k2TiqjU5PbSisP%2Fklfw4yCLTOjGJN88sCLp47%2FWKkLCCKKNWOgUW3FUmU6LmYk53qDaHlB1hSF5ZLMJ7vgbKdkNfqPQEX7VI4aJplapK0fnI50gi6N%2Bmp4jTqsLlGv091WqaDcQ%2BXBKt2nT1uGg2ZSSPpkFiwPXlNXXGmD7vCd9Eki34HfU6fDlZv%2FbpaFY%2FX6c0s6aI&X-Amz-Signature=647753ca47dd618223e1f366238cf0b5eeec917d42e1ff476dc19632daf582ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2SC52N%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqHBVLw%2B1ztgSNkqV%2BS9jtrbuUbgk5t%2FuR9a4%2BK57DHAiEAryWDfEiFoqoJAZc6pzx%2BJboxCa9Be%2B%2Bv8SEjEursGkwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNVC49r4T6%2Fj3p5JyrcA7NBgeUKBtb%2B%2BirVLJGb9FF4VrIzkQQEbbKf1fm4g4V9zOjK1X2NfZdnnDB7f1DIwaRCDILAKsDWdZyn5L5Z22rZdxuOK%2BXblPQHwbdmj0Uv2KpmQEyIL4AgQloN5jjM01I3PblBVHTdUtJhRu3RvqpNOP%2BzTOYGIH08pdtqtATil03aOMJo72sxWxdt3UTKaEPHKwbn2ELaHRy1LNx5JzDS%2Fm3yrL%2BCls1oAirAZnpRFKRX5Jo1kWt3zj2CqMzHmUjTjYgh%2FP5J3PnCvV611LLwOOr4izFFrgn0jrfpEADirSdqCglwWz9YoP%2FZ9WmF9zJDo6Nur3%2BcrxQ0GuGIFb35T%2F77%2Fz%2BzzBlxgfDddmkpMXvhGTczElwzJoRxqlf1bVeQDb2p8lLRY5hMD859ljjuuzVMhzk9qrRpBaL3taIEIQ%2Bc6XVN5PlJo2tv6JWAypgEqj%2FHZ0Zwmals0o9CKdI01h9xcrTstlsyzY74DYErqTOlIkW3AzJtm5qrixA97oM%2BaHb2igg3m8uUKbYT8zUoC65BNCFGsKRD9eTOeMZkTsdVbaBiarzFe%2FDMLDvidv3JzEyFaeOXa7%2Fn9THhabK6Lo2z56tjadzw1j0A%2BRAxReSnqwcOIwmtGZOnMJr%2B5sEGOqUBY1cKZvxulkhQ%2BczKC821k2TiqjU5PbSisP%2Fklfw4yCLTOjGJN88sCLp47%2FWKkLCCKKNWOgUW3FUmU6LmYk53qDaHlB1hSF5ZLMJ7vgbKdkNfqPQEX7VI4aJplapK0fnI50gi6N%2Bmp4jTqsLlGv091WqaDcQ%2BXBKt2nT1uGg2ZSSPpkFiwPXlNXXGmD7vCd9Eki34HfU6fDlZv%2FbpaFY%2FX6c0s6aI&X-Amz-Signature=e887dae0dbb2928bd25c0ea0c8ed31c81293abc8dab195586980512f1e915d96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2SC52N%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqHBVLw%2B1ztgSNkqV%2BS9jtrbuUbgk5t%2FuR9a4%2BK57DHAiEAryWDfEiFoqoJAZc6pzx%2BJboxCa9Be%2B%2Bv8SEjEursGkwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNVC49r4T6%2Fj3p5JyrcA7NBgeUKBtb%2B%2BirVLJGb9FF4VrIzkQQEbbKf1fm4g4V9zOjK1X2NfZdnnDB7f1DIwaRCDILAKsDWdZyn5L5Z22rZdxuOK%2BXblPQHwbdmj0Uv2KpmQEyIL4AgQloN5jjM01I3PblBVHTdUtJhRu3RvqpNOP%2BzTOYGIH08pdtqtATil03aOMJo72sxWxdt3UTKaEPHKwbn2ELaHRy1LNx5JzDS%2Fm3yrL%2BCls1oAirAZnpRFKRX5Jo1kWt3zj2CqMzHmUjTjYgh%2FP5J3PnCvV611LLwOOr4izFFrgn0jrfpEADirSdqCglwWz9YoP%2FZ9WmF9zJDo6Nur3%2BcrxQ0GuGIFb35T%2F77%2Fz%2BzzBlxgfDddmkpMXvhGTczElwzJoRxqlf1bVeQDb2p8lLRY5hMD859ljjuuzVMhzk9qrRpBaL3taIEIQ%2Bc6XVN5PlJo2tv6JWAypgEqj%2FHZ0Zwmals0o9CKdI01h9xcrTstlsyzY74DYErqTOlIkW3AzJtm5qrixA97oM%2BaHb2igg3m8uUKbYT8zUoC65BNCFGsKRD9eTOeMZkTsdVbaBiarzFe%2FDMLDvidv3JzEyFaeOXa7%2Fn9THhabK6Lo2z56tjadzw1j0A%2BRAxReSnqwcOIwmtGZOnMJr%2B5sEGOqUBY1cKZvxulkhQ%2BczKC821k2TiqjU5PbSisP%2Fklfw4yCLTOjGJN88sCLp47%2FWKkLCCKKNWOgUW3FUmU6LmYk53qDaHlB1hSF5ZLMJ7vgbKdkNfqPQEX7VI4aJplapK0fnI50gi6N%2Bmp4jTqsLlGv091WqaDcQ%2BXBKt2nT1uGg2ZSSPpkFiwPXlNXXGmD7vCd9Eki34HfU6fDlZv%2FbpaFY%2FX6c0s6aI&X-Amz-Signature=e5f15f728d862d83f7c08dbcad0056b38a7eb883784aafaf6b5cf5e53aa874a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2SC52N%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqHBVLw%2B1ztgSNkqV%2BS9jtrbuUbgk5t%2FuR9a4%2BK57DHAiEAryWDfEiFoqoJAZc6pzx%2BJboxCa9Be%2B%2Bv8SEjEursGkwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNVC49r4T6%2Fj3p5JyrcA7NBgeUKBtb%2B%2BirVLJGb9FF4VrIzkQQEbbKf1fm4g4V9zOjK1X2NfZdnnDB7f1DIwaRCDILAKsDWdZyn5L5Z22rZdxuOK%2BXblPQHwbdmj0Uv2KpmQEyIL4AgQloN5jjM01I3PblBVHTdUtJhRu3RvqpNOP%2BzTOYGIH08pdtqtATil03aOMJo72sxWxdt3UTKaEPHKwbn2ELaHRy1LNx5JzDS%2Fm3yrL%2BCls1oAirAZnpRFKRX5Jo1kWt3zj2CqMzHmUjTjYgh%2FP5J3PnCvV611LLwOOr4izFFrgn0jrfpEADirSdqCglwWz9YoP%2FZ9WmF9zJDo6Nur3%2BcrxQ0GuGIFb35T%2F77%2Fz%2BzzBlxgfDddmkpMXvhGTczElwzJoRxqlf1bVeQDb2p8lLRY5hMD859ljjuuzVMhzk9qrRpBaL3taIEIQ%2Bc6XVN5PlJo2tv6JWAypgEqj%2FHZ0Zwmals0o9CKdI01h9xcrTstlsyzY74DYErqTOlIkW3AzJtm5qrixA97oM%2BaHb2igg3m8uUKbYT8zUoC65BNCFGsKRD9eTOeMZkTsdVbaBiarzFe%2FDMLDvidv3JzEyFaeOXa7%2Fn9THhabK6Lo2z56tjadzw1j0A%2BRAxReSnqwcOIwmtGZOnMJr%2B5sEGOqUBY1cKZvxulkhQ%2BczKC821k2TiqjU5PbSisP%2Fklfw4yCLTOjGJN88sCLp47%2FWKkLCCKKNWOgUW3FUmU6LmYk53qDaHlB1hSF5ZLMJ7vgbKdkNfqPQEX7VI4aJplapK0fnI50gi6N%2Bmp4jTqsLlGv091WqaDcQ%2BXBKt2nT1uGg2ZSSPpkFiwPXlNXXGmD7vCd9Eki34HfU6fDlZv%2FbpaFY%2FX6c0s6aI&X-Amz-Signature=dc0012923f73130e3f85d2878f215bf36ec10939fe8cf0ad22d299cced4f60e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2SC52N%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqHBVLw%2B1ztgSNkqV%2BS9jtrbuUbgk5t%2FuR9a4%2BK57DHAiEAryWDfEiFoqoJAZc6pzx%2BJboxCa9Be%2B%2Bv8SEjEursGkwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNVC49r4T6%2Fj3p5JyrcA7NBgeUKBtb%2B%2BirVLJGb9FF4VrIzkQQEbbKf1fm4g4V9zOjK1X2NfZdnnDB7f1DIwaRCDILAKsDWdZyn5L5Z22rZdxuOK%2BXblPQHwbdmj0Uv2KpmQEyIL4AgQloN5jjM01I3PblBVHTdUtJhRu3RvqpNOP%2BzTOYGIH08pdtqtATil03aOMJo72sxWxdt3UTKaEPHKwbn2ELaHRy1LNx5JzDS%2Fm3yrL%2BCls1oAirAZnpRFKRX5Jo1kWt3zj2CqMzHmUjTjYgh%2FP5J3PnCvV611LLwOOr4izFFrgn0jrfpEADirSdqCglwWz9YoP%2FZ9WmF9zJDo6Nur3%2BcrxQ0GuGIFb35T%2F77%2Fz%2BzzBlxgfDddmkpMXvhGTczElwzJoRxqlf1bVeQDb2p8lLRY5hMD859ljjuuzVMhzk9qrRpBaL3taIEIQ%2Bc6XVN5PlJo2tv6JWAypgEqj%2FHZ0Zwmals0o9CKdI01h9xcrTstlsyzY74DYErqTOlIkW3AzJtm5qrixA97oM%2BaHb2igg3m8uUKbYT8zUoC65BNCFGsKRD9eTOeMZkTsdVbaBiarzFe%2FDMLDvidv3JzEyFaeOXa7%2Fn9THhabK6Lo2z56tjadzw1j0A%2BRAxReSnqwcOIwmtGZOnMJr%2B5sEGOqUBY1cKZvxulkhQ%2BczKC821k2TiqjU5PbSisP%2Fklfw4yCLTOjGJN88sCLp47%2FWKkLCCKKNWOgUW3FUmU6LmYk53qDaHlB1hSF5ZLMJ7vgbKdkNfqPQEX7VI4aJplapK0fnI50gi6N%2Bmp4jTqsLlGv091WqaDcQ%2BXBKt2nT1uGg2ZSSPpkFiwPXlNXXGmD7vCd9Eki34HfU6fDlZv%2FbpaFY%2FX6c0s6aI&X-Amz-Signature=0c7ecb22b9a40a866bc3d9ebf77877a33c95268db4fb24f4f8cc87fadb99143f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

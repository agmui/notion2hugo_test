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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=284de790fd2e5b0a6a6f0beda3bdc0133d14d4a6be7e293b3c2cf3e1e1386dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=cb06ac736b011c01dfa4fd7f43ba2a328a1e3287992384303a6147980108fe2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=c08d744b648368cef3c0da2cb3a946ebc6aeff8c61c103c87a852fb3aceabbe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=437c158378e0113ebd8e79dfcdd73309bab2be964eb18d8130d88d8ba5f49893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=d36a7634c27b04fe0d0af2adf4504e162f8f9436d0e7bff2a81ed16405d36daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=3151e66c8e255063a4f1236b9ea2ae85591676bdec1c44719c76879ccd232d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=2443a45eea35c9bb160fcf0a396a678e60849e8d494a4b079601cdeaf85f124a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=6c2c719e2273e277a0de8558ac8e167c4a61ea7ce6a161686f95fe5361666a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

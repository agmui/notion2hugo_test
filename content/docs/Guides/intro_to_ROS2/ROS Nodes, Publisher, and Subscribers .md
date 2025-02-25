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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOLGEE6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLBUttFd%2Bln%2FJWB6Zihr%2FxzhYlnw4GwApWYZIN%2BBWrOgIgW%2BZVxN4hMpPeoqsDzw0TldVLGiYHYZ%2FR3e5B%2Bk2GZR4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH3GIDuRblvEXMRlzCrcAxoIUZ1fUJogxj3mt23V9eyovGMic%2BDZ9OKZjqfndCTM4bpdbj%2FgJwpzjfdDvmGNgs5VMFp8sVuA%2B4x2mSWslW6oHE82wCgbboJb15KM1cIldGV9QMFE183W3uaMovb37SHzViha39vwUAovk7dFEMxMxMKSw1pfxDOOs0LzftOPKqrTsHSAmheRlbsvsE%2BPFr%2BJ3j3riAYeD%2BGdb1bUzLSPcSHWYdQzhTd3EoBVRD0r%2BJnBAlbBOuV2x5fa0dvhHuYZ9wzBzRc5ZyuOvc8GcKeD6QJsKKWvFWaHjpclzfYetQ8LRKKkx7Q8cdNCm2R%2BXCO6dMF3MJSZXSZut%2F0K9zx0Q%2F3BIGcAjUnQOUSf6kopLQpQiw%2BUNa%2BQ%2B6zequ%2F4YqG2XaUrCSrAqxiX%2BGNJHvIRPFmdZcOCwu%2BHu9%2Bt5gomuSL6d7zN%2Ba2G7quc9BluN83KoFFAPRJE5D3GFmrvksMutNd93oXEYNzmSoLm3XWhGueE9Wub0kWE0HPum20gMkjRea4G2i4Kbj1JDSQVBOslZqzWDPo8h0vRIPLa%2Bd3Ox%2FUbqElY1jwxkiGQ5IwZgGzwBk7%2Bv%2BrVpQ9OtqkU1cRTP43kIkOVfM1Nd8NuxefXNrdj30fgx3s4BcUoMNaC9L0GOqUBkHU55BxHUTkusQadVNsEhcfyof%2FY%2FLWyUV0%2BLwbuGOM3XsRE2ha10XLWmQo7%2BT9S9x7XP4w1Q1Z1Cm7UzKU9IVdhEtWhEZ33Iz7XMTVwYv7KTDU7cVe%2Faj4Z8ESY2XRmuAO6F6UzjKibXlc8l6fNtn0RXCfIT1aAOjF8l7zeTI8AYWKEwsLzDUi45cRZ8t92BKrFGTytP3D0KTjdQIxDlX5TXb1k&X-Amz-Signature=e48141ed66f24294ba85808823e3326866b389579c8b61cf2f02e59d4752e68c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOLGEE6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLBUttFd%2Bln%2FJWB6Zihr%2FxzhYlnw4GwApWYZIN%2BBWrOgIgW%2BZVxN4hMpPeoqsDzw0TldVLGiYHYZ%2FR3e5B%2Bk2GZR4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH3GIDuRblvEXMRlzCrcAxoIUZ1fUJogxj3mt23V9eyovGMic%2BDZ9OKZjqfndCTM4bpdbj%2FgJwpzjfdDvmGNgs5VMFp8sVuA%2B4x2mSWslW6oHE82wCgbboJb15KM1cIldGV9QMFE183W3uaMovb37SHzViha39vwUAovk7dFEMxMxMKSw1pfxDOOs0LzftOPKqrTsHSAmheRlbsvsE%2BPFr%2BJ3j3riAYeD%2BGdb1bUzLSPcSHWYdQzhTd3EoBVRD0r%2BJnBAlbBOuV2x5fa0dvhHuYZ9wzBzRc5ZyuOvc8GcKeD6QJsKKWvFWaHjpclzfYetQ8LRKKkx7Q8cdNCm2R%2BXCO6dMF3MJSZXSZut%2F0K9zx0Q%2F3BIGcAjUnQOUSf6kopLQpQiw%2BUNa%2BQ%2B6zequ%2F4YqG2XaUrCSrAqxiX%2BGNJHvIRPFmdZcOCwu%2BHu9%2Bt5gomuSL6d7zN%2Ba2G7quc9BluN83KoFFAPRJE5D3GFmrvksMutNd93oXEYNzmSoLm3XWhGueE9Wub0kWE0HPum20gMkjRea4G2i4Kbj1JDSQVBOslZqzWDPo8h0vRIPLa%2Bd3Ox%2FUbqElY1jwxkiGQ5IwZgGzwBk7%2Bv%2BrVpQ9OtqkU1cRTP43kIkOVfM1Nd8NuxefXNrdj30fgx3s4BcUoMNaC9L0GOqUBkHU55BxHUTkusQadVNsEhcfyof%2FY%2FLWyUV0%2BLwbuGOM3XsRE2ha10XLWmQo7%2BT9S9x7XP4w1Q1Z1Cm7UzKU9IVdhEtWhEZ33Iz7XMTVwYv7KTDU7cVe%2Faj4Z8ESY2XRmuAO6F6UzjKibXlc8l6fNtn0RXCfIT1aAOjF8l7zeTI8AYWKEwsLzDUi45cRZ8t92BKrFGTytP3D0KTjdQIxDlX5TXb1k&X-Amz-Signature=0f63ce3e8b9c5d42558b604078989413e3b86a1492c8606401bfcef3e8c2aee5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOLGEE6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLBUttFd%2Bln%2FJWB6Zihr%2FxzhYlnw4GwApWYZIN%2BBWrOgIgW%2BZVxN4hMpPeoqsDzw0TldVLGiYHYZ%2FR3e5B%2Bk2GZR4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH3GIDuRblvEXMRlzCrcAxoIUZ1fUJogxj3mt23V9eyovGMic%2BDZ9OKZjqfndCTM4bpdbj%2FgJwpzjfdDvmGNgs5VMFp8sVuA%2B4x2mSWslW6oHE82wCgbboJb15KM1cIldGV9QMFE183W3uaMovb37SHzViha39vwUAovk7dFEMxMxMKSw1pfxDOOs0LzftOPKqrTsHSAmheRlbsvsE%2BPFr%2BJ3j3riAYeD%2BGdb1bUzLSPcSHWYdQzhTd3EoBVRD0r%2BJnBAlbBOuV2x5fa0dvhHuYZ9wzBzRc5ZyuOvc8GcKeD6QJsKKWvFWaHjpclzfYetQ8LRKKkx7Q8cdNCm2R%2BXCO6dMF3MJSZXSZut%2F0K9zx0Q%2F3BIGcAjUnQOUSf6kopLQpQiw%2BUNa%2BQ%2B6zequ%2F4YqG2XaUrCSrAqxiX%2BGNJHvIRPFmdZcOCwu%2BHu9%2Bt5gomuSL6d7zN%2Ba2G7quc9BluN83KoFFAPRJE5D3GFmrvksMutNd93oXEYNzmSoLm3XWhGueE9Wub0kWE0HPum20gMkjRea4G2i4Kbj1JDSQVBOslZqzWDPo8h0vRIPLa%2Bd3Ox%2FUbqElY1jwxkiGQ5IwZgGzwBk7%2Bv%2BrVpQ9OtqkU1cRTP43kIkOVfM1Nd8NuxefXNrdj30fgx3s4BcUoMNaC9L0GOqUBkHU55BxHUTkusQadVNsEhcfyof%2FY%2FLWyUV0%2BLwbuGOM3XsRE2ha10XLWmQo7%2BT9S9x7XP4w1Q1Z1Cm7UzKU9IVdhEtWhEZ33Iz7XMTVwYv7KTDU7cVe%2Faj4Z8ESY2XRmuAO6F6UzjKibXlc8l6fNtn0RXCfIT1aAOjF8l7zeTI8AYWKEwsLzDUi45cRZ8t92BKrFGTytP3D0KTjdQIxDlX5TXb1k&X-Amz-Signature=50930036cb853bfc80769618c62cd3974f76af76010c360f53ecf6a6aa74082a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOLGEE6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLBUttFd%2Bln%2FJWB6Zihr%2FxzhYlnw4GwApWYZIN%2BBWrOgIgW%2BZVxN4hMpPeoqsDzw0TldVLGiYHYZ%2FR3e5B%2Bk2GZR4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH3GIDuRblvEXMRlzCrcAxoIUZ1fUJogxj3mt23V9eyovGMic%2BDZ9OKZjqfndCTM4bpdbj%2FgJwpzjfdDvmGNgs5VMFp8sVuA%2B4x2mSWslW6oHE82wCgbboJb15KM1cIldGV9QMFE183W3uaMovb37SHzViha39vwUAovk7dFEMxMxMKSw1pfxDOOs0LzftOPKqrTsHSAmheRlbsvsE%2BPFr%2BJ3j3riAYeD%2BGdb1bUzLSPcSHWYdQzhTd3EoBVRD0r%2BJnBAlbBOuV2x5fa0dvhHuYZ9wzBzRc5ZyuOvc8GcKeD6QJsKKWvFWaHjpclzfYetQ8LRKKkx7Q8cdNCm2R%2BXCO6dMF3MJSZXSZut%2F0K9zx0Q%2F3BIGcAjUnQOUSf6kopLQpQiw%2BUNa%2BQ%2B6zequ%2F4YqG2XaUrCSrAqxiX%2BGNJHvIRPFmdZcOCwu%2BHu9%2Bt5gomuSL6d7zN%2Ba2G7quc9BluN83KoFFAPRJE5D3GFmrvksMutNd93oXEYNzmSoLm3XWhGueE9Wub0kWE0HPum20gMkjRea4G2i4Kbj1JDSQVBOslZqzWDPo8h0vRIPLa%2Bd3Ox%2FUbqElY1jwxkiGQ5IwZgGzwBk7%2Bv%2BrVpQ9OtqkU1cRTP43kIkOVfM1Nd8NuxefXNrdj30fgx3s4BcUoMNaC9L0GOqUBkHU55BxHUTkusQadVNsEhcfyof%2FY%2FLWyUV0%2BLwbuGOM3XsRE2ha10XLWmQo7%2BT9S9x7XP4w1Q1Z1Cm7UzKU9IVdhEtWhEZ33Iz7XMTVwYv7KTDU7cVe%2Faj4Z8ESY2XRmuAO6F6UzjKibXlc8l6fNtn0RXCfIT1aAOjF8l7zeTI8AYWKEwsLzDUi45cRZ8t92BKrFGTytP3D0KTjdQIxDlX5TXb1k&X-Amz-Signature=d2f2129435b570edf9d1813d511cde41a8747c9848cccea4b68ef4a869c40299&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOLGEE6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLBUttFd%2Bln%2FJWB6Zihr%2FxzhYlnw4GwApWYZIN%2BBWrOgIgW%2BZVxN4hMpPeoqsDzw0TldVLGiYHYZ%2FR3e5B%2Bk2GZR4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH3GIDuRblvEXMRlzCrcAxoIUZ1fUJogxj3mt23V9eyovGMic%2BDZ9OKZjqfndCTM4bpdbj%2FgJwpzjfdDvmGNgs5VMFp8sVuA%2B4x2mSWslW6oHE82wCgbboJb15KM1cIldGV9QMFE183W3uaMovb37SHzViha39vwUAovk7dFEMxMxMKSw1pfxDOOs0LzftOPKqrTsHSAmheRlbsvsE%2BPFr%2BJ3j3riAYeD%2BGdb1bUzLSPcSHWYdQzhTd3EoBVRD0r%2BJnBAlbBOuV2x5fa0dvhHuYZ9wzBzRc5ZyuOvc8GcKeD6QJsKKWvFWaHjpclzfYetQ8LRKKkx7Q8cdNCm2R%2BXCO6dMF3MJSZXSZut%2F0K9zx0Q%2F3BIGcAjUnQOUSf6kopLQpQiw%2BUNa%2BQ%2B6zequ%2F4YqG2XaUrCSrAqxiX%2BGNJHvIRPFmdZcOCwu%2BHu9%2Bt5gomuSL6d7zN%2Ba2G7quc9BluN83KoFFAPRJE5D3GFmrvksMutNd93oXEYNzmSoLm3XWhGueE9Wub0kWE0HPum20gMkjRea4G2i4Kbj1JDSQVBOslZqzWDPo8h0vRIPLa%2Bd3Ox%2FUbqElY1jwxkiGQ5IwZgGzwBk7%2Bv%2BrVpQ9OtqkU1cRTP43kIkOVfM1Nd8NuxefXNrdj30fgx3s4BcUoMNaC9L0GOqUBkHU55BxHUTkusQadVNsEhcfyof%2FY%2FLWyUV0%2BLwbuGOM3XsRE2ha10XLWmQo7%2BT9S9x7XP4w1Q1Z1Cm7UzKU9IVdhEtWhEZ33Iz7XMTVwYv7KTDU7cVe%2Faj4Z8ESY2XRmuAO6F6UzjKibXlc8l6fNtn0RXCfIT1aAOjF8l7zeTI8AYWKEwsLzDUi45cRZ8t92BKrFGTytP3D0KTjdQIxDlX5TXb1k&X-Amz-Signature=b27677b2a512363dfec9410078449f90bdfc7ef1fcd29fff3a9a056a5f974f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOLGEE6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLBUttFd%2Bln%2FJWB6Zihr%2FxzhYlnw4GwApWYZIN%2BBWrOgIgW%2BZVxN4hMpPeoqsDzw0TldVLGiYHYZ%2FR3e5B%2Bk2GZR4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH3GIDuRblvEXMRlzCrcAxoIUZ1fUJogxj3mt23V9eyovGMic%2BDZ9OKZjqfndCTM4bpdbj%2FgJwpzjfdDvmGNgs5VMFp8sVuA%2B4x2mSWslW6oHE82wCgbboJb15KM1cIldGV9QMFE183W3uaMovb37SHzViha39vwUAovk7dFEMxMxMKSw1pfxDOOs0LzftOPKqrTsHSAmheRlbsvsE%2BPFr%2BJ3j3riAYeD%2BGdb1bUzLSPcSHWYdQzhTd3EoBVRD0r%2BJnBAlbBOuV2x5fa0dvhHuYZ9wzBzRc5ZyuOvc8GcKeD6QJsKKWvFWaHjpclzfYetQ8LRKKkx7Q8cdNCm2R%2BXCO6dMF3MJSZXSZut%2F0K9zx0Q%2F3BIGcAjUnQOUSf6kopLQpQiw%2BUNa%2BQ%2B6zequ%2F4YqG2XaUrCSrAqxiX%2BGNJHvIRPFmdZcOCwu%2BHu9%2Bt5gomuSL6d7zN%2Ba2G7quc9BluN83KoFFAPRJE5D3GFmrvksMutNd93oXEYNzmSoLm3XWhGueE9Wub0kWE0HPum20gMkjRea4G2i4Kbj1JDSQVBOslZqzWDPo8h0vRIPLa%2Bd3Ox%2FUbqElY1jwxkiGQ5IwZgGzwBk7%2Bv%2BrVpQ9OtqkU1cRTP43kIkOVfM1Nd8NuxefXNrdj30fgx3s4BcUoMNaC9L0GOqUBkHU55BxHUTkusQadVNsEhcfyof%2FY%2FLWyUV0%2BLwbuGOM3XsRE2ha10XLWmQo7%2BT9S9x7XP4w1Q1Z1Cm7UzKU9IVdhEtWhEZ33Iz7XMTVwYv7KTDU7cVe%2Faj4Z8ESY2XRmuAO6F6UzjKibXlc8l6fNtn0RXCfIT1aAOjF8l7zeTI8AYWKEwsLzDUi45cRZ8t92BKrFGTytP3D0KTjdQIxDlX5TXb1k&X-Amz-Signature=aded01c89a320c4a0466ba3ba07aa4204b3bebc2800f4864568ad05fed337a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOLGEE6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLBUttFd%2Bln%2FJWB6Zihr%2FxzhYlnw4GwApWYZIN%2BBWrOgIgW%2BZVxN4hMpPeoqsDzw0TldVLGiYHYZ%2FR3e5B%2Bk2GZR4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH3GIDuRblvEXMRlzCrcAxoIUZ1fUJogxj3mt23V9eyovGMic%2BDZ9OKZjqfndCTM4bpdbj%2FgJwpzjfdDvmGNgs5VMFp8sVuA%2B4x2mSWslW6oHE82wCgbboJb15KM1cIldGV9QMFE183W3uaMovb37SHzViha39vwUAovk7dFEMxMxMKSw1pfxDOOs0LzftOPKqrTsHSAmheRlbsvsE%2BPFr%2BJ3j3riAYeD%2BGdb1bUzLSPcSHWYdQzhTd3EoBVRD0r%2BJnBAlbBOuV2x5fa0dvhHuYZ9wzBzRc5ZyuOvc8GcKeD6QJsKKWvFWaHjpclzfYetQ8LRKKkx7Q8cdNCm2R%2BXCO6dMF3MJSZXSZut%2F0K9zx0Q%2F3BIGcAjUnQOUSf6kopLQpQiw%2BUNa%2BQ%2B6zequ%2F4YqG2XaUrCSrAqxiX%2BGNJHvIRPFmdZcOCwu%2BHu9%2Bt5gomuSL6d7zN%2Ba2G7quc9BluN83KoFFAPRJE5D3GFmrvksMutNd93oXEYNzmSoLm3XWhGueE9Wub0kWE0HPum20gMkjRea4G2i4Kbj1JDSQVBOslZqzWDPo8h0vRIPLa%2Bd3Ox%2FUbqElY1jwxkiGQ5IwZgGzwBk7%2Bv%2BrVpQ9OtqkU1cRTP43kIkOVfM1Nd8NuxefXNrdj30fgx3s4BcUoMNaC9L0GOqUBkHU55BxHUTkusQadVNsEhcfyof%2FY%2FLWyUV0%2BLwbuGOM3XsRE2ha10XLWmQo7%2BT9S9x7XP4w1Q1Z1Cm7UzKU9IVdhEtWhEZ33Iz7XMTVwYv7KTDU7cVe%2Faj4Z8ESY2XRmuAO6F6UzjKibXlc8l6fNtn0RXCfIT1aAOjF8l7zeTI8AYWKEwsLzDUi45cRZ8t92BKrFGTytP3D0KTjdQIxDlX5TXb1k&X-Amz-Signature=c8fc0def907896d7eead89e296939d36f063ebbfcd15961cb3c21a92b9f423cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JOLGEE6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCLBUttFd%2Bln%2FJWB6Zihr%2FxzhYlnw4GwApWYZIN%2BBWrOgIgW%2BZVxN4hMpPeoqsDzw0TldVLGiYHYZ%2FR3e5B%2Bk2GZR4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH3GIDuRblvEXMRlzCrcAxoIUZ1fUJogxj3mt23V9eyovGMic%2BDZ9OKZjqfndCTM4bpdbj%2FgJwpzjfdDvmGNgs5VMFp8sVuA%2B4x2mSWslW6oHE82wCgbboJb15KM1cIldGV9QMFE183W3uaMovb37SHzViha39vwUAovk7dFEMxMxMKSw1pfxDOOs0LzftOPKqrTsHSAmheRlbsvsE%2BPFr%2BJ3j3riAYeD%2BGdb1bUzLSPcSHWYdQzhTd3EoBVRD0r%2BJnBAlbBOuV2x5fa0dvhHuYZ9wzBzRc5ZyuOvc8GcKeD6QJsKKWvFWaHjpclzfYetQ8LRKKkx7Q8cdNCm2R%2BXCO6dMF3MJSZXSZut%2F0K9zx0Q%2F3BIGcAjUnQOUSf6kopLQpQiw%2BUNa%2BQ%2B6zequ%2F4YqG2XaUrCSrAqxiX%2BGNJHvIRPFmdZcOCwu%2BHu9%2Bt5gomuSL6d7zN%2Ba2G7quc9BluN83KoFFAPRJE5D3GFmrvksMutNd93oXEYNzmSoLm3XWhGueE9Wub0kWE0HPum20gMkjRea4G2i4Kbj1JDSQVBOslZqzWDPo8h0vRIPLa%2Bd3Ox%2FUbqElY1jwxkiGQ5IwZgGzwBk7%2Bv%2BrVpQ9OtqkU1cRTP43kIkOVfM1Nd8NuxefXNrdj30fgx3s4BcUoMNaC9L0GOqUBkHU55BxHUTkusQadVNsEhcfyof%2FY%2FLWyUV0%2BLwbuGOM3XsRE2ha10XLWmQo7%2BT9S9x7XP4w1Q1Z1Cm7UzKU9IVdhEtWhEZ33Iz7XMTVwYv7KTDU7cVe%2Faj4Z8ESY2XRmuAO6F6UzjKibXlc8l6fNtn0RXCfIT1aAOjF8l7zeTI8AYWKEwsLzDUi45cRZ8t92BKrFGTytP3D0KTjdQIxDlX5TXb1k&X-Amz-Signature=c34b76682db812de9fae8afe2b9bebfe6d86a9cf2c087c3ec7a07c92667b7b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

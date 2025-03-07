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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMF7YTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6Lnsv%2FKsml9XTF8%2BgDTDBnvC2hjD8Jv22a78QvCcfNAiAd7sO9ewazBIu0gk%2BJfB8n7GaiOhxGivl%2F8nmiB%2FkWBir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMT8LD1z7g7fUCz0UdKtwDcBC5d7OnLvZg8rFpX122hDKQ0MQLKgt6xj6G7lu%2FtxXDz6%2F2U2ECsSEyCsmgXrgxKptm59HhutcB0YM49XLW8v%2FUyzs0cK%2ByABkwcW0VEZNeFjRHBeyWSBBrWKTI9ubHj2zpj9o6IhRaUXleUaqzbqsGUVLPg8VE%2FnxzjmLwqz6xKrLAf5TnaYgJWOWoaGhzhMdaQn53omKGl9FCGFKRa1e95wzDcrOpaOtqbY11bXREyifJdGWbZ%2FBa2FAtrFPA%2FZy9mdyo3xBHsOOzGhQjgTkI8TjsRK%2Bd7OrtPslJgumOTiXZ%2F%2Bj5FR4r4PMs5yKVZAkTJN7SkQ2kcWiF14JLHc5dD9u6Qmhac3U4Prbwjow%2BH2IW1Wv0xXtMYX3806ClMEnxjBoZu1wwi3h6a2C5t5fgBnwo1sfAMRrxRC9zX6gh48AR8vGn4iL2PnxjyVEFZmlqjA5Hu4idqOfcDBkYsTlqxAfET6oCi64QxEPG8rbE1ILyp2fDGGGnpKdPrtl2YqzdxBYQuRw%2FV0L3Ln1st8D4IJsOo9B9v8QjPd2zExItNRVpvWiW4f0nfoNbNs5gaV8xMfhELm9e%2FZCwfBeEsD9LWCC1YyZM%2FK0FA14QVfUan%2BMYb29kA9c28Ugw8OmpvgY6pgE9qSnELXFFWRF72Y7NnEot1UN0d66YcOQRhBufgXXyEhOebI73P%2FdMITKhrSdO2ElYk7zc6jSN09FXKgpfpC%2FSPtEBF4VFYUGSY6woHa2ErKCZdR3W33%2ByA%2BrbtzOMv%2BFoCJwfZxSdK2snFF7v%2FeGduHaufMoDA%2Bkhh8ZJgC9WffOrpY1dJH%2F73hPkGKFDics%2B%2BS4uE7ssPMDdr1oBovzixkj%2FVe60&X-Amz-Signature=b2cae59bf68f6402f5bac533d39e984b316f7e71ddaf16c757992ab035f205d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMF7YTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6Lnsv%2FKsml9XTF8%2BgDTDBnvC2hjD8Jv22a78QvCcfNAiAd7sO9ewazBIu0gk%2BJfB8n7GaiOhxGivl%2F8nmiB%2FkWBir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMT8LD1z7g7fUCz0UdKtwDcBC5d7OnLvZg8rFpX122hDKQ0MQLKgt6xj6G7lu%2FtxXDz6%2F2U2ECsSEyCsmgXrgxKptm59HhutcB0YM49XLW8v%2FUyzs0cK%2ByABkwcW0VEZNeFjRHBeyWSBBrWKTI9ubHj2zpj9o6IhRaUXleUaqzbqsGUVLPg8VE%2FnxzjmLwqz6xKrLAf5TnaYgJWOWoaGhzhMdaQn53omKGl9FCGFKRa1e95wzDcrOpaOtqbY11bXREyifJdGWbZ%2FBa2FAtrFPA%2FZy9mdyo3xBHsOOzGhQjgTkI8TjsRK%2Bd7OrtPslJgumOTiXZ%2F%2Bj5FR4r4PMs5yKVZAkTJN7SkQ2kcWiF14JLHc5dD9u6Qmhac3U4Prbwjow%2BH2IW1Wv0xXtMYX3806ClMEnxjBoZu1wwi3h6a2C5t5fgBnwo1sfAMRrxRC9zX6gh48AR8vGn4iL2PnxjyVEFZmlqjA5Hu4idqOfcDBkYsTlqxAfET6oCi64QxEPG8rbE1ILyp2fDGGGnpKdPrtl2YqzdxBYQuRw%2FV0L3Ln1st8D4IJsOo9B9v8QjPd2zExItNRVpvWiW4f0nfoNbNs5gaV8xMfhELm9e%2FZCwfBeEsD9LWCC1YyZM%2FK0FA14QVfUan%2BMYb29kA9c28Ugw8OmpvgY6pgE9qSnELXFFWRF72Y7NnEot1UN0d66YcOQRhBufgXXyEhOebI73P%2FdMITKhrSdO2ElYk7zc6jSN09FXKgpfpC%2FSPtEBF4VFYUGSY6woHa2ErKCZdR3W33%2ByA%2BrbtzOMv%2BFoCJwfZxSdK2snFF7v%2FeGduHaufMoDA%2Bkhh8ZJgC9WffOrpY1dJH%2F73hPkGKFDics%2B%2BS4uE7ssPMDdr1oBovzixkj%2FVe60&X-Amz-Signature=9b803870d8f2845aa20edb9c36d582dec2c94a943d25b0dc210851481c68ccee&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMF7YTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6Lnsv%2FKsml9XTF8%2BgDTDBnvC2hjD8Jv22a78QvCcfNAiAd7sO9ewazBIu0gk%2BJfB8n7GaiOhxGivl%2F8nmiB%2FkWBir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMT8LD1z7g7fUCz0UdKtwDcBC5d7OnLvZg8rFpX122hDKQ0MQLKgt6xj6G7lu%2FtxXDz6%2F2U2ECsSEyCsmgXrgxKptm59HhutcB0YM49XLW8v%2FUyzs0cK%2ByABkwcW0VEZNeFjRHBeyWSBBrWKTI9ubHj2zpj9o6IhRaUXleUaqzbqsGUVLPg8VE%2FnxzjmLwqz6xKrLAf5TnaYgJWOWoaGhzhMdaQn53omKGl9FCGFKRa1e95wzDcrOpaOtqbY11bXREyifJdGWbZ%2FBa2FAtrFPA%2FZy9mdyo3xBHsOOzGhQjgTkI8TjsRK%2Bd7OrtPslJgumOTiXZ%2F%2Bj5FR4r4PMs5yKVZAkTJN7SkQ2kcWiF14JLHc5dD9u6Qmhac3U4Prbwjow%2BH2IW1Wv0xXtMYX3806ClMEnxjBoZu1wwi3h6a2C5t5fgBnwo1sfAMRrxRC9zX6gh48AR8vGn4iL2PnxjyVEFZmlqjA5Hu4idqOfcDBkYsTlqxAfET6oCi64QxEPG8rbE1ILyp2fDGGGnpKdPrtl2YqzdxBYQuRw%2FV0L3Ln1st8D4IJsOo9B9v8QjPd2zExItNRVpvWiW4f0nfoNbNs5gaV8xMfhELm9e%2FZCwfBeEsD9LWCC1YyZM%2FK0FA14QVfUan%2BMYb29kA9c28Ugw8OmpvgY6pgE9qSnELXFFWRF72Y7NnEot1UN0d66YcOQRhBufgXXyEhOebI73P%2FdMITKhrSdO2ElYk7zc6jSN09FXKgpfpC%2FSPtEBF4VFYUGSY6woHa2ErKCZdR3W33%2ByA%2BrbtzOMv%2BFoCJwfZxSdK2snFF7v%2FeGduHaufMoDA%2Bkhh8ZJgC9WffOrpY1dJH%2F73hPkGKFDics%2B%2BS4uE7ssPMDdr1oBovzixkj%2FVe60&X-Amz-Signature=ee103e976489f48dda5aed1485d9c607f242588d208698f6d5413e968b75b6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMF7YTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6Lnsv%2FKsml9XTF8%2BgDTDBnvC2hjD8Jv22a78QvCcfNAiAd7sO9ewazBIu0gk%2BJfB8n7GaiOhxGivl%2F8nmiB%2FkWBir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMT8LD1z7g7fUCz0UdKtwDcBC5d7OnLvZg8rFpX122hDKQ0MQLKgt6xj6G7lu%2FtxXDz6%2F2U2ECsSEyCsmgXrgxKptm59HhutcB0YM49XLW8v%2FUyzs0cK%2ByABkwcW0VEZNeFjRHBeyWSBBrWKTI9ubHj2zpj9o6IhRaUXleUaqzbqsGUVLPg8VE%2FnxzjmLwqz6xKrLAf5TnaYgJWOWoaGhzhMdaQn53omKGl9FCGFKRa1e95wzDcrOpaOtqbY11bXREyifJdGWbZ%2FBa2FAtrFPA%2FZy9mdyo3xBHsOOzGhQjgTkI8TjsRK%2Bd7OrtPslJgumOTiXZ%2F%2Bj5FR4r4PMs5yKVZAkTJN7SkQ2kcWiF14JLHc5dD9u6Qmhac3U4Prbwjow%2BH2IW1Wv0xXtMYX3806ClMEnxjBoZu1wwi3h6a2C5t5fgBnwo1sfAMRrxRC9zX6gh48AR8vGn4iL2PnxjyVEFZmlqjA5Hu4idqOfcDBkYsTlqxAfET6oCi64QxEPG8rbE1ILyp2fDGGGnpKdPrtl2YqzdxBYQuRw%2FV0L3Ln1st8D4IJsOo9B9v8QjPd2zExItNRVpvWiW4f0nfoNbNs5gaV8xMfhELm9e%2FZCwfBeEsD9LWCC1YyZM%2FK0FA14QVfUan%2BMYb29kA9c28Ugw8OmpvgY6pgE9qSnELXFFWRF72Y7NnEot1UN0d66YcOQRhBufgXXyEhOebI73P%2FdMITKhrSdO2ElYk7zc6jSN09FXKgpfpC%2FSPtEBF4VFYUGSY6woHa2ErKCZdR3W33%2ByA%2BrbtzOMv%2BFoCJwfZxSdK2snFF7v%2FeGduHaufMoDA%2Bkhh8ZJgC9WffOrpY1dJH%2F73hPkGKFDics%2B%2BS4uE7ssPMDdr1oBovzixkj%2FVe60&X-Amz-Signature=7c72d318ea5e3886c36000fe814c846a1f32795dbbcfcd940d10cc4f4cb46be2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMF7YTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6Lnsv%2FKsml9XTF8%2BgDTDBnvC2hjD8Jv22a78QvCcfNAiAd7sO9ewazBIu0gk%2BJfB8n7GaiOhxGivl%2F8nmiB%2FkWBir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMT8LD1z7g7fUCz0UdKtwDcBC5d7OnLvZg8rFpX122hDKQ0MQLKgt6xj6G7lu%2FtxXDz6%2F2U2ECsSEyCsmgXrgxKptm59HhutcB0YM49XLW8v%2FUyzs0cK%2ByABkwcW0VEZNeFjRHBeyWSBBrWKTI9ubHj2zpj9o6IhRaUXleUaqzbqsGUVLPg8VE%2FnxzjmLwqz6xKrLAf5TnaYgJWOWoaGhzhMdaQn53omKGl9FCGFKRa1e95wzDcrOpaOtqbY11bXREyifJdGWbZ%2FBa2FAtrFPA%2FZy9mdyo3xBHsOOzGhQjgTkI8TjsRK%2Bd7OrtPslJgumOTiXZ%2F%2Bj5FR4r4PMs5yKVZAkTJN7SkQ2kcWiF14JLHc5dD9u6Qmhac3U4Prbwjow%2BH2IW1Wv0xXtMYX3806ClMEnxjBoZu1wwi3h6a2C5t5fgBnwo1sfAMRrxRC9zX6gh48AR8vGn4iL2PnxjyVEFZmlqjA5Hu4idqOfcDBkYsTlqxAfET6oCi64QxEPG8rbE1ILyp2fDGGGnpKdPrtl2YqzdxBYQuRw%2FV0L3Ln1st8D4IJsOo9B9v8QjPd2zExItNRVpvWiW4f0nfoNbNs5gaV8xMfhELm9e%2FZCwfBeEsD9LWCC1YyZM%2FK0FA14QVfUan%2BMYb29kA9c28Ugw8OmpvgY6pgE9qSnELXFFWRF72Y7NnEot1UN0d66YcOQRhBufgXXyEhOebI73P%2FdMITKhrSdO2ElYk7zc6jSN09FXKgpfpC%2FSPtEBF4VFYUGSY6woHa2ErKCZdR3W33%2ByA%2BrbtzOMv%2BFoCJwfZxSdK2snFF7v%2FeGduHaufMoDA%2Bkhh8ZJgC9WffOrpY1dJH%2F73hPkGKFDics%2B%2BS4uE7ssPMDdr1oBovzixkj%2FVe60&X-Amz-Signature=b677cdf1d72eb63d8fc598d00426db474286d17491293798b0b362282549eb20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMF7YTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6Lnsv%2FKsml9XTF8%2BgDTDBnvC2hjD8Jv22a78QvCcfNAiAd7sO9ewazBIu0gk%2BJfB8n7GaiOhxGivl%2F8nmiB%2FkWBir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMT8LD1z7g7fUCz0UdKtwDcBC5d7OnLvZg8rFpX122hDKQ0MQLKgt6xj6G7lu%2FtxXDz6%2F2U2ECsSEyCsmgXrgxKptm59HhutcB0YM49XLW8v%2FUyzs0cK%2ByABkwcW0VEZNeFjRHBeyWSBBrWKTI9ubHj2zpj9o6IhRaUXleUaqzbqsGUVLPg8VE%2FnxzjmLwqz6xKrLAf5TnaYgJWOWoaGhzhMdaQn53omKGl9FCGFKRa1e95wzDcrOpaOtqbY11bXREyifJdGWbZ%2FBa2FAtrFPA%2FZy9mdyo3xBHsOOzGhQjgTkI8TjsRK%2Bd7OrtPslJgumOTiXZ%2F%2Bj5FR4r4PMs5yKVZAkTJN7SkQ2kcWiF14JLHc5dD9u6Qmhac3U4Prbwjow%2BH2IW1Wv0xXtMYX3806ClMEnxjBoZu1wwi3h6a2C5t5fgBnwo1sfAMRrxRC9zX6gh48AR8vGn4iL2PnxjyVEFZmlqjA5Hu4idqOfcDBkYsTlqxAfET6oCi64QxEPG8rbE1ILyp2fDGGGnpKdPrtl2YqzdxBYQuRw%2FV0L3Ln1st8D4IJsOo9B9v8QjPd2zExItNRVpvWiW4f0nfoNbNs5gaV8xMfhELm9e%2FZCwfBeEsD9LWCC1YyZM%2FK0FA14QVfUan%2BMYb29kA9c28Ugw8OmpvgY6pgE9qSnELXFFWRF72Y7NnEot1UN0d66YcOQRhBufgXXyEhOebI73P%2FdMITKhrSdO2ElYk7zc6jSN09FXKgpfpC%2FSPtEBF4VFYUGSY6woHa2ErKCZdR3W33%2ByA%2BrbtzOMv%2BFoCJwfZxSdK2snFF7v%2FeGduHaufMoDA%2Bkhh8ZJgC9WffOrpY1dJH%2F73hPkGKFDics%2B%2BS4uE7ssPMDdr1oBovzixkj%2FVe60&X-Amz-Signature=aa3a960f2612b2d932b4242a5910b8bf93c12b28533f7fa526fd5105457b04b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMF7YTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6Lnsv%2FKsml9XTF8%2BgDTDBnvC2hjD8Jv22a78QvCcfNAiAd7sO9ewazBIu0gk%2BJfB8n7GaiOhxGivl%2F8nmiB%2FkWBir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMT8LD1z7g7fUCz0UdKtwDcBC5d7OnLvZg8rFpX122hDKQ0MQLKgt6xj6G7lu%2FtxXDz6%2F2U2ECsSEyCsmgXrgxKptm59HhutcB0YM49XLW8v%2FUyzs0cK%2ByABkwcW0VEZNeFjRHBeyWSBBrWKTI9ubHj2zpj9o6IhRaUXleUaqzbqsGUVLPg8VE%2FnxzjmLwqz6xKrLAf5TnaYgJWOWoaGhzhMdaQn53omKGl9FCGFKRa1e95wzDcrOpaOtqbY11bXREyifJdGWbZ%2FBa2FAtrFPA%2FZy9mdyo3xBHsOOzGhQjgTkI8TjsRK%2Bd7OrtPslJgumOTiXZ%2F%2Bj5FR4r4PMs5yKVZAkTJN7SkQ2kcWiF14JLHc5dD9u6Qmhac3U4Prbwjow%2BH2IW1Wv0xXtMYX3806ClMEnxjBoZu1wwi3h6a2C5t5fgBnwo1sfAMRrxRC9zX6gh48AR8vGn4iL2PnxjyVEFZmlqjA5Hu4idqOfcDBkYsTlqxAfET6oCi64QxEPG8rbE1ILyp2fDGGGnpKdPrtl2YqzdxBYQuRw%2FV0L3Ln1st8D4IJsOo9B9v8QjPd2zExItNRVpvWiW4f0nfoNbNs5gaV8xMfhELm9e%2FZCwfBeEsD9LWCC1YyZM%2FK0FA14QVfUan%2BMYb29kA9c28Ugw8OmpvgY6pgE9qSnELXFFWRF72Y7NnEot1UN0d66YcOQRhBufgXXyEhOebI73P%2FdMITKhrSdO2ElYk7zc6jSN09FXKgpfpC%2FSPtEBF4VFYUGSY6woHa2ErKCZdR3W33%2ByA%2BrbtzOMv%2BFoCJwfZxSdK2snFF7v%2FeGduHaufMoDA%2Bkhh8ZJgC9WffOrpY1dJH%2F73hPkGKFDics%2B%2BS4uE7ssPMDdr1oBovzixkj%2FVe60&X-Amz-Signature=062f426ad5d76b02668eb5f136b4e1e3ef88f154d19426b1bcae5b51fc19d718&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMF7YTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6Lnsv%2FKsml9XTF8%2BgDTDBnvC2hjD8Jv22a78QvCcfNAiAd7sO9ewazBIu0gk%2BJfB8n7GaiOhxGivl%2F8nmiB%2FkWBir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMT8LD1z7g7fUCz0UdKtwDcBC5d7OnLvZg8rFpX122hDKQ0MQLKgt6xj6G7lu%2FtxXDz6%2F2U2ECsSEyCsmgXrgxKptm59HhutcB0YM49XLW8v%2FUyzs0cK%2ByABkwcW0VEZNeFjRHBeyWSBBrWKTI9ubHj2zpj9o6IhRaUXleUaqzbqsGUVLPg8VE%2FnxzjmLwqz6xKrLAf5TnaYgJWOWoaGhzhMdaQn53omKGl9FCGFKRa1e95wzDcrOpaOtqbY11bXREyifJdGWbZ%2FBa2FAtrFPA%2FZy9mdyo3xBHsOOzGhQjgTkI8TjsRK%2Bd7OrtPslJgumOTiXZ%2F%2Bj5FR4r4PMs5yKVZAkTJN7SkQ2kcWiF14JLHc5dD9u6Qmhac3U4Prbwjow%2BH2IW1Wv0xXtMYX3806ClMEnxjBoZu1wwi3h6a2C5t5fgBnwo1sfAMRrxRC9zX6gh48AR8vGn4iL2PnxjyVEFZmlqjA5Hu4idqOfcDBkYsTlqxAfET6oCi64QxEPG8rbE1ILyp2fDGGGnpKdPrtl2YqzdxBYQuRw%2FV0L3Ln1st8D4IJsOo9B9v8QjPd2zExItNRVpvWiW4f0nfoNbNs5gaV8xMfhELm9e%2FZCwfBeEsD9LWCC1YyZM%2FK0FA14QVfUan%2BMYb29kA9c28Ugw8OmpvgY6pgE9qSnELXFFWRF72Y7NnEot1UN0d66YcOQRhBufgXXyEhOebI73P%2FdMITKhrSdO2ElYk7zc6jSN09FXKgpfpC%2FSPtEBF4VFYUGSY6woHa2ErKCZdR3W33%2ByA%2BrbtzOMv%2BFoCJwfZxSdK2snFF7v%2FeGduHaufMoDA%2Bkhh8ZJgC9WffOrpY1dJH%2F73hPkGKFDics%2B%2BS4uE7ssPMDdr1oBovzixkj%2FVe60&X-Amz-Signature=3fcea6a56a5b147f26b9f5f70b6347761862a47e7ffea08b1e8ff1ecf958160f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

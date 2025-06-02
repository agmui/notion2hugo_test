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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDMNO6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2XaBkkMo8pkipEa4kBA%2BgqoxsAB5hZ2sDRkYHS06uVQIhAJods2%2Bt74XALv7ND2Sf3%2BumQXf3Njrj1aJhBM%2B4vTKeKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMjRR2BDL52wcjWpEq3AM%2FXGPKGQOxuh0TnT5tyBYCacz7ubNDec0B8uFEbD%2BHcgiS8afbFSp%2BI4WQmax85XN6CkCNGHAHFjf4DzIZbjYs3FMILK3hfOaUFa178aIsKaJmB3p2FQ5HfDlozGs13RL7BxqBTKBxkPZbA15AaNA2fpH1lYZtpRL2cJiMDuFWS%2BCringnl1fZquU78Pu7CJJ5ctDIy1Gx3c5l3TP6hPOLGYQlkrLTFo9ty0iBmpLBBj6049aCLZkUIZkn7rgh7h5rSsBCklBU8%2B9%2BP%2B77FfgRIaFTEPKKD4RZ4UwqpYMasj12Z9aO7LyTJXbKqpPPa5AWv0oFNvYpBg5dnd2Eh6Ed3OBXCAm3vZ2a%2F66lSihkHznzs1Z7yeFtuot0fJwpY2CE1UBRICEXhBnRiRFwIBwazv27kAKVAhTrbu%2BknIXM1wo9%2B58LH6RItE8jqLWDdfdRFttQaoC5reXinapqiHc1q9FMotwbojyggmxb8lzbW4noyLyDyAkMTe7%2FOayP5b%2FR2YKhXIjIswsgkEaix3Lv%2BRnRvFfF%2FfbFwt%2BLI299GrXDoLHjerQjpyn0wGgqCXiaea%2BgNGkhEVad6bjvPMU7kTJQmYiBUHV5twMX0CU%2BWmOb8oznwLVnfzM0wDD19PXBBjqkAdX8%2FLbKAH6tw5YJrXpwtIkvRJ6wvbSj7VlZj7WDNZfOcZgKdfPKFl60l%2FeSuJEKWngnHG2K8GP%2BoOulmUv4F1FgeTDAEpvbUrNtOwC6f3ZlupI9LA%2Bpy3oas34F4%2F30IvAZb1V1yQztvWQmGXIh%2F9GANUS%2BhNna7O1scEpT6pA5FQSvUDXLbha1Ltziw%2FX%2B6rBeit32MW2xHbiFqIl939azMTlM&X-Amz-Signature=a420ffedbdc960972d27a67588d5e0628ab36718d2f4968da73864800d3656d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDMNO6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2XaBkkMo8pkipEa4kBA%2BgqoxsAB5hZ2sDRkYHS06uVQIhAJods2%2Bt74XALv7ND2Sf3%2BumQXf3Njrj1aJhBM%2B4vTKeKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMjRR2BDL52wcjWpEq3AM%2FXGPKGQOxuh0TnT5tyBYCacz7ubNDec0B8uFEbD%2BHcgiS8afbFSp%2BI4WQmax85XN6CkCNGHAHFjf4DzIZbjYs3FMILK3hfOaUFa178aIsKaJmB3p2FQ5HfDlozGs13RL7BxqBTKBxkPZbA15AaNA2fpH1lYZtpRL2cJiMDuFWS%2BCringnl1fZquU78Pu7CJJ5ctDIy1Gx3c5l3TP6hPOLGYQlkrLTFo9ty0iBmpLBBj6049aCLZkUIZkn7rgh7h5rSsBCklBU8%2B9%2BP%2B77FfgRIaFTEPKKD4RZ4UwqpYMasj12Z9aO7LyTJXbKqpPPa5AWv0oFNvYpBg5dnd2Eh6Ed3OBXCAm3vZ2a%2F66lSihkHznzs1Z7yeFtuot0fJwpY2CE1UBRICEXhBnRiRFwIBwazv27kAKVAhTrbu%2BknIXM1wo9%2B58LH6RItE8jqLWDdfdRFttQaoC5reXinapqiHc1q9FMotwbojyggmxb8lzbW4noyLyDyAkMTe7%2FOayP5b%2FR2YKhXIjIswsgkEaix3Lv%2BRnRvFfF%2FfbFwt%2BLI299GrXDoLHjerQjpyn0wGgqCXiaea%2BgNGkhEVad6bjvPMU7kTJQmYiBUHV5twMX0CU%2BWmOb8oznwLVnfzM0wDD19PXBBjqkAdX8%2FLbKAH6tw5YJrXpwtIkvRJ6wvbSj7VlZj7WDNZfOcZgKdfPKFl60l%2FeSuJEKWngnHG2K8GP%2BoOulmUv4F1FgeTDAEpvbUrNtOwC6f3ZlupI9LA%2Bpy3oas34F4%2F30IvAZb1V1yQztvWQmGXIh%2F9GANUS%2BhNna7O1scEpT6pA5FQSvUDXLbha1Ltziw%2FX%2B6rBeit32MW2xHbiFqIl939azMTlM&X-Amz-Signature=2fff1019064528ff8f7649fe1cb483d4464366f9d8511bde2453bd6a21cc0bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDMNO6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2XaBkkMo8pkipEa4kBA%2BgqoxsAB5hZ2sDRkYHS06uVQIhAJods2%2Bt74XALv7ND2Sf3%2BumQXf3Njrj1aJhBM%2B4vTKeKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMjRR2BDL52wcjWpEq3AM%2FXGPKGQOxuh0TnT5tyBYCacz7ubNDec0B8uFEbD%2BHcgiS8afbFSp%2BI4WQmax85XN6CkCNGHAHFjf4DzIZbjYs3FMILK3hfOaUFa178aIsKaJmB3p2FQ5HfDlozGs13RL7BxqBTKBxkPZbA15AaNA2fpH1lYZtpRL2cJiMDuFWS%2BCringnl1fZquU78Pu7CJJ5ctDIy1Gx3c5l3TP6hPOLGYQlkrLTFo9ty0iBmpLBBj6049aCLZkUIZkn7rgh7h5rSsBCklBU8%2B9%2BP%2B77FfgRIaFTEPKKD4RZ4UwqpYMasj12Z9aO7LyTJXbKqpPPa5AWv0oFNvYpBg5dnd2Eh6Ed3OBXCAm3vZ2a%2F66lSihkHznzs1Z7yeFtuot0fJwpY2CE1UBRICEXhBnRiRFwIBwazv27kAKVAhTrbu%2BknIXM1wo9%2B58LH6RItE8jqLWDdfdRFttQaoC5reXinapqiHc1q9FMotwbojyggmxb8lzbW4noyLyDyAkMTe7%2FOayP5b%2FR2YKhXIjIswsgkEaix3Lv%2BRnRvFfF%2FfbFwt%2BLI299GrXDoLHjerQjpyn0wGgqCXiaea%2BgNGkhEVad6bjvPMU7kTJQmYiBUHV5twMX0CU%2BWmOb8oznwLVnfzM0wDD19PXBBjqkAdX8%2FLbKAH6tw5YJrXpwtIkvRJ6wvbSj7VlZj7WDNZfOcZgKdfPKFl60l%2FeSuJEKWngnHG2K8GP%2BoOulmUv4F1FgeTDAEpvbUrNtOwC6f3ZlupI9LA%2Bpy3oas34F4%2F30IvAZb1V1yQztvWQmGXIh%2F9GANUS%2BhNna7O1scEpT6pA5FQSvUDXLbha1Ltziw%2FX%2B6rBeit32MW2xHbiFqIl939azMTlM&X-Amz-Signature=e2b42b23c32f7818b6782aad91e4e7e802b67d47314bf553fa5045b348ef3294&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDMNO6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2XaBkkMo8pkipEa4kBA%2BgqoxsAB5hZ2sDRkYHS06uVQIhAJods2%2Bt74XALv7ND2Sf3%2BumQXf3Njrj1aJhBM%2B4vTKeKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMjRR2BDL52wcjWpEq3AM%2FXGPKGQOxuh0TnT5tyBYCacz7ubNDec0B8uFEbD%2BHcgiS8afbFSp%2BI4WQmax85XN6CkCNGHAHFjf4DzIZbjYs3FMILK3hfOaUFa178aIsKaJmB3p2FQ5HfDlozGs13RL7BxqBTKBxkPZbA15AaNA2fpH1lYZtpRL2cJiMDuFWS%2BCringnl1fZquU78Pu7CJJ5ctDIy1Gx3c5l3TP6hPOLGYQlkrLTFo9ty0iBmpLBBj6049aCLZkUIZkn7rgh7h5rSsBCklBU8%2B9%2BP%2B77FfgRIaFTEPKKD4RZ4UwqpYMasj12Z9aO7LyTJXbKqpPPa5AWv0oFNvYpBg5dnd2Eh6Ed3OBXCAm3vZ2a%2F66lSihkHznzs1Z7yeFtuot0fJwpY2CE1UBRICEXhBnRiRFwIBwazv27kAKVAhTrbu%2BknIXM1wo9%2B58LH6RItE8jqLWDdfdRFttQaoC5reXinapqiHc1q9FMotwbojyggmxb8lzbW4noyLyDyAkMTe7%2FOayP5b%2FR2YKhXIjIswsgkEaix3Lv%2BRnRvFfF%2FfbFwt%2BLI299GrXDoLHjerQjpyn0wGgqCXiaea%2BgNGkhEVad6bjvPMU7kTJQmYiBUHV5twMX0CU%2BWmOb8oznwLVnfzM0wDD19PXBBjqkAdX8%2FLbKAH6tw5YJrXpwtIkvRJ6wvbSj7VlZj7WDNZfOcZgKdfPKFl60l%2FeSuJEKWngnHG2K8GP%2BoOulmUv4F1FgeTDAEpvbUrNtOwC6f3ZlupI9LA%2Bpy3oas34F4%2F30IvAZb1V1yQztvWQmGXIh%2F9GANUS%2BhNna7O1scEpT6pA5FQSvUDXLbha1Ltziw%2FX%2B6rBeit32MW2xHbiFqIl939azMTlM&X-Amz-Signature=5b5e839363668ea7f91fbd99f9671d1af7427754f2d3e451b50b3cff3e9233d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDMNO6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2XaBkkMo8pkipEa4kBA%2BgqoxsAB5hZ2sDRkYHS06uVQIhAJods2%2Bt74XALv7ND2Sf3%2BumQXf3Njrj1aJhBM%2B4vTKeKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMjRR2BDL52wcjWpEq3AM%2FXGPKGQOxuh0TnT5tyBYCacz7ubNDec0B8uFEbD%2BHcgiS8afbFSp%2BI4WQmax85XN6CkCNGHAHFjf4DzIZbjYs3FMILK3hfOaUFa178aIsKaJmB3p2FQ5HfDlozGs13RL7BxqBTKBxkPZbA15AaNA2fpH1lYZtpRL2cJiMDuFWS%2BCringnl1fZquU78Pu7CJJ5ctDIy1Gx3c5l3TP6hPOLGYQlkrLTFo9ty0iBmpLBBj6049aCLZkUIZkn7rgh7h5rSsBCklBU8%2B9%2BP%2B77FfgRIaFTEPKKD4RZ4UwqpYMasj12Z9aO7LyTJXbKqpPPa5AWv0oFNvYpBg5dnd2Eh6Ed3OBXCAm3vZ2a%2F66lSihkHznzs1Z7yeFtuot0fJwpY2CE1UBRICEXhBnRiRFwIBwazv27kAKVAhTrbu%2BknIXM1wo9%2B58LH6RItE8jqLWDdfdRFttQaoC5reXinapqiHc1q9FMotwbojyggmxb8lzbW4noyLyDyAkMTe7%2FOayP5b%2FR2YKhXIjIswsgkEaix3Lv%2BRnRvFfF%2FfbFwt%2BLI299GrXDoLHjerQjpyn0wGgqCXiaea%2BgNGkhEVad6bjvPMU7kTJQmYiBUHV5twMX0CU%2BWmOb8oznwLVnfzM0wDD19PXBBjqkAdX8%2FLbKAH6tw5YJrXpwtIkvRJ6wvbSj7VlZj7WDNZfOcZgKdfPKFl60l%2FeSuJEKWngnHG2K8GP%2BoOulmUv4F1FgeTDAEpvbUrNtOwC6f3ZlupI9LA%2Bpy3oas34F4%2F30IvAZb1V1yQztvWQmGXIh%2F9GANUS%2BhNna7O1scEpT6pA5FQSvUDXLbha1Ltziw%2FX%2B6rBeit32MW2xHbiFqIl939azMTlM&X-Amz-Signature=9946f1c0ef3c49c5a13faf9cb3f1934e28695a10c492ed386841ac67964d34ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDMNO6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2XaBkkMo8pkipEa4kBA%2BgqoxsAB5hZ2sDRkYHS06uVQIhAJods2%2Bt74XALv7ND2Sf3%2BumQXf3Njrj1aJhBM%2B4vTKeKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMjRR2BDL52wcjWpEq3AM%2FXGPKGQOxuh0TnT5tyBYCacz7ubNDec0B8uFEbD%2BHcgiS8afbFSp%2BI4WQmax85XN6CkCNGHAHFjf4DzIZbjYs3FMILK3hfOaUFa178aIsKaJmB3p2FQ5HfDlozGs13RL7BxqBTKBxkPZbA15AaNA2fpH1lYZtpRL2cJiMDuFWS%2BCringnl1fZquU78Pu7CJJ5ctDIy1Gx3c5l3TP6hPOLGYQlkrLTFo9ty0iBmpLBBj6049aCLZkUIZkn7rgh7h5rSsBCklBU8%2B9%2BP%2B77FfgRIaFTEPKKD4RZ4UwqpYMasj12Z9aO7LyTJXbKqpPPa5AWv0oFNvYpBg5dnd2Eh6Ed3OBXCAm3vZ2a%2F66lSihkHznzs1Z7yeFtuot0fJwpY2CE1UBRICEXhBnRiRFwIBwazv27kAKVAhTrbu%2BknIXM1wo9%2B58LH6RItE8jqLWDdfdRFttQaoC5reXinapqiHc1q9FMotwbojyggmxb8lzbW4noyLyDyAkMTe7%2FOayP5b%2FR2YKhXIjIswsgkEaix3Lv%2BRnRvFfF%2FfbFwt%2BLI299GrXDoLHjerQjpyn0wGgqCXiaea%2BgNGkhEVad6bjvPMU7kTJQmYiBUHV5twMX0CU%2BWmOb8oznwLVnfzM0wDD19PXBBjqkAdX8%2FLbKAH6tw5YJrXpwtIkvRJ6wvbSj7VlZj7WDNZfOcZgKdfPKFl60l%2FeSuJEKWngnHG2K8GP%2BoOulmUv4F1FgeTDAEpvbUrNtOwC6f3ZlupI9LA%2Bpy3oas34F4%2F30IvAZb1V1yQztvWQmGXIh%2F9GANUS%2BhNna7O1scEpT6pA5FQSvUDXLbha1Ltziw%2FX%2B6rBeit32MW2xHbiFqIl939azMTlM&X-Amz-Signature=ebf6685e3b05aba51bc4f308201f1a3a46df42a1fe7483179ff923f52c2507f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDMNO6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2XaBkkMo8pkipEa4kBA%2BgqoxsAB5hZ2sDRkYHS06uVQIhAJods2%2Bt74XALv7ND2Sf3%2BumQXf3Njrj1aJhBM%2B4vTKeKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMjRR2BDL52wcjWpEq3AM%2FXGPKGQOxuh0TnT5tyBYCacz7ubNDec0B8uFEbD%2BHcgiS8afbFSp%2BI4WQmax85XN6CkCNGHAHFjf4DzIZbjYs3FMILK3hfOaUFa178aIsKaJmB3p2FQ5HfDlozGs13RL7BxqBTKBxkPZbA15AaNA2fpH1lYZtpRL2cJiMDuFWS%2BCringnl1fZquU78Pu7CJJ5ctDIy1Gx3c5l3TP6hPOLGYQlkrLTFo9ty0iBmpLBBj6049aCLZkUIZkn7rgh7h5rSsBCklBU8%2B9%2BP%2B77FfgRIaFTEPKKD4RZ4UwqpYMasj12Z9aO7LyTJXbKqpPPa5AWv0oFNvYpBg5dnd2Eh6Ed3OBXCAm3vZ2a%2F66lSihkHznzs1Z7yeFtuot0fJwpY2CE1UBRICEXhBnRiRFwIBwazv27kAKVAhTrbu%2BknIXM1wo9%2B58LH6RItE8jqLWDdfdRFttQaoC5reXinapqiHc1q9FMotwbojyggmxb8lzbW4noyLyDyAkMTe7%2FOayP5b%2FR2YKhXIjIswsgkEaix3Lv%2BRnRvFfF%2FfbFwt%2BLI299GrXDoLHjerQjpyn0wGgqCXiaea%2BgNGkhEVad6bjvPMU7kTJQmYiBUHV5twMX0CU%2BWmOb8oznwLVnfzM0wDD19PXBBjqkAdX8%2FLbKAH6tw5YJrXpwtIkvRJ6wvbSj7VlZj7WDNZfOcZgKdfPKFl60l%2FeSuJEKWngnHG2K8GP%2BoOulmUv4F1FgeTDAEpvbUrNtOwC6f3ZlupI9LA%2Bpy3oas34F4%2F30IvAZb1V1yQztvWQmGXIh%2F9GANUS%2BhNna7O1scEpT6pA5FQSvUDXLbha1Ltziw%2FX%2B6rBeit32MW2xHbiFqIl939azMTlM&X-Amz-Signature=28341b642ed4bbf9adf1b2f2e23bbabec0f62af60d05c7542c86b9823476eb6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDMNO6K%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2XaBkkMo8pkipEa4kBA%2BgqoxsAB5hZ2sDRkYHS06uVQIhAJods2%2Bt74XALv7ND2Sf3%2BumQXf3Njrj1aJhBM%2B4vTKeKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMjRR2BDL52wcjWpEq3AM%2FXGPKGQOxuh0TnT5tyBYCacz7ubNDec0B8uFEbD%2BHcgiS8afbFSp%2BI4WQmax85XN6CkCNGHAHFjf4DzIZbjYs3FMILK3hfOaUFa178aIsKaJmB3p2FQ5HfDlozGs13RL7BxqBTKBxkPZbA15AaNA2fpH1lYZtpRL2cJiMDuFWS%2BCringnl1fZquU78Pu7CJJ5ctDIy1Gx3c5l3TP6hPOLGYQlkrLTFo9ty0iBmpLBBj6049aCLZkUIZkn7rgh7h5rSsBCklBU8%2B9%2BP%2B77FfgRIaFTEPKKD4RZ4UwqpYMasj12Z9aO7LyTJXbKqpPPa5AWv0oFNvYpBg5dnd2Eh6Ed3OBXCAm3vZ2a%2F66lSihkHznzs1Z7yeFtuot0fJwpY2CE1UBRICEXhBnRiRFwIBwazv27kAKVAhTrbu%2BknIXM1wo9%2B58LH6RItE8jqLWDdfdRFttQaoC5reXinapqiHc1q9FMotwbojyggmxb8lzbW4noyLyDyAkMTe7%2FOayP5b%2FR2YKhXIjIswsgkEaix3Lv%2BRnRvFfF%2FfbFwt%2BLI299GrXDoLHjerQjpyn0wGgqCXiaea%2BgNGkhEVad6bjvPMU7kTJQmYiBUHV5twMX0CU%2BWmOb8oznwLVnfzM0wDD19PXBBjqkAdX8%2FLbKAH6tw5YJrXpwtIkvRJ6wvbSj7VlZj7WDNZfOcZgKdfPKFl60l%2FeSuJEKWngnHG2K8GP%2BoOulmUv4F1FgeTDAEpvbUrNtOwC6f3ZlupI9LA%2Bpy3oas34F4%2F30IvAZb1V1yQztvWQmGXIh%2F9GANUS%2BhNna7O1scEpT6pA5FQSvUDXLbha1Ltziw%2FX%2B6rBeit32MW2xHbiFqIl939azMTlM&X-Amz-Signature=9bb4d69c09ea6ae5463cc03a7dd170381d8bcbe7bb3aa7bb8ebfd5ad85419a05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

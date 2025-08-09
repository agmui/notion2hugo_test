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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHSBEU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBsGiqcu5rOrxIr2myedWGKfAGm69eYvtebs6jKHzrLIAiBdaSvlp4748rSb%2Fu6eKJ9ljwR5UQsQnDXxh5W3pemSoiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZbWT8ZLiTNOGQvBKtwDtmX6kbXyqJhDjmN%2FoFKI%2Fd6LCrZ2Xbti9v29BfRcJodYtRH8IDuMYx%2Btq9dZzQSOQhL7m0ynIaam9zdeTIUvNaUkSMAjbXhBA9rL2GBV9NSXH%2FWz8Vr19C0uJqCD93KTemXLYVm6uGYKLZc99YmsgpIRcfpXgoVvEZSzOD3dJHXaq8s60AJdjlZxgGxC38pAcI5uV79tckuB19IVAcJ%2FWMaqwhHbI%2F4eAUPwDHFGgB%2FwEP%2BEK32UCDsPnACKSHmW4QSmKOkPjobhW4mJEM4cPUJyoq3KlXlz%2B3R80SUHpwyAkeXEtKRhgAnAycXcPfO04Ib7R7CyierVzjzJy7ekBg8Sx6SVUz8xgMKIRJWCmiJh%2FWf%2BgztwFOObjgrp6En2A2AHsdpDjpCzQibmM68TLYNdpK92k9WUirzEVGdx%2B8%2FYO3kTG7b1U8nzxYW8IRHnmdSIuGXTdO7tag7uruHKcKrBONI%2BJmGpGXItMY86cPohkzq3w%2BS%2Bqx5YAgkzWFwZ%2FwtyXdH%2BMf0pTEEP4s%2B3YKVEFdb7rODYp2YRqKQGMrffY8ZCq81GBHWFiuzxGH%2BvSNsQDByq4tBIi74SsKrFRD%2B7AnpXdewgXz6oiotnCrDwa606Lb6laNVx9u8w0MTbxAY6pgHkavJ3PrPLZBOlPb%2BPpurINeG2822s0J0XGZ54yAlndMXRboUpOykDfir6skBcqzr%2BYXZJA8Tdr9dRjdVEKGOYhD8zDTUeq%2FyBvDomhyHkYblDgZdQ027O35poGoMoynTSdUtEKb66J48ON%2FkLfgcdZdRBUHOwioHxceHGT%2BdhPfSNeTkks11FEXuSRtAfnQ7%2BImxzgVPP%2B6vbKXpjH3jRw4fql4K0&X-Amz-Signature=e47f64498c29c25521e4e8ab1e8ce654cad345e2dfb03c7c57a96752e6420690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHSBEU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBsGiqcu5rOrxIr2myedWGKfAGm69eYvtebs6jKHzrLIAiBdaSvlp4748rSb%2Fu6eKJ9ljwR5UQsQnDXxh5W3pemSoiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZbWT8ZLiTNOGQvBKtwDtmX6kbXyqJhDjmN%2FoFKI%2Fd6LCrZ2Xbti9v29BfRcJodYtRH8IDuMYx%2Btq9dZzQSOQhL7m0ynIaam9zdeTIUvNaUkSMAjbXhBA9rL2GBV9NSXH%2FWz8Vr19C0uJqCD93KTemXLYVm6uGYKLZc99YmsgpIRcfpXgoVvEZSzOD3dJHXaq8s60AJdjlZxgGxC38pAcI5uV79tckuB19IVAcJ%2FWMaqwhHbI%2F4eAUPwDHFGgB%2FwEP%2BEK32UCDsPnACKSHmW4QSmKOkPjobhW4mJEM4cPUJyoq3KlXlz%2B3R80SUHpwyAkeXEtKRhgAnAycXcPfO04Ib7R7CyierVzjzJy7ekBg8Sx6SVUz8xgMKIRJWCmiJh%2FWf%2BgztwFOObjgrp6En2A2AHsdpDjpCzQibmM68TLYNdpK92k9WUirzEVGdx%2B8%2FYO3kTG7b1U8nzxYW8IRHnmdSIuGXTdO7tag7uruHKcKrBONI%2BJmGpGXItMY86cPohkzq3w%2BS%2Bqx5YAgkzWFwZ%2FwtyXdH%2BMf0pTEEP4s%2B3YKVEFdb7rODYp2YRqKQGMrffY8ZCq81GBHWFiuzxGH%2BvSNsQDByq4tBIi74SsKrFRD%2B7AnpXdewgXz6oiotnCrDwa606Lb6laNVx9u8w0MTbxAY6pgHkavJ3PrPLZBOlPb%2BPpurINeG2822s0J0XGZ54yAlndMXRboUpOykDfir6skBcqzr%2BYXZJA8Tdr9dRjdVEKGOYhD8zDTUeq%2FyBvDomhyHkYblDgZdQ027O35poGoMoynTSdUtEKb66J48ON%2FkLfgcdZdRBUHOwioHxceHGT%2BdhPfSNeTkks11FEXuSRtAfnQ7%2BImxzgVPP%2B6vbKXpjH3jRw4fql4K0&X-Amz-Signature=6f2c4747bd2c43da7f32e0473c447cfa35eea6cc53d56a4a1d86202eb4f601a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHSBEU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBsGiqcu5rOrxIr2myedWGKfAGm69eYvtebs6jKHzrLIAiBdaSvlp4748rSb%2Fu6eKJ9ljwR5UQsQnDXxh5W3pemSoiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZbWT8ZLiTNOGQvBKtwDtmX6kbXyqJhDjmN%2FoFKI%2Fd6LCrZ2Xbti9v29BfRcJodYtRH8IDuMYx%2Btq9dZzQSOQhL7m0ynIaam9zdeTIUvNaUkSMAjbXhBA9rL2GBV9NSXH%2FWz8Vr19C0uJqCD93KTemXLYVm6uGYKLZc99YmsgpIRcfpXgoVvEZSzOD3dJHXaq8s60AJdjlZxgGxC38pAcI5uV79tckuB19IVAcJ%2FWMaqwhHbI%2F4eAUPwDHFGgB%2FwEP%2BEK32UCDsPnACKSHmW4QSmKOkPjobhW4mJEM4cPUJyoq3KlXlz%2B3R80SUHpwyAkeXEtKRhgAnAycXcPfO04Ib7R7CyierVzjzJy7ekBg8Sx6SVUz8xgMKIRJWCmiJh%2FWf%2BgztwFOObjgrp6En2A2AHsdpDjpCzQibmM68TLYNdpK92k9WUirzEVGdx%2B8%2FYO3kTG7b1U8nzxYW8IRHnmdSIuGXTdO7tag7uruHKcKrBONI%2BJmGpGXItMY86cPohkzq3w%2BS%2Bqx5YAgkzWFwZ%2FwtyXdH%2BMf0pTEEP4s%2B3YKVEFdb7rODYp2YRqKQGMrffY8ZCq81GBHWFiuzxGH%2BvSNsQDByq4tBIi74SsKrFRD%2B7AnpXdewgXz6oiotnCrDwa606Lb6laNVx9u8w0MTbxAY6pgHkavJ3PrPLZBOlPb%2BPpurINeG2822s0J0XGZ54yAlndMXRboUpOykDfir6skBcqzr%2BYXZJA8Tdr9dRjdVEKGOYhD8zDTUeq%2FyBvDomhyHkYblDgZdQ027O35poGoMoynTSdUtEKb66J48ON%2FkLfgcdZdRBUHOwioHxceHGT%2BdhPfSNeTkks11FEXuSRtAfnQ7%2BImxzgVPP%2B6vbKXpjH3jRw4fql4K0&X-Amz-Signature=a525eca42d454f519466c67847b9dcd8acd50ea0d2f9dd2e89d7459e02920f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHSBEU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBsGiqcu5rOrxIr2myedWGKfAGm69eYvtebs6jKHzrLIAiBdaSvlp4748rSb%2Fu6eKJ9ljwR5UQsQnDXxh5W3pemSoiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZbWT8ZLiTNOGQvBKtwDtmX6kbXyqJhDjmN%2FoFKI%2Fd6LCrZ2Xbti9v29BfRcJodYtRH8IDuMYx%2Btq9dZzQSOQhL7m0ynIaam9zdeTIUvNaUkSMAjbXhBA9rL2GBV9NSXH%2FWz8Vr19C0uJqCD93KTemXLYVm6uGYKLZc99YmsgpIRcfpXgoVvEZSzOD3dJHXaq8s60AJdjlZxgGxC38pAcI5uV79tckuB19IVAcJ%2FWMaqwhHbI%2F4eAUPwDHFGgB%2FwEP%2BEK32UCDsPnACKSHmW4QSmKOkPjobhW4mJEM4cPUJyoq3KlXlz%2B3R80SUHpwyAkeXEtKRhgAnAycXcPfO04Ib7R7CyierVzjzJy7ekBg8Sx6SVUz8xgMKIRJWCmiJh%2FWf%2BgztwFOObjgrp6En2A2AHsdpDjpCzQibmM68TLYNdpK92k9WUirzEVGdx%2B8%2FYO3kTG7b1U8nzxYW8IRHnmdSIuGXTdO7tag7uruHKcKrBONI%2BJmGpGXItMY86cPohkzq3w%2BS%2Bqx5YAgkzWFwZ%2FwtyXdH%2BMf0pTEEP4s%2B3YKVEFdb7rODYp2YRqKQGMrffY8ZCq81GBHWFiuzxGH%2BvSNsQDByq4tBIi74SsKrFRD%2B7AnpXdewgXz6oiotnCrDwa606Lb6laNVx9u8w0MTbxAY6pgHkavJ3PrPLZBOlPb%2BPpurINeG2822s0J0XGZ54yAlndMXRboUpOykDfir6skBcqzr%2BYXZJA8Tdr9dRjdVEKGOYhD8zDTUeq%2FyBvDomhyHkYblDgZdQ027O35poGoMoynTSdUtEKb66J48ON%2FkLfgcdZdRBUHOwioHxceHGT%2BdhPfSNeTkks11FEXuSRtAfnQ7%2BImxzgVPP%2B6vbKXpjH3jRw4fql4K0&X-Amz-Signature=df6888903d569a405c815d8c0fe1fbc7d4338d0a86e1aa187936c4bede5dfbc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHSBEU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBsGiqcu5rOrxIr2myedWGKfAGm69eYvtebs6jKHzrLIAiBdaSvlp4748rSb%2Fu6eKJ9ljwR5UQsQnDXxh5W3pemSoiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZbWT8ZLiTNOGQvBKtwDtmX6kbXyqJhDjmN%2FoFKI%2Fd6LCrZ2Xbti9v29BfRcJodYtRH8IDuMYx%2Btq9dZzQSOQhL7m0ynIaam9zdeTIUvNaUkSMAjbXhBA9rL2GBV9NSXH%2FWz8Vr19C0uJqCD93KTemXLYVm6uGYKLZc99YmsgpIRcfpXgoVvEZSzOD3dJHXaq8s60AJdjlZxgGxC38pAcI5uV79tckuB19IVAcJ%2FWMaqwhHbI%2F4eAUPwDHFGgB%2FwEP%2BEK32UCDsPnACKSHmW4QSmKOkPjobhW4mJEM4cPUJyoq3KlXlz%2B3R80SUHpwyAkeXEtKRhgAnAycXcPfO04Ib7R7CyierVzjzJy7ekBg8Sx6SVUz8xgMKIRJWCmiJh%2FWf%2BgztwFOObjgrp6En2A2AHsdpDjpCzQibmM68TLYNdpK92k9WUirzEVGdx%2B8%2FYO3kTG7b1U8nzxYW8IRHnmdSIuGXTdO7tag7uruHKcKrBONI%2BJmGpGXItMY86cPohkzq3w%2BS%2Bqx5YAgkzWFwZ%2FwtyXdH%2BMf0pTEEP4s%2B3YKVEFdb7rODYp2YRqKQGMrffY8ZCq81GBHWFiuzxGH%2BvSNsQDByq4tBIi74SsKrFRD%2B7AnpXdewgXz6oiotnCrDwa606Lb6laNVx9u8w0MTbxAY6pgHkavJ3PrPLZBOlPb%2BPpurINeG2822s0J0XGZ54yAlndMXRboUpOykDfir6skBcqzr%2BYXZJA8Tdr9dRjdVEKGOYhD8zDTUeq%2FyBvDomhyHkYblDgZdQ027O35poGoMoynTSdUtEKb66J48ON%2FkLfgcdZdRBUHOwioHxceHGT%2BdhPfSNeTkks11FEXuSRtAfnQ7%2BImxzgVPP%2B6vbKXpjH3jRw4fql4K0&X-Amz-Signature=1811dc244d04f7e24fdcbec946df87a81d6f932cd0741e29f09731dade4db645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHSBEU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBsGiqcu5rOrxIr2myedWGKfAGm69eYvtebs6jKHzrLIAiBdaSvlp4748rSb%2Fu6eKJ9ljwR5UQsQnDXxh5W3pemSoiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZbWT8ZLiTNOGQvBKtwDtmX6kbXyqJhDjmN%2FoFKI%2Fd6LCrZ2Xbti9v29BfRcJodYtRH8IDuMYx%2Btq9dZzQSOQhL7m0ynIaam9zdeTIUvNaUkSMAjbXhBA9rL2GBV9NSXH%2FWz8Vr19C0uJqCD93KTemXLYVm6uGYKLZc99YmsgpIRcfpXgoVvEZSzOD3dJHXaq8s60AJdjlZxgGxC38pAcI5uV79tckuB19IVAcJ%2FWMaqwhHbI%2F4eAUPwDHFGgB%2FwEP%2BEK32UCDsPnACKSHmW4QSmKOkPjobhW4mJEM4cPUJyoq3KlXlz%2B3R80SUHpwyAkeXEtKRhgAnAycXcPfO04Ib7R7CyierVzjzJy7ekBg8Sx6SVUz8xgMKIRJWCmiJh%2FWf%2BgztwFOObjgrp6En2A2AHsdpDjpCzQibmM68TLYNdpK92k9WUirzEVGdx%2B8%2FYO3kTG7b1U8nzxYW8IRHnmdSIuGXTdO7tag7uruHKcKrBONI%2BJmGpGXItMY86cPohkzq3w%2BS%2Bqx5YAgkzWFwZ%2FwtyXdH%2BMf0pTEEP4s%2B3YKVEFdb7rODYp2YRqKQGMrffY8ZCq81GBHWFiuzxGH%2BvSNsQDByq4tBIi74SsKrFRD%2B7AnpXdewgXz6oiotnCrDwa606Lb6laNVx9u8w0MTbxAY6pgHkavJ3PrPLZBOlPb%2BPpurINeG2822s0J0XGZ54yAlndMXRboUpOykDfir6skBcqzr%2BYXZJA8Tdr9dRjdVEKGOYhD8zDTUeq%2FyBvDomhyHkYblDgZdQ027O35poGoMoynTSdUtEKb66J48ON%2FkLfgcdZdRBUHOwioHxceHGT%2BdhPfSNeTkks11FEXuSRtAfnQ7%2BImxzgVPP%2B6vbKXpjH3jRw4fql4K0&X-Amz-Signature=d8948366385ef41d94f0cb488f3e350a60acefe9ba47ef921da4621d4d784cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHSBEU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBsGiqcu5rOrxIr2myedWGKfAGm69eYvtebs6jKHzrLIAiBdaSvlp4748rSb%2Fu6eKJ9ljwR5UQsQnDXxh5W3pemSoiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZbWT8ZLiTNOGQvBKtwDtmX6kbXyqJhDjmN%2FoFKI%2Fd6LCrZ2Xbti9v29BfRcJodYtRH8IDuMYx%2Btq9dZzQSOQhL7m0ynIaam9zdeTIUvNaUkSMAjbXhBA9rL2GBV9NSXH%2FWz8Vr19C0uJqCD93KTemXLYVm6uGYKLZc99YmsgpIRcfpXgoVvEZSzOD3dJHXaq8s60AJdjlZxgGxC38pAcI5uV79tckuB19IVAcJ%2FWMaqwhHbI%2F4eAUPwDHFGgB%2FwEP%2BEK32UCDsPnACKSHmW4QSmKOkPjobhW4mJEM4cPUJyoq3KlXlz%2B3R80SUHpwyAkeXEtKRhgAnAycXcPfO04Ib7R7CyierVzjzJy7ekBg8Sx6SVUz8xgMKIRJWCmiJh%2FWf%2BgztwFOObjgrp6En2A2AHsdpDjpCzQibmM68TLYNdpK92k9WUirzEVGdx%2B8%2FYO3kTG7b1U8nzxYW8IRHnmdSIuGXTdO7tag7uruHKcKrBONI%2BJmGpGXItMY86cPohkzq3w%2BS%2Bqx5YAgkzWFwZ%2FwtyXdH%2BMf0pTEEP4s%2B3YKVEFdb7rODYp2YRqKQGMrffY8ZCq81GBHWFiuzxGH%2BvSNsQDByq4tBIi74SsKrFRD%2B7AnpXdewgXz6oiotnCrDwa606Lb6laNVx9u8w0MTbxAY6pgHkavJ3PrPLZBOlPb%2BPpurINeG2822s0J0XGZ54yAlndMXRboUpOykDfir6skBcqzr%2BYXZJA8Tdr9dRjdVEKGOYhD8zDTUeq%2FyBvDomhyHkYblDgZdQ027O35poGoMoynTSdUtEKb66J48ON%2FkLfgcdZdRBUHOwioHxceHGT%2BdhPfSNeTkks11FEXuSRtAfnQ7%2BImxzgVPP%2B6vbKXpjH3jRw4fql4K0&X-Amz-Signature=8b0e539bb358803b7e159fb20ba15b57e1e742921602716c24a24ba761eb8247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHSBEU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBsGiqcu5rOrxIr2myedWGKfAGm69eYvtebs6jKHzrLIAiBdaSvlp4748rSb%2Fu6eKJ9ljwR5UQsQnDXxh5W3pemSoiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZbWT8ZLiTNOGQvBKtwDtmX6kbXyqJhDjmN%2FoFKI%2Fd6LCrZ2Xbti9v29BfRcJodYtRH8IDuMYx%2Btq9dZzQSOQhL7m0ynIaam9zdeTIUvNaUkSMAjbXhBA9rL2GBV9NSXH%2FWz8Vr19C0uJqCD93KTemXLYVm6uGYKLZc99YmsgpIRcfpXgoVvEZSzOD3dJHXaq8s60AJdjlZxgGxC38pAcI5uV79tckuB19IVAcJ%2FWMaqwhHbI%2F4eAUPwDHFGgB%2FwEP%2BEK32UCDsPnACKSHmW4QSmKOkPjobhW4mJEM4cPUJyoq3KlXlz%2B3R80SUHpwyAkeXEtKRhgAnAycXcPfO04Ib7R7CyierVzjzJy7ekBg8Sx6SVUz8xgMKIRJWCmiJh%2FWf%2BgztwFOObjgrp6En2A2AHsdpDjpCzQibmM68TLYNdpK92k9WUirzEVGdx%2B8%2FYO3kTG7b1U8nzxYW8IRHnmdSIuGXTdO7tag7uruHKcKrBONI%2BJmGpGXItMY86cPohkzq3w%2BS%2Bqx5YAgkzWFwZ%2FwtyXdH%2BMf0pTEEP4s%2B3YKVEFdb7rODYp2YRqKQGMrffY8ZCq81GBHWFiuzxGH%2BvSNsQDByq4tBIi74SsKrFRD%2B7AnpXdewgXz6oiotnCrDwa606Lb6laNVx9u8w0MTbxAY6pgHkavJ3PrPLZBOlPb%2BPpurINeG2822s0J0XGZ54yAlndMXRboUpOykDfir6skBcqzr%2BYXZJA8Tdr9dRjdVEKGOYhD8zDTUeq%2FyBvDomhyHkYblDgZdQ027O35poGoMoynTSdUtEKb66J48ON%2FkLfgcdZdRBUHOwioHxceHGT%2BdhPfSNeTkks11FEXuSRtAfnQ7%2BImxzgVPP%2B6vbKXpjH3jRw4fql4K0&X-Amz-Signature=cadeccabdf3d6e7ecab0af4b6e8e05f1af40991e0a6543d17650c7896bc5583d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

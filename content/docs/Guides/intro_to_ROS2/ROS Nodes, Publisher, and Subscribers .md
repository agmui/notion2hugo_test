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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK54JYA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIC1CVmPgrpxXScgomIJWfOoaDmNiMRTAnSzKdBIM8rwaAiBo5pFJkSvwlUN6xoe3jfdqkdjKxDSMTT6DuFRl7fKioSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMX878A4KJ9DwjD1VMKtwDLjLBTGSLfw9UWsVwcplVW5J%2FZzoCmf%2FeN3DwW3jR9pJVYg%2FUxPp2prgnPrwbCzAgxpeHYpa%2BQxwHfuj66pNWidgDBR81EtetqG0ydgex8V9OuaIGcVi97a%2FyyXdC0duXn3QeIfCfFuatGVj%2FHvWiNEBR7yYpP7TfXrBQ6SCVNwlaah9r5s7BpQB0EOgxIABBlpHGN7BK795BRtpe0I0tt9cUbnjh1Utq6R%2BV4nU5TG%2B%2B8Vnyd05OukhUjHZcMu82VJjLV6vYo2YQClzJ%2FyCnBLbJBE7dj%2FAB5HmCYQJ92Tl6oznOorNFuN0s8pQLce94RIHJwfEh9SdEcidStqGU%2FkdNzo3D3Swtxfim2rNKLmA8gu3jF%2B8yhvMADMR2bvnec658w9Ku%2Fw3TNBhlROW9skgJsig1whKXMl%2F78gjzOhCevaVVX557EvKI8LiHgxz%2BfiU57lmaUFTuoFrQuSvirmLJG0%2F%2B86UA5%2FBV%2BL53Qg6cXcTaPuen2vAXUyVAXR4dCEqqtqBsqsKFSKO4%2Fh35Q6rv9nYYbYP148c2EFpNRuULwAccTDsTuL9NR9THCbfYhpH3s61WOe3qlen3XlFYDJQlylcb8wewfd7YUR6RzTAaqC%2FEmaiEzeVIc%2BIwsJ2TvQY6pgFM8ueOSXbceJAORusUo1xRXsKprK5dbU%2BO3TV5R0d9QWTAfEovmJnrFAtkN809%2F%2Bq1nj5mdYbmNkHZm4GjgcYdcQ%2Fxf8CAXtNkYfMg9JE28sXRhm01u2cdn9tgfMRk0PW320ZVVyKWr%2Fm5lbwUiLCzVORw3jJP%2Fq%2F8QKQvYtq254JXiylntvcFqHTKDmde0xwIhKZVJodPfh3xhVeaywlYBMvHm4Ob&X-Amz-Signature=ee14f2d18c0498ed0991db756cc21b5f0cf75d040216e76922503f92a2df2c96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK54JYA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIC1CVmPgrpxXScgomIJWfOoaDmNiMRTAnSzKdBIM8rwaAiBo5pFJkSvwlUN6xoe3jfdqkdjKxDSMTT6DuFRl7fKioSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMX878A4KJ9DwjD1VMKtwDLjLBTGSLfw9UWsVwcplVW5J%2FZzoCmf%2FeN3DwW3jR9pJVYg%2FUxPp2prgnPrwbCzAgxpeHYpa%2BQxwHfuj66pNWidgDBR81EtetqG0ydgex8V9OuaIGcVi97a%2FyyXdC0duXn3QeIfCfFuatGVj%2FHvWiNEBR7yYpP7TfXrBQ6SCVNwlaah9r5s7BpQB0EOgxIABBlpHGN7BK795BRtpe0I0tt9cUbnjh1Utq6R%2BV4nU5TG%2B%2B8Vnyd05OukhUjHZcMu82VJjLV6vYo2YQClzJ%2FyCnBLbJBE7dj%2FAB5HmCYQJ92Tl6oznOorNFuN0s8pQLce94RIHJwfEh9SdEcidStqGU%2FkdNzo3D3Swtxfim2rNKLmA8gu3jF%2B8yhvMADMR2bvnec658w9Ku%2Fw3TNBhlROW9skgJsig1whKXMl%2F78gjzOhCevaVVX557EvKI8LiHgxz%2BfiU57lmaUFTuoFrQuSvirmLJG0%2F%2B86UA5%2FBV%2BL53Qg6cXcTaPuen2vAXUyVAXR4dCEqqtqBsqsKFSKO4%2Fh35Q6rv9nYYbYP148c2EFpNRuULwAccTDsTuL9NR9THCbfYhpH3s61WOe3qlen3XlFYDJQlylcb8wewfd7YUR6RzTAaqC%2FEmaiEzeVIc%2BIwsJ2TvQY6pgFM8ueOSXbceJAORusUo1xRXsKprK5dbU%2BO3TV5R0d9QWTAfEovmJnrFAtkN809%2F%2Bq1nj5mdYbmNkHZm4GjgcYdcQ%2Fxf8CAXtNkYfMg9JE28sXRhm01u2cdn9tgfMRk0PW320ZVVyKWr%2Fm5lbwUiLCzVORw3jJP%2Fq%2F8QKQvYtq254JXiylntvcFqHTKDmde0xwIhKZVJodPfh3xhVeaywlYBMvHm4Ob&X-Amz-Signature=3c02ca15258807199fb38acf17f2acf55d892c615f30f7ebfca5beabfbb65c49&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK54JYA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIC1CVmPgrpxXScgomIJWfOoaDmNiMRTAnSzKdBIM8rwaAiBo5pFJkSvwlUN6xoe3jfdqkdjKxDSMTT6DuFRl7fKioSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMX878A4KJ9DwjD1VMKtwDLjLBTGSLfw9UWsVwcplVW5J%2FZzoCmf%2FeN3DwW3jR9pJVYg%2FUxPp2prgnPrwbCzAgxpeHYpa%2BQxwHfuj66pNWidgDBR81EtetqG0ydgex8V9OuaIGcVi97a%2FyyXdC0duXn3QeIfCfFuatGVj%2FHvWiNEBR7yYpP7TfXrBQ6SCVNwlaah9r5s7BpQB0EOgxIABBlpHGN7BK795BRtpe0I0tt9cUbnjh1Utq6R%2BV4nU5TG%2B%2B8Vnyd05OukhUjHZcMu82VJjLV6vYo2YQClzJ%2FyCnBLbJBE7dj%2FAB5HmCYQJ92Tl6oznOorNFuN0s8pQLce94RIHJwfEh9SdEcidStqGU%2FkdNzo3D3Swtxfim2rNKLmA8gu3jF%2B8yhvMADMR2bvnec658w9Ku%2Fw3TNBhlROW9skgJsig1whKXMl%2F78gjzOhCevaVVX557EvKI8LiHgxz%2BfiU57lmaUFTuoFrQuSvirmLJG0%2F%2B86UA5%2FBV%2BL53Qg6cXcTaPuen2vAXUyVAXR4dCEqqtqBsqsKFSKO4%2Fh35Q6rv9nYYbYP148c2EFpNRuULwAccTDsTuL9NR9THCbfYhpH3s61WOe3qlen3XlFYDJQlylcb8wewfd7YUR6RzTAaqC%2FEmaiEzeVIc%2BIwsJ2TvQY6pgFM8ueOSXbceJAORusUo1xRXsKprK5dbU%2BO3TV5R0d9QWTAfEovmJnrFAtkN809%2F%2Bq1nj5mdYbmNkHZm4GjgcYdcQ%2Fxf8CAXtNkYfMg9JE28sXRhm01u2cdn9tgfMRk0PW320ZVVyKWr%2Fm5lbwUiLCzVORw3jJP%2Fq%2F8QKQvYtq254JXiylntvcFqHTKDmde0xwIhKZVJodPfh3xhVeaywlYBMvHm4Ob&X-Amz-Signature=c56f1da0f9826db3ae7306dc63afb1bacc90de56ce58bbcb6bce4f7d666d5cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK54JYA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIC1CVmPgrpxXScgomIJWfOoaDmNiMRTAnSzKdBIM8rwaAiBo5pFJkSvwlUN6xoe3jfdqkdjKxDSMTT6DuFRl7fKioSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMX878A4KJ9DwjD1VMKtwDLjLBTGSLfw9UWsVwcplVW5J%2FZzoCmf%2FeN3DwW3jR9pJVYg%2FUxPp2prgnPrwbCzAgxpeHYpa%2BQxwHfuj66pNWidgDBR81EtetqG0ydgex8V9OuaIGcVi97a%2FyyXdC0duXn3QeIfCfFuatGVj%2FHvWiNEBR7yYpP7TfXrBQ6SCVNwlaah9r5s7BpQB0EOgxIABBlpHGN7BK795BRtpe0I0tt9cUbnjh1Utq6R%2BV4nU5TG%2B%2B8Vnyd05OukhUjHZcMu82VJjLV6vYo2YQClzJ%2FyCnBLbJBE7dj%2FAB5HmCYQJ92Tl6oznOorNFuN0s8pQLce94RIHJwfEh9SdEcidStqGU%2FkdNzo3D3Swtxfim2rNKLmA8gu3jF%2B8yhvMADMR2bvnec658w9Ku%2Fw3TNBhlROW9skgJsig1whKXMl%2F78gjzOhCevaVVX557EvKI8LiHgxz%2BfiU57lmaUFTuoFrQuSvirmLJG0%2F%2B86UA5%2FBV%2BL53Qg6cXcTaPuen2vAXUyVAXR4dCEqqtqBsqsKFSKO4%2Fh35Q6rv9nYYbYP148c2EFpNRuULwAccTDsTuL9NR9THCbfYhpH3s61WOe3qlen3XlFYDJQlylcb8wewfd7YUR6RzTAaqC%2FEmaiEzeVIc%2BIwsJ2TvQY6pgFM8ueOSXbceJAORusUo1xRXsKprK5dbU%2BO3TV5R0d9QWTAfEovmJnrFAtkN809%2F%2Bq1nj5mdYbmNkHZm4GjgcYdcQ%2Fxf8CAXtNkYfMg9JE28sXRhm01u2cdn9tgfMRk0PW320ZVVyKWr%2Fm5lbwUiLCzVORw3jJP%2Fq%2F8QKQvYtq254JXiylntvcFqHTKDmde0xwIhKZVJodPfh3xhVeaywlYBMvHm4Ob&X-Amz-Signature=649753e35024ed2957f0efc4cf75c812fb80a07dcb09fc4a3a4dffb3ca431fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK54JYA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIC1CVmPgrpxXScgomIJWfOoaDmNiMRTAnSzKdBIM8rwaAiBo5pFJkSvwlUN6xoe3jfdqkdjKxDSMTT6DuFRl7fKioSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMX878A4KJ9DwjD1VMKtwDLjLBTGSLfw9UWsVwcplVW5J%2FZzoCmf%2FeN3DwW3jR9pJVYg%2FUxPp2prgnPrwbCzAgxpeHYpa%2BQxwHfuj66pNWidgDBR81EtetqG0ydgex8V9OuaIGcVi97a%2FyyXdC0duXn3QeIfCfFuatGVj%2FHvWiNEBR7yYpP7TfXrBQ6SCVNwlaah9r5s7BpQB0EOgxIABBlpHGN7BK795BRtpe0I0tt9cUbnjh1Utq6R%2BV4nU5TG%2B%2B8Vnyd05OukhUjHZcMu82VJjLV6vYo2YQClzJ%2FyCnBLbJBE7dj%2FAB5HmCYQJ92Tl6oznOorNFuN0s8pQLce94RIHJwfEh9SdEcidStqGU%2FkdNzo3D3Swtxfim2rNKLmA8gu3jF%2B8yhvMADMR2bvnec658w9Ku%2Fw3TNBhlROW9skgJsig1whKXMl%2F78gjzOhCevaVVX557EvKI8LiHgxz%2BfiU57lmaUFTuoFrQuSvirmLJG0%2F%2B86UA5%2FBV%2BL53Qg6cXcTaPuen2vAXUyVAXR4dCEqqtqBsqsKFSKO4%2Fh35Q6rv9nYYbYP148c2EFpNRuULwAccTDsTuL9NR9THCbfYhpH3s61WOe3qlen3XlFYDJQlylcb8wewfd7YUR6RzTAaqC%2FEmaiEzeVIc%2BIwsJ2TvQY6pgFM8ueOSXbceJAORusUo1xRXsKprK5dbU%2BO3TV5R0d9QWTAfEovmJnrFAtkN809%2F%2Bq1nj5mdYbmNkHZm4GjgcYdcQ%2Fxf8CAXtNkYfMg9JE28sXRhm01u2cdn9tgfMRk0PW320ZVVyKWr%2Fm5lbwUiLCzVORw3jJP%2Fq%2F8QKQvYtq254JXiylntvcFqHTKDmde0xwIhKZVJodPfh3xhVeaywlYBMvHm4Ob&X-Amz-Signature=dfb7da87e004fb21f87d7837a5cfd697ddeb4569c88cbcd6044179c2c9cd4cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK54JYA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIC1CVmPgrpxXScgomIJWfOoaDmNiMRTAnSzKdBIM8rwaAiBo5pFJkSvwlUN6xoe3jfdqkdjKxDSMTT6DuFRl7fKioSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMX878A4KJ9DwjD1VMKtwDLjLBTGSLfw9UWsVwcplVW5J%2FZzoCmf%2FeN3DwW3jR9pJVYg%2FUxPp2prgnPrwbCzAgxpeHYpa%2BQxwHfuj66pNWidgDBR81EtetqG0ydgex8V9OuaIGcVi97a%2FyyXdC0duXn3QeIfCfFuatGVj%2FHvWiNEBR7yYpP7TfXrBQ6SCVNwlaah9r5s7BpQB0EOgxIABBlpHGN7BK795BRtpe0I0tt9cUbnjh1Utq6R%2BV4nU5TG%2B%2B8Vnyd05OukhUjHZcMu82VJjLV6vYo2YQClzJ%2FyCnBLbJBE7dj%2FAB5HmCYQJ92Tl6oznOorNFuN0s8pQLce94RIHJwfEh9SdEcidStqGU%2FkdNzo3D3Swtxfim2rNKLmA8gu3jF%2B8yhvMADMR2bvnec658w9Ku%2Fw3TNBhlROW9skgJsig1whKXMl%2F78gjzOhCevaVVX557EvKI8LiHgxz%2BfiU57lmaUFTuoFrQuSvirmLJG0%2F%2B86UA5%2FBV%2BL53Qg6cXcTaPuen2vAXUyVAXR4dCEqqtqBsqsKFSKO4%2Fh35Q6rv9nYYbYP148c2EFpNRuULwAccTDsTuL9NR9THCbfYhpH3s61WOe3qlen3XlFYDJQlylcb8wewfd7YUR6RzTAaqC%2FEmaiEzeVIc%2BIwsJ2TvQY6pgFM8ueOSXbceJAORusUo1xRXsKprK5dbU%2BO3TV5R0d9QWTAfEovmJnrFAtkN809%2F%2Bq1nj5mdYbmNkHZm4GjgcYdcQ%2Fxf8CAXtNkYfMg9JE28sXRhm01u2cdn9tgfMRk0PW320ZVVyKWr%2Fm5lbwUiLCzVORw3jJP%2Fq%2F8QKQvYtq254JXiylntvcFqHTKDmde0xwIhKZVJodPfh3xhVeaywlYBMvHm4Ob&X-Amz-Signature=00b37f46e165dd70517375ee518bc5c30efe05e8ba8646a84c0ff3ba842d037c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK54JYA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIC1CVmPgrpxXScgomIJWfOoaDmNiMRTAnSzKdBIM8rwaAiBo5pFJkSvwlUN6xoe3jfdqkdjKxDSMTT6DuFRl7fKioSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMX878A4KJ9DwjD1VMKtwDLjLBTGSLfw9UWsVwcplVW5J%2FZzoCmf%2FeN3DwW3jR9pJVYg%2FUxPp2prgnPrwbCzAgxpeHYpa%2BQxwHfuj66pNWidgDBR81EtetqG0ydgex8V9OuaIGcVi97a%2FyyXdC0duXn3QeIfCfFuatGVj%2FHvWiNEBR7yYpP7TfXrBQ6SCVNwlaah9r5s7BpQB0EOgxIABBlpHGN7BK795BRtpe0I0tt9cUbnjh1Utq6R%2BV4nU5TG%2B%2B8Vnyd05OukhUjHZcMu82VJjLV6vYo2YQClzJ%2FyCnBLbJBE7dj%2FAB5HmCYQJ92Tl6oznOorNFuN0s8pQLce94RIHJwfEh9SdEcidStqGU%2FkdNzo3D3Swtxfim2rNKLmA8gu3jF%2B8yhvMADMR2bvnec658w9Ku%2Fw3TNBhlROW9skgJsig1whKXMl%2F78gjzOhCevaVVX557EvKI8LiHgxz%2BfiU57lmaUFTuoFrQuSvirmLJG0%2F%2B86UA5%2FBV%2BL53Qg6cXcTaPuen2vAXUyVAXR4dCEqqtqBsqsKFSKO4%2Fh35Q6rv9nYYbYP148c2EFpNRuULwAccTDsTuL9NR9THCbfYhpH3s61WOe3qlen3XlFYDJQlylcb8wewfd7YUR6RzTAaqC%2FEmaiEzeVIc%2BIwsJ2TvQY6pgFM8ueOSXbceJAORusUo1xRXsKprK5dbU%2BO3TV5R0d9QWTAfEovmJnrFAtkN809%2F%2Bq1nj5mdYbmNkHZm4GjgcYdcQ%2Fxf8CAXtNkYfMg9JE28sXRhm01u2cdn9tgfMRk0PW320ZVVyKWr%2Fm5lbwUiLCzVORw3jJP%2Fq%2F8QKQvYtq254JXiylntvcFqHTKDmde0xwIhKZVJodPfh3xhVeaywlYBMvHm4Ob&X-Amz-Signature=25bacd2d0352583d4da7f41aa44bfb8d261813f6373434228b15013c481ac237&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK54JYA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIC1CVmPgrpxXScgomIJWfOoaDmNiMRTAnSzKdBIM8rwaAiBo5pFJkSvwlUN6xoe3jfdqkdjKxDSMTT6DuFRl7fKioSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMX878A4KJ9DwjD1VMKtwDLjLBTGSLfw9UWsVwcplVW5J%2FZzoCmf%2FeN3DwW3jR9pJVYg%2FUxPp2prgnPrwbCzAgxpeHYpa%2BQxwHfuj66pNWidgDBR81EtetqG0ydgex8V9OuaIGcVi97a%2FyyXdC0duXn3QeIfCfFuatGVj%2FHvWiNEBR7yYpP7TfXrBQ6SCVNwlaah9r5s7BpQB0EOgxIABBlpHGN7BK795BRtpe0I0tt9cUbnjh1Utq6R%2BV4nU5TG%2B%2B8Vnyd05OukhUjHZcMu82VJjLV6vYo2YQClzJ%2FyCnBLbJBE7dj%2FAB5HmCYQJ92Tl6oznOorNFuN0s8pQLce94RIHJwfEh9SdEcidStqGU%2FkdNzo3D3Swtxfim2rNKLmA8gu3jF%2B8yhvMADMR2bvnec658w9Ku%2Fw3TNBhlROW9skgJsig1whKXMl%2F78gjzOhCevaVVX557EvKI8LiHgxz%2BfiU57lmaUFTuoFrQuSvirmLJG0%2F%2B86UA5%2FBV%2BL53Qg6cXcTaPuen2vAXUyVAXR4dCEqqtqBsqsKFSKO4%2Fh35Q6rv9nYYbYP148c2EFpNRuULwAccTDsTuL9NR9THCbfYhpH3s61WOe3qlen3XlFYDJQlylcb8wewfd7YUR6RzTAaqC%2FEmaiEzeVIc%2BIwsJ2TvQY6pgFM8ueOSXbceJAORusUo1xRXsKprK5dbU%2BO3TV5R0d9QWTAfEovmJnrFAtkN809%2F%2Bq1nj5mdYbmNkHZm4GjgcYdcQ%2Fxf8CAXtNkYfMg9JE28sXRhm01u2cdn9tgfMRk0PW320ZVVyKWr%2Fm5lbwUiLCzVORw3jJP%2Fq%2F8QKQvYtq254JXiylntvcFqHTKDmde0xwIhKZVJodPfh3xhVeaywlYBMvHm4Ob&X-Amz-Signature=8db224f5e7a502d6cfe49b99fb0e7e6eb3cf6b3ba1a960a10e35fc6a8aa85d72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

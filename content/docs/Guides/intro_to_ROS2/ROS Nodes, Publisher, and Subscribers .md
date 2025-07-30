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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUBHFTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAoz0hDkKSpjmIKdAQNNikeh%2BX2Q5kO55y%2B9QlZyse2gIhAMPLbdqs8IO2X6ssfJkPKx5aAsF64aYhnutMgJP1k%2B1bKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWWaS8LQf5Kluz68q3ANJwVsLgTJyoZTT32JOv%2BvLYbKaxrrucTkjE9IYv%2FfqO1Ndymwg5wPvqhON02AmKNkWjWNiVxvQW0vlh8ChSKdtag9Q85%2Bffy8U%2FGiZ2IqqXSsnbwX7fWTVXG6obFUcWFl6q7r2A0LshmQ%2FYcTSHw%2FhUpXXhucFfdKvE6XUBjRE0Qnqq6jgvoRMxz7IxHS08pnZ99bHAGyrfpOH3HIVAx%2F0d0mwac5rk0SrMJPNfKT3gxSocyaFmo8ew0T7%2BXY4b5PEcOKNO8doLrrKen%2FeJfA31sNP4gaU8%2BOa8FetGENCjGu%2BXkIWbnRMvpiAg%2Bert9ldeV99EQUXL7v1EoaZmnpjb0JrriGOf7B6oS8qPDM4dMgU13O6kJCk6TyTYGKwETpLyXdAzpn1MUyygUtKYUHY%2FcOjaUXWPIv4KHScsqUroigSxOfc1JyoTS5iUaeIx0w8MkqD4R4GizTG9QWpRCHvfsejG0M5dzO7tFwkBYcPysB%2FuaRvp5ZyuuKptpzHsXZqg2P%2B%2FN8%2BuC1%2BGdqzK3JNyOiDwaMleV1%2BwpFOi8fdwKKSCWk0ClI8X1oLIuGwL7vgyngVwxn5N0ZcbhyA47fr81tMjFnJ5%2FymIu5eX36Mj7Gpc%2FM%2Fve2SMh4CKDCnu6nEBjqkAdtSLngggsoZ7pLMh2ODGo%2FXKVCiUbFM3yL1ykt7YUeURin1GJaIpNQr3Nu3faKqEdCiDOpb0RsnYiLVPaTh3m8bVdmRYoh%2BpuDhRexVYAtqscM1%2Fu%2BUN08qpB3bNydklI9bHEB4F%2FQw7aQ1WmqmQPGoaH1cwkcYf9rnHC6lnghksnB6GFUbr9%2F65gSleNT01DHbfYeSP0P3DQdgb4MgtzCmokod&X-Amz-Signature=f6591a13cda32bb2d088a683f293ec97ab6e1f2bb27c0ba9f1e5617f56804b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUBHFTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAoz0hDkKSpjmIKdAQNNikeh%2BX2Q5kO55y%2B9QlZyse2gIhAMPLbdqs8IO2X6ssfJkPKx5aAsF64aYhnutMgJP1k%2B1bKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWWaS8LQf5Kluz68q3ANJwVsLgTJyoZTT32JOv%2BvLYbKaxrrucTkjE9IYv%2FfqO1Ndymwg5wPvqhON02AmKNkWjWNiVxvQW0vlh8ChSKdtag9Q85%2Bffy8U%2FGiZ2IqqXSsnbwX7fWTVXG6obFUcWFl6q7r2A0LshmQ%2FYcTSHw%2FhUpXXhucFfdKvE6XUBjRE0Qnqq6jgvoRMxz7IxHS08pnZ99bHAGyrfpOH3HIVAx%2F0d0mwac5rk0SrMJPNfKT3gxSocyaFmo8ew0T7%2BXY4b5PEcOKNO8doLrrKen%2FeJfA31sNP4gaU8%2BOa8FetGENCjGu%2BXkIWbnRMvpiAg%2Bert9ldeV99EQUXL7v1EoaZmnpjb0JrriGOf7B6oS8qPDM4dMgU13O6kJCk6TyTYGKwETpLyXdAzpn1MUyygUtKYUHY%2FcOjaUXWPIv4KHScsqUroigSxOfc1JyoTS5iUaeIx0w8MkqD4R4GizTG9QWpRCHvfsejG0M5dzO7tFwkBYcPysB%2FuaRvp5ZyuuKptpzHsXZqg2P%2B%2FN8%2BuC1%2BGdqzK3JNyOiDwaMleV1%2BwpFOi8fdwKKSCWk0ClI8X1oLIuGwL7vgyngVwxn5N0ZcbhyA47fr81tMjFnJ5%2FymIu5eX36Mj7Gpc%2FM%2Fve2SMh4CKDCnu6nEBjqkAdtSLngggsoZ7pLMh2ODGo%2FXKVCiUbFM3yL1ykt7YUeURin1GJaIpNQr3Nu3faKqEdCiDOpb0RsnYiLVPaTh3m8bVdmRYoh%2BpuDhRexVYAtqscM1%2Fu%2BUN08qpB3bNydklI9bHEB4F%2FQw7aQ1WmqmQPGoaH1cwkcYf9rnHC6lnghksnB6GFUbr9%2F65gSleNT01DHbfYeSP0P3DQdgb4MgtzCmokod&X-Amz-Signature=2a7284d802897ad53b00e7a4e4d92cafab416b595b22f93c21eea52fc6e94ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUBHFTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAoz0hDkKSpjmIKdAQNNikeh%2BX2Q5kO55y%2B9QlZyse2gIhAMPLbdqs8IO2X6ssfJkPKx5aAsF64aYhnutMgJP1k%2B1bKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWWaS8LQf5Kluz68q3ANJwVsLgTJyoZTT32JOv%2BvLYbKaxrrucTkjE9IYv%2FfqO1Ndymwg5wPvqhON02AmKNkWjWNiVxvQW0vlh8ChSKdtag9Q85%2Bffy8U%2FGiZ2IqqXSsnbwX7fWTVXG6obFUcWFl6q7r2A0LshmQ%2FYcTSHw%2FhUpXXhucFfdKvE6XUBjRE0Qnqq6jgvoRMxz7IxHS08pnZ99bHAGyrfpOH3HIVAx%2F0d0mwac5rk0SrMJPNfKT3gxSocyaFmo8ew0T7%2BXY4b5PEcOKNO8doLrrKen%2FeJfA31sNP4gaU8%2BOa8FetGENCjGu%2BXkIWbnRMvpiAg%2Bert9ldeV99EQUXL7v1EoaZmnpjb0JrriGOf7B6oS8qPDM4dMgU13O6kJCk6TyTYGKwETpLyXdAzpn1MUyygUtKYUHY%2FcOjaUXWPIv4KHScsqUroigSxOfc1JyoTS5iUaeIx0w8MkqD4R4GizTG9QWpRCHvfsejG0M5dzO7tFwkBYcPysB%2FuaRvp5ZyuuKptpzHsXZqg2P%2B%2FN8%2BuC1%2BGdqzK3JNyOiDwaMleV1%2BwpFOi8fdwKKSCWk0ClI8X1oLIuGwL7vgyngVwxn5N0ZcbhyA47fr81tMjFnJ5%2FymIu5eX36Mj7Gpc%2FM%2Fve2SMh4CKDCnu6nEBjqkAdtSLngggsoZ7pLMh2ODGo%2FXKVCiUbFM3yL1ykt7YUeURin1GJaIpNQr3Nu3faKqEdCiDOpb0RsnYiLVPaTh3m8bVdmRYoh%2BpuDhRexVYAtqscM1%2Fu%2BUN08qpB3bNydklI9bHEB4F%2FQw7aQ1WmqmQPGoaH1cwkcYf9rnHC6lnghksnB6GFUbr9%2F65gSleNT01DHbfYeSP0P3DQdgb4MgtzCmokod&X-Amz-Signature=d34a5ca5b4b0a2fa7e1cae32279f0f112336950a088e9a59c36c131d8b2dbddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUBHFTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAoz0hDkKSpjmIKdAQNNikeh%2BX2Q5kO55y%2B9QlZyse2gIhAMPLbdqs8IO2X6ssfJkPKx5aAsF64aYhnutMgJP1k%2B1bKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWWaS8LQf5Kluz68q3ANJwVsLgTJyoZTT32JOv%2BvLYbKaxrrucTkjE9IYv%2FfqO1Ndymwg5wPvqhON02AmKNkWjWNiVxvQW0vlh8ChSKdtag9Q85%2Bffy8U%2FGiZ2IqqXSsnbwX7fWTVXG6obFUcWFl6q7r2A0LshmQ%2FYcTSHw%2FhUpXXhucFfdKvE6XUBjRE0Qnqq6jgvoRMxz7IxHS08pnZ99bHAGyrfpOH3HIVAx%2F0d0mwac5rk0SrMJPNfKT3gxSocyaFmo8ew0T7%2BXY4b5PEcOKNO8doLrrKen%2FeJfA31sNP4gaU8%2BOa8FetGENCjGu%2BXkIWbnRMvpiAg%2Bert9ldeV99EQUXL7v1EoaZmnpjb0JrriGOf7B6oS8qPDM4dMgU13O6kJCk6TyTYGKwETpLyXdAzpn1MUyygUtKYUHY%2FcOjaUXWPIv4KHScsqUroigSxOfc1JyoTS5iUaeIx0w8MkqD4R4GizTG9QWpRCHvfsejG0M5dzO7tFwkBYcPysB%2FuaRvp5ZyuuKptpzHsXZqg2P%2B%2FN8%2BuC1%2BGdqzK3JNyOiDwaMleV1%2BwpFOi8fdwKKSCWk0ClI8X1oLIuGwL7vgyngVwxn5N0ZcbhyA47fr81tMjFnJ5%2FymIu5eX36Mj7Gpc%2FM%2Fve2SMh4CKDCnu6nEBjqkAdtSLngggsoZ7pLMh2ODGo%2FXKVCiUbFM3yL1ykt7YUeURin1GJaIpNQr3Nu3faKqEdCiDOpb0RsnYiLVPaTh3m8bVdmRYoh%2BpuDhRexVYAtqscM1%2Fu%2BUN08qpB3bNydklI9bHEB4F%2FQw7aQ1WmqmQPGoaH1cwkcYf9rnHC6lnghksnB6GFUbr9%2F65gSleNT01DHbfYeSP0P3DQdgb4MgtzCmokod&X-Amz-Signature=e57d20e345c31e938aa3df29be00b395009f5b4cc7fff344b159d9b4d0ee5931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUBHFTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAoz0hDkKSpjmIKdAQNNikeh%2BX2Q5kO55y%2B9QlZyse2gIhAMPLbdqs8IO2X6ssfJkPKx5aAsF64aYhnutMgJP1k%2B1bKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWWaS8LQf5Kluz68q3ANJwVsLgTJyoZTT32JOv%2BvLYbKaxrrucTkjE9IYv%2FfqO1Ndymwg5wPvqhON02AmKNkWjWNiVxvQW0vlh8ChSKdtag9Q85%2Bffy8U%2FGiZ2IqqXSsnbwX7fWTVXG6obFUcWFl6q7r2A0LshmQ%2FYcTSHw%2FhUpXXhucFfdKvE6XUBjRE0Qnqq6jgvoRMxz7IxHS08pnZ99bHAGyrfpOH3HIVAx%2F0d0mwac5rk0SrMJPNfKT3gxSocyaFmo8ew0T7%2BXY4b5PEcOKNO8doLrrKen%2FeJfA31sNP4gaU8%2BOa8FetGENCjGu%2BXkIWbnRMvpiAg%2Bert9ldeV99EQUXL7v1EoaZmnpjb0JrriGOf7B6oS8qPDM4dMgU13O6kJCk6TyTYGKwETpLyXdAzpn1MUyygUtKYUHY%2FcOjaUXWPIv4KHScsqUroigSxOfc1JyoTS5iUaeIx0w8MkqD4R4GizTG9QWpRCHvfsejG0M5dzO7tFwkBYcPysB%2FuaRvp5ZyuuKptpzHsXZqg2P%2B%2FN8%2BuC1%2BGdqzK3JNyOiDwaMleV1%2BwpFOi8fdwKKSCWk0ClI8X1oLIuGwL7vgyngVwxn5N0ZcbhyA47fr81tMjFnJ5%2FymIu5eX36Mj7Gpc%2FM%2Fve2SMh4CKDCnu6nEBjqkAdtSLngggsoZ7pLMh2ODGo%2FXKVCiUbFM3yL1ykt7YUeURin1GJaIpNQr3Nu3faKqEdCiDOpb0RsnYiLVPaTh3m8bVdmRYoh%2BpuDhRexVYAtqscM1%2Fu%2BUN08qpB3bNydklI9bHEB4F%2FQw7aQ1WmqmQPGoaH1cwkcYf9rnHC6lnghksnB6GFUbr9%2F65gSleNT01DHbfYeSP0P3DQdgb4MgtzCmokod&X-Amz-Signature=984e2fcba3c832128b500e50e7cb8b1e538a67a695f0fc77810cfd8534694c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUBHFTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAoz0hDkKSpjmIKdAQNNikeh%2BX2Q5kO55y%2B9QlZyse2gIhAMPLbdqs8IO2X6ssfJkPKx5aAsF64aYhnutMgJP1k%2B1bKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWWaS8LQf5Kluz68q3ANJwVsLgTJyoZTT32JOv%2BvLYbKaxrrucTkjE9IYv%2FfqO1Ndymwg5wPvqhON02AmKNkWjWNiVxvQW0vlh8ChSKdtag9Q85%2Bffy8U%2FGiZ2IqqXSsnbwX7fWTVXG6obFUcWFl6q7r2A0LshmQ%2FYcTSHw%2FhUpXXhucFfdKvE6XUBjRE0Qnqq6jgvoRMxz7IxHS08pnZ99bHAGyrfpOH3HIVAx%2F0d0mwac5rk0SrMJPNfKT3gxSocyaFmo8ew0T7%2BXY4b5PEcOKNO8doLrrKen%2FeJfA31sNP4gaU8%2BOa8FetGENCjGu%2BXkIWbnRMvpiAg%2Bert9ldeV99EQUXL7v1EoaZmnpjb0JrriGOf7B6oS8qPDM4dMgU13O6kJCk6TyTYGKwETpLyXdAzpn1MUyygUtKYUHY%2FcOjaUXWPIv4KHScsqUroigSxOfc1JyoTS5iUaeIx0w8MkqD4R4GizTG9QWpRCHvfsejG0M5dzO7tFwkBYcPysB%2FuaRvp5ZyuuKptpzHsXZqg2P%2B%2FN8%2BuC1%2BGdqzK3JNyOiDwaMleV1%2BwpFOi8fdwKKSCWk0ClI8X1oLIuGwL7vgyngVwxn5N0ZcbhyA47fr81tMjFnJ5%2FymIu5eX36Mj7Gpc%2FM%2Fve2SMh4CKDCnu6nEBjqkAdtSLngggsoZ7pLMh2ODGo%2FXKVCiUbFM3yL1ykt7YUeURin1GJaIpNQr3Nu3faKqEdCiDOpb0RsnYiLVPaTh3m8bVdmRYoh%2BpuDhRexVYAtqscM1%2Fu%2BUN08qpB3bNydklI9bHEB4F%2FQw7aQ1WmqmQPGoaH1cwkcYf9rnHC6lnghksnB6GFUbr9%2F65gSleNT01DHbfYeSP0P3DQdgb4MgtzCmokod&X-Amz-Signature=26f663a9489c4829bba18fe4d499a596a966b4c8f6d86da9e324c85fff2eb70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUBHFTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAoz0hDkKSpjmIKdAQNNikeh%2BX2Q5kO55y%2B9QlZyse2gIhAMPLbdqs8IO2X6ssfJkPKx5aAsF64aYhnutMgJP1k%2B1bKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWWaS8LQf5Kluz68q3ANJwVsLgTJyoZTT32JOv%2BvLYbKaxrrucTkjE9IYv%2FfqO1Ndymwg5wPvqhON02AmKNkWjWNiVxvQW0vlh8ChSKdtag9Q85%2Bffy8U%2FGiZ2IqqXSsnbwX7fWTVXG6obFUcWFl6q7r2A0LshmQ%2FYcTSHw%2FhUpXXhucFfdKvE6XUBjRE0Qnqq6jgvoRMxz7IxHS08pnZ99bHAGyrfpOH3HIVAx%2F0d0mwac5rk0SrMJPNfKT3gxSocyaFmo8ew0T7%2BXY4b5PEcOKNO8doLrrKen%2FeJfA31sNP4gaU8%2BOa8FetGENCjGu%2BXkIWbnRMvpiAg%2Bert9ldeV99EQUXL7v1EoaZmnpjb0JrriGOf7B6oS8qPDM4dMgU13O6kJCk6TyTYGKwETpLyXdAzpn1MUyygUtKYUHY%2FcOjaUXWPIv4KHScsqUroigSxOfc1JyoTS5iUaeIx0w8MkqD4R4GizTG9QWpRCHvfsejG0M5dzO7tFwkBYcPysB%2FuaRvp5ZyuuKptpzHsXZqg2P%2B%2FN8%2BuC1%2BGdqzK3JNyOiDwaMleV1%2BwpFOi8fdwKKSCWk0ClI8X1oLIuGwL7vgyngVwxn5N0ZcbhyA47fr81tMjFnJ5%2FymIu5eX36Mj7Gpc%2FM%2Fve2SMh4CKDCnu6nEBjqkAdtSLngggsoZ7pLMh2ODGo%2FXKVCiUbFM3yL1ykt7YUeURin1GJaIpNQr3Nu3faKqEdCiDOpb0RsnYiLVPaTh3m8bVdmRYoh%2BpuDhRexVYAtqscM1%2Fu%2BUN08qpB3bNydklI9bHEB4F%2FQw7aQ1WmqmQPGoaH1cwkcYf9rnHC6lnghksnB6GFUbr9%2F65gSleNT01DHbfYeSP0P3DQdgb4MgtzCmokod&X-Amz-Signature=48d4acf9ae8bd3e54d7e26e6b76431d1f204653f372e1803a4c659be1b0259a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUBHFTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAoz0hDkKSpjmIKdAQNNikeh%2BX2Q5kO55y%2B9QlZyse2gIhAMPLbdqs8IO2X6ssfJkPKx5aAsF64aYhnutMgJP1k%2B1bKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWWaS8LQf5Kluz68q3ANJwVsLgTJyoZTT32JOv%2BvLYbKaxrrucTkjE9IYv%2FfqO1Ndymwg5wPvqhON02AmKNkWjWNiVxvQW0vlh8ChSKdtag9Q85%2Bffy8U%2FGiZ2IqqXSsnbwX7fWTVXG6obFUcWFl6q7r2A0LshmQ%2FYcTSHw%2FhUpXXhucFfdKvE6XUBjRE0Qnqq6jgvoRMxz7IxHS08pnZ99bHAGyrfpOH3HIVAx%2F0d0mwac5rk0SrMJPNfKT3gxSocyaFmo8ew0T7%2BXY4b5PEcOKNO8doLrrKen%2FeJfA31sNP4gaU8%2BOa8FetGENCjGu%2BXkIWbnRMvpiAg%2Bert9ldeV99EQUXL7v1EoaZmnpjb0JrriGOf7B6oS8qPDM4dMgU13O6kJCk6TyTYGKwETpLyXdAzpn1MUyygUtKYUHY%2FcOjaUXWPIv4KHScsqUroigSxOfc1JyoTS5iUaeIx0w8MkqD4R4GizTG9QWpRCHvfsejG0M5dzO7tFwkBYcPysB%2FuaRvp5ZyuuKptpzHsXZqg2P%2B%2FN8%2BuC1%2BGdqzK3JNyOiDwaMleV1%2BwpFOi8fdwKKSCWk0ClI8X1oLIuGwL7vgyngVwxn5N0ZcbhyA47fr81tMjFnJ5%2FymIu5eX36Mj7Gpc%2FM%2Fve2SMh4CKDCnu6nEBjqkAdtSLngggsoZ7pLMh2ODGo%2FXKVCiUbFM3yL1ykt7YUeURin1GJaIpNQr3Nu3faKqEdCiDOpb0RsnYiLVPaTh3m8bVdmRYoh%2BpuDhRexVYAtqscM1%2Fu%2BUN08qpB3bNydklI9bHEB4F%2FQw7aQ1WmqmQPGoaH1cwkcYf9rnHC6lnghksnB6GFUbr9%2F65gSleNT01DHbfYeSP0P3DQdgb4MgtzCmokod&X-Amz-Signature=c5e1639e3aa1dbeb3fac536ed843600d87061ec758212a1941c66281b48c8fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT2EOZF%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDYaAeO1HfTx5%2BhQlAVSt%2FQYuTIAnxRdVSK88WO9y8VPwIhAJZUvTVBOLjqVMdSfOJszkWTIDTrArOG6jUy2NSenGS%2BKv8DCAIQABoMNjM3NDIzMTgzODA1Igx7iF7I9bZiIwbUKh0q3APmfsq6HVMz3AQn3%2BZ1UAFlqxFx82MtkIxf5vrxI7PFMQwGPBUK%2FQRgOxzlJD%2FkH%2BxPYO9n2jQ2%2B0fRFiLiLSjvhBsof33sHAh17OA0EVzbYrFYMSwLvtOLTpojzD6ROICyJLVph2AF40G1Tc5bkGRgYq5CJoZdz4d9JXxiY7dREAhlMCL5FMPf96m7iRI3D124qub8E9DNp6fDF0gpz9M9wBkijZMLW1%2F0w9i8Mv1qWtpwZrOelI7OKCNXY%2BamF2mnCh61aglPLigfY1%2BkPd1fpsQVy1qWl3WyQ%2FER0OOKVS2bew6acXdM7p%2F24mBqDO7cUN199XO3ux7eK%2BGWiJGZLKQBT6wTShIcdRRmmUqsr5m%2B8WVLqeSy%2BGKKZY48%2FYSHN1Xr%2FrXdj8yWbHKsrGYFHcdQmj8oZu9nxeFyXS1CofhVkr4FwG5GoMZEamONu3NNimszms%2BIMOp8RMnS3G1CI3%2FRGuNQHBKUcuu1gQXrOd%2BQO%2Bce8%2F6sz1WCyIbv0hVqeyfFKCH7ty3DvLPxCli55OiOgQskoNgtoKEHZnbP1oCL7tmXg9VzATyoJ7vgYNLjBKcA1wb9Aam0tTK550dI7BW9hv5BpNFwK%2BTCFrfZjj22amJizT1401d0DTDdpPPQBjqkAT39VcnIbbx4gA85E2oUk%2FjfpmJP66EOoJYRV6WrwhA1bVxAV%2FCnM2UhlUFxK%2FS2%2B7P3%2BGUy7tuYVvyouclL5AztDifQx1BAtBNSu16AWrPqu%2BqXIAq7cddXJWYw5arSGu%2FqiehXifGEZrICyAhio4xYjvt3acT8ltj6fvNlAFGsdhnt%2FIGIqX9KWauIGSftA2RlQKXPnMD0w5KbcjCJUo5X2WTy&X-Amz-Signature=84b7886de5c14fd681f0af556f3e7f8ec6fdd228f7709bb64454b2fc7b7af03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT2EOZF%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDYaAeO1HfTx5%2BhQlAVSt%2FQYuTIAnxRdVSK88WO9y8VPwIhAJZUvTVBOLjqVMdSfOJszkWTIDTrArOG6jUy2NSenGS%2BKv8DCAIQABoMNjM3NDIzMTgzODA1Igx7iF7I9bZiIwbUKh0q3APmfsq6HVMz3AQn3%2BZ1UAFlqxFx82MtkIxf5vrxI7PFMQwGPBUK%2FQRgOxzlJD%2FkH%2BxPYO9n2jQ2%2B0fRFiLiLSjvhBsof33sHAh17OA0EVzbYrFYMSwLvtOLTpojzD6ROICyJLVph2AF40G1Tc5bkGRgYq5CJoZdz4d9JXxiY7dREAhlMCL5FMPf96m7iRI3D124qub8E9DNp6fDF0gpz9M9wBkijZMLW1%2F0w9i8Mv1qWtpwZrOelI7OKCNXY%2BamF2mnCh61aglPLigfY1%2BkPd1fpsQVy1qWl3WyQ%2FER0OOKVS2bew6acXdM7p%2F24mBqDO7cUN199XO3ux7eK%2BGWiJGZLKQBT6wTShIcdRRmmUqsr5m%2B8WVLqeSy%2BGKKZY48%2FYSHN1Xr%2FrXdj8yWbHKsrGYFHcdQmj8oZu9nxeFyXS1CofhVkr4FwG5GoMZEamONu3NNimszms%2BIMOp8RMnS3G1CI3%2FRGuNQHBKUcuu1gQXrOd%2BQO%2Bce8%2F6sz1WCyIbv0hVqeyfFKCH7ty3DvLPxCli55OiOgQskoNgtoKEHZnbP1oCL7tmXg9VzATyoJ7vgYNLjBKcA1wb9Aam0tTK550dI7BW9hv5BpNFwK%2BTCFrfZjj22amJizT1401d0DTDdpPPQBjqkAT39VcnIbbx4gA85E2oUk%2FjfpmJP66EOoJYRV6WrwhA1bVxAV%2FCnM2UhlUFxK%2FS2%2B7P3%2BGUy7tuYVvyouclL5AztDifQx1BAtBNSu16AWrPqu%2BqXIAq7cddXJWYw5arSGu%2FqiehXifGEZrICyAhio4xYjvt3acT8ltj6fvNlAFGsdhnt%2FIGIqX9KWauIGSftA2RlQKXPnMD0w5KbcjCJUo5X2WTy&X-Amz-Signature=bcad116f727dae069419097d149330a5d0dba9b9c08f4b1af3a84d10d26122bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT2EOZF%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDYaAeO1HfTx5%2BhQlAVSt%2FQYuTIAnxRdVSK88WO9y8VPwIhAJZUvTVBOLjqVMdSfOJszkWTIDTrArOG6jUy2NSenGS%2BKv8DCAIQABoMNjM3NDIzMTgzODA1Igx7iF7I9bZiIwbUKh0q3APmfsq6HVMz3AQn3%2BZ1UAFlqxFx82MtkIxf5vrxI7PFMQwGPBUK%2FQRgOxzlJD%2FkH%2BxPYO9n2jQ2%2B0fRFiLiLSjvhBsof33sHAh17OA0EVzbYrFYMSwLvtOLTpojzD6ROICyJLVph2AF40G1Tc5bkGRgYq5CJoZdz4d9JXxiY7dREAhlMCL5FMPf96m7iRI3D124qub8E9DNp6fDF0gpz9M9wBkijZMLW1%2F0w9i8Mv1qWtpwZrOelI7OKCNXY%2BamF2mnCh61aglPLigfY1%2BkPd1fpsQVy1qWl3WyQ%2FER0OOKVS2bew6acXdM7p%2F24mBqDO7cUN199XO3ux7eK%2BGWiJGZLKQBT6wTShIcdRRmmUqsr5m%2B8WVLqeSy%2BGKKZY48%2FYSHN1Xr%2FrXdj8yWbHKsrGYFHcdQmj8oZu9nxeFyXS1CofhVkr4FwG5GoMZEamONu3NNimszms%2BIMOp8RMnS3G1CI3%2FRGuNQHBKUcuu1gQXrOd%2BQO%2Bce8%2F6sz1WCyIbv0hVqeyfFKCH7ty3DvLPxCli55OiOgQskoNgtoKEHZnbP1oCL7tmXg9VzATyoJ7vgYNLjBKcA1wb9Aam0tTK550dI7BW9hv5BpNFwK%2BTCFrfZjj22amJizT1401d0DTDdpPPQBjqkAT39VcnIbbx4gA85E2oUk%2FjfpmJP66EOoJYRV6WrwhA1bVxAV%2FCnM2UhlUFxK%2FS2%2B7P3%2BGUy7tuYVvyouclL5AztDifQx1BAtBNSu16AWrPqu%2BqXIAq7cddXJWYw5arSGu%2FqiehXifGEZrICyAhio4xYjvt3acT8ltj6fvNlAFGsdhnt%2FIGIqX9KWauIGSftA2RlQKXPnMD0w5KbcjCJUo5X2WTy&X-Amz-Signature=2b9ba9ef92a3401a49c6e27d95ef1f8746c80e3351266b4e96df404b01d98991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT2EOZF%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDYaAeO1HfTx5%2BhQlAVSt%2FQYuTIAnxRdVSK88WO9y8VPwIhAJZUvTVBOLjqVMdSfOJszkWTIDTrArOG6jUy2NSenGS%2BKv8DCAIQABoMNjM3NDIzMTgzODA1Igx7iF7I9bZiIwbUKh0q3APmfsq6HVMz3AQn3%2BZ1UAFlqxFx82MtkIxf5vrxI7PFMQwGPBUK%2FQRgOxzlJD%2FkH%2BxPYO9n2jQ2%2B0fRFiLiLSjvhBsof33sHAh17OA0EVzbYrFYMSwLvtOLTpojzD6ROICyJLVph2AF40G1Tc5bkGRgYq5CJoZdz4d9JXxiY7dREAhlMCL5FMPf96m7iRI3D124qub8E9DNp6fDF0gpz9M9wBkijZMLW1%2F0w9i8Mv1qWtpwZrOelI7OKCNXY%2BamF2mnCh61aglPLigfY1%2BkPd1fpsQVy1qWl3WyQ%2FER0OOKVS2bew6acXdM7p%2F24mBqDO7cUN199XO3ux7eK%2BGWiJGZLKQBT6wTShIcdRRmmUqsr5m%2B8WVLqeSy%2BGKKZY48%2FYSHN1Xr%2FrXdj8yWbHKsrGYFHcdQmj8oZu9nxeFyXS1CofhVkr4FwG5GoMZEamONu3NNimszms%2BIMOp8RMnS3G1CI3%2FRGuNQHBKUcuu1gQXrOd%2BQO%2Bce8%2F6sz1WCyIbv0hVqeyfFKCH7ty3DvLPxCli55OiOgQskoNgtoKEHZnbP1oCL7tmXg9VzATyoJ7vgYNLjBKcA1wb9Aam0tTK550dI7BW9hv5BpNFwK%2BTCFrfZjj22amJizT1401d0DTDdpPPQBjqkAT39VcnIbbx4gA85E2oUk%2FjfpmJP66EOoJYRV6WrwhA1bVxAV%2FCnM2UhlUFxK%2FS2%2B7P3%2BGUy7tuYVvyouclL5AztDifQx1BAtBNSu16AWrPqu%2BqXIAq7cddXJWYw5arSGu%2FqiehXifGEZrICyAhio4xYjvt3acT8ltj6fvNlAFGsdhnt%2FIGIqX9KWauIGSftA2RlQKXPnMD0w5KbcjCJUo5X2WTy&X-Amz-Signature=db2fdf4173d72944998cac1e0ad7a69ecb7074703edd2adbfba7dd6d3445b5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT2EOZF%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDYaAeO1HfTx5%2BhQlAVSt%2FQYuTIAnxRdVSK88WO9y8VPwIhAJZUvTVBOLjqVMdSfOJszkWTIDTrArOG6jUy2NSenGS%2BKv8DCAIQABoMNjM3NDIzMTgzODA1Igx7iF7I9bZiIwbUKh0q3APmfsq6HVMz3AQn3%2BZ1UAFlqxFx82MtkIxf5vrxI7PFMQwGPBUK%2FQRgOxzlJD%2FkH%2BxPYO9n2jQ2%2B0fRFiLiLSjvhBsof33sHAh17OA0EVzbYrFYMSwLvtOLTpojzD6ROICyJLVph2AF40G1Tc5bkGRgYq5CJoZdz4d9JXxiY7dREAhlMCL5FMPf96m7iRI3D124qub8E9DNp6fDF0gpz9M9wBkijZMLW1%2F0w9i8Mv1qWtpwZrOelI7OKCNXY%2BamF2mnCh61aglPLigfY1%2BkPd1fpsQVy1qWl3WyQ%2FER0OOKVS2bew6acXdM7p%2F24mBqDO7cUN199XO3ux7eK%2BGWiJGZLKQBT6wTShIcdRRmmUqsr5m%2B8WVLqeSy%2BGKKZY48%2FYSHN1Xr%2FrXdj8yWbHKsrGYFHcdQmj8oZu9nxeFyXS1CofhVkr4FwG5GoMZEamONu3NNimszms%2BIMOp8RMnS3G1CI3%2FRGuNQHBKUcuu1gQXrOd%2BQO%2Bce8%2F6sz1WCyIbv0hVqeyfFKCH7ty3DvLPxCli55OiOgQskoNgtoKEHZnbP1oCL7tmXg9VzATyoJ7vgYNLjBKcA1wb9Aam0tTK550dI7BW9hv5BpNFwK%2BTCFrfZjj22amJizT1401d0DTDdpPPQBjqkAT39VcnIbbx4gA85E2oUk%2FjfpmJP66EOoJYRV6WrwhA1bVxAV%2FCnM2UhlUFxK%2FS2%2B7P3%2BGUy7tuYVvyouclL5AztDifQx1BAtBNSu16AWrPqu%2BqXIAq7cddXJWYw5arSGu%2FqiehXifGEZrICyAhio4xYjvt3acT8ltj6fvNlAFGsdhnt%2FIGIqX9KWauIGSftA2RlQKXPnMD0w5KbcjCJUo5X2WTy&X-Amz-Signature=da1dea4fe5d1b19b7eec01fab3f3b5fd7c91efb01a909e80c0588a995a25a84c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT2EOZF%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDYaAeO1HfTx5%2BhQlAVSt%2FQYuTIAnxRdVSK88WO9y8VPwIhAJZUvTVBOLjqVMdSfOJszkWTIDTrArOG6jUy2NSenGS%2BKv8DCAIQABoMNjM3NDIzMTgzODA1Igx7iF7I9bZiIwbUKh0q3APmfsq6HVMz3AQn3%2BZ1UAFlqxFx82MtkIxf5vrxI7PFMQwGPBUK%2FQRgOxzlJD%2FkH%2BxPYO9n2jQ2%2B0fRFiLiLSjvhBsof33sHAh17OA0EVzbYrFYMSwLvtOLTpojzD6ROICyJLVph2AF40G1Tc5bkGRgYq5CJoZdz4d9JXxiY7dREAhlMCL5FMPf96m7iRI3D124qub8E9DNp6fDF0gpz9M9wBkijZMLW1%2F0w9i8Mv1qWtpwZrOelI7OKCNXY%2BamF2mnCh61aglPLigfY1%2BkPd1fpsQVy1qWl3WyQ%2FER0OOKVS2bew6acXdM7p%2F24mBqDO7cUN199XO3ux7eK%2BGWiJGZLKQBT6wTShIcdRRmmUqsr5m%2B8WVLqeSy%2BGKKZY48%2FYSHN1Xr%2FrXdj8yWbHKsrGYFHcdQmj8oZu9nxeFyXS1CofhVkr4FwG5GoMZEamONu3NNimszms%2BIMOp8RMnS3G1CI3%2FRGuNQHBKUcuu1gQXrOd%2BQO%2Bce8%2F6sz1WCyIbv0hVqeyfFKCH7ty3DvLPxCli55OiOgQskoNgtoKEHZnbP1oCL7tmXg9VzATyoJ7vgYNLjBKcA1wb9Aam0tTK550dI7BW9hv5BpNFwK%2BTCFrfZjj22amJizT1401d0DTDdpPPQBjqkAT39VcnIbbx4gA85E2oUk%2FjfpmJP66EOoJYRV6WrwhA1bVxAV%2FCnM2UhlUFxK%2FS2%2B7P3%2BGUy7tuYVvyouclL5AztDifQx1BAtBNSu16AWrPqu%2BqXIAq7cddXJWYw5arSGu%2FqiehXifGEZrICyAhio4xYjvt3acT8ltj6fvNlAFGsdhnt%2FIGIqX9KWauIGSftA2RlQKXPnMD0w5KbcjCJUo5X2WTy&X-Amz-Signature=8d0b464e578f5bb4c109c43e6f830a185a45592cb6676f219c900687e188b90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT2EOZF%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDYaAeO1HfTx5%2BhQlAVSt%2FQYuTIAnxRdVSK88WO9y8VPwIhAJZUvTVBOLjqVMdSfOJszkWTIDTrArOG6jUy2NSenGS%2BKv8DCAIQABoMNjM3NDIzMTgzODA1Igx7iF7I9bZiIwbUKh0q3APmfsq6HVMz3AQn3%2BZ1UAFlqxFx82MtkIxf5vrxI7PFMQwGPBUK%2FQRgOxzlJD%2FkH%2BxPYO9n2jQ2%2B0fRFiLiLSjvhBsof33sHAh17OA0EVzbYrFYMSwLvtOLTpojzD6ROICyJLVph2AF40G1Tc5bkGRgYq5CJoZdz4d9JXxiY7dREAhlMCL5FMPf96m7iRI3D124qub8E9DNp6fDF0gpz9M9wBkijZMLW1%2F0w9i8Mv1qWtpwZrOelI7OKCNXY%2BamF2mnCh61aglPLigfY1%2BkPd1fpsQVy1qWl3WyQ%2FER0OOKVS2bew6acXdM7p%2F24mBqDO7cUN199XO3ux7eK%2BGWiJGZLKQBT6wTShIcdRRmmUqsr5m%2B8WVLqeSy%2BGKKZY48%2FYSHN1Xr%2FrXdj8yWbHKsrGYFHcdQmj8oZu9nxeFyXS1CofhVkr4FwG5GoMZEamONu3NNimszms%2BIMOp8RMnS3G1CI3%2FRGuNQHBKUcuu1gQXrOd%2BQO%2Bce8%2F6sz1WCyIbv0hVqeyfFKCH7ty3DvLPxCli55OiOgQskoNgtoKEHZnbP1oCL7tmXg9VzATyoJ7vgYNLjBKcA1wb9Aam0tTK550dI7BW9hv5BpNFwK%2BTCFrfZjj22amJizT1401d0DTDdpPPQBjqkAT39VcnIbbx4gA85E2oUk%2FjfpmJP66EOoJYRV6WrwhA1bVxAV%2FCnM2UhlUFxK%2FS2%2B7P3%2BGUy7tuYVvyouclL5AztDifQx1BAtBNSu16AWrPqu%2BqXIAq7cddXJWYw5arSGu%2FqiehXifGEZrICyAhio4xYjvt3acT8ltj6fvNlAFGsdhnt%2FIGIqX9KWauIGSftA2RlQKXPnMD0w5KbcjCJUo5X2WTy&X-Amz-Signature=659bdaba2cd5fd0c23f3a512d0bca26bf01cf1b27c1cfb203ce57ce03728473a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT2EOZF%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDYaAeO1HfTx5%2BhQlAVSt%2FQYuTIAnxRdVSK88WO9y8VPwIhAJZUvTVBOLjqVMdSfOJszkWTIDTrArOG6jUy2NSenGS%2BKv8DCAIQABoMNjM3NDIzMTgzODA1Igx7iF7I9bZiIwbUKh0q3APmfsq6HVMz3AQn3%2BZ1UAFlqxFx82MtkIxf5vrxI7PFMQwGPBUK%2FQRgOxzlJD%2FkH%2BxPYO9n2jQ2%2B0fRFiLiLSjvhBsof33sHAh17OA0EVzbYrFYMSwLvtOLTpojzD6ROICyJLVph2AF40G1Tc5bkGRgYq5CJoZdz4d9JXxiY7dREAhlMCL5FMPf96m7iRI3D124qub8E9DNp6fDF0gpz9M9wBkijZMLW1%2F0w9i8Mv1qWtpwZrOelI7OKCNXY%2BamF2mnCh61aglPLigfY1%2BkPd1fpsQVy1qWl3WyQ%2FER0OOKVS2bew6acXdM7p%2F24mBqDO7cUN199XO3ux7eK%2BGWiJGZLKQBT6wTShIcdRRmmUqsr5m%2B8WVLqeSy%2BGKKZY48%2FYSHN1Xr%2FrXdj8yWbHKsrGYFHcdQmj8oZu9nxeFyXS1CofhVkr4FwG5GoMZEamONu3NNimszms%2BIMOp8RMnS3G1CI3%2FRGuNQHBKUcuu1gQXrOd%2BQO%2Bce8%2F6sz1WCyIbv0hVqeyfFKCH7ty3DvLPxCli55OiOgQskoNgtoKEHZnbP1oCL7tmXg9VzATyoJ7vgYNLjBKcA1wb9Aam0tTK550dI7BW9hv5BpNFwK%2BTCFrfZjj22amJizT1401d0DTDdpPPQBjqkAT39VcnIbbx4gA85E2oUk%2FjfpmJP66EOoJYRV6WrwhA1bVxAV%2FCnM2UhlUFxK%2FS2%2B7P3%2BGUy7tuYVvyouclL5AztDifQx1BAtBNSu16AWrPqu%2BqXIAq7cddXJWYw5arSGu%2FqiehXifGEZrICyAhio4xYjvt3acT8ltj6fvNlAFGsdhnt%2FIGIqX9KWauIGSftA2RlQKXPnMD0w5KbcjCJUo5X2WTy&X-Amz-Signature=335d8f5d046db371074437749f11fb940843ed6df0698f6b6f6f0a4027acfa03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

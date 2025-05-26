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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47UJO7Z%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW3NKK3krcCUqp6npwl%2BDpOawV02sOp0QdknSTL0X9%2FAiBH%2Bs%2F7w7EwDGRMWU62tkh53iMCsDOkyJRZ%2FVgVJHPUQyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMYNtZyB3hy93FaXSaKtwDAz%2BLrXAdkbNEjec74%2FnJnhsIOYC6mz1pmQ2R1AgmkAEBp%2BLM2EVO1Mn6jUoUn8b8Wt1Ji3qzn%2F8T8i19%2FkmZY3Y%2FkCR1N%2B5rrsjBOpDf0Z5qQAsqpXqfJ9qCluNz%2BQLFxJHJUHBecOD5ArQMxOarbFMUJsH0abs3zryse5SgOUwHFn5hmLFf%2FtDfZewUWuHlYS383F%2BW8RKSF0r01JxfuUHJwzv4J0xp%2F2EzZS3Mvyodrh2iNXTZavYt1j4Jr2e9dRiz%2F3zZih%2BFcY8gdNEuKWNEf%2F2PiWw0UtKe2j%2FXCDw%2F2pn1jffHTCR5wTQMy924CCqC0bOpe9MkGcdDAtbCNkWIaPUgmGCZclLF%2BIn6IROU9Rltk%2B00m%2B3k%2B1IM1%2BcJbGV9hkEbRQrL86q0Ktef3Vq81WntwvX4nWtIwgO0tZp%2FuwNYw6i5Zwp8z2mCsKMViS%2BQ0btfd2ytJmR46NWG5pBBhcIvE6UnPe7AwboeY4X%2Brt2hWbPoupYzeuO1ESOGGwb3ZGBu1c1r5TKJGX%2FpBts3gav6wMsfzWKa1DBxXLV39mKhz00Fzw%2BSLjEcOe%2F%2BqtD1ViaSE3p9tT7sQmku2iJAAo%2BmgnqDZ4M2cNy1PHK04TVe%2FBY8mBWb6%2FAwz6vTwQY6pgGsXSkMCGyXV6Uo6Bbpy15XpbuN2Zi4ykmljI3hV2NjwdmIP0BiNDrgEXOlHm5UN3v4T9qul3jdepGeoAmQl1xZbNFguIvRMLZFdrXYsuAlTxZZ4OBtLXcnVKdM66emMhL4eDZ02weEc3q3uluy%2FCHHAunurv59Fk8yvjQpTLvya07ElSFtriOF6qNoalTS274vYCAjzNQr9d%2BF5pWxkL7rg1LYQPDr&X-Amz-Signature=eecb25b3a806d54ca3dfe8ed12f0b0df94d37839dfe307de6bdaf9fb83bb4ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47UJO7Z%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW3NKK3krcCUqp6npwl%2BDpOawV02sOp0QdknSTL0X9%2FAiBH%2Bs%2F7w7EwDGRMWU62tkh53iMCsDOkyJRZ%2FVgVJHPUQyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMYNtZyB3hy93FaXSaKtwDAz%2BLrXAdkbNEjec74%2FnJnhsIOYC6mz1pmQ2R1AgmkAEBp%2BLM2EVO1Mn6jUoUn8b8Wt1Ji3qzn%2F8T8i19%2FkmZY3Y%2FkCR1N%2B5rrsjBOpDf0Z5qQAsqpXqfJ9qCluNz%2BQLFxJHJUHBecOD5ArQMxOarbFMUJsH0abs3zryse5SgOUwHFn5hmLFf%2FtDfZewUWuHlYS383F%2BW8RKSF0r01JxfuUHJwzv4J0xp%2F2EzZS3Mvyodrh2iNXTZavYt1j4Jr2e9dRiz%2F3zZih%2BFcY8gdNEuKWNEf%2F2PiWw0UtKe2j%2FXCDw%2F2pn1jffHTCR5wTQMy924CCqC0bOpe9MkGcdDAtbCNkWIaPUgmGCZclLF%2BIn6IROU9Rltk%2B00m%2B3k%2B1IM1%2BcJbGV9hkEbRQrL86q0Ktef3Vq81WntwvX4nWtIwgO0tZp%2FuwNYw6i5Zwp8z2mCsKMViS%2BQ0btfd2ytJmR46NWG5pBBhcIvE6UnPe7AwboeY4X%2Brt2hWbPoupYzeuO1ESOGGwb3ZGBu1c1r5TKJGX%2FpBts3gav6wMsfzWKa1DBxXLV39mKhz00Fzw%2BSLjEcOe%2F%2BqtD1ViaSE3p9tT7sQmku2iJAAo%2BmgnqDZ4M2cNy1PHK04TVe%2FBY8mBWb6%2FAwz6vTwQY6pgGsXSkMCGyXV6Uo6Bbpy15XpbuN2Zi4ykmljI3hV2NjwdmIP0BiNDrgEXOlHm5UN3v4T9qul3jdepGeoAmQl1xZbNFguIvRMLZFdrXYsuAlTxZZ4OBtLXcnVKdM66emMhL4eDZ02weEc3q3uluy%2FCHHAunurv59Fk8yvjQpTLvya07ElSFtriOF6qNoalTS274vYCAjzNQr9d%2BF5pWxkL7rg1LYQPDr&X-Amz-Signature=82d0263b4be6019d0bbe87e70b5e2556b46c8b7fb7586c4552c80bf302b60e31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47UJO7Z%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW3NKK3krcCUqp6npwl%2BDpOawV02sOp0QdknSTL0X9%2FAiBH%2Bs%2F7w7EwDGRMWU62tkh53iMCsDOkyJRZ%2FVgVJHPUQyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMYNtZyB3hy93FaXSaKtwDAz%2BLrXAdkbNEjec74%2FnJnhsIOYC6mz1pmQ2R1AgmkAEBp%2BLM2EVO1Mn6jUoUn8b8Wt1Ji3qzn%2F8T8i19%2FkmZY3Y%2FkCR1N%2B5rrsjBOpDf0Z5qQAsqpXqfJ9qCluNz%2BQLFxJHJUHBecOD5ArQMxOarbFMUJsH0abs3zryse5SgOUwHFn5hmLFf%2FtDfZewUWuHlYS383F%2BW8RKSF0r01JxfuUHJwzv4J0xp%2F2EzZS3Mvyodrh2iNXTZavYt1j4Jr2e9dRiz%2F3zZih%2BFcY8gdNEuKWNEf%2F2PiWw0UtKe2j%2FXCDw%2F2pn1jffHTCR5wTQMy924CCqC0bOpe9MkGcdDAtbCNkWIaPUgmGCZclLF%2BIn6IROU9Rltk%2B00m%2B3k%2B1IM1%2BcJbGV9hkEbRQrL86q0Ktef3Vq81WntwvX4nWtIwgO0tZp%2FuwNYw6i5Zwp8z2mCsKMViS%2BQ0btfd2ytJmR46NWG5pBBhcIvE6UnPe7AwboeY4X%2Brt2hWbPoupYzeuO1ESOGGwb3ZGBu1c1r5TKJGX%2FpBts3gav6wMsfzWKa1DBxXLV39mKhz00Fzw%2BSLjEcOe%2F%2BqtD1ViaSE3p9tT7sQmku2iJAAo%2BmgnqDZ4M2cNy1PHK04TVe%2FBY8mBWb6%2FAwz6vTwQY6pgGsXSkMCGyXV6Uo6Bbpy15XpbuN2Zi4ykmljI3hV2NjwdmIP0BiNDrgEXOlHm5UN3v4T9qul3jdepGeoAmQl1xZbNFguIvRMLZFdrXYsuAlTxZZ4OBtLXcnVKdM66emMhL4eDZ02weEc3q3uluy%2FCHHAunurv59Fk8yvjQpTLvya07ElSFtriOF6qNoalTS274vYCAjzNQr9d%2BF5pWxkL7rg1LYQPDr&X-Amz-Signature=6738cbbda34033c756ee3fa4b9ae86f7ea37b086028e78c2a30ae55498ebdd7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47UJO7Z%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW3NKK3krcCUqp6npwl%2BDpOawV02sOp0QdknSTL0X9%2FAiBH%2Bs%2F7w7EwDGRMWU62tkh53iMCsDOkyJRZ%2FVgVJHPUQyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMYNtZyB3hy93FaXSaKtwDAz%2BLrXAdkbNEjec74%2FnJnhsIOYC6mz1pmQ2R1AgmkAEBp%2BLM2EVO1Mn6jUoUn8b8Wt1Ji3qzn%2F8T8i19%2FkmZY3Y%2FkCR1N%2B5rrsjBOpDf0Z5qQAsqpXqfJ9qCluNz%2BQLFxJHJUHBecOD5ArQMxOarbFMUJsH0abs3zryse5SgOUwHFn5hmLFf%2FtDfZewUWuHlYS383F%2BW8RKSF0r01JxfuUHJwzv4J0xp%2F2EzZS3Mvyodrh2iNXTZavYt1j4Jr2e9dRiz%2F3zZih%2BFcY8gdNEuKWNEf%2F2PiWw0UtKe2j%2FXCDw%2F2pn1jffHTCR5wTQMy924CCqC0bOpe9MkGcdDAtbCNkWIaPUgmGCZclLF%2BIn6IROU9Rltk%2B00m%2B3k%2B1IM1%2BcJbGV9hkEbRQrL86q0Ktef3Vq81WntwvX4nWtIwgO0tZp%2FuwNYw6i5Zwp8z2mCsKMViS%2BQ0btfd2ytJmR46NWG5pBBhcIvE6UnPe7AwboeY4X%2Brt2hWbPoupYzeuO1ESOGGwb3ZGBu1c1r5TKJGX%2FpBts3gav6wMsfzWKa1DBxXLV39mKhz00Fzw%2BSLjEcOe%2F%2BqtD1ViaSE3p9tT7sQmku2iJAAo%2BmgnqDZ4M2cNy1PHK04TVe%2FBY8mBWb6%2FAwz6vTwQY6pgGsXSkMCGyXV6Uo6Bbpy15XpbuN2Zi4ykmljI3hV2NjwdmIP0BiNDrgEXOlHm5UN3v4T9qul3jdepGeoAmQl1xZbNFguIvRMLZFdrXYsuAlTxZZ4OBtLXcnVKdM66emMhL4eDZ02weEc3q3uluy%2FCHHAunurv59Fk8yvjQpTLvya07ElSFtriOF6qNoalTS274vYCAjzNQr9d%2BF5pWxkL7rg1LYQPDr&X-Amz-Signature=31e531ebaefadeb2e3b3a0d675fe3acb0994b7aa54b8b15ad0f2bc3c522bdf16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47UJO7Z%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW3NKK3krcCUqp6npwl%2BDpOawV02sOp0QdknSTL0X9%2FAiBH%2Bs%2F7w7EwDGRMWU62tkh53iMCsDOkyJRZ%2FVgVJHPUQyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMYNtZyB3hy93FaXSaKtwDAz%2BLrXAdkbNEjec74%2FnJnhsIOYC6mz1pmQ2R1AgmkAEBp%2BLM2EVO1Mn6jUoUn8b8Wt1Ji3qzn%2F8T8i19%2FkmZY3Y%2FkCR1N%2B5rrsjBOpDf0Z5qQAsqpXqfJ9qCluNz%2BQLFxJHJUHBecOD5ArQMxOarbFMUJsH0abs3zryse5SgOUwHFn5hmLFf%2FtDfZewUWuHlYS383F%2BW8RKSF0r01JxfuUHJwzv4J0xp%2F2EzZS3Mvyodrh2iNXTZavYt1j4Jr2e9dRiz%2F3zZih%2BFcY8gdNEuKWNEf%2F2PiWw0UtKe2j%2FXCDw%2F2pn1jffHTCR5wTQMy924CCqC0bOpe9MkGcdDAtbCNkWIaPUgmGCZclLF%2BIn6IROU9Rltk%2B00m%2B3k%2B1IM1%2BcJbGV9hkEbRQrL86q0Ktef3Vq81WntwvX4nWtIwgO0tZp%2FuwNYw6i5Zwp8z2mCsKMViS%2BQ0btfd2ytJmR46NWG5pBBhcIvE6UnPe7AwboeY4X%2Brt2hWbPoupYzeuO1ESOGGwb3ZGBu1c1r5TKJGX%2FpBts3gav6wMsfzWKa1DBxXLV39mKhz00Fzw%2BSLjEcOe%2F%2BqtD1ViaSE3p9tT7sQmku2iJAAo%2BmgnqDZ4M2cNy1PHK04TVe%2FBY8mBWb6%2FAwz6vTwQY6pgGsXSkMCGyXV6Uo6Bbpy15XpbuN2Zi4ykmljI3hV2NjwdmIP0BiNDrgEXOlHm5UN3v4T9qul3jdepGeoAmQl1xZbNFguIvRMLZFdrXYsuAlTxZZ4OBtLXcnVKdM66emMhL4eDZ02weEc3q3uluy%2FCHHAunurv59Fk8yvjQpTLvya07ElSFtriOF6qNoalTS274vYCAjzNQr9d%2BF5pWxkL7rg1LYQPDr&X-Amz-Signature=b4825c00d65d0f2e2e3b5bd1b400d245a56790924ce8ff574ac9cae20f40bcf4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47UJO7Z%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW3NKK3krcCUqp6npwl%2BDpOawV02sOp0QdknSTL0X9%2FAiBH%2Bs%2F7w7EwDGRMWU62tkh53iMCsDOkyJRZ%2FVgVJHPUQyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMYNtZyB3hy93FaXSaKtwDAz%2BLrXAdkbNEjec74%2FnJnhsIOYC6mz1pmQ2R1AgmkAEBp%2BLM2EVO1Mn6jUoUn8b8Wt1Ji3qzn%2F8T8i19%2FkmZY3Y%2FkCR1N%2B5rrsjBOpDf0Z5qQAsqpXqfJ9qCluNz%2BQLFxJHJUHBecOD5ArQMxOarbFMUJsH0abs3zryse5SgOUwHFn5hmLFf%2FtDfZewUWuHlYS383F%2BW8RKSF0r01JxfuUHJwzv4J0xp%2F2EzZS3Mvyodrh2iNXTZavYt1j4Jr2e9dRiz%2F3zZih%2BFcY8gdNEuKWNEf%2F2PiWw0UtKe2j%2FXCDw%2F2pn1jffHTCR5wTQMy924CCqC0bOpe9MkGcdDAtbCNkWIaPUgmGCZclLF%2BIn6IROU9Rltk%2B00m%2B3k%2B1IM1%2BcJbGV9hkEbRQrL86q0Ktef3Vq81WntwvX4nWtIwgO0tZp%2FuwNYw6i5Zwp8z2mCsKMViS%2BQ0btfd2ytJmR46NWG5pBBhcIvE6UnPe7AwboeY4X%2Brt2hWbPoupYzeuO1ESOGGwb3ZGBu1c1r5TKJGX%2FpBts3gav6wMsfzWKa1DBxXLV39mKhz00Fzw%2BSLjEcOe%2F%2BqtD1ViaSE3p9tT7sQmku2iJAAo%2BmgnqDZ4M2cNy1PHK04TVe%2FBY8mBWb6%2FAwz6vTwQY6pgGsXSkMCGyXV6Uo6Bbpy15XpbuN2Zi4ykmljI3hV2NjwdmIP0BiNDrgEXOlHm5UN3v4T9qul3jdepGeoAmQl1xZbNFguIvRMLZFdrXYsuAlTxZZ4OBtLXcnVKdM66emMhL4eDZ02weEc3q3uluy%2FCHHAunurv59Fk8yvjQpTLvya07ElSFtriOF6qNoalTS274vYCAjzNQr9d%2BF5pWxkL7rg1LYQPDr&X-Amz-Signature=78bb098e5c24a96f729227f74960d4d6166e6e74695ec95276f984ccac2ecd9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47UJO7Z%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW3NKK3krcCUqp6npwl%2BDpOawV02sOp0QdknSTL0X9%2FAiBH%2Bs%2F7w7EwDGRMWU62tkh53iMCsDOkyJRZ%2FVgVJHPUQyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMYNtZyB3hy93FaXSaKtwDAz%2BLrXAdkbNEjec74%2FnJnhsIOYC6mz1pmQ2R1AgmkAEBp%2BLM2EVO1Mn6jUoUn8b8Wt1Ji3qzn%2F8T8i19%2FkmZY3Y%2FkCR1N%2B5rrsjBOpDf0Z5qQAsqpXqfJ9qCluNz%2BQLFxJHJUHBecOD5ArQMxOarbFMUJsH0abs3zryse5SgOUwHFn5hmLFf%2FtDfZewUWuHlYS383F%2BW8RKSF0r01JxfuUHJwzv4J0xp%2F2EzZS3Mvyodrh2iNXTZavYt1j4Jr2e9dRiz%2F3zZih%2BFcY8gdNEuKWNEf%2F2PiWw0UtKe2j%2FXCDw%2F2pn1jffHTCR5wTQMy924CCqC0bOpe9MkGcdDAtbCNkWIaPUgmGCZclLF%2BIn6IROU9Rltk%2B00m%2B3k%2B1IM1%2BcJbGV9hkEbRQrL86q0Ktef3Vq81WntwvX4nWtIwgO0tZp%2FuwNYw6i5Zwp8z2mCsKMViS%2BQ0btfd2ytJmR46NWG5pBBhcIvE6UnPe7AwboeY4X%2Brt2hWbPoupYzeuO1ESOGGwb3ZGBu1c1r5TKJGX%2FpBts3gav6wMsfzWKa1DBxXLV39mKhz00Fzw%2BSLjEcOe%2F%2BqtD1ViaSE3p9tT7sQmku2iJAAo%2BmgnqDZ4M2cNy1PHK04TVe%2FBY8mBWb6%2FAwz6vTwQY6pgGsXSkMCGyXV6Uo6Bbpy15XpbuN2Zi4ykmljI3hV2NjwdmIP0BiNDrgEXOlHm5UN3v4T9qul3jdepGeoAmQl1xZbNFguIvRMLZFdrXYsuAlTxZZ4OBtLXcnVKdM66emMhL4eDZ02weEc3q3uluy%2FCHHAunurv59Fk8yvjQpTLvya07ElSFtriOF6qNoalTS274vYCAjzNQr9d%2BF5pWxkL7rg1LYQPDr&X-Amz-Signature=f2718fa24cf52d2eea05312edb3ff7a224aae950810a1e8b0e8267d54ebeb22d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47UJO7Z%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW3NKK3krcCUqp6npwl%2BDpOawV02sOp0QdknSTL0X9%2FAiBH%2Bs%2F7w7EwDGRMWU62tkh53iMCsDOkyJRZ%2FVgVJHPUQyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMYNtZyB3hy93FaXSaKtwDAz%2BLrXAdkbNEjec74%2FnJnhsIOYC6mz1pmQ2R1AgmkAEBp%2BLM2EVO1Mn6jUoUn8b8Wt1Ji3qzn%2F8T8i19%2FkmZY3Y%2FkCR1N%2B5rrsjBOpDf0Z5qQAsqpXqfJ9qCluNz%2BQLFxJHJUHBecOD5ArQMxOarbFMUJsH0abs3zryse5SgOUwHFn5hmLFf%2FtDfZewUWuHlYS383F%2BW8RKSF0r01JxfuUHJwzv4J0xp%2F2EzZS3Mvyodrh2iNXTZavYt1j4Jr2e9dRiz%2F3zZih%2BFcY8gdNEuKWNEf%2F2PiWw0UtKe2j%2FXCDw%2F2pn1jffHTCR5wTQMy924CCqC0bOpe9MkGcdDAtbCNkWIaPUgmGCZclLF%2BIn6IROU9Rltk%2B00m%2B3k%2B1IM1%2BcJbGV9hkEbRQrL86q0Ktef3Vq81WntwvX4nWtIwgO0tZp%2FuwNYw6i5Zwp8z2mCsKMViS%2BQ0btfd2ytJmR46NWG5pBBhcIvE6UnPe7AwboeY4X%2Brt2hWbPoupYzeuO1ESOGGwb3ZGBu1c1r5TKJGX%2FpBts3gav6wMsfzWKa1DBxXLV39mKhz00Fzw%2BSLjEcOe%2F%2BqtD1ViaSE3p9tT7sQmku2iJAAo%2BmgnqDZ4M2cNy1PHK04TVe%2FBY8mBWb6%2FAwz6vTwQY6pgGsXSkMCGyXV6Uo6Bbpy15XpbuN2Zi4ykmljI3hV2NjwdmIP0BiNDrgEXOlHm5UN3v4T9qul3jdepGeoAmQl1xZbNFguIvRMLZFdrXYsuAlTxZZ4OBtLXcnVKdM66emMhL4eDZ02weEc3q3uluy%2FCHHAunurv59Fk8yvjQpTLvya07ElSFtriOF6qNoalTS274vYCAjzNQr9d%2BF5pWxkL7rg1LYQPDr&X-Amz-Signature=64c3fd03e3e43eb852d164bf391588f318bbe0e387d3efac1c5e6e34371e973a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

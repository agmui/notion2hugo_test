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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55NRXG2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDQbR5y0vsAuJK%2BOALXCruenNsznIi6Ic874UJpAERfvQIhAOeGei3sDBLL18Nurb4ZizXfJUz8DbOa2nJInldHBh%2BFKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd3ZK22d%2BBH77yI24q3AOY8iveCnE2dGXJtgC0JurTR7mEiiMUF%2BYmImuJwSSLa%2FPPo0f8kRQ%2BB1uP8C4ouOq3rZcTsV90kxTVK3UWgulpI0HUSneL%2FcAdnjcGPv0qg1V%2BOsHTMCbAu8QrkchjNTziCqg%2Bx1c0ZX9aphOBd3MtNDrBeoOVRaGEVfYbq9D9cBdIkcd5R19KPX1PcveJZstiYcJnvDUQJyvxXVf%2BJowAFbGg9FtlF5kvyuXD75bwjGqN2e88Im7NK0D6LkANn6Ub4SeAfkFv9ZVE9BVBrvemq3PL3cm66whNV4L7TYjEWb71m7MZ8LMjlqo7qfHu0Ip2xYeNuMFc5RxY7W8dg6uLOUtEfND5Rg4QDzBGy9eDFa7PYDE68QRFzc76MtAxiYhgxTu3OjcXQdtyRi%2FowziHOJyGsGgyE6N55TtMbhnFlFqpfw165aAJyscF7S9mIrE3NXDkqELYQXSx8iRmlPCWqLngPJT0e75SALw23zLPmRzxnvagpzjRZ%2B0giwDSyBQt5EDCKGKHithy%2BIfun6YF8G75Awmdov2HKyfsxquDuMlI6fKT95kKklRxCa5H%2FqeD%2B%2FSoRp7DPEyVFX64gisSPx8Bpyejv0772oxP5jACRczw4h0Qb0IAvMtk%2FDCHj92%2FBjqkASjl%2Bl0FVS%2BZA6EuKXBSDTk%2F50ZclRntt3LjcTZ90oYtKk52M1JNs%2BU76fTcsVjG6dWTvztmcPc6zcpX9U2v45QCriB3IZ77OdoMmVawhklN%2FK3blPWdS1uY8EfeY2kJ9j6S77KIeCmzldk1YWLj2exg1KO0RQlF9w87H%2BSip9E1546MvQJEPbVszwqPQpzie89lw%2FFtqvM9jfbgpxktiBpKzdw6&X-Amz-Signature=7d57c1dd69a7ddc626020056f8904c9826e50a3763ff355848a33473277da42e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55NRXG2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDQbR5y0vsAuJK%2BOALXCruenNsznIi6Ic874UJpAERfvQIhAOeGei3sDBLL18Nurb4ZizXfJUz8DbOa2nJInldHBh%2BFKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd3ZK22d%2BBH77yI24q3AOY8iveCnE2dGXJtgC0JurTR7mEiiMUF%2BYmImuJwSSLa%2FPPo0f8kRQ%2BB1uP8C4ouOq3rZcTsV90kxTVK3UWgulpI0HUSneL%2FcAdnjcGPv0qg1V%2BOsHTMCbAu8QrkchjNTziCqg%2Bx1c0ZX9aphOBd3MtNDrBeoOVRaGEVfYbq9D9cBdIkcd5R19KPX1PcveJZstiYcJnvDUQJyvxXVf%2BJowAFbGg9FtlF5kvyuXD75bwjGqN2e88Im7NK0D6LkANn6Ub4SeAfkFv9ZVE9BVBrvemq3PL3cm66whNV4L7TYjEWb71m7MZ8LMjlqo7qfHu0Ip2xYeNuMFc5RxY7W8dg6uLOUtEfND5Rg4QDzBGy9eDFa7PYDE68QRFzc76MtAxiYhgxTu3OjcXQdtyRi%2FowziHOJyGsGgyE6N55TtMbhnFlFqpfw165aAJyscF7S9mIrE3NXDkqELYQXSx8iRmlPCWqLngPJT0e75SALw23zLPmRzxnvagpzjRZ%2B0giwDSyBQt5EDCKGKHithy%2BIfun6YF8G75Awmdov2HKyfsxquDuMlI6fKT95kKklRxCa5H%2FqeD%2B%2FSoRp7DPEyVFX64gisSPx8Bpyejv0772oxP5jACRczw4h0Qb0IAvMtk%2FDCHj92%2FBjqkASjl%2Bl0FVS%2BZA6EuKXBSDTk%2F50ZclRntt3LjcTZ90oYtKk52M1JNs%2BU76fTcsVjG6dWTvztmcPc6zcpX9U2v45QCriB3IZ77OdoMmVawhklN%2FK3blPWdS1uY8EfeY2kJ9j6S77KIeCmzldk1YWLj2exg1KO0RQlF9w87H%2BSip9E1546MvQJEPbVszwqPQpzie89lw%2FFtqvM9jfbgpxktiBpKzdw6&X-Amz-Signature=f734ed8996a1abc6e66718e32601548cadbe130950fe773cb7a4f7e6486bc39f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55NRXG2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDQbR5y0vsAuJK%2BOALXCruenNsznIi6Ic874UJpAERfvQIhAOeGei3sDBLL18Nurb4ZizXfJUz8DbOa2nJInldHBh%2BFKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd3ZK22d%2BBH77yI24q3AOY8iveCnE2dGXJtgC0JurTR7mEiiMUF%2BYmImuJwSSLa%2FPPo0f8kRQ%2BB1uP8C4ouOq3rZcTsV90kxTVK3UWgulpI0HUSneL%2FcAdnjcGPv0qg1V%2BOsHTMCbAu8QrkchjNTziCqg%2Bx1c0ZX9aphOBd3MtNDrBeoOVRaGEVfYbq9D9cBdIkcd5R19KPX1PcveJZstiYcJnvDUQJyvxXVf%2BJowAFbGg9FtlF5kvyuXD75bwjGqN2e88Im7NK0D6LkANn6Ub4SeAfkFv9ZVE9BVBrvemq3PL3cm66whNV4L7TYjEWb71m7MZ8LMjlqo7qfHu0Ip2xYeNuMFc5RxY7W8dg6uLOUtEfND5Rg4QDzBGy9eDFa7PYDE68QRFzc76MtAxiYhgxTu3OjcXQdtyRi%2FowziHOJyGsGgyE6N55TtMbhnFlFqpfw165aAJyscF7S9mIrE3NXDkqELYQXSx8iRmlPCWqLngPJT0e75SALw23zLPmRzxnvagpzjRZ%2B0giwDSyBQt5EDCKGKHithy%2BIfun6YF8G75Awmdov2HKyfsxquDuMlI6fKT95kKklRxCa5H%2FqeD%2B%2FSoRp7DPEyVFX64gisSPx8Bpyejv0772oxP5jACRczw4h0Qb0IAvMtk%2FDCHj92%2FBjqkASjl%2Bl0FVS%2BZA6EuKXBSDTk%2F50ZclRntt3LjcTZ90oYtKk52M1JNs%2BU76fTcsVjG6dWTvztmcPc6zcpX9U2v45QCriB3IZ77OdoMmVawhklN%2FK3blPWdS1uY8EfeY2kJ9j6S77KIeCmzldk1YWLj2exg1KO0RQlF9w87H%2BSip9E1546MvQJEPbVszwqPQpzie89lw%2FFtqvM9jfbgpxktiBpKzdw6&X-Amz-Signature=30a17c9190b1e8bddbe76f9ced443f5ab6569103b6a0c4dc30d01b456d8f741e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55NRXG2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDQbR5y0vsAuJK%2BOALXCruenNsznIi6Ic874UJpAERfvQIhAOeGei3sDBLL18Nurb4ZizXfJUz8DbOa2nJInldHBh%2BFKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd3ZK22d%2BBH77yI24q3AOY8iveCnE2dGXJtgC0JurTR7mEiiMUF%2BYmImuJwSSLa%2FPPo0f8kRQ%2BB1uP8C4ouOq3rZcTsV90kxTVK3UWgulpI0HUSneL%2FcAdnjcGPv0qg1V%2BOsHTMCbAu8QrkchjNTziCqg%2Bx1c0ZX9aphOBd3MtNDrBeoOVRaGEVfYbq9D9cBdIkcd5R19KPX1PcveJZstiYcJnvDUQJyvxXVf%2BJowAFbGg9FtlF5kvyuXD75bwjGqN2e88Im7NK0D6LkANn6Ub4SeAfkFv9ZVE9BVBrvemq3PL3cm66whNV4L7TYjEWb71m7MZ8LMjlqo7qfHu0Ip2xYeNuMFc5RxY7W8dg6uLOUtEfND5Rg4QDzBGy9eDFa7PYDE68QRFzc76MtAxiYhgxTu3OjcXQdtyRi%2FowziHOJyGsGgyE6N55TtMbhnFlFqpfw165aAJyscF7S9mIrE3NXDkqELYQXSx8iRmlPCWqLngPJT0e75SALw23zLPmRzxnvagpzjRZ%2B0giwDSyBQt5EDCKGKHithy%2BIfun6YF8G75Awmdov2HKyfsxquDuMlI6fKT95kKklRxCa5H%2FqeD%2B%2FSoRp7DPEyVFX64gisSPx8Bpyejv0772oxP5jACRczw4h0Qb0IAvMtk%2FDCHj92%2FBjqkASjl%2Bl0FVS%2BZA6EuKXBSDTk%2F50ZclRntt3LjcTZ90oYtKk52M1JNs%2BU76fTcsVjG6dWTvztmcPc6zcpX9U2v45QCriB3IZ77OdoMmVawhklN%2FK3blPWdS1uY8EfeY2kJ9j6S77KIeCmzldk1YWLj2exg1KO0RQlF9w87H%2BSip9E1546MvQJEPbVszwqPQpzie89lw%2FFtqvM9jfbgpxktiBpKzdw6&X-Amz-Signature=d63fae17e833349e8115e6dd2e1395fafbf11153c79cb004a5a59f89377e42b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55NRXG2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDQbR5y0vsAuJK%2BOALXCruenNsznIi6Ic874UJpAERfvQIhAOeGei3sDBLL18Nurb4ZizXfJUz8DbOa2nJInldHBh%2BFKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd3ZK22d%2BBH77yI24q3AOY8iveCnE2dGXJtgC0JurTR7mEiiMUF%2BYmImuJwSSLa%2FPPo0f8kRQ%2BB1uP8C4ouOq3rZcTsV90kxTVK3UWgulpI0HUSneL%2FcAdnjcGPv0qg1V%2BOsHTMCbAu8QrkchjNTziCqg%2Bx1c0ZX9aphOBd3MtNDrBeoOVRaGEVfYbq9D9cBdIkcd5R19KPX1PcveJZstiYcJnvDUQJyvxXVf%2BJowAFbGg9FtlF5kvyuXD75bwjGqN2e88Im7NK0D6LkANn6Ub4SeAfkFv9ZVE9BVBrvemq3PL3cm66whNV4L7TYjEWb71m7MZ8LMjlqo7qfHu0Ip2xYeNuMFc5RxY7W8dg6uLOUtEfND5Rg4QDzBGy9eDFa7PYDE68QRFzc76MtAxiYhgxTu3OjcXQdtyRi%2FowziHOJyGsGgyE6N55TtMbhnFlFqpfw165aAJyscF7S9mIrE3NXDkqELYQXSx8iRmlPCWqLngPJT0e75SALw23zLPmRzxnvagpzjRZ%2B0giwDSyBQt5EDCKGKHithy%2BIfun6YF8G75Awmdov2HKyfsxquDuMlI6fKT95kKklRxCa5H%2FqeD%2B%2FSoRp7DPEyVFX64gisSPx8Bpyejv0772oxP5jACRczw4h0Qb0IAvMtk%2FDCHj92%2FBjqkASjl%2Bl0FVS%2BZA6EuKXBSDTk%2F50ZclRntt3LjcTZ90oYtKk52M1JNs%2BU76fTcsVjG6dWTvztmcPc6zcpX9U2v45QCriB3IZ77OdoMmVawhklN%2FK3blPWdS1uY8EfeY2kJ9j6S77KIeCmzldk1YWLj2exg1KO0RQlF9w87H%2BSip9E1546MvQJEPbVszwqPQpzie89lw%2FFtqvM9jfbgpxktiBpKzdw6&X-Amz-Signature=b664313c1c6e6102f2782726c2886f02ee0ca9a2e4d4a8a0ec5712b8e6365322&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55NRXG2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDQbR5y0vsAuJK%2BOALXCruenNsznIi6Ic874UJpAERfvQIhAOeGei3sDBLL18Nurb4ZizXfJUz8DbOa2nJInldHBh%2BFKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd3ZK22d%2BBH77yI24q3AOY8iveCnE2dGXJtgC0JurTR7mEiiMUF%2BYmImuJwSSLa%2FPPo0f8kRQ%2BB1uP8C4ouOq3rZcTsV90kxTVK3UWgulpI0HUSneL%2FcAdnjcGPv0qg1V%2BOsHTMCbAu8QrkchjNTziCqg%2Bx1c0ZX9aphOBd3MtNDrBeoOVRaGEVfYbq9D9cBdIkcd5R19KPX1PcveJZstiYcJnvDUQJyvxXVf%2BJowAFbGg9FtlF5kvyuXD75bwjGqN2e88Im7NK0D6LkANn6Ub4SeAfkFv9ZVE9BVBrvemq3PL3cm66whNV4L7TYjEWb71m7MZ8LMjlqo7qfHu0Ip2xYeNuMFc5RxY7W8dg6uLOUtEfND5Rg4QDzBGy9eDFa7PYDE68QRFzc76MtAxiYhgxTu3OjcXQdtyRi%2FowziHOJyGsGgyE6N55TtMbhnFlFqpfw165aAJyscF7S9mIrE3NXDkqELYQXSx8iRmlPCWqLngPJT0e75SALw23zLPmRzxnvagpzjRZ%2B0giwDSyBQt5EDCKGKHithy%2BIfun6YF8G75Awmdov2HKyfsxquDuMlI6fKT95kKklRxCa5H%2FqeD%2B%2FSoRp7DPEyVFX64gisSPx8Bpyejv0772oxP5jACRczw4h0Qb0IAvMtk%2FDCHj92%2FBjqkASjl%2Bl0FVS%2BZA6EuKXBSDTk%2F50ZclRntt3LjcTZ90oYtKk52M1JNs%2BU76fTcsVjG6dWTvztmcPc6zcpX9U2v45QCriB3IZ77OdoMmVawhklN%2FK3blPWdS1uY8EfeY2kJ9j6S77KIeCmzldk1YWLj2exg1KO0RQlF9w87H%2BSip9E1546MvQJEPbVszwqPQpzie89lw%2FFtqvM9jfbgpxktiBpKzdw6&X-Amz-Signature=56c7ccd2a8bac9409e1b7f314a015f7f7acc334058692dc1260c9f1128c1a22f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55NRXG2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDQbR5y0vsAuJK%2BOALXCruenNsznIi6Ic874UJpAERfvQIhAOeGei3sDBLL18Nurb4ZizXfJUz8DbOa2nJInldHBh%2BFKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd3ZK22d%2BBH77yI24q3AOY8iveCnE2dGXJtgC0JurTR7mEiiMUF%2BYmImuJwSSLa%2FPPo0f8kRQ%2BB1uP8C4ouOq3rZcTsV90kxTVK3UWgulpI0HUSneL%2FcAdnjcGPv0qg1V%2BOsHTMCbAu8QrkchjNTziCqg%2Bx1c0ZX9aphOBd3MtNDrBeoOVRaGEVfYbq9D9cBdIkcd5R19KPX1PcveJZstiYcJnvDUQJyvxXVf%2BJowAFbGg9FtlF5kvyuXD75bwjGqN2e88Im7NK0D6LkANn6Ub4SeAfkFv9ZVE9BVBrvemq3PL3cm66whNV4L7TYjEWb71m7MZ8LMjlqo7qfHu0Ip2xYeNuMFc5RxY7W8dg6uLOUtEfND5Rg4QDzBGy9eDFa7PYDE68QRFzc76MtAxiYhgxTu3OjcXQdtyRi%2FowziHOJyGsGgyE6N55TtMbhnFlFqpfw165aAJyscF7S9mIrE3NXDkqELYQXSx8iRmlPCWqLngPJT0e75SALw23zLPmRzxnvagpzjRZ%2B0giwDSyBQt5EDCKGKHithy%2BIfun6YF8G75Awmdov2HKyfsxquDuMlI6fKT95kKklRxCa5H%2FqeD%2B%2FSoRp7DPEyVFX64gisSPx8Bpyejv0772oxP5jACRczw4h0Qb0IAvMtk%2FDCHj92%2FBjqkASjl%2Bl0FVS%2BZA6EuKXBSDTk%2F50ZclRntt3LjcTZ90oYtKk52M1JNs%2BU76fTcsVjG6dWTvztmcPc6zcpX9U2v45QCriB3IZ77OdoMmVawhklN%2FK3blPWdS1uY8EfeY2kJ9j6S77KIeCmzldk1YWLj2exg1KO0RQlF9w87H%2BSip9E1546MvQJEPbVszwqPQpzie89lw%2FFtqvM9jfbgpxktiBpKzdw6&X-Amz-Signature=4cd374fe0e8aef97eab28400f0b8f22f69690ba6a3aa41e69be402b1bf235acb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55NRXG2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDQbR5y0vsAuJK%2BOALXCruenNsznIi6Ic874UJpAERfvQIhAOeGei3sDBLL18Nurb4ZizXfJUz8DbOa2nJInldHBh%2BFKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd3ZK22d%2BBH77yI24q3AOY8iveCnE2dGXJtgC0JurTR7mEiiMUF%2BYmImuJwSSLa%2FPPo0f8kRQ%2BB1uP8C4ouOq3rZcTsV90kxTVK3UWgulpI0HUSneL%2FcAdnjcGPv0qg1V%2BOsHTMCbAu8QrkchjNTziCqg%2Bx1c0ZX9aphOBd3MtNDrBeoOVRaGEVfYbq9D9cBdIkcd5R19KPX1PcveJZstiYcJnvDUQJyvxXVf%2BJowAFbGg9FtlF5kvyuXD75bwjGqN2e88Im7NK0D6LkANn6Ub4SeAfkFv9ZVE9BVBrvemq3PL3cm66whNV4L7TYjEWb71m7MZ8LMjlqo7qfHu0Ip2xYeNuMFc5RxY7W8dg6uLOUtEfND5Rg4QDzBGy9eDFa7PYDE68QRFzc76MtAxiYhgxTu3OjcXQdtyRi%2FowziHOJyGsGgyE6N55TtMbhnFlFqpfw165aAJyscF7S9mIrE3NXDkqELYQXSx8iRmlPCWqLngPJT0e75SALw23zLPmRzxnvagpzjRZ%2B0giwDSyBQt5EDCKGKHithy%2BIfun6YF8G75Awmdov2HKyfsxquDuMlI6fKT95kKklRxCa5H%2FqeD%2B%2FSoRp7DPEyVFX64gisSPx8Bpyejv0772oxP5jACRczw4h0Qb0IAvMtk%2FDCHj92%2FBjqkASjl%2Bl0FVS%2BZA6EuKXBSDTk%2F50ZclRntt3LjcTZ90oYtKk52M1JNs%2BU76fTcsVjG6dWTvztmcPc6zcpX9U2v45QCriB3IZ77OdoMmVawhklN%2FK3blPWdS1uY8EfeY2kJ9j6S77KIeCmzldk1YWLj2exg1KO0RQlF9w87H%2BSip9E1546MvQJEPbVszwqPQpzie89lw%2FFtqvM9jfbgpxktiBpKzdw6&X-Amz-Signature=d98cc5974a2b2e1914b44c85358c5adfd16a544a7656acf0d98be6f8838f0178&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

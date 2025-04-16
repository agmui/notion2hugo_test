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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPBDCBA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5s26L5KSXIcPdZPcrBpqx0hTgrRjPvQJzP%2FN744La2AiAPQ8DPHyT9qiwIpuVQ7QUSTfblZZP4LrH%2BMWpZdqfwdSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNOjoq4zVp533xLPfKtwDA2GY6m7vNi%2BBZ4ZyHlw7V5g3hB2%2BaYHQkeblvc4sG1sWfzvVSY52pYcxlxAJtbonI65AqpAGWA0N6C1lb4ypN0BCsbrqsUxZZHv18WHPQ0UlIRjiak7L698Ry5yJI2Zh%2FOjczV6NjxBqBQ2LmgBOlcamSGKze%2BitStsp6K%2FbR07iobWht9C53JPG%2FihifKUpYuDICbB7HJxvv7IFDrQ6pFAsQII20hK6ihJgtz5CXKHIQdKD2SGvPLnkDgIyI6cajjgzltgWm4aTT102zY%2FzGITfI%2FP3tPYUQghQLA53CVmRMkwCwqgbw7z9tf%2Biwm2LcU24d0gnjJXV5domllQ6G04EtB3uVZN5S1xDf00xfMH0mgW%2BEY5%2BEnhfCEGsTN%2FIuFRqptOBBaJNvfXa04U3Zrx31hssQE83IRM7DDsF0UWsR11HXu0G1VSHvI8l%2BTWCCzhPZTt%2FxFBirM9Je7fjQLm9%2FGTzM94q7wE7gyVvX%2FeFblQh6rL7VbSmFsUJrB%2BP6pFFKYf8u6bvrw6eEH4H5qTOD5sRaY%2FMjF1%2BBAMz%2BsIubGYsu%2FDUaOq49QVU%2FYMG3eiqqcnCQJvLVu%2BZovDiHURrs9xy3py3xdFm%2B5d%2FAEx%2FQGzd3mMETD3v44kwouCAwAY6pgGvzBBRtrXFeJ53QS0973U%2FnPCh1sSLONGcHoAclrSPr0j5weTQyJeLIWKwTIyvcElwftgiZ5rRfBUvxJcPWS9NB0Dl3pQiL%2BJQmwR6fYsxETX4eUo32DJtE1yCfxG5h9yC7hK1%2F6BesjCsqidnGTO5Xb9zsKccm8n87YIZpPaFiSRkZRukpgppKE%2F8A02%2BM5bM1%2FTfKjOnIfiJFMuuP%2Fm4fxOiaeg1&X-Amz-Signature=9fc01b49f48de51032da7d352f2da33e7d28800aeabeb7a3707d44f3f8a34e17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPBDCBA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5s26L5KSXIcPdZPcrBpqx0hTgrRjPvQJzP%2FN744La2AiAPQ8DPHyT9qiwIpuVQ7QUSTfblZZP4LrH%2BMWpZdqfwdSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNOjoq4zVp533xLPfKtwDA2GY6m7vNi%2BBZ4ZyHlw7V5g3hB2%2BaYHQkeblvc4sG1sWfzvVSY52pYcxlxAJtbonI65AqpAGWA0N6C1lb4ypN0BCsbrqsUxZZHv18WHPQ0UlIRjiak7L698Ry5yJI2Zh%2FOjczV6NjxBqBQ2LmgBOlcamSGKze%2BitStsp6K%2FbR07iobWht9C53JPG%2FihifKUpYuDICbB7HJxvv7IFDrQ6pFAsQII20hK6ihJgtz5CXKHIQdKD2SGvPLnkDgIyI6cajjgzltgWm4aTT102zY%2FzGITfI%2FP3tPYUQghQLA53CVmRMkwCwqgbw7z9tf%2Biwm2LcU24d0gnjJXV5domllQ6G04EtB3uVZN5S1xDf00xfMH0mgW%2BEY5%2BEnhfCEGsTN%2FIuFRqptOBBaJNvfXa04U3Zrx31hssQE83IRM7DDsF0UWsR11HXu0G1VSHvI8l%2BTWCCzhPZTt%2FxFBirM9Je7fjQLm9%2FGTzM94q7wE7gyVvX%2FeFblQh6rL7VbSmFsUJrB%2BP6pFFKYf8u6bvrw6eEH4H5qTOD5sRaY%2FMjF1%2BBAMz%2BsIubGYsu%2FDUaOq49QVU%2FYMG3eiqqcnCQJvLVu%2BZovDiHURrs9xy3py3xdFm%2B5d%2FAEx%2FQGzd3mMETD3v44kwouCAwAY6pgGvzBBRtrXFeJ53QS0973U%2FnPCh1sSLONGcHoAclrSPr0j5weTQyJeLIWKwTIyvcElwftgiZ5rRfBUvxJcPWS9NB0Dl3pQiL%2BJQmwR6fYsxETX4eUo32DJtE1yCfxG5h9yC7hK1%2F6BesjCsqidnGTO5Xb9zsKccm8n87YIZpPaFiSRkZRukpgppKE%2F8A02%2BM5bM1%2FTfKjOnIfiJFMuuP%2Fm4fxOiaeg1&X-Amz-Signature=d5067a05fbc69012cbff48310eb8848fa1cd1efb031211fcbfc8d13fcbc5ea74&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPBDCBA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5s26L5KSXIcPdZPcrBpqx0hTgrRjPvQJzP%2FN744La2AiAPQ8DPHyT9qiwIpuVQ7QUSTfblZZP4LrH%2BMWpZdqfwdSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNOjoq4zVp533xLPfKtwDA2GY6m7vNi%2BBZ4ZyHlw7V5g3hB2%2BaYHQkeblvc4sG1sWfzvVSY52pYcxlxAJtbonI65AqpAGWA0N6C1lb4ypN0BCsbrqsUxZZHv18WHPQ0UlIRjiak7L698Ry5yJI2Zh%2FOjczV6NjxBqBQ2LmgBOlcamSGKze%2BitStsp6K%2FbR07iobWht9C53JPG%2FihifKUpYuDICbB7HJxvv7IFDrQ6pFAsQII20hK6ihJgtz5CXKHIQdKD2SGvPLnkDgIyI6cajjgzltgWm4aTT102zY%2FzGITfI%2FP3tPYUQghQLA53CVmRMkwCwqgbw7z9tf%2Biwm2LcU24d0gnjJXV5domllQ6G04EtB3uVZN5S1xDf00xfMH0mgW%2BEY5%2BEnhfCEGsTN%2FIuFRqptOBBaJNvfXa04U3Zrx31hssQE83IRM7DDsF0UWsR11HXu0G1VSHvI8l%2BTWCCzhPZTt%2FxFBirM9Je7fjQLm9%2FGTzM94q7wE7gyVvX%2FeFblQh6rL7VbSmFsUJrB%2BP6pFFKYf8u6bvrw6eEH4H5qTOD5sRaY%2FMjF1%2BBAMz%2BsIubGYsu%2FDUaOq49QVU%2FYMG3eiqqcnCQJvLVu%2BZovDiHURrs9xy3py3xdFm%2B5d%2FAEx%2FQGzd3mMETD3v44kwouCAwAY6pgGvzBBRtrXFeJ53QS0973U%2FnPCh1sSLONGcHoAclrSPr0j5weTQyJeLIWKwTIyvcElwftgiZ5rRfBUvxJcPWS9NB0Dl3pQiL%2BJQmwR6fYsxETX4eUo32DJtE1yCfxG5h9yC7hK1%2F6BesjCsqidnGTO5Xb9zsKccm8n87YIZpPaFiSRkZRukpgppKE%2F8A02%2BM5bM1%2FTfKjOnIfiJFMuuP%2Fm4fxOiaeg1&X-Amz-Signature=edb81b4cef60959548360d16136105528028d5773741f48558622ae4b2082a65&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPBDCBA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5s26L5KSXIcPdZPcrBpqx0hTgrRjPvQJzP%2FN744La2AiAPQ8DPHyT9qiwIpuVQ7QUSTfblZZP4LrH%2BMWpZdqfwdSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNOjoq4zVp533xLPfKtwDA2GY6m7vNi%2BBZ4ZyHlw7V5g3hB2%2BaYHQkeblvc4sG1sWfzvVSY52pYcxlxAJtbonI65AqpAGWA0N6C1lb4ypN0BCsbrqsUxZZHv18WHPQ0UlIRjiak7L698Ry5yJI2Zh%2FOjczV6NjxBqBQ2LmgBOlcamSGKze%2BitStsp6K%2FbR07iobWht9C53JPG%2FihifKUpYuDICbB7HJxvv7IFDrQ6pFAsQII20hK6ihJgtz5CXKHIQdKD2SGvPLnkDgIyI6cajjgzltgWm4aTT102zY%2FzGITfI%2FP3tPYUQghQLA53CVmRMkwCwqgbw7z9tf%2Biwm2LcU24d0gnjJXV5domllQ6G04EtB3uVZN5S1xDf00xfMH0mgW%2BEY5%2BEnhfCEGsTN%2FIuFRqptOBBaJNvfXa04U3Zrx31hssQE83IRM7DDsF0UWsR11HXu0G1VSHvI8l%2BTWCCzhPZTt%2FxFBirM9Je7fjQLm9%2FGTzM94q7wE7gyVvX%2FeFblQh6rL7VbSmFsUJrB%2BP6pFFKYf8u6bvrw6eEH4H5qTOD5sRaY%2FMjF1%2BBAMz%2BsIubGYsu%2FDUaOq49QVU%2FYMG3eiqqcnCQJvLVu%2BZovDiHURrs9xy3py3xdFm%2B5d%2FAEx%2FQGzd3mMETD3v44kwouCAwAY6pgGvzBBRtrXFeJ53QS0973U%2FnPCh1sSLONGcHoAclrSPr0j5weTQyJeLIWKwTIyvcElwftgiZ5rRfBUvxJcPWS9NB0Dl3pQiL%2BJQmwR6fYsxETX4eUo32DJtE1yCfxG5h9yC7hK1%2F6BesjCsqidnGTO5Xb9zsKccm8n87YIZpPaFiSRkZRukpgppKE%2F8A02%2BM5bM1%2FTfKjOnIfiJFMuuP%2Fm4fxOiaeg1&X-Amz-Signature=196533df077784daf421f81b9fdb5061475a85f481458eab64524acf97f52558&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPBDCBA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5s26L5KSXIcPdZPcrBpqx0hTgrRjPvQJzP%2FN744La2AiAPQ8DPHyT9qiwIpuVQ7QUSTfblZZP4LrH%2BMWpZdqfwdSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNOjoq4zVp533xLPfKtwDA2GY6m7vNi%2BBZ4ZyHlw7V5g3hB2%2BaYHQkeblvc4sG1sWfzvVSY52pYcxlxAJtbonI65AqpAGWA0N6C1lb4ypN0BCsbrqsUxZZHv18WHPQ0UlIRjiak7L698Ry5yJI2Zh%2FOjczV6NjxBqBQ2LmgBOlcamSGKze%2BitStsp6K%2FbR07iobWht9C53JPG%2FihifKUpYuDICbB7HJxvv7IFDrQ6pFAsQII20hK6ihJgtz5CXKHIQdKD2SGvPLnkDgIyI6cajjgzltgWm4aTT102zY%2FzGITfI%2FP3tPYUQghQLA53CVmRMkwCwqgbw7z9tf%2Biwm2LcU24d0gnjJXV5domllQ6G04EtB3uVZN5S1xDf00xfMH0mgW%2BEY5%2BEnhfCEGsTN%2FIuFRqptOBBaJNvfXa04U3Zrx31hssQE83IRM7DDsF0UWsR11HXu0G1VSHvI8l%2BTWCCzhPZTt%2FxFBirM9Je7fjQLm9%2FGTzM94q7wE7gyVvX%2FeFblQh6rL7VbSmFsUJrB%2BP6pFFKYf8u6bvrw6eEH4H5qTOD5sRaY%2FMjF1%2BBAMz%2BsIubGYsu%2FDUaOq49QVU%2FYMG3eiqqcnCQJvLVu%2BZovDiHURrs9xy3py3xdFm%2B5d%2FAEx%2FQGzd3mMETD3v44kwouCAwAY6pgGvzBBRtrXFeJ53QS0973U%2FnPCh1sSLONGcHoAclrSPr0j5weTQyJeLIWKwTIyvcElwftgiZ5rRfBUvxJcPWS9NB0Dl3pQiL%2BJQmwR6fYsxETX4eUo32DJtE1yCfxG5h9yC7hK1%2F6BesjCsqidnGTO5Xb9zsKccm8n87YIZpPaFiSRkZRukpgppKE%2F8A02%2BM5bM1%2FTfKjOnIfiJFMuuP%2Fm4fxOiaeg1&X-Amz-Signature=7886c92900fb2aad10a750a8ecffa054df24796b55f7afc72016dd9acf208346&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPBDCBA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5s26L5KSXIcPdZPcrBpqx0hTgrRjPvQJzP%2FN744La2AiAPQ8DPHyT9qiwIpuVQ7QUSTfblZZP4LrH%2BMWpZdqfwdSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNOjoq4zVp533xLPfKtwDA2GY6m7vNi%2BBZ4ZyHlw7V5g3hB2%2BaYHQkeblvc4sG1sWfzvVSY52pYcxlxAJtbonI65AqpAGWA0N6C1lb4ypN0BCsbrqsUxZZHv18WHPQ0UlIRjiak7L698Ry5yJI2Zh%2FOjczV6NjxBqBQ2LmgBOlcamSGKze%2BitStsp6K%2FbR07iobWht9C53JPG%2FihifKUpYuDICbB7HJxvv7IFDrQ6pFAsQII20hK6ihJgtz5CXKHIQdKD2SGvPLnkDgIyI6cajjgzltgWm4aTT102zY%2FzGITfI%2FP3tPYUQghQLA53CVmRMkwCwqgbw7z9tf%2Biwm2LcU24d0gnjJXV5domllQ6G04EtB3uVZN5S1xDf00xfMH0mgW%2BEY5%2BEnhfCEGsTN%2FIuFRqptOBBaJNvfXa04U3Zrx31hssQE83IRM7DDsF0UWsR11HXu0G1VSHvI8l%2BTWCCzhPZTt%2FxFBirM9Je7fjQLm9%2FGTzM94q7wE7gyVvX%2FeFblQh6rL7VbSmFsUJrB%2BP6pFFKYf8u6bvrw6eEH4H5qTOD5sRaY%2FMjF1%2BBAMz%2BsIubGYsu%2FDUaOq49QVU%2FYMG3eiqqcnCQJvLVu%2BZovDiHURrs9xy3py3xdFm%2B5d%2FAEx%2FQGzd3mMETD3v44kwouCAwAY6pgGvzBBRtrXFeJ53QS0973U%2FnPCh1sSLONGcHoAclrSPr0j5weTQyJeLIWKwTIyvcElwftgiZ5rRfBUvxJcPWS9NB0Dl3pQiL%2BJQmwR6fYsxETX4eUo32DJtE1yCfxG5h9yC7hK1%2F6BesjCsqidnGTO5Xb9zsKccm8n87YIZpPaFiSRkZRukpgppKE%2F8A02%2BM5bM1%2FTfKjOnIfiJFMuuP%2Fm4fxOiaeg1&X-Amz-Signature=50003c44a6cdb27aaaac84a33bfaacd09242129b438fd2807bcc5adcbb92cb0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPBDCBA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5s26L5KSXIcPdZPcrBpqx0hTgrRjPvQJzP%2FN744La2AiAPQ8DPHyT9qiwIpuVQ7QUSTfblZZP4LrH%2BMWpZdqfwdSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNOjoq4zVp533xLPfKtwDA2GY6m7vNi%2BBZ4ZyHlw7V5g3hB2%2BaYHQkeblvc4sG1sWfzvVSY52pYcxlxAJtbonI65AqpAGWA0N6C1lb4ypN0BCsbrqsUxZZHv18WHPQ0UlIRjiak7L698Ry5yJI2Zh%2FOjczV6NjxBqBQ2LmgBOlcamSGKze%2BitStsp6K%2FbR07iobWht9C53JPG%2FihifKUpYuDICbB7HJxvv7IFDrQ6pFAsQII20hK6ihJgtz5CXKHIQdKD2SGvPLnkDgIyI6cajjgzltgWm4aTT102zY%2FzGITfI%2FP3tPYUQghQLA53CVmRMkwCwqgbw7z9tf%2Biwm2LcU24d0gnjJXV5domllQ6G04EtB3uVZN5S1xDf00xfMH0mgW%2BEY5%2BEnhfCEGsTN%2FIuFRqptOBBaJNvfXa04U3Zrx31hssQE83IRM7DDsF0UWsR11HXu0G1VSHvI8l%2BTWCCzhPZTt%2FxFBirM9Je7fjQLm9%2FGTzM94q7wE7gyVvX%2FeFblQh6rL7VbSmFsUJrB%2BP6pFFKYf8u6bvrw6eEH4H5qTOD5sRaY%2FMjF1%2BBAMz%2BsIubGYsu%2FDUaOq49QVU%2FYMG3eiqqcnCQJvLVu%2BZovDiHURrs9xy3py3xdFm%2B5d%2FAEx%2FQGzd3mMETD3v44kwouCAwAY6pgGvzBBRtrXFeJ53QS0973U%2FnPCh1sSLONGcHoAclrSPr0j5weTQyJeLIWKwTIyvcElwftgiZ5rRfBUvxJcPWS9NB0Dl3pQiL%2BJQmwR6fYsxETX4eUo32DJtE1yCfxG5h9yC7hK1%2F6BesjCsqidnGTO5Xb9zsKccm8n87YIZpPaFiSRkZRukpgppKE%2F8A02%2BM5bM1%2FTfKjOnIfiJFMuuP%2Fm4fxOiaeg1&X-Amz-Signature=a42b5beb2938dfd87d32631ec7d290bb5a8589251f5ba9d1aa009850ca9bd9ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPBDCBA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5s26L5KSXIcPdZPcrBpqx0hTgrRjPvQJzP%2FN744La2AiAPQ8DPHyT9qiwIpuVQ7QUSTfblZZP4LrH%2BMWpZdqfwdSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMNOjoq4zVp533xLPfKtwDA2GY6m7vNi%2BBZ4ZyHlw7V5g3hB2%2BaYHQkeblvc4sG1sWfzvVSY52pYcxlxAJtbonI65AqpAGWA0N6C1lb4ypN0BCsbrqsUxZZHv18WHPQ0UlIRjiak7L698Ry5yJI2Zh%2FOjczV6NjxBqBQ2LmgBOlcamSGKze%2BitStsp6K%2FbR07iobWht9C53JPG%2FihifKUpYuDICbB7HJxvv7IFDrQ6pFAsQII20hK6ihJgtz5CXKHIQdKD2SGvPLnkDgIyI6cajjgzltgWm4aTT102zY%2FzGITfI%2FP3tPYUQghQLA53CVmRMkwCwqgbw7z9tf%2Biwm2LcU24d0gnjJXV5domllQ6G04EtB3uVZN5S1xDf00xfMH0mgW%2BEY5%2BEnhfCEGsTN%2FIuFRqptOBBaJNvfXa04U3Zrx31hssQE83IRM7DDsF0UWsR11HXu0G1VSHvI8l%2BTWCCzhPZTt%2FxFBirM9Je7fjQLm9%2FGTzM94q7wE7gyVvX%2FeFblQh6rL7VbSmFsUJrB%2BP6pFFKYf8u6bvrw6eEH4H5qTOD5sRaY%2FMjF1%2BBAMz%2BsIubGYsu%2FDUaOq49QVU%2FYMG3eiqqcnCQJvLVu%2BZovDiHURrs9xy3py3xdFm%2B5d%2FAEx%2FQGzd3mMETD3v44kwouCAwAY6pgGvzBBRtrXFeJ53QS0973U%2FnPCh1sSLONGcHoAclrSPr0j5weTQyJeLIWKwTIyvcElwftgiZ5rRfBUvxJcPWS9NB0Dl3pQiL%2BJQmwR6fYsxETX4eUo32DJtE1yCfxG5h9yC7hK1%2F6BesjCsqidnGTO5Xb9zsKccm8n87YIZpPaFiSRkZRukpgppKE%2F8A02%2BM5bM1%2FTfKjOnIfiJFMuuP%2Fm4fxOiaeg1&X-Amz-Signature=47b8e47384cd7351c7acc71d40cdc47124f598ac8de6d020741f210bab7998fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

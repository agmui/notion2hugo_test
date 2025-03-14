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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QETMPUCE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyMYQ%2BMQjzoDwHGHtXo4o6%2BpNJnIFYtC3Xk5KgoJy1XAiEA7posMVb7zHpao8W47YAe5o3dT8ZamIceUVPvY%2FCviRwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAfbYgdfWdTz4i5OircA74FduzU%2FmdkoKmDNBFRhce32BoR3c1UxsZQkxLEIiJ6ED%2FHVGDgOGmMMpHPdS3uoG8S3YbCNFBxloklp4uC4dz6E4N8s1L3wQSc4%2BC7fWeN2oKCCc4A1IPX3uwqZvTHqCgl2qt6tFyaomYc5rJPRcYAwvP%2F9bpA1JUv1v2VSQ0K54O3oEZm8xu8%2B4jwj8jmb5Dop1KJL7vTRbh36MtWhNQ5tvm6fFAu4QgnQw5MJt%2F%2BEM%2B1Dy5zTjfu%2FwcDN2xKCoFozOe28s%2FEP9eUGPptckwV3DNJi%2BjDp0am4TGW6FEmo%2B8lxr1GjijP3zFSWSXXLULRPrRDzVPoVpjUce%2BLRLqQM2Zg4ZfZGlbWRpUGoTkgKAtVPPWYF0cRWzq42dgI5Hd8pMUoBz9JM83sdqc%2BrEdE23YbJNRtTRix7l6P6FxWsNh09FhIt30Tucznfg6fFOGz%2F5BBddSAShyPkyKT2LTsvYwwAE96yrjrpIhHEoZXiGtnD4HtD%2BEsdxxHG90HmSjL9EszTJWprNTvWSNaGisGNICc4kI7QGeQD2l4Rn%2F4Ece1vPN2DbnSxEpxoT%2B04yLaN8dbTFdlIub7LkNFowDcJ4ZiAXb4SPBMPEw%2Bywr2fJSFegP2GWzA8yS8MMXNzr4GOqUBFsYaFH%2FCc5Snw%2F1qyP2uFQ0iAtwVpq1QDddF7kM8zJzKS%2BafaroePcZcKY%2BQ96aNNxeF1sRm0Qm1vaojFr%2Bzx2Lbl5acwYHzVeojv2ohNeJHU1tJYZ%2BgilTHOFgJbPc4iSfgNh4yVA2U%2BjE%2Foc1KXeDGRiMV8p74SZ3e9QUqIckV848wYhq54RtNvdbOIZzf7rADB5RABlHXNd4ThXJFChcHdn%2Bj&X-Amz-Signature=123ec3c20b18d85e071e1f299e6613b859d11a3e7bb09e733232f444a307e702&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QETMPUCE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyMYQ%2BMQjzoDwHGHtXo4o6%2BpNJnIFYtC3Xk5KgoJy1XAiEA7posMVb7zHpao8W47YAe5o3dT8ZamIceUVPvY%2FCviRwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAfbYgdfWdTz4i5OircA74FduzU%2FmdkoKmDNBFRhce32BoR3c1UxsZQkxLEIiJ6ED%2FHVGDgOGmMMpHPdS3uoG8S3YbCNFBxloklp4uC4dz6E4N8s1L3wQSc4%2BC7fWeN2oKCCc4A1IPX3uwqZvTHqCgl2qt6tFyaomYc5rJPRcYAwvP%2F9bpA1JUv1v2VSQ0K54O3oEZm8xu8%2B4jwj8jmb5Dop1KJL7vTRbh36MtWhNQ5tvm6fFAu4QgnQw5MJt%2F%2BEM%2B1Dy5zTjfu%2FwcDN2xKCoFozOe28s%2FEP9eUGPptckwV3DNJi%2BjDp0am4TGW6FEmo%2B8lxr1GjijP3zFSWSXXLULRPrRDzVPoVpjUce%2BLRLqQM2Zg4ZfZGlbWRpUGoTkgKAtVPPWYF0cRWzq42dgI5Hd8pMUoBz9JM83sdqc%2BrEdE23YbJNRtTRix7l6P6FxWsNh09FhIt30Tucznfg6fFOGz%2F5BBddSAShyPkyKT2LTsvYwwAE96yrjrpIhHEoZXiGtnD4HtD%2BEsdxxHG90HmSjL9EszTJWprNTvWSNaGisGNICc4kI7QGeQD2l4Rn%2F4Ece1vPN2DbnSxEpxoT%2B04yLaN8dbTFdlIub7LkNFowDcJ4ZiAXb4SPBMPEw%2Bywr2fJSFegP2GWzA8yS8MMXNzr4GOqUBFsYaFH%2FCc5Snw%2F1qyP2uFQ0iAtwVpq1QDddF7kM8zJzKS%2BafaroePcZcKY%2BQ96aNNxeF1sRm0Qm1vaojFr%2Bzx2Lbl5acwYHzVeojv2ohNeJHU1tJYZ%2BgilTHOFgJbPc4iSfgNh4yVA2U%2BjE%2Foc1KXeDGRiMV8p74SZ3e9QUqIckV848wYhq54RtNvdbOIZzf7rADB5RABlHXNd4ThXJFChcHdn%2Bj&X-Amz-Signature=a66f605f8d65da8de92a6b39a4f90cf44df4ea0d2495ed8d3c7ae29739874a69&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QETMPUCE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyMYQ%2BMQjzoDwHGHtXo4o6%2BpNJnIFYtC3Xk5KgoJy1XAiEA7posMVb7zHpao8W47YAe5o3dT8ZamIceUVPvY%2FCviRwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAfbYgdfWdTz4i5OircA74FduzU%2FmdkoKmDNBFRhce32BoR3c1UxsZQkxLEIiJ6ED%2FHVGDgOGmMMpHPdS3uoG8S3YbCNFBxloklp4uC4dz6E4N8s1L3wQSc4%2BC7fWeN2oKCCc4A1IPX3uwqZvTHqCgl2qt6tFyaomYc5rJPRcYAwvP%2F9bpA1JUv1v2VSQ0K54O3oEZm8xu8%2B4jwj8jmb5Dop1KJL7vTRbh36MtWhNQ5tvm6fFAu4QgnQw5MJt%2F%2BEM%2B1Dy5zTjfu%2FwcDN2xKCoFozOe28s%2FEP9eUGPptckwV3DNJi%2BjDp0am4TGW6FEmo%2B8lxr1GjijP3zFSWSXXLULRPrRDzVPoVpjUce%2BLRLqQM2Zg4ZfZGlbWRpUGoTkgKAtVPPWYF0cRWzq42dgI5Hd8pMUoBz9JM83sdqc%2BrEdE23YbJNRtTRix7l6P6FxWsNh09FhIt30Tucznfg6fFOGz%2F5BBddSAShyPkyKT2LTsvYwwAE96yrjrpIhHEoZXiGtnD4HtD%2BEsdxxHG90HmSjL9EszTJWprNTvWSNaGisGNICc4kI7QGeQD2l4Rn%2F4Ece1vPN2DbnSxEpxoT%2B04yLaN8dbTFdlIub7LkNFowDcJ4ZiAXb4SPBMPEw%2Bywr2fJSFegP2GWzA8yS8MMXNzr4GOqUBFsYaFH%2FCc5Snw%2F1qyP2uFQ0iAtwVpq1QDddF7kM8zJzKS%2BafaroePcZcKY%2BQ96aNNxeF1sRm0Qm1vaojFr%2Bzx2Lbl5acwYHzVeojv2ohNeJHU1tJYZ%2BgilTHOFgJbPc4iSfgNh4yVA2U%2BjE%2Foc1KXeDGRiMV8p74SZ3e9QUqIckV848wYhq54RtNvdbOIZzf7rADB5RABlHXNd4ThXJFChcHdn%2Bj&X-Amz-Signature=52599504cd3c80987aee7cdfe3d7b63c2aacf858264fb1df01715227b7d4137d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QETMPUCE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyMYQ%2BMQjzoDwHGHtXo4o6%2BpNJnIFYtC3Xk5KgoJy1XAiEA7posMVb7zHpao8W47YAe5o3dT8ZamIceUVPvY%2FCviRwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAfbYgdfWdTz4i5OircA74FduzU%2FmdkoKmDNBFRhce32BoR3c1UxsZQkxLEIiJ6ED%2FHVGDgOGmMMpHPdS3uoG8S3YbCNFBxloklp4uC4dz6E4N8s1L3wQSc4%2BC7fWeN2oKCCc4A1IPX3uwqZvTHqCgl2qt6tFyaomYc5rJPRcYAwvP%2F9bpA1JUv1v2VSQ0K54O3oEZm8xu8%2B4jwj8jmb5Dop1KJL7vTRbh36MtWhNQ5tvm6fFAu4QgnQw5MJt%2F%2BEM%2B1Dy5zTjfu%2FwcDN2xKCoFozOe28s%2FEP9eUGPptckwV3DNJi%2BjDp0am4TGW6FEmo%2B8lxr1GjijP3zFSWSXXLULRPrRDzVPoVpjUce%2BLRLqQM2Zg4ZfZGlbWRpUGoTkgKAtVPPWYF0cRWzq42dgI5Hd8pMUoBz9JM83sdqc%2BrEdE23YbJNRtTRix7l6P6FxWsNh09FhIt30Tucznfg6fFOGz%2F5BBddSAShyPkyKT2LTsvYwwAE96yrjrpIhHEoZXiGtnD4HtD%2BEsdxxHG90HmSjL9EszTJWprNTvWSNaGisGNICc4kI7QGeQD2l4Rn%2F4Ece1vPN2DbnSxEpxoT%2B04yLaN8dbTFdlIub7LkNFowDcJ4ZiAXb4SPBMPEw%2Bywr2fJSFegP2GWzA8yS8MMXNzr4GOqUBFsYaFH%2FCc5Snw%2F1qyP2uFQ0iAtwVpq1QDddF7kM8zJzKS%2BafaroePcZcKY%2BQ96aNNxeF1sRm0Qm1vaojFr%2Bzx2Lbl5acwYHzVeojv2ohNeJHU1tJYZ%2BgilTHOFgJbPc4iSfgNh4yVA2U%2BjE%2Foc1KXeDGRiMV8p74SZ3e9QUqIckV848wYhq54RtNvdbOIZzf7rADB5RABlHXNd4ThXJFChcHdn%2Bj&X-Amz-Signature=9fc4c8596495bc0cff7f588afb0d22446a38b12e66978ef9820f2d98db661f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QETMPUCE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyMYQ%2BMQjzoDwHGHtXo4o6%2BpNJnIFYtC3Xk5KgoJy1XAiEA7posMVb7zHpao8W47YAe5o3dT8ZamIceUVPvY%2FCviRwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAfbYgdfWdTz4i5OircA74FduzU%2FmdkoKmDNBFRhce32BoR3c1UxsZQkxLEIiJ6ED%2FHVGDgOGmMMpHPdS3uoG8S3YbCNFBxloklp4uC4dz6E4N8s1L3wQSc4%2BC7fWeN2oKCCc4A1IPX3uwqZvTHqCgl2qt6tFyaomYc5rJPRcYAwvP%2F9bpA1JUv1v2VSQ0K54O3oEZm8xu8%2B4jwj8jmb5Dop1KJL7vTRbh36MtWhNQ5tvm6fFAu4QgnQw5MJt%2F%2BEM%2B1Dy5zTjfu%2FwcDN2xKCoFozOe28s%2FEP9eUGPptckwV3DNJi%2BjDp0am4TGW6FEmo%2B8lxr1GjijP3zFSWSXXLULRPrRDzVPoVpjUce%2BLRLqQM2Zg4ZfZGlbWRpUGoTkgKAtVPPWYF0cRWzq42dgI5Hd8pMUoBz9JM83sdqc%2BrEdE23YbJNRtTRix7l6P6FxWsNh09FhIt30Tucznfg6fFOGz%2F5BBddSAShyPkyKT2LTsvYwwAE96yrjrpIhHEoZXiGtnD4HtD%2BEsdxxHG90HmSjL9EszTJWprNTvWSNaGisGNICc4kI7QGeQD2l4Rn%2F4Ece1vPN2DbnSxEpxoT%2B04yLaN8dbTFdlIub7LkNFowDcJ4ZiAXb4SPBMPEw%2Bywr2fJSFegP2GWzA8yS8MMXNzr4GOqUBFsYaFH%2FCc5Snw%2F1qyP2uFQ0iAtwVpq1QDddF7kM8zJzKS%2BafaroePcZcKY%2BQ96aNNxeF1sRm0Qm1vaojFr%2Bzx2Lbl5acwYHzVeojv2ohNeJHU1tJYZ%2BgilTHOFgJbPc4iSfgNh4yVA2U%2BjE%2Foc1KXeDGRiMV8p74SZ3e9QUqIckV848wYhq54RtNvdbOIZzf7rADB5RABlHXNd4ThXJFChcHdn%2Bj&X-Amz-Signature=e5aff1a93b34b279a0a2b8e9ddd271b4e43884e9de4e861d2ae29aecbcd65efb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QETMPUCE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyMYQ%2BMQjzoDwHGHtXo4o6%2BpNJnIFYtC3Xk5KgoJy1XAiEA7posMVb7zHpao8W47YAe5o3dT8ZamIceUVPvY%2FCviRwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAfbYgdfWdTz4i5OircA74FduzU%2FmdkoKmDNBFRhce32BoR3c1UxsZQkxLEIiJ6ED%2FHVGDgOGmMMpHPdS3uoG8S3YbCNFBxloklp4uC4dz6E4N8s1L3wQSc4%2BC7fWeN2oKCCc4A1IPX3uwqZvTHqCgl2qt6tFyaomYc5rJPRcYAwvP%2F9bpA1JUv1v2VSQ0K54O3oEZm8xu8%2B4jwj8jmb5Dop1KJL7vTRbh36MtWhNQ5tvm6fFAu4QgnQw5MJt%2F%2BEM%2B1Dy5zTjfu%2FwcDN2xKCoFozOe28s%2FEP9eUGPptckwV3DNJi%2BjDp0am4TGW6FEmo%2B8lxr1GjijP3zFSWSXXLULRPrRDzVPoVpjUce%2BLRLqQM2Zg4ZfZGlbWRpUGoTkgKAtVPPWYF0cRWzq42dgI5Hd8pMUoBz9JM83sdqc%2BrEdE23YbJNRtTRix7l6P6FxWsNh09FhIt30Tucznfg6fFOGz%2F5BBddSAShyPkyKT2LTsvYwwAE96yrjrpIhHEoZXiGtnD4HtD%2BEsdxxHG90HmSjL9EszTJWprNTvWSNaGisGNICc4kI7QGeQD2l4Rn%2F4Ece1vPN2DbnSxEpxoT%2B04yLaN8dbTFdlIub7LkNFowDcJ4ZiAXb4SPBMPEw%2Bywr2fJSFegP2GWzA8yS8MMXNzr4GOqUBFsYaFH%2FCc5Snw%2F1qyP2uFQ0iAtwVpq1QDddF7kM8zJzKS%2BafaroePcZcKY%2BQ96aNNxeF1sRm0Qm1vaojFr%2Bzx2Lbl5acwYHzVeojv2ohNeJHU1tJYZ%2BgilTHOFgJbPc4iSfgNh4yVA2U%2BjE%2Foc1KXeDGRiMV8p74SZ3e9QUqIckV848wYhq54RtNvdbOIZzf7rADB5RABlHXNd4ThXJFChcHdn%2Bj&X-Amz-Signature=04b734f52d7d6dae69322c31fb6fe610098039d97cce6299e040a561f39b1491&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QETMPUCE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyMYQ%2BMQjzoDwHGHtXo4o6%2BpNJnIFYtC3Xk5KgoJy1XAiEA7posMVb7zHpao8W47YAe5o3dT8ZamIceUVPvY%2FCviRwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAfbYgdfWdTz4i5OircA74FduzU%2FmdkoKmDNBFRhce32BoR3c1UxsZQkxLEIiJ6ED%2FHVGDgOGmMMpHPdS3uoG8S3YbCNFBxloklp4uC4dz6E4N8s1L3wQSc4%2BC7fWeN2oKCCc4A1IPX3uwqZvTHqCgl2qt6tFyaomYc5rJPRcYAwvP%2F9bpA1JUv1v2VSQ0K54O3oEZm8xu8%2B4jwj8jmb5Dop1KJL7vTRbh36MtWhNQ5tvm6fFAu4QgnQw5MJt%2F%2BEM%2B1Dy5zTjfu%2FwcDN2xKCoFozOe28s%2FEP9eUGPptckwV3DNJi%2BjDp0am4TGW6FEmo%2B8lxr1GjijP3zFSWSXXLULRPrRDzVPoVpjUce%2BLRLqQM2Zg4ZfZGlbWRpUGoTkgKAtVPPWYF0cRWzq42dgI5Hd8pMUoBz9JM83sdqc%2BrEdE23YbJNRtTRix7l6P6FxWsNh09FhIt30Tucznfg6fFOGz%2F5BBddSAShyPkyKT2LTsvYwwAE96yrjrpIhHEoZXiGtnD4HtD%2BEsdxxHG90HmSjL9EszTJWprNTvWSNaGisGNICc4kI7QGeQD2l4Rn%2F4Ece1vPN2DbnSxEpxoT%2B04yLaN8dbTFdlIub7LkNFowDcJ4ZiAXb4SPBMPEw%2Bywr2fJSFegP2GWzA8yS8MMXNzr4GOqUBFsYaFH%2FCc5Snw%2F1qyP2uFQ0iAtwVpq1QDddF7kM8zJzKS%2BafaroePcZcKY%2BQ96aNNxeF1sRm0Qm1vaojFr%2Bzx2Lbl5acwYHzVeojv2ohNeJHU1tJYZ%2BgilTHOFgJbPc4iSfgNh4yVA2U%2BjE%2Foc1KXeDGRiMV8p74SZ3e9QUqIckV848wYhq54RtNvdbOIZzf7rADB5RABlHXNd4ThXJFChcHdn%2Bj&X-Amz-Signature=b80230b6dd2fbe097b62da4df5738a16f3505d4af8e663a65d97d708439d79cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QETMPUCE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyMYQ%2BMQjzoDwHGHtXo4o6%2BpNJnIFYtC3Xk5KgoJy1XAiEA7posMVb7zHpao8W47YAe5o3dT8ZamIceUVPvY%2FCviRwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAfbYgdfWdTz4i5OircA74FduzU%2FmdkoKmDNBFRhce32BoR3c1UxsZQkxLEIiJ6ED%2FHVGDgOGmMMpHPdS3uoG8S3YbCNFBxloklp4uC4dz6E4N8s1L3wQSc4%2BC7fWeN2oKCCc4A1IPX3uwqZvTHqCgl2qt6tFyaomYc5rJPRcYAwvP%2F9bpA1JUv1v2VSQ0K54O3oEZm8xu8%2B4jwj8jmb5Dop1KJL7vTRbh36MtWhNQ5tvm6fFAu4QgnQw5MJt%2F%2BEM%2B1Dy5zTjfu%2FwcDN2xKCoFozOe28s%2FEP9eUGPptckwV3DNJi%2BjDp0am4TGW6FEmo%2B8lxr1GjijP3zFSWSXXLULRPrRDzVPoVpjUce%2BLRLqQM2Zg4ZfZGlbWRpUGoTkgKAtVPPWYF0cRWzq42dgI5Hd8pMUoBz9JM83sdqc%2BrEdE23YbJNRtTRix7l6P6FxWsNh09FhIt30Tucznfg6fFOGz%2F5BBddSAShyPkyKT2LTsvYwwAE96yrjrpIhHEoZXiGtnD4HtD%2BEsdxxHG90HmSjL9EszTJWprNTvWSNaGisGNICc4kI7QGeQD2l4Rn%2F4Ece1vPN2DbnSxEpxoT%2B04yLaN8dbTFdlIub7LkNFowDcJ4ZiAXb4SPBMPEw%2Bywr2fJSFegP2GWzA8yS8MMXNzr4GOqUBFsYaFH%2FCc5Snw%2F1qyP2uFQ0iAtwVpq1QDddF7kM8zJzKS%2BafaroePcZcKY%2BQ96aNNxeF1sRm0Qm1vaojFr%2Bzx2Lbl5acwYHzVeojv2ohNeJHU1tJYZ%2BgilTHOFgJbPc4iSfgNh4yVA2U%2BjE%2Foc1KXeDGRiMV8p74SZ3e9QUqIckV848wYhq54RtNvdbOIZzf7rADB5RABlHXNd4ThXJFChcHdn%2Bj&X-Amz-Signature=78fbb091bc3f2dc1dc097ecc528dc541cd60464621667dc3a22f9b06b9191981&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

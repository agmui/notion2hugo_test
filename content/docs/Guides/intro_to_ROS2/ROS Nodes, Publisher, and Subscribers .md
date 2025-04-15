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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMVLEK6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmeGLiSd9KlLVwi7ro6bRTetJ4e3yW1uRrP7TpMtTiLAiEA4%2FnN7CKgQfZuKoUVLZyaudw3CfC%2FmDseGabmSBRKmhcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEvsLSDrHG6%2FSdsP2SrcA2Z0YOVGxUJpZs9Q4WK61S37IXQBPNHbijxVTF7TJtP9K2EgFvbiYcsiJLlV4w4R%2B0%2BOmM2KPqBHBXlHDgRTl4s7ocp0N%2FsffhIc4fZufc%2Bmd%2B5BhhxSsYxHoSSpzXSVKluxEJ0tnEwbxExuEWo%2BJ16ah2ioeJ1ID7Viy5tDnM7L3%2FkEJHnWHwPrh%2Bbm4hHraWGhGA02JP94W%2BRoeKdM4YH0d7lZkw4tuWmabIZrZtkW0YJDVANOzmZ%2FYRQxBwCrTRsHAatUGcuz0TCRgwXCWAuKJiu9DXAqfIH%2FYK30Tyb%2BAewYeu1R0Iw9GfwI%2B%2FKf2KcsEeVS2gO%2BhaagFgPrVUasZKuWkUrQrWW4qTBAAi%2BYPVPP26pGDt2tk2k0Xk5Tue7x3xPa5S9G%2BqZKjPPoC5LqvO87knswzocDMRp38LVTmvkEFh%2BxwYBBoYrliG%2B2vZB8JAFLj2rbfeUNPL7KpT%2BgdQ7zrhOKd8fTBj2m2SNTquR1JLQ7WtPLmNgPktQfEZk8qf1uFUwPOOuHIOIyF5cSzh51k6XWUjegC7U035WLw6V7pZN%2FIJo76U4hSg5rVWTYKko2yMChKbMVDZmdkR8Kjlqy6ssXkwg0SFTIBCgIkdUBA7EMPFCrw9p0MNHS9r8GOqUBcfYesOligqi0VGIAZNEjUsvEU0MzHqazFBDgqMLRRCo4JkoFMNERmHIV82OCRKD7%2BJYYeyVUzkU7vhhIwZUR3DEDIT9oiyz2Hh5Z%2FyaK5Tx648LoVt5AC2GtoeZ8MaV%2F7knbxOQ3ZlUcWFghgxHEGncvdTQI3aEZMI8FK8pyo5KRE0XLOhbKN80qCSnSjPm12xT%2Baa%2FKwDaZujbV5VHPhkoFXllf&X-Amz-Signature=beac4bc035b3b34151e0a74d8ddcadd5f0fe6f7a3c9c1a1222fd2519df9b534c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMVLEK6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmeGLiSd9KlLVwi7ro6bRTetJ4e3yW1uRrP7TpMtTiLAiEA4%2FnN7CKgQfZuKoUVLZyaudw3CfC%2FmDseGabmSBRKmhcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEvsLSDrHG6%2FSdsP2SrcA2Z0YOVGxUJpZs9Q4WK61S37IXQBPNHbijxVTF7TJtP9K2EgFvbiYcsiJLlV4w4R%2B0%2BOmM2KPqBHBXlHDgRTl4s7ocp0N%2FsffhIc4fZufc%2Bmd%2B5BhhxSsYxHoSSpzXSVKluxEJ0tnEwbxExuEWo%2BJ16ah2ioeJ1ID7Viy5tDnM7L3%2FkEJHnWHwPrh%2Bbm4hHraWGhGA02JP94W%2BRoeKdM4YH0d7lZkw4tuWmabIZrZtkW0YJDVANOzmZ%2FYRQxBwCrTRsHAatUGcuz0TCRgwXCWAuKJiu9DXAqfIH%2FYK30Tyb%2BAewYeu1R0Iw9GfwI%2B%2FKf2KcsEeVS2gO%2BhaagFgPrVUasZKuWkUrQrWW4qTBAAi%2BYPVPP26pGDt2tk2k0Xk5Tue7x3xPa5S9G%2BqZKjPPoC5LqvO87knswzocDMRp38LVTmvkEFh%2BxwYBBoYrliG%2B2vZB8JAFLj2rbfeUNPL7KpT%2BgdQ7zrhOKd8fTBj2m2SNTquR1JLQ7WtPLmNgPktQfEZk8qf1uFUwPOOuHIOIyF5cSzh51k6XWUjegC7U035WLw6V7pZN%2FIJo76U4hSg5rVWTYKko2yMChKbMVDZmdkR8Kjlqy6ssXkwg0SFTIBCgIkdUBA7EMPFCrw9p0MNHS9r8GOqUBcfYesOligqi0VGIAZNEjUsvEU0MzHqazFBDgqMLRRCo4JkoFMNERmHIV82OCRKD7%2BJYYeyVUzkU7vhhIwZUR3DEDIT9oiyz2Hh5Z%2FyaK5Tx648LoVt5AC2GtoeZ8MaV%2F7knbxOQ3ZlUcWFghgxHEGncvdTQI3aEZMI8FK8pyo5KRE0XLOhbKN80qCSnSjPm12xT%2Baa%2FKwDaZujbV5VHPhkoFXllf&X-Amz-Signature=b25b2c94ee7d2165bd575444fa48f56c82d8fa420cf9f6ba16c304570e58864b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMVLEK6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmeGLiSd9KlLVwi7ro6bRTetJ4e3yW1uRrP7TpMtTiLAiEA4%2FnN7CKgQfZuKoUVLZyaudw3CfC%2FmDseGabmSBRKmhcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEvsLSDrHG6%2FSdsP2SrcA2Z0YOVGxUJpZs9Q4WK61S37IXQBPNHbijxVTF7TJtP9K2EgFvbiYcsiJLlV4w4R%2B0%2BOmM2KPqBHBXlHDgRTl4s7ocp0N%2FsffhIc4fZufc%2Bmd%2B5BhhxSsYxHoSSpzXSVKluxEJ0tnEwbxExuEWo%2BJ16ah2ioeJ1ID7Viy5tDnM7L3%2FkEJHnWHwPrh%2Bbm4hHraWGhGA02JP94W%2BRoeKdM4YH0d7lZkw4tuWmabIZrZtkW0YJDVANOzmZ%2FYRQxBwCrTRsHAatUGcuz0TCRgwXCWAuKJiu9DXAqfIH%2FYK30Tyb%2BAewYeu1R0Iw9GfwI%2B%2FKf2KcsEeVS2gO%2BhaagFgPrVUasZKuWkUrQrWW4qTBAAi%2BYPVPP26pGDt2tk2k0Xk5Tue7x3xPa5S9G%2BqZKjPPoC5LqvO87knswzocDMRp38LVTmvkEFh%2BxwYBBoYrliG%2B2vZB8JAFLj2rbfeUNPL7KpT%2BgdQ7zrhOKd8fTBj2m2SNTquR1JLQ7WtPLmNgPktQfEZk8qf1uFUwPOOuHIOIyF5cSzh51k6XWUjegC7U035WLw6V7pZN%2FIJo76U4hSg5rVWTYKko2yMChKbMVDZmdkR8Kjlqy6ssXkwg0SFTIBCgIkdUBA7EMPFCrw9p0MNHS9r8GOqUBcfYesOligqi0VGIAZNEjUsvEU0MzHqazFBDgqMLRRCo4JkoFMNERmHIV82OCRKD7%2BJYYeyVUzkU7vhhIwZUR3DEDIT9oiyz2Hh5Z%2FyaK5Tx648LoVt5AC2GtoeZ8MaV%2F7knbxOQ3ZlUcWFghgxHEGncvdTQI3aEZMI8FK8pyo5KRE0XLOhbKN80qCSnSjPm12xT%2Baa%2FKwDaZujbV5VHPhkoFXllf&X-Amz-Signature=8010619fe88dacbb2bcc3e9b6041e0727751fbbc98301df80163ccfc3af4692e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMVLEK6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmeGLiSd9KlLVwi7ro6bRTetJ4e3yW1uRrP7TpMtTiLAiEA4%2FnN7CKgQfZuKoUVLZyaudw3CfC%2FmDseGabmSBRKmhcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEvsLSDrHG6%2FSdsP2SrcA2Z0YOVGxUJpZs9Q4WK61S37IXQBPNHbijxVTF7TJtP9K2EgFvbiYcsiJLlV4w4R%2B0%2BOmM2KPqBHBXlHDgRTl4s7ocp0N%2FsffhIc4fZufc%2Bmd%2B5BhhxSsYxHoSSpzXSVKluxEJ0tnEwbxExuEWo%2BJ16ah2ioeJ1ID7Viy5tDnM7L3%2FkEJHnWHwPrh%2Bbm4hHraWGhGA02JP94W%2BRoeKdM4YH0d7lZkw4tuWmabIZrZtkW0YJDVANOzmZ%2FYRQxBwCrTRsHAatUGcuz0TCRgwXCWAuKJiu9DXAqfIH%2FYK30Tyb%2BAewYeu1R0Iw9GfwI%2B%2FKf2KcsEeVS2gO%2BhaagFgPrVUasZKuWkUrQrWW4qTBAAi%2BYPVPP26pGDt2tk2k0Xk5Tue7x3xPa5S9G%2BqZKjPPoC5LqvO87knswzocDMRp38LVTmvkEFh%2BxwYBBoYrliG%2B2vZB8JAFLj2rbfeUNPL7KpT%2BgdQ7zrhOKd8fTBj2m2SNTquR1JLQ7WtPLmNgPktQfEZk8qf1uFUwPOOuHIOIyF5cSzh51k6XWUjegC7U035WLw6V7pZN%2FIJo76U4hSg5rVWTYKko2yMChKbMVDZmdkR8Kjlqy6ssXkwg0SFTIBCgIkdUBA7EMPFCrw9p0MNHS9r8GOqUBcfYesOligqi0VGIAZNEjUsvEU0MzHqazFBDgqMLRRCo4JkoFMNERmHIV82OCRKD7%2BJYYeyVUzkU7vhhIwZUR3DEDIT9oiyz2Hh5Z%2FyaK5Tx648LoVt5AC2GtoeZ8MaV%2F7knbxOQ3ZlUcWFghgxHEGncvdTQI3aEZMI8FK8pyo5KRE0XLOhbKN80qCSnSjPm12xT%2Baa%2FKwDaZujbV5VHPhkoFXllf&X-Amz-Signature=8d4486c2206f2acda4f908ae508d325373f08bbf6f043cf93b1f522f9bf56513&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMVLEK6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmeGLiSd9KlLVwi7ro6bRTetJ4e3yW1uRrP7TpMtTiLAiEA4%2FnN7CKgQfZuKoUVLZyaudw3CfC%2FmDseGabmSBRKmhcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEvsLSDrHG6%2FSdsP2SrcA2Z0YOVGxUJpZs9Q4WK61S37IXQBPNHbijxVTF7TJtP9K2EgFvbiYcsiJLlV4w4R%2B0%2BOmM2KPqBHBXlHDgRTl4s7ocp0N%2FsffhIc4fZufc%2Bmd%2B5BhhxSsYxHoSSpzXSVKluxEJ0tnEwbxExuEWo%2BJ16ah2ioeJ1ID7Viy5tDnM7L3%2FkEJHnWHwPrh%2Bbm4hHraWGhGA02JP94W%2BRoeKdM4YH0d7lZkw4tuWmabIZrZtkW0YJDVANOzmZ%2FYRQxBwCrTRsHAatUGcuz0TCRgwXCWAuKJiu9DXAqfIH%2FYK30Tyb%2BAewYeu1R0Iw9GfwI%2B%2FKf2KcsEeVS2gO%2BhaagFgPrVUasZKuWkUrQrWW4qTBAAi%2BYPVPP26pGDt2tk2k0Xk5Tue7x3xPa5S9G%2BqZKjPPoC5LqvO87knswzocDMRp38LVTmvkEFh%2BxwYBBoYrliG%2B2vZB8JAFLj2rbfeUNPL7KpT%2BgdQ7zrhOKd8fTBj2m2SNTquR1JLQ7WtPLmNgPktQfEZk8qf1uFUwPOOuHIOIyF5cSzh51k6XWUjegC7U035WLw6V7pZN%2FIJo76U4hSg5rVWTYKko2yMChKbMVDZmdkR8Kjlqy6ssXkwg0SFTIBCgIkdUBA7EMPFCrw9p0MNHS9r8GOqUBcfYesOligqi0VGIAZNEjUsvEU0MzHqazFBDgqMLRRCo4JkoFMNERmHIV82OCRKD7%2BJYYeyVUzkU7vhhIwZUR3DEDIT9oiyz2Hh5Z%2FyaK5Tx648LoVt5AC2GtoeZ8MaV%2F7knbxOQ3ZlUcWFghgxHEGncvdTQI3aEZMI8FK8pyo5KRE0XLOhbKN80qCSnSjPm12xT%2Baa%2FKwDaZujbV5VHPhkoFXllf&X-Amz-Signature=234267c5c4a1c4a938747f114de79a0748351e8bf8d8ca87261c40e5263d58a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMVLEK6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmeGLiSd9KlLVwi7ro6bRTetJ4e3yW1uRrP7TpMtTiLAiEA4%2FnN7CKgQfZuKoUVLZyaudw3CfC%2FmDseGabmSBRKmhcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEvsLSDrHG6%2FSdsP2SrcA2Z0YOVGxUJpZs9Q4WK61S37IXQBPNHbijxVTF7TJtP9K2EgFvbiYcsiJLlV4w4R%2B0%2BOmM2KPqBHBXlHDgRTl4s7ocp0N%2FsffhIc4fZufc%2Bmd%2B5BhhxSsYxHoSSpzXSVKluxEJ0tnEwbxExuEWo%2BJ16ah2ioeJ1ID7Viy5tDnM7L3%2FkEJHnWHwPrh%2Bbm4hHraWGhGA02JP94W%2BRoeKdM4YH0d7lZkw4tuWmabIZrZtkW0YJDVANOzmZ%2FYRQxBwCrTRsHAatUGcuz0TCRgwXCWAuKJiu9DXAqfIH%2FYK30Tyb%2BAewYeu1R0Iw9GfwI%2B%2FKf2KcsEeVS2gO%2BhaagFgPrVUasZKuWkUrQrWW4qTBAAi%2BYPVPP26pGDt2tk2k0Xk5Tue7x3xPa5S9G%2BqZKjPPoC5LqvO87knswzocDMRp38LVTmvkEFh%2BxwYBBoYrliG%2B2vZB8JAFLj2rbfeUNPL7KpT%2BgdQ7zrhOKd8fTBj2m2SNTquR1JLQ7WtPLmNgPktQfEZk8qf1uFUwPOOuHIOIyF5cSzh51k6XWUjegC7U035WLw6V7pZN%2FIJo76U4hSg5rVWTYKko2yMChKbMVDZmdkR8Kjlqy6ssXkwg0SFTIBCgIkdUBA7EMPFCrw9p0MNHS9r8GOqUBcfYesOligqi0VGIAZNEjUsvEU0MzHqazFBDgqMLRRCo4JkoFMNERmHIV82OCRKD7%2BJYYeyVUzkU7vhhIwZUR3DEDIT9oiyz2Hh5Z%2FyaK5Tx648LoVt5AC2GtoeZ8MaV%2F7knbxOQ3ZlUcWFghgxHEGncvdTQI3aEZMI8FK8pyo5KRE0XLOhbKN80qCSnSjPm12xT%2Baa%2FKwDaZujbV5VHPhkoFXllf&X-Amz-Signature=769b59f140c17c7ac39f13f97906217b990b2e4c5407fa4f71e19242f6d8d7bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMVLEK6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmeGLiSd9KlLVwi7ro6bRTetJ4e3yW1uRrP7TpMtTiLAiEA4%2FnN7CKgQfZuKoUVLZyaudw3CfC%2FmDseGabmSBRKmhcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEvsLSDrHG6%2FSdsP2SrcA2Z0YOVGxUJpZs9Q4WK61S37IXQBPNHbijxVTF7TJtP9K2EgFvbiYcsiJLlV4w4R%2B0%2BOmM2KPqBHBXlHDgRTl4s7ocp0N%2FsffhIc4fZufc%2Bmd%2B5BhhxSsYxHoSSpzXSVKluxEJ0tnEwbxExuEWo%2BJ16ah2ioeJ1ID7Viy5tDnM7L3%2FkEJHnWHwPrh%2Bbm4hHraWGhGA02JP94W%2BRoeKdM4YH0d7lZkw4tuWmabIZrZtkW0YJDVANOzmZ%2FYRQxBwCrTRsHAatUGcuz0TCRgwXCWAuKJiu9DXAqfIH%2FYK30Tyb%2BAewYeu1R0Iw9GfwI%2B%2FKf2KcsEeVS2gO%2BhaagFgPrVUasZKuWkUrQrWW4qTBAAi%2BYPVPP26pGDt2tk2k0Xk5Tue7x3xPa5S9G%2BqZKjPPoC5LqvO87knswzocDMRp38LVTmvkEFh%2BxwYBBoYrliG%2B2vZB8JAFLj2rbfeUNPL7KpT%2BgdQ7zrhOKd8fTBj2m2SNTquR1JLQ7WtPLmNgPktQfEZk8qf1uFUwPOOuHIOIyF5cSzh51k6XWUjegC7U035WLw6V7pZN%2FIJo76U4hSg5rVWTYKko2yMChKbMVDZmdkR8Kjlqy6ssXkwg0SFTIBCgIkdUBA7EMPFCrw9p0MNHS9r8GOqUBcfYesOligqi0VGIAZNEjUsvEU0MzHqazFBDgqMLRRCo4JkoFMNERmHIV82OCRKD7%2BJYYeyVUzkU7vhhIwZUR3DEDIT9oiyz2Hh5Z%2FyaK5Tx648LoVt5AC2GtoeZ8MaV%2F7knbxOQ3ZlUcWFghgxHEGncvdTQI3aEZMI8FK8pyo5KRE0XLOhbKN80qCSnSjPm12xT%2Baa%2FKwDaZujbV5VHPhkoFXllf&X-Amz-Signature=015037de0bc841aaa2668fdef85733792ffa17443b3801ff2d18f5a6fbb1a974&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMVLEK6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmeGLiSd9KlLVwi7ro6bRTetJ4e3yW1uRrP7TpMtTiLAiEA4%2FnN7CKgQfZuKoUVLZyaudw3CfC%2FmDseGabmSBRKmhcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEvsLSDrHG6%2FSdsP2SrcA2Z0YOVGxUJpZs9Q4WK61S37IXQBPNHbijxVTF7TJtP9K2EgFvbiYcsiJLlV4w4R%2B0%2BOmM2KPqBHBXlHDgRTl4s7ocp0N%2FsffhIc4fZufc%2Bmd%2B5BhhxSsYxHoSSpzXSVKluxEJ0tnEwbxExuEWo%2BJ16ah2ioeJ1ID7Viy5tDnM7L3%2FkEJHnWHwPrh%2Bbm4hHraWGhGA02JP94W%2BRoeKdM4YH0d7lZkw4tuWmabIZrZtkW0YJDVANOzmZ%2FYRQxBwCrTRsHAatUGcuz0TCRgwXCWAuKJiu9DXAqfIH%2FYK30Tyb%2BAewYeu1R0Iw9GfwI%2B%2FKf2KcsEeVS2gO%2BhaagFgPrVUasZKuWkUrQrWW4qTBAAi%2BYPVPP26pGDt2tk2k0Xk5Tue7x3xPa5S9G%2BqZKjPPoC5LqvO87knswzocDMRp38LVTmvkEFh%2BxwYBBoYrliG%2B2vZB8JAFLj2rbfeUNPL7KpT%2BgdQ7zrhOKd8fTBj2m2SNTquR1JLQ7WtPLmNgPktQfEZk8qf1uFUwPOOuHIOIyF5cSzh51k6XWUjegC7U035WLw6V7pZN%2FIJo76U4hSg5rVWTYKko2yMChKbMVDZmdkR8Kjlqy6ssXkwg0SFTIBCgIkdUBA7EMPFCrw9p0MNHS9r8GOqUBcfYesOligqi0VGIAZNEjUsvEU0MzHqazFBDgqMLRRCo4JkoFMNERmHIV82OCRKD7%2BJYYeyVUzkU7vhhIwZUR3DEDIT9oiyz2Hh5Z%2FyaK5Tx648LoVt5AC2GtoeZ8MaV%2F7knbxOQ3ZlUcWFghgxHEGncvdTQI3aEZMI8FK8pyo5KRE0XLOhbKN80qCSnSjPm12xT%2Baa%2FKwDaZujbV5VHPhkoFXllf&X-Amz-Signature=326b7766a70d0dc9dd8528e1b5d0d994c0a0f63ddd04d0d06068eec7f46fe975&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MHR57QI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIED3SYZfKczwqJ0xIaXnxPWYNPmLKxMYZc3Ds%2Btw7GzVAiAbPvyXoo5pnDocpwE7QOIqlCHfd9e%2FDz7%2BpQx0881yLyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrigT%2BVOJsi1GI1iUKtwDS4z7z9aEP8PBICfJ0KW7uFk8jhsusBi2KlyzH9YzonbShvsBjXFjedh%2Bvn6W2QyA3AKjr25XLm0Pso9tr%2BlUkPFNQZ19ZJ3%2F7mStP%2Fg0QXneXyS4cqd6PUnYIH29hJzTiAGlXb9mn%2BXSL8POGNIm%2FwlMUaW1zyuriKUi3JgpFknP8ErtUl0sQuJpGH8uOXcRsoDthVNj1T0Fyy%2FI6h1MqCv4J4%2FfmRN%2Bp1rFtTeZ8wn25HWmmV8kh1dZiGg7LyTNDX%2BpR0nvPuQ45gaP9pebU%2BM0kSCdnYoK5xIWZHFIFmOXzY2cQmpAcEyjFx6BxHMkk0oNmFhzOISxG2TaXfb8SC4Q3SFn%2BLJ380TK0bu9xSVHj8BNpZxM%2BCAJUNVpazffT5x2o2QbPy%2BzB8lTVlgkTR%2BanrvPl6uc3oeApBi3t6jb5NzMvuUptISoavgaQPVTPKL0M9cTgWWoKxuC4nBj6ZIe2DpqSKA5epGaS%2Fv5j97NO5Pq1HYoh6sAYKM%2FB8FLaXIDO8PihRluMiQV%2FczJmmB4wp%2FqjGpCpYBgISTkZKCkChuoskI4dA3wUXYCz8C9jEcGfob7%2BVQ%2B4mM9QOqM%2FluOihrnExDvJMqaKxRXU3hLsgXPGcsO2foD89Mw1fqzxAY6pgFNJmVPqNHTvoa6FdYfLIk6ZtxPNedAgnk73OD81f90iQO07KM%2F7FQElgaG736Ujm9TJybvgk15LFyGvNeJM5D22pHZvgFKhDM7zAWUjo0rSIcKcP43rM3rZEmR07lMUJ7mz1JxZ5eRb8iDoICUyB4tt1D1sdjvdPA51ZPzLxBy8a3oBJgXmYQSLXw2VRpBJIrWkKTcuy1%2FchXi2LP%2FJXlHZzPOMV0s&X-Amz-Signature=bc376850c50daf3dbe9bbab9c74a91c6f43bfa6a005a5b363723909aadeadbb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MHR57QI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIED3SYZfKczwqJ0xIaXnxPWYNPmLKxMYZc3Ds%2Btw7GzVAiAbPvyXoo5pnDocpwE7QOIqlCHfd9e%2FDz7%2BpQx0881yLyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrigT%2BVOJsi1GI1iUKtwDS4z7z9aEP8PBICfJ0KW7uFk8jhsusBi2KlyzH9YzonbShvsBjXFjedh%2Bvn6W2QyA3AKjr25XLm0Pso9tr%2BlUkPFNQZ19ZJ3%2F7mStP%2Fg0QXneXyS4cqd6PUnYIH29hJzTiAGlXb9mn%2BXSL8POGNIm%2FwlMUaW1zyuriKUi3JgpFknP8ErtUl0sQuJpGH8uOXcRsoDthVNj1T0Fyy%2FI6h1MqCv4J4%2FfmRN%2Bp1rFtTeZ8wn25HWmmV8kh1dZiGg7LyTNDX%2BpR0nvPuQ45gaP9pebU%2BM0kSCdnYoK5xIWZHFIFmOXzY2cQmpAcEyjFx6BxHMkk0oNmFhzOISxG2TaXfb8SC4Q3SFn%2BLJ380TK0bu9xSVHj8BNpZxM%2BCAJUNVpazffT5x2o2QbPy%2BzB8lTVlgkTR%2BanrvPl6uc3oeApBi3t6jb5NzMvuUptISoavgaQPVTPKL0M9cTgWWoKxuC4nBj6ZIe2DpqSKA5epGaS%2Fv5j97NO5Pq1HYoh6sAYKM%2FB8FLaXIDO8PihRluMiQV%2FczJmmB4wp%2FqjGpCpYBgISTkZKCkChuoskI4dA3wUXYCz8C9jEcGfob7%2BVQ%2B4mM9QOqM%2FluOihrnExDvJMqaKxRXU3hLsgXPGcsO2foD89Mw1fqzxAY6pgFNJmVPqNHTvoa6FdYfLIk6ZtxPNedAgnk73OD81f90iQO07KM%2F7FQElgaG736Ujm9TJybvgk15LFyGvNeJM5D22pHZvgFKhDM7zAWUjo0rSIcKcP43rM3rZEmR07lMUJ7mz1JxZ5eRb8iDoICUyB4tt1D1sdjvdPA51ZPzLxBy8a3oBJgXmYQSLXw2VRpBJIrWkKTcuy1%2FchXi2LP%2FJXlHZzPOMV0s&X-Amz-Signature=83d400fe2076298ff601b9988ee67e254f1d24845673690d497c0485b1972ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MHR57QI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIED3SYZfKczwqJ0xIaXnxPWYNPmLKxMYZc3Ds%2Btw7GzVAiAbPvyXoo5pnDocpwE7QOIqlCHfd9e%2FDz7%2BpQx0881yLyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrigT%2BVOJsi1GI1iUKtwDS4z7z9aEP8PBICfJ0KW7uFk8jhsusBi2KlyzH9YzonbShvsBjXFjedh%2Bvn6W2QyA3AKjr25XLm0Pso9tr%2BlUkPFNQZ19ZJ3%2F7mStP%2Fg0QXneXyS4cqd6PUnYIH29hJzTiAGlXb9mn%2BXSL8POGNIm%2FwlMUaW1zyuriKUi3JgpFknP8ErtUl0sQuJpGH8uOXcRsoDthVNj1T0Fyy%2FI6h1MqCv4J4%2FfmRN%2Bp1rFtTeZ8wn25HWmmV8kh1dZiGg7LyTNDX%2BpR0nvPuQ45gaP9pebU%2BM0kSCdnYoK5xIWZHFIFmOXzY2cQmpAcEyjFx6BxHMkk0oNmFhzOISxG2TaXfb8SC4Q3SFn%2BLJ380TK0bu9xSVHj8BNpZxM%2BCAJUNVpazffT5x2o2QbPy%2BzB8lTVlgkTR%2BanrvPl6uc3oeApBi3t6jb5NzMvuUptISoavgaQPVTPKL0M9cTgWWoKxuC4nBj6ZIe2DpqSKA5epGaS%2Fv5j97NO5Pq1HYoh6sAYKM%2FB8FLaXIDO8PihRluMiQV%2FczJmmB4wp%2FqjGpCpYBgISTkZKCkChuoskI4dA3wUXYCz8C9jEcGfob7%2BVQ%2B4mM9QOqM%2FluOihrnExDvJMqaKxRXU3hLsgXPGcsO2foD89Mw1fqzxAY6pgFNJmVPqNHTvoa6FdYfLIk6ZtxPNedAgnk73OD81f90iQO07KM%2F7FQElgaG736Ujm9TJybvgk15LFyGvNeJM5D22pHZvgFKhDM7zAWUjo0rSIcKcP43rM3rZEmR07lMUJ7mz1JxZ5eRb8iDoICUyB4tt1D1sdjvdPA51ZPzLxBy8a3oBJgXmYQSLXw2VRpBJIrWkKTcuy1%2FchXi2LP%2FJXlHZzPOMV0s&X-Amz-Signature=ef8d2abbf8ee3840071c779d53f32d06234f06d2a8a7343f210567acb56fb945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MHR57QI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIED3SYZfKczwqJ0xIaXnxPWYNPmLKxMYZc3Ds%2Btw7GzVAiAbPvyXoo5pnDocpwE7QOIqlCHfd9e%2FDz7%2BpQx0881yLyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrigT%2BVOJsi1GI1iUKtwDS4z7z9aEP8PBICfJ0KW7uFk8jhsusBi2KlyzH9YzonbShvsBjXFjedh%2Bvn6W2QyA3AKjr25XLm0Pso9tr%2BlUkPFNQZ19ZJ3%2F7mStP%2Fg0QXneXyS4cqd6PUnYIH29hJzTiAGlXb9mn%2BXSL8POGNIm%2FwlMUaW1zyuriKUi3JgpFknP8ErtUl0sQuJpGH8uOXcRsoDthVNj1T0Fyy%2FI6h1MqCv4J4%2FfmRN%2Bp1rFtTeZ8wn25HWmmV8kh1dZiGg7LyTNDX%2BpR0nvPuQ45gaP9pebU%2BM0kSCdnYoK5xIWZHFIFmOXzY2cQmpAcEyjFx6BxHMkk0oNmFhzOISxG2TaXfb8SC4Q3SFn%2BLJ380TK0bu9xSVHj8BNpZxM%2BCAJUNVpazffT5x2o2QbPy%2BzB8lTVlgkTR%2BanrvPl6uc3oeApBi3t6jb5NzMvuUptISoavgaQPVTPKL0M9cTgWWoKxuC4nBj6ZIe2DpqSKA5epGaS%2Fv5j97NO5Pq1HYoh6sAYKM%2FB8FLaXIDO8PihRluMiQV%2FczJmmB4wp%2FqjGpCpYBgISTkZKCkChuoskI4dA3wUXYCz8C9jEcGfob7%2BVQ%2B4mM9QOqM%2FluOihrnExDvJMqaKxRXU3hLsgXPGcsO2foD89Mw1fqzxAY6pgFNJmVPqNHTvoa6FdYfLIk6ZtxPNedAgnk73OD81f90iQO07KM%2F7FQElgaG736Ujm9TJybvgk15LFyGvNeJM5D22pHZvgFKhDM7zAWUjo0rSIcKcP43rM3rZEmR07lMUJ7mz1JxZ5eRb8iDoICUyB4tt1D1sdjvdPA51ZPzLxBy8a3oBJgXmYQSLXw2VRpBJIrWkKTcuy1%2FchXi2LP%2FJXlHZzPOMV0s&X-Amz-Signature=5efda7efd7e1b5d11fba1d9c22d13dc1a81e37a1946bf2891cc2df719bf9822b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MHR57QI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIED3SYZfKczwqJ0xIaXnxPWYNPmLKxMYZc3Ds%2Btw7GzVAiAbPvyXoo5pnDocpwE7QOIqlCHfd9e%2FDz7%2BpQx0881yLyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrigT%2BVOJsi1GI1iUKtwDS4z7z9aEP8PBICfJ0KW7uFk8jhsusBi2KlyzH9YzonbShvsBjXFjedh%2Bvn6W2QyA3AKjr25XLm0Pso9tr%2BlUkPFNQZ19ZJ3%2F7mStP%2Fg0QXneXyS4cqd6PUnYIH29hJzTiAGlXb9mn%2BXSL8POGNIm%2FwlMUaW1zyuriKUi3JgpFknP8ErtUl0sQuJpGH8uOXcRsoDthVNj1T0Fyy%2FI6h1MqCv4J4%2FfmRN%2Bp1rFtTeZ8wn25HWmmV8kh1dZiGg7LyTNDX%2BpR0nvPuQ45gaP9pebU%2BM0kSCdnYoK5xIWZHFIFmOXzY2cQmpAcEyjFx6BxHMkk0oNmFhzOISxG2TaXfb8SC4Q3SFn%2BLJ380TK0bu9xSVHj8BNpZxM%2BCAJUNVpazffT5x2o2QbPy%2BzB8lTVlgkTR%2BanrvPl6uc3oeApBi3t6jb5NzMvuUptISoavgaQPVTPKL0M9cTgWWoKxuC4nBj6ZIe2DpqSKA5epGaS%2Fv5j97NO5Pq1HYoh6sAYKM%2FB8FLaXIDO8PihRluMiQV%2FczJmmB4wp%2FqjGpCpYBgISTkZKCkChuoskI4dA3wUXYCz8C9jEcGfob7%2BVQ%2B4mM9QOqM%2FluOihrnExDvJMqaKxRXU3hLsgXPGcsO2foD89Mw1fqzxAY6pgFNJmVPqNHTvoa6FdYfLIk6ZtxPNedAgnk73OD81f90iQO07KM%2F7FQElgaG736Ujm9TJybvgk15LFyGvNeJM5D22pHZvgFKhDM7zAWUjo0rSIcKcP43rM3rZEmR07lMUJ7mz1JxZ5eRb8iDoICUyB4tt1D1sdjvdPA51ZPzLxBy8a3oBJgXmYQSLXw2VRpBJIrWkKTcuy1%2FchXi2LP%2FJXlHZzPOMV0s&X-Amz-Signature=5c3023bf79601c58953a27a77659a0614285b0d42d4f171454b5856ce7f35fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MHR57QI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIED3SYZfKczwqJ0xIaXnxPWYNPmLKxMYZc3Ds%2Btw7GzVAiAbPvyXoo5pnDocpwE7QOIqlCHfd9e%2FDz7%2BpQx0881yLyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrigT%2BVOJsi1GI1iUKtwDS4z7z9aEP8PBICfJ0KW7uFk8jhsusBi2KlyzH9YzonbShvsBjXFjedh%2Bvn6W2QyA3AKjr25XLm0Pso9tr%2BlUkPFNQZ19ZJ3%2F7mStP%2Fg0QXneXyS4cqd6PUnYIH29hJzTiAGlXb9mn%2BXSL8POGNIm%2FwlMUaW1zyuriKUi3JgpFknP8ErtUl0sQuJpGH8uOXcRsoDthVNj1T0Fyy%2FI6h1MqCv4J4%2FfmRN%2Bp1rFtTeZ8wn25HWmmV8kh1dZiGg7LyTNDX%2BpR0nvPuQ45gaP9pebU%2BM0kSCdnYoK5xIWZHFIFmOXzY2cQmpAcEyjFx6BxHMkk0oNmFhzOISxG2TaXfb8SC4Q3SFn%2BLJ380TK0bu9xSVHj8BNpZxM%2BCAJUNVpazffT5x2o2QbPy%2BzB8lTVlgkTR%2BanrvPl6uc3oeApBi3t6jb5NzMvuUptISoavgaQPVTPKL0M9cTgWWoKxuC4nBj6ZIe2DpqSKA5epGaS%2Fv5j97NO5Pq1HYoh6sAYKM%2FB8FLaXIDO8PihRluMiQV%2FczJmmB4wp%2FqjGpCpYBgISTkZKCkChuoskI4dA3wUXYCz8C9jEcGfob7%2BVQ%2B4mM9QOqM%2FluOihrnExDvJMqaKxRXU3hLsgXPGcsO2foD89Mw1fqzxAY6pgFNJmVPqNHTvoa6FdYfLIk6ZtxPNedAgnk73OD81f90iQO07KM%2F7FQElgaG736Ujm9TJybvgk15LFyGvNeJM5D22pHZvgFKhDM7zAWUjo0rSIcKcP43rM3rZEmR07lMUJ7mz1JxZ5eRb8iDoICUyB4tt1D1sdjvdPA51ZPzLxBy8a3oBJgXmYQSLXw2VRpBJIrWkKTcuy1%2FchXi2LP%2FJXlHZzPOMV0s&X-Amz-Signature=bbf3da1635072338669fc8f5554a7b6687ce5f233a9a596d03684423a1a139c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MHR57QI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIED3SYZfKczwqJ0xIaXnxPWYNPmLKxMYZc3Ds%2Btw7GzVAiAbPvyXoo5pnDocpwE7QOIqlCHfd9e%2FDz7%2BpQx0881yLyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrigT%2BVOJsi1GI1iUKtwDS4z7z9aEP8PBICfJ0KW7uFk8jhsusBi2KlyzH9YzonbShvsBjXFjedh%2Bvn6W2QyA3AKjr25XLm0Pso9tr%2BlUkPFNQZ19ZJ3%2F7mStP%2Fg0QXneXyS4cqd6PUnYIH29hJzTiAGlXb9mn%2BXSL8POGNIm%2FwlMUaW1zyuriKUi3JgpFknP8ErtUl0sQuJpGH8uOXcRsoDthVNj1T0Fyy%2FI6h1MqCv4J4%2FfmRN%2Bp1rFtTeZ8wn25HWmmV8kh1dZiGg7LyTNDX%2BpR0nvPuQ45gaP9pebU%2BM0kSCdnYoK5xIWZHFIFmOXzY2cQmpAcEyjFx6BxHMkk0oNmFhzOISxG2TaXfb8SC4Q3SFn%2BLJ380TK0bu9xSVHj8BNpZxM%2BCAJUNVpazffT5x2o2QbPy%2BzB8lTVlgkTR%2BanrvPl6uc3oeApBi3t6jb5NzMvuUptISoavgaQPVTPKL0M9cTgWWoKxuC4nBj6ZIe2DpqSKA5epGaS%2Fv5j97NO5Pq1HYoh6sAYKM%2FB8FLaXIDO8PihRluMiQV%2FczJmmB4wp%2FqjGpCpYBgISTkZKCkChuoskI4dA3wUXYCz8C9jEcGfob7%2BVQ%2B4mM9QOqM%2FluOihrnExDvJMqaKxRXU3hLsgXPGcsO2foD89Mw1fqzxAY6pgFNJmVPqNHTvoa6FdYfLIk6ZtxPNedAgnk73OD81f90iQO07KM%2F7FQElgaG736Ujm9TJybvgk15LFyGvNeJM5D22pHZvgFKhDM7zAWUjo0rSIcKcP43rM3rZEmR07lMUJ7mz1JxZ5eRb8iDoICUyB4tt1D1sdjvdPA51ZPzLxBy8a3oBJgXmYQSLXw2VRpBJIrWkKTcuy1%2FchXi2LP%2FJXlHZzPOMV0s&X-Amz-Signature=62ab0991b3b2ff8c9a1e777dd9f37acfba5c225990e269eb453746e49b2ff45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MHR57QI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIED3SYZfKczwqJ0xIaXnxPWYNPmLKxMYZc3Ds%2Btw7GzVAiAbPvyXoo5pnDocpwE7QOIqlCHfd9e%2FDz7%2BpQx0881yLyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrigT%2BVOJsi1GI1iUKtwDS4z7z9aEP8PBICfJ0KW7uFk8jhsusBi2KlyzH9YzonbShvsBjXFjedh%2Bvn6W2QyA3AKjr25XLm0Pso9tr%2BlUkPFNQZ19ZJ3%2F7mStP%2Fg0QXneXyS4cqd6PUnYIH29hJzTiAGlXb9mn%2BXSL8POGNIm%2FwlMUaW1zyuriKUi3JgpFknP8ErtUl0sQuJpGH8uOXcRsoDthVNj1T0Fyy%2FI6h1MqCv4J4%2FfmRN%2Bp1rFtTeZ8wn25HWmmV8kh1dZiGg7LyTNDX%2BpR0nvPuQ45gaP9pebU%2BM0kSCdnYoK5xIWZHFIFmOXzY2cQmpAcEyjFx6BxHMkk0oNmFhzOISxG2TaXfb8SC4Q3SFn%2BLJ380TK0bu9xSVHj8BNpZxM%2BCAJUNVpazffT5x2o2QbPy%2BzB8lTVlgkTR%2BanrvPl6uc3oeApBi3t6jb5NzMvuUptISoavgaQPVTPKL0M9cTgWWoKxuC4nBj6ZIe2DpqSKA5epGaS%2Fv5j97NO5Pq1HYoh6sAYKM%2FB8FLaXIDO8PihRluMiQV%2FczJmmB4wp%2FqjGpCpYBgISTkZKCkChuoskI4dA3wUXYCz8C9jEcGfob7%2BVQ%2B4mM9QOqM%2FluOihrnExDvJMqaKxRXU3hLsgXPGcsO2foD89Mw1fqzxAY6pgFNJmVPqNHTvoa6FdYfLIk6ZtxPNedAgnk73OD81f90iQO07KM%2F7FQElgaG736Ujm9TJybvgk15LFyGvNeJM5D22pHZvgFKhDM7zAWUjo0rSIcKcP43rM3rZEmR07lMUJ7mz1JxZ5eRb8iDoICUyB4tt1D1sdjvdPA51ZPzLxBy8a3oBJgXmYQSLXw2VRpBJIrWkKTcuy1%2FchXi2LP%2FJXlHZzPOMV0s&X-Amz-Signature=55f8b7f6ead2520a4ecc944a0f69803de8087bd3eff6a57b3bfa15ce9089e78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

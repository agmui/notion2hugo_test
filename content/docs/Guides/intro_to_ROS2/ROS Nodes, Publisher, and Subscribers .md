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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMQFS5A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2DQLOymywpMi9v7nKARnUb3UdIJ8wE%2BGfLqZOpzxe8AIgJLEG%2BFFXQmbzbaqvK%2FtY%2Bf50AHagwXD5VGZbI3P2Fk0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDP7MKZLzrEN7Fro3gSrcAzRONMdnmJPIsaWAGtdRBgJY3IjQtMVPqwgtNY9V1udmWNucCIv32Ly3O9bHb%2FC2Np4GCwUK7Qp9GUXJxLGdVLI75PCPTYj%2FvIdHE6E8XGWJQXqGyVrXkdi323qgiZv3OUGN3tUzIaD0%2FeEduP2pu%2BrU8AQ5xXDw5PH8pXg4d0a8Az8inm6OK7s6H7p3vKMGf6SbYS4zpyVNxsxHWpHfyHSPrdAOzzuZeD%2Bw6ZJPfhS4nNQxV2itS3EB79kU%2FWZ8NlxKG%2BOtq9Fe4tAozP5%2Bg8Hjqpg8m93UVmn1WcIll7yqw8f6sra8nUDEQf8BUOyxQLUtBCIs30AYdX8dmQ0pm%2FIFgKtrHsBRXu1qZsyY5cBY11DcyIOxbJaYoI5a9e5TnCV1%2FDeoB5bH%2BssH3vm10QljYGFopUw2P5BuHRCoTWvgD0Bq525T9XVo%2BL0N0JbF44XxigW7bG4bT%2BxJuR%2BD9VPSjF3FO5x%2Bj9u%2F7qTSKZVLYwKbY%2F0K4OwkaERWCD09oSDE9pNjCqz9OpwgIQkzpxpcSE6Mr7RaZt9%2BN3rVlNgEwhkM%2B%2FiAzEpfv30xvfb2vfG632Jo%2F49YM3xkFKOz5Ol8ndbeu2k4zBWe8cuFYgm9XP3eKWtO0pU71DWPMOXi8r8GOqUBWKgMHHEJWlzlKY5%2BEXSRPSv62RDgVuLiX74odTwwvENw58I1wo0n3jTPoUvyTl8Ob0MVBoD8%2B1RzDTLccsk3eDgCCSbGpJBe2MXOH0wEHX4r6TuHdwAEsCkXMWBoqm0EmpIIMA4H1JPuFGIi%2FRjLwnwymfo0JS4EyAEHGVozWNqwDPGLPdOzZdU%2FESnTayasiZ9TxzUQs01NEVbw6pVwv26%2B8sYW&X-Amz-Signature=353b81e4fe19cf1a2ffdb2dc97e5191c90bb50282a3e3c82c715fac16916c4e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMQFS5A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2DQLOymywpMi9v7nKARnUb3UdIJ8wE%2BGfLqZOpzxe8AIgJLEG%2BFFXQmbzbaqvK%2FtY%2Bf50AHagwXD5VGZbI3P2Fk0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDP7MKZLzrEN7Fro3gSrcAzRONMdnmJPIsaWAGtdRBgJY3IjQtMVPqwgtNY9V1udmWNucCIv32Ly3O9bHb%2FC2Np4GCwUK7Qp9GUXJxLGdVLI75PCPTYj%2FvIdHE6E8XGWJQXqGyVrXkdi323qgiZv3OUGN3tUzIaD0%2FeEduP2pu%2BrU8AQ5xXDw5PH8pXg4d0a8Az8inm6OK7s6H7p3vKMGf6SbYS4zpyVNxsxHWpHfyHSPrdAOzzuZeD%2Bw6ZJPfhS4nNQxV2itS3EB79kU%2FWZ8NlxKG%2BOtq9Fe4tAozP5%2Bg8Hjqpg8m93UVmn1WcIll7yqw8f6sra8nUDEQf8BUOyxQLUtBCIs30AYdX8dmQ0pm%2FIFgKtrHsBRXu1qZsyY5cBY11DcyIOxbJaYoI5a9e5TnCV1%2FDeoB5bH%2BssH3vm10QljYGFopUw2P5BuHRCoTWvgD0Bq525T9XVo%2BL0N0JbF44XxigW7bG4bT%2BxJuR%2BD9VPSjF3FO5x%2Bj9u%2F7qTSKZVLYwKbY%2F0K4OwkaERWCD09oSDE9pNjCqz9OpwgIQkzpxpcSE6Mr7RaZt9%2BN3rVlNgEwhkM%2B%2FiAzEpfv30xvfb2vfG632Jo%2F49YM3xkFKOz5Ol8ndbeu2k4zBWe8cuFYgm9XP3eKWtO0pU71DWPMOXi8r8GOqUBWKgMHHEJWlzlKY5%2BEXSRPSv62RDgVuLiX74odTwwvENw58I1wo0n3jTPoUvyTl8Ob0MVBoD8%2B1RzDTLccsk3eDgCCSbGpJBe2MXOH0wEHX4r6TuHdwAEsCkXMWBoqm0EmpIIMA4H1JPuFGIi%2FRjLwnwymfo0JS4EyAEHGVozWNqwDPGLPdOzZdU%2FESnTayasiZ9TxzUQs01NEVbw6pVwv26%2B8sYW&X-Amz-Signature=27eec46d648b4b75280169926ecbd07b9f8ce9ea81c63afebc7323615e3c7ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMQFS5A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2DQLOymywpMi9v7nKARnUb3UdIJ8wE%2BGfLqZOpzxe8AIgJLEG%2BFFXQmbzbaqvK%2FtY%2Bf50AHagwXD5VGZbI3P2Fk0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDP7MKZLzrEN7Fro3gSrcAzRONMdnmJPIsaWAGtdRBgJY3IjQtMVPqwgtNY9V1udmWNucCIv32Ly3O9bHb%2FC2Np4GCwUK7Qp9GUXJxLGdVLI75PCPTYj%2FvIdHE6E8XGWJQXqGyVrXkdi323qgiZv3OUGN3tUzIaD0%2FeEduP2pu%2BrU8AQ5xXDw5PH8pXg4d0a8Az8inm6OK7s6H7p3vKMGf6SbYS4zpyVNxsxHWpHfyHSPrdAOzzuZeD%2Bw6ZJPfhS4nNQxV2itS3EB79kU%2FWZ8NlxKG%2BOtq9Fe4tAozP5%2Bg8Hjqpg8m93UVmn1WcIll7yqw8f6sra8nUDEQf8BUOyxQLUtBCIs30AYdX8dmQ0pm%2FIFgKtrHsBRXu1qZsyY5cBY11DcyIOxbJaYoI5a9e5TnCV1%2FDeoB5bH%2BssH3vm10QljYGFopUw2P5BuHRCoTWvgD0Bq525T9XVo%2BL0N0JbF44XxigW7bG4bT%2BxJuR%2BD9VPSjF3FO5x%2Bj9u%2F7qTSKZVLYwKbY%2F0K4OwkaERWCD09oSDE9pNjCqz9OpwgIQkzpxpcSE6Mr7RaZt9%2BN3rVlNgEwhkM%2B%2FiAzEpfv30xvfb2vfG632Jo%2F49YM3xkFKOz5Ol8ndbeu2k4zBWe8cuFYgm9XP3eKWtO0pU71DWPMOXi8r8GOqUBWKgMHHEJWlzlKY5%2BEXSRPSv62RDgVuLiX74odTwwvENw58I1wo0n3jTPoUvyTl8Ob0MVBoD8%2B1RzDTLccsk3eDgCCSbGpJBe2MXOH0wEHX4r6TuHdwAEsCkXMWBoqm0EmpIIMA4H1JPuFGIi%2FRjLwnwymfo0JS4EyAEHGVozWNqwDPGLPdOzZdU%2FESnTayasiZ9TxzUQs01NEVbw6pVwv26%2B8sYW&X-Amz-Signature=09e8bd0d37a6c2e7637e2575ce91ac9961934bb45cb53fd4d82d266da25fe9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMQFS5A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2DQLOymywpMi9v7nKARnUb3UdIJ8wE%2BGfLqZOpzxe8AIgJLEG%2BFFXQmbzbaqvK%2FtY%2Bf50AHagwXD5VGZbI3P2Fk0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDP7MKZLzrEN7Fro3gSrcAzRONMdnmJPIsaWAGtdRBgJY3IjQtMVPqwgtNY9V1udmWNucCIv32Ly3O9bHb%2FC2Np4GCwUK7Qp9GUXJxLGdVLI75PCPTYj%2FvIdHE6E8XGWJQXqGyVrXkdi323qgiZv3OUGN3tUzIaD0%2FeEduP2pu%2BrU8AQ5xXDw5PH8pXg4d0a8Az8inm6OK7s6H7p3vKMGf6SbYS4zpyVNxsxHWpHfyHSPrdAOzzuZeD%2Bw6ZJPfhS4nNQxV2itS3EB79kU%2FWZ8NlxKG%2BOtq9Fe4tAozP5%2Bg8Hjqpg8m93UVmn1WcIll7yqw8f6sra8nUDEQf8BUOyxQLUtBCIs30AYdX8dmQ0pm%2FIFgKtrHsBRXu1qZsyY5cBY11DcyIOxbJaYoI5a9e5TnCV1%2FDeoB5bH%2BssH3vm10QljYGFopUw2P5BuHRCoTWvgD0Bq525T9XVo%2BL0N0JbF44XxigW7bG4bT%2BxJuR%2BD9VPSjF3FO5x%2Bj9u%2F7qTSKZVLYwKbY%2F0K4OwkaERWCD09oSDE9pNjCqz9OpwgIQkzpxpcSE6Mr7RaZt9%2BN3rVlNgEwhkM%2B%2FiAzEpfv30xvfb2vfG632Jo%2F49YM3xkFKOz5Ol8ndbeu2k4zBWe8cuFYgm9XP3eKWtO0pU71DWPMOXi8r8GOqUBWKgMHHEJWlzlKY5%2BEXSRPSv62RDgVuLiX74odTwwvENw58I1wo0n3jTPoUvyTl8Ob0MVBoD8%2B1RzDTLccsk3eDgCCSbGpJBe2MXOH0wEHX4r6TuHdwAEsCkXMWBoqm0EmpIIMA4H1JPuFGIi%2FRjLwnwymfo0JS4EyAEHGVozWNqwDPGLPdOzZdU%2FESnTayasiZ9TxzUQs01NEVbw6pVwv26%2B8sYW&X-Amz-Signature=19ba91865fbabd8608a4b954b033f986fdf70426c99a7bbe91c7f02d600df8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMQFS5A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2DQLOymywpMi9v7nKARnUb3UdIJ8wE%2BGfLqZOpzxe8AIgJLEG%2BFFXQmbzbaqvK%2FtY%2Bf50AHagwXD5VGZbI3P2Fk0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDP7MKZLzrEN7Fro3gSrcAzRONMdnmJPIsaWAGtdRBgJY3IjQtMVPqwgtNY9V1udmWNucCIv32Ly3O9bHb%2FC2Np4GCwUK7Qp9GUXJxLGdVLI75PCPTYj%2FvIdHE6E8XGWJQXqGyVrXkdi323qgiZv3OUGN3tUzIaD0%2FeEduP2pu%2BrU8AQ5xXDw5PH8pXg4d0a8Az8inm6OK7s6H7p3vKMGf6SbYS4zpyVNxsxHWpHfyHSPrdAOzzuZeD%2Bw6ZJPfhS4nNQxV2itS3EB79kU%2FWZ8NlxKG%2BOtq9Fe4tAozP5%2Bg8Hjqpg8m93UVmn1WcIll7yqw8f6sra8nUDEQf8BUOyxQLUtBCIs30AYdX8dmQ0pm%2FIFgKtrHsBRXu1qZsyY5cBY11DcyIOxbJaYoI5a9e5TnCV1%2FDeoB5bH%2BssH3vm10QljYGFopUw2P5BuHRCoTWvgD0Bq525T9XVo%2BL0N0JbF44XxigW7bG4bT%2BxJuR%2BD9VPSjF3FO5x%2Bj9u%2F7qTSKZVLYwKbY%2F0K4OwkaERWCD09oSDE9pNjCqz9OpwgIQkzpxpcSE6Mr7RaZt9%2BN3rVlNgEwhkM%2B%2FiAzEpfv30xvfb2vfG632Jo%2F49YM3xkFKOz5Ol8ndbeu2k4zBWe8cuFYgm9XP3eKWtO0pU71DWPMOXi8r8GOqUBWKgMHHEJWlzlKY5%2BEXSRPSv62RDgVuLiX74odTwwvENw58I1wo0n3jTPoUvyTl8Ob0MVBoD8%2B1RzDTLccsk3eDgCCSbGpJBe2MXOH0wEHX4r6TuHdwAEsCkXMWBoqm0EmpIIMA4H1JPuFGIi%2FRjLwnwymfo0JS4EyAEHGVozWNqwDPGLPdOzZdU%2FESnTayasiZ9TxzUQs01NEVbw6pVwv26%2B8sYW&X-Amz-Signature=e5e4b7e6e22779cc4f8d177d30d1768b9c3c8e4ea433993db3b0162d982003fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMQFS5A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2DQLOymywpMi9v7nKARnUb3UdIJ8wE%2BGfLqZOpzxe8AIgJLEG%2BFFXQmbzbaqvK%2FtY%2Bf50AHagwXD5VGZbI3P2Fk0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDP7MKZLzrEN7Fro3gSrcAzRONMdnmJPIsaWAGtdRBgJY3IjQtMVPqwgtNY9V1udmWNucCIv32Ly3O9bHb%2FC2Np4GCwUK7Qp9GUXJxLGdVLI75PCPTYj%2FvIdHE6E8XGWJQXqGyVrXkdi323qgiZv3OUGN3tUzIaD0%2FeEduP2pu%2BrU8AQ5xXDw5PH8pXg4d0a8Az8inm6OK7s6H7p3vKMGf6SbYS4zpyVNxsxHWpHfyHSPrdAOzzuZeD%2Bw6ZJPfhS4nNQxV2itS3EB79kU%2FWZ8NlxKG%2BOtq9Fe4tAozP5%2Bg8Hjqpg8m93UVmn1WcIll7yqw8f6sra8nUDEQf8BUOyxQLUtBCIs30AYdX8dmQ0pm%2FIFgKtrHsBRXu1qZsyY5cBY11DcyIOxbJaYoI5a9e5TnCV1%2FDeoB5bH%2BssH3vm10QljYGFopUw2P5BuHRCoTWvgD0Bq525T9XVo%2BL0N0JbF44XxigW7bG4bT%2BxJuR%2BD9VPSjF3FO5x%2Bj9u%2F7qTSKZVLYwKbY%2F0K4OwkaERWCD09oSDE9pNjCqz9OpwgIQkzpxpcSE6Mr7RaZt9%2BN3rVlNgEwhkM%2B%2FiAzEpfv30xvfb2vfG632Jo%2F49YM3xkFKOz5Ol8ndbeu2k4zBWe8cuFYgm9XP3eKWtO0pU71DWPMOXi8r8GOqUBWKgMHHEJWlzlKY5%2BEXSRPSv62RDgVuLiX74odTwwvENw58I1wo0n3jTPoUvyTl8Ob0MVBoD8%2B1RzDTLccsk3eDgCCSbGpJBe2MXOH0wEHX4r6TuHdwAEsCkXMWBoqm0EmpIIMA4H1JPuFGIi%2FRjLwnwymfo0JS4EyAEHGVozWNqwDPGLPdOzZdU%2FESnTayasiZ9TxzUQs01NEVbw6pVwv26%2B8sYW&X-Amz-Signature=f4738e8642b82dad5c949e47306734a0a18a969d168d341803393a68c7af0f82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMQFS5A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2DQLOymywpMi9v7nKARnUb3UdIJ8wE%2BGfLqZOpzxe8AIgJLEG%2BFFXQmbzbaqvK%2FtY%2Bf50AHagwXD5VGZbI3P2Fk0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDP7MKZLzrEN7Fro3gSrcAzRONMdnmJPIsaWAGtdRBgJY3IjQtMVPqwgtNY9V1udmWNucCIv32Ly3O9bHb%2FC2Np4GCwUK7Qp9GUXJxLGdVLI75PCPTYj%2FvIdHE6E8XGWJQXqGyVrXkdi323qgiZv3OUGN3tUzIaD0%2FeEduP2pu%2BrU8AQ5xXDw5PH8pXg4d0a8Az8inm6OK7s6H7p3vKMGf6SbYS4zpyVNxsxHWpHfyHSPrdAOzzuZeD%2Bw6ZJPfhS4nNQxV2itS3EB79kU%2FWZ8NlxKG%2BOtq9Fe4tAozP5%2Bg8Hjqpg8m93UVmn1WcIll7yqw8f6sra8nUDEQf8BUOyxQLUtBCIs30AYdX8dmQ0pm%2FIFgKtrHsBRXu1qZsyY5cBY11DcyIOxbJaYoI5a9e5TnCV1%2FDeoB5bH%2BssH3vm10QljYGFopUw2P5BuHRCoTWvgD0Bq525T9XVo%2BL0N0JbF44XxigW7bG4bT%2BxJuR%2BD9VPSjF3FO5x%2Bj9u%2F7qTSKZVLYwKbY%2F0K4OwkaERWCD09oSDE9pNjCqz9OpwgIQkzpxpcSE6Mr7RaZt9%2BN3rVlNgEwhkM%2B%2FiAzEpfv30xvfb2vfG632Jo%2F49YM3xkFKOz5Ol8ndbeu2k4zBWe8cuFYgm9XP3eKWtO0pU71DWPMOXi8r8GOqUBWKgMHHEJWlzlKY5%2BEXSRPSv62RDgVuLiX74odTwwvENw58I1wo0n3jTPoUvyTl8Ob0MVBoD8%2B1RzDTLccsk3eDgCCSbGpJBe2MXOH0wEHX4r6TuHdwAEsCkXMWBoqm0EmpIIMA4H1JPuFGIi%2FRjLwnwymfo0JS4EyAEHGVozWNqwDPGLPdOzZdU%2FESnTayasiZ9TxzUQs01NEVbw6pVwv26%2B8sYW&X-Amz-Signature=0fb5940696c77064fc91c355479d616928fd4f2e1da83f6dbe913024723963c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMQFS5A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2DQLOymywpMi9v7nKARnUb3UdIJ8wE%2BGfLqZOpzxe8AIgJLEG%2BFFXQmbzbaqvK%2FtY%2Bf50AHagwXD5VGZbI3P2Fk0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDP7MKZLzrEN7Fro3gSrcAzRONMdnmJPIsaWAGtdRBgJY3IjQtMVPqwgtNY9V1udmWNucCIv32Ly3O9bHb%2FC2Np4GCwUK7Qp9GUXJxLGdVLI75PCPTYj%2FvIdHE6E8XGWJQXqGyVrXkdi323qgiZv3OUGN3tUzIaD0%2FeEduP2pu%2BrU8AQ5xXDw5PH8pXg4d0a8Az8inm6OK7s6H7p3vKMGf6SbYS4zpyVNxsxHWpHfyHSPrdAOzzuZeD%2Bw6ZJPfhS4nNQxV2itS3EB79kU%2FWZ8NlxKG%2BOtq9Fe4tAozP5%2Bg8Hjqpg8m93UVmn1WcIll7yqw8f6sra8nUDEQf8BUOyxQLUtBCIs30AYdX8dmQ0pm%2FIFgKtrHsBRXu1qZsyY5cBY11DcyIOxbJaYoI5a9e5TnCV1%2FDeoB5bH%2BssH3vm10QljYGFopUw2P5BuHRCoTWvgD0Bq525T9XVo%2BL0N0JbF44XxigW7bG4bT%2BxJuR%2BD9VPSjF3FO5x%2Bj9u%2F7qTSKZVLYwKbY%2F0K4OwkaERWCD09oSDE9pNjCqz9OpwgIQkzpxpcSE6Mr7RaZt9%2BN3rVlNgEwhkM%2B%2FiAzEpfv30xvfb2vfG632Jo%2F49YM3xkFKOz5Ol8ndbeu2k4zBWe8cuFYgm9XP3eKWtO0pU71DWPMOXi8r8GOqUBWKgMHHEJWlzlKY5%2BEXSRPSv62RDgVuLiX74odTwwvENw58I1wo0n3jTPoUvyTl8Ob0MVBoD8%2B1RzDTLccsk3eDgCCSbGpJBe2MXOH0wEHX4r6TuHdwAEsCkXMWBoqm0EmpIIMA4H1JPuFGIi%2FRjLwnwymfo0JS4EyAEHGVozWNqwDPGLPdOzZdU%2FESnTayasiZ9TxzUQs01NEVbw6pVwv26%2B8sYW&X-Amz-Signature=3ed825e7b70941bcffe9783fb5f8ab1cf783cefe6982a7c80ccd5af87b9a5a16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

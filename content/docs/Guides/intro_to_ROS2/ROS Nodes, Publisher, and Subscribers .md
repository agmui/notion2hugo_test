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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCZ7R22W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUsPPLDH7V9iXHEGvM37pMWRSm9j3XYlApXhWEYhv79AiEAkvSBT1Tv0xR98S2FDqYA%2Bk0V47Rq%2Fm3VkWmm8%2FKX8poqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhfob4u9Gsu7HygvSrcA3akdxqDfvsyi4yOPC1uj5%2F6m1Y6CLI7xpI1KYC1FImeRZVY5EXOkayncAPZaN%2FqO5%2B%2FylIPGst%2FaUtLalJco1au%2BpE8zmH3kHdwFQIxJTqaeAMPlRttfH3G5H7ddzEFsxo5560rQqn%2BQrV3gpxWCbTQXf%2FcwReqdGvSxdSEujSFvpCKjv5wqaIbtxz2mbrWwkvOZmcHF60mmERbECLYX77%2FaT1YCYjJL5xGLfj82iQ%2Fky65DD%2Flobq8kerFmt5RJg0TsPQdNVtb66slHDLWoGhSVI3bkxUS5lQ2ffi%2FcTrhRxXPj6h1rU3tFBIkhicroK1Jzv4UEo8ykxGL7PpP7K66Kd8P1V4WpvHExfSqhVE5TOdKvm0bUmC%2BOP7gw7wr79pvUm9ucKWeNxiyrG8ylcmRRus3ddS2azlOLul%2BHbBMG%2FuoNWXE9VMIU0bb6mgYRpT3VzA1ai8SbBPxSkfvOr5%2FSk9%2BQciiJrO0lB%2Fh2IqEGBM%2BxFttjnjNImB9BMUhBayvTZXvKeqkoPn%2B69pl%2FVgo4CJ%2Fit93D074wWkU7iXXWmozlt0gQk4wKo%2B3P%2Br1JN%2B%2FpRDnbDaDTlxebOFL1%2Bxf9fBWbAa%2FEhi2OyWLUB43C6BPRomCCcuUu0CnMPmXusMGOqUBzbKC8b2FNWLYpIq39lztz5AfpV9ShgPKZskssZxSOS2MiNv3futabY82oWZNE18uL53BqPlHEiOhk1bMAlm2QXg9d7GHr3rM52ZO2%2BLZlwh44f1b1C2eWnVu1i%2BLaRW4fSPNGt5i1PMt64y6SKojwCnthwlQk6JFE%2FgHHNoqYbMUgngSOBoXvz49DwSXptXEGPnNRS1ABh78YHBcSs%2BRyh7zsFsI&X-Amz-Signature=80442609ac7d1356318015eca0f818a31b4756e57e26f54a1cc28f039feb6aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCZ7R22W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUsPPLDH7V9iXHEGvM37pMWRSm9j3XYlApXhWEYhv79AiEAkvSBT1Tv0xR98S2FDqYA%2Bk0V47Rq%2Fm3VkWmm8%2FKX8poqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhfob4u9Gsu7HygvSrcA3akdxqDfvsyi4yOPC1uj5%2F6m1Y6CLI7xpI1KYC1FImeRZVY5EXOkayncAPZaN%2FqO5%2B%2FylIPGst%2FaUtLalJco1au%2BpE8zmH3kHdwFQIxJTqaeAMPlRttfH3G5H7ddzEFsxo5560rQqn%2BQrV3gpxWCbTQXf%2FcwReqdGvSxdSEujSFvpCKjv5wqaIbtxz2mbrWwkvOZmcHF60mmERbECLYX77%2FaT1YCYjJL5xGLfj82iQ%2Fky65DD%2Flobq8kerFmt5RJg0TsPQdNVtb66slHDLWoGhSVI3bkxUS5lQ2ffi%2FcTrhRxXPj6h1rU3tFBIkhicroK1Jzv4UEo8ykxGL7PpP7K66Kd8P1V4WpvHExfSqhVE5TOdKvm0bUmC%2BOP7gw7wr79pvUm9ucKWeNxiyrG8ylcmRRus3ddS2azlOLul%2BHbBMG%2FuoNWXE9VMIU0bb6mgYRpT3VzA1ai8SbBPxSkfvOr5%2FSk9%2BQciiJrO0lB%2Fh2IqEGBM%2BxFttjnjNImB9BMUhBayvTZXvKeqkoPn%2B69pl%2FVgo4CJ%2Fit93D074wWkU7iXXWmozlt0gQk4wKo%2B3P%2Br1JN%2B%2FpRDnbDaDTlxebOFL1%2Bxf9fBWbAa%2FEhi2OyWLUB43C6BPRomCCcuUu0CnMPmXusMGOqUBzbKC8b2FNWLYpIq39lztz5AfpV9ShgPKZskssZxSOS2MiNv3futabY82oWZNE18uL53BqPlHEiOhk1bMAlm2QXg9d7GHr3rM52ZO2%2BLZlwh44f1b1C2eWnVu1i%2BLaRW4fSPNGt5i1PMt64y6SKojwCnthwlQk6JFE%2FgHHNoqYbMUgngSOBoXvz49DwSXptXEGPnNRS1ABh78YHBcSs%2BRyh7zsFsI&X-Amz-Signature=f254bc67b07db3e59a1ff0b39da443c14aecbb91b83220e1259086e1eeaf3d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCZ7R22W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUsPPLDH7V9iXHEGvM37pMWRSm9j3XYlApXhWEYhv79AiEAkvSBT1Tv0xR98S2FDqYA%2Bk0V47Rq%2Fm3VkWmm8%2FKX8poqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhfob4u9Gsu7HygvSrcA3akdxqDfvsyi4yOPC1uj5%2F6m1Y6CLI7xpI1KYC1FImeRZVY5EXOkayncAPZaN%2FqO5%2B%2FylIPGst%2FaUtLalJco1au%2BpE8zmH3kHdwFQIxJTqaeAMPlRttfH3G5H7ddzEFsxo5560rQqn%2BQrV3gpxWCbTQXf%2FcwReqdGvSxdSEujSFvpCKjv5wqaIbtxz2mbrWwkvOZmcHF60mmERbECLYX77%2FaT1YCYjJL5xGLfj82iQ%2Fky65DD%2Flobq8kerFmt5RJg0TsPQdNVtb66slHDLWoGhSVI3bkxUS5lQ2ffi%2FcTrhRxXPj6h1rU3tFBIkhicroK1Jzv4UEo8ykxGL7PpP7K66Kd8P1V4WpvHExfSqhVE5TOdKvm0bUmC%2BOP7gw7wr79pvUm9ucKWeNxiyrG8ylcmRRus3ddS2azlOLul%2BHbBMG%2FuoNWXE9VMIU0bb6mgYRpT3VzA1ai8SbBPxSkfvOr5%2FSk9%2BQciiJrO0lB%2Fh2IqEGBM%2BxFttjnjNImB9BMUhBayvTZXvKeqkoPn%2B69pl%2FVgo4CJ%2Fit93D074wWkU7iXXWmozlt0gQk4wKo%2B3P%2Br1JN%2B%2FpRDnbDaDTlxebOFL1%2Bxf9fBWbAa%2FEhi2OyWLUB43C6BPRomCCcuUu0CnMPmXusMGOqUBzbKC8b2FNWLYpIq39lztz5AfpV9ShgPKZskssZxSOS2MiNv3futabY82oWZNE18uL53BqPlHEiOhk1bMAlm2QXg9d7GHr3rM52ZO2%2BLZlwh44f1b1C2eWnVu1i%2BLaRW4fSPNGt5i1PMt64y6SKojwCnthwlQk6JFE%2FgHHNoqYbMUgngSOBoXvz49DwSXptXEGPnNRS1ABh78YHBcSs%2BRyh7zsFsI&X-Amz-Signature=72fa2409585da3e81699006714376fcf7ccbf0aaba41ea3e94f6cf174907d096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCZ7R22W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUsPPLDH7V9iXHEGvM37pMWRSm9j3XYlApXhWEYhv79AiEAkvSBT1Tv0xR98S2FDqYA%2Bk0V47Rq%2Fm3VkWmm8%2FKX8poqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhfob4u9Gsu7HygvSrcA3akdxqDfvsyi4yOPC1uj5%2F6m1Y6CLI7xpI1KYC1FImeRZVY5EXOkayncAPZaN%2FqO5%2B%2FylIPGst%2FaUtLalJco1au%2BpE8zmH3kHdwFQIxJTqaeAMPlRttfH3G5H7ddzEFsxo5560rQqn%2BQrV3gpxWCbTQXf%2FcwReqdGvSxdSEujSFvpCKjv5wqaIbtxz2mbrWwkvOZmcHF60mmERbECLYX77%2FaT1YCYjJL5xGLfj82iQ%2Fky65DD%2Flobq8kerFmt5RJg0TsPQdNVtb66slHDLWoGhSVI3bkxUS5lQ2ffi%2FcTrhRxXPj6h1rU3tFBIkhicroK1Jzv4UEo8ykxGL7PpP7K66Kd8P1V4WpvHExfSqhVE5TOdKvm0bUmC%2BOP7gw7wr79pvUm9ucKWeNxiyrG8ylcmRRus3ddS2azlOLul%2BHbBMG%2FuoNWXE9VMIU0bb6mgYRpT3VzA1ai8SbBPxSkfvOr5%2FSk9%2BQciiJrO0lB%2Fh2IqEGBM%2BxFttjnjNImB9BMUhBayvTZXvKeqkoPn%2B69pl%2FVgo4CJ%2Fit93D074wWkU7iXXWmozlt0gQk4wKo%2B3P%2Br1JN%2B%2FpRDnbDaDTlxebOFL1%2Bxf9fBWbAa%2FEhi2OyWLUB43C6BPRomCCcuUu0CnMPmXusMGOqUBzbKC8b2FNWLYpIq39lztz5AfpV9ShgPKZskssZxSOS2MiNv3futabY82oWZNE18uL53BqPlHEiOhk1bMAlm2QXg9d7GHr3rM52ZO2%2BLZlwh44f1b1C2eWnVu1i%2BLaRW4fSPNGt5i1PMt64y6SKojwCnthwlQk6JFE%2FgHHNoqYbMUgngSOBoXvz49DwSXptXEGPnNRS1ABh78YHBcSs%2BRyh7zsFsI&X-Amz-Signature=250af4e00dc1b3cf7579f5ec503710f443ced5f6173b75b9d0617837ee6727f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCZ7R22W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUsPPLDH7V9iXHEGvM37pMWRSm9j3XYlApXhWEYhv79AiEAkvSBT1Tv0xR98S2FDqYA%2Bk0V47Rq%2Fm3VkWmm8%2FKX8poqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhfob4u9Gsu7HygvSrcA3akdxqDfvsyi4yOPC1uj5%2F6m1Y6CLI7xpI1KYC1FImeRZVY5EXOkayncAPZaN%2FqO5%2B%2FylIPGst%2FaUtLalJco1au%2BpE8zmH3kHdwFQIxJTqaeAMPlRttfH3G5H7ddzEFsxo5560rQqn%2BQrV3gpxWCbTQXf%2FcwReqdGvSxdSEujSFvpCKjv5wqaIbtxz2mbrWwkvOZmcHF60mmERbECLYX77%2FaT1YCYjJL5xGLfj82iQ%2Fky65DD%2Flobq8kerFmt5RJg0TsPQdNVtb66slHDLWoGhSVI3bkxUS5lQ2ffi%2FcTrhRxXPj6h1rU3tFBIkhicroK1Jzv4UEo8ykxGL7PpP7K66Kd8P1V4WpvHExfSqhVE5TOdKvm0bUmC%2BOP7gw7wr79pvUm9ucKWeNxiyrG8ylcmRRus3ddS2azlOLul%2BHbBMG%2FuoNWXE9VMIU0bb6mgYRpT3VzA1ai8SbBPxSkfvOr5%2FSk9%2BQciiJrO0lB%2Fh2IqEGBM%2BxFttjnjNImB9BMUhBayvTZXvKeqkoPn%2B69pl%2FVgo4CJ%2Fit93D074wWkU7iXXWmozlt0gQk4wKo%2B3P%2Br1JN%2B%2FpRDnbDaDTlxebOFL1%2Bxf9fBWbAa%2FEhi2OyWLUB43C6BPRomCCcuUu0CnMPmXusMGOqUBzbKC8b2FNWLYpIq39lztz5AfpV9ShgPKZskssZxSOS2MiNv3futabY82oWZNE18uL53BqPlHEiOhk1bMAlm2QXg9d7GHr3rM52ZO2%2BLZlwh44f1b1C2eWnVu1i%2BLaRW4fSPNGt5i1PMt64y6SKojwCnthwlQk6JFE%2FgHHNoqYbMUgngSOBoXvz49DwSXptXEGPnNRS1ABh78YHBcSs%2BRyh7zsFsI&X-Amz-Signature=b93177aed032640d8fe5b9b18c273cae8a215a489d2e21eaf215042929dc55a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCZ7R22W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUsPPLDH7V9iXHEGvM37pMWRSm9j3XYlApXhWEYhv79AiEAkvSBT1Tv0xR98S2FDqYA%2Bk0V47Rq%2Fm3VkWmm8%2FKX8poqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhfob4u9Gsu7HygvSrcA3akdxqDfvsyi4yOPC1uj5%2F6m1Y6CLI7xpI1KYC1FImeRZVY5EXOkayncAPZaN%2FqO5%2B%2FylIPGst%2FaUtLalJco1au%2BpE8zmH3kHdwFQIxJTqaeAMPlRttfH3G5H7ddzEFsxo5560rQqn%2BQrV3gpxWCbTQXf%2FcwReqdGvSxdSEujSFvpCKjv5wqaIbtxz2mbrWwkvOZmcHF60mmERbECLYX77%2FaT1YCYjJL5xGLfj82iQ%2Fky65DD%2Flobq8kerFmt5RJg0TsPQdNVtb66slHDLWoGhSVI3bkxUS5lQ2ffi%2FcTrhRxXPj6h1rU3tFBIkhicroK1Jzv4UEo8ykxGL7PpP7K66Kd8P1V4WpvHExfSqhVE5TOdKvm0bUmC%2BOP7gw7wr79pvUm9ucKWeNxiyrG8ylcmRRus3ddS2azlOLul%2BHbBMG%2FuoNWXE9VMIU0bb6mgYRpT3VzA1ai8SbBPxSkfvOr5%2FSk9%2BQciiJrO0lB%2Fh2IqEGBM%2BxFttjnjNImB9BMUhBayvTZXvKeqkoPn%2B69pl%2FVgo4CJ%2Fit93D074wWkU7iXXWmozlt0gQk4wKo%2B3P%2Br1JN%2B%2FpRDnbDaDTlxebOFL1%2Bxf9fBWbAa%2FEhi2OyWLUB43C6BPRomCCcuUu0CnMPmXusMGOqUBzbKC8b2FNWLYpIq39lztz5AfpV9ShgPKZskssZxSOS2MiNv3futabY82oWZNE18uL53BqPlHEiOhk1bMAlm2QXg9d7GHr3rM52ZO2%2BLZlwh44f1b1C2eWnVu1i%2BLaRW4fSPNGt5i1PMt64y6SKojwCnthwlQk6JFE%2FgHHNoqYbMUgngSOBoXvz49DwSXptXEGPnNRS1ABh78YHBcSs%2BRyh7zsFsI&X-Amz-Signature=5d0673c0ac021a2f6b76fdc0ffdd362aa004873d48bfa02dc797cebb438f0d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCZ7R22W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUsPPLDH7V9iXHEGvM37pMWRSm9j3XYlApXhWEYhv79AiEAkvSBT1Tv0xR98S2FDqYA%2Bk0V47Rq%2Fm3VkWmm8%2FKX8poqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhfob4u9Gsu7HygvSrcA3akdxqDfvsyi4yOPC1uj5%2F6m1Y6CLI7xpI1KYC1FImeRZVY5EXOkayncAPZaN%2FqO5%2B%2FylIPGst%2FaUtLalJco1au%2BpE8zmH3kHdwFQIxJTqaeAMPlRttfH3G5H7ddzEFsxo5560rQqn%2BQrV3gpxWCbTQXf%2FcwReqdGvSxdSEujSFvpCKjv5wqaIbtxz2mbrWwkvOZmcHF60mmERbECLYX77%2FaT1YCYjJL5xGLfj82iQ%2Fky65DD%2Flobq8kerFmt5RJg0TsPQdNVtb66slHDLWoGhSVI3bkxUS5lQ2ffi%2FcTrhRxXPj6h1rU3tFBIkhicroK1Jzv4UEo8ykxGL7PpP7K66Kd8P1V4WpvHExfSqhVE5TOdKvm0bUmC%2BOP7gw7wr79pvUm9ucKWeNxiyrG8ylcmRRus3ddS2azlOLul%2BHbBMG%2FuoNWXE9VMIU0bb6mgYRpT3VzA1ai8SbBPxSkfvOr5%2FSk9%2BQciiJrO0lB%2Fh2IqEGBM%2BxFttjnjNImB9BMUhBayvTZXvKeqkoPn%2B69pl%2FVgo4CJ%2Fit93D074wWkU7iXXWmozlt0gQk4wKo%2B3P%2Br1JN%2B%2FpRDnbDaDTlxebOFL1%2Bxf9fBWbAa%2FEhi2OyWLUB43C6BPRomCCcuUu0CnMPmXusMGOqUBzbKC8b2FNWLYpIq39lztz5AfpV9ShgPKZskssZxSOS2MiNv3futabY82oWZNE18uL53BqPlHEiOhk1bMAlm2QXg9d7GHr3rM52ZO2%2BLZlwh44f1b1C2eWnVu1i%2BLaRW4fSPNGt5i1PMt64y6SKojwCnthwlQk6JFE%2FgHHNoqYbMUgngSOBoXvz49DwSXptXEGPnNRS1ABh78YHBcSs%2BRyh7zsFsI&X-Amz-Signature=6e600cb08ad8ddf2408b8fecc034a0a4ee0013516953fdd57291515b4b6c4325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCZ7R22W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUsPPLDH7V9iXHEGvM37pMWRSm9j3XYlApXhWEYhv79AiEAkvSBT1Tv0xR98S2FDqYA%2Bk0V47Rq%2Fm3VkWmm8%2FKX8poqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhfob4u9Gsu7HygvSrcA3akdxqDfvsyi4yOPC1uj5%2F6m1Y6CLI7xpI1KYC1FImeRZVY5EXOkayncAPZaN%2FqO5%2B%2FylIPGst%2FaUtLalJco1au%2BpE8zmH3kHdwFQIxJTqaeAMPlRttfH3G5H7ddzEFsxo5560rQqn%2BQrV3gpxWCbTQXf%2FcwReqdGvSxdSEujSFvpCKjv5wqaIbtxz2mbrWwkvOZmcHF60mmERbECLYX77%2FaT1YCYjJL5xGLfj82iQ%2Fky65DD%2Flobq8kerFmt5RJg0TsPQdNVtb66slHDLWoGhSVI3bkxUS5lQ2ffi%2FcTrhRxXPj6h1rU3tFBIkhicroK1Jzv4UEo8ykxGL7PpP7K66Kd8P1V4WpvHExfSqhVE5TOdKvm0bUmC%2BOP7gw7wr79pvUm9ucKWeNxiyrG8ylcmRRus3ddS2azlOLul%2BHbBMG%2FuoNWXE9VMIU0bb6mgYRpT3VzA1ai8SbBPxSkfvOr5%2FSk9%2BQciiJrO0lB%2Fh2IqEGBM%2BxFttjnjNImB9BMUhBayvTZXvKeqkoPn%2B69pl%2FVgo4CJ%2Fit93D074wWkU7iXXWmozlt0gQk4wKo%2B3P%2Br1JN%2B%2FpRDnbDaDTlxebOFL1%2Bxf9fBWbAa%2FEhi2OyWLUB43C6BPRomCCcuUu0CnMPmXusMGOqUBzbKC8b2FNWLYpIq39lztz5AfpV9ShgPKZskssZxSOS2MiNv3futabY82oWZNE18uL53BqPlHEiOhk1bMAlm2QXg9d7GHr3rM52ZO2%2BLZlwh44f1b1C2eWnVu1i%2BLaRW4fSPNGt5i1PMt64y6SKojwCnthwlQk6JFE%2FgHHNoqYbMUgngSOBoXvz49DwSXptXEGPnNRS1ABh78YHBcSs%2BRyh7zsFsI&X-Amz-Signature=8e6a53f59bbde8358d64415f591e7117cdafa7c69ae6f0568548ef18ba504f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

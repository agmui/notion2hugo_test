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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFQTZKU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsw4mpSvrHySDY%2FNAwSxV1J4t1Y6T5uocjPNII2Z0euAiEAsY2S3oc6GC995S4xWyDRCLTGNGbLRReMyk0Ou1NaWFoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2MSzhmJkCQ1uxeSrcA4mucIhHeQcNT%2FA8ppvN%2F5FSdb0beMgsTiCCGhi6ocntr1tmpD6i4gnq1QJpurkSR5K%2F7QHRVLjxxcP9mQ1Ayx94TmT4fOfjV3188dh10w4fFbN5jUW63qmDkvUaU2OnxrYdQmvJ%2BJWj0JrxGQcp5nxSZpxj5%2FBfjRvcwnZat5EzAicIDl5vYwrM639n2ILYIyiTl3ibvdmazDRvlXLZc5zujTTr3ddBctPDQfQXUWgZgN4J2F%2B7ELqJRo1HjbdHiU%2Ffm6AwKVbEZ5IQZEcqKPYi2F5vcJRHQWkRbBSgcZ087X%2BPsXUl2XcWto94rClQA%2F%2Fb1Y6BL7x0ZJ%2F7JyQBnGbm5kCM7q4JYUAuDZHT7X15psSG1kEbKD7sCfYDPXAbGIxoaGBLNoeqs7pQEDOh4bz3DarJn%2B76qltOaxC6xEu3ztVW8DTa5Q0ZmZb7WIJidaHfUHOT5pBYMajZ1ekfde%2By06BORIcO0daqkmGoC9BItpPW1qpcR2xVfvVzPXelxujzL6odyRd%2Bkc9XNNWtd7DhxKY12RQGVS2CjF2rLVYVJ8V36Vm8UXpLGSXVNKHvR%2F2krXkHFuaLgaYVCz9tdcKkRJP5d%2BSC0x5YBkPzwUD9oAAA79%2F1pqWi4hS%2FMPezlsIGOqUBU32tkm1cWV3XWAwqPQ0znpGD9B7AydhjHVdhTsiCeVloD5gTecLsSSaxFoJXnZHION7Z5ML5njBFd2xsSiv268huYAswpmrfnpNum1dxzMHzteFdx5LDciBmajKmNvFtfJ1%2FffETaSMyZgSqEK3heWe9pZ9BsSGXbVGRiR1p2gi7mm4eWt9zbe%2BwRVsZKvGUzg1leGQo8A8P5Yim0blRh%2FVA5ro6&X-Amz-Signature=1ca30dfafd8dc221ded7f365fce5dc65bc9a3d84a89247cd4d94bdbcc8acbf82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFQTZKU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsw4mpSvrHySDY%2FNAwSxV1J4t1Y6T5uocjPNII2Z0euAiEAsY2S3oc6GC995S4xWyDRCLTGNGbLRReMyk0Ou1NaWFoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2MSzhmJkCQ1uxeSrcA4mucIhHeQcNT%2FA8ppvN%2F5FSdb0beMgsTiCCGhi6ocntr1tmpD6i4gnq1QJpurkSR5K%2F7QHRVLjxxcP9mQ1Ayx94TmT4fOfjV3188dh10w4fFbN5jUW63qmDkvUaU2OnxrYdQmvJ%2BJWj0JrxGQcp5nxSZpxj5%2FBfjRvcwnZat5EzAicIDl5vYwrM639n2ILYIyiTl3ibvdmazDRvlXLZc5zujTTr3ddBctPDQfQXUWgZgN4J2F%2B7ELqJRo1HjbdHiU%2Ffm6AwKVbEZ5IQZEcqKPYi2F5vcJRHQWkRbBSgcZ087X%2BPsXUl2XcWto94rClQA%2F%2Fb1Y6BL7x0ZJ%2F7JyQBnGbm5kCM7q4JYUAuDZHT7X15psSG1kEbKD7sCfYDPXAbGIxoaGBLNoeqs7pQEDOh4bz3DarJn%2B76qltOaxC6xEu3ztVW8DTa5Q0ZmZb7WIJidaHfUHOT5pBYMajZ1ekfde%2By06BORIcO0daqkmGoC9BItpPW1qpcR2xVfvVzPXelxujzL6odyRd%2Bkc9XNNWtd7DhxKY12RQGVS2CjF2rLVYVJ8V36Vm8UXpLGSXVNKHvR%2F2krXkHFuaLgaYVCz9tdcKkRJP5d%2BSC0x5YBkPzwUD9oAAA79%2F1pqWi4hS%2FMPezlsIGOqUBU32tkm1cWV3XWAwqPQ0znpGD9B7AydhjHVdhTsiCeVloD5gTecLsSSaxFoJXnZHION7Z5ML5njBFd2xsSiv268huYAswpmrfnpNum1dxzMHzteFdx5LDciBmajKmNvFtfJ1%2FffETaSMyZgSqEK3heWe9pZ9BsSGXbVGRiR1p2gi7mm4eWt9zbe%2BwRVsZKvGUzg1leGQo8A8P5Yim0blRh%2FVA5ro6&X-Amz-Signature=2dac812c45042f55c7aa4fa51e422f770f2f5c5973c7aa87f96359db1c8efe70&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFQTZKU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsw4mpSvrHySDY%2FNAwSxV1J4t1Y6T5uocjPNII2Z0euAiEAsY2S3oc6GC995S4xWyDRCLTGNGbLRReMyk0Ou1NaWFoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2MSzhmJkCQ1uxeSrcA4mucIhHeQcNT%2FA8ppvN%2F5FSdb0beMgsTiCCGhi6ocntr1tmpD6i4gnq1QJpurkSR5K%2F7QHRVLjxxcP9mQ1Ayx94TmT4fOfjV3188dh10w4fFbN5jUW63qmDkvUaU2OnxrYdQmvJ%2BJWj0JrxGQcp5nxSZpxj5%2FBfjRvcwnZat5EzAicIDl5vYwrM639n2ILYIyiTl3ibvdmazDRvlXLZc5zujTTr3ddBctPDQfQXUWgZgN4J2F%2B7ELqJRo1HjbdHiU%2Ffm6AwKVbEZ5IQZEcqKPYi2F5vcJRHQWkRbBSgcZ087X%2BPsXUl2XcWto94rClQA%2F%2Fb1Y6BL7x0ZJ%2F7JyQBnGbm5kCM7q4JYUAuDZHT7X15psSG1kEbKD7sCfYDPXAbGIxoaGBLNoeqs7pQEDOh4bz3DarJn%2B76qltOaxC6xEu3ztVW8DTa5Q0ZmZb7WIJidaHfUHOT5pBYMajZ1ekfde%2By06BORIcO0daqkmGoC9BItpPW1qpcR2xVfvVzPXelxujzL6odyRd%2Bkc9XNNWtd7DhxKY12RQGVS2CjF2rLVYVJ8V36Vm8UXpLGSXVNKHvR%2F2krXkHFuaLgaYVCz9tdcKkRJP5d%2BSC0x5YBkPzwUD9oAAA79%2F1pqWi4hS%2FMPezlsIGOqUBU32tkm1cWV3XWAwqPQ0znpGD9B7AydhjHVdhTsiCeVloD5gTecLsSSaxFoJXnZHION7Z5ML5njBFd2xsSiv268huYAswpmrfnpNum1dxzMHzteFdx5LDciBmajKmNvFtfJ1%2FffETaSMyZgSqEK3heWe9pZ9BsSGXbVGRiR1p2gi7mm4eWt9zbe%2BwRVsZKvGUzg1leGQo8A8P5Yim0blRh%2FVA5ro6&X-Amz-Signature=44d57a918ae45493aded6b5f85262c35cc737fed40d9a55b4115a9fb9ed2f6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFQTZKU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsw4mpSvrHySDY%2FNAwSxV1J4t1Y6T5uocjPNII2Z0euAiEAsY2S3oc6GC995S4xWyDRCLTGNGbLRReMyk0Ou1NaWFoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2MSzhmJkCQ1uxeSrcA4mucIhHeQcNT%2FA8ppvN%2F5FSdb0beMgsTiCCGhi6ocntr1tmpD6i4gnq1QJpurkSR5K%2F7QHRVLjxxcP9mQ1Ayx94TmT4fOfjV3188dh10w4fFbN5jUW63qmDkvUaU2OnxrYdQmvJ%2BJWj0JrxGQcp5nxSZpxj5%2FBfjRvcwnZat5EzAicIDl5vYwrM639n2ILYIyiTl3ibvdmazDRvlXLZc5zujTTr3ddBctPDQfQXUWgZgN4J2F%2B7ELqJRo1HjbdHiU%2Ffm6AwKVbEZ5IQZEcqKPYi2F5vcJRHQWkRbBSgcZ087X%2BPsXUl2XcWto94rClQA%2F%2Fb1Y6BL7x0ZJ%2F7JyQBnGbm5kCM7q4JYUAuDZHT7X15psSG1kEbKD7sCfYDPXAbGIxoaGBLNoeqs7pQEDOh4bz3DarJn%2B76qltOaxC6xEu3ztVW8DTa5Q0ZmZb7WIJidaHfUHOT5pBYMajZ1ekfde%2By06BORIcO0daqkmGoC9BItpPW1qpcR2xVfvVzPXelxujzL6odyRd%2Bkc9XNNWtd7DhxKY12RQGVS2CjF2rLVYVJ8V36Vm8UXpLGSXVNKHvR%2F2krXkHFuaLgaYVCz9tdcKkRJP5d%2BSC0x5YBkPzwUD9oAAA79%2F1pqWi4hS%2FMPezlsIGOqUBU32tkm1cWV3XWAwqPQ0znpGD9B7AydhjHVdhTsiCeVloD5gTecLsSSaxFoJXnZHION7Z5ML5njBFd2xsSiv268huYAswpmrfnpNum1dxzMHzteFdx5LDciBmajKmNvFtfJ1%2FffETaSMyZgSqEK3heWe9pZ9BsSGXbVGRiR1p2gi7mm4eWt9zbe%2BwRVsZKvGUzg1leGQo8A8P5Yim0blRh%2FVA5ro6&X-Amz-Signature=b32b556533372125b6cd608d1ea6c2af774e6ebac02973c13e44761463852bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFQTZKU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsw4mpSvrHySDY%2FNAwSxV1J4t1Y6T5uocjPNII2Z0euAiEAsY2S3oc6GC995S4xWyDRCLTGNGbLRReMyk0Ou1NaWFoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2MSzhmJkCQ1uxeSrcA4mucIhHeQcNT%2FA8ppvN%2F5FSdb0beMgsTiCCGhi6ocntr1tmpD6i4gnq1QJpurkSR5K%2F7QHRVLjxxcP9mQ1Ayx94TmT4fOfjV3188dh10w4fFbN5jUW63qmDkvUaU2OnxrYdQmvJ%2BJWj0JrxGQcp5nxSZpxj5%2FBfjRvcwnZat5EzAicIDl5vYwrM639n2ILYIyiTl3ibvdmazDRvlXLZc5zujTTr3ddBctPDQfQXUWgZgN4J2F%2B7ELqJRo1HjbdHiU%2Ffm6AwKVbEZ5IQZEcqKPYi2F5vcJRHQWkRbBSgcZ087X%2BPsXUl2XcWto94rClQA%2F%2Fb1Y6BL7x0ZJ%2F7JyQBnGbm5kCM7q4JYUAuDZHT7X15psSG1kEbKD7sCfYDPXAbGIxoaGBLNoeqs7pQEDOh4bz3DarJn%2B76qltOaxC6xEu3ztVW8DTa5Q0ZmZb7WIJidaHfUHOT5pBYMajZ1ekfde%2By06BORIcO0daqkmGoC9BItpPW1qpcR2xVfvVzPXelxujzL6odyRd%2Bkc9XNNWtd7DhxKY12RQGVS2CjF2rLVYVJ8V36Vm8UXpLGSXVNKHvR%2F2krXkHFuaLgaYVCz9tdcKkRJP5d%2BSC0x5YBkPzwUD9oAAA79%2F1pqWi4hS%2FMPezlsIGOqUBU32tkm1cWV3XWAwqPQ0znpGD9B7AydhjHVdhTsiCeVloD5gTecLsSSaxFoJXnZHION7Z5ML5njBFd2xsSiv268huYAswpmrfnpNum1dxzMHzteFdx5LDciBmajKmNvFtfJ1%2FffETaSMyZgSqEK3heWe9pZ9BsSGXbVGRiR1p2gi7mm4eWt9zbe%2BwRVsZKvGUzg1leGQo8A8P5Yim0blRh%2FVA5ro6&X-Amz-Signature=1dd658ca1810153cfd21b4849fb5fcc690708a3fb28205269179b635290b70c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFQTZKU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsw4mpSvrHySDY%2FNAwSxV1J4t1Y6T5uocjPNII2Z0euAiEAsY2S3oc6GC995S4xWyDRCLTGNGbLRReMyk0Ou1NaWFoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2MSzhmJkCQ1uxeSrcA4mucIhHeQcNT%2FA8ppvN%2F5FSdb0beMgsTiCCGhi6ocntr1tmpD6i4gnq1QJpurkSR5K%2F7QHRVLjxxcP9mQ1Ayx94TmT4fOfjV3188dh10w4fFbN5jUW63qmDkvUaU2OnxrYdQmvJ%2BJWj0JrxGQcp5nxSZpxj5%2FBfjRvcwnZat5EzAicIDl5vYwrM639n2ILYIyiTl3ibvdmazDRvlXLZc5zujTTr3ddBctPDQfQXUWgZgN4J2F%2B7ELqJRo1HjbdHiU%2Ffm6AwKVbEZ5IQZEcqKPYi2F5vcJRHQWkRbBSgcZ087X%2BPsXUl2XcWto94rClQA%2F%2Fb1Y6BL7x0ZJ%2F7JyQBnGbm5kCM7q4JYUAuDZHT7X15psSG1kEbKD7sCfYDPXAbGIxoaGBLNoeqs7pQEDOh4bz3DarJn%2B76qltOaxC6xEu3ztVW8DTa5Q0ZmZb7WIJidaHfUHOT5pBYMajZ1ekfde%2By06BORIcO0daqkmGoC9BItpPW1qpcR2xVfvVzPXelxujzL6odyRd%2Bkc9XNNWtd7DhxKY12RQGVS2CjF2rLVYVJ8V36Vm8UXpLGSXVNKHvR%2F2krXkHFuaLgaYVCz9tdcKkRJP5d%2BSC0x5YBkPzwUD9oAAA79%2F1pqWi4hS%2FMPezlsIGOqUBU32tkm1cWV3XWAwqPQ0znpGD9B7AydhjHVdhTsiCeVloD5gTecLsSSaxFoJXnZHION7Z5ML5njBFd2xsSiv268huYAswpmrfnpNum1dxzMHzteFdx5LDciBmajKmNvFtfJ1%2FffETaSMyZgSqEK3heWe9pZ9BsSGXbVGRiR1p2gi7mm4eWt9zbe%2BwRVsZKvGUzg1leGQo8A8P5Yim0blRh%2FVA5ro6&X-Amz-Signature=e45df79a250f8a72624a775305fef7844c0d6f4de63079960ecd85466bb61ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFQTZKU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsw4mpSvrHySDY%2FNAwSxV1J4t1Y6T5uocjPNII2Z0euAiEAsY2S3oc6GC995S4xWyDRCLTGNGbLRReMyk0Ou1NaWFoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2MSzhmJkCQ1uxeSrcA4mucIhHeQcNT%2FA8ppvN%2F5FSdb0beMgsTiCCGhi6ocntr1tmpD6i4gnq1QJpurkSR5K%2F7QHRVLjxxcP9mQ1Ayx94TmT4fOfjV3188dh10w4fFbN5jUW63qmDkvUaU2OnxrYdQmvJ%2BJWj0JrxGQcp5nxSZpxj5%2FBfjRvcwnZat5EzAicIDl5vYwrM639n2ILYIyiTl3ibvdmazDRvlXLZc5zujTTr3ddBctPDQfQXUWgZgN4J2F%2B7ELqJRo1HjbdHiU%2Ffm6AwKVbEZ5IQZEcqKPYi2F5vcJRHQWkRbBSgcZ087X%2BPsXUl2XcWto94rClQA%2F%2Fb1Y6BL7x0ZJ%2F7JyQBnGbm5kCM7q4JYUAuDZHT7X15psSG1kEbKD7sCfYDPXAbGIxoaGBLNoeqs7pQEDOh4bz3DarJn%2B76qltOaxC6xEu3ztVW8DTa5Q0ZmZb7WIJidaHfUHOT5pBYMajZ1ekfde%2By06BORIcO0daqkmGoC9BItpPW1qpcR2xVfvVzPXelxujzL6odyRd%2Bkc9XNNWtd7DhxKY12RQGVS2CjF2rLVYVJ8V36Vm8UXpLGSXVNKHvR%2F2krXkHFuaLgaYVCz9tdcKkRJP5d%2BSC0x5YBkPzwUD9oAAA79%2F1pqWi4hS%2FMPezlsIGOqUBU32tkm1cWV3XWAwqPQ0znpGD9B7AydhjHVdhTsiCeVloD5gTecLsSSaxFoJXnZHION7Z5ML5njBFd2xsSiv268huYAswpmrfnpNum1dxzMHzteFdx5LDciBmajKmNvFtfJ1%2FffETaSMyZgSqEK3heWe9pZ9BsSGXbVGRiR1p2gi7mm4eWt9zbe%2BwRVsZKvGUzg1leGQo8A8P5Yim0blRh%2FVA5ro6&X-Amz-Signature=6d02b7179cec7cd431c44be71f8f7dba56eaf7f5766db097945d16c1228f3c98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFQTZKU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsw4mpSvrHySDY%2FNAwSxV1J4t1Y6T5uocjPNII2Z0euAiEAsY2S3oc6GC995S4xWyDRCLTGNGbLRReMyk0Ou1NaWFoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ2MSzhmJkCQ1uxeSrcA4mucIhHeQcNT%2FA8ppvN%2F5FSdb0beMgsTiCCGhi6ocntr1tmpD6i4gnq1QJpurkSR5K%2F7QHRVLjxxcP9mQ1Ayx94TmT4fOfjV3188dh10w4fFbN5jUW63qmDkvUaU2OnxrYdQmvJ%2BJWj0JrxGQcp5nxSZpxj5%2FBfjRvcwnZat5EzAicIDl5vYwrM639n2ILYIyiTl3ibvdmazDRvlXLZc5zujTTr3ddBctPDQfQXUWgZgN4J2F%2B7ELqJRo1HjbdHiU%2Ffm6AwKVbEZ5IQZEcqKPYi2F5vcJRHQWkRbBSgcZ087X%2BPsXUl2XcWto94rClQA%2F%2Fb1Y6BL7x0ZJ%2F7JyQBnGbm5kCM7q4JYUAuDZHT7X15psSG1kEbKD7sCfYDPXAbGIxoaGBLNoeqs7pQEDOh4bz3DarJn%2B76qltOaxC6xEu3ztVW8DTa5Q0ZmZb7WIJidaHfUHOT5pBYMajZ1ekfde%2By06BORIcO0daqkmGoC9BItpPW1qpcR2xVfvVzPXelxujzL6odyRd%2Bkc9XNNWtd7DhxKY12RQGVS2CjF2rLVYVJ8V36Vm8UXpLGSXVNKHvR%2F2krXkHFuaLgaYVCz9tdcKkRJP5d%2BSC0x5YBkPzwUD9oAAA79%2F1pqWi4hS%2FMPezlsIGOqUBU32tkm1cWV3XWAwqPQ0znpGD9B7AydhjHVdhTsiCeVloD5gTecLsSSaxFoJXnZHION7Z5ML5njBFd2xsSiv268huYAswpmrfnpNum1dxzMHzteFdx5LDciBmajKmNvFtfJ1%2FffETaSMyZgSqEK3heWe9pZ9BsSGXbVGRiR1p2gi7mm4eWt9zbe%2BwRVsZKvGUzg1leGQo8A8P5Yim0blRh%2FVA5ro6&X-Amz-Signature=15b3a2f3bbf1f448e4e039de3fa3b4fd8b2877f75c8ad7ba2ee5728459817cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

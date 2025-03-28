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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTNUYZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK0Q%2F2l%2BWu9aPmQwCFU23luBIh5VQfWBw0rrWRlVGTRwIgUI3O78MO5Vk9ld3Nb%2Bl3S8hiXuHeZyQ4%2BpyoJI0g3vUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVoe%2BDADZIIrtSkSCrcAwOGb72OqtQh2wHVy1DDJXLIHfltBy6heICpm2eMt1CDvL2VGvRePbfucYmDiSbwJDaxvaHiNXqVVzBjBUFeNU5OjI%2FbFckv%2FRpLEHiS6UKry2dH38bF9Tyn7EzJblMmQKXc8oQ%2F2EaDBd9F%2BeSALMYQinQPUu%2BUOyuZq6d2ahto0qTIct0efPeYNuE86JNLWx18IRcgPmr%2BxiiGHsaQjD7kQdtWkEnzdc6DBVjAztE9fe%2BPFGi9bOfqr2IOe9e3WL0xU9KNbFDPUMgUDBYH0pc9rIuFo6YQa6kB1G9fGxAT3grWK%2FLVDeTEpmld01cB%2BMUAEN9ruaqMK9pUqhvo1dg6C0gfwlCVOszPUznqtet%2FeQtLhIqR9ykiPEWN7lfRqYAizYKgjKQRZyhjBK%2Btn2gD1L9KexTy1ZlIKbksJsq15dmd36m6JIQNByGLVVNceRNC%2FjXK37%2BglYfXkc0Buuc0eviPTjyKyY%2BDlqJK%2F%2BgGH9LHOeRLY6j2qF9yb3H17wh4AGPHUb36GYRNjyG8UHlEX8cG%2Bm3AVpEV6BjahmRPY1W1aKZeMwy%2BBWiK%2BpfXcVMQfi8iqzYZnw7VDTsoOwMRWRgsJ8%2F97S5QHSmXSOE0h5%2F6CHrTIK6uvoCQMMz4mb8GOqUBZLgUJD%2BeHgMZfPjEIoVbyhHJh5dudcOmK9%2FvGNiMW5ZaZ9cuTffKTIcYjVegfBPG%2B4F7Ys0KqT6fic%2FTWRSqpkW0pAiLOV0HjrW%2FJRCUHKWUlygoDoOQvD53U8lBubkV0nijGPlODcvLeq5SQRxGlXNhiXGIPnWY65L0KKRS%2F%2Fwdhn5QbHVkVVh5UBA%2FtoFy6%2Fw5uxKzs4C6mmO7OmXBCZfSW%2FJC&X-Amz-Signature=2b1d2e0c62b3e16538819e6c60fe5cdf7fe4d006312fa33454d0922da85ab462&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTNUYZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK0Q%2F2l%2BWu9aPmQwCFU23luBIh5VQfWBw0rrWRlVGTRwIgUI3O78MO5Vk9ld3Nb%2Bl3S8hiXuHeZyQ4%2BpyoJI0g3vUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVoe%2BDADZIIrtSkSCrcAwOGb72OqtQh2wHVy1DDJXLIHfltBy6heICpm2eMt1CDvL2VGvRePbfucYmDiSbwJDaxvaHiNXqVVzBjBUFeNU5OjI%2FbFckv%2FRpLEHiS6UKry2dH38bF9Tyn7EzJblMmQKXc8oQ%2F2EaDBd9F%2BeSALMYQinQPUu%2BUOyuZq6d2ahto0qTIct0efPeYNuE86JNLWx18IRcgPmr%2BxiiGHsaQjD7kQdtWkEnzdc6DBVjAztE9fe%2BPFGi9bOfqr2IOe9e3WL0xU9KNbFDPUMgUDBYH0pc9rIuFo6YQa6kB1G9fGxAT3grWK%2FLVDeTEpmld01cB%2BMUAEN9ruaqMK9pUqhvo1dg6C0gfwlCVOszPUznqtet%2FeQtLhIqR9ykiPEWN7lfRqYAizYKgjKQRZyhjBK%2Btn2gD1L9KexTy1ZlIKbksJsq15dmd36m6JIQNByGLVVNceRNC%2FjXK37%2BglYfXkc0Buuc0eviPTjyKyY%2BDlqJK%2F%2BgGH9LHOeRLY6j2qF9yb3H17wh4AGPHUb36GYRNjyG8UHlEX8cG%2Bm3AVpEV6BjahmRPY1W1aKZeMwy%2BBWiK%2BpfXcVMQfi8iqzYZnw7VDTsoOwMRWRgsJ8%2F97S5QHSmXSOE0h5%2F6CHrTIK6uvoCQMMz4mb8GOqUBZLgUJD%2BeHgMZfPjEIoVbyhHJh5dudcOmK9%2FvGNiMW5ZaZ9cuTffKTIcYjVegfBPG%2B4F7Ys0KqT6fic%2FTWRSqpkW0pAiLOV0HjrW%2FJRCUHKWUlygoDoOQvD53U8lBubkV0nijGPlODcvLeq5SQRxGlXNhiXGIPnWY65L0KKRS%2F%2Fwdhn5QbHVkVVh5UBA%2FtoFy6%2Fw5uxKzs4C6mmO7OmXBCZfSW%2FJC&X-Amz-Signature=ac3437363987fdec4c0da1a7452a8127485a720b5b04788d7932e74b400a08bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTNUYZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK0Q%2F2l%2BWu9aPmQwCFU23luBIh5VQfWBw0rrWRlVGTRwIgUI3O78MO5Vk9ld3Nb%2Bl3S8hiXuHeZyQ4%2BpyoJI0g3vUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVoe%2BDADZIIrtSkSCrcAwOGb72OqtQh2wHVy1DDJXLIHfltBy6heICpm2eMt1CDvL2VGvRePbfucYmDiSbwJDaxvaHiNXqVVzBjBUFeNU5OjI%2FbFckv%2FRpLEHiS6UKry2dH38bF9Tyn7EzJblMmQKXc8oQ%2F2EaDBd9F%2BeSALMYQinQPUu%2BUOyuZq6d2ahto0qTIct0efPeYNuE86JNLWx18IRcgPmr%2BxiiGHsaQjD7kQdtWkEnzdc6DBVjAztE9fe%2BPFGi9bOfqr2IOe9e3WL0xU9KNbFDPUMgUDBYH0pc9rIuFo6YQa6kB1G9fGxAT3grWK%2FLVDeTEpmld01cB%2BMUAEN9ruaqMK9pUqhvo1dg6C0gfwlCVOszPUznqtet%2FeQtLhIqR9ykiPEWN7lfRqYAizYKgjKQRZyhjBK%2Btn2gD1L9KexTy1ZlIKbksJsq15dmd36m6JIQNByGLVVNceRNC%2FjXK37%2BglYfXkc0Buuc0eviPTjyKyY%2BDlqJK%2F%2BgGH9LHOeRLY6j2qF9yb3H17wh4AGPHUb36GYRNjyG8UHlEX8cG%2Bm3AVpEV6BjahmRPY1W1aKZeMwy%2BBWiK%2BpfXcVMQfi8iqzYZnw7VDTsoOwMRWRgsJ8%2F97S5QHSmXSOE0h5%2F6CHrTIK6uvoCQMMz4mb8GOqUBZLgUJD%2BeHgMZfPjEIoVbyhHJh5dudcOmK9%2FvGNiMW5ZaZ9cuTffKTIcYjVegfBPG%2B4F7Ys0KqT6fic%2FTWRSqpkW0pAiLOV0HjrW%2FJRCUHKWUlygoDoOQvD53U8lBubkV0nijGPlODcvLeq5SQRxGlXNhiXGIPnWY65L0KKRS%2F%2Fwdhn5QbHVkVVh5UBA%2FtoFy6%2Fw5uxKzs4C6mmO7OmXBCZfSW%2FJC&X-Amz-Signature=3c4063d303f14e4f80d58be52943d07be207ccf9246131f91c780d4fbdccb604&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTNUYZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK0Q%2F2l%2BWu9aPmQwCFU23luBIh5VQfWBw0rrWRlVGTRwIgUI3O78MO5Vk9ld3Nb%2Bl3S8hiXuHeZyQ4%2BpyoJI0g3vUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVoe%2BDADZIIrtSkSCrcAwOGb72OqtQh2wHVy1DDJXLIHfltBy6heICpm2eMt1CDvL2VGvRePbfucYmDiSbwJDaxvaHiNXqVVzBjBUFeNU5OjI%2FbFckv%2FRpLEHiS6UKry2dH38bF9Tyn7EzJblMmQKXc8oQ%2F2EaDBd9F%2BeSALMYQinQPUu%2BUOyuZq6d2ahto0qTIct0efPeYNuE86JNLWx18IRcgPmr%2BxiiGHsaQjD7kQdtWkEnzdc6DBVjAztE9fe%2BPFGi9bOfqr2IOe9e3WL0xU9KNbFDPUMgUDBYH0pc9rIuFo6YQa6kB1G9fGxAT3grWK%2FLVDeTEpmld01cB%2BMUAEN9ruaqMK9pUqhvo1dg6C0gfwlCVOszPUznqtet%2FeQtLhIqR9ykiPEWN7lfRqYAizYKgjKQRZyhjBK%2Btn2gD1L9KexTy1ZlIKbksJsq15dmd36m6JIQNByGLVVNceRNC%2FjXK37%2BglYfXkc0Buuc0eviPTjyKyY%2BDlqJK%2F%2BgGH9LHOeRLY6j2qF9yb3H17wh4AGPHUb36GYRNjyG8UHlEX8cG%2Bm3AVpEV6BjahmRPY1W1aKZeMwy%2BBWiK%2BpfXcVMQfi8iqzYZnw7VDTsoOwMRWRgsJ8%2F97S5QHSmXSOE0h5%2F6CHrTIK6uvoCQMMz4mb8GOqUBZLgUJD%2BeHgMZfPjEIoVbyhHJh5dudcOmK9%2FvGNiMW5ZaZ9cuTffKTIcYjVegfBPG%2B4F7Ys0KqT6fic%2FTWRSqpkW0pAiLOV0HjrW%2FJRCUHKWUlygoDoOQvD53U8lBubkV0nijGPlODcvLeq5SQRxGlXNhiXGIPnWY65L0KKRS%2F%2Fwdhn5QbHVkVVh5UBA%2FtoFy6%2Fw5uxKzs4C6mmO7OmXBCZfSW%2FJC&X-Amz-Signature=5c0255802e07fa875d76bc5eb5986f484df099e5bcc2fceacf2d78b1db818907&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTNUYZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK0Q%2F2l%2BWu9aPmQwCFU23luBIh5VQfWBw0rrWRlVGTRwIgUI3O78MO5Vk9ld3Nb%2Bl3S8hiXuHeZyQ4%2BpyoJI0g3vUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVoe%2BDADZIIrtSkSCrcAwOGb72OqtQh2wHVy1DDJXLIHfltBy6heICpm2eMt1CDvL2VGvRePbfucYmDiSbwJDaxvaHiNXqVVzBjBUFeNU5OjI%2FbFckv%2FRpLEHiS6UKry2dH38bF9Tyn7EzJblMmQKXc8oQ%2F2EaDBd9F%2BeSALMYQinQPUu%2BUOyuZq6d2ahto0qTIct0efPeYNuE86JNLWx18IRcgPmr%2BxiiGHsaQjD7kQdtWkEnzdc6DBVjAztE9fe%2BPFGi9bOfqr2IOe9e3WL0xU9KNbFDPUMgUDBYH0pc9rIuFo6YQa6kB1G9fGxAT3grWK%2FLVDeTEpmld01cB%2BMUAEN9ruaqMK9pUqhvo1dg6C0gfwlCVOszPUznqtet%2FeQtLhIqR9ykiPEWN7lfRqYAizYKgjKQRZyhjBK%2Btn2gD1L9KexTy1ZlIKbksJsq15dmd36m6JIQNByGLVVNceRNC%2FjXK37%2BglYfXkc0Buuc0eviPTjyKyY%2BDlqJK%2F%2BgGH9LHOeRLY6j2qF9yb3H17wh4AGPHUb36GYRNjyG8UHlEX8cG%2Bm3AVpEV6BjahmRPY1W1aKZeMwy%2BBWiK%2BpfXcVMQfi8iqzYZnw7VDTsoOwMRWRgsJ8%2F97S5QHSmXSOE0h5%2F6CHrTIK6uvoCQMMz4mb8GOqUBZLgUJD%2BeHgMZfPjEIoVbyhHJh5dudcOmK9%2FvGNiMW5ZaZ9cuTffKTIcYjVegfBPG%2B4F7Ys0KqT6fic%2FTWRSqpkW0pAiLOV0HjrW%2FJRCUHKWUlygoDoOQvD53U8lBubkV0nijGPlODcvLeq5SQRxGlXNhiXGIPnWY65L0KKRS%2F%2Fwdhn5QbHVkVVh5UBA%2FtoFy6%2Fw5uxKzs4C6mmO7OmXBCZfSW%2FJC&X-Amz-Signature=5bda9d33614b8f9f7516b586768bd5fa607feea8496ad8972297037281b33a54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTNUYZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK0Q%2F2l%2BWu9aPmQwCFU23luBIh5VQfWBw0rrWRlVGTRwIgUI3O78MO5Vk9ld3Nb%2Bl3S8hiXuHeZyQ4%2BpyoJI0g3vUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVoe%2BDADZIIrtSkSCrcAwOGb72OqtQh2wHVy1DDJXLIHfltBy6heICpm2eMt1CDvL2VGvRePbfucYmDiSbwJDaxvaHiNXqVVzBjBUFeNU5OjI%2FbFckv%2FRpLEHiS6UKry2dH38bF9Tyn7EzJblMmQKXc8oQ%2F2EaDBd9F%2BeSALMYQinQPUu%2BUOyuZq6d2ahto0qTIct0efPeYNuE86JNLWx18IRcgPmr%2BxiiGHsaQjD7kQdtWkEnzdc6DBVjAztE9fe%2BPFGi9bOfqr2IOe9e3WL0xU9KNbFDPUMgUDBYH0pc9rIuFo6YQa6kB1G9fGxAT3grWK%2FLVDeTEpmld01cB%2BMUAEN9ruaqMK9pUqhvo1dg6C0gfwlCVOszPUznqtet%2FeQtLhIqR9ykiPEWN7lfRqYAizYKgjKQRZyhjBK%2Btn2gD1L9KexTy1ZlIKbksJsq15dmd36m6JIQNByGLVVNceRNC%2FjXK37%2BglYfXkc0Buuc0eviPTjyKyY%2BDlqJK%2F%2BgGH9LHOeRLY6j2qF9yb3H17wh4AGPHUb36GYRNjyG8UHlEX8cG%2Bm3AVpEV6BjahmRPY1W1aKZeMwy%2BBWiK%2BpfXcVMQfi8iqzYZnw7VDTsoOwMRWRgsJ8%2F97S5QHSmXSOE0h5%2F6CHrTIK6uvoCQMMz4mb8GOqUBZLgUJD%2BeHgMZfPjEIoVbyhHJh5dudcOmK9%2FvGNiMW5ZaZ9cuTffKTIcYjVegfBPG%2B4F7Ys0KqT6fic%2FTWRSqpkW0pAiLOV0HjrW%2FJRCUHKWUlygoDoOQvD53U8lBubkV0nijGPlODcvLeq5SQRxGlXNhiXGIPnWY65L0KKRS%2F%2Fwdhn5QbHVkVVh5UBA%2FtoFy6%2Fw5uxKzs4C6mmO7OmXBCZfSW%2FJC&X-Amz-Signature=a22e5150e19305726f93906a6e93d20f29df396b365ed9d00f4549744065f8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTNUYZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK0Q%2F2l%2BWu9aPmQwCFU23luBIh5VQfWBw0rrWRlVGTRwIgUI3O78MO5Vk9ld3Nb%2Bl3S8hiXuHeZyQ4%2BpyoJI0g3vUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVoe%2BDADZIIrtSkSCrcAwOGb72OqtQh2wHVy1DDJXLIHfltBy6heICpm2eMt1CDvL2VGvRePbfucYmDiSbwJDaxvaHiNXqVVzBjBUFeNU5OjI%2FbFckv%2FRpLEHiS6UKry2dH38bF9Tyn7EzJblMmQKXc8oQ%2F2EaDBd9F%2BeSALMYQinQPUu%2BUOyuZq6d2ahto0qTIct0efPeYNuE86JNLWx18IRcgPmr%2BxiiGHsaQjD7kQdtWkEnzdc6DBVjAztE9fe%2BPFGi9bOfqr2IOe9e3WL0xU9KNbFDPUMgUDBYH0pc9rIuFo6YQa6kB1G9fGxAT3grWK%2FLVDeTEpmld01cB%2BMUAEN9ruaqMK9pUqhvo1dg6C0gfwlCVOszPUznqtet%2FeQtLhIqR9ykiPEWN7lfRqYAizYKgjKQRZyhjBK%2Btn2gD1L9KexTy1ZlIKbksJsq15dmd36m6JIQNByGLVVNceRNC%2FjXK37%2BglYfXkc0Buuc0eviPTjyKyY%2BDlqJK%2F%2BgGH9LHOeRLY6j2qF9yb3H17wh4AGPHUb36GYRNjyG8UHlEX8cG%2Bm3AVpEV6BjahmRPY1W1aKZeMwy%2BBWiK%2BpfXcVMQfi8iqzYZnw7VDTsoOwMRWRgsJ8%2F97S5QHSmXSOE0h5%2F6CHrTIK6uvoCQMMz4mb8GOqUBZLgUJD%2BeHgMZfPjEIoVbyhHJh5dudcOmK9%2FvGNiMW5ZaZ9cuTffKTIcYjVegfBPG%2B4F7Ys0KqT6fic%2FTWRSqpkW0pAiLOV0HjrW%2FJRCUHKWUlygoDoOQvD53U8lBubkV0nijGPlODcvLeq5SQRxGlXNhiXGIPnWY65L0KKRS%2F%2Fwdhn5QbHVkVVh5UBA%2FtoFy6%2Fw5uxKzs4C6mmO7OmXBCZfSW%2FJC&X-Amz-Signature=f272d50dd9f7a4ca7e259a9f788b3cb959482f6bfe3e6fcb3ac3cfd1190a852d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTNUYZM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK0Q%2F2l%2BWu9aPmQwCFU23luBIh5VQfWBw0rrWRlVGTRwIgUI3O78MO5Vk9ld3Nb%2Bl3S8hiXuHeZyQ4%2BpyoJI0g3vUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVoe%2BDADZIIrtSkSCrcAwOGb72OqtQh2wHVy1DDJXLIHfltBy6heICpm2eMt1CDvL2VGvRePbfucYmDiSbwJDaxvaHiNXqVVzBjBUFeNU5OjI%2FbFckv%2FRpLEHiS6UKry2dH38bF9Tyn7EzJblMmQKXc8oQ%2F2EaDBd9F%2BeSALMYQinQPUu%2BUOyuZq6d2ahto0qTIct0efPeYNuE86JNLWx18IRcgPmr%2BxiiGHsaQjD7kQdtWkEnzdc6DBVjAztE9fe%2BPFGi9bOfqr2IOe9e3WL0xU9KNbFDPUMgUDBYH0pc9rIuFo6YQa6kB1G9fGxAT3grWK%2FLVDeTEpmld01cB%2BMUAEN9ruaqMK9pUqhvo1dg6C0gfwlCVOszPUznqtet%2FeQtLhIqR9ykiPEWN7lfRqYAizYKgjKQRZyhjBK%2Btn2gD1L9KexTy1ZlIKbksJsq15dmd36m6JIQNByGLVVNceRNC%2FjXK37%2BglYfXkc0Buuc0eviPTjyKyY%2BDlqJK%2F%2BgGH9LHOeRLY6j2qF9yb3H17wh4AGPHUb36GYRNjyG8UHlEX8cG%2Bm3AVpEV6BjahmRPY1W1aKZeMwy%2BBWiK%2BpfXcVMQfi8iqzYZnw7VDTsoOwMRWRgsJ8%2F97S5QHSmXSOE0h5%2F6CHrTIK6uvoCQMMz4mb8GOqUBZLgUJD%2BeHgMZfPjEIoVbyhHJh5dudcOmK9%2FvGNiMW5ZaZ9cuTffKTIcYjVegfBPG%2B4F7Ys0KqT6fic%2FTWRSqpkW0pAiLOV0HjrW%2FJRCUHKWUlygoDoOQvD53U8lBubkV0nijGPlODcvLeq5SQRxGlXNhiXGIPnWY65L0KKRS%2F%2Fwdhn5QbHVkVVh5UBA%2FtoFy6%2Fw5uxKzs4C6mmO7OmXBCZfSW%2FJC&X-Amz-Signature=12919a4936a34548b8382bdbba8c7d2c59b1b139ae8d4d23ed8a7eecdae913c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

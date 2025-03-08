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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIVO53S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHeDeVsxh9ATlMwEADOKNVdP3nQ7JwCn6wGOTPFlZhwpAiEAqfMM%2Faz7kQw5UqULdCEgui880xBUhhTdalkaZZ2spGcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFcJ%2FYjQl2HZ2bN0JSrcA79Gxoj%2Blu5yi4bVkwsEI3%2FudhwGVLJ%2FSqCemsiHY45zZPy3NjimklUqkg%2F4tPcUWjhkTFfS%2Fm1NLnoTAMKc6JJD52E8GHgRSCijlbawRRxv8R8pUjVTb3U6w8T8uy3FS8taSdT0tU13BeylTVk17YoUnYFZpt9X%2BKpF%2BrSRy1mifE53uTmpzr%2BO2Q7ICI400%2F3pttD8X%2FjjlIozWFiNhCK7EltjOB2H9sCE4UI7TbQaSGfnEZSmmHUVN6ulLZAiA6pI5lXkvGaFqKQTGdCkVo2wrakO5PvN6KTqrIKpksswhY5rKegF%2Brqz%2F3t1SMZ0pxJTSezsP8yK8Dy7EzCZVrZGrPcDWnUQLHHvP7H5eh2Ezti59wWiNZvvlcH18pPsNUQv%2FbRKbU%2BvpnrZmmjelT401KnVqJ2pGNPk0DLetfHQmzVKEOFS3v9JIySZOBJ9q%2FZn80pHtLpS2cJIlxDHbHgX1zzjo1%2F1AkLd3iKCWHnll806p%2BPyAiE74kCy8KfXNV9F27TZHt0FNaXURY6zXGi6yEWkSNvaTWnsQk6%2F4rheql8uwU255X9FzdF0xfk8h6S1EGNQK%2B0gwvsuwPfBtg2SoE5oPszNO5V%2BCC433rXVMCaEiaB8ArBpG7LXMPazsb4GOqUBMwdAEQGHp7a%2BL%2FCAL0bSBKza2gX1lvQLj2msZN8g4q8QOlv0RkSEbclODKXaWAn8FNVi8UKOoG2JUzGpi0j8mwgMHWFvapURBbguGMTOnMK%2ButnsBq%2FKwnK%2B3XSJk7CBLIRQ2egxPtMKiwaeCDFuVAMuePrrpaDuHYJHxGdVoRjlywZaxWTzcw%2FbX71Qr2%2BvovYBNTqjaEYdVH5DAocZ12ELMC4Y&X-Amz-Signature=6326509cc207601100d1b1c4534091585c4595fb66dfa8e64a008351dac5d5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIVO53S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHeDeVsxh9ATlMwEADOKNVdP3nQ7JwCn6wGOTPFlZhwpAiEAqfMM%2Faz7kQw5UqULdCEgui880xBUhhTdalkaZZ2spGcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFcJ%2FYjQl2HZ2bN0JSrcA79Gxoj%2Blu5yi4bVkwsEI3%2FudhwGVLJ%2FSqCemsiHY45zZPy3NjimklUqkg%2F4tPcUWjhkTFfS%2Fm1NLnoTAMKc6JJD52E8GHgRSCijlbawRRxv8R8pUjVTb3U6w8T8uy3FS8taSdT0tU13BeylTVk17YoUnYFZpt9X%2BKpF%2BrSRy1mifE53uTmpzr%2BO2Q7ICI400%2F3pttD8X%2FjjlIozWFiNhCK7EltjOB2H9sCE4UI7TbQaSGfnEZSmmHUVN6ulLZAiA6pI5lXkvGaFqKQTGdCkVo2wrakO5PvN6KTqrIKpksswhY5rKegF%2Brqz%2F3t1SMZ0pxJTSezsP8yK8Dy7EzCZVrZGrPcDWnUQLHHvP7H5eh2Ezti59wWiNZvvlcH18pPsNUQv%2FbRKbU%2BvpnrZmmjelT401KnVqJ2pGNPk0DLetfHQmzVKEOFS3v9JIySZOBJ9q%2FZn80pHtLpS2cJIlxDHbHgX1zzjo1%2F1AkLd3iKCWHnll806p%2BPyAiE74kCy8KfXNV9F27TZHt0FNaXURY6zXGi6yEWkSNvaTWnsQk6%2F4rheql8uwU255X9FzdF0xfk8h6S1EGNQK%2B0gwvsuwPfBtg2SoE5oPszNO5V%2BCC433rXVMCaEiaB8ArBpG7LXMPazsb4GOqUBMwdAEQGHp7a%2BL%2FCAL0bSBKza2gX1lvQLj2msZN8g4q8QOlv0RkSEbclODKXaWAn8FNVi8UKOoG2JUzGpi0j8mwgMHWFvapURBbguGMTOnMK%2ButnsBq%2FKwnK%2B3XSJk7CBLIRQ2egxPtMKiwaeCDFuVAMuePrrpaDuHYJHxGdVoRjlywZaxWTzcw%2FbX71Qr2%2BvovYBNTqjaEYdVH5DAocZ12ELMC4Y&X-Amz-Signature=00fb49701e2917035e5f49bd5e34298c320a9e9f7cbf57355542f25fa8cb7d1f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIVO53S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHeDeVsxh9ATlMwEADOKNVdP3nQ7JwCn6wGOTPFlZhwpAiEAqfMM%2Faz7kQw5UqULdCEgui880xBUhhTdalkaZZ2spGcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFcJ%2FYjQl2HZ2bN0JSrcA79Gxoj%2Blu5yi4bVkwsEI3%2FudhwGVLJ%2FSqCemsiHY45zZPy3NjimklUqkg%2F4tPcUWjhkTFfS%2Fm1NLnoTAMKc6JJD52E8GHgRSCijlbawRRxv8R8pUjVTb3U6w8T8uy3FS8taSdT0tU13BeylTVk17YoUnYFZpt9X%2BKpF%2BrSRy1mifE53uTmpzr%2BO2Q7ICI400%2F3pttD8X%2FjjlIozWFiNhCK7EltjOB2H9sCE4UI7TbQaSGfnEZSmmHUVN6ulLZAiA6pI5lXkvGaFqKQTGdCkVo2wrakO5PvN6KTqrIKpksswhY5rKegF%2Brqz%2F3t1SMZ0pxJTSezsP8yK8Dy7EzCZVrZGrPcDWnUQLHHvP7H5eh2Ezti59wWiNZvvlcH18pPsNUQv%2FbRKbU%2BvpnrZmmjelT401KnVqJ2pGNPk0DLetfHQmzVKEOFS3v9JIySZOBJ9q%2FZn80pHtLpS2cJIlxDHbHgX1zzjo1%2F1AkLd3iKCWHnll806p%2BPyAiE74kCy8KfXNV9F27TZHt0FNaXURY6zXGi6yEWkSNvaTWnsQk6%2F4rheql8uwU255X9FzdF0xfk8h6S1EGNQK%2B0gwvsuwPfBtg2SoE5oPszNO5V%2BCC433rXVMCaEiaB8ArBpG7LXMPazsb4GOqUBMwdAEQGHp7a%2BL%2FCAL0bSBKza2gX1lvQLj2msZN8g4q8QOlv0RkSEbclODKXaWAn8FNVi8UKOoG2JUzGpi0j8mwgMHWFvapURBbguGMTOnMK%2ButnsBq%2FKwnK%2B3XSJk7CBLIRQ2egxPtMKiwaeCDFuVAMuePrrpaDuHYJHxGdVoRjlywZaxWTzcw%2FbX71Qr2%2BvovYBNTqjaEYdVH5DAocZ12ELMC4Y&X-Amz-Signature=038f3a4525d994a5c0a3921c635a4f9c227da54fa4146f68c74ac9a12907dc23&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIVO53S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHeDeVsxh9ATlMwEADOKNVdP3nQ7JwCn6wGOTPFlZhwpAiEAqfMM%2Faz7kQw5UqULdCEgui880xBUhhTdalkaZZ2spGcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFcJ%2FYjQl2HZ2bN0JSrcA79Gxoj%2Blu5yi4bVkwsEI3%2FudhwGVLJ%2FSqCemsiHY45zZPy3NjimklUqkg%2F4tPcUWjhkTFfS%2Fm1NLnoTAMKc6JJD52E8GHgRSCijlbawRRxv8R8pUjVTb3U6w8T8uy3FS8taSdT0tU13BeylTVk17YoUnYFZpt9X%2BKpF%2BrSRy1mifE53uTmpzr%2BO2Q7ICI400%2F3pttD8X%2FjjlIozWFiNhCK7EltjOB2H9sCE4UI7TbQaSGfnEZSmmHUVN6ulLZAiA6pI5lXkvGaFqKQTGdCkVo2wrakO5PvN6KTqrIKpksswhY5rKegF%2Brqz%2F3t1SMZ0pxJTSezsP8yK8Dy7EzCZVrZGrPcDWnUQLHHvP7H5eh2Ezti59wWiNZvvlcH18pPsNUQv%2FbRKbU%2BvpnrZmmjelT401KnVqJ2pGNPk0DLetfHQmzVKEOFS3v9JIySZOBJ9q%2FZn80pHtLpS2cJIlxDHbHgX1zzjo1%2F1AkLd3iKCWHnll806p%2BPyAiE74kCy8KfXNV9F27TZHt0FNaXURY6zXGi6yEWkSNvaTWnsQk6%2F4rheql8uwU255X9FzdF0xfk8h6S1EGNQK%2B0gwvsuwPfBtg2SoE5oPszNO5V%2BCC433rXVMCaEiaB8ArBpG7LXMPazsb4GOqUBMwdAEQGHp7a%2BL%2FCAL0bSBKza2gX1lvQLj2msZN8g4q8QOlv0RkSEbclODKXaWAn8FNVi8UKOoG2JUzGpi0j8mwgMHWFvapURBbguGMTOnMK%2ButnsBq%2FKwnK%2B3XSJk7CBLIRQ2egxPtMKiwaeCDFuVAMuePrrpaDuHYJHxGdVoRjlywZaxWTzcw%2FbX71Qr2%2BvovYBNTqjaEYdVH5DAocZ12ELMC4Y&X-Amz-Signature=2b74a71d88982709c8ddd5a04bea9d7751279fcee6a62e43b5811527f136d340&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIVO53S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHeDeVsxh9ATlMwEADOKNVdP3nQ7JwCn6wGOTPFlZhwpAiEAqfMM%2Faz7kQw5UqULdCEgui880xBUhhTdalkaZZ2spGcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFcJ%2FYjQl2HZ2bN0JSrcA79Gxoj%2Blu5yi4bVkwsEI3%2FudhwGVLJ%2FSqCemsiHY45zZPy3NjimklUqkg%2F4tPcUWjhkTFfS%2Fm1NLnoTAMKc6JJD52E8GHgRSCijlbawRRxv8R8pUjVTb3U6w8T8uy3FS8taSdT0tU13BeylTVk17YoUnYFZpt9X%2BKpF%2BrSRy1mifE53uTmpzr%2BO2Q7ICI400%2F3pttD8X%2FjjlIozWFiNhCK7EltjOB2H9sCE4UI7TbQaSGfnEZSmmHUVN6ulLZAiA6pI5lXkvGaFqKQTGdCkVo2wrakO5PvN6KTqrIKpksswhY5rKegF%2Brqz%2F3t1SMZ0pxJTSezsP8yK8Dy7EzCZVrZGrPcDWnUQLHHvP7H5eh2Ezti59wWiNZvvlcH18pPsNUQv%2FbRKbU%2BvpnrZmmjelT401KnVqJ2pGNPk0DLetfHQmzVKEOFS3v9JIySZOBJ9q%2FZn80pHtLpS2cJIlxDHbHgX1zzjo1%2F1AkLd3iKCWHnll806p%2BPyAiE74kCy8KfXNV9F27TZHt0FNaXURY6zXGi6yEWkSNvaTWnsQk6%2F4rheql8uwU255X9FzdF0xfk8h6S1EGNQK%2B0gwvsuwPfBtg2SoE5oPszNO5V%2BCC433rXVMCaEiaB8ArBpG7LXMPazsb4GOqUBMwdAEQGHp7a%2BL%2FCAL0bSBKza2gX1lvQLj2msZN8g4q8QOlv0RkSEbclODKXaWAn8FNVi8UKOoG2JUzGpi0j8mwgMHWFvapURBbguGMTOnMK%2ButnsBq%2FKwnK%2B3XSJk7CBLIRQ2egxPtMKiwaeCDFuVAMuePrrpaDuHYJHxGdVoRjlywZaxWTzcw%2FbX71Qr2%2BvovYBNTqjaEYdVH5DAocZ12ELMC4Y&X-Amz-Signature=4aa5da751ebd6488039f024c601aee80c9e4b2f43e216ee72db2b87150b274bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIVO53S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHeDeVsxh9ATlMwEADOKNVdP3nQ7JwCn6wGOTPFlZhwpAiEAqfMM%2Faz7kQw5UqULdCEgui880xBUhhTdalkaZZ2spGcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFcJ%2FYjQl2HZ2bN0JSrcA79Gxoj%2Blu5yi4bVkwsEI3%2FudhwGVLJ%2FSqCemsiHY45zZPy3NjimklUqkg%2F4tPcUWjhkTFfS%2Fm1NLnoTAMKc6JJD52E8GHgRSCijlbawRRxv8R8pUjVTb3U6w8T8uy3FS8taSdT0tU13BeylTVk17YoUnYFZpt9X%2BKpF%2BrSRy1mifE53uTmpzr%2BO2Q7ICI400%2F3pttD8X%2FjjlIozWFiNhCK7EltjOB2H9sCE4UI7TbQaSGfnEZSmmHUVN6ulLZAiA6pI5lXkvGaFqKQTGdCkVo2wrakO5PvN6KTqrIKpksswhY5rKegF%2Brqz%2F3t1SMZ0pxJTSezsP8yK8Dy7EzCZVrZGrPcDWnUQLHHvP7H5eh2Ezti59wWiNZvvlcH18pPsNUQv%2FbRKbU%2BvpnrZmmjelT401KnVqJ2pGNPk0DLetfHQmzVKEOFS3v9JIySZOBJ9q%2FZn80pHtLpS2cJIlxDHbHgX1zzjo1%2F1AkLd3iKCWHnll806p%2BPyAiE74kCy8KfXNV9F27TZHt0FNaXURY6zXGi6yEWkSNvaTWnsQk6%2F4rheql8uwU255X9FzdF0xfk8h6S1EGNQK%2B0gwvsuwPfBtg2SoE5oPszNO5V%2BCC433rXVMCaEiaB8ArBpG7LXMPazsb4GOqUBMwdAEQGHp7a%2BL%2FCAL0bSBKza2gX1lvQLj2msZN8g4q8QOlv0RkSEbclODKXaWAn8FNVi8UKOoG2JUzGpi0j8mwgMHWFvapURBbguGMTOnMK%2ButnsBq%2FKwnK%2B3XSJk7CBLIRQ2egxPtMKiwaeCDFuVAMuePrrpaDuHYJHxGdVoRjlywZaxWTzcw%2FbX71Qr2%2BvovYBNTqjaEYdVH5DAocZ12ELMC4Y&X-Amz-Signature=7f2822d54918445adb906f1d6a67b39518187da6123970f344b4465b93e6d373&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIVO53S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHeDeVsxh9ATlMwEADOKNVdP3nQ7JwCn6wGOTPFlZhwpAiEAqfMM%2Faz7kQw5UqULdCEgui880xBUhhTdalkaZZ2spGcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFcJ%2FYjQl2HZ2bN0JSrcA79Gxoj%2Blu5yi4bVkwsEI3%2FudhwGVLJ%2FSqCemsiHY45zZPy3NjimklUqkg%2F4tPcUWjhkTFfS%2Fm1NLnoTAMKc6JJD52E8GHgRSCijlbawRRxv8R8pUjVTb3U6w8T8uy3FS8taSdT0tU13BeylTVk17YoUnYFZpt9X%2BKpF%2BrSRy1mifE53uTmpzr%2BO2Q7ICI400%2F3pttD8X%2FjjlIozWFiNhCK7EltjOB2H9sCE4UI7TbQaSGfnEZSmmHUVN6ulLZAiA6pI5lXkvGaFqKQTGdCkVo2wrakO5PvN6KTqrIKpksswhY5rKegF%2Brqz%2F3t1SMZ0pxJTSezsP8yK8Dy7EzCZVrZGrPcDWnUQLHHvP7H5eh2Ezti59wWiNZvvlcH18pPsNUQv%2FbRKbU%2BvpnrZmmjelT401KnVqJ2pGNPk0DLetfHQmzVKEOFS3v9JIySZOBJ9q%2FZn80pHtLpS2cJIlxDHbHgX1zzjo1%2F1AkLd3iKCWHnll806p%2BPyAiE74kCy8KfXNV9F27TZHt0FNaXURY6zXGi6yEWkSNvaTWnsQk6%2F4rheql8uwU255X9FzdF0xfk8h6S1EGNQK%2B0gwvsuwPfBtg2SoE5oPszNO5V%2BCC433rXVMCaEiaB8ArBpG7LXMPazsb4GOqUBMwdAEQGHp7a%2BL%2FCAL0bSBKza2gX1lvQLj2msZN8g4q8QOlv0RkSEbclODKXaWAn8FNVi8UKOoG2JUzGpi0j8mwgMHWFvapURBbguGMTOnMK%2ButnsBq%2FKwnK%2B3XSJk7CBLIRQ2egxPtMKiwaeCDFuVAMuePrrpaDuHYJHxGdVoRjlywZaxWTzcw%2FbX71Qr2%2BvovYBNTqjaEYdVH5DAocZ12ELMC4Y&X-Amz-Signature=4fbcd0ab8218d9e433df60e447cb8ff9c31f4fa0db2523d4f608eb6d70095e18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIVO53S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHeDeVsxh9ATlMwEADOKNVdP3nQ7JwCn6wGOTPFlZhwpAiEAqfMM%2Faz7kQw5UqULdCEgui880xBUhhTdalkaZZ2spGcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFcJ%2FYjQl2HZ2bN0JSrcA79Gxoj%2Blu5yi4bVkwsEI3%2FudhwGVLJ%2FSqCemsiHY45zZPy3NjimklUqkg%2F4tPcUWjhkTFfS%2Fm1NLnoTAMKc6JJD52E8GHgRSCijlbawRRxv8R8pUjVTb3U6w8T8uy3FS8taSdT0tU13BeylTVk17YoUnYFZpt9X%2BKpF%2BrSRy1mifE53uTmpzr%2BO2Q7ICI400%2F3pttD8X%2FjjlIozWFiNhCK7EltjOB2H9sCE4UI7TbQaSGfnEZSmmHUVN6ulLZAiA6pI5lXkvGaFqKQTGdCkVo2wrakO5PvN6KTqrIKpksswhY5rKegF%2Brqz%2F3t1SMZ0pxJTSezsP8yK8Dy7EzCZVrZGrPcDWnUQLHHvP7H5eh2Ezti59wWiNZvvlcH18pPsNUQv%2FbRKbU%2BvpnrZmmjelT401KnVqJ2pGNPk0DLetfHQmzVKEOFS3v9JIySZOBJ9q%2FZn80pHtLpS2cJIlxDHbHgX1zzjo1%2F1AkLd3iKCWHnll806p%2BPyAiE74kCy8KfXNV9F27TZHt0FNaXURY6zXGi6yEWkSNvaTWnsQk6%2F4rheql8uwU255X9FzdF0xfk8h6S1EGNQK%2B0gwvsuwPfBtg2SoE5oPszNO5V%2BCC433rXVMCaEiaB8ArBpG7LXMPazsb4GOqUBMwdAEQGHp7a%2BL%2FCAL0bSBKza2gX1lvQLj2msZN8g4q8QOlv0RkSEbclODKXaWAn8FNVi8UKOoG2JUzGpi0j8mwgMHWFvapURBbguGMTOnMK%2ButnsBq%2FKwnK%2B3XSJk7CBLIRQ2egxPtMKiwaeCDFuVAMuePrrpaDuHYJHxGdVoRjlywZaxWTzcw%2FbX71Qr2%2BvovYBNTqjaEYdVH5DAocZ12ELMC4Y&X-Amz-Signature=49f7640bc14e58344a6b785c39a6ce03fe748b3cbaa23f1baa03d0ee2ed2df97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

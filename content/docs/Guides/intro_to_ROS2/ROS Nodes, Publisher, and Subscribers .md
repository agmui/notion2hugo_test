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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCCPNIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGD9i48A7AuaOoEzS%2BR0Af1jcftazPM6g88vt8Xo%2BX6tAiEApdIjx59KipeVh9v7XGaZMer6OzQT37kvaOrB51v82YsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FVh%2BpJyP0pu5Gi0yrcA%2FIBh%2Bpt2Y%2BqZb7kqdw64%2BgxfoEnS8gsBMMVCZ0Q2cCMVIqr2w4Pj7aR1E9W0hiD5SJvkiWQcI6jsQCMOUU2ied1Mg1xHelRUQCMwcVGpSWSwxk9NOlyYZJZQzmWx3UaeO566aB65AVg8U0YatJ6fiE4mVMRHF5Sw9FmN2oJxr0NLVNGExZPWpTj7DFxjhXoiCheXFKCpTxafDlPqLY392E1TQc%2FGlMPdMRQUXrnv4QDCnvCaCETopwSAJeRs0yDpar%2Fb6Y2y4TJqMncAzAPwZWBEaUtLIbsXhCaFWs%2B31r4t7qnz3x%2BaawSVTuqD7kauorqItwJTjcdEo213Q%2BTGxRqv8uKMaOAWQddMp7mkPPFH8zi%2BD9cgwADjNwv9k1oT5NNb%2FHdcc702vpR5o56Gu4f%2BLfQk8b1Pe4xJaWnZBKZnjZ52on1My9%2BWppNoXLlFmOHJQsjPcxJPMe4fCxx0I2c8lbuKKwUKjgyRgPrYsKFC2Yr4E0sK%2BgC2l0AIFMk%2FQBHzs267s0m3PawgdZrah7Ks6D9p%2F0pOFueUwQ1UMjUEv%2F%2F8PsPJbRxMnEIFYZWesxqQPgRtZ4xkl6XWB44TUDx7XlUBPSU%2FjfTqtRuCOFwqAVZihzPko4KkVDtMIuwv74GOqUBtNNC2KfsyhYwL%2F2mjzWPVIxbAsJgPQYIa9fuM7xwXAA9EXSbdr2CQGbceIq%2B1MkQClrP3zfWkUjfaIFSg9PzckIaKrcICPC3AtPs3N2oGKupclHsMWd6XchYJkhSiZBUvc%2Bj1yKYjNUuN53Vj9xHNXCEOQ6wBoNlun4%2BKiS%2BL0Rne9aDZtO5f2%2FXvwsaDKFS0Q2mUkc48sJ0We0nJEUsTpGTyMPd&X-Amz-Signature=ea41b60c6cb2f8a05047ce51d39e1b4eebd42b5d3a4286e682f928aed242380a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCCPNIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGD9i48A7AuaOoEzS%2BR0Af1jcftazPM6g88vt8Xo%2BX6tAiEApdIjx59KipeVh9v7XGaZMer6OzQT37kvaOrB51v82YsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FVh%2BpJyP0pu5Gi0yrcA%2FIBh%2Bpt2Y%2BqZb7kqdw64%2BgxfoEnS8gsBMMVCZ0Q2cCMVIqr2w4Pj7aR1E9W0hiD5SJvkiWQcI6jsQCMOUU2ied1Mg1xHelRUQCMwcVGpSWSwxk9NOlyYZJZQzmWx3UaeO566aB65AVg8U0YatJ6fiE4mVMRHF5Sw9FmN2oJxr0NLVNGExZPWpTj7DFxjhXoiCheXFKCpTxafDlPqLY392E1TQc%2FGlMPdMRQUXrnv4QDCnvCaCETopwSAJeRs0yDpar%2Fb6Y2y4TJqMncAzAPwZWBEaUtLIbsXhCaFWs%2B31r4t7qnz3x%2BaawSVTuqD7kauorqItwJTjcdEo213Q%2BTGxRqv8uKMaOAWQddMp7mkPPFH8zi%2BD9cgwADjNwv9k1oT5NNb%2FHdcc702vpR5o56Gu4f%2BLfQk8b1Pe4xJaWnZBKZnjZ52on1My9%2BWppNoXLlFmOHJQsjPcxJPMe4fCxx0I2c8lbuKKwUKjgyRgPrYsKFC2Yr4E0sK%2BgC2l0AIFMk%2FQBHzs267s0m3PawgdZrah7Ks6D9p%2F0pOFueUwQ1UMjUEv%2F%2F8PsPJbRxMnEIFYZWesxqQPgRtZ4xkl6XWB44TUDx7XlUBPSU%2FjfTqtRuCOFwqAVZihzPko4KkVDtMIuwv74GOqUBtNNC2KfsyhYwL%2F2mjzWPVIxbAsJgPQYIa9fuM7xwXAA9EXSbdr2CQGbceIq%2B1MkQClrP3zfWkUjfaIFSg9PzckIaKrcICPC3AtPs3N2oGKupclHsMWd6XchYJkhSiZBUvc%2Bj1yKYjNUuN53Vj9xHNXCEOQ6wBoNlun4%2BKiS%2BL0Rne9aDZtO5f2%2FXvwsaDKFS0Q2mUkc48sJ0We0nJEUsTpGTyMPd&X-Amz-Signature=5a2ad1a94557c9e3679def97d1b034fabb91bef8da8faad47b5c11e5a851ab1d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCCPNIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGD9i48A7AuaOoEzS%2BR0Af1jcftazPM6g88vt8Xo%2BX6tAiEApdIjx59KipeVh9v7XGaZMer6OzQT37kvaOrB51v82YsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FVh%2BpJyP0pu5Gi0yrcA%2FIBh%2Bpt2Y%2BqZb7kqdw64%2BgxfoEnS8gsBMMVCZ0Q2cCMVIqr2w4Pj7aR1E9W0hiD5SJvkiWQcI6jsQCMOUU2ied1Mg1xHelRUQCMwcVGpSWSwxk9NOlyYZJZQzmWx3UaeO566aB65AVg8U0YatJ6fiE4mVMRHF5Sw9FmN2oJxr0NLVNGExZPWpTj7DFxjhXoiCheXFKCpTxafDlPqLY392E1TQc%2FGlMPdMRQUXrnv4QDCnvCaCETopwSAJeRs0yDpar%2Fb6Y2y4TJqMncAzAPwZWBEaUtLIbsXhCaFWs%2B31r4t7qnz3x%2BaawSVTuqD7kauorqItwJTjcdEo213Q%2BTGxRqv8uKMaOAWQddMp7mkPPFH8zi%2BD9cgwADjNwv9k1oT5NNb%2FHdcc702vpR5o56Gu4f%2BLfQk8b1Pe4xJaWnZBKZnjZ52on1My9%2BWppNoXLlFmOHJQsjPcxJPMe4fCxx0I2c8lbuKKwUKjgyRgPrYsKFC2Yr4E0sK%2BgC2l0AIFMk%2FQBHzs267s0m3PawgdZrah7Ks6D9p%2F0pOFueUwQ1UMjUEv%2F%2F8PsPJbRxMnEIFYZWesxqQPgRtZ4xkl6XWB44TUDx7XlUBPSU%2FjfTqtRuCOFwqAVZihzPko4KkVDtMIuwv74GOqUBtNNC2KfsyhYwL%2F2mjzWPVIxbAsJgPQYIa9fuM7xwXAA9EXSbdr2CQGbceIq%2B1MkQClrP3zfWkUjfaIFSg9PzckIaKrcICPC3AtPs3N2oGKupclHsMWd6XchYJkhSiZBUvc%2Bj1yKYjNUuN53Vj9xHNXCEOQ6wBoNlun4%2BKiS%2BL0Rne9aDZtO5f2%2FXvwsaDKFS0Q2mUkc48sJ0We0nJEUsTpGTyMPd&X-Amz-Signature=cbe21cd0a72eff4f1e5ed58842b3a7f02788ed65e1c8819918e85166cb4f522b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCCPNIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGD9i48A7AuaOoEzS%2BR0Af1jcftazPM6g88vt8Xo%2BX6tAiEApdIjx59KipeVh9v7XGaZMer6OzQT37kvaOrB51v82YsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FVh%2BpJyP0pu5Gi0yrcA%2FIBh%2Bpt2Y%2BqZb7kqdw64%2BgxfoEnS8gsBMMVCZ0Q2cCMVIqr2w4Pj7aR1E9W0hiD5SJvkiWQcI6jsQCMOUU2ied1Mg1xHelRUQCMwcVGpSWSwxk9NOlyYZJZQzmWx3UaeO566aB65AVg8U0YatJ6fiE4mVMRHF5Sw9FmN2oJxr0NLVNGExZPWpTj7DFxjhXoiCheXFKCpTxafDlPqLY392E1TQc%2FGlMPdMRQUXrnv4QDCnvCaCETopwSAJeRs0yDpar%2Fb6Y2y4TJqMncAzAPwZWBEaUtLIbsXhCaFWs%2B31r4t7qnz3x%2BaawSVTuqD7kauorqItwJTjcdEo213Q%2BTGxRqv8uKMaOAWQddMp7mkPPFH8zi%2BD9cgwADjNwv9k1oT5NNb%2FHdcc702vpR5o56Gu4f%2BLfQk8b1Pe4xJaWnZBKZnjZ52on1My9%2BWppNoXLlFmOHJQsjPcxJPMe4fCxx0I2c8lbuKKwUKjgyRgPrYsKFC2Yr4E0sK%2BgC2l0AIFMk%2FQBHzs267s0m3PawgdZrah7Ks6D9p%2F0pOFueUwQ1UMjUEv%2F%2F8PsPJbRxMnEIFYZWesxqQPgRtZ4xkl6XWB44TUDx7XlUBPSU%2FjfTqtRuCOFwqAVZihzPko4KkVDtMIuwv74GOqUBtNNC2KfsyhYwL%2F2mjzWPVIxbAsJgPQYIa9fuM7xwXAA9EXSbdr2CQGbceIq%2B1MkQClrP3zfWkUjfaIFSg9PzckIaKrcICPC3AtPs3N2oGKupclHsMWd6XchYJkhSiZBUvc%2Bj1yKYjNUuN53Vj9xHNXCEOQ6wBoNlun4%2BKiS%2BL0Rne9aDZtO5f2%2FXvwsaDKFS0Q2mUkc48sJ0We0nJEUsTpGTyMPd&X-Amz-Signature=4991a3c74c719f6757b59084bb2deb5281eb4cfe5016b7a78e93849a0f58301f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCCPNIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGD9i48A7AuaOoEzS%2BR0Af1jcftazPM6g88vt8Xo%2BX6tAiEApdIjx59KipeVh9v7XGaZMer6OzQT37kvaOrB51v82YsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FVh%2BpJyP0pu5Gi0yrcA%2FIBh%2Bpt2Y%2BqZb7kqdw64%2BgxfoEnS8gsBMMVCZ0Q2cCMVIqr2w4Pj7aR1E9W0hiD5SJvkiWQcI6jsQCMOUU2ied1Mg1xHelRUQCMwcVGpSWSwxk9NOlyYZJZQzmWx3UaeO566aB65AVg8U0YatJ6fiE4mVMRHF5Sw9FmN2oJxr0NLVNGExZPWpTj7DFxjhXoiCheXFKCpTxafDlPqLY392E1TQc%2FGlMPdMRQUXrnv4QDCnvCaCETopwSAJeRs0yDpar%2Fb6Y2y4TJqMncAzAPwZWBEaUtLIbsXhCaFWs%2B31r4t7qnz3x%2BaawSVTuqD7kauorqItwJTjcdEo213Q%2BTGxRqv8uKMaOAWQddMp7mkPPFH8zi%2BD9cgwADjNwv9k1oT5NNb%2FHdcc702vpR5o56Gu4f%2BLfQk8b1Pe4xJaWnZBKZnjZ52on1My9%2BWppNoXLlFmOHJQsjPcxJPMe4fCxx0I2c8lbuKKwUKjgyRgPrYsKFC2Yr4E0sK%2BgC2l0AIFMk%2FQBHzs267s0m3PawgdZrah7Ks6D9p%2F0pOFueUwQ1UMjUEv%2F%2F8PsPJbRxMnEIFYZWesxqQPgRtZ4xkl6XWB44TUDx7XlUBPSU%2FjfTqtRuCOFwqAVZihzPko4KkVDtMIuwv74GOqUBtNNC2KfsyhYwL%2F2mjzWPVIxbAsJgPQYIa9fuM7xwXAA9EXSbdr2CQGbceIq%2B1MkQClrP3zfWkUjfaIFSg9PzckIaKrcICPC3AtPs3N2oGKupclHsMWd6XchYJkhSiZBUvc%2Bj1yKYjNUuN53Vj9xHNXCEOQ6wBoNlun4%2BKiS%2BL0Rne9aDZtO5f2%2FXvwsaDKFS0Q2mUkc48sJ0We0nJEUsTpGTyMPd&X-Amz-Signature=665d82e0607e0c1d837161e2d8f9962cf4cd4ab0ef7d813ce86027be7f77b997&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCCPNIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGD9i48A7AuaOoEzS%2BR0Af1jcftazPM6g88vt8Xo%2BX6tAiEApdIjx59KipeVh9v7XGaZMer6OzQT37kvaOrB51v82YsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FVh%2BpJyP0pu5Gi0yrcA%2FIBh%2Bpt2Y%2BqZb7kqdw64%2BgxfoEnS8gsBMMVCZ0Q2cCMVIqr2w4Pj7aR1E9W0hiD5SJvkiWQcI6jsQCMOUU2ied1Mg1xHelRUQCMwcVGpSWSwxk9NOlyYZJZQzmWx3UaeO566aB65AVg8U0YatJ6fiE4mVMRHF5Sw9FmN2oJxr0NLVNGExZPWpTj7DFxjhXoiCheXFKCpTxafDlPqLY392E1TQc%2FGlMPdMRQUXrnv4QDCnvCaCETopwSAJeRs0yDpar%2Fb6Y2y4TJqMncAzAPwZWBEaUtLIbsXhCaFWs%2B31r4t7qnz3x%2BaawSVTuqD7kauorqItwJTjcdEo213Q%2BTGxRqv8uKMaOAWQddMp7mkPPFH8zi%2BD9cgwADjNwv9k1oT5NNb%2FHdcc702vpR5o56Gu4f%2BLfQk8b1Pe4xJaWnZBKZnjZ52on1My9%2BWppNoXLlFmOHJQsjPcxJPMe4fCxx0I2c8lbuKKwUKjgyRgPrYsKFC2Yr4E0sK%2BgC2l0AIFMk%2FQBHzs267s0m3PawgdZrah7Ks6D9p%2F0pOFueUwQ1UMjUEv%2F%2F8PsPJbRxMnEIFYZWesxqQPgRtZ4xkl6XWB44TUDx7XlUBPSU%2FjfTqtRuCOFwqAVZihzPko4KkVDtMIuwv74GOqUBtNNC2KfsyhYwL%2F2mjzWPVIxbAsJgPQYIa9fuM7xwXAA9EXSbdr2CQGbceIq%2B1MkQClrP3zfWkUjfaIFSg9PzckIaKrcICPC3AtPs3N2oGKupclHsMWd6XchYJkhSiZBUvc%2Bj1yKYjNUuN53Vj9xHNXCEOQ6wBoNlun4%2BKiS%2BL0Rne9aDZtO5f2%2FXvwsaDKFS0Q2mUkc48sJ0We0nJEUsTpGTyMPd&X-Amz-Signature=ab2f8b774fcfda05e898ceea60c9830a0fa713fca3827a02becb789e7335e1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCCPNIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGD9i48A7AuaOoEzS%2BR0Af1jcftazPM6g88vt8Xo%2BX6tAiEApdIjx59KipeVh9v7XGaZMer6OzQT37kvaOrB51v82YsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FVh%2BpJyP0pu5Gi0yrcA%2FIBh%2Bpt2Y%2BqZb7kqdw64%2BgxfoEnS8gsBMMVCZ0Q2cCMVIqr2w4Pj7aR1E9W0hiD5SJvkiWQcI6jsQCMOUU2ied1Mg1xHelRUQCMwcVGpSWSwxk9NOlyYZJZQzmWx3UaeO566aB65AVg8U0YatJ6fiE4mVMRHF5Sw9FmN2oJxr0NLVNGExZPWpTj7DFxjhXoiCheXFKCpTxafDlPqLY392E1TQc%2FGlMPdMRQUXrnv4QDCnvCaCETopwSAJeRs0yDpar%2Fb6Y2y4TJqMncAzAPwZWBEaUtLIbsXhCaFWs%2B31r4t7qnz3x%2BaawSVTuqD7kauorqItwJTjcdEo213Q%2BTGxRqv8uKMaOAWQddMp7mkPPFH8zi%2BD9cgwADjNwv9k1oT5NNb%2FHdcc702vpR5o56Gu4f%2BLfQk8b1Pe4xJaWnZBKZnjZ52on1My9%2BWppNoXLlFmOHJQsjPcxJPMe4fCxx0I2c8lbuKKwUKjgyRgPrYsKFC2Yr4E0sK%2BgC2l0AIFMk%2FQBHzs267s0m3PawgdZrah7Ks6D9p%2F0pOFueUwQ1UMjUEv%2F%2F8PsPJbRxMnEIFYZWesxqQPgRtZ4xkl6XWB44TUDx7XlUBPSU%2FjfTqtRuCOFwqAVZihzPko4KkVDtMIuwv74GOqUBtNNC2KfsyhYwL%2F2mjzWPVIxbAsJgPQYIa9fuM7xwXAA9EXSbdr2CQGbceIq%2B1MkQClrP3zfWkUjfaIFSg9PzckIaKrcICPC3AtPs3N2oGKupclHsMWd6XchYJkhSiZBUvc%2Bj1yKYjNUuN53Vj9xHNXCEOQ6wBoNlun4%2BKiS%2BL0Rne9aDZtO5f2%2FXvwsaDKFS0Q2mUkc48sJ0We0nJEUsTpGTyMPd&X-Amz-Signature=96317a0fa1df7470f3f43504b2c69f421b9eb3158526ed8442e03fe628a2b1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCCPNIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGD9i48A7AuaOoEzS%2BR0Af1jcftazPM6g88vt8Xo%2BX6tAiEApdIjx59KipeVh9v7XGaZMer6OzQT37kvaOrB51v82YsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FVh%2BpJyP0pu5Gi0yrcA%2FIBh%2Bpt2Y%2BqZb7kqdw64%2BgxfoEnS8gsBMMVCZ0Q2cCMVIqr2w4Pj7aR1E9W0hiD5SJvkiWQcI6jsQCMOUU2ied1Mg1xHelRUQCMwcVGpSWSwxk9NOlyYZJZQzmWx3UaeO566aB65AVg8U0YatJ6fiE4mVMRHF5Sw9FmN2oJxr0NLVNGExZPWpTj7DFxjhXoiCheXFKCpTxafDlPqLY392E1TQc%2FGlMPdMRQUXrnv4QDCnvCaCETopwSAJeRs0yDpar%2Fb6Y2y4TJqMncAzAPwZWBEaUtLIbsXhCaFWs%2B31r4t7qnz3x%2BaawSVTuqD7kauorqItwJTjcdEo213Q%2BTGxRqv8uKMaOAWQddMp7mkPPFH8zi%2BD9cgwADjNwv9k1oT5NNb%2FHdcc702vpR5o56Gu4f%2BLfQk8b1Pe4xJaWnZBKZnjZ52on1My9%2BWppNoXLlFmOHJQsjPcxJPMe4fCxx0I2c8lbuKKwUKjgyRgPrYsKFC2Yr4E0sK%2BgC2l0AIFMk%2FQBHzs267s0m3PawgdZrah7Ks6D9p%2F0pOFueUwQ1UMjUEv%2F%2F8PsPJbRxMnEIFYZWesxqQPgRtZ4xkl6XWB44TUDx7XlUBPSU%2FjfTqtRuCOFwqAVZihzPko4KkVDtMIuwv74GOqUBtNNC2KfsyhYwL%2F2mjzWPVIxbAsJgPQYIa9fuM7xwXAA9EXSbdr2CQGbceIq%2B1MkQClrP3zfWkUjfaIFSg9PzckIaKrcICPC3AtPs3N2oGKupclHsMWd6XchYJkhSiZBUvc%2Bj1yKYjNUuN53Vj9xHNXCEOQ6wBoNlun4%2BKiS%2BL0Rne9aDZtO5f2%2FXvwsaDKFS0Q2mUkc48sJ0We0nJEUsTpGTyMPd&X-Amz-Signature=b881e78476bf20224b9b91e18a4a0a04de7c5e02c3c64d97aa05ef2f77ea7477&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

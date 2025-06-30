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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZBTEWN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0J5AZsb2ADlRTbvCqc3WER8eXvp1mMz1DI8YgGfIALQIgQOpNXU70lPwQRePvw9RGsWib0LzCcCII2HX3ybuvoKQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFhSDjA9DxP7bDRDyrcA0ZttSMzOnoNhCj0MFBYPlKeF4KeExUnYLctJqlPnXQ6gRop5GvPXlAMd6pmA44gYpfVnyWXUVZxCnIPBKy3DCzGXWuAfixXNL4J8FUPBGr%2BR7O2U5T5KLLvcYL%2FHxddNXo2JJKkuXnlXizICLBjthJKVU6C9MzgCQDbuadDbRPSU8GcQN79BeufLZkopKKJDc%2BLQtgQzJisfJlgs2V1aaJ0%2BTfLsK%2BlAdF7srL%2Fhj22ad%2FqYWZOGz1lhOoGmmM%2F5Tr3cC3uxwp0NIPHOC%2BRcc1bx9ikhtGT1JlMNP1frKE7NG%2FxnKJbHHBuSXqqZTlVmOmaelF5hlSJo4MsIvnk7V3ceNc8WBD8bZ1Q0MR3ih9ZGAXAfWKt9Qh5977KkA7Cr5tvtiodNKaJgof6NHghTPWsogzs0durAA5cP2eVHosY%2FFEQFXVsUeln4LarF1HYXCl%2FCuVqpcBGkvuBKJ62npO2uwxNB61TLujKxMG6Po6hGdf%2BB%2FsqsJ%2BXBbPYln%2FHPumPDffOhb3xRbKtqYztpBB9uzQe%2B1%2BQojycUx9fi9oRK36POn7Du9hRcTcfUkW1sM%2BeZ8rukKxiGZ%2Fkc%2BC2G0PGZIENMmBd2A2cPuP2Zf%2FL0XFutEysA5GOmbvfMIPOi8MGOqUBcgJ4aeE%2Fo%2Bjz3nhR5rIUTlF%2BIywIrcBOgfoI%2FBr0lG4NFGdlwzicQD54rw1QPPmb6cDc81w9IWOWobbmsR49UTuKj7upHrw9Cs4765YbQaZ8YIsBaNpjEBduUi%2BCL6mYuE28ZN2tXufHSfz%2Fay2mAe9kswyKaKNG7UkDKpRESqJvH73jlaQNr69EzHaI2DYA79nCQgQ0EDoyeab93USiIMfmy9p3&X-Amz-Signature=ec9be675712d454f6fc4831dd2f1625418dce04b8387aa10a1b5fc257790660e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZBTEWN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0J5AZsb2ADlRTbvCqc3WER8eXvp1mMz1DI8YgGfIALQIgQOpNXU70lPwQRePvw9RGsWib0LzCcCII2HX3ybuvoKQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFhSDjA9DxP7bDRDyrcA0ZttSMzOnoNhCj0MFBYPlKeF4KeExUnYLctJqlPnXQ6gRop5GvPXlAMd6pmA44gYpfVnyWXUVZxCnIPBKy3DCzGXWuAfixXNL4J8FUPBGr%2BR7O2U5T5KLLvcYL%2FHxddNXo2JJKkuXnlXizICLBjthJKVU6C9MzgCQDbuadDbRPSU8GcQN79BeufLZkopKKJDc%2BLQtgQzJisfJlgs2V1aaJ0%2BTfLsK%2BlAdF7srL%2Fhj22ad%2FqYWZOGz1lhOoGmmM%2F5Tr3cC3uxwp0NIPHOC%2BRcc1bx9ikhtGT1JlMNP1frKE7NG%2FxnKJbHHBuSXqqZTlVmOmaelF5hlSJo4MsIvnk7V3ceNc8WBD8bZ1Q0MR3ih9ZGAXAfWKt9Qh5977KkA7Cr5tvtiodNKaJgof6NHghTPWsogzs0durAA5cP2eVHosY%2FFEQFXVsUeln4LarF1HYXCl%2FCuVqpcBGkvuBKJ62npO2uwxNB61TLujKxMG6Po6hGdf%2BB%2FsqsJ%2BXBbPYln%2FHPumPDffOhb3xRbKtqYztpBB9uzQe%2B1%2BQojycUx9fi9oRK36POn7Du9hRcTcfUkW1sM%2BeZ8rukKxiGZ%2Fkc%2BC2G0PGZIENMmBd2A2cPuP2Zf%2FL0XFutEysA5GOmbvfMIPOi8MGOqUBcgJ4aeE%2Fo%2Bjz3nhR5rIUTlF%2BIywIrcBOgfoI%2FBr0lG4NFGdlwzicQD54rw1QPPmb6cDc81w9IWOWobbmsR49UTuKj7upHrw9Cs4765YbQaZ8YIsBaNpjEBduUi%2BCL6mYuE28ZN2tXufHSfz%2Fay2mAe9kswyKaKNG7UkDKpRESqJvH73jlaQNr69EzHaI2DYA79nCQgQ0EDoyeab93USiIMfmy9p3&X-Amz-Signature=e22c0888251ed5a3ea8ae026bfdc208e84293cb86033cd4516f15a3168453af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZBTEWN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0J5AZsb2ADlRTbvCqc3WER8eXvp1mMz1DI8YgGfIALQIgQOpNXU70lPwQRePvw9RGsWib0LzCcCII2HX3ybuvoKQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFhSDjA9DxP7bDRDyrcA0ZttSMzOnoNhCj0MFBYPlKeF4KeExUnYLctJqlPnXQ6gRop5GvPXlAMd6pmA44gYpfVnyWXUVZxCnIPBKy3DCzGXWuAfixXNL4J8FUPBGr%2BR7O2U5T5KLLvcYL%2FHxddNXo2JJKkuXnlXizICLBjthJKVU6C9MzgCQDbuadDbRPSU8GcQN79BeufLZkopKKJDc%2BLQtgQzJisfJlgs2V1aaJ0%2BTfLsK%2BlAdF7srL%2Fhj22ad%2FqYWZOGz1lhOoGmmM%2F5Tr3cC3uxwp0NIPHOC%2BRcc1bx9ikhtGT1JlMNP1frKE7NG%2FxnKJbHHBuSXqqZTlVmOmaelF5hlSJo4MsIvnk7V3ceNc8WBD8bZ1Q0MR3ih9ZGAXAfWKt9Qh5977KkA7Cr5tvtiodNKaJgof6NHghTPWsogzs0durAA5cP2eVHosY%2FFEQFXVsUeln4LarF1HYXCl%2FCuVqpcBGkvuBKJ62npO2uwxNB61TLujKxMG6Po6hGdf%2BB%2FsqsJ%2BXBbPYln%2FHPumPDffOhb3xRbKtqYztpBB9uzQe%2B1%2BQojycUx9fi9oRK36POn7Du9hRcTcfUkW1sM%2BeZ8rukKxiGZ%2Fkc%2BC2G0PGZIENMmBd2A2cPuP2Zf%2FL0XFutEysA5GOmbvfMIPOi8MGOqUBcgJ4aeE%2Fo%2Bjz3nhR5rIUTlF%2BIywIrcBOgfoI%2FBr0lG4NFGdlwzicQD54rw1QPPmb6cDc81w9IWOWobbmsR49UTuKj7upHrw9Cs4765YbQaZ8YIsBaNpjEBduUi%2BCL6mYuE28ZN2tXufHSfz%2Fay2mAe9kswyKaKNG7UkDKpRESqJvH73jlaQNr69EzHaI2DYA79nCQgQ0EDoyeab93USiIMfmy9p3&X-Amz-Signature=f12d09e28a63947697ef405ac04d350de602006fa6a3c9eb74800a6c44815aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZBTEWN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0J5AZsb2ADlRTbvCqc3WER8eXvp1mMz1DI8YgGfIALQIgQOpNXU70lPwQRePvw9RGsWib0LzCcCII2HX3ybuvoKQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFhSDjA9DxP7bDRDyrcA0ZttSMzOnoNhCj0MFBYPlKeF4KeExUnYLctJqlPnXQ6gRop5GvPXlAMd6pmA44gYpfVnyWXUVZxCnIPBKy3DCzGXWuAfixXNL4J8FUPBGr%2BR7O2U5T5KLLvcYL%2FHxddNXo2JJKkuXnlXizICLBjthJKVU6C9MzgCQDbuadDbRPSU8GcQN79BeufLZkopKKJDc%2BLQtgQzJisfJlgs2V1aaJ0%2BTfLsK%2BlAdF7srL%2Fhj22ad%2FqYWZOGz1lhOoGmmM%2F5Tr3cC3uxwp0NIPHOC%2BRcc1bx9ikhtGT1JlMNP1frKE7NG%2FxnKJbHHBuSXqqZTlVmOmaelF5hlSJo4MsIvnk7V3ceNc8WBD8bZ1Q0MR3ih9ZGAXAfWKt9Qh5977KkA7Cr5tvtiodNKaJgof6NHghTPWsogzs0durAA5cP2eVHosY%2FFEQFXVsUeln4LarF1HYXCl%2FCuVqpcBGkvuBKJ62npO2uwxNB61TLujKxMG6Po6hGdf%2BB%2FsqsJ%2BXBbPYln%2FHPumPDffOhb3xRbKtqYztpBB9uzQe%2B1%2BQojycUx9fi9oRK36POn7Du9hRcTcfUkW1sM%2BeZ8rukKxiGZ%2Fkc%2BC2G0PGZIENMmBd2A2cPuP2Zf%2FL0XFutEysA5GOmbvfMIPOi8MGOqUBcgJ4aeE%2Fo%2Bjz3nhR5rIUTlF%2BIywIrcBOgfoI%2FBr0lG4NFGdlwzicQD54rw1QPPmb6cDc81w9IWOWobbmsR49UTuKj7upHrw9Cs4765YbQaZ8YIsBaNpjEBduUi%2BCL6mYuE28ZN2tXufHSfz%2Fay2mAe9kswyKaKNG7UkDKpRESqJvH73jlaQNr69EzHaI2DYA79nCQgQ0EDoyeab93USiIMfmy9p3&X-Amz-Signature=1b34e7c4513c0222f8339b028bf1f00f53644ecdf60fe532349fab9ea8a36cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZBTEWN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0J5AZsb2ADlRTbvCqc3WER8eXvp1mMz1DI8YgGfIALQIgQOpNXU70lPwQRePvw9RGsWib0LzCcCII2HX3ybuvoKQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFhSDjA9DxP7bDRDyrcA0ZttSMzOnoNhCj0MFBYPlKeF4KeExUnYLctJqlPnXQ6gRop5GvPXlAMd6pmA44gYpfVnyWXUVZxCnIPBKy3DCzGXWuAfixXNL4J8FUPBGr%2BR7O2U5T5KLLvcYL%2FHxddNXo2JJKkuXnlXizICLBjthJKVU6C9MzgCQDbuadDbRPSU8GcQN79BeufLZkopKKJDc%2BLQtgQzJisfJlgs2V1aaJ0%2BTfLsK%2BlAdF7srL%2Fhj22ad%2FqYWZOGz1lhOoGmmM%2F5Tr3cC3uxwp0NIPHOC%2BRcc1bx9ikhtGT1JlMNP1frKE7NG%2FxnKJbHHBuSXqqZTlVmOmaelF5hlSJo4MsIvnk7V3ceNc8WBD8bZ1Q0MR3ih9ZGAXAfWKt9Qh5977KkA7Cr5tvtiodNKaJgof6NHghTPWsogzs0durAA5cP2eVHosY%2FFEQFXVsUeln4LarF1HYXCl%2FCuVqpcBGkvuBKJ62npO2uwxNB61TLujKxMG6Po6hGdf%2BB%2FsqsJ%2BXBbPYln%2FHPumPDffOhb3xRbKtqYztpBB9uzQe%2B1%2BQojycUx9fi9oRK36POn7Du9hRcTcfUkW1sM%2BeZ8rukKxiGZ%2Fkc%2BC2G0PGZIENMmBd2A2cPuP2Zf%2FL0XFutEysA5GOmbvfMIPOi8MGOqUBcgJ4aeE%2Fo%2Bjz3nhR5rIUTlF%2BIywIrcBOgfoI%2FBr0lG4NFGdlwzicQD54rw1QPPmb6cDc81w9IWOWobbmsR49UTuKj7upHrw9Cs4765YbQaZ8YIsBaNpjEBduUi%2BCL6mYuE28ZN2tXufHSfz%2Fay2mAe9kswyKaKNG7UkDKpRESqJvH73jlaQNr69EzHaI2DYA79nCQgQ0EDoyeab93USiIMfmy9p3&X-Amz-Signature=00ff596bc6b41ac2c0f24a6f57fe14c1f21709385294b0f85b0cbda4287272c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZBTEWN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0J5AZsb2ADlRTbvCqc3WER8eXvp1mMz1DI8YgGfIALQIgQOpNXU70lPwQRePvw9RGsWib0LzCcCII2HX3ybuvoKQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFhSDjA9DxP7bDRDyrcA0ZttSMzOnoNhCj0MFBYPlKeF4KeExUnYLctJqlPnXQ6gRop5GvPXlAMd6pmA44gYpfVnyWXUVZxCnIPBKy3DCzGXWuAfixXNL4J8FUPBGr%2BR7O2U5T5KLLvcYL%2FHxddNXo2JJKkuXnlXizICLBjthJKVU6C9MzgCQDbuadDbRPSU8GcQN79BeufLZkopKKJDc%2BLQtgQzJisfJlgs2V1aaJ0%2BTfLsK%2BlAdF7srL%2Fhj22ad%2FqYWZOGz1lhOoGmmM%2F5Tr3cC3uxwp0NIPHOC%2BRcc1bx9ikhtGT1JlMNP1frKE7NG%2FxnKJbHHBuSXqqZTlVmOmaelF5hlSJo4MsIvnk7V3ceNc8WBD8bZ1Q0MR3ih9ZGAXAfWKt9Qh5977KkA7Cr5tvtiodNKaJgof6NHghTPWsogzs0durAA5cP2eVHosY%2FFEQFXVsUeln4LarF1HYXCl%2FCuVqpcBGkvuBKJ62npO2uwxNB61TLujKxMG6Po6hGdf%2BB%2FsqsJ%2BXBbPYln%2FHPumPDffOhb3xRbKtqYztpBB9uzQe%2B1%2BQojycUx9fi9oRK36POn7Du9hRcTcfUkW1sM%2BeZ8rukKxiGZ%2Fkc%2BC2G0PGZIENMmBd2A2cPuP2Zf%2FL0XFutEysA5GOmbvfMIPOi8MGOqUBcgJ4aeE%2Fo%2Bjz3nhR5rIUTlF%2BIywIrcBOgfoI%2FBr0lG4NFGdlwzicQD54rw1QPPmb6cDc81w9IWOWobbmsR49UTuKj7upHrw9Cs4765YbQaZ8YIsBaNpjEBduUi%2BCL6mYuE28ZN2tXufHSfz%2Fay2mAe9kswyKaKNG7UkDKpRESqJvH73jlaQNr69EzHaI2DYA79nCQgQ0EDoyeab93USiIMfmy9p3&X-Amz-Signature=c09c47ce49f891a58c28ace78b240cae2379e2ace4e3b5ab353f2e95739d4771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZBTEWN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0J5AZsb2ADlRTbvCqc3WER8eXvp1mMz1DI8YgGfIALQIgQOpNXU70lPwQRePvw9RGsWib0LzCcCII2HX3ybuvoKQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFhSDjA9DxP7bDRDyrcA0ZttSMzOnoNhCj0MFBYPlKeF4KeExUnYLctJqlPnXQ6gRop5GvPXlAMd6pmA44gYpfVnyWXUVZxCnIPBKy3DCzGXWuAfixXNL4J8FUPBGr%2BR7O2U5T5KLLvcYL%2FHxddNXo2JJKkuXnlXizICLBjthJKVU6C9MzgCQDbuadDbRPSU8GcQN79BeufLZkopKKJDc%2BLQtgQzJisfJlgs2V1aaJ0%2BTfLsK%2BlAdF7srL%2Fhj22ad%2FqYWZOGz1lhOoGmmM%2F5Tr3cC3uxwp0NIPHOC%2BRcc1bx9ikhtGT1JlMNP1frKE7NG%2FxnKJbHHBuSXqqZTlVmOmaelF5hlSJo4MsIvnk7V3ceNc8WBD8bZ1Q0MR3ih9ZGAXAfWKt9Qh5977KkA7Cr5tvtiodNKaJgof6NHghTPWsogzs0durAA5cP2eVHosY%2FFEQFXVsUeln4LarF1HYXCl%2FCuVqpcBGkvuBKJ62npO2uwxNB61TLujKxMG6Po6hGdf%2BB%2FsqsJ%2BXBbPYln%2FHPumPDffOhb3xRbKtqYztpBB9uzQe%2B1%2BQojycUx9fi9oRK36POn7Du9hRcTcfUkW1sM%2BeZ8rukKxiGZ%2Fkc%2BC2G0PGZIENMmBd2A2cPuP2Zf%2FL0XFutEysA5GOmbvfMIPOi8MGOqUBcgJ4aeE%2Fo%2Bjz3nhR5rIUTlF%2BIywIrcBOgfoI%2FBr0lG4NFGdlwzicQD54rw1QPPmb6cDc81w9IWOWobbmsR49UTuKj7upHrw9Cs4765YbQaZ8YIsBaNpjEBduUi%2BCL6mYuE28ZN2tXufHSfz%2Fay2mAe9kswyKaKNG7UkDKpRESqJvH73jlaQNr69EzHaI2DYA79nCQgQ0EDoyeab93USiIMfmy9p3&X-Amz-Signature=1649fa34f9bfeb25fc179c1454ab2331fee482aaacf4441be00a5c4c216c25f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZBTEWN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0J5AZsb2ADlRTbvCqc3WER8eXvp1mMz1DI8YgGfIALQIgQOpNXU70lPwQRePvw9RGsWib0LzCcCII2HX3ybuvoKQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFhSDjA9DxP7bDRDyrcA0ZttSMzOnoNhCj0MFBYPlKeF4KeExUnYLctJqlPnXQ6gRop5GvPXlAMd6pmA44gYpfVnyWXUVZxCnIPBKy3DCzGXWuAfixXNL4J8FUPBGr%2BR7O2U5T5KLLvcYL%2FHxddNXo2JJKkuXnlXizICLBjthJKVU6C9MzgCQDbuadDbRPSU8GcQN79BeufLZkopKKJDc%2BLQtgQzJisfJlgs2V1aaJ0%2BTfLsK%2BlAdF7srL%2Fhj22ad%2FqYWZOGz1lhOoGmmM%2F5Tr3cC3uxwp0NIPHOC%2BRcc1bx9ikhtGT1JlMNP1frKE7NG%2FxnKJbHHBuSXqqZTlVmOmaelF5hlSJo4MsIvnk7V3ceNc8WBD8bZ1Q0MR3ih9ZGAXAfWKt9Qh5977KkA7Cr5tvtiodNKaJgof6NHghTPWsogzs0durAA5cP2eVHosY%2FFEQFXVsUeln4LarF1HYXCl%2FCuVqpcBGkvuBKJ62npO2uwxNB61TLujKxMG6Po6hGdf%2BB%2FsqsJ%2BXBbPYln%2FHPumPDffOhb3xRbKtqYztpBB9uzQe%2B1%2BQojycUx9fi9oRK36POn7Du9hRcTcfUkW1sM%2BeZ8rukKxiGZ%2Fkc%2BC2G0PGZIENMmBd2A2cPuP2Zf%2FL0XFutEysA5GOmbvfMIPOi8MGOqUBcgJ4aeE%2Fo%2Bjz3nhR5rIUTlF%2BIywIrcBOgfoI%2FBr0lG4NFGdlwzicQD54rw1QPPmb6cDc81w9IWOWobbmsR49UTuKj7upHrw9Cs4765YbQaZ8YIsBaNpjEBduUi%2BCL6mYuE28ZN2tXufHSfz%2Fay2mAe9kswyKaKNG7UkDKpRESqJvH73jlaQNr69EzHaI2DYA79nCQgQ0EDoyeab93USiIMfmy9p3&X-Amz-Signature=a3b5c4a257457088cda08de369d2325edd09666be82e13a34a482806921b574f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

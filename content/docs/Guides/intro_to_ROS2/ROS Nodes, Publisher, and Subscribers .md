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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMQBS6L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCU9Ai%2BPuxpIsvYM4y3Qo6PoaAKupEoZhL2nMx%2Fv0OJwIhAL6PoOGPcSNmI%2FLExw1ZdO9gLjdGA%2F1Q38EtuOkBoi04KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhn3AT%2FekHYSGqd6Yq3ANfHQwGyDS1EhnOL7WORvAdm7HLPi8DpmWqxkakbbCKFJaBF%2BeqYzJRkJy73dEO6ZDA5fhjMA9I4h%2B420VPUduXMJ1tfu2KevO8nRZUeo5%2BJcNtA1odiL5sb6m5AMwHOhR4nr1HHGBnIbHqm6RDqMjlRQ0g6IdfmeFTKQ4GO2S8Y%2Ftp%2F5AQSF8GIZdE%2BO3r86gV1zt8iWNdB2oA4bRUcrJThGv6N1xNs610oWVK7dOsAicsuSd6admv7n2Q2H7bVLVb9SNXBQXg21%2BylfK4WNvO%2Fuk9Js3tudyvMHZQ%2F0v6F09JOiTvFYt8alYK3ajJ6A4nimkytyV8sLFF%2BPINcKz1qficWirU7QuiI8PJnnV%2BG6cRkNoS%2FvtY%2FW5ij2ZGdpKawJSJtYV3lM63NTzYLS0XTZEIx7QUnuQOwaaJ0TGoG88UWt6Fx9TNF9CYxUgf5HCMSQBTHFrncGTfKS7mpzBzx1B3iBY7NHJfG80LE5W5sAHphppj5PKgQj1BQ%2B4%2FrkjC4g2NT8Jpac6%2FYbjIX46skeuKNyaweiUYquPnkmxIbk0ADSZ5r3LC0E59EWElPCiZJXw0N4yXFGHpAYL7%2Beo9k9%2BLNOm68hI4yE3CKFSz8pB21fvdy5ottnWdHjCbppbFBjqkAZPLxvkRk1NGKBUuTacWn%2F2LfcA7Pt2WIqHBMh8sA6dVM6NqKMgPt3aST4fgJ2NNLGt2kBzKk8BHYhNWJ3TgL6S213sC8hpYIfSszlDlBIp%2F%2Fqo0NbavW%2FDRtYBx1p98D4wCZj4S1ezFXaXNZaQB82qmqqQJtIyor%2BwuzoW6Uwb7tpdtK%2FphqMDJ%2Bl4VlUbOnLIAlA4wzK2eH98RENef5lAsVTjB&X-Amz-Signature=7d3b14001cd5698e584a09ac70f1570d13264ffcba9058bac4f0732ce97c0ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMQBS6L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCU9Ai%2BPuxpIsvYM4y3Qo6PoaAKupEoZhL2nMx%2Fv0OJwIhAL6PoOGPcSNmI%2FLExw1ZdO9gLjdGA%2F1Q38EtuOkBoi04KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhn3AT%2FekHYSGqd6Yq3ANfHQwGyDS1EhnOL7WORvAdm7HLPi8DpmWqxkakbbCKFJaBF%2BeqYzJRkJy73dEO6ZDA5fhjMA9I4h%2B420VPUduXMJ1tfu2KevO8nRZUeo5%2BJcNtA1odiL5sb6m5AMwHOhR4nr1HHGBnIbHqm6RDqMjlRQ0g6IdfmeFTKQ4GO2S8Y%2Ftp%2F5AQSF8GIZdE%2BO3r86gV1zt8iWNdB2oA4bRUcrJThGv6N1xNs610oWVK7dOsAicsuSd6admv7n2Q2H7bVLVb9SNXBQXg21%2BylfK4WNvO%2Fuk9Js3tudyvMHZQ%2F0v6F09JOiTvFYt8alYK3ajJ6A4nimkytyV8sLFF%2BPINcKz1qficWirU7QuiI8PJnnV%2BG6cRkNoS%2FvtY%2FW5ij2ZGdpKawJSJtYV3lM63NTzYLS0XTZEIx7QUnuQOwaaJ0TGoG88UWt6Fx9TNF9CYxUgf5HCMSQBTHFrncGTfKS7mpzBzx1B3iBY7NHJfG80LE5W5sAHphppj5PKgQj1BQ%2B4%2FrkjC4g2NT8Jpac6%2FYbjIX46skeuKNyaweiUYquPnkmxIbk0ADSZ5r3LC0E59EWElPCiZJXw0N4yXFGHpAYL7%2Beo9k9%2BLNOm68hI4yE3CKFSz8pB21fvdy5ottnWdHjCbppbFBjqkAZPLxvkRk1NGKBUuTacWn%2F2LfcA7Pt2WIqHBMh8sA6dVM6NqKMgPt3aST4fgJ2NNLGt2kBzKk8BHYhNWJ3TgL6S213sC8hpYIfSszlDlBIp%2F%2Fqo0NbavW%2FDRtYBx1p98D4wCZj4S1ezFXaXNZaQB82qmqqQJtIyor%2BwuzoW6Uwb7tpdtK%2FphqMDJ%2Bl4VlUbOnLIAlA4wzK2eH98RENef5lAsVTjB&X-Amz-Signature=50c3ea14a7b04fdae5866c9a9b42d3a750c06c49258343cb9dbec4987b00f55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMQBS6L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCU9Ai%2BPuxpIsvYM4y3Qo6PoaAKupEoZhL2nMx%2Fv0OJwIhAL6PoOGPcSNmI%2FLExw1ZdO9gLjdGA%2F1Q38EtuOkBoi04KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhn3AT%2FekHYSGqd6Yq3ANfHQwGyDS1EhnOL7WORvAdm7HLPi8DpmWqxkakbbCKFJaBF%2BeqYzJRkJy73dEO6ZDA5fhjMA9I4h%2B420VPUduXMJ1tfu2KevO8nRZUeo5%2BJcNtA1odiL5sb6m5AMwHOhR4nr1HHGBnIbHqm6RDqMjlRQ0g6IdfmeFTKQ4GO2S8Y%2Ftp%2F5AQSF8GIZdE%2BO3r86gV1zt8iWNdB2oA4bRUcrJThGv6N1xNs610oWVK7dOsAicsuSd6admv7n2Q2H7bVLVb9SNXBQXg21%2BylfK4WNvO%2Fuk9Js3tudyvMHZQ%2F0v6F09JOiTvFYt8alYK3ajJ6A4nimkytyV8sLFF%2BPINcKz1qficWirU7QuiI8PJnnV%2BG6cRkNoS%2FvtY%2FW5ij2ZGdpKawJSJtYV3lM63NTzYLS0XTZEIx7QUnuQOwaaJ0TGoG88UWt6Fx9TNF9CYxUgf5HCMSQBTHFrncGTfKS7mpzBzx1B3iBY7NHJfG80LE5W5sAHphppj5PKgQj1BQ%2B4%2FrkjC4g2NT8Jpac6%2FYbjIX46skeuKNyaweiUYquPnkmxIbk0ADSZ5r3LC0E59EWElPCiZJXw0N4yXFGHpAYL7%2Beo9k9%2BLNOm68hI4yE3CKFSz8pB21fvdy5ottnWdHjCbppbFBjqkAZPLxvkRk1NGKBUuTacWn%2F2LfcA7Pt2WIqHBMh8sA6dVM6NqKMgPt3aST4fgJ2NNLGt2kBzKk8BHYhNWJ3TgL6S213sC8hpYIfSszlDlBIp%2F%2Fqo0NbavW%2FDRtYBx1p98D4wCZj4S1ezFXaXNZaQB82qmqqQJtIyor%2BwuzoW6Uwb7tpdtK%2FphqMDJ%2Bl4VlUbOnLIAlA4wzK2eH98RENef5lAsVTjB&X-Amz-Signature=e6e45cb7f5a599ac996e47cf137e73e198b562fdd2d8335d9f22299d74d6ab20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMQBS6L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCU9Ai%2BPuxpIsvYM4y3Qo6PoaAKupEoZhL2nMx%2Fv0OJwIhAL6PoOGPcSNmI%2FLExw1ZdO9gLjdGA%2F1Q38EtuOkBoi04KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhn3AT%2FekHYSGqd6Yq3ANfHQwGyDS1EhnOL7WORvAdm7HLPi8DpmWqxkakbbCKFJaBF%2BeqYzJRkJy73dEO6ZDA5fhjMA9I4h%2B420VPUduXMJ1tfu2KevO8nRZUeo5%2BJcNtA1odiL5sb6m5AMwHOhR4nr1HHGBnIbHqm6RDqMjlRQ0g6IdfmeFTKQ4GO2S8Y%2Ftp%2F5AQSF8GIZdE%2BO3r86gV1zt8iWNdB2oA4bRUcrJThGv6N1xNs610oWVK7dOsAicsuSd6admv7n2Q2H7bVLVb9SNXBQXg21%2BylfK4WNvO%2Fuk9Js3tudyvMHZQ%2F0v6F09JOiTvFYt8alYK3ajJ6A4nimkytyV8sLFF%2BPINcKz1qficWirU7QuiI8PJnnV%2BG6cRkNoS%2FvtY%2FW5ij2ZGdpKawJSJtYV3lM63NTzYLS0XTZEIx7QUnuQOwaaJ0TGoG88UWt6Fx9TNF9CYxUgf5HCMSQBTHFrncGTfKS7mpzBzx1B3iBY7NHJfG80LE5W5sAHphppj5PKgQj1BQ%2B4%2FrkjC4g2NT8Jpac6%2FYbjIX46skeuKNyaweiUYquPnkmxIbk0ADSZ5r3LC0E59EWElPCiZJXw0N4yXFGHpAYL7%2Beo9k9%2BLNOm68hI4yE3CKFSz8pB21fvdy5ottnWdHjCbppbFBjqkAZPLxvkRk1NGKBUuTacWn%2F2LfcA7Pt2WIqHBMh8sA6dVM6NqKMgPt3aST4fgJ2NNLGt2kBzKk8BHYhNWJ3TgL6S213sC8hpYIfSszlDlBIp%2F%2Fqo0NbavW%2FDRtYBx1p98D4wCZj4S1ezFXaXNZaQB82qmqqQJtIyor%2BwuzoW6Uwb7tpdtK%2FphqMDJ%2Bl4VlUbOnLIAlA4wzK2eH98RENef5lAsVTjB&X-Amz-Signature=439043735960ec1ca6771bb95b1520c328b333866445917deec99ea0423ac73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMQBS6L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCU9Ai%2BPuxpIsvYM4y3Qo6PoaAKupEoZhL2nMx%2Fv0OJwIhAL6PoOGPcSNmI%2FLExw1ZdO9gLjdGA%2F1Q38EtuOkBoi04KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhn3AT%2FekHYSGqd6Yq3ANfHQwGyDS1EhnOL7WORvAdm7HLPi8DpmWqxkakbbCKFJaBF%2BeqYzJRkJy73dEO6ZDA5fhjMA9I4h%2B420VPUduXMJ1tfu2KevO8nRZUeo5%2BJcNtA1odiL5sb6m5AMwHOhR4nr1HHGBnIbHqm6RDqMjlRQ0g6IdfmeFTKQ4GO2S8Y%2Ftp%2F5AQSF8GIZdE%2BO3r86gV1zt8iWNdB2oA4bRUcrJThGv6N1xNs610oWVK7dOsAicsuSd6admv7n2Q2H7bVLVb9SNXBQXg21%2BylfK4WNvO%2Fuk9Js3tudyvMHZQ%2F0v6F09JOiTvFYt8alYK3ajJ6A4nimkytyV8sLFF%2BPINcKz1qficWirU7QuiI8PJnnV%2BG6cRkNoS%2FvtY%2FW5ij2ZGdpKawJSJtYV3lM63NTzYLS0XTZEIx7QUnuQOwaaJ0TGoG88UWt6Fx9TNF9CYxUgf5HCMSQBTHFrncGTfKS7mpzBzx1B3iBY7NHJfG80LE5W5sAHphppj5PKgQj1BQ%2B4%2FrkjC4g2NT8Jpac6%2FYbjIX46skeuKNyaweiUYquPnkmxIbk0ADSZ5r3LC0E59EWElPCiZJXw0N4yXFGHpAYL7%2Beo9k9%2BLNOm68hI4yE3CKFSz8pB21fvdy5ottnWdHjCbppbFBjqkAZPLxvkRk1NGKBUuTacWn%2F2LfcA7Pt2WIqHBMh8sA6dVM6NqKMgPt3aST4fgJ2NNLGt2kBzKk8BHYhNWJ3TgL6S213sC8hpYIfSszlDlBIp%2F%2Fqo0NbavW%2FDRtYBx1p98D4wCZj4S1ezFXaXNZaQB82qmqqQJtIyor%2BwuzoW6Uwb7tpdtK%2FphqMDJ%2Bl4VlUbOnLIAlA4wzK2eH98RENef5lAsVTjB&X-Amz-Signature=8f00a2f3d0cd4205383e755a06457985f63a3f504f7b681bdc48c5a6457ebc28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMQBS6L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCU9Ai%2BPuxpIsvYM4y3Qo6PoaAKupEoZhL2nMx%2Fv0OJwIhAL6PoOGPcSNmI%2FLExw1ZdO9gLjdGA%2F1Q38EtuOkBoi04KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhn3AT%2FekHYSGqd6Yq3ANfHQwGyDS1EhnOL7WORvAdm7HLPi8DpmWqxkakbbCKFJaBF%2BeqYzJRkJy73dEO6ZDA5fhjMA9I4h%2B420VPUduXMJ1tfu2KevO8nRZUeo5%2BJcNtA1odiL5sb6m5AMwHOhR4nr1HHGBnIbHqm6RDqMjlRQ0g6IdfmeFTKQ4GO2S8Y%2Ftp%2F5AQSF8GIZdE%2BO3r86gV1zt8iWNdB2oA4bRUcrJThGv6N1xNs610oWVK7dOsAicsuSd6admv7n2Q2H7bVLVb9SNXBQXg21%2BylfK4WNvO%2Fuk9Js3tudyvMHZQ%2F0v6F09JOiTvFYt8alYK3ajJ6A4nimkytyV8sLFF%2BPINcKz1qficWirU7QuiI8PJnnV%2BG6cRkNoS%2FvtY%2FW5ij2ZGdpKawJSJtYV3lM63NTzYLS0XTZEIx7QUnuQOwaaJ0TGoG88UWt6Fx9TNF9CYxUgf5HCMSQBTHFrncGTfKS7mpzBzx1B3iBY7NHJfG80LE5W5sAHphppj5PKgQj1BQ%2B4%2FrkjC4g2NT8Jpac6%2FYbjIX46skeuKNyaweiUYquPnkmxIbk0ADSZ5r3LC0E59EWElPCiZJXw0N4yXFGHpAYL7%2Beo9k9%2BLNOm68hI4yE3CKFSz8pB21fvdy5ottnWdHjCbppbFBjqkAZPLxvkRk1NGKBUuTacWn%2F2LfcA7Pt2WIqHBMh8sA6dVM6NqKMgPt3aST4fgJ2NNLGt2kBzKk8BHYhNWJ3TgL6S213sC8hpYIfSszlDlBIp%2F%2Fqo0NbavW%2FDRtYBx1p98D4wCZj4S1ezFXaXNZaQB82qmqqQJtIyor%2BwuzoW6Uwb7tpdtK%2FphqMDJ%2Bl4VlUbOnLIAlA4wzK2eH98RENef5lAsVTjB&X-Amz-Signature=6bed25eae262938026c6fff4fd4da687f056ee46a18f7d7729dcb95b769c6431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMQBS6L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCU9Ai%2BPuxpIsvYM4y3Qo6PoaAKupEoZhL2nMx%2Fv0OJwIhAL6PoOGPcSNmI%2FLExw1ZdO9gLjdGA%2F1Q38EtuOkBoi04KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhn3AT%2FekHYSGqd6Yq3ANfHQwGyDS1EhnOL7WORvAdm7HLPi8DpmWqxkakbbCKFJaBF%2BeqYzJRkJy73dEO6ZDA5fhjMA9I4h%2B420VPUduXMJ1tfu2KevO8nRZUeo5%2BJcNtA1odiL5sb6m5AMwHOhR4nr1HHGBnIbHqm6RDqMjlRQ0g6IdfmeFTKQ4GO2S8Y%2Ftp%2F5AQSF8GIZdE%2BO3r86gV1zt8iWNdB2oA4bRUcrJThGv6N1xNs610oWVK7dOsAicsuSd6admv7n2Q2H7bVLVb9SNXBQXg21%2BylfK4WNvO%2Fuk9Js3tudyvMHZQ%2F0v6F09JOiTvFYt8alYK3ajJ6A4nimkytyV8sLFF%2BPINcKz1qficWirU7QuiI8PJnnV%2BG6cRkNoS%2FvtY%2FW5ij2ZGdpKawJSJtYV3lM63NTzYLS0XTZEIx7QUnuQOwaaJ0TGoG88UWt6Fx9TNF9CYxUgf5HCMSQBTHFrncGTfKS7mpzBzx1B3iBY7NHJfG80LE5W5sAHphppj5PKgQj1BQ%2B4%2FrkjC4g2NT8Jpac6%2FYbjIX46skeuKNyaweiUYquPnkmxIbk0ADSZ5r3LC0E59EWElPCiZJXw0N4yXFGHpAYL7%2Beo9k9%2BLNOm68hI4yE3CKFSz8pB21fvdy5ottnWdHjCbppbFBjqkAZPLxvkRk1NGKBUuTacWn%2F2LfcA7Pt2WIqHBMh8sA6dVM6NqKMgPt3aST4fgJ2NNLGt2kBzKk8BHYhNWJ3TgL6S213sC8hpYIfSszlDlBIp%2F%2Fqo0NbavW%2FDRtYBx1p98D4wCZj4S1ezFXaXNZaQB82qmqqQJtIyor%2BwuzoW6Uwb7tpdtK%2FphqMDJ%2Bl4VlUbOnLIAlA4wzK2eH98RENef5lAsVTjB&X-Amz-Signature=598dc9b39b836afcf8d2f5f145193fcc3d7b13f3e21c382d5a4e111e17667445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMQBS6L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCU9Ai%2BPuxpIsvYM4y3Qo6PoaAKupEoZhL2nMx%2Fv0OJwIhAL6PoOGPcSNmI%2FLExw1ZdO9gLjdGA%2F1Q38EtuOkBoi04KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhn3AT%2FekHYSGqd6Yq3ANfHQwGyDS1EhnOL7WORvAdm7HLPi8DpmWqxkakbbCKFJaBF%2BeqYzJRkJy73dEO6ZDA5fhjMA9I4h%2B420VPUduXMJ1tfu2KevO8nRZUeo5%2BJcNtA1odiL5sb6m5AMwHOhR4nr1HHGBnIbHqm6RDqMjlRQ0g6IdfmeFTKQ4GO2S8Y%2Ftp%2F5AQSF8GIZdE%2BO3r86gV1zt8iWNdB2oA4bRUcrJThGv6N1xNs610oWVK7dOsAicsuSd6admv7n2Q2H7bVLVb9SNXBQXg21%2BylfK4WNvO%2Fuk9Js3tudyvMHZQ%2F0v6F09JOiTvFYt8alYK3ajJ6A4nimkytyV8sLFF%2BPINcKz1qficWirU7QuiI8PJnnV%2BG6cRkNoS%2FvtY%2FW5ij2ZGdpKawJSJtYV3lM63NTzYLS0XTZEIx7QUnuQOwaaJ0TGoG88UWt6Fx9TNF9CYxUgf5HCMSQBTHFrncGTfKS7mpzBzx1B3iBY7NHJfG80LE5W5sAHphppj5PKgQj1BQ%2B4%2FrkjC4g2NT8Jpac6%2FYbjIX46skeuKNyaweiUYquPnkmxIbk0ADSZ5r3LC0E59EWElPCiZJXw0N4yXFGHpAYL7%2Beo9k9%2BLNOm68hI4yE3CKFSz8pB21fvdy5ottnWdHjCbppbFBjqkAZPLxvkRk1NGKBUuTacWn%2F2LfcA7Pt2WIqHBMh8sA6dVM6NqKMgPt3aST4fgJ2NNLGt2kBzKk8BHYhNWJ3TgL6S213sC8hpYIfSszlDlBIp%2F%2Fqo0NbavW%2FDRtYBx1p98D4wCZj4S1ezFXaXNZaQB82qmqqQJtIyor%2BwuzoW6Uwb7tpdtK%2FphqMDJ%2Bl4VlUbOnLIAlA4wzK2eH98RENef5lAsVTjB&X-Amz-Signature=61c64f48486a9828903219c4dbf23dfe2eb7a9b4c4b7fb3d85a91647e4d408f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWWIONN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVOyCHCEyt579SiRYiPLjpaKjVDav5Ci6O4V922udH9wIhAKSfA3sINJlwNgA5UHm3nvKVJrfaw8PPsmZLaPZX4z%2FTKv8DCC8QABoMNjM3NDIzMTgzODA1IgykjvEB9tVIbQpYoo8q3AMDmLmuq3NbgqCJjDL3U7K5go244xiLNcTA%2BL9%2FuKsxPT0et2PJvkLONKltW%2BTwmkISgmR6lGUWd3f0B9q6HZ6ot2nfNUvnYezSmEHLdyXFaklVWAYt7gTv3il%2FlLQF93NTZWxEFtnIfw1QGMp00PwJN%2FWf7d%2FJBFfehx9Vy2nYzpjBo4garYXYZwCdNlWJ%2FXoEBX0kg%2FhMr%2BRGMyPKF9fglh0ir5FHI9UYFzKUITBfuicfmSwBBC6BU%2FvFDzMYOvq59Xch8s1fzMZyB1rhrZ%2FJXKJN0IDIf1muzZBjEFA0lKx%2Bi5lvY%2BQVxvoIoTRjPgXkBb6dtMM2Lnis8Wte0XW5%2BkDIuTaYqa%2FhOVX9AoyVo31BuQOqh1X%2Fc5SGKOuruVI453Jy8mHICKiv2vMUSbgyM%2B4MWBI0SKHIEgahAGscoE8XZ58Jd%2BSbhnxFNmlp9WnbfYjQwAACoXokuPB4HP7I2kHuaJ8lYRcxQl4%2FnAZ5cY8tQ5eZsNihxLhn0eXzgHxxnCrphlM0sC4UpwwjpLpV8U%2BuuVtVYYzVq2%2BEBnj%2B8fjZy3jX9YKZvN9B7vhtS%2BNPgJ2%2BCETnm4OYUkVF2BpnT5IOqSkts7NUKcZrdqSq%2FD39itLUL6Eyjt4G%2BzCO0Ka%2BBjqkAQBiPcA4ckchwMIJmICSIoUrSh962UBXYnfZ%2BHcyvp4WxwirPX3Hai2JmHJeIwEJ7XRRgH8wDyE1Wt7UO4VRiafo30caPF8BvTrFAeqRLibe32QJi3YTELk%2BTttCJf8I%2BRzwsr9PFEErtsYloKI6wcxUmdV7xtyAUw6wB5goB689e%2BKp1B%2BZgzSoDGvdZPt%2FCuRxplByrX5R971vuCe9yYr%2FCd4F&X-Amz-Signature=db9b02307f5f6a2866cde99beeb80a2a5ac1b74db1ae47bcd001cdfe9f9e7c57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWWIONN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVOyCHCEyt579SiRYiPLjpaKjVDav5Ci6O4V922udH9wIhAKSfA3sINJlwNgA5UHm3nvKVJrfaw8PPsmZLaPZX4z%2FTKv8DCC8QABoMNjM3NDIzMTgzODA1IgykjvEB9tVIbQpYoo8q3AMDmLmuq3NbgqCJjDL3U7K5go244xiLNcTA%2BL9%2FuKsxPT0et2PJvkLONKltW%2BTwmkISgmR6lGUWd3f0B9q6HZ6ot2nfNUvnYezSmEHLdyXFaklVWAYt7gTv3il%2FlLQF93NTZWxEFtnIfw1QGMp00PwJN%2FWf7d%2FJBFfehx9Vy2nYzpjBo4garYXYZwCdNlWJ%2FXoEBX0kg%2FhMr%2BRGMyPKF9fglh0ir5FHI9UYFzKUITBfuicfmSwBBC6BU%2FvFDzMYOvq59Xch8s1fzMZyB1rhrZ%2FJXKJN0IDIf1muzZBjEFA0lKx%2Bi5lvY%2BQVxvoIoTRjPgXkBb6dtMM2Lnis8Wte0XW5%2BkDIuTaYqa%2FhOVX9AoyVo31BuQOqh1X%2Fc5SGKOuruVI453Jy8mHICKiv2vMUSbgyM%2B4MWBI0SKHIEgahAGscoE8XZ58Jd%2BSbhnxFNmlp9WnbfYjQwAACoXokuPB4HP7I2kHuaJ8lYRcxQl4%2FnAZ5cY8tQ5eZsNihxLhn0eXzgHxxnCrphlM0sC4UpwwjpLpV8U%2BuuVtVYYzVq2%2BEBnj%2B8fjZy3jX9YKZvN9B7vhtS%2BNPgJ2%2BCETnm4OYUkVF2BpnT5IOqSkts7NUKcZrdqSq%2FD39itLUL6Eyjt4G%2BzCO0Ka%2BBjqkAQBiPcA4ckchwMIJmICSIoUrSh962UBXYnfZ%2BHcyvp4WxwirPX3Hai2JmHJeIwEJ7XRRgH8wDyE1Wt7UO4VRiafo30caPF8BvTrFAeqRLibe32QJi3YTELk%2BTttCJf8I%2BRzwsr9PFEErtsYloKI6wcxUmdV7xtyAUw6wB5goB689e%2BKp1B%2BZgzSoDGvdZPt%2FCuRxplByrX5R971vuCe9yYr%2FCd4F&X-Amz-Signature=35f8def4c8c886a6567098b1bc98feecdf31077d1a4cb1c561d145fa82e08b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWWIONN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVOyCHCEyt579SiRYiPLjpaKjVDav5Ci6O4V922udH9wIhAKSfA3sINJlwNgA5UHm3nvKVJrfaw8PPsmZLaPZX4z%2FTKv8DCC8QABoMNjM3NDIzMTgzODA1IgykjvEB9tVIbQpYoo8q3AMDmLmuq3NbgqCJjDL3U7K5go244xiLNcTA%2BL9%2FuKsxPT0et2PJvkLONKltW%2BTwmkISgmR6lGUWd3f0B9q6HZ6ot2nfNUvnYezSmEHLdyXFaklVWAYt7gTv3il%2FlLQF93NTZWxEFtnIfw1QGMp00PwJN%2FWf7d%2FJBFfehx9Vy2nYzpjBo4garYXYZwCdNlWJ%2FXoEBX0kg%2FhMr%2BRGMyPKF9fglh0ir5FHI9UYFzKUITBfuicfmSwBBC6BU%2FvFDzMYOvq59Xch8s1fzMZyB1rhrZ%2FJXKJN0IDIf1muzZBjEFA0lKx%2Bi5lvY%2BQVxvoIoTRjPgXkBb6dtMM2Lnis8Wte0XW5%2BkDIuTaYqa%2FhOVX9AoyVo31BuQOqh1X%2Fc5SGKOuruVI453Jy8mHICKiv2vMUSbgyM%2B4MWBI0SKHIEgahAGscoE8XZ58Jd%2BSbhnxFNmlp9WnbfYjQwAACoXokuPB4HP7I2kHuaJ8lYRcxQl4%2FnAZ5cY8tQ5eZsNihxLhn0eXzgHxxnCrphlM0sC4UpwwjpLpV8U%2BuuVtVYYzVq2%2BEBnj%2B8fjZy3jX9YKZvN9B7vhtS%2BNPgJ2%2BCETnm4OYUkVF2BpnT5IOqSkts7NUKcZrdqSq%2FD39itLUL6Eyjt4G%2BzCO0Ka%2BBjqkAQBiPcA4ckchwMIJmICSIoUrSh962UBXYnfZ%2BHcyvp4WxwirPX3Hai2JmHJeIwEJ7XRRgH8wDyE1Wt7UO4VRiafo30caPF8BvTrFAeqRLibe32QJi3YTELk%2BTttCJf8I%2BRzwsr9PFEErtsYloKI6wcxUmdV7xtyAUw6wB5goB689e%2BKp1B%2BZgzSoDGvdZPt%2FCuRxplByrX5R971vuCe9yYr%2FCd4F&X-Amz-Signature=182f7293ac841c6866c5c429db7e922ecbb088ee798768a6c23c213b4f63870e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWWIONN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVOyCHCEyt579SiRYiPLjpaKjVDav5Ci6O4V922udH9wIhAKSfA3sINJlwNgA5UHm3nvKVJrfaw8PPsmZLaPZX4z%2FTKv8DCC8QABoMNjM3NDIzMTgzODA1IgykjvEB9tVIbQpYoo8q3AMDmLmuq3NbgqCJjDL3U7K5go244xiLNcTA%2BL9%2FuKsxPT0et2PJvkLONKltW%2BTwmkISgmR6lGUWd3f0B9q6HZ6ot2nfNUvnYezSmEHLdyXFaklVWAYt7gTv3il%2FlLQF93NTZWxEFtnIfw1QGMp00PwJN%2FWf7d%2FJBFfehx9Vy2nYzpjBo4garYXYZwCdNlWJ%2FXoEBX0kg%2FhMr%2BRGMyPKF9fglh0ir5FHI9UYFzKUITBfuicfmSwBBC6BU%2FvFDzMYOvq59Xch8s1fzMZyB1rhrZ%2FJXKJN0IDIf1muzZBjEFA0lKx%2Bi5lvY%2BQVxvoIoTRjPgXkBb6dtMM2Lnis8Wte0XW5%2BkDIuTaYqa%2FhOVX9AoyVo31BuQOqh1X%2Fc5SGKOuruVI453Jy8mHICKiv2vMUSbgyM%2B4MWBI0SKHIEgahAGscoE8XZ58Jd%2BSbhnxFNmlp9WnbfYjQwAACoXokuPB4HP7I2kHuaJ8lYRcxQl4%2FnAZ5cY8tQ5eZsNihxLhn0eXzgHxxnCrphlM0sC4UpwwjpLpV8U%2BuuVtVYYzVq2%2BEBnj%2B8fjZy3jX9YKZvN9B7vhtS%2BNPgJ2%2BCETnm4OYUkVF2BpnT5IOqSkts7NUKcZrdqSq%2FD39itLUL6Eyjt4G%2BzCO0Ka%2BBjqkAQBiPcA4ckchwMIJmICSIoUrSh962UBXYnfZ%2BHcyvp4WxwirPX3Hai2JmHJeIwEJ7XRRgH8wDyE1Wt7UO4VRiafo30caPF8BvTrFAeqRLibe32QJi3YTELk%2BTttCJf8I%2BRzwsr9PFEErtsYloKI6wcxUmdV7xtyAUw6wB5goB689e%2BKp1B%2BZgzSoDGvdZPt%2FCuRxplByrX5R971vuCe9yYr%2FCd4F&X-Amz-Signature=ac7b8b211391383bcc52d88661b3ad88044919123a216eaaa35657f940c85a89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWWIONN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVOyCHCEyt579SiRYiPLjpaKjVDav5Ci6O4V922udH9wIhAKSfA3sINJlwNgA5UHm3nvKVJrfaw8PPsmZLaPZX4z%2FTKv8DCC8QABoMNjM3NDIzMTgzODA1IgykjvEB9tVIbQpYoo8q3AMDmLmuq3NbgqCJjDL3U7K5go244xiLNcTA%2BL9%2FuKsxPT0et2PJvkLONKltW%2BTwmkISgmR6lGUWd3f0B9q6HZ6ot2nfNUvnYezSmEHLdyXFaklVWAYt7gTv3il%2FlLQF93NTZWxEFtnIfw1QGMp00PwJN%2FWf7d%2FJBFfehx9Vy2nYzpjBo4garYXYZwCdNlWJ%2FXoEBX0kg%2FhMr%2BRGMyPKF9fglh0ir5FHI9UYFzKUITBfuicfmSwBBC6BU%2FvFDzMYOvq59Xch8s1fzMZyB1rhrZ%2FJXKJN0IDIf1muzZBjEFA0lKx%2Bi5lvY%2BQVxvoIoTRjPgXkBb6dtMM2Lnis8Wte0XW5%2BkDIuTaYqa%2FhOVX9AoyVo31BuQOqh1X%2Fc5SGKOuruVI453Jy8mHICKiv2vMUSbgyM%2B4MWBI0SKHIEgahAGscoE8XZ58Jd%2BSbhnxFNmlp9WnbfYjQwAACoXokuPB4HP7I2kHuaJ8lYRcxQl4%2FnAZ5cY8tQ5eZsNihxLhn0eXzgHxxnCrphlM0sC4UpwwjpLpV8U%2BuuVtVYYzVq2%2BEBnj%2B8fjZy3jX9YKZvN9B7vhtS%2BNPgJ2%2BCETnm4OYUkVF2BpnT5IOqSkts7NUKcZrdqSq%2FD39itLUL6Eyjt4G%2BzCO0Ka%2BBjqkAQBiPcA4ckchwMIJmICSIoUrSh962UBXYnfZ%2BHcyvp4WxwirPX3Hai2JmHJeIwEJ7XRRgH8wDyE1Wt7UO4VRiafo30caPF8BvTrFAeqRLibe32QJi3YTELk%2BTttCJf8I%2BRzwsr9PFEErtsYloKI6wcxUmdV7xtyAUw6wB5goB689e%2BKp1B%2BZgzSoDGvdZPt%2FCuRxplByrX5R971vuCe9yYr%2FCd4F&X-Amz-Signature=ca5eedf2fca3f7efc4d9727bca5afa7f8b9def424861ddf1232d5880c13ebb4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWWIONN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVOyCHCEyt579SiRYiPLjpaKjVDav5Ci6O4V922udH9wIhAKSfA3sINJlwNgA5UHm3nvKVJrfaw8PPsmZLaPZX4z%2FTKv8DCC8QABoMNjM3NDIzMTgzODA1IgykjvEB9tVIbQpYoo8q3AMDmLmuq3NbgqCJjDL3U7K5go244xiLNcTA%2BL9%2FuKsxPT0et2PJvkLONKltW%2BTwmkISgmR6lGUWd3f0B9q6HZ6ot2nfNUvnYezSmEHLdyXFaklVWAYt7gTv3il%2FlLQF93NTZWxEFtnIfw1QGMp00PwJN%2FWf7d%2FJBFfehx9Vy2nYzpjBo4garYXYZwCdNlWJ%2FXoEBX0kg%2FhMr%2BRGMyPKF9fglh0ir5FHI9UYFzKUITBfuicfmSwBBC6BU%2FvFDzMYOvq59Xch8s1fzMZyB1rhrZ%2FJXKJN0IDIf1muzZBjEFA0lKx%2Bi5lvY%2BQVxvoIoTRjPgXkBb6dtMM2Lnis8Wte0XW5%2BkDIuTaYqa%2FhOVX9AoyVo31BuQOqh1X%2Fc5SGKOuruVI453Jy8mHICKiv2vMUSbgyM%2B4MWBI0SKHIEgahAGscoE8XZ58Jd%2BSbhnxFNmlp9WnbfYjQwAACoXokuPB4HP7I2kHuaJ8lYRcxQl4%2FnAZ5cY8tQ5eZsNihxLhn0eXzgHxxnCrphlM0sC4UpwwjpLpV8U%2BuuVtVYYzVq2%2BEBnj%2B8fjZy3jX9YKZvN9B7vhtS%2BNPgJ2%2BCETnm4OYUkVF2BpnT5IOqSkts7NUKcZrdqSq%2FD39itLUL6Eyjt4G%2BzCO0Ka%2BBjqkAQBiPcA4ckchwMIJmICSIoUrSh962UBXYnfZ%2BHcyvp4WxwirPX3Hai2JmHJeIwEJ7XRRgH8wDyE1Wt7UO4VRiafo30caPF8BvTrFAeqRLibe32QJi3YTELk%2BTttCJf8I%2BRzwsr9PFEErtsYloKI6wcxUmdV7xtyAUw6wB5goB689e%2BKp1B%2BZgzSoDGvdZPt%2FCuRxplByrX5R971vuCe9yYr%2FCd4F&X-Amz-Signature=6425c6cd640f01ac6a91e1b47376811198acb45c34aaa7ae1b015fb0e9d3481c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWWIONN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVOyCHCEyt579SiRYiPLjpaKjVDav5Ci6O4V922udH9wIhAKSfA3sINJlwNgA5UHm3nvKVJrfaw8PPsmZLaPZX4z%2FTKv8DCC8QABoMNjM3NDIzMTgzODA1IgykjvEB9tVIbQpYoo8q3AMDmLmuq3NbgqCJjDL3U7K5go244xiLNcTA%2BL9%2FuKsxPT0et2PJvkLONKltW%2BTwmkISgmR6lGUWd3f0B9q6HZ6ot2nfNUvnYezSmEHLdyXFaklVWAYt7gTv3il%2FlLQF93NTZWxEFtnIfw1QGMp00PwJN%2FWf7d%2FJBFfehx9Vy2nYzpjBo4garYXYZwCdNlWJ%2FXoEBX0kg%2FhMr%2BRGMyPKF9fglh0ir5FHI9UYFzKUITBfuicfmSwBBC6BU%2FvFDzMYOvq59Xch8s1fzMZyB1rhrZ%2FJXKJN0IDIf1muzZBjEFA0lKx%2Bi5lvY%2BQVxvoIoTRjPgXkBb6dtMM2Lnis8Wte0XW5%2BkDIuTaYqa%2FhOVX9AoyVo31BuQOqh1X%2Fc5SGKOuruVI453Jy8mHICKiv2vMUSbgyM%2B4MWBI0SKHIEgahAGscoE8XZ58Jd%2BSbhnxFNmlp9WnbfYjQwAACoXokuPB4HP7I2kHuaJ8lYRcxQl4%2FnAZ5cY8tQ5eZsNihxLhn0eXzgHxxnCrphlM0sC4UpwwjpLpV8U%2BuuVtVYYzVq2%2BEBnj%2B8fjZy3jX9YKZvN9B7vhtS%2BNPgJ2%2BCETnm4OYUkVF2BpnT5IOqSkts7NUKcZrdqSq%2FD39itLUL6Eyjt4G%2BzCO0Ka%2BBjqkAQBiPcA4ckchwMIJmICSIoUrSh962UBXYnfZ%2BHcyvp4WxwirPX3Hai2JmHJeIwEJ7XRRgH8wDyE1Wt7UO4VRiafo30caPF8BvTrFAeqRLibe32QJi3YTELk%2BTttCJf8I%2BRzwsr9PFEErtsYloKI6wcxUmdV7xtyAUw6wB5goB689e%2BKp1B%2BZgzSoDGvdZPt%2FCuRxplByrX5R971vuCe9yYr%2FCd4F&X-Amz-Signature=c3c4b43d1078c2d0632754fbc9bebc3cf06e9c153c3c37ceefcae5a18e651d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWWIONN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVOyCHCEyt579SiRYiPLjpaKjVDav5Ci6O4V922udH9wIhAKSfA3sINJlwNgA5UHm3nvKVJrfaw8PPsmZLaPZX4z%2FTKv8DCC8QABoMNjM3NDIzMTgzODA1IgykjvEB9tVIbQpYoo8q3AMDmLmuq3NbgqCJjDL3U7K5go244xiLNcTA%2BL9%2FuKsxPT0et2PJvkLONKltW%2BTwmkISgmR6lGUWd3f0B9q6HZ6ot2nfNUvnYezSmEHLdyXFaklVWAYt7gTv3il%2FlLQF93NTZWxEFtnIfw1QGMp00PwJN%2FWf7d%2FJBFfehx9Vy2nYzpjBo4garYXYZwCdNlWJ%2FXoEBX0kg%2FhMr%2BRGMyPKF9fglh0ir5FHI9UYFzKUITBfuicfmSwBBC6BU%2FvFDzMYOvq59Xch8s1fzMZyB1rhrZ%2FJXKJN0IDIf1muzZBjEFA0lKx%2Bi5lvY%2BQVxvoIoTRjPgXkBb6dtMM2Lnis8Wte0XW5%2BkDIuTaYqa%2FhOVX9AoyVo31BuQOqh1X%2Fc5SGKOuruVI453Jy8mHICKiv2vMUSbgyM%2B4MWBI0SKHIEgahAGscoE8XZ58Jd%2BSbhnxFNmlp9WnbfYjQwAACoXokuPB4HP7I2kHuaJ8lYRcxQl4%2FnAZ5cY8tQ5eZsNihxLhn0eXzgHxxnCrphlM0sC4UpwwjpLpV8U%2BuuVtVYYzVq2%2BEBnj%2B8fjZy3jX9YKZvN9B7vhtS%2BNPgJ2%2BCETnm4OYUkVF2BpnT5IOqSkts7NUKcZrdqSq%2FD39itLUL6Eyjt4G%2BzCO0Ka%2BBjqkAQBiPcA4ckchwMIJmICSIoUrSh962UBXYnfZ%2BHcyvp4WxwirPX3Hai2JmHJeIwEJ7XRRgH8wDyE1Wt7UO4VRiafo30caPF8BvTrFAeqRLibe32QJi3YTELk%2BTttCJf8I%2BRzwsr9PFEErtsYloKI6wcxUmdV7xtyAUw6wB5goB689e%2BKp1B%2BZgzSoDGvdZPt%2FCuRxplByrX5R971vuCe9yYr%2FCd4F&X-Amz-Signature=6e0b5c6856b82627425a4a9b80cd3bf3e1da727d8a658a0b8ed8a33a2d27055f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

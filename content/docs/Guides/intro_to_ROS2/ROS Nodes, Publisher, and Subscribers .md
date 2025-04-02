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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KMFTDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD69xG0UBUq%2F%2FbvWCG5vATEn4qvJdbEnH0tjyHJWmrP0AIhAJape3wsQLdR7cVUNDgF3sa1dy94xyiGr18mhoZWD8RsKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqeIi3L4EvrkNv9Bgq3AMcRTUKo94mAmAyK7pDNvxgsZvOScJo5yKlDZ0QX6jOaOnwCSl0hbegAdpkkk6b3Zi3RTCstJw3yOl2f27b%2BK2xiqCLRKXXurCE0YtiUP1kP6bNX5cVT58EXtsAEphPw7wzM%2BwI1aM5LrReU3OeKkDDFVW7DuE7tWbQiRH6WK8yt97wArLYpeSBBg6U%2BK9RWzsSLN%2FX%2BxTO%2FTtNo0TbAFBYWfxsGHtYSKNuo2%2B%2FHwzNCGuXnYpkyEz5bZbtlATiALUHchQirIPm0c5BMCgH6CVV0rWi0JuSVIXCZbg6jrpRUvao9GhtWMQLU0AlzpKjBeiWsKgARy2RQp0NM9YsNHIdjlu8KuRTEO7awJ2ZlF1XDNP7ktI7P3d%2B7WN4OtkRY%2B2Wke2LlkfYW84RWPYJJLn6%2BRze%2F4%2FGogqyTfQbsRN%2B1YQYA%2BYuakCuUrgd0lUuKt4jEDlbrjcX6XDw4SW5R5kyhD7Q%2BqmkjX%2BnaZbHy%2BIJNA5zj3Tp0lFWImAt%2FTl97Et%2BEYjspCzMQaLNpNxGK3wxmCdhBGIUt012xaExOPqy%2Fd2kUHwjMSF%2B3%2FgiMd7%2Bj%2FtT7b1k0W4Ubm79Oi5VIrRaua4%2Fh2dTitCzdvSvxAUieZA70zaXzM0mELfgTDCh%2BLO%2FBjqkAc%2BtgzXJJEIQW33Qnvjj8L8Jthkq85wA%2BJjM3rhHBRbAYab%2BDvIBlZJ961AgjhVFMb%2FqbDJkd%2FXbOFLgBwiq3TOFLEoOpGIZS%2FGT6WRus%2F30kekdz2o4np7vubbySLVKD1VK8vS1DFPQzz8h%2BLP2JTWr8a8EYCzoBU%2FJHSxINOU8%2FtK3ezshKMwi2nlfPHKWHaBETGqrXpBZuByszvL3ezHm5eeS&X-Amz-Signature=437ab7a7b0dd858af459dcc0c0a94620921aaf5cdbe646d94532340fa9d1dbe2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KMFTDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD69xG0UBUq%2F%2FbvWCG5vATEn4qvJdbEnH0tjyHJWmrP0AIhAJape3wsQLdR7cVUNDgF3sa1dy94xyiGr18mhoZWD8RsKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqeIi3L4EvrkNv9Bgq3AMcRTUKo94mAmAyK7pDNvxgsZvOScJo5yKlDZ0QX6jOaOnwCSl0hbegAdpkkk6b3Zi3RTCstJw3yOl2f27b%2BK2xiqCLRKXXurCE0YtiUP1kP6bNX5cVT58EXtsAEphPw7wzM%2BwI1aM5LrReU3OeKkDDFVW7DuE7tWbQiRH6WK8yt97wArLYpeSBBg6U%2BK9RWzsSLN%2FX%2BxTO%2FTtNo0TbAFBYWfxsGHtYSKNuo2%2B%2FHwzNCGuXnYpkyEz5bZbtlATiALUHchQirIPm0c5BMCgH6CVV0rWi0JuSVIXCZbg6jrpRUvao9GhtWMQLU0AlzpKjBeiWsKgARy2RQp0NM9YsNHIdjlu8KuRTEO7awJ2ZlF1XDNP7ktI7P3d%2B7WN4OtkRY%2B2Wke2LlkfYW84RWPYJJLn6%2BRze%2F4%2FGogqyTfQbsRN%2B1YQYA%2BYuakCuUrgd0lUuKt4jEDlbrjcX6XDw4SW5R5kyhD7Q%2BqmkjX%2BnaZbHy%2BIJNA5zj3Tp0lFWImAt%2FTl97Et%2BEYjspCzMQaLNpNxGK3wxmCdhBGIUt012xaExOPqy%2Fd2kUHwjMSF%2B3%2FgiMd7%2Bj%2FtT7b1k0W4Ubm79Oi5VIrRaua4%2Fh2dTitCzdvSvxAUieZA70zaXzM0mELfgTDCh%2BLO%2FBjqkAc%2BtgzXJJEIQW33Qnvjj8L8Jthkq85wA%2BJjM3rhHBRbAYab%2BDvIBlZJ961AgjhVFMb%2FqbDJkd%2FXbOFLgBwiq3TOFLEoOpGIZS%2FGT6WRus%2F30kekdz2o4np7vubbySLVKD1VK8vS1DFPQzz8h%2BLP2JTWr8a8EYCzoBU%2FJHSxINOU8%2FtK3ezshKMwi2nlfPHKWHaBETGqrXpBZuByszvL3ezHm5eeS&X-Amz-Signature=8ae3c0b54d55ff99a0deda000a558da1ad524c4daec08c2154c58140fcae783f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KMFTDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD69xG0UBUq%2F%2FbvWCG5vATEn4qvJdbEnH0tjyHJWmrP0AIhAJape3wsQLdR7cVUNDgF3sa1dy94xyiGr18mhoZWD8RsKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqeIi3L4EvrkNv9Bgq3AMcRTUKo94mAmAyK7pDNvxgsZvOScJo5yKlDZ0QX6jOaOnwCSl0hbegAdpkkk6b3Zi3RTCstJw3yOl2f27b%2BK2xiqCLRKXXurCE0YtiUP1kP6bNX5cVT58EXtsAEphPw7wzM%2BwI1aM5LrReU3OeKkDDFVW7DuE7tWbQiRH6WK8yt97wArLYpeSBBg6U%2BK9RWzsSLN%2FX%2BxTO%2FTtNo0TbAFBYWfxsGHtYSKNuo2%2B%2FHwzNCGuXnYpkyEz5bZbtlATiALUHchQirIPm0c5BMCgH6CVV0rWi0JuSVIXCZbg6jrpRUvao9GhtWMQLU0AlzpKjBeiWsKgARy2RQp0NM9YsNHIdjlu8KuRTEO7awJ2ZlF1XDNP7ktI7P3d%2B7WN4OtkRY%2B2Wke2LlkfYW84RWPYJJLn6%2BRze%2F4%2FGogqyTfQbsRN%2B1YQYA%2BYuakCuUrgd0lUuKt4jEDlbrjcX6XDw4SW5R5kyhD7Q%2BqmkjX%2BnaZbHy%2BIJNA5zj3Tp0lFWImAt%2FTl97Et%2BEYjspCzMQaLNpNxGK3wxmCdhBGIUt012xaExOPqy%2Fd2kUHwjMSF%2B3%2FgiMd7%2Bj%2FtT7b1k0W4Ubm79Oi5VIrRaua4%2Fh2dTitCzdvSvxAUieZA70zaXzM0mELfgTDCh%2BLO%2FBjqkAc%2BtgzXJJEIQW33Qnvjj8L8Jthkq85wA%2BJjM3rhHBRbAYab%2BDvIBlZJ961AgjhVFMb%2FqbDJkd%2FXbOFLgBwiq3TOFLEoOpGIZS%2FGT6WRus%2F30kekdz2o4np7vubbySLVKD1VK8vS1DFPQzz8h%2BLP2JTWr8a8EYCzoBU%2FJHSxINOU8%2FtK3ezshKMwi2nlfPHKWHaBETGqrXpBZuByszvL3ezHm5eeS&X-Amz-Signature=7f0b3b77228059528c6b94dc02e9c18e1222812d063a613266da806b296ad6e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KMFTDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD69xG0UBUq%2F%2FbvWCG5vATEn4qvJdbEnH0tjyHJWmrP0AIhAJape3wsQLdR7cVUNDgF3sa1dy94xyiGr18mhoZWD8RsKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqeIi3L4EvrkNv9Bgq3AMcRTUKo94mAmAyK7pDNvxgsZvOScJo5yKlDZ0QX6jOaOnwCSl0hbegAdpkkk6b3Zi3RTCstJw3yOl2f27b%2BK2xiqCLRKXXurCE0YtiUP1kP6bNX5cVT58EXtsAEphPw7wzM%2BwI1aM5LrReU3OeKkDDFVW7DuE7tWbQiRH6WK8yt97wArLYpeSBBg6U%2BK9RWzsSLN%2FX%2BxTO%2FTtNo0TbAFBYWfxsGHtYSKNuo2%2B%2FHwzNCGuXnYpkyEz5bZbtlATiALUHchQirIPm0c5BMCgH6CVV0rWi0JuSVIXCZbg6jrpRUvao9GhtWMQLU0AlzpKjBeiWsKgARy2RQp0NM9YsNHIdjlu8KuRTEO7awJ2ZlF1XDNP7ktI7P3d%2B7WN4OtkRY%2B2Wke2LlkfYW84RWPYJJLn6%2BRze%2F4%2FGogqyTfQbsRN%2B1YQYA%2BYuakCuUrgd0lUuKt4jEDlbrjcX6XDw4SW5R5kyhD7Q%2BqmkjX%2BnaZbHy%2BIJNA5zj3Tp0lFWImAt%2FTl97Et%2BEYjspCzMQaLNpNxGK3wxmCdhBGIUt012xaExOPqy%2Fd2kUHwjMSF%2B3%2FgiMd7%2Bj%2FtT7b1k0W4Ubm79Oi5VIrRaua4%2Fh2dTitCzdvSvxAUieZA70zaXzM0mELfgTDCh%2BLO%2FBjqkAc%2BtgzXJJEIQW33Qnvjj8L8Jthkq85wA%2BJjM3rhHBRbAYab%2BDvIBlZJ961AgjhVFMb%2FqbDJkd%2FXbOFLgBwiq3TOFLEoOpGIZS%2FGT6WRus%2F30kekdz2o4np7vubbySLVKD1VK8vS1DFPQzz8h%2BLP2JTWr8a8EYCzoBU%2FJHSxINOU8%2FtK3ezshKMwi2nlfPHKWHaBETGqrXpBZuByszvL3ezHm5eeS&X-Amz-Signature=dabd46716f555ef8420e8a137ccd00390e36bc8be6bfe8971c0bf06c13e105a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KMFTDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD69xG0UBUq%2F%2FbvWCG5vATEn4qvJdbEnH0tjyHJWmrP0AIhAJape3wsQLdR7cVUNDgF3sa1dy94xyiGr18mhoZWD8RsKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqeIi3L4EvrkNv9Bgq3AMcRTUKo94mAmAyK7pDNvxgsZvOScJo5yKlDZ0QX6jOaOnwCSl0hbegAdpkkk6b3Zi3RTCstJw3yOl2f27b%2BK2xiqCLRKXXurCE0YtiUP1kP6bNX5cVT58EXtsAEphPw7wzM%2BwI1aM5LrReU3OeKkDDFVW7DuE7tWbQiRH6WK8yt97wArLYpeSBBg6U%2BK9RWzsSLN%2FX%2BxTO%2FTtNo0TbAFBYWfxsGHtYSKNuo2%2B%2FHwzNCGuXnYpkyEz5bZbtlATiALUHchQirIPm0c5BMCgH6CVV0rWi0JuSVIXCZbg6jrpRUvao9GhtWMQLU0AlzpKjBeiWsKgARy2RQp0NM9YsNHIdjlu8KuRTEO7awJ2ZlF1XDNP7ktI7P3d%2B7WN4OtkRY%2B2Wke2LlkfYW84RWPYJJLn6%2BRze%2F4%2FGogqyTfQbsRN%2B1YQYA%2BYuakCuUrgd0lUuKt4jEDlbrjcX6XDw4SW5R5kyhD7Q%2BqmkjX%2BnaZbHy%2BIJNA5zj3Tp0lFWImAt%2FTl97Et%2BEYjspCzMQaLNpNxGK3wxmCdhBGIUt012xaExOPqy%2Fd2kUHwjMSF%2B3%2FgiMd7%2Bj%2FtT7b1k0W4Ubm79Oi5VIrRaua4%2Fh2dTitCzdvSvxAUieZA70zaXzM0mELfgTDCh%2BLO%2FBjqkAc%2BtgzXJJEIQW33Qnvjj8L8Jthkq85wA%2BJjM3rhHBRbAYab%2BDvIBlZJ961AgjhVFMb%2FqbDJkd%2FXbOFLgBwiq3TOFLEoOpGIZS%2FGT6WRus%2F30kekdz2o4np7vubbySLVKD1VK8vS1DFPQzz8h%2BLP2JTWr8a8EYCzoBU%2FJHSxINOU8%2FtK3ezshKMwi2nlfPHKWHaBETGqrXpBZuByszvL3ezHm5eeS&X-Amz-Signature=e925e0e151fda4d33eae3f3775267fcb05deb1b58d35dfb7aed9d1146655fd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KMFTDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD69xG0UBUq%2F%2FbvWCG5vATEn4qvJdbEnH0tjyHJWmrP0AIhAJape3wsQLdR7cVUNDgF3sa1dy94xyiGr18mhoZWD8RsKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqeIi3L4EvrkNv9Bgq3AMcRTUKo94mAmAyK7pDNvxgsZvOScJo5yKlDZ0QX6jOaOnwCSl0hbegAdpkkk6b3Zi3RTCstJw3yOl2f27b%2BK2xiqCLRKXXurCE0YtiUP1kP6bNX5cVT58EXtsAEphPw7wzM%2BwI1aM5LrReU3OeKkDDFVW7DuE7tWbQiRH6WK8yt97wArLYpeSBBg6U%2BK9RWzsSLN%2FX%2BxTO%2FTtNo0TbAFBYWfxsGHtYSKNuo2%2B%2FHwzNCGuXnYpkyEz5bZbtlATiALUHchQirIPm0c5BMCgH6CVV0rWi0JuSVIXCZbg6jrpRUvao9GhtWMQLU0AlzpKjBeiWsKgARy2RQp0NM9YsNHIdjlu8KuRTEO7awJ2ZlF1XDNP7ktI7P3d%2B7WN4OtkRY%2B2Wke2LlkfYW84RWPYJJLn6%2BRze%2F4%2FGogqyTfQbsRN%2B1YQYA%2BYuakCuUrgd0lUuKt4jEDlbrjcX6XDw4SW5R5kyhD7Q%2BqmkjX%2BnaZbHy%2BIJNA5zj3Tp0lFWImAt%2FTl97Et%2BEYjspCzMQaLNpNxGK3wxmCdhBGIUt012xaExOPqy%2Fd2kUHwjMSF%2B3%2FgiMd7%2Bj%2FtT7b1k0W4Ubm79Oi5VIrRaua4%2Fh2dTitCzdvSvxAUieZA70zaXzM0mELfgTDCh%2BLO%2FBjqkAc%2BtgzXJJEIQW33Qnvjj8L8Jthkq85wA%2BJjM3rhHBRbAYab%2BDvIBlZJ961AgjhVFMb%2FqbDJkd%2FXbOFLgBwiq3TOFLEoOpGIZS%2FGT6WRus%2F30kekdz2o4np7vubbySLVKD1VK8vS1DFPQzz8h%2BLP2JTWr8a8EYCzoBU%2FJHSxINOU8%2FtK3ezshKMwi2nlfPHKWHaBETGqrXpBZuByszvL3ezHm5eeS&X-Amz-Signature=13a396e32291d69fa06aa0be9f43104dd306aef22af8b490fcb2c77c9ac994be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KMFTDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD69xG0UBUq%2F%2FbvWCG5vATEn4qvJdbEnH0tjyHJWmrP0AIhAJape3wsQLdR7cVUNDgF3sa1dy94xyiGr18mhoZWD8RsKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqeIi3L4EvrkNv9Bgq3AMcRTUKo94mAmAyK7pDNvxgsZvOScJo5yKlDZ0QX6jOaOnwCSl0hbegAdpkkk6b3Zi3RTCstJw3yOl2f27b%2BK2xiqCLRKXXurCE0YtiUP1kP6bNX5cVT58EXtsAEphPw7wzM%2BwI1aM5LrReU3OeKkDDFVW7DuE7tWbQiRH6WK8yt97wArLYpeSBBg6U%2BK9RWzsSLN%2FX%2BxTO%2FTtNo0TbAFBYWfxsGHtYSKNuo2%2B%2FHwzNCGuXnYpkyEz5bZbtlATiALUHchQirIPm0c5BMCgH6CVV0rWi0JuSVIXCZbg6jrpRUvao9GhtWMQLU0AlzpKjBeiWsKgARy2RQp0NM9YsNHIdjlu8KuRTEO7awJ2ZlF1XDNP7ktI7P3d%2B7WN4OtkRY%2B2Wke2LlkfYW84RWPYJJLn6%2BRze%2F4%2FGogqyTfQbsRN%2B1YQYA%2BYuakCuUrgd0lUuKt4jEDlbrjcX6XDw4SW5R5kyhD7Q%2BqmkjX%2BnaZbHy%2BIJNA5zj3Tp0lFWImAt%2FTl97Et%2BEYjspCzMQaLNpNxGK3wxmCdhBGIUt012xaExOPqy%2Fd2kUHwjMSF%2B3%2FgiMd7%2Bj%2FtT7b1k0W4Ubm79Oi5VIrRaua4%2Fh2dTitCzdvSvxAUieZA70zaXzM0mELfgTDCh%2BLO%2FBjqkAc%2BtgzXJJEIQW33Qnvjj8L8Jthkq85wA%2BJjM3rhHBRbAYab%2BDvIBlZJ961AgjhVFMb%2FqbDJkd%2FXbOFLgBwiq3TOFLEoOpGIZS%2FGT6WRus%2F30kekdz2o4np7vubbySLVKD1VK8vS1DFPQzz8h%2BLP2JTWr8a8EYCzoBU%2FJHSxINOU8%2FtK3ezshKMwi2nlfPHKWHaBETGqrXpBZuByszvL3ezHm5eeS&X-Amz-Signature=80af1e6d024d99a32e79465074a069279d1fcbffd1601241f72cc1d5ce6bd465&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KMFTDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD69xG0UBUq%2F%2FbvWCG5vATEn4qvJdbEnH0tjyHJWmrP0AIhAJape3wsQLdR7cVUNDgF3sa1dy94xyiGr18mhoZWD8RsKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqeIi3L4EvrkNv9Bgq3AMcRTUKo94mAmAyK7pDNvxgsZvOScJo5yKlDZ0QX6jOaOnwCSl0hbegAdpkkk6b3Zi3RTCstJw3yOl2f27b%2BK2xiqCLRKXXurCE0YtiUP1kP6bNX5cVT58EXtsAEphPw7wzM%2BwI1aM5LrReU3OeKkDDFVW7DuE7tWbQiRH6WK8yt97wArLYpeSBBg6U%2BK9RWzsSLN%2FX%2BxTO%2FTtNo0TbAFBYWfxsGHtYSKNuo2%2B%2FHwzNCGuXnYpkyEz5bZbtlATiALUHchQirIPm0c5BMCgH6CVV0rWi0JuSVIXCZbg6jrpRUvao9GhtWMQLU0AlzpKjBeiWsKgARy2RQp0NM9YsNHIdjlu8KuRTEO7awJ2ZlF1XDNP7ktI7P3d%2B7WN4OtkRY%2B2Wke2LlkfYW84RWPYJJLn6%2BRze%2F4%2FGogqyTfQbsRN%2B1YQYA%2BYuakCuUrgd0lUuKt4jEDlbrjcX6XDw4SW5R5kyhD7Q%2BqmkjX%2BnaZbHy%2BIJNA5zj3Tp0lFWImAt%2FTl97Et%2BEYjspCzMQaLNpNxGK3wxmCdhBGIUt012xaExOPqy%2Fd2kUHwjMSF%2B3%2FgiMd7%2Bj%2FtT7b1k0W4Ubm79Oi5VIrRaua4%2Fh2dTitCzdvSvxAUieZA70zaXzM0mELfgTDCh%2BLO%2FBjqkAc%2BtgzXJJEIQW33Qnvjj8L8Jthkq85wA%2BJjM3rhHBRbAYab%2BDvIBlZJ961AgjhVFMb%2FqbDJkd%2FXbOFLgBwiq3TOFLEoOpGIZS%2FGT6WRus%2F30kekdz2o4np7vubbySLVKD1VK8vS1DFPQzz8h%2BLP2JTWr8a8EYCzoBU%2FJHSxINOU8%2FtK3ezshKMwi2nlfPHKWHaBETGqrXpBZuByszvL3ezHm5eeS&X-Amz-Signature=f16e0f2dd78552db03846bf59f1083010e4b3059aa4a18d9fada6b959476c185&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

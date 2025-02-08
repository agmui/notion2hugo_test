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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2O2AHAW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICkmA9Fk0DIiZpms69eWL0pngGqy9OkfgvjrZxf2QuoOAiBFBMQEl%2Fc%2Fptwm%2FjExSiJodOi7wnLrfpt0x51F7Z%2BZWiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTBDeja8Nz%2Bki8DwKtwDqthIZQToyElIijasXyglkjhJGsWYQ0UcP9rR%2B91CJAgD4pl5AFkaeCR%2F4O%2Biou58VUlBo4STkCcErHYvuDTyli6F52Q5nNpHU%2BqIlFUyrOSO3%2BE6M6xiJl6hSL0nD18pEOv2TKxEfIrTSfiD2zszFTY%2Bys2nnQNTBpM6zLjQWGGp22kOB39JoylyPZsWEy9GTTLwLZpV6DTt2JgXTD%2B%2FzjLQK8CEDPwUH4hCA%2BDtOgQIFgOb1W4udF1xxHnundNq6d4jVkR3vLlfK7JI79d6XP8vh8Xk3UAQcsjp1dgbpuPPwDbAP8qa9FXwr4QKv7D0GNWS5fAUfEXOk2S4oh93I3aNU6NKWESbbVkiDhzrg%2FJPHN%2BS7LYxJifdqyRZKFoot2tJIyCKyJuyy2f%2BhmLt8CEoiRLVcSxNJJLESDhPqrbAA%2FDCe46m%2BAmsZlaLcxq4X3Iu6tZT8KKkJXVyARIsReKK12%2FPn%2FlOd45X00%2BtSWZCwPDC7XfyDVnoKcP4YSgfK%2FMBWc6YINiQAQ8KfYVMTYIcV9dXnka2Pb56BH6OQ6qBUX%2Bs2MkxiiKl3FKVI9ETq%2FnM2anKkJ2k71G8QQbtbOIGvXpZ2UNeN7OQqPSsCft2S5SXE91G1YUdXhAwqpebvQY6pgGVfcU1zIv3FagJLkPYsH3GDoQCFw60p7rE9jT3YM5kpvtlDZ2GgoW%2BV85%2BWYD4w4%2FDSkmmHHktHBsNjGXmO8M9t8z82rl%2B8cq8xy4Xkj7vjwlyV%2BgUlnvrWImfaZ2uQX37Eb8mgi0EXPPNOZ6%2FHFP2cBh81UCdsw99rhK1bbqg9%2BbFCNhGaZa2tz0D01Y5Y2Aiyn10ygy8uOSnmMxfqyE8Ya61weom&X-Amz-Signature=2fd0a0786e0fb9094c11c6bc88ab478cffbbad7f512271eff8fd9d7f4cc9e80d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2O2AHAW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICkmA9Fk0DIiZpms69eWL0pngGqy9OkfgvjrZxf2QuoOAiBFBMQEl%2Fc%2Fptwm%2FjExSiJodOi7wnLrfpt0x51F7Z%2BZWiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTBDeja8Nz%2Bki8DwKtwDqthIZQToyElIijasXyglkjhJGsWYQ0UcP9rR%2B91CJAgD4pl5AFkaeCR%2F4O%2Biou58VUlBo4STkCcErHYvuDTyli6F52Q5nNpHU%2BqIlFUyrOSO3%2BE6M6xiJl6hSL0nD18pEOv2TKxEfIrTSfiD2zszFTY%2Bys2nnQNTBpM6zLjQWGGp22kOB39JoylyPZsWEy9GTTLwLZpV6DTt2JgXTD%2B%2FzjLQK8CEDPwUH4hCA%2BDtOgQIFgOb1W4udF1xxHnundNq6d4jVkR3vLlfK7JI79d6XP8vh8Xk3UAQcsjp1dgbpuPPwDbAP8qa9FXwr4QKv7D0GNWS5fAUfEXOk2S4oh93I3aNU6NKWESbbVkiDhzrg%2FJPHN%2BS7LYxJifdqyRZKFoot2tJIyCKyJuyy2f%2BhmLt8CEoiRLVcSxNJJLESDhPqrbAA%2FDCe46m%2BAmsZlaLcxq4X3Iu6tZT8KKkJXVyARIsReKK12%2FPn%2FlOd45X00%2BtSWZCwPDC7XfyDVnoKcP4YSgfK%2FMBWc6YINiQAQ8KfYVMTYIcV9dXnka2Pb56BH6OQ6qBUX%2Bs2MkxiiKl3FKVI9ETq%2FnM2anKkJ2k71G8QQbtbOIGvXpZ2UNeN7OQqPSsCft2S5SXE91G1YUdXhAwqpebvQY6pgGVfcU1zIv3FagJLkPYsH3GDoQCFw60p7rE9jT3YM5kpvtlDZ2GgoW%2BV85%2BWYD4w4%2FDSkmmHHktHBsNjGXmO8M9t8z82rl%2B8cq8xy4Xkj7vjwlyV%2BgUlnvrWImfaZ2uQX37Eb8mgi0EXPPNOZ6%2FHFP2cBh81UCdsw99rhK1bbqg9%2BbFCNhGaZa2tz0D01Y5Y2Aiyn10ygy8uOSnmMxfqyE8Ya61weom&X-Amz-Signature=afa1591ea15c2ac99254c75ab42a68a45778d9d498d2522eb212da3f94d142e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2O2AHAW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICkmA9Fk0DIiZpms69eWL0pngGqy9OkfgvjrZxf2QuoOAiBFBMQEl%2Fc%2Fptwm%2FjExSiJodOi7wnLrfpt0x51F7Z%2BZWiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTBDeja8Nz%2Bki8DwKtwDqthIZQToyElIijasXyglkjhJGsWYQ0UcP9rR%2B91CJAgD4pl5AFkaeCR%2F4O%2Biou58VUlBo4STkCcErHYvuDTyli6F52Q5nNpHU%2BqIlFUyrOSO3%2BE6M6xiJl6hSL0nD18pEOv2TKxEfIrTSfiD2zszFTY%2Bys2nnQNTBpM6zLjQWGGp22kOB39JoylyPZsWEy9GTTLwLZpV6DTt2JgXTD%2B%2FzjLQK8CEDPwUH4hCA%2BDtOgQIFgOb1W4udF1xxHnundNq6d4jVkR3vLlfK7JI79d6XP8vh8Xk3UAQcsjp1dgbpuPPwDbAP8qa9FXwr4QKv7D0GNWS5fAUfEXOk2S4oh93I3aNU6NKWESbbVkiDhzrg%2FJPHN%2BS7LYxJifdqyRZKFoot2tJIyCKyJuyy2f%2BhmLt8CEoiRLVcSxNJJLESDhPqrbAA%2FDCe46m%2BAmsZlaLcxq4X3Iu6tZT8KKkJXVyARIsReKK12%2FPn%2FlOd45X00%2BtSWZCwPDC7XfyDVnoKcP4YSgfK%2FMBWc6YINiQAQ8KfYVMTYIcV9dXnka2Pb56BH6OQ6qBUX%2Bs2MkxiiKl3FKVI9ETq%2FnM2anKkJ2k71G8QQbtbOIGvXpZ2UNeN7OQqPSsCft2S5SXE91G1YUdXhAwqpebvQY6pgGVfcU1zIv3FagJLkPYsH3GDoQCFw60p7rE9jT3YM5kpvtlDZ2GgoW%2BV85%2BWYD4w4%2FDSkmmHHktHBsNjGXmO8M9t8z82rl%2B8cq8xy4Xkj7vjwlyV%2BgUlnvrWImfaZ2uQX37Eb8mgi0EXPPNOZ6%2FHFP2cBh81UCdsw99rhK1bbqg9%2BbFCNhGaZa2tz0D01Y5Y2Aiyn10ygy8uOSnmMxfqyE8Ya61weom&X-Amz-Signature=e0ad3e99bed98c284f6264ef10d4996fd1b6474e89dbd6e39aec3aaeb7460bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2O2AHAW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICkmA9Fk0DIiZpms69eWL0pngGqy9OkfgvjrZxf2QuoOAiBFBMQEl%2Fc%2Fptwm%2FjExSiJodOi7wnLrfpt0x51F7Z%2BZWiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTBDeja8Nz%2Bki8DwKtwDqthIZQToyElIijasXyglkjhJGsWYQ0UcP9rR%2B91CJAgD4pl5AFkaeCR%2F4O%2Biou58VUlBo4STkCcErHYvuDTyli6F52Q5nNpHU%2BqIlFUyrOSO3%2BE6M6xiJl6hSL0nD18pEOv2TKxEfIrTSfiD2zszFTY%2Bys2nnQNTBpM6zLjQWGGp22kOB39JoylyPZsWEy9GTTLwLZpV6DTt2JgXTD%2B%2FzjLQK8CEDPwUH4hCA%2BDtOgQIFgOb1W4udF1xxHnundNq6d4jVkR3vLlfK7JI79d6XP8vh8Xk3UAQcsjp1dgbpuPPwDbAP8qa9FXwr4QKv7D0GNWS5fAUfEXOk2S4oh93I3aNU6NKWESbbVkiDhzrg%2FJPHN%2BS7LYxJifdqyRZKFoot2tJIyCKyJuyy2f%2BhmLt8CEoiRLVcSxNJJLESDhPqrbAA%2FDCe46m%2BAmsZlaLcxq4X3Iu6tZT8KKkJXVyARIsReKK12%2FPn%2FlOd45X00%2BtSWZCwPDC7XfyDVnoKcP4YSgfK%2FMBWc6YINiQAQ8KfYVMTYIcV9dXnka2Pb56BH6OQ6qBUX%2Bs2MkxiiKl3FKVI9ETq%2FnM2anKkJ2k71G8QQbtbOIGvXpZ2UNeN7OQqPSsCft2S5SXE91G1YUdXhAwqpebvQY6pgGVfcU1zIv3FagJLkPYsH3GDoQCFw60p7rE9jT3YM5kpvtlDZ2GgoW%2BV85%2BWYD4w4%2FDSkmmHHktHBsNjGXmO8M9t8z82rl%2B8cq8xy4Xkj7vjwlyV%2BgUlnvrWImfaZ2uQX37Eb8mgi0EXPPNOZ6%2FHFP2cBh81UCdsw99rhK1bbqg9%2BbFCNhGaZa2tz0D01Y5Y2Aiyn10ygy8uOSnmMxfqyE8Ya61weom&X-Amz-Signature=7166a51e1824d2dcd588a783b73670887e65184016c0e98d0c915c415df106f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2O2AHAW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICkmA9Fk0DIiZpms69eWL0pngGqy9OkfgvjrZxf2QuoOAiBFBMQEl%2Fc%2Fptwm%2FjExSiJodOi7wnLrfpt0x51F7Z%2BZWiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTBDeja8Nz%2Bki8DwKtwDqthIZQToyElIijasXyglkjhJGsWYQ0UcP9rR%2B91CJAgD4pl5AFkaeCR%2F4O%2Biou58VUlBo4STkCcErHYvuDTyli6F52Q5nNpHU%2BqIlFUyrOSO3%2BE6M6xiJl6hSL0nD18pEOv2TKxEfIrTSfiD2zszFTY%2Bys2nnQNTBpM6zLjQWGGp22kOB39JoylyPZsWEy9GTTLwLZpV6DTt2JgXTD%2B%2FzjLQK8CEDPwUH4hCA%2BDtOgQIFgOb1W4udF1xxHnundNq6d4jVkR3vLlfK7JI79d6XP8vh8Xk3UAQcsjp1dgbpuPPwDbAP8qa9FXwr4QKv7D0GNWS5fAUfEXOk2S4oh93I3aNU6NKWESbbVkiDhzrg%2FJPHN%2BS7LYxJifdqyRZKFoot2tJIyCKyJuyy2f%2BhmLt8CEoiRLVcSxNJJLESDhPqrbAA%2FDCe46m%2BAmsZlaLcxq4X3Iu6tZT8KKkJXVyARIsReKK12%2FPn%2FlOd45X00%2BtSWZCwPDC7XfyDVnoKcP4YSgfK%2FMBWc6YINiQAQ8KfYVMTYIcV9dXnka2Pb56BH6OQ6qBUX%2Bs2MkxiiKl3FKVI9ETq%2FnM2anKkJ2k71G8QQbtbOIGvXpZ2UNeN7OQqPSsCft2S5SXE91G1YUdXhAwqpebvQY6pgGVfcU1zIv3FagJLkPYsH3GDoQCFw60p7rE9jT3YM5kpvtlDZ2GgoW%2BV85%2BWYD4w4%2FDSkmmHHktHBsNjGXmO8M9t8z82rl%2B8cq8xy4Xkj7vjwlyV%2BgUlnvrWImfaZ2uQX37Eb8mgi0EXPPNOZ6%2FHFP2cBh81UCdsw99rhK1bbqg9%2BbFCNhGaZa2tz0D01Y5Y2Aiyn10ygy8uOSnmMxfqyE8Ya61weom&X-Amz-Signature=83ccd0b36a3c8f8271492e254228679b41ec0aae4e575f9366f7a55a41474a51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2O2AHAW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICkmA9Fk0DIiZpms69eWL0pngGqy9OkfgvjrZxf2QuoOAiBFBMQEl%2Fc%2Fptwm%2FjExSiJodOi7wnLrfpt0x51F7Z%2BZWiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTBDeja8Nz%2Bki8DwKtwDqthIZQToyElIijasXyglkjhJGsWYQ0UcP9rR%2B91CJAgD4pl5AFkaeCR%2F4O%2Biou58VUlBo4STkCcErHYvuDTyli6F52Q5nNpHU%2BqIlFUyrOSO3%2BE6M6xiJl6hSL0nD18pEOv2TKxEfIrTSfiD2zszFTY%2Bys2nnQNTBpM6zLjQWGGp22kOB39JoylyPZsWEy9GTTLwLZpV6DTt2JgXTD%2B%2FzjLQK8CEDPwUH4hCA%2BDtOgQIFgOb1W4udF1xxHnundNq6d4jVkR3vLlfK7JI79d6XP8vh8Xk3UAQcsjp1dgbpuPPwDbAP8qa9FXwr4QKv7D0GNWS5fAUfEXOk2S4oh93I3aNU6NKWESbbVkiDhzrg%2FJPHN%2BS7LYxJifdqyRZKFoot2tJIyCKyJuyy2f%2BhmLt8CEoiRLVcSxNJJLESDhPqrbAA%2FDCe46m%2BAmsZlaLcxq4X3Iu6tZT8KKkJXVyARIsReKK12%2FPn%2FlOd45X00%2BtSWZCwPDC7XfyDVnoKcP4YSgfK%2FMBWc6YINiQAQ8KfYVMTYIcV9dXnka2Pb56BH6OQ6qBUX%2Bs2MkxiiKl3FKVI9ETq%2FnM2anKkJ2k71G8QQbtbOIGvXpZ2UNeN7OQqPSsCft2S5SXE91G1YUdXhAwqpebvQY6pgGVfcU1zIv3FagJLkPYsH3GDoQCFw60p7rE9jT3YM5kpvtlDZ2GgoW%2BV85%2BWYD4w4%2FDSkmmHHktHBsNjGXmO8M9t8z82rl%2B8cq8xy4Xkj7vjwlyV%2BgUlnvrWImfaZ2uQX37Eb8mgi0EXPPNOZ6%2FHFP2cBh81UCdsw99rhK1bbqg9%2BbFCNhGaZa2tz0D01Y5Y2Aiyn10ygy8uOSnmMxfqyE8Ya61weom&X-Amz-Signature=b4d0d6a2f75b4fd8db8fa8bba6d9226255f9515fa3325dd488a3ddb253cb0504&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2O2AHAW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICkmA9Fk0DIiZpms69eWL0pngGqy9OkfgvjrZxf2QuoOAiBFBMQEl%2Fc%2Fptwm%2FjExSiJodOi7wnLrfpt0x51F7Z%2BZWiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTBDeja8Nz%2Bki8DwKtwDqthIZQToyElIijasXyglkjhJGsWYQ0UcP9rR%2B91CJAgD4pl5AFkaeCR%2F4O%2Biou58VUlBo4STkCcErHYvuDTyli6F52Q5nNpHU%2BqIlFUyrOSO3%2BE6M6xiJl6hSL0nD18pEOv2TKxEfIrTSfiD2zszFTY%2Bys2nnQNTBpM6zLjQWGGp22kOB39JoylyPZsWEy9GTTLwLZpV6DTt2JgXTD%2B%2FzjLQK8CEDPwUH4hCA%2BDtOgQIFgOb1W4udF1xxHnundNq6d4jVkR3vLlfK7JI79d6XP8vh8Xk3UAQcsjp1dgbpuPPwDbAP8qa9FXwr4QKv7D0GNWS5fAUfEXOk2S4oh93I3aNU6NKWESbbVkiDhzrg%2FJPHN%2BS7LYxJifdqyRZKFoot2tJIyCKyJuyy2f%2BhmLt8CEoiRLVcSxNJJLESDhPqrbAA%2FDCe46m%2BAmsZlaLcxq4X3Iu6tZT8KKkJXVyARIsReKK12%2FPn%2FlOd45X00%2BtSWZCwPDC7XfyDVnoKcP4YSgfK%2FMBWc6YINiQAQ8KfYVMTYIcV9dXnka2Pb56BH6OQ6qBUX%2Bs2MkxiiKl3FKVI9ETq%2FnM2anKkJ2k71G8QQbtbOIGvXpZ2UNeN7OQqPSsCft2S5SXE91G1YUdXhAwqpebvQY6pgGVfcU1zIv3FagJLkPYsH3GDoQCFw60p7rE9jT3YM5kpvtlDZ2GgoW%2BV85%2BWYD4w4%2FDSkmmHHktHBsNjGXmO8M9t8z82rl%2B8cq8xy4Xkj7vjwlyV%2BgUlnvrWImfaZ2uQX37Eb8mgi0EXPPNOZ6%2FHFP2cBh81UCdsw99rhK1bbqg9%2BbFCNhGaZa2tz0D01Y5Y2Aiyn10ygy8uOSnmMxfqyE8Ya61weom&X-Amz-Signature=29b91d4b8641f3fcb21e42f017a83f42d86e19948bda9dab5d66c0555eade43f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2O2AHAW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICkmA9Fk0DIiZpms69eWL0pngGqy9OkfgvjrZxf2QuoOAiBFBMQEl%2Fc%2Fptwm%2FjExSiJodOi7wnLrfpt0x51F7Z%2BZWiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTBDeja8Nz%2Bki8DwKtwDqthIZQToyElIijasXyglkjhJGsWYQ0UcP9rR%2B91CJAgD4pl5AFkaeCR%2F4O%2Biou58VUlBo4STkCcErHYvuDTyli6F52Q5nNpHU%2BqIlFUyrOSO3%2BE6M6xiJl6hSL0nD18pEOv2TKxEfIrTSfiD2zszFTY%2Bys2nnQNTBpM6zLjQWGGp22kOB39JoylyPZsWEy9GTTLwLZpV6DTt2JgXTD%2B%2FzjLQK8CEDPwUH4hCA%2BDtOgQIFgOb1W4udF1xxHnundNq6d4jVkR3vLlfK7JI79d6XP8vh8Xk3UAQcsjp1dgbpuPPwDbAP8qa9FXwr4QKv7D0GNWS5fAUfEXOk2S4oh93I3aNU6NKWESbbVkiDhzrg%2FJPHN%2BS7LYxJifdqyRZKFoot2tJIyCKyJuyy2f%2BhmLt8CEoiRLVcSxNJJLESDhPqrbAA%2FDCe46m%2BAmsZlaLcxq4X3Iu6tZT8KKkJXVyARIsReKK12%2FPn%2FlOd45X00%2BtSWZCwPDC7XfyDVnoKcP4YSgfK%2FMBWc6YINiQAQ8KfYVMTYIcV9dXnka2Pb56BH6OQ6qBUX%2Bs2MkxiiKl3FKVI9ETq%2FnM2anKkJ2k71G8QQbtbOIGvXpZ2UNeN7OQqPSsCft2S5SXE91G1YUdXhAwqpebvQY6pgGVfcU1zIv3FagJLkPYsH3GDoQCFw60p7rE9jT3YM5kpvtlDZ2GgoW%2BV85%2BWYD4w4%2FDSkmmHHktHBsNjGXmO8M9t8z82rl%2B8cq8xy4Xkj7vjwlyV%2BgUlnvrWImfaZ2uQX37Eb8mgi0EXPPNOZ6%2FHFP2cBh81UCdsw99rhK1bbqg9%2BbFCNhGaZa2tz0D01Y5Y2Aiyn10ygy8uOSnmMxfqyE8Ya61weom&X-Amz-Signature=0fe7883c58ae469e3d34d0f0d217e13a567028e34e1aad7eb8f0f399ebd3dc1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

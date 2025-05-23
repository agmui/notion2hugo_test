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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33K6OJI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFRgrzr7MVzweUER2RFr74cf%2Bz5E5zZm8si7UZNZ4nq1AiEAwyUroE86bk26f2BdV7IzdcpqGl%2FI%2FtOx8rx4RW0%2F%2BCAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5g7lR3WuizBC2lZCrcA%2BtlssMQtNiiRJY0D82qHjVFNx%2BNo5uatjy%2B9zRVE%2FhZNVH5ci3zcWnPq4atm51Sf5ov%2FaS1M7UIuMd0h96cOZ9vBZkzePAOF93brynLeirkiBC2wPnxcJovoX9gEZQnZ0PaGKIWCvVMqQXwxa%2Fy7wAAUpfoB75McMc2hpxTCJA%2FuGfKH0lfRsaJISHC1k%2FdVfv2mrtpZCQsGGOxmP98Cx1VfX2x1%2FLV3Glt%2B15xPqkCKXCNpmDn51J1i25VIMizK05uP4083mF4ra%2BNObsErXqoJRihuFdVXuRVYbxJqLsAwphbiNmGwl3%2BhqPpoi0KBNko0DjH1VEiAX39VBdkEpSilads8ikP9RLLtvlpXEZT1hy%2Fl8K%2FP%2Bb9AVUYnoAx1K5DFBgdqcZPreLNIyKaIXVUI1q76IXnGVSgpVBUkpRBrFXS9qQz1HexbRUzwKgYW7eQ%2B6kGUw1MVxIxNjCk6v1Tr6QJ%2Br3TGzCQpFzshVF%2BvOQWZkd2MjeO6JQquZVNsx7AR440973SMk3cZorSzjqNGywX5e9NCJ2FdJQ7xoy7NVo%2FITf2pUJZZjdvC678aN%2FTXx%2FouUeKSfGJL3TYsm6c%2BZjifFASGk7%2FqNF3ufYooQ5I7ohT6%2BO66KEtMNfCv8EGOqUB7Rw5CuUIFWLLhG%2BH7w47KhagN9KA3zN0witouDkfVhOCx%2FOSk4uGqHM6BK2PTKTVobuPsgKuQYLzYQeUo6Bda%2B4kLbYunEgMVJyORWsWlKxdvrb1APN0iCmyEerR5uIa6t%2BdNV3xtK8D7sNSQc%2Bh9BOii9QH3YlssqoexJqq6GQphH3OyiqiGJdjuYx9anoaRfc1PIg7qaR2QK6lHFbb7ufHKlEC&X-Amz-Signature=9d00d4c5da49d39c64b779e6fdd42506d7866baf2a0d4ab240205678e2000123&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33K6OJI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFRgrzr7MVzweUER2RFr74cf%2Bz5E5zZm8si7UZNZ4nq1AiEAwyUroE86bk26f2BdV7IzdcpqGl%2FI%2FtOx8rx4RW0%2F%2BCAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5g7lR3WuizBC2lZCrcA%2BtlssMQtNiiRJY0D82qHjVFNx%2BNo5uatjy%2B9zRVE%2FhZNVH5ci3zcWnPq4atm51Sf5ov%2FaS1M7UIuMd0h96cOZ9vBZkzePAOF93brynLeirkiBC2wPnxcJovoX9gEZQnZ0PaGKIWCvVMqQXwxa%2Fy7wAAUpfoB75McMc2hpxTCJA%2FuGfKH0lfRsaJISHC1k%2FdVfv2mrtpZCQsGGOxmP98Cx1VfX2x1%2FLV3Glt%2B15xPqkCKXCNpmDn51J1i25VIMizK05uP4083mF4ra%2BNObsErXqoJRihuFdVXuRVYbxJqLsAwphbiNmGwl3%2BhqPpoi0KBNko0DjH1VEiAX39VBdkEpSilads8ikP9RLLtvlpXEZT1hy%2Fl8K%2FP%2Bb9AVUYnoAx1K5DFBgdqcZPreLNIyKaIXVUI1q76IXnGVSgpVBUkpRBrFXS9qQz1HexbRUzwKgYW7eQ%2B6kGUw1MVxIxNjCk6v1Tr6QJ%2Br3TGzCQpFzshVF%2BvOQWZkd2MjeO6JQquZVNsx7AR440973SMk3cZorSzjqNGywX5e9NCJ2FdJQ7xoy7NVo%2FITf2pUJZZjdvC678aN%2FTXx%2FouUeKSfGJL3TYsm6c%2BZjifFASGk7%2FqNF3ufYooQ5I7ohT6%2BO66KEtMNfCv8EGOqUB7Rw5CuUIFWLLhG%2BH7w47KhagN9KA3zN0witouDkfVhOCx%2FOSk4uGqHM6BK2PTKTVobuPsgKuQYLzYQeUo6Bda%2B4kLbYunEgMVJyORWsWlKxdvrb1APN0iCmyEerR5uIa6t%2BdNV3xtK8D7sNSQc%2Bh9BOii9QH3YlssqoexJqq6GQphH3OyiqiGJdjuYx9anoaRfc1PIg7qaR2QK6lHFbb7ufHKlEC&X-Amz-Signature=b5d5aaba1ae806df263439dbcda96369faf5fed151e59b3d35bbed4bd6a7212d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33K6OJI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFRgrzr7MVzweUER2RFr74cf%2Bz5E5zZm8si7UZNZ4nq1AiEAwyUroE86bk26f2BdV7IzdcpqGl%2FI%2FtOx8rx4RW0%2F%2BCAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5g7lR3WuizBC2lZCrcA%2BtlssMQtNiiRJY0D82qHjVFNx%2BNo5uatjy%2B9zRVE%2FhZNVH5ci3zcWnPq4atm51Sf5ov%2FaS1M7UIuMd0h96cOZ9vBZkzePAOF93brynLeirkiBC2wPnxcJovoX9gEZQnZ0PaGKIWCvVMqQXwxa%2Fy7wAAUpfoB75McMc2hpxTCJA%2FuGfKH0lfRsaJISHC1k%2FdVfv2mrtpZCQsGGOxmP98Cx1VfX2x1%2FLV3Glt%2B15xPqkCKXCNpmDn51J1i25VIMizK05uP4083mF4ra%2BNObsErXqoJRihuFdVXuRVYbxJqLsAwphbiNmGwl3%2BhqPpoi0KBNko0DjH1VEiAX39VBdkEpSilads8ikP9RLLtvlpXEZT1hy%2Fl8K%2FP%2Bb9AVUYnoAx1K5DFBgdqcZPreLNIyKaIXVUI1q76IXnGVSgpVBUkpRBrFXS9qQz1HexbRUzwKgYW7eQ%2B6kGUw1MVxIxNjCk6v1Tr6QJ%2Br3TGzCQpFzshVF%2BvOQWZkd2MjeO6JQquZVNsx7AR440973SMk3cZorSzjqNGywX5e9NCJ2FdJQ7xoy7NVo%2FITf2pUJZZjdvC678aN%2FTXx%2FouUeKSfGJL3TYsm6c%2BZjifFASGk7%2FqNF3ufYooQ5I7ohT6%2BO66KEtMNfCv8EGOqUB7Rw5CuUIFWLLhG%2BH7w47KhagN9KA3zN0witouDkfVhOCx%2FOSk4uGqHM6BK2PTKTVobuPsgKuQYLzYQeUo6Bda%2B4kLbYunEgMVJyORWsWlKxdvrb1APN0iCmyEerR5uIa6t%2BdNV3xtK8D7sNSQc%2Bh9BOii9QH3YlssqoexJqq6GQphH3OyiqiGJdjuYx9anoaRfc1PIg7qaR2QK6lHFbb7ufHKlEC&X-Amz-Signature=df707d458a0bc388e7bc87a15c9eb2443ac53ad7905b0ca0f334c8c240f70099&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33K6OJI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFRgrzr7MVzweUER2RFr74cf%2Bz5E5zZm8si7UZNZ4nq1AiEAwyUroE86bk26f2BdV7IzdcpqGl%2FI%2FtOx8rx4RW0%2F%2BCAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5g7lR3WuizBC2lZCrcA%2BtlssMQtNiiRJY0D82qHjVFNx%2BNo5uatjy%2B9zRVE%2FhZNVH5ci3zcWnPq4atm51Sf5ov%2FaS1M7UIuMd0h96cOZ9vBZkzePAOF93brynLeirkiBC2wPnxcJovoX9gEZQnZ0PaGKIWCvVMqQXwxa%2Fy7wAAUpfoB75McMc2hpxTCJA%2FuGfKH0lfRsaJISHC1k%2FdVfv2mrtpZCQsGGOxmP98Cx1VfX2x1%2FLV3Glt%2B15xPqkCKXCNpmDn51J1i25VIMizK05uP4083mF4ra%2BNObsErXqoJRihuFdVXuRVYbxJqLsAwphbiNmGwl3%2BhqPpoi0KBNko0DjH1VEiAX39VBdkEpSilads8ikP9RLLtvlpXEZT1hy%2Fl8K%2FP%2Bb9AVUYnoAx1K5DFBgdqcZPreLNIyKaIXVUI1q76IXnGVSgpVBUkpRBrFXS9qQz1HexbRUzwKgYW7eQ%2B6kGUw1MVxIxNjCk6v1Tr6QJ%2Br3TGzCQpFzshVF%2BvOQWZkd2MjeO6JQquZVNsx7AR440973SMk3cZorSzjqNGywX5e9NCJ2FdJQ7xoy7NVo%2FITf2pUJZZjdvC678aN%2FTXx%2FouUeKSfGJL3TYsm6c%2BZjifFASGk7%2FqNF3ufYooQ5I7ohT6%2BO66KEtMNfCv8EGOqUB7Rw5CuUIFWLLhG%2BH7w47KhagN9KA3zN0witouDkfVhOCx%2FOSk4uGqHM6BK2PTKTVobuPsgKuQYLzYQeUo6Bda%2B4kLbYunEgMVJyORWsWlKxdvrb1APN0iCmyEerR5uIa6t%2BdNV3xtK8D7sNSQc%2Bh9BOii9QH3YlssqoexJqq6GQphH3OyiqiGJdjuYx9anoaRfc1PIg7qaR2QK6lHFbb7ufHKlEC&X-Amz-Signature=9584cb52cde5f7cc7d049f9dade8d352e3df15f652887bf39abba012edcefa18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33K6OJI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFRgrzr7MVzweUER2RFr74cf%2Bz5E5zZm8si7UZNZ4nq1AiEAwyUroE86bk26f2BdV7IzdcpqGl%2FI%2FtOx8rx4RW0%2F%2BCAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5g7lR3WuizBC2lZCrcA%2BtlssMQtNiiRJY0D82qHjVFNx%2BNo5uatjy%2B9zRVE%2FhZNVH5ci3zcWnPq4atm51Sf5ov%2FaS1M7UIuMd0h96cOZ9vBZkzePAOF93brynLeirkiBC2wPnxcJovoX9gEZQnZ0PaGKIWCvVMqQXwxa%2Fy7wAAUpfoB75McMc2hpxTCJA%2FuGfKH0lfRsaJISHC1k%2FdVfv2mrtpZCQsGGOxmP98Cx1VfX2x1%2FLV3Glt%2B15xPqkCKXCNpmDn51J1i25VIMizK05uP4083mF4ra%2BNObsErXqoJRihuFdVXuRVYbxJqLsAwphbiNmGwl3%2BhqPpoi0KBNko0DjH1VEiAX39VBdkEpSilads8ikP9RLLtvlpXEZT1hy%2Fl8K%2FP%2Bb9AVUYnoAx1K5DFBgdqcZPreLNIyKaIXVUI1q76IXnGVSgpVBUkpRBrFXS9qQz1HexbRUzwKgYW7eQ%2B6kGUw1MVxIxNjCk6v1Tr6QJ%2Br3TGzCQpFzshVF%2BvOQWZkd2MjeO6JQquZVNsx7AR440973SMk3cZorSzjqNGywX5e9NCJ2FdJQ7xoy7NVo%2FITf2pUJZZjdvC678aN%2FTXx%2FouUeKSfGJL3TYsm6c%2BZjifFASGk7%2FqNF3ufYooQ5I7ohT6%2BO66KEtMNfCv8EGOqUB7Rw5CuUIFWLLhG%2BH7w47KhagN9KA3zN0witouDkfVhOCx%2FOSk4uGqHM6BK2PTKTVobuPsgKuQYLzYQeUo6Bda%2B4kLbYunEgMVJyORWsWlKxdvrb1APN0iCmyEerR5uIa6t%2BdNV3xtK8D7sNSQc%2Bh9BOii9QH3YlssqoexJqq6GQphH3OyiqiGJdjuYx9anoaRfc1PIg7qaR2QK6lHFbb7ufHKlEC&X-Amz-Signature=3cc4942c1fe379ad777bc0a55a7a1f2803e6f2f502e17862c2bb816e4cd6e65c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33K6OJI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFRgrzr7MVzweUER2RFr74cf%2Bz5E5zZm8si7UZNZ4nq1AiEAwyUroE86bk26f2BdV7IzdcpqGl%2FI%2FtOx8rx4RW0%2F%2BCAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5g7lR3WuizBC2lZCrcA%2BtlssMQtNiiRJY0D82qHjVFNx%2BNo5uatjy%2B9zRVE%2FhZNVH5ci3zcWnPq4atm51Sf5ov%2FaS1M7UIuMd0h96cOZ9vBZkzePAOF93brynLeirkiBC2wPnxcJovoX9gEZQnZ0PaGKIWCvVMqQXwxa%2Fy7wAAUpfoB75McMc2hpxTCJA%2FuGfKH0lfRsaJISHC1k%2FdVfv2mrtpZCQsGGOxmP98Cx1VfX2x1%2FLV3Glt%2B15xPqkCKXCNpmDn51J1i25VIMizK05uP4083mF4ra%2BNObsErXqoJRihuFdVXuRVYbxJqLsAwphbiNmGwl3%2BhqPpoi0KBNko0DjH1VEiAX39VBdkEpSilads8ikP9RLLtvlpXEZT1hy%2Fl8K%2FP%2Bb9AVUYnoAx1K5DFBgdqcZPreLNIyKaIXVUI1q76IXnGVSgpVBUkpRBrFXS9qQz1HexbRUzwKgYW7eQ%2B6kGUw1MVxIxNjCk6v1Tr6QJ%2Br3TGzCQpFzshVF%2BvOQWZkd2MjeO6JQquZVNsx7AR440973SMk3cZorSzjqNGywX5e9NCJ2FdJQ7xoy7NVo%2FITf2pUJZZjdvC678aN%2FTXx%2FouUeKSfGJL3TYsm6c%2BZjifFASGk7%2FqNF3ufYooQ5I7ohT6%2BO66KEtMNfCv8EGOqUB7Rw5CuUIFWLLhG%2BH7w47KhagN9KA3zN0witouDkfVhOCx%2FOSk4uGqHM6BK2PTKTVobuPsgKuQYLzYQeUo6Bda%2B4kLbYunEgMVJyORWsWlKxdvrb1APN0iCmyEerR5uIa6t%2BdNV3xtK8D7sNSQc%2Bh9BOii9QH3YlssqoexJqq6GQphH3OyiqiGJdjuYx9anoaRfc1PIg7qaR2QK6lHFbb7ufHKlEC&X-Amz-Signature=e396e172ebde9e229d2930b473c3d6ecfdeb87553ca57abcac3793332bb81dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33K6OJI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFRgrzr7MVzweUER2RFr74cf%2Bz5E5zZm8si7UZNZ4nq1AiEAwyUroE86bk26f2BdV7IzdcpqGl%2FI%2FtOx8rx4RW0%2F%2BCAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5g7lR3WuizBC2lZCrcA%2BtlssMQtNiiRJY0D82qHjVFNx%2BNo5uatjy%2B9zRVE%2FhZNVH5ci3zcWnPq4atm51Sf5ov%2FaS1M7UIuMd0h96cOZ9vBZkzePAOF93brynLeirkiBC2wPnxcJovoX9gEZQnZ0PaGKIWCvVMqQXwxa%2Fy7wAAUpfoB75McMc2hpxTCJA%2FuGfKH0lfRsaJISHC1k%2FdVfv2mrtpZCQsGGOxmP98Cx1VfX2x1%2FLV3Glt%2B15xPqkCKXCNpmDn51J1i25VIMizK05uP4083mF4ra%2BNObsErXqoJRihuFdVXuRVYbxJqLsAwphbiNmGwl3%2BhqPpoi0KBNko0DjH1VEiAX39VBdkEpSilads8ikP9RLLtvlpXEZT1hy%2Fl8K%2FP%2Bb9AVUYnoAx1K5DFBgdqcZPreLNIyKaIXVUI1q76IXnGVSgpVBUkpRBrFXS9qQz1HexbRUzwKgYW7eQ%2B6kGUw1MVxIxNjCk6v1Tr6QJ%2Br3TGzCQpFzshVF%2BvOQWZkd2MjeO6JQquZVNsx7AR440973SMk3cZorSzjqNGywX5e9NCJ2FdJQ7xoy7NVo%2FITf2pUJZZjdvC678aN%2FTXx%2FouUeKSfGJL3TYsm6c%2BZjifFASGk7%2FqNF3ufYooQ5I7ohT6%2BO66KEtMNfCv8EGOqUB7Rw5CuUIFWLLhG%2BH7w47KhagN9KA3zN0witouDkfVhOCx%2FOSk4uGqHM6BK2PTKTVobuPsgKuQYLzYQeUo6Bda%2B4kLbYunEgMVJyORWsWlKxdvrb1APN0iCmyEerR5uIa6t%2BdNV3xtK8D7sNSQc%2Bh9BOii9QH3YlssqoexJqq6GQphH3OyiqiGJdjuYx9anoaRfc1PIg7qaR2QK6lHFbb7ufHKlEC&X-Amz-Signature=ee6b16d21184df13e4fff4546d2040ab80191552f7f7dcf8bf961654232892fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33K6OJI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFRgrzr7MVzweUER2RFr74cf%2Bz5E5zZm8si7UZNZ4nq1AiEAwyUroE86bk26f2BdV7IzdcpqGl%2FI%2FtOx8rx4RW0%2F%2BCAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5g7lR3WuizBC2lZCrcA%2BtlssMQtNiiRJY0D82qHjVFNx%2BNo5uatjy%2B9zRVE%2FhZNVH5ci3zcWnPq4atm51Sf5ov%2FaS1M7UIuMd0h96cOZ9vBZkzePAOF93brynLeirkiBC2wPnxcJovoX9gEZQnZ0PaGKIWCvVMqQXwxa%2Fy7wAAUpfoB75McMc2hpxTCJA%2FuGfKH0lfRsaJISHC1k%2FdVfv2mrtpZCQsGGOxmP98Cx1VfX2x1%2FLV3Glt%2B15xPqkCKXCNpmDn51J1i25VIMizK05uP4083mF4ra%2BNObsErXqoJRihuFdVXuRVYbxJqLsAwphbiNmGwl3%2BhqPpoi0KBNko0DjH1VEiAX39VBdkEpSilads8ikP9RLLtvlpXEZT1hy%2Fl8K%2FP%2Bb9AVUYnoAx1K5DFBgdqcZPreLNIyKaIXVUI1q76IXnGVSgpVBUkpRBrFXS9qQz1HexbRUzwKgYW7eQ%2B6kGUw1MVxIxNjCk6v1Tr6QJ%2Br3TGzCQpFzshVF%2BvOQWZkd2MjeO6JQquZVNsx7AR440973SMk3cZorSzjqNGywX5e9NCJ2FdJQ7xoy7NVo%2FITf2pUJZZjdvC678aN%2FTXx%2FouUeKSfGJL3TYsm6c%2BZjifFASGk7%2FqNF3ufYooQ5I7ohT6%2BO66KEtMNfCv8EGOqUB7Rw5CuUIFWLLhG%2BH7w47KhagN9KA3zN0witouDkfVhOCx%2FOSk4uGqHM6BK2PTKTVobuPsgKuQYLzYQeUo6Bda%2B4kLbYunEgMVJyORWsWlKxdvrb1APN0iCmyEerR5uIa6t%2BdNV3xtK8D7sNSQc%2Bh9BOii9QH3YlssqoexJqq6GQphH3OyiqiGJdjuYx9anoaRfc1PIg7qaR2QK6lHFbb7ufHKlEC&X-Amz-Signature=8c4dfbbf3213e397b8bb0b060d2b43add2f88f94b3d27c7decac9865c634da0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFGK5K7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmacIlJwnWdj3kGGRf2qwIwgeDeclVE6wIU5X5hd3HFAiEA3dAcq3Ksr3PAasCQarJWvWzwOW0YrksAdXtLgTkSR04qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQXRImuW2Q%2BLBYjiircA1gXVOHMG3fOpsrcIkoHDBAeN6vAdI%2FHN5hPWdDdP8rpP88g%2BitNeDNxh8I5ePDnChjVGKGifjm6vD4MpiEb2KA4Is1wUJGATOBtQnBnoL7y07xtXGMz8Q%2BcVNaT2NQSJ5BzSTvrsOW5I%2FhQ6T0O0NVEBu45HsSphEMUWch6l%2FYzaNEzl4GsVR67RY5mWP4%2BZOj%2Fd3NGgHSMDcjhTzWoEHnWIhflzhvWefMLnJvqZccWui5vRTgqcCQw1g3SouG3cXfoTijx4UxiJFlHDBh0UZxtlbylM9EVnt09VLACUSBmf79DudEXSI2P6ePc8mN5iX0rXuchBiAMZKGt2Htg%2FNOKASURGiVI12KiUMa4IkwaPWiJ%2Fw5lAw2K2qD%2F23HkIdWxuAh%2FcpcfMKG8znkmDPolYVxydUvHyW8785tqybU%2BY7hPhyhREpgCb0ONs283Slv4R2ykswnzreJs4KARl%2Fp9B7xD5SszJPTZH2i9i8tUAiWLt%2F1Zl6LxJx8M5mU1u5qUAp67%2FcvI%2FzUN90yo%2B%2F1G32GdWawjYrzgNGC%2Fljug3t9z1W5bXcpRtyD6ftAOdrBa2Cjyi%2BRoZ3qaEUtSuAdxCsouIBHhu67sk9Xmbv0MqIORCin93jZ%2FOZwsMMrAgL0GOqUB%2FR6Car8Sm4ZNIpsbkk1zQ04T5XbEfLZNTwgCPMiEgd2zHxlZBQyoId3spwy85KJ8cq4zfEQhTC%2BrOi6nd%2FxhChhCx3XwvEymlAls8HHTCt8O2T0XRLblCrh0icL6zeFELghZg1QL8q4wRbWkg%2FB%2BBk7UBYnmqk6AiHKLR04Stt6GfxZ0IxbuCl7%2Fql5d6JKoqkOiozoWeYeKy%2FXSrH2Jx4L1kZ6W&X-Amz-Signature=43249021f7dde332e3b65bf238ce552dea3e6ffb47d279a02586e4bc6ab71d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFGK5K7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmacIlJwnWdj3kGGRf2qwIwgeDeclVE6wIU5X5hd3HFAiEA3dAcq3Ksr3PAasCQarJWvWzwOW0YrksAdXtLgTkSR04qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQXRImuW2Q%2BLBYjiircA1gXVOHMG3fOpsrcIkoHDBAeN6vAdI%2FHN5hPWdDdP8rpP88g%2BitNeDNxh8I5ePDnChjVGKGifjm6vD4MpiEb2KA4Is1wUJGATOBtQnBnoL7y07xtXGMz8Q%2BcVNaT2NQSJ5BzSTvrsOW5I%2FhQ6T0O0NVEBu45HsSphEMUWch6l%2FYzaNEzl4GsVR67RY5mWP4%2BZOj%2Fd3NGgHSMDcjhTzWoEHnWIhflzhvWefMLnJvqZccWui5vRTgqcCQw1g3SouG3cXfoTijx4UxiJFlHDBh0UZxtlbylM9EVnt09VLACUSBmf79DudEXSI2P6ePc8mN5iX0rXuchBiAMZKGt2Htg%2FNOKASURGiVI12KiUMa4IkwaPWiJ%2Fw5lAw2K2qD%2F23HkIdWxuAh%2FcpcfMKG8znkmDPolYVxydUvHyW8785tqybU%2BY7hPhyhREpgCb0ONs283Slv4R2ykswnzreJs4KARl%2Fp9B7xD5SszJPTZH2i9i8tUAiWLt%2F1Zl6LxJx8M5mU1u5qUAp67%2FcvI%2FzUN90yo%2B%2F1G32GdWawjYrzgNGC%2Fljug3t9z1W5bXcpRtyD6ftAOdrBa2Cjyi%2BRoZ3qaEUtSuAdxCsouIBHhu67sk9Xmbv0MqIORCin93jZ%2FOZwsMMrAgL0GOqUB%2FR6Car8Sm4ZNIpsbkk1zQ04T5XbEfLZNTwgCPMiEgd2zHxlZBQyoId3spwy85KJ8cq4zfEQhTC%2BrOi6nd%2FxhChhCx3XwvEymlAls8HHTCt8O2T0XRLblCrh0icL6zeFELghZg1QL8q4wRbWkg%2FB%2BBk7UBYnmqk6AiHKLR04Stt6GfxZ0IxbuCl7%2Fql5d6JKoqkOiozoWeYeKy%2FXSrH2Jx4L1kZ6W&X-Amz-Signature=57b2db0067e4e7a781168c5dcb24f678e991727f33a306b118798f0052565639&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFGK5K7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmacIlJwnWdj3kGGRf2qwIwgeDeclVE6wIU5X5hd3HFAiEA3dAcq3Ksr3PAasCQarJWvWzwOW0YrksAdXtLgTkSR04qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQXRImuW2Q%2BLBYjiircA1gXVOHMG3fOpsrcIkoHDBAeN6vAdI%2FHN5hPWdDdP8rpP88g%2BitNeDNxh8I5ePDnChjVGKGifjm6vD4MpiEb2KA4Is1wUJGATOBtQnBnoL7y07xtXGMz8Q%2BcVNaT2NQSJ5BzSTvrsOW5I%2FhQ6T0O0NVEBu45HsSphEMUWch6l%2FYzaNEzl4GsVR67RY5mWP4%2BZOj%2Fd3NGgHSMDcjhTzWoEHnWIhflzhvWefMLnJvqZccWui5vRTgqcCQw1g3SouG3cXfoTijx4UxiJFlHDBh0UZxtlbylM9EVnt09VLACUSBmf79DudEXSI2P6ePc8mN5iX0rXuchBiAMZKGt2Htg%2FNOKASURGiVI12KiUMa4IkwaPWiJ%2Fw5lAw2K2qD%2F23HkIdWxuAh%2FcpcfMKG8znkmDPolYVxydUvHyW8785tqybU%2BY7hPhyhREpgCb0ONs283Slv4R2ykswnzreJs4KARl%2Fp9B7xD5SszJPTZH2i9i8tUAiWLt%2F1Zl6LxJx8M5mU1u5qUAp67%2FcvI%2FzUN90yo%2B%2F1G32GdWawjYrzgNGC%2Fljug3t9z1W5bXcpRtyD6ftAOdrBa2Cjyi%2BRoZ3qaEUtSuAdxCsouIBHhu67sk9Xmbv0MqIORCin93jZ%2FOZwsMMrAgL0GOqUB%2FR6Car8Sm4ZNIpsbkk1zQ04T5XbEfLZNTwgCPMiEgd2zHxlZBQyoId3spwy85KJ8cq4zfEQhTC%2BrOi6nd%2FxhChhCx3XwvEymlAls8HHTCt8O2T0XRLblCrh0icL6zeFELghZg1QL8q4wRbWkg%2FB%2BBk7UBYnmqk6AiHKLR04Stt6GfxZ0IxbuCl7%2Fql5d6JKoqkOiozoWeYeKy%2FXSrH2Jx4L1kZ6W&X-Amz-Signature=010d477be63d8439c7be94146b25c95ad2c992e4fee02707ea5a96483d6f935d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFGK5K7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmacIlJwnWdj3kGGRf2qwIwgeDeclVE6wIU5X5hd3HFAiEA3dAcq3Ksr3PAasCQarJWvWzwOW0YrksAdXtLgTkSR04qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQXRImuW2Q%2BLBYjiircA1gXVOHMG3fOpsrcIkoHDBAeN6vAdI%2FHN5hPWdDdP8rpP88g%2BitNeDNxh8I5ePDnChjVGKGifjm6vD4MpiEb2KA4Is1wUJGATOBtQnBnoL7y07xtXGMz8Q%2BcVNaT2NQSJ5BzSTvrsOW5I%2FhQ6T0O0NVEBu45HsSphEMUWch6l%2FYzaNEzl4GsVR67RY5mWP4%2BZOj%2Fd3NGgHSMDcjhTzWoEHnWIhflzhvWefMLnJvqZccWui5vRTgqcCQw1g3SouG3cXfoTijx4UxiJFlHDBh0UZxtlbylM9EVnt09VLACUSBmf79DudEXSI2P6ePc8mN5iX0rXuchBiAMZKGt2Htg%2FNOKASURGiVI12KiUMa4IkwaPWiJ%2Fw5lAw2K2qD%2F23HkIdWxuAh%2FcpcfMKG8znkmDPolYVxydUvHyW8785tqybU%2BY7hPhyhREpgCb0ONs283Slv4R2ykswnzreJs4KARl%2Fp9B7xD5SszJPTZH2i9i8tUAiWLt%2F1Zl6LxJx8M5mU1u5qUAp67%2FcvI%2FzUN90yo%2B%2F1G32GdWawjYrzgNGC%2Fljug3t9z1W5bXcpRtyD6ftAOdrBa2Cjyi%2BRoZ3qaEUtSuAdxCsouIBHhu67sk9Xmbv0MqIORCin93jZ%2FOZwsMMrAgL0GOqUB%2FR6Car8Sm4ZNIpsbkk1zQ04T5XbEfLZNTwgCPMiEgd2zHxlZBQyoId3spwy85KJ8cq4zfEQhTC%2BrOi6nd%2FxhChhCx3XwvEymlAls8HHTCt8O2T0XRLblCrh0icL6zeFELghZg1QL8q4wRbWkg%2FB%2BBk7UBYnmqk6AiHKLR04Stt6GfxZ0IxbuCl7%2Fql5d6JKoqkOiozoWeYeKy%2FXSrH2Jx4L1kZ6W&X-Amz-Signature=7eb99f3e19a4faa0ecff1a7d9fcbd627464de89e66a3ccc53c906fb42d8ef7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFGK5K7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmacIlJwnWdj3kGGRf2qwIwgeDeclVE6wIU5X5hd3HFAiEA3dAcq3Ksr3PAasCQarJWvWzwOW0YrksAdXtLgTkSR04qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQXRImuW2Q%2BLBYjiircA1gXVOHMG3fOpsrcIkoHDBAeN6vAdI%2FHN5hPWdDdP8rpP88g%2BitNeDNxh8I5ePDnChjVGKGifjm6vD4MpiEb2KA4Is1wUJGATOBtQnBnoL7y07xtXGMz8Q%2BcVNaT2NQSJ5BzSTvrsOW5I%2FhQ6T0O0NVEBu45HsSphEMUWch6l%2FYzaNEzl4GsVR67RY5mWP4%2BZOj%2Fd3NGgHSMDcjhTzWoEHnWIhflzhvWefMLnJvqZccWui5vRTgqcCQw1g3SouG3cXfoTijx4UxiJFlHDBh0UZxtlbylM9EVnt09VLACUSBmf79DudEXSI2P6ePc8mN5iX0rXuchBiAMZKGt2Htg%2FNOKASURGiVI12KiUMa4IkwaPWiJ%2Fw5lAw2K2qD%2F23HkIdWxuAh%2FcpcfMKG8znkmDPolYVxydUvHyW8785tqybU%2BY7hPhyhREpgCb0ONs283Slv4R2ykswnzreJs4KARl%2Fp9B7xD5SszJPTZH2i9i8tUAiWLt%2F1Zl6LxJx8M5mU1u5qUAp67%2FcvI%2FzUN90yo%2B%2F1G32GdWawjYrzgNGC%2Fljug3t9z1W5bXcpRtyD6ftAOdrBa2Cjyi%2BRoZ3qaEUtSuAdxCsouIBHhu67sk9Xmbv0MqIORCin93jZ%2FOZwsMMrAgL0GOqUB%2FR6Car8Sm4ZNIpsbkk1zQ04T5XbEfLZNTwgCPMiEgd2zHxlZBQyoId3spwy85KJ8cq4zfEQhTC%2BrOi6nd%2FxhChhCx3XwvEymlAls8HHTCt8O2T0XRLblCrh0icL6zeFELghZg1QL8q4wRbWkg%2FB%2BBk7UBYnmqk6AiHKLR04Stt6GfxZ0IxbuCl7%2Fql5d6JKoqkOiozoWeYeKy%2FXSrH2Jx4L1kZ6W&X-Amz-Signature=f0b8be1ff740ca230f0965041bb3641111d7766aecf708eb4053eeab3be851de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFGK5K7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmacIlJwnWdj3kGGRf2qwIwgeDeclVE6wIU5X5hd3HFAiEA3dAcq3Ksr3PAasCQarJWvWzwOW0YrksAdXtLgTkSR04qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQXRImuW2Q%2BLBYjiircA1gXVOHMG3fOpsrcIkoHDBAeN6vAdI%2FHN5hPWdDdP8rpP88g%2BitNeDNxh8I5ePDnChjVGKGifjm6vD4MpiEb2KA4Is1wUJGATOBtQnBnoL7y07xtXGMz8Q%2BcVNaT2NQSJ5BzSTvrsOW5I%2FhQ6T0O0NVEBu45HsSphEMUWch6l%2FYzaNEzl4GsVR67RY5mWP4%2BZOj%2Fd3NGgHSMDcjhTzWoEHnWIhflzhvWefMLnJvqZccWui5vRTgqcCQw1g3SouG3cXfoTijx4UxiJFlHDBh0UZxtlbylM9EVnt09VLACUSBmf79DudEXSI2P6ePc8mN5iX0rXuchBiAMZKGt2Htg%2FNOKASURGiVI12KiUMa4IkwaPWiJ%2Fw5lAw2K2qD%2F23HkIdWxuAh%2FcpcfMKG8znkmDPolYVxydUvHyW8785tqybU%2BY7hPhyhREpgCb0ONs283Slv4R2ykswnzreJs4KARl%2Fp9B7xD5SszJPTZH2i9i8tUAiWLt%2F1Zl6LxJx8M5mU1u5qUAp67%2FcvI%2FzUN90yo%2B%2F1G32GdWawjYrzgNGC%2Fljug3t9z1W5bXcpRtyD6ftAOdrBa2Cjyi%2BRoZ3qaEUtSuAdxCsouIBHhu67sk9Xmbv0MqIORCin93jZ%2FOZwsMMrAgL0GOqUB%2FR6Car8Sm4ZNIpsbkk1zQ04T5XbEfLZNTwgCPMiEgd2zHxlZBQyoId3spwy85KJ8cq4zfEQhTC%2BrOi6nd%2FxhChhCx3XwvEymlAls8HHTCt8O2T0XRLblCrh0icL6zeFELghZg1QL8q4wRbWkg%2FB%2BBk7UBYnmqk6AiHKLR04Stt6GfxZ0IxbuCl7%2Fql5d6JKoqkOiozoWeYeKy%2FXSrH2Jx4L1kZ6W&X-Amz-Signature=1bb1b1b5362cd33f6217ae241f557311d7a315f451f0db7c90c17f45353c3110&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFGK5K7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmacIlJwnWdj3kGGRf2qwIwgeDeclVE6wIU5X5hd3HFAiEA3dAcq3Ksr3PAasCQarJWvWzwOW0YrksAdXtLgTkSR04qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQXRImuW2Q%2BLBYjiircA1gXVOHMG3fOpsrcIkoHDBAeN6vAdI%2FHN5hPWdDdP8rpP88g%2BitNeDNxh8I5ePDnChjVGKGifjm6vD4MpiEb2KA4Is1wUJGATOBtQnBnoL7y07xtXGMz8Q%2BcVNaT2NQSJ5BzSTvrsOW5I%2FhQ6T0O0NVEBu45HsSphEMUWch6l%2FYzaNEzl4GsVR67RY5mWP4%2BZOj%2Fd3NGgHSMDcjhTzWoEHnWIhflzhvWefMLnJvqZccWui5vRTgqcCQw1g3SouG3cXfoTijx4UxiJFlHDBh0UZxtlbylM9EVnt09VLACUSBmf79DudEXSI2P6ePc8mN5iX0rXuchBiAMZKGt2Htg%2FNOKASURGiVI12KiUMa4IkwaPWiJ%2Fw5lAw2K2qD%2F23HkIdWxuAh%2FcpcfMKG8znkmDPolYVxydUvHyW8785tqybU%2BY7hPhyhREpgCb0ONs283Slv4R2ykswnzreJs4KARl%2Fp9B7xD5SszJPTZH2i9i8tUAiWLt%2F1Zl6LxJx8M5mU1u5qUAp67%2FcvI%2FzUN90yo%2B%2F1G32GdWawjYrzgNGC%2Fljug3t9z1W5bXcpRtyD6ftAOdrBa2Cjyi%2BRoZ3qaEUtSuAdxCsouIBHhu67sk9Xmbv0MqIORCin93jZ%2FOZwsMMrAgL0GOqUB%2FR6Car8Sm4ZNIpsbkk1zQ04T5XbEfLZNTwgCPMiEgd2zHxlZBQyoId3spwy85KJ8cq4zfEQhTC%2BrOi6nd%2FxhChhCx3XwvEymlAls8HHTCt8O2T0XRLblCrh0icL6zeFELghZg1QL8q4wRbWkg%2FB%2BBk7UBYnmqk6AiHKLR04Stt6GfxZ0IxbuCl7%2Fql5d6JKoqkOiozoWeYeKy%2FXSrH2Jx4L1kZ6W&X-Amz-Signature=a9d8cc4683cf5744f292c5301d3eeb5213e9e09e87e9a3369e4b8cc73fcab2fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFGK5K7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmacIlJwnWdj3kGGRf2qwIwgeDeclVE6wIU5X5hd3HFAiEA3dAcq3Ksr3PAasCQarJWvWzwOW0YrksAdXtLgTkSR04qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQXRImuW2Q%2BLBYjiircA1gXVOHMG3fOpsrcIkoHDBAeN6vAdI%2FHN5hPWdDdP8rpP88g%2BitNeDNxh8I5ePDnChjVGKGifjm6vD4MpiEb2KA4Is1wUJGATOBtQnBnoL7y07xtXGMz8Q%2BcVNaT2NQSJ5BzSTvrsOW5I%2FhQ6T0O0NVEBu45HsSphEMUWch6l%2FYzaNEzl4GsVR67RY5mWP4%2BZOj%2Fd3NGgHSMDcjhTzWoEHnWIhflzhvWefMLnJvqZccWui5vRTgqcCQw1g3SouG3cXfoTijx4UxiJFlHDBh0UZxtlbylM9EVnt09VLACUSBmf79DudEXSI2P6ePc8mN5iX0rXuchBiAMZKGt2Htg%2FNOKASURGiVI12KiUMa4IkwaPWiJ%2Fw5lAw2K2qD%2F23HkIdWxuAh%2FcpcfMKG8znkmDPolYVxydUvHyW8785tqybU%2BY7hPhyhREpgCb0ONs283Slv4R2ykswnzreJs4KARl%2Fp9B7xD5SszJPTZH2i9i8tUAiWLt%2F1Zl6LxJx8M5mU1u5qUAp67%2FcvI%2FzUN90yo%2B%2F1G32GdWawjYrzgNGC%2Fljug3t9z1W5bXcpRtyD6ftAOdrBa2Cjyi%2BRoZ3qaEUtSuAdxCsouIBHhu67sk9Xmbv0MqIORCin93jZ%2FOZwsMMrAgL0GOqUB%2FR6Car8Sm4ZNIpsbkk1zQ04T5XbEfLZNTwgCPMiEgd2zHxlZBQyoId3spwy85KJ8cq4zfEQhTC%2BrOi6nd%2FxhChhCx3XwvEymlAls8HHTCt8O2T0XRLblCrh0icL6zeFELghZg1QL8q4wRbWkg%2FB%2BBk7UBYnmqk6AiHKLR04Stt6GfxZ0IxbuCl7%2Fql5d6JKoqkOiozoWeYeKy%2FXSrH2Jx4L1kZ6W&X-Amz-Signature=ae82bbafa60dcc89e438029617705e35a1d184119ab08b006c98c9b5c271ca0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

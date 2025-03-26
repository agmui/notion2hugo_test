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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREKLWM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZlgD9lst8sbQ1UleUt1eI2a%2Fpm8Xs%2FQEKQxXf8TRvXAiAyqnA%2BpGU%2Fw9JdAaK8DCMFc7xze8c2YN7ul92SwjtqIir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM7QnpfTONYm83JenMKtwDWDDoMiUYCHvv2a90tuF7JCpG9FrvqoBKgm%2Bh6znm2gyvtKPCXiFigmdSZyfFtmQ4Qp0zD%2F13M6Rj4GS5jBnDpyKj99C3i8fuiRT%2FutDkmEw4S9kSJeNzA91Ifmm03XpEf1JfT6pZXsDEznM0AGexAhKitmEYgOTxD1YvbZWh9Ubxkfdnu%2FDWPCxDf636mAyLp89C%2BNSSrDgF94FxtTVMCF52%2BdTV4BwVyjbMSsPDX%2F%2B8I9t%2BsGz4enL%2FYelXSVQ6YBqfpXWYUJRz6PV9VhS0MZ75HOUoqwZgom96y0NV6irszf%2BqU6S0xI2%2FzBXFP1MW8fCsu3NfJk9oOR%2FtEwQluEwcHMoVrBoC7qzcxPr0jh8%2BRBnTguSDCNn9Qk9dBLN19tMeyltUl8hBYKNt3d0dcriZxh58%2Fmmv2Jt%2B7Z2dkmltSerHwDfhjiRIaM2l94tzLI8BPTYOpWUPkLls6K17%2F7ZwUa8hR9rf%2BXsVWuFjl6VJ8BOm8V0M%2BrmZioDPaYeATjMXuOemBfLj%2FuyRtPjdkG48u9mgLUpxbb%2BRy7dFlQxi2q4XTSiBiFaQu0rd0ir4uZCl%2BoEnuA9BUkZUb1G86iSkvMQV9wTx0YH0BxxUlfUOSBB%2BXtnQKZu%2Ffy4wk62OvwY6pgFVZ1PYN7txtzPMDrA%2Ff%2BXl9XGm63azveivyrYSTbT8PBrcnQMSGGYYFExBY5GMJY2eVYemwLY%2FgWfitCYESBBxDmwZerIjyEhhrR2DbosDk7PNKeMVTBhkvYerJTuLsngPZh%2FSuNZeIUGcm6vJ0XfQH7bL2rvxASGTplWYgOGAZhCRpxGMfwLFCaRuTJp4kqL2%2Bp4KhEnkW04QzxBi1q3JJaK1KgX6&X-Amz-Signature=e19aee4a9f2cdc290072ee83471240f873bd653e1b62b2d4a315f0ddd8c13a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREKLWM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZlgD9lst8sbQ1UleUt1eI2a%2Fpm8Xs%2FQEKQxXf8TRvXAiAyqnA%2BpGU%2Fw9JdAaK8DCMFc7xze8c2YN7ul92SwjtqIir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM7QnpfTONYm83JenMKtwDWDDoMiUYCHvv2a90tuF7JCpG9FrvqoBKgm%2Bh6znm2gyvtKPCXiFigmdSZyfFtmQ4Qp0zD%2F13M6Rj4GS5jBnDpyKj99C3i8fuiRT%2FutDkmEw4S9kSJeNzA91Ifmm03XpEf1JfT6pZXsDEznM0AGexAhKitmEYgOTxD1YvbZWh9Ubxkfdnu%2FDWPCxDf636mAyLp89C%2BNSSrDgF94FxtTVMCF52%2BdTV4BwVyjbMSsPDX%2F%2B8I9t%2BsGz4enL%2FYelXSVQ6YBqfpXWYUJRz6PV9VhS0MZ75HOUoqwZgom96y0NV6irszf%2BqU6S0xI2%2FzBXFP1MW8fCsu3NfJk9oOR%2FtEwQluEwcHMoVrBoC7qzcxPr0jh8%2BRBnTguSDCNn9Qk9dBLN19tMeyltUl8hBYKNt3d0dcriZxh58%2Fmmv2Jt%2B7Z2dkmltSerHwDfhjiRIaM2l94tzLI8BPTYOpWUPkLls6K17%2F7ZwUa8hR9rf%2BXsVWuFjl6VJ8BOm8V0M%2BrmZioDPaYeATjMXuOemBfLj%2FuyRtPjdkG48u9mgLUpxbb%2BRy7dFlQxi2q4XTSiBiFaQu0rd0ir4uZCl%2BoEnuA9BUkZUb1G86iSkvMQV9wTx0YH0BxxUlfUOSBB%2BXtnQKZu%2Ffy4wk62OvwY6pgFVZ1PYN7txtzPMDrA%2Ff%2BXl9XGm63azveivyrYSTbT8PBrcnQMSGGYYFExBY5GMJY2eVYemwLY%2FgWfitCYESBBxDmwZerIjyEhhrR2DbosDk7PNKeMVTBhkvYerJTuLsngPZh%2FSuNZeIUGcm6vJ0XfQH7bL2rvxASGTplWYgOGAZhCRpxGMfwLFCaRuTJp4kqL2%2Bp4KhEnkW04QzxBi1q3JJaK1KgX6&X-Amz-Signature=6dc72b18dbccdcb7387349da5b4ad6b4d9094b7f08878797f9080e53315d2460&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREKLWM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZlgD9lst8sbQ1UleUt1eI2a%2Fpm8Xs%2FQEKQxXf8TRvXAiAyqnA%2BpGU%2Fw9JdAaK8DCMFc7xze8c2YN7ul92SwjtqIir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM7QnpfTONYm83JenMKtwDWDDoMiUYCHvv2a90tuF7JCpG9FrvqoBKgm%2Bh6znm2gyvtKPCXiFigmdSZyfFtmQ4Qp0zD%2F13M6Rj4GS5jBnDpyKj99C3i8fuiRT%2FutDkmEw4S9kSJeNzA91Ifmm03XpEf1JfT6pZXsDEznM0AGexAhKitmEYgOTxD1YvbZWh9Ubxkfdnu%2FDWPCxDf636mAyLp89C%2BNSSrDgF94FxtTVMCF52%2BdTV4BwVyjbMSsPDX%2F%2B8I9t%2BsGz4enL%2FYelXSVQ6YBqfpXWYUJRz6PV9VhS0MZ75HOUoqwZgom96y0NV6irszf%2BqU6S0xI2%2FzBXFP1MW8fCsu3NfJk9oOR%2FtEwQluEwcHMoVrBoC7qzcxPr0jh8%2BRBnTguSDCNn9Qk9dBLN19tMeyltUl8hBYKNt3d0dcriZxh58%2Fmmv2Jt%2B7Z2dkmltSerHwDfhjiRIaM2l94tzLI8BPTYOpWUPkLls6K17%2F7ZwUa8hR9rf%2BXsVWuFjl6VJ8BOm8V0M%2BrmZioDPaYeATjMXuOemBfLj%2FuyRtPjdkG48u9mgLUpxbb%2BRy7dFlQxi2q4XTSiBiFaQu0rd0ir4uZCl%2BoEnuA9BUkZUb1G86iSkvMQV9wTx0YH0BxxUlfUOSBB%2BXtnQKZu%2Ffy4wk62OvwY6pgFVZ1PYN7txtzPMDrA%2Ff%2BXl9XGm63azveivyrYSTbT8PBrcnQMSGGYYFExBY5GMJY2eVYemwLY%2FgWfitCYESBBxDmwZerIjyEhhrR2DbosDk7PNKeMVTBhkvYerJTuLsngPZh%2FSuNZeIUGcm6vJ0XfQH7bL2rvxASGTplWYgOGAZhCRpxGMfwLFCaRuTJp4kqL2%2Bp4KhEnkW04QzxBi1q3JJaK1KgX6&X-Amz-Signature=e1619df8a0cbb99e00448db39d725d955ce7caefaa82b4d9c0a8fc4f086ef75c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREKLWM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZlgD9lst8sbQ1UleUt1eI2a%2Fpm8Xs%2FQEKQxXf8TRvXAiAyqnA%2BpGU%2Fw9JdAaK8DCMFc7xze8c2YN7ul92SwjtqIir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM7QnpfTONYm83JenMKtwDWDDoMiUYCHvv2a90tuF7JCpG9FrvqoBKgm%2Bh6znm2gyvtKPCXiFigmdSZyfFtmQ4Qp0zD%2F13M6Rj4GS5jBnDpyKj99C3i8fuiRT%2FutDkmEw4S9kSJeNzA91Ifmm03XpEf1JfT6pZXsDEznM0AGexAhKitmEYgOTxD1YvbZWh9Ubxkfdnu%2FDWPCxDf636mAyLp89C%2BNSSrDgF94FxtTVMCF52%2BdTV4BwVyjbMSsPDX%2F%2B8I9t%2BsGz4enL%2FYelXSVQ6YBqfpXWYUJRz6PV9VhS0MZ75HOUoqwZgom96y0NV6irszf%2BqU6S0xI2%2FzBXFP1MW8fCsu3NfJk9oOR%2FtEwQluEwcHMoVrBoC7qzcxPr0jh8%2BRBnTguSDCNn9Qk9dBLN19tMeyltUl8hBYKNt3d0dcriZxh58%2Fmmv2Jt%2B7Z2dkmltSerHwDfhjiRIaM2l94tzLI8BPTYOpWUPkLls6K17%2F7ZwUa8hR9rf%2BXsVWuFjl6VJ8BOm8V0M%2BrmZioDPaYeATjMXuOemBfLj%2FuyRtPjdkG48u9mgLUpxbb%2BRy7dFlQxi2q4XTSiBiFaQu0rd0ir4uZCl%2BoEnuA9BUkZUb1G86iSkvMQV9wTx0YH0BxxUlfUOSBB%2BXtnQKZu%2Ffy4wk62OvwY6pgFVZ1PYN7txtzPMDrA%2Ff%2BXl9XGm63azveivyrYSTbT8PBrcnQMSGGYYFExBY5GMJY2eVYemwLY%2FgWfitCYESBBxDmwZerIjyEhhrR2DbosDk7PNKeMVTBhkvYerJTuLsngPZh%2FSuNZeIUGcm6vJ0XfQH7bL2rvxASGTplWYgOGAZhCRpxGMfwLFCaRuTJp4kqL2%2Bp4KhEnkW04QzxBi1q3JJaK1KgX6&X-Amz-Signature=7c9a9490206ebe75d8214f28b94221771b1f3bee24328796091b1cb94ce03f63&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREKLWM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZlgD9lst8sbQ1UleUt1eI2a%2Fpm8Xs%2FQEKQxXf8TRvXAiAyqnA%2BpGU%2Fw9JdAaK8DCMFc7xze8c2YN7ul92SwjtqIir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM7QnpfTONYm83JenMKtwDWDDoMiUYCHvv2a90tuF7JCpG9FrvqoBKgm%2Bh6znm2gyvtKPCXiFigmdSZyfFtmQ4Qp0zD%2F13M6Rj4GS5jBnDpyKj99C3i8fuiRT%2FutDkmEw4S9kSJeNzA91Ifmm03XpEf1JfT6pZXsDEznM0AGexAhKitmEYgOTxD1YvbZWh9Ubxkfdnu%2FDWPCxDf636mAyLp89C%2BNSSrDgF94FxtTVMCF52%2BdTV4BwVyjbMSsPDX%2F%2B8I9t%2BsGz4enL%2FYelXSVQ6YBqfpXWYUJRz6PV9VhS0MZ75HOUoqwZgom96y0NV6irszf%2BqU6S0xI2%2FzBXFP1MW8fCsu3NfJk9oOR%2FtEwQluEwcHMoVrBoC7qzcxPr0jh8%2BRBnTguSDCNn9Qk9dBLN19tMeyltUl8hBYKNt3d0dcriZxh58%2Fmmv2Jt%2B7Z2dkmltSerHwDfhjiRIaM2l94tzLI8BPTYOpWUPkLls6K17%2F7ZwUa8hR9rf%2BXsVWuFjl6VJ8BOm8V0M%2BrmZioDPaYeATjMXuOemBfLj%2FuyRtPjdkG48u9mgLUpxbb%2BRy7dFlQxi2q4XTSiBiFaQu0rd0ir4uZCl%2BoEnuA9BUkZUb1G86iSkvMQV9wTx0YH0BxxUlfUOSBB%2BXtnQKZu%2Ffy4wk62OvwY6pgFVZ1PYN7txtzPMDrA%2Ff%2BXl9XGm63azveivyrYSTbT8PBrcnQMSGGYYFExBY5GMJY2eVYemwLY%2FgWfitCYESBBxDmwZerIjyEhhrR2DbosDk7PNKeMVTBhkvYerJTuLsngPZh%2FSuNZeIUGcm6vJ0XfQH7bL2rvxASGTplWYgOGAZhCRpxGMfwLFCaRuTJp4kqL2%2Bp4KhEnkW04QzxBi1q3JJaK1KgX6&X-Amz-Signature=ee4a7922909e8a7c1deca9a69632f8159ae15e6e8ac44e1b1f9f31fb758edbd5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREKLWM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZlgD9lst8sbQ1UleUt1eI2a%2Fpm8Xs%2FQEKQxXf8TRvXAiAyqnA%2BpGU%2Fw9JdAaK8DCMFc7xze8c2YN7ul92SwjtqIir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM7QnpfTONYm83JenMKtwDWDDoMiUYCHvv2a90tuF7JCpG9FrvqoBKgm%2Bh6znm2gyvtKPCXiFigmdSZyfFtmQ4Qp0zD%2F13M6Rj4GS5jBnDpyKj99C3i8fuiRT%2FutDkmEw4S9kSJeNzA91Ifmm03XpEf1JfT6pZXsDEznM0AGexAhKitmEYgOTxD1YvbZWh9Ubxkfdnu%2FDWPCxDf636mAyLp89C%2BNSSrDgF94FxtTVMCF52%2BdTV4BwVyjbMSsPDX%2F%2B8I9t%2BsGz4enL%2FYelXSVQ6YBqfpXWYUJRz6PV9VhS0MZ75HOUoqwZgom96y0NV6irszf%2BqU6S0xI2%2FzBXFP1MW8fCsu3NfJk9oOR%2FtEwQluEwcHMoVrBoC7qzcxPr0jh8%2BRBnTguSDCNn9Qk9dBLN19tMeyltUl8hBYKNt3d0dcriZxh58%2Fmmv2Jt%2B7Z2dkmltSerHwDfhjiRIaM2l94tzLI8BPTYOpWUPkLls6K17%2F7ZwUa8hR9rf%2BXsVWuFjl6VJ8BOm8V0M%2BrmZioDPaYeATjMXuOemBfLj%2FuyRtPjdkG48u9mgLUpxbb%2BRy7dFlQxi2q4XTSiBiFaQu0rd0ir4uZCl%2BoEnuA9BUkZUb1G86iSkvMQV9wTx0YH0BxxUlfUOSBB%2BXtnQKZu%2Ffy4wk62OvwY6pgFVZ1PYN7txtzPMDrA%2Ff%2BXl9XGm63azveivyrYSTbT8PBrcnQMSGGYYFExBY5GMJY2eVYemwLY%2FgWfitCYESBBxDmwZerIjyEhhrR2DbosDk7PNKeMVTBhkvYerJTuLsngPZh%2FSuNZeIUGcm6vJ0XfQH7bL2rvxASGTplWYgOGAZhCRpxGMfwLFCaRuTJp4kqL2%2Bp4KhEnkW04QzxBi1q3JJaK1KgX6&X-Amz-Signature=ca04877209d443f21198a5c82bf9a05fad637c9aaf4e163551eb78cd46b78d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREKLWM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZlgD9lst8sbQ1UleUt1eI2a%2Fpm8Xs%2FQEKQxXf8TRvXAiAyqnA%2BpGU%2Fw9JdAaK8DCMFc7xze8c2YN7ul92SwjtqIir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM7QnpfTONYm83JenMKtwDWDDoMiUYCHvv2a90tuF7JCpG9FrvqoBKgm%2Bh6znm2gyvtKPCXiFigmdSZyfFtmQ4Qp0zD%2F13M6Rj4GS5jBnDpyKj99C3i8fuiRT%2FutDkmEw4S9kSJeNzA91Ifmm03XpEf1JfT6pZXsDEznM0AGexAhKitmEYgOTxD1YvbZWh9Ubxkfdnu%2FDWPCxDf636mAyLp89C%2BNSSrDgF94FxtTVMCF52%2BdTV4BwVyjbMSsPDX%2F%2B8I9t%2BsGz4enL%2FYelXSVQ6YBqfpXWYUJRz6PV9VhS0MZ75HOUoqwZgom96y0NV6irszf%2BqU6S0xI2%2FzBXFP1MW8fCsu3NfJk9oOR%2FtEwQluEwcHMoVrBoC7qzcxPr0jh8%2BRBnTguSDCNn9Qk9dBLN19tMeyltUl8hBYKNt3d0dcriZxh58%2Fmmv2Jt%2B7Z2dkmltSerHwDfhjiRIaM2l94tzLI8BPTYOpWUPkLls6K17%2F7ZwUa8hR9rf%2BXsVWuFjl6VJ8BOm8V0M%2BrmZioDPaYeATjMXuOemBfLj%2FuyRtPjdkG48u9mgLUpxbb%2BRy7dFlQxi2q4XTSiBiFaQu0rd0ir4uZCl%2BoEnuA9BUkZUb1G86iSkvMQV9wTx0YH0BxxUlfUOSBB%2BXtnQKZu%2Ffy4wk62OvwY6pgFVZ1PYN7txtzPMDrA%2Ff%2BXl9XGm63azveivyrYSTbT8PBrcnQMSGGYYFExBY5GMJY2eVYemwLY%2FgWfitCYESBBxDmwZerIjyEhhrR2DbosDk7PNKeMVTBhkvYerJTuLsngPZh%2FSuNZeIUGcm6vJ0XfQH7bL2rvxASGTplWYgOGAZhCRpxGMfwLFCaRuTJp4kqL2%2Bp4KhEnkW04QzxBi1q3JJaK1KgX6&X-Amz-Signature=2572351b0e5f160cb386c99db61c288713bbc14148925f9f1fa1a4bf18270d45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREKLWM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZlgD9lst8sbQ1UleUt1eI2a%2Fpm8Xs%2FQEKQxXf8TRvXAiAyqnA%2BpGU%2Fw9JdAaK8DCMFc7xze8c2YN7ul92SwjtqIir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM7QnpfTONYm83JenMKtwDWDDoMiUYCHvv2a90tuF7JCpG9FrvqoBKgm%2Bh6znm2gyvtKPCXiFigmdSZyfFtmQ4Qp0zD%2F13M6Rj4GS5jBnDpyKj99C3i8fuiRT%2FutDkmEw4S9kSJeNzA91Ifmm03XpEf1JfT6pZXsDEznM0AGexAhKitmEYgOTxD1YvbZWh9Ubxkfdnu%2FDWPCxDf636mAyLp89C%2BNSSrDgF94FxtTVMCF52%2BdTV4BwVyjbMSsPDX%2F%2B8I9t%2BsGz4enL%2FYelXSVQ6YBqfpXWYUJRz6PV9VhS0MZ75HOUoqwZgom96y0NV6irszf%2BqU6S0xI2%2FzBXFP1MW8fCsu3NfJk9oOR%2FtEwQluEwcHMoVrBoC7qzcxPr0jh8%2BRBnTguSDCNn9Qk9dBLN19tMeyltUl8hBYKNt3d0dcriZxh58%2Fmmv2Jt%2B7Z2dkmltSerHwDfhjiRIaM2l94tzLI8BPTYOpWUPkLls6K17%2F7ZwUa8hR9rf%2BXsVWuFjl6VJ8BOm8V0M%2BrmZioDPaYeATjMXuOemBfLj%2FuyRtPjdkG48u9mgLUpxbb%2BRy7dFlQxi2q4XTSiBiFaQu0rd0ir4uZCl%2BoEnuA9BUkZUb1G86iSkvMQV9wTx0YH0BxxUlfUOSBB%2BXtnQKZu%2Ffy4wk62OvwY6pgFVZ1PYN7txtzPMDrA%2Ff%2BXl9XGm63azveivyrYSTbT8PBrcnQMSGGYYFExBY5GMJY2eVYemwLY%2FgWfitCYESBBxDmwZerIjyEhhrR2DbosDk7PNKeMVTBhkvYerJTuLsngPZh%2FSuNZeIUGcm6vJ0XfQH7bL2rvxASGTplWYgOGAZhCRpxGMfwLFCaRuTJp4kqL2%2Bp4KhEnkW04QzxBi1q3JJaK1KgX6&X-Amz-Signature=1f3cd582646fa8d5dfa59f5b6bd90993b49ec9ab5edbef6637e20d5dd82dee1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

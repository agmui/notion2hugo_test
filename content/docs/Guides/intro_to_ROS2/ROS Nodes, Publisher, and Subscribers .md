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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IJ7VJN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmQvHDH5IlTYFS%2FfNgHiFKSsy8iW0hSKa0qI9nuygDkAiAuulOloJjjLKASRHIJAJjmzRE59IMUow3L3%2FXZFeV6Gir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMOgdgra4HMvOmsjjEKtwDzEZbnWsyjNacfpyRO%2F1TNmXl%2BAxCsMC0J6a99mHC%2F%2Fhuo7m21eYI4ibU8sU68kBEyy53fEIJcYNQ1EPuS7sw1VfknSLTlZOHFee1%2BqxrbkvyTOQ2xH%2FOpFrxiRys9e22wfqY8RtqmPMLy5TxB8u7ypHPYu8q16e2OEw1r1iLBgzXdCFi%2BT5SXWptAPPT7b6bLFJJdNYxX5uERY3njTrNCFGybWnJKnGM8EUY3oF%2BUH7Df1NETVej7FXTwh2QcIS640lRC%2FB1nuYhHJNilDRHE0TL1X0xI76U2fKI9P%2B%2FyjzaQ3rJA4H89JMVPHZ%2B5w4ClM2b%2Fs0gnpZkbwKXJtd9Zmnby5tzPHHFvLbTcyRSGiJ8i7H4r%2FPR9ymiZf6eq9y4e2upOAbFMKPwU4Deb4VDVPOkY9QUu77FTHtW60qnkfmNm8DEPF43bh8qXwFoSmD4d4BZncEFHDAkuNUZ9WEi16fM%2FU8tb9v1GaGr561HHqo3x51u3fZjrolSec18I50F7sBxLrW4rHTsHhBWJ5gaG4n8FaWCNTzqHBuZD4%2FbZlMdeQ2itDnR%2BPz4jG6Iqk4L8mEm%2Bm6oIkcbKrc%2BPpqSdzHh0tMorRgC%2Bj57%2FRPcZy4RRGoqApY%2BsO9YW2UwpYy4wAY6pgH2bhHf9AKKreInnO9mGPequafbhXBjvChC8w%2B1fHEYo626ZcTvO1qQJIP2VSqqahEKrMhJsxxDU0fUm2wlZ%2BHKtkKLQey8jJ%2FeSNt2Old1shMqYq9Hr0LItjdNmkLP8ML2z5HenDnHNDWbIv%2F6fFDgEjZcL1zMxIXoBkxwkak%2BoT2WmpIW9QO8RvIdZku%2Bo56dsDxdIWuqolN69Z%2F%2FwB56FrpMhNbk&X-Amz-Signature=d8301bff10592de049f868d6a7b72ae5706f0daf739c22c66c2afe93b3a4020d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IJ7VJN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmQvHDH5IlTYFS%2FfNgHiFKSsy8iW0hSKa0qI9nuygDkAiAuulOloJjjLKASRHIJAJjmzRE59IMUow3L3%2FXZFeV6Gir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMOgdgra4HMvOmsjjEKtwDzEZbnWsyjNacfpyRO%2F1TNmXl%2BAxCsMC0J6a99mHC%2F%2Fhuo7m21eYI4ibU8sU68kBEyy53fEIJcYNQ1EPuS7sw1VfknSLTlZOHFee1%2BqxrbkvyTOQ2xH%2FOpFrxiRys9e22wfqY8RtqmPMLy5TxB8u7ypHPYu8q16e2OEw1r1iLBgzXdCFi%2BT5SXWptAPPT7b6bLFJJdNYxX5uERY3njTrNCFGybWnJKnGM8EUY3oF%2BUH7Df1NETVej7FXTwh2QcIS640lRC%2FB1nuYhHJNilDRHE0TL1X0xI76U2fKI9P%2B%2FyjzaQ3rJA4H89JMVPHZ%2B5w4ClM2b%2Fs0gnpZkbwKXJtd9Zmnby5tzPHHFvLbTcyRSGiJ8i7H4r%2FPR9ymiZf6eq9y4e2upOAbFMKPwU4Deb4VDVPOkY9QUu77FTHtW60qnkfmNm8DEPF43bh8qXwFoSmD4d4BZncEFHDAkuNUZ9WEi16fM%2FU8tb9v1GaGr561HHqo3x51u3fZjrolSec18I50F7sBxLrW4rHTsHhBWJ5gaG4n8FaWCNTzqHBuZD4%2FbZlMdeQ2itDnR%2BPz4jG6Iqk4L8mEm%2Bm6oIkcbKrc%2BPpqSdzHh0tMorRgC%2Bj57%2FRPcZy4RRGoqApY%2BsO9YW2UwpYy4wAY6pgH2bhHf9AKKreInnO9mGPequafbhXBjvChC8w%2B1fHEYo626ZcTvO1qQJIP2VSqqahEKrMhJsxxDU0fUm2wlZ%2BHKtkKLQey8jJ%2FeSNt2Old1shMqYq9Hr0LItjdNmkLP8ML2z5HenDnHNDWbIv%2F6fFDgEjZcL1zMxIXoBkxwkak%2BoT2WmpIW9QO8RvIdZku%2Bo56dsDxdIWuqolN69Z%2F%2FwB56FrpMhNbk&X-Amz-Signature=b29cd430c7f85b68abd42aaa3c9a7945dd17804c63eb22013d9663a059488932&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IJ7VJN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmQvHDH5IlTYFS%2FfNgHiFKSsy8iW0hSKa0qI9nuygDkAiAuulOloJjjLKASRHIJAJjmzRE59IMUow3L3%2FXZFeV6Gir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMOgdgra4HMvOmsjjEKtwDzEZbnWsyjNacfpyRO%2F1TNmXl%2BAxCsMC0J6a99mHC%2F%2Fhuo7m21eYI4ibU8sU68kBEyy53fEIJcYNQ1EPuS7sw1VfknSLTlZOHFee1%2BqxrbkvyTOQ2xH%2FOpFrxiRys9e22wfqY8RtqmPMLy5TxB8u7ypHPYu8q16e2OEw1r1iLBgzXdCFi%2BT5SXWptAPPT7b6bLFJJdNYxX5uERY3njTrNCFGybWnJKnGM8EUY3oF%2BUH7Df1NETVej7FXTwh2QcIS640lRC%2FB1nuYhHJNilDRHE0TL1X0xI76U2fKI9P%2B%2FyjzaQ3rJA4H89JMVPHZ%2B5w4ClM2b%2Fs0gnpZkbwKXJtd9Zmnby5tzPHHFvLbTcyRSGiJ8i7H4r%2FPR9ymiZf6eq9y4e2upOAbFMKPwU4Deb4VDVPOkY9QUu77FTHtW60qnkfmNm8DEPF43bh8qXwFoSmD4d4BZncEFHDAkuNUZ9WEi16fM%2FU8tb9v1GaGr561HHqo3x51u3fZjrolSec18I50F7sBxLrW4rHTsHhBWJ5gaG4n8FaWCNTzqHBuZD4%2FbZlMdeQ2itDnR%2BPz4jG6Iqk4L8mEm%2Bm6oIkcbKrc%2BPpqSdzHh0tMorRgC%2Bj57%2FRPcZy4RRGoqApY%2BsO9YW2UwpYy4wAY6pgH2bhHf9AKKreInnO9mGPequafbhXBjvChC8w%2B1fHEYo626ZcTvO1qQJIP2VSqqahEKrMhJsxxDU0fUm2wlZ%2BHKtkKLQey8jJ%2FeSNt2Old1shMqYq9Hr0LItjdNmkLP8ML2z5HenDnHNDWbIv%2F6fFDgEjZcL1zMxIXoBkxwkak%2BoT2WmpIW9QO8RvIdZku%2Bo56dsDxdIWuqolN69Z%2F%2FwB56FrpMhNbk&X-Amz-Signature=146f758e6bd8081aeb62988ea4a814983f0985904d66b65f1715df6c117d8808&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IJ7VJN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmQvHDH5IlTYFS%2FfNgHiFKSsy8iW0hSKa0qI9nuygDkAiAuulOloJjjLKASRHIJAJjmzRE59IMUow3L3%2FXZFeV6Gir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMOgdgra4HMvOmsjjEKtwDzEZbnWsyjNacfpyRO%2F1TNmXl%2BAxCsMC0J6a99mHC%2F%2Fhuo7m21eYI4ibU8sU68kBEyy53fEIJcYNQ1EPuS7sw1VfknSLTlZOHFee1%2BqxrbkvyTOQ2xH%2FOpFrxiRys9e22wfqY8RtqmPMLy5TxB8u7ypHPYu8q16e2OEw1r1iLBgzXdCFi%2BT5SXWptAPPT7b6bLFJJdNYxX5uERY3njTrNCFGybWnJKnGM8EUY3oF%2BUH7Df1NETVej7FXTwh2QcIS640lRC%2FB1nuYhHJNilDRHE0TL1X0xI76U2fKI9P%2B%2FyjzaQ3rJA4H89JMVPHZ%2B5w4ClM2b%2Fs0gnpZkbwKXJtd9Zmnby5tzPHHFvLbTcyRSGiJ8i7H4r%2FPR9ymiZf6eq9y4e2upOAbFMKPwU4Deb4VDVPOkY9QUu77FTHtW60qnkfmNm8DEPF43bh8qXwFoSmD4d4BZncEFHDAkuNUZ9WEi16fM%2FU8tb9v1GaGr561HHqo3x51u3fZjrolSec18I50F7sBxLrW4rHTsHhBWJ5gaG4n8FaWCNTzqHBuZD4%2FbZlMdeQ2itDnR%2BPz4jG6Iqk4L8mEm%2Bm6oIkcbKrc%2BPpqSdzHh0tMorRgC%2Bj57%2FRPcZy4RRGoqApY%2BsO9YW2UwpYy4wAY6pgH2bhHf9AKKreInnO9mGPequafbhXBjvChC8w%2B1fHEYo626ZcTvO1qQJIP2VSqqahEKrMhJsxxDU0fUm2wlZ%2BHKtkKLQey8jJ%2FeSNt2Old1shMqYq9Hr0LItjdNmkLP8ML2z5HenDnHNDWbIv%2F6fFDgEjZcL1zMxIXoBkxwkak%2BoT2WmpIW9QO8RvIdZku%2Bo56dsDxdIWuqolN69Z%2F%2FwB56FrpMhNbk&X-Amz-Signature=30d70314407766ee57b0a5a765c54391481e59603b41d1aa7eb7ee7d2bdfd69b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IJ7VJN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmQvHDH5IlTYFS%2FfNgHiFKSsy8iW0hSKa0qI9nuygDkAiAuulOloJjjLKASRHIJAJjmzRE59IMUow3L3%2FXZFeV6Gir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMOgdgra4HMvOmsjjEKtwDzEZbnWsyjNacfpyRO%2F1TNmXl%2BAxCsMC0J6a99mHC%2F%2Fhuo7m21eYI4ibU8sU68kBEyy53fEIJcYNQ1EPuS7sw1VfknSLTlZOHFee1%2BqxrbkvyTOQ2xH%2FOpFrxiRys9e22wfqY8RtqmPMLy5TxB8u7ypHPYu8q16e2OEw1r1iLBgzXdCFi%2BT5SXWptAPPT7b6bLFJJdNYxX5uERY3njTrNCFGybWnJKnGM8EUY3oF%2BUH7Df1NETVej7FXTwh2QcIS640lRC%2FB1nuYhHJNilDRHE0TL1X0xI76U2fKI9P%2B%2FyjzaQ3rJA4H89JMVPHZ%2B5w4ClM2b%2Fs0gnpZkbwKXJtd9Zmnby5tzPHHFvLbTcyRSGiJ8i7H4r%2FPR9ymiZf6eq9y4e2upOAbFMKPwU4Deb4VDVPOkY9QUu77FTHtW60qnkfmNm8DEPF43bh8qXwFoSmD4d4BZncEFHDAkuNUZ9WEi16fM%2FU8tb9v1GaGr561HHqo3x51u3fZjrolSec18I50F7sBxLrW4rHTsHhBWJ5gaG4n8FaWCNTzqHBuZD4%2FbZlMdeQ2itDnR%2BPz4jG6Iqk4L8mEm%2Bm6oIkcbKrc%2BPpqSdzHh0tMorRgC%2Bj57%2FRPcZy4RRGoqApY%2BsO9YW2UwpYy4wAY6pgH2bhHf9AKKreInnO9mGPequafbhXBjvChC8w%2B1fHEYo626ZcTvO1qQJIP2VSqqahEKrMhJsxxDU0fUm2wlZ%2BHKtkKLQey8jJ%2FeSNt2Old1shMqYq9Hr0LItjdNmkLP8ML2z5HenDnHNDWbIv%2F6fFDgEjZcL1zMxIXoBkxwkak%2BoT2WmpIW9QO8RvIdZku%2Bo56dsDxdIWuqolN69Z%2F%2FwB56FrpMhNbk&X-Amz-Signature=ebfc39824144d99ecdfbd32e14f41521c8f616cda464dbb423780e1c527db76c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IJ7VJN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmQvHDH5IlTYFS%2FfNgHiFKSsy8iW0hSKa0qI9nuygDkAiAuulOloJjjLKASRHIJAJjmzRE59IMUow3L3%2FXZFeV6Gir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMOgdgra4HMvOmsjjEKtwDzEZbnWsyjNacfpyRO%2F1TNmXl%2BAxCsMC0J6a99mHC%2F%2Fhuo7m21eYI4ibU8sU68kBEyy53fEIJcYNQ1EPuS7sw1VfknSLTlZOHFee1%2BqxrbkvyTOQ2xH%2FOpFrxiRys9e22wfqY8RtqmPMLy5TxB8u7ypHPYu8q16e2OEw1r1iLBgzXdCFi%2BT5SXWptAPPT7b6bLFJJdNYxX5uERY3njTrNCFGybWnJKnGM8EUY3oF%2BUH7Df1NETVej7FXTwh2QcIS640lRC%2FB1nuYhHJNilDRHE0TL1X0xI76U2fKI9P%2B%2FyjzaQ3rJA4H89JMVPHZ%2B5w4ClM2b%2Fs0gnpZkbwKXJtd9Zmnby5tzPHHFvLbTcyRSGiJ8i7H4r%2FPR9ymiZf6eq9y4e2upOAbFMKPwU4Deb4VDVPOkY9QUu77FTHtW60qnkfmNm8DEPF43bh8qXwFoSmD4d4BZncEFHDAkuNUZ9WEi16fM%2FU8tb9v1GaGr561HHqo3x51u3fZjrolSec18I50F7sBxLrW4rHTsHhBWJ5gaG4n8FaWCNTzqHBuZD4%2FbZlMdeQ2itDnR%2BPz4jG6Iqk4L8mEm%2Bm6oIkcbKrc%2BPpqSdzHh0tMorRgC%2Bj57%2FRPcZy4RRGoqApY%2BsO9YW2UwpYy4wAY6pgH2bhHf9AKKreInnO9mGPequafbhXBjvChC8w%2B1fHEYo626ZcTvO1qQJIP2VSqqahEKrMhJsxxDU0fUm2wlZ%2BHKtkKLQey8jJ%2FeSNt2Old1shMqYq9Hr0LItjdNmkLP8ML2z5HenDnHNDWbIv%2F6fFDgEjZcL1zMxIXoBkxwkak%2BoT2WmpIW9QO8RvIdZku%2Bo56dsDxdIWuqolN69Z%2F%2FwB56FrpMhNbk&X-Amz-Signature=082c751e438e55c3a9458526b142c1307ee6d978b9324d2b5f5e6f4865710faf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IJ7VJN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmQvHDH5IlTYFS%2FfNgHiFKSsy8iW0hSKa0qI9nuygDkAiAuulOloJjjLKASRHIJAJjmzRE59IMUow3L3%2FXZFeV6Gir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMOgdgra4HMvOmsjjEKtwDzEZbnWsyjNacfpyRO%2F1TNmXl%2BAxCsMC0J6a99mHC%2F%2Fhuo7m21eYI4ibU8sU68kBEyy53fEIJcYNQ1EPuS7sw1VfknSLTlZOHFee1%2BqxrbkvyTOQ2xH%2FOpFrxiRys9e22wfqY8RtqmPMLy5TxB8u7ypHPYu8q16e2OEw1r1iLBgzXdCFi%2BT5SXWptAPPT7b6bLFJJdNYxX5uERY3njTrNCFGybWnJKnGM8EUY3oF%2BUH7Df1NETVej7FXTwh2QcIS640lRC%2FB1nuYhHJNilDRHE0TL1X0xI76U2fKI9P%2B%2FyjzaQ3rJA4H89JMVPHZ%2B5w4ClM2b%2Fs0gnpZkbwKXJtd9Zmnby5tzPHHFvLbTcyRSGiJ8i7H4r%2FPR9ymiZf6eq9y4e2upOAbFMKPwU4Deb4VDVPOkY9QUu77FTHtW60qnkfmNm8DEPF43bh8qXwFoSmD4d4BZncEFHDAkuNUZ9WEi16fM%2FU8tb9v1GaGr561HHqo3x51u3fZjrolSec18I50F7sBxLrW4rHTsHhBWJ5gaG4n8FaWCNTzqHBuZD4%2FbZlMdeQ2itDnR%2BPz4jG6Iqk4L8mEm%2Bm6oIkcbKrc%2BPpqSdzHh0tMorRgC%2Bj57%2FRPcZy4RRGoqApY%2BsO9YW2UwpYy4wAY6pgH2bhHf9AKKreInnO9mGPequafbhXBjvChC8w%2B1fHEYo626ZcTvO1qQJIP2VSqqahEKrMhJsxxDU0fUm2wlZ%2BHKtkKLQey8jJ%2FeSNt2Old1shMqYq9Hr0LItjdNmkLP8ML2z5HenDnHNDWbIv%2F6fFDgEjZcL1zMxIXoBkxwkak%2BoT2WmpIW9QO8RvIdZku%2Bo56dsDxdIWuqolN69Z%2F%2FwB56FrpMhNbk&X-Amz-Signature=58cf68a18f15fd44ffea798a5d5a725ea63a7f6a3d29f2e39b1f91267d0b5d29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IJ7VJN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmQvHDH5IlTYFS%2FfNgHiFKSsy8iW0hSKa0qI9nuygDkAiAuulOloJjjLKASRHIJAJjmzRE59IMUow3L3%2FXZFeV6Gir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMOgdgra4HMvOmsjjEKtwDzEZbnWsyjNacfpyRO%2F1TNmXl%2BAxCsMC0J6a99mHC%2F%2Fhuo7m21eYI4ibU8sU68kBEyy53fEIJcYNQ1EPuS7sw1VfknSLTlZOHFee1%2BqxrbkvyTOQ2xH%2FOpFrxiRys9e22wfqY8RtqmPMLy5TxB8u7ypHPYu8q16e2OEw1r1iLBgzXdCFi%2BT5SXWptAPPT7b6bLFJJdNYxX5uERY3njTrNCFGybWnJKnGM8EUY3oF%2BUH7Df1NETVej7FXTwh2QcIS640lRC%2FB1nuYhHJNilDRHE0TL1X0xI76U2fKI9P%2B%2FyjzaQ3rJA4H89JMVPHZ%2B5w4ClM2b%2Fs0gnpZkbwKXJtd9Zmnby5tzPHHFvLbTcyRSGiJ8i7H4r%2FPR9ymiZf6eq9y4e2upOAbFMKPwU4Deb4VDVPOkY9QUu77FTHtW60qnkfmNm8DEPF43bh8qXwFoSmD4d4BZncEFHDAkuNUZ9WEi16fM%2FU8tb9v1GaGr561HHqo3x51u3fZjrolSec18I50F7sBxLrW4rHTsHhBWJ5gaG4n8FaWCNTzqHBuZD4%2FbZlMdeQ2itDnR%2BPz4jG6Iqk4L8mEm%2Bm6oIkcbKrc%2BPpqSdzHh0tMorRgC%2Bj57%2FRPcZy4RRGoqApY%2BsO9YW2UwpYy4wAY6pgH2bhHf9AKKreInnO9mGPequafbhXBjvChC8w%2B1fHEYo626ZcTvO1qQJIP2VSqqahEKrMhJsxxDU0fUm2wlZ%2BHKtkKLQey8jJ%2FeSNt2Old1shMqYq9Hr0LItjdNmkLP8ML2z5HenDnHNDWbIv%2F6fFDgEjZcL1zMxIXoBkxwkak%2BoT2WmpIW9QO8RvIdZku%2Bo56dsDxdIWuqolN69Z%2F%2FwB56FrpMhNbk&X-Amz-Signature=784d9dae283c5f8384cda1fc8475e291c8756de24a27b019b0654e639eda23f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

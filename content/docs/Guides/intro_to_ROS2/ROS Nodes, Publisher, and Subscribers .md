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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QW47XUG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCyVNhWjgSSmaOPVn5mQ10RSX94NHPu1rVGcTPbEGaS6AIgG0wyGfQNTISAt4%2B4VoUJSDcKtBF1%2FqnWHHRiqZmdbRoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3FUxku53%2BNqQ8IkSrcA9stCuyUmFIhs3FjT2IB5JdgO9t3U8msNkPYKvWd57VpfPCFNi1D%2Bfpx1Wk1v4k%2BMTF6XUy5nBjX2MBK9bcqF8qjfly9O9BCmfHa5BBzC1N6Fc0SxIh9g3yCbxpUqdSH%2BinyzBkKY1Kj1VmB4R8v2GTbCxwjdaq7hpruZd6QD%2Bu%2Fp%2BNz%2FSRn8cGv3d85IiwIy5aj9jLYarfQH31139t32kNOlkTcNfFPWRXtjMYrnEQoIGrIsoWcXYBV4ev4F3Vknye8LPcRtUsuyJxDlkwSh26XKDSrUQa%2BQKyMjUoHSC5O8EPqDKoZZT%2BZ73wrblImv%2Fj9cb8dgjeIDC7DYRFsMRWERMLcFYpIZPRokKTMeA%2B4%2Bab2cVCbOkiR0PCKIg01IDySO320QMMK5UNpDhTU5XkTvHOHyPqp0dBgyGLSFkffoxzbhPMuyXWuL%2BF8Zx95S2fB96pd3v2Lax1gwVMKgfShIj35SyXXIorsn9gRImF0pckrVzKESNAW7oCkkwJQhb7vaOzZ%2FpILhwNiEUGH%2FmRROSVn1OnxCITLtIcLRauysYMYDSWp7edu%2B59zxJxl8l48dfadx%2Blj7OKUoVCzZEPtLYTdcPQKhzpG2a5Zq5UIFXjm8Qx6asFiCbFzMMq0hL4GOqUBNC65EDcQSUcLziWE4qNYHNxzDQT%2BzCj%2FSlqcZp7V%2Fl8iZd0YtgGndt69T72U%2BuAHwvx%2BGmQvmU3w%2BMOJfgz6rLZeCfFn%2F4Ai7J9rsLeJ%2BnarXebubZZLEc2DFUjOYbtX5BTzW1UQ%2BPSe58dBy%2FP3By35L4OUltLiDop3CSwBvhC5VSv4nrEl8ZL8f21Au9HIm8t%2Fd9Zy2tyHy%2FCUm4wCs%2F7DO6ym&X-Amz-Signature=08ac3b2b29f0d734ce4727ea0f099949a12dfdb35f985490c951ef58972967a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QW47XUG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCyVNhWjgSSmaOPVn5mQ10RSX94NHPu1rVGcTPbEGaS6AIgG0wyGfQNTISAt4%2B4VoUJSDcKtBF1%2FqnWHHRiqZmdbRoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3FUxku53%2BNqQ8IkSrcA9stCuyUmFIhs3FjT2IB5JdgO9t3U8msNkPYKvWd57VpfPCFNi1D%2Bfpx1Wk1v4k%2BMTF6XUy5nBjX2MBK9bcqF8qjfly9O9BCmfHa5BBzC1N6Fc0SxIh9g3yCbxpUqdSH%2BinyzBkKY1Kj1VmB4R8v2GTbCxwjdaq7hpruZd6QD%2Bu%2Fp%2BNz%2FSRn8cGv3d85IiwIy5aj9jLYarfQH31139t32kNOlkTcNfFPWRXtjMYrnEQoIGrIsoWcXYBV4ev4F3Vknye8LPcRtUsuyJxDlkwSh26XKDSrUQa%2BQKyMjUoHSC5O8EPqDKoZZT%2BZ73wrblImv%2Fj9cb8dgjeIDC7DYRFsMRWERMLcFYpIZPRokKTMeA%2B4%2Bab2cVCbOkiR0PCKIg01IDySO320QMMK5UNpDhTU5XkTvHOHyPqp0dBgyGLSFkffoxzbhPMuyXWuL%2BF8Zx95S2fB96pd3v2Lax1gwVMKgfShIj35SyXXIorsn9gRImF0pckrVzKESNAW7oCkkwJQhb7vaOzZ%2FpILhwNiEUGH%2FmRROSVn1OnxCITLtIcLRauysYMYDSWp7edu%2B59zxJxl8l48dfadx%2Blj7OKUoVCzZEPtLYTdcPQKhzpG2a5Zq5UIFXjm8Qx6asFiCbFzMMq0hL4GOqUBNC65EDcQSUcLziWE4qNYHNxzDQT%2BzCj%2FSlqcZp7V%2Fl8iZd0YtgGndt69T72U%2BuAHwvx%2BGmQvmU3w%2BMOJfgz6rLZeCfFn%2F4Ai7J9rsLeJ%2BnarXebubZZLEc2DFUjOYbtX5BTzW1UQ%2BPSe58dBy%2FP3By35L4OUltLiDop3CSwBvhC5VSv4nrEl8ZL8f21Au9HIm8t%2Fd9Zy2tyHy%2FCUm4wCs%2F7DO6ym&X-Amz-Signature=6652a471becfeba2c0e2554471f81f0eeb4ee8b10bfc013a327c11992b0c6bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QW47XUG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCyVNhWjgSSmaOPVn5mQ10RSX94NHPu1rVGcTPbEGaS6AIgG0wyGfQNTISAt4%2B4VoUJSDcKtBF1%2FqnWHHRiqZmdbRoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3FUxku53%2BNqQ8IkSrcA9stCuyUmFIhs3FjT2IB5JdgO9t3U8msNkPYKvWd57VpfPCFNi1D%2Bfpx1Wk1v4k%2BMTF6XUy5nBjX2MBK9bcqF8qjfly9O9BCmfHa5BBzC1N6Fc0SxIh9g3yCbxpUqdSH%2BinyzBkKY1Kj1VmB4R8v2GTbCxwjdaq7hpruZd6QD%2Bu%2Fp%2BNz%2FSRn8cGv3d85IiwIy5aj9jLYarfQH31139t32kNOlkTcNfFPWRXtjMYrnEQoIGrIsoWcXYBV4ev4F3Vknye8LPcRtUsuyJxDlkwSh26XKDSrUQa%2BQKyMjUoHSC5O8EPqDKoZZT%2BZ73wrblImv%2Fj9cb8dgjeIDC7DYRFsMRWERMLcFYpIZPRokKTMeA%2B4%2Bab2cVCbOkiR0PCKIg01IDySO320QMMK5UNpDhTU5XkTvHOHyPqp0dBgyGLSFkffoxzbhPMuyXWuL%2BF8Zx95S2fB96pd3v2Lax1gwVMKgfShIj35SyXXIorsn9gRImF0pckrVzKESNAW7oCkkwJQhb7vaOzZ%2FpILhwNiEUGH%2FmRROSVn1OnxCITLtIcLRauysYMYDSWp7edu%2B59zxJxl8l48dfadx%2Blj7OKUoVCzZEPtLYTdcPQKhzpG2a5Zq5UIFXjm8Qx6asFiCbFzMMq0hL4GOqUBNC65EDcQSUcLziWE4qNYHNxzDQT%2BzCj%2FSlqcZp7V%2Fl8iZd0YtgGndt69T72U%2BuAHwvx%2BGmQvmU3w%2BMOJfgz6rLZeCfFn%2F4Ai7J9rsLeJ%2BnarXebubZZLEc2DFUjOYbtX5BTzW1UQ%2BPSe58dBy%2FP3By35L4OUltLiDop3CSwBvhC5VSv4nrEl8ZL8f21Au9HIm8t%2Fd9Zy2tyHy%2FCUm4wCs%2F7DO6ym&X-Amz-Signature=89df6dfa0b9e5fac8d5f0b7fa9ad67b46f30545c5e00af941b0309826fa8ad58&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QW47XUG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCyVNhWjgSSmaOPVn5mQ10RSX94NHPu1rVGcTPbEGaS6AIgG0wyGfQNTISAt4%2B4VoUJSDcKtBF1%2FqnWHHRiqZmdbRoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3FUxku53%2BNqQ8IkSrcA9stCuyUmFIhs3FjT2IB5JdgO9t3U8msNkPYKvWd57VpfPCFNi1D%2Bfpx1Wk1v4k%2BMTF6XUy5nBjX2MBK9bcqF8qjfly9O9BCmfHa5BBzC1N6Fc0SxIh9g3yCbxpUqdSH%2BinyzBkKY1Kj1VmB4R8v2GTbCxwjdaq7hpruZd6QD%2Bu%2Fp%2BNz%2FSRn8cGv3d85IiwIy5aj9jLYarfQH31139t32kNOlkTcNfFPWRXtjMYrnEQoIGrIsoWcXYBV4ev4F3Vknye8LPcRtUsuyJxDlkwSh26XKDSrUQa%2BQKyMjUoHSC5O8EPqDKoZZT%2BZ73wrblImv%2Fj9cb8dgjeIDC7DYRFsMRWERMLcFYpIZPRokKTMeA%2B4%2Bab2cVCbOkiR0PCKIg01IDySO320QMMK5UNpDhTU5XkTvHOHyPqp0dBgyGLSFkffoxzbhPMuyXWuL%2BF8Zx95S2fB96pd3v2Lax1gwVMKgfShIj35SyXXIorsn9gRImF0pckrVzKESNAW7oCkkwJQhb7vaOzZ%2FpILhwNiEUGH%2FmRROSVn1OnxCITLtIcLRauysYMYDSWp7edu%2B59zxJxl8l48dfadx%2Blj7OKUoVCzZEPtLYTdcPQKhzpG2a5Zq5UIFXjm8Qx6asFiCbFzMMq0hL4GOqUBNC65EDcQSUcLziWE4qNYHNxzDQT%2BzCj%2FSlqcZp7V%2Fl8iZd0YtgGndt69T72U%2BuAHwvx%2BGmQvmU3w%2BMOJfgz6rLZeCfFn%2F4Ai7J9rsLeJ%2BnarXebubZZLEc2DFUjOYbtX5BTzW1UQ%2BPSe58dBy%2FP3By35L4OUltLiDop3CSwBvhC5VSv4nrEl8ZL8f21Au9HIm8t%2Fd9Zy2tyHy%2FCUm4wCs%2F7DO6ym&X-Amz-Signature=2f1708832ac6a829b66f4f1c2d857c03eb87e6db7a7de8f9d08b7384c7ca9ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QW47XUG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCyVNhWjgSSmaOPVn5mQ10RSX94NHPu1rVGcTPbEGaS6AIgG0wyGfQNTISAt4%2B4VoUJSDcKtBF1%2FqnWHHRiqZmdbRoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3FUxku53%2BNqQ8IkSrcA9stCuyUmFIhs3FjT2IB5JdgO9t3U8msNkPYKvWd57VpfPCFNi1D%2Bfpx1Wk1v4k%2BMTF6XUy5nBjX2MBK9bcqF8qjfly9O9BCmfHa5BBzC1N6Fc0SxIh9g3yCbxpUqdSH%2BinyzBkKY1Kj1VmB4R8v2GTbCxwjdaq7hpruZd6QD%2Bu%2Fp%2BNz%2FSRn8cGv3d85IiwIy5aj9jLYarfQH31139t32kNOlkTcNfFPWRXtjMYrnEQoIGrIsoWcXYBV4ev4F3Vknye8LPcRtUsuyJxDlkwSh26XKDSrUQa%2BQKyMjUoHSC5O8EPqDKoZZT%2BZ73wrblImv%2Fj9cb8dgjeIDC7DYRFsMRWERMLcFYpIZPRokKTMeA%2B4%2Bab2cVCbOkiR0PCKIg01IDySO320QMMK5UNpDhTU5XkTvHOHyPqp0dBgyGLSFkffoxzbhPMuyXWuL%2BF8Zx95S2fB96pd3v2Lax1gwVMKgfShIj35SyXXIorsn9gRImF0pckrVzKESNAW7oCkkwJQhb7vaOzZ%2FpILhwNiEUGH%2FmRROSVn1OnxCITLtIcLRauysYMYDSWp7edu%2B59zxJxl8l48dfadx%2Blj7OKUoVCzZEPtLYTdcPQKhzpG2a5Zq5UIFXjm8Qx6asFiCbFzMMq0hL4GOqUBNC65EDcQSUcLziWE4qNYHNxzDQT%2BzCj%2FSlqcZp7V%2Fl8iZd0YtgGndt69T72U%2BuAHwvx%2BGmQvmU3w%2BMOJfgz6rLZeCfFn%2F4Ai7J9rsLeJ%2BnarXebubZZLEc2DFUjOYbtX5BTzW1UQ%2BPSe58dBy%2FP3By35L4OUltLiDop3CSwBvhC5VSv4nrEl8ZL8f21Au9HIm8t%2Fd9Zy2tyHy%2FCUm4wCs%2F7DO6ym&X-Amz-Signature=a816c31721f322adea0b7dbf14562721eaa0f187a35018875768f5ac97b012ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QW47XUG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCyVNhWjgSSmaOPVn5mQ10RSX94NHPu1rVGcTPbEGaS6AIgG0wyGfQNTISAt4%2B4VoUJSDcKtBF1%2FqnWHHRiqZmdbRoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3FUxku53%2BNqQ8IkSrcA9stCuyUmFIhs3FjT2IB5JdgO9t3U8msNkPYKvWd57VpfPCFNi1D%2Bfpx1Wk1v4k%2BMTF6XUy5nBjX2MBK9bcqF8qjfly9O9BCmfHa5BBzC1N6Fc0SxIh9g3yCbxpUqdSH%2BinyzBkKY1Kj1VmB4R8v2GTbCxwjdaq7hpruZd6QD%2Bu%2Fp%2BNz%2FSRn8cGv3d85IiwIy5aj9jLYarfQH31139t32kNOlkTcNfFPWRXtjMYrnEQoIGrIsoWcXYBV4ev4F3Vknye8LPcRtUsuyJxDlkwSh26XKDSrUQa%2BQKyMjUoHSC5O8EPqDKoZZT%2BZ73wrblImv%2Fj9cb8dgjeIDC7DYRFsMRWERMLcFYpIZPRokKTMeA%2B4%2Bab2cVCbOkiR0PCKIg01IDySO320QMMK5UNpDhTU5XkTvHOHyPqp0dBgyGLSFkffoxzbhPMuyXWuL%2BF8Zx95S2fB96pd3v2Lax1gwVMKgfShIj35SyXXIorsn9gRImF0pckrVzKESNAW7oCkkwJQhb7vaOzZ%2FpILhwNiEUGH%2FmRROSVn1OnxCITLtIcLRauysYMYDSWp7edu%2B59zxJxl8l48dfadx%2Blj7OKUoVCzZEPtLYTdcPQKhzpG2a5Zq5UIFXjm8Qx6asFiCbFzMMq0hL4GOqUBNC65EDcQSUcLziWE4qNYHNxzDQT%2BzCj%2FSlqcZp7V%2Fl8iZd0YtgGndt69T72U%2BuAHwvx%2BGmQvmU3w%2BMOJfgz6rLZeCfFn%2F4Ai7J9rsLeJ%2BnarXebubZZLEc2DFUjOYbtX5BTzW1UQ%2BPSe58dBy%2FP3By35L4OUltLiDop3CSwBvhC5VSv4nrEl8ZL8f21Au9HIm8t%2Fd9Zy2tyHy%2FCUm4wCs%2F7DO6ym&X-Amz-Signature=0631e299b9d218dc45ef4a033483e0909ea026e885e3a3c8063e85b3ce1e0613&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QW47XUG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCyVNhWjgSSmaOPVn5mQ10RSX94NHPu1rVGcTPbEGaS6AIgG0wyGfQNTISAt4%2B4VoUJSDcKtBF1%2FqnWHHRiqZmdbRoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3FUxku53%2BNqQ8IkSrcA9stCuyUmFIhs3FjT2IB5JdgO9t3U8msNkPYKvWd57VpfPCFNi1D%2Bfpx1Wk1v4k%2BMTF6XUy5nBjX2MBK9bcqF8qjfly9O9BCmfHa5BBzC1N6Fc0SxIh9g3yCbxpUqdSH%2BinyzBkKY1Kj1VmB4R8v2GTbCxwjdaq7hpruZd6QD%2Bu%2Fp%2BNz%2FSRn8cGv3d85IiwIy5aj9jLYarfQH31139t32kNOlkTcNfFPWRXtjMYrnEQoIGrIsoWcXYBV4ev4F3Vknye8LPcRtUsuyJxDlkwSh26XKDSrUQa%2BQKyMjUoHSC5O8EPqDKoZZT%2BZ73wrblImv%2Fj9cb8dgjeIDC7DYRFsMRWERMLcFYpIZPRokKTMeA%2B4%2Bab2cVCbOkiR0PCKIg01IDySO320QMMK5UNpDhTU5XkTvHOHyPqp0dBgyGLSFkffoxzbhPMuyXWuL%2BF8Zx95S2fB96pd3v2Lax1gwVMKgfShIj35SyXXIorsn9gRImF0pckrVzKESNAW7oCkkwJQhb7vaOzZ%2FpILhwNiEUGH%2FmRROSVn1OnxCITLtIcLRauysYMYDSWp7edu%2B59zxJxl8l48dfadx%2Blj7OKUoVCzZEPtLYTdcPQKhzpG2a5Zq5UIFXjm8Qx6asFiCbFzMMq0hL4GOqUBNC65EDcQSUcLziWE4qNYHNxzDQT%2BzCj%2FSlqcZp7V%2Fl8iZd0YtgGndt69T72U%2BuAHwvx%2BGmQvmU3w%2BMOJfgz6rLZeCfFn%2F4Ai7J9rsLeJ%2BnarXebubZZLEc2DFUjOYbtX5BTzW1UQ%2BPSe58dBy%2FP3By35L4OUltLiDop3CSwBvhC5VSv4nrEl8ZL8f21Au9HIm8t%2Fd9Zy2tyHy%2FCUm4wCs%2F7DO6ym&X-Amz-Signature=c80babec4cbf927aaddea175c540f535c26c10ef295cc0ee69dd7266cc6c12ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QW47XUG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCyVNhWjgSSmaOPVn5mQ10RSX94NHPu1rVGcTPbEGaS6AIgG0wyGfQNTISAt4%2B4VoUJSDcKtBF1%2FqnWHHRiqZmdbRoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3FUxku53%2BNqQ8IkSrcA9stCuyUmFIhs3FjT2IB5JdgO9t3U8msNkPYKvWd57VpfPCFNi1D%2Bfpx1Wk1v4k%2BMTF6XUy5nBjX2MBK9bcqF8qjfly9O9BCmfHa5BBzC1N6Fc0SxIh9g3yCbxpUqdSH%2BinyzBkKY1Kj1VmB4R8v2GTbCxwjdaq7hpruZd6QD%2Bu%2Fp%2BNz%2FSRn8cGv3d85IiwIy5aj9jLYarfQH31139t32kNOlkTcNfFPWRXtjMYrnEQoIGrIsoWcXYBV4ev4F3Vknye8LPcRtUsuyJxDlkwSh26XKDSrUQa%2BQKyMjUoHSC5O8EPqDKoZZT%2BZ73wrblImv%2Fj9cb8dgjeIDC7DYRFsMRWERMLcFYpIZPRokKTMeA%2B4%2Bab2cVCbOkiR0PCKIg01IDySO320QMMK5UNpDhTU5XkTvHOHyPqp0dBgyGLSFkffoxzbhPMuyXWuL%2BF8Zx95S2fB96pd3v2Lax1gwVMKgfShIj35SyXXIorsn9gRImF0pckrVzKESNAW7oCkkwJQhb7vaOzZ%2FpILhwNiEUGH%2FmRROSVn1OnxCITLtIcLRauysYMYDSWp7edu%2B59zxJxl8l48dfadx%2Blj7OKUoVCzZEPtLYTdcPQKhzpG2a5Zq5UIFXjm8Qx6asFiCbFzMMq0hL4GOqUBNC65EDcQSUcLziWE4qNYHNxzDQT%2BzCj%2FSlqcZp7V%2Fl8iZd0YtgGndt69T72U%2BuAHwvx%2BGmQvmU3w%2BMOJfgz6rLZeCfFn%2F4Ai7J9rsLeJ%2BnarXebubZZLEc2DFUjOYbtX5BTzW1UQ%2BPSe58dBy%2FP3By35L4OUltLiDop3CSwBvhC5VSv4nrEl8ZL8f21Au9HIm8t%2Fd9Zy2tyHy%2FCUm4wCs%2F7DO6ym&X-Amz-Signature=6f676e404d2afead98ca87965c7ba2d1c406622a1d58bd25266df7ff21f6d715&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

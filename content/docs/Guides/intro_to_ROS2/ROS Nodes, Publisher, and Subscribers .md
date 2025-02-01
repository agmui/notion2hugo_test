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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXS7CJH4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOdPeuk8IhFT3zXwf9LrpnK70zFbtiGximJCZvYFnYoQIhANUg06dF59EsRWTiombP4F0%2Bc3ZgpHSKsLGudwY8N2NsKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLCBrFlHtXp%2FntQGYq3ANdap%2Fv6ksDuCcZ0jA52DlBsYxt3P0ivLIdTqOF5Zp%2Bjdd9GaANKqmSuJd6yKTkgDzcCoOJUMlpahLYab4dNXFCbdjf0LMS8Th3X9k45WeYi%2BrCAPTib9goZqiIuBLjHUTaWjbpBYKyJ1psaVTL2jkYHWxUNic7YsIlcLVRFrx4ofSm4IpL4fPeCCsu1is31BQzvJ8nx%2FAsl1auuwz3LiMzcqdLt58bhHTq2B%2Fm7a6my5DzYm2TxmUpSkDOug5ZARlT7RiFGu2Qa7PtE8%2B6JhEX1b0%2BrfW7YhzD%2FdNUzCrKlxRoCQXFOdLpvJN%2FaD1Fda1BINy6WJYThdIx1yyECCCPyutwgBTBLNaLNiHUivvzgsbLFD4c39VOV2WjLWXjUFBgbD3%2Fy96e0p7GBNpDgMFiIvQk%2B0CYbGPgCJ6Wp%2FcDH5QnBI56udfbLNyL%2BLLh%2FMkuERhv5nd0Rx2gfUMUU6SjE9XBTyBKz6Vg1GmsmYJ%2FClF7XKDANhewLp2I1prMhE5E4UdzW%2FT%2F9NZhavPXjHDawXuCfwn3NqM6HWucNARWxntwZqfaiCjUlRS%2FMxLrPUJB12DteKP7cv1KhTaTDx0xXNEuqNoao9I4rsntECFbYUWC%2FqxsvXxEHavRvTCfyPi8BjqkAS4uXzUctRNPbBNps3PGpusQIXfGYdS4KjeiiYJ6eY2uHWLbUP5P6zcL98G%2BqwG%2BYAfJ%2FzMDHPe6f3xi5WupR73NgePq0%2BSqHNbJkDvo5pCk8i3lKASOsBq7eHPyIrJxUx%2BXbEH6dh3AtEWTXh8rU84MjIjC4oy8djC9lwAyKtc03%2B4T7981B%2FEegiruwrVrJOBhrk3Iefa14j%2BoiGLOOGYi68W9&X-Amz-Signature=243ad52b67e491b2643d598cd02c892839abaca4fca794f181067fe58d0550c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXS7CJH4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOdPeuk8IhFT3zXwf9LrpnK70zFbtiGximJCZvYFnYoQIhANUg06dF59EsRWTiombP4F0%2Bc3ZgpHSKsLGudwY8N2NsKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLCBrFlHtXp%2FntQGYq3ANdap%2Fv6ksDuCcZ0jA52DlBsYxt3P0ivLIdTqOF5Zp%2Bjdd9GaANKqmSuJd6yKTkgDzcCoOJUMlpahLYab4dNXFCbdjf0LMS8Th3X9k45WeYi%2BrCAPTib9goZqiIuBLjHUTaWjbpBYKyJ1psaVTL2jkYHWxUNic7YsIlcLVRFrx4ofSm4IpL4fPeCCsu1is31BQzvJ8nx%2FAsl1auuwz3LiMzcqdLt58bhHTq2B%2Fm7a6my5DzYm2TxmUpSkDOug5ZARlT7RiFGu2Qa7PtE8%2B6JhEX1b0%2BrfW7YhzD%2FdNUzCrKlxRoCQXFOdLpvJN%2FaD1Fda1BINy6WJYThdIx1yyECCCPyutwgBTBLNaLNiHUivvzgsbLFD4c39VOV2WjLWXjUFBgbD3%2Fy96e0p7GBNpDgMFiIvQk%2B0CYbGPgCJ6Wp%2FcDH5QnBI56udfbLNyL%2BLLh%2FMkuERhv5nd0Rx2gfUMUU6SjE9XBTyBKz6Vg1GmsmYJ%2FClF7XKDANhewLp2I1prMhE5E4UdzW%2FT%2F9NZhavPXjHDawXuCfwn3NqM6HWucNARWxntwZqfaiCjUlRS%2FMxLrPUJB12DteKP7cv1KhTaTDx0xXNEuqNoao9I4rsntECFbYUWC%2FqxsvXxEHavRvTCfyPi8BjqkAS4uXzUctRNPbBNps3PGpusQIXfGYdS4KjeiiYJ6eY2uHWLbUP5P6zcL98G%2BqwG%2BYAfJ%2FzMDHPe6f3xi5WupR73NgePq0%2BSqHNbJkDvo5pCk8i3lKASOsBq7eHPyIrJxUx%2BXbEH6dh3AtEWTXh8rU84MjIjC4oy8djC9lwAyKtc03%2B4T7981B%2FEegiruwrVrJOBhrk3Iefa14j%2BoiGLOOGYi68W9&X-Amz-Signature=523722dca8930e08bcab9aea6857ff5cb918c8d8e44016ea717486f198457973&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXS7CJH4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOdPeuk8IhFT3zXwf9LrpnK70zFbtiGximJCZvYFnYoQIhANUg06dF59EsRWTiombP4F0%2Bc3ZgpHSKsLGudwY8N2NsKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLCBrFlHtXp%2FntQGYq3ANdap%2Fv6ksDuCcZ0jA52DlBsYxt3P0ivLIdTqOF5Zp%2Bjdd9GaANKqmSuJd6yKTkgDzcCoOJUMlpahLYab4dNXFCbdjf0LMS8Th3X9k45WeYi%2BrCAPTib9goZqiIuBLjHUTaWjbpBYKyJ1psaVTL2jkYHWxUNic7YsIlcLVRFrx4ofSm4IpL4fPeCCsu1is31BQzvJ8nx%2FAsl1auuwz3LiMzcqdLt58bhHTq2B%2Fm7a6my5DzYm2TxmUpSkDOug5ZARlT7RiFGu2Qa7PtE8%2B6JhEX1b0%2BrfW7YhzD%2FdNUzCrKlxRoCQXFOdLpvJN%2FaD1Fda1BINy6WJYThdIx1yyECCCPyutwgBTBLNaLNiHUivvzgsbLFD4c39VOV2WjLWXjUFBgbD3%2Fy96e0p7GBNpDgMFiIvQk%2B0CYbGPgCJ6Wp%2FcDH5QnBI56udfbLNyL%2BLLh%2FMkuERhv5nd0Rx2gfUMUU6SjE9XBTyBKz6Vg1GmsmYJ%2FClF7XKDANhewLp2I1prMhE5E4UdzW%2FT%2F9NZhavPXjHDawXuCfwn3NqM6HWucNARWxntwZqfaiCjUlRS%2FMxLrPUJB12DteKP7cv1KhTaTDx0xXNEuqNoao9I4rsntECFbYUWC%2FqxsvXxEHavRvTCfyPi8BjqkAS4uXzUctRNPbBNps3PGpusQIXfGYdS4KjeiiYJ6eY2uHWLbUP5P6zcL98G%2BqwG%2BYAfJ%2FzMDHPe6f3xi5WupR73NgePq0%2BSqHNbJkDvo5pCk8i3lKASOsBq7eHPyIrJxUx%2BXbEH6dh3AtEWTXh8rU84MjIjC4oy8djC9lwAyKtc03%2B4T7981B%2FEegiruwrVrJOBhrk3Iefa14j%2BoiGLOOGYi68W9&X-Amz-Signature=10bcbc1b2dda7b6c131c6a829b0d10460e3251446e4c378f244b8069d0568a75&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXS7CJH4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOdPeuk8IhFT3zXwf9LrpnK70zFbtiGximJCZvYFnYoQIhANUg06dF59EsRWTiombP4F0%2Bc3ZgpHSKsLGudwY8N2NsKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLCBrFlHtXp%2FntQGYq3ANdap%2Fv6ksDuCcZ0jA52DlBsYxt3P0ivLIdTqOF5Zp%2Bjdd9GaANKqmSuJd6yKTkgDzcCoOJUMlpahLYab4dNXFCbdjf0LMS8Th3X9k45WeYi%2BrCAPTib9goZqiIuBLjHUTaWjbpBYKyJ1psaVTL2jkYHWxUNic7YsIlcLVRFrx4ofSm4IpL4fPeCCsu1is31BQzvJ8nx%2FAsl1auuwz3LiMzcqdLt58bhHTq2B%2Fm7a6my5DzYm2TxmUpSkDOug5ZARlT7RiFGu2Qa7PtE8%2B6JhEX1b0%2BrfW7YhzD%2FdNUzCrKlxRoCQXFOdLpvJN%2FaD1Fda1BINy6WJYThdIx1yyECCCPyutwgBTBLNaLNiHUivvzgsbLFD4c39VOV2WjLWXjUFBgbD3%2Fy96e0p7GBNpDgMFiIvQk%2B0CYbGPgCJ6Wp%2FcDH5QnBI56udfbLNyL%2BLLh%2FMkuERhv5nd0Rx2gfUMUU6SjE9XBTyBKz6Vg1GmsmYJ%2FClF7XKDANhewLp2I1prMhE5E4UdzW%2FT%2F9NZhavPXjHDawXuCfwn3NqM6HWucNARWxntwZqfaiCjUlRS%2FMxLrPUJB12DteKP7cv1KhTaTDx0xXNEuqNoao9I4rsntECFbYUWC%2FqxsvXxEHavRvTCfyPi8BjqkAS4uXzUctRNPbBNps3PGpusQIXfGYdS4KjeiiYJ6eY2uHWLbUP5P6zcL98G%2BqwG%2BYAfJ%2FzMDHPe6f3xi5WupR73NgePq0%2BSqHNbJkDvo5pCk8i3lKASOsBq7eHPyIrJxUx%2BXbEH6dh3AtEWTXh8rU84MjIjC4oy8djC9lwAyKtc03%2B4T7981B%2FEegiruwrVrJOBhrk3Iefa14j%2BoiGLOOGYi68W9&X-Amz-Signature=c99896a34de8d512f5bd524edfbc4a8995d71b0a0bf5397023554e6bac6448a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXS7CJH4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOdPeuk8IhFT3zXwf9LrpnK70zFbtiGximJCZvYFnYoQIhANUg06dF59EsRWTiombP4F0%2Bc3ZgpHSKsLGudwY8N2NsKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLCBrFlHtXp%2FntQGYq3ANdap%2Fv6ksDuCcZ0jA52DlBsYxt3P0ivLIdTqOF5Zp%2Bjdd9GaANKqmSuJd6yKTkgDzcCoOJUMlpahLYab4dNXFCbdjf0LMS8Th3X9k45WeYi%2BrCAPTib9goZqiIuBLjHUTaWjbpBYKyJ1psaVTL2jkYHWxUNic7YsIlcLVRFrx4ofSm4IpL4fPeCCsu1is31BQzvJ8nx%2FAsl1auuwz3LiMzcqdLt58bhHTq2B%2Fm7a6my5DzYm2TxmUpSkDOug5ZARlT7RiFGu2Qa7PtE8%2B6JhEX1b0%2BrfW7YhzD%2FdNUzCrKlxRoCQXFOdLpvJN%2FaD1Fda1BINy6WJYThdIx1yyECCCPyutwgBTBLNaLNiHUivvzgsbLFD4c39VOV2WjLWXjUFBgbD3%2Fy96e0p7GBNpDgMFiIvQk%2B0CYbGPgCJ6Wp%2FcDH5QnBI56udfbLNyL%2BLLh%2FMkuERhv5nd0Rx2gfUMUU6SjE9XBTyBKz6Vg1GmsmYJ%2FClF7XKDANhewLp2I1prMhE5E4UdzW%2FT%2F9NZhavPXjHDawXuCfwn3NqM6HWucNARWxntwZqfaiCjUlRS%2FMxLrPUJB12DteKP7cv1KhTaTDx0xXNEuqNoao9I4rsntECFbYUWC%2FqxsvXxEHavRvTCfyPi8BjqkAS4uXzUctRNPbBNps3PGpusQIXfGYdS4KjeiiYJ6eY2uHWLbUP5P6zcL98G%2BqwG%2BYAfJ%2FzMDHPe6f3xi5WupR73NgePq0%2BSqHNbJkDvo5pCk8i3lKASOsBq7eHPyIrJxUx%2BXbEH6dh3AtEWTXh8rU84MjIjC4oy8djC9lwAyKtc03%2B4T7981B%2FEegiruwrVrJOBhrk3Iefa14j%2BoiGLOOGYi68W9&X-Amz-Signature=e89194ac7b85767a5bab434e5610c59b7bcef9a10814e244187fe8816a69c20c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXS7CJH4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOdPeuk8IhFT3zXwf9LrpnK70zFbtiGximJCZvYFnYoQIhANUg06dF59EsRWTiombP4F0%2Bc3ZgpHSKsLGudwY8N2NsKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLCBrFlHtXp%2FntQGYq3ANdap%2Fv6ksDuCcZ0jA52DlBsYxt3P0ivLIdTqOF5Zp%2Bjdd9GaANKqmSuJd6yKTkgDzcCoOJUMlpahLYab4dNXFCbdjf0LMS8Th3X9k45WeYi%2BrCAPTib9goZqiIuBLjHUTaWjbpBYKyJ1psaVTL2jkYHWxUNic7YsIlcLVRFrx4ofSm4IpL4fPeCCsu1is31BQzvJ8nx%2FAsl1auuwz3LiMzcqdLt58bhHTq2B%2Fm7a6my5DzYm2TxmUpSkDOug5ZARlT7RiFGu2Qa7PtE8%2B6JhEX1b0%2BrfW7YhzD%2FdNUzCrKlxRoCQXFOdLpvJN%2FaD1Fda1BINy6WJYThdIx1yyECCCPyutwgBTBLNaLNiHUivvzgsbLFD4c39VOV2WjLWXjUFBgbD3%2Fy96e0p7GBNpDgMFiIvQk%2B0CYbGPgCJ6Wp%2FcDH5QnBI56udfbLNyL%2BLLh%2FMkuERhv5nd0Rx2gfUMUU6SjE9XBTyBKz6Vg1GmsmYJ%2FClF7XKDANhewLp2I1prMhE5E4UdzW%2FT%2F9NZhavPXjHDawXuCfwn3NqM6HWucNARWxntwZqfaiCjUlRS%2FMxLrPUJB12DteKP7cv1KhTaTDx0xXNEuqNoao9I4rsntECFbYUWC%2FqxsvXxEHavRvTCfyPi8BjqkAS4uXzUctRNPbBNps3PGpusQIXfGYdS4KjeiiYJ6eY2uHWLbUP5P6zcL98G%2BqwG%2BYAfJ%2FzMDHPe6f3xi5WupR73NgePq0%2BSqHNbJkDvo5pCk8i3lKASOsBq7eHPyIrJxUx%2BXbEH6dh3AtEWTXh8rU84MjIjC4oy8djC9lwAyKtc03%2B4T7981B%2FEegiruwrVrJOBhrk3Iefa14j%2BoiGLOOGYi68W9&X-Amz-Signature=75b013fb4308eea0291c7281538a6e8761cd088f95f4cd5e445a8d5607437471&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXS7CJH4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOdPeuk8IhFT3zXwf9LrpnK70zFbtiGximJCZvYFnYoQIhANUg06dF59EsRWTiombP4F0%2Bc3ZgpHSKsLGudwY8N2NsKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLCBrFlHtXp%2FntQGYq3ANdap%2Fv6ksDuCcZ0jA52DlBsYxt3P0ivLIdTqOF5Zp%2Bjdd9GaANKqmSuJd6yKTkgDzcCoOJUMlpahLYab4dNXFCbdjf0LMS8Th3X9k45WeYi%2BrCAPTib9goZqiIuBLjHUTaWjbpBYKyJ1psaVTL2jkYHWxUNic7YsIlcLVRFrx4ofSm4IpL4fPeCCsu1is31BQzvJ8nx%2FAsl1auuwz3LiMzcqdLt58bhHTq2B%2Fm7a6my5DzYm2TxmUpSkDOug5ZARlT7RiFGu2Qa7PtE8%2B6JhEX1b0%2BrfW7YhzD%2FdNUzCrKlxRoCQXFOdLpvJN%2FaD1Fda1BINy6WJYThdIx1yyECCCPyutwgBTBLNaLNiHUivvzgsbLFD4c39VOV2WjLWXjUFBgbD3%2Fy96e0p7GBNpDgMFiIvQk%2B0CYbGPgCJ6Wp%2FcDH5QnBI56udfbLNyL%2BLLh%2FMkuERhv5nd0Rx2gfUMUU6SjE9XBTyBKz6Vg1GmsmYJ%2FClF7XKDANhewLp2I1prMhE5E4UdzW%2FT%2F9NZhavPXjHDawXuCfwn3NqM6HWucNARWxntwZqfaiCjUlRS%2FMxLrPUJB12DteKP7cv1KhTaTDx0xXNEuqNoao9I4rsntECFbYUWC%2FqxsvXxEHavRvTCfyPi8BjqkAS4uXzUctRNPbBNps3PGpusQIXfGYdS4KjeiiYJ6eY2uHWLbUP5P6zcL98G%2BqwG%2BYAfJ%2FzMDHPe6f3xi5WupR73NgePq0%2BSqHNbJkDvo5pCk8i3lKASOsBq7eHPyIrJxUx%2BXbEH6dh3AtEWTXh8rU84MjIjC4oy8djC9lwAyKtc03%2B4T7981B%2FEegiruwrVrJOBhrk3Iefa14j%2BoiGLOOGYi68W9&X-Amz-Signature=a57fe2b2089e4f592b8ffd7369f7de87d819bf4e5da7eadd1824ba7a5719aa78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXS7CJH4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOdPeuk8IhFT3zXwf9LrpnK70zFbtiGximJCZvYFnYoQIhANUg06dF59EsRWTiombP4F0%2Bc3ZgpHSKsLGudwY8N2NsKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLCBrFlHtXp%2FntQGYq3ANdap%2Fv6ksDuCcZ0jA52DlBsYxt3P0ivLIdTqOF5Zp%2Bjdd9GaANKqmSuJd6yKTkgDzcCoOJUMlpahLYab4dNXFCbdjf0LMS8Th3X9k45WeYi%2BrCAPTib9goZqiIuBLjHUTaWjbpBYKyJ1psaVTL2jkYHWxUNic7YsIlcLVRFrx4ofSm4IpL4fPeCCsu1is31BQzvJ8nx%2FAsl1auuwz3LiMzcqdLt58bhHTq2B%2Fm7a6my5DzYm2TxmUpSkDOug5ZARlT7RiFGu2Qa7PtE8%2B6JhEX1b0%2BrfW7YhzD%2FdNUzCrKlxRoCQXFOdLpvJN%2FaD1Fda1BINy6WJYThdIx1yyECCCPyutwgBTBLNaLNiHUivvzgsbLFD4c39VOV2WjLWXjUFBgbD3%2Fy96e0p7GBNpDgMFiIvQk%2B0CYbGPgCJ6Wp%2FcDH5QnBI56udfbLNyL%2BLLh%2FMkuERhv5nd0Rx2gfUMUU6SjE9XBTyBKz6Vg1GmsmYJ%2FClF7XKDANhewLp2I1prMhE5E4UdzW%2FT%2F9NZhavPXjHDawXuCfwn3NqM6HWucNARWxntwZqfaiCjUlRS%2FMxLrPUJB12DteKP7cv1KhTaTDx0xXNEuqNoao9I4rsntECFbYUWC%2FqxsvXxEHavRvTCfyPi8BjqkAS4uXzUctRNPbBNps3PGpusQIXfGYdS4KjeiiYJ6eY2uHWLbUP5P6zcL98G%2BqwG%2BYAfJ%2FzMDHPe6f3xi5WupR73NgePq0%2BSqHNbJkDvo5pCk8i3lKASOsBq7eHPyIrJxUx%2BXbEH6dh3AtEWTXh8rU84MjIjC4oy8djC9lwAyKtc03%2B4T7981B%2FEegiruwrVrJOBhrk3Iefa14j%2BoiGLOOGYi68W9&X-Amz-Signature=9f7752c92628f5f7bab9d94657328c2d653bc9d0231c560c36876003f68f0e58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

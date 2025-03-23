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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CPI6RI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKcCWEH5IpziaEoUkgMrPM07lZT9BaxmP7wvtxVC06MAiAeXVXlXejnoF45ll3BLhKcYsn5imEzaLKoI2Bb6EKeECqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5WW6w%2FGrwqNIiJqgKtwD5g4HtnccHBsri34eLNlcq9BJ54DSTPXLmwhpWjG6orRG6HLsXzj4xXg1N8yWOV6AoCSXBZAYpuDPnwOpNAx%2Fg%2Bz2xYS8LoueoHehfsIFBppY1tXGjKTFk5yD3Xno9nxNCTZpBes%2BTAmEi7U%2FQKI8cvhbE7PfWc7XCegj7AYWVnyAhPIQ2k6UJmHFH3XKm%2F8%2BnjGmbPIeN5f37f6ZduwmSlWO0sDYaOJB6CvL1fI4Uu1qlhdkJ2DtLBzl4Q9l4Blm1KtD0121xTvWz%2Fs20y4U6JMxv0UF3lYBOJsLvNLF1BnzqQ75XUzUQ1intEPwrz6BAGdIeZNTtBwrNhCQ9qcDGYdCxIJaweBvDz%2B2HG%2FskNERbsINdvp2OKj1GdSTfS3BGfZMtP0hnNtLI2hd%2B3%2F140XnejVo5pwkmZKlrhRCYLvN49g0vDa61i7DYKABZpPpmSlQ4UG208GLPGKDblGPECrEawJVPwgkZac44Eeelk9xm7KB7vOJ83MJmklkRSTsnKMbpAji17m%2B5TNhCgQr9Gjwidt4a1C9HqdQfADC1DgwAYTXVdaPrgi6NPOXLRPfanpA4Mmdwu%2FszMmHGd7fApVzGfC0h7sy4RauFPTjYASFt1y4YjpvsEfG0u4w%2BsqBvwY6pgHSKggrHjzIf%2FtOeBJrO6JIlK%2FZB9LtPgjL%2Fh%2BI6xCVlh%2FIlPjF5OxCRdbMs21MYg6Z1SGHlAjAGXTSbHVgglLvXp0FnGzGBGZmb0oJcGAJ55XOGMh2fn308EefaeDCpMjHwYtAhYhN90BRuRexibcR68DAUsfq0wo6AcRGJuYgHkxHR%2FCixrF4f4upqs0nANF3CNrtkknpyis%2FjmuKjAerPGsoooaV&X-Amz-Signature=1af33806361acb1bb19c580f7947295dd84afe19eeaceeeb7316a46de85efb73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CPI6RI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKcCWEH5IpziaEoUkgMrPM07lZT9BaxmP7wvtxVC06MAiAeXVXlXejnoF45ll3BLhKcYsn5imEzaLKoI2Bb6EKeECqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5WW6w%2FGrwqNIiJqgKtwD5g4HtnccHBsri34eLNlcq9BJ54DSTPXLmwhpWjG6orRG6HLsXzj4xXg1N8yWOV6AoCSXBZAYpuDPnwOpNAx%2Fg%2Bz2xYS8LoueoHehfsIFBppY1tXGjKTFk5yD3Xno9nxNCTZpBes%2BTAmEi7U%2FQKI8cvhbE7PfWc7XCegj7AYWVnyAhPIQ2k6UJmHFH3XKm%2F8%2BnjGmbPIeN5f37f6ZduwmSlWO0sDYaOJB6CvL1fI4Uu1qlhdkJ2DtLBzl4Q9l4Blm1KtD0121xTvWz%2Fs20y4U6JMxv0UF3lYBOJsLvNLF1BnzqQ75XUzUQ1intEPwrz6BAGdIeZNTtBwrNhCQ9qcDGYdCxIJaweBvDz%2B2HG%2FskNERbsINdvp2OKj1GdSTfS3BGfZMtP0hnNtLI2hd%2B3%2F140XnejVo5pwkmZKlrhRCYLvN49g0vDa61i7DYKABZpPpmSlQ4UG208GLPGKDblGPECrEawJVPwgkZac44Eeelk9xm7KB7vOJ83MJmklkRSTsnKMbpAji17m%2B5TNhCgQr9Gjwidt4a1C9HqdQfADC1DgwAYTXVdaPrgi6NPOXLRPfanpA4Mmdwu%2FszMmHGd7fApVzGfC0h7sy4RauFPTjYASFt1y4YjpvsEfG0u4w%2BsqBvwY6pgHSKggrHjzIf%2FtOeBJrO6JIlK%2FZB9LtPgjL%2Fh%2BI6xCVlh%2FIlPjF5OxCRdbMs21MYg6Z1SGHlAjAGXTSbHVgglLvXp0FnGzGBGZmb0oJcGAJ55XOGMh2fn308EefaeDCpMjHwYtAhYhN90BRuRexibcR68DAUsfq0wo6AcRGJuYgHkxHR%2FCixrF4f4upqs0nANF3CNrtkknpyis%2FjmuKjAerPGsoooaV&X-Amz-Signature=854ae2e40668c224eec044b04f86f81e9a6ed3123d346c6b01f3952997144e99&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CPI6RI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKcCWEH5IpziaEoUkgMrPM07lZT9BaxmP7wvtxVC06MAiAeXVXlXejnoF45ll3BLhKcYsn5imEzaLKoI2Bb6EKeECqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5WW6w%2FGrwqNIiJqgKtwD5g4HtnccHBsri34eLNlcq9BJ54DSTPXLmwhpWjG6orRG6HLsXzj4xXg1N8yWOV6AoCSXBZAYpuDPnwOpNAx%2Fg%2Bz2xYS8LoueoHehfsIFBppY1tXGjKTFk5yD3Xno9nxNCTZpBes%2BTAmEi7U%2FQKI8cvhbE7PfWc7XCegj7AYWVnyAhPIQ2k6UJmHFH3XKm%2F8%2BnjGmbPIeN5f37f6ZduwmSlWO0sDYaOJB6CvL1fI4Uu1qlhdkJ2DtLBzl4Q9l4Blm1KtD0121xTvWz%2Fs20y4U6JMxv0UF3lYBOJsLvNLF1BnzqQ75XUzUQ1intEPwrz6BAGdIeZNTtBwrNhCQ9qcDGYdCxIJaweBvDz%2B2HG%2FskNERbsINdvp2OKj1GdSTfS3BGfZMtP0hnNtLI2hd%2B3%2F140XnejVo5pwkmZKlrhRCYLvN49g0vDa61i7DYKABZpPpmSlQ4UG208GLPGKDblGPECrEawJVPwgkZac44Eeelk9xm7KB7vOJ83MJmklkRSTsnKMbpAji17m%2B5TNhCgQr9Gjwidt4a1C9HqdQfADC1DgwAYTXVdaPrgi6NPOXLRPfanpA4Mmdwu%2FszMmHGd7fApVzGfC0h7sy4RauFPTjYASFt1y4YjpvsEfG0u4w%2BsqBvwY6pgHSKggrHjzIf%2FtOeBJrO6JIlK%2FZB9LtPgjL%2Fh%2BI6xCVlh%2FIlPjF5OxCRdbMs21MYg6Z1SGHlAjAGXTSbHVgglLvXp0FnGzGBGZmb0oJcGAJ55XOGMh2fn308EefaeDCpMjHwYtAhYhN90BRuRexibcR68DAUsfq0wo6AcRGJuYgHkxHR%2FCixrF4f4upqs0nANF3CNrtkknpyis%2FjmuKjAerPGsoooaV&X-Amz-Signature=cd40a7bfbaa1d1344a4eec5159bf96476754f0684f08b344c3bbc9317e8ebeda&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CPI6RI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKcCWEH5IpziaEoUkgMrPM07lZT9BaxmP7wvtxVC06MAiAeXVXlXejnoF45ll3BLhKcYsn5imEzaLKoI2Bb6EKeECqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5WW6w%2FGrwqNIiJqgKtwD5g4HtnccHBsri34eLNlcq9BJ54DSTPXLmwhpWjG6orRG6HLsXzj4xXg1N8yWOV6AoCSXBZAYpuDPnwOpNAx%2Fg%2Bz2xYS8LoueoHehfsIFBppY1tXGjKTFk5yD3Xno9nxNCTZpBes%2BTAmEi7U%2FQKI8cvhbE7PfWc7XCegj7AYWVnyAhPIQ2k6UJmHFH3XKm%2F8%2BnjGmbPIeN5f37f6ZduwmSlWO0sDYaOJB6CvL1fI4Uu1qlhdkJ2DtLBzl4Q9l4Blm1KtD0121xTvWz%2Fs20y4U6JMxv0UF3lYBOJsLvNLF1BnzqQ75XUzUQ1intEPwrz6BAGdIeZNTtBwrNhCQ9qcDGYdCxIJaweBvDz%2B2HG%2FskNERbsINdvp2OKj1GdSTfS3BGfZMtP0hnNtLI2hd%2B3%2F140XnejVo5pwkmZKlrhRCYLvN49g0vDa61i7DYKABZpPpmSlQ4UG208GLPGKDblGPECrEawJVPwgkZac44Eeelk9xm7KB7vOJ83MJmklkRSTsnKMbpAji17m%2B5TNhCgQr9Gjwidt4a1C9HqdQfADC1DgwAYTXVdaPrgi6NPOXLRPfanpA4Mmdwu%2FszMmHGd7fApVzGfC0h7sy4RauFPTjYASFt1y4YjpvsEfG0u4w%2BsqBvwY6pgHSKggrHjzIf%2FtOeBJrO6JIlK%2FZB9LtPgjL%2Fh%2BI6xCVlh%2FIlPjF5OxCRdbMs21MYg6Z1SGHlAjAGXTSbHVgglLvXp0FnGzGBGZmb0oJcGAJ55XOGMh2fn308EefaeDCpMjHwYtAhYhN90BRuRexibcR68DAUsfq0wo6AcRGJuYgHkxHR%2FCixrF4f4upqs0nANF3CNrtkknpyis%2FjmuKjAerPGsoooaV&X-Amz-Signature=2b23b44f05ae971de958b1aec104e0a67d178ab59b38cbefb0d3596bf0dec45f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CPI6RI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKcCWEH5IpziaEoUkgMrPM07lZT9BaxmP7wvtxVC06MAiAeXVXlXejnoF45ll3BLhKcYsn5imEzaLKoI2Bb6EKeECqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5WW6w%2FGrwqNIiJqgKtwD5g4HtnccHBsri34eLNlcq9BJ54DSTPXLmwhpWjG6orRG6HLsXzj4xXg1N8yWOV6AoCSXBZAYpuDPnwOpNAx%2Fg%2Bz2xYS8LoueoHehfsIFBppY1tXGjKTFk5yD3Xno9nxNCTZpBes%2BTAmEi7U%2FQKI8cvhbE7PfWc7XCegj7AYWVnyAhPIQ2k6UJmHFH3XKm%2F8%2BnjGmbPIeN5f37f6ZduwmSlWO0sDYaOJB6CvL1fI4Uu1qlhdkJ2DtLBzl4Q9l4Blm1KtD0121xTvWz%2Fs20y4U6JMxv0UF3lYBOJsLvNLF1BnzqQ75XUzUQ1intEPwrz6BAGdIeZNTtBwrNhCQ9qcDGYdCxIJaweBvDz%2B2HG%2FskNERbsINdvp2OKj1GdSTfS3BGfZMtP0hnNtLI2hd%2B3%2F140XnejVo5pwkmZKlrhRCYLvN49g0vDa61i7DYKABZpPpmSlQ4UG208GLPGKDblGPECrEawJVPwgkZac44Eeelk9xm7KB7vOJ83MJmklkRSTsnKMbpAji17m%2B5TNhCgQr9Gjwidt4a1C9HqdQfADC1DgwAYTXVdaPrgi6NPOXLRPfanpA4Mmdwu%2FszMmHGd7fApVzGfC0h7sy4RauFPTjYASFt1y4YjpvsEfG0u4w%2BsqBvwY6pgHSKggrHjzIf%2FtOeBJrO6JIlK%2FZB9LtPgjL%2Fh%2BI6xCVlh%2FIlPjF5OxCRdbMs21MYg6Z1SGHlAjAGXTSbHVgglLvXp0FnGzGBGZmb0oJcGAJ55XOGMh2fn308EefaeDCpMjHwYtAhYhN90BRuRexibcR68DAUsfq0wo6AcRGJuYgHkxHR%2FCixrF4f4upqs0nANF3CNrtkknpyis%2FjmuKjAerPGsoooaV&X-Amz-Signature=e9fb408c10ee8c98c38aff4891b15db4824ace2b9d446f0bd99b48d82e544a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CPI6RI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKcCWEH5IpziaEoUkgMrPM07lZT9BaxmP7wvtxVC06MAiAeXVXlXejnoF45ll3BLhKcYsn5imEzaLKoI2Bb6EKeECqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5WW6w%2FGrwqNIiJqgKtwD5g4HtnccHBsri34eLNlcq9BJ54DSTPXLmwhpWjG6orRG6HLsXzj4xXg1N8yWOV6AoCSXBZAYpuDPnwOpNAx%2Fg%2Bz2xYS8LoueoHehfsIFBppY1tXGjKTFk5yD3Xno9nxNCTZpBes%2BTAmEi7U%2FQKI8cvhbE7PfWc7XCegj7AYWVnyAhPIQ2k6UJmHFH3XKm%2F8%2BnjGmbPIeN5f37f6ZduwmSlWO0sDYaOJB6CvL1fI4Uu1qlhdkJ2DtLBzl4Q9l4Blm1KtD0121xTvWz%2Fs20y4U6JMxv0UF3lYBOJsLvNLF1BnzqQ75XUzUQ1intEPwrz6BAGdIeZNTtBwrNhCQ9qcDGYdCxIJaweBvDz%2B2HG%2FskNERbsINdvp2OKj1GdSTfS3BGfZMtP0hnNtLI2hd%2B3%2F140XnejVo5pwkmZKlrhRCYLvN49g0vDa61i7DYKABZpPpmSlQ4UG208GLPGKDblGPECrEawJVPwgkZac44Eeelk9xm7KB7vOJ83MJmklkRSTsnKMbpAji17m%2B5TNhCgQr9Gjwidt4a1C9HqdQfADC1DgwAYTXVdaPrgi6NPOXLRPfanpA4Mmdwu%2FszMmHGd7fApVzGfC0h7sy4RauFPTjYASFt1y4YjpvsEfG0u4w%2BsqBvwY6pgHSKggrHjzIf%2FtOeBJrO6JIlK%2FZB9LtPgjL%2Fh%2BI6xCVlh%2FIlPjF5OxCRdbMs21MYg6Z1SGHlAjAGXTSbHVgglLvXp0FnGzGBGZmb0oJcGAJ55XOGMh2fn308EefaeDCpMjHwYtAhYhN90BRuRexibcR68DAUsfq0wo6AcRGJuYgHkxHR%2FCixrF4f4upqs0nANF3CNrtkknpyis%2FjmuKjAerPGsoooaV&X-Amz-Signature=c4ee0064c1dc340046b39510f382b039cc64477b652fbfa64f4f9e401cbc8b21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CPI6RI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKcCWEH5IpziaEoUkgMrPM07lZT9BaxmP7wvtxVC06MAiAeXVXlXejnoF45ll3BLhKcYsn5imEzaLKoI2Bb6EKeECqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5WW6w%2FGrwqNIiJqgKtwD5g4HtnccHBsri34eLNlcq9BJ54DSTPXLmwhpWjG6orRG6HLsXzj4xXg1N8yWOV6AoCSXBZAYpuDPnwOpNAx%2Fg%2Bz2xYS8LoueoHehfsIFBppY1tXGjKTFk5yD3Xno9nxNCTZpBes%2BTAmEi7U%2FQKI8cvhbE7PfWc7XCegj7AYWVnyAhPIQ2k6UJmHFH3XKm%2F8%2BnjGmbPIeN5f37f6ZduwmSlWO0sDYaOJB6CvL1fI4Uu1qlhdkJ2DtLBzl4Q9l4Blm1KtD0121xTvWz%2Fs20y4U6JMxv0UF3lYBOJsLvNLF1BnzqQ75XUzUQ1intEPwrz6BAGdIeZNTtBwrNhCQ9qcDGYdCxIJaweBvDz%2B2HG%2FskNERbsINdvp2OKj1GdSTfS3BGfZMtP0hnNtLI2hd%2B3%2F140XnejVo5pwkmZKlrhRCYLvN49g0vDa61i7DYKABZpPpmSlQ4UG208GLPGKDblGPECrEawJVPwgkZac44Eeelk9xm7KB7vOJ83MJmklkRSTsnKMbpAji17m%2B5TNhCgQr9Gjwidt4a1C9HqdQfADC1DgwAYTXVdaPrgi6NPOXLRPfanpA4Mmdwu%2FszMmHGd7fApVzGfC0h7sy4RauFPTjYASFt1y4YjpvsEfG0u4w%2BsqBvwY6pgHSKggrHjzIf%2FtOeBJrO6JIlK%2FZB9LtPgjL%2Fh%2BI6xCVlh%2FIlPjF5OxCRdbMs21MYg6Z1SGHlAjAGXTSbHVgglLvXp0FnGzGBGZmb0oJcGAJ55XOGMh2fn308EefaeDCpMjHwYtAhYhN90BRuRexibcR68DAUsfq0wo6AcRGJuYgHkxHR%2FCixrF4f4upqs0nANF3CNrtkknpyis%2FjmuKjAerPGsoooaV&X-Amz-Signature=c8f465c5b6655d6dd05ee241df1b874cd5f7caf51a1dd984f3ccb1135e20af85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CPI6RI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKcCWEH5IpziaEoUkgMrPM07lZT9BaxmP7wvtxVC06MAiAeXVXlXejnoF45ll3BLhKcYsn5imEzaLKoI2Bb6EKeECqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5WW6w%2FGrwqNIiJqgKtwD5g4HtnccHBsri34eLNlcq9BJ54DSTPXLmwhpWjG6orRG6HLsXzj4xXg1N8yWOV6AoCSXBZAYpuDPnwOpNAx%2Fg%2Bz2xYS8LoueoHehfsIFBppY1tXGjKTFk5yD3Xno9nxNCTZpBes%2BTAmEi7U%2FQKI8cvhbE7PfWc7XCegj7AYWVnyAhPIQ2k6UJmHFH3XKm%2F8%2BnjGmbPIeN5f37f6ZduwmSlWO0sDYaOJB6CvL1fI4Uu1qlhdkJ2DtLBzl4Q9l4Blm1KtD0121xTvWz%2Fs20y4U6JMxv0UF3lYBOJsLvNLF1BnzqQ75XUzUQ1intEPwrz6BAGdIeZNTtBwrNhCQ9qcDGYdCxIJaweBvDz%2B2HG%2FskNERbsINdvp2OKj1GdSTfS3BGfZMtP0hnNtLI2hd%2B3%2F140XnejVo5pwkmZKlrhRCYLvN49g0vDa61i7DYKABZpPpmSlQ4UG208GLPGKDblGPECrEawJVPwgkZac44Eeelk9xm7KB7vOJ83MJmklkRSTsnKMbpAji17m%2B5TNhCgQr9Gjwidt4a1C9HqdQfADC1DgwAYTXVdaPrgi6NPOXLRPfanpA4Mmdwu%2FszMmHGd7fApVzGfC0h7sy4RauFPTjYASFt1y4YjpvsEfG0u4w%2BsqBvwY6pgHSKggrHjzIf%2FtOeBJrO6JIlK%2FZB9LtPgjL%2Fh%2BI6xCVlh%2FIlPjF5OxCRdbMs21MYg6Z1SGHlAjAGXTSbHVgglLvXp0FnGzGBGZmb0oJcGAJ55XOGMh2fn308EefaeDCpMjHwYtAhYhN90BRuRexibcR68DAUsfq0wo6AcRGJuYgHkxHR%2FCixrF4f4upqs0nANF3CNrtkknpyis%2FjmuKjAerPGsoooaV&X-Amz-Signature=de94ad70b14ad366e614283d8e4b4f8ba6cc49ca8c684f617c15cc9df92e884b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

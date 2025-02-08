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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIXN3ZW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDP%2FHGZK0lWmgDlD0cZLiJJN%2FuibdakxMkiBL35NhDQHgIgL4t%2Fd4tZXzkW4GAHJZWosEZWkYCQWu8ENkvLdSh6%2FH8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu7wKsC%2F5yq%2F%2Bd1circAwrVBKZYvaO4BZggNfILzVHNX5BUkEygHO%2BePczwlS1XhVv18bdCwKOCZIRwFFM6T6P%2BuBmOLL1Zd3a3Q4KF4L5l9LXJbvKECwdInRFUFonbQayebWtxCsoLx9qitwrzFuCbNA52Lr1Lc8cCqmSWW%2F9P%2BaUxOgsDUwQnPd2FfwSfzrer00RtEpNhLsFmB81wkQ2sJ0TR8XadAIzTmqXJAb7nVk0YoljT%2F33rm7U3p5Cact%2BRAA7dVypWTtoEwYvjuvQH6%2BUKNaiIiY5pJj%2BgX2qK63rq92P9x1Szz1JvpFCS66kFqSJ3dPs543JJ2fFz5Bq4ADszw9LxqVddmZZTVLHIhbWmxI5xP2R6ZZj2ZPxgyM9InYPfa3tZfMKgvi5vW11TtvCyfyKBoZycP0BALiHBCx7GbD18qv7Z9qus16e1JJIrtaeqQC0jTMThyi0OL5bvK4TMYhSzCZIMuma7U1iouxzH2SxjES4TB%2B66ws1BwdWE%2FBTApT7%2F0WQULtxhR0pa1BjkbChiLcE%2Fecr4IgzrJbLldXkfL8JKgklZafEgVEohQE2V2Nz1YEzKgl2ghvvMLZ7utbvSnGQztKlI4teARoVU5hzcUyF%2FNPnstcHnqlDTkHdImg4hD5%2F1MKeQnL0GOqUBJKT1v%2B68m86uL1806NfJ38qiUACsVWNJ4r50ukSVpVT3ZI9b8iKeRTHbIy%2Fz6jTFtAye7mHIz4Lsos1t%2FV7UkIHJQC%2BdDw%2Bxp%2FqbydKW5lVzVLBWQHNK9ETKHmi0pgz9CE6LIe6Uh7%2F8DGmuk7Khlo55Gf9aDbwKYMO3ZvqxBWCGV%2FUmJ5opXm%2FbyonsFSIpKCA%2B0UT1amO3McwYpnz6pNwobmOk&X-Amz-Signature=843540e33d2f4896dfee6a10c218ef73ccf1c41f3b3720df5012cbe0fb54689a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIXN3ZW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDP%2FHGZK0lWmgDlD0cZLiJJN%2FuibdakxMkiBL35NhDQHgIgL4t%2Fd4tZXzkW4GAHJZWosEZWkYCQWu8ENkvLdSh6%2FH8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu7wKsC%2F5yq%2F%2Bd1circAwrVBKZYvaO4BZggNfILzVHNX5BUkEygHO%2BePczwlS1XhVv18bdCwKOCZIRwFFM6T6P%2BuBmOLL1Zd3a3Q4KF4L5l9LXJbvKECwdInRFUFonbQayebWtxCsoLx9qitwrzFuCbNA52Lr1Lc8cCqmSWW%2F9P%2BaUxOgsDUwQnPd2FfwSfzrer00RtEpNhLsFmB81wkQ2sJ0TR8XadAIzTmqXJAb7nVk0YoljT%2F33rm7U3p5Cact%2BRAA7dVypWTtoEwYvjuvQH6%2BUKNaiIiY5pJj%2BgX2qK63rq92P9x1Szz1JvpFCS66kFqSJ3dPs543JJ2fFz5Bq4ADszw9LxqVddmZZTVLHIhbWmxI5xP2R6ZZj2ZPxgyM9InYPfa3tZfMKgvi5vW11TtvCyfyKBoZycP0BALiHBCx7GbD18qv7Z9qus16e1JJIrtaeqQC0jTMThyi0OL5bvK4TMYhSzCZIMuma7U1iouxzH2SxjES4TB%2B66ws1BwdWE%2FBTApT7%2F0WQULtxhR0pa1BjkbChiLcE%2Fecr4IgzrJbLldXkfL8JKgklZafEgVEohQE2V2Nz1YEzKgl2ghvvMLZ7utbvSnGQztKlI4teARoVU5hzcUyF%2FNPnstcHnqlDTkHdImg4hD5%2F1MKeQnL0GOqUBJKT1v%2B68m86uL1806NfJ38qiUACsVWNJ4r50ukSVpVT3ZI9b8iKeRTHbIy%2Fz6jTFtAye7mHIz4Lsos1t%2FV7UkIHJQC%2BdDw%2Bxp%2FqbydKW5lVzVLBWQHNK9ETKHmi0pgz9CE6LIe6Uh7%2F8DGmuk7Khlo55Gf9aDbwKYMO3ZvqxBWCGV%2FUmJ5opXm%2FbyonsFSIpKCA%2B0UT1amO3McwYpnz6pNwobmOk&X-Amz-Signature=157c50f62b26e3cfafd8b02031a0c14ec37622792b5f1095fbf26d912f2502f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIXN3ZW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDP%2FHGZK0lWmgDlD0cZLiJJN%2FuibdakxMkiBL35NhDQHgIgL4t%2Fd4tZXzkW4GAHJZWosEZWkYCQWu8ENkvLdSh6%2FH8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu7wKsC%2F5yq%2F%2Bd1circAwrVBKZYvaO4BZggNfILzVHNX5BUkEygHO%2BePczwlS1XhVv18bdCwKOCZIRwFFM6T6P%2BuBmOLL1Zd3a3Q4KF4L5l9LXJbvKECwdInRFUFonbQayebWtxCsoLx9qitwrzFuCbNA52Lr1Lc8cCqmSWW%2F9P%2BaUxOgsDUwQnPd2FfwSfzrer00RtEpNhLsFmB81wkQ2sJ0TR8XadAIzTmqXJAb7nVk0YoljT%2F33rm7U3p5Cact%2BRAA7dVypWTtoEwYvjuvQH6%2BUKNaiIiY5pJj%2BgX2qK63rq92P9x1Szz1JvpFCS66kFqSJ3dPs543JJ2fFz5Bq4ADszw9LxqVddmZZTVLHIhbWmxI5xP2R6ZZj2ZPxgyM9InYPfa3tZfMKgvi5vW11TtvCyfyKBoZycP0BALiHBCx7GbD18qv7Z9qus16e1JJIrtaeqQC0jTMThyi0OL5bvK4TMYhSzCZIMuma7U1iouxzH2SxjES4TB%2B66ws1BwdWE%2FBTApT7%2F0WQULtxhR0pa1BjkbChiLcE%2Fecr4IgzrJbLldXkfL8JKgklZafEgVEohQE2V2Nz1YEzKgl2ghvvMLZ7utbvSnGQztKlI4teARoVU5hzcUyF%2FNPnstcHnqlDTkHdImg4hD5%2F1MKeQnL0GOqUBJKT1v%2B68m86uL1806NfJ38qiUACsVWNJ4r50ukSVpVT3ZI9b8iKeRTHbIy%2Fz6jTFtAye7mHIz4Lsos1t%2FV7UkIHJQC%2BdDw%2Bxp%2FqbydKW5lVzVLBWQHNK9ETKHmi0pgz9CE6LIe6Uh7%2F8DGmuk7Khlo55Gf9aDbwKYMO3ZvqxBWCGV%2FUmJ5opXm%2FbyonsFSIpKCA%2B0UT1amO3McwYpnz6pNwobmOk&X-Amz-Signature=30c454dca59e17f56136a40ac3a91a7f2d43247dcdf74a82464a09f1f0098a47&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIXN3ZW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDP%2FHGZK0lWmgDlD0cZLiJJN%2FuibdakxMkiBL35NhDQHgIgL4t%2Fd4tZXzkW4GAHJZWosEZWkYCQWu8ENkvLdSh6%2FH8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu7wKsC%2F5yq%2F%2Bd1circAwrVBKZYvaO4BZggNfILzVHNX5BUkEygHO%2BePczwlS1XhVv18bdCwKOCZIRwFFM6T6P%2BuBmOLL1Zd3a3Q4KF4L5l9LXJbvKECwdInRFUFonbQayebWtxCsoLx9qitwrzFuCbNA52Lr1Lc8cCqmSWW%2F9P%2BaUxOgsDUwQnPd2FfwSfzrer00RtEpNhLsFmB81wkQ2sJ0TR8XadAIzTmqXJAb7nVk0YoljT%2F33rm7U3p5Cact%2BRAA7dVypWTtoEwYvjuvQH6%2BUKNaiIiY5pJj%2BgX2qK63rq92P9x1Szz1JvpFCS66kFqSJ3dPs543JJ2fFz5Bq4ADszw9LxqVddmZZTVLHIhbWmxI5xP2R6ZZj2ZPxgyM9InYPfa3tZfMKgvi5vW11TtvCyfyKBoZycP0BALiHBCx7GbD18qv7Z9qus16e1JJIrtaeqQC0jTMThyi0OL5bvK4TMYhSzCZIMuma7U1iouxzH2SxjES4TB%2B66ws1BwdWE%2FBTApT7%2F0WQULtxhR0pa1BjkbChiLcE%2Fecr4IgzrJbLldXkfL8JKgklZafEgVEohQE2V2Nz1YEzKgl2ghvvMLZ7utbvSnGQztKlI4teARoVU5hzcUyF%2FNPnstcHnqlDTkHdImg4hD5%2F1MKeQnL0GOqUBJKT1v%2B68m86uL1806NfJ38qiUACsVWNJ4r50ukSVpVT3ZI9b8iKeRTHbIy%2Fz6jTFtAye7mHIz4Lsos1t%2FV7UkIHJQC%2BdDw%2Bxp%2FqbydKW5lVzVLBWQHNK9ETKHmi0pgz9CE6LIe6Uh7%2F8DGmuk7Khlo55Gf9aDbwKYMO3ZvqxBWCGV%2FUmJ5opXm%2FbyonsFSIpKCA%2B0UT1amO3McwYpnz6pNwobmOk&X-Amz-Signature=d12925b2b2dcc34abbae0986095a9795f9b399647b0524349c1c1bef862f860b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIXN3ZW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDP%2FHGZK0lWmgDlD0cZLiJJN%2FuibdakxMkiBL35NhDQHgIgL4t%2Fd4tZXzkW4GAHJZWosEZWkYCQWu8ENkvLdSh6%2FH8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu7wKsC%2F5yq%2F%2Bd1circAwrVBKZYvaO4BZggNfILzVHNX5BUkEygHO%2BePczwlS1XhVv18bdCwKOCZIRwFFM6T6P%2BuBmOLL1Zd3a3Q4KF4L5l9LXJbvKECwdInRFUFonbQayebWtxCsoLx9qitwrzFuCbNA52Lr1Lc8cCqmSWW%2F9P%2BaUxOgsDUwQnPd2FfwSfzrer00RtEpNhLsFmB81wkQ2sJ0TR8XadAIzTmqXJAb7nVk0YoljT%2F33rm7U3p5Cact%2BRAA7dVypWTtoEwYvjuvQH6%2BUKNaiIiY5pJj%2BgX2qK63rq92P9x1Szz1JvpFCS66kFqSJ3dPs543JJ2fFz5Bq4ADszw9LxqVddmZZTVLHIhbWmxI5xP2R6ZZj2ZPxgyM9InYPfa3tZfMKgvi5vW11TtvCyfyKBoZycP0BALiHBCx7GbD18qv7Z9qus16e1JJIrtaeqQC0jTMThyi0OL5bvK4TMYhSzCZIMuma7U1iouxzH2SxjES4TB%2B66ws1BwdWE%2FBTApT7%2F0WQULtxhR0pa1BjkbChiLcE%2Fecr4IgzrJbLldXkfL8JKgklZafEgVEohQE2V2Nz1YEzKgl2ghvvMLZ7utbvSnGQztKlI4teARoVU5hzcUyF%2FNPnstcHnqlDTkHdImg4hD5%2F1MKeQnL0GOqUBJKT1v%2B68m86uL1806NfJ38qiUACsVWNJ4r50ukSVpVT3ZI9b8iKeRTHbIy%2Fz6jTFtAye7mHIz4Lsos1t%2FV7UkIHJQC%2BdDw%2Bxp%2FqbydKW5lVzVLBWQHNK9ETKHmi0pgz9CE6LIe6Uh7%2F8DGmuk7Khlo55Gf9aDbwKYMO3ZvqxBWCGV%2FUmJ5opXm%2FbyonsFSIpKCA%2B0UT1amO3McwYpnz6pNwobmOk&X-Amz-Signature=c2d3b3beb4b56d8c1877353a17ddbdbabba7c33895a4ed79e6324079b24d0994&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIXN3ZW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDP%2FHGZK0lWmgDlD0cZLiJJN%2FuibdakxMkiBL35NhDQHgIgL4t%2Fd4tZXzkW4GAHJZWosEZWkYCQWu8ENkvLdSh6%2FH8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu7wKsC%2F5yq%2F%2Bd1circAwrVBKZYvaO4BZggNfILzVHNX5BUkEygHO%2BePczwlS1XhVv18bdCwKOCZIRwFFM6T6P%2BuBmOLL1Zd3a3Q4KF4L5l9LXJbvKECwdInRFUFonbQayebWtxCsoLx9qitwrzFuCbNA52Lr1Lc8cCqmSWW%2F9P%2BaUxOgsDUwQnPd2FfwSfzrer00RtEpNhLsFmB81wkQ2sJ0TR8XadAIzTmqXJAb7nVk0YoljT%2F33rm7U3p5Cact%2BRAA7dVypWTtoEwYvjuvQH6%2BUKNaiIiY5pJj%2BgX2qK63rq92P9x1Szz1JvpFCS66kFqSJ3dPs543JJ2fFz5Bq4ADszw9LxqVddmZZTVLHIhbWmxI5xP2R6ZZj2ZPxgyM9InYPfa3tZfMKgvi5vW11TtvCyfyKBoZycP0BALiHBCx7GbD18qv7Z9qus16e1JJIrtaeqQC0jTMThyi0OL5bvK4TMYhSzCZIMuma7U1iouxzH2SxjES4TB%2B66ws1BwdWE%2FBTApT7%2F0WQULtxhR0pa1BjkbChiLcE%2Fecr4IgzrJbLldXkfL8JKgklZafEgVEohQE2V2Nz1YEzKgl2ghvvMLZ7utbvSnGQztKlI4teARoVU5hzcUyF%2FNPnstcHnqlDTkHdImg4hD5%2F1MKeQnL0GOqUBJKT1v%2B68m86uL1806NfJ38qiUACsVWNJ4r50ukSVpVT3ZI9b8iKeRTHbIy%2Fz6jTFtAye7mHIz4Lsos1t%2FV7UkIHJQC%2BdDw%2Bxp%2FqbydKW5lVzVLBWQHNK9ETKHmi0pgz9CE6LIe6Uh7%2F8DGmuk7Khlo55Gf9aDbwKYMO3ZvqxBWCGV%2FUmJ5opXm%2FbyonsFSIpKCA%2B0UT1amO3McwYpnz6pNwobmOk&X-Amz-Signature=8f2d488ca22fd7ef9b7abf075292d84f5e7ff73b8b971c081e08c408a9d4ecd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIXN3ZW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDP%2FHGZK0lWmgDlD0cZLiJJN%2FuibdakxMkiBL35NhDQHgIgL4t%2Fd4tZXzkW4GAHJZWosEZWkYCQWu8ENkvLdSh6%2FH8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu7wKsC%2F5yq%2F%2Bd1circAwrVBKZYvaO4BZggNfILzVHNX5BUkEygHO%2BePczwlS1XhVv18bdCwKOCZIRwFFM6T6P%2BuBmOLL1Zd3a3Q4KF4L5l9LXJbvKECwdInRFUFonbQayebWtxCsoLx9qitwrzFuCbNA52Lr1Lc8cCqmSWW%2F9P%2BaUxOgsDUwQnPd2FfwSfzrer00RtEpNhLsFmB81wkQ2sJ0TR8XadAIzTmqXJAb7nVk0YoljT%2F33rm7U3p5Cact%2BRAA7dVypWTtoEwYvjuvQH6%2BUKNaiIiY5pJj%2BgX2qK63rq92P9x1Szz1JvpFCS66kFqSJ3dPs543JJ2fFz5Bq4ADszw9LxqVddmZZTVLHIhbWmxI5xP2R6ZZj2ZPxgyM9InYPfa3tZfMKgvi5vW11TtvCyfyKBoZycP0BALiHBCx7GbD18qv7Z9qus16e1JJIrtaeqQC0jTMThyi0OL5bvK4TMYhSzCZIMuma7U1iouxzH2SxjES4TB%2B66ws1BwdWE%2FBTApT7%2F0WQULtxhR0pa1BjkbChiLcE%2Fecr4IgzrJbLldXkfL8JKgklZafEgVEohQE2V2Nz1YEzKgl2ghvvMLZ7utbvSnGQztKlI4teARoVU5hzcUyF%2FNPnstcHnqlDTkHdImg4hD5%2F1MKeQnL0GOqUBJKT1v%2B68m86uL1806NfJ38qiUACsVWNJ4r50ukSVpVT3ZI9b8iKeRTHbIy%2Fz6jTFtAye7mHIz4Lsos1t%2FV7UkIHJQC%2BdDw%2Bxp%2FqbydKW5lVzVLBWQHNK9ETKHmi0pgz9CE6LIe6Uh7%2F8DGmuk7Khlo55Gf9aDbwKYMO3ZvqxBWCGV%2FUmJ5opXm%2FbyonsFSIpKCA%2B0UT1amO3McwYpnz6pNwobmOk&X-Amz-Signature=c4da74da84ca3fc2370d0c6c4e2bb495b26a66c011b5c342c95d28750c9aac02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIXN3ZW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDP%2FHGZK0lWmgDlD0cZLiJJN%2FuibdakxMkiBL35NhDQHgIgL4t%2Fd4tZXzkW4GAHJZWosEZWkYCQWu8ENkvLdSh6%2FH8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu7wKsC%2F5yq%2F%2Bd1circAwrVBKZYvaO4BZggNfILzVHNX5BUkEygHO%2BePczwlS1XhVv18bdCwKOCZIRwFFM6T6P%2BuBmOLL1Zd3a3Q4KF4L5l9LXJbvKECwdInRFUFonbQayebWtxCsoLx9qitwrzFuCbNA52Lr1Lc8cCqmSWW%2F9P%2BaUxOgsDUwQnPd2FfwSfzrer00RtEpNhLsFmB81wkQ2sJ0TR8XadAIzTmqXJAb7nVk0YoljT%2F33rm7U3p5Cact%2BRAA7dVypWTtoEwYvjuvQH6%2BUKNaiIiY5pJj%2BgX2qK63rq92P9x1Szz1JvpFCS66kFqSJ3dPs543JJ2fFz5Bq4ADszw9LxqVddmZZTVLHIhbWmxI5xP2R6ZZj2ZPxgyM9InYPfa3tZfMKgvi5vW11TtvCyfyKBoZycP0BALiHBCx7GbD18qv7Z9qus16e1JJIrtaeqQC0jTMThyi0OL5bvK4TMYhSzCZIMuma7U1iouxzH2SxjES4TB%2B66ws1BwdWE%2FBTApT7%2F0WQULtxhR0pa1BjkbChiLcE%2Fecr4IgzrJbLldXkfL8JKgklZafEgVEohQE2V2Nz1YEzKgl2ghvvMLZ7utbvSnGQztKlI4teARoVU5hzcUyF%2FNPnstcHnqlDTkHdImg4hD5%2F1MKeQnL0GOqUBJKT1v%2B68m86uL1806NfJ38qiUACsVWNJ4r50ukSVpVT3ZI9b8iKeRTHbIy%2Fz6jTFtAye7mHIz4Lsos1t%2FV7UkIHJQC%2BdDw%2Bxp%2FqbydKW5lVzVLBWQHNK9ETKHmi0pgz9CE6LIe6Uh7%2F8DGmuk7Khlo55Gf9aDbwKYMO3ZvqxBWCGV%2FUmJ5opXm%2FbyonsFSIpKCA%2B0UT1amO3McwYpnz6pNwobmOk&X-Amz-Signature=0fdcb83b0657770bc690b1f17b5593dcc8cd0eaba44a68396e2722684f150b44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

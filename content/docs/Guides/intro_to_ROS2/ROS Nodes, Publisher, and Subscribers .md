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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2VLZSB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDHUhdOfG7ZTevC1H1B3Ut25nC5h1bNtqX%2B5CsC%2BNGLAiAbv93w%2B8jnXIDceFlAyNA4xObHwDvCfXnr1j1kaTSDzyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMadrFCHsMOj6Bg4oMKtwDwWDrvcuc6JfRjwO8nqssuUJ3U%2F6becSWxX%2BqR4DJzZAEAnm129jqjwt2u6eXz1DwsPlWmxziSIoonDaqp7H%2B5EOfJ9dwKgm9rFBbhqXLDo4%2FKN5Hx65iIGItUhVR4jUwTVBQfBj6q8KWz5y3OGFXpveRvEgHLCIdx60roYst%2B8QOEOVygJDfxqvOTSBi20jQg8Ml6Yu6uyuso%2FcfgCHO8ucFVkdB9KkbA%2Bm4B%2BWDpwiTDylKDCiALM3b%2F1KVk9Jxs0lKF9iZmtchb0MJ0LQkvO8HaRKZoDWXbd%2F5Wu%2FqxQI%2BsW%2FqPkk83yX7lXByobIXoxQ2LQEISkal%2FVXrfLZw8D9CAzKVA8K9tdHBg3%2B515WzkolQynPj4N1zh%2FjjAd4RvAbbXGNyWFNF30Nq2K68SG5gNa6eUvYl2ijQoANxORuVJg4AFn2rQBIDorQqSo2uie9fjM4DxFusZ%2FnLvhW4Da2%2BPrxZXaidVTmmgFOe%2BZNnRuVzO%2FMsqDUkjEtn28oUHfeQ%2FLBkPvKyZGfQI%2FQ3xmXL4%2FMhrVym%2F%2BzjCyZICunsWL1rSLNNCuVD2gaYVcYPSsrf3R2G15ig4sRY1EDFWiOiuXUoExXEWGa9bviKX1%2B%2BOhfbsDxJQvzPZYkw9P7IvwY6pgEx7udsdbq%2BAuGfXG8AuKtQtXxbbhWHqCL96H84icnvefzIOFPcm63sN4%2FSCZX9xzOi62wXWK41Eigmgymu3NW5HF0Vu5doauiF0S9v5ebktzJ3Z3ncKINwYAr4GAVeJv014ojwb0P2M2menifOFnKg%2F5XVfY7JP%2Fyp4Il%2BKDyrzXPtct6Xr2b68tSQIylRkRa9t6%2BfHlldSVTJJ922SyZ0H6LEd%2Bmw&X-Amz-Signature=9e38ab9529511ca29522d7fa9c9efc6153d575ad460f2c492166008c027d1793&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2VLZSB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDHUhdOfG7ZTevC1H1B3Ut25nC5h1bNtqX%2B5CsC%2BNGLAiAbv93w%2B8jnXIDceFlAyNA4xObHwDvCfXnr1j1kaTSDzyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMadrFCHsMOj6Bg4oMKtwDwWDrvcuc6JfRjwO8nqssuUJ3U%2F6becSWxX%2BqR4DJzZAEAnm129jqjwt2u6eXz1DwsPlWmxziSIoonDaqp7H%2B5EOfJ9dwKgm9rFBbhqXLDo4%2FKN5Hx65iIGItUhVR4jUwTVBQfBj6q8KWz5y3OGFXpveRvEgHLCIdx60roYst%2B8QOEOVygJDfxqvOTSBi20jQg8Ml6Yu6uyuso%2FcfgCHO8ucFVkdB9KkbA%2Bm4B%2BWDpwiTDylKDCiALM3b%2F1KVk9Jxs0lKF9iZmtchb0MJ0LQkvO8HaRKZoDWXbd%2F5Wu%2FqxQI%2BsW%2FqPkk83yX7lXByobIXoxQ2LQEISkal%2FVXrfLZw8D9CAzKVA8K9tdHBg3%2B515WzkolQynPj4N1zh%2FjjAd4RvAbbXGNyWFNF30Nq2K68SG5gNa6eUvYl2ijQoANxORuVJg4AFn2rQBIDorQqSo2uie9fjM4DxFusZ%2FnLvhW4Da2%2BPrxZXaidVTmmgFOe%2BZNnRuVzO%2FMsqDUkjEtn28oUHfeQ%2FLBkPvKyZGfQI%2FQ3xmXL4%2FMhrVym%2F%2BzjCyZICunsWL1rSLNNCuVD2gaYVcYPSsrf3R2G15ig4sRY1EDFWiOiuXUoExXEWGa9bviKX1%2B%2BOhfbsDxJQvzPZYkw9P7IvwY6pgEx7udsdbq%2BAuGfXG8AuKtQtXxbbhWHqCL96H84icnvefzIOFPcm63sN4%2FSCZX9xzOi62wXWK41Eigmgymu3NW5HF0Vu5doauiF0S9v5ebktzJ3Z3ncKINwYAr4GAVeJv014ojwb0P2M2menifOFnKg%2F5XVfY7JP%2Fyp4Il%2BKDyrzXPtct6Xr2b68tSQIylRkRa9t6%2BfHlldSVTJJ922SyZ0H6LEd%2Bmw&X-Amz-Signature=444e9c457446fe323680bb997cd2b395500a6da9c5b81d393f90999ac703014a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2VLZSB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDHUhdOfG7ZTevC1H1B3Ut25nC5h1bNtqX%2B5CsC%2BNGLAiAbv93w%2B8jnXIDceFlAyNA4xObHwDvCfXnr1j1kaTSDzyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMadrFCHsMOj6Bg4oMKtwDwWDrvcuc6JfRjwO8nqssuUJ3U%2F6becSWxX%2BqR4DJzZAEAnm129jqjwt2u6eXz1DwsPlWmxziSIoonDaqp7H%2B5EOfJ9dwKgm9rFBbhqXLDo4%2FKN5Hx65iIGItUhVR4jUwTVBQfBj6q8KWz5y3OGFXpveRvEgHLCIdx60roYst%2B8QOEOVygJDfxqvOTSBi20jQg8Ml6Yu6uyuso%2FcfgCHO8ucFVkdB9KkbA%2Bm4B%2BWDpwiTDylKDCiALM3b%2F1KVk9Jxs0lKF9iZmtchb0MJ0LQkvO8HaRKZoDWXbd%2F5Wu%2FqxQI%2BsW%2FqPkk83yX7lXByobIXoxQ2LQEISkal%2FVXrfLZw8D9CAzKVA8K9tdHBg3%2B515WzkolQynPj4N1zh%2FjjAd4RvAbbXGNyWFNF30Nq2K68SG5gNa6eUvYl2ijQoANxORuVJg4AFn2rQBIDorQqSo2uie9fjM4DxFusZ%2FnLvhW4Da2%2BPrxZXaidVTmmgFOe%2BZNnRuVzO%2FMsqDUkjEtn28oUHfeQ%2FLBkPvKyZGfQI%2FQ3xmXL4%2FMhrVym%2F%2BzjCyZICunsWL1rSLNNCuVD2gaYVcYPSsrf3R2G15ig4sRY1EDFWiOiuXUoExXEWGa9bviKX1%2B%2BOhfbsDxJQvzPZYkw9P7IvwY6pgEx7udsdbq%2BAuGfXG8AuKtQtXxbbhWHqCL96H84icnvefzIOFPcm63sN4%2FSCZX9xzOi62wXWK41Eigmgymu3NW5HF0Vu5doauiF0S9v5ebktzJ3Z3ncKINwYAr4GAVeJv014ojwb0P2M2menifOFnKg%2F5XVfY7JP%2Fyp4Il%2BKDyrzXPtct6Xr2b68tSQIylRkRa9t6%2BfHlldSVTJJ922SyZ0H6LEd%2Bmw&X-Amz-Signature=c3560e354c69fd47f898ff2c51d4c70617894febb8b49ccb0434742ab2117b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2VLZSB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDHUhdOfG7ZTevC1H1B3Ut25nC5h1bNtqX%2B5CsC%2BNGLAiAbv93w%2B8jnXIDceFlAyNA4xObHwDvCfXnr1j1kaTSDzyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMadrFCHsMOj6Bg4oMKtwDwWDrvcuc6JfRjwO8nqssuUJ3U%2F6becSWxX%2BqR4DJzZAEAnm129jqjwt2u6eXz1DwsPlWmxziSIoonDaqp7H%2B5EOfJ9dwKgm9rFBbhqXLDo4%2FKN5Hx65iIGItUhVR4jUwTVBQfBj6q8KWz5y3OGFXpveRvEgHLCIdx60roYst%2B8QOEOVygJDfxqvOTSBi20jQg8Ml6Yu6uyuso%2FcfgCHO8ucFVkdB9KkbA%2Bm4B%2BWDpwiTDylKDCiALM3b%2F1KVk9Jxs0lKF9iZmtchb0MJ0LQkvO8HaRKZoDWXbd%2F5Wu%2FqxQI%2BsW%2FqPkk83yX7lXByobIXoxQ2LQEISkal%2FVXrfLZw8D9CAzKVA8K9tdHBg3%2B515WzkolQynPj4N1zh%2FjjAd4RvAbbXGNyWFNF30Nq2K68SG5gNa6eUvYl2ijQoANxORuVJg4AFn2rQBIDorQqSo2uie9fjM4DxFusZ%2FnLvhW4Da2%2BPrxZXaidVTmmgFOe%2BZNnRuVzO%2FMsqDUkjEtn28oUHfeQ%2FLBkPvKyZGfQI%2FQ3xmXL4%2FMhrVym%2F%2BzjCyZICunsWL1rSLNNCuVD2gaYVcYPSsrf3R2G15ig4sRY1EDFWiOiuXUoExXEWGa9bviKX1%2B%2BOhfbsDxJQvzPZYkw9P7IvwY6pgEx7udsdbq%2BAuGfXG8AuKtQtXxbbhWHqCL96H84icnvefzIOFPcm63sN4%2FSCZX9xzOi62wXWK41Eigmgymu3NW5HF0Vu5doauiF0S9v5ebktzJ3Z3ncKINwYAr4GAVeJv014ojwb0P2M2menifOFnKg%2F5XVfY7JP%2Fyp4Il%2BKDyrzXPtct6Xr2b68tSQIylRkRa9t6%2BfHlldSVTJJ922SyZ0H6LEd%2Bmw&X-Amz-Signature=4df640aaa758b13be0fa9d28bd368a2e71d8cae536b3ebe9bd2e30e1df650610&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2VLZSB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDHUhdOfG7ZTevC1H1B3Ut25nC5h1bNtqX%2B5CsC%2BNGLAiAbv93w%2B8jnXIDceFlAyNA4xObHwDvCfXnr1j1kaTSDzyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMadrFCHsMOj6Bg4oMKtwDwWDrvcuc6JfRjwO8nqssuUJ3U%2F6becSWxX%2BqR4DJzZAEAnm129jqjwt2u6eXz1DwsPlWmxziSIoonDaqp7H%2B5EOfJ9dwKgm9rFBbhqXLDo4%2FKN5Hx65iIGItUhVR4jUwTVBQfBj6q8KWz5y3OGFXpveRvEgHLCIdx60roYst%2B8QOEOVygJDfxqvOTSBi20jQg8Ml6Yu6uyuso%2FcfgCHO8ucFVkdB9KkbA%2Bm4B%2BWDpwiTDylKDCiALM3b%2F1KVk9Jxs0lKF9iZmtchb0MJ0LQkvO8HaRKZoDWXbd%2F5Wu%2FqxQI%2BsW%2FqPkk83yX7lXByobIXoxQ2LQEISkal%2FVXrfLZw8D9CAzKVA8K9tdHBg3%2B515WzkolQynPj4N1zh%2FjjAd4RvAbbXGNyWFNF30Nq2K68SG5gNa6eUvYl2ijQoANxORuVJg4AFn2rQBIDorQqSo2uie9fjM4DxFusZ%2FnLvhW4Da2%2BPrxZXaidVTmmgFOe%2BZNnRuVzO%2FMsqDUkjEtn28oUHfeQ%2FLBkPvKyZGfQI%2FQ3xmXL4%2FMhrVym%2F%2BzjCyZICunsWL1rSLNNCuVD2gaYVcYPSsrf3R2G15ig4sRY1EDFWiOiuXUoExXEWGa9bviKX1%2B%2BOhfbsDxJQvzPZYkw9P7IvwY6pgEx7udsdbq%2BAuGfXG8AuKtQtXxbbhWHqCL96H84icnvefzIOFPcm63sN4%2FSCZX9xzOi62wXWK41Eigmgymu3NW5HF0Vu5doauiF0S9v5ebktzJ3Z3ncKINwYAr4GAVeJv014ojwb0P2M2menifOFnKg%2F5XVfY7JP%2Fyp4Il%2BKDyrzXPtct6Xr2b68tSQIylRkRa9t6%2BfHlldSVTJJ922SyZ0H6LEd%2Bmw&X-Amz-Signature=0c85d85913400b1a3e00c9309c3436d0e839d8a07222a7dec7d5d5788eb3de22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2VLZSB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDHUhdOfG7ZTevC1H1B3Ut25nC5h1bNtqX%2B5CsC%2BNGLAiAbv93w%2B8jnXIDceFlAyNA4xObHwDvCfXnr1j1kaTSDzyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMadrFCHsMOj6Bg4oMKtwDwWDrvcuc6JfRjwO8nqssuUJ3U%2F6becSWxX%2BqR4DJzZAEAnm129jqjwt2u6eXz1DwsPlWmxziSIoonDaqp7H%2B5EOfJ9dwKgm9rFBbhqXLDo4%2FKN5Hx65iIGItUhVR4jUwTVBQfBj6q8KWz5y3OGFXpveRvEgHLCIdx60roYst%2B8QOEOVygJDfxqvOTSBi20jQg8Ml6Yu6uyuso%2FcfgCHO8ucFVkdB9KkbA%2Bm4B%2BWDpwiTDylKDCiALM3b%2F1KVk9Jxs0lKF9iZmtchb0MJ0LQkvO8HaRKZoDWXbd%2F5Wu%2FqxQI%2BsW%2FqPkk83yX7lXByobIXoxQ2LQEISkal%2FVXrfLZw8D9CAzKVA8K9tdHBg3%2B515WzkolQynPj4N1zh%2FjjAd4RvAbbXGNyWFNF30Nq2K68SG5gNa6eUvYl2ijQoANxORuVJg4AFn2rQBIDorQqSo2uie9fjM4DxFusZ%2FnLvhW4Da2%2BPrxZXaidVTmmgFOe%2BZNnRuVzO%2FMsqDUkjEtn28oUHfeQ%2FLBkPvKyZGfQI%2FQ3xmXL4%2FMhrVym%2F%2BzjCyZICunsWL1rSLNNCuVD2gaYVcYPSsrf3R2G15ig4sRY1EDFWiOiuXUoExXEWGa9bviKX1%2B%2BOhfbsDxJQvzPZYkw9P7IvwY6pgEx7udsdbq%2BAuGfXG8AuKtQtXxbbhWHqCL96H84icnvefzIOFPcm63sN4%2FSCZX9xzOi62wXWK41Eigmgymu3NW5HF0Vu5doauiF0S9v5ebktzJ3Z3ncKINwYAr4GAVeJv014ojwb0P2M2menifOFnKg%2F5XVfY7JP%2Fyp4Il%2BKDyrzXPtct6Xr2b68tSQIylRkRa9t6%2BfHlldSVTJJ922SyZ0H6LEd%2Bmw&X-Amz-Signature=ed6be671ce09cf71e3b011e051cb2fb6491188d1d610c698117f25b9790b701f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2VLZSB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDHUhdOfG7ZTevC1H1B3Ut25nC5h1bNtqX%2B5CsC%2BNGLAiAbv93w%2B8jnXIDceFlAyNA4xObHwDvCfXnr1j1kaTSDzyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMadrFCHsMOj6Bg4oMKtwDwWDrvcuc6JfRjwO8nqssuUJ3U%2F6becSWxX%2BqR4DJzZAEAnm129jqjwt2u6eXz1DwsPlWmxziSIoonDaqp7H%2B5EOfJ9dwKgm9rFBbhqXLDo4%2FKN5Hx65iIGItUhVR4jUwTVBQfBj6q8KWz5y3OGFXpveRvEgHLCIdx60roYst%2B8QOEOVygJDfxqvOTSBi20jQg8Ml6Yu6uyuso%2FcfgCHO8ucFVkdB9KkbA%2Bm4B%2BWDpwiTDylKDCiALM3b%2F1KVk9Jxs0lKF9iZmtchb0MJ0LQkvO8HaRKZoDWXbd%2F5Wu%2FqxQI%2BsW%2FqPkk83yX7lXByobIXoxQ2LQEISkal%2FVXrfLZw8D9CAzKVA8K9tdHBg3%2B515WzkolQynPj4N1zh%2FjjAd4RvAbbXGNyWFNF30Nq2K68SG5gNa6eUvYl2ijQoANxORuVJg4AFn2rQBIDorQqSo2uie9fjM4DxFusZ%2FnLvhW4Da2%2BPrxZXaidVTmmgFOe%2BZNnRuVzO%2FMsqDUkjEtn28oUHfeQ%2FLBkPvKyZGfQI%2FQ3xmXL4%2FMhrVym%2F%2BzjCyZICunsWL1rSLNNCuVD2gaYVcYPSsrf3R2G15ig4sRY1EDFWiOiuXUoExXEWGa9bviKX1%2B%2BOhfbsDxJQvzPZYkw9P7IvwY6pgEx7udsdbq%2BAuGfXG8AuKtQtXxbbhWHqCL96H84icnvefzIOFPcm63sN4%2FSCZX9xzOi62wXWK41Eigmgymu3NW5HF0Vu5doauiF0S9v5ebktzJ3Z3ncKINwYAr4GAVeJv014ojwb0P2M2menifOFnKg%2F5XVfY7JP%2Fyp4Il%2BKDyrzXPtct6Xr2b68tSQIylRkRa9t6%2BfHlldSVTJJ922SyZ0H6LEd%2Bmw&X-Amz-Signature=0b4ab03ec2df0e2953b298ff4fd34b2cd41c6fe7271de783f736751d0bd40b23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2VLZSB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDHUhdOfG7ZTevC1H1B3Ut25nC5h1bNtqX%2B5CsC%2BNGLAiAbv93w%2B8jnXIDceFlAyNA4xObHwDvCfXnr1j1kaTSDzyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMadrFCHsMOj6Bg4oMKtwDwWDrvcuc6JfRjwO8nqssuUJ3U%2F6becSWxX%2BqR4DJzZAEAnm129jqjwt2u6eXz1DwsPlWmxziSIoonDaqp7H%2B5EOfJ9dwKgm9rFBbhqXLDo4%2FKN5Hx65iIGItUhVR4jUwTVBQfBj6q8KWz5y3OGFXpveRvEgHLCIdx60roYst%2B8QOEOVygJDfxqvOTSBi20jQg8Ml6Yu6uyuso%2FcfgCHO8ucFVkdB9KkbA%2Bm4B%2BWDpwiTDylKDCiALM3b%2F1KVk9Jxs0lKF9iZmtchb0MJ0LQkvO8HaRKZoDWXbd%2F5Wu%2FqxQI%2BsW%2FqPkk83yX7lXByobIXoxQ2LQEISkal%2FVXrfLZw8D9CAzKVA8K9tdHBg3%2B515WzkolQynPj4N1zh%2FjjAd4RvAbbXGNyWFNF30Nq2K68SG5gNa6eUvYl2ijQoANxORuVJg4AFn2rQBIDorQqSo2uie9fjM4DxFusZ%2FnLvhW4Da2%2BPrxZXaidVTmmgFOe%2BZNnRuVzO%2FMsqDUkjEtn28oUHfeQ%2FLBkPvKyZGfQI%2FQ3xmXL4%2FMhrVym%2F%2BzjCyZICunsWL1rSLNNCuVD2gaYVcYPSsrf3R2G15ig4sRY1EDFWiOiuXUoExXEWGa9bviKX1%2B%2BOhfbsDxJQvzPZYkw9P7IvwY6pgEx7udsdbq%2BAuGfXG8AuKtQtXxbbhWHqCL96H84icnvefzIOFPcm63sN4%2FSCZX9xzOi62wXWK41Eigmgymu3NW5HF0Vu5doauiF0S9v5ebktzJ3Z3ncKINwYAr4GAVeJv014ojwb0P2M2menifOFnKg%2F5XVfY7JP%2Fyp4Il%2BKDyrzXPtct6Xr2b68tSQIylRkRa9t6%2BfHlldSVTJJ922SyZ0H6LEd%2Bmw&X-Amz-Signature=3953de8312920b01469c10f668067482f02caa4a9c2a7962ea198f9bbeec03a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

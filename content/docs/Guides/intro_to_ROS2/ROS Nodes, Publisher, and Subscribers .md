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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZS42YIR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGPcYmqNCNqJ7LQ6JS%2F%2B%2BeeLujTA3iJbXz7FKomv7pdAiBHo85LuuI8baiZETtxr9%2FPad4cfwwDyyNZns1dsbPuvCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLQV57HWRdMiIQK6KtwDaySVe62YfMpm%2FuG0XimCwNvfXhlsDF8U9d1qOIfcE5NIGwCeEVwDKyngh7Hl2Fe%2FqKqW614HGalvG1dZV2DwBUxBJiExrYATjk8y%2FrYIc1DnhAA4YprqDLKTID9LPJ9UJ574QK0MaRfA69dCozy9lFFfj4R8xx4MzIzpmUJs%2ByJeMxq99A8BiIN5dgfYOFmbrjkWB730uorLzogbw421JBvJk7AXtrOYORvLEKh4YSkT9WtsUBE7fY0FhDwgKnRTWC%2BmHoJDVlMlSvjgOIBQvnH4XCho%2FzzsTNJ7hA%2BK%2FhCN281fTPOYVcWXSBEudueAMLJwLLV7WT%2BRhwUU0uC5K74SRObDlrZouIQwwW9136hF3oSX7pwcNFr2QZy%2B6482QrRcWLn66nKBUFAOx1XOANDLlSo8dDzGJyAKzOUAE%2Fd%2FnxKUEs61IwKJMVfJR139tQbem7b%2FY%2BiVWh99%2BBr2xwezkcmh58bj%2Fa9Yc%2Bq%2Bek89cwQXaNY8xHb%2F%2BjCjX1ClqpA6L6nSuOXxY4PH%2FMdoM%2F4I96NVH4fzMNsSOQa%2FqiArTeuAQEyoFaahkFHtECxKQYo7tV6DLj7%2BdzyACpUP%2F4uyHI5QLbVTe%2BY1KPzVKTnWGzIrDXTPia8wiVgw88zovAY6pgGsW%2F08Xa0BBMNnSs13UfiBAGtM8MDXLQuK7ZfRg0pP7TVjPPHOiKa0sFjD2A45x1ckApb98N4FQcwswFlduwl1aXC03tCeK5zVONRbtGC%2BPRIH2%2FX0C3gV9%2Fcnvcq85Q4v5ihjHMMTyEM%2BjzcHfGvO4Km1SnqID7P98mnQE7IY5G2zKIf6N6zp7iwlCcixgKk5TqAv9o4DBPRN4i7dxfLb7nFZNTVd&X-Amz-Signature=076788ca91f3c6f9279cea724ee1a1da568b429112cfe0814e145000025ff408&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZS42YIR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGPcYmqNCNqJ7LQ6JS%2F%2B%2BeeLujTA3iJbXz7FKomv7pdAiBHo85LuuI8baiZETtxr9%2FPad4cfwwDyyNZns1dsbPuvCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLQV57HWRdMiIQK6KtwDaySVe62YfMpm%2FuG0XimCwNvfXhlsDF8U9d1qOIfcE5NIGwCeEVwDKyngh7Hl2Fe%2FqKqW614HGalvG1dZV2DwBUxBJiExrYATjk8y%2FrYIc1DnhAA4YprqDLKTID9LPJ9UJ574QK0MaRfA69dCozy9lFFfj4R8xx4MzIzpmUJs%2ByJeMxq99A8BiIN5dgfYOFmbrjkWB730uorLzogbw421JBvJk7AXtrOYORvLEKh4YSkT9WtsUBE7fY0FhDwgKnRTWC%2BmHoJDVlMlSvjgOIBQvnH4XCho%2FzzsTNJ7hA%2BK%2FhCN281fTPOYVcWXSBEudueAMLJwLLV7WT%2BRhwUU0uC5K74SRObDlrZouIQwwW9136hF3oSX7pwcNFr2QZy%2B6482QrRcWLn66nKBUFAOx1XOANDLlSo8dDzGJyAKzOUAE%2Fd%2FnxKUEs61IwKJMVfJR139tQbem7b%2FY%2BiVWh99%2BBr2xwezkcmh58bj%2Fa9Yc%2Bq%2Bek89cwQXaNY8xHb%2F%2BjCjX1ClqpA6L6nSuOXxY4PH%2FMdoM%2F4I96NVH4fzMNsSOQa%2FqiArTeuAQEyoFaahkFHtECxKQYo7tV6DLj7%2BdzyACpUP%2F4uyHI5QLbVTe%2BY1KPzVKTnWGzIrDXTPia8wiVgw88zovAY6pgGsW%2F08Xa0BBMNnSs13UfiBAGtM8MDXLQuK7ZfRg0pP7TVjPPHOiKa0sFjD2A45x1ckApb98N4FQcwswFlduwl1aXC03tCeK5zVONRbtGC%2BPRIH2%2FX0C3gV9%2Fcnvcq85Q4v5ihjHMMTyEM%2BjzcHfGvO4Km1SnqID7P98mnQE7IY5G2zKIf6N6zp7iwlCcixgKk5TqAv9o4DBPRN4i7dxfLb7nFZNTVd&X-Amz-Signature=4d3c5c1899b42675a3ad1c9d8a2a7eb59a04c6033f6648f2a8e09d4b0806fd29&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZS42YIR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGPcYmqNCNqJ7LQ6JS%2F%2B%2BeeLujTA3iJbXz7FKomv7pdAiBHo85LuuI8baiZETtxr9%2FPad4cfwwDyyNZns1dsbPuvCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLQV57HWRdMiIQK6KtwDaySVe62YfMpm%2FuG0XimCwNvfXhlsDF8U9d1qOIfcE5NIGwCeEVwDKyngh7Hl2Fe%2FqKqW614HGalvG1dZV2DwBUxBJiExrYATjk8y%2FrYIc1DnhAA4YprqDLKTID9LPJ9UJ574QK0MaRfA69dCozy9lFFfj4R8xx4MzIzpmUJs%2ByJeMxq99A8BiIN5dgfYOFmbrjkWB730uorLzogbw421JBvJk7AXtrOYORvLEKh4YSkT9WtsUBE7fY0FhDwgKnRTWC%2BmHoJDVlMlSvjgOIBQvnH4XCho%2FzzsTNJ7hA%2BK%2FhCN281fTPOYVcWXSBEudueAMLJwLLV7WT%2BRhwUU0uC5K74SRObDlrZouIQwwW9136hF3oSX7pwcNFr2QZy%2B6482QrRcWLn66nKBUFAOx1XOANDLlSo8dDzGJyAKzOUAE%2Fd%2FnxKUEs61IwKJMVfJR139tQbem7b%2FY%2BiVWh99%2BBr2xwezkcmh58bj%2Fa9Yc%2Bq%2Bek89cwQXaNY8xHb%2F%2BjCjX1ClqpA6L6nSuOXxY4PH%2FMdoM%2F4I96NVH4fzMNsSOQa%2FqiArTeuAQEyoFaahkFHtECxKQYo7tV6DLj7%2BdzyACpUP%2F4uyHI5QLbVTe%2BY1KPzVKTnWGzIrDXTPia8wiVgw88zovAY6pgGsW%2F08Xa0BBMNnSs13UfiBAGtM8MDXLQuK7ZfRg0pP7TVjPPHOiKa0sFjD2A45x1ckApb98N4FQcwswFlduwl1aXC03tCeK5zVONRbtGC%2BPRIH2%2FX0C3gV9%2Fcnvcq85Q4v5ihjHMMTyEM%2BjzcHfGvO4Km1SnqID7P98mnQE7IY5G2zKIf6N6zp7iwlCcixgKk5TqAv9o4DBPRN4i7dxfLb7nFZNTVd&X-Amz-Signature=0d61259f0031bf349b536644716e0ea373ae3d13c5bfc4fa1a56e8649d517794&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZS42YIR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGPcYmqNCNqJ7LQ6JS%2F%2B%2BeeLujTA3iJbXz7FKomv7pdAiBHo85LuuI8baiZETtxr9%2FPad4cfwwDyyNZns1dsbPuvCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLQV57HWRdMiIQK6KtwDaySVe62YfMpm%2FuG0XimCwNvfXhlsDF8U9d1qOIfcE5NIGwCeEVwDKyngh7Hl2Fe%2FqKqW614HGalvG1dZV2DwBUxBJiExrYATjk8y%2FrYIc1DnhAA4YprqDLKTID9LPJ9UJ574QK0MaRfA69dCozy9lFFfj4R8xx4MzIzpmUJs%2ByJeMxq99A8BiIN5dgfYOFmbrjkWB730uorLzogbw421JBvJk7AXtrOYORvLEKh4YSkT9WtsUBE7fY0FhDwgKnRTWC%2BmHoJDVlMlSvjgOIBQvnH4XCho%2FzzsTNJ7hA%2BK%2FhCN281fTPOYVcWXSBEudueAMLJwLLV7WT%2BRhwUU0uC5K74SRObDlrZouIQwwW9136hF3oSX7pwcNFr2QZy%2B6482QrRcWLn66nKBUFAOx1XOANDLlSo8dDzGJyAKzOUAE%2Fd%2FnxKUEs61IwKJMVfJR139tQbem7b%2FY%2BiVWh99%2BBr2xwezkcmh58bj%2Fa9Yc%2Bq%2Bek89cwQXaNY8xHb%2F%2BjCjX1ClqpA6L6nSuOXxY4PH%2FMdoM%2F4I96NVH4fzMNsSOQa%2FqiArTeuAQEyoFaahkFHtECxKQYo7tV6DLj7%2BdzyACpUP%2F4uyHI5QLbVTe%2BY1KPzVKTnWGzIrDXTPia8wiVgw88zovAY6pgGsW%2F08Xa0BBMNnSs13UfiBAGtM8MDXLQuK7ZfRg0pP7TVjPPHOiKa0sFjD2A45x1ckApb98N4FQcwswFlduwl1aXC03tCeK5zVONRbtGC%2BPRIH2%2FX0C3gV9%2Fcnvcq85Q4v5ihjHMMTyEM%2BjzcHfGvO4Km1SnqID7P98mnQE7IY5G2zKIf6N6zp7iwlCcixgKk5TqAv9o4DBPRN4i7dxfLb7nFZNTVd&X-Amz-Signature=201f5bf29dd05815682bca74f2f500cd572d9a88faaf1c747e00398609268e05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZS42YIR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGPcYmqNCNqJ7LQ6JS%2F%2B%2BeeLujTA3iJbXz7FKomv7pdAiBHo85LuuI8baiZETtxr9%2FPad4cfwwDyyNZns1dsbPuvCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLQV57HWRdMiIQK6KtwDaySVe62YfMpm%2FuG0XimCwNvfXhlsDF8U9d1qOIfcE5NIGwCeEVwDKyngh7Hl2Fe%2FqKqW614HGalvG1dZV2DwBUxBJiExrYATjk8y%2FrYIc1DnhAA4YprqDLKTID9LPJ9UJ574QK0MaRfA69dCozy9lFFfj4R8xx4MzIzpmUJs%2ByJeMxq99A8BiIN5dgfYOFmbrjkWB730uorLzogbw421JBvJk7AXtrOYORvLEKh4YSkT9WtsUBE7fY0FhDwgKnRTWC%2BmHoJDVlMlSvjgOIBQvnH4XCho%2FzzsTNJ7hA%2BK%2FhCN281fTPOYVcWXSBEudueAMLJwLLV7WT%2BRhwUU0uC5K74SRObDlrZouIQwwW9136hF3oSX7pwcNFr2QZy%2B6482QrRcWLn66nKBUFAOx1XOANDLlSo8dDzGJyAKzOUAE%2Fd%2FnxKUEs61IwKJMVfJR139tQbem7b%2FY%2BiVWh99%2BBr2xwezkcmh58bj%2Fa9Yc%2Bq%2Bek89cwQXaNY8xHb%2F%2BjCjX1ClqpA6L6nSuOXxY4PH%2FMdoM%2F4I96NVH4fzMNsSOQa%2FqiArTeuAQEyoFaahkFHtECxKQYo7tV6DLj7%2BdzyACpUP%2F4uyHI5QLbVTe%2BY1KPzVKTnWGzIrDXTPia8wiVgw88zovAY6pgGsW%2F08Xa0BBMNnSs13UfiBAGtM8MDXLQuK7ZfRg0pP7TVjPPHOiKa0sFjD2A45x1ckApb98N4FQcwswFlduwl1aXC03tCeK5zVONRbtGC%2BPRIH2%2FX0C3gV9%2Fcnvcq85Q4v5ihjHMMTyEM%2BjzcHfGvO4Km1SnqID7P98mnQE7IY5G2zKIf6N6zp7iwlCcixgKk5TqAv9o4DBPRN4i7dxfLb7nFZNTVd&X-Amz-Signature=3e694cf555a1d39d057bd9ca85e46ba1db134a2457f264f1bc99c382c4e087df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZS42YIR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGPcYmqNCNqJ7LQ6JS%2F%2B%2BeeLujTA3iJbXz7FKomv7pdAiBHo85LuuI8baiZETtxr9%2FPad4cfwwDyyNZns1dsbPuvCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLQV57HWRdMiIQK6KtwDaySVe62YfMpm%2FuG0XimCwNvfXhlsDF8U9d1qOIfcE5NIGwCeEVwDKyngh7Hl2Fe%2FqKqW614HGalvG1dZV2DwBUxBJiExrYATjk8y%2FrYIc1DnhAA4YprqDLKTID9LPJ9UJ574QK0MaRfA69dCozy9lFFfj4R8xx4MzIzpmUJs%2ByJeMxq99A8BiIN5dgfYOFmbrjkWB730uorLzogbw421JBvJk7AXtrOYORvLEKh4YSkT9WtsUBE7fY0FhDwgKnRTWC%2BmHoJDVlMlSvjgOIBQvnH4XCho%2FzzsTNJ7hA%2BK%2FhCN281fTPOYVcWXSBEudueAMLJwLLV7WT%2BRhwUU0uC5K74SRObDlrZouIQwwW9136hF3oSX7pwcNFr2QZy%2B6482QrRcWLn66nKBUFAOx1XOANDLlSo8dDzGJyAKzOUAE%2Fd%2FnxKUEs61IwKJMVfJR139tQbem7b%2FY%2BiVWh99%2BBr2xwezkcmh58bj%2Fa9Yc%2Bq%2Bek89cwQXaNY8xHb%2F%2BjCjX1ClqpA6L6nSuOXxY4PH%2FMdoM%2F4I96NVH4fzMNsSOQa%2FqiArTeuAQEyoFaahkFHtECxKQYo7tV6DLj7%2BdzyACpUP%2F4uyHI5QLbVTe%2BY1KPzVKTnWGzIrDXTPia8wiVgw88zovAY6pgGsW%2F08Xa0BBMNnSs13UfiBAGtM8MDXLQuK7ZfRg0pP7TVjPPHOiKa0sFjD2A45x1ckApb98N4FQcwswFlduwl1aXC03tCeK5zVONRbtGC%2BPRIH2%2FX0C3gV9%2Fcnvcq85Q4v5ihjHMMTyEM%2BjzcHfGvO4Km1SnqID7P98mnQE7IY5G2zKIf6N6zp7iwlCcixgKk5TqAv9o4DBPRN4i7dxfLb7nFZNTVd&X-Amz-Signature=7ffb54a2cbcff4125c15574fac67efe5561b733306eef788d58285e12941a322&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZS42YIR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGPcYmqNCNqJ7LQ6JS%2F%2B%2BeeLujTA3iJbXz7FKomv7pdAiBHo85LuuI8baiZETtxr9%2FPad4cfwwDyyNZns1dsbPuvCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLQV57HWRdMiIQK6KtwDaySVe62YfMpm%2FuG0XimCwNvfXhlsDF8U9d1qOIfcE5NIGwCeEVwDKyngh7Hl2Fe%2FqKqW614HGalvG1dZV2DwBUxBJiExrYATjk8y%2FrYIc1DnhAA4YprqDLKTID9LPJ9UJ574QK0MaRfA69dCozy9lFFfj4R8xx4MzIzpmUJs%2ByJeMxq99A8BiIN5dgfYOFmbrjkWB730uorLzogbw421JBvJk7AXtrOYORvLEKh4YSkT9WtsUBE7fY0FhDwgKnRTWC%2BmHoJDVlMlSvjgOIBQvnH4XCho%2FzzsTNJ7hA%2BK%2FhCN281fTPOYVcWXSBEudueAMLJwLLV7WT%2BRhwUU0uC5K74SRObDlrZouIQwwW9136hF3oSX7pwcNFr2QZy%2B6482QrRcWLn66nKBUFAOx1XOANDLlSo8dDzGJyAKzOUAE%2Fd%2FnxKUEs61IwKJMVfJR139tQbem7b%2FY%2BiVWh99%2BBr2xwezkcmh58bj%2Fa9Yc%2Bq%2Bek89cwQXaNY8xHb%2F%2BjCjX1ClqpA6L6nSuOXxY4PH%2FMdoM%2F4I96NVH4fzMNsSOQa%2FqiArTeuAQEyoFaahkFHtECxKQYo7tV6DLj7%2BdzyACpUP%2F4uyHI5QLbVTe%2BY1KPzVKTnWGzIrDXTPia8wiVgw88zovAY6pgGsW%2F08Xa0BBMNnSs13UfiBAGtM8MDXLQuK7ZfRg0pP7TVjPPHOiKa0sFjD2A45x1ckApb98N4FQcwswFlduwl1aXC03tCeK5zVONRbtGC%2BPRIH2%2FX0C3gV9%2Fcnvcq85Q4v5ihjHMMTyEM%2BjzcHfGvO4Km1SnqID7P98mnQE7IY5G2zKIf6N6zp7iwlCcixgKk5TqAv9o4DBPRN4i7dxfLb7nFZNTVd&X-Amz-Signature=3b2640a8de1a609c634956a851bdb8d9f909b2e2d254d86b57374cf90b9faa5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZS42YIR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGPcYmqNCNqJ7LQ6JS%2F%2B%2BeeLujTA3iJbXz7FKomv7pdAiBHo85LuuI8baiZETtxr9%2FPad4cfwwDyyNZns1dsbPuvCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLQV57HWRdMiIQK6KtwDaySVe62YfMpm%2FuG0XimCwNvfXhlsDF8U9d1qOIfcE5NIGwCeEVwDKyngh7Hl2Fe%2FqKqW614HGalvG1dZV2DwBUxBJiExrYATjk8y%2FrYIc1DnhAA4YprqDLKTID9LPJ9UJ574QK0MaRfA69dCozy9lFFfj4R8xx4MzIzpmUJs%2ByJeMxq99A8BiIN5dgfYOFmbrjkWB730uorLzogbw421JBvJk7AXtrOYORvLEKh4YSkT9WtsUBE7fY0FhDwgKnRTWC%2BmHoJDVlMlSvjgOIBQvnH4XCho%2FzzsTNJ7hA%2BK%2FhCN281fTPOYVcWXSBEudueAMLJwLLV7WT%2BRhwUU0uC5K74SRObDlrZouIQwwW9136hF3oSX7pwcNFr2QZy%2B6482QrRcWLn66nKBUFAOx1XOANDLlSo8dDzGJyAKzOUAE%2Fd%2FnxKUEs61IwKJMVfJR139tQbem7b%2FY%2BiVWh99%2BBr2xwezkcmh58bj%2Fa9Yc%2Bq%2Bek89cwQXaNY8xHb%2F%2BjCjX1ClqpA6L6nSuOXxY4PH%2FMdoM%2F4I96NVH4fzMNsSOQa%2FqiArTeuAQEyoFaahkFHtECxKQYo7tV6DLj7%2BdzyACpUP%2F4uyHI5QLbVTe%2BY1KPzVKTnWGzIrDXTPia8wiVgw88zovAY6pgGsW%2F08Xa0BBMNnSs13UfiBAGtM8MDXLQuK7ZfRg0pP7TVjPPHOiKa0sFjD2A45x1ckApb98N4FQcwswFlduwl1aXC03tCeK5zVONRbtGC%2BPRIH2%2FX0C3gV9%2Fcnvcq85Q4v5ihjHMMTyEM%2BjzcHfGvO4Km1SnqID7P98mnQE7IY5G2zKIf6N6zp7iwlCcixgKk5TqAv9o4DBPRN4i7dxfLb7nFZNTVd&X-Amz-Signature=4d349943cb0399fdbd7db4fed9efb1bb41755cad35ffdb40fb007bb9c4f70b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

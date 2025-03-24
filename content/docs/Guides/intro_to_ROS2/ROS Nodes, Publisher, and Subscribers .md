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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7K7L7YM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaYDtQ%2B2XTO6QqKFDBQ0ew4eucst%2B80sjxvneJCI05kAiEA%2FNRt%2B2iPwZlAQmpoiA8yGMpYFVzQSDJR5B5fHfl2yrQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOShtFYg0YxKBx5k8ircA82Wllf18pClNGlFQiyAv5bG%2FlU7z0hb1%2FDkCbE6kxBJof2jO5DgP4DBJR24llI3YhIYvSJluy9WRwm8VKhrudyDFuuHYTSK%2FgpAENV9A4PewpjMOdquOJGkF97cLyN36MVNn8ueRkIddFuECnx8styx9GWxEf8DYEKmz6RC1DCVMX9iFWdDsa9w2bymuUkBedPzEpvK%2B0uzKUG0iqDiB2SwKP9zmCwrkFyCCdfp0IT1YNFThoZ%2FyVGH1Pou4E0p6dmOSQoqmc2C9Vhrv9NtqguSKVI4oU0RdNCveQ2X7vYf8b5NKh2FpnP46IKIhyrou3H4rNqWTELjsMH4KxY8bF2%2B6zPzBdQpP6CbYOKaT4qhWi7YFK1C%2FF54kgfylV%2FcWrjzaZBVadll5xvP9axACAzrS5OjY2pOjKaWQLDP21UAxkXFfjFDm9WY5WGIuXekFONiwsu%2Bd2%2BDxuQ3LWFK68q4aQjovye8eXs0LcoFfg9WgD418niMvg1MpIwd%2BllckMgxjBR%2BGdL1oTuF%2BHgzTgYwVpdlH%2FwKg2boxZ%2BGhGhg7X8VIUzdZgDXPlhk%2BGzgaRDm2Zedb77W8HsFgTS8ziksH2cRGheKYMXKcL2snNIgOYEZEEkWTSQoa5oiMMexgr8GOqUBi68%2BdclyvuMA7jUkBI0%2F9Ko6HYPD%2B6ehKyNBucSkPKtYVgAJgJ2iH%2FdVekhrVYMhV8VO5%2BPilYuU39i3lF9DJRTvVdCsuloBfs1IhsYIRrRLQ9z3bNSI2xPHDitWR%2BcruP5S2fBBmfMWQXFon2ZWTejz1oYiLM%2BUXkSNaPcaCHM%2BuFWKX3N7C%2B5Nq6hF42DeCzvvaXCaFlFq052WHQ67DLo5%2FGZz&X-Amz-Signature=4bcf13afc88675d735f455001b79def5915f82a3c5b07540a93dc8664a581562&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7K7L7YM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaYDtQ%2B2XTO6QqKFDBQ0ew4eucst%2B80sjxvneJCI05kAiEA%2FNRt%2B2iPwZlAQmpoiA8yGMpYFVzQSDJR5B5fHfl2yrQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOShtFYg0YxKBx5k8ircA82Wllf18pClNGlFQiyAv5bG%2FlU7z0hb1%2FDkCbE6kxBJof2jO5DgP4DBJR24llI3YhIYvSJluy9WRwm8VKhrudyDFuuHYTSK%2FgpAENV9A4PewpjMOdquOJGkF97cLyN36MVNn8ueRkIddFuECnx8styx9GWxEf8DYEKmz6RC1DCVMX9iFWdDsa9w2bymuUkBedPzEpvK%2B0uzKUG0iqDiB2SwKP9zmCwrkFyCCdfp0IT1YNFThoZ%2FyVGH1Pou4E0p6dmOSQoqmc2C9Vhrv9NtqguSKVI4oU0RdNCveQ2X7vYf8b5NKh2FpnP46IKIhyrou3H4rNqWTELjsMH4KxY8bF2%2B6zPzBdQpP6CbYOKaT4qhWi7YFK1C%2FF54kgfylV%2FcWrjzaZBVadll5xvP9axACAzrS5OjY2pOjKaWQLDP21UAxkXFfjFDm9WY5WGIuXekFONiwsu%2Bd2%2BDxuQ3LWFK68q4aQjovye8eXs0LcoFfg9WgD418niMvg1MpIwd%2BllckMgxjBR%2BGdL1oTuF%2BHgzTgYwVpdlH%2FwKg2boxZ%2BGhGhg7X8VIUzdZgDXPlhk%2BGzgaRDm2Zedb77W8HsFgTS8ziksH2cRGheKYMXKcL2snNIgOYEZEEkWTSQoa5oiMMexgr8GOqUBi68%2BdclyvuMA7jUkBI0%2F9Ko6HYPD%2B6ehKyNBucSkPKtYVgAJgJ2iH%2FdVekhrVYMhV8VO5%2BPilYuU39i3lF9DJRTvVdCsuloBfs1IhsYIRrRLQ9z3bNSI2xPHDitWR%2BcruP5S2fBBmfMWQXFon2ZWTejz1oYiLM%2BUXkSNaPcaCHM%2BuFWKX3N7C%2B5Nq6hF42DeCzvvaXCaFlFq052WHQ67DLo5%2FGZz&X-Amz-Signature=24aa39f481803fe2c72ffdcc47da19e149b8be3bd6c3dda9f0c2ed1af38d82dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7K7L7YM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaYDtQ%2B2XTO6QqKFDBQ0ew4eucst%2B80sjxvneJCI05kAiEA%2FNRt%2B2iPwZlAQmpoiA8yGMpYFVzQSDJR5B5fHfl2yrQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOShtFYg0YxKBx5k8ircA82Wllf18pClNGlFQiyAv5bG%2FlU7z0hb1%2FDkCbE6kxBJof2jO5DgP4DBJR24llI3YhIYvSJluy9WRwm8VKhrudyDFuuHYTSK%2FgpAENV9A4PewpjMOdquOJGkF97cLyN36MVNn8ueRkIddFuECnx8styx9GWxEf8DYEKmz6RC1DCVMX9iFWdDsa9w2bymuUkBedPzEpvK%2B0uzKUG0iqDiB2SwKP9zmCwrkFyCCdfp0IT1YNFThoZ%2FyVGH1Pou4E0p6dmOSQoqmc2C9Vhrv9NtqguSKVI4oU0RdNCveQ2X7vYf8b5NKh2FpnP46IKIhyrou3H4rNqWTELjsMH4KxY8bF2%2B6zPzBdQpP6CbYOKaT4qhWi7YFK1C%2FF54kgfylV%2FcWrjzaZBVadll5xvP9axACAzrS5OjY2pOjKaWQLDP21UAxkXFfjFDm9WY5WGIuXekFONiwsu%2Bd2%2BDxuQ3LWFK68q4aQjovye8eXs0LcoFfg9WgD418niMvg1MpIwd%2BllckMgxjBR%2BGdL1oTuF%2BHgzTgYwVpdlH%2FwKg2boxZ%2BGhGhg7X8VIUzdZgDXPlhk%2BGzgaRDm2Zedb77W8HsFgTS8ziksH2cRGheKYMXKcL2snNIgOYEZEEkWTSQoa5oiMMexgr8GOqUBi68%2BdclyvuMA7jUkBI0%2F9Ko6HYPD%2B6ehKyNBucSkPKtYVgAJgJ2iH%2FdVekhrVYMhV8VO5%2BPilYuU39i3lF9DJRTvVdCsuloBfs1IhsYIRrRLQ9z3bNSI2xPHDitWR%2BcruP5S2fBBmfMWQXFon2ZWTejz1oYiLM%2BUXkSNaPcaCHM%2BuFWKX3N7C%2B5Nq6hF42DeCzvvaXCaFlFq052WHQ67DLo5%2FGZz&X-Amz-Signature=052044dc98eb07f39bcc3bb1b727bbc42786ff509af464544bbc6a1fed0760b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7K7L7YM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaYDtQ%2B2XTO6QqKFDBQ0ew4eucst%2B80sjxvneJCI05kAiEA%2FNRt%2B2iPwZlAQmpoiA8yGMpYFVzQSDJR5B5fHfl2yrQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOShtFYg0YxKBx5k8ircA82Wllf18pClNGlFQiyAv5bG%2FlU7z0hb1%2FDkCbE6kxBJof2jO5DgP4DBJR24llI3YhIYvSJluy9WRwm8VKhrudyDFuuHYTSK%2FgpAENV9A4PewpjMOdquOJGkF97cLyN36MVNn8ueRkIddFuECnx8styx9GWxEf8DYEKmz6RC1DCVMX9iFWdDsa9w2bymuUkBedPzEpvK%2B0uzKUG0iqDiB2SwKP9zmCwrkFyCCdfp0IT1YNFThoZ%2FyVGH1Pou4E0p6dmOSQoqmc2C9Vhrv9NtqguSKVI4oU0RdNCveQ2X7vYf8b5NKh2FpnP46IKIhyrou3H4rNqWTELjsMH4KxY8bF2%2B6zPzBdQpP6CbYOKaT4qhWi7YFK1C%2FF54kgfylV%2FcWrjzaZBVadll5xvP9axACAzrS5OjY2pOjKaWQLDP21UAxkXFfjFDm9WY5WGIuXekFONiwsu%2Bd2%2BDxuQ3LWFK68q4aQjovye8eXs0LcoFfg9WgD418niMvg1MpIwd%2BllckMgxjBR%2BGdL1oTuF%2BHgzTgYwVpdlH%2FwKg2boxZ%2BGhGhg7X8VIUzdZgDXPlhk%2BGzgaRDm2Zedb77W8HsFgTS8ziksH2cRGheKYMXKcL2snNIgOYEZEEkWTSQoa5oiMMexgr8GOqUBi68%2BdclyvuMA7jUkBI0%2F9Ko6HYPD%2B6ehKyNBucSkPKtYVgAJgJ2iH%2FdVekhrVYMhV8VO5%2BPilYuU39i3lF9DJRTvVdCsuloBfs1IhsYIRrRLQ9z3bNSI2xPHDitWR%2BcruP5S2fBBmfMWQXFon2ZWTejz1oYiLM%2BUXkSNaPcaCHM%2BuFWKX3N7C%2B5Nq6hF42DeCzvvaXCaFlFq052WHQ67DLo5%2FGZz&X-Amz-Signature=ac824ff92ee02a57fa7cc7881cb9614c7e3544f94ce3eb1be5c072aa3559a4ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7K7L7YM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaYDtQ%2B2XTO6QqKFDBQ0ew4eucst%2B80sjxvneJCI05kAiEA%2FNRt%2B2iPwZlAQmpoiA8yGMpYFVzQSDJR5B5fHfl2yrQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOShtFYg0YxKBx5k8ircA82Wllf18pClNGlFQiyAv5bG%2FlU7z0hb1%2FDkCbE6kxBJof2jO5DgP4DBJR24llI3YhIYvSJluy9WRwm8VKhrudyDFuuHYTSK%2FgpAENV9A4PewpjMOdquOJGkF97cLyN36MVNn8ueRkIddFuECnx8styx9GWxEf8DYEKmz6RC1DCVMX9iFWdDsa9w2bymuUkBedPzEpvK%2B0uzKUG0iqDiB2SwKP9zmCwrkFyCCdfp0IT1YNFThoZ%2FyVGH1Pou4E0p6dmOSQoqmc2C9Vhrv9NtqguSKVI4oU0RdNCveQ2X7vYf8b5NKh2FpnP46IKIhyrou3H4rNqWTELjsMH4KxY8bF2%2B6zPzBdQpP6CbYOKaT4qhWi7YFK1C%2FF54kgfylV%2FcWrjzaZBVadll5xvP9axACAzrS5OjY2pOjKaWQLDP21UAxkXFfjFDm9WY5WGIuXekFONiwsu%2Bd2%2BDxuQ3LWFK68q4aQjovye8eXs0LcoFfg9WgD418niMvg1MpIwd%2BllckMgxjBR%2BGdL1oTuF%2BHgzTgYwVpdlH%2FwKg2boxZ%2BGhGhg7X8VIUzdZgDXPlhk%2BGzgaRDm2Zedb77W8HsFgTS8ziksH2cRGheKYMXKcL2snNIgOYEZEEkWTSQoa5oiMMexgr8GOqUBi68%2BdclyvuMA7jUkBI0%2F9Ko6HYPD%2B6ehKyNBucSkPKtYVgAJgJ2iH%2FdVekhrVYMhV8VO5%2BPilYuU39i3lF9DJRTvVdCsuloBfs1IhsYIRrRLQ9z3bNSI2xPHDitWR%2BcruP5S2fBBmfMWQXFon2ZWTejz1oYiLM%2BUXkSNaPcaCHM%2BuFWKX3N7C%2B5Nq6hF42DeCzvvaXCaFlFq052WHQ67DLo5%2FGZz&X-Amz-Signature=23b1b59f24f156635e55289fb15c7cb9cd7aa4256eb6714da248c11c9f3cd736&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7K7L7YM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaYDtQ%2B2XTO6QqKFDBQ0ew4eucst%2B80sjxvneJCI05kAiEA%2FNRt%2B2iPwZlAQmpoiA8yGMpYFVzQSDJR5B5fHfl2yrQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOShtFYg0YxKBx5k8ircA82Wllf18pClNGlFQiyAv5bG%2FlU7z0hb1%2FDkCbE6kxBJof2jO5DgP4DBJR24llI3YhIYvSJluy9WRwm8VKhrudyDFuuHYTSK%2FgpAENV9A4PewpjMOdquOJGkF97cLyN36MVNn8ueRkIddFuECnx8styx9GWxEf8DYEKmz6RC1DCVMX9iFWdDsa9w2bymuUkBedPzEpvK%2B0uzKUG0iqDiB2SwKP9zmCwrkFyCCdfp0IT1YNFThoZ%2FyVGH1Pou4E0p6dmOSQoqmc2C9Vhrv9NtqguSKVI4oU0RdNCveQ2X7vYf8b5NKh2FpnP46IKIhyrou3H4rNqWTELjsMH4KxY8bF2%2B6zPzBdQpP6CbYOKaT4qhWi7YFK1C%2FF54kgfylV%2FcWrjzaZBVadll5xvP9axACAzrS5OjY2pOjKaWQLDP21UAxkXFfjFDm9WY5WGIuXekFONiwsu%2Bd2%2BDxuQ3LWFK68q4aQjovye8eXs0LcoFfg9WgD418niMvg1MpIwd%2BllckMgxjBR%2BGdL1oTuF%2BHgzTgYwVpdlH%2FwKg2boxZ%2BGhGhg7X8VIUzdZgDXPlhk%2BGzgaRDm2Zedb77W8HsFgTS8ziksH2cRGheKYMXKcL2snNIgOYEZEEkWTSQoa5oiMMexgr8GOqUBi68%2BdclyvuMA7jUkBI0%2F9Ko6HYPD%2B6ehKyNBucSkPKtYVgAJgJ2iH%2FdVekhrVYMhV8VO5%2BPilYuU39i3lF9DJRTvVdCsuloBfs1IhsYIRrRLQ9z3bNSI2xPHDitWR%2BcruP5S2fBBmfMWQXFon2ZWTejz1oYiLM%2BUXkSNaPcaCHM%2BuFWKX3N7C%2B5Nq6hF42DeCzvvaXCaFlFq052WHQ67DLo5%2FGZz&X-Amz-Signature=58504759ecca994fbdf8ba36bdadab590164776034f6c9625dad7b136a4a55db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7K7L7YM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaYDtQ%2B2XTO6QqKFDBQ0ew4eucst%2B80sjxvneJCI05kAiEA%2FNRt%2B2iPwZlAQmpoiA8yGMpYFVzQSDJR5B5fHfl2yrQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOShtFYg0YxKBx5k8ircA82Wllf18pClNGlFQiyAv5bG%2FlU7z0hb1%2FDkCbE6kxBJof2jO5DgP4DBJR24llI3YhIYvSJluy9WRwm8VKhrudyDFuuHYTSK%2FgpAENV9A4PewpjMOdquOJGkF97cLyN36MVNn8ueRkIddFuECnx8styx9GWxEf8DYEKmz6RC1DCVMX9iFWdDsa9w2bymuUkBedPzEpvK%2B0uzKUG0iqDiB2SwKP9zmCwrkFyCCdfp0IT1YNFThoZ%2FyVGH1Pou4E0p6dmOSQoqmc2C9Vhrv9NtqguSKVI4oU0RdNCveQ2X7vYf8b5NKh2FpnP46IKIhyrou3H4rNqWTELjsMH4KxY8bF2%2B6zPzBdQpP6CbYOKaT4qhWi7YFK1C%2FF54kgfylV%2FcWrjzaZBVadll5xvP9axACAzrS5OjY2pOjKaWQLDP21UAxkXFfjFDm9WY5WGIuXekFONiwsu%2Bd2%2BDxuQ3LWFK68q4aQjovye8eXs0LcoFfg9WgD418niMvg1MpIwd%2BllckMgxjBR%2BGdL1oTuF%2BHgzTgYwVpdlH%2FwKg2boxZ%2BGhGhg7X8VIUzdZgDXPlhk%2BGzgaRDm2Zedb77W8HsFgTS8ziksH2cRGheKYMXKcL2snNIgOYEZEEkWTSQoa5oiMMexgr8GOqUBi68%2BdclyvuMA7jUkBI0%2F9Ko6HYPD%2B6ehKyNBucSkPKtYVgAJgJ2iH%2FdVekhrVYMhV8VO5%2BPilYuU39i3lF9DJRTvVdCsuloBfs1IhsYIRrRLQ9z3bNSI2xPHDitWR%2BcruP5S2fBBmfMWQXFon2ZWTejz1oYiLM%2BUXkSNaPcaCHM%2BuFWKX3N7C%2B5Nq6hF42DeCzvvaXCaFlFq052WHQ67DLo5%2FGZz&X-Amz-Signature=6749fedaa4faeb401c71cc90ccdd1330cf74dfff1b29102ce2fc8b49eb1d92a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7K7L7YM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaYDtQ%2B2XTO6QqKFDBQ0ew4eucst%2B80sjxvneJCI05kAiEA%2FNRt%2B2iPwZlAQmpoiA8yGMpYFVzQSDJR5B5fHfl2yrQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOShtFYg0YxKBx5k8ircA82Wllf18pClNGlFQiyAv5bG%2FlU7z0hb1%2FDkCbE6kxBJof2jO5DgP4DBJR24llI3YhIYvSJluy9WRwm8VKhrudyDFuuHYTSK%2FgpAENV9A4PewpjMOdquOJGkF97cLyN36MVNn8ueRkIddFuECnx8styx9GWxEf8DYEKmz6RC1DCVMX9iFWdDsa9w2bymuUkBedPzEpvK%2B0uzKUG0iqDiB2SwKP9zmCwrkFyCCdfp0IT1YNFThoZ%2FyVGH1Pou4E0p6dmOSQoqmc2C9Vhrv9NtqguSKVI4oU0RdNCveQ2X7vYf8b5NKh2FpnP46IKIhyrou3H4rNqWTELjsMH4KxY8bF2%2B6zPzBdQpP6CbYOKaT4qhWi7YFK1C%2FF54kgfylV%2FcWrjzaZBVadll5xvP9axACAzrS5OjY2pOjKaWQLDP21UAxkXFfjFDm9WY5WGIuXekFONiwsu%2Bd2%2BDxuQ3LWFK68q4aQjovye8eXs0LcoFfg9WgD418niMvg1MpIwd%2BllckMgxjBR%2BGdL1oTuF%2BHgzTgYwVpdlH%2FwKg2boxZ%2BGhGhg7X8VIUzdZgDXPlhk%2BGzgaRDm2Zedb77W8HsFgTS8ziksH2cRGheKYMXKcL2snNIgOYEZEEkWTSQoa5oiMMexgr8GOqUBi68%2BdclyvuMA7jUkBI0%2F9Ko6HYPD%2B6ehKyNBucSkPKtYVgAJgJ2iH%2FdVekhrVYMhV8VO5%2BPilYuU39i3lF9DJRTvVdCsuloBfs1IhsYIRrRLQ9z3bNSI2xPHDitWR%2BcruP5S2fBBmfMWQXFon2ZWTejz1oYiLM%2BUXkSNaPcaCHM%2BuFWKX3N7C%2B5Nq6hF42DeCzvvaXCaFlFq052WHQ67DLo5%2FGZz&X-Amz-Signature=453628436328a3818b41a05ed7779858cbf3bb75e86ddae7479708f87c194c26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

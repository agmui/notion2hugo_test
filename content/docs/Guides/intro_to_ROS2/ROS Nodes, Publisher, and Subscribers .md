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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNMXZZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSNwzAOBz6S0%2BHXb6fgvjiI8hLMtmAZfzCxjv7coQ%2BVQIgGnQHb7D5kU2LW8kXxHoNU5KqUkPnCkTaExJxRMFVf3Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDILjQofgqH0Bzv6w1ircAzAEMsY7g6ueP0Vg1%2B0WSYEkAApZ1%2F7bxyrv0%2F4bicVLxXY13jZHIM%2B6ZudAyP9fJVBuTmwZ9cStpB3fnqRNaKuc%2BvcxHX4ZsZRdxx6qXfK%2FaVrVnbtvC30mIVfUt%2BFZHPVWWefIjHVIpx4%2F9VfRgYnJ39Cfb1CsZ0lQ%2F0gU8LtZ%2BHXk4yjwEG5lyiDFlWeRHuaaYzn0P%2F6oRr7BLEGYnjWYyOfYcHZsIHOSlamtbEQj8QsAaqMrwATtI%2B%2BdLuYE78jtnsAdeNY%2FxQJSbQIe9PSOWKRcg3Px7ZJnoav22uH0vtkVOgaJJdPzQJxriyEM7pDtgHVG3%2FWVttQFQiZCEuYqbqVF76F9h%2BkgwGYpNd52tsQ%2BetzYqWirnPPf29mNM9Ny3cTS2pkHH4ElppukB05idC%2BVzIfZOHhsgF2op9qzi62UIEuYDgDpPYj0iew8rmKB%2BrctdNh9MJ%2FPAeYC3uJQbsNCLOfCLGqS3WvIvc0u9%2BX%2FAs%2BKlKeJzDqslxh4lAakuWz%2B6%2F%2FlU6ULD7fe6oehobTMp4gorTYdsCXWpNboWeDacxq%2BoA8yKaQ47oR6F9LUUoSzdqprXOm2R%2FxkKSkCwkyV4ivmEzfF%2BD9lrWOVsvCaAGphlEzanssKMJCv374GOqUBtTFcZwXOGpqGfa%2BCmv9jnSVOLwJgHV01QfMKzh9NUuPKZu6APT9hUsUOdfljVG06muSsRkfMcUY1WmvEOc2po17KDWhfsnYTkiOWxbiIEDymqMvM80Mm%2FOZ5Zs3ac4JUzlHVtLLrY1xUdGejWeclwb2L9kbWCOSDzmiqUNAta0HVoVS54fAOAa3llWwg3W1vs7YPC%2BTsR4K%2FTM5pBM3ETM2IZu%2Fe&X-Amz-Signature=a80da1686362d22ff13fcd533dacfb163baf9723d512ffd333f7a64095e7a8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNMXZZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSNwzAOBz6S0%2BHXb6fgvjiI8hLMtmAZfzCxjv7coQ%2BVQIgGnQHb7D5kU2LW8kXxHoNU5KqUkPnCkTaExJxRMFVf3Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDILjQofgqH0Bzv6w1ircAzAEMsY7g6ueP0Vg1%2B0WSYEkAApZ1%2F7bxyrv0%2F4bicVLxXY13jZHIM%2B6ZudAyP9fJVBuTmwZ9cStpB3fnqRNaKuc%2BvcxHX4ZsZRdxx6qXfK%2FaVrVnbtvC30mIVfUt%2BFZHPVWWefIjHVIpx4%2F9VfRgYnJ39Cfb1CsZ0lQ%2F0gU8LtZ%2BHXk4yjwEG5lyiDFlWeRHuaaYzn0P%2F6oRr7BLEGYnjWYyOfYcHZsIHOSlamtbEQj8QsAaqMrwATtI%2B%2BdLuYE78jtnsAdeNY%2FxQJSbQIe9PSOWKRcg3Px7ZJnoav22uH0vtkVOgaJJdPzQJxriyEM7pDtgHVG3%2FWVttQFQiZCEuYqbqVF76F9h%2BkgwGYpNd52tsQ%2BetzYqWirnPPf29mNM9Ny3cTS2pkHH4ElppukB05idC%2BVzIfZOHhsgF2op9qzi62UIEuYDgDpPYj0iew8rmKB%2BrctdNh9MJ%2FPAeYC3uJQbsNCLOfCLGqS3WvIvc0u9%2BX%2FAs%2BKlKeJzDqslxh4lAakuWz%2B6%2F%2FlU6ULD7fe6oehobTMp4gorTYdsCXWpNboWeDacxq%2BoA8yKaQ47oR6F9LUUoSzdqprXOm2R%2FxkKSkCwkyV4ivmEzfF%2BD9lrWOVsvCaAGphlEzanssKMJCv374GOqUBtTFcZwXOGpqGfa%2BCmv9jnSVOLwJgHV01QfMKzh9NUuPKZu6APT9hUsUOdfljVG06muSsRkfMcUY1WmvEOc2po17KDWhfsnYTkiOWxbiIEDymqMvM80Mm%2FOZ5Zs3ac4JUzlHVtLLrY1xUdGejWeclwb2L9kbWCOSDzmiqUNAta0HVoVS54fAOAa3llWwg3W1vs7YPC%2BTsR4K%2FTM5pBM3ETM2IZu%2Fe&X-Amz-Signature=9642b9718a292f810a180a138aa9795270daf96649342f20d3d3f20553aac3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNMXZZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSNwzAOBz6S0%2BHXb6fgvjiI8hLMtmAZfzCxjv7coQ%2BVQIgGnQHb7D5kU2LW8kXxHoNU5KqUkPnCkTaExJxRMFVf3Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDILjQofgqH0Bzv6w1ircAzAEMsY7g6ueP0Vg1%2B0WSYEkAApZ1%2F7bxyrv0%2F4bicVLxXY13jZHIM%2B6ZudAyP9fJVBuTmwZ9cStpB3fnqRNaKuc%2BvcxHX4ZsZRdxx6qXfK%2FaVrVnbtvC30mIVfUt%2BFZHPVWWefIjHVIpx4%2F9VfRgYnJ39Cfb1CsZ0lQ%2F0gU8LtZ%2BHXk4yjwEG5lyiDFlWeRHuaaYzn0P%2F6oRr7BLEGYnjWYyOfYcHZsIHOSlamtbEQj8QsAaqMrwATtI%2B%2BdLuYE78jtnsAdeNY%2FxQJSbQIe9PSOWKRcg3Px7ZJnoav22uH0vtkVOgaJJdPzQJxriyEM7pDtgHVG3%2FWVttQFQiZCEuYqbqVF76F9h%2BkgwGYpNd52tsQ%2BetzYqWirnPPf29mNM9Ny3cTS2pkHH4ElppukB05idC%2BVzIfZOHhsgF2op9qzi62UIEuYDgDpPYj0iew8rmKB%2BrctdNh9MJ%2FPAeYC3uJQbsNCLOfCLGqS3WvIvc0u9%2BX%2FAs%2BKlKeJzDqslxh4lAakuWz%2B6%2F%2FlU6ULD7fe6oehobTMp4gorTYdsCXWpNboWeDacxq%2BoA8yKaQ47oR6F9LUUoSzdqprXOm2R%2FxkKSkCwkyV4ivmEzfF%2BD9lrWOVsvCaAGphlEzanssKMJCv374GOqUBtTFcZwXOGpqGfa%2BCmv9jnSVOLwJgHV01QfMKzh9NUuPKZu6APT9hUsUOdfljVG06muSsRkfMcUY1WmvEOc2po17KDWhfsnYTkiOWxbiIEDymqMvM80Mm%2FOZ5Zs3ac4JUzlHVtLLrY1xUdGejWeclwb2L9kbWCOSDzmiqUNAta0HVoVS54fAOAa3llWwg3W1vs7YPC%2BTsR4K%2FTM5pBM3ETM2IZu%2Fe&X-Amz-Signature=35a3aa694252f57c0fab4dbafa483b9760eece3afa9e54b4993ef144ec04dff7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNMXZZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSNwzAOBz6S0%2BHXb6fgvjiI8hLMtmAZfzCxjv7coQ%2BVQIgGnQHb7D5kU2LW8kXxHoNU5KqUkPnCkTaExJxRMFVf3Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDILjQofgqH0Bzv6w1ircAzAEMsY7g6ueP0Vg1%2B0WSYEkAApZ1%2F7bxyrv0%2F4bicVLxXY13jZHIM%2B6ZudAyP9fJVBuTmwZ9cStpB3fnqRNaKuc%2BvcxHX4ZsZRdxx6qXfK%2FaVrVnbtvC30mIVfUt%2BFZHPVWWefIjHVIpx4%2F9VfRgYnJ39Cfb1CsZ0lQ%2F0gU8LtZ%2BHXk4yjwEG5lyiDFlWeRHuaaYzn0P%2F6oRr7BLEGYnjWYyOfYcHZsIHOSlamtbEQj8QsAaqMrwATtI%2B%2BdLuYE78jtnsAdeNY%2FxQJSbQIe9PSOWKRcg3Px7ZJnoav22uH0vtkVOgaJJdPzQJxriyEM7pDtgHVG3%2FWVttQFQiZCEuYqbqVF76F9h%2BkgwGYpNd52tsQ%2BetzYqWirnPPf29mNM9Ny3cTS2pkHH4ElppukB05idC%2BVzIfZOHhsgF2op9qzi62UIEuYDgDpPYj0iew8rmKB%2BrctdNh9MJ%2FPAeYC3uJQbsNCLOfCLGqS3WvIvc0u9%2BX%2FAs%2BKlKeJzDqslxh4lAakuWz%2B6%2F%2FlU6ULD7fe6oehobTMp4gorTYdsCXWpNboWeDacxq%2BoA8yKaQ47oR6F9LUUoSzdqprXOm2R%2FxkKSkCwkyV4ivmEzfF%2BD9lrWOVsvCaAGphlEzanssKMJCv374GOqUBtTFcZwXOGpqGfa%2BCmv9jnSVOLwJgHV01QfMKzh9NUuPKZu6APT9hUsUOdfljVG06muSsRkfMcUY1WmvEOc2po17KDWhfsnYTkiOWxbiIEDymqMvM80Mm%2FOZ5Zs3ac4JUzlHVtLLrY1xUdGejWeclwb2L9kbWCOSDzmiqUNAta0HVoVS54fAOAa3llWwg3W1vs7YPC%2BTsR4K%2FTM5pBM3ETM2IZu%2Fe&X-Amz-Signature=cbef6c9d308038a062dbc80a2c529aedbf4317f1f4fd6e61301bfff5dd5c9a92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNMXZZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSNwzAOBz6S0%2BHXb6fgvjiI8hLMtmAZfzCxjv7coQ%2BVQIgGnQHb7D5kU2LW8kXxHoNU5KqUkPnCkTaExJxRMFVf3Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDILjQofgqH0Bzv6w1ircAzAEMsY7g6ueP0Vg1%2B0WSYEkAApZ1%2F7bxyrv0%2F4bicVLxXY13jZHIM%2B6ZudAyP9fJVBuTmwZ9cStpB3fnqRNaKuc%2BvcxHX4ZsZRdxx6qXfK%2FaVrVnbtvC30mIVfUt%2BFZHPVWWefIjHVIpx4%2F9VfRgYnJ39Cfb1CsZ0lQ%2F0gU8LtZ%2BHXk4yjwEG5lyiDFlWeRHuaaYzn0P%2F6oRr7BLEGYnjWYyOfYcHZsIHOSlamtbEQj8QsAaqMrwATtI%2B%2BdLuYE78jtnsAdeNY%2FxQJSbQIe9PSOWKRcg3Px7ZJnoav22uH0vtkVOgaJJdPzQJxriyEM7pDtgHVG3%2FWVttQFQiZCEuYqbqVF76F9h%2BkgwGYpNd52tsQ%2BetzYqWirnPPf29mNM9Ny3cTS2pkHH4ElppukB05idC%2BVzIfZOHhsgF2op9qzi62UIEuYDgDpPYj0iew8rmKB%2BrctdNh9MJ%2FPAeYC3uJQbsNCLOfCLGqS3WvIvc0u9%2BX%2FAs%2BKlKeJzDqslxh4lAakuWz%2B6%2F%2FlU6ULD7fe6oehobTMp4gorTYdsCXWpNboWeDacxq%2BoA8yKaQ47oR6F9LUUoSzdqprXOm2R%2FxkKSkCwkyV4ivmEzfF%2BD9lrWOVsvCaAGphlEzanssKMJCv374GOqUBtTFcZwXOGpqGfa%2BCmv9jnSVOLwJgHV01QfMKzh9NUuPKZu6APT9hUsUOdfljVG06muSsRkfMcUY1WmvEOc2po17KDWhfsnYTkiOWxbiIEDymqMvM80Mm%2FOZ5Zs3ac4JUzlHVtLLrY1xUdGejWeclwb2L9kbWCOSDzmiqUNAta0HVoVS54fAOAa3llWwg3W1vs7YPC%2BTsR4K%2FTM5pBM3ETM2IZu%2Fe&X-Amz-Signature=504f27e9ccfe771ed61116a5879d1212044cd1517e943d503651d0044309ea9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNMXZZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSNwzAOBz6S0%2BHXb6fgvjiI8hLMtmAZfzCxjv7coQ%2BVQIgGnQHb7D5kU2LW8kXxHoNU5KqUkPnCkTaExJxRMFVf3Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDILjQofgqH0Bzv6w1ircAzAEMsY7g6ueP0Vg1%2B0WSYEkAApZ1%2F7bxyrv0%2F4bicVLxXY13jZHIM%2B6ZudAyP9fJVBuTmwZ9cStpB3fnqRNaKuc%2BvcxHX4ZsZRdxx6qXfK%2FaVrVnbtvC30mIVfUt%2BFZHPVWWefIjHVIpx4%2F9VfRgYnJ39Cfb1CsZ0lQ%2F0gU8LtZ%2BHXk4yjwEG5lyiDFlWeRHuaaYzn0P%2F6oRr7BLEGYnjWYyOfYcHZsIHOSlamtbEQj8QsAaqMrwATtI%2B%2BdLuYE78jtnsAdeNY%2FxQJSbQIe9PSOWKRcg3Px7ZJnoav22uH0vtkVOgaJJdPzQJxriyEM7pDtgHVG3%2FWVttQFQiZCEuYqbqVF76F9h%2BkgwGYpNd52tsQ%2BetzYqWirnPPf29mNM9Ny3cTS2pkHH4ElppukB05idC%2BVzIfZOHhsgF2op9qzi62UIEuYDgDpPYj0iew8rmKB%2BrctdNh9MJ%2FPAeYC3uJQbsNCLOfCLGqS3WvIvc0u9%2BX%2FAs%2BKlKeJzDqslxh4lAakuWz%2B6%2F%2FlU6ULD7fe6oehobTMp4gorTYdsCXWpNboWeDacxq%2BoA8yKaQ47oR6F9LUUoSzdqprXOm2R%2FxkKSkCwkyV4ivmEzfF%2BD9lrWOVsvCaAGphlEzanssKMJCv374GOqUBtTFcZwXOGpqGfa%2BCmv9jnSVOLwJgHV01QfMKzh9NUuPKZu6APT9hUsUOdfljVG06muSsRkfMcUY1WmvEOc2po17KDWhfsnYTkiOWxbiIEDymqMvM80Mm%2FOZ5Zs3ac4JUzlHVtLLrY1xUdGejWeclwb2L9kbWCOSDzmiqUNAta0HVoVS54fAOAa3llWwg3W1vs7YPC%2BTsR4K%2FTM5pBM3ETM2IZu%2Fe&X-Amz-Signature=8ea9c7ad0a6b8fe9e059d88c4a9bed403478d7b20a5b7eb17f9f2dd298cd087e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNMXZZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSNwzAOBz6S0%2BHXb6fgvjiI8hLMtmAZfzCxjv7coQ%2BVQIgGnQHb7D5kU2LW8kXxHoNU5KqUkPnCkTaExJxRMFVf3Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDILjQofgqH0Bzv6w1ircAzAEMsY7g6ueP0Vg1%2B0WSYEkAApZ1%2F7bxyrv0%2F4bicVLxXY13jZHIM%2B6ZudAyP9fJVBuTmwZ9cStpB3fnqRNaKuc%2BvcxHX4ZsZRdxx6qXfK%2FaVrVnbtvC30mIVfUt%2BFZHPVWWefIjHVIpx4%2F9VfRgYnJ39Cfb1CsZ0lQ%2F0gU8LtZ%2BHXk4yjwEG5lyiDFlWeRHuaaYzn0P%2F6oRr7BLEGYnjWYyOfYcHZsIHOSlamtbEQj8QsAaqMrwATtI%2B%2BdLuYE78jtnsAdeNY%2FxQJSbQIe9PSOWKRcg3Px7ZJnoav22uH0vtkVOgaJJdPzQJxriyEM7pDtgHVG3%2FWVttQFQiZCEuYqbqVF76F9h%2BkgwGYpNd52tsQ%2BetzYqWirnPPf29mNM9Ny3cTS2pkHH4ElppukB05idC%2BVzIfZOHhsgF2op9qzi62UIEuYDgDpPYj0iew8rmKB%2BrctdNh9MJ%2FPAeYC3uJQbsNCLOfCLGqS3WvIvc0u9%2BX%2FAs%2BKlKeJzDqslxh4lAakuWz%2B6%2F%2FlU6ULD7fe6oehobTMp4gorTYdsCXWpNboWeDacxq%2BoA8yKaQ47oR6F9LUUoSzdqprXOm2R%2FxkKSkCwkyV4ivmEzfF%2BD9lrWOVsvCaAGphlEzanssKMJCv374GOqUBtTFcZwXOGpqGfa%2BCmv9jnSVOLwJgHV01QfMKzh9NUuPKZu6APT9hUsUOdfljVG06muSsRkfMcUY1WmvEOc2po17KDWhfsnYTkiOWxbiIEDymqMvM80Mm%2FOZ5Zs3ac4JUzlHVtLLrY1xUdGejWeclwb2L9kbWCOSDzmiqUNAta0HVoVS54fAOAa3llWwg3W1vs7YPC%2BTsR4K%2FTM5pBM3ETM2IZu%2Fe&X-Amz-Signature=6eb6ee30af86d493d2cd82d87726d2a7b1f351fa498d976987190c7550af3401&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNMXZZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSNwzAOBz6S0%2BHXb6fgvjiI8hLMtmAZfzCxjv7coQ%2BVQIgGnQHb7D5kU2LW8kXxHoNU5KqUkPnCkTaExJxRMFVf3Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDILjQofgqH0Bzv6w1ircAzAEMsY7g6ueP0Vg1%2B0WSYEkAApZ1%2F7bxyrv0%2F4bicVLxXY13jZHIM%2B6ZudAyP9fJVBuTmwZ9cStpB3fnqRNaKuc%2BvcxHX4ZsZRdxx6qXfK%2FaVrVnbtvC30mIVfUt%2BFZHPVWWefIjHVIpx4%2F9VfRgYnJ39Cfb1CsZ0lQ%2F0gU8LtZ%2BHXk4yjwEG5lyiDFlWeRHuaaYzn0P%2F6oRr7BLEGYnjWYyOfYcHZsIHOSlamtbEQj8QsAaqMrwATtI%2B%2BdLuYE78jtnsAdeNY%2FxQJSbQIe9PSOWKRcg3Px7ZJnoav22uH0vtkVOgaJJdPzQJxriyEM7pDtgHVG3%2FWVttQFQiZCEuYqbqVF76F9h%2BkgwGYpNd52tsQ%2BetzYqWirnPPf29mNM9Ny3cTS2pkHH4ElppukB05idC%2BVzIfZOHhsgF2op9qzi62UIEuYDgDpPYj0iew8rmKB%2BrctdNh9MJ%2FPAeYC3uJQbsNCLOfCLGqS3WvIvc0u9%2BX%2FAs%2BKlKeJzDqslxh4lAakuWz%2B6%2F%2FlU6ULD7fe6oehobTMp4gorTYdsCXWpNboWeDacxq%2BoA8yKaQ47oR6F9LUUoSzdqprXOm2R%2FxkKSkCwkyV4ivmEzfF%2BD9lrWOVsvCaAGphlEzanssKMJCv374GOqUBtTFcZwXOGpqGfa%2BCmv9jnSVOLwJgHV01QfMKzh9NUuPKZu6APT9hUsUOdfljVG06muSsRkfMcUY1WmvEOc2po17KDWhfsnYTkiOWxbiIEDymqMvM80Mm%2FOZ5Zs3ac4JUzlHVtLLrY1xUdGejWeclwb2L9kbWCOSDzmiqUNAta0HVoVS54fAOAa3llWwg3W1vs7YPC%2BTsR4K%2FTM5pBM3ETM2IZu%2Fe&X-Amz-Signature=35832fe7f2cbd212c95a0194b8a82956e6fb133ee70908eb04052da731ea6a35&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

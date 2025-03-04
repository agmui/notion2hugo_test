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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2NILLU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAaeKBGEn%2BWz%2Bb8I2Z4XwS3LUyvcAfDvy%2F%2BI8m1Bi4wIgdqcIC1SADO%2FPdDmW7Tq%2FnbJHj%2FIpdELWfLgB%2BRw2PvEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnfcuKRFVLuS58R2SrcA15YtxVfQMAVJ0w95dP%2BmBWtavj7eR1LNoDCr5GmCHkVKmHrTyab3YT%2FDEx7iLg2ZLGn4iyQGzskZ3fN%2FiD0hLbS0kcuMlOvuwF5fB6wvwKsf1WQjY5CHXP2CZptaUVSmOBiamocXCgprzfM%2FNdQciwAJO69PDbo4U7e%2B7fzPTZ98PquFjOE3tUUyRu2YlgN0mS8r5RXnGVAE%2FG9xhoTofLanebxjunHLtM0U9gUtOO7p8imsiTu05x3JNhKA6NH8TfFw9fFY1IYU1NsSiNZ1y1SvyXqdQZXzAICYj5Ua8oJRlE5yO20R9hCGjbMX7pHcHlbYHyNGYrNXlK7ethG%2Fgk%2Bl7qIzXWfBAO1icHmIDRSeUfcLLui2gNzJhw3cOW2vdThb3sT1NEpAc9MmXmpAbcqPrW7vnB0iCFnHLGJA%2FIqxz99YOA1j4muVHEsjSF7b3s0GQT5SBUf8iVLLyY%2FryB1OBQaEpei1Wu0ExKAEmbcNZH9rJbo6wW%2Fn4ZGHUPf4QvtVgBfuAj4S4d5CkeCRXWitx3ulQ8oDjJgMX36X97h8OTIa1oUT0YjYDXki1yBTLBCuiKUSqOPkLefGQIWFwR6g0UtRVjK3QkTQvyavLSSUlMJ%2BJF5a0HnP3P7MPK%2Fmr4GOqUB8Je3IDr%2ByslboM6%2Bg0XDCXx6gP5UvMjVc1253dNlHD0t3%2F8vTodESXQo%2BcDXDS6JhHQx3zMxXEH7FoUreEn6Nq14xXzbqUoJyh%2B8FMt4hVBcv6m46Acl%2B%2FvPDGY5naBeZCzqn1zQG7vbO%2B7qEiKrs9plp8x08bedvxpEcP1v1Edf%2BIFOnYtc9Ty%2FS3JEiUROPVLTpc%2BCZIyLX7dspMAyQDRrtDZ7&X-Amz-Signature=4cc3eb6f41edf309537e4b1700e6e47d23bee319f2e1d5a980f6982b86ad30d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2NILLU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAaeKBGEn%2BWz%2Bb8I2Z4XwS3LUyvcAfDvy%2F%2BI8m1Bi4wIgdqcIC1SADO%2FPdDmW7Tq%2FnbJHj%2FIpdELWfLgB%2BRw2PvEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnfcuKRFVLuS58R2SrcA15YtxVfQMAVJ0w95dP%2BmBWtavj7eR1LNoDCr5GmCHkVKmHrTyab3YT%2FDEx7iLg2ZLGn4iyQGzskZ3fN%2FiD0hLbS0kcuMlOvuwF5fB6wvwKsf1WQjY5CHXP2CZptaUVSmOBiamocXCgprzfM%2FNdQciwAJO69PDbo4U7e%2B7fzPTZ98PquFjOE3tUUyRu2YlgN0mS8r5RXnGVAE%2FG9xhoTofLanebxjunHLtM0U9gUtOO7p8imsiTu05x3JNhKA6NH8TfFw9fFY1IYU1NsSiNZ1y1SvyXqdQZXzAICYj5Ua8oJRlE5yO20R9hCGjbMX7pHcHlbYHyNGYrNXlK7ethG%2Fgk%2Bl7qIzXWfBAO1icHmIDRSeUfcLLui2gNzJhw3cOW2vdThb3sT1NEpAc9MmXmpAbcqPrW7vnB0iCFnHLGJA%2FIqxz99YOA1j4muVHEsjSF7b3s0GQT5SBUf8iVLLyY%2FryB1OBQaEpei1Wu0ExKAEmbcNZH9rJbo6wW%2Fn4ZGHUPf4QvtVgBfuAj4S4d5CkeCRXWitx3ulQ8oDjJgMX36X97h8OTIa1oUT0YjYDXki1yBTLBCuiKUSqOPkLefGQIWFwR6g0UtRVjK3QkTQvyavLSSUlMJ%2BJF5a0HnP3P7MPK%2Fmr4GOqUB8Je3IDr%2ByslboM6%2Bg0XDCXx6gP5UvMjVc1253dNlHD0t3%2F8vTodESXQo%2BcDXDS6JhHQx3zMxXEH7FoUreEn6Nq14xXzbqUoJyh%2B8FMt4hVBcv6m46Acl%2B%2FvPDGY5naBeZCzqn1zQG7vbO%2B7qEiKrs9plp8x08bedvxpEcP1v1Edf%2BIFOnYtc9Ty%2FS3JEiUROPVLTpc%2BCZIyLX7dspMAyQDRrtDZ7&X-Amz-Signature=9815690e01a8541427f953fc1c59c6b81e8db29d70b422e047689f9cd985cb86&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2NILLU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAaeKBGEn%2BWz%2Bb8I2Z4XwS3LUyvcAfDvy%2F%2BI8m1Bi4wIgdqcIC1SADO%2FPdDmW7Tq%2FnbJHj%2FIpdELWfLgB%2BRw2PvEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnfcuKRFVLuS58R2SrcA15YtxVfQMAVJ0w95dP%2BmBWtavj7eR1LNoDCr5GmCHkVKmHrTyab3YT%2FDEx7iLg2ZLGn4iyQGzskZ3fN%2FiD0hLbS0kcuMlOvuwF5fB6wvwKsf1WQjY5CHXP2CZptaUVSmOBiamocXCgprzfM%2FNdQciwAJO69PDbo4U7e%2B7fzPTZ98PquFjOE3tUUyRu2YlgN0mS8r5RXnGVAE%2FG9xhoTofLanebxjunHLtM0U9gUtOO7p8imsiTu05x3JNhKA6NH8TfFw9fFY1IYU1NsSiNZ1y1SvyXqdQZXzAICYj5Ua8oJRlE5yO20R9hCGjbMX7pHcHlbYHyNGYrNXlK7ethG%2Fgk%2Bl7qIzXWfBAO1icHmIDRSeUfcLLui2gNzJhw3cOW2vdThb3sT1NEpAc9MmXmpAbcqPrW7vnB0iCFnHLGJA%2FIqxz99YOA1j4muVHEsjSF7b3s0GQT5SBUf8iVLLyY%2FryB1OBQaEpei1Wu0ExKAEmbcNZH9rJbo6wW%2Fn4ZGHUPf4QvtVgBfuAj4S4d5CkeCRXWitx3ulQ8oDjJgMX36X97h8OTIa1oUT0YjYDXki1yBTLBCuiKUSqOPkLefGQIWFwR6g0UtRVjK3QkTQvyavLSSUlMJ%2BJF5a0HnP3P7MPK%2Fmr4GOqUB8Je3IDr%2ByslboM6%2Bg0XDCXx6gP5UvMjVc1253dNlHD0t3%2F8vTodESXQo%2BcDXDS6JhHQx3zMxXEH7FoUreEn6Nq14xXzbqUoJyh%2B8FMt4hVBcv6m46Acl%2B%2FvPDGY5naBeZCzqn1zQG7vbO%2B7qEiKrs9plp8x08bedvxpEcP1v1Edf%2BIFOnYtc9Ty%2FS3JEiUROPVLTpc%2BCZIyLX7dspMAyQDRrtDZ7&X-Amz-Signature=044115bd64f7e292e77d0d34434e30f50e8e226dbc91f61726e12f3e1416b5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2NILLU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAaeKBGEn%2BWz%2Bb8I2Z4XwS3LUyvcAfDvy%2F%2BI8m1Bi4wIgdqcIC1SADO%2FPdDmW7Tq%2FnbJHj%2FIpdELWfLgB%2BRw2PvEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnfcuKRFVLuS58R2SrcA15YtxVfQMAVJ0w95dP%2BmBWtavj7eR1LNoDCr5GmCHkVKmHrTyab3YT%2FDEx7iLg2ZLGn4iyQGzskZ3fN%2FiD0hLbS0kcuMlOvuwF5fB6wvwKsf1WQjY5CHXP2CZptaUVSmOBiamocXCgprzfM%2FNdQciwAJO69PDbo4U7e%2B7fzPTZ98PquFjOE3tUUyRu2YlgN0mS8r5RXnGVAE%2FG9xhoTofLanebxjunHLtM0U9gUtOO7p8imsiTu05x3JNhKA6NH8TfFw9fFY1IYU1NsSiNZ1y1SvyXqdQZXzAICYj5Ua8oJRlE5yO20R9hCGjbMX7pHcHlbYHyNGYrNXlK7ethG%2Fgk%2Bl7qIzXWfBAO1icHmIDRSeUfcLLui2gNzJhw3cOW2vdThb3sT1NEpAc9MmXmpAbcqPrW7vnB0iCFnHLGJA%2FIqxz99YOA1j4muVHEsjSF7b3s0GQT5SBUf8iVLLyY%2FryB1OBQaEpei1Wu0ExKAEmbcNZH9rJbo6wW%2Fn4ZGHUPf4QvtVgBfuAj4S4d5CkeCRXWitx3ulQ8oDjJgMX36X97h8OTIa1oUT0YjYDXki1yBTLBCuiKUSqOPkLefGQIWFwR6g0UtRVjK3QkTQvyavLSSUlMJ%2BJF5a0HnP3P7MPK%2Fmr4GOqUB8Je3IDr%2ByslboM6%2Bg0XDCXx6gP5UvMjVc1253dNlHD0t3%2F8vTodESXQo%2BcDXDS6JhHQx3zMxXEH7FoUreEn6Nq14xXzbqUoJyh%2B8FMt4hVBcv6m46Acl%2B%2FvPDGY5naBeZCzqn1zQG7vbO%2B7qEiKrs9plp8x08bedvxpEcP1v1Edf%2BIFOnYtc9Ty%2FS3JEiUROPVLTpc%2BCZIyLX7dspMAyQDRrtDZ7&X-Amz-Signature=7659bda273d80453c797ad292c557851ce7afaba09c3d6283ba974e11fb1af8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2NILLU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAaeKBGEn%2BWz%2Bb8I2Z4XwS3LUyvcAfDvy%2F%2BI8m1Bi4wIgdqcIC1SADO%2FPdDmW7Tq%2FnbJHj%2FIpdELWfLgB%2BRw2PvEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnfcuKRFVLuS58R2SrcA15YtxVfQMAVJ0w95dP%2BmBWtavj7eR1LNoDCr5GmCHkVKmHrTyab3YT%2FDEx7iLg2ZLGn4iyQGzskZ3fN%2FiD0hLbS0kcuMlOvuwF5fB6wvwKsf1WQjY5CHXP2CZptaUVSmOBiamocXCgprzfM%2FNdQciwAJO69PDbo4U7e%2B7fzPTZ98PquFjOE3tUUyRu2YlgN0mS8r5RXnGVAE%2FG9xhoTofLanebxjunHLtM0U9gUtOO7p8imsiTu05x3JNhKA6NH8TfFw9fFY1IYU1NsSiNZ1y1SvyXqdQZXzAICYj5Ua8oJRlE5yO20R9hCGjbMX7pHcHlbYHyNGYrNXlK7ethG%2Fgk%2Bl7qIzXWfBAO1icHmIDRSeUfcLLui2gNzJhw3cOW2vdThb3sT1NEpAc9MmXmpAbcqPrW7vnB0iCFnHLGJA%2FIqxz99YOA1j4muVHEsjSF7b3s0GQT5SBUf8iVLLyY%2FryB1OBQaEpei1Wu0ExKAEmbcNZH9rJbo6wW%2Fn4ZGHUPf4QvtVgBfuAj4S4d5CkeCRXWitx3ulQ8oDjJgMX36X97h8OTIa1oUT0YjYDXki1yBTLBCuiKUSqOPkLefGQIWFwR6g0UtRVjK3QkTQvyavLSSUlMJ%2BJF5a0HnP3P7MPK%2Fmr4GOqUB8Je3IDr%2ByslboM6%2Bg0XDCXx6gP5UvMjVc1253dNlHD0t3%2F8vTodESXQo%2BcDXDS6JhHQx3zMxXEH7FoUreEn6Nq14xXzbqUoJyh%2B8FMt4hVBcv6m46Acl%2B%2FvPDGY5naBeZCzqn1zQG7vbO%2B7qEiKrs9plp8x08bedvxpEcP1v1Edf%2BIFOnYtc9Ty%2FS3JEiUROPVLTpc%2BCZIyLX7dspMAyQDRrtDZ7&X-Amz-Signature=60d6d15531208e43ad0fcd36d387176a58dcc9439faae51c85fffeefc939ac1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2NILLU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAaeKBGEn%2BWz%2Bb8I2Z4XwS3LUyvcAfDvy%2F%2BI8m1Bi4wIgdqcIC1SADO%2FPdDmW7Tq%2FnbJHj%2FIpdELWfLgB%2BRw2PvEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnfcuKRFVLuS58R2SrcA15YtxVfQMAVJ0w95dP%2BmBWtavj7eR1LNoDCr5GmCHkVKmHrTyab3YT%2FDEx7iLg2ZLGn4iyQGzskZ3fN%2FiD0hLbS0kcuMlOvuwF5fB6wvwKsf1WQjY5CHXP2CZptaUVSmOBiamocXCgprzfM%2FNdQciwAJO69PDbo4U7e%2B7fzPTZ98PquFjOE3tUUyRu2YlgN0mS8r5RXnGVAE%2FG9xhoTofLanebxjunHLtM0U9gUtOO7p8imsiTu05x3JNhKA6NH8TfFw9fFY1IYU1NsSiNZ1y1SvyXqdQZXzAICYj5Ua8oJRlE5yO20R9hCGjbMX7pHcHlbYHyNGYrNXlK7ethG%2Fgk%2Bl7qIzXWfBAO1icHmIDRSeUfcLLui2gNzJhw3cOW2vdThb3sT1NEpAc9MmXmpAbcqPrW7vnB0iCFnHLGJA%2FIqxz99YOA1j4muVHEsjSF7b3s0GQT5SBUf8iVLLyY%2FryB1OBQaEpei1Wu0ExKAEmbcNZH9rJbo6wW%2Fn4ZGHUPf4QvtVgBfuAj4S4d5CkeCRXWitx3ulQ8oDjJgMX36X97h8OTIa1oUT0YjYDXki1yBTLBCuiKUSqOPkLefGQIWFwR6g0UtRVjK3QkTQvyavLSSUlMJ%2BJF5a0HnP3P7MPK%2Fmr4GOqUB8Je3IDr%2ByslboM6%2Bg0XDCXx6gP5UvMjVc1253dNlHD0t3%2F8vTodESXQo%2BcDXDS6JhHQx3zMxXEH7FoUreEn6Nq14xXzbqUoJyh%2B8FMt4hVBcv6m46Acl%2B%2FvPDGY5naBeZCzqn1zQG7vbO%2B7qEiKrs9plp8x08bedvxpEcP1v1Edf%2BIFOnYtc9Ty%2FS3JEiUROPVLTpc%2BCZIyLX7dspMAyQDRrtDZ7&X-Amz-Signature=0473a56c4f7a23f1ce645c9302aab8f440c09a4b5b40817e2abfad25777781f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2NILLU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAaeKBGEn%2BWz%2Bb8I2Z4XwS3LUyvcAfDvy%2F%2BI8m1Bi4wIgdqcIC1SADO%2FPdDmW7Tq%2FnbJHj%2FIpdELWfLgB%2BRw2PvEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnfcuKRFVLuS58R2SrcA15YtxVfQMAVJ0w95dP%2BmBWtavj7eR1LNoDCr5GmCHkVKmHrTyab3YT%2FDEx7iLg2ZLGn4iyQGzskZ3fN%2FiD0hLbS0kcuMlOvuwF5fB6wvwKsf1WQjY5CHXP2CZptaUVSmOBiamocXCgprzfM%2FNdQciwAJO69PDbo4U7e%2B7fzPTZ98PquFjOE3tUUyRu2YlgN0mS8r5RXnGVAE%2FG9xhoTofLanebxjunHLtM0U9gUtOO7p8imsiTu05x3JNhKA6NH8TfFw9fFY1IYU1NsSiNZ1y1SvyXqdQZXzAICYj5Ua8oJRlE5yO20R9hCGjbMX7pHcHlbYHyNGYrNXlK7ethG%2Fgk%2Bl7qIzXWfBAO1icHmIDRSeUfcLLui2gNzJhw3cOW2vdThb3sT1NEpAc9MmXmpAbcqPrW7vnB0iCFnHLGJA%2FIqxz99YOA1j4muVHEsjSF7b3s0GQT5SBUf8iVLLyY%2FryB1OBQaEpei1Wu0ExKAEmbcNZH9rJbo6wW%2Fn4ZGHUPf4QvtVgBfuAj4S4d5CkeCRXWitx3ulQ8oDjJgMX36X97h8OTIa1oUT0YjYDXki1yBTLBCuiKUSqOPkLefGQIWFwR6g0UtRVjK3QkTQvyavLSSUlMJ%2BJF5a0HnP3P7MPK%2Fmr4GOqUB8Je3IDr%2ByslboM6%2Bg0XDCXx6gP5UvMjVc1253dNlHD0t3%2F8vTodESXQo%2BcDXDS6JhHQx3zMxXEH7FoUreEn6Nq14xXzbqUoJyh%2B8FMt4hVBcv6m46Acl%2B%2FvPDGY5naBeZCzqn1zQG7vbO%2B7qEiKrs9plp8x08bedvxpEcP1v1Edf%2BIFOnYtc9Ty%2FS3JEiUROPVLTpc%2BCZIyLX7dspMAyQDRrtDZ7&X-Amz-Signature=5d0081486b6277975396f157d6b0de912de596c5960418c07fe1a57f26e42f25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2NILLU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAaeKBGEn%2BWz%2Bb8I2Z4XwS3LUyvcAfDvy%2F%2BI8m1Bi4wIgdqcIC1SADO%2FPdDmW7Tq%2FnbJHj%2FIpdELWfLgB%2BRw2PvEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnfcuKRFVLuS58R2SrcA15YtxVfQMAVJ0w95dP%2BmBWtavj7eR1LNoDCr5GmCHkVKmHrTyab3YT%2FDEx7iLg2ZLGn4iyQGzskZ3fN%2FiD0hLbS0kcuMlOvuwF5fB6wvwKsf1WQjY5CHXP2CZptaUVSmOBiamocXCgprzfM%2FNdQciwAJO69PDbo4U7e%2B7fzPTZ98PquFjOE3tUUyRu2YlgN0mS8r5RXnGVAE%2FG9xhoTofLanebxjunHLtM0U9gUtOO7p8imsiTu05x3JNhKA6NH8TfFw9fFY1IYU1NsSiNZ1y1SvyXqdQZXzAICYj5Ua8oJRlE5yO20R9hCGjbMX7pHcHlbYHyNGYrNXlK7ethG%2Fgk%2Bl7qIzXWfBAO1icHmIDRSeUfcLLui2gNzJhw3cOW2vdThb3sT1NEpAc9MmXmpAbcqPrW7vnB0iCFnHLGJA%2FIqxz99YOA1j4muVHEsjSF7b3s0GQT5SBUf8iVLLyY%2FryB1OBQaEpei1Wu0ExKAEmbcNZH9rJbo6wW%2Fn4ZGHUPf4QvtVgBfuAj4S4d5CkeCRXWitx3ulQ8oDjJgMX36X97h8OTIa1oUT0YjYDXki1yBTLBCuiKUSqOPkLefGQIWFwR6g0UtRVjK3QkTQvyavLSSUlMJ%2BJF5a0HnP3P7MPK%2Fmr4GOqUB8Je3IDr%2ByslboM6%2Bg0XDCXx6gP5UvMjVc1253dNlHD0t3%2F8vTodESXQo%2BcDXDS6JhHQx3zMxXEH7FoUreEn6Nq14xXzbqUoJyh%2B8FMt4hVBcv6m46Acl%2B%2FvPDGY5naBeZCzqn1zQG7vbO%2B7qEiKrs9plp8x08bedvxpEcP1v1Edf%2BIFOnYtc9Ty%2FS3JEiUROPVLTpc%2BCZIyLX7dspMAyQDRrtDZ7&X-Amz-Signature=286ee18059393af38d65a8408559f20b0f8c6082b4f547da351a2ac39d2e33e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRZH434%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJElwTFrAznpuhZoJC%2BuYL7gfhsOVjc0V8T94kXZr6AiEAvPuvQWTPrnwHlMgd7VIBjXjJPvPS72UjZuvEetyVsGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW7PeNPTomTPWTCaSrcA1lQ0ORCEz%2BlnO8CWamItMqVLMzA7uMMGYMApkdXajXK6N6cNZvW7xXUaim%2F45OPyVlyWli%2FO1OV%2BLsGcY5w4giNPVjc6EBolH%2FX8xyL2hiNCrfqrmNL46T6%2Fu825C1jr%2Fa9Kj%2FBMjfby1MulGRGVfnEgS0vNDKOrmbNJxlo%2BtisYbN8jW52%2BRi8DXrEQXkezRs5vqME2de3LcCkAohZdHbUilV6NP%2BSsKLS93MRK532O9Zwb%2FRoWij3%2FAfhqMjG0pjxs%2B5yYqFaWyDT%2B4GC6dWFeTEodrs1%2BDdq6PQd7so23ZNXx0hDtNNs%2BGlsyRBp86QEfJi54hlwqyuIIygiA1QN6ETyLuGf46fCiDpZ1wQXuePro8TngCGfno%2BvWl6D0Fx%2BKtQpfABT0HYr2oS2EnMD%2BxwNlKx%2FK7ZUJ0%2F2fKzfsGTr5%2BSREh4poxBQm5nmdmfCLg0I4Qw%2FiZXnzTJOXblLpKNPEpYdJvsI7Bim3PkILdP2fZ0cOyZg0Bbv6bCqQY7nvpd4XWDvbPkP1Rd8RlYft%2Fd%2B3IpVuYdVeKEWl9PGziX5swCwFz2R0bKje9o7uTSnEEau3OL%2F0054hykccFh67wQrEPm6GNrPa23t7Q3hNzS7x1Z2reZXz438MNzA4L0GOqUBkaJKxPkKxAKkrXN6XAWSj6x3CA1EeBI4m2JR%2FBO0Vzbv68%2FcVGYmx2Cqn4S8PrQPgQMGsgPU0raf5DXHJ2Aiw6aJcesEP7uyPGIAepBK7SCeUNZlJzN1s0THxkEUlNoxNk4bzgLGD1JYy9u7MzyY4wBaj1oCyWKsEPOyi%2BQ15mGI6ORBdX4nqhh%2FITKuHv62hQ1b%2Fdqu9r%2Bc33QU3HG53DP2DxKN&X-Amz-Signature=38fa898b6d72456e7640d0a20e5ec735f1b1debdb431e453b77da7abd1da19f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRZH434%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJElwTFrAznpuhZoJC%2BuYL7gfhsOVjc0V8T94kXZr6AiEAvPuvQWTPrnwHlMgd7VIBjXjJPvPS72UjZuvEetyVsGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW7PeNPTomTPWTCaSrcA1lQ0ORCEz%2BlnO8CWamItMqVLMzA7uMMGYMApkdXajXK6N6cNZvW7xXUaim%2F45OPyVlyWli%2FO1OV%2BLsGcY5w4giNPVjc6EBolH%2FX8xyL2hiNCrfqrmNL46T6%2Fu825C1jr%2Fa9Kj%2FBMjfby1MulGRGVfnEgS0vNDKOrmbNJxlo%2BtisYbN8jW52%2BRi8DXrEQXkezRs5vqME2de3LcCkAohZdHbUilV6NP%2BSsKLS93MRK532O9Zwb%2FRoWij3%2FAfhqMjG0pjxs%2B5yYqFaWyDT%2B4GC6dWFeTEodrs1%2BDdq6PQd7so23ZNXx0hDtNNs%2BGlsyRBp86QEfJi54hlwqyuIIygiA1QN6ETyLuGf46fCiDpZ1wQXuePro8TngCGfno%2BvWl6D0Fx%2BKtQpfABT0HYr2oS2EnMD%2BxwNlKx%2FK7ZUJ0%2F2fKzfsGTr5%2BSREh4poxBQm5nmdmfCLg0I4Qw%2FiZXnzTJOXblLpKNPEpYdJvsI7Bim3PkILdP2fZ0cOyZg0Bbv6bCqQY7nvpd4XWDvbPkP1Rd8RlYft%2Fd%2B3IpVuYdVeKEWl9PGziX5swCwFz2R0bKje9o7uTSnEEau3OL%2F0054hykccFh67wQrEPm6GNrPa23t7Q3hNzS7x1Z2reZXz438MNzA4L0GOqUBkaJKxPkKxAKkrXN6XAWSj6x3CA1EeBI4m2JR%2FBO0Vzbv68%2FcVGYmx2Cqn4S8PrQPgQMGsgPU0raf5DXHJ2Aiw6aJcesEP7uyPGIAepBK7SCeUNZlJzN1s0THxkEUlNoxNk4bzgLGD1JYy9u7MzyY4wBaj1oCyWKsEPOyi%2BQ15mGI6ORBdX4nqhh%2FITKuHv62hQ1b%2Fdqu9r%2Bc33QU3HG53DP2DxKN&X-Amz-Signature=b548f8d6722f7755974f8c96b017297abbbee796b396d73d42f16aa4f03a9c88&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRZH434%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJElwTFrAznpuhZoJC%2BuYL7gfhsOVjc0V8T94kXZr6AiEAvPuvQWTPrnwHlMgd7VIBjXjJPvPS72UjZuvEetyVsGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW7PeNPTomTPWTCaSrcA1lQ0ORCEz%2BlnO8CWamItMqVLMzA7uMMGYMApkdXajXK6N6cNZvW7xXUaim%2F45OPyVlyWli%2FO1OV%2BLsGcY5w4giNPVjc6EBolH%2FX8xyL2hiNCrfqrmNL46T6%2Fu825C1jr%2Fa9Kj%2FBMjfby1MulGRGVfnEgS0vNDKOrmbNJxlo%2BtisYbN8jW52%2BRi8DXrEQXkezRs5vqME2de3LcCkAohZdHbUilV6NP%2BSsKLS93MRK532O9Zwb%2FRoWij3%2FAfhqMjG0pjxs%2B5yYqFaWyDT%2B4GC6dWFeTEodrs1%2BDdq6PQd7so23ZNXx0hDtNNs%2BGlsyRBp86QEfJi54hlwqyuIIygiA1QN6ETyLuGf46fCiDpZ1wQXuePro8TngCGfno%2BvWl6D0Fx%2BKtQpfABT0HYr2oS2EnMD%2BxwNlKx%2FK7ZUJ0%2F2fKzfsGTr5%2BSREh4poxBQm5nmdmfCLg0I4Qw%2FiZXnzTJOXblLpKNPEpYdJvsI7Bim3PkILdP2fZ0cOyZg0Bbv6bCqQY7nvpd4XWDvbPkP1Rd8RlYft%2Fd%2B3IpVuYdVeKEWl9PGziX5swCwFz2R0bKje9o7uTSnEEau3OL%2F0054hykccFh67wQrEPm6GNrPa23t7Q3hNzS7x1Z2reZXz438MNzA4L0GOqUBkaJKxPkKxAKkrXN6XAWSj6x3CA1EeBI4m2JR%2FBO0Vzbv68%2FcVGYmx2Cqn4S8PrQPgQMGsgPU0raf5DXHJ2Aiw6aJcesEP7uyPGIAepBK7SCeUNZlJzN1s0THxkEUlNoxNk4bzgLGD1JYy9u7MzyY4wBaj1oCyWKsEPOyi%2BQ15mGI6ORBdX4nqhh%2FITKuHv62hQ1b%2Fdqu9r%2Bc33QU3HG53DP2DxKN&X-Amz-Signature=474255e625b4473694a2d9136114eff3a943217320f4ab229860e8095b003541&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRZH434%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJElwTFrAznpuhZoJC%2BuYL7gfhsOVjc0V8T94kXZr6AiEAvPuvQWTPrnwHlMgd7VIBjXjJPvPS72UjZuvEetyVsGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW7PeNPTomTPWTCaSrcA1lQ0ORCEz%2BlnO8CWamItMqVLMzA7uMMGYMApkdXajXK6N6cNZvW7xXUaim%2F45OPyVlyWli%2FO1OV%2BLsGcY5w4giNPVjc6EBolH%2FX8xyL2hiNCrfqrmNL46T6%2Fu825C1jr%2Fa9Kj%2FBMjfby1MulGRGVfnEgS0vNDKOrmbNJxlo%2BtisYbN8jW52%2BRi8DXrEQXkezRs5vqME2de3LcCkAohZdHbUilV6NP%2BSsKLS93MRK532O9Zwb%2FRoWij3%2FAfhqMjG0pjxs%2B5yYqFaWyDT%2B4GC6dWFeTEodrs1%2BDdq6PQd7so23ZNXx0hDtNNs%2BGlsyRBp86QEfJi54hlwqyuIIygiA1QN6ETyLuGf46fCiDpZ1wQXuePro8TngCGfno%2BvWl6D0Fx%2BKtQpfABT0HYr2oS2EnMD%2BxwNlKx%2FK7ZUJ0%2F2fKzfsGTr5%2BSREh4poxBQm5nmdmfCLg0I4Qw%2FiZXnzTJOXblLpKNPEpYdJvsI7Bim3PkILdP2fZ0cOyZg0Bbv6bCqQY7nvpd4XWDvbPkP1Rd8RlYft%2Fd%2B3IpVuYdVeKEWl9PGziX5swCwFz2R0bKje9o7uTSnEEau3OL%2F0054hykccFh67wQrEPm6GNrPa23t7Q3hNzS7x1Z2reZXz438MNzA4L0GOqUBkaJKxPkKxAKkrXN6XAWSj6x3CA1EeBI4m2JR%2FBO0Vzbv68%2FcVGYmx2Cqn4S8PrQPgQMGsgPU0raf5DXHJ2Aiw6aJcesEP7uyPGIAepBK7SCeUNZlJzN1s0THxkEUlNoxNk4bzgLGD1JYy9u7MzyY4wBaj1oCyWKsEPOyi%2BQ15mGI6ORBdX4nqhh%2FITKuHv62hQ1b%2Fdqu9r%2Bc33QU3HG53DP2DxKN&X-Amz-Signature=d00cef2b84540ef0f5e953fd955b966eca9ea524c71c92388b3a5c56f22c32fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRZH434%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJElwTFrAznpuhZoJC%2BuYL7gfhsOVjc0V8T94kXZr6AiEAvPuvQWTPrnwHlMgd7VIBjXjJPvPS72UjZuvEetyVsGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW7PeNPTomTPWTCaSrcA1lQ0ORCEz%2BlnO8CWamItMqVLMzA7uMMGYMApkdXajXK6N6cNZvW7xXUaim%2F45OPyVlyWli%2FO1OV%2BLsGcY5w4giNPVjc6EBolH%2FX8xyL2hiNCrfqrmNL46T6%2Fu825C1jr%2Fa9Kj%2FBMjfby1MulGRGVfnEgS0vNDKOrmbNJxlo%2BtisYbN8jW52%2BRi8DXrEQXkezRs5vqME2de3LcCkAohZdHbUilV6NP%2BSsKLS93MRK532O9Zwb%2FRoWij3%2FAfhqMjG0pjxs%2B5yYqFaWyDT%2B4GC6dWFeTEodrs1%2BDdq6PQd7so23ZNXx0hDtNNs%2BGlsyRBp86QEfJi54hlwqyuIIygiA1QN6ETyLuGf46fCiDpZ1wQXuePro8TngCGfno%2BvWl6D0Fx%2BKtQpfABT0HYr2oS2EnMD%2BxwNlKx%2FK7ZUJ0%2F2fKzfsGTr5%2BSREh4poxBQm5nmdmfCLg0I4Qw%2FiZXnzTJOXblLpKNPEpYdJvsI7Bim3PkILdP2fZ0cOyZg0Bbv6bCqQY7nvpd4XWDvbPkP1Rd8RlYft%2Fd%2B3IpVuYdVeKEWl9PGziX5swCwFz2R0bKje9o7uTSnEEau3OL%2F0054hykccFh67wQrEPm6GNrPa23t7Q3hNzS7x1Z2reZXz438MNzA4L0GOqUBkaJKxPkKxAKkrXN6XAWSj6x3CA1EeBI4m2JR%2FBO0Vzbv68%2FcVGYmx2Cqn4S8PrQPgQMGsgPU0raf5DXHJ2Aiw6aJcesEP7uyPGIAepBK7SCeUNZlJzN1s0THxkEUlNoxNk4bzgLGD1JYy9u7MzyY4wBaj1oCyWKsEPOyi%2BQ15mGI6ORBdX4nqhh%2FITKuHv62hQ1b%2Fdqu9r%2Bc33QU3HG53DP2DxKN&X-Amz-Signature=d06e36416266335fe8d937a2e7aa1c8e5050ab807ea7ddec8edd6689734b8dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRZH434%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJElwTFrAznpuhZoJC%2BuYL7gfhsOVjc0V8T94kXZr6AiEAvPuvQWTPrnwHlMgd7VIBjXjJPvPS72UjZuvEetyVsGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW7PeNPTomTPWTCaSrcA1lQ0ORCEz%2BlnO8CWamItMqVLMzA7uMMGYMApkdXajXK6N6cNZvW7xXUaim%2F45OPyVlyWli%2FO1OV%2BLsGcY5w4giNPVjc6EBolH%2FX8xyL2hiNCrfqrmNL46T6%2Fu825C1jr%2Fa9Kj%2FBMjfby1MulGRGVfnEgS0vNDKOrmbNJxlo%2BtisYbN8jW52%2BRi8DXrEQXkezRs5vqME2de3LcCkAohZdHbUilV6NP%2BSsKLS93MRK532O9Zwb%2FRoWij3%2FAfhqMjG0pjxs%2B5yYqFaWyDT%2B4GC6dWFeTEodrs1%2BDdq6PQd7so23ZNXx0hDtNNs%2BGlsyRBp86QEfJi54hlwqyuIIygiA1QN6ETyLuGf46fCiDpZ1wQXuePro8TngCGfno%2BvWl6D0Fx%2BKtQpfABT0HYr2oS2EnMD%2BxwNlKx%2FK7ZUJ0%2F2fKzfsGTr5%2BSREh4poxBQm5nmdmfCLg0I4Qw%2FiZXnzTJOXblLpKNPEpYdJvsI7Bim3PkILdP2fZ0cOyZg0Bbv6bCqQY7nvpd4XWDvbPkP1Rd8RlYft%2Fd%2B3IpVuYdVeKEWl9PGziX5swCwFz2R0bKje9o7uTSnEEau3OL%2F0054hykccFh67wQrEPm6GNrPa23t7Q3hNzS7x1Z2reZXz438MNzA4L0GOqUBkaJKxPkKxAKkrXN6XAWSj6x3CA1EeBI4m2JR%2FBO0Vzbv68%2FcVGYmx2Cqn4S8PrQPgQMGsgPU0raf5DXHJ2Aiw6aJcesEP7uyPGIAepBK7SCeUNZlJzN1s0THxkEUlNoxNk4bzgLGD1JYy9u7MzyY4wBaj1oCyWKsEPOyi%2BQ15mGI6ORBdX4nqhh%2FITKuHv62hQ1b%2Fdqu9r%2Bc33QU3HG53DP2DxKN&X-Amz-Signature=759b0f163ad3e0848a0c9fdcce5f8f3d36d83af9fb8e4c46ce09c5497af764db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRZH434%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJElwTFrAznpuhZoJC%2BuYL7gfhsOVjc0V8T94kXZr6AiEAvPuvQWTPrnwHlMgd7VIBjXjJPvPS72UjZuvEetyVsGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW7PeNPTomTPWTCaSrcA1lQ0ORCEz%2BlnO8CWamItMqVLMzA7uMMGYMApkdXajXK6N6cNZvW7xXUaim%2F45OPyVlyWli%2FO1OV%2BLsGcY5w4giNPVjc6EBolH%2FX8xyL2hiNCrfqrmNL46T6%2Fu825C1jr%2Fa9Kj%2FBMjfby1MulGRGVfnEgS0vNDKOrmbNJxlo%2BtisYbN8jW52%2BRi8DXrEQXkezRs5vqME2de3LcCkAohZdHbUilV6NP%2BSsKLS93MRK532O9Zwb%2FRoWij3%2FAfhqMjG0pjxs%2B5yYqFaWyDT%2B4GC6dWFeTEodrs1%2BDdq6PQd7so23ZNXx0hDtNNs%2BGlsyRBp86QEfJi54hlwqyuIIygiA1QN6ETyLuGf46fCiDpZ1wQXuePro8TngCGfno%2BvWl6D0Fx%2BKtQpfABT0HYr2oS2EnMD%2BxwNlKx%2FK7ZUJ0%2F2fKzfsGTr5%2BSREh4poxBQm5nmdmfCLg0I4Qw%2FiZXnzTJOXblLpKNPEpYdJvsI7Bim3PkILdP2fZ0cOyZg0Bbv6bCqQY7nvpd4XWDvbPkP1Rd8RlYft%2Fd%2B3IpVuYdVeKEWl9PGziX5swCwFz2R0bKje9o7uTSnEEau3OL%2F0054hykccFh67wQrEPm6GNrPa23t7Q3hNzS7x1Z2reZXz438MNzA4L0GOqUBkaJKxPkKxAKkrXN6XAWSj6x3CA1EeBI4m2JR%2FBO0Vzbv68%2FcVGYmx2Cqn4S8PrQPgQMGsgPU0raf5DXHJ2Aiw6aJcesEP7uyPGIAepBK7SCeUNZlJzN1s0THxkEUlNoxNk4bzgLGD1JYy9u7MzyY4wBaj1oCyWKsEPOyi%2BQ15mGI6ORBdX4nqhh%2FITKuHv62hQ1b%2Fdqu9r%2Bc33QU3HG53DP2DxKN&X-Amz-Signature=7c5ae86ebb0acf62522451920ced77d7c83b125ece4acf13223131ea70e0e618&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRZH434%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJElwTFrAznpuhZoJC%2BuYL7gfhsOVjc0V8T94kXZr6AiEAvPuvQWTPrnwHlMgd7VIBjXjJPvPS72UjZuvEetyVsGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW7PeNPTomTPWTCaSrcA1lQ0ORCEz%2BlnO8CWamItMqVLMzA7uMMGYMApkdXajXK6N6cNZvW7xXUaim%2F45OPyVlyWli%2FO1OV%2BLsGcY5w4giNPVjc6EBolH%2FX8xyL2hiNCrfqrmNL46T6%2Fu825C1jr%2Fa9Kj%2FBMjfby1MulGRGVfnEgS0vNDKOrmbNJxlo%2BtisYbN8jW52%2BRi8DXrEQXkezRs5vqME2de3LcCkAohZdHbUilV6NP%2BSsKLS93MRK532O9Zwb%2FRoWij3%2FAfhqMjG0pjxs%2B5yYqFaWyDT%2B4GC6dWFeTEodrs1%2BDdq6PQd7so23ZNXx0hDtNNs%2BGlsyRBp86QEfJi54hlwqyuIIygiA1QN6ETyLuGf46fCiDpZ1wQXuePro8TngCGfno%2BvWl6D0Fx%2BKtQpfABT0HYr2oS2EnMD%2BxwNlKx%2FK7ZUJ0%2F2fKzfsGTr5%2BSREh4poxBQm5nmdmfCLg0I4Qw%2FiZXnzTJOXblLpKNPEpYdJvsI7Bim3PkILdP2fZ0cOyZg0Bbv6bCqQY7nvpd4XWDvbPkP1Rd8RlYft%2Fd%2B3IpVuYdVeKEWl9PGziX5swCwFz2R0bKje9o7uTSnEEau3OL%2F0054hykccFh67wQrEPm6GNrPa23t7Q3hNzS7x1Z2reZXz438MNzA4L0GOqUBkaJKxPkKxAKkrXN6XAWSj6x3CA1EeBI4m2JR%2FBO0Vzbv68%2FcVGYmx2Cqn4S8PrQPgQMGsgPU0raf5DXHJ2Aiw6aJcesEP7uyPGIAepBK7SCeUNZlJzN1s0THxkEUlNoxNk4bzgLGD1JYy9u7MzyY4wBaj1oCyWKsEPOyi%2BQ15mGI6ORBdX4nqhh%2FITKuHv62hQ1b%2Fdqu9r%2Bc33QU3HG53DP2DxKN&X-Amz-Signature=f39b5299cd5a3241c1cabb063a42e24bbe670cf8ca434617ae7355423477a366&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

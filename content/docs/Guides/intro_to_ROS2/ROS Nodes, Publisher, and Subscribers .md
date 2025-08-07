---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZOYS6N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGlF%2BQZedQmf3skwg1xeM3oAf%2F7%2B1XShsqTb%2BME4Br7FAiEApFMwTrz5%2FqYWeglNI4qOUlKCZIlvXFW6IMbA5xV9mUEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcR2PGaiA6F1IDlUCrcA%2BSTYWDT0k1KUaFMLmAksQ%2Fsai0TRTBmy%2Fy1OS6qgfsnoPA3%2FSiElAtlDd0T%2Bg%2Fqa64YrIl0VFVNYiBG71waO14Ee10OyB33PYHA%2FVFk%2B8u0cdurcNOuk5f%2B2IJ33ZJ2DHqn8q8yAmG3MKVP%2BxC8ipmvV5p%2BaY66JlWUSCiSC0Jl7j6PP9Iu8of4TZiyNC%2BNKWjysuyTo6to0GT4%2FGNTUUNN0Vg65O0Z8dSshHCy0UZOr6isDr7j0HXyvntoCO73YXDMbFOtsxxP9UNPDI%2BDSQyJNyCj4bukrMXB3Ny4iuPLFSnsMFeTAHIuSgWi9kbo2D1Wogb9zdoLZaTedi9%2BhZGX8OWZZo9Mrv9kZO4%2FPjq8T%2BCarRERaQHD5sGIjcSDs540RhcpULGQHjC%2Fh8XKkCTi6HWTGU5pyqLT3nQ833MmryjnL8p9UdFPGUUBYK2tZWF1TxbYZMUgw7eEmppzARqoDuXx0%2BuCDnlf%2B1XI8fjjB2AbatvnzrEF%2BOtU46wSdDp8iOtQalk%2ByHyy5MbpfYzuTrg%2FVGQcmZUyI76DnBPe%2FLZNoRaAb%2F8ZS9xZHU4kxVAdKd9F3UwpUVFO56l48r8v4H%2BPwYLOReOPjq%2B93YHp5QfH3kV6hzozG6MRMNXJ08QGOqUBcYlInNOn1ruanX9uS2vZQNkQU1xmTpws6XxAoKaMCYNaF36mQWbgazL%2BRf%2BcCqhy7lc1IeSeO7lS8xUVTVehonA%2FqZ1syzc%2Bb1i%2BFl5hKITob%2B%2FLsaxx5c6agQs%2F0I2FPtOcTfvN%2Fs182EKCcZegdMZEIPy0XLnDq9VlSJcx70UQh2kCCtmcJ8dqcPWO%2F5%2BoIqK2CcQjAnrJisv0QmwpuKTWahVT&X-Amz-Signature=c194a710bf5cb585ceb85b320d97cb592beb502d2a9bfefc21af5e4538128d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZOYS6N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGlF%2BQZedQmf3skwg1xeM3oAf%2F7%2B1XShsqTb%2BME4Br7FAiEApFMwTrz5%2FqYWeglNI4qOUlKCZIlvXFW6IMbA5xV9mUEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcR2PGaiA6F1IDlUCrcA%2BSTYWDT0k1KUaFMLmAksQ%2Fsai0TRTBmy%2Fy1OS6qgfsnoPA3%2FSiElAtlDd0T%2Bg%2Fqa64YrIl0VFVNYiBG71waO14Ee10OyB33PYHA%2FVFk%2B8u0cdurcNOuk5f%2B2IJ33ZJ2DHqn8q8yAmG3MKVP%2BxC8ipmvV5p%2BaY66JlWUSCiSC0Jl7j6PP9Iu8of4TZiyNC%2BNKWjysuyTo6to0GT4%2FGNTUUNN0Vg65O0Z8dSshHCy0UZOr6isDr7j0HXyvntoCO73YXDMbFOtsxxP9UNPDI%2BDSQyJNyCj4bukrMXB3Ny4iuPLFSnsMFeTAHIuSgWi9kbo2D1Wogb9zdoLZaTedi9%2BhZGX8OWZZo9Mrv9kZO4%2FPjq8T%2BCarRERaQHD5sGIjcSDs540RhcpULGQHjC%2Fh8XKkCTi6HWTGU5pyqLT3nQ833MmryjnL8p9UdFPGUUBYK2tZWF1TxbYZMUgw7eEmppzARqoDuXx0%2BuCDnlf%2B1XI8fjjB2AbatvnzrEF%2BOtU46wSdDp8iOtQalk%2ByHyy5MbpfYzuTrg%2FVGQcmZUyI76DnBPe%2FLZNoRaAb%2F8ZS9xZHU4kxVAdKd9F3UwpUVFO56l48r8v4H%2BPwYLOReOPjq%2B93YHp5QfH3kV6hzozG6MRMNXJ08QGOqUBcYlInNOn1ruanX9uS2vZQNkQU1xmTpws6XxAoKaMCYNaF36mQWbgazL%2BRf%2BcCqhy7lc1IeSeO7lS8xUVTVehonA%2FqZ1syzc%2Bb1i%2BFl5hKITob%2B%2FLsaxx5c6agQs%2F0I2FPtOcTfvN%2Fs182EKCcZegdMZEIPy0XLnDq9VlSJcx70UQh2kCCtmcJ8dqcPWO%2F5%2BoIqK2CcQjAnrJisv0QmwpuKTWahVT&X-Amz-Signature=65d7b418f723718422acad2a497e6b1fb5ada03084895b24a4616d3cc2f4dba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZOYS6N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGlF%2BQZedQmf3skwg1xeM3oAf%2F7%2B1XShsqTb%2BME4Br7FAiEApFMwTrz5%2FqYWeglNI4qOUlKCZIlvXFW6IMbA5xV9mUEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcR2PGaiA6F1IDlUCrcA%2BSTYWDT0k1KUaFMLmAksQ%2Fsai0TRTBmy%2Fy1OS6qgfsnoPA3%2FSiElAtlDd0T%2Bg%2Fqa64YrIl0VFVNYiBG71waO14Ee10OyB33PYHA%2FVFk%2B8u0cdurcNOuk5f%2B2IJ33ZJ2DHqn8q8yAmG3MKVP%2BxC8ipmvV5p%2BaY66JlWUSCiSC0Jl7j6PP9Iu8of4TZiyNC%2BNKWjysuyTo6to0GT4%2FGNTUUNN0Vg65O0Z8dSshHCy0UZOr6isDr7j0HXyvntoCO73YXDMbFOtsxxP9UNPDI%2BDSQyJNyCj4bukrMXB3Ny4iuPLFSnsMFeTAHIuSgWi9kbo2D1Wogb9zdoLZaTedi9%2BhZGX8OWZZo9Mrv9kZO4%2FPjq8T%2BCarRERaQHD5sGIjcSDs540RhcpULGQHjC%2Fh8XKkCTi6HWTGU5pyqLT3nQ833MmryjnL8p9UdFPGUUBYK2tZWF1TxbYZMUgw7eEmppzARqoDuXx0%2BuCDnlf%2B1XI8fjjB2AbatvnzrEF%2BOtU46wSdDp8iOtQalk%2ByHyy5MbpfYzuTrg%2FVGQcmZUyI76DnBPe%2FLZNoRaAb%2F8ZS9xZHU4kxVAdKd9F3UwpUVFO56l48r8v4H%2BPwYLOReOPjq%2B93YHp5QfH3kV6hzozG6MRMNXJ08QGOqUBcYlInNOn1ruanX9uS2vZQNkQU1xmTpws6XxAoKaMCYNaF36mQWbgazL%2BRf%2BcCqhy7lc1IeSeO7lS8xUVTVehonA%2FqZ1syzc%2Bb1i%2BFl5hKITob%2B%2FLsaxx5c6agQs%2F0I2FPtOcTfvN%2Fs182EKCcZegdMZEIPy0XLnDq9VlSJcx70UQh2kCCtmcJ8dqcPWO%2F5%2BoIqK2CcQjAnrJisv0QmwpuKTWahVT&X-Amz-Signature=ae854568b35de690e58a22970e54f8dc4f4aa598c6b40faad89dc1c1a4a30b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZOYS6N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGlF%2BQZedQmf3skwg1xeM3oAf%2F7%2B1XShsqTb%2BME4Br7FAiEApFMwTrz5%2FqYWeglNI4qOUlKCZIlvXFW6IMbA5xV9mUEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcR2PGaiA6F1IDlUCrcA%2BSTYWDT0k1KUaFMLmAksQ%2Fsai0TRTBmy%2Fy1OS6qgfsnoPA3%2FSiElAtlDd0T%2Bg%2Fqa64YrIl0VFVNYiBG71waO14Ee10OyB33PYHA%2FVFk%2B8u0cdurcNOuk5f%2B2IJ33ZJ2DHqn8q8yAmG3MKVP%2BxC8ipmvV5p%2BaY66JlWUSCiSC0Jl7j6PP9Iu8of4TZiyNC%2BNKWjysuyTo6to0GT4%2FGNTUUNN0Vg65O0Z8dSshHCy0UZOr6isDr7j0HXyvntoCO73YXDMbFOtsxxP9UNPDI%2BDSQyJNyCj4bukrMXB3Ny4iuPLFSnsMFeTAHIuSgWi9kbo2D1Wogb9zdoLZaTedi9%2BhZGX8OWZZo9Mrv9kZO4%2FPjq8T%2BCarRERaQHD5sGIjcSDs540RhcpULGQHjC%2Fh8XKkCTi6HWTGU5pyqLT3nQ833MmryjnL8p9UdFPGUUBYK2tZWF1TxbYZMUgw7eEmppzARqoDuXx0%2BuCDnlf%2B1XI8fjjB2AbatvnzrEF%2BOtU46wSdDp8iOtQalk%2ByHyy5MbpfYzuTrg%2FVGQcmZUyI76DnBPe%2FLZNoRaAb%2F8ZS9xZHU4kxVAdKd9F3UwpUVFO56l48r8v4H%2BPwYLOReOPjq%2B93YHp5QfH3kV6hzozG6MRMNXJ08QGOqUBcYlInNOn1ruanX9uS2vZQNkQU1xmTpws6XxAoKaMCYNaF36mQWbgazL%2BRf%2BcCqhy7lc1IeSeO7lS8xUVTVehonA%2FqZ1syzc%2Bb1i%2BFl5hKITob%2B%2FLsaxx5c6agQs%2F0I2FPtOcTfvN%2Fs182EKCcZegdMZEIPy0XLnDq9VlSJcx70UQh2kCCtmcJ8dqcPWO%2F5%2BoIqK2CcQjAnrJisv0QmwpuKTWahVT&X-Amz-Signature=6c43c9917345a95d012f28f6fa1bdc114fc70d4a3c65b3ced531f87bbb3521aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZOYS6N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGlF%2BQZedQmf3skwg1xeM3oAf%2F7%2B1XShsqTb%2BME4Br7FAiEApFMwTrz5%2FqYWeglNI4qOUlKCZIlvXFW6IMbA5xV9mUEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcR2PGaiA6F1IDlUCrcA%2BSTYWDT0k1KUaFMLmAksQ%2Fsai0TRTBmy%2Fy1OS6qgfsnoPA3%2FSiElAtlDd0T%2Bg%2Fqa64YrIl0VFVNYiBG71waO14Ee10OyB33PYHA%2FVFk%2B8u0cdurcNOuk5f%2B2IJ33ZJ2DHqn8q8yAmG3MKVP%2BxC8ipmvV5p%2BaY66JlWUSCiSC0Jl7j6PP9Iu8of4TZiyNC%2BNKWjysuyTo6to0GT4%2FGNTUUNN0Vg65O0Z8dSshHCy0UZOr6isDr7j0HXyvntoCO73YXDMbFOtsxxP9UNPDI%2BDSQyJNyCj4bukrMXB3Ny4iuPLFSnsMFeTAHIuSgWi9kbo2D1Wogb9zdoLZaTedi9%2BhZGX8OWZZo9Mrv9kZO4%2FPjq8T%2BCarRERaQHD5sGIjcSDs540RhcpULGQHjC%2Fh8XKkCTi6HWTGU5pyqLT3nQ833MmryjnL8p9UdFPGUUBYK2tZWF1TxbYZMUgw7eEmppzARqoDuXx0%2BuCDnlf%2B1XI8fjjB2AbatvnzrEF%2BOtU46wSdDp8iOtQalk%2ByHyy5MbpfYzuTrg%2FVGQcmZUyI76DnBPe%2FLZNoRaAb%2F8ZS9xZHU4kxVAdKd9F3UwpUVFO56l48r8v4H%2BPwYLOReOPjq%2B93YHp5QfH3kV6hzozG6MRMNXJ08QGOqUBcYlInNOn1ruanX9uS2vZQNkQU1xmTpws6XxAoKaMCYNaF36mQWbgazL%2BRf%2BcCqhy7lc1IeSeO7lS8xUVTVehonA%2FqZ1syzc%2Bb1i%2BFl5hKITob%2B%2FLsaxx5c6agQs%2F0I2FPtOcTfvN%2Fs182EKCcZegdMZEIPy0XLnDq9VlSJcx70UQh2kCCtmcJ8dqcPWO%2F5%2BoIqK2CcQjAnrJisv0QmwpuKTWahVT&X-Amz-Signature=272f11188fcfcda25a503da8ab3b1cb913a3e1c262fd2bd39c0997c1eaa7a8a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZOYS6N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGlF%2BQZedQmf3skwg1xeM3oAf%2F7%2B1XShsqTb%2BME4Br7FAiEApFMwTrz5%2FqYWeglNI4qOUlKCZIlvXFW6IMbA5xV9mUEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcR2PGaiA6F1IDlUCrcA%2BSTYWDT0k1KUaFMLmAksQ%2Fsai0TRTBmy%2Fy1OS6qgfsnoPA3%2FSiElAtlDd0T%2Bg%2Fqa64YrIl0VFVNYiBG71waO14Ee10OyB33PYHA%2FVFk%2B8u0cdurcNOuk5f%2B2IJ33ZJ2DHqn8q8yAmG3MKVP%2BxC8ipmvV5p%2BaY66JlWUSCiSC0Jl7j6PP9Iu8of4TZiyNC%2BNKWjysuyTo6to0GT4%2FGNTUUNN0Vg65O0Z8dSshHCy0UZOr6isDr7j0HXyvntoCO73YXDMbFOtsxxP9UNPDI%2BDSQyJNyCj4bukrMXB3Ny4iuPLFSnsMFeTAHIuSgWi9kbo2D1Wogb9zdoLZaTedi9%2BhZGX8OWZZo9Mrv9kZO4%2FPjq8T%2BCarRERaQHD5sGIjcSDs540RhcpULGQHjC%2Fh8XKkCTi6HWTGU5pyqLT3nQ833MmryjnL8p9UdFPGUUBYK2tZWF1TxbYZMUgw7eEmppzARqoDuXx0%2BuCDnlf%2B1XI8fjjB2AbatvnzrEF%2BOtU46wSdDp8iOtQalk%2ByHyy5MbpfYzuTrg%2FVGQcmZUyI76DnBPe%2FLZNoRaAb%2F8ZS9xZHU4kxVAdKd9F3UwpUVFO56l48r8v4H%2BPwYLOReOPjq%2B93YHp5QfH3kV6hzozG6MRMNXJ08QGOqUBcYlInNOn1ruanX9uS2vZQNkQU1xmTpws6XxAoKaMCYNaF36mQWbgazL%2BRf%2BcCqhy7lc1IeSeO7lS8xUVTVehonA%2FqZ1syzc%2Bb1i%2BFl5hKITob%2B%2FLsaxx5c6agQs%2F0I2FPtOcTfvN%2Fs182EKCcZegdMZEIPy0XLnDq9VlSJcx70UQh2kCCtmcJ8dqcPWO%2F5%2BoIqK2CcQjAnrJisv0QmwpuKTWahVT&X-Amz-Signature=617dcd5dd3622ecd230ac744b5de94c95096be9ddc9ee56f09ba4c0ee82c96cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZOYS6N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGlF%2BQZedQmf3skwg1xeM3oAf%2F7%2B1XShsqTb%2BME4Br7FAiEApFMwTrz5%2FqYWeglNI4qOUlKCZIlvXFW6IMbA5xV9mUEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcR2PGaiA6F1IDlUCrcA%2BSTYWDT0k1KUaFMLmAksQ%2Fsai0TRTBmy%2Fy1OS6qgfsnoPA3%2FSiElAtlDd0T%2Bg%2Fqa64YrIl0VFVNYiBG71waO14Ee10OyB33PYHA%2FVFk%2B8u0cdurcNOuk5f%2B2IJ33ZJ2DHqn8q8yAmG3MKVP%2BxC8ipmvV5p%2BaY66JlWUSCiSC0Jl7j6PP9Iu8of4TZiyNC%2BNKWjysuyTo6to0GT4%2FGNTUUNN0Vg65O0Z8dSshHCy0UZOr6isDr7j0HXyvntoCO73YXDMbFOtsxxP9UNPDI%2BDSQyJNyCj4bukrMXB3Ny4iuPLFSnsMFeTAHIuSgWi9kbo2D1Wogb9zdoLZaTedi9%2BhZGX8OWZZo9Mrv9kZO4%2FPjq8T%2BCarRERaQHD5sGIjcSDs540RhcpULGQHjC%2Fh8XKkCTi6HWTGU5pyqLT3nQ833MmryjnL8p9UdFPGUUBYK2tZWF1TxbYZMUgw7eEmppzARqoDuXx0%2BuCDnlf%2B1XI8fjjB2AbatvnzrEF%2BOtU46wSdDp8iOtQalk%2ByHyy5MbpfYzuTrg%2FVGQcmZUyI76DnBPe%2FLZNoRaAb%2F8ZS9xZHU4kxVAdKd9F3UwpUVFO56l48r8v4H%2BPwYLOReOPjq%2B93YHp5QfH3kV6hzozG6MRMNXJ08QGOqUBcYlInNOn1ruanX9uS2vZQNkQU1xmTpws6XxAoKaMCYNaF36mQWbgazL%2BRf%2BcCqhy7lc1IeSeO7lS8xUVTVehonA%2FqZ1syzc%2Bb1i%2BFl5hKITob%2B%2FLsaxx5c6agQs%2F0I2FPtOcTfvN%2Fs182EKCcZegdMZEIPy0XLnDq9VlSJcx70UQh2kCCtmcJ8dqcPWO%2F5%2BoIqK2CcQjAnrJisv0QmwpuKTWahVT&X-Amz-Signature=82f34ee3d1cc8f8824f108aac292ab9639fae4eb8a579520be3d482c3f25079d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZOYS6N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGlF%2BQZedQmf3skwg1xeM3oAf%2F7%2B1XShsqTb%2BME4Br7FAiEApFMwTrz5%2FqYWeglNI4qOUlKCZIlvXFW6IMbA5xV9mUEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcR2PGaiA6F1IDlUCrcA%2BSTYWDT0k1KUaFMLmAksQ%2Fsai0TRTBmy%2Fy1OS6qgfsnoPA3%2FSiElAtlDd0T%2Bg%2Fqa64YrIl0VFVNYiBG71waO14Ee10OyB33PYHA%2FVFk%2B8u0cdurcNOuk5f%2B2IJ33ZJ2DHqn8q8yAmG3MKVP%2BxC8ipmvV5p%2BaY66JlWUSCiSC0Jl7j6PP9Iu8of4TZiyNC%2BNKWjysuyTo6to0GT4%2FGNTUUNN0Vg65O0Z8dSshHCy0UZOr6isDr7j0HXyvntoCO73YXDMbFOtsxxP9UNPDI%2BDSQyJNyCj4bukrMXB3Ny4iuPLFSnsMFeTAHIuSgWi9kbo2D1Wogb9zdoLZaTedi9%2BhZGX8OWZZo9Mrv9kZO4%2FPjq8T%2BCarRERaQHD5sGIjcSDs540RhcpULGQHjC%2Fh8XKkCTi6HWTGU5pyqLT3nQ833MmryjnL8p9UdFPGUUBYK2tZWF1TxbYZMUgw7eEmppzARqoDuXx0%2BuCDnlf%2B1XI8fjjB2AbatvnzrEF%2BOtU46wSdDp8iOtQalk%2ByHyy5MbpfYzuTrg%2FVGQcmZUyI76DnBPe%2FLZNoRaAb%2F8ZS9xZHU4kxVAdKd9F3UwpUVFO56l48r8v4H%2BPwYLOReOPjq%2B93YHp5QfH3kV6hzozG6MRMNXJ08QGOqUBcYlInNOn1ruanX9uS2vZQNkQU1xmTpws6XxAoKaMCYNaF36mQWbgazL%2BRf%2BcCqhy7lc1IeSeO7lS8xUVTVehonA%2FqZ1syzc%2Bb1i%2BFl5hKITob%2B%2FLsaxx5c6agQs%2F0I2FPtOcTfvN%2Fs182EKCcZegdMZEIPy0XLnDq9VlSJcx70UQh2kCCtmcJ8dqcPWO%2F5%2BoIqK2CcQjAnrJisv0QmwpuKTWahVT&X-Amz-Signature=2031260ffc0c76f8e5fc524a7a79f184b9d503b696fbe9aff02fc37d9f54acd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

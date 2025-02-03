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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCWCLUC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr6QhLEefasaFbdWthXjfXsj53K2%2Btu2H7RS97%2BmUzNAiEA6oWi%2B32090iScx5bGyacGAKknrAgLjb2clw32hGk8Y0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEbeKp3mm8jZNnsypCrcA%2F1BiEuG5unp%2F5mtxOqJBRg2LFwtkuF35QmWP4nbi3CJ7dnHerVmkluZ3NeBj7GbtzSzDO2azVGLekQ6ZKtKRUVuva%2FdSaJSiTI9uHELXo5MvEAormn4eRHnyDJITmKVAlANWJ275FnO3BTrGtytxpZuZ0fVSmi9YPMLl3loOzzQVxZSo5OovxSezrtHOwwo1ha38rU1Ipy5oV6FStyq7Br1aCPWBT%2Bggs%2FaUoK%2FYQzyiOd%2B1Y9f5b2T1SegZf1g5uLkMAjNbHCWP1UFBP0H0DflO4QUvbr%2FasqysygS%2BSlwV0DE7WW3MUx3KkKfeVq9cZol8aPQLuTLREv9gFCDNZ4S%2Bc3owAEWfgsErdUfR1%2BtxzsvA7uy6X45HBQUSLq4lEmr3S%2B%2FUnVoQwHnrtToUfShOeazbSkwj8TDSKxPZVckT13BofEVVGf26RH%2FDg3Z5kGIyB%2BcO15FmZAYClWnPDr26ajyBbBM%2Fmf3czwtvYSG3Xk7lZ4eEFSbw2iLi3gJ8I4H7qBnJDCYr%2Fek9%2B%2Bi7ux2tZKgPdJuukA6iBc2i%2FWn%2FoBS04hpLRexCknI5K9wPjgXsIQvxJyTD2fQ54PStYFTmq%2Bw9k4am9oH3w3%2BxwfuH3YvF7FZlk83vUxQMJb0gb0GOqUBKF336fO2aPJoW3OVeboiZHPSZ%2FsuNrLBl%2FT79lSgGTErGt%2BK92wc2uAXp4AH7nTUCPqQQFqhuxbaf81OcU8swDcKQTnATevttqIdnLr1RvTCiIXfhTxiIa3U%2B%2FPjTJeuzWBM4FP%2B6LpbcJCJBAfdGACe%2B4kqgsKrfNyNtAHg5A7VKptXLe7BXFXgy%2FfHBu56S3jCasNWtbwkxmayaSuTKo8C5k1y&X-Amz-Signature=2fdf77d4560846d82547e35cc07201d98eedf60716d24702a3f94959f519f8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCWCLUC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr6QhLEefasaFbdWthXjfXsj53K2%2Btu2H7RS97%2BmUzNAiEA6oWi%2B32090iScx5bGyacGAKknrAgLjb2clw32hGk8Y0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEbeKp3mm8jZNnsypCrcA%2F1BiEuG5unp%2F5mtxOqJBRg2LFwtkuF35QmWP4nbi3CJ7dnHerVmkluZ3NeBj7GbtzSzDO2azVGLekQ6ZKtKRUVuva%2FdSaJSiTI9uHELXo5MvEAormn4eRHnyDJITmKVAlANWJ275FnO3BTrGtytxpZuZ0fVSmi9YPMLl3loOzzQVxZSo5OovxSezrtHOwwo1ha38rU1Ipy5oV6FStyq7Br1aCPWBT%2Bggs%2FaUoK%2FYQzyiOd%2B1Y9f5b2T1SegZf1g5uLkMAjNbHCWP1UFBP0H0DflO4QUvbr%2FasqysygS%2BSlwV0DE7WW3MUx3KkKfeVq9cZol8aPQLuTLREv9gFCDNZ4S%2Bc3owAEWfgsErdUfR1%2BtxzsvA7uy6X45HBQUSLq4lEmr3S%2B%2FUnVoQwHnrtToUfShOeazbSkwj8TDSKxPZVckT13BofEVVGf26RH%2FDg3Z5kGIyB%2BcO15FmZAYClWnPDr26ajyBbBM%2Fmf3czwtvYSG3Xk7lZ4eEFSbw2iLi3gJ8I4H7qBnJDCYr%2Fek9%2B%2Bi7ux2tZKgPdJuukA6iBc2i%2FWn%2FoBS04hpLRexCknI5K9wPjgXsIQvxJyTD2fQ54PStYFTmq%2Bw9k4am9oH3w3%2BxwfuH3YvF7FZlk83vUxQMJb0gb0GOqUBKF336fO2aPJoW3OVeboiZHPSZ%2FsuNrLBl%2FT79lSgGTErGt%2BK92wc2uAXp4AH7nTUCPqQQFqhuxbaf81OcU8swDcKQTnATevttqIdnLr1RvTCiIXfhTxiIa3U%2B%2FPjTJeuzWBM4FP%2B6LpbcJCJBAfdGACe%2B4kqgsKrfNyNtAHg5A7VKptXLe7BXFXgy%2FfHBu56S3jCasNWtbwkxmayaSuTKo8C5k1y&X-Amz-Signature=6ea9fc55af0a4a45a41df84869e80909385da585bf8d2d904b3d4b1a278213d9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCWCLUC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr6QhLEefasaFbdWthXjfXsj53K2%2Btu2H7RS97%2BmUzNAiEA6oWi%2B32090iScx5bGyacGAKknrAgLjb2clw32hGk8Y0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEbeKp3mm8jZNnsypCrcA%2F1BiEuG5unp%2F5mtxOqJBRg2LFwtkuF35QmWP4nbi3CJ7dnHerVmkluZ3NeBj7GbtzSzDO2azVGLekQ6ZKtKRUVuva%2FdSaJSiTI9uHELXo5MvEAormn4eRHnyDJITmKVAlANWJ275FnO3BTrGtytxpZuZ0fVSmi9YPMLl3loOzzQVxZSo5OovxSezrtHOwwo1ha38rU1Ipy5oV6FStyq7Br1aCPWBT%2Bggs%2FaUoK%2FYQzyiOd%2B1Y9f5b2T1SegZf1g5uLkMAjNbHCWP1UFBP0H0DflO4QUvbr%2FasqysygS%2BSlwV0DE7WW3MUx3KkKfeVq9cZol8aPQLuTLREv9gFCDNZ4S%2Bc3owAEWfgsErdUfR1%2BtxzsvA7uy6X45HBQUSLq4lEmr3S%2B%2FUnVoQwHnrtToUfShOeazbSkwj8TDSKxPZVckT13BofEVVGf26RH%2FDg3Z5kGIyB%2BcO15FmZAYClWnPDr26ajyBbBM%2Fmf3czwtvYSG3Xk7lZ4eEFSbw2iLi3gJ8I4H7qBnJDCYr%2Fek9%2B%2Bi7ux2tZKgPdJuukA6iBc2i%2FWn%2FoBS04hpLRexCknI5K9wPjgXsIQvxJyTD2fQ54PStYFTmq%2Bw9k4am9oH3w3%2BxwfuH3YvF7FZlk83vUxQMJb0gb0GOqUBKF336fO2aPJoW3OVeboiZHPSZ%2FsuNrLBl%2FT79lSgGTErGt%2BK92wc2uAXp4AH7nTUCPqQQFqhuxbaf81OcU8swDcKQTnATevttqIdnLr1RvTCiIXfhTxiIa3U%2B%2FPjTJeuzWBM4FP%2B6LpbcJCJBAfdGACe%2B4kqgsKrfNyNtAHg5A7VKptXLe7BXFXgy%2FfHBu56S3jCasNWtbwkxmayaSuTKo8C5k1y&X-Amz-Signature=846b8acbcbcd7396572165a20a68e3d6fa7e0a5465e66c98d8238a9a811a9518&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCWCLUC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr6QhLEefasaFbdWthXjfXsj53K2%2Btu2H7RS97%2BmUzNAiEA6oWi%2B32090iScx5bGyacGAKknrAgLjb2clw32hGk8Y0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEbeKp3mm8jZNnsypCrcA%2F1BiEuG5unp%2F5mtxOqJBRg2LFwtkuF35QmWP4nbi3CJ7dnHerVmkluZ3NeBj7GbtzSzDO2azVGLekQ6ZKtKRUVuva%2FdSaJSiTI9uHELXo5MvEAormn4eRHnyDJITmKVAlANWJ275FnO3BTrGtytxpZuZ0fVSmi9YPMLl3loOzzQVxZSo5OovxSezrtHOwwo1ha38rU1Ipy5oV6FStyq7Br1aCPWBT%2Bggs%2FaUoK%2FYQzyiOd%2B1Y9f5b2T1SegZf1g5uLkMAjNbHCWP1UFBP0H0DflO4QUvbr%2FasqysygS%2BSlwV0DE7WW3MUx3KkKfeVq9cZol8aPQLuTLREv9gFCDNZ4S%2Bc3owAEWfgsErdUfR1%2BtxzsvA7uy6X45HBQUSLq4lEmr3S%2B%2FUnVoQwHnrtToUfShOeazbSkwj8TDSKxPZVckT13BofEVVGf26RH%2FDg3Z5kGIyB%2BcO15FmZAYClWnPDr26ajyBbBM%2Fmf3czwtvYSG3Xk7lZ4eEFSbw2iLi3gJ8I4H7qBnJDCYr%2Fek9%2B%2Bi7ux2tZKgPdJuukA6iBc2i%2FWn%2FoBS04hpLRexCknI5K9wPjgXsIQvxJyTD2fQ54PStYFTmq%2Bw9k4am9oH3w3%2BxwfuH3YvF7FZlk83vUxQMJb0gb0GOqUBKF336fO2aPJoW3OVeboiZHPSZ%2FsuNrLBl%2FT79lSgGTErGt%2BK92wc2uAXp4AH7nTUCPqQQFqhuxbaf81OcU8swDcKQTnATevttqIdnLr1RvTCiIXfhTxiIa3U%2B%2FPjTJeuzWBM4FP%2B6LpbcJCJBAfdGACe%2B4kqgsKrfNyNtAHg5A7VKptXLe7BXFXgy%2FfHBu56S3jCasNWtbwkxmayaSuTKo8C5k1y&X-Amz-Signature=b42bd1cb20a4d80a61d6798bb5003e0bc0f2481e3d32e5465b908ea9e666c7e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCWCLUC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr6QhLEefasaFbdWthXjfXsj53K2%2Btu2H7RS97%2BmUzNAiEA6oWi%2B32090iScx5bGyacGAKknrAgLjb2clw32hGk8Y0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEbeKp3mm8jZNnsypCrcA%2F1BiEuG5unp%2F5mtxOqJBRg2LFwtkuF35QmWP4nbi3CJ7dnHerVmkluZ3NeBj7GbtzSzDO2azVGLekQ6ZKtKRUVuva%2FdSaJSiTI9uHELXo5MvEAormn4eRHnyDJITmKVAlANWJ275FnO3BTrGtytxpZuZ0fVSmi9YPMLl3loOzzQVxZSo5OovxSezrtHOwwo1ha38rU1Ipy5oV6FStyq7Br1aCPWBT%2Bggs%2FaUoK%2FYQzyiOd%2B1Y9f5b2T1SegZf1g5uLkMAjNbHCWP1UFBP0H0DflO4QUvbr%2FasqysygS%2BSlwV0DE7WW3MUx3KkKfeVq9cZol8aPQLuTLREv9gFCDNZ4S%2Bc3owAEWfgsErdUfR1%2BtxzsvA7uy6X45HBQUSLq4lEmr3S%2B%2FUnVoQwHnrtToUfShOeazbSkwj8TDSKxPZVckT13BofEVVGf26RH%2FDg3Z5kGIyB%2BcO15FmZAYClWnPDr26ajyBbBM%2Fmf3czwtvYSG3Xk7lZ4eEFSbw2iLi3gJ8I4H7qBnJDCYr%2Fek9%2B%2Bi7ux2tZKgPdJuukA6iBc2i%2FWn%2FoBS04hpLRexCknI5K9wPjgXsIQvxJyTD2fQ54PStYFTmq%2Bw9k4am9oH3w3%2BxwfuH3YvF7FZlk83vUxQMJb0gb0GOqUBKF336fO2aPJoW3OVeboiZHPSZ%2FsuNrLBl%2FT79lSgGTErGt%2BK92wc2uAXp4AH7nTUCPqQQFqhuxbaf81OcU8swDcKQTnATevttqIdnLr1RvTCiIXfhTxiIa3U%2B%2FPjTJeuzWBM4FP%2B6LpbcJCJBAfdGACe%2B4kqgsKrfNyNtAHg5A7VKptXLe7BXFXgy%2FfHBu56S3jCasNWtbwkxmayaSuTKo8C5k1y&X-Amz-Signature=f69e9d57f4dbe818f65d8277c0395899c2332bf916572b4132d5b1d799d84bae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCWCLUC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr6QhLEefasaFbdWthXjfXsj53K2%2Btu2H7RS97%2BmUzNAiEA6oWi%2B32090iScx5bGyacGAKknrAgLjb2clw32hGk8Y0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEbeKp3mm8jZNnsypCrcA%2F1BiEuG5unp%2F5mtxOqJBRg2LFwtkuF35QmWP4nbi3CJ7dnHerVmkluZ3NeBj7GbtzSzDO2azVGLekQ6ZKtKRUVuva%2FdSaJSiTI9uHELXo5MvEAormn4eRHnyDJITmKVAlANWJ275FnO3BTrGtytxpZuZ0fVSmi9YPMLl3loOzzQVxZSo5OovxSezrtHOwwo1ha38rU1Ipy5oV6FStyq7Br1aCPWBT%2Bggs%2FaUoK%2FYQzyiOd%2B1Y9f5b2T1SegZf1g5uLkMAjNbHCWP1UFBP0H0DflO4QUvbr%2FasqysygS%2BSlwV0DE7WW3MUx3KkKfeVq9cZol8aPQLuTLREv9gFCDNZ4S%2Bc3owAEWfgsErdUfR1%2BtxzsvA7uy6X45HBQUSLq4lEmr3S%2B%2FUnVoQwHnrtToUfShOeazbSkwj8TDSKxPZVckT13BofEVVGf26RH%2FDg3Z5kGIyB%2BcO15FmZAYClWnPDr26ajyBbBM%2Fmf3czwtvYSG3Xk7lZ4eEFSbw2iLi3gJ8I4H7qBnJDCYr%2Fek9%2B%2Bi7ux2tZKgPdJuukA6iBc2i%2FWn%2FoBS04hpLRexCknI5K9wPjgXsIQvxJyTD2fQ54PStYFTmq%2Bw9k4am9oH3w3%2BxwfuH3YvF7FZlk83vUxQMJb0gb0GOqUBKF336fO2aPJoW3OVeboiZHPSZ%2FsuNrLBl%2FT79lSgGTErGt%2BK92wc2uAXp4AH7nTUCPqQQFqhuxbaf81OcU8swDcKQTnATevttqIdnLr1RvTCiIXfhTxiIa3U%2B%2FPjTJeuzWBM4FP%2B6LpbcJCJBAfdGACe%2B4kqgsKrfNyNtAHg5A7VKptXLe7BXFXgy%2FfHBu56S3jCasNWtbwkxmayaSuTKo8C5k1y&X-Amz-Signature=eb56aaf3c4d79873701d68205ecd0226c2ab8d97407969ed9c240d9996328048&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCWCLUC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr6QhLEefasaFbdWthXjfXsj53K2%2Btu2H7RS97%2BmUzNAiEA6oWi%2B32090iScx5bGyacGAKknrAgLjb2clw32hGk8Y0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEbeKp3mm8jZNnsypCrcA%2F1BiEuG5unp%2F5mtxOqJBRg2LFwtkuF35QmWP4nbi3CJ7dnHerVmkluZ3NeBj7GbtzSzDO2azVGLekQ6ZKtKRUVuva%2FdSaJSiTI9uHELXo5MvEAormn4eRHnyDJITmKVAlANWJ275FnO3BTrGtytxpZuZ0fVSmi9YPMLl3loOzzQVxZSo5OovxSezrtHOwwo1ha38rU1Ipy5oV6FStyq7Br1aCPWBT%2Bggs%2FaUoK%2FYQzyiOd%2B1Y9f5b2T1SegZf1g5uLkMAjNbHCWP1UFBP0H0DflO4QUvbr%2FasqysygS%2BSlwV0DE7WW3MUx3KkKfeVq9cZol8aPQLuTLREv9gFCDNZ4S%2Bc3owAEWfgsErdUfR1%2BtxzsvA7uy6X45HBQUSLq4lEmr3S%2B%2FUnVoQwHnrtToUfShOeazbSkwj8TDSKxPZVckT13BofEVVGf26RH%2FDg3Z5kGIyB%2BcO15FmZAYClWnPDr26ajyBbBM%2Fmf3czwtvYSG3Xk7lZ4eEFSbw2iLi3gJ8I4H7qBnJDCYr%2Fek9%2B%2Bi7ux2tZKgPdJuukA6iBc2i%2FWn%2FoBS04hpLRexCknI5K9wPjgXsIQvxJyTD2fQ54PStYFTmq%2Bw9k4am9oH3w3%2BxwfuH3YvF7FZlk83vUxQMJb0gb0GOqUBKF336fO2aPJoW3OVeboiZHPSZ%2FsuNrLBl%2FT79lSgGTErGt%2BK92wc2uAXp4AH7nTUCPqQQFqhuxbaf81OcU8swDcKQTnATevttqIdnLr1RvTCiIXfhTxiIa3U%2B%2FPjTJeuzWBM4FP%2B6LpbcJCJBAfdGACe%2B4kqgsKrfNyNtAHg5A7VKptXLe7BXFXgy%2FfHBu56S3jCasNWtbwkxmayaSuTKo8C5k1y&X-Amz-Signature=64cbc9efa5f6a48ab2e55c3b3355df8027d5b9e3e0ddf5946cc233fb06055e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCWCLUC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr6QhLEefasaFbdWthXjfXsj53K2%2Btu2H7RS97%2BmUzNAiEA6oWi%2B32090iScx5bGyacGAKknrAgLjb2clw32hGk8Y0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEbeKp3mm8jZNnsypCrcA%2F1BiEuG5unp%2F5mtxOqJBRg2LFwtkuF35QmWP4nbi3CJ7dnHerVmkluZ3NeBj7GbtzSzDO2azVGLekQ6ZKtKRUVuva%2FdSaJSiTI9uHELXo5MvEAormn4eRHnyDJITmKVAlANWJ275FnO3BTrGtytxpZuZ0fVSmi9YPMLl3loOzzQVxZSo5OovxSezrtHOwwo1ha38rU1Ipy5oV6FStyq7Br1aCPWBT%2Bggs%2FaUoK%2FYQzyiOd%2B1Y9f5b2T1SegZf1g5uLkMAjNbHCWP1UFBP0H0DflO4QUvbr%2FasqysygS%2BSlwV0DE7WW3MUx3KkKfeVq9cZol8aPQLuTLREv9gFCDNZ4S%2Bc3owAEWfgsErdUfR1%2BtxzsvA7uy6X45HBQUSLq4lEmr3S%2B%2FUnVoQwHnrtToUfShOeazbSkwj8TDSKxPZVckT13BofEVVGf26RH%2FDg3Z5kGIyB%2BcO15FmZAYClWnPDr26ajyBbBM%2Fmf3czwtvYSG3Xk7lZ4eEFSbw2iLi3gJ8I4H7qBnJDCYr%2Fek9%2B%2Bi7ux2tZKgPdJuukA6iBc2i%2FWn%2FoBS04hpLRexCknI5K9wPjgXsIQvxJyTD2fQ54PStYFTmq%2Bw9k4am9oH3w3%2BxwfuH3YvF7FZlk83vUxQMJb0gb0GOqUBKF336fO2aPJoW3OVeboiZHPSZ%2FsuNrLBl%2FT79lSgGTErGt%2BK92wc2uAXp4AH7nTUCPqQQFqhuxbaf81OcU8swDcKQTnATevttqIdnLr1RvTCiIXfhTxiIa3U%2B%2FPjTJeuzWBM4FP%2B6LpbcJCJBAfdGACe%2B4kqgsKrfNyNtAHg5A7VKptXLe7BXFXgy%2FfHBu56S3jCasNWtbwkxmayaSuTKo8C5k1y&X-Amz-Signature=3ab580f83d4353255b09b15b5e29da9238e7736a0546517587bc3b45e4e5362b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4UP3HH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBE5f9iAbKG8VcMx497OZMzLx%2FB8x8DbscuRV57%2BvBRlAiEAutJ%2FTXCvT3OSYNDPjuq3ivFHo51k9yOBiG8buwSNqh0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4kSXsJDNV0lMzSaCrcA%2FgZvJNrDbqHMPq68NoKgNe1y3sXEEP0y1qcWTDQarmPM%2BL1ydRsizXOsrg0MCSVtSFucFV%2BfMj3v17%2Fs%2Fw0GEQLQVWfeb10Nqds8HZH3MxODA1HFhX%2B3kHhnoOtteN0z5d5K%2BErs0rzXAOTPUUKLPtEPAjOAo2rwjQ9mXC0N9cwt6v7jVI3w8e%2FIKRAZ50ygKxnfF%2BU0s1U8wJ1bIF5FXn7%2BPafyywn7CaFUI8E%2FZi8EyVoy%2FUmo7KXCw7e%2FDwGmCH8uEwvfWaRf4Yc4CvqryoI%2F%2FtWc%2FufHvxpqv00%2Bw4FpWFSdNNCGVKMpwvsXWa3E2c9%2F67ewcb9Qr1tMVuBsFSrQ%2FQQROMAg9NRVZFSguzZDyGB8IBV%2BXmYq6x1AZdFrCYV3VtmO0YFgdOAjCTK8I1H9iwoSm%2Bnqud9utFBwnyTQWQBaGq4HiGKoekSls7i6pQXWVdac6BI7%2B%2Bq4kkI9ShQVbah%2F8ei8Q3yXClVL1hCMpd5mB1zy3cqRmPd7%2FmqPGWiPLg%2FZ3QdsATjnnvWRB2WkFQqgm%2FLTmlmn5KUKsV8ZJ7Rc2KE8g8UX4ID5Kv%2FFmw3jb5pTb8i3tFeC2k5mHYnzhH53Emt8Jrhxm8zPqE1AapInMxj%2FGLQuljCMKCQir4GOqUBeXntUj9vJkb1ZlaenxTlVMqJsNwC%2FHvmaAXpaoB7tFh0jVI2IsOaJFkpjPeo1MuxbbxGi6YPIBSyFaDTVOLc20Uq8gw%2BD6FifQiDUDW8hKfiw%2BPD3BYF2p6WsruWtrjqC9%2BB%2FQmKM0kl5AdJno0dwUF1Kx5Q59f%2BeYeBrBtVTRRY7vEYtklifX5Hkymu%2Bs0ZWD67r8tmEC24ik%2Bd6f97jAzW8dkf&X-Amz-Signature=50cc3a23900bacb07c4147d16b5805c58f3c85b79cbf5afbefb9ed868c70374e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4UP3HH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBE5f9iAbKG8VcMx497OZMzLx%2FB8x8DbscuRV57%2BvBRlAiEAutJ%2FTXCvT3OSYNDPjuq3ivFHo51k9yOBiG8buwSNqh0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4kSXsJDNV0lMzSaCrcA%2FgZvJNrDbqHMPq68NoKgNe1y3sXEEP0y1qcWTDQarmPM%2BL1ydRsizXOsrg0MCSVtSFucFV%2BfMj3v17%2Fs%2Fw0GEQLQVWfeb10Nqds8HZH3MxODA1HFhX%2B3kHhnoOtteN0z5d5K%2BErs0rzXAOTPUUKLPtEPAjOAo2rwjQ9mXC0N9cwt6v7jVI3w8e%2FIKRAZ50ygKxnfF%2BU0s1U8wJ1bIF5FXn7%2BPafyywn7CaFUI8E%2FZi8EyVoy%2FUmo7KXCw7e%2FDwGmCH8uEwvfWaRf4Yc4CvqryoI%2F%2FtWc%2FufHvxpqv00%2Bw4FpWFSdNNCGVKMpwvsXWa3E2c9%2F67ewcb9Qr1tMVuBsFSrQ%2FQQROMAg9NRVZFSguzZDyGB8IBV%2BXmYq6x1AZdFrCYV3VtmO0YFgdOAjCTK8I1H9iwoSm%2Bnqud9utFBwnyTQWQBaGq4HiGKoekSls7i6pQXWVdac6BI7%2B%2Bq4kkI9ShQVbah%2F8ei8Q3yXClVL1hCMpd5mB1zy3cqRmPd7%2FmqPGWiPLg%2FZ3QdsATjnnvWRB2WkFQqgm%2FLTmlmn5KUKsV8ZJ7Rc2KE8g8UX4ID5Kv%2FFmw3jb5pTb8i3tFeC2k5mHYnzhH53Emt8Jrhxm8zPqE1AapInMxj%2FGLQuljCMKCQir4GOqUBeXntUj9vJkb1ZlaenxTlVMqJsNwC%2FHvmaAXpaoB7tFh0jVI2IsOaJFkpjPeo1MuxbbxGi6YPIBSyFaDTVOLc20Uq8gw%2BD6FifQiDUDW8hKfiw%2BPD3BYF2p6WsruWtrjqC9%2BB%2FQmKM0kl5AdJno0dwUF1Kx5Q59f%2BeYeBrBtVTRRY7vEYtklifX5Hkymu%2Bs0ZWD67r8tmEC24ik%2Bd6f97jAzW8dkf&X-Amz-Signature=a39a9fc9b269777f4e8d3a5fae02aff7ef3c9035ca1e5b88d83f64a67f2127f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4UP3HH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBE5f9iAbKG8VcMx497OZMzLx%2FB8x8DbscuRV57%2BvBRlAiEAutJ%2FTXCvT3OSYNDPjuq3ivFHo51k9yOBiG8buwSNqh0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4kSXsJDNV0lMzSaCrcA%2FgZvJNrDbqHMPq68NoKgNe1y3sXEEP0y1qcWTDQarmPM%2BL1ydRsizXOsrg0MCSVtSFucFV%2BfMj3v17%2Fs%2Fw0GEQLQVWfeb10Nqds8HZH3MxODA1HFhX%2B3kHhnoOtteN0z5d5K%2BErs0rzXAOTPUUKLPtEPAjOAo2rwjQ9mXC0N9cwt6v7jVI3w8e%2FIKRAZ50ygKxnfF%2BU0s1U8wJ1bIF5FXn7%2BPafyywn7CaFUI8E%2FZi8EyVoy%2FUmo7KXCw7e%2FDwGmCH8uEwvfWaRf4Yc4CvqryoI%2F%2FtWc%2FufHvxpqv00%2Bw4FpWFSdNNCGVKMpwvsXWa3E2c9%2F67ewcb9Qr1tMVuBsFSrQ%2FQQROMAg9NRVZFSguzZDyGB8IBV%2BXmYq6x1AZdFrCYV3VtmO0YFgdOAjCTK8I1H9iwoSm%2Bnqud9utFBwnyTQWQBaGq4HiGKoekSls7i6pQXWVdac6BI7%2B%2Bq4kkI9ShQVbah%2F8ei8Q3yXClVL1hCMpd5mB1zy3cqRmPd7%2FmqPGWiPLg%2FZ3QdsATjnnvWRB2WkFQqgm%2FLTmlmn5KUKsV8ZJ7Rc2KE8g8UX4ID5Kv%2FFmw3jb5pTb8i3tFeC2k5mHYnzhH53Emt8Jrhxm8zPqE1AapInMxj%2FGLQuljCMKCQir4GOqUBeXntUj9vJkb1ZlaenxTlVMqJsNwC%2FHvmaAXpaoB7tFh0jVI2IsOaJFkpjPeo1MuxbbxGi6YPIBSyFaDTVOLc20Uq8gw%2BD6FifQiDUDW8hKfiw%2BPD3BYF2p6WsruWtrjqC9%2BB%2FQmKM0kl5AdJno0dwUF1Kx5Q59f%2BeYeBrBtVTRRY7vEYtklifX5Hkymu%2Bs0ZWD67r8tmEC24ik%2Bd6f97jAzW8dkf&X-Amz-Signature=51a41e8b4a103430bcb75beec6cba420553b0a9c3746966f94c38e35a634a6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4UP3HH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBE5f9iAbKG8VcMx497OZMzLx%2FB8x8DbscuRV57%2BvBRlAiEAutJ%2FTXCvT3OSYNDPjuq3ivFHo51k9yOBiG8buwSNqh0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4kSXsJDNV0lMzSaCrcA%2FgZvJNrDbqHMPq68NoKgNe1y3sXEEP0y1qcWTDQarmPM%2BL1ydRsizXOsrg0MCSVtSFucFV%2BfMj3v17%2Fs%2Fw0GEQLQVWfeb10Nqds8HZH3MxODA1HFhX%2B3kHhnoOtteN0z5d5K%2BErs0rzXAOTPUUKLPtEPAjOAo2rwjQ9mXC0N9cwt6v7jVI3w8e%2FIKRAZ50ygKxnfF%2BU0s1U8wJ1bIF5FXn7%2BPafyywn7CaFUI8E%2FZi8EyVoy%2FUmo7KXCw7e%2FDwGmCH8uEwvfWaRf4Yc4CvqryoI%2F%2FtWc%2FufHvxpqv00%2Bw4FpWFSdNNCGVKMpwvsXWa3E2c9%2F67ewcb9Qr1tMVuBsFSrQ%2FQQROMAg9NRVZFSguzZDyGB8IBV%2BXmYq6x1AZdFrCYV3VtmO0YFgdOAjCTK8I1H9iwoSm%2Bnqud9utFBwnyTQWQBaGq4HiGKoekSls7i6pQXWVdac6BI7%2B%2Bq4kkI9ShQVbah%2F8ei8Q3yXClVL1hCMpd5mB1zy3cqRmPd7%2FmqPGWiPLg%2FZ3QdsATjnnvWRB2WkFQqgm%2FLTmlmn5KUKsV8ZJ7Rc2KE8g8UX4ID5Kv%2FFmw3jb5pTb8i3tFeC2k5mHYnzhH53Emt8Jrhxm8zPqE1AapInMxj%2FGLQuljCMKCQir4GOqUBeXntUj9vJkb1ZlaenxTlVMqJsNwC%2FHvmaAXpaoB7tFh0jVI2IsOaJFkpjPeo1MuxbbxGi6YPIBSyFaDTVOLc20Uq8gw%2BD6FifQiDUDW8hKfiw%2BPD3BYF2p6WsruWtrjqC9%2BB%2FQmKM0kl5AdJno0dwUF1Kx5Q59f%2BeYeBrBtVTRRY7vEYtklifX5Hkymu%2Bs0ZWD67r8tmEC24ik%2Bd6f97jAzW8dkf&X-Amz-Signature=34705688e37103cd0147bc7d3c1658ffd282b3a44845982a51bc01931662eac3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4UP3HH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBE5f9iAbKG8VcMx497OZMzLx%2FB8x8DbscuRV57%2BvBRlAiEAutJ%2FTXCvT3OSYNDPjuq3ivFHo51k9yOBiG8buwSNqh0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4kSXsJDNV0lMzSaCrcA%2FgZvJNrDbqHMPq68NoKgNe1y3sXEEP0y1qcWTDQarmPM%2BL1ydRsizXOsrg0MCSVtSFucFV%2BfMj3v17%2Fs%2Fw0GEQLQVWfeb10Nqds8HZH3MxODA1HFhX%2B3kHhnoOtteN0z5d5K%2BErs0rzXAOTPUUKLPtEPAjOAo2rwjQ9mXC0N9cwt6v7jVI3w8e%2FIKRAZ50ygKxnfF%2BU0s1U8wJ1bIF5FXn7%2BPafyywn7CaFUI8E%2FZi8EyVoy%2FUmo7KXCw7e%2FDwGmCH8uEwvfWaRf4Yc4CvqryoI%2F%2FtWc%2FufHvxpqv00%2Bw4FpWFSdNNCGVKMpwvsXWa3E2c9%2F67ewcb9Qr1tMVuBsFSrQ%2FQQROMAg9NRVZFSguzZDyGB8IBV%2BXmYq6x1AZdFrCYV3VtmO0YFgdOAjCTK8I1H9iwoSm%2Bnqud9utFBwnyTQWQBaGq4HiGKoekSls7i6pQXWVdac6BI7%2B%2Bq4kkI9ShQVbah%2F8ei8Q3yXClVL1hCMpd5mB1zy3cqRmPd7%2FmqPGWiPLg%2FZ3QdsATjnnvWRB2WkFQqgm%2FLTmlmn5KUKsV8ZJ7Rc2KE8g8UX4ID5Kv%2FFmw3jb5pTb8i3tFeC2k5mHYnzhH53Emt8Jrhxm8zPqE1AapInMxj%2FGLQuljCMKCQir4GOqUBeXntUj9vJkb1ZlaenxTlVMqJsNwC%2FHvmaAXpaoB7tFh0jVI2IsOaJFkpjPeo1MuxbbxGi6YPIBSyFaDTVOLc20Uq8gw%2BD6FifQiDUDW8hKfiw%2BPD3BYF2p6WsruWtrjqC9%2BB%2FQmKM0kl5AdJno0dwUF1Kx5Q59f%2BeYeBrBtVTRRY7vEYtklifX5Hkymu%2Bs0ZWD67r8tmEC24ik%2Bd6f97jAzW8dkf&X-Amz-Signature=220b448f1033ad354789c6e3fb8c3cb581cf19ccc901c9db1cd09becd30df205&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4UP3HH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBE5f9iAbKG8VcMx497OZMzLx%2FB8x8DbscuRV57%2BvBRlAiEAutJ%2FTXCvT3OSYNDPjuq3ivFHo51k9yOBiG8buwSNqh0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4kSXsJDNV0lMzSaCrcA%2FgZvJNrDbqHMPq68NoKgNe1y3sXEEP0y1qcWTDQarmPM%2BL1ydRsizXOsrg0MCSVtSFucFV%2BfMj3v17%2Fs%2Fw0GEQLQVWfeb10Nqds8HZH3MxODA1HFhX%2B3kHhnoOtteN0z5d5K%2BErs0rzXAOTPUUKLPtEPAjOAo2rwjQ9mXC0N9cwt6v7jVI3w8e%2FIKRAZ50ygKxnfF%2BU0s1U8wJ1bIF5FXn7%2BPafyywn7CaFUI8E%2FZi8EyVoy%2FUmo7KXCw7e%2FDwGmCH8uEwvfWaRf4Yc4CvqryoI%2F%2FtWc%2FufHvxpqv00%2Bw4FpWFSdNNCGVKMpwvsXWa3E2c9%2F67ewcb9Qr1tMVuBsFSrQ%2FQQROMAg9NRVZFSguzZDyGB8IBV%2BXmYq6x1AZdFrCYV3VtmO0YFgdOAjCTK8I1H9iwoSm%2Bnqud9utFBwnyTQWQBaGq4HiGKoekSls7i6pQXWVdac6BI7%2B%2Bq4kkI9ShQVbah%2F8ei8Q3yXClVL1hCMpd5mB1zy3cqRmPd7%2FmqPGWiPLg%2FZ3QdsATjnnvWRB2WkFQqgm%2FLTmlmn5KUKsV8ZJ7Rc2KE8g8UX4ID5Kv%2FFmw3jb5pTb8i3tFeC2k5mHYnzhH53Emt8Jrhxm8zPqE1AapInMxj%2FGLQuljCMKCQir4GOqUBeXntUj9vJkb1ZlaenxTlVMqJsNwC%2FHvmaAXpaoB7tFh0jVI2IsOaJFkpjPeo1MuxbbxGi6YPIBSyFaDTVOLc20Uq8gw%2BD6FifQiDUDW8hKfiw%2BPD3BYF2p6WsruWtrjqC9%2BB%2FQmKM0kl5AdJno0dwUF1Kx5Q59f%2BeYeBrBtVTRRY7vEYtklifX5Hkymu%2Bs0ZWD67r8tmEC24ik%2Bd6f97jAzW8dkf&X-Amz-Signature=46fea6508dd8a2516f8e3c34dca2bcc93ccba73751a54bd60bf1200eeb8a8e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4UP3HH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBE5f9iAbKG8VcMx497OZMzLx%2FB8x8DbscuRV57%2BvBRlAiEAutJ%2FTXCvT3OSYNDPjuq3ivFHo51k9yOBiG8buwSNqh0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4kSXsJDNV0lMzSaCrcA%2FgZvJNrDbqHMPq68NoKgNe1y3sXEEP0y1qcWTDQarmPM%2BL1ydRsizXOsrg0MCSVtSFucFV%2BfMj3v17%2Fs%2Fw0GEQLQVWfeb10Nqds8HZH3MxODA1HFhX%2B3kHhnoOtteN0z5d5K%2BErs0rzXAOTPUUKLPtEPAjOAo2rwjQ9mXC0N9cwt6v7jVI3w8e%2FIKRAZ50ygKxnfF%2BU0s1U8wJ1bIF5FXn7%2BPafyywn7CaFUI8E%2FZi8EyVoy%2FUmo7KXCw7e%2FDwGmCH8uEwvfWaRf4Yc4CvqryoI%2F%2FtWc%2FufHvxpqv00%2Bw4FpWFSdNNCGVKMpwvsXWa3E2c9%2F67ewcb9Qr1tMVuBsFSrQ%2FQQROMAg9NRVZFSguzZDyGB8IBV%2BXmYq6x1AZdFrCYV3VtmO0YFgdOAjCTK8I1H9iwoSm%2Bnqud9utFBwnyTQWQBaGq4HiGKoekSls7i6pQXWVdac6BI7%2B%2Bq4kkI9ShQVbah%2F8ei8Q3yXClVL1hCMpd5mB1zy3cqRmPd7%2FmqPGWiPLg%2FZ3QdsATjnnvWRB2WkFQqgm%2FLTmlmn5KUKsV8ZJ7Rc2KE8g8UX4ID5Kv%2FFmw3jb5pTb8i3tFeC2k5mHYnzhH53Emt8Jrhxm8zPqE1AapInMxj%2FGLQuljCMKCQir4GOqUBeXntUj9vJkb1ZlaenxTlVMqJsNwC%2FHvmaAXpaoB7tFh0jVI2IsOaJFkpjPeo1MuxbbxGi6YPIBSyFaDTVOLc20Uq8gw%2BD6FifQiDUDW8hKfiw%2BPD3BYF2p6WsruWtrjqC9%2BB%2FQmKM0kl5AdJno0dwUF1Kx5Q59f%2BeYeBrBtVTRRY7vEYtklifX5Hkymu%2Bs0ZWD67r8tmEC24ik%2Bd6f97jAzW8dkf&X-Amz-Signature=061828c78eb58471b6861d415c8837dff6f78557887b6cad51aa3cfc31b9c1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4UP3HH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBE5f9iAbKG8VcMx497OZMzLx%2FB8x8DbscuRV57%2BvBRlAiEAutJ%2FTXCvT3OSYNDPjuq3ivFHo51k9yOBiG8buwSNqh0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4kSXsJDNV0lMzSaCrcA%2FgZvJNrDbqHMPq68NoKgNe1y3sXEEP0y1qcWTDQarmPM%2BL1ydRsizXOsrg0MCSVtSFucFV%2BfMj3v17%2Fs%2Fw0GEQLQVWfeb10Nqds8HZH3MxODA1HFhX%2B3kHhnoOtteN0z5d5K%2BErs0rzXAOTPUUKLPtEPAjOAo2rwjQ9mXC0N9cwt6v7jVI3w8e%2FIKRAZ50ygKxnfF%2BU0s1U8wJ1bIF5FXn7%2BPafyywn7CaFUI8E%2FZi8EyVoy%2FUmo7KXCw7e%2FDwGmCH8uEwvfWaRf4Yc4CvqryoI%2F%2FtWc%2FufHvxpqv00%2Bw4FpWFSdNNCGVKMpwvsXWa3E2c9%2F67ewcb9Qr1tMVuBsFSrQ%2FQQROMAg9NRVZFSguzZDyGB8IBV%2BXmYq6x1AZdFrCYV3VtmO0YFgdOAjCTK8I1H9iwoSm%2Bnqud9utFBwnyTQWQBaGq4HiGKoekSls7i6pQXWVdac6BI7%2B%2Bq4kkI9ShQVbah%2F8ei8Q3yXClVL1hCMpd5mB1zy3cqRmPd7%2FmqPGWiPLg%2FZ3QdsATjnnvWRB2WkFQqgm%2FLTmlmn5KUKsV8ZJ7Rc2KE8g8UX4ID5Kv%2FFmw3jb5pTb8i3tFeC2k5mHYnzhH53Emt8Jrhxm8zPqE1AapInMxj%2FGLQuljCMKCQir4GOqUBeXntUj9vJkb1ZlaenxTlVMqJsNwC%2FHvmaAXpaoB7tFh0jVI2IsOaJFkpjPeo1MuxbbxGi6YPIBSyFaDTVOLc20Uq8gw%2BD6FifQiDUDW8hKfiw%2BPD3BYF2p6WsruWtrjqC9%2BB%2FQmKM0kl5AdJno0dwUF1Kx5Q59f%2BeYeBrBtVTRRY7vEYtklifX5Hkymu%2Bs0ZWD67r8tmEC24ik%2Bd6f97jAzW8dkf&X-Amz-Signature=92e0268ab01836f93494a8f1f3d462cb6ceda7ee0b98b9f81c666b4e8de74348&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

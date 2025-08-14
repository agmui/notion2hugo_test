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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPY3FMG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy96xjGDeV8Qbh5x21foROC8u4p9xFeMlnl02soF%2FmggIgc3KnMOi7W962BmyvNx0rfA4%2B4ptcxijMjs0JYCfPIEAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNPAai4TJjFWoIjVRSrcA%2F2BAxNa66Ze9jXIfjza6LRIIIt2YZvmBBXEw41Hsp6pQ2PMvIR5QqMIPstQdrZOIJsFzZqqboQY6FNgVFZwoCpcdsASmH4XSQq0y4WZmKbPDoR04V5jjF2V%2Fy8mV4oAOPDVOO%2BcCi9ZSYyXH1WNGw0W1tbZgRR6s%2Bf7Et2PZUBdYQa%2BSd4whObtDYRuAYASL4sQOCfKasR2MWz2osbjftngMtGR4zR5IwrlhyTU%2F18owmWnIkrJVtZ2RcDClPSFy91vW9hzSdd6XnASxCRg1SFJxvX2flW6Ki%2B8R%2Bdqhc9Xc0vF8o%2Fc0udmZSF2mdTKL2gFfqS8f46igEFHWeyZxV7darsKc%2FaIuUAy3vXYmF%2FlUV7cwPYVmkeEG8eSlvXuYs1o38ovGCn8qGyvZI3bk7yewN%2FYnSMu6plSaIQrRyXZZNRrxOjumu5%2BbXdqylzw7bqkVRfQCBQ2yF%2F4nHwI0IWIsljdvwxheHh7g%2B8uHMj6Y5zn7B6eKMwx96tjcwS4BEwtMcwt96J%2F5PA6D13hpUPVcOs8Y9lcdIrV%2FIxT84F9aIqgytKygqmRLNtr3GM5rDlrLCqSO5CMEAGRUrhY9CL62nAl070napR0fJOSGxmrN1svc4fO6BmqBC3jMNOJ9sQGOqUBxlEp7KGqLk8koNIGnIdxYOid1NYgh5b6ekIW%2FMT1sRqU0978aP0TshIlglvWA1%2BogtFICRth653J%2Fwrpx7A5V7LhNIlbU4aJ4O1tpT2AnxMzxesrDDiYRhz0S08%2FWw0UQEvK%2BjEOVoq9Jv8or%2FTHJEnXXRIPyTChfCDzq8ppkLYivtulZIHYIeHXIVOxeHX0HCCWYdMUfedJ4hbgMVXaAJnTSrks&X-Amz-Signature=2d63e879c0cf73346c693ddf8140f33de3cd617cf603ca7f24bffab873b3e0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPY3FMG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy96xjGDeV8Qbh5x21foROC8u4p9xFeMlnl02soF%2FmggIgc3KnMOi7W962BmyvNx0rfA4%2B4ptcxijMjs0JYCfPIEAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNPAai4TJjFWoIjVRSrcA%2F2BAxNa66Ze9jXIfjza6LRIIIt2YZvmBBXEw41Hsp6pQ2PMvIR5QqMIPstQdrZOIJsFzZqqboQY6FNgVFZwoCpcdsASmH4XSQq0y4WZmKbPDoR04V5jjF2V%2Fy8mV4oAOPDVOO%2BcCi9ZSYyXH1WNGw0W1tbZgRR6s%2Bf7Et2PZUBdYQa%2BSd4whObtDYRuAYASL4sQOCfKasR2MWz2osbjftngMtGR4zR5IwrlhyTU%2F18owmWnIkrJVtZ2RcDClPSFy91vW9hzSdd6XnASxCRg1SFJxvX2flW6Ki%2B8R%2Bdqhc9Xc0vF8o%2Fc0udmZSF2mdTKL2gFfqS8f46igEFHWeyZxV7darsKc%2FaIuUAy3vXYmF%2FlUV7cwPYVmkeEG8eSlvXuYs1o38ovGCn8qGyvZI3bk7yewN%2FYnSMu6plSaIQrRyXZZNRrxOjumu5%2BbXdqylzw7bqkVRfQCBQ2yF%2F4nHwI0IWIsljdvwxheHh7g%2B8uHMj6Y5zn7B6eKMwx96tjcwS4BEwtMcwt96J%2F5PA6D13hpUPVcOs8Y9lcdIrV%2FIxT84F9aIqgytKygqmRLNtr3GM5rDlrLCqSO5CMEAGRUrhY9CL62nAl070napR0fJOSGxmrN1svc4fO6BmqBC3jMNOJ9sQGOqUBxlEp7KGqLk8koNIGnIdxYOid1NYgh5b6ekIW%2FMT1sRqU0978aP0TshIlglvWA1%2BogtFICRth653J%2Fwrpx7A5V7LhNIlbU4aJ4O1tpT2AnxMzxesrDDiYRhz0S08%2FWw0UQEvK%2BjEOVoq9Jv8or%2FTHJEnXXRIPyTChfCDzq8ppkLYivtulZIHYIeHXIVOxeHX0HCCWYdMUfedJ4hbgMVXaAJnTSrks&X-Amz-Signature=6bc72ea30095c78739542b44b7a97362ca783171a5ebd517443a55de247f24d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPY3FMG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy96xjGDeV8Qbh5x21foROC8u4p9xFeMlnl02soF%2FmggIgc3KnMOi7W962BmyvNx0rfA4%2B4ptcxijMjs0JYCfPIEAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNPAai4TJjFWoIjVRSrcA%2F2BAxNa66Ze9jXIfjza6LRIIIt2YZvmBBXEw41Hsp6pQ2PMvIR5QqMIPstQdrZOIJsFzZqqboQY6FNgVFZwoCpcdsASmH4XSQq0y4WZmKbPDoR04V5jjF2V%2Fy8mV4oAOPDVOO%2BcCi9ZSYyXH1WNGw0W1tbZgRR6s%2Bf7Et2PZUBdYQa%2BSd4whObtDYRuAYASL4sQOCfKasR2MWz2osbjftngMtGR4zR5IwrlhyTU%2F18owmWnIkrJVtZ2RcDClPSFy91vW9hzSdd6XnASxCRg1SFJxvX2flW6Ki%2B8R%2Bdqhc9Xc0vF8o%2Fc0udmZSF2mdTKL2gFfqS8f46igEFHWeyZxV7darsKc%2FaIuUAy3vXYmF%2FlUV7cwPYVmkeEG8eSlvXuYs1o38ovGCn8qGyvZI3bk7yewN%2FYnSMu6plSaIQrRyXZZNRrxOjumu5%2BbXdqylzw7bqkVRfQCBQ2yF%2F4nHwI0IWIsljdvwxheHh7g%2B8uHMj6Y5zn7B6eKMwx96tjcwS4BEwtMcwt96J%2F5PA6D13hpUPVcOs8Y9lcdIrV%2FIxT84F9aIqgytKygqmRLNtr3GM5rDlrLCqSO5CMEAGRUrhY9CL62nAl070napR0fJOSGxmrN1svc4fO6BmqBC3jMNOJ9sQGOqUBxlEp7KGqLk8koNIGnIdxYOid1NYgh5b6ekIW%2FMT1sRqU0978aP0TshIlglvWA1%2BogtFICRth653J%2Fwrpx7A5V7LhNIlbU4aJ4O1tpT2AnxMzxesrDDiYRhz0S08%2FWw0UQEvK%2BjEOVoq9Jv8or%2FTHJEnXXRIPyTChfCDzq8ppkLYivtulZIHYIeHXIVOxeHX0HCCWYdMUfedJ4hbgMVXaAJnTSrks&X-Amz-Signature=7eb9f8d0a730681fa80bb69a311d0fd75b81b2c5f0aae579ec7cfc20931b100f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPY3FMG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy96xjGDeV8Qbh5x21foROC8u4p9xFeMlnl02soF%2FmggIgc3KnMOi7W962BmyvNx0rfA4%2B4ptcxijMjs0JYCfPIEAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNPAai4TJjFWoIjVRSrcA%2F2BAxNa66Ze9jXIfjza6LRIIIt2YZvmBBXEw41Hsp6pQ2PMvIR5QqMIPstQdrZOIJsFzZqqboQY6FNgVFZwoCpcdsASmH4XSQq0y4WZmKbPDoR04V5jjF2V%2Fy8mV4oAOPDVOO%2BcCi9ZSYyXH1WNGw0W1tbZgRR6s%2Bf7Et2PZUBdYQa%2BSd4whObtDYRuAYASL4sQOCfKasR2MWz2osbjftngMtGR4zR5IwrlhyTU%2F18owmWnIkrJVtZ2RcDClPSFy91vW9hzSdd6XnASxCRg1SFJxvX2flW6Ki%2B8R%2Bdqhc9Xc0vF8o%2Fc0udmZSF2mdTKL2gFfqS8f46igEFHWeyZxV7darsKc%2FaIuUAy3vXYmF%2FlUV7cwPYVmkeEG8eSlvXuYs1o38ovGCn8qGyvZI3bk7yewN%2FYnSMu6plSaIQrRyXZZNRrxOjumu5%2BbXdqylzw7bqkVRfQCBQ2yF%2F4nHwI0IWIsljdvwxheHh7g%2B8uHMj6Y5zn7B6eKMwx96tjcwS4BEwtMcwt96J%2F5PA6D13hpUPVcOs8Y9lcdIrV%2FIxT84F9aIqgytKygqmRLNtr3GM5rDlrLCqSO5CMEAGRUrhY9CL62nAl070napR0fJOSGxmrN1svc4fO6BmqBC3jMNOJ9sQGOqUBxlEp7KGqLk8koNIGnIdxYOid1NYgh5b6ekIW%2FMT1sRqU0978aP0TshIlglvWA1%2BogtFICRth653J%2Fwrpx7A5V7LhNIlbU4aJ4O1tpT2AnxMzxesrDDiYRhz0S08%2FWw0UQEvK%2BjEOVoq9Jv8or%2FTHJEnXXRIPyTChfCDzq8ppkLYivtulZIHYIeHXIVOxeHX0HCCWYdMUfedJ4hbgMVXaAJnTSrks&X-Amz-Signature=27894aa959cb0ba303a3004d87204f99035fc4da8919864f38ba569b91367de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPY3FMG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy96xjGDeV8Qbh5x21foROC8u4p9xFeMlnl02soF%2FmggIgc3KnMOi7W962BmyvNx0rfA4%2B4ptcxijMjs0JYCfPIEAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNPAai4TJjFWoIjVRSrcA%2F2BAxNa66Ze9jXIfjza6LRIIIt2YZvmBBXEw41Hsp6pQ2PMvIR5QqMIPstQdrZOIJsFzZqqboQY6FNgVFZwoCpcdsASmH4XSQq0y4WZmKbPDoR04V5jjF2V%2Fy8mV4oAOPDVOO%2BcCi9ZSYyXH1WNGw0W1tbZgRR6s%2Bf7Et2PZUBdYQa%2BSd4whObtDYRuAYASL4sQOCfKasR2MWz2osbjftngMtGR4zR5IwrlhyTU%2F18owmWnIkrJVtZ2RcDClPSFy91vW9hzSdd6XnASxCRg1SFJxvX2flW6Ki%2B8R%2Bdqhc9Xc0vF8o%2Fc0udmZSF2mdTKL2gFfqS8f46igEFHWeyZxV7darsKc%2FaIuUAy3vXYmF%2FlUV7cwPYVmkeEG8eSlvXuYs1o38ovGCn8qGyvZI3bk7yewN%2FYnSMu6plSaIQrRyXZZNRrxOjumu5%2BbXdqylzw7bqkVRfQCBQ2yF%2F4nHwI0IWIsljdvwxheHh7g%2B8uHMj6Y5zn7B6eKMwx96tjcwS4BEwtMcwt96J%2F5PA6D13hpUPVcOs8Y9lcdIrV%2FIxT84F9aIqgytKygqmRLNtr3GM5rDlrLCqSO5CMEAGRUrhY9CL62nAl070napR0fJOSGxmrN1svc4fO6BmqBC3jMNOJ9sQGOqUBxlEp7KGqLk8koNIGnIdxYOid1NYgh5b6ekIW%2FMT1sRqU0978aP0TshIlglvWA1%2BogtFICRth653J%2Fwrpx7A5V7LhNIlbU4aJ4O1tpT2AnxMzxesrDDiYRhz0S08%2FWw0UQEvK%2BjEOVoq9Jv8or%2FTHJEnXXRIPyTChfCDzq8ppkLYivtulZIHYIeHXIVOxeHX0HCCWYdMUfedJ4hbgMVXaAJnTSrks&X-Amz-Signature=8c40d8975f9e51c0c904a181f864590fed4afc4804b109d0eab12c35486803b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPY3FMG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy96xjGDeV8Qbh5x21foROC8u4p9xFeMlnl02soF%2FmggIgc3KnMOi7W962BmyvNx0rfA4%2B4ptcxijMjs0JYCfPIEAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNPAai4TJjFWoIjVRSrcA%2F2BAxNa66Ze9jXIfjza6LRIIIt2YZvmBBXEw41Hsp6pQ2PMvIR5QqMIPstQdrZOIJsFzZqqboQY6FNgVFZwoCpcdsASmH4XSQq0y4WZmKbPDoR04V5jjF2V%2Fy8mV4oAOPDVOO%2BcCi9ZSYyXH1WNGw0W1tbZgRR6s%2Bf7Et2PZUBdYQa%2BSd4whObtDYRuAYASL4sQOCfKasR2MWz2osbjftngMtGR4zR5IwrlhyTU%2F18owmWnIkrJVtZ2RcDClPSFy91vW9hzSdd6XnASxCRg1SFJxvX2flW6Ki%2B8R%2Bdqhc9Xc0vF8o%2Fc0udmZSF2mdTKL2gFfqS8f46igEFHWeyZxV7darsKc%2FaIuUAy3vXYmF%2FlUV7cwPYVmkeEG8eSlvXuYs1o38ovGCn8qGyvZI3bk7yewN%2FYnSMu6plSaIQrRyXZZNRrxOjumu5%2BbXdqylzw7bqkVRfQCBQ2yF%2F4nHwI0IWIsljdvwxheHh7g%2B8uHMj6Y5zn7B6eKMwx96tjcwS4BEwtMcwt96J%2F5PA6D13hpUPVcOs8Y9lcdIrV%2FIxT84F9aIqgytKygqmRLNtr3GM5rDlrLCqSO5CMEAGRUrhY9CL62nAl070napR0fJOSGxmrN1svc4fO6BmqBC3jMNOJ9sQGOqUBxlEp7KGqLk8koNIGnIdxYOid1NYgh5b6ekIW%2FMT1sRqU0978aP0TshIlglvWA1%2BogtFICRth653J%2Fwrpx7A5V7LhNIlbU4aJ4O1tpT2AnxMzxesrDDiYRhz0S08%2FWw0UQEvK%2BjEOVoq9Jv8or%2FTHJEnXXRIPyTChfCDzq8ppkLYivtulZIHYIeHXIVOxeHX0HCCWYdMUfedJ4hbgMVXaAJnTSrks&X-Amz-Signature=301720fb4980299b5a2a13cda5d0e724952f40d77fbf8d1c4c964b9a4418dce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPY3FMG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy96xjGDeV8Qbh5x21foROC8u4p9xFeMlnl02soF%2FmggIgc3KnMOi7W962BmyvNx0rfA4%2B4ptcxijMjs0JYCfPIEAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNPAai4TJjFWoIjVRSrcA%2F2BAxNa66Ze9jXIfjza6LRIIIt2YZvmBBXEw41Hsp6pQ2PMvIR5QqMIPstQdrZOIJsFzZqqboQY6FNgVFZwoCpcdsASmH4XSQq0y4WZmKbPDoR04V5jjF2V%2Fy8mV4oAOPDVOO%2BcCi9ZSYyXH1WNGw0W1tbZgRR6s%2Bf7Et2PZUBdYQa%2BSd4whObtDYRuAYASL4sQOCfKasR2MWz2osbjftngMtGR4zR5IwrlhyTU%2F18owmWnIkrJVtZ2RcDClPSFy91vW9hzSdd6XnASxCRg1SFJxvX2flW6Ki%2B8R%2Bdqhc9Xc0vF8o%2Fc0udmZSF2mdTKL2gFfqS8f46igEFHWeyZxV7darsKc%2FaIuUAy3vXYmF%2FlUV7cwPYVmkeEG8eSlvXuYs1o38ovGCn8qGyvZI3bk7yewN%2FYnSMu6plSaIQrRyXZZNRrxOjumu5%2BbXdqylzw7bqkVRfQCBQ2yF%2F4nHwI0IWIsljdvwxheHh7g%2B8uHMj6Y5zn7B6eKMwx96tjcwS4BEwtMcwt96J%2F5PA6D13hpUPVcOs8Y9lcdIrV%2FIxT84F9aIqgytKygqmRLNtr3GM5rDlrLCqSO5CMEAGRUrhY9CL62nAl070napR0fJOSGxmrN1svc4fO6BmqBC3jMNOJ9sQGOqUBxlEp7KGqLk8koNIGnIdxYOid1NYgh5b6ekIW%2FMT1sRqU0978aP0TshIlglvWA1%2BogtFICRth653J%2Fwrpx7A5V7LhNIlbU4aJ4O1tpT2AnxMzxesrDDiYRhz0S08%2FWw0UQEvK%2BjEOVoq9Jv8or%2FTHJEnXXRIPyTChfCDzq8ppkLYivtulZIHYIeHXIVOxeHX0HCCWYdMUfedJ4hbgMVXaAJnTSrks&X-Amz-Signature=68ec25437d648b23e5667288e9e5e09cf99eb8f38411240d623d37f46e80d07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPY3FMG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy96xjGDeV8Qbh5x21foROC8u4p9xFeMlnl02soF%2FmggIgc3KnMOi7W962BmyvNx0rfA4%2B4ptcxijMjs0JYCfPIEAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNPAai4TJjFWoIjVRSrcA%2F2BAxNa66Ze9jXIfjza6LRIIIt2YZvmBBXEw41Hsp6pQ2PMvIR5QqMIPstQdrZOIJsFzZqqboQY6FNgVFZwoCpcdsASmH4XSQq0y4WZmKbPDoR04V5jjF2V%2Fy8mV4oAOPDVOO%2BcCi9ZSYyXH1WNGw0W1tbZgRR6s%2Bf7Et2PZUBdYQa%2BSd4whObtDYRuAYASL4sQOCfKasR2MWz2osbjftngMtGR4zR5IwrlhyTU%2F18owmWnIkrJVtZ2RcDClPSFy91vW9hzSdd6XnASxCRg1SFJxvX2flW6Ki%2B8R%2Bdqhc9Xc0vF8o%2Fc0udmZSF2mdTKL2gFfqS8f46igEFHWeyZxV7darsKc%2FaIuUAy3vXYmF%2FlUV7cwPYVmkeEG8eSlvXuYs1o38ovGCn8qGyvZI3bk7yewN%2FYnSMu6plSaIQrRyXZZNRrxOjumu5%2BbXdqylzw7bqkVRfQCBQ2yF%2F4nHwI0IWIsljdvwxheHh7g%2B8uHMj6Y5zn7B6eKMwx96tjcwS4BEwtMcwt96J%2F5PA6D13hpUPVcOs8Y9lcdIrV%2FIxT84F9aIqgytKygqmRLNtr3GM5rDlrLCqSO5CMEAGRUrhY9CL62nAl070napR0fJOSGxmrN1svc4fO6BmqBC3jMNOJ9sQGOqUBxlEp7KGqLk8koNIGnIdxYOid1NYgh5b6ekIW%2FMT1sRqU0978aP0TshIlglvWA1%2BogtFICRth653J%2Fwrpx7A5V7LhNIlbU4aJ4O1tpT2AnxMzxesrDDiYRhz0S08%2FWw0UQEvK%2BjEOVoq9Jv8or%2FTHJEnXXRIPyTChfCDzq8ppkLYivtulZIHYIeHXIVOxeHX0HCCWYdMUfedJ4hbgMVXaAJnTSrks&X-Amz-Signature=a453e67dd0ebb12d9778febd7759e710590c86af65f9de4fff21eff6945f1b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

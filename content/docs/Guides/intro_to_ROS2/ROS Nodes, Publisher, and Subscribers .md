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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZI4CDLH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOu3zxL24LkVOP4MNRcumzAqGSQFT%2Bx5EtD2xuKn6XagIhAN9A2yuVQD2DZJq1SmOTREZwFIsOAFjzn0wBkm32%2BeLYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiM2C3VlFSJYMlifMq3ANu728N9paw47WLPXpNBIDkFl8gE6wgXjTE9L%2BAIkbFvd2WPA1%2Bz69YTNVtvbuSNw6sL84njevVdf6fagLfKeSX5nHslwcPPYpdYByKh4jogxvIBo3O8cawIFgWdfPnE0LRRNil6JA9QVixMzwaWfyVYZKcqGUeIygJVWM8zYQRrUzGDGpVQKQcJOjNU40EdXJm4OWu%2FVlN8IHq0DRZ5BP4lQZDFXX2aZL9%2BmOyZ66a8VfPEIvh1c5hhUp7cSmD0hdeZXS2YWKihfWRjrzOmq%2B8obMeWZ3DaUP3Iw2ggCt3%2Bo6XpfGFmuoaNRsP4mXcUGTRB8I%2BKBV%2FxPLRxuGUciH3w45IWhkRnoMn%2F39ANP2RYBiY9zJVyC2NGaLjd1K5AceuBy0NxF5moAR19T%2FEOfGgPSFVLUDW7wL%2F8DFkf4ZMsZXfX1O6fSLa1aUUB6ZJdZ%2FN64cMD9%2BpIejhnOBo3GM4rcUzSEtw8a%2FLT3Qxcihr8tvmbkWDWOSVCHHs%2BKQGbazcEqPLBTKtsS9rigk%2Fhcq6rFaZjHVQNJR6teqgG1wH9ifUwGzdRTuiNYocpE2YHrgakd6xqJW%2Fu9BoRQuS8z0QYwaPPqyuG%2Fz82A4%2BTo8XVc4Gz%2B6gU5CJLIUeqjDFzcDDBjqkAVGx%2B8VDHSGkZSekR9Sxa5hrSRYihg82n94rHTvWyx6GgQsvCzTDzW9E5JDCq8YQj2tkNjEpGxr0TLInDSAJajxalqQmcEGUoBXDGQHfWRRTeidpu478p4lyLlDjoqMH%2FtBfSG0irP9DUGgeDcMJgmLsNVI8EnDqQFNBcaRXr4s4loNW2ikwkmb07NWbJ9XgS4ajVS0AcSotNzUnRyLFqbudgNWe&X-Amz-Signature=86101e15c24240c8440051d050bfe86af9c31be30153d2f92c041e4914c651d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZI4CDLH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOu3zxL24LkVOP4MNRcumzAqGSQFT%2Bx5EtD2xuKn6XagIhAN9A2yuVQD2DZJq1SmOTREZwFIsOAFjzn0wBkm32%2BeLYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiM2C3VlFSJYMlifMq3ANu728N9paw47WLPXpNBIDkFl8gE6wgXjTE9L%2BAIkbFvd2WPA1%2Bz69YTNVtvbuSNw6sL84njevVdf6fagLfKeSX5nHslwcPPYpdYByKh4jogxvIBo3O8cawIFgWdfPnE0LRRNil6JA9QVixMzwaWfyVYZKcqGUeIygJVWM8zYQRrUzGDGpVQKQcJOjNU40EdXJm4OWu%2FVlN8IHq0DRZ5BP4lQZDFXX2aZL9%2BmOyZ66a8VfPEIvh1c5hhUp7cSmD0hdeZXS2YWKihfWRjrzOmq%2B8obMeWZ3DaUP3Iw2ggCt3%2Bo6XpfGFmuoaNRsP4mXcUGTRB8I%2BKBV%2FxPLRxuGUciH3w45IWhkRnoMn%2F39ANP2RYBiY9zJVyC2NGaLjd1K5AceuBy0NxF5moAR19T%2FEOfGgPSFVLUDW7wL%2F8DFkf4ZMsZXfX1O6fSLa1aUUB6ZJdZ%2FN64cMD9%2BpIejhnOBo3GM4rcUzSEtw8a%2FLT3Qxcihr8tvmbkWDWOSVCHHs%2BKQGbazcEqPLBTKtsS9rigk%2Fhcq6rFaZjHVQNJR6teqgG1wH9ifUwGzdRTuiNYocpE2YHrgakd6xqJW%2Fu9BoRQuS8z0QYwaPPqyuG%2Fz82A4%2BTo8XVc4Gz%2B6gU5CJLIUeqjDFzcDDBjqkAVGx%2B8VDHSGkZSekR9Sxa5hrSRYihg82n94rHTvWyx6GgQsvCzTDzW9E5JDCq8YQj2tkNjEpGxr0TLInDSAJajxalqQmcEGUoBXDGQHfWRRTeidpu478p4lyLlDjoqMH%2FtBfSG0irP9DUGgeDcMJgmLsNVI8EnDqQFNBcaRXr4s4loNW2ikwkmb07NWbJ9XgS4ajVS0AcSotNzUnRyLFqbudgNWe&X-Amz-Signature=e0147e315ef94c6f353c60489fb07f0bec78e097d5777d964363a3303c95ae8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZI4CDLH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOu3zxL24LkVOP4MNRcumzAqGSQFT%2Bx5EtD2xuKn6XagIhAN9A2yuVQD2DZJq1SmOTREZwFIsOAFjzn0wBkm32%2BeLYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiM2C3VlFSJYMlifMq3ANu728N9paw47WLPXpNBIDkFl8gE6wgXjTE9L%2BAIkbFvd2WPA1%2Bz69YTNVtvbuSNw6sL84njevVdf6fagLfKeSX5nHslwcPPYpdYByKh4jogxvIBo3O8cawIFgWdfPnE0LRRNil6JA9QVixMzwaWfyVYZKcqGUeIygJVWM8zYQRrUzGDGpVQKQcJOjNU40EdXJm4OWu%2FVlN8IHq0DRZ5BP4lQZDFXX2aZL9%2BmOyZ66a8VfPEIvh1c5hhUp7cSmD0hdeZXS2YWKihfWRjrzOmq%2B8obMeWZ3DaUP3Iw2ggCt3%2Bo6XpfGFmuoaNRsP4mXcUGTRB8I%2BKBV%2FxPLRxuGUciH3w45IWhkRnoMn%2F39ANP2RYBiY9zJVyC2NGaLjd1K5AceuBy0NxF5moAR19T%2FEOfGgPSFVLUDW7wL%2F8DFkf4ZMsZXfX1O6fSLa1aUUB6ZJdZ%2FN64cMD9%2BpIejhnOBo3GM4rcUzSEtw8a%2FLT3Qxcihr8tvmbkWDWOSVCHHs%2BKQGbazcEqPLBTKtsS9rigk%2Fhcq6rFaZjHVQNJR6teqgG1wH9ifUwGzdRTuiNYocpE2YHrgakd6xqJW%2Fu9BoRQuS8z0QYwaPPqyuG%2Fz82A4%2BTo8XVc4Gz%2B6gU5CJLIUeqjDFzcDDBjqkAVGx%2B8VDHSGkZSekR9Sxa5hrSRYihg82n94rHTvWyx6GgQsvCzTDzW9E5JDCq8YQj2tkNjEpGxr0TLInDSAJajxalqQmcEGUoBXDGQHfWRRTeidpu478p4lyLlDjoqMH%2FtBfSG0irP9DUGgeDcMJgmLsNVI8EnDqQFNBcaRXr4s4loNW2ikwkmb07NWbJ9XgS4ajVS0AcSotNzUnRyLFqbudgNWe&X-Amz-Signature=82906240cba179cfb47e9d35e9aafae66205c6cb18bf0778716ec2d63f4dbf92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZI4CDLH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOu3zxL24LkVOP4MNRcumzAqGSQFT%2Bx5EtD2xuKn6XagIhAN9A2yuVQD2DZJq1SmOTREZwFIsOAFjzn0wBkm32%2BeLYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiM2C3VlFSJYMlifMq3ANu728N9paw47WLPXpNBIDkFl8gE6wgXjTE9L%2BAIkbFvd2WPA1%2Bz69YTNVtvbuSNw6sL84njevVdf6fagLfKeSX5nHslwcPPYpdYByKh4jogxvIBo3O8cawIFgWdfPnE0LRRNil6JA9QVixMzwaWfyVYZKcqGUeIygJVWM8zYQRrUzGDGpVQKQcJOjNU40EdXJm4OWu%2FVlN8IHq0DRZ5BP4lQZDFXX2aZL9%2BmOyZ66a8VfPEIvh1c5hhUp7cSmD0hdeZXS2YWKihfWRjrzOmq%2B8obMeWZ3DaUP3Iw2ggCt3%2Bo6XpfGFmuoaNRsP4mXcUGTRB8I%2BKBV%2FxPLRxuGUciH3w45IWhkRnoMn%2F39ANP2RYBiY9zJVyC2NGaLjd1K5AceuBy0NxF5moAR19T%2FEOfGgPSFVLUDW7wL%2F8DFkf4ZMsZXfX1O6fSLa1aUUB6ZJdZ%2FN64cMD9%2BpIejhnOBo3GM4rcUzSEtw8a%2FLT3Qxcihr8tvmbkWDWOSVCHHs%2BKQGbazcEqPLBTKtsS9rigk%2Fhcq6rFaZjHVQNJR6teqgG1wH9ifUwGzdRTuiNYocpE2YHrgakd6xqJW%2Fu9BoRQuS8z0QYwaPPqyuG%2Fz82A4%2BTo8XVc4Gz%2B6gU5CJLIUeqjDFzcDDBjqkAVGx%2B8VDHSGkZSekR9Sxa5hrSRYihg82n94rHTvWyx6GgQsvCzTDzW9E5JDCq8YQj2tkNjEpGxr0TLInDSAJajxalqQmcEGUoBXDGQHfWRRTeidpu478p4lyLlDjoqMH%2FtBfSG0irP9DUGgeDcMJgmLsNVI8EnDqQFNBcaRXr4s4loNW2ikwkmb07NWbJ9XgS4ajVS0AcSotNzUnRyLFqbudgNWe&X-Amz-Signature=d19fa30463e4fa4d43d3b369495462651a98b62b95b4c543440ac6f71d0223c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZI4CDLH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOu3zxL24LkVOP4MNRcumzAqGSQFT%2Bx5EtD2xuKn6XagIhAN9A2yuVQD2DZJq1SmOTREZwFIsOAFjzn0wBkm32%2BeLYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiM2C3VlFSJYMlifMq3ANu728N9paw47WLPXpNBIDkFl8gE6wgXjTE9L%2BAIkbFvd2WPA1%2Bz69YTNVtvbuSNw6sL84njevVdf6fagLfKeSX5nHslwcPPYpdYByKh4jogxvIBo3O8cawIFgWdfPnE0LRRNil6JA9QVixMzwaWfyVYZKcqGUeIygJVWM8zYQRrUzGDGpVQKQcJOjNU40EdXJm4OWu%2FVlN8IHq0DRZ5BP4lQZDFXX2aZL9%2BmOyZ66a8VfPEIvh1c5hhUp7cSmD0hdeZXS2YWKihfWRjrzOmq%2B8obMeWZ3DaUP3Iw2ggCt3%2Bo6XpfGFmuoaNRsP4mXcUGTRB8I%2BKBV%2FxPLRxuGUciH3w45IWhkRnoMn%2F39ANP2RYBiY9zJVyC2NGaLjd1K5AceuBy0NxF5moAR19T%2FEOfGgPSFVLUDW7wL%2F8DFkf4ZMsZXfX1O6fSLa1aUUB6ZJdZ%2FN64cMD9%2BpIejhnOBo3GM4rcUzSEtw8a%2FLT3Qxcihr8tvmbkWDWOSVCHHs%2BKQGbazcEqPLBTKtsS9rigk%2Fhcq6rFaZjHVQNJR6teqgG1wH9ifUwGzdRTuiNYocpE2YHrgakd6xqJW%2Fu9BoRQuS8z0QYwaPPqyuG%2Fz82A4%2BTo8XVc4Gz%2B6gU5CJLIUeqjDFzcDDBjqkAVGx%2B8VDHSGkZSekR9Sxa5hrSRYihg82n94rHTvWyx6GgQsvCzTDzW9E5JDCq8YQj2tkNjEpGxr0TLInDSAJajxalqQmcEGUoBXDGQHfWRRTeidpu478p4lyLlDjoqMH%2FtBfSG0irP9DUGgeDcMJgmLsNVI8EnDqQFNBcaRXr4s4loNW2ikwkmb07NWbJ9XgS4ajVS0AcSotNzUnRyLFqbudgNWe&X-Amz-Signature=2745447acceb9296b9b76f116402d973cc9e93659bb538fd4fe07ca71fa5c60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZI4CDLH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOu3zxL24LkVOP4MNRcumzAqGSQFT%2Bx5EtD2xuKn6XagIhAN9A2yuVQD2DZJq1SmOTREZwFIsOAFjzn0wBkm32%2BeLYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiM2C3VlFSJYMlifMq3ANu728N9paw47WLPXpNBIDkFl8gE6wgXjTE9L%2BAIkbFvd2WPA1%2Bz69YTNVtvbuSNw6sL84njevVdf6fagLfKeSX5nHslwcPPYpdYByKh4jogxvIBo3O8cawIFgWdfPnE0LRRNil6JA9QVixMzwaWfyVYZKcqGUeIygJVWM8zYQRrUzGDGpVQKQcJOjNU40EdXJm4OWu%2FVlN8IHq0DRZ5BP4lQZDFXX2aZL9%2BmOyZ66a8VfPEIvh1c5hhUp7cSmD0hdeZXS2YWKihfWRjrzOmq%2B8obMeWZ3DaUP3Iw2ggCt3%2Bo6XpfGFmuoaNRsP4mXcUGTRB8I%2BKBV%2FxPLRxuGUciH3w45IWhkRnoMn%2F39ANP2RYBiY9zJVyC2NGaLjd1K5AceuBy0NxF5moAR19T%2FEOfGgPSFVLUDW7wL%2F8DFkf4ZMsZXfX1O6fSLa1aUUB6ZJdZ%2FN64cMD9%2BpIejhnOBo3GM4rcUzSEtw8a%2FLT3Qxcihr8tvmbkWDWOSVCHHs%2BKQGbazcEqPLBTKtsS9rigk%2Fhcq6rFaZjHVQNJR6teqgG1wH9ifUwGzdRTuiNYocpE2YHrgakd6xqJW%2Fu9BoRQuS8z0QYwaPPqyuG%2Fz82A4%2BTo8XVc4Gz%2B6gU5CJLIUeqjDFzcDDBjqkAVGx%2B8VDHSGkZSekR9Sxa5hrSRYihg82n94rHTvWyx6GgQsvCzTDzW9E5JDCq8YQj2tkNjEpGxr0TLInDSAJajxalqQmcEGUoBXDGQHfWRRTeidpu478p4lyLlDjoqMH%2FtBfSG0irP9DUGgeDcMJgmLsNVI8EnDqQFNBcaRXr4s4loNW2ikwkmb07NWbJ9XgS4ajVS0AcSotNzUnRyLFqbudgNWe&X-Amz-Signature=ee5198e17499e80611abfbb6a6f44dd0dd84b6ba327363cc393d8abee11d15c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZI4CDLH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOu3zxL24LkVOP4MNRcumzAqGSQFT%2Bx5EtD2xuKn6XagIhAN9A2yuVQD2DZJq1SmOTREZwFIsOAFjzn0wBkm32%2BeLYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiM2C3VlFSJYMlifMq3ANu728N9paw47WLPXpNBIDkFl8gE6wgXjTE9L%2BAIkbFvd2WPA1%2Bz69YTNVtvbuSNw6sL84njevVdf6fagLfKeSX5nHslwcPPYpdYByKh4jogxvIBo3O8cawIFgWdfPnE0LRRNil6JA9QVixMzwaWfyVYZKcqGUeIygJVWM8zYQRrUzGDGpVQKQcJOjNU40EdXJm4OWu%2FVlN8IHq0DRZ5BP4lQZDFXX2aZL9%2BmOyZ66a8VfPEIvh1c5hhUp7cSmD0hdeZXS2YWKihfWRjrzOmq%2B8obMeWZ3DaUP3Iw2ggCt3%2Bo6XpfGFmuoaNRsP4mXcUGTRB8I%2BKBV%2FxPLRxuGUciH3w45IWhkRnoMn%2F39ANP2RYBiY9zJVyC2NGaLjd1K5AceuBy0NxF5moAR19T%2FEOfGgPSFVLUDW7wL%2F8DFkf4ZMsZXfX1O6fSLa1aUUB6ZJdZ%2FN64cMD9%2BpIejhnOBo3GM4rcUzSEtw8a%2FLT3Qxcihr8tvmbkWDWOSVCHHs%2BKQGbazcEqPLBTKtsS9rigk%2Fhcq6rFaZjHVQNJR6teqgG1wH9ifUwGzdRTuiNYocpE2YHrgakd6xqJW%2Fu9BoRQuS8z0QYwaPPqyuG%2Fz82A4%2BTo8XVc4Gz%2B6gU5CJLIUeqjDFzcDDBjqkAVGx%2B8VDHSGkZSekR9Sxa5hrSRYihg82n94rHTvWyx6GgQsvCzTDzW9E5JDCq8YQj2tkNjEpGxr0TLInDSAJajxalqQmcEGUoBXDGQHfWRRTeidpu478p4lyLlDjoqMH%2FtBfSG0irP9DUGgeDcMJgmLsNVI8EnDqQFNBcaRXr4s4loNW2ikwkmb07NWbJ9XgS4ajVS0AcSotNzUnRyLFqbudgNWe&X-Amz-Signature=ce48c2cb3425b75d2f99bb16441cf91b5721f6f82d46a3911e768af784e1fd47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZI4CDLH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOu3zxL24LkVOP4MNRcumzAqGSQFT%2Bx5EtD2xuKn6XagIhAN9A2yuVQD2DZJq1SmOTREZwFIsOAFjzn0wBkm32%2BeLYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiM2C3VlFSJYMlifMq3ANu728N9paw47WLPXpNBIDkFl8gE6wgXjTE9L%2BAIkbFvd2WPA1%2Bz69YTNVtvbuSNw6sL84njevVdf6fagLfKeSX5nHslwcPPYpdYByKh4jogxvIBo3O8cawIFgWdfPnE0LRRNil6JA9QVixMzwaWfyVYZKcqGUeIygJVWM8zYQRrUzGDGpVQKQcJOjNU40EdXJm4OWu%2FVlN8IHq0DRZ5BP4lQZDFXX2aZL9%2BmOyZ66a8VfPEIvh1c5hhUp7cSmD0hdeZXS2YWKihfWRjrzOmq%2B8obMeWZ3DaUP3Iw2ggCt3%2Bo6XpfGFmuoaNRsP4mXcUGTRB8I%2BKBV%2FxPLRxuGUciH3w45IWhkRnoMn%2F39ANP2RYBiY9zJVyC2NGaLjd1K5AceuBy0NxF5moAR19T%2FEOfGgPSFVLUDW7wL%2F8DFkf4ZMsZXfX1O6fSLa1aUUB6ZJdZ%2FN64cMD9%2BpIejhnOBo3GM4rcUzSEtw8a%2FLT3Qxcihr8tvmbkWDWOSVCHHs%2BKQGbazcEqPLBTKtsS9rigk%2Fhcq6rFaZjHVQNJR6teqgG1wH9ifUwGzdRTuiNYocpE2YHrgakd6xqJW%2Fu9BoRQuS8z0QYwaPPqyuG%2Fz82A4%2BTo8XVc4Gz%2B6gU5CJLIUeqjDFzcDDBjqkAVGx%2B8VDHSGkZSekR9Sxa5hrSRYihg82n94rHTvWyx6GgQsvCzTDzW9E5JDCq8YQj2tkNjEpGxr0TLInDSAJajxalqQmcEGUoBXDGQHfWRRTeidpu478p4lyLlDjoqMH%2FtBfSG0irP9DUGgeDcMJgmLsNVI8EnDqQFNBcaRXr4s4loNW2ikwkmb07NWbJ9XgS4ajVS0AcSotNzUnRyLFqbudgNWe&X-Amz-Signature=0da52970bf1d5bad0d77956e086db95e94844d4b233d3edf6582381627f18a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

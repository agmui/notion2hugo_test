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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZXFGG3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBM1UWvpIJnReBkTwkDfaVaX8sT42y6Epa753Bf1wu5XAiEAryINtuV0c2Kw%2B3MNTKzDUOSYfj5Dgj8bjMLzFCun6s8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJasdf4sWrq0kMaPzCrcA%2BHZIDEvUH34pf2%2F1ToJcbdn8d3P%2Fb%2FckOnP4yZYCmUYauxu8Lux%2BfQLlB2SBQ7GvVf39Xwh%2F0AoVAQrRtoAgyQJ2xUYCTV3cGe5yVjWKp3HmtHm1ypxaGHSyZjMLtFaSXqDYytt%2FSA8OlTXaG591v7Xs9qlR%2BrUw%2FBFF1D%2BAJx1ae8ZNtvHDSHeV8fa%2FzpbBOH6c0Koz%2FwrDNe898STGMx1BqyKuDzgALzwbDZkC%2BuK%2B6GTD5SFDfXLKWn1DfyF8IPOGpfyPNmuvSmm%2BUSLnziz%2B3GLL%2FqZLcumzKS1L8WcMUiUWBagztvpRoEjGUPKg1Svw4W9z%2Fn7XwUAGwNs%2Buf4fWT3Z9HCxOSM7aWoOz%2BD4QcwXPkH9iAbLJiMdqs4Af5rhs2ptU%2BUj%2B5lLEQuXh8vl5nwySk5F%2FI9eHOx4had%2FsiTS65w4hYWCh9SpLUdoYwX1yfPfVxIdqifcZRh7pujrrHlBjbnybHgXNZEsQAj25Fpr1aHnSulkPlq1%2BshKBr28iPrrwnfuRwvXvMdHcyiZ9op2jkmPFNFoxcyWblIQyYRFnRceTD02KNqgfMEQuypigfwWhlG7EfAfzNdXr8K0uVgoQKvqUI4cyAcXsD1yiuQik%2Fxeqoo5YkVMJGZ874GOqUBbniuEcQRKHcz8hjyQKMEaRKBO7bfO2OwPSU9%2FxN7Wongkj1pv9gt4ppKevA3gww7iIqxS9cDdMT1ouS23XJSx6tu2eM3wPdINXr2aOi70Ijn3t7iOYakRRMIR2IFUc9uEnBPgeNJRewv2W8sPGdKSVxcSVqJLu2GX5jE1o7lU%2FZFeJ7eOsoY9i0jf2lzaBSnZ%2Fsf%2B%2FTlPeaITt5PB%2FOIZUq3jbqM&X-Amz-Signature=1939d5503c7ae73956d508614d9d45be8f953c2b89c73a02ea2b966e9677e36f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZXFGG3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBM1UWvpIJnReBkTwkDfaVaX8sT42y6Epa753Bf1wu5XAiEAryINtuV0c2Kw%2B3MNTKzDUOSYfj5Dgj8bjMLzFCun6s8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJasdf4sWrq0kMaPzCrcA%2BHZIDEvUH34pf2%2F1ToJcbdn8d3P%2Fb%2FckOnP4yZYCmUYauxu8Lux%2BfQLlB2SBQ7GvVf39Xwh%2F0AoVAQrRtoAgyQJ2xUYCTV3cGe5yVjWKp3HmtHm1ypxaGHSyZjMLtFaSXqDYytt%2FSA8OlTXaG591v7Xs9qlR%2BrUw%2FBFF1D%2BAJx1ae8ZNtvHDSHeV8fa%2FzpbBOH6c0Koz%2FwrDNe898STGMx1BqyKuDzgALzwbDZkC%2BuK%2B6GTD5SFDfXLKWn1DfyF8IPOGpfyPNmuvSmm%2BUSLnziz%2B3GLL%2FqZLcumzKS1L8WcMUiUWBagztvpRoEjGUPKg1Svw4W9z%2Fn7XwUAGwNs%2Buf4fWT3Z9HCxOSM7aWoOz%2BD4QcwXPkH9iAbLJiMdqs4Af5rhs2ptU%2BUj%2B5lLEQuXh8vl5nwySk5F%2FI9eHOx4had%2FsiTS65w4hYWCh9SpLUdoYwX1yfPfVxIdqifcZRh7pujrrHlBjbnybHgXNZEsQAj25Fpr1aHnSulkPlq1%2BshKBr28iPrrwnfuRwvXvMdHcyiZ9op2jkmPFNFoxcyWblIQyYRFnRceTD02KNqgfMEQuypigfwWhlG7EfAfzNdXr8K0uVgoQKvqUI4cyAcXsD1yiuQik%2Fxeqoo5YkVMJGZ874GOqUBbniuEcQRKHcz8hjyQKMEaRKBO7bfO2OwPSU9%2FxN7Wongkj1pv9gt4ppKevA3gww7iIqxS9cDdMT1ouS23XJSx6tu2eM3wPdINXr2aOi70Ijn3t7iOYakRRMIR2IFUc9uEnBPgeNJRewv2W8sPGdKSVxcSVqJLu2GX5jE1o7lU%2FZFeJ7eOsoY9i0jf2lzaBSnZ%2Fsf%2B%2FTlPeaITt5PB%2FOIZUq3jbqM&X-Amz-Signature=547f6271e5ff80fcc9502ee5c5fd819e59db64bc8ba046d735d515f355b07113&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZXFGG3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBM1UWvpIJnReBkTwkDfaVaX8sT42y6Epa753Bf1wu5XAiEAryINtuV0c2Kw%2B3MNTKzDUOSYfj5Dgj8bjMLzFCun6s8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJasdf4sWrq0kMaPzCrcA%2BHZIDEvUH34pf2%2F1ToJcbdn8d3P%2Fb%2FckOnP4yZYCmUYauxu8Lux%2BfQLlB2SBQ7GvVf39Xwh%2F0AoVAQrRtoAgyQJ2xUYCTV3cGe5yVjWKp3HmtHm1ypxaGHSyZjMLtFaSXqDYytt%2FSA8OlTXaG591v7Xs9qlR%2BrUw%2FBFF1D%2BAJx1ae8ZNtvHDSHeV8fa%2FzpbBOH6c0Koz%2FwrDNe898STGMx1BqyKuDzgALzwbDZkC%2BuK%2B6GTD5SFDfXLKWn1DfyF8IPOGpfyPNmuvSmm%2BUSLnziz%2B3GLL%2FqZLcumzKS1L8WcMUiUWBagztvpRoEjGUPKg1Svw4W9z%2Fn7XwUAGwNs%2Buf4fWT3Z9HCxOSM7aWoOz%2BD4QcwXPkH9iAbLJiMdqs4Af5rhs2ptU%2BUj%2B5lLEQuXh8vl5nwySk5F%2FI9eHOx4had%2FsiTS65w4hYWCh9SpLUdoYwX1yfPfVxIdqifcZRh7pujrrHlBjbnybHgXNZEsQAj25Fpr1aHnSulkPlq1%2BshKBr28iPrrwnfuRwvXvMdHcyiZ9op2jkmPFNFoxcyWblIQyYRFnRceTD02KNqgfMEQuypigfwWhlG7EfAfzNdXr8K0uVgoQKvqUI4cyAcXsD1yiuQik%2Fxeqoo5YkVMJGZ874GOqUBbniuEcQRKHcz8hjyQKMEaRKBO7bfO2OwPSU9%2FxN7Wongkj1pv9gt4ppKevA3gww7iIqxS9cDdMT1ouS23XJSx6tu2eM3wPdINXr2aOi70Ijn3t7iOYakRRMIR2IFUc9uEnBPgeNJRewv2W8sPGdKSVxcSVqJLu2GX5jE1o7lU%2FZFeJ7eOsoY9i0jf2lzaBSnZ%2Fsf%2B%2FTlPeaITt5PB%2FOIZUq3jbqM&X-Amz-Signature=395a405de13148033beb9a9b3a6e77e525202cbbbf07b11bc7b02031c9b7bd85&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZXFGG3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBM1UWvpIJnReBkTwkDfaVaX8sT42y6Epa753Bf1wu5XAiEAryINtuV0c2Kw%2B3MNTKzDUOSYfj5Dgj8bjMLzFCun6s8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJasdf4sWrq0kMaPzCrcA%2BHZIDEvUH34pf2%2F1ToJcbdn8d3P%2Fb%2FckOnP4yZYCmUYauxu8Lux%2BfQLlB2SBQ7GvVf39Xwh%2F0AoVAQrRtoAgyQJ2xUYCTV3cGe5yVjWKp3HmtHm1ypxaGHSyZjMLtFaSXqDYytt%2FSA8OlTXaG591v7Xs9qlR%2BrUw%2FBFF1D%2BAJx1ae8ZNtvHDSHeV8fa%2FzpbBOH6c0Koz%2FwrDNe898STGMx1BqyKuDzgALzwbDZkC%2BuK%2B6GTD5SFDfXLKWn1DfyF8IPOGpfyPNmuvSmm%2BUSLnziz%2B3GLL%2FqZLcumzKS1L8WcMUiUWBagztvpRoEjGUPKg1Svw4W9z%2Fn7XwUAGwNs%2Buf4fWT3Z9HCxOSM7aWoOz%2BD4QcwXPkH9iAbLJiMdqs4Af5rhs2ptU%2BUj%2B5lLEQuXh8vl5nwySk5F%2FI9eHOx4had%2FsiTS65w4hYWCh9SpLUdoYwX1yfPfVxIdqifcZRh7pujrrHlBjbnybHgXNZEsQAj25Fpr1aHnSulkPlq1%2BshKBr28iPrrwnfuRwvXvMdHcyiZ9op2jkmPFNFoxcyWblIQyYRFnRceTD02KNqgfMEQuypigfwWhlG7EfAfzNdXr8K0uVgoQKvqUI4cyAcXsD1yiuQik%2Fxeqoo5YkVMJGZ874GOqUBbniuEcQRKHcz8hjyQKMEaRKBO7bfO2OwPSU9%2FxN7Wongkj1pv9gt4ppKevA3gww7iIqxS9cDdMT1ouS23XJSx6tu2eM3wPdINXr2aOi70Ijn3t7iOYakRRMIR2IFUc9uEnBPgeNJRewv2W8sPGdKSVxcSVqJLu2GX5jE1o7lU%2FZFeJ7eOsoY9i0jf2lzaBSnZ%2Fsf%2B%2FTlPeaITt5PB%2FOIZUq3jbqM&X-Amz-Signature=0e55afcd104fedda677fa7704add06336813327e96207639ffc9d8aca6dc0299&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZXFGG3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBM1UWvpIJnReBkTwkDfaVaX8sT42y6Epa753Bf1wu5XAiEAryINtuV0c2Kw%2B3MNTKzDUOSYfj5Dgj8bjMLzFCun6s8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJasdf4sWrq0kMaPzCrcA%2BHZIDEvUH34pf2%2F1ToJcbdn8d3P%2Fb%2FckOnP4yZYCmUYauxu8Lux%2BfQLlB2SBQ7GvVf39Xwh%2F0AoVAQrRtoAgyQJ2xUYCTV3cGe5yVjWKp3HmtHm1ypxaGHSyZjMLtFaSXqDYytt%2FSA8OlTXaG591v7Xs9qlR%2BrUw%2FBFF1D%2BAJx1ae8ZNtvHDSHeV8fa%2FzpbBOH6c0Koz%2FwrDNe898STGMx1BqyKuDzgALzwbDZkC%2BuK%2B6GTD5SFDfXLKWn1DfyF8IPOGpfyPNmuvSmm%2BUSLnziz%2B3GLL%2FqZLcumzKS1L8WcMUiUWBagztvpRoEjGUPKg1Svw4W9z%2Fn7XwUAGwNs%2Buf4fWT3Z9HCxOSM7aWoOz%2BD4QcwXPkH9iAbLJiMdqs4Af5rhs2ptU%2BUj%2B5lLEQuXh8vl5nwySk5F%2FI9eHOx4had%2FsiTS65w4hYWCh9SpLUdoYwX1yfPfVxIdqifcZRh7pujrrHlBjbnybHgXNZEsQAj25Fpr1aHnSulkPlq1%2BshKBr28iPrrwnfuRwvXvMdHcyiZ9op2jkmPFNFoxcyWblIQyYRFnRceTD02KNqgfMEQuypigfwWhlG7EfAfzNdXr8K0uVgoQKvqUI4cyAcXsD1yiuQik%2Fxeqoo5YkVMJGZ874GOqUBbniuEcQRKHcz8hjyQKMEaRKBO7bfO2OwPSU9%2FxN7Wongkj1pv9gt4ppKevA3gww7iIqxS9cDdMT1ouS23XJSx6tu2eM3wPdINXr2aOi70Ijn3t7iOYakRRMIR2IFUc9uEnBPgeNJRewv2W8sPGdKSVxcSVqJLu2GX5jE1o7lU%2FZFeJ7eOsoY9i0jf2lzaBSnZ%2Fsf%2B%2FTlPeaITt5PB%2FOIZUq3jbqM&X-Amz-Signature=8367d145384675c653004fc83dcfa24b67a430af20c8f7673bf8f74a39f200d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZXFGG3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBM1UWvpIJnReBkTwkDfaVaX8sT42y6Epa753Bf1wu5XAiEAryINtuV0c2Kw%2B3MNTKzDUOSYfj5Dgj8bjMLzFCun6s8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJasdf4sWrq0kMaPzCrcA%2BHZIDEvUH34pf2%2F1ToJcbdn8d3P%2Fb%2FckOnP4yZYCmUYauxu8Lux%2BfQLlB2SBQ7GvVf39Xwh%2F0AoVAQrRtoAgyQJ2xUYCTV3cGe5yVjWKp3HmtHm1ypxaGHSyZjMLtFaSXqDYytt%2FSA8OlTXaG591v7Xs9qlR%2BrUw%2FBFF1D%2BAJx1ae8ZNtvHDSHeV8fa%2FzpbBOH6c0Koz%2FwrDNe898STGMx1BqyKuDzgALzwbDZkC%2BuK%2B6GTD5SFDfXLKWn1DfyF8IPOGpfyPNmuvSmm%2BUSLnziz%2B3GLL%2FqZLcumzKS1L8WcMUiUWBagztvpRoEjGUPKg1Svw4W9z%2Fn7XwUAGwNs%2Buf4fWT3Z9HCxOSM7aWoOz%2BD4QcwXPkH9iAbLJiMdqs4Af5rhs2ptU%2BUj%2B5lLEQuXh8vl5nwySk5F%2FI9eHOx4had%2FsiTS65w4hYWCh9SpLUdoYwX1yfPfVxIdqifcZRh7pujrrHlBjbnybHgXNZEsQAj25Fpr1aHnSulkPlq1%2BshKBr28iPrrwnfuRwvXvMdHcyiZ9op2jkmPFNFoxcyWblIQyYRFnRceTD02KNqgfMEQuypigfwWhlG7EfAfzNdXr8K0uVgoQKvqUI4cyAcXsD1yiuQik%2Fxeqoo5YkVMJGZ874GOqUBbniuEcQRKHcz8hjyQKMEaRKBO7bfO2OwPSU9%2FxN7Wongkj1pv9gt4ppKevA3gww7iIqxS9cDdMT1ouS23XJSx6tu2eM3wPdINXr2aOi70Ijn3t7iOYakRRMIR2IFUc9uEnBPgeNJRewv2W8sPGdKSVxcSVqJLu2GX5jE1o7lU%2FZFeJ7eOsoY9i0jf2lzaBSnZ%2Fsf%2B%2FTlPeaITt5PB%2FOIZUq3jbqM&X-Amz-Signature=79c904b0f62f117a367528781725244aa5c5a66fc798615e207242b5e633ec7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZXFGG3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBM1UWvpIJnReBkTwkDfaVaX8sT42y6Epa753Bf1wu5XAiEAryINtuV0c2Kw%2B3MNTKzDUOSYfj5Dgj8bjMLzFCun6s8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJasdf4sWrq0kMaPzCrcA%2BHZIDEvUH34pf2%2F1ToJcbdn8d3P%2Fb%2FckOnP4yZYCmUYauxu8Lux%2BfQLlB2SBQ7GvVf39Xwh%2F0AoVAQrRtoAgyQJ2xUYCTV3cGe5yVjWKp3HmtHm1ypxaGHSyZjMLtFaSXqDYytt%2FSA8OlTXaG591v7Xs9qlR%2BrUw%2FBFF1D%2BAJx1ae8ZNtvHDSHeV8fa%2FzpbBOH6c0Koz%2FwrDNe898STGMx1BqyKuDzgALzwbDZkC%2BuK%2B6GTD5SFDfXLKWn1DfyF8IPOGpfyPNmuvSmm%2BUSLnziz%2B3GLL%2FqZLcumzKS1L8WcMUiUWBagztvpRoEjGUPKg1Svw4W9z%2Fn7XwUAGwNs%2Buf4fWT3Z9HCxOSM7aWoOz%2BD4QcwXPkH9iAbLJiMdqs4Af5rhs2ptU%2BUj%2B5lLEQuXh8vl5nwySk5F%2FI9eHOx4had%2FsiTS65w4hYWCh9SpLUdoYwX1yfPfVxIdqifcZRh7pujrrHlBjbnybHgXNZEsQAj25Fpr1aHnSulkPlq1%2BshKBr28iPrrwnfuRwvXvMdHcyiZ9op2jkmPFNFoxcyWblIQyYRFnRceTD02KNqgfMEQuypigfwWhlG7EfAfzNdXr8K0uVgoQKvqUI4cyAcXsD1yiuQik%2Fxeqoo5YkVMJGZ874GOqUBbniuEcQRKHcz8hjyQKMEaRKBO7bfO2OwPSU9%2FxN7Wongkj1pv9gt4ppKevA3gww7iIqxS9cDdMT1ouS23XJSx6tu2eM3wPdINXr2aOi70Ijn3t7iOYakRRMIR2IFUc9uEnBPgeNJRewv2W8sPGdKSVxcSVqJLu2GX5jE1o7lU%2FZFeJ7eOsoY9i0jf2lzaBSnZ%2Fsf%2B%2FTlPeaITt5PB%2FOIZUq3jbqM&X-Amz-Signature=d9d1d25f91a43507127abd658760b4c3d7972112ebf27d4389878b6572b6924d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZXFGG3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBM1UWvpIJnReBkTwkDfaVaX8sT42y6Epa753Bf1wu5XAiEAryINtuV0c2Kw%2B3MNTKzDUOSYfj5Dgj8bjMLzFCun6s8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJasdf4sWrq0kMaPzCrcA%2BHZIDEvUH34pf2%2F1ToJcbdn8d3P%2Fb%2FckOnP4yZYCmUYauxu8Lux%2BfQLlB2SBQ7GvVf39Xwh%2F0AoVAQrRtoAgyQJ2xUYCTV3cGe5yVjWKp3HmtHm1ypxaGHSyZjMLtFaSXqDYytt%2FSA8OlTXaG591v7Xs9qlR%2BrUw%2FBFF1D%2BAJx1ae8ZNtvHDSHeV8fa%2FzpbBOH6c0Koz%2FwrDNe898STGMx1BqyKuDzgALzwbDZkC%2BuK%2B6GTD5SFDfXLKWn1DfyF8IPOGpfyPNmuvSmm%2BUSLnziz%2B3GLL%2FqZLcumzKS1L8WcMUiUWBagztvpRoEjGUPKg1Svw4W9z%2Fn7XwUAGwNs%2Buf4fWT3Z9HCxOSM7aWoOz%2BD4QcwXPkH9iAbLJiMdqs4Af5rhs2ptU%2BUj%2B5lLEQuXh8vl5nwySk5F%2FI9eHOx4had%2FsiTS65w4hYWCh9SpLUdoYwX1yfPfVxIdqifcZRh7pujrrHlBjbnybHgXNZEsQAj25Fpr1aHnSulkPlq1%2BshKBr28iPrrwnfuRwvXvMdHcyiZ9op2jkmPFNFoxcyWblIQyYRFnRceTD02KNqgfMEQuypigfwWhlG7EfAfzNdXr8K0uVgoQKvqUI4cyAcXsD1yiuQik%2Fxeqoo5YkVMJGZ874GOqUBbniuEcQRKHcz8hjyQKMEaRKBO7bfO2OwPSU9%2FxN7Wongkj1pv9gt4ppKevA3gww7iIqxS9cDdMT1ouS23XJSx6tu2eM3wPdINXr2aOi70Ijn3t7iOYakRRMIR2IFUc9uEnBPgeNJRewv2W8sPGdKSVxcSVqJLu2GX5jE1o7lU%2FZFeJ7eOsoY9i0jf2lzaBSnZ%2Fsf%2B%2FTlPeaITt5PB%2FOIZUq3jbqM&X-Amz-Signature=d81ebb38e234e76c84cb94845b516a40f88ea2efbd050a301e699e97b46d5b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

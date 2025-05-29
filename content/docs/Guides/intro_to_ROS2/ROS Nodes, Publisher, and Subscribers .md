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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL36J7O5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh1s%2Fzh%2FVG3jk4lLBPedpGcrPB1%2BK15e1JBhRrl6dmEAiAhhY2LIABvPakGi%2BBHDsJCDxYTMXt5gFl09Nw8X%2BNsXSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94xBf9Rr1FrrOPO2KtwDKF6XDCJM23a81HWIk5ZNK5D1qBsDKtCKIVSKzCAyiX8cQ7svZgUKPPFWMOC%2Bx4ON%2F7kDCtBv28fD0hHeiy9Am9ZH%2F8wX5LPsl2HcnLCrT1ms7WR%2FLJZvnMd5I7aqMD4hoYXpXWizRlB4VlfhW335jPRAhBbQC3HWlYwhKnJHftmkaae2B7u3LlGAzN0nMJmi%2BvdPM5UsYriGx6D4iLe0h6XkJkzMKG24jYv0VN0cObOMFwxop6Pl0drzybmRih03ecTj0MO097%2FtV%2FixaOFevbXc%2B6Fxs67LAvaKYHMjaEioyeRVNkns4hZgQRIwjRctFf2HvAinpWNouDdgqRuZA7IeOTetT7n8JPgikd7N7abtYlHOdGF1DXsmxGvnrIWkR%2Fb31cj5xuYkQcLodNdC9ulbFhw8UF8GBF1EOkiBgjiU21%2FQroLwZJlh6%2B3jn8gcLbBfrdTdnMU6xbMhmxJ%2BmlLNH3b8NXwMDUoSZBPNGX3RvcUNdAW124iYkC2wztdi4SdlzMxKMU%2FWgJRm%2FrB0OI%2Fj7WThcpUtDGUZkxNfeLc%2Flo24v2zCpxLkCZGp9xIniahbdkAcU2buL50%2FYD%2FiC%2Fwbc9b1qwchYYvf9UKFOLhuli%2FTXWARRUmgexUwpYjfwQY6pgEZlTXY9HaqcbJpfwQpXhRNshca%2F%2F6SOeCVuXz%2F4iMzW%2FoRlXgfCrTvUynVxTdNlsHGH1Lb0ODPZi5YJF3Q8S5e9Myx7KRhNC%2Bog8BDPFEcp3ihAeZuHDcR2hP%2BzcsKM9de0%2BoFzszODrodDQMYnWngYM5Gi0F%2BhN1Q0jzMZqJ6XhW5AEURRuLtLI0jtnnuEJfzhOVY5Mi7Gj90RAv4OHPrA8efIO30&X-Amz-Signature=0408909bb913093b817dcff08f1b4cd30c9772ad73b4ad5b29d574ceb017c702&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL36J7O5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh1s%2Fzh%2FVG3jk4lLBPedpGcrPB1%2BK15e1JBhRrl6dmEAiAhhY2LIABvPakGi%2BBHDsJCDxYTMXt5gFl09Nw8X%2BNsXSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94xBf9Rr1FrrOPO2KtwDKF6XDCJM23a81HWIk5ZNK5D1qBsDKtCKIVSKzCAyiX8cQ7svZgUKPPFWMOC%2Bx4ON%2F7kDCtBv28fD0hHeiy9Am9ZH%2F8wX5LPsl2HcnLCrT1ms7WR%2FLJZvnMd5I7aqMD4hoYXpXWizRlB4VlfhW335jPRAhBbQC3HWlYwhKnJHftmkaae2B7u3LlGAzN0nMJmi%2BvdPM5UsYriGx6D4iLe0h6XkJkzMKG24jYv0VN0cObOMFwxop6Pl0drzybmRih03ecTj0MO097%2FtV%2FixaOFevbXc%2B6Fxs67LAvaKYHMjaEioyeRVNkns4hZgQRIwjRctFf2HvAinpWNouDdgqRuZA7IeOTetT7n8JPgikd7N7abtYlHOdGF1DXsmxGvnrIWkR%2Fb31cj5xuYkQcLodNdC9ulbFhw8UF8GBF1EOkiBgjiU21%2FQroLwZJlh6%2B3jn8gcLbBfrdTdnMU6xbMhmxJ%2BmlLNH3b8NXwMDUoSZBPNGX3RvcUNdAW124iYkC2wztdi4SdlzMxKMU%2FWgJRm%2FrB0OI%2Fj7WThcpUtDGUZkxNfeLc%2Flo24v2zCpxLkCZGp9xIniahbdkAcU2buL50%2FYD%2FiC%2Fwbc9b1qwchYYvf9UKFOLhuli%2FTXWARRUmgexUwpYjfwQY6pgEZlTXY9HaqcbJpfwQpXhRNshca%2F%2F6SOeCVuXz%2F4iMzW%2FoRlXgfCrTvUynVxTdNlsHGH1Lb0ODPZi5YJF3Q8S5e9Myx7KRhNC%2Bog8BDPFEcp3ihAeZuHDcR2hP%2BzcsKM9de0%2BoFzszODrodDQMYnWngYM5Gi0F%2BhN1Q0jzMZqJ6XhW5AEURRuLtLI0jtnnuEJfzhOVY5Mi7Gj90RAv4OHPrA8efIO30&X-Amz-Signature=14ecda5b8f26244d712038c2ebacd0672451c5a3f102085e3a3c865f1af43b25&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL36J7O5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh1s%2Fzh%2FVG3jk4lLBPedpGcrPB1%2BK15e1JBhRrl6dmEAiAhhY2LIABvPakGi%2BBHDsJCDxYTMXt5gFl09Nw8X%2BNsXSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94xBf9Rr1FrrOPO2KtwDKF6XDCJM23a81HWIk5ZNK5D1qBsDKtCKIVSKzCAyiX8cQ7svZgUKPPFWMOC%2Bx4ON%2F7kDCtBv28fD0hHeiy9Am9ZH%2F8wX5LPsl2HcnLCrT1ms7WR%2FLJZvnMd5I7aqMD4hoYXpXWizRlB4VlfhW335jPRAhBbQC3HWlYwhKnJHftmkaae2B7u3LlGAzN0nMJmi%2BvdPM5UsYriGx6D4iLe0h6XkJkzMKG24jYv0VN0cObOMFwxop6Pl0drzybmRih03ecTj0MO097%2FtV%2FixaOFevbXc%2B6Fxs67LAvaKYHMjaEioyeRVNkns4hZgQRIwjRctFf2HvAinpWNouDdgqRuZA7IeOTetT7n8JPgikd7N7abtYlHOdGF1DXsmxGvnrIWkR%2Fb31cj5xuYkQcLodNdC9ulbFhw8UF8GBF1EOkiBgjiU21%2FQroLwZJlh6%2B3jn8gcLbBfrdTdnMU6xbMhmxJ%2BmlLNH3b8NXwMDUoSZBPNGX3RvcUNdAW124iYkC2wztdi4SdlzMxKMU%2FWgJRm%2FrB0OI%2Fj7WThcpUtDGUZkxNfeLc%2Flo24v2zCpxLkCZGp9xIniahbdkAcU2buL50%2FYD%2FiC%2Fwbc9b1qwchYYvf9UKFOLhuli%2FTXWARRUmgexUwpYjfwQY6pgEZlTXY9HaqcbJpfwQpXhRNshca%2F%2F6SOeCVuXz%2F4iMzW%2FoRlXgfCrTvUynVxTdNlsHGH1Lb0ODPZi5YJF3Q8S5e9Myx7KRhNC%2Bog8BDPFEcp3ihAeZuHDcR2hP%2BzcsKM9de0%2BoFzszODrodDQMYnWngYM5Gi0F%2BhN1Q0jzMZqJ6XhW5AEURRuLtLI0jtnnuEJfzhOVY5Mi7Gj90RAv4OHPrA8efIO30&X-Amz-Signature=acfb9e63cb60090cd1628e0d669a4dc85389dc73e7aa42dd9e3f02c6decb1d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL36J7O5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh1s%2Fzh%2FVG3jk4lLBPedpGcrPB1%2BK15e1JBhRrl6dmEAiAhhY2LIABvPakGi%2BBHDsJCDxYTMXt5gFl09Nw8X%2BNsXSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94xBf9Rr1FrrOPO2KtwDKF6XDCJM23a81HWIk5ZNK5D1qBsDKtCKIVSKzCAyiX8cQ7svZgUKPPFWMOC%2Bx4ON%2F7kDCtBv28fD0hHeiy9Am9ZH%2F8wX5LPsl2HcnLCrT1ms7WR%2FLJZvnMd5I7aqMD4hoYXpXWizRlB4VlfhW335jPRAhBbQC3HWlYwhKnJHftmkaae2B7u3LlGAzN0nMJmi%2BvdPM5UsYriGx6D4iLe0h6XkJkzMKG24jYv0VN0cObOMFwxop6Pl0drzybmRih03ecTj0MO097%2FtV%2FixaOFevbXc%2B6Fxs67LAvaKYHMjaEioyeRVNkns4hZgQRIwjRctFf2HvAinpWNouDdgqRuZA7IeOTetT7n8JPgikd7N7abtYlHOdGF1DXsmxGvnrIWkR%2Fb31cj5xuYkQcLodNdC9ulbFhw8UF8GBF1EOkiBgjiU21%2FQroLwZJlh6%2B3jn8gcLbBfrdTdnMU6xbMhmxJ%2BmlLNH3b8NXwMDUoSZBPNGX3RvcUNdAW124iYkC2wztdi4SdlzMxKMU%2FWgJRm%2FrB0OI%2Fj7WThcpUtDGUZkxNfeLc%2Flo24v2zCpxLkCZGp9xIniahbdkAcU2buL50%2FYD%2FiC%2Fwbc9b1qwchYYvf9UKFOLhuli%2FTXWARRUmgexUwpYjfwQY6pgEZlTXY9HaqcbJpfwQpXhRNshca%2F%2F6SOeCVuXz%2F4iMzW%2FoRlXgfCrTvUynVxTdNlsHGH1Lb0ODPZi5YJF3Q8S5e9Myx7KRhNC%2Bog8BDPFEcp3ihAeZuHDcR2hP%2BzcsKM9de0%2BoFzszODrodDQMYnWngYM5Gi0F%2BhN1Q0jzMZqJ6XhW5AEURRuLtLI0jtnnuEJfzhOVY5Mi7Gj90RAv4OHPrA8efIO30&X-Amz-Signature=2e1a9888dcd6684af8b0cee15f749a5fba2d66a38285f37ae0bb59c663d39167&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL36J7O5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh1s%2Fzh%2FVG3jk4lLBPedpGcrPB1%2BK15e1JBhRrl6dmEAiAhhY2LIABvPakGi%2BBHDsJCDxYTMXt5gFl09Nw8X%2BNsXSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94xBf9Rr1FrrOPO2KtwDKF6XDCJM23a81HWIk5ZNK5D1qBsDKtCKIVSKzCAyiX8cQ7svZgUKPPFWMOC%2Bx4ON%2F7kDCtBv28fD0hHeiy9Am9ZH%2F8wX5LPsl2HcnLCrT1ms7WR%2FLJZvnMd5I7aqMD4hoYXpXWizRlB4VlfhW335jPRAhBbQC3HWlYwhKnJHftmkaae2B7u3LlGAzN0nMJmi%2BvdPM5UsYriGx6D4iLe0h6XkJkzMKG24jYv0VN0cObOMFwxop6Pl0drzybmRih03ecTj0MO097%2FtV%2FixaOFevbXc%2B6Fxs67LAvaKYHMjaEioyeRVNkns4hZgQRIwjRctFf2HvAinpWNouDdgqRuZA7IeOTetT7n8JPgikd7N7abtYlHOdGF1DXsmxGvnrIWkR%2Fb31cj5xuYkQcLodNdC9ulbFhw8UF8GBF1EOkiBgjiU21%2FQroLwZJlh6%2B3jn8gcLbBfrdTdnMU6xbMhmxJ%2BmlLNH3b8NXwMDUoSZBPNGX3RvcUNdAW124iYkC2wztdi4SdlzMxKMU%2FWgJRm%2FrB0OI%2Fj7WThcpUtDGUZkxNfeLc%2Flo24v2zCpxLkCZGp9xIniahbdkAcU2buL50%2FYD%2FiC%2Fwbc9b1qwchYYvf9UKFOLhuli%2FTXWARRUmgexUwpYjfwQY6pgEZlTXY9HaqcbJpfwQpXhRNshca%2F%2F6SOeCVuXz%2F4iMzW%2FoRlXgfCrTvUynVxTdNlsHGH1Lb0ODPZi5YJF3Q8S5e9Myx7KRhNC%2Bog8BDPFEcp3ihAeZuHDcR2hP%2BzcsKM9de0%2BoFzszODrodDQMYnWngYM5Gi0F%2BhN1Q0jzMZqJ6XhW5AEURRuLtLI0jtnnuEJfzhOVY5Mi7Gj90RAv4OHPrA8efIO30&X-Amz-Signature=79a78fdc3f944731e0db65b6d388fb1ab994aff81b8da49835316d53941805b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL36J7O5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh1s%2Fzh%2FVG3jk4lLBPedpGcrPB1%2BK15e1JBhRrl6dmEAiAhhY2LIABvPakGi%2BBHDsJCDxYTMXt5gFl09Nw8X%2BNsXSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94xBf9Rr1FrrOPO2KtwDKF6XDCJM23a81HWIk5ZNK5D1qBsDKtCKIVSKzCAyiX8cQ7svZgUKPPFWMOC%2Bx4ON%2F7kDCtBv28fD0hHeiy9Am9ZH%2F8wX5LPsl2HcnLCrT1ms7WR%2FLJZvnMd5I7aqMD4hoYXpXWizRlB4VlfhW335jPRAhBbQC3HWlYwhKnJHftmkaae2B7u3LlGAzN0nMJmi%2BvdPM5UsYriGx6D4iLe0h6XkJkzMKG24jYv0VN0cObOMFwxop6Pl0drzybmRih03ecTj0MO097%2FtV%2FixaOFevbXc%2B6Fxs67LAvaKYHMjaEioyeRVNkns4hZgQRIwjRctFf2HvAinpWNouDdgqRuZA7IeOTetT7n8JPgikd7N7abtYlHOdGF1DXsmxGvnrIWkR%2Fb31cj5xuYkQcLodNdC9ulbFhw8UF8GBF1EOkiBgjiU21%2FQroLwZJlh6%2B3jn8gcLbBfrdTdnMU6xbMhmxJ%2BmlLNH3b8NXwMDUoSZBPNGX3RvcUNdAW124iYkC2wztdi4SdlzMxKMU%2FWgJRm%2FrB0OI%2Fj7WThcpUtDGUZkxNfeLc%2Flo24v2zCpxLkCZGp9xIniahbdkAcU2buL50%2FYD%2FiC%2Fwbc9b1qwchYYvf9UKFOLhuli%2FTXWARRUmgexUwpYjfwQY6pgEZlTXY9HaqcbJpfwQpXhRNshca%2F%2F6SOeCVuXz%2F4iMzW%2FoRlXgfCrTvUynVxTdNlsHGH1Lb0ODPZi5YJF3Q8S5e9Myx7KRhNC%2Bog8BDPFEcp3ihAeZuHDcR2hP%2BzcsKM9de0%2BoFzszODrodDQMYnWngYM5Gi0F%2BhN1Q0jzMZqJ6XhW5AEURRuLtLI0jtnnuEJfzhOVY5Mi7Gj90RAv4OHPrA8efIO30&X-Amz-Signature=7055cde01518fcc27bb2dc236b04013fb0ce15a695ad7368748f153d66f503f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL36J7O5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh1s%2Fzh%2FVG3jk4lLBPedpGcrPB1%2BK15e1JBhRrl6dmEAiAhhY2LIABvPakGi%2BBHDsJCDxYTMXt5gFl09Nw8X%2BNsXSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94xBf9Rr1FrrOPO2KtwDKF6XDCJM23a81HWIk5ZNK5D1qBsDKtCKIVSKzCAyiX8cQ7svZgUKPPFWMOC%2Bx4ON%2F7kDCtBv28fD0hHeiy9Am9ZH%2F8wX5LPsl2HcnLCrT1ms7WR%2FLJZvnMd5I7aqMD4hoYXpXWizRlB4VlfhW335jPRAhBbQC3HWlYwhKnJHftmkaae2B7u3LlGAzN0nMJmi%2BvdPM5UsYriGx6D4iLe0h6XkJkzMKG24jYv0VN0cObOMFwxop6Pl0drzybmRih03ecTj0MO097%2FtV%2FixaOFevbXc%2B6Fxs67LAvaKYHMjaEioyeRVNkns4hZgQRIwjRctFf2HvAinpWNouDdgqRuZA7IeOTetT7n8JPgikd7N7abtYlHOdGF1DXsmxGvnrIWkR%2Fb31cj5xuYkQcLodNdC9ulbFhw8UF8GBF1EOkiBgjiU21%2FQroLwZJlh6%2B3jn8gcLbBfrdTdnMU6xbMhmxJ%2BmlLNH3b8NXwMDUoSZBPNGX3RvcUNdAW124iYkC2wztdi4SdlzMxKMU%2FWgJRm%2FrB0OI%2Fj7WThcpUtDGUZkxNfeLc%2Flo24v2zCpxLkCZGp9xIniahbdkAcU2buL50%2FYD%2FiC%2Fwbc9b1qwchYYvf9UKFOLhuli%2FTXWARRUmgexUwpYjfwQY6pgEZlTXY9HaqcbJpfwQpXhRNshca%2F%2F6SOeCVuXz%2F4iMzW%2FoRlXgfCrTvUynVxTdNlsHGH1Lb0ODPZi5YJF3Q8S5e9Myx7KRhNC%2Bog8BDPFEcp3ihAeZuHDcR2hP%2BzcsKM9de0%2BoFzszODrodDQMYnWngYM5Gi0F%2BhN1Q0jzMZqJ6XhW5AEURRuLtLI0jtnnuEJfzhOVY5Mi7Gj90RAv4OHPrA8efIO30&X-Amz-Signature=d0bba97f7144ff8c41ecd5bbd495545785ccb3640b43886a8baf3739f89b24c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL36J7O5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh1s%2Fzh%2FVG3jk4lLBPedpGcrPB1%2BK15e1JBhRrl6dmEAiAhhY2LIABvPakGi%2BBHDsJCDxYTMXt5gFl09Nw8X%2BNsXSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94xBf9Rr1FrrOPO2KtwDKF6XDCJM23a81HWIk5ZNK5D1qBsDKtCKIVSKzCAyiX8cQ7svZgUKPPFWMOC%2Bx4ON%2F7kDCtBv28fD0hHeiy9Am9ZH%2F8wX5LPsl2HcnLCrT1ms7WR%2FLJZvnMd5I7aqMD4hoYXpXWizRlB4VlfhW335jPRAhBbQC3HWlYwhKnJHftmkaae2B7u3LlGAzN0nMJmi%2BvdPM5UsYriGx6D4iLe0h6XkJkzMKG24jYv0VN0cObOMFwxop6Pl0drzybmRih03ecTj0MO097%2FtV%2FixaOFevbXc%2B6Fxs67LAvaKYHMjaEioyeRVNkns4hZgQRIwjRctFf2HvAinpWNouDdgqRuZA7IeOTetT7n8JPgikd7N7abtYlHOdGF1DXsmxGvnrIWkR%2Fb31cj5xuYkQcLodNdC9ulbFhw8UF8GBF1EOkiBgjiU21%2FQroLwZJlh6%2B3jn8gcLbBfrdTdnMU6xbMhmxJ%2BmlLNH3b8NXwMDUoSZBPNGX3RvcUNdAW124iYkC2wztdi4SdlzMxKMU%2FWgJRm%2FrB0OI%2Fj7WThcpUtDGUZkxNfeLc%2Flo24v2zCpxLkCZGp9xIniahbdkAcU2buL50%2FYD%2FiC%2Fwbc9b1qwchYYvf9UKFOLhuli%2FTXWARRUmgexUwpYjfwQY6pgEZlTXY9HaqcbJpfwQpXhRNshca%2F%2F6SOeCVuXz%2F4iMzW%2FoRlXgfCrTvUynVxTdNlsHGH1Lb0ODPZi5YJF3Q8S5e9Myx7KRhNC%2Bog8BDPFEcp3ihAeZuHDcR2hP%2BzcsKM9de0%2BoFzszODrodDQMYnWngYM5Gi0F%2BhN1Q0jzMZqJ6XhW5AEURRuLtLI0jtnnuEJfzhOVY5Mi7Gj90RAv4OHPrA8efIO30&X-Amz-Signature=81cba30448db3d90be73c699f5f7ef9a3d6cebea83f51e816dbac7992770a3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

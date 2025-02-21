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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TERWIAK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0k%2BdRp%2FizSFCw3Y1TAaSGQcmCZ4N%2F2ij%2BnUJKQIpf7wIgVQcPgUMaziD11cDUb%2Fm5T%2B%2BDGAcKybioAxazlcujE0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3HuHU6xU0IkWATTyrcA8LCpQjLky%2FCELDxKdJT4wX%2BJO6fQNF6AtAF7RFI0nLl%2FBHxFTIt7mlAr3Kq9EG2s0H%2FlpqtFWBuMIWT2O1eCEXX1CxSnj4FAMZ0Y3hxOJV90vdQU2CKwwvONy2phmLHGxAlPef8UuORdn9RJtRpLjdUiPC%2Fpuyd3A7sMDCqVlLTU%2Bhi2NMvOV681xZCk1%2FWqtJkrg9ObdkVHJtURpta7b5XJO47NBHp5MJUsm3SMpowXtKS%2BpDNy7%2FISiF%2FnRVpZnMFFIoSNr1VUkzS02q0ZaQUosmSGEGv%2FiV6QsEVYvJRLt2G%2FfWhXapn0A2fLr7jw4QR7MD6t%2B%2FVoi3ugitdq3rvMB1zULgji%2FMEc7pZbfcxHlxq1zzMOHNUtDP8FVd2vyPdR0RzB%2BlaPS6e%2FHTw4VUEqzUo5loQ1IV1Z08S3bpOR6bE8GmO3MRYDRBfN63%2FNMYGbqYPHJS1vEKqk%2BoajSV6ysdXM31etsjWkYkkBLA14GiuP5dg57gSN1g6NurCdv6zBYLYJKeoIT7oZq5Icgqtw7uT4N7d0LI3I4CXu38JsaeJ9lZ2oaVQPMlpPSIOpurMNrB8pcl47kKuJr3hOM0nkLDCahrMYDGEZeaLifVdcwVdyqfRlzXsSgQJML2A470GOqUBBNORqNhD1PO9CBJQVKvpdXkDVU%2FzLnAtw8BObf1DXyEWJ1mRw4vR5%2FtfkI880%2Bh7wlRz%2BKLCyjjjnW27uZSuCxCcCZOC6DPHTqszyQLHY510v8AH8ThKlFf8xRlC69y1RDY14QCk%2Faj5TFwGrQ3plR9Y3uWRph5S7xrYaW2q%2FhLC20EMbWEMkMbcYB3htn%2BMVfgy0JyHhAAPiTe54sZI4E1KmxnL&X-Amz-Signature=9ed575e13700f61264db2a0df1069dbf65c5df687405d9b770bc03c74c796d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TERWIAK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0k%2BdRp%2FizSFCw3Y1TAaSGQcmCZ4N%2F2ij%2BnUJKQIpf7wIgVQcPgUMaziD11cDUb%2Fm5T%2B%2BDGAcKybioAxazlcujE0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3HuHU6xU0IkWATTyrcA8LCpQjLky%2FCELDxKdJT4wX%2BJO6fQNF6AtAF7RFI0nLl%2FBHxFTIt7mlAr3Kq9EG2s0H%2FlpqtFWBuMIWT2O1eCEXX1CxSnj4FAMZ0Y3hxOJV90vdQU2CKwwvONy2phmLHGxAlPef8UuORdn9RJtRpLjdUiPC%2Fpuyd3A7sMDCqVlLTU%2Bhi2NMvOV681xZCk1%2FWqtJkrg9ObdkVHJtURpta7b5XJO47NBHp5MJUsm3SMpowXtKS%2BpDNy7%2FISiF%2FnRVpZnMFFIoSNr1VUkzS02q0ZaQUosmSGEGv%2FiV6QsEVYvJRLt2G%2FfWhXapn0A2fLr7jw4QR7MD6t%2B%2FVoi3ugitdq3rvMB1zULgji%2FMEc7pZbfcxHlxq1zzMOHNUtDP8FVd2vyPdR0RzB%2BlaPS6e%2FHTw4VUEqzUo5loQ1IV1Z08S3bpOR6bE8GmO3MRYDRBfN63%2FNMYGbqYPHJS1vEKqk%2BoajSV6ysdXM31etsjWkYkkBLA14GiuP5dg57gSN1g6NurCdv6zBYLYJKeoIT7oZq5Icgqtw7uT4N7d0LI3I4CXu38JsaeJ9lZ2oaVQPMlpPSIOpurMNrB8pcl47kKuJr3hOM0nkLDCahrMYDGEZeaLifVdcwVdyqfRlzXsSgQJML2A470GOqUBBNORqNhD1PO9CBJQVKvpdXkDVU%2FzLnAtw8BObf1DXyEWJ1mRw4vR5%2FtfkI880%2Bh7wlRz%2BKLCyjjjnW27uZSuCxCcCZOC6DPHTqszyQLHY510v8AH8ThKlFf8xRlC69y1RDY14QCk%2Faj5TFwGrQ3plR9Y3uWRph5S7xrYaW2q%2FhLC20EMbWEMkMbcYB3htn%2BMVfgy0JyHhAAPiTe54sZI4E1KmxnL&X-Amz-Signature=be4d39553d653a2d7ba290e2d2566dffe1b1d90f25e466b0e3aad64122d9f82e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TERWIAK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0k%2BdRp%2FizSFCw3Y1TAaSGQcmCZ4N%2F2ij%2BnUJKQIpf7wIgVQcPgUMaziD11cDUb%2Fm5T%2B%2BDGAcKybioAxazlcujE0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3HuHU6xU0IkWATTyrcA8LCpQjLky%2FCELDxKdJT4wX%2BJO6fQNF6AtAF7RFI0nLl%2FBHxFTIt7mlAr3Kq9EG2s0H%2FlpqtFWBuMIWT2O1eCEXX1CxSnj4FAMZ0Y3hxOJV90vdQU2CKwwvONy2phmLHGxAlPef8UuORdn9RJtRpLjdUiPC%2Fpuyd3A7sMDCqVlLTU%2Bhi2NMvOV681xZCk1%2FWqtJkrg9ObdkVHJtURpta7b5XJO47NBHp5MJUsm3SMpowXtKS%2BpDNy7%2FISiF%2FnRVpZnMFFIoSNr1VUkzS02q0ZaQUosmSGEGv%2FiV6QsEVYvJRLt2G%2FfWhXapn0A2fLr7jw4QR7MD6t%2B%2FVoi3ugitdq3rvMB1zULgji%2FMEc7pZbfcxHlxq1zzMOHNUtDP8FVd2vyPdR0RzB%2BlaPS6e%2FHTw4VUEqzUo5loQ1IV1Z08S3bpOR6bE8GmO3MRYDRBfN63%2FNMYGbqYPHJS1vEKqk%2BoajSV6ysdXM31etsjWkYkkBLA14GiuP5dg57gSN1g6NurCdv6zBYLYJKeoIT7oZq5Icgqtw7uT4N7d0LI3I4CXu38JsaeJ9lZ2oaVQPMlpPSIOpurMNrB8pcl47kKuJr3hOM0nkLDCahrMYDGEZeaLifVdcwVdyqfRlzXsSgQJML2A470GOqUBBNORqNhD1PO9CBJQVKvpdXkDVU%2FzLnAtw8BObf1DXyEWJ1mRw4vR5%2FtfkI880%2Bh7wlRz%2BKLCyjjjnW27uZSuCxCcCZOC6DPHTqszyQLHY510v8AH8ThKlFf8xRlC69y1RDY14QCk%2Faj5TFwGrQ3plR9Y3uWRph5S7xrYaW2q%2FhLC20EMbWEMkMbcYB3htn%2BMVfgy0JyHhAAPiTe54sZI4E1KmxnL&X-Amz-Signature=fc3c7196a1dbc8daaf57459b5bef075ad96c40d507699eb8ae23220a05ad72e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TERWIAK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0k%2BdRp%2FizSFCw3Y1TAaSGQcmCZ4N%2F2ij%2BnUJKQIpf7wIgVQcPgUMaziD11cDUb%2Fm5T%2B%2BDGAcKybioAxazlcujE0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3HuHU6xU0IkWATTyrcA8LCpQjLky%2FCELDxKdJT4wX%2BJO6fQNF6AtAF7RFI0nLl%2FBHxFTIt7mlAr3Kq9EG2s0H%2FlpqtFWBuMIWT2O1eCEXX1CxSnj4FAMZ0Y3hxOJV90vdQU2CKwwvONy2phmLHGxAlPef8UuORdn9RJtRpLjdUiPC%2Fpuyd3A7sMDCqVlLTU%2Bhi2NMvOV681xZCk1%2FWqtJkrg9ObdkVHJtURpta7b5XJO47NBHp5MJUsm3SMpowXtKS%2BpDNy7%2FISiF%2FnRVpZnMFFIoSNr1VUkzS02q0ZaQUosmSGEGv%2FiV6QsEVYvJRLt2G%2FfWhXapn0A2fLr7jw4QR7MD6t%2B%2FVoi3ugitdq3rvMB1zULgji%2FMEc7pZbfcxHlxq1zzMOHNUtDP8FVd2vyPdR0RzB%2BlaPS6e%2FHTw4VUEqzUo5loQ1IV1Z08S3bpOR6bE8GmO3MRYDRBfN63%2FNMYGbqYPHJS1vEKqk%2BoajSV6ysdXM31etsjWkYkkBLA14GiuP5dg57gSN1g6NurCdv6zBYLYJKeoIT7oZq5Icgqtw7uT4N7d0LI3I4CXu38JsaeJ9lZ2oaVQPMlpPSIOpurMNrB8pcl47kKuJr3hOM0nkLDCahrMYDGEZeaLifVdcwVdyqfRlzXsSgQJML2A470GOqUBBNORqNhD1PO9CBJQVKvpdXkDVU%2FzLnAtw8BObf1DXyEWJ1mRw4vR5%2FtfkI880%2Bh7wlRz%2BKLCyjjjnW27uZSuCxCcCZOC6DPHTqszyQLHY510v8AH8ThKlFf8xRlC69y1RDY14QCk%2Faj5TFwGrQ3plR9Y3uWRph5S7xrYaW2q%2FhLC20EMbWEMkMbcYB3htn%2BMVfgy0JyHhAAPiTe54sZI4E1KmxnL&X-Amz-Signature=06d1324daa6d7e3822e538e07ab5ac782041c73eaed69cb4139c50a224e9618c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TERWIAK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0k%2BdRp%2FizSFCw3Y1TAaSGQcmCZ4N%2F2ij%2BnUJKQIpf7wIgVQcPgUMaziD11cDUb%2Fm5T%2B%2BDGAcKybioAxazlcujE0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3HuHU6xU0IkWATTyrcA8LCpQjLky%2FCELDxKdJT4wX%2BJO6fQNF6AtAF7RFI0nLl%2FBHxFTIt7mlAr3Kq9EG2s0H%2FlpqtFWBuMIWT2O1eCEXX1CxSnj4FAMZ0Y3hxOJV90vdQU2CKwwvONy2phmLHGxAlPef8UuORdn9RJtRpLjdUiPC%2Fpuyd3A7sMDCqVlLTU%2Bhi2NMvOV681xZCk1%2FWqtJkrg9ObdkVHJtURpta7b5XJO47NBHp5MJUsm3SMpowXtKS%2BpDNy7%2FISiF%2FnRVpZnMFFIoSNr1VUkzS02q0ZaQUosmSGEGv%2FiV6QsEVYvJRLt2G%2FfWhXapn0A2fLr7jw4QR7MD6t%2B%2FVoi3ugitdq3rvMB1zULgji%2FMEc7pZbfcxHlxq1zzMOHNUtDP8FVd2vyPdR0RzB%2BlaPS6e%2FHTw4VUEqzUo5loQ1IV1Z08S3bpOR6bE8GmO3MRYDRBfN63%2FNMYGbqYPHJS1vEKqk%2BoajSV6ysdXM31etsjWkYkkBLA14GiuP5dg57gSN1g6NurCdv6zBYLYJKeoIT7oZq5Icgqtw7uT4N7d0LI3I4CXu38JsaeJ9lZ2oaVQPMlpPSIOpurMNrB8pcl47kKuJr3hOM0nkLDCahrMYDGEZeaLifVdcwVdyqfRlzXsSgQJML2A470GOqUBBNORqNhD1PO9CBJQVKvpdXkDVU%2FzLnAtw8BObf1DXyEWJ1mRw4vR5%2FtfkI880%2Bh7wlRz%2BKLCyjjjnW27uZSuCxCcCZOC6DPHTqszyQLHY510v8AH8ThKlFf8xRlC69y1RDY14QCk%2Faj5TFwGrQ3plR9Y3uWRph5S7xrYaW2q%2FhLC20EMbWEMkMbcYB3htn%2BMVfgy0JyHhAAPiTe54sZI4E1KmxnL&X-Amz-Signature=320ae0704fbe0cbefb1712e4b218cbbdeb3af934b6b8ea83644c3e77bb85d4da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TERWIAK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0k%2BdRp%2FizSFCw3Y1TAaSGQcmCZ4N%2F2ij%2BnUJKQIpf7wIgVQcPgUMaziD11cDUb%2Fm5T%2B%2BDGAcKybioAxazlcujE0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3HuHU6xU0IkWATTyrcA8LCpQjLky%2FCELDxKdJT4wX%2BJO6fQNF6AtAF7RFI0nLl%2FBHxFTIt7mlAr3Kq9EG2s0H%2FlpqtFWBuMIWT2O1eCEXX1CxSnj4FAMZ0Y3hxOJV90vdQU2CKwwvONy2phmLHGxAlPef8UuORdn9RJtRpLjdUiPC%2Fpuyd3A7sMDCqVlLTU%2Bhi2NMvOV681xZCk1%2FWqtJkrg9ObdkVHJtURpta7b5XJO47NBHp5MJUsm3SMpowXtKS%2BpDNy7%2FISiF%2FnRVpZnMFFIoSNr1VUkzS02q0ZaQUosmSGEGv%2FiV6QsEVYvJRLt2G%2FfWhXapn0A2fLr7jw4QR7MD6t%2B%2FVoi3ugitdq3rvMB1zULgji%2FMEc7pZbfcxHlxq1zzMOHNUtDP8FVd2vyPdR0RzB%2BlaPS6e%2FHTw4VUEqzUo5loQ1IV1Z08S3bpOR6bE8GmO3MRYDRBfN63%2FNMYGbqYPHJS1vEKqk%2BoajSV6ysdXM31etsjWkYkkBLA14GiuP5dg57gSN1g6NurCdv6zBYLYJKeoIT7oZq5Icgqtw7uT4N7d0LI3I4CXu38JsaeJ9lZ2oaVQPMlpPSIOpurMNrB8pcl47kKuJr3hOM0nkLDCahrMYDGEZeaLifVdcwVdyqfRlzXsSgQJML2A470GOqUBBNORqNhD1PO9CBJQVKvpdXkDVU%2FzLnAtw8BObf1DXyEWJ1mRw4vR5%2FtfkI880%2Bh7wlRz%2BKLCyjjjnW27uZSuCxCcCZOC6DPHTqszyQLHY510v8AH8ThKlFf8xRlC69y1RDY14QCk%2Faj5TFwGrQ3plR9Y3uWRph5S7xrYaW2q%2FhLC20EMbWEMkMbcYB3htn%2BMVfgy0JyHhAAPiTe54sZI4E1KmxnL&X-Amz-Signature=7eb7cf4f25cdbf1777997219af6c179acbd84f276247b7ded91ffc3ad6497c09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TERWIAK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0k%2BdRp%2FizSFCw3Y1TAaSGQcmCZ4N%2F2ij%2BnUJKQIpf7wIgVQcPgUMaziD11cDUb%2Fm5T%2B%2BDGAcKybioAxazlcujE0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3HuHU6xU0IkWATTyrcA8LCpQjLky%2FCELDxKdJT4wX%2BJO6fQNF6AtAF7RFI0nLl%2FBHxFTIt7mlAr3Kq9EG2s0H%2FlpqtFWBuMIWT2O1eCEXX1CxSnj4FAMZ0Y3hxOJV90vdQU2CKwwvONy2phmLHGxAlPef8UuORdn9RJtRpLjdUiPC%2Fpuyd3A7sMDCqVlLTU%2Bhi2NMvOV681xZCk1%2FWqtJkrg9ObdkVHJtURpta7b5XJO47NBHp5MJUsm3SMpowXtKS%2BpDNy7%2FISiF%2FnRVpZnMFFIoSNr1VUkzS02q0ZaQUosmSGEGv%2FiV6QsEVYvJRLt2G%2FfWhXapn0A2fLr7jw4QR7MD6t%2B%2FVoi3ugitdq3rvMB1zULgji%2FMEc7pZbfcxHlxq1zzMOHNUtDP8FVd2vyPdR0RzB%2BlaPS6e%2FHTw4VUEqzUo5loQ1IV1Z08S3bpOR6bE8GmO3MRYDRBfN63%2FNMYGbqYPHJS1vEKqk%2BoajSV6ysdXM31etsjWkYkkBLA14GiuP5dg57gSN1g6NurCdv6zBYLYJKeoIT7oZq5Icgqtw7uT4N7d0LI3I4CXu38JsaeJ9lZ2oaVQPMlpPSIOpurMNrB8pcl47kKuJr3hOM0nkLDCahrMYDGEZeaLifVdcwVdyqfRlzXsSgQJML2A470GOqUBBNORqNhD1PO9CBJQVKvpdXkDVU%2FzLnAtw8BObf1DXyEWJ1mRw4vR5%2FtfkI880%2Bh7wlRz%2BKLCyjjjnW27uZSuCxCcCZOC6DPHTqszyQLHY510v8AH8ThKlFf8xRlC69y1RDY14QCk%2Faj5TFwGrQ3plR9Y3uWRph5S7xrYaW2q%2FhLC20EMbWEMkMbcYB3htn%2BMVfgy0JyHhAAPiTe54sZI4E1KmxnL&X-Amz-Signature=c28f800101836688db80aa2d52811b814288aff9227469a7e86b616de0fbb1ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TERWIAK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0k%2BdRp%2FizSFCw3Y1TAaSGQcmCZ4N%2F2ij%2BnUJKQIpf7wIgVQcPgUMaziD11cDUb%2Fm5T%2B%2BDGAcKybioAxazlcujE0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3HuHU6xU0IkWATTyrcA8LCpQjLky%2FCELDxKdJT4wX%2BJO6fQNF6AtAF7RFI0nLl%2FBHxFTIt7mlAr3Kq9EG2s0H%2FlpqtFWBuMIWT2O1eCEXX1CxSnj4FAMZ0Y3hxOJV90vdQU2CKwwvONy2phmLHGxAlPef8UuORdn9RJtRpLjdUiPC%2Fpuyd3A7sMDCqVlLTU%2Bhi2NMvOV681xZCk1%2FWqtJkrg9ObdkVHJtURpta7b5XJO47NBHp5MJUsm3SMpowXtKS%2BpDNy7%2FISiF%2FnRVpZnMFFIoSNr1VUkzS02q0ZaQUosmSGEGv%2FiV6QsEVYvJRLt2G%2FfWhXapn0A2fLr7jw4QR7MD6t%2B%2FVoi3ugitdq3rvMB1zULgji%2FMEc7pZbfcxHlxq1zzMOHNUtDP8FVd2vyPdR0RzB%2BlaPS6e%2FHTw4VUEqzUo5loQ1IV1Z08S3bpOR6bE8GmO3MRYDRBfN63%2FNMYGbqYPHJS1vEKqk%2BoajSV6ysdXM31etsjWkYkkBLA14GiuP5dg57gSN1g6NurCdv6zBYLYJKeoIT7oZq5Icgqtw7uT4N7d0LI3I4CXu38JsaeJ9lZ2oaVQPMlpPSIOpurMNrB8pcl47kKuJr3hOM0nkLDCahrMYDGEZeaLifVdcwVdyqfRlzXsSgQJML2A470GOqUBBNORqNhD1PO9CBJQVKvpdXkDVU%2FzLnAtw8BObf1DXyEWJ1mRw4vR5%2FtfkI880%2Bh7wlRz%2BKLCyjjjnW27uZSuCxCcCZOC6DPHTqszyQLHY510v8AH8ThKlFf8xRlC69y1RDY14QCk%2Faj5TFwGrQ3plR9Y3uWRph5S7xrYaW2q%2FhLC20EMbWEMkMbcYB3htn%2BMVfgy0JyHhAAPiTe54sZI4E1KmxnL&X-Amz-Signature=bb386cb688f64a2610ea35c67bf9f1e6c90d57841d7839c4ad6088af5cb3547f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOL3XQ4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCDaM%2FpHoe1yxgdtRWuBMMTtr0uQC%2B1Wa2g5gDi5%2Bj5sgIhAKvB%2BmUoKx5YE2TwWSw0HuSH%2FzrOxPSZz0JTfP6j8mILKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9Suk2afvcC7eEOIq3AODdwVl1bB0ak3c5roNDGWxQyFPIrVJ9HeDu%2FyOQ%2FhvzYQIeOCd4DDsRMO5Pp2fsKt7TeHOuaUmFAHFs9AXHwp%2FZ3KVjeazQgnFrnVKipGbhrPo1AW%2F4xO0wUFaldOT9QMd6DVrnLqZJFgeiO0HF7dTtfW1RnW4a0Q385nETfZT2CRZZGBicZOw27K6EADlZvOdhJwRzDmWU2WgfiLHqv%2B1gAq1owPpb17VbFrcwe%2BpvLaRMGH2lqAIxPqxk2TkQlVCEC%2FSBFcNVekBUTWBEKsWvVe2Z7NVHSLIhr4%2FRYgWuYLo9wFAkEShYPU%2BGaZHSgX02D8gpuC40ZzfLkw7spx2iOYahyIteCF0%2BQ%2FI%2Fz7myEtQ8W10ppVYGxRAozqGox1IeMkGxXi1m5fJfV%2BB8TWzG8fmMF11cKznO%2Foz0w4XRzNbIjW1CKnzeSRAM0zj7bN54Knsi4iwK44RHq3XmypVsNBHzhqfseRmz5IFlfYgN8YibPGgXQwqJx9SY8D7O5VLX1yIqn5snbmV5R%2BFxRrdZYJo4yNaPJV%2BqKSaNOLNdhUrUm82kSPWhFBaqciPmYImcpMRC2VMQMPKaRTnEqRqMvBo1cmKPZYDuiR5PvO6%2FNuYTC3bG3ObiXn9cTDk2tnABjqkAWCqRw6IHrLQtHNxJTVGysrfNFVLTibgv8uQExEEDMbVJDaVy7WSlnRrE937s7V5T%2FR6PW1V6X8BxX6Qig8X%2Bq7dFvYs4vbLBDAlm0%2FjNLzzQHhggqudt9P8eQKD1Do38kMRz8TA41P5np0%2B3j6S4uFiIP6PklN2UOhvIiO%2BHBcL7FkaNRAj%2B%2B19jVhjcnwJCcKqU6ZrEChsqdhB0mcEa2bycmkD&X-Amz-Signature=b5c75a41c727f8035282fab4082acb545e38b9d555fc53cd8c0f0f94d6ab5b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOL3XQ4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCDaM%2FpHoe1yxgdtRWuBMMTtr0uQC%2B1Wa2g5gDi5%2Bj5sgIhAKvB%2BmUoKx5YE2TwWSw0HuSH%2FzrOxPSZz0JTfP6j8mILKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9Suk2afvcC7eEOIq3AODdwVl1bB0ak3c5roNDGWxQyFPIrVJ9HeDu%2FyOQ%2FhvzYQIeOCd4DDsRMO5Pp2fsKt7TeHOuaUmFAHFs9AXHwp%2FZ3KVjeazQgnFrnVKipGbhrPo1AW%2F4xO0wUFaldOT9QMd6DVrnLqZJFgeiO0HF7dTtfW1RnW4a0Q385nETfZT2CRZZGBicZOw27K6EADlZvOdhJwRzDmWU2WgfiLHqv%2B1gAq1owPpb17VbFrcwe%2BpvLaRMGH2lqAIxPqxk2TkQlVCEC%2FSBFcNVekBUTWBEKsWvVe2Z7NVHSLIhr4%2FRYgWuYLo9wFAkEShYPU%2BGaZHSgX02D8gpuC40ZzfLkw7spx2iOYahyIteCF0%2BQ%2FI%2Fz7myEtQ8W10ppVYGxRAozqGox1IeMkGxXi1m5fJfV%2BB8TWzG8fmMF11cKznO%2Foz0w4XRzNbIjW1CKnzeSRAM0zj7bN54Knsi4iwK44RHq3XmypVsNBHzhqfseRmz5IFlfYgN8YibPGgXQwqJx9SY8D7O5VLX1yIqn5snbmV5R%2BFxRrdZYJo4yNaPJV%2BqKSaNOLNdhUrUm82kSPWhFBaqciPmYImcpMRC2VMQMPKaRTnEqRqMvBo1cmKPZYDuiR5PvO6%2FNuYTC3bG3ObiXn9cTDk2tnABjqkAWCqRw6IHrLQtHNxJTVGysrfNFVLTibgv8uQExEEDMbVJDaVy7WSlnRrE937s7V5T%2FR6PW1V6X8BxX6Qig8X%2Bq7dFvYs4vbLBDAlm0%2FjNLzzQHhggqudt9P8eQKD1Do38kMRz8TA41P5np0%2B3j6S4uFiIP6PklN2UOhvIiO%2BHBcL7FkaNRAj%2B%2B19jVhjcnwJCcKqU6ZrEChsqdhB0mcEa2bycmkD&X-Amz-Signature=a9252daf6e9c0aecacee27d2a3e150f234037e666436673512c420b88bd61ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOL3XQ4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCDaM%2FpHoe1yxgdtRWuBMMTtr0uQC%2B1Wa2g5gDi5%2Bj5sgIhAKvB%2BmUoKx5YE2TwWSw0HuSH%2FzrOxPSZz0JTfP6j8mILKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9Suk2afvcC7eEOIq3AODdwVl1bB0ak3c5roNDGWxQyFPIrVJ9HeDu%2FyOQ%2FhvzYQIeOCd4DDsRMO5Pp2fsKt7TeHOuaUmFAHFs9AXHwp%2FZ3KVjeazQgnFrnVKipGbhrPo1AW%2F4xO0wUFaldOT9QMd6DVrnLqZJFgeiO0HF7dTtfW1RnW4a0Q385nETfZT2CRZZGBicZOw27K6EADlZvOdhJwRzDmWU2WgfiLHqv%2B1gAq1owPpb17VbFrcwe%2BpvLaRMGH2lqAIxPqxk2TkQlVCEC%2FSBFcNVekBUTWBEKsWvVe2Z7NVHSLIhr4%2FRYgWuYLo9wFAkEShYPU%2BGaZHSgX02D8gpuC40ZzfLkw7spx2iOYahyIteCF0%2BQ%2FI%2Fz7myEtQ8W10ppVYGxRAozqGox1IeMkGxXi1m5fJfV%2BB8TWzG8fmMF11cKznO%2Foz0w4XRzNbIjW1CKnzeSRAM0zj7bN54Knsi4iwK44RHq3XmypVsNBHzhqfseRmz5IFlfYgN8YibPGgXQwqJx9SY8D7O5VLX1yIqn5snbmV5R%2BFxRrdZYJo4yNaPJV%2BqKSaNOLNdhUrUm82kSPWhFBaqciPmYImcpMRC2VMQMPKaRTnEqRqMvBo1cmKPZYDuiR5PvO6%2FNuYTC3bG3ObiXn9cTDk2tnABjqkAWCqRw6IHrLQtHNxJTVGysrfNFVLTibgv8uQExEEDMbVJDaVy7WSlnRrE937s7V5T%2FR6PW1V6X8BxX6Qig8X%2Bq7dFvYs4vbLBDAlm0%2FjNLzzQHhggqudt9P8eQKD1Do38kMRz8TA41P5np0%2B3j6S4uFiIP6PklN2UOhvIiO%2BHBcL7FkaNRAj%2B%2B19jVhjcnwJCcKqU6ZrEChsqdhB0mcEa2bycmkD&X-Amz-Signature=2bc3e68911ce0e7b2b3d0df7ebb29e4786ccbc322a53a8ceaff12c4c77c4cfd8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOL3XQ4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCDaM%2FpHoe1yxgdtRWuBMMTtr0uQC%2B1Wa2g5gDi5%2Bj5sgIhAKvB%2BmUoKx5YE2TwWSw0HuSH%2FzrOxPSZz0JTfP6j8mILKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9Suk2afvcC7eEOIq3AODdwVl1bB0ak3c5roNDGWxQyFPIrVJ9HeDu%2FyOQ%2FhvzYQIeOCd4DDsRMO5Pp2fsKt7TeHOuaUmFAHFs9AXHwp%2FZ3KVjeazQgnFrnVKipGbhrPo1AW%2F4xO0wUFaldOT9QMd6DVrnLqZJFgeiO0HF7dTtfW1RnW4a0Q385nETfZT2CRZZGBicZOw27K6EADlZvOdhJwRzDmWU2WgfiLHqv%2B1gAq1owPpb17VbFrcwe%2BpvLaRMGH2lqAIxPqxk2TkQlVCEC%2FSBFcNVekBUTWBEKsWvVe2Z7NVHSLIhr4%2FRYgWuYLo9wFAkEShYPU%2BGaZHSgX02D8gpuC40ZzfLkw7spx2iOYahyIteCF0%2BQ%2FI%2Fz7myEtQ8W10ppVYGxRAozqGox1IeMkGxXi1m5fJfV%2BB8TWzG8fmMF11cKznO%2Foz0w4XRzNbIjW1CKnzeSRAM0zj7bN54Knsi4iwK44RHq3XmypVsNBHzhqfseRmz5IFlfYgN8YibPGgXQwqJx9SY8D7O5VLX1yIqn5snbmV5R%2BFxRrdZYJo4yNaPJV%2BqKSaNOLNdhUrUm82kSPWhFBaqciPmYImcpMRC2VMQMPKaRTnEqRqMvBo1cmKPZYDuiR5PvO6%2FNuYTC3bG3ObiXn9cTDk2tnABjqkAWCqRw6IHrLQtHNxJTVGysrfNFVLTibgv8uQExEEDMbVJDaVy7WSlnRrE937s7V5T%2FR6PW1V6X8BxX6Qig8X%2Bq7dFvYs4vbLBDAlm0%2FjNLzzQHhggqudt9P8eQKD1Do38kMRz8TA41P5np0%2B3j6S4uFiIP6PklN2UOhvIiO%2BHBcL7FkaNRAj%2B%2B19jVhjcnwJCcKqU6ZrEChsqdhB0mcEa2bycmkD&X-Amz-Signature=cd5e926db637af11a4aa2be076a4c119ac0dd4a3f82e39f7c1a7bccfad9b7bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOL3XQ4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCDaM%2FpHoe1yxgdtRWuBMMTtr0uQC%2B1Wa2g5gDi5%2Bj5sgIhAKvB%2BmUoKx5YE2TwWSw0HuSH%2FzrOxPSZz0JTfP6j8mILKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9Suk2afvcC7eEOIq3AODdwVl1bB0ak3c5roNDGWxQyFPIrVJ9HeDu%2FyOQ%2FhvzYQIeOCd4DDsRMO5Pp2fsKt7TeHOuaUmFAHFs9AXHwp%2FZ3KVjeazQgnFrnVKipGbhrPo1AW%2F4xO0wUFaldOT9QMd6DVrnLqZJFgeiO0HF7dTtfW1RnW4a0Q385nETfZT2CRZZGBicZOw27K6EADlZvOdhJwRzDmWU2WgfiLHqv%2B1gAq1owPpb17VbFrcwe%2BpvLaRMGH2lqAIxPqxk2TkQlVCEC%2FSBFcNVekBUTWBEKsWvVe2Z7NVHSLIhr4%2FRYgWuYLo9wFAkEShYPU%2BGaZHSgX02D8gpuC40ZzfLkw7spx2iOYahyIteCF0%2BQ%2FI%2Fz7myEtQ8W10ppVYGxRAozqGox1IeMkGxXi1m5fJfV%2BB8TWzG8fmMF11cKznO%2Foz0w4XRzNbIjW1CKnzeSRAM0zj7bN54Knsi4iwK44RHq3XmypVsNBHzhqfseRmz5IFlfYgN8YibPGgXQwqJx9SY8D7O5VLX1yIqn5snbmV5R%2BFxRrdZYJo4yNaPJV%2BqKSaNOLNdhUrUm82kSPWhFBaqciPmYImcpMRC2VMQMPKaRTnEqRqMvBo1cmKPZYDuiR5PvO6%2FNuYTC3bG3ObiXn9cTDk2tnABjqkAWCqRw6IHrLQtHNxJTVGysrfNFVLTibgv8uQExEEDMbVJDaVy7WSlnRrE937s7V5T%2FR6PW1V6X8BxX6Qig8X%2Bq7dFvYs4vbLBDAlm0%2FjNLzzQHhggqudt9P8eQKD1Do38kMRz8TA41P5np0%2B3j6S4uFiIP6PklN2UOhvIiO%2BHBcL7FkaNRAj%2B%2B19jVhjcnwJCcKqU6ZrEChsqdhB0mcEa2bycmkD&X-Amz-Signature=370cbcb97ff000b951f01834817dcdbb1b48104dc70936202cd8a2026b13c847&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOL3XQ4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCDaM%2FpHoe1yxgdtRWuBMMTtr0uQC%2B1Wa2g5gDi5%2Bj5sgIhAKvB%2BmUoKx5YE2TwWSw0HuSH%2FzrOxPSZz0JTfP6j8mILKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9Suk2afvcC7eEOIq3AODdwVl1bB0ak3c5roNDGWxQyFPIrVJ9HeDu%2FyOQ%2FhvzYQIeOCd4DDsRMO5Pp2fsKt7TeHOuaUmFAHFs9AXHwp%2FZ3KVjeazQgnFrnVKipGbhrPo1AW%2F4xO0wUFaldOT9QMd6DVrnLqZJFgeiO0HF7dTtfW1RnW4a0Q385nETfZT2CRZZGBicZOw27K6EADlZvOdhJwRzDmWU2WgfiLHqv%2B1gAq1owPpb17VbFrcwe%2BpvLaRMGH2lqAIxPqxk2TkQlVCEC%2FSBFcNVekBUTWBEKsWvVe2Z7NVHSLIhr4%2FRYgWuYLo9wFAkEShYPU%2BGaZHSgX02D8gpuC40ZzfLkw7spx2iOYahyIteCF0%2BQ%2FI%2Fz7myEtQ8W10ppVYGxRAozqGox1IeMkGxXi1m5fJfV%2BB8TWzG8fmMF11cKznO%2Foz0w4XRzNbIjW1CKnzeSRAM0zj7bN54Knsi4iwK44RHq3XmypVsNBHzhqfseRmz5IFlfYgN8YibPGgXQwqJx9SY8D7O5VLX1yIqn5snbmV5R%2BFxRrdZYJo4yNaPJV%2BqKSaNOLNdhUrUm82kSPWhFBaqciPmYImcpMRC2VMQMPKaRTnEqRqMvBo1cmKPZYDuiR5PvO6%2FNuYTC3bG3ObiXn9cTDk2tnABjqkAWCqRw6IHrLQtHNxJTVGysrfNFVLTibgv8uQExEEDMbVJDaVy7WSlnRrE937s7V5T%2FR6PW1V6X8BxX6Qig8X%2Bq7dFvYs4vbLBDAlm0%2FjNLzzQHhggqudt9P8eQKD1Do38kMRz8TA41P5np0%2B3j6S4uFiIP6PklN2UOhvIiO%2BHBcL7FkaNRAj%2B%2B19jVhjcnwJCcKqU6ZrEChsqdhB0mcEa2bycmkD&X-Amz-Signature=1508f228c7c756482dc3252fc1dc3f63864034c9f240486a8cf3296920bb10b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOL3XQ4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCDaM%2FpHoe1yxgdtRWuBMMTtr0uQC%2B1Wa2g5gDi5%2Bj5sgIhAKvB%2BmUoKx5YE2TwWSw0HuSH%2FzrOxPSZz0JTfP6j8mILKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9Suk2afvcC7eEOIq3AODdwVl1bB0ak3c5roNDGWxQyFPIrVJ9HeDu%2FyOQ%2FhvzYQIeOCd4DDsRMO5Pp2fsKt7TeHOuaUmFAHFs9AXHwp%2FZ3KVjeazQgnFrnVKipGbhrPo1AW%2F4xO0wUFaldOT9QMd6DVrnLqZJFgeiO0HF7dTtfW1RnW4a0Q385nETfZT2CRZZGBicZOw27K6EADlZvOdhJwRzDmWU2WgfiLHqv%2B1gAq1owPpb17VbFrcwe%2BpvLaRMGH2lqAIxPqxk2TkQlVCEC%2FSBFcNVekBUTWBEKsWvVe2Z7NVHSLIhr4%2FRYgWuYLo9wFAkEShYPU%2BGaZHSgX02D8gpuC40ZzfLkw7spx2iOYahyIteCF0%2BQ%2FI%2Fz7myEtQ8W10ppVYGxRAozqGox1IeMkGxXi1m5fJfV%2BB8TWzG8fmMF11cKznO%2Foz0w4XRzNbIjW1CKnzeSRAM0zj7bN54Knsi4iwK44RHq3XmypVsNBHzhqfseRmz5IFlfYgN8YibPGgXQwqJx9SY8D7O5VLX1yIqn5snbmV5R%2BFxRrdZYJo4yNaPJV%2BqKSaNOLNdhUrUm82kSPWhFBaqciPmYImcpMRC2VMQMPKaRTnEqRqMvBo1cmKPZYDuiR5PvO6%2FNuYTC3bG3ObiXn9cTDk2tnABjqkAWCqRw6IHrLQtHNxJTVGysrfNFVLTibgv8uQExEEDMbVJDaVy7WSlnRrE937s7V5T%2FR6PW1V6X8BxX6Qig8X%2Bq7dFvYs4vbLBDAlm0%2FjNLzzQHhggqudt9P8eQKD1Do38kMRz8TA41P5np0%2B3j6S4uFiIP6PklN2UOhvIiO%2BHBcL7FkaNRAj%2B%2B19jVhjcnwJCcKqU6ZrEChsqdhB0mcEa2bycmkD&X-Amz-Signature=29465bb733627605c2e4c937c373d92a357fee9d4579f1506100212594879481&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOL3XQ4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCDaM%2FpHoe1yxgdtRWuBMMTtr0uQC%2B1Wa2g5gDi5%2Bj5sgIhAKvB%2BmUoKx5YE2TwWSw0HuSH%2FzrOxPSZz0JTfP6j8mILKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg9Suk2afvcC7eEOIq3AODdwVl1bB0ak3c5roNDGWxQyFPIrVJ9HeDu%2FyOQ%2FhvzYQIeOCd4DDsRMO5Pp2fsKt7TeHOuaUmFAHFs9AXHwp%2FZ3KVjeazQgnFrnVKipGbhrPo1AW%2F4xO0wUFaldOT9QMd6DVrnLqZJFgeiO0HF7dTtfW1RnW4a0Q385nETfZT2CRZZGBicZOw27K6EADlZvOdhJwRzDmWU2WgfiLHqv%2B1gAq1owPpb17VbFrcwe%2BpvLaRMGH2lqAIxPqxk2TkQlVCEC%2FSBFcNVekBUTWBEKsWvVe2Z7NVHSLIhr4%2FRYgWuYLo9wFAkEShYPU%2BGaZHSgX02D8gpuC40ZzfLkw7spx2iOYahyIteCF0%2BQ%2FI%2Fz7myEtQ8W10ppVYGxRAozqGox1IeMkGxXi1m5fJfV%2BB8TWzG8fmMF11cKznO%2Foz0w4XRzNbIjW1CKnzeSRAM0zj7bN54Knsi4iwK44RHq3XmypVsNBHzhqfseRmz5IFlfYgN8YibPGgXQwqJx9SY8D7O5VLX1yIqn5snbmV5R%2BFxRrdZYJo4yNaPJV%2BqKSaNOLNdhUrUm82kSPWhFBaqciPmYImcpMRC2VMQMPKaRTnEqRqMvBo1cmKPZYDuiR5PvO6%2FNuYTC3bG3ObiXn9cTDk2tnABjqkAWCqRw6IHrLQtHNxJTVGysrfNFVLTibgv8uQExEEDMbVJDaVy7WSlnRrE937s7V5T%2FR6PW1V6X8BxX6Qig8X%2Bq7dFvYs4vbLBDAlm0%2FjNLzzQHhggqudt9P8eQKD1Do38kMRz8TA41P5np0%2B3j6S4uFiIP6PklN2UOhvIiO%2BHBcL7FkaNRAj%2B%2B19jVhjcnwJCcKqU6ZrEChsqdhB0mcEa2bycmkD&X-Amz-Signature=37a098313032cfabc0776af959f3ddd42fbe7fab238d9e6fbde2ea17a3a03b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

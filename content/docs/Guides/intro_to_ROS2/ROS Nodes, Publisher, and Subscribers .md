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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3KYX5P%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDgvx9Rbl64ADeARwKRa79ULy6w5GsyB2c1ZGqDk4CupwIhANiSVzbaHfRcfFawcmt9U1y6xCfv%2F49Yn0XUmFzaCipsKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyMn2SU%2FHRrv9He3Eq3APRUIAWvpT%2FfG%2FyUSU6Rz1GbPI38CIa2JyR4%2B%2FAjSbkaWDPC6tm99ApoCTmO9qzaTL7n%2FhCpTkia6aghoArOTqaRFsr4%2FE1zWpXiKndCt7KBwrPzGPLQDm2nuG0C8EmzooXwkll9PAQNGE8ijqFjBt9VdzKc30j6GlwkJXlPuPPLFTZviwFhWdCAPajvrBo%2FVHW%2FznyHwC1DbxrekujAtPkQzlu8iPxYPqP4SH2eIToxfXhWrKxH7FKisKZXZNBKeKKvD%2Fd464gCULNC2W8MuOY5QxEy%2FJJUqst8mf31T85Yl5VMltWey90ewZKQrFWfDd%2Be5HWSTwdZjflQMItnyJgBn4VbhTv6UwP0CABvwE6DzBC967LFbmM13RUYhmUeKS%2B%2BH9xT7agsl3kkAf2lpEj5ZwnDZ%2FpL25%2BiYiVB1YGJhT%2BhfPr4Xv3XpQ4F0sdWQxU8d4VxV8xC9t1Q9DwgODGgldXVZttu7eHi08YbNSXi6k87rZYNiz4cLirYFDiQIalkt7iFHIH5ntzYTB6HhLksJflWfXE2gmh8%2BJ4DRwhscp%2FdnZCcUdw4sal0a%2FAnvXCJEjI6BeEqesMONXBERfSD9ZKk13Ks%2FCeQLYe2KfXDPBwOyiuxaWbL40ZzzDnnqvCBjqkAXwVrzTMvIP%2BbnmAz7N5jJ3t0hcVasuz%2B%2BfmvlVgdmIGsyWTRAV0CdtdZ6ML3YrTQJzK%2FEpfzaEWWlVYvFffFbQ3NYwwYrMtJqbEusNxnBchNjzomjTqUC7mPHHgI2nOWcydP%2Fnus4rbUMSTNXu1bnnOTd3Yva1iRcU9xai3pjPR9nwbRRAWnTcTMAuY9ZubDazOnxiwGsLLxuoMU%2FgDdnQH5ryu&X-Amz-Signature=21a895daa48dd230f859918c510b8e0f8b9edc47f764d60bab3b46acfdb254ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3KYX5P%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDgvx9Rbl64ADeARwKRa79ULy6w5GsyB2c1ZGqDk4CupwIhANiSVzbaHfRcfFawcmt9U1y6xCfv%2F49Yn0XUmFzaCipsKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyMn2SU%2FHRrv9He3Eq3APRUIAWvpT%2FfG%2FyUSU6Rz1GbPI38CIa2JyR4%2B%2FAjSbkaWDPC6tm99ApoCTmO9qzaTL7n%2FhCpTkia6aghoArOTqaRFsr4%2FE1zWpXiKndCt7KBwrPzGPLQDm2nuG0C8EmzooXwkll9PAQNGE8ijqFjBt9VdzKc30j6GlwkJXlPuPPLFTZviwFhWdCAPajvrBo%2FVHW%2FznyHwC1DbxrekujAtPkQzlu8iPxYPqP4SH2eIToxfXhWrKxH7FKisKZXZNBKeKKvD%2Fd464gCULNC2W8MuOY5QxEy%2FJJUqst8mf31T85Yl5VMltWey90ewZKQrFWfDd%2Be5HWSTwdZjflQMItnyJgBn4VbhTv6UwP0CABvwE6DzBC967LFbmM13RUYhmUeKS%2B%2BH9xT7agsl3kkAf2lpEj5ZwnDZ%2FpL25%2BiYiVB1YGJhT%2BhfPr4Xv3XpQ4F0sdWQxU8d4VxV8xC9t1Q9DwgODGgldXVZttu7eHi08YbNSXi6k87rZYNiz4cLirYFDiQIalkt7iFHIH5ntzYTB6HhLksJflWfXE2gmh8%2BJ4DRwhscp%2FdnZCcUdw4sal0a%2FAnvXCJEjI6BeEqesMONXBERfSD9ZKk13Ks%2FCeQLYe2KfXDPBwOyiuxaWbL40ZzzDnnqvCBjqkAXwVrzTMvIP%2BbnmAz7N5jJ3t0hcVasuz%2B%2BfmvlVgdmIGsyWTRAV0CdtdZ6ML3YrTQJzK%2FEpfzaEWWlVYvFffFbQ3NYwwYrMtJqbEusNxnBchNjzomjTqUC7mPHHgI2nOWcydP%2Fnus4rbUMSTNXu1bnnOTd3Yva1iRcU9xai3pjPR9nwbRRAWnTcTMAuY9ZubDazOnxiwGsLLxuoMU%2FgDdnQH5ryu&X-Amz-Signature=b5a6fcaa3bbcf559e46e5a13df1e3d8c07b51e2c6162c245b49b8a70b1172c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3KYX5P%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDgvx9Rbl64ADeARwKRa79ULy6w5GsyB2c1ZGqDk4CupwIhANiSVzbaHfRcfFawcmt9U1y6xCfv%2F49Yn0XUmFzaCipsKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyMn2SU%2FHRrv9He3Eq3APRUIAWvpT%2FfG%2FyUSU6Rz1GbPI38CIa2JyR4%2B%2FAjSbkaWDPC6tm99ApoCTmO9qzaTL7n%2FhCpTkia6aghoArOTqaRFsr4%2FE1zWpXiKndCt7KBwrPzGPLQDm2nuG0C8EmzooXwkll9PAQNGE8ijqFjBt9VdzKc30j6GlwkJXlPuPPLFTZviwFhWdCAPajvrBo%2FVHW%2FznyHwC1DbxrekujAtPkQzlu8iPxYPqP4SH2eIToxfXhWrKxH7FKisKZXZNBKeKKvD%2Fd464gCULNC2W8MuOY5QxEy%2FJJUqst8mf31T85Yl5VMltWey90ewZKQrFWfDd%2Be5HWSTwdZjflQMItnyJgBn4VbhTv6UwP0CABvwE6DzBC967LFbmM13RUYhmUeKS%2B%2BH9xT7agsl3kkAf2lpEj5ZwnDZ%2FpL25%2BiYiVB1YGJhT%2BhfPr4Xv3XpQ4F0sdWQxU8d4VxV8xC9t1Q9DwgODGgldXVZttu7eHi08YbNSXi6k87rZYNiz4cLirYFDiQIalkt7iFHIH5ntzYTB6HhLksJflWfXE2gmh8%2BJ4DRwhscp%2FdnZCcUdw4sal0a%2FAnvXCJEjI6BeEqesMONXBERfSD9ZKk13Ks%2FCeQLYe2KfXDPBwOyiuxaWbL40ZzzDnnqvCBjqkAXwVrzTMvIP%2BbnmAz7N5jJ3t0hcVasuz%2B%2BfmvlVgdmIGsyWTRAV0CdtdZ6ML3YrTQJzK%2FEpfzaEWWlVYvFffFbQ3NYwwYrMtJqbEusNxnBchNjzomjTqUC7mPHHgI2nOWcydP%2Fnus4rbUMSTNXu1bnnOTd3Yva1iRcU9xai3pjPR9nwbRRAWnTcTMAuY9ZubDazOnxiwGsLLxuoMU%2FgDdnQH5ryu&X-Amz-Signature=27eadc93c8a5b1556b18b03a6d7102fe9d8f72e1c7368e8bba96ec20ca0db4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3KYX5P%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDgvx9Rbl64ADeARwKRa79ULy6w5GsyB2c1ZGqDk4CupwIhANiSVzbaHfRcfFawcmt9U1y6xCfv%2F49Yn0XUmFzaCipsKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyMn2SU%2FHRrv9He3Eq3APRUIAWvpT%2FfG%2FyUSU6Rz1GbPI38CIa2JyR4%2B%2FAjSbkaWDPC6tm99ApoCTmO9qzaTL7n%2FhCpTkia6aghoArOTqaRFsr4%2FE1zWpXiKndCt7KBwrPzGPLQDm2nuG0C8EmzooXwkll9PAQNGE8ijqFjBt9VdzKc30j6GlwkJXlPuPPLFTZviwFhWdCAPajvrBo%2FVHW%2FznyHwC1DbxrekujAtPkQzlu8iPxYPqP4SH2eIToxfXhWrKxH7FKisKZXZNBKeKKvD%2Fd464gCULNC2W8MuOY5QxEy%2FJJUqst8mf31T85Yl5VMltWey90ewZKQrFWfDd%2Be5HWSTwdZjflQMItnyJgBn4VbhTv6UwP0CABvwE6DzBC967LFbmM13RUYhmUeKS%2B%2BH9xT7agsl3kkAf2lpEj5ZwnDZ%2FpL25%2BiYiVB1YGJhT%2BhfPr4Xv3XpQ4F0sdWQxU8d4VxV8xC9t1Q9DwgODGgldXVZttu7eHi08YbNSXi6k87rZYNiz4cLirYFDiQIalkt7iFHIH5ntzYTB6HhLksJflWfXE2gmh8%2BJ4DRwhscp%2FdnZCcUdw4sal0a%2FAnvXCJEjI6BeEqesMONXBERfSD9ZKk13Ks%2FCeQLYe2KfXDPBwOyiuxaWbL40ZzzDnnqvCBjqkAXwVrzTMvIP%2BbnmAz7N5jJ3t0hcVasuz%2B%2BfmvlVgdmIGsyWTRAV0CdtdZ6ML3YrTQJzK%2FEpfzaEWWlVYvFffFbQ3NYwwYrMtJqbEusNxnBchNjzomjTqUC7mPHHgI2nOWcydP%2Fnus4rbUMSTNXu1bnnOTd3Yva1iRcU9xai3pjPR9nwbRRAWnTcTMAuY9ZubDazOnxiwGsLLxuoMU%2FgDdnQH5ryu&X-Amz-Signature=a539767414928941529435e74082531447f3f7cc6df123bee9ceaeb588504a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3KYX5P%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDgvx9Rbl64ADeARwKRa79ULy6w5GsyB2c1ZGqDk4CupwIhANiSVzbaHfRcfFawcmt9U1y6xCfv%2F49Yn0XUmFzaCipsKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyMn2SU%2FHRrv9He3Eq3APRUIAWvpT%2FfG%2FyUSU6Rz1GbPI38CIa2JyR4%2B%2FAjSbkaWDPC6tm99ApoCTmO9qzaTL7n%2FhCpTkia6aghoArOTqaRFsr4%2FE1zWpXiKndCt7KBwrPzGPLQDm2nuG0C8EmzooXwkll9PAQNGE8ijqFjBt9VdzKc30j6GlwkJXlPuPPLFTZviwFhWdCAPajvrBo%2FVHW%2FznyHwC1DbxrekujAtPkQzlu8iPxYPqP4SH2eIToxfXhWrKxH7FKisKZXZNBKeKKvD%2Fd464gCULNC2W8MuOY5QxEy%2FJJUqst8mf31T85Yl5VMltWey90ewZKQrFWfDd%2Be5HWSTwdZjflQMItnyJgBn4VbhTv6UwP0CABvwE6DzBC967LFbmM13RUYhmUeKS%2B%2BH9xT7agsl3kkAf2lpEj5ZwnDZ%2FpL25%2BiYiVB1YGJhT%2BhfPr4Xv3XpQ4F0sdWQxU8d4VxV8xC9t1Q9DwgODGgldXVZttu7eHi08YbNSXi6k87rZYNiz4cLirYFDiQIalkt7iFHIH5ntzYTB6HhLksJflWfXE2gmh8%2BJ4DRwhscp%2FdnZCcUdw4sal0a%2FAnvXCJEjI6BeEqesMONXBERfSD9ZKk13Ks%2FCeQLYe2KfXDPBwOyiuxaWbL40ZzzDnnqvCBjqkAXwVrzTMvIP%2BbnmAz7N5jJ3t0hcVasuz%2B%2BfmvlVgdmIGsyWTRAV0CdtdZ6ML3YrTQJzK%2FEpfzaEWWlVYvFffFbQ3NYwwYrMtJqbEusNxnBchNjzomjTqUC7mPHHgI2nOWcydP%2Fnus4rbUMSTNXu1bnnOTd3Yva1iRcU9xai3pjPR9nwbRRAWnTcTMAuY9ZubDazOnxiwGsLLxuoMU%2FgDdnQH5ryu&X-Amz-Signature=8589a9efab6cd4dc96f12b9f12b5129437d0f119e5bf544e2b40bf679e905dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3KYX5P%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDgvx9Rbl64ADeARwKRa79ULy6w5GsyB2c1ZGqDk4CupwIhANiSVzbaHfRcfFawcmt9U1y6xCfv%2F49Yn0XUmFzaCipsKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyMn2SU%2FHRrv9He3Eq3APRUIAWvpT%2FfG%2FyUSU6Rz1GbPI38CIa2JyR4%2B%2FAjSbkaWDPC6tm99ApoCTmO9qzaTL7n%2FhCpTkia6aghoArOTqaRFsr4%2FE1zWpXiKndCt7KBwrPzGPLQDm2nuG0C8EmzooXwkll9PAQNGE8ijqFjBt9VdzKc30j6GlwkJXlPuPPLFTZviwFhWdCAPajvrBo%2FVHW%2FznyHwC1DbxrekujAtPkQzlu8iPxYPqP4SH2eIToxfXhWrKxH7FKisKZXZNBKeKKvD%2Fd464gCULNC2W8MuOY5QxEy%2FJJUqst8mf31T85Yl5VMltWey90ewZKQrFWfDd%2Be5HWSTwdZjflQMItnyJgBn4VbhTv6UwP0CABvwE6DzBC967LFbmM13RUYhmUeKS%2B%2BH9xT7agsl3kkAf2lpEj5ZwnDZ%2FpL25%2BiYiVB1YGJhT%2BhfPr4Xv3XpQ4F0sdWQxU8d4VxV8xC9t1Q9DwgODGgldXVZttu7eHi08YbNSXi6k87rZYNiz4cLirYFDiQIalkt7iFHIH5ntzYTB6HhLksJflWfXE2gmh8%2BJ4DRwhscp%2FdnZCcUdw4sal0a%2FAnvXCJEjI6BeEqesMONXBERfSD9ZKk13Ks%2FCeQLYe2KfXDPBwOyiuxaWbL40ZzzDnnqvCBjqkAXwVrzTMvIP%2BbnmAz7N5jJ3t0hcVasuz%2B%2BfmvlVgdmIGsyWTRAV0CdtdZ6ML3YrTQJzK%2FEpfzaEWWlVYvFffFbQ3NYwwYrMtJqbEusNxnBchNjzomjTqUC7mPHHgI2nOWcydP%2Fnus4rbUMSTNXu1bnnOTd3Yva1iRcU9xai3pjPR9nwbRRAWnTcTMAuY9ZubDazOnxiwGsLLxuoMU%2FgDdnQH5ryu&X-Amz-Signature=19ce39b3e1de443f4951a6c9e00723b25dd4aac325ac8f50e3f314aef0a3fb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3KYX5P%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDgvx9Rbl64ADeARwKRa79ULy6w5GsyB2c1ZGqDk4CupwIhANiSVzbaHfRcfFawcmt9U1y6xCfv%2F49Yn0XUmFzaCipsKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyMn2SU%2FHRrv9He3Eq3APRUIAWvpT%2FfG%2FyUSU6Rz1GbPI38CIa2JyR4%2B%2FAjSbkaWDPC6tm99ApoCTmO9qzaTL7n%2FhCpTkia6aghoArOTqaRFsr4%2FE1zWpXiKndCt7KBwrPzGPLQDm2nuG0C8EmzooXwkll9PAQNGE8ijqFjBt9VdzKc30j6GlwkJXlPuPPLFTZviwFhWdCAPajvrBo%2FVHW%2FznyHwC1DbxrekujAtPkQzlu8iPxYPqP4SH2eIToxfXhWrKxH7FKisKZXZNBKeKKvD%2Fd464gCULNC2W8MuOY5QxEy%2FJJUqst8mf31T85Yl5VMltWey90ewZKQrFWfDd%2Be5HWSTwdZjflQMItnyJgBn4VbhTv6UwP0CABvwE6DzBC967LFbmM13RUYhmUeKS%2B%2BH9xT7agsl3kkAf2lpEj5ZwnDZ%2FpL25%2BiYiVB1YGJhT%2BhfPr4Xv3XpQ4F0sdWQxU8d4VxV8xC9t1Q9DwgODGgldXVZttu7eHi08YbNSXi6k87rZYNiz4cLirYFDiQIalkt7iFHIH5ntzYTB6HhLksJflWfXE2gmh8%2BJ4DRwhscp%2FdnZCcUdw4sal0a%2FAnvXCJEjI6BeEqesMONXBERfSD9ZKk13Ks%2FCeQLYe2KfXDPBwOyiuxaWbL40ZzzDnnqvCBjqkAXwVrzTMvIP%2BbnmAz7N5jJ3t0hcVasuz%2B%2BfmvlVgdmIGsyWTRAV0CdtdZ6ML3YrTQJzK%2FEpfzaEWWlVYvFffFbQ3NYwwYrMtJqbEusNxnBchNjzomjTqUC7mPHHgI2nOWcydP%2Fnus4rbUMSTNXu1bnnOTd3Yva1iRcU9xai3pjPR9nwbRRAWnTcTMAuY9ZubDazOnxiwGsLLxuoMU%2FgDdnQH5ryu&X-Amz-Signature=180d8e5a4c8ee58a7d16da73c08bceed07edc461d715b291fd59452614b4bd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3KYX5P%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDgvx9Rbl64ADeARwKRa79ULy6w5GsyB2c1ZGqDk4CupwIhANiSVzbaHfRcfFawcmt9U1y6xCfv%2F49Yn0XUmFzaCipsKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyMn2SU%2FHRrv9He3Eq3APRUIAWvpT%2FfG%2FyUSU6Rz1GbPI38CIa2JyR4%2B%2FAjSbkaWDPC6tm99ApoCTmO9qzaTL7n%2FhCpTkia6aghoArOTqaRFsr4%2FE1zWpXiKndCt7KBwrPzGPLQDm2nuG0C8EmzooXwkll9PAQNGE8ijqFjBt9VdzKc30j6GlwkJXlPuPPLFTZviwFhWdCAPajvrBo%2FVHW%2FznyHwC1DbxrekujAtPkQzlu8iPxYPqP4SH2eIToxfXhWrKxH7FKisKZXZNBKeKKvD%2Fd464gCULNC2W8MuOY5QxEy%2FJJUqst8mf31T85Yl5VMltWey90ewZKQrFWfDd%2Be5HWSTwdZjflQMItnyJgBn4VbhTv6UwP0CABvwE6DzBC967LFbmM13RUYhmUeKS%2B%2BH9xT7agsl3kkAf2lpEj5ZwnDZ%2FpL25%2BiYiVB1YGJhT%2BhfPr4Xv3XpQ4F0sdWQxU8d4VxV8xC9t1Q9DwgODGgldXVZttu7eHi08YbNSXi6k87rZYNiz4cLirYFDiQIalkt7iFHIH5ntzYTB6HhLksJflWfXE2gmh8%2BJ4DRwhscp%2FdnZCcUdw4sal0a%2FAnvXCJEjI6BeEqesMONXBERfSD9ZKk13Ks%2FCeQLYe2KfXDPBwOyiuxaWbL40ZzzDnnqvCBjqkAXwVrzTMvIP%2BbnmAz7N5jJ3t0hcVasuz%2B%2BfmvlVgdmIGsyWTRAV0CdtdZ6ML3YrTQJzK%2FEpfzaEWWlVYvFffFbQ3NYwwYrMtJqbEusNxnBchNjzomjTqUC7mPHHgI2nOWcydP%2Fnus4rbUMSTNXu1bnnOTd3Yva1iRcU9xai3pjPR9nwbRRAWnTcTMAuY9ZubDazOnxiwGsLLxuoMU%2FgDdnQH5ryu&X-Amz-Signature=d4ae1814c1aa4b0a53c92899126e61946f6da7276c368329589b87e95be170d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

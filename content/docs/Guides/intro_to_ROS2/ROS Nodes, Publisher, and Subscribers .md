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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DOX6HZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIACghQnZvGxifYCDYDPBzZG4qmBiQazSg0MHNqMuH1%2BCAiBXIn9i9JGv6NC11T5pFaz1Kwh%2F2dvFRYowO3ajd2tkESqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtmSqq%2FTb0bC1q%2BZKtwDYqe9AG8lBgWeT2E8%2BKDluFikvSU9%2BZQsa0sdIeQtD1hM6XuWTHBBHZFBv6jJ4W7VYAccBpYO3On%2FCmtqFonLFDCr3jaZMtPkaPSaqowYK13eP7LP9PwDtShX0uGVOkBv7hmu1FdvTBL5bXDrc3J8FQgefMXXFcNeRh6E2OVyXZjkkMoxHUlYxwAuz11xJtu%2FYi21jhlrg2q0V21TfCkON1q5nL6fGypyDNH5K32mySHYSNBl%2B6H71FGFmxLBZ%2FTtcnSl4LRoqR4ft9W92QtdJThmn7pycJedO9Io2%2FcxEEL3dk%2B9cLoUaaGciQilvxpyDHOfcD5WDGSCqr4%2FnVlBYwusIF5lKfFURp%2FXgF5amxuWEpxB4%2FtmrTjA2Ycat8I1AZ7V1C1AYnsxDn1iDlKpHZ7sr9ubKZ%2Bri3iIPwRXg0nNbuzk0olBQNxksgn2DqQY4foRKA30jk%2BPNYwW6lOjObdXEE3gvnAKsdYtHHqPdoeDiMvPXjNswV2%2BwhM3Wmup0pj8DFwPMy2vPpqRhc0laaG48JYVliJNzi%2BfDMDJ42XV9nx0Aa%2Fguq9SgxiVgbP3S5x58do3hEss6IUbZ8XLa%2Fr7K34gvKA%2Bw%2BvoNc4z7ipn%2BW%2FkcxY3fAuJnjUw64zovwY6pgHxw81kLllu%2BYyEo0YgqBNcxkjDJFCb0gZLnms7uB9CTC4%2FRP4d2i8NDdd7ngt9%2FevKn%2Baw%2FNytg4Q7wxw1xyzOpmlBCc1wHxcA%2FsGEgwzd5ae5yT4sr7Ib42i1jTbltQuuOZYIMYpByiAAcVDChMZ79cnYiwwWpQIwiQ4OAsM42sN3BKQoiYhapgV%2BTHTFXOWaa3UFn%2FItL7F1BSTolH7los2m5TdD&X-Amz-Signature=7301930519eee65a9f8353071f81d7bed43719324e1a70d461278d6ace6432a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DOX6HZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIACghQnZvGxifYCDYDPBzZG4qmBiQazSg0MHNqMuH1%2BCAiBXIn9i9JGv6NC11T5pFaz1Kwh%2F2dvFRYowO3ajd2tkESqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtmSqq%2FTb0bC1q%2BZKtwDYqe9AG8lBgWeT2E8%2BKDluFikvSU9%2BZQsa0sdIeQtD1hM6XuWTHBBHZFBv6jJ4W7VYAccBpYO3On%2FCmtqFonLFDCr3jaZMtPkaPSaqowYK13eP7LP9PwDtShX0uGVOkBv7hmu1FdvTBL5bXDrc3J8FQgefMXXFcNeRh6E2OVyXZjkkMoxHUlYxwAuz11xJtu%2FYi21jhlrg2q0V21TfCkON1q5nL6fGypyDNH5K32mySHYSNBl%2B6H71FGFmxLBZ%2FTtcnSl4LRoqR4ft9W92QtdJThmn7pycJedO9Io2%2FcxEEL3dk%2B9cLoUaaGciQilvxpyDHOfcD5WDGSCqr4%2FnVlBYwusIF5lKfFURp%2FXgF5amxuWEpxB4%2FtmrTjA2Ycat8I1AZ7V1C1AYnsxDn1iDlKpHZ7sr9ubKZ%2Bri3iIPwRXg0nNbuzk0olBQNxksgn2DqQY4foRKA30jk%2BPNYwW6lOjObdXEE3gvnAKsdYtHHqPdoeDiMvPXjNswV2%2BwhM3Wmup0pj8DFwPMy2vPpqRhc0laaG48JYVliJNzi%2BfDMDJ42XV9nx0Aa%2Fguq9SgxiVgbP3S5x58do3hEss6IUbZ8XLa%2Fr7K34gvKA%2Bw%2BvoNc4z7ipn%2BW%2FkcxY3fAuJnjUw64zovwY6pgHxw81kLllu%2BYyEo0YgqBNcxkjDJFCb0gZLnms7uB9CTC4%2FRP4d2i8NDdd7ngt9%2FevKn%2Baw%2FNytg4Q7wxw1xyzOpmlBCc1wHxcA%2FsGEgwzd5ae5yT4sr7Ib42i1jTbltQuuOZYIMYpByiAAcVDChMZ79cnYiwwWpQIwiQ4OAsM42sN3BKQoiYhapgV%2BTHTFXOWaa3UFn%2FItL7F1BSTolH7los2m5TdD&X-Amz-Signature=a175111b1c8074e41c201efe4c508c509e007bff4e659ca5bc96bb95ddad248c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DOX6HZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIACghQnZvGxifYCDYDPBzZG4qmBiQazSg0MHNqMuH1%2BCAiBXIn9i9JGv6NC11T5pFaz1Kwh%2F2dvFRYowO3ajd2tkESqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtmSqq%2FTb0bC1q%2BZKtwDYqe9AG8lBgWeT2E8%2BKDluFikvSU9%2BZQsa0sdIeQtD1hM6XuWTHBBHZFBv6jJ4W7VYAccBpYO3On%2FCmtqFonLFDCr3jaZMtPkaPSaqowYK13eP7LP9PwDtShX0uGVOkBv7hmu1FdvTBL5bXDrc3J8FQgefMXXFcNeRh6E2OVyXZjkkMoxHUlYxwAuz11xJtu%2FYi21jhlrg2q0V21TfCkON1q5nL6fGypyDNH5K32mySHYSNBl%2B6H71FGFmxLBZ%2FTtcnSl4LRoqR4ft9W92QtdJThmn7pycJedO9Io2%2FcxEEL3dk%2B9cLoUaaGciQilvxpyDHOfcD5WDGSCqr4%2FnVlBYwusIF5lKfFURp%2FXgF5amxuWEpxB4%2FtmrTjA2Ycat8I1AZ7V1C1AYnsxDn1iDlKpHZ7sr9ubKZ%2Bri3iIPwRXg0nNbuzk0olBQNxksgn2DqQY4foRKA30jk%2BPNYwW6lOjObdXEE3gvnAKsdYtHHqPdoeDiMvPXjNswV2%2BwhM3Wmup0pj8DFwPMy2vPpqRhc0laaG48JYVliJNzi%2BfDMDJ42XV9nx0Aa%2Fguq9SgxiVgbP3S5x58do3hEss6IUbZ8XLa%2Fr7K34gvKA%2Bw%2BvoNc4z7ipn%2BW%2FkcxY3fAuJnjUw64zovwY6pgHxw81kLllu%2BYyEo0YgqBNcxkjDJFCb0gZLnms7uB9CTC4%2FRP4d2i8NDdd7ngt9%2FevKn%2Baw%2FNytg4Q7wxw1xyzOpmlBCc1wHxcA%2FsGEgwzd5ae5yT4sr7Ib42i1jTbltQuuOZYIMYpByiAAcVDChMZ79cnYiwwWpQIwiQ4OAsM42sN3BKQoiYhapgV%2BTHTFXOWaa3UFn%2FItL7F1BSTolH7los2m5TdD&X-Amz-Signature=683836a8af28bb0b09358e40df649c40b7652eb5ea4391558c119597dfd86520&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DOX6HZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIACghQnZvGxifYCDYDPBzZG4qmBiQazSg0MHNqMuH1%2BCAiBXIn9i9JGv6NC11T5pFaz1Kwh%2F2dvFRYowO3ajd2tkESqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtmSqq%2FTb0bC1q%2BZKtwDYqe9AG8lBgWeT2E8%2BKDluFikvSU9%2BZQsa0sdIeQtD1hM6XuWTHBBHZFBv6jJ4W7VYAccBpYO3On%2FCmtqFonLFDCr3jaZMtPkaPSaqowYK13eP7LP9PwDtShX0uGVOkBv7hmu1FdvTBL5bXDrc3J8FQgefMXXFcNeRh6E2OVyXZjkkMoxHUlYxwAuz11xJtu%2FYi21jhlrg2q0V21TfCkON1q5nL6fGypyDNH5K32mySHYSNBl%2B6H71FGFmxLBZ%2FTtcnSl4LRoqR4ft9W92QtdJThmn7pycJedO9Io2%2FcxEEL3dk%2B9cLoUaaGciQilvxpyDHOfcD5WDGSCqr4%2FnVlBYwusIF5lKfFURp%2FXgF5amxuWEpxB4%2FtmrTjA2Ycat8I1AZ7V1C1AYnsxDn1iDlKpHZ7sr9ubKZ%2Bri3iIPwRXg0nNbuzk0olBQNxksgn2DqQY4foRKA30jk%2BPNYwW6lOjObdXEE3gvnAKsdYtHHqPdoeDiMvPXjNswV2%2BwhM3Wmup0pj8DFwPMy2vPpqRhc0laaG48JYVliJNzi%2BfDMDJ42XV9nx0Aa%2Fguq9SgxiVgbP3S5x58do3hEss6IUbZ8XLa%2Fr7K34gvKA%2Bw%2BvoNc4z7ipn%2BW%2FkcxY3fAuJnjUw64zovwY6pgHxw81kLllu%2BYyEo0YgqBNcxkjDJFCb0gZLnms7uB9CTC4%2FRP4d2i8NDdd7ngt9%2FevKn%2Baw%2FNytg4Q7wxw1xyzOpmlBCc1wHxcA%2FsGEgwzd5ae5yT4sr7Ib42i1jTbltQuuOZYIMYpByiAAcVDChMZ79cnYiwwWpQIwiQ4OAsM42sN3BKQoiYhapgV%2BTHTFXOWaa3UFn%2FItL7F1BSTolH7los2m5TdD&X-Amz-Signature=2eeac67bd1428646057ac95ec326efb0022f13f1043c9edb704199b9db37b15d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DOX6HZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIACghQnZvGxifYCDYDPBzZG4qmBiQazSg0MHNqMuH1%2BCAiBXIn9i9JGv6NC11T5pFaz1Kwh%2F2dvFRYowO3ajd2tkESqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtmSqq%2FTb0bC1q%2BZKtwDYqe9AG8lBgWeT2E8%2BKDluFikvSU9%2BZQsa0sdIeQtD1hM6XuWTHBBHZFBv6jJ4W7VYAccBpYO3On%2FCmtqFonLFDCr3jaZMtPkaPSaqowYK13eP7LP9PwDtShX0uGVOkBv7hmu1FdvTBL5bXDrc3J8FQgefMXXFcNeRh6E2OVyXZjkkMoxHUlYxwAuz11xJtu%2FYi21jhlrg2q0V21TfCkON1q5nL6fGypyDNH5K32mySHYSNBl%2B6H71FGFmxLBZ%2FTtcnSl4LRoqR4ft9W92QtdJThmn7pycJedO9Io2%2FcxEEL3dk%2B9cLoUaaGciQilvxpyDHOfcD5WDGSCqr4%2FnVlBYwusIF5lKfFURp%2FXgF5amxuWEpxB4%2FtmrTjA2Ycat8I1AZ7V1C1AYnsxDn1iDlKpHZ7sr9ubKZ%2Bri3iIPwRXg0nNbuzk0olBQNxksgn2DqQY4foRKA30jk%2BPNYwW6lOjObdXEE3gvnAKsdYtHHqPdoeDiMvPXjNswV2%2BwhM3Wmup0pj8DFwPMy2vPpqRhc0laaG48JYVliJNzi%2BfDMDJ42XV9nx0Aa%2Fguq9SgxiVgbP3S5x58do3hEss6IUbZ8XLa%2Fr7K34gvKA%2Bw%2BvoNc4z7ipn%2BW%2FkcxY3fAuJnjUw64zovwY6pgHxw81kLllu%2BYyEo0YgqBNcxkjDJFCb0gZLnms7uB9CTC4%2FRP4d2i8NDdd7ngt9%2FevKn%2Baw%2FNytg4Q7wxw1xyzOpmlBCc1wHxcA%2FsGEgwzd5ae5yT4sr7Ib42i1jTbltQuuOZYIMYpByiAAcVDChMZ79cnYiwwWpQIwiQ4OAsM42sN3BKQoiYhapgV%2BTHTFXOWaa3UFn%2FItL7F1BSTolH7los2m5TdD&X-Amz-Signature=7bc1f367c09ffac8c36d28f126a8ee831be6bfb2a02fa4295339ed5f3498f3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DOX6HZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIACghQnZvGxifYCDYDPBzZG4qmBiQazSg0MHNqMuH1%2BCAiBXIn9i9JGv6NC11T5pFaz1Kwh%2F2dvFRYowO3ajd2tkESqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtmSqq%2FTb0bC1q%2BZKtwDYqe9AG8lBgWeT2E8%2BKDluFikvSU9%2BZQsa0sdIeQtD1hM6XuWTHBBHZFBv6jJ4W7VYAccBpYO3On%2FCmtqFonLFDCr3jaZMtPkaPSaqowYK13eP7LP9PwDtShX0uGVOkBv7hmu1FdvTBL5bXDrc3J8FQgefMXXFcNeRh6E2OVyXZjkkMoxHUlYxwAuz11xJtu%2FYi21jhlrg2q0V21TfCkON1q5nL6fGypyDNH5K32mySHYSNBl%2B6H71FGFmxLBZ%2FTtcnSl4LRoqR4ft9W92QtdJThmn7pycJedO9Io2%2FcxEEL3dk%2B9cLoUaaGciQilvxpyDHOfcD5WDGSCqr4%2FnVlBYwusIF5lKfFURp%2FXgF5amxuWEpxB4%2FtmrTjA2Ycat8I1AZ7V1C1AYnsxDn1iDlKpHZ7sr9ubKZ%2Bri3iIPwRXg0nNbuzk0olBQNxksgn2DqQY4foRKA30jk%2BPNYwW6lOjObdXEE3gvnAKsdYtHHqPdoeDiMvPXjNswV2%2BwhM3Wmup0pj8DFwPMy2vPpqRhc0laaG48JYVliJNzi%2BfDMDJ42XV9nx0Aa%2Fguq9SgxiVgbP3S5x58do3hEss6IUbZ8XLa%2Fr7K34gvKA%2Bw%2BvoNc4z7ipn%2BW%2FkcxY3fAuJnjUw64zovwY6pgHxw81kLllu%2BYyEo0YgqBNcxkjDJFCb0gZLnms7uB9CTC4%2FRP4d2i8NDdd7ngt9%2FevKn%2Baw%2FNytg4Q7wxw1xyzOpmlBCc1wHxcA%2FsGEgwzd5ae5yT4sr7Ib42i1jTbltQuuOZYIMYpByiAAcVDChMZ79cnYiwwWpQIwiQ4OAsM42sN3BKQoiYhapgV%2BTHTFXOWaa3UFn%2FItL7F1BSTolH7los2m5TdD&X-Amz-Signature=b824284af9a0da94d9618752c85f35017c6c600b2d8967a894f73a206c2480c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DOX6HZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIACghQnZvGxifYCDYDPBzZG4qmBiQazSg0MHNqMuH1%2BCAiBXIn9i9JGv6NC11T5pFaz1Kwh%2F2dvFRYowO3ajd2tkESqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtmSqq%2FTb0bC1q%2BZKtwDYqe9AG8lBgWeT2E8%2BKDluFikvSU9%2BZQsa0sdIeQtD1hM6XuWTHBBHZFBv6jJ4W7VYAccBpYO3On%2FCmtqFonLFDCr3jaZMtPkaPSaqowYK13eP7LP9PwDtShX0uGVOkBv7hmu1FdvTBL5bXDrc3J8FQgefMXXFcNeRh6E2OVyXZjkkMoxHUlYxwAuz11xJtu%2FYi21jhlrg2q0V21TfCkON1q5nL6fGypyDNH5K32mySHYSNBl%2B6H71FGFmxLBZ%2FTtcnSl4LRoqR4ft9W92QtdJThmn7pycJedO9Io2%2FcxEEL3dk%2B9cLoUaaGciQilvxpyDHOfcD5WDGSCqr4%2FnVlBYwusIF5lKfFURp%2FXgF5amxuWEpxB4%2FtmrTjA2Ycat8I1AZ7V1C1AYnsxDn1iDlKpHZ7sr9ubKZ%2Bri3iIPwRXg0nNbuzk0olBQNxksgn2DqQY4foRKA30jk%2BPNYwW6lOjObdXEE3gvnAKsdYtHHqPdoeDiMvPXjNswV2%2BwhM3Wmup0pj8DFwPMy2vPpqRhc0laaG48JYVliJNzi%2BfDMDJ42XV9nx0Aa%2Fguq9SgxiVgbP3S5x58do3hEss6IUbZ8XLa%2Fr7K34gvKA%2Bw%2BvoNc4z7ipn%2BW%2FkcxY3fAuJnjUw64zovwY6pgHxw81kLllu%2BYyEo0YgqBNcxkjDJFCb0gZLnms7uB9CTC4%2FRP4d2i8NDdd7ngt9%2FevKn%2Baw%2FNytg4Q7wxw1xyzOpmlBCc1wHxcA%2FsGEgwzd5ae5yT4sr7Ib42i1jTbltQuuOZYIMYpByiAAcVDChMZ79cnYiwwWpQIwiQ4OAsM42sN3BKQoiYhapgV%2BTHTFXOWaa3UFn%2FItL7F1BSTolH7los2m5TdD&X-Amz-Signature=a635ea9dee4995b45bb86f3786438242bc15a88e76c999ea68133a6d03adf873&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DOX6HZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIACghQnZvGxifYCDYDPBzZG4qmBiQazSg0MHNqMuH1%2BCAiBXIn9i9JGv6NC11T5pFaz1Kwh%2F2dvFRYowO3ajd2tkESqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCtmSqq%2FTb0bC1q%2BZKtwDYqe9AG8lBgWeT2E8%2BKDluFikvSU9%2BZQsa0sdIeQtD1hM6XuWTHBBHZFBv6jJ4W7VYAccBpYO3On%2FCmtqFonLFDCr3jaZMtPkaPSaqowYK13eP7LP9PwDtShX0uGVOkBv7hmu1FdvTBL5bXDrc3J8FQgefMXXFcNeRh6E2OVyXZjkkMoxHUlYxwAuz11xJtu%2FYi21jhlrg2q0V21TfCkON1q5nL6fGypyDNH5K32mySHYSNBl%2B6H71FGFmxLBZ%2FTtcnSl4LRoqR4ft9W92QtdJThmn7pycJedO9Io2%2FcxEEL3dk%2B9cLoUaaGciQilvxpyDHOfcD5WDGSCqr4%2FnVlBYwusIF5lKfFURp%2FXgF5amxuWEpxB4%2FtmrTjA2Ycat8I1AZ7V1C1AYnsxDn1iDlKpHZ7sr9ubKZ%2Bri3iIPwRXg0nNbuzk0olBQNxksgn2DqQY4foRKA30jk%2BPNYwW6lOjObdXEE3gvnAKsdYtHHqPdoeDiMvPXjNswV2%2BwhM3Wmup0pj8DFwPMy2vPpqRhc0laaG48JYVliJNzi%2BfDMDJ42XV9nx0Aa%2Fguq9SgxiVgbP3S5x58do3hEss6IUbZ8XLa%2Fr7K34gvKA%2Bw%2BvoNc4z7ipn%2BW%2FkcxY3fAuJnjUw64zovwY6pgHxw81kLllu%2BYyEo0YgqBNcxkjDJFCb0gZLnms7uB9CTC4%2FRP4d2i8NDdd7ngt9%2FevKn%2Baw%2FNytg4Q7wxw1xyzOpmlBCc1wHxcA%2FsGEgwzd5ae5yT4sr7Ib42i1jTbltQuuOZYIMYpByiAAcVDChMZ79cnYiwwWpQIwiQ4OAsM42sN3BKQoiYhapgV%2BTHTFXOWaa3UFn%2FItL7F1BSTolH7los2m5TdD&X-Amz-Signature=a3f15bf874472c3348c0dd2669dbbbd0ebbb314789ae54201d706ce1d628bff6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

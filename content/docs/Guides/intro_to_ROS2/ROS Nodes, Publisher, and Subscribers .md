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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS6C5LH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9l1hnFZOiUoD98hpac691UisQNZ6cDGBDYQOJCvNNMAiEA%2BJ6cH1JKphBL3BCKXt2c8QAWa1JZ%2FTly%2FyOC26Hy4H0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx%2FZygKEhCOpBMSByrcAxIkC9QjBC6CKt%2FtiGDJH%2BS%2FVKuPXL31I2gr08Krlj0zT%2BlC27Ni5q%2F5Eg95u9ctCfWyKj14P0IG%2BWYeXkvaUDLrWBhI4CGQxDAqO6izv4a6Eb7hCUS71wbBPhY%2Bm4Fqsxt6lsNdQ3sqtMAoWIx5kw6OkAdRG0bUjoQ2kymJv0x6kGjxnQhDN3fNdXzNo8mQcIrW7Zos4ojJHVJ5QW1MaJ5zY31PJqXtVcXwz%2BHENF05q80hgHaLiNfxXwiU1zj9EmGacnFNXn5KEjhqTYYXELgYIuv2ZIkL73Aj%2B8qqzgv0UKTi0M5At0H786uWEOCCP3tnBwJEMFzQDcquDclLvTy9%2F1FgDY8do08%2B15rN4j1Eh44MVyqIMhYfJYvoUYG517yMbJgbYJ5d%2F3Nv%2BhfUwSGlsC8lJ0LrxlfOPNcf%2BcasZi1TZHCiQyzzXLJw8hZGt8daUr2FbFhCs96FCSjxuEg1vPwMuPOnRNbX%2B4G2DGihJVkS0ica1v4m8%2BY%2F451N1A4godRFN5BzsPXaJDQBMevZlwnbb44x0dZ9shduIpZo5KuP44QBUTcr6qs8ANtuJU3sGVpD8fWzrHNEjp4Q%2F8avU92bdD9dRXg72LUBN6ycmioaCaK0TNy%2B7xrgMNeQrsQGOqUBocT1%2BRJ8XXAtEcPNOsbLyNMlewR0KiLzOXP7N8ynIllyO3XugIme%2BjTOsEQ%2B88zvHkjoeaLf3%2B94zqSEmnhI4tBOIk0pbqUO5HnpF3gA2t1WXJmxZngWEJg91Bh8LZuKH4u38YjjpM%2BJOu7GjedVQB%2FpzkZudx3Wz3tNSUelEY6HLx5LhHtFO7gjw8j4cJj9NBkNE60J%2FZpOeG4Oxtx3rNmpqPFu&X-Amz-Signature=3ae99d7e0a51524b7241c394dda33cab6325ae930dead2ee9f89eedbbb3c44e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS6C5LH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9l1hnFZOiUoD98hpac691UisQNZ6cDGBDYQOJCvNNMAiEA%2BJ6cH1JKphBL3BCKXt2c8QAWa1JZ%2FTly%2FyOC26Hy4H0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx%2FZygKEhCOpBMSByrcAxIkC9QjBC6CKt%2FtiGDJH%2BS%2FVKuPXL31I2gr08Krlj0zT%2BlC27Ni5q%2F5Eg95u9ctCfWyKj14P0IG%2BWYeXkvaUDLrWBhI4CGQxDAqO6izv4a6Eb7hCUS71wbBPhY%2Bm4Fqsxt6lsNdQ3sqtMAoWIx5kw6OkAdRG0bUjoQ2kymJv0x6kGjxnQhDN3fNdXzNo8mQcIrW7Zos4ojJHVJ5QW1MaJ5zY31PJqXtVcXwz%2BHENF05q80hgHaLiNfxXwiU1zj9EmGacnFNXn5KEjhqTYYXELgYIuv2ZIkL73Aj%2B8qqzgv0UKTi0M5At0H786uWEOCCP3tnBwJEMFzQDcquDclLvTy9%2F1FgDY8do08%2B15rN4j1Eh44MVyqIMhYfJYvoUYG517yMbJgbYJ5d%2F3Nv%2BhfUwSGlsC8lJ0LrxlfOPNcf%2BcasZi1TZHCiQyzzXLJw8hZGt8daUr2FbFhCs96FCSjxuEg1vPwMuPOnRNbX%2B4G2DGihJVkS0ica1v4m8%2BY%2F451N1A4godRFN5BzsPXaJDQBMevZlwnbb44x0dZ9shduIpZo5KuP44QBUTcr6qs8ANtuJU3sGVpD8fWzrHNEjp4Q%2F8avU92bdD9dRXg72LUBN6ycmioaCaK0TNy%2B7xrgMNeQrsQGOqUBocT1%2BRJ8XXAtEcPNOsbLyNMlewR0KiLzOXP7N8ynIllyO3XugIme%2BjTOsEQ%2B88zvHkjoeaLf3%2B94zqSEmnhI4tBOIk0pbqUO5HnpF3gA2t1WXJmxZngWEJg91Bh8LZuKH4u38YjjpM%2BJOu7GjedVQB%2FpzkZudx3Wz3tNSUelEY6HLx5LhHtFO7gjw8j4cJj9NBkNE60J%2FZpOeG4Oxtx3rNmpqPFu&X-Amz-Signature=18bf5bad9f5c8787879ac24c9aad878e6d53536d3c3e3d07694e073d7f9f1309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS6C5LH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9l1hnFZOiUoD98hpac691UisQNZ6cDGBDYQOJCvNNMAiEA%2BJ6cH1JKphBL3BCKXt2c8QAWa1JZ%2FTly%2FyOC26Hy4H0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx%2FZygKEhCOpBMSByrcAxIkC9QjBC6CKt%2FtiGDJH%2BS%2FVKuPXL31I2gr08Krlj0zT%2BlC27Ni5q%2F5Eg95u9ctCfWyKj14P0IG%2BWYeXkvaUDLrWBhI4CGQxDAqO6izv4a6Eb7hCUS71wbBPhY%2Bm4Fqsxt6lsNdQ3sqtMAoWIx5kw6OkAdRG0bUjoQ2kymJv0x6kGjxnQhDN3fNdXzNo8mQcIrW7Zos4ojJHVJ5QW1MaJ5zY31PJqXtVcXwz%2BHENF05q80hgHaLiNfxXwiU1zj9EmGacnFNXn5KEjhqTYYXELgYIuv2ZIkL73Aj%2B8qqzgv0UKTi0M5At0H786uWEOCCP3tnBwJEMFzQDcquDclLvTy9%2F1FgDY8do08%2B15rN4j1Eh44MVyqIMhYfJYvoUYG517yMbJgbYJ5d%2F3Nv%2BhfUwSGlsC8lJ0LrxlfOPNcf%2BcasZi1TZHCiQyzzXLJw8hZGt8daUr2FbFhCs96FCSjxuEg1vPwMuPOnRNbX%2B4G2DGihJVkS0ica1v4m8%2BY%2F451N1A4godRFN5BzsPXaJDQBMevZlwnbb44x0dZ9shduIpZo5KuP44QBUTcr6qs8ANtuJU3sGVpD8fWzrHNEjp4Q%2F8avU92bdD9dRXg72LUBN6ycmioaCaK0TNy%2B7xrgMNeQrsQGOqUBocT1%2BRJ8XXAtEcPNOsbLyNMlewR0KiLzOXP7N8ynIllyO3XugIme%2BjTOsEQ%2B88zvHkjoeaLf3%2B94zqSEmnhI4tBOIk0pbqUO5HnpF3gA2t1WXJmxZngWEJg91Bh8LZuKH4u38YjjpM%2BJOu7GjedVQB%2FpzkZudx3Wz3tNSUelEY6HLx5LhHtFO7gjw8j4cJj9NBkNE60J%2FZpOeG4Oxtx3rNmpqPFu&X-Amz-Signature=3fceee826b11bb4e64f01c33d74036354a87a8af2e7c3ecf06c8f92fa373fec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS6C5LH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9l1hnFZOiUoD98hpac691UisQNZ6cDGBDYQOJCvNNMAiEA%2BJ6cH1JKphBL3BCKXt2c8QAWa1JZ%2FTly%2FyOC26Hy4H0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx%2FZygKEhCOpBMSByrcAxIkC9QjBC6CKt%2FtiGDJH%2BS%2FVKuPXL31I2gr08Krlj0zT%2BlC27Ni5q%2F5Eg95u9ctCfWyKj14P0IG%2BWYeXkvaUDLrWBhI4CGQxDAqO6izv4a6Eb7hCUS71wbBPhY%2Bm4Fqsxt6lsNdQ3sqtMAoWIx5kw6OkAdRG0bUjoQ2kymJv0x6kGjxnQhDN3fNdXzNo8mQcIrW7Zos4ojJHVJ5QW1MaJ5zY31PJqXtVcXwz%2BHENF05q80hgHaLiNfxXwiU1zj9EmGacnFNXn5KEjhqTYYXELgYIuv2ZIkL73Aj%2B8qqzgv0UKTi0M5At0H786uWEOCCP3tnBwJEMFzQDcquDclLvTy9%2F1FgDY8do08%2B15rN4j1Eh44MVyqIMhYfJYvoUYG517yMbJgbYJ5d%2F3Nv%2BhfUwSGlsC8lJ0LrxlfOPNcf%2BcasZi1TZHCiQyzzXLJw8hZGt8daUr2FbFhCs96FCSjxuEg1vPwMuPOnRNbX%2B4G2DGihJVkS0ica1v4m8%2BY%2F451N1A4godRFN5BzsPXaJDQBMevZlwnbb44x0dZ9shduIpZo5KuP44QBUTcr6qs8ANtuJU3sGVpD8fWzrHNEjp4Q%2F8avU92bdD9dRXg72LUBN6ycmioaCaK0TNy%2B7xrgMNeQrsQGOqUBocT1%2BRJ8XXAtEcPNOsbLyNMlewR0KiLzOXP7N8ynIllyO3XugIme%2BjTOsEQ%2B88zvHkjoeaLf3%2B94zqSEmnhI4tBOIk0pbqUO5HnpF3gA2t1WXJmxZngWEJg91Bh8LZuKH4u38YjjpM%2BJOu7GjedVQB%2FpzkZudx3Wz3tNSUelEY6HLx5LhHtFO7gjw8j4cJj9NBkNE60J%2FZpOeG4Oxtx3rNmpqPFu&X-Amz-Signature=f77bb0fa6cd6dd915a936aac49882f41ec44a30baf99f904c91479c25115dc35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS6C5LH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9l1hnFZOiUoD98hpac691UisQNZ6cDGBDYQOJCvNNMAiEA%2BJ6cH1JKphBL3BCKXt2c8QAWa1JZ%2FTly%2FyOC26Hy4H0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx%2FZygKEhCOpBMSByrcAxIkC9QjBC6CKt%2FtiGDJH%2BS%2FVKuPXL31I2gr08Krlj0zT%2BlC27Ni5q%2F5Eg95u9ctCfWyKj14P0IG%2BWYeXkvaUDLrWBhI4CGQxDAqO6izv4a6Eb7hCUS71wbBPhY%2Bm4Fqsxt6lsNdQ3sqtMAoWIx5kw6OkAdRG0bUjoQ2kymJv0x6kGjxnQhDN3fNdXzNo8mQcIrW7Zos4ojJHVJ5QW1MaJ5zY31PJqXtVcXwz%2BHENF05q80hgHaLiNfxXwiU1zj9EmGacnFNXn5KEjhqTYYXELgYIuv2ZIkL73Aj%2B8qqzgv0UKTi0M5At0H786uWEOCCP3tnBwJEMFzQDcquDclLvTy9%2F1FgDY8do08%2B15rN4j1Eh44MVyqIMhYfJYvoUYG517yMbJgbYJ5d%2F3Nv%2BhfUwSGlsC8lJ0LrxlfOPNcf%2BcasZi1TZHCiQyzzXLJw8hZGt8daUr2FbFhCs96FCSjxuEg1vPwMuPOnRNbX%2B4G2DGihJVkS0ica1v4m8%2BY%2F451N1A4godRFN5BzsPXaJDQBMevZlwnbb44x0dZ9shduIpZo5KuP44QBUTcr6qs8ANtuJU3sGVpD8fWzrHNEjp4Q%2F8avU92bdD9dRXg72LUBN6ycmioaCaK0TNy%2B7xrgMNeQrsQGOqUBocT1%2BRJ8XXAtEcPNOsbLyNMlewR0KiLzOXP7N8ynIllyO3XugIme%2BjTOsEQ%2B88zvHkjoeaLf3%2B94zqSEmnhI4tBOIk0pbqUO5HnpF3gA2t1WXJmxZngWEJg91Bh8LZuKH4u38YjjpM%2BJOu7GjedVQB%2FpzkZudx3Wz3tNSUelEY6HLx5LhHtFO7gjw8j4cJj9NBkNE60J%2FZpOeG4Oxtx3rNmpqPFu&X-Amz-Signature=e304a3464913d0d6b3ff546be6e6dbd7c8e601300abbc4300c4c2dfedb55d95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS6C5LH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9l1hnFZOiUoD98hpac691UisQNZ6cDGBDYQOJCvNNMAiEA%2BJ6cH1JKphBL3BCKXt2c8QAWa1JZ%2FTly%2FyOC26Hy4H0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx%2FZygKEhCOpBMSByrcAxIkC9QjBC6CKt%2FtiGDJH%2BS%2FVKuPXL31I2gr08Krlj0zT%2BlC27Ni5q%2F5Eg95u9ctCfWyKj14P0IG%2BWYeXkvaUDLrWBhI4CGQxDAqO6izv4a6Eb7hCUS71wbBPhY%2Bm4Fqsxt6lsNdQ3sqtMAoWIx5kw6OkAdRG0bUjoQ2kymJv0x6kGjxnQhDN3fNdXzNo8mQcIrW7Zos4ojJHVJ5QW1MaJ5zY31PJqXtVcXwz%2BHENF05q80hgHaLiNfxXwiU1zj9EmGacnFNXn5KEjhqTYYXELgYIuv2ZIkL73Aj%2B8qqzgv0UKTi0M5At0H786uWEOCCP3tnBwJEMFzQDcquDclLvTy9%2F1FgDY8do08%2B15rN4j1Eh44MVyqIMhYfJYvoUYG517yMbJgbYJ5d%2F3Nv%2BhfUwSGlsC8lJ0LrxlfOPNcf%2BcasZi1TZHCiQyzzXLJw8hZGt8daUr2FbFhCs96FCSjxuEg1vPwMuPOnRNbX%2B4G2DGihJVkS0ica1v4m8%2BY%2F451N1A4godRFN5BzsPXaJDQBMevZlwnbb44x0dZ9shduIpZo5KuP44QBUTcr6qs8ANtuJU3sGVpD8fWzrHNEjp4Q%2F8avU92bdD9dRXg72LUBN6ycmioaCaK0TNy%2B7xrgMNeQrsQGOqUBocT1%2BRJ8XXAtEcPNOsbLyNMlewR0KiLzOXP7N8ynIllyO3XugIme%2BjTOsEQ%2B88zvHkjoeaLf3%2B94zqSEmnhI4tBOIk0pbqUO5HnpF3gA2t1WXJmxZngWEJg91Bh8LZuKH4u38YjjpM%2BJOu7GjedVQB%2FpzkZudx3Wz3tNSUelEY6HLx5LhHtFO7gjw8j4cJj9NBkNE60J%2FZpOeG4Oxtx3rNmpqPFu&X-Amz-Signature=626db1144f1bfec2141460c147c0dd4e4070ccaaf93347cd405dae7cb7291648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS6C5LH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9l1hnFZOiUoD98hpac691UisQNZ6cDGBDYQOJCvNNMAiEA%2BJ6cH1JKphBL3BCKXt2c8QAWa1JZ%2FTly%2FyOC26Hy4H0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx%2FZygKEhCOpBMSByrcAxIkC9QjBC6CKt%2FtiGDJH%2BS%2FVKuPXL31I2gr08Krlj0zT%2BlC27Ni5q%2F5Eg95u9ctCfWyKj14P0IG%2BWYeXkvaUDLrWBhI4CGQxDAqO6izv4a6Eb7hCUS71wbBPhY%2Bm4Fqsxt6lsNdQ3sqtMAoWIx5kw6OkAdRG0bUjoQ2kymJv0x6kGjxnQhDN3fNdXzNo8mQcIrW7Zos4ojJHVJ5QW1MaJ5zY31PJqXtVcXwz%2BHENF05q80hgHaLiNfxXwiU1zj9EmGacnFNXn5KEjhqTYYXELgYIuv2ZIkL73Aj%2B8qqzgv0UKTi0M5At0H786uWEOCCP3tnBwJEMFzQDcquDclLvTy9%2F1FgDY8do08%2B15rN4j1Eh44MVyqIMhYfJYvoUYG517yMbJgbYJ5d%2F3Nv%2BhfUwSGlsC8lJ0LrxlfOPNcf%2BcasZi1TZHCiQyzzXLJw8hZGt8daUr2FbFhCs96FCSjxuEg1vPwMuPOnRNbX%2B4G2DGihJVkS0ica1v4m8%2BY%2F451N1A4godRFN5BzsPXaJDQBMevZlwnbb44x0dZ9shduIpZo5KuP44QBUTcr6qs8ANtuJU3sGVpD8fWzrHNEjp4Q%2F8avU92bdD9dRXg72LUBN6ycmioaCaK0TNy%2B7xrgMNeQrsQGOqUBocT1%2BRJ8XXAtEcPNOsbLyNMlewR0KiLzOXP7N8ynIllyO3XugIme%2BjTOsEQ%2B88zvHkjoeaLf3%2B94zqSEmnhI4tBOIk0pbqUO5HnpF3gA2t1WXJmxZngWEJg91Bh8LZuKH4u38YjjpM%2BJOu7GjedVQB%2FpzkZudx3Wz3tNSUelEY6HLx5LhHtFO7gjw8j4cJj9NBkNE60J%2FZpOeG4Oxtx3rNmpqPFu&X-Amz-Signature=7edd85a29cc3648166814094964c7f42ff80a2024667a88e8a1a003c847fd31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS6C5LH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9l1hnFZOiUoD98hpac691UisQNZ6cDGBDYQOJCvNNMAiEA%2BJ6cH1JKphBL3BCKXt2c8QAWa1JZ%2FTly%2FyOC26Hy4H0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx%2FZygKEhCOpBMSByrcAxIkC9QjBC6CKt%2FtiGDJH%2BS%2FVKuPXL31I2gr08Krlj0zT%2BlC27Ni5q%2F5Eg95u9ctCfWyKj14P0IG%2BWYeXkvaUDLrWBhI4CGQxDAqO6izv4a6Eb7hCUS71wbBPhY%2Bm4Fqsxt6lsNdQ3sqtMAoWIx5kw6OkAdRG0bUjoQ2kymJv0x6kGjxnQhDN3fNdXzNo8mQcIrW7Zos4ojJHVJ5QW1MaJ5zY31PJqXtVcXwz%2BHENF05q80hgHaLiNfxXwiU1zj9EmGacnFNXn5KEjhqTYYXELgYIuv2ZIkL73Aj%2B8qqzgv0UKTi0M5At0H786uWEOCCP3tnBwJEMFzQDcquDclLvTy9%2F1FgDY8do08%2B15rN4j1Eh44MVyqIMhYfJYvoUYG517yMbJgbYJ5d%2F3Nv%2BhfUwSGlsC8lJ0LrxlfOPNcf%2BcasZi1TZHCiQyzzXLJw8hZGt8daUr2FbFhCs96FCSjxuEg1vPwMuPOnRNbX%2B4G2DGihJVkS0ica1v4m8%2BY%2F451N1A4godRFN5BzsPXaJDQBMevZlwnbb44x0dZ9shduIpZo5KuP44QBUTcr6qs8ANtuJU3sGVpD8fWzrHNEjp4Q%2F8avU92bdD9dRXg72LUBN6ycmioaCaK0TNy%2B7xrgMNeQrsQGOqUBocT1%2BRJ8XXAtEcPNOsbLyNMlewR0KiLzOXP7N8ynIllyO3XugIme%2BjTOsEQ%2B88zvHkjoeaLf3%2B94zqSEmnhI4tBOIk0pbqUO5HnpF3gA2t1WXJmxZngWEJg91Bh8LZuKH4u38YjjpM%2BJOu7GjedVQB%2FpzkZudx3Wz3tNSUelEY6HLx5LhHtFO7gjw8j4cJj9NBkNE60J%2FZpOeG4Oxtx3rNmpqPFu&X-Amz-Signature=ff33a61ff41ce2cdbf436bc75394c9ac66e2cc5fb665cb51002c27ee2b515163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

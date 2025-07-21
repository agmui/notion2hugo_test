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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5BF3WY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl6F695VAvj6GS5ATUb8uVFIcuiHx0jV0z6o93oLy16wIhAIZCmgZZZgprNbRRHIQZZCnwRYPCvMcw08RIAZYkzATMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKYmjHwzOz2RjAkfEq3APYNAb6RIKVTDSnVDVliaGwTZoMPUrDOetp0joWB%2F2iWW3bgZHsl6vn6tAWHswXf8Im9hz5V0lcTTq84%2B%2BLGzm1YEn1mT1%2BDMjRS1DRk%2BmqixAT6aKdKRPSEyBvPsyguptWB0Lzh20JxDSwML%2BGka1rv5GpmCWtLzoQBr3YLXgf1bKfmfi6OryIodSIHf75PBkI1lYKOCsVIJZE0Ftoognj9tvQt7GNpN9iyKMjcLDTcXPo150TqLWHc0j3atBRQehOjRbx%2F0g23%2F%2BhnGGx%2B9%2FdxS1yLMI6%2Bz5J6wRjxNCzjJ30tozsINGuu4ZPXPtBZFM%2BSjNgOHifVCE%2FTVYs8xgQmj%2FHe%2FD2Wc4culaTPndoGeNOnfG7N2jMBD04V9SiifBw24UkM9skRpZ3tMA40sNuucIrlCrtarM0j7bnremvqb3muGAezQyVOblpQzpAkQAQpRaipqzN8iqEOpMovAlHiT4%2BGW9KjAYQ19G36ABouvrSMCAhLYMbHbJFoMaH4nfR0EdfuOsBWf5xf7ovtxa1A7AlKXfRn%2FZ5hN7QZooly1E3fu9zGzFB2wgDSeIF56UlKDpKirEyawhzTg0kFq0XM%2FhuXIpXOjKPi44uRBVbx9yr91iFqZa%2FTpzUzDDsxvbDBjqkATRMgmsTfTOBNrZClUm0%2BIaM%2FXR6Db8arL3423FMWQ%2BQjNJK2oS0xfIoOo%2FETgAdsdlVuzlJQvofMGcn6RWbJraUuTPQXJ6G3EqNdSRCQREw7pxNkRvdmvLjv91kci4arQRPpK3Xspv1TEnSGHrh7Awun6YVOzDelCttPXQ7lsZhRJSSHl30P6BNNCeWBEGw3j%2B79LCMwGsjr1894Zvwo4%2BXveE3&X-Amz-Signature=17a5369d508bd3131c6e5bbb0e996ff6063bfc6be10d1c60cdbbc6fd00d7d3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5BF3WY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl6F695VAvj6GS5ATUb8uVFIcuiHx0jV0z6o93oLy16wIhAIZCmgZZZgprNbRRHIQZZCnwRYPCvMcw08RIAZYkzATMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKYmjHwzOz2RjAkfEq3APYNAb6RIKVTDSnVDVliaGwTZoMPUrDOetp0joWB%2F2iWW3bgZHsl6vn6tAWHswXf8Im9hz5V0lcTTq84%2B%2BLGzm1YEn1mT1%2BDMjRS1DRk%2BmqixAT6aKdKRPSEyBvPsyguptWB0Lzh20JxDSwML%2BGka1rv5GpmCWtLzoQBr3YLXgf1bKfmfi6OryIodSIHf75PBkI1lYKOCsVIJZE0Ftoognj9tvQt7GNpN9iyKMjcLDTcXPo150TqLWHc0j3atBRQehOjRbx%2F0g23%2F%2BhnGGx%2B9%2FdxS1yLMI6%2Bz5J6wRjxNCzjJ30tozsINGuu4ZPXPtBZFM%2BSjNgOHifVCE%2FTVYs8xgQmj%2FHe%2FD2Wc4culaTPndoGeNOnfG7N2jMBD04V9SiifBw24UkM9skRpZ3tMA40sNuucIrlCrtarM0j7bnremvqb3muGAezQyVOblpQzpAkQAQpRaipqzN8iqEOpMovAlHiT4%2BGW9KjAYQ19G36ABouvrSMCAhLYMbHbJFoMaH4nfR0EdfuOsBWf5xf7ovtxa1A7AlKXfRn%2FZ5hN7QZooly1E3fu9zGzFB2wgDSeIF56UlKDpKirEyawhzTg0kFq0XM%2FhuXIpXOjKPi44uRBVbx9yr91iFqZa%2FTpzUzDDsxvbDBjqkATRMgmsTfTOBNrZClUm0%2BIaM%2FXR6Db8arL3423FMWQ%2BQjNJK2oS0xfIoOo%2FETgAdsdlVuzlJQvofMGcn6RWbJraUuTPQXJ6G3EqNdSRCQREw7pxNkRvdmvLjv91kci4arQRPpK3Xspv1TEnSGHrh7Awun6YVOzDelCttPXQ7lsZhRJSSHl30P6BNNCeWBEGw3j%2B79LCMwGsjr1894Zvwo4%2BXveE3&X-Amz-Signature=f10652f06a6b298dcfcc46a0c79c63ee71dc5a4dd62376d4d27743bd2cf8d740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5BF3WY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl6F695VAvj6GS5ATUb8uVFIcuiHx0jV0z6o93oLy16wIhAIZCmgZZZgprNbRRHIQZZCnwRYPCvMcw08RIAZYkzATMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKYmjHwzOz2RjAkfEq3APYNAb6RIKVTDSnVDVliaGwTZoMPUrDOetp0joWB%2F2iWW3bgZHsl6vn6tAWHswXf8Im9hz5V0lcTTq84%2B%2BLGzm1YEn1mT1%2BDMjRS1DRk%2BmqixAT6aKdKRPSEyBvPsyguptWB0Lzh20JxDSwML%2BGka1rv5GpmCWtLzoQBr3YLXgf1bKfmfi6OryIodSIHf75PBkI1lYKOCsVIJZE0Ftoognj9tvQt7GNpN9iyKMjcLDTcXPo150TqLWHc0j3atBRQehOjRbx%2F0g23%2F%2BhnGGx%2B9%2FdxS1yLMI6%2Bz5J6wRjxNCzjJ30tozsINGuu4ZPXPtBZFM%2BSjNgOHifVCE%2FTVYs8xgQmj%2FHe%2FD2Wc4culaTPndoGeNOnfG7N2jMBD04V9SiifBw24UkM9skRpZ3tMA40sNuucIrlCrtarM0j7bnremvqb3muGAezQyVOblpQzpAkQAQpRaipqzN8iqEOpMovAlHiT4%2BGW9KjAYQ19G36ABouvrSMCAhLYMbHbJFoMaH4nfR0EdfuOsBWf5xf7ovtxa1A7AlKXfRn%2FZ5hN7QZooly1E3fu9zGzFB2wgDSeIF56UlKDpKirEyawhzTg0kFq0XM%2FhuXIpXOjKPi44uRBVbx9yr91iFqZa%2FTpzUzDDsxvbDBjqkATRMgmsTfTOBNrZClUm0%2BIaM%2FXR6Db8arL3423FMWQ%2BQjNJK2oS0xfIoOo%2FETgAdsdlVuzlJQvofMGcn6RWbJraUuTPQXJ6G3EqNdSRCQREw7pxNkRvdmvLjv91kci4arQRPpK3Xspv1TEnSGHrh7Awun6YVOzDelCttPXQ7lsZhRJSSHl30P6BNNCeWBEGw3j%2B79LCMwGsjr1894Zvwo4%2BXveE3&X-Amz-Signature=ad8ad91a152a0a16ac316dd4c62838754dea36756657f40420ded9b6f325e9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5BF3WY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl6F695VAvj6GS5ATUb8uVFIcuiHx0jV0z6o93oLy16wIhAIZCmgZZZgprNbRRHIQZZCnwRYPCvMcw08RIAZYkzATMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKYmjHwzOz2RjAkfEq3APYNAb6RIKVTDSnVDVliaGwTZoMPUrDOetp0joWB%2F2iWW3bgZHsl6vn6tAWHswXf8Im9hz5V0lcTTq84%2B%2BLGzm1YEn1mT1%2BDMjRS1DRk%2BmqixAT6aKdKRPSEyBvPsyguptWB0Lzh20JxDSwML%2BGka1rv5GpmCWtLzoQBr3YLXgf1bKfmfi6OryIodSIHf75PBkI1lYKOCsVIJZE0Ftoognj9tvQt7GNpN9iyKMjcLDTcXPo150TqLWHc0j3atBRQehOjRbx%2F0g23%2F%2BhnGGx%2B9%2FdxS1yLMI6%2Bz5J6wRjxNCzjJ30tozsINGuu4ZPXPtBZFM%2BSjNgOHifVCE%2FTVYs8xgQmj%2FHe%2FD2Wc4culaTPndoGeNOnfG7N2jMBD04V9SiifBw24UkM9skRpZ3tMA40sNuucIrlCrtarM0j7bnremvqb3muGAezQyVOblpQzpAkQAQpRaipqzN8iqEOpMovAlHiT4%2BGW9KjAYQ19G36ABouvrSMCAhLYMbHbJFoMaH4nfR0EdfuOsBWf5xf7ovtxa1A7AlKXfRn%2FZ5hN7QZooly1E3fu9zGzFB2wgDSeIF56UlKDpKirEyawhzTg0kFq0XM%2FhuXIpXOjKPi44uRBVbx9yr91iFqZa%2FTpzUzDDsxvbDBjqkATRMgmsTfTOBNrZClUm0%2BIaM%2FXR6Db8arL3423FMWQ%2BQjNJK2oS0xfIoOo%2FETgAdsdlVuzlJQvofMGcn6RWbJraUuTPQXJ6G3EqNdSRCQREw7pxNkRvdmvLjv91kci4arQRPpK3Xspv1TEnSGHrh7Awun6YVOzDelCttPXQ7lsZhRJSSHl30P6BNNCeWBEGw3j%2B79LCMwGsjr1894Zvwo4%2BXveE3&X-Amz-Signature=470ae567b7d703b45dc837a5d852bbb256520e9ffcae4c46f305bb4638e4b313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5BF3WY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl6F695VAvj6GS5ATUb8uVFIcuiHx0jV0z6o93oLy16wIhAIZCmgZZZgprNbRRHIQZZCnwRYPCvMcw08RIAZYkzATMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKYmjHwzOz2RjAkfEq3APYNAb6RIKVTDSnVDVliaGwTZoMPUrDOetp0joWB%2F2iWW3bgZHsl6vn6tAWHswXf8Im9hz5V0lcTTq84%2B%2BLGzm1YEn1mT1%2BDMjRS1DRk%2BmqixAT6aKdKRPSEyBvPsyguptWB0Lzh20JxDSwML%2BGka1rv5GpmCWtLzoQBr3YLXgf1bKfmfi6OryIodSIHf75PBkI1lYKOCsVIJZE0Ftoognj9tvQt7GNpN9iyKMjcLDTcXPo150TqLWHc0j3atBRQehOjRbx%2F0g23%2F%2BhnGGx%2B9%2FdxS1yLMI6%2Bz5J6wRjxNCzjJ30tozsINGuu4ZPXPtBZFM%2BSjNgOHifVCE%2FTVYs8xgQmj%2FHe%2FD2Wc4culaTPndoGeNOnfG7N2jMBD04V9SiifBw24UkM9skRpZ3tMA40sNuucIrlCrtarM0j7bnremvqb3muGAezQyVOblpQzpAkQAQpRaipqzN8iqEOpMovAlHiT4%2BGW9KjAYQ19G36ABouvrSMCAhLYMbHbJFoMaH4nfR0EdfuOsBWf5xf7ovtxa1A7AlKXfRn%2FZ5hN7QZooly1E3fu9zGzFB2wgDSeIF56UlKDpKirEyawhzTg0kFq0XM%2FhuXIpXOjKPi44uRBVbx9yr91iFqZa%2FTpzUzDDsxvbDBjqkATRMgmsTfTOBNrZClUm0%2BIaM%2FXR6Db8arL3423FMWQ%2BQjNJK2oS0xfIoOo%2FETgAdsdlVuzlJQvofMGcn6RWbJraUuTPQXJ6G3EqNdSRCQREw7pxNkRvdmvLjv91kci4arQRPpK3Xspv1TEnSGHrh7Awun6YVOzDelCttPXQ7lsZhRJSSHl30P6BNNCeWBEGw3j%2B79LCMwGsjr1894Zvwo4%2BXveE3&X-Amz-Signature=d834d21ef3ffa1c5ba813efc918bbc841f90814c7a57f2f61fb91afb81a0d2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5BF3WY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl6F695VAvj6GS5ATUb8uVFIcuiHx0jV0z6o93oLy16wIhAIZCmgZZZgprNbRRHIQZZCnwRYPCvMcw08RIAZYkzATMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKYmjHwzOz2RjAkfEq3APYNAb6RIKVTDSnVDVliaGwTZoMPUrDOetp0joWB%2F2iWW3bgZHsl6vn6tAWHswXf8Im9hz5V0lcTTq84%2B%2BLGzm1YEn1mT1%2BDMjRS1DRk%2BmqixAT6aKdKRPSEyBvPsyguptWB0Lzh20JxDSwML%2BGka1rv5GpmCWtLzoQBr3YLXgf1bKfmfi6OryIodSIHf75PBkI1lYKOCsVIJZE0Ftoognj9tvQt7GNpN9iyKMjcLDTcXPo150TqLWHc0j3atBRQehOjRbx%2F0g23%2F%2BhnGGx%2B9%2FdxS1yLMI6%2Bz5J6wRjxNCzjJ30tozsINGuu4ZPXPtBZFM%2BSjNgOHifVCE%2FTVYs8xgQmj%2FHe%2FD2Wc4culaTPndoGeNOnfG7N2jMBD04V9SiifBw24UkM9skRpZ3tMA40sNuucIrlCrtarM0j7bnremvqb3muGAezQyVOblpQzpAkQAQpRaipqzN8iqEOpMovAlHiT4%2BGW9KjAYQ19G36ABouvrSMCAhLYMbHbJFoMaH4nfR0EdfuOsBWf5xf7ovtxa1A7AlKXfRn%2FZ5hN7QZooly1E3fu9zGzFB2wgDSeIF56UlKDpKirEyawhzTg0kFq0XM%2FhuXIpXOjKPi44uRBVbx9yr91iFqZa%2FTpzUzDDsxvbDBjqkATRMgmsTfTOBNrZClUm0%2BIaM%2FXR6Db8arL3423FMWQ%2BQjNJK2oS0xfIoOo%2FETgAdsdlVuzlJQvofMGcn6RWbJraUuTPQXJ6G3EqNdSRCQREw7pxNkRvdmvLjv91kci4arQRPpK3Xspv1TEnSGHrh7Awun6YVOzDelCttPXQ7lsZhRJSSHl30P6BNNCeWBEGw3j%2B79LCMwGsjr1894Zvwo4%2BXveE3&X-Amz-Signature=2184b9ad2ecdf9cfc5f835b2c7e090486121a558b586b4decdd3a45d765a03bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5BF3WY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl6F695VAvj6GS5ATUb8uVFIcuiHx0jV0z6o93oLy16wIhAIZCmgZZZgprNbRRHIQZZCnwRYPCvMcw08RIAZYkzATMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKYmjHwzOz2RjAkfEq3APYNAb6RIKVTDSnVDVliaGwTZoMPUrDOetp0joWB%2F2iWW3bgZHsl6vn6tAWHswXf8Im9hz5V0lcTTq84%2B%2BLGzm1YEn1mT1%2BDMjRS1DRk%2BmqixAT6aKdKRPSEyBvPsyguptWB0Lzh20JxDSwML%2BGka1rv5GpmCWtLzoQBr3YLXgf1bKfmfi6OryIodSIHf75PBkI1lYKOCsVIJZE0Ftoognj9tvQt7GNpN9iyKMjcLDTcXPo150TqLWHc0j3atBRQehOjRbx%2F0g23%2F%2BhnGGx%2B9%2FdxS1yLMI6%2Bz5J6wRjxNCzjJ30tozsINGuu4ZPXPtBZFM%2BSjNgOHifVCE%2FTVYs8xgQmj%2FHe%2FD2Wc4culaTPndoGeNOnfG7N2jMBD04V9SiifBw24UkM9skRpZ3tMA40sNuucIrlCrtarM0j7bnremvqb3muGAezQyVOblpQzpAkQAQpRaipqzN8iqEOpMovAlHiT4%2BGW9KjAYQ19G36ABouvrSMCAhLYMbHbJFoMaH4nfR0EdfuOsBWf5xf7ovtxa1A7AlKXfRn%2FZ5hN7QZooly1E3fu9zGzFB2wgDSeIF56UlKDpKirEyawhzTg0kFq0XM%2FhuXIpXOjKPi44uRBVbx9yr91iFqZa%2FTpzUzDDsxvbDBjqkATRMgmsTfTOBNrZClUm0%2BIaM%2FXR6Db8arL3423FMWQ%2BQjNJK2oS0xfIoOo%2FETgAdsdlVuzlJQvofMGcn6RWbJraUuTPQXJ6G3EqNdSRCQREw7pxNkRvdmvLjv91kci4arQRPpK3Xspv1TEnSGHrh7Awun6YVOzDelCttPXQ7lsZhRJSSHl30P6BNNCeWBEGw3j%2B79LCMwGsjr1894Zvwo4%2BXveE3&X-Amz-Signature=dcba6740498cfb4e7c7e03e3a2a8638d832eae1562240f9bf05dbe7f6b6fd5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5BF3WY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl6F695VAvj6GS5ATUb8uVFIcuiHx0jV0z6o93oLy16wIhAIZCmgZZZgprNbRRHIQZZCnwRYPCvMcw08RIAZYkzATMKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKYmjHwzOz2RjAkfEq3APYNAb6RIKVTDSnVDVliaGwTZoMPUrDOetp0joWB%2F2iWW3bgZHsl6vn6tAWHswXf8Im9hz5V0lcTTq84%2B%2BLGzm1YEn1mT1%2BDMjRS1DRk%2BmqixAT6aKdKRPSEyBvPsyguptWB0Lzh20JxDSwML%2BGka1rv5GpmCWtLzoQBr3YLXgf1bKfmfi6OryIodSIHf75PBkI1lYKOCsVIJZE0Ftoognj9tvQt7GNpN9iyKMjcLDTcXPo150TqLWHc0j3atBRQehOjRbx%2F0g23%2F%2BhnGGx%2B9%2FdxS1yLMI6%2Bz5J6wRjxNCzjJ30tozsINGuu4ZPXPtBZFM%2BSjNgOHifVCE%2FTVYs8xgQmj%2FHe%2FD2Wc4culaTPndoGeNOnfG7N2jMBD04V9SiifBw24UkM9skRpZ3tMA40sNuucIrlCrtarM0j7bnremvqb3muGAezQyVOblpQzpAkQAQpRaipqzN8iqEOpMovAlHiT4%2BGW9KjAYQ19G36ABouvrSMCAhLYMbHbJFoMaH4nfR0EdfuOsBWf5xf7ovtxa1A7AlKXfRn%2FZ5hN7QZooly1E3fu9zGzFB2wgDSeIF56UlKDpKirEyawhzTg0kFq0XM%2FhuXIpXOjKPi44uRBVbx9yr91iFqZa%2FTpzUzDDsxvbDBjqkATRMgmsTfTOBNrZClUm0%2BIaM%2FXR6Db8arL3423FMWQ%2BQjNJK2oS0xfIoOo%2FETgAdsdlVuzlJQvofMGcn6RWbJraUuTPQXJ6G3EqNdSRCQREw7pxNkRvdmvLjv91kci4arQRPpK3Xspv1TEnSGHrh7Awun6YVOzDelCttPXQ7lsZhRJSSHl30P6BNNCeWBEGw3j%2B79LCMwGsjr1894Zvwo4%2BXveE3&X-Amz-Signature=54a0e95f281b6f965b3ceee61ed239f4a6d34cf3c7353be7f20e9ec6cf929b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNOFSRQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjA6SzAno3FHrEAiDXHork2cxKboUafNlDZyFAtSoouwIhAMkXVccpJOGP%2BBuKyCmsPNZdL3oy6WgEM7P8oH2h4oFCKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVAgrETDCSTyz%2BP8q3ANoMM60DGnu%2BKdKP4dJ22IpiMqrt9taHJIvLXWoa82mM%2Bz%2Fq4bu3cuxZJKSRanX0phF%2FnzNKcWPE3wLB%2Fj4VJb%2FsWztbwIFdyfELPSA%2FkR3QFWavN43blOu45Fm0vF5gTirTF5qa8ArRiP6f3P1AbW0uYR4S9P3Mmf1EtpJuSxy5Tw7EgRPHeJ26e%2FPLdRAp3WwAobKbN28osaCElZRMg3Xv%2BUs6nR9hQxdMsqQMgZ5hG0EsfXjthQ2XoThn1icGwvuGyjER5KFKJODl2damqYogokBNk0UDxewYotzggYhfTXCTR7Eey73gra%2B44HLmMYe6yDPPYoFRazjPoUxGdDc1Ttf8r07s8E4JMbGC4NSbArEvB%2BTG5rs6Q8HGfOA6sjsk%2FItX8wNE6BtvwGc6cQUwzs7zHJNM%2F8u0sRyQd6pj1RrDdl3Gy4GV4HzK87hptYL4RJ7FdcCTWgohkPE7mXwTHuHcQA0u54S6sdfPJdRziEeQZOuAg3oIVS85wTf%2BItQ1eKzmCYqgNvPLdQ35boFDvU9bcHUtlvkZqSuvm0JbJZZfH2HHiNqQVsBPC59SV8EcFXrH1BxihAzDUP2fjeHOciAFLm7JHvJwfhZY6ezSZzHTBS9NPmQK2JcYDDlz8fDBjqkAUqXs3aZ4mtjQYZrn3bDGsUkg%2Fzp4%2Fg57ZY%2FFHKPmITR6boYUqTB%2FEssApdBOQwNEtWhRKv5h552JYbSIIGltbvu1JpBlhF%2FbxX%2BEh%2FtzG%2BesN76IdDbyd1THzir3D4ZkJ9NdbV0x%2B%2FnivDGq2OK2YYrsWkq%2BvIQ4Gj3bbyWT%2BmD4lDdkoAq1N8%2BSTionx3WhsZSPpTZ%2Fs0TbkXLugr3bS2lAgW5&X-Amz-Signature=de30b0b6956ee0b8786bb4eb3a423fd265d099586909dcd8e159d1fc60e43c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNOFSRQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjA6SzAno3FHrEAiDXHork2cxKboUafNlDZyFAtSoouwIhAMkXVccpJOGP%2BBuKyCmsPNZdL3oy6WgEM7P8oH2h4oFCKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVAgrETDCSTyz%2BP8q3ANoMM60DGnu%2BKdKP4dJ22IpiMqrt9taHJIvLXWoa82mM%2Bz%2Fq4bu3cuxZJKSRanX0phF%2FnzNKcWPE3wLB%2Fj4VJb%2FsWztbwIFdyfELPSA%2FkR3QFWavN43blOu45Fm0vF5gTirTF5qa8ArRiP6f3P1AbW0uYR4S9P3Mmf1EtpJuSxy5Tw7EgRPHeJ26e%2FPLdRAp3WwAobKbN28osaCElZRMg3Xv%2BUs6nR9hQxdMsqQMgZ5hG0EsfXjthQ2XoThn1icGwvuGyjER5KFKJODl2damqYogokBNk0UDxewYotzggYhfTXCTR7Eey73gra%2B44HLmMYe6yDPPYoFRazjPoUxGdDc1Ttf8r07s8E4JMbGC4NSbArEvB%2BTG5rs6Q8HGfOA6sjsk%2FItX8wNE6BtvwGc6cQUwzs7zHJNM%2F8u0sRyQd6pj1RrDdl3Gy4GV4HzK87hptYL4RJ7FdcCTWgohkPE7mXwTHuHcQA0u54S6sdfPJdRziEeQZOuAg3oIVS85wTf%2BItQ1eKzmCYqgNvPLdQ35boFDvU9bcHUtlvkZqSuvm0JbJZZfH2HHiNqQVsBPC59SV8EcFXrH1BxihAzDUP2fjeHOciAFLm7JHvJwfhZY6ezSZzHTBS9NPmQK2JcYDDlz8fDBjqkAUqXs3aZ4mtjQYZrn3bDGsUkg%2Fzp4%2Fg57ZY%2FFHKPmITR6boYUqTB%2FEssApdBOQwNEtWhRKv5h552JYbSIIGltbvu1JpBlhF%2FbxX%2BEh%2FtzG%2BesN76IdDbyd1THzir3D4ZkJ9NdbV0x%2B%2FnivDGq2OK2YYrsWkq%2BvIQ4Gj3bbyWT%2BmD4lDdkoAq1N8%2BSTionx3WhsZSPpTZ%2Fs0TbkXLugr3bS2lAgW5&X-Amz-Signature=acf6705500b83b0b0bcf7ebbea960cec58959e72234bc5d8e533a27d82e60b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNOFSRQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjA6SzAno3FHrEAiDXHork2cxKboUafNlDZyFAtSoouwIhAMkXVccpJOGP%2BBuKyCmsPNZdL3oy6WgEM7P8oH2h4oFCKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVAgrETDCSTyz%2BP8q3ANoMM60DGnu%2BKdKP4dJ22IpiMqrt9taHJIvLXWoa82mM%2Bz%2Fq4bu3cuxZJKSRanX0phF%2FnzNKcWPE3wLB%2Fj4VJb%2FsWztbwIFdyfELPSA%2FkR3QFWavN43blOu45Fm0vF5gTirTF5qa8ArRiP6f3P1AbW0uYR4S9P3Mmf1EtpJuSxy5Tw7EgRPHeJ26e%2FPLdRAp3WwAobKbN28osaCElZRMg3Xv%2BUs6nR9hQxdMsqQMgZ5hG0EsfXjthQ2XoThn1icGwvuGyjER5KFKJODl2damqYogokBNk0UDxewYotzggYhfTXCTR7Eey73gra%2B44HLmMYe6yDPPYoFRazjPoUxGdDc1Ttf8r07s8E4JMbGC4NSbArEvB%2BTG5rs6Q8HGfOA6sjsk%2FItX8wNE6BtvwGc6cQUwzs7zHJNM%2F8u0sRyQd6pj1RrDdl3Gy4GV4HzK87hptYL4RJ7FdcCTWgohkPE7mXwTHuHcQA0u54S6sdfPJdRziEeQZOuAg3oIVS85wTf%2BItQ1eKzmCYqgNvPLdQ35boFDvU9bcHUtlvkZqSuvm0JbJZZfH2HHiNqQVsBPC59SV8EcFXrH1BxihAzDUP2fjeHOciAFLm7JHvJwfhZY6ezSZzHTBS9NPmQK2JcYDDlz8fDBjqkAUqXs3aZ4mtjQYZrn3bDGsUkg%2Fzp4%2Fg57ZY%2FFHKPmITR6boYUqTB%2FEssApdBOQwNEtWhRKv5h552JYbSIIGltbvu1JpBlhF%2FbxX%2BEh%2FtzG%2BesN76IdDbyd1THzir3D4ZkJ9NdbV0x%2B%2FnivDGq2OK2YYrsWkq%2BvIQ4Gj3bbyWT%2BmD4lDdkoAq1N8%2BSTionx3WhsZSPpTZ%2Fs0TbkXLugr3bS2lAgW5&X-Amz-Signature=9626dd8330698f3313ac81424bc9dc1b804b53f80554d37a7fa9d874897960ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNOFSRQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjA6SzAno3FHrEAiDXHork2cxKboUafNlDZyFAtSoouwIhAMkXVccpJOGP%2BBuKyCmsPNZdL3oy6WgEM7P8oH2h4oFCKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVAgrETDCSTyz%2BP8q3ANoMM60DGnu%2BKdKP4dJ22IpiMqrt9taHJIvLXWoa82mM%2Bz%2Fq4bu3cuxZJKSRanX0phF%2FnzNKcWPE3wLB%2Fj4VJb%2FsWztbwIFdyfELPSA%2FkR3QFWavN43blOu45Fm0vF5gTirTF5qa8ArRiP6f3P1AbW0uYR4S9P3Mmf1EtpJuSxy5Tw7EgRPHeJ26e%2FPLdRAp3WwAobKbN28osaCElZRMg3Xv%2BUs6nR9hQxdMsqQMgZ5hG0EsfXjthQ2XoThn1icGwvuGyjER5KFKJODl2damqYogokBNk0UDxewYotzggYhfTXCTR7Eey73gra%2B44HLmMYe6yDPPYoFRazjPoUxGdDc1Ttf8r07s8E4JMbGC4NSbArEvB%2BTG5rs6Q8HGfOA6sjsk%2FItX8wNE6BtvwGc6cQUwzs7zHJNM%2F8u0sRyQd6pj1RrDdl3Gy4GV4HzK87hptYL4RJ7FdcCTWgohkPE7mXwTHuHcQA0u54S6sdfPJdRziEeQZOuAg3oIVS85wTf%2BItQ1eKzmCYqgNvPLdQ35boFDvU9bcHUtlvkZqSuvm0JbJZZfH2HHiNqQVsBPC59SV8EcFXrH1BxihAzDUP2fjeHOciAFLm7JHvJwfhZY6ezSZzHTBS9NPmQK2JcYDDlz8fDBjqkAUqXs3aZ4mtjQYZrn3bDGsUkg%2Fzp4%2Fg57ZY%2FFHKPmITR6boYUqTB%2FEssApdBOQwNEtWhRKv5h552JYbSIIGltbvu1JpBlhF%2FbxX%2BEh%2FtzG%2BesN76IdDbyd1THzir3D4ZkJ9NdbV0x%2B%2FnivDGq2OK2YYrsWkq%2BvIQ4Gj3bbyWT%2BmD4lDdkoAq1N8%2BSTionx3WhsZSPpTZ%2Fs0TbkXLugr3bS2lAgW5&X-Amz-Signature=149ce246b48651d839bd04c2a99a15a420b788df46e9fb611e32619035338043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNOFSRQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjA6SzAno3FHrEAiDXHork2cxKboUafNlDZyFAtSoouwIhAMkXVccpJOGP%2BBuKyCmsPNZdL3oy6WgEM7P8oH2h4oFCKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVAgrETDCSTyz%2BP8q3ANoMM60DGnu%2BKdKP4dJ22IpiMqrt9taHJIvLXWoa82mM%2Bz%2Fq4bu3cuxZJKSRanX0phF%2FnzNKcWPE3wLB%2Fj4VJb%2FsWztbwIFdyfELPSA%2FkR3QFWavN43blOu45Fm0vF5gTirTF5qa8ArRiP6f3P1AbW0uYR4S9P3Mmf1EtpJuSxy5Tw7EgRPHeJ26e%2FPLdRAp3WwAobKbN28osaCElZRMg3Xv%2BUs6nR9hQxdMsqQMgZ5hG0EsfXjthQ2XoThn1icGwvuGyjER5KFKJODl2damqYogokBNk0UDxewYotzggYhfTXCTR7Eey73gra%2B44HLmMYe6yDPPYoFRazjPoUxGdDc1Ttf8r07s8E4JMbGC4NSbArEvB%2BTG5rs6Q8HGfOA6sjsk%2FItX8wNE6BtvwGc6cQUwzs7zHJNM%2F8u0sRyQd6pj1RrDdl3Gy4GV4HzK87hptYL4RJ7FdcCTWgohkPE7mXwTHuHcQA0u54S6sdfPJdRziEeQZOuAg3oIVS85wTf%2BItQ1eKzmCYqgNvPLdQ35boFDvU9bcHUtlvkZqSuvm0JbJZZfH2HHiNqQVsBPC59SV8EcFXrH1BxihAzDUP2fjeHOciAFLm7JHvJwfhZY6ezSZzHTBS9NPmQK2JcYDDlz8fDBjqkAUqXs3aZ4mtjQYZrn3bDGsUkg%2Fzp4%2Fg57ZY%2FFHKPmITR6boYUqTB%2FEssApdBOQwNEtWhRKv5h552JYbSIIGltbvu1JpBlhF%2FbxX%2BEh%2FtzG%2BesN76IdDbyd1THzir3D4ZkJ9NdbV0x%2B%2FnivDGq2OK2YYrsWkq%2BvIQ4Gj3bbyWT%2BmD4lDdkoAq1N8%2BSTionx3WhsZSPpTZ%2Fs0TbkXLugr3bS2lAgW5&X-Amz-Signature=00dbcfd76002855ae0685c2aaf5c024133b288da4b1a48a6d8b1439a118a27f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNOFSRQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjA6SzAno3FHrEAiDXHork2cxKboUafNlDZyFAtSoouwIhAMkXVccpJOGP%2BBuKyCmsPNZdL3oy6WgEM7P8oH2h4oFCKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVAgrETDCSTyz%2BP8q3ANoMM60DGnu%2BKdKP4dJ22IpiMqrt9taHJIvLXWoa82mM%2Bz%2Fq4bu3cuxZJKSRanX0phF%2FnzNKcWPE3wLB%2Fj4VJb%2FsWztbwIFdyfELPSA%2FkR3QFWavN43blOu45Fm0vF5gTirTF5qa8ArRiP6f3P1AbW0uYR4S9P3Mmf1EtpJuSxy5Tw7EgRPHeJ26e%2FPLdRAp3WwAobKbN28osaCElZRMg3Xv%2BUs6nR9hQxdMsqQMgZ5hG0EsfXjthQ2XoThn1icGwvuGyjER5KFKJODl2damqYogokBNk0UDxewYotzggYhfTXCTR7Eey73gra%2B44HLmMYe6yDPPYoFRazjPoUxGdDc1Ttf8r07s8E4JMbGC4NSbArEvB%2BTG5rs6Q8HGfOA6sjsk%2FItX8wNE6BtvwGc6cQUwzs7zHJNM%2F8u0sRyQd6pj1RrDdl3Gy4GV4HzK87hptYL4RJ7FdcCTWgohkPE7mXwTHuHcQA0u54S6sdfPJdRziEeQZOuAg3oIVS85wTf%2BItQ1eKzmCYqgNvPLdQ35boFDvU9bcHUtlvkZqSuvm0JbJZZfH2HHiNqQVsBPC59SV8EcFXrH1BxihAzDUP2fjeHOciAFLm7JHvJwfhZY6ezSZzHTBS9NPmQK2JcYDDlz8fDBjqkAUqXs3aZ4mtjQYZrn3bDGsUkg%2Fzp4%2Fg57ZY%2FFHKPmITR6boYUqTB%2FEssApdBOQwNEtWhRKv5h552JYbSIIGltbvu1JpBlhF%2FbxX%2BEh%2FtzG%2BesN76IdDbyd1THzir3D4ZkJ9NdbV0x%2B%2FnivDGq2OK2YYrsWkq%2BvIQ4Gj3bbyWT%2BmD4lDdkoAq1N8%2BSTionx3WhsZSPpTZ%2Fs0TbkXLugr3bS2lAgW5&X-Amz-Signature=99c4c77529bb6cfb00fef17fe8181b17942d7cde0dd7e9ef95da568cc7ac98a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNOFSRQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjA6SzAno3FHrEAiDXHork2cxKboUafNlDZyFAtSoouwIhAMkXVccpJOGP%2BBuKyCmsPNZdL3oy6WgEM7P8oH2h4oFCKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVAgrETDCSTyz%2BP8q3ANoMM60DGnu%2BKdKP4dJ22IpiMqrt9taHJIvLXWoa82mM%2Bz%2Fq4bu3cuxZJKSRanX0phF%2FnzNKcWPE3wLB%2Fj4VJb%2FsWztbwIFdyfELPSA%2FkR3QFWavN43blOu45Fm0vF5gTirTF5qa8ArRiP6f3P1AbW0uYR4S9P3Mmf1EtpJuSxy5Tw7EgRPHeJ26e%2FPLdRAp3WwAobKbN28osaCElZRMg3Xv%2BUs6nR9hQxdMsqQMgZ5hG0EsfXjthQ2XoThn1icGwvuGyjER5KFKJODl2damqYogokBNk0UDxewYotzggYhfTXCTR7Eey73gra%2B44HLmMYe6yDPPYoFRazjPoUxGdDc1Ttf8r07s8E4JMbGC4NSbArEvB%2BTG5rs6Q8HGfOA6sjsk%2FItX8wNE6BtvwGc6cQUwzs7zHJNM%2F8u0sRyQd6pj1RrDdl3Gy4GV4HzK87hptYL4RJ7FdcCTWgohkPE7mXwTHuHcQA0u54S6sdfPJdRziEeQZOuAg3oIVS85wTf%2BItQ1eKzmCYqgNvPLdQ35boFDvU9bcHUtlvkZqSuvm0JbJZZfH2HHiNqQVsBPC59SV8EcFXrH1BxihAzDUP2fjeHOciAFLm7JHvJwfhZY6ezSZzHTBS9NPmQK2JcYDDlz8fDBjqkAUqXs3aZ4mtjQYZrn3bDGsUkg%2Fzp4%2Fg57ZY%2FFHKPmITR6boYUqTB%2FEssApdBOQwNEtWhRKv5h552JYbSIIGltbvu1JpBlhF%2FbxX%2BEh%2FtzG%2BesN76IdDbyd1THzir3D4ZkJ9NdbV0x%2B%2FnivDGq2OK2YYrsWkq%2BvIQ4Gj3bbyWT%2BmD4lDdkoAq1N8%2BSTionx3WhsZSPpTZ%2Fs0TbkXLugr3bS2lAgW5&X-Amz-Signature=5491acef0c2a83e3c81a91957b78272ca44d702298e34a91cc7e242c9beae870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNOFSRQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjA6SzAno3FHrEAiDXHork2cxKboUafNlDZyFAtSoouwIhAMkXVccpJOGP%2BBuKyCmsPNZdL3oy6WgEM7P8oH2h4oFCKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVAgrETDCSTyz%2BP8q3ANoMM60DGnu%2BKdKP4dJ22IpiMqrt9taHJIvLXWoa82mM%2Bz%2Fq4bu3cuxZJKSRanX0phF%2FnzNKcWPE3wLB%2Fj4VJb%2FsWztbwIFdyfELPSA%2FkR3QFWavN43blOu45Fm0vF5gTirTF5qa8ArRiP6f3P1AbW0uYR4S9P3Mmf1EtpJuSxy5Tw7EgRPHeJ26e%2FPLdRAp3WwAobKbN28osaCElZRMg3Xv%2BUs6nR9hQxdMsqQMgZ5hG0EsfXjthQ2XoThn1icGwvuGyjER5KFKJODl2damqYogokBNk0UDxewYotzggYhfTXCTR7Eey73gra%2B44HLmMYe6yDPPYoFRazjPoUxGdDc1Ttf8r07s8E4JMbGC4NSbArEvB%2BTG5rs6Q8HGfOA6sjsk%2FItX8wNE6BtvwGc6cQUwzs7zHJNM%2F8u0sRyQd6pj1RrDdl3Gy4GV4HzK87hptYL4RJ7FdcCTWgohkPE7mXwTHuHcQA0u54S6sdfPJdRziEeQZOuAg3oIVS85wTf%2BItQ1eKzmCYqgNvPLdQ35boFDvU9bcHUtlvkZqSuvm0JbJZZfH2HHiNqQVsBPC59SV8EcFXrH1BxihAzDUP2fjeHOciAFLm7JHvJwfhZY6ezSZzHTBS9NPmQK2JcYDDlz8fDBjqkAUqXs3aZ4mtjQYZrn3bDGsUkg%2Fzp4%2Fg57ZY%2FFHKPmITR6boYUqTB%2FEssApdBOQwNEtWhRKv5h552JYbSIIGltbvu1JpBlhF%2FbxX%2BEh%2FtzG%2BesN76IdDbyd1THzir3D4ZkJ9NdbV0x%2B%2FnivDGq2OK2YYrsWkq%2BvIQ4Gj3bbyWT%2BmD4lDdkoAq1N8%2BSTionx3WhsZSPpTZ%2Fs0TbkXLugr3bS2lAgW5&X-Amz-Signature=a8c77bd568fa64c3908721217852fc79fd4f9efde03b852f827796476b3fd5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

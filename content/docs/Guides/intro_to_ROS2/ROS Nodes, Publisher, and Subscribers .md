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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSZSRRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX4xakn5Teh9G6%2B6K1owURGbMw2D0zzekBwn%2BLYSgjSQIgccj6uiqp5g9ua815fALDujVvzr9NFE4HBSLZvCL67n0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMs03gOHXuRKNtXTircA5R7wMhFQh8d56E0%2F0cuO8UrWblcZgjh6fzTFpk%2BiLalK2CRpvs9yqbaDmMwKMV5plGwhqSZ93VAxMzQYFZdr3q75xc7Qo8KBi2dS3VT5UwvrzmiZms9uPZkmWEV8oqV0vPPiFYScwk7r0R23nulQ3Z9vJqUO0KYI%2BhwYr23nZJtg9%2FPvCok9Z9t1fLMAHUd7niHyNLxRh6%2Foo5J%2BlK15LsPdR8PDxOIqs1zIdrMo%2FnwkB9%2FAEfkTUEZWYOrT1MlpDY8VjjPol0cRrl2K3P%2F99lFkXTFtIOUfsY%2FUjh3LmlBe3kJT8kfOUomrQIqxnat4bMTY%2FC8rBCHyWe3EUzHC6m%2B%2FUqTyvUxoRqcY2E7JC0NrUN%2F7AX%2F9ONqf%2FYWjFLYZAMSz3ltgYA3aEbTbcSB6V686YTF2YBmfLPorglVAuUUdD9UsPpLW44zVxRpWtctXr%2BUz7CZO10CH07OEuve6I%2F2bjYr1WSE3D0Fva0Gc%2BNIQJ1wXQscnL1DgtVLociXf57ckbU2xzV%2BnoKs68Hsv0Knw%2B6qgAPw2sUIVCiiqCrRgOBIXjxdNpMdN%2FMndu4qLKKUUPv%2FQ%2FeJPXFjzuNvB%2FIs2%2FBsMr3cuosZEg4v7NKoLi3aqpI5Pw44AIakMJKn3sIGOqUB65UdwGtb2dHJoysZsXkh5%2Bj2s89C6PjezaDoR2mBOuekQy%2FWg7RLWMOSv9uYm%2B7jZ9PKJ2zLuP%2BKud%2BeLx3HODQ6bw69LtuMyX4%2FODSOxyDXXrrNKevIVFBnqjygKgWf5qz4psJYvs7rdWr3y%2Fhs5P%2Ffh98EU9Bwc97tEoiqSamp6rMVWUD4FJNuYpkoYeDuAkIOw%2BQ%2F85g9968rDAepoSHTCrzm&X-Amz-Signature=0f36c4ef42e0de6437dac508619fbd53c31d0033ae33543e18770850a5fa5781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSZSRRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX4xakn5Teh9G6%2B6K1owURGbMw2D0zzekBwn%2BLYSgjSQIgccj6uiqp5g9ua815fALDujVvzr9NFE4HBSLZvCL67n0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMs03gOHXuRKNtXTircA5R7wMhFQh8d56E0%2F0cuO8UrWblcZgjh6fzTFpk%2BiLalK2CRpvs9yqbaDmMwKMV5plGwhqSZ93VAxMzQYFZdr3q75xc7Qo8KBi2dS3VT5UwvrzmiZms9uPZkmWEV8oqV0vPPiFYScwk7r0R23nulQ3Z9vJqUO0KYI%2BhwYr23nZJtg9%2FPvCok9Z9t1fLMAHUd7niHyNLxRh6%2Foo5J%2BlK15LsPdR8PDxOIqs1zIdrMo%2FnwkB9%2FAEfkTUEZWYOrT1MlpDY8VjjPol0cRrl2K3P%2F99lFkXTFtIOUfsY%2FUjh3LmlBe3kJT8kfOUomrQIqxnat4bMTY%2FC8rBCHyWe3EUzHC6m%2B%2FUqTyvUxoRqcY2E7JC0NrUN%2F7AX%2F9ONqf%2FYWjFLYZAMSz3ltgYA3aEbTbcSB6V686YTF2YBmfLPorglVAuUUdD9UsPpLW44zVxRpWtctXr%2BUz7CZO10CH07OEuve6I%2F2bjYr1WSE3D0Fva0Gc%2BNIQJ1wXQscnL1DgtVLociXf57ckbU2xzV%2BnoKs68Hsv0Knw%2B6qgAPw2sUIVCiiqCrRgOBIXjxdNpMdN%2FMndu4qLKKUUPv%2FQ%2FeJPXFjzuNvB%2FIs2%2FBsMr3cuosZEg4v7NKoLi3aqpI5Pw44AIakMJKn3sIGOqUB65UdwGtb2dHJoysZsXkh5%2Bj2s89C6PjezaDoR2mBOuekQy%2FWg7RLWMOSv9uYm%2B7jZ9PKJ2zLuP%2BKud%2BeLx3HODQ6bw69LtuMyX4%2FODSOxyDXXrrNKevIVFBnqjygKgWf5qz4psJYvs7rdWr3y%2Fhs5P%2Ffh98EU9Bwc97tEoiqSamp6rMVWUD4FJNuYpkoYeDuAkIOw%2BQ%2F85g9968rDAepoSHTCrzm&X-Amz-Signature=c520ba0072c3d68e41dab781700a41a279d4f0e4bc683d8dfdac302a37fe2ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSZSRRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX4xakn5Teh9G6%2B6K1owURGbMw2D0zzekBwn%2BLYSgjSQIgccj6uiqp5g9ua815fALDujVvzr9NFE4HBSLZvCL67n0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMs03gOHXuRKNtXTircA5R7wMhFQh8d56E0%2F0cuO8UrWblcZgjh6fzTFpk%2BiLalK2CRpvs9yqbaDmMwKMV5plGwhqSZ93VAxMzQYFZdr3q75xc7Qo8KBi2dS3VT5UwvrzmiZms9uPZkmWEV8oqV0vPPiFYScwk7r0R23nulQ3Z9vJqUO0KYI%2BhwYr23nZJtg9%2FPvCok9Z9t1fLMAHUd7niHyNLxRh6%2Foo5J%2BlK15LsPdR8PDxOIqs1zIdrMo%2FnwkB9%2FAEfkTUEZWYOrT1MlpDY8VjjPol0cRrl2K3P%2F99lFkXTFtIOUfsY%2FUjh3LmlBe3kJT8kfOUomrQIqxnat4bMTY%2FC8rBCHyWe3EUzHC6m%2B%2FUqTyvUxoRqcY2E7JC0NrUN%2F7AX%2F9ONqf%2FYWjFLYZAMSz3ltgYA3aEbTbcSB6V686YTF2YBmfLPorglVAuUUdD9UsPpLW44zVxRpWtctXr%2BUz7CZO10CH07OEuve6I%2F2bjYr1WSE3D0Fva0Gc%2BNIQJ1wXQscnL1DgtVLociXf57ckbU2xzV%2BnoKs68Hsv0Knw%2B6qgAPw2sUIVCiiqCrRgOBIXjxdNpMdN%2FMndu4qLKKUUPv%2FQ%2FeJPXFjzuNvB%2FIs2%2FBsMr3cuosZEg4v7NKoLi3aqpI5Pw44AIakMJKn3sIGOqUB65UdwGtb2dHJoysZsXkh5%2Bj2s89C6PjezaDoR2mBOuekQy%2FWg7RLWMOSv9uYm%2B7jZ9PKJ2zLuP%2BKud%2BeLx3HODQ6bw69LtuMyX4%2FODSOxyDXXrrNKevIVFBnqjygKgWf5qz4psJYvs7rdWr3y%2Fhs5P%2Ffh98EU9Bwc97tEoiqSamp6rMVWUD4FJNuYpkoYeDuAkIOw%2BQ%2F85g9968rDAepoSHTCrzm&X-Amz-Signature=0a81b22b9015e918a9bba179fb61ca1d072b7f6beb1ccd04504a1334c72af574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSZSRRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX4xakn5Teh9G6%2B6K1owURGbMw2D0zzekBwn%2BLYSgjSQIgccj6uiqp5g9ua815fALDujVvzr9NFE4HBSLZvCL67n0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMs03gOHXuRKNtXTircA5R7wMhFQh8d56E0%2F0cuO8UrWblcZgjh6fzTFpk%2BiLalK2CRpvs9yqbaDmMwKMV5plGwhqSZ93VAxMzQYFZdr3q75xc7Qo8KBi2dS3VT5UwvrzmiZms9uPZkmWEV8oqV0vPPiFYScwk7r0R23nulQ3Z9vJqUO0KYI%2BhwYr23nZJtg9%2FPvCok9Z9t1fLMAHUd7niHyNLxRh6%2Foo5J%2BlK15LsPdR8PDxOIqs1zIdrMo%2FnwkB9%2FAEfkTUEZWYOrT1MlpDY8VjjPol0cRrl2K3P%2F99lFkXTFtIOUfsY%2FUjh3LmlBe3kJT8kfOUomrQIqxnat4bMTY%2FC8rBCHyWe3EUzHC6m%2B%2FUqTyvUxoRqcY2E7JC0NrUN%2F7AX%2F9ONqf%2FYWjFLYZAMSz3ltgYA3aEbTbcSB6V686YTF2YBmfLPorglVAuUUdD9UsPpLW44zVxRpWtctXr%2BUz7CZO10CH07OEuve6I%2F2bjYr1WSE3D0Fva0Gc%2BNIQJ1wXQscnL1DgtVLociXf57ckbU2xzV%2BnoKs68Hsv0Knw%2B6qgAPw2sUIVCiiqCrRgOBIXjxdNpMdN%2FMndu4qLKKUUPv%2FQ%2FeJPXFjzuNvB%2FIs2%2FBsMr3cuosZEg4v7NKoLi3aqpI5Pw44AIakMJKn3sIGOqUB65UdwGtb2dHJoysZsXkh5%2Bj2s89C6PjezaDoR2mBOuekQy%2FWg7RLWMOSv9uYm%2B7jZ9PKJ2zLuP%2BKud%2BeLx3HODQ6bw69LtuMyX4%2FODSOxyDXXrrNKevIVFBnqjygKgWf5qz4psJYvs7rdWr3y%2Fhs5P%2Ffh98EU9Bwc97tEoiqSamp6rMVWUD4FJNuYpkoYeDuAkIOw%2BQ%2F85g9968rDAepoSHTCrzm&X-Amz-Signature=41ec67d5f6f388cbe32c2736297dfba2b48ebca53830c4b6a10bdcf73b6538aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSZSRRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX4xakn5Teh9G6%2B6K1owURGbMw2D0zzekBwn%2BLYSgjSQIgccj6uiqp5g9ua815fALDujVvzr9NFE4HBSLZvCL67n0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMs03gOHXuRKNtXTircA5R7wMhFQh8d56E0%2F0cuO8UrWblcZgjh6fzTFpk%2BiLalK2CRpvs9yqbaDmMwKMV5plGwhqSZ93VAxMzQYFZdr3q75xc7Qo8KBi2dS3VT5UwvrzmiZms9uPZkmWEV8oqV0vPPiFYScwk7r0R23nulQ3Z9vJqUO0KYI%2BhwYr23nZJtg9%2FPvCok9Z9t1fLMAHUd7niHyNLxRh6%2Foo5J%2BlK15LsPdR8PDxOIqs1zIdrMo%2FnwkB9%2FAEfkTUEZWYOrT1MlpDY8VjjPol0cRrl2K3P%2F99lFkXTFtIOUfsY%2FUjh3LmlBe3kJT8kfOUomrQIqxnat4bMTY%2FC8rBCHyWe3EUzHC6m%2B%2FUqTyvUxoRqcY2E7JC0NrUN%2F7AX%2F9ONqf%2FYWjFLYZAMSz3ltgYA3aEbTbcSB6V686YTF2YBmfLPorglVAuUUdD9UsPpLW44zVxRpWtctXr%2BUz7CZO10CH07OEuve6I%2F2bjYr1WSE3D0Fva0Gc%2BNIQJ1wXQscnL1DgtVLociXf57ckbU2xzV%2BnoKs68Hsv0Knw%2B6qgAPw2sUIVCiiqCrRgOBIXjxdNpMdN%2FMndu4qLKKUUPv%2FQ%2FeJPXFjzuNvB%2FIs2%2FBsMr3cuosZEg4v7NKoLi3aqpI5Pw44AIakMJKn3sIGOqUB65UdwGtb2dHJoysZsXkh5%2Bj2s89C6PjezaDoR2mBOuekQy%2FWg7RLWMOSv9uYm%2B7jZ9PKJ2zLuP%2BKud%2BeLx3HODQ6bw69LtuMyX4%2FODSOxyDXXrrNKevIVFBnqjygKgWf5qz4psJYvs7rdWr3y%2Fhs5P%2Ffh98EU9Bwc97tEoiqSamp6rMVWUD4FJNuYpkoYeDuAkIOw%2BQ%2F85g9968rDAepoSHTCrzm&X-Amz-Signature=1e28a5fbe0b518e5f4625e2bc1356e7e270f316fdc4bedaa89c5decbadb2f2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSZSRRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX4xakn5Teh9G6%2B6K1owURGbMw2D0zzekBwn%2BLYSgjSQIgccj6uiqp5g9ua815fALDujVvzr9NFE4HBSLZvCL67n0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMs03gOHXuRKNtXTircA5R7wMhFQh8d56E0%2F0cuO8UrWblcZgjh6fzTFpk%2BiLalK2CRpvs9yqbaDmMwKMV5plGwhqSZ93VAxMzQYFZdr3q75xc7Qo8KBi2dS3VT5UwvrzmiZms9uPZkmWEV8oqV0vPPiFYScwk7r0R23nulQ3Z9vJqUO0KYI%2BhwYr23nZJtg9%2FPvCok9Z9t1fLMAHUd7niHyNLxRh6%2Foo5J%2BlK15LsPdR8PDxOIqs1zIdrMo%2FnwkB9%2FAEfkTUEZWYOrT1MlpDY8VjjPol0cRrl2K3P%2F99lFkXTFtIOUfsY%2FUjh3LmlBe3kJT8kfOUomrQIqxnat4bMTY%2FC8rBCHyWe3EUzHC6m%2B%2FUqTyvUxoRqcY2E7JC0NrUN%2F7AX%2F9ONqf%2FYWjFLYZAMSz3ltgYA3aEbTbcSB6V686YTF2YBmfLPorglVAuUUdD9UsPpLW44zVxRpWtctXr%2BUz7CZO10CH07OEuve6I%2F2bjYr1WSE3D0Fva0Gc%2BNIQJ1wXQscnL1DgtVLociXf57ckbU2xzV%2BnoKs68Hsv0Knw%2B6qgAPw2sUIVCiiqCrRgOBIXjxdNpMdN%2FMndu4qLKKUUPv%2FQ%2FeJPXFjzuNvB%2FIs2%2FBsMr3cuosZEg4v7NKoLi3aqpI5Pw44AIakMJKn3sIGOqUB65UdwGtb2dHJoysZsXkh5%2Bj2s89C6PjezaDoR2mBOuekQy%2FWg7RLWMOSv9uYm%2B7jZ9PKJ2zLuP%2BKud%2BeLx3HODQ6bw69LtuMyX4%2FODSOxyDXXrrNKevIVFBnqjygKgWf5qz4psJYvs7rdWr3y%2Fhs5P%2Ffh98EU9Bwc97tEoiqSamp6rMVWUD4FJNuYpkoYeDuAkIOw%2BQ%2F85g9968rDAepoSHTCrzm&X-Amz-Signature=fb57150d644cc451f53739bd184b355c60f69938b6165f8a9038bcf540b2157b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSZSRRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX4xakn5Teh9G6%2B6K1owURGbMw2D0zzekBwn%2BLYSgjSQIgccj6uiqp5g9ua815fALDujVvzr9NFE4HBSLZvCL67n0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMs03gOHXuRKNtXTircA5R7wMhFQh8d56E0%2F0cuO8UrWblcZgjh6fzTFpk%2BiLalK2CRpvs9yqbaDmMwKMV5plGwhqSZ93VAxMzQYFZdr3q75xc7Qo8KBi2dS3VT5UwvrzmiZms9uPZkmWEV8oqV0vPPiFYScwk7r0R23nulQ3Z9vJqUO0KYI%2BhwYr23nZJtg9%2FPvCok9Z9t1fLMAHUd7niHyNLxRh6%2Foo5J%2BlK15LsPdR8PDxOIqs1zIdrMo%2FnwkB9%2FAEfkTUEZWYOrT1MlpDY8VjjPol0cRrl2K3P%2F99lFkXTFtIOUfsY%2FUjh3LmlBe3kJT8kfOUomrQIqxnat4bMTY%2FC8rBCHyWe3EUzHC6m%2B%2FUqTyvUxoRqcY2E7JC0NrUN%2F7AX%2F9ONqf%2FYWjFLYZAMSz3ltgYA3aEbTbcSB6V686YTF2YBmfLPorglVAuUUdD9UsPpLW44zVxRpWtctXr%2BUz7CZO10CH07OEuve6I%2F2bjYr1WSE3D0Fva0Gc%2BNIQJ1wXQscnL1DgtVLociXf57ckbU2xzV%2BnoKs68Hsv0Knw%2B6qgAPw2sUIVCiiqCrRgOBIXjxdNpMdN%2FMndu4qLKKUUPv%2FQ%2FeJPXFjzuNvB%2FIs2%2FBsMr3cuosZEg4v7NKoLi3aqpI5Pw44AIakMJKn3sIGOqUB65UdwGtb2dHJoysZsXkh5%2Bj2s89C6PjezaDoR2mBOuekQy%2FWg7RLWMOSv9uYm%2B7jZ9PKJ2zLuP%2BKud%2BeLx3HODQ6bw69LtuMyX4%2FODSOxyDXXrrNKevIVFBnqjygKgWf5qz4psJYvs7rdWr3y%2Fhs5P%2Ffh98EU9Bwc97tEoiqSamp6rMVWUD4FJNuYpkoYeDuAkIOw%2BQ%2F85g9968rDAepoSHTCrzm&X-Amz-Signature=7056828beed7adb1a5b28f161b7d04212fd8e78adfd18aed703cc7eae2a19de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSZSRRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX4xakn5Teh9G6%2B6K1owURGbMw2D0zzekBwn%2BLYSgjSQIgccj6uiqp5g9ua815fALDujVvzr9NFE4HBSLZvCL67n0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMs03gOHXuRKNtXTircA5R7wMhFQh8d56E0%2F0cuO8UrWblcZgjh6fzTFpk%2BiLalK2CRpvs9yqbaDmMwKMV5plGwhqSZ93VAxMzQYFZdr3q75xc7Qo8KBi2dS3VT5UwvrzmiZms9uPZkmWEV8oqV0vPPiFYScwk7r0R23nulQ3Z9vJqUO0KYI%2BhwYr23nZJtg9%2FPvCok9Z9t1fLMAHUd7niHyNLxRh6%2Foo5J%2BlK15LsPdR8PDxOIqs1zIdrMo%2FnwkB9%2FAEfkTUEZWYOrT1MlpDY8VjjPol0cRrl2K3P%2F99lFkXTFtIOUfsY%2FUjh3LmlBe3kJT8kfOUomrQIqxnat4bMTY%2FC8rBCHyWe3EUzHC6m%2B%2FUqTyvUxoRqcY2E7JC0NrUN%2F7AX%2F9ONqf%2FYWjFLYZAMSz3ltgYA3aEbTbcSB6V686YTF2YBmfLPorglVAuUUdD9UsPpLW44zVxRpWtctXr%2BUz7CZO10CH07OEuve6I%2F2bjYr1WSE3D0Fva0Gc%2BNIQJ1wXQscnL1DgtVLociXf57ckbU2xzV%2BnoKs68Hsv0Knw%2B6qgAPw2sUIVCiiqCrRgOBIXjxdNpMdN%2FMndu4qLKKUUPv%2FQ%2FeJPXFjzuNvB%2FIs2%2FBsMr3cuosZEg4v7NKoLi3aqpI5Pw44AIakMJKn3sIGOqUB65UdwGtb2dHJoysZsXkh5%2Bj2s89C6PjezaDoR2mBOuekQy%2FWg7RLWMOSv9uYm%2B7jZ9PKJ2zLuP%2BKud%2BeLx3HODQ6bw69LtuMyX4%2FODSOxyDXXrrNKevIVFBnqjygKgWf5qz4psJYvs7rdWr3y%2Fhs5P%2Ffh98EU9Bwc97tEoiqSamp6rMVWUD4FJNuYpkoYeDuAkIOw%2BQ%2F85g9968rDAepoSHTCrzm&X-Amz-Signature=2fd089fa7225368b2b1201cba57bf771c7c8fff2617b0fb42b37840d66264580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

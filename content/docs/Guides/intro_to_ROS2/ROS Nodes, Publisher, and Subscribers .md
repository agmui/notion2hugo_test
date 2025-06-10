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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4PJLVPQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDiMDlemhkv7e8%2FP6QEJ7M6hZGaXrLab642ExtPxUE2wIgS05ljPGzrNoMgkxHqkNs77QGEjs6jm7PUS1M6RiMqK8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH667IiyBIXJeBDLircAwcSkZTzxlI5sTcnKMcOlLJt1NBJy%2F9wvabgU5E%2BvodJfUpsI0zUpDMluK4SRiM9q8WPwOg4ZO0eyrSy3fCcAsdg%2FGXwxtfBNnup0B59lW6Qk9BTYXppwSHBxPmm8tqpH7peKtliNPfm6p6kIzte5h2ZsFmeqd9NhnUVVhJKTg19oQamU%2BxXhT%2B4TMBDiHWLfJYwth%2F24BrbRXrcxG2q6e6DYYAhaEvtDIfb5lTa%2FqiFXR%2BsC7KjDD1JwpVuQgcgEOMmkfI635kH04VIjFpTor666Mr%2Fyzgt7WAecQGt2shIjHvFsshYO4HnOLYLfj7tIEehrEJlySHfoXrh4D3Akj3NDsgPz3jKyaGzc86jDExwDLFsv20PT7MQvO19Fq8xd%2BjR8Y880Q54YTcsbmZWhc4D0Lnre90dLRY6YtGr23LjgjaIKIBLpGduMgO2PDlewYwVcjz8q9Weav64%2BHEvekxPfjkPWKCC2FgvzmvL0q%2FqHhg4Od8BOB7KRNAJjNCX18vyLKx%2FfLnPpCjJNwhbFIjMMl5bGZ%2Fnad6hnuB74l6qKJEtmR9AuQPqKoysY%2BqQBRk4ajmMRtBj2ZD2uDLQaSCOhi9gzxzlkqUAfx1vHyRBI6suXQBhCc85O7tfMJXLocIGOqUBtbN07a7nBC25w8YSqZBeW4m2JncUEiSpGSHblABgKoI8YHxiqE1HXOZm50AcRtdF76HTqHzz4Wl3Vh0zefNA1DVSX%2Bx4JKyapPlB62acpmftH4yDqdo3WBDc%2FnPmI88ijR4946mvTw3S3oPynwQ0eMA2F%2BlcCS1ERb6clBjMYBcN32XlsEfZn72BdZHH4shSXjrx7eE5aRVtSEcOnzHg8IFebp9H&X-Amz-Signature=585803c5d6aaf99bed1ba54a250bcdd8d88b99b9b8511713ae0fedf56fb09dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4PJLVPQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDiMDlemhkv7e8%2FP6QEJ7M6hZGaXrLab642ExtPxUE2wIgS05ljPGzrNoMgkxHqkNs77QGEjs6jm7PUS1M6RiMqK8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH667IiyBIXJeBDLircAwcSkZTzxlI5sTcnKMcOlLJt1NBJy%2F9wvabgU5E%2BvodJfUpsI0zUpDMluK4SRiM9q8WPwOg4ZO0eyrSy3fCcAsdg%2FGXwxtfBNnup0B59lW6Qk9BTYXppwSHBxPmm8tqpH7peKtliNPfm6p6kIzte5h2ZsFmeqd9NhnUVVhJKTg19oQamU%2BxXhT%2B4TMBDiHWLfJYwth%2F24BrbRXrcxG2q6e6DYYAhaEvtDIfb5lTa%2FqiFXR%2BsC7KjDD1JwpVuQgcgEOMmkfI635kH04VIjFpTor666Mr%2Fyzgt7WAecQGt2shIjHvFsshYO4HnOLYLfj7tIEehrEJlySHfoXrh4D3Akj3NDsgPz3jKyaGzc86jDExwDLFsv20PT7MQvO19Fq8xd%2BjR8Y880Q54YTcsbmZWhc4D0Lnre90dLRY6YtGr23LjgjaIKIBLpGduMgO2PDlewYwVcjz8q9Weav64%2BHEvekxPfjkPWKCC2FgvzmvL0q%2FqHhg4Od8BOB7KRNAJjNCX18vyLKx%2FfLnPpCjJNwhbFIjMMl5bGZ%2Fnad6hnuB74l6qKJEtmR9AuQPqKoysY%2BqQBRk4ajmMRtBj2ZD2uDLQaSCOhi9gzxzlkqUAfx1vHyRBI6suXQBhCc85O7tfMJXLocIGOqUBtbN07a7nBC25w8YSqZBeW4m2JncUEiSpGSHblABgKoI8YHxiqE1HXOZm50AcRtdF76HTqHzz4Wl3Vh0zefNA1DVSX%2Bx4JKyapPlB62acpmftH4yDqdo3WBDc%2FnPmI88ijR4946mvTw3S3oPynwQ0eMA2F%2BlcCS1ERb6clBjMYBcN32XlsEfZn72BdZHH4shSXjrx7eE5aRVtSEcOnzHg8IFebp9H&X-Amz-Signature=50085aeb60b5349f7b716af38aced89603ced25014834bc70a32d5b04e952970&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4PJLVPQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDiMDlemhkv7e8%2FP6QEJ7M6hZGaXrLab642ExtPxUE2wIgS05ljPGzrNoMgkxHqkNs77QGEjs6jm7PUS1M6RiMqK8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH667IiyBIXJeBDLircAwcSkZTzxlI5sTcnKMcOlLJt1NBJy%2F9wvabgU5E%2BvodJfUpsI0zUpDMluK4SRiM9q8WPwOg4ZO0eyrSy3fCcAsdg%2FGXwxtfBNnup0B59lW6Qk9BTYXppwSHBxPmm8tqpH7peKtliNPfm6p6kIzte5h2ZsFmeqd9NhnUVVhJKTg19oQamU%2BxXhT%2B4TMBDiHWLfJYwth%2F24BrbRXrcxG2q6e6DYYAhaEvtDIfb5lTa%2FqiFXR%2BsC7KjDD1JwpVuQgcgEOMmkfI635kH04VIjFpTor666Mr%2Fyzgt7WAecQGt2shIjHvFsshYO4HnOLYLfj7tIEehrEJlySHfoXrh4D3Akj3NDsgPz3jKyaGzc86jDExwDLFsv20PT7MQvO19Fq8xd%2BjR8Y880Q54YTcsbmZWhc4D0Lnre90dLRY6YtGr23LjgjaIKIBLpGduMgO2PDlewYwVcjz8q9Weav64%2BHEvekxPfjkPWKCC2FgvzmvL0q%2FqHhg4Od8BOB7KRNAJjNCX18vyLKx%2FfLnPpCjJNwhbFIjMMl5bGZ%2Fnad6hnuB74l6qKJEtmR9AuQPqKoysY%2BqQBRk4ajmMRtBj2ZD2uDLQaSCOhi9gzxzlkqUAfx1vHyRBI6suXQBhCc85O7tfMJXLocIGOqUBtbN07a7nBC25w8YSqZBeW4m2JncUEiSpGSHblABgKoI8YHxiqE1HXOZm50AcRtdF76HTqHzz4Wl3Vh0zefNA1DVSX%2Bx4JKyapPlB62acpmftH4yDqdo3WBDc%2FnPmI88ijR4946mvTw3S3oPynwQ0eMA2F%2BlcCS1ERb6clBjMYBcN32XlsEfZn72BdZHH4shSXjrx7eE5aRVtSEcOnzHg8IFebp9H&X-Amz-Signature=f2fefcd3425837df1e5f31841f20ad833c2fe968918b2e823c4bd8cc2e75ac28&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4PJLVPQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDiMDlemhkv7e8%2FP6QEJ7M6hZGaXrLab642ExtPxUE2wIgS05ljPGzrNoMgkxHqkNs77QGEjs6jm7PUS1M6RiMqK8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH667IiyBIXJeBDLircAwcSkZTzxlI5sTcnKMcOlLJt1NBJy%2F9wvabgU5E%2BvodJfUpsI0zUpDMluK4SRiM9q8WPwOg4ZO0eyrSy3fCcAsdg%2FGXwxtfBNnup0B59lW6Qk9BTYXppwSHBxPmm8tqpH7peKtliNPfm6p6kIzte5h2ZsFmeqd9NhnUVVhJKTg19oQamU%2BxXhT%2B4TMBDiHWLfJYwth%2F24BrbRXrcxG2q6e6DYYAhaEvtDIfb5lTa%2FqiFXR%2BsC7KjDD1JwpVuQgcgEOMmkfI635kH04VIjFpTor666Mr%2Fyzgt7WAecQGt2shIjHvFsshYO4HnOLYLfj7tIEehrEJlySHfoXrh4D3Akj3NDsgPz3jKyaGzc86jDExwDLFsv20PT7MQvO19Fq8xd%2BjR8Y880Q54YTcsbmZWhc4D0Lnre90dLRY6YtGr23LjgjaIKIBLpGduMgO2PDlewYwVcjz8q9Weav64%2BHEvekxPfjkPWKCC2FgvzmvL0q%2FqHhg4Od8BOB7KRNAJjNCX18vyLKx%2FfLnPpCjJNwhbFIjMMl5bGZ%2Fnad6hnuB74l6qKJEtmR9AuQPqKoysY%2BqQBRk4ajmMRtBj2ZD2uDLQaSCOhi9gzxzlkqUAfx1vHyRBI6suXQBhCc85O7tfMJXLocIGOqUBtbN07a7nBC25w8YSqZBeW4m2JncUEiSpGSHblABgKoI8YHxiqE1HXOZm50AcRtdF76HTqHzz4Wl3Vh0zefNA1DVSX%2Bx4JKyapPlB62acpmftH4yDqdo3WBDc%2FnPmI88ijR4946mvTw3S3oPynwQ0eMA2F%2BlcCS1ERb6clBjMYBcN32XlsEfZn72BdZHH4shSXjrx7eE5aRVtSEcOnzHg8IFebp9H&X-Amz-Signature=dcdc59eef51dd388d50e1aedf95dd3b96b51dd243a94ad88b4cc13dece10c18d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4PJLVPQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDiMDlemhkv7e8%2FP6QEJ7M6hZGaXrLab642ExtPxUE2wIgS05ljPGzrNoMgkxHqkNs77QGEjs6jm7PUS1M6RiMqK8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH667IiyBIXJeBDLircAwcSkZTzxlI5sTcnKMcOlLJt1NBJy%2F9wvabgU5E%2BvodJfUpsI0zUpDMluK4SRiM9q8WPwOg4ZO0eyrSy3fCcAsdg%2FGXwxtfBNnup0B59lW6Qk9BTYXppwSHBxPmm8tqpH7peKtliNPfm6p6kIzte5h2ZsFmeqd9NhnUVVhJKTg19oQamU%2BxXhT%2B4TMBDiHWLfJYwth%2F24BrbRXrcxG2q6e6DYYAhaEvtDIfb5lTa%2FqiFXR%2BsC7KjDD1JwpVuQgcgEOMmkfI635kH04VIjFpTor666Mr%2Fyzgt7WAecQGt2shIjHvFsshYO4HnOLYLfj7tIEehrEJlySHfoXrh4D3Akj3NDsgPz3jKyaGzc86jDExwDLFsv20PT7MQvO19Fq8xd%2BjR8Y880Q54YTcsbmZWhc4D0Lnre90dLRY6YtGr23LjgjaIKIBLpGduMgO2PDlewYwVcjz8q9Weav64%2BHEvekxPfjkPWKCC2FgvzmvL0q%2FqHhg4Od8BOB7KRNAJjNCX18vyLKx%2FfLnPpCjJNwhbFIjMMl5bGZ%2Fnad6hnuB74l6qKJEtmR9AuQPqKoysY%2BqQBRk4ajmMRtBj2ZD2uDLQaSCOhi9gzxzlkqUAfx1vHyRBI6suXQBhCc85O7tfMJXLocIGOqUBtbN07a7nBC25w8YSqZBeW4m2JncUEiSpGSHblABgKoI8YHxiqE1HXOZm50AcRtdF76HTqHzz4Wl3Vh0zefNA1DVSX%2Bx4JKyapPlB62acpmftH4yDqdo3WBDc%2FnPmI88ijR4946mvTw3S3oPynwQ0eMA2F%2BlcCS1ERb6clBjMYBcN32XlsEfZn72BdZHH4shSXjrx7eE5aRVtSEcOnzHg8IFebp9H&X-Amz-Signature=4087ad368e2851a7d6d50ebb4b4c16a22199944db8e557bf99be06321a4616c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4PJLVPQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDiMDlemhkv7e8%2FP6QEJ7M6hZGaXrLab642ExtPxUE2wIgS05ljPGzrNoMgkxHqkNs77QGEjs6jm7PUS1M6RiMqK8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH667IiyBIXJeBDLircAwcSkZTzxlI5sTcnKMcOlLJt1NBJy%2F9wvabgU5E%2BvodJfUpsI0zUpDMluK4SRiM9q8WPwOg4ZO0eyrSy3fCcAsdg%2FGXwxtfBNnup0B59lW6Qk9BTYXppwSHBxPmm8tqpH7peKtliNPfm6p6kIzte5h2ZsFmeqd9NhnUVVhJKTg19oQamU%2BxXhT%2B4TMBDiHWLfJYwth%2F24BrbRXrcxG2q6e6DYYAhaEvtDIfb5lTa%2FqiFXR%2BsC7KjDD1JwpVuQgcgEOMmkfI635kH04VIjFpTor666Mr%2Fyzgt7WAecQGt2shIjHvFsshYO4HnOLYLfj7tIEehrEJlySHfoXrh4D3Akj3NDsgPz3jKyaGzc86jDExwDLFsv20PT7MQvO19Fq8xd%2BjR8Y880Q54YTcsbmZWhc4D0Lnre90dLRY6YtGr23LjgjaIKIBLpGduMgO2PDlewYwVcjz8q9Weav64%2BHEvekxPfjkPWKCC2FgvzmvL0q%2FqHhg4Od8BOB7KRNAJjNCX18vyLKx%2FfLnPpCjJNwhbFIjMMl5bGZ%2Fnad6hnuB74l6qKJEtmR9AuQPqKoysY%2BqQBRk4ajmMRtBj2ZD2uDLQaSCOhi9gzxzlkqUAfx1vHyRBI6suXQBhCc85O7tfMJXLocIGOqUBtbN07a7nBC25w8YSqZBeW4m2JncUEiSpGSHblABgKoI8YHxiqE1HXOZm50AcRtdF76HTqHzz4Wl3Vh0zefNA1DVSX%2Bx4JKyapPlB62acpmftH4yDqdo3WBDc%2FnPmI88ijR4946mvTw3S3oPynwQ0eMA2F%2BlcCS1ERb6clBjMYBcN32XlsEfZn72BdZHH4shSXjrx7eE5aRVtSEcOnzHg8IFebp9H&X-Amz-Signature=52bc5031bd17ccc49901a38296590e0c18c8ae1fd72f60e31859e2a447c0bf1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4PJLVPQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDiMDlemhkv7e8%2FP6QEJ7M6hZGaXrLab642ExtPxUE2wIgS05ljPGzrNoMgkxHqkNs77QGEjs6jm7PUS1M6RiMqK8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH667IiyBIXJeBDLircAwcSkZTzxlI5sTcnKMcOlLJt1NBJy%2F9wvabgU5E%2BvodJfUpsI0zUpDMluK4SRiM9q8WPwOg4ZO0eyrSy3fCcAsdg%2FGXwxtfBNnup0B59lW6Qk9BTYXppwSHBxPmm8tqpH7peKtliNPfm6p6kIzte5h2ZsFmeqd9NhnUVVhJKTg19oQamU%2BxXhT%2B4TMBDiHWLfJYwth%2F24BrbRXrcxG2q6e6DYYAhaEvtDIfb5lTa%2FqiFXR%2BsC7KjDD1JwpVuQgcgEOMmkfI635kH04VIjFpTor666Mr%2Fyzgt7WAecQGt2shIjHvFsshYO4HnOLYLfj7tIEehrEJlySHfoXrh4D3Akj3NDsgPz3jKyaGzc86jDExwDLFsv20PT7MQvO19Fq8xd%2BjR8Y880Q54YTcsbmZWhc4D0Lnre90dLRY6YtGr23LjgjaIKIBLpGduMgO2PDlewYwVcjz8q9Weav64%2BHEvekxPfjkPWKCC2FgvzmvL0q%2FqHhg4Od8BOB7KRNAJjNCX18vyLKx%2FfLnPpCjJNwhbFIjMMl5bGZ%2Fnad6hnuB74l6qKJEtmR9AuQPqKoysY%2BqQBRk4ajmMRtBj2ZD2uDLQaSCOhi9gzxzlkqUAfx1vHyRBI6suXQBhCc85O7tfMJXLocIGOqUBtbN07a7nBC25w8YSqZBeW4m2JncUEiSpGSHblABgKoI8YHxiqE1HXOZm50AcRtdF76HTqHzz4Wl3Vh0zefNA1DVSX%2Bx4JKyapPlB62acpmftH4yDqdo3WBDc%2FnPmI88ijR4946mvTw3S3oPynwQ0eMA2F%2BlcCS1ERb6clBjMYBcN32XlsEfZn72BdZHH4shSXjrx7eE5aRVtSEcOnzHg8IFebp9H&X-Amz-Signature=bf2a92bc64e824c120f2dd2e4dba809389133124c7528dea9b314597af77a17a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4PJLVPQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDiMDlemhkv7e8%2FP6QEJ7M6hZGaXrLab642ExtPxUE2wIgS05ljPGzrNoMgkxHqkNs77QGEjs6jm7PUS1M6RiMqK8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH667IiyBIXJeBDLircAwcSkZTzxlI5sTcnKMcOlLJt1NBJy%2F9wvabgU5E%2BvodJfUpsI0zUpDMluK4SRiM9q8WPwOg4ZO0eyrSy3fCcAsdg%2FGXwxtfBNnup0B59lW6Qk9BTYXppwSHBxPmm8tqpH7peKtliNPfm6p6kIzte5h2ZsFmeqd9NhnUVVhJKTg19oQamU%2BxXhT%2B4TMBDiHWLfJYwth%2F24BrbRXrcxG2q6e6DYYAhaEvtDIfb5lTa%2FqiFXR%2BsC7KjDD1JwpVuQgcgEOMmkfI635kH04VIjFpTor666Mr%2Fyzgt7WAecQGt2shIjHvFsshYO4HnOLYLfj7tIEehrEJlySHfoXrh4D3Akj3NDsgPz3jKyaGzc86jDExwDLFsv20PT7MQvO19Fq8xd%2BjR8Y880Q54YTcsbmZWhc4D0Lnre90dLRY6YtGr23LjgjaIKIBLpGduMgO2PDlewYwVcjz8q9Weav64%2BHEvekxPfjkPWKCC2FgvzmvL0q%2FqHhg4Od8BOB7KRNAJjNCX18vyLKx%2FfLnPpCjJNwhbFIjMMl5bGZ%2Fnad6hnuB74l6qKJEtmR9AuQPqKoysY%2BqQBRk4ajmMRtBj2ZD2uDLQaSCOhi9gzxzlkqUAfx1vHyRBI6suXQBhCc85O7tfMJXLocIGOqUBtbN07a7nBC25w8YSqZBeW4m2JncUEiSpGSHblABgKoI8YHxiqE1HXOZm50AcRtdF76HTqHzz4Wl3Vh0zefNA1DVSX%2Bx4JKyapPlB62acpmftH4yDqdo3WBDc%2FnPmI88ijR4946mvTw3S3oPynwQ0eMA2F%2BlcCS1ERb6clBjMYBcN32XlsEfZn72BdZHH4shSXjrx7eE5aRVtSEcOnzHg8IFebp9H&X-Amz-Signature=ce4952a26f1491f51081d5c978e782e248c2509351c997407d090c17cf41fdab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

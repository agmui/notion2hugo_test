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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZ75I75%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTY0Q910%2Bx3%2BzWCpQGE6%2F0rE0VOAwokGP3Nqx79WcUmwIhAPMtakmJcRjO9kVeYp%2FJCks%2Fqvxuo89ox%2BCz2wH0BMsqKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK3BrZGuMezvZuULcq3AMhfmHajby43zQjuxxXo2VGEefGfIDhtPd%2F18ECiUVjELOC%2BF0hFUR8gqSy5Gm4GLJboZXUoypOpZW98YUcpf%2FxCfqtJHgFzDWYkFxUteLZPc1FGFaDzlb30KeU3wKSgzBr%2BfGy64X7KJ%2Bg0esS77d7FXqMMhtS%2B3%2FRhD3LcwjP85rXbXej122cH0zFkEA1ANNYDHe%2BR2wyImEhnsHfVp%2BvNTD0OAW84Kqcq7beQFj20uiv2JxUCJo%2BLRCaJSHGfBCALbbu2rfP4ufnO23uLwDkg%2B3dueuiPEYg3ynGjv1%2BUXhJI8Ue8G3JxnOv3%2FH6NDfjIc%2BCSpnKMhkWx8OKsjHjEFZbhR%2Be3tqYXjhqYF5i9UcRybuqOcQ9M8rtpwwdRkaXKIHbmuvrGYYLlx3bRdbgdfyh3BpiBJXg%2F1xJZTab%2BDFOHQNt%2F0xXSURW6tlDC14iAOxvMPxOQwowE4x5HLDThBwnQ4ObQ612iUs0OzDhS%2BVYRtbcguVbwpp4IzPH%2B4M4S%2FiDayy6AciPH%2BXX0zkUHvDpF%2Bg1ehRN%2F9Hmd83C9he6FgJUEppbQY9J2myfP1MguZvccH%2BObq4x5YqlaYNfju%2BTakk0jubkshmT2rOufIRuZ7wCNWXV8OV74TC4kum9BjqkAS45mBlJ3qMJn8uC7%2F1Xl4zubQgAcin7jLVBzUopWLEaTm1jP%2Fr%2F03c3gk8cSjRARBRgadStUmT8x5FgFTmxWuqtGRwx6b1lmpmkYjd5WDW3nyWlQntuybgqleZaHilvHIfuiraxQPjHMt36qNaSEP5cvLIrXjZaBiaVdVJDT8zIBddaJ8GDoHw%2BjgCCBaDOpmrT7z1rKJMbyXUgTnwb27AOW0lF&X-Amz-Signature=a314ce93a1fe418b6f4d79484e9b7e115357676171656e6946883f2270c5042a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZ75I75%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTY0Q910%2Bx3%2BzWCpQGE6%2F0rE0VOAwokGP3Nqx79WcUmwIhAPMtakmJcRjO9kVeYp%2FJCks%2Fqvxuo89ox%2BCz2wH0BMsqKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK3BrZGuMezvZuULcq3AMhfmHajby43zQjuxxXo2VGEefGfIDhtPd%2F18ECiUVjELOC%2BF0hFUR8gqSy5Gm4GLJboZXUoypOpZW98YUcpf%2FxCfqtJHgFzDWYkFxUteLZPc1FGFaDzlb30KeU3wKSgzBr%2BfGy64X7KJ%2Bg0esS77d7FXqMMhtS%2B3%2FRhD3LcwjP85rXbXej122cH0zFkEA1ANNYDHe%2BR2wyImEhnsHfVp%2BvNTD0OAW84Kqcq7beQFj20uiv2JxUCJo%2BLRCaJSHGfBCALbbu2rfP4ufnO23uLwDkg%2B3dueuiPEYg3ynGjv1%2BUXhJI8Ue8G3JxnOv3%2FH6NDfjIc%2BCSpnKMhkWx8OKsjHjEFZbhR%2Be3tqYXjhqYF5i9UcRybuqOcQ9M8rtpwwdRkaXKIHbmuvrGYYLlx3bRdbgdfyh3BpiBJXg%2F1xJZTab%2BDFOHQNt%2F0xXSURW6tlDC14iAOxvMPxOQwowE4x5HLDThBwnQ4ObQ612iUs0OzDhS%2BVYRtbcguVbwpp4IzPH%2B4M4S%2FiDayy6AciPH%2BXX0zkUHvDpF%2Bg1ehRN%2F9Hmd83C9he6FgJUEppbQY9J2myfP1MguZvccH%2BObq4x5YqlaYNfju%2BTakk0jubkshmT2rOufIRuZ7wCNWXV8OV74TC4kum9BjqkAS45mBlJ3qMJn8uC7%2F1Xl4zubQgAcin7jLVBzUopWLEaTm1jP%2Fr%2F03c3gk8cSjRARBRgadStUmT8x5FgFTmxWuqtGRwx6b1lmpmkYjd5WDW3nyWlQntuybgqleZaHilvHIfuiraxQPjHMt36qNaSEP5cvLIrXjZaBiaVdVJDT8zIBddaJ8GDoHw%2BjgCCBaDOpmrT7z1rKJMbyXUgTnwb27AOW0lF&X-Amz-Signature=9f6f6033191cf106d15d4c0ad85f338fad5cf396c35e8078cf008dc091531b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZ75I75%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTY0Q910%2Bx3%2BzWCpQGE6%2F0rE0VOAwokGP3Nqx79WcUmwIhAPMtakmJcRjO9kVeYp%2FJCks%2Fqvxuo89ox%2BCz2wH0BMsqKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK3BrZGuMezvZuULcq3AMhfmHajby43zQjuxxXo2VGEefGfIDhtPd%2F18ECiUVjELOC%2BF0hFUR8gqSy5Gm4GLJboZXUoypOpZW98YUcpf%2FxCfqtJHgFzDWYkFxUteLZPc1FGFaDzlb30KeU3wKSgzBr%2BfGy64X7KJ%2Bg0esS77d7FXqMMhtS%2B3%2FRhD3LcwjP85rXbXej122cH0zFkEA1ANNYDHe%2BR2wyImEhnsHfVp%2BvNTD0OAW84Kqcq7beQFj20uiv2JxUCJo%2BLRCaJSHGfBCALbbu2rfP4ufnO23uLwDkg%2B3dueuiPEYg3ynGjv1%2BUXhJI8Ue8G3JxnOv3%2FH6NDfjIc%2BCSpnKMhkWx8OKsjHjEFZbhR%2Be3tqYXjhqYF5i9UcRybuqOcQ9M8rtpwwdRkaXKIHbmuvrGYYLlx3bRdbgdfyh3BpiBJXg%2F1xJZTab%2BDFOHQNt%2F0xXSURW6tlDC14iAOxvMPxOQwowE4x5HLDThBwnQ4ObQ612iUs0OzDhS%2BVYRtbcguVbwpp4IzPH%2B4M4S%2FiDayy6AciPH%2BXX0zkUHvDpF%2Bg1ehRN%2F9Hmd83C9he6FgJUEppbQY9J2myfP1MguZvccH%2BObq4x5YqlaYNfju%2BTakk0jubkshmT2rOufIRuZ7wCNWXV8OV74TC4kum9BjqkAS45mBlJ3qMJn8uC7%2F1Xl4zubQgAcin7jLVBzUopWLEaTm1jP%2Fr%2F03c3gk8cSjRARBRgadStUmT8x5FgFTmxWuqtGRwx6b1lmpmkYjd5WDW3nyWlQntuybgqleZaHilvHIfuiraxQPjHMt36qNaSEP5cvLIrXjZaBiaVdVJDT8zIBddaJ8GDoHw%2BjgCCBaDOpmrT7z1rKJMbyXUgTnwb27AOW0lF&X-Amz-Signature=44870165ed87657dbf1210be429c46e00c8f1e531d3c4a869d6aef59fd6b067b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZ75I75%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTY0Q910%2Bx3%2BzWCpQGE6%2F0rE0VOAwokGP3Nqx79WcUmwIhAPMtakmJcRjO9kVeYp%2FJCks%2Fqvxuo89ox%2BCz2wH0BMsqKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK3BrZGuMezvZuULcq3AMhfmHajby43zQjuxxXo2VGEefGfIDhtPd%2F18ECiUVjELOC%2BF0hFUR8gqSy5Gm4GLJboZXUoypOpZW98YUcpf%2FxCfqtJHgFzDWYkFxUteLZPc1FGFaDzlb30KeU3wKSgzBr%2BfGy64X7KJ%2Bg0esS77d7FXqMMhtS%2B3%2FRhD3LcwjP85rXbXej122cH0zFkEA1ANNYDHe%2BR2wyImEhnsHfVp%2BvNTD0OAW84Kqcq7beQFj20uiv2JxUCJo%2BLRCaJSHGfBCALbbu2rfP4ufnO23uLwDkg%2B3dueuiPEYg3ynGjv1%2BUXhJI8Ue8G3JxnOv3%2FH6NDfjIc%2BCSpnKMhkWx8OKsjHjEFZbhR%2Be3tqYXjhqYF5i9UcRybuqOcQ9M8rtpwwdRkaXKIHbmuvrGYYLlx3bRdbgdfyh3BpiBJXg%2F1xJZTab%2BDFOHQNt%2F0xXSURW6tlDC14iAOxvMPxOQwowE4x5HLDThBwnQ4ObQ612iUs0OzDhS%2BVYRtbcguVbwpp4IzPH%2B4M4S%2FiDayy6AciPH%2BXX0zkUHvDpF%2Bg1ehRN%2F9Hmd83C9he6FgJUEppbQY9J2myfP1MguZvccH%2BObq4x5YqlaYNfju%2BTakk0jubkshmT2rOufIRuZ7wCNWXV8OV74TC4kum9BjqkAS45mBlJ3qMJn8uC7%2F1Xl4zubQgAcin7jLVBzUopWLEaTm1jP%2Fr%2F03c3gk8cSjRARBRgadStUmT8x5FgFTmxWuqtGRwx6b1lmpmkYjd5WDW3nyWlQntuybgqleZaHilvHIfuiraxQPjHMt36qNaSEP5cvLIrXjZaBiaVdVJDT8zIBddaJ8GDoHw%2BjgCCBaDOpmrT7z1rKJMbyXUgTnwb27AOW0lF&X-Amz-Signature=990a28d75588fd0990731f14748aa5115b9443a2099eb11fff47499ad8b52c68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZ75I75%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTY0Q910%2Bx3%2BzWCpQGE6%2F0rE0VOAwokGP3Nqx79WcUmwIhAPMtakmJcRjO9kVeYp%2FJCks%2Fqvxuo89ox%2BCz2wH0BMsqKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK3BrZGuMezvZuULcq3AMhfmHajby43zQjuxxXo2VGEefGfIDhtPd%2F18ECiUVjELOC%2BF0hFUR8gqSy5Gm4GLJboZXUoypOpZW98YUcpf%2FxCfqtJHgFzDWYkFxUteLZPc1FGFaDzlb30KeU3wKSgzBr%2BfGy64X7KJ%2Bg0esS77d7FXqMMhtS%2B3%2FRhD3LcwjP85rXbXej122cH0zFkEA1ANNYDHe%2BR2wyImEhnsHfVp%2BvNTD0OAW84Kqcq7beQFj20uiv2JxUCJo%2BLRCaJSHGfBCALbbu2rfP4ufnO23uLwDkg%2B3dueuiPEYg3ynGjv1%2BUXhJI8Ue8G3JxnOv3%2FH6NDfjIc%2BCSpnKMhkWx8OKsjHjEFZbhR%2Be3tqYXjhqYF5i9UcRybuqOcQ9M8rtpwwdRkaXKIHbmuvrGYYLlx3bRdbgdfyh3BpiBJXg%2F1xJZTab%2BDFOHQNt%2F0xXSURW6tlDC14iAOxvMPxOQwowE4x5HLDThBwnQ4ObQ612iUs0OzDhS%2BVYRtbcguVbwpp4IzPH%2B4M4S%2FiDayy6AciPH%2BXX0zkUHvDpF%2Bg1ehRN%2F9Hmd83C9he6FgJUEppbQY9J2myfP1MguZvccH%2BObq4x5YqlaYNfju%2BTakk0jubkshmT2rOufIRuZ7wCNWXV8OV74TC4kum9BjqkAS45mBlJ3qMJn8uC7%2F1Xl4zubQgAcin7jLVBzUopWLEaTm1jP%2Fr%2F03c3gk8cSjRARBRgadStUmT8x5FgFTmxWuqtGRwx6b1lmpmkYjd5WDW3nyWlQntuybgqleZaHilvHIfuiraxQPjHMt36qNaSEP5cvLIrXjZaBiaVdVJDT8zIBddaJ8GDoHw%2BjgCCBaDOpmrT7z1rKJMbyXUgTnwb27AOW0lF&X-Amz-Signature=21572f0c19e438bdcce46f1486487785868635de8b8b90f55206e6fc9a21407e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZ75I75%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTY0Q910%2Bx3%2BzWCpQGE6%2F0rE0VOAwokGP3Nqx79WcUmwIhAPMtakmJcRjO9kVeYp%2FJCks%2Fqvxuo89ox%2BCz2wH0BMsqKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK3BrZGuMezvZuULcq3AMhfmHajby43zQjuxxXo2VGEefGfIDhtPd%2F18ECiUVjELOC%2BF0hFUR8gqSy5Gm4GLJboZXUoypOpZW98YUcpf%2FxCfqtJHgFzDWYkFxUteLZPc1FGFaDzlb30KeU3wKSgzBr%2BfGy64X7KJ%2Bg0esS77d7FXqMMhtS%2B3%2FRhD3LcwjP85rXbXej122cH0zFkEA1ANNYDHe%2BR2wyImEhnsHfVp%2BvNTD0OAW84Kqcq7beQFj20uiv2JxUCJo%2BLRCaJSHGfBCALbbu2rfP4ufnO23uLwDkg%2B3dueuiPEYg3ynGjv1%2BUXhJI8Ue8G3JxnOv3%2FH6NDfjIc%2BCSpnKMhkWx8OKsjHjEFZbhR%2Be3tqYXjhqYF5i9UcRybuqOcQ9M8rtpwwdRkaXKIHbmuvrGYYLlx3bRdbgdfyh3BpiBJXg%2F1xJZTab%2BDFOHQNt%2F0xXSURW6tlDC14iAOxvMPxOQwowE4x5HLDThBwnQ4ObQ612iUs0OzDhS%2BVYRtbcguVbwpp4IzPH%2B4M4S%2FiDayy6AciPH%2BXX0zkUHvDpF%2Bg1ehRN%2F9Hmd83C9he6FgJUEppbQY9J2myfP1MguZvccH%2BObq4x5YqlaYNfju%2BTakk0jubkshmT2rOufIRuZ7wCNWXV8OV74TC4kum9BjqkAS45mBlJ3qMJn8uC7%2F1Xl4zubQgAcin7jLVBzUopWLEaTm1jP%2Fr%2F03c3gk8cSjRARBRgadStUmT8x5FgFTmxWuqtGRwx6b1lmpmkYjd5WDW3nyWlQntuybgqleZaHilvHIfuiraxQPjHMt36qNaSEP5cvLIrXjZaBiaVdVJDT8zIBddaJ8GDoHw%2BjgCCBaDOpmrT7z1rKJMbyXUgTnwb27AOW0lF&X-Amz-Signature=9c984a1a6b5d2b20ffa36db25bccb90c714358748c362d142f151e833a755980&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZ75I75%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTY0Q910%2Bx3%2BzWCpQGE6%2F0rE0VOAwokGP3Nqx79WcUmwIhAPMtakmJcRjO9kVeYp%2FJCks%2Fqvxuo89ox%2BCz2wH0BMsqKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK3BrZGuMezvZuULcq3AMhfmHajby43zQjuxxXo2VGEefGfIDhtPd%2F18ECiUVjELOC%2BF0hFUR8gqSy5Gm4GLJboZXUoypOpZW98YUcpf%2FxCfqtJHgFzDWYkFxUteLZPc1FGFaDzlb30KeU3wKSgzBr%2BfGy64X7KJ%2Bg0esS77d7FXqMMhtS%2B3%2FRhD3LcwjP85rXbXej122cH0zFkEA1ANNYDHe%2BR2wyImEhnsHfVp%2BvNTD0OAW84Kqcq7beQFj20uiv2JxUCJo%2BLRCaJSHGfBCALbbu2rfP4ufnO23uLwDkg%2B3dueuiPEYg3ynGjv1%2BUXhJI8Ue8G3JxnOv3%2FH6NDfjIc%2BCSpnKMhkWx8OKsjHjEFZbhR%2Be3tqYXjhqYF5i9UcRybuqOcQ9M8rtpwwdRkaXKIHbmuvrGYYLlx3bRdbgdfyh3BpiBJXg%2F1xJZTab%2BDFOHQNt%2F0xXSURW6tlDC14iAOxvMPxOQwowE4x5HLDThBwnQ4ObQ612iUs0OzDhS%2BVYRtbcguVbwpp4IzPH%2B4M4S%2FiDayy6AciPH%2BXX0zkUHvDpF%2Bg1ehRN%2F9Hmd83C9he6FgJUEppbQY9J2myfP1MguZvccH%2BObq4x5YqlaYNfju%2BTakk0jubkshmT2rOufIRuZ7wCNWXV8OV74TC4kum9BjqkAS45mBlJ3qMJn8uC7%2F1Xl4zubQgAcin7jLVBzUopWLEaTm1jP%2Fr%2F03c3gk8cSjRARBRgadStUmT8x5FgFTmxWuqtGRwx6b1lmpmkYjd5WDW3nyWlQntuybgqleZaHilvHIfuiraxQPjHMt36qNaSEP5cvLIrXjZaBiaVdVJDT8zIBddaJ8GDoHw%2BjgCCBaDOpmrT7z1rKJMbyXUgTnwb27AOW0lF&X-Amz-Signature=4cad5533278699a372f3a0f12f7f02a1c44b81c12a8fbca989158a81b6fab087&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZ75I75%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTY0Q910%2Bx3%2BzWCpQGE6%2F0rE0VOAwokGP3Nqx79WcUmwIhAPMtakmJcRjO9kVeYp%2FJCks%2Fqvxuo89ox%2BCz2wH0BMsqKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK3BrZGuMezvZuULcq3AMhfmHajby43zQjuxxXo2VGEefGfIDhtPd%2F18ECiUVjELOC%2BF0hFUR8gqSy5Gm4GLJboZXUoypOpZW98YUcpf%2FxCfqtJHgFzDWYkFxUteLZPc1FGFaDzlb30KeU3wKSgzBr%2BfGy64X7KJ%2Bg0esS77d7FXqMMhtS%2B3%2FRhD3LcwjP85rXbXej122cH0zFkEA1ANNYDHe%2BR2wyImEhnsHfVp%2BvNTD0OAW84Kqcq7beQFj20uiv2JxUCJo%2BLRCaJSHGfBCALbbu2rfP4ufnO23uLwDkg%2B3dueuiPEYg3ynGjv1%2BUXhJI8Ue8G3JxnOv3%2FH6NDfjIc%2BCSpnKMhkWx8OKsjHjEFZbhR%2Be3tqYXjhqYF5i9UcRybuqOcQ9M8rtpwwdRkaXKIHbmuvrGYYLlx3bRdbgdfyh3BpiBJXg%2F1xJZTab%2BDFOHQNt%2F0xXSURW6tlDC14iAOxvMPxOQwowE4x5HLDThBwnQ4ObQ612iUs0OzDhS%2BVYRtbcguVbwpp4IzPH%2B4M4S%2FiDayy6AciPH%2BXX0zkUHvDpF%2Bg1ehRN%2F9Hmd83C9he6FgJUEppbQY9J2myfP1MguZvccH%2BObq4x5YqlaYNfju%2BTakk0jubkshmT2rOufIRuZ7wCNWXV8OV74TC4kum9BjqkAS45mBlJ3qMJn8uC7%2F1Xl4zubQgAcin7jLVBzUopWLEaTm1jP%2Fr%2F03c3gk8cSjRARBRgadStUmT8x5FgFTmxWuqtGRwx6b1lmpmkYjd5WDW3nyWlQntuybgqleZaHilvHIfuiraxQPjHMt36qNaSEP5cvLIrXjZaBiaVdVJDT8zIBddaJ8GDoHw%2BjgCCBaDOpmrT7z1rKJMbyXUgTnwb27AOW0lF&X-Amz-Signature=0250ed70e0a591b837252b0b339f8c66b1ecb0e8f55c607c31d60ca9f60e556b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

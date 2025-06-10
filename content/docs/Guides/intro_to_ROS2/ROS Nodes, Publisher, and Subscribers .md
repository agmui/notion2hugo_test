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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VNGHU5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAMpTIM%2BvfjyHYJsZdVXRvS6z3%2Bcp058crL2FG8uupJAiEAgkIZTEdZHRIQawGqW65j15KXJQ%2FPj%2Fv77kljhauApk8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjObBFf9%2FWV%2BZdZhircA5tb45rtsURRMCROWIYjVXYSdFiIYPw5GUP29Al7TqpV0cVV8UGbU9u6%2B1d9TUyh49DMntZS%2F4ISeks9mRv8qUObU%2Bdnxp5FLRs9S5I57YwaLTf7Sz4%2BL2owxoQmShXSlqq%2FUmoMl2S5XiVIpz82jJ0fR1okvOrsJgpL0Fc40j6ipeSmgdsfmxwIKIR%2F5nCpmePliczaXuE5e2cHBSUH%2BlULvmSwT6Xl6bPLiHMvdmToHXdHbk8D%2FlUjiCbY0Addw8ZG3plML93GxFvYXD2rIDqAlFBJbFXi%2Bp4cHF%2B0Mjw%2FFDKH7cZlzWC43KjAYXHCEYpNHpxXK2H3zhvNrwR6yjMICi2kRhHTMQUYbaUnmCZQQowt0fLaNxaccxghUISy%2FdlqNTbx7%2FCQ737V6LxrTD3bd7Jml0PdftZzG117ofQZqxHQhvY9Edgr6Kp43BkUu%2B5WljatksQeCJrnyXWdve0AGdjXnfFXYQDn8NE6%2BmoOsRRePZu4g18Mv0ZPBIpMYs6sY8eqeUDO11HA1G70UbXHNnzRpxnQHmG3AwVNwuH8CYLrqohExi53%2B6N7aktpksMw2239r%2BiOuV2mAWSkLehwaOetlYV4z65Mvu5LOuryomSfKOfVLUCt1X96MLmzosIGOqUB85hmYNoZ3kxMpqfxg0z66fVu7YsqPdfaOk%2BND1O%2BpeyPXweu87qzpuThYwThGuuQmQlvoXQoCKLcn8RRwe2bEVhsnYC68UhIUc%2FZZoi%2BJb9QFoc0brHlLKAGXLF9mPIV06vLfuOAth1hG%2FF37VKSDVTPsyjc2DUzm7rBDWqcakrzEHebDv7sQTcVEqBrv7khS8bLL%2BM1w2eTUnZj2oN4Tb4Es1IB&X-Amz-Signature=ea92c954e3f5271db33fdeef76920f54743388a05e7971e702a46a8c72d4f947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VNGHU5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAMpTIM%2BvfjyHYJsZdVXRvS6z3%2Bcp058crL2FG8uupJAiEAgkIZTEdZHRIQawGqW65j15KXJQ%2FPj%2Fv77kljhauApk8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjObBFf9%2FWV%2BZdZhircA5tb45rtsURRMCROWIYjVXYSdFiIYPw5GUP29Al7TqpV0cVV8UGbU9u6%2B1d9TUyh49DMntZS%2F4ISeks9mRv8qUObU%2Bdnxp5FLRs9S5I57YwaLTf7Sz4%2BL2owxoQmShXSlqq%2FUmoMl2S5XiVIpz82jJ0fR1okvOrsJgpL0Fc40j6ipeSmgdsfmxwIKIR%2F5nCpmePliczaXuE5e2cHBSUH%2BlULvmSwT6Xl6bPLiHMvdmToHXdHbk8D%2FlUjiCbY0Addw8ZG3plML93GxFvYXD2rIDqAlFBJbFXi%2Bp4cHF%2B0Mjw%2FFDKH7cZlzWC43KjAYXHCEYpNHpxXK2H3zhvNrwR6yjMICi2kRhHTMQUYbaUnmCZQQowt0fLaNxaccxghUISy%2FdlqNTbx7%2FCQ737V6LxrTD3bd7Jml0PdftZzG117ofQZqxHQhvY9Edgr6Kp43BkUu%2B5WljatksQeCJrnyXWdve0AGdjXnfFXYQDn8NE6%2BmoOsRRePZu4g18Mv0ZPBIpMYs6sY8eqeUDO11HA1G70UbXHNnzRpxnQHmG3AwVNwuH8CYLrqohExi53%2B6N7aktpksMw2239r%2BiOuV2mAWSkLehwaOetlYV4z65Mvu5LOuryomSfKOfVLUCt1X96MLmzosIGOqUB85hmYNoZ3kxMpqfxg0z66fVu7YsqPdfaOk%2BND1O%2BpeyPXweu87qzpuThYwThGuuQmQlvoXQoCKLcn8RRwe2bEVhsnYC68UhIUc%2FZZoi%2BJb9QFoc0brHlLKAGXLF9mPIV06vLfuOAth1hG%2FF37VKSDVTPsyjc2DUzm7rBDWqcakrzEHebDv7sQTcVEqBrv7khS8bLL%2BM1w2eTUnZj2oN4Tb4Es1IB&X-Amz-Signature=4dee1cf119bd4e9ee2ce5da9e90aaf3322d363d761bb36df7353de4fe6e64f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VNGHU5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAMpTIM%2BvfjyHYJsZdVXRvS6z3%2Bcp058crL2FG8uupJAiEAgkIZTEdZHRIQawGqW65j15KXJQ%2FPj%2Fv77kljhauApk8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjObBFf9%2FWV%2BZdZhircA5tb45rtsURRMCROWIYjVXYSdFiIYPw5GUP29Al7TqpV0cVV8UGbU9u6%2B1d9TUyh49DMntZS%2F4ISeks9mRv8qUObU%2Bdnxp5FLRs9S5I57YwaLTf7Sz4%2BL2owxoQmShXSlqq%2FUmoMl2S5XiVIpz82jJ0fR1okvOrsJgpL0Fc40j6ipeSmgdsfmxwIKIR%2F5nCpmePliczaXuE5e2cHBSUH%2BlULvmSwT6Xl6bPLiHMvdmToHXdHbk8D%2FlUjiCbY0Addw8ZG3plML93GxFvYXD2rIDqAlFBJbFXi%2Bp4cHF%2B0Mjw%2FFDKH7cZlzWC43KjAYXHCEYpNHpxXK2H3zhvNrwR6yjMICi2kRhHTMQUYbaUnmCZQQowt0fLaNxaccxghUISy%2FdlqNTbx7%2FCQ737V6LxrTD3bd7Jml0PdftZzG117ofQZqxHQhvY9Edgr6Kp43BkUu%2B5WljatksQeCJrnyXWdve0AGdjXnfFXYQDn8NE6%2BmoOsRRePZu4g18Mv0ZPBIpMYs6sY8eqeUDO11HA1G70UbXHNnzRpxnQHmG3AwVNwuH8CYLrqohExi53%2B6N7aktpksMw2239r%2BiOuV2mAWSkLehwaOetlYV4z65Mvu5LOuryomSfKOfVLUCt1X96MLmzosIGOqUB85hmYNoZ3kxMpqfxg0z66fVu7YsqPdfaOk%2BND1O%2BpeyPXweu87qzpuThYwThGuuQmQlvoXQoCKLcn8RRwe2bEVhsnYC68UhIUc%2FZZoi%2BJb9QFoc0brHlLKAGXLF9mPIV06vLfuOAth1hG%2FF37VKSDVTPsyjc2DUzm7rBDWqcakrzEHebDv7sQTcVEqBrv7khS8bLL%2BM1w2eTUnZj2oN4Tb4Es1IB&X-Amz-Signature=d36255e4049efcbc6311390d3d4c9c12140fda1cd5510d7cc02a0115a1e300af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VNGHU5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAMpTIM%2BvfjyHYJsZdVXRvS6z3%2Bcp058crL2FG8uupJAiEAgkIZTEdZHRIQawGqW65j15KXJQ%2FPj%2Fv77kljhauApk8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjObBFf9%2FWV%2BZdZhircA5tb45rtsURRMCROWIYjVXYSdFiIYPw5GUP29Al7TqpV0cVV8UGbU9u6%2B1d9TUyh49DMntZS%2F4ISeks9mRv8qUObU%2Bdnxp5FLRs9S5I57YwaLTf7Sz4%2BL2owxoQmShXSlqq%2FUmoMl2S5XiVIpz82jJ0fR1okvOrsJgpL0Fc40j6ipeSmgdsfmxwIKIR%2F5nCpmePliczaXuE5e2cHBSUH%2BlULvmSwT6Xl6bPLiHMvdmToHXdHbk8D%2FlUjiCbY0Addw8ZG3plML93GxFvYXD2rIDqAlFBJbFXi%2Bp4cHF%2B0Mjw%2FFDKH7cZlzWC43KjAYXHCEYpNHpxXK2H3zhvNrwR6yjMICi2kRhHTMQUYbaUnmCZQQowt0fLaNxaccxghUISy%2FdlqNTbx7%2FCQ737V6LxrTD3bd7Jml0PdftZzG117ofQZqxHQhvY9Edgr6Kp43BkUu%2B5WljatksQeCJrnyXWdve0AGdjXnfFXYQDn8NE6%2BmoOsRRePZu4g18Mv0ZPBIpMYs6sY8eqeUDO11HA1G70UbXHNnzRpxnQHmG3AwVNwuH8CYLrqohExi53%2B6N7aktpksMw2239r%2BiOuV2mAWSkLehwaOetlYV4z65Mvu5LOuryomSfKOfVLUCt1X96MLmzosIGOqUB85hmYNoZ3kxMpqfxg0z66fVu7YsqPdfaOk%2BND1O%2BpeyPXweu87qzpuThYwThGuuQmQlvoXQoCKLcn8RRwe2bEVhsnYC68UhIUc%2FZZoi%2BJb9QFoc0brHlLKAGXLF9mPIV06vLfuOAth1hG%2FF37VKSDVTPsyjc2DUzm7rBDWqcakrzEHebDv7sQTcVEqBrv7khS8bLL%2BM1w2eTUnZj2oN4Tb4Es1IB&X-Amz-Signature=22b04f77e6c97777bba930c2a4dde2bf1373e7c88368ee04125d4c674abdf228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VNGHU5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAMpTIM%2BvfjyHYJsZdVXRvS6z3%2Bcp058crL2FG8uupJAiEAgkIZTEdZHRIQawGqW65j15KXJQ%2FPj%2Fv77kljhauApk8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjObBFf9%2FWV%2BZdZhircA5tb45rtsURRMCROWIYjVXYSdFiIYPw5GUP29Al7TqpV0cVV8UGbU9u6%2B1d9TUyh49DMntZS%2F4ISeks9mRv8qUObU%2Bdnxp5FLRs9S5I57YwaLTf7Sz4%2BL2owxoQmShXSlqq%2FUmoMl2S5XiVIpz82jJ0fR1okvOrsJgpL0Fc40j6ipeSmgdsfmxwIKIR%2F5nCpmePliczaXuE5e2cHBSUH%2BlULvmSwT6Xl6bPLiHMvdmToHXdHbk8D%2FlUjiCbY0Addw8ZG3plML93GxFvYXD2rIDqAlFBJbFXi%2Bp4cHF%2B0Mjw%2FFDKH7cZlzWC43KjAYXHCEYpNHpxXK2H3zhvNrwR6yjMICi2kRhHTMQUYbaUnmCZQQowt0fLaNxaccxghUISy%2FdlqNTbx7%2FCQ737V6LxrTD3bd7Jml0PdftZzG117ofQZqxHQhvY9Edgr6Kp43BkUu%2B5WljatksQeCJrnyXWdve0AGdjXnfFXYQDn8NE6%2BmoOsRRePZu4g18Mv0ZPBIpMYs6sY8eqeUDO11HA1G70UbXHNnzRpxnQHmG3AwVNwuH8CYLrqohExi53%2B6N7aktpksMw2239r%2BiOuV2mAWSkLehwaOetlYV4z65Mvu5LOuryomSfKOfVLUCt1X96MLmzosIGOqUB85hmYNoZ3kxMpqfxg0z66fVu7YsqPdfaOk%2BND1O%2BpeyPXweu87qzpuThYwThGuuQmQlvoXQoCKLcn8RRwe2bEVhsnYC68UhIUc%2FZZoi%2BJb9QFoc0brHlLKAGXLF9mPIV06vLfuOAth1hG%2FF37VKSDVTPsyjc2DUzm7rBDWqcakrzEHebDv7sQTcVEqBrv7khS8bLL%2BM1w2eTUnZj2oN4Tb4Es1IB&X-Amz-Signature=b2f13316098603837427b4d5570329946c3da54348c476fe95b7de345d703b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VNGHU5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAMpTIM%2BvfjyHYJsZdVXRvS6z3%2Bcp058crL2FG8uupJAiEAgkIZTEdZHRIQawGqW65j15KXJQ%2FPj%2Fv77kljhauApk8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjObBFf9%2FWV%2BZdZhircA5tb45rtsURRMCROWIYjVXYSdFiIYPw5GUP29Al7TqpV0cVV8UGbU9u6%2B1d9TUyh49DMntZS%2F4ISeks9mRv8qUObU%2Bdnxp5FLRs9S5I57YwaLTf7Sz4%2BL2owxoQmShXSlqq%2FUmoMl2S5XiVIpz82jJ0fR1okvOrsJgpL0Fc40j6ipeSmgdsfmxwIKIR%2F5nCpmePliczaXuE5e2cHBSUH%2BlULvmSwT6Xl6bPLiHMvdmToHXdHbk8D%2FlUjiCbY0Addw8ZG3plML93GxFvYXD2rIDqAlFBJbFXi%2Bp4cHF%2B0Mjw%2FFDKH7cZlzWC43KjAYXHCEYpNHpxXK2H3zhvNrwR6yjMICi2kRhHTMQUYbaUnmCZQQowt0fLaNxaccxghUISy%2FdlqNTbx7%2FCQ737V6LxrTD3bd7Jml0PdftZzG117ofQZqxHQhvY9Edgr6Kp43BkUu%2B5WljatksQeCJrnyXWdve0AGdjXnfFXYQDn8NE6%2BmoOsRRePZu4g18Mv0ZPBIpMYs6sY8eqeUDO11HA1G70UbXHNnzRpxnQHmG3AwVNwuH8CYLrqohExi53%2B6N7aktpksMw2239r%2BiOuV2mAWSkLehwaOetlYV4z65Mvu5LOuryomSfKOfVLUCt1X96MLmzosIGOqUB85hmYNoZ3kxMpqfxg0z66fVu7YsqPdfaOk%2BND1O%2BpeyPXweu87qzpuThYwThGuuQmQlvoXQoCKLcn8RRwe2bEVhsnYC68UhIUc%2FZZoi%2BJb9QFoc0brHlLKAGXLF9mPIV06vLfuOAth1hG%2FF37VKSDVTPsyjc2DUzm7rBDWqcakrzEHebDv7sQTcVEqBrv7khS8bLL%2BM1w2eTUnZj2oN4Tb4Es1IB&X-Amz-Signature=5fb9e47f08d56b554881dcc5c2d5744528ba256598c5859d1bfef97a236f47b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VNGHU5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAMpTIM%2BvfjyHYJsZdVXRvS6z3%2Bcp058crL2FG8uupJAiEAgkIZTEdZHRIQawGqW65j15KXJQ%2FPj%2Fv77kljhauApk8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjObBFf9%2FWV%2BZdZhircA5tb45rtsURRMCROWIYjVXYSdFiIYPw5GUP29Al7TqpV0cVV8UGbU9u6%2B1d9TUyh49DMntZS%2F4ISeks9mRv8qUObU%2Bdnxp5FLRs9S5I57YwaLTf7Sz4%2BL2owxoQmShXSlqq%2FUmoMl2S5XiVIpz82jJ0fR1okvOrsJgpL0Fc40j6ipeSmgdsfmxwIKIR%2F5nCpmePliczaXuE5e2cHBSUH%2BlULvmSwT6Xl6bPLiHMvdmToHXdHbk8D%2FlUjiCbY0Addw8ZG3plML93GxFvYXD2rIDqAlFBJbFXi%2Bp4cHF%2B0Mjw%2FFDKH7cZlzWC43KjAYXHCEYpNHpxXK2H3zhvNrwR6yjMICi2kRhHTMQUYbaUnmCZQQowt0fLaNxaccxghUISy%2FdlqNTbx7%2FCQ737V6LxrTD3bd7Jml0PdftZzG117ofQZqxHQhvY9Edgr6Kp43BkUu%2B5WljatksQeCJrnyXWdve0AGdjXnfFXYQDn8NE6%2BmoOsRRePZu4g18Mv0ZPBIpMYs6sY8eqeUDO11HA1G70UbXHNnzRpxnQHmG3AwVNwuH8CYLrqohExi53%2B6N7aktpksMw2239r%2BiOuV2mAWSkLehwaOetlYV4z65Mvu5LOuryomSfKOfVLUCt1X96MLmzosIGOqUB85hmYNoZ3kxMpqfxg0z66fVu7YsqPdfaOk%2BND1O%2BpeyPXweu87qzpuThYwThGuuQmQlvoXQoCKLcn8RRwe2bEVhsnYC68UhIUc%2FZZoi%2BJb9QFoc0brHlLKAGXLF9mPIV06vLfuOAth1hG%2FF37VKSDVTPsyjc2DUzm7rBDWqcakrzEHebDv7sQTcVEqBrv7khS8bLL%2BM1w2eTUnZj2oN4Tb4Es1IB&X-Amz-Signature=5537db7e9c37be7f2cbfe9582a86a0c491d0e7bbd0fbe944690190c663b94b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VNGHU5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAMpTIM%2BvfjyHYJsZdVXRvS6z3%2Bcp058crL2FG8uupJAiEAgkIZTEdZHRIQawGqW65j15KXJQ%2FPj%2Fv77kljhauApk8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjObBFf9%2FWV%2BZdZhircA5tb45rtsURRMCROWIYjVXYSdFiIYPw5GUP29Al7TqpV0cVV8UGbU9u6%2B1d9TUyh49DMntZS%2F4ISeks9mRv8qUObU%2Bdnxp5FLRs9S5I57YwaLTf7Sz4%2BL2owxoQmShXSlqq%2FUmoMl2S5XiVIpz82jJ0fR1okvOrsJgpL0Fc40j6ipeSmgdsfmxwIKIR%2F5nCpmePliczaXuE5e2cHBSUH%2BlULvmSwT6Xl6bPLiHMvdmToHXdHbk8D%2FlUjiCbY0Addw8ZG3plML93GxFvYXD2rIDqAlFBJbFXi%2Bp4cHF%2B0Mjw%2FFDKH7cZlzWC43KjAYXHCEYpNHpxXK2H3zhvNrwR6yjMICi2kRhHTMQUYbaUnmCZQQowt0fLaNxaccxghUISy%2FdlqNTbx7%2FCQ737V6LxrTD3bd7Jml0PdftZzG117ofQZqxHQhvY9Edgr6Kp43BkUu%2B5WljatksQeCJrnyXWdve0AGdjXnfFXYQDn8NE6%2BmoOsRRePZu4g18Mv0ZPBIpMYs6sY8eqeUDO11HA1G70UbXHNnzRpxnQHmG3AwVNwuH8CYLrqohExi53%2B6N7aktpksMw2239r%2BiOuV2mAWSkLehwaOetlYV4z65Mvu5LOuryomSfKOfVLUCt1X96MLmzosIGOqUB85hmYNoZ3kxMpqfxg0z66fVu7YsqPdfaOk%2BND1O%2BpeyPXweu87qzpuThYwThGuuQmQlvoXQoCKLcn8RRwe2bEVhsnYC68UhIUc%2FZZoi%2BJb9QFoc0brHlLKAGXLF9mPIV06vLfuOAth1hG%2FF37VKSDVTPsyjc2DUzm7rBDWqcakrzEHebDv7sQTcVEqBrv7khS8bLL%2BM1w2eTUnZj2oN4Tb4Es1IB&X-Amz-Signature=4bc3a644bd43ee570c80ff8da865dd188fd68296be17079a142ad2dace4e594d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

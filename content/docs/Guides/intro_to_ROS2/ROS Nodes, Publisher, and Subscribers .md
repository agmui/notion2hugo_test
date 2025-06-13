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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7N2PSM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIA62UqFyFlGHPL2XbHR51OIrwami5D86OVnASMHkFszeAiEAm6Fg4C2CjVlRyWovsWdlbJnKv8m1CIZEkTcB4%2B6inC4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKwyn6a8RlqqVH4vdircA5s2X3x816ovfLpkWsFnKZvGfh9GkzXuJH8xs%2FzftlmgeC7JrQVMrmZwOp3JsnQl%2BKPqcu1g2UeonggSIoMX5YFfZZmY4aQ5e3N%2FMTugGo8pEIHzNsz0DS3fc6oGJ2S%2BOtdC%2F9wfQzcT8MKIpdK%2BStqojicFmJOIM7K9oyzUjc%2Bn9zXN2I6bqZgPUoLkOkC8FSb2LLve1H4zwxTS7roujhYA3%2Bjdszowx9bxaM5Kpl6gYHxcR65qhONb2powisqcznGkvzbtClzkkGl06hcaOUwvdaACwSFriRSTfgqQVJwWsH7X0kpHrLlGeJtagysrIA1RyTrYfa8HwZXbBOVwIylQo0rKhW51G2t7f5m5jBC30TSS2CkzQFJYlQIy3Wp4C7DiBkJML%2BGKWvciuBtK4pHd6kw134szQwxYZdXPxC4RArcML6gqvBJTfVv9EA4IAbnyPcVi264pZZCWq44yfOVAWFVHpohKcu77CG6Q%2BYUhTpUruIMM%2FApvHWWGJDzV4rAAyqHsF1Cm2LjT0VjMcOKvOaP4Qh1Vt%2B%2FryA6C4If0MF4STgQD%2FBfykqD0DyyGRxklpkAZNQqCEDPYZH%2FuGAPJB2xOCviMVthYBQVaY%2FKd71LCeXjN%2BRlObm0aMNipsMIGOqUB64wZ%2B5TjJYRryU82LhV257Kqk7G7PYooJuTApwugCK29hlEAuXcecWQAr%2B7Qo%2BJDY9ir2Ig84T%2Bqu2lhkxAP%2FPTxB4FcgDFfuYpoiCG164U%2BJLoWUEe5CjLQa%2BvfKq%2B2skeuoSPDgRiCffBPHI3b1pMjHuCVTJftPPQlWoJMHr%2B3N9OKdKqDw1dfy7uHJgM1WfBqzH3NOrfrJGoi5H5dZZ6nfsrV&X-Amz-Signature=5825837b6876bea94907168a8aa9c4b401a1939f2bb65d009c0d4849aaf4049a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7N2PSM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIA62UqFyFlGHPL2XbHR51OIrwami5D86OVnASMHkFszeAiEAm6Fg4C2CjVlRyWovsWdlbJnKv8m1CIZEkTcB4%2B6inC4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKwyn6a8RlqqVH4vdircA5s2X3x816ovfLpkWsFnKZvGfh9GkzXuJH8xs%2FzftlmgeC7JrQVMrmZwOp3JsnQl%2BKPqcu1g2UeonggSIoMX5YFfZZmY4aQ5e3N%2FMTugGo8pEIHzNsz0DS3fc6oGJ2S%2BOtdC%2F9wfQzcT8MKIpdK%2BStqojicFmJOIM7K9oyzUjc%2Bn9zXN2I6bqZgPUoLkOkC8FSb2LLve1H4zwxTS7roujhYA3%2Bjdszowx9bxaM5Kpl6gYHxcR65qhONb2powisqcznGkvzbtClzkkGl06hcaOUwvdaACwSFriRSTfgqQVJwWsH7X0kpHrLlGeJtagysrIA1RyTrYfa8HwZXbBOVwIylQo0rKhW51G2t7f5m5jBC30TSS2CkzQFJYlQIy3Wp4C7DiBkJML%2BGKWvciuBtK4pHd6kw134szQwxYZdXPxC4RArcML6gqvBJTfVv9EA4IAbnyPcVi264pZZCWq44yfOVAWFVHpohKcu77CG6Q%2BYUhTpUruIMM%2FApvHWWGJDzV4rAAyqHsF1Cm2LjT0VjMcOKvOaP4Qh1Vt%2B%2FryA6C4If0MF4STgQD%2FBfykqD0DyyGRxklpkAZNQqCEDPYZH%2FuGAPJB2xOCviMVthYBQVaY%2FKd71LCeXjN%2BRlObm0aMNipsMIGOqUB64wZ%2B5TjJYRryU82LhV257Kqk7G7PYooJuTApwugCK29hlEAuXcecWQAr%2B7Qo%2BJDY9ir2Ig84T%2Bqu2lhkxAP%2FPTxB4FcgDFfuYpoiCG164U%2BJLoWUEe5CjLQa%2BvfKq%2B2skeuoSPDgRiCffBPHI3b1pMjHuCVTJftPPQlWoJMHr%2B3N9OKdKqDw1dfy7uHJgM1WfBqzH3NOrfrJGoi5H5dZZ6nfsrV&X-Amz-Signature=02cd34e7efbc151c6409849b921a184962798bde4e431952a29e72ee37172069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7N2PSM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIA62UqFyFlGHPL2XbHR51OIrwami5D86OVnASMHkFszeAiEAm6Fg4C2CjVlRyWovsWdlbJnKv8m1CIZEkTcB4%2B6inC4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKwyn6a8RlqqVH4vdircA5s2X3x816ovfLpkWsFnKZvGfh9GkzXuJH8xs%2FzftlmgeC7JrQVMrmZwOp3JsnQl%2BKPqcu1g2UeonggSIoMX5YFfZZmY4aQ5e3N%2FMTugGo8pEIHzNsz0DS3fc6oGJ2S%2BOtdC%2F9wfQzcT8MKIpdK%2BStqojicFmJOIM7K9oyzUjc%2Bn9zXN2I6bqZgPUoLkOkC8FSb2LLve1H4zwxTS7roujhYA3%2Bjdszowx9bxaM5Kpl6gYHxcR65qhONb2powisqcznGkvzbtClzkkGl06hcaOUwvdaACwSFriRSTfgqQVJwWsH7X0kpHrLlGeJtagysrIA1RyTrYfa8HwZXbBOVwIylQo0rKhW51G2t7f5m5jBC30TSS2CkzQFJYlQIy3Wp4C7DiBkJML%2BGKWvciuBtK4pHd6kw134szQwxYZdXPxC4RArcML6gqvBJTfVv9EA4IAbnyPcVi264pZZCWq44yfOVAWFVHpohKcu77CG6Q%2BYUhTpUruIMM%2FApvHWWGJDzV4rAAyqHsF1Cm2LjT0VjMcOKvOaP4Qh1Vt%2B%2FryA6C4If0MF4STgQD%2FBfykqD0DyyGRxklpkAZNQqCEDPYZH%2FuGAPJB2xOCviMVthYBQVaY%2FKd71LCeXjN%2BRlObm0aMNipsMIGOqUB64wZ%2B5TjJYRryU82LhV257Kqk7G7PYooJuTApwugCK29hlEAuXcecWQAr%2B7Qo%2BJDY9ir2Ig84T%2Bqu2lhkxAP%2FPTxB4FcgDFfuYpoiCG164U%2BJLoWUEe5CjLQa%2BvfKq%2B2skeuoSPDgRiCffBPHI3b1pMjHuCVTJftPPQlWoJMHr%2B3N9OKdKqDw1dfy7uHJgM1WfBqzH3NOrfrJGoi5H5dZZ6nfsrV&X-Amz-Signature=3c873d5f7c659a621434e6f6089846d19311e8c6883c378968ffd5f3cbdcd55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7N2PSM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIA62UqFyFlGHPL2XbHR51OIrwami5D86OVnASMHkFszeAiEAm6Fg4C2CjVlRyWovsWdlbJnKv8m1CIZEkTcB4%2B6inC4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKwyn6a8RlqqVH4vdircA5s2X3x816ovfLpkWsFnKZvGfh9GkzXuJH8xs%2FzftlmgeC7JrQVMrmZwOp3JsnQl%2BKPqcu1g2UeonggSIoMX5YFfZZmY4aQ5e3N%2FMTugGo8pEIHzNsz0DS3fc6oGJ2S%2BOtdC%2F9wfQzcT8MKIpdK%2BStqojicFmJOIM7K9oyzUjc%2Bn9zXN2I6bqZgPUoLkOkC8FSb2LLve1H4zwxTS7roujhYA3%2Bjdszowx9bxaM5Kpl6gYHxcR65qhONb2powisqcznGkvzbtClzkkGl06hcaOUwvdaACwSFriRSTfgqQVJwWsH7X0kpHrLlGeJtagysrIA1RyTrYfa8HwZXbBOVwIylQo0rKhW51G2t7f5m5jBC30TSS2CkzQFJYlQIy3Wp4C7DiBkJML%2BGKWvciuBtK4pHd6kw134szQwxYZdXPxC4RArcML6gqvBJTfVv9EA4IAbnyPcVi264pZZCWq44yfOVAWFVHpohKcu77CG6Q%2BYUhTpUruIMM%2FApvHWWGJDzV4rAAyqHsF1Cm2LjT0VjMcOKvOaP4Qh1Vt%2B%2FryA6C4If0MF4STgQD%2FBfykqD0DyyGRxklpkAZNQqCEDPYZH%2FuGAPJB2xOCviMVthYBQVaY%2FKd71LCeXjN%2BRlObm0aMNipsMIGOqUB64wZ%2B5TjJYRryU82LhV257Kqk7G7PYooJuTApwugCK29hlEAuXcecWQAr%2B7Qo%2BJDY9ir2Ig84T%2Bqu2lhkxAP%2FPTxB4FcgDFfuYpoiCG164U%2BJLoWUEe5CjLQa%2BvfKq%2B2skeuoSPDgRiCffBPHI3b1pMjHuCVTJftPPQlWoJMHr%2B3N9OKdKqDw1dfy7uHJgM1WfBqzH3NOrfrJGoi5H5dZZ6nfsrV&X-Amz-Signature=3a9afaeb0c7a98cd708de88f5e33b5794b7c46bbfcd055710215ed205a01b206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7N2PSM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIA62UqFyFlGHPL2XbHR51OIrwami5D86OVnASMHkFszeAiEAm6Fg4C2CjVlRyWovsWdlbJnKv8m1CIZEkTcB4%2B6inC4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKwyn6a8RlqqVH4vdircA5s2X3x816ovfLpkWsFnKZvGfh9GkzXuJH8xs%2FzftlmgeC7JrQVMrmZwOp3JsnQl%2BKPqcu1g2UeonggSIoMX5YFfZZmY4aQ5e3N%2FMTugGo8pEIHzNsz0DS3fc6oGJ2S%2BOtdC%2F9wfQzcT8MKIpdK%2BStqojicFmJOIM7K9oyzUjc%2Bn9zXN2I6bqZgPUoLkOkC8FSb2LLve1H4zwxTS7roujhYA3%2Bjdszowx9bxaM5Kpl6gYHxcR65qhONb2powisqcznGkvzbtClzkkGl06hcaOUwvdaACwSFriRSTfgqQVJwWsH7X0kpHrLlGeJtagysrIA1RyTrYfa8HwZXbBOVwIylQo0rKhW51G2t7f5m5jBC30TSS2CkzQFJYlQIy3Wp4C7DiBkJML%2BGKWvciuBtK4pHd6kw134szQwxYZdXPxC4RArcML6gqvBJTfVv9EA4IAbnyPcVi264pZZCWq44yfOVAWFVHpohKcu77CG6Q%2BYUhTpUruIMM%2FApvHWWGJDzV4rAAyqHsF1Cm2LjT0VjMcOKvOaP4Qh1Vt%2B%2FryA6C4If0MF4STgQD%2FBfykqD0DyyGRxklpkAZNQqCEDPYZH%2FuGAPJB2xOCviMVthYBQVaY%2FKd71LCeXjN%2BRlObm0aMNipsMIGOqUB64wZ%2B5TjJYRryU82LhV257Kqk7G7PYooJuTApwugCK29hlEAuXcecWQAr%2B7Qo%2BJDY9ir2Ig84T%2Bqu2lhkxAP%2FPTxB4FcgDFfuYpoiCG164U%2BJLoWUEe5CjLQa%2BvfKq%2B2skeuoSPDgRiCffBPHI3b1pMjHuCVTJftPPQlWoJMHr%2B3N9OKdKqDw1dfy7uHJgM1WfBqzH3NOrfrJGoi5H5dZZ6nfsrV&X-Amz-Signature=f6c810cd4790683dfb4db4772171fb5e05a25c753ba5732320995c64b105edca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7N2PSM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIA62UqFyFlGHPL2XbHR51OIrwami5D86OVnASMHkFszeAiEAm6Fg4C2CjVlRyWovsWdlbJnKv8m1CIZEkTcB4%2B6inC4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKwyn6a8RlqqVH4vdircA5s2X3x816ovfLpkWsFnKZvGfh9GkzXuJH8xs%2FzftlmgeC7JrQVMrmZwOp3JsnQl%2BKPqcu1g2UeonggSIoMX5YFfZZmY4aQ5e3N%2FMTugGo8pEIHzNsz0DS3fc6oGJ2S%2BOtdC%2F9wfQzcT8MKIpdK%2BStqojicFmJOIM7K9oyzUjc%2Bn9zXN2I6bqZgPUoLkOkC8FSb2LLve1H4zwxTS7roujhYA3%2Bjdszowx9bxaM5Kpl6gYHxcR65qhONb2powisqcznGkvzbtClzkkGl06hcaOUwvdaACwSFriRSTfgqQVJwWsH7X0kpHrLlGeJtagysrIA1RyTrYfa8HwZXbBOVwIylQo0rKhW51G2t7f5m5jBC30TSS2CkzQFJYlQIy3Wp4C7DiBkJML%2BGKWvciuBtK4pHd6kw134szQwxYZdXPxC4RArcML6gqvBJTfVv9EA4IAbnyPcVi264pZZCWq44yfOVAWFVHpohKcu77CG6Q%2BYUhTpUruIMM%2FApvHWWGJDzV4rAAyqHsF1Cm2LjT0VjMcOKvOaP4Qh1Vt%2B%2FryA6C4If0MF4STgQD%2FBfykqD0DyyGRxklpkAZNQqCEDPYZH%2FuGAPJB2xOCviMVthYBQVaY%2FKd71LCeXjN%2BRlObm0aMNipsMIGOqUB64wZ%2B5TjJYRryU82LhV257Kqk7G7PYooJuTApwugCK29hlEAuXcecWQAr%2B7Qo%2BJDY9ir2Ig84T%2Bqu2lhkxAP%2FPTxB4FcgDFfuYpoiCG164U%2BJLoWUEe5CjLQa%2BvfKq%2B2skeuoSPDgRiCffBPHI3b1pMjHuCVTJftPPQlWoJMHr%2B3N9OKdKqDw1dfy7uHJgM1WfBqzH3NOrfrJGoi5H5dZZ6nfsrV&X-Amz-Signature=f9cbfab32469fb684c18885a32960858aa977fbafb67e6883e2568dd1a70ac08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7N2PSM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIA62UqFyFlGHPL2XbHR51OIrwami5D86OVnASMHkFszeAiEAm6Fg4C2CjVlRyWovsWdlbJnKv8m1CIZEkTcB4%2B6inC4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKwyn6a8RlqqVH4vdircA5s2X3x816ovfLpkWsFnKZvGfh9GkzXuJH8xs%2FzftlmgeC7JrQVMrmZwOp3JsnQl%2BKPqcu1g2UeonggSIoMX5YFfZZmY4aQ5e3N%2FMTugGo8pEIHzNsz0DS3fc6oGJ2S%2BOtdC%2F9wfQzcT8MKIpdK%2BStqojicFmJOIM7K9oyzUjc%2Bn9zXN2I6bqZgPUoLkOkC8FSb2LLve1H4zwxTS7roujhYA3%2Bjdszowx9bxaM5Kpl6gYHxcR65qhONb2powisqcznGkvzbtClzkkGl06hcaOUwvdaACwSFriRSTfgqQVJwWsH7X0kpHrLlGeJtagysrIA1RyTrYfa8HwZXbBOVwIylQo0rKhW51G2t7f5m5jBC30TSS2CkzQFJYlQIy3Wp4C7DiBkJML%2BGKWvciuBtK4pHd6kw134szQwxYZdXPxC4RArcML6gqvBJTfVv9EA4IAbnyPcVi264pZZCWq44yfOVAWFVHpohKcu77CG6Q%2BYUhTpUruIMM%2FApvHWWGJDzV4rAAyqHsF1Cm2LjT0VjMcOKvOaP4Qh1Vt%2B%2FryA6C4If0MF4STgQD%2FBfykqD0DyyGRxklpkAZNQqCEDPYZH%2FuGAPJB2xOCviMVthYBQVaY%2FKd71LCeXjN%2BRlObm0aMNipsMIGOqUB64wZ%2B5TjJYRryU82LhV257Kqk7G7PYooJuTApwugCK29hlEAuXcecWQAr%2B7Qo%2BJDY9ir2Ig84T%2Bqu2lhkxAP%2FPTxB4FcgDFfuYpoiCG164U%2BJLoWUEe5CjLQa%2BvfKq%2B2skeuoSPDgRiCffBPHI3b1pMjHuCVTJftPPQlWoJMHr%2B3N9OKdKqDw1dfy7uHJgM1WfBqzH3NOrfrJGoi5H5dZZ6nfsrV&X-Amz-Signature=4440c44e1bd067bf7b26a76012e9625b3041141279dff2d313922d414902c106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7N2PSM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIA62UqFyFlGHPL2XbHR51OIrwami5D86OVnASMHkFszeAiEAm6Fg4C2CjVlRyWovsWdlbJnKv8m1CIZEkTcB4%2B6inC4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKwyn6a8RlqqVH4vdircA5s2X3x816ovfLpkWsFnKZvGfh9GkzXuJH8xs%2FzftlmgeC7JrQVMrmZwOp3JsnQl%2BKPqcu1g2UeonggSIoMX5YFfZZmY4aQ5e3N%2FMTugGo8pEIHzNsz0DS3fc6oGJ2S%2BOtdC%2F9wfQzcT8MKIpdK%2BStqojicFmJOIM7K9oyzUjc%2Bn9zXN2I6bqZgPUoLkOkC8FSb2LLve1H4zwxTS7roujhYA3%2Bjdszowx9bxaM5Kpl6gYHxcR65qhONb2powisqcznGkvzbtClzkkGl06hcaOUwvdaACwSFriRSTfgqQVJwWsH7X0kpHrLlGeJtagysrIA1RyTrYfa8HwZXbBOVwIylQo0rKhW51G2t7f5m5jBC30TSS2CkzQFJYlQIy3Wp4C7DiBkJML%2BGKWvciuBtK4pHd6kw134szQwxYZdXPxC4RArcML6gqvBJTfVv9EA4IAbnyPcVi264pZZCWq44yfOVAWFVHpohKcu77CG6Q%2BYUhTpUruIMM%2FApvHWWGJDzV4rAAyqHsF1Cm2LjT0VjMcOKvOaP4Qh1Vt%2B%2FryA6C4If0MF4STgQD%2FBfykqD0DyyGRxklpkAZNQqCEDPYZH%2FuGAPJB2xOCviMVthYBQVaY%2FKd71LCeXjN%2BRlObm0aMNipsMIGOqUB64wZ%2B5TjJYRryU82LhV257Kqk7G7PYooJuTApwugCK29hlEAuXcecWQAr%2B7Qo%2BJDY9ir2Ig84T%2Bqu2lhkxAP%2FPTxB4FcgDFfuYpoiCG164U%2BJLoWUEe5CjLQa%2BvfKq%2B2skeuoSPDgRiCffBPHI3b1pMjHuCVTJftPPQlWoJMHr%2B3N9OKdKqDw1dfy7uHJgM1WfBqzH3NOrfrJGoi5H5dZZ6nfsrV&X-Amz-Signature=3e2c97c065e31b1d8f29aa1c0ddf72bb615bd559f90a7dfb49ca950e32f57273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHIFXUTI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNPl%2B22QD%2Bw4yZFo46B6HaAlzfWA31t8urPEc3EGp5eAIhAJSEqpwCwmlS95URNXzjMuhUjvwbQOx5xHdvHWSWDgCIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtMT%2BH%2B9Dln4d8h2Eq3AOEN5OOFZvECbUinF3%2BzjACP3ygteOsU4qfMQSK2RWK8y1qrtnnLU%2F1KXSSkD%2BD3Ku6Cc91pNROEFvF46uOJ5Phr7A8RmkIRWcy7EY3pp8Wb2WvxoboQrVkGUbfnnYvM9qxVEAjb6D5qAu1G1dypI6jrGAW5CnuFVEXOwheciYwdPiwZhqAjcNQlhEp8Ux8OPo1qTPj1w8FypeuTePaEAH%2Bo6lhcDLEejpCKuHERQW2N8ikcbo9%2FzPnVMO1VXoUAylpZ3sdwuQ1CwQZ4qMODNs7%2FRYD%2FMogkI09pnACpM%2FfEsc%2BnTi%2FAAXSmAXHSikAU7LkBC5D5q4YkG0Mzpgg%2FHJOw4JYKFQ9kqCVcc3iXjjdmtG3dNtGsNy94k%2F8uXTEgn5RkQaC1hPcr2pCvmpOfleMnk68qnR1UeNAXVyuchcoQ4WxIH7ffvqv8%2BNS6qjDKtAfgduKF3eS%2BvSfhJPRIYxwdwhcdDFxHBVkM5HxQu4oxDjIvmfQuNH1YM%2BmBK8fUaNsgQ1OSlRWdWqFMh9wHiOzK0ms4oAydNemqywJbL%2FAzkAy5%2BqgOl%2FcVjHKRhJBrylqbylVhjY4ywYruKFb7FRzxkKiSWA0E4INPGm36JAjfvDpj2SbBEFIE5xz6jCv%2B8vCBjqkAewwgUG4V7BZPIcBtEuIqknQ2mZSAjkSNO2KUuj2AaiHDiHbs1H%2F%2B8nXura%2BYa2k5487%2Bzi2YDo9%2BaXru%2BAmnNCv58EpYUetJSVLN1hTuQgLbQYzZCBNcMJkURP6nPmZ9FW%2B0lUFB4ZXj48n2BLAUfS%2FzDlyQ4qL5GNoCUqGZHyB3pPPO0kYJCFp3z3BsD6oGrx7xPA30xi7eA8KznWuxCiMPdII&X-Amz-Signature=0f57f71ea3fc3533f5e6476025d5798697155b88b099c8893e72820be273d58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHIFXUTI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNPl%2B22QD%2Bw4yZFo46B6HaAlzfWA31t8urPEc3EGp5eAIhAJSEqpwCwmlS95URNXzjMuhUjvwbQOx5xHdvHWSWDgCIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtMT%2BH%2B9Dln4d8h2Eq3AOEN5OOFZvECbUinF3%2BzjACP3ygteOsU4qfMQSK2RWK8y1qrtnnLU%2F1KXSSkD%2BD3Ku6Cc91pNROEFvF46uOJ5Phr7A8RmkIRWcy7EY3pp8Wb2WvxoboQrVkGUbfnnYvM9qxVEAjb6D5qAu1G1dypI6jrGAW5CnuFVEXOwheciYwdPiwZhqAjcNQlhEp8Ux8OPo1qTPj1w8FypeuTePaEAH%2Bo6lhcDLEejpCKuHERQW2N8ikcbo9%2FzPnVMO1VXoUAylpZ3sdwuQ1CwQZ4qMODNs7%2FRYD%2FMogkI09pnACpM%2FfEsc%2BnTi%2FAAXSmAXHSikAU7LkBC5D5q4YkG0Mzpgg%2FHJOw4JYKFQ9kqCVcc3iXjjdmtG3dNtGsNy94k%2F8uXTEgn5RkQaC1hPcr2pCvmpOfleMnk68qnR1UeNAXVyuchcoQ4WxIH7ffvqv8%2BNS6qjDKtAfgduKF3eS%2BvSfhJPRIYxwdwhcdDFxHBVkM5HxQu4oxDjIvmfQuNH1YM%2BmBK8fUaNsgQ1OSlRWdWqFMh9wHiOzK0ms4oAydNemqywJbL%2FAzkAy5%2BqgOl%2FcVjHKRhJBrylqbylVhjY4ywYruKFb7FRzxkKiSWA0E4INPGm36JAjfvDpj2SbBEFIE5xz6jCv%2B8vCBjqkAewwgUG4V7BZPIcBtEuIqknQ2mZSAjkSNO2KUuj2AaiHDiHbs1H%2F%2B8nXura%2BYa2k5487%2Bzi2YDo9%2BaXru%2BAmnNCv58EpYUetJSVLN1hTuQgLbQYzZCBNcMJkURP6nPmZ9FW%2B0lUFB4ZXj48n2BLAUfS%2FzDlyQ4qL5GNoCUqGZHyB3pPPO0kYJCFp3z3BsD6oGrx7xPA30xi7eA8KznWuxCiMPdII&X-Amz-Signature=591658dfbca5ce73f5ef52fef4fe7d55448920d692f1541d16e28c0867f8ab6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHIFXUTI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNPl%2B22QD%2Bw4yZFo46B6HaAlzfWA31t8urPEc3EGp5eAIhAJSEqpwCwmlS95URNXzjMuhUjvwbQOx5xHdvHWSWDgCIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtMT%2BH%2B9Dln4d8h2Eq3AOEN5OOFZvECbUinF3%2BzjACP3ygteOsU4qfMQSK2RWK8y1qrtnnLU%2F1KXSSkD%2BD3Ku6Cc91pNROEFvF46uOJ5Phr7A8RmkIRWcy7EY3pp8Wb2WvxoboQrVkGUbfnnYvM9qxVEAjb6D5qAu1G1dypI6jrGAW5CnuFVEXOwheciYwdPiwZhqAjcNQlhEp8Ux8OPo1qTPj1w8FypeuTePaEAH%2Bo6lhcDLEejpCKuHERQW2N8ikcbo9%2FzPnVMO1VXoUAylpZ3sdwuQ1CwQZ4qMODNs7%2FRYD%2FMogkI09pnACpM%2FfEsc%2BnTi%2FAAXSmAXHSikAU7LkBC5D5q4YkG0Mzpgg%2FHJOw4JYKFQ9kqCVcc3iXjjdmtG3dNtGsNy94k%2F8uXTEgn5RkQaC1hPcr2pCvmpOfleMnk68qnR1UeNAXVyuchcoQ4WxIH7ffvqv8%2BNS6qjDKtAfgduKF3eS%2BvSfhJPRIYxwdwhcdDFxHBVkM5HxQu4oxDjIvmfQuNH1YM%2BmBK8fUaNsgQ1OSlRWdWqFMh9wHiOzK0ms4oAydNemqywJbL%2FAzkAy5%2BqgOl%2FcVjHKRhJBrylqbylVhjY4ywYruKFb7FRzxkKiSWA0E4INPGm36JAjfvDpj2SbBEFIE5xz6jCv%2B8vCBjqkAewwgUG4V7BZPIcBtEuIqknQ2mZSAjkSNO2KUuj2AaiHDiHbs1H%2F%2B8nXura%2BYa2k5487%2Bzi2YDo9%2BaXru%2BAmnNCv58EpYUetJSVLN1hTuQgLbQYzZCBNcMJkURP6nPmZ9FW%2B0lUFB4ZXj48n2BLAUfS%2FzDlyQ4qL5GNoCUqGZHyB3pPPO0kYJCFp3z3BsD6oGrx7xPA30xi7eA8KznWuxCiMPdII&X-Amz-Signature=8cee6c219881201545126c21043e678f987ca219e4f17d3f69257147b09e99e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHIFXUTI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNPl%2B22QD%2Bw4yZFo46B6HaAlzfWA31t8urPEc3EGp5eAIhAJSEqpwCwmlS95URNXzjMuhUjvwbQOx5xHdvHWSWDgCIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtMT%2BH%2B9Dln4d8h2Eq3AOEN5OOFZvECbUinF3%2BzjACP3ygteOsU4qfMQSK2RWK8y1qrtnnLU%2F1KXSSkD%2BD3Ku6Cc91pNROEFvF46uOJ5Phr7A8RmkIRWcy7EY3pp8Wb2WvxoboQrVkGUbfnnYvM9qxVEAjb6D5qAu1G1dypI6jrGAW5CnuFVEXOwheciYwdPiwZhqAjcNQlhEp8Ux8OPo1qTPj1w8FypeuTePaEAH%2Bo6lhcDLEejpCKuHERQW2N8ikcbo9%2FzPnVMO1VXoUAylpZ3sdwuQ1CwQZ4qMODNs7%2FRYD%2FMogkI09pnACpM%2FfEsc%2BnTi%2FAAXSmAXHSikAU7LkBC5D5q4YkG0Mzpgg%2FHJOw4JYKFQ9kqCVcc3iXjjdmtG3dNtGsNy94k%2F8uXTEgn5RkQaC1hPcr2pCvmpOfleMnk68qnR1UeNAXVyuchcoQ4WxIH7ffvqv8%2BNS6qjDKtAfgduKF3eS%2BvSfhJPRIYxwdwhcdDFxHBVkM5HxQu4oxDjIvmfQuNH1YM%2BmBK8fUaNsgQ1OSlRWdWqFMh9wHiOzK0ms4oAydNemqywJbL%2FAzkAy5%2BqgOl%2FcVjHKRhJBrylqbylVhjY4ywYruKFb7FRzxkKiSWA0E4INPGm36JAjfvDpj2SbBEFIE5xz6jCv%2B8vCBjqkAewwgUG4V7BZPIcBtEuIqknQ2mZSAjkSNO2KUuj2AaiHDiHbs1H%2F%2B8nXura%2BYa2k5487%2Bzi2YDo9%2BaXru%2BAmnNCv58EpYUetJSVLN1hTuQgLbQYzZCBNcMJkURP6nPmZ9FW%2B0lUFB4ZXj48n2BLAUfS%2FzDlyQ4qL5GNoCUqGZHyB3pPPO0kYJCFp3z3BsD6oGrx7xPA30xi7eA8KznWuxCiMPdII&X-Amz-Signature=bf290e9dec1a1a3afe85605b6390eff1f5ea10fb8656bace844ef94e2b9344b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHIFXUTI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNPl%2B22QD%2Bw4yZFo46B6HaAlzfWA31t8urPEc3EGp5eAIhAJSEqpwCwmlS95URNXzjMuhUjvwbQOx5xHdvHWSWDgCIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtMT%2BH%2B9Dln4d8h2Eq3AOEN5OOFZvECbUinF3%2BzjACP3ygteOsU4qfMQSK2RWK8y1qrtnnLU%2F1KXSSkD%2BD3Ku6Cc91pNROEFvF46uOJ5Phr7A8RmkIRWcy7EY3pp8Wb2WvxoboQrVkGUbfnnYvM9qxVEAjb6D5qAu1G1dypI6jrGAW5CnuFVEXOwheciYwdPiwZhqAjcNQlhEp8Ux8OPo1qTPj1w8FypeuTePaEAH%2Bo6lhcDLEejpCKuHERQW2N8ikcbo9%2FzPnVMO1VXoUAylpZ3sdwuQ1CwQZ4qMODNs7%2FRYD%2FMogkI09pnACpM%2FfEsc%2BnTi%2FAAXSmAXHSikAU7LkBC5D5q4YkG0Mzpgg%2FHJOw4JYKFQ9kqCVcc3iXjjdmtG3dNtGsNy94k%2F8uXTEgn5RkQaC1hPcr2pCvmpOfleMnk68qnR1UeNAXVyuchcoQ4WxIH7ffvqv8%2BNS6qjDKtAfgduKF3eS%2BvSfhJPRIYxwdwhcdDFxHBVkM5HxQu4oxDjIvmfQuNH1YM%2BmBK8fUaNsgQ1OSlRWdWqFMh9wHiOzK0ms4oAydNemqywJbL%2FAzkAy5%2BqgOl%2FcVjHKRhJBrylqbylVhjY4ywYruKFb7FRzxkKiSWA0E4INPGm36JAjfvDpj2SbBEFIE5xz6jCv%2B8vCBjqkAewwgUG4V7BZPIcBtEuIqknQ2mZSAjkSNO2KUuj2AaiHDiHbs1H%2F%2B8nXura%2BYa2k5487%2Bzi2YDo9%2BaXru%2BAmnNCv58EpYUetJSVLN1hTuQgLbQYzZCBNcMJkURP6nPmZ9FW%2B0lUFB4ZXj48n2BLAUfS%2FzDlyQ4qL5GNoCUqGZHyB3pPPO0kYJCFp3z3BsD6oGrx7xPA30xi7eA8KznWuxCiMPdII&X-Amz-Signature=87c13122ca97fdac8a8ee893a79a9045134f102db570be2bd1ec2f4b1ab5fa63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHIFXUTI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNPl%2B22QD%2Bw4yZFo46B6HaAlzfWA31t8urPEc3EGp5eAIhAJSEqpwCwmlS95URNXzjMuhUjvwbQOx5xHdvHWSWDgCIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtMT%2BH%2B9Dln4d8h2Eq3AOEN5OOFZvECbUinF3%2BzjACP3ygteOsU4qfMQSK2RWK8y1qrtnnLU%2F1KXSSkD%2BD3Ku6Cc91pNROEFvF46uOJ5Phr7A8RmkIRWcy7EY3pp8Wb2WvxoboQrVkGUbfnnYvM9qxVEAjb6D5qAu1G1dypI6jrGAW5CnuFVEXOwheciYwdPiwZhqAjcNQlhEp8Ux8OPo1qTPj1w8FypeuTePaEAH%2Bo6lhcDLEejpCKuHERQW2N8ikcbo9%2FzPnVMO1VXoUAylpZ3sdwuQ1CwQZ4qMODNs7%2FRYD%2FMogkI09pnACpM%2FfEsc%2BnTi%2FAAXSmAXHSikAU7LkBC5D5q4YkG0Mzpgg%2FHJOw4JYKFQ9kqCVcc3iXjjdmtG3dNtGsNy94k%2F8uXTEgn5RkQaC1hPcr2pCvmpOfleMnk68qnR1UeNAXVyuchcoQ4WxIH7ffvqv8%2BNS6qjDKtAfgduKF3eS%2BvSfhJPRIYxwdwhcdDFxHBVkM5HxQu4oxDjIvmfQuNH1YM%2BmBK8fUaNsgQ1OSlRWdWqFMh9wHiOzK0ms4oAydNemqywJbL%2FAzkAy5%2BqgOl%2FcVjHKRhJBrylqbylVhjY4ywYruKFb7FRzxkKiSWA0E4INPGm36JAjfvDpj2SbBEFIE5xz6jCv%2B8vCBjqkAewwgUG4V7BZPIcBtEuIqknQ2mZSAjkSNO2KUuj2AaiHDiHbs1H%2F%2B8nXura%2BYa2k5487%2Bzi2YDo9%2BaXru%2BAmnNCv58EpYUetJSVLN1hTuQgLbQYzZCBNcMJkURP6nPmZ9FW%2B0lUFB4ZXj48n2BLAUfS%2FzDlyQ4qL5GNoCUqGZHyB3pPPO0kYJCFp3z3BsD6oGrx7xPA30xi7eA8KznWuxCiMPdII&X-Amz-Signature=5938297eb5cb29634a6c4c16ebbe047d9cd9e70e57e758f4a5cabffc886c9f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHIFXUTI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNPl%2B22QD%2Bw4yZFo46B6HaAlzfWA31t8urPEc3EGp5eAIhAJSEqpwCwmlS95URNXzjMuhUjvwbQOx5xHdvHWSWDgCIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtMT%2BH%2B9Dln4d8h2Eq3AOEN5OOFZvECbUinF3%2BzjACP3ygteOsU4qfMQSK2RWK8y1qrtnnLU%2F1KXSSkD%2BD3Ku6Cc91pNROEFvF46uOJ5Phr7A8RmkIRWcy7EY3pp8Wb2WvxoboQrVkGUbfnnYvM9qxVEAjb6D5qAu1G1dypI6jrGAW5CnuFVEXOwheciYwdPiwZhqAjcNQlhEp8Ux8OPo1qTPj1w8FypeuTePaEAH%2Bo6lhcDLEejpCKuHERQW2N8ikcbo9%2FzPnVMO1VXoUAylpZ3sdwuQ1CwQZ4qMODNs7%2FRYD%2FMogkI09pnACpM%2FfEsc%2BnTi%2FAAXSmAXHSikAU7LkBC5D5q4YkG0Mzpgg%2FHJOw4JYKFQ9kqCVcc3iXjjdmtG3dNtGsNy94k%2F8uXTEgn5RkQaC1hPcr2pCvmpOfleMnk68qnR1UeNAXVyuchcoQ4WxIH7ffvqv8%2BNS6qjDKtAfgduKF3eS%2BvSfhJPRIYxwdwhcdDFxHBVkM5HxQu4oxDjIvmfQuNH1YM%2BmBK8fUaNsgQ1OSlRWdWqFMh9wHiOzK0ms4oAydNemqywJbL%2FAzkAy5%2BqgOl%2FcVjHKRhJBrylqbylVhjY4ywYruKFb7FRzxkKiSWA0E4INPGm36JAjfvDpj2SbBEFIE5xz6jCv%2B8vCBjqkAewwgUG4V7BZPIcBtEuIqknQ2mZSAjkSNO2KUuj2AaiHDiHbs1H%2F%2B8nXura%2BYa2k5487%2Bzi2YDo9%2BaXru%2BAmnNCv58EpYUetJSVLN1hTuQgLbQYzZCBNcMJkURP6nPmZ9FW%2B0lUFB4ZXj48n2BLAUfS%2FzDlyQ4qL5GNoCUqGZHyB3pPPO0kYJCFp3z3BsD6oGrx7xPA30xi7eA8KznWuxCiMPdII&X-Amz-Signature=32db3317586eac96fd9189dfc8b9cc33cf5ef35dcf07a7b651b0e53716120fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHIFXUTI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNPl%2B22QD%2Bw4yZFo46B6HaAlzfWA31t8urPEc3EGp5eAIhAJSEqpwCwmlS95URNXzjMuhUjvwbQOx5xHdvHWSWDgCIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtMT%2BH%2B9Dln4d8h2Eq3AOEN5OOFZvECbUinF3%2BzjACP3ygteOsU4qfMQSK2RWK8y1qrtnnLU%2F1KXSSkD%2BD3Ku6Cc91pNROEFvF46uOJ5Phr7A8RmkIRWcy7EY3pp8Wb2WvxoboQrVkGUbfnnYvM9qxVEAjb6D5qAu1G1dypI6jrGAW5CnuFVEXOwheciYwdPiwZhqAjcNQlhEp8Ux8OPo1qTPj1w8FypeuTePaEAH%2Bo6lhcDLEejpCKuHERQW2N8ikcbo9%2FzPnVMO1VXoUAylpZ3sdwuQ1CwQZ4qMODNs7%2FRYD%2FMogkI09pnACpM%2FfEsc%2BnTi%2FAAXSmAXHSikAU7LkBC5D5q4YkG0Mzpgg%2FHJOw4JYKFQ9kqCVcc3iXjjdmtG3dNtGsNy94k%2F8uXTEgn5RkQaC1hPcr2pCvmpOfleMnk68qnR1UeNAXVyuchcoQ4WxIH7ffvqv8%2BNS6qjDKtAfgduKF3eS%2BvSfhJPRIYxwdwhcdDFxHBVkM5HxQu4oxDjIvmfQuNH1YM%2BmBK8fUaNsgQ1OSlRWdWqFMh9wHiOzK0ms4oAydNemqywJbL%2FAzkAy5%2BqgOl%2FcVjHKRhJBrylqbylVhjY4ywYruKFb7FRzxkKiSWA0E4INPGm36JAjfvDpj2SbBEFIE5xz6jCv%2B8vCBjqkAewwgUG4V7BZPIcBtEuIqknQ2mZSAjkSNO2KUuj2AaiHDiHbs1H%2F%2B8nXura%2BYa2k5487%2Bzi2YDo9%2BaXru%2BAmnNCv58EpYUetJSVLN1hTuQgLbQYzZCBNcMJkURP6nPmZ9FW%2B0lUFB4ZXj48n2BLAUfS%2FzDlyQ4qL5GNoCUqGZHyB3pPPO0kYJCFp3z3BsD6oGrx7xPA30xi7eA8KznWuxCiMPdII&X-Amz-Signature=1beb69b9b9f2e6478b87c4ef25e977d6ccdfcf03fb87cffdb7eb455ed74f9228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

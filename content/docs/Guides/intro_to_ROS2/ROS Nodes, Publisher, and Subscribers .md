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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7IXCDU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1LeLoEVvlABxVQv8TNNFL9k5fme%2FELbDultcInalyrwIhAJwR6ZA52xXqPRbMIlBnBlTDnrOXZvhm8zM7OcYJzxmkKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDcRUkiCp5119MTggq3ANySD5cfnlHbi3bu3FTI9N5NfGaH7d3nDJUfeSUAAACKgOb3SM9ciOeCzSU9p914NtTHRQ3sX1QBMS9h8laU%2FgedjWLX7S3%2BavWh%2FHDHGKRk3cZ4aUGap%2FNHqmnK%2ByfCC6zsdGdl38d1OrslYNmhSgRno9pHlyNHexmM1MU95N7oHDMX73L%2FcVmJ4m2QMZ5mtAIfg%2FHcD23BVuQvwzuIhw85ttQAwtEBGmWdIDSNfH64gSG%2BmThC8n2l8BtT11WsjDcUTZCeGuturfrFNLLnhvWNaOFCBz6MPM3OoABIQzpg5UWNBRqvgoojK17myn7vOPmx3kkLye3sxFZ%2FcF%2Fibwc%2FcaVtwhi799x4RGM3S032rVIjrWcObw5HLhKz4rdIyvuafH1hE9%2F%2BhHYd2TAlzxzYnANPkj%2FfAorQeKZgBVVKrv038Ilaf2ynsPxrmZuXe%2BLfqbkZbxdMaPEO4nHjtZ%2Ft6RcYbXud2%2FnKvKhVHZodF3z7hpX%2BVpAt2BTMbMzOygVUnr6ANdZ5yxVADmmsB9z6cr11wwejR%2Bm%2BfZiLvUitd%2FfrDVhSYmH4WT7xCV78LWBVFhR%2FU46EpEzGhu9gawrQtCJljV7fRgkifz0SUvTHybZ7eumRI3%2F1fGMezDZ3aTEBjqkAXfzXkLO9UlB7nNYTyy0w4pNlDH0WTN51bRhC8HTIl13K9zmrS6%2Bbj%2Fn7V7PqbNdCfJrCm2Q5eYKeHwfh%2FFMBMiXreTy4O7%2BEEZckrLora%2FU0ebx7yOlnhRuS2LNCb0PVMIu7fSyfEEN17JBySb76MxTYLi1DnnmNWMK0hFn0QmqjbAjOKSME%2FINMiQ0Q1ndyiRYBDyG1hYNDEv1hcdJLBisunFK&X-Amz-Signature=feebb34742148f191293a383bdb0870917eabef3cf18e624ca9d11727f5120d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7IXCDU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1LeLoEVvlABxVQv8TNNFL9k5fme%2FELbDultcInalyrwIhAJwR6ZA52xXqPRbMIlBnBlTDnrOXZvhm8zM7OcYJzxmkKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDcRUkiCp5119MTggq3ANySD5cfnlHbi3bu3FTI9N5NfGaH7d3nDJUfeSUAAACKgOb3SM9ciOeCzSU9p914NtTHRQ3sX1QBMS9h8laU%2FgedjWLX7S3%2BavWh%2FHDHGKRk3cZ4aUGap%2FNHqmnK%2ByfCC6zsdGdl38d1OrslYNmhSgRno9pHlyNHexmM1MU95N7oHDMX73L%2FcVmJ4m2QMZ5mtAIfg%2FHcD23BVuQvwzuIhw85ttQAwtEBGmWdIDSNfH64gSG%2BmThC8n2l8BtT11WsjDcUTZCeGuturfrFNLLnhvWNaOFCBz6MPM3OoABIQzpg5UWNBRqvgoojK17myn7vOPmx3kkLye3sxFZ%2FcF%2Fibwc%2FcaVtwhi799x4RGM3S032rVIjrWcObw5HLhKz4rdIyvuafH1hE9%2F%2BhHYd2TAlzxzYnANPkj%2FfAorQeKZgBVVKrv038Ilaf2ynsPxrmZuXe%2BLfqbkZbxdMaPEO4nHjtZ%2Ft6RcYbXud2%2FnKvKhVHZodF3z7hpX%2BVpAt2BTMbMzOygVUnr6ANdZ5yxVADmmsB9z6cr11wwejR%2Bm%2BfZiLvUitd%2FfrDVhSYmH4WT7xCV78LWBVFhR%2FU46EpEzGhu9gawrQtCJljV7fRgkifz0SUvTHybZ7eumRI3%2F1fGMezDZ3aTEBjqkAXfzXkLO9UlB7nNYTyy0w4pNlDH0WTN51bRhC8HTIl13K9zmrS6%2Bbj%2Fn7V7PqbNdCfJrCm2Q5eYKeHwfh%2FFMBMiXreTy4O7%2BEEZckrLora%2FU0ebx7yOlnhRuS2LNCb0PVMIu7fSyfEEN17JBySb76MxTYLi1DnnmNWMK0hFn0QmqjbAjOKSME%2FINMiQ0Q1ndyiRYBDyG1hYNDEv1hcdJLBisunFK&X-Amz-Signature=f911a55ef6ec7b35ef4abe0b551d4ed13f5abb49f7b10e5f8100d62641216555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7IXCDU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1LeLoEVvlABxVQv8TNNFL9k5fme%2FELbDultcInalyrwIhAJwR6ZA52xXqPRbMIlBnBlTDnrOXZvhm8zM7OcYJzxmkKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDcRUkiCp5119MTggq3ANySD5cfnlHbi3bu3FTI9N5NfGaH7d3nDJUfeSUAAACKgOb3SM9ciOeCzSU9p914NtTHRQ3sX1QBMS9h8laU%2FgedjWLX7S3%2BavWh%2FHDHGKRk3cZ4aUGap%2FNHqmnK%2ByfCC6zsdGdl38d1OrslYNmhSgRno9pHlyNHexmM1MU95N7oHDMX73L%2FcVmJ4m2QMZ5mtAIfg%2FHcD23BVuQvwzuIhw85ttQAwtEBGmWdIDSNfH64gSG%2BmThC8n2l8BtT11WsjDcUTZCeGuturfrFNLLnhvWNaOFCBz6MPM3OoABIQzpg5UWNBRqvgoojK17myn7vOPmx3kkLye3sxFZ%2FcF%2Fibwc%2FcaVtwhi799x4RGM3S032rVIjrWcObw5HLhKz4rdIyvuafH1hE9%2F%2BhHYd2TAlzxzYnANPkj%2FfAorQeKZgBVVKrv038Ilaf2ynsPxrmZuXe%2BLfqbkZbxdMaPEO4nHjtZ%2Ft6RcYbXud2%2FnKvKhVHZodF3z7hpX%2BVpAt2BTMbMzOygVUnr6ANdZ5yxVADmmsB9z6cr11wwejR%2Bm%2BfZiLvUitd%2FfrDVhSYmH4WT7xCV78LWBVFhR%2FU46EpEzGhu9gawrQtCJljV7fRgkifz0SUvTHybZ7eumRI3%2F1fGMezDZ3aTEBjqkAXfzXkLO9UlB7nNYTyy0w4pNlDH0WTN51bRhC8HTIl13K9zmrS6%2Bbj%2Fn7V7PqbNdCfJrCm2Q5eYKeHwfh%2FFMBMiXreTy4O7%2BEEZckrLora%2FU0ebx7yOlnhRuS2LNCb0PVMIu7fSyfEEN17JBySb76MxTYLi1DnnmNWMK0hFn0QmqjbAjOKSME%2FINMiQ0Q1ndyiRYBDyG1hYNDEv1hcdJLBisunFK&X-Amz-Signature=16e7b48f25734e98aca1af7483fa3c9471ba58242da0aecc2b9d2d58e5ba02c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7IXCDU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1LeLoEVvlABxVQv8TNNFL9k5fme%2FELbDultcInalyrwIhAJwR6ZA52xXqPRbMIlBnBlTDnrOXZvhm8zM7OcYJzxmkKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDcRUkiCp5119MTggq3ANySD5cfnlHbi3bu3FTI9N5NfGaH7d3nDJUfeSUAAACKgOb3SM9ciOeCzSU9p914NtTHRQ3sX1QBMS9h8laU%2FgedjWLX7S3%2BavWh%2FHDHGKRk3cZ4aUGap%2FNHqmnK%2ByfCC6zsdGdl38d1OrslYNmhSgRno9pHlyNHexmM1MU95N7oHDMX73L%2FcVmJ4m2QMZ5mtAIfg%2FHcD23BVuQvwzuIhw85ttQAwtEBGmWdIDSNfH64gSG%2BmThC8n2l8BtT11WsjDcUTZCeGuturfrFNLLnhvWNaOFCBz6MPM3OoABIQzpg5UWNBRqvgoojK17myn7vOPmx3kkLye3sxFZ%2FcF%2Fibwc%2FcaVtwhi799x4RGM3S032rVIjrWcObw5HLhKz4rdIyvuafH1hE9%2F%2BhHYd2TAlzxzYnANPkj%2FfAorQeKZgBVVKrv038Ilaf2ynsPxrmZuXe%2BLfqbkZbxdMaPEO4nHjtZ%2Ft6RcYbXud2%2FnKvKhVHZodF3z7hpX%2BVpAt2BTMbMzOygVUnr6ANdZ5yxVADmmsB9z6cr11wwejR%2Bm%2BfZiLvUitd%2FfrDVhSYmH4WT7xCV78LWBVFhR%2FU46EpEzGhu9gawrQtCJljV7fRgkifz0SUvTHybZ7eumRI3%2F1fGMezDZ3aTEBjqkAXfzXkLO9UlB7nNYTyy0w4pNlDH0WTN51bRhC8HTIl13K9zmrS6%2Bbj%2Fn7V7PqbNdCfJrCm2Q5eYKeHwfh%2FFMBMiXreTy4O7%2BEEZckrLora%2FU0ebx7yOlnhRuS2LNCb0PVMIu7fSyfEEN17JBySb76MxTYLi1DnnmNWMK0hFn0QmqjbAjOKSME%2FINMiQ0Q1ndyiRYBDyG1hYNDEv1hcdJLBisunFK&X-Amz-Signature=a07543a0bed54d5b47dbe13c04522728ed288dd8e03e626c2e1341a97b5ce12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7IXCDU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1LeLoEVvlABxVQv8TNNFL9k5fme%2FELbDultcInalyrwIhAJwR6ZA52xXqPRbMIlBnBlTDnrOXZvhm8zM7OcYJzxmkKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDcRUkiCp5119MTggq3ANySD5cfnlHbi3bu3FTI9N5NfGaH7d3nDJUfeSUAAACKgOb3SM9ciOeCzSU9p914NtTHRQ3sX1QBMS9h8laU%2FgedjWLX7S3%2BavWh%2FHDHGKRk3cZ4aUGap%2FNHqmnK%2ByfCC6zsdGdl38d1OrslYNmhSgRno9pHlyNHexmM1MU95N7oHDMX73L%2FcVmJ4m2QMZ5mtAIfg%2FHcD23BVuQvwzuIhw85ttQAwtEBGmWdIDSNfH64gSG%2BmThC8n2l8BtT11WsjDcUTZCeGuturfrFNLLnhvWNaOFCBz6MPM3OoABIQzpg5UWNBRqvgoojK17myn7vOPmx3kkLye3sxFZ%2FcF%2Fibwc%2FcaVtwhi799x4RGM3S032rVIjrWcObw5HLhKz4rdIyvuafH1hE9%2F%2BhHYd2TAlzxzYnANPkj%2FfAorQeKZgBVVKrv038Ilaf2ynsPxrmZuXe%2BLfqbkZbxdMaPEO4nHjtZ%2Ft6RcYbXud2%2FnKvKhVHZodF3z7hpX%2BVpAt2BTMbMzOygVUnr6ANdZ5yxVADmmsB9z6cr11wwejR%2Bm%2BfZiLvUitd%2FfrDVhSYmH4WT7xCV78LWBVFhR%2FU46EpEzGhu9gawrQtCJljV7fRgkifz0SUvTHybZ7eumRI3%2F1fGMezDZ3aTEBjqkAXfzXkLO9UlB7nNYTyy0w4pNlDH0WTN51bRhC8HTIl13K9zmrS6%2Bbj%2Fn7V7PqbNdCfJrCm2Q5eYKeHwfh%2FFMBMiXreTy4O7%2BEEZckrLora%2FU0ebx7yOlnhRuS2LNCb0PVMIu7fSyfEEN17JBySb76MxTYLi1DnnmNWMK0hFn0QmqjbAjOKSME%2FINMiQ0Q1ndyiRYBDyG1hYNDEv1hcdJLBisunFK&X-Amz-Signature=b2776d8c51c770c8c2ef74b68397c008662283eb8b5e32f7a3313ec6191460cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7IXCDU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1LeLoEVvlABxVQv8TNNFL9k5fme%2FELbDultcInalyrwIhAJwR6ZA52xXqPRbMIlBnBlTDnrOXZvhm8zM7OcYJzxmkKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDcRUkiCp5119MTggq3ANySD5cfnlHbi3bu3FTI9N5NfGaH7d3nDJUfeSUAAACKgOb3SM9ciOeCzSU9p914NtTHRQ3sX1QBMS9h8laU%2FgedjWLX7S3%2BavWh%2FHDHGKRk3cZ4aUGap%2FNHqmnK%2ByfCC6zsdGdl38d1OrslYNmhSgRno9pHlyNHexmM1MU95N7oHDMX73L%2FcVmJ4m2QMZ5mtAIfg%2FHcD23BVuQvwzuIhw85ttQAwtEBGmWdIDSNfH64gSG%2BmThC8n2l8BtT11WsjDcUTZCeGuturfrFNLLnhvWNaOFCBz6MPM3OoABIQzpg5UWNBRqvgoojK17myn7vOPmx3kkLye3sxFZ%2FcF%2Fibwc%2FcaVtwhi799x4RGM3S032rVIjrWcObw5HLhKz4rdIyvuafH1hE9%2F%2BhHYd2TAlzxzYnANPkj%2FfAorQeKZgBVVKrv038Ilaf2ynsPxrmZuXe%2BLfqbkZbxdMaPEO4nHjtZ%2Ft6RcYbXud2%2FnKvKhVHZodF3z7hpX%2BVpAt2BTMbMzOygVUnr6ANdZ5yxVADmmsB9z6cr11wwejR%2Bm%2BfZiLvUitd%2FfrDVhSYmH4WT7xCV78LWBVFhR%2FU46EpEzGhu9gawrQtCJljV7fRgkifz0SUvTHybZ7eumRI3%2F1fGMezDZ3aTEBjqkAXfzXkLO9UlB7nNYTyy0w4pNlDH0WTN51bRhC8HTIl13K9zmrS6%2Bbj%2Fn7V7PqbNdCfJrCm2Q5eYKeHwfh%2FFMBMiXreTy4O7%2BEEZckrLora%2FU0ebx7yOlnhRuS2LNCb0PVMIu7fSyfEEN17JBySb76MxTYLi1DnnmNWMK0hFn0QmqjbAjOKSME%2FINMiQ0Q1ndyiRYBDyG1hYNDEv1hcdJLBisunFK&X-Amz-Signature=d91b903155a369a05122d3b64bbdd1038d0933688aad78c882153dd9e8c616d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7IXCDU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1LeLoEVvlABxVQv8TNNFL9k5fme%2FELbDultcInalyrwIhAJwR6ZA52xXqPRbMIlBnBlTDnrOXZvhm8zM7OcYJzxmkKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDcRUkiCp5119MTggq3ANySD5cfnlHbi3bu3FTI9N5NfGaH7d3nDJUfeSUAAACKgOb3SM9ciOeCzSU9p914NtTHRQ3sX1QBMS9h8laU%2FgedjWLX7S3%2BavWh%2FHDHGKRk3cZ4aUGap%2FNHqmnK%2ByfCC6zsdGdl38d1OrslYNmhSgRno9pHlyNHexmM1MU95N7oHDMX73L%2FcVmJ4m2QMZ5mtAIfg%2FHcD23BVuQvwzuIhw85ttQAwtEBGmWdIDSNfH64gSG%2BmThC8n2l8BtT11WsjDcUTZCeGuturfrFNLLnhvWNaOFCBz6MPM3OoABIQzpg5UWNBRqvgoojK17myn7vOPmx3kkLye3sxFZ%2FcF%2Fibwc%2FcaVtwhi799x4RGM3S032rVIjrWcObw5HLhKz4rdIyvuafH1hE9%2F%2BhHYd2TAlzxzYnANPkj%2FfAorQeKZgBVVKrv038Ilaf2ynsPxrmZuXe%2BLfqbkZbxdMaPEO4nHjtZ%2Ft6RcYbXud2%2FnKvKhVHZodF3z7hpX%2BVpAt2BTMbMzOygVUnr6ANdZ5yxVADmmsB9z6cr11wwejR%2Bm%2BfZiLvUitd%2FfrDVhSYmH4WT7xCV78LWBVFhR%2FU46EpEzGhu9gawrQtCJljV7fRgkifz0SUvTHybZ7eumRI3%2F1fGMezDZ3aTEBjqkAXfzXkLO9UlB7nNYTyy0w4pNlDH0WTN51bRhC8HTIl13K9zmrS6%2Bbj%2Fn7V7PqbNdCfJrCm2Q5eYKeHwfh%2FFMBMiXreTy4O7%2BEEZckrLora%2FU0ebx7yOlnhRuS2LNCb0PVMIu7fSyfEEN17JBySb76MxTYLi1DnnmNWMK0hFn0QmqjbAjOKSME%2FINMiQ0Q1ndyiRYBDyG1hYNDEv1hcdJLBisunFK&X-Amz-Signature=01c7d97d5b207de942244a6fbf16f5fc48414c4913b35b1d8d6867837e3f353c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY7IXCDU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1LeLoEVvlABxVQv8TNNFL9k5fme%2FELbDultcInalyrwIhAJwR6ZA52xXqPRbMIlBnBlTDnrOXZvhm8zM7OcYJzxmkKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDcRUkiCp5119MTggq3ANySD5cfnlHbi3bu3FTI9N5NfGaH7d3nDJUfeSUAAACKgOb3SM9ciOeCzSU9p914NtTHRQ3sX1QBMS9h8laU%2FgedjWLX7S3%2BavWh%2FHDHGKRk3cZ4aUGap%2FNHqmnK%2ByfCC6zsdGdl38d1OrslYNmhSgRno9pHlyNHexmM1MU95N7oHDMX73L%2FcVmJ4m2QMZ5mtAIfg%2FHcD23BVuQvwzuIhw85ttQAwtEBGmWdIDSNfH64gSG%2BmThC8n2l8BtT11WsjDcUTZCeGuturfrFNLLnhvWNaOFCBz6MPM3OoABIQzpg5UWNBRqvgoojK17myn7vOPmx3kkLye3sxFZ%2FcF%2Fibwc%2FcaVtwhi799x4RGM3S032rVIjrWcObw5HLhKz4rdIyvuafH1hE9%2F%2BhHYd2TAlzxzYnANPkj%2FfAorQeKZgBVVKrv038Ilaf2ynsPxrmZuXe%2BLfqbkZbxdMaPEO4nHjtZ%2Ft6RcYbXud2%2FnKvKhVHZodF3z7hpX%2BVpAt2BTMbMzOygVUnr6ANdZ5yxVADmmsB9z6cr11wwejR%2Bm%2BfZiLvUitd%2FfrDVhSYmH4WT7xCV78LWBVFhR%2FU46EpEzGhu9gawrQtCJljV7fRgkifz0SUvTHybZ7eumRI3%2F1fGMezDZ3aTEBjqkAXfzXkLO9UlB7nNYTyy0w4pNlDH0WTN51bRhC8HTIl13K9zmrS6%2Bbj%2Fn7V7PqbNdCfJrCm2Q5eYKeHwfh%2FFMBMiXreTy4O7%2BEEZckrLora%2FU0ebx7yOlnhRuS2LNCb0PVMIu7fSyfEEN17JBySb76MxTYLi1DnnmNWMK0hFn0QmqjbAjOKSME%2FINMiQ0Q1ndyiRYBDyG1hYNDEv1hcdJLBisunFK&X-Amz-Signature=ad0d0005164be44abf0d38499fec9bc4b30dd337e028a88049fb34327f6f942c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

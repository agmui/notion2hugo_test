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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTBN2EC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJRqzJ1G0qMPGgAyuQmWTDmTP5uAvxxXeoK%2Bj8CgJexAiEAmGuz1dIYWV8N6oXZUBuEk%2FwSYgxi3OaRc%2FzHaHFjH7IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPUKGgqq1hhDQYY%2ByrcA2D0QZj7ZgasJyVsOZXveB42qVJWG5UMu9tFc14ygxiD%2FlCwl8q3mU4o1IO834QuMQScDtLQ887A%2B71euSgbgM0u7dvztw4Nq7EaCHCfNjzbgszw7v1CCbY3cf27b8tBvUgeIfaLwvDGezmv5JggELCcZKPvuwFuOa9HqRwMIUVJccX%2BrLWs7EiagPzQ4HyIZemIIaRUmNLcSb%2B0yW4w0jDoVJfr1tXg7gFJoRKCe4%2BziJzpsHLJxMQzu4ugGDyrVHuryuo4JcN2FaHV6aopqcwSYUbrzx6KbI1SoaPmH%2BtqIOGvEtbma9pNZHiGQzPO6%2FXXi6Ef5REE%2Bhwzx%2BUtCSKzWp9R05f4fj90%2FUNwTgdBOfgo2e5ypAG%2BO5uBn0ZsBrviSijcsdrslfVn5qdkET9LM33iLwffjy4CkoXtK%2Bp8PtZ9dv4cg%2FJwnH%2F%2FQGipIIJvrqWkAklSdrgHIsPuU8jx3Nl%2FuXehTjda6nL3XChSdzTJE6HkGj3u%2BQ%2FtYvo3N%2FMO28nNbijCE8dANI68Yp7oaO5pTOJVVDb1Tw%2B4xeZE6u8%2FrPQ%2BSVW2R0bxFIR%2Bomp7xAEWnhZAVPWJzmCRQuoDIBBA2ALblUp1Zuh45bOLrumkToQvbAOwE9foMP%2FNi8AGOqUByt%2BW6G3T%2FbcVMNuOCtSvR8ASBI0rva6PJ7TYCiNh9mh4p%2FRzGmtgLjN4DOVIvSrrptlWFkyVnALDRUQPzdtmZan3YzzCEP6kG3aaCem%2BA35zfK%2FS1lEMxq66bkcuX%2BmGLkgs2Nnu0SglZR3HgzvkiVfAdmRi9PEno15W57ABY6QR1zzM0e7jadDydBI2syrPFyK9nx2DdqY7%2BMyMkxKc0uaveFEF&X-Amz-Signature=e468fa58213935a1905e9690b4e2ec724e3877a0c9d340ae9f30a466a0a38dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTBN2EC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJRqzJ1G0qMPGgAyuQmWTDmTP5uAvxxXeoK%2Bj8CgJexAiEAmGuz1dIYWV8N6oXZUBuEk%2FwSYgxi3OaRc%2FzHaHFjH7IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPUKGgqq1hhDQYY%2ByrcA2D0QZj7ZgasJyVsOZXveB42qVJWG5UMu9tFc14ygxiD%2FlCwl8q3mU4o1IO834QuMQScDtLQ887A%2B71euSgbgM0u7dvztw4Nq7EaCHCfNjzbgszw7v1CCbY3cf27b8tBvUgeIfaLwvDGezmv5JggELCcZKPvuwFuOa9HqRwMIUVJccX%2BrLWs7EiagPzQ4HyIZemIIaRUmNLcSb%2B0yW4w0jDoVJfr1tXg7gFJoRKCe4%2BziJzpsHLJxMQzu4ugGDyrVHuryuo4JcN2FaHV6aopqcwSYUbrzx6KbI1SoaPmH%2BtqIOGvEtbma9pNZHiGQzPO6%2FXXi6Ef5REE%2Bhwzx%2BUtCSKzWp9R05f4fj90%2FUNwTgdBOfgo2e5ypAG%2BO5uBn0ZsBrviSijcsdrslfVn5qdkET9LM33iLwffjy4CkoXtK%2Bp8PtZ9dv4cg%2FJwnH%2F%2FQGipIIJvrqWkAklSdrgHIsPuU8jx3Nl%2FuXehTjda6nL3XChSdzTJE6HkGj3u%2BQ%2FtYvo3N%2FMO28nNbijCE8dANI68Yp7oaO5pTOJVVDb1Tw%2B4xeZE6u8%2FrPQ%2BSVW2R0bxFIR%2Bomp7xAEWnhZAVPWJzmCRQuoDIBBA2ALblUp1Zuh45bOLrumkToQvbAOwE9foMP%2FNi8AGOqUByt%2BW6G3T%2FbcVMNuOCtSvR8ASBI0rva6PJ7TYCiNh9mh4p%2FRzGmtgLjN4DOVIvSrrptlWFkyVnALDRUQPzdtmZan3YzzCEP6kG3aaCem%2BA35zfK%2FS1lEMxq66bkcuX%2BmGLkgs2Nnu0SglZR3HgzvkiVfAdmRi9PEno15W57ABY6QR1zzM0e7jadDydBI2syrPFyK9nx2DdqY7%2BMyMkxKc0uaveFEF&X-Amz-Signature=2b7a40f1b02c9aaa8d19539434c432a8d639dbaafd8399fc0490140ab2ac5a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTBN2EC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJRqzJ1G0qMPGgAyuQmWTDmTP5uAvxxXeoK%2Bj8CgJexAiEAmGuz1dIYWV8N6oXZUBuEk%2FwSYgxi3OaRc%2FzHaHFjH7IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPUKGgqq1hhDQYY%2ByrcA2D0QZj7ZgasJyVsOZXveB42qVJWG5UMu9tFc14ygxiD%2FlCwl8q3mU4o1IO834QuMQScDtLQ887A%2B71euSgbgM0u7dvztw4Nq7EaCHCfNjzbgszw7v1CCbY3cf27b8tBvUgeIfaLwvDGezmv5JggELCcZKPvuwFuOa9HqRwMIUVJccX%2BrLWs7EiagPzQ4HyIZemIIaRUmNLcSb%2B0yW4w0jDoVJfr1tXg7gFJoRKCe4%2BziJzpsHLJxMQzu4ugGDyrVHuryuo4JcN2FaHV6aopqcwSYUbrzx6KbI1SoaPmH%2BtqIOGvEtbma9pNZHiGQzPO6%2FXXi6Ef5REE%2Bhwzx%2BUtCSKzWp9R05f4fj90%2FUNwTgdBOfgo2e5ypAG%2BO5uBn0ZsBrviSijcsdrslfVn5qdkET9LM33iLwffjy4CkoXtK%2Bp8PtZ9dv4cg%2FJwnH%2F%2FQGipIIJvrqWkAklSdrgHIsPuU8jx3Nl%2FuXehTjda6nL3XChSdzTJE6HkGj3u%2BQ%2FtYvo3N%2FMO28nNbijCE8dANI68Yp7oaO5pTOJVVDb1Tw%2B4xeZE6u8%2FrPQ%2BSVW2R0bxFIR%2Bomp7xAEWnhZAVPWJzmCRQuoDIBBA2ALblUp1Zuh45bOLrumkToQvbAOwE9foMP%2FNi8AGOqUByt%2BW6G3T%2FbcVMNuOCtSvR8ASBI0rva6PJ7TYCiNh9mh4p%2FRzGmtgLjN4DOVIvSrrptlWFkyVnALDRUQPzdtmZan3YzzCEP6kG3aaCem%2BA35zfK%2FS1lEMxq66bkcuX%2BmGLkgs2Nnu0SglZR3HgzvkiVfAdmRi9PEno15W57ABY6QR1zzM0e7jadDydBI2syrPFyK9nx2DdqY7%2BMyMkxKc0uaveFEF&X-Amz-Signature=b63c71829ad1d5e721be2c82b67ebea860c5422dda374bd22c1b3a645299768a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTBN2EC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJRqzJ1G0qMPGgAyuQmWTDmTP5uAvxxXeoK%2Bj8CgJexAiEAmGuz1dIYWV8N6oXZUBuEk%2FwSYgxi3OaRc%2FzHaHFjH7IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPUKGgqq1hhDQYY%2ByrcA2D0QZj7ZgasJyVsOZXveB42qVJWG5UMu9tFc14ygxiD%2FlCwl8q3mU4o1IO834QuMQScDtLQ887A%2B71euSgbgM0u7dvztw4Nq7EaCHCfNjzbgszw7v1CCbY3cf27b8tBvUgeIfaLwvDGezmv5JggELCcZKPvuwFuOa9HqRwMIUVJccX%2BrLWs7EiagPzQ4HyIZemIIaRUmNLcSb%2B0yW4w0jDoVJfr1tXg7gFJoRKCe4%2BziJzpsHLJxMQzu4ugGDyrVHuryuo4JcN2FaHV6aopqcwSYUbrzx6KbI1SoaPmH%2BtqIOGvEtbma9pNZHiGQzPO6%2FXXi6Ef5REE%2Bhwzx%2BUtCSKzWp9R05f4fj90%2FUNwTgdBOfgo2e5ypAG%2BO5uBn0ZsBrviSijcsdrslfVn5qdkET9LM33iLwffjy4CkoXtK%2Bp8PtZ9dv4cg%2FJwnH%2F%2FQGipIIJvrqWkAklSdrgHIsPuU8jx3Nl%2FuXehTjda6nL3XChSdzTJE6HkGj3u%2BQ%2FtYvo3N%2FMO28nNbijCE8dANI68Yp7oaO5pTOJVVDb1Tw%2B4xeZE6u8%2FrPQ%2BSVW2R0bxFIR%2Bomp7xAEWnhZAVPWJzmCRQuoDIBBA2ALblUp1Zuh45bOLrumkToQvbAOwE9foMP%2FNi8AGOqUByt%2BW6G3T%2FbcVMNuOCtSvR8ASBI0rva6PJ7TYCiNh9mh4p%2FRzGmtgLjN4DOVIvSrrptlWFkyVnALDRUQPzdtmZan3YzzCEP6kG3aaCem%2BA35zfK%2FS1lEMxq66bkcuX%2BmGLkgs2Nnu0SglZR3HgzvkiVfAdmRi9PEno15W57ABY6QR1zzM0e7jadDydBI2syrPFyK9nx2DdqY7%2BMyMkxKc0uaveFEF&X-Amz-Signature=22b72a9888faea3328310aafa02405d0f00729c5fdb9dcf8898e99471911a8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTBN2EC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJRqzJ1G0qMPGgAyuQmWTDmTP5uAvxxXeoK%2Bj8CgJexAiEAmGuz1dIYWV8N6oXZUBuEk%2FwSYgxi3OaRc%2FzHaHFjH7IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPUKGgqq1hhDQYY%2ByrcA2D0QZj7ZgasJyVsOZXveB42qVJWG5UMu9tFc14ygxiD%2FlCwl8q3mU4o1IO834QuMQScDtLQ887A%2B71euSgbgM0u7dvztw4Nq7EaCHCfNjzbgszw7v1CCbY3cf27b8tBvUgeIfaLwvDGezmv5JggELCcZKPvuwFuOa9HqRwMIUVJccX%2BrLWs7EiagPzQ4HyIZemIIaRUmNLcSb%2B0yW4w0jDoVJfr1tXg7gFJoRKCe4%2BziJzpsHLJxMQzu4ugGDyrVHuryuo4JcN2FaHV6aopqcwSYUbrzx6KbI1SoaPmH%2BtqIOGvEtbma9pNZHiGQzPO6%2FXXi6Ef5REE%2Bhwzx%2BUtCSKzWp9R05f4fj90%2FUNwTgdBOfgo2e5ypAG%2BO5uBn0ZsBrviSijcsdrslfVn5qdkET9LM33iLwffjy4CkoXtK%2Bp8PtZ9dv4cg%2FJwnH%2F%2FQGipIIJvrqWkAklSdrgHIsPuU8jx3Nl%2FuXehTjda6nL3XChSdzTJE6HkGj3u%2BQ%2FtYvo3N%2FMO28nNbijCE8dANI68Yp7oaO5pTOJVVDb1Tw%2B4xeZE6u8%2FrPQ%2BSVW2R0bxFIR%2Bomp7xAEWnhZAVPWJzmCRQuoDIBBA2ALblUp1Zuh45bOLrumkToQvbAOwE9foMP%2FNi8AGOqUByt%2BW6G3T%2FbcVMNuOCtSvR8ASBI0rva6PJ7TYCiNh9mh4p%2FRzGmtgLjN4DOVIvSrrptlWFkyVnALDRUQPzdtmZan3YzzCEP6kG3aaCem%2BA35zfK%2FS1lEMxq66bkcuX%2BmGLkgs2Nnu0SglZR3HgzvkiVfAdmRi9PEno15W57ABY6QR1zzM0e7jadDydBI2syrPFyK9nx2DdqY7%2BMyMkxKc0uaveFEF&X-Amz-Signature=84948886190427f90bf704e62aa2d8f3d0209924a7403a6ab415b0a6c84a9ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTBN2EC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJRqzJ1G0qMPGgAyuQmWTDmTP5uAvxxXeoK%2Bj8CgJexAiEAmGuz1dIYWV8N6oXZUBuEk%2FwSYgxi3OaRc%2FzHaHFjH7IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPUKGgqq1hhDQYY%2ByrcA2D0QZj7ZgasJyVsOZXveB42qVJWG5UMu9tFc14ygxiD%2FlCwl8q3mU4o1IO834QuMQScDtLQ887A%2B71euSgbgM0u7dvztw4Nq7EaCHCfNjzbgszw7v1CCbY3cf27b8tBvUgeIfaLwvDGezmv5JggELCcZKPvuwFuOa9HqRwMIUVJccX%2BrLWs7EiagPzQ4HyIZemIIaRUmNLcSb%2B0yW4w0jDoVJfr1tXg7gFJoRKCe4%2BziJzpsHLJxMQzu4ugGDyrVHuryuo4JcN2FaHV6aopqcwSYUbrzx6KbI1SoaPmH%2BtqIOGvEtbma9pNZHiGQzPO6%2FXXi6Ef5REE%2Bhwzx%2BUtCSKzWp9R05f4fj90%2FUNwTgdBOfgo2e5ypAG%2BO5uBn0ZsBrviSijcsdrslfVn5qdkET9LM33iLwffjy4CkoXtK%2Bp8PtZ9dv4cg%2FJwnH%2F%2FQGipIIJvrqWkAklSdrgHIsPuU8jx3Nl%2FuXehTjda6nL3XChSdzTJE6HkGj3u%2BQ%2FtYvo3N%2FMO28nNbijCE8dANI68Yp7oaO5pTOJVVDb1Tw%2B4xeZE6u8%2FrPQ%2BSVW2R0bxFIR%2Bomp7xAEWnhZAVPWJzmCRQuoDIBBA2ALblUp1Zuh45bOLrumkToQvbAOwE9foMP%2FNi8AGOqUByt%2BW6G3T%2FbcVMNuOCtSvR8ASBI0rva6PJ7TYCiNh9mh4p%2FRzGmtgLjN4DOVIvSrrptlWFkyVnALDRUQPzdtmZan3YzzCEP6kG3aaCem%2BA35zfK%2FS1lEMxq66bkcuX%2BmGLkgs2Nnu0SglZR3HgzvkiVfAdmRi9PEno15W57ABY6QR1zzM0e7jadDydBI2syrPFyK9nx2DdqY7%2BMyMkxKc0uaveFEF&X-Amz-Signature=9f5cfe18985fe49bd312008efef156be626570ab12d9a5c35f160bcc7c7b7e76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTBN2EC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJRqzJ1G0qMPGgAyuQmWTDmTP5uAvxxXeoK%2Bj8CgJexAiEAmGuz1dIYWV8N6oXZUBuEk%2FwSYgxi3OaRc%2FzHaHFjH7IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPUKGgqq1hhDQYY%2ByrcA2D0QZj7ZgasJyVsOZXveB42qVJWG5UMu9tFc14ygxiD%2FlCwl8q3mU4o1IO834QuMQScDtLQ887A%2B71euSgbgM0u7dvztw4Nq7EaCHCfNjzbgszw7v1CCbY3cf27b8tBvUgeIfaLwvDGezmv5JggELCcZKPvuwFuOa9HqRwMIUVJccX%2BrLWs7EiagPzQ4HyIZemIIaRUmNLcSb%2B0yW4w0jDoVJfr1tXg7gFJoRKCe4%2BziJzpsHLJxMQzu4ugGDyrVHuryuo4JcN2FaHV6aopqcwSYUbrzx6KbI1SoaPmH%2BtqIOGvEtbma9pNZHiGQzPO6%2FXXi6Ef5REE%2Bhwzx%2BUtCSKzWp9R05f4fj90%2FUNwTgdBOfgo2e5ypAG%2BO5uBn0ZsBrviSijcsdrslfVn5qdkET9LM33iLwffjy4CkoXtK%2Bp8PtZ9dv4cg%2FJwnH%2F%2FQGipIIJvrqWkAklSdrgHIsPuU8jx3Nl%2FuXehTjda6nL3XChSdzTJE6HkGj3u%2BQ%2FtYvo3N%2FMO28nNbijCE8dANI68Yp7oaO5pTOJVVDb1Tw%2B4xeZE6u8%2FrPQ%2BSVW2R0bxFIR%2Bomp7xAEWnhZAVPWJzmCRQuoDIBBA2ALblUp1Zuh45bOLrumkToQvbAOwE9foMP%2FNi8AGOqUByt%2BW6G3T%2FbcVMNuOCtSvR8ASBI0rva6PJ7TYCiNh9mh4p%2FRzGmtgLjN4DOVIvSrrptlWFkyVnALDRUQPzdtmZan3YzzCEP6kG3aaCem%2BA35zfK%2FS1lEMxq66bkcuX%2BmGLkgs2Nnu0SglZR3HgzvkiVfAdmRi9PEno15W57ABY6QR1zzM0e7jadDydBI2syrPFyK9nx2DdqY7%2BMyMkxKc0uaveFEF&X-Amz-Signature=9bef4f8612199d1d06bfbbab00b16c8cb46417616bd9805f69198c5562f46da1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTBN2EC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJRqzJ1G0qMPGgAyuQmWTDmTP5uAvxxXeoK%2Bj8CgJexAiEAmGuz1dIYWV8N6oXZUBuEk%2FwSYgxi3OaRc%2FzHaHFjH7IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPUKGgqq1hhDQYY%2ByrcA2D0QZj7ZgasJyVsOZXveB42qVJWG5UMu9tFc14ygxiD%2FlCwl8q3mU4o1IO834QuMQScDtLQ887A%2B71euSgbgM0u7dvztw4Nq7EaCHCfNjzbgszw7v1CCbY3cf27b8tBvUgeIfaLwvDGezmv5JggELCcZKPvuwFuOa9HqRwMIUVJccX%2BrLWs7EiagPzQ4HyIZemIIaRUmNLcSb%2B0yW4w0jDoVJfr1tXg7gFJoRKCe4%2BziJzpsHLJxMQzu4ugGDyrVHuryuo4JcN2FaHV6aopqcwSYUbrzx6KbI1SoaPmH%2BtqIOGvEtbma9pNZHiGQzPO6%2FXXi6Ef5REE%2Bhwzx%2BUtCSKzWp9R05f4fj90%2FUNwTgdBOfgo2e5ypAG%2BO5uBn0ZsBrviSijcsdrslfVn5qdkET9LM33iLwffjy4CkoXtK%2Bp8PtZ9dv4cg%2FJwnH%2F%2FQGipIIJvrqWkAklSdrgHIsPuU8jx3Nl%2FuXehTjda6nL3XChSdzTJE6HkGj3u%2BQ%2FtYvo3N%2FMO28nNbijCE8dANI68Yp7oaO5pTOJVVDb1Tw%2B4xeZE6u8%2FrPQ%2BSVW2R0bxFIR%2Bomp7xAEWnhZAVPWJzmCRQuoDIBBA2ALblUp1Zuh45bOLrumkToQvbAOwE9foMP%2FNi8AGOqUByt%2BW6G3T%2FbcVMNuOCtSvR8ASBI0rva6PJ7TYCiNh9mh4p%2FRzGmtgLjN4DOVIvSrrptlWFkyVnALDRUQPzdtmZan3YzzCEP6kG3aaCem%2BA35zfK%2FS1lEMxq66bkcuX%2BmGLkgs2Nnu0SglZR3HgzvkiVfAdmRi9PEno15W57ABY6QR1zzM0e7jadDydBI2syrPFyK9nx2DdqY7%2BMyMkxKc0uaveFEF&X-Amz-Signature=100f2846eba6c25e5315480adebc442341512d9255882d8ba12fd93c3e2e8d36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

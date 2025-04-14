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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP35HTM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBd46D%2BsdQXtb7aatsvehs1bOSvVaSq37u5LRKrR7qCAiBh%2FSSBwq0f2mewijke2gr1R6toYLSHjFpLoIdjM5D8oSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMlSoteEvstBT%2F4ZgTKtwDDp56DaI3wCY%2Fr%2BITxMMvp7Herg9C7iQ2P%2Bn7hxP2MtZR%2F0Ujevvkl9PPErRmVDPV%2FMA1Mnk%2FDX75QgMtbA8KCinDbmgEozaijP4W1yvR8yT%2B61ZJckstj5KDi0x301IlHclzTkgQa5CmVuwRN7KUJlWGjSGL8OokZyVGQ2YwnbGx3Wo1mT2kQh%2BPN8hhZall4gCQq0oI3tgi3zvLewhZSpxGofqpxUEFDN%2FUsnmf3oP6lxDavfrzQ5JLFtjDdKnxbJSS5DPolAwqggozqabiwhwPFbG9KFLitK20uqIseBvBU8xBrhr6%2FMsPxfkJxdAQLNaerR%2By3OjilxWbOsXfjFEJ9vk60rC9dShpP11duCTZdnjISPpwPsJsxG8cyYeDJRUNtXBfAPltkCOWLbphfbCv6k7x1mKLRrSMHPNMzV3mu92bDm%2BixNbdEg7iXTjjPhfK2R%2Ff0wrMEaDBMbuDEo8iWW9pVaXAkSqnFvXMKnno9G51ej5zPr%2Fh367cOOxUqS%2BbFEnRMbyU%2BsuVvJXTgHBQRp0GmnshxxojrwXr3AQqVffAw51DfcbvQIriBcHBFn8CTDiNP1q3Z7wq2PvfxovL5ruTY9H2C39OfCBBwFVGLtfD1%2BCx%2BoPNMpUwnpX1vwY6pgEewiTu2icMoQCK7VTa6TsrmvgoqHlUryFlT1aKpFpNvkIZKa5%2FWNy7hwjoPD898F32EFwpk7VmqrjRGhSQ2Nsc4BOfNNx2RcKpCP%2FtqgNvjFX62NuVQSFtyVx2Nndjh3gAX1RdncGnOc4FfigtdDy3OoFIVTCceQSYc98dmPCtTp6DBNHl3gHU%2FQ1EzmGCNmsGiODImYFDkgyLMZw3n3OPUTNu7I7A&X-Amz-Signature=faa2c2714778ea5a64cd2ce3b64b1036ebb1b510459ad8f286c0fad00582a8e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP35HTM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBd46D%2BsdQXtb7aatsvehs1bOSvVaSq37u5LRKrR7qCAiBh%2FSSBwq0f2mewijke2gr1R6toYLSHjFpLoIdjM5D8oSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMlSoteEvstBT%2F4ZgTKtwDDp56DaI3wCY%2Fr%2BITxMMvp7Herg9C7iQ2P%2Bn7hxP2MtZR%2F0Ujevvkl9PPErRmVDPV%2FMA1Mnk%2FDX75QgMtbA8KCinDbmgEozaijP4W1yvR8yT%2B61ZJckstj5KDi0x301IlHclzTkgQa5CmVuwRN7KUJlWGjSGL8OokZyVGQ2YwnbGx3Wo1mT2kQh%2BPN8hhZall4gCQq0oI3tgi3zvLewhZSpxGofqpxUEFDN%2FUsnmf3oP6lxDavfrzQ5JLFtjDdKnxbJSS5DPolAwqggozqabiwhwPFbG9KFLitK20uqIseBvBU8xBrhr6%2FMsPxfkJxdAQLNaerR%2By3OjilxWbOsXfjFEJ9vk60rC9dShpP11duCTZdnjISPpwPsJsxG8cyYeDJRUNtXBfAPltkCOWLbphfbCv6k7x1mKLRrSMHPNMzV3mu92bDm%2BixNbdEg7iXTjjPhfK2R%2Ff0wrMEaDBMbuDEo8iWW9pVaXAkSqnFvXMKnno9G51ej5zPr%2Fh367cOOxUqS%2BbFEnRMbyU%2BsuVvJXTgHBQRp0GmnshxxojrwXr3AQqVffAw51DfcbvQIriBcHBFn8CTDiNP1q3Z7wq2PvfxovL5ruTY9H2C39OfCBBwFVGLtfD1%2BCx%2BoPNMpUwnpX1vwY6pgEewiTu2icMoQCK7VTa6TsrmvgoqHlUryFlT1aKpFpNvkIZKa5%2FWNy7hwjoPD898F32EFwpk7VmqrjRGhSQ2Nsc4BOfNNx2RcKpCP%2FtqgNvjFX62NuVQSFtyVx2Nndjh3gAX1RdncGnOc4FfigtdDy3OoFIVTCceQSYc98dmPCtTp6DBNHl3gHU%2FQ1EzmGCNmsGiODImYFDkgyLMZw3n3OPUTNu7I7A&X-Amz-Signature=b1458e536d8b6d1168873ab0fab753a633ad219e31b0083525e52b3345424b17&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP35HTM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBd46D%2BsdQXtb7aatsvehs1bOSvVaSq37u5LRKrR7qCAiBh%2FSSBwq0f2mewijke2gr1R6toYLSHjFpLoIdjM5D8oSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMlSoteEvstBT%2F4ZgTKtwDDp56DaI3wCY%2Fr%2BITxMMvp7Herg9C7iQ2P%2Bn7hxP2MtZR%2F0Ujevvkl9PPErRmVDPV%2FMA1Mnk%2FDX75QgMtbA8KCinDbmgEozaijP4W1yvR8yT%2B61ZJckstj5KDi0x301IlHclzTkgQa5CmVuwRN7KUJlWGjSGL8OokZyVGQ2YwnbGx3Wo1mT2kQh%2BPN8hhZall4gCQq0oI3tgi3zvLewhZSpxGofqpxUEFDN%2FUsnmf3oP6lxDavfrzQ5JLFtjDdKnxbJSS5DPolAwqggozqabiwhwPFbG9KFLitK20uqIseBvBU8xBrhr6%2FMsPxfkJxdAQLNaerR%2By3OjilxWbOsXfjFEJ9vk60rC9dShpP11duCTZdnjISPpwPsJsxG8cyYeDJRUNtXBfAPltkCOWLbphfbCv6k7x1mKLRrSMHPNMzV3mu92bDm%2BixNbdEg7iXTjjPhfK2R%2Ff0wrMEaDBMbuDEo8iWW9pVaXAkSqnFvXMKnno9G51ej5zPr%2Fh367cOOxUqS%2BbFEnRMbyU%2BsuVvJXTgHBQRp0GmnshxxojrwXr3AQqVffAw51DfcbvQIriBcHBFn8CTDiNP1q3Z7wq2PvfxovL5ruTY9H2C39OfCBBwFVGLtfD1%2BCx%2BoPNMpUwnpX1vwY6pgEewiTu2icMoQCK7VTa6TsrmvgoqHlUryFlT1aKpFpNvkIZKa5%2FWNy7hwjoPD898F32EFwpk7VmqrjRGhSQ2Nsc4BOfNNx2RcKpCP%2FtqgNvjFX62NuVQSFtyVx2Nndjh3gAX1RdncGnOc4FfigtdDy3OoFIVTCceQSYc98dmPCtTp6DBNHl3gHU%2FQ1EzmGCNmsGiODImYFDkgyLMZw3n3OPUTNu7I7A&X-Amz-Signature=c8f07a4669dcfd9c42cf2e564482aa3c6f827458c6479d0485ab6606c246e404&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP35HTM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBd46D%2BsdQXtb7aatsvehs1bOSvVaSq37u5LRKrR7qCAiBh%2FSSBwq0f2mewijke2gr1R6toYLSHjFpLoIdjM5D8oSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMlSoteEvstBT%2F4ZgTKtwDDp56DaI3wCY%2Fr%2BITxMMvp7Herg9C7iQ2P%2Bn7hxP2MtZR%2F0Ujevvkl9PPErRmVDPV%2FMA1Mnk%2FDX75QgMtbA8KCinDbmgEozaijP4W1yvR8yT%2B61ZJckstj5KDi0x301IlHclzTkgQa5CmVuwRN7KUJlWGjSGL8OokZyVGQ2YwnbGx3Wo1mT2kQh%2BPN8hhZall4gCQq0oI3tgi3zvLewhZSpxGofqpxUEFDN%2FUsnmf3oP6lxDavfrzQ5JLFtjDdKnxbJSS5DPolAwqggozqabiwhwPFbG9KFLitK20uqIseBvBU8xBrhr6%2FMsPxfkJxdAQLNaerR%2By3OjilxWbOsXfjFEJ9vk60rC9dShpP11duCTZdnjISPpwPsJsxG8cyYeDJRUNtXBfAPltkCOWLbphfbCv6k7x1mKLRrSMHPNMzV3mu92bDm%2BixNbdEg7iXTjjPhfK2R%2Ff0wrMEaDBMbuDEo8iWW9pVaXAkSqnFvXMKnno9G51ej5zPr%2Fh367cOOxUqS%2BbFEnRMbyU%2BsuVvJXTgHBQRp0GmnshxxojrwXr3AQqVffAw51DfcbvQIriBcHBFn8CTDiNP1q3Z7wq2PvfxovL5ruTY9H2C39OfCBBwFVGLtfD1%2BCx%2BoPNMpUwnpX1vwY6pgEewiTu2icMoQCK7VTa6TsrmvgoqHlUryFlT1aKpFpNvkIZKa5%2FWNy7hwjoPD898F32EFwpk7VmqrjRGhSQ2Nsc4BOfNNx2RcKpCP%2FtqgNvjFX62NuVQSFtyVx2Nndjh3gAX1RdncGnOc4FfigtdDy3OoFIVTCceQSYc98dmPCtTp6DBNHl3gHU%2FQ1EzmGCNmsGiODImYFDkgyLMZw3n3OPUTNu7I7A&X-Amz-Signature=da32bc0f93ffdb45e1efcd7e531221c3c6c18c9de13039328f1c57babc1a07f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP35HTM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBd46D%2BsdQXtb7aatsvehs1bOSvVaSq37u5LRKrR7qCAiBh%2FSSBwq0f2mewijke2gr1R6toYLSHjFpLoIdjM5D8oSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMlSoteEvstBT%2F4ZgTKtwDDp56DaI3wCY%2Fr%2BITxMMvp7Herg9C7iQ2P%2Bn7hxP2MtZR%2F0Ujevvkl9PPErRmVDPV%2FMA1Mnk%2FDX75QgMtbA8KCinDbmgEozaijP4W1yvR8yT%2B61ZJckstj5KDi0x301IlHclzTkgQa5CmVuwRN7KUJlWGjSGL8OokZyVGQ2YwnbGx3Wo1mT2kQh%2BPN8hhZall4gCQq0oI3tgi3zvLewhZSpxGofqpxUEFDN%2FUsnmf3oP6lxDavfrzQ5JLFtjDdKnxbJSS5DPolAwqggozqabiwhwPFbG9KFLitK20uqIseBvBU8xBrhr6%2FMsPxfkJxdAQLNaerR%2By3OjilxWbOsXfjFEJ9vk60rC9dShpP11duCTZdnjISPpwPsJsxG8cyYeDJRUNtXBfAPltkCOWLbphfbCv6k7x1mKLRrSMHPNMzV3mu92bDm%2BixNbdEg7iXTjjPhfK2R%2Ff0wrMEaDBMbuDEo8iWW9pVaXAkSqnFvXMKnno9G51ej5zPr%2Fh367cOOxUqS%2BbFEnRMbyU%2BsuVvJXTgHBQRp0GmnshxxojrwXr3AQqVffAw51DfcbvQIriBcHBFn8CTDiNP1q3Z7wq2PvfxovL5ruTY9H2C39OfCBBwFVGLtfD1%2BCx%2BoPNMpUwnpX1vwY6pgEewiTu2icMoQCK7VTa6TsrmvgoqHlUryFlT1aKpFpNvkIZKa5%2FWNy7hwjoPD898F32EFwpk7VmqrjRGhSQ2Nsc4BOfNNx2RcKpCP%2FtqgNvjFX62NuVQSFtyVx2Nndjh3gAX1RdncGnOc4FfigtdDy3OoFIVTCceQSYc98dmPCtTp6DBNHl3gHU%2FQ1EzmGCNmsGiODImYFDkgyLMZw3n3OPUTNu7I7A&X-Amz-Signature=8107d32bacf27484391f314fa817497549bab7b1f5cc2cba331e7bca47cfac3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP35HTM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBd46D%2BsdQXtb7aatsvehs1bOSvVaSq37u5LRKrR7qCAiBh%2FSSBwq0f2mewijke2gr1R6toYLSHjFpLoIdjM5D8oSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMlSoteEvstBT%2F4ZgTKtwDDp56DaI3wCY%2Fr%2BITxMMvp7Herg9C7iQ2P%2Bn7hxP2MtZR%2F0Ujevvkl9PPErRmVDPV%2FMA1Mnk%2FDX75QgMtbA8KCinDbmgEozaijP4W1yvR8yT%2B61ZJckstj5KDi0x301IlHclzTkgQa5CmVuwRN7KUJlWGjSGL8OokZyVGQ2YwnbGx3Wo1mT2kQh%2BPN8hhZall4gCQq0oI3tgi3zvLewhZSpxGofqpxUEFDN%2FUsnmf3oP6lxDavfrzQ5JLFtjDdKnxbJSS5DPolAwqggozqabiwhwPFbG9KFLitK20uqIseBvBU8xBrhr6%2FMsPxfkJxdAQLNaerR%2By3OjilxWbOsXfjFEJ9vk60rC9dShpP11duCTZdnjISPpwPsJsxG8cyYeDJRUNtXBfAPltkCOWLbphfbCv6k7x1mKLRrSMHPNMzV3mu92bDm%2BixNbdEg7iXTjjPhfK2R%2Ff0wrMEaDBMbuDEo8iWW9pVaXAkSqnFvXMKnno9G51ej5zPr%2Fh367cOOxUqS%2BbFEnRMbyU%2BsuVvJXTgHBQRp0GmnshxxojrwXr3AQqVffAw51DfcbvQIriBcHBFn8CTDiNP1q3Z7wq2PvfxovL5ruTY9H2C39OfCBBwFVGLtfD1%2BCx%2BoPNMpUwnpX1vwY6pgEewiTu2icMoQCK7VTa6TsrmvgoqHlUryFlT1aKpFpNvkIZKa5%2FWNy7hwjoPD898F32EFwpk7VmqrjRGhSQ2Nsc4BOfNNx2RcKpCP%2FtqgNvjFX62NuVQSFtyVx2Nndjh3gAX1RdncGnOc4FfigtdDy3OoFIVTCceQSYc98dmPCtTp6DBNHl3gHU%2FQ1EzmGCNmsGiODImYFDkgyLMZw3n3OPUTNu7I7A&X-Amz-Signature=35a12ecd30217858dd9fef1e91e5201d712280146678fcf8666914ede0ee295c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP35HTM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBd46D%2BsdQXtb7aatsvehs1bOSvVaSq37u5LRKrR7qCAiBh%2FSSBwq0f2mewijke2gr1R6toYLSHjFpLoIdjM5D8oSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMlSoteEvstBT%2F4ZgTKtwDDp56DaI3wCY%2Fr%2BITxMMvp7Herg9C7iQ2P%2Bn7hxP2MtZR%2F0Ujevvkl9PPErRmVDPV%2FMA1Mnk%2FDX75QgMtbA8KCinDbmgEozaijP4W1yvR8yT%2B61ZJckstj5KDi0x301IlHclzTkgQa5CmVuwRN7KUJlWGjSGL8OokZyVGQ2YwnbGx3Wo1mT2kQh%2BPN8hhZall4gCQq0oI3tgi3zvLewhZSpxGofqpxUEFDN%2FUsnmf3oP6lxDavfrzQ5JLFtjDdKnxbJSS5DPolAwqggozqabiwhwPFbG9KFLitK20uqIseBvBU8xBrhr6%2FMsPxfkJxdAQLNaerR%2By3OjilxWbOsXfjFEJ9vk60rC9dShpP11duCTZdnjISPpwPsJsxG8cyYeDJRUNtXBfAPltkCOWLbphfbCv6k7x1mKLRrSMHPNMzV3mu92bDm%2BixNbdEg7iXTjjPhfK2R%2Ff0wrMEaDBMbuDEo8iWW9pVaXAkSqnFvXMKnno9G51ej5zPr%2Fh367cOOxUqS%2BbFEnRMbyU%2BsuVvJXTgHBQRp0GmnshxxojrwXr3AQqVffAw51DfcbvQIriBcHBFn8CTDiNP1q3Z7wq2PvfxovL5ruTY9H2C39OfCBBwFVGLtfD1%2BCx%2BoPNMpUwnpX1vwY6pgEewiTu2icMoQCK7VTa6TsrmvgoqHlUryFlT1aKpFpNvkIZKa5%2FWNy7hwjoPD898F32EFwpk7VmqrjRGhSQ2Nsc4BOfNNx2RcKpCP%2FtqgNvjFX62NuVQSFtyVx2Nndjh3gAX1RdncGnOc4FfigtdDy3OoFIVTCceQSYc98dmPCtTp6DBNHl3gHU%2FQ1EzmGCNmsGiODImYFDkgyLMZw3n3OPUTNu7I7A&X-Amz-Signature=1bd8315d19215a444dba857e8ee4a092e793a48c66ac8dc62b39d9d468d004dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP35HTM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBd46D%2BsdQXtb7aatsvehs1bOSvVaSq37u5LRKrR7qCAiBh%2FSSBwq0f2mewijke2gr1R6toYLSHjFpLoIdjM5D8oSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMlSoteEvstBT%2F4ZgTKtwDDp56DaI3wCY%2Fr%2BITxMMvp7Herg9C7iQ2P%2Bn7hxP2MtZR%2F0Ujevvkl9PPErRmVDPV%2FMA1Mnk%2FDX75QgMtbA8KCinDbmgEozaijP4W1yvR8yT%2B61ZJckstj5KDi0x301IlHclzTkgQa5CmVuwRN7KUJlWGjSGL8OokZyVGQ2YwnbGx3Wo1mT2kQh%2BPN8hhZall4gCQq0oI3tgi3zvLewhZSpxGofqpxUEFDN%2FUsnmf3oP6lxDavfrzQ5JLFtjDdKnxbJSS5DPolAwqggozqabiwhwPFbG9KFLitK20uqIseBvBU8xBrhr6%2FMsPxfkJxdAQLNaerR%2By3OjilxWbOsXfjFEJ9vk60rC9dShpP11duCTZdnjISPpwPsJsxG8cyYeDJRUNtXBfAPltkCOWLbphfbCv6k7x1mKLRrSMHPNMzV3mu92bDm%2BixNbdEg7iXTjjPhfK2R%2Ff0wrMEaDBMbuDEo8iWW9pVaXAkSqnFvXMKnno9G51ej5zPr%2Fh367cOOxUqS%2BbFEnRMbyU%2BsuVvJXTgHBQRp0GmnshxxojrwXr3AQqVffAw51DfcbvQIriBcHBFn8CTDiNP1q3Z7wq2PvfxovL5ruTY9H2C39OfCBBwFVGLtfD1%2BCx%2BoPNMpUwnpX1vwY6pgEewiTu2icMoQCK7VTa6TsrmvgoqHlUryFlT1aKpFpNvkIZKa5%2FWNy7hwjoPD898F32EFwpk7VmqrjRGhSQ2Nsc4BOfNNx2RcKpCP%2FtqgNvjFX62NuVQSFtyVx2Nndjh3gAX1RdncGnOc4FfigtdDy3OoFIVTCceQSYc98dmPCtTp6DBNHl3gHU%2FQ1EzmGCNmsGiODImYFDkgyLMZw3n3OPUTNu7I7A&X-Amz-Signature=d39f600a996179b2f1a5b06f9d5742522186dee6204ddcf23419a108f7a1b2fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPYFICU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEqmZsvSagmC01KTygRx6tiA8NULOMxfhfFqrWv%2FJOCeAiEA5INKRPgceFGGofukUHPG3YXR05b%2FugKZ5q3yII4Idq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDK0Aw09pYY8%2Bi%2BgVjCrcA9SdUNGLBxdXzu9kem%2FpieMlxUhpwAZxYcOSxJk%2FdVu9v9pF36oMuBq8YOBVOMHrwr5Mm8tT2St3juLI4cRd8aPTEpIFJvNLcD1TfHPvDapVsEdxt5LAp8FIgpEgtD5srcjgX%2BaIst4VM3INKsPDF6GyZKcuPUdRgLVBKl%2B1mGjoRb0Y%2FkOKtn1bAE1qFdY0%2FUzHLEgxXUdwBDduMNCPm%2FZkEIHEvJQmeqVdqxApLtEzIDtMndew9BqLDFGDFstZRI%2FkOEIix2aSMkHDc%2BYpeIDzNkslApCpefkUcOD%2FKeTDLJsD%2B5VgqZUmKsoaWpu2RG5ovDV%2FBSD5pIwIVItfje%2FRKnKMBsAtAitowZOWq5h3hcmjaQNQgkGKbehORyNPL1SIwAJvqsqluWwljZQbtyaCP%2Fsdd2dRqzQzmexvt5wPhBL08r%2FdA1h1uleQiAPU%2FcAdNaw8fXQ0PGORAI3muYzLcsHG3c19GWKrO%2FZ73lBHM4Un8hnr0NiAahNyZVmFjUGEHqduh85dOhh2Gb%2BbyHsNpbonq9rn77%2F%2BmcvOwTIj9C7ZR2NtqXkuXvEfSZg5vRK2Wjx9a9hIvOK4ZymMlZoYT98bBbUJDAHg6gHqY0lfIi9Vq4m2qrmxxDD%2FMJrrh8QGOqUBtctHciEb8aCy12EsocUuGkYdNCWE0ebAB59q8D76c3ps%2BOuV32GzaQazMWjivuu%2Bzg5Iy70vyf4Umm9wXns1wD5UQyTeIDoLe3WWHXVqGqt37YkaNiw8EORjX3Rd62HWALchAKSB78UXuPt4huKyGddX%2B%2BI0BDCHYsJs%2Bt49XXt9nKBJRBOrcRf%2Fr9oGMCJAL1P4U9JzU5AbNLu5GZ5Ppk1v0aot&X-Amz-Signature=8eeb1074d481dbdf7c88e3ce2fdc0c4c232dad4d441921321af041af5b509692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPYFICU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEqmZsvSagmC01KTygRx6tiA8NULOMxfhfFqrWv%2FJOCeAiEA5INKRPgceFGGofukUHPG3YXR05b%2FugKZ5q3yII4Idq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDK0Aw09pYY8%2Bi%2BgVjCrcA9SdUNGLBxdXzu9kem%2FpieMlxUhpwAZxYcOSxJk%2FdVu9v9pF36oMuBq8YOBVOMHrwr5Mm8tT2St3juLI4cRd8aPTEpIFJvNLcD1TfHPvDapVsEdxt5LAp8FIgpEgtD5srcjgX%2BaIst4VM3INKsPDF6GyZKcuPUdRgLVBKl%2B1mGjoRb0Y%2FkOKtn1bAE1qFdY0%2FUzHLEgxXUdwBDduMNCPm%2FZkEIHEvJQmeqVdqxApLtEzIDtMndew9BqLDFGDFstZRI%2FkOEIix2aSMkHDc%2BYpeIDzNkslApCpefkUcOD%2FKeTDLJsD%2B5VgqZUmKsoaWpu2RG5ovDV%2FBSD5pIwIVItfje%2FRKnKMBsAtAitowZOWq5h3hcmjaQNQgkGKbehORyNPL1SIwAJvqsqluWwljZQbtyaCP%2Fsdd2dRqzQzmexvt5wPhBL08r%2FdA1h1uleQiAPU%2FcAdNaw8fXQ0PGORAI3muYzLcsHG3c19GWKrO%2FZ73lBHM4Un8hnr0NiAahNyZVmFjUGEHqduh85dOhh2Gb%2BbyHsNpbonq9rn77%2F%2BmcvOwTIj9C7ZR2NtqXkuXvEfSZg5vRK2Wjx9a9hIvOK4ZymMlZoYT98bBbUJDAHg6gHqY0lfIi9Vq4m2qrmxxDD%2FMJrrh8QGOqUBtctHciEb8aCy12EsocUuGkYdNCWE0ebAB59q8D76c3ps%2BOuV32GzaQazMWjivuu%2Bzg5Iy70vyf4Umm9wXns1wD5UQyTeIDoLe3WWHXVqGqt37YkaNiw8EORjX3Rd62HWALchAKSB78UXuPt4huKyGddX%2B%2BI0BDCHYsJs%2Bt49XXt9nKBJRBOrcRf%2Fr9oGMCJAL1P4U9JzU5AbNLu5GZ5Ppk1v0aot&X-Amz-Signature=2c6fb717572f96fac63d4b261bdbe8d98b5eefb7861c22cb6ebc48a0bdad2c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPYFICU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEqmZsvSagmC01KTygRx6tiA8NULOMxfhfFqrWv%2FJOCeAiEA5INKRPgceFGGofukUHPG3YXR05b%2FugKZ5q3yII4Idq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDK0Aw09pYY8%2Bi%2BgVjCrcA9SdUNGLBxdXzu9kem%2FpieMlxUhpwAZxYcOSxJk%2FdVu9v9pF36oMuBq8YOBVOMHrwr5Mm8tT2St3juLI4cRd8aPTEpIFJvNLcD1TfHPvDapVsEdxt5LAp8FIgpEgtD5srcjgX%2BaIst4VM3INKsPDF6GyZKcuPUdRgLVBKl%2B1mGjoRb0Y%2FkOKtn1bAE1qFdY0%2FUzHLEgxXUdwBDduMNCPm%2FZkEIHEvJQmeqVdqxApLtEzIDtMndew9BqLDFGDFstZRI%2FkOEIix2aSMkHDc%2BYpeIDzNkslApCpefkUcOD%2FKeTDLJsD%2B5VgqZUmKsoaWpu2RG5ovDV%2FBSD5pIwIVItfje%2FRKnKMBsAtAitowZOWq5h3hcmjaQNQgkGKbehORyNPL1SIwAJvqsqluWwljZQbtyaCP%2Fsdd2dRqzQzmexvt5wPhBL08r%2FdA1h1uleQiAPU%2FcAdNaw8fXQ0PGORAI3muYzLcsHG3c19GWKrO%2FZ73lBHM4Un8hnr0NiAahNyZVmFjUGEHqduh85dOhh2Gb%2BbyHsNpbonq9rn77%2F%2BmcvOwTIj9C7ZR2NtqXkuXvEfSZg5vRK2Wjx9a9hIvOK4ZymMlZoYT98bBbUJDAHg6gHqY0lfIi9Vq4m2qrmxxDD%2FMJrrh8QGOqUBtctHciEb8aCy12EsocUuGkYdNCWE0ebAB59q8D76c3ps%2BOuV32GzaQazMWjivuu%2Bzg5Iy70vyf4Umm9wXns1wD5UQyTeIDoLe3WWHXVqGqt37YkaNiw8EORjX3Rd62HWALchAKSB78UXuPt4huKyGddX%2B%2BI0BDCHYsJs%2Bt49XXt9nKBJRBOrcRf%2Fr9oGMCJAL1P4U9JzU5AbNLu5GZ5Ppk1v0aot&X-Amz-Signature=a9b8e5fdd0babccdf1b600f3b0fb4e1ad433f27766ea5a063bbc79307e27efef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPYFICU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEqmZsvSagmC01KTygRx6tiA8NULOMxfhfFqrWv%2FJOCeAiEA5INKRPgceFGGofukUHPG3YXR05b%2FugKZ5q3yII4Idq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDK0Aw09pYY8%2Bi%2BgVjCrcA9SdUNGLBxdXzu9kem%2FpieMlxUhpwAZxYcOSxJk%2FdVu9v9pF36oMuBq8YOBVOMHrwr5Mm8tT2St3juLI4cRd8aPTEpIFJvNLcD1TfHPvDapVsEdxt5LAp8FIgpEgtD5srcjgX%2BaIst4VM3INKsPDF6GyZKcuPUdRgLVBKl%2B1mGjoRb0Y%2FkOKtn1bAE1qFdY0%2FUzHLEgxXUdwBDduMNCPm%2FZkEIHEvJQmeqVdqxApLtEzIDtMndew9BqLDFGDFstZRI%2FkOEIix2aSMkHDc%2BYpeIDzNkslApCpefkUcOD%2FKeTDLJsD%2B5VgqZUmKsoaWpu2RG5ovDV%2FBSD5pIwIVItfje%2FRKnKMBsAtAitowZOWq5h3hcmjaQNQgkGKbehORyNPL1SIwAJvqsqluWwljZQbtyaCP%2Fsdd2dRqzQzmexvt5wPhBL08r%2FdA1h1uleQiAPU%2FcAdNaw8fXQ0PGORAI3muYzLcsHG3c19GWKrO%2FZ73lBHM4Un8hnr0NiAahNyZVmFjUGEHqduh85dOhh2Gb%2BbyHsNpbonq9rn77%2F%2BmcvOwTIj9C7ZR2NtqXkuXvEfSZg5vRK2Wjx9a9hIvOK4ZymMlZoYT98bBbUJDAHg6gHqY0lfIi9Vq4m2qrmxxDD%2FMJrrh8QGOqUBtctHciEb8aCy12EsocUuGkYdNCWE0ebAB59q8D76c3ps%2BOuV32GzaQazMWjivuu%2Bzg5Iy70vyf4Umm9wXns1wD5UQyTeIDoLe3WWHXVqGqt37YkaNiw8EORjX3Rd62HWALchAKSB78UXuPt4huKyGddX%2B%2BI0BDCHYsJs%2Bt49XXt9nKBJRBOrcRf%2Fr9oGMCJAL1P4U9JzU5AbNLu5GZ5Ppk1v0aot&X-Amz-Signature=ab7e5f0c3fa4ada60d713ae3ae0e03fdad5d1f0d9cb9c2e616df3a9a99cb93be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPYFICU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEqmZsvSagmC01KTygRx6tiA8NULOMxfhfFqrWv%2FJOCeAiEA5INKRPgceFGGofukUHPG3YXR05b%2FugKZ5q3yII4Idq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDK0Aw09pYY8%2Bi%2BgVjCrcA9SdUNGLBxdXzu9kem%2FpieMlxUhpwAZxYcOSxJk%2FdVu9v9pF36oMuBq8YOBVOMHrwr5Mm8tT2St3juLI4cRd8aPTEpIFJvNLcD1TfHPvDapVsEdxt5LAp8FIgpEgtD5srcjgX%2BaIst4VM3INKsPDF6GyZKcuPUdRgLVBKl%2B1mGjoRb0Y%2FkOKtn1bAE1qFdY0%2FUzHLEgxXUdwBDduMNCPm%2FZkEIHEvJQmeqVdqxApLtEzIDtMndew9BqLDFGDFstZRI%2FkOEIix2aSMkHDc%2BYpeIDzNkslApCpefkUcOD%2FKeTDLJsD%2B5VgqZUmKsoaWpu2RG5ovDV%2FBSD5pIwIVItfje%2FRKnKMBsAtAitowZOWq5h3hcmjaQNQgkGKbehORyNPL1SIwAJvqsqluWwljZQbtyaCP%2Fsdd2dRqzQzmexvt5wPhBL08r%2FdA1h1uleQiAPU%2FcAdNaw8fXQ0PGORAI3muYzLcsHG3c19GWKrO%2FZ73lBHM4Un8hnr0NiAahNyZVmFjUGEHqduh85dOhh2Gb%2BbyHsNpbonq9rn77%2F%2BmcvOwTIj9C7ZR2NtqXkuXvEfSZg5vRK2Wjx9a9hIvOK4ZymMlZoYT98bBbUJDAHg6gHqY0lfIi9Vq4m2qrmxxDD%2FMJrrh8QGOqUBtctHciEb8aCy12EsocUuGkYdNCWE0ebAB59q8D76c3ps%2BOuV32GzaQazMWjivuu%2Bzg5Iy70vyf4Umm9wXns1wD5UQyTeIDoLe3WWHXVqGqt37YkaNiw8EORjX3Rd62HWALchAKSB78UXuPt4huKyGddX%2B%2BI0BDCHYsJs%2Bt49XXt9nKBJRBOrcRf%2Fr9oGMCJAL1P4U9JzU5AbNLu5GZ5Ppk1v0aot&X-Amz-Signature=e42f87f5b7660c0f2feb2aa05bd7ecd1ed3a2e313372d307269c9ee102406a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPYFICU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEqmZsvSagmC01KTygRx6tiA8NULOMxfhfFqrWv%2FJOCeAiEA5INKRPgceFGGofukUHPG3YXR05b%2FugKZ5q3yII4Idq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDK0Aw09pYY8%2Bi%2BgVjCrcA9SdUNGLBxdXzu9kem%2FpieMlxUhpwAZxYcOSxJk%2FdVu9v9pF36oMuBq8YOBVOMHrwr5Mm8tT2St3juLI4cRd8aPTEpIFJvNLcD1TfHPvDapVsEdxt5LAp8FIgpEgtD5srcjgX%2BaIst4VM3INKsPDF6GyZKcuPUdRgLVBKl%2B1mGjoRb0Y%2FkOKtn1bAE1qFdY0%2FUzHLEgxXUdwBDduMNCPm%2FZkEIHEvJQmeqVdqxApLtEzIDtMndew9BqLDFGDFstZRI%2FkOEIix2aSMkHDc%2BYpeIDzNkslApCpefkUcOD%2FKeTDLJsD%2B5VgqZUmKsoaWpu2RG5ovDV%2FBSD5pIwIVItfje%2FRKnKMBsAtAitowZOWq5h3hcmjaQNQgkGKbehORyNPL1SIwAJvqsqluWwljZQbtyaCP%2Fsdd2dRqzQzmexvt5wPhBL08r%2FdA1h1uleQiAPU%2FcAdNaw8fXQ0PGORAI3muYzLcsHG3c19GWKrO%2FZ73lBHM4Un8hnr0NiAahNyZVmFjUGEHqduh85dOhh2Gb%2BbyHsNpbonq9rn77%2F%2BmcvOwTIj9C7ZR2NtqXkuXvEfSZg5vRK2Wjx9a9hIvOK4ZymMlZoYT98bBbUJDAHg6gHqY0lfIi9Vq4m2qrmxxDD%2FMJrrh8QGOqUBtctHciEb8aCy12EsocUuGkYdNCWE0ebAB59q8D76c3ps%2BOuV32GzaQazMWjivuu%2Bzg5Iy70vyf4Umm9wXns1wD5UQyTeIDoLe3WWHXVqGqt37YkaNiw8EORjX3Rd62HWALchAKSB78UXuPt4huKyGddX%2B%2BI0BDCHYsJs%2Bt49XXt9nKBJRBOrcRf%2Fr9oGMCJAL1P4U9JzU5AbNLu5GZ5Ppk1v0aot&X-Amz-Signature=ff7fac4032b7dcac31c4dd44360c366504c5ece9393f07a2c42669bcf521bf1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPYFICU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEqmZsvSagmC01KTygRx6tiA8NULOMxfhfFqrWv%2FJOCeAiEA5INKRPgceFGGofukUHPG3YXR05b%2FugKZ5q3yII4Idq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDK0Aw09pYY8%2Bi%2BgVjCrcA9SdUNGLBxdXzu9kem%2FpieMlxUhpwAZxYcOSxJk%2FdVu9v9pF36oMuBq8YOBVOMHrwr5Mm8tT2St3juLI4cRd8aPTEpIFJvNLcD1TfHPvDapVsEdxt5LAp8FIgpEgtD5srcjgX%2BaIst4VM3INKsPDF6GyZKcuPUdRgLVBKl%2B1mGjoRb0Y%2FkOKtn1bAE1qFdY0%2FUzHLEgxXUdwBDduMNCPm%2FZkEIHEvJQmeqVdqxApLtEzIDtMndew9BqLDFGDFstZRI%2FkOEIix2aSMkHDc%2BYpeIDzNkslApCpefkUcOD%2FKeTDLJsD%2B5VgqZUmKsoaWpu2RG5ovDV%2FBSD5pIwIVItfje%2FRKnKMBsAtAitowZOWq5h3hcmjaQNQgkGKbehORyNPL1SIwAJvqsqluWwljZQbtyaCP%2Fsdd2dRqzQzmexvt5wPhBL08r%2FdA1h1uleQiAPU%2FcAdNaw8fXQ0PGORAI3muYzLcsHG3c19GWKrO%2FZ73lBHM4Un8hnr0NiAahNyZVmFjUGEHqduh85dOhh2Gb%2BbyHsNpbonq9rn77%2F%2BmcvOwTIj9C7ZR2NtqXkuXvEfSZg5vRK2Wjx9a9hIvOK4ZymMlZoYT98bBbUJDAHg6gHqY0lfIi9Vq4m2qrmxxDD%2FMJrrh8QGOqUBtctHciEb8aCy12EsocUuGkYdNCWE0ebAB59q8D76c3ps%2BOuV32GzaQazMWjivuu%2Bzg5Iy70vyf4Umm9wXns1wD5UQyTeIDoLe3WWHXVqGqt37YkaNiw8EORjX3Rd62HWALchAKSB78UXuPt4huKyGddX%2B%2BI0BDCHYsJs%2Bt49XXt9nKBJRBOrcRf%2Fr9oGMCJAL1P4U9JzU5AbNLu5GZ5Ppk1v0aot&X-Amz-Signature=b0f6225ce2dab33f076ae1b4dad06181242fcda3e760bb35d625521be3033380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPYFICU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEqmZsvSagmC01KTygRx6tiA8NULOMxfhfFqrWv%2FJOCeAiEA5INKRPgceFGGofukUHPG3YXR05b%2FugKZ5q3yII4Idq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDK0Aw09pYY8%2Bi%2BgVjCrcA9SdUNGLBxdXzu9kem%2FpieMlxUhpwAZxYcOSxJk%2FdVu9v9pF36oMuBq8YOBVOMHrwr5Mm8tT2St3juLI4cRd8aPTEpIFJvNLcD1TfHPvDapVsEdxt5LAp8FIgpEgtD5srcjgX%2BaIst4VM3INKsPDF6GyZKcuPUdRgLVBKl%2B1mGjoRb0Y%2FkOKtn1bAE1qFdY0%2FUzHLEgxXUdwBDduMNCPm%2FZkEIHEvJQmeqVdqxApLtEzIDtMndew9BqLDFGDFstZRI%2FkOEIix2aSMkHDc%2BYpeIDzNkslApCpefkUcOD%2FKeTDLJsD%2B5VgqZUmKsoaWpu2RG5ovDV%2FBSD5pIwIVItfje%2FRKnKMBsAtAitowZOWq5h3hcmjaQNQgkGKbehORyNPL1SIwAJvqsqluWwljZQbtyaCP%2Fsdd2dRqzQzmexvt5wPhBL08r%2FdA1h1uleQiAPU%2FcAdNaw8fXQ0PGORAI3muYzLcsHG3c19GWKrO%2FZ73lBHM4Un8hnr0NiAahNyZVmFjUGEHqduh85dOhh2Gb%2BbyHsNpbonq9rn77%2F%2BmcvOwTIj9C7ZR2NtqXkuXvEfSZg5vRK2Wjx9a9hIvOK4ZymMlZoYT98bBbUJDAHg6gHqY0lfIi9Vq4m2qrmxxDD%2FMJrrh8QGOqUBtctHciEb8aCy12EsocUuGkYdNCWE0ebAB59q8D76c3ps%2BOuV32GzaQazMWjivuu%2Bzg5Iy70vyf4Umm9wXns1wD5UQyTeIDoLe3WWHXVqGqt37YkaNiw8EORjX3Rd62HWALchAKSB78UXuPt4huKyGddX%2B%2BI0BDCHYsJs%2Bt49XXt9nKBJRBOrcRf%2Fr9oGMCJAL1P4U9JzU5AbNLu5GZ5Ppk1v0aot&X-Amz-Signature=218a8e69ac513381c58170fa16ac13532dfa4ffec585728af8b34dc3222dd333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

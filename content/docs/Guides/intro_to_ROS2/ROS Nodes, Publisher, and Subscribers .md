---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEOCVAM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBOYs8Mj14vvfwsF51fmOYzKzh1WSSvEpipNoOkGBkwIgWG%2FjDIg0p%2FGdOWURKyYVj8%2FCBtj8bGokC4oJF4qJOlYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDL7qjOgT5St7qgVircA11Udc0JYPvnB2auBpe5XrGGv9Z63nzPGF0RRd6gxBTEFMapgvXXQcHJ5NIosrhpCW2mz1KFaAhm2adwuLVxWAMgCFyJjPnflN02UqEBD6orNnmZOGKR%2Fiy%2B4uEIqPWfby6NxtSs00V4QToqhG5F8iD0xy44THW4qTs%2BAfVZb0ujgsU97DYBrisjbl5AfZ9TiWynpCLg8i7x1gxCSd47Y5Hkk%2FC6cx1PrKgvfL4S32rPonp6hExo1Zz3R2JQHI%2FMI%2FGKGyeXV0pgdeXNbau3obSwO%2FqSnHLqFSHTGd0a%2FoLPB52sHraMnF1W2h4A7U3A3yinIEGFDeeLBgn8FKcx5zaCvRW%2FpMaitql2lOBYmRVhGAhairS9EMzCgNkRj7tO4QEf0nt8%2FhaKu%2Bh0xgLy5VW7EdlVIyqTZBGbhIoDC4cT%2FZHqRdY4Zuk7kDjrhb0DOJZhFDMLJ37GClqrf22O9WlavDmA4HTm6PpnnIFZ2yGd8mjDtszU2LPO4dCjWscwho6jszkWbhO2VoDTNtgWi1%2FlLNk%2F7GoLyUS0Q0HkHadOiJXBqD1h4ASz1ecK9N4myMcTVKbkKvk7CO1q4Ipyn%2BEBp0AnLae2WsPY2YgRCDWkdPfKg14ccMEuT4tQMOe648QGOqUBuWUGx%2BxgDK%2Bv%2F55DMFwfbOHJElE0u8CvIWWQiZ6OhQEEakYwFIAMz6darVvwPZFcDoU50qw1LmlOujM%2B4mEnRqW1fphpCWZF3RbIsTJviuvoNLkQzDsEAeAa0L2sho%2BbFqIaacHW0VXsDhe%2Fxa24SUVs%2Fre9Te61a%2BZm02EXVgDt3IpEtf7Ic1IrWo%2BFSqdOGsd4zf0DFr6BtjvMy0VWyXMIktlR&X-Amz-Signature=d627cd3cb18e825c95100580381f4478b325015ef4619297c00989d2f7ecdbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEOCVAM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBOYs8Mj14vvfwsF51fmOYzKzh1WSSvEpipNoOkGBkwIgWG%2FjDIg0p%2FGdOWURKyYVj8%2FCBtj8bGokC4oJF4qJOlYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDL7qjOgT5St7qgVircA11Udc0JYPvnB2auBpe5XrGGv9Z63nzPGF0RRd6gxBTEFMapgvXXQcHJ5NIosrhpCW2mz1KFaAhm2adwuLVxWAMgCFyJjPnflN02UqEBD6orNnmZOGKR%2Fiy%2B4uEIqPWfby6NxtSs00V4QToqhG5F8iD0xy44THW4qTs%2BAfVZb0ujgsU97DYBrisjbl5AfZ9TiWynpCLg8i7x1gxCSd47Y5Hkk%2FC6cx1PrKgvfL4S32rPonp6hExo1Zz3R2JQHI%2FMI%2FGKGyeXV0pgdeXNbau3obSwO%2FqSnHLqFSHTGd0a%2FoLPB52sHraMnF1W2h4A7U3A3yinIEGFDeeLBgn8FKcx5zaCvRW%2FpMaitql2lOBYmRVhGAhairS9EMzCgNkRj7tO4QEf0nt8%2FhaKu%2Bh0xgLy5VW7EdlVIyqTZBGbhIoDC4cT%2FZHqRdY4Zuk7kDjrhb0DOJZhFDMLJ37GClqrf22O9WlavDmA4HTm6PpnnIFZ2yGd8mjDtszU2LPO4dCjWscwho6jszkWbhO2VoDTNtgWi1%2FlLNk%2F7GoLyUS0Q0HkHadOiJXBqD1h4ASz1ecK9N4myMcTVKbkKvk7CO1q4Ipyn%2BEBp0AnLae2WsPY2YgRCDWkdPfKg14ccMEuT4tQMOe648QGOqUBuWUGx%2BxgDK%2Bv%2F55DMFwfbOHJElE0u8CvIWWQiZ6OhQEEakYwFIAMz6darVvwPZFcDoU50qw1LmlOujM%2B4mEnRqW1fphpCWZF3RbIsTJviuvoNLkQzDsEAeAa0L2sho%2BbFqIaacHW0VXsDhe%2Fxa24SUVs%2Fre9Te61a%2BZm02EXVgDt3IpEtf7Ic1IrWo%2BFSqdOGsd4zf0DFr6BtjvMy0VWyXMIktlR&X-Amz-Signature=01620370b8703ad7c50122e0c9d7bb430c588b9b2682d7de04ec101041bbb5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEOCVAM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBOYs8Mj14vvfwsF51fmOYzKzh1WSSvEpipNoOkGBkwIgWG%2FjDIg0p%2FGdOWURKyYVj8%2FCBtj8bGokC4oJF4qJOlYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDL7qjOgT5St7qgVircA11Udc0JYPvnB2auBpe5XrGGv9Z63nzPGF0RRd6gxBTEFMapgvXXQcHJ5NIosrhpCW2mz1KFaAhm2adwuLVxWAMgCFyJjPnflN02UqEBD6orNnmZOGKR%2Fiy%2B4uEIqPWfby6NxtSs00V4QToqhG5F8iD0xy44THW4qTs%2BAfVZb0ujgsU97DYBrisjbl5AfZ9TiWynpCLg8i7x1gxCSd47Y5Hkk%2FC6cx1PrKgvfL4S32rPonp6hExo1Zz3R2JQHI%2FMI%2FGKGyeXV0pgdeXNbau3obSwO%2FqSnHLqFSHTGd0a%2FoLPB52sHraMnF1W2h4A7U3A3yinIEGFDeeLBgn8FKcx5zaCvRW%2FpMaitql2lOBYmRVhGAhairS9EMzCgNkRj7tO4QEf0nt8%2FhaKu%2Bh0xgLy5VW7EdlVIyqTZBGbhIoDC4cT%2FZHqRdY4Zuk7kDjrhb0DOJZhFDMLJ37GClqrf22O9WlavDmA4HTm6PpnnIFZ2yGd8mjDtszU2LPO4dCjWscwho6jszkWbhO2VoDTNtgWi1%2FlLNk%2F7GoLyUS0Q0HkHadOiJXBqD1h4ASz1ecK9N4myMcTVKbkKvk7CO1q4Ipyn%2BEBp0AnLae2WsPY2YgRCDWkdPfKg14ccMEuT4tQMOe648QGOqUBuWUGx%2BxgDK%2Bv%2F55DMFwfbOHJElE0u8CvIWWQiZ6OhQEEakYwFIAMz6darVvwPZFcDoU50qw1LmlOujM%2B4mEnRqW1fphpCWZF3RbIsTJviuvoNLkQzDsEAeAa0L2sho%2BbFqIaacHW0VXsDhe%2Fxa24SUVs%2Fre9Te61a%2BZm02EXVgDt3IpEtf7Ic1IrWo%2BFSqdOGsd4zf0DFr6BtjvMy0VWyXMIktlR&X-Amz-Signature=b4549753d6c626ccf921cc0f9738ce42277d18f90529e179f6e7007eb45e2818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEOCVAM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBOYs8Mj14vvfwsF51fmOYzKzh1WSSvEpipNoOkGBkwIgWG%2FjDIg0p%2FGdOWURKyYVj8%2FCBtj8bGokC4oJF4qJOlYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDL7qjOgT5St7qgVircA11Udc0JYPvnB2auBpe5XrGGv9Z63nzPGF0RRd6gxBTEFMapgvXXQcHJ5NIosrhpCW2mz1KFaAhm2adwuLVxWAMgCFyJjPnflN02UqEBD6orNnmZOGKR%2Fiy%2B4uEIqPWfby6NxtSs00V4QToqhG5F8iD0xy44THW4qTs%2BAfVZb0ujgsU97DYBrisjbl5AfZ9TiWynpCLg8i7x1gxCSd47Y5Hkk%2FC6cx1PrKgvfL4S32rPonp6hExo1Zz3R2JQHI%2FMI%2FGKGyeXV0pgdeXNbau3obSwO%2FqSnHLqFSHTGd0a%2FoLPB52sHraMnF1W2h4A7U3A3yinIEGFDeeLBgn8FKcx5zaCvRW%2FpMaitql2lOBYmRVhGAhairS9EMzCgNkRj7tO4QEf0nt8%2FhaKu%2Bh0xgLy5VW7EdlVIyqTZBGbhIoDC4cT%2FZHqRdY4Zuk7kDjrhb0DOJZhFDMLJ37GClqrf22O9WlavDmA4HTm6PpnnIFZ2yGd8mjDtszU2LPO4dCjWscwho6jszkWbhO2VoDTNtgWi1%2FlLNk%2F7GoLyUS0Q0HkHadOiJXBqD1h4ASz1ecK9N4myMcTVKbkKvk7CO1q4Ipyn%2BEBp0AnLae2WsPY2YgRCDWkdPfKg14ccMEuT4tQMOe648QGOqUBuWUGx%2BxgDK%2Bv%2F55DMFwfbOHJElE0u8CvIWWQiZ6OhQEEakYwFIAMz6darVvwPZFcDoU50qw1LmlOujM%2B4mEnRqW1fphpCWZF3RbIsTJviuvoNLkQzDsEAeAa0L2sho%2BbFqIaacHW0VXsDhe%2Fxa24SUVs%2Fre9Te61a%2BZm02EXVgDt3IpEtf7Ic1IrWo%2BFSqdOGsd4zf0DFr6BtjvMy0VWyXMIktlR&X-Amz-Signature=c0c3448294f20e336ea1b3579774dd53ed6144bfe1264f07ffea8032836750e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEOCVAM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBOYs8Mj14vvfwsF51fmOYzKzh1WSSvEpipNoOkGBkwIgWG%2FjDIg0p%2FGdOWURKyYVj8%2FCBtj8bGokC4oJF4qJOlYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDL7qjOgT5St7qgVircA11Udc0JYPvnB2auBpe5XrGGv9Z63nzPGF0RRd6gxBTEFMapgvXXQcHJ5NIosrhpCW2mz1KFaAhm2adwuLVxWAMgCFyJjPnflN02UqEBD6orNnmZOGKR%2Fiy%2B4uEIqPWfby6NxtSs00V4QToqhG5F8iD0xy44THW4qTs%2BAfVZb0ujgsU97DYBrisjbl5AfZ9TiWynpCLg8i7x1gxCSd47Y5Hkk%2FC6cx1PrKgvfL4S32rPonp6hExo1Zz3R2JQHI%2FMI%2FGKGyeXV0pgdeXNbau3obSwO%2FqSnHLqFSHTGd0a%2FoLPB52sHraMnF1W2h4A7U3A3yinIEGFDeeLBgn8FKcx5zaCvRW%2FpMaitql2lOBYmRVhGAhairS9EMzCgNkRj7tO4QEf0nt8%2FhaKu%2Bh0xgLy5VW7EdlVIyqTZBGbhIoDC4cT%2FZHqRdY4Zuk7kDjrhb0DOJZhFDMLJ37GClqrf22O9WlavDmA4HTm6PpnnIFZ2yGd8mjDtszU2LPO4dCjWscwho6jszkWbhO2VoDTNtgWi1%2FlLNk%2F7GoLyUS0Q0HkHadOiJXBqD1h4ASz1ecK9N4myMcTVKbkKvk7CO1q4Ipyn%2BEBp0AnLae2WsPY2YgRCDWkdPfKg14ccMEuT4tQMOe648QGOqUBuWUGx%2BxgDK%2Bv%2F55DMFwfbOHJElE0u8CvIWWQiZ6OhQEEakYwFIAMz6darVvwPZFcDoU50qw1LmlOujM%2B4mEnRqW1fphpCWZF3RbIsTJviuvoNLkQzDsEAeAa0L2sho%2BbFqIaacHW0VXsDhe%2Fxa24SUVs%2Fre9Te61a%2BZm02EXVgDt3IpEtf7Ic1IrWo%2BFSqdOGsd4zf0DFr6BtjvMy0VWyXMIktlR&X-Amz-Signature=b45de6a718977d5cc93afdabfaabe82128056f0448f496cab93ae01f0c726ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEOCVAM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBOYs8Mj14vvfwsF51fmOYzKzh1WSSvEpipNoOkGBkwIgWG%2FjDIg0p%2FGdOWURKyYVj8%2FCBtj8bGokC4oJF4qJOlYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDL7qjOgT5St7qgVircA11Udc0JYPvnB2auBpe5XrGGv9Z63nzPGF0RRd6gxBTEFMapgvXXQcHJ5NIosrhpCW2mz1KFaAhm2adwuLVxWAMgCFyJjPnflN02UqEBD6orNnmZOGKR%2Fiy%2B4uEIqPWfby6NxtSs00V4QToqhG5F8iD0xy44THW4qTs%2BAfVZb0ujgsU97DYBrisjbl5AfZ9TiWynpCLg8i7x1gxCSd47Y5Hkk%2FC6cx1PrKgvfL4S32rPonp6hExo1Zz3R2JQHI%2FMI%2FGKGyeXV0pgdeXNbau3obSwO%2FqSnHLqFSHTGd0a%2FoLPB52sHraMnF1W2h4A7U3A3yinIEGFDeeLBgn8FKcx5zaCvRW%2FpMaitql2lOBYmRVhGAhairS9EMzCgNkRj7tO4QEf0nt8%2FhaKu%2Bh0xgLy5VW7EdlVIyqTZBGbhIoDC4cT%2FZHqRdY4Zuk7kDjrhb0DOJZhFDMLJ37GClqrf22O9WlavDmA4HTm6PpnnIFZ2yGd8mjDtszU2LPO4dCjWscwho6jszkWbhO2VoDTNtgWi1%2FlLNk%2F7GoLyUS0Q0HkHadOiJXBqD1h4ASz1ecK9N4myMcTVKbkKvk7CO1q4Ipyn%2BEBp0AnLae2WsPY2YgRCDWkdPfKg14ccMEuT4tQMOe648QGOqUBuWUGx%2BxgDK%2Bv%2F55DMFwfbOHJElE0u8CvIWWQiZ6OhQEEakYwFIAMz6darVvwPZFcDoU50qw1LmlOujM%2B4mEnRqW1fphpCWZF3RbIsTJviuvoNLkQzDsEAeAa0L2sho%2BbFqIaacHW0VXsDhe%2Fxa24SUVs%2Fre9Te61a%2BZm02EXVgDt3IpEtf7Ic1IrWo%2BFSqdOGsd4zf0DFr6BtjvMy0VWyXMIktlR&X-Amz-Signature=d3be548f2ed2ff77c6bd70d60eaba8760c5a2d6223194a28c9c17815e79f3fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEOCVAM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBOYs8Mj14vvfwsF51fmOYzKzh1WSSvEpipNoOkGBkwIgWG%2FjDIg0p%2FGdOWURKyYVj8%2FCBtj8bGokC4oJF4qJOlYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDL7qjOgT5St7qgVircA11Udc0JYPvnB2auBpe5XrGGv9Z63nzPGF0RRd6gxBTEFMapgvXXQcHJ5NIosrhpCW2mz1KFaAhm2adwuLVxWAMgCFyJjPnflN02UqEBD6orNnmZOGKR%2Fiy%2B4uEIqPWfby6NxtSs00V4QToqhG5F8iD0xy44THW4qTs%2BAfVZb0ujgsU97DYBrisjbl5AfZ9TiWynpCLg8i7x1gxCSd47Y5Hkk%2FC6cx1PrKgvfL4S32rPonp6hExo1Zz3R2JQHI%2FMI%2FGKGyeXV0pgdeXNbau3obSwO%2FqSnHLqFSHTGd0a%2FoLPB52sHraMnF1W2h4A7U3A3yinIEGFDeeLBgn8FKcx5zaCvRW%2FpMaitql2lOBYmRVhGAhairS9EMzCgNkRj7tO4QEf0nt8%2FhaKu%2Bh0xgLy5VW7EdlVIyqTZBGbhIoDC4cT%2FZHqRdY4Zuk7kDjrhb0DOJZhFDMLJ37GClqrf22O9WlavDmA4HTm6PpnnIFZ2yGd8mjDtszU2LPO4dCjWscwho6jszkWbhO2VoDTNtgWi1%2FlLNk%2F7GoLyUS0Q0HkHadOiJXBqD1h4ASz1ecK9N4myMcTVKbkKvk7CO1q4Ipyn%2BEBp0AnLae2WsPY2YgRCDWkdPfKg14ccMEuT4tQMOe648QGOqUBuWUGx%2BxgDK%2Bv%2F55DMFwfbOHJElE0u8CvIWWQiZ6OhQEEakYwFIAMz6darVvwPZFcDoU50qw1LmlOujM%2B4mEnRqW1fphpCWZF3RbIsTJviuvoNLkQzDsEAeAa0L2sho%2BbFqIaacHW0VXsDhe%2Fxa24SUVs%2Fre9Te61a%2BZm02EXVgDt3IpEtf7Ic1IrWo%2BFSqdOGsd4zf0DFr6BtjvMy0VWyXMIktlR&X-Amz-Signature=52677c46738172f02bbe3385ccc8758c051d0f6d6a8d279062cc1bef936131f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEOCVAM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBOYs8Mj14vvfwsF51fmOYzKzh1WSSvEpipNoOkGBkwIgWG%2FjDIg0p%2FGdOWURKyYVj8%2FCBtj8bGokC4oJF4qJOlYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDL7qjOgT5St7qgVircA11Udc0JYPvnB2auBpe5XrGGv9Z63nzPGF0RRd6gxBTEFMapgvXXQcHJ5NIosrhpCW2mz1KFaAhm2adwuLVxWAMgCFyJjPnflN02UqEBD6orNnmZOGKR%2Fiy%2B4uEIqPWfby6NxtSs00V4QToqhG5F8iD0xy44THW4qTs%2BAfVZb0ujgsU97DYBrisjbl5AfZ9TiWynpCLg8i7x1gxCSd47Y5Hkk%2FC6cx1PrKgvfL4S32rPonp6hExo1Zz3R2JQHI%2FMI%2FGKGyeXV0pgdeXNbau3obSwO%2FqSnHLqFSHTGd0a%2FoLPB52sHraMnF1W2h4A7U3A3yinIEGFDeeLBgn8FKcx5zaCvRW%2FpMaitql2lOBYmRVhGAhairS9EMzCgNkRj7tO4QEf0nt8%2FhaKu%2Bh0xgLy5VW7EdlVIyqTZBGbhIoDC4cT%2FZHqRdY4Zuk7kDjrhb0DOJZhFDMLJ37GClqrf22O9WlavDmA4HTm6PpnnIFZ2yGd8mjDtszU2LPO4dCjWscwho6jszkWbhO2VoDTNtgWi1%2FlLNk%2F7GoLyUS0Q0HkHadOiJXBqD1h4ASz1ecK9N4myMcTVKbkKvk7CO1q4Ipyn%2BEBp0AnLae2WsPY2YgRCDWkdPfKg14ccMEuT4tQMOe648QGOqUBuWUGx%2BxgDK%2Bv%2F55DMFwfbOHJElE0u8CvIWWQiZ6OhQEEakYwFIAMz6darVvwPZFcDoU50qw1LmlOujM%2B4mEnRqW1fphpCWZF3RbIsTJviuvoNLkQzDsEAeAa0L2sho%2BbFqIaacHW0VXsDhe%2Fxa24SUVs%2Fre9Te61a%2BZm02EXVgDt3IpEtf7Ic1IrWo%2BFSqdOGsd4zf0DFr6BtjvMy0VWyXMIktlR&X-Amz-Signature=dd822233591441361d386f82a905bfd7d5da8f1b31aa4d3ea09df5d3b93d30b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

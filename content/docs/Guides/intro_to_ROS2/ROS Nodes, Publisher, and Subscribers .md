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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A63RJQT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR21Nu9NV35nb0%2FCq2MOg4hd7uwxXSs4RIqO7Niu6N6AiAD4VrJuPADIZZinPSONlB3I23PzFGlumGfy16Ymth64Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM4f6tX7xP%2B4vIKt9tKtwD1Dh6uxgbpsx4sG7xxwQSe4NsYDMsR23%2BjJrMFTyOgOD5oGLfadq0DRS4epCH3%2FPUSVsKI9dbSpcr7aAmNkvmrbTUBJOaIqxh1%2FAgkLR6Tx8UzWXVQipQ7fNtyZuO5R49BR7%2FZuq%2Bf6OXZ66TEqm%2BoXMqfOGcx1vuS3DnnAJGSw7H%2BtRfT00MqtfbCvOCtDlDZ8HUeKBQtDy5sYnJ6TfhMp%2FpvAynx7tPfnnO9wOLe3Cojq8S5SlwtvA1zEUPHaPKeU%2BNiU0%2BXZ8Cc2bFMv0ZMpESeHRxKyqlCb7QPtkLkcP%2FJqqAV9UPqgfzUWJC%2Fo1kMeLNZba2Ee08rwwVA12jtG984XuUIGXH9TQXYZZLYjIk346tc4%2BXCnUAlDezY0Zh39ISDUBnHybXTA32QPlDj5fh3PvSU%2Bkak1TGeoco8RMmLx4tt%2FpN7MB54U8TQOYzODNW8sg5EPDbs6npy7wqxkiBc%2BJ08t%2Bmr0J%2BQNLvkYf6xAGVn5MMeurwXfspK2tb6dIt%2By4Scs98IFvs3Cqo1jFv%2BKeLFmFgTRII7VcFDfhV%2F6ptXErPBetzSCkL6cuIui9%2B4x3RahWDtgAxwyUAsoRsc0H5xyohANZOkL9t8ZhFzuiyDyOufvwVcB8w1eX%2FwQY6pgERlR9pnB%2FBkxssk7Jw%2FPyJB96pmHOcwL%2FJuoTCnM9UvVcHysZ1eAMApgE%2BnEKFCK%2BM3HXsC9IbeliygA%2F89dW211svWILaVwv3%2FaDvRF4QYS%2F8I3El7KcM51N4Wzn%2BNKTCQdZBAfu8XKSOghvDc83lFItUs%2BF38O2m%2BpngAYAADR3tDqKPkiGngPgCwlq8vHewvGM%2FkSyR%2FsN68czeZqSt%2FKMkJI2E&X-Amz-Signature=d58b996886843d155d5a9e6aea469d52f9149a6482331fe06f4da835fc67cd5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A63RJQT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR21Nu9NV35nb0%2FCq2MOg4hd7uwxXSs4RIqO7Niu6N6AiAD4VrJuPADIZZinPSONlB3I23PzFGlumGfy16Ymth64Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM4f6tX7xP%2B4vIKt9tKtwD1Dh6uxgbpsx4sG7xxwQSe4NsYDMsR23%2BjJrMFTyOgOD5oGLfadq0DRS4epCH3%2FPUSVsKI9dbSpcr7aAmNkvmrbTUBJOaIqxh1%2FAgkLR6Tx8UzWXVQipQ7fNtyZuO5R49BR7%2FZuq%2Bf6OXZ66TEqm%2BoXMqfOGcx1vuS3DnnAJGSw7H%2BtRfT00MqtfbCvOCtDlDZ8HUeKBQtDy5sYnJ6TfhMp%2FpvAynx7tPfnnO9wOLe3Cojq8S5SlwtvA1zEUPHaPKeU%2BNiU0%2BXZ8Cc2bFMv0ZMpESeHRxKyqlCb7QPtkLkcP%2FJqqAV9UPqgfzUWJC%2Fo1kMeLNZba2Ee08rwwVA12jtG984XuUIGXH9TQXYZZLYjIk346tc4%2BXCnUAlDezY0Zh39ISDUBnHybXTA32QPlDj5fh3PvSU%2Bkak1TGeoco8RMmLx4tt%2FpN7MB54U8TQOYzODNW8sg5EPDbs6npy7wqxkiBc%2BJ08t%2Bmr0J%2BQNLvkYf6xAGVn5MMeurwXfspK2tb6dIt%2By4Scs98IFvs3Cqo1jFv%2BKeLFmFgTRII7VcFDfhV%2F6ptXErPBetzSCkL6cuIui9%2B4x3RahWDtgAxwyUAsoRsc0H5xyohANZOkL9t8ZhFzuiyDyOufvwVcB8w1eX%2FwQY6pgERlR9pnB%2FBkxssk7Jw%2FPyJB96pmHOcwL%2FJuoTCnM9UvVcHysZ1eAMApgE%2BnEKFCK%2BM3HXsC9IbeliygA%2F89dW211svWILaVwv3%2FaDvRF4QYS%2F8I3El7KcM51N4Wzn%2BNKTCQdZBAfu8XKSOghvDc83lFItUs%2BF38O2m%2BpngAYAADR3tDqKPkiGngPgCwlq8vHewvGM%2FkSyR%2FsN68czeZqSt%2FKMkJI2E&X-Amz-Signature=500b43181af4e10188f6d3bbc6fb41dd8f767eee47a1145d8a8a1366799a54f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A63RJQT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR21Nu9NV35nb0%2FCq2MOg4hd7uwxXSs4RIqO7Niu6N6AiAD4VrJuPADIZZinPSONlB3I23PzFGlumGfy16Ymth64Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM4f6tX7xP%2B4vIKt9tKtwD1Dh6uxgbpsx4sG7xxwQSe4NsYDMsR23%2BjJrMFTyOgOD5oGLfadq0DRS4epCH3%2FPUSVsKI9dbSpcr7aAmNkvmrbTUBJOaIqxh1%2FAgkLR6Tx8UzWXVQipQ7fNtyZuO5R49BR7%2FZuq%2Bf6OXZ66TEqm%2BoXMqfOGcx1vuS3DnnAJGSw7H%2BtRfT00MqtfbCvOCtDlDZ8HUeKBQtDy5sYnJ6TfhMp%2FpvAynx7tPfnnO9wOLe3Cojq8S5SlwtvA1zEUPHaPKeU%2BNiU0%2BXZ8Cc2bFMv0ZMpESeHRxKyqlCb7QPtkLkcP%2FJqqAV9UPqgfzUWJC%2Fo1kMeLNZba2Ee08rwwVA12jtG984XuUIGXH9TQXYZZLYjIk346tc4%2BXCnUAlDezY0Zh39ISDUBnHybXTA32QPlDj5fh3PvSU%2Bkak1TGeoco8RMmLx4tt%2FpN7MB54U8TQOYzODNW8sg5EPDbs6npy7wqxkiBc%2BJ08t%2Bmr0J%2BQNLvkYf6xAGVn5MMeurwXfspK2tb6dIt%2By4Scs98IFvs3Cqo1jFv%2BKeLFmFgTRII7VcFDfhV%2F6ptXErPBetzSCkL6cuIui9%2B4x3RahWDtgAxwyUAsoRsc0H5xyohANZOkL9t8ZhFzuiyDyOufvwVcB8w1eX%2FwQY6pgERlR9pnB%2FBkxssk7Jw%2FPyJB96pmHOcwL%2FJuoTCnM9UvVcHysZ1eAMApgE%2BnEKFCK%2BM3HXsC9IbeliygA%2F89dW211svWILaVwv3%2FaDvRF4QYS%2F8I3El7KcM51N4Wzn%2BNKTCQdZBAfu8XKSOghvDc83lFItUs%2BF38O2m%2BpngAYAADR3tDqKPkiGngPgCwlq8vHewvGM%2FkSyR%2FsN68czeZqSt%2FKMkJI2E&X-Amz-Signature=6f3e5cea5c43b2131f9734cd9e19c230041ff7e33fb73116238b7c58ed735256&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A63RJQT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR21Nu9NV35nb0%2FCq2MOg4hd7uwxXSs4RIqO7Niu6N6AiAD4VrJuPADIZZinPSONlB3I23PzFGlumGfy16Ymth64Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM4f6tX7xP%2B4vIKt9tKtwD1Dh6uxgbpsx4sG7xxwQSe4NsYDMsR23%2BjJrMFTyOgOD5oGLfadq0DRS4epCH3%2FPUSVsKI9dbSpcr7aAmNkvmrbTUBJOaIqxh1%2FAgkLR6Tx8UzWXVQipQ7fNtyZuO5R49BR7%2FZuq%2Bf6OXZ66TEqm%2BoXMqfOGcx1vuS3DnnAJGSw7H%2BtRfT00MqtfbCvOCtDlDZ8HUeKBQtDy5sYnJ6TfhMp%2FpvAynx7tPfnnO9wOLe3Cojq8S5SlwtvA1zEUPHaPKeU%2BNiU0%2BXZ8Cc2bFMv0ZMpESeHRxKyqlCb7QPtkLkcP%2FJqqAV9UPqgfzUWJC%2Fo1kMeLNZba2Ee08rwwVA12jtG984XuUIGXH9TQXYZZLYjIk346tc4%2BXCnUAlDezY0Zh39ISDUBnHybXTA32QPlDj5fh3PvSU%2Bkak1TGeoco8RMmLx4tt%2FpN7MB54U8TQOYzODNW8sg5EPDbs6npy7wqxkiBc%2BJ08t%2Bmr0J%2BQNLvkYf6xAGVn5MMeurwXfspK2tb6dIt%2By4Scs98IFvs3Cqo1jFv%2BKeLFmFgTRII7VcFDfhV%2F6ptXErPBetzSCkL6cuIui9%2B4x3RahWDtgAxwyUAsoRsc0H5xyohANZOkL9t8ZhFzuiyDyOufvwVcB8w1eX%2FwQY6pgERlR9pnB%2FBkxssk7Jw%2FPyJB96pmHOcwL%2FJuoTCnM9UvVcHysZ1eAMApgE%2BnEKFCK%2BM3HXsC9IbeliygA%2F89dW211svWILaVwv3%2FaDvRF4QYS%2F8I3El7KcM51N4Wzn%2BNKTCQdZBAfu8XKSOghvDc83lFItUs%2BF38O2m%2BpngAYAADR3tDqKPkiGngPgCwlq8vHewvGM%2FkSyR%2FsN68czeZqSt%2FKMkJI2E&X-Amz-Signature=185952c3c816812a83e99cc627717718961a182ab493d62c1d37731ff27e9398&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A63RJQT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR21Nu9NV35nb0%2FCq2MOg4hd7uwxXSs4RIqO7Niu6N6AiAD4VrJuPADIZZinPSONlB3I23PzFGlumGfy16Ymth64Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM4f6tX7xP%2B4vIKt9tKtwD1Dh6uxgbpsx4sG7xxwQSe4NsYDMsR23%2BjJrMFTyOgOD5oGLfadq0DRS4epCH3%2FPUSVsKI9dbSpcr7aAmNkvmrbTUBJOaIqxh1%2FAgkLR6Tx8UzWXVQipQ7fNtyZuO5R49BR7%2FZuq%2Bf6OXZ66TEqm%2BoXMqfOGcx1vuS3DnnAJGSw7H%2BtRfT00MqtfbCvOCtDlDZ8HUeKBQtDy5sYnJ6TfhMp%2FpvAynx7tPfnnO9wOLe3Cojq8S5SlwtvA1zEUPHaPKeU%2BNiU0%2BXZ8Cc2bFMv0ZMpESeHRxKyqlCb7QPtkLkcP%2FJqqAV9UPqgfzUWJC%2Fo1kMeLNZba2Ee08rwwVA12jtG984XuUIGXH9TQXYZZLYjIk346tc4%2BXCnUAlDezY0Zh39ISDUBnHybXTA32QPlDj5fh3PvSU%2Bkak1TGeoco8RMmLx4tt%2FpN7MB54U8TQOYzODNW8sg5EPDbs6npy7wqxkiBc%2BJ08t%2Bmr0J%2BQNLvkYf6xAGVn5MMeurwXfspK2tb6dIt%2By4Scs98IFvs3Cqo1jFv%2BKeLFmFgTRII7VcFDfhV%2F6ptXErPBetzSCkL6cuIui9%2B4x3RahWDtgAxwyUAsoRsc0H5xyohANZOkL9t8ZhFzuiyDyOufvwVcB8w1eX%2FwQY6pgERlR9pnB%2FBkxssk7Jw%2FPyJB96pmHOcwL%2FJuoTCnM9UvVcHysZ1eAMApgE%2BnEKFCK%2BM3HXsC9IbeliygA%2F89dW211svWILaVwv3%2FaDvRF4QYS%2F8I3El7KcM51N4Wzn%2BNKTCQdZBAfu8XKSOghvDc83lFItUs%2BF38O2m%2BpngAYAADR3tDqKPkiGngPgCwlq8vHewvGM%2FkSyR%2FsN68czeZqSt%2FKMkJI2E&X-Amz-Signature=f6df4fd19f1016700640dc80de329bbeb0ee383270779665b9c42bf544ceb4a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A63RJQT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR21Nu9NV35nb0%2FCq2MOg4hd7uwxXSs4RIqO7Niu6N6AiAD4VrJuPADIZZinPSONlB3I23PzFGlumGfy16Ymth64Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM4f6tX7xP%2B4vIKt9tKtwD1Dh6uxgbpsx4sG7xxwQSe4NsYDMsR23%2BjJrMFTyOgOD5oGLfadq0DRS4epCH3%2FPUSVsKI9dbSpcr7aAmNkvmrbTUBJOaIqxh1%2FAgkLR6Tx8UzWXVQipQ7fNtyZuO5R49BR7%2FZuq%2Bf6OXZ66TEqm%2BoXMqfOGcx1vuS3DnnAJGSw7H%2BtRfT00MqtfbCvOCtDlDZ8HUeKBQtDy5sYnJ6TfhMp%2FpvAynx7tPfnnO9wOLe3Cojq8S5SlwtvA1zEUPHaPKeU%2BNiU0%2BXZ8Cc2bFMv0ZMpESeHRxKyqlCb7QPtkLkcP%2FJqqAV9UPqgfzUWJC%2Fo1kMeLNZba2Ee08rwwVA12jtG984XuUIGXH9TQXYZZLYjIk346tc4%2BXCnUAlDezY0Zh39ISDUBnHybXTA32QPlDj5fh3PvSU%2Bkak1TGeoco8RMmLx4tt%2FpN7MB54U8TQOYzODNW8sg5EPDbs6npy7wqxkiBc%2BJ08t%2Bmr0J%2BQNLvkYf6xAGVn5MMeurwXfspK2tb6dIt%2By4Scs98IFvs3Cqo1jFv%2BKeLFmFgTRII7VcFDfhV%2F6ptXErPBetzSCkL6cuIui9%2B4x3RahWDtgAxwyUAsoRsc0H5xyohANZOkL9t8ZhFzuiyDyOufvwVcB8w1eX%2FwQY6pgERlR9pnB%2FBkxssk7Jw%2FPyJB96pmHOcwL%2FJuoTCnM9UvVcHysZ1eAMApgE%2BnEKFCK%2BM3HXsC9IbeliygA%2F89dW211svWILaVwv3%2FaDvRF4QYS%2F8I3El7KcM51N4Wzn%2BNKTCQdZBAfu8XKSOghvDc83lFItUs%2BF38O2m%2BpngAYAADR3tDqKPkiGngPgCwlq8vHewvGM%2FkSyR%2FsN68czeZqSt%2FKMkJI2E&X-Amz-Signature=beed241a73249dc245d1d22e6960a9895afe60825bbf7d8404bf5d4208418df4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A63RJQT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR21Nu9NV35nb0%2FCq2MOg4hd7uwxXSs4RIqO7Niu6N6AiAD4VrJuPADIZZinPSONlB3I23PzFGlumGfy16Ymth64Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM4f6tX7xP%2B4vIKt9tKtwD1Dh6uxgbpsx4sG7xxwQSe4NsYDMsR23%2BjJrMFTyOgOD5oGLfadq0DRS4epCH3%2FPUSVsKI9dbSpcr7aAmNkvmrbTUBJOaIqxh1%2FAgkLR6Tx8UzWXVQipQ7fNtyZuO5R49BR7%2FZuq%2Bf6OXZ66TEqm%2BoXMqfOGcx1vuS3DnnAJGSw7H%2BtRfT00MqtfbCvOCtDlDZ8HUeKBQtDy5sYnJ6TfhMp%2FpvAynx7tPfnnO9wOLe3Cojq8S5SlwtvA1zEUPHaPKeU%2BNiU0%2BXZ8Cc2bFMv0ZMpESeHRxKyqlCb7QPtkLkcP%2FJqqAV9UPqgfzUWJC%2Fo1kMeLNZba2Ee08rwwVA12jtG984XuUIGXH9TQXYZZLYjIk346tc4%2BXCnUAlDezY0Zh39ISDUBnHybXTA32QPlDj5fh3PvSU%2Bkak1TGeoco8RMmLx4tt%2FpN7MB54U8TQOYzODNW8sg5EPDbs6npy7wqxkiBc%2BJ08t%2Bmr0J%2BQNLvkYf6xAGVn5MMeurwXfspK2tb6dIt%2By4Scs98IFvs3Cqo1jFv%2BKeLFmFgTRII7VcFDfhV%2F6ptXErPBetzSCkL6cuIui9%2B4x3RahWDtgAxwyUAsoRsc0H5xyohANZOkL9t8ZhFzuiyDyOufvwVcB8w1eX%2FwQY6pgERlR9pnB%2FBkxssk7Jw%2FPyJB96pmHOcwL%2FJuoTCnM9UvVcHysZ1eAMApgE%2BnEKFCK%2BM3HXsC9IbeliygA%2F89dW211svWILaVwv3%2FaDvRF4QYS%2F8I3El7KcM51N4Wzn%2BNKTCQdZBAfu8XKSOghvDc83lFItUs%2BF38O2m%2BpngAYAADR3tDqKPkiGngPgCwlq8vHewvGM%2FkSyR%2FsN68czeZqSt%2FKMkJI2E&X-Amz-Signature=56fb501261e37197702f5c8b1972bed40c77661e8ec60ecfa7963aba579ceab3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A63RJQT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR21Nu9NV35nb0%2FCq2MOg4hd7uwxXSs4RIqO7Niu6N6AiAD4VrJuPADIZZinPSONlB3I23PzFGlumGfy16Ymth64Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM4f6tX7xP%2B4vIKt9tKtwD1Dh6uxgbpsx4sG7xxwQSe4NsYDMsR23%2BjJrMFTyOgOD5oGLfadq0DRS4epCH3%2FPUSVsKI9dbSpcr7aAmNkvmrbTUBJOaIqxh1%2FAgkLR6Tx8UzWXVQipQ7fNtyZuO5R49BR7%2FZuq%2Bf6OXZ66TEqm%2BoXMqfOGcx1vuS3DnnAJGSw7H%2BtRfT00MqtfbCvOCtDlDZ8HUeKBQtDy5sYnJ6TfhMp%2FpvAynx7tPfnnO9wOLe3Cojq8S5SlwtvA1zEUPHaPKeU%2BNiU0%2BXZ8Cc2bFMv0ZMpESeHRxKyqlCb7QPtkLkcP%2FJqqAV9UPqgfzUWJC%2Fo1kMeLNZba2Ee08rwwVA12jtG984XuUIGXH9TQXYZZLYjIk346tc4%2BXCnUAlDezY0Zh39ISDUBnHybXTA32QPlDj5fh3PvSU%2Bkak1TGeoco8RMmLx4tt%2FpN7MB54U8TQOYzODNW8sg5EPDbs6npy7wqxkiBc%2BJ08t%2Bmr0J%2BQNLvkYf6xAGVn5MMeurwXfspK2tb6dIt%2By4Scs98IFvs3Cqo1jFv%2BKeLFmFgTRII7VcFDfhV%2F6ptXErPBetzSCkL6cuIui9%2B4x3RahWDtgAxwyUAsoRsc0H5xyohANZOkL9t8ZhFzuiyDyOufvwVcB8w1eX%2FwQY6pgERlR9pnB%2FBkxssk7Jw%2FPyJB96pmHOcwL%2FJuoTCnM9UvVcHysZ1eAMApgE%2BnEKFCK%2BM3HXsC9IbeliygA%2F89dW211svWILaVwv3%2FaDvRF4QYS%2F8I3El7KcM51N4Wzn%2BNKTCQdZBAfu8XKSOghvDc83lFItUs%2BF38O2m%2BpngAYAADR3tDqKPkiGngPgCwlq8vHewvGM%2FkSyR%2FsN68czeZqSt%2FKMkJI2E&X-Amz-Signature=ba66e1d0711c6eb43bf726c7c0dbd71149e975e2bfb1b956dc8e29b4f214e08d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

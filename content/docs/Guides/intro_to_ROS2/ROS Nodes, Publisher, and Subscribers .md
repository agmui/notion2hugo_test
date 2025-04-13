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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZLNOVN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1GUDTKhGee2Ux9a%2FjeLx%2FQij5rX8JelMPwTiP0MTuwQIgM%2BqgpdoTVfhy4GAPsM7Resxg8Qij%2BFRhXintbJxS1V0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fg3Flk%2FNPw0ceaCyrcA6dHnX1S%2B7fUFEKfk2LWb9R2oX%2FuTLvVTqk29JIFb0UDRxneDwOakEO45RTeXnjvREzYuTQtMBfHDP37GIkVDtZkmqZCbVoaQf1fIF7vQr8dsXe83SndrkJFrqQ65I7l2g8EZLsOGkWfkoqCHbLNMFug03V17G44csFOBdmv1D%2Fq8ijrdnMQ7yP8LVGiFD92hvaww3nmISAMsdmsA0ihth2Yd7tqB8eMwtSd4UuXHfnPHtsGbpAMRkUO%2FHFYAvkZlajMVa1SDOOGjPYl8cN2%2FvKVjbT10LljhyuDjufM20LQ0mtm9yL7vxmxdAkyO68%2BVi9%2FqRz55vViD%2F4YNRATXqLQUQTTBBXr3yI8RwdcpOv7PlKlOeGB%2F5cFiSlwn9Mc31lhfUr4GyxuXcG%2FModYLnWrsUxcfWqEY1kcviepRJr7f1ELapqL3sh2Pn%2F9AImJc5seZlJEVANoURXo6YrCXSaW8%2BtyVdZgY00SQItI2tachR%2Ftx0odtOI1FlgQGCQ3wRsr0cW6w5YuXpC%2FGe%2BUcFdEywhbVea0U0ZXE4m1VJwdQWYMzkca%2BL6NXjdG8t41nryJjXMwOY3VhYxE7nuLI%2FyojYy8%2Fy0PG24uHP4XiJalify3%2FWX3lDUEKvWNMN%2B97r8GOqUBSKfeG1xGMVUM03SmuE9jWd1NgzVE6DM9WtG8T%2FiGy14bgQtS3G4GS68OWRBq5PUwhU5Fgw16NCnwiYo4Sl4ncWmJS9Lf4wSq9mZtqIXTFk1x4BiRCTJe58DQl6RGboVJsSxVMdVzkUgJyoZ58%2FS7RPIGUL%2BNtRJ%2BtTSSz%2FPEWMyPcc2vlHGQQl4kRXAw7hLbV6WlSelKH0GwYaVE9ik53kSeEnUC&X-Amz-Signature=174735b1d8d6f8fc1b9bcaf8b0d1056e3426ebb59d22ef5d39d449236050cf9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZLNOVN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1GUDTKhGee2Ux9a%2FjeLx%2FQij5rX8JelMPwTiP0MTuwQIgM%2BqgpdoTVfhy4GAPsM7Resxg8Qij%2BFRhXintbJxS1V0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fg3Flk%2FNPw0ceaCyrcA6dHnX1S%2B7fUFEKfk2LWb9R2oX%2FuTLvVTqk29JIFb0UDRxneDwOakEO45RTeXnjvREzYuTQtMBfHDP37GIkVDtZkmqZCbVoaQf1fIF7vQr8dsXe83SndrkJFrqQ65I7l2g8EZLsOGkWfkoqCHbLNMFug03V17G44csFOBdmv1D%2Fq8ijrdnMQ7yP8LVGiFD92hvaww3nmISAMsdmsA0ihth2Yd7tqB8eMwtSd4UuXHfnPHtsGbpAMRkUO%2FHFYAvkZlajMVa1SDOOGjPYl8cN2%2FvKVjbT10LljhyuDjufM20LQ0mtm9yL7vxmxdAkyO68%2BVi9%2FqRz55vViD%2F4YNRATXqLQUQTTBBXr3yI8RwdcpOv7PlKlOeGB%2F5cFiSlwn9Mc31lhfUr4GyxuXcG%2FModYLnWrsUxcfWqEY1kcviepRJr7f1ELapqL3sh2Pn%2F9AImJc5seZlJEVANoURXo6YrCXSaW8%2BtyVdZgY00SQItI2tachR%2Ftx0odtOI1FlgQGCQ3wRsr0cW6w5YuXpC%2FGe%2BUcFdEywhbVea0U0ZXE4m1VJwdQWYMzkca%2BL6NXjdG8t41nryJjXMwOY3VhYxE7nuLI%2FyojYy8%2Fy0PG24uHP4XiJalify3%2FWX3lDUEKvWNMN%2B97r8GOqUBSKfeG1xGMVUM03SmuE9jWd1NgzVE6DM9WtG8T%2FiGy14bgQtS3G4GS68OWRBq5PUwhU5Fgw16NCnwiYo4Sl4ncWmJS9Lf4wSq9mZtqIXTFk1x4BiRCTJe58DQl6RGboVJsSxVMdVzkUgJyoZ58%2FS7RPIGUL%2BNtRJ%2BtTSSz%2FPEWMyPcc2vlHGQQl4kRXAw7hLbV6WlSelKH0GwYaVE9ik53kSeEnUC&X-Amz-Signature=730511070eede09f7676052da41ca29c84959d9c34c3d6d6b35e22981bd5ea99&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZLNOVN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1GUDTKhGee2Ux9a%2FjeLx%2FQij5rX8JelMPwTiP0MTuwQIgM%2BqgpdoTVfhy4GAPsM7Resxg8Qij%2BFRhXintbJxS1V0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fg3Flk%2FNPw0ceaCyrcA6dHnX1S%2B7fUFEKfk2LWb9R2oX%2FuTLvVTqk29JIFb0UDRxneDwOakEO45RTeXnjvREzYuTQtMBfHDP37GIkVDtZkmqZCbVoaQf1fIF7vQr8dsXe83SndrkJFrqQ65I7l2g8EZLsOGkWfkoqCHbLNMFug03V17G44csFOBdmv1D%2Fq8ijrdnMQ7yP8LVGiFD92hvaww3nmISAMsdmsA0ihth2Yd7tqB8eMwtSd4UuXHfnPHtsGbpAMRkUO%2FHFYAvkZlajMVa1SDOOGjPYl8cN2%2FvKVjbT10LljhyuDjufM20LQ0mtm9yL7vxmxdAkyO68%2BVi9%2FqRz55vViD%2F4YNRATXqLQUQTTBBXr3yI8RwdcpOv7PlKlOeGB%2F5cFiSlwn9Mc31lhfUr4GyxuXcG%2FModYLnWrsUxcfWqEY1kcviepRJr7f1ELapqL3sh2Pn%2F9AImJc5seZlJEVANoURXo6YrCXSaW8%2BtyVdZgY00SQItI2tachR%2Ftx0odtOI1FlgQGCQ3wRsr0cW6w5YuXpC%2FGe%2BUcFdEywhbVea0U0ZXE4m1VJwdQWYMzkca%2BL6NXjdG8t41nryJjXMwOY3VhYxE7nuLI%2FyojYy8%2Fy0PG24uHP4XiJalify3%2FWX3lDUEKvWNMN%2B97r8GOqUBSKfeG1xGMVUM03SmuE9jWd1NgzVE6DM9WtG8T%2FiGy14bgQtS3G4GS68OWRBq5PUwhU5Fgw16NCnwiYo4Sl4ncWmJS9Lf4wSq9mZtqIXTFk1x4BiRCTJe58DQl6RGboVJsSxVMdVzkUgJyoZ58%2FS7RPIGUL%2BNtRJ%2BtTSSz%2FPEWMyPcc2vlHGQQl4kRXAw7hLbV6WlSelKH0GwYaVE9ik53kSeEnUC&X-Amz-Signature=8a9ceb41b8cbb8fd8522cf9e12ceb3f352ad0cfe5b2b8d7d2fed08b78b443bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZLNOVN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1GUDTKhGee2Ux9a%2FjeLx%2FQij5rX8JelMPwTiP0MTuwQIgM%2BqgpdoTVfhy4GAPsM7Resxg8Qij%2BFRhXintbJxS1V0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fg3Flk%2FNPw0ceaCyrcA6dHnX1S%2B7fUFEKfk2LWb9R2oX%2FuTLvVTqk29JIFb0UDRxneDwOakEO45RTeXnjvREzYuTQtMBfHDP37GIkVDtZkmqZCbVoaQf1fIF7vQr8dsXe83SndrkJFrqQ65I7l2g8EZLsOGkWfkoqCHbLNMFug03V17G44csFOBdmv1D%2Fq8ijrdnMQ7yP8LVGiFD92hvaww3nmISAMsdmsA0ihth2Yd7tqB8eMwtSd4UuXHfnPHtsGbpAMRkUO%2FHFYAvkZlajMVa1SDOOGjPYl8cN2%2FvKVjbT10LljhyuDjufM20LQ0mtm9yL7vxmxdAkyO68%2BVi9%2FqRz55vViD%2F4YNRATXqLQUQTTBBXr3yI8RwdcpOv7PlKlOeGB%2F5cFiSlwn9Mc31lhfUr4GyxuXcG%2FModYLnWrsUxcfWqEY1kcviepRJr7f1ELapqL3sh2Pn%2F9AImJc5seZlJEVANoURXo6YrCXSaW8%2BtyVdZgY00SQItI2tachR%2Ftx0odtOI1FlgQGCQ3wRsr0cW6w5YuXpC%2FGe%2BUcFdEywhbVea0U0ZXE4m1VJwdQWYMzkca%2BL6NXjdG8t41nryJjXMwOY3VhYxE7nuLI%2FyojYy8%2Fy0PG24uHP4XiJalify3%2FWX3lDUEKvWNMN%2B97r8GOqUBSKfeG1xGMVUM03SmuE9jWd1NgzVE6DM9WtG8T%2FiGy14bgQtS3G4GS68OWRBq5PUwhU5Fgw16NCnwiYo4Sl4ncWmJS9Lf4wSq9mZtqIXTFk1x4BiRCTJe58DQl6RGboVJsSxVMdVzkUgJyoZ58%2FS7RPIGUL%2BNtRJ%2BtTSSz%2FPEWMyPcc2vlHGQQl4kRXAw7hLbV6WlSelKH0GwYaVE9ik53kSeEnUC&X-Amz-Signature=05bfc94a5eadddd76eb3d6eda4e71e2898fd0c89ca6f69e065f79e00d9ac7851&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZLNOVN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1GUDTKhGee2Ux9a%2FjeLx%2FQij5rX8JelMPwTiP0MTuwQIgM%2BqgpdoTVfhy4GAPsM7Resxg8Qij%2BFRhXintbJxS1V0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fg3Flk%2FNPw0ceaCyrcA6dHnX1S%2B7fUFEKfk2LWb9R2oX%2FuTLvVTqk29JIFb0UDRxneDwOakEO45RTeXnjvREzYuTQtMBfHDP37GIkVDtZkmqZCbVoaQf1fIF7vQr8dsXe83SndrkJFrqQ65I7l2g8EZLsOGkWfkoqCHbLNMFug03V17G44csFOBdmv1D%2Fq8ijrdnMQ7yP8LVGiFD92hvaww3nmISAMsdmsA0ihth2Yd7tqB8eMwtSd4UuXHfnPHtsGbpAMRkUO%2FHFYAvkZlajMVa1SDOOGjPYl8cN2%2FvKVjbT10LljhyuDjufM20LQ0mtm9yL7vxmxdAkyO68%2BVi9%2FqRz55vViD%2F4YNRATXqLQUQTTBBXr3yI8RwdcpOv7PlKlOeGB%2F5cFiSlwn9Mc31lhfUr4GyxuXcG%2FModYLnWrsUxcfWqEY1kcviepRJr7f1ELapqL3sh2Pn%2F9AImJc5seZlJEVANoURXo6YrCXSaW8%2BtyVdZgY00SQItI2tachR%2Ftx0odtOI1FlgQGCQ3wRsr0cW6w5YuXpC%2FGe%2BUcFdEywhbVea0U0ZXE4m1VJwdQWYMzkca%2BL6NXjdG8t41nryJjXMwOY3VhYxE7nuLI%2FyojYy8%2Fy0PG24uHP4XiJalify3%2FWX3lDUEKvWNMN%2B97r8GOqUBSKfeG1xGMVUM03SmuE9jWd1NgzVE6DM9WtG8T%2FiGy14bgQtS3G4GS68OWRBq5PUwhU5Fgw16NCnwiYo4Sl4ncWmJS9Lf4wSq9mZtqIXTFk1x4BiRCTJe58DQl6RGboVJsSxVMdVzkUgJyoZ58%2FS7RPIGUL%2BNtRJ%2BtTSSz%2FPEWMyPcc2vlHGQQl4kRXAw7hLbV6WlSelKH0GwYaVE9ik53kSeEnUC&X-Amz-Signature=76d61ae8e0b6e1b33e156c5c059c8cad7ab71990dc0a1e7fca29ebbbcf666dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZLNOVN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1GUDTKhGee2Ux9a%2FjeLx%2FQij5rX8JelMPwTiP0MTuwQIgM%2BqgpdoTVfhy4GAPsM7Resxg8Qij%2BFRhXintbJxS1V0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fg3Flk%2FNPw0ceaCyrcA6dHnX1S%2B7fUFEKfk2LWb9R2oX%2FuTLvVTqk29JIFb0UDRxneDwOakEO45RTeXnjvREzYuTQtMBfHDP37GIkVDtZkmqZCbVoaQf1fIF7vQr8dsXe83SndrkJFrqQ65I7l2g8EZLsOGkWfkoqCHbLNMFug03V17G44csFOBdmv1D%2Fq8ijrdnMQ7yP8LVGiFD92hvaww3nmISAMsdmsA0ihth2Yd7tqB8eMwtSd4UuXHfnPHtsGbpAMRkUO%2FHFYAvkZlajMVa1SDOOGjPYl8cN2%2FvKVjbT10LljhyuDjufM20LQ0mtm9yL7vxmxdAkyO68%2BVi9%2FqRz55vViD%2F4YNRATXqLQUQTTBBXr3yI8RwdcpOv7PlKlOeGB%2F5cFiSlwn9Mc31lhfUr4GyxuXcG%2FModYLnWrsUxcfWqEY1kcviepRJr7f1ELapqL3sh2Pn%2F9AImJc5seZlJEVANoURXo6YrCXSaW8%2BtyVdZgY00SQItI2tachR%2Ftx0odtOI1FlgQGCQ3wRsr0cW6w5YuXpC%2FGe%2BUcFdEywhbVea0U0ZXE4m1VJwdQWYMzkca%2BL6NXjdG8t41nryJjXMwOY3VhYxE7nuLI%2FyojYy8%2Fy0PG24uHP4XiJalify3%2FWX3lDUEKvWNMN%2B97r8GOqUBSKfeG1xGMVUM03SmuE9jWd1NgzVE6DM9WtG8T%2FiGy14bgQtS3G4GS68OWRBq5PUwhU5Fgw16NCnwiYo4Sl4ncWmJS9Lf4wSq9mZtqIXTFk1x4BiRCTJe58DQl6RGboVJsSxVMdVzkUgJyoZ58%2FS7RPIGUL%2BNtRJ%2BtTSSz%2FPEWMyPcc2vlHGQQl4kRXAw7hLbV6WlSelKH0GwYaVE9ik53kSeEnUC&X-Amz-Signature=dfc75ae3b94b1614911ed12cc5d2610db3a7deea9433fa73d8320447b9ead6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZLNOVN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1GUDTKhGee2Ux9a%2FjeLx%2FQij5rX8JelMPwTiP0MTuwQIgM%2BqgpdoTVfhy4GAPsM7Resxg8Qij%2BFRhXintbJxS1V0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fg3Flk%2FNPw0ceaCyrcA6dHnX1S%2B7fUFEKfk2LWb9R2oX%2FuTLvVTqk29JIFb0UDRxneDwOakEO45RTeXnjvREzYuTQtMBfHDP37GIkVDtZkmqZCbVoaQf1fIF7vQr8dsXe83SndrkJFrqQ65I7l2g8EZLsOGkWfkoqCHbLNMFug03V17G44csFOBdmv1D%2Fq8ijrdnMQ7yP8LVGiFD92hvaww3nmISAMsdmsA0ihth2Yd7tqB8eMwtSd4UuXHfnPHtsGbpAMRkUO%2FHFYAvkZlajMVa1SDOOGjPYl8cN2%2FvKVjbT10LljhyuDjufM20LQ0mtm9yL7vxmxdAkyO68%2BVi9%2FqRz55vViD%2F4YNRATXqLQUQTTBBXr3yI8RwdcpOv7PlKlOeGB%2F5cFiSlwn9Mc31lhfUr4GyxuXcG%2FModYLnWrsUxcfWqEY1kcviepRJr7f1ELapqL3sh2Pn%2F9AImJc5seZlJEVANoURXo6YrCXSaW8%2BtyVdZgY00SQItI2tachR%2Ftx0odtOI1FlgQGCQ3wRsr0cW6w5YuXpC%2FGe%2BUcFdEywhbVea0U0ZXE4m1VJwdQWYMzkca%2BL6NXjdG8t41nryJjXMwOY3VhYxE7nuLI%2FyojYy8%2Fy0PG24uHP4XiJalify3%2FWX3lDUEKvWNMN%2B97r8GOqUBSKfeG1xGMVUM03SmuE9jWd1NgzVE6DM9WtG8T%2FiGy14bgQtS3G4GS68OWRBq5PUwhU5Fgw16NCnwiYo4Sl4ncWmJS9Lf4wSq9mZtqIXTFk1x4BiRCTJe58DQl6RGboVJsSxVMdVzkUgJyoZ58%2FS7RPIGUL%2BNtRJ%2BtTSSz%2FPEWMyPcc2vlHGQQl4kRXAw7hLbV6WlSelKH0GwYaVE9ik53kSeEnUC&X-Amz-Signature=fffe7b38569805245ac71b1adc8f6f99cc62810dcfd120b22422eed9204a025b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZLNOVN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1GUDTKhGee2Ux9a%2FjeLx%2FQij5rX8JelMPwTiP0MTuwQIgM%2BqgpdoTVfhy4GAPsM7Resxg8Qij%2BFRhXintbJxS1V0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fg3Flk%2FNPw0ceaCyrcA6dHnX1S%2B7fUFEKfk2LWb9R2oX%2FuTLvVTqk29JIFb0UDRxneDwOakEO45RTeXnjvREzYuTQtMBfHDP37GIkVDtZkmqZCbVoaQf1fIF7vQr8dsXe83SndrkJFrqQ65I7l2g8EZLsOGkWfkoqCHbLNMFug03V17G44csFOBdmv1D%2Fq8ijrdnMQ7yP8LVGiFD92hvaww3nmISAMsdmsA0ihth2Yd7tqB8eMwtSd4UuXHfnPHtsGbpAMRkUO%2FHFYAvkZlajMVa1SDOOGjPYl8cN2%2FvKVjbT10LljhyuDjufM20LQ0mtm9yL7vxmxdAkyO68%2BVi9%2FqRz55vViD%2F4YNRATXqLQUQTTBBXr3yI8RwdcpOv7PlKlOeGB%2F5cFiSlwn9Mc31lhfUr4GyxuXcG%2FModYLnWrsUxcfWqEY1kcviepRJr7f1ELapqL3sh2Pn%2F9AImJc5seZlJEVANoURXo6YrCXSaW8%2BtyVdZgY00SQItI2tachR%2Ftx0odtOI1FlgQGCQ3wRsr0cW6w5YuXpC%2FGe%2BUcFdEywhbVea0U0ZXE4m1VJwdQWYMzkca%2BL6NXjdG8t41nryJjXMwOY3VhYxE7nuLI%2FyojYy8%2Fy0PG24uHP4XiJalify3%2FWX3lDUEKvWNMN%2B97r8GOqUBSKfeG1xGMVUM03SmuE9jWd1NgzVE6DM9WtG8T%2FiGy14bgQtS3G4GS68OWRBq5PUwhU5Fgw16NCnwiYo4Sl4ncWmJS9Lf4wSq9mZtqIXTFk1x4BiRCTJe58DQl6RGboVJsSxVMdVzkUgJyoZ58%2FS7RPIGUL%2BNtRJ%2BtTSSz%2FPEWMyPcc2vlHGQQl4kRXAw7hLbV6WlSelKH0GwYaVE9ik53kSeEnUC&X-Amz-Signature=cf473c279c1fe15df68c1436707cc2ec1b35b3e22138bbf6b8b5d23e4022abc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R45ELX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6Qt9FjTWydD%2FbdHmQUhtWE0KRswteWw00c2K%2B8CJTrAiEA%2BzIuJMFX1u6Q75Yggf%2Fu8vx2O%2B8mfTmuBF1clz71gagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEy2byEjj3szbyxDWCrcA2FWpt%2BcaaPsQby%2BXx4bG9sEoVsl56tX5kWeIRnUd%2BCuZGxPx3mo3Plkh%2BEtLxeyWGQNW8SJZ8PqxbjhbxFOZ54SCc3vZlTKWn7g5svneDBPGbrwbYZzoahCyne7RoYka8cbtB05jMV%2BORQcRGI7322FBNdSB587saJSSD4%2FiNZGg91tGW009%2BuANKg4%2FmmRpyroHO5gL1oqE4wwGZM2PV1hoXr9zu0bj35CjFiOt7WV7eHWQxniMhNrOwHa8heU3Ze68QPweGhQlp0D6%2BvXYJNm1sSCFGDC%2Fwumj2ga0caD%2FEqtjzQoKWeZdu6DvEJgoWTYh10hSsIVA9Ez2XqpXlQ8LlZhpOuLsoJD2OYFSo%2B7ozXommfAVxCNoVTQjez9rwBx504hBDxJhwzkYpTNniKXKZvRZ2O6f%2BTqDQx4XNO4ZEpPhp0asbKYTD5TLrKJeNOwAhnW06dQYheWbh961ion6yHKyc6GqV0fZgha0vAWvBISlkcUnFS3tuFSKA%2B3tubpbAcr3S5ffL7cqoDsHZkZ6SLNOtiE9loSgJleWxdn8xe5GsaPtsLd8QUOCwVmkHDnkZQQ8CuM7wox8npOtqyxA7juQtuaZbv3Cc6%2B%2FnN2H9XYOucRladYbdQ6MMzZvsQGOqUBpRISAEVWIRwnBG2BX%2BjWHh0iGZ4W9Cmlp1H9Ud%2FEHOl0kEvcTBw%2FEKO6axWskkdSfUl5kTWcZ1FEdAaMBzQkLnaq2LZDKXVS3IkYfZAZ54rUF5Ou5DhQjTHKAlnUa2KtHHs7CfbVK9IsYkZ5QD0yxX8GRCKa1G5Bsi%2B9XADMWTKGX4gcmExlGaKBKqEt0FSxV2XFF0nwSOniC28kJedeigRjtqNI&X-Amz-Signature=87104cc79de9aaaeb3568196ce41bfbb64a8bea97669eaa2d969e3b12cec572d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R45ELX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6Qt9FjTWydD%2FbdHmQUhtWE0KRswteWw00c2K%2B8CJTrAiEA%2BzIuJMFX1u6Q75Yggf%2Fu8vx2O%2B8mfTmuBF1clz71gagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEy2byEjj3szbyxDWCrcA2FWpt%2BcaaPsQby%2BXx4bG9sEoVsl56tX5kWeIRnUd%2BCuZGxPx3mo3Plkh%2BEtLxeyWGQNW8SJZ8PqxbjhbxFOZ54SCc3vZlTKWn7g5svneDBPGbrwbYZzoahCyne7RoYka8cbtB05jMV%2BORQcRGI7322FBNdSB587saJSSD4%2FiNZGg91tGW009%2BuANKg4%2FmmRpyroHO5gL1oqE4wwGZM2PV1hoXr9zu0bj35CjFiOt7WV7eHWQxniMhNrOwHa8heU3Ze68QPweGhQlp0D6%2BvXYJNm1sSCFGDC%2Fwumj2ga0caD%2FEqtjzQoKWeZdu6DvEJgoWTYh10hSsIVA9Ez2XqpXlQ8LlZhpOuLsoJD2OYFSo%2B7ozXommfAVxCNoVTQjez9rwBx504hBDxJhwzkYpTNniKXKZvRZ2O6f%2BTqDQx4XNO4ZEpPhp0asbKYTD5TLrKJeNOwAhnW06dQYheWbh961ion6yHKyc6GqV0fZgha0vAWvBISlkcUnFS3tuFSKA%2B3tubpbAcr3S5ffL7cqoDsHZkZ6SLNOtiE9loSgJleWxdn8xe5GsaPtsLd8QUOCwVmkHDnkZQQ8CuM7wox8npOtqyxA7juQtuaZbv3Cc6%2B%2FnN2H9XYOucRladYbdQ6MMzZvsQGOqUBpRISAEVWIRwnBG2BX%2BjWHh0iGZ4W9Cmlp1H9Ud%2FEHOl0kEvcTBw%2FEKO6axWskkdSfUl5kTWcZ1FEdAaMBzQkLnaq2LZDKXVS3IkYfZAZ54rUF5Ou5DhQjTHKAlnUa2KtHHs7CfbVK9IsYkZ5QD0yxX8GRCKa1G5Bsi%2B9XADMWTKGX4gcmExlGaKBKqEt0FSxV2XFF0nwSOniC28kJedeigRjtqNI&X-Amz-Signature=4b2fd9fd7f91c5c4cab7deee72429609d4e4cc605042edffffa06902a0d84f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R45ELX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6Qt9FjTWydD%2FbdHmQUhtWE0KRswteWw00c2K%2B8CJTrAiEA%2BzIuJMFX1u6Q75Yggf%2Fu8vx2O%2B8mfTmuBF1clz71gagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEy2byEjj3szbyxDWCrcA2FWpt%2BcaaPsQby%2BXx4bG9sEoVsl56tX5kWeIRnUd%2BCuZGxPx3mo3Plkh%2BEtLxeyWGQNW8SJZ8PqxbjhbxFOZ54SCc3vZlTKWn7g5svneDBPGbrwbYZzoahCyne7RoYka8cbtB05jMV%2BORQcRGI7322FBNdSB587saJSSD4%2FiNZGg91tGW009%2BuANKg4%2FmmRpyroHO5gL1oqE4wwGZM2PV1hoXr9zu0bj35CjFiOt7WV7eHWQxniMhNrOwHa8heU3Ze68QPweGhQlp0D6%2BvXYJNm1sSCFGDC%2Fwumj2ga0caD%2FEqtjzQoKWeZdu6DvEJgoWTYh10hSsIVA9Ez2XqpXlQ8LlZhpOuLsoJD2OYFSo%2B7ozXommfAVxCNoVTQjez9rwBx504hBDxJhwzkYpTNniKXKZvRZ2O6f%2BTqDQx4XNO4ZEpPhp0asbKYTD5TLrKJeNOwAhnW06dQYheWbh961ion6yHKyc6GqV0fZgha0vAWvBISlkcUnFS3tuFSKA%2B3tubpbAcr3S5ffL7cqoDsHZkZ6SLNOtiE9loSgJleWxdn8xe5GsaPtsLd8QUOCwVmkHDnkZQQ8CuM7wox8npOtqyxA7juQtuaZbv3Cc6%2B%2FnN2H9XYOucRladYbdQ6MMzZvsQGOqUBpRISAEVWIRwnBG2BX%2BjWHh0iGZ4W9Cmlp1H9Ud%2FEHOl0kEvcTBw%2FEKO6axWskkdSfUl5kTWcZ1FEdAaMBzQkLnaq2LZDKXVS3IkYfZAZ54rUF5Ou5DhQjTHKAlnUa2KtHHs7CfbVK9IsYkZ5QD0yxX8GRCKa1G5Bsi%2B9XADMWTKGX4gcmExlGaKBKqEt0FSxV2XFF0nwSOniC28kJedeigRjtqNI&X-Amz-Signature=79f02f01f65248b3acae7d6db2ce89d6fed8a538ba293603eb87858bfd5573d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R45ELX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6Qt9FjTWydD%2FbdHmQUhtWE0KRswteWw00c2K%2B8CJTrAiEA%2BzIuJMFX1u6Q75Yggf%2Fu8vx2O%2B8mfTmuBF1clz71gagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEy2byEjj3szbyxDWCrcA2FWpt%2BcaaPsQby%2BXx4bG9sEoVsl56tX5kWeIRnUd%2BCuZGxPx3mo3Plkh%2BEtLxeyWGQNW8SJZ8PqxbjhbxFOZ54SCc3vZlTKWn7g5svneDBPGbrwbYZzoahCyne7RoYka8cbtB05jMV%2BORQcRGI7322FBNdSB587saJSSD4%2FiNZGg91tGW009%2BuANKg4%2FmmRpyroHO5gL1oqE4wwGZM2PV1hoXr9zu0bj35CjFiOt7WV7eHWQxniMhNrOwHa8heU3Ze68QPweGhQlp0D6%2BvXYJNm1sSCFGDC%2Fwumj2ga0caD%2FEqtjzQoKWeZdu6DvEJgoWTYh10hSsIVA9Ez2XqpXlQ8LlZhpOuLsoJD2OYFSo%2B7ozXommfAVxCNoVTQjez9rwBx504hBDxJhwzkYpTNniKXKZvRZ2O6f%2BTqDQx4XNO4ZEpPhp0asbKYTD5TLrKJeNOwAhnW06dQYheWbh961ion6yHKyc6GqV0fZgha0vAWvBISlkcUnFS3tuFSKA%2B3tubpbAcr3S5ffL7cqoDsHZkZ6SLNOtiE9loSgJleWxdn8xe5GsaPtsLd8QUOCwVmkHDnkZQQ8CuM7wox8npOtqyxA7juQtuaZbv3Cc6%2B%2FnN2H9XYOucRladYbdQ6MMzZvsQGOqUBpRISAEVWIRwnBG2BX%2BjWHh0iGZ4W9Cmlp1H9Ud%2FEHOl0kEvcTBw%2FEKO6axWskkdSfUl5kTWcZ1FEdAaMBzQkLnaq2LZDKXVS3IkYfZAZ54rUF5Ou5DhQjTHKAlnUa2KtHHs7CfbVK9IsYkZ5QD0yxX8GRCKa1G5Bsi%2B9XADMWTKGX4gcmExlGaKBKqEt0FSxV2XFF0nwSOniC28kJedeigRjtqNI&X-Amz-Signature=d416d703a9a6f9f3de5cdeea151142587485e95a447a54af3c844384476f3d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R45ELX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6Qt9FjTWydD%2FbdHmQUhtWE0KRswteWw00c2K%2B8CJTrAiEA%2BzIuJMFX1u6Q75Yggf%2Fu8vx2O%2B8mfTmuBF1clz71gagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEy2byEjj3szbyxDWCrcA2FWpt%2BcaaPsQby%2BXx4bG9sEoVsl56tX5kWeIRnUd%2BCuZGxPx3mo3Plkh%2BEtLxeyWGQNW8SJZ8PqxbjhbxFOZ54SCc3vZlTKWn7g5svneDBPGbrwbYZzoahCyne7RoYka8cbtB05jMV%2BORQcRGI7322FBNdSB587saJSSD4%2FiNZGg91tGW009%2BuANKg4%2FmmRpyroHO5gL1oqE4wwGZM2PV1hoXr9zu0bj35CjFiOt7WV7eHWQxniMhNrOwHa8heU3Ze68QPweGhQlp0D6%2BvXYJNm1sSCFGDC%2Fwumj2ga0caD%2FEqtjzQoKWeZdu6DvEJgoWTYh10hSsIVA9Ez2XqpXlQ8LlZhpOuLsoJD2OYFSo%2B7ozXommfAVxCNoVTQjez9rwBx504hBDxJhwzkYpTNniKXKZvRZ2O6f%2BTqDQx4XNO4ZEpPhp0asbKYTD5TLrKJeNOwAhnW06dQYheWbh961ion6yHKyc6GqV0fZgha0vAWvBISlkcUnFS3tuFSKA%2B3tubpbAcr3S5ffL7cqoDsHZkZ6SLNOtiE9loSgJleWxdn8xe5GsaPtsLd8QUOCwVmkHDnkZQQ8CuM7wox8npOtqyxA7juQtuaZbv3Cc6%2B%2FnN2H9XYOucRladYbdQ6MMzZvsQGOqUBpRISAEVWIRwnBG2BX%2BjWHh0iGZ4W9Cmlp1H9Ud%2FEHOl0kEvcTBw%2FEKO6axWskkdSfUl5kTWcZ1FEdAaMBzQkLnaq2LZDKXVS3IkYfZAZ54rUF5Ou5DhQjTHKAlnUa2KtHHs7CfbVK9IsYkZ5QD0yxX8GRCKa1G5Bsi%2B9XADMWTKGX4gcmExlGaKBKqEt0FSxV2XFF0nwSOniC28kJedeigRjtqNI&X-Amz-Signature=2b78197ba2cc3520a66422095b60e6073e2d3674dad901c3a25fc3167ba7e3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R45ELX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6Qt9FjTWydD%2FbdHmQUhtWE0KRswteWw00c2K%2B8CJTrAiEA%2BzIuJMFX1u6Q75Yggf%2Fu8vx2O%2B8mfTmuBF1clz71gagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEy2byEjj3szbyxDWCrcA2FWpt%2BcaaPsQby%2BXx4bG9sEoVsl56tX5kWeIRnUd%2BCuZGxPx3mo3Plkh%2BEtLxeyWGQNW8SJZ8PqxbjhbxFOZ54SCc3vZlTKWn7g5svneDBPGbrwbYZzoahCyne7RoYka8cbtB05jMV%2BORQcRGI7322FBNdSB587saJSSD4%2FiNZGg91tGW009%2BuANKg4%2FmmRpyroHO5gL1oqE4wwGZM2PV1hoXr9zu0bj35CjFiOt7WV7eHWQxniMhNrOwHa8heU3Ze68QPweGhQlp0D6%2BvXYJNm1sSCFGDC%2Fwumj2ga0caD%2FEqtjzQoKWeZdu6DvEJgoWTYh10hSsIVA9Ez2XqpXlQ8LlZhpOuLsoJD2OYFSo%2B7ozXommfAVxCNoVTQjez9rwBx504hBDxJhwzkYpTNniKXKZvRZ2O6f%2BTqDQx4XNO4ZEpPhp0asbKYTD5TLrKJeNOwAhnW06dQYheWbh961ion6yHKyc6GqV0fZgha0vAWvBISlkcUnFS3tuFSKA%2B3tubpbAcr3S5ffL7cqoDsHZkZ6SLNOtiE9loSgJleWxdn8xe5GsaPtsLd8QUOCwVmkHDnkZQQ8CuM7wox8npOtqyxA7juQtuaZbv3Cc6%2B%2FnN2H9XYOucRladYbdQ6MMzZvsQGOqUBpRISAEVWIRwnBG2BX%2BjWHh0iGZ4W9Cmlp1H9Ud%2FEHOl0kEvcTBw%2FEKO6axWskkdSfUl5kTWcZ1FEdAaMBzQkLnaq2LZDKXVS3IkYfZAZ54rUF5Ou5DhQjTHKAlnUa2KtHHs7CfbVK9IsYkZ5QD0yxX8GRCKa1G5Bsi%2B9XADMWTKGX4gcmExlGaKBKqEt0FSxV2XFF0nwSOniC28kJedeigRjtqNI&X-Amz-Signature=41f74339a4f19c4fffea28fece597339a99d7bd8fdcff031d8b9a85128504d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R45ELX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6Qt9FjTWydD%2FbdHmQUhtWE0KRswteWw00c2K%2B8CJTrAiEA%2BzIuJMFX1u6Q75Yggf%2Fu8vx2O%2B8mfTmuBF1clz71gagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEy2byEjj3szbyxDWCrcA2FWpt%2BcaaPsQby%2BXx4bG9sEoVsl56tX5kWeIRnUd%2BCuZGxPx3mo3Plkh%2BEtLxeyWGQNW8SJZ8PqxbjhbxFOZ54SCc3vZlTKWn7g5svneDBPGbrwbYZzoahCyne7RoYka8cbtB05jMV%2BORQcRGI7322FBNdSB587saJSSD4%2FiNZGg91tGW009%2BuANKg4%2FmmRpyroHO5gL1oqE4wwGZM2PV1hoXr9zu0bj35CjFiOt7WV7eHWQxniMhNrOwHa8heU3Ze68QPweGhQlp0D6%2BvXYJNm1sSCFGDC%2Fwumj2ga0caD%2FEqtjzQoKWeZdu6DvEJgoWTYh10hSsIVA9Ez2XqpXlQ8LlZhpOuLsoJD2OYFSo%2B7ozXommfAVxCNoVTQjez9rwBx504hBDxJhwzkYpTNniKXKZvRZ2O6f%2BTqDQx4XNO4ZEpPhp0asbKYTD5TLrKJeNOwAhnW06dQYheWbh961ion6yHKyc6GqV0fZgha0vAWvBISlkcUnFS3tuFSKA%2B3tubpbAcr3S5ffL7cqoDsHZkZ6SLNOtiE9loSgJleWxdn8xe5GsaPtsLd8QUOCwVmkHDnkZQQ8CuM7wox8npOtqyxA7juQtuaZbv3Cc6%2B%2FnN2H9XYOucRladYbdQ6MMzZvsQGOqUBpRISAEVWIRwnBG2BX%2BjWHh0iGZ4W9Cmlp1H9Ud%2FEHOl0kEvcTBw%2FEKO6axWskkdSfUl5kTWcZ1FEdAaMBzQkLnaq2LZDKXVS3IkYfZAZ54rUF5Ou5DhQjTHKAlnUa2KtHHs7CfbVK9IsYkZ5QD0yxX8GRCKa1G5Bsi%2B9XADMWTKGX4gcmExlGaKBKqEt0FSxV2XFF0nwSOniC28kJedeigRjtqNI&X-Amz-Signature=5f8a96e5ffb97fdb92d1961f59af0af5a2bd9e90ffdff9d27abb478ccb388891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R45ELX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6Qt9FjTWydD%2FbdHmQUhtWE0KRswteWw00c2K%2B8CJTrAiEA%2BzIuJMFX1u6Q75Yggf%2Fu8vx2O%2B8mfTmuBF1clz71gagq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEy2byEjj3szbyxDWCrcA2FWpt%2BcaaPsQby%2BXx4bG9sEoVsl56tX5kWeIRnUd%2BCuZGxPx3mo3Plkh%2BEtLxeyWGQNW8SJZ8PqxbjhbxFOZ54SCc3vZlTKWn7g5svneDBPGbrwbYZzoahCyne7RoYka8cbtB05jMV%2BORQcRGI7322FBNdSB587saJSSD4%2FiNZGg91tGW009%2BuANKg4%2FmmRpyroHO5gL1oqE4wwGZM2PV1hoXr9zu0bj35CjFiOt7WV7eHWQxniMhNrOwHa8heU3Ze68QPweGhQlp0D6%2BvXYJNm1sSCFGDC%2Fwumj2ga0caD%2FEqtjzQoKWeZdu6DvEJgoWTYh10hSsIVA9Ez2XqpXlQ8LlZhpOuLsoJD2OYFSo%2B7ozXommfAVxCNoVTQjez9rwBx504hBDxJhwzkYpTNniKXKZvRZ2O6f%2BTqDQx4XNO4ZEpPhp0asbKYTD5TLrKJeNOwAhnW06dQYheWbh961ion6yHKyc6GqV0fZgha0vAWvBISlkcUnFS3tuFSKA%2B3tubpbAcr3S5ffL7cqoDsHZkZ6SLNOtiE9loSgJleWxdn8xe5GsaPtsLd8QUOCwVmkHDnkZQQ8CuM7wox8npOtqyxA7juQtuaZbv3Cc6%2B%2FnN2H9XYOucRladYbdQ6MMzZvsQGOqUBpRISAEVWIRwnBG2BX%2BjWHh0iGZ4W9Cmlp1H9Ud%2FEHOl0kEvcTBw%2FEKO6axWskkdSfUl5kTWcZ1FEdAaMBzQkLnaq2LZDKXVS3IkYfZAZ54rUF5Ou5DhQjTHKAlnUa2KtHHs7CfbVK9IsYkZ5QD0yxX8GRCKa1G5Bsi%2B9XADMWTKGX4gcmExlGaKBKqEt0FSxV2XFF0nwSOniC28kJedeigRjtqNI&X-Amz-Signature=5bf4678e611abddde700506716cccc4bcb76fa6890ec3601a3fb973363e198d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

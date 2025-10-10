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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSHDID2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBlY8oSGUNqUras89spIo2YktVmPtRH6doXdUpOWUcZHAiBundO5mY0SogrYzEu6NFCzYbw7gYd1GjgnhS%2FkCHbHjyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMReGW5ab1kQFtM7PqKtwDK9tdWFXQUZZvc5cv8%2Bka0MmDtQGQotz9i%2FKBEBnjyBPgGTiNnD0wTt9dwqAEEggItbWzhlXEl1bkxFaGI5CnWnyL4O0F%2FAki57vNF2YBjtOj6PyQbt7Kll13OIeTO2nBCGXDW0EXo01fo7OuSU6%2B0DsymuOT%2FWQ20BHHU2gfWeiNnrOl9EBn9true0yEm%2BD3g8qOgxcZV9wEyK2wKskfR3X5PcSJXbo36sNFLm%2FzcQuOIW%2FeSfosfCXSIg5mGbhZYjFNhyLVEuCut4m690PQuRvoKK14q%2FKUgi%2FacrqLyHhKfCHFi4fbh6n91jiPC2jXEWb2MGEzo6xxXutcHJJhD5wgnx6leyo5RMtGQYBV1AYZnOPqn%2Fo%2FnWR8EQHsVKFQJyHojOwpBDaIuwm2HwjP50hkSQKkwOZt%2Bs%2BYLxRYrmndZBISlfW0houQ%2Bji3vbHWftQvnOPD%2F5gkXEMQmUsWU28IuKb6xYakSEhyKEWTq0d41bEFAKvPR352%2Fip5SqBfMeOCc%2FeZOu4OR6BseA3%2BMhbDZxivj1en6PZZiyeIxUmCUuBCEFXIbc2UFhvATf6MS6sDJ%2FECBtCODR42dE6y25uc%2B46MquPvl95sBPwBWWji8BAZ4gvFodH0dHwwzaihxwY6pgExLknkOgtG9NzVX2tDvoccTpjzVhB4PyfxaMta8ShawdBAGYS4iHbIwa2joN5Q99Luf7i4NHvnq7pi%2BroxzUMfge4vWy15mlHrLsI9EqbtUqJgm5FzVLLblYoXHo0qXTVnf8%2BZRL1PYZ1SMfhW3OsHEzOL%2BzbiRLvBGNHBPjLttVCALvGwWMIB0srqdSgvgVMDsXA1pEUEnRke8H4W8uaVDLYVrUEg&X-Amz-Signature=ba3f7d88a2eed8035aeeb60a0abf20aa7def044b4ba3fea5cb5c2a8c13943fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSHDID2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBlY8oSGUNqUras89spIo2YktVmPtRH6doXdUpOWUcZHAiBundO5mY0SogrYzEu6NFCzYbw7gYd1GjgnhS%2FkCHbHjyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMReGW5ab1kQFtM7PqKtwDK9tdWFXQUZZvc5cv8%2Bka0MmDtQGQotz9i%2FKBEBnjyBPgGTiNnD0wTt9dwqAEEggItbWzhlXEl1bkxFaGI5CnWnyL4O0F%2FAki57vNF2YBjtOj6PyQbt7Kll13OIeTO2nBCGXDW0EXo01fo7OuSU6%2B0DsymuOT%2FWQ20BHHU2gfWeiNnrOl9EBn9true0yEm%2BD3g8qOgxcZV9wEyK2wKskfR3X5PcSJXbo36sNFLm%2FzcQuOIW%2FeSfosfCXSIg5mGbhZYjFNhyLVEuCut4m690PQuRvoKK14q%2FKUgi%2FacrqLyHhKfCHFi4fbh6n91jiPC2jXEWb2MGEzo6xxXutcHJJhD5wgnx6leyo5RMtGQYBV1AYZnOPqn%2Fo%2FnWR8EQHsVKFQJyHojOwpBDaIuwm2HwjP50hkSQKkwOZt%2Bs%2BYLxRYrmndZBISlfW0houQ%2Bji3vbHWftQvnOPD%2F5gkXEMQmUsWU28IuKb6xYakSEhyKEWTq0d41bEFAKvPR352%2Fip5SqBfMeOCc%2FeZOu4OR6BseA3%2BMhbDZxivj1en6PZZiyeIxUmCUuBCEFXIbc2UFhvATf6MS6sDJ%2FECBtCODR42dE6y25uc%2B46MquPvl95sBPwBWWji8BAZ4gvFodH0dHwwzaihxwY6pgExLknkOgtG9NzVX2tDvoccTpjzVhB4PyfxaMta8ShawdBAGYS4iHbIwa2joN5Q99Luf7i4NHvnq7pi%2BroxzUMfge4vWy15mlHrLsI9EqbtUqJgm5FzVLLblYoXHo0qXTVnf8%2BZRL1PYZ1SMfhW3OsHEzOL%2BzbiRLvBGNHBPjLttVCALvGwWMIB0srqdSgvgVMDsXA1pEUEnRke8H4W8uaVDLYVrUEg&X-Amz-Signature=062ed99cae35196da294563baebdc8edc0f981d9507e6b18a592fddedc9abd98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSHDID2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBlY8oSGUNqUras89spIo2YktVmPtRH6doXdUpOWUcZHAiBundO5mY0SogrYzEu6NFCzYbw7gYd1GjgnhS%2FkCHbHjyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMReGW5ab1kQFtM7PqKtwDK9tdWFXQUZZvc5cv8%2Bka0MmDtQGQotz9i%2FKBEBnjyBPgGTiNnD0wTt9dwqAEEggItbWzhlXEl1bkxFaGI5CnWnyL4O0F%2FAki57vNF2YBjtOj6PyQbt7Kll13OIeTO2nBCGXDW0EXo01fo7OuSU6%2B0DsymuOT%2FWQ20BHHU2gfWeiNnrOl9EBn9true0yEm%2BD3g8qOgxcZV9wEyK2wKskfR3X5PcSJXbo36sNFLm%2FzcQuOIW%2FeSfosfCXSIg5mGbhZYjFNhyLVEuCut4m690PQuRvoKK14q%2FKUgi%2FacrqLyHhKfCHFi4fbh6n91jiPC2jXEWb2MGEzo6xxXutcHJJhD5wgnx6leyo5RMtGQYBV1AYZnOPqn%2Fo%2FnWR8EQHsVKFQJyHojOwpBDaIuwm2HwjP50hkSQKkwOZt%2Bs%2BYLxRYrmndZBISlfW0houQ%2Bji3vbHWftQvnOPD%2F5gkXEMQmUsWU28IuKb6xYakSEhyKEWTq0d41bEFAKvPR352%2Fip5SqBfMeOCc%2FeZOu4OR6BseA3%2BMhbDZxivj1en6PZZiyeIxUmCUuBCEFXIbc2UFhvATf6MS6sDJ%2FECBtCODR42dE6y25uc%2B46MquPvl95sBPwBWWji8BAZ4gvFodH0dHwwzaihxwY6pgExLknkOgtG9NzVX2tDvoccTpjzVhB4PyfxaMta8ShawdBAGYS4iHbIwa2joN5Q99Luf7i4NHvnq7pi%2BroxzUMfge4vWy15mlHrLsI9EqbtUqJgm5FzVLLblYoXHo0qXTVnf8%2BZRL1PYZ1SMfhW3OsHEzOL%2BzbiRLvBGNHBPjLttVCALvGwWMIB0srqdSgvgVMDsXA1pEUEnRke8H4W8uaVDLYVrUEg&X-Amz-Signature=ee922129e8d5b3f6e02e07a3223663169f6ed0f0adab6bd28e60adab727ab9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSHDID2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBlY8oSGUNqUras89spIo2YktVmPtRH6doXdUpOWUcZHAiBundO5mY0SogrYzEu6NFCzYbw7gYd1GjgnhS%2FkCHbHjyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMReGW5ab1kQFtM7PqKtwDK9tdWFXQUZZvc5cv8%2Bka0MmDtQGQotz9i%2FKBEBnjyBPgGTiNnD0wTt9dwqAEEggItbWzhlXEl1bkxFaGI5CnWnyL4O0F%2FAki57vNF2YBjtOj6PyQbt7Kll13OIeTO2nBCGXDW0EXo01fo7OuSU6%2B0DsymuOT%2FWQ20BHHU2gfWeiNnrOl9EBn9true0yEm%2BD3g8qOgxcZV9wEyK2wKskfR3X5PcSJXbo36sNFLm%2FzcQuOIW%2FeSfosfCXSIg5mGbhZYjFNhyLVEuCut4m690PQuRvoKK14q%2FKUgi%2FacrqLyHhKfCHFi4fbh6n91jiPC2jXEWb2MGEzo6xxXutcHJJhD5wgnx6leyo5RMtGQYBV1AYZnOPqn%2Fo%2FnWR8EQHsVKFQJyHojOwpBDaIuwm2HwjP50hkSQKkwOZt%2Bs%2BYLxRYrmndZBISlfW0houQ%2Bji3vbHWftQvnOPD%2F5gkXEMQmUsWU28IuKb6xYakSEhyKEWTq0d41bEFAKvPR352%2Fip5SqBfMeOCc%2FeZOu4OR6BseA3%2BMhbDZxivj1en6PZZiyeIxUmCUuBCEFXIbc2UFhvATf6MS6sDJ%2FECBtCODR42dE6y25uc%2B46MquPvl95sBPwBWWji8BAZ4gvFodH0dHwwzaihxwY6pgExLknkOgtG9NzVX2tDvoccTpjzVhB4PyfxaMta8ShawdBAGYS4iHbIwa2joN5Q99Luf7i4NHvnq7pi%2BroxzUMfge4vWy15mlHrLsI9EqbtUqJgm5FzVLLblYoXHo0qXTVnf8%2BZRL1PYZ1SMfhW3OsHEzOL%2BzbiRLvBGNHBPjLttVCALvGwWMIB0srqdSgvgVMDsXA1pEUEnRke8H4W8uaVDLYVrUEg&X-Amz-Signature=bda4e07019889d6d5aa0c6dbba75d9f6c970292920404b4c9af64d582e2bc3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSHDID2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBlY8oSGUNqUras89spIo2YktVmPtRH6doXdUpOWUcZHAiBundO5mY0SogrYzEu6NFCzYbw7gYd1GjgnhS%2FkCHbHjyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMReGW5ab1kQFtM7PqKtwDK9tdWFXQUZZvc5cv8%2Bka0MmDtQGQotz9i%2FKBEBnjyBPgGTiNnD0wTt9dwqAEEggItbWzhlXEl1bkxFaGI5CnWnyL4O0F%2FAki57vNF2YBjtOj6PyQbt7Kll13OIeTO2nBCGXDW0EXo01fo7OuSU6%2B0DsymuOT%2FWQ20BHHU2gfWeiNnrOl9EBn9true0yEm%2BD3g8qOgxcZV9wEyK2wKskfR3X5PcSJXbo36sNFLm%2FzcQuOIW%2FeSfosfCXSIg5mGbhZYjFNhyLVEuCut4m690PQuRvoKK14q%2FKUgi%2FacrqLyHhKfCHFi4fbh6n91jiPC2jXEWb2MGEzo6xxXutcHJJhD5wgnx6leyo5RMtGQYBV1AYZnOPqn%2Fo%2FnWR8EQHsVKFQJyHojOwpBDaIuwm2HwjP50hkSQKkwOZt%2Bs%2BYLxRYrmndZBISlfW0houQ%2Bji3vbHWftQvnOPD%2F5gkXEMQmUsWU28IuKb6xYakSEhyKEWTq0d41bEFAKvPR352%2Fip5SqBfMeOCc%2FeZOu4OR6BseA3%2BMhbDZxivj1en6PZZiyeIxUmCUuBCEFXIbc2UFhvATf6MS6sDJ%2FECBtCODR42dE6y25uc%2B46MquPvl95sBPwBWWji8BAZ4gvFodH0dHwwzaihxwY6pgExLknkOgtG9NzVX2tDvoccTpjzVhB4PyfxaMta8ShawdBAGYS4iHbIwa2joN5Q99Luf7i4NHvnq7pi%2BroxzUMfge4vWy15mlHrLsI9EqbtUqJgm5FzVLLblYoXHo0qXTVnf8%2BZRL1PYZ1SMfhW3OsHEzOL%2BzbiRLvBGNHBPjLttVCALvGwWMIB0srqdSgvgVMDsXA1pEUEnRke8H4W8uaVDLYVrUEg&X-Amz-Signature=ef32b2877e0984f421907549571f788ac7683d0fd3c552c3fe34a3c9c55f6342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSHDID2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBlY8oSGUNqUras89spIo2YktVmPtRH6doXdUpOWUcZHAiBundO5mY0SogrYzEu6NFCzYbw7gYd1GjgnhS%2FkCHbHjyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMReGW5ab1kQFtM7PqKtwDK9tdWFXQUZZvc5cv8%2Bka0MmDtQGQotz9i%2FKBEBnjyBPgGTiNnD0wTt9dwqAEEggItbWzhlXEl1bkxFaGI5CnWnyL4O0F%2FAki57vNF2YBjtOj6PyQbt7Kll13OIeTO2nBCGXDW0EXo01fo7OuSU6%2B0DsymuOT%2FWQ20BHHU2gfWeiNnrOl9EBn9true0yEm%2BD3g8qOgxcZV9wEyK2wKskfR3X5PcSJXbo36sNFLm%2FzcQuOIW%2FeSfosfCXSIg5mGbhZYjFNhyLVEuCut4m690PQuRvoKK14q%2FKUgi%2FacrqLyHhKfCHFi4fbh6n91jiPC2jXEWb2MGEzo6xxXutcHJJhD5wgnx6leyo5RMtGQYBV1AYZnOPqn%2Fo%2FnWR8EQHsVKFQJyHojOwpBDaIuwm2HwjP50hkSQKkwOZt%2Bs%2BYLxRYrmndZBISlfW0houQ%2Bji3vbHWftQvnOPD%2F5gkXEMQmUsWU28IuKb6xYakSEhyKEWTq0d41bEFAKvPR352%2Fip5SqBfMeOCc%2FeZOu4OR6BseA3%2BMhbDZxivj1en6PZZiyeIxUmCUuBCEFXIbc2UFhvATf6MS6sDJ%2FECBtCODR42dE6y25uc%2B46MquPvl95sBPwBWWji8BAZ4gvFodH0dHwwzaihxwY6pgExLknkOgtG9NzVX2tDvoccTpjzVhB4PyfxaMta8ShawdBAGYS4iHbIwa2joN5Q99Luf7i4NHvnq7pi%2BroxzUMfge4vWy15mlHrLsI9EqbtUqJgm5FzVLLblYoXHo0qXTVnf8%2BZRL1PYZ1SMfhW3OsHEzOL%2BzbiRLvBGNHBPjLttVCALvGwWMIB0srqdSgvgVMDsXA1pEUEnRke8H4W8uaVDLYVrUEg&X-Amz-Signature=ce4bc379d60778581529cd9aecec77210ad08a75256e9d3813e8fb27860625b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSHDID2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBlY8oSGUNqUras89spIo2YktVmPtRH6doXdUpOWUcZHAiBundO5mY0SogrYzEu6NFCzYbw7gYd1GjgnhS%2FkCHbHjyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMReGW5ab1kQFtM7PqKtwDK9tdWFXQUZZvc5cv8%2Bka0MmDtQGQotz9i%2FKBEBnjyBPgGTiNnD0wTt9dwqAEEggItbWzhlXEl1bkxFaGI5CnWnyL4O0F%2FAki57vNF2YBjtOj6PyQbt7Kll13OIeTO2nBCGXDW0EXo01fo7OuSU6%2B0DsymuOT%2FWQ20BHHU2gfWeiNnrOl9EBn9true0yEm%2BD3g8qOgxcZV9wEyK2wKskfR3X5PcSJXbo36sNFLm%2FzcQuOIW%2FeSfosfCXSIg5mGbhZYjFNhyLVEuCut4m690PQuRvoKK14q%2FKUgi%2FacrqLyHhKfCHFi4fbh6n91jiPC2jXEWb2MGEzo6xxXutcHJJhD5wgnx6leyo5RMtGQYBV1AYZnOPqn%2Fo%2FnWR8EQHsVKFQJyHojOwpBDaIuwm2HwjP50hkSQKkwOZt%2Bs%2BYLxRYrmndZBISlfW0houQ%2Bji3vbHWftQvnOPD%2F5gkXEMQmUsWU28IuKb6xYakSEhyKEWTq0d41bEFAKvPR352%2Fip5SqBfMeOCc%2FeZOu4OR6BseA3%2BMhbDZxivj1en6PZZiyeIxUmCUuBCEFXIbc2UFhvATf6MS6sDJ%2FECBtCODR42dE6y25uc%2B46MquPvl95sBPwBWWji8BAZ4gvFodH0dHwwzaihxwY6pgExLknkOgtG9NzVX2tDvoccTpjzVhB4PyfxaMta8ShawdBAGYS4iHbIwa2joN5Q99Luf7i4NHvnq7pi%2BroxzUMfge4vWy15mlHrLsI9EqbtUqJgm5FzVLLblYoXHo0qXTVnf8%2BZRL1PYZ1SMfhW3OsHEzOL%2BzbiRLvBGNHBPjLttVCALvGwWMIB0srqdSgvgVMDsXA1pEUEnRke8H4W8uaVDLYVrUEg&X-Amz-Signature=ebc4ba8a4df723f7a9608a4472c9d37988ff9c4d4e6e831359dad1ae17008ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSHDID2%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBlY8oSGUNqUras89spIo2YktVmPtRH6doXdUpOWUcZHAiBundO5mY0SogrYzEu6NFCzYbw7gYd1GjgnhS%2FkCHbHjyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMReGW5ab1kQFtM7PqKtwDK9tdWFXQUZZvc5cv8%2Bka0MmDtQGQotz9i%2FKBEBnjyBPgGTiNnD0wTt9dwqAEEggItbWzhlXEl1bkxFaGI5CnWnyL4O0F%2FAki57vNF2YBjtOj6PyQbt7Kll13OIeTO2nBCGXDW0EXo01fo7OuSU6%2B0DsymuOT%2FWQ20BHHU2gfWeiNnrOl9EBn9true0yEm%2BD3g8qOgxcZV9wEyK2wKskfR3X5PcSJXbo36sNFLm%2FzcQuOIW%2FeSfosfCXSIg5mGbhZYjFNhyLVEuCut4m690PQuRvoKK14q%2FKUgi%2FacrqLyHhKfCHFi4fbh6n91jiPC2jXEWb2MGEzo6xxXutcHJJhD5wgnx6leyo5RMtGQYBV1AYZnOPqn%2Fo%2FnWR8EQHsVKFQJyHojOwpBDaIuwm2HwjP50hkSQKkwOZt%2Bs%2BYLxRYrmndZBISlfW0houQ%2Bji3vbHWftQvnOPD%2F5gkXEMQmUsWU28IuKb6xYakSEhyKEWTq0d41bEFAKvPR352%2Fip5SqBfMeOCc%2FeZOu4OR6BseA3%2BMhbDZxivj1en6PZZiyeIxUmCUuBCEFXIbc2UFhvATf6MS6sDJ%2FECBtCODR42dE6y25uc%2B46MquPvl95sBPwBWWji8BAZ4gvFodH0dHwwzaihxwY6pgExLknkOgtG9NzVX2tDvoccTpjzVhB4PyfxaMta8ShawdBAGYS4iHbIwa2joN5Q99Luf7i4NHvnq7pi%2BroxzUMfge4vWy15mlHrLsI9EqbtUqJgm5FzVLLblYoXHo0qXTVnf8%2BZRL1PYZ1SMfhW3OsHEzOL%2BzbiRLvBGNHBPjLttVCALvGwWMIB0srqdSgvgVMDsXA1pEUEnRke8H4W8uaVDLYVrUEg&X-Amz-Signature=162512fbf4817cbcb051f6a0a84a679af620f9324e280a53e887e990a441c0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

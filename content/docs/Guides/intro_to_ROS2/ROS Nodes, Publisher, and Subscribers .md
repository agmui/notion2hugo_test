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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D7ROIU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCj6PWk4WUl3XV4E4ZMqIMEQKtIUN6YgWtRsPjd7dXXFwIgEA7OB1JnHXT8EvC5Jt38UrcN9nhcmlDV46OoQCpCiJkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBBw%2Bplraaboz1BQZSrcAxB%2BMRVMjkSqLA3D8HusWrnmJ1w2vaDtCl3Ug7pk1uG0SYDu%2B1V7bUoHp65SY7K9qu0KgHJJwABJaulz521X0Gdb09PHuanl5IVduiKy2Pkm2nih3Vc0VGpIoUoLAT4LV1WaQzwWtCWFqaQ8V6zAQ6ROsGAmuhZfDPeH6ljNH9CYn%2BOBUXOwiVIOq7cJJ6NzcjVfho6HL5D49JRPSwj9sCIHQQD5RTBuHaQeBrWTuWflZAeTtwCTPjHxNdvpcFhso9%2FNtvuLKPemsqbI4TIhsjKo%2F%2B44%2BfYa%2FsiaR3qDVfMPihXpapb%2BQwolUDpMDT0tv1EIxB%2BxzCUBDQ%2B95j3UnZVJh8Yl4S6IssEeRwjF2QlqB7crWmcZ%2FzzM5HRCm5C53rV2EAN1ws0iDJMaRnEri6WYZU0n%2FsG3%2Br2SEZfoNAt383J6FFds2iF9PwZSGyHJRXwxpUZo8fyPWKVd3YhTytRr%2FuFDhxsWvwHJdT0LV2fDfO%2BV9U0eUTjpiZ5PG6ILiAjnLkcnw9gUL%2FgLntHCmPVRoO92s7nyM75N02oVeBE5bPfvmTcsVaM69DVABjF3VKwtfG5YV9LoCzNew8HWisy7Ly0X6Yrv7E0P9TGk8ErO1XqlYSdiyPa8cNOWMP7sj70GOqUBv29fKmCMWNmbcl5C3IFsEubceE7ldNy85A4rE25nCHxSD9L3hHbTC2ZSc5d%2F%2FzzWljTtsw75CnE1Xkct00rKMswZHKAcbxUqiF6Oy5HaouRpXWrpMzOXLnmn6qz85xKLoZFH6Dpj14m4KQy%2Bx6PSL8bjF%2BzbaIoG654TG9uEmJ%2FbGkrC%2Frit1eX2v8hpujkOceOqRUl67XcF4X6Z18pLHDM4Rw7t&X-Amz-Signature=82a80f72637abbe5e493df62516a6249ac28e6a771f80574f4f83f3c800ec428&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D7ROIU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCj6PWk4WUl3XV4E4ZMqIMEQKtIUN6YgWtRsPjd7dXXFwIgEA7OB1JnHXT8EvC5Jt38UrcN9nhcmlDV46OoQCpCiJkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBBw%2Bplraaboz1BQZSrcAxB%2BMRVMjkSqLA3D8HusWrnmJ1w2vaDtCl3Ug7pk1uG0SYDu%2B1V7bUoHp65SY7K9qu0KgHJJwABJaulz521X0Gdb09PHuanl5IVduiKy2Pkm2nih3Vc0VGpIoUoLAT4LV1WaQzwWtCWFqaQ8V6zAQ6ROsGAmuhZfDPeH6ljNH9CYn%2BOBUXOwiVIOq7cJJ6NzcjVfho6HL5D49JRPSwj9sCIHQQD5RTBuHaQeBrWTuWflZAeTtwCTPjHxNdvpcFhso9%2FNtvuLKPemsqbI4TIhsjKo%2F%2B44%2BfYa%2FsiaR3qDVfMPihXpapb%2BQwolUDpMDT0tv1EIxB%2BxzCUBDQ%2B95j3UnZVJh8Yl4S6IssEeRwjF2QlqB7crWmcZ%2FzzM5HRCm5C53rV2EAN1ws0iDJMaRnEri6WYZU0n%2FsG3%2Br2SEZfoNAt383J6FFds2iF9PwZSGyHJRXwxpUZo8fyPWKVd3YhTytRr%2FuFDhxsWvwHJdT0LV2fDfO%2BV9U0eUTjpiZ5PG6ILiAjnLkcnw9gUL%2FgLntHCmPVRoO92s7nyM75N02oVeBE5bPfvmTcsVaM69DVABjF3VKwtfG5YV9LoCzNew8HWisy7Ly0X6Yrv7E0P9TGk8ErO1XqlYSdiyPa8cNOWMP7sj70GOqUBv29fKmCMWNmbcl5C3IFsEubceE7ldNy85A4rE25nCHxSD9L3hHbTC2ZSc5d%2F%2FzzWljTtsw75CnE1Xkct00rKMswZHKAcbxUqiF6Oy5HaouRpXWrpMzOXLnmn6qz85xKLoZFH6Dpj14m4KQy%2Bx6PSL8bjF%2BzbaIoG654TG9uEmJ%2FbGkrC%2Frit1eX2v8hpujkOceOqRUl67XcF4X6Z18pLHDM4Rw7t&X-Amz-Signature=bf15f51851aa483bc8a4b273bcf0d11938cea53099872ad8fc035da683106bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D7ROIU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCj6PWk4WUl3XV4E4ZMqIMEQKtIUN6YgWtRsPjd7dXXFwIgEA7OB1JnHXT8EvC5Jt38UrcN9nhcmlDV46OoQCpCiJkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBBw%2Bplraaboz1BQZSrcAxB%2BMRVMjkSqLA3D8HusWrnmJ1w2vaDtCl3Ug7pk1uG0SYDu%2B1V7bUoHp65SY7K9qu0KgHJJwABJaulz521X0Gdb09PHuanl5IVduiKy2Pkm2nih3Vc0VGpIoUoLAT4LV1WaQzwWtCWFqaQ8V6zAQ6ROsGAmuhZfDPeH6ljNH9CYn%2BOBUXOwiVIOq7cJJ6NzcjVfho6HL5D49JRPSwj9sCIHQQD5RTBuHaQeBrWTuWflZAeTtwCTPjHxNdvpcFhso9%2FNtvuLKPemsqbI4TIhsjKo%2F%2B44%2BfYa%2FsiaR3qDVfMPihXpapb%2BQwolUDpMDT0tv1EIxB%2BxzCUBDQ%2B95j3UnZVJh8Yl4S6IssEeRwjF2QlqB7crWmcZ%2FzzM5HRCm5C53rV2EAN1ws0iDJMaRnEri6WYZU0n%2FsG3%2Br2SEZfoNAt383J6FFds2iF9PwZSGyHJRXwxpUZo8fyPWKVd3YhTytRr%2FuFDhxsWvwHJdT0LV2fDfO%2BV9U0eUTjpiZ5PG6ILiAjnLkcnw9gUL%2FgLntHCmPVRoO92s7nyM75N02oVeBE5bPfvmTcsVaM69DVABjF3VKwtfG5YV9LoCzNew8HWisy7Ly0X6Yrv7E0P9TGk8ErO1XqlYSdiyPa8cNOWMP7sj70GOqUBv29fKmCMWNmbcl5C3IFsEubceE7ldNy85A4rE25nCHxSD9L3hHbTC2ZSc5d%2F%2FzzWljTtsw75CnE1Xkct00rKMswZHKAcbxUqiF6Oy5HaouRpXWrpMzOXLnmn6qz85xKLoZFH6Dpj14m4KQy%2Bx6PSL8bjF%2BzbaIoG654TG9uEmJ%2FbGkrC%2Frit1eX2v8hpujkOceOqRUl67XcF4X6Z18pLHDM4Rw7t&X-Amz-Signature=830722342cd14a10fb54eb1f8cb9443ceed29c9fb7d083ad3b861b2e99e31178&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D7ROIU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCj6PWk4WUl3XV4E4ZMqIMEQKtIUN6YgWtRsPjd7dXXFwIgEA7OB1JnHXT8EvC5Jt38UrcN9nhcmlDV46OoQCpCiJkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBBw%2Bplraaboz1BQZSrcAxB%2BMRVMjkSqLA3D8HusWrnmJ1w2vaDtCl3Ug7pk1uG0SYDu%2B1V7bUoHp65SY7K9qu0KgHJJwABJaulz521X0Gdb09PHuanl5IVduiKy2Pkm2nih3Vc0VGpIoUoLAT4LV1WaQzwWtCWFqaQ8V6zAQ6ROsGAmuhZfDPeH6ljNH9CYn%2BOBUXOwiVIOq7cJJ6NzcjVfho6HL5D49JRPSwj9sCIHQQD5RTBuHaQeBrWTuWflZAeTtwCTPjHxNdvpcFhso9%2FNtvuLKPemsqbI4TIhsjKo%2F%2B44%2BfYa%2FsiaR3qDVfMPihXpapb%2BQwolUDpMDT0tv1EIxB%2BxzCUBDQ%2B95j3UnZVJh8Yl4S6IssEeRwjF2QlqB7crWmcZ%2FzzM5HRCm5C53rV2EAN1ws0iDJMaRnEri6WYZU0n%2FsG3%2Br2SEZfoNAt383J6FFds2iF9PwZSGyHJRXwxpUZo8fyPWKVd3YhTytRr%2FuFDhxsWvwHJdT0LV2fDfO%2BV9U0eUTjpiZ5PG6ILiAjnLkcnw9gUL%2FgLntHCmPVRoO92s7nyM75N02oVeBE5bPfvmTcsVaM69DVABjF3VKwtfG5YV9LoCzNew8HWisy7Ly0X6Yrv7E0P9TGk8ErO1XqlYSdiyPa8cNOWMP7sj70GOqUBv29fKmCMWNmbcl5C3IFsEubceE7ldNy85A4rE25nCHxSD9L3hHbTC2ZSc5d%2F%2FzzWljTtsw75CnE1Xkct00rKMswZHKAcbxUqiF6Oy5HaouRpXWrpMzOXLnmn6qz85xKLoZFH6Dpj14m4KQy%2Bx6PSL8bjF%2BzbaIoG654TG9uEmJ%2FbGkrC%2Frit1eX2v8hpujkOceOqRUl67XcF4X6Z18pLHDM4Rw7t&X-Amz-Signature=33167568626962a65b4b283c18b39b0ab9a6e7ea3cf3ea7ae2409d3cbb9e6a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D7ROIU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCj6PWk4WUl3XV4E4ZMqIMEQKtIUN6YgWtRsPjd7dXXFwIgEA7OB1JnHXT8EvC5Jt38UrcN9nhcmlDV46OoQCpCiJkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBBw%2Bplraaboz1BQZSrcAxB%2BMRVMjkSqLA3D8HusWrnmJ1w2vaDtCl3Ug7pk1uG0SYDu%2B1V7bUoHp65SY7K9qu0KgHJJwABJaulz521X0Gdb09PHuanl5IVduiKy2Pkm2nih3Vc0VGpIoUoLAT4LV1WaQzwWtCWFqaQ8V6zAQ6ROsGAmuhZfDPeH6ljNH9CYn%2BOBUXOwiVIOq7cJJ6NzcjVfho6HL5D49JRPSwj9sCIHQQD5RTBuHaQeBrWTuWflZAeTtwCTPjHxNdvpcFhso9%2FNtvuLKPemsqbI4TIhsjKo%2F%2B44%2BfYa%2FsiaR3qDVfMPihXpapb%2BQwolUDpMDT0tv1EIxB%2BxzCUBDQ%2B95j3UnZVJh8Yl4S6IssEeRwjF2QlqB7crWmcZ%2FzzM5HRCm5C53rV2EAN1ws0iDJMaRnEri6WYZU0n%2FsG3%2Br2SEZfoNAt383J6FFds2iF9PwZSGyHJRXwxpUZo8fyPWKVd3YhTytRr%2FuFDhxsWvwHJdT0LV2fDfO%2BV9U0eUTjpiZ5PG6ILiAjnLkcnw9gUL%2FgLntHCmPVRoO92s7nyM75N02oVeBE5bPfvmTcsVaM69DVABjF3VKwtfG5YV9LoCzNew8HWisy7Ly0X6Yrv7E0P9TGk8ErO1XqlYSdiyPa8cNOWMP7sj70GOqUBv29fKmCMWNmbcl5C3IFsEubceE7ldNy85A4rE25nCHxSD9L3hHbTC2ZSc5d%2F%2FzzWljTtsw75CnE1Xkct00rKMswZHKAcbxUqiF6Oy5HaouRpXWrpMzOXLnmn6qz85xKLoZFH6Dpj14m4KQy%2Bx6PSL8bjF%2BzbaIoG654TG9uEmJ%2FbGkrC%2Frit1eX2v8hpujkOceOqRUl67XcF4X6Z18pLHDM4Rw7t&X-Amz-Signature=ba8ee788d808d4c4f2e2a6036a3ec6fd98aaa32b265eb3c98cb39ae4f3be7816&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D7ROIU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCj6PWk4WUl3XV4E4ZMqIMEQKtIUN6YgWtRsPjd7dXXFwIgEA7OB1JnHXT8EvC5Jt38UrcN9nhcmlDV46OoQCpCiJkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBBw%2Bplraaboz1BQZSrcAxB%2BMRVMjkSqLA3D8HusWrnmJ1w2vaDtCl3Ug7pk1uG0SYDu%2B1V7bUoHp65SY7K9qu0KgHJJwABJaulz521X0Gdb09PHuanl5IVduiKy2Pkm2nih3Vc0VGpIoUoLAT4LV1WaQzwWtCWFqaQ8V6zAQ6ROsGAmuhZfDPeH6ljNH9CYn%2BOBUXOwiVIOq7cJJ6NzcjVfho6HL5D49JRPSwj9sCIHQQD5RTBuHaQeBrWTuWflZAeTtwCTPjHxNdvpcFhso9%2FNtvuLKPemsqbI4TIhsjKo%2F%2B44%2BfYa%2FsiaR3qDVfMPihXpapb%2BQwolUDpMDT0tv1EIxB%2BxzCUBDQ%2B95j3UnZVJh8Yl4S6IssEeRwjF2QlqB7crWmcZ%2FzzM5HRCm5C53rV2EAN1ws0iDJMaRnEri6WYZU0n%2FsG3%2Br2SEZfoNAt383J6FFds2iF9PwZSGyHJRXwxpUZo8fyPWKVd3YhTytRr%2FuFDhxsWvwHJdT0LV2fDfO%2BV9U0eUTjpiZ5PG6ILiAjnLkcnw9gUL%2FgLntHCmPVRoO92s7nyM75N02oVeBE5bPfvmTcsVaM69DVABjF3VKwtfG5YV9LoCzNew8HWisy7Ly0X6Yrv7E0P9TGk8ErO1XqlYSdiyPa8cNOWMP7sj70GOqUBv29fKmCMWNmbcl5C3IFsEubceE7ldNy85A4rE25nCHxSD9L3hHbTC2ZSc5d%2F%2FzzWljTtsw75CnE1Xkct00rKMswZHKAcbxUqiF6Oy5HaouRpXWrpMzOXLnmn6qz85xKLoZFH6Dpj14m4KQy%2Bx6PSL8bjF%2BzbaIoG654TG9uEmJ%2FbGkrC%2Frit1eX2v8hpujkOceOqRUl67XcF4X6Z18pLHDM4Rw7t&X-Amz-Signature=4edf2aecce61cddcf51c2dfe0190f9a4404b00a678376b66b73a72fab64c11e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D7ROIU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCj6PWk4WUl3XV4E4ZMqIMEQKtIUN6YgWtRsPjd7dXXFwIgEA7OB1JnHXT8EvC5Jt38UrcN9nhcmlDV46OoQCpCiJkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBBw%2Bplraaboz1BQZSrcAxB%2BMRVMjkSqLA3D8HusWrnmJ1w2vaDtCl3Ug7pk1uG0SYDu%2B1V7bUoHp65SY7K9qu0KgHJJwABJaulz521X0Gdb09PHuanl5IVduiKy2Pkm2nih3Vc0VGpIoUoLAT4LV1WaQzwWtCWFqaQ8V6zAQ6ROsGAmuhZfDPeH6ljNH9CYn%2BOBUXOwiVIOq7cJJ6NzcjVfho6HL5D49JRPSwj9sCIHQQD5RTBuHaQeBrWTuWflZAeTtwCTPjHxNdvpcFhso9%2FNtvuLKPemsqbI4TIhsjKo%2F%2B44%2BfYa%2FsiaR3qDVfMPihXpapb%2BQwolUDpMDT0tv1EIxB%2BxzCUBDQ%2B95j3UnZVJh8Yl4S6IssEeRwjF2QlqB7crWmcZ%2FzzM5HRCm5C53rV2EAN1ws0iDJMaRnEri6WYZU0n%2FsG3%2Br2SEZfoNAt383J6FFds2iF9PwZSGyHJRXwxpUZo8fyPWKVd3YhTytRr%2FuFDhxsWvwHJdT0LV2fDfO%2BV9U0eUTjpiZ5PG6ILiAjnLkcnw9gUL%2FgLntHCmPVRoO92s7nyM75N02oVeBE5bPfvmTcsVaM69DVABjF3VKwtfG5YV9LoCzNew8HWisy7Ly0X6Yrv7E0P9TGk8ErO1XqlYSdiyPa8cNOWMP7sj70GOqUBv29fKmCMWNmbcl5C3IFsEubceE7ldNy85A4rE25nCHxSD9L3hHbTC2ZSc5d%2F%2FzzWljTtsw75CnE1Xkct00rKMswZHKAcbxUqiF6Oy5HaouRpXWrpMzOXLnmn6qz85xKLoZFH6Dpj14m4KQy%2Bx6PSL8bjF%2BzbaIoG654TG9uEmJ%2FbGkrC%2Frit1eX2v8hpujkOceOqRUl67XcF4X6Z18pLHDM4Rw7t&X-Amz-Signature=a350fc3f3f5ce0e5edd2d501c887db5b92c2da528100d67e136e3df0bd0100ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4D7ROIU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCj6PWk4WUl3XV4E4ZMqIMEQKtIUN6YgWtRsPjd7dXXFwIgEA7OB1JnHXT8EvC5Jt38UrcN9nhcmlDV46OoQCpCiJkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBBw%2Bplraaboz1BQZSrcAxB%2BMRVMjkSqLA3D8HusWrnmJ1w2vaDtCl3Ug7pk1uG0SYDu%2B1V7bUoHp65SY7K9qu0KgHJJwABJaulz521X0Gdb09PHuanl5IVduiKy2Pkm2nih3Vc0VGpIoUoLAT4LV1WaQzwWtCWFqaQ8V6zAQ6ROsGAmuhZfDPeH6ljNH9CYn%2BOBUXOwiVIOq7cJJ6NzcjVfho6HL5D49JRPSwj9sCIHQQD5RTBuHaQeBrWTuWflZAeTtwCTPjHxNdvpcFhso9%2FNtvuLKPemsqbI4TIhsjKo%2F%2B44%2BfYa%2FsiaR3qDVfMPihXpapb%2BQwolUDpMDT0tv1EIxB%2BxzCUBDQ%2B95j3UnZVJh8Yl4S6IssEeRwjF2QlqB7crWmcZ%2FzzM5HRCm5C53rV2EAN1ws0iDJMaRnEri6WYZU0n%2FsG3%2Br2SEZfoNAt383J6FFds2iF9PwZSGyHJRXwxpUZo8fyPWKVd3YhTytRr%2FuFDhxsWvwHJdT0LV2fDfO%2BV9U0eUTjpiZ5PG6ILiAjnLkcnw9gUL%2FgLntHCmPVRoO92s7nyM75N02oVeBE5bPfvmTcsVaM69DVABjF3VKwtfG5YV9LoCzNew8HWisy7Ly0X6Yrv7E0P9TGk8ErO1XqlYSdiyPa8cNOWMP7sj70GOqUBv29fKmCMWNmbcl5C3IFsEubceE7ldNy85A4rE25nCHxSD9L3hHbTC2ZSc5d%2F%2FzzWljTtsw75CnE1Xkct00rKMswZHKAcbxUqiF6Oy5HaouRpXWrpMzOXLnmn6qz85xKLoZFH6Dpj14m4KQy%2Bx6PSL8bjF%2BzbaIoG654TG9uEmJ%2FbGkrC%2Frit1eX2v8hpujkOceOqRUl67XcF4X6Z18pLHDM4Rw7t&X-Amz-Signature=dcf84f09ff27b9a4c11d4f2cabbc55a7d4a99a54acc634b06bc1dcd25469b549&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=f75c109fcfa5a046ba13ac0d361db42379143bb2c25fe6a6471e16305689eed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=549096d9bc5365ed7a0a4c097d251608ba2d55e05244334c9bc9909326edafc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=48b769f9ee50a5c46091c1e1d675fe5c930bce91928f632e97d32b0a5e072cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=7d41665314d56dc6051d2eb3b500d5b127876c8087e4e987debf4814b8a50338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=c6179584566356b913ec0136774f06c1c6424a03fc14036bd78b1de77b41140b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=50205a8e231823448ca23090f21d24504763398199b69aa7c2f9cf62a806d604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=018dc425035602834f66afe57884ec5ce7c3080b99dbad677a7b8340a407f355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATCLGMP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD0C%2BQZDdatXtp89AhUA3ewjyug2r7OU9o5m03ZfnyGTgIgNg1H6Yv6oblP%2FP%2Fku%2BjgBCrbFNfYbCFIAib7mRJDu04q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLfCVBZOgtY24LuNNCrcA%2FluEC0gU6WX6xIoesrQQp0%2BDywl6qKJ11MIfwb9UdhzXLjvlWChBkzIhcHweZINVMpSbDV84XuSnA6zbZfvDbYLlEoPNzghUma9EX78LQprvLpi7odQwuKD8z%2FfwEOL3DpFhJXt5%2F45iyfVl1nFbmva48cmzk%2BF6Vn%2BP7CQRaABWUoMTtrsmWu4EqRn9h7ssrP7msfItLK3hKBnPXmkrbVCjMv%2F6FRwz5FrLPHBeDBOKNVEzG0XsE9c4Ubvjwz5g1XKoVWEnYOH61%2BKVcHceTtE7JHPyv%2Bb7shqnmdYuq0JRdYHYNgIcfwtfuEu8gidBCO5HoBbOc%2FzB9MpfuUAOL7xs94xECGrSjQLsK64YMTzUljxcUUD16IPYivm2tpMN%2FxBaMosNuJKpbx5%2BBCTbk6D2TwslcD%2FI3sN%2FHrcxLOtxF3L5b8Cp120sb9KHKSAne%2Bi5NtjYbzWtnBI%2BV4voNYB7tMLc%2B%2FMbkx1muqxbYfeDRvHOivQmGssCFRIT%2Fd7NCptNt9yFLyHw0pGtMTv8evhlUxZQPSNKfp%2BSd%2BmcKFiwmcliLJ7FQSMVHDh2QeG%2FhsddCPwTCkpcXHHvwRB1lAXo07iEJ1ir6em8x4oTiiCb2z8C2z29w6U5FWcMMiF1MMGOqUBZuYW92Th4Nrnehi%2BYjhqvxjv5Lr%2FFdJDYkx9NjS3ojGgp%2FTFMzZx80a%2FBdmqLntHDtJdR%2B1OBGJR8faIwOn6vCPDsAXNZnyP55CiE2c6X7vlV%2BNJTeGqdYyM4MTXSr9SUK7vHawe4C9WJzBhgO1SbqfOZx3eyhcq4hirPTuv6ftJgA%2FdCaeklGNrqKK3kJHTKTQ1Q9WwVTG1t2E2DCAqXKq00%2BYS&X-Amz-Signature=676ad4cbfc38095dc76ae4f8fa7efb70961e8eb45bdc3947345aaf25fab152f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

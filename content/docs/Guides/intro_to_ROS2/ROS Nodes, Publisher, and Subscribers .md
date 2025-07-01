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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV76CVXL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTh47%2BwqdPqMWpz6A3w%2Fug949dPvpYfmiQxF0i3WcBqwIgUgaQgy4VuaIunirJivvNX5%2Bl%2BWGfIVqJphet%2B%2FW%2BXccqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyfSNcRHg6XpEd2qSrcA%2BgEh2qOb7sFoIojpIBZSVOjhf%2Fc3M1GrxK259SftHW1qNYIbJbbPcZ8U3fVBHf3WeavbDGKCzDj%2F45Uo1xczO7Z8TaJvEFLjI3tv6%2Ff5WlnIMRTk3%2FMSU%2FNwXt1zNXaXNkMNUBygStKtXC%2FCvmBe%2BWOkwhrVyoqS93QIJgSR%2BYW5UoyWy5FLW7FsZRybnxu6kgIIRDcw8IVi4XDQ7Ed%2BIDR1inDL7ST%2FSYIKDYHmusTtig7vWFgKeMfG6tKEV3By2wDQgkjavMWUXpUf2VQOYTMBMMlMlmBwZW%2FFMxnJqnNsbNgGn0mA2D2tXPmfibqE9n46YiRR%2Fg4HrdEV%2FPFc7dNljibEo8l%2BNSyVgV9i5FSu5wNGSaAjs%2BIsXLwMvQbC0ShT8IN3lmfkveiqnVvmN8LQP7%2B6pBHX2sQooF5gtSn4sNl6%2BPtIkNZ%2BQcZBsCCio04Kvo77TA69MH8v1cQLHzbXI97JsXCWfSBtyFt3%2BhqA8s2VI7Gg7No8BJH6IlNxO82DyUo3kJvXNrROIZHjqhWMA1w%2F4jFtQjSj58IVnJpdNDctA6cVoAxD2TNtu1Okf2WJXloqUExbKHHTwK1gDDne7q77MICm8CA4%2BrOMpiHfWNfq6fW%2BL%2BZQHBvMIHIkcMGOqUBvXSTVfbKvEWcVED1dirS4376HLpM1GK6pQFEVSelgJdtZGg785%2FmhxBDVzdBrmUuJYiuwtlIi7NP8omBTEJTct0AgaNcJfh6PaulkRfFTZwF7kgi7vhTh3nXYj7g8%2BsngjJBJkyiZkBnegmuycjV%2FcbImhc3Pu1d1MBwlap%2FrsX%2BeSDxp5eMThCCFCf16Bm21XnQp%2FvO%2BiprrMD0F5AvwuqnDYEA&X-Amz-Signature=fc1b19992a748c08c386a079b4c7e6c185daa11af5ba1b0ee3c28424cf6592df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV76CVXL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTh47%2BwqdPqMWpz6A3w%2Fug949dPvpYfmiQxF0i3WcBqwIgUgaQgy4VuaIunirJivvNX5%2Bl%2BWGfIVqJphet%2B%2FW%2BXccqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyfSNcRHg6XpEd2qSrcA%2BgEh2qOb7sFoIojpIBZSVOjhf%2Fc3M1GrxK259SftHW1qNYIbJbbPcZ8U3fVBHf3WeavbDGKCzDj%2F45Uo1xczO7Z8TaJvEFLjI3tv6%2Ff5WlnIMRTk3%2FMSU%2FNwXt1zNXaXNkMNUBygStKtXC%2FCvmBe%2BWOkwhrVyoqS93QIJgSR%2BYW5UoyWy5FLW7FsZRybnxu6kgIIRDcw8IVi4XDQ7Ed%2BIDR1inDL7ST%2FSYIKDYHmusTtig7vWFgKeMfG6tKEV3By2wDQgkjavMWUXpUf2VQOYTMBMMlMlmBwZW%2FFMxnJqnNsbNgGn0mA2D2tXPmfibqE9n46YiRR%2Fg4HrdEV%2FPFc7dNljibEo8l%2BNSyVgV9i5FSu5wNGSaAjs%2BIsXLwMvQbC0ShT8IN3lmfkveiqnVvmN8LQP7%2B6pBHX2sQooF5gtSn4sNl6%2BPtIkNZ%2BQcZBsCCio04Kvo77TA69MH8v1cQLHzbXI97JsXCWfSBtyFt3%2BhqA8s2VI7Gg7No8BJH6IlNxO82DyUo3kJvXNrROIZHjqhWMA1w%2F4jFtQjSj58IVnJpdNDctA6cVoAxD2TNtu1Okf2WJXloqUExbKHHTwK1gDDne7q77MICm8CA4%2BrOMpiHfWNfq6fW%2BL%2BZQHBvMIHIkcMGOqUBvXSTVfbKvEWcVED1dirS4376HLpM1GK6pQFEVSelgJdtZGg785%2FmhxBDVzdBrmUuJYiuwtlIi7NP8omBTEJTct0AgaNcJfh6PaulkRfFTZwF7kgi7vhTh3nXYj7g8%2BsngjJBJkyiZkBnegmuycjV%2FcbImhc3Pu1d1MBwlap%2FrsX%2BeSDxp5eMThCCFCf16Bm21XnQp%2FvO%2BiprrMD0F5AvwuqnDYEA&X-Amz-Signature=02a556d0cc3d29d85e2312e210fd1c3b060a96b437440844f44340c58dd215bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV76CVXL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTh47%2BwqdPqMWpz6A3w%2Fug949dPvpYfmiQxF0i3WcBqwIgUgaQgy4VuaIunirJivvNX5%2Bl%2BWGfIVqJphet%2B%2FW%2BXccqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyfSNcRHg6XpEd2qSrcA%2BgEh2qOb7sFoIojpIBZSVOjhf%2Fc3M1GrxK259SftHW1qNYIbJbbPcZ8U3fVBHf3WeavbDGKCzDj%2F45Uo1xczO7Z8TaJvEFLjI3tv6%2Ff5WlnIMRTk3%2FMSU%2FNwXt1zNXaXNkMNUBygStKtXC%2FCvmBe%2BWOkwhrVyoqS93QIJgSR%2BYW5UoyWy5FLW7FsZRybnxu6kgIIRDcw8IVi4XDQ7Ed%2BIDR1inDL7ST%2FSYIKDYHmusTtig7vWFgKeMfG6tKEV3By2wDQgkjavMWUXpUf2VQOYTMBMMlMlmBwZW%2FFMxnJqnNsbNgGn0mA2D2tXPmfibqE9n46YiRR%2Fg4HrdEV%2FPFc7dNljibEo8l%2BNSyVgV9i5FSu5wNGSaAjs%2BIsXLwMvQbC0ShT8IN3lmfkveiqnVvmN8LQP7%2B6pBHX2sQooF5gtSn4sNl6%2BPtIkNZ%2BQcZBsCCio04Kvo77TA69MH8v1cQLHzbXI97JsXCWfSBtyFt3%2BhqA8s2VI7Gg7No8BJH6IlNxO82DyUo3kJvXNrROIZHjqhWMA1w%2F4jFtQjSj58IVnJpdNDctA6cVoAxD2TNtu1Okf2WJXloqUExbKHHTwK1gDDne7q77MICm8CA4%2BrOMpiHfWNfq6fW%2BL%2BZQHBvMIHIkcMGOqUBvXSTVfbKvEWcVED1dirS4376HLpM1GK6pQFEVSelgJdtZGg785%2FmhxBDVzdBrmUuJYiuwtlIi7NP8omBTEJTct0AgaNcJfh6PaulkRfFTZwF7kgi7vhTh3nXYj7g8%2BsngjJBJkyiZkBnegmuycjV%2FcbImhc3Pu1d1MBwlap%2FrsX%2BeSDxp5eMThCCFCf16Bm21XnQp%2FvO%2BiprrMD0F5AvwuqnDYEA&X-Amz-Signature=571de625871501448877f6fd7eec1e5b6f3c86347d5e41e32266b1ca42395a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV76CVXL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTh47%2BwqdPqMWpz6A3w%2Fug949dPvpYfmiQxF0i3WcBqwIgUgaQgy4VuaIunirJivvNX5%2Bl%2BWGfIVqJphet%2B%2FW%2BXccqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyfSNcRHg6XpEd2qSrcA%2BgEh2qOb7sFoIojpIBZSVOjhf%2Fc3M1GrxK259SftHW1qNYIbJbbPcZ8U3fVBHf3WeavbDGKCzDj%2F45Uo1xczO7Z8TaJvEFLjI3tv6%2Ff5WlnIMRTk3%2FMSU%2FNwXt1zNXaXNkMNUBygStKtXC%2FCvmBe%2BWOkwhrVyoqS93QIJgSR%2BYW5UoyWy5FLW7FsZRybnxu6kgIIRDcw8IVi4XDQ7Ed%2BIDR1inDL7ST%2FSYIKDYHmusTtig7vWFgKeMfG6tKEV3By2wDQgkjavMWUXpUf2VQOYTMBMMlMlmBwZW%2FFMxnJqnNsbNgGn0mA2D2tXPmfibqE9n46YiRR%2Fg4HrdEV%2FPFc7dNljibEo8l%2BNSyVgV9i5FSu5wNGSaAjs%2BIsXLwMvQbC0ShT8IN3lmfkveiqnVvmN8LQP7%2B6pBHX2sQooF5gtSn4sNl6%2BPtIkNZ%2BQcZBsCCio04Kvo77TA69MH8v1cQLHzbXI97JsXCWfSBtyFt3%2BhqA8s2VI7Gg7No8BJH6IlNxO82DyUo3kJvXNrROIZHjqhWMA1w%2F4jFtQjSj58IVnJpdNDctA6cVoAxD2TNtu1Okf2WJXloqUExbKHHTwK1gDDne7q77MICm8CA4%2BrOMpiHfWNfq6fW%2BL%2BZQHBvMIHIkcMGOqUBvXSTVfbKvEWcVED1dirS4376HLpM1GK6pQFEVSelgJdtZGg785%2FmhxBDVzdBrmUuJYiuwtlIi7NP8omBTEJTct0AgaNcJfh6PaulkRfFTZwF7kgi7vhTh3nXYj7g8%2BsngjJBJkyiZkBnegmuycjV%2FcbImhc3Pu1d1MBwlap%2FrsX%2BeSDxp5eMThCCFCf16Bm21XnQp%2FvO%2BiprrMD0F5AvwuqnDYEA&X-Amz-Signature=16c094f238ae5e94066a13e2c1b43a6c4458e64a996b0253befec27697cde557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV76CVXL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTh47%2BwqdPqMWpz6A3w%2Fug949dPvpYfmiQxF0i3WcBqwIgUgaQgy4VuaIunirJivvNX5%2Bl%2BWGfIVqJphet%2B%2FW%2BXccqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyfSNcRHg6XpEd2qSrcA%2BgEh2qOb7sFoIojpIBZSVOjhf%2Fc3M1GrxK259SftHW1qNYIbJbbPcZ8U3fVBHf3WeavbDGKCzDj%2F45Uo1xczO7Z8TaJvEFLjI3tv6%2Ff5WlnIMRTk3%2FMSU%2FNwXt1zNXaXNkMNUBygStKtXC%2FCvmBe%2BWOkwhrVyoqS93QIJgSR%2BYW5UoyWy5FLW7FsZRybnxu6kgIIRDcw8IVi4XDQ7Ed%2BIDR1inDL7ST%2FSYIKDYHmusTtig7vWFgKeMfG6tKEV3By2wDQgkjavMWUXpUf2VQOYTMBMMlMlmBwZW%2FFMxnJqnNsbNgGn0mA2D2tXPmfibqE9n46YiRR%2Fg4HrdEV%2FPFc7dNljibEo8l%2BNSyVgV9i5FSu5wNGSaAjs%2BIsXLwMvQbC0ShT8IN3lmfkveiqnVvmN8LQP7%2B6pBHX2sQooF5gtSn4sNl6%2BPtIkNZ%2BQcZBsCCio04Kvo77TA69MH8v1cQLHzbXI97JsXCWfSBtyFt3%2BhqA8s2VI7Gg7No8BJH6IlNxO82DyUo3kJvXNrROIZHjqhWMA1w%2F4jFtQjSj58IVnJpdNDctA6cVoAxD2TNtu1Okf2WJXloqUExbKHHTwK1gDDne7q77MICm8CA4%2BrOMpiHfWNfq6fW%2BL%2BZQHBvMIHIkcMGOqUBvXSTVfbKvEWcVED1dirS4376HLpM1GK6pQFEVSelgJdtZGg785%2FmhxBDVzdBrmUuJYiuwtlIi7NP8omBTEJTct0AgaNcJfh6PaulkRfFTZwF7kgi7vhTh3nXYj7g8%2BsngjJBJkyiZkBnegmuycjV%2FcbImhc3Pu1d1MBwlap%2FrsX%2BeSDxp5eMThCCFCf16Bm21XnQp%2FvO%2BiprrMD0F5AvwuqnDYEA&X-Amz-Signature=f1edd9c9cedef9b59e423c409b93e20ca2b161db410e0cc565c8c0ac75e5e2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV76CVXL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTh47%2BwqdPqMWpz6A3w%2Fug949dPvpYfmiQxF0i3WcBqwIgUgaQgy4VuaIunirJivvNX5%2Bl%2BWGfIVqJphet%2B%2FW%2BXccqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyfSNcRHg6XpEd2qSrcA%2BgEh2qOb7sFoIojpIBZSVOjhf%2Fc3M1GrxK259SftHW1qNYIbJbbPcZ8U3fVBHf3WeavbDGKCzDj%2F45Uo1xczO7Z8TaJvEFLjI3tv6%2Ff5WlnIMRTk3%2FMSU%2FNwXt1zNXaXNkMNUBygStKtXC%2FCvmBe%2BWOkwhrVyoqS93QIJgSR%2BYW5UoyWy5FLW7FsZRybnxu6kgIIRDcw8IVi4XDQ7Ed%2BIDR1inDL7ST%2FSYIKDYHmusTtig7vWFgKeMfG6tKEV3By2wDQgkjavMWUXpUf2VQOYTMBMMlMlmBwZW%2FFMxnJqnNsbNgGn0mA2D2tXPmfibqE9n46YiRR%2Fg4HrdEV%2FPFc7dNljibEo8l%2BNSyVgV9i5FSu5wNGSaAjs%2BIsXLwMvQbC0ShT8IN3lmfkveiqnVvmN8LQP7%2B6pBHX2sQooF5gtSn4sNl6%2BPtIkNZ%2BQcZBsCCio04Kvo77TA69MH8v1cQLHzbXI97JsXCWfSBtyFt3%2BhqA8s2VI7Gg7No8BJH6IlNxO82DyUo3kJvXNrROIZHjqhWMA1w%2F4jFtQjSj58IVnJpdNDctA6cVoAxD2TNtu1Okf2WJXloqUExbKHHTwK1gDDne7q77MICm8CA4%2BrOMpiHfWNfq6fW%2BL%2BZQHBvMIHIkcMGOqUBvXSTVfbKvEWcVED1dirS4376HLpM1GK6pQFEVSelgJdtZGg785%2FmhxBDVzdBrmUuJYiuwtlIi7NP8omBTEJTct0AgaNcJfh6PaulkRfFTZwF7kgi7vhTh3nXYj7g8%2BsngjJBJkyiZkBnegmuycjV%2FcbImhc3Pu1d1MBwlap%2FrsX%2BeSDxp5eMThCCFCf16Bm21XnQp%2FvO%2BiprrMD0F5AvwuqnDYEA&X-Amz-Signature=6cd56cca7af83291c9032c135bc71e23a5f4b0bef5b7b39f785b00a29a0e02d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV76CVXL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTh47%2BwqdPqMWpz6A3w%2Fug949dPvpYfmiQxF0i3WcBqwIgUgaQgy4VuaIunirJivvNX5%2Bl%2BWGfIVqJphet%2B%2FW%2BXccqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyfSNcRHg6XpEd2qSrcA%2BgEh2qOb7sFoIojpIBZSVOjhf%2Fc3M1GrxK259SftHW1qNYIbJbbPcZ8U3fVBHf3WeavbDGKCzDj%2F45Uo1xczO7Z8TaJvEFLjI3tv6%2Ff5WlnIMRTk3%2FMSU%2FNwXt1zNXaXNkMNUBygStKtXC%2FCvmBe%2BWOkwhrVyoqS93QIJgSR%2BYW5UoyWy5FLW7FsZRybnxu6kgIIRDcw8IVi4XDQ7Ed%2BIDR1inDL7ST%2FSYIKDYHmusTtig7vWFgKeMfG6tKEV3By2wDQgkjavMWUXpUf2VQOYTMBMMlMlmBwZW%2FFMxnJqnNsbNgGn0mA2D2tXPmfibqE9n46YiRR%2Fg4HrdEV%2FPFc7dNljibEo8l%2BNSyVgV9i5FSu5wNGSaAjs%2BIsXLwMvQbC0ShT8IN3lmfkveiqnVvmN8LQP7%2B6pBHX2sQooF5gtSn4sNl6%2BPtIkNZ%2BQcZBsCCio04Kvo77TA69MH8v1cQLHzbXI97JsXCWfSBtyFt3%2BhqA8s2VI7Gg7No8BJH6IlNxO82DyUo3kJvXNrROIZHjqhWMA1w%2F4jFtQjSj58IVnJpdNDctA6cVoAxD2TNtu1Okf2WJXloqUExbKHHTwK1gDDne7q77MICm8CA4%2BrOMpiHfWNfq6fW%2BL%2BZQHBvMIHIkcMGOqUBvXSTVfbKvEWcVED1dirS4376HLpM1GK6pQFEVSelgJdtZGg785%2FmhxBDVzdBrmUuJYiuwtlIi7NP8omBTEJTct0AgaNcJfh6PaulkRfFTZwF7kgi7vhTh3nXYj7g8%2BsngjJBJkyiZkBnegmuycjV%2FcbImhc3Pu1d1MBwlap%2FrsX%2BeSDxp5eMThCCFCf16Bm21XnQp%2FvO%2BiprrMD0F5AvwuqnDYEA&X-Amz-Signature=dec855b53534daa962f2099a9b8c772ee7df6d6e6f5b12fcfab72b1c282fb6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV76CVXL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTh47%2BwqdPqMWpz6A3w%2Fug949dPvpYfmiQxF0i3WcBqwIgUgaQgy4VuaIunirJivvNX5%2Bl%2BWGfIVqJphet%2B%2FW%2BXccqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyfSNcRHg6XpEd2qSrcA%2BgEh2qOb7sFoIojpIBZSVOjhf%2Fc3M1GrxK259SftHW1qNYIbJbbPcZ8U3fVBHf3WeavbDGKCzDj%2F45Uo1xczO7Z8TaJvEFLjI3tv6%2Ff5WlnIMRTk3%2FMSU%2FNwXt1zNXaXNkMNUBygStKtXC%2FCvmBe%2BWOkwhrVyoqS93QIJgSR%2BYW5UoyWy5FLW7FsZRybnxu6kgIIRDcw8IVi4XDQ7Ed%2BIDR1inDL7ST%2FSYIKDYHmusTtig7vWFgKeMfG6tKEV3By2wDQgkjavMWUXpUf2VQOYTMBMMlMlmBwZW%2FFMxnJqnNsbNgGn0mA2D2tXPmfibqE9n46YiRR%2Fg4HrdEV%2FPFc7dNljibEo8l%2BNSyVgV9i5FSu5wNGSaAjs%2BIsXLwMvQbC0ShT8IN3lmfkveiqnVvmN8LQP7%2B6pBHX2sQooF5gtSn4sNl6%2BPtIkNZ%2BQcZBsCCio04Kvo77TA69MH8v1cQLHzbXI97JsXCWfSBtyFt3%2BhqA8s2VI7Gg7No8BJH6IlNxO82DyUo3kJvXNrROIZHjqhWMA1w%2F4jFtQjSj58IVnJpdNDctA6cVoAxD2TNtu1Okf2WJXloqUExbKHHTwK1gDDne7q77MICm8CA4%2BrOMpiHfWNfq6fW%2BL%2BZQHBvMIHIkcMGOqUBvXSTVfbKvEWcVED1dirS4376HLpM1GK6pQFEVSelgJdtZGg785%2FmhxBDVzdBrmUuJYiuwtlIi7NP8omBTEJTct0AgaNcJfh6PaulkRfFTZwF7kgi7vhTh3nXYj7g8%2BsngjJBJkyiZkBnegmuycjV%2FcbImhc3Pu1d1MBwlap%2FrsX%2BeSDxp5eMThCCFCf16Bm21XnQp%2FvO%2BiprrMD0F5AvwuqnDYEA&X-Amz-Signature=11a6ef1c754d07472cedbead62c53469daf8b93568bb1581d2f8f7369bb19844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

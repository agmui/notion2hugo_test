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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PR3NY6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCmQggEDNBs13T7QggpJN9IMjrQDscABC37QdMigQ7sQwIgTM4i58rU4I50NdSsgvfljf5J7Oxj5NzeCvdurEZkuR0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPJuG9XnCbKvd9ieRircA7Nn4HRk0sHUYFWZc6LSvc8IbYfvVkrHCwHIak31APuXvqC9PqNx%2Fi6%2B1BBdBPw2aigccjV%2BpMEBTJXeXNvqg3xB6dhgUj3mFo5tyHyxu5pRG7TwoadeyGZ%2BmXmDIpCScqYle%2B%2BKVVvpFSSH1bD%2BapMawz3R20AZYWnO91XrSm2jhE74u217ZtU8Z7Pd4AFR1pKe5moAnTnv2FZH6BBG4JXMfq1lEje7Uyxwv4uyKaIRmEaDW2xogoQ0eHovDuOSbejEgHKu7BNLr6hvodRQF%2BOpegs4s17%2BIhkpdIamYILXlAqJTaT0XegccicKkcYeIWkAm70RZ2Uj0zrOoQmnSHV8bdI3NI3kTNbV61Tk%2FbSLHb3Jc%2B8RH4ynOJ63OAxmKyfZ0WHfmBNEFzjQnx2Thr%2Brkgu%2FnrTEwjMsZHfVl%2B4GW%2Fh%2BUObFbtxBWaNmhVCttQgGdkg9O8dvUiRS3P0gLxqhZS4MwgPQzqOQzkfy%2BATPafcJ3xyq0Ek%2BM8ER8v27ZYRlMslw6FahAnUBb3EB6DURm4ZOkjT7ydrebCktp9BrQUo6oh8f10Fk11nlr%2Bz%2FBJb04%2Bon75dQTybDsPE3xbJTjSMEcUagJw%2Fqc99acqYz02CtX2nt%2B5%2BbLa4KMIbxkMQGOqUB%2BPbLZQRn3MZX%2FPPkob0bQqjajtQK7S098pY6R7AGKXq6KQWJPUb0f%2Bq0TOC5mVW1pUe0HFDSL8sSk2CLPinKC1V7SX1WbvkPK2cgM6qV9ijm2%2BGAUDdHLzY6zQAeFJl8tivszddQqDp%2BCc%2FfYj9NgkQj1vwcAE7cNtzeyMnjI%2BFC3606jZInz%2FoDzjhjIDqgFzHuuLVoaza9gbTO3K1GZxCVyR7A&X-Amz-Signature=92b96342896ea094c8e0f5f15946c153f42cbc2166e5f937fc5e635da755a66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PR3NY6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCmQggEDNBs13T7QggpJN9IMjrQDscABC37QdMigQ7sQwIgTM4i58rU4I50NdSsgvfljf5J7Oxj5NzeCvdurEZkuR0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPJuG9XnCbKvd9ieRircA7Nn4HRk0sHUYFWZc6LSvc8IbYfvVkrHCwHIak31APuXvqC9PqNx%2Fi6%2B1BBdBPw2aigccjV%2BpMEBTJXeXNvqg3xB6dhgUj3mFo5tyHyxu5pRG7TwoadeyGZ%2BmXmDIpCScqYle%2B%2BKVVvpFSSH1bD%2BapMawz3R20AZYWnO91XrSm2jhE74u217ZtU8Z7Pd4AFR1pKe5moAnTnv2FZH6BBG4JXMfq1lEje7Uyxwv4uyKaIRmEaDW2xogoQ0eHovDuOSbejEgHKu7BNLr6hvodRQF%2BOpegs4s17%2BIhkpdIamYILXlAqJTaT0XegccicKkcYeIWkAm70RZ2Uj0zrOoQmnSHV8bdI3NI3kTNbV61Tk%2FbSLHb3Jc%2B8RH4ynOJ63OAxmKyfZ0WHfmBNEFzjQnx2Thr%2Brkgu%2FnrTEwjMsZHfVl%2B4GW%2Fh%2BUObFbtxBWaNmhVCttQgGdkg9O8dvUiRS3P0gLxqhZS4MwgPQzqOQzkfy%2BATPafcJ3xyq0Ek%2BM8ER8v27ZYRlMslw6FahAnUBb3EB6DURm4ZOkjT7ydrebCktp9BrQUo6oh8f10Fk11nlr%2Bz%2FBJb04%2Bon75dQTybDsPE3xbJTjSMEcUagJw%2Fqc99acqYz02CtX2nt%2B5%2BbLa4KMIbxkMQGOqUB%2BPbLZQRn3MZX%2FPPkob0bQqjajtQK7S098pY6R7AGKXq6KQWJPUb0f%2Bq0TOC5mVW1pUe0HFDSL8sSk2CLPinKC1V7SX1WbvkPK2cgM6qV9ijm2%2BGAUDdHLzY6zQAeFJl8tivszddQqDp%2BCc%2FfYj9NgkQj1vwcAE7cNtzeyMnjI%2BFC3606jZInz%2FoDzjhjIDqgFzHuuLVoaza9gbTO3K1GZxCVyR7A&X-Amz-Signature=05824803840b232edb4c8fea4a568c4b320cc06a8f68ad7622c160dbdc55c8d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PR3NY6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCmQggEDNBs13T7QggpJN9IMjrQDscABC37QdMigQ7sQwIgTM4i58rU4I50NdSsgvfljf5J7Oxj5NzeCvdurEZkuR0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPJuG9XnCbKvd9ieRircA7Nn4HRk0sHUYFWZc6LSvc8IbYfvVkrHCwHIak31APuXvqC9PqNx%2Fi6%2B1BBdBPw2aigccjV%2BpMEBTJXeXNvqg3xB6dhgUj3mFo5tyHyxu5pRG7TwoadeyGZ%2BmXmDIpCScqYle%2B%2BKVVvpFSSH1bD%2BapMawz3R20AZYWnO91XrSm2jhE74u217ZtU8Z7Pd4AFR1pKe5moAnTnv2FZH6BBG4JXMfq1lEje7Uyxwv4uyKaIRmEaDW2xogoQ0eHovDuOSbejEgHKu7BNLr6hvodRQF%2BOpegs4s17%2BIhkpdIamYILXlAqJTaT0XegccicKkcYeIWkAm70RZ2Uj0zrOoQmnSHV8bdI3NI3kTNbV61Tk%2FbSLHb3Jc%2B8RH4ynOJ63OAxmKyfZ0WHfmBNEFzjQnx2Thr%2Brkgu%2FnrTEwjMsZHfVl%2B4GW%2Fh%2BUObFbtxBWaNmhVCttQgGdkg9O8dvUiRS3P0gLxqhZS4MwgPQzqOQzkfy%2BATPafcJ3xyq0Ek%2BM8ER8v27ZYRlMslw6FahAnUBb3EB6DURm4ZOkjT7ydrebCktp9BrQUo6oh8f10Fk11nlr%2Bz%2FBJb04%2Bon75dQTybDsPE3xbJTjSMEcUagJw%2Fqc99acqYz02CtX2nt%2B5%2BbLa4KMIbxkMQGOqUB%2BPbLZQRn3MZX%2FPPkob0bQqjajtQK7S098pY6R7AGKXq6KQWJPUb0f%2Bq0TOC5mVW1pUe0HFDSL8sSk2CLPinKC1V7SX1WbvkPK2cgM6qV9ijm2%2BGAUDdHLzY6zQAeFJl8tivszddQqDp%2BCc%2FfYj9NgkQj1vwcAE7cNtzeyMnjI%2BFC3606jZInz%2FoDzjhjIDqgFzHuuLVoaza9gbTO3K1GZxCVyR7A&X-Amz-Signature=fc53fe93b25ffdf2e2a72298a3fcb1cc0230596631b23aa984b9c5a84b15c97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PR3NY6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCmQggEDNBs13T7QggpJN9IMjrQDscABC37QdMigQ7sQwIgTM4i58rU4I50NdSsgvfljf5J7Oxj5NzeCvdurEZkuR0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPJuG9XnCbKvd9ieRircA7Nn4HRk0sHUYFWZc6LSvc8IbYfvVkrHCwHIak31APuXvqC9PqNx%2Fi6%2B1BBdBPw2aigccjV%2BpMEBTJXeXNvqg3xB6dhgUj3mFo5tyHyxu5pRG7TwoadeyGZ%2BmXmDIpCScqYle%2B%2BKVVvpFSSH1bD%2BapMawz3R20AZYWnO91XrSm2jhE74u217ZtU8Z7Pd4AFR1pKe5moAnTnv2FZH6BBG4JXMfq1lEje7Uyxwv4uyKaIRmEaDW2xogoQ0eHovDuOSbejEgHKu7BNLr6hvodRQF%2BOpegs4s17%2BIhkpdIamYILXlAqJTaT0XegccicKkcYeIWkAm70RZ2Uj0zrOoQmnSHV8bdI3NI3kTNbV61Tk%2FbSLHb3Jc%2B8RH4ynOJ63OAxmKyfZ0WHfmBNEFzjQnx2Thr%2Brkgu%2FnrTEwjMsZHfVl%2B4GW%2Fh%2BUObFbtxBWaNmhVCttQgGdkg9O8dvUiRS3P0gLxqhZS4MwgPQzqOQzkfy%2BATPafcJ3xyq0Ek%2BM8ER8v27ZYRlMslw6FahAnUBb3EB6DURm4ZOkjT7ydrebCktp9BrQUo6oh8f10Fk11nlr%2Bz%2FBJb04%2Bon75dQTybDsPE3xbJTjSMEcUagJw%2Fqc99acqYz02CtX2nt%2B5%2BbLa4KMIbxkMQGOqUB%2BPbLZQRn3MZX%2FPPkob0bQqjajtQK7S098pY6R7AGKXq6KQWJPUb0f%2Bq0TOC5mVW1pUe0HFDSL8sSk2CLPinKC1V7SX1WbvkPK2cgM6qV9ijm2%2BGAUDdHLzY6zQAeFJl8tivszddQqDp%2BCc%2FfYj9NgkQj1vwcAE7cNtzeyMnjI%2BFC3606jZInz%2FoDzjhjIDqgFzHuuLVoaza9gbTO3K1GZxCVyR7A&X-Amz-Signature=258cdf2f762a413781355f07a45dcb64034d9a0da738441bc3912af922b27a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PR3NY6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCmQggEDNBs13T7QggpJN9IMjrQDscABC37QdMigQ7sQwIgTM4i58rU4I50NdSsgvfljf5J7Oxj5NzeCvdurEZkuR0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPJuG9XnCbKvd9ieRircA7Nn4HRk0sHUYFWZc6LSvc8IbYfvVkrHCwHIak31APuXvqC9PqNx%2Fi6%2B1BBdBPw2aigccjV%2BpMEBTJXeXNvqg3xB6dhgUj3mFo5tyHyxu5pRG7TwoadeyGZ%2BmXmDIpCScqYle%2B%2BKVVvpFSSH1bD%2BapMawz3R20AZYWnO91XrSm2jhE74u217ZtU8Z7Pd4AFR1pKe5moAnTnv2FZH6BBG4JXMfq1lEje7Uyxwv4uyKaIRmEaDW2xogoQ0eHovDuOSbejEgHKu7BNLr6hvodRQF%2BOpegs4s17%2BIhkpdIamYILXlAqJTaT0XegccicKkcYeIWkAm70RZ2Uj0zrOoQmnSHV8bdI3NI3kTNbV61Tk%2FbSLHb3Jc%2B8RH4ynOJ63OAxmKyfZ0WHfmBNEFzjQnx2Thr%2Brkgu%2FnrTEwjMsZHfVl%2B4GW%2Fh%2BUObFbtxBWaNmhVCttQgGdkg9O8dvUiRS3P0gLxqhZS4MwgPQzqOQzkfy%2BATPafcJ3xyq0Ek%2BM8ER8v27ZYRlMslw6FahAnUBb3EB6DURm4ZOkjT7ydrebCktp9BrQUo6oh8f10Fk11nlr%2Bz%2FBJb04%2Bon75dQTybDsPE3xbJTjSMEcUagJw%2Fqc99acqYz02CtX2nt%2B5%2BbLa4KMIbxkMQGOqUB%2BPbLZQRn3MZX%2FPPkob0bQqjajtQK7S098pY6R7AGKXq6KQWJPUb0f%2Bq0TOC5mVW1pUe0HFDSL8sSk2CLPinKC1V7SX1WbvkPK2cgM6qV9ijm2%2BGAUDdHLzY6zQAeFJl8tivszddQqDp%2BCc%2FfYj9NgkQj1vwcAE7cNtzeyMnjI%2BFC3606jZInz%2FoDzjhjIDqgFzHuuLVoaza9gbTO3K1GZxCVyR7A&X-Amz-Signature=565968f62eef99109eaf2080e3bdc0622086ec0abb7746231e1935f2eebdfbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PR3NY6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCmQggEDNBs13T7QggpJN9IMjrQDscABC37QdMigQ7sQwIgTM4i58rU4I50NdSsgvfljf5J7Oxj5NzeCvdurEZkuR0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPJuG9XnCbKvd9ieRircA7Nn4HRk0sHUYFWZc6LSvc8IbYfvVkrHCwHIak31APuXvqC9PqNx%2Fi6%2B1BBdBPw2aigccjV%2BpMEBTJXeXNvqg3xB6dhgUj3mFo5tyHyxu5pRG7TwoadeyGZ%2BmXmDIpCScqYle%2B%2BKVVvpFSSH1bD%2BapMawz3R20AZYWnO91XrSm2jhE74u217ZtU8Z7Pd4AFR1pKe5moAnTnv2FZH6BBG4JXMfq1lEje7Uyxwv4uyKaIRmEaDW2xogoQ0eHovDuOSbejEgHKu7BNLr6hvodRQF%2BOpegs4s17%2BIhkpdIamYILXlAqJTaT0XegccicKkcYeIWkAm70RZ2Uj0zrOoQmnSHV8bdI3NI3kTNbV61Tk%2FbSLHb3Jc%2B8RH4ynOJ63OAxmKyfZ0WHfmBNEFzjQnx2Thr%2Brkgu%2FnrTEwjMsZHfVl%2B4GW%2Fh%2BUObFbtxBWaNmhVCttQgGdkg9O8dvUiRS3P0gLxqhZS4MwgPQzqOQzkfy%2BATPafcJ3xyq0Ek%2BM8ER8v27ZYRlMslw6FahAnUBb3EB6DURm4ZOkjT7ydrebCktp9BrQUo6oh8f10Fk11nlr%2Bz%2FBJb04%2Bon75dQTybDsPE3xbJTjSMEcUagJw%2Fqc99acqYz02CtX2nt%2B5%2BbLa4KMIbxkMQGOqUB%2BPbLZQRn3MZX%2FPPkob0bQqjajtQK7S098pY6R7AGKXq6KQWJPUb0f%2Bq0TOC5mVW1pUe0HFDSL8sSk2CLPinKC1V7SX1WbvkPK2cgM6qV9ijm2%2BGAUDdHLzY6zQAeFJl8tivszddQqDp%2BCc%2FfYj9NgkQj1vwcAE7cNtzeyMnjI%2BFC3606jZInz%2FoDzjhjIDqgFzHuuLVoaza9gbTO3K1GZxCVyR7A&X-Amz-Signature=2d60197d9c815db79318a75e61ed2ae4f179fe8b60a60e701207d338df1a3a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PR3NY6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCmQggEDNBs13T7QggpJN9IMjrQDscABC37QdMigQ7sQwIgTM4i58rU4I50NdSsgvfljf5J7Oxj5NzeCvdurEZkuR0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPJuG9XnCbKvd9ieRircA7Nn4HRk0sHUYFWZc6LSvc8IbYfvVkrHCwHIak31APuXvqC9PqNx%2Fi6%2B1BBdBPw2aigccjV%2BpMEBTJXeXNvqg3xB6dhgUj3mFo5tyHyxu5pRG7TwoadeyGZ%2BmXmDIpCScqYle%2B%2BKVVvpFSSH1bD%2BapMawz3R20AZYWnO91XrSm2jhE74u217ZtU8Z7Pd4AFR1pKe5moAnTnv2FZH6BBG4JXMfq1lEje7Uyxwv4uyKaIRmEaDW2xogoQ0eHovDuOSbejEgHKu7BNLr6hvodRQF%2BOpegs4s17%2BIhkpdIamYILXlAqJTaT0XegccicKkcYeIWkAm70RZ2Uj0zrOoQmnSHV8bdI3NI3kTNbV61Tk%2FbSLHb3Jc%2B8RH4ynOJ63OAxmKyfZ0WHfmBNEFzjQnx2Thr%2Brkgu%2FnrTEwjMsZHfVl%2B4GW%2Fh%2BUObFbtxBWaNmhVCttQgGdkg9O8dvUiRS3P0gLxqhZS4MwgPQzqOQzkfy%2BATPafcJ3xyq0Ek%2BM8ER8v27ZYRlMslw6FahAnUBb3EB6DURm4ZOkjT7ydrebCktp9BrQUo6oh8f10Fk11nlr%2Bz%2FBJb04%2Bon75dQTybDsPE3xbJTjSMEcUagJw%2Fqc99acqYz02CtX2nt%2B5%2BbLa4KMIbxkMQGOqUB%2BPbLZQRn3MZX%2FPPkob0bQqjajtQK7S098pY6R7AGKXq6KQWJPUb0f%2Bq0TOC5mVW1pUe0HFDSL8sSk2CLPinKC1V7SX1WbvkPK2cgM6qV9ijm2%2BGAUDdHLzY6zQAeFJl8tivszddQqDp%2BCc%2FfYj9NgkQj1vwcAE7cNtzeyMnjI%2BFC3606jZInz%2FoDzjhjIDqgFzHuuLVoaza9gbTO3K1GZxCVyR7A&X-Amz-Signature=c1b43664d8c3ca01bde882487b12b9512df878be182ed16a45f027bc9c9618ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PR3NY6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCmQggEDNBs13T7QggpJN9IMjrQDscABC37QdMigQ7sQwIgTM4i58rU4I50NdSsgvfljf5J7Oxj5NzeCvdurEZkuR0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPJuG9XnCbKvd9ieRircA7Nn4HRk0sHUYFWZc6LSvc8IbYfvVkrHCwHIak31APuXvqC9PqNx%2Fi6%2B1BBdBPw2aigccjV%2BpMEBTJXeXNvqg3xB6dhgUj3mFo5tyHyxu5pRG7TwoadeyGZ%2BmXmDIpCScqYle%2B%2BKVVvpFSSH1bD%2BapMawz3R20AZYWnO91XrSm2jhE74u217ZtU8Z7Pd4AFR1pKe5moAnTnv2FZH6BBG4JXMfq1lEje7Uyxwv4uyKaIRmEaDW2xogoQ0eHovDuOSbejEgHKu7BNLr6hvodRQF%2BOpegs4s17%2BIhkpdIamYILXlAqJTaT0XegccicKkcYeIWkAm70RZ2Uj0zrOoQmnSHV8bdI3NI3kTNbV61Tk%2FbSLHb3Jc%2B8RH4ynOJ63OAxmKyfZ0WHfmBNEFzjQnx2Thr%2Brkgu%2FnrTEwjMsZHfVl%2B4GW%2Fh%2BUObFbtxBWaNmhVCttQgGdkg9O8dvUiRS3P0gLxqhZS4MwgPQzqOQzkfy%2BATPafcJ3xyq0Ek%2BM8ER8v27ZYRlMslw6FahAnUBb3EB6DURm4ZOkjT7ydrebCktp9BrQUo6oh8f10Fk11nlr%2Bz%2FBJb04%2Bon75dQTybDsPE3xbJTjSMEcUagJw%2Fqc99acqYz02CtX2nt%2B5%2BbLa4KMIbxkMQGOqUB%2BPbLZQRn3MZX%2FPPkob0bQqjajtQK7S098pY6R7AGKXq6KQWJPUb0f%2Bq0TOC5mVW1pUe0HFDSL8sSk2CLPinKC1V7SX1WbvkPK2cgM6qV9ijm2%2BGAUDdHLzY6zQAeFJl8tivszddQqDp%2BCc%2FfYj9NgkQj1vwcAE7cNtzeyMnjI%2BFC3606jZInz%2FoDzjhjIDqgFzHuuLVoaza9gbTO3K1GZxCVyR7A&X-Amz-Signature=dd4e93a56ebd66d3587552b34296cac5765c55b0a011e2e50e647e09b6313a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

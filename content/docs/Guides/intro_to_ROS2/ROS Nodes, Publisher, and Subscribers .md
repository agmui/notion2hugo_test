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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AF7MXL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0fFl%2F1t5%2BeElruyFSp8bcYO49mU%2BfexPV6aJqOWDyHAIgWLa357%2BTFbi6cQluoGKsLaisfx9Cn0SwkzPjgmwKjckq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGd0as7sw2skpUGoEyrcA%2By%2BAccyMxCN2qHPrbAP6g3HCHfaFuVJDiwSjJov0WxpVKu0hB1b8s%2FcotPYo5pZGSfoD7u%2FoKtq1IAlTZ9dRmeVZ8YmB0G97YNuB0HuCllainJLetp3%2B15tItYyCIdtdLEUpmRD6s1hLpjf3d%2BKhhJaGkAlR6nTd99cJcKBY8QfK%2F6SK8aKbA%2Fdq13UU0XoENTYXxNDGuEy007Tjdf%2F8cd%2BXQG6IlTvEF5FyRVew9v%2FPj9oVhxxnF%2Bvv17qax96wYP3HTQmBrzK6O3TDda0EicQaq%2BYFbn7Ljx2OVcU%2Bup6kf2AbWOEZYOsm%2B3lqf9Xaja%2BFilsWXbVfOBjeC%2BUPlg%2B9w4p2RhQLAT6ZWIX8YNg064XNqNbJGzdSs2yaBGeTY%2FfWKmM0Vr%2B52MaSzUkWpmi1PLs%2BMHxj1nxLlMFu937RFFB%2FY3yiOYMaRh3s%2FZo7Ch2HqkX6NrZj0Sk5gJwCOB4R8LBPBBUWj4Mif48xRSplIdOPfIMdQgFsMAY3Qe6iELjaAaSd4mb0V1Y0EOWK%2FdXqfiJ%2Fsc5vkA56Yf2GZbf2Uglg4%2FvCt3JP%2BG36eKZnAROzKnMrmRi8hZJI0%2FdqRMctghPYl%2FuvhgASpb4N3WWb0i9BajbMbRu%2BIztMPnb9L8GOqUBt1yfOYidD99iVwWMVCCd3BXcSCnVpT2t2PslUnfdNsgb4JmgZTQuOp2qVqLe4AU9e0ZiBo0zTdEsBeJIav4izz6BBI8mMEV4DMzmxl8qCyCqrSJxQ8ZuYh7oaSPMiskNC%2F2ZscuhVNqiMyg4gS4oh%2Bg6KGNGJNPsBQAyUvydE4CDRoJgNwSK3qslyJxxKcB0BxpVkc6cLbpeamToz3Wo%2BQh%2FH0BV&X-Amz-Signature=4f95ab34c9f7e4757cf8ab5784bfcb837f7dad1fe02a932f0f1420b6fd9103e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AF7MXL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0fFl%2F1t5%2BeElruyFSp8bcYO49mU%2BfexPV6aJqOWDyHAIgWLa357%2BTFbi6cQluoGKsLaisfx9Cn0SwkzPjgmwKjckq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGd0as7sw2skpUGoEyrcA%2By%2BAccyMxCN2qHPrbAP6g3HCHfaFuVJDiwSjJov0WxpVKu0hB1b8s%2FcotPYo5pZGSfoD7u%2FoKtq1IAlTZ9dRmeVZ8YmB0G97YNuB0HuCllainJLetp3%2B15tItYyCIdtdLEUpmRD6s1hLpjf3d%2BKhhJaGkAlR6nTd99cJcKBY8QfK%2F6SK8aKbA%2Fdq13UU0XoENTYXxNDGuEy007Tjdf%2F8cd%2BXQG6IlTvEF5FyRVew9v%2FPj9oVhxxnF%2Bvv17qax96wYP3HTQmBrzK6O3TDda0EicQaq%2BYFbn7Ljx2OVcU%2Bup6kf2AbWOEZYOsm%2B3lqf9Xaja%2BFilsWXbVfOBjeC%2BUPlg%2B9w4p2RhQLAT6ZWIX8YNg064XNqNbJGzdSs2yaBGeTY%2FfWKmM0Vr%2B52MaSzUkWpmi1PLs%2BMHxj1nxLlMFu937RFFB%2FY3yiOYMaRh3s%2FZo7Ch2HqkX6NrZj0Sk5gJwCOB4R8LBPBBUWj4Mif48xRSplIdOPfIMdQgFsMAY3Qe6iELjaAaSd4mb0V1Y0EOWK%2FdXqfiJ%2Fsc5vkA56Yf2GZbf2Uglg4%2FvCt3JP%2BG36eKZnAROzKnMrmRi8hZJI0%2FdqRMctghPYl%2FuvhgASpb4N3WWb0i9BajbMbRu%2BIztMPnb9L8GOqUBt1yfOYidD99iVwWMVCCd3BXcSCnVpT2t2PslUnfdNsgb4JmgZTQuOp2qVqLe4AU9e0ZiBo0zTdEsBeJIav4izz6BBI8mMEV4DMzmxl8qCyCqrSJxQ8ZuYh7oaSPMiskNC%2F2ZscuhVNqiMyg4gS4oh%2Bg6KGNGJNPsBQAyUvydE4CDRoJgNwSK3qslyJxxKcB0BxpVkc6cLbpeamToz3Wo%2BQh%2FH0BV&X-Amz-Signature=3c73d906e85243a125626946be2d3d043f096f4dd56aa8b642c1f135d1f5bf92&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AF7MXL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0fFl%2F1t5%2BeElruyFSp8bcYO49mU%2BfexPV6aJqOWDyHAIgWLa357%2BTFbi6cQluoGKsLaisfx9Cn0SwkzPjgmwKjckq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGd0as7sw2skpUGoEyrcA%2By%2BAccyMxCN2qHPrbAP6g3HCHfaFuVJDiwSjJov0WxpVKu0hB1b8s%2FcotPYo5pZGSfoD7u%2FoKtq1IAlTZ9dRmeVZ8YmB0G97YNuB0HuCllainJLetp3%2B15tItYyCIdtdLEUpmRD6s1hLpjf3d%2BKhhJaGkAlR6nTd99cJcKBY8QfK%2F6SK8aKbA%2Fdq13UU0XoENTYXxNDGuEy007Tjdf%2F8cd%2BXQG6IlTvEF5FyRVew9v%2FPj9oVhxxnF%2Bvv17qax96wYP3HTQmBrzK6O3TDda0EicQaq%2BYFbn7Ljx2OVcU%2Bup6kf2AbWOEZYOsm%2B3lqf9Xaja%2BFilsWXbVfOBjeC%2BUPlg%2B9w4p2RhQLAT6ZWIX8YNg064XNqNbJGzdSs2yaBGeTY%2FfWKmM0Vr%2B52MaSzUkWpmi1PLs%2BMHxj1nxLlMFu937RFFB%2FY3yiOYMaRh3s%2FZo7Ch2HqkX6NrZj0Sk5gJwCOB4R8LBPBBUWj4Mif48xRSplIdOPfIMdQgFsMAY3Qe6iELjaAaSd4mb0V1Y0EOWK%2FdXqfiJ%2Fsc5vkA56Yf2GZbf2Uglg4%2FvCt3JP%2BG36eKZnAROzKnMrmRi8hZJI0%2FdqRMctghPYl%2FuvhgASpb4N3WWb0i9BajbMbRu%2BIztMPnb9L8GOqUBt1yfOYidD99iVwWMVCCd3BXcSCnVpT2t2PslUnfdNsgb4JmgZTQuOp2qVqLe4AU9e0ZiBo0zTdEsBeJIav4izz6BBI8mMEV4DMzmxl8qCyCqrSJxQ8ZuYh7oaSPMiskNC%2F2ZscuhVNqiMyg4gS4oh%2Bg6KGNGJNPsBQAyUvydE4CDRoJgNwSK3qslyJxxKcB0BxpVkc6cLbpeamToz3Wo%2BQh%2FH0BV&X-Amz-Signature=dfb2855951bc390e5307fe8299b98ef916c375aa1f3c08b0cf77cb6e30aefda2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AF7MXL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0fFl%2F1t5%2BeElruyFSp8bcYO49mU%2BfexPV6aJqOWDyHAIgWLa357%2BTFbi6cQluoGKsLaisfx9Cn0SwkzPjgmwKjckq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGd0as7sw2skpUGoEyrcA%2By%2BAccyMxCN2qHPrbAP6g3HCHfaFuVJDiwSjJov0WxpVKu0hB1b8s%2FcotPYo5pZGSfoD7u%2FoKtq1IAlTZ9dRmeVZ8YmB0G97YNuB0HuCllainJLetp3%2B15tItYyCIdtdLEUpmRD6s1hLpjf3d%2BKhhJaGkAlR6nTd99cJcKBY8QfK%2F6SK8aKbA%2Fdq13UU0XoENTYXxNDGuEy007Tjdf%2F8cd%2BXQG6IlTvEF5FyRVew9v%2FPj9oVhxxnF%2Bvv17qax96wYP3HTQmBrzK6O3TDda0EicQaq%2BYFbn7Ljx2OVcU%2Bup6kf2AbWOEZYOsm%2B3lqf9Xaja%2BFilsWXbVfOBjeC%2BUPlg%2B9w4p2RhQLAT6ZWIX8YNg064XNqNbJGzdSs2yaBGeTY%2FfWKmM0Vr%2B52MaSzUkWpmi1PLs%2BMHxj1nxLlMFu937RFFB%2FY3yiOYMaRh3s%2FZo7Ch2HqkX6NrZj0Sk5gJwCOB4R8LBPBBUWj4Mif48xRSplIdOPfIMdQgFsMAY3Qe6iELjaAaSd4mb0V1Y0EOWK%2FdXqfiJ%2Fsc5vkA56Yf2GZbf2Uglg4%2FvCt3JP%2BG36eKZnAROzKnMrmRi8hZJI0%2FdqRMctghPYl%2FuvhgASpb4N3WWb0i9BajbMbRu%2BIztMPnb9L8GOqUBt1yfOYidD99iVwWMVCCd3BXcSCnVpT2t2PslUnfdNsgb4JmgZTQuOp2qVqLe4AU9e0ZiBo0zTdEsBeJIav4izz6BBI8mMEV4DMzmxl8qCyCqrSJxQ8ZuYh7oaSPMiskNC%2F2ZscuhVNqiMyg4gS4oh%2Bg6KGNGJNPsBQAyUvydE4CDRoJgNwSK3qslyJxxKcB0BxpVkc6cLbpeamToz3Wo%2BQh%2FH0BV&X-Amz-Signature=67ca5fe794266a8f5a17497a1fe300f3e233d9c24ca8142b92b09e3371565762&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AF7MXL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0fFl%2F1t5%2BeElruyFSp8bcYO49mU%2BfexPV6aJqOWDyHAIgWLa357%2BTFbi6cQluoGKsLaisfx9Cn0SwkzPjgmwKjckq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGd0as7sw2skpUGoEyrcA%2By%2BAccyMxCN2qHPrbAP6g3HCHfaFuVJDiwSjJov0WxpVKu0hB1b8s%2FcotPYo5pZGSfoD7u%2FoKtq1IAlTZ9dRmeVZ8YmB0G97YNuB0HuCllainJLetp3%2B15tItYyCIdtdLEUpmRD6s1hLpjf3d%2BKhhJaGkAlR6nTd99cJcKBY8QfK%2F6SK8aKbA%2Fdq13UU0XoENTYXxNDGuEy007Tjdf%2F8cd%2BXQG6IlTvEF5FyRVew9v%2FPj9oVhxxnF%2Bvv17qax96wYP3HTQmBrzK6O3TDda0EicQaq%2BYFbn7Ljx2OVcU%2Bup6kf2AbWOEZYOsm%2B3lqf9Xaja%2BFilsWXbVfOBjeC%2BUPlg%2B9w4p2RhQLAT6ZWIX8YNg064XNqNbJGzdSs2yaBGeTY%2FfWKmM0Vr%2B52MaSzUkWpmi1PLs%2BMHxj1nxLlMFu937RFFB%2FY3yiOYMaRh3s%2FZo7Ch2HqkX6NrZj0Sk5gJwCOB4R8LBPBBUWj4Mif48xRSplIdOPfIMdQgFsMAY3Qe6iELjaAaSd4mb0V1Y0EOWK%2FdXqfiJ%2Fsc5vkA56Yf2GZbf2Uglg4%2FvCt3JP%2BG36eKZnAROzKnMrmRi8hZJI0%2FdqRMctghPYl%2FuvhgASpb4N3WWb0i9BajbMbRu%2BIztMPnb9L8GOqUBt1yfOYidD99iVwWMVCCd3BXcSCnVpT2t2PslUnfdNsgb4JmgZTQuOp2qVqLe4AU9e0ZiBo0zTdEsBeJIav4izz6BBI8mMEV4DMzmxl8qCyCqrSJxQ8ZuYh7oaSPMiskNC%2F2ZscuhVNqiMyg4gS4oh%2Bg6KGNGJNPsBQAyUvydE4CDRoJgNwSK3qslyJxxKcB0BxpVkc6cLbpeamToz3Wo%2BQh%2FH0BV&X-Amz-Signature=aa6b2f9bd611a61ed32d9d917fad3057c44b2a0552afd8108b6e8755b31a42ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AF7MXL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0fFl%2F1t5%2BeElruyFSp8bcYO49mU%2BfexPV6aJqOWDyHAIgWLa357%2BTFbi6cQluoGKsLaisfx9Cn0SwkzPjgmwKjckq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGd0as7sw2skpUGoEyrcA%2By%2BAccyMxCN2qHPrbAP6g3HCHfaFuVJDiwSjJov0WxpVKu0hB1b8s%2FcotPYo5pZGSfoD7u%2FoKtq1IAlTZ9dRmeVZ8YmB0G97YNuB0HuCllainJLetp3%2B15tItYyCIdtdLEUpmRD6s1hLpjf3d%2BKhhJaGkAlR6nTd99cJcKBY8QfK%2F6SK8aKbA%2Fdq13UU0XoENTYXxNDGuEy007Tjdf%2F8cd%2BXQG6IlTvEF5FyRVew9v%2FPj9oVhxxnF%2Bvv17qax96wYP3HTQmBrzK6O3TDda0EicQaq%2BYFbn7Ljx2OVcU%2Bup6kf2AbWOEZYOsm%2B3lqf9Xaja%2BFilsWXbVfOBjeC%2BUPlg%2B9w4p2RhQLAT6ZWIX8YNg064XNqNbJGzdSs2yaBGeTY%2FfWKmM0Vr%2B52MaSzUkWpmi1PLs%2BMHxj1nxLlMFu937RFFB%2FY3yiOYMaRh3s%2FZo7Ch2HqkX6NrZj0Sk5gJwCOB4R8LBPBBUWj4Mif48xRSplIdOPfIMdQgFsMAY3Qe6iELjaAaSd4mb0V1Y0EOWK%2FdXqfiJ%2Fsc5vkA56Yf2GZbf2Uglg4%2FvCt3JP%2BG36eKZnAROzKnMrmRi8hZJI0%2FdqRMctghPYl%2FuvhgASpb4N3WWb0i9BajbMbRu%2BIztMPnb9L8GOqUBt1yfOYidD99iVwWMVCCd3BXcSCnVpT2t2PslUnfdNsgb4JmgZTQuOp2qVqLe4AU9e0ZiBo0zTdEsBeJIav4izz6BBI8mMEV4DMzmxl8qCyCqrSJxQ8ZuYh7oaSPMiskNC%2F2ZscuhVNqiMyg4gS4oh%2Bg6KGNGJNPsBQAyUvydE4CDRoJgNwSK3qslyJxxKcB0BxpVkc6cLbpeamToz3Wo%2BQh%2FH0BV&X-Amz-Signature=22fb57d2b042196a0731b8c4b684eab4fcbe1807a77f2920091fa61c22b2f3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AF7MXL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0fFl%2F1t5%2BeElruyFSp8bcYO49mU%2BfexPV6aJqOWDyHAIgWLa357%2BTFbi6cQluoGKsLaisfx9Cn0SwkzPjgmwKjckq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGd0as7sw2skpUGoEyrcA%2By%2BAccyMxCN2qHPrbAP6g3HCHfaFuVJDiwSjJov0WxpVKu0hB1b8s%2FcotPYo5pZGSfoD7u%2FoKtq1IAlTZ9dRmeVZ8YmB0G97YNuB0HuCllainJLetp3%2B15tItYyCIdtdLEUpmRD6s1hLpjf3d%2BKhhJaGkAlR6nTd99cJcKBY8QfK%2F6SK8aKbA%2Fdq13UU0XoENTYXxNDGuEy007Tjdf%2F8cd%2BXQG6IlTvEF5FyRVew9v%2FPj9oVhxxnF%2Bvv17qax96wYP3HTQmBrzK6O3TDda0EicQaq%2BYFbn7Ljx2OVcU%2Bup6kf2AbWOEZYOsm%2B3lqf9Xaja%2BFilsWXbVfOBjeC%2BUPlg%2B9w4p2RhQLAT6ZWIX8YNg064XNqNbJGzdSs2yaBGeTY%2FfWKmM0Vr%2B52MaSzUkWpmi1PLs%2BMHxj1nxLlMFu937RFFB%2FY3yiOYMaRh3s%2FZo7Ch2HqkX6NrZj0Sk5gJwCOB4R8LBPBBUWj4Mif48xRSplIdOPfIMdQgFsMAY3Qe6iELjaAaSd4mb0V1Y0EOWK%2FdXqfiJ%2Fsc5vkA56Yf2GZbf2Uglg4%2FvCt3JP%2BG36eKZnAROzKnMrmRi8hZJI0%2FdqRMctghPYl%2FuvhgASpb4N3WWb0i9BajbMbRu%2BIztMPnb9L8GOqUBt1yfOYidD99iVwWMVCCd3BXcSCnVpT2t2PslUnfdNsgb4JmgZTQuOp2qVqLe4AU9e0ZiBo0zTdEsBeJIav4izz6BBI8mMEV4DMzmxl8qCyCqrSJxQ8ZuYh7oaSPMiskNC%2F2ZscuhVNqiMyg4gS4oh%2Bg6KGNGJNPsBQAyUvydE4CDRoJgNwSK3qslyJxxKcB0BxpVkc6cLbpeamToz3Wo%2BQh%2FH0BV&X-Amz-Signature=c2a2e6873d76647781502a6d339c632b3123c011d62e4ed3b9515c8019a2d893&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AF7MXL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0fFl%2F1t5%2BeElruyFSp8bcYO49mU%2BfexPV6aJqOWDyHAIgWLa357%2BTFbi6cQluoGKsLaisfx9Cn0SwkzPjgmwKjckq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGd0as7sw2skpUGoEyrcA%2By%2BAccyMxCN2qHPrbAP6g3HCHfaFuVJDiwSjJov0WxpVKu0hB1b8s%2FcotPYo5pZGSfoD7u%2FoKtq1IAlTZ9dRmeVZ8YmB0G97YNuB0HuCllainJLetp3%2B15tItYyCIdtdLEUpmRD6s1hLpjf3d%2BKhhJaGkAlR6nTd99cJcKBY8QfK%2F6SK8aKbA%2Fdq13UU0XoENTYXxNDGuEy007Tjdf%2F8cd%2BXQG6IlTvEF5FyRVew9v%2FPj9oVhxxnF%2Bvv17qax96wYP3HTQmBrzK6O3TDda0EicQaq%2BYFbn7Ljx2OVcU%2Bup6kf2AbWOEZYOsm%2B3lqf9Xaja%2BFilsWXbVfOBjeC%2BUPlg%2B9w4p2RhQLAT6ZWIX8YNg064XNqNbJGzdSs2yaBGeTY%2FfWKmM0Vr%2B52MaSzUkWpmi1PLs%2BMHxj1nxLlMFu937RFFB%2FY3yiOYMaRh3s%2FZo7Ch2HqkX6NrZj0Sk5gJwCOB4R8LBPBBUWj4Mif48xRSplIdOPfIMdQgFsMAY3Qe6iELjaAaSd4mb0V1Y0EOWK%2FdXqfiJ%2Fsc5vkA56Yf2GZbf2Uglg4%2FvCt3JP%2BG36eKZnAROzKnMrmRi8hZJI0%2FdqRMctghPYl%2FuvhgASpb4N3WWb0i9BajbMbRu%2BIztMPnb9L8GOqUBt1yfOYidD99iVwWMVCCd3BXcSCnVpT2t2PslUnfdNsgb4JmgZTQuOp2qVqLe4AU9e0ZiBo0zTdEsBeJIav4izz6BBI8mMEV4DMzmxl8qCyCqrSJxQ8ZuYh7oaSPMiskNC%2F2ZscuhVNqiMyg4gS4oh%2Bg6KGNGJNPsBQAyUvydE4CDRoJgNwSK3qslyJxxKcB0BxpVkc6cLbpeamToz3Wo%2BQh%2FH0BV&X-Amz-Signature=3f6eba5b3c29e5b50db7e8ff2d3476b5908b9ed63c68ba4e4d95225b2d9a4da0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXONJFW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBTQG89P%2FSdUecJwAWr9mQ2swmCwVbJoYxc1gnPTFSweAiEA9%2FVpYei7z3K7DdM2I%2FBjH8jbMP%2BpPgH7Mv0BdBNy2ksqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDftgboiNtFglMKP2SrcAyBG80QPglEamOy5EiJuN7uMzO3UAfJ5h%2FHsqOupFvJJcLL6E7lAek5UQmcsobM9qeb%2FYJHv5kGxjJ7XVAYcqTGY%2BG%2FQoiG626IQdn8qJvui%2Fopr2%2Bk0Fu4ZhhEBXW0nq%2BM%2B4kgHnr5lTUX7actw4jvmPfYdcvrSNQ2LUEyia6YbBlQZd8FQBU0%2BYXfTUKM2DIScGFigifjILRvnKDch1kcnc9Ly0ee0AodZ%2B%2FZffo3NC20zCejGjKB5j1UBBherJKPtUKc%2BQEQiwaOxfGGw7r2N3THLVUDX%2FoGZtV2JUnInCFNxa%2F7kRa5KqE3pyblqx1QClCpD7GpM057HIh8bO1t6p6F8ti%2Fy%2FSpjyKBseriszThrtJx33wjhRhsKAN%2FG8qCJMaxD8WAwO4hw9DX9VlPwLN63xXDzyHbjlnermSe23n0r2TEIUpdA3izlI0hyhajymfdsljgen9S%2B%2FpaDxixaD15CO%2B7ZslAkFOt1oc6QOvqDsovcEdN2%2B6PnwvXNkDHuMiwotqOfSXKbugepAJJ5i1KxAcjZwHipqERxuA0JZWb9860IEQmYwDt9yvc2I7k%2F5VPPthxnr%2BhLGDm%2FvAV4EHxyQWd36d4OjSl22fpVt7BmqLPzVKuXvGh%2FMOng5sMGOqUBEaFpjSDzNE8AQahZpR1g8EtPwwAXLo32l9SAg24F%2FUMq1CD29S1stbklrAfMQmAePOKP8D3BzKSxjSPl3WHvFzhfCD087xkRWcKh37xexf%2B9j3SK6ZyoKaO65jfhgn6OJ%2B6jAlwSSp9Il5k8AuvVobdWfdwFmmSVefjXuPLnuTHdonJ7ivA5Mhl6HzxUelbZUju6TYzgn%2BpZtxo1IrcyLrITtf%2Fx&X-Amz-Signature=0765382723c3a670c7fbc92fa7c28b0d6d5bb12b03f9b494dd122e0e203e3b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXONJFW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBTQG89P%2FSdUecJwAWr9mQ2swmCwVbJoYxc1gnPTFSweAiEA9%2FVpYei7z3K7DdM2I%2FBjH8jbMP%2BpPgH7Mv0BdBNy2ksqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDftgboiNtFglMKP2SrcAyBG80QPglEamOy5EiJuN7uMzO3UAfJ5h%2FHsqOupFvJJcLL6E7lAek5UQmcsobM9qeb%2FYJHv5kGxjJ7XVAYcqTGY%2BG%2FQoiG626IQdn8qJvui%2Fopr2%2Bk0Fu4ZhhEBXW0nq%2BM%2B4kgHnr5lTUX7actw4jvmPfYdcvrSNQ2LUEyia6YbBlQZd8FQBU0%2BYXfTUKM2DIScGFigifjILRvnKDch1kcnc9Ly0ee0AodZ%2B%2FZffo3NC20zCejGjKB5j1UBBherJKPtUKc%2BQEQiwaOxfGGw7r2N3THLVUDX%2FoGZtV2JUnInCFNxa%2F7kRa5KqE3pyblqx1QClCpD7GpM057HIh8bO1t6p6F8ti%2Fy%2FSpjyKBseriszThrtJx33wjhRhsKAN%2FG8qCJMaxD8WAwO4hw9DX9VlPwLN63xXDzyHbjlnermSe23n0r2TEIUpdA3izlI0hyhajymfdsljgen9S%2B%2FpaDxixaD15CO%2B7ZslAkFOt1oc6QOvqDsovcEdN2%2B6PnwvXNkDHuMiwotqOfSXKbugepAJJ5i1KxAcjZwHipqERxuA0JZWb9860IEQmYwDt9yvc2I7k%2F5VPPthxnr%2BhLGDm%2FvAV4EHxyQWd36d4OjSl22fpVt7BmqLPzVKuXvGh%2FMOng5sMGOqUBEaFpjSDzNE8AQahZpR1g8EtPwwAXLo32l9SAg24F%2FUMq1CD29S1stbklrAfMQmAePOKP8D3BzKSxjSPl3WHvFzhfCD087xkRWcKh37xexf%2B9j3SK6ZyoKaO65jfhgn6OJ%2B6jAlwSSp9Il5k8AuvVobdWfdwFmmSVefjXuPLnuTHdonJ7ivA5Mhl6HzxUelbZUju6TYzgn%2BpZtxo1IrcyLrITtf%2Fx&X-Amz-Signature=f3ad8343f90bc4a3661a0fd3af3df4434342858a2e0e6e5e8ec1b20c15c85045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXONJFW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBTQG89P%2FSdUecJwAWr9mQ2swmCwVbJoYxc1gnPTFSweAiEA9%2FVpYei7z3K7DdM2I%2FBjH8jbMP%2BpPgH7Mv0BdBNy2ksqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDftgboiNtFglMKP2SrcAyBG80QPglEamOy5EiJuN7uMzO3UAfJ5h%2FHsqOupFvJJcLL6E7lAek5UQmcsobM9qeb%2FYJHv5kGxjJ7XVAYcqTGY%2BG%2FQoiG626IQdn8qJvui%2Fopr2%2Bk0Fu4ZhhEBXW0nq%2BM%2B4kgHnr5lTUX7actw4jvmPfYdcvrSNQ2LUEyia6YbBlQZd8FQBU0%2BYXfTUKM2DIScGFigifjILRvnKDch1kcnc9Ly0ee0AodZ%2B%2FZffo3NC20zCejGjKB5j1UBBherJKPtUKc%2BQEQiwaOxfGGw7r2N3THLVUDX%2FoGZtV2JUnInCFNxa%2F7kRa5KqE3pyblqx1QClCpD7GpM057HIh8bO1t6p6F8ti%2Fy%2FSpjyKBseriszThrtJx33wjhRhsKAN%2FG8qCJMaxD8WAwO4hw9DX9VlPwLN63xXDzyHbjlnermSe23n0r2TEIUpdA3izlI0hyhajymfdsljgen9S%2B%2FpaDxixaD15CO%2B7ZslAkFOt1oc6QOvqDsovcEdN2%2B6PnwvXNkDHuMiwotqOfSXKbugepAJJ5i1KxAcjZwHipqERxuA0JZWb9860IEQmYwDt9yvc2I7k%2F5VPPthxnr%2BhLGDm%2FvAV4EHxyQWd36d4OjSl22fpVt7BmqLPzVKuXvGh%2FMOng5sMGOqUBEaFpjSDzNE8AQahZpR1g8EtPwwAXLo32l9SAg24F%2FUMq1CD29S1stbklrAfMQmAePOKP8D3BzKSxjSPl3WHvFzhfCD087xkRWcKh37xexf%2B9j3SK6ZyoKaO65jfhgn6OJ%2B6jAlwSSp9Il5k8AuvVobdWfdwFmmSVefjXuPLnuTHdonJ7ivA5Mhl6HzxUelbZUju6TYzgn%2BpZtxo1IrcyLrITtf%2Fx&X-Amz-Signature=8a709ccb01c7a7693baafdca55b7a75fdead76022049c9ece95c9f1ec0eeef8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXONJFW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBTQG89P%2FSdUecJwAWr9mQ2swmCwVbJoYxc1gnPTFSweAiEA9%2FVpYei7z3K7DdM2I%2FBjH8jbMP%2BpPgH7Mv0BdBNy2ksqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDftgboiNtFglMKP2SrcAyBG80QPglEamOy5EiJuN7uMzO3UAfJ5h%2FHsqOupFvJJcLL6E7lAek5UQmcsobM9qeb%2FYJHv5kGxjJ7XVAYcqTGY%2BG%2FQoiG626IQdn8qJvui%2Fopr2%2Bk0Fu4ZhhEBXW0nq%2BM%2B4kgHnr5lTUX7actw4jvmPfYdcvrSNQ2LUEyia6YbBlQZd8FQBU0%2BYXfTUKM2DIScGFigifjILRvnKDch1kcnc9Ly0ee0AodZ%2B%2FZffo3NC20zCejGjKB5j1UBBherJKPtUKc%2BQEQiwaOxfGGw7r2N3THLVUDX%2FoGZtV2JUnInCFNxa%2F7kRa5KqE3pyblqx1QClCpD7GpM057HIh8bO1t6p6F8ti%2Fy%2FSpjyKBseriszThrtJx33wjhRhsKAN%2FG8qCJMaxD8WAwO4hw9DX9VlPwLN63xXDzyHbjlnermSe23n0r2TEIUpdA3izlI0hyhajymfdsljgen9S%2B%2FpaDxixaD15CO%2B7ZslAkFOt1oc6QOvqDsovcEdN2%2B6PnwvXNkDHuMiwotqOfSXKbugepAJJ5i1KxAcjZwHipqERxuA0JZWb9860IEQmYwDt9yvc2I7k%2F5VPPthxnr%2BhLGDm%2FvAV4EHxyQWd36d4OjSl22fpVt7BmqLPzVKuXvGh%2FMOng5sMGOqUBEaFpjSDzNE8AQahZpR1g8EtPwwAXLo32l9SAg24F%2FUMq1CD29S1stbklrAfMQmAePOKP8D3BzKSxjSPl3WHvFzhfCD087xkRWcKh37xexf%2B9j3SK6ZyoKaO65jfhgn6OJ%2B6jAlwSSp9Il5k8AuvVobdWfdwFmmSVefjXuPLnuTHdonJ7ivA5Mhl6HzxUelbZUju6TYzgn%2BpZtxo1IrcyLrITtf%2Fx&X-Amz-Signature=5b5dca71d9f22a9eac4098e76bc7ace53104fe53fc30f8f0e1222539f86c8351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXONJFW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBTQG89P%2FSdUecJwAWr9mQ2swmCwVbJoYxc1gnPTFSweAiEA9%2FVpYei7z3K7DdM2I%2FBjH8jbMP%2BpPgH7Mv0BdBNy2ksqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDftgboiNtFglMKP2SrcAyBG80QPglEamOy5EiJuN7uMzO3UAfJ5h%2FHsqOupFvJJcLL6E7lAek5UQmcsobM9qeb%2FYJHv5kGxjJ7XVAYcqTGY%2BG%2FQoiG626IQdn8qJvui%2Fopr2%2Bk0Fu4ZhhEBXW0nq%2BM%2B4kgHnr5lTUX7actw4jvmPfYdcvrSNQ2LUEyia6YbBlQZd8FQBU0%2BYXfTUKM2DIScGFigifjILRvnKDch1kcnc9Ly0ee0AodZ%2B%2FZffo3NC20zCejGjKB5j1UBBherJKPtUKc%2BQEQiwaOxfGGw7r2N3THLVUDX%2FoGZtV2JUnInCFNxa%2F7kRa5KqE3pyblqx1QClCpD7GpM057HIh8bO1t6p6F8ti%2Fy%2FSpjyKBseriszThrtJx33wjhRhsKAN%2FG8qCJMaxD8WAwO4hw9DX9VlPwLN63xXDzyHbjlnermSe23n0r2TEIUpdA3izlI0hyhajymfdsljgen9S%2B%2FpaDxixaD15CO%2B7ZslAkFOt1oc6QOvqDsovcEdN2%2B6PnwvXNkDHuMiwotqOfSXKbugepAJJ5i1KxAcjZwHipqERxuA0JZWb9860IEQmYwDt9yvc2I7k%2F5VPPthxnr%2BhLGDm%2FvAV4EHxyQWd36d4OjSl22fpVt7BmqLPzVKuXvGh%2FMOng5sMGOqUBEaFpjSDzNE8AQahZpR1g8EtPwwAXLo32l9SAg24F%2FUMq1CD29S1stbklrAfMQmAePOKP8D3BzKSxjSPl3WHvFzhfCD087xkRWcKh37xexf%2B9j3SK6ZyoKaO65jfhgn6OJ%2B6jAlwSSp9Il5k8AuvVobdWfdwFmmSVefjXuPLnuTHdonJ7ivA5Mhl6HzxUelbZUju6TYzgn%2BpZtxo1IrcyLrITtf%2Fx&X-Amz-Signature=fb68cdffaabb2d43d3d13965b8ad246234f8ed3e25498b2844980bd4fbd56e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXONJFW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBTQG89P%2FSdUecJwAWr9mQ2swmCwVbJoYxc1gnPTFSweAiEA9%2FVpYei7z3K7DdM2I%2FBjH8jbMP%2BpPgH7Mv0BdBNy2ksqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDftgboiNtFglMKP2SrcAyBG80QPglEamOy5EiJuN7uMzO3UAfJ5h%2FHsqOupFvJJcLL6E7lAek5UQmcsobM9qeb%2FYJHv5kGxjJ7XVAYcqTGY%2BG%2FQoiG626IQdn8qJvui%2Fopr2%2Bk0Fu4ZhhEBXW0nq%2BM%2B4kgHnr5lTUX7actw4jvmPfYdcvrSNQ2LUEyia6YbBlQZd8FQBU0%2BYXfTUKM2DIScGFigifjILRvnKDch1kcnc9Ly0ee0AodZ%2B%2FZffo3NC20zCejGjKB5j1UBBherJKPtUKc%2BQEQiwaOxfGGw7r2N3THLVUDX%2FoGZtV2JUnInCFNxa%2F7kRa5KqE3pyblqx1QClCpD7GpM057HIh8bO1t6p6F8ti%2Fy%2FSpjyKBseriszThrtJx33wjhRhsKAN%2FG8qCJMaxD8WAwO4hw9DX9VlPwLN63xXDzyHbjlnermSe23n0r2TEIUpdA3izlI0hyhajymfdsljgen9S%2B%2FpaDxixaD15CO%2B7ZslAkFOt1oc6QOvqDsovcEdN2%2B6PnwvXNkDHuMiwotqOfSXKbugepAJJ5i1KxAcjZwHipqERxuA0JZWb9860IEQmYwDt9yvc2I7k%2F5VPPthxnr%2BhLGDm%2FvAV4EHxyQWd36d4OjSl22fpVt7BmqLPzVKuXvGh%2FMOng5sMGOqUBEaFpjSDzNE8AQahZpR1g8EtPwwAXLo32l9SAg24F%2FUMq1CD29S1stbklrAfMQmAePOKP8D3BzKSxjSPl3WHvFzhfCD087xkRWcKh37xexf%2B9j3SK6ZyoKaO65jfhgn6OJ%2B6jAlwSSp9Il5k8AuvVobdWfdwFmmSVefjXuPLnuTHdonJ7ivA5Mhl6HzxUelbZUju6TYzgn%2BpZtxo1IrcyLrITtf%2Fx&X-Amz-Signature=08272c07047dcce9652d3e9b0ce2e7999046db1d45ddb1bbed4540b6abdacbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXONJFW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBTQG89P%2FSdUecJwAWr9mQ2swmCwVbJoYxc1gnPTFSweAiEA9%2FVpYei7z3K7DdM2I%2FBjH8jbMP%2BpPgH7Mv0BdBNy2ksqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDftgboiNtFglMKP2SrcAyBG80QPglEamOy5EiJuN7uMzO3UAfJ5h%2FHsqOupFvJJcLL6E7lAek5UQmcsobM9qeb%2FYJHv5kGxjJ7XVAYcqTGY%2BG%2FQoiG626IQdn8qJvui%2Fopr2%2Bk0Fu4ZhhEBXW0nq%2BM%2B4kgHnr5lTUX7actw4jvmPfYdcvrSNQ2LUEyia6YbBlQZd8FQBU0%2BYXfTUKM2DIScGFigifjILRvnKDch1kcnc9Ly0ee0AodZ%2B%2FZffo3NC20zCejGjKB5j1UBBherJKPtUKc%2BQEQiwaOxfGGw7r2N3THLVUDX%2FoGZtV2JUnInCFNxa%2F7kRa5KqE3pyblqx1QClCpD7GpM057HIh8bO1t6p6F8ti%2Fy%2FSpjyKBseriszThrtJx33wjhRhsKAN%2FG8qCJMaxD8WAwO4hw9DX9VlPwLN63xXDzyHbjlnermSe23n0r2TEIUpdA3izlI0hyhajymfdsljgen9S%2B%2FpaDxixaD15CO%2B7ZslAkFOt1oc6QOvqDsovcEdN2%2B6PnwvXNkDHuMiwotqOfSXKbugepAJJ5i1KxAcjZwHipqERxuA0JZWb9860IEQmYwDt9yvc2I7k%2F5VPPthxnr%2BhLGDm%2FvAV4EHxyQWd36d4OjSl22fpVt7BmqLPzVKuXvGh%2FMOng5sMGOqUBEaFpjSDzNE8AQahZpR1g8EtPwwAXLo32l9SAg24F%2FUMq1CD29S1stbklrAfMQmAePOKP8D3BzKSxjSPl3WHvFzhfCD087xkRWcKh37xexf%2B9j3SK6ZyoKaO65jfhgn6OJ%2B6jAlwSSp9Il5k8AuvVobdWfdwFmmSVefjXuPLnuTHdonJ7ivA5Mhl6HzxUelbZUju6TYzgn%2BpZtxo1IrcyLrITtf%2Fx&X-Amz-Signature=94a58fb4b93161a93d571b48ac2e912fb1257407610b7812e2bfc2d91e007e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXONJFW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBTQG89P%2FSdUecJwAWr9mQ2swmCwVbJoYxc1gnPTFSweAiEA9%2FVpYei7z3K7DdM2I%2FBjH8jbMP%2BpPgH7Mv0BdBNy2ksqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDftgboiNtFglMKP2SrcAyBG80QPglEamOy5EiJuN7uMzO3UAfJ5h%2FHsqOupFvJJcLL6E7lAek5UQmcsobM9qeb%2FYJHv5kGxjJ7XVAYcqTGY%2BG%2FQoiG626IQdn8qJvui%2Fopr2%2Bk0Fu4ZhhEBXW0nq%2BM%2B4kgHnr5lTUX7actw4jvmPfYdcvrSNQ2LUEyia6YbBlQZd8FQBU0%2BYXfTUKM2DIScGFigifjILRvnKDch1kcnc9Ly0ee0AodZ%2B%2FZffo3NC20zCejGjKB5j1UBBherJKPtUKc%2BQEQiwaOxfGGw7r2N3THLVUDX%2FoGZtV2JUnInCFNxa%2F7kRa5KqE3pyblqx1QClCpD7GpM057HIh8bO1t6p6F8ti%2Fy%2FSpjyKBseriszThrtJx33wjhRhsKAN%2FG8qCJMaxD8WAwO4hw9DX9VlPwLN63xXDzyHbjlnermSe23n0r2TEIUpdA3izlI0hyhajymfdsljgen9S%2B%2FpaDxixaD15CO%2B7ZslAkFOt1oc6QOvqDsovcEdN2%2B6PnwvXNkDHuMiwotqOfSXKbugepAJJ5i1KxAcjZwHipqERxuA0JZWb9860IEQmYwDt9yvc2I7k%2F5VPPthxnr%2BhLGDm%2FvAV4EHxyQWd36d4OjSl22fpVt7BmqLPzVKuXvGh%2FMOng5sMGOqUBEaFpjSDzNE8AQahZpR1g8EtPwwAXLo32l9SAg24F%2FUMq1CD29S1stbklrAfMQmAePOKP8D3BzKSxjSPl3WHvFzhfCD087xkRWcKh37xexf%2B9j3SK6ZyoKaO65jfhgn6OJ%2B6jAlwSSp9Il5k8AuvVobdWfdwFmmSVefjXuPLnuTHdonJ7ivA5Mhl6HzxUelbZUju6TYzgn%2BpZtxo1IrcyLrITtf%2Fx&X-Amz-Signature=b60ba65cba3f8db18939e662aacc98c87de69058926103ed8c6c0b2ad0266f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

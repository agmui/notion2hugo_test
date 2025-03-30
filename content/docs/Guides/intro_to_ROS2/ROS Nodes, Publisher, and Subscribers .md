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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRDTGGU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBSmFKTLkWuUgYMiFF9k%2F6GKVp5C030X4NvHFomkHhCJAiEAtIM8gc8iCIa4OlhmCQdxrrf80HsW5al5RrkWS6vuWxYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpAGDKNf9W%2B1ebdjCrcAzF1oLVCrRAlg8%2FX2p84zIShrcmCeEEufHQjh8QPzoJMstgjLoSEP5UMqS9tm%2BrKHVLfXHEp6ylmt6YuuzrhdHMj08ftBezI0YDAWWPmA3fnUBxkwc4orPnKtP%2BXsMizSO3r8AYScQo8OLhOyFmLaxZ%2FeWr1H%2Fdb6zA8hNgSy1aGZTFF4WYN2GLS8A0zaWItlqn0kK1n%2FGBPPcTMNwaQMLZv1dJUBHKE13jlommTZfOJzXoYpJYSOcy4sYOuHSZxteNybO6CigzEUrAUqumAIRz3n7QbJlc1%2BOf%2B40Zkmg8NQ6WBbtrU6YQZda%2BGUnD5r7XvqumZTAwzcanHmH8AB0RQNjxcfgRKWpoO3yFmY0rSgjOMtb4DRongBkQ21hs17lrVzHGxw02J9tJ125BonVtgw7iGFZHBliLAV0deyESeBgBhNv1VZiI%2BuZ2LxK8zxyQKVY9WMU2ArlsjNmsda5WsNaxsbdessH6aWT4Q2fFtJnFL%2BvcPfURYSicdVxwTw%2FwL3JgeWOxMbG%2FoRxCzqNKFKfNCSfySAdRcBeQv9cQj8M6fKyhARPQ%2F%2BIdYm27Hxv2Z6bPXowqU9D4i4GxJ5XnHywEpWV8R%2B28uxvGJ11XQw3OunhHSLyQdD13JMPnpor8GOqUB5MLHeWNWmIbFbm240%2BDUxU6IIibOyijV98IdeyCJ7QXraBpRAkjUbVLOYACrGDr%2FXPtB3%2FsKFdgQEAWF1gr4j3nKOGV%2Ffr%2FlrG%2FNTjZ3PC3KcwSInAQJOLvqjY3fNKbacKCvPNA9uNSuA%2BFsKOmm0Xb6VXCbbO%2FoO86PCpMcbJNEspkUjMeccN2EbfSGnlIfUfvpTDWA5R7Rl8pPr8pIed6WD%2B0F&X-Amz-Signature=6dd825e6704ab61cd14105913bce8f7fa7005490687370462ea0775dc4cecccd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRDTGGU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBSmFKTLkWuUgYMiFF9k%2F6GKVp5C030X4NvHFomkHhCJAiEAtIM8gc8iCIa4OlhmCQdxrrf80HsW5al5RrkWS6vuWxYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpAGDKNf9W%2B1ebdjCrcAzF1oLVCrRAlg8%2FX2p84zIShrcmCeEEufHQjh8QPzoJMstgjLoSEP5UMqS9tm%2BrKHVLfXHEp6ylmt6YuuzrhdHMj08ftBezI0YDAWWPmA3fnUBxkwc4orPnKtP%2BXsMizSO3r8AYScQo8OLhOyFmLaxZ%2FeWr1H%2Fdb6zA8hNgSy1aGZTFF4WYN2GLS8A0zaWItlqn0kK1n%2FGBPPcTMNwaQMLZv1dJUBHKE13jlommTZfOJzXoYpJYSOcy4sYOuHSZxteNybO6CigzEUrAUqumAIRz3n7QbJlc1%2BOf%2B40Zkmg8NQ6WBbtrU6YQZda%2BGUnD5r7XvqumZTAwzcanHmH8AB0RQNjxcfgRKWpoO3yFmY0rSgjOMtb4DRongBkQ21hs17lrVzHGxw02J9tJ125BonVtgw7iGFZHBliLAV0deyESeBgBhNv1VZiI%2BuZ2LxK8zxyQKVY9WMU2ArlsjNmsda5WsNaxsbdessH6aWT4Q2fFtJnFL%2BvcPfURYSicdVxwTw%2FwL3JgeWOxMbG%2FoRxCzqNKFKfNCSfySAdRcBeQv9cQj8M6fKyhARPQ%2F%2BIdYm27Hxv2Z6bPXowqU9D4i4GxJ5XnHywEpWV8R%2B28uxvGJ11XQw3OunhHSLyQdD13JMPnpor8GOqUB5MLHeWNWmIbFbm240%2BDUxU6IIibOyijV98IdeyCJ7QXraBpRAkjUbVLOYACrGDr%2FXPtB3%2FsKFdgQEAWF1gr4j3nKOGV%2Ffr%2FlrG%2FNTjZ3PC3KcwSInAQJOLvqjY3fNKbacKCvPNA9uNSuA%2BFsKOmm0Xb6VXCbbO%2FoO86PCpMcbJNEspkUjMeccN2EbfSGnlIfUfvpTDWA5R7Rl8pPr8pIed6WD%2B0F&X-Amz-Signature=8eb20d70a4a9cd52ea199c91f1daea009bc05d7fdb02d85eea46f6b8b08f3f25&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRDTGGU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBSmFKTLkWuUgYMiFF9k%2F6GKVp5C030X4NvHFomkHhCJAiEAtIM8gc8iCIa4OlhmCQdxrrf80HsW5al5RrkWS6vuWxYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpAGDKNf9W%2B1ebdjCrcAzF1oLVCrRAlg8%2FX2p84zIShrcmCeEEufHQjh8QPzoJMstgjLoSEP5UMqS9tm%2BrKHVLfXHEp6ylmt6YuuzrhdHMj08ftBezI0YDAWWPmA3fnUBxkwc4orPnKtP%2BXsMizSO3r8AYScQo8OLhOyFmLaxZ%2FeWr1H%2Fdb6zA8hNgSy1aGZTFF4WYN2GLS8A0zaWItlqn0kK1n%2FGBPPcTMNwaQMLZv1dJUBHKE13jlommTZfOJzXoYpJYSOcy4sYOuHSZxteNybO6CigzEUrAUqumAIRz3n7QbJlc1%2BOf%2B40Zkmg8NQ6WBbtrU6YQZda%2BGUnD5r7XvqumZTAwzcanHmH8AB0RQNjxcfgRKWpoO3yFmY0rSgjOMtb4DRongBkQ21hs17lrVzHGxw02J9tJ125BonVtgw7iGFZHBliLAV0deyESeBgBhNv1VZiI%2BuZ2LxK8zxyQKVY9WMU2ArlsjNmsda5WsNaxsbdessH6aWT4Q2fFtJnFL%2BvcPfURYSicdVxwTw%2FwL3JgeWOxMbG%2FoRxCzqNKFKfNCSfySAdRcBeQv9cQj8M6fKyhARPQ%2F%2BIdYm27Hxv2Z6bPXowqU9D4i4GxJ5XnHywEpWV8R%2B28uxvGJ11XQw3OunhHSLyQdD13JMPnpor8GOqUB5MLHeWNWmIbFbm240%2BDUxU6IIibOyijV98IdeyCJ7QXraBpRAkjUbVLOYACrGDr%2FXPtB3%2FsKFdgQEAWF1gr4j3nKOGV%2Ffr%2FlrG%2FNTjZ3PC3KcwSInAQJOLvqjY3fNKbacKCvPNA9uNSuA%2BFsKOmm0Xb6VXCbbO%2FoO86PCpMcbJNEspkUjMeccN2EbfSGnlIfUfvpTDWA5R7Rl8pPr8pIed6WD%2B0F&X-Amz-Signature=bbbe3fc22c949fce2ef1a955bc1e8762001efc5501e29e68b866a329b7bf645b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRDTGGU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBSmFKTLkWuUgYMiFF9k%2F6GKVp5C030X4NvHFomkHhCJAiEAtIM8gc8iCIa4OlhmCQdxrrf80HsW5al5RrkWS6vuWxYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpAGDKNf9W%2B1ebdjCrcAzF1oLVCrRAlg8%2FX2p84zIShrcmCeEEufHQjh8QPzoJMstgjLoSEP5UMqS9tm%2BrKHVLfXHEp6ylmt6YuuzrhdHMj08ftBezI0YDAWWPmA3fnUBxkwc4orPnKtP%2BXsMizSO3r8AYScQo8OLhOyFmLaxZ%2FeWr1H%2Fdb6zA8hNgSy1aGZTFF4WYN2GLS8A0zaWItlqn0kK1n%2FGBPPcTMNwaQMLZv1dJUBHKE13jlommTZfOJzXoYpJYSOcy4sYOuHSZxteNybO6CigzEUrAUqumAIRz3n7QbJlc1%2BOf%2B40Zkmg8NQ6WBbtrU6YQZda%2BGUnD5r7XvqumZTAwzcanHmH8AB0RQNjxcfgRKWpoO3yFmY0rSgjOMtb4DRongBkQ21hs17lrVzHGxw02J9tJ125BonVtgw7iGFZHBliLAV0deyESeBgBhNv1VZiI%2BuZ2LxK8zxyQKVY9WMU2ArlsjNmsda5WsNaxsbdessH6aWT4Q2fFtJnFL%2BvcPfURYSicdVxwTw%2FwL3JgeWOxMbG%2FoRxCzqNKFKfNCSfySAdRcBeQv9cQj8M6fKyhARPQ%2F%2BIdYm27Hxv2Z6bPXowqU9D4i4GxJ5XnHywEpWV8R%2B28uxvGJ11XQw3OunhHSLyQdD13JMPnpor8GOqUB5MLHeWNWmIbFbm240%2BDUxU6IIibOyijV98IdeyCJ7QXraBpRAkjUbVLOYACrGDr%2FXPtB3%2FsKFdgQEAWF1gr4j3nKOGV%2Ffr%2FlrG%2FNTjZ3PC3KcwSInAQJOLvqjY3fNKbacKCvPNA9uNSuA%2BFsKOmm0Xb6VXCbbO%2FoO86PCpMcbJNEspkUjMeccN2EbfSGnlIfUfvpTDWA5R7Rl8pPr8pIed6WD%2B0F&X-Amz-Signature=f47a38ea6e3c26ae80b13694a671ec3a02b5fac66189cd7e2168bdb4c476ca1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRDTGGU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBSmFKTLkWuUgYMiFF9k%2F6GKVp5C030X4NvHFomkHhCJAiEAtIM8gc8iCIa4OlhmCQdxrrf80HsW5al5RrkWS6vuWxYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpAGDKNf9W%2B1ebdjCrcAzF1oLVCrRAlg8%2FX2p84zIShrcmCeEEufHQjh8QPzoJMstgjLoSEP5UMqS9tm%2BrKHVLfXHEp6ylmt6YuuzrhdHMj08ftBezI0YDAWWPmA3fnUBxkwc4orPnKtP%2BXsMizSO3r8AYScQo8OLhOyFmLaxZ%2FeWr1H%2Fdb6zA8hNgSy1aGZTFF4WYN2GLS8A0zaWItlqn0kK1n%2FGBPPcTMNwaQMLZv1dJUBHKE13jlommTZfOJzXoYpJYSOcy4sYOuHSZxteNybO6CigzEUrAUqumAIRz3n7QbJlc1%2BOf%2B40Zkmg8NQ6WBbtrU6YQZda%2BGUnD5r7XvqumZTAwzcanHmH8AB0RQNjxcfgRKWpoO3yFmY0rSgjOMtb4DRongBkQ21hs17lrVzHGxw02J9tJ125BonVtgw7iGFZHBliLAV0deyESeBgBhNv1VZiI%2BuZ2LxK8zxyQKVY9WMU2ArlsjNmsda5WsNaxsbdessH6aWT4Q2fFtJnFL%2BvcPfURYSicdVxwTw%2FwL3JgeWOxMbG%2FoRxCzqNKFKfNCSfySAdRcBeQv9cQj8M6fKyhARPQ%2F%2BIdYm27Hxv2Z6bPXowqU9D4i4GxJ5XnHywEpWV8R%2B28uxvGJ11XQw3OunhHSLyQdD13JMPnpor8GOqUB5MLHeWNWmIbFbm240%2BDUxU6IIibOyijV98IdeyCJ7QXraBpRAkjUbVLOYACrGDr%2FXPtB3%2FsKFdgQEAWF1gr4j3nKOGV%2Ffr%2FlrG%2FNTjZ3PC3KcwSInAQJOLvqjY3fNKbacKCvPNA9uNSuA%2BFsKOmm0Xb6VXCbbO%2FoO86PCpMcbJNEspkUjMeccN2EbfSGnlIfUfvpTDWA5R7Rl8pPr8pIed6WD%2B0F&X-Amz-Signature=7c84c9bd6584ed79bc963ee8cc26f32c606d1755dcac650ad585a07ca24fc99f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRDTGGU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBSmFKTLkWuUgYMiFF9k%2F6GKVp5C030X4NvHFomkHhCJAiEAtIM8gc8iCIa4OlhmCQdxrrf80HsW5al5RrkWS6vuWxYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpAGDKNf9W%2B1ebdjCrcAzF1oLVCrRAlg8%2FX2p84zIShrcmCeEEufHQjh8QPzoJMstgjLoSEP5UMqS9tm%2BrKHVLfXHEp6ylmt6YuuzrhdHMj08ftBezI0YDAWWPmA3fnUBxkwc4orPnKtP%2BXsMizSO3r8AYScQo8OLhOyFmLaxZ%2FeWr1H%2Fdb6zA8hNgSy1aGZTFF4WYN2GLS8A0zaWItlqn0kK1n%2FGBPPcTMNwaQMLZv1dJUBHKE13jlommTZfOJzXoYpJYSOcy4sYOuHSZxteNybO6CigzEUrAUqumAIRz3n7QbJlc1%2BOf%2B40Zkmg8NQ6WBbtrU6YQZda%2BGUnD5r7XvqumZTAwzcanHmH8AB0RQNjxcfgRKWpoO3yFmY0rSgjOMtb4DRongBkQ21hs17lrVzHGxw02J9tJ125BonVtgw7iGFZHBliLAV0deyESeBgBhNv1VZiI%2BuZ2LxK8zxyQKVY9WMU2ArlsjNmsda5WsNaxsbdessH6aWT4Q2fFtJnFL%2BvcPfURYSicdVxwTw%2FwL3JgeWOxMbG%2FoRxCzqNKFKfNCSfySAdRcBeQv9cQj8M6fKyhARPQ%2F%2BIdYm27Hxv2Z6bPXowqU9D4i4GxJ5XnHywEpWV8R%2B28uxvGJ11XQw3OunhHSLyQdD13JMPnpor8GOqUB5MLHeWNWmIbFbm240%2BDUxU6IIibOyijV98IdeyCJ7QXraBpRAkjUbVLOYACrGDr%2FXPtB3%2FsKFdgQEAWF1gr4j3nKOGV%2Ffr%2FlrG%2FNTjZ3PC3KcwSInAQJOLvqjY3fNKbacKCvPNA9uNSuA%2BFsKOmm0Xb6VXCbbO%2FoO86PCpMcbJNEspkUjMeccN2EbfSGnlIfUfvpTDWA5R7Rl8pPr8pIed6WD%2B0F&X-Amz-Signature=a00651636ca8dc83bc088a9c9407805be2a305ae7775dd1287267e75d6a13c40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRDTGGU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBSmFKTLkWuUgYMiFF9k%2F6GKVp5C030X4NvHFomkHhCJAiEAtIM8gc8iCIa4OlhmCQdxrrf80HsW5al5RrkWS6vuWxYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpAGDKNf9W%2B1ebdjCrcAzF1oLVCrRAlg8%2FX2p84zIShrcmCeEEufHQjh8QPzoJMstgjLoSEP5UMqS9tm%2BrKHVLfXHEp6ylmt6YuuzrhdHMj08ftBezI0YDAWWPmA3fnUBxkwc4orPnKtP%2BXsMizSO3r8AYScQo8OLhOyFmLaxZ%2FeWr1H%2Fdb6zA8hNgSy1aGZTFF4WYN2GLS8A0zaWItlqn0kK1n%2FGBPPcTMNwaQMLZv1dJUBHKE13jlommTZfOJzXoYpJYSOcy4sYOuHSZxteNybO6CigzEUrAUqumAIRz3n7QbJlc1%2BOf%2B40Zkmg8NQ6WBbtrU6YQZda%2BGUnD5r7XvqumZTAwzcanHmH8AB0RQNjxcfgRKWpoO3yFmY0rSgjOMtb4DRongBkQ21hs17lrVzHGxw02J9tJ125BonVtgw7iGFZHBliLAV0deyESeBgBhNv1VZiI%2BuZ2LxK8zxyQKVY9WMU2ArlsjNmsda5WsNaxsbdessH6aWT4Q2fFtJnFL%2BvcPfURYSicdVxwTw%2FwL3JgeWOxMbG%2FoRxCzqNKFKfNCSfySAdRcBeQv9cQj8M6fKyhARPQ%2F%2BIdYm27Hxv2Z6bPXowqU9D4i4GxJ5XnHywEpWV8R%2B28uxvGJ11XQw3OunhHSLyQdD13JMPnpor8GOqUB5MLHeWNWmIbFbm240%2BDUxU6IIibOyijV98IdeyCJ7QXraBpRAkjUbVLOYACrGDr%2FXPtB3%2FsKFdgQEAWF1gr4j3nKOGV%2Ffr%2FlrG%2FNTjZ3PC3KcwSInAQJOLvqjY3fNKbacKCvPNA9uNSuA%2BFsKOmm0Xb6VXCbbO%2FoO86PCpMcbJNEspkUjMeccN2EbfSGnlIfUfvpTDWA5R7Rl8pPr8pIed6WD%2B0F&X-Amz-Signature=e16b50a5e40e6e26098ccf09c939457c9794fcda45336d92d6570f15466545a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRDTGGU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBSmFKTLkWuUgYMiFF9k%2F6GKVp5C030X4NvHFomkHhCJAiEAtIM8gc8iCIa4OlhmCQdxrrf80HsW5al5RrkWS6vuWxYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpAGDKNf9W%2B1ebdjCrcAzF1oLVCrRAlg8%2FX2p84zIShrcmCeEEufHQjh8QPzoJMstgjLoSEP5UMqS9tm%2BrKHVLfXHEp6ylmt6YuuzrhdHMj08ftBezI0YDAWWPmA3fnUBxkwc4orPnKtP%2BXsMizSO3r8AYScQo8OLhOyFmLaxZ%2FeWr1H%2Fdb6zA8hNgSy1aGZTFF4WYN2GLS8A0zaWItlqn0kK1n%2FGBPPcTMNwaQMLZv1dJUBHKE13jlommTZfOJzXoYpJYSOcy4sYOuHSZxteNybO6CigzEUrAUqumAIRz3n7QbJlc1%2BOf%2B40Zkmg8NQ6WBbtrU6YQZda%2BGUnD5r7XvqumZTAwzcanHmH8AB0RQNjxcfgRKWpoO3yFmY0rSgjOMtb4DRongBkQ21hs17lrVzHGxw02J9tJ125BonVtgw7iGFZHBliLAV0deyESeBgBhNv1VZiI%2BuZ2LxK8zxyQKVY9WMU2ArlsjNmsda5WsNaxsbdessH6aWT4Q2fFtJnFL%2BvcPfURYSicdVxwTw%2FwL3JgeWOxMbG%2FoRxCzqNKFKfNCSfySAdRcBeQv9cQj8M6fKyhARPQ%2F%2BIdYm27Hxv2Z6bPXowqU9D4i4GxJ5XnHywEpWV8R%2B28uxvGJ11XQw3OunhHSLyQdD13JMPnpor8GOqUB5MLHeWNWmIbFbm240%2BDUxU6IIibOyijV98IdeyCJ7QXraBpRAkjUbVLOYACrGDr%2FXPtB3%2FsKFdgQEAWF1gr4j3nKOGV%2Ffr%2FlrG%2FNTjZ3PC3KcwSInAQJOLvqjY3fNKbacKCvPNA9uNSuA%2BFsKOmm0Xb6VXCbbO%2FoO86PCpMcbJNEspkUjMeccN2EbfSGnlIfUfvpTDWA5R7Rl8pPr8pIed6WD%2B0F&X-Amz-Signature=e77c1447359e34bb2f2dbbca0ed7981ef5b1585e9b3cd5504fb1ef45ed8ff462&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

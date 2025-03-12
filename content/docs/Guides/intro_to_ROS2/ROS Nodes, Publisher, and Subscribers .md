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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNICCZH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCtPvDqCVG03AXjd5fCocbSqwxInDjmKn9TjZesSGPk7AIgdRGswpfHcY2Zg3e%2BnOc3lNxR%2BrytEWHSU%2BFdqmbK%2BVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoi%2FiJsD3EqgRtNpSrcAzdxeWkQVVMh%2BiYuCYlZwyBnKX71ZtAzoxENa%2Fo%2BNL%2BwMsNHcyrIKVVEZcxWJKG7ohH52wCSNxVVIYQvpNhapZNrJKp%2BsmROyjoBdotyBC1dlqYu4YBxeRXA4OJygj7bL1Emnc1dsJykukFjt3ELmOdvmJAH22VqY4bT1fxaLVUY04ySNKw%2Bgzj9qLaxyOWmjHFS87xH7UNs61qNUi%2BOGT8b07Dzsi%2Bbc4kSwRLaPrauaxw8U904wXNr6fDVTywCXJKAQWn40X1lfCbRNQLulCm2eE2J2RZKqtRiHIX7tIEIj9UQQFXX2X4v0QANQ3GSjYuQF%2FvvpufJWQmkVu1HZ%2BnAWTItj9vtKCxG6wYb63RGBoN5N0l8YjHKTfTHsD2aKiul%2BPzDXOnT7jnfstuK%2BqrENniygR1vtouH9GsOGQdPARqfVE%2FWC5kSpHDWdR4WYn%2FxvgjslTB98ihYlsNDwj7jF9VooAs3sVfJPYbDOGV376Osocj%2FHHivg2tOq%2B%2FNTSUckQSHdfJkY502QxIXrWBYbUQVfrRvgQmnHu%2BOyoEUrsx3a5u%2FSxP%2Fe1c3NgTn0c5z7LRunuiHS8ebKc53Yp3a%2FzxDJjBQ7hacK0kVv0ZV0TvK7s8gA6T3xJ7zMMKbxL4GOqUBBcrLocAsdDEioO3WnY0KRPO71S46FVLpJs4Io%2FwnMUtvfIGHjvobnHze3bPqNWkV%2FReD4lYVltcqKurgBmDk4TDiUOrGwFDGOH8PwiIJ21ucij4Q7pLKsUxXGs%2Be6PdZ6NWan%2Ba6xU%2BdYilf6UBGqQifs4qW0Js2fbHh8WcAc%2B%2Bii0buOzmU0qvtjC0MWUIsIsQamglMB4K%2FPJcqZkNA9Od3o69X&X-Amz-Signature=14c0fc7030ca803e267b1a47bbbd5b53059484e8b6b4a3f74412e762ac33d38c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNICCZH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCtPvDqCVG03AXjd5fCocbSqwxInDjmKn9TjZesSGPk7AIgdRGswpfHcY2Zg3e%2BnOc3lNxR%2BrytEWHSU%2BFdqmbK%2BVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoi%2FiJsD3EqgRtNpSrcAzdxeWkQVVMh%2BiYuCYlZwyBnKX71ZtAzoxENa%2Fo%2BNL%2BwMsNHcyrIKVVEZcxWJKG7ohH52wCSNxVVIYQvpNhapZNrJKp%2BsmROyjoBdotyBC1dlqYu4YBxeRXA4OJygj7bL1Emnc1dsJykukFjt3ELmOdvmJAH22VqY4bT1fxaLVUY04ySNKw%2Bgzj9qLaxyOWmjHFS87xH7UNs61qNUi%2BOGT8b07Dzsi%2Bbc4kSwRLaPrauaxw8U904wXNr6fDVTywCXJKAQWn40X1lfCbRNQLulCm2eE2J2RZKqtRiHIX7tIEIj9UQQFXX2X4v0QANQ3GSjYuQF%2FvvpufJWQmkVu1HZ%2BnAWTItj9vtKCxG6wYb63RGBoN5N0l8YjHKTfTHsD2aKiul%2BPzDXOnT7jnfstuK%2BqrENniygR1vtouH9GsOGQdPARqfVE%2FWC5kSpHDWdR4WYn%2FxvgjslTB98ihYlsNDwj7jF9VooAs3sVfJPYbDOGV376Osocj%2FHHivg2tOq%2B%2FNTSUckQSHdfJkY502QxIXrWBYbUQVfrRvgQmnHu%2BOyoEUrsx3a5u%2FSxP%2Fe1c3NgTn0c5z7LRunuiHS8ebKc53Yp3a%2FzxDJjBQ7hacK0kVv0ZV0TvK7s8gA6T3xJ7zMMKbxL4GOqUBBcrLocAsdDEioO3WnY0KRPO71S46FVLpJs4Io%2FwnMUtvfIGHjvobnHze3bPqNWkV%2FReD4lYVltcqKurgBmDk4TDiUOrGwFDGOH8PwiIJ21ucij4Q7pLKsUxXGs%2Be6PdZ6NWan%2Ba6xU%2BdYilf6UBGqQifs4qW0Js2fbHh8WcAc%2B%2Bii0buOzmU0qvtjC0MWUIsIsQamglMB4K%2FPJcqZkNA9Od3o69X&X-Amz-Signature=85a2e1393ad47858c1f090c1a7554b5c3eec20bbb52743291f3456fb2543a728&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNICCZH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCtPvDqCVG03AXjd5fCocbSqwxInDjmKn9TjZesSGPk7AIgdRGswpfHcY2Zg3e%2BnOc3lNxR%2BrytEWHSU%2BFdqmbK%2BVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoi%2FiJsD3EqgRtNpSrcAzdxeWkQVVMh%2BiYuCYlZwyBnKX71ZtAzoxENa%2Fo%2BNL%2BwMsNHcyrIKVVEZcxWJKG7ohH52wCSNxVVIYQvpNhapZNrJKp%2BsmROyjoBdotyBC1dlqYu4YBxeRXA4OJygj7bL1Emnc1dsJykukFjt3ELmOdvmJAH22VqY4bT1fxaLVUY04ySNKw%2Bgzj9qLaxyOWmjHFS87xH7UNs61qNUi%2BOGT8b07Dzsi%2Bbc4kSwRLaPrauaxw8U904wXNr6fDVTywCXJKAQWn40X1lfCbRNQLulCm2eE2J2RZKqtRiHIX7tIEIj9UQQFXX2X4v0QANQ3GSjYuQF%2FvvpufJWQmkVu1HZ%2BnAWTItj9vtKCxG6wYb63RGBoN5N0l8YjHKTfTHsD2aKiul%2BPzDXOnT7jnfstuK%2BqrENniygR1vtouH9GsOGQdPARqfVE%2FWC5kSpHDWdR4WYn%2FxvgjslTB98ihYlsNDwj7jF9VooAs3sVfJPYbDOGV376Osocj%2FHHivg2tOq%2B%2FNTSUckQSHdfJkY502QxIXrWBYbUQVfrRvgQmnHu%2BOyoEUrsx3a5u%2FSxP%2Fe1c3NgTn0c5z7LRunuiHS8ebKc53Yp3a%2FzxDJjBQ7hacK0kVv0ZV0TvK7s8gA6T3xJ7zMMKbxL4GOqUBBcrLocAsdDEioO3WnY0KRPO71S46FVLpJs4Io%2FwnMUtvfIGHjvobnHze3bPqNWkV%2FReD4lYVltcqKurgBmDk4TDiUOrGwFDGOH8PwiIJ21ucij4Q7pLKsUxXGs%2Be6PdZ6NWan%2Ba6xU%2BdYilf6UBGqQifs4qW0Js2fbHh8WcAc%2B%2Bii0buOzmU0qvtjC0MWUIsIsQamglMB4K%2FPJcqZkNA9Od3o69X&X-Amz-Signature=37867da155df85134a227f7860106bead67882ff218a453c0c69c930d658b419&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNICCZH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCtPvDqCVG03AXjd5fCocbSqwxInDjmKn9TjZesSGPk7AIgdRGswpfHcY2Zg3e%2BnOc3lNxR%2BrytEWHSU%2BFdqmbK%2BVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoi%2FiJsD3EqgRtNpSrcAzdxeWkQVVMh%2BiYuCYlZwyBnKX71ZtAzoxENa%2Fo%2BNL%2BwMsNHcyrIKVVEZcxWJKG7ohH52wCSNxVVIYQvpNhapZNrJKp%2BsmROyjoBdotyBC1dlqYu4YBxeRXA4OJygj7bL1Emnc1dsJykukFjt3ELmOdvmJAH22VqY4bT1fxaLVUY04ySNKw%2Bgzj9qLaxyOWmjHFS87xH7UNs61qNUi%2BOGT8b07Dzsi%2Bbc4kSwRLaPrauaxw8U904wXNr6fDVTywCXJKAQWn40X1lfCbRNQLulCm2eE2J2RZKqtRiHIX7tIEIj9UQQFXX2X4v0QANQ3GSjYuQF%2FvvpufJWQmkVu1HZ%2BnAWTItj9vtKCxG6wYb63RGBoN5N0l8YjHKTfTHsD2aKiul%2BPzDXOnT7jnfstuK%2BqrENniygR1vtouH9GsOGQdPARqfVE%2FWC5kSpHDWdR4WYn%2FxvgjslTB98ihYlsNDwj7jF9VooAs3sVfJPYbDOGV376Osocj%2FHHivg2tOq%2B%2FNTSUckQSHdfJkY502QxIXrWBYbUQVfrRvgQmnHu%2BOyoEUrsx3a5u%2FSxP%2Fe1c3NgTn0c5z7LRunuiHS8ebKc53Yp3a%2FzxDJjBQ7hacK0kVv0ZV0TvK7s8gA6T3xJ7zMMKbxL4GOqUBBcrLocAsdDEioO3WnY0KRPO71S46FVLpJs4Io%2FwnMUtvfIGHjvobnHze3bPqNWkV%2FReD4lYVltcqKurgBmDk4TDiUOrGwFDGOH8PwiIJ21ucij4Q7pLKsUxXGs%2Be6PdZ6NWan%2Ba6xU%2BdYilf6UBGqQifs4qW0Js2fbHh8WcAc%2B%2Bii0buOzmU0qvtjC0MWUIsIsQamglMB4K%2FPJcqZkNA9Od3o69X&X-Amz-Signature=cc6933027518c3f67218814aa31c1cbfeb30f04c7f1768c45b6142a3f136f304&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNICCZH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCtPvDqCVG03AXjd5fCocbSqwxInDjmKn9TjZesSGPk7AIgdRGswpfHcY2Zg3e%2BnOc3lNxR%2BrytEWHSU%2BFdqmbK%2BVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoi%2FiJsD3EqgRtNpSrcAzdxeWkQVVMh%2BiYuCYlZwyBnKX71ZtAzoxENa%2Fo%2BNL%2BwMsNHcyrIKVVEZcxWJKG7ohH52wCSNxVVIYQvpNhapZNrJKp%2BsmROyjoBdotyBC1dlqYu4YBxeRXA4OJygj7bL1Emnc1dsJykukFjt3ELmOdvmJAH22VqY4bT1fxaLVUY04ySNKw%2Bgzj9qLaxyOWmjHFS87xH7UNs61qNUi%2BOGT8b07Dzsi%2Bbc4kSwRLaPrauaxw8U904wXNr6fDVTywCXJKAQWn40X1lfCbRNQLulCm2eE2J2RZKqtRiHIX7tIEIj9UQQFXX2X4v0QANQ3GSjYuQF%2FvvpufJWQmkVu1HZ%2BnAWTItj9vtKCxG6wYb63RGBoN5N0l8YjHKTfTHsD2aKiul%2BPzDXOnT7jnfstuK%2BqrENniygR1vtouH9GsOGQdPARqfVE%2FWC5kSpHDWdR4WYn%2FxvgjslTB98ihYlsNDwj7jF9VooAs3sVfJPYbDOGV376Osocj%2FHHivg2tOq%2B%2FNTSUckQSHdfJkY502QxIXrWBYbUQVfrRvgQmnHu%2BOyoEUrsx3a5u%2FSxP%2Fe1c3NgTn0c5z7LRunuiHS8ebKc53Yp3a%2FzxDJjBQ7hacK0kVv0ZV0TvK7s8gA6T3xJ7zMMKbxL4GOqUBBcrLocAsdDEioO3WnY0KRPO71S46FVLpJs4Io%2FwnMUtvfIGHjvobnHze3bPqNWkV%2FReD4lYVltcqKurgBmDk4TDiUOrGwFDGOH8PwiIJ21ucij4Q7pLKsUxXGs%2Be6PdZ6NWan%2Ba6xU%2BdYilf6UBGqQifs4qW0Js2fbHh8WcAc%2B%2Bii0buOzmU0qvtjC0MWUIsIsQamglMB4K%2FPJcqZkNA9Od3o69X&X-Amz-Signature=f81fabb410800d04f749adc188d145ae6655ab360d4203c391055538e8f64473&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNICCZH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCtPvDqCVG03AXjd5fCocbSqwxInDjmKn9TjZesSGPk7AIgdRGswpfHcY2Zg3e%2BnOc3lNxR%2BrytEWHSU%2BFdqmbK%2BVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoi%2FiJsD3EqgRtNpSrcAzdxeWkQVVMh%2BiYuCYlZwyBnKX71ZtAzoxENa%2Fo%2BNL%2BwMsNHcyrIKVVEZcxWJKG7ohH52wCSNxVVIYQvpNhapZNrJKp%2BsmROyjoBdotyBC1dlqYu4YBxeRXA4OJygj7bL1Emnc1dsJykukFjt3ELmOdvmJAH22VqY4bT1fxaLVUY04ySNKw%2Bgzj9qLaxyOWmjHFS87xH7UNs61qNUi%2BOGT8b07Dzsi%2Bbc4kSwRLaPrauaxw8U904wXNr6fDVTywCXJKAQWn40X1lfCbRNQLulCm2eE2J2RZKqtRiHIX7tIEIj9UQQFXX2X4v0QANQ3GSjYuQF%2FvvpufJWQmkVu1HZ%2BnAWTItj9vtKCxG6wYb63RGBoN5N0l8YjHKTfTHsD2aKiul%2BPzDXOnT7jnfstuK%2BqrENniygR1vtouH9GsOGQdPARqfVE%2FWC5kSpHDWdR4WYn%2FxvgjslTB98ihYlsNDwj7jF9VooAs3sVfJPYbDOGV376Osocj%2FHHivg2tOq%2B%2FNTSUckQSHdfJkY502QxIXrWBYbUQVfrRvgQmnHu%2BOyoEUrsx3a5u%2FSxP%2Fe1c3NgTn0c5z7LRunuiHS8ebKc53Yp3a%2FzxDJjBQ7hacK0kVv0ZV0TvK7s8gA6T3xJ7zMMKbxL4GOqUBBcrLocAsdDEioO3WnY0KRPO71S46FVLpJs4Io%2FwnMUtvfIGHjvobnHze3bPqNWkV%2FReD4lYVltcqKurgBmDk4TDiUOrGwFDGOH8PwiIJ21ucij4Q7pLKsUxXGs%2Be6PdZ6NWan%2Ba6xU%2BdYilf6UBGqQifs4qW0Js2fbHh8WcAc%2B%2Bii0buOzmU0qvtjC0MWUIsIsQamglMB4K%2FPJcqZkNA9Od3o69X&X-Amz-Signature=947e1f297aca4084e7d78248ce488f372294fd68195c8a2354023b4e1ce5238d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNICCZH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCtPvDqCVG03AXjd5fCocbSqwxInDjmKn9TjZesSGPk7AIgdRGswpfHcY2Zg3e%2BnOc3lNxR%2BrytEWHSU%2BFdqmbK%2BVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoi%2FiJsD3EqgRtNpSrcAzdxeWkQVVMh%2BiYuCYlZwyBnKX71ZtAzoxENa%2Fo%2BNL%2BwMsNHcyrIKVVEZcxWJKG7ohH52wCSNxVVIYQvpNhapZNrJKp%2BsmROyjoBdotyBC1dlqYu4YBxeRXA4OJygj7bL1Emnc1dsJykukFjt3ELmOdvmJAH22VqY4bT1fxaLVUY04ySNKw%2Bgzj9qLaxyOWmjHFS87xH7UNs61qNUi%2BOGT8b07Dzsi%2Bbc4kSwRLaPrauaxw8U904wXNr6fDVTywCXJKAQWn40X1lfCbRNQLulCm2eE2J2RZKqtRiHIX7tIEIj9UQQFXX2X4v0QANQ3GSjYuQF%2FvvpufJWQmkVu1HZ%2BnAWTItj9vtKCxG6wYb63RGBoN5N0l8YjHKTfTHsD2aKiul%2BPzDXOnT7jnfstuK%2BqrENniygR1vtouH9GsOGQdPARqfVE%2FWC5kSpHDWdR4WYn%2FxvgjslTB98ihYlsNDwj7jF9VooAs3sVfJPYbDOGV376Osocj%2FHHivg2tOq%2B%2FNTSUckQSHdfJkY502QxIXrWBYbUQVfrRvgQmnHu%2BOyoEUrsx3a5u%2FSxP%2Fe1c3NgTn0c5z7LRunuiHS8ebKc53Yp3a%2FzxDJjBQ7hacK0kVv0ZV0TvK7s8gA6T3xJ7zMMKbxL4GOqUBBcrLocAsdDEioO3WnY0KRPO71S46FVLpJs4Io%2FwnMUtvfIGHjvobnHze3bPqNWkV%2FReD4lYVltcqKurgBmDk4TDiUOrGwFDGOH8PwiIJ21ucij4Q7pLKsUxXGs%2Be6PdZ6NWan%2Ba6xU%2BdYilf6UBGqQifs4qW0Js2fbHh8WcAc%2B%2Bii0buOzmU0qvtjC0MWUIsIsQamglMB4K%2FPJcqZkNA9Od3o69X&X-Amz-Signature=41f58166c7afb17291dd50b2aca152804a4607fda7bb49f4e31ea9b7ef8a4e93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNICCZH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCtPvDqCVG03AXjd5fCocbSqwxInDjmKn9TjZesSGPk7AIgdRGswpfHcY2Zg3e%2BnOc3lNxR%2BrytEWHSU%2BFdqmbK%2BVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoi%2FiJsD3EqgRtNpSrcAzdxeWkQVVMh%2BiYuCYlZwyBnKX71ZtAzoxENa%2Fo%2BNL%2BwMsNHcyrIKVVEZcxWJKG7ohH52wCSNxVVIYQvpNhapZNrJKp%2BsmROyjoBdotyBC1dlqYu4YBxeRXA4OJygj7bL1Emnc1dsJykukFjt3ELmOdvmJAH22VqY4bT1fxaLVUY04ySNKw%2Bgzj9qLaxyOWmjHFS87xH7UNs61qNUi%2BOGT8b07Dzsi%2Bbc4kSwRLaPrauaxw8U904wXNr6fDVTywCXJKAQWn40X1lfCbRNQLulCm2eE2J2RZKqtRiHIX7tIEIj9UQQFXX2X4v0QANQ3GSjYuQF%2FvvpufJWQmkVu1HZ%2BnAWTItj9vtKCxG6wYb63RGBoN5N0l8YjHKTfTHsD2aKiul%2BPzDXOnT7jnfstuK%2BqrENniygR1vtouH9GsOGQdPARqfVE%2FWC5kSpHDWdR4WYn%2FxvgjslTB98ihYlsNDwj7jF9VooAs3sVfJPYbDOGV376Osocj%2FHHivg2tOq%2B%2FNTSUckQSHdfJkY502QxIXrWBYbUQVfrRvgQmnHu%2BOyoEUrsx3a5u%2FSxP%2Fe1c3NgTn0c5z7LRunuiHS8ebKc53Yp3a%2FzxDJjBQ7hacK0kVv0ZV0TvK7s8gA6T3xJ7zMMKbxL4GOqUBBcrLocAsdDEioO3WnY0KRPO71S46FVLpJs4Io%2FwnMUtvfIGHjvobnHze3bPqNWkV%2FReD4lYVltcqKurgBmDk4TDiUOrGwFDGOH8PwiIJ21ucij4Q7pLKsUxXGs%2Be6PdZ6NWan%2Ba6xU%2BdYilf6UBGqQifs4qW0Js2fbHh8WcAc%2B%2Bii0buOzmU0qvtjC0MWUIsIsQamglMB4K%2FPJcqZkNA9Od3o69X&X-Amz-Signature=c812956aa98b929db177d718d689430e8acd4c5cb6e71ebf3c1387f9bfc467f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

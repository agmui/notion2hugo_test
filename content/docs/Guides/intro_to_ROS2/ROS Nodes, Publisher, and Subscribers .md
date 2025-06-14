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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AKUZS7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFpuYx98ahtmDylyp4%2BQtrtuo9jDfr%2FCfoWm0JEAUhItAiB7f34P%2Bk2dLI0ndr8RbnUa%2FWq0ihsRyjlcIJdJNxefdir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMDqx%2Ffp18swCAnmx6KtwDjJ8J%2BQxkitewFasDvZ1tM4YlxibfpLx3djVE7C%2FIVohrTk9egCvZJXMuIx9slDRFJS1iHHcGSGAZ2MvsFXf9CZ5laJ06sId8kylAoUM%2Fztd4tUvppF0gFGvQ5Yv%2FkIJbDYsZMWIR%2B50uuLm4iYmZ%2FpB7d%2BvIpNVQn2iNQX3jBBddHuAB6itAz7FAivf5hIjETLboclCRI0iD5ygKS62SeqWlKlvqg0SXmn1%2B5bnUoXY6qUhpCe7AFckSmS0ADDc99aT380SKB7xnvjrlF8Nu6AOqizcrzdHOOasruMPfxcLG7lJMRs1TdSYXgOXH2goOjfM72XEHnfxspNDRnmiLvO8pw%2Be1Wvx0JhkGGtVGR8YcMN1%2BCHIq2rKZPxcoV0xmhkuZ6nL19K0XD9L6VZVTPdmOWPSuH6naKF7xOuE8xSHjMGsxOXHvewU3wehl%2FrA57A6suwN%2F2qqebGGiTy2iGXbsjxgKdr%2FhZCVcEnyXdTXwvpqTUloXlR7kfoIMF8wP%2BmOByLikfP6I5xLW2ZtrLHvmJvgZF3oh8BCZDpmWpc5msfZ7s4JfRMOcQ1rh9hchlAyb%2FLIb1hxm3NbLI2raO%2Fpk%2BowKXoE8yl5R9FYivdygjLA8zczCcrm5c70ww5O1wgY6pgF6gecXOpKkzAotK7dpk1%2B9Q8GfUarMvEi3x3ngv5bdWrfxBbWp%2BVwvW0QKVKk5bBA1uiDmzcE22boiVSLvh843RpcLxM8Wtujmh9FxRXzzIcsk0AUDaMrNGoNOHZboAAzvXmBk8feoNCsnafktgAJwM6nZvfl3Wf8WeieMwYPq39D1Q9wLhtlnVQXu4xZmdS7yW6rmd29Ar7hCCgS7D2boIhD9oHoK&X-Amz-Signature=a1b4785f0a8c5cb349ef450a7829c97c399ec37cae1607275c9b1585627fbac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AKUZS7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFpuYx98ahtmDylyp4%2BQtrtuo9jDfr%2FCfoWm0JEAUhItAiB7f34P%2Bk2dLI0ndr8RbnUa%2FWq0ihsRyjlcIJdJNxefdir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMDqx%2Ffp18swCAnmx6KtwDjJ8J%2BQxkitewFasDvZ1tM4YlxibfpLx3djVE7C%2FIVohrTk9egCvZJXMuIx9slDRFJS1iHHcGSGAZ2MvsFXf9CZ5laJ06sId8kylAoUM%2Fztd4tUvppF0gFGvQ5Yv%2FkIJbDYsZMWIR%2B50uuLm4iYmZ%2FpB7d%2BvIpNVQn2iNQX3jBBddHuAB6itAz7FAivf5hIjETLboclCRI0iD5ygKS62SeqWlKlvqg0SXmn1%2B5bnUoXY6qUhpCe7AFckSmS0ADDc99aT380SKB7xnvjrlF8Nu6AOqizcrzdHOOasruMPfxcLG7lJMRs1TdSYXgOXH2goOjfM72XEHnfxspNDRnmiLvO8pw%2Be1Wvx0JhkGGtVGR8YcMN1%2BCHIq2rKZPxcoV0xmhkuZ6nL19K0XD9L6VZVTPdmOWPSuH6naKF7xOuE8xSHjMGsxOXHvewU3wehl%2FrA57A6suwN%2F2qqebGGiTy2iGXbsjxgKdr%2FhZCVcEnyXdTXwvpqTUloXlR7kfoIMF8wP%2BmOByLikfP6I5xLW2ZtrLHvmJvgZF3oh8BCZDpmWpc5msfZ7s4JfRMOcQ1rh9hchlAyb%2FLIb1hxm3NbLI2raO%2Fpk%2BowKXoE8yl5R9FYivdygjLA8zczCcrm5c70ww5O1wgY6pgF6gecXOpKkzAotK7dpk1%2B9Q8GfUarMvEi3x3ngv5bdWrfxBbWp%2BVwvW0QKVKk5bBA1uiDmzcE22boiVSLvh843RpcLxM8Wtujmh9FxRXzzIcsk0AUDaMrNGoNOHZboAAzvXmBk8feoNCsnafktgAJwM6nZvfl3Wf8WeieMwYPq39D1Q9wLhtlnVQXu4xZmdS7yW6rmd29Ar7hCCgS7D2boIhD9oHoK&X-Amz-Signature=e027cc8ec7b34cea01d5da0fbc0d82d5e64c544f8f11da6abbfa0500de1e7789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AKUZS7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFpuYx98ahtmDylyp4%2BQtrtuo9jDfr%2FCfoWm0JEAUhItAiB7f34P%2Bk2dLI0ndr8RbnUa%2FWq0ihsRyjlcIJdJNxefdir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMDqx%2Ffp18swCAnmx6KtwDjJ8J%2BQxkitewFasDvZ1tM4YlxibfpLx3djVE7C%2FIVohrTk9egCvZJXMuIx9slDRFJS1iHHcGSGAZ2MvsFXf9CZ5laJ06sId8kylAoUM%2Fztd4tUvppF0gFGvQ5Yv%2FkIJbDYsZMWIR%2B50uuLm4iYmZ%2FpB7d%2BvIpNVQn2iNQX3jBBddHuAB6itAz7FAivf5hIjETLboclCRI0iD5ygKS62SeqWlKlvqg0SXmn1%2B5bnUoXY6qUhpCe7AFckSmS0ADDc99aT380SKB7xnvjrlF8Nu6AOqizcrzdHOOasruMPfxcLG7lJMRs1TdSYXgOXH2goOjfM72XEHnfxspNDRnmiLvO8pw%2Be1Wvx0JhkGGtVGR8YcMN1%2BCHIq2rKZPxcoV0xmhkuZ6nL19K0XD9L6VZVTPdmOWPSuH6naKF7xOuE8xSHjMGsxOXHvewU3wehl%2FrA57A6suwN%2F2qqebGGiTy2iGXbsjxgKdr%2FhZCVcEnyXdTXwvpqTUloXlR7kfoIMF8wP%2BmOByLikfP6I5xLW2ZtrLHvmJvgZF3oh8BCZDpmWpc5msfZ7s4JfRMOcQ1rh9hchlAyb%2FLIb1hxm3NbLI2raO%2Fpk%2BowKXoE8yl5R9FYivdygjLA8zczCcrm5c70ww5O1wgY6pgF6gecXOpKkzAotK7dpk1%2B9Q8GfUarMvEi3x3ngv5bdWrfxBbWp%2BVwvW0QKVKk5bBA1uiDmzcE22boiVSLvh843RpcLxM8Wtujmh9FxRXzzIcsk0AUDaMrNGoNOHZboAAzvXmBk8feoNCsnafktgAJwM6nZvfl3Wf8WeieMwYPq39D1Q9wLhtlnVQXu4xZmdS7yW6rmd29Ar7hCCgS7D2boIhD9oHoK&X-Amz-Signature=0484b48b64238514f40a3e0f3f26d1b204b42aca71558d3d2ba1395697a31bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AKUZS7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFpuYx98ahtmDylyp4%2BQtrtuo9jDfr%2FCfoWm0JEAUhItAiB7f34P%2Bk2dLI0ndr8RbnUa%2FWq0ihsRyjlcIJdJNxefdir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMDqx%2Ffp18swCAnmx6KtwDjJ8J%2BQxkitewFasDvZ1tM4YlxibfpLx3djVE7C%2FIVohrTk9egCvZJXMuIx9slDRFJS1iHHcGSGAZ2MvsFXf9CZ5laJ06sId8kylAoUM%2Fztd4tUvppF0gFGvQ5Yv%2FkIJbDYsZMWIR%2B50uuLm4iYmZ%2FpB7d%2BvIpNVQn2iNQX3jBBddHuAB6itAz7FAivf5hIjETLboclCRI0iD5ygKS62SeqWlKlvqg0SXmn1%2B5bnUoXY6qUhpCe7AFckSmS0ADDc99aT380SKB7xnvjrlF8Nu6AOqizcrzdHOOasruMPfxcLG7lJMRs1TdSYXgOXH2goOjfM72XEHnfxspNDRnmiLvO8pw%2Be1Wvx0JhkGGtVGR8YcMN1%2BCHIq2rKZPxcoV0xmhkuZ6nL19K0XD9L6VZVTPdmOWPSuH6naKF7xOuE8xSHjMGsxOXHvewU3wehl%2FrA57A6suwN%2F2qqebGGiTy2iGXbsjxgKdr%2FhZCVcEnyXdTXwvpqTUloXlR7kfoIMF8wP%2BmOByLikfP6I5xLW2ZtrLHvmJvgZF3oh8BCZDpmWpc5msfZ7s4JfRMOcQ1rh9hchlAyb%2FLIb1hxm3NbLI2raO%2Fpk%2BowKXoE8yl5R9FYivdygjLA8zczCcrm5c70ww5O1wgY6pgF6gecXOpKkzAotK7dpk1%2B9Q8GfUarMvEi3x3ngv5bdWrfxBbWp%2BVwvW0QKVKk5bBA1uiDmzcE22boiVSLvh843RpcLxM8Wtujmh9FxRXzzIcsk0AUDaMrNGoNOHZboAAzvXmBk8feoNCsnafktgAJwM6nZvfl3Wf8WeieMwYPq39D1Q9wLhtlnVQXu4xZmdS7yW6rmd29Ar7hCCgS7D2boIhD9oHoK&X-Amz-Signature=5ec39dc730797fd20f49a9e8a6ac2cc990746ad311b23c782adfa4670154fc03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AKUZS7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFpuYx98ahtmDylyp4%2BQtrtuo9jDfr%2FCfoWm0JEAUhItAiB7f34P%2Bk2dLI0ndr8RbnUa%2FWq0ihsRyjlcIJdJNxefdir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMDqx%2Ffp18swCAnmx6KtwDjJ8J%2BQxkitewFasDvZ1tM4YlxibfpLx3djVE7C%2FIVohrTk9egCvZJXMuIx9slDRFJS1iHHcGSGAZ2MvsFXf9CZ5laJ06sId8kylAoUM%2Fztd4tUvppF0gFGvQ5Yv%2FkIJbDYsZMWIR%2B50uuLm4iYmZ%2FpB7d%2BvIpNVQn2iNQX3jBBddHuAB6itAz7FAivf5hIjETLboclCRI0iD5ygKS62SeqWlKlvqg0SXmn1%2B5bnUoXY6qUhpCe7AFckSmS0ADDc99aT380SKB7xnvjrlF8Nu6AOqizcrzdHOOasruMPfxcLG7lJMRs1TdSYXgOXH2goOjfM72XEHnfxspNDRnmiLvO8pw%2Be1Wvx0JhkGGtVGR8YcMN1%2BCHIq2rKZPxcoV0xmhkuZ6nL19K0XD9L6VZVTPdmOWPSuH6naKF7xOuE8xSHjMGsxOXHvewU3wehl%2FrA57A6suwN%2F2qqebGGiTy2iGXbsjxgKdr%2FhZCVcEnyXdTXwvpqTUloXlR7kfoIMF8wP%2BmOByLikfP6I5xLW2ZtrLHvmJvgZF3oh8BCZDpmWpc5msfZ7s4JfRMOcQ1rh9hchlAyb%2FLIb1hxm3NbLI2raO%2Fpk%2BowKXoE8yl5R9FYivdygjLA8zczCcrm5c70ww5O1wgY6pgF6gecXOpKkzAotK7dpk1%2B9Q8GfUarMvEi3x3ngv5bdWrfxBbWp%2BVwvW0QKVKk5bBA1uiDmzcE22boiVSLvh843RpcLxM8Wtujmh9FxRXzzIcsk0AUDaMrNGoNOHZboAAzvXmBk8feoNCsnafktgAJwM6nZvfl3Wf8WeieMwYPq39D1Q9wLhtlnVQXu4xZmdS7yW6rmd29Ar7hCCgS7D2boIhD9oHoK&X-Amz-Signature=97e0d47eaec1d58cdbc753787ac01841382068df7145f00a13fa1e141b46663b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AKUZS7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFpuYx98ahtmDylyp4%2BQtrtuo9jDfr%2FCfoWm0JEAUhItAiB7f34P%2Bk2dLI0ndr8RbnUa%2FWq0ihsRyjlcIJdJNxefdir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMDqx%2Ffp18swCAnmx6KtwDjJ8J%2BQxkitewFasDvZ1tM4YlxibfpLx3djVE7C%2FIVohrTk9egCvZJXMuIx9slDRFJS1iHHcGSGAZ2MvsFXf9CZ5laJ06sId8kylAoUM%2Fztd4tUvppF0gFGvQ5Yv%2FkIJbDYsZMWIR%2B50uuLm4iYmZ%2FpB7d%2BvIpNVQn2iNQX3jBBddHuAB6itAz7FAivf5hIjETLboclCRI0iD5ygKS62SeqWlKlvqg0SXmn1%2B5bnUoXY6qUhpCe7AFckSmS0ADDc99aT380SKB7xnvjrlF8Nu6AOqizcrzdHOOasruMPfxcLG7lJMRs1TdSYXgOXH2goOjfM72XEHnfxspNDRnmiLvO8pw%2Be1Wvx0JhkGGtVGR8YcMN1%2BCHIq2rKZPxcoV0xmhkuZ6nL19K0XD9L6VZVTPdmOWPSuH6naKF7xOuE8xSHjMGsxOXHvewU3wehl%2FrA57A6suwN%2F2qqebGGiTy2iGXbsjxgKdr%2FhZCVcEnyXdTXwvpqTUloXlR7kfoIMF8wP%2BmOByLikfP6I5xLW2ZtrLHvmJvgZF3oh8BCZDpmWpc5msfZ7s4JfRMOcQ1rh9hchlAyb%2FLIb1hxm3NbLI2raO%2Fpk%2BowKXoE8yl5R9FYivdygjLA8zczCcrm5c70ww5O1wgY6pgF6gecXOpKkzAotK7dpk1%2B9Q8GfUarMvEi3x3ngv5bdWrfxBbWp%2BVwvW0QKVKk5bBA1uiDmzcE22boiVSLvh843RpcLxM8Wtujmh9FxRXzzIcsk0AUDaMrNGoNOHZboAAzvXmBk8feoNCsnafktgAJwM6nZvfl3Wf8WeieMwYPq39D1Q9wLhtlnVQXu4xZmdS7yW6rmd29Ar7hCCgS7D2boIhD9oHoK&X-Amz-Signature=32b434175d77b24c2401db405f000cf5c1b1551a3ce427e430ab6aecddcc1f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AKUZS7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFpuYx98ahtmDylyp4%2BQtrtuo9jDfr%2FCfoWm0JEAUhItAiB7f34P%2Bk2dLI0ndr8RbnUa%2FWq0ihsRyjlcIJdJNxefdir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMDqx%2Ffp18swCAnmx6KtwDjJ8J%2BQxkitewFasDvZ1tM4YlxibfpLx3djVE7C%2FIVohrTk9egCvZJXMuIx9slDRFJS1iHHcGSGAZ2MvsFXf9CZ5laJ06sId8kylAoUM%2Fztd4tUvppF0gFGvQ5Yv%2FkIJbDYsZMWIR%2B50uuLm4iYmZ%2FpB7d%2BvIpNVQn2iNQX3jBBddHuAB6itAz7FAivf5hIjETLboclCRI0iD5ygKS62SeqWlKlvqg0SXmn1%2B5bnUoXY6qUhpCe7AFckSmS0ADDc99aT380SKB7xnvjrlF8Nu6AOqizcrzdHOOasruMPfxcLG7lJMRs1TdSYXgOXH2goOjfM72XEHnfxspNDRnmiLvO8pw%2Be1Wvx0JhkGGtVGR8YcMN1%2BCHIq2rKZPxcoV0xmhkuZ6nL19K0XD9L6VZVTPdmOWPSuH6naKF7xOuE8xSHjMGsxOXHvewU3wehl%2FrA57A6suwN%2F2qqebGGiTy2iGXbsjxgKdr%2FhZCVcEnyXdTXwvpqTUloXlR7kfoIMF8wP%2BmOByLikfP6I5xLW2ZtrLHvmJvgZF3oh8BCZDpmWpc5msfZ7s4JfRMOcQ1rh9hchlAyb%2FLIb1hxm3NbLI2raO%2Fpk%2BowKXoE8yl5R9FYivdygjLA8zczCcrm5c70ww5O1wgY6pgF6gecXOpKkzAotK7dpk1%2B9Q8GfUarMvEi3x3ngv5bdWrfxBbWp%2BVwvW0QKVKk5bBA1uiDmzcE22boiVSLvh843RpcLxM8Wtujmh9FxRXzzIcsk0AUDaMrNGoNOHZboAAzvXmBk8feoNCsnafktgAJwM6nZvfl3Wf8WeieMwYPq39D1Q9wLhtlnVQXu4xZmdS7yW6rmd29Ar7hCCgS7D2boIhD9oHoK&X-Amz-Signature=2cdbacb266194599686805f91c40cc68fbb75fe1c10aeae8f5e6eb546b5afd67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AKUZS7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFpuYx98ahtmDylyp4%2BQtrtuo9jDfr%2FCfoWm0JEAUhItAiB7f34P%2Bk2dLI0ndr8RbnUa%2FWq0ihsRyjlcIJdJNxefdir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMDqx%2Ffp18swCAnmx6KtwDjJ8J%2BQxkitewFasDvZ1tM4YlxibfpLx3djVE7C%2FIVohrTk9egCvZJXMuIx9slDRFJS1iHHcGSGAZ2MvsFXf9CZ5laJ06sId8kylAoUM%2Fztd4tUvppF0gFGvQ5Yv%2FkIJbDYsZMWIR%2B50uuLm4iYmZ%2FpB7d%2BvIpNVQn2iNQX3jBBddHuAB6itAz7FAivf5hIjETLboclCRI0iD5ygKS62SeqWlKlvqg0SXmn1%2B5bnUoXY6qUhpCe7AFckSmS0ADDc99aT380SKB7xnvjrlF8Nu6AOqizcrzdHOOasruMPfxcLG7lJMRs1TdSYXgOXH2goOjfM72XEHnfxspNDRnmiLvO8pw%2Be1Wvx0JhkGGtVGR8YcMN1%2BCHIq2rKZPxcoV0xmhkuZ6nL19K0XD9L6VZVTPdmOWPSuH6naKF7xOuE8xSHjMGsxOXHvewU3wehl%2FrA57A6suwN%2F2qqebGGiTy2iGXbsjxgKdr%2FhZCVcEnyXdTXwvpqTUloXlR7kfoIMF8wP%2BmOByLikfP6I5xLW2ZtrLHvmJvgZF3oh8BCZDpmWpc5msfZ7s4JfRMOcQ1rh9hchlAyb%2FLIb1hxm3NbLI2raO%2Fpk%2BowKXoE8yl5R9FYivdygjLA8zczCcrm5c70ww5O1wgY6pgF6gecXOpKkzAotK7dpk1%2B9Q8GfUarMvEi3x3ngv5bdWrfxBbWp%2BVwvW0QKVKk5bBA1uiDmzcE22boiVSLvh843RpcLxM8Wtujmh9FxRXzzIcsk0AUDaMrNGoNOHZboAAzvXmBk8feoNCsnafktgAJwM6nZvfl3Wf8WeieMwYPq39D1Q9wLhtlnVQXu4xZmdS7yW6rmd29Ar7hCCgS7D2boIhD9oHoK&X-Amz-Signature=d2f2987797608045637070f95a33f4a314045e0a7de9a8260ae747be91f9c7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

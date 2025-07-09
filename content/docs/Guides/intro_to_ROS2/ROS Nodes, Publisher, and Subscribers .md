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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3QZRF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmvdUnNr4leLExp%2BtfvYCy7BJ9Eg8CSz9f4Lz86tPxbgIhAIgO3yQteyPag3jCpUrd0px1zvuyvd7%2Bo3zRw4uuL7q1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlb3HT8eWs%2FzWEQeQq3AMwmgg2XQOsRrT%2FXJfxIywj89cC0touer3Oj4DXPdOE8a5t%2BLBlaymPwskS0TMITdeoKbmj2VuQaRVICVoF1KcbH3ZBvxFyKGptz86y9gV43SkBMCFFQE8PrdigO7MIXN%2FC%2B%2FD%2B8KUp5Rmx78ulBFJHaRaABQ9XF10tZo90eUpb6S0YCfq1sRUDkqSqBgCSlmJwZ7By5uiP%2F5vbBml8N9G9M1qmWDDMYruKzYwoT4uAR68%2F8G%2Bz3XnSZCDEfU9Juna2CXilpplKrd5pcLa%2FVI9OilK0eQDhQ00an0GloH0PUVMVD7KgGc4R3Uf4FDPV43Fj9NHcHP8QgGg2eV7dp1bzVI6MQJv2OFY7mP8dyXI499SJoFP9HxIPWNLnYADucKYk%2BMDS7NFrXik8E%2B%2BK8qdC41Sz1ILxY1uPim6an3f8CmYXCy4y%2BTnqDvD5y2mEVrK6c6VuWBYFSkn2bwlw8pNecys9Mkq7yGB%2FLYGZO%2BA7vziRzbKezbT%2BbD9t%2BPkpz8vvbRbLBI9hdYWGiwIwaSpkEYaO4rgNxPcAGtGCtGR8RojePicoBgf9YF1lq7k2Df%2BdK8E%2FDhl0LLbV3fCMhDakM3HyE8F0NA0q9FEXixu%2FI0bHtOLfNkTsxOF9DjCzs7bDBjqkARZZc%2BnCZylEEx6PMmFLbD9Sa7bCtRKqY1nL8%2FQJcHbqm1oTW7xyaP%2Bpeg5QanyS3hEdlkYRGV1JGtpdclqlO3DuZO%2B%2BuE4%2FqVqFZEjykHzmpaRzEjEJnvhMb1jfC24MERvI%2Bz90f3H%2Fioo3Q2MoXmOIbg5I64HuQu9tE%2Bo9JmPwPkr%2BpLTpxxCckG537ZEj3YvtNEEFE6l%2FURDGfSm3ESfgsFZQ&X-Amz-Signature=274c32883a977471c02b4e63f911c25e43313d845e033156d1b5796c14ad4c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3QZRF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmvdUnNr4leLExp%2BtfvYCy7BJ9Eg8CSz9f4Lz86tPxbgIhAIgO3yQteyPag3jCpUrd0px1zvuyvd7%2Bo3zRw4uuL7q1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlb3HT8eWs%2FzWEQeQq3AMwmgg2XQOsRrT%2FXJfxIywj89cC0touer3Oj4DXPdOE8a5t%2BLBlaymPwskS0TMITdeoKbmj2VuQaRVICVoF1KcbH3ZBvxFyKGptz86y9gV43SkBMCFFQE8PrdigO7MIXN%2FC%2B%2FD%2B8KUp5Rmx78ulBFJHaRaABQ9XF10tZo90eUpb6S0YCfq1sRUDkqSqBgCSlmJwZ7By5uiP%2F5vbBml8N9G9M1qmWDDMYruKzYwoT4uAR68%2F8G%2Bz3XnSZCDEfU9Juna2CXilpplKrd5pcLa%2FVI9OilK0eQDhQ00an0GloH0PUVMVD7KgGc4R3Uf4FDPV43Fj9NHcHP8QgGg2eV7dp1bzVI6MQJv2OFY7mP8dyXI499SJoFP9HxIPWNLnYADucKYk%2BMDS7NFrXik8E%2B%2BK8qdC41Sz1ILxY1uPim6an3f8CmYXCy4y%2BTnqDvD5y2mEVrK6c6VuWBYFSkn2bwlw8pNecys9Mkq7yGB%2FLYGZO%2BA7vziRzbKezbT%2BbD9t%2BPkpz8vvbRbLBI9hdYWGiwIwaSpkEYaO4rgNxPcAGtGCtGR8RojePicoBgf9YF1lq7k2Df%2BdK8E%2FDhl0LLbV3fCMhDakM3HyE8F0NA0q9FEXixu%2FI0bHtOLfNkTsxOF9DjCzs7bDBjqkARZZc%2BnCZylEEx6PMmFLbD9Sa7bCtRKqY1nL8%2FQJcHbqm1oTW7xyaP%2Bpeg5QanyS3hEdlkYRGV1JGtpdclqlO3DuZO%2B%2BuE4%2FqVqFZEjykHzmpaRzEjEJnvhMb1jfC24MERvI%2Bz90f3H%2Fioo3Q2MoXmOIbg5I64HuQu9tE%2Bo9JmPwPkr%2BpLTpxxCckG537ZEj3YvtNEEFE6l%2FURDGfSm3ESfgsFZQ&X-Amz-Signature=4af82112f19f6940c3d4e8a9f4d778b902e1cc38be3a590789b8f9ccb324b2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3QZRF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmvdUnNr4leLExp%2BtfvYCy7BJ9Eg8CSz9f4Lz86tPxbgIhAIgO3yQteyPag3jCpUrd0px1zvuyvd7%2Bo3zRw4uuL7q1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlb3HT8eWs%2FzWEQeQq3AMwmgg2XQOsRrT%2FXJfxIywj89cC0touer3Oj4DXPdOE8a5t%2BLBlaymPwskS0TMITdeoKbmj2VuQaRVICVoF1KcbH3ZBvxFyKGptz86y9gV43SkBMCFFQE8PrdigO7MIXN%2FC%2B%2FD%2B8KUp5Rmx78ulBFJHaRaABQ9XF10tZo90eUpb6S0YCfq1sRUDkqSqBgCSlmJwZ7By5uiP%2F5vbBml8N9G9M1qmWDDMYruKzYwoT4uAR68%2F8G%2Bz3XnSZCDEfU9Juna2CXilpplKrd5pcLa%2FVI9OilK0eQDhQ00an0GloH0PUVMVD7KgGc4R3Uf4FDPV43Fj9NHcHP8QgGg2eV7dp1bzVI6MQJv2OFY7mP8dyXI499SJoFP9HxIPWNLnYADucKYk%2BMDS7NFrXik8E%2B%2BK8qdC41Sz1ILxY1uPim6an3f8CmYXCy4y%2BTnqDvD5y2mEVrK6c6VuWBYFSkn2bwlw8pNecys9Mkq7yGB%2FLYGZO%2BA7vziRzbKezbT%2BbD9t%2BPkpz8vvbRbLBI9hdYWGiwIwaSpkEYaO4rgNxPcAGtGCtGR8RojePicoBgf9YF1lq7k2Df%2BdK8E%2FDhl0LLbV3fCMhDakM3HyE8F0NA0q9FEXixu%2FI0bHtOLfNkTsxOF9DjCzs7bDBjqkARZZc%2BnCZylEEx6PMmFLbD9Sa7bCtRKqY1nL8%2FQJcHbqm1oTW7xyaP%2Bpeg5QanyS3hEdlkYRGV1JGtpdclqlO3DuZO%2B%2BuE4%2FqVqFZEjykHzmpaRzEjEJnvhMb1jfC24MERvI%2Bz90f3H%2Fioo3Q2MoXmOIbg5I64HuQu9tE%2Bo9JmPwPkr%2BpLTpxxCckG537ZEj3YvtNEEFE6l%2FURDGfSm3ESfgsFZQ&X-Amz-Signature=8582787a49255105c9078d1e2ef267a42826a11af65f90864d7b476c57093768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3QZRF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmvdUnNr4leLExp%2BtfvYCy7BJ9Eg8CSz9f4Lz86tPxbgIhAIgO3yQteyPag3jCpUrd0px1zvuyvd7%2Bo3zRw4uuL7q1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlb3HT8eWs%2FzWEQeQq3AMwmgg2XQOsRrT%2FXJfxIywj89cC0touer3Oj4DXPdOE8a5t%2BLBlaymPwskS0TMITdeoKbmj2VuQaRVICVoF1KcbH3ZBvxFyKGptz86y9gV43SkBMCFFQE8PrdigO7MIXN%2FC%2B%2FD%2B8KUp5Rmx78ulBFJHaRaABQ9XF10tZo90eUpb6S0YCfq1sRUDkqSqBgCSlmJwZ7By5uiP%2F5vbBml8N9G9M1qmWDDMYruKzYwoT4uAR68%2F8G%2Bz3XnSZCDEfU9Juna2CXilpplKrd5pcLa%2FVI9OilK0eQDhQ00an0GloH0PUVMVD7KgGc4R3Uf4FDPV43Fj9NHcHP8QgGg2eV7dp1bzVI6MQJv2OFY7mP8dyXI499SJoFP9HxIPWNLnYADucKYk%2BMDS7NFrXik8E%2B%2BK8qdC41Sz1ILxY1uPim6an3f8CmYXCy4y%2BTnqDvD5y2mEVrK6c6VuWBYFSkn2bwlw8pNecys9Mkq7yGB%2FLYGZO%2BA7vziRzbKezbT%2BbD9t%2BPkpz8vvbRbLBI9hdYWGiwIwaSpkEYaO4rgNxPcAGtGCtGR8RojePicoBgf9YF1lq7k2Df%2BdK8E%2FDhl0LLbV3fCMhDakM3HyE8F0NA0q9FEXixu%2FI0bHtOLfNkTsxOF9DjCzs7bDBjqkARZZc%2BnCZylEEx6PMmFLbD9Sa7bCtRKqY1nL8%2FQJcHbqm1oTW7xyaP%2Bpeg5QanyS3hEdlkYRGV1JGtpdclqlO3DuZO%2B%2BuE4%2FqVqFZEjykHzmpaRzEjEJnvhMb1jfC24MERvI%2Bz90f3H%2Fioo3Q2MoXmOIbg5I64HuQu9tE%2Bo9JmPwPkr%2BpLTpxxCckG537ZEj3YvtNEEFE6l%2FURDGfSm3ESfgsFZQ&X-Amz-Signature=5bc8e967b71a35b4bef4f81f7bc24d30f032ddd647d9f56ea964835e6ed7340e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3QZRF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmvdUnNr4leLExp%2BtfvYCy7BJ9Eg8CSz9f4Lz86tPxbgIhAIgO3yQteyPag3jCpUrd0px1zvuyvd7%2Bo3zRw4uuL7q1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlb3HT8eWs%2FzWEQeQq3AMwmgg2XQOsRrT%2FXJfxIywj89cC0touer3Oj4DXPdOE8a5t%2BLBlaymPwskS0TMITdeoKbmj2VuQaRVICVoF1KcbH3ZBvxFyKGptz86y9gV43SkBMCFFQE8PrdigO7MIXN%2FC%2B%2FD%2B8KUp5Rmx78ulBFJHaRaABQ9XF10tZo90eUpb6S0YCfq1sRUDkqSqBgCSlmJwZ7By5uiP%2F5vbBml8N9G9M1qmWDDMYruKzYwoT4uAR68%2F8G%2Bz3XnSZCDEfU9Juna2CXilpplKrd5pcLa%2FVI9OilK0eQDhQ00an0GloH0PUVMVD7KgGc4R3Uf4FDPV43Fj9NHcHP8QgGg2eV7dp1bzVI6MQJv2OFY7mP8dyXI499SJoFP9HxIPWNLnYADucKYk%2BMDS7NFrXik8E%2B%2BK8qdC41Sz1ILxY1uPim6an3f8CmYXCy4y%2BTnqDvD5y2mEVrK6c6VuWBYFSkn2bwlw8pNecys9Mkq7yGB%2FLYGZO%2BA7vziRzbKezbT%2BbD9t%2BPkpz8vvbRbLBI9hdYWGiwIwaSpkEYaO4rgNxPcAGtGCtGR8RojePicoBgf9YF1lq7k2Df%2BdK8E%2FDhl0LLbV3fCMhDakM3HyE8F0NA0q9FEXixu%2FI0bHtOLfNkTsxOF9DjCzs7bDBjqkARZZc%2BnCZylEEx6PMmFLbD9Sa7bCtRKqY1nL8%2FQJcHbqm1oTW7xyaP%2Bpeg5QanyS3hEdlkYRGV1JGtpdclqlO3DuZO%2B%2BuE4%2FqVqFZEjykHzmpaRzEjEJnvhMb1jfC24MERvI%2Bz90f3H%2Fioo3Q2MoXmOIbg5I64HuQu9tE%2Bo9JmPwPkr%2BpLTpxxCckG537ZEj3YvtNEEFE6l%2FURDGfSm3ESfgsFZQ&X-Amz-Signature=2354f6bc246e2f69be95843e42205a914b74bba5dbf81e16aca8b3796f94982f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3QZRF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmvdUnNr4leLExp%2BtfvYCy7BJ9Eg8CSz9f4Lz86tPxbgIhAIgO3yQteyPag3jCpUrd0px1zvuyvd7%2Bo3zRw4uuL7q1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlb3HT8eWs%2FzWEQeQq3AMwmgg2XQOsRrT%2FXJfxIywj89cC0touer3Oj4DXPdOE8a5t%2BLBlaymPwskS0TMITdeoKbmj2VuQaRVICVoF1KcbH3ZBvxFyKGptz86y9gV43SkBMCFFQE8PrdigO7MIXN%2FC%2B%2FD%2B8KUp5Rmx78ulBFJHaRaABQ9XF10tZo90eUpb6S0YCfq1sRUDkqSqBgCSlmJwZ7By5uiP%2F5vbBml8N9G9M1qmWDDMYruKzYwoT4uAR68%2F8G%2Bz3XnSZCDEfU9Juna2CXilpplKrd5pcLa%2FVI9OilK0eQDhQ00an0GloH0PUVMVD7KgGc4R3Uf4FDPV43Fj9NHcHP8QgGg2eV7dp1bzVI6MQJv2OFY7mP8dyXI499SJoFP9HxIPWNLnYADucKYk%2BMDS7NFrXik8E%2B%2BK8qdC41Sz1ILxY1uPim6an3f8CmYXCy4y%2BTnqDvD5y2mEVrK6c6VuWBYFSkn2bwlw8pNecys9Mkq7yGB%2FLYGZO%2BA7vziRzbKezbT%2BbD9t%2BPkpz8vvbRbLBI9hdYWGiwIwaSpkEYaO4rgNxPcAGtGCtGR8RojePicoBgf9YF1lq7k2Df%2BdK8E%2FDhl0LLbV3fCMhDakM3HyE8F0NA0q9FEXixu%2FI0bHtOLfNkTsxOF9DjCzs7bDBjqkARZZc%2BnCZylEEx6PMmFLbD9Sa7bCtRKqY1nL8%2FQJcHbqm1oTW7xyaP%2Bpeg5QanyS3hEdlkYRGV1JGtpdclqlO3DuZO%2B%2BuE4%2FqVqFZEjykHzmpaRzEjEJnvhMb1jfC24MERvI%2Bz90f3H%2Fioo3Q2MoXmOIbg5I64HuQu9tE%2Bo9JmPwPkr%2BpLTpxxCckG537ZEj3YvtNEEFE6l%2FURDGfSm3ESfgsFZQ&X-Amz-Signature=890af965f99026c30a8aa77d89d33b2ec971a62148b7fa3ea68fce43891f4aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3QZRF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmvdUnNr4leLExp%2BtfvYCy7BJ9Eg8CSz9f4Lz86tPxbgIhAIgO3yQteyPag3jCpUrd0px1zvuyvd7%2Bo3zRw4uuL7q1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlb3HT8eWs%2FzWEQeQq3AMwmgg2XQOsRrT%2FXJfxIywj89cC0touer3Oj4DXPdOE8a5t%2BLBlaymPwskS0TMITdeoKbmj2VuQaRVICVoF1KcbH3ZBvxFyKGptz86y9gV43SkBMCFFQE8PrdigO7MIXN%2FC%2B%2FD%2B8KUp5Rmx78ulBFJHaRaABQ9XF10tZo90eUpb6S0YCfq1sRUDkqSqBgCSlmJwZ7By5uiP%2F5vbBml8N9G9M1qmWDDMYruKzYwoT4uAR68%2F8G%2Bz3XnSZCDEfU9Juna2CXilpplKrd5pcLa%2FVI9OilK0eQDhQ00an0GloH0PUVMVD7KgGc4R3Uf4FDPV43Fj9NHcHP8QgGg2eV7dp1bzVI6MQJv2OFY7mP8dyXI499SJoFP9HxIPWNLnYADucKYk%2BMDS7NFrXik8E%2B%2BK8qdC41Sz1ILxY1uPim6an3f8CmYXCy4y%2BTnqDvD5y2mEVrK6c6VuWBYFSkn2bwlw8pNecys9Mkq7yGB%2FLYGZO%2BA7vziRzbKezbT%2BbD9t%2BPkpz8vvbRbLBI9hdYWGiwIwaSpkEYaO4rgNxPcAGtGCtGR8RojePicoBgf9YF1lq7k2Df%2BdK8E%2FDhl0LLbV3fCMhDakM3HyE8F0NA0q9FEXixu%2FI0bHtOLfNkTsxOF9DjCzs7bDBjqkARZZc%2BnCZylEEx6PMmFLbD9Sa7bCtRKqY1nL8%2FQJcHbqm1oTW7xyaP%2Bpeg5QanyS3hEdlkYRGV1JGtpdclqlO3DuZO%2B%2BuE4%2FqVqFZEjykHzmpaRzEjEJnvhMb1jfC24MERvI%2Bz90f3H%2Fioo3Q2MoXmOIbg5I64HuQu9tE%2Bo9JmPwPkr%2BpLTpxxCckG537ZEj3YvtNEEFE6l%2FURDGfSm3ESfgsFZQ&X-Amz-Signature=138c5e7cae2115b4565d8a34417d565a78e1616b507801e81577f35213039bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3QZRF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmvdUnNr4leLExp%2BtfvYCy7BJ9Eg8CSz9f4Lz86tPxbgIhAIgO3yQteyPag3jCpUrd0px1zvuyvd7%2Bo3zRw4uuL7q1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlb3HT8eWs%2FzWEQeQq3AMwmgg2XQOsRrT%2FXJfxIywj89cC0touer3Oj4DXPdOE8a5t%2BLBlaymPwskS0TMITdeoKbmj2VuQaRVICVoF1KcbH3ZBvxFyKGptz86y9gV43SkBMCFFQE8PrdigO7MIXN%2FC%2B%2FD%2B8KUp5Rmx78ulBFJHaRaABQ9XF10tZo90eUpb6S0YCfq1sRUDkqSqBgCSlmJwZ7By5uiP%2F5vbBml8N9G9M1qmWDDMYruKzYwoT4uAR68%2F8G%2Bz3XnSZCDEfU9Juna2CXilpplKrd5pcLa%2FVI9OilK0eQDhQ00an0GloH0PUVMVD7KgGc4R3Uf4FDPV43Fj9NHcHP8QgGg2eV7dp1bzVI6MQJv2OFY7mP8dyXI499SJoFP9HxIPWNLnYADucKYk%2BMDS7NFrXik8E%2B%2BK8qdC41Sz1ILxY1uPim6an3f8CmYXCy4y%2BTnqDvD5y2mEVrK6c6VuWBYFSkn2bwlw8pNecys9Mkq7yGB%2FLYGZO%2BA7vziRzbKezbT%2BbD9t%2BPkpz8vvbRbLBI9hdYWGiwIwaSpkEYaO4rgNxPcAGtGCtGR8RojePicoBgf9YF1lq7k2Df%2BdK8E%2FDhl0LLbV3fCMhDakM3HyE8F0NA0q9FEXixu%2FI0bHtOLfNkTsxOF9DjCzs7bDBjqkARZZc%2BnCZylEEx6PMmFLbD9Sa7bCtRKqY1nL8%2FQJcHbqm1oTW7xyaP%2Bpeg5QanyS3hEdlkYRGV1JGtpdclqlO3DuZO%2B%2BuE4%2FqVqFZEjykHzmpaRzEjEJnvhMb1jfC24MERvI%2Bz90f3H%2Fioo3Q2MoXmOIbg5I64HuQu9tE%2Bo9JmPwPkr%2BpLTpxxCckG537ZEj3YvtNEEFE6l%2FURDGfSm3ESfgsFZQ&X-Amz-Signature=bc04bd8561fa14f9d8752ca6ebb481bbf2b2e30f680a621711f71491f82c32a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

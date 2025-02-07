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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIATDUV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChvRFEzobCUujYzj5NSx0N%2BFHhs4kvmc%2FKRMITisN5MwIhANNCFguhmuTJZ2cMwecfvEqHJVVO%2FkjVdk8AATbmOP1VKv8DCHYQABoMNjM3NDIzMTgzODA1Igz0tXI66lNQYdlAxr4q3AN0sZoValts9EtH4zMfpDwFFAv7yc%2FC1ZiCs%2BMOUVppJx%2FtwidDxWDmP9fyQFRwVhx5LmsBKGTGtDY8WNOWGDD%2Fd2cdZCnh2ri07hJK6gvCEqD6JVKbR9IFU592Yoi7hj%2BB%2BRSJFXIxotjufavGYr0RbJWadlQHKpjJ76U8K3ldtdc2h1s5ggcSrc2mylBckrziH7zb8%2BS7vPI4IIf9LivSQ7s4lGIS7x%2BII4omCDxbg%2BlyrTKrFrR13k%2FvcgEY76CURvuRzNGNbCuhOMa%2BtNnAadgxwIS85%2FilJnrvyNSgJFviPtmBPtOG8QcIoQkxT5oBvZo8SXf7SsleVw1z4ESSwkIgcG0Z7m3SIxSpJrQ0XeImI9m6bI6uCXA5skEOBijmMW0zaQDK6%2BsXz6PXTnLj6r9hScq8hKNXaiR8qE6oE22CII%2Biwc3913uHXzMDDtu1Q8Ml1uV9tZhn87wuq9RunC1jrCzxQ7%2FnM1Ksxka9hepE0vy6wmyz1FP61tChXITcorsQUnp5tlnlhKnsv26tdSWvN7znpqTi1UO0rnUxy9%2F%2BTbbyT%2B37X8aPVe97OTqg%2FDT1aPBQW5OXmLqNKfbKv8DyrjITm%2BsC4CPw3d2c7F5iZfHcpwMbsLGEpDCojJi9BjqkAWucx%2BwNeD1uL%2FTvHspTS4k1YhTQxg7vOHuWjjWQ0KVDTJIm0XkBA1ayC0MD0hk6DE4GvLKFlFqu0SVmZdPhmxAdPHoC0eJ3vs5hL%2BJeqpND%2FOVZjDzYzKcRwS3AMiI00Yvtc8sce0moGJbxo0iJR1mIhekQose0vsPRLPp8Bgabrs40%2BGRr9SuVj%2FcTDTcnU0%2FZD6IQPqB%2BSN0gxxvGOg2beDas&X-Amz-Signature=28411bf16960d17a9335843c51f9729ee4a9a95c3e98ed9f098d6f1673bd6abc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIATDUV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChvRFEzobCUujYzj5NSx0N%2BFHhs4kvmc%2FKRMITisN5MwIhANNCFguhmuTJZ2cMwecfvEqHJVVO%2FkjVdk8AATbmOP1VKv8DCHYQABoMNjM3NDIzMTgzODA1Igz0tXI66lNQYdlAxr4q3AN0sZoValts9EtH4zMfpDwFFAv7yc%2FC1ZiCs%2BMOUVppJx%2FtwidDxWDmP9fyQFRwVhx5LmsBKGTGtDY8WNOWGDD%2Fd2cdZCnh2ri07hJK6gvCEqD6JVKbR9IFU592Yoi7hj%2BB%2BRSJFXIxotjufavGYr0RbJWadlQHKpjJ76U8K3ldtdc2h1s5ggcSrc2mylBckrziH7zb8%2BS7vPI4IIf9LivSQ7s4lGIS7x%2BII4omCDxbg%2BlyrTKrFrR13k%2FvcgEY76CURvuRzNGNbCuhOMa%2BtNnAadgxwIS85%2FilJnrvyNSgJFviPtmBPtOG8QcIoQkxT5oBvZo8SXf7SsleVw1z4ESSwkIgcG0Z7m3SIxSpJrQ0XeImI9m6bI6uCXA5skEOBijmMW0zaQDK6%2BsXz6PXTnLj6r9hScq8hKNXaiR8qE6oE22CII%2Biwc3913uHXzMDDtu1Q8Ml1uV9tZhn87wuq9RunC1jrCzxQ7%2FnM1Ksxka9hepE0vy6wmyz1FP61tChXITcorsQUnp5tlnlhKnsv26tdSWvN7znpqTi1UO0rnUxy9%2F%2BTbbyT%2B37X8aPVe97OTqg%2FDT1aPBQW5OXmLqNKfbKv8DyrjITm%2BsC4CPw3d2c7F5iZfHcpwMbsLGEpDCojJi9BjqkAWucx%2BwNeD1uL%2FTvHspTS4k1YhTQxg7vOHuWjjWQ0KVDTJIm0XkBA1ayC0MD0hk6DE4GvLKFlFqu0SVmZdPhmxAdPHoC0eJ3vs5hL%2BJeqpND%2FOVZjDzYzKcRwS3AMiI00Yvtc8sce0moGJbxo0iJR1mIhekQose0vsPRLPp8Bgabrs40%2BGRr9SuVj%2FcTDTcnU0%2FZD6IQPqB%2BSN0gxxvGOg2beDas&X-Amz-Signature=0897bcd705227604c41f35793bed85888047c3bbbd10e046d8f364b8b4c521b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIATDUV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChvRFEzobCUujYzj5NSx0N%2BFHhs4kvmc%2FKRMITisN5MwIhANNCFguhmuTJZ2cMwecfvEqHJVVO%2FkjVdk8AATbmOP1VKv8DCHYQABoMNjM3NDIzMTgzODA1Igz0tXI66lNQYdlAxr4q3AN0sZoValts9EtH4zMfpDwFFAv7yc%2FC1ZiCs%2BMOUVppJx%2FtwidDxWDmP9fyQFRwVhx5LmsBKGTGtDY8WNOWGDD%2Fd2cdZCnh2ri07hJK6gvCEqD6JVKbR9IFU592Yoi7hj%2BB%2BRSJFXIxotjufavGYr0RbJWadlQHKpjJ76U8K3ldtdc2h1s5ggcSrc2mylBckrziH7zb8%2BS7vPI4IIf9LivSQ7s4lGIS7x%2BII4omCDxbg%2BlyrTKrFrR13k%2FvcgEY76CURvuRzNGNbCuhOMa%2BtNnAadgxwIS85%2FilJnrvyNSgJFviPtmBPtOG8QcIoQkxT5oBvZo8SXf7SsleVw1z4ESSwkIgcG0Z7m3SIxSpJrQ0XeImI9m6bI6uCXA5skEOBijmMW0zaQDK6%2BsXz6PXTnLj6r9hScq8hKNXaiR8qE6oE22CII%2Biwc3913uHXzMDDtu1Q8Ml1uV9tZhn87wuq9RunC1jrCzxQ7%2FnM1Ksxka9hepE0vy6wmyz1FP61tChXITcorsQUnp5tlnlhKnsv26tdSWvN7znpqTi1UO0rnUxy9%2F%2BTbbyT%2B37X8aPVe97OTqg%2FDT1aPBQW5OXmLqNKfbKv8DyrjITm%2BsC4CPw3d2c7F5iZfHcpwMbsLGEpDCojJi9BjqkAWucx%2BwNeD1uL%2FTvHspTS4k1YhTQxg7vOHuWjjWQ0KVDTJIm0XkBA1ayC0MD0hk6DE4GvLKFlFqu0SVmZdPhmxAdPHoC0eJ3vs5hL%2BJeqpND%2FOVZjDzYzKcRwS3AMiI00Yvtc8sce0moGJbxo0iJR1mIhekQose0vsPRLPp8Bgabrs40%2BGRr9SuVj%2FcTDTcnU0%2FZD6IQPqB%2BSN0gxxvGOg2beDas&X-Amz-Signature=e39cbfe203043de98cdaea5d1ff02677580d0abd71a84dae4bebaee44fda2db4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIATDUV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChvRFEzobCUujYzj5NSx0N%2BFHhs4kvmc%2FKRMITisN5MwIhANNCFguhmuTJZ2cMwecfvEqHJVVO%2FkjVdk8AATbmOP1VKv8DCHYQABoMNjM3NDIzMTgzODA1Igz0tXI66lNQYdlAxr4q3AN0sZoValts9EtH4zMfpDwFFAv7yc%2FC1ZiCs%2BMOUVppJx%2FtwidDxWDmP9fyQFRwVhx5LmsBKGTGtDY8WNOWGDD%2Fd2cdZCnh2ri07hJK6gvCEqD6JVKbR9IFU592Yoi7hj%2BB%2BRSJFXIxotjufavGYr0RbJWadlQHKpjJ76U8K3ldtdc2h1s5ggcSrc2mylBckrziH7zb8%2BS7vPI4IIf9LivSQ7s4lGIS7x%2BII4omCDxbg%2BlyrTKrFrR13k%2FvcgEY76CURvuRzNGNbCuhOMa%2BtNnAadgxwIS85%2FilJnrvyNSgJFviPtmBPtOG8QcIoQkxT5oBvZo8SXf7SsleVw1z4ESSwkIgcG0Z7m3SIxSpJrQ0XeImI9m6bI6uCXA5skEOBijmMW0zaQDK6%2BsXz6PXTnLj6r9hScq8hKNXaiR8qE6oE22CII%2Biwc3913uHXzMDDtu1Q8Ml1uV9tZhn87wuq9RunC1jrCzxQ7%2FnM1Ksxka9hepE0vy6wmyz1FP61tChXITcorsQUnp5tlnlhKnsv26tdSWvN7znpqTi1UO0rnUxy9%2F%2BTbbyT%2B37X8aPVe97OTqg%2FDT1aPBQW5OXmLqNKfbKv8DyrjITm%2BsC4CPw3d2c7F5iZfHcpwMbsLGEpDCojJi9BjqkAWucx%2BwNeD1uL%2FTvHspTS4k1YhTQxg7vOHuWjjWQ0KVDTJIm0XkBA1ayC0MD0hk6DE4GvLKFlFqu0SVmZdPhmxAdPHoC0eJ3vs5hL%2BJeqpND%2FOVZjDzYzKcRwS3AMiI00Yvtc8sce0moGJbxo0iJR1mIhekQose0vsPRLPp8Bgabrs40%2BGRr9SuVj%2FcTDTcnU0%2FZD6IQPqB%2BSN0gxxvGOg2beDas&X-Amz-Signature=372e29c78dfd59a888151be62deef63c95d9e15bb27e42a2e06e4ca0efd33471&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIATDUV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChvRFEzobCUujYzj5NSx0N%2BFHhs4kvmc%2FKRMITisN5MwIhANNCFguhmuTJZ2cMwecfvEqHJVVO%2FkjVdk8AATbmOP1VKv8DCHYQABoMNjM3NDIzMTgzODA1Igz0tXI66lNQYdlAxr4q3AN0sZoValts9EtH4zMfpDwFFAv7yc%2FC1ZiCs%2BMOUVppJx%2FtwidDxWDmP9fyQFRwVhx5LmsBKGTGtDY8WNOWGDD%2Fd2cdZCnh2ri07hJK6gvCEqD6JVKbR9IFU592Yoi7hj%2BB%2BRSJFXIxotjufavGYr0RbJWadlQHKpjJ76U8K3ldtdc2h1s5ggcSrc2mylBckrziH7zb8%2BS7vPI4IIf9LivSQ7s4lGIS7x%2BII4omCDxbg%2BlyrTKrFrR13k%2FvcgEY76CURvuRzNGNbCuhOMa%2BtNnAadgxwIS85%2FilJnrvyNSgJFviPtmBPtOG8QcIoQkxT5oBvZo8SXf7SsleVw1z4ESSwkIgcG0Z7m3SIxSpJrQ0XeImI9m6bI6uCXA5skEOBijmMW0zaQDK6%2BsXz6PXTnLj6r9hScq8hKNXaiR8qE6oE22CII%2Biwc3913uHXzMDDtu1Q8Ml1uV9tZhn87wuq9RunC1jrCzxQ7%2FnM1Ksxka9hepE0vy6wmyz1FP61tChXITcorsQUnp5tlnlhKnsv26tdSWvN7znpqTi1UO0rnUxy9%2F%2BTbbyT%2B37X8aPVe97OTqg%2FDT1aPBQW5OXmLqNKfbKv8DyrjITm%2BsC4CPw3d2c7F5iZfHcpwMbsLGEpDCojJi9BjqkAWucx%2BwNeD1uL%2FTvHspTS4k1YhTQxg7vOHuWjjWQ0KVDTJIm0XkBA1ayC0MD0hk6DE4GvLKFlFqu0SVmZdPhmxAdPHoC0eJ3vs5hL%2BJeqpND%2FOVZjDzYzKcRwS3AMiI00Yvtc8sce0moGJbxo0iJR1mIhekQose0vsPRLPp8Bgabrs40%2BGRr9SuVj%2FcTDTcnU0%2FZD6IQPqB%2BSN0gxxvGOg2beDas&X-Amz-Signature=97d31cdaa8dcd5c7e50143c7e4b9397fd498fab853cfab6ea7e8b83c5f8ea5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIATDUV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChvRFEzobCUujYzj5NSx0N%2BFHhs4kvmc%2FKRMITisN5MwIhANNCFguhmuTJZ2cMwecfvEqHJVVO%2FkjVdk8AATbmOP1VKv8DCHYQABoMNjM3NDIzMTgzODA1Igz0tXI66lNQYdlAxr4q3AN0sZoValts9EtH4zMfpDwFFAv7yc%2FC1ZiCs%2BMOUVppJx%2FtwidDxWDmP9fyQFRwVhx5LmsBKGTGtDY8WNOWGDD%2Fd2cdZCnh2ri07hJK6gvCEqD6JVKbR9IFU592Yoi7hj%2BB%2BRSJFXIxotjufavGYr0RbJWadlQHKpjJ76U8K3ldtdc2h1s5ggcSrc2mylBckrziH7zb8%2BS7vPI4IIf9LivSQ7s4lGIS7x%2BII4omCDxbg%2BlyrTKrFrR13k%2FvcgEY76CURvuRzNGNbCuhOMa%2BtNnAadgxwIS85%2FilJnrvyNSgJFviPtmBPtOG8QcIoQkxT5oBvZo8SXf7SsleVw1z4ESSwkIgcG0Z7m3SIxSpJrQ0XeImI9m6bI6uCXA5skEOBijmMW0zaQDK6%2BsXz6PXTnLj6r9hScq8hKNXaiR8qE6oE22CII%2Biwc3913uHXzMDDtu1Q8Ml1uV9tZhn87wuq9RunC1jrCzxQ7%2FnM1Ksxka9hepE0vy6wmyz1FP61tChXITcorsQUnp5tlnlhKnsv26tdSWvN7znpqTi1UO0rnUxy9%2F%2BTbbyT%2B37X8aPVe97OTqg%2FDT1aPBQW5OXmLqNKfbKv8DyrjITm%2BsC4CPw3d2c7F5iZfHcpwMbsLGEpDCojJi9BjqkAWucx%2BwNeD1uL%2FTvHspTS4k1YhTQxg7vOHuWjjWQ0KVDTJIm0XkBA1ayC0MD0hk6DE4GvLKFlFqu0SVmZdPhmxAdPHoC0eJ3vs5hL%2BJeqpND%2FOVZjDzYzKcRwS3AMiI00Yvtc8sce0moGJbxo0iJR1mIhekQose0vsPRLPp8Bgabrs40%2BGRr9SuVj%2FcTDTcnU0%2FZD6IQPqB%2BSN0gxxvGOg2beDas&X-Amz-Signature=7c78ddd7ba4c1d1baae7a34421e49b8804682de8ebeea0c5030f23763cab9f82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIATDUV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChvRFEzobCUujYzj5NSx0N%2BFHhs4kvmc%2FKRMITisN5MwIhANNCFguhmuTJZ2cMwecfvEqHJVVO%2FkjVdk8AATbmOP1VKv8DCHYQABoMNjM3NDIzMTgzODA1Igz0tXI66lNQYdlAxr4q3AN0sZoValts9EtH4zMfpDwFFAv7yc%2FC1ZiCs%2BMOUVppJx%2FtwidDxWDmP9fyQFRwVhx5LmsBKGTGtDY8WNOWGDD%2Fd2cdZCnh2ri07hJK6gvCEqD6JVKbR9IFU592Yoi7hj%2BB%2BRSJFXIxotjufavGYr0RbJWadlQHKpjJ76U8K3ldtdc2h1s5ggcSrc2mylBckrziH7zb8%2BS7vPI4IIf9LivSQ7s4lGIS7x%2BII4omCDxbg%2BlyrTKrFrR13k%2FvcgEY76CURvuRzNGNbCuhOMa%2BtNnAadgxwIS85%2FilJnrvyNSgJFviPtmBPtOG8QcIoQkxT5oBvZo8SXf7SsleVw1z4ESSwkIgcG0Z7m3SIxSpJrQ0XeImI9m6bI6uCXA5skEOBijmMW0zaQDK6%2BsXz6PXTnLj6r9hScq8hKNXaiR8qE6oE22CII%2Biwc3913uHXzMDDtu1Q8Ml1uV9tZhn87wuq9RunC1jrCzxQ7%2FnM1Ksxka9hepE0vy6wmyz1FP61tChXITcorsQUnp5tlnlhKnsv26tdSWvN7znpqTi1UO0rnUxy9%2F%2BTbbyT%2B37X8aPVe97OTqg%2FDT1aPBQW5OXmLqNKfbKv8DyrjITm%2BsC4CPw3d2c7F5iZfHcpwMbsLGEpDCojJi9BjqkAWucx%2BwNeD1uL%2FTvHspTS4k1YhTQxg7vOHuWjjWQ0KVDTJIm0XkBA1ayC0MD0hk6DE4GvLKFlFqu0SVmZdPhmxAdPHoC0eJ3vs5hL%2BJeqpND%2FOVZjDzYzKcRwS3AMiI00Yvtc8sce0moGJbxo0iJR1mIhekQose0vsPRLPp8Bgabrs40%2BGRr9SuVj%2FcTDTcnU0%2FZD6IQPqB%2BSN0gxxvGOg2beDas&X-Amz-Signature=e2582ca7d8873d59e6cf44d6bc3293fdd285d9f77caa8722cb8932e80a8ae229&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIATDUV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChvRFEzobCUujYzj5NSx0N%2BFHhs4kvmc%2FKRMITisN5MwIhANNCFguhmuTJZ2cMwecfvEqHJVVO%2FkjVdk8AATbmOP1VKv8DCHYQABoMNjM3NDIzMTgzODA1Igz0tXI66lNQYdlAxr4q3AN0sZoValts9EtH4zMfpDwFFAv7yc%2FC1ZiCs%2BMOUVppJx%2FtwidDxWDmP9fyQFRwVhx5LmsBKGTGtDY8WNOWGDD%2Fd2cdZCnh2ri07hJK6gvCEqD6JVKbR9IFU592Yoi7hj%2BB%2BRSJFXIxotjufavGYr0RbJWadlQHKpjJ76U8K3ldtdc2h1s5ggcSrc2mylBckrziH7zb8%2BS7vPI4IIf9LivSQ7s4lGIS7x%2BII4omCDxbg%2BlyrTKrFrR13k%2FvcgEY76CURvuRzNGNbCuhOMa%2BtNnAadgxwIS85%2FilJnrvyNSgJFviPtmBPtOG8QcIoQkxT5oBvZo8SXf7SsleVw1z4ESSwkIgcG0Z7m3SIxSpJrQ0XeImI9m6bI6uCXA5skEOBijmMW0zaQDK6%2BsXz6PXTnLj6r9hScq8hKNXaiR8qE6oE22CII%2Biwc3913uHXzMDDtu1Q8Ml1uV9tZhn87wuq9RunC1jrCzxQ7%2FnM1Ksxka9hepE0vy6wmyz1FP61tChXITcorsQUnp5tlnlhKnsv26tdSWvN7znpqTi1UO0rnUxy9%2F%2BTbbyT%2B37X8aPVe97OTqg%2FDT1aPBQW5OXmLqNKfbKv8DyrjITm%2BsC4CPw3d2c7F5iZfHcpwMbsLGEpDCojJi9BjqkAWucx%2BwNeD1uL%2FTvHspTS4k1YhTQxg7vOHuWjjWQ0KVDTJIm0XkBA1ayC0MD0hk6DE4GvLKFlFqu0SVmZdPhmxAdPHoC0eJ3vs5hL%2BJeqpND%2FOVZjDzYzKcRwS3AMiI00Yvtc8sce0moGJbxo0iJR1mIhekQose0vsPRLPp8Bgabrs40%2BGRr9SuVj%2FcTDTcnU0%2FZD6IQPqB%2BSN0gxxvGOg2beDas&X-Amz-Signature=e1f93ebe21bd9e419d5b5d41ab0466366146f3142142fba83103274f98556d85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

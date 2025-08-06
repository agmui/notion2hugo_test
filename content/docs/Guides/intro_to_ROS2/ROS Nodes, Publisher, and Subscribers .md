---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243MSV4K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD2qw1V3vpAVqumq0VVBMoq8vX8r6rr81SFc9XL0F56nAIhAJk078WFvtliBtUYRsKcvTYU%2B7unxXY6QCEQhXtOXvCrKv8DCHUQABoMNjM3NDIzMTgzODA1IgzbsfS%2FeFrbzPuo%2F%2Bsq3APNYn8nhWHdRWn4oAxQtwz2S%2BXGaHh89xYRM1BWArZQOgs7PJXuvmJy0oLWGxCiVmGoF9IdRSPPfyCPpwOQ34%2BOsnlF8%2Bc%2BCVUZnlPIUoU0GC8xgE3%2FPa8g84yJxtHAw914nOp7iGQAkG%2BBNuB7Xm8xkTbbv9ZFc9RgjDdMOU8rTXs7XS1yFo4%2FXdeM0IIahDfQa9lTbRRQPpBa%2BZ9xzN8mXKPtjwrYInqpfoqf8C50JspTkahK2eGMD4uix%2FzCZDFocEQtj%2F0PQ7s%2F9lqPTfv08R01JwyWo%2BHSRC7Zjjz7wg6UQkNsIbi3v9pD47f5W1XDR89tcP%2BzzttcEhRc%2BwlXuM4p1rWmg8TLTS76peOKiSMZXJW8Be2WcWbdAeJHyycW9QrD8hkO4T%2BYX7jV%2FzAbrTA36TRe%2Bt3xlxQxaO0DDQLk6hUByZx98gxr9nNUqVyy3wKfBSZSpeCgHVcFj27qH0twl4tj5mM13o2faHmxggPCH8WCymd68lalGo5CtkERiO4xM%2FV3scnxNF%2BDphLnT34hDK%2Fbisw01GONQ0F0piaJ0ng9ZHHqURCDW7XlXpejgHhUglBbZ6Emm2TLqip958aVBb1DQfgz8tn089P1pd7yXxhIz%2BBxHgoOajCqhc3EBjqkAYZeZrSxiqEpZH3lNKskaqcEyFPlgTyLw%2FsBIiK83m0skUyIqQ7M9S6B80I14%2BUW1ob313LSvMTjljAWXAvRwMoZQ80YyRr9innFSLWg4kqCAj9J8AwaBHMSPbTQ19iwaVEBnlP27Ad0O12JvrMm71vl2LkGjfHkbe6VAoVFPHMVEK5%2BGq8xx%2FarMndglImz0OvoLypRkcx3UI%2BsbL%2FhGrVjyLPI&X-Amz-Signature=e8a200c9be28944ee7be4c22ad78c0b2ded19c4924547d86a350e854c3f80194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243MSV4K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD2qw1V3vpAVqumq0VVBMoq8vX8r6rr81SFc9XL0F56nAIhAJk078WFvtliBtUYRsKcvTYU%2B7unxXY6QCEQhXtOXvCrKv8DCHUQABoMNjM3NDIzMTgzODA1IgzbsfS%2FeFrbzPuo%2F%2Bsq3APNYn8nhWHdRWn4oAxQtwz2S%2BXGaHh89xYRM1BWArZQOgs7PJXuvmJy0oLWGxCiVmGoF9IdRSPPfyCPpwOQ34%2BOsnlF8%2Bc%2BCVUZnlPIUoU0GC8xgE3%2FPa8g84yJxtHAw914nOp7iGQAkG%2BBNuB7Xm8xkTbbv9ZFc9RgjDdMOU8rTXs7XS1yFo4%2FXdeM0IIahDfQa9lTbRRQPpBa%2BZ9xzN8mXKPtjwrYInqpfoqf8C50JspTkahK2eGMD4uix%2FzCZDFocEQtj%2F0PQ7s%2F9lqPTfv08R01JwyWo%2BHSRC7Zjjz7wg6UQkNsIbi3v9pD47f5W1XDR89tcP%2BzzttcEhRc%2BwlXuM4p1rWmg8TLTS76peOKiSMZXJW8Be2WcWbdAeJHyycW9QrD8hkO4T%2BYX7jV%2FzAbrTA36TRe%2Bt3xlxQxaO0DDQLk6hUByZx98gxr9nNUqVyy3wKfBSZSpeCgHVcFj27qH0twl4tj5mM13o2faHmxggPCH8WCymd68lalGo5CtkERiO4xM%2FV3scnxNF%2BDphLnT34hDK%2Fbisw01GONQ0F0piaJ0ng9ZHHqURCDW7XlXpejgHhUglBbZ6Emm2TLqip958aVBb1DQfgz8tn089P1pd7yXxhIz%2BBxHgoOajCqhc3EBjqkAYZeZrSxiqEpZH3lNKskaqcEyFPlgTyLw%2FsBIiK83m0skUyIqQ7M9S6B80I14%2BUW1ob313LSvMTjljAWXAvRwMoZQ80YyRr9innFSLWg4kqCAj9J8AwaBHMSPbTQ19iwaVEBnlP27Ad0O12JvrMm71vl2LkGjfHkbe6VAoVFPHMVEK5%2BGq8xx%2FarMndglImz0OvoLypRkcx3UI%2BsbL%2FhGrVjyLPI&X-Amz-Signature=2161ecf3e6cc00a5a96b295d9acbae247b062214941d4ba517ddafebfc2ccc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243MSV4K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD2qw1V3vpAVqumq0VVBMoq8vX8r6rr81SFc9XL0F56nAIhAJk078WFvtliBtUYRsKcvTYU%2B7unxXY6QCEQhXtOXvCrKv8DCHUQABoMNjM3NDIzMTgzODA1IgzbsfS%2FeFrbzPuo%2F%2Bsq3APNYn8nhWHdRWn4oAxQtwz2S%2BXGaHh89xYRM1BWArZQOgs7PJXuvmJy0oLWGxCiVmGoF9IdRSPPfyCPpwOQ34%2BOsnlF8%2Bc%2BCVUZnlPIUoU0GC8xgE3%2FPa8g84yJxtHAw914nOp7iGQAkG%2BBNuB7Xm8xkTbbv9ZFc9RgjDdMOU8rTXs7XS1yFo4%2FXdeM0IIahDfQa9lTbRRQPpBa%2BZ9xzN8mXKPtjwrYInqpfoqf8C50JspTkahK2eGMD4uix%2FzCZDFocEQtj%2F0PQ7s%2F9lqPTfv08R01JwyWo%2BHSRC7Zjjz7wg6UQkNsIbi3v9pD47f5W1XDR89tcP%2BzzttcEhRc%2BwlXuM4p1rWmg8TLTS76peOKiSMZXJW8Be2WcWbdAeJHyycW9QrD8hkO4T%2BYX7jV%2FzAbrTA36TRe%2Bt3xlxQxaO0DDQLk6hUByZx98gxr9nNUqVyy3wKfBSZSpeCgHVcFj27qH0twl4tj5mM13o2faHmxggPCH8WCymd68lalGo5CtkERiO4xM%2FV3scnxNF%2BDphLnT34hDK%2Fbisw01GONQ0F0piaJ0ng9ZHHqURCDW7XlXpejgHhUglBbZ6Emm2TLqip958aVBb1DQfgz8tn089P1pd7yXxhIz%2BBxHgoOajCqhc3EBjqkAYZeZrSxiqEpZH3lNKskaqcEyFPlgTyLw%2FsBIiK83m0skUyIqQ7M9S6B80I14%2BUW1ob313LSvMTjljAWXAvRwMoZQ80YyRr9innFSLWg4kqCAj9J8AwaBHMSPbTQ19iwaVEBnlP27Ad0O12JvrMm71vl2LkGjfHkbe6VAoVFPHMVEK5%2BGq8xx%2FarMndglImz0OvoLypRkcx3UI%2BsbL%2FhGrVjyLPI&X-Amz-Signature=f8c3de0380d12b8363218781cc048d85c6d12188a8a43eab5343abd0b05748e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243MSV4K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD2qw1V3vpAVqumq0VVBMoq8vX8r6rr81SFc9XL0F56nAIhAJk078WFvtliBtUYRsKcvTYU%2B7unxXY6QCEQhXtOXvCrKv8DCHUQABoMNjM3NDIzMTgzODA1IgzbsfS%2FeFrbzPuo%2F%2Bsq3APNYn8nhWHdRWn4oAxQtwz2S%2BXGaHh89xYRM1BWArZQOgs7PJXuvmJy0oLWGxCiVmGoF9IdRSPPfyCPpwOQ34%2BOsnlF8%2Bc%2BCVUZnlPIUoU0GC8xgE3%2FPa8g84yJxtHAw914nOp7iGQAkG%2BBNuB7Xm8xkTbbv9ZFc9RgjDdMOU8rTXs7XS1yFo4%2FXdeM0IIahDfQa9lTbRRQPpBa%2BZ9xzN8mXKPtjwrYInqpfoqf8C50JspTkahK2eGMD4uix%2FzCZDFocEQtj%2F0PQ7s%2F9lqPTfv08R01JwyWo%2BHSRC7Zjjz7wg6UQkNsIbi3v9pD47f5W1XDR89tcP%2BzzttcEhRc%2BwlXuM4p1rWmg8TLTS76peOKiSMZXJW8Be2WcWbdAeJHyycW9QrD8hkO4T%2BYX7jV%2FzAbrTA36TRe%2Bt3xlxQxaO0DDQLk6hUByZx98gxr9nNUqVyy3wKfBSZSpeCgHVcFj27qH0twl4tj5mM13o2faHmxggPCH8WCymd68lalGo5CtkERiO4xM%2FV3scnxNF%2BDphLnT34hDK%2Fbisw01GONQ0F0piaJ0ng9ZHHqURCDW7XlXpejgHhUglBbZ6Emm2TLqip958aVBb1DQfgz8tn089P1pd7yXxhIz%2BBxHgoOajCqhc3EBjqkAYZeZrSxiqEpZH3lNKskaqcEyFPlgTyLw%2FsBIiK83m0skUyIqQ7M9S6B80I14%2BUW1ob313LSvMTjljAWXAvRwMoZQ80YyRr9innFSLWg4kqCAj9J8AwaBHMSPbTQ19iwaVEBnlP27Ad0O12JvrMm71vl2LkGjfHkbe6VAoVFPHMVEK5%2BGq8xx%2FarMndglImz0OvoLypRkcx3UI%2BsbL%2FhGrVjyLPI&X-Amz-Signature=dd6ec1d9a033857e35c835ef02daf0f6b9862bec17f253d1e970c6213432a157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243MSV4K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD2qw1V3vpAVqumq0VVBMoq8vX8r6rr81SFc9XL0F56nAIhAJk078WFvtliBtUYRsKcvTYU%2B7unxXY6QCEQhXtOXvCrKv8DCHUQABoMNjM3NDIzMTgzODA1IgzbsfS%2FeFrbzPuo%2F%2Bsq3APNYn8nhWHdRWn4oAxQtwz2S%2BXGaHh89xYRM1BWArZQOgs7PJXuvmJy0oLWGxCiVmGoF9IdRSPPfyCPpwOQ34%2BOsnlF8%2Bc%2BCVUZnlPIUoU0GC8xgE3%2FPa8g84yJxtHAw914nOp7iGQAkG%2BBNuB7Xm8xkTbbv9ZFc9RgjDdMOU8rTXs7XS1yFo4%2FXdeM0IIahDfQa9lTbRRQPpBa%2BZ9xzN8mXKPtjwrYInqpfoqf8C50JspTkahK2eGMD4uix%2FzCZDFocEQtj%2F0PQ7s%2F9lqPTfv08R01JwyWo%2BHSRC7Zjjz7wg6UQkNsIbi3v9pD47f5W1XDR89tcP%2BzzttcEhRc%2BwlXuM4p1rWmg8TLTS76peOKiSMZXJW8Be2WcWbdAeJHyycW9QrD8hkO4T%2BYX7jV%2FzAbrTA36TRe%2Bt3xlxQxaO0DDQLk6hUByZx98gxr9nNUqVyy3wKfBSZSpeCgHVcFj27qH0twl4tj5mM13o2faHmxggPCH8WCymd68lalGo5CtkERiO4xM%2FV3scnxNF%2BDphLnT34hDK%2Fbisw01GONQ0F0piaJ0ng9ZHHqURCDW7XlXpejgHhUglBbZ6Emm2TLqip958aVBb1DQfgz8tn089P1pd7yXxhIz%2BBxHgoOajCqhc3EBjqkAYZeZrSxiqEpZH3lNKskaqcEyFPlgTyLw%2FsBIiK83m0skUyIqQ7M9S6B80I14%2BUW1ob313LSvMTjljAWXAvRwMoZQ80YyRr9innFSLWg4kqCAj9J8AwaBHMSPbTQ19iwaVEBnlP27Ad0O12JvrMm71vl2LkGjfHkbe6VAoVFPHMVEK5%2BGq8xx%2FarMndglImz0OvoLypRkcx3UI%2BsbL%2FhGrVjyLPI&X-Amz-Signature=890457313223660da43236a59e0f7bb9bfd2d5b91dfb69bd653aa00f9cbf5805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243MSV4K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD2qw1V3vpAVqumq0VVBMoq8vX8r6rr81SFc9XL0F56nAIhAJk078WFvtliBtUYRsKcvTYU%2B7unxXY6QCEQhXtOXvCrKv8DCHUQABoMNjM3NDIzMTgzODA1IgzbsfS%2FeFrbzPuo%2F%2Bsq3APNYn8nhWHdRWn4oAxQtwz2S%2BXGaHh89xYRM1BWArZQOgs7PJXuvmJy0oLWGxCiVmGoF9IdRSPPfyCPpwOQ34%2BOsnlF8%2Bc%2BCVUZnlPIUoU0GC8xgE3%2FPa8g84yJxtHAw914nOp7iGQAkG%2BBNuB7Xm8xkTbbv9ZFc9RgjDdMOU8rTXs7XS1yFo4%2FXdeM0IIahDfQa9lTbRRQPpBa%2BZ9xzN8mXKPtjwrYInqpfoqf8C50JspTkahK2eGMD4uix%2FzCZDFocEQtj%2F0PQ7s%2F9lqPTfv08R01JwyWo%2BHSRC7Zjjz7wg6UQkNsIbi3v9pD47f5W1XDR89tcP%2BzzttcEhRc%2BwlXuM4p1rWmg8TLTS76peOKiSMZXJW8Be2WcWbdAeJHyycW9QrD8hkO4T%2BYX7jV%2FzAbrTA36TRe%2Bt3xlxQxaO0DDQLk6hUByZx98gxr9nNUqVyy3wKfBSZSpeCgHVcFj27qH0twl4tj5mM13o2faHmxggPCH8WCymd68lalGo5CtkERiO4xM%2FV3scnxNF%2BDphLnT34hDK%2Fbisw01GONQ0F0piaJ0ng9ZHHqURCDW7XlXpejgHhUglBbZ6Emm2TLqip958aVBb1DQfgz8tn089P1pd7yXxhIz%2BBxHgoOajCqhc3EBjqkAYZeZrSxiqEpZH3lNKskaqcEyFPlgTyLw%2FsBIiK83m0skUyIqQ7M9S6B80I14%2BUW1ob313LSvMTjljAWXAvRwMoZQ80YyRr9innFSLWg4kqCAj9J8AwaBHMSPbTQ19iwaVEBnlP27Ad0O12JvrMm71vl2LkGjfHkbe6VAoVFPHMVEK5%2BGq8xx%2FarMndglImz0OvoLypRkcx3UI%2BsbL%2FhGrVjyLPI&X-Amz-Signature=a49e5a9c095b8505433df7f4a6299d816581ca80e6c1933c7224a2b2e5bf4503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243MSV4K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD2qw1V3vpAVqumq0VVBMoq8vX8r6rr81SFc9XL0F56nAIhAJk078WFvtliBtUYRsKcvTYU%2B7unxXY6QCEQhXtOXvCrKv8DCHUQABoMNjM3NDIzMTgzODA1IgzbsfS%2FeFrbzPuo%2F%2Bsq3APNYn8nhWHdRWn4oAxQtwz2S%2BXGaHh89xYRM1BWArZQOgs7PJXuvmJy0oLWGxCiVmGoF9IdRSPPfyCPpwOQ34%2BOsnlF8%2Bc%2BCVUZnlPIUoU0GC8xgE3%2FPa8g84yJxtHAw914nOp7iGQAkG%2BBNuB7Xm8xkTbbv9ZFc9RgjDdMOU8rTXs7XS1yFo4%2FXdeM0IIahDfQa9lTbRRQPpBa%2BZ9xzN8mXKPtjwrYInqpfoqf8C50JspTkahK2eGMD4uix%2FzCZDFocEQtj%2F0PQ7s%2F9lqPTfv08R01JwyWo%2BHSRC7Zjjz7wg6UQkNsIbi3v9pD47f5W1XDR89tcP%2BzzttcEhRc%2BwlXuM4p1rWmg8TLTS76peOKiSMZXJW8Be2WcWbdAeJHyycW9QrD8hkO4T%2BYX7jV%2FzAbrTA36TRe%2Bt3xlxQxaO0DDQLk6hUByZx98gxr9nNUqVyy3wKfBSZSpeCgHVcFj27qH0twl4tj5mM13o2faHmxggPCH8WCymd68lalGo5CtkERiO4xM%2FV3scnxNF%2BDphLnT34hDK%2Fbisw01GONQ0F0piaJ0ng9ZHHqURCDW7XlXpejgHhUglBbZ6Emm2TLqip958aVBb1DQfgz8tn089P1pd7yXxhIz%2BBxHgoOajCqhc3EBjqkAYZeZrSxiqEpZH3lNKskaqcEyFPlgTyLw%2FsBIiK83m0skUyIqQ7M9S6B80I14%2BUW1ob313LSvMTjljAWXAvRwMoZQ80YyRr9innFSLWg4kqCAj9J8AwaBHMSPbTQ19iwaVEBnlP27Ad0O12JvrMm71vl2LkGjfHkbe6VAoVFPHMVEK5%2BGq8xx%2FarMndglImz0OvoLypRkcx3UI%2BsbL%2FhGrVjyLPI&X-Amz-Signature=3bf8bbd2128eca999c0f64ef5c518560025d3e7c29ec4be98b5cf3beb03a5d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243MSV4K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD2qw1V3vpAVqumq0VVBMoq8vX8r6rr81SFc9XL0F56nAIhAJk078WFvtliBtUYRsKcvTYU%2B7unxXY6QCEQhXtOXvCrKv8DCHUQABoMNjM3NDIzMTgzODA1IgzbsfS%2FeFrbzPuo%2F%2Bsq3APNYn8nhWHdRWn4oAxQtwz2S%2BXGaHh89xYRM1BWArZQOgs7PJXuvmJy0oLWGxCiVmGoF9IdRSPPfyCPpwOQ34%2BOsnlF8%2Bc%2BCVUZnlPIUoU0GC8xgE3%2FPa8g84yJxtHAw914nOp7iGQAkG%2BBNuB7Xm8xkTbbv9ZFc9RgjDdMOU8rTXs7XS1yFo4%2FXdeM0IIahDfQa9lTbRRQPpBa%2BZ9xzN8mXKPtjwrYInqpfoqf8C50JspTkahK2eGMD4uix%2FzCZDFocEQtj%2F0PQ7s%2F9lqPTfv08R01JwyWo%2BHSRC7Zjjz7wg6UQkNsIbi3v9pD47f5W1XDR89tcP%2BzzttcEhRc%2BwlXuM4p1rWmg8TLTS76peOKiSMZXJW8Be2WcWbdAeJHyycW9QrD8hkO4T%2BYX7jV%2FzAbrTA36TRe%2Bt3xlxQxaO0DDQLk6hUByZx98gxr9nNUqVyy3wKfBSZSpeCgHVcFj27qH0twl4tj5mM13o2faHmxggPCH8WCymd68lalGo5CtkERiO4xM%2FV3scnxNF%2BDphLnT34hDK%2Fbisw01GONQ0F0piaJ0ng9ZHHqURCDW7XlXpejgHhUglBbZ6Emm2TLqip958aVBb1DQfgz8tn089P1pd7yXxhIz%2BBxHgoOajCqhc3EBjqkAYZeZrSxiqEpZH3lNKskaqcEyFPlgTyLw%2FsBIiK83m0skUyIqQ7M9S6B80I14%2BUW1ob313LSvMTjljAWXAvRwMoZQ80YyRr9innFSLWg4kqCAj9J8AwaBHMSPbTQ19iwaVEBnlP27Ad0O12JvrMm71vl2LkGjfHkbe6VAoVFPHMVEK5%2BGq8xx%2FarMndglImz0OvoLypRkcx3UI%2BsbL%2FhGrVjyLPI&X-Amz-Signature=f293c370a5d19a08ebe87e7064288b39ccb2b2f66001cadc4ed94f6d10cb9cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

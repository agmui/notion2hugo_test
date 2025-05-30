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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZKT73H%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWN3iiXgkidS9fPdu30X%2FXY4gd0K4DnHjtCfj4Hlr5wAiEAgT%2BcgS%2FmuLEWtnv4ygDcdA38qf264H1cCnSRHR3gGmUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvfdGj0TBKq1Q5PmircA0rwUWZAsCWk2AU%2FJTawd%2BCC4QyLpOrklGbYYgW4YFN6zcswq4PHYMb73Wy57L57Io66UcJk5wesF8Le%2B0BlRUN4Pr0DjOPD%2FUj06OMEnTiYim0wk9pf9sPjRDoxnb%2BoLUFeV2NmWPUJ2eTEQTwAv2ns8l7clcp3N9k4REDYDwy7StsNpokIx%2B7tmwMQVpe0iYcCDK0MF%2BsOhnmXqTOxoGm9C86w5nxsMrOX7dGTbJJDNxPRmy6ajKFyRNimhr29N%2BEraGZMzOwmQ83HVOmI%2FDNVE3z0jefH6JqbqfM8Z26k7bDx%2FasXzlZr34HbeQjcfjexfZGeFruvMCD1p%2Bo%2FkIdtMGplzEjTawO4bXtJBCETbHPcSfJ918UWOOm4S88%2FvyGbuaS0hGwK%2B25p8PHueLF7CKx%2BnBZ%2FuBQVj2Vim%2Fa3Xm6ozi4F2kAGUaVFm9CUXmzIhf%2BzDjNK027CWZfHjt4WH6zMmBMtQaRg805rv2X9Lrd1hTUikVDbtdibT%2Fz9Ws2dP5acYtsec0Os7Ue%2BQ1VcXeheq9%2Bb3dyPL1cQ7WrSiJMjleESm7HRMQ86imkwY%2BDzQrON%2Fcmd%2BPzHjw8STgtIiAOQWAXeD9wc32KtN0NVVg10HRrznNOiU389MJ6758EGOqUBmE0LjC4uwv%2BTG2GKSmoZ4xRsI05LWwJ9yi%2BMn%2B2OK%2B0fFbD1DDZBlJNYAnCD2Jw0UKBT2EHKM5HCb0ZLMvJVwVaB6nbsiM2q14bWE7gewfc%2F%2BTh2KqystP%2FS6P%2Fir%2BtXGkV75m0brjzYGZblUXf%2BpHxPbKKPvUqA7MabFd88aOXLSBQw9TpZ4b6V4U7dravgIZ%2F%2FRbEv3xzJp8YKJFuHRUG5clse&X-Amz-Signature=1dde2610f529f19c07e404fc3daea21c1df19abdbf56983f40842846c9e003ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZKT73H%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWN3iiXgkidS9fPdu30X%2FXY4gd0K4DnHjtCfj4Hlr5wAiEAgT%2BcgS%2FmuLEWtnv4ygDcdA38qf264H1cCnSRHR3gGmUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvfdGj0TBKq1Q5PmircA0rwUWZAsCWk2AU%2FJTawd%2BCC4QyLpOrklGbYYgW4YFN6zcswq4PHYMb73Wy57L57Io66UcJk5wesF8Le%2B0BlRUN4Pr0DjOPD%2FUj06OMEnTiYim0wk9pf9sPjRDoxnb%2BoLUFeV2NmWPUJ2eTEQTwAv2ns8l7clcp3N9k4REDYDwy7StsNpokIx%2B7tmwMQVpe0iYcCDK0MF%2BsOhnmXqTOxoGm9C86w5nxsMrOX7dGTbJJDNxPRmy6ajKFyRNimhr29N%2BEraGZMzOwmQ83HVOmI%2FDNVE3z0jefH6JqbqfM8Z26k7bDx%2FasXzlZr34HbeQjcfjexfZGeFruvMCD1p%2Bo%2FkIdtMGplzEjTawO4bXtJBCETbHPcSfJ918UWOOm4S88%2FvyGbuaS0hGwK%2B25p8PHueLF7CKx%2BnBZ%2FuBQVj2Vim%2Fa3Xm6ozi4F2kAGUaVFm9CUXmzIhf%2BzDjNK027CWZfHjt4WH6zMmBMtQaRg805rv2X9Lrd1hTUikVDbtdibT%2Fz9Ws2dP5acYtsec0Os7Ue%2BQ1VcXeheq9%2Bb3dyPL1cQ7WrSiJMjleESm7HRMQ86imkwY%2BDzQrON%2Fcmd%2BPzHjw8STgtIiAOQWAXeD9wc32KtN0NVVg10HRrznNOiU389MJ6758EGOqUBmE0LjC4uwv%2BTG2GKSmoZ4xRsI05LWwJ9yi%2BMn%2B2OK%2B0fFbD1DDZBlJNYAnCD2Jw0UKBT2EHKM5HCb0ZLMvJVwVaB6nbsiM2q14bWE7gewfc%2F%2BTh2KqystP%2FS6P%2Fir%2BtXGkV75m0brjzYGZblUXf%2BpHxPbKKPvUqA7MabFd88aOXLSBQw9TpZ4b6V4U7dravgIZ%2F%2FRbEv3xzJp8YKJFuHRUG5clse&X-Amz-Signature=029332793db55a14f8f6db2bf21fe1174859382f93512c7b9930e40e85cda778&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZKT73H%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWN3iiXgkidS9fPdu30X%2FXY4gd0K4DnHjtCfj4Hlr5wAiEAgT%2BcgS%2FmuLEWtnv4ygDcdA38qf264H1cCnSRHR3gGmUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvfdGj0TBKq1Q5PmircA0rwUWZAsCWk2AU%2FJTawd%2BCC4QyLpOrklGbYYgW4YFN6zcswq4PHYMb73Wy57L57Io66UcJk5wesF8Le%2B0BlRUN4Pr0DjOPD%2FUj06OMEnTiYim0wk9pf9sPjRDoxnb%2BoLUFeV2NmWPUJ2eTEQTwAv2ns8l7clcp3N9k4REDYDwy7StsNpokIx%2B7tmwMQVpe0iYcCDK0MF%2BsOhnmXqTOxoGm9C86w5nxsMrOX7dGTbJJDNxPRmy6ajKFyRNimhr29N%2BEraGZMzOwmQ83HVOmI%2FDNVE3z0jefH6JqbqfM8Z26k7bDx%2FasXzlZr34HbeQjcfjexfZGeFruvMCD1p%2Bo%2FkIdtMGplzEjTawO4bXtJBCETbHPcSfJ918UWOOm4S88%2FvyGbuaS0hGwK%2B25p8PHueLF7CKx%2BnBZ%2FuBQVj2Vim%2Fa3Xm6ozi4F2kAGUaVFm9CUXmzIhf%2BzDjNK027CWZfHjt4WH6zMmBMtQaRg805rv2X9Lrd1hTUikVDbtdibT%2Fz9Ws2dP5acYtsec0Os7Ue%2BQ1VcXeheq9%2Bb3dyPL1cQ7WrSiJMjleESm7HRMQ86imkwY%2BDzQrON%2Fcmd%2BPzHjw8STgtIiAOQWAXeD9wc32KtN0NVVg10HRrznNOiU389MJ6758EGOqUBmE0LjC4uwv%2BTG2GKSmoZ4xRsI05LWwJ9yi%2BMn%2B2OK%2B0fFbD1DDZBlJNYAnCD2Jw0UKBT2EHKM5HCb0ZLMvJVwVaB6nbsiM2q14bWE7gewfc%2F%2BTh2KqystP%2FS6P%2Fir%2BtXGkV75m0brjzYGZblUXf%2BpHxPbKKPvUqA7MabFd88aOXLSBQw9TpZ4b6V4U7dravgIZ%2F%2FRbEv3xzJp8YKJFuHRUG5clse&X-Amz-Signature=705a7734beaf47ae0cd14a66f287659985424eccdd9068b592cce1c3b4c3738e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZKT73H%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWN3iiXgkidS9fPdu30X%2FXY4gd0K4DnHjtCfj4Hlr5wAiEAgT%2BcgS%2FmuLEWtnv4ygDcdA38qf264H1cCnSRHR3gGmUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvfdGj0TBKq1Q5PmircA0rwUWZAsCWk2AU%2FJTawd%2BCC4QyLpOrklGbYYgW4YFN6zcswq4PHYMb73Wy57L57Io66UcJk5wesF8Le%2B0BlRUN4Pr0DjOPD%2FUj06OMEnTiYim0wk9pf9sPjRDoxnb%2BoLUFeV2NmWPUJ2eTEQTwAv2ns8l7clcp3N9k4REDYDwy7StsNpokIx%2B7tmwMQVpe0iYcCDK0MF%2BsOhnmXqTOxoGm9C86w5nxsMrOX7dGTbJJDNxPRmy6ajKFyRNimhr29N%2BEraGZMzOwmQ83HVOmI%2FDNVE3z0jefH6JqbqfM8Z26k7bDx%2FasXzlZr34HbeQjcfjexfZGeFruvMCD1p%2Bo%2FkIdtMGplzEjTawO4bXtJBCETbHPcSfJ918UWOOm4S88%2FvyGbuaS0hGwK%2B25p8PHueLF7CKx%2BnBZ%2FuBQVj2Vim%2Fa3Xm6ozi4F2kAGUaVFm9CUXmzIhf%2BzDjNK027CWZfHjt4WH6zMmBMtQaRg805rv2X9Lrd1hTUikVDbtdibT%2Fz9Ws2dP5acYtsec0Os7Ue%2BQ1VcXeheq9%2Bb3dyPL1cQ7WrSiJMjleESm7HRMQ86imkwY%2BDzQrON%2Fcmd%2BPzHjw8STgtIiAOQWAXeD9wc32KtN0NVVg10HRrznNOiU389MJ6758EGOqUBmE0LjC4uwv%2BTG2GKSmoZ4xRsI05LWwJ9yi%2BMn%2B2OK%2B0fFbD1DDZBlJNYAnCD2Jw0UKBT2EHKM5HCb0ZLMvJVwVaB6nbsiM2q14bWE7gewfc%2F%2BTh2KqystP%2FS6P%2Fir%2BtXGkV75m0brjzYGZblUXf%2BpHxPbKKPvUqA7MabFd88aOXLSBQw9TpZ4b6V4U7dravgIZ%2F%2FRbEv3xzJp8YKJFuHRUG5clse&X-Amz-Signature=65bad7c42554a5ee4d36f7d030d5b38af567eba505e0670d701d1549c25e9a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZKT73H%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWN3iiXgkidS9fPdu30X%2FXY4gd0K4DnHjtCfj4Hlr5wAiEAgT%2BcgS%2FmuLEWtnv4ygDcdA38qf264H1cCnSRHR3gGmUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvfdGj0TBKq1Q5PmircA0rwUWZAsCWk2AU%2FJTawd%2BCC4QyLpOrklGbYYgW4YFN6zcswq4PHYMb73Wy57L57Io66UcJk5wesF8Le%2B0BlRUN4Pr0DjOPD%2FUj06OMEnTiYim0wk9pf9sPjRDoxnb%2BoLUFeV2NmWPUJ2eTEQTwAv2ns8l7clcp3N9k4REDYDwy7StsNpokIx%2B7tmwMQVpe0iYcCDK0MF%2BsOhnmXqTOxoGm9C86w5nxsMrOX7dGTbJJDNxPRmy6ajKFyRNimhr29N%2BEraGZMzOwmQ83HVOmI%2FDNVE3z0jefH6JqbqfM8Z26k7bDx%2FasXzlZr34HbeQjcfjexfZGeFruvMCD1p%2Bo%2FkIdtMGplzEjTawO4bXtJBCETbHPcSfJ918UWOOm4S88%2FvyGbuaS0hGwK%2B25p8PHueLF7CKx%2BnBZ%2FuBQVj2Vim%2Fa3Xm6ozi4F2kAGUaVFm9CUXmzIhf%2BzDjNK027CWZfHjt4WH6zMmBMtQaRg805rv2X9Lrd1hTUikVDbtdibT%2Fz9Ws2dP5acYtsec0Os7Ue%2BQ1VcXeheq9%2Bb3dyPL1cQ7WrSiJMjleESm7HRMQ86imkwY%2BDzQrON%2Fcmd%2BPzHjw8STgtIiAOQWAXeD9wc32KtN0NVVg10HRrznNOiU389MJ6758EGOqUBmE0LjC4uwv%2BTG2GKSmoZ4xRsI05LWwJ9yi%2BMn%2B2OK%2B0fFbD1DDZBlJNYAnCD2Jw0UKBT2EHKM5HCb0ZLMvJVwVaB6nbsiM2q14bWE7gewfc%2F%2BTh2KqystP%2FS6P%2Fir%2BtXGkV75m0brjzYGZblUXf%2BpHxPbKKPvUqA7MabFd88aOXLSBQw9TpZ4b6V4U7dravgIZ%2F%2FRbEv3xzJp8YKJFuHRUG5clse&X-Amz-Signature=baa4a34eb97d865c3e88f2d77df80f610f3e7e9a7b85f082b353bafd3b606b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZKT73H%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWN3iiXgkidS9fPdu30X%2FXY4gd0K4DnHjtCfj4Hlr5wAiEAgT%2BcgS%2FmuLEWtnv4ygDcdA38qf264H1cCnSRHR3gGmUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvfdGj0TBKq1Q5PmircA0rwUWZAsCWk2AU%2FJTawd%2BCC4QyLpOrklGbYYgW4YFN6zcswq4PHYMb73Wy57L57Io66UcJk5wesF8Le%2B0BlRUN4Pr0DjOPD%2FUj06OMEnTiYim0wk9pf9sPjRDoxnb%2BoLUFeV2NmWPUJ2eTEQTwAv2ns8l7clcp3N9k4REDYDwy7StsNpokIx%2B7tmwMQVpe0iYcCDK0MF%2BsOhnmXqTOxoGm9C86w5nxsMrOX7dGTbJJDNxPRmy6ajKFyRNimhr29N%2BEraGZMzOwmQ83HVOmI%2FDNVE3z0jefH6JqbqfM8Z26k7bDx%2FasXzlZr34HbeQjcfjexfZGeFruvMCD1p%2Bo%2FkIdtMGplzEjTawO4bXtJBCETbHPcSfJ918UWOOm4S88%2FvyGbuaS0hGwK%2B25p8PHueLF7CKx%2BnBZ%2FuBQVj2Vim%2Fa3Xm6ozi4F2kAGUaVFm9CUXmzIhf%2BzDjNK027CWZfHjt4WH6zMmBMtQaRg805rv2X9Lrd1hTUikVDbtdibT%2Fz9Ws2dP5acYtsec0Os7Ue%2BQ1VcXeheq9%2Bb3dyPL1cQ7WrSiJMjleESm7HRMQ86imkwY%2BDzQrON%2Fcmd%2BPzHjw8STgtIiAOQWAXeD9wc32KtN0NVVg10HRrznNOiU389MJ6758EGOqUBmE0LjC4uwv%2BTG2GKSmoZ4xRsI05LWwJ9yi%2BMn%2B2OK%2B0fFbD1DDZBlJNYAnCD2Jw0UKBT2EHKM5HCb0ZLMvJVwVaB6nbsiM2q14bWE7gewfc%2F%2BTh2KqystP%2FS6P%2Fir%2BtXGkV75m0brjzYGZblUXf%2BpHxPbKKPvUqA7MabFd88aOXLSBQw9TpZ4b6V4U7dravgIZ%2F%2FRbEv3xzJp8YKJFuHRUG5clse&X-Amz-Signature=9f0b44a552072b6db4ec122da318f2542ee5a250527a8d4859b1f31ec5c9b2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZKT73H%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWN3iiXgkidS9fPdu30X%2FXY4gd0K4DnHjtCfj4Hlr5wAiEAgT%2BcgS%2FmuLEWtnv4ygDcdA38qf264H1cCnSRHR3gGmUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvfdGj0TBKq1Q5PmircA0rwUWZAsCWk2AU%2FJTawd%2BCC4QyLpOrklGbYYgW4YFN6zcswq4PHYMb73Wy57L57Io66UcJk5wesF8Le%2B0BlRUN4Pr0DjOPD%2FUj06OMEnTiYim0wk9pf9sPjRDoxnb%2BoLUFeV2NmWPUJ2eTEQTwAv2ns8l7clcp3N9k4REDYDwy7StsNpokIx%2B7tmwMQVpe0iYcCDK0MF%2BsOhnmXqTOxoGm9C86w5nxsMrOX7dGTbJJDNxPRmy6ajKFyRNimhr29N%2BEraGZMzOwmQ83HVOmI%2FDNVE3z0jefH6JqbqfM8Z26k7bDx%2FasXzlZr34HbeQjcfjexfZGeFruvMCD1p%2Bo%2FkIdtMGplzEjTawO4bXtJBCETbHPcSfJ918UWOOm4S88%2FvyGbuaS0hGwK%2B25p8PHueLF7CKx%2BnBZ%2FuBQVj2Vim%2Fa3Xm6ozi4F2kAGUaVFm9CUXmzIhf%2BzDjNK027CWZfHjt4WH6zMmBMtQaRg805rv2X9Lrd1hTUikVDbtdibT%2Fz9Ws2dP5acYtsec0Os7Ue%2BQ1VcXeheq9%2Bb3dyPL1cQ7WrSiJMjleESm7HRMQ86imkwY%2BDzQrON%2Fcmd%2BPzHjw8STgtIiAOQWAXeD9wc32KtN0NVVg10HRrznNOiU389MJ6758EGOqUBmE0LjC4uwv%2BTG2GKSmoZ4xRsI05LWwJ9yi%2BMn%2B2OK%2B0fFbD1DDZBlJNYAnCD2Jw0UKBT2EHKM5HCb0ZLMvJVwVaB6nbsiM2q14bWE7gewfc%2F%2BTh2KqystP%2FS6P%2Fir%2BtXGkV75m0brjzYGZblUXf%2BpHxPbKKPvUqA7MabFd88aOXLSBQw9TpZ4b6V4U7dravgIZ%2F%2FRbEv3xzJp8YKJFuHRUG5clse&X-Amz-Signature=ad1ccf312722a4a716b38386e4abfec49a6fa9fb43ce6b481acbd258f422a0be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIZKT73H%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWN3iiXgkidS9fPdu30X%2FXY4gd0K4DnHjtCfj4Hlr5wAiEAgT%2BcgS%2FmuLEWtnv4ygDcdA38qf264H1cCnSRHR3gGmUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvfdGj0TBKq1Q5PmircA0rwUWZAsCWk2AU%2FJTawd%2BCC4QyLpOrklGbYYgW4YFN6zcswq4PHYMb73Wy57L57Io66UcJk5wesF8Le%2B0BlRUN4Pr0DjOPD%2FUj06OMEnTiYim0wk9pf9sPjRDoxnb%2BoLUFeV2NmWPUJ2eTEQTwAv2ns8l7clcp3N9k4REDYDwy7StsNpokIx%2B7tmwMQVpe0iYcCDK0MF%2BsOhnmXqTOxoGm9C86w5nxsMrOX7dGTbJJDNxPRmy6ajKFyRNimhr29N%2BEraGZMzOwmQ83HVOmI%2FDNVE3z0jefH6JqbqfM8Z26k7bDx%2FasXzlZr34HbeQjcfjexfZGeFruvMCD1p%2Bo%2FkIdtMGplzEjTawO4bXtJBCETbHPcSfJ918UWOOm4S88%2FvyGbuaS0hGwK%2B25p8PHueLF7CKx%2BnBZ%2FuBQVj2Vim%2Fa3Xm6ozi4F2kAGUaVFm9CUXmzIhf%2BzDjNK027CWZfHjt4WH6zMmBMtQaRg805rv2X9Lrd1hTUikVDbtdibT%2Fz9Ws2dP5acYtsec0Os7Ue%2BQ1VcXeheq9%2Bb3dyPL1cQ7WrSiJMjleESm7HRMQ86imkwY%2BDzQrON%2Fcmd%2BPzHjw8STgtIiAOQWAXeD9wc32KtN0NVVg10HRrznNOiU389MJ6758EGOqUBmE0LjC4uwv%2BTG2GKSmoZ4xRsI05LWwJ9yi%2BMn%2B2OK%2B0fFbD1DDZBlJNYAnCD2Jw0UKBT2EHKM5HCb0ZLMvJVwVaB6nbsiM2q14bWE7gewfc%2F%2BTh2KqystP%2FS6P%2Fir%2BtXGkV75m0brjzYGZblUXf%2BpHxPbKKPvUqA7MabFd88aOXLSBQw9TpZ4b6V4U7dravgIZ%2F%2FRbEv3xzJp8YKJFuHRUG5clse&X-Amz-Signature=80c16370a3d0ea49b7c547f821f364323a357791ba6889510289ae9892b548d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JWD2C7%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalYWck4os%2F40CG4LRfuI8IbRTYLhQ4sMaq8sa2PgnPAiEA8mQbKaHhqiH177j5%2BQvN3fWn5u5o8WTl%2Bdi%2Fii%2FPjE4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12U9atmyQwmqxBnCrcA6T4sLjRmEZtXAs%2Bt81zxBqAikRRhmkl%2Bev9pgxe1%2F%2FIhCT2twvqmVh5MqXxyoqI9Lc7Sj5gxvyaN9X%2F%2BjEVG6WDAInT%2FwCaNz3IKYXLRtI7j7NILg4fvKyIZbjR%2FQ2ODX2bu0vigiM6CT3T%2BdmBmJ50%2BCCwwjR%2FnPTdaCzGLBoNftxX2FUM%2B8PC6kjp4IQN9ite8yTv3aIueLO1utFKFkOUASlvL3Z7IM0IsdPpL8lUBv1czcDfYlbL7dBIwTkuRq4vMmTookZmRbwFmrq71xLDz27hIgMxX1v8lxtjNwYhDF9DptZgOKV6Ssdjfg0oTTViXkJW%2B9le3DxwVvYelBFjRWcf207NKEAaow3D4WMw83OwMYAcL%2FDGWjmoM9Sj4hOI2fOzBwtrIgHz0Gn5y56LQo0sCeJLCax9wBwzAIVtSDV7rymzF3gNFJsShljGQe35v9gVvkbZrRIVCg9eBvBIh%2BluuwTqsE9T0gVawDMZ%2FTpLOjLw1AKXHhkZ9Gz2ch75KjrCpEGYtgXRzurcl4xsja7x73OKjXMm0hN78i3rOAvAnxpf2bR9UqGJBRNrET3KXcejixRxwPBa1mSDsB3RdYA8Mw5o5%2FlEn3ag0Iox2JzOyGT5qqzjFcGTMKiggtIGOqUBZ%2BZGAam6dZYl9qtTMIy48Dq3ix6gzImQXY7Oy631O1KP3uBYZHswWa6qVL18QtYbByhWzSR5D0WZVK0bLIeRx%2FpKV79dMHFP31apswSWQJON4P%2B7yHrJXqRLoavAaZuzggVDlOlth2MjXXkJHTPWAYKUIgVCsH3s%2F2MWK5hExRz%2BU3aOZOO%2B7GhEOqQpGMossoR%2BK2m3yXxag9IGaae6iXW2VfRY&X-Amz-Signature=c68ad79f68a75d2f2ba42e12fe8d90e25b1dfcb6f5a73d765602a2dfb5b5fd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JWD2C7%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalYWck4os%2F40CG4LRfuI8IbRTYLhQ4sMaq8sa2PgnPAiEA8mQbKaHhqiH177j5%2BQvN3fWn5u5o8WTl%2Bdi%2Fii%2FPjE4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12U9atmyQwmqxBnCrcA6T4sLjRmEZtXAs%2Bt81zxBqAikRRhmkl%2Bev9pgxe1%2F%2FIhCT2twvqmVh5MqXxyoqI9Lc7Sj5gxvyaN9X%2F%2BjEVG6WDAInT%2FwCaNz3IKYXLRtI7j7NILg4fvKyIZbjR%2FQ2ODX2bu0vigiM6CT3T%2BdmBmJ50%2BCCwwjR%2FnPTdaCzGLBoNftxX2FUM%2B8PC6kjp4IQN9ite8yTv3aIueLO1utFKFkOUASlvL3Z7IM0IsdPpL8lUBv1czcDfYlbL7dBIwTkuRq4vMmTookZmRbwFmrq71xLDz27hIgMxX1v8lxtjNwYhDF9DptZgOKV6Ssdjfg0oTTViXkJW%2B9le3DxwVvYelBFjRWcf207NKEAaow3D4WMw83OwMYAcL%2FDGWjmoM9Sj4hOI2fOzBwtrIgHz0Gn5y56LQo0sCeJLCax9wBwzAIVtSDV7rymzF3gNFJsShljGQe35v9gVvkbZrRIVCg9eBvBIh%2BluuwTqsE9T0gVawDMZ%2FTpLOjLw1AKXHhkZ9Gz2ch75KjrCpEGYtgXRzurcl4xsja7x73OKjXMm0hN78i3rOAvAnxpf2bR9UqGJBRNrET3KXcejixRxwPBa1mSDsB3RdYA8Mw5o5%2FlEn3ag0Iox2JzOyGT5qqzjFcGTMKiggtIGOqUBZ%2BZGAam6dZYl9qtTMIy48Dq3ix6gzImQXY7Oy631O1KP3uBYZHswWa6qVL18QtYbByhWzSR5D0WZVK0bLIeRx%2FpKV79dMHFP31apswSWQJON4P%2B7yHrJXqRLoavAaZuzggVDlOlth2MjXXkJHTPWAYKUIgVCsH3s%2F2MWK5hExRz%2BU3aOZOO%2B7GhEOqQpGMossoR%2BK2m3yXxag9IGaae6iXW2VfRY&X-Amz-Signature=c1331b6dbf11e85deed0874682de737278ec533ed85f18239b1e96719d8e32bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JWD2C7%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalYWck4os%2F40CG4LRfuI8IbRTYLhQ4sMaq8sa2PgnPAiEA8mQbKaHhqiH177j5%2BQvN3fWn5u5o8WTl%2Bdi%2Fii%2FPjE4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12U9atmyQwmqxBnCrcA6T4sLjRmEZtXAs%2Bt81zxBqAikRRhmkl%2Bev9pgxe1%2F%2FIhCT2twvqmVh5MqXxyoqI9Lc7Sj5gxvyaN9X%2F%2BjEVG6WDAInT%2FwCaNz3IKYXLRtI7j7NILg4fvKyIZbjR%2FQ2ODX2bu0vigiM6CT3T%2BdmBmJ50%2BCCwwjR%2FnPTdaCzGLBoNftxX2FUM%2B8PC6kjp4IQN9ite8yTv3aIueLO1utFKFkOUASlvL3Z7IM0IsdPpL8lUBv1czcDfYlbL7dBIwTkuRq4vMmTookZmRbwFmrq71xLDz27hIgMxX1v8lxtjNwYhDF9DptZgOKV6Ssdjfg0oTTViXkJW%2B9le3DxwVvYelBFjRWcf207NKEAaow3D4WMw83OwMYAcL%2FDGWjmoM9Sj4hOI2fOzBwtrIgHz0Gn5y56LQo0sCeJLCax9wBwzAIVtSDV7rymzF3gNFJsShljGQe35v9gVvkbZrRIVCg9eBvBIh%2BluuwTqsE9T0gVawDMZ%2FTpLOjLw1AKXHhkZ9Gz2ch75KjrCpEGYtgXRzurcl4xsja7x73OKjXMm0hN78i3rOAvAnxpf2bR9UqGJBRNrET3KXcejixRxwPBa1mSDsB3RdYA8Mw5o5%2FlEn3ag0Iox2JzOyGT5qqzjFcGTMKiggtIGOqUBZ%2BZGAam6dZYl9qtTMIy48Dq3ix6gzImQXY7Oy631O1KP3uBYZHswWa6qVL18QtYbByhWzSR5D0WZVK0bLIeRx%2FpKV79dMHFP31apswSWQJON4P%2B7yHrJXqRLoavAaZuzggVDlOlth2MjXXkJHTPWAYKUIgVCsH3s%2F2MWK5hExRz%2BU3aOZOO%2B7GhEOqQpGMossoR%2BK2m3yXxag9IGaae6iXW2VfRY&X-Amz-Signature=25fc17981b76d711d4f8123cc9e92f62095c8b678c536e8a72ca1cf899a0d170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JWD2C7%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalYWck4os%2F40CG4LRfuI8IbRTYLhQ4sMaq8sa2PgnPAiEA8mQbKaHhqiH177j5%2BQvN3fWn5u5o8WTl%2Bdi%2Fii%2FPjE4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12U9atmyQwmqxBnCrcA6T4sLjRmEZtXAs%2Bt81zxBqAikRRhmkl%2Bev9pgxe1%2F%2FIhCT2twvqmVh5MqXxyoqI9Lc7Sj5gxvyaN9X%2F%2BjEVG6WDAInT%2FwCaNz3IKYXLRtI7j7NILg4fvKyIZbjR%2FQ2ODX2bu0vigiM6CT3T%2BdmBmJ50%2BCCwwjR%2FnPTdaCzGLBoNftxX2FUM%2B8PC6kjp4IQN9ite8yTv3aIueLO1utFKFkOUASlvL3Z7IM0IsdPpL8lUBv1czcDfYlbL7dBIwTkuRq4vMmTookZmRbwFmrq71xLDz27hIgMxX1v8lxtjNwYhDF9DptZgOKV6Ssdjfg0oTTViXkJW%2B9le3DxwVvYelBFjRWcf207NKEAaow3D4WMw83OwMYAcL%2FDGWjmoM9Sj4hOI2fOzBwtrIgHz0Gn5y56LQo0sCeJLCax9wBwzAIVtSDV7rymzF3gNFJsShljGQe35v9gVvkbZrRIVCg9eBvBIh%2BluuwTqsE9T0gVawDMZ%2FTpLOjLw1AKXHhkZ9Gz2ch75KjrCpEGYtgXRzurcl4xsja7x73OKjXMm0hN78i3rOAvAnxpf2bR9UqGJBRNrET3KXcejixRxwPBa1mSDsB3RdYA8Mw5o5%2FlEn3ag0Iox2JzOyGT5qqzjFcGTMKiggtIGOqUBZ%2BZGAam6dZYl9qtTMIy48Dq3ix6gzImQXY7Oy631O1KP3uBYZHswWa6qVL18QtYbByhWzSR5D0WZVK0bLIeRx%2FpKV79dMHFP31apswSWQJON4P%2B7yHrJXqRLoavAaZuzggVDlOlth2MjXXkJHTPWAYKUIgVCsH3s%2F2MWK5hExRz%2BU3aOZOO%2B7GhEOqQpGMossoR%2BK2m3yXxag9IGaae6iXW2VfRY&X-Amz-Signature=d2b069ca25b49cdc35528d80c352d0ff7aed625899f962b8d85a10255601bd4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JWD2C7%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalYWck4os%2F40CG4LRfuI8IbRTYLhQ4sMaq8sa2PgnPAiEA8mQbKaHhqiH177j5%2BQvN3fWn5u5o8WTl%2Bdi%2Fii%2FPjE4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12U9atmyQwmqxBnCrcA6T4sLjRmEZtXAs%2Bt81zxBqAikRRhmkl%2Bev9pgxe1%2F%2FIhCT2twvqmVh5MqXxyoqI9Lc7Sj5gxvyaN9X%2F%2BjEVG6WDAInT%2FwCaNz3IKYXLRtI7j7NILg4fvKyIZbjR%2FQ2ODX2bu0vigiM6CT3T%2BdmBmJ50%2BCCwwjR%2FnPTdaCzGLBoNftxX2FUM%2B8PC6kjp4IQN9ite8yTv3aIueLO1utFKFkOUASlvL3Z7IM0IsdPpL8lUBv1czcDfYlbL7dBIwTkuRq4vMmTookZmRbwFmrq71xLDz27hIgMxX1v8lxtjNwYhDF9DptZgOKV6Ssdjfg0oTTViXkJW%2B9le3DxwVvYelBFjRWcf207NKEAaow3D4WMw83OwMYAcL%2FDGWjmoM9Sj4hOI2fOzBwtrIgHz0Gn5y56LQo0sCeJLCax9wBwzAIVtSDV7rymzF3gNFJsShljGQe35v9gVvkbZrRIVCg9eBvBIh%2BluuwTqsE9T0gVawDMZ%2FTpLOjLw1AKXHhkZ9Gz2ch75KjrCpEGYtgXRzurcl4xsja7x73OKjXMm0hN78i3rOAvAnxpf2bR9UqGJBRNrET3KXcejixRxwPBa1mSDsB3RdYA8Mw5o5%2FlEn3ag0Iox2JzOyGT5qqzjFcGTMKiggtIGOqUBZ%2BZGAam6dZYl9qtTMIy48Dq3ix6gzImQXY7Oy631O1KP3uBYZHswWa6qVL18QtYbByhWzSR5D0WZVK0bLIeRx%2FpKV79dMHFP31apswSWQJON4P%2B7yHrJXqRLoavAaZuzggVDlOlth2MjXXkJHTPWAYKUIgVCsH3s%2F2MWK5hExRz%2BU3aOZOO%2B7GhEOqQpGMossoR%2BK2m3yXxag9IGaae6iXW2VfRY&X-Amz-Signature=2822063a16e5aeb0f4d7f765aa374b632d3d246602f44ac9bfa7c94804860155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JWD2C7%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalYWck4os%2F40CG4LRfuI8IbRTYLhQ4sMaq8sa2PgnPAiEA8mQbKaHhqiH177j5%2BQvN3fWn5u5o8WTl%2Bdi%2Fii%2FPjE4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12U9atmyQwmqxBnCrcA6T4sLjRmEZtXAs%2Bt81zxBqAikRRhmkl%2Bev9pgxe1%2F%2FIhCT2twvqmVh5MqXxyoqI9Lc7Sj5gxvyaN9X%2F%2BjEVG6WDAInT%2FwCaNz3IKYXLRtI7j7NILg4fvKyIZbjR%2FQ2ODX2bu0vigiM6CT3T%2BdmBmJ50%2BCCwwjR%2FnPTdaCzGLBoNftxX2FUM%2B8PC6kjp4IQN9ite8yTv3aIueLO1utFKFkOUASlvL3Z7IM0IsdPpL8lUBv1czcDfYlbL7dBIwTkuRq4vMmTookZmRbwFmrq71xLDz27hIgMxX1v8lxtjNwYhDF9DptZgOKV6Ssdjfg0oTTViXkJW%2B9le3DxwVvYelBFjRWcf207NKEAaow3D4WMw83OwMYAcL%2FDGWjmoM9Sj4hOI2fOzBwtrIgHz0Gn5y56LQo0sCeJLCax9wBwzAIVtSDV7rymzF3gNFJsShljGQe35v9gVvkbZrRIVCg9eBvBIh%2BluuwTqsE9T0gVawDMZ%2FTpLOjLw1AKXHhkZ9Gz2ch75KjrCpEGYtgXRzurcl4xsja7x73OKjXMm0hN78i3rOAvAnxpf2bR9UqGJBRNrET3KXcejixRxwPBa1mSDsB3RdYA8Mw5o5%2FlEn3ag0Iox2JzOyGT5qqzjFcGTMKiggtIGOqUBZ%2BZGAam6dZYl9qtTMIy48Dq3ix6gzImQXY7Oy631O1KP3uBYZHswWa6qVL18QtYbByhWzSR5D0WZVK0bLIeRx%2FpKV79dMHFP31apswSWQJON4P%2B7yHrJXqRLoavAaZuzggVDlOlth2MjXXkJHTPWAYKUIgVCsH3s%2F2MWK5hExRz%2BU3aOZOO%2B7GhEOqQpGMossoR%2BK2m3yXxag9IGaae6iXW2VfRY&X-Amz-Signature=64945d9edcff1c48a40e75f1ff4542e70bfefd5abce47e68c097f9bf844c2b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JWD2C7%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalYWck4os%2F40CG4LRfuI8IbRTYLhQ4sMaq8sa2PgnPAiEA8mQbKaHhqiH177j5%2BQvN3fWn5u5o8WTl%2Bdi%2Fii%2FPjE4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12U9atmyQwmqxBnCrcA6T4sLjRmEZtXAs%2Bt81zxBqAikRRhmkl%2Bev9pgxe1%2F%2FIhCT2twvqmVh5MqXxyoqI9Lc7Sj5gxvyaN9X%2F%2BjEVG6WDAInT%2FwCaNz3IKYXLRtI7j7NILg4fvKyIZbjR%2FQ2ODX2bu0vigiM6CT3T%2BdmBmJ50%2BCCwwjR%2FnPTdaCzGLBoNftxX2FUM%2B8PC6kjp4IQN9ite8yTv3aIueLO1utFKFkOUASlvL3Z7IM0IsdPpL8lUBv1czcDfYlbL7dBIwTkuRq4vMmTookZmRbwFmrq71xLDz27hIgMxX1v8lxtjNwYhDF9DptZgOKV6Ssdjfg0oTTViXkJW%2B9le3DxwVvYelBFjRWcf207NKEAaow3D4WMw83OwMYAcL%2FDGWjmoM9Sj4hOI2fOzBwtrIgHz0Gn5y56LQo0sCeJLCax9wBwzAIVtSDV7rymzF3gNFJsShljGQe35v9gVvkbZrRIVCg9eBvBIh%2BluuwTqsE9T0gVawDMZ%2FTpLOjLw1AKXHhkZ9Gz2ch75KjrCpEGYtgXRzurcl4xsja7x73OKjXMm0hN78i3rOAvAnxpf2bR9UqGJBRNrET3KXcejixRxwPBa1mSDsB3RdYA8Mw5o5%2FlEn3ag0Iox2JzOyGT5qqzjFcGTMKiggtIGOqUBZ%2BZGAam6dZYl9qtTMIy48Dq3ix6gzImQXY7Oy631O1KP3uBYZHswWa6qVL18QtYbByhWzSR5D0WZVK0bLIeRx%2FpKV79dMHFP31apswSWQJON4P%2B7yHrJXqRLoavAaZuzggVDlOlth2MjXXkJHTPWAYKUIgVCsH3s%2F2MWK5hExRz%2BU3aOZOO%2B7GhEOqQpGMossoR%2BK2m3yXxag9IGaae6iXW2VfRY&X-Amz-Signature=4a9b24146f931c4505b5601aad5873237e957230e8d473e16d9e049c9b664f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JWD2C7%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalYWck4os%2F40CG4LRfuI8IbRTYLhQ4sMaq8sa2PgnPAiEA8mQbKaHhqiH177j5%2BQvN3fWn5u5o8WTl%2Bdi%2Fii%2FPjE4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12U9atmyQwmqxBnCrcA6T4sLjRmEZtXAs%2Bt81zxBqAikRRhmkl%2Bev9pgxe1%2F%2FIhCT2twvqmVh5MqXxyoqI9Lc7Sj5gxvyaN9X%2F%2BjEVG6WDAInT%2FwCaNz3IKYXLRtI7j7NILg4fvKyIZbjR%2FQ2ODX2bu0vigiM6CT3T%2BdmBmJ50%2BCCwwjR%2FnPTdaCzGLBoNftxX2FUM%2B8PC6kjp4IQN9ite8yTv3aIueLO1utFKFkOUASlvL3Z7IM0IsdPpL8lUBv1czcDfYlbL7dBIwTkuRq4vMmTookZmRbwFmrq71xLDz27hIgMxX1v8lxtjNwYhDF9DptZgOKV6Ssdjfg0oTTViXkJW%2B9le3DxwVvYelBFjRWcf207NKEAaow3D4WMw83OwMYAcL%2FDGWjmoM9Sj4hOI2fOzBwtrIgHz0Gn5y56LQo0sCeJLCax9wBwzAIVtSDV7rymzF3gNFJsShljGQe35v9gVvkbZrRIVCg9eBvBIh%2BluuwTqsE9T0gVawDMZ%2FTpLOjLw1AKXHhkZ9Gz2ch75KjrCpEGYtgXRzurcl4xsja7x73OKjXMm0hN78i3rOAvAnxpf2bR9UqGJBRNrET3KXcejixRxwPBa1mSDsB3RdYA8Mw5o5%2FlEn3ag0Iox2JzOyGT5qqzjFcGTMKiggtIGOqUBZ%2BZGAam6dZYl9qtTMIy48Dq3ix6gzImQXY7Oy631O1KP3uBYZHswWa6qVL18QtYbByhWzSR5D0WZVK0bLIeRx%2FpKV79dMHFP31apswSWQJON4P%2B7yHrJXqRLoavAaZuzggVDlOlth2MjXXkJHTPWAYKUIgVCsH3s%2F2MWK5hExRz%2BU3aOZOO%2B7GhEOqQpGMossoR%2BK2m3yXxag9IGaae6iXW2VfRY&X-Amz-Signature=dd6675a1439397fb92af1c6165b7235baaffb5a61dcca0f24a5d191d88492640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

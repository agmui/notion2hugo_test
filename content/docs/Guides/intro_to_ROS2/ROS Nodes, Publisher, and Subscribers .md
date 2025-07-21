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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFVIRG6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVTBjrEpoKX1vX0thz7PeB7Cj9niGYPQzMspy2kfiCwIhAP07c5ztTGB9qJ%2Fp6I6M7tEIhCf9zX7sMrJXAXnO2nfuKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT5yFmgybX4LiUQ%2F8q3AOluuJxdjYecxW8J%2BOMDbfj9M0QdThC6iFuwmYJKQO7%2Bo80kgUNpwTaAUEPkzaKLsudJ4118rL%2F9qkMsljUHsQlsGvZ5Pi%2Bez36LVFsZZYueBlfu%2FZkNkvITFZCmxnE%2BEsvirADgwZA%2F1nu6rkty2%2BE3t173gh2N1%2FVxmjt5Q%2B15byTBpQfbCKnaEfftBgqOxoqM3plmX5jGcDhUVm7CW1ArVCBOdNxZNbaoGXpZrfDriFBscZ2yL4Tvr5bfvgpUTCkmzqR8uPvSVICYg1luwRx%2FCIORy3aPAGU4om3V1oZKfna9u7jD%2F4fht28kV3tLFz3ka6SYLSu6ghrndLN7DWZO%2FyDr1IMSXz3LsRXAZUKPC7QiE%2FI56%2BBrFvINnHYGwzuwHGvsXXQpDQlGsIdQQEOyxWeHpoq%2FOjIDlULY%2BGrPTdXNwjI8Urodv8vdmRTJzC1ZvYE2HhrXtpa1p%2BnBhPHQFwvjaEKOSLUgBPRb9k0tXbS2GryfjAdn7YeqJkfRbDEALZOe9ySxuy5c1UH%2BBA7gTi4kNv3clKJGUlIoECYwisWesY0EYf8rKUwX5Cmi9viDbYokgn9MokpS0Xg7tevs5Q%2Bw1GnMgN%2Faz2TbopXC9V8%2FvWLGVbyGyKOvDC7%2FPrDBjqkAS97y4bqqdDH6l%2B40k1h8TRyCIyoi%2FUsC%2FjxMPE4ysNm77rvW8QNe2dCq9UFFdO2AE8ycvmf%2FP48f8UQduxwTFjRy%2F7d0M%2FDoqMC2AshbOQ9xug6vSDQB%2FWdf%2FSyWZz1Tbzok3Sh0vQAsZWMiy1NMei2ivYWRb13ZwOoNrY2Tp5Bjsl5owMr3TOHVzLJ9d66SqADDL5uQVSh9lZB%2FIlSIOyp9iZQ&X-Amz-Signature=2ef91405f7b6965cbc223d5b9f104b1bddbdefed305e80d5fd5aa8e806459428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFVIRG6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVTBjrEpoKX1vX0thz7PeB7Cj9niGYPQzMspy2kfiCwIhAP07c5ztTGB9qJ%2Fp6I6M7tEIhCf9zX7sMrJXAXnO2nfuKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT5yFmgybX4LiUQ%2F8q3AOluuJxdjYecxW8J%2BOMDbfj9M0QdThC6iFuwmYJKQO7%2Bo80kgUNpwTaAUEPkzaKLsudJ4118rL%2F9qkMsljUHsQlsGvZ5Pi%2Bez36LVFsZZYueBlfu%2FZkNkvITFZCmxnE%2BEsvirADgwZA%2F1nu6rkty2%2BE3t173gh2N1%2FVxmjt5Q%2B15byTBpQfbCKnaEfftBgqOxoqM3plmX5jGcDhUVm7CW1ArVCBOdNxZNbaoGXpZrfDriFBscZ2yL4Tvr5bfvgpUTCkmzqR8uPvSVICYg1luwRx%2FCIORy3aPAGU4om3V1oZKfna9u7jD%2F4fht28kV3tLFz3ka6SYLSu6ghrndLN7DWZO%2FyDr1IMSXz3LsRXAZUKPC7QiE%2FI56%2BBrFvINnHYGwzuwHGvsXXQpDQlGsIdQQEOyxWeHpoq%2FOjIDlULY%2BGrPTdXNwjI8Urodv8vdmRTJzC1ZvYE2HhrXtpa1p%2BnBhPHQFwvjaEKOSLUgBPRb9k0tXbS2GryfjAdn7YeqJkfRbDEALZOe9ySxuy5c1UH%2BBA7gTi4kNv3clKJGUlIoECYwisWesY0EYf8rKUwX5Cmi9viDbYokgn9MokpS0Xg7tevs5Q%2Bw1GnMgN%2Faz2TbopXC9V8%2FvWLGVbyGyKOvDC7%2FPrDBjqkAS97y4bqqdDH6l%2B40k1h8TRyCIyoi%2FUsC%2FjxMPE4ysNm77rvW8QNe2dCq9UFFdO2AE8ycvmf%2FP48f8UQduxwTFjRy%2F7d0M%2FDoqMC2AshbOQ9xug6vSDQB%2FWdf%2FSyWZz1Tbzok3Sh0vQAsZWMiy1NMei2ivYWRb13ZwOoNrY2Tp5Bjsl5owMr3TOHVzLJ9d66SqADDL5uQVSh9lZB%2FIlSIOyp9iZQ&X-Amz-Signature=8b77604c9d0d4b9d89a4535f887cd70a4deadc0edc6d3425ec91f1a209db200d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFVIRG6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVTBjrEpoKX1vX0thz7PeB7Cj9niGYPQzMspy2kfiCwIhAP07c5ztTGB9qJ%2Fp6I6M7tEIhCf9zX7sMrJXAXnO2nfuKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT5yFmgybX4LiUQ%2F8q3AOluuJxdjYecxW8J%2BOMDbfj9M0QdThC6iFuwmYJKQO7%2Bo80kgUNpwTaAUEPkzaKLsudJ4118rL%2F9qkMsljUHsQlsGvZ5Pi%2Bez36LVFsZZYueBlfu%2FZkNkvITFZCmxnE%2BEsvirADgwZA%2F1nu6rkty2%2BE3t173gh2N1%2FVxmjt5Q%2B15byTBpQfbCKnaEfftBgqOxoqM3plmX5jGcDhUVm7CW1ArVCBOdNxZNbaoGXpZrfDriFBscZ2yL4Tvr5bfvgpUTCkmzqR8uPvSVICYg1luwRx%2FCIORy3aPAGU4om3V1oZKfna9u7jD%2F4fht28kV3tLFz3ka6SYLSu6ghrndLN7DWZO%2FyDr1IMSXz3LsRXAZUKPC7QiE%2FI56%2BBrFvINnHYGwzuwHGvsXXQpDQlGsIdQQEOyxWeHpoq%2FOjIDlULY%2BGrPTdXNwjI8Urodv8vdmRTJzC1ZvYE2HhrXtpa1p%2BnBhPHQFwvjaEKOSLUgBPRb9k0tXbS2GryfjAdn7YeqJkfRbDEALZOe9ySxuy5c1UH%2BBA7gTi4kNv3clKJGUlIoECYwisWesY0EYf8rKUwX5Cmi9viDbYokgn9MokpS0Xg7tevs5Q%2Bw1GnMgN%2Faz2TbopXC9V8%2FvWLGVbyGyKOvDC7%2FPrDBjqkAS97y4bqqdDH6l%2B40k1h8TRyCIyoi%2FUsC%2FjxMPE4ysNm77rvW8QNe2dCq9UFFdO2AE8ycvmf%2FP48f8UQduxwTFjRy%2F7d0M%2FDoqMC2AshbOQ9xug6vSDQB%2FWdf%2FSyWZz1Tbzok3Sh0vQAsZWMiy1NMei2ivYWRb13ZwOoNrY2Tp5Bjsl5owMr3TOHVzLJ9d66SqADDL5uQVSh9lZB%2FIlSIOyp9iZQ&X-Amz-Signature=0d3c2a8258b65ea37c78dcd1c52de9b8c0e06106002049911f29600be5da49c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFVIRG6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVTBjrEpoKX1vX0thz7PeB7Cj9niGYPQzMspy2kfiCwIhAP07c5ztTGB9qJ%2Fp6I6M7tEIhCf9zX7sMrJXAXnO2nfuKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT5yFmgybX4LiUQ%2F8q3AOluuJxdjYecxW8J%2BOMDbfj9M0QdThC6iFuwmYJKQO7%2Bo80kgUNpwTaAUEPkzaKLsudJ4118rL%2F9qkMsljUHsQlsGvZ5Pi%2Bez36LVFsZZYueBlfu%2FZkNkvITFZCmxnE%2BEsvirADgwZA%2F1nu6rkty2%2BE3t173gh2N1%2FVxmjt5Q%2B15byTBpQfbCKnaEfftBgqOxoqM3plmX5jGcDhUVm7CW1ArVCBOdNxZNbaoGXpZrfDriFBscZ2yL4Tvr5bfvgpUTCkmzqR8uPvSVICYg1luwRx%2FCIORy3aPAGU4om3V1oZKfna9u7jD%2F4fht28kV3tLFz3ka6SYLSu6ghrndLN7DWZO%2FyDr1IMSXz3LsRXAZUKPC7QiE%2FI56%2BBrFvINnHYGwzuwHGvsXXQpDQlGsIdQQEOyxWeHpoq%2FOjIDlULY%2BGrPTdXNwjI8Urodv8vdmRTJzC1ZvYE2HhrXtpa1p%2BnBhPHQFwvjaEKOSLUgBPRb9k0tXbS2GryfjAdn7YeqJkfRbDEALZOe9ySxuy5c1UH%2BBA7gTi4kNv3clKJGUlIoECYwisWesY0EYf8rKUwX5Cmi9viDbYokgn9MokpS0Xg7tevs5Q%2Bw1GnMgN%2Faz2TbopXC9V8%2FvWLGVbyGyKOvDC7%2FPrDBjqkAS97y4bqqdDH6l%2B40k1h8TRyCIyoi%2FUsC%2FjxMPE4ysNm77rvW8QNe2dCq9UFFdO2AE8ycvmf%2FP48f8UQduxwTFjRy%2F7d0M%2FDoqMC2AshbOQ9xug6vSDQB%2FWdf%2FSyWZz1Tbzok3Sh0vQAsZWMiy1NMei2ivYWRb13ZwOoNrY2Tp5Bjsl5owMr3TOHVzLJ9d66SqADDL5uQVSh9lZB%2FIlSIOyp9iZQ&X-Amz-Signature=ab0aeff98e4ccff81e53bfecc5ce7fade0984bc5e411b97c7db80eaf5e1e6db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFVIRG6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVTBjrEpoKX1vX0thz7PeB7Cj9niGYPQzMspy2kfiCwIhAP07c5ztTGB9qJ%2Fp6I6M7tEIhCf9zX7sMrJXAXnO2nfuKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT5yFmgybX4LiUQ%2F8q3AOluuJxdjYecxW8J%2BOMDbfj9M0QdThC6iFuwmYJKQO7%2Bo80kgUNpwTaAUEPkzaKLsudJ4118rL%2F9qkMsljUHsQlsGvZ5Pi%2Bez36LVFsZZYueBlfu%2FZkNkvITFZCmxnE%2BEsvirADgwZA%2F1nu6rkty2%2BE3t173gh2N1%2FVxmjt5Q%2B15byTBpQfbCKnaEfftBgqOxoqM3plmX5jGcDhUVm7CW1ArVCBOdNxZNbaoGXpZrfDriFBscZ2yL4Tvr5bfvgpUTCkmzqR8uPvSVICYg1luwRx%2FCIORy3aPAGU4om3V1oZKfna9u7jD%2F4fht28kV3tLFz3ka6SYLSu6ghrndLN7DWZO%2FyDr1IMSXz3LsRXAZUKPC7QiE%2FI56%2BBrFvINnHYGwzuwHGvsXXQpDQlGsIdQQEOyxWeHpoq%2FOjIDlULY%2BGrPTdXNwjI8Urodv8vdmRTJzC1ZvYE2HhrXtpa1p%2BnBhPHQFwvjaEKOSLUgBPRb9k0tXbS2GryfjAdn7YeqJkfRbDEALZOe9ySxuy5c1UH%2BBA7gTi4kNv3clKJGUlIoECYwisWesY0EYf8rKUwX5Cmi9viDbYokgn9MokpS0Xg7tevs5Q%2Bw1GnMgN%2Faz2TbopXC9V8%2FvWLGVbyGyKOvDC7%2FPrDBjqkAS97y4bqqdDH6l%2B40k1h8TRyCIyoi%2FUsC%2FjxMPE4ysNm77rvW8QNe2dCq9UFFdO2AE8ycvmf%2FP48f8UQduxwTFjRy%2F7d0M%2FDoqMC2AshbOQ9xug6vSDQB%2FWdf%2FSyWZz1Tbzok3Sh0vQAsZWMiy1NMei2ivYWRb13ZwOoNrY2Tp5Bjsl5owMr3TOHVzLJ9d66SqADDL5uQVSh9lZB%2FIlSIOyp9iZQ&X-Amz-Signature=933af7e209ef64b1cd03bb642a65cf4912fe359ecfe5cc485fcdca67deb445e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFVIRG6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVTBjrEpoKX1vX0thz7PeB7Cj9niGYPQzMspy2kfiCwIhAP07c5ztTGB9qJ%2Fp6I6M7tEIhCf9zX7sMrJXAXnO2nfuKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT5yFmgybX4LiUQ%2F8q3AOluuJxdjYecxW8J%2BOMDbfj9M0QdThC6iFuwmYJKQO7%2Bo80kgUNpwTaAUEPkzaKLsudJ4118rL%2F9qkMsljUHsQlsGvZ5Pi%2Bez36LVFsZZYueBlfu%2FZkNkvITFZCmxnE%2BEsvirADgwZA%2F1nu6rkty2%2BE3t173gh2N1%2FVxmjt5Q%2B15byTBpQfbCKnaEfftBgqOxoqM3plmX5jGcDhUVm7CW1ArVCBOdNxZNbaoGXpZrfDriFBscZ2yL4Tvr5bfvgpUTCkmzqR8uPvSVICYg1luwRx%2FCIORy3aPAGU4om3V1oZKfna9u7jD%2F4fht28kV3tLFz3ka6SYLSu6ghrndLN7DWZO%2FyDr1IMSXz3LsRXAZUKPC7QiE%2FI56%2BBrFvINnHYGwzuwHGvsXXQpDQlGsIdQQEOyxWeHpoq%2FOjIDlULY%2BGrPTdXNwjI8Urodv8vdmRTJzC1ZvYE2HhrXtpa1p%2BnBhPHQFwvjaEKOSLUgBPRb9k0tXbS2GryfjAdn7YeqJkfRbDEALZOe9ySxuy5c1UH%2BBA7gTi4kNv3clKJGUlIoECYwisWesY0EYf8rKUwX5Cmi9viDbYokgn9MokpS0Xg7tevs5Q%2Bw1GnMgN%2Faz2TbopXC9V8%2FvWLGVbyGyKOvDC7%2FPrDBjqkAS97y4bqqdDH6l%2B40k1h8TRyCIyoi%2FUsC%2FjxMPE4ysNm77rvW8QNe2dCq9UFFdO2AE8ycvmf%2FP48f8UQduxwTFjRy%2F7d0M%2FDoqMC2AshbOQ9xug6vSDQB%2FWdf%2FSyWZz1Tbzok3Sh0vQAsZWMiy1NMei2ivYWRb13ZwOoNrY2Tp5Bjsl5owMr3TOHVzLJ9d66SqADDL5uQVSh9lZB%2FIlSIOyp9iZQ&X-Amz-Signature=cacf4412bb0b2b92dbd39e61f3248786b62d673280b0b8605473b59de1a891d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFVIRG6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVTBjrEpoKX1vX0thz7PeB7Cj9niGYPQzMspy2kfiCwIhAP07c5ztTGB9qJ%2Fp6I6M7tEIhCf9zX7sMrJXAXnO2nfuKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT5yFmgybX4LiUQ%2F8q3AOluuJxdjYecxW8J%2BOMDbfj9M0QdThC6iFuwmYJKQO7%2Bo80kgUNpwTaAUEPkzaKLsudJ4118rL%2F9qkMsljUHsQlsGvZ5Pi%2Bez36LVFsZZYueBlfu%2FZkNkvITFZCmxnE%2BEsvirADgwZA%2F1nu6rkty2%2BE3t173gh2N1%2FVxmjt5Q%2B15byTBpQfbCKnaEfftBgqOxoqM3plmX5jGcDhUVm7CW1ArVCBOdNxZNbaoGXpZrfDriFBscZ2yL4Tvr5bfvgpUTCkmzqR8uPvSVICYg1luwRx%2FCIORy3aPAGU4om3V1oZKfna9u7jD%2F4fht28kV3tLFz3ka6SYLSu6ghrndLN7DWZO%2FyDr1IMSXz3LsRXAZUKPC7QiE%2FI56%2BBrFvINnHYGwzuwHGvsXXQpDQlGsIdQQEOyxWeHpoq%2FOjIDlULY%2BGrPTdXNwjI8Urodv8vdmRTJzC1ZvYE2HhrXtpa1p%2BnBhPHQFwvjaEKOSLUgBPRb9k0tXbS2GryfjAdn7YeqJkfRbDEALZOe9ySxuy5c1UH%2BBA7gTi4kNv3clKJGUlIoECYwisWesY0EYf8rKUwX5Cmi9viDbYokgn9MokpS0Xg7tevs5Q%2Bw1GnMgN%2Faz2TbopXC9V8%2FvWLGVbyGyKOvDC7%2FPrDBjqkAS97y4bqqdDH6l%2B40k1h8TRyCIyoi%2FUsC%2FjxMPE4ysNm77rvW8QNe2dCq9UFFdO2AE8ycvmf%2FP48f8UQduxwTFjRy%2F7d0M%2FDoqMC2AshbOQ9xug6vSDQB%2FWdf%2FSyWZz1Tbzok3Sh0vQAsZWMiy1NMei2ivYWRb13ZwOoNrY2Tp5Bjsl5owMr3TOHVzLJ9d66SqADDL5uQVSh9lZB%2FIlSIOyp9iZQ&X-Amz-Signature=b0d16e3d57bc83d283e3f6186e144a68dcaa5e7e5cca06a35c3562f499ad7542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFVIRG6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVTBjrEpoKX1vX0thz7PeB7Cj9niGYPQzMspy2kfiCwIhAP07c5ztTGB9qJ%2Fp6I6M7tEIhCf9zX7sMrJXAXnO2nfuKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT5yFmgybX4LiUQ%2F8q3AOluuJxdjYecxW8J%2BOMDbfj9M0QdThC6iFuwmYJKQO7%2Bo80kgUNpwTaAUEPkzaKLsudJ4118rL%2F9qkMsljUHsQlsGvZ5Pi%2Bez36LVFsZZYueBlfu%2FZkNkvITFZCmxnE%2BEsvirADgwZA%2F1nu6rkty2%2BE3t173gh2N1%2FVxmjt5Q%2B15byTBpQfbCKnaEfftBgqOxoqM3plmX5jGcDhUVm7CW1ArVCBOdNxZNbaoGXpZrfDriFBscZ2yL4Tvr5bfvgpUTCkmzqR8uPvSVICYg1luwRx%2FCIORy3aPAGU4om3V1oZKfna9u7jD%2F4fht28kV3tLFz3ka6SYLSu6ghrndLN7DWZO%2FyDr1IMSXz3LsRXAZUKPC7QiE%2FI56%2BBrFvINnHYGwzuwHGvsXXQpDQlGsIdQQEOyxWeHpoq%2FOjIDlULY%2BGrPTdXNwjI8Urodv8vdmRTJzC1ZvYE2HhrXtpa1p%2BnBhPHQFwvjaEKOSLUgBPRb9k0tXbS2GryfjAdn7YeqJkfRbDEALZOe9ySxuy5c1UH%2BBA7gTi4kNv3clKJGUlIoECYwisWesY0EYf8rKUwX5Cmi9viDbYokgn9MokpS0Xg7tevs5Q%2Bw1GnMgN%2Faz2TbopXC9V8%2FvWLGVbyGyKOvDC7%2FPrDBjqkAS97y4bqqdDH6l%2B40k1h8TRyCIyoi%2FUsC%2FjxMPE4ysNm77rvW8QNe2dCq9UFFdO2AE8ycvmf%2FP48f8UQduxwTFjRy%2F7d0M%2FDoqMC2AshbOQ9xug6vSDQB%2FWdf%2FSyWZz1Tbzok3Sh0vQAsZWMiy1NMei2ivYWRb13ZwOoNrY2Tp5Bjsl5owMr3TOHVzLJ9d66SqADDL5uQVSh9lZB%2FIlSIOyp9iZQ&X-Amz-Signature=7b032fe6448f20a7306087f089e6f7dcc25ffabd06b98a4964f95b13a2524713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YOEOP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAWQIx6wW5QiHX2%2FXVvT36dQKn%2BqHuCFW4Dh%2Ba0fy%2FasAiBpgMcyIEGGlsvlT4p43c8Ff%2BtUPz8P6Ta4hSQxz28vySqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrNOwcyIBHfTGjrexKtwDq73oEGAjkrD9JRZaiRdIXRrfE2DlUzZD1cnMlF7DhCGI5yCsaf4g2qvgM316BJg8Xhf%2FIk6QhCqSMp6J8PKAGaRErGjiJxgF85kqMD01X%2FdJJRygM2dJYyQnYEGI0FYwJR%2BkyNtcUhdL307H9g57%2BpA1XTdHEYcbQFvJ469BLdVwIiomXrSBv%2B0EnuuDYFyIlhg3oAPz07x20J6KKCEw6RXvFo1M1Yjzor%2BCi0k%2Fo00w3Z%2BT8TL402r7M6GKx%2F7DBgW2JnUGIP2ZOlPW7tkxLSj3pKvrcb8sAFyW6Ar9Kt2HlJWhvdKwm04CWkD4DGEDkVee8L343pJuhmRfbL9bRHyhJ3E1Dcg1Dz%2FQx0Di7MvwcliK5rs8fi5IrIcgc6QVgGcTt2%2FPbYPASWSoX3CWtbgqvUH3EzwWd8m%2FcuOaW3hRY2Kdi7KEZ%2BzIeMwpiAeekN3gcCPuaA3o9qGcyLmQ3dYVlfkrbVyvHkIL1sICnFqvb6Pkyh2NYReEkLdUzH8SlQ3oJFLXMylYDd%2FGZI504qiWfrxYQjC%2FrUp6nKLerRTpgoTWvMAkyuQx5CSFYeNHTS6HsEY7jwSklwtlh3ej0swQ0Bn%2FpCUKy9FcaJ92fxom79IseFCtdA3ILG8wk76gwAY6pgF%2FgYkbObzQ25B9gKQWbBkDDy5WfQeB73R4RakmVnmY8czvjQGuwQ6jsyfX78gjwBty3gzYRMyOrNzj3BfGN3ycLNnER4N3%2FiCt%2B69aGD6eNt8JgFx5Z7wP4IJjlrU%2BT5YAUT%2Ft5HJ5XtAxWfATeniN2nqDaF7HxnH9AsWms08IdqAQ7q%2FzSGW2hYdrac7fgEMUuq2HnwGV3rM1C%2FVYb%2F9HbcARtVjm&X-Amz-Signature=4aa5ecb7fe97087162d5eafe389d6be4813fc04cf50f171e97516a14b03e4e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YOEOP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAWQIx6wW5QiHX2%2FXVvT36dQKn%2BqHuCFW4Dh%2Ba0fy%2FasAiBpgMcyIEGGlsvlT4p43c8Ff%2BtUPz8P6Ta4hSQxz28vySqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrNOwcyIBHfTGjrexKtwDq73oEGAjkrD9JRZaiRdIXRrfE2DlUzZD1cnMlF7DhCGI5yCsaf4g2qvgM316BJg8Xhf%2FIk6QhCqSMp6J8PKAGaRErGjiJxgF85kqMD01X%2FdJJRygM2dJYyQnYEGI0FYwJR%2BkyNtcUhdL307H9g57%2BpA1XTdHEYcbQFvJ469BLdVwIiomXrSBv%2B0EnuuDYFyIlhg3oAPz07x20J6KKCEw6RXvFo1M1Yjzor%2BCi0k%2Fo00w3Z%2BT8TL402r7M6GKx%2F7DBgW2JnUGIP2ZOlPW7tkxLSj3pKvrcb8sAFyW6Ar9Kt2HlJWhvdKwm04CWkD4DGEDkVee8L343pJuhmRfbL9bRHyhJ3E1Dcg1Dz%2FQx0Di7MvwcliK5rs8fi5IrIcgc6QVgGcTt2%2FPbYPASWSoX3CWtbgqvUH3EzwWd8m%2FcuOaW3hRY2Kdi7KEZ%2BzIeMwpiAeekN3gcCPuaA3o9qGcyLmQ3dYVlfkrbVyvHkIL1sICnFqvb6Pkyh2NYReEkLdUzH8SlQ3oJFLXMylYDd%2FGZI504qiWfrxYQjC%2FrUp6nKLerRTpgoTWvMAkyuQx5CSFYeNHTS6HsEY7jwSklwtlh3ej0swQ0Bn%2FpCUKy9FcaJ92fxom79IseFCtdA3ILG8wk76gwAY6pgF%2FgYkbObzQ25B9gKQWbBkDDy5WfQeB73R4RakmVnmY8czvjQGuwQ6jsyfX78gjwBty3gzYRMyOrNzj3BfGN3ycLNnER4N3%2FiCt%2B69aGD6eNt8JgFx5Z7wP4IJjlrU%2BT5YAUT%2Ft5HJ5XtAxWfATeniN2nqDaF7HxnH9AsWms08IdqAQ7q%2FzSGW2hYdrac7fgEMUuq2HnwGV3rM1C%2FVYb%2F9HbcARtVjm&X-Amz-Signature=21ee7c3b97132562eceb15df7d82d94a764cdfcb63541ce4140036bcfa8964bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YOEOP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAWQIx6wW5QiHX2%2FXVvT36dQKn%2BqHuCFW4Dh%2Ba0fy%2FasAiBpgMcyIEGGlsvlT4p43c8Ff%2BtUPz8P6Ta4hSQxz28vySqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrNOwcyIBHfTGjrexKtwDq73oEGAjkrD9JRZaiRdIXRrfE2DlUzZD1cnMlF7DhCGI5yCsaf4g2qvgM316BJg8Xhf%2FIk6QhCqSMp6J8PKAGaRErGjiJxgF85kqMD01X%2FdJJRygM2dJYyQnYEGI0FYwJR%2BkyNtcUhdL307H9g57%2BpA1XTdHEYcbQFvJ469BLdVwIiomXrSBv%2B0EnuuDYFyIlhg3oAPz07x20J6KKCEw6RXvFo1M1Yjzor%2BCi0k%2Fo00w3Z%2BT8TL402r7M6GKx%2F7DBgW2JnUGIP2ZOlPW7tkxLSj3pKvrcb8sAFyW6Ar9Kt2HlJWhvdKwm04CWkD4DGEDkVee8L343pJuhmRfbL9bRHyhJ3E1Dcg1Dz%2FQx0Di7MvwcliK5rs8fi5IrIcgc6QVgGcTt2%2FPbYPASWSoX3CWtbgqvUH3EzwWd8m%2FcuOaW3hRY2Kdi7KEZ%2BzIeMwpiAeekN3gcCPuaA3o9qGcyLmQ3dYVlfkrbVyvHkIL1sICnFqvb6Pkyh2NYReEkLdUzH8SlQ3oJFLXMylYDd%2FGZI504qiWfrxYQjC%2FrUp6nKLerRTpgoTWvMAkyuQx5CSFYeNHTS6HsEY7jwSklwtlh3ej0swQ0Bn%2FpCUKy9FcaJ92fxom79IseFCtdA3ILG8wk76gwAY6pgF%2FgYkbObzQ25B9gKQWbBkDDy5WfQeB73R4RakmVnmY8czvjQGuwQ6jsyfX78gjwBty3gzYRMyOrNzj3BfGN3ycLNnER4N3%2FiCt%2B69aGD6eNt8JgFx5Z7wP4IJjlrU%2BT5YAUT%2Ft5HJ5XtAxWfATeniN2nqDaF7HxnH9AsWms08IdqAQ7q%2FzSGW2hYdrac7fgEMUuq2HnwGV3rM1C%2FVYb%2F9HbcARtVjm&X-Amz-Signature=87bb32105af9aec80db810e9af7dc46563a81d144c3ddda6f052d8c932a295d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YOEOP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAWQIx6wW5QiHX2%2FXVvT36dQKn%2BqHuCFW4Dh%2Ba0fy%2FasAiBpgMcyIEGGlsvlT4p43c8Ff%2BtUPz8P6Ta4hSQxz28vySqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrNOwcyIBHfTGjrexKtwDq73oEGAjkrD9JRZaiRdIXRrfE2DlUzZD1cnMlF7DhCGI5yCsaf4g2qvgM316BJg8Xhf%2FIk6QhCqSMp6J8PKAGaRErGjiJxgF85kqMD01X%2FdJJRygM2dJYyQnYEGI0FYwJR%2BkyNtcUhdL307H9g57%2BpA1XTdHEYcbQFvJ469BLdVwIiomXrSBv%2B0EnuuDYFyIlhg3oAPz07x20J6KKCEw6RXvFo1M1Yjzor%2BCi0k%2Fo00w3Z%2BT8TL402r7M6GKx%2F7DBgW2JnUGIP2ZOlPW7tkxLSj3pKvrcb8sAFyW6Ar9Kt2HlJWhvdKwm04CWkD4DGEDkVee8L343pJuhmRfbL9bRHyhJ3E1Dcg1Dz%2FQx0Di7MvwcliK5rs8fi5IrIcgc6QVgGcTt2%2FPbYPASWSoX3CWtbgqvUH3EzwWd8m%2FcuOaW3hRY2Kdi7KEZ%2BzIeMwpiAeekN3gcCPuaA3o9qGcyLmQ3dYVlfkrbVyvHkIL1sICnFqvb6Pkyh2NYReEkLdUzH8SlQ3oJFLXMylYDd%2FGZI504qiWfrxYQjC%2FrUp6nKLerRTpgoTWvMAkyuQx5CSFYeNHTS6HsEY7jwSklwtlh3ej0swQ0Bn%2FpCUKy9FcaJ92fxom79IseFCtdA3ILG8wk76gwAY6pgF%2FgYkbObzQ25B9gKQWbBkDDy5WfQeB73R4RakmVnmY8czvjQGuwQ6jsyfX78gjwBty3gzYRMyOrNzj3BfGN3ycLNnER4N3%2FiCt%2B69aGD6eNt8JgFx5Z7wP4IJjlrU%2BT5YAUT%2Ft5HJ5XtAxWfATeniN2nqDaF7HxnH9AsWms08IdqAQ7q%2FzSGW2hYdrac7fgEMUuq2HnwGV3rM1C%2FVYb%2F9HbcARtVjm&X-Amz-Signature=f4485bc9a4970a0cdadde87350512eb070ddecb7cfe4f49afd95403bda25a047&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YOEOP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAWQIx6wW5QiHX2%2FXVvT36dQKn%2BqHuCFW4Dh%2Ba0fy%2FasAiBpgMcyIEGGlsvlT4p43c8Ff%2BtUPz8P6Ta4hSQxz28vySqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrNOwcyIBHfTGjrexKtwDq73oEGAjkrD9JRZaiRdIXRrfE2DlUzZD1cnMlF7DhCGI5yCsaf4g2qvgM316BJg8Xhf%2FIk6QhCqSMp6J8PKAGaRErGjiJxgF85kqMD01X%2FdJJRygM2dJYyQnYEGI0FYwJR%2BkyNtcUhdL307H9g57%2BpA1XTdHEYcbQFvJ469BLdVwIiomXrSBv%2B0EnuuDYFyIlhg3oAPz07x20J6KKCEw6RXvFo1M1Yjzor%2BCi0k%2Fo00w3Z%2BT8TL402r7M6GKx%2F7DBgW2JnUGIP2ZOlPW7tkxLSj3pKvrcb8sAFyW6Ar9Kt2HlJWhvdKwm04CWkD4DGEDkVee8L343pJuhmRfbL9bRHyhJ3E1Dcg1Dz%2FQx0Di7MvwcliK5rs8fi5IrIcgc6QVgGcTt2%2FPbYPASWSoX3CWtbgqvUH3EzwWd8m%2FcuOaW3hRY2Kdi7KEZ%2BzIeMwpiAeekN3gcCPuaA3o9qGcyLmQ3dYVlfkrbVyvHkIL1sICnFqvb6Pkyh2NYReEkLdUzH8SlQ3oJFLXMylYDd%2FGZI504qiWfrxYQjC%2FrUp6nKLerRTpgoTWvMAkyuQx5CSFYeNHTS6HsEY7jwSklwtlh3ej0swQ0Bn%2FpCUKy9FcaJ92fxom79IseFCtdA3ILG8wk76gwAY6pgF%2FgYkbObzQ25B9gKQWbBkDDy5WfQeB73R4RakmVnmY8czvjQGuwQ6jsyfX78gjwBty3gzYRMyOrNzj3BfGN3ycLNnER4N3%2FiCt%2B69aGD6eNt8JgFx5Z7wP4IJjlrU%2BT5YAUT%2Ft5HJ5XtAxWfATeniN2nqDaF7HxnH9AsWms08IdqAQ7q%2FzSGW2hYdrac7fgEMUuq2HnwGV3rM1C%2FVYb%2F9HbcARtVjm&X-Amz-Signature=eb525daecd9daac8ff61190c166f0a097d68535651fad00758e5fcfb39e59adf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YOEOP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAWQIx6wW5QiHX2%2FXVvT36dQKn%2BqHuCFW4Dh%2Ba0fy%2FasAiBpgMcyIEGGlsvlT4p43c8Ff%2BtUPz8P6Ta4hSQxz28vySqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrNOwcyIBHfTGjrexKtwDq73oEGAjkrD9JRZaiRdIXRrfE2DlUzZD1cnMlF7DhCGI5yCsaf4g2qvgM316BJg8Xhf%2FIk6QhCqSMp6J8PKAGaRErGjiJxgF85kqMD01X%2FdJJRygM2dJYyQnYEGI0FYwJR%2BkyNtcUhdL307H9g57%2BpA1XTdHEYcbQFvJ469BLdVwIiomXrSBv%2B0EnuuDYFyIlhg3oAPz07x20J6KKCEw6RXvFo1M1Yjzor%2BCi0k%2Fo00w3Z%2BT8TL402r7M6GKx%2F7DBgW2JnUGIP2ZOlPW7tkxLSj3pKvrcb8sAFyW6Ar9Kt2HlJWhvdKwm04CWkD4DGEDkVee8L343pJuhmRfbL9bRHyhJ3E1Dcg1Dz%2FQx0Di7MvwcliK5rs8fi5IrIcgc6QVgGcTt2%2FPbYPASWSoX3CWtbgqvUH3EzwWd8m%2FcuOaW3hRY2Kdi7KEZ%2BzIeMwpiAeekN3gcCPuaA3o9qGcyLmQ3dYVlfkrbVyvHkIL1sICnFqvb6Pkyh2NYReEkLdUzH8SlQ3oJFLXMylYDd%2FGZI504qiWfrxYQjC%2FrUp6nKLerRTpgoTWvMAkyuQx5CSFYeNHTS6HsEY7jwSklwtlh3ej0swQ0Bn%2FpCUKy9FcaJ92fxom79IseFCtdA3ILG8wk76gwAY6pgF%2FgYkbObzQ25B9gKQWbBkDDy5WfQeB73R4RakmVnmY8czvjQGuwQ6jsyfX78gjwBty3gzYRMyOrNzj3BfGN3ycLNnER4N3%2FiCt%2B69aGD6eNt8JgFx5Z7wP4IJjlrU%2BT5YAUT%2Ft5HJ5XtAxWfATeniN2nqDaF7HxnH9AsWms08IdqAQ7q%2FzSGW2hYdrac7fgEMUuq2HnwGV3rM1C%2FVYb%2F9HbcARtVjm&X-Amz-Signature=1c2417a3ac3bb70f23e9107f608b4f7e97aaa258f5271def8e5a58924e538512&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YOEOP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAWQIx6wW5QiHX2%2FXVvT36dQKn%2BqHuCFW4Dh%2Ba0fy%2FasAiBpgMcyIEGGlsvlT4p43c8Ff%2BtUPz8P6Ta4hSQxz28vySqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrNOwcyIBHfTGjrexKtwDq73oEGAjkrD9JRZaiRdIXRrfE2DlUzZD1cnMlF7DhCGI5yCsaf4g2qvgM316BJg8Xhf%2FIk6QhCqSMp6J8PKAGaRErGjiJxgF85kqMD01X%2FdJJRygM2dJYyQnYEGI0FYwJR%2BkyNtcUhdL307H9g57%2BpA1XTdHEYcbQFvJ469BLdVwIiomXrSBv%2B0EnuuDYFyIlhg3oAPz07x20J6KKCEw6RXvFo1M1Yjzor%2BCi0k%2Fo00w3Z%2BT8TL402r7M6GKx%2F7DBgW2JnUGIP2ZOlPW7tkxLSj3pKvrcb8sAFyW6Ar9Kt2HlJWhvdKwm04CWkD4DGEDkVee8L343pJuhmRfbL9bRHyhJ3E1Dcg1Dz%2FQx0Di7MvwcliK5rs8fi5IrIcgc6QVgGcTt2%2FPbYPASWSoX3CWtbgqvUH3EzwWd8m%2FcuOaW3hRY2Kdi7KEZ%2BzIeMwpiAeekN3gcCPuaA3o9qGcyLmQ3dYVlfkrbVyvHkIL1sICnFqvb6Pkyh2NYReEkLdUzH8SlQ3oJFLXMylYDd%2FGZI504qiWfrxYQjC%2FrUp6nKLerRTpgoTWvMAkyuQx5CSFYeNHTS6HsEY7jwSklwtlh3ej0swQ0Bn%2FpCUKy9FcaJ92fxom79IseFCtdA3ILG8wk76gwAY6pgF%2FgYkbObzQ25B9gKQWbBkDDy5WfQeB73R4RakmVnmY8czvjQGuwQ6jsyfX78gjwBty3gzYRMyOrNzj3BfGN3ycLNnER4N3%2FiCt%2B69aGD6eNt8JgFx5Z7wP4IJjlrU%2BT5YAUT%2Ft5HJ5XtAxWfATeniN2nqDaF7HxnH9AsWms08IdqAQ7q%2FzSGW2hYdrac7fgEMUuq2HnwGV3rM1C%2FVYb%2F9HbcARtVjm&X-Amz-Signature=2fa1941bbbaf1d7a79a70147f9e94023252720c346fd1594f27569694345f2c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5YOEOP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAWQIx6wW5QiHX2%2FXVvT36dQKn%2BqHuCFW4Dh%2Ba0fy%2FasAiBpgMcyIEGGlsvlT4p43c8Ff%2BtUPz8P6Ta4hSQxz28vySqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrNOwcyIBHfTGjrexKtwDq73oEGAjkrD9JRZaiRdIXRrfE2DlUzZD1cnMlF7DhCGI5yCsaf4g2qvgM316BJg8Xhf%2FIk6QhCqSMp6J8PKAGaRErGjiJxgF85kqMD01X%2FdJJRygM2dJYyQnYEGI0FYwJR%2BkyNtcUhdL307H9g57%2BpA1XTdHEYcbQFvJ469BLdVwIiomXrSBv%2B0EnuuDYFyIlhg3oAPz07x20J6KKCEw6RXvFo1M1Yjzor%2BCi0k%2Fo00w3Z%2BT8TL402r7M6GKx%2F7DBgW2JnUGIP2ZOlPW7tkxLSj3pKvrcb8sAFyW6Ar9Kt2HlJWhvdKwm04CWkD4DGEDkVee8L343pJuhmRfbL9bRHyhJ3E1Dcg1Dz%2FQx0Di7MvwcliK5rs8fi5IrIcgc6QVgGcTt2%2FPbYPASWSoX3CWtbgqvUH3EzwWd8m%2FcuOaW3hRY2Kdi7KEZ%2BzIeMwpiAeekN3gcCPuaA3o9qGcyLmQ3dYVlfkrbVyvHkIL1sICnFqvb6Pkyh2NYReEkLdUzH8SlQ3oJFLXMylYDd%2FGZI504qiWfrxYQjC%2FrUp6nKLerRTpgoTWvMAkyuQx5CSFYeNHTS6HsEY7jwSklwtlh3ej0swQ0Bn%2FpCUKy9FcaJ92fxom79IseFCtdA3ILG8wk76gwAY6pgF%2FgYkbObzQ25B9gKQWbBkDDy5WfQeB73R4RakmVnmY8czvjQGuwQ6jsyfX78gjwBty3gzYRMyOrNzj3BfGN3ycLNnER4N3%2FiCt%2B69aGD6eNt8JgFx5Z7wP4IJjlrU%2BT5YAUT%2Ft5HJ5XtAxWfATeniN2nqDaF7HxnH9AsWms08IdqAQ7q%2FzSGW2hYdrac7fgEMUuq2HnwGV3rM1C%2FVYb%2F9HbcARtVjm&X-Amz-Signature=9a37d9f76dad14fbd435608500fafbc47a2a40850a37083648bb5b9dd6e95ece&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

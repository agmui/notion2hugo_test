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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGT3CLOI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6sfh2H9o4fIKXGEvYVGaDbRgtdOVXpK3Rc0rHG7CvdwIgWSbS%2F7vtTwoUqkm%2F99tqm8CnVEyI15X5VEHzAWTHueoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfNL%2FS63svNwLt16yrcA15lZ9BMqfBoLtG6aNZUeqnJx50bo482oJeRYUy7S1fCCv6W9boUfNQCBMqJA9vl8XUxPOz9sRoXTudHdihrchtetxzAYNdPdCsYntzezU2hgKoRbNtI%2Fs1SVpgsapZ6bCp0MXVlCjq7QMF7athF8LjGVQFF70UYh9jAtJSg8yCD3J67eOoZJRzuXtjFTVEFWaMfjiiSmkhWG6EI7z3hSf9aFJdUBGHjoEpP27FshB3Jocd82ZI0mitcLwHu8Fi4S0v0kHykivmghSUPK7zPYHbvJYI7WnrHTUsettw1bPlmiOwD4Kt%2BE%2FpPFBzRkEcXquKzfqd2R7bVG4xfdvCid6S%2BVedH%2FZ4QNhUIDncbdlGzcfe1ZW99XmGw4xKkn398suQAkbnQK0DchVWThqGGAzEEcVXAFFlbu7CjDrMHTXIzf4V3TrVzGXo5eKygFJd%2FSYqiKI8uizEjp5kR98Poole1Q5nIEjQOEnAo1jVQuh%2BZEbDTPZfPnl6Mj5jJsnltOtzKzaW70vBiW8vcLS%2BGOX7TgaBn03TKPg7XSleEtkLv%2FxlDIxepBtjtQQ0p%2BitKTv0U40UiTRGjr4whcvWVnXzcoMTZTpI1n3LWMYcI8CVg6EeqyPPVsYat7%2FanMIX8jMAGOqUBO9zx53oMS1EwrYMY0pZGxnoxkf%2BsiiW0oCh%2FRad230vZlBvcGsRbTDOYp%2BhXOKI2QTMK91SFfDYRV%2F09g3oxt4wFr2MbMQkOR0egcXBCm9dAiFyC7dz4XVPom%2BtBky%2BVUCe6rI5Iu6K22jNwtlAy6mMcmXqQuqC36O21fL6ne0dGn2qLhz%2BIWUPV2D%2FjIKkkxJHunqcoIZPby%2FoSo6Vy4JZQaM0V&X-Amz-Signature=ee1ea1c929ee226ef47b972a6471a4a7126e15e2e06e144aa8beeafa39b32a01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGT3CLOI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6sfh2H9o4fIKXGEvYVGaDbRgtdOVXpK3Rc0rHG7CvdwIgWSbS%2F7vtTwoUqkm%2F99tqm8CnVEyI15X5VEHzAWTHueoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfNL%2FS63svNwLt16yrcA15lZ9BMqfBoLtG6aNZUeqnJx50bo482oJeRYUy7S1fCCv6W9boUfNQCBMqJA9vl8XUxPOz9sRoXTudHdihrchtetxzAYNdPdCsYntzezU2hgKoRbNtI%2Fs1SVpgsapZ6bCp0MXVlCjq7QMF7athF8LjGVQFF70UYh9jAtJSg8yCD3J67eOoZJRzuXtjFTVEFWaMfjiiSmkhWG6EI7z3hSf9aFJdUBGHjoEpP27FshB3Jocd82ZI0mitcLwHu8Fi4S0v0kHykivmghSUPK7zPYHbvJYI7WnrHTUsettw1bPlmiOwD4Kt%2BE%2FpPFBzRkEcXquKzfqd2R7bVG4xfdvCid6S%2BVedH%2FZ4QNhUIDncbdlGzcfe1ZW99XmGw4xKkn398suQAkbnQK0DchVWThqGGAzEEcVXAFFlbu7CjDrMHTXIzf4V3TrVzGXo5eKygFJd%2FSYqiKI8uizEjp5kR98Poole1Q5nIEjQOEnAo1jVQuh%2BZEbDTPZfPnl6Mj5jJsnltOtzKzaW70vBiW8vcLS%2BGOX7TgaBn03TKPg7XSleEtkLv%2FxlDIxepBtjtQQ0p%2BitKTv0U40UiTRGjr4whcvWVnXzcoMTZTpI1n3LWMYcI8CVg6EeqyPPVsYat7%2FanMIX8jMAGOqUBO9zx53oMS1EwrYMY0pZGxnoxkf%2BsiiW0oCh%2FRad230vZlBvcGsRbTDOYp%2BhXOKI2QTMK91SFfDYRV%2F09g3oxt4wFr2MbMQkOR0egcXBCm9dAiFyC7dz4XVPom%2BtBky%2BVUCe6rI5Iu6K22jNwtlAy6mMcmXqQuqC36O21fL6ne0dGn2qLhz%2BIWUPV2D%2FjIKkkxJHunqcoIZPby%2FoSo6Vy4JZQaM0V&X-Amz-Signature=d1ad07343bd67080c9a6551748472a539110c5549dc37ee99b2ae9fac6d739f3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGT3CLOI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6sfh2H9o4fIKXGEvYVGaDbRgtdOVXpK3Rc0rHG7CvdwIgWSbS%2F7vtTwoUqkm%2F99tqm8CnVEyI15X5VEHzAWTHueoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfNL%2FS63svNwLt16yrcA15lZ9BMqfBoLtG6aNZUeqnJx50bo482oJeRYUy7S1fCCv6W9boUfNQCBMqJA9vl8XUxPOz9sRoXTudHdihrchtetxzAYNdPdCsYntzezU2hgKoRbNtI%2Fs1SVpgsapZ6bCp0MXVlCjq7QMF7athF8LjGVQFF70UYh9jAtJSg8yCD3J67eOoZJRzuXtjFTVEFWaMfjiiSmkhWG6EI7z3hSf9aFJdUBGHjoEpP27FshB3Jocd82ZI0mitcLwHu8Fi4S0v0kHykivmghSUPK7zPYHbvJYI7WnrHTUsettw1bPlmiOwD4Kt%2BE%2FpPFBzRkEcXquKzfqd2R7bVG4xfdvCid6S%2BVedH%2FZ4QNhUIDncbdlGzcfe1ZW99XmGw4xKkn398suQAkbnQK0DchVWThqGGAzEEcVXAFFlbu7CjDrMHTXIzf4V3TrVzGXo5eKygFJd%2FSYqiKI8uizEjp5kR98Poole1Q5nIEjQOEnAo1jVQuh%2BZEbDTPZfPnl6Mj5jJsnltOtzKzaW70vBiW8vcLS%2BGOX7TgaBn03TKPg7XSleEtkLv%2FxlDIxepBtjtQQ0p%2BitKTv0U40UiTRGjr4whcvWVnXzcoMTZTpI1n3LWMYcI8CVg6EeqyPPVsYat7%2FanMIX8jMAGOqUBO9zx53oMS1EwrYMY0pZGxnoxkf%2BsiiW0oCh%2FRad230vZlBvcGsRbTDOYp%2BhXOKI2QTMK91SFfDYRV%2F09g3oxt4wFr2MbMQkOR0egcXBCm9dAiFyC7dz4XVPom%2BtBky%2BVUCe6rI5Iu6K22jNwtlAy6mMcmXqQuqC36O21fL6ne0dGn2qLhz%2BIWUPV2D%2FjIKkkxJHunqcoIZPby%2FoSo6Vy4JZQaM0V&X-Amz-Signature=6fc89d24ed714b8d31e930a12d9c8b57f4021217b4eb9c2d4ac6c6e782c27465&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGT3CLOI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6sfh2H9o4fIKXGEvYVGaDbRgtdOVXpK3Rc0rHG7CvdwIgWSbS%2F7vtTwoUqkm%2F99tqm8CnVEyI15X5VEHzAWTHueoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfNL%2FS63svNwLt16yrcA15lZ9BMqfBoLtG6aNZUeqnJx50bo482oJeRYUy7S1fCCv6W9boUfNQCBMqJA9vl8XUxPOz9sRoXTudHdihrchtetxzAYNdPdCsYntzezU2hgKoRbNtI%2Fs1SVpgsapZ6bCp0MXVlCjq7QMF7athF8LjGVQFF70UYh9jAtJSg8yCD3J67eOoZJRzuXtjFTVEFWaMfjiiSmkhWG6EI7z3hSf9aFJdUBGHjoEpP27FshB3Jocd82ZI0mitcLwHu8Fi4S0v0kHykivmghSUPK7zPYHbvJYI7WnrHTUsettw1bPlmiOwD4Kt%2BE%2FpPFBzRkEcXquKzfqd2R7bVG4xfdvCid6S%2BVedH%2FZ4QNhUIDncbdlGzcfe1ZW99XmGw4xKkn398suQAkbnQK0DchVWThqGGAzEEcVXAFFlbu7CjDrMHTXIzf4V3TrVzGXo5eKygFJd%2FSYqiKI8uizEjp5kR98Poole1Q5nIEjQOEnAo1jVQuh%2BZEbDTPZfPnl6Mj5jJsnltOtzKzaW70vBiW8vcLS%2BGOX7TgaBn03TKPg7XSleEtkLv%2FxlDIxepBtjtQQ0p%2BitKTv0U40UiTRGjr4whcvWVnXzcoMTZTpI1n3LWMYcI8CVg6EeqyPPVsYat7%2FanMIX8jMAGOqUBO9zx53oMS1EwrYMY0pZGxnoxkf%2BsiiW0oCh%2FRad230vZlBvcGsRbTDOYp%2BhXOKI2QTMK91SFfDYRV%2F09g3oxt4wFr2MbMQkOR0egcXBCm9dAiFyC7dz4XVPom%2BtBky%2BVUCe6rI5Iu6K22jNwtlAy6mMcmXqQuqC36O21fL6ne0dGn2qLhz%2BIWUPV2D%2FjIKkkxJHunqcoIZPby%2FoSo6Vy4JZQaM0V&X-Amz-Signature=c266697f718db4ce5e129633013475de08b0da85883da5283ba95a3d08066417&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGT3CLOI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6sfh2H9o4fIKXGEvYVGaDbRgtdOVXpK3Rc0rHG7CvdwIgWSbS%2F7vtTwoUqkm%2F99tqm8CnVEyI15X5VEHzAWTHueoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfNL%2FS63svNwLt16yrcA15lZ9BMqfBoLtG6aNZUeqnJx50bo482oJeRYUy7S1fCCv6W9boUfNQCBMqJA9vl8XUxPOz9sRoXTudHdihrchtetxzAYNdPdCsYntzezU2hgKoRbNtI%2Fs1SVpgsapZ6bCp0MXVlCjq7QMF7athF8LjGVQFF70UYh9jAtJSg8yCD3J67eOoZJRzuXtjFTVEFWaMfjiiSmkhWG6EI7z3hSf9aFJdUBGHjoEpP27FshB3Jocd82ZI0mitcLwHu8Fi4S0v0kHykivmghSUPK7zPYHbvJYI7WnrHTUsettw1bPlmiOwD4Kt%2BE%2FpPFBzRkEcXquKzfqd2R7bVG4xfdvCid6S%2BVedH%2FZ4QNhUIDncbdlGzcfe1ZW99XmGw4xKkn398suQAkbnQK0DchVWThqGGAzEEcVXAFFlbu7CjDrMHTXIzf4V3TrVzGXo5eKygFJd%2FSYqiKI8uizEjp5kR98Poole1Q5nIEjQOEnAo1jVQuh%2BZEbDTPZfPnl6Mj5jJsnltOtzKzaW70vBiW8vcLS%2BGOX7TgaBn03TKPg7XSleEtkLv%2FxlDIxepBtjtQQ0p%2BitKTv0U40UiTRGjr4whcvWVnXzcoMTZTpI1n3LWMYcI8CVg6EeqyPPVsYat7%2FanMIX8jMAGOqUBO9zx53oMS1EwrYMY0pZGxnoxkf%2BsiiW0oCh%2FRad230vZlBvcGsRbTDOYp%2BhXOKI2QTMK91SFfDYRV%2F09g3oxt4wFr2MbMQkOR0egcXBCm9dAiFyC7dz4XVPom%2BtBky%2BVUCe6rI5Iu6K22jNwtlAy6mMcmXqQuqC36O21fL6ne0dGn2qLhz%2BIWUPV2D%2FjIKkkxJHunqcoIZPby%2FoSo6Vy4JZQaM0V&X-Amz-Signature=af9c274e78da406d3ff15b44e10a76e9ec6b2ff140e104b3989ac66765adb055&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGT3CLOI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6sfh2H9o4fIKXGEvYVGaDbRgtdOVXpK3Rc0rHG7CvdwIgWSbS%2F7vtTwoUqkm%2F99tqm8CnVEyI15X5VEHzAWTHueoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfNL%2FS63svNwLt16yrcA15lZ9BMqfBoLtG6aNZUeqnJx50bo482oJeRYUy7S1fCCv6W9boUfNQCBMqJA9vl8XUxPOz9sRoXTudHdihrchtetxzAYNdPdCsYntzezU2hgKoRbNtI%2Fs1SVpgsapZ6bCp0MXVlCjq7QMF7athF8LjGVQFF70UYh9jAtJSg8yCD3J67eOoZJRzuXtjFTVEFWaMfjiiSmkhWG6EI7z3hSf9aFJdUBGHjoEpP27FshB3Jocd82ZI0mitcLwHu8Fi4S0v0kHykivmghSUPK7zPYHbvJYI7WnrHTUsettw1bPlmiOwD4Kt%2BE%2FpPFBzRkEcXquKzfqd2R7bVG4xfdvCid6S%2BVedH%2FZ4QNhUIDncbdlGzcfe1ZW99XmGw4xKkn398suQAkbnQK0DchVWThqGGAzEEcVXAFFlbu7CjDrMHTXIzf4V3TrVzGXo5eKygFJd%2FSYqiKI8uizEjp5kR98Poole1Q5nIEjQOEnAo1jVQuh%2BZEbDTPZfPnl6Mj5jJsnltOtzKzaW70vBiW8vcLS%2BGOX7TgaBn03TKPg7XSleEtkLv%2FxlDIxepBtjtQQ0p%2BitKTv0U40UiTRGjr4whcvWVnXzcoMTZTpI1n3LWMYcI8CVg6EeqyPPVsYat7%2FanMIX8jMAGOqUBO9zx53oMS1EwrYMY0pZGxnoxkf%2BsiiW0oCh%2FRad230vZlBvcGsRbTDOYp%2BhXOKI2QTMK91SFfDYRV%2F09g3oxt4wFr2MbMQkOR0egcXBCm9dAiFyC7dz4XVPom%2BtBky%2BVUCe6rI5Iu6K22jNwtlAy6mMcmXqQuqC36O21fL6ne0dGn2qLhz%2BIWUPV2D%2FjIKkkxJHunqcoIZPby%2FoSo6Vy4JZQaM0V&X-Amz-Signature=05c2e65916f5a3480cd03bb8b8f82ea880ad89d5a4c5c1bdcb06880738333da5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGT3CLOI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6sfh2H9o4fIKXGEvYVGaDbRgtdOVXpK3Rc0rHG7CvdwIgWSbS%2F7vtTwoUqkm%2F99tqm8CnVEyI15X5VEHzAWTHueoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfNL%2FS63svNwLt16yrcA15lZ9BMqfBoLtG6aNZUeqnJx50bo482oJeRYUy7S1fCCv6W9boUfNQCBMqJA9vl8XUxPOz9sRoXTudHdihrchtetxzAYNdPdCsYntzezU2hgKoRbNtI%2Fs1SVpgsapZ6bCp0MXVlCjq7QMF7athF8LjGVQFF70UYh9jAtJSg8yCD3J67eOoZJRzuXtjFTVEFWaMfjiiSmkhWG6EI7z3hSf9aFJdUBGHjoEpP27FshB3Jocd82ZI0mitcLwHu8Fi4S0v0kHykivmghSUPK7zPYHbvJYI7WnrHTUsettw1bPlmiOwD4Kt%2BE%2FpPFBzRkEcXquKzfqd2R7bVG4xfdvCid6S%2BVedH%2FZ4QNhUIDncbdlGzcfe1ZW99XmGw4xKkn398suQAkbnQK0DchVWThqGGAzEEcVXAFFlbu7CjDrMHTXIzf4V3TrVzGXo5eKygFJd%2FSYqiKI8uizEjp5kR98Poole1Q5nIEjQOEnAo1jVQuh%2BZEbDTPZfPnl6Mj5jJsnltOtzKzaW70vBiW8vcLS%2BGOX7TgaBn03TKPg7XSleEtkLv%2FxlDIxepBtjtQQ0p%2BitKTv0U40UiTRGjr4whcvWVnXzcoMTZTpI1n3LWMYcI8CVg6EeqyPPVsYat7%2FanMIX8jMAGOqUBO9zx53oMS1EwrYMY0pZGxnoxkf%2BsiiW0oCh%2FRad230vZlBvcGsRbTDOYp%2BhXOKI2QTMK91SFfDYRV%2F09g3oxt4wFr2MbMQkOR0egcXBCm9dAiFyC7dz4XVPom%2BtBky%2BVUCe6rI5Iu6K22jNwtlAy6mMcmXqQuqC36O21fL6ne0dGn2qLhz%2BIWUPV2D%2FjIKkkxJHunqcoIZPby%2FoSo6Vy4JZQaM0V&X-Amz-Signature=62386bd29bbff20010194c6d5f036f8dd97774f5de7b8adbc5671282ba10fae0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGT3CLOI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6sfh2H9o4fIKXGEvYVGaDbRgtdOVXpK3Rc0rHG7CvdwIgWSbS%2F7vtTwoUqkm%2F99tqm8CnVEyI15X5VEHzAWTHueoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfNL%2FS63svNwLt16yrcA15lZ9BMqfBoLtG6aNZUeqnJx50bo482oJeRYUy7S1fCCv6W9boUfNQCBMqJA9vl8XUxPOz9sRoXTudHdihrchtetxzAYNdPdCsYntzezU2hgKoRbNtI%2Fs1SVpgsapZ6bCp0MXVlCjq7QMF7athF8LjGVQFF70UYh9jAtJSg8yCD3J67eOoZJRzuXtjFTVEFWaMfjiiSmkhWG6EI7z3hSf9aFJdUBGHjoEpP27FshB3Jocd82ZI0mitcLwHu8Fi4S0v0kHykivmghSUPK7zPYHbvJYI7WnrHTUsettw1bPlmiOwD4Kt%2BE%2FpPFBzRkEcXquKzfqd2R7bVG4xfdvCid6S%2BVedH%2FZ4QNhUIDncbdlGzcfe1ZW99XmGw4xKkn398suQAkbnQK0DchVWThqGGAzEEcVXAFFlbu7CjDrMHTXIzf4V3TrVzGXo5eKygFJd%2FSYqiKI8uizEjp5kR98Poole1Q5nIEjQOEnAo1jVQuh%2BZEbDTPZfPnl6Mj5jJsnltOtzKzaW70vBiW8vcLS%2BGOX7TgaBn03TKPg7XSleEtkLv%2FxlDIxepBtjtQQ0p%2BitKTv0U40UiTRGjr4whcvWVnXzcoMTZTpI1n3LWMYcI8CVg6EeqyPPVsYat7%2FanMIX8jMAGOqUBO9zx53oMS1EwrYMY0pZGxnoxkf%2BsiiW0oCh%2FRad230vZlBvcGsRbTDOYp%2BhXOKI2QTMK91SFfDYRV%2F09g3oxt4wFr2MbMQkOR0egcXBCm9dAiFyC7dz4XVPom%2BtBky%2BVUCe6rI5Iu6K22jNwtlAy6mMcmXqQuqC36O21fL6ne0dGn2qLhz%2BIWUPV2D%2FjIKkkxJHunqcoIZPby%2FoSo6Vy4JZQaM0V&X-Amz-Signature=ec0c43dcab024d76f189d59dbf304ce7a87ddf3487bdf5b54a2e67373d39de4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

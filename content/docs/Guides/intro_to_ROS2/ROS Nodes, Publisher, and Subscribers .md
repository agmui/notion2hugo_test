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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3DTAFV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC%2BdPT0U8jw7CmlIz673q%2BTM6jx%2BVmuSlmDDfywC%2BUdagIgPivgz35XJDeQKSTBi6WPzOU8c%2FWfPdt1bUVfzUu3VfIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Ijmmct0feth6wnSrcA8Uomz57rObSWvxg39xTOWUZP8Gijn%2FAhwzE43KMiA0jDVgINsQWBiA3pcxBZmXikLE2vXl4jS5DTTDvSZaSvZSXmf9RlmEJPOtWzQP7eEaazM83SxCquQhe5%2FG7spz%2FuTBfnN661orba69mmFHmgAKkldEu3W8aousdWzMP9ruSvFCbfhynIxR5KGzvnIBU%2F9ebFcY7JCRCahUW1fNyQlzSZWNN5kHxxcq3h8NesmOSwzav1BHo%2F4ic3QSbK%2FQ%2FGE1V3XRcH7Es911jgIs4vmkDkz4mXzlO5NxihKgCp5ba%2BmKuyqIYVWmKFdBRlzinQzTOPXxogP2lyHnEISQWWe0Rqhk5yuWnGvh5UzuEVh7Lk4H2v%2F950Y1xihxP4tTOn1Ou1ZknO4r517ljkKzXul%2B9d65RiLe%2Fnh2ul%2FNn3xRhE5JHSB4qIxbz76ghXdO7Xu%2FzLpueUSr9oJWSxHhvEis5ucPdqdzefOT%2F6bj0AkR0HYm4SJ0IBSjQCB65nWcEHbJA1Gsk7MPU0LVE26JR3WNq9FaHtLeZOlGv4TUYZeoiqcaKqxwsbYfFZMMGuBKFT7LOd4FLt%2FltLoATRzaCtyV1Rgl0zl%2FWfrbG%2B0D3WWL4G1%2FiKcmSUBdThgdGMLOhzsAGOqUBNbL%2BpZ1RnYzjIty5gdBkqITYs%2FH0h%2B1JABl8Y8FaloYXrDIXb2ktZWHg%2Fhb6LCwhsOE99KphvNYwA%2Ff86OuSRF3qlLpNIH55mxPvccq4vbzEpeoW0dpMQ75WYhRTX6Ojc%2Ffeeh6IMDunKBrVzLbnpgXrLw%2BQmsnTD%2B3PjnmvZII8tK1xUUcwg6mhN5Whq4oga77fXZ7uD0zyfVmjcWIvOBZAA0Jd&X-Amz-Signature=cdbb599839156e871d582fb1bc35303665f15872216b0c6ba9b6f05665acbdc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3DTAFV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC%2BdPT0U8jw7CmlIz673q%2BTM6jx%2BVmuSlmDDfywC%2BUdagIgPivgz35XJDeQKSTBi6WPzOU8c%2FWfPdt1bUVfzUu3VfIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Ijmmct0feth6wnSrcA8Uomz57rObSWvxg39xTOWUZP8Gijn%2FAhwzE43KMiA0jDVgINsQWBiA3pcxBZmXikLE2vXl4jS5DTTDvSZaSvZSXmf9RlmEJPOtWzQP7eEaazM83SxCquQhe5%2FG7spz%2FuTBfnN661orba69mmFHmgAKkldEu3W8aousdWzMP9ruSvFCbfhynIxR5KGzvnIBU%2F9ebFcY7JCRCahUW1fNyQlzSZWNN5kHxxcq3h8NesmOSwzav1BHo%2F4ic3QSbK%2FQ%2FGE1V3XRcH7Es911jgIs4vmkDkz4mXzlO5NxihKgCp5ba%2BmKuyqIYVWmKFdBRlzinQzTOPXxogP2lyHnEISQWWe0Rqhk5yuWnGvh5UzuEVh7Lk4H2v%2F950Y1xihxP4tTOn1Ou1ZknO4r517ljkKzXul%2B9d65RiLe%2Fnh2ul%2FNn3xRhE5JHSB4qIxbz76ghXdO7Xu%2FzLpueUSr9oJWSxHhvEis5ucPdqdzefOT%2F6bj0AkR0HYm4SJ0IBSjQCB65nWcEHbJA1Gsk7MPU0LVE26JR3WNq9FaHtLeZOlGv4TUYZeoiqcaKqxwsbYfFZMMGuBKFT7LOd4FLt%2FltLoATRzaCtyV1Rgl0zl%2FWfrbG%2B0D3WWL4G1%2FiKcmSUBdThgdGMLOhzsAGOqUBNbL%2BpZ1RnYzjIty5gdBkqITYs%2FH0h%2B1JABl8Y8FaloYXrDIXb2ktZWHg%2Fhb6LCwhsOE99KphvNYwA%2Ff86OuSRF3qlLpNIH55mxPvccq4vbzEpeoW0dpMQ75WYhRTX6Ojc%2Ffeeh6IMDunKBrVzLbnpgXrLw%2BQmsnTD%2B3PjnmvZII8tK1xUUcwg6mhN5Whq4oga77fXZ7uD0zyfVmjcWIvOBZAA0Jd&X-Amz-Signature=dec5fd1011652ea6360b4f347fd2d00f74224ba094763ce871715fe982af22cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3DTAFV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC%2BdPT0U8jw7CmlIz673q%2BTM6jx%2BVmuSlmDDfywC%2BUdagIgPivgz35XJDeQKSTBi6WPzOU8c%2FWfPdt1bUVfzUu3VfIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Ijmmct0feth6wnSrcA8Uomz57rObSWvxg39xTOWUZP8Gijn%2FAhwzE43KMiA0jDVgINsQWBiA3pcxBZmXikLE2vXl4jS5DTTDvSZaSvZSXmf9RlmEJPOtWzQP7eEaazM83SxCquQhe5%2FG7spz%2FuTBfnN661orba69mmFHmgAKkldEu3W8aousdWzMP9ruSvFCbfhynIxR5KGzvnIBU%2F9ebFcY7JCRCahUW1fNyQlzSZWNN5kHxxcq3h8NesmOSwzav1BHo%2F4ic3QSbK%2FQ%2FGE1V3XRcH7Es911jgIs4vmkDkz4mXzlO5NxihKgCp5ba%2BmKuyqIYVWmKFdBRlzinQzTOPXxogP2lyHnEISQWWe0Rqhk5yuWnGvh5UzuEVh7Lk4H2v%2F950Y1xihxP4tTOn1Ou1ZknO4r517ljkKzXul%2B9d65RiLe%2Fnh2ul%2FNn3xRhE5JHSB4qIxbz76ghXdO7Xu%2FzLpueUSr9oJWSxHhvEis5ucPdqdzefOT%2F6bj0AkR0HYm4SJ0IBSjQCB65nWcEHbJA1Gsk7MPU0LVE26JR3WNq9FaHtLeZOlGv4TUYZeoiqcaKqxwsbYfFZMMGuBKFT7LOd4FLt%2FltLoATRzaCtyV1Rgl0zl%2FWfrbG%2B0D3WWL4G1%2FiKcmSUBdThgdGMLOhzsAGOqUBNbL%2BpZ1RnYzjIty5gdBkqITYs%2FH0h%2B1JABl8Y8FaloYXrDIXb2ktZWHg%2Fhb6LCwhsOE99KphvNYwA%2Ff86OuSRF3qlLpNIH55mxPvccq4vbzEpeoW0dpMQ75WYhRTX6Ojc%2Ffeeh6IMDunKBrVzLbnpgXrLw%2BQmsnTD%2B3PjnmvZII8tK1xUUcwg6mhN5Whq4oga77fXZ7uD0zyfVmjcWIvOBZAA0Jd&X-Amz-Signature=3687337d0d56c80470eaa7c5af4be1fcef4df89240c541c1c6868e5c81b7e3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3DTAFV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC%2BdPT0U8jw7CmlIz673q%2BTM6jx%2BVmuSlmDDfywC%2BUdagIgPivgz35XJDeQKSTBi6WPzOU8c%2FWfPdt1bUVfzUu3VfIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Ijmmct0feth6wnSrcA8Uomz57rObSWvxg39xTOWUZP8Gijn%2FAhwzE43KMiA0jDVgINsQWBiA3pcxBZmXikLE2vXl4jS5DTTDvSZaSvZSXmf9RlmEJPOtWzQP7eEaazM83SxCquQhe5%2FG7spz%2FuTBfnN661orba69mmFHmgAKkldEu3W8aousdWzMP9ruSvFCbfhynIxR5KGzvnIBU%2F9ebFcY7JCRCahUW1fNyQlzSZWNN5kHxxcq3h8NesmOSwzav1BHo%2F4ic3QSbK%2FQ%2FGE1V3XRcH7Es911jgIs4vmkDkz4mXzlO5NxihKgCp5ba%2BmKuyqIYVWmKFdBRlzinQzTOPXxogP2lyHnEISQWWe0Rqhk5yuWnGvh5UzuEVh7Lk4H2v%2F950Y1xihxP4tTOn1Ou1ZknO4r517ljkKzXul%2B9d65RiLe%2Fnh2ul%2FNn3xRhE5JHSB4qIxbz76ghXdO7Xu%2FzLpueUSr9oJWSxHhvEis5ucPdqdzefOT%2F6bj0AkR0HYm4SJ0IBSjQCB65nWcEHbJA1Gsk7MPU0LVE26JR3WNq9FaHtLeZOlGv4TUYZeoiqcaKqxwsbYfFZMMGuBKFT7LOd4FLt%2FltLoATRzaCtyV1Rgl0zl%2FWfrbG%2B0D3WWL4G1%2FiKcmSUBdThgdGMLOhzsAGOqUBNbL%2BpZ1RnYzjIty5gdBkqITYs%2FH0h%2B1JABl8Y8FaloYXrDIXb2ktZWHg%2Fhb6LCwhsOE99KphvNYwA%2Ff86OuSRF3qlLpNIH55mxPvccq4vbzEpeoW0dpMQ75WYhRTX6Ojc%2Ffeeh6IMDunKBrVzLbnpgXrLw%2BQmsnTD%2B3PjnmvZII8tK1xUUcwg6mhN5Whq4oga77fXZ7uD0zyfVmjcWIvOBZAA0Jd&X-Amz-Signature=f9b990c22dff35aa2bb46657e545e294b42d6c398376b3c1c321f571d19c391d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3DTAFV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC%2BdPT0U8jw7CmlIz673q%2BTM6jx%2BVmuSlmDDfywC%2BUdagIgPivgz35XJDeQKSTBi6WPzOU8c%2FWfPdt1bUVfzUu3VfIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Ijmmct0feth6wnSrcA8Uomz57rObSWvxg39xTOWUZP8Gijn%2FAhwzE43KMiA0jDVgINsQWBiA3pcxBZmXikLE2vXl4jS5DTTDvSZaSvZSXmf9RlmEJPOtWzQP7eEaazM83SxCquQhe5%2FG7spz%2FuTBfnN661orba69mmFHmgAKkldEu3W8aousdWzMP9ruSvFCbfhynIxR5KGzvnIBU%2F9ebFcY7JCRCahUW1fNyQlzSZWNN5kHxxcq3h8NesmOSwzav1BHo%2F4ic3QSbK%2FQ%2FGE1V3XRcH7Es911jgIs4vmkDkz4mXzlO5NxihKgCp5ba%2BmKuyqIYVWmKFdBRlzinQzTOPXxogP2lyHnEISQWWe0Rqhk5yuWnGvh5UzuEVh7Lk4H2v%2F950Y1xihxP4tTOn1Ou1ZknO4r517ljkKzXul%2B9d65RiLe%2Fnh2ul%2FNn3xRhE5JHSB4qIxbz76ghXdO7Xu%2FzLpueUSr9oJWSxHhvEis5ucPdqdzefOT%2F6bj0AkR0HYm4SJ0IBSjQCB65nWcEHbJA1Gsk7MPU0LVE26JR3WNq9FaHtLeZOlGv4TUYZeoiqcaKqxwsbYfFZMMGuBKFT7LOd4FLt%2FltLoATRzaCtyV1Rgl0zl%2FWfrbG%2B0D3WWL4G1%2FiKcmSUBdThgdGMLOhzsAGOqUBNbL%2BpZ1RnYzjIty5gdBkqITYs%2FH0h%2B1JABl8Y8FaloYXrDIXb2ktZWHg%2Fhb6LCwhsOE99KphvNYwA%2Ff86OuSRF3qlLpNIH55mxPvccq4vbzEpeoW0dpMQ75WYhRTX6Ojc%2Ffeeh6IMDunKBrVzLbnpgXrLw%2BQmsnTD%2B3PjnmvZII8tK1xUUcwg6mhN5Whq4oga77fXZ7uD0zyfVmjcWIvOBZAA0Jd&X-Amz-Signature=25ae2bff17e46388368141ee013f2f5050c6fac2697de1d3a21b9d3e92331a30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3DTAFV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC%2BdPT0U8jw7CmlIz673q%2BTM6jx%2BVmuSlmDDfywC%2BUdagIgPivgz35XJDeQKSTBi6WPzOU8c%2FWfPdt1bUVfzUu3VfIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Ijmmct0feth6wnSrcA8Uomz57rObSWvxg39xTOWUZP8Gijn%2FAhwzE43KMiA0jDVgINsQWBiA3pcxBZmXikLE2vXl4jS5DTTDvSZaSvZSXmf9RlmEJPOtWzQP7eEaazM83SxCquQhe5%2FG7spz%2FuTBfnN661orba69mmFHmgAKkldEu3W8aousdWzMP9ruSvFCbfhynIxR5KGzvnIBU%2F9ebFcY7JCRCahUW1fNyQlzSZWNN5kHxxcq3h8NesmOSwzav1BHo%2F4ic3QSbK%2FQ%2FGE1V3XRcH7Es911jgIs4vmkDkz4mXzlO5NxihKgCp5ba%2BmKuyqIYVWmKFdBRlzinQzTOPXxogP2lyHnEISQWWe0Rqhk5yuWnGvh5UzuEVh7Lk4H2v%2F950Y1xihxP4tTOn1Ou1ZknO4r517ljkKzXul%2B9d65RiLe%2Fnh2ul%2FNn3xRhE5JHSB4qIxbz76ghXdO7Xu%2FzLpueUSr9oJWSxHhvEis5ucPdqdzefOT%2F6bj0AkR0HYm4SJ0IBSjQCB65nWcEHbJA1Gsk7MPU0LVE26JR3WNq9FaHtLeZOlGv4TUYZeoiqcaKqxwsbYfFZMMGuBKFT7LOd4FLt%2FltLoATRzaCtyV1Rgl0zl%2FWfrbG%2B0D3WWL4G1%2FiKcmSUBdThgdGMLOhzsAGOqUBNbL%2BpZ1RnYzjIty5gdBkqITYs%2FH0h%2B1JABl8Y8FaloYXrDIXb2ktZWHg%2Fhb6LCwhsOE99KphvNYwA%2Ff86OuSRF3qlLpNIH55mxPvccq4vbzEpeoW0dpMQ75WYhRTX6Ojc%2Ffeeh6IMDunKBrVzLbnpgXrLw%2BQmsnTD%2B3PjnmvZII8tK1xUUcwg6mhN5Whq4oga77fXZ7uD0zyfVmjcWIvOBZAA0Jd&X-Amz-Signature=4dd01172e99f60bc046849e98bf0eef69e8dbb1af9d9bd2fcef6334276ca1516&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3DTAFV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC%2BdPT0U8jw7CmlIz673q%2BTM6jx%2BVmuSlmDDfywC%2BUdagIgPivgz35XJDeQKSTBi6WPzOU8c%2FWfPdt1bUVfzUu3VfIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Ijmmct0feth6wnSrcA8Uomz57rObSWvxg39xTOWUZP8Gijn%2FAhwzE43KMiA0jDVgINsQWBiA3pcxBZmXikLE2vXl4jS5DTTDvSZaSvZSXmf9RlmEJPOtWzQP7eEaazM83SxCquQhe5%2FG7spz%2FuTBfnN661orba69mmFHmgAKkldEu3W8aousdWzMP9ruSvFCbfhynIxR5KGzvnIBU%2F9ebFcY7JCRCahUW1fNyQlzSZWNN5kHxxcq3h8NesmOSwzav1BHo%2F4ic3QSbK%2FQ%2FGE1V3XRcH7Es911jgIs4vmkDkz4mXzlO5NxihKgCp5ba%2BmKuyqIYVWmKFdBRlzinQzTOPXxogP2lyHnEISQWWe0Rqhk5yuWnGvh5UzuEVh7Lk4H2v%2F950Y1xihxP4tTOn1Ou1ZknO4r517ljkKzXul%2B9d65RiLe%2Fnh2ul%2FNn3xRhE5JHSB4qIxbz76ghXdO7Xu%2FzLpueUSr9oJWSxHhvEis5ucPdqdzefOT%2F6bj0AkR0HYm4SJ0IBSjQCB65nWcEHbJA1Gsk7MPU0LVE26JR3WNq9FaHtLeZOlGv4TUYZeoiqcaKqxwsbYfFZMMGuBKFT7LOd4FLt%2FltLoATRzaCtyV1Rgl0zl%2FWfrbG%2B0D3WWL4G1%2FiKcmSUBdThgdGMLOhzsAGOqUBNbL%2BpZ1RnYzjIty5gdBkqITYs%2FH0h%2B1JABl8Y8FaloYXrDIXb2ktZWHg%2Fhb6LCwhsOE99KphvNYwA%2Ff86OuSRF3qlLpNIH55mxPvccq4vbzEpeoW0dpMQ75WYhRTX6Ojc%2Ffeeh6IMDunKBrVzLbnpgXrLw%2BQmsnTD%2B3PjnmvZII8tK1xUUcwg6mhN5Whq4oga77fXZ7uD0zyfVmjcWIvOBZAA0Jd&X-Amz-Signature=3a98d588e1b395acb33d0be062f49f9c25ced7a2f3d86f64deb00d7235f1d839&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3DTAFV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC%2BdPT0U8jw7CmlIz673q%2BTM6jx%2BVmuSlmDDfywC%2BUdagIgPivgz35XJDeQKSTBi6WPzOU8c%2FWfPdt1bUVfzUu3VfIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Ijmmct0feth6wnSrcA8Uomz57rObSWvxg39xTOWUZP8Gijn%2FAhwzE43KMiA0jDVgINsQWBiA3pcxBZmXikLE2vXl4jS5DTTDvSZaSvZSXmf9RlmEJPOtWzQP7eEaazM83SxCquQhe5%2FG7spz%2FuTBfnN661orba69mmFHmgAKkldEu3W8aousdWzMP9ruSvFCbfhynIxR5KGzvnIBU%2F9ebFcY7JCRCahUW1fNyQlzSZWNN5kHxxcq3h8NesmOSwzav1BHo%2F4ic3QSbK%2FQ%2FGE1V3XRcH7Es911jgIs4vmkDkz4mXzlO5NxihKgCp5ba%2BmKuyqIYVWmKFdBRlzinQzTOPXxogP2lyHnEISQWWe0Rqhk5yuWnGvh5UzuEVh7Lk4H2v%2F950Y1xihxP4tTOn1Ou1ZknO4r517ljkKzXul%2B9d65RiLe%2Fnh2ul%2FNn3xRhE5JHSB4qIxbz76ghXdO7Xu%2FzLpueUSr9oJWSxHhvEis5ucPdqdzefOT%2F6bj0AkR0HYm4SJ0IBSjQCB65nWcEHbJA1Gsk7MPU0LVE26JR3WNq9FaHtLeZOlGv4TUYZeoiqcaKqxwsbYfFZMMGuBKFT7LOd4FLt%2FltLoATRzaCtyV1Rgl0zl%2FWfrbG%2B0D3WWL4G1%2FiKcmSUBdThgdGMLOhzsAGOqUBNbL%2BpZ1RnYzjIty5gdBkqITYs%2FH0h%2B1JABl8Y8FaloYXrDIXb2ktZWHg%2Fhb6LCwhsOE99KphvNYwA%2Ff86OuSRF3qlLpNIH55mxPvccq4vbzEpeoW0dpMQ75WYhRTX6Ojc%2Ffeeh6IMDunKBrVzLbnpgXrLw%2BQmsnTD%2B3PjnmvZII8tK1xUUcwg6mhN5Whq4oga77fXZ7uD0zyfVmjcWIvOBZAA0Jd&X-Amz-Signature=fa13dbd177cb7dfe912ca37e9f0e318decc0f5329f9dac583eaca9a0715fde80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

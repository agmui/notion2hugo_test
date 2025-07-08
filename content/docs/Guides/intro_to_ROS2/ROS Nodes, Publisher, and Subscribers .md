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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2ARHZG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIG3wv%2BFhwha7pLoDxz1%2BfSOYnp%2FaBsg3l2iAXNc1qeOjAiBpK%2BwWkuGXCUUA7ypjWpKuJ%2BvzL8yBVdM7tdIN4mOZaSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RzehL02O1ZvYOz9KtwDKP%2FRHeoFg4YHbp0QhOQd4EE3BwPq6X3tCUGsvt%2BCsz5LVsXg3wmo%2B6B74M6jK1zhOVefzzbrHregejYTfaXpZm6QWySkCX%2FGzCQ%2F2pQWdTll%2BonE0ndxsv%2FNFrYOZiwGX8xXR%2F7E71nT2B53zBGS9RAfoMgh3Wu9LiqB1OWtff5yXIBycVUUU%2B3s81RFr0rRLLwO4i1a%2F3EX3hovhiYZ0AP6pjDLL%2BflxzX%2Bc1S9n%2BghKIykVBIqyiyHVSeF0JV9DMdKo4ut%2FWxX5a%2FlFqxr4BjtD65bthzOstXz%2Fpjet4pO2MjdI%2Fni0XgD%2FDSkTUIDvn5rY9QfHlrz37kZXE0E7ZTQrOoMZ4lNRyard5EfRrhhMAAPq8Fxn5hRJJvAkS4y3BZsX0sE6w571fwCJCVTBkbdOx9KZC9q8Km2Bj590if7hCMnJGcDHhroq3enRn9dTi5oeGQx1WUos49GjHYR7bJZbUU2vjBI33jHE5ingA5ec%2F3fR%2FDz6pdfBrV1qvhhwgqWQtf8BC%2Fo7x7b94qKxjq27Br3uk7vJ96t51ZIPWdPrExTN7dXkgyDYnHMA8%2BwBTQxDf5RCqm1LiA2Z6G3rBQuAa1Lywn0fYq3DaMGG0sZPpWo6vaD%2BxOlCMAwx4OywwY6pgEmoxWu9NqZIaluC6SjgDBIhkxFRMnKJ2wuEDxc%2FM27dh1tpcAT173rKkW8YBIx6QCoj%2Fj0z4OinlbWuma1HVMqYJ2AAB3sokVHvkW42I4Smfoly7CjpuJ%2FaVETR4kJTUwbR93fjGooO%2BZcgsY68DjK21%2FovYVJ3Zqtl%2FudZSwxgIjsrLW9U9nyGLjqoXTskczRRB3VWaYV7jihEKDHQWWiTqw%2FJgQS&X-Amz-Signature=cb8fcabfca72b03f2ac5667413af7c3cd3aa9ad462dff5d12a069db321b81e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2ARHZG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIG3wv%2BFhwha7pLoDxz1%2BfSOYnp%2FaBsg3l2iAXNc1qeOjAiBpK%2BwWkuGXCUUA7ypjWpKuJ%2BvzL8yBVdM7tdIN4mOZaSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RzehL02O1ZvYOz9KtwDKP%2FRHeoFg4YHbp0QhOQd4EE3BwPq6X3tCUGsvt%2BCsz5LVsXg3wmo%2B6B74M6jK1zhOVefzzbrHregejYTfaXpZm6QWySkCX%2FGzCQ%2F2pQWdTll%2BonE0ndxsv%2FNFrYOZiwGX8xXR%2F7E71nT2B53zBGS9RAfoMgh3Wu9LiqB1OWtff5yXIBycVUUU%2B3s81RFr0rRLLwO4i1a%2F3EX3hovhiYZ0AP6pjDLL%2BflxzX%2Bc1S9n%2BghKIykVBIqyiyHVSeF0JV9DMdKo4ut%2FWxX5a%2FlFqxr4BjtD65bthzOstXz%2Fpjet4pO2MjdI%2Fni0XgD%2FDSkTUIDvn5rY9QfHlrz37kZXE0E7ZTQrOoMZ4lNRyard5EfRrhhMAAPq8Fxn5hRJJvAkS4y3BZsX0sE6w571fwCJCVTBkbdOx9KZC9q8Km2Bj590if7hCMnJGcDHhroq3enRn9dTi5oeGQx1WUos49GjHYR7bJZbUU2vjBI33jHE5ingA5ec%2F3fR%2FDz6pdfBrV1qvhhwgqWQtf8BC%2Fo7x7b94qKxjq27Br3uk7vJ96t51ZIPWdPrExTN7dXkgyDYnHMA8%2BwBTQxDf5RCqm1LiA2Z6G3rBQuAa1Lywn0fYq3DaMGG0sZPpWo6vaD%2BxOlCMAwx4OywwY6pgEmoxWu9NqZIaluC6SjgDBIhkxFRMnKJ2wuEDxc%2FM27dh1tpcAT173rKkW8YBIx6QCoj%2Fj0z4OinlbWuma1HVMqYJ2AAB3sokVHvkW42I4Smfoly7CjpuJ%2FaVETR4kJTUwbR93fjGooO%2BZcgsY68DjK21%2FovYVJ3Zqtl%2FudZSwxgIjsrLW9U9nyGLjqoXTskczRRB3VWaYV7jihEKDHQWWiTqw%2FJgQS&X-Amz-Signature=42d110d3c45d6363d6e4e7a4e84cc737b2fb7ffb2e3a326480d95bf1e511c705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2ARHZG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIG3wv%2BFhwha7pLoDxz1%2BfSOYnp%2FaBsg3l2iAXNc1qeOjAiBpK%2BwWkuGXCUUA7ypjWpKuJ%2BvzL8yBVdM7tdIN4mOZaSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RzehL02O1ZvYOz9KtwDKP%2FRHeoFg4YHbp0QhOQd4EE3BwPq6X3tCUGsvt%2BCsz5LVsXg3wmo%2B6B74M6jK1zhOVefzzbrHregejYTfaXpZm6QWySkCX%2FGzCQ%2F2pQWdTll%2BonE0ndxsv%2FNFrYOZiwGX8xXR%2F7E71nT2B53zBGS9RAfoMgh3Wu9LiqB1OWtff5yXIBycVUUU%2B3s81RFr0rRLLwO4i1a%2F3EX3hovhiYZ0AP6pjDLL%2BflxzX%2Bc1S9n%2BghKIykVBIqyiyHVSeF0JV9DMdKo4ut%2FWxX5a%2FlFqxr4BjtD65bthzOstXz%2Fpjet4pO2MjdI%2Fni0XgD%2FDSkTUIDvn5rY9QfHlrz37kZXE0E7ZTQrOoMZ4lNRyard5EfRrhhMAAPq8Fxn5hRJJvAkS4y3BZsX0sE6w571fwCJCVTBkbdOx9KZC9q8Km2Bj590if7hCMnJGcDHhroq3enRn9dTi5oeGQx1WUos49GjHYR7bJZbUU2vjBI33jHE5ingA5ec%2F3fR%2FDz6pdfBrV1qvhhwgqWQtf8BC%2Fo7x7b94qKxjq27Br3uk7vJ96t51ZIPWdPrExTN7dXkgyDYnHMA8%2BwBTQxDf5RCqm1LiA2Z6G3rBQuAa1Lywn0fYq3DaMGG0sZPpWo6vaD%2BxOlCMAwx4OywwY6pgEmoxWu9NqZIaluC6SjgDBIhkxFRMnKJ2wuEDxc%2FM27dh1tpcAT173rKkW8YBIx6QCoj%2Fj0z4OinlbWuma1HVMqYJ2AAB3sokVHvkW42I4Smfoly7CjpuJ%2FaVETR4kJTUwbR93fjGooO%2BZcgsY68DjK21%2FovYVJ3Zqtl%2FudZSwxgIjsrLW9U9nyGLjqoXTskczRRB3VWaYV7jihEKDHQWWiTqw%2FJgQS&X-Amz-Signature=0d2a46ea0e4a46cb3394c924f07379586bc9d1fbc541a96a2561de161681367e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2ARHZG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIG3wv%2BFhwha7pLoDxz1%2BfSOYnp%2FaBsg3l2iAXNc1qeOjAiBpK%2BwWkuGXCUUA7ypjWpKuJ%2BvzL8yBVdM7tdIN4mOZaSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RzehL02O1ZvYOz9KtwDKP%2FRHeoFg4YHbp0QhOQd4EE3BwPq6X3tCUGsvt%2BCsz5LVsXg3wmo%2B6B74M6jK1zhOVefzzbrHregejYTfaXpZm6QWySkCX%2FGzCQ%2F2pQWdTll%2BonE0ndxsv%2FNFrYOZiwGX8xXR%2F7E71nT2B53zBGS9RAfoMgh3Wu9LiqB1OWtff5yXIBycVUUU%2B3s81RFr0rRLLwO4i1a%2F3EX3hovhiYZ0AP6pjDLL%2BflxzX%2Bc1S9n%2BghKIykVBIqyiyHVSeF0JV9DMdKo4ut%2FWxX5a%2FlFqxr4BjtD65bthzOstXz%2Fpjet4pO2MjdI%2Fni0XgD%2FDSkTUIDvn5rY9QfHlrz37kZXE0E7ZTQrOoMZ4lNRyard5EfRrhhMAAPq8Fxn5hRJJvAkS4y3BZsX0sE6w571fwCJCVTBkbdOx9KZC9q8Km2Bj590if7hCMnJGcDHhroq3enRn9dTi5oeGQx1WUos49GjHYR7bJZbUU2vjBI33jHE5ingA5ec%2F3fR%2FDz6pdfBrV1qvhhwgqWQtf8BC%2Fo7x7b94qKxjq27Br3uk7vJ96t51ZIPWdPrExTN7dXkgyDYnHMA8%2BwBTQxDf5RCqm1LiA2Z6G3rBQuAa1Lywn0fYq3DaMGG0sZPpWo6vaD%2BxOlCMAwx4OywwY6pgEmoxWu9NqZIaluC6SjgDBIhkxFRMnKJ2wuEDxc%2FM27dh1tpcAT173rKkW8YBIx6QCoj%2Fj0z4OinlbWuma1HVMqYJ2AAB3sokVHvkW42I4Smfoly7CjpuJ%2FaVETR4kJTUwbR93fjGooO%2BZcgsY68DjK21%2FovYVJ3Zqtl%2FudZSwxgIjsrLW9U9nyGLjqoXTskczRRB3VWaYV7jihEKDHQWWiTqw%2FJgQS&X-Amz-Signature=40e36e0096a18219b9253bad2038c68acb9213d489d225cd042efb0a593646e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2ARHZG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIG3wv%2BFhwha7pLoDxz1%2BfSOYnp%2FaBsg3l2iAXNc1qeOjAiBpK%2BwWkuGXCUUA7ypjWpKuJ%2BvzL8yBVdM7tdIN4mOZaSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RzehL02O1ZvYOz9KtwDKP%2FRHeoFg4YHbp0QhOQd4EE3BwPq6X3tCUGsvt%2BCsz5LVsXg3wmo%2B6B74M6jK1zhOVefzzbrHregejYTfaXpZm6QWySkCX%2FGzCQ%2F2pQWdTll%2BonE0ndxsv%2FNFrYOZiwGX8xXR%2F7E71nT2B53zBGS9RAfoMgh3Wu9LiqB1OWtff5yXIBycVUUU%2B3s81RFr0rRLLwO4i1a%2F3EX3hovhiYZ0AP6pjDLL%2BflxzX%2Bc1S9n%2BghKIykVBIqyiyHVSeF0JV9DMdKo4ut%2FWxX5a%2FlFqxr4BjtD65bthzOstXz%2Fpjet4pO2MjdI%2Fni0XgD%2FDSkTUIDvn5rY9QfHlrz37kZXE0E7ZTQrOoMZ4lNRyard5EfRrhhMAAPq8Fxn5hRJJvAkS4y3BZsX0sE6w571fwCJCVTBkbdOx9KZC9q8Km2Bj590if7hCMnJGcDHhroq3enRn9dTi5oeGQx1WUos49GjHYR7bJZbUU2vjBI33jHE5ingA5ec%2F3fR%2FDz6pdfBrV1qvhhwgqWQtf8BC%2Fo7x7b94qKxjq27Br3uk7vJ96t51ZIPWdPrExTN7dXkgyDYnHMA8%2BwBTQxDf5RCqm1LiA2Z6G3rBQuAa1Lywn0fYq3DaMGG0sZPpWo6vaD%2BxOlCMAwx4OywwY6pgEmoxWu9NqZIaluC6SjgDBIhkxFRMnKJ2wuEDxc%2FM27dh1tpcAT173rKkW8YBIx6QCoj%2Fj0z4OinlbWuma1HVMqYJ2AAB3sokVHvkW42I4Smfoly7CjpuJ%2FaVETR4kJTUwbR93fjGooO%2BZcgsY68DjK21%2FovYVJ3Zqtl%2FudZSwxgIjsrLW9U9nyGLjqoXTskczRRB3VWaYV7jihEKDHQWWiTqw%2FJgQS&X-Amz-Signature=4fc865e39b984d4083444103f385aae5c03246fd6ff5613dec3722adda64716c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2ARHZG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIG3wv%2BFhwha7pLoDxz1%2BfSOYnp%2FaBsg3l2iAXNc1qeOjAiBpK%2BwWkuGXCUUA7ypjWpKuJ%2BvzL8yBVdM7tdIN4mOZaSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RzehL02O1ZvYOz9KtwDKP%2FRHeoFg4YHbp0QhOQd4EE3BwPq6X3tCUGsvt%2BCsz5LVsXg3wmo%2B6B74M6jK1zhOVefzzbrHregejYTfaXpZm6QWySkCX%2FGzCQ%2F2pQWdTll%2BonE0ndxsv%2FNFrYOZiwGX8xXR%2F7E71nT2B53zBGS9RAfoMgh3Wu9LiqB1OWtff5yXIBycVUUU%2B3s81RFr0rRLLwO4i1a%2F3EX3hovhiYZ0AP6pjDLL%2BflxzX%2Bc1S9n%2BghKIykVBIqyiyHVSeF0JV9DMdKo4ut%2FWxX5a%2FlFqxr4BjtD65bthzOstXz%2Fpjet4pO2MjdI%2Fni0XgD%2FDSkTUIDvn5rY9QfHlrz37kZXE0E7ZTQrOoMZ4lNRyard5EfRrhhMAAPq8Fxn5hRJJvAkS4y3BZsX0sE6w571fwCJCVTBkbdOx9KZC9q8Km2Bj590if7hCMnJGcDHhroq3enRn9dTi5oeGQx1WUos49GjHYR7bJZbUU2vjBI33jHE5ingA5ec%2F3fR%2FDz6pdfBrV1qvhhwgqWQtf8BC%2Fo7x7b94qKxjq27Br3uk7vJ96t51ZIPWdPrExTN7dXkgyDYnHMA8%2BwBTQxDf5RCqm1LiA2Z6G3rBQuAa1Lywn0fYq3DaMGG0sZPpWo6vaD%2BxOlCMAwx4OywwY6pgEmoxWu9NqZIaluC6SjgDBIhkxFRMnKJ2wuEDxc%2FM27dh1tpcAT173rKkW8YBIx6QCoj%2Fj0z4OinlbWuma1HVMqYJ2AAB3sokVHvkW42I4Smfoly7CjpuJ%2FaVETR4kJTUwbR93fjGooO%2BZcgsY68DjK21%2FovYVJ3Zqtl%2FudZSwxgIjsrLW9U9nyGLjqoXTskczRRB3VWaYV7jihEKDHQWWiTqw%2FJgQS&X-Amz-Signature=f0ac1b7b5c7cf337ac9bfc2bfd1a51451ba1cffe18ec2bca7b733e3e8b7d2e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2ARHZG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIG3wv%2BFhwha7pLoDxz1%2BfSOYnp%2FaBsg3l2iAXNc1qeOjAiBpK%2BwWkuGXCUUA7ypjWpKuJ%2BvzL8yBVdM7tdIN4mOZaSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RzehL02O1ZvYOz9KtwDKP%2FRHeoFg4YHbp0QhOQd4EE3BwPq6X3tCUGsvt%2BCsz5LVsXg3wmo%2B6B74M6jK1zhOVefzzbrHregejYTfaXpZm6QWySkCX%2FGzCQ%2F2pQWdTll%2BonE0ndxsv%2FNFrYOZiwGX8xXR%2F7E71nT2B53zBGS9RAfoMgh3Wu9LiqB1OWtff5yXIBycVUUU%2B3s81RFr0rRLLwO4i1a%2F3EX3hovhiYZ0AP6pjDLL%2BflxzX%2Bc1S9n%2BghKIykVBIqyiyHVSeF0JV9DMdKo4ut%2FWxX5a%2FlFqxr4BjtD65bthzOstXz%2Fpjet4pO2MjdI%2Fni0XgD%2FDSkTUIDvn5rY9QfHlrz37kZXE0E7ZTQrOoMZ4lNRyard5EfRrhhMAAPq8Fxn5hRJJvAkS4y3BZsX0sE6w571fwCJCVTBkbdOx9KZC9q8Km2Bj590if7hCMnJGcDHhroq3enRn9dTi5oeGQx1WUos49GjHYR7bJZbUU2vjBI33jHE5ingA5ec%2F3fR%2FDz6pdfBrV1qvhhwgqWQtf8BC%2Fo7x7b94qKxjq27Br3uk7vJ96t51ZIPWdPrExTN7dXkgyDYnHMA8%2BwBTQxDf5RCqm1LiA2Z6G3rBQuAa1Lywn0fYq3DaMGG0sZPpWo6vaD%2BxOlCMAwx4OywwY6pgEmoxWu9NqZIaluC6SjgDBIhkxFRMnKJ2wuEDxc%2FM27dh1tpcAT173rKkW8YBIx6QCoj%2Fj0z4OinlbWuma1HVMqYJ2AAB3sokVHvkW42I4Smfoly7CjpuJ%2FaVETR4kJTUwbR93fjGooO%2BZcgsY68DjK21%2FovYVJ3Zqtl%2FudZSwxgIjsrLW9U9nyGLjqoXTskczRRB3VWaYV7jihEKDHQWWiTqw%2FJgQS&X-Amz-Signature=70904187f623501a89bf3b408852ca1004bb54ae77798adf193b0d7ae3d1aeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2ARHZG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIG3wv%2BFhwha7pLoDxz1%2BfSOYnp%2FaBsg3l2iAXNc1qeOjAiBpK%2BwWkuGXCUUA7ypjWpKuJ%2BvzL8yBVdM7tdIN4mOZaSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RzehL02O1ZvYOz9KtwDKP%2FRHeoFg4YHbp0QhOQd4EE3BwPq6X3tCUGsvt%2BCsz5LVsXg3wmo%2B6B74M6jK1zhOVefzzbrHregejYTfaXpZm6QWySkCX%2FGzCQ%2F2pQWdTll%2BonE0ndxsv%2FNFrYOZiwGX8xXR%2F7E71nT2B53zBGS9RAfoMgh3Wu9LiqB1OWtff5yXIBycVUUU%2B3s81RFr0rRLLwO4i1a%2F3EX3hovhiYZ0AP6pjDLL%2BflxzX%2Bc1S9n%2BghKIykVBIqyiyHVSeF0JV9DMdKo4ut%2FWxX5a%2FlFqxr4BjtD65bthzOstXz%2Fpjet4pO2MjdI%2Fni0XgD%2FDSkTUIDvn5rY9QfHlrz37kZXE0E7ZTQrOoMZ4lNRyard5EfRrhhMAAPq8Fxn5hRJJvAkS4y3BZsX0sE6w571fwCJCVTBkbdOx9KZC9q8Km2Bj590if7hCMnJGcDHhroq3enRn9dTi5oeGQx1WUos49GjHYR7bJZbUU2vjBI33jHE5ingA5ec%2F3fR%2FDz6pdfBrV1qvhhwgqWQtf8BC%2Fo7x7b94qKxjq27Br3uk7vJ96t51ZIPWdPrExTN7dXkgyDYnHMA8%2BwBTQxDf5RCqm1LiA2Z6G3rBQuAa1Lywn0fYq3DaMGG0sZPpWo6vaD%2BxOlCMAwx4OywwY6pgEmoxWu9NqZIaluC6SjgDBIhkxFRMnKJ2wuEDxc%2FM27dh1tpcAT173rKkW8YBIx6QCoj%2Fj0z4OinlbWuma1HVMqYJ2AAB3sokVHvkW42I4Smfoly7CjpuJ%2FaVETR4kJTUwbR93fjGooO%2BZcgsY68DjK21%2FovYVJ3Zqtl%2FudZSwxgIjsrLW9U9nyGLjqoXTskczRRB3VWaYV7jihEKDHQWWiTqw%2FJgQS&X-Amz-Signature=e637d241647530f80225e23f2deea22f90ceb3f48b5f3d8e52d6eb134fb73e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

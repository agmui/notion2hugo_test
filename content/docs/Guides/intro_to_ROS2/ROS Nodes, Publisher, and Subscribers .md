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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674I3M3RE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyzQg6tCvAZQggZo7rFyb28zs8r8A%2FXr%2BW%2BOyddl8TGAiA2BngGzVCAPknBc8upwZpsXplLlfn5sEV4ic%2B4nRdv5iqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiRdSXnyHI08F628qKtwDGMqevlHtCispSltJrt%2F0Qz93p0NMl69IrPuM3hXDqCxbFf4RZYAUoASq1lR4tJCsYMvi%2FvF85zaXwPWC3uB8r0CrsGFoPTGi3imdlCbHxoTC5XbL4rsNXGsvXvUi6%2FjJ3xTk6yIQ5AlBdsZpOyXGq7%2BoxThJg%2FNhLwOo7rOOcr0Xz3efZ1I%2FhyRFzmM0dHYgBiNjAEVueWr4rMW5ZQA5oysvHOqOAVQ%2B9eNVLOTZ0TplHd8DQlEywsdDw7O8xyUQ3fi3k4v9UbovZAoKuIKN0kLOr0fJ6vLClbKhWW8A%2FVqkpMSKHp4Ew2hCVxZm1HfhG%2FUkCPbsa%2BV5l1OYkPmF%2B6KUmByJLez2ygIix9ISa5Pk%2F1qiSuQc0J7pniJiFBMMQq%2FsyeytshwwCtJ%2Ff%2BnUFXiSf7jyaYhMPRT55xQXXT8lbWVrOrIuH5nKhkZWB96ruZtsw6RckXGLmTqgfRqjFUchUiqiqz2a%2F3U3%2F9DMTpkznCfYAlLgW%2Be5my9tR%2BosRycs2m%2BMdL15ODQmPF9ZBz%2B9XnMb%2B6BGQbT6Yrwyfc5eDSryVT564yWxPxFy%2FaQl5DH9PmOKS%2Fy9WhvMwBid4MlR3KRXHbNnQTLSqGngYJi%2BavDs%2F68Q8GcaKcIw44epxAY6pgHTa6Xr%2FRa6fkiMNDK9htGVAgoD%2FgQdy9SDkE9D7QDWD9zqIMjsxI9cr62Dmn9KpMReGfUHe0uJEq3Ia3MaQxhBbjCgh4%2BVBFme3NNor%2B1ZNN96PudqDNp5KqtrfyabJaT0RshOqCTfI3W67VwrIogoX0Bg0aJdx0%2BTq7C%2BBD4rFLS1BiGypd84FT8OSz53CoAvxrkHeMgzhbfHGngkC7fj%2B%2FzhemeI&X-Amz-Signature=bbdebbbe7366f003045c03643e1ff57218c85128a4f8a4826cfb0bd27ade0da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674I3M3RE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyzQg6tCvAZQggZo7rFyb28zs8r8A%2FXr%2BW%2BOyddl8TGAiA2BngGzVCAPknBc8upwZpsXplLlfn5sEV4ic%2B4nRdv5iqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiRdSXnyHI08F628qKtwDGMqevlHtCispSltJrt%2F0Qz93p0NMl69IrPuM3hXDqCxbFf4RZYAUoASq1lR4tJCsYMvi%2FvF85zaXwPWC3uB8r0CrsGFoPTGi3imdlCbHxoTC5XbL4rsNXGsvXvUi6%2FjJ3xTk6yIQ5AlBdsZpOyXGq7%2BoxThJg%2FNhLwOo7rOOcr0Xz3efZ1I%2FhyRFzmM0dHYgBiNjAEVueWr4rMW5ZQA5oysvHOqOAVQ%2B9eNVLOTZ0TplHd8DQlEywsdDw7O8xyUQ3fi3k4v9UbovZAoKuIKN0kLOr0fJ6vLClbKhWW8A%2FVqkpMSKHp4Ew2hCVxZm1HfhG%2FUkCPbsa%2BV5l1OYkPmF%2B6KUmByJLez2ygIix9ISa5Pk%2F1qiSuQc0J7pniJiFBMMQq%2FsyeytshwwCtJ%2Ff%2BnUFXiSf7jyaYhMPRT55xQXXT8lbWVrOrIuH5nKhkZWB96ruZtsw6RckXGLmTqgfRqjFUchUiqiqz2a%2F3U3%2F9DMTpkznCfYAlLgW%2Be5my9tR%2BosRycs2m%2BMdL15ODQmPF9ZBz%2B9XnMb%2B6BGQbT6Yrwyfc5eDSryVT564yWxPxFy%2FaQl5DH9PmOKS%2Fy9WhvMwBid4MlR3KRXHbNnQTLSqGngYJi%2BavDs%2F68Q8GcaKcIw44epxAY6pgHTa6Xr%2FRa6fkiMNDK9htGVAgoD%2FgQdy9SDkE9D7QDWD9zqIMjsxI9cr62Dmn9KpMReGfUHe0uJEq3Ia3MaQxhBbjCgh4%2BVBFme3NNor%2B1ZNN96PudqDNp5KqtrfyabJaT0RshOqCTfI3W67VwrIogoX0Bg0aJdx0%2BTq7C%2BBD4rFLS1BiGypd84FT8OSz53CoAvxrkHeMgzhbfHGngkC7fj%2B%2FzhemeI&X-Amz-Signature=61578d2f0e33b4001b275e0b75f0fba754fbb21927e7d0d0e86c725fcc4a63a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674I3M3RE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyzQg6tCvAZQggZo7rFyb28zs8r8A%2FXr%2BW%2BOyddl8TGAiA2BngGzVCAPknBc8upwZpsXplLlfn5sEV4ic%2B4nRdv5iqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiRdSXnyHI08F628qKtwDGMqevlHtCispSltJrt%2F0Qz93p0NMl69IrPuM3hXDqCxbFf4RZYAUoASq1lR4tJCsYMvi%2FvF85zaXwPWC3uB8r0CrsGFoPTGi3imdlCbHxoTC5XbL4rsNXGsvXvUi6%2FjJ3xTk6yIQ5AlBdsZpOyXGq7%2BoxThJg%2FNhLwOo7rOOcr0Xz3efZ1I%2FhyRFzmM0dHYgBiNjAEVueWr4rMW5ZQA5oysvHOqOAVQ%2B9eNVLOTZ0TplHd8DQlEywsdDw7O8xyUQ3fi3k4v9UbovZAoKuIKN0kLOr0fJ6vLClbKhWW8A%2FVqkpMSKHp4Ew2hCVxZm1HfhG%2FUkCPbsa%2BV5l1OYkPmF%2B6KUmByJLez2ygIix9ISa5Pk%2F1qiSuQc0J7pniJiFBMMQq%2FsyeytshwwCtJ%2Ff%2BnUFXiSf7jyaYhMPRT55xQXXT8lbWVrOrIuH5nKhkZWB96ruZtsw6RckXGLmTqgfRqjFUchUiqiqz2a%2F3U3%2F9DMTpkznCfYAlLgW%2Be5my9tR%2BosRycs2m%2BMdL15ODQmPF9ZBz%2B9XnMb%2B6BGQbT6Yrwyfc5eDSryVT564yWxPxFy%2FaQl5DH9PmOKS%2Fy9WhvMwBid4MlR3KRXHbNnQTLSqGngYJi%2BavDs%2F68Q8GcaKcIw44epxAY6pgHTa6Xr%2FRa6fkiMNDK9htGVAgoD%2FgQdy9SDkE9D7QDWD9zqIMjsxI9cr62Dmn9KpMReGfUHe0uJEq3Ia3MaQxhBbjCgh4%2BVBFme3NNor%2B1ZNN96PudqDNp5KqtrfyabJaT0RshOqCTfI3W67VwrIogoX0Bg0aJdx0%2BTq7C%2BBD4rFLS1BiGypd84FT8OSz53CoAvxrkHeMgzhbfHGngkC7fj%2B%2FzhemeI&X-Amz-Signature=fc6d18878b43ff730e2925b1264c1def732f8da2c84826354daabc3588b6f028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674I3M3RE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyzQg6tCvAZQggZo7rFyb28zs8r8A%2FXr%2BW%2BOyddl8TGAiA2BngGzVCAPknBc8upwZpsXplLlfn5sEV4ic%2B4nRdv5iqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiRdSXnyHI08F628qKtwDGMqevlHtCispSltJrt%2F0Qz93p0NMl69IrPuM3hXDqCxbFf4RZYAUoASq1lR4tJCsYMvi%2FvF85zaXwPWC3uB8r0CrsGFoPTGi3imdlCbHxoTC5XbL4rsNXGsvXvUi6%2FjJ3xTk6yIQ5AlBdsZpOyXGq7%2BoxThJg%2FNhLwOo7rOOcr0Xz3efZ1I%2FhyRFzmM0dHYgBiNjAEVueWr4rMW5ZQA5oysvHOqOAVQ%2B9eNVLOTZ0TplHd8DQlEywsdDw7O8xyUQ3fi3k4v9UbovZAoKuIKN0kLOr0fJ6vLClbKhWW8A%2FVqkpMSKHp4Ew2hCVxZm1HfhG%2FUkCPbsa%2BV5l1OYkPmF%2B6KUmByJLez2ygIix9ISa5Pk%2F1qiSuQc0J7pniJiFBMMQq%2FsyeytshwwCtJ%2Ff%2BnUFXiSf7jyaYhMPRT55xQXXT8lbWVrOrIuH5nKhkZWB96ruZtsw6RckXGLmTqgfRqjFUchUiqiqz2a%2F3U3%2F9DMTpkznCfYAlLgW%2Be5my9tR%2BosRycs2m%2BMdL15ODQmPF9ZBz%2B9XnMb%2B6BGQbT6Yrwyfc5eDSryVT564yWxPxFy%2FaQl5DH9PmOKS%2Fy9WhvMwBid4MlR3KRXHbNnQTLSqGngYJi%2BavDs%2F68Q8GcaKcIw44epxAY6pgHTa6Xr%2FRa6fkiMNDK9htGVAgoD%2FgQdy9SDkE9D7QDWD9zqIMjsxI9cr62Dmn9KpMReGfUHe0uJEq3Ia3MaQxhBbjCgh4%2BVBFme3NNor%2B1ZNN96PudqDNp5KqtrfyabJaT0RshOqCTfI3W67VwrIogoX0Bg0aJdx0%2BTq7C%2BBD4rFLS1BiGypd84FT8OSz53CoAvxrkHeMgzhbfHGngkC7fj%2B%2FzhemeI&X-Amz-Signature=f5f4fc4b7523af62c74701125782344b3ffe8fc739064d3f12adf5d9974db3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674I3M3RE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyzQg6tCvAZQggZo7rFyb28zs8r8A%2FXr%2BW%2BOyddl8TGAiA2BngGzVCAPknBc8upwZpsXplLlfn5sEV4ic%2B4nRdv5iqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiRdSXnyHI08F628qKtwDGMqevlHtCispSltJrt%2F0Qz93p0NMl69IrPuM3hXDqCxbFf4RZYAUoASq1lR4tJCsYMvi%2FvF85zaXwPWC3uB8r0CrsGFoPTGi3imdlCbHxoTC5XbL4rsNXGsvXvUi6%2FjJ3xTk6yIQ5AlBdsZpOyXGq7%2BoxThJg%2FNhLwOo7rOOcr0Xz3efZ1I%2FhyRFzmM0dHYgBiNjAEVueWr4rMW5ZQA5oysvHOqOAVQ%2B9eNVLOTZ0TplHd8DQlEywsdDw7O8xyUQ3fi3k4v9UbovZAoKuIKN0kLOr0fJ6vLClbKhWW8A%2FVqkpMSKHp4Ew2hCVxZm1HfhG%2FUkCPbsa%2BV5l1OYkPmF%2B6KUmByJLez2ygIix9ISa5Pk%2F1qiSuQc0J7pniJiFBMMQq%2FsyeytshwwCtJ%2Ff%2BnUFXiSf7jyaYhMPRT55xQXXT8lbWVrOrIuH5nKhkZWB96ruZtsw6RckXGLmTqgfRqjFUchUiqiqz2a%2F3U3%2F9DMTpkznCfYAlLgW%2Be5my9tR%2BosRycs2m%2BMdL15ODQmPF9ZBz%2B9XnMb%2B6BGQbT6Yrwyfc5eDSryVT564yWxPxFy%2FaQl5DH9PmOKS%2Fy9WhvMwBid4MlR3KRXHbNnQTLSqGngYJi%2BavDs%2F68Q8GcaKcIw44epxAY6pgHTa6Xr%2FRa6fkiMNDK9htGVAgoD%2FgQdy9SDkE9D7QDWD9zqIMjsxI9cr62Dmn9KpMReGfUHe0uJEq3Ia3MaQxhBbjCgh4%2BVBFme3NNor%2B1ZNN96PudqDNp5KqtrfyabJaT0RshOqCTfI3W67VwrIogoX0Bg0aJdx0%2BTq7C%2BBD4rFLS1BiGypd84FT8OSz53CoAvxrkHeMgzhbfHGngkC7fj%2B%2FzhemeI&X-Amz-Signature=31dc7a92ba0eafa4f2971034046ac3c1fa284f846e8abfdf6465681a7a40c8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674I3M3RE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyzQg6tCvAZQggZo7rFyb28zs8r8A%2FXr%2BW%2BOyddl8TGAiA2BngGzVCAPknBc8upwZpsXplLlfn5sEV4ic%2B4nRdv5iqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiRdSXnyHI08F628qKtwDGMqevlHtCispSltJrt%2F0Qz93p0NMl69IrPuM3hXDqCxbFf4RZYAUoASq1lR4tJCsYMvi%2FvF85zaXwPWC3uB8r0CrsGFoPTGi3imdlCbHxoTC5XbL4rsNXGsvXvUi6%2FjJ3xTk6yIQ5AlBdsZpOyXGq7%2BoxThJg%2FNhLwOo7rOOcr0Xz3efZ1I%2FhyRFzmM0dHYgBiNjAEVueWr4rMW5ZQA5oysvHOqOAVQ%2B9eNVLOTZ0TplHd8DQlEywsdDw7O8xyUQ3fi3k4v9UbovZAoKuIKN0kLOr0fJ6vLClbKhWW8A%2FVqkpMSKHp4Ew2hCVxZm1HfhG%2FUkCPbsa%2BV5l1OYkPmF%2B6KUmByJLez2ygIix9ISa5Pk%2F1qiSuQc0J7pniJiFBMMQq%2FsyeytshwwCtJ%2Ff%2BnUFXiSf7jyaYhMPRT55xQXXT8lbWVrOrIuH5nKhkZWB96ruZtsw6RckXGLmTqgfRqjFUchUiqiqz2a%2F3U3%2F9DMTpkznCfYAlLgW%2Be5my9tR%2BosRycs2m%2BMdL15ODQmPF9ZBz%2B9XnMb%2B6BGQbT6Yrwyfc5eDSryVT564yWxPxFy%2FaQl5DH9PmOKS%2Fy9WhvMwBid4MlR3KRXHbNnQTLSqGngYJi%2BavDs%2F68Q8GcaKcIw44epxAY6pgHTa6Xr%2FRa6fkiMNDK9htGVAgoD%2FgQdy9SDkE9D7QDWD9zqIMjsxI9cr62Dmn9KpMReGfUHe0uJEq3Ia3MaQxhBbjCgh4%2BVBFme3NNor%2B1ZNN96PudqDNp5KqtrfyabJaT0RshOqCTfI3W67VwrIogoX0Bg0aJdx0%2BTq7C%2BBD4rFLS1BiGypd84FT8OSz53CoAvxrkHeMgzhbfHGngkC7fj%2B%2FzhemeI&X-Amz-Signature=b276fdc90356c71150d9d520c25e53db71135238650882dc870ae201ccdb2e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674I3M3RE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyzQg6tCvAZQggZo7rFyb28zs8r8A%2FXr%2BW%2BOyddl8TGAiA2BngGzVCAPknBc8upwZpsXplLlfn5sEV4ic%2B4nRdv5iqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiRdSXnyHI08F628qKtwDGMqevlHtCispSltJrt%2F0Qz93p0NMl69IrPuM3hXDqCxbFf4RZYAUoASq1lR4tJCsYMvi%2FvF85zaXwPWC3uB8r0CrsGFoPTGi3imdlCbHxoTC5XbL4rsNXGsvXvUi6%2FjJ3xTk6yIQ5AlBdsZpOyXGq7%2BoxThJg%2FNhLwOo7rOOcr0Xz3efZ1I%2FhyRFzmM0dHYgBiNjAEVueWr4rMW5ZQA5oysvHOqOAVQ%2B9eNVLOTZ0TplHd8DQlEywsdDw7O8xyUQ3fi3k4v9UbovZAoKuIKN0kLOr0fJ6vLClbKhWW8A%2FVqkpMSKHp4Ew2hCVxZm1HfhG%2FUkCPbsa%2BV5l1OYkPmF%2B6KUmByJLez2ygIix9ISa5Pk%2F1qiSuQc0J7pniJiFBMMQq%2FsyeytshwwCtJ%2Ff%2BnUFXiSf7jyaYhMPRT55xQXXT8lbWVrOrIuH5nKhkZWB96ruZtsw6RckXGLmTqgfRqjFUchUiqiqz2a%2F3U3%2F9DMTpkznCfYAlLgW%2Be5my9tR%2BosRycs2m%2BMdL15ODQmPF9ZBz%2B9XnMb%2B6BGQbT6Yrwyfc5eDSryVT564yWxPxFy%2FaQl5DH9PmOKS%2Fy9WhvMwBid4MlR3KRXHbNnQTLSqGngYJi%2BavDs%2F68Q8GcaKcIw44epxAY6pgHTa6Xr%2FRa6fkiMNDK9htGVAgoD%2FgQdy9SDkE9D7QDWD9zqIMjsxI9cr62Dmn9KpMReGfUHe0uJEq3Ia3MaQxhBbjCgh4%2BVBFme3NNor%2B1ZNN96PudqDNp5KqtrfyabJaT0RshOqCTfI3W67VwrIogoX0Bg0aJdx0%2BTq7C%2BBD4rFLS1BiGypd84FT8OSz53CoAvxrkHeMgzhbfHGngkC7fj%2B%2FzhemeI&X-Amz-Signature=53225c9a45df721201007f3a5820194fc193f8e46136c2ea043de1c4b5c528d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674I3M3RE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyzQg6tCvAZQggZo7rFyb28zs8r8A%2FXr%2BW%2BOyddl8TGAiA2BngGzVCAPknBc8upwZpsXplLlfn5sEV4ic%2B4nRdv5iqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiRdSXnyHI08F628qKtwDGMqevlHtCispSltJrt%2F0Qz93p0NMl69IrPuM3hXDqCxbFf4RZYAUoASq1lR4tJCsYMvi%2FvF85zaXwPWC3uB8r0CrsGFoPTGi3imdlCbHxoTC5XbL4rsNXGsvXvUi6%2FjJ3xTk6yIQ5AlBdsZpOyXGq7%2BoxThJg%2FNhLwOo7rOOcr0Xz3efZ1I%2FhyRFzmM0dHYgBiNjAEVueWr4rMW5ZQA5oysvHOqOAVQ%2B9eNVLOTZ0TplHd8DQlEywsdDw7O8xyUQ3fi3k4v9UbovZAoKuIKN0kLOr0fJ6vLClbKhWW8A%2FVqkpMSKHp4Ew2hCVxZm1HfhG%2FUkCPbsa%2BV5l1OYkPmF%2B6KUmByJLez2ygIix9ISa5Pk%2F1qiSuQc0J7pniJiFBMMQq%2FsyeytshwwCtJ%2Ff%2BnUFXiSf7jyaYhMPRT55xQXXT8lbWVrOrIuH5nKhkZWB96ruZtsw6RckXGLmTqgfRqjFUchUiqiqz2a%2F3U3%2F9DMTpkznCfYAlLgW%2Be5my9tR%2BosRycs2m%2BMdL15ODQmPF9ZBz%2B9XnMb%2B6BGQbT6Yrwyfc5eDSryVT564yWxPxFy%2FaQl5DH9PmOKS%2Fy9WhvMwBid4MlR3KRXHbNnQTLSqGngYJi%2BavDs%2F68Q8GcaKcIw44epxAY6pgHTa6Xr%2FRa6fkiMNDK9htGVAgoD%2FgQdy9SDkE9D7QDWD9zqIMjsxI9cr62Dmn9KpMReGfUHe0uJEq3Ia3MaQxhBbjCgh4%2BVBFme3NNor%2B1ZNN96PudqDNp5KqtrfyabJaT0RshOqCTfI3W67VwrIogoX0Bg0aJdx0%2BTq7C%2BBD4rFLS1BiGypd84FT8OSz53CoAvxrkHeMgzhbfHGngkC7fj%2B%2FzhemeI&X-Amz-Signature=f887f35f300820f5d9a64608e28badc6f16a5554af8b1aceb8d5fb96eec4b159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

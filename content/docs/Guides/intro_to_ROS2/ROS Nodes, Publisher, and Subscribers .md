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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMO6UDMT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGyEyx1er%2FeAK6JVFmJxCyHg46t3nlbL24P5lIMtzquIAiBfusbjz64RW%2FUs0VynoMcwRC9%2BnnPr%2BNoax7lKy%2BHFcSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVGJjCZ%2BQIgPe4wMKtwDwHr22H7CfdHApzwoLbRmwKD3xv%2BMNrgxW9xaUEfXfWFImEZvjvsVZI72Erxaa5%2BDC8zFHYZeoAedWWCtOHDkXg77qBUFNxQ%2Fdne0Z0qLHsG5xJW9A1milW%2F6%2FeiixGYZLtLt505GDNKV%2FymBs6xVZNQcmASrVqs1Jnnxq%2B8kp1CnJrlw8a07aS5XA6skf2eAph3K%2F5RgSQAjRHz%2BWFh7%2Bih9M970pmAusewDmcMRhFAxGyu6c7HzhD65PHFKaUEOww5o9SvVBMUqCng5Lr8Fre2tHhl1mRZbag97zO33rKetK3KG2OWUsZMaG1mBq8aVGBqct78s5NgjWwnQKBqqghmYufVP8pG1%2FSpjVIoYgiqRPa4HJtQunmNvSgwVLmXojETBG3fWjotyQScviJvJN5K%2FUp84K35o1v0%2FOf12DR2u2%2FxgWk1uvCvM8r6JD7D7liMb8DvkJBPYycXxMmjUtC7h3X9F1im%2FaQeyusMjb9uHj6RJvETtL0TLzfnHtyK5c1uOSTNRIQjK1GUjcWxqVA70hz5l9IGZWNvnoSUUmx94i8yNpZxCRnwFK0d1QqZosyQWhp7SXpc637GyXAI3w2LbiUFBQiCinRXXhvUyHHeg%2FSvKAY%2FmR2hO7SYw8ZnqwwY6pgGhf6qjp4HhLk8lbgl98%2FK%2FPfRA%2FEqFID3l1cSQWMOeWlQgcTXvVA%2FzJB9iX9gsF5VkREgATQ4zVlBdF432UwMLqrRxxdmN1BlUv8iRqRoEwn1ZXd0z%2BgqibkcVPt62xloxkWxe9mLCaOeqNIxxj75H%2B1tQKjVd8T3kcoATov3QtsFg5OLHNbh9KLzuscgCd6f%2FHNbycDU1efOK1gLqV1oISTwJVez5&X-Amz-Signature=3af712182f2c01cede3c0316c937edc173fcc8aba6f9d5f250f7ed9b52548f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMO6UDMT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGyEyx1er%2FeAK6JVFmJxCyHg46t3nlbL24P5lIMtzquIAiBfusbjz64RW%2FUs0VynoMcwRC9%2BnnPr%2BNoax7lKy%2BHFcSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVGJjCZ%2BQIgPe4wMKtwDwHr22H7CfdHApzwoLbRmwKD3xv%2BMNrgxW9xaUEfXfWFImEZvjvsVZI72Erxaa5%2BDC8zFHYZeoAedWWCtOHDkXg77qBUFNxQ%2Fdne0Z0qLHsG5xJW9A1milW%2F6%2FeiixGYZLtLt505GDNKV%2FymBs6xVZNQcmASrVqs1Jnnxq%2B8kp1CnJrlw8a07aS5XA6skf2eAph3K%2F5RgSQAjRHz%2BWFh7%2Bih9M970pmAusewDmcMRhFAxGyu6c7HzhD65PHFKaUEOww5o9SvVBMUqCng5Lr8Fre2tHhl1mRZbag97zO33rKetK3KG2OWUsZMaG1mBq8aVGBqct78s5NgjWwnQKBqqghmYufVP8pG1%2FSpjVIoYgiqRPa4HJtQunmNvSgwVLmXojETBG3fWjotyQScviJvJN5K%2FUp84K35o1v0%2FOf12DR2u2%2FxgWk1uvCvM8r6JD7D7liMb8DvkJBPYycXxMmjUtC7h3X9F1im%2FaQeyusMjb9uHj6RJvETtL0TLzfnHtyK5c1uOSTNRIQjK1GUjcWxqVA70hz5l9IGZWNvnoSUUmx94i8yNpZxCRnwFK0d1QqZosyQWhp7SXpc637GyXAI3w2LbiUFBQiCinRXXhvUyHHeg%2FSvKAY%2FmR2hO7SYw8ZnqwwY6pgGhf6qjp4HhLk8lbgl98%2FK%2FPfRA%2FEqFID3l1cSQWMOeWlQgcTXvVA%2FzJB9iX9gsF5VkREgATQ4zVlBdF432UwMLqrRxxdmN1BlUv8iRqRoEwn1ZXd0z%2BgqibkcVPt62xloxkWxe9mLCaOeqNIxxj75H%2B1tQKjVd8T3kcoATov3QtsFg5OLHNbh9KLzuscgCd6f%2FHNbycDU1efOK1gLqV1oISTwJVez5&X-Amz-Signature=312224b288b9b8d578f41978c1856644f9206db745c8c122bfdc78ad12e29cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMO6UDMT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGyEyx1er%2FeAK6JVFmJxCyHg46t3nlbL24P5lIMtzquIAiBfusbjz64RW%2FUs0VynoMcwRC9%2BnnPr%2BNoax7lKy%2BHFcSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVGJjCZ%2BQIgPe4wMKtwDwHr22H7CfdHApzwoLbRmwKD3xv%2BMNrgxW9xaUEfXfWFImEZvjvsVZI72Erxaa5%2BDC8zFHYZeoAedWWCtOHDkXg77qBUFNxQ%2Fdne0Z0qLHsG5xJW9A1milW%2F6%2FeiixGYZLtLt505GDNKV%2FymBs6xVZNQcmASrVqs1Jnnxq%2B8kp1CnJrlw8a07aS5XA6skf2eAph3K%2F5RgSQAjRHz%2BWFh7%2Bih9M970pmAusewDmcMRhFAxGyu6c7HzhD65PHFKaUEOww5o9SvVBMUqCng5Lr8Fre2tHhl1mRZbag97zO33rKetK3KG2OWUsZMaG1mBq8aVGBqct78s5NgjWwnQKBqqghmYufVP8pG1%2FSpjVIoYgiqRPa4HJtQunmNvSgwVLmXojETBG3fWjotyQScviJvJN5K%2FUp84K35o1v0%2FOf12DR2u2%2FxgWk1uvCvM8r6JD7D7liMb8DvkJBPYycXxMmjUtC7h3X9F1im%2FaQeyusMjb9uHj6RJvETtL0TLzfnHtyK5c1uOSTNRIQjK1GUjcWxqVA70hz5l9IGZWNvnoSUUmx94i8yNpZxCRnwFK0d1QqZosyQWhp7SXpc637GyXAI3w2LbiUFBQiCinRXXhvUyHHeg%2FSvKAY%2FmR2hO7SYw8ZnqwwY6pgGhf6qjp4HhLk8lbgl98%2FK%2FPfRA%2FEqFID3l1cSQWMOeWlQgcTXvVA%2FzJB9iX9gsF5VkREgATQ4zVlBdF432UwMLqrRxxdmN1BlUv8iRqRoEwn1ZXd0z%2BgqibkcVPt62xloxkWxe9mLCaOeqNIxxj75H%2B1tQKjVd8T3kcoATov3QtsFg5OLHNbh9KLzuscgCd6f%2FHNbycDU1efOK1gLqV1oISTwJVez5&X-Amz-Signature=363f99179eb6ae9b50c997e6166ebbfd71743db2d080a530f6a9ba54db6b4fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMO6UDMT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGyEyx1er%2FeAK6JVFmJxCyHg46t3nlbL24P5lIMtzquIAiBfusbjz64RW%2FUs0VynoMcwRC9%2BnnPr%2BNoax7lKy%2BHFcSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVGJjCZ%2BQIgPe4wMKtwDwHr22H7CfdHApzwoLbRmwKD3xv%2BMNrgxW9xaUEfXfWFImEZvjvsVZI72Erxaa5%2BDC8zFHYZeoAedWWCtOHDkXg77qBUFNxQ%2Fdne0Z0qLHsG5xJW9A1milW%2F6%2FeiixGYZLtLt505GDNKV%2FymBs6xVZNQcmASrVqs1Jnnxq%2B8kp1CnJrlw8a07aS5XA6skf2eAph3K%2F5RgSQAjRHz%2BWFh7%2Bih9M970pmAusewDmcMRhFAxGyu6c7HzhD65PHFKaUEOww5o9SvVBMUqCng5Lr8Fre2tHhl1mRZbag97zO33rKetK3KG2OWUsZMaG1mBq8aVGBqct78s5NgjWwnQKBqqghmYufVP8pG1%2FSpjVIoYgiqRPa4HJtQunmNvSgwVLmXojETBG3fWjotyQScviJvJN5K%2FUp84K35o1v0%2FOf12DR2u2%2FxgWk1uvCvM8r6JD7D7liMb8DvkJBPYycXxMmjUtC7h3X9F1im%2FaQeyusMjb9uHj6RJvETtL0TLzfnHtyK5c1uOSTNRIQjK1GUjcWxqVA70hz5l9IGZWNvnoSUUmx94i8yNpZxCRnwFK0d1QqZosyQWhp7SXpc637GyXAI3w2LbiUFBQiCinRXXhvUyHHeg%2FSvKAY%2FmR2hO7SYw8ZnqwwY6pgGhf6qjp4HhLk8lbgl98%2FK%2FPfRA%2FEqFID3l1cSQWMOeWlQgcTXvVA%2FzJB9iX9gsF5VkREgATQ4zVlBdF432UwMLqrRxxdmN1BlUv8iRqRoEwn1ZXd0z%2BgqibkcVPt62xloxkWxe9mLCaOeqNIxxj75H%2B1tQKjVd8T3kcoATov3QtsFg5OLHNbh9KLzuscgCd6f%2FHNbycDU1efOK1gLqV1oISTwJVez5&X-Amz-Signature=dc187ceed504417eadc667049a55ed0df9ac0bc33963f442f3796dd6ec926832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMO6UDMT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGyEyx1er%2FeAK6JVFmJxCyHg46t3nlbL24P5lIMtzquIAiBfusbjz64RW%2FUs0VynoMcwRC9%2BnnPr%2BNoax7lKy%2BHFcSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVGJjCZ%2BQIgPe4wMKtwDwHr22H7CfdHApzwoLbRmwKD3xv%2BMNrgxW9xaUEfXfWFImEZvjvsVZI72Erxaa5%2BDC8zFHYZeoAedWWCtOHDkXg77qBUFNxQ%2Fdne0Z0qLHsG5xJW9A1milW%2F6%2FeiixGYZLtLt505GDNKV%2FymBs6xVZNQcmASrVqs1Jnnxq%2B8kp1CnJrlw8a07aS5XA6skf2eAph3K%2F5RgSQAjRHz%2BWFh7%2Bih9M970pmAusewDmcMRhFAxGyu6c7HzhD65PHFKaUEOww5o9SvVBMUqCng5Lr8Fre2tHhl1mRZbag97zO33rKetK3KG2OWUsZMaG1mBq8aVGBqct78s5NgjWwnQKBqqghmYufVP8pG1%2FSpjVIoYgiqRPa4HJtQunmNvSgwVLmXojETBG3fWjotyQScviJvJN5K%2FUp84K35o1v0%2FOf12DR2u2%2FxgWk1uvCvM8r6JD7D7liMb8DvkJBPYycXxMmjUtC7h3X9F1im%2FaQeyusMjb9uHj6RJvETtL0TLzfnHtyK5c1uOSTNRIQjK1GUjcWxqVA70hz5l9IGZWNvnoSUUmx94i8yNpZxCRnwFK0d1QqZosyQWhp7SXpc637GyXAI3w2LbiUFBQiCinRXXhvUyHHeg%2FSvKAY%2FmR2hO7SYw8ZnqwwY6pgGhf6qjp4HhLk8lbgl98%2FK%2FPfRA%2FEqFID3l1cSQWMOeWlQgcTXvVA%2FzJB9iX9gsF5VkREgATQ4zVlBdF432UwMLqrRxxdmN1BlUv8iRqRoEwn1ZXd0z%2BgqibkcVPt62xloxkWxe9mLCaOeqNIxxj75H%2B1tQKjVd8T3kcoATov3QtsFg5OLHNbh9KLzuscgCd6f%2FHNbycDU1efOK1gLqV1oISTwJVez5&X-Amz-Signature=32d7e00dd836d20098ffa5237e82613f8c1cbe3875439d9e74b2c09628f0adac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMO6UDMT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGyEyx1er%2FeAK6JVFmJxCyHg46t3nlbL24P5lIMtzquIAiBfusbjz64RW%2FUs0VynoMcwRC9%2BnnPr%2BNoax7lKy%2BHFcSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVGJjCZ%2BQIgPe4wMKtwDwHr22H7CfdHApzwoLbRmwKD3xv%2BMNrgxW9xaUEfXfWFImEZvjvsVZI72Erxaa5%2BDC8zFHYZeoAedWWCtOHDkXg77qBUFNxQ%2Fdne0Z0qLHsG5xJW9A1milW%2F6%2FeiixGYZLtLt505GDNKV%2FymBs6xVZNQcmASrVqs1Jnnxq%2B8kp1CnJrlw8a07aS5XA6skf2eAph3K%2F5RgSQAjRHz%2BWFh7%2Bih9M970pmAusewDmcMRhFAxGyu6c7HzhD65PHFKaUEOww5o9SvVBMUqCng5Lr8Fre2tHhl1mRZbag97zO33rKetK3KG2OWUsZMaG1mBq8aVGBqct78s5NgjWwnQKBqqghmYufVP8pG1%2FSpjVIoYgiqRPa4HJtQunmNvSgwVLmXojETBG3fWjotyQScviJvJN5K%2FUp84K35o1v0%2FOf12DR2u2%2FxgWk1uvCvM8r6JD7D7liMb8DvkJBPYycXxMmjUtC7h3X9F1im%2FaQeyusMjb9uHj6RJvETtL0TLzfnHtyK5c1uOSTNRIQjK1GUjcWxqVA70hz5l9IGZWNvnoSUUmx94i8yNpZxCRnwFK0d1QqZosyQWhp7SXpc637GyXAI3w2LbiUFBQiCinRXXhvUyHHeg%2FSvKAY%2FmR2hO7SYw8ZnqwwY6pgGhf6qjp4HhLk8lbgl98%2FK%2FPfRA%2FEqFID3l1cSQWMOeWlQgcTXvVA%2FzJB9iX9gsF5VkREgATQ4zVlBdF432UwMLqrRxxdmN1BlUv8iRqRoEwn1ZXd0z%2BgqibkcVPt62xloxkWxe9mLCaOeqNIxxj75H%2B1tQKjVd8T3kcoATov3QtsFg5OLHNbh9KLzuscgCd6f%2FHNbycDU1efOK1gLqV1oISTwJVez5&X-Amz-Signature=e86cd5679f0de62126e730b73a5cc1d4bfe2989aa1a77149dad591e628c5730d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMO6UDMT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGyEyx1er%2FeAK6JVFmJxCyHg46t3nlbL24P5lIMtzquIAiBfusbjz64RW%2FUs0VynoMcwRC9%2BnnPr%2BNoax7lKy%2BHFcSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVGJjCZ%2BQIgPe4wMKtwDwHr22H7CfdHApzwoLbRmwKD3xv%2BMNrgxW9xaUEfXfWFImEZvjvsVZI72Erxaa5%2BDC8zFHYZeoAedWWCtOHDkXg77qBUFNxQ%2Fdne0Z0qLHsG5xJW9A1milW%2F6%2FeiixGYZLtLt505GDNKV%2FymBs6xVZNQcmASrVqs1Jnnxq%2B8kp1CnJrlw8a07aS5XA6skf2eAph3K%2F5RgSQAjRHz%2BWFh7%2Bih9M970pmAusewDmcMRhFAxGyu6c7HzhD65PHFKaUEOww5o9SvVBMUqCng5Lr8Fre2tHhl1mRZbag97zO33rKetK3KG2OWUsZMaG1mBq8aVGBqct78s5NgjWwnQKBqqghmYufVP8pG1%2FSpjVIoYgiqRPa4HJtQunmNvSgwVLmXojETBG3fWjotyQScviJvJN5K%2FUp84K35o1v0%2FOf12DR2u2%2FxgWk1uvCvM8r6JD7D7liMb8DvkJBPYycXxMmjUtC7h3X9F1im%2FaQeyusMjb9uHj6RJvETtL0TLzfnHtyK5c1uOSTNRIQjK1GUjcWxqVA70hz5l9IGZWNvnoSUUmx94i8yNpZxCRnwFK0d1QqZosyQWhp7SXpc637GyXAI3w2LbiUFBQiCinRXXhvUyHHeg%2FSvKAY%2FmR2hO7SYw8ZnqwwY6pgGhf6qjp4HhLk8lbgl98%2FK%2FPfRA%2FEqFID3l1cSQWMOeWlQgcTXvVA%2FzJB9iX9gsF5VkREgATQ4zVlBdF432UwMLqrRxxdmN1BlUv8iRqRoEwn1ZXd0z%2BgqibkcVPt62xloxkWxe9mLCaOeqNIxxj75H%2B1tQKjVd8T3kcoATov3QtsFg5OLHNbh9KLzuscgCd6f%2FHNbycDU1efOK1gLqV1oISTwJVez5&X-Amz-Signature=df64bb7c15e25cc55b4ca1a82e226c199ded7ea2fab705576428507ce133b299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMO6UDMT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGyEyx1er%2FeAK6JVFmJxCyHg46t3nlbL24P5lIMtzquIAiBfusbjz64RW%2FUs0VynoMcwRC9%2BnnPr%2BNoax7lKy%2BHFcSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAVGJjCZ%2BQIgPe4wMKtwDwHr22H7CfdHApzwoLbRmwKD3xv%2BMNrgxW9xaUEfXfWFImEZvjvsVZI72Erxaa5%2BDC8zFHYZeoAedWWCtOHDkXg77qBUFNxQ%2Fdne0Z0qLHsG5xJW9A1milW%2F6%2FeiixGYZLtLt505GDNKV%2FymBs6xVZNQcmASrVqs1Jnnxq%2B8kp1CnJrlw8a07aS5XA6skf2eAph3K%2F5RgSQAjRHz%2BWFh7%2Bih9M970pmAusewDmcMRhFAxGyu6c7HzhD65PHFKaUEOww5o9SvVBMUqCng5Lr8Fre2tHhl1mRZbag97zO33rKetK3KG2OWUsZMaG1mBq8aVGBqct78s5NgjWwnQKBqqghmYufVP8pG1%2FSpjVIoYgiqRPa4HJtQunmNvSgwVLmXojETBG3fWjotyQScviJvJN5K%2FUp84K35o1v0%2FOf12DR2u2%2FxgWk1uvCvM8r6JD7D7liMb8DvkJBPYycXxMmjUtC7h3X9F1im%2FaQeyusMjb9uHj6RJvETtL0TLzfnHtyK5c1uOSTNRIQjK1GUjcWxqVA70hz5l9IGZWNvnoSUUmx94i8yNpZxCRnwFK0d1QqZosyQWhp7SXpc637GyXAI3w2LbiUFBQiCinRXXhvUyHHeg%2FSvKAY%2FmR2hO7SYw8ZnqwwY6pgGhf6qjp4HhLk8lbgl98%2FK%2FPfRA%2FEqFID3l1cSQWMOeWlQgcTXvVA%2FzJB9iX9gsF5VkREgATQ4zVlBdF432UwMLqrRxxdmN1BlUv8iRqRoEwn1ZXd0z%2BgqibkcVPt62xloxkWxe9mLCaOeqNIxxj75H%2B1tQKjVd8T3kcoATov3QtsFg5OLHNbh9KLzuscgCd6f%2FHNbycDU1efOK1gLqV1oISTwJVez5&X-Amz-Signature=aec44d2640bc064178733576d59b6d345a3703bb75a0bedd98d4c92f86acb394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

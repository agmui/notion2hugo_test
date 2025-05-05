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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPSJAATH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxcpusNI7AHpiPDiAshzoOoKNRzCH%2BAfVWKmcB%2BAQUFAiBl%2F9Wviw5TqINAjdL9m09KXj2ABQcdAFKiVi8InJjjEyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMJHdZryAHWICaJxw8KtwDWtISPZGvgsQElk7abFHrqXSYINSam0oDE8olXNoDdeH7T%2BaN09Y58t4qlFS08Ns4Vu1ZPhz6%2Bh8dS0A8HoeO6c9S7PGG2AQ2kk4%2Bj6WyPT6QZBWeOZVvMwXW5Z2k9ONGfLHSGVhlwLtuNtw9ByAVCoA6WoUWXH%2FVn%2B8uWtnn%2Faqr6zq%2FbDIR0E%2B7bOH3aO9%2FgMV%2BeUrzJHo%2BfNrU%2FZSiEvMaH0k6im01hpO9oLOaI%2Bvtb1kxn706P%2BigS28S4SwiHQQwSw7u%2FvhoP8Js6jnvcKjy2V%2BHvbEFLz%2BSuajWl5aeZcMZo0x7XJip%2FoYeZ7zhy%2B8uNWUJRTYj8RGtIGCxhtt3wvKLOtAIQ9bbUF38vOhxBLbWmh7Vg7GjppPckYfEkzeC3xbfl640ueEj0hxtbfbpKjVAIFE1gNcRmJGDURzlVALaIpztiJ1WolTs0yVoQM5CSZHZWSUTNEzaZNEiIf2dayE9VQCBjaGlEIyhRCLR9pXIkgCSzxTKbjBzwrrcY6bwgol71H1vA0yCC8KfcXmz4sE5v6W4FTZdtd02hZJGN5JMvuVlQCAGga2VayfoXSFt8cdzKBbm1eHHfV2%2FSrpwIaR2DbnhIXdUspDJnBDoOvg159jgEUnGurowgv%2FiwAY6pgG5X4JBbecrxPDNorvPzMy8KD2kTODmjSDoo6aAvaxmaBtIQyK%2BsQO%2FC9CCvALOhTFUJJaPcGWX9XjAO%2FdKzWRj4gLxL0%2FmNfag7hoXUbwnubBlGYe5KgRF6Eb1bpZ9VpxyFe49trrodJec4k%2Fpqs9pQRDVDJy6CHg8omBxDcyd8qFWj9GYaS8FEV%2FpAiYX4quOtqV2%2BmUqcL21%2FxMyW6sdM%2FX8wtao&X-Amz-Signature=9b38f9bc4a9967452123f8000a4f2420a574a135d0217e26bed7e7a63fe43fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPSJAATH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxcpusNI7AHpiPDiAshzoOoKNRzCH%2BAfVWKmcB%2BAQUFAiBl%2F9Wviw5TqINAjdL9m09KXj2ABQcdAFKiVi8InJjjEyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMJHdZryAHWICaJxw8KtwDWtISPZGvgsQElk7abFHrqXSYINSam0oDE8olXNoDdeH7T%2BaN09Y58t4qlFS08Ns4Vu1ZPhz6%2Bh8dS0A8HoeO6c9S7PGG2AQ2kk4%2Bj6WyPT6QZBWeOZVvMwXW5Z2k9ONGfLHSGVhlwLtuNtw9ByAVCoA6WoUWXH%2FVn%2B8uWtnn%2Faqr6zq%2FbDIR0E%2B7bOH3aO9%2FgMV%2BeUrzJHo%2BfNrU%2FZSiEvMaH0k6im01hpO9oLOaI%2Bvtb1kxn706P%2BigS28S4SwiHQQwSw7u%2FvhoP8Js6jnvcKjy2V%2BHvbEFLz%2BSuajWl5aeZcMZo0x7XJip%2FoYeZ7zhy%2B8uNWUJRTYj8RGtIGCxhtt3wvKLOtAIQ9bbUF38vOhxBLbWmh7Vg7GjppPckYfEkzeC3xbfl640ueEj0hxtbfbpKjVAIFE1gNcRmJGDURzlVALaIpztiJ1WolTs0yVoQM5CSZHZWSUTNEzaZNEiIf2dayE9VQCBjaGlEIyhRCLR9pXIkgCSzxTKbjBzwrrcY6bwgol71H1vA0yCC8KfcXmz4sE5v6W4FTZdtd02hZJGN5JMvuVlQCAGga2VayfoXSFt8cdzKBbm1eHHfV2%2FSrpwIaR2DbnhIXdUspDJnBDoOvg159jgEUnGurowgv%2FiwAY6pgG5X4JBbecrxPDNorvPzMy8KD2kTODmjSDoo6aAvaxmaBtIQyK%2BsQO%2FC9CCvALOhTFUJJaPcGWX9XjAO%2FdKzWRj4gLxL0%2FmNfag7hoXUbwnubBlGYe5KgRF6Eb1bpZ9VpxyFe49trrodJec4k%2Fpqs9pQRDVDJy6CHg8omBxDcyd8qFWj9GYaS8FEV%2FpAiYX4quOtqV2%2BmUqcL21%2FxMyW6sdM%2FX8wtao&X-Amz-Signature=d1878d0161b55c8745e77c4666970c244debe9dee142dc1fb3e71dec6315f3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPSJAATH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxcpusNI7AHpiPDiAshzoOoKNRzCH%2BAfVWKmcB%2BAQUFAiBl%2F9Wviw5TqINAjdL9m09KXj2ABQcdAFKiVi8InJjjEyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMJHdZryAHWICaJxw8KtwDWtISPZGvgsQElk7abFHrqXSYINSam0oDE8olXNoDdeH7T%2BaN09Y58t4qlFS08Ns4Vu1ZPhz6%2Bh8dS0A8HoeO6c9S7PGG2AQ2kk4%2Bj6WyPT6QZBWeOZVvMwXW5Z2k9ONGfLHSGVhlwLtuNtw9ByAVCoA6WoUWXH%2FVn%2B8uWtnn%2Faqr6zq%2FbDIR0E%2B7bOH3aO9%2FgMV%2BeUrzJHo%2BfNrU%2FZSiEvMaH0k6im01hpO9oLOaI%2Bvtb1kxn706P%2BigS28S4SwiHQQwSw7u%2FvhoP8Js6jnvcKjy2V%2BHvbEFLz%2BSuajWl5aeZcMZo0x7XJip%2FoYeZ7zhy%2B8uNWUJRTYj8RGtIGCxhtt3wvKLOtAIQ9bbUF38vOhxBLbWmh7Vg7GjppPckYfEkzeC3xbfl640ueEj0hxtbfbpKjVAIFE1gNcRmJGDURzlVALaIpztiJ1WolTs0yVoQM5CSZHZWSUTNEzaZNEiIf2dayE9VQCBjaGlEIyhRCLR9pXIkgCSzxTKbjBzwrrcY6bwgol71H1vA0yCC8KfcXmz4sE5v6W4FTZdtd02hZJGN5JMvuVlQCAGga2VayfoXSFt8cdzKBbm1eHHfV2%2FSrpwIaR2DbnhIXdUspDJnBDoOvg159jgEUnGurowgv%2FiwAY6pgG5X4JBbecrxPDNorvPzMy8KD2kTODmjSDoo6aAvaxmaBtIQyK%2BsQO%2FC9CCvALOhTFUJJaPcGWX9XjAO%2FdKzWRj4gLxL0%2FmNfag7hoXUbwnubBlGYe5KgRF6Eb1bpZ9VpxyFe49trrodJec4k%2Fpqs9pQRDVDJy6CHg8omBxDcyd8qFWj9GYaS8FEV%2FpAiYX4quOtqV2%2BmUqcL21%2FxMyW6sdM%2FX8wtao&X-Amz-Signature=c57a95e3d1a7cec55f9da6f6769941e63531cd000b6002e37aa4383a84f07906&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPSJAATH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxcpusNI7AHpiPDiAshzoOoKNRzCH%2BAfVWKmcB%2BAQUFAiBl%2F9Wviw5TqINAjdL9m09KXj2ABQcdAFKiVi8InJjjEyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMJHdZryAHWICaJxw8KtwDWtISPZGvgsQElk7abFHrqXSYINSam0oDE8olXNoDdeH7T%2BaN09Y58t4qlFS08Ns4Vu1ZPhz6%2Bh8dS0A8HoeO6c9S7PGG2AQ2kk4%2Bj6WyPT6QZBWeOZVvMwXW5Z2k9ONGfLHSGVhlwLtuNtw9ByAVCoA6WoUWXH%2FVn%2B8uWtnn%2Faqr6zq%2FbDIR0E%2B7bOH3aO9%2FgMV%2BeUrzJHo%2BfNrU%2FZSiEvMaH0k6im01hpO9oLOaI%2Bvtb1kxn706P%2BigS28S4SwiHQQwSw7u%2FvhoP8Js6jnvcKjy2V%2BHvbEFLz%2BSuajWl5aeZcMZo0x7XJip%2FoYeZ7zhy%2B8uNWUJRTYj8RGtIGCxhtt3wvKLOtAIQ9bbUF38vOhxBLbWmh7Vg7GjppPckYfEkzeC3xbfl640ueEj0hxtbfbpKjVAIFE1gNcRmJGDURzlVALaIpztiJ1WolTs0yVoQM5CSZHZWSUTNEzaZNEiIf2dayE9VQCBjaGlEIyhRCLR9pXIkgCSzxTKbjBzwrrcY6bwgol71H1vA0yCC8KfcXmz4sE5v6W4FTZdtd02hZJGN5JMvuVlQCAGga2VayfoXSFt8cdzKBbm1eHHfV2%2FSrpwIaR2DbnhIXdUspDJnBDoOvg159jgEUnGurowgv%2FiwAY6pgG5X4JBbecrxPDNorvPzMy8KD2kTODmjSDoo6aAvaxmaBtIQyK%2BsQO%2FC9CCvALOhTFUJJaPcGWX9XjAO%2FdKzWRj4gLxL0%2FmNfag7hoXUbwnubBlGYe5KgRF6Eb1bpZ9VpxyFe49trrodJec4k%2Fpqs9pQRDVDJy6CHg8omBxDcyd8qFWj9GYaS8FEV%2FpAiYX4quOtqV2%2BmUqcL21%2FxMyW6sdM%2FX8wtao&X-Amz-Signature=2e3a0a8e77d1051ec534611a9c6ecb2703c4a67b9cdffe1728d738f04a2e1656&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPSJAATH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxcpusNI7AHpiPDiAshzoOoKNRzCH%2BAfVWKmcB%2BAQUFAiBl%2F9Wviw5TqINAjdL9m09KXj2ABQcdAFKiVi8InJjjEyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMJHdZryAHWICaJxw8KtwDWtISPZGvgsQElk7abFHrqXSYINSam0oDE8olXNoDdeH7T%2BaN09Y58t4qlFS08Ns4Vu1ZPhz6%2Bh8dS0A8HoeO6c9S7PGG2AQ2kk4%2Bj6WyPT6QZBWeOZVvMwXW5Z2k9ONGfLHSGVhlwLtuNtw9ByAVCoA6WoUWXH%2FVn%2B8uWtnn%2Faqr6zq%2FbDIR0E%2B7bOH3aO9%2FgMV%2BeUrzJHo%2BfNrU%2FZSiEvMaH0k6im01hpO9oLOaI%2Bvtb1kxn706P%2BigS28S4SwiHQQwSw7u%2FvhoP8Js6jnvcKjy2V%2BHvbEFLz%2BSuajWl5aeZcMZo0x7XJip%2FoYeZ7zhy%2B8uNWUJRTYj8RGtIGCxhtt3wvKLOtAIQ9bbUF38vOhxBLbWmh7Vg7GjppPckYfEkzeC3xbfl640ueEj0hxtbfbpKjVAIFE1gNcRmJGDURzlVALaIpztiJ1WolTs0yVoQM5CSZHZWSUTNEzaZNEiIf2dayE9VQCBjaGlEIyhRCLR9pXIkgCSzxTKbjBzwrrcY6bwgol71H1vA0yCC8KfcXmz4sE5v6W4FTZdtd02hZJGN5JMvuVlQCAGga2VayfoXSFt8cdzKBbm1eHHfV2%2FSrpwIaR2DbnhIXdUspDJnBDoOvg159jgEUnGurowgv%2FiwAY6pgG5X4JBbecrxPDNorvPzMy8KD2kTODmjSDoo6aAvaxmaBtIQyK%2BsQO%2FC9CCvALOhTFUJJaPcGWX9XjAO%2FdKzWRj4gLxL0%2FmNfag7hoXUbwnubBlGYe5KgRF6Eb1bpZ9VpxyFe49trrodJec4k%2Fpqs9pQRDVDJy6CHg8omBxDcyd8qFWj9GYaS8FEV%2FpAiYX4quOtqV2%2BmUqcL21%2FxMyW6sdM%2FX8wtao&X-Amz-Signature=a17845fbdc48e1d85d6cd343c3c687714e116a8525011790dab92e7b70891930&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPSJAATH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxcpusNI7AHpiPDiAshzoOoKNRzCH%2BAfVWKmcB%2BAQUFAiBl%2F9Wviw5TqINAjdL9m09KXj2ABQcdAFKiVi8InJjjEyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMJHdZryAHWICaJxw8KtwDWtISPZGvgsQElk7abFHrqXSYINSam0oDE8olXNoDdeH7T%2BaN09Y58t4qlFS08Ns4Vu1ZPhz6%2Bh8dS0A8HoeO6c9S7PGG2AQ2kk4%2Bj6WyPT6QZBWeOZVvMwXW5Z2k9ONGfLHSGVhlwLtuNtw9ByAVCoA6WoUWXH%2FVn%2B8uWtnn%2Faqr6zq%2FbDIR0E%2B7bOH3aO9%2FgMV%2BeUrzJHo%2BfNrU%2FZSiEvMaH0k6im01hpO9oLOaI%2Bvtb1kxn706P%2BigS28S4SwiHQQwSw7u%2FvhoP8Js6jnvcKjy2V%2BHvbEFLz%2BSuajWl5aeZcMZo0x7XJip%2FoYeZ7zhy%2B8uNWUJRTYj8RGtIGCxhtt3wvKLOtAIQ9bbUF38vOhxBLbWmh7Vg7GjppPckYfEkzeC3xbfl640ueEj0hxtbfbpKjVAIFE1gNcRmJGDURzlVALaIpztiJ1WolTs0yVoQM5CSZHZWSUTNEzaZNEiIf2dayE9VQCBjaGlEIyhRCLR9pXIkgCSzxTKbjBzwrrcY6bwgol71H1vA0yCC8KfcXmz4sE5v6W4FTZdtd02hZJGN5JMvuVlQCAGga2VayfoXSFt8cdzKBbm1eHHfV2%2FSrpwIaR2DbnhIXdUspDJnBDoOvg159jgEUnGurowgv%2FiwAY6pgG5X4JBbecrxPDNorvPzMy8KD2kTODmjSDoo6aAvaxmaBtIQyK%2BsQO%2FC9CCvALOhTFUJJaPcGWX9XjAO%2FdKzWRj4gLxL0%2FmNfag7hoXUbwnubBlGYe5KgRF6Eb1bpZ9VpxyFe49trrodJec4k%2Fpqs9pQRDVDJy6CHg8omBxDcyd8qFWj9GYaS8FEV%2FpAiYX4quOtqV2%2BmUqcL21%2FxMyW6sdM%2FX8wtao&X-Amz-Signature=f155d96f3e347f1ddfd764b89c7b1e7a6ad5ab3098fe783695b33e1bec0860d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPSJAATH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxcpusNI7AHpiPDiAshzoOoKNRzCH%2BAfVWKmcB%2BAQUFAiBl%2F9Wviw5TqINAjdL9m09KXj2ABQcdAFKiVi8InJjjEyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMJHdZryAHWICaJxw8KtwDWtISPZGvgsQElk7abFHrqXSYINSam0oDE8olXNoDdeH7T%2BaN09Y58t4qlFS08Ns4Vu1ZPhz6%2Bh8dS0A8HoeO6c9S7PGG2AQ2kk4%2Bj6WyPT6QZBWeOZVvMwXW5Z2k9ONGfLHSGVhlwLtuNtw9ByAVCoA6WoUWXH%2FVn%2B8uWtnn%2Faqr6zq%2FbDIR0E%2B7bOH3aO9%2FgMV%2BeUrzJHo%2BfNrU%2FZSiEvMaH0k6im01hpO9oLOaI%2Bvtb1kxn706P%2BigS28S4SwiHQQwSw7u%2FvhoP8Js6jnvcKjy2V%2BHvbEFLz%2BSuajWl5aeZcMZo0x7XJip%2FoYeZ7zhy%2B8uNWUJRTYj8RGtIGCxhtt3wvKLOtAIQ9bbUF38vOhxBLbWmh7Vg7GjppPckYfEkzeC3xbfl640ueEj0hxtbfbpKjVAIFE1gNcRmJGDURzlVALaIpztiJ1WolTs0yVoQM5CSZHZWSUTNEzaZNEiIf2dayE9VQCBjaGlEIyhRCLR9pXIkgCSzxTKbjBzwrrcY6bwgol71H1vA0yCC8KfcXmz4sE5v6W4FTZdtd02hZJGN5JMvuVlQCAGga2VayfoXSFt8cdzKBbm1eHHfV2%2FSrpwIaR2DbnhIXdUspDJnBDoOvg159jgEUnGurowgv%2FiwAY6pgG5X4JBbecrxPDNorvPzMy8KD2kTODmjSDoo6aAvaxmaBtIQyK%2BsQO%2FC9CCvALOhTFUJJaPcGWX9XjAO%2FdKzWRj4gLxL0%2FmNfag7hoXUbwnubBlGYe5KgRF6Eb1bpZ9VpxyFe49trrodJec4k%2Fpqs9pQRDVDJy6CHg8omBxDcyd8qFWj9GYaS8FEV%2FpAiYX4quOtqV2%2BmUqcL21%2FxMyW6sdM%2FX8wtao&X-Amz-Signature=064fc569ac72836d1857c032caca6d1421d9b94a87b1833c0a15c5aa10a32ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPSJAATH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxcpusNI7AHpiPDiAshzoOoKNRzCH%2BAfVWKmcB%2BAQUFAiBl%2F9Wviw5TqINAjdL9m09KXj2ABQcdAFKiVi8InJjjEyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMJHdZryAHWICaJxw8KtwDWtISPZGvgsQElk7abFHrqXSYINSam0oDE8olXNoDdeH7T%2BaN09Y58t4qlFS08Ns4Vu1ZPhz6%2Bh8dS0A8HoeO6c9S7PGG2AQ2kk4%2Bj6WyPT6QZBWeOZVvMwXW5Z2k9ONGfLHSGVhlwLtuNtw9ByAVCoA6WoUWXH%2FVn%2B8uWtnn%2Faqr6zq%2FbDIR0E%2B7bOH3aO9%2FgMV%2BeUrzJHo%2BfNrU%2FZSiEvMaH0k6im01hpO9oLOaI%2Bvtb1kxn706P%2BigS28S4SwiHQQwSw7u%2FvhoP8Js6jnvcKjy2V%2BHvbEFLz%2BSuajWl5aeZcMZo0x7XJip%2FoYeZ7zhy%2B8uNWUJRTYj8RGtIGCxhtt3wvKLOtAIQ9bbUF38vOhxBLbWmh7Vg7GjppPckYfEkzeC3xbfl640ueEj0hxtbfbpKjVAIFE1gNcRmJGDURzlVALaIpztiJ1WolTs0yVoQM5CSZHZWSUTNEzaZNEiIf2dayE9VQCBjaGlEIyhRCLR9pXIkgCSzxTKbjBzwrrcY6bwgol71H1vA0yCC8KfcXmz4sE5v6W4FTZdtd02hZJGN5JMvuVlQCAGga2VayfoXSFt8cdzKBbm1eHHfV2%2FSrpwIaR2DbnhIXdUspDJnBDoOvg159jgEUnGurowgv%2FiwAY6pgG5X4JBbecrxPDNorvPzMy8KD2kTODmjSDoo6aAvaxmaBtIQyK%2BsQO%2FC9CCvALOhTFUJJaPcGWX9XjAO%2FdKzWRj4gLxL0%2FmNfag7hoXUbwnubBlGYe5KgRF6Eb1bpZ9VpxyFe49trrodJec4k%2Fpqs9pQRDVDJy6CHg8omBxDcyd8qFWj9GYaS8FEV%2FpAiYX4quOtqV2%2BmUqcL21%2FxMyW6sdM%2FX8wtao&X-Amz-Signature=9636a4809f09653f52f15180de67bbce4c46b77b8b12ee0590bf53ffb3b4623a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

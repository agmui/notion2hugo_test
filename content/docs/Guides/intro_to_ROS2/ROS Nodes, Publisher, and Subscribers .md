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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDGSFLW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnsq7TSm3%2BvlUi9F4WMrck8DzZ7TnOR0jw7t6Ak%2B9RiAiAeTVP5t1QX7qNBl1xwngtgqi5rnP%2B02c4bWl%2FPHuN81Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM6DjsBkveMy%2BUCCN0KtwDTwuug2b6PHWNFOxlymlJvdZXLDdqGdAe7o%2BsqiNVex%2BKMgh8Hh%2Ff%2FPtNkJHzo7DAuw0GjaaWKy%2BmyWQZzkbk9t89hzyDvNMHZRx9neeMlqISyOx7NToIbCYbxA184uw%2FcAXGSsKZdcN6uBtgDSj0aDI3GFujng4ddoZJCYrvSm9%2BnfDawGuFX1Vt7xZT%2FfC%2BV9sR9aG5EwtvhJE6U5yf6cIsNqNq3CVYAYVJbWJlYn%2FTvPnkW2sm6nz3x7JbwAzoY%2BjkMvj%2FypDiW5RH%2FYcbTQHC%2BzjZqtIDgnFPNkA%2Bhn0Vn2RXsmGCL1840Hq3u0l4xm9FCi4g0i1XSKLvU%2BW1aXRvyXT4lYo8P%2BTO6w0GR0G%2Bt1dxy9fCVzUA%2Fd%2B%2FkyA3k1LSKBc%2BQFRj%2Fw3AspWV8WodTKnYa1rxcENqlwJ7G3eLS4iE%2FB5XV2Q0GolUP7BiYonVIV6HORYKHWzwnevCGrqZs8gsjuG2QyaSBQ7urXAXQM5UTkq1FtB08l56bM3Uu%2BHsG08Nlqhh66JjV2%2F3Mx8DESl8afua%2FeQFcTTX%2FjZ3iHlDCZsu6ziKP2n1wBBxRkl8TUAhk8ME%2FrVcbDMwsWutNJWU%2F3UiWmuKf96PHwmKy9IyudGvphKQS9kwvsbcwQY6pgETuv79UpobFVyffOXPXoRP6IRKFhgv7HUn%2BW%2Fq6Vx43K%2FwfKZrIy4FSG7aUnNrH9JbKdoLqYV5xmttXqpGycENbyqgvffJM1AopQaMfcMoDy5g1cY5cwdybYsiTtanLMEG7x%2BpBWpJroryvAlL7vNpRF%2FPHXj1uBZ9vNa37Vm7uwU5iEHHvXWQPCSkMUWNNHBWJ5dl2oQUJgVgBwfWCF7nlPcRcfcc&X-Amz-Signature=61c8ff227db1b3cacf6537fd2c9e47ebd779f6184448450f008096272e946038&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDGSFLW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnsq7TSm3%2BvlUi9F4WMrck8DzZ7TnOR0jw7t6Ak%2B9RiAiAeTVP5t1QX7qNBl1xwngtgqi5rnP%2B02c4bWl%2FPHuN81Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM6DjsBkveMy%2BUCCN0KtwDTwuug2b6PHWNFOxlymlJvdZXLDdqGdAe7o%2BsqiNVex%2BKMgh8Hh%2Ff%2FPtNkJHzo7DAuw0GjaaWKy%2BmyWQZzkbk9t89hzyDvNMHZRx9neeMlqISyOx7NToIbCYbxA184uw%2FcAXGSsKZdcN6uBtgDSj0aDI3GFujng4ddoZJCYrvSm9%2BnfDawGuFX1Vt7xZT%2FfC%2BV9sR9aG5EwtvhJE6U5yf6cIsNqNq3CVYAYVJbWJlYn%2FTvPnkW2sm6nz3x7JbwAzoY%2BjkMvj%2FypDiW5RH%2FYcbTQHC%2BzjZqtIDgnFPNkA%2Bhn0Vn2RXsmGCL1840Hq3u0l4xm9FCi4g0i1XSKLvU%2BW1aXRvyXT4lYo8P%2BTO6w0GR0G%2Bt1dxy9fCVzUA%2Fd%2B%2FkyA3k1LSKBc%2BQFRj%2Fw3AspWV8WodTKnYa1rxcENqlwJ7G3eLS4iE%2FB5XV2Q0GolUP7BiYonVIV6HORYKHWzwnevCGrqZs8gsjuG2QyaSBQ7urXAXQM5UTkq1FtB08l56bM3Uu%2BHsG08Nlqhh66JjV2%2F3Mx8DESl8afua%2FeQFcTTX%2FjZ3iHlDCZsu6ziKP2n1wBBxRkl8TUAhk8ME%2FrVcbDMwsWutNJWU%2F3UiWmuKf96PHwmKy9IyudGvphKQS9kwvsbcwQY6pgETuv79UpobFVyffOXPXoRP6IRKFhgv7HUn%2BW%2Fq6Vx43K%2FwfKZrIy4FSG7aUnNrH9JbKdoLqYV5xmttXqpGycENbyqgvffJM1AopQaMfcMoDy5g1cY5cwdybYsiTtanLMEG7x%2BpBWpJroryvAlL7vNpRF%2FPHXj1uBZ9vNa37Vm7uwU5iEHHvXWQPCSkMUWNNHBWJ5dl2oQUJgVgBwfWCF7nlPcRcfcc&X-Amz-Signature=4807f80c64af84722ed7fe5f33348fd4fe86e6fa52519ec47b2ac16761db4b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDGSFLW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnsq7TSm3%2BvlUi9F4WMrck8DzZ7TnOR0jw7t6Ak%2B9RiAiAeTVP5t1QX7qNBl1xwngtgqi5rnP%2B02c4bWl%2FPHuN81Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM6DjsBkveMy%2BUCCN0KtwDTwuug2b6PHWNFOxlymlJvdZXLDdqGdAe7o%2BsqiNVex%2BKMgh8Hh%2Ff%2FPtNkJHzo7DAuw0GjaaWKy%2BmyWQZzkbk9t89hzyDvNMHZRx9neeMlqISyOx7NToIbCYbxA184uw%2FcAXGSsKZdcN6uBtgDSj0aDI3GFujng4ddoZJCYrvSm9%2BnfDawGuFX1Vt7xZT%2FfC%2BV9sR9aG5EwtvhJE6U5yf6cIsNqNq3CVYAYVJbWJlYn%2FTvPnkW2sm6nz3x7JbwAzoY%2BjkMvj%2FypDiW5RH%2FYcbTQHC%2BzjZqtIDgnFPNkA%2Bhn0Vn2RXsmGCL1840Hq3u0l4xm9FCi4g0i1XSKLvU%2BW1aXRvyXT4lYo8P%2BTO6w0GR0G%2Bt1dxy9fCVzUA%2Fd%2B%2FkyA3k1LSKBc%2BQFRj%2Fw3AspWV8WodTKnYa1rxcENqlwJ7G3eLS4iE%2FB5XV2Q0GolUP7BiYonVIV6HORYKHWzwnevCGrqZs8gsjuG2QyaSBQ7urXAXQM5UTkq1FtB08l56bM3Uu%2BHsG08Nlqhh66JjV2%2F3Mx8DESl8afua%2FeQFcTTX%2FjZ3iHlDCZsu6ziKP2n1wBBxRkl8TUAhk8ME%2FrVcbDMwsWutNJWU%2F3UiWmuKf96PHwmKy9IyudGvphKQS9kwvsbcwQY6pgETuv79UpobFVyffOXPXoRP6IRKFhgv7HUn%2BW%2Fq6Vx43K%2FwfKZrIy4FSG7aUnNrH9JbKdoLqYV5xmttXqpGycENbyqgvffJM1AopQaMfcMoDy5g1cY5cwdybYsiTtanLMEG7x%2BpBWpJroryvAlL7vNpRF%2FPHXj1uBZ9vNa37Vm7uwU5iEHHvXWQPCSkMUWNNHBWJ5dl2oQUJgVgBwfWCF7nlPcRcfcc&X-Amz-Signature=92924c53208434c838e7d23777d17623389cb5894202cf851c96d84e947df74b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDGSFLW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnsq7TSm3%2BvlUi9F4WMrck8DzZ7TnOR0jw7t6Ak%2B9RiAiAeTVP5t1QX7qNBl1xwngtgqi5rnP%2B02c4bWl%2FPHuN81Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM6DjsBkveMy%2BUCCN0KtwDTwuug2b6PHWNFOxlymlJvdZXLDdqGdAe7o%2BsqiNVex%2BKMgh8Hh%2Ff%2FPtNkJHzo7DAuw0GjaaWKy%2BmyWQZzkbk9t89hzyDvNMHZRx9neeMlqISyOx7NToIbCYbxA184uw%2FcAXGSsKZdcN6uBtgDSj0aDI3GFujng4ddoZJCYrvSm9%2BnfDawGuFX1Vt7xZT%2FfC%2BV9sR9aG5EwtvhJE6U5yf6cIsNqNq3CVYAYVJbWJlYn%2FTvPnkW2sm6nz3x7JbwAzoY%2BjkMvj%2FypDiW5RH%2FYcbTQHC%2BzjZqtIDgnFPNkA%2Bhn0Vn2RXsmGCL1840Hq3u0l4xm9FCi4g0i1XSKLvU%2BW1aXRvyXT4lYo8P%2BTO6w0GR0G%2Bt1dxy9fCVzUA%2Fd%2B%2FkyA3k1LSKBc%2BQFRj%2Fw3AspWV8WodTKnYa1rxcENqlwJ7G3eLS4iE%2FB5XV2Q0GolUP7BiYonVIV6HORYKHWzwnevCGrqZs8gsjuG2QyaSBQ7urXAXQM5UTkq1FtB08l56bM3Uu%2BHsG08Nlqhh66JjV2%2F3Mx8DESl8afua%2FeQFcTTX%2FjZ3iHlDCZsu6ziKP2n1wBBxRkl8TUAhk8ME%2FrVcbDMwsWutNJWU%2F3UiWmuKf96PHwmKy9IyudGvphKQS9kwvsbcwQY6pgETuv79UpobFVyffOXPXoRP6IRKFhgv7HUn%2BW%2Fq6Vx43K%2FwfKZrIy4FSG7aUnNrH9JbKdoLqYV5xmttXqpGycENbyqgvffJM1AopQaMfcMoDy5g1cY5cwdybYsiTtanLMEG7x%2BpBWpJroryvAlL7vNpRF%2FPHXj1uBZ9vNa37Vm7uwU5iEHHvXWQPCSkMUWNNHBWJ5dl2oQUJgVgBwfWCF7nlPcRcfcc&X-Amz-Signature=f171cd6f0b547398480b7e985c2635f06e1ff8faf3b38236a3dbbded7c522de3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDGSFLW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnsq7TSm3%2BvlUi9F4WMrck8DzZ7TnOR0jw7t6Ak%2B9RiAiAeTVP5t1QX7qNBl1xwngtgqi5rnP%2B02c4bWl%2FPHuN81Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM6DjsBkveMy%2BUCCN0KtwDTwuug2b6PHWNFOxlymlJvdZXLDdqGdAe7o%2BsqiNVex%2BKMgh8Hh%2Ff%2FPtNkJHzo7DAuw0GjaaWKy%2BmyWQZzkbk9t89hzyDvNMHZRx9neeMlqISyOx7NToIbCYbxA184uw%2FcAXGSsKZdcN6uBtgDSj0aDI3GFujng4ddoZJCYrvSm9%2BnfDawGuFX1Vt7xZT%2FfC%2BV9sR9aG5EwtvhJE6U5yf6cIsNqNq3CVYAYVJbWJlYn%2FTvPnkW2sm6nz3x7JbwAzoY%2BjkMvj%2FypDiW5RH%2FYcbTQHC%2BzjZqtIDgnFPNkA%2Bhn0Vn2RXsmGCL1840Hq3u0l4xm9FCi4g0i1XSKLvU%2BW1aXRvyXT4lYo8P%2BTO6w0GR0G%2Bt1dxy9fCVzUA%2Fd%2B%2FkyA3k1LSKBc%2BQFRj%2Fw3AspWV8WodTKnYa1rxcENqlwJ7G3eLS4iE%2FB5XV2Q0GolUP7BiYonVIV6HORYKHWzwnevCGrqZs8gsjuG2QyaSBQ7urXAXQM5UTkq1FtB08l56bM3Uu%2BHsG08Nlqhh66JjV2%2F3Mx8DESl8afua%2FeQFcTTX%2FjZ3iHlDCZsu6ziKP2n1wBBxRkl8TUAhk8ME%2FrVcbDMwsWutNJWU%2F3UiWmuKf96PHwmKy9IyudGvphKQS9kwvsbcwQY6pgETuv79UpobFVyffOXPXoRP6IRKFhgv7HUn%2BW%2Fq6Vx43K%2FwfKZrIy4FSG7aUnNrH9JbKdoLqYV5xmttXqpGycENbyqgvffJM1AopQaMfcMoDy5g1cY5cwdybYsiTtanLMEG7x%2BpBWpJroryvAlL7vNpRF%2FPHXj1uBZ9vNa37Vm7uwU5iEHHvXWQPCSkMUWNNHBWJ5dl2oQUJgVgBwfWCF7nlPcRcfcc&X-Amz-Signature=5323de992ff63997967c3c6267d068676a9c175de8db64859c2ae8be87415a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDGSFLW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnsq7TSm3%2BvlUi9F4WMrck8DzZ7TnOR0jw7t6Ak%2B9RiAiAeTVP5t1QX7qNBl1xwngtgqi5rnP%2B02c4bWl%2FPHuN81Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM6DjsBkveMy%2BUCCN0KtwDTwuug2b6PHWNFOxlymlJvdZXLDdqGdAe7o%2BsqiNVex%2BKMgh8Hh%2Ff%2FPtNkJHzo7DAuw0GjaaWKy%2BmyWQZzkbk9t89hzyDvNMHZRx9neeMlqISyOx7NToIbCYbxA184uw%2FcAXGSsKZdcN6uBtgDSj0aDI3GFujng4ddoZJCYrvSm9%2BnfDawGuFX1Vt7xZT%2FfC%2BV9sR9aG5EwtvhJE6U5yf6cIsNqNq3CVYAYVJbWJlYn%2FTvPnkW2sm6nz3x7JbwAzoY%2BjkMvj%2FypDiW5RH%2FYcbTQHC%2BzjZqtIDgnFPNkA%2Bhn0Vn2RXsmGCL1840Hq3u0l4xm9FCi4g0i1XSKLvU%2BW1aXRvyXT4lYo8P%2BTO6w0GR0G%2Bt1dxy9fCVzUA%2Fd%2B%2FkyA3k1LSKBc%2BQFRj%2Fw3AspWV8WodTKnYa1rxcENqlwJ7G3eLS4iE%2FB5XV2Q0GolUP7BiYonVIV6HORYKHWzwnevCGrqZs8gsjuG2QyaSBQ7urXAXQM5UTkq1FtB08l56bM3Uu%2BHsG08Nlqhh66JjV2%2F3Mx8DESl8afua%2FeQFcTTX%2FjZ3iHlDCZsu6ziKP2n1wBBxRkl8TUAhk8ME%2FrVcbDMwsWutNJWU%2F3UiWmuKf96PHwmKy9IyudGvphKQS9kwvsbcwQY6pgETuv79UpobFVyffOXPXoRP6IRKFhgv7HUn%2BW%2Fq6Vx43K%2FwfKZrIy4FSG7aUnNrH9JbKdoLqYV5xmttXqpGycENbyqgvffJM1AopQaMfcMoDy5g1cY5cwdybYsiTtanLMEG7x%2BpBWpJroryvAlL7vNpRF%2FPHXj1uBZ9vNa37Vm7uwU5iEHHvXWQPCSkMUWNNHBWJ5dl2oQUJgVgBwfWCF7nlPcRcfcc&X-Amz-Signature=cd6613d2ba40c0ad4ba9f4c8d18f8eee1c0d39b471daf52d21a2b124d73f504a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDGSFLW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnsq7TSm3%2BvlUi9F4WMrck8DzZ7TnOR0jw7t6Ak%2B9RiAiAeTVP5t1QX7qNBl1xwngtgqi5rnP%2B02c4bWl%2FPHuN81Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM6DjsBkveMy%2BUCCN0KtwDTwuug2b6PHWNFOxlymlJvdZXLDdqGdAe7o%2BsqiNVex%2BKMgh8Hh%2Ff%2FPtNkJHzo7DAuw0GjaaWKy%2BmyWQZzkbk9t89hzyDvNMHZRx9neeMlqISyOx7NToIbCYbxA184uw%2FcAXGSsKZdcN6uBtgDSj0aDI3GFujng4ddoZJCYrvSm9%2BnfDawGuFX1Vt7xZT%2FfC%2BV9sR9aG5EwtvhJE6U5yf6cIsNqNq3CVYAYVJbWJlYn%2FTvPnkW2sm6nz3x7JbwAzoY%2BjkMvj%2FypDiW5RH%2FYcbTQHC%2BzjZqtIDgnFPNkA%2Bhn0Vn2RXsmGCL1840Hq3u0l4xm9FCi4g0i1XSKLvU%2BW1aXRvyXT4lYo8P%2BTO6w0GR0G%2Bt1dxy9fCVzUA%2Fd%2B%2FkyA3k1LSKBc%2BQFRj%2Fw3AspWV8WodTKnYa1rxcENqlwJ7G3eLS4iE%2FB5XV2Q0GolUP7BiYonVIV6HORYKHWzwnevCGrqZs8gsjuG2QyaSBQ7urXAXQM5UTkq1FtB08l56bM3Uu%2BHsG08Nlqhh66JjV2%2F3Mx8DESl8afua%2FeQFcTTX%2FjZ3iHlDCZsu6ziKP2n1wBBxRkl8TUAhk8ME%2FrVcbDMwsWutNJWU%2F3UiWmuKf96PHwmKy9IyudGvphKQS9kwvsbcwQY6pgETuv79UpobFVyffOXPXoRP6IRKFhgv7HUn%2BW%2Fq6Vx43K%2FwfKZrIy4FSG7aUnNrH9JbKdoLqYV5xmttXqpGycENbyqgvffJM1AopQaMfcMoDy5g1cY5cwdybYsiTtanLMEG7x%2BpBWpJroryvAlL7vNpRF%2FPHXj1uBZ9vNa37Vm7uwU5iEHHvXWQPCSkMUWNNHBWJ5dl2oQUJgVgBwfWCF7nlPcRcfcc&X-Amz-Signature=cbb6ec5f78610ed9a6d7e65bbed13d92b0a2ecb1b380df6e15b1fc07081da98f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDGSFLW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnsq7TSm3%2BvlUi9F4WMrck8DzZ7TnOR0jw7t6Ak%2B9RiAiAeTVP5t1QX7qNBl1xwngtgqi5rnP%2B02c4bWl%2FPHuN81Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM6DjsBkveMy%2BUCCN0KtwDTwuug2b6PHWNFOxlymlJvdZXLDdqGdAe7o%2BsqiNVex%2BKMgh8Hh%2Ff%2FPtNkJHzo7DAuw0GjaaWKy%2BmyWQZzkbk9t89hzyDvNMHZRx9neeMlqISyOx7NToIbCYbxA184uw%2FcAXGSsKZdcN6uBtgDSj0aDI3GFujng4ddoZJCYrvSm9%2BnfDawGuFX1Vt7xZT%2FfC%2BV9sR9aG5EwtvhJE6U5yf6cIsNqNq3CVYAYVJbWJlYn%2FTvPnkW2sm6nz3x7JbwAzoY%2BjkMvj%2FypDiW5RH%2FYcbTQHC%2BzjZqtIDgnFPNkA%2Bhn0Vn2RXsmGCL1840Hq3u0l4xm9FCi4g0i1XSKLvU%2BW1aXRvyXT4lYo8P%2BTO6w0GR0G%2Bt1dxy9fCVzUA%2Fd%2B%2FkyA3k1LSKBc%2BQFRj%2Fw3AspWV8WodTKnYa1rxcENqlwJ7G3eLS4iE%2FB5XV2Q0GolUP7BiYonVIV6HORYKHWzwnevCGrqZs8gsjuG2QyaSBQ7urXAXQM5UTkq1FtB08l56bM3Uu%2BHsG08Nlqhh66JjV2%2F3Mx8DESl8afua%2FeQFcTTX%2FjZ3iHlDCZsu6ziKP2n1wBBxRkl8TUAhk8ME%2FrVcbDMwsWutNJWU%2F3UiWmuKf96PHwmKy9IyudGvphKQS9kwvsbcwQY6pgETuv79UpobFVyffOXPXoRP6IRKFhgv7HUn%2BW%2Fq6Vx43K%2FwfKZrIy4FSG7aUnNrH9JbKdoLqYV5xmttXqpGycENbyqgvffJM1AopQaMfcMoDy5g1cY5cwdybYsiTtanLMEG7x%2BpBWpJroryvAlL7vNpRF%2FPHXj1uBZ9vNa37Vm7uwU5iEHHvXWQPCSkMUWNNHBWJ5dl2oQUJgVgBwfWCF7nlPcRcfcc&X-Amz-Signature=7b398e3d4d762bf7e0144b2913a795c925314fb698b0c55e474fd2e7307ed809&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

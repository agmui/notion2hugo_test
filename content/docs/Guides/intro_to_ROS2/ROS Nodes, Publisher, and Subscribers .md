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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRRWGOC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs%2FSUnOmMJpLVFE3hu94ElNDEux%2BL63qn%2FlP0tV3JvPAiEAsLhG%2BaZcRYRz%2FoADZEXKejYeSTE5Yet40KNXvXLXYSEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCWd3r1dGngZ7CV2fSrcA4XHkAYOuRNoiT0Tqhf4zNN0lGUMmIRbgneXW7IGtJXdT4JHIiNVbCAlORw0HdpZbXEYEnzf5EtHWfOvkFrOtJAgyfN697J39CSve96YYJuATo45nU5sgvZl5dOS2LFVN9wk0IDI%2BJOz2zEBmyw15LqcrXPdbK97toGvRBT9BnCqIgqK%2BTPe2vwgrIw%2FfHLPL2AQDl9b58A4ytq4f1mEm95vTaEDd%2FZRzrT9xQ57%2Fu1k9U6BCEtgqJjCVMR5mRm7VaT%2Fj7yYhknn6tRA2pCLi5ORYNNGvrtKxXKUMTPVClEJXOpV%2BT%2B1Ngm5euurmWcyu6aV5xFL81iVdSgpHyIxdzpIqacZQKoXntkobob%2BKEMoVw8no1WP3eF0vsSNHOlZ%2FPqdwAeet7AHhvJx4%2BPd128PRJm6X4amALR0RLXYTeWzgOvMw2hWVPcODhBXfFLlbFal2W4JxHVc7WmsXNlQeEjQGplXozJ3V7YTHq1b7ridFc1aW5XD72hilEKbjRxvxmQH%2BUVbWRvA4lUB%2FoFqwrykfpgq0u4IJPHij2cF3ighNriYeTv1ZE5COgseXfginXXz5kWn64fYHPPYpzwxrm8r2IMoCJYlAIz1F9yvbsFASQS%2F1%2Fqwe0w3dMwjMNCmxcIGOqUBBsmr%2Fg3K1SboRXqKso8i5u5fWXt%2Bl%2BcZr4xYA4iPPi8xLcdjYpd5flMdJtI5OFlx%2FhDUgDhIpKWW%2FtttMW1V03hU%2F3yGC5VuvKk3CRCaD%2FkNRFLR1JDs2tuCwZqOtiYhKYrcEudxKjNvv2e0OwN8t5fwBAzt3W%2BQDs2j%2FDVKyC3XjGeALCPcR0oFX2XDKlkNwHFVopa8AcrotKj09xOsAOMwZNJr&X-Amz-Signature=25a3edf6789b8ee09db89bae07506cbe50ab1dec093ca5b74c79623b93b23d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRRWGOC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs%2FSUnOmMJpLVFE3hu94ElNDEux%2BL63qn%2FlP0tV3JvPAiEAsLhG%2BaZcRYRz%2FoADZEXKejYeSTE5Yet40KNXvXLXYSEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCWd3r1dGngZ7CV2fSrcA4XHkAYOuRNoiT0Tqhf4zNN0lGUMmIRbgneXW7IGtJXdT4JHIiNVbCAlORw0HdpZbXEYEnzf5EtHWfOvkFrOtJAgyfN697J39CSve96YYJuATo45nU5sgvZl5dOS2LFVN9wk0IDI%2BJOz2zEBmyw15LqcrXPdbK97toGvRBT9BnCqIgqK%2BTPe2vwgrIw%2FfHLPL2AQDl9b58A4ytq4f1mEm95vTaEDd%2FZRzrT9xQ57%2Fu1k9U6BCEtgqJjCVMR5mRm7VaT%2Fj7yYhknn6tRA2pCLi5ORYNNGvrtKxXKUMTPVClEJXOpV%2BT%2B1Ngm5euurmWcyu6aV5xFL81iVdSgpHyIxdzpIqacZQKoXntkobob%2BKEMoVw8no1WP3eF0vsSNHOlZ%2FPqdwAeet7AHhvJx4%2BPd128PRJm6X4amALR0RLXYTeWzgOvMw2hWVPcODhBXfFLlbFal2W4JxHVc7WmsXNlQeEjQGplXozJ3V7YTHq1b7ridFc1aW5XD72hilEKbjRxvxmQH%2BUVbWRvA4lUB%2FoFqwrykfpgq0u4IJPHij2cF3ighNriYeTv1ZE5COgseXfginXXz5kWn64fYHPPYpzwxrm8r2IMoCJYlAIz1F9yvbsFASQS%2F1%2Fqwe0w3dMwjMNCmxcIGOqUBBsmr%2Fg3K1SboRXqKso8i5u5fWXt%2Bl%2BcZr4xYA4iPPi8xLcdjYpd5flMdJtI5OFlx%2FhDUgDhIpKWW%2FtttMW1V03hU%2F3yGC5VuvKk3CRCaD%2FkNRFLR1JDs2tuCwZqOtiYhKYrcEudxKjNvv2e0OwN8t5fwBAzt3W%2BQDs2j%2FDVKyC3XjGeALCPcR0oFX2XDKlkNwHFVopa8AcrotKj09xOsAOMwZNJr&X-Amz-Signature=20f3d6bc6b6ef2e9ba5fe6a5b1964701689b2fb7e8d4d6f75b3ec3d7dae75f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRRWGOC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs%2FSUnOmMJpLVFE3hu94ElNDEux%2BL63qn%2FlP0tV3JvPAiEAsLhG%2BaZcRYRz%2FoADZEXKejYeSTE5Yet40KNXvXLXYSEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCWd3r1dGngZ7CV2fSrcA4XHkAYOuRNoiT0Tqhf4zNN0lGUMmIRbgneXW7IGtJXdT4JHIiNVbCAlORw0HdpZbXEYEnzf5EtHWfOvkFrOtJAgyfN697J39CSve96YYJuATo45nU5sgvZl5dOS2LFVN9wk0IDI%2BJOz2zEBmyw15LqcrXPdbK97toGvRBT9BnCqIgqK%2BTPe2vwgrIw%2FfHLPL2AQDl9b58A4ytq4f1mEm95vTaEDd%2FZRzrT9xQ57%2Fu1k9U6BCEtgqJjCVMR5mRm7VaT%2Fj7yYhknn6tRA2pCLi5ORYNNGvrtKxXKUMTPVClEJXOpV%2BT%2B1Ngm5euurmWcyu6aV5xFL81iVdSgpHyIxdzpIqacZQKoXntkobob%2BKEMoVw8no1WP3eF0vsSNHOlZ%2FPqdwAeet7AHhvJx4%2BPd128PRJm6X4amALR0RLXYTeWzgOvMw2hWVPcODhBXfFLlbFal2W4JxHVc7WmsXNlQeEjQGplXozJ3V7YTHq1b7ridFc1aW5XD72hilEKbjRxvxmQH%2BUVbWRvA4lUB%2FoFqwrykfpgq0u4IJPHij2cF3ighNriYeTv1ZE5COgseXfginXXz5kWn64fYHPPYpzwxrm8r2IMoCJYlAIz1F9yvbsFASQS%2F1%2Fqwe0w3dMwjMNCmxcIGOqUBBsmr%2Fg3K1SboRXqKso8i5u5fWXt%2Bl%2BcZr4xYA4iPPi8xLcdjYpd5flMdJtI5OFlx%2FhDUgDhIpKWW%2FtttMW1V03hU%2F3yGC5VuvKk3CRCaD%2FkNRFLR1JDs2tuCwZqOtiYhKYrcEudxKjNvv2e0OwN8t5fwBAzt3W%2BQDs2j%2FDVKyC3XjGeALCPcR0oFX2XDKlkNwHFVopa8AcrotKj09xOsAOMwZNJr&X-Amz-Signature=0ae2d70ea0dbc51dc75569aff6bccea128c08bf5e7e46ce0955b5e21bd3052a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRRWGOC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs%2FSUnOmMJpLVFE3hu94ElNDEux%2BL63qn%2FlP0tV3JvPAiEAsLhG%2BaZcRYRz%2FoADZEXKejYeSTE5Yet40KNXvXLXYSEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCWd3r1dGngZ7CV2fSrcA4XHkAYOuRNoiT0Tqhf4zNN0lGUMmIRbgneXW7IGtJXdT4JHIiNVbCAlORw0HdpZbXEYEnzf5EtHWfOvkFrOtJAgyfN697J39CSve96YYJuATo45nU5sgvZl5dOS2LFVN9wk0IDI%2BJOz2zEBmyw15LqcrXPdbK97toGvRBT9BnCqIgqK%2BTPe2vwgrIw%2FfHLPL2AQDl9b58A4ytq4f1mEm95vTaEDd%2FZRzrT9xQ57%2Fu1k9U6BCEtgqJjCVMR5mRm7VaT%2Fj7yYhknn6tRA2pCLi5ORYNNGvrtKxXKUMTPVClEJXOpV%2BT%2B1Ngm5euurmWcyu6aV5xFL81iVdSgpHyIxdzpIqacZQKoXntkobob%2BKEMoVw8no1WP3eF0vsSNHOlZ%2FPqdwAeet7AHhvJx4%2BPd128PRJm6X4amALR0RLXYTeWzgOvMw2hWVPcODhBXfFLlbFal2W4JxHVc7WmsXNlQeEjQGplXozJ3V7YTHq1b7ridFc1aW5XD72hilEKbjRxvxmQH%2BUVbWRvA4lUB%2FoFqwrykfpgq0u4IJPHij2cF3ighNriYeTv1ZE5COgseXfginXXz5kWn64fYHPPYpzwxrm8r2IMoCJYlAIz1F9yvbsFASQS%2F1%2Fqwe0w3dMwjMNCmxcIGOqUBBsmr%2Fg3K1SboRXqKso8i5u5fWXt%2Bl%2BcZr4xYA4iPPi8xLcdjYpd5flMdJtI5OFlx%2FhDUgDhIpKWW%2FtttMW1V03hU%2F3yGC5VuvKk3CRCaD%2FkNRFLR1JDs2tuCwZqOtiYhKYrcEudxKjNvv2e0OwN8t5fwBAzt3W%2BQDs2j%2FDVKyC3XjGeALCPcR0oFX2XDKlkNwHFVopa8AcrotKj09xOsAOMwZNJr&X-Amz-Signature=ff0d5832bbb5ea042220a829be4fc4749933d63584669fac6c78b6f3cac1b8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRRWGOC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs%2FSUnOmMJpLVFE3hu94ElNDEux%2BL63qn%2FlP0tV3JvPAiEAsLhG%2BaZcRYRz%2FoADZEXKejYeSTE5Yet40KNXvXLXYSEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCWd3r1dGngZ7CV2fSrcA4XHkAYOuRNoiT0Tqhf4zNN0lGUMmIRbgneXW7IGtJXdT4JHIiNVbCAlORw0HdpZbXEYEnzf5EtHWfOvkFrOtJAgyfN697J39CSve96YYJuATo45nU5sgvZl5dOS2LFVN9wk0IDI%2BJOz2zEBmyw15LqcrXPdbK97toGvRBT9BnCqIgqK%2BTPe2vwgrIw%2FfHLPL2AQDl9b58A4ytq4f1mEm95vTaEDd%2FZRzrT9xQ57%2Fu1k9U6BCEtgqJjCVMR5mRm7VaT%2Fj7yYhknn6tRA2pCLi5ORYNNGvrtKxXKUMTPVClEJXOpV%2BT%2B1Ngm5euurmWcyu6aV5xFL81iVdSgpHyIxdzpIqacZQKoXntkobob%2BKEMoVw8no1WP3eF0vsSNHOlZ%2FPqdwAeet7AHhvJx4%2BPd128PRJm6X4amALR0RLXYTeWzgOvMw2hWVPcODhBXfFLlbFal2W4JxHVc7WmsXNlQeEjQGplXozJ3V7YTHq1b7ridFc1aW5XD72hilEKbjRxvxmQH%2BUVbWRvA4lUB%2FoFqwrykfpgq0u4IJPHij2cF3ighNriYeTv1ZE5COgseXfginXXz5kWn64fYHPPYpzwxrm8r2IMoCJYlAIz1F9yvbsFASQS%2F1%2Fqwe0w3dMwjMNCmxcIGOqUBBsmr%2Fg3K1SboRXqKso8i5u5fWXt%2Bl%2BcZr4xYA4iPPi8xLcdjYpd5flMdJtI5OFlx%2FhDUgDhIpKWW%2FtttMW1V03hU%2F3yGC5VuvKk3CRCaD%2FkNRFLR1JDs2tuCwZqOtiYhKYrcEudxKjNvv2e0OwN8t5fwBAzt3W%2BQDs2j%2FDVKyC3XjGeALCPcR0oFX2XDKlkNwHFVopa8AcrotKj09xOsAOMwZNJr&X-Amz-Signature=2cc92f06e6e57b302311d75fd85b0ebb3e6b35c391c0b89df033bc5af558d902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRRWGOC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs%2FSUnOmMJpLVFE3hu94ElNDEux%2BL63qn%2FlP0tV3JvPAiEAsLhG%2BaZcRYRz%2FoADZEXKejYeSTE5Yet40KNXvXLXYSEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCWd3r1dGngZ7CV2fSrcA4XHkAYOuRNoiT0Tqhf4zNN0lGUMmIRbgneXW7IGtJXdT4JHIiNVbCAlORw0HdpZbXEYEnzf5EtHWfOvkFrOtJAgyfN697J39CSve96YYJuATo45nU5sgvZl5dOS2LFVN9wk0IDI%2BJOz2zEBmyw15LqcrXPdbK97toGvRBT9BnCqIgqK%2BTPe2vwgrIw%2FfHLPL2AQDl9b58A4ytq4f1mEm95vTaEDd%2FZRzrT9xQ57%2Fu1k9U6BCEtgqJjCVMR5mRm7VaT%2Fj7yYhknn6tRA2pCLi5ORYNNGvrtKxXKUMTPVClEJXOpV%2BT%2B1Ngm5euurmWcyu6aV5xFL81iVdSgpHyIxdzpIqacZQKoXntkobob%2BKEMoVw8no1WP3eF0vsSNHOlZ%2FPqdwAeet7AHhvJx4%2BPd128PRJm6X4amALR0RLXYTeWzgOvMw2hWVPcODhBXfFLlbFal2W4JxHVc7WmsXNlQeEjQGplXozJ3V7YTHq1b7ridFc1aW5XD72hilEKbjRxvxmQH%2BUVbWRvA4lUB%2FoFqwrykfpgq0u4IJPHij2cF3ighNriYeTv1ZE5COgseXfginXXz5kWn64fYHPPYpzwxrm8r2IMoCJYlAIz1F9yvbsFASQS%2F1%2Fqwe0w3dMwjMNCmxcIGOqUBBsmr%2Fg3K1SboRXqKso8i5u5fWXt%2Bl%2BcZr4xYA4iPPi8xLcdjYpd5flMdJtI5OFlx%2FhDUgDhIpKWW%2FtttMW1V03hU%2F3yGC5VuvKk3CRCaD%2FkNRFLR1JDs2tuCwZqOtiYhKYrcEudxKjNvv2e0OwN8t5fwBAzt3W%2BQDs2j%2FDVKyC3XjGeALCPcR0oFX2XDKlkNwHFVopa8AcrotKj09xOsAOMwZNJr&X-Amz-Signature=902bb4559a57d75c1fef2d6917c18ffbba81beded4d3a95cdac434ab36a2b804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRRWGOC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs%2FSUnOmMJpLVFE3hu94ElNDEux%2BL63qn%2FlP0tV3JvPAiEAsLhG%2BaZcRYRz%2FoADZEXKejYeSTE5Yet40KNXvXLXYSEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCWd3r1dGngZ7CV2fSrcA4XHkAYOuRNoiT0Tqhf4zNN0lGUMmIRbgneXW7IGtJXdT4JHIiNVbCAlORw0HdpZbXEYEnzf5EtHWfOvkFrOtJAgyfN697J39CSve96YYJuATo45nU5sgvZl5dOS2LFVN9wk0IDI%2BJOz2zEBmyw15LqcrXPdbK97toGvRBT9BnCqIgqK%2BTPe2vwgrIw%2FfHLPL2AQDl9b58A4ytq4f1mEm95vTaEDd%2FZRzrT9xQ57%2Fu1k9U6BCEtgqJjCVMR5mRm7VaT%2Fj7yYhknn6tRA2pCLi5ORYNNGvrtKxXKUMTPVClEJXOpV%2BT%2B1Ngm5euurmWcyu6aV5xFL81iVdSgpHyIxdzpIqacZQKoXntkobob%2BKEMoVw8no1WP3eF0vsSNHOlZ%2FPqdwAeet7AHhvJx4%2BPd128PRJm6X4amALR0RLXYTeWzgOvMw2hWVPcODhBXfFLlbFal2W4JxHVc7WmsXNlQeEjQGplXozJ3V7YTHq1b7ridFc1aW5XD72hilEKbjRxvxmQH%2BUVbWRvA4lUB%2FoFqwrykfpgq0u4IJPHij2cF3ighNriYeTv1ZE5COgseXfginXXz5kWn64fYHPPYpzwxrm8r2IMoCJYlAIz1F9yvbsFASQS%2F1%2Fqwe0w3dMwjMNCmxcIGOqUBBsmr%2Fg3K1SboRXqKso8i5u5fWXt%2Bl%2BcZr4xYA4iPPi8xLcdjYpd5flMdJtI5OFlx%2FhDUgDhIpKWW%2FtttMW1V03hU%2F3yGC5VuvKk3CRCaD%2FkNRFLR1JDs2tuCwZqOtiYhKYrcEudxKjNvv2e0OwN8t5fwBAzt3W%2BQDs2j%2FDVKyC3XjGeALCPcR0oFX2XDKlkNwHFVopa8AcrotKj09xOsAOMwZNJr&X-Amz-Signature=babcca013711477c1f510a03685ad100b98ff09c189e1c2841ba1d9169a9c2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KRRWGOC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs%2FSUnOmMJpLVFE3hu94ElNDEux%2BL63qn%2FlP0tV3JvPAiEAsLhG%2BaZcRYRz%2FoADZEXKejYeSTE5Yet40KNXvXLXYSEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCWd3r1dGngZ7CV2fSrcA4XHkAYOuRNoiT0Tqhf4zNN0lGUMmIRbgneXW7IGtJXdT4JHIiNVbCAlORw0HdpZbXEYEnzf5EtHWfOvkFrOtJAgyfN697J39CSve96YYJuATo45nU5sgvZl5dOS2LFVN9wk0IDI%2BJOz2zEBmyw15LqcrXPdbK97toGvRBT9BnCqIgqK%2BTPe2vwgrIw%2FfHLPL2AQDl9b58A4ytq4f1mEm95vTaEDd%2FZRzrT9xQ57%2Fu1k9U6BCEtgqJjCVMR5mRm7VaT%2Fj7yYhknn6tRA2pCLi5ORYNNGvrtKxXKUMTPVClEJXOpV%2BT%2B1Ngm5euurmWcyu6aV5xFL81iVdSgpHyIxdzpIqacZQKoXntkobob%2BKEMoVw8no1WP3eF0vsSNHOlZ%2FPqdwAeet7AHhvJx4%2BPd128PRJm6X4amALR0RLXYTeWzgOvMw2hWVPcODhBXfFLlbFal2W4JxHVc7WmsXNlQeEjQGplXozJ3V7YTHq1b7ridFc1aW5XD72hilEKbjRxvxmQH%2BUVbWRvA4lUB%2FoFqwrykfpgq0u4IJPHij2cF3ighNriYeTv1ZE5COgseXfginXXz5kWn64fYHPPYpzwxrm8r2IMoCJYlAIz1F9yvbsFASQS%2F1%2Fqwe0w3dMwjMNCmxcIGOqUBBsmr%2Fg3K1SboRXqKso8i5u5fWXt%2Bl%2BcZr4xYA4iPPi8xLcdjYpd5flMdJtI5OFlx%2FhDUgDhIpKWW%2FtttMW1V03hU%2F3yGC5VuvKk3CRCaD%2FkNRFLR1JDs2tuCwZqOtiYhKYrcEudxKjNvv2e0OwN8t5fwBAzt3W%2BQDs2j%2FDVKyC3XjGeALCPcR0oFX2XDKlkNwHFVopa8AcrotKj09xOsAOMwZNJr&X-Amz-Signature=458b7385bf8d180d083fd2a331cea49336c562bfeff1b3de6e1515ca38ae74f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

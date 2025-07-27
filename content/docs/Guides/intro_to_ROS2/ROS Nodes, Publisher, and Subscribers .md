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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AHAFCD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDPAHM2vDibo4PkH3gxelfTHUXgbQdwapxfTpSiBriKYwIhAMLcd6Ba7lmdVy52qlQRjIY5EyTigrJH3Wx%2BMPaV%2BoACKv8DCHIQABoMNjM3NDIzMTgzODA1Igw0Ya%2Bp8p94XYxsHyMq3AOfcFQeP3y4oDUpYwl%2FqDvywIbMN6seIaW3n7rHDtWL9iimgisghbk5yWUuHd1jJ8mZ4AI4yHK14wAZYYuj32FCVU32KuhDwuEuUA9QXZniJ6whjpoCPx%2FaUyhCUa8nbmrDZ%2F1THhRQQiY0SrC22qO42wG5JM5D3FoYtIyG5mehptg92%2Be68W5vaLoOXkr31vSnfYnpuf4y1D7ATTeCyJ8SjXJklXFCGlE2lEhYx0WeQMN5L5OE1yOAR%2BjBlXPx%2FV%2BZ7%2FXfD%2F7t17JW%2Bd5DPF62F3om%2Fsk%2BglzdodTAO5J%2FrMaXRWpr7HYvdWU%2FZAsUa1GXX5EstHR5m7HjCwXL3UideHfvT1lbTb14MhACII%2BUoKloqEdYpHaruA9kZszXsqJjRzxbubFMoUJQXmI0zwkB4EcveXyncYA9HoPj7%2B52qZM06M%2Ftm7H3OfEACFGAvOckm9G8AKxiWWtt4yRbduYfwYc8x9ekEpfKf9fOVwQAB%2F8K5OxtwrcmyAHYWUxnMnF2dSRCMpmUY96ACjSBKnzWDsvZHXI%2B6DhF%2FtmzYEpzgdysCgxyZ1La5j9EjDvT%2FAqi02qLnW34727jsoGMApArKyrzvKOX60Eyupp6k70BG4iJ2JBpKI%2BpNK3xvTCX25fEBjqkAbea8iQlXWEVoodr6IZeuOHpLSZDrfEb6epUc3H4NZaE7kOn00oRt89VMsTLzRlGHrXdDDwms%2FKzKcHLvmJ4bEi%2BVYmZFd4aNnJLYXta3v3f8bRvoDkPiY8itrQq9of1K6as5RmgiLDX2nff6RzfUEPFtooQD4S3SolPGE%2FAMYKsgb8jTgibw6e%2FoNalGLjP0E8K8eNahdaiT2ENMoNF4%2B%2BP%2F8iJ&X-Amz-Signature=bc7224edda215252030a964aeac89553754cd9ca775269d1264bbacd831b69e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AHAFCD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDPAHM2vDibo4PkH3gxelfTHUXgbQdwapxfTpSiBriKYwIhAMLcd6Ba7lmdVy52qlQRjIY5EyTigrJH3Wx%2BMPaV%2BoACKv8DCHIQABoMNjM3NDIzMTgzODA1Igw0Ya%2Bp8p94XYxsHyMq3AOfcFQeP3y4oDUpYwl%2FqDvywIbMN6seIaW3n7rHDtWL9iimgisghbk5yWUuHd1jJ8mZ4AI4yHK14wAZYYuj32FCVU32KuhDwuEuUA9QXZniJ6whjpoCPx%2FaUyhCUa8nbmrDZ%2F1THhRQQiY0SrC22qO42wG5JM5D3FoYtIyG5mehptg92%2Be68W5vaLoOXkr31vSnfYnpuf4y1D7ATTeCyJ8SjXJklXFCGlE2lEhYx0WeQMN5L5OE1yOAR%2BjBlXPx%2FV%2BZ7%2FXfD%2F7t17JW%2Bd5DPF62F3om%2Fsk%2BglzdodTAO5J%2FrMaXRWpr7HYvdWU%2FZAsUa1GXX5EstHR5m7HjCwXL3UideHfvT1lbTb14MhACII%2BUoKloqEdYpHaruA9kZszXsqJjRzxbubFMoUJQXmI0zwkB4EcveXyncYA9HoPj7%2B52qZM06M%2Ftm7H3OfEACFGAvOckm9G8AKxiWWtt4yRbduYfwYc8x9ekEpfKf9fOVwQAB%2F8K5OxtwrcmyAHYWUxnMnF2dSRCMpmUY96ACjSBKnzWDsvZHXI%2B6DhF%2FtmzYEpzgdysCgxyZ1La5j9EjDvT%2FAqi02qLnW34727jsoGMApArKyrzvKOX60Eyupp6k70BG4iJ2JBpKI%2BpNK3xvTCX25fEBjqkAbea8iQlXWEVoodr6IZeuOHpLSZDrfEb6epUc3H4NZaE7kOn00oRt89VMsTLzRlGHrXdDDwms%2FKzKcHLvmJ4bEi%2BVYmZFd4aNnJLYXta3v3f8bRvoDkPiY8itrQq9of1K6as5RmgiLDX2nff6RzfUEPFtooQD4S3SolPGE%2FAMYKsgb8jTgibw6e%2FoNalGLjP0E8K8eNahdaiT2ENMoNF4%2B%2BP%2F8iJ&X-Amz-Signature=77e993c93f7aaaa708568b1ea7b0a9968e5a537e52f4f4dd942e397ab866e741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AHAFCD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDPAHM2vDibo4PkH3gxelfTHUXgbQdwapxfTpSiBriKYwIhAMLcd6Ba7lmdVy52qlQRjIY5EyTigrJH3Wx%2BMPaV%2BoACKv8DCHIQABoMNjM3NDIzMTgzODA1Igw0Ya%2Bp8p94XYxsHyMq3AOfcFQeP3y4oDUpYwl%2FqDvywIbMN6seIaW3n7rHDtWL9iimgisghbk5yWUuHd1jJ8mZ4AI4yHK14wAZYYuj32FCVU32KuhDwuEuUA9QXZniJ6whjpoCPx%2FaUyhCUa8nbmrDZ%2F1THhRQQiY0SrC22qO42wG5JM5D3FoYtIyG5mehptg92%2Be68W5vaLoOXkr31vSnfYnpuf4y1D7ATTeCyJ8SjXJklXFCGlE2lEhYx0WeQMN5L5OE1yOAR%2BjBlXPx%2FV%2BZ7%2FXfD%2F7t17JW%2Bd5DPF62F3om%2Fsk%2BglzdodTAO5J%2FrMaXRWpr7HYvdWU%2FZAsUa1GXX5EstHR5m7HjCwXL3UideHfvT1lbTb14MhACII%2BUoKloqEdYpHaruA9kZszXsqJjRzxbubFMoUJQXmI0zwkB4EcveXyncYA9HoPj7%2B52qZM06M%2Ftm7H3OfEACFGAvOckm9G8AKxiWWtt4yRbduYfwYc8x9ekEpfKf9fOVwQAB%2F8K5OxtwrcmyAHYWUxnMnF2dSRCMpmUY96ACjSBKnzWDsvZHXI%2B6DhF%2FtmzYEpzgdysCgxyZ1La5j9EjDvT%2FAqi02qLnW34727jsoGMApArKyrzvKOX60Eyupp6k70BG4iJ2JBpKI%2BpNK3xvTCX25fEBjqkAbea8iQlXWEVoodr6IZeuOHpLSZDrfEb6epUc3H4NZaE7kOn00oRt89VMsTLzRlGHrXdDDwms%2FKzKcHLvmJ4bEi%2BVYmZFd4aNnJLYXta3v3f8bRvoDkPiY8itrQq9of1K6as5RmgiLDX2nff6RzfUEPFtooQD4S3SolPGE%2FAMYKsgb8jTgibw6e%2FoNalGLjP0E8K8eNahdaiT2ENMoNF4%2B%2BP%2F8iJ&X-Amz-Signature=2d912043821834d11a7339adb39239ac21bd7c8fa509ac2683553060996563bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AHAFCD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDPAHM2vDibo4PkH3gxelfTHUXgbQdwapxfTpSiBriKYwIhAMLcd6Ba7lmdVy52qlQRjIY5EyTigrJH3Wx%2BMPaV%2BoACKv8DCHIQABoMNjM3NDIzMTgzODA1Igw0Ya%2Bp8p94XYxsHyMq3AOfcFQeP3y4oDUpYwl%2FqDvywIbMN6seIaW3n7rHDtWL9iimgisghbk5yWUuHd1jJ8mZ4AI4yHK14wAZYYuj32FCVU32KuhDwuEuUA9QXZniJ6whjpoCPx%2FaUyhCUa8nbmrDZ%2F1THhRQQiY0SrC22qO42wG5JM5D3FoYtIyG5mehptg92%2Be68W5vaLoOXkr31vSnfYnpuf4y1D7ATTeCyJ8SjXJklXFCGlE2lEhYx0WeQMN5L5OE1yOAR%2BjBlXPx%2FV%2BZ7%2FXfD%2F7t17JW%2Bd5DPF62F3om%2Fsk%2BglzdodTAO5J%2FrMaXRWpr7HYvdWU%2FZAsUa1GXX5EstHR5m7HjCwXL3UideHfvT1lbTb14MhACII%2BUoKloqEdYpHaruA9kZszXsqJjRzxbubFMoUJQXmI0zwkB4EcveXyncYA9HoPj7%2B52qZM06M%2Ftm7H3OfEACFGAvOckm9G8AKxiWWtt4yRbduYfwYc8x9ekEpfKf9fOVwQAB%2F8K5OxtwrcmyAHYWUxnMnF2dSRCMpmUY96ACjSBKnzWDsvZHXI%2B6DhF%2FtmzYEpzgdysCgxyZ1La5j9EjDvT%2FAqi02qLnW34727jsoGMApArKyrzvKOX60Eyupp6k70BG4iJ2JBpKI%2BpNK3xvTCX25fEBjqkAbea8iQlXWEVoodr6IZeuOHpLSZDrfEb6epUc3H4NZaE7kOn00oRt89VMsTLzRlGHrXdDDwms%2FKzKcHLvmJ4bEi%2BVYmZFd4aNnJLYXta3v3f8bRvoDkPiY8itrQq9of1K6as5RmgiLDX2nff6RzfUEPFtooQD4S3SolPGE%2FAMYKsgb8jTgibw6e%2FoNalGLjP0E8K8eNahdaiT2ENMoNF4%2B%2BP%2F8iJ&X-Amz-Signature=963c5dbc064b6014a24e8e071866b5e284b24a57288617791d6dfa9882e94b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AHAFCD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDPAHM2vDibo4PkH3gxelfTHUXgbQdwapxfTpSiBriKYwIhAMLcd6Ba7lmdVy52qlQRjIY5EyTigrJH3Wx%2BMPaV%2BoACKv8DCHIQABoMNjM3NDIzMTgzODA1Igw0Ya%2Bp8p94XYxsHyMq3AOfcFQeP3y4oDUpYwl%2FqDvywIbMN6seIaW3n7rHDtWL9iimgisghbk5yWUuHd1jJ8mZ4AI4yHK14wAZYYuj32FCVU32KuhDwuEuUA9QXZniJ6whjpoCPx%2FaUyhCUa8nbmrDZ%2F1THhRQQiY0SrC22qO42wG5JM5D3FoYtIyG5mehptg92%2Be68W5vaLoOXkr31vSnfYnpuf4y1D7ATTeCyJ8SjXJklXFCGlE2lEhYx0WeQMN5L5OE1yOAR%2BjBlXPx%2FV%2BZ7%2FXfD%2F7t17JW%2Bd5DPF62F3om%2Fsk%2BglzdodTAO5J%2FrMaXRWpr7HYvdWU%2FZAsUa1GXX5EstHR5m7HjCwXL3UideHfvT1lbTb14MhACII%2BUoKloqEdYpHaruA9kZszXsqJjRzxbubFMoUJQXmI0zwkB4EcveXyncYA9HoPj7%2B52qZM06M%2Ftm7H3OfEACFGAvOckm9G8AKxiWWtt4yRbduYfwYc8x9ekEpfKf9fOVwQAB%2F8K5OxtwrcmyAHYWUxnMnF2dSRCMpmUY96ACjSBKnzWDsvZHXI%2B6DhF%2FtmzYEpzgdysCgxyZ1La5j9EjDvT%2FAqi02qLnW34727jsoGMApArKyrzvKOX60Eyupp6k70BG4iJ2JBpKI%2BpNK3xvTCX25fEBjqkAbea8iQlXWEVoodr6IZeuOHpLSZDrfEb6epUc3H4NZaE7kOn00oRt89VMsTLzRlGHrXdDDwms%2FKzKcHLvmJ4bEi%2BVYmZFd4aNnJLYXta3v3f8bRvoDkPiY8itrQq9of1K6as5RmgiLDX2nff6RzfUEPFtooQD4S3SolPGE%2FAMYKsgb8jTgibw6e%2FoNalGLjP0E8K8eNahdaiT2ENMoNF4%2B%2BP%2F8iJ&X-Amz-Signature=4e7b34b860cc5798d1f9493d757d337145b98e52a73eae35824c250fd073d7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AHAFCD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDPAHM2vDibo4PkH3gxelfTHUXgbQdwapxfTpSiBriKYwIhAMLcd6Ba7lmdVy52qlQRjIY5EyTigrJH3Wx%2BMPaV%2BoACKv8DCHIQABoMNjM3NDIzMTgzODA1Igw0Ya%2Bp8p94XYxsHyMq3AOfcFQeP3y4oDUpYwl%2FqDvywIbMN6seIaW3n7rHDtWL9iimgisghbk5yWUuHd1jJ8mZ4AI4yHK14wAZYYuj32FCVU32KuhDwuEuUA9QXZniJ6whjpoCPx%2FaUyhCUa8nbmrDZ%2F1THhRQQiY0SrC22qO42wG5JM5D3FoYtIyG5mehptg92%2Be68W5vaLoOXkr31vSnfYnpuf4y1D7ATTeCyJ8SjXJklXFCGlE2lEhYx0WeQMN5L5OE1yOAR%2BjBlXPx%2FV%2BZ7%2FXfD%2F7t17JW%2Bd5DPF62F3om%2Fsk%2BglzdodTAO5J%2FrMaXRWpr7HYvdWU%2FZAsUa1GXX5EstHR5m7HjCwXL3UideHfvT1lbTb14MhACII%2BUoKloqEdYpHaruA9kZszXsqJjRzxbubFMoUJQXmI0zwkB4EcveXyncYA9HoPj7%2B52qZM06M%2Ftm7H3OfEACFGAvOckm9G8AKxiWWtt4yRbduYfwYc8x9ekEpfKf9fOVwQAB%2F8K5OxtwrcmyAHYWUxnMnF2dSRCMpmUY96ACjSBKnzWDsvZHXI%2B6DhF%2FtmzYEpzgdysCgxyZ1La5j9EjDvT%2FAqi02qLnW34727jsoGMApArKyrzvKOX60Eyupp6k70BG4iJ2JBpKI%2BpNK3xvTCX25fEBjqkAbea8iQlXWEVoodr6IZeuOHpLSZDrfEb6epUc3H4NZaE7kOn00oRt89VMsTLzRlGHrXdDDwms%2FKzKcHLvmJ4bEi%2BVYmZFd4aNnJLYXta3v3f8bRvoDkPiY8itrQq9of1K6as5RmgiLDX2nff6RzfUEPFtooQD4S3SolPGE%2FAMYKsgb8jTgibw6e%2FoNalGLjP0E8K8eNahdaiT2ENMoNF4%2B%2BP%2F8iJ&X-Amz-Signature=d03432539506de4f3f13102a4e17b0b61c0b089f71b0ce9be6c7d7272f0b17d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AHAFCD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDPAHM2vDibo4PkH3gxelfTHUXgbQdwapxfTpSiBriKYwIhAMLcd6Ba7lmdVy52qlQRjIY5EyTigrJH3Wx%2BMPaV%2BoACKv8DCHIQABoMNjM3NDIzMTgzODA1Igw0Ya%2Bp8p94XYxsHyMq3AOfcFQeP3y4oDUpYwl%2FqDvywIbMN6seIaW3n7rHDtWL9iimgisghbk5yWUuHd1jJ8mZ4AI4yHK14wAZYYuj32FCVU32KuhDwuEuUA9QXZniJ6whjpoCPx%2FaUyhCUa8nbmrDZ%2F1THhRQQiY0SrC22qO42wG5JM5D3FoYtIyG5mehptg92%2Be68W5vaLoOXkr31vSnfYnpuf4y1D7ATTeCyJ8SjXJklXFCGlE2lEhYx0WeQMN5L5OE1yOAR%2BjBlXPx%2FV%2BZ7%2FXfD%2F7t17JW%2Bd5DPF62F3om%2Fsk%2BglzdodTAO5J%2FrMaXRWpr7HYvdWU%2FZAsUa1GXX5EstHR5m7HjCwXL3UideHfvT1lbTb14MhACII%2BUoKloqEdYpHaruA9kZszXsqJjRzxbubFMoUJQXmI0zwkB4EcveXyncYA9HoPj7%2B52qZM06M%2Ftm7H3OfEACFGAvOckm9G8AKxiWWtt4yRbduYfwYc8x9ekEpfKf9fOVwQAB%2F8K5OxtwrcmyAHYWUxnMnF2dSRCMpmUY96ACjSBKnzWDsvZHXI%2B6DhF%2FtmzYEpzgdysCgxyZ1La5j9EjDvT%2FAqi02qLnW34727jsoGMApArKyrzvKOX60Eyupp6k70BG4iJ2JBpKI%2BpNK3xvTCX25fEBjqkAbea8iQlXWEVoodr6IZeuOHpLSZDrfEb6epUc3H4NZaE7kOn00oRt89VMsTLzRlGHrXdDDwms%2FKzKcHLvmJ4bEi%2BVYmZFd4aNnJLYXta3v3f8bRvoDkPiY8itrQq9of1K6as5RmgiLDX2nff6RzfUEPFtooQD4S3SolPGE%2FAMYKsgb8jTgibw6e%2FoNalGLjP0E8K8eNahdaiT2ENMoNF4%2B%2BP%2F8iJ&X-Amz-Signature=9ae77a134e574b8b08ec495e57e6b1acfc3ce2f377f2858153545ce429f8e4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AHAFCD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDPAHM2vDibo4PkH3gxelfTHUXgbQdwapxfTpSiBriKYwIhAMLcd6Ba7lmdVy52qlQRjIY5EyTigrJH3Wx%2BMPaV%2BoACKv8DCHIQABoMNjM3NDIzMTgzODA1Igw0Ya%2Bp8p94XYxsHyMq3AOfcFQeP3y4oDUpYwl%2FqDvywIbMN6seIaW3n7rHDtWL9iimgisghbk5yWUuHd1jJ8mZ4AI4yHK14wAZYYuj32FCVU32KuhDwuEuUA9QXZniJ6whjpoCPx%2FaUyhCUa8nbmrDZ%2F1THhRQQiY0SrC22qO42wG5JM5D3FoYtIyG5mehptg92%2Be68W5vaLoOXkr31vSnfYnpuf4y1D7ATTeCyJ8SjXJklXFCGlE2lEhYx0WeQMN5L5OE1yOAR%2BjBlXPx%2FV%2BZ7%2FXfD%2F7t17JW%2Bd5DPF62F3om%2Fsk%2BglzdodTAO5J%2FrMaXRWpr7HYvdWU%2FZAsUa1GXX5EstHR5m7HjCwXL3UideHfvT1lbTb14MhACII%2BUoKloqEdYpHaruA9kZszXsqJjRzxbubFMoUJQXmI0zwkB4EcveXyncYA9HoPj7%2B52qZM06M%2Ftm7H3OfEACFGAvOckm9G8AKxiWWtt4yRbduYfwYc8x9ekEpfKf9fOVwQAB%2F8K5OxtwrcmyAHYWUxnMnF2dSRCMpmUY96ACjSBKnzWDsvZHXI%2B6DhF%2FtmzYEpzgdysCgxyZ1La5j9EjDvT%2FAqi02qLnW34727jsoGMApArKyrzvKOX60Eyupp6k70BG4iJ2JBpKI%2BpNK3xvTCX25fEBjqkAbea8iQlXWEVoodr6IZeuOHpLSZDrfEb6epUc3H4NZaE7kOn00oRt89VMsTLzRlGHrXdDDwms%2FKzKcHLvmJ4bEi%2BVYmZFd4aNnJLYXta3v3f8bRvoDkPiY8itrQq9of1K6as5RmgiLDX2nff6RzfUEPFtooQD4S3SolPGE%2FAMYKsgb8jTgibw6e%2FoNalGLjP0E8K8eNahdaiT2ENMoNF4%2B%2BP%2F8iJ&X-Amz-Signature=2748e2779ce681edf9b6d726bc07afaaadcd5c4ac8723e5fa9af864b88461130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

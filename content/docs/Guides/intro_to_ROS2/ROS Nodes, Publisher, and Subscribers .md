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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJE7FHWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG9JH46pPieDxjTMh6aZk3TlkMgv40Eb%2FqVa6pzVUvdAiADeBc8%2Fx372VhGhurQ5pyfl8F1TgJIdbq775SV8Ooc2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDY4YPUwwPX9bpZ7JKtwD7ndzjKMGMM6%2FYyl2fU67qCf7MMNVIycKSpW2Q9Oi8Zyb08b1JLCqB%2BWmsL2xsHQNwYNFEY1xKoWAgHEYaDLdfbCO7Wjrgf4Uhjs8qdR9fnO2%2Fg6OfrlsiDH47EEjOQiCLJKxWpSJY1E0bWmrvZuwpux%2FtwFMxztwIVbsSAYltPaaNw%2BdmynjrK417AJ3EM3ftUQ0DuT00PCuFqx41jH%2FKND%2F3tbmurvFsjVcxzjGg1I8wJUJ%2BOmJBYuAUQznuBnC6vloM7N2Su3cWVLoyPPOGfyKMFNAUe6tXflb9ywELGVG43oFEiNGz2d2%2BthDutna2NLe2NWtnj92Knu4GVRLkNVSibwbyAoVi3MP2xC3efl7V76Gyl%2BEEYzT%2Bch1X6zdTb%2FsOrq5edNAlOcbfs96LuZAY%2BvFTvr3flIVaOR6cB0z0sdQW2oKYRC7LjBZwtDOYNI13mw%2FWymO9volz1aRQ9X3V%2BOjQ4YDUKC10bfl5KVeTy%2F1D5E%2FddES%2FeHdQsWrG0mT9Bh572jRevWm2Gnzvizbiw9AzKCGhzlNZzh8VEAXbf802sdv9nyz%2FEc6xfNnfHOwwq3G8aeSvTxMDcWW%2Bau7dGFHWKW1pQvNNFsHNvnr%2FzXP%2FSEJxtZELCMwx7%2FRvgY6pgFQ7I77mdxMgQpGMDS%2BJozH9q6XyBYFWp2gxXwz0Bs95KICbm2HP1wGtZvAVveSqp0wZmtH%2F6YS77to9kfcfPwuJYVRl5YOVWQ4%2B3vqWFCv31OAjw6uN%2F4IwQunjIHZx1ApR%2BeOa3yhdPzEIAQIlJqd5Vgoy6W6UO2dAhIyNmjntDMBhjvuWixb1f6CmHGdq5N7aoGIVUkwe3cUMTFmZgsRN4PItJ55&X-Amz-Signature=f61281678f733434b9db09fd88c1fb74a6ad9a20746a9d6239c9f0a90b6def06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJE7FHWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG9JH46pPieDxjTMh6aZk3TlkMgv40Eb%2FqVa6pzVUvdAiADeBc8%2Fx372VhGhurQ5pyfl8F1TgJIdbq775SV8Ooc2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDY4YPUwwPX9bpZ7JKtwD7ndzjKMGMM6%2FYyl2fU67qCf7MMNVIycKSpW2Q9Oi8Zyb08b1JLCqB%2BWmsL2xsHQNwYNFEY1xKoWAgHEYaDLdfbCO7Wjrgf4Uhjs8qdR9fnO2%2Fg6OfrlsiDH47EEjOQiCLJKxWpSJY1E0bWmrvZuwpux%2FtwFMxztwIVbsSAYltPaaNw%2BdmynjrK417AJ3EM3ftUQ0DuT00PCuFqx41jH%2FKND%2F3tbmurvFsjVcxzjGg1I8wJUJ%2BOmJBYuAUQznuBnC6vloM7N2Su3cWVLoyPPOGfyKMFNAUe6tXflb9ywELGVG43oFEiNGz2d2%2BthDutna2NLe2NWtnj92Knu4GVRLkNVSibwbyAoVi3MP2xC3efl7V76Gyl%2BEEYzT%2Bch1X6zdTb%2FsOrq5edNAlOcbfs96LuZAY%2BvFTvr3flIVaOR6cB0z0sdQW2oKYRC7LjBZwtDOYNI13mw%2FWymO9volz1aRQ9X3V%2BOjQ4YDUKC10bfl5KVeTy%2F1D5E%2FddES%2FeHdQsWrG0mT9Bh572jRevWm2Gnzvizbiw9AzKCGhzlNZzh8VEAXbf802sdv9nyz%2FEc6xfNnfHOwwq3G8aeSvTxMDcWW%2Bau7dGFHWKW1pQvNNFsHNvnr%2FzXP%2FSEJxtZELCMwx7%2FRvgY6pgFQ7I77mdxMgQpGMDS%2BJozH9q6XyBYFWp2gxXwz0Bs95KICbm2HP1wGtZvAVveSqp0wZmtH%2F6YS77to9kfcfPwuJYVRl5YOVWQ4%2B3vqWFCv31OAjw6uN%2F4IwQunjIHZx1ApR%2BeOa3yhdPzEIAQIlJqd5Vgoy6W6UO2dAhIyNmjntDMBhjvuWixb1f6CmHGdq5N7aoGIVUkwe3cUMTFmZgsRN4PItJ55&X-Amz-Signature=82e829c23d764badaaee3e10bb87c6917f33230e7c992c255eac801bbb016ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJE7FHWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG9JH46pPieDxjTMh6aZk3TlkMgv40Eb%2FqVa6pzVUvdAiADeBc8%2Fx372VhGhurQ5pyfl8F1TgJIdbq775SV8Ooc2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDY4YPUwwPX9bpZ7JKtwD7ndzjKMGMM6%2FYyl2fU67qCf7MMNVIycKSpW2Q9Oi8Zyb08b1JLCqB%2BWmsL2xsHQNwYNFEY1xKoWAgHEYaDLdfbCO7Wjrgf4Uhjs8qdR9fnO2%2Fg6OfrlsiDH47EEjOQiCLJKxWpSJY1E0bWmrvZuwpux%2FtwFMxztwIVbsSAYltPaaNw%2BdmynjrK417AJ3EM3ftUQ0DuT00PCuFqx41jH%2FKND%2F3tbmurvFsjVcxzjGg1I8wJUJ%2BOmJBYuAUQznuBnC6vloM7N2Su3cWVLoyPPOGfyKMFNAUe6tXflb9ywELGVG43oFEiNGz2d2%2BthDutna2NLe2NWtnj92Knu4GVRLkNVSibwbyAoVi3MP2xC3efl7V76Gyl%2BEEYzT%2Bch1X6zdTb%2FsOrq5edNAlOcbfs96LuZAY%2BvFTvr3flIVaOR6cB0z0sdQW2oKYRC7LjBZwtDOYNI13mw%2FWymO9volz1aRQ9X3V%2BOjQ4YDUKC10bfl5KVeTy%2F1D5E%2FddES%2FeHdQsWrG0mT9Bh572jRevWm2Gnzvizbiw9AzKCGhzlNZzh8VEAXbf802sdv9nyz%2FEc6xfNnfHOwwq3G8aeSvTxMDcWW%2Bau7dGFHWKW1pQvNNFsHNvnr%2FzXP%2FSEJxtZELCMwx7%2FRvgY6pgFQ7I77mdxMgQpGMDS%2BJozH9q6XyBYFWp2gxXwz0Bs95KICbm2HP1wGtZvAVveSqp0wZmtH%2F6YS77to9kfcfPwuJYVRl5YOVWQ4%2B3vqWFCv31OAjw6uN%2F4IwQunjIHZx1ApR%2BeOa3yhdPzEIAQIlJqd5Vgoy6W6UO2dAhIyNmjntDMBhjvuWixb1f6CmHGdq5N7aoGIVUkwe3cUMTFmZgsRN4PItJ55&X-Amz-Signature=65face51033a3dd64aa0969289af00a86db759ce023473809ae612825111b87a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJE7FHWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG9JH46pPieDxjTMh6aZk3TlkMgv40Eb%2FqVa6pzVUvdAiADeBc8%2Fx372VhGhurQ5pyfl8F1TgJIdbq775SV8Ooc2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDY4YPUwwPX9bpZ7JKtwD7ndzjKMGMM6%2FYyl2fU67qCf7MMNVIycKSpW2Q9Oi8Zyb08b1JLCqB%2BWmsL2xsHQNwYNFEY1xKoWAgHEYaDLdfbCO7Wjrgf4Uhjs8qdR9fnO2%2Fg6OfrlsiDH47EEjOQiCLJKxWpSJY1E0bWmrvZuwpux%2FtwFMxztwIVbsSAYltPaaNw%2BdmynjrK417AJ3EM3ftUQ0DuT00PCuFqx41jH%2FKND%2F3tbmurvFsjVcxzjGg1I8wJUJ%2BOmJBYuAUQznuBnC6vloM7N2Su3cWVLoyPPOGfyKMFNAUe6tXflb9ywELGVG43oFEiNGz2d2%2BthDutna2NLe2NWtnj92Knu4GVRLkNVSibwbyAoVi3MP2xC3efl7V76Gyl%2BEEYzT%2Bch1X6zdTb%2FsOrq5edNAlOcbfs96LuZAY%2BvFTvr3flIVaOR6cB0z0sdQW2oKYRC7LjBZwtDOYNI13mw%2FWymO9volz1aRQ9X3V%2BOjQ4YDUKC10bfl5KVeTy%2F1D5E%2FddES%2FeHdQsWrG0mT9Bh572jRevWm2Gnzvizbiw9AzKCGhzlNZzh8VEAXbf802sdv9nyz%2FEc6xfNnfHOwwq3G8aeSvTxMDcWW%2Bau7dGFHWKW1pQvNNFsHNvnr%2FzXP%2FSEJxtZELCMwx7%2FRvgY6pgFQ7I77mdxMgQpGMDS%2BJozH9q6XyBYFWp2gxXwz0Bs95KICbm2HP1wGtZvAVveSqp0wZmtH%2F6YS77to9kfcfPwuJYVRl5YOVWQ4%2B3vqWFCv31OAjw6uN%2F4IwQunjIHZx1ApR%2BeOa3yhdPzEIAQIlJqd5Vgoy6W6UO2dAhIyNmjntDMBhjvuWixb1f6CmHGdq5N7aoGIVUkwe3cUMTFmZgsRN4PItJ55&X-Amz-Signature=1722b4f5a83f3cda05e4c07ccfa1764ff3857e21fa6d6455cd63268dddfd40dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJE7FHWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG9JH46pPieDxjTMh6aZk3TlkMgv40Eb%2FqVa6pzVUvdAiADeBc8%2Fx372VhGhurQ5pyfl8F1TgJIdbq775SV8Ooc2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDY4YPUwwPX9bpZ7JKtwD7ndzjKMGMM6%2FYyl2fU67qCf7MMNVIycKSpW2Q9Oi8Zyb08b1JLCqB%2BWmsL2xsHQNwYNFEY1xKoWAgHEYaDLdfbCO7Wjrgf4Uhjs8qdR9fnO2%2Fg6OfrlsiDH47EEjOQiCLJKxWpSJY1E0bWmrvZuwpux%2FtwFMxztwIVbsSAYltPaaNw%2BdmynjrK417AJ3EM3ftUQ0DuT00PCuFqx41jH%2FKND%2F3tbmurvFsjVcxzjGg1I8wJUJ%2BOmJBYuAUQznuBnC6vloM7N2Su3cWVLoyPPOGfyKMFNAUe6tXflb9ywELGVG43oFEiNGz2d2%2BthDutna2NLe2NWtnj92Knu4GVRLkNVSibwbyAoVi3MP2xC3efl7V76Gyl%2BEEYzT%2Bch1X6zdTb%2FsOrq5edNAlOcbfs96LuZAY%2BvFTvr3flIVaOR6cB0z0sdQW2oKYRC7LjBZwtDOYNI13mw%2FWymO9volz1aRQ9X3V%2BOjQ4YDUKC10bfl5KVeTy%2F1D5E%2FddES%2FeHdQsWrG0mT9Bh572jRevWm2Gnzvizbiw9AzKCGhzlNZzh8VEAXbf802sdv9nyz%2FEc6xfNnfHOwwq3G8aeSvTxMDcWW%2Bau7dGFHWKW1pQvNNFsHNvnr%2FzXP%2FSEJxtZELCMwx7%2FRvgY6pgFQ7I77mdxMgQpGMDS%2BJozH9q6XyBYFWp2gxXwz0Bs95KICbm2HP1wGtZvAVveSqp0wZmtH%2F6YS77to9kfcfPwuJYVRl5YOVWQ4%2B3vqWFCv31OAjw6uN%2F4IwQunjIHZx1ApR%2BeOa3yhdPzEIAQIlJqd5Vgoy6W6UO2dAhIyNmjntDMBhjvuWixb1f6CmHGdq5N7aoGIVUkwe3cUMTFmZgsRN4PItJ55&X-Amz-Signature=747b8dfa90cf2d980cc5a986dc3d0bc1e1c658ada4a65fcce5e5695dab7bb561&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJE7FHWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG9JH46pPieDxjTMh6aZk3TlkMgv40Eb%2FqVa6pzVUvdAiADeBc8%2Fx372VhGhurQ5pyfl8F1TgJIdbq775SV8Ooc2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDY4YPUwwPX9bpZ7JKtwD7ndzjKMGMM6%2FYyl2fU67qCf7MMNVIycKSpW2Q9Oi8Zyb08b1JLCqB%2BWmsL2xsHQNwYNFEY1xKoWAgHEYaDLdfbCO7Wjrgf4Uhjs8qdR9fnO2%2Fg6OfrlsiDH47EEjOQiCLJKxWpSJY1E0bWmrvZuwpux%2FtwFMxztwIVbsSAYltPaaNw%2BdmynjrK417AJ3EM3ftUQ0DuT00PCuFqx41jH%2FKND%2F3tbmurvFsjVcxzjGg1I8wJUJ%2BOmJBYuAUQznuBnC6vloM7N2Su3cWVLoyPPOGfyKMFNAUe6tXflb9ywELGVG43oFEiNGz2d2%2BthDutna2NLe2NWtnj92Knu4GVRLkNVSibwbyAoVi3MP2xC3efl7V76Gyl%2BEEYzT%2Bch1X6zdTb%2FsOrq5edNAlOcbfs96LuZAY%2BvFTvr3flIVaOR6cB0z0sdQW2oKYRC7LjBZwtDOYNI13mw%2FWymO9volz1aRQ9X3V%2BOjQ4YDUKC10bfl5KVeTy%2F1D5E%2FddES%2FeHdQsWrG0mT9Bh572jRevWm2Gnzvizbiw9AzKCGhzlNZzh8VEAXbf802sdv9nyz%2FEc6xfNnfHOwwq3G8aeSvTxMDcWW%2Bau7dGFHWKW1pQvNNFsHNvnr%2FzXP%2FSEJxtZELCMwx7%2FRvgY6pgFQ7I77mdxMgQpGMDS%2BJozH9q6XyBYFWp2gxXwz0Bs95KICbm2HP1wGtZvAVveSqp0wZmtH%2F6YS77to9kfcfPwuJYVRl5YOVWQ4%2B3vqWFCv31OAjw6uN%2F4IwQunjIHZx1ApR%2BeOa3yhdPzEIAQIlJqd5Vgoy6W6UO2dAhIyNmjntDMBhjvuWixb1f6CmHGdq5N7aoGIVUkwe3cUMTFmZgsRN4PItJ55&X-Amz-Signature=deb23d6296567841bbc517bdb4561979cab16d497801d742f24febe222a05a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJE7FHWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG9JH46pPieDxjTMh6aZk3TlkMgv40Eb%2FqVa6pzVUvdAiADeBc8%2Fx372VhGhurQ5pyfl8F1TgJIdbq775SV8Ooc2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDY4YPUwwPX9bpZ7JKtwD7ndzjKMGMM6%2FYyl2fU67qCf7MMNVIycKSpW2Q9Oi8Zyb08b1JLCqB%2BWmsL2xsHQNwYNFEY1xKoWAgHEYaDLdfbCO7Wjrgf4Uhjs8qdR9fnO2%2Fg6OfrlsiDH47EEjOQiCLJKxWpSJY1E0bWmrvZuwpux%2FtwFMxztwIVbsSAYltPaaNw%2BdmynjrK417AJ3EM3ftUQ0DuT00PCuFqx41jH%2FKND%2F3tbmurvFsjVcxzjGg1I8wJUJ%2BOmJBYuAUQznuBnC6vloM7N2Su3cWVLoyPPOGfyKMFNAUe6tXflb9ywELGVG43oFEiNGz2d2%2BthDutna2NLe2NWtnj92Knu4GVRLkNVSibwbyAoVi3MP2xC3efl7V76Gyl%2BEEYzT%2Bch1X6zdTb%2FsOrq5edNAlOcbfs96LuZAY%2BvFTvr3flIVaOR6cB0z0sdQW2oKYRC7LjBZwtDOYNI13mw%2FWymO9volz1aRQ9X3V%2BOjQ4YDUKC10bfl5KVeTy%2F1D5E%2FddES%2FeHdQsWrG0mT9Bh572jRevWm2Gnzvizbiw9AzKCGhzlNZzh8VEAXbf802sdv9nyz%2FEc6xfNnfHOwwq3G8aeSvTxMDcWW%2Bau7dGFHWKW1pQvNNFsHNvnr%2FzXP%2FSEJxtZELCMwx7%2FRvgY6pgFQ7I77mdxMgQpGMDS%2BJozH9q6XyBYFWp2gxXwz0Bs95KICbm2HP1wGtZvAVveSqp0wZmtH%2F6YS77to9kfcfPwuJYVRl5YOVWQ4%2B3vqWFCv31OAjw6uN%2F4IwQunjIHZx1ApR%2BeOa3yhdPzEIAQIlJqd5Vgoy6W6UO2dAhIyNmjntDMBhjvuWixb1f6CmHGdq5N7aoGIVUkwe3cUMTFmZgsRN4PItJ55&X-Amz-Signature=5cf9b7f57e26a82e56fb46c710e2a4a431420f7c8f0d22d8aaac648ff595a536&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJE7FHWL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG9JH46pPieDxjTMh6aZk3TlkMgv40Eb%2FqVa6pzVUvdAiADeBc8%2Fx372VhGhurQ5pyfl8F1TgJIdbq775SV8Ooc2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDY4YPUwwPX9bpZ7JKtwD7ndzjKMGMM6%2FYyl2fU67qCf7MMNVIycKSpW2Q9Oi8Zyb08b1JLCqB%2BWmsL2xsHQNwYNFEY1xKoWAgHEYaDLdfbCO7Wjrgf4Uhjs8qdR9fnO2%2Fg6OfrlsiDH47EEjOQiCLJKxWpSJY1E0bWmrvZuwpux%2FtwFMxztwIVbsSAYltPaaNw%2BdmynjrK417AJ3EM3ftUQ0DuT00PCuFqx41jH%2FKND%2F3tbmurvFsjVcxzjGg1I8wJUJ%2BOmJBYuAUQznuBnC6vloM7N2Su3cWVLoyPPOGfyKMFNAUe6tXflb9ywELGVG43oFEiNGz2d2%2BthDutna2NLe2NWtnj92Knu4GVRLkNVSibwbyAoVi3MP2xC3efl7V76Gyl%2BEEYzT%2Bch1X6zdTb%2FsOrq5edNAlOcbfs96LuZAY%2BvFTvr3flIVaOR6cB0z0sdQW2oKYRC7LjBZwtDOYNI13mw%2FWymO9volz1aRQ9X3V%2BOjQ4YDUKC10bfl5KVeTy%2F1D5E%2FddES%2FeHdQsWrG0mT9Bh572jRevWm2Gnzvizbiw9AzKCGhzlNZzh8VEAXbf802sdv9nyz%2FEc6xfNnfHOwwq3G8aeSvTxMDcWW%2Bau7dGFHWKW1pQvNNFsHNvnr%2FzXP%2FSEJxtZELCMwx7%2FRvgY6pgFQ7I77mdxMgQpGMDS%2BJozH9q6XyBYFWp2gxXwz0Bs95KICbm2HP1wGtZvAVveSqp0wZmtH%2F6YS77to9kfcfPwuJYVRl5YOVWQ4%2B3vqWFCv31OAjw6uN%2F4IwQunjIHZx1ApR%2BeOa3yhdPzEIAQIlJqd5Vgoy6W6UO2dAhIyNmjntDMBhjvuWixb1f6CmHGdq5N7aoGIVUkwe3cUMTFmZgsRN4PItJ55&X-Amz-Signature=a84cd22bea628feb235f41d23a89a1606c0e1056871eb03fe9af2092c7716adf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

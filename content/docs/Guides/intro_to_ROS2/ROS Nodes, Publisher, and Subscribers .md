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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGFXUMY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD39wUSJUtScEHUQJDtYZKX1l6inLPomTJIhNhxhAd3zQIhAIRaJW5OesPWcfiTlZwXvgd9CwEiJewmtc2PLcyHpRwzKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibUCV1zawxKTQEbIq3AO6yKKVNmPnM%2FlERyrJiB2BYUFNI8aeAo%2Ba1%2BotnNfSLepgqFmpccD6RBUdtspmq2wa%2BSFqZLSV18WUsuIeugaVYl790kNddZ2nWBlczt%2FYA3w75OUCVHjytA8DL8byC7ThzJYG0bzrWk4F9qmWALfKBeAhkrbnT0WqrVnb6XZCZtsPfWpazaU3%2Fp0dlvv0XX%2BaPpdE19DJH3v0g0kOFOSC5rTmYZQInw4lW8fKwH%2Bh4vOwEiW%2FlzgDGmgjPrnTQ6%2B379oKezrA5%2BavXHHvp8aKbKk%2FHkHyGudQSzS8DVB254s4MCJfAPeMU3SN1%2FLAXHDpIaM%2F5oNhxtQNyOW%2BaNQj3oshb6eTLER91A0i9ZIQuEg8YB8laihmQ4wsJwmErpp1ozM1DXq%2FcQN7m30EMccoPYNVCQRLfTfjXUmmKJrwFRt98Et8SlGBBYZ6sZ%2FfO1Lewb5MpgMKlGVMf3PtWYlP3L0t5GALqj08quWGvDx3lB52HC%2BxLsBv9NeQlhSCnQ%2BKKXT7iIQuyZYnwFMrinzwlEajvzJGCSbqKXgpNb3gJxv5dBs3geTwRfp6UGpmPOJYnzgQhFKLbUEbGFIC02L3KL%2BS3NAXHYD8zZR2PM%2FcYfEIGie3iHHp%2Bn0INzC8yrHDBjqkAVNiFceTdsL7dGyr1BZRGVIGa0fsFEwr2210bGHQfcyVAZorAKV2p5kH0KrFDGdFDBReDWNhprv6WCiWB%2B7BsHCN3I2s46w6RPVtBhYWkdr9PSG1htbZg12X%2BRMmLXRQGhHEdFDt6IY9Nj%2Bj7IjdjvGLSlYq%2BjuAORLVuEiIYpJjmTSvXgO4N3zlmV6SU2pZaw6uIqxyywzB%2ByLieYC1qwpqwYQy&X-Amz-Signature=5414180a3c05487de0f5d7effb91f00e5a39374f6c4feb9af31727e2d7dd8df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGFXUMY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD39wUSJUtScEHUQJDtYZKX1l6inLPomTJIhNhxhAd3zQIhAIRaJW5OesPWcfiTlZwXvgd9CwEiJewmtc2PLcyHpRwzKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibUCV1zawxKTQEbIq3AO6yKKVNmPnM%2FlERyrJiB2BYUFNI8aeAo%2Ba1%2BotnNfSLepgqFmpccD6RBUdtspmq2wa%2BSFqZLSV18WUsuIeugaVYl790kNddZ2nWBlczt%2FYA3w75OUCVHjytA8DL8byC7ThzJYG0bzrWk4F9qmWALfKBeAhkrbnT0WqrVnb6XZCZtsPfWpazaU3%2Fp0dlvv0XX%2BaPpdE19DJH3v0g0kOFOSC5rTmYZQInw4lW8fKwH%2Bh4vOwEiW%2FlzgDGmgjPrnTQ6%2B379oKezrA5%2BavXHHvp8aKbKk%2FHkHyGudQSzS8DVB254s4MCJfAPeMU3SN1%2FLAXHDpIaM%2F5oNhxtQNyOW%2BaNQj3oshb6eTLER91A0i9ZIQuEg8YB8laihmQ4wsJwmErpp1ozM1DXq%2FcQN7m30EMccoPYNVCQRLfTfjXUmmKJrwFRt98Et8SlGBBYZ6sZ%2FfO1Lewb5MpgMKlGVMf3PtWYlP3L0t5GALqj08quWGvDx3lB52HC%2BxLsBv9NeQlhSCnQ%2BKKXT7iIQuyZYnwFMrinzwlEajvzJGCSbqKXgpNb3gJxv5dBs3geTwRfp6UGpmPOJYnzgQhFKLbUEbGFIC02L3KL%2BS3NAXHYD8zZR2PM%2FcYfEIGie3iHHp%2Bn0INzC8yrHDBjqkAVNiFceTdsL7dGyr1BZRGVIGa0fsFEwr2210bGHQfcyVAZorAKV2p5kH0KrFDGdFDBReDWNhprv6WCiWB%2B7BsHCN3I2s46w6RPVtBhYWkdr9PSG1htbZg12X%2BRMmLXRQGhHEdFDt6IY9Nj%2Bj7IjdjvGLSlYq%2BjuAORLVuEiIYpJjmTSvXgO4N3zlmV6SU2pZaw6uIqxyywzB%2ByLieYC1qwpqwYQy&X-Amz-Signature=32425ab77652d9080ef6d8219ff0c622965072de72de12b01891e710815c80b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGFXUMY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD39wUSJUtScEHUQJDtYZKX1l6inLPomTJIhNhxhAd3zQIhAIRaJW5OesPWcfiTlZwXvgd9CwEiJewmtc2PLcyHpRwzKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibUCV1zawxKTQEbIq3AO6yKKVNmPnM%2FlERyrJiB2BYUFNI8aeAo%2Ba1%2BotnNfSLepgqFmpccD6RBUdtspmq2wa%2BSFqZLSV18WUsuIeugaVYl790kNddZ2nWBlczt%2FYA3w75OUCVHjytA8DL8byC7ThzJYG0bzrWk4F9qmWALfKBeAhkrbnT0WqrVnb6XZCZtsPfWpazaU3%2Fp0dlvv0XX%2BaPpdE19DJH3v0g0kOFOSC5rTmYZQInw4lW8fKwH%2Bh4vOwEiW%2FlzgDGmgjPrnTQ6%2B379oKezrA5%2BavXHHvp8aKbKk%2FHkHyGudQSzS8DVB254s4MCJfAPeMU3SN1%2FLAXHDpIaM%2F5oNhxtQNyOW%2BaNQj3oshb6eTLER91A0i9ZIQuEg8YB8laihmQ4wsJwmErpp1ozM1DXq%2FcQN7m30EMccoPYNVCQRLfTfjXUmmKJrwFRt98Et8SlGBBYZ6sZ%2FfO1Lewb5MpgMKlGVMf3PtWYlP3L0t5GALqj08quWGvDx3lB52HC%2BxLsBv9NeQlhSCnQ%2BKKXT7iIQuyZYnwFMrinzwlEajvzJGCSbqKXgpNb3gJxv5dBs3geTwRfp6UGpmPOJYnzgQhFKLbUEbGFIC02L3KL%2BS3NAXHYD8zZR2PM%2FcYfEIGie3iHHp%2Bn0INzC8yrHDBjqkAVNiFceTdsL7dGyr1BZRGVIGa0fsFEwr2210bGHQfcyVAZorAKV2p5kH0KrFDGdFDBReDWNhprv6WCiWB%2B7BsHCN3I2s46w6RPVtBhYWkdr9PSG1htbZg12X%2BRMmLXRQGhHEdFDt6IY9Nj%2Bj7IjdjvGLSlYq%2BjuAORLVuEiIYpJjmTSvXgO4N3zlmV6SU2pZaw6uIqxyywzB%2ByLieYC1qwpqwYQy&X-Amz-Signature=5995233d9b552479b65aaee4254addfa4e42c1e82ed0e78af8ffc32af25a5f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGFXUMY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD39wUSJUtScEHUQJDtYZKX1l6inLPomTJIhNhxhAd3zQIhAIRaJW5OesPWcfiTlZwXvgd9CwEiJewmtc2PLcyHpRwzKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibUCV1zawxKTQEbIq3AO6yKKVNmPnM%2FlERyrJiB2BYUFNI8aeAo%2Ba1%2BotnNfSLepgqFmpccD6RBUdtspmq2wa%2BSFqZLSV18WUsuIeugaVYl790kNddZ2nWBlczt%2FYA3w75OUCVHjytA8DL8byC7ThzJYG0bzrWk4F9qmWALfKBeAhkrbnT0WqrVnb6XZCZtsPfWpazaU3%2Fp0dlvv0XX%2BaPpdE19DJH3v0g0kOFOSC5rTmYZQInw4lW8fKwH%2Bh4vOwEiW%2FlzgDGmgjPrnTQ6%2B379oKezrA5%2BavXHHvp8aKbKk%2FHkHyGudQSzS8DVB254s4MCJfAPeMU3SN1%2FLAXHDpIaM%2F5oNhxtQNyOW%2BaNQj3oshb6eTLER91A0i9ZIQuEg8YB8laihmQ4wsJwmErpp1ozM1DXq%2FcQN7m30EMccoPYNVCQRLfTfjXUmmKJrwFRt98Et8SlGBBYZ6sZ%2FfO1Lewb5MpgMKlGVMf3PtWYlP3L0t5GALqj08quWGvDx3lB52HC%2BxLsBv9NeQlhSCnQ%2BKKXT7iIQuyZYnwFMrinzwlEajvzJGCSbqKXgpNb3gJxv5dBs3geTwRfp6UGpmPOJYnzgQhFKLbUEbGFIC02L3KL%2BS3NAXHYD8zZR2PM%2FcYfEIGie3iHHp%2Bn0INzC8yrHDBjqkAVNiFceTdsL7dGyr1BZRGVIGa0fsFEwr2210bGHQfcyVAZorAKV2p5kH0KrFDGdFDBReDWNhprv6WCiWB%2B7BsHCN3I2s46w6RPVtBhYWkdr9PSG1htbZg12X%2BRMmLXRQGhHEdFDt6IY9Nj%2Bj7IjdjvGLSlYq%2BjuAORLVuEiIYpJjmTSvXgO4N3zlmV6SU2pZaw6uIqxyywzB%2ByLieYC1qwpqwYQy&X-Amz-Signature=d1dac093cccb6f5d2d6493c77b2394a4af6c629db7da41ea59b27719de9f7d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGFXUMY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD39wUSJUtScEHUQJDtYZKX1l6inLPomTJIhNhxhAd3zQIhAIRaJW5OesPWcfiTlZwXvgd9CwEiJewmtc2PLcyHpRwzKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibUCV1zawxKTQEbIq3AO6yKKVNmPnM%2FlERyrJiB2BYUFNI8aeAo%2Ba1%2BotnNfSLepgqFmpccD6RBUdtspmq2wa%2BSFqZLSV18WUsuIeugaVYl790kNddZ2nWBlczt%2FYA3w75OUCVHjytA8DL8byC7ThzJYG0bzrWk4F9qmWALfKBeAhkrbnT0WqrVnb6XZCZtsPfWpazaU3%2Fp0dlvv0XX%2BaPpdE19DJH3v0g0kOFOSC5rTmYZQInw4lW8fKwH%2Bh4vOwEiW%2FlzgDGmgjPrnTQ6%2B379oKezrA5%2BavXHHvp8aKbKk%2FHkHyGudQSzS8DVB254s4MCJfAPeMU3SN1%2FLAXHDpIaM%2F5oNhxtQNyOW%2BaNQj3oshb6eTLER91A0i9ZIQuEg8YB8laihmQ4wsJwmErpp1ozM1DXq%2FcQN7m30EMccoPYNVCQRLfTfjXUmmKJrwFRt98Et8SlGBBYZ6sZ%2FfO1Lewb5MpgMKlGVMf3PtWYlP3L0t5GALqj08quWGvDx3lB52HC%2BxLsBv9NeQlhSCnQ%2BKKXT7iIQuyZYnwFMrinzwlEajvzJGCSbqKXgpNb3gJxv5dBs3geTwRfp6UGpmPOJYnzgQhFKLbUEbGFIC02L3KL%2BS3NAXHYD8zZR2PM%2FcYfEIGie3iHHp%2Bn0INzC8yrHDBjqkAVNiFceTdsL7dGyr1BZRGVIGa0fsFEwr2210bGHQfcyVAZorAKV2p5kH0KrFDGdFDBReDWNhprv6WCiWB%2B7BsHCN3I2s46w6RPVtBhYWkdr9PSG1htbZg12X%2BRMmLXRQGhHEdFDt6IY9Nj%2Bj7IjdjvGLSlYq%2BjuAORLVuEiIYpJjmTSvXgO4N3zlmV6SU2pZaw6uIqxyywzB%2ByLieYC1qwpqwYQy&X-Amz-Signature=60fe82ca293addf7c44961d4a95ca5322434d260b21879ed94e1a21e58448201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGFXUMY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD39wUSJUtScEHUQJDtYZKX1l6inLPomTJIhNhxhAd3zQIhAIRaJW5OesPWcfiTlZwXvgd9CwEiJewmtc2PLcyHpRwzKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibUCV1zawxKTQEbIq3AO6yKKVNmPnM%2FlERyrJiB2BYUFNI8aeAo%2Ba1%2BotnNfSLepgqFmpccD6RBUdtspmq2wa%2BSFqZLSV18WUsuIeugaVYl790kNddZ2nWBlczt%2FYA3w75OUCVHjytA8DL8byC7ThzJYG0bzrWk4F9qmWALfKBeAhkrbnT0WqrVnb6XZCZtsPfWpazaU3%2Fp0dlvv0XX%2BaPpdE19DJH3v0g0kOFOSC5rTmYZQInw4lW8fKwH%2Bh4vOwEiW%2FlzgDGmgjPrnTQ6%2B379oKezrA5%2BavXHHvp8aKbKk%2FHkHyGudQSzS8DVB254s4MCJfAPeMU3SN1%2FLAXHDpIaM%2F5oNhxtQNyOW%2BaNQj3oshb6eTLER91A0i9ZIQuEg8YB8laihmQ4wsJwmErpp1ozM1DXq%2FcQN7m30EMccoPYNVCQRLfTfjXUmmKJrwFRt98Et8SlGBBYZ6sZ%2FfO1Lewb5MpgMKlGVMf3PtWYlP3L0t5GALqj08quWGvDx3lB52HC%2BxLsBv9NeQlhSCnQ%2BKKXT7iIQuyZYnwFMrinzwlEajvzJGCSbqKXgpNb3gJxv5dBs3geTwRfp6UGpmPOJYnzgQhFKLbUEbGFIC02L3KL%2BS3NAXHYD8zZR2PM%2FcYfEIGie3iHHp%2Bn0INzC8yrHDBjqkAVNiFceTdsL7dGyr1BZRGVIGa0fsFEwr2210bGHQfcyVAZorAKV2p5kH0KrFDGdFDBReDWNhprv6WCiWB%2B7BsHCN3I2s46w6RPVtBhYWkdr9PSG1htbZg12X%2BRMmLXRQGhHEdFDt6IY9Nj%2Bj7IjdjvGLSlYq%2BjuAORLVuEiIYpJjmTSvXgO4N3zlmV6SU2pZaw6uIqxyywzB%2ByLieYC1qwpqwYQy&X-Amz-Signature=c8ecbc898c53aa1e838d62d36ad9f085ef3ba4143c6bd3a6142ce1282be7059a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGFXUMY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD39wUSJUtScEHUQJDtYZKX1l6inLPomTJIhNhxhAd3zQIhAIRaJW5OesPWcfiTlZwXvgd9CwEiJewmtc2PLcyHpRwzKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibUCV1zawxKTQEbIq3AO6yKKVNmPnM%2FlERyrJiB2BYUFNI8aeAo%2Ba1%2BotnNfSLepgqFmpccD6RBUdtspmq2wa%2BSFqZLSV18WUsuIeugaVYl790kNddZ2nWBlczt%2FYA3w75OUCVHjytA8DL8byC7ThzJYG0bzrWk4F9qmWALfKBeAhkrbnT0WqrVnb6XZCZtsPfWpazaU3%2Fp0dlvv0XX%2BaPpdE19DJH3v0g0kOFOSC5rTmYZQInw4lW8fKwH%2Bh4vOwEiW%2FlzgDGmgjPrnTQ6%2B379oKezrA5%2BavXHHvp8aKbKk%2FHkHyGudQSzS8DVB254s4MCJfAPeMU3SN1%2FLAXHDpIaM%2F5oNhxtQNyOW%2BaNQj3oshb6eTLER91A0i9ZIQuEg8YB8laihmQ4wsJwmErpp1ozM1DXq%2FcQN7m30EMccoPYNVCQRLfTfjXUmmKJrwFRt98Et8SlGBBYZ6sZ%2FfO1Lewb5MpgMKlGVMf3PtWYlP3L0t5GALqj08quWGvDx3lB52HC%2BxLsBv9NeQlhSCnQ%2BKKXT7iIQuyZYnwFMrinzwlEajvzJGCSbqKXgpNb3gJxv5dBs3geTwRfp6UGpmPOJYnzgQhFKLbUEbGFIC02L3KL%2BS3NAXHYD8zZR2PM%2FcYfEIGie3iHHp%2Bn0INzC8yrHDBjqkAVNiFceTdsL7dGyr1BZRGVIGa0fsFEwr2210bGHQfcyVAZorAKV2p5kH0KrFDGdFDBReDWNhprv6WCiWB%2B7BsHCN3I2s46w6RPVtBhYWkdr9PSG1htbZg12X%2BRMmLXRQGhHEdFDt6IY9Nj%2Bj7IjdjvGLSlYq%2BjuAORLVuEiIYpJjmTSvXgO4N3zlmV6SU2pZaw6uIqxyywzB%2ByLieYC1qwpqwYQy&X-Amz-Signature=3aa4f356be6e2fb90969113ed0c9a7d807073f895ea96ef73db2b55a76a836f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGFXUMY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD39wUSJUtScEHUQJDtYZKX1l6inLPomTJIhNhxhAd3zQIhAIRaJW5OesPWcfiTlZwXvgd9CwEiJewmtc2PLcyHpRwzKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyibUCV1zawxKTQEbIq3AO6yKKVNmPnM%2FlERyrJiB2BYUFNI8aeAo%2Ba1%2BotnNfSLepgqFmpccD6RBUdtspmq2wa%2BSFqZLSV18WUsuIeugaVYl790kNddZ2nWBlczt%2FYA3w75OUCVHjytA8DL8byC7ThzJYG0bzrWk4F9qmWALfKBeAhkrbnT0WqrVnb6XZCZtsPfWpazaU3%2Fp0dlvv0XX%2BaPpdE19DJH3v0g0kOFOSC5rTmYZQInw4lW8fKwH%2Bh4vOwEiW%2FlzgDGmgjPrnTQ6%2B379oKezrA5%2BavXHHvp8aKbKk%2FHkHyGudQSzS8DVB254s4MCJfAPeMU3SN1%2FLAXHDpIaM%2F5oNhxtQNyOW%2BaNQj3oshb6eTLER91A0i9ZIQuEg8YB8laihmQ4wsJwmErpp1ozM1DXq%2FcQN7m30EMccoPYNVCQRLfTfjXUmmKJrwFRt98Et8SlGBBYZ6sZ%2FfO1Lewb5MpgMKlGVMf3PtWYlP3L0t5GALqj08quWGvDx3lB52HC%2BxLsBv9NeQlhSCnQ%2BKKXT7iIQuyZYnwFMrinzwlEajvzJGCSbqKXgpNb3gJxv5dBs3geTwRfp6UGpmPOJYnzgQhFKLbUEbGFIC02L3KL%2BS3NAXHYD8zZR2PM%2FcYfEIGie3iHHp%2Bn0INzC8yrHDBjqkAVNiFceTdsL7dGyr1BZRGVIGa0fsFEwr2210bGHQfcyVAZorAKV2p5kH0KrFDGdFDBReDWNhprv6WCiWB%2B7BsHCN3I2s46w6RPVtBhYWkdr9PSG1htbZg12X%2BRMmLXRQGhHEdFDt6IY9Nj%2Bj7IjdjvGLSlYq%2BjuAORLVuEiIYpJjmTSvXgO4N3zlmV6SU2pZaw6uIqxyywzB%2ByLieYC1qwpqwYQy&X-Amz-Signature=639218e3092743bdc70e5a29e8cacb00a01a364902f21695c57492e0e5ad2614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HIAN2P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0x%2Fa0QWDmINPRx55l3VlMuVQjjuxV%2B%2FHtHqA78vPYDAIhAOFqs5%2Fvm6DbOynbPVCvTalnq3QtRrTt2hQ7aRqd7vfUKv8DCBoQABoMNjM3NDIzMTgzODA1IgzEAk2YAYzT%2B%2B3EcvMq3APvAf%2Fiv9qUXM1Nnp2K%2BkxaQ%2BtCXf%2FP%2Bl3DVwUypjtRz4fG1r7z9dJZOHKMykA8vcSksMl1fNWzWGCr4NSytIxMu6J0EcLgXk4L59IDWPOqQnM3im5tPCSpv4uhL3OiXmhIrpy50vv2dJG7gfVupeWU2X1y9UCw6LMFO%2BtVqC4ByXNNs59hryHam4XB8Aox1nRw8YR6xMfEauxaDF76hAMTcy40nVMigFuJO6gCEbrY%2B2jy6jY1njx%2BVJC4Dq3CPO2xJSzqXkLCP0S3e8B%2FxAXwgYR0f0Gf9xvsW%2BmfJUSIXVvWf5TdR4OsSJwadmhBhGp7FBj5FjWzp8nPqmffOzmOu6d4%2FCJPb7Qn1r0yLAus9%2FoXb9gWRa7mk%2BIU3mWLlBxQ60jNu7CtDU6CZljikjKsmXQbMUmDjobpXCQYc5S2f9%2F7iSgEyxQKRtN3PVfbLvtzHgI9n1h7JaXhJf%2Bit9FwSkWwlH%2BYgW3IjyzNHNwYwiXCPrCk3QGFwX%2BLc%2B1L0atTvWEhGDqsxzF7DpCUVandNglDsn4GcvInp898fHADXoNf8si5FVpalA0OS%2BzpQ6p2AGQUvoALUK%2FAAEZT8fxCwfCmaFwQn6YFKcTlzYPXYFoX340tGDIOynVbBzDGiJPBBjqkAYMRb0Cl7HbPn9Ym5pePvhI%2FHAso9jha3Uvzdmjl4vDYniXkDVEs7XArLiyzjYodRmfrNIP2h6sTAJQ0Nme8NXFfRSwgKOSltIDoMKXxWKbn8K6BINxCZyvFPfDHtmJ%2BVeQB7B8WqX46FjtVzdjFLQ3Ua9JCOGs46JAcZVNadXXfY833gtVYEqfZDCXUOqUmdNOxGJS%2FDEMeV7BUsMXTemK6lZop&X-Amz-Signature=47c66735df6d4009be458059896a996019def8f7ef2fbc435fb8200560d8ab97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HIAN2P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0x%2Fa0QWDmINPRx55l3VlMuVQjjuxV%2B%2FHtHqA78vPYDAIhAOFqs5%2Fvm6DbOynbPVCvTalnq3QtRrTt2hQ7aRqd7vfUKv8DCBoQABoMNjM3NDIzMTgzODA1IgzEAk2YAYzT%2B%2B3EcvMq3APvAf%2Fiv9qUXM1Nnp2K%2BkxaQ%2BtCXf%2FP%2Bl3DVwUypjtRz4fG1r7z9dJZOHKMykA8vcSksMl1fNWzWGCr4NSytIxMu6J0EcLgXk4L59IDWPOqQnM3im5tPCSpv4uhL3OiXmhIrpy50vv2dJG7gfVupeWU2X1y9UCw6LMFO%2BtVqC4ByXNNs59hryHam4XB8Aox1nRw8YR6xMfEauxaDF76hAMTcy40nVMigFuJO6gCEbrY%2B2jy6jY1njx%2BVJC4Dq3CPO2xJSzqXkLCP0S3e8B%2FxAXwgYR0f0Gf9xvsW%2BmfJUSIXVvWf5TdR4OsSJwadmhBhGp7FBj5FjWzp8nPqmffOzmOu6d4%2FCJPb7Qn1r0yLAus9%2FoXb9gWRa7mk%2BIU3mWLlBxQ60jNu7CtDU6CZljikjKsmXQbMUmDjobpXCQYc5S2f9%2F7iSgEyxQKRtN3PVfbLvtzHgI9n1h7JaXhJf%2Bit9FwSkWwlH%2BYgW3IjyzNHNwYwiXCPrCk3QGFwX%2BLc%2B1L0atTvWEhGDqsxzF7DpCUVandNglDsn4GcvInp898fHADXoNf8si5FVpalA0OS%2BzpQ6p2AGQUvoALUK%2FAAEZT8fxCwfCmaFwQn6YFKcTlzYPXYFoX340tGDIOynVbBzDGiJPBBjqkAYMRb0Cl7HbPn9Ym5pePvhI%2FHAso9jha3Uvzdmjl4vDYniXkDVEs7XArLiyzjYodRmfrNIP2h6sTAJQ0Nme8NXFfRSwgKOSltIDoMKXxWKbn8K6BINxCZyvFPfDHtmJ%2BVeQB7B8WqX46FjtVzdjFLQ3Ua9JCOGs46JAcZVNadXXfY833gtVYEqfZDCXUOqUmdNOxGJS%2FDEMeV7BUsMXTemK6lZop&X-Amz-Signature=79739970ebfed3d55aee6658cdd134c70088af9e8294c626dbfd819bdd920669&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HIAN2P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0x%2Fa0QWDmINPRx55l3VlMuVQjjuxV%2B%2FHtHqA78vPYDAIhAOFqs5%2Fvm6DbOynbPVCvTalnq3QtRrTt2hQ7aRqd7vfUKv8DCBoQABoMNjM3NDIzMTgzODA1IgzEAk2YAYzT%2B%2B3EcvMq3APvAf%2Fiv9qUXM1Nnp2K%2BkxaQ%2BtCXf%2FP%2Bl3DVwUypjtRz4fG1r7z9dJZOHKMykA8vcSksMl1fNWzWGCr4NSytIxMu6J0EcLgXk4L59IDWPOqQnM3im5tPCSpv4uhL3OiXmhIrpy50vv2dJG7gfVupeWU2X1y9UCw6LMFO%2BtVqC4ByXNNs59hryHam4XB8Aox1nRw8YR6xMfEauxaDF76hAMTcy40nVMigFuJO6gCEbrY%2B2jy6jY1njx%2BVJC4Dq3CPO2xJSzqXkLCP0S3e8B%2FxAXwgYR0f0Gf9xvsW%2BmfJUSIXVvWf5TdR4OsSJwadmhBhGp7FBj5FjWzp8nPqmffOzmOu6d4%2FCJPb7Qn1r0yLAus9%2FoXb9gWRa7mk%2BIU3mWLlBxQ60jNu7CtDU6CZljikjKsmXQbMUmDjobpXCQYc5S2f9%2F7iSgEyxQKRtN3PVfbLvtzHgI9n1h7JaXhJf%2Bit9FwSkWwlH%2BYgW3IjyzNHNwYwiXCPrCk3QGFwX%2BLc%2B1L0atTvWEhGDqsxzF7DpCUVandNglDsn4GcvInp898fHADXoNf8si5FVpalA0OS%2BzpQ6p2AGQUvoALUK%2FAAEZT8fxCwfCmaFwQn6YFKcTlzYPXYFoX340tGDIOynVbBzDGiJPBBjqkAYMRb0Cl7HbPn9Ym5pePvhI%2FHAso9jha3Uvzdmjl4vDYniXkDVEs7XArLiyzjYodRmfrNIP2h6sTAJQ0Nme8NXFfRSwgKOSltIDoMKXxWKbn8K6BINxCZyvFPfDHtmJ%2BVeQB7B8WqX46FjtVzdjFLQ3Ua9JCOGs46JAcZVNadXXfY833gtVYEqfZDCXUOqUmdNOxGJS%2FDEMeV7BUsMXTemK6lZop&X-Amz-Signature=d92275a1567840e5f2bf15c91feddbaab680e44d4e9ef10ecf1b4e68e1768a41&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HIAN2P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0x%2Fa0QWDmINPRx55l3VlMuVQjjuxV%2B%2FHtHqA78vPYDAIhAOFqs5%2Fvm6DbOynbPVCvTalnq3QtRrTt2hQ7aRqd7vfUKv8DCBoQABoMNjM3NDIzMTgzODA1IgzEAk2YAYzT%2B%2B3EcvMq3APvAf%2Fiv9qUXM1Nnp2K%2BkxaQ%2BtCXf%2FP%2Bl3DVwUypjtRz4fG1r7z9dJZOHKMykA8vcSksMl1fNWzWGCr4NSytIxMu6J0EcLgXk4L59IDWPOqQnM3im5tPCSpv4uhL3OiXmhIrpy50vv2dJG7gfVupeWU2X1y9UCw6LMFO%2BtVqC4ByXNNs59hryHam4XB8Aox1nRw8YR6xMfEauxaDF76hAMTcy40nVMigFuJO6gCEbrY%2B2jy6jY1njx%2BVJC4Dq3CPO2xJSzqXkLCP0S3e8B%2FxAXwgYR0f0Gf9xvsW%2BmfJUSIXVvWf5TdR4OsSJwadmhBhGp7FBj5FjWzp8nPqmffOzmOu6d4%2FCJPb7Qn1r0yLAus9%2FoXb9gWRa7mk%2BIU3mWLlBxQ60jNu7CtDU6CZljikjKsmXQbMUmDjobpXCQYc5S2f9%2F7iSgEyxQKRtN3PVfbLvtzHgI9n1h7JaXhJf%2Bit9FwSkWwlH%2BYgW3IjyzNHNwYwiXCPrCk3QGFwX%2BLc%2B1L0atTvWEhGDqsxzF7DpCUVandNglDsn4GcvInp898fHADXoNf8si5FVpalA0OS%2BzpQ6p2AGQUvoALUK%2FAAEZT8fxCwfCmaFwQn6YFKcTlzYPXYFoX340tGDIOynVbBzDGiJPBBjqkAYMRb0Cl7HbPn9Ym5pePvhI%2FHAso9jha3Uvzdmjl4vDYniXkDVEs7XArLiyzjYodRmfrNIP2h6sTAJQ0Nme8NXFfRSwgKOSltIDoMKXxWKbn8K6BINxCZyvFPfDHtmJ%2BVeQB7B8WqX46FjtVzdjFLQ3Ua9JCOGs46JAcZVNadXXfY833gtVYEqfZDCXUOqUmdNOxGJS%2FDEMeV7BUsMXTemK6lZop&X-Amz-Signature=fe6fea040f337e036f8eab37b9a3eadabc6bd5e9c2bd3666f3b229c6acc788d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HIAN2P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0x%2Fa0QWDmINPRx55l3VlMuVQjjuxV%2B%2FHtHqA78vPYDAIhAOFqs5%2Fvm6DbOynbPVCvTalnq3QtRrTt2hQ7aRqd7vfUKv8DCBoQABoMNjM3NDIzMTgzODA1IgzEAk2YAYzT%2B%2B3EcvMq3APvAf%2Fiv9qUXM1Nnp2K%2BkxaQ%2BtCXf%2FP%2Bl3DVwUypjtRz4fG1r7z9dJZOHKMykA8vcSksMl1fNWzWGCr4NSytIxMu6J0EcLgXk4L59IDWPOqQnM3im5tPCSpv4uhL3OiXmhIrpy50vv2dJG7gfVupeWU2X1y9UCw6LMFO%2BtVqC4ByXNNs59hryHam4XB8Aox1nRw8YR6xMfEauxaDF76hAMTcy40nVMigFuJO6gCEbrY%2B2jy6jY1njx%2BVJC4Dq3CPO2xJSzqXkLCP0S3e8B%2FxAXwgYR0f0Gf9xvsW%2BmfJUSIXVvWf5TdR4OsSJwadmhBhGp7FBj5FjWzp8nPqmffOzmOu6d4%2FCJPb7Qn1r0yLAus9%2FoXb9gWRa7mk%2BIU3mWLlBxQ60jNu7CtDU6CZljikjKsmXQbMUmDjobpXCQYc5S2f9%2F7iSgEyxQKRtN3PVfbLvtzHgI9n1h7JaXhJf%2Bit9FwSkWwlH%2BYgW3IjyzNHNwYwiXCPrCk3QGFwX%2BLc%2B1L0atTvWEhGDqsxzF7DpCUVandNglDsn4GcvInp898fHADXoNf8si5FVpalA0OS%2BzpQ6p2AGQUvoALUK%2FAAEZT8fxCwfCmaFwQn6YFKcTlzYPXYFoX340tGDIOynVbBzDGiJPBBjqkAYMRb0Cl7HbPn9Ym5pePvhI%2FHAso9jha3Uvzdmjl4vDYniXkDVEs7XArLiyzjYodRmfrNIP2h6sTAJQ0Nme8NXFfRSwgKOSltIDoMKXxWKbn8K6BINxCZyvFPfDHtmJ%2BVeQB7B8WqX46FjtVzdjFLQ3Ua9JCOGs46JAcZVNadXXfY833gtVYEqfZDCXUOqUmdNOxGJS%2FDEMeV7BUsMXTemK6lZop&X-Amz-Signature=46d5ee22a54dfb6107aefae7bb0f139ddf50af23f13fd5f7def2a368aa1c6314&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HIAN2P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0x%2Fa0QWDmINPRx55l3VlMuVQjjuxV%2B%2FHtHqA78vPYDAIhAOFqs5%2Fvm6DbOynbPVCvTalnq3QtRrTt2hQ7aRqd7vfUKv8DCBoQABoMNjM3NDIzMTgzODA1IgzEAk2YAYzT%2B%2B3EcvMq3APvAf%2Fiv9qUXM1Nnp2K%2BkxaQ%2BtCXf%2FP%2Bl3DVwUypjtRz4fG1r7z9dJZOHKMykA8vcSksMl1fNWzWGCr4NSytIxMu6J0EcLgXk4L59IDWPOqQnM3im5tPCSpv4uhL3OiXmhIrpy50vv2dJG7gfVupeWU2X1y9UCw6LMFO%2BtVqC4ByXNNs59hryHam4XB8Aox1nRw8YR6xMfEauxaDF76hAMTcy40nVMigFuJO6gCEbrY%2B2jy6jY1njx%2BVJC4Dq3CPO2xJSzqXkLCP0S3e8B%2FxAXwgYR0f0Gf9xvsW%2BmfJUSIXVvWf5TdR4OsSJwadmhBhGp7FBj5FjWzp8nPqmffOzmOu6d4%2FCJPb7Qn1r0yLAus9%2FoXb9gWRa7mk%2BIU3mWLlBxQ60jNu7CtDU6CZljikjKsmXQbMUmDjobpXCQYc5S2f9%2F7iSgEyxQKRtN3PVfbLvtzHgI9n1h7JaXhJf%2Bit9FwSkWwlH%2BYgW3IjyzNHNwYwiXCPrCk3QGFwX%2BLc%2B1L0atTvWEhGDqsxzF7DpCUVandNglDsn4GcvInp898fHADXoNf8si5FVpalA0OS%2BzpQ6p2AGQUvoALUK%2FAAEZT8fxCwfCmaFwQn6YFKcTlzYPXYFoX340tGDIOynVbBzDGiJPBBjqkAYMRb0Cl7HbPn9Ym5pePvhI%2FHAso9jha3Uvzdmjl4vDYniXkDVEs7XArLiyzjYodRmfrNIP2h6sTAJQ0Nme8NXFfRSwgKOSltIDoMKXxWKbn8K6BINxCZyvFPfDHtmJ%2BVeQB7B8WqX46FjtVzdjFLQ3Ua9JCOGs46JAcZVNadXXfY833gtVYEqfZDCXUOqUmdNOxGJS%2FDEMeV7BUsMXTemK6lZop&X-Amz-Signature=11e3885fe82e84d31492c9346ed10dc99f0ff76c9d66b9e8376b74673339e59b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HIAN2P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0x%2Fa0QWDmINPRx55l3VlMuVQjjuxV%2B%2FHtHqA78vPYDAIhAOFqs5%2Fvm6DbOynbPVCvTalnq3QtRrTt2hQ7aRqd7vfUKv8DCBoQABoMNjM3NDIzMTgzODA1IgzEAk2YAYzT%2B%2B3EcvMq3APvAf%2Fiv9qUXM1Nnp2K%2BkxaQ%2BtCXf%2FP%2Bl3DVwUypjtRz4fG1r7z9dJZOHKMykA8vcSksMl1fNWzWGCr4NSytIxMu6J0EcLgXk4L59IDWPOqQnM3im5tPCSpv4uhL3OiXmhIrpy50vv2dJG7gfVupeWU2X1y9UCw6LMFO%2BtVqC4ByXNNs59hryHam4XB8Aox1nRw8YR6xMfEauxaDF76hAMTcy40nVMigFuJO6gCEbrY%2B2jy6jY1njx%2BVJC4Dq3CPO2xJSzqXkLCP0S3e8B%2FxAXwgYR0f0Gf9xvsW%2BmfJUSIXVvWf5TdR4OsSJwadmhBhGp7FBj5FjWzp8nPqmffOzmOu6d4%2FCJPb7Qn1r0yLAus9%2FoXb9gWRa7mk%2BIU3mWLlBxQ60jNu7CtDU6CZljikjKsmXQbMUmDjobpXCQYc5S2f9%2F7iSgEyxQKRtN3PVfbLvtzHgI9n1h7JaXhJf%2Bit9FwSkWwlH%2BYgW3IjyzNHNwYwiXCPrCk3QGFwX%2BLc%2B1L0atTvWEhGDqsxzF7DpCUVandNglDsn4GcvInp898fHADXoNf8si5FVpalA0OS%2BzpQ6p2AGQUvoALUK%2FAAEZT8fxCwfCmaFwQn6YFKcTlzYPXYFoX340tGDIOynVbBzDGiJPBBjqkAYMRb0Cl7HbPn9Ym5pePvhI%2FHAso9jha3Uvzdmjl4vDYniXkDVEs7XArLiyzjYodRmfrNIP2h6sTAJQ0Nme8NXFfRSwgKOSltIDoMKXxWKbn8K6BINxCZyvFPfDHtmJ%2BVeQB7B8WqX46FjtVzdjFLQ3Ua9JCOGs46JAcZVNadXXfY833gtVYEqfZDCXUOqUmdNOxGJS%2FDEMeV7BUsMXTemK6lZop&X-Amz-Signature=6ca0684e6b5f4fca0670e079b289d3bb305376e7e43527e310837607e5dbb2c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HIAN2P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0x%2Fa0QWDmINPRx55l3VlMuVQjjuxV%2B%2FHtHqA78vPYDAIhAOFqs5%2Fvm6DbOynbPVCvTalnq3QtRrTt2hQ7aRqd7vfUKv8DCBoQABoMNjM3NDIzMTgzODA1IgzEAk2YAYzT%2B%2B3EcvMq3APvAf%2Fiv9qUXM1Nnp2K%2BkxaQ%2BtCXf%2FP%2Bl3DVwUypjtRz4fG1r7z9dJZOHKMykA8vcSksMl1fNWzWGCr4NSytIxMu6J0EcLgXk4L59IDWPOqQnM3im5tPCSpv4uhL3OiXmhIrpy50vv2dJG7gfVupeWU2X1y9UCw6LMFO%2BtVqC4ByXNNs59hryHam4XB8Aox1nRw8YR6xMfEauxaDF76hAMTcy40nVMigFuJO6gCEbrY%2B2jy6jY1njx%2BVJC4Dq3CPO2xJSzqXkLCP0S3e8B%2FxAXwgYR0f0Gf9xvsW%2BmfJUSIXVvWf5TdR4OsSJwadmhBhGp7FBj5FjWzp8nPqmffOzmOu6d4%2FCJPb7Qn1r0yLAus9%2FoXb9gWRa7mk%2BIU3mWLlBxQ60jNu7CtDU6CZljikjKsmXQbMUmDjobpXCQYc5S2f9%2F7iSgEyxQKRtN3PVfbLvtzHgI9n1h7JaXhJf%2Bit9FwSkWwlH%2BYgW3IjyzNHNwYwiXCPrCk3QGFwX%2BLc%2B1L0atTvWEhGDqsxzF7DpCUVandNglDsn4GcvInp898fHADXoNf8si5FVpalA0OS%2BzpQ6p2AGQUvoALUK%2FAAEZT8fxCwfCmaFwQn6YFKcTlzYPXYFoX340tGDIOynVbBzDGiJPBBjqkAYMRb0Cl7HbPn9Ym5pePvhI%2FHAso9jha3Uvzdmjl4vDYniXkDVEs7XArLiyzjYodRmfrNIP2h6sTAJQ0Nme8NXFfRSwgKOSltIDoMKXxWKbn8K6BINxCZyvFPfDHtmJ%2BVeQB7B8WqX46FjtVzdjFLQ3Ua9JCOGs46JAcZVNadXXfY833gtVYEqfZDCXUOqUmdNOxGJS%2FDEMeV7BUsMXTemK6lZop&X-Amz-Signature=9c534a56b52f5b9c9642b4d4b8463c8233e768aba8c2f86940222b0feb45a408&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

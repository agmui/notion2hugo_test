---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJGWFWM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQChzxutNrt0GQaX4ybcxyKt5NhRAyFIGcDKUR0DTJpDRwIhAMTI%2FWlpooc36u%2FmVexIvxInz02Zryo%2Fr7IQuDt%2FW9PeKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytHzE6RAXj2xWS74cq3AOS1dlsJYQhPdbZTwbNskU2%2FewNHrPyj8FADZWXYu9WhDuLDyQERPnLmsWf4hrTJFDqy0TNKs1%2F%2BEAzrVZ7iVqVIHkYylTFyZWPVJG9tuG9fXPIJRS%2B5tY48%2BCCVevjISm174yZJ1K71ekzBr%2BkIiFU9THr6Cy21nNxxlIwlVAFL8GmoysoZBRJsNbT%2BeVLuR6b63obumvOzJnwJKASXqXvy7o2LoF%2By%2FA89lqkSKBYt0vaNqDfvZcaKRJgpmPUXF%2F5i9RbV0rx0JtVay5xIDl1pPSknaPdyd5Q35forCDuKSPPT9vMafrWdhpy6Wh9WbbvNC3Ql7tH3dww28JiwNAWrnWjpuF6Ss5JLeHi4FeGDL129jDft9wT8zoYwZTc4AeMeJZJCBNKjH1W7Q%2BBbSdOHj415kpXhNfPzObm1FQBOS%2BZiosn1izVOgi0kXZRJROyIqhR%2BYvYg3BrJQHIdrARrRs5cDwXUNQ9hW9zd61j%2B6nmmcg4vRppPd%2F7B%2BRFkfpglBH8yx%2Br2LJ81hlmuNHH5RgCl5t8gRyOget1FE4hPla%2B8Wl0JF2iO3lOifUvzWKEpJDI0jzfl8zIV149bDL7fuIH%2B2nns1xatgYFudXi7ncgEZFLPogyWskeoTD6tPnTBjqkAcf3pNtiIqAgq83T8EkFwa7C3h8aoBck94O%2BpksVxFd%2FDUXxS6p%2B68cgC0U9279%2B6P4iPpaDDDOhyn1ivU05sDVvJxx2X30Y5hS4Keomcbl1c02TEGpOeyCF5vxltAixj%2F9YyCETPUioYphhqgVPDM94tGKs1V9Fhk2vJ4Aty5GQlN3FK2B%2BLciBbGDEx3whrBgHXPgfhI1lvfhMshVsIljhqa68&X-Amz-Signature=e54d5e870e5748dda07c0d36a8e8fea3f3e0e8254ec90dcbadb6f03cfe466f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJGWFWM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQChzxutNrt0GQaX4ybcxyKt5NhRAyFIGcDKUR0DTJpDRwIhAMTI%2FWlpooc36u%2FmVexIvxInz02Zryo%2Fr7IQuDt%2FW9PeKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytHzE6RAXj2xWS74cq3AOS1dlsJYQhPdbZTwbNskU2%2FewNHrPyj8FADZWXYu9WhDuLDyQERPnLmsWf4hrTJFDqy0TNKs1%2F%2BEAzrVZ7iVqVIHkYylTFyZWPVJG9tuG9fXPIJRS%2B5tY48%2BCCVevjISm174yZJ1K71ekzBr%2BkIiFU9THr6Cy21nNxxlIwlVAFL8GmoysoZBRJsNbT%2BeVLuR6b63obumvOzJnwJKASXqXvy7o2LoF%2By%2FA89lqkSKBYt0vaNqDfvZcaKRJgpmPUXF%2F5i9RbV0rx0JtVay5xIDl1pPSknaPdyd5Q35forCDuKSPPT9vMafrWdhpy6Wh9WbbvNC3Ql7tH3dww28JiwNAWrnWjpuF6Ss5JLeHi4FeGDL129jDft9wT8zoYwZTc4AeMeJZJCBNKjH1W7Q%2BBbSdOHj415kpXhNfPzObm1FQBOS%2BZiosn1izVOgi0kXZRJROyIqhR%2BYvYg3BrJQHIdrARrRs5cDwXUNQ9hW9zd61j%2B6nmmcg4vRppPd%2F7B%2BRFkfpglBH8yx%2Br2LJ81hlmuNHH5RgCl5t8gRyOget1FE4hPla%2B8Wl0JF2iO3lOifUvzWKEpJDI0jzfl8zIV149bDL7fuIH%2B2nns1xatgYFudXi7ncgEZFLPogyWskeoTD6tPnTBjqkAcf3pNtiIqAgq83T8EkFwa7C3h8aoBck94O%2BpksVxFd%2FDUXxS6p%2B68cgC0U9279%2B6P4iPpaDDDOhyn1ivU05sDVvJxx2X30Y5hS4Keomcbl1c02TEGpOeyCF5vxltAixj%2F9YyCETPUioYphhqgVPDM94tGKs1V9Fhk2vJ4Aty5GQlN3FK2B%2BLciBbGDEx3whrBgHXPgfhI1lvfhMshVsIljhqa68&X-Amz-Signature=05f0a89192b1db962fc873e31c7c22dada9619a91b01e90e923febcead5c7121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJGWFWM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQChzxutNrt0GQaX4ybcxyKt5NhRAyFIGcDKUR0DTJpDRwIhAMTI%2FWlpooc36u%2FmVexIvxInz02Zryo%2Fr7IQuDt%2FW9PeKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytHzE6RAXj2xWS74cq3AOS1dlsJYQhPdbZTwbNskU2%2FewNHrPyj8FADZWXYu9WhDuLDyQERPnLmsWf4hrTJFDqy0TNKs1%2F%2BEAzrVZ7iVqVIHkYylTFyZWPVJG9tuG9fXPIJRS%2B5tY48%2BCCVevjISm174yZJ1K71ekzBr%2BkIiFU9THr6Cy21nNxxlIwlVAFL8GmoysoZBRJsNbT%2BeVLuR6b63obumvOzJnwJKASXqXvy7o2LoF%2By%2FA89lqkSKBYt0vaNqDfvZcaKRJgpmPUXF%2F5i9RbV0rx0JtVay5xIDl1pPSknaPdyd5Q35forCDuKSPPT9vMafrWdhpy6Wh9WbbvNC3Ql7tH3dww28JiwNAWrnWjpuF6Ss5JLeHi4FeGDL129jDft9wT8zoYwZTc4AeMeJZJCBNKjH1W7Q%2BBbSdOHj415kpXhNfPzObm1FQBOS%2BZiosn1izVOgi0kXZRJROyIqhR%2BYvYg3BrJQHIdrARrRs5cDwXUNQ9hW9zd61j%2B6nmmcg4vRppPd%2F7B%2BRFkfpglBH8yx%2Br2LJ81hlmuNHH5RgCl5t8gRyOget1FE4hPla%2B8Wl0JF2iO3lOifUvzWKEpJDI0jzfl8zIV149bDL7fuIH%2B2nns1xatgYFudXi7ncgEZFLPogyWskeoTD6tPnTBjqkAcf3pNtiIqAgq83T8EkFwa7C3h8aoBck94O%2BpksVxFd%2FDUXxS6p%2B68cgC0U9279%2B6P4iPpaDDDOhyn1ivU05sDVvJxx2X30Y5hS4Keomcbl1c02TEGpOeyCF5vxltAixj%2F9YyCETPUioYphhqgVPDM94tGKs1V9Fhk2vJ4Aty5GQlN3FK2B%2BLciBbGDEx3whrBgHXPgfhI1lvfhMshVsIljhqa68&X-Amz-Signature=61d4a43482221d3bfcc6a109b8b81544310fad154326d4a326008d0a9002c288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJGWFWM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQChzxutNrt0GQaX4ybcxyKt5NhRAyFIGcDKUR0DTJpDRwIhAMTI%2FWlpooc36u%2FmVexIvxInz02Zryo%2Fr7IQuDt%2FW9PeKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytHzE6RAXj2xWS74cq3AOS1dlsJYQhPdbZTwbNskU2%2FewNHrPyj8FADZWXYu9WhDuLDyQERPnLmsWf4hrTJFDqy0TNKs1%2F%2BEAzrVZ7iVqVIHkYylTFyZWPVJG9tuG9fXPIJRS%2B5tY48%2BCCVevjISm174yZJ1K71ekzBr%2BkIiFU9THr6Cy21nNxxlIwlVAFL8GmoysoZBRJsNbT%2BeVLuR6b63obumvOzJnwJKASXqXvy7o2LoF%2By%2FA89lqkSKBYt0vaNqDfvZcaKRJgpmPUXF%2F5i9RbV0rx0JtVay5xIDl1pPSknaPdyd5Q35forCDuKSPPT9vMafrWdhpy6Wh9WbbvNC3Ql7tH3dww28JiwNAWrnWjpuF6Ss5JLeHi4FeGDL129jDft9wT8zoYwZTc4AeMeJZJCBNKjH1W7Q%2BBbSdOHj415kpXhNfPzObm1FQBOS%2BZiosn1izVOgi0kXZRJROyIqhR%2BYvYg3BrJQHIdrARrRs5cDwXUNQ9hW9zd61j%2B6nmmcg4vRppPd%2F7B%2BRFkfpglBH8yx%2Br2LJ81hlmuNHH5RgCl5t8gRyOget1FE4hPla%2B8Wl0JF2iO3lOifUvzWKEpJDI0jzfl8zIV149bDL7fuIH%2B2nns1xatgYFudXi7ncgEZFLPogyWskeoTD6tPnTBjqkAcf3pNtiIqAgq83T8EkFwa7C3h8aoBck94O%2BpksVxFd%2FDUXxS6p%2B68cgC0U9279%2B6P4iPpaDDDOhyn1ivU05sDVvJxx2X30Y5hS4Keomcbl1c02TEGpOeyCF5vxltAixj%2F9YyCETPUioYphhqgVPDM94tGKs1V9Fhk2vJ4Aty5GQlN3FK2B%2BLciBbGDEx3whrBgHXPgfhI1lvfhMshVsIljhqa68&X-Amz-Signature=29fd51abee1e38f642762b6e4a8880ba6da2bcbfc38ba3db9849d0f3f98995ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJGWFWM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQChzxutNrt0GQaX4ybcxyKt5NhRAyFIGcDKUR0DTJpDRwIhAMTI%2FWlpooc36u%2FmVexIvxInz02Zryo%2Fr7IQuDt%2FW9PeKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytHzE6RAXj2xWS74cq3AOS1dlsJYQhPdbZTwbNskU2%2FewNHrPyj8FADZWXYu9WhDuLDyQERPnLmsWf4hrTJFDqy0TNKs1%2F%2BEAzrVZ7iVqVIHkYylTFyZWPVJG9tuG9fXPIJRS%2B5tY48%2BCCVevjISm174yZJ1K71ekzBr%2BkIiFU9THr6Cy21nNxxlIwlVAFL8GmoysoZBRJsNbT%2BeVLuR6b63obumvOzJnwJKASXqXvy7o2LoF%2By%2FA89lqkSKBYt0vaNqDfvZcaKRJgpmPUXF%2F5i9RbV0rx0JtVay5xIDl1pPSknaPdyd5Q35forCDuKSPPT9vMafrWdhpy6Wh9WbbvNC3Ql7tH3dww28JiwNAWrnWjpuF6Ss5JLeHi4FeGDL129jDft9wT8zoYwZTc4AeMeJZJCBNKjH1W7Q%2BBbSdOHj415kpXhNfPzObm1FQBOS%2BZiosn1izVOgi0kXZRJROyIqhR%2BYvYg3BrJQHIdrARrRs5cDwXUNQ9hW9zd61j%2B6nmmcg4vRppPd%2F7B%2BRFkfpglBH8yx%2Br2LJ81hlmuNHH5RgCl5t8gRyOget1FE4hPla%2B8Wl0JF2iO3lOifUvzWKEpJDI0jzfl8zIV149bDL7fuIH%2B2nns1xatgYFudXi7ncgEZFLPogyWskeoTD6tPnTBjqkAcf3pNtiIqAgq83T8EkFwa7C3h8aoBck94O%2BpksVxFd%2FDUXxS6p%2B68cgC0U9279%2B6P4iPpaDDDOhyn1ivU05sDVvJxx2X30Y5hS4Keomcbl1c02TEGpOeyCF5vxltAixj%2F9YyCETPUioYphhqgVPDM94tGKs1V9Fhk2vJ4Aty5GQlN3FK2B%2BLciBbGDEx3whrBgHXPgfhI1lvfhMshVsIljhqa68&X-Amz-Signature=d08da759b74ac5ccc1e73c6c6f4e0d5f8b0508a66d1ccfe190eab489af09ca17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJGWFWM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQChzxutNrt0GQaX4ybcxyKt5NhRAyFIGcDKUR0DTJpDRwIhAMTI%2FWlpooc36u%2FmVexIvxInz02Zryo%2Fr7IQuDt%2FW9PeKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytHzE6RAXj2xWS74cq3AOS1dlsJYQhPdbZTwbNskU2%2FewNHrPyj8FADZWXYu9WhDuLDyQERPnLmsWf4hrTJFDqy0TNKs1%2F%2BEAzrVZ7iVqVIHkYylTFyZWPVJG9tuG9fXPIJRS%2B5tY48%2BCCVevjISm174yZJ1K71ekzBr%2BkIiFU9THr6Cy21nNxxlIwlVAFL8GmoysoZBRJsNbT%2BeVLuR6b63obumvOzJnwJKASXqXvy7o2LoF%2By%2FA89lqkSKBYt0vaNqDfvZcaKRJgpmPUXF%2F5i9RbV0rx0JtVay5xIDl1pPSknaPdyd5Q35forCDuKSPPT9vMafrWdhpy6Wh9WbbvNC3Ql7tH3dww28JiwNAWrnWjpuF6Ss5JLeHi4FeGDL129jDft9wT8zoYwZTc4AeMeJZJCBNKjH1W7Q%2BBbSdOHj415kpXhNfPzObm1FQBOS%2BZiosn1izVOgi0kXZRJROyIqhR%2BYvYg3BrJQHIdrARrRs5cDwXUNQ9hW9zd61j%2B6nmmcg4vRppPd%2F7B%2BRFkfpglBH8yx%2Br2LJ81hlmuNHH5RgCl5t8gRyOget1FE4hPla%2B8Wl0JF2iO3lOifUvzWKEpJDI0jzfl8zIV149bDL7fuIH%2B2nns1xatgYFudXi7ncgEZFLPogyWskeoTD6tPnTBjqkAcf3pNtiIqAgq83T8EkFwa7C3h8aoBck94O%2BpksVxFd%2FDUXxS6p%2B68cgC0U9279%2B6P4iPpaDDDOhyn1ivU05sDVvJxx2X30Y5hS4Keomcbl1c02TEGpOeyCF5vxltAixj%2F9YyCETPUioYphhqgVPDM94tGKs1V9Fhk2vJ4Aty5GQlN3FK2B%2BLciBbGDEx3whrBgHXPgfhI1lvfhMshVsIljhqa68&X-Amz-Signature=30ba0ad8352a9f3022d726a1a151fbcbf63c822617205d7f3a5c0c5fef59986b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJGWFWM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQChzxutNrt0GQaX4ybcxyKt5NhRAyFIGcDKUR0DTJpDRwIhAMTI%2FWlpooc36u%2FmVexIvxInz02Zryo%2Fr7IQuDt%2FW9PeKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytHzE6RAXj2xWS74cq3AOS1dlsJYQhPdbZTwbNskU2%2FewNHrPyj8FADZWXYu9WhDuLDyQERPnLmsWf4hrTJFDqy0TNKs1%2F%2BEAzrVZ7iVqVIHkYylTFyZWPVJG9tuG9fXPIJRS%2B5tY48%2BCCVevjISm174yZJ1K71ekzBr%2BkIiFU9THr6Cy21nNxxlIwlVAFL8GmoysoZBRJsNbT%2BeVLuR6b63obumvOzJnwJKASXqXvy7o2LoF%2By%2FA89lqkSKBYt0vaNqDfvZcaKRJgpmPUXF%2F5i9RbV0rx0JtVay5xIDl1pPSknaPdyd5Q35forCDuKSPPT9vMafrWdhpy6Wh9WbbvNC3Ql7tH3dww28JiwNAWrnWjpuF6Ss5JLeHi4FeGDL129jDft9wT8zoYwZTc4AeMeJZJCBNKjH1W7Q%2BBbSdOHj415kpXhNfPzObm1FQBOS%2BZiosn1izVOgi0kXZRJROyIqhR%2BYvYg3BrJQHIdrARrRs5cDwXUNQ9hW9zd61j%2B6nmmcg4vRppPd%2F7B%2BRFkfpglBH8yx%2Br2LJ81hlmuNHH5RgCl5t8gRyOget1FE4hPla%2B8Wl0JF2iO3lOifUvzWKEpJDI0jzfl8zIV149bDL7fuIH%2B2nns1xatgYFudXi7ncgEZFLPogyWskeoTD6tPnTBjqkAcf3pNtiIqAgq83T8EkFwa7C3h8aoBck94O%2BpksVxFd%2FDUXxS6p%2B68cgC0U9279%2B6P4iPpaDDDOhyn1ivU05sDVvJxx2X30Y5hS4Keomcbl1c02TEGpOeyCF5vxltAixj%2F9YyCETPUioYphhqgVPDM94tGKs1V9Fhk2vJ4Aty5GQlN3FK2B%2BLciBbGDEx3whrBgHXPgfhI1lvfhMshVsIljhqa68&X-Amz-Signature=88de4a34176db794df0ce3fa2326dc8d98ec021d510f4815118e219f0b2f6b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJGWFWM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQChzxutNrt0GQaX4ybcxyKt5NhRAyFIGcDKUR0DTJpDRwIhAMTI%2FWlpooc36u%2FmVexIvxInz02Zryo%2Fr7IQuDt%2FW9PeKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytHzE6RAXj2xWS74cq3AOS1dlsJYQhPdbZTwbNskU2%2FewNHrPyj8FADZWXYu9WhDuLDyQERPnLmsWf4hrTJFDqy0TNKs1%2F%2BEAzrVZ7iVqVIHkYylTFyZWPVJG9tuG9fXPIJRS%2B5tY48%2BCCVevjISm174yZJ1K71ekzBr%2BkIiFU9THr6Cy21nNxxlIwlVAFL8GmoysoZBRJsNbT%2BeVLuR6b63obumvOzJnwJKASXqXvy7o2LoF%2By%2FA89lqkSKBYt0vaNqDfvZcaKRJgpmPUXF%2F5i9RbV0rx0JtVay5xIDl1pPSknaPdyd5Q35forCDuKSPPT9vMafrWdhpy6Wh9WbbvNC3Ql7tH3dww28JiwNAWrnWjpuF6Ss5JLeHi4FeGDL129jDft9wT8zoYwZTc4AeMeJZJCBNKjH1W7Q%2BBbSdOHj415kpXhNfPzObm1FQBOS%2BZiosn1izVOgi0kXZRJROyIqhR%2BYvYg3BrJQHIdrARrRs5cDwXUNQ9hW9zd61j%2B6nmmcg4vRppPd%2F7B%2BRFkfpglBH8yx%2Br2LJ81hlmuNHH5RgCl5t8gRyOget1FE4hPla%2B8Wl0JF2iO3lOifUvzWKEpJDI0jzfl8zIV149bDL7fuIH%2B2nns1xatgYFudXi7ncgEZFLPogyWskeoTD6tPnTBjqkAcf3pNtiIqAgq83T8EkFwa7C3h8aoBck94O%2BpksVxFd%2FDUXxS6p%2B68cgC0U9279%2B6P4iPpaDDDOhyn1ivU05sDVvJxx2X30Y5hS4Keomcbl1c02TEGpOeyCF5vxltAixj%2F9YyCETPUioYphhqgVPDM94tGKs1V9Fhk2vJ4Aty5GQlN3FK2B%2BLciBbGDEx3whrBgHXPgfhI1lvfhMshVsIljhqa68&X-Amz-Signature=c1f97d888d8651a05afb4b7e74e5881efb85239e35d2a3c3a16014bbac2e236f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

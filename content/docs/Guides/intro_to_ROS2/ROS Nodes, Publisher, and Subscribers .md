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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3UDREY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG9C3bDxZdR4ZHxB9U%2FciAeddISCoBa7vaCUMlCN4F3QIhAO725NZlVPAVbq30m6ajgcNMxSdq0k%2BEmoMleQ3VBv7yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT4Fvfagag70TI%2BXkq3AM5zB2%2BpqEKYwX5nftZiV6TGrWAIlG7X0MBTpH2Qju9MlLGdw6hUOiPqSCr3oqHr2yq1UhymGMkIV%2B88kr%2Fpic39p9%2FwLInr9hADckpy69dsnDKfuYQhAwpWLTnw5pXzuS8EaHzJ1SmHiJQeJFPQSs5RJtkljMVJUKqoq%2B3E3xpMtYWBbuD1twOTWU3zwnSSyjT8%2Fd6wB4mqKnDZ0d8hiQHAT1DHKzauhfF79nXUcG2VS6sYPi9RcsuUM492od0klL0vUZDuPkJg2LjiGJYmOsrl7nFi6rzJ6WFri74%2BpZSbCkTKJbLXk1rGxPL2ULpsbDCS7SeLuRJj6LpVbkiXAdsH9vkz9uZ4P9MePqi0%2BtYLhZG3bJkGA%2BPDayNhsBOTUx8MiGufE1KkcgACKJLg44nA0BhFXNnfm14fYkv%2Fd8H%2BxrmVtLLkS6xwk06ckWnk0JT6nWzLftZuldDp3tBZPeiSVdPqOZq0B00re2RzpOXH2TK67kQhdOxXRyjd73C91VV%2B7DrWWlRM2ojRtGLBDmB%2Fu2llsDOTER6T4vW62%2Fc%2BBeCqFHrc2WqXoIbwny38qtGsxDknS2cNEdR1YnENddi6WB072CkyFro50x25Mr0ZMlqZ4N7LZBekjOmfzDGgITDBjqkAbi7y8XzgUw4vMYdsysGfKMyeMB06AztbnnA8thVby5X%2Bl6zOp5XBbc381wfUF6P4LqoC%2B%2BtaDVMDygo7mY6mwsarcDIY2glDZRdp9xDwhT2bKfgJbv5IzOi5SAEeDO2cN7IqqBxvmKGgKXNa1upvMGat4jKk9ytMbyjdFPrTsSNoVzKGXc7TKrxlKs%2Bs%2BLdVtL8jb0tiwz%2F8dfkY1er%2B31OASVc&X-Amz-Signature=b15e37a4956fa077e67c4ebf1e8c9aacbf351aff2acaf9786daf27514a64d871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3UDREY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG9C3bDxZdR4ZHxB9U%2FciAeddISCoBa7vaCUMlCN4F3QIhAO725NZlVPAVbq30m6ajgcNMxSdq0k%2BEmoMleQ3VBv7yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT4Fvfagag70TI%2BXkq3AM5zB2%2BpqEKYwX5nftZiV6TGrWAIlG7X0MBTpH2Qju9MlLGdw6hUOiPqSCr3oqHr2yq1UhymGMkIV%2B88kr%2Fpic39p9%2FwLInr9hADckpy69dsnDKfuYQhAwpWLTnw5pXzuS8EaHzJ1SmHiJQeJFPQSs5RJtkljMVJUKqoq%2B3E3xpMtYWBbuD1twOTWU3zwnSSyjT8%2Fd6wB4mqKnDZ0d8hiQHAT1DHKzauhfF79nXUcG2VS6sYPi9RcsuUM492od0klL0vUZDuPkJg2LjiGJYmOsrl7nFi6rzJ6WFri74%2BpZSbCkTKJbLXk1rGxPL2ULpsbDCS7SeLuRJj6LpVbkiXAdsH9vkz9uZ4P9MePqi0%2BtYLhZG3bJkGA%2BPDayNhsBOTUx8MiGufE1KkcgACKJLg44nA0BhFXNnfm14fYkv%2Fd8H%2BxrmVtLLkS6xwk06ckWnk0JT6nWzLftZuldDp3tBZPeiSVdPqOZq0B00re2RzpOXH2TK67kQhdOxXRyjd73C91VV%2B7DrWWlRM2ojRtGLBDmB%2Fu2llsDOTER6T4vW62%2Fc%2BBeCqFHrc2WqXoIbwny38qtGsxDknS2cNEdR1YnENddi6WB072CkyFro50x25Mr0ZMlqZ4N7LZBekjOmfzDGgITDBjqkAbi7y8XzgUw4vMYdsysGfKMyeMB06AztbnnA8thVby5X%2Bl6zOp5XBbc381wfUF6P4LqoC%2B%2BtaDVMDygo7mY6mwsarcDIY2glDZRdp9xDwhT2bKfgJbv5IzOi5SAEeDO2cN7IqqBxvmKGgKXNa1upvMGat4jKk9ytMbyjdFPrTsSNoVzKGXc7TKrxlKs%2Bs%2BLdVtL8jb0tiwz%2F8dfkY1er%2B31OASVc&X-Amz-Signature=19db27d67e887eb25f7f8a0cef76b7a01e1686f1cba7ac7006872ab995bef5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3UDREY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG9C3bDxZdR4ZHxB9U%2FciAeddISCoBa7vaCUMlCN4F3QIhAO725NZlVPAVbq30m6ajgcNMxSdq0k%2BEmoMleQ3VBv7yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT4Fvfagag70TI%2BXkq3AM5zB2%2BpqEKYwX5nftZiV6TGrWAIlG7X0MBTpH2Qju9MlLGdw6hUOiPqSCr3oqHr2yq1UhymGMkIV%2B88kr%2Fpic39p9%2FwLInr9hADckpy69dsnDKfuYQhAwpWLTnw5pXzuS8EaHzJ1SmHiJQeJFPQSs5RJtkljMVJUKqoq%2B3E3xpMtYWBbuD1twOTWU3zwnSSyjT8%2Fd6wB4mqKnDZ0d8hiQHAT1DHKzauhfF79nXUcG2VS6sYPi9RcsuUM492od0klL0vUZDuPkJg2LjiGJYmOsrl7nFi6rzJ6WFri74%2BpZSbCkTKJbLXk1rGxPL2ULpsbDCS7SeLuRJj6LpVbkiXAdsH9vkz9uZ4P9MePqi0%2BtYLhZG3bJkGA%2BPDayNhsBOTUx8MiGufE1KkcgACKJLg44nA0BhFXNnfm14fYkv%2Fd8H%2BxrmVtLLkS6xwk06ckWnk0JT6nWzLftZuldDp3tBZPeiSVdPqOZq0B00re2RzpOXH2TK67kQhdOxXRyjd73C91VV%2B7DrWWlRM2ojRtGLBDmB%2Fu2llsDOTER6T4vW62%2Fc%2BBeCqFHrc2WqXoIbwny38qtGsxDknS2cNEdR1YnENddi6WB072CkyFro50x25Mr0ZMlqZ4N7LZBekjOmfzDGgITDBjqkAbi7y8XzgUw4vMYdsysGfKMyeMB06AztbnnA8thVby5X%2Bl6zOp5XBbc381wfUF6P4LqoC%2B%2BtaDVMDygo7mY6mwsarcDIY2glDZRdp9xDwhT2bKfgJbv5IzOi5SAEeDO2cN7IqqBxvmKGgKXNa1upvMGat4jKk9ytMbyjdFPrTsSNoVzKGXc7TKrxlKs%2Bs%2BLdVtL8jb0tiwz%2F8dfkY1er%2B31OASVc&X-Amz-Signature=70a717acb03c7b3d7220d6dee4c983f09da5312c5c6ed09b75c50328158c0e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3UDREY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG9C3bDxZdR4ZHxB9U%2FciAeddISCoBa7vaCUMlCN4F3QIhAO725NZlVPAVbq30m6ajgcNMxSdq0k%2BEmoMleQ3VBv7yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT4Fvfagag70TI%2BXkq3AM5zB2%2BpqEKYwX5nftZiV6TGrWAIlG7X0MBTpH2Qju9MlLGdw6hUOiPqSCr3oqHr2yq1UhymGMkIV%2B88kr%2Fpic39p9%2FwLInr9hADckpy69dsnDKfuYQhAwpWLTnw5pXzuS8EaHzJ1SmHiJQeJFPQSs5RJtkljMVJUKqoq%2B3E3xpMtYWBbuD1twOTWU3zwnSSyjT8%2Fd6wB4mqKnDZ0d8hiQHAT1DHKzauhfF79nXUcG2VS6sYPi9RcsuUM492od0klL0vUZDuPkJg2LjiGJYmOsrl7nFi6rzJ6WFri74%2BpZSbCkTKJbLXk1rGxPL2ULpsbDCS7SeLuRJj6LpVbkiXAdsH9vkz9uZ4P9MePqi0%2BtYLhZG3bJkGA%2BPDayNhsBOTUx8MiGufE1KkcgACKJLg44nA0BhFXNnfm14fYkv%2Fd8H%2BxrmVtLLkS6xwk06ckWnk0JT6nWzLftZuldDp3tBZPeiSVdPqOZq0B00re2RzpOXH2TK67kQhdOxXRyjd73C91VV%2B7DrWWlRM2ojRtGLBDmB%2Fu2llsDOTER6T4vW62%2Fc%2BBeCqFHrc2WqXoIbwny38qtGsxDknS2cNEdR1YnENddi6WB072CkyFro50x25Mr0ZMlqZ4N7LZBekjOmfzDGgITDBjqkAbi7y8XzgUw4vMYdsysGfKMyeMB06AztbnnA8thVby5X%2Bl6zOp5XBbc381wfUF6P4LqoC%2B%2BtaDVMDygo7mY6mwsarcDIY2glDZRdp9xDwhT2bKfgJbv5IzOi5SAEeDO2cN7IqqBxvmKGgKXNa1upvMGat4jKk9ytMbyjdFPrTsSNoVzKGXc7TKrxlKs%2Bs%2BLdVtL8jb0tiwz%2F8dfkY1er%2B31OASVc&X-Amz-Signature=1723a480aa0893b4d9a329c198460f8a02d04ffad94865d0f636711796e77986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3UDREY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG9C3bDxZdR4ZHxB9U%2FciAeddISCoBa7vaCUMlCN4F3QIhAO725NZlVPAVbq30m6ajgcNMxSdq0k%2BEmoMleQ3VBv7yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT4Fvfagag70TI%2BXkq3AM5zB2%2BpqEKYwX5nftZiV6TGrWAIlG7X0MBTpH2Qju9MlLGdw6hUOiPqSCr3oqHr2yq1UhymGMkIV%2B88kr%2Fpic39p9%2FwLInr9hADckpy69dsnDKfuYQhAwpWLTnw5pXzuS8EaHzJ1SmHiJQeJFPQSs5RJtkljMVJUKqoq%2B3E3xpMtYWBbuD1twOTWU3zwnSSyjT8%2Fd6wB4mqKnDZ0d8hiQHAT1DHKzauhfF79nXUcG2VS6sYPi9RcsuUM492od0klL0vUZDuPkJg2LjiGJYmOsrl7nFi6rzJ6WFri74%2BpZSbCkTKJbLXk1rGxPL2ULpsbDCS7SeLuRJj6LpVbkiXAdsH9vkz9uZ4P9MePqi0%2BtYLhZG3bJkGA%2BPDayNhsBOTUx8MiGufE1KkcgACKJLg44nA0BhFXNnfm14fYkv%2Fd8H%2BxrmVtLLkS6xwk06ckWnk0JT6nWzLftZuldDp3tBZPeiSVdPqOZq0B00re2RzpOXH2TK67kQhdOxXRyjd73C91VV%2B7DrWWlRM2ojRtGLBDmB%2Fu2llsDOTER6T4vW62%2Fc%2BBeCqFHrc2WqXoIbwny38qtGsxDknS2cNEdR1YnENddi6WB072CkyFro50x25Mr0ZMlqZ4N7LZBekjOmfzDGgITDBjqkAbi7y8XzgUw4vMYdsysGfKMyeMB06AztbnnA8thVby5X%2Bl6zOp5XBbc381wfUF6P4LqoC%2B%2BtaDVMDygo7mY6mwsarcDIY2glDZRdp9xDwhT2bKfgJbv5IzOi5SAEeDO2cN7IqqBxvmKGgKXNa1upvMGat4jKk9ytMbyjdFPrTsSNoVzKGXc7TKrxlKs%2Bs%2BLdVtL8jb0tiwz%2F8dfkY1er%2B31OASVc&X-Amz-Signature=0b70a9319262cd53d9e55fd4c8c7133339f1d84b6cdace11a149dd603ab7aa23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3UDREY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG9C3bDxZdR4ZHxB9U%2FciAeddISCoBa7vaCUMlCN4F3QIhAO725NZlVPAVbq30m6ajgcNMxSdq0k%2BEmoMleQ3VBv7yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT4Fvfagag70TI%2BXkq3AM5zB2%2BpqEKYwX5nftZiV6TGrWAIlG7X0MBTpH2Qju9MlLGdw6hUOiPqSCr3oqHr2yq1UhymGMkIV%2B88kr%2Fpic39p9%2FwLInr9hADckpy69dsnDKfuYQhAwpWLTnw5pXzuS8EaHzJ1SmHiJQeJFPQSs5RJtkljMVJUKqoq%2B3E3xpMtYWBbuD1twOTWU3zwnSSyjT8%2Fd6wB4mqKnDZ0d8hiQHAT1DHKzauhfF79nXUcG2VS6sYPi9RcsuUM492od0klL0vUZDuPkJg2LjiGJYmOsrl7nFi6rzJ6WFri74%2BpZSbCkTKJbLXk1rGxPL2ULpsbDCS7SeLuRJj6LpVbkiXAdsH9vkz9uZ4P9MePqi0%2BtYLhZG3bJkGA%2BPDayNhsBOTUx8MiGufE1KkcgACKJLg44nA0BhFXNnfm14fYkv%2Fd8H%2BxrmVtLLkS6xwk06ckWnk0JT6nWzLftZuldDp3tBZPeiSVdPqOZq0B00re2RzpOXH2TK67kQhdOxXRyjd73C91VV%2B7DrWWlRM2ojRtGLBDmB%2Fu2llsDOTER6T4vW62%2Fc%2BBeCqFHrc2WqXoIbwny38qtGsxDknS2cNEdR1YnENddi6WB072CkyFro50x25Mr0ZMlqZ4N7LZBekjOmfzDGgITDBjqkAbi7y8XzgUw4vMYdsysGfKMyeMB06AztbnnA8thVby5X%2Bl6zOp5XBbc381wfUF6P4LqoC%2B%2BtaDVMDygo7mY6mwsarcDIY2glDZRdp9xDwhT2bKfgJbv5IzOi5SAEeDO2cN7IqqBxvmKGgKXNa1upvMGat4jKk9ytMbyjdFPrTsSNoVzKGXc7TKrxlKs%2Bs%2BLdVtL8jb0tiwz%2F8dfkY1er%2B31OASVc&X-Amz-Signature=5779c3b9c0ddf3c22906cd62d03fb36a6f0ea9d2aad578c3c6ab6b7c94defae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3UDREY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG9C3bDxZdR4ZHxB9U%2FciAeddISCoBa7vaCUMlCN4F3QIhAO725NZlVPAVbq30m6ajgcNMxSdq0k%2BEmoMleQ3VBv7yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT4Fvfagag70TI%2BXkq3AM5zB2%2BpqEKYwX5nftZiV6TGrWAIlG7X0MBTpH2Qju9MlLGdw6hUOiPqSCr3oqHr2yq1UhymGMkIV%2B88kr%2Fpic39p9%2FwLInr9hADckpy69dsnDKfuYQhAwpWLTnw5pXzuS8EaHzJ1SmHiJQeJFPQSs5RJtkljMVJUKqoq%2B3E3xpMtYWBbuD1twOTWU3zwnSSyjT8%2Fd6wB4mqKnDZ0d8hiQHAT1DHKzauhfF79nXUcG2VS6sYPi9RcsuUM492od0klL0vUZDuPkJg2LjiGJYmOsrl7nFi6rzJ6WFri74%2BpZSbCkTKJbLXk1rGxPL2ULpsbDCS7SeLuRJj6LpVbkiXAdsH9vkz9uZ4P9MePqi0%2BtYLhZG3bJkGA%2BPDayNhsBOTUx8MiGufE1KkcgACKJLg44nA0BhFXNnfm14fYkv%2Fd8H%2BxrmVtLLkS6xwk06ckWnk0JT6nWzLftZuldDp3tBZPeiSVdPqOZq0B00re2RzpOXH2TK67kQhdOxXRyjd73C91VV%2B7DrWWlRM2ojRtGLBDmB%2Fu2llsDOTER6T4vW62%2Fc%2BBeCqFHrc2WqXoIbwny38qtGsxDknS2cNEdR1YnENddi6WB072CkyFro50x25Mr0ZMlqZ4N7LZBekjOmfzDGgITDBjqkAbi7y8XzgUw4vMYdsysGfKMyeMB06AztbnnA8thVby5X%2Bl6zOp5XBbc381wfUF6P4LqoC%2B%2BtaDVMDygo7mY6mwsarcDIY2glDZRdp9xDwhT2bKfgJbv5IzOi5SAEeDO2cN7IqqBxvmKGgKXNa1upvMGat4jKk9ytMbyjdFPrTsSNoVzKGXc7TKrxlKs%2Bs%2BLdVtL8jb0tiwz%2F8dfkY1er%2B31OASVc&X-Amz-Signature=78d9f708115611484f327f08562689cfaa156154452db2dd2606b811163893fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3UDREY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG9C3bDxZdR4ZHxB9U%2FciAeddISCoBa7vaCUMlCN4F3QIhAO725NZlVPAVbq30m6ajgcNMxSdq0k%2BEmoMleQ3VBv7yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT4Fvfagag70TI%2BXkq3AM5zB2%2BpqEKYwX5nftZiV6TGrWAIlG7X0MBTpH2Qju9MlLGdw6hUOiPqSCr3oqHr2yq1UhymGMkIV%2B88kr%2Fpic39p9%2FwLInr9hADckpy69dsnDKfuYQhAwpWLTnw5pXzuS8EaHzJ1SmHiJQeJFPQSs5RJtkljMVJUKqoq%2B3E3xpMtYWBbuD1twOTWU3zwnSSyjT8%2Fd6wB4mqKnDZ0d8hiQHAT1DHKzauhfF79nXUcG2VS6sYPi9RcsuUM492od0klL0vUZDuPkJg2LjiGJYmOsrl7nFi6rzJ6WFri74%2BpZSbCkTKJbLXk1rGxPL2ULpsbDCS7SeLuRJj6LpVbkiXAdsH9vkz9uZ4P9MePqi0%2BtYLhZG3bJkGA%2BPDayNhsBOTUx8MiGufE1KkcgACKJLg44nA0BhFXNnfm14fYkv%2Fd8H%2BxrmVtLLkS6xwk06ckWnk0JT6nWzLftZuldDp3tBZPeiSVdPqOZq0B00re2RzpOXH2TK67kQhdOxXRyjd73C91VV%2B7DrWWlRM2ojRtGLBDmB%2Fu2llsDOTER6T4vW62%2Fc%2BBeCqFHrc2WqXoIbwny38qtGsxDknS2cNEdR1YnENddi6WB072CkyFro50x25Mr0ZMlqZ4N7LZBekjOmfzDGgITDBjqkAbi7y8XzgUw4vMYdsysGfKMyeMB06AztbnnA8thVby5X%2Bl6zOp5XBbc381wfUF6P4LqoC%2B%2BtaDVMDygo7mY6mwsarcDIY2glDZRdp9xDwhT2bKfgJbv5IzOi5SAEeDO2cN7IqqBxvmKGgKXNa1upvMGat4jKk9ytMbyjdFPrTsSNoVzKGXc7TKrxlKs%2Bs%2BLdVtL8jb0tiwz%2F8dfkY1er%2B31OASVc&X-Amz-Signature=36a8dd8fd9d8559bc083f70227e8dc0a0c2b163dc959a0e50a1910e89cb7b547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4CJGDF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxgucDLZ6QgMWzPTYpGY7xAMycI%2BYC8%2BSQjqgWOYFzhwIhAORYVSdcIGCF6TL4yIMFnrQkM3Rx3%2FzC09rGPrhrwWqjKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBmzqhv5x%2F6aoq4gq3ANxm6p254vuEFICWUhjXMCE%2Fl94EwoI3JTV7dinKOvoLSmHI6MR2hngMmvYzPHVKctAIc%2FhHNGkovMNKNi2IqjpBim0Dx8GIXvl0rxEB2l8jGoqrYn%2BG9MY0dbbk9fxAsDrC7Wd7IOD4I4fIbrEcmeTjHGIvj6MZejQVhMyEE2A4zo7gYVqj0oNN4vJfVi1etjjuk8KaDm2LlyNV5nLDZ2dOhkEzkZcTIQBrA0W4B9uAytlmJNPNziW2OYSHQoJtTE%2FPJHO69B0kXstUTKEQBZtE4st6gydGj%2BOAB4kO7p0Pv17jBaBq8l%2BCTJC9GDIR2qza%2FWqMcWknwulVisw7Pk7%2FQ0%2FTiJVB9OYMwYz1x%2BB390BQUoVjHc0prXt6oZxJzYM38dnzwv0PNAN%2FBN5X3uIKIPz%2BdIQ4xgJ66%2F8WWm7lqpKMHo3obMlEvECpcVKD7W0GVueXD%2FoFo9EvMtaNJOrlElMEoi06AVY0ZilaPKa16yiWNPBSrm7p8us%2BB71olZXBXD0%2FtTPeVXM%2FL1jp1ECUWtqzpqMjjtk7H2lbPsrQmmD17gbZwls64agivuMDihOMzAtLSKlH49KUunmEheLjGHNFUeZsA3lMhL%2FfFKPevD%2Bn%2FL6K41Drtk6KDC9h5DDBjqkAUbChPql7KdHTO4Z3UqSGMUo7baZkHnpkB%2FSxr5E%2BHgbCzP2XzvBKr2nlvrDrD6ggKXNU%2F%2B9PfVSmKmhpjW5uH1B9oMbTvFyocj09WtORpYocjyV9PFUWtTHEQMoTDvoMiIERwCLgkAYNOjyhDMLBJ%2B5EQ5mIddE10L00uTsHZeQoPqDT5IrWleOtuTB8Z0MzjfcHzIUnyskaeq4dZmt3SvYE%2F1o&X-Amz-Signature=30481fd728c880583235c0b379f1c0b054f3a9226af01af25a4df23e8da7dfb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4CJGDF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxgucDLZ6QgMWzPTYpGY7xAMycI%2BYC8%2BSQjqgWOYFzhwIhAORYVSdcIGCF6TL4yIMFnrQkM3Rx3%2FzC09rGPrhrwWqjKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBmzqhv5x%2F6aoq4gq3ANxm6p254vuEFICWUhjXMCE%2Fl94EwoI3JTV7dinKOvoLSmHI6MR2hngMmvYzPHVKctAIc%2FhHNGkovMNKNi2IqjpBim0Dx8GIXvl0rxEB2l8jGoqrYn%2BG9MY0dbbk9fxAsDrC7Wd7IOD4I4fIbrEcmeTjHGIvj6MZejQVhMyEE2A4zo7gYVqj0oNN4vJfVi1etjjuk8KaDm2LlyNV5nLDZ2dOhkEzkZcTIQBrA0W4B9uAytlmJNPNziW2OYSHQoJtTE%2FPJHO69B0kXstUTKEQBZtE4st6gydGj%2BOAB4kO7p0Pv17jBaBq8l%2BCTJC9GDIR2qza%2FWqMcWknwulVisw7Pk7%2FQ0%2FTiJVB9OYMwYz1x%2BB390BQUoVjHc0prXt6oZxJzYM38dnzwv0PNAN%2FBN5X3uIKIPz%2BdIQ4xgJ66%2F8WWm7lqpKMHo3obMlEvECpcVKD7W0GVueXD%2FoFo9EvMtaNJOrlElMEoi06AVY0ZilaPKa16yiWNPBSrm7p8us%2BB71olZXBXD0%2FtTPeVXM%2FL1jp1ECUWtqzpqMjjtk7H2lbPsrQmmD17gbZwls64agivuMDihOMzAtLSKlH49KUunmEheLjGHNFUeZsA3lMhL%2FfFKPevD%2Bn%2FL6K41Drtk6KDC9h5DDBjqkAUbChPql7KdHTO4Z3UqSGMUo7baZkHnpkB%2FSxr5E%2BHgbCzP2XzvBKr2nlvrDrD6ggKXNU%2F%2B9PfVSmKmhpjW5uH1B9oMbTvFyocj09WtORpYocjyV9PFUWtTHEQMoTDvoMiIERwCLgkAYNOjyhDMLBJ%2B5EQ5mIddE10L00uTsHZeQoPqDT5IrWleOtuTB8Z0MzjfcHzIUnyskaeq4dZmt3SvYE%2F1o&X-Amz-Signature=436524aa69c223be3bc963c7b7ac79896a6a20a459d17e17fdd8e4f8686be903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4CJGDF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxgucDLZ6QgMWzPTYpGY7xAMycI%2BYC8%2BSQjqgWOYFzhwIhAORYVSdcIGCF6TL4yIMFnrQkM3Rx3%2FzC09rGPrhrwWqjKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBmzqhv5x%2F6aoq4gq3ANxm6p254vuEFICWUhjXMCE%2Fl94EwoI3JTV7dinKOvoLSmHI6MR2hngMmvYzPHVKctAIc%2FhHNGkovMNKNi2IqjpBim0Dx8GIXvl0rxEB2l8jGoqrYn%2BG9MY0dbbk9fxAsDrC7Wd7IOD4I4fIbrEcmeTjHGIvj6MZejQVhMyEE2A4zo7gYVqj0oNN4vJfVi1etjjuk8KaDm2LlyNV5nLDZ2dOhkEzkZcTIQBrA0W4B9uAytlmJNPNziW2OYSHQoJtTE%2FPJHO69B0kXstUTKEQBZtE4st6gydGj%2BOAB4kO7p0Pv17jBaBq8l%2BCTJC9GDIR2qza%2FWqMcWknwulVisw7Pk7%2FQ0%2FTiJVB9OYMwYz1x%2BB390BQUoVjHc0prXt6oZxJzYM38dnzwv0PNAN%2FBN5X3uIKIPz%2BdIQ4xgJ66%2F8WWm7lqpKMHo3obMlEvECpcVKD7W0GVueXD%2FoFo9EvMtaNJOrlElMEoi06AVY0ZilaPKa16yiWNPBSrm7p8us%2BB71olZXBXD0%2FtTPeVXM%2FL1jp1ECUWtqzpqMjjtk7H2lbPsrQmmD17gbZwls64agivuMDihOMzAtLSKlH49KUunmEheLjGHNFUeZsA3lMhL%2FfFKPevD%2Bn%2FL6K41Drtk6KDC9h5DDBjqkAUbChPql7KdHTO4Z3UqSGMUo7baZkHnpkB%2FSxr5E%2BHgbCzP2XzvBKr2nlvrDrD6ggKXNU%2F%2B9PfVSmKmhpjW5uH1B9oMbTvFyocj09WtORpYocjyV9PFUWtTHEQMoTDvoMiIERwCLgkAYNOjyhDMLBJ%2B5EQ5mIddE10L00uTsHZeQoPqDT5IrWleOtuTB8Z0MzjfcHzIUnyskaeq4dZmt3SvYE%2F1o&X-Amz-Signature=05e97cc2eb2d3c5dbb9cd3d9005eb745315d7eef6e84285033b20d0bd977b4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4CJGDF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxgucDLZ6QgMWzPTYpGY7xAMycI%2BYC8%2BSQjqgWOYFzhwIhAORYVSdcIGCF6TL4yIMFnrQkM3Rx3%2FzC09rGPrhrwWqjKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBmzqhv5x%2F6aoq4gq3ANxm6p254vuEFICWUhjXMCE%2Fl94EwoI3JTV7dinKOvoLSmHI6MR2hngMmvYzPHVKctAIc%2FhHNGkovMNKNi2IqjpBim0Dx8GIXvl0rxEB2l8jGoqrYn%2BG9MY0dbbk9fxAsDrC7Wd7IOD4I4fIbrEcmeTjHGIvj6MZejQVhMyEE2A4zo7gYVqj0oNN4vJfVi1etjjuk8KaDm2LlyNV5nLDZ2dOhkEzkZcTIQBrA0W4B9uAytlmJNPNziW2OYSHQoJtTE%2FPJHO69B0kXstUTKEQBZtE4st6gydGj%2BOAB4kO7p0Pv17jBaBq8l%2BCTJC9GDIR2qza%2FWqMcWknwulVisw7Pk7%2FQ0%2FTiJVB9OYMwYz1x%2BB390BQUoVjHc0prXt6oZxJzYM38dnzwv0PNAN%2FBN5X3uIKIPz%2BdIQ4xgJ66%2F8WWm7lqpKMHo3obMlEvECpcVKD7W0GVueXD%2FoFo9EvMtaNJOrlElMEoi06AVY0ZilaPKa16yiWNPBSrm7p8us%2BB71olZXBXD0%2FtTPeVXM%2FL1jp1ECUWtqzpqMjjtk7H2lbPsrQmmD17gbZwls64agivuMDihOMzAtLSKlH49KUunmEheLjGHNFUeZsA3lMhL%2FfFKPevD%2Bn%2FL6K41Drtk6KDC9h5DDBjqkAUbChPql7KdHTO4Z3UqSGMUo7baZkHnpkB%2FSxr5E%2BHgbCzP2XzvBKr2nlvrDrD6ggKXNU%2F%2B9PfVSmKmhpjW5uH1B9oMbTvFyocj09WtORpYocjyV9PFUWtTHEQMoTDvoMiIERwCLgkAYNOjyhDMLBJ%2B5EQ5mIddE10L00uTsHZeQoPqDT5IrWleOtuTB8Z0MzjfcHzIUnyskaeq4dZmt3SvYE%2F1o&X-Amz-Signature=4c238de2071212e9d7006d3f38fddfbf111c57ff657a3338c9cd8010c841d124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4CJGDF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxgucDLZ6QgMWzPTYpGY7xAMycI%2BYC8%2BSQjqgWOYFzhwIhAORYVSdcIGCF6TL4yIMFnrQkM3Rx3%2FzC09rGPrhrwWqjKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBmzqhv5x%2F6aoq4gq3ANxm6p254vuEFICWUhjXMCE%2Fl94EwoI3JTV7dinKOvoLSmHI6MR2hngMmvYzPHVKctAIc%2FhHNGkovMNKNi2IqjpBim0Dx8GIXvl0rxEB2l8jGoqrYn%2BG9MY0dbbk9fxAsDrC7Wd7IOD4I4fIbrEcmeTjHGIvj6MZejQVhMyEE2A4zo7gYVqj0oNN4vJfVi1etjjuk8KaDm2LlyNV5nLDZ2dOhkEzkZcTIQBrA0W4B9uAytlmJNPNziW2OYSHQoJtTE%2FPJHO69B0kXstUTKEQBZtE4st6gydGj%2BOAB4kO7p0Pv17jBaBq8l%2BCTJC9GDIR2qza%2FWqMcWknwulVisw7Pk7%2FQ0%2FTiJVB9OYMwYz1x%2BB390BQUoVjHc0prXt6oZxJzYM38dnzwv0PNAN%2FBN5X3uIKIPz%2BdIQ4xgJ66%2F8WWm7lqpKMHo3obMlEvECpcVKD7W0GVueXD%2FoFo9EvMtaNJOrlElMEoi06AVY0ZilaPKa16yiWNPBSrm7p8us%2BB71olZXBXD0%2FtTPeVXM%2FL1jp1ECUWtqzpqMjjtk7H2lbPsrQmmD17gbZwls64agivuMDihOMzAtLSKlH49KUunmEheLjGHNFUeZsA3lMhL%2FfFKPevD%2Bn%2FL6K41Drtk6KDC9h5DDBjqkAUbChPql7KdHTO4Z3UqSGMUo7baZkHnpkB%2FSxr5E%2BHgbCzP2XzvBKr2nlvrDrD6ggKXNU%2F%2B9PfVSmKmhpjW5uH1B9oMbTvFyocj09WtORpYocjyV9PFUWtTHEQMoTDvoMiIERwCLgkAYNOjyhDMLBJ%2B5EQ5mIddE10L00uTsHZeQoPqDT5IrWleOtuTB8Z0MzjfcHzIUnyskaeq4dZmt3SvYE%2F1o&X-Amz-Signature=6ef769c57bf7daffe4a6f1ea6b0e922dfc1d8ad707c3ce00b809576b8edd0195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4CJGDF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxgucDLZ6QgMWzPTYpGY7xAMycI%2BYC8%2BSQjqgWOYFzhwIhAORYVSdcIGCF6TL4yIMFnrQkM3Rx3%2FzC09rGPrhrwWqjKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBmzqhv5x%2F6aoq4gq3ANxm6p254vuEFICWUhjXMCE%2Fl94EwoI3JTV7dinKOvoLSmHI6MR2hngMmvYzPHVKctAIc%2FhHNGkovMNKNi2IqjpBim0Dx8GIXvl0rxEB2l8jGoqrYn%2BG9MY0dbbk9fxAsDrC7Wd7IOD4I4fIbrEcmeTjHGIvj6MZejQVhMyEE2A4zo7gYVqj0oNN4vJfVi1etjjuk8KaDm2LlyNV5nLDZ2dOhkEzkZcTIQBrA0W4B9uAytlmJNPNziW2OYSHQoJtTE%2FPJHO69B0kXstUTKEQBZtE4st6gydGj%2BOAB4kO7p0Pv17jBaBq8l%2BCTJC9GDIR2qza%2FWqMcWknwulVisw7Pk7%2FQ0%2FTiJVB9OYMwYz1x%2BB390BQUoVjHc0prXt6oZxJzYM38dnzwv0PNAN%2FBN5X3uIKIPz%2BdIQ4xgJ66%2F8WWm7lqpKMHo3obMlEvECpcVKD7W0GVueXD%2FoFo9EvMtaNJOrlElMEoi06AVY0ZilaPKa16yiWNPBSrm7p8us%2BB71olZXBXD0%2FtTPeVXM%2FL1jp1ECUWtqzpqMjjtk7H2lbPsrQmmD17gbZwls64agivuMDihOMzAtLSKlH49KUunmEheLjGHNFUeZsA3lMhL%2FfFKPevD%2Bn%2FL6K41Drtk6KDC9h5DDBjqkAUbChPql7KdHTO4Z3UqSGMUo7baZkHnpkB%2FSxr5E%2BHgbCzP2XzvBKr2nlvrDrD6ggKXNU%2F%2B9PfVSmKmhpjW5uH1B9oMbTvFyocj09WtORpYocjyV9PFUWtTHEQMoTDvoMiIERwCLgkAYNOjyhDMLBJ%2B5EQ5mIddE10L00uTsHZeQoPqDT5IrWleOtuTB8Z0MzjfcHzIUnyskaeq4dZmt3SvYE%2F1o&X-Amz-Signature=eeba4862bc20dcb32843bea76d98ea739b384697185f4d741ac9fc1e2e68356e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4CJGDF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxgucDLZ6QgMWzPTYpGY7xAMycI%2BYC8%2BSQjqgWOYFzhwIhAORYVSdcIGCF6TL4yIMFnrQkM3Rx3%2FzC09rGPrhrwWqjKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBmzqhv5x%2F6aoq4gq3ANxm6p254vuEFICWUhjXMCE%2Fl94EwoI3JTV7dinKOvoLSmHI6MR2hngMmvYzPHVKctAIc%2FhHNGkovMNKNi2IqjpBim0Dx8GIXvl0rxEB2l8jGoqrYn%2BG9MY0dbbk9fxAsDrC7Wd7IOD4I4fIbrEcmeTjHGIvj6MZejQVhMyEE2A4zo7gYVqj0oNN4vJfVi1etjjuk8KaDm2LlyNV5nLDZ2dOhkEzkZcTIQBrA0W4B9uAytlmJNPNziW2OYSHQoJtTE%2FPJHO69B0kXstUTKEQBZtE4st6gydGj%2BOAB4kO7p0Pv17jBaBq8l%2BCTJC9GDIR2qza%2FWqMcWknwulVisw7Pk7%2FQ0%2FTiJVB9OYMwYz1x%2BB390BQUoVjHc0prXt6oZxJzYM38dnzwv0PNAN%2FBN5X3uIKIPz%2BdIQ4xgJ66%2F8WWm7lqpKMHo3obMlEvECpcVKD7W0GVueXD%2FoFo9EvMtaNJOrlElMEoi06AVY0ZilaPKa16yiWNPBSrm7p8us%2BB71olZXBXD0%2FtTPeVXM%2FL1jp1ECUWtqzpqMjjtk7H2lbPsrQmmD17gbZwls64agivuMDihOMzAtLSKlH49KUunmEheLjGHNFUeZsA3lMhL%2FfFKPevD%2Bn%2FL6K41Drtk6KDC9h5DDBjqkAUbChPql7KdHTO4Z3UqSGMUo7baZkHnpkB%2FSxr5E%2BHgbCzP2XzvBKr2nlvrDrD6ggKXNU%2F%2B9PfVSmKmhpjW5uH1B9oMbTvFyocj09WtORpYocjyV9PFUWtTHEQMoTDvoMiIERwCLgkAYNOjyhDMLBJ%2B5EQ5mIddE10L00uTsHZeQoPqDT5IrWleOtuTB8Z0MzjfcHzIUnyskaeq4dZmt3SvYE%2F1o&X-Amz-Signature=96417f6a6449d712bc3a141b0e2899ef9909d25cf39d1980aeca645dc398a4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4CJGDF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxgucDLZ6QgMWzPTYpGY7xAMycI%2BYC8%2BSQjqgWOYFzhwIhAORYVSdcIGCF6TL4yIMFnrQkM3Rx3%2FzC09rGPrhrwWqjKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBmzqhv5x%2F6aoq4gq3ANxm6p254vuEFICWUhjXMCE%2Fl94EwoI3JTV7dinKOvoLSmHI6MR2hngMmvYzPHVKctAIc%2FhHNGkovMNKNi2IqjpBim0Dx8GIXvl0rxEB2l8jGoqrYn%2BG9MY0dbbk9fxAsDrC7Wd7IOD4I4fIbrEcmeTjHGIvj6MZejQVhMyEE2A4zo7gYVqj0oNN4vJfVi1etjjuk8KaDm2LlyNV5nLDZ2dOhkEzkZcTIQBrA0W4B9uAytlmJNPNziW2OYSHQoJtTE%2FPJHO69B0kXstUTKEQBZtE4st6gydGj%2BOAB4kO7p0Pv17jBaBq8l%2BCTJC9GDIR2qza%2FWqMcWknwulVisw7Pk7%2FQ0%2FTiJVB9OYMwYz1x%2BB390BQUoVjHc0prXt6oZxJzYM38dnzwv0PNAN%2FBN5X3uIKIPz%2BdIQ4xgJ66%2F8WWm7lqpKMHo3obMlEvECpcVKD7W0GVueXD%2FoFo9EvMtaNJOrlElMEoi06AVY0ZilaPKa16yiWNPBSrm7p8us%2BB71olZXBXD0%2FtTPeVXM%2FL1jp1ECUWtqzpqMjjtk7H2lbPsrQmmD17gbZwls64agivuMDihOMzAtLSKlH49KUunmEheLjGHNFUeZsA3lMhL%2FfFKPevD%2Bn%2FL6K41Drtk6KDC9h5DDBjqkAUbChPql7KdHTO4Z3UqSGMUo7baZkHnpkB%2FSxr5E%2BHgbCzP2XzvBKr2nlvrDrD6ggKXNU%2F%2B9PfVSmKmhpjW5uH1B9oMbTvFyocj09WtORpYocjyV9PFUWtTHEQMoTDvoMiIERwCLgkAYNOjyhDMLBJ%2B5EQ5mIddE10L00uTsHZeQoPqDT5IrWleOtuTB8Z0MzjfcHzIUnyskaeq4dZmt3SvYE%2F1o&X-Amz-Signature=143fc40ef6805899d5a94179130509e867b8fbab36d5c44d3b497031cb2f1035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

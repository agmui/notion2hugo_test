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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECSRQ3O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ALMLR%2Fal%2Bw8LAt%2B0ka28L8itotDCe1g8v8e5neG2BAiEAmMe8jpz%2BBNNj1viZgkckuvzGeeWu%2BglRwUPbTQMCoAEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLEokuhJY39WRuMTXCrcA6AlSfCQPj7oOImPvsM9x%2Byy53EF9rCW1xemC2zghzElqW5v00PWO5ITjEc82YN6eXU0MxJ9K11F9NfnY5HjSPqvNE%2BZ4pKpOZA%2F3rPndUjW5m3uzTwcrTg0GoaLIayYmsMh8DphSGJmyQNbvPuvIxhUYmb9iD0uiag0EfKyPHLC50SHBEbjHwwUh219W0PMcw1ye1eKLs7Y4lHFzlJUmeags%2B%2FBxcU33z7Z%2F0avSiIvSH%2BEizh6AnxCnoZGmvvMTS3KR6W4OWfNa%2Fpq3BOv4IBceWUGPabk%2FJrcM4qTaEjOlV0TBKBIyomcuiv8vtPDVm1k6JnhN7Q3bMHyJUmyC2pt3hUAw7Unm3lD7LVN3nbG9abfnuENID8cL%2F00sezC4C2qcQKTzc0UScIbB98msZrYLLISvQ4n%2FPHTY11Pc%2F%2FaA37FQWfEWpAOVkCIOp8gmKHLJXfVLkerMmSSv1HUoL%2BMHFQ4BBAJ5ZnizGI118gJ4g4Jp%2Fm7gO%2B%2F88O%2BdLGe1JtEFbKvWbdfB2NDvzmvrP3lrsunukejt5XsS2NzuRqPFTSidxICI3ZIDn58Wj77pyv5m2AzAZ%2FD%2FdBVtUMnnck0INzZu5S8PcOwTSgmKtvmg0kQXGDRxVzz8NgnMMv%2Fx78GOqUBSCqYAe0QRchEvZP8K5l29ziHtp0JpL6J5jG5IUskSD3cTD7FGCbNDQ%2FfCJo%2B49iXaDSwYIkvShFknYE7W9TlnY5isWll%2B4HixH9Zzd1WJP3kJ0dzq%2FAg1W2EXxeTPfcmndnOhaUDDLdW%2FQh8%2FxfP31XvvH%2B3nO%2B7Uiamh%2BEh2wD%2FPEtLbZmkvRzvcyZcfc8eOn0tgi0h5%2BevD2ZUkADyDV4ccc%2FH&X-Amz-Signature=2220e3204557c53e8a09322c6b2edb5d4e927a4ba2ee444d9b4ef6eda442be23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECSRQ3O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ALMLR%2Fal%2Bw8LAt%2B0ka28L8itotDCe1g8v8e5neG2BAiEAmMe8jpz%2BBNNj1viZgkckuvzGeeWu%2BglRwUPbTQMCoAEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLEokuhJY39WRuMTXCrcA6AlSfCQPj7oOImPvsM9x%2Byy53EF9rCW1xemC2zghzElqW5v00PWO5ITjEc82YN6eXU0MxJ9K11F9NfnY5HjSPqvNE%2BZ4pKpOZA%2F3rPndUjW5m3uzTwcrTg0GoaLIayYmsMh8DphSGJmyQNbvPuvIxhUYmb9iD0uiag0EfKyPHLC50SHBEbjHwwUh219W0PMcw1ye1eKLs7Y4lHFzlJUmeags%2B%2FBxcU33z7Z%2F0avSiIvSH%2BEizh6AnxCnoZGmvvMTS3KR6W4OWfNa%2Fpq3BOv4IBceWUGPabk%2FJrcM4qTaEjOlV0TBKBIyomcuiv8vtPDVm1k6JnhN7Q3bMHyJUmyC2pt3hUAw7Unm3lD7LVN3nbG9abfnuENID8cL%2F00sezC4C2qcQKTzc0UScIbB98msZrYLLISvQ4n%2FPHTY11Pc%2F%2FaA37FQWfEWpAOVkCIOp8gmKHLJXfVLkerMmSSv1HUoL%2BMHFQ4BBAJ5ZnizGI118gJ4g4Jp%2Fm7gO%2B%2F88O%2BdLGe1JtEFbKvWbdfB2NDvzmvrP3lrsunukejt5XsS2NzuRqPFTSidxICI3ZIDn58Wj77pyv5m2AzAZ%2FD%2FdBVtUMnnck0INzZu5S8PcOwTSgmKtvmg0kQXGDRxVzz8NgnMMv%2Fx78GOqUBSCqYAe0QRchEvZP8K5l29ziHtp0JpL6J5jG5IUskSD3cTD7FGCbNDQ%2FfCJo%2B49iXaDSwYIkvShFknYE7W9TlnY5isWll%2B4HixH9Zzd1WJP3kJ0dzq%2FAg1W2EXxeTPfcmndnOhaUDDLdW%2FQh8%2FxfP31XvvH%2B3nO%2B7Uiamh%2BEh2wD%2FPEtLbZmkvRzvcyZcfc8eOn0tgi0h5%2BevD2ZUkADyDV4ccc%2FH&X-Amz-Signature=e18f666622c49993bf1ed01c3df88a97a43adf021c8763781ee21a4b725bce87&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECSRQ3O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ALMLR%2Fal%2Bw8LAt%2B0ka28L8itotDCe1g8v8e5neG2BAiEAmMe8jpz%2BBNNj1viZgkckuvzGeeWu%2BglRwUPbTQMCoAEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLEokuhJY39WRuMTXCrcA6AlSfCQPj7oOImPvsM9x%2Byy53EF9rCW1xemC2zghzElqW5v00PWO5ITjEc82YN6eXU0MxJ9K11F9NfnY5HjSPqvNE%2BZ4pKpOZA%2F3rPndUjW5m3uzTwcrTg0GoaLIayYmsMh8DphSGJmyQNbvPuvIxhUYmb9iD0uiag0EfKyPHLC50SHBEbjHwwUh219W0PMcw1ye1eKLs7Y4lHFzlJUmeags%2B%2FBxcU33z7Z%2F0avSiIvSH%2BEizh6AnxCnoZGmvvMTS3KR6W4OWfNa%2Fpq3BOv4IBceWUGPabk%2FJrcM4qTaEjOlV0TBKBIyomcuiv8vtPDVm1k6JnhN7Q3bMHyJUmyC2pt3hUAw7Unm3lD7LVN3nbG9abfnuENID8cL%2F00sezC4C2qcQKTzc0UScIbB98msZrYLLISvQ4n%2FPHTY11Pc%2F%2FaA37FQWfEWpAOVkCIOp8gmKHLJXfVLkerMmSSv1HUoL%2BMHFQ4BBAJ5ZnizGI118gJ4g4Jp%2Fm7gO%2B%2F88O%2BdLGe1JtEFbKvWbdfB2NDvzmvrP3lrsunukejt5XsS2NzuRqPFTSidxICI3ZIDn58Wj77pyv5m2AzAZ%2FD%2FdBVtUMnnck0INzZu5S8PcOwTSgmKtvmg0kQXGDRxVzz8NgnMMv%2Fx78GOqUBSCqYAe0QRchEvZP8K5l29ziHtp0JpL6J5jG5IUskSD3cTD7FGCbNDQ%2FfCJo%2B49iXaDSwYIkvShFknYE7W9TlnY5isWll%2B4HixH9Zzd1WJP3kJ0dzq%2FAg1W2EXxeTPfcmndnOhaUDDLdW%2FQh8%2FxfP31XvvH%2B3nO%2B7Uiamh%2BEh2wD%2FPEtLbZmkvRzvcyZcfc8eOn0tgi0h5%2BevD2ZUkADyDV4ccc%2FH&X-Amz-Signature=3fe2525d97c532423d4f01930d4ce2555d24e033cb4ee4e9e6112a5a0c2c57a2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECSRQ3O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ALMLR%2Fal%2Bw8LAt%2B0ka28L8itotDCe1g8v8e5neG2BAiEAmMe8jpz%2BBNNj1viZgkckuvzGeeWu%2BglRwUPbTQMCoAEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLEokuhJY39WRuMTXCrcA6AlSfCQPj7oOImPvsM9x%2Byy53EF9rCW1xemC2zghzElqW5v00PWO5ITjEc82YN6eXU0MxJ9K11F9NfnY5HjSPqvNE%2BZ4pKpOZA%2F3rPndUjW5m3uzTwcrTg0GoaLIayYmsMh8DphSGJmyQNbvPuvIxhUYmb9iD0uiag0EfKyPHLC50SHBEbjHwwUh219W0PMcw1ye1eKLs7Y4lHFzlJUmeags%2B%2FBxcU33z7Z%2F0avSiIvSH%2BEizh6AnxCnoZGmvvMTS3KR6W4OWfNa%2Fpq3BOv4IBceWUGPabk%2FJrcM4qTaEjOlV0TBKBIyomcuiv8vtPDVm1k6JnhN7Q3bMHyJUmyC2pt3hUAw7Unm3lD7LVN3nbG9abfnuENID8cL%2F00sezC4C2qcQKTzc0UScIbB98msZrYLLISvQ4n%2FPHTY11Pc%2F%2FaA37FQWfEWpAOVkCIOp8gmKHLJXfVLkerMmSSv1HUoL%2BMHFQ4BBAJ5ZnizGI118gJ4g4Jp%2Fm7gO%2B%2F88O%2BdLGe1JtEFbKvWbdfB2NDvzmvrP3lrsunukejt5XsS2NzuRqPFTSidxICI3ZIDn58Wj77pyv5m2AzAZ%2FD%2FdBVtUMnnck0INzZu5S8PcOwTSgmKtvmg0kQXGDRxVzz8NgnMMv%2Fx78GOqUBSCqYAe0QRchEvZP8K5l29ziHtp0JpL6J5jG5IUskSD3cTD7FGCbNDQ%2FfCJo%2B49iXaDSwYIkvShFknYE7W9TlnY5isWll%2B4HixH9Zzd1WJP3kJ0dzq%2FAg1W2EXxeTPfcmndnOhaUDDLdW%2FQh8%2FxfP31XvvH%2B3nO%2B7Uiamh%2BEh2wD%2FPEtLbZmkvRzvcyZcfc8eOn0tgi0h5%2BevD2ZUkADyDV4ccc%2FH&X-Amz-Signature=ce3c6feabe02be265fd4b2a6e5f5d23c4c6731fbc4a915df7e9007b05637e933&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECSRQ3O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ALMLR%2Fal%2Bw8LAt%2B0ka28L8itotDCe1g8v8e5neG2BAiEAmMe8jpz%2BBNNj1viZgkckuvzGeeWu%2BglRwUPbTQMCoAEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLEokuhJY39WRuMTXCrcA6AlSfCQPj7oOImPvsM9x%2Byy53EF9rCW1xemC2zghzElqW5v00PWO5ITjEc82YN6eXU0MxJ9K11F9NfnY5HjSPqvNE%2BZ4pKpOZA%2F3rPndUjW5m3uzTwcrTg0GoaLIayYmsMh8DphSGJmyQNbvPuvIxhUYmb9iD0uiag0EfKyPHLC50SHBEbjHwwUh219W0PMcw1ye1eKLs7Y4lHFzlJUmeags%2B%2FBxcU33z7Z%2F0avSiIvSH%2BEizh6AnxCnoZGmvvMTS3KR6W4OWfNa%2Fpq3BOv4IBceWUGPabk%2FJrcM4qTaEjOlV0TBKBIyomcuiv8vtPDVm1k6JnhN7Q3bMHyJUmyC2pt3hUAw7Unm3lD7LVN3nbG9abfnuENID8cL%2F00sezC4C2qcQKTzc0UScIbB98msZrYLLISvQ4n%2FPHTY11Pc%2F%2FaA37FQWfEWpAOVkCIOp8gmKHLJXfVLkerMmSSv1HUoL%2BMHFQ4BBAJ5ZnizGI118gJ4g4Jp%2Fm7gO%2B%2F88O%2BdLGe1JtEFbKvWbdfB2NDvzmvrP3lrsunukejt5XsS2NzuRqPFTSidxICI3ZIDn58Wj77pyv5m2AzAZ%2FD%2FdBVtUMnnck0INzZu5S8PcOwTSgmKtvmg0kQXGDRxVzz8NgnMMv%2Fx78GOqUBSCqYAe0QRchEvZP8K5l29ziHtp0JpL6J5jG5IUskSD3cTD7FGCbNDQ%2FfCJo%2B49iXaDSwYIkvShFknYE7W9TlnY5isWll%2B4HixH9Zzd1WJP3kJ0dzq%2FAg1W2EXxeTPfcmndnOhaUDDLdW%2FQh8%2FxfP31XvvH%2B3nO%2B7Uiamh%2BEh2wD%2FPEtLbZmkvRzvcyZcfc8eOn0tgi0h5%2BevD2ZUkADyDV4ccc%2FH&X-Amz-Signature=79d3d7a288c224bf248b3204e71cb9e5239c230a4c3419b9ff7a3fd4155efd40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECSRQ3O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ALMLR%2Fal%2Bw8LAt%2B0ka28L8itotDCe1g8v8e5neG2BAiEAmMe8jpz%2BBNNj1viZgkckuvzGeeWu%2BglRwUPbTQMCoAEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLEokuhJY39WRuMTXCrcA6AlSfCQPj7oOImPvsM9x%2Byy53EF9rCW1xemC2zghzElqW5v00PWO5ITjEc82YN6eXU0MxJ9K11F9NfnY5HjSPqvNE%2BZ4pKpOZA%2F3rPndUjW5m3uzTwcrTg0GoaLIayYmsMh8DphSGJmyQNbvPuvIxhUYmb9iD0uiag0EfKyPHLC50SHBEbjHwwUh219W0PMcw1ye1eKLs7Y4lHFzlJUmeags%2B%2FBxcU33z7Z%2F0avSiIvSH%2BEizh6AnxCnoZGmvvMTS3KR6W4OWfNa%2Fpq3BOv4IBceWUGPabk%2FJrcM4qTaEjOlV0TBKBIyomcuiv8vtPDVm1k6JnhN7Q3bMHyJUmyC2pt3hUAw7Unm3lD7LVN3nbG9abfnuENID8cL%2F00sezC4C2qcQKTzc0UScIbB98msZrYLLISvQ4n%2FPHTY11Pc%2F%2FaA37FQWfEWpAOVkCIOp8gmKHLJXfVLkerMmSSv1HUoL%2BMHFQ4BBAJ5ZnizGI118gJ4g4Jp%2Fm7gO%2B%2F88O%2BdLGe1JtEFbKvWbdfB2NDvzmvrP3lrsunukejt5XsS2NzuRqPFTSidxICI3ZIDn58Wj77pyv5m2AzAZ%2FD%2FdBVtUMnnck0INzZu5S8PcOwTSgmKtvmg0kQXGDRxVzz8NgnMMv%2Fx78GOqUBSCqYAe0QRchEvZP8K5l29ziHtp0JpL6J5jG5IUskSD3cTD7FGCbNDQ%2FfCJo%2B49iXaDSwYIkvShFknYE7W9TlnY5isWll%2B4HixH9Zzd1WJP3kJ0dzq%2FAg1W2EXxeTPfcmndnOhaUDDLdW%2FQh8%2FxfP31XvvH%2B3nO%2B7Uiamh%2BEh2wD%2FPEtLbZmkvRzvcyZcfc8eOn0tgi0h5%2BevD2ZUkADyDV4ccc%2FH&X-Amz-Signature=9561c1cc69e0e43c92499b98975cacb388ab49c7d5b8d18b5badb4e9a91de7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECSRQ3O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ALMLR%2Fal%2Bw8LAt%2B0ka28L8itotDCe1g8v8e5neG2BAiEAmMe8jpz%2BBNNj1viZgkckuvzGeeWu%2BglRwUPbTQMCoAEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLEokuhJY39WRuMTXCrcA6AlSfCQPj7oOImPvsM9x%2Byy53EF9rCW1xemC2zghzElqW5v00PWO5ITjEc82YN6eXU0MxJ9K11F9NfnY5HjSPqvNE%2BZ4pKpOZA%2F3rPndUjW5m3uzTwcrTg0GoaLIayYmsMh8DphSGJmyQNbvPuvIxhUYmb9iD0uiag0EfKyPHLC50SHBEbjHwwUh219W0PMcw1ye1eKLs7Y4lHFzlJUmeags%2B%2FBxcU33z7Z%2F0avSiIvSH%2BEizh6AnxCnoZGmvvMTS3KR6W4OWfNa%2Fpq3BOv4IBceWUGPabk%2FJrcM4qTaEjOlV0TBKBIyomcuiv8vtPDVm1k6JnhN7Q3bMHyJUmyC2pt3hUAw7Unm3lD7LVN3nbG9abfnuENID8cL%2F00sezC4C2qcQKTzc0UScIbB98msZrYLLISvQ4n%2FPHTY11Pc%2F%2FaA37FQWfEWpAOVkCIOp8gmKHLJXfVLkerMmSSv1HUoL%2BMHFQ4BBAJ5ZnizGI118gJ4g4Jp%2Fm7gO%2B%2F88O%2BdLGe1JtEFbKvWbdfB2NDvzmvrP3lrsunukejt5XsS2NzuRqPFTSidxICI3ZIDn58Wj77pyv5m2AzAZ%2FD%2FdBVtUMnnck0INzZu5S8PcOwTSgmKtvmg0kQXGDRxVzz8NgnMMv%2Fx78GOqUBSCqYAe0QRchEvZP8K5l29ziHtp0JpL6J5jG5IUskSD3cTD7FGCbNDQ%2FfCJo%2B49iXaDSwYIkvShFknYE7W9TlnY5isWll%2B4HixH9Zzd1WJP3kJ0dzq%2FAg1W2EXxeTPfcmndnOhaUDDLdW%2FQh8%2FxfP31XvvH%2B3nO%2B7Uiamh%2BEh2wD%2FPEtLbZmkvRzvcyZcfc8eOn0tgi0h5%2BevD2ZUkADyDV4ccc%2FH&X-Amz-Signature=90109f77362d2f0e99ef6d58b52be79ab17284f4404cdb8ab510bb1c7d2cfd46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECSRQ3O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ALMLR%2Fal%2Bw8LAt%2B0ka28L8itotDCe1g8v8e5neG2BAiEAmMe8jpz%2BBNNj1viZgkckuvzGeeWu%2BglRwUPbTQMCoAEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLEokuhJY39WRuMTXCrcA6AlSfCQPj7oOImPvsM9x%2Byy53EF9rCW1xemC2zghzElqW5v00PWO5ITjEc82YN6eXU0MxJ9K11F9NfnY5HjSPqvNE%2BZ4pKpOZA%2F3rPndUjW5m3uzTwcrTg0GoaLIayYmsMh8DphSGJmyQNbvPuvIxhUYmb9iD0uiag0EfKyPHLC50SHBEbjHwwUh219W0PMcw1ye1eKLs7Y4lHFzlJUmeags%2B%2FBxcU33z7Z%2F0avSiIvSH%2BEizh6AnxCnoZGmvvMTS3KR6W4OWfNa%2Fpq3BOv4IBceWUGPabk%2FJrcM4qTaEjOlV0TBKBIyomcuiv8vtPDVm1k6JnhN7Q3bMHyJUmyC2pt3hUAw7Unm3lD7LVN3nbG9abfnuENID8cL%2F00sezC4C2qcQKTzc0UScIbB98msZrYLLISvQ4n%2FPHTY11Pc%2F%2FaA37FQWfEWpAOVkCIOp8gmKHLJXfVLkerMmSSv1HUoL%2BMHFQ4BBAJ5ZnizGI118gJ4g4Jp%2Fm7gO%2B%2F88O%2BdLGe1JtEFbKvWbdfB2NDvzmvrP3lrsunukejt5XsS2NzuRqPFTSidxICI3ZIDn58Wj77pyv5m2AzAZ%2FD%2FdBVtUMnnck0INzZu5S8PcOwTSgmKtvmg0kQXGDRxVzz8NgnMMv%2Fx78GOqUBSCqYAe0QRchEvZP8K5l29ziHtp0JpL6J5jG5IUskSD3cTD7FGCbNDQ%2FfCJo%2B49iXaDSwYIkvShFknYE7W9TlnY5isWll%2B4HixH9Zzd1WJP3kJ0dzq%2FAg1W2EXxeTPfcmndnOhaUDDLdW%2FQh8%2FxfP31XvvH%2B3nO%2B7Uiamh%2BEh2wD%2FPEtLbZmkvRzvcyZcfc8eOn0tgi0h5%2BevD2ZUkADyDV4ccc%2FH&X-Amz-Signature=3fd6325371e881a05507e39a627a336768c8ec410ee2dd8ee1127f7ee549e744&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

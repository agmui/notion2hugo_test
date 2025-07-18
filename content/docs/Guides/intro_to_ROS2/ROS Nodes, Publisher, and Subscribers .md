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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTPOQIU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHJLsSBdW9WsGNBAsX9H0QJvbrQnVwBusdqN8PX31naLAiEA%2BcRG05UzqGPUxBeXc4D9LiX2YetT2n5K8qVdEyDkNfYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrUB0Gwhzb%2BR124FyrcA2M%2BL3OhJgupKSLkEOlrzrBLFn2nU%2BLAQ0lFPrhzJn9zM%2BWKQ%2Be41yzw4qbJNJgruqxW66jLlFQbNhqNettvFkiMzWQoTaKreQpu8XaMl%2BYVbBQSHsdHRm3%2BrKKW0DgsX3EStcGWK%2FEbwue7pqeaAaJJ%2F4PH6tqailnNqfcDVYg%2B0SUBrYQOy6mYstWdOZ5oiRAEla%2F1Y24Rcn20sMbP19cB2VpEYCopsCwrK4FJiZm6gPNaxwH0oiHpROTXm83PEokoXBf1B6KpnToWcDNtt1EbZFrpZo8QKu3ceydeKE0AFq6KrV35oRdpd5YZ2mi4%2B0yPBoo6ckq%2BtQBWZm%2Fj4rUok4m%2BtnbqK%2FzXMsnS%2BZusai3wrCgkhKm%2B8GL2%2BP3nLDR3isJMcVFnNqouqv5FSFSe3vdkKdfmQlNyQ%2BFB1Pn9fw7deEUqzushII5ODZY4eM9mdmk%2F5Bo0TTUUvnJGyPDLGBSzASAazkP9HORHvGbk%2FwlAwDzt6meEbLhdSTCrK1rMvm8KJg06DjgHGhFLqY0ttRkrM42ztAmV0Xptx5m5la9A%2BbtSVXf1hM0VL2Ux4DZSgvoJUwNsGWX6uavl%2FK1tPFRLbsHvsxhDYQwYJKjIiyiDTnkVEbVtjPh8MLqj6MMGOqUBdxzL35jOhyjKcB%2Bl0adihmpQ1iSMv4Yb3zKgMOAJftQ6ht8f2355Eg%2Bf8hYnYSfda1ediHzqB9T63TKfOodK06uqR4xQLxwQX8yDSmNLgz9IPe0kmzs3OBO%2F%2B66pkAGBwhQenQjv8Js93wxv03EsUp8BPkoBzgVy3hQXOF01G18a8jvcBheLeMKG1NwAQKzNZsk19QW1mFeS1ce7Mr9BEYYl4PzT&X-Amz-Signature=d893769f66b0dfb03eef89b655bc0a3bf230463e950909a46a1cee7d7c88aee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTPOQIU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHJLsSBdW9WsGNBAsX9H0QJvbrQnVwBusdqN8PX31naLAiEA%2BcRG05UzqGPUxBeXc4D9LiX2YetT2n5K8qVdEyDkNfYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrUB0Gwhzb%2BR124FyrcA2M%2BL3OhJgupKSLkEOlrzrBLFn2nU%2BLAQ0lFPrhzJn9zM%2BWKQ%2Be41yzw4qbJNJgruqxW66jLlFQbNhqNettvFkiMzWQoTaKreQpu8XaMl%2BYVbBQSHsdHRm3%2BrKKW0DgsX3EStcGWK%2FEbwue7pqeaAaJJ%2F4PH6tqailnNqfcDVYg%2B0SUBrYQOy6mYstWdOZ5oiRAEla%2F1Y24Rcn20sMbP19cB2VpEYCopsCwrK4FJiZm6gPNaxwH0oiHpROTXm83PEokoXBf1B6KpnToWcDNtt1EbZFrpZo8QKu3ceydeKE0AFq6KrV35oRdpd5YZ2mi4%2B0yPBoo6ckq%2BtQBWZm%2Fj4rUok4m%2BtnbqK%2FzXMsnS%2BZusai3wrCgkhKm%2B8GL2%2BP3nLDR3isJMcVFnNqouqv5FSFSe3vdkKdfmQlNyQ%2BFB1Pn9fw7deEUqzushII5ODZY4eM9mdmk%2F5Bo0TTUUvnJGyPDLGBSzASAazkP9HORHvGbk%2FwlAwDzt6meEbLhdSTCrK1rMvm8KJg06DjgHGhFLqY0ttRkrM42ztAmV0Xptx5m5la9A%2BbtSVXf1hM0VL2Ux4DZSgvoJUwNsGWX6uavl%2FK1tPFRLbsHvsxhDYQwYJKjIiyiDTnkVEbVtjPh8MLqj6MMGOqUBdxzL35jOhyjKcB%2Bl0adihmpQ1iSMv4Yb3zKgMOAJftQ6ht8f2355Eg%2Bf8hYnYSfda1ediHzqB9T63TKfOodK06uqR4xQLxwQX8yDSmNLgz9IPe0kmzs3OBO%2F%2B66pkAGBwhQenQjv8Js93wxv03EsUp8BPkoBzgVy3hQXOF01G18a8jvcBheLeMKG1NwAQKzNZsk19QW1mFeS1ce7Mr9BEYYl4PzT&X-Amz-Signature=d0d545f72cc851b8d77de62e744d28a8a9487ca63a21562b4ae89c132e6afcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTPOQIU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHJLsSBdW9WsGNBAsX9H0QJvbrQnVwBusdqN8PX31naLAiEA%2BcRG05UzqGPUxBeXc4D9LiX2YetT2n5K8qVdEyDkNfYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrUB0Gwhzb%2BR124FyrcA2M%2BL3OhJgupKSLkEOlrzrBLFn2nU%2BLAQ0lFPrhzJn9zM%2BWKQ%2Be41yzw4qbJNJgruqxW66jLlFQbNhqNettvFkiMzWQoTaKreQpu8XaMl%2BYVbBQSHsdHRm3%2BrKKW0DgsX3EStcGWK%2FEbwue7pqeaAaJJ%2F4PH6tqailnNqfcDVYg%2B0SUBrYQOy6mYstWdOZ5oiRAEla%2F1Y24Rcn20sMbP19cB2VpEYCopsCwrK4FJiZm6gPNaxwH0oiHpROTXm83PEokoXBf1B6KpnToWcDNtt1EbZFrpZo8QKu3ceydeKE0AFq6KrV35oRdpd5YZ2mi4%2B0yPBoo6ckq%2BtQBWZm%2Fj4rUok4m%2BtnbqK%2FzXMsnS%2BZusai3wrCgkhKm%2B8GL2%2BP3nLDR3isJMcVFnNqouqv5FSFSe3vdkKdfmQlNyQ%2BFB1Pn9fw7deEUqzushII5ODZY4eM9mdmk%2F5Bo0TTUUvnJGyPDLGBSzASAazkP9HORHvGbk%2FwlAwDzt6meEbLhdSTCrK1rMvm8KJg06DjgHGhFLqY0ttRkrM42ztAmV0Xptx5m5la9A%2BbtSVXf1hM0VL2Ux4DZSgvoJUwNsGWX6uavl%2FK1tPFRLbsHvsxhDYQwYJKjIiyiDTnkVEbVtjPh8MLqj6MMGOqUBdxzL35jOhyjKcB%2Bl0adihmpQ1iSMv4Yb3zKgMOAJftQ6ht8f2355Eg%2Bf8hYnYSfda1ediHzqB9T63TKfOodK06uqR4xQLxwQX8yDSmNLgz9IPe0kmzs3OBO%2F%2B66pkAGBwhQenQjv8Js93wxv03EsUp8BPkoBzgVy3hQXOF01G18a8jvcBheLeMKG1NwAQKzNZsk19QW1mFeS1ce7Mr9BEYYl4PzT&X-Amz-Signature=68b553bfda0e0879b7260b0aa312bed0a340c70bebd320a7fa67b0d42e2214de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTPOQIU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHJLsSBdW9WsGNBAsX9H0QJvbrQnVwBusdqN8PX31naLAiEA%2BcRG05UzqGPUxBeXc4D9LiX2YetT2n5K8qVdEyDkNfYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrUB0Gwhzb%2BR124FyrcA2M%2BL3OhJgupKSLkEOlrzrBLFn2nU%2BLAQ0lFPrhzJn9zM%2BWKQ%2Be41yzw4qbJNJgruqxW66jLlFQbNhqNettvFkiMzWQoTaKreQpu8XaMl%2BYVbBQSHsdHRm3%2BrKKW0DgsX3EStcGWK%2FEbwue7pqeaAaJJ%2F4PH6tqailnNqfcDVYg%2B0SUBrYQOy6mYstWdOZ5oiRAEla%2F1Y24Rcn20sMbP19cB2VpEYCopsCwrK4FJiZm6gPNaxwH0oiHpROTXm83PEokoXBf1B6KpnToWcDNtt1EbZFrpZo8QKu3ceydeKE0AFq6KrV35oRdpd5YZ2mi4%2B0yPBoo6ckq%2BtQBWZm%2Fj4rUok4m%2BtnbqK%2FzXMsnS%2BZusai3wrCgkhKm%2B8GL2%2BP3nLDR3isJMcVFnNqouqv5FSFSe3vdkKdfmQlNyQ%2BFB1Pn9fw7deEUqzushII5ODZY4eM9mdmk%2F5Bo0TTUUvnJGyPDLGBSzASAazkP9HORHvGbk%2FwlAwDzt6meEbLhdSTCrK1rMvm8KJg06DjgHGhFLqY0ttRkrM42ztAmV0Xptx5m5la9A%2BbtSVXf1hM0VL2Ux4DZSgvoJUwNsGWX6uavl%2FK1tPFRLbsHvsxhDYQwYJKjIiyiDTnkVEbVtjPh8MLqj6MMGOqUBdxzL35jOhyjKcB%2Bl0adihmpQ1iSMv4Yb3zKgMOAJftQ6ht8f2355Eg%2Bf8hYnYSfda1ediHzqB9T63TKfOodK06uqR4xQLxwQX8yDSmNLgz9IPe0kmzs3OBO%2F%2B66pkAGBwhQenQjv8Js93wxv03EsUp8BPkoBzgVy3hQXOF01G18a8jvcBheLeMKG1NwAQKzNZsk19QW1mFeS1ce7Mr9BEYYl4PzT&X-Amz-Signature=216b250ab0bfc9cbfe7b01ccbb972b0b9ea1b3e009c18df1c115bd400d12cdc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTPOQIU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHJLsSBdW9WsGNBAsX9H0QJvbrQnVwBusdqN8PX31naLAiEA%2BcRG05UzqGPUxBeXc4D9LiX2YetT2n5K8qVdEyDkNfYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrUB0Gwhzb%2BR124FyrcA2M%2BL3OhJgupKSLkEOlrzrBLFn2nU%2BLAQ0lFPrhzJn9zM%2BWKQ%2Be41yzw4qbJNJgruqxW66jLlFQbNhqNettvFkiMzWQoTaKreQpu8XaMl%2BYVbBQSHsdHRm3%2BrKKW0DgsX3EStcGWK%2FEbwue7pqeaAaJJ%2F4PH6tqailnNqfcDVYg%2B0SUBrYQOy6mYstWdOZ5oiRAEla%2F1Y24Rcn20sMbP19cB2VpEYCopsCwrK4FJiZm6gPNaxwH0oiHpROTXm83PEokoXBf1B6KpnToWcDNtt1EbZFrpZo8QKu3ceydeKE0AFq6KrV35oRdpd5YZ2mi4%2B0yPBoo6ckq%2BtQBWZm%2Fj4rUok4m%2BtnbqK%2FzXMsnS%2BZusai3wrCgkhKm%2B8GL2%2BP3nLDR3isJMcVFnNqouqv5FSFSe3vdkKdfmQlNyQ%2BFB1Pn9fw7deEUqzushII5ODZY4eM9mdmk%2F5Bo0TTUUvnJGyPDLGBSzASAazkP9HORHvGbk%2FwlAwDzt6meEbLhdSTCrK1rMvm8KJg06DjgHGhFLqY0ttRkrM42ztAmV0Xptx5m5la9A%2BbtSVXf1hM0VL2Ux4DZSgvoJUwNsGWX6uavl%2FK1tPFRLbsHvsxhDYQwYJKjIiyiDTnkVEbVtjPh8MLqj6MMGOqUBdxzL35jOhyjKcB%2Bl0adihmpQ1iSMv4Yb3zKgMOAJftQ6ht8f2355Eg%2Bf8hYnYSfda1ediHzqB9T63TKfOodK06uqR4xQLxwQX8yDSmNLgz9IPe0kmzs3OBO%2F%2B66pkAGBwhQenQjv8Js93wxv03EsUp8BPkoBzgVy3hQXOF01G18a8jvcBheLeMKG1NwAQKzNZsk19QW1mFeS1ce7Mr9BEYYl4PzT&X-Amz-Signature=fbf2bdc04dec581f58ec5e54095ab563835c9dbb6c74fbf903ba0fcef2c378bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTPOQIU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHJLsSBdW9WsGNBAsX9H0QJvbrQnVwBusdqN8PX31naLAiEA%2BcRG05UzqGPUxBeXc4D9LiX2YetT2n5K8qVdEyDkNfYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrUB0Gwhzb%2BR124FyrcA2M%2BL3OhJgupKSLkEOlrzrBLFn2nU%2BLAQ0lFPrhzJn9zM%2BWKQ%2Be41yzw4qbJNJgruqxW66jLlFQbNhqNettvFkiMzWQoTaKreQpu8XaMl%2BYVbBQSHsdHRm3%2BrKKW0DgsX3EStcGWK%2FEbwue7pqeaAaJJ%2F4PH6tqailnNqfcDVYg%2B0SUBrYQOy6mYstWdOZ5oiRAEla%2F1Y24Rcn20sMbP19cB2VpEYCopsCwrK4FJiZm6gPNaxwH0oiHpROTXm83PEokoXBf1B6KpnToWcDNtt1EbZFrpZo8QKu3ceydeKE0AFq6KrV35oRdpd5YZ2mi4%2B0yPBoo6ckq%2BtQBWZm%2Fj4rUok4m%2BtnbqK%2FzXMsnS%2BZusai3wrCgkhKm%2B8GL2%2BP3nLDR3isJMcVFnNqouqv5FSFSe3vdkKdfmQlNyQ%2BFB1Pn9fw7deEUqzushII5ODZY4eM9mdmk%2F5Bo0TTUUvnJGyPDLGBSzASAazkP9HORHvGbk%2FwlAwDzt6meEbLhdSTCrK1rMvm8KJg06DjgHGhFLqY0ttRkrM42ztAmV0Xptx5m5la9A%2BbtSVXf1hM0VL2Ux4DZSgvoJUwNsGWX6uavl%2FK1tPFRLbsHvsxhDYQwYJKjIiyiDTnkVEbVtjPh8MLqj6MMGOqUBdxzL35jOhyjKcB%2Bl0adihmpQ1iSMv4Yb3zKgMOAJftQ6ht8f2355Eg%2Bf8hYnYSfda1ediHzqB9T63TKfOodK06uqR4xQLxwQX8yDSmNLgz9IPe0kmzs3OBO%2F%2B66pkAGBwhQenQjv8Js93wxv03EsUp8BPkoBzgVy3hQXOF01G18a8jvcBheLeMKG1NwAQKzNZsk19QW1mFeS1ce7Mr9BEYYl4PzT&X-Amz-Signature=78719863dc74f95183923e03b1a690423a0fe64098abf35ecf8afcd8c3723d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTPOQIU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHJLsSBdW9WsGNBAsX9H0QJvbrQnVwBusdqN8PX31naLAiEA%2BcRG05UzqGPUxBeXc4D9LiX2YetT2n5K8qVdEyDkNfYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrUB0Gwhzb%2BR124FyrcA2M%2BL3OhJgupKSLkEOlrzrBLFn2nU%2BLAQ0lFPrhzJn9zM%2BWKQ%2Be41yzw4qbJNJgruqxW66jLlFQbNhqNettvFkiMzWQoTaKreQpu8XaMl%2BYVbBQSHsdHRm3%2BrKKW0DgsX3EStcGWK%2FEbwue7pqeaAaJJ%2F4PH6tqailnNqfcDVYg%2B0SUBrYQOy6mYstWdOZ5oiRAEla%2F1Y24Rcn20sMbP19cB2VpEYCopsCwrK4FJiZm6gPNaxwH0oiHpROTXm83PEokoXBf1B6KpnToWcDNtt1EbZFrpZo8QKu3ceydeKE0AFq6KrV35oRdpd5YZ2mi4%2B0yPBoo6ckq%2BtQBWZm%2Fj4rUok4m%2BtnbqK%2FzXMsnS%2BZusai3wrCgkhKm%2B8GL2%2BP3nLDR3isJMcVFnNqouqv5FSFSe3vdkKdfmQlNyQ%2BFB1Pn9fw7deEUqzushII5ODZY4eM9mdmk%2F5Bo0TTUUvnJGyPDLGBSzASAazkP9HORHvGbk%2FwlAwDzt6meEbLhdSTCrK1rMvm8KJg06DjgHGhFLqY0ttRkrM42ztAmV0Xptx5m5la9A%2BbtSVXf1hM0VL2Ux4DZSgvoJUwNsGWX6uavl%2FK1tPFRLbsHvsxhDYQwYJKjIiyiDTnkVEbVtjPh8MLqj6MMGOqUBdxzL35jOhyjKcB%2Bl0adihmpQ1iSMv4Yb3zKgMOAJftQ6ht8f2355Eg%2Bf8hYnYSfda1ediHzqB9T63TKfOodK06uqR4xQLxwQX8yDSmNLgz9IPe0kmzs3OBO%2F%2B66pkAGBwhQenQjv8Js93wxv03EsUp8BPkoBzgVy3hQXOF01G18a8jvcBheLeMKG1NwAQKzNZsk19QW1mFeS1ce7Mr9BEYYl4PzT&X-Amz-Signature=a068133d3eeb1cf547db6c5c934af752625a785668b2b91bbb860c810179812f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTPOQIU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHJLsSBdW9WsGNBAsX9H0QJvbrQnVwBusdqN8PX31naLAiEA%2BcRG05UzqGPUxBeXc4D9LiX2YetT2n5K8qVdEyDkNfYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrUB0Gwhzb%2BR124FyrcA2M%2BL3OhJgupKSLkEOlrzrBLFn2nU%2BLAQ0lFPrhzJn9zM%2BWKQ%2Be41yzw4qbJNJgruqxW66jLlFQbNhqNettvFkiMzWQoTaKreQpu8XaMl%2BYVbBQSHsdHRm3%2BrKKW0DgsX3EStcGWK%2FEbwue7pqeaAaJJ%2F4PH6tqailnNqfcDVYg%2B0SUBrYQOy6mYstWdOZ5oiRAEla%2F1Y24Rcn20sMbP19cB2VpEYCopsCwrK4FJiZm6gPNaxwH0oiHpROTXm83PEokoXBf1B6KpnToWcDNtt1EbZFrpZo8QKu3ceydeKE0AFq6KrV35oRdpd5YZ2mi4%2B0yPBoo6ckq%2BtQBWZm%2Fj4rUok4m%2BtnbqK%2FzXMsnS%2BZusai3wrCgkhKm%2B8GL2%2BP3nLDR3isJMcVFnNqouqv5FSFSe3vdkKdfmQlNyQ%2BFB1Pn9fw7deEUqzushII5ODZY4eM9mdmk%2F5Bo0TTUUvnJGyPDLGBSzASAazkP9HORHvGbk%2FwlAwDzt6meEbLhdSTCrK1rMvm8KJg06DjgHGhFLqY0ttRkrM42ztAmV0Xptx5m5la9A%2BbtSVXf1hM0VL2Ux4DZSgvoJUwNsGWX6uavl%2FK1tPFRLbsHvsxhDYQwYJKjIiyiDTnkVEbVtjPh8MLqj6MMGOqUBdxzL35jOhyjKcB%2Bl0adihmpQ1iSMv4Yb3zKgMOAJftQ6ht8f2355Eg%2Bf8hYnYSfda1ediHzqB9T63TKfOodK06uqR4xQLxwQX8yDSmNLgz9IPe0kmzs3OBO%2F%2B66pkAGBwhQenQjv8Js93wxv03EsUp8BPkoBzgVy3hQXOF01G18a8jvcBheLeMKG1NwAQKzNZsk19QW1mFeS1ce7Mr9BEYYl4PzT&X-Amz-Signature=3cddb85ab96900013d443a69ff19afa2a7e45ea1275117f77d6de3cfab0206fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

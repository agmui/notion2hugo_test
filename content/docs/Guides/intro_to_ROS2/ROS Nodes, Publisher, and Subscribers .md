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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSIGCOH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICurtVVz5miyg96kQZfA23l3lUr90PcRqCY4CJoj5vqFAiEAzDKapU3xMABlt0ycofT6D8uHUTjL9IgErXX39IDZA9EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZvQRlzA2FGRtKAZCrcA8cQVbiRzGcMn4OyAAyOt6ONDL7c0y0No6JwJnTGHq7mJxSWMoYNsX8ukUksk8ySGZ15ZFEbWWwZzNbit9wNYchEMdrYWSjBNNzr%2FjmhlxQAwH76fe%2BXzpaabCvz5b6Hv0m7pGsLK88Pmjn6V2nEwb5X7OCyJn8apZGx3UfBv03YqeVWeQ3a7cGS8B9U4SsocV8vklPwF1puo7xGlGE35EHQBt6ZRZm6%2B0Ss5XllYV0L6sYC7OfcVx6G5uZtkGf5s0tK22YYXBSBAFMP2njoFJWIk5%2FAWdaikC5MeGsb6UXhLDFA8GmZx94r8%2FMm%2FNXfdLJzzfOGTlggha64mVtGzesjP7fxse%2BtB9r9hocsNssn0b%2FXzmzgnJcN%2BF%2BWmEk%2Fzh2BbDmrtUYtEPsSbRNE9rw9dlMygvmm4kVMpG0ZfiMwswbBDy8wrmJjYftm5Lc9rSpYtfqxy%2BD2RRdR6oCeiZPmwSnyjmL76TGnC%2FUk%2FGtVdRx2T1s6e5CCnDb0q1HMjV36FquBLNa4Rcl%2FtutrDQqAx8GF8Df7cZIUY%2FxC9d%2BlU0WtWLu7jekqwxRkHBVNBYhL4%2B3YmwCSvdObGNKWr5jWmf5OfjQtMLnW1eYT5QAcHWeVptLe9%2BTyQjKhML3evb8GOqUBhiQsiTIV%2FwTDAEeR2z6wDcx%2BoDJAcBRa3Z5P2qovrRTSHYdbGkYZ87VP7MRu577ZKiIpzLWwo7uGzs4OxseyxP6YeFtzIWP5AjpkxNGTXRHAgLK3VVtA2207OzpEpfAVgK70rWX5cFXtlDBoZ0bQe0vKQU7o66SHZF4t6dal9dXduQ%2B8OTjzLQbGlALuybVKLTNeH8ujqT%2BbVTmOowiGCnUvPlpJ&X-Amz-Signature=d3351d2d3beaf64612ba09f2e884538b5c753a3a74d7eb456d99b39859b49d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSIGCOH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICurtVVz5miyg96kQZfA23l3lUr90PcRqCY4CJoj5vqFAiEAzDKapU3xMABlt0ycofT6D8uHUTjL9IgErXX39IDZA9EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZvQRlzA2FGRtKAZCrcA8cQVbiRzGcMn4OyAAyOt6ONDL7c0y0No6JwJnTGHq7mJxSWMoYNsX8ukUksk8ySGZ15ZFEbWWwZzNbit9wNYchEMdrYWSjBNNzr%2FjmhlxQAwH76fe%2BXzpaabCvz5b6Hv0m7pGsLK88Pmjn6V2nEwb5X7OCyJn8apZGx3UfBv03YqeVWeQ3a7cGS8B9U4SsocV8vklPwF1puo7xGlGE35EHQBt6ZRZm6%2B0Ss5XllYV0L6sYC7OfcVx6G5uZtkGf5s0tK22YYXBSBAFMP2njoFJWIk5%2FAWdaikC5MeGsb6UXhLDFA8GmZx94r8%2FMm%2FNXfdLJzzfOGTlggha64mVtGzesjP7fxse%2BtB9r9hocsNssn0b%2FXzmzgnJcN%2BF%2BWmEk%2Fzh2BbDmrtUYtEPsSbRNE9rw9dlMygvmm4kVMpG0ZfiMwswbBDy8wrmJjYftm5Lc9rSpYtfqxy%2BD2RRdR6oCeiZPmwSnyjmL76TGnC%2FUk%2FGtVdRx2T1s6e5CCnDb0q1HMjV36FquBLNa4Rcl%2FtutrDQqAx8GF8Df7cZIUY%2FxC9d%2BlU0WtWLu7jekqwxRkHBVNBYhL4%2B3YmwCSvdObGNKWr5jWmf5OfjQtMLnW1eYT5QAcHWeVptLe9%2BTyQjKhML3evb8GOqUBhiQsiTIV%2FwTDAEeR2z6wDcx%2BoDJAcBRa3Z5P2qovrRTSHYdbGkYZ87VP7MRu577ZKiIpzLWwo7uGzs4OxseyxP6YeFtzIWP5AjpkxNGTXRHAgLK3VVtA2207OzpEpfAVgK70rWX5cFXtlDBoZ0bQe0vKQU7o66SHZF4t6dal9dXduQ%2B8OTjzLQbGlALuybVKLTNeH8ujqT%2BbVTmOowiGCnUvPlpJ&X-Amz-Signature=4dec312ab129eea12028721d3a8e94d7d5d482e010edce9dc825a617323989d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSIGCOH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICurtVVz5miyg96kQZfA23l3lUr90PcRqCY4CJoj5vqFAiEAzDKapU3xMABlt0ycofT6D8uHUTjL9IgErXX39IDZA9EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZvQRlzA2FGRtKAZCrcA8cQVbiRzGcMn4OyAAyOt6ONDL7c0y0No6JwJnTGHq7mJxSWMoYNsX8ukUksk8ySGZ15ZFEbWWwZzNbit9wNYchEMdrYWSjBNNzr%2FjmhlxQAwH76fe%2BXzpaabCvz5b6Hv0m7pGsLK88Pmjn6V2nEwb5X7OCyJn8apZGx3UfBv03YqeVWeQ3a7cGS8B9U4SsocV8vklPwF1puo7xGlGE35EHQBt6ZRZm6%2B0Ss5XllYV0L6sYC7OfcVx6G5uZtkGf5s0tK22YYXBSBAFMP2njoFJWIk5%2FAWdaikC5MeGsb6UXhLDFA8GmZx94r8%2FMm%2FNXfdLJzzfOGTlggha64mVtGzesjP7fxse%2BtB9r9hocsNssn0b%2FXzmzgnJcN%2BF%2BWmEk%2Fzh2BbDmrtUYtEPsSbRNE9rw9dlMygvmm4kVMpG0ZfiMwswbBDy8wrmJjYftm5Lc9rSpYtfqxy%2BD2RRdR6oCeiZPmwSnyjmL76TGnC%2FUk%2FGtVdRx2T1s6e5CCnDb0q1HMjV36FquBLNa4Rcl%2FtutrDQqAx8GF8Df7cZIUY%2FxC9d%2BlU0WtWLu7jekqwxRkHBVNBYhL4%2B3YmwCSvdObGNKWr5jWmf5OfjQtMLnW1eYT5QAcHWeVptLe9%2BTyQjKhML3evb8GOqUBhiQsiTIV%2FwTDAEeR2z6wDcx%2BoDJAcBRa3Z5P2qovrRTSHYdbGkYZ87VP7MRu577ZKiIpzLWwo7uGzs4OxseyxP6YeFtzIWP5AjpkxNGTXRHAgLK3VVtA2207OzpEpfAVgK70rWX5cFXtlDBoZ0bQe0vKQU7o66SHZF4t6dal9dXduQ%2B8OTjzLQbGlALuybVKLTNeH8ujqT%2BbVTmOowiGCnUvPlpJ&X-Amz-Signature=dc0d703e2b0265096306989a6ef9721bd274ba38cff1f28989e5bbb1efc1f0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSIGCOH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICurtVVz5miyg96kQZfA23l3lUr90PcRqCY4CJoj5vqFAiEAzDKapU3xMABlt0ycofT6D8uHUTjL9IgErXX39IDZA9EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZvQRlzA2FGRtKAZCrcA8cQVbiRzGcMn4OyAAyOt6ONDL7c0y0No6JwJnTGHq7mJxSWMoYNsX8ukUksk8ySGZ15ZFEbWWwZzNbit9wNYchEMdrYWSjBNNzr%2FjmhlxQAwH76fe%2BXzpaabCvz5b6Hv0m7pGsLK88Pmjn6V2nEwb5X7OCyJn8apZGx3UfBv03YqeVWeQ3a7cGS8B9U4SsocV8vklPwF1puo7xGlGE35EHQBt6ZRZm6%2B0Ss5XllYV0L6sYC7OfcVx6G5uZtkGf5s0tK22YYXBSBAFMP2njoFJWIk5%2FAWdaikC5MeGsb6UXhLDFA8GmZx94r8%2FMm%2FNXfdLJzzfOGTlggha64mVtGzesjP7fxse%2BtB9r9hocsNssn0b%2FXzmzgnJcN%2BF%2BWmEk%2Fzh2BbDmrtUYtEPsSbRNE9rw9dlMygvmm4kVMpG0ZfiMwswbBDy8wrmJjYftm5Lc9rSpYtfqxy%2BD2RRdR6oCeiZPmwSnyjmL76TGnC%2FUk%2FGtVdRx2T1s6e5CCnDb0q1HMjV36FquBLNa4Rcl%2FtutrDQqAx8GF8Df7cZIUY%2FxC9d%2BlU0WtWLu7jekqwxRkHBVNBYhL4%2B3YmwCSvdObGNKWr5jWmf5OfjQtMLnW1eYT5QAcHWeVptLe9%2BTyQjKhML3evb8GOqUBhiQsiTIV%2FwTDAEeR2z6wDcx%2BoDJAcBRa3Z5P2qovrRTSHYdbGkYZ87VP7MRu577ZKiIpzLWwo7uGzs4OxseyxP6YeFtzIWP5AjpkxNGTXRHAgLK3VVtA2207OzpEpfAVgK70rWX5cFXtlDBoZ0bQe0vKQU7o66SHZF4t6dal9dXduQ%2B8OTjzLQbGlALuybVKLTNeH8ujqT%2BbVTmOowiGCnUvPlpJ&X-Amz-Signature=817f6db2035e59ba7366253db04e505da5a366be220506a94debee70ef43bd1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSIGCOH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICurtVVz5miyg96kQZfA23l3lUr90PcRqCY4CJoj5vqFAiEAzDKapU3xMABlt0ycofT6D8uHUTjL9IgErXX39IDZA9EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZvQRlzA2FGRtKAZCrcA8cQVbiRzGcMn4OyAAyOt6ONDL7c0y0No6JwJnTGHq7mJxSWMoYNsX8ukUksk8ySGZ15ZFEbWWwZzNbit9wNYchEMdrYWSjBNNzr%2FjmhlxQAwH76fe%2BXzpaabCvz5b6Hv0m7pGsLK88Pmjn6V2nEwb5X7OCyJn8apZGx3UfBv03YqeVWeQ3a7cGS8B9U4SsocV8vklPwF1puo7xGlGE35EHQBt6ZRZm6%2B0Ss5XllYV0L6sYC7OfcVx6G5uZtkGf5s0tK22YYXBSBAFMP2njoFJWIk5%2FAWdaikC5MeGsb6UXhLDFA8GmZx94r8%2FMm%2FNXfdLJzzfOGTlggha64mVtGzesjP7fxse%2BtB9r9hocsNssn0b%2FXzmzgnJcN%2BF%2BWmEk%2Fzh2BbDmrtUYtEPsSbRNE9rw9dlMygvmm4kVMpG0ZfiMwswbBDy8wrmJjYftm5Lc9rSpYtfqxy%2BD2RRdR6oCeiZPmwSnyjmL76TGnC%2FUk%2FGtVdRx2T1s6e5CCnDb0q1HMjV36FquBLNa4Rcl%2FtutrDQqAx8GF8Df7cZIUY%2FxC9d%2BlU0WtWLu7jekqwxRkHBVNBYhL4%2B3YmwCSvdObGNKWr5jWmf5OfjQtMLnW1eYT5QAcHWeVptLe9%2BTyQjKhML3evb8GOqUBhiQsiTIV%2FwTDAEeR2z6wDcx%2BoDJAcBRa3Z5P2qovrRTSHYdbGkYZ87VP7MRu577ZKiIpzLWwo7uGzs4OxseyxP6YeFtzIWP5AjpkxNGTXRHAgLK3VVtA2207OzpEpfAVgK70rWX5cFXtlDBoZ0bQe0vKQU7o66SHZF4t6dal9dXduQ%2B8OTjzLQbGlALuybVKLTNeH8ujqT%2BbVTmOowiGCnUvPlpJ&X-Amz-Signature=aa0630eeab7a50ed9fd9904e4b8afeeaabd4e5fd91d6659a2acfe1bc69b1a6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSIGCOH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICurtVVz5miyg96kQZfA23l3lUr90PcRqCY4CJoj5vqFAiEAzDKapU3xMABlt0ycofT6D8uHUTjL9IgErXX39IDZA9EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZvQRlzA2FGRtKAZCrcA8cQVbiRzGcMn4OyAAyOt6ONDL7c0y0No6JwJnTGHq7mJxSWMoYNsX8ukUksk8ySGZ15ZFEbWWwZzNbit9wNYchEMdrYWSjBNNzr%2FjmhlxQAwH76fe%2BXzpaabCvz5b6Hv0m7pGsLK88Pmjn6V2nEwb5X7OCyJn8apZGx3UfBv03YqeVWeQ3a7cGS8B9U4SsocV8vklPwF1puo7xGlGE35EHQBt6ZRZm6%2B0Ss5XllYV0L6sYC7OfcVx6G5uZtkGf5s0tK22YYXBSBAFMP2njoFJWIk5%2FAWdaikC5MeGsb6UXhLDFA8GmZx94r8%2FMm%2FNXfdLJzzfOGTlggha64mVtGzesjP7fxse%2BtB9r9hocsNssn0b%2FXzmzgnJcN%2BF%2BWmEk%2Fzh2BbDmrtUYtEPsSbRNE9rw9dlMygvmm4kVMpG0ZfiMwswbBDy8wrmJjYftm5Lc9rSpYtfqxy%2BD2RRdR6oCeiZPmwSnyjmL76TGnC%2FUk%2FGtVdRx2T1s6e5CCnDb0q1HMjV36FquBLNa4Rcl%2FtutrDQqAx8GF8Df7cZIUY%2FxC9d%2BlU0WtWLu7jekqwxRkHBVNBYhL4%2B3YmwCSvdObGNKWr5jWmf5OfjQtMLnW1eYT5QAcHWeVptLe9%2BTyQjKhML3evb8GOqUBhiQsiTIV%2FwTDAEeR2z6wDcx%2BoDJAcBRa3Z5P2qovrRTSHYdbGkYZ87VP7MRu577ZKiIpzLWwo7uGzs4OxseyxP6YeFtzIWP5AjpkxNGTXRHAgLK3VVtA2207OzpEpfAVgK70rWX5cFXtlDBoZ0bQe0vKQU7o66SHZF4t6dal9dXduQ%2B8OTjzLQbGlALuybVKLTNeH8ujqT%2BbVTmOowiGCnUvPlpJ&X-Amz-Signature=b13c7c0eb0b4073b14c87a08cf22209e2f3d9073a9a16c98593e2484df61f3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSIGCOH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICurtVVz5miyg96kQZfA23l3lUr90PcRqCY4CJoj5vqFAiEAzDKapU3xMABlt0ycofT6D8uHUTjL9IgErXX39IDZA9EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZvQRlzA2FGRtKAZCrcA8cQVbiRzGcMn4OyAAyOt6ONDL7c0y0No6JwJnTGHq7mJxSWMoYNsX8ukUksk8ySGZ15ZFEbWWwZzNbit9wNYchEMdrYWSjBNNzr%2FjmhlxQAwH76fe%2BXzpaabCvz5b6Hv0m7pGsLK88Pmjn6V2nEwb5X7OCyJn8apZGx3UfBv03YqeVWeQ3a7cGS8B9U4SsocV8vklPwF1puo7xGlGE35EHQBt6ZRZm6%2B0Ss5XllYV0L6sYC7OfcVx6G5uZtkGf5s0tK22YYXBSBAFMP2njoFJWIk5%2FAWdaikC5MeGsb6UXhLDFA8GmZx94r8%2FMm%2FNXfdLJzzfOGTlggha64mVtGzesjP7fxse%2BtB9r9hocsNssn0b%2FXzmzgnJcN%2BF%2BWmEk%2Fzh2BbDmrtUYtEPsSbRNE9rw9dlMygvmm4kVMpG0ZfiMwswbBDy8wrmJjYftm5Lc9rSpYtfqxy%2BD2RRdR6oCeiZPmwSnyjmL76TGnC%2FUk%2FGtVdRx2T1s6e5CCnDb0q1HMjV36FquBLNa4Rcl%2FtutrDQqAx8GF8Df7cZIUY%2FxC9d%2BlU0WtWLu7jekqwxRkHBVNBYhL4%2B3YmwCSvdObGNKWr5jWmf5OfjQtMLnW1eYT5QAcHWeVptLe9%2BTyQjKhML3evb8GOqUBhiQsiTIV%2FwTDAEeR2z6wDcx%2BoDJAcBRa3Z5P2qovrRTSHYdbGkYZ87VP7MRu577ZKiIpzLWwo7uGzs4OxseyxP6YeFtzIWP5AjpkxNGTXRHAgLK3VVtA2207OzpEpfAVgK70rWX5cFXtlDBoZ0bQe0vKQU7o66SHZF4t6dal9dXduQ%2B8OTjzLQbGlALuybVKLTNeH8ujqT%2BbVTmOowiGCnUvPlpJ&X-Amz-Signature=9e8863a51d8d669fcb00831cab955793dc66d9451cf3b0693727da731120dc50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSIGCOH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICurtVVz5miyg96kQZfA23l3lUr90PcRqCY4CJoj5vqFAiEAzDKapU3xMABlt0ycofT6D8uHUTjL9IgErXX39IDZA9EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZvQRlzA2FGRtKAZCrcA8cQVbiRzGcMn4OyAAyOt6ONDL7c0y0No6JwJnTGHq7mJxSWMoYNsX8ukUksk8ySGZ15ZFEbWWwZzNbit9wNYchEMdrYWSjBNNzr%2FjmhlxQAwH76fe%2BXzpaabCvz5b6Hv0m7pGsLK88Pmjn6V2nEwb5X7OCyJn8apZGx3UfBv03YqeVWeQ3a7cGS8B9U4SsocV8vklPwF1puo7xGlGE35EHQBt6ZRZm6%2B0Ss5XllYV0L6sYC7OfcVx6G5uZtkGf5s0tK22YYXBSBAFMP2njoFJWIk5%2FAWdaikC5MeGsb6UXhLDFA8GmZx94r8%2FMm%2FNXfdLJzzfOGTlggha64mVtGzesjP7fxse%2BtB9r9hocsNssn0b%2FXzmzgnJcN%2BF%2BWmEk%2Fzh2BbDmrtUYtEPsSbRNE9rw9dlMygvmm4kVMpG0ZfiMwswbBDy8wrmJjYftm5Lc9rSpYtfqxy%2BD2RRdR6oCeiZPmwSnyjmL76TGnC%2FUk%2FGtVdRx2T1s6e5CCnDb0q1HMjV36FquBLNa4Rcl%2FtutrDQqAx8GF8Df7cZIUY%2FxC9d%2BlU0WtWLu7jekqwxRkHBVNBYhL4%2B3YmwCSvdObGNKWr5jWmf5OfjQtMLnW1eYT5QAcHWeVptLe9%2BTyQjKhML3evb8GOqUBhiQsiTIV%2FwTDAEeR2z6wDcx%2BoDJAcBRa3Z5P2qovrRTSHYdbGkYZ87VP7MRu577ZKiIpzLWwo7uGzs4OxseyxP6YeFtzIWP5AjpkxNGTXRHAgLK3VVtA2207OzpEpfAVgK70rWX5cFXtlDBoZ0bQe0vKQU7o66SHZF4t6dal9dXduQ%2B8OTjzLQbGlALuybVKLTNeH8ujqT%2BbVTmOowiGCnUvPlpJ&X-Amz-Signature=4efd56f00dde8ffe276767dd9460505cf557b4429dd9393863a5fa210fd88c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

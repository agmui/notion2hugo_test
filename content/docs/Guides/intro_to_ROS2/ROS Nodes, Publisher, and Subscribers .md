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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBXC67N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDtLXZhYeoNJlJEYpDf4%2FrKPMntSjHeI4n7WmDcBe%2BOmQIgdHKMYYyVwW36ZqnMSEE86HZqDXGYl4Zh82Z%2FhQ8vdnsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbxvvzFvcbeCjPjnyrcA4qdfdKUk4DG9qydYLssIbuza1J%2FeGS66%2BsZn96JqOwg9S%2FzhWDtKkvuKzgOP0jlKMk3QC5RAS8mpMmr5hlkgYqWBNYrW7Vp0LCcag%2B4X3a%2Fcmg%2FJd69OlsYCuFd%2BRuGUbM%2FYMEIYAeS2b%2Bi7Y5h2YSlYBLw4NkP1L0voKJN0ghW%2Bk%2BioOkWtl6kR95g%2FRlLol8MpYPFHBvOpJ0JEgMeLx5Tz6eR0jYluVOgMNqkPanvThab3b8uaAchUenvT1Gd1hkI4%2BWZvErbGNOxZb7Q89kRwkNPPnCAslHyiUASNNT6trW1qS7kJlaT5bm%2BPq6yispHmzxFKf6wdn9SNQSuIq5h8p1SQhgjOlEpdma3gVGVcxb81poKuaB1FckAf0Vol%2FxYLY079fMkjxX%2BgOxSuVMl1xnIWgbmmdwL18hGmGbknsNjBprNLHOB%2BKJGhbR%2Fom6yIr%2FDv7AMXulUUSziWNS67rvO32J2m4RxiFTT4ksUF9ocn0xhws2jzDY0bgRZXpUEYz7PAfrXvoOjpFZm1vJ3rgThBS63CVJOLAZlBVpbMfEwuZCejovlMQTB4zi7DoHBC3NBj8zLIlDFjNHyNBbiIQaNcP8cmqwUkIqhxtTG%2BPccIvLBQZQ1Vw4DMLKq%2Bb4GOqUBCedHVT4BHZuGuSbAsXIFVUg%2FDqcjGwpWd9UFQzei1DXALHvLelypp%2BDS9hxZqJ5YVz9STgCnZClePLpA2hAIuvrrYZ8lq%2F8fK8%2FB6md2pdpSH053VcFv8WPa5OZei%2B2L6ToXXtXIkAZfdvzPODlZHXqDp6wOJ%2BQ7mjcjGUrdFyeHCG%2FPTmmTvd85oBzjM33eHsiwzZ4G%2BUe%2Bt9QVJ8SGoRmN3tNK&X-Amz-Signature=2cc45658ac939913509de1b02f85fc92019e91d1ba06bb29930d0112f20b9e58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBXC67N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDtLXZhYeoNJlJEYpDf4%2FrKPMntSjHeI4n7WmDcBe%2BOmQIgdHKMYYyVwW36ZqnMSEE86HZqDXGYl4Zh82Z%2FhQ8vdnsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbxvvzFvcbeCjPjnyrcA4qdfdKUk4DG9qydYLssIbuza1J%2FeGS66%2BsZn96JqOwg9S%2FzhWDtKkvuKzgOP0jlKMk3QC5RAS8mpMmr5hlkgYqWBNYrW7Vp0LCcag%2B4X3a%2Fcmg%2FJd69OlsYCuFd%2BRuGUbM%2FYMEIYAeS2b%2Bi7Y5h2YSlYBLw4NkP1L0voKJN0ghW%2Bk%2BioOkWtl6kR95g%2FRlLol8MpYPFHBvOpJ0JEgMeLx5Tz6eR0jYluVOgMNqkPanvThab3b8uaAchUenvT1Gd1hkI4%2BWZvErbGNOxZb7Q89kRwkNPPnCAslHyiUASNNT6trW1qS7kJlaT5bm%2BPq6yispHmzxFKf6wdn9SNQSuIq5h8p1SQhgjOlEpdma3gVGVcxb81poKuaB1FckAf0Vol%2FxYLY079fMkjxX%2BgOxSuVMl1xnIWgbmmdwL18hGmGbknsNjBprNLHOB%2BKJGhbR%2Fom6yIr%2FDv7AMXulUUSziWNS67rvO32J2m4RxiFTT4ksUF9ocn0xhws2jzDY0bgRZXpUEYz7PAfrXvoOjpFZm1vJ3rgThBS63CVJOLAZlBVpbMfEwuZCejovlMQTB4zi7DoHBC3NBj8zLIlDFjNHyNBbiIQaNcP8cmqwUkIqhxtTG%2BPccIvLBQZQ1Vw4DMLKq%2Bb4GOqUBCedHVT4BHZuGuSbAsXIFVUg%2FDqcjGwpWd9UFQzei1DXALHvLelypp%2BDS9hxZqJ5YVz9STgCnZClePLpA2hAIuvrrYZ8lq%2F8fK8%2FB6md2pdpSH053VcFv8WPa5OZei%2B2L6ToXXtXIkAZfdvzPODlZHXqDp6wOJ%2BQ7mjcjGUrdFyeHCG%2FPTmmTvd85oBzjM33eHsiwzZ4G%2BUe%2Bt9QVJ8SGoRmN3tNK&X-Amz-Signature=6b88e96d7d57b2b1f832d56c6955327d53bf75c54b17634db94c405d5bc5acfc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBXC67N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDtLXZhYeoNJlJEYpDf4%2FrKPMntSjHeI4n7WmDcBe%2BOmQIgdHKMYYyVwW36ZqnMSEE86HZqDXGYl4Zh82Z%2FhQ8vdnsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbxvvzFvcbeCjPjnyrcA4qdfdKUk4DG9qydYLssIbuza1J%2FeGS66%2BsZn96JqOwg9S%2FzhWDtKkvuKzgOP0jlKMk3QC5RAS8mpMmr5hlkgYqWBNYrW7Vp0LCcag%2B4X3a%2Fcmg%2FJd69OlsYCuFd%2BRuGUbM%2FYMEIYAeS2b%2Bi7Y5h2YSlYBLw4NkP1L0voKJN0ghW%2Bk%2BioOkWtl6kR95g%2FRlLol8MpYPFHBvOpJ0JEgMeLx5Tz6eR0jYluVOgMNqkPanvThab3b8uaAchUenvT1Gd1hkI4%2BWZvErbGNOxZb7Q89kRwkNPPnCAslHyiUASNNT6trW1qS7kJlaT5bm%2BPq6yispHmzxFKf6wdn9SNQSuIq5h8p1SQhgjOlEpdma3gVGVcxb81poKuaB1FckAf0Vol%2FxYLY079fMkjxX%2BgOxSuVMl1xnIWgbmmdwL18hGmGbknsNjBprNLHOB%2BKJGhbR%2Fom6yIr%2FDv7AMXulUUSziWNS67rvO32J2m4RxiFTT4ksUF9ocn0xhws2jzDY0bgRZXpUEYz7PAfrXvoOjpFZm1vJ3rgThBS63CVJOLAZlBVpbMfEwuZCejovlMQTB4zi7DoHBC3NBj8zLIlDFjNHyNBbiIQaNcP8cmqwUkIqhxtTG%2BPccIvLBQZQ1Vw4DMLKq%2Bb4GOqUBCedHVT4BHZuGuSbAsXIFVUg%2FDqcjGwpWd9UFQzei1DXALHvLelypp%2BDS9hxZqJ5YVz9STgCnZClePLpA2hAIuvrrYZ8lq%2F8fK8%2FB6md2pdpSH053VcFv8WPa5OZei%2B2L6ToXXtXIkAZfdvzPODlZHXqDp6wOJ%2BQ7mjcjGUrdFyeHCG%2FPTmmTvd85oBzjM33eHsiwzZ4G%2BUe%2Bt9QVJ8SGoRmN3tNK&X-Amz-Signature=044c9de76d96490fb47cb85d430f40a3dc418c6df1950ea713a87892bb26cddc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBXC67N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDtLXZhYeoNJlJEYpDf4%2FrKPMntSjHeI4n7WmDcBe%2BOmQIgdHKMYYyVwW36ZqnMSEE86HZqDXGYl4Zh82Z%2FhQ8vdnsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbxvvzFvcbeCjPjnyrcA4qdfdKUk4DG9qydYLssIbuza1J%2FeGS66%2BsZn96JqOwg9S%2FzhWDtKkvuKzgOP0jlKMk3QC5RAS8mpMmr5hlkgYqWBNYrW7Vp0LCcag%2B4X3a%2Fcmg%2FJd69OlsYCuFd%2BRuGUbM%2FYMEIYAeS2b%2Bi7Y5h2YSlYBLw4NkP1L0voKJN0ghW%2Bk%2BioOkWtl6kR95g%2FRlLol8MpYPFHBvOpJ0JEgMeLx5Tz6eR0jYluVOgMNqkPanvThab3b8uaAchUenvT1Gd1hkI4%2BWZvErbGNOxZb7Q89kRwkNPPnCAslHyiUASNNT6trW1qS7kJlaT5bm%2BPq6yispHmzxFKf6wdn9SNQSuIq5h8p1SQhgjOlEpdma3gVGVcxb81poKuaB1FckAf0Vol%2FxYLY079fMkjxX%2BgOxSuVMl1xnIWgbmmdwL18hGmGbknsNjBprNLHOB%2BKJGhbR%2Fom6yIr%2FDv7AMXulUUSziWNS67rvO32J2m4RxiFTT4ksUF9ocn0xhws2jzDY0bgRZXpUEYz7PAfrXvoOjpFZm1vJ3rgThBS63CVJOLAZlBVpbMfEwuZCejovlMQTB4zi7DoHBC3NBj8zLIlDFjNHyNBbiIQaNcP8cmqwUkIqhxtTG%2BPccIvLBQZQ1Vw4DMLKq%2Bb4GOqUBCedHVT4BHZuGuSbAsXIFVUg%2FDqcjGwpWd9UFQzei1DXALHvLelypp%2BDS9hxZqJ5YVz9STgCnZClePLpA2hAIuvrrYZ8lq%2F8fK8%2FB6md2pdpSH053VcFv8WPa5OZei%2B2L6ToXXtXIkAZfdvzPODlZHXqDp6wOJ%2BQ7mjcjGUrdFyeHCG%2FPTmmTvd85oBzjM33eHsiwzZ4G%2BUe%2Bt9QVJ8SGoRmN3tNK&X-Amz-Signature=ebc504b45f81902fdeafd352d00551eb0a6fcd34c93ec31a674d1f50ae50320f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBXC67N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDtLXZhYeoNJlJEYpDf4%2FrKPMntSjHeI4n7WmDcBe%2BOmQIgdHKMYYyVwW36ZqnMSEE86HZqDXGYl4Zh82Z%2FhQ8vdnsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbxvvzFvcbeCjPjnyrcA4qdfdKUk4DG9qydYLssIbuza1J%2FeGS66%2BsZn96JqOwg9S%2FzhWDtKkvuKzgOP0jlKMk3QC5RAS8mpMmr5hlkgYqWBNYrW7Vp0LCcag%2B4X3a%2Fcmg%2FJd69OlsYCuFd%2BRuGUbM%2FYMEIYAeS2b%2Bi7Y5h2YSlYBLw4NkP1L0voKJN0ghW%2Bk%2BioOkWtl6kR95g%2FRlLol8MpYPFHBvOpJ0JEgMeLx5Tz6eR0jYluVOgMNqkPanvThab3b8uaAchUenvT1Gd1hkI4%2BWZvErbGNOxZb7Q89kRwkNPPnCAslHyiUASNNT6trW1qS7kJlaT5bm%2BPq6yispHmzxFKf6wdn9SNQSuIq5h8p1SQhgjOlEpdma3gVGVcxb81poKuaB1FckAf0Vol%2FxYLY079fMkjxX%2BgOxSuVMl1xnIWgbmmdwL18hGmGbknsNjBprNLHOB%2BKJGhbR%2Fom6yIr%2FDv7AMXulUUSziWNS67rvO32J2m4RxiFTT4ksUF9ocn0xhws2jzDY0bgRZXpUEYz7PAfrXvoOjpFZm1vJ3rgThBS63CVJOLAZlBVpbMfEwuZCejovlMQTB4zi7DoHBC3NBj8zLIlDFjNHyNBbiIQaNcP8cmqwUkIqhxtTG%2BPccIvLBQZQ1Vw4DMLKq%2Bb4GOqUBCedHVT4BHZuGuSbAsXIFVUg%2FDqcjGwpWd9UFQzei1DXALHvLelypp%2BDS9hxZqJ5YVz9STgCnZClePLpA2hAIuvrrYZ8lq%2F8fK8%2FB6md2pdpSH053VcFv8WPa5OZei%2B2L6ToXXtXIkAZfdvzPODlZHXqDp6wOJ%2BQ7mjcjGUrdFyeHCG%2FPTmmTvd85oBzjM33eHsiwzZ4G%2BUe%2Bt9QVJ8SGoRmN3tNK&X-Amz-Signature=9174a7b5255b9c17b66b9ae460a591ac09c36cffc88de89f8f1891c237e5831e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBXC67N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDtLXZhYeoNJlJEYpDf4%2FrKPMntSjHeI4n7WmDcBe%2BOmQIgdHKMYYyVwW36ZqnMSEE86HZqDXGYl4Zh82Z%2FhQ8vdnsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbxvvzFvcbeCjPjnyrcA4qdfdKUk4DG9qydYLssIbuza1J%2FeGS66%2BsZn96JqOwg9S%2FzhWDtKkvuKzgOP0jlKMk3QC5RAS8mpMmr5hlkgYqWBNYrW7Vp0LCcag%2B4X3a%2Fcmg%2FJd69OlsYCuFd%2BRuGUbM%2FYMEIYAeS2b%2Bi7Y5h2YSlYBLw4NkP1L0voKJN0ghW%2Bk%2BioOkWtl6kR95g%2FRlLol8MpYPFHBvOpJ0JEgMeLx5Tz6eR0jYluVOgMNqkPanvThab3b8uaAchUenvT1Gd1hkI4%2BWZvErbGNOxZb7Q89kRwkNPPnCAslHyiUASNNT6trW1qS7kJlaT5bm%2BPq6yispHmzxFKf6wdn9SNQSuIq5h8p1SQhgjOlEpdma3gVGVcxb81poKuaB1FckAf0Vol%2FxYLY079fMkjxX%2BgOxSuVMl1xnIWgbmmdwL18hGmGbknsNjBprNLHOB%2BKJGhbR%2Fom6yIr%2FDv7AMXulUUSziWNS67rvO32J2m4RxiFTT4ksUF9ocn0xhws2jzDY0bgRZXpUEYz7PAfrXvoOjpFZm1vJ3rgThBS63CVJOLAZlBVpbMfEwuZCejovlMQTB4zi7DoHBC3NBj8zLIlDFjNHyNBbiIQaNcP8cmqwUkIqhxtTG%2BPccIvLBQZQ1Vw4DMLKq%2Bb4GOqUBCedHVT4BHZuGuSbAsXIFVUg%2FDqcjGwpWd9UFQzei1DXALHvLelypp%2BDS9hxZqJ5YVz9STgCnZClePLpA2hAIuvrrYZ8lq%2F8fK8%2FB6md2pdpSH053VcFv8WPa5OZei%2B2L6ToXXtXIkAZfdvzPODlZHXqDp6wOJ%2BQ7mjcjGUrdFyeHCG%2FPTmmTvd85oBzjM33eHsiwzZ4G%2BUe%2Bt9QVJ8SGoRmN3tNK&X-Amz-Signature=86fed11fabf9daa6d566c084bb7d81e436f489dcad97cab1ecde0d8173095e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBXC67N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDtLXZhYeoNJlJEYpDf4%2FrKPMntSjHeI4n7WmDcBe%2BOmQIgdHKMYYyVwW36ZqnMSEE86HZqDXGYl4Zh82Z%2FhQ8vdnsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbxvvzFvcbeCjPjnyrcA4qdfdKUk4DG9qydYLssIbuza1J%2FeGS66%2BsZn96JqOwg9S%2FzhWDtKkvuKzgOP0jlKMk3QC5RAS8mpMmr5hlkgYqWBNYrW7Vp0LCcag%2B4X3a%2Fcmg%2FJd69OlsYCuFd%2BRuGUbM%2FYMEIYAeS2b%2Bi7Y5h2YSlYBLw4NkP1L0voKJN0ghW%2Bk%2BioOkWtl6kR95g%2FRlLol8MpYPFHBvOpJ0JEgMeLx5Tz6eR0jYluVOgMNqkPanvThab3b8uaAchUenvT1Gd1hkI4%2BWZvErbGNOxZb7Q89kRwkNPPnCAslHyiUASNNT6trW1qS7kJlaT5bm%2BPq6yispHmzxFKf6wdn9SNQSuIq5h8p1SQhgjOlEpdma3gVGVcxb81poKuaB1FckAf0Vol%2FxYLY079fMkjxX%2BgOxSuVMl1xnIWgbmmdwL18hGmGbknsNjBprNLHOB%2BKJGhbR%2Fom6yIr%2FDv7AMXulUUSziWNS67rvO32J2m4RxiFTT4ksUF9ocn0xhws2jzDY0bgRZXpUEYz7PAfrXvoOjpFZm1vJ3rgThBS63CVJOLAZlBVpbMfEwuZCejovlMQTB4zi7DoHBC3NBj8zLIlDFjNHyNBbiIQaNcP8cmqwUkIqhxtTG%2BPccIvLBQZQ1Vw4DMLKq%2Bb4GOqUBCedHVT4BHZuGuSbAsXIFVUg%2FDqcjGwpWd9UFQzei1DXALHvLelypp%2BDS9hxZqJ5YVz9STgCnZClePLpA2hAIuvrrYZ8lq%2F8fK8%2FB6md2pdpSH053VcFv8WPa5OZei%2B2L6ToXXtXIkAZfdvzPODlZHXqDp6wOJ%2BQ7mjcjGUrdFyeHCG%2FPTmmTvd85oBzjM33eHsiwzZ4G%2BUe%2Bt9QVJ8SGoRmN3tNK&X-Amz-Signature=9f40013b3dccd82021c185a75d47f04363c4c93303b1be1a599ec46a2d06341b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBXC67N%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDtLXZhYeoNJlJEYpDf4%2FrKPMntSjHeI4n7WmDcBe%2BOmQIgdHKMYYyVwW36ZqnMSEE86HZqDXGYl4Zh82Z%2FhQ8vdnsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbxvvzFvcbeCjPjnyrcA4qdfdKUk4DG9qydYLssIbuza1J%2FeGS66%2BsZn96JqOwg9S%2FzhWDtKkvuKzgOP0jlKMk3QC5RAS8mpMmr5hlkgYqWBNYrW7Vp0LCcag%2B4X3a%2Fcmg%2FJd69OlsYCuFd%2BRuGUbM%2FYMEIYAeS2b%2Bi7Y5h2YSlYBLw4NkP1L0voKJN0ghW%2Bk%2BioOkWtl6kR95g%2FRlLol8MpYPFHBvOpJ0JEgMeLx5Tz6eR0jYluVOgMNqkPanvThab3b8uaAchUenvT1Gd1hkI4%2BWZvErbGNOxZb7Q89kRwkNPPnCAslHyiUASNNT6trW1qS7kJlaT5bm%2BPq6yispHmzxFKf6wdn9SNQSuIq5h8p1SQhgjOlEpdma3gVGVcxb81poKuaB1FckAf0Vol%2FxYLY079fMkjxX%2BgOxSuVMl1xnIWgbmmdwL18hGmGbknsNjBprNLHOB%2BKJGhbR%2Fom6yIr%2FDv7AMXulUUSziWNS67rvO32J2m4RxiFTT4ksUF9ocn0xhws2jzDY0bgRZXpUEYz7PAfrXvoOjpFZm1vJ3rgThBS63CVJOLAZlBVpbMfEwuZCejovlMQTB4zi7DoHBC3NBj8zLIlDFjNHyNBbiIQaNcP8cmqwUkIqhxtTG%2BPccIvLBQZQ1Vw4DMLKq%2Bb4GOqUBCedHVT4BHZuGuSbAsXIFVUg%2FDqcjGwpWd9UFQzei1DXALHvLelypp%2BDS9hxZqJ5YVz9STgCnZClePLpA2hAIuvrrYZ8lq%2F8fK8%2FB6md2pdpSH053VcFv8WPa5OZei%2B2L6ToXXtXIkAZfdvzPODlZHXqDp6wOJ%2BQ7mjcjGUrdFyeHCG%2FPTmmTvd85oBzjM33eHsiwzZ4G%2BUe%2Bt9QVJ8SGoRmN3tNK&X-Amz-Signature=259f05f68f96c358c6fd66bf82efd829cf40e3d2aa92a182a28524c6534224a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL4WOMU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDWYshnJyiDnhPXq6FRIWeG%2BwpJvxtfHVzZiawPAES8%2FAiEA%2BgmFO7eEZvJZxA8Q0XXq6O9ChPv3N50WSnqlX8pGWg8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAQ7CBQCJ0%2FJSmT7zyrcAytYCUTE1SrSf6IA2SkQdHvsKabmeJsVWibFDAyDXMyePltaR9%2BMU3tzezYvmESHoBPnLrvNI%2FGhlog%2FPwKkuhGcR0z%2FegDkHN6YZAhBoMGFQiwPBO1yyiV9eyciuFbE6ICk0VIBxEXYI6QlStOe4Za8oXqQzhVq85vNrdxDsye21u1nTQST8b8GgYE4LCBbUvVG3bZTfwrd3UIMNthGYzwQCMK9FemGDXQhTZGGDlqx57MRMYu904swWV3HYdQkBgUOy3znf7YxAaZ3G0VXO%2B3Nqz8MCPQMPEaABuOWjC4PwOIBmDCaRoIW%2BPyudLzzDMVi%2BeLQZGwj9MMFYrHEKUre6TOGD9vbK8my2t%2FJ%2F4RiIpt6EaM6CWqvkMzhR0bf%2FOzpvNSuaQUlfcCFw1IW7A3v4ydQ%2BHSkpbQbxFR0glWX1AXfhIy92uJfLQ7lF1hG0mY56gqqiMLcaF2CXtqOctweDDG1PlY5cF5nZnuvm5jK0wBkCNZ%2F26XjpMTszaU9SaaDKzxRlL56Rx9ixVikHWOHLQwFwEh5aexLmbXJsv2w3pZpF1N80zq856KlGtZxELFg7lrYPfggpS%2FRcIVHlq8L5TsiHrvG8IX2%2BfTElO4SuXjGwGbHk88lowT9MM2h98IGOqUBD8BpBCvVLoaSt3XCeRRi8cufQlF%2FUUDZQI7XRK2VDMsuBWnWVodQDVL35bpKJgPqkxkWs0jiJAP5bHEoJKFQ%2BTTo9zheWUZHEsqVP%2F09%2FoNO%2BlC7GdvLKctgA%2FQClvwOuDiPkwqIU8s0%2FINGYndXPjCfFh2Ab5y2QmJLzrrNaKBpebnoEWfFHYGllcUjzNB3Ghk%2BzL5rg4b9pK7z92JEprnHXfZu&X-Amz-Signature=3fd9730dc3bc91283e3dc4d6774e526a9a39e0324d0cc94c333848b4b55d522f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL4WOMU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDWYshnJyiDnhPXq6FRIWeG%2BwpJvxtfHVzZiawPAES8%2FAiEA%2BgmFO7eEZvJZxA8Q0XXq6O9ChPv3N50WSnqlX8pGWg8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAQ7CBQCJ0%2FJSmT7zyrcAytYCUTE1SrSf6IA2SkQdHvsKabmeJsVWibFDAyDXMyePltaR9%2BMU3tzezYvmESHoBPnLrvNI%2FGhlog%2FPwKkuhGcR0z%2FegDkHN6YZAhBoMGFQiwPBO1yyiV9eyciuFbE6ICk0VIBxEXYI6QlStOe4Za8oXqQzhVq85vNrdxDsye21u1nTQST8b8GgYE4LCBbUvVG3bZTfwrd3UIMNthGYzwQCMK9FemGDXQhTZGGDlqx57MRMYu904swWV3HYdQkBgUOy3znf7YxAaZ3G0VXO%2B3Nqz8MCPQMPEaABuOWjC4PwOIBmDCaRoIW%2BPyudLzzDMVi%2BeLQZGwj9MMFYrHEKUre6TOGD9vbK8my2t%2FJ%2F4RiIpt6EaM6CWqvkMzhR0bf%2FOzpvNSuaQUlfcCFw1IW7A3v4ydQ%2BHSkpbQbxFR0glWX1AXfhIy92uJfLQ7lF1hG0mY56gqqiMLcaF2CXtqOctweDDG1PlY5cF5nZnuvm5jK0wBkCNZ%2F26XjpMTszaU9SaaDKzxRlL56Rx9ixVikHWOHLQwFwEh5aexLmbXJsv2w3pZpF1N80zq856KlGtZxELFg7lrYPfggpS%2FRcIVHlq8L5TsiHrvG8IX2%2BfTElO4SuXjGwGbHk88lowT9MM2h98IGOqUBD8BpBCvVLoaSt3XCeRRi8cufQlF%2FUUDZQI7XRK2VDMsuBWnWVodQDVL35bpKJgPqkxkWs0jiJAP5bHEoJKFQ%2BTTo9zheWUZHEsqVP%2F09%2FoNO%2BlC7GdvLKctgA%2FQClvwOuDiPkwqIU8s0%2FINGYndXPjCfFh2Ab5y2QmJLzrrNaKBpebnoEWfFHYGllcUjzNB3Ghk%2BzL5rg4b9pK7z92JEprnHXfZu&X-Amz-Signature=090613409b25271ed1709b10499f18ee7451d6d25f1ddd3db69435b60aea7683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL4WOMU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDWYshnJyiDnhPXq6FRIWeG%2BwpJvxtfHVzZiawPAES8%2FAiEA%2BgmFO7eEZvJZxA8Q0XXq6O9ChPv3N50WSnqlX8pGWg8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAQ7CBQCJ0%2FJSmT7zyrcAytYCUTE1SrSf6IA2SkQdHvsKabmeJsVWibFDAyDXMyePltaR9%2BMU3tzezYvmESHoBPnLrvNI%2FGhlog%2FPwKkuhGcR0z%2FegDkHN6YZAhBoMGFQiwPBO1yyiV9eyciuFbE6ICk0VIBxEXYI6QlStOe4Za8oXqQzhVq85vNrdxDsye21u1nTQST8b8GgYE4LCBbUvVG3bZTfwrd3UIMNthGYzwQCMK9FemGDXQhTZGGDlqx57MRMYu904swWV3HYdQkBgUOy3znf7YxAaZ3G0VXO%2B3Nqz8MCPQMPEaABuOWjC4PwOIBmDCaRoIW%2BPyudLzzDMVi%2BeLQZGwj9MMFYrHEKUre6TOGD9vbK8my2t%2FJ%2F4RiIpt6EaM6CWqvkMzhR0bf%2FOzpvNSuaQUlfcCFw1IW7A3v4ydQ%2BHSkpbQbxFR0glWX1AXfhIy92uJfLQ7lF1hG0mY56gqqiMLcaF2CXtqOctweDDG1PlY5cF5nZnuvm5jK0wBkCNZ%2F26XjpMTszaU9SaaDKzxRlL56Rx9ixVikHWOHLQwFwEh5aexLmbXJsv2w3pZpF1N80zq856KlGtZxELFg7lrYPfggpS%2FRcIVHlq8L5TsiHrvG8IX2%2BfTElO4SuXjGwGbHk88lowT9MM2h98IGOqUBD8BpBCvVLoaSt3XCeRRi8cufQlF%2FUUDZQI7XRK2VDMsuBWnWVodQDVL35bpKJgPqkxkWs0jiJAP5bHEoJKFQ%2BTTo9zheWUZHEsqVP%2F09%2FoNO%2BlC7GdvLKctgA%2FQClvwOuDiPkwqIU8s0%2FINGYndXPjCfFh2Ab5y2QmJLzrrNaKBpebnoEWfFHYGllcUjzNB3Ghk%2BzL5rg4b9pK7z92JEprnHXfZu&X-Amz-Signature=2160710c0f656fb07ebf0a16b35f581a5e4e43be7c6ede48daece2dccc5a9308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL4WOMU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDWYshnJyiDnhPXq6FRIWeG%2BwpJvxtfHVzZiawPAES8%2FAiEA%2BgmFO7eEZvJZxA8Q0XXq6O9ChPv3N50WSnqlX8pGWg8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAQ7CBQCJ0%2FJSmT7zyrcAytYCUTE1SrSf6IA2SkQdHvsKabmeJsVWibFDAyDXMyePltaR9%2BMU3tzezYvmESHoBPnLrvNI%2FGhlog%2FPwKkuhGcR0z%2FegDkHN6YZAhBoMGFQiwPBO1yyiV9eyciuFbE6ICk0VIBxEXYI6QlStOe4Za8oXqQzhVq85vNrdxDsye21u1nTQST8b8GgYE4LCBbUvVG3bZTfwrd3UIMNthGYzwQCMK9FemGDXQhTZGGDlqx57MRMYu904swWV3HYdQkBgUOy3znf7YxAaZ3G0VXO%2B3Nqz8MCPQMPEaABuOWjC4PwOIBmDCaRoIW%2BPyudLzzDMVi%2BeLQZGwj9MMFYrHEKUre6TOGD9vbK8my2t%2FJ%2F4RiIpt6EaM6CWqvkMzhR0bf%2FOzpvNSuaQUlfcCFw1IW7A3v4ydQ%2BHSkpbQbxFR0glWX1AXfhIy92uJfLQ7lF1hG0mY56gqqiMLcaF2CXtqOctweDDG1PlY5cF5nZnuvm5jK0wBkCNZ%2F26XjpMTszaU9SaaDKzxRlL56Rx9ixVikHWOHLQwFwEh5aexLmbXJsv2w3pZpF1N80zq856KlGtZxELFg7lrYPfggpS%2FRcIVHlq8L5TsiHrvG8IX2%2BfTElO4SuXjGwGbHk88lowT9MM2h98IGOqUBD8BpBCvVLoaSt3XCeRRi8cufQlF%2FUUDZQI7XRK2VDMsuBWnWVodQDVL35bpKJgPqkxkWs0jiJAP5bHEoJKFQ%2BTTo9zheWUZHEsqVP%2F09%2FoNO%2BlC7GdvLKctgA%2FQClvwOuDiPkwqIU8s0%2FINGYndXPjCfFh2Ab5y2QmJLzrrNaKBpebnoEWfFHYGllcUjzNB3Ghk%2BzL5rg4b9pK7z92JEprnHXfZu&X-Amz-Signature=d12808f39f58cd02de46cca8c02683eaf6ba8c11c9298fcd804780626b768051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL4WOMU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDWYshnJyiDnhPXq6FRIWeG%2BwpJvxtfHVzZiawPAES8%2FAiEA%2BgmFO7eEZvJZxA8Q0XXq6O9ChPv3N50WSnqlX8pGWg8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAQ7CBQCJ0%2FJSmT7zyrcAytYCUTE1SrSf6IA2SkQdHvsKabmeJsVWibFDAyDXMyePltaR9%2BMU3tzezYvmESHoBPnLrvNI%2FGhlog%2FPwKkuhGcR0z%2FegDkHN6YZAhBoMGFQiwPBO1yyiV9eyciuFbE6ICk0VIBxEXYI6QlStOe4Za8oXqQzhVq85vNrdxDsye21u1nTQST8b8GgYE4LCBbUvVG3bZTfwrd3UIMNthGYzwQCMK9FemGDXQhTZGGDlqx57MRMYu904swWV3HYdQkBgUOy3znf7YxAaZ3G0VXO%2B3Nqz8MCPQMPEaABuOWjC4PwOIBmDCaRoIW%2BPyudLzzDMVi%2BeLQZGwj9MMFYrHEKUre6TOGD9vbK8my2t%2FJ%2F4RiIpt6EaM6CWqvkMzhR0bf%2FOzpvNSuaQUlfcCFw1IW7A3v4ydQ%2BHSkpbQbxFR0glWX1AXfhIy92uJfLQ7lF1hG0mY56gqqiMLcaF2CXtqOctweDDG1PlY5cF5nZnuvm5jK0wBkCNZ%2F26XjpMTszaU9SaaDKzxRlL56Rx9ixVikHWOHLQwFwEh5aexLmbXJsv2w3pZpF1N80zq856KlGtZxELFg7lrYPfggpS%2FRcIVHlq8L5TsiHrvG8IX2%2BfTElO4SuXjGwGbHk88lowT9MM2h98IGOqUBD8BpBCvVLoaSt3XCeRRi8cufQlF%2FUUDZQI7XRK2VDMsuBWnWVodQDVL35bpKJgPqkxkWs0jiJAP5bHEoJKFQ%2BTTo9zheWUZHEsqVP%2F09%2FoNO%2BlC7GdvLKctgA%2FQClvwOuDiPkwqIU8s0%2FINGYndXPjCfFh2Ab5y2QmJLzrrNaKBpebnoEWfFHYGllcUjzNB3Ghk%2BzL5rg4b9pK7z92JEprnHXfZu&X-Amz-Signature=361f2df4ca45acfaf2f9a29d25e0d3688ca4b2b2503db43ede69023c77251a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL4WOMU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDWYshnJyiDnhPXq6FRIWeG%2BwpJvxtfHVzZiawPAES8%2FAiEA%2BgmFO7eEZvJZxA8Q0XXq6O9ChPv3N50WSnqlX8pGWg8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAQ7CBQCJ0%2FJSmT7zyrcAytYCUTE1SrSf6IA2SkQdHvsKabmeJsVWibFDAyDXMyePltaR9%2BMU3tzezYvmESHoBPnLrvNI%2FGhlog%2FPwKkuhGcR0z%2FegDkHN6YZAhBoMGFQiwPBO1yyiV9eyciuFbE6ICk0VIBxEXYI6QlStOe4Za8oXqQzhVq85vNrdxDsye21u1nTQST8b8GgYE4LCBbUvVG3bZTfwrd3UIMNthGYzwQCMK9FemGDXQhTZGGDlqx57MRMYu904swWV3HYdQkBgUOy3znf7YxAaZ3G0VXO%2B3Nqz8MCPQMPEaABuOWjC4PwOIBmDCaRoIW%2BPyudLzzDMVi%2BeLQZGwj9MMFYrHEKUre6TOGD9vbK8my2t%2FJ%2F4RiIpt6EaM6CWqvkMzhR0bf%2FOzpvNSuaQUlfcCFw1IW7A3v4ydQ%2BHSkpbQbxFR0glWX1AXfhIy92uJfLQ7lF1hG0mY56gqqiMLcaF2CXtqOctweDDG1PlY5cF5nZnuvm5jK0wBkCNZ%2F26XjpMTszaU9SaaDKzxRlL56Rx9ixVikHWOHLQwFwEh5aexLmbXJsv2w3pZpF1N80zq856KlGtZxELFg7lrYPfggpS%2FRcIVHlq8L5TsiHrvG8IX2%2BfTElO4SuXjGwGbHk88lowT9MM2h98IGOqUBD8BpBCvVLoaSt3XCeRRi8cufQlF%2FUUDZQI7XRK2VDMsuBWnWVodQDVL35bpKJgPqkxkWs0jiJAP5bHEoJKFQ%2BTTo9zheWUZHEsqVP%2F09%2FoNO%2BlC7GdvLKctgA%2FQClvwOuDiPkwqIU8s0%2FINGYndXPjCfFh2Ab5y2QmJLzrrNaKBpebnoEWfFHYGllcUjzNB3Ghk%2BzL5rg4b9pK7z92JEprnHXfZu&X-Amz-Signature=e23e338d07968d85659bac97d41120ff376897b1ef94e3569dd2bb839a066194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL4WOMU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDWYshnJyiDnhPXq6FRIWeG%2BwpJvxtfHVzZiawPAES8%2FAiEA%2BgmFO7eEZvJZxA8Q0XXq6O9ChPv3N50WSnqlX8pGWg8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAQ7CBQCJ0%2FJSmT7zyrcAytYCUTE1SrSf6IA2SkQdHvsKabmeJsVWibFDAyDXMyePltaR9%2BMU3tzezYvmESHoBPnLrvNI%2FGhlog%2FPwKkuhGcR0z%2FegDkHN6YZAhBoMGFQiwPBO1yyiV9eyciuFbE6ICk0VIBxEXYI6QlStOe4Za8oXqQzhVq85vNrdxDsye21u1nTQST8b8GgYE4LCBbUvVG3bZTfwrd3UIMNthGYzwQCMK9FemGDXQhTZGGDlqx57MRMYu904swWV3HYdQkBgUOy3znf7YxAaZ3G0VXO%2B3Nqz8MCPQMPEaABuOWjC4PwOIBmDCaRoIW%2BPyudLzzDMVi%2BeLQZGwj9MMFYrHEKUre6TOGD9vbK8my2t%2FJ%2F4RiIpt6EaM6CWqvkMzhR0bf%2FOzpvNSuaQUlfcCFw1IW7A3v4ydQ%2BHSkpbQbxFR0glWX1AXfhIy92uJfLQ7lF1hG0mY56gqqiMLcaF2CXtqOctweDDG1PlY5cF5nZnuvm5jK0wBkCNZ%2F26XjpMTszaU9SaaDKzxRlL56Rx9ixVikHWOHLQwFwEh5aexLmbXJsv2w3pZpF1N80zq856KlGtZxELFg7lrYPfggpS%2FRcIVHlq8L5TsiHrvG8IX2%2BfTElO4SuXjGwGbHk88lowT9MM2h98IGOqUBD8BpBCvVLoaSt3XCeRRi8cufQlF%2FUUDZQI7XRK2VDMsuBWnWVodQDVL35bpKJgPqkxkWs0jiJAP5bHEoJKFQ%2BTTo9zheWUZHEsqVP%2F09%2FoNO%2BlC7GdvLKctgA%2FQClvwOuDiPkwqIU8s0%2FINGYndXPjCfFh2Ab5y2QmJLzrrNaKBpebnoEWfFHYGllcUjzNB3Ghk%2BzL5rg4b9pK7z92JEprnHXfZu&X-Amz-Signature=564391d6fe569f0fdbd2ac0d561ddf72bd8ef5e82ffe0126a34d4654a9f34d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL4WOMU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDWYshnJyiDnhPXq6FRIWeG%2BwpJvxtfHVzZiawPAES8%2FAiEA%2BgmFO7eEZvJZxA8Q0XXq6O9ChPv3N50WSnqlX8pGWg8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAQ7CBQCJ0%2FJSmT7zyrcAytYCUTE1SrSf6IA2SkQdHvsKabmeJsVWibFDAyDXMyePltaR9%2BMU3tzezYvmESHoBPnLrvNI%2FGhlog%2FPwKkuhGcR0z%2FegDkHN6YZAhBoMGFQiwPBO1yyiV9eyciuFbE6ICk0VIBxEXYI6QlStOe4Za8oXqQzhVq85vNrdxDsye21u1nTQST8b8GgYE4LCBbUvVG3bZTfwrd3UIMNthGYzwQCMK9FemGDXQhTZGGDlqx57MRMYu904swWV3HYdQkBgUOy3znf7YxAaZ3G0VXO%2B3Nqz8MCPQMPEaABuOWjC4PwOIBmDCaRoIW%2BPyudLzzDMVi%2BeLQZGwj9MMFYrHEKUre6TOGD9vbK8my2t%2FJ%2F4RiIpt6EaM6CWqvkMzhR0bf%2FOzpvNSuaQUlfcCFw1IW7A3v4ydQ%2BHSkpbQbxFR0glWX1AXfhIy92uJfLQ7lF1hG0mY56gqqiMLcaF2CXtqOctweDDG1PlY5cF5nZnuvm5jK0wBkCNZ%2F26XjpMTszaU9SaaDKzxRlL56Rx9ixVikHWOHLQwFwEh5aexLmbXJsv2w3pZpF1N80zq856KlGtZxELFg7lrYPfggpS%2FRcIVHlq8L5TsiHrvG8IX2%2BfTElO4SuXjGwGbHk88lowT9MM2h98IGOqUBD8BpBCvVLoaSt3XCeRRi8cufQlF%2FUUDZQI7XRK2VDMsuBWnWVodQDVL35bpKJgPqkxkWs0jiJAP5bHEoJKFQ%2BTTo9zheWUZHEsqVP%2F09%2FoNO%2BlC7GdvLKctgA%2FQClvwOuDiPkwqIU8s0%2FINGYndXPjCfFh2Ab5y2QmJLzrrNaKBpebnoEWfFHYGllcUjzNB3Ghk%2BzL5rg4b9pK7z92JEprnHXfZu&X-Amz-Signature=ea8f990bb923874afbc931d46a0c191c293c7eee9ac9919c8812a3a3b284e1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

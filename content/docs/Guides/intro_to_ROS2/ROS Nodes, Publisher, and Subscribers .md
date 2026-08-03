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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624N77RDM%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAPKEFxi%2BPQs4AU80Lr2G1y9lfR0lFgLWQjuXMsQdbYGAiEAg%2FNggR4y3E96JfRdiaE1voTVkXvT0qdrxnpyE9eG%2F1QqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ1AGAUHhjUwoW66CrcAzc%2BBbx3M4Px%2FKkrI8lRsgmTIscPGsDkQpAb0EBcQekbig3t0qVdTGBQkIFHIQ6qLdIEGTL8p6rvJCUo1oySE6L1fYZL6QaxhD5g6sescp5BG%2BnkbbnEYKZUvULsZE5slNzkZPGrecjHaC1n4wLaROxqcjDX%2FAaPbhMMWyGoo90aMVHSkHhZsY4SKHZxVTwXeYMOD73leqW6lU66lQJ9BAaBhSI3QO7JmIaNCXQLts24DiD87gSlUdnDzyEb0muTrAhMn49bWaBHGn2NCgYSfLZ4u53OvVYro5Z5HJrs3LIXsCQ4IsRtR5IdKURy0vHip4uuf874O7ZQPfWb%2F17oNNtimp42zBvrjPi7aHjQShgxpP13WZ787CzUshP8KepZ2t0ag%2BhFyfbpiFA2duEJbnD8%2BUCfY%2BWVF%2FlaP5tct0h0iU5Zeyb3WQmL4a0oMdTDDTTJXwqNC2hharbrfoBtic367uKmcWr3TMfZAsDkoip5BzpWsu7ehFlKmhUBtJZmi1wZKABIrBQUnPKhyCmtB6O40q6%2FcfXFjwgspFyFOSd%2BOJ0ZzUGQZLqY0C%2Bl7G5doWlFvxaNvng4xQBd5QkNjNaakuKmFXiLtSDlTY4AI5eGYrGhHdH2uwvHOC3iMNbnv9MGOqUB4WE%2FB%2BaasQzXqVRsnTfNONi8O%2FyP12K1hcDLaSyOjIuftYCZvvaBMtXrwYEqUJqn%2FWDoxNnPwXKT%2FqUyKUfHfz6sLrn7frMM1Fw60QREAEKG5fGpCX7RzKFg%2BWek7oV97vrGjHu1%2BsLN2JFqynux%2Bs4GmpQqNutcCU62TYBIZTZu3v%2BXrbmqH9I7LpHopSCu4GSbgBQPUkeiyIeZFdYBXn1mhwq4&X-Amz-Signature=d7b7f396c59d9bd85d98780c188bf919389c47e2d82929bdc9fe7d564493b115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624N77RDM%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAPKEFxi%2BPQs4AU80Lr2G1y9lfR0lFgLWQjuXMsQdbYGAiEAg%2FNggR4y3E96JfRdiaE1voTVkXvT0qdrxnpyE9eG%2F1QqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ1AGAUHhjUwoW66CrcAzc%2BBbx3M4Px%2FKkrI8lRsgmTIscPGsDkQpAb0EBcQekbig3t0qVdTGBQkIFHIQ6qLdIEGTL8p6rvJCUo1oySE6L1fYZL6QaxhD5g6sescp5BG%2BnkbbnEYKZUvULsZE5slNzkZPGrecjHaC1n4wLaROxqcjDX%2FAaPbhMMWyGoo90aMVHSkHhZsY4SKHZxVTwXeYMOD73leqW6lU66lQJ9BAaBhSI3QO7JmIaNCXQLts24DiD87gSlUdnDzyEb0muTrAhMn49bWaBHGn2NCgYSfLZ4u53OvVYro5Z5HJrs3LIXsCQ4IsRtR5IdKURy0vHip4uuf874O7ZQPfWb%2F17oNNtimp42zBvrjPi7aHjQShgxpP13WZ787CzUshP8KepZ2t0ag%2BhFyfbpiFA2duEJbnD8%2BUCfY%2BWVF%2FlaP5tct0h0iU5Zeyb3WQmL4a0oMdTDDTTJXwqNC2hharbrfoBtic367uKmcWr3TMfZAsDkoip5BzpWsu7ehFlKmhUBtJZmi1wZKABIrBQUnPKhyCmtB6O40q6%2FcfXFjwgspFyFOSd%2BOJ0ZzUGQZLqY0C%2Bl7G5doWlFvxaNvng4xQBd5QkNjNaakuKmFXiLtSDlTY4AI5eGYrGhHdH2uwvHOC3iMNbnv9MGOqUB4WE%2FB%2BaasQzXqVRsnTfNONi8O%2FyP12K1hcDLaSyOjIuftYCZvvaBMtXrwYEqUJqn%2FWDoxNnPwXKT%2FqUyKUfHfz6sLrn7frMM1Fw60QREAEKG5fGpCX7RzKFg%2BWek7oV97vrGjHu1%2BsLN2JFqynux%2Bs4GmpQqNutcCU62TYBIZTZu3v%2BXrbmqH9I7LpHopSCu4GSbgBQPUkeiyIeZFdYBXn1mhwq4&X-Amz-Signature=e4c50c5411858f36f75d1950a3c0a257b106d4b010d0729750ddc0c0ced8eb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624N77RDM%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAPKEFxi%2BPQs4AU80Lr2G1y9lfR0lFgLWQjuXMsQdbYGAiEAg%2FNggR4y3E96JfRdiaE1voTVkXvT0qdrxnpyE9eG%2F1QqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ1AGAUHhjUwoW66CrcAzc%2BBbx3M4Px%2FKkrI8lRsgmTIscPGsDkQpAb0EBcQekbig3t0qVdTGBQkIFHIQ6qLdIEGTL8p6rvJCUo1oySE6L1fYZL6QaxhD5g6sescp5BG%2BnkbbnEYKZUvULsZE5slNzkZPGrecjHaC1n4wLaROxqcjDX%2FAaPbhMMWyGoo90aMVHSkHhZsY4SKHZxVTwXeYMOD73leqW6lU66lQJ9BAaBhSI3QO7JmIaNCXQLts24DiD87gSlUdnDzyEb0muTrAhMn49bWaBHGn2NCgYSfLZ4u53OvVYro5Z5HJrs3LIXsCQ4IsRtR5IdKURy0vHip4uuf874O7ZQPfWb%2F17oNNtimp42zBvrjPi7aHjQShgxpP13WZ787CzUshP8KepZ2t0ag%2BhFyfbpiFA2duEJbnD8%2BUCfY%2BWVF%2FlaP5tct0h0iU5Zeyb3WQmL4a0oMdTDDTTJXwqNC2hharbrfoBtic367uKmcWr3TMfZAsDkoip5BzpWsu7ehFlKmhUBtJZmi1wZKABIrBQUnPKhyCmtB6O40q6%2FcfXFjwgspFyFOSd%2BOJ0ZzUGQZLqY0C%2Bl7G5doWlFvxaNvng4xQBd5QkNjNaakuKmFXiLtSDlTY4AI5eGYrGhHdH2uwvHOC3iMNbnv9MGOqUB4WE%2FB%2BaasQzXqVRsnTfNONi8O%2FyP12K1hcDLaSyOjIuftYCZvvaBMtXrwYEqUJqn%2FWDoxNnPwXKT%2FqUyKUfHfz6sLrn7frMM1Fw60QREAEKG5fGpCX7RzKFg%2BWek7oV97vrGjHu1%2BsLN2JFqynux%2Bs4GmpQqNutcCU62TYBIZTZu3v%2BXrbmqH9I7LpHopSCu4GSbgBQPUkeiyIeZFdYBXn1mhwq4&X-Amz-Signature=308fe74d2c97abbd48927d9ba4f3a2b1007b077c3eb076a607376af5a1655acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624N77RDM%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAPKEFxi%2BPQs4AU80Lr2G1y9lfR0lFgLWQjuXMsQdbYGAiEAg%2FNggR4y3E96JfRdiaE1voTVkXvT0qdrxnpyE9eG%2F1QqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ1AGAUHhjUwoW66CrcAzc%2BBbx3M4Px%2FKkrI8lRsgmTIscPGsDkQpAb0EBcQekbig3t0qVdTGBQkIFHIQ6qLdIEGTL8p6rvJCUo1oySE6L1fYZL6QaxhD5g6sescp5BG%2BnkbbnEYKZUvULsZE5slNzkZPGrecjHaC1n4wLaROxqcjDX%2FAaPbhMMWyGoo90aMVHSkHhZsY4SKHZxVTwXeYMOD73leqW6lU66lQJ9BAaBhSI3QO7JmIaNCXQLts24DiD87gSlUdnDzyEb0muTrAhMn49bWaBHGn2NCgYSfLZ4u53OvVYro5Z5HJrs3LIXsCQ4IsRtR5IdKURy0vHip4uuf874O7ZQPfWb%2F17oNNtimp42zBvrjPi7aHjQShgxpP13WZ787CzUshP8KepZ2t0ag%2BhFyfbpiFA2duEJbnD8%2BUCfY%2BWVF%2FlaP5tct0h0iU5Zeyb3WQmL4a0oMdTDDTTJXwqNC2hharbrfoBtic367uKmcWr3TMfZAsDkoip5BzpWsu7ehFlKmhUBtJZmi1wZKABIrBQUnPKhyCmtB6O40q6%2FcfXFjwgspFyFOSd%2BOJ0ZzUGQZLqY0C%2Bl7G5doWlFvxaNvng4xQBd5QkNjNaakuKmFXiLtSDlTY4AI5eGYrGhHdH2uwvHOC3iMNbnv9MGOqUB4WE%2FB%2BaasQzXqVRsnTfNONi8O%2FyP12K1hcDLaSyOjIuftYCZvvaBMtXrwYEqUJqn%2FWDoxNnPwXKT%2FqUyKUfHfz6sLrn7frMM1Fw60QREAEKG5fGpCX7RzKFg%2BWek7oV97vrGjHu1%2BsLN2JFqynux%2Bs4GmpQqNutcCU62TYBIZTZu3v%2BXrbmqH9I7LpHopSCu4GSbgBQPUkeiyIeZFdYBXn1mhwq4&X-Amz-Signature=c2992e6464c8cc75ec69737f7e0e61bc64b4c73f6879c1469b97cccacdbed944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624N77RDM%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAPKEFxi%2BPQs4AU80Lr2G1y9lfR0lFgLWQjuXMsQdbYGAiEAg%2FNggR4y3E96JfRdiaE1voTVkXvT0qdrxnpyE9eG%2F1QqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ1AGAUHhjUwoW66CrcAzc%2BBbx3M4Px%2FKkrI8lRsgmTIscPGsDkQpAb0EBcQekbig3t0qVdTGBQkIFHIQ6qLdIEGTL8p6rvJCUo1oySE6L1fYZL6QaxhD5g6sescp5BG%2BnkbbnEYKZUvULsZE5slNzkZPGrecjHaC1n4wLaROxqcjDX%2FAaPbhMMWyGoo90aMVHSkHhZsY4SKHZxVTwXeYMOD73leqW6lU66lQJ9BAaBhSI3QO7JmIaNCXQLts24DiD87gSlUdnDzyEb0muTrAhMn49bWaBHGn2NCgYSfLZ4u53OvVYro5Z5HJrs3LIXsCQ4IsRtR5IdKURy0vHip4uuf874O7ZQPfWb%2F17oNNtimp42zBvrjPi7aHjQShgxpP13WZ787CzUshP8KepZ2t0ag%2BhFyfbpiFA2duEJbnD8%2BUCfY%2BWVF%2FlaP5tct0h0iU5Zeyb3WQmL4a0oMdTDDTTJXwqNC2hharbrfoBtic367uKmcWr3TMfZAsDkoip5BzpWsu7ehFlKmhUBtJZmi1wZKABIrBQUnPKhyCmtB6O40q6%2FcfXFjwgspFyFOSd%2BOJ0ZzUGQZLqY0C%2Bl7G5doWlFvxaNvng4xQBd5QkNjNaakuKmFXiLtSDlTY4AI5eGYrGhHdH2uwvHOC3iMNbnv9MGOqUB4WE%2FB%2BaasQzXqVRsnTfNONi8O%2FyP12K1hcDLaSyOjIuftYCZvvaBMtXrwYEqUJqn%2FWDoxNnPwXKT%2FqUyKUfHfz6sLrn7frMM1Fw60QREAEKG5fGpCX7RzKFg%2BWek7oV97vrGjHu1%2BsLN2JFqynux%2Bs4GmpQqNutcCU62TYBIZTZu3v%2BXrbmqH9I7LpHopSCu4GSbgBQPUkeiyIeZFdYBXn1mhwq4&X-Amz-Signature=fffd54e98a622a690ced581290520b99b7b77b29b671f47ec1e89aff0f3d0913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624N77RDM%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAPKEFxi%2BPQs4AU80Lr2G1y9lfR0lFgLWQjuXMsQdbYGAiEAg%2FNggR4y3E96JfRdiaE1voTVkXvT0qdrxnpyE9eG%2F1QqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ1AGAUHhjUwoW66CrcAzc%2BBbx3M4Px%2FKkrI8lRsgmTIscPGsDkQpAb0EBcQekbig3t0qVdTGBQkIFHIQ6qLdIEGTL8p6rvJCUo1oySE6L1fYZL6QaxhD5g6sescp5BG%2BnkbbnEYKZUvULsZE5slNzkZPGrecjHaC1n4wLaROxqcjDX%2FAaPbhMMWyGoo90aMVHSkHhZsY4SKHZxVTwXeYMOD73leqW6lU66lQJ9BAaBhSI3QO7JmIaNCXQLts24DiD87gSlUdnDzyEb0muTrAhMn49bWaBHGn2NCgYSfLZ4u53OvVYro5Z5HJrs3LIXsCQ4IsRtR5IdKURy0vHip4uuf874O7ZQPfWb%2F17oNNtimp42zBvrjPi7aHjQShgxpP13WZ787CzUshP8KepZ2t0ag%2BhFyfbpiFA2duEJbnD8%2BUCfY%2BWVF%2FlaP5tct0h0iU5Zeyb3WQmL4a0oMdTDDTTJXwqNC2hharbrfoBtic367uKmcWr3TMfZAsDkoip5BzpWsu7ehFlKmhUBtJZmi1wZKABIrBQUnPKhyCmtB6O40q6%2FcfXFjwgspFyFOSd%2BOJ0ZzUGQZLqY0C%2Bl7G5doWlFvxaNvng4xQBd5QkNjNaakuKmFXiLtSDlTY4AI5eGYrGhHdH2uwvHOC3iMNbnv9MGOqUB4WE%2FB%2BaasQzXqVRsnTfNONi8O%2FyP12K1hcDLaSyOjIuftYCZvvaBMtXrwYEqUJqn%2FWDoxNnPwXKT%2FqUyKUfHfz6sLrn7frMM1Fw60QREAEKG5fGpCX7RzKFg%2BWek7oV97vrGjHu1%2BsLN2JFqynux%2Bs4GmpQqNutcCU62TYBIZTZu3v%2BXrbmqH9I7LpHopSCu4GSbgBQPUkeiyIeZFdYBXn1mhwq4&X-Amz-Signature=2dc19e1b49a82745cc05714c5f6b7c9b48402b7934c72fe028ddf250c6f6ad9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624N77RDM%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAPKEFxi%2BPQs4AU80Lr2G1y9lfR0lFgLWQjuXMsQdbYGAiEAg%2FNggR4y3E96JfRdiaE1voTVkXvT0qdrxnpyE9eG%2F1QqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ1AGAUHhjUwoW66CrcAzc%2BBbx3M4Px%2FKkrI8lRsgmTIscPGsDkQpAb0EBcQekbig3t0qVdTGBQkIFHIQ6qLdIEGTL8p6rvJCUo1oySE6L1fYZL6QaxhD5g6sescp5BG%2BnkbbnEYKZUvULsZE5slNzkZPGrecjHaC1n4wLaROxqcjDX%2FAaPbhMMWyGoo90aMVHSkHhZsY4SKHZxVTwXeYMOD73leqW6lU66lQJ9BAaBhSI3QO7JmIaNCXQLts24DiD87gSlUdnDzyEb0muTrAhMn49bWaBHGn2NCgYSfLZ4u53OvVYro5Z5HJrs3LIXsCQ4IsRtR5IdKURy0vHip4uuf874O7ZQPfWb%2F17oNNtimp42zBvrjPi7aHjQShgxpP13WZ787CzUshP8KepZ2t0ag%2BhFyfbpiFA2duEJbnD8%2BUCfY%2BWVF%2FlaP5tct0h0iU5Zeyb3WQmL4a0oMdTDDTTJXwqNC2hharbrfoBtic367uKmcWr3TMfZAsDkoip5BzpWsu7ehFlKmhUBtJZmi1wZKABIrBQUnPKhyCmtB6O40q6%2FcfXFjwgspFyFOSd%2BOJ0ZzUGQZLqY0C%2Bl7G5doWlFvxaNvng4xQBd5QkNjNaakuKmFXiLtSDlTY4AI5eGYrGhHdH2uwvHOC3iMNbnv9MGOqUB4WE%2FB%2BaasQzXqVRsnTfNONi8O%2FyP12K1hcDLaSyOjIuftYCZvvaBMtXrwYEqUJqn%2FWDoxNnPwXKT%2FqUyKUfHfz6sLrn7frMM1Fw60QREAEKG5fGpCX7RzKFg%2BWek7oV97vrGjHu1%2BsLN2JFqynux%2Bs4GmpQqNutcCU62TYBIZTZu3v%2BXrbmqH9I7LpHopSCu4GSbgBQPUkeiyIeZFdYBXn1mhwq4&X-Amz-Signature=ad7c0e8c1466a1dd27d920fd1fc2be53fad58fbe85b20128774ccbe9b673eae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624N77RDM%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAPKEFxi%2BPQs4AU80Lr2G1y9lfR0lFgLWQjuXMsQdbYGAiEAg%2FNggR4y3E96JfRdiaE1voTVkXvT0qdrxnpyE9eG%2F1QqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ1AGAUHhjUwoW66CrcAzc%2BBbx3M4Px%2FKkrI8lRsgmTIscPGsDkQpAb0EBcQekbig3t0qVdTGBQkIFHIQ6qLdIEGTL8p6rvJCUo1oySE6L1fYZL6QaxhD5g6sescp5BG%2BnkbbnEYKZUvULsZE5slNzkZPGrecjHaC1n4wLaROxqcjDX%2FAaPbhMMWyGoo90aMVHSkHhZsY4SKHZxVTwXeYMOD73leqW6lU66lQJ9BAaBhSI3QO7JmIaNCXQLts24DiD87gSlUdnDzyEb0muTrAhMn49bWaBHGn2NCgYSfLZ4u53OvVYro5Z5HJrs3LIXsCQ4IsRtR5IdKURy0vHip4uuf874O7ZQPfWb%2F17oNNtimp42zBvrjPi7aHjQShgxpP13WZ787CzUshP8KepZ2t0ag%2BhFyfbpiFA2duEJbnD8%2BUCfY%2BWVF%2FlaP5tct0h0iU5Zeyb3WQmL4a0oMdTDDTTJXwqNC2hharbrfoBtic367uKmcWr3TMfZAsDkoip5BzpWsu7ehFlKmhUBtJZmi1wZKABIrBQUnPKhyCmtB6O40q6%2FcfXFjwgspFyFOSd%2BOJ0ZzUGQZLqY0C%2Bl7G5doWlFvxaNvng4xQBd5QkNjNaakuKmFXiLtSDlTY4AI5eGYrGhHdH2uwvHOC3iMNbnv9MGOqUB4WE%2FB%2BaasQzXqVRsnTfNONi8O%2FyP12K1hcDLaSyOjIuftYCZvvaBMtXrwYEqUJqn%2FWDoxNnPwXKT%2FqUyKUfHfz6sLrn7frMM1Fw60QREAEKG5fGpCX7RzKFg%2BWek7oV97vrGjHu1%2BsLN2JFqynux%2Bs4GmpQqNutcCU62TYBIZTZu3v%2BXrbmqH9I7LpHopSCu4GSbgBQPUkeiyIeZFdYBXn1mhwq4&X-Amz-Signature=c67f7d1e72e2422a4a1b0556afcc8b6b666b066cbb1650db333e54e32cff57bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

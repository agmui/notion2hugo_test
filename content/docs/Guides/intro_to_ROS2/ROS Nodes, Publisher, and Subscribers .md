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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMYRAZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHtP0m8UWcXZ0KgeW%2BKE0psTCgXki7C4EYF1dx7uDTasAiAfm3JkPyHoPWjlkJlnvoikiEwyUIoRSiW7xJ4%2B9WuPrCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwskumXdBxoWTdysLKtwDQIE006nSgVmKxS4tpw%2FPVGhkBSM4Lvn6teb5JDdZ08ce4F3jAR9BnBsLi%2F0UlN0LW3mfhryHSCmAwrnIoDRl8igtv5v7ViK50b3qD6asG4BgXOVbTFob1Y3mI4Ul1o%2FTF4a6YzW9ujdIgzw7Kg9g1LQ%2Fd2Wgd%2BsEu4zK4Gvlcll461cqn5hvgqmkB775xmmbNnqXD7cAY1dzOuhr5vk%2Fq%2FNVNjBQ1IOqJep2k4kCEQuWZdOuwf%2Fezl2H%2BLnUN9OGZw9lwJ63FfOrd6PD5NSJv3gQC95xabUFpM0unLhEOeKcgO1qbYR7NCv8%2Fl04%2F4vhaW1p76yiEiAgnKH6VFuPcdTf4%2F9QACWeho%2F6lSHYrlOV9iIFE%2FQDeAjj0N6k85mnjlOhUt%2FU9it9qW8z%2BhUx2gmLRo2vz0JVxCCtwuknKRYfRz5NZRdO5i%2FqAsBJ6WGmvB1HUHKb850C6Z0T7TOCKXrZsMa9YM0G5u5bg%2FZLpIGdJipT0OcaFJhMMYIo8%2FyUIIQ2gSks77tezv1llnGdcJTSZ1xYd51g66Tid0%2FXa6%2BqSD2%2FoAD%2Bzh3lG61ucZILbQ%2FBpzCgb2mTl4tXp1GjvHuv9IaiZDhowJZ93YQtoKTgKpghc%2Bg4xyl5JC4w5pCKvgY6pgHyZrEwYUWS2FhIXl%2FXzCInsr9LcFzdmO%2FfCTS%2Bl0Qwm0VRZaZtGOTE7OgAQK4jr0tqC7cLZJvVn5iX%2BgU3wxImyLUinMNRmLQ9FyMZUaXNonZHkTLkEZ%2F%2BbbA6RF7mtMaCjKspiZ4Wit0ClVRVX3BaPHPyLp1lqL3CQ32z1LSPpSvIzp5I38zQ%2Fpu%2B9iKDWnZOPBKvhOJucn1GOpoPtq0tidwq8gDP&X-Amz-Signature=fddcfb34b2dc97036ca59e2c20f915eed98a15508a9d1da4c6476e69b1846954&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMYRAZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHtP0m8UWcXZ0KgeW%2BKE0psTCgXki7C4EYF1dx7uDTasAiAfm3JkPyHoPWjlkJlnvoikiEwyUIoRSiW7xJ4%2B9WuPrCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwskumXdBxoWTdysLKtwDQIE006nSgVmKxS4tpw%2FPVGhkBSM4Lvn6teb5JDdZ08ce4F3jAR9BnBsLi%2F0UlN0LW3mfhryHSCmAwrnIoDRl8igtv5v7ViK50b3qD6asG4BgXOVbTFob1Y3mI4Ul1o%2FTF4a6YzW9ujdIgzw7Kg9g1LQ%2Fd2Wgd%2BsEu4zK4Gvlcll461cqn5hvgqmkB775xmmbNnqXD7cAY1dzOuhr5vk%2Fq%2FNVNjBQ1IOqJep2k4kCEQuWZdOuwf%2Fezl2H%2BLnUN9OGZw9lwJ63FfOrd6PD5NSJv3gQC95xabUFpM0unLhEOeKcgO1qbYR7NCv8%2Fl04%2F4vhaW1p76yiEiAgnKH6VFuPcdTf4%2F9QACWeho%2F6lSHYrlOV9iIFE%2FQDeAjj0N6k85mnjlOhUt%2FU9it9qW8z%2BhUx2gmLRo2vz0JVxCCtwuknKRYfRz5NZRdO5i%2FqAsBJ6WGmvB1HUHKb850C6Z0T7TOCKXrZsMa9YM0G5u5bg%2FZLpIGdJipT0OcaFJhMMYIo8%2FyUIIQ2gSks77tezv1llnGdcJTSZ1xYd51g66Tid0%2FXa6%2BqSD2%2FoAD%2Bzh3lG61ucZILbQ%2FBpzCgb2mTl4tXp1GjvHuv9IaiZDhowJZ93YQtoKTgKpghc%2Bg4xyl5JC4w5pCKvgY6pgHyZrEwYUWS2FhIXl%2FXzCInsr9LcFzdmO%2FfCTS%2Bl0Qwm0VRZaZtGOTE7OgAQK4jr0tqC7cLZJvVn5iX%2BgU3wxImyLUinMNRmLQ9FyMZUaXNonZHkTLkEZ%2F%2BbbA6RF7mtMaCjKspiZ4Wit0ClVRVX3BaPHPyLp1lqL3CQ32z1LSPpSvIzp5I38zQ%2Fpu%2B9iKDWnZOPBKvhOJucn1GOpoPtq0tidwq8gDP&X-Amz-Signature=dba42ce10fbb563257f0381e43363d7a3c5a2387da53ccdea8c2f857407e496e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMYRAZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHtP0m8UWcXZ0KgeW%2BKE0psTCgXki7C4EYF1dx7uDTasAiAfm3JkPyHoPWjlkJlnvoikiEwyUIoRSiW7xJ4%2B9WuPrCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwskumXdBxoWTdysLKtwDQIE006nSgVmKxS4tpw%2FPVGhkBSM4Lvn6teb5JDdZ08ce4F3jAR9BnBsLi%2F0UlN0LW3mfhryHSCmAwrnIoDRl8igtv5v7ViK50b3qD6asG4BgXOVbTFob1Y3mI4Ul1o%2FTF4a6YzW9ujdIgzw7Kg9g1LQ%2Fd2Wgd%2BsEu4zK4Gvlcll461cqn5hvgqmkB775xmmbNnqXD7cAY1dzOuhr5vk%2Fq%2FNVNjBQ1IOqJep2k4kCEQuWZdOuwf%2Fezl2H%2BLnUN9OGZw9lwJ63FfOrd6PD5NSJv3gQC95xabUFpM0unLhEOeKcgO1qbYR7NCv8%2Fl04%2F4vhaW1p76yiEiAgnKH6VFuPcdTf4%2F9QACWeho%2F6lSHYrlOV9iIFE%2FQDeAjj0N6k85mnjlOhUt%2FU9it9qW8z%2BhUx2gmLRo2vz0JVxCCtwuknKRYfRz5NZRdO5i%2FqAsBJ6WGmvB1HUHKb850C6Z0T7TOCKXrZsMa9YM0G5u5bg%2FZLpIGdJipT0OcaFJhMMYIo8%2FyUIIQ2gSks77tezv1llnGdcJTSZ1xYd51g66Tid0%2FXa6%2BqSD2%2FoAD%2Bzh3lG61ucZILbQ%2FBpzCgb2mTl4tXp1GjvHuv9IaiZDhowJZ93YQtoKTgKpghc%2Bg4xyl5JC4w5pCKvgY6pgHyZrEwYUWS2FhIXl%2FXzCInsr9LcFzdmO%2FfCTS%2Bl0Qwm0VRZaZtGOTE7OgAQK4jr0tqC7cLZJvVn5iX%2BgU3wxImyLUinMNRmLQ9FyMZUaXNonZHkTLkEZ%2F%2BbbA6RF7mtMaCjKspiZ4Wit0ClVRVX3BaPHPyLp1lqL3CQ32z1LSPpSvIzp5I38zQ%2Fpu%2B9iKDWnZOPBKvhOJucn1GOpoPtq0tidwq8gDP&X-Amz-Signature=87ccfea1ca64044ed899a173797d7b53eef152687b98a0e895039501401e2f25&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMYRAZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHtP0m8UWcXZ0KgeW%2BKE0psTCgXki7C4EYF1dx7uDTasAiAfm3JkPyHoPWjlkJlnvoikiEwyUIoRSiW7xJ4%2B9WuPrCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwskumXdBxoWTdysLKtwDQIE006nSgVmKxS4tpw%2FPVGhkBSM4Lvn6teb5JDdZ08ce4F3jAR9BnBsLi%2F0UlN0LW3mfhryHSCmAwrnIoDRl8igtv5v7ViK50b3qD6asG4BgXOVbTFob1Y3mI4Ul1o%2FTF4a6YzW9ujdIgzw7Kg9g1LQ%2Fd2Wgd%2BsEu4zK4Gvlcll461cqn5hvgqmkB775xmmbNnqXD7cAY1dzOuhr5vk%2Fq%2FNVNjBQ1IOqJep2k4kCEQuWZdOuwf%2Fezl2H%2BLnUN9OGZw9lwJ63FfOrd6PD5NSJv3gQC95xabUFpM0unLhEOeKcgO1qbYR7NCv8%2Fl04%2F4vhaW1p76yiEiAgnKH6VFuPcdTf4%2F9QACWeho%2F6lSHYrlOV9iIFE%2FQDeAjj0N6k85mnjlOhUt%2FU9it9qW8z%2BhUx2gmLRo2vz0JVxCCtwuknKRYfRz5NZRdO5i%2FqAsBJ6WGmvB1HUHKb850C6Z0T7TOCKXrZsMa9YM0G5u5bg%2FZLpIGdJipT0OcaFJhMMYIo8%2FyUIIQ2gSks77tezv1llnGdcJTSZ1xYd51g66Tid0%2FXa6%2BqSD2%2FoAD%2Bzh3lG61ucZILbQ%2FBpzCgb2mTl4tXp1GjvHuv9IaiZDhowJZ93YQtoKTgKpghc%2Bg4xyl5JC4w5pCKvgY6pgHyZrEwYUWS2FhIXl%2FXzCInsr9LcFzdmO%2FfCTS%2Bl0Qwm0VRZaZtGOTE7OgAQK4jr0tqC7cLZJvVn5iX%2BgU3wxImyLUinMNRmLQ9FyMZUaXNonZHkTLkEZ%2F%2BbbA6RF7mtMaCjKspiZ4Wit0ClVRVX3BaPHPyLp1lqL3CQ32z1LSPpSvIzp5I38zQ%2Fpu%2B9iKDWnZOPBKvhOJucn1GOpoPtq0tidwq8gDP&X-Amz-Signature=9d738e1e32dffa60e37daabe7625349c90faf2e92fd0dd2ec869e422b90da298&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMYRAZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHtP0m8UWcXZ0KgeW%2BKE0psTCgXki7C4EYF1dx7uDTasAiAfm3JkPyHoPWjlkJlnvoikiEwyUIoRSiW7xJ4%2B9WuPrCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwskumXdBxoWTdysLKtwDQIE006nSgVmKxS4tpw%2FPVGhkBSM4Lvn6teb5JDdZ08ce4F3jAR9BnBsLi%2F0UlN0LW3mfhryHSCmAwrnIoDRl8igtv5v7ViK50b3qD6asG4BgXOVbTFob1Y3mI4Ul1o%2FTF4a6YzW9ujdIgzw7Kg9g1LQ%2Fd2Wgd%2BsEu4zK4Gvlcll461cqn5hvgqmkB775xmmbNnqXD7cAY1dzOuhr5vk%2Fq%2FNVNjBQ1IOqJep2k4kCEQuWZdOuwf%2Fezl2H%2BLnUN9OGZw9lwJ63FfOrd6PD5NSJv3gQC95xabUFpM0unLhEOeKcgO1qbYR7NCv8%2Fl04%2F4vhaW1p76yiEiAgnKH6VFuPcdTf4%2F9QACWeho%2F6lSHYrlOV9iIFE%2FQDeAjj0N6k85mnjlOhUt%2FU9it9qW8z%2BhUx2gmLRo2vz0JVxCCtwuknKRYfRz5NZRdO5i%2FqAsBJ6WGmvB1HUHKb850C6Z0T7TOCKXrZsMa9YM0G5u5bg%2FZLpIGdJipT0OcaFJhMMYIo8%2FyUIIQ2gSks77tezv1llnGdcJTSZ1xYd51g66Tid0%2FXa6%2BqSD2%2FoAD%2Bzh3lG61ucZILbQ%2FBpzCgb2mTl4tXp1GjvHuv9IaiZDhowJZ93YQtoKTgKpghc%2Bg4xyl5JC4w5pCKvgY6pgHyZrEwYUWS2FhIXl%2FXzCInsr9LcFzdmO%2FfCTS%2Bl0Qwm0VRZaZtGOTE7OgAQK4jr0tqC7cLZJvVn5iX%2BgU3wxImyLUinMNRmLQ9FyMZUaXNonZHkTLkEZ%2F%2BbbA6RF7mtMaCjKspiZ4Wit0ClVRVX3BaPHPyLp1lqL3CQ32z1LSPpSvIzp5I38zQ%2Fpu%2B9iKDWnZOPBKvhOJucn1GOpoPtq0tidwq8gDP&X-Amz-Signature=1ac71b1b2822874fe105355f081cf9eb0ed9629c6dbfbe7ccab7dadaa5f93a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMYRAZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHtP0m8UWcXZ0KgeW%2BKE0psTCgXki7C4EYF1dx7uDTasAiAfm3JkPyHoPWjlkJlnvoikiEwyUIoRSiW7xJ4%2B9WuPrCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwskumXdBxoWTdysLKtwDQIE006nSgVmKxS4tpw%2FPVGhkBSM4Lvn6teb5JDdZ08ce4F3jAR9BnBsLi%2F0UlN0LW3mfhryHSCmAwrnIoDRl8igtv5v7ViK50b3qD6asG4BgXOVbTFob1Y3mI4Ul1o%2FTF4a6YzW9ujdIgzw7Kg9g1LQ%2Fd2Wgd%2BsEu4zK4Gvlcll461cqn5hvgqmkB775xmmbNnqXD7cAY1dzOuhr5vk%2Fq%2FNVNjBQ1IOqJep2k4kCEQuWZdOuwf%2Fezl2H%2BLnUN9OGZw9lwJ63FfOrd6PD5NSJv3gQC95xabUFpM0unLhEOeKcgO1qbYR7NCv8%2Fl04%2F4vhaW1p76yiEiAgnKH6VFuPcdTf4%2F9QACWeho%2F6lSHYrlOV9iIFE%2FQDeAjj0N6k85mnjlOhUt%2FU9it9qW8z%2BhUx2gmLRo2vz0JVxCCtwuknKRYfRz5NZRdO5i%2FqAsBJ6WGmvB1HUHKb850C6Z0T7TOCKXrZsMa9YM0G5u5bg%2FZLpIGdJipT0OcaFJhMMYIo8%2FyUIIQ2gSks77tezv1llnGdcJTSZ1xYd51g66Tid0%2FXa6%2BqSD2%2FoAD%2Bzh3lG61ucZILbQ%2FBpzCgb2mTl4tXp1GjvHuv9IaiZDhowJZ93YQtoKTgKpghc%2Bg4xyl5JC4w5pCKvgY6pgHyZrEwYUWS2FhIXl%2FXzCInsr9LcFzdmO%2FfCTS%2Bl0Qwm0VRZaZtGOTE7OgAQK4jr0tqC7cLZJvVn5iX%2BgU3wxImyLUinMNRmLQ9FyMZUaXNonZHkTLkEZ%2F%2BbbA6RF7mtMaCjKspiZ4Wit0ClVRVX3BaPHPyLp1lqL3CQ32z1LSPpSvIzp5I38zQ%2Fpu%2B9iKDWnZOPBKvhOJucn1GOpoPtq0tidwq8gDP&X-Amz-Signature=c4ea8588055ae9ec1e0b68e960e0c164dba6843d4b2d8c5d3441bf3842cd59c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMYRAZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHtP0m8UWcXZ0KgeW%2BKE0psTCgXki7C4EYF1dx7uDTasAiAfm3JkPyHoPWjlkJlnvoikiEwyUIoRSiW7xJ4%2B9WuPrCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwskumXdBxoWTdysLKtwDQIE006nSgVmKxS4tpw%2FPVGhkBSM4Lvn6teb5JDdZ08ce4F3jAR9BnBsLi%2F0UlN0LW3mfhryHSCmAwrnIoDRl8igtv5v7ViK50b3qD6asG4BgXOVbTFob1Y3mI4Ul1o%2FTF4a6YzW9ujdIgzw7Kg9g1LQ%2Fd2Wgd%2BsEu4zK4Gvlcll461cqn5hvgqmkB775xmmbNnqXD7cAY1dzOuhr5vk%2Fq%2FNVNjBQ1IOqJep2k4kCEQuWZdOuwf%2Fezl2H%2BLnUN9OGZw9lwJ63FfOrd6PD5NSJv3gQC95xabUFpM0unLhEOeKcgO1qbYR7NCv8%2Fl04%2F4vhaW1p76yiEiAgnKH6VFuPcdTf4%2F9QACWeho%2F6lSHYrlOV9iIFE%2FQDeAjj0N6k85mnjlOhUt%2FU9it9qW8z%2BhUx2gmLRo2vz0JVxCCtwuknKRYfRz5NZRdO5i%2FqAsBJ6WGmvB1HUHKb850C6Z0T7TOCKXrZsMa9YM0G5u5bg%2FZLpIGdJipT0OcaFJhMMYIo8%2FyUIIQ2gSks77tezv1llnGdcJTSZ1xYd51g66Tid0%2FXa6%2BqSD2%2FoAD%2Bzh3lG61ucZILbQ%2FBpzCgb2mTl4tXp1GjvHuv9IaiZDhowJZ93YQtoKTgKpghc%2Bg4xyl5JC4w5pCKvgY6pgHyZrEwYUWS2FhIXl%2FXzCInsr9LcFzdmO%2FfCTS%2Bl0Qwm0VRZaZtGOTE7OgAQK4jr0tqC7cLZJvVn5iX%2BgU3wxImyLUinMNRmLQ9FyMZUaXNonZHkTLkEZ%2F%2BbbA6RF7mtMaCjKspiZ4Wit0ClVRVX3BaPHPyLp1lqL3CQ32z1LSPpSvIzp5I38zQ%2Fpu%2B9iKDWnZOPBKvhOJucn1GOpoPtq0tidwq8gDP&X-Amz-Signature=29ad527b9fae3d2f589f8ca1c83c4c6f85afd5061f27d5ed875cbed4dc6913d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMYRAZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHtP0m8UWcXZ0KgeW%2BKE0psTCgXki7C4EYF1dx7uDTasAiAfm3JkPyHoPWjlkJlnvoikiEwyUIoRSiW7xJ4%2B9WuPrCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwskumXdBxoWTdysLKtwDQIE006nSgVmKxS4tpw%2FPVGhkBSM4Lvn6teb5JDdZ08ce4F3jAR9BnBsLi%2F0UlN0LW3mfhryHSCmAwrnIoDRl8igtv5v7ViK50b3qD6asG4BgXOVbTFob1Y3mI4Ul1o%2FTF4a6YzW9ujdIgzw7Kg9g1LQ%2Fd2Wgd%2BsEu4zK4Gvlcll461cqn5hvgqmkB775xmmbNnqXD7cAY1dzOuhr5vk%2Fq%2FNVNjBQ1IOqJep2k4kCEQuWZdOuwf%2Fezl2H%2BLnUN9OGZw9lwJ63FfOrd6PD5NSJv3gQC95xabUFpM0unLhEOeKcgO1qbYR7NCv8%2Fl04%2F4vhaW1p76yiEiAgnKH6VFuPcdTf4%2F9QACWeho%2F6lSHYrlOV9iIFE%2FQDeAjj0N6k85mnjlOhUt%2FU9it9qW8z%2BhUx2gmLRo2vz0JVxCCtwuknKRYfRz5NZRdO5i%2FqAsBJ6WGmvB1HUHKb850C6Z0T7TOCKXrZsMa9YM0G5u5bg%2FZLpIGdJipT0OcaFJhMMYIo8%2FyUIIQ2gSks77tezv1llnGdcJTSZ1xYd51g66Tid0%2FXa6%2BqSD2%2FoAD%2Bzh3lG61ucZILbQ%2FBpzCgb2mTl4tXp1GjvHuv9IaiZDhowJZ93YQtoKTgKpghc%2Bg4xyl5JC4w5pCKvgY6pgHyZrEwYUWS2FhIXl%2FXzCInsr9LcFzdmO%2FfCTS%2Bl0Qwm0VRZaZtGOTE7OgAQK4jr0tqC7cLZJvVn5iX%2BgU3wxImyLUinMNRmLQ9FyMZUaXNonZHkTLkEZ%2F%2BbbA6RF7mtMaCjKspiZ4Wit0ClVRVX3BaPHPyLp1lqL3CQ32z1LSPpSvIzp5I38zQ%2Fpu%2B9iKDWnZOPBKvhOJucn1GOpoPtq0tidwq8gDP&X-Amz-Signature=f41b60848e58aec142967dbfb9f8567ae344e9717c390c530d0997eb0aa9664b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

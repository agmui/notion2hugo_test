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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFMDO34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG9N87Y9mTghckXlcsMu%2BDD9AVcrnl5gVd%2BFfgXW6WMkAiEA1Nm0Cicx72JgLMQ4naI6ySNrJs6vfVo%2FcDUKJgxCT2EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP68ZwWfjUVq11WlTSrcAzFxFy1tvY0%2FKuQ0Cm%2BlmlbiyiR4rGP1LdzmVskvAQ8IascIEelZP1kiaEpohkpSL8LRGbGNt69qCKJel%2FafLkYGCPiLurpUXD5CKnHHB10DSPURBa8Chxj%2FwhLQsy2E1OIhjnPmOPdIHaCSmvSwEhNMwu3mTCI6uiDx0KASXk6eey7kzKi9G5wYTgYuJ8tEToAcSJO7RMls4Nv4kw9mDrrtcFOOo9Yw5CBXaF3XC74xtEL00OJE8b1yD7bI9q%2F%2Fm%2F5MRs0Gmt5VoyWnKunaqFSHDyzS9Vyi0Y8SSkLmAZLiuipR1WC4aQZ915mnaBfhvl18km37zhjZwtUaJElb3PT6vjlk0dVu71mBAVAG8brU0MSLMeKzXtjPMTNqkJ6horn8SRjTN5d3ei0Jaxx5WnNLfwfcdm9YAXQA434wpQo%2FqBT6%2Fkt4%2BF8OsO4rH9SGk77aNm5EL94srRGUpIZvZBUcGnNXFg8VZc%2BOmk8dbAn8vdrEgYC%2FILoTUtEfEVny3qabysTgJcBJO0l%2BPVtly1UvfUVklb7Yo%2FmQff1yG%2BQN6GpxIaUctGiEkTG6mdOux73KszMZy2OHZMoT4y6r87bOldyeOqrS%2BmO%2F3%2FyRqYl8S%2FhjP6YLToVD%2FhibMIH7ncQGOqUBuxl9r6WalmDYmPgkooMxI8QPDIDlVBLNnvF0mDrUVsIA33jWVAp9ZeRSqW5hlVfT8PrwjjYh%2B%2BCMq12STBR7KeNfbUMTt7CatEQqCXlSmafiFwX5di2gZkL4YQyCBTr%2Fu1BDhiJvVmvYUdCgVcBA2lzJPdD%2F61%2FX4HH7dcjfvvNo3EfhP3S%2FfJj2cWlZMa%2Fr0Lw4t7x24sYV3GoOOU76g9FhWYgl&X-Amz-Signature=134675560d3b52d9cf40129fbc924b1d1b86ce77aee31453e0f52e94868e3434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFMDO34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG9N87Y9mTghckXlcsMu%2BDD9AVcrnl5gVd%2BFfgXW6WMkAiEA1Nm0Cicx72JgLMQ4naI6ySNrJs6vfVo%2FcDUKJgxCT2EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP68ZwWfjUVq11WlTSrcAzFxFy1tvY0%2FKuQ0Cm%2BlmlbiyiR4rGP1LdzmVskvAQ8IascIEelZP1kiaEpohkpSL8LRGbGNt69qCKJel%2FafLkYGCPiLurpUXD5CKnHHB10DSPURBa8Chxj%2FwhLQsy2E1OIhjnPmOPdIHaCSmvSwEhNMwu3mTCI6uiDx0KASXk6eey7kzKi9G5wYTgYuJ8tEToAcSJO7RMls4Nv4kw9mDrrtcFOOo9Yw5CBXaF3XC74xtEL00OJE8b1yD7bI9q%2F%2Fm%2F5MRs0Gmt5VoyWnKunaqFSHDyzS9Vyi0Y8SSkLmAZLiuipR1WC4aQZ915mnaBfhvl18km37zhjZwtUaJElb3PT6vjlk0dVu71mBAVAG8brU0MSLMeKzXtjPMTNqkJ6horn8SRjTN5d3ei0Jaxx5WnNLfwfcdm9YAXQA434wpQo%2FqBT6%2Fkt4%2BF8OsO4rH9SGk77aNm5EL94srRGUpIZvZBUcGnNXFg8VZc%2BOmk8dbAn8vdrEgYC%2FILoTUtEfEVny3qabysTgJcBJO0l%2BPVtly1UvfUVklb7Yo%2FmQff1yG%2BQN6GpxIaUctGiEkTG6mdOux73KszMZy2OHZMoT4y6r87bOldyeOqrS%2BmO%2F3%2FyRqYl8S%2FhjP6YLToVD%2FhibMIH7ncQGOqUBuxl9r6WalmDYmPgkooMxI8QPDIDlVBLNnvF0mDrUVsIA33jWVAp9ZeRSqW5hlVfT8PrwjjYh%2B%2BCMq12STBR7KeNfbUMTt7CatEQqCXlSmafiFwX5di2gZkL4YQyCBTr%2Fu1BDhiJvVmvYUdCgVcBA2lzJPdD%2F61%2FX4HH7dcjfvvNo3EfhP3S%2FfJj2cWlZMa%2Fr0Lw4t7x24sYV3GoOOU76g9FhWYgl&X-Amz-Signature=5907f0ab2a7609ec36ae42b00210d438e989408d5423da2113d726cfd2de57fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFMDO34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG9N87Y9mTghckXlcsMu%2BDD9AVcrnl5gVd%2BFfgXW6WMkAiEA1Nm0Cicx72JgLMQ4naI6ySNrJs6vfVo%2FcDUKJgxCT2EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP68ZwWfjUVq11WlTSrcAzFxFy1tvY0%2FKuQ0Cm%2BlmlbiyiR4rGP1LdzmVskvAQ8IascIEelZP1kiaEpohkpSL8LRGbGNt69qCKJel%2FafLkYGCPiLurpUXD5CKnHHB10DSPURBa8Chxj%2FwhLQsy2E1OIhjnPmOPdIHaCSmvSwEhNMwu3mTCI6uiDx0KASXk6eey7kzKi9G5wYTgYuJ8tEToAcSJO7RMls4Nv4kw9mDrrtcFOOo9Yw5CBXaF3XC74xtEL00OJE8b1yD7bI9q%2F%2Fm%2F5MRs0Gmt5VoyWnKunaqFSHDyzS9Vyi0Y8SSkLmAZLiuipR1WC4aQZ915mnaBfhvl18km37zhjZwtUaJElb3PT6vjlk0dVu71mBAVAG8brU0MSLMeKzXtjPMTNqkJ6horn8SRjTN5d3ei0Jaxx5WnNLfwfcdm9YAXQA434wpQo%2FqBT6%2Fkt4%2BF8OsO4rH9SGk77aNm5EL94srRGUpIZvZBUcGnNXFg8VZc%2BOmk8dbAn8vdrEgYC%2FILoTUtEfEVny3qabysTgJcBJO0l%2BPVtly1UvfUVklb7Yo%2FmQff1yG%2BQN6GpxIaUctGiEkTG6mdOux73KszMZy2OHZMoT4y6r87bOldyeOqrS%2BmO%2F3%2FyRqYl8S%2FhjP6YLToVD%2FhibMIH7ncQGOqUBuxl9r6WalmDYmPgkooMxI8QPDIDlVBLNnvF0mDrUVsIA33jWVAp9ZeRSqW5hlVfT8PrwjjYh%2B%2BCMq12STBR7KeNfbUMTt7CatEQqCXlSmafiFwX5di2gZkL4YQyCBTr%2Fu1BDhiJvVmvYUdCgVcBA2lzJPdD%2F61%2FX4HH7dcjfvvNo3EfhP3S%2FfJj2cWlZMa%2Fr0Lw4t7x24sYV3GoOOU76g9FhWYgl&X-Amz-Signature=b0a7f4b3ebd14a9894258e362cea830dd53b627a0e15ee5612e6850c1499ec91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFMDO34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG9N87Y9mTghckXlcsMu%2BDD9AVcrnl5gVd%2BFfgXW6WMkAiEA1Nm0Cicx72JgLMQ4naI6ySNrJs6vfVo%2FcDUKJgxCT2EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP68ZwWfjUVq11WlTSrcAzFxFy1tvY0%2FKuQ0Cm%2BlmlbiyiR4rGP1LdzmVskvAQ8IascIEelZP1kiaEpohkpSL8LRGbGNt69qCKJel%2FafLkYGCPiLurpUXD5CKnHHB10DSPURBa8Chxj%2FwhLQsy2E1OIhjnPmOPdIHaCSmvSwEhNMwu3mTCI6uiDx0KASXk6eey7kzKi9G5wYTgYuJ8tEToAcSJO7RMls4Nv4kw9mDrrtcFOOo9Yw5CBXaF3XC74xtEL00OJE8b1yD7bI9q%2F%2Fm%2F5MRs0Gmt5VoyWnKunaqFSHDyzS9Vyi0Y8SSkLmAZLiuipR1WC4aQZ915mnaBfhvl18km37zhjZwtUaJElb3PT6vjlk0dVu71mBAVAG8brU0MSLMeKzXtjPMTNqkJ6horn8SRjTN5d3ei0Jaxx5WnNLfwfcdm9YAXQA434wpQo%2FqBT6%2Fkt4%2BF8OsO4rH9SGk77aNm5EL94srRGUpIZvZBUcGnNXFg8VZc%2BOmk8dbAn8vdrEgYC%2FILoTUtEfEVny3qabysTgJcBJO0l%2BPVtly1UvfUVklb7Yo%2FmQff1yG%2BQN6GpxIaUctGiEkTG6mdOux73KszMZy2OHZMoT4y6r87bOldyeOqrS%2BmO%2F3%2FyRqYl8S%2FhjP6YLToVD%2FhibMIH7ncQGOqUBuxl9r6WalmDYmPgkooMxI8QPDIDlVBLNnvF0mDrUVsIA33jWVAp9ZeRSqW5hlVfT8PrwjjYh%2B%2BCMq12STBR7KeNfbUMTt7CatEQqCXlSmafiFwX5di2gZkL4YQyCBTr%2Fu1BDhiJvVmvYUdCgVcBA2lzJPdD%2F61%2FX4HH7dcjfvvNo3EfhP3S%2FfJj2cWlZMa%2Fr0Lw4t7x24sYV3GoOOU76g9FhWYgl&X-Amz-Signature=e6852f235e1467777330832fb2326477e8bedaba70affc9a0161d783346532fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFMDO34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG9N87Y9mTghckXlcsMu%2BDD9AVcrnl5gVd%2BFfgXW6WMkAiEA1Nm0Cicx72JgLMQ4naI6ySNrJs6vfVo%2FcDUKJgxCT2EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP68ZwWfjUVq11WlTSrcAzFxFy1tvY0%2FKuQ0Cm%2BlmlbiyiR4rGP1LdzmVskvAQ8IascIEelZP1kiaEpohkpSL8LRGbGNt69qCKJel%2FafLkYGCPiLurpUXD5CKnHHB10DSPURBa8Chxj%2FwhLQsy2E1OIhjnPmOPdIHaCSmvSwEhNMwu3mTCI6uiDx0KASXk6eey7kzKi9G5wYTgYuJ8tEToAcSJO7RMls4Nv4kw9mDrrtcFOOo9Yw5CBXaF3XC74xtEL00OJE8b1yD7bI9q%2F%2Fm%2F5MRs0Gmt5VoyWnKunaqFSHDyzS9Vyi0Y8SSkLmAZLiuipR1WC4aQZ915mnaBfhvl18km37zhjZwtUaJElb3PT6vjlk0dVu71mBAVAG8brU0MSLMeKzXtjPMTNqkJ6horn8SRjTN5d3ei0Jaxx5WnNLfwfcdm9YAXQA434wpQo%2FqBT6%2Fkt4%2BF8OsO4rH9SGk77aNm5EL94srRGUpIZvZBUcGnNXFg8VZc%2BOmk8dbAn8vdrEgYC%2FILoTUtEfEVny3qabysTgJcBJO0l%2BPVtly1UvfUVklb7Yo%2FmQff1yG%2BQN6GpxIaUctGiEkTG6mdOux73KszMZy2OHZMoT4y6r87bOldyeOqrS%2BmO%2F3%2FyRqYl8S%2FhjP6YLToVD%2FhibMIH7ncQGOqUBuxl9r6WalmDYmPgkooMxI8QPDIDlVBLNnvF0mDrUVsIA33jWVAp9ZeRSqW5hlVfT8PrwjjYh%2B%2BCMq12STBR7KeNfbUMTt7CatEQqCXlSmafiFwX5di2gZkL4YQyCBTr%2Fu1BDhiJvVmvYUdCgVcBA2lzJPdD%2F61%2FX4HH7dcjfvvNo3EfhP3S%2FfJj2cWlZMa%2Fr0Lw4t7x24sYV3GoOOU76g9FhWYgl&X-Amz-Signature=57ae969e0642d6afbbe1c40d3bbeb6b8f2077689f814dad3124461e11e9bee0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFMDO34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG9N87Y9mTghckXlcsMu%2BDD9AVcrnl5gVd%2BFfgXW6WMkAiEA1Nm0Cicx72JgLMQ4naI6ySNrJs6vfVo%2FcDUKJgxCT2EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP68ZwWfjUVq11WlTSrcAzFxFy1tvY0%2FKuQ0Cm%2BlmlbiyiR4rGP1LdzmVskvAQ8IascIEelZP1kiaEpohkpSL8LRGbGNt69qCKJel%2FafLkYGCPiLurpUXD5CKnHHB10DSPURBa8Chxj%2FwhLQsy2E1OIhjnPmOPdIHaCSmvSwEhNMwu3mTCI6uiDx0KASXk6eey7kzKi9G5wYTgYuJ8tEToAcSJO7RMls4Nv4kw9mDrrtcFOOo9Yw5CBXaF3XC74xtEL00OJE8b1yD7bI9q%2F%2Fm%2F5MRs0Gmt5VoyWnKunaqFSHDyzS9Vyi0Y8SSkLmAZLiuipR1WC4aQZ915mnaBfhvl18km37zhjZwtUaJElb3PT6vjlk0dVu71mBAVAG8brU0MSLMeKzXtjPMTNqkJ6horn8SRjTN5d3ei0Jaxx5WnNLfwfcdm9YAXQA434wpQo%2FqBT6%2Fkt4%2BF8OsO4rH9SGk77aNm5EL94srRGUpIZvZBUcGnNXFg8VZc%2BOmk8dbAn8vdrEgYC%2FILoTUtEfEVny3qabysTgJcBJO0l%2BPVtly1UvfUVklb7Yo%2FmQff1yG%2BQN6GpxIaUctGiEkTG6mdOux73KszMZy2OHZMoT4y6r87bOldyeOqrS%2BmO%2F3%2FyRqYl8S%2FhjP6YLToVD%2FhibMIH7ncQGOqUBuxl9r6WalmDYmPgkooMxI8QPDIDlVBLNnvF0mDrUVsIA33jWVAp9ZeRSqW5hlVfT8PrwjjYh%2B%2BCMq12STBR7KeNfbUMTt7CatEQqCXlSmafiFwX5di2gZkL4YQyCBTr%2Fu1BDhiJvVmvYUdCgVcBA2lzJPdD%2F61%2FX4HH7dcjfvvNo3EfhP3S%2FfJj2cWlZMa%2Fr0Lw4t7x24sYV3GoOOU76g9FhWYgl&X-Amz-Signature=2f76cd35e2a0eca1c2226c9e4b90c064b1b70f6250ab2c81efeacca41752a0db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFMDO34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG9N87Y9mTghckXlcsMu%2BDD9AVcrnl5gVd%2BFfgXW6WMkAiEA1Nm0Cicx72JgLMQ4naI6ySNrJs6vfVo%2FcDUKJgxCT2EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP68ZwWfjUVq11WlTSrcAzFxFy1tvY0%2FKuQ0Cm%2BlmlbiyiR4rGP1LdzmVskvAQ8IascIEelZP1kiaEpohkpSL8LRGbGNt69qCKJel%2FafLkYGCPiLurpUXD5CKnHHB10DSPURBa8Chxj%2FwhLQsy2E1OIhjnPmOPdIHaCSmvSwEhNMwu3mTCI6uiDx0KASXk6eey7kzKi9G5wYTgYuJ8tEToAcSJO7RMls4Nv4kw9mDrrtcFOOo9Yw5CBXaF3XC74xtEL00OJE8b1yD7bI9q%2F%2Fm%2F5MRs0Gmt5VoyWnKunaqFSHDyzS9Vyi0Y8SSkLmAZLiuipR1WC4aQZ915mnaBfhvl18km37zhjZwtUaJElb3PT6vjlk0dVu71mBAVAG8brU0MSLMeKzXtjPMTNqkJ6horn8SRjTN5d3ei0Jaxx5WnNLfwfcdm9YAXQA434wpQo%2FqBT6%2Fkt4%2BF8OsO4rH9SGk77aNm5EL94srRGUpIZvZBUcGnNXFg8VZc%2BOmk8dbAn8vdrEgYC%2FILoTUtEfEVny3qabysTgJcBJO0l%2BPVtly1UvfUVklb7Yo%2FmQff1yG%2BQN6GpxIaUctGiEkTG6mdOux73KszMZy2OHZMoT4y6r87bOldyeOqrS%2BmO%2F3%2FyRqYl8S%2FhjP6YLToVD%2FhibMIH7ncQGOqUBuxl9r6WalmDYmPgkooMxI8QPDIDlVBLNnvF0mDrUVsIA33jWVAp9ZeRSqW5hlVfT8PrwjjYh%2B%2BCMq12STBR7KeNfbUMTt7CatEQqCXlSmafiFwX5di2gZkL4YQyCBTr%2Fu1BDhiJvVmvYUdCgVcBA2lzJPdD%2F61%2FX4HH7dcjfvvNo3EfhP3S%2FfJj2cWlZMa%2Fr0Lw4t7x24sYV3GoOOU76g9FhWYgl&X-Amz-Signature=fb5d1f0621c47252d9a7542d1479253e8b64f65311a38eaff3fdbddcd31361d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFMDO34%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG9N87Y9mTghckXlcsMu%2BDD9AVcrnl5gVd%2BFfgXW6WMkAiEA1Nm0Cicx72JgLMQ4naI6ySNrJs6vfVo%2FcDUKJgxCT2EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP68ZwWfjUVq11WlTSrcAzFxFy1tvY0%2FKuQ0Cm%2BlmlbiyiR4rGP1LdzmVskvAQ8IascIEelZP1kiaEpohkpSL8LRGbGNt69qCKJel%2FafLkYGCPiLurpUXD5CKnHHB10DSPURBa8Chxj%2FwhLQsy2E1OIhjnPmOPdIHaCSmvSwEhNMwu3mTCI6uiDx0KASXk6eey7kzKi9G5wYTgYuJ8tEToAcSJO7RMls4Nv4kw9mDrrtcFOOo9Yw5CBXaF3XC74xtEL00OJE8b1yD7bI9q%2F%2Fm%2F5MRs0Gmt5VoyWnKunaqFSHDyzS9Vyi0Y8SSkLmAZLiuipR1WC4aQZ915mnaBfhvl18km37zhjZwtUaJElb3PT6vjlk0dVu71mBAVAG8brU0MSLMeKzXtjPMTNqkJ6horn8SRjTN5d3ei0Jaxx5WnNLfwfcdm9YAXQA434wpQo%2FqBT6%2Fkt4%2BF8OsO4rH9SGk77aNm5EL94srRGUpIZvZBUcGnNXFg8VZc%2BOmk8dbAn8vdrEgYC%2FILoTUtEfEVny3qabysTgJcBJO0l%2BPVtly1UvfUVklb7Yo%2FmQff1yG%2BQN6GpxIaUctGiEkTG6mdOux73KszMZy2OHZMoT4y6r87bOldyeOqrS%2BmO%2F3%2FyRqYl8S%2FhjP6YLToVD%2FhibMIH7ncQGOqUBuxl9r6WalmDYmPgkooMxI8QPDIDlVBLNnvF0mDrUVsIA33jWVAp9ZeRSqW5hlVfT8PrwjjYh%2B%2BCMq12STBR7KeNfbUMTt7CatEQqCXlSmafiFwX5di2gZkL4YQyCBTr%2Fu1BDhiJvVmvYUdCgVcBA2lzJPdD%2F61%2FX4HH7dcjfvvNo3EfhP3S%2FfJj2cWlZMa%2Fr0Lw4t7x24sYV3GoOOU76g9FhWYgl&X-Amz-Signature=8cc281f182740be160889d0e102ae34e1d9b7c676d936c91b2a2e0aad581ac89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

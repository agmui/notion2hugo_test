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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKXUOJO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4Sbld1uujsvTzTlmuhZMqCuSlF6jVBk8BepOjzyIalAiEAnIjChYW%2Bs2RuzT19qBYDEk%2BDPAt9v51qbk1%2BCQIgsV8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDZNiA6%2Ftmhp9rBtSCrcAzrNaIjQG%2B8g%2BQ9cZztVM4iE0Ba1V02o3KTP03uryyeW4PIbMO4XkK9wLoWUoFn12gjC7dHGfsMFOUhbZuTfmM6l4p23ydRtctUPxxv857c0Dj5dS%2FaBpoRmpmUjZSEiWnSsLIBx4i7DbyZrmYZSIIcY0RcXZK9ON2RhS%2BQ2auek1FTZwbE4Ck10WnMo2YT4qVtGMETp40Ya8qiAiGInoCHaesfCs8yh%2FbHP1L1lGVNFnSC4PJKuWVDMcrnYH2KhLMxYNIC%2F%2BT0K38mxcfjke2rKGtfFdVvtSj1xv59Loy9BTEh0DWF%2FklFc4nedbnwCwCGKHgEOHrXZyDR7YFYgefmI3e6iNpKR6Qu6Ud7CoHK%2BWu2462g0BFwFIilY7j2PpNeuqfhJ3IAQyG7ChTu0480DFIHTMczit9MMLpTr9dzjE8ThGED5XBMzxWYAKgnkwzvwa5YLtDKZi8ME4pLFsDk2ZoRX2dmwN7jhoOmd2sRF%2FLiMhBjP8qBpaJzvUsENfM7xLtsvxaXbhIrtwdiM40eAWHRV%2FyLHzqnu8rxs3bQq8y4q7fuh89OO4xxt%2FO4kCznlkm5CsONzCzaU%2B%2FbRLLN2LBBqRv0r07xZssdZs9651zb%2F8k0C2wLwN8vrMJyM4L4GOqUBbdLQHWfj4aR%2BiYYZrZCDv7nr3DAsaGpTrbtU3jOIv60udnvwGcgnlyxypMYujg7Ll8AYqhzu6XEZZzPl6onMr%2FRAiA4UuwNXOQfdYIuzXJ6nvipP3AW6qVfAK9cBzKwzGkiUA2QdtsUzsIgkXBv5G%2BM1spJLEpBswmqUkFgGjXA2vlW3Sw5c4BbeuDpUdQUU9Cy0rqEQwhgaiCGOVW3yiU7d%2F0nf&X-Amz-Signature=541e90930452d7bf42f74d67619c76aaadc62cd0ba40a5c321b7a64c497facb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKXUOJO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4Sbld1uujsvTzTlmuhZMqCuSlF6jVBk8BepOjzyIalAiEAnIjChYW%2Bs2RuzT19qBYDEk%2BDPAt9v51qbk1%2BCQIgsV8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDZNiA6%2Ftmhp9rBtSCrcAzrNaIjQG%2B8g%2BQ9cZztVM4iE0Ba1V02o3KTP03uryyeW4PIbMO4XkK9wLoWUoFn12gjC7dHGfsMFOUhbZuTfmM6l4p23ydRtctUPxxv857c0Dj5dS%2FaBpoRmpmUjZSEiWnSsLIBx4i7DbyZrmYZSIIcY0RcXZK9ON2RhS%2BQ2auek1FTZwbE4Ck10WnMo2YT4qVtGMETp40Ya8qiAiGInoCHaesfCs8yh%2FbHP1L1lGVNFnSC4PJKuWVDMcrnYH2KhLMxYNIC%2F%2BT0K38mxcfjke2rKGtfFdVvtSj1xv59Loy9BTEh0DWF%2FklFc4nedbnwCwCGKHgEOHrXZyDR7YFYgefmI3e6iNpKR6Qu6Ud7CoHK%2BWu2462g0BFwFIilY7j2PpNeuqfhJ3IAQyG7ChTu0480DFIHTMczit9MMLpTr9dzjE8ThGED5XBMzxWYAKgnkwzvwa5YLtDKZi8ME4pLFsDk2ZoRX2dmwN7jhoOmd2sRF%2FLiMhBjP8qBpaJzvUsENfM7xLtsvxaXbhIrtwdiM40eAWHRV%2FyLHzqnu8rxs3bQq8y4q7fuh89OO4xxt%2FO4kCznlkm5CsONzCzaU%2B%2FbRLLN2LBBqRv0r07xZssdZs9651zb%2F8k0C2wLwN8vrMJyM4L4GOqUBbdLQHWfj4aR%2BiYYZrZCDv7nr3DAsaGpTrbtU3jOIv60udnvwGcgnlyxypMYujg7Ll8AYqhzu6XEZZzPl6onMr%2FRAiA4UuwNXOQfdYIuzXJ6nvipP3AW6qVfAK9cBzKwzGkiUA2QdtsUzsIgkXBv5G%2BM1spJLEpBswmqUkFgGjXA2vlW3Sw5c4BbeuDpUdQUU9Cy0rqEQwhgaiCGOVW3yiU7d%2F0nf&X-Amz-Signature=076e0c14efba122de639e124312f9a682c2836324557abe148a4067196f1d882&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKXUOJO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4Sbld1uujsvTzTlmuhZMqCuSlF6jVBk8BepOjzyIalAiEAnIjChYW%2Bs2RuzT19qBYDEk%2BDPAt9v51qbk1%2BCQIgsV8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDZNiA6%2Ftmhp9rBtSCrcAzrNaIjQG%2B8g%2BQ9cZztVM4iE0Ba1V02o3KTP03uryyeW4PIbMO4XkK9wLoWUoFn12gjC7dHGfsMFOUhbZuTfmM6l4p23ydRtctUPxxv857c0Dj5dS%2FaBpoRmpmUjZSEiWnSsLIBx4i7DbyZrmYZSIIcY0RcXZK9ON2RhS%2BQ2auek1FTZwbE4Ck10WnMo2YT4qVtGMETp40Ya8qiAiGInoCHaesfCs8yh%2FbHP1L1lGVNFnSC4PJKuWVDMcrnYH2KhLMxYNIC%2F%2BT0K38mxcfjke2rKGtfFdVvtSj1xv59Loy9BTEh0DWF%2FklFc4nedbnwCwCGKHgEOHrXZyDR7YFYgefmI3e6iNpKR6Qu6Ud7CoHK%2BWu2462g0BFwFIilY7j2PpNeuqfhJ3IAQyG7ChTu0480DFIHTMczit9MMLpTr9dzjE8ThGED5XBMzxWYAKgnkwzvwa5YLtDKZi8ME4pLFsDk2ZoRX2dmwN7jhoOmd2sRF%2FLiMhBjP8qBpaJzvUsENfM7xLtsvxaXbhIrtwdiM40eAWHRV%2FyLHzqnu8rxs3bQq8y4q7fuh89OO4xxt%2FO4kCznlkm5CsONzCzaU%2B%2FbRLLN2LBBqRv0r07xZssdZs9651zb%2F8k0C2wLwN8vrMJyM4L4GOqUBbdLQHWfj4aR%2BiYYZrZCDv7nr3DAsaGpTrbtU3jOIv60udnvwGcgnlyxypMYujg7Ll8AYqhzu6XEZZzPl6onMr%2FRAiA4UuwNXOQfdYIuzXJ6nvipP3AW6qVfAK9cBzKwzGkiUA2QdtsUzsIgkXBv5G%2BM1spJLEpBswmqUkFgGjXA2vlW3Sw5c4BbeuDpUdQUU9Cy0rqEQwhgaiCGOVW3yiU7d%2F0nf&X-Amz-Signature=eb8a8ff467f3580d1efaf90782989972f79411f3935c86784616b5eb35720efb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKXUOJO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4Sbld1uujsvTzTlmuhZMqCuSlF6jVBk8BepOjzyIalAiEAnIjChYW%2Bs2RuzT19qBYDEk%2BDPAt9v51qbk1%2BCQIgsV8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDZNiA6%2Ftmhp9rBtSCrcAzrNaIjQG%2B8g%2BQ9cZztVM4iE0Ba1V02o3KTP03uryyeW4PIbMO4XkK9wLoWUoFn12gjC7dHGfsMFOUhbZuTfmM6l4p23ydRtctUPxxv857c0Dj5dS%2FaBpoRmpmUjZSEiWnSsLIBx4i7DbyZrmYZSIIcY0RcXZK9ON2RhS%2BQ2auek1FTZwbE4Ck10WnMo2YT4qVtGMETp40Ya8qiAiGInoCHaesfCs8yh%2FbHP1L1lGVNFnSC4PJKuWVDMcrnYH2KhLMxYNIC%2F%2BT0K38mxcfjke2rKGtfFdVvtSj1xv59Loy9BTEh0DWF%2FklFc4nedbnwCwCGKHgEOHrXZyDR7YFYgefmI3e6iNpKR6Qu6Ud7CoHK%2BWu2462g0BFwFIilY7j2PpNeuqfhJ3IAQyG7ChTu0480DFIHTMczit9MMLpTr9dzjE8ThGED5XBMzxWYAKgnkwzvwa5YLtDKZi8ME4pLFsDk2ZoRX2dmwN7jhoOmd2sRF%2FLiMhBjP8qBpaJzvUsENfM7xLtsvxaXbhIrtwdiM40eAWHRV%2FyLHzqnu8rxs3bQq8y4q7fuh89OO4xxt%2FO4kCznlkm5CsONzCzaU%2B%2FbRLLN2LBBqRv0r07xZssdZs9651zb%2F8k0C2wLwN8vrMJyM4L4GOqUBbdLQHWfj4aR%2BiYYZrZCDv7nr3DAsaGpTrbtU3jOIv60udnvwGcgnlyxypMYujg7Ll8AYqhzu6XEZZzPl6onMr%2FRAiA4UuwNXOQfdYIuzXJ6nvipP3AW6qVfAK9cBzKwzGkiUA2QdtsUzsIgkXBv5G%2BM1spJLEpBswmqUkFgGjXA2vlW3Sw5c4BbeuDpUdQUU9Cy0rqEQwhgaiCGOVW3yiU7d%2F0nf&X-Amz-Signature=fd87b3072ea5e8e111d5421cf0d4c262f0410ca3418329ee01bbcc31a65ce878&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKXUOJO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4Sbld1uujsvTzTlmuhZMqCuSlF6jVBk8BepOjzyIalAiEAnIjChYW%2Bs2RuzT19qBYDEk%2BDPAt9v51qbk1%2BCQIgsV8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDZNiA6%2Ftmhp9rBtSCrcAzrNaIjQG%2B8g%2BQ9cZztVM4iE0Ba1V02o3KTP03uryyeW4PIbMO4XkK9wLoWUoFn12gjC7dHGfsMFOUhbZuTfmM6l4p23ydRtctUPxxv857c0Dj5dS%2FaBpoRmpmUjZSEiWnSsLIBx4i7DbyZrmYZSIIcY0RcXZK9ON2RhS%2BQ2auek1FTZwbE4Ck10WnMo2YT4qVtGMETp40Ya8qiAiGInoCHaesfCs8yh%2FbHP1L1lGVNFnSC4PJKuWVDMcrnYH2KhLMxYNIC%2F%2BT0K38mxcfjke2rKGtfFdVvtSj1xv59Loy9BTEh0DWF%2FklFc4nedbnwCwCGKHgEOHrXZyDR7YFYgefmI3e6iNpKR6Qu6Ud7CoHK%2BWu2462g0BFwFIilY7j2PpNeuqfhJ3IAQyG7ChTu0480DFIHTMczit9MMLpTr9dzjE8ThGED5XBMzxWYAKgnkwzvwa5YLtDKZi8ME4pLFsDk2ZoRX2dmwN7jhoOmd2sRF%2FLiMhBjP8qBpaJzvUsENfM7xLtsvxaXbhIrtwdiM40eAWHRV%2FyLHzqnu8rxs3bQq8y4q7fuh89OO4xxt%2FO4kCznlkm5CsONzCzaU%2B%2FbRLLN2LBBqRv0r07xZssdZs9651zb%2F8k0C2wLwN8vrMJyM4L4GOqUBbdLQHWfj4aR%2BiYYZrZCDv7nr3DAsaGpTrbtU3jOIv60udnvwGcgnlyxypMYujg7Ll8AYqhzu6XEZZzPl6onMr%2FRAiA4UuwNXOQfdYIuzXJ6nvipP3AW6qVfAK9cBzKwzGkiUA2QdtsUzsIgkXBv5G%2BM1spJLEpBswmqUkFgGjXA2vlW3Sw5c4BbeuDpUdQUU9Cy0rqEQwhgaiCGOVW3yiU7d%2F0nf&X-Amz-Signature=bf9b4215fa646665343590c6ebbea8f2951a71f0fcbc4880a206472f378c2e69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKXUOJO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4Sbld1uujsvTzTlmuhZMqCuSlF6jVBk8BepOjzyIalAiEAnIjChYW%2Bs2RuzT19qBYDEk%2BDPAt9v51qbk1%2BCQIgsV8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDZNiA6%2Ftmhp9rBtSCrcAzrNaIjQG%2B8g%2BQ9cZztVM4iE0Ba1V02o3KTP03uryyeW4PIbMO4XkK9wLoWUoFn12gjC7dHGfsMFOUhbZuTfmM6l4p23ydRtctUPxxv857c0Dj5dS%2FaBpoRmpmUjZSEiWnSsLIBx4i7DbyZrmYZSIIcY0RcXZK9ON2RhS%2BQ2auek1FTZwbE4Ck10WnMo2YT4qVtGMETp40Ya8qiAiGInoCHaesfCs8yh%2FbHP1L1lGVNFnSC4PJKuWVDMcrnYH2KhLMxYNIC%2F%2BT0K38mxcfjke2rKGtfFdVvtSj1xv59Loy9BTEh0DWF%2FklFc4nedbnwCwCGKHgEOHrXZyDR7YFYgefmI3e6iNpKR6Qu6Ud7CoHK%2BWu2462g0BFwFIilY7j2PpNeuqfhJ3IAQyG7ChTu0480DFIHTMczit9MMLpTr9dzjE8ThGED5XBMzxWYAKgnkwzvwa5YLtDKZi8ME4pLFsDk2ZoRX2dmwN7jhoOmd2sRF%2FLiMhBjP8qBpaJzvUsENfM7xLtsvxaXbhIrtwdiM40eAWHRV%2FyLHzqnu8rxs3bQq8y4q7fuh89OO4xxt%2FO4kCznlkm5CsONzCzaU%2B%2FbRLLN2LBBqRv0r07xZssdZs9651zb%2F8k0C2wLwN8vrMJyM4L4GOqUBbdLQHWfj4aR%2BiYYZrZCDv7nr3DAsaGpTrbtU3jOIv60udnvwGcgnlyxypMYujg7Ll8AYqhzu6XEZZzPl6onMr%2FRAiA4UuwNXOQfdYIuzXJ6nvipP3AW6qVfAK9cBzKwzGkiUA2QdtsUzsIgkXBv5G%2BM1spJLEpBswmqUkFgGjXA2vlW3Sw5c4BbeuDpUdQUU9Cy0rqEQwhgaiCGOVW3yiU7d%2F0nf&X-Amz-Signature=5b300fcf576aac05bb9e59a1cc7b141205f57a5fe5dc2da2bba1a5c91d74e837&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKXUOJO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4Sbld1uujsvTzTlmuhZMqCuSlF6jVBk8BepOjzyIalAiEAnIjChYW%2Bs2RuzT19qBYDEk%2BDPAt9v51qbk1%2BCQIgsV8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDZNiA6%2Ftmhp9rBtSCrcAzrNaIjQG%2B8g%2BQ9cZztVM4iE0Ba1V02o3KTP03uryyeW4PIbMO4XkK9wLoWUoFn12gjC7dHGfsMFOUhbZuTfmM6l4p23ydRtctUPxxv857c0Dj5dS%2FaBpoRmpmUjZSEiWnSsLIBx4i7DbyZrmYZSIIcY0RcXZK9ON2RhS%2BQ2auek1FTZwbE4Ck10WnMo2YT4qVtGMETp40Ya8qiAiGInoCHaesfCs8yh%2FbHP1L1lGVNFnSC4PJKuWVDMcrnYH2KhLMxYNIC%2F%2BT0K38mxcfjke2rKGtfFdVvtSj1xv59Loy9BTEh0DWF%2FklFc4nedbnwCwCGKHgEOHrXZyDR7YFYgefmI3e6iNpKR6Qu6Ud7CoHK%2BWu2462g0BFwFIilY7j2PpNeuqfhJ3IAQyG7ChTu0480DFIHTMczit9MMLpTr9dzjE8ThGED5XBMzxWYAKgnkwzvwa5YLtDKZi8ME4pLFsDk2ZoRX2dmwN7jhoOmd2sRF%2FLiMhBjP8qBpaJzvUsENfM7xLtsvxaXbhIrtwdiM40eAWHRV%2FyLHzqnu8rxs3bQq8y4q7fuh89OO4xxt%2FO4kCznlkm5CsONzCzaU%2B%2FbRLLN2LBBqRv0r07xZssdZs9651zb%2F8k0C2wLwN8vrMJyM4L4GOqUBbdLQHWfj4aR%2BiYYZrZCDv7nr3DAsaGpTrbtU3jOIv60udnvwGcgnlyxypMYujg7Ll8AYqhzu6XEZZzPl6onMr%2FRAiA4UuwNXOQfdYIuzXJ6nvipP3AW6qVfAK9cBzKwzGkiUA2QdtsUzsIgkXBv5G%2BM1spJLEpBswmqUkFgGjXA2vlW3Sw5c4BbeuDpUdQUU9Cy0rqEQwhgaiCGOVW3yiU7d%2F0nf&X-Amz-Signature=73d2d7921f710ea34b4c3b857744dc28ef37866e6cb8f847b66e22c0212fe7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKXUOJO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4Sbld1uujsvTzTlmuhZMqCuSlF6jVBk8BepOjzyIalAiEAnIjChYW%2Bs2RuzT19qBYDEk%2BDPAt9v51qbk1%2BCQIgsV8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDZNiA6%2Ftmhp9rBtSCrcAzrNaIjQG%2B8g%2BQ9cZztVM4iE0Ba1V02o3KTP03uryyeW4PIbMO4XkK9wLoWUoFn12gjC7dHGfsMFOUhbZuTfmM6l4p23ydRtctUPxxv857c0Dj5dS%2FaBpoRmpmUjZSEiWnSsLIBx4i7DbyZrmYZSIIcY0RcXZK9ON2RhS%2BQ2auek1FTZwbE4Ck10WnMo2YT4qVtGMETp40Ya8qiAiGInoCHaesfCs8yh%2FbHP1L1lGVNFnSC4PJKuWVDMcrnYH2KhLMxYNIC%2F%2BT0K38mxcfjke2rKGtfFdVvtSj1xv59Loy9BTEh0DWF%2FklFc4nedbnwCwCGKHgEOHrXZyDR7YFYgefmI3e6iNpKR6Qu6Ud7CoHK%2BWu2462g0BFwFIilY7j2PpNeuqfhJ3IAQyG7ChTu0480DFIHTMczit9MMLpTr9dzjE8ThGED5XBMzxWYAKgnkwzvwa5YLtDKZi8ME4pLFsDk2ZoRX2dmwN7jhoOmd2sRF%2FLiMhBjP8qBpaJzvUsENfM7xLtsvxaXbhIrtwdiM40eAWHRV%2FyLHzqnu8rxs3bQq8y4q7fuh89OO4xxt%2FO4kCznlkm5CsONzCzaU%2B%2FbRLLN2LBBqRv0r07xZssdZs9651zb%2F8k0C2wLwN8vrMJyM4L4GOqUBbdLQHWfj4aR%2BiYYZrZCDv7nr3DAsaGpTrbtU3jOIv60udnvwGcgnlyxypMYujg7Ll8AYqhzu6XEZZzPl6onMr%2FRAiA4UuwNXOQfdYIuzXJ6nvipP3AW6qVfAK9cBzKwzGkiUA2QdtsUzsIgkXBv5G%2BM1spJLEpBswmqUkFgGjXA2vlW3Sw5c4BbeuDpUdQUU9Cy0rqEQwhgaiCGOVW3yiU7d%2F0nf&X-Amz-Signature=ca8afba53991677ccbdc8a691f0f7de18b8bfb49df26215fefe1f0e077862064&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZEN255%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQClT9FNW1E8qM7l%2B5tOk6%2BwBXtiR6JpO%2F5F4DABW%2FxcjgIgS9s3QDqI9Ce55zhKLY2xHh%2FvwyK8eRpTCv5bczaSNcAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAkuYLPY3ZvUvFRbaSrcA5L94OY2RDcccJaO1Ln5OMqSWpQgnhYtJJdtIV0GxEGpnGtafq8EpczpdI4Kbc3roYzx0mGW6mqPNSXl0XbdgSxj7Q7MBvD%2FuoqXO%2FvhQedRafiECyVI%2FHdMgRKv7bcBtAp2vVgU34h83KswevE2Fi%2F7tRX4fZ%2Flwepb5vuqZu6Q7Tc%2B%2F%2FE5FHQfwxwr1XkqtUD5b32croNk%2FAP5Nf34Op8TmY6Y2Rmu6LS5MdXgbIKUlzdjhXLUNUwQEtYNW0xIqx6l%2BFd58vIX7qPXyGXCJGfumfGIbuqkaw%2F9PUXOc213LROtu5MBUP7ZI%2FUefuzPNVjUtVm8%2BvHlh6MOeXe1FEtovEbeZR2bHC2rxGIYAaNl6nzX8AVKmbRpnuEOY4VEvsHdKzmDwILf8d1GFWPPwDJZWG4A2vVuXrenYeO%2Fw2MOSsW%2FJRbmgb3U8EU4jXIsZSzTbezWg1i1xuoeRDz%2FYWM33QaD534q0A%2FhZQCP6NEROlV3wdLzz8wyX2X7nyKmPB5XK17vB26vjIjOzs0TiUReHFUS5koCT2SRZjujLJfkhNKlW4XyBf1%2FQEmHwv7uTebj9FP%2BDCnGS45eSUEAXNQN10LLqbQtnMwwLDnz3yqwj9DzNnh7eZ7LHObgMIX8lr0GOqUBxVYhjUHBLdpMR40%2BT%2Bxhph6hU3VlRdK8fn6ux8Gs9Oo6KmATwO%2BrD11V84RfdhiFhaN%2BU3AH6h7Y9darQHhXXfahpSca2bmJs4kv2m8%2BUjkNoC%2FPjQKH2TIExCZ3NbBZLDlReRjPgivGupWE5uhuJSwk958IFSXgnO9zQP1k6mGp6gEtCwdlC4aWMNn4iISQ8QpNPvObdIugtBQYxBHEbrgJt16P&X-Amz-Signature=8e5c55f8a945290d669823cee72f60fe963a7426feb9a37aa473806ae9f456a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZEN255%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQClT9FNW1E8qM7l%2B5tOk6%2BwBXtiR6JpO%2F5F4DABW%2FxcjgIgS9s3QDqI9Ce55zhKLY2xHh%2FvwyK8eRpTCv5bczaSNcAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAkuYLPY3ZvUvFRbaSrcA5L94OY2RDcccJaO1Ln5OMqSWpQgnhYtJJdtIV0GxEGpnGtafq8EpczpdI4Kbc3roYzx0mGW6mqPNSXl0XbdgSxj7Q7MBvD%2FuoqXO%2FvhQedRafiECyVI%2FHdMgRKv7bcBtAp2vVgU34h83KswevE2Fi%2F7tRX4fZ%2Flwepb5vuqZu6Q7Tc%2B%2F%2FE5FHQfwxwr1XkqtUD5b32croNk%2FAP5Nf34Op8TmY6Y2Rmu6LS5MdXgbIKUlzdjhXLUNUwQEtYNW0xIqx6l%2BFd58vIX7qPXyGXCJGfumfGIbuqkaw%2F9PUXOc213LROtu5MBUP7ZI%2FUefuzPNVjUtVm8%2BvHlh6MOeXe1FEtovEbeZR2bHC2rxGIYAaNl6nzX8AVKmbRpnuEOY4VEvsHdKzmDwILf8d1GFWPPwDJZWG4A2vVuXrenYeO%2Fw2MOSsW%2FJRbmgb3U8EU4jXIsZSzTbezWg1i1xuoeRDz%2FYWM33QaD534q0A%2FhZQCP6NEROlV3wdLzz8wyX2X7nyKmPB5XK17vB26vjIjOzs0TiUReHFUS5koCT2SRZjujLJfkhNKlW4XyBf1%2FQEmHwv7uTebj9FP%2BDCnGS45eSUEAXNQN10LLqbQtnMwwLDnz3yqwj9DzNnh7eZ7LHObgMIX8lr0GOqUBxVYhjUHBLdpMR40%2BT%2Bxhph6hU3VlRdK8fn6ux8Gs9Oo6KmATwO%2BrD11V84RfdhiFhaN%2BU3AH6h7Y9darQHhXXfahpSca2bmJs4kv2m8%2BUjkNoC%2FPjQKH2TIExCZ3NbBZLDlReRjPgivGupWE5uhuJSwk958IFSXgnO9zQP1k6mGp6gEtCwdlC4aWMNn4iISQ8QpNPvObdIugtBQYxBHEbrgJt16P&X-Amz-Signature=33bfbf5b51df5b3fd37349a239bdec18ffd269dacac04bb2a4d4b1e360891256&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZEN255%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQClT9FNW1E8qM7l%2B5tOk6%2BwBXtiR6JpO%2F5F4DABW%2FxcjgIgS9s3QDqI9Ce55zhKLY2xHh%2FvwyK8eRpTCv5bczaSNcAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAkuYLPY3ZvUvFRbaSrcA5L94OY2RDcccJaO1Ln5OMqSWpQgnhYtJJdtIV0GxEGpnGtafq8EpczpdI4Kbc3roYzx0mGW6mqPNSXl0XbdgSxj7Q7MBvD%2FuoqXO%2FvhQedRafiECyVI%2FHdMgRKv7bcBtAp2vVgU34h83KswevE2Fi%2F7tRX4fZ%2Flwepb5vuqZu6Q7Tc%2B%2F%2FE5FHQfwxwr1XkqtUD5b32croNk%2FAP5Nf34Op8TmY6Y2Rmu6LS5MdXgbIKUlzdjhXLUNUwQEtYNW0xIqx6l%2BFd58vIX7qPXyGXCJGfumfGIbuqkaw%2F9PUXOc213LROtu5MBUP7ZI%2FUefuzPNVjUtVm8%2BvHlh6MOeXe1FEtovEbeZR2bHC2rxGIYAaNl6nzX8AVKmbRpnuEOY4VEvsHdKzmDwILf8d1GFWPPwDJZWG4A2vVuXrenYeO%2Fw2MOSsW%2FJRbmgb3U8EU4jXIsZSzTbezWg1i1xuoeRDz%2FYWM33QaD534q0A%2FhZQCP6NEROlV3wdLzz8wyX2X7nyKmPB5XK17vB26vjIjOzs0TiUReHFUS5koCT2SRZjujLJfkhNKlW4XyBf1%2FQEmHwv7uTebj9FP%2BDCnGS45eSUEAXNQN10LLqbQtnMwwLDnz3yqwj9DzNnh7eZ7LHObgMIX8lr0GOqUBxVYhjUHBLdpMR40%2BT%2Bxhph6hU3VlRdK8fn6ux8Gs9Oo6KmATwO%2BrD11V84RfdhiFhaN%2BU3AH6h7Y9darQHhXXfahpSca2bmJs4kv2m8%2BUjkNoC%2FPjQKH2TIExCZ3NbBZLDlReRjPgivGupWE5uhuJSwk958IFSXgnO9zQP1k6mGp6gEtCwdlC4aWMNn4iISQ8QpNPvObdIugtBQYxBHEbrgJt16P&X-Amz-Signature=c83f60056c4dff8ccebc122f77633814d3863f8f2bd3abe983d5a9ad817c6244&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZEN255%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQClT9FNW1E8qM7l%2B5tOk6%2BwBXtiR6JpO%2F5F4DABW%2FxcjgIgS9s3QDqI9Ce55zhKLY2xHh%2FvwyK8eRpTCv5bczaSNcAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAkuYLPY3ZvUvFRbaSrcA5L94OY2RDcccJaO1Ln5OMqSWpQgnhYtJJdtIV0GxEGpnGtafq8EpczpdI4Kbc3roYzx0mGW6mqPNSXl0XbdgSxj7Q7MBvD%2FuoqXO%2FvhQedRafiECyVI%2FHdMgRKv7bcBtAp2vVgU34h83KswevE2Fi%2F7tRX4fZ%2Flwepb5vuqZu6Q7Tc%2B%2F%2FE5FHQfwxwr1XkqtUD5b32croNk%2FAP5Nf34Op8TmY6Y2Rmu6LS5MdXgbIKUlzdjhXLUNUwQEtYNW0xIqx6l%2BFd58vIX7qPXyGXCJGfumfGIbuqkaw%2F9PUXOc213LROtu5MBUP7ZI%2FUefuzPNVjUtVm8%2BvHlh6MOeXe1FEtovEbeZR2bHC2rxGIYAaNl6nzX8AVKmbRpnuEOY4VEvsHdKzmDwILf8d1GFWPPwDJZWG4A2vVuXrenYeO%2Fw2MOSsW%2FJRbmgb3U8EU4jXIsZSzTbezWg1i1xuoeRDz%2FYWM33QaD534q0A%2FhZQCP6NEROlV3wdLzz8wyX2X7nyKmPB5XK17vB26vjIjOzs0TiUReHFUS5koCT2SRZjujLJfkhNKlW4XyBf1%2FQEmHwv7uTebj9FP%2BDCnGS45eSUEAXNQN10LLqbQtnMwwLDnz3yqwj9DzNnh7eZ7LHObgMIX8lr0GOqUBxVYhjUHBLdpMR40%2BT%2Bxhph6hU3VlRdK8fn6ux8Gs9Oo6KmATwO%2BrD11V84RfdhiFhaN%2BU3AH6h7Y9darQHhXXfahpSca2bmJs4kv2m8%2BUjkNoC%2FPjQKH2TIExCZ3NbBZLDlReRjPgivGupWE5uhuJSwk958IFSXgnO9zQP1k6mGp6gEtCwdlC4aWMNn4iISQ8QpNPvObdIugtBQYxBHEbrgJt16P&X-Amz-Signature=e288c1543131f4e64546a31b921d2cbbfb3fc4bc9889bd86acfc45e22e35ffb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZEN255%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQClT9FNW1E8qM7l%2B5tOk6%2BwBXtiR6JpO%2F5F4DABW%2FxcjgIgS9s3QDqI9Ce55zhKLY2xHh%2FvwyK8eRpTCv5bczaSNcAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAkuYLPY3ZvUvFRbaSrcA5L94OY2RDcccJaO1Ln5OMqSWpQgnhYtJJdtIV0GxEGpnGtafq8EpczpdI4Kbc3roYzx0mGW6mqPNSXl0XbdgSxj7Q7MBvD%2FuoqXO%2FvhQedRafiECyVI%2FHdMgRKv7bcBtAp2vVgU34h83KswevE2Fi%2F7tRX4fZ%2Flwepb5vuqZu6Q7Tc%2B%2F%2FE5FHQfwxwr1XkqtUD5b32croNk%2FAP5Nf34Op8TmY6Y2Rmu6LS5MdXgbIKUlzdjhXLUNUwQEtYNW0xIqx6l%2BFd58vIX7qPXyGXCJGfumfGIbuqkaw%2F9PUXOc213LROtu5MBUP7ZI%2FUefuzPNVjUtVm8%2BvHlh6MOeXe1FEtovEbeZR2bHC2rxGIYAaNl6nzX8AVKmbRpnuEOY4VEvsHdKzmDwILf8d1GFWPPwDJZWG4A2vVuXrenYeO%2Fw2MOSsW%2FJRbmgb3U8EU4jXIsZSzTbezWg1i1xuoeRDz%2FYWM33QaD534q0A%2FhZQCP6NEROlV3wdLzz8wyX2X7nyKmPB5XK17vB26vjIjOzs0TiUReHFUS5koCT2SRZjujLJfkhNKlW4XyBf1%2FQEmHwv7uTebj9FP%2BDCnGS45eSUEAXNQN10LLqbQtnMwwLDnz3yqwj9DzNnh7eZ7LHObgMIX8lr0GOqUBxVYhjUHBLdpMR40%2BT%2Bxhph6hU3VlRdK8fn6ux8Gs9Oo6KmATwO%2BrD11V84RfdhiFhaN%2BU3AH6h7Y9darQHhXXfahpSca2bmJs4kv2m8%2BUjkNoC%2FPjQKH2TIExCZ3NbBZLDlReRjPgivGupWE5uhuJSwk958IFSXgnO9zQP1k6mGp6gEtCwdlC4aWMNn4iISQ8QpNPvObdIugtBQYxBHEbrgJt16P&X-Amz-Signature=432118eeb9b62d3d8b9b1d3604108097501966e104cef742bbed553fa82c91e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZEN255%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQClT9FNW1E8qM7l%2B5tOk6%2BwBXtiR6JpO%2F5F4DABW%2FxcjgIgS9s3QDqI9Ce55zhKLY2xHh%2FvwyK8eRpTCv5bczaSNcAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAkuYLPY3ZvUvFRbaSrcA5L94OY2RDcccJaO1Ln5OMqSWpQgnhYtJJdtIV0GxEGpnGtafq8EpczpdI4Kbc3roYzx0mGW6mqPNSXl0XbdgSxj7Q7MBvD%2FuoqXO%2FvhQedRafiECyVI%2FHdMgRKv7bcBtAp2vVgU34h83KswevE2Fi%2F7tRX4fZ%2Flwepb5vuqZu6Q7Tc%2B%2F%2FE5FHQfwxwr1XkqtUD5b32croNk%2FAP5Nf34Op8TmY6Y2Rmu6LS5MdXgbIKUlzdjhXLUNUwQEtYNW0xIqx6l%2BFd58vIX7qPXyGXCJGfumfGIbuqkaw%2F9PUXOc213LROtu5MBUP7ZI%2FUefuzPNVjUtVm8%2BvHlh6MOeXe1FEtovEbeZR2bHC2rxGIYAaNl6nzX8AVKmbRpnuEOY4VEvsHdKzmDwILf8d1GFWPPwDJZWG4A2vVuXrenYeO%2Fw2MOSsW%2FJRbmgb3U8EU4jXIsZSzTbezWg1i1xuoeRDz%2FYWM33QaD534q0A%2FhZQCP6NEROlV3wdLzz8wyX2X7nyKmPB5XK17vB26vjIjOzs0TiUReHFUS5koCT2SRZjujLJfkhNKlW4XyBf1%2FQEmHwv7uTebj9FP%2BDCnGS45eSUEAXNQN10LLqbQtnMwwLDnz3yqwj9DzNnh7eZ7LHObgMIX8lr0GOqUBxVYhjUHBLdpMR40%2BT%2Bxhph6hU3VlRdK8fn6ux8Gs9Oo6KmATwO%2BrD11V84RfdhiFhaN%2BU3AH6h7Y9darQHhXXfahpSca2bmJs4kv2m8%2BUjkNoC%2FPjQKH2TIExCZ3NbBZLDlReRjPgivGupWE5uhuJSwk958IFSXgnO9zQP1k6mGp6gEtCwdlC4aWMNn4iISQ8QpNPvObdIugtBQYxBHEbrgJt16P&X-Amz-Signature=55ddfcc2c3d2f0ac376157d249512e0219c425a09d4a1e2ab206ad2429056aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZEN255%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQClT9FNW1E8qM7l%2B5tOk6%2BwBXtiR6JpO%2F5F4DABW%2FxcjgIgS9s3QDqI9Ce55zhKLY2xHh%2FvwyK8eRpTCv5bczaSNcAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAkuYLPY3ZvUvFRbaSrcA5L94OY2RDcccJaO1Ln5OMqSWpQgnhYtJJdtIV0GxEGpnGtafq8EpczpdI4Kbc3roYzx0mGW6mqPNSXl0XbdgSxj7Q7MBvD%2FuoqXO%2FvhQedRafiECyVI%2FHdMgRKv7bcBtAp2vVgU34h83KswevE2Fi%2F7tRX4fZ%2Flwepb5vuqZu6Q7Tc%2B%2F%2FE5FHQfwxwr1XkqtUD5b32croNk%2FAP5Nf34Op8TmY6Y2Rmu6LS5MdXgbIKUlzdjhXLUNUwQEtYNW0xIqx6l%2BFd58vIX7qPXyGXCJGfumfGIbuqkaw%2F9PUXOc213LROtu5MBUP7ZI%2FUefuzPNVjUtVm8%2BvHlh6MOeXe1FEtovEbeZR2bHC2rxGIYAaNl6nzX8AVKmbRpnuEOY4VEvsHdKzmDwILf8d1GFWPPwDJZWG4A2vVuXrenYeO%2Fw2MOSsW%2FJRbmgb3U8EU4jXIsZSzTbezWg1i1xuoeRDz%2FYWM33QaD534q0A%2FhZQCP6NEROlV3wdLzz8wyX2X7nyKmPB5XK17vB26vjIjOzs0TiUReHFUS5koCT2SRZjujLJfkhNKlW4XyBf1%2FQEmHwv7uTebj9FP%2BDCnGS45eSUEAXNQN10LLqbQtnMwwLDnz3yqwj9DzNnh7eZ7LHObgMIX8lr0GOqUBxVYhjUHBLdpMR40%2BT%2Bxhph6hU3VlRdK8fn6ux8Gs9Oo6KmATwO%2BrD11V84RfdhiFhaN%2BU3AH6h7Y9darQHhXXfahpSca2bmJs4kv2m8%2BUjkNoC%2FPjQKH2TIExCZ3NbBZLDlReRjPgivGupWE5uhuJSwk958IFSXgnO9zQP1k6mGp6gEtCwdlC4aWMNn4iISQ8QpNPvObdIugtBQYxBHEbrgJt16P&X-Amz-Signature=75f7ef86a9bcfe07954559d27a3d352717e66db2c9489bb34cd12c8b3ac795eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZEN255%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQClT9FNW1E8qM7l%2B5tOk6%2BwBXtiR6JpO%2F5F4DABW%2FxcjgIgS9s3QDqI9Ce55zhKLY2xHh%2FvwyK8eRpTCv5bczaSNcAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAkuYLPY3ZvUvFRbaSrcA5L94OY2RDcccJaO1Ln5OMqSWpQgnhYtJJdtIV0GxEGpnGtafq8EpczpdI4Kbc3roYzx0mGW6mqPNSXl0XbdgSxj7Q7MBvD%2FuoqXO%2FvhQedRafiECyVI%2FHdMgRKv7bcBtAp2vVgU34h83KswevE2Fi%2F7tRX4fZ%2Flwepb5vuqZu6Q7Tc%2B%2F%2FE5FHQfwxwr1XkqtUD5b32croNk%2FAP5Nf34Op8TmY6Y2Rmu6LS5MdXgbIKUlzdjhXLUNUwQEtYNW0xIqx6l%2BFd58vIX7qPXyGXCJGfumfGIbuqkaw%2F9PUXOc213LROtu5MBUP7ZI%2FUefuzPNVjUtVm8%2BvHlh6MOeXe1FEtovEbeZR2bHC2rxGIYAaNl6nzX8AVKmbRpnuEOY4VEvsHdKzmDwILf8d1GFWPPwDJZWG4A2vVuXrenYeO%2Fw2MOSsW%2FJRbmgb3U8EU4jXIsZSzTbezWg1i1xuoeRDz%2FYWM33QaD534q0A%2FhZQCP6NEROlV3wdLzz8wyX2X7nyKmPB5XK17vB26vjIjOzs0TiUReHFUS5koCT2SRZjujLJfkhNKlW4XyBf1%2FQEmHwv7uTebj9FP%2BDCnGS45eSUEAXNQN10LLqbQtnMwwLDnz3yqwj9DzNnh7eZ7LHObgMIX8lr0GOqUBxVYhjUHBLdpMR40%2BT%2Bxhph6hU3VlRdK8fn6ux8Gs9Oo6KmATwO%2BrD11V84RfdhiFhaN%2BU3AH6h7Y9darQHhXXfahpSca2bmJs4kv2m8%2BUjkNoC%2FPjQKH2TIExCZ3NbBZLDlReRjPgivGupWE5uhuJSwk958IFSXgnO9zQP1k6mGp6gEtCwdlC4aWMNn4iISQ8QpNPvObdIugtBQYxBHEbrgJt16P&X-Amz-Signature=34921a660a1238daf5d5374703f8a6b4f2dd289ed48accdb83472793095edebe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

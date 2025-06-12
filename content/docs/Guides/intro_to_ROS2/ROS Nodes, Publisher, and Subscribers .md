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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMFG3X5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnnwKwxvj00WpaARvNopfdEIbuU4M6%2F1EkRVtuoA0hYwIgDJ5OrvOw%2Bb1CGfyw21Jee2p%2BIDcDuEhbNmeBbxdkGhwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPCFA2EO7AJkc7WoyrcA2XGOI38vDnKa4LUqi%2BQtbRFsipU7bGRlbHRlfa9HUDa541as%2BUFz6AippbQhZ5DuBg0IF1%2BwPa0s9q20GnEe%2BiQPpcR7lUBmtiIyix3tN6GjTqCZeSN7NV9IwyuJrWPo2S7IMk%2F5r%2FkMOEJDqU4kDQ0CfdMAiei9yvD%2Bl%2FkuEN10u%2FdvpFjauTYAvtiUaB%2FxWFngVCwrSk%2BOXtUkazQp8tYldc9WCJ4PXivch1iJN%2B2iz74vYPsE%2BlDfANnAX4ZjTexwH85k5FJ9odrwXJkNpoPVLgYLEyI6PVXLxh24lZZ5N9f9hfE8YhieUXNwwu84YFHFjrBl6ICKjnwrqUfnMDZJwgsru8jrANGsQrbwWJdVjYizKeHdgKnC2J1AyivCd4ItIX0lzJsGE32%2Buup%2FiPUO%2BBl2UvWGnW22pdvA41DPMy7lU8z0KiScMOoZPzCzntshi4g1%2Bxc86zfe%2B3KGiBaUp9KDTcCyz%2BGZF5tF55XRiL%2F%2FDKQDSG%2B2P%2FrYvbFr01x1FJQOinRDqhtv5kZv%2Fo4ZpAidFG7O%2FvQB%2FJeSKjAeHwiA0qDZ6hq%2BSd%2Fk%2F%2FWSkF1SfLq0oKdRsvLLuz88OYQH43DYEalXAzUG%2B0xj34vkmVlWjKPqijy8rnrMKWlq8IGOqUBEg0g6WA%2B2u5yJvnan7E0z%2BCyq8%2FR2dm0aeKricMJYFr63Vd%2BaIbA0aRWaaAZT1yTX0Qu4J2kvoQ0Rqt8zg9YHNURg%2FJgN4gOk29CQQ2WWnDJZYO3JAt1t%2F4C7HgZGA2lvr0xy%2BfFoUIDU%2FaaT9yPNDguuuzpVvA5A4VEc9S2GgYbfzRQff0d1JF2kIIO%2FGUQxYkvat23LX3C61SIBB1Xrj3OxQQf&X-Amz-Signature=605f1637b868c92db4ac002fa8f70144a8208669b0e243ab4434ed6144659457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMFG3X5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnnwKwxvj00WpaARvNopfdEIbuU4M6%2F1EkRVtuoA0hYwIgDJ5OrvOw%2Bb1CGfyw21Jee2p%2BIDcDuEhbNmeBbxdkGhwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPCFA2EO7AJkc7WoyrcA2XGOI38vDnKa4LUqi%2BQtbRFsipU7bGRlbHRlfa9HUDa541as%2BUFz6AippbQhZ5DuBg0IF1%2BwPa0s9q20GnEe%2BiQPpcR7lUBmtiIyix3tN6GjTqCZeSN7NV9IwyuJrWPo2S7IMk%2F5r%2FkMOEJDqU4kDQ0CfdMAiei9yvD%2Bl%2FkuEN10u%2FdvpFjauTYAvtiUaB%2FxWFngVCwrSk%2BOXtUkazQp8tYldc9WCJ4PXivch1iJN%2B2iz74vYPsE%2BlDfANnAX4ZjTexwH85k5FJ9odrwXJkNpoPVLgYLEyI6PVXLxh24lZZ5N9f9hfE8YhieUXNwwu84YFHFjrBl6ICKjnwrqUfnMDZJwgsru8jrANGsQrbwWJdVjYizKeHdgKnC2J1AyivCd4ItIX0lzJsGE32%2Buup%2FiPUO%2BBl2UvWGnW22pdvA41DPMy7lU8z0KiScMOoZPzCzntshi4g1%2Bxc86zfe%2B3KGiBaUp9KDTcCyz%2BGZF5tF55XRiL%2F%2FDKQDSG%2B2P%2FrYvbFr01x1FJQOinRDqhtv5kZv%2Fo4ZpAidFG7O%2FvQB%2FJeSKjAeHwiA0qDZ6hq%2BSd%2Fk%2F%2FWSkF1SfLq0oKdRsvLLuz88OYQH43DYEalXAzUG%2B0xj34vkmVlWjKPqijy8rnrMKWlq8IGOqUBEg0g6WA%2B2u5yJvnan7E0z%2BCyq8%2FR2dm0aeKricMJYFr63Vd%2BaIbA0aRWaaAZT1yTX0Qu4J2kvoQ0Rqt8zg9YHNURg%2FJgN4gOk29CQQ2WWnDJZYO3JAt1t%2F4C7HgZGA2lvr0xy%2BfFoUIDU%2FaaT9yPNDguuuzpVvA5A4VEc9S2GgYbfzRQff0d1JF2kIIO%2FGUQxYkvat23LX3C61SIBB1Xrj3OxQQf&X-Amz-Signature=ede20a48a20293631b7271e8be1d016087d66b85b53a7dc391566d0c8185f7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMFG3X5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnnwKwxvj00WpaARvNopfdEIbuU4M6%2F1EkRVtuoA0hYwIgDJ5OrvOw%2Bb1CGfyw21Jee2p%2BIDcDuEhbNmeBbxdkGhwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPCFA2EO7AJkc7WoyrcA2XGOI38vDnKa4LUqi%2BQtbRFsipU7bGRlbHRlfa9HUDa541as%2BUFz6AippbQhZ5DuBg0IF1%2BwPa0s9q20GnEe%2BiQPpcR7lUBmtiIyix3tN6GjTqCZeSN7NV9IwyuJrWPo2S7IMk%2F5r%2FkMOEJDqU4kDQ0CfdMAiei9yvD%2Bl%2FkuEN10u%2FdvpFjauTYAvtiUaB%2FxWFngVCwrSk%2BOXtUkazQp8tYldc9WCJ4PXivch1iJN%2B2iz74vYPsE%2BlDfANnAX4ZjTexwH85k5FJ9odrwXJkNpoPVLgYLEyI6PVXLxh24lZZ5N9f9hfE8YhieUXNwwu84YFHFjrBl6ICKjnwrqUfnMDZJwgsru8jrANGsQrbwWJdVjYizKeHdgKnC2J1AyivCd4ItIX0lzJsGE32%2Buup%2FiPUO%2BBl2UvWGnW22pdvA41DPMy7lU8z0KiScMOoZPzCzntshi4g1%2Bxc86zfe%2B3KGiBaUp9KDTcCyz%2BGZF5tF55XRiL%2F%2FDKQDSG%2B2P%2FrYvbFr01x1FJQOinRDqhtv5kZv%2Fo4ZpAidFG7O%2FvQB%2FJeSKjAeHwiA0qDZ6hq%2BSd%2Fk%2F%2FWSkF1SfLq0oKdRsvLLuz88OYQH43DYEalXAzUG%2B0xj34vkmVlWjKPqijy8rnrMKWlq8IGOqUBEg0g6WA%2B2u5yJvnan7E0z%2BCyq8%2FR2dm0aeKricMJYFr63Vd%2BaIbA0aRWaaAZT1yTX0Qu4J2kvoQ0Rqt8zg9YHNURg%2FJgN4gOk29CQQ2WWnDJZYO3JAt1t%2F4C7HgZGA2lvr0xy%2BfFoUIDU%2FaaT9yPNDguuuzpVvA5A4VEc9S2GgYbfzRQff0d1JF2kIIO%2FGUQxYkvat23LX3C61SIBB1Xrj3OxQQf&X-Amz-Signature=d2e2829c417c54cbe5595975f0265812d9d5d6d03660749466baf4095fc24a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMFG3X5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnnwKwxvj00WpaARvNopfdEIbuU4M6%2F1EkRVtuoA0hYwIgDJ5OrvOw%2Bb1CGfyw21Jee2p%2BIDcDuEhbNmeBbxdkGhwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPCFA2EO7AJkc7WoyrcA2XGOI38vDnKa4LUqi%2BQtbRFsipU7bGRlbHRlfa9HUDa541as%2BUFz6AippbQhZ5DuBg0IF1%2BwPa0s9q20GnEe%2BiQPpcR7lUBmtiIyix3tN6GjTqCZeSN7NV9IwyuJrWPo2S7IMk%2F5r%2FkMOEJDqU4kDQ0CfdMAiei9yvD%2Bl%2FkuEN10u%2FdvpFjauTYAvtiUaB%2FxWFngVCwrSk%2BOXtUkazQp8tYldc9WCJ4PXivch1iJN%2B2iz74vYPsE%2BlDfANnAX4ZjTexwH85k5FJ9odrwXJkNpoPVLgYLEyI6PVXLxh24lZZ5N9f9hfE8YhieUXNwwu84YFHFjrBl6ICKjnwrqUfnMDZJwgsru8jrANGsQrbwWJdVjYizKeHdgKnC2J1AyivCd4ItIX0lzJsGE32%2Buup%2FiPUO%2BBl2UvWGnW22pdvA41DPMy7lU8z0KiScMOoZPzCzntshi4g1%2Bxc86zfe%2B3KGiBaUp9KDTcCyz%2BGZF5tF55XRiL%2F%2FDKQDSG%2B2P%2FrYvbFr01x1FJQOinRDqhtv5kZv%2Fo4ZpAidFG7O%2FvQB%2FJeSKjAeHwiA0qDZ6hq%2BSd%2Fk%2F%2FWSkF1SfLq0oKdRsvLLuz88OYQH43DYEalXAzUG%2B0xj34vkmVlWjKPqijy8rnrMKWlq8IGOqUBEg0g6WA%2B2u5yJvnan7E0z%2BCyq8%2FR2dm0aeKricMJYFr63Vd%2BaIbA0aRWaaAZT1yTX0Qu4J2kvoQ0Rqt8zg9YHNURg%2FJgN4gOk29CQQ2WWnDJZYO3JAt1t%2F4C7HgZGA2lvr0xy%2BfFoUIDU%2FaaT9yPNDguuuzpVvA5A4VEc9S2GgYbfzRQff0d1JF2kIIO%2FGUQxYkvat23LX3C61SIBB1Xrj3OxQQf&X-Amz-Signature=6ba490b95f685e17a69f128fe7064bdefcc4e2309d3f2f63139acaedb5aa71ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMFG3X5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnnwKwxvj00WpaARvNopfdEIbuU4M6%2F1EkRVtuoA0hYwIgDJ5OrvOw%2Bb1CGfyw21Jee2p%2BIDcDuEhbNmeBbxdkGhwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPCFA2EO7AJkc7WoyrcA2XGOI38vDnKa4LUqi%2BQtbRFsipU7bGRlbHRlfa9HUDa541as%2BUFz6AippbQhZ5DuBg0IF1%2BwPa0s9q20GnEe%2BiQPpcR7lUBmtiIyix3tN6GjTqCZeSN7NV9IwyuJrWPo2S7IMk%2F5r%2FkMOEJDqU4kDQ0CfdMAiei9yvD%2Bl%2FkuEN10u%2FdvpFjauTYAvtiUaB%2FxWFngVCwrSk%2BOXtUkazQp8tYldc9WCJ4PXivch1iJN%2B2iz74vYPsE%2BlDfANnAX4ZjTexwH85k5FJ9odrwXJkNpoPVLgYLEyI6PVXLxh24lZZ5N9f9hfE8YhieUXNwwu84YFHFjrBl6ICKjnwrqUfnMDZJwgsru8jrANGsQrbwWJdVjYizKeHdgKnC2J1AyivCd4ItIX0lzJsGE32%2Buup%2FiPUO%2BBl2UvWGnW22pdvA41DPMy7lU8z0KiScMOoZPzCzntshi4g1%2Bxc86zfe%2B3KGiBaUp9KDTcCyz%2BGZF5tF55XRiL%2F%2FDKQDSG%2B2P%2FrYvbFr01x1FJQOinRDqhtv5kZv%2Fo4ZpAidFG7O%2FvQB%2FJeSKjAeHwiA0qDZ6hq%2BSd%2Fk%2F%2FWSkF1SfLq0oKdRsvLLuz88OYQH43DYEalXAzUG%2B0xj34vkmVlWjKPqijy8rnrMKWlq8IGOqUBEg0g6WA%2B2u5yJvnan7E0z%2BCyq8%2FR2dm0aeKricMJYFr63Vd%2BaIbA0aRWaaAZT1yTX0Qu4J2kvoQ0Rqt8zg9YHNURg%2FJgN4gOk29CQQ2WWnDJZYO3JAt1t%2F4C7HgZGA2lvr0xy%2BfFoUIDU%2FaaT9yPNDguuuzpVvA5A4VEc9S2GgYbfzRQff0d1JF2kIIO%2FGUQxYkvat23LX3C61SIBB1Xrj3OxQQf&X-Amz-Signature=8a4c150ea43e2dc302fb64b397a8c0905cc0824e773ced94e49d844a7f3c2cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMFG3X5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnnwKwxvj00WpaARvNopfdEIbuU4M6%2F1EkRVtuoA0hYwIgDJ5OrvOw%2Bb1CGfyw21Jee2p%2BIDcDuEhbNmeBbxdkGhwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPCFA2EO7AJkc7WoyrcA2XGOI38vDnKa4LUqi%2BQtbRFsipU7bGRlbHRlfa9HUDa541as%2BUFz6AippbQhZ5DuBg0IF1%2BwPa0s9q20GnEe%2BiQPpcR7lUBmtiIyix3tN6GjTqCZeSN7NV9IwyuJrWPo2S7IMk%2F5r%2FkMOEJDqU4kDQ0CfdMAiei9yvD%2Bl%2FkuEN10u%2FdvpFjauTYAvtiUaB%2FxWFngVCwrSk%2BOXtUkazQp8tYldc9WCJ4PXivch1iJN%2B2iz74vYPsE%2BlDfANnAX4ZjTexwH85k5FJ9odrwXJkNpoPVLgYLEyI6PVXLxh24lZZ5N9f9hfE8YhieUXNwwu84YFHFjrBl6ICKjnwrqUfnMDZJwgsru8jrANGsQrbwWJdVjYizKeHdgKnC2J1AyivCd4ItIX0lzJsGE32%2Buup%2FiPUO%2BBl2UvWGnW22pdvA41DPMy7lU8z0KiScMOoZPzCzntshi4g1%2Bxc86zfe%2B3KGiBaUp9KDTcCyz%2BGZF5tF55XRiL%2F%2FDKQDSG%2B2P%2FrYvbFr01x1FJQOinRDqhtv5kZv%2Fo4ZpAidFG7O%2FvQB%2FJeSKjAeHwiA0qDZ6hq%2BSd%2Fk%2F%2FWSkF1SfLq0oKdRsvLLuz88OYQH43DYEalXAzUG%2B0xj34vkmVlWjKPqijy8rnrMKWlq8IGOqUBEg0g6WA%2B2u5yJvnan7E0z%2BCyq8%2FR2dm0aeKricMJYFr63Vd%2BaIbA0aRWaaAZT1yTX0Qu4J2kvoQ0Rqt8zg9YHNURg%2FJgN4gOk29CQQ2WWnDJZYO3JAt1t%2F4C7HgZGA2lvr0xy%2BfFoUIDU%2FaaT9yPNDguuuzpVvA5A4VEc9S2GgYbfzRQff0d1JF2kIIO%2FGUQxYkvat23LX3C61SIBB1Xrj3OxQQf&X-Amz-Signature=0e49606ed094d98cf8cef0d432a3baf495f0ac79ee85b50ad9224b0c252e19ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMFG3X5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnnwKwxvj00WpaARvNopfdEIbuU4M6%2F1EkRVtuoA0hYwIgDJ5OrvOw%2Bb1CGfyw21Jee2p%2BIDcDuEhbNmeBbxdkGhwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPCFA2EO7AJkc7WoyrcA2XGOI38vDnKa4LUqi%2BQtbRFsipU7bGRlbHRlfa9HUDa541as%2BUFz6AippbQhZ5DuBg0IF1%2BwPa0s9q20GnEe%2BiQPpcR7lUBmtiIyix3tN6GjTqCZeSN7NV9IwyuJrWPo2S7IMk%2F5r%2FkMOEJDqU4kDQ0CfdMAiei9yvD%2Bl%2FkuEN10u%2FdvpFjauTYAvtiUaB%2FxWFngVCwrSk%2BOXtUkazQp8tYldc9WCJ4PXivch1iJN%2B2iz74vYPsE%2BlDfANnAX4ZjTexwH85k5FJ9odrwXJkNpoPVLgYLEyI6PVXLxh24lZZ5N9f9hfE8YhieUXNwwu84YFHFjrBl6ICKjnwrqUfnMDZJwgsru8jrANGsQrbwWJdVjYizKeHdgKnC2J1AyivCd4ItIX0lzJsGE32%2Buup%2FiPUO%2BBl2UvWGnW22pdvA41DPMy7lU8z0KiScMOoZPzCzntshi4g1%2Bxc86zfe%2B3KGiBaUp9KDTcCyz%2BGZF5tF55XRiL%2F%2FDKQDSG%2B2P%2FrYvbFr01x1FJQOinRDqhtv5kZv%2Fo4ZpAidFG7O%2FvQB%2FJeSKjAeHwiA0qDZ6hq%2BSd%2Fk%2F%2FWSkF1SfLq0oKdRsvLLuz88OYQH43DYEalXAzUG%2B0xj34vkmVlWjKPqijy8rnrMKWlq8IGOqUBEg0g6WA%2B2u5yJvnan7E0z%2BCyq8%2FR2dm0aeKricMJYFr63Vd%2BaIbA0aRWaaAZT1yTX0Qu4J2kvoQ0Rqt8zg9YHNURg%2FJgN4gOk29CQQ2WWnDJZYO3JAt1t%2F4C7HgZGA2lvr0xy%2BfFoUIDU%2FaaT9yPNDguuuzpVvA5A4VEc9S2GgYbfzRQff0d1JF2kIIO%2FGUQxYkvat23LX3C61SIBB1Xrj3OxQQf&X-Amz-Signature=0be2b653e0d72e2ce6aa9d30bd3f9518c1251ff7f6f655bf332d3ef0392d6527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMFG3X5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnnwKwxvj00WpaARvNopfdEIbuU4M6%2F1EkRVtuoA0hYwIgDJ5OrvOw%2Bb1CGfyw21Jee2p%2BIDcDuEhbNmeBbxdkGhwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPCFA2EO7AJkc7WoyrcA2XGOI38vDnKa4LUqi%2BQtbRFsipU7bGRlbHRlfa9HUDa541as%2BUFz6AippbQhZ5DuBg0IF1%2BwPa0s9q20GnEe%2BiQPpcR7lUBmtiIyix3tN6GjTqCZeSN7NV9IwyuJrWPo2S7IMk%2F5r%2FkMOEJDqU4kDQ0CfdMAiei9yvD%2Bl%2FkuEN10u%2FdvpFjauTYAvtiUaB%2FxWFngVCwrSk%2BOXtUkazQp8tYldc9WCJ4PXivch1iJN%2B2iz74vYPsE%2BlDfANnAX4ZjTexwH85k5FJ9odrwXJkNpoPVLgYLEyI6PVXLxh24lZZ5N9f9hfE8YhieUXNwwu84YFHFjrBl6ICKjnwrqUfnMDZJwgsru8jrANGsQrbwWJdVjYizKeHdgKnC2J1AyivCd4ItIX0lzJsGE32%2Buup%2FiPUO%2BBl2UvWGnW22pdvA41DPMy7lU8z0KiScMOoZPzCzntshi4g1%2Bxc86zfe%2B3KGiBaUp9KDTcCyz%2BGZF5tF55XRiL%2F%2FDKQDSG%2B2P%2FrYvbFr01x1FJQOinRDqhtv5kZv%2Fo4ZpAidFG7O%2FvQB%2FJeSKjAeHwiA0qDZ6hq%2BSd%2Fk%2F%2FWSkF1SfLq0oKdRsvLLuz88OYQH43DYEalXAzUG%2B0xj34vkmVlWjKPqijy8rnrMKWlq8IGOqUBEg0g6WA%2B2u5yJvnan7E0z%2BCyq8%2FR2dm0aeKricMJYFr63Vd%2BaIbA0aRWaaAZT1yTX0Qu4J2kvoQ0Rqt8zg9YHNURg%2FJgN4gOk29CQQ2WWnDJZYO3JAt1t%2F4C7HgZGA2lvr0xy%2BfFoUIDU%2FaaT9yPNDguuuzpVvA5A4VEc9S2GgYbfzRQff0d1JF2kIIO%2FGUQxYkvat23LX3C61SIBB1Xrj3OxQQf&X-Amz-Signature=6ed24f992a075cd863408320a7305fdd9d948da5fc455afffa42760f9055ed67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

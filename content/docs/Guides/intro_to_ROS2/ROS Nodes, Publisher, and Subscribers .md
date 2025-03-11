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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZGYT6Z%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGGluOCsFhADvaMsBmlrQkDCK91pL0xLjkKTLxh14MsBAiBDW7euxuvUhajyZzQkmOP22%2FXWPNwIIVtjrhenRoMtvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JYtuOR8vSynb40hKtwD5fgwKxWKIXzoVav28eAjhEcBi%2FqaDVTatEXzLnQLmKQ%2Fe2KWsRFIWo5rPfWsCyueSCEnw5x%2BkRboM83t1VtZMDZfrlTymyBMC6X1FyTBg7B9uVwOB6Kn0dtH%2FOjzGZ0UqvHI0%2BTf4aj2Yt4wOQzcDGXf5IgxIxCZxStfgx7N6B7zeXydPKBbdQ5gvz6y3nlz9dNs9RVQKkjXGDwrWYdVai60Orn6I4HOTtW3JZg3xwWVBtnF%2BbFyGyQpHSuXVjZC8dVsHkWLcl%2FmzmzLitWtBQBwf5LPUWSBbmwic9JMWoOA8FLYgi0EjDhST%2FW8eo55X4PBs2lPVkZp85E4BX6%2B0b1O%2FnhH88Qk0D9YDlpXvQskhBVG%2Bm%2BrqZrz2CfQC8ixaEygmbknrEP%2FQgitkNlTQNdJ8WThf0vixs%2FTHZizpwFfwCqtHb1bN%2Bv2mtqt%2BDY0wKK%2BzuXqqFo4JwhHjrEN5jmLJJ9CfFc3dGK%2BXj%2F4kBSqlVWQ0PT5jq7B4CRX0d3Y6WBBntmXMY4eHt9GJbfXw1TVS0Xn4MKBHuWaAgkX2FoDeHLHuZLuyW2EQGqHuXgUtEe%2Fbzj0JLOO1KisqHY60P%2Bn8n09avUXTowgbckapT1709uM%2FhA44hNgIY0w7fLBvgY6pgH2yP%2FOc%2FuRlJzbhaYjU7fJQM8lK%2BgEAlvQtW6lVVKjJKyH50MpmST2bo0rIHOgrHOGzUtEq6YBmCTNWbYmpvEORMa2tbDuYm5rAT2bWMMH9jxisxCG02OWlIwMsEuGfYX34R7GYJCABgCJP6zf3i9WEQIJUctiGYyEpe4%2FAUcpQkhmJAThVcZscqRRLipJ6djMBDb29pcokHZu%2FGmpau2iGY4r6qcK&X-Amz-Signature=5f6a18693f34c6d3e86064eed584c1983d1f311da317a53bd86967d707bd2ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZGYT6Z%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGGluOCsFhADvaMsBmlrQkDCK91pL0xLjkKTLxh14MsBAiBDW7euxuvUhajyZzQkmOP22%2FXWPNwIIVtjrhenRoMtvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JYtuOR8vSynb40hKtwD5fgwKxWKIXzoVav28eAjhEcBi%2FqaDVTatEXzLnQLmKQ%2Fe2KWsRFIWo5rPfWsCyueSCEnw5x%2BkRboM83t1VtZMDZfrlTymyBMC6X1FyTBg7B9uVwOB6Kn0dtH%2FOjzGZ0UqvHI0%2BTf4aj2Yt4wOQzcDGXf5IgxIxCZxStfgx7N6B7zeXydPKBbdQ5gvz6y3nlz9dNs9RVQKkjXGDwrWYdVai60Orn6I4HOTtW3JZg3xwWVBtnF%2BbFyGyQpHSuXVjZC8dVsHkWLcl%2FmzmzLitWtBQBwf5LPUWSBbmwic9JMWoOA8FLYgi0EjDhST%2FW8eo55X4PBs2lPVkZp85E4BX6%2B0b1O%2FnhH88Qk0D9YDlpXvQskhBVG%2Bm%2BrqZrz2CfQC8ixaEygmbknrEP%2FQgitkNlTQNdJ8WThf0vixs%2FTHZizpwFfwCqtHb1bN%2Bv2mtqt%2BDY0wKK%2BzuXqqFo4JwhHjrEN5jmLJJ9CfFc3dGK%2BXj%2F4kBSqlVWQ0PT5jq7B4CRX0d3Y6WBBntmXMY4eHt9GJbfXw1TVS0Xn4MKBHuWaAgkX2FoDeHLHuZLuyW2EQGqHuXgUtEe%2Fbzj0JLOO1KisqHY60P%2Bn8n09avUXTowgbckapT1709uM%2FhA44hNgIY0w7fLBvgY6pgH2yP%2FOc%2FuRlJzbhaYjU7fJQM8lK%2BgEAlvQtW6lVVKjJKyH50MpmST2bo0rIHOgrHOGzUtEq6YBmCTNWbYmpvEORMa2tbDuYm5rAT2bWMMH9jxisxCG02OWlIwMsEuGfYX34R7GYJCABgCJP6zf3i9WEQIJUctiGYyEpe4%2FAUcpQkhmJAThVcZscqRRLipJ6djMBDb29pcokHZu%2FGmpau2iGY4r6qcK&X-Amz-Signature=fa5bde58f1fddeed6682b7c13b15e11befb095a8ba737104027767d60119475a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZGYT6Z%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGGluOCsFhADvaMsBmlrQkDCK91pL0xLjkKTLxh14MsBAiBDW7euxuvUhajyZzQkmOP22%2FXWPNwIIVtjrhenRoMtvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JYtuOR8vSynb40hKtwD5fgwKxWKIXzoVav28eAjhEcBi%2FqaDVTatEXzLnQLmKQ%2Fe2KWsRFIWo5rPfWsCyueSCEnw5x%2BkRboM83t1VtZMDZfrlTymyBMC6X1FyTBg7B9uVwOB6Kn0dtH%2FOjzGZ0UqvHI0%2BTf4aj2Yt4wOQzcDGXf5IgxIxCZxStfgx7N6B7zeXydPKBbdQ5gvz6y3nlz9dNs9RVQKkjXGDwrWYdVai60Orn6I4HOTtW3JZg3xwWVBtnF%2BbFyGyQpHSuXVjZC8dVsHkWLcl%2FmzmzLitWtBQBwf5LPUWSBbmwic9JMWoOA8FLYgi0EjDhST%2FW8eo55X4PBs2lPVkZp85E4BX6%2B0b1O%2FnhH88Qk0D9YDlpXvQskhBVG%2Bm%2BrqZrz2CfQC8ixaEygmbknrEP%2FQgitkNlTQNdJ8WThf0vixs%2FTHZizpwFfwCqtHb1bN%2Bv2mtqt%2BDY0wKK%2BzuXqqFo4JwhHjrEN5jmLJJ9CfFc3dGK%2BXj%2F4kBSqlVWQ0PT5jq7B4CRX0d3Y6WBBntmXMY4eHt9GJbfXw1TVS0Xn4MKBHuWaAgkX2FoDeHLHuZLuyW2EQGqHuXgUtEe%2Fbzj0JLOO1KisqHY60P%2Bn8n09avUXTowgbckapT1709uM%2FhA44hNgIY0w7fLBvgY6pgH2yP%2FOc%2FuRlJzbhaYjU7fJQM8lK%2BgEAlvQtW6lVVKjJKyH50MpmST2bo0rIHOgrHOGzUtEq6YBmCTNWbYmpvEORMa2tbDuYm5rAT2bWMMH9jxisxCG02OWlIwMsEuGfYX34R7GYJCABgCJP6zf3i9WEQIJUctiGYyEpe4%2FAUcpQkhmJAThVcZscqRRLipJ6djMBDb29pcokHZu%2FGmpau2iGY4r6qcK&X-Amz-Signature=51db1833b879bbca9211fdb977f19d6d5693a30fbb982af5cfadf33f2fe1a4a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZGYT6Z%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGGluOCsFhADvaMsBmlrQkDCK91pL0xLjkKTLxh14MsBAiBDW7euxuvUhajyZzQkmOP22%2FXWPNwIIVtjrhenRoMtvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JYtuOR8vSynb40hKtwD5fgwKxWKIXzoVav28eAjhEcBi%2FqaDVTatEXzLnQLmKQ%2Fe2KWsRFIWo5rPfWsCyueSCEnw5x%2BkRboM83t1VtZMDZfrlTymyBMC6X1FyTBg7B9uVwOB6Kn0dtH%2FOjzGZ0UqvHI0%2BTf4aj2Yt4wOQzcDGXf5IgxIxCZxStfgx7N6B7zeXydPKBbdQ5gvz6y3nlz9dNs9RVQKkjXGDwrWYdVai60Orn6I4HOTtW3JZg3xwWVBtnF%2BbFyGyQpHSuXVjZC8dVsHkWLcl%2FmzmzLitWtBQBwf5LPUWSBbmwic9JMWoOA8FLYgi0EjDhST%2FW8eo55X4PBs2lPVkZp85E4BX6%2B0b1O%2FnhH88Qk0D9YDlpXvQskhBVG%2Bm%2BrqZrz2CfQC8ixaEygmbknrEP%2FQgitkNlTQNdJ8WThf0vixs%2FTHZizpwFfwCqtHb1bN%2Bv2mtqt%2BDY0wKK%2BzuXqqFo4JwhHjrEN5jmLJJ9CfFc3dGK%2BXj%2F4kBSqlVWQ0PT5jq7B4CRX0d3Y6WBBntmXMY4eHt9GJbfXw1TVS0Xn4MKBHuWaAgkX2FoDeHLHuZLuyW2EQGqHuXgUtEe%2Fbzj0JLOO1KisqHY60P%2Bn8n09avUXTowgbckapT1709uM%2FhA44hNgIY0w7fLBvgY6pgH2yP%2FOc%2FuRlJzbhaYjU7fJQM8lK%2BgEAlvQtW6lVVKjJKyH50MpmST2bo0rIHOgrHOGzUtEq6YBmCTNWbYmpvEORMa2tbDuYm5rAT2bWMMH9jxisxCG02OWlIwMsEuGfYX34R7GYJCABgCJP6zf3i9WEQIJUctiGYyEpe4%2FAUcpQkhmJAThVcZscqRRLipJ6djMBDb29pcokHZu%2FGmpau2iGY4r6qcK&X-Amz-Signature=982f7501249e6f9455b0c13060c1a9cfbc8b3cb836a6a2d3258f80ae606370ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZGYT6Z%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGGluOCsFhADvaMsBmlrQkDCK91pL0xLjkKTLxh14MsBAiBDW7euxuvUhajyZzQkmOP22%2FXWPNwIIVtjrhenRoMtvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JYtuOR8vSynb40hKtwD5fgwKxWKIXzoVav28eAjhEcBi%2FqaDVTatEXzLnQLmKQ%2Fe2KWsRFIWo5rPfWsCyueSCEnw5x%2BkRboM83t1VtZMDZfrlTymyBMC6X1FyTBg7B9uVwOB6Kn0dtH%2FOjzGZ0UqvHI0%2BTf4aj2Yt4wOQzcDGXf5IgxIxCZxStfgx7N6B7zeXydPKBbdQ5gvz6y3nlz9dNs9RVQKkjXGDwrWYdVai60Orn6I4HOTtW3JZg3xwWVBtnF%2BbFyGyQpHSuXVjZC8dVsHkWLcl%2FmzmzLitWtBQBwf5LPUWSBbmwic9JMWoOA8FLYgi0EjDhST%2FW8eo55X4PBs2lPVkZp85E4BX6%2B0b1O%2FnhH88Qk0D9YDlpXvQskhBVG%2Bm%2BrqZrz2CfQC8ixaEygmbknrEP%2FQgitkNlTQNdJ8WThf0vixs%2FTHZizpwFfwCqtHb1bN%2Bv2mtqt%2BDY0wKK%2BzuXqqFo4JwhHjrEN5jmLJJ9CfFc3dGK%2BXj%2F4kBSqlVWQ0PT5jq7B4CRX0d3Y6WBBntmXMY4eHt9GJbfXw1TVS0Xn4MKBHuWaAgkX2FoDeHLHuZLuyW2EQGqHuXgUtEe%2Fbzj0JLOO1KisqHY60P%2Bn8n09avUXTowgbckapT1709uM%2FhA44hNgIY0w7fLBvgY6pgH2yP%2FOc%2FuRlJzbhaYjU7fJQM8lK%2BgEAlvQtW6lVVKjJKyH50MpmST2bo0rIHOgrHOGzUtEq6YBmCTNWbYmpvEORMa2tbDuYm5rAT2bWMMH9jxisxCG02OWlIwMsEuGfYX34R7GYJCABgCJP6zf3i9WEQIJUctiGYyEpe4%2FAUcpQkhmJAThVcZscqRRLipJ6djMBDb29pcokHZu%2FGmpau2iGY4r6qcK&X-Amz-Signature=8a40ebf00494b9f45bbdb1ece44900aa5280c920d99b15042f5c4adcc814d9d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZGYT6Z%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGGluOCsFhADvaMsBmlrQkDCK91pL0xLjkKTLxh14MsBAiBDW7euxuvUhajyZzQkmOP22%2FXWPNwIIVtjrhenRoMtvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JYtuOR8vSynb40hKtwD5fgwKxWKIXzoVav28eAjhEcBi%2FqaDVTatEXzLnQLmKQ%2Fe2KWsRFIWo5rPfWsCyueSCEnw5x%2BkRboM83t1VtZMDZfrlTymyBMC6X1FyTBg7B9uVwOB6Kn0dtH%2FOjzGZ0UqvHI0%2BTf4aj2Yt4wOQzcDGXf5IgxIxCZxStfgx7N6B7zeXydPKBbdQ5gvz6y3nlz9dNs9RVQKkjXGDwrWYdVai60Orn6I4HOTtW3JZg3xwWVBtnF%2BbFyGyQpHSuXVjZC8dVsHkWLcl%2FmzmzLitWtBQBwf5LPUWSBbmwic9JMWoOA8FLYgi0EjDhST%2FW8eo55X4PBs2lPVkZp85E4BX6%2B0b1O%2FnhH88Qk0D9YDlpXvQskhBVG%2Bm%2BrqZrz2CfQC8ixaEygmbknrEP%2FQgitkNlTQNdJ8WThf0vixs%2FTHZizpwFfwCqtHb1bN%2Bv2mtqt%2BDY0wKK%2BzuXqqFo4JwhHjrEN5jmLJJ9CfFc3dGK%2BXj%2F4kBSqlVWQ0PT5jq7B4CRX0d3Y6WBBntmXMY4eHt9GJbfXw1TVS0Xn4MKBHuWaAgkX2FoDeHLHuZLuyW2EQGqHuXgUtEe%2Fbzj0JLOO1KisqHY60P%2Bn8n09avUXTowgbckapT1709uM%2FhA44hNgIY0w7fLBvgY6pgH2yP%2FOc%2FuRlJzbhaYjU7fJQM8lK%2BgEAlvQtW6lVVKjJKyH50MpmST2bo0rIHOgrHOGzUtEq6YBmCTNWbYmpvEORMa2tbDuYm5rAT2bWMMH9jxisxCG02OWlIwMsEuGfYX34R7GYJCABgCJP6zf3i9WEQIJUctiGYyEpe4%2FAUcpQkhmJAThVcZscqRRLipJ6djMBDb29pcokHZu%2FGmpau2iGY4r6qcK&X-Amz-Signature=89d2673ec69d41643b3947842db3f9e4f49694f712194314f208bff0043206a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZGYT6Z%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGGluOCsFhADvaMsBmlrQkDCK91pL0xLjkKTLxh14MsBAiBDW7euxuvUhajyZzQkmOP22%2FXWPNwIIVtjrhenRoMtvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JYtuOR8vSynb40hKtwD5fgwKxWKIXzoVav28eAjhEcBi%2FqaDVTatEXzLnQLmKQ%2Fe2KWsRFIWo5rPfWsCyueSCEnw5x%2BkRboM83t1VtZMDZfrlTymyBMC6X1FyTBg7B9uVwOB6Kn0dtH%2FOjzGZ0UqvHI0%2BTf4aj2Yt4wOQzcDGXf5IgxIxCZxStfgx7N6B7zeXydPKBbdQ5gvz6y3nlz9dNs9RVQKkjXGDwrWYdVai60Orn6I4HOTtW3JZg3xwWVBtnF%2BbFyGyQpHSuXVjZC8dVsHkWLcl%2FmzmzLitWtBQBwf5LPUWSBbmwic9JMWoOA8FLYgi0EjDhST%2FW8eo55X4PBs2lPVkZp85E4BX6%2B0b1O%2FnhH88Qk0D9YDlpXvQskhBVG%2Bm%2BrqZrz2CfQC8ixaEygmbknrEP%2FQgitkNlTQNdJ8WThf0vixs%2FTHZizpwFfwCqtHb1bN%2Bv2mtqt%2BDY0wKK%2BzuXqqFo4JwhHjrEN5jmLJJ9CfFc3dGK%2BXj%2F4kBSqlVWQ0PT5jq7B4CRX0d3Y6WBBntmXMY4eHt9GJbfXw1TVS0Xn4MKBHuWaAgkX2FoDeHLHuZLuyW2EQGqHuXgUtEe%2Fbzj0JLOO1KisqHY60P%2Bn8n09avUXTowgbckapT1709uM%2FhA44hNgIY0w7fLBvgY6pgH2yP%2FOc%2FuRlJzbhaYjU7fJQM8lK%2BgEAlvQtW6lVVKjJKyH50MpmST2bo0rIHOgrHOGzUtEq6YBmCTNWbYmpvEORMa2tbDuYm5rAT2bWMMH9jxisxCG02OWlIwMsEuGfYX34R7GYJCABgCJP6zf3i9WEQIJUctiGYyEpe4%2FAUcpQkhmJAThVcZscqRRLipJ6djMBDb29pcokHZu%2FGmpau2iGY4r6qcK&X-Amz-Signature=f40a7ea9aa31d7e67a11ec471bb0c586ea5ade1c100db94573dc8a0ac5fce42e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUZGYT6Z%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGGluOCsFhADvaMsBmlrQkDCK91pL0xLjkKTLxh14MsBAiBDW7euxuvUhajyZzQkmOP22%2FXWPNwIIVtjrhenRoMtvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9JYtuOR8vSynb40hKtwD5fgwKxWKIXzoVav28eAjhEcBi%2FqaDVTatEXzLnQLmKQ%2Fe2KWsRFIWo5rPfWsCyueSCEnw5x%2BkRboM83t1VtZMDZfrlTymyBMC6X1FyTBg7B9uVwOB6Kn0dtH%2FOjzGZ0UqvHI0%2BTf4aj2Yt4wOQzcDGXf5IgxIxCZxStfgx7N6B7zeXydPKBbdQ5gvz6y3nlz9dNs9RVQKkjXGDwrWYdVai60Orn6I4HOTtW3JZg3xwWVBtnF%2BbFyGyQpHSuXVjZC8dVsHkWLcl%2FmzmzLitWtBQBwf5LPUWSBbmwic9JMWoOA8FLYgi0EjDhST%2FW8eo55X4PBs2lPVkZp85E4BX6%2B0b1O%2FnhH88Qk0D9YDlpXvQskhBVG%2Bm%2BrqZrz2CfQC8ixaEygmbknrEP%2FQgitkNlTQNdJ8WThf0vixs%2FTHZizpwFfwCqtHb1bN%2Bv2mtqt%2BDY0wKK%2BzuXqqFo4JwhHjrEN5jmLJJ9CfFc3dGK%2BXj%2F4kBSqlVWQ0PT5jq7B4CRX0d3Y6WBBntmXMY4eHt9GJbfXw1TVS0Xn4MKBHuWaAgkX2FoDeHLHuZLuyW2EQGqHuXgUtEe%2Fbzj0JLOO1KisqHY60P%2Bn8n09avUXTowgbckapT1709uM%2FhA44hNgIY0w7fLBvgY6pgH2yP%2FOc%2FuRlJzbhaYjU7fJQM8lK%2BgEAlvQtW6lVVKjJKyH50MpmST2bo0rIHOgrHOGzUtEq6YBmCTNWbYmpvEORMa2tbDuYm5rAT2bWMMH9jxisxCG02OWlIwMsEuGfYX34R7GYJCABgCJP6zf3i9WEQIJUctiGYyEpe4%2FAUcpQkhmJAThVcZscqRRLipJ6djMBDb29pcokHZu%2FGmpau2iGY4r6qcK&X-Amz-Signature=6cec016f0b594b886b6ce82b52b6dfcf14c37fee64abddba9e7efde72fda491d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

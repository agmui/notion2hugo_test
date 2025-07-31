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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRVVX23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVbnR1DV5BSdZMMLn%2FyHlE%2BWVH23RygODu80OfcvBpBAiEA8nfy9fsnlFoN%2Ftfytpns6NExg577QkPGOrIT%2B2kJ2FcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMbXTaME6pgI0bBIircA5hn0zQlJK9cm%2Fy2ZfPzF%2BwGRv7%2FqvEOBO8Dl7y0suMU8S0iNKOwhLkt02WWx23o6j205wK0VBOKEjEKotMaQCTXUbzcW8zlYLwQVma7pAsGLKwzAzofcOQvjgWsah%2By5d6Rq0fPLczz3Ok0nylCPylDhdrkzRPWLowhnWA40ah42vH9no4ftz6LFeKzsHaX0EC7JmDe0iE1N1Ch4qM9%2BG%2FR6%2BJAxis0NSy6hphaJOWPGD1AGHVLpJ7oS1IB5LXaBcQ7VHigbUeUp6sDCNr6ni7hz0%2FrJh2rBz2nAEqDEwZpvuu50pXN%2BazTcPms0MHCudryoj%2B%2BqWo%2FnrY8CCW%2B26KnCLfMYupfOwD1uLE%2FiIxXhyYsScojEKzZLy5xEgrfMR3hU4PrkLC0rFXEtqf2NZ5WyUdLH7%2FYTxao8YlrwtdLsP7%2BY%2FH0iH%2B6sfLowpWm78Lsxb5IewkRs9UWarRvM0oYBy5u5yPEtrwsUNtd4GKyCJx%2B%2BWA4wrQt0zA96KWCHPs4%2Ba1Baya36JS%2BvA63WKK8xLvZG%2Bnkw48n%2Fjt5%2F6yNxMhPf9jDstuiWvRfTvnwidND4L6dASyMdptnGni8eEX8um5QhkM9ymKPUS5aYL9nSEoDp6q5CwjzafG%2FMMaiqsQGOqUBRx6iDU0xZlScREi9HZxlPkLI8PSbcUvEdSDjmWTF82MRC2IrGKpLEjhTr5e925l4q6wHcQe9D0tZzVQz06YsT7%2FltxS6IaZwY4%2BomE%2FhiwQK31wr3arp1ZkmdFZoxQ1FeQaCR%2FgR0F%2F60D2igluOcO024JYPdes5YSBvHteliK%2Fsua3ISkevgdswxqAWu8gM%2B8fpPWuT3nKIGuCl17ccXNyazPix&X-Amz-Signature=e247fa4c1bc42cf9a3d636b0845575e9835e28521faee9200588133b40677948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRVVX23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVbnR1DV5BSdZMMLn%2FyHlE%2BWVH23RygODu80OfcvBpBAiEA8nfy9fsnlFoN%2Ftfytpns6NExg577QkPGOrIT%2B2kJ2FcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMbXTaME6pgI0bBIircA5hn0zQlJK9cm%2Fy2ZfPzF%2BwGRv7%2FqvEOBO8Dl7y0suMU8S0iNKOwhLkt02WWx23o6j205wK0VBOKEjEKotMaQCTXUbzcW8zlYLwQVma7pAsGLKwzAzofcOQvjgWsah%2By5d6Rq0fPLczz3Ok0nylCPylDhdrkzRPWLowhnWA40ah42vH9no4ftz6LFeKzsHaX0EC7JmDe0iE1N1Ch4qM9%2BG%2FR6%2BJAxis0NSy6hphaJOWPGD1AGHVLpJ7oS1IB5LXaBcQ7VHigbUeUp6sDCNr6ni7hz0%2FrJh2rBz2nAEqDEwZpvuu50pXN%2BazTcPms0MHCudryoj%2B%2BqWo%2FnrY8CCW%2B26KnCLfMYupfOwD1uLE%2FiIxXhyYsScojEKzZLy5xEgrfMR3hU4PrkLC0rFXEtqf2NZ5WyUdLH7%2FYTxao8YlrwtdLsP7%2BY%2FH0iH%2B6sfLowpWm78Lsxb5IewkRs9UWarRvM0oYBy5u5yPEtrwsUNtd4GKyCJx%2B%2BWA4wrQt0zA96KWCHPs4%2Ba1Baya36JS%2BvA63WKK8xLvZG%2Bnkw48n%2Fjt5%2F6yNxMhPf9jDstuiWvRfTvnwidND4L6dASyMdptnGni8eEX8um5QhkM9ymKPUS5aYL9nSEoDp6q5CwjzafG%2FMMaiqsQGOqUBRx6iDU0xZlScREi9HZxlPkLI8PSbcUvEdSDjmWTF82MRC2IrGKpLEjhTr5e925l4q6wHcQe9D0tZzVQz06YsT7%2FltxS6IaZwY4%2BomE%2FhiwQK31wr3arp1ZkmdFZoxQ1FeQaCR%2FgR0F%2F60D2igluOcO024JYPdes5YSBvHteliK%2Fsua3ISkevgdswxqAWu8gM%2B8fpPWuT3nKIGuCl17ccXNyazPix&X-Amz-Signature=b64dd453c54c603a64eeb6af63f0ddf2f3e0a54d0c8cf78c8ccd8e2ba7a01332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRVVX23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVbnR1DV5BSdZMMLn%2FyHlE%2BWVH23RygODu80OfcvBpBAiEA8nfy9fsnlFoN%2Ftfytpns6NExg577QkPGOrIT%2B2kJ2FcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMbXTaME6pgI0bBIircA5hn0zQlJK9cm%2Fy2ZfPzF%2BwGRv7%2FqvEOBO8Dl7y0suMU8S0iNKOwhLkt02WWx23o6j205wK0VBOKEjEKotMaQCTXUbzcW8zlYLwQVma7pAsGLKwzAzofcOQvjgWsah%2By5d6Rq0fPLczz3Ok0nylCPylDhdrkzRPWLowhnWA40ah42vH9no4ftz6LFeKzsHaX0EC7JmDe0iE1N1Ch4qM9%2BG%2FR6%2BJAxis0NSy6hphaJOWPGD1AGHVLpJ7oS1IB5LXaBcQ7VHigbUeUp6sDCNr6ni7hz0%2FrJh2rBz2nAEqDEwZpvuu50pXN%2BazTcPms0MHCudryoj%2B%2BqWo%2FnrY8CCW%2B26KnCLfMYupfOwD1uLE%2FiIxXhyYsScojEKzZLy5xEgrfMR3hU4PrkLC0rFXEtqf2NZ5WyUdLH7%2FYTxao8YlrwtdLsP7%2BY%2FH0iH%2B6sfLowpWm78Lsxb5IewkRs9UWarRvM0oYBy5u5yPEtrwsUNtd4GKyCJx%2B%2BWA4wrQt0zA96KWCHPs4%2Ba1Baya36JS%2BvA63WKK8xLvZG%2Bnkw48n%2Fjt5%2F6yNxMhPf9jDstuiWvRfTvnwidND4L6dASyMdptnGni8eEX8um5QhkM9ymKPUS5aYL9nSEoDp6q5CwjzafG%2FMMaiqsQGOqUBRx6iDU0xZlScREi9HZxlPkLI8PSbcUvEdSDjmWTF82MRC2IrGKpLEjhTr5e925l4q6wHcQe9D0tZzVQz06YsT7%2FltxS6IaZwY4%2BomE%2FhiwQK31wr3arp1ZkmdFZoxQ1FeQaCR%2FgR0F%2F60D2igluOcO024JYPdes5YSBvHteliK%2Fsua3ISkevgdswxqAWu8gM%2B8fpPWuT3nKIGuCl17ccXNyazPix&X-Amz-Signature=2a320e6484e87b6c3ba02993c52ee56634b96fc8ffed1b6291d9eff7cdb5409d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRVVX23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVbnR1DV5BSdZMMLn%2FyHlE%2BWVH23RygODu80OfcvBpBAiEA8nfy9fsnlFoN%2Ftfytpns6NExg577QkPGOrIT%2B2kJ2FcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMbXTaME6pgI0bBIircA5hn0zQlJK9cm%2Fy2ZfPzF%2BwGRv7%2FqvEOBO8Dl7y0suMU8S0iNKOwhLkt02WWx23o6j205wK0VBOKEjEKotMaQCTXUbzcW8zlYLwQVma7pAsGLKwzAzofcOQvjgWsah%2By5d6Rq0fPLczz3Ok0nylCPylDhdrkzRPWLowhnWA40ah42vH9no4ftz6LFeKzsHaX0EC7JmDe0iE1N1Ch4qM9%2BG%2FR6%2BJAxis0NSy6hphaJOWPGD1AGHVLpJ7oS1IB5LXaBcQ7VHigbUeUp6sDCNr6ni7hz0%2FrJh2rBz2nAEqDEwZpvuu50pXN%2BazTcPms0MHCudryoj%2B%2BqWo%2FnrY8CCW%2B26KnCLfMYupfOwD1uLE%2FiIxXhyYsScojEKzZLy5xEgrfMR3hU4PrkLC0rFXEtqf2NZ5WyUdLH7%2FYTxao8YlrwtdLsP7%2BY%2FH0iH%2B6sfLowpWm78Lsxb5IewkRs9UWarRvM0oYBy5u5yPEtrwsUNtd4GKyCJx%2B%2BWA4wrQt0zA96KWCHPs4%2Ba1Baya36JS%2BvA63WKK8xLvZG%2Bnkw48n%2Fjt5%2F6yNxMhPf9jDstuiWvRfTvnwidND4L6dASyMdptnGni8eEX8um5QhkM9ymKPUS5aYL9nSEoDp6q5CwjzafG%2FMMaiqsQGOqUBRx6iDU0xZlScREi9HZxlPkLI8PSbcUvEdSDjmWTF82MRC2IrGKpLEjhTr5e925l4q6wHcQe9D0tZzVQz06YsT7%2FltxS6IaZwY4%2BomE%2FhiwQK31wr3arp1ZkmdFZoxQ1FeQaCR%2FgR0F%2F60D2igluOcO024JYPdes5YSBvHteliK%2Fsua3ISkevgdswxqAWu8gM%2B8fpPWuT3nKIGuCl17ccXNyazPix&X-Amz-Signature=56370777e8885f48da0b1d330e60a0f9d03edfb3be1d88861845e5826ad0cb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRVVX23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVbnR1DV5BSdZMMLn%2FyHlE%2BWVH23RygODu80OfcvBpBAiEA8nfy9fsnlFoN%2Ftfytpns6NExg577QkPGOrIT%2B2kJ2FcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMbXTaME6pgI0bBIircA5hn0zQlJK9cm%2Fy2ZfPzF%2BwGRv7%2FqvEOBO8Dl7y0suMU8S0iNKOwhLkt02WWx23o6j205wK0VBOKEjEKotMaQCTXUbzcW8zlYLwQVma7pAsGLKwzAzofcOQvjgWsah%2By5d6Rq0fPLczz3Ok0nylCPylDhdrkzRPWLowhnWA40ah42vH9no4ftz6LFeKzsHaX0EC7JmDe0iE1N1Ch4qM9%2BG%2FR6%2BJAxis0NSy6hphaJOWPGD1AGHVLpJ7oS1IB5LXaBcQ7VHigbUeUp6sDCNr6ni7hz0%2FrJh2rBz2nAEqDEwZpvuu50pXN%2BazTcPms0MHCudryoj%2B%2BqWo%2FnrY8CCW%2B26KnCLfMYupfOwD1uLE%2FiIxXhyYsScojEKzZLy5xEgrfMR3hU4PrkLC0rFXEtqf2NZ5WyUdLH7%2FYTxao8YlrwtdLsP7%2BY%2FH0iH%2B6sfLowpWm78Lsxb5IewkRs9UWarRvM0oYBy5u5yPEtrwsUNtd4GKyCJx%2B%2BWA4wrQt0zA96KWCHPs4%2Ba1Baya36JS%2BvA63WKK8xLvZG%2Bnkw48n%2Fjt5%2F6yNxMhPf9jDstuiWvRfTvnwidND4L6dASyMdptnGni8eEX8um5QhkM9ymKPUS5aYL9nSEoDp6q5CwjzafG%2FMMaiqsQGOqUBRx6iDU0xZlScREi9HZxlPkLI8PSbcUvEdSDjmWTF82MRC2IrGKpLEjhTr5e925l4q6wHcQe9D0tZzVQz06YsT7%2FltxS6IaZwY4%2BomE%2FhiwQK31wr3arp1ZkmdFZoxQ1FeQaCR%2FgR0F%2F60D2igluOcO024JYPdes5YSBvHteliK%2Fsua3ISkevgdswxqAWu8gM%2B8fpPWuT3nKIGuCl17ccXNyazPix&X-Amz-Signature=802478cce2cd0ed9561b22c37bca27cc6a068ba1087f6ed0795b9382fed17bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRVVX23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVbnR1DV5BSdZMMLn%2FyHlE%2BWVH23RygODu80OfcvBpBAiEA8nfy9fsnlFoN%2Ftfytpns6NExg577QkPGOrIT%2B2kJ2FcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMbXTaME6pgI0bBIircA5hn0zQlJK9cm%2Fy2ZfPzF%2BwGRv7%2FqvEOBO8Dl7y0suMU8S0iNKOwhLkt02WWx23o6j205wK0VBOKEjEKotMaQCTXUbzcW8zlYLwQVma7pAsGLKwzAzofcOQvjgWsah%2By5d6Rq0fPLczz3Ok0nylCPylDhdrkzRPWLowhnWA40ah42vH9no4ftz6LFeKzsHaX0EC7JmDe0iE1N1Ch4qM9%2BG%2FR6%2BJAxis0NSy6hphaJOWPGD1AGHVLpJ7oS1IB5LXaBcQ7VHigbUeUp6sDCNr6ni7hz0%2FrJh2rBz2nAEqDEwZpvuu50pXN%2BazTcPms0MHCudryoj%2B%2BqWo%2FnrY8CCW%2B26KnCLfMYupfOwD1uLE%2FiIxXhyYsScojEKzZLy5xEgrfMR3hU4PrkLC0rFXEtqf2NZ5WyUdLH7%2FYTxao8YlrwtdLsP7%2BY%2FH0iH%2B6sfLowpWm78Lsxb5IewkRs9UWarRvM0oYBy5u5yPEtrwsUNtd4GKyCJx%2B%2BWA4wrQt0zA96KWCHPs4%2Ba1Baya36JS%2BvA63WKK8xLvZG%2Bnkw48n%2Fjt5%2F6yNxMhPf9jDstuiWvRfTvnwidND4L6dASyMdptnGni8eEX8um5QhkM9ymKPUS5aYL9nSEoDp6q5CwjzafG%2FMMaiqsQGOqUBRx6iDU0xZlScREi9HZxlPkLI8PSbcUvEdSDjmWTF82MRC2IrGKpLEjhTr5e925l4q6wHcQe9D0tZzVQz06YsT7%2FltxS6IaZwY4%2BomE%2FhiwQK31wr3arp1ZkmdFZoxQ1FeQaCR%2FgR0F%2F60D2igluOcO024JYPdes5YSBvHteliK%2Fsua3ISkevgdswxqAWu8gM%2B8fpPWuT3nKIGuCl17ccXNyazPix&X-Amz-Signature=4d32aaa6a1986d178f79015d7638f06a215d36459b45c5f40fe4847b355b3884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRVVX23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVbnR1DV5BSdZMMLn%2FyHlE%2BWVH23RygODu80OfcvBpBAiEA8nfy9fsnlFoN%2Ftfytpns6NExg577QkPGOrIT%2B2kJ2FcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMbXTaME6pgI0bBIircA5hn0zQlJK9cm%2Fy2ZfPzF%2BwGRv7%2FqvEOBO8Dl7y0suMU8S0iNKOwhLkt02WWx23o6j205wK0VBOKEjEKotMaQCTXUbzcW8zlYLwQVma7pAsGLKwzAzofcOQvjgWsah%2By5d6Rq0fPLczz3Ok0nylCPylDhdrkzRPWLowhnWA40ah42vH9no4ftz6LFeKzsHaX0EC7JmDe0iE1N1Ch4qM9%2BG%2FR6%2BJAxis0NSy6hphaJOWPGD1AGHVLpJ7oS1IB5LXaBcQ7VHigbUeUp6sDCNr6ni7hz0%2FrJh2rBz2nAEqDEwZpvuu50pXN%2BazTcPms0MHCudryoj%2B%2BqWo%2FnrY8CCW%2B26KnCLfMYupfOwD1uLE%2FiIxXhyYsScojEKzZLy5xEgrfMR3hU4PrkLC0rFXEtqf2NZ5WyUdLH7%2FYTxao8YlrwtdLsP7%2BY%2FH0iH%2B6sfLowpWm78Lsxb5IewkRs9UWarRvM0oYBy5u5yPEtrwsUNtd4GKyCJx%2B%2BWA4wrQt0zA96KWCHPs4%2Ba1Baya36JS%2BvA63WKK8xLvZG%2Bnkw48n%2Fjt5%2F6yNxMhPf9jDstuiWvRfTvnwidND4L6dASyMdptnGni8eEX8um5QhkM9ymKPUS5aYL9nSEoDp6q5CwjzafG%2FMMaiqsQGOqUBRx6iDU0xZlScREi9HZxlPkLI8PSbcUvEdSDjmWTF82MRC2IrGKpLEjhTr5e925l4q6wHcQe9D0tZzVQz06YsT7%2FltxS6IaZwY4%2BomE%2FhiwQK31wr3arp1ZkmdFZoxQ1FeQaCR%2FgR0F%2F60D2igluOcO024JYPdes5YSBvHteliK%2Fsua3ISkevgdswxqAWu8gM%2B8fpPWuT3nKIGuCl17ccXNyazPix&X-Amz-Signature=f4fe866b12414b7bc4f5b14cee91f6db358701513a3569c1a220f249e5b18dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRVVX23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVbnR1DV5BSdZMMLn%2FyHlE%2BWVH23RygODu80OfcvBpBAiEA8nfy9fsnlFoN%2Ftfytpns6NExg577QkPGOrIT%2B2kJ2FcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMbXTaME6pgI0bBIircA5hn0zQlJK9cm%2Fy2ZfPzF%2BwGRv7%2FqvEOBO8Dl7y0suMU8S0iNKOwhLkt02WWx23o6j205wK0VBOKEjEKotMaQCTXUbzcW8zlYLwQVma7pAsGLKwzAzofcOQvjgWsah%2By5d6Rq0fPLczz3Ok0nylCPylDhdrkzRPWLowhnWA40ah42vH9no4ftz6LFeKzsHaX0EC7JmDe0iE1N1Ch4qM9%2BG%2FR6%2BJAxis0NSy6hphaJOWPGD1AGHVLpJ7oS1IB5LXaBcQ7VHigbUeUp6sDCNr6ni7hz0%2FrJh2rBz2nAEqDEwZpvuu50pXN%2BazTcPms0MHCudryoj%2B%2BqWo%2FnrY8CCW%2B26KnCLfMYupfOwD1uLE%2FiIxXhyYsScojEKzZLy5xEgrfMR3hU4PrkLC0rFXEtqf2NZ5WyUdLH7%2FYTxao8YlrwtdLsP7%2BY%2FH0iH%2B6sfLowpWm78Lsxb5IewkRs9UWarRvM0oYBy5u5yPEtrwsUNtd4GKyCJx%2B%2BWA4wrQt0zA96KWCHPs4%2Ba1Baya36JS%2BvA63WKK8xLvZG%2Bnkw48n%2Fjt5%2F6yNxMhPf9jDstuiWvRfTvnwidND4L6dASyMdptnGni8eEX8um5QhkM9ymKPUS5aYL9nSEoDp6q5CwjzafG%2FMMaiqsQGOqUBRx6iDU0xZlScREi9HZxlPkLI8PSbcUvEdSDjmWTF82MRC2IrGKpLEjhTr5e925l4q6wHcQe9D0tZzVQz06YsT7%2FltxS6IaZwY4%2BomE%2FhiwQK31wr3arp1ZkmdFZoxQ1FeQaCR%2FgR0F%2F60D2igluOcO024JYPdes5YSBvHteliK%2Fsua3ISkevgdswxqAWu8gM%2B8fpPWuT3nKIGuCl17ccXNyazPix&X-Amz-Signature=06cf09abce3e1313ba13db4c6698e5e91fd790e6554867a1e5add183c45298a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

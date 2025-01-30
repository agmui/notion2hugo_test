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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662423M3NE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmKJh8KQGuvpNfEtAOVaf%2FdMecqVxZUJqMQq86TbBIMAiEA550AwY%2Fe2i%2BSU5qWKW5fiWTyj8RwSW7sCHitU9%2F8DxUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPCAopxN2zr2IWRhCrcA%2FeyBHNnSTfWhtRV1BctZx47vNaIUn3nbq8ypXnnpWpuiUHx273%2Ft1ebTy2BzwUK%2FZ23HLJPVTubjc%2Fh8M3XKet3RjJrkQ3IBhKH%2BrH%2BiU0ONsOqK99BmYaHDsYSWBbGXhizwgdWjmU6quUR7dNhRzmn%2B8pCbtGBsfMn6teccNcDEJFOOSDRCCq4MbRUdHVa2Z5A3ZD45c1QNMBnpR8lS4uB8Y2e4ZMIfcJwyOhmKsa8DC6uN%2FBbcHY3fwIiAXsJXc%2FX4KfOhDwuX21Vtx2SnG%2BsNCH6Tlnu7lpvjX3GjRjsrzRAEzk%2FAfX4hOApBRr2A%2BxZhbAXlykwGRiqtkm2wkkRExeWCw64gYKlQALAKwoB53qUDMrtLMauGTfe%2BGCbBPP%2BdATvNPLRBA3tvDFhknYXMqpj73BJns63rlOXsdm1oo9ho4ij1B6Ug0egs8EZctS%2BQpAsDku%2FzERFwsqTcZ2K5QDxRFPj%2B7rryWA%2FNlPUteY7O2bZbtZZK3cBwAGqFUpTSx8o4Xjl0i6ubQANpxOIkW1%2Bqu1%2FaLcOsLJp3zFyWO2NPTWt9zcdkP3ZB%2BfrDksiZ6SPg9k8OxjHNBVnSU%2FaLjZPpDddFkfCqoJ8Rpz1U2E%2BFKHmZZoQCERoMJHZ7rwGOqUBW6zoOOXThtbIXlX4pSze5f8C2bkXEbI%2FkBW00tPcNJRlI9HqfOdjziZbcjnz1Bo0pYcczkhVeeQq5O7EMLhMhrHROWFVI8eR%2BZpeyhfY5Gx3WjPpWDfIkAsGKJ0E6Ks09CxEy0e08CK4QF5aZTx%2BwLhP1y38%2BAjNr065qT8hI9tHU1F0UGMXvjz4UGi0Dyotbg86iuwMJXHAI69U0O5QIQyaSq%2Bv&X-Amz-Signature=0dcc888820cd90b824c0e82cc166b12d51aaae07df502bca63c282f7bec66f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662423M3NE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmKJh8KQGuvpNfEtAOVaf%2FdMecqVxZUJqMQq86TbBIMAiEA550AwY%2Fe2i%2BSU5qWKW5fiWTyj8RwSW7sCHitU9%2F8DxUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPCAopxN2zr2IWRhCrcA%2FeyBHNnSTfWhtRV1BctZx47vNaIUn3nbq8ypXnnpWpuiUHx273%2Ft1ebTy2BzwUK%2FZ23HLJPVTubjc%2Fh8M3XKet3RjJrkQ3IBhKH%2BrH%2BiU0ONsOqK99BmYaHDsYSWBbGXhizwgdWjmU6quUR7dNhRzmn%2B8pCbtGBsfMn6teccNcDEJFOOSDRCCq4MbRUdHVa2Z5A3ZD45c1QNMBnpR8lS4uB8Y2e4ZMIfcJwyOhmKsa8DC6uN%2FBbcHY3fwIiAXsJXc%2FX4KfOhDwuX21Vtx2SnG%2BsNCH6Tlnu7lpvjX3GjRjsrzRAEzk%2FAfX4hOApBRr2A%2BxZhbAXlykwGRiqtkm2wkkRExeWCw64gYKlQALAKwoB53qUDMrtLMauGTfe%2BGCbBPP%2BdATvNPLRBA3tvDFhknYXMqpj73BJns63rlOXsdm1oo9ho4ij1B6Ug0egs8EZctS%2BQpAsDku%2FzERFwsqTcZ2K5QDxRFPj%2B7rryWA%2FNlPUteY7O2bZbtZZK3cBwAGqFUpTSx8o4Xjl0i6ubQANpxOIkW1%2Bqu1%2FaLcOsLJp3zFyWO2NPTWt9zcdkP3ZB%2BfrDksiZ6SPg9k8OxjHNBVnSU%2FaLjZPpDddFkfCqoJ8Rpz1U2E%2BFKHmZZoQCERoMJHZ7rwGOqUBW6zoOOXThtbIXlX4pSze5f8C2bkXEbI%2FkBW00tPcNJRlI9HqfOdjziZbcjnz1Bo0pYcczkhVeeQq5O7EMLhMhrHROWFVI8eR%2BZpeyhfY5Gx3WjPpWDfIkAsGKJ0E6Ks09CxEy0e08CK4QF5aZTx%2BwLhP1y38%2BAjNr065qT8hI9tHU1F0UGMXvjz4UGi0Dyotbg86iuwMJXHAI69U0O5QIQyaSq%2Bv&X-Amz-Signature=1e33270d90ba9364bf2ce74504a9f12b44acd77f85765a6b3d579070e34793f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662423M3NE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmKJh8KQGuvpNfEtAOVaf%2FdMecqVxZUJqMQq86TbBIMAiEA550AwY%2Fe2i%2BSU5qWKW5fiWTyj8RwSW7sCHitU9%2F8DxUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPCAopxN2zr2IWRhCrcA%2FeyBHNnSTfWhtRV1BctZx47vNaIUn3nbq8ypXnnpWpuiUHx273%2Ft1ebTy2BzwUK%2FZ23HLJPVTubjc%2Fh8M3XKet3RjJrkQ3IBhKH%2BrH%2BiU0ONsOqK99BmYaHDsYSWBbGXhizwgdWjmU6quUR7dNhRzmn%2B8pCbtGBsfMn6teccNcDEJFOOSDRCCq4MbRUdHVa2Z5A3ZD45c1QNMBnpR8lS4uB8Y2e4ZMIfcJwyOhmKsa8DC6uN%2FBbcHY3fwIiAXsJXc%2FX4KfOhDwuX21Vtx2SnG%2BsNCH6Tlnu7lpvjX3GjRjsrzRAEzk%2FAfX4hOApBRr2A%2BxZhbAXlykwGRiqtkm2wkkRExeWCw64gYKlQALAKwoB53qUDMrtLMauGTfe%2BGCbBPP%2BdATvNPLRBA3tvDFhknYXMqpj73BJns63rlOXsdm1oo9ho4ij1B6Ug0egs8EZctS%2BQpAsDku%2FzERFwsqTcZ2K5QDxRFPj%2B7rryWA%2FNlPUteY7O2bZbtZZK3cBwAGqFUpTSx8o4Xjl0i6ubQANpxOIkW1%2Bqu1%2FaLcOsLJp3zFyWO2NPTWt9zcdkP3ZB%2BfrDksiZ6SPg9k8OxjHNBVnSU%2FaLjZPpDddFkfCqoJ8Rpz1U2E%2BFKHmZZoQCERoMJHZ7rwGOqUBW6zoOOXThtbIXlX4pSze5f8C2bkXEbI%2FkBW00tPcNJRlI9HqfOdjziZbcjnz1Bo0pYcczkhVeeQq5O7EMLhMhrHROWFVI8eR%2BZpeyhfY5Gx3WjPpWDfIkAsGKJ0E6Ks09CxEy0e08CK4QF5aZTx%2BwLhP1y38%2BAjNr065qT8hI9tHU1F0UGMXvjz4UGi0Dyotbg86iuwMJXHAI69U0O5QIQyaSq%2Bv&X-Amz-Signature=f1bba7516c86e9d9922866ad4142d85cd53dece4aaf2e2701ed0ba445024624c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662423M3NE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmKJh8KQGuvpNfEtAOVaf%2FdMecqVxZUJqMQq86TbBIMAiEA550AwY%2Fe2i%2BSU5qWKW5fiWTyj8RwSW7sCHitU9%2F8DxUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPCAopxN2zr2IWRhCrcA%2FeyBHNnSTfWhtRV1BctZx47vNaIUn3nbq8ypXnnpWpuiUHx273%2Ft1ebTy2BzwUK%2FZ23HLJPVTubjc%2Fh8M3XKet3RjJrkQ3IBhKH%2BrH%2BiU0ONsOqK99BmYaHDsYSWBbGXhizwgdWjmU6quUR7dNhRzmn%2B8pCbtGBsfMn6teccNcDEJFOOSDRCCq4MbRUdHVa2Z5A3ZD45c1QNMBnpR8lS4uB8Y2e4ZMIfcJwyOhmKsa8DC6uN%2FBbcHY3fwIiAXsJXc%2FX4KfOhDwuX21Vtx2SnG%2BsNCH6Tlnu7lpvjX3GjRjsrzRAEzk%2FAfX4hOApBRr2A%2BxZhbAXlykwGRiqtkm2wkkRExeWCw64gYKlQALAKwoB53qUDMrtLMauGTfe%2BGCbBPP%2BdATvNPLRBA3tvDFhknYXMqpj73BJns63rlOXsdm1oo9ho4ij1B6Ug0egs8EZctS%2BQpAsDku%2FzERFwsqTcZ2K5QDxRFPj%2B7rryWA%2FNlPUteY7O2bZbtZZK3cBwAGqFUpTSx8o4Xjl0i6ubQANpxOIkW1%2Bqu1%2FaLcOsLJp3zFyWO2NPTWt9zcdkP3ZB%2BfrDksiZ6SPg9k8OxjHNBVnSU%2FaLjZPpDddFkfCqoJ8Rpz1U2E%2BFKHmZZoQCERoMJHZ7rwGOqUBW6zoOOXThtbIXlX4pSze5f8C2bkXEbI%2FkBW00tPcNJRlI9HqfOdjziZbcjnz1Bo0pYcczkhVeeQq5O7EMLhMhrHROWFVI8eR%2BZpeyhfY5Gx3WjPpWDfIkAsGKJ0E6Ks09CxEy0e08CK4QF5aZTx%2BwLhP1y38%2BAjNr065qT8hI9tHU1F0UGMXvjz4UGi0Dyotbg86iuwMJXHAI69U0O5QIQyaSq%2Bv&X-Amz-Signature=9ba67cda684e0af3b9883d29fd631bebae0c91190be784f341570934db1b1748&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662423M3NE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmKJh8KQGuvpNfEtAOVaf%2FdMecqVxZUJqMQq86TbBIMAiEA550AwY%2Fe2i%2BSU5qWKW5fiWTyj8RwSW7sCHitU9%2F8DxUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPCAopxN2zr2IWRhCrcA%2FeyBHNnSTfWhtRV1BctZx47vNaIUn3nbq8ypXnnpWpuiUHx273%2Ft1ebTy2BzwUK%2FZ23HLJPVTubjc%2Fh8M3XKet3RjJrkQ3IBhKH%2BrH%2BiU0ONsOqK99BmYaHDsYSWBbGXhizwgdWjmU6quUR7dNhRzmn%2B8pCbtGBsfMn6teccNcDEJFOOSDRCCq4MbRUdHVa2Z5A3ZD45c1QNMBnpR8lS4uB8Y2e4ZMIfcJwyOhmKsa8DC6uN%2FBbcHY3fwIiAXsJXc%2FX4KfOhDwuX21Vtx2SnG%2BsNCH6Tlnu7lpvjX3GjRjsrzRAEzk%2FAfX4hOApBRr2A%2BxZhbAXlykwGRiqtkm2wkkRExeWCw64gYKlQALAKwoB53qUDMrtLMauGTfe%2BGCbBPP%2BdATvNPLRBA3tvDFhknYXMqpj73BJns63rlOXsdm1oo9ho4ij1B6Ug0egs8EZctS%2BQpAsDku%2FzERFwsqTcZ2K5QDxRFPj%2B7rryWA%2FNlPUteY7O2bZbtZZK3cBwAGqFUpTSx8o4Xjl0i6ubQANpxOIkW1%2Bqu1%2FaLcOsLJp3zFyWO2NPTWt9zcdkP3ZB%2BfrDksiZ6SPg9k8OxjHNBVnSU%2FaLjZPpDddFkfCqoJ8Rpz1U2E%2BFKHmZZoQCERoMJHZ7rwGOqUBW6zoOOXThtbIXlX4pSze5f8C2bkXEbI%2FkBW00tPcNJRlI9HqfOdjziZbcjnz1Bo0pYcczkhVeeQq5O7EMLhMhrHROWFVI8eR%2BZpeyhfY5Gx3WjPpWDfIkAsGKJ0E6Ks09CxEy0e08CK4QF5aZTx%2BwLhP1y38%2BAjNr065qT8hI9tHU1F0UGMXvjz4UGi0Dyotbg86iuwMJXHAI69U0O5QIQyaSq%2Bv&X-Amz-Signature=9e2b78a39c48606728401128b58edcc4b32f48bb2dc49c0a8ad3579f4a47357b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662423M3NE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmKJh8KQGuvpNfEtAOVaf%2FdMecqVxZUJqMQq86TbBIMAiEA550AwY%2Fe2i%2BSU5qWKW5fiWTyj8RwSW7sCHitU9%2F8DxUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPCAopxN2zr2IWRhCrcA%2FeyBHNnSTfWhtRV1BctZx47vNaIUn3nbq8ypXnnpWpuiUHx273%2Ft1ebTy2BzwUK%2FZ23HLJPVTubjc%2Fh8M3XKet3RjJrkQ3IBhKH%2BrH%2BiU0ONsOqK99BmYaHDsYSWBbGXhizwgdWjmU6quUR7dNhRzmn%2B8pCbtGBsfMn6teccNcDEJFOOSDRCCq4MbRUdHVa2Z5A3ZD45c1QNMBnpR8lS4uB8Y2e4ZMIfcJwyOhmKsa8DC6uN%2FBbcHY3fwIiAXsJXc%2FX4KfOhDwuX21Vtx2SnG%2BsNCH6Tlnu7lpvjX3GjRjsrzRAEzk%2FAfX4hOApBRr2A%2BxZhbAXlykwGRiqtkm2wkkRExeWCw64gYKlQALAKwoB53qUDMrtLMauGTfe%2BGCbBPP%2BdATvNPLRBA3tvDFhknYXMqpj73BJns63rlOXsdm1oo9ho4ij1B6Ug0egs8EZctS%2BQpAsDku%2FzERFwsqTcZ2K5QDxRFPj%2B7rryWA%2FNlPUteY7O2bZbtZZK3cBwAGqFUpTSx8o4Xjl0i6ubQANpxOIkW1%2Bqu1%2FaLcOsLJp3zFyWO2NPTWt9zcdkP3ZB%2BfrDksiZ6SPg9k8OxjHNBVnSU%2FaLjZPpDddFkfCqoJ8Rpz1U2E%2BFKHmZZoQCERoMJHZ7rwGOqUBW6zoOOXThtbIXlX4pSze5f8C2bkXEbI%2FkBW00tPcNJRlI9HqfOdjziZbcjnz1Bo0pYcczkhVeeQq5O7EMLhMhrHROWFVI8eR%2BZpeyhfY5Gx3WjPpWDfIkAsGKJ0E6Ks09CxEy0e08CK4QF5aZTx%2BwLhP1y38%2BAjNr065qT8hI9tHU1F0UGMXvjz4UGi0Dyotbg86iuwMJXHAI69U0O5QIQyaSq%2Bv&X-Amz-Signature=44737543522408704e370fc05cb92e5555fc0eb64d0c1e3c3258effc7e9c9df0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662423M3NE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmKJh8KQGuvpNfEtAOVaf%2FdMecqVxZUJqMQq86TbBIMAiEA550AwY%2Fe2i%2BSU5qWKW5fiWTyj8RwSW7sCHitU9%2F8DxUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPCAopxN2zr2IWRhCrcA%2FeyBHNnSTfWhtRV1BctZx47vNaIUn3nbq8ypXnnpWpuiUHx273%2Ft1ebTy2BzwUK%2FZ23HLJPVTubjc%2Fh8M3XKet3RjJrkQ3IBhKH%2BrH%2BiU0ONsOqK99BmYaHDsYSWBbGXhizwgdWjmU6quUR7dNhRzmn%2B8pCbtGBsfMn6teccNcDEJFOOSDRCCq4MbRUdHVa2Z5A3ZD45c1QNMBnpR8lS4uB8Y2e4ZMIfcJwyOhmKsa8DC6uN%2FBbcHY3fwIiAXsJXc%2FX4KfOhDwuX21Vtx2SnG%2BsNCH6Tlnu7lpvjX3GjRjsrzRAEzk%2FAfX4hOApBRr2A%2BxZhbAXlykwGRiqtkm2wkkRExeWCw64gYKlQALAKwoB53qUDMrtLMauGTfe%2BGCbBPP%2BdATvNPLRBA3tvDFhknYXMqpj73BJns63rlOXsdm1oo9ho4ij1B6Ug0egs8EZctS%2BQpAsDku%2FzERFwsqTcZ2K5QDxRFPj%2B7rryWA%2FNlPUteY7O2bZbtZZK3cBwAGqFUpTSx8o4Xjl0i6ubQANpxOIkW1%2Bqu1%2FaLcOsLJp3zFyWO2NPTWt9zcdkP3ZB%2BfrDksiZ6SPg9k8OxjHNBVnSU%2FaLjZPpDddFkfCqoJ8Rpz1U2E%2BFKHmZZoQCERoMJHZ7rwGOqUBW6zoOOXThtbIXlX4pSze5f8C2bkXEbI%2FkBW00tPcNJRlI9HqfOdjziZbcjnz1Bo0pYcczkhVeeQq5O7EMLhMhrHROWFVI8eR%2BZpeyhfY5Gx3WjPpWDfIkAsGKJ0E6Ks09CxEy0e08CK4QF5aZTx%2BwLhP1y38%2BAjNr065qT8hI9tHU1F0UGMXvjz4UGi0Dyotbg86iuwMJXHAI69U0O5QIQyaSq%2Bv&X-Amz-Signature=97932d3951cb4fa3e4404de4bc39c3e3c92ed4bc912cdf7b30264d1449b43045&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662423M3NE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmKJh8KQGuvpNfEtAOVaf%2FdMecqVxZUJqMQq86TbBIMAiEA550AwY%2Fe2i%2BSU5qWKW5fiWTyj8RwSW7sCHitU9%2F8DxUqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPCAopxN2zr2IWRhCrcA%2FeyBHNnSTfWhtRV1BctZx47vNaIUn3nbq8ypXnnpWpuiUHx273%2Ft1ebTy2BzwUK%2FZ23HLJPVTubjc%2Fh8M3XKet3RjJrkQ3IBhKH%2BrH%2BiU0ONsOqK99BmYaHDsYSWBbGXhizwgdWjmU6quUR7dNhRzmn%2B8pCbtGBsfMn6teccNcDEJFOOSDRCCq4MbRUdHVa2Z5A3ZD45c1QNMBnpR8lS4uB8Y2e4ZMIfcJwyOhmKsa8DC6uN%2FBbcHY3fwIiAXsJXc%2FX4KfOhDwuX21Vtx2SnG%2BsNCH6Tlnu7lpvjX3GjRjsrzRAEzk%2FAfX4hOApBRr2A%2BxZhbAXlykwGRiqtkm2wkkRExeWCw64gYKlQALAKwoB53qUDMrtLMauGTfe%2BGCbBPP%2BdATvNPLRBA3tvDFhknYXMqpj73BJns63rlOXsdm1oo9ho4ij1B6Ug0egs8EZctS%2BQpAsDku%2FzERFwsqTcZ2K5QDxRFPj%2B7rryWA%2FNlPUteY7O2bZbtZZK3cBwAGqFUpTSx8o4Xjl0i6ubQANpxOIkW1%2Bqu1%2FaLcOsLJp3zFyWO2NPTWt9zcdkP3ZB%2BfrDksiZ6SPg9k8OxjHNBVnSU%2FaLjZPpDddFkfCqoJ8Rpz1U2E%2BFKHmZZoQCERoMJHZ7rwGOqUBW6zoOOXThtbIXlX4pSze5f8C2bkXEbI%2FkBW00tPcNJRlI9HqfOdjziZbcjnz1Bo0pYcczkhVeeQq5O7EMLhMhrHROWFVI8eR%2BZpeyhfY5Gx3WjPpWDfIkAsGKJ0E6Ks09CxEy0e08CK4QF5aZTx%2BwLhP1y38%2BAjNr065qT8hI9tHU1F0UGMXvjz4UGi0Dyotbg86iuwMJXHAI69U0O5QIQyaSq%2Bv&X-Amz-Signature=b0796087f870634a8345e199132cc3914ac4b7bf0ba4a69e6663bf4586daf74d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

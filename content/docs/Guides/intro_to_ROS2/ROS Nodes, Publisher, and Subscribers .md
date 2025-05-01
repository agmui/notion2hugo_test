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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJ6IIHC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHknfwq3l8cLXzTcvuySkSPNN4j6FKH7qx1GEHVkeCtsAiEAh%2FDvuMW8fpi0jG4IO%2FyAPTtxQWSSLAup84Q%2BZJ4f4LMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzNkT65hV9hAADxqSrcA2W603yIjsrD9gYtkO1hncA8inVypKrwFkqyQ0hX%2B2GBoz6fxmyBr8f4%2FwgsfHBddEaS6SEl1FXJdNsMLs4HJB4RbDIFGIMK6hZkUoMCvt9KNhAGt0gcBsyHpBYlYZhwlFGsvEToV%2BhRN3T7mb1I3DThmH2Fq48DW633ZDlNeD84%2Ba1UYb%2Fef105yxpL8hYckkKXHCckvT5mRW7ej7XkUmqeIXeLWAXC4xtUUL17m0U7fDnd5fhBdXZSlzIrR7e%2BJ5sb8RSkjaKXYPRpzZgjxfVsyM7PsKoiTGH4fPXY%2F%2FAf2NINjstHWNZ7Z3TGDeHIrB4j8%2F0yJqFltrH7coTxOf3vjUx1AuTlHGiIHAmgzl9Cy8m09mwUErc0vZOsqI%2BleLtS9ZeADs%2Fh1YDiOZmAm2Gqp29tLIZb%2FY%2Fl7lMBtuMKlx6mgnDXb0UXUEuPSJUIUUO1E8FlygTe7UrrdyYkXfINtRQaB3A9GLgQK7Csl6zc%2BUsinVsNBTB4fj%2FhvGARFmXtpumo0pqJgDvksy0Dvim%2Fi%2BCyG98LRr%2BYRds3v35GQiLBuaZ6X6pYvXwJCHsmVT8j7qVHUt298Ti1BfexVeQLC1%2BiP4mJw7igw%2FjEssJLHGc7SK4t6USckhFMMPqrz8AGOqUBqwIpHKtedgz%2B4k3W3myZ%2B3gWxah6YVkTv7sgtQWfnaih6XIPhgGhGeG4sMe%2Bgz82e6sUHs9heHMdznEgDxAmuBLFAiI7f4FXqrWP%2BCRP%2FlRGOWJZ0ZyXU1Y92gxZx5yXwO0EwMs2mPL2ZXKifM1wkeOntqRzAOSqOO0UOI2KtOx7zm%2FyvAWhVMXDTMRPgUCmAsTluCt6iLe0iTeQttaxM%2FOZ5jCB&X-Amz-Signature=95755220f209300a89bdb887fa9fc2b3b03460b9ecc0e08d8d13d956d0f07c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJ6IIHC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHknfwq3l8cLXzTcvuySkSPNN4j6FKH7qx1GEHVkeCtsAiEAh%2FDvuMW8fpi0jG4IO%2FyAPTtxQWSSLAup84Q%2BZJ4f4LMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzNkT65hV9hAADxqSrcA2W603yIjsrD9gYtkO1hncA8inVypKrwFkqyQ0hX%2B2GBoz6fxmyBr8f4%2FwgsfHBddEaS6SEl1FXJdNsMLs4HJB4RbDIFGIMK6hZkUoMCvt9KNhAGt0gcBsyHpBYlYZhwlFGsvEToV%2BhRN3T7mb1I3DThmH2Fq48DW633ZDlNeD84%2Ba1UYb%2Fef105yxpL8hYckkKXHCckvT5mRW7ej7XkUmqeIXeLWAXC4xtUUL17m0U7fDnd5fhBdXZSlzIrR7e%2BJ5sb8RSkjaKXYPRpzZgjxfVsyM7PsKoiTGH4fPXY%2F%2FAf2NINjstHWNZ7Z3TGDeHIrB4j8%2F0yJqFltrH7coTxOf3vjUx1AuTlHGiIHAmgzl9Cy8m09mwUErc0vZOsqI%2BleLtS9ZeADs%2Fh1YDiOZmAm2Gqp29tLIZb%2FY%2Fl7lMBtuMKlx6mgnDXb0UXUEuPSJUIUUO1E8FlygTe7UrrdyYkXfINtRQaB3A9GLgQK7Csl6zc%2BUsinVsNBTB4fj%2FhvGARFmXtpumo0pqJgDvksy0Dvim%2Fi%2BCyG98LRr%2BYRds3v35GQiLBuaZ6X6pYvXwJCHsmVT8j7qVHUt298Ti1BfexVeQLC1%2BiP4mJw7igw%2FjEssJLHGc7SK4t6USckhFMMPqrz8AGOqUBqwIpHKtedgz%2B4k3W3myZ%2B3gWxah6YVkTv7sgtQWfnaih6XIPhgGhGeG4sMe%2Bgz82e6sUHs9heHMdznEgDxAmuBLFAiI7f4FXqrWP%2BCRP%2FlRGOWJZ0ZyXU1Y92gxZx5yXwO0EwMs2mPL2ZXKifM1wkeOntqRzAOSqOO0UOI2KtOx7zm%2FyvAWhVMXDTMRPgUCmAsTluCt6iLe0iTeQttaxM%2FOZ5jCB&X-Amz-Signature=11d1659640d35deeb63f8e21f2f050ceb2235c72949b81a40e3289a5f3386cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJ6IIHC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHknfwq3l8cLXzTcvuySkSPNN4j6FKH7qx1GEHVkeCtsAiEAh%2FDvuMW8fpi0jG4IO%2FyAPTtxQWSSLAup84Q%2BZJ4f4LMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzNkT65hV9hAADxqSrcA2W603yIjsrD9gYtkO1hncA8inVypKrwFkqyQ0hX%2B2GBoz6fxmyBr8f4%2FwgsfHBddEaS6SEl1FXJdNsMLs4HJB4RbDIFGIMK6hZkUoMCvt9KNhAGt0gcBsyHpBYlYZhwlFGsvEToV%2BhRN3T7mb1I3DThmH2Fq48DW633ZDlNeD84%2Ba1UYb%2Fef105yxpL8hYckkKXHCckvT5mRW7ej7XkUmqeIXeLWAXC4xtUUL17m0U7fDnd5fhBdXZSlzIrR7e%2BJ5sb8RSkjaKXYPRpzZgjxfVsyM7PsKoiTGH4fPXY%2F%2FAf2NINjstHWNZ7Z3TGDeHIrB4j8%2F0yJqFltrH7coTxOf3vjUx1AuTlHGiIHAmgzl9Cy8m09mwUErc0vZOsqI%2BleLtS9ZeADs%2Fh1YDiOZmAm2Gqp29tLIZb%2FY%2Fl7lMBtuMKlx6mgnDXb0UXUEuPSJUIUUO1E8FlygTe7UrrdyYkXfINtRQaB3A9GLgQK7Csl6zc%2BUsinVsNBTB4fj%2FhvGARFmXtpumo0pqJgDvksy0Dvim%2Fi%2BCyG98LRr%2BYRds3v35GQiLBuaZ6X6pYvXwJCHsmVT8j7qVHUt298Ti1BfexVeQLC1%2BiP4mJw7igw%2FjEssJLHGc7SK4t6USckhFMMPqrz8AGOqUBqwIpHKtedgz%2B4k3W3myZ%2B3gWxah6YVkTv7sgtQWfnaih6XIPhgGhGeG4sMe%2Bgz82e6sUHs9heHMdznEgDxAmuBLFAiI7f4FXqrWP%2BCRP%2FlRGOWJZ0ZyXU1Y92gxZx5yXwO0EwMs2mPL2ZXKifM1wkeOntqRzAOSqOO0UOI2KtOx7zm%2FyvAWhVMXDTMRPgUCmAsTluCt6iLe0iTeQttaxM%2FOZ5jCB&X-Amz-Signature=81b81c9d4875572364ce1eb0c28cbed18ce62b590a11660a42b18efe37d206e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJ6IIHC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHknfwq3l8cLXzTcvuySkSPNN4j6FKH7qx1GEHVkeCtsAiEAh%2FDvuMW8fpi0jG4IO%2FyAPTtxQWSSLAup84Q%2BZJ4f4LMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzNkT65hV9hAADxqSrcA2W603yIjsrD9gYtkO1hncA8inVypKrwFkqyQ0hX%2B2GBoz6fxmyBr8f4%2FwgsfHBddEaS6SEl1FXJdNsMLs4HJB4RbDIFGIMK6hZkUoMCvt9KNhAGt0gcBsyHpBYlYZhwlFGsvEToV%2BhRN3T7mb1I3DThmH2Fq48DW633ZDlNeD84%2Ba1UYb%2Fef105yxpL8hYckkKXHCckvT5mRW7ej7XkUmqeIXeLWAXC4xtUUL17m0U7fDnd5fhBdXZSlzIrR7e%2BJ5sb8RSkjaKXYPRpzZgjxfVsyM7PsKoiTGH4fPXY%2F%2FAf2NINjstHWNZ7Z3TGDeHIrB4j8%2F0yJqFltrH7coTxOf3vjUx1AuTlHGiIHAmgzl9Cy8m09mwUErc0vZOsqI%2BleLtS9ZeADs%2Fh1YDiOZmAm2Gqp29tLIZb%2FY%2Fl7lMBtuMKlx6mgnDXb0UXUEuPSJUIUUO1E8FlygTe7UrrdyYkXfINtRQaB3A9GLgQK7Csl6zc%2BUsinVsNBTB4fj%2FhvGARFmXtpumo0pqJgDvksy0Dvim%2Fi%2BCyG98LRr%2BYRds3v35GQiLBuaZ6X6pYvXwJCHsmVT8j7qVHUt298Ti1BfexVeQLC1%2BiP4mJw7igw%2FjEssJLHGc7SK4t6USckhFMMPqrz8AGOqUBqwIpHKtedgz%2B4k3W3myZ%2B3gWxah6YVkTv7sgtQWfnaih6XIPhgGhGeG4sMe%2Bgz82e6sUHs9heHMdznEgDxAmuBLFAiI7f4FXqrWP%2BCRP%2FlRGOWJZ0ZyXU1Y92gxZx5yXwO0EwMs2mPL2ZXKifM1wkeOntqRzAOSqOO0UOI2KtOx7zm%2FyvAWhVMXDTMRPgUCmAsTluCt6iLe0iTeQttaxM%2FOZ5jCB&X-Amz-Signature=1523cba9e6c4a9ede6734c12d77a65d5f5d34a6ca6656673954884eb66f12a79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJ6IIHC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHknfwq3l8cLXzTcvuySkSPNN4j6FKH7qx1GEHVkeCtsAiEAh%2FDvuMW8fpi0jG4IO%2FyAPTtxQWSSLAup84Q%2BZJ4f4LMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzNkT65hV9hAADxqSrcA2W603yIjsrD9gYtkO1hncA8inVypKrwFkqyQ0hX%2B2GBoz6fxmyBr8f4%2FwgsfHBddEaS6SEl1FXJdNsMLs4HJB4RbDIFGIMK6hZkUoMCvt9KNhAGt0gcBsyHpBYlYZhwlFGsvEToV%2BhRN3T7mb1I3DThmH2Fq48DW633ZDlNeD84%2Ba1UYb%2Fef105yxpL8hYckkKXHCckvT5mRW7ej7XkUmqeIXeLWAXC4xtUUL17m0U7fDnd5fhBdXZSlzIrR7e%2BJ5sb8RSkjaKXYPRpzZgjxfVsyM7PsKoiTGH4fPXY%2F%2FAf2NINjstHWNZ7Z3TGDeHIrB4j8%2F0yJqFltrH7coTxOf3vjUx1AuTlHGiIHAmgzl9Cy8m09mwUErc0vZOsqI%2BleLtS9ZeADs%2Fh1YDiOZmAm2Gqp29tLIZb%2FY%2Fl7lMBtuMKlx6mgnDXb0UXUEuPSJUIUUO1E8FlygTe7UrrdyYkXfINtRQaB3A9GLgQK7Csl6zc%2BUsinVsNBTB4fj%2FhvGARFmXtpumo0pqJgDvksy0Dvim%2Fi%2BCyG98LRr%2BYRds3v35GQiLBuaZ6X6pYvXwJCHsmVT8j7qVHUt298Ti1BfexVeQLC1%2BiP4mJw7igw%2FjEssJLHGc7SK4t6USckhFMMPqrz8AGOqUBqwIpHKtedgz%2B4k3W3myZ%2B3gWxah6YVkTv7sgtQWfnaih6XIPhgGhGeG4sMe%2Bgz82e6sUHs9heHMdznEgDxAmuBLFAiI7f4FXqrWP%2BCRP%2FlRGOWJZ0ZyXU1Y92gxZx5yXwO0EwMs2mPL2ZXKifM1wkeOntqRzAOSqOO0UOI2KtOx7zm%2FyvAWhVMXDTMRPgUCmAsTluCt6iLe0iTeQttaxM%2FOZ5jCB&X-Amz-Signature=4d5e0995b9f1f8e07488d6c49442a106b12667f214504df16118fdee23ff60ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJ6IIHC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHknfwq3l8cLXzTcvuySkSPNN4j6FKH7qx1GEHVkeCtsAiEAh%2FDvuMW8fpi0jG4IO%2FyAPTtxQWSSLAup84Q%2BZJ4f4LMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzNkT65hV9hAADxqSrcA2W603yIjsrD9gYtkO1hncA8inVypKrwFkqyQ0hX%2B2GBoz6fxmyBr8f4%2FwgsfHBddEaS6SEl1FXJdNsMLs4HJB4RbDIFGIMK6hZkUoMCvt9KNhAGt0gcBsyHpBYlYZhwlFGsvEToV%2BhRN3T7mb1I3DThmH2Fq48DW633ZDlNeD84%2Ba1UYb%2Fef105yxpL8hYckkKXHCckvT5mRW7ej7XkUmqeIXeLWAXC4xtUUL17m0U7fDnd5fhBdXZSlzIrR7e%2BJ5sb8RSkjaKXYPRpzZgjxfVsyM7PsKoiTGH4fPXY%2F%2FAf2NINjstHWNZ7Z3TGDeHIrB4j8%2F0yJqFltrH7coTxOf3vjUx1AuTlHGiIHAmgzl9Cy8m09mwUErc0vZOsqI%2BleLtS9ZeADs%2Fh1YDiOZmAm2Gqp29tLIZb%2FY%2Fl7lMBtuMKlx6mgnDXb0UXUEuPSJUIUUO1E8FlygTe7UrrdyYkXfINtRQaB3A9GLgQK7Csl6zc%2BUsinVsNBTB4fj%2FhvGARFmXtpumo0pqJgDvksy0Dvim%2Fi%2BCyG98LRr%2BYRds3v35GQiLBuaZ6X6pYvXwJCHsmVT8j7qVHUt298Ti1BfexVeQLC1%2BiP4mJw7igw%2FjEssJLHGc7SK4t6USckhFMMPqrz8AGOqUBqwIpHKtedgz%2B4k3W3myZ%2B3gWxah6YVkTv7sgtQWfnaih6XIPhgGhGeG4sMe%2Bgz82e6sUHs9heHMdznEgDxAmuBLFAiI7f4FXqrWP%2BCRP%2FlRGOWJZ0ZyXU1Y92gxZx5yXwO0EwMs2mPL2ZXKifM1wkeOntqRzAOSqOO0UOI2KtOx7zm%2FyvAWhVMXDTMRPgUCmAsTluCt6iLe0iTeQttaxM%2FOZ5jCB&X-Amz-Signature=188939e222e9386d9e94e80343ab625564e5400c6ce4d43f38aa76e6243f5abb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJ6IIHC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHknfwq3l8cLXzTcvuySkSPNN4j6FKH7qx1GEHVkeCtsAiEAh%2FDvuMW8fpi0jG4IO%2FyAPTtxQWSSLAup84Q%2BZJ4f4LMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzNkT65hV9hAADxqSrcA2W603yIjsrD9gYtkO1hncA8inVypKrwFkqyQ0hX%2B2GBoz6fxmyBr8f4%2FwgsfHBddEaS6SEl1FXJdNsMLs4HJB4RbDIFGIMK6hZkUoMCvt9KNhAGt0gcBsyHpBYlYZhwlFGsvEToV%2BhRN3T7mb1I3DThmH2Fq48DW633ZDlNeD84%2Ba1UYb%2Fef105yxpL8hYckkKXHCckvT5mRW7ej7XkUmqeIXeLWAXC4xtUUL17m0U7fDnd5fhBdXZSlzIrR7e%2BJ5sb8RSkjaKXYPRpzZgjxfVsyM7PsKoiTGH4fPXY%2F%2FAf2NINjstHWNZ7Z3TGDeHIrB4j8%2F0yJqFltrH7coTxOf3vjUx1AuTlHGiIHAmgzl9Cy8m09mwUErc0vZOsqI%2BleLtS9ZeADs%2Fh1YDiOZmAm2Gqp29tLIZb%2FY%2Fl7lMBtuMKlx6mgnDXb0UXUEuPSJUIUUO1E8FlygTe7UrrdyYkXfINtRQaB3A9GLgQK7Csl6zc%2BUsinVsNBTB4fj%2FhvGARFmXtpumo0pqJgDvksy0Dvim%2Fi%2BCyG98LRr%2BYRds3v35GQiLBuaZ6X6pYvXwJCHsmVT8j7qVHUt298Ti1BfexVeQLC1%2BiP4mJw7igw%2FjEssJLHGc7SK4t6USckhFMMPqrz8AGOqUBqwIpHKtedgz%2B4k3W3myZ%2B3gWxah6YVkTv7sgtQWfnaih6XIPhgGhGeG4sMe%2Bgz82e6sUHs9heHMdznEgDxAmuBLFAiI7f4FXqrWP%2BCRP%2FlRGOWJZ0ZyXU1Y92gxZx5yXwO0EwMs2mPL2ZXKifM1wkeOntqRzAOSqOO0UOI2KtOx7zm%2FyvAWhVMXDTMRPgUCmAsTluCt6iLe0iTeQttaxM%2FOZ5jCB&X-Amz-Signature=9da3c72222cf04d579e328f32b4abaf039be3e4784a13e640c49dd30f4bfc695&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJ6IIHC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHknfwq3l8cLXzTcvuySkSPNN4j6FKH7qx1GEHVkeCtsAiEAh%2FDvuMW8fpi0jG4IO%2FyAPTtxQWSSLAup84Q%2BZJ4f4LMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzNkT65hV9hAADxqSrcA2W603yIjsrD9gYtkO1hncA8inVypKrwFkqyQ0hX%2B2GBoz6fxmyBr8f4%2FwgsfHBddEaS6SEl1FXJdNsMLs4HJB4RbDIFGIMK6hZkUoMCvt9KNhAGt0gcBsyHpBYlYZhwlFGsvEToV%2BhRN3T7mb1I3DThmH2Fq48DW633ZDlNeD84%2Ba1UYb%2Fef105yxpL8hYckkKXHCckvT5mRW7ej7XkUmqeIXeLWAXC4xtUUL17m0U7fDnd5fhBdXZSlzIrR7e%2BJ5sb8RSkjaKXYPRpzZgjxfVsyM7PsKoiTGH4fPXY%2F%2FAf2NINjstHWNZ7Z3TGDeHIrB4j8%2F0yJqFltrH7coTxOf3vjUx1AuTlHGiIHAmgzl9Cy8m09mwUErc0vZOsqI%2BleLtS9ZeADs%2Fh1YDiOZmAm2Gqp29tLIZb%2FY%2Fl7lMBtuMKlx6mgnDXb0UXUEuPSJUIUUO1E8FlygTe7UrrdyYkXfINtRQaB3A9GLgQK7Csl6zc%2BUsinVsNBTB4fj%2FhvGARFmXtpumo0pqJgDvksy0Dvim%2Fi%2BCyG98LRr%2BYRds3v35GQiLBuaZ6X6pYvXwJCHsmVT8j7qVHUt298Ti1BfexVeQLC1%2BiP4mJw7igw%2FjEssJLHGc7SK4t6USckhFMMPqrz8AGOqUBqwIpHKtedgz%2B4k3W3myZ%2B3gWxah6YVkTv7sgtQWfnaih6XIPhgGhGeG4sMe%2Bgz82e6sUHs9heHMdznEgDxAmuBLFAiI7f4FXqrWP%2BCRP%2FlRGOWJZ0ZyXU1Y92gxZx5yXwO0EwMs2mPL2ZXKifM1wkeOntqRzAOSqOO0UOI2KtOx7zm%2FyvAWhVMXDTMRPgUCmAsTluCt6iLe0iTeQttaxM%2FOZ5jCB&X-Amz-Signature=083963d410d0970abd4fe2741f3414f38882e3cdb63daaa13809322fc85e8e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

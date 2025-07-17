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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSFOWWX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCjcWQBhrsVPK%2F3g%2BmNtwSugzTINPmX4OT55SJe5NtWRAIgZZpPc1v%2FiNTubcJxx7XFW4d2ST6j91OnFpw%2FIzRA0YYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKATUovypfI1OsuLVSrcA6Rwe5g8fvVWAXywGGsNb9EH7RMg9yTCZ5Gq3%2BI9OCKh55zutPTgBPEUm9Mk7BMyXMNSRONnF5ta5rbzY6svRuAW7KWS%2BdEAjgPn5F%2BiEIPw8eOE070%2B%2BvlgEBCYTaaL6bzZuMSajyHSr2%2BSgZViHInO9Zn%2ByAmLgosi4FnZ%2FMPCUqWueFK7hNX3P64SzzbVltbxGHu%2BRapouA2Yz0RhKWa%2Ffuedpb5hbnxZxXcWpPjHAwN%2FBjPJ%2BPg8wqNeJE8RACWyHWz7JEw3SmjJETOULNcM6tRVasxZZ28KpkaX5w%2F%2Bo9YRYcCZgqvZX8y8W7oe1LPC3WDyqYbRpzbkqGKzHGk8I1ObcoK9MxWrW2odaXdmf88IRNtII7bbmleTdTt5%2FtHDnI25WV%2FggXTXBq%2FKZq6FOxXKsVIyA39a35%2FkyeuOtjemJpGTRkQjer013gL4vEEE0AjYOzB3t7OVszHMONXTNnSvsT2OthgGH3xAdRAxM0ukGbGhqCHWuT%2B1uE2m5QLT84Y3ju%2BFFMXd%2FgkfwirOdkgPNeEZ9KCD4m%2ByDd%2FTGjxbbWCN8f4ftZ9D4DeUkC2HyrbKSs3Bh7g4FiE0bhnHpw34nG65vkuAf8nKKK8%2B6Y1qsIva2H1jt3P8MPiS48MGOqUBK8TLruWoPfnFstlqZqM3hHJ7U5Me3yVEpM1P7IRKb7DR7hd%2FAzal2VvQQQ3erAM7Hdl6tocYMwwTPx2ZrCnAsbW6J6Bu4csI%2BPh8lpugjCTYTVnsK0GYf7%2FSjOWt4AXbGhaK02D%2FUG6ZjSZd%2FycezNvo2SRxaNseNJJq7abLVWygKzlAjpdfFGIgArSBwKhjmzJ5Qbr%2Bua%2Fa6fmRyLC2AwhceXCL&X-Amz-Signature=579e4b0f1c730d126064c2c2b76dcaccf4561360b9545a6200976b082e09fa56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSFOWWX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCjcWQBhrsVPK%2F3g%2BmNtwSugzTINPmX4OT55SJe5NtWRAIgZZpPc1v%2FiNTubcJxx7XFW4d2ST6j91OnFpw%2FIzRA0YYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKATUovypfI1OsuLVSrcA6Rwe5g8fvVWAXywGGsNb9EH7RMg9yTCZ5Gq3%2BI9OCKh55zutPTgBPEUm9Mk7BMyXMNSRONnF5ta5rbzY6svRuAW7KWS%2BdEAjgPn5F%2BiEIPw8eOE070%2B%2BvlgEBCYTaaL6bzZuMSajyHSr2%2BSgZViHInO9Zn%2ByAmLgosi4FnZ%2FMPCUqWueFK7hNX3P64SzzbVltbxGHu%2BRapouA2Yz0RhKWa%2Ffuedpb5hbnxZxXcWpPjHAwN%2FBjPJ%2BPg8wqNeJE8RACWyHWz7JEw3SmjJETOULNcM6tRVasxZZ28KpkaX5w%2F%2Bo9YRYcCZgqvZX8y8W7oe1LPC3WDyqYbRpzbkqGKzHGk8I1ObcoK9MxWrW2odaXdmf88IRNtII7bbmleTdTt5%2FtHDnI25WV%2FggXTXBq%2FKZq6FOxXKsVIyA39a35%2FkyeuOtjemJpGTRkQjer013gL4vEEE0AjYOzB3t7OVszHMONXTNnSvsT2OthgGH3xAdRAxM0ukGbGhqCHWuT%2B1uE2m5QLT84Y3ju%2BFFMXd%2FgkfwirOdkgPNeEZ9KCD4m%2ByDd%2FTGjxbbWCN8f4ftZ9D4DeUkC2HyrbKSs3Bh7g4FiE0bhnHpw34nG65vkuAf8nKKK8%2B6Y1qsIva2H1jt3P8MPiS48MGOqUBK8TLruWoPfnFstlqZqM3hHJ7U5Me3yVEpM1P7IRKb7DR7hd%2FAzal2VvQQQ3erAM7Hdl6tocYMwwTPx2ZrCnAsbW6J6Bu4csI%2BPh8lpugjCTYTVnsK0GYf7%2FSjOWt4AXbGhaK02D%2FUG6ZjSZd%2FycezNvo2SRxaNseNJJq7abLVWygKzlAjpdfFGIgArSBwKhjmzJ5Qbr%2Bua%2Fa6fmRyLC2AwhceXCL&X-Amz-Signature=fe4a78724f64591dbd7e1bccc3a543d91d12437cee070d85b25f781a49be3ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSFOWWX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCjcWQBhrsVPK%2F3g%2BmNtwSugzTINPmX4OT55SJe5NtWRAIgZZpPc1v%2FiNTubcJxx7XFW4d2ST6j91OnFpw%2FIzRA0YYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKATUovypfI1OsuLVSrcA6Rwe5g8fvVWAXywGGsNb9EH7RMg9yTCZ5Gq3%2BI9OCKh55zutPTgBPEUm9Mk7BMyXMNSRONnF5ta5rbzY6svRuAW7KWS%2BdEAjgPn5F%2BiEIPw8eOE070%2B%2BvlgEBCYTaaL6bzZuMSajyHSr2%2BSgZViHInO9Zn%2ByAmLgosi4FnZ%2FMPCUqWueFK7hNX3P64SzzbVltbxGHu%2BRapouA2Yz0RhKWa%2Ffuedpb5hbnxZxXcWpPjHAwN%2FBjPJ%2BPg8wqNeJE8RACWyHWz7JEw3SmjJETOULNcM6tRVasxZZ28KpkaX5w%2F%2Bo9YRYcCZgqvZX8y8W7oe1LPC3WDyqYbRpzbkqGKzHGk8I1ObcoK9MxWrW2odaXdmf88IRNtII7bbmleTdTt5%2FtHDnI25WV%2FggXTXBq%2FKZq6FOxXKsVIyA39a35%2FkyeuOtjemJpGTRkQjer013gL4vEEE0AjYOzB3t7OVszHMONXTNnSvsT2OthgGH3xAdRAxM0ukGbGhqCHWuT%2B1uE2m5QLT84Y3ju%2BFFMXd%2FgkfwirOdkgPNeEZ9KCD4m%2ByDd%2FTGjxbbWCN8f4ftZ9D4DeUkC2HyrbKSs3Bh7g4FiE0bhnHpw34nG65vkuAf8nKKK8%2B6Y1qsIva2H1jt3P8MPiS48MGOqUBK8TLruWoPfnFstlqZqM3hHJ7U5Me3yVEpM1P7IRKb7DR7hd%2FAzal2VvQQQ3erAM7Hdl6tocYMwwTPx2ZrCnAsbW6J6Bu4csI%2BPh8lpugjCTYTVnsK0GYf7%2FSjOWt4AXbGhaK02D%2FUG6ZjSZd%2FycezNvo2SRxaNseNJJq7abLVWygKzlAjpdfFGIgArSBwKhjmzJ5Qbr%2Bua%2Fa6fmRyLC2AwhceXCL&X-Amz-Signature=fb3db68235200fc77a5eb99b74591491d0633ac856b072fe616d5e22c6124d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSFOWWX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCjcWQBhrsVPK%2F3g%2BmNtwSugzTINPmX4OT55SJe5NtWRAIgZZpPc1v%2FiNTubcJxx7XFW4d2ST6j91OnFpw%2FIzRA0YYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKATUovypfI1OsuLVSrcA6Rwe5g8fvVWAXywGGsNb9EH7RMg9yTCZ5Gq3%2BI9OCKh55zutPTgBPEUm9Mk7BMyXMNSRONnF5ta5rbzY6svRuAW7KWS%2BdEAjgPn5F%2BiEIPw8eOE070%2B%2BvlgEBCYTaaL6bzZuMSajyHSr2%2BSgZViHInO9Zn%2ByAmLgosi4FnZ%2FMPCUqWueFK7hNX3P64SzzbVltbxGHu%2BRapouA2Yz0RhKWa%2Ffuedpb5hbnxZxXcWpPjHAwN%2FBjPJ%2BPg8wqNeJE8RACWyHWz7JEw3SmjJETOULNcM6tRVasxZZ28KpkaX5w%2F%2Bo9YRYcCZgqvZX8y8W7oe1LPC3WDyqYbRpzbkqGKzHGk8I1ObcoK9MxWrW2odaXdmf88IRNtII7bbmleTdTt5%2FtHDnI25WV%2FggXTXBq%2FKZq6FOxXKsVIyA39a35%2FkyeuOtjemJpGTRkQjer013gL4vEEE0AjYOzB3t7OVszHMONXTNnSvsT2OthgGH3xAdRAxM0ukGbGhqCHWuT%2B1uE2m5QLT84Y3ju%2BFFMXd%2FgkfwirOdkgPNeEZ9KCD4m%2ByDd%2FTGjxbbWCN8f4ftZ9D4DeUkC2HyrbKSs3Bh7g4FiE0bhnHpw34nG65vkuAf8nKKK8%2B6Y1qsIva2H1jt3P8MPiS48MGOqUBK8TLruWoPfnFstlqZqM3hHJ7U5Me3yVEpM1P7IRKb7DR7hd%2FAzal2VvQQQ3erAM7Hdl6tocYMwwTPx2ZrCnAsbW6J6Bu4csI%2BPh8lpugjCTYTVnsK0GYf7%2FSjOWt4AXbGhaK02D%2FUG6ZjSZd%2FycezNvo2SRxaNseNJJq7abLVWygKzlAjpdfFGIgArSBwKhjmzJ5Qbr%2Bua%2Fa6fmRyLC2AwhceXCL&X-Amz-Signature=366f9a5a6df7122809fd3a2d3558bbe3a0bbe8ffba8099bc24ed37ae5bfd8ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSFOWWX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCjcWQBhrsVPK%2F3g%2BmNtwSugzTINPmX4OT55SJe5NtWRAIgZZpPc1v%2FiNTubcJxx7XFW4d2ST6j91OnFpw%2FIzRA0YYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKATUovypfI1OsuLVSrcA6Rwe5g8fvVWAXywGGsNb9EH7RMg9yTCZ5Gq3%2BI9OCKh55zutPTgBPEUm9Mk7BMyXMNSRONnF5ta5rbzY6svRuAW7KWS%2BdEAjgPn5F%2BiEIPw8eOE070%2B%2BvlgEBCYTaaL6bzZuMSajyHSr2%2BSgZViHInO9Zn%2ByAmLgosi4FnZ%2FMPCUqWueFK7hNX3P64SzzbVltbxGHu%2BRapouA2Yz0RhKWa%2Ffuedpb5hbnxZxXcWpPjHAwN%2FBjPJ%2BPg8wqNeJE8RACWyHWz7JEw3SmjJETOULNcM6tRVasxZZ28KpkaX5w%2F%2Bo9YRYcCZgqvZX8y8W7oe1LPC3WDyqYbRpzbkqGKzHGk8I1ObcoK9MxWrW2odaXdmf88IRNtII7bbmleTdTt5%2FtHDnI25WV%2FggXTXBq%2FKZq6FOxXKsVIyA39a35%2FkyeuOtjemJpGTRkQjer013gL4vEEE0AjYOzB3t7OVszHMONXTNnSvsT2OthgGH3xAdRAxM0ukGbGhqCHWuT%2B1uE2m5QLT84Y3ju%2BFFMXd%2FgkfwirOdkgPNeEZ9KCD4m%2ByDd%2FTGjxbbWCN8f4ftZ9D4DeUkC2HyrbKSs3Bh7g4FiE0bhnHpw34nG65vkuAf8nKKK8%2B6Y1qsIva2H1jt3P8MPiS48MGOqUBK8TLruWoPfnFstlqZqM3hHJ7U5Me3yVEpM1P7IRKb7DR7hd%2FAzal2VvQQQ3erAM7Hdl6tocYMwwTPx2ZrCnAsbW6J6Bu4csI%2BPh8lpugjCTYTVnsK0GYf7%2FSjOWt4AXbGhaK02D%2FUG6ZjSZd%2FycezNvo2SRxaNseNJJq7abLVWygKzlAjpdfFGIgArSBwKhjmzJ5Qbr%2Bua%2Fa6fmRyLC2AwhceXCL&X-Amz-Signature=6def19f19ae21d6727b079fc7d7045d2f957f636c6ec5834aaa8c5fb3bbc6a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSFOWWX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCjcWQBhrsVPK%2F3g%2BmNtwSugzTINPmX4OT55SJe5NtWRAIgZZpPc1v%2FiNTubcJxx7XFW4d2ST6j91OnFpw%2FIzRA0YYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKATUovypfI1OsuLVSrcA6Rwe5g8fvVWAXywGGsNb9EH7RMg9yTCZ5Gq3%2BI9OCKh55zutPTgBPEUm9Mk7BMyXMNSRONnF5ta5rbzY6svRuAW7KWS%2BdEAjgPn5F%2BiEIPw8eOE070%2B%2BvlgEBCYTaaL6bzZuMSajyHSr2%2BSgZViHInO9Zn%2ByAmLgosi4FnZ%2FMPCUqWueFK7hNX3P64SzzbVltbxGHu%2BRapouA2Yz0RhKWa%2Ffuedpb5hbnxZxXcWpPjHAwN%2FBjPJ%2BPg8wqNeJE8RACWyHWz7JEw3SmjJETOULNcM6tRVasxZZ28KpkaX5w%2F%2Bo9YRYcCZgqvZX8y8W7oe1LPC3WDyqYbRpzbkqGKzHGk8I1ObcoK9MxWrW2odaXdmf88IRNtII7bbmleTdTt5%2FtHDnI25WV%2FggXTXBq%2FKZq6FOxXKsVIyA39a35%2FkyeuOtjemJpGTRkQjer013gL4vEEE0AjYOzB3t7OVszHMONXTNnSvsT2OthgGH3xAdRAxM0ukGbGhqCHWuT%2B1uE2m5QLT84Y3ju%2BFFMXd%2FgkfwirOdkgPNeEZ9KCD4m%2ByDd%2FTGjxbbWCN8f4ftZ9D4DeUkC2HyrbKSs3Bh7g4FiE0bhnHpw34nG65vkuAf8nKKK8%2B6Y1qsIva2H1jt3P8MPiS48MGOqUBK8TLruWoPfnFstlqZqM3hHJ7U5Me3yVEpM1P7IRKb7DR7hd%2FAzal2VvQQQ3erAM7Hdl6tocYMwwTPx2ZrCnAsbW6J6Bu4csI%2BPh8lpugjCTYTVnsK0GYf7%2FSjOWt4AXbGhaK02D%2FUG6ZjSZd%2FycezNvo2SRxaNseNJJq7abLVWygKzlAjpdfFGIgArSBwKhjmzJ5Qbr%2Bua%2Fa6fmRyLC2AwhceXCL&X-Amz-Signature=decc01b2a4c828e04a0d4b3eba362f8ba2c036a334868ab6be0bdd2d1dce4206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSFOWWX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCjcWQBhrsVPK%2F3g%2BmNtwSugzTINPmX4OT55SJe5NtWRAIgZZpPc1v%2FiNTubcJxx7XFW4d2ST6j91OnFpw%2FIzRA0YYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKATUovypfI1OsuLVSrcA6Rwe5g8fvVWAXywGGsNb9EH7RMg9yTCZ5Gq3%2BI9OCKh55zutPTgBPEUm9Mk7BMyXMNSRONnF5ta5rbzY6svRuAW7KWS%2BdEAjgPn5F%2BiEIPw8eOE070%2B%2BvlgEBCYTaaL6bzZuMSajyHSr2%2BSgZViHInO9Zn%2ByAmLgosi4FnZ%2FMPCUqWueFK7hNX3P64SzzbVltbxGHu%2BRapouA2Yz0RhKWa%2Ffuedpb5hbnxZxXcWpPjHAwN%2FBjPJ%2BPg8wqNeJE8RACWyHWz7JEw3SmjJETOULNcM6tRVasxZZ28KpkaX5w%2F%2Bo9YRYcCZgqvZX8y8W7oe1LPC3WDyqYbRpzbkqGKzHGk8I1ObcoK9MxWrW2odaXdmf88IRNtII7bbmleTdTt5%2FtHDnI25WV%2FggXTXBq%2FKZq6FOxXKsVIyA39a35%2FkyeuOtjemJpGTRkQjer013gL4vEEE0AjYOzB3t7OVszHMONXTNnSvsT2OthgGH3xAdRAxM0ukGbGhqCHWuT%2B1uE2m5QLT84Y3ju%2BFFMXd%2FgkfwirOdkgPNeEZ9KCD4m%2ByDd%2FTGjxbbWCN8f4ftZ9D4DeUkC2HyrbKSs3Bh7g4FiE0bhnHpw34nG65vkuAf8nKKK8%2B6Y1qsIva2H1jt3P8MPiS48MGOqUBK8TLruWoPfnFstlqZqM3hHJ7U5Me3yVEpM1P7IRKb7DR7hd%2FAzal2VvQQQ3erAM7Hdl6tocYMwwTPx2ZrCnAsbW6J6Bu4csI%2BPh8lpugjCTYTVnsK0GYf7%2FSjOWt4AXbGhaK02D%2FUG6ZjSZd%2FycezNvo2SRxaNseNJJq7abLVWygKzlAjpdfFGIgArSBwKhjmzJ5Qbr%2Bua%2Fa6fmRyLC2AwhceXCL&X-Amz-Signature=c63e0eaf9b18f998324346c694212c753902089b9c84a5dba164323df5fe45fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSFOWWX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCjcWQBhrsVPK%2F3g%2BmNtwSugzTINPmX4OT55SJe5NtWRAIgZZpPc1v%2FiNTubcJxx7XFW4d2ST6j91OnFpw%2FIzRA0YYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKATUovypfI1OsuLVSrcA6Rwe5g8fvVWAXywGGsNb9EH7RMg9yTCZ5Gq3%2BI9OCKh55zutPTgBPEUm9Mk7BMyXMNSRONnF5ta5rbzY6svRuAW7KWS%2BdEAjgPn5F%2BiEIPw8eOE070%2B%2BvlgEBCYTaaL6bzZuMSajyHSr2%2BSgZViHInO9Zn%2ByAmLgosi4FnZ%2FMPCUqWueFK7hNX3P64SzzbVltbxGHu%2BRapouA2Yz0RhKWa%2Ffuedpb5hbnxZxXcWpPjHAwN%2FBjPJ%2BPg8wqNeJE8RACWyHWz7JEw3SmjJETOULNcM6tRVasxZZ28KpkaX5w%2F%2Bo9YRYcCZgqvZX8y8W7oe1LPC3WDyqYbRpzbkqGKzHGk8I1ObcoK9MxWrW2odaXdmf88IRNtII7bbmleTdTt5%2FtHDnI25WV%2FggXTXBq%2FKZq6FOxXKsVIyA39a35%2FkyeuOtjemJpGTRkQjer013gL4vEEE0AjYOzB3t7OVszHMONXTNnSvsT2OthgGH3xAdRAxM0ukGbGhqCHWuT%2B1uE2m5QLT84Y3ju%2BFFMXd%2FgkfwirOdkgPNeEZ9KCD4m%2ByDd%2FTGjxbbWCN8f4ftZ9D4DeUkC2HyrbKSs3Bh7g4FiE0bhnHpw34nG65vkuAf8nKKK8%2B6Y1qsIva2H1jt3P8MPiS48MGOqUBK8TLruWoPfnFstlqZqM3hHJ7U5Me3yVEpM1P7IRKb7DR7hd%2FAzal2VvQQQ3erAM7Hdl6tocYMwwTPx2ZrCnAsbW6J6Bu4csI%2BPh8lpugjCTYTVnsK0GYf7%2FSjOWt4AXbGhaK02D%2FUG6ZjSZd%2FycezNvo2SRxaNseNJJq7abLVWygKzlAjpdfFGIgArSBwKhjmzJ5Qbr%2Bua%2Fa6fmRyLC2AwhceXCL&X-Amz-Signature=266f080c9472a6c37addb8c94934ff07182c344c65bb691f4a186e26b5756ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

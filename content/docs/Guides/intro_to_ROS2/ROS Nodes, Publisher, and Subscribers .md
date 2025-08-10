---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4HNKZ6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrnE4nBL8GsWnxsorKh1c7EJAhvkWqJsz8v6TPYbxGAiEA1QncAgzZFjX4W3qeHuGQw2uVQoOl6VhFAh1BAACHeAYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIlfVvmJJg2BGzmrircA0MHPuB8R4NoIK5xrfPwabXViZcXJ%2F%2BFh5RS3KfnnQFhdaGRMaQQkpunkF7hrDuhyL%2FEwS5UVjSL8AD0SOuijy2lseyJXcKqnXr3NK%2Fzyf1iSpmxYXKo0tEqM6XkcGKAhkzSimj3WG16regxTCi%2ByNVIaYnZPG1GEFjAW4zRsM7TTeIzEF%2FzgfYXFPHvhC66l2gIinO53Lbi%2B8EO%2BU3PCFQpRO5iudLKH0Xn0r3kVyKe1DkcMDrHULZgmciRqW%2FQCKlHHyVnHNxgRrjWgj9TlJISu3p4Ypripum2omxzBVtz7AHIK%2BKRUZ3xDdM2hR0H8UBmgyP8tQWgLM95Opu03Kr9n2%2FUVcH19luKHzXVCxFI%2FKmnhjDO7PD2LzzCgape7gDn9g91WBMFizrYd6xcH%2Fw7N0bJZSIDB1Q1OoIweGCC8lkE2WMDKUUkOuUVPbpUvcdIhXIGMbLjMWRYgT%2B4xENHH9eKSt42lV2j4sqt%2F%2F5Lfj5vX3VBSo5X653WUrTam%2BoS55svVgS3HeeJgpeQgfrCEFiSz9Dz5Z9EygXYNQnjfDOIAfDtLCXekcHokQ%2Bs2F%2BtD2i3q1NOD6NJuuUFXUBtuyU16wlSKT2UmLfYRpY3AR6O8aB6fzX0pTGBMP%2BY4sQGOqUBKLjzBiclwYZ8%2FB57p57JlEbpag17zAmRPb%2FWhf6zp%2BePm7hSlLpxZDfFcHMM6DEfMjRGb55Qb18NVtPY9tsW0mQTtAem9K%2FgobkdtQmLB01h9C3i8pbREjLM3FaJIq7n1%2BUorF8XVYLLxIi%2Fn3CjFG5is5NIaJ%2FXXGkCVDTaT21K6pOH9%2F%2FIQv8RJcLIrziUchVmSpLhPwdtGCGkKKtG%2BZSUESMx&X-Amz-Signature=f9f9b4ba9ef4e4c4342e5c7e257313344b8aeae8e31ddfe81cbc6bd09408b5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4HNKZ6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrnE4nBL8GsWnxsorKh1c7EJAhvkWqJsz8v6TPYbxGAiEA1QncAgzZFjX4W3qeHuGQw2uVQoOl6VhFAh1BAACHeAYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIlfVvmJJg2BGzmrircA0MHPuB8R4NoIK5xrfPwabXViZcXJ%2F%2BFh5RS3KfnnQFhdaGRMaQQkpunkF7hrDuhyL%2FEwS5UVjSL8AD0SOuijy2lseyJXcKqnXr3NK%2Fzyf1iSpmxYXKo0tEqM6XkcGKAhkzSimj3WG16regxTCi%2ByNVIaYnZPG1GEFjAW4zRsM7TTeIzEF%2FzgfYXFPHvhC66l2gIinO53Lbi%2B8EO%2BU3PCFQpRO5iudLKH0Xn0r3kVyKe1DkcMDrHULZgmciRqW%2FQCKlHHyVnHNxgRrjWgj9TlJISu3p4Ypripum2omxzBVtz7AHIK%2BKRUZ3xDdM2hR0H8UBmgyP8tQWgLM95Opu03Kr9n2%2FUVcH19luKHzXVCxFI%2FKmnhjDO7PD2LzzCgape7gDn9g91WBMFizrYd6xcH%2Fw7N0bJZSIDB1Q1OoIweGCC8lkE2WMDKUUkOuUVPbpUvcdIhXIGMbLjMWRYgT%2B4xENHH9eKSt42lV2j4sqt%2F%2F5Lfj5vX3VBSo5X653WUrTam%2BoS55svVgS3HeeJgpeQgfrCEFiSz9Dz5Z9EygXYNQnjfDOIAfDtLCXekcHokQ%2Bs2F%2BtD2i3q1NOD6NJuuUFXUBtuyU16wlSKT2UmLfYRpY3AR6O8aB6fzX0pTGBMP%2BY4sQGOqUBKLjzBiclwYZ8%2FB57p57JlEbpag17zAmRPb%2FWhf6zp%2BePm7hSlLpxZDfFcHMM6DEfMjRGb55Qb18NVtPY9tsW0mQTtAem9K%2FgobkdtQmLB01h9C3i8pbREjLM3FaJIq7n1%2BUorF8XVYLLxIi%2Fn3CjFG5is5NIaJ%2FXXGkCVDTaT21K6pOH9%2F%2FIQv8RJcLIrziUchVmSpLhPwdtGCGkKKtG%2BZSUESMx&X-Amz-Signature=9c1e8cd6b4f8d5022554f6b7dc5ee71ea72860f50a20c190347665abf1b96b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4HNKZ6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrnE4nBL8GsWnxsorKh1c7EJAhvkWqJsz8v6TPYbxGAiEA1QncAgzZFjX4W3qeHuGQw2uVQoOl6VhFAh1BAACHeAYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIlfVvmJJg2BGzmrircA0MHPuB8R4NoIK5xrfPwabXViZcXJ%2F%2BFh5RS3KfnnQFhdaGRMaQQkpunkF7hrDuhyL%2FEwS5UVjSL8AD0SOuijy2lseyJXcKqnXr3NK%2Fzyf1iSpmxYXKo0tEqM6XkcGKAhkzSimj3WG16regxTCi%2ByNVIaYnZPG1GEFjAW4zRsM7TTeIzEF%2FzgfYXFPHvhC66l2gIinO53Lbi%2B8EO%2BU3PCFQpRO5iudLKH0Xn0r3kVyKe1DkcMDrHULZgmciRqW%2FQCKlHHyVnHNxgRrjWgj9TlJISu3p4Ypripum2omxzBVtz7AHIK%2BKRUZ3xDdM2hR0H8UBmgyP8tQWgLM95Opu03Kr9n2%2FUVcH19luKHzXVCxFI%2FKmnhjDO7PD2LzzCgape7gDn9g91WBMFizrYd6xcH%2Fw7N0bJZSIDB1Q1OoIweGCC8lkE2WMDKUUkOuUVPbpUvcdIhXIGMbLjMWRYgT%2B4xENHH9eKSt42lV2j4sqt%2F%2F5Lfj5vX3VBSo5X653WUrTam%2BoS55svVgS3HeeJgpeQgfrCEFiSz9Dz5Z9EygXYNQnjfDOIAfDtLCXekcHokQ%2Bs2F%2BtD2i3q1NOD6NJuuUFXUBtuyU16wlSKT2UmLfYRpY3AR6O8aB6fzX0pTGBMP%2BY4sQGOqUBKLjzBiclwYZ8%2FB57p57JlEbpag17zAmRPb%2FWhf6zp%2BePm7hSlLpxZDfFcHMM6DEfMjRGb55Qb18NVtPY9tsW0mQTtAem9K%2FgobkdtQmLB01h9C3i8pbREjLM3FaJIq7n1%2BUorF8XVYLLxIi%2Fn3CjFG5is5NIaJ%2FXXGkCVDTaT21K6pOH9%2F%2FIQv8RJcLIrziUchVmSpLhPwdtGCGkKKtG%2BZSUESMx&X-Amz-Signature=7b4631f93361d86ee56adad1006b91efc83ccca8a761447a7829ef0f9da9354c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4HNKZ6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrnE4nBL8GsWnxsorKh1c7EJAhvkWqJsz8v6TPYbxGAiEA1QncAgzZFjX4W3qeHuGQw2uVQoOl6VhFAh1BAACHeAYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIlfVvmJJg2BGzmrircA0MHPuB8R4NoIK5xrfPwabXViZcXJ%2F%2BFh5RS3KfnnQFhdaGRMaQQkpunkF7hrDuhyL%2FEwS5UVjSL8AD0SOuijy2lseyJXcKqnXr3NK%2Fzyf1iSpmxYXKo0tEqM6XkcGKAhkzSimj3WG16regxTCi%2ByNVIaYnZPG1GEFjAW4zRsM7TTeIzEF%2FzgfYXFPHvhC66l2gIinO53Lbi%2B8EO%2BU3PCFQpRO5iudLKH0Xn0r3kVyKe1DkcMDrHULZgmciRqW%2FQCKlHHyVnHNxgRrjWgj9TlJISu3p4Ypripum2omxzBVtz7AHIK%2BKRUZ3xDdM2hR0H8UBmgyP8tQWgLM95Opu03Kr9n2%2FUVcH19luKHzXVCxFI%2FKmnhjDO7PD2LzzCgape7gDn9g91WBMFizrYd6xcH%2Fw7N0bJZSIDB1Q1OoIweGCC8lkE2WMDKUUkOuUVPbpUvcdIhXIGMbLjMWRYgT%2B4xENHH9eKSt42lV2j4sqt%2F%2F5Lfj5vX3VBSo5X653WUrTam%2BoS55svVgS3HeeJgpeQgfrCEFiSz9Dz5Z9EygXYNQnjfDOIAfDtLCXekcHokQ%2Bs2F%2BtD2i3q1NOD6NJuuUFXUBtuyU16wlSKT2UmLfYRpY3AR6O8aB6fzX0pTGBMP%2BY4sQGOqUBKLjzBiclwYZ8%2FB57p57JlEbpag17zAmRPb%2FWhf6zp%2BePm7hSlLpxZDfFcHMM6DEfMjRGb55Qb18NVtPY9tsW0mQTtAem9K%2FgobkdtQmLB01h9C3i8pbREjLM3FaJIq7n1%2BUorF8XVYLLxIi%2Fn3CjFG5is5NIaJ%2FXXGkCVDTaT21K6pOH9%2F%2FIQv8RJcLIrziUchVmSpLhPwdtGCGkKKtG%2BZSUESMx&X-Amz-Signature=5a362c741d0122b1fbcccdbc3e9a79207e1b772a4fc8e0a3dc6a0d6675b24cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4HNKZ6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrnE4nBL8GsWnxsorKh1c7EJAhvkWqJsz8v6TPYbxGAiEA1QncAgzZFjX4W3qeHuGQw2uVQoOl6VhFAh1BAACHeAYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIlfVvmJJg2BGzmrircA0MHPuB8R4NoIK5xrfPwabXViZcXJ%2F%2BFh5RS3KfnnQFhdaGRMaQQkpunkF7hrDuhyL%2FEwS5UVjSL8AD0SOuijy2lseyJXcKqnXr3NK%2Fzyf1iSpmxYXKo0tEqM6XkcGKAhkzSimj3WG16regxTCi%2ByNVIaYnZPG1GEFjAW4zRsM7TTeIzEF%2FzgfYXFPHvhC66l2gIinO53Lbi%2B8EO%2BU3PCFQpRO5iudLKH0Xn0r3kVyKe1DkcMDrHULZgmciRqW%2FQCKlHHyVnHNxgRrjWgj9TlJISu3p4Ypripum2omxzBVtz7AHIK%2BKRUZ3xDdM2hR0H8UBmgyP8tQWgLM95Opu03Kr9n2%2FUVcH19luKHzXVCxFI%2FKmnhjDO7PD2LzzCgape7gDn9g91WBMFizrYd6xcH%2Fw7N0bJZSIDB1Q1OoIweGCC8lkE2WMDKUUkOuUVPbpUvcdIhXIGMbLjMWRYgT%2B4xENHH9eKSt42lV2j4sqt%2F%2F5Lfj5vX3VBSo5X653WUrTam%2BoS55svVgS3HeeJgpeQgfrCEFiSz9Dz5Z9EygXYNQnjfDOIAfDtLCXekcHokQ%2Bs2F%2BtD2i3q1NOD6NJuuUFXUBtuyU16wlSKT2UmLfYRpY3AR6O8aB6fzX0pTGBMP%2BY4sQGOqUBKLjzBiclwYZ8%2FB57p57JlEbpag17zAmRPb%2FWhf6zp%2BePm7hSlLpxZDfFcHMM6DEfMjRGb55Qb18NVtPY9tsW0mQTtAem9K%2FgobkdtQmLB01h9C3i8pbREjLM3FaJIq7n1%2BUorF8XVYLLxIi%2Fn3CjFG5is5NIaJ%2FXXGkCVDTaT21K6pOH9%2F%2FIQv8RJcLIrziUchVmSpLhPwdtGCGkKKtG%2BZSUESMx&X-Amz-Signature=407e71fdf2221e5e3edc9b88c8ccbc3616c9031fc593993a0450f62fe38d34e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4HNKZ6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrnE4nBL8GsWnxsorKh1c7EJAhvkWqJsz8v6TPYbxGAiEA1QncAgzZFjX4W3qeHuGQw2uVQoOl6VhFAh1BAACHeAYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIlfVvmJJg2BGzmrircA0MHPuB8R4NoIK5xrfPwabXViZcXJ%2F%2BFh5RS3KfnnQFhdaGRMaQQkpunkF7hrDuhyL%2FEwS5UVjSL8AD0SOuijy2lseyJXcKqnXr3NK%2Fzyf1iSpmxYXKo0tEqM6XkcGKAhkzSimj3WG16regxTCi%2ByNVIaYnZPG1GEFjAW4zRsM7TTeIzEF%2FzgfYXFPHvhC66l2gIinO53Lbi%2B8EO%2BU3PCFQpRO5iudLKH0Xn0r3kVyKe1DkcMDrHULZgmciRqW%2FQCKlHHyVnHNxgRrjWgj9TlJISu3p4Ypripum2omxzBVtz7AHIK%2BKRUZ3xDdM2hR0H8UBmgyP8tQWgLM95Opu03Kr9n2%2FUVcH19luKHzXVCxFI%2FKmnhjDO7PD2LzzCgape7gDn9g91WBMFizrYd6xcH%2Fw7N0bJZSIDB1Q1OoIweGCC8lkE2WMDKUUkOuUVPbpUvcdIhXIGMbLjMWRYgT%2B4xENHH9eKSt42lV2j4sqt%2F%2F5Lfj5vX3VBSo5X653WUrTam%2BoS55svVgS3HeeJgpeQgfrCEFiSz9Dz5Z9EygXYNQnjfDOIAfDtLCXekcHokQ%2Bs2F%2BtD2i3q1NOD6NJuuUFXUBtuyU16wlSKT2UmLfYRpY3AR6O8aB6fzX0pTGBMP%2BY4sQGOqUBKLjzBiclwYZ8%2FB57p57JlEbpag17zAmRPb%2FWhf6zp%2BePm7hSlLpxZDfFcHMM6DEfMjRGb55Qb18NVtPY9tsW0mQTtAem9K%2FgobkdtQmLB01h9C3i8pbREjLM3FaJIq7n1%2BUorF8XVYLLxIi%2Fn3CjFG5is5NIaJ%2FXXGkCVDTaT21K6pOH9%2F%2FIQv8RJcLIrziUchVmSpLhPwdtGCGkKKtG%2BZSUESMx&X-Amz-Signature=3c241eb15bff43b917e5c862c834d1db79eab3519ede3ab051898260c229e637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4HNKZ6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrnE4nBL8GsWnxsorKh1c7EJAhvkWqJsz8v6TPYbxGAiEA1QncAgzZFjX4W3qeHuGQw2uVQoOl6VhFAh1BAACHeAYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIlfVvmJJg2BGzmrircA0MHPuB8R4NoIK5xrfPwabXViZcXJ%2F%2BFh5RS3KfnnQFhdaGRMaQQkpunkF7hrDuhyL%2FEwS5UVjSL8AD0SOuijy2lseyJXcKqnXr3NK%2Fzyf1iSpmxYXKo0tEqM6XkcGKAhkzSimj3WG16regxTCi%2ByNVIaYnZPG1GEFjAW4zRsM7TTeIzEF%2FzgfYXFPHvhC66l2gIinO53Lbi%2B8EO%2BU3PCFQpRO5iudLKH0Xn0r3kVyKe1DkcMDrHULZgmciRqW%2FQCKlHHyVnHNxgRrjWgj9TlJISu3p4Ypripum2omxzBVtz7AHIK%2BKRUZ3xDdM2hR0H8UBmgyP8tQWgLM95Opu03Kr9n2%2FUVcH19luKHzXVCxFI%2FKmnhjDO7PD2LzzCgape7gDn9g91WBMFizrYd6xcH%2Fw7N0bJZSIDB1Q1OoIweGCC8lkE2WMDKUUkOuUVPbpUvcdIhXIGMbLjMWRYgT%2B4xENHH9eKSt42lV2j4sqt%2F%2F5Lfj5vX3VBSo5X653WUrTam%2BoS55svVgS3HeeJgpeQgfrCEFiSz9Dz5Z9EygXYNQnjfDOIAfDtLCXekcHokQ%2Bs2F%2BtD2i3q1NOD6NJuuUFXUBtuyU16wlSKT2UmLfYRpY3AR6O8aB6fzX0pTGBMP%2BY4sQGOqUBKLjzBiclwYZ8%2FB57p57JlEbpag17zAmRPb%2FWhf6zp%2BePm7hSlLpxZDfFcHMM6DEfMjRGb55Qb18NVtPY9tsW0mQTtAem9K%2FgobkdtQmLB01h9C3i8pbREjLM3FaJIq7n1%2BUorF8XVYLLxIi%2Fn3CjFG5is5NIaJ%2FXXGkCVDTaT21K6pOH9%2F%2FIQv8RJcLIrziUchVmSpLhPwdtGCGkKKtG%2BZSUESMx&X-Amz-Signature=0fa65020ea6473c283bc238cd8bec22cb8537ff1ca6163c1c97709fd47ccb72a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4HNKZ6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrnE4nBL8GsWnxsorKh1c7EJAhvkWqJsz8v6TPYbxGAiEA1QncAgzZFjX4W3qeHuGQw2uVQoOl6VhFAh1BAACHeAYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIlfVvmJJg2BGzmrircA0MHPuB8R4NoIK5xrfPwabXViZcXJ%2F%2BFh5RS3KfnnQFhdaGRMaQQkpunkF7hrDuhyL%2FEwS5UVjSL8AD0SOuijy2lseyJXcKqnXr3NK%2Fzyf1iSpmxYXKo0tEqM6XkcGKAhkzSimj3WG16regxTCi%2ByNVIaYnZPG1GEFjAW4zRsM7TTeIzEF%2FzgfYXFPHvhC66l2gIinO53Lbi%2B8EO%2BU3PCFQpRO5iudLKH0Xn0r3kVyKe1DkcMDrHULZgmciRqW%2FQCKlHHyVnHNxgRrjWgj9TlJISu3p4Ypripum2omxzBVtz7AHIK%2BKRUZ3xDdM2hR0H8UBmgyP8tQWgLM95Opu03Kr9n2%2FUVcH19luKHzXVCxFI%2FKmnhjDO7PD2LzzCgape7gDn9g91WBMFizrYd6xcH%2Fw7N0bJZSIDB1Q1OoIweGCC8lkE2WMDKUUkOuUVPbpUvcdIhXIGMbLjMWRYgT%2B4xENHH9eKSt42lV2j4sqt%2F%2F5Lfj5vX3VBSo5X653WUrTam%2BoS55svVgS3HeeJgpeQgfrCEFiSz9Dz5Z9EygXYNQnjfDOIAfDtLCXekcHokQ%2Bs2F%2BtD2i3q1NOD6NJuuUFXUBtuyU16wlSKT2UmLfYRpY3AR6O8aB6fzX0pTGBMP%2BY4sQGOqUBKLjzBiclwYZ8%2FB57p57JlEbpag17zAmRPb%2FWhf6zp%2BePm7hSlLpxZDfFcHMM6DEfMjRGb55Qb18NVtPY9tsW0mQTtAem9K%2FgobkdtQmLB01h9C3i8pbREjLM3FaJIq7n1%2BUorF8XVYLLxIi%2Fn3CjFG5is5NIaJ%2FXXGkCVDTaT21K6pOH9%2F%2FIQv8RJcLIrziUchVmSpLhPwdtGCGkKKtG%2BZSUESMx&X-Amz-Signature=80d4d9d54dfac64f1cc2d9e9c53f0c02d1bd7e6c9d63a402dd91fa3e16153130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSSVUJH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDm%2B4yS55ayxuT1%2FTTiwq4QLisGliOFQpaVIPWfhAcYcgIgeRCGz5NtM6gyUuTueIfK8j3OZu1sQCVfHJUr7d6PnzgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlhjB15Y66ZPTY%2FICrcAxBzwKSW%2BRkbG18Cg8FYKfdJPAn9xCrKFGlghhppmt%2BGqau%2F%2F%2BrXczjgvxAMSJKg7WZHMxFxNzX6KoTBU1t%2FtDv0d9SdS7m%2BGfnYGX0vPMcz5VCD6G2Qjo3T9AXO5WcebhtDB5srd%2Blr0nX2wnei9ENjLywUMshusQ6BnxpOYe1WGGO8x9NfCvreEqEAA4xdnDqkE69jehomEfF7haeDuQHEtVZ%2FbLuh%2FrEhjx%2Flqrr4UrOOfQbfUkl1dgIHofVzmEEQPgUFygWc05ey8MTFPHKm23lPAbicCK8X1VR%2Bvrf6EPEyzNGBpUI8t6Ti9hvZGv7mlFR%2FDn2%2BMQAbwfOYwvsZWya19RZK7QG9xbpEpNRgDtg%2B1z9dYuZCJ6iKdyJLqoqjRSO6vpgx6C18%2BuAt3PP7pxaUleFyHwutVSjllarU9JSF6fM6HrYDXAnKIfx2RkzqyR5vzvywiWJssCLPAhQCi3AknrtCVEBq%2BBaYgmj4HzWPPI6ojHovbzmxPahYkXQc1j2okP0cBs%2BglSf7VzJN9b86hgWNw1%2BFsXlbfGIfAQe2khAZKeR%2BeT7KovvxKRaP%2Frf5iYtWg9yHYEb8cMOXGxwM3IbWu4WQfekPglXBOOZSCp11ei7j1qGUMJTVm70GOqUB8DsAnnY6tB7Yv1gjTlvkJnO4RI97T%2BwyldCnVmz8tun7BJq4uAM5EcCjP9zsxdr4SfMno3%2B0jepAEN77b6sjYm3dWOt8LEX7NPdUxiqci%2BUDQ5E3dmaS4VGlBzzsszY0QV9RGN3O%2FUcwOXeblPtBE%2BtWzNipP3MGjPngKTMssUcV1bs0gb1GMlc55hwK7BHzBupw4wtBMfNMdw973KO6kjLo2o8A&X-Amz-Signature=436e49010660e41e0ec84f5b70174cc49f1d98df8994155c92a1570c09806eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSSVUJH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDm%2B4yS55ayxuT1%2FTTiwq4QLisGliOFQpaVIPWfhAcYcgIgeRCGz5NtM6gyUuTueIfK8j3OZu1sQCVfHJUr7d6PnzgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlhjB15Y66ZPTY%2FICrcAxBzwKSW%2BRkbG18Cg8FYKfdJPAn9xCrKFGlghhppmt%2BGqau%2F%2F%2BrXczjgvxAMSJKg7WZHMxFxNzX6KoTBU1t%2FtDv0d9SdS7m%2BGfnYGX0vPMcz5VCD6G2Qjo3T9AXO5WcebhtDB5srd%2Blr0nX2wnei9ENjLywUMshusQ6BnxpOYe1WGGO8x9NfCvreEqEAA4xdnDqkE69jehomEfF7haeDuQHEtVZ%2FbLuh%2FrEhjx%2Flqrr4UrOOfQbfUkl1dgIHofVzmEEQPgUFygWc05ey8MTFPHKm23lPAbicCK8X1VR%2Bvrf6EPEyzNGBpUI8t6Ti9hvZGv7mlFR%2FDn2%2BMQAbwfOYwvsZWya19RZK7QG9xbpEpNRgDtg%2B1z9dYuZCJ6iKdyJLqoqjRSO6vpgx6C18%2BuAt3PP7pxaUleFyHwutVSjllarU9JSF6fM6HrYDXAnKIfx2RkzqyR5vzvywiWJssCLPAhQCi3AknrtCVEBq%2BBaYgmj4HzWPPI6ojHovbzmxPahYkXQc1j2okP0cBs%2BglSf7VzJN9b86hgWNw1%2BFsXlbfGIfAQe2khAZKeR%2BeT7KovvxKRaP%2Frf5iYtWg9yHYEb8cMOXGxwM3IbWu4WQfekPglXBOOZSCp11ei7j1qGUMJTVm70GOqUB8DsAnnY6tB7Yv1gjTlvkJnO4RI97T%2BwyldCnVmz8tun7BJq4uAM5EcCjP9zsxdr4SfMno3%2B0jepAEN77b6sjYm3dWOt8LEX7NPdUxiqci%2BUDQ5E3dmaS4VGlBzzsszY0QV9RGN3O%2FUcwOXeblPtBE%2BtWzNipP3MGjPngKTMssUcV1bs0gb1GMlc55hwK7BHzBupw4wtBMfNMdw973KO6kjLo2o8A&X-Amz-Signature=12268f8b6b70e44f3a532d9e542b91645053dc3cfaeec25aecdab7adf7bbe9ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSSVUJH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDm%2B4yS55ayxuT1%2FTTiwq4QLisGliOFQpaVIPWfhAcYcgIgeRCGz5NtM6gyUuTueIfK8j3OZu1sQCVfHJUr7d6PnzgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlhjB15Y66ZPTY%2FICrcAxBzwKSW%2BRkbG18Cg8FYKfdJPAn9xCrKFGlghhppmt%2BGqau%2F%2F%2BrXczjgvxAMSJKg7WZHMxFxNzX6KoTBU1t%2FtDv0d9SdS7m%2BGfnYGX0vPMcz5VCD6G2Qjo3T9AXO5WcebhtDB5srd%2Blr0nX2wnei9ENjLywUMshusQ6BnxpOYe1WGGO8x9NfCvreEqEAA4xdnDqkE69jehomEfF7haeDuQHEtVZ%2FbLuh%2FrEhjx%2Flqrr4UrOOfQbfUkl1dgIHofVzmEEQPgUFygWc05ey8MTFPHKm23lPAbicCK8X1VR%2Bvrf6EPEyzNGBpUI8t6Ti9hvZGv7mlFR%2FDn2%2BMQAbwfOYwvsZWya19RZK7QG9xbpEpNRgDtg%2B1z9dYuZCJ6iKdyJLqoqjRSO6vpgx6C18%2BuAt3PP7pxaUleFyHwutVSjllarU9JSF6fM6HrYDXAnKIfx2RkzqyR5vzvywiWJssCLPAhQCi3AknrtCVEBq%2BBaYgmj4HzWPPI6ojHovbzmxPahYkXQc1j2okP0cBs%2BglSf7VzJN9b86hgWNw1%2BFsXlbfGIfAQe2khAZKeR%2BeT7KovvxKRaP%2Frf5iYtWg9yHYEb8cMOXGxwM3IbWu4WQfekPglXBOOZSCp11ei7j1qGUMJTVm70GOqUB8DsAnnY6tB7Yv1gjTlvkJnO4RI97T%2BwyldCnVmz8tun7BJq4uAM5EcCjP9zsxdr4SfMno3%2B0jepAEN77b6sjYm3dWOt8LEX7NPdUxiqci%2BUDQ5E3dmaS4VGlBzzsszY0QV9RGN3O%2FUcwOXeblPtBE%2BtWzNipP3MGjPngKTMssUcV1bs0gb1GMlc55hwK7BHzBupw4wtBMfNMdw973KO6kjLo2o8A&X-Amz-Signature=6d2be137433c0f4674896f76923d204a6f374b5983f03e4e147a3ea38f6f7fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSSVUJH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDm%2B4yS55ayxuT1%2FTTiwq4QLisGliOFQpaVIPWfhAcYcgIgeRCGz5NtM6gyUuTueIfK8j3OZu1sQCVfHJUr7d6PnzgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlhjB15Y66ZPTY%2FICrcAxBzwKSW%2BRkbG18Cg8FYKfdJPAn9xCrKFGlghhppmt%2BGqau%2F%2F%2BrXczjgvxAMSJKg7WZHMxFxNzX6KoTBU1t%2FtDv0d9SdS7m%2BGfnYGX0vPMcz5VCD6G2Qjo3T9AXO5WcebhtDB5srd%2Blr0nX2wnei9ENjLywUMshusQ6BnxpOYe1WGGO8x9NfCvreEqEAA4xdnDqkE69jehomEfF7haeDuQHEtVZ%2FbLuh%2FrEhjx%2Flqrr4UrOOfQbfUkl1dgIHofVzmEEQPgUFygWc05ey8MTFPHKm23lPAbicCK8X1VR%2Bvrf6EPEyzNGBpUI8t6Ti9hvZGv7mlFR%2FDn2%2BMQAbwfOYwvsZWya19RZK7QG9xbpEpNRgDtg%2B1z9dYuZCJ6iKdyJLqoqjRSO6vpgx6C18%2BuAt3PP7pxaUleFyHwutVSjllarU9JSF6fM6HrYDXAnKIfx2RkzqyR5vzvywiWJssCLPAhQCi3AknrtCVEBq%2BBaYgmj4HzWPPI6ojHovbzmxPahYkXQc1j2okP0cBs%2BglSf7VzJN9b86hgWNw1%2BFsXlbfGIfAQe2khAZKeR%2BeT7KovvxKRaP%2Frf5iYtWg9yHYEb8cMOXGxwM3IbWu4WQfekPglXBOOZSCp11ei7j1qGUMJTVm70GOqUB8DsAnnY6tB7Yv1gjTlvkJnO4RI97T%2BwyldCnVmz8tun7BJq4uAM5EcCjP9zsxdr4SfMno3%2B0jepAEN77b6sjYm3dWOt8LEX7NPdUxiqci%2BUDQ5E3dmaS4VGlBzzsszY0QV9RGN3O%2FUcwOXeblPtBE%2BtWzNipP3MGjPngKTMssUcV1bs0gb1GMlc55hwK7BHzBupw4wtBMfNMdw973KO6kjLo2o8A&X-Amz-Signature=01c233092d94fa740dfd386a45305b543cd0e287954dbdc78654e5e894d6ad45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSSVUJH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDm%2B4yS55ayxuT1%2FTTiwq4QLisGliOFQpaVIPWfhAcYcgIgeRCGz5NtM6gyUuTueIfK8j3OZu1sQCVfHJUr7d6PnzgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlhjB15Y66ZPTY%2FICrcAxBzwKSW%2BRkbG18Cg8FYKfdJPAn9xCrKFGlghhppmt%2BGqau%2F%2F%2BrXczjgvxAMSJKg7WZHMxFxNzX6KoTBU1t%2FtDv0d9SdS7m%2BGfnYGX0vPMcz5VCD6G2Qjo3T9AXO5WcebhtDB5srd%2Blr0nX2wnei9ENjLywUMshusQ6BnxpOYe1WGGO8x9NfCvreEqEAA4xdnDqkE69jehomEfF7haeDuQHEtVZ%2FbLuh%2FrEhjx%2Flqrr4UrOOfQbfUkl1dgIHofVzmEEQPgUFygWc05ey8MTFPHKm23lPAbicCK8X1VR%2Bvrf6EPEyzNGBpUI8t6Ti9hvZGv7mlFR%2FDn2%2BMQAbwfOYwvsZWya19RZK7QG9xbpEpNRgDtg%2B1z9dYuZCJ6iKdyJLqoqjRSO6vpgx6C18%2BuAt3PP7pxaUleFyHwutVSjllarU9JSF6fM6HrYDXAnKIfx2RkzqyR5vzvywiWJssCLPAhQCi3AknrtCVEBq%2BBaYgmj4HzWPPI6ojHovbzmxPahYkXQc1j2okP0cBs%2BglSf7VzJN9b86hgWNw1%2BFsXlbfGIfAQe2khAZKeR%2BeT7KovvxKRaP%2Frf5iYtWg9yHYEb8cMOXGxwM3IbWu4WQfekPglXBOOZSCp11ei7j1qGUMJTVm70GOqUB8DsAnnY6tB7Yv1gjTlvkJnO4RI97T%2BwyldCnVmz8tun7BJq4uAM5EcCjP9zsxdr4SfMno3%2B0jepAEN77b6sjYm3dWOt8LEX7NPdUxiqci%2BUDQ5E3dmaS4VGlBzzsszY0QV9RGN3O%2FUcwOXeblPtBE%2BtWzNipP3MGjPngKTMssUcV1bs0gb1GMlc55hwK7BHzBupw4wtBMfNMdw973KO6kjLo2o8A&X-Amz-Signature=2664ab52824e11d3ade57e68ce8cdb7f2b3a4db6706be05c7a07268bb6a9e2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSSVUJH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDm%2B4yS55ayxuT1%2FTTiwq4QLisGliOFQpaVIPWfhAcYcgIgeRCGz5NtM6gyUuTueIfK8j3OZu1sQCVfHJUr7d6PnzgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlhjB15Y66ZPTY%2FICrcAxBzwKSW%2BRkbG18Cg8FYKfdJPAn9xCrKFGlghhppmt%2BGqau%2F%2F%2BrXczjgvxAMSJKg7WZHMxFxNzX6KoTBU1t%2FtDv0d9SdS7m%2BGfnYGX0vPMcz5VCD6G2Qjo3T9AXO5WcebhtDB5srd%2Blr0nX2wnei9ENjLywUMshusQ6BnxpOYe1WGGO8x9NfCvreEqEAA4xdnDqkE69jehomEfF7haeDuQHEtVZ%2FbLuh%2FrEhjx%2Flqrr4UrOOfQbfUkl1dgIHofVzmEEQPgUFygWc05ey8MTFPHKm23lPAbicCK8X1VR%2Bvrf6EPEyzNGBpUI8t6Ti9hvZGv7mlFR%2FDn2%2BMQAbwfOYwvsZWya19RZK7QG9xbpEpNRgDtg%2B1z9dYuZCJ6iKdyJLqoqjRSO6vpgx6C18%2BuAt3PP7pxaUleFyHwutVSjllarU9JSF6fM6HrYDXAnKIfx2RkzqyR5vzvywiWJssCLPAhQCi3AknrtCVEBq%2BBaYgmj4HzWPPI6ojHovbzmxPahYkXQc1j2okP0cBs%2BglSf7VzJN9b86hgWNw1%2BFsXlbfGIfAQe2khAZKeR%2BeT7KovvxKRaP%2Frf5iYtWg9yHYEb8cMOXGxwM3IbWu4WQfekPglXBOOZSCp11ei7j1qGUMJTVm70GOqUB8DsAnnY6tB7Yv1gjTlvkJnO4RI97T%2BwyldCnVmz8tun7BJq4uAM5EcCjP9zsxdr4SfMno3%2B0jepAEN77b6sjYm3dWOt8LEX7NPdUxiqci%2BUDQ5E3dmaS4VGlBzzsszY0QV9RGN3O%2FUcwOXeblPtBE%2BtWzNipP3MGjPngKTMssUcV1bs0gb1GMlc55hwK7BHzBupw4wtBMfNMdw973KO6kjLo2o8A&X-Amz-Signature=dabca45ec6185bf8de2ae4fa7d4db2d128da300d0a77730fcc596044551c62ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSSVUJH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDm%2B4yS55ayxuT1%2FTTiwq4QLisGliOFQpaVIPWfhAcYcgIgeRCGz5NtM6gyUuTueIfK8j3OZu1sQCVfHJUr7d6PnzgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlhjB15Y66ZPTY%2FICrcAxBzwKSW%2BRkbG18Cg8FYKfdJPAn9xCrKFGlghhppmt%2BGqau%2F%2F%2BrXczjgvxAMSJKg7WZHMxFxNzX6KoTBU1t%2FtDv0d9SdS7m%2BGfnYGX0vPMcz5VCD6G2Qjo3T9AXO5WcebhtDB5srd%2Blr0nX2wnei9ENjLywUMshusQ6BnxpOYe1WGGO8x9NfCvreEqEAA4xdnDqkE69jehomEfF7haeDuQHEtVZ%2FbLuh%2FrEhjx%2Flqrr4UrOOfQbfUkl1dgIHofVzmEEQPgUFygWc05ey8MTFPHKm23lPAbicCK8X1VR%2Bvrf6EPEyzNGBpUI8t6Ti9hvZGv7mlFR%2FDn2%2BMQAbwfOYwvsZWya19RZK7QG9xbpEpNRgDtg%2B1z9dYuZCJ6iKdyJLqoqjRSO6vpgx6C18%2BuAt3PP7pxaUleFyHwutVSjllarU9JSF6fM6HrYDXAnKIfx2RkzqyR5vzvywiWJssCLPAhQCi3AknrtCVEBq%2BBaYgmj4HzWPPI6ojHovbzmxPahYkXQc1j2okP0cBs%2BglSf7VzJN9b86hgWNw1%2BFsXlbfGIfAQe2khAZKeR%2BeT7KovvxKRaP%2Frf5iYtWg9yHYEb8cMOXGxwM3IbWu4WQfekPglXBOOZSCp11ei7j1qGUMJTVm70GOqUB8DsAnnY6tB7Yv1gjTlvkJnO4RI97T%2BwyldCnVmz8tun7BJq4uAM5EcCjP9zsxdr4SfMno3%2B0jepAEN77b6sjYm3dWOt8LEX7NPdUxiqci%2BUDQ5E3dmaS4VGlBzzsszY0QV9RGN3O%2FUcwOXeblPtBE%2BtWzNipP3MGjPngKTMssUcV1bs0gb1GMlc55hwK7BHzBupw4wtBMfNMdw973KO6kjLo2o8A&X-Amz-Signature=6ffdb20584a835369171e04f4449b5a64ace1b5b48eca5fbbc832bc222fe1f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSSVUJH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDm%2B4yS55ayxuT1%2FTTiwq4QLisGliOFQpaVIPWfhAcYcgIgeRCGz5NtM6gyUuTueIfK8j3OZu1sQCVfHJUr7d6PnzgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlhjB15Y66ZPTY%2FICrcAxBzwKSW%2BRkbG18Cg8FYKfdJPAn9xCrKFGlghhppmt%2BGqau%2F%2F%2BrXczjgvxAMSJKg7WZHMxFxNzX6KoTBU1t%2FtDv0d9SdS7m%2BGfnYGX0vPMcz5VCD6G2Qjo3T9AXO5WcebhtDB5srd%2Blr0nX2wnei9ENjLywUMshusQ6BnxpOYe1WGGO8x9NfCvreEqEAA4xdnDqkE69jehomEfF7haeDuQHEtVZ%2FbLuh%2FrEhjx%2Flqrr4UrOOfQbfUkl1dgIHofVzmEEQPgUFygWc05ey8MTFPHKm23lPAbicCK8X1VR%2Bvrf6EPEyzNGBpUI8t6Ti9hvZGv7mlFR%2FDn2%2BMQAbwfOYwvsZWya19RZK7QG9xbpEpNRgDtg%2B1z9dYuZCJ6iKdyJLqoqjRSO6vpgx6C18%2BuAt3PP7pxaUleFyHwutVSjllarU9JSF6fM6HrYDXAnKIfx2RkzqyR5vzvywiWJssCLPAhQCi3AknrtCVEBq%2BBaYgmj4HzWPPI6ojHovbzmxPahYkXQc1j2okP0cBs%2BglSf7VzJN9b86hgWNw1%2BFsXlbfGIfAQe2khAZKeR%2BeT7KovvxKRaP%2Frf5iYtWg9yHYEb8cMOXGxwM3IbWu4WQfekPglXBOOZSCp11ei7j1qGUMJTVm70GOqUB8DsAnnY6tB7Yv1gjTlvkJnO4RI97T%2BwyldCnVmz8tun7BJq4uAM5EcCjP9zsxdr4SfMno3%2B0jepAEN77b6sjYm3dWOt8LEX7NPdUxiqci%2BUDQ5E3dmaS4VGlBzzsszY0QV9RGN3O%2FUcwOXeblPtBE%2BtWzNipP3MGjPngKTMssUcV1bs0gb1GMlc55hwK7BHzBupw4wtBMfNMdw973KO6kjLo2o8A&X-Amz-Signature=27935330c9187534c8feeb5b587125d6844bf6667b1a24c4c3d9ac8291d0ef6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

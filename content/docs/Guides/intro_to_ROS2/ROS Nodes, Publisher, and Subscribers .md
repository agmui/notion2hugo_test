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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2BPVGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC5jt2nVnuzBOj00DhjXvVjV8bw%2FLHgr%2Bf7DwTYceH8hgIgBISze1e%2Bn3diCzGOqinlNvPk7xUDyxrhQT0DX6NWHiUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqvl7LUWMn6SiZd2CrcAwLubzRcDuoyhe27EjsK0AJacAUT%2Bxa6qlqxYEAp%2B0QZxkpR99NX8pi%2Bw32aTYtGtS6K8GSSynPsHihxZMvSnG5MdJ86SZcxhJEBNvOFyBCj3D%2Bq%2Fgt4BRH67btrJp8KrbG3VH6HUa8Mq%2BuMdZjmtHSoHGJl8gsv%2FTqcm7%2Bp0aOlUbTDzw81uHjfuN6SWJtvft3j%2F1XavZSkWf72J6VNf3eV4KIJh%2B7htyGGFvodXDsucckWq0h7Ud21g%2B6bpCDxRn8i0SDRHtMOCrX1hiY%2Fa5MnXfLlYrhAk%2F1Gj5v%2F3aE2BCkbiYUI7MGIHX96MGzU4A3Bh%2BO%2BhIxiw4Lg7MVatATyl38loih0u21ClbecbMeTp40Hbiboqg7TjGM2E3SC2UyOf3jQjQQkd589C0OZR2oL%2B%2BjSaegb30K0RBSlNCBEY2Ntl3LLt0YAgoDPLHY%2BrJLjDmkXV4o4bAgKLqIz5SPrkS8AUL8X7hGPnwkuureBgIc9dduO2iuggCcDIDJrx%2BIi3PIQhfC1OfI1ASaFWBBuEjBYKoffOxv%2Bqu0Xk30eHNoLcB52%2BvfBRJRiFizViWplPJRvd2QGMBSiU4rVrhZcxDEzFBdNrPTmHan9lCmwem9Fh8u6iHFqZftwMN3w5b8GOqUBTmV0j5WMAJMJlWJBVuoq2AnX5v8hymdhut%2Fy7210il%2BQxId0A1vQMTgrMp3o1xKlyjoKOnfzS%2BKJGGPOHbpKAm4zjYabMY8oMOHdpD3JjEa7jxEkla3zRz7BVr4v06luHEfg8cOrl7nE%2BUgfadAsFcckrP2oEaVoeEFtD2UpakygwwUfmfnJY3vHwIRw%2FjIwKlKsyJnYpQV2z3AVh23iMmPSUYua&X-Amz-Signature=de90ad5f48e5ce837f3960e00b3c911c3e6b5cfbc364708a0bfbc8023810d948&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2BPVGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC5jt2nVnuzBOj00DhjXvVjV8bw%2FLHgr%2Bf7DwTYceH8hgIgBISze1e%2Bn3diCzGOqinlNvPk7xUDyxrhQT0DX6NWHiUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqvl7LUWMn6SiZd2CrcAwLubzRcDuoyhe27EjsK0AJacAUT%2Bxa6qlqxYEAp%2B0QZxkpR99NX8pi%2Bw32aTYtGtS6K8GSSynPsHihxZMvSnG5MdJ86SZcxhJEBNvOFyBCj3D%2Bq%2Fgt4BRH67btrJp8KrbG3VH6HUa8Mq%2BuMdZjmtHSoHGJl8gsv%2FTqcm7%2Bp0aOlUbTDzw81uHjfuN6SWJtvft3j%2F1XavZSkWf72J6VNf3eV4KIJh%2B7htyGGFvodXDsucckWq0h7Ud21g%2B6bpCDxRn8i0SDRHtMOCrX1hiY%2Fa5MnXfLlYrhAk%2F1Gj5v%2F3aE2BCkbiYUI7MGIHX96MGzU4A3Bh%2BO%2BhIxiw4Lg7MVatATyl38loih0u21ClbecbMeTp40Hbiboqg7TjGM2E3SC2UyOf3jQjQQkd589C0OZR2oL%2B%2BjSaegb30K0RBSlNCBEY2Ntl3LLt0YAgoDPLHY%2BrJLjDmkXV4o4bAgKLqIz5SPrkS8AUL8X7hGPnwkuureBgIc9dduO2iuggCcDIDJrx%2BIi3PIQhfC1OfI1ASaFWBBuEjBYKoffOxv%2Bqu0Xk30eHNoLcB52%2BvfBRJRiFizViWplPJRvd2QGMBSiU4rVrhZcxDEzFBdNrPTmHan9lCmwem9Fh8u6iHFqZftwMN3w5b8GOqUBTmV0j5WMAJMJlWJBVuoq2AnX5v8hymdhut%2Fy7210il%2BQxId0A1vQMTgrMp3o1xKlyjoKOnfzS%2BKJGGPOHbpKAm4zjYabMY8oMOHdpD3JjEa7jxEkla3zRz7BVr4v06luHEfg8cOrl7nE%2BUgfadAsFcckrP2oEaVoeEFtD2UpakygwwUfmfnJY3vHwIRw%2FjIwKlKsyJnYpQV2z3AVh23iMmPSUYua&X-Amz-Signature=6f3dd86f59b98f557a125dd30ad5d7e2149751e6a74174cf7da860218628fd3b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2BPVGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC5jt2nVnuzBOj00DhjXvVjV8bw%2FLHgr%2Bf7DwTYceH8hgIgBISze1e%2Bn3diCzGOqinlNvPk7xUDyxrhQT0DX6NWHiUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqvl7LUWMn6SiZd2CrcAwLubzRcDuoyhe27EjsK0AJacAUT%2Bxa6qlqxYEAp%2B0QZxkpR99NX8pi%2Bw32aTYtGtS6K8GSSynPsHihxZMvSnG5MdJ86SZcxhJEBNvOFyBCj3D%2Bq%2Fgt4BRH67btrJp8KrbG3VH6HUa8Mq%2BuMdZjmtHSoHGJl8gsv%2FTqcm7%2Bp0aOlUbTDzw81uHjfuN6SWJtvft3j%2F1XavZSkWf72J6VNf3eV4KIJh%2B7htyGGFvodXDsucckWq0h7Ud21g%2B6bpCDxRn8i0SDRHtMOCrX1hiY%2Fa5MnXfLlYrhAk%2F1Gj5v%2F3aE2BCkbiYUI7MGIHX96MGzU4A3Bh%2BO%2BhIxiw4Lg7MVatATyl38loih0u21ClbecbMeTp40Hbiboqg7TjGM2E3SC2UyOf3jQjQQkd589C0OZR2oL%2B%2BjSaegb30K0RBSlNCBEY2Ntl3LLt0YAgoDPLHY%2BrJLjDmkXV4o4bAgKLqIz5SPrkS8AUL8X7hGPnwkuureBgIc9dduO2iuggCcDIDJrx%2BIi3PIQhfC1OfI1ASaFWBBuEjBYKoffOxv%2Bqu0Xk30eHNoLcB52%2BvfBRJRiFizViWplPJRvd2QGMBSiU4rVrhZcxDEzFBdNrPTmHan9lCmwem9Fh8u6iHFqZftwMN3w5b8GOqUBTmV0j5WMAJMJlWJBVuoq2AnX5v8hymdhut%2Fy7210il%2BQxId0A1vQMTgrMp3o1xKlyjoKOnfzS%2BKJGGPOHbpKAm4zjYabMY8oMOHdpD3JjEa7jxEkla3zRz7BVr4v06luHEfg8cOrl7nE%2BUgfadAsFcckrP2oEaVoeEFtD2UpakygwwUfmfnJY3vHwIRw%2FjIwKlKsyJnYpQV2z3AVh23iMmPSUYua&X-Amz-Signature=72f43bbd46e6daf9f3cced6d5f395696c9300be842d7f8a738d96fe9bd601639&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2BPVGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC5jt2nVnuzBOj00DhjXvVjV8bw%2FLHgr%2Bf7DwTYceH8hgIgBISze1e%2Bn3diCzGOqinlNvPk7xUDyxrhQT0DX6NWHiUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqvl7LUWMn6SiZd2CrcAwLubzRcDuoyhe27EjsK0AJacAUT%2Bxa6qlqxYEAp%2B0QZxkpR99NX8pi%2Bw32aTYtGtS6K8GSSynPsHihxZMvSnG5MdJ86SZcxhJEBNvOFyBCj3D%2Bq%2Fgt4BRH67btrJp8KrbG3VH6HUa8Mq%2BuMdZjmtHSoHGJl8gsv%2FTqcm7%2Bp0aOlUbTDzw81uHjfuN6SWJtvft3j%2F1XavZSkWf72J6VNf3eV4KIJh%2B7htyGGFvodXDsucckWq0h7Ud21g%2B6bpCDxRn8i0SDRHtMOCrX1hiY%2Fa5MnXfLlYrhAk%2F1Gj5v%2F3aE2BCkbiYUI7MGIHX96MGzU4A3Bh%2BO%2BhIxiw4Lg7MVatATyl38loih0u21ClbecbMeTp40Hbiboqg7TjGM2E3SC2UyOf3jQjQQkd589C0OZR2oL%2B%2BjSaegb30K0RBSlNCBEY2Ntl3LLt0YAgoDPLHY%2BrJLjDmkXV4o4bAgKLqIz5SPrkS8AUL8X7hGPnwkuureBgIc9dduO2iuggCcDIDJrx%2BIi3PIQhfC1OfI1ASaFWBBuEjBYKoffOxv%2Bqu0Xk30eHNoLcB52%2BvfBRJRiFizViWplPJRvd2QGMBSiU4rVrhZcxDEzFBdNrPTmHan9lCmwem9Fh8u6iHFqZftwMN3w5b8GOqUBTmV0j5WMAJMJlWJBVuoq2AnX5v8hymdhut%2Fy7210il%2BQxId0A1vQMTgrMp3o1xKlyjoKOnfzS%2BKJGGPOHbpKAm4zjYabMY8oMOHdpD3JjEa7jxEkla3zRz7BVr4v06luHEfg8cOrl7nE%2BUgfadAsFcckrP2oEaVoeEFtD2UpakygwwUfmfnJY3vHwIRw%2FjIwKlKsyJnYpQV2z3AVh23iMmPSUYua&X-Amz-Signature=68e1d408dde78e83b3891019885e402356d970f0e9730ddb04c3204d74d3995d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2BPVGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC5jt2nVnuzBOj00DhjXvVjV8bw%2FLHgr%2Bf7DwTYceH8hgIgBISze1e%2Bn3diCzGOqinlNvPk7xUDyxrhQT0DX6NWHiUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqvl7LUWMn6SiZd2CrcAwLubzRcDuoyhe27EjsK0AJacAUT%2Bxa6qlqxYEAp%2B0QZxkpR99NX8pi%2Bw32aTYtGtS6K8GSSynPsHihxZMvSnG5MdJ86SZcxhJEBNvOFyBCj3D%2Bq%2Fgt4BRH67btrJp8KrbG3VH6HUa8Mq%2BuMdZjmtHSoHGJl8gsv%2FTqcm7%2Bp0aOlUbTDzw81uHjfuN6SWJtvft3j%2F1XavZSkWf72J6VNf3eV4KIJh%2B7htyGGFvodXDsucckWq0h7Ud21g%2B6bpCDxRn8i0SDRHtMOCrX1hiY%2Fa5MnXfLlYrhAk%2F1Gj5v%2F3aE2BCkbiYUI7MGIHX96MGzU4A3Bh%2BO%2BhIxiw4Lg7MVatATyl38loih0u21ClbecbMeTp40Hbiboqg7TjGM2E3SC2UyOf3jQjQQkd589C0OZR2oL%2B%2BjSaegb30K0RBSlNCBEY2Ntl3LLt0YAgoDPLHY%2BrJLjDmkXV4o4bAgKLqIz5SPrkS8AUL8X7hGPnwkuureBgIc9dduO2iuggCcDIDJrx%2BIi3PIQhfC1OfI1ASaFWBBuEjBYKoffOxv%2Bqu0Xk30eHNoLcB52%2BvfBRJRiFizViWplPJRvd2QGMBSiU4rVrhZcxDEzFBdNrPTmHan9lCmwem9Fh8u6iHFqZftwMN3w5b8GOqUBTmV0j5WMAJMJlWJBVuoq2AnX5v8hymdhut%2Fy7210il%2BQxId0A1vQMTgrMp3o1xKlyjoKOnfzS%2BKJGGPOHbpKAm4zjYabMY8oMOHdpD3JjEa7jxEkla3zRz7BVr4v06luHEfg8cOrl7nE%2BUgfadAsFcckrP2oEaVoeEFtD2UpakygwwUfmfnJY3vHwIRw%2FjIwKlKsyJnYpQV2z3AVh23iMmPSUYua&X-Amz-Signature=91f0f849007a6c07216b76da4de43592945740317cc784f4e82819e8bb30955e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2BPVGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC5jt2nVnuzBOj00DhjXvVjV8bw%2FLHgr%2Bf7DwTYceH8hgIgBISze1e%2Bn3diCzGOqinlNvPk7xUDyxrhQT0DX6NWHiUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqvl7LUWMn6SiZd2CrcAwLubzRcDuoyhe27EjsK0AJacAUT%2Bxa6qlqxYEAp%2B0QZxkpR99NX8pi%2Bw32aTYtGtS6K8GSSynPsHihxZMvSnG5MdJ86SZcxhJEBNvOFyBCj3D%2Bq%2Fgt4BRH67btrJp8KrbG3VH6HUa8Mq%2BuMdZjmtHSoHGJl8gsv%2FTqcm7%2Bp0aOlUbTDzw81uHjfuN6SWJtvft3j%2F1XavZSkWf72J6VNf3eV4KIJh%2B7htyGGFvodXDsucckWq0h7Ud21g%2B6bpCDxRn8i0SDRHtMOCrX1hiY%2Fa5MnXfLlYrhAk%2F1Gj5v%2F3aE2BCkbiYUI7MGIHX96MGzU4A3Bh%2BO%2BhIxiw4Lg7MVatATyl38loih0u21ClbecbMeTp40Hbiboqg7TjGM2E3SC2UyOf3jQjQQkd589C0OZR2oL%2B%2BjSaegb30K0RBSlNCBEY2Ntl3LLt0YAgoDPLHY%2BrJLjDmkXV4o4bAgKLqIz5SPrkS8AUL8X7hGPnwkuureBgIc9dduO2iuggCcDIDJrx%2BIi3PIQhfC1OfI1ASaFWBBuEjBYKoffOxv%2Bqu0Xk30eHNoLcB52%2BvfBRJRiFizViWplPJRvd2QGMBSiU4rVrhZcxDEzFBdNrPTmHan9lCmwem9Fh8u6iHFqZftwMN3w5b8GOqUBTmV0j5WMAJMJlWJBVuoq2AnX5v8hymdhut%2Fy7210il%2BQxId0A1vQMTgrMp3o1xKlyjoKOnfzS%2BKJGGPOHbpKAm4zjYabMY8oMOHdpD3JjEa7jxEkla3zRz7BVr4v06luHEfg8cOrl7nE%2BUgfadAsFcckrP2oEaVoeEFtD2UpakygwwUfmfnJY3vHwIRw%2FjIwKlKsyJnYpQV2z3AVh23iMmPSUYua&X-Amz-Signature=ed5a65f7b3648d73257903007f266326554fa39273c089f3b43dcfd64b052373&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2BPVGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC5jt2nVnuzBOj00DhjXvVjV8bw%2FLHgr%2Bf7DwTYceH8hgIgBISze1e%2Bn3diCzGOqinlNvPk7xUDyxrhQT0DX6NWHiUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqvl7LUWMn6SiZd2CrcAwLubzRcDuoyhe27EjsK0AJacAUT%2Bxa6qlqxYEAp%2B0QZxkpR99NX8pi%2Bw32aTYtGtS6K8GSSynPsHihxZMvSnG5MdJ86SZcxhJEBNvOFyBCj3D%2Bq%2Fgt4BRH67btrJp8KrbG3VH6HUa8Mq%2BuMdZjmtHSoHGJl8gsv%2FTqcm7%2Bp0aOlUbTDzw81uHjfuN6SWJtvft3j%2F1XavZSkWf72J6VNf3eV4KIJh%2B7htyGGFvodXDsucckWq0h7Ud21g%2B6bpCDxRn8i0SDRHtMOCrX1hiY%2Fa5MnXfLlYrhAk%2F1Gj5v%2F3aE2BCkbiYUI7MGIHX96MGzU4A3Bh%2BO%2BhIxiw4Lg7MVatATyl38loih0u21ClbecbMeTp40Hbiboqg7TjGM2E3SC2UyOf3jQjQQkd589C0OZR2oL%2B%2BjSaegb30K0RBSlNCBEY2Ntl3LLt0YAgoDPLHY%2BrJLjDmkXV4o4bAgKLqIz5SPrkS8AUL8X7hGPnwkuureBgIc9dduO2iuggCcDIDJrx%2BIi3PIQhfC1OfI1ASaFWBBuEjBYKoffOxv%2Bqu0Xk30eHNoLcB52%2BvfBRJRiFizViWplPJRvd2QGMBSiU4rVrhZcxDEzFBdNrPTmHan9lCmwem9Fh8u6iHFqZftwMN3w5b8GOqUBTmV0j5WMAJMJlWJBVuoq2AnX5v8hymdhut%2Fy7210il%2BQxId0A1vQMTgrMp3o1xKlyjoKOnfzS%2BKJGGPOHbpKAm4zjYabMY8oMOHdpD3JjEa7jxEkla3zRz7BVr4v06luHEfg8cOrl7nE%2BUgfadAsFcckrP2oEaVoeEFtD2UpakygwwUfmfnJY3vHwIRw%2FjIwKlKsyJnYpQV2z3AVh23iMmPSUYua&X-Amz-Signature=29a072652956ef6fddb323036b0523a048e4afbb6a7cc2c6d20ee307e5f5b78f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2BPVGC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC5jt2nVnuzBOj00DhjXvVjV8bw%2FLHgr%2Bf7DwTYceH8hgIgBISze1e%2Bn3diCzGOqinlNvPk7xUDyxrhQT0DX6NWHiUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqvl7LUWMn6SiZd2CrcAwLubzRcDuoyhe27EjsK0AJacAUT%2Bxa6qlqxYEAp%2B0QZxkpR99NX8pi%2Bw32aTYtGtS6K8GSSynPsHihxZMvSnG5MdJ86SZcxhJEBNvOFyBCj3D%2Bq%2Fgt4BRH67btrJp8KrbG3VH6HUa8Mq%2BuMdZjmtHSoHGJl8gsv%2FTqcm7%2Bp0aOlUbTDzw81uHjfuN6SWJtvft3j%2F1XavZSkWf72J6VNf3eV4KIJh%2B7htyGGFvodXDsucckWq0h7Ud21g%2B6bpCDxRn8i0SDRHtMOCrX1hiY%2Fa5MnXfLlYrhAk%2F1Gj5v%2F3aE2BCkbiYUI7MGIHX96MGzU4A3Bh%2BO%2BhIxiw4Lg7MVatATyl38loih0u21ClbecbMeTp40Hbiboqg7TjGM2E3SC2UyOf3jQjQQkd589C0OZR2oL%2B%2BjSaegb30K0RBSlNCBEY2Ntl3LLt0YAgoDPLHY%2BrJLjDmkXV4o4bAgKLqIz5SPrkS8AUL8X7hGPnwkuureBgIc9dduO2iuggCcDIDJrx%2BIi3PIQhfC1OfI1ASaFWBBuEjBYKoffOxv%2Bqu0Xk30eHNoLcB52%2BvfBRJRiFizViWplPJRvd2QGMBSiU4rVrhZcxDEzFBdNrPTmHan9lCmwem9Fh8u6iHFqZftwMN3w5b8GOqUBTmV0j5WMAJMJlWJBVuoq2AnX5v8hymdhut%2Fy7210il%2BQxId0A1vQMTgrMp3o1xKlyjoKOnfzS%2BKJGGPOHbpKAm4zjYabMY8oMOHdpD3JjEa7jxEkla3zRz7BVr4v06luHEfg8cOrl7nE%2BUgfadAsFcckrP2oEaVoeEFtD2UpakygwwUfmfnJY3vHwIRw%2FjIwKlKsyJnYpQV2z3AVh23iMmPSUYua&X-Amz-Signature=44567b0a371c4c737c131f79aab77153c3c5f11fcd5ce0b9aa4b6a5b02e8dcb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

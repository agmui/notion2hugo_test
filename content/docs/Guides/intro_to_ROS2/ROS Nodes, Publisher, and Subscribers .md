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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW5NYA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE%2BYQnr%2FW2fwgSpMxRf7NZBNZEfTZY8Vuxfc6fIOBdHAIgJaN%2BXWR7yrPRBW%2BomFf0ki%2FW%2FMDqA1t3HPemDLznIjYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1s2JhMfwDuANaFbCrcA4z%2BHj7%2FAQZNNvgEMOGa3TsxooJyZTh1XYJhtOi1JwmPtG1l70hJilECx%2BzneyMbekkSYyL0eE32GES8WcGMc8OW770yikCn%2BjU9gxEgqC9LAYfSJRbosNNKZbb994FFcgguXEaqEO1jBzThvheJr6WYRo78WDkvtoV91Z2Br0eMb227hhOEVhKmA3TKhPuY6x677a5sttOZFOXa0MEvV4zSoK5fiT%2FMw8%2BoBv%2BIBVcWhTf6IukvPfooTH2cN%2B5XIjbfUCCfdTSyM%2BZ57HGhVwR9M4V1kxGCrj1iytt8SXunZgLKSPW%2F8bPd%2FaAUT%2FRoglfMIIGx9BNC58pGITuujXi9xsLWV1oXnqe1NcGonQSZgNSlZWQBwVmSMpizwM8WD130XGqYb%2BuLN9UwhyfeNBNfB5Vq5KI60rdL%2BsxEaROvtBUQDWLhhWXDmPiwX1K2K8aTS7AFS%2BfcWIaFWSkxqQRtbRlRhxtueBP4eKwW19JPPKfl4TUIIsxLoPQsBFXUxPy%2FFo89tQhM3zK0YNTtbsmQRWmHkfZNY4Ocpw13LHKJTJIm%2BbPHcB%2Bubi2GFbgma4H13VSgUNWdrXVJWCsg8lyHVicAXi9F19RH2zhjNCIjN9Wzrd5actpZ757bMKmXjsAGOqUBnmOAEinO%2BYDMVXrjscyJeZ1mVQNpANiRv0%2BZL6jeglqONSAOXWGt7e3oMO%2FVKsQFiUXOv4sZz69hyoQiWZFX8dohJOi8RKHHFgE3OjrKIA6y5ZYrCG6UG9QD93iJ1GoUvTTfwguALFbXbYYZ4Z%2FBfP9kglOKAjXSTZZeEDNve1P05C8WR76yOkoyYVkp4dPXg9n984HHUBjrEbPPcDY9kB0tfA8u&X-Amz-Signature=94b7ee3b2917f9fc6f3a41c57eb87fc76fb9eb01ae1ad57a807584a6ff99a93d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW5NYA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE%2BYQnr%2FW2fwgSpMxRf7NZBNZEfTZY8Vuxfc6fIOBdHAIgJaN%2BXWR7yrPRBW%2BomFf0ki%2FW%2FMDqA1t3HPemDLznIjYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1s2JhMfwDuANaFbCrcA4z%2BHj7%2FAQZNNvgEMOGa3TsxooJyZTh1XYJhtOi1JwmPtG1l70hJilECx%2BzneyMbekkSYyL0eE32GES8WcGMc8OW770yikCn%2BjU9gxEgqC9LAYfSJRbosNNKZbb994FFcgguXEaqEO1jBzThvheJr6WYRo78WDkvtoV91Z2Br0eMb227hhOEVhKmA3TKhPuY6x677a5sttOZFOXa0MEvV4zSoK5fiT%2FMw8%2BoBv%2BIBVcWhTf6IukvPfooTH2cN%2B5XIjbfUCCfdTSyM%2BZ57HGhVwR9M4V1kxGCrj1iytt8SXunZgLKSPW%2F8bPd%2FaAUT%2FRoglfMIIGx9BNC58pGITuujXi9xsLWV1oXnqe1NcGonQSZgNSlZWQBwVmSMpizwM8WD130XGqYb%2BuLN9UwhyfeNBNfB5Vq5KI60rdL%2BsxEaROvtBUQDWLhhWXDmPiwX1K2K8aTS7AFS%2BfcWIaFWSkxqQRtbRlRhxtueBP4eKwW19JPPKfl4TUIIsxLoPQsBFXUxPy%2FFo89tQhM3zK0YNTtbsmQRWmHkfZNY4Ocpw13LHKJTJIm%2BbPHcB%2Bubi2GFbgma4H13VSgUNWdrXVJWCsg8lyHVicAXi9F19RH2zhjNCIjN9Wzrd5actpZ757bMKmXjsAGOqUBnmOAEinO%2BYDMVXrjscyJeZ1mVQNpANiRv0%2BZL6jeglqONSAOXWGt7e3oMO%2FVKsQFiUXOv4sZz69hyoQiWZFX8dohJOi8RKHHFgE3OjrKIA6y5ZYrCG6UG9QD93iJ1GoUvTTfwguALFbXbYYZ4Z%2FBfP9kglOKAjXSTZZeEDNve1P05C8WR76yOkoyYVkp4dPXg9n984HHUBjrEbPPcDY9kB0tfA8u&X-Amz-Signature=69da343dd8fcdba7812ca509e4561e810f137dc61543250b5af81a87dd4edcdb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW5NYA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE%2BYQnr%2FW2fwgSpMxRf7NZBNZEfTZY8Vuxfc6fIOBdHAIgJaN%2BXWR7yrPRBW%2BomFf0ki%2FW%2FMDqA1t3HPemDLznIjYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1s2JhMfwDuANaFbCrcA4z%2BHj7%2FAQZNNvgEMOGa3TsxooJyZTh1XYJhtOi1JwmPtG1l70hJilECx%2BzneyMbekkSYyL0eE32GES8WcGMc8OW770yikCn%2BjU9gxEgqC9LAYfSJRbosNNKZbb994FFcgguXEaqEO1jBzThvheJr6WYRo78WDkvtoV91Z2Br0eMb227hhOEVhKmA3TKhPuY6x677a5sttOZFOXa0MEvV4zSoK5fiT%2FMw8%2BoBv%2BIBVcWhTf6IukvPfooTH2cN%2B5XIjbfUCCfdTSyM%2BZ57HGhVwR9M4V1kxGCrj1iytt8SXunZgLKSPW%2F8bPd%2FaAUT%2FRoglfMIIGx9BNC58pGITuujXi9xsLWV1oXnqe1NcGonQSZgNSlZWQBwVmSMpizwM8WD130XGqYb%2BuLN9UwhyfeNBNfB5Vq5KI60rdL%2BsxEaROvtBUQDWLhhWXDmPiwX1K2K8aTS7AFS%2BfcWIaFWSkxqQRtbRlRhxtueBP4eKwW19JPPKfl4TUIIsxLoPQsBFXUxPy%2FFo89tQhM3zK0YNTtbsmQRWmHkfZNY4Ocpw13LHKJTJIm%2BbPHcB%2Bubi2GFbgma4H13VSgUNWdrXVJWCsg8lyHVicAXi9F19RH2zhjNCIjN9Wzrd5actpZ757bMKmXjsAGOqUBnmOAEinO%2BYDMVXrjscyJeZ1mVQNpANiRv0%2BZL6jeglqONSAOXWGt7e3oMO%2FVKsQFiUXOv4sZz69hyoQiWZFX8dohJOi8RKHHFgE3OjrKIA6y5ZYrCG6UG9QD93iJ1GoUvTTfwguALFbXbYYZ4Z%2FBfP9kglOKAjXSTZZeEDNve1P05C8WR76yOkoyYVkp4dPXg9n984HHUBjrEbPPcDY9kB0tfA8u&X-Amz-Signature=112dfa80d85d0b7c5bcf8e02a6017b150f430ff43c4d9738baabba0a382feaf0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW5NYA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE%2BYQnr%2FW2fwgSpMxRf7NZBNZEfTZY8Vuxfc6fIOBdHAIgJaN%2BXWR7yrPRBW%2BomFf0ki%2FW%2FMDqA1t3HPemDLznIjYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1s2JhMfwDuANaFbCrcA4z%2BHj7%2FAQZNNvgEMOGa3TsxooJyZTh1XYJhtOi1JwmPtG1l70hJilECx%2BzneyMbekkSYyL0eE32GES8WcGMc8OW770yikCn%2BjU9gxEgqC9LAYfSJRbosNNKZbb994FFcgguXEaqEO1jBzThvheJr6WYRo78WDkvtoV91Z2Br0eMb227hhOEVhKmA3TKhPuY6x677a5sttOZFOXa0MEvV4zSoK5fiT%2FMw8%2BoBv%2BIBVcWhTf6IukvPfooTH2cN%2B5XIjbfUCCfdTSyM%2BZ57HGhVwR9M4V1kxGCrj1iytt8SXunZgLKSPW%2F8bPd%2FaAUT%2FRoglfMIIGx9BNC58pGITuujXi9xsLWV1oXnqe1NcGonQSZgNSlZWQBwVmSMpizwM8WD130XGqYb%2BuLN9UwhyfeNBNfB5Vq5KI60rdL%2BsxEaROvtBUQDWLhhWXDmPiwX1K2K8aTS7AFS%2BfcWIaFWSkxqQRtbRlRhxtueBP4eKwW19JPPKfl4TUIIsxLoPQsBFXUxPy%2FFo89tQhM3zK0YNTtbsmQRWmHkfZNY4Ocpw13LHKJTJIm%2BbPHcB%2Bubi2GFbgma4H13VSgUNWdrXVJWCsg8lyHVicAXi9F19RH2zhjNCIjN9Wzrd5actpZ757bMKmXjsAGOqUBnmOAEinO%2BYDMVXrjscyJeZ1mVQNpANiRv0%2BZL6jeglqONSAOXWGt7e3oMO%2FVKsQFiUXOv4sZz69hyoQiWZFX8dohJOi8RKHHFgE3OjrKIA6y5ZYrCG6UG9QD93iJ1GoUvTTfwguALFbXbYYZ4Z%2FBfP9kglOKAjXSTZZeEDNve1P05C8WR76yOkoyYVkp4dPXg9n984HHUBjrEbPPcDY9kB0tfA8u&X-Amz-Signature=216dcbd5831ecefee5e00c3c3d65c949e3c2f139dc5ead42087d94a7224d94ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW5NYA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE%2BYQnr%2FW2fwgSpMxRf7NZBNZEfTZY8Vuxfc6fIOBdHAIgJaN%2BXWR7yrPRBW%2BomFf0ki%2FW%2FMDqA1t3HPemDLznIjYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1s2JhMfwDuANaFbCrcA4z%2BHj7%2FAQZNNvgEMOGa3TsxooJyZTh1XYJhtOi1JwmPtG1l70hJilECx%2BzneyMbekkSYyL0eE32GES8WcGMc8OW770yikCn%2BjU9gxEgqC9LAYfSJRbosNNKZbb994FFcgguXEaqEO1jBzThvheJr6WYRo78WDkvtoV91Z2Br0eMb227hhOEVhKmA3TKhPuY6x677a5sttOZFOXa0MEvV4zSoK5fiT%2FMw8%2BoBv%2BIBVcWhTf6IukvPfooTH2cN%2B5XIjbfUCCfdTSyM%2BZ57HGhVwR9M4V1kxGCrj1iytt8SXunZgLKSPW%2F8bPd%2FaAUT%2FRoglfMIIGx9BNC58pGITuujXi9xsLWV1oXnqe1NcGonQSZgNSlZWQBwVmSMpizwM8WD130XGqYb%2BuLN9UwhyfeNBNfB5Vq5KI60rdL%2BsxEaROvtBUQDWLhhWXDmPiwX1K2K8aTS7AFS%2BfcWIaFWSkxqQRtbRlRhxtueBP4eKwW19JPPKfl4TUIIsxLoPQsBFXUxPy%2FFo89tQhM3zK0YNTtbsmQRWmHkfZNY4Ocpw13LHKJTJIm%2BbPHcB%2Bubi2GFbgma4H13VSgUNWdrXVJWCsg8lyHVicAXi9F19RH2zhjNCIjN9Wzrd5actpZ757bMKmXjsAGOqUBnmOAEinO%2BYDMVXrjscyJeZ1mVQNpANiRv0%2BZL6jeglqONSAOXWGt7e3oMO%2FVKsQFiUXOv4sZz69hyoQiWZFX8dohJOi8RKHHFgE3OjrKIA6y5ZYrCG6UG9QD93iJ1GoUvTTfwguALFbXbYYZ4Z%2FBfP9kglOKAjXSTZZeEDNve1P05C8WR76yOkoyYVkp4dPXg9n984HHUBjrEbPPcDY9kB0tfA8u&X-Amz-Signature=9ee3c3a1732e039260f74ba42a0cd946d7af4371c281d994e8a966426c7a1c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW5NYA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE%2BYQnr%2FW2fwgSpMxRf7NZBNZEfTZY8Vuxfc6fIOBdHAIgJaN%2BXWR7yrPRBW%2BomFf0ki%2FW%2FMDqA1t3HPemDLznIjYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1s2JhMfwDuANaFbCrcA4z%2BHj7%2FAQZNNvgEMOGa3TsxooJyZTh1XYJhtOi1JwmPtG1l70hJilECx%2BzneyMbekkSYyL0eE32GES8WcGMc8OW770yikCn%2BjU9gxEgqC9LAYfSJRbosNNKZbb994FFcgguXEaqEO1jBzThvheJr6WYRo78WDkvtoV91Z2Br0eMb227hhOEVhKmA3TKhPuY6x677a5sttOZFOXa0MEvV4zSoK5fiT%2FMw8%2BoBv%2BIBVcWhTf6IukvPfooTH2cN%2B5XIjbfUCCfdTSyM%2BZ57HGhVwR9M4V1kxGCrj1iytt8SXunZgLKSPW%2F8bPd%2FaAUT%2FRoglfMIIGx9BNC58pGITuujXi9xsLWV1oXnqe1NcGonQSZgNSlZWQBwVmSMpizwM8WD130XGqYb%2BuLN9UwhyfeNBNfB5Vq5KI60rdL%2BsxEaROvtBUQDWLhhWXDmPiwX1K2K8aTS7AFS%2BfcWIaFWSkxqQRtbRlRhxtueBP4eKwW19JPPKfl4TUIIsxLoPQsBFXUxPy%2FFo89tQhM3zK0YNTtbsmQRWmHkfZNY4Ocpw13LHKJTJIm%2BbPHcB%2Bubi2GFbgma4H13VSgUNWdrXVJWCsg8lyHVicAXi9F19RH2zhjNCIjN9Wzrd5actpZ757bMKmXjsAGOqUBnmOAEinO%2BYDMVXrjscyJeZ1mVQNpANiRv0%2BZL6jeglqONSAOXWGt7e3oMO%2FVKsQFiUXOv4sZz69hyoQiWZFX8dohJOi8RKHHFgE3OjrKIA6y5ZYrCG6UG9QD93iJ1GoUvTTfwguALFbXbYYZ4Z%2FBfP9kglOKAjXSTZZeEDNve1P05C8WR76yOkoyYVkp4dPXg9n984HHUBjrEbPPcDY9kB0tfA8u&X-Amz-Signature=00b5026dbf6a0acbf7b99262387ed35c3802f3dc893c95dadf16a417220c4d74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW5NYA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE%2BYQnr%2FW2fwgSpMxRf7NZBNZEfTZY8Vuxfc6fIOBdHAIgJaN%2BXWR7yrPRBW%2BomFf0ki%2FW%2FMDqA1t3HPemDLznIjYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1s2JhMfwDuANaFbCrcA4z%2BHj7%2FAQZNNvgEMOGa3TsxooJyZTh1XYJhtOi1JwmPtG1l70hJilECx%2BzneyMbekkSYyL0eE32GES8WcGMc8OW770yikCn%2BjU9gxEgqC9LAYfSJRbosNNKZbb994FFcgguXEaqEO1jBzThvheJr6WYRo78WDkvtoV91Z2Br0eMb227hhOEVhKmA3TKhPuY6x677a5sttOZFOXa0MEvV4zSoK5fiT%2FMw8%2BoBv%2BIBVcWhTf6IukvPfooTH2cN%2B5XIjbfUCCfdTSyM%2BZ57HGhVwR9M4V1kxGCrj1iytt8SXunZgLKSPW%2F8bPd%2FaAUT%2FRoglfMIIGx9BNC58pGITuujXi9xsLWV1oXnqe1NcGonQSZgNSlZWQBwVmSMpizwM8WD130XGqYb%2BuLN9UwhyfeNBNfB5Vq5KI60rdL%2BsxEaROvtBUQDWLhhWXDmPiwX1K2K8aTS7AFS%2BfcWIaFWSkxqQRtbRlRhxtueBP4eKwW19JPPKfl4TUIIsxLoPQsBFXUxPy%2FFo89tQhM3zK0YNTtbsmQRWmHkfZNY4Ocpw13LHKJTJIm%2BbPHcB%2Bubi2GFbgma4H13VSgUNWdrXVJWCsg8lyHVicAXi9F19RH2zhjNCIjN9Wzrd5actpZ757bMKmXjsAGOqUBnmOAEinO%2BYDMVXrjscyJeZ1mVQNpANiRv0%2BZL6jeglqONSAOXWGt7e3oMO%2FVKsQFiUXOv4sZz69hyoQiWZFX8dohJOi8RKHHFgE3OjrKIA6y5ZYrCG6UG9QD93iJ1GoUvTTfwguALFbXbYYZ4Z%2FBfP9kglOKAjXSTZZeEDNve1P05C8WR76yOkoyYVkp4dPXg9n984HHUBjrEbPPcDY9kB0tfA8u&X-Amz-Signature=e65e87379ddb85119efeab43a413181a9ff8af55b4b2e38c03f705de87211ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW5NYA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE%2BYQnr%2FW2fwgSpMxRf7NZBNZEfTZY8Vuxfc6fIOBdHAIgJaN%2BXWR7yrPRBW%2BomFf0ki%2FW%2FMDqA1t3HPemDLznIjYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1s2JhMfwDuANaFbCrcA4z%2BHj7%2FAQZNNvgEMOGa3TsxooJyZTh1XYJhtOi1JwmPtG1l70hJilECx%2BzneyMbekkSYyL0eE32GES8WcGMc8OW770yikCn%2BjU9gxEgqC9LAYfSJRbosNNKZbb994FFcgguXEaqEO1jBzThvheJr6WYRo78WDkvtoV91Z2Br0eMb227hhOEVhKmA3TKhPuY6x677a5sttOZFOXa0MEvV4zSoK5fiT%2FMw8%2BoBv%2BIBVcWhTf6IukvPfooTH2cN%2B5XIjbfUCCfdTSyM%2BZ57HGhVwR9M4V1kxGCrj1iytt8SXunZgLKSPW%2F8bPd%2FaAUT%2FRoglfMIIGx9BNC58pGITuujXi9xsLWV1oXnqe1NcGonQSZgNSlZWQBwVmSMpizwM8WD130XGqYb%2BuLN9UwhyfeNBNfB5Vq5KI60rdL%2BsxEaROvtBUQDWLhhWXDmPiwX1K2K8aTS7AFS%2BfcWIaFWSkxqQRtbRlRhxtueBP4eKwW19JPPKfl4TUIIsxLoPQsBFXUxPy%2FFo89tQhM3zK0YNTtbsmQRWmHkfZNY4Ocpw13LHKJTJIm%2BbPHcB%2Bubi2GFbgma4H13VSgUNWdrXVJWCsg8lyHVicAXi9F19RH2zhjNCIjN9Wzrd5actpZ757bMKmXjsAGOqUBnmOAEinO%2BYDMVXrjscyJeZ1mVQNpANiRv0%2BZL6jeglqONSAOXWGt7e3oMO%2FVKsQFiUXOv4sZz69hyoQiWZFX8dohJOi8RKHHFgE3OjrKIA6y5ZYrCG6UG9QD93iJ1GoUvTTfwguALFbXbYYZ4Z%2FBfP9kglOKAjXSTZZeEDNve1P05C8WR76yOkoyYVkp4dPXg9n984HHUBjrEbPPcDY9kB0tfA8u&X-Amz-Signature=ab94b37306c82741882ee1d8076ea26063d0d26c12008a7dbbaa18ee8bb1eeae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

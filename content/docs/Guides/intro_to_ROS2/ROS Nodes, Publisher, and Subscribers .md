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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIHGB2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHVSdwu6tyz1l0s13dRuaohNmR21Qatf0zoRPr%2FcyGweAiEAnyUVoysy4G96Lv%2F7nyjfYRr1OjTfh4ztGSRYdaloz%2B4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMTeITCcYOA6bfb8yrcA1EFWDmTuOSkwZEUcRLIUNdvMM5EaefPqGEhpSXvBuB36t14IWFSDkO%2FVWZqxz2U5zGY%2Bn%2FPsN1Vbwp4gc6vlL7mcxRtfWTd%2BwWWuov4G9Y4VfSqGPl8D%2BMRhTUnYb9vO7IDRfvCjB2dzDF59Hm9%2FA9L2UhOQ4%2F3HEQZk6oBPmJr96jApz0C%2F7L6x8m%2FsP65psEnRUJ%2F7FelZ5QZ0hgFztXHrOKhc1gu%2FUwK3nP8cSiPQREAi4J2L6%2F4mpbBCwCknzc6GpNB1GTzqPjVrekl%2F6whkQKC7lg8iozpmASMQ5BZvANT%2BVraXZnxk8pFubW%2FCY7Gfo%2Fi71H9Ev5tdKwiEtd2VaBYoxpPxqitEbuxn%2B5ex6fy%2B%2Fr6TTztYdapd1DTXHjk0JExgBvMHrJf1FElXPCxgEFwk5vkYrgpfYleXp1J77vLFNJImAIR6b9bn%2B0IRG8tc0XQJkYqKdxNl78PnScIlPmwfqJBzw0HOFE4BvDFZualgrrRtQO%2Fik2%2BfamI41k5vbgzao%2BVnhlJJHrbrxngE%2B2nxkkCYkI92aOfOM4LGE6rDX%2F7SL3owvReY84%2F9rcJt%2F61G3AfmNmZT0P4ps%2FtsRESyuEMVzDNJwmk7vewUe6TAO7cWCk8F90HMK2V0r0GOqUB096o6QofO3yEPnuMwD8A2o%2FWp2r4Qfq9U%2BYrNuc8ZsM%2BMlyBBdjOtj72oLeihAgpjz133bTaYy3StZ%2B5sBF36u6KDHbsiQWmYcPrYtPf2xODvEmZPM%2BdioKRYW2OW6e%2BMDflyuR2Qcx15qLzd6UM64Iuzdun5o%2BQJTTOszLXU9hNhGLaVQ2Ntija2vILbMUNgK8znAYGEcWtQe6RnRrzf2XYvapl&X-Amz-Signature=fe2f2000162f0aadd4b9d21aa24c8307944c0705e6db4aa40329da39d7cb362f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIHGB2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHVSdwu6tyz1l0s13dRuaohNmR21Qatf0zoRPr%2FcyGweAiEAnyUVoysy4G96Lv%2F7nyjfYRr1OjTfh4ztGSRYdaloz%2B4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMTeITCcYOA6bfb8yrcA1EFWDmTuOSkwZEUcRLIUNdvMM5EaefPqGEhpSXvBuB36t14IWFSDkO%2FVWZqxz2U5zGY%2Bn%2FPsN1Vbwp4gc6vlL7mcxRtfWTd%2BwWWuov4G9Y4VfSqGPl8D%2BMRhTUnYb9vO7IDRfvCjB2dzDF59Hm9%2FA9L2UhOQ4%2F3HEQZk6oBPmJr96jApz0C%2F7L6x8m%2FsP65psEnRUJ%2F7FelZ5QZ0hgFztXHrOKhc1gu%2FUwK3nP8cSiPQREAi4J2L6%2F4mpbBCwCknzc6GpNB1GTzqPjVrekl%2F6whkQKC7lg8iozpmASMQ5BZvANT%2BVraXZnxk8pFubW%2FCY7Gfo%2Fi71H9Ev5tdKwiEtd2VaBYoxpPxqitEbuxn%2B5ex6fy%2B%2Fr6TTztYdapd1DTXHjk0JExgBvMHrJf1FElXPCxgEFwk5vkYrgpfYleXp1J77vLFNJImAIR6b9bn%2B0IRG8tc0XQJkYqKdxNl78PnScIlPmwfqJBzw0HOFE4BvDFZualgrrRtQO%2Fik2%2BfamI41k5vbgzao%2BVnhlJJHrbrxngE%2B2nxkkCYkI92aOfOM4LGE6rDX%2F7SL3owvReY84%2F9rcJt%2F61G3AfmNmZT0P4ps%2FtsRESyuEMVzDNJwmk7vewUe6TAO7cWCk8F90HMK2V0r0GOqUB096o6QofO3yEPnuMwD8A2o%2FWp2r4Qfq9U%2BYrNuc8ZsM%2BMlyBBdjOtj72oLeihAgpjz133bTaYy3StZ%2B5sBF36u6KDHbsiQWmYcPrYtPf2xODvEmZPM%2BdioKRYW2OW6e%2BMDflyuR2Qcx15qLzd6UM64Iuzdun5o%2BQJTTOszLXU9hNhGLaVQ2Ntija2vILbMUNgK8znAYGEcWtQe6RnRrzf2XYvapl&X-Amz-Signature=0aa6a88e514ce3dd4d2ce4ca084a6528998284c69c28c3c846e621505ca21ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIHGB2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHVSdwu6tyz1l0s13dRuaohNmR21Qatf0zoRPr%2FcyGweAiEAnyUVoysy4G96Lv%2F7nyjfYRr1OjTfh4ztGSRYdaloz%2B4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMTeITCcYOA6bfb8yrcA1EFWDmTuOSkwZEUcRLIUNdvMM5EaefPqGEhpSXvBuB36t14IWFSDkO%2FVWZqxz2U5zGY%2Bn%2FPsN1Vbwp4gc6vlL7mcxRtfWTd%2BwWWuov4G9Y4VfSqGPl8D%2BMRhTUnYb9vO7IDRfvCjB2dzDF59Hm9%2FA9L2UhOQ4%2F3HEQZk6oBPmJr96jApz0C%2F7L6x8m%2FsP65psEnRUJ%2F7FelZ5QZ0hgFztXHrOKhc1gu%2FUwK3nP8cSiPQREAi4J2L6%2F4mpbBCwCknzc6GpNB1GTzqPjVrekl%2F6whkQKC7lg8iozpmASMQ5BZvANT%2BVraXZnxk8pFubW%2FCY7Gfo%2Fi71H9Ev5tdKwiEtd2VaBYoxpPxqitEbuxn%2B5ex6fy%2B%2Fr6TTztYdapd1DTXHjk0JExgBvMHrJf1FElXPCxgEFwk5vkYrgpfYleXp1J77vLFNJImAIR6b9bn%2B0IRG8tc0XQJkYqKdxNl78PnScIlPmwfqJBzw0HOFE4BvDFZualgrrRtQO%2Fik2%2BfamI41k5vbgzao%2BVnhlJJHrbrxngE%2B2nxkkCYkI92aOfOM4LGE6rDX%2F7SL3owvReY84%2F9rcJt%2F61G3AfmNmZT0P4ps%2FtsRESyuEMVzDNJwmk7vewUe6TAO7cWCk8F90HMK2V0r0GOqUB096o6QofO3yEPnuMwD8A2o%2FWp2r4Qfq9U%2BYrNuc8ZsM%2BMlyBBdjOtj72oLeihAgpjz133bTaYy3StZ%2B5sBF36u6KDHbsiQWmYcPrYtPf2xODvEmZPM%2BdioKRYW2OW6e%2BMDflyuR2Qcx15qLzd6UM64Iuzdun5o%2BQJTTOszLXU9hNhGLaVQ2Ntija2vILbMUNgK8znAYGEcWtQe6RnRrzf2XYvapl&X-Amz-Signature=f0ad139b6fccc6a14922ee5e173e59284bb9dda2f3b28c9f24083f3293141516&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIHGB2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHVSdwu6tyz1l0s13dRuaohNmR21Qatf0zoRPr%2FcyGweAiEAnyUVoysy4G96Lv%2F7nyjfYRr1OjTfh4ztGSRYdaloz%2B4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMTeITCcYOA6bfb8yrcA1EFWDmTuOSkwZEUcRLIUNdvMM5EaefPqGEhpSXvBuB36t14IWFSDkO%2FVWZqxz2U5zGY%2Bn%2FPsN1Vbwp4gc6vlL7mcxRtfWTd%2BwWWuov4G9Y4VfSqGPl8D%2BMRhTUnYb9vO7IDRfvCjB2dzDF59Hm9%2FA9L2UhOQ4%2F3HEQZk6oBPmJr96jApz0C%2F7L6x8m%2FsP65psEnRUJ%2F7FelZ5QZ0hgFztXHrOKhc1gu%2FUwK3nP8cSiPQREAi4J2L6%2F4mpbBCwCknzc6GpNB1GTzqPjVrekl%2F6whkQKC7lg8iozpmASMQ5BZvANT%2BVraXZnxk8pFubW%2FCY7Gfo%2Fi71H9Ev5tdKwiEtd2VaBYoxpPxqitEbuxn%2B5ex6fy%2B%2Fr6TTztYdapd1DTXHjk0JExgBvMHrJf1FElXPCxgEFwk5vkYrgpfYleXp1J77vLFNJImAIR6b9bn%2B0IRG8tc0XQJkYqKdxNl78PnScIlPmwfqJBzw0HOFE4BvDFZualgrrRtQO%2Fik2%2BfamI41k5vbgzao%2BVnhlJJHrbrxngE%2B2nxkkCYkI92aOfOM4LGE6rDX%2F7SL3owvReY84%2F9rcJt%2F61G3AfmNmZT0P4ps%2FtsRESyuEMVzDNJwmk7vewUe6TAO7cWCk8F90HMK2V0r0GOqUB096o6QofO3yEPnuMwD8A2o%2FWp2r4Qfq9U%2BYrNuc8ZsM%2BMlyBBdjOtj72oLeihAgpjz133bTaYy3StZ%2B5sBF36u6KDHbsiQWmYcPrYtPf2xODvEmZPM%2BdioKRYW2OW6e%2BMDflyuR2Qcx15qLzd6UM64Iuzdun5o%2BQJTTOszLXU9hNhGLaVQ2Ntija2vILbMUNgK8znAYGEcWtQe6RnRrzf2XYvapl&X-Amz-Signature=5ab560d80baaff3d3c6ebd13bd3f7f5703eff426a844aa8717b4ea140b511034&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIHGB2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHVSdwu6tyz1l0s13dRuaohNmR21Qatf0zoRPr%2FcyGweAiEAnyUVoysy4G96Lv%2F7nyjfYRr1OjTfh4ztGSRYdaloz%2B4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMTeITCcYOA6bfb8yrcA1EFWDmTuOSkwZEUcRLIUNdvMM5EaefPqGEhpSXvBuB36t14IWFSDkO%2FVWZqxz2U5zGY%2Bn%2FPsN1Vbwp4gc6vlL7mcxRtfWTd%2BwWWuov4G9Y4VfSqGPl8D%2BMRhTUnYb9vO7IDRfvCjB2dzDF59Hm9%2FA9L2UhOQ4%2F3HEQZk6oBPmJr96jApz0C%2F7L6x8m%2FsP65psEnRUJ%2F7FelZ5QZ0hgFztXHrOKhc1gu%2FUwK3nP8cSiPQREAi4J2L6%2F4mpbBCwCknzc6GpNB1GTzqPjVrekl%2F6whkQKC7lg8iozpmASMQ5BZvANT%2BVraXZnxk8pFubW%2FCY7Gfo%2Fi71H9Ev5tdKwiEtd2VaBYoxpPxqitEbuxn%2B5ex6fy%2B%2Fr6TTztYdapd1DTXHjk0JExgBvMHrJf1FElXPCxgEFwk5vkYrgpfYleXp1J77vLFNJImAIR6b9bn%2B0IRG8tc0XQJkYqKdxNl78PnScIlPmwfqJBzw0HOFE4BvDFZualgrrRtQO%2Fik2%2BfamI41k5vbgzao%2BVnhlJJHrbrxngE%2B2nxkkCYkI92aOfOM4LGE6rDX%2F7SL3owvReY84%2F9rcJt%2F61G3AfmNmZT0P4ps%2FtsRESyuEMVzDNJwmk7vewUe6TAO7cWCk8F90HMK2V0r0GOqUB096o6QofO3yEPnuMwD8A2o%2FWp2r4Qfq9U%2BYrNuc8ZsM%2BMlyBBdjOtj72oLeihAgpjz133bTaYy3StZ%2B5sBF36u6KDHbsiQWmYcPrYtPf2xODvEmZPM%2BdioKRYW2OW6e%2BMDflyuR2Qcx15qLzd6UM64Iuzdun5o%2BQJTTOszLXU9hNhGLaVQ2Ntija2vILbMUNgK8znAYGEcWtQe6RnRrzf2XYvapl&X-Amz-Signature=b7e96d2427833e4f7452054132cc89521b164dc5e92b308f3db30bb6f39012b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIHGB2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHVSdwu6tyz1l0s13dRuaohNmR21Qatf0zoRPr%2FcyGweAiEAnyUVoysy4G96Lv%2F7nyjfYRr1OjTfh4ztGSRYdaloz%2B4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMTeITCcYOA6bfb8yrcA1EFWDmTuOSkwZEUcRLIUNdvMM5EaefPqGEhpSXvBuB36t14IWFSDkO%2FVWZqxz2U5zGY%2Bn%2FPsN1Vbwp4gc6vlL7mcxRtfWTd%2BwWWuov4G9Y4VfSqGPl8D%2BMRhTUnYb9vO7IDRfvCjB2dzDF59Hm9%2FA9L2UhOQ4%2F3HEQZk6oBPmJr96jApz0C%2F7L6x8m%2FsP65psEnRUJ%2F7FelZ5QZ0hgFztXHrOKhc1gu%2FUwK3nP8cSiPQREAi4J2L6%2F4mpbBCwCknzc6GpNB1GTzqPjVrekl%2F6whkQKC7lg8iozpmASMQ5BZvANT%2BVraXZnxk8pFubW%2FCY7Gfo%2Fi71H9Ev5tdKwiEtd2VaBYoxpPxqitEbuxn%2B5ex6fy%2B%2Fr6TTztYdapd1DTXHjk0JExgBvMHrJf1FElXPCxgEFwk5vkYrgpfYleXp1J77vLFNJImAIR6b9bn%2B0IRG8tc0XQJkYqKdxNl78PnScIlPmwfqJBzw0HOFE4BvDFZualgrrRtQO%2Fik2%2BfamI41k5vbgzao%2BVnhlJJHrbrxngE%2B2nxkkCYkI92aOfOM4LGE6rDX%2F7SL3owvReY84%2F9rcJt%2F61G3AfmNmZT0P4ps%2FtsRESyuEMVzDNJwmk7vewUe6TAO7cWCk8F90HMK2V0r0GOqUB096o6QofO3yEPnuMwD8A2o%2FWp2r4Qfq9U%2BYrNuc8ZsM%2BMlyBBdjOtj72oLeihAgpjz133bTaYy3StZ%2B5sBF36u6KDHbsiQWmYcPrYtPf2xODvEmZPM%2BdioKRYW2OW6e%2BMDflyuR2Qcx15qLzd6UM64Iuzdun5o%2BQJTTOszLXU9hNhGLaVQ2Ntija2vILbMUNgK8znAYGEcWtQe6RnRrzf2XYvapl&X-Amz-Signature=65ac789f0a85bdfe8b116527340e8f20c5427dc6bd22594f620f6c54290bbc02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIHGB2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHVSdwu6tyz1l0s13dRuaohNmR21Qatf0zoRPr%2FcyGweAiEAnyUVoysy4G96Lv%2F7nyjfYRr1OjTfh4ztGSRYdaloz%2B4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMTeITCcYOA6bfb8yrcA1EFWDmTuOSkwZEUcRLIUNdvMM5EaefPqGEhpSXvBuB36t14IWFSDkO%2FVWZqxz2U5zGY%2Bn%2FPsN1Vbwp4gc6vlL7mcxRtfWTd%2BwWWuov4G9Y4VfSqGPl8D%2BMRhTUnYb9vO7IDRfvCjB2dzDF59Hm9%2FA9L2UhOQ4%2F3HEQZk6oBPmJr96jApz0C%2F7L6x8m%2FsP65psEnRUJ%2F7FelZ5QZ0hgFztXHrOKhc1gu%2FUwK3nP8cSiPQREAi4J2L6%2F4mpbBCwCknzc6GpNB1GTzqPjVrekl%2F6whkQKC7lg8iozpmASMQ5BZvANT%2BVraXZnxk8pFubW%2FCY7Gfo%2Fi71H9Ev5tdKwiEtd2VaBYoxpPxqitEbuxn%2B5ex6fy%2B%2Fr6TTztYdapd1DTXHjk0JExgBvMHrJf1FElXPCxgEFwk5vkYrgpfYleXp1J77vLFNJImAIR6b9bn%2B0IRG8tc0XQJkYqKdxNl78PnScIlPmwfqJBzw0HOFE4BvDFZualgrrRtQO%2Fik2%2BfamI41k5vbgzao%2BVnhlJJHrbrxngE%2B2nxkkCYkI92aOfOM4LGE6rDX%2F7SL3owvReY84%2F9rcJt%2F61G3AfmNmZT0P4ps%2FtsRESyuEMVzDNJwmk7vewUe6TAO7cWCk8F90HMK2V0r0GOqUB096o6QofO3yEPnuMwD8A2o%2FWp2r4Qfq9U%2BYrNuc8ZsM%2BMlyBBdjOtj72oLeihAgpjz133bTaYy3StZ%2B5sBF36u6KDHbsiQWmYcPrYtPf2xODvEmZPM%2BdioKRYW2OW6e%2BMDflyuR2Qcx15qLzd6UM64Iuzdun5o%2BQJTTOszLXU9hNhGLaVQ2Ntija2vILbMUNgK8znAYGEcWtQe6RnRrzf2XYvapl&X-Amz-Signature=1d4099f6bc8c24cf3769bbea38f7dc25abf48f19b59e1ddc0325bcee6f55ce57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIHGB2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHVSdwu6tyz1l0s13dRuaohNmR21Qatf0zoRPr%2FcyGweAiEAnyUVoysy4G96Lv%2F7nyjfYRr1OjTfh4ztGSRYdaloz%2B4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMTeITCcYOA6bfb8yrcA1EFWDmTuOSkwZEUcRLIUNdvMM5EaefPqGEhpSXvBuB36t14IWFSDkO%2FVWZqxz2U5zGY%2Bn%2FPsN1Vbwp4gc6vlL7mcxRtfWTd%2BwWWuov4G9Y4VfSqGPl8D%2BMRhTUnYb9vO7IDRfvCjB2dzDF59Hm9%2FA9L2UhOQ4%2F3HEQZk6oBPmJr96jApz0C%2F7L6x8m%2FsP65psEnRUJ%2F7FelZ5QZ0hgFztXHrOKhc1gu%2FUwK3nP8cSiPQREAi4J2L6%2F4mpbBCwCknzc6GpNB1GTzqPjVrekl%2F6whkQKC7lg8iozpmASMQ5BZvANT%2BVraXZnxk8pFubW%2FCY7Gfo%2Fi71H9Ev5tdKwiEtd2VaBYoxpPxqitEbuxn%2B5ex6fy%2B%2Fr6TTztYdapd1DTXHjk0JExgBvMHrJf1FElXPCxgEFwk5vkYrgpfYleXp1J77vLFNJImAIR6b9bn%2B0IRG8tc0XQJkYqKdxNl78PnScIlPmwfqJBzw0HOFE4BvDFZualgrrRtQO%2Fik2%2BfamI41k5vbgzao%2BVnhlJJHrbrxngE%2B2nxkkCYkI92aOfOM4LGE6rDX%2F7SL3owvReY84%2F9rcJt%2F61G3AfmNmZT0P4ps%2FtsRESyuEMVzDNJwmk7vewUe6TAO7cWCk8F90HMK2V0r0GOqUB096o6QofO3yEPnuMwD8A2o%2FWp2r4Qfq9U%2BYrNuc8ZsM%2BMlyBBdjOtj72oLeihAgpjz133bTaYy3StZ%2B5sBF36u6KDHbsiQWmYcPrYtPf2xODvEmZPM%2BdioKRYW2OW6e%2BMDflyuR2Qcx15qLzd6UM64Iuzdun5o%2BQJTTOszLXU9hNhGLaVQ2Ntija2vILbMUNgK8znAYGEcWtQe6RnRrzf2XYvapl&X-Amz-Signature=7cf2b066f8b8790253e4adf69048d5fe8da90fe8880943c7b3a8e28c20d7a4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

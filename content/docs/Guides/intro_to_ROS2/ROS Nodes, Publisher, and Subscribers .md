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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK57WXGG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5rogZwHEiP5hXXV9G2mYG8bNXZD7By%2FceO2xG2NvO4gIgGGZbw8Mi4WzRZ%2FvCeFCQv32s5wC93cvXEpxK7aP1Iq0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEt9AdRlUUuezWAP2yrcA1knwfxWTY%2F%2BGgpfuR3IN%2BSUSRCtCPzFRql0WGK6flzCRcgsGv3VIir1vZoblfwM160p0NE%2B5UD7YYEBT%2FUGA8EassRDPCqjwHWdsw8b3F74wG2CL43WKUk23ctGL%2BLDwsMAy1Mzs2JhMqaU9MgCCb5o0ayB49bxwU8z0he86KFgilegoKbGS72fzbENhHoVtDBq9XIvR7YEDiYwc6E6B4iqpf9nvlBtt7FWOz52LD9tanFTU%2B%2F2ANDiqQ1oxMuuvdwHuOKSTtf9xmoGqA6PhS94jZjnMltGK%2BsU%2F9pKTqefWB%2FwIaTamLQnxV2koj0HEY5DVGBQU3Kk11fLElKtFMe43dDqL98CDZELE%2Fgux%2FeFtPMRXY8txp7aYJxmTJjbIK6IB0WUarU5%2BaimU%2BQhvm24SmEBoe8U%2BmMogNk07Oc84mH41l5ZSbqElPIM5e%2FUi6YdelxoRU5AD9HjJ%2FrK20HCk85VZnGUgsTRXQl1kcZhs%2FL1jKDuPm1e6XKbhWWPgdR7ndXqXruxT1q7H%2B6pejERuvc1WiTKiCt0Dp56o6Bv63%2Fal%2FrMIqLOK5pVA9Mvd5jQwirXAqO0XZOb5%2B5PUOmNwM5801t0vkw0ZDjI8ClvZd4G179s7O%2FlpejhMPeSgcAGOqUBH0BwDXlWi472781DfHBoOKF53i%2BQDl80t6GnwV5Qi0FnHmzQFoZfclK1ozifIw8ueWkYkjlkGSFkke5vyxvFo23DDSQpJCUicC2s5%2BUKMijucyu9WHme4YBMIjef1T417lpQgPjanbpVtZxpUVsQSCHTsNUKT17X2zvvtS08xr3zKg%2F2JSjkbho%2FWRvXrkYnfq3%2B0TOfAxCuhSh4xOzEtPLOGkr6&X-Amz-Signature=5ed7e255aac5157efdc54e0baa76f70f35cc32f332880d569a6d14170a2b4691&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK57WXGG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5rogZwHEiP5hXXV9G2mYG8bNXZD7By%2FceO2xG2NvO4gIgGGZbw8Mi4WzRZ%2FvCeFCQv32s5wC93cvXEpxK7aP1Iq0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEt9AdRlUUuezWAP2yrcA1knwfxWTY%2F%2BGgpfuR3IN%2BSUSRCtCPzFRql0WGK6flzCRcgsGv3VIir1vZoblfwM160p0NE%2B5UD7YYEBT%2FUGA8EassRDPCqjwHWdsw8b3F74wG2CL43WKUk23ctGL%2BLDwsMAy1Mzs2JhMqaU9MgCCb5o0ayB49bxwU8z0he86KFgilegoKbGS72fzbENhHoVtDBq9XIvR7YEDiYwc6E6B4iqpf9nvlBtt7FWOz52LD9tanFTU%2B%2F2ANDiqQ1oxMuuvdwHuOKSTtf9xmoGqA6PhS94jZjnMltGK%2BsU%2F9pKTqefWB%2FwIaTamLQnxV2koj0HEY5DVGBQU3Kk11fLElKtFMe43dDqL98CDZELE%2Fgux%2FeFtPMRXY8txp7aYJxmTJjbIK6IB0WUarU5%2BaimU%2BQhvm24SmEBoe8U%2BmMogNk07Oc84mH41l5ZSbqElPIM5e%2FUi6YdelxoRU5AD9HjJ%2FrK20HCk85VZnGUgsTRXQl1kcZhs%2FL1jKDuPm1e6XKbhWWPgdR7ndXqXruxT1q7H%2B6pejERuvc1WiTKiCt0Dp56o6Bv63%2Fal%2FrMIqLOK5pVA9Mvd5jQwirXAqO0XZOb5%2B5PUOmNwM5801t0vkw0ZDjI8ClvZd4G179s7O%2FlpejhMPeSgcAGOqUBH0BwDXlWi472781DfHBoOKF53i%2BQDl80t6GnwV5Qi0FnHmzQFoZfclK1ozifIw8ueWkYkjlkGSFkke5vyxvFo23DDSQpJCUicC2s5%2BUKMijucyu9WHme4YBMIjef1T417lpQgPjanbpVtZxpUVsQSCHTsNUKT17X2zvvtS08xr3zKg%2F2JSjkbho%2FWRvXrkYnfq3%2B0TOfAxCuhSh4xOzEtPLOGkr6&X-Amz-Signature=b5df5bb2e7f848981f5349835d63baa5b1f35d2798f65c09a35be468f772b72d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK57WXGG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5rogZwHEiP5hXXV9G2mYG8bNXZD7By%2FceO2xG2NvO4gIgGGZbw8Mi4WzRZ%2FvCeFCQv32s5wC93cvXEpxK7aP1Iq0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEt9AdRlUUuezWAP2yrcA1knwfxWTY%2F%2BGgpfuR3IN%2BSUSRCtCPzFRql0WGK6flzCRcgsGv3VIir1vZoblfwM160p0NE%2B5UD7YYEBT%2FUGA8EassRDPCqjwHWdsw8b3F74wG2CL43WKUk23ctGL%2BLDwsMAy1Mzs2JhMqaU9MgCCb5o0ayB49bxwU8z0he86KFgilegoKbGS72fzbENhHoVtDBq9XIvR7YEDiYwc6E6B4iqpf9nvlBtt7FWOz52LD9tanFTU%2B%2F2ANDiqQ1oxMuuvdwHuOKSTtf9xmoGqA6PhS94jZjnMltGK%2BsU%2F9pKTqefWB%2FwIaTamLQnxV2koj0HEY5DVGBQU3Kk11fLElKtFMe43dDqL98CDZELE%2Fgux%2FeFtPMRXY8txp7aYJxmTJjbIK6IB0WUarU5%2BaimU%2BQhvm24SmEBoe8U%2BmMogNk07Oc84mH41l5ZSbqElPIM5e%2FUi6YdelxoRU5AD9HjJ%2FrK20HCk85VZnGUgsTRXQl1kcZhs%2FL1jKDuPm1e6XKbhWWPgdR7ndXqXruxT1q7H%2B6pejERuvc1WiTKiCt0Dp56o6Bv63%2Fal%2FrMIqLOK5pVA9Mvd5jQwirXAqO0XZOb5%2B5PUOmNwM5801t0vkw0ZDjI8ClvZd4G179s7O%2FlpejhMPeSgcAGOqUBH0BwDXlWi472781DfHBoOKF53i%2BQDl80t6GnwV5Qi0FnHmzQFoZfclK1ozifIw8ueWkYkjlkGSFkke5vyxvFo23DDSQpJCUicC2s5%2BUKMijucyu9WHme4YBMIjef1T417lpQgPjanbpVtZxpUVsQSCHTsNUKT17X2zvvtS08xr3zKg%2F2JSjkbho%2FWRvXrkYnfq3%2B0TOfAxCuhSh4xOzEtPLOGkr6&X-Amz-Signature=89b306f614bc2691d7394109c43272789973d14546789a3506663aff5231b33e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK57WXGG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5rogZwHEiP5hXXV9G2mYG8bNXZD7By%2FceO2xG2NvO4gIgGGZbw8Mi4WzRZ%2FvCeFCQv32s5wC93cvXEpxK7aP1Iq0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEt9AdRlUUuezWAP2yrcA1knwfxWTY%2F%2BGgpfuR3IN%2BSUSRCtCPzFRql0WGK6flzCRcgsGv3VIir1vZoblfwM160p0NE%2B5UD7YYEBT%2FUGA8EassRDPCqjwHWdsw8b3F74wG2CL43WKUk23ctGL%2BLDwsMAy1Mzs2JhMqaU9MgCCb5o0ayB49bxwU8z0he86KFgilegoKbGS72fzbENhHoVtDBq9XIvR7YEDiYwc6E6B4iqpf9nvlBtt7FWOz52LD9tanFTU%2B%2F2ANDiqQ1oxMuuvdwHuOKSTtf9xmoGqA6PhS94jZjnMltGK%2BsU%2F9pKTqefWB%2FwIaTamLQnxV2koj0HEY5DVGBQU3Kk11fLElKtFMe43dDqL98CDZELE%2Fgux%2FeFtPMRXY8txp7aYJxmTJjbIK6IB0WUarU5%2BaimU%2BQhvm24SmEBoe8U%2BmMogNk07Oc84mH41l5ZSbqElPIM5e%2FUi6YdelxoRU5AD9HjJ%2FrK20HCk85VZnGUgsTRXQl1kcZhs%2FL1jKDuPm1e6XKbhWWPgdR7ndXqXruxT1q7H%2B6pejERuvc1WiTKiCt0Dp56o6Bv63%2Fal%2FrMIqLOK5pVA9Mvd5jQwirXAqO0XZOb5%2B5PUOmNwM5801t0vkw0ZDjI8ClvZd4G179s7O%2FlpejhMPeSgcAGOqUBH0BwDXlWi472781DfHBoOKF53i%2BQDl80t6GnwV5Qi0FnHmzQFoZfclK1ozifIw8ueWkYkjlkGSFkke5vyxvFo23DDSQpJCUicC2s5%2BUKMijucyu9WHme4YBMIjef1T417lpQgPjanbpVtZxpUVsQSCHTsNUKT17X2zvvtS08xr3zKg%2F2JSjkbho%2FWRvXrkYnfq3%2B0TOfAxCuhSh4xOzEtPLOGkr6&X-Amz-Signature=15d1cb8f7300c932e75080772dfa6d2221682e60d23f93004b0cc84ac5cc32cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK57WXGG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5rogZwHEiP5hXXV9G2mYG8bNXZD7By%2FceO2xG2NvO4gIgGGZbw8Mi4WzRZ%2FvCeFCQv32s5wC93cvXEpxK7aP1Iq0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEt9AdRlUUuezWAP2yrcA1knwfxWTY%2F%2BGgpfuR3IN%2BSUSRCtCPzFRql0WGK6flzCRcgsGv3VIir1vZoblfwM160p0NE%2B5UD7YYEBT%2FUGA8EassRDPCqjwHWdsw8b3F74wG2CL43WKUk23ctGL%2BLDwsMAy1Mzs2JhMqaU9MgCCb5o0ayB49bxwU8z0he86KFgilegoKbGS72fzbENhHoVtDBq9XIvR7YEDiYwc6E6B4iqpf9nvlBtt7FWOz52LD9tanFTU%2B%2F2ANDiqQ1oxMuuvdwHuOKSTtf9xmoGqA6PhS94jZjnMltGK%2BsU%2F9pKTqefWB%2FwIaTamLQnxV2koj0HEY5DVGBQU3Kk11fLElKtFMe43dDqL98CDZELE%2Fgux%2FeFtPMRXY8txp7aYJxmTJjbIK6IB0WUarU5%2BaimU%2BQhvm24SmEBoe8U%2BmMogNk07Oc84mH41l5ZSbqElPIM5e%2FUi6YdelxoRU5AD9HjJ%2FrK20HCk85VZnGUgsTRXQl1kcZhs%2FL1jKDuPm1e6XKbhWWPgdR7ndXqXruxT1q7H%2B6pejERuvc1WiTKiCt0Dp56o6Bv63%2Fal%2FrMIqLOK5pVA9Mvd5jQwirXAqO0XZOb5%2B5PUOmNwM5801t0vkw0ZDjI8ClvZd4G179s7O%2FlpejhMPeSgcAGOqUBH0BwDXlWi472781DfHBoOKF53i%2BQDl80t6GnwV5Qi0FnHmzQFoZfclK1ozifIw8ueWkYkjlkGSFkke5vyxvFo23DDSQpJCUicC2s5%2BUKMijucyu9WHme4YBMIjef1T417lpQgPjanbpVtZxpUVsQSCHTsNUKT17X2zvvtS08xr3zKg%2F2JSjkbho%2FWRvXrkYnfq3%2B0TOfAxCuhSh4xOzEtPLOGkr6&X-Amz-Signature=6b6f2420bf2d946d8a5fad555f261ebe293fb314f9b9d99aabe33224cfc28f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK57WXGG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5rogZwHEiP5hXXV9G2mYG8bNXZD7By%2FceO2xG2NvO4gIgGGZbw8Mi4WzRZ%2FvCeFCQv32s5wC93cvXEpxK7aP1Iq0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEt9AdRlUUuezWAP2yrcA1knwfxWTY%2F%2BGgpfuR3IN%2BSUSRCtCPzFRql0WGK6flzCRcgsGv3VIir1vZoblfwM160p0NE%2B5UD7YYEBT%2FUGA8EassRDPCqjwHWdsw8b3F74wG2CL43WKUk23ctGL%2BLDwsMAy1Mzs2JhMqaU9MgCCb5o0ayB49bxwU8z0he86KFgilegoKbGS72fzbENhHoVtDBq9XIvR7YEDiYwc6E6B4iqpf9nvlBtt7FWOz52LD9tanFTU%2B%2F2ANDiqQ1oxMuuvdwHuOKSTtf9xmoGqA6PhS94jZjnMltGK%2BsU%2F9pKTqefWB%2FwIaTamLQnxV2koj0HEY5DVGBQU3Kk11fLElKtFMe43dDqL98CDZELE%2Fgux%2FeFtPMRXY8txp7aYJxmTJjbIK6IB0WUarU5%2BaimU%2BQhvm24SmEBoe8U%2BmMogNk07Oc84mH41l5ZSbqElPIM5e%2FUi6YdelxoRU5AD9HjJ%2FrK20HCk85VZnGUgsTRXQl1kcZhs%2FL1jKDuPm1e6XKbhWWPgdR7ndXqXruxT1q7H%2B6pejERuvc1WiTKiCt0Dp56o6Bv63%2Fal%2FrMIqLOK5pVA9Mvd5jQwirXAqO0XZOb5%2B5PUOmNwM5801t0vkw0ZDjI8ClvZd4G179s7O%2FlpejhMPeSgcAGOqUBH0BwDXlWi472781DfHBoOKF53i%2BQDl80t6GnwV5Qi0FnHmzQFoZfclK1ozifIw8ueWkYkjlkGSFkke5vyxvFo23DDSQpJCUicC2s5%2BUKMijucyu9WHme4YBMIjef1T417lpQgPjanbpVtZxpUVsQSCHTsNUKT17X2zvvtS08xr3zKg%2F2JSjkbho%2FWRvXrkYnfq3%2B0TOfAxCuhSh4xOzEtPLOGkr6&X-Amz-Signature=7b478ac82fbc4684f7575f4a86c3b1d54b9a7e0f3dfba624f73b500bf7facf41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK57WXGG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5rogZwHEiP5hXXV9G2mYG8bNXZD7By%2FceO2xG2NvO4gIgGGZbw8Mi4WzRZ%2FvCeFCQv32s5wC93cvXEpxK7aP1Iq0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEt9AdRlUUuezWAP2yrcA1knwfxWTY%2F%2BGgpfuR3IN%2BSUSRCtCPzFRql0WGK6flzCRcgsGv3VIir1vZoblfwM160p0NE%2B5UD7YYEBT%2FUGA8EassRDPCqjwHWdsw8b3F74wG2CL43WKUk23ctGL%2BLDwsMAy1Mzs2JhMqaU9MgCCb5o0ayB49bxwU8z0he86KFgilegoKbGS72fzbENhHoVtDBq9XIvR7YEDiYwc6E6B4iqpf9nvlBtt7FWOz52LD9tanFTU%2B%2F2ANDiqQ1oxMuuvdwHuOKSTtf9xmoGqA6PhS94jZjnMltGK%2BsU%2F9pKTqefWB%2FwIaTamLQnxV2koj0HEY5DVGBQU3Kk11fLElKtFMe43dDqL98CDZELE%2Fgux%2FeFtPMRXY8txp7aYJxmTJjbIK6IB0WUarU5%2BaimU%2BQhvm24SmEBoe8U%2BmMogNk07Oc84mH41l5ZSbqElPIM5e%2FUi6YdelxoRU5AD9HjJ%2FrK20HCk85VZnGUgsTRXQl1kcZhs%2FL1jKDuPm1e6XKbhWWPgdR7ndXqXruxT1q7H%2B6pejERuvc1WiTKiCt0Dp56o6Bv63%2Fal%2FrMIqLOK5pVA9Mvd5jQwirXAqO0XZOb5%2B5PUOmNwM5801t0vkw0ZDjI8ClvZd4G179s7O%2FlpejhMPeSgcAGOqUBH0BwDXlWi472781DfHBoOKF53i%2BQDl80t6GnwV5Qi0FnHmzQFoZfclK1ozifIw8ueWkYkjlkGSFkke5vyxvFo23DDSQpJCUicC2s5%2BUKMijucyu9WHme4YBMIjef1T417lpQgPjanbpVtZxpUVsQSCHTsNUKT17X2zvvtS08xr3zKg%2F2JSjkbho%2FWRvXrkYnfq3%2B0TOfAxCuhSh4xOzEtPLOGkr6&X-Amz-Signature=5a453a299e63dd5a2a8f0fd617f8613bdbe394cb049dfde2f400dee25dab950c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK57WXGG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5rogZwHEiP5hXXV9G2mYG8bNXZD7By%2FceO2xG2NvO4gIgGGZbw8Mi4WzRZ%2FvCeFCQv32s5wC93cvXEpxK7aP1Iq0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEt9AdRlUUuezWAP2yrcA1knwfxWTY%2F%2BGgpfuR3IN%2BSUSRCtCPzFRql0WGK6flzCRcgsGv3VIir1vZoblfwM160p0NE%2B5UD7YYEBT%2FUGA8EassRDPCqjwHWdsw8b3F74wG2CL43WKUk23ctGL%2BLDwsMAy1Mzs2JhMqaU9MgCCb5o0ayB49bxwU8z0he86KFgilegoKbGS72fzbENhHoVtDBq9XIvR7YEDiYwc6E6B4iqpf9nvlBtt7FWOz52LD9tanFTU%2B%2F2ANDiqQ1oxMuuvdwHuOKSTtf9xmoGqA6PhS94jZjnMltGK%2BsU%2F9pKTqefWB%2FwIaTamLQnxV2koj0HEY5DVGBQU3Kk11fLElKtFMe43dDqL98CDZELE%2Fgux%2FeFtPMRXY8txp7aYJxmTJjbIK6IB0WUarU5%2BaimU%2BQhvm24SmEBoe8U%2BmMogNk07Oc84mH41l5ZSbqElPIM5e%2FUi6YdelxoRU5AD9HjJ%2FrK20HCk85VZnGUgsTRXQl1kcZhs%2FL1jKDuPm1e6XKbhWWPgdR7ndXqXruxT1q7H%2B6pejERuvc1WiTKiCt0Dp56o6Bv63%2Fal%2FrMIqLOK5pVA9Mvd5jQwirXAqO0XZOb5%2B5PUOmNwM5801t0vkw0ZDjI8ClvZd4G179s7O%2FlpejhMPeSgcAGOqUBH0BwDXlWi472781DfHBoOKF53i%2BQDl80t6GnwV5Qi0FnHmzQFoZfclK1ozifIw8ueWkYkjlkGSFkke5vyxvFo23DDSQpJCUicC2s5%2BUKMijucyu9WHme4YBMIjef1T417lpQgPjanbpVtZxpUVsQSCHTsNUKT17X2zvvtS08xr3zKg%2F2JSjkbho%2FWRvXrkYnfq3%2B0TOfAxCuhSh4xOzEtPLOGkr6&X-Amz-Signature=83451c2e194939ee7da8e5e1e42160c093983dbaed85be2fe7d714b9fc14f4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

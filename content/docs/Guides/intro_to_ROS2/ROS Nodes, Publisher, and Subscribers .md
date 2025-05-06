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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM43ZIB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b3cJmkkE6imYziLo4%2B3McBLkxj2N7xcLTIJ56MLcKAIgVDF0CJ9KwjFouIC13aynR0xpHH8KHT3Y%2F1Hx2zoZEXwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKCrad3eHBWs2j17tircA6JsfO7rV%2BDKdiZD8nuPjiFXcPRl10NXVlfSV1EiXshKGQIIwIH21da8Xqh%2Bdb1P5uhW%2Fe%2F87R9Hn7hBQOBgfI2liBnlNCqFpOVmAXA951MsT63qSqiniwWOzfuFe2vVj9BXNYQ%2FxxgA2vtZc19rnGIkngaiFcj7YeUPeIMnKbGWBr6hV%2Bx1I4xcxvi%2BAFtJJa8hrJFgQyn40bnRyld0OHoC3sSL09zIqTRvljlhrlTnahxkeGygQqRLpy6iC82pBn40TOH4p6DZ2iElLHo2mGvCA%2Bju3fgyUnelPhhn44svYRGK7gvR3F6%2BBo1NDoolV2mNmDgT%2Bg9xhbRRFicNk5X4ok%2Bjt7GKffcaWBU3EXuPlhjDa5GOKAoFgImLHzgNKZPlmlcl8eiQb0FEZhklbNjIfgOXoyhdbhZqiz76TFS0UD8%2F%2FuGOy%2F0o9A59Invlrzr8wsAThECdHGUidCE5zYEbe%2FFbkmSNaOmwPMgtv7YgE4WMXupC%2BuzlZh4GvQ%2BfzhvAGoMfiDlwPM0syNOfIebSsza5fr0UbQp9ZrXTDE1VtcMBLoEvgco0vo%2FTo7dOWyvEK7ryYJu50%2BF4Zm%2B%2Fo%2BRD5ThtXDKZ9vSodvTnzTRyCUEe9RFO%2BWDwRlWWMNOZ6cAGOqUBAsE0U6%2FPgcFGursYTrhl87VDhq8Va%2FN57lfbzp5450nlJ1IftRYwalm%2FZph08omPPAchpqhhFjOiJKdV3HMsjJjw4vugLGCJtg92SoudRbCeoFsPBKMvl630ueSJ3oN%2F89ZkjXPwuSZ%2FNvFNrPGkx0yAKKH58lC5fcbSLRGNoSC0Te5Jl%2FLBWtEu88PatR9mSCmx3NFQadZdWStcFMZcjHsvIOKV&X-Amz-Signature=c71efc0ea42f7f3b2b2f5f1426b5ebe9dcffe5936d14696277a55ca15a3df98d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM43ZIB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b3cJmkkE6imYziLo4%2B3McBLkxj2N7xcLTIJ56MLcKAIgVDF0CJ9KwjFouIC13aynR0xpHH8KHT3Y%2F1Hx2zoZEXwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKCrad3eHBWs2j17tircA6JsfO7rV%2BDKdiZD8nuPjiFXcPRl10NXVlfSV1EiXshKGQIIwIH21da8Xqh%2Bdb1P5uhW%2Fe%2F87R9Hn7hBQOBgfI2liBnlNCqFpOVmAXA951MsT63qSqiniwWOzfuFe2vVj9BXNYQ%2FxxgA2vtZc19rnGIkngaiFcj7YeUPeIMnKbGWBr6hV%2Bx1I4xcxvi%2BAFtJJa8hrJFgQyn40bnRyld0OHoC3sSL09zIqTRvljlhrlTnahxkeGygQqRLpy6iC82pBn40TOH4p6DZ2iElLHo2mGvCA%2Bju3fgyUnelPhhn44svYRGK7gvR3F6%2BBo1NDoolV2mNmDgT%2Bg9xhbRRFicNk5X4ok%2Bjt7GKffcaWBU3EXuPlhjDa5GOKAoFgImLHzgNKZPlmlcl8eiQb0FEZhklbNjIfgOXoyhdbhZqiz76TFS0UD8%2F%2FuGOy%2F0o9A59Invlrzr8wsAThECdHGUidCE5zYEbe%2FFbkmSNaOmwPMgtv7YgE4WMXupC%2BuzlZh4GvQ%2BfzhvAGoMfiDlwPM0syNOfIebSsza5fr0UbQp9ZrXTDE1VtcMBLoEvgco0vo%2FTo7dOWyvEK7ryYJu50%2BF4Zm%2B%2Fo%2BRD5ThtXDKZ9vSodvTnzTRyCUEe9RFO%2BWDwRlWWMNOZ6cAGOqUBAsE0U6%2FPgcFGursYTrhl87VDhq8Va%2FN57lfbzp5450nlJ1IftRYwalm%2FZph08omPPAchpqhhFjOiJKdV3HMsjJjw4vugLGCJtg92SoudRbCeoFsPBKMvl630ueSJ3oN%2F89ZkjXPwuSZ%2FNvFNrPGkx0yAKKH58lC5fcbSLRGNoSC0Te5Jl%2FLBWtEu88PatR9mSCmx3NFQadZdWStcFMZcjHsvIOKV&X-Amz-Signature=3f3a5cd86489eb2ab6851b9a6b910ef462992a1ffb557820f2482a09740babba&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM43ZIB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b3cJmkkE6imYziLo4%2B3McBLkxj2N7xcLTIJ56MLcKAIgVDF0CJ9KwjFouIC13aynR0xpHH8KHT3Y%2F1Hx2zoZEXwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKCrad3eHBWs2j17tircA6JsfO7rV%2BDKdiZD8nuPjiFXcPRl10NXVlfSV1EiXshKGQIIwIH21da8Xqh%2Bdb1P5uhW%2Fe%2F87R9Hn7hBQOBgfI2liBnlNCqFpOVmAXA951MsT63qSqiniwWOzfuFe2vVj9BXNYQ%2FxxgA2vtZc19rnGIkngaiFcj7YeUPeIMnKbGWBr6hV%2Bx1I4xcxvi%2BAFtJJa8hrJFgQyn40bnRyld0OHoC3sSL09zIqTRvljlhrlTnahxkeGygQqRLpy6iC82pBn40TOH4p6DZ2iElLHo2mGvCA%2Bju3fgyUnelPhhn44svYRGK7gvR3F6%2BBo1NDoolV2mNmDgT%2Bg9xhbRRFicNk5X4ok%2Bjt7GKffcaWBU3EXuPlhjDa5GOKAoFgImLHzgNKZPlmlcl8eiQb0FEZhklbNjIfgOXoyhdbhZqiz76TFS0UD8%2F%2FuGOy%2F0o9A59Invlrzr8wsAThECdHGUidCE5zYEbe%2FFbkmSNaOmwPMgtv7YgE4WMXupC%2BuzlZh4GvQ%2BfzhvAGoMfiDlwPM0syNOfIebSsza5fr0UbQp9ZrXTDE1VtcMBLoEvgco0vo%2FTo7dOWyvEK7ryYJu50%2BF4Zm%2B%2Fo%2BRD5ThtXDKZ9vSodvTnzTRyCUEe9RFO%2BWDwRlWWMNOZ6cAGOqUBAsE0U6%2FPgcFGursYTrhl87VDhq8Va%2FN57lfbzp5450nlJ1IftRYwalm%2FZph08omPPAchpqhhFjOiJKdV3HMsjJjw4vugLGCJtg92SoudRbCeoFsPBKMvl630ueSJ3oN%2F89ZkjXPwuSZ%2FNvFNrPGkx0yAKKH58lC5fcbSLRGNoSC0Te5Jl%2FLBWtEu88PatR9mSCmx3NFQadZdWStcFMZcjHsvIOKV&X-Amz-Signature=a30d6b0b5322d57b492f85be25dda661f7fa26285e0a7c0990f6c5b608eff7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM43ZIB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b3cJmkkE6imYziLo4%2B3McBLkxj2N7xcLTIJ56MLcKAIgVDF0CJ9KwjFouIC13aynR0xpHH8KHT3Y%2F1Hx2zoZEXwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKCrad3eHBWs2j17tircA6JsfO7rV%2BDKdiZD8nuPjiFXcPRl10NXVlfSV1EiXshKGQIIwIH21da8Xqh%2Bdb1P5uhW%2Fe%2F87R9Hn7hBQOBgfI2liBnlNCqFpOVmAXA951MsT63qSqiniwWOzfuFe2vVj9BXNYQ%2FxxgA2vtZc19rnGIkngaiFcj7YeUPeIMnKbGWBr6hV%2Bx1I4xcxvi%2BAFtJJa8hrJFgQyn40bnRyld0OHoC3sSL09zIqTRvljlhrlTnahxkeGygQqRLpy6iC82pBn40TOH4p6DZ2iElLHo2mGvCA%2Bju3fgyUnelPhhn44svYRGK7gvR3F6%2BBo1NDoolV2mNmDgT%2Bg9xhbRRFicNk5X4ok%2Bjt7GKffcaWBU3EXuPlhjDa5GOKAoFgImLHzgNKZPlmlcl8eiQb0FEZhklbNjIfgOXoyhdbhZqiz76TFS0UD8%2F%2FuGOy%2F0o9A59Invlrzr8wsAThECdHGUidCE5zYEbe%2FFbkmSNaOmwPMgtv7YgE4WMXupC%2BuzlZh4GvQ%2BfzhvAGoMfiDlwPM0syNOfIebSsza5fr0UbQp9ZrXTDE1VtcMBLoEvgco0vo%2FTo7dOWyvEK7ryYJu50%2BF4Zm%2B%2Fo%2BRD5ThtXDKZ9vSodvTnzTRyCUEe9RFO%2BWDwRlWWMNOZ6cAGOqUBAsE0U6%2FPgcFGursYTrhl87VDhq8Va%2FN57lfbzp5450nlJ1IftRYwalm%2FZph08omPPAchpqhhFjOiJKdV3HMsjJjw4vugLGCJtg92SoudRbCeoFsPBKMvl630ueSJ3oN%2F89ZkjXPwuSZ%2FNvFNrPGkx0yAKKH58lC5fcbSLRGNoSC0Te5Jl%2FLBWtEu88PatR9mSCmx3NFQadZdWStcFMZcjHsvIOKV&X-Amz-Signature=26855332be688f70a89e15937a5b6cfae1600b9cb31843359e9b012a7070b744&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM43ZIB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b3cJmkkE6imYziLo4%2B3McBLkxj2N7xcLTIJ56MLcKAIgVDF0CJ9KwjFouIC13aynR0xpHH8KHT3Y%2F1Hx2zoZEXwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKCrad3eHBWs2j17tircA6JsfO7rV%2BDKdiZD8nuPjiFXcPRl10NXVlfSV1EiXshKGQIIwIH21da8Xqh%2Bdb1P5uhW%2Fe%2F87R9Hn7hBQOBgfI2liBnlNCqFpOVmAXA951MsT63qSqiniwWOzfuFe2vVj9BXNYQ%2FxxgA2vtZc19rnGIkngaiFcj7YeUPeIMnKbGWBr6hV%2Bx1I4xcxvi%2BAFtJJa8hrJFgQyn40bnRyld0OHoC3sSL09zIqTRvljlhrlTnahxkeGygQqRLpy6iC82pBn40TOH4p6DZ2iElLHo2mGvCA%2Bju3fgyUnelPhhn44svYRGK7gvR3F6%2BBo1NDoolV2mNmDgT%2Bg9xhbRRFicNk5X4ok%2Bjt7GKffcaWBU3EXuPlhjDa5GOKAoFgImLHzgNKZPlmlcl8eiQb0FEZhklbNjIfgOXoyhdbhZqiz76TFS0UD8%2F%2FuGOy%2F0o9A59Invlrzr8wsAThECdHGUidCE5zYEbe%2FFbkmSNaOmwPMgtv7YgE4WMXupC%2BuzlZh4GvQ%2BfzhvAGoMfiDlwPM0syNOfIebSsza5fr0UbQp9ZrXTDE1VtcMBLoEvgco0vo%2FTo7dOWyvEK7ryYJu50%2BF4Zm%2B%2Fo%2BRD5ThtXDKZ9vSodvTnzTRyCUEe9RFO%2BWDwRlWWMNOZ6cAGOqUBAsE0U6%2FPgcFGursYTrhl87VDhq8Va%2FN57lfbzp5450nlJ1IftRYwalm%2FZph08omPPAchpqhhFjOiJKdV3HMsjJjw4vugLGCJtg92SoudRbCeoFsPBKMvl630ueSJ3oN%2F89ZkjXPwuSZ%2FNvFNrPGkx0yAKKH58lC5fcbSLRGNoSC0Te5Jl%2FLBWtEu88PatR9mSCmx3NFQadZdWStcFMZcjHsvIOKV&X-Amz-Signature=ff3111bc8540fd756ae1642e24842eb4dcb4cb2274411941995aea29602a2f55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM43ZIB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b3cJmkkE6imYziLo4%2B3McBLkxj2N7xcLTIJ56MLcKAIgVDF0CJ9KwjFouIC13aynR0xpHH8KHT3Y%2F1Hx2zoZEXwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKCrad3eHBWs2j17tircA6JsfO7rV%2BDKdiZD8nuPjiFXcPRl10NXVlfSV1EiXshKGQIIwIH21da8Xqh%2Bdb1P5uhW%2Fe%2F87R9Hn7hBQOBgfI2liBnlNCqFpOVmAXA951MsT63qSqiniwWOzfuFe2vVj9BXNYQ%2FxxgA2vtZc19rnGIkngaiFcj7YeUPeIMnKbGWBr6hV%2Bx1I4xcxvi%2BAFtJJa8hrJFgQyn40bnRyld0OHoC3sSL09zIqTRvljlhrlTnahxkeGygQqRLpy6iC82pBn40TOH4p6DZ2iElLHo2mGvCA%2Bju3fgyUnelPhhn44svYRGK7gvR3F6%2BBo1NDoolV2mNmDgT%2Bg9xhbRRFicNk5X4ok%2Bjt7GKffcaWBU3EXuPlhjDa5GOKAoFgImLHzgNKZPlmlcl8eiQb0FEZhklbNjIfgOXoyhdbhZqiz76TFS0UD8%2F%2FuGOy%2F0o9A59Invlrzr8wsAThECdHGUidCE5zYEbe%2FFbkmSNaOmwPMgtv7YgE4WMXupC%2BuzlZh4GvQ%2BfzhvAGoMfiDlwPM0syNOfIebSsza5fr0UbQp9ZrXTDE1VtcMBLoEvgco0vo%2FTo7dOWyvEK7ryYJu50%2BF4Zm%2B%2Fo%2BRD5ThtXDKZ9vSodvTnzTRyCUEe9RFO%2BWDwRlWWMNOZ6cAGOqUBAsE0U6%2FPgcFGursYTrhl87VDhq8Va%2FN57lfbzp5450nlJ1IftRYwalm%2FZph08omPPAchpqhhFjOiJKdV3HMsjJjw4vugLGCJtg92SoudRbCeoFsPBKMvl630ueSJ3oN%2F89ZkjXPwuSZ%2FNvFNrPGkx0yAKKH58lC5fcbSLRGNoSC0Te5Jl%2FLBWtEu88PatR9mSCmx3NFQadZdWStcFMZcjHsvIOKV&X-Amz-Signature=bbb048eec17d3b87bb80c2b6b9dee495528b76c5c0b1dc85da3a10c26d163dad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM43ZIB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b3cJmkkE6imYziLo4%2B3McBLkxj2N7xcLTIJ56MLcKAIgVDF0CJ9KwjFouIC13aynR0xpHH8KHT3Y%2F1Hx2zoZEXwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKCrad3eHBWs2j17tircA6JsfO7rV%2BDKdiZD8nuPjiFXcPRl10NXVlfSV1EiXshKGQIIwIH21da8Xqh%2Bdb1P5uhW%2Fe%2F87R9Hn7hBQOBgfI2liBnlNCqFpOVmAXA951MsT63qSqiniwWOzfuFe2vVj9BXNYQ%2FxxgA2vtZc19rnGIkngaiFcj7YeUPeIMnKbGWBr6hV%2Bx1I4xcxvi%2BAFtJJa8hrJFgQyn40bnRyld0OHoC3sSL09zIqTRvljlhrlTnahxkeGygQqRLpy6iC82pBn40TOH4p6DZ2iElLHo2mGvCA%2Bju3fgyUnelPhhn44svYRGK7gvR3F6%2BBo1NDoolV2mNmDgT%2Bg9xhbRRFicNk5X4ok%2Bjt7GKffcaWBU3EXuPlhjDa5GOKAoFgImLHzgNKZPlmlcl8eiQb0FEZhklbNjIfgOXoyhdbhZqiz76TFS0UD8%2F%2FuGOy%2F0o9A59Invlrzr8wsAThECdHGUidCE5zYEbe%2FFbkmSNaOmwPMgtv7YgE4WMXupC%2BuzlZh4GvQ%2BfzhvAGoMfiDlwPM0syNOfIebSsza5fr0UbQp9ZrXTDE1VtcMBLoEvgco0vo%2FTo7dOWyvEK7ryYJu50%2BF4Zm%2B%2Fo%2BRD5ThtXDKZ9vSodvTnzTRyCUEe9RFO%2BWDwRlWWMNOZ6cAGOqUBAsE0U6%2FPgcFGursYTrhl87VDhq8Va%2FN57lfbzp5450nlJ1IftRYwalm%2FZph08omPPAchpqhhFjOiJKdV3HMsjJjw4vugLGCJtg92SoudRbCeoFsPBKMvl630ueSJ3oN%2F89ZkjXPwuSZ%2FNvFNrPGkx0yAKKH58lC5fcbSLRGNoSC0Te5Jl%2FLBWtEu88PatR9mSCmx3NFQadZdWStcFMZcjHsvIOKV&X-Amz-Signature=b2d1dcf4cc238b1c64d8acba6aa36309f4e0792d3b061636b70ebefaad6a3b39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM43ZIB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4b3cJmkkE6imYziLo4%2B3McBLkxj2N7xcLTIJ56MLcKAIgVDF0CJ9KwjFouIC13aynR0xpHH8KHT3Y%2F1Hx2zoZEXwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKCrad3eHBWs2j17tircA6JsfO7rV%2BDKdiZD8nuPjiFXcPRl10NXVlfSV1EiXshKGQIIwIH21da8Xqh%2Bdb1P5uhW%2Fe%2F87R9Hn7hBQOBgfI2liBnlNCqFpOVmAXA951MsT63qSqiniwWOzfuFe2vVj9BXNYQ%2FxxgA2vtZc19rnGIkngaiFcj7YeUPeIMnKbGWBr6hV%2Bx1I4xcxvi%2BAFtJJa8hrJFgQyn40bnRyld0OHoC3sSL09zIqTRvljlhrlTnahxkeGygQqRLpy6iC82pBn40TOH4p6DZ2iElLHo2mGvCA%2Bju3fgyUnelPhhn44svYRGK7gvR3F6%2BBo1NDoolV2mNmDgT%2Bg9xhbRRFicNk5X4ok%2Bjt7GKffcaWBU3EXuPlhjDa5GOKAoFgImLHzgNKZPlmlcl8eiQb0FEZhklbNjIfgOXoyhdbhZqiz76TFS0UD8%2F%2FuGOy%2F0o9A59Invlrzr8wsAThECdHGUidCE5zYEbe%2FFbkmSNaOmwPMgtv7YgE4WMXupC%2BuzlZh4GvQ%2BfzhvAGoMfiDlwPM0syNOfIebSsza5fr0UbQp9ZrXTDE1VtcMBLoEvgco0vo%2FTo7dOWyvEK7ryYJu50%2BF4Zm%2B%2Fo%2BRD5ThtXDKZ9vSodvTnzTRyCUEe9RFO%2BWDwRlWWMNOZ6cAGOqUBAsE0U6%2FPgcFGursYTrhl87VDhq8Va%2FN57lfbzp5450nlJ1IftRYwalm%2FZph08omPPAchpqhhFjOiJKdV3HMsjJjw4vugLGCJtg92SoudRbCeoFsPBKMvl630ueSJ3oN%2F89ZkjXPwuSZ%2FNvFNrPGkx0yAKKH58lC5fcbSLRGNoSC0Te5Jl%2FLBWtEu88PatR9mSCmx3NFQadZdWStcFMZcjHsvIOKV&X-Amz-Signature=af7d7dc651435c4f9802a47a884e60a48b6a19a0407462b9fd3ae9098ac43346&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

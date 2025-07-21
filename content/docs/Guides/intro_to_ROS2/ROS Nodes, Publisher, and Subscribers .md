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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3RBTHQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLiazJv8ml9QDCptc2j1dodHJMp5ua7wfANmvnbpZSUAIgfxMnSg%2B%2Begz5R1laJdSP%2BV32RLbZNsBcqCLJyY%2BrkkAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFbvnrF9qjeWoQWIircA3buw6J8Sm0m0p2d0KTYg6dj9dNr5AHqHgm3A83fdYqWRR8Tx%2BXsgOSraq2HhrMAsxam6aeOvb1i1WHP6O5neOMuZEQdeZ%2B3vM%2BsUBGw3XtqDuKZhSKYvK8IWr1m%2FAgvLuKhGyWSfIKh6cVSeveFCTTIVmxw73FtU%2FzUtHwC3k4H%2Bpiwf34CcnIcGVM6QXK6y9RgKmKkS%2BHx0kiRLgWtkFipwuxnOCkKB6mqYF6ZJTdG%2FNLYwS8aNYAzU%2BDS3HtBmjrbWoClAA80CqHQUkDDx0b%2FLbiPUOYlP2YVkp2iySmPv2hcsWneQBv835DAhvD8l2rEZjGUM%2BSdGCVy1Wf8kGPKxi32VE0Jz3Np0sl9KVSQtLNDhn89KsDH5eCG4%2Fh4HapQ%2FhSap8zvrHU21bULpiyhaOpEbVDp%2BEaQcACFJHp3tjPEvRHEqEk8JtHduez2LxGuGEcqvk164TiMR9oZE1HtwRlp1p2snbEHkP9SsCDW3OUugteqHZkVyIAiLfqTozssfEmlO14RCinrKi0sGJTlCJfV0peq5KfVOX9xS7pvcYm%2ByaaUI9wADDL0Q%2F%2B68MHrmIScZJvU4pF1%2FR6VK%2B7Ui75TVSQDAtQeAP98lI9eHvzvCHV0a6HgRpRtMKSy%2BsMGOqUBMpWI%2FVn%2BwOlXhoBlECSCyZu7GgRhru3SJ3ZDnPI%2FbFA%2BnG8AJswTch4E1IxZ71MkW%2FFILFNunlmRGHVda6zZ4WfIrBvtzG9kRs7MTciaKATwm74KfpOihCatFDuzdVN3TZkQCpoPPllxMhVyAqpcdB%2FoyUi3EIlYgi7%2FOsZ8%2FaM8%2F1Gw%2Fp2fRkDbP58yzSzRSHrplCZGYvwdLZtPwJRNmnAOB%2Faq&X-Amz-Signature=b33822ef25b61158c98ccabc517d97d80863e7617893ddf741c85ee50b56480c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3RBTHQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLiazJv8ml9QDCptc2j1dodHJMp5ua7wfANmvnbpZSUAIgfxMnSg%2B%2Begz5R1laJdSP%2BV32RLbZNsBcqCLJyY%2BrkkAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFbvnrF9qjeWoQWIircA3buw6J8Sm0m0p2d0KTYg6dj9dNr5AHqHgm3A83fdYqWRR8Tx%2BXsgOSraq2HhrMAsxam6aeOvb1i1WHP6O5neOMuZEQdeZ%2B3vM%2BsUBGw3XtqDuKZhSKYvK8IWr1m%2FAgvLuKhGyWSfIKh6cVSeveFCTTIVmxw73FtU%2FzUtHwC3k4H%2Bpiwf34CcnIcGVM6QXK6y9RgKmKkS%2BHx0kiRLgWtkFipwuxnOCkKB6mqYF6ZJTdG%2FNLYwS8aNYAzU%2BDS3HtBmjrbWoClAA80CqHQUkDDx0b%2FLbiPUOYlP2YVkp2iySmPv2hcsWneQBv835DAhvD8l2rEZjGUM%2BSdGCVy1Wf8kGPKxi32VE0Jz3Np0sl9KVSQtLNDhn89KsDH5eCG4%2Fh4HapQ%2FhSap8zvrHU21bULpiyhaOpEbVDp%2BEaQcACFJHp3tjPEvRHEqEk8JtHduez2LxGuGEcqvk164TiMR9oZE1HtwRlp1p2snbEHkP9SsCDW3OUugteqHZkVyIAiLfqTozssfEmlO14RCinrKi0sGJTlCJfV0peq5KfVOX9xS7pvcYm%2ByaaUI9wADDL0Q%2F%2B68MHrmIScZJvU4pF1%2FR6VK%2B7Ui75TVSQDAtQeAP98lI9eHvzvCHV0a6HgRpRtMKSy%2BsMGOqUBMpWI%2FVn%2BwOlXhoBlECSCyZu7GgRhru3SJ3ZDnPI%2FbFA%2BnG8AJswTch4E1IxZ71MkW%2FFILFNunlmRGHVda6zZ4WfIrBvtzG9kRs7MTciaKATwm74KfpOihCatFDuzdVN3TZkQCpoPPllxMhVyAqpcdB%2FoyUi3EIlYgi7%2FOsZ8%2FaM8%2F1Gw%2Fp2fRkDbP58yzSzRSHrplCZGYvwdLZtPwJRNmnAOB%2Faq&X-Amz-Signature=d5287721ee682042038f6b4673b94984d7fbe16b73da57a0cc25565824519899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3RBTHQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLiazJv8ml9QDCptc2j1dodHJMp5ua7wfANmvnbpZSUAIgfxMnSg%2B%2Begz5R1laJdSP%2BV32RLbZNsBcqCLJyY%2BrkkAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFbvnrF9qjeWoQWIircA3buw6J8Sm0m0p2d0KTYg6dj9dNr5AHqHgm3A83fdYqWRR8Tx%2BXsgOSraq2HhrMAsxam6aeOvb1i1WHP6O5neOMuZEQdeZ%2B3vM%2BsUBGw3XtqDuKZhSKYvK8IWr1m%2FAgvLuKhGyWSfIKh6cVSeveFCTTIVmxw73FtU%2FzUtHwC3k4H%2Bpiwf34CcnIcGVM6QXK6y9RgKmKkS%2BHx0kiRLgWtkFipwuxnOCkKB6mqYF6ZJTdG%2FNLYwS8aNYAzU%2BDS3HtBmjrbWoClAA80CqHQUkDDx0b%2FLbiPUOYlP2YVkp2iySmPv2hcsWneQBv835DAhvD8l2rEZjGUM%2BSdGCVy1Wf8kGPKxi32VE0Jz3Np0sl9KVSQtLNDhn89KsDH5eCG4%2Fh4HapQ%2FhSap8zvrHU21bULpiyhaOpEbVDp%2BEaQcACFJHp3tjPEvRHEqEk8JtHduez2LxGuGEcqvk164TiMR9oZE1HtwRlp1p2snbEHkP9SsCDW3OUugteqHZkVyIAiLfqTozssfEmlO14RCinrKi0sGJTlCJfV0peq5KfVOX9xS7pvcYm%2ByaaUI9wADDL0Q%2F%2B68MHrmIScZJvU4pF1%2FR6VK%2B7Ui75TVSQDAtQeAP98lI9eHvzvCHV0a6HgRpRtMKSy%2BsMGOqUBMpWI%2FVn%2BwOlXhoBlECSCyZu7GgRhru3SJ3ZDnPI%2FbFA%2BnG8AJswTch4E1IxZ71MkW%2FFILFNunlmRGHVda6zZ4WfIrBvtzG9kRs7MTciaKATwm74KfpOihCatFDuzdVN3TZkQCpoPPllxMhVyAqpcdB%2FoyUi3EIlYgi7%2FOsZ8%2FaM8%2F1Gw%2Fp2fRkDbP58yzSzRSHrplCZGYvwdLZtPwJRNmnAOB%2Faq&X-Amz-Signature=f20f8912bfd78c3d8ea2909917c319ab4f7a8a2a576f48d412128812e876951a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3RBTHQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLiazJv8ml9QDCptc2j1dodHJMp5ua7wfANmvnbpZSUAIgfxMnSg%2B%2Begz5R1laJdSP%2BV32RLbZNsBcqCLJyY%2BrkkAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFbvnrF9qjeWoQWIircA3buw6J8Sm0m0p2d0KTYg6dj9dNr5AHqHgm3A83fdYqWRR8Tx%2BXsgOSraq2HhrMAsxam6aeOvb1i1WHP6O5neOMuZEQdeZ%2B3vM%2BsUBGw3XtqDuKZhSKYvK8IWr1m%2FAgvLuKhGyWSfIKh6cVSeveFCTTIVmxw73FtU%2FzUtHwC3k4H%2Bpiwf34CcnIcGVM6QXK6y9RgKmKkS%2BHx0kiRLgWtkFipwuxnOCkKB6mqYF6ZJTdG%2FNLYwS8aNYAzU%2BDS3HtBmjrbWoClAA80CqHQUkDDx0b%2FLbiPUOYlP2YVkp2iySmPv2hcsWneQBv835DAhvD8l2rEZjGUM%2BSdGCVy1Wf8kGPKxi32VE0Jz3Np0sl9KVSQtLNDhn89KsDH5eCG4%2Fh4HapQ%2FhSap8zvrHU21bULpiyhaOpEbVDp%2BEaQcACFJHp3tjPEvRHEqEk8JtHduez2LxGuGEcqvk164TiMR9oZE1HtwRlp1p2snbEHkP9SsCDW3OUugteqHZkVyIAiLfqTozssfEmlO14RCinrKi0sGJTlCJfV0peq5KfVOX9xS7pvcYm%2ByaaUI9wADDL0Q%2F%2B68MHrmIScZJvU4pF1%2FR6VK%2B7Ui75TVSQDAtQeAP98lI9eHvzvCHV0a6HgRpRtMKSy%2BsMGOqUBMpWI%2FVn%2BwOlXhoBlECSCyZu7GgRhru3SJ3ZDnPI%2FbFA%2BnG8AJswTch4E1IxZ71MkW%2FFILFNunlmRGHVda6zZ4WfIrBvtzG9kRs7MTciaKATwm74KfpOihCatFDuzdVN3TZkQCpoPPllxMhVyAqpcdB%2FoyUi3EIlYgi7%2FOsZ8%2FaM8%2F1Gw%2Fp2fRkDbP58yzSzRSHrplCZGYvwdLZtPwJRNmnAOB%2Faq&X-Amz-Signature=41a2c43d6d05e1e396ac543bd09ed14a86205b0329be5550c85981e76ca63025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3RBTHQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLiazJv8ml9QDCptc2j1dodHJMp5ua7wfANmvnbpZSUAIgfxMnSg%2B%2Begz5R1laJdSP%2BV32RLbZNsBcqCLJyY%2BrkkAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFbvnrF9qjeWoQWIircA3buw6J8Sm0m0p2d0KTYg6dj9dNr5AHqHgm3A83fdYqWRR8Tx%2BXsgOSraq2HhrMAsxam6aeOvb1i1WHP6O5neOMuZEQdeZ%2B3vM%2BsUBGw3XtqDuKZhSKYvK8IWr1m%2FAgvLuKhGyWSfIKh6cVSeveFCTTIVmxw73FtU%2FzUtHwC3k4H%2Bpiwf34CcnIcGVM6QXK6y9RgKmKkS%2BHx0kiRLgWtkFipwuxnOCkKB6mqYF6ZJTdG%2FNLYwS8aNYAzU%2BDS3HtBmjrbWoClAA80CqHQUkDDx0b%2FLbiPUOYlP2YVkp2iySmPv2hcsWneQBv835DAhvD8l2rEZjGUM%2BSdGCVy1Wf8kGPKxi32VE0Jz3Np0sl9KVSQtLNDhn89KsDH5eCG4%2Fh4HapQ%2FhSap8zvrHU21bULpiyhaOpEbVDp%2BEaQcACFJHp3tjPEvRHEqEk8JtHduez2LxGuGEcqvk164TiMR9oZE1HtwRlp1p2snbEHkP9SsCDW3OUugteqHZkVyIAiLfqTozssfEmlO14RCinrKi0sGJTlCJfV0peq5KfVOX9xS7pvcYm%2ByaaUI9wADDL0Q%2F%2B68MHrmIScZJvU4pF1%2FR6VK%2B7Ui75TVSQDAtQeAP98lI9eHvzvCHV0a6HgRpRtMKSy%2BsMGOqUBMpWI%2FVn%2BwOlXhoBlECSCyZu7GgRhru3SJ3ZDnPI%2FbFA%2BnG8AJswTch4E1IxZ71MkW%2FFILFNunlmRGHVda6zZ4WfIrBvtzG9kRs7MTciaKATwm74KfpOihCatFDuzdVN3TZkQCpoPPllxMhVyAqpcdB%2FoyUi3EIlYgi7%2FOsZ8%2FaM8%2F1Gw%2Fp2fRkDbP58yzSzRSHrplCZGYvwdLZtPwJRNmnAOB%2Faq&X-Amz-Signature=e6e08f9db28be76fdab02da236bc11084353ccc3e602acb08f7eeba38b9590e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3RBTHQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLiazJv8ml9QDCptc2j1dodHJMp5ua7wfANmvnbpZSUAIgfxMnSg%2B%2Begz5R1laJdSP%2BV32RLbZNsBcqCLJyY%2BrkkAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFbvnrF9qjeWoQWIircA3buw6J8Sm0m0p2d0KTYg6dj9dNr5AHqHgm3A83fdYqWRR8Tx%2BXsgOSraq2HhrMAsxam6aeOvb1i1WHP6O5neOMuZEQdeZ%2B3vM%2BsUBGw3XtqDuKZhSKYvK8IWr1m%2FAgvLuKhGyWSfIKh6cVSeveFCTTIVmxw73FtU%2FzUtHwC3k4H%2Bpiwf34CcnIcGVM6QXK6y9RgKmKkS%2BHx0kiRLgWtkFipwuxnOCkKB6mqYF6ZJTdG%2FNLYwS8aNYAzU%2BDS3HtBmjrbWoClAA80CqHQUkDDx0b%2FLbiPUOYlP2YVkp2iySmPv2hcsWneQBv835DAhvD8l2rEZjGUM%2BSdGCVy1Wf8kGPKxi32VE0Jz3Np0sl9KVSQtLNDhn89KsDH5eCG4%2Fh4HapQ%2FhSap8zvrHU21bULpiyhaOpEbVDp%2BEaQcACFJHp3tjPEvRHEqEk8JtHduez2LxGuGEcqvk164TiMR9oZE1HtwRlp1p2snbEHkP9SsCDW3OUugteqHZkVyIAiLfqTozssfEmlO14RCinrKi0sGJTlCJfV0peq5KfVOX9xS7pvcYm%2ByaaUI9wADDL0Q%2F%2B68MHrmIScZJvU4pF1%2FR6VK%2B7Ui75TVSQDAtQeAP98lI9eHvzvCHV0a6HgRpRtMKSy%2BsMGOqUBMpWI%2FVn%2BwOlXhoBlECSCyZu7GgRhru3SJ3ZDnPI%2FbFA%2BnG8AJswTch4E1IxZ71MkW%2FFILFNunlmRGHVda6zZ4WfIrBvtzG9kRs7MTciaKATwm74KfpOihCatFDuzdVN3TZkQCpoPPllxMhVyAqpcdB%2FoyUi3EIlYgi7%2FOsZ8%2FaM8%2F1Gw%2Fp2fRkDbP58yzSzRSHrplCZGYvwdLZtPwJRNmnAOB%2Faq&X-Amz-Signature=3d27e47e15e584591d3636e63952f225b61977d150e72d4cf414f2f56b61e905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3RBTHQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLiazJv8ml9QDCptc2j1dodHJMp5ua7wfANmvnbpZSUAIgfxMnSg%2B%2Begz5R1laJdSP%2BV32RLbZNsBcqCLJyY%2BrkkAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFbvnrF9qjeWoQWIircA3buw6J8Sm0m0p2d0KTYg6dj9dNr5AHqHgm3A83fdYqWRR8Tx%2BXsgOSraq2HhrMAsxam6aeOvb1i1WHP6O5neOMuZEQdeZ%2B3vM%2BsUBGw3XtqDuKZhSKYvK8IWr1m%2FAgvLuKhGyWSfIKh6cVSeveFCTTIVmxw73FtU%2FzUtHwC3k4H%2Bpiwf34CcnIcGVM6QXK6y9RgKmKkS%2BHx0kiRLgWtkFipwuxnOCkKB6mqYF6ZJTdG%2FNLYwS8aNYAzU%2BDS3HtBmjrbWoClAA80CqHQUkDDx0b%2FLbiPUOYlP2YVkp2iySmPv2hcsWneQBv835DAhvD8l2rEZjGUM%2BSdGCVy1Wf8kGPKxi32VE0Jz3Np0sl9KVSQtLNDhn89KsDH5eCG4%2Fh4HapQ%2FhSap8zvrHU21bULpiyhaOpEbVDp%2BEaQcACFJHp3tjPEvRHEqEk8JtHduez2LxGuGEcqvk164TiMR9oZE1HtwRlp1p2snbEHkP9SsCDW3OUugteqHZkVyIAiLfqTozssfEmlO14RCinrKi0sGJTlCJfV0peq5KfVOX9xS7pvcYm%2ByaaUI9wADDL0Q%2F%2B68MHrmIScZJvU4pF1%2FR6VK%2B7Ui75TVSQDAtQeAP98lI9eHvzvCHV0a6HgRpRtMKSy%2BsMGOqUBMpWI%2FVn%2BwOlXhoBlECSCyZu7GgRhru3SJ3ZDnPI%2FbFA%2BnG8AJswTch4E1IxZ71MkW%2FFILFNunlmRGHVda6zZ4WfIrBvtzG9kRs7MTciaKATwm74KfpOihCatFDuzdVN3TZkQCpoPPllxMhVyAqpcdB%2FoyUi3EIlYgi7%2FOsZ8%2FaM8%2F1Gw%2Fp2fRkDbP58yzSzRSHrplCZGYvwdLZtPwJRNmnAOB%2Faq&X-Amz-Signature=ac4e407cc7fb5a0beb5a498abaa114049d39c928c14a2dbcee6b902e737a7c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3RBTHQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLiazJv8ml9QDCptc2j1dodHJMp5ua7wfANmvnbpZSUAIgfxMnSg%2B%2Begz5R1laJdSP%2BV32RLbZNsBcqCLJyY%2BrkkAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFbvnrF9qjeWoQWIircA3buw6J8Sm0m0p2d0KTYg6dj9dNr5AHqHgm3A83fdYqWRR8Tx%2BXsgOSraq2HhrMAsxam6aeOvb1i1WHP6O5neOMuZEQdeZ%2B3vM%2BsUBGw3XtqDuKZhSKYvK8IWr1m%2FAgvLuKhGyWSfIKh6cVSeveFCTTIVmxw73FtU%2FzUtHwC3k4H%2Bpiwf34CcnIcGVM6QXK6y9RgKmKkS%2BHx0kiRLgWtkFipwuxnOCkKB6mqYF6ZJTdG%2FNLYwS8aNYAzU%2BDS3HtBmjrbWoClAA80CqHQUkDDx0b%2FLbiPUOYlP2YVkp2iySmPv2hcsWneQBv835DAhvD8l2rEZjGUM%2BSdGCVy1Wf8kGPKxi32VE0Jz3Np0sl9KVSQtLNDhn89KsDH5eCG4%2Fh4HapQ%2FhSap8zvrHU21bULpiyhaOpEbVDp%2BEaQcACFJHp3tjPEvRHEqEk8JtHduez2LxGuGEcqvk164TiMR9oZE1HtwRlp1p2snbEHkP9SsCDW3OUugteqHZkVyIAiLfqTozssfEmlO14RCinrKi0sGJTlCJfV0peq5KfVOX9xS7pvcYm%2ByaaUI9wADDL0Q%2F%2B68MHrmIScZJvU4pF1%2FR6VK%2B7Ui75TVSQDAtQeAP98lI9eHvzvCHV0a6HgRpRtMKSy%2BsMGOqUBMpWI%2FVn%2BwOlXhoBlECSCyZu7GgRhru3SJ3ZDnPI%2FbFA%2BnG8AJswTch4E1IxZ71MkW%2FFILFNunlmRGHVda6zZ4WfIrBvtzG9kRs7MTciaKATwm74KfpOihCatFDuzdVN3TZkQCpoPPllxMhVyAqpcdB%2FoyUi3EIlYgi7%2FOsZ8%2FaM8%2F1Gw%2Fp2fRkDbP58yzSzRSHrplCZGYvwdLZtPwJRNmnAOB%2Faq&X-Amz-Signature=003921fc3a63499d57c00acd7a498fda363019fb1f84cc17764d034d27c4b940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

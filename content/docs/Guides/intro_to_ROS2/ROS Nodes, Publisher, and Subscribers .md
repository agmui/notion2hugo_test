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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVTFFWG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKVFLOaEUgf6UFpccHuCNvY96NJAgCbsHbLbBFXQz10AiApvKVDprD5Do4HSHhrn5Tsk4qwkEay%2B0jJDYhogzsioSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYC%2BtaYgfE8mTkSg6KtwD3t3pyXm6BxdrN7CStwIkesMitWiaZLHzBSfebbjziEkJ0CtNaQ%2BOrv8zHmFxLkSWqmTATaIRf0Crbo4bKvRkddnDOm8a%2Bqh%2BAlJ5UQWfnv8eA2cd2765Hx5n0YPagglGo238ycUEu90Zp4lKJmQGKeXH5oRbVJQXSiSJTyF9GchrD1uo91vvIf6xOAwmsJW7Tr7h0S3ItxF5ushOHPMd5CdNOnlpiM%2Fa%2FBemoIikcnMn2pH3sOx2uSRy0mxWCFXz4nLakj%2BQWs%2F5i1Yb42VDnz4ZyObVtFpOnixyxuAR0kydit5TYwUN6k5xtjqJ4NxEFgud2wscm3SdoWw04cUH8Cwn1Rm0BWurfwdNiYCMfOmkse1O2dy7wvuCm8z4AKUFvBSMOm5LAlN1TyfAG%2F3j1nVRDYITMREWF69%2FkVpr0A1UwJPMDn0UOIwg3HanTeV1abOJluiy3AJ3rc1d%2BEYIRoS%2BSldvI63FhE%2FnXVSV8X%2FDsGXrq87i1ASKPcsHBPVcI9FviyyHESjTkSFpAHGsj3uEsqV0MXCW1ytHIKPoUY8ZLkjx1VxylVGfpuBcT2yNxAO0vpsnCt0N6osycSAFkxRG1lJoj7izGElM33%2B%2BGXHZAInvurq082ot9wQw2NzqwQY6pgGxrzJVMuqcGC4gur6MCpUA9TPGeOQAQp1pqFuDa6OsBlju1y7RHZVzwvAAZBYkAB5MuMxmC91vd3CXb8hkUVpFAdGVaftkoBqs6RCWEhsCC%2FQOG09qf9RUK0Fn9%2BeBoeSXnx9HeW42letCZdTVEVPJn0hW1AVB%2FISS%2F1OHJO9AyONInLPiTGEAMBBA6cdPvMPTwegtS2JCusopN2XY4RSQgNqJrn4y&X-Amz-Signature=7d46ac5cd42b805a6519ac13ad4a503ac0e8bc69a48583cccbdc9789e27bef96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVTFFWG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKVFLOaEUgf6UFpccHuCNvY96NJAgCbsHbLbBFXQz10AiApvKVDprD5Do4HSHhrn5Tsk4qwkEay%2B0jJDYhogzsioSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYC%2BtaYgfE8mTkSg6KtwD3t3pyXm6BxdrN7CStwIkesMitWiaZLHzBSfebbjziEkJ0CtNaQ%2BOrv8zHmFxLkSWqmTATaIRf0Crbo4bKvRkddnDOm8a%2Bqh%2BAlJ5UQWfnv8eA2cd2765Hx5n0YPagglGo238ycUEu90Zp4lKJmQGKeXH5oRbVJQXSiSJTyF9GchrD1uo91vvIf6xOAwmsJW7Tr7h0S3ItxF5ushOHPMd5CdNOnlpiM%2Fa%2FBemoIikcnMn2pH3sOx2uSRy0mxWCFXz4nLakj%2BQWs%2F5i1Yb42VDnz4ZyObVtFpOnixyxuAR0kydit5TYwUN6k5xtjqJ4NxEFgud2wscm3SdoWw04cUH8Cwn1Rm0BWurfwdNiYCMfOmkse1O2dy7wvuCm8z4AKUFvBSMOm5LAlN1TyfAG%2F3j1nVRDYITMREWF69%2FkVpr0A1UwJPMDn0UOIwg3HanTeV1abOJluiy3AJ3rc1d%2BEYIRoS%2BSldvI63FhE%2FnXVSV8X%2FDsGXrq87i1ASKPcsHBPVcI9FviyyHESjTkSFpAHGsj3uEsqV0MXCW1ytHIKPoUY8ZLkjx1VxylVGfpuBcT2yNxAO0vpsnCt0N6osycSAFkxRG1lJoj7izGElM33%2B%2BGXHZAInvurq082ot9wQw2NzqwQY6pgGxrzJVMuqcGC4gur6MCpUA9TPGeOQAQp1pqFuDa6OsBlju1y7RHZVzwvAAZBYkAB5MuMxmC91vd3CXb8hkUVpFAdGVaftkoBqs6RCWEhsCC%2FQOG09qf9RUK0Fn9%2BeBoeSXnx9HeW42letCZdTVEVPJn0hW1AVB%2FISS%2F1OHJO9AyONInLPiTGEAMBBA6cdPvMPTwegtS2JCusopN2XY4RSQgNqJrn4y&X-Amz-Signature=34a3bee66c753a21415a0bb4a594b58b609afd24818714eb26afd87b8da7b90a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVTFFWG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKVFLOaEUgf6UFpccHuCNvY96NJAgCbsHbLbBFXQz10AiApvKVDprD5Do4HSHhrn5Tsk4qwkEay%2B0jJDYhogzsioSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYC%2BtaYgfE8mTkSg6KtwD3t3pyXm6BxdrN7CStwIkesMitWiaZLHzBSfebbjziEkJ0CtNaQ%2BOrv8zHmFxLkSWqmTATaIRf0Crbo4bKvRkddnDOm8a%2Bqh%2BAlJ5UQWfnv8eA2cd2765Hx5n0YPagglGo238ycUEu90Zp4lKJmQGKeXH5oRbVJQXSiSJTyF9GchrD1uo91vvIf6xOAwmsJW7Tr7h0S3ItxF5ushOHPMd5CdNOnlpiM%2Fa%2FBemoIikcnMn2pH3sOx2uSRy0mxWCFXz4nLakj%2BQWs%2F5i1Yb42VDnz4ZyObVtFpOnixyxuAR0kydit5TYwUN6k5xtjqJ4NxEFgud2wscm3SdoWw04cUH8Cwn1Rm0BWurfwdNiYCMfOmkse1O2dy7wvuCm8z4AKUFvBSMOm5LAlN1TyfAG%2F3j1nVRDYITMREWF69%2FkVpr0A1UwJPMDn0UOIwg3HanTeV1abOJluiy3AJ3rc1d%2BEYIRoS%2BSldvI63FhE%2FnXVSV8X%2FDsGXrq87i1ASKPcsHBPVcI9FviyyHESjTkSFpAHGsj3uEsqV0MXCW1ytHIKPoUY8ZLkjx1VxylVGfpuBcT2yNxAO0vpsnCt0N6osycSAFkxRG1lJoj7izGElM33%2B%2BGXHZAInvurq082ot9wQw2NzqwQY6pgGxrzJVMuqcGC4gur6MCpUA9TPGeOQAQp1pqFuDa6OsBlju1y7RHZVzwvAAZBYkAB5MuMxmC91vd3CXb8hkUVpFAdGVaftkoBqs6RCWEhsCC%2FQOG09qf9RUK0Fn9%2BeBoeSXnx9HeW42letCZdTVEVPJn0hW1AVB%2FISS%2F1OHJO9AyONInLPiTGEAMBBA6cdPvMPTwegtS2JCusopN2XY4RSQgNqJrn4y&X-Amz-Signature=f18f6152a808c8f0a23338790b6860ea055dc3edab77963c1520902a4e1ff918&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVTFFWG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKVFLOaEUgf6UFpccHuCNvY96NJAgCbsHbLbBFXQz10AiApvKVDprD5Do4HSHhrn5Tsk4qwkEay%2B0jJDYhogzsioSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYC%2BtaYgfE8mTkSg6KtwD3t3pyXm6BxdrN7CStwIkesMitWiaZLHzBSfebbjziEkJ0CtNaQ%2BOrv8zHmFxLkSWqmTATaIRf0Crbo4bKvRkddnDOm8a%2Bqh%2BAlJ5UQWfnv8eA2cd2765Hx5n0YPagglGo238ycUEu90Zp4lKJmQGKeXH5oRbVJQXSiSJTyF9GchrD1uo91vvIf6xOAwmsJW7Tr7h0S3ItxF5ushOHPMd5CdNOnlpiM%2Fa%2FBemoIikcnMn2pH3sOx2uSRy0mxWCFXz4nLakj%2BQWs%2F5i1Yb42VDnz4ZyObVtFpOnixyxuAR0kydit5TYwUN6k5xtjqJ4NxEFgud2wscm3SdoWw04cUH8Cwn1Rm0BWurfwdNiYCMfOmkse1O2dy7wvuCm8z4AKUFvBSMOm5LAlN1TyfAG%2F3j1nVRDYITMREWF69%2FkVpr0A1UwJPMDn0UOIwg3HanTeV1abOJluiy3AJ3rc1d%2BEYIRoS%2BSldvI63FhE%2FnXVSV8X%2FDsGXrq87i1ASKPcsHBPVcI9FviyyHESjTkSFpAHGsj3uEsqV0MXCW1ytHIKPoUY8ZLkjx1VxylVGfpuBcT2yNxAO0vpsnCt0N6osycSAFkxRG1lJoj7izGElM33%2B%2BGXHZAInvurq082ot9wQw2NzqwQY6pgGxrzJVMuqcGC4gur6MCpUA9TPGeOQAQp1pqFuDa6OsBlju1y7RHZVzwvAAZBYkAB5MuMxmC91vd3CXb8hkUVpFAdGVaftkoBqs6RCWEhsCC%2FQOG09qf9RUK0Fn9%2BeBoeSXnx9HeW42letCZdTVEVPJn0hW1AVB%2FISS%2F1OHJO9AyONInLPiTGEAMBBA6cdPvMPTwegtS2JCusopN2XY4RSQgNqJrn4y&X-Amz-Signature=914451bc863e8f4d706cd566cd8952cd339583ac69f192b1a28c7506b63a964f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVTFFWG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKVFLOaEUgf6UFpccHuCNvY96NJAgCbsHbLbBFXQz10AiApvKVDprD5Do4HSHhrn5Tsk4qwkEay%2B0jJDYhogzsioSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYC%2BtaYgfE8mTkSg6KtwD3t3pyXm6BxdrN7CStwIkesMitWiaZLHzBSfebbjziEkJ0CtNaQ%2BOrv8zHmFxLkSWqmTATaIRf0Crbo4bKvRkddnDOm8a%2Bqh%2BAlJ5UQWfnv8eA2cd2765Hx5n0YPagglGo238ycUEu90Zp4lKJmQGKeXH5oRbVJQXSiSJTyF9GchrD1uo91vvIf6xOAwmsJW7Tr7h0S3ItxF5ushOHPMd5CdNOnlpiM%2Fa%2FBemoIikcnMn2pH3sOx2uSRy0mxWCFXz4nLakj%2BQWs%2F5i1Yb42VDnz4ZyObVtFpOnixyxuAR0kydit5TYwUN6k5xtjqJ4NxEFgud2wscm3SdoWw04cUH8Cwn1Rm0BWurfwdNiYCMfOmkse1O2dy7wvuCm8z4AKUFvBSMOm5LAlN1TyfAG%2F3j1nVRDYITMREWF69%2FkVpr0A1UwJPMDn0UOIwg3HanTeV1abOJluiy3AJ3rc1d%2BEYIRoS%2BSldvI63FhE%2FnXVSV8X%2FDsGXrq87i1ASKPcsHBPVcI9FviyyHESjTkSFpAHGsj3uEsqV0MXCW1ytHIKPoUY8ZLkjx1VxylVGfpuBcT2yNxAO0vpsnCt0N6osycSAFkxRG1lJoj7izGElM33%2B%2BGXHZAInvurq082ot9wQw2NzqwQY6pgGxrzJVMuqcGC4gur6MCpUA9TPGeOQAQp1pqFuDa6OsBlju1y7RHZVzwvAAZBYkAB5MuMxmC91vd3CXb8hkUVpFAdGVaftkoBqs6RCWEhsCC%2FQOG09qf9RUK0Fn9%2BeBoeSXnx9HeW42letCZdTVEVPJn0hW1AVB%2FISS%2F1OHJO9AyONInLPiTGEAMBBA6cdPvMPTwegtS2JCusopN2XY4RSQgNqJrn4y&X-Amz-Signature=12a12c4128f0784c3b3dc28d13424ccf6b723c4e5f3f60b4353627eacdf14be2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVTFFWG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKVFLOaEUgf6UFpccHuCNvY96NJAgCbsHbLbBFXQz10AiApvKVDprD5Do4HSHhrn5Tsk4qwkEay%2B0jJDYhogzsioSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYC%2BtaYgfE8mTkSg6KtwD3t3pyXm6BxdrN7CStwIkesMitWiaZLHzBSfebbjziEkJ0CtNaQ%2BOrv8zHmFxLkSWqmTATaIRf0Crbo4bKvRkddnDOm8a%2Bqh%2BAlJ5UQWfnv8eA2cd2765Hx5n0YPagglGo238ycUEu90Zp4lKJmQGKeXH5oRbVJQXSiSJTyF9GchrD1uo91vvIf6xOAwmsJW7Tr7h0S3ItxF5ushOHPMd5CdNOnlpiM%2Fa%2FBemoIikcnMn2pH3sOx2uSRy0mxWCFXz4nLakj%2BQWs%2F5i1Yb42VDnz4ZyObVtFpOnixyxuAR0kydit5TYwUN6k5xtjqJ4NxEFgud2wscm3SdoWw04cUH8Cwn1Rm0BWurfwdNiYCMfOmkse1O2dy7wvuCm8z4AKUFvBSMOm5LAlN1TyfAG%2F3j1nVRDYITMREWF69%2FkVpr0A1UwJPMDn0UOIwg3HanTeV1abOJluiy3AJ3rc1d%2BEYIRoS%2BSldvI63FhE%2FnXVSV8X%2FDsGXrq87i1ASKPcsHBPVcI9FviyyHESjTkSFpAHGsj3uEsqV0MXCW1ytHIKPoUY8ZLkjx1VxylVGfpuBcT2yNxAO0vpsnCt0N6osycSAFkxRG1lJoj7izGElM33%2B%2BGXHZAInvurq082ot9wQw2NzqwQY6pgGxrzJVMuqcGC4gur6MCpUA9TPGeOQAQp1pqFuDa6OsBlju1y7RHZVzwvAAZBYkAB5MuMxmC91vd3CXb8hkUVpFAdGVaftkoBqs6RCWEhsCC%2FQOG09qf9RUK0Fn9%2BeBoeSXnx9HeW42letCZdTVEVPJn0hW1AVB%2FISS%2F1OHJO9AyONInLPiTGEAMBBA6cdPvMPTwegtS2JCusopN2XY4RSQgNqJrn4y&X-Amz-Signature=599c579863ce5afc91cc8901790a809b11d9800b3586cf88bab7b203cf6a2699&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVTFFWG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKVFLOaEUgf6UFpccHuCNvY96NJAgCbsHbLbBFXQz10AiApvKVDprD5Do4HSHhrn5Tsk4qwkEay%2B0jJDYhogzsioSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYC%2BtaYgfE8mTkSg6KtwD3t3pyXm6BxdrN7CStwIkesMitWiaZLHzBSfebbjziEkJ0CtNaQ%2BOrv8zHmFxLkSWqmTATaIRf0Crbo4bKvRkddnDOm8a%2Bqh%2BAlJ5UQWfnv8eA2cd2765Hx5n0YPagglGo238ycUEu90Zp4lKJmQGKeXH5oRbVJQXSiSJTyF9GchrD1uo91vvIf6xOAwmsJW7Tr7h0S3ItxF5ushOHPMd5CdNOnlpiM%2Fa%2FBemoIikcnMn2pH3sOx2uSRy0mxWCFXz4nLakj%2BQWs%2F5i1Yb42VDnz4ZyObVtFpOnixyxuAR0kydit5TYwUN6k5xtjqJ4NxEFgud2wscm3SdoWw04cUH8Cwn1Rm0BWurfwdNiYCMfOmkse1O2dy7wvuCm8z4AKUFvBSMOm5LAlN1TyfAG%2F3j1nVRDYITMREWF69%2FkVpr0A1UwJPMDn0UOIwg3HanTeV1abOJluiy3AJ3rc1d%2BEYIRoS%2BSldvI63FhE%2FnXVSV8X%2FDsGXrq87i1ASKPcsHBPVcI9FviyyHESjTkSFpAHGsj3uEsqV0MXCW1ytHIKPoUY8ZLkjx1VxylVGfpuBcT2yNxAO0vpsnCt0N6osycSAFkxRG1lJoj7izGElM33%2B%2BGXHZAInvurq082ot9wQw2NzqwQY6pgGxrzJVMuqcGC4gur6MCpUA9TPGeOQAQp1pqFuDa6OsBlju1y7RHZVzwvAAZBYkAB5MuMxmC91vd3CXb8hkUVpFAdGVaftkoBqs6RCWEhsCC%2FQOG09qf9RUK0Fn9%2BeBoeSXnx9HeW42letCZdTVEVPJn0hW1AVB%2FISS%2F1OHJO9AyONInLPiTGEAMBBA6cdPvMPTwegtS2JCusopN2XY4RSQgNqJrn4y&X-Amz-Signature=11c416825e7143aa60322eeab9a66fe5cad54ad9d89c30c045d0a701ad7bc654&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVTFFWG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKVFLOaEUgf6UFpccHuCNvY96NJAgCbsHbLbBFXQz10AiApvKVDprD5Do4HSHhrn5Tsk4qwkEay%2B0jJDYhogzsioSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYC%2BtaYgfE8mTkSg6KtwD3t3pyXm6BxdrN7CStwIkesMitWiaZLHzBSfebbjziEkJ0CtNaQ%2BOrv8zHmFxLkSWqmTATaIRf0Crbo4bKvRkddnDOm8a%2Bqh%2BAlJ5UQWfnv8eA2cd2765Hx5n0YPagglGo238ycUEu90Zp4lKJmQGKeXH5oRbVJQXSiSJTyF9GchrD1uo91vvIf6xOAwmsJW7Tr7h0S3ItxF5ushOHPMd5CdNOnlpiM%2Fa%2FBemoIikcnMn2pH3sOx2uSRy0mxWCFXz4nLakj%2BQWs%2F5i1Yb42VDnz4ZyObVtFpOnixyxuAR0kydit5TYwUN6k5xtjqJ4NxEFgud2wscm3SdoWw04cUH8Cwn1Rm0BWurfwdNiYCMfOmkse1O2dy7wvuCm8z4AKUFvBSMOm5LAlN1TyfAG%2F3j1nVRDYITMREWF69%2FkVpr0A1UwJPMDn0UOIwg3HanTeV1abOJluiy3AJ3rc1d%2BEYIRoS%2BSldvI63FhE%2FnXVSV8X%2FDsGXrq87i1ASKPcsHBPVcI9FviyyHESjTkSFpAHGsj3uEsqV0MXCW1ytHIKPoUY8ZLkjx1VxylVGfpuBcT2yNxAO0vpsnCt0N6osycSAFkxRG1lJoj7izGElM33%2B%2BGXHZAInvurq082ot9wQw2NzqwQY6pgGxrzJVMuqcGC4gur6MCpUA9TPGeOQAQp1pqFuDa6OsBlju1y7RHZVzwvAAZBYkAB5MuMxmC91vd3CXb8hkUVpFAdGVaftkoBqs6RCWEhsCC%2FQOG09qf9RUK0Fn9%2BeBoeSXnx9HeW42letCZdTVEVPJn0hW1AVB%2FISS%2F1OHJO9AyONInLPiTGEAMBBA6cdPvMPTwegtS2JCusopN2XY4RSQgNqJrn4y&X-Amz-Signature=0b6cf3ec24c7e64d84a12110057cf7c4cf0e8bc00e15f865e8a276832987d770&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

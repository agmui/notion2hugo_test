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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEC7RUF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhNi%2FIQwLzGmdcTQhW9jHLFKYGiyOx9oNHmX4DbZaBdAiEAjCaeLavXgeb45bLoNcvTMH01Tcg4nDK373pPUsu3kdkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJhj5rirUpq6BBfBCrcA66Am5knsnUfPQEqDalT8xvrwn8t9bw8m%2By3WOMJTcnKQEST6%2BrgFtQCdr5SJqjV6iN0I3nlmnH8ngr%2F%2FTDLOtoD0ecryRYcd5wIdnSUKcSGYnwjyF8ztdnWsf8pjVJBLPvj80cVemWl75j%2B18EIh5mkzCImORATNhJear0taoPn45fExSBbZSj4COQjNkS8Bmzkw3eP5OF%2BPVtFwm5Bm5bA3DK7tt1%2FEugkdPaFj4NP%2BjQ9awxJrQpW7R4odZvFQKjNKO1DPGbDPYZO7l5BFx9vraAIP04bsvXrjEsj884e3Fit%2FEEM5CFD5GykXilk2lGBV%2BeFwf7PcrzBZ48LtyfoSN0C%2FBFhJiShcbZpobIscCVdlLS2ES96PVSDgsMK3cGmuiR1zajYKPo%2FuV6H13TTHaZmxOHcya6gxDo4jCHdxLJsHR8tlWrOYLfZ510%2B1zicohYBvF5HX9kQn20K2ZxF4yLA6boTSOfkqqAPSVRyRwH6H0mgyQ7BgGoAzR2I8xQoVLSW9jl1dQFskiOA0CuAiEiMj6sDy4wXmOV8Upca4umZ2swGOnY%2B48eXrn6oiVUrmfTZju4Bwyjm65%2BhPbaz2C%2BchJF5SlR3XOSet5SsKGOkrr4xfn8H24c2MLLV68EGOqUBN3PhUaWQGm9YF7%2BCdBa1vyAHNRjVkbtYexVlcDUSYvtY4outhRnKw8HdY2b0sNWUnalsgzbZWba3BEEZ5NnlyGgbrwhXizVmmPyWP3N1qNDQXQNBTH8imWWc5eWoApJT4Dpyq14Yf63sMfgvb89OR%2FIziu%2F69XfmzLM2I474s%2F%2BzcuhH%2BZbvKC%2BcCe0qdarmXn3kcuoPB63u63yJKXr8Tn4H5SQ7&X-Amz-Signature=696b157795b4e349359306e1438abbd03203f59acfb791dcec216b4b61303411&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEC7RUF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhNi%2FIQwLzGmdcTQhW9jHLFKYGiyOx9oNHmX4DbZaBdAiEAjCaeLavXgeb45bLoNcvTMH01Tcg4nDK373pPUsu3kdkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJhj5rirUpq6BBfBCrcA66Am5knsnUfPQEqDalT8xvrwn8t9bw8m%2By3WOMJTcnKQEST6%2BrgFtQCdr5SJqjV6iN0I3nlmnH8ngr%2F%2FTDLOtoD0ecryRYcd5wIdnSUKcSGYnwjyF8ztdnWsf8pjVJBLPvj80cVemWl75j%2B18EIh5mkzCImORATNhJear0taoPn45fExSBbZSj4COQjNkS8Bmzkw3eP5OF%2BPVtFwm5Bm5bA3DK7tt1%2FEugkdPaFj4NP%2BjQ9awxJrQpW7R4odZvFQKjNKO1DPGbDPYZO7l5BFx9vraAIP04bsvXrjEsj884e3Fit%2FEEM5CFD5GykXilk2lGBV%2BeFwf7PcrzBZ48LtyfoSN0C%2FBFhJiShcbZpobIscCVdlLS2ES96PVSDgsMK3cGmuiR1zajYKPo%2FuV6H13TTHaZmxOHcya6gxDo4jCHdxLJsHR8tlWrOYLfZ510%2B1zicohYBvF5HX9kQn20K2ZxF4yLA6boTSOfkqqAPSVRyRwH6H0mgyQ7BgGoAzR2I8xQoVLSW9jl1dQFskiOA0CuAiEiMj6sDy4wXmOV8Upca4umZ2swGOnY%2B48eXrn6oiVUrmfTZju4Bwyjm65%2BhPbaz2C%2BchJF5SlR3XOSet5SsKGOkrr4xfn8H24c2MLLV68EGOqUBN3PhUaWQGm9YF7%2BCdBa1vyAHNRjVkbtYexVlcDUSYvtY4outhRnKw8HdY2b0sNWUnalsgzbZWba3BEEZ5NnlyGgbrwhXizVmmPyWP3N1qNDQXQNBTH8imWWc5eWoApJT4Dpyq14Yf63sMfgvb89OR%2FIziu%2F69XfmzLM2I474s%2F%2BzcuhH%2BZbvKC%2BcCe0qdarmXn3kcuoPB63u63yJKXr8Tn4H5SQ7&X-Amz-Signature=63c92bb2499853021c01d0a16e9e4c806aa9f486549e8024c1ad882b24707e01&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEC7RUF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhNi%2FIQwLzGmdcTQhW9jHLFKYGiyOx9oNHmX4DbZaBdAiEAjCaeLavXgeb45bLoNcvTMH01Tcg4nDK373pPUsu3kdkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJhj5rirUpq6BBfBCrcA66Am5knsnUfPQEqDalT8xvrwn8t9bw8m%2By3WOMJTcnKQEST6%2BrgFtQCdr5SJqjV6iN0I3nlmnH8ngr%2F%2FTDLOtoD0ecryRYcd5wIdnSUKcSGYnwjyF8ztdnWsf8pjVJBLPvj80cVemWl75j%2B18EIh5mkzCImORATNhJear0taoPn45fExSBbZSj4COQjNkS8Bmzkw3eP5OF%2BPVtFwm5Bm5bA3DK7tt1%2FEugkdPaFj4NP%2BjQ9awxJrQpW7R4odZvFQKjNKO1DPGbDPYZO7l5BFx9vraAIP04bsvXrjEsj884e3Fit%2FEEM5CFD5GykXilk2lGBV%2BeFwf7PcrzBZ48LtyfoSN0C%2FBFhJiShcbZpobIscCVdlLS2ES96PVSDgsMK3cGmuiR1zajYKPo%2FuV6H13TTHaZmxOHcya6gxDo4jCHdxLJsHR8tlWrOYLfZ510%2B1zicohYBvF5HX9kQn20K2ZxF4yLA6boTSOfkqqAPSVRyRwH6H0mgyQ7BgGoAzR2I8xQoVLSW9jl1dQFskiOA0CuAiEiMj6sDy4wXmOV8Upca4umZ2swGOnY%2B48eXrn6oiVUrmfTZju4Bwyjm65%2BhPbaz2C%2BchJF5SlR3XOSet5SsKGOkrr4xfn8H24c2MLLV68EGOqUBN3PhUaWQGm9YF7%2BCdBa1vyAHNRjVkbtYexVlcDUSYvtY4outhRnKw8HdY2b0sNWUnalsgzbZWba3BEEZ5NnlyGgbrwhXizVmmPyWP3N1qNDQXQNBTH8imWWc5eWoApJT4Dpyq14Yf63sMfgvb89OR%2FIziu%2F69XfmzLM2I474s%2F%2BzcuhH%2BZbvKC%2BcCe0qdarmXn3kcuoPB63u63yJKXr8Tn4H5SQ7&X-Amz-Signature=e023d3c4f17b3ddfd7c743ec28b4c7b2521b3c75d7af8a48bfd761154d8bc29b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEC7RUF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhNi%2FIQwLzGmdcTQhW9jHLFKYGiyOx9oNHmX4DbZaBdAiEAjCaeLavXgeb45bLoNcvTMH01Tcg4nDK373pPUsu3kdkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJhj5rirUpq6BBfBCrcA66Am5knsnUfPQEqDalT8xvrwn8t9bw8m%2By3WOMJTcnKQEST6%2BrgFtQCdr5SJqjV6iN0I3nlmnH8ngr%2F%2FTDLOtoD0ecryRYcd5wIdnSUKcSGYnwjyF8ztdnWsf8pjVJBLPvj80cVemWl75j%2B18EIh5mkzCImORATNhJear0taoPn45fExSBbZSj4COQjNkS8Bmzkw3eP5OF%2BPVtFwm5Bm5bA3DK7tt1%2FEugkdPaFj4NP%2BjQ9awxJrQpW7R4odZvFQKjNKO1DPGbDPYZO7l5BFx9vraAIP04bsvXrjEsj884e3Fit%2FEEM5CFD5GykXilk2lGBV%2BeFwf7PcrzBZ48LtyfoSN0C%2FBFhJiShcbZpobIscCVdlLS2ES96PVSDgsMK3cGmuiR1zajYKPo%2FuV6H13TTHaZmxOHcya6gxDo4jCHdxLJsHR8tlWrOYLfZ510%2B1zicohYBvF5HX9kQn20K2ZxF4yLA6boTSOfkqqAPSVRyRwH6H0mgyQ7BgGoAzR2I8xQoVLSW9jl1dQFskiOA0CuAiEiMj6sDy4wXmOV8Upca4umZ2swGOnY%2B48eXrn6oiVUrmfTZju4Bwyjm65%2BhPbaz2C%2BchJF5SlR3XOSet5SsKGOkrr4xfn8H24c2MLLV68EGOqUBN3PhUaWQGm9YF7%2BCdBa1vyAHNRjVkbtYexVlcDUSYvtY4outhRnKw8HdY2b0sNWUnalsgzbZWba3BEEZ5NnlyGgbrwhXizVmmPyWP3N1qNDQXQNBTH8imWWc5eWoApJT4Dpyq14Yf63sMfgvb89OR%2FIziu%2F69XfmzLM2I474s%2F%2BzcuhH%2BZbvKC%2BcCe0qdarmXn3kcuoPB63u63yJKXr8Tn4H5SQ7&X-Amz-Signature=0011280d6638a4415ec12cbedc2d4b4c39d5a5228a21e6b69a7164b46f17a495&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEC7RUF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhNi%2FIQwLzGmdcTQhW9jHLFKYGiyOx9oNHmX4DbZaBdAiEAjCaeLavXgeb45bLoNcvTMH01Tcg4nDK373pPUsu3kdkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJhj5rirUpq6BBfBCrcA66Am5knsnUfPQEqDalT8xvrwn8t9bw8m%2By3WOMJTcnKQEST6%2BrgFtQCdr5SJqjV6iN0I3nlmnH8ngr%2F%2FTDLOtoD0ecryRYcd5wIdnSUKcSGYnwjyF8ztdnWsf8pjVJBLPvj80cVemWl75j%2B18EIh5mkzCImORATNhJear0taoPn45fExSBbZSj4COQjNkS8Bmzkw3eP5OF%2BPVtFwm5Bm5bA3DK7tt1%2FEugkdPaFj4NP%2BjQ9awxJrQpW7R4odZvFQKjNKO1DPGbDPYZO7l5BFx9vraAIP04bsvXrjEsj884e3Fit%2FEEM5CFD5GykXilk2lGBV%2BeFwf7PcrzBZ48LtyfoSN0C%2FBFhJiShcbZpobIscCVdlLS2ES96PVSDgsMK3cGmuiR1zajYKPo%2FuV6H13TTHaZmxOHcya6gxDo4jCHdxLJsHR8tlWrOYLfZ510%2B1zicohYBvF5HX9kQn20K2ZxF4yLA6boTSOfkqqAPSVRyRwH6H0mgyQ7BgGoAzR2I8xQoVLSW9jl1dQFskiOA0CuAiEiMj6sDy4wXmOV8Upca4umZ2swGOnY%2B48eXrn6oiVUrmfTZju4Bwyjm65%2BhPbaz2C%2BchJF5SlR3XOSet5SsKGOkrr4xfn8H24c2MLLV68EGOqUBN3PhUaWQGm9YF7%2BCdBa1vyAHNRjVkbtYexVlcDUSYvtY4outhRnKw8HdY2b0sNWUnalsgzbZWba3BEEZ5NnlyGgbrwhXizVmmPyWP3N1qNDQXQNBTH8imWWc5eWoApJT4Dpyq14Yf63sMfgvb89OR%2FIziu%2F69XfmzLM2I474s%2F%2BzcuhH%2BZbvKC%2BcCe0qdarmXn3kcuoPB63u63yJKXr8Tn4H5SQ7&X-Amz-Signature=dcd42b3043c88f85cf7e8df073f775396e6eb3080cd1bf3e74c929f5c9d544ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEC7RUF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhNi%2FIQwLzGmdcTQhW9jHLFKYGiyOx9oNHmX4DbZaBdAiEAjCaeLavXgeb45bLoNcvTMH01Tcg4nDK373pPUsu3kdkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJhj5rirUpq6BBfBCrcA66Am5knsnUfPQEqDalT8xvrwn8t9bw8m%2By3WOMJTcnKQEST6%2BrgFtQCdr5SJqjV6iN0I3nlmnH8ngr%2F%2FTDLOtoD0ecryRYcd5wIdnSUKcSGYnwjyF8ztdnWsf8pjVJBLPvj80cVemWl75j%2B18EIh5mkzCImORATNhJear0taoPn45fExSBbZSj4COQjNkS8Bmzkw3eP5OF%2BPVtFwm5Bm5bA3DK7tt1%2FEugkdPaFj4NP%2BjQ9awxJrQpW7R4odZvFQKjNKO1DPGbDPYZO7l5BFx9vraAIP04bsvXrjEsj884e3Fit%2FEEM5CFD5GykXilk2lGBV%2BeFwf7PcrzBZ48LtyfoSN0C%2FBFhJiShcbZpobIscCVdlLS2ES96PVSDgsMK3cGmuiR1zajYKPo%2FuV6H13TTHaZmxOHcya6gxDo4jCHdxLJsHR8tlWrOYLfZ510%2B1zicohYBvF5HX9kQn20K2ZxF4yLA6boTSOfkqqAPSVRyRwH6H0mgyQ7BgGoAzR2I8xQoVLSW9jl1dQFskiOA0CuAiEiMj6sDy4wXmOV8Upca4umZ2swGOnY%2B48eXrn6oiVUrmfTZju4Bwyjm65%2BhPbaz2C%2BchJF5SlR3XOSet5SsKGOkrr4xfn8H24c2MLLV68EGOqUBN3PhUaWQGm9YF7%2BCdBa1vyAHNRjVkbtYexVlcDUSYvtY4outhRnKw8HdY2b0sNWUnalsgzbZWba3BEEZ5NnlyGgbrwhXizVmmPyWP3N1qNDQXQNBTH8imWWc5eWoApJT4Dpyq14Yf63sMfgvb89OR%2FIziu%2F69XfmzLM2I474s%2F%2BzcuhH%2BZbvKC%2BcCe0qdarmXn3kcuoPB63u63yJKXr8Tn4H5SQ7&X-Amz-Signature=605a12f34f8023b6ce6eb609d29ae64ea88317d9ae9be0ed45bc076360c146e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEC7RUF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhNi%2FIQwLzGmdcTQhW9jHLFKYGiyOx9oNHmX4DbZaBdAiEAjCaeLavXgeb45bLoNcvTMH01Tcg4nDK373pPUsu3kdkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJhj5rirUpq6BBfBCrcA66Am5knsnUfPQEqDalT8xvrwn8t9bw8m%2By3WOMJTcnKQEST6%2BrgFtQCdr5SJqjV6iN0I3nlmnH8ngr%2F%2FTDLOtoD0ecryRYcd5wIdnSUKcSGYnwjyF8ztdnWsf8pjVJBLPvj80cVemWl75j%2B18EIh5mkzCImORATNhJear0taoPn45fExSBbZSj4COQjNkS8Bmzkw3eP5OF%2BPVtFwm5Bm5bA3DK7tt1%2FEugkdPaFj4NP%2BjQ9awxJrQpW7R4odZvFQKjNKO1DPGbDPYZO7l5BFx9vraAIP04bsvXrjEsj884e3Fit%2FEEM5CFD5GykXilk2lGBV%2BeFwf7PcrzBZ48LtyfoSN0C%2FBFhJiShcbZpobIscCVdlLS2ES96PVSDgsMK3cGmuiR1zajYKPo%2FuV6H13TTHaZmxOHcya6gxDo4jCHdxLJsHR8tlWrOYLfZ510%2B1zicohYBvF5HX9kQn20K2ZxF4yLA6boTSOfkqqAPSVRyRwH6H0mgyQ7BgGoAzR2I8xQoVLSW9jl1dQFskiOA0CuAiEiMj6sDy4wXmOV8Upca4umZ2swGOnY%2B48eXrn6oiVUrmfTZju4Bwyjm65%2BhPbaz2C%2BchJF5SlR3XOSet5SsKGOkrr4xfn8H24c2MLLV68EGOqUBN3PhUaWQGm9YF7%2BCdBa1vyAHNRjVkbtYexVlcDUSYvtY4outhRnKw8HdY2b0sNWUnalsgzbZWba3BEEZ5NnlyGgbrwhXizVmmPyWP3N1qNDQXQNBTH8imWWc5eWoApJT4Dpyq14Yf63sMfgvb89OR%2FIziu%2F69XfmzLM2I474s%2F%2BzcuhH%2BZbvKC%2BcCe0qdarmXn3kcuoPB63u63yJKXr8Tn4H5SQ7&X-Amz-Signature=45a563491d253a5692d3036d70f037404a83cd8c3bc66b2bb0c5755673878874&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEC7RUF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhNi%2FIQwLzGmdcTQhW9jHLFKYGiyOx9oNHmX4DbZaBdAiEAjCaeLavXgeb45bLoNcvTMH01Tcg4nDK373pPUsu3kdkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJhj5rirUpq6BBfBCrcA66Am5knsnUfPQEqDalT8xvrwn8t9bw8m%2By3WOMJTcnKQEST6%2BrgFtQCdr5SJqjV6iN0I3nlmnH8ngr%2F%2FTDLOtoD0ecryRYcd5wIdnSUKcSGYnwjyF8ztdnWsf8pjVJBLPvj80cVemWl75j%2B18EIh5mkzCImORATNhJear0taoPn45fExSBbZSj4COQjNkS8Bmzkw3eP5OF%2BPVtFwm5Bm5bA3DK7tt1%2FEugkdPaFj4NP%2BjQ9awxJrQpW7R4odZvFQKjNKO1DPGbDPYZO7l5BFx9vraAIP04bsvXrjEsj884e3Fit%2FEEM5CFD5GykXilk2lGBV%2BeFwf7PcrzBZ48LtyfoSN0C%2FBFhJiShcbZpobIscCVdlLS2ES96PVSDgsMK3cGmuiR1zajYKPo%2FuV6H13TTHaZmxOHcya6gxDo4jCHdxLJsHR8tlWrOYLfZ510%2B1zicohYBvF5HX9kQn20K2ZxF4yLA6boTSOfkqqAPSVRyRwH6H0mgyQ7BgGoAzR2I8xQoVLSW9jl1dQFskiOA0CuAiEiMj6sDy4wXmOV8Upca4umZ2swGOnY%2B48eXrn6oiVUrmfTZju4Bwyjm65%2BhPbaz2C%2BchJF5SlR3XOSet5SsKGOkrr4xfn8H24c2MLLV68EGOqUBN3PhUaWQGm9YF7%2BCdBa1vyAHNRjVkbtYexVlcDUSYvtY4outhRnKw8HdY2b0sNWUnalsgzbZWba3BEEZ5NnlyGgbrwhXizVmmPyWP3N1qNDQXQNBTH8imWWc5eWoApJT4Dpyq14Yf63sMfgvb89OR%2FIziu%2F69XfmzLM2I474s%2F%2BzcuhH%2BZbvKC%2BcCe0qdarmXn3kcuoPB63u63yJKXr8Tn4H5SQ7&X-Amz-Signature=edb4bd3d421159bdb990b907678ff86ef06ece44f5d136647445939f6f1f8e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

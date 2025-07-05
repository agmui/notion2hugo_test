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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DLKR24%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEbKdQNBz4PKGhPXiw1zlgvBiIyRJ3W54J4jneHee4E8AiEAnRUR4RtkOLpBX845CN%2Bbi3Lprcm7HKlo0zIotLVR9oMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJGSeskUOMyaVMKUfCrcA5Yu3rKroT3%2FTNHlRp70hOQ1YtorQS%2BeGXal3%2F07bg9a%2Fp0NWl%2BXADLFJkhLIMTR6rvlGPVfsSQb35JFWow1M6%2F6B3m4tRfLZYNKmNW1QZrSPiftRKL7ZIfovSUfWLCm%2BNbv66YwQxseE%2FkuoGf3CH25yzJsQx64X4SE2s%2B82KlrNvFNrPXlWbZnWtM647J%2B%2FGd7KOmzsgWDJbXqOTfWDiYWmLPH3iEdtazGOSoEQFrHFWuBcRWbmbSP0FH7xYmYOeAdf%2FC%2Fi9RkQUxDwKd3FVmIq27AtT3t%2F4MVN11O2Co1zj8hbdmzSr2XYnLBIaf7GNq8o%2B21cAyZk5g3e8YG4gHaZf3UyxbyGsBkr9dOx3rk4tkgchK%2BI759suBhG%2FdUWcJ5i7ds4q1%2FCsbZyDGqmBp7PfebwhnX5Xnc4SPMBGsjmpFfpADntte6QK%2F2qTwke7YuX9cAOY1vng2qlv4SD2XLi98%2Fu7YxG4Uggj4ts8TjqbLcujVXktfOAjBz%2FcVwGzk2cFN0UfQIMOlea21EffGRMwEhPBxTSyWAd%2Fd1qscZbhP42G%2FpMAATCgqX8CQ24mGZy7ayU%2Fvef1Ll2BxVcWVDcYMLaLmqRHbNR%2FyTeSxaujgAQbsV7PGl63x1MLSIosMGOqUBRpNtyjR9C9BVbbZQVbrEqULtEq3EtLEoGLhqZzAea4zGJCYjgZA54ypjtUz5nT85urv1R4t375e3Ed5vCroUIgi7d6Je%2Fv9NZIXepiCGr2MP%2BkkvfE0k5eEchk7eU0pdes7ugVSMNdw4JHlTC8xfxzqGC8EPuVeSQensIpwI86FohhcGu4qK0nR1rW%2BocE5d6K1F5UC3eTDZtlIfKBadbqmmRI4T&X-Amz-Signature=5cb36440d9dfe647395224287589f3d0359fb213db30781332ccb1c1db66822b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DLKR24%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEbKdQNBz4PKGhPXiw1zlgvBiIyRJ3W54J4jneHee4E8AiEAnRUR4RtkOLpBX845CN%2Bbi3Lprcm7HKlo0zIotLVR9oMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJGSeskUOMyaVMKUfCrcA5Yu3rKroT3%2FTNHlRp70hOQ1YtorQS%2BeGXal3%2F07bg9a%2Fp0NWl%2BXADLFJkhLIMTR6rvlGPVfsSQb35JFWow1M6%2F6B3m4tRfLZYNKmNW1QZrSPiftRKL7ZIfovSUfWLCm%2BNbv66YwQxseE%2FkuoGf3CH25yzJsQx64X4SE2s%2B82KlrNvFNrPXlWbZnWtM647J%2B%2FGd7KOmzsgWDJbXqOTfWDiYWmLPH3iEdtazGOSoEQFrHFWuBcRWbmbSP0FH7xYmYOeAdf%2FC%2Fi9RkQUxDwKd3FVmIq27AtT3t%2F4MVN11O2Co1zj8hbdmzSr2XYnLBIaf7GNq8o%2B21cAyZk5g3e8YG4gHaZf3UyxbyGsBkr9dOx3rk4tkgchK%2BI759suBhG%2FdUWcJ5i7ds4q1%2FCsbZyDGqmBp7PfebwhnX5Xnc4SPMBGsjmpFfpADntte6QK%2F2qTwke7YuX9cAOY1vng2qlv4SD2XLi98%2Fu7YxG4Uggj4ts8TjqbLcujVXktfOAjBz%2FcVwGzk2cFN0UfQIMOlea21EffGRMwEhPBxTSyWAd%2Fd1qscZbhP42G%2FpMAATCgqX8CQ24mGZy7ayU%2Fvef1Ll2BxVcWVDcYMLaLmqRHbNR%2FyTeSxaujgAQbsV7PGl63x1MLSIosMGOqUBRpNtyjR9C9BVbbZQVbrEqULtEq3EtLEoGLhqZzAea4zGJCYjgZA54ypjtUz5nT85urv1R4t375e3Ed5vCroUIgi7d6Je%2Fv9NZIXepiCGr2MP%2BkkvfE0k5eEchk7eU0pdes7ugVSMNdw4JHlTC8xfxzqGC8EPuVeSQensIpwI86FohhcGu4qK0nR1rW%2BocE5d6K1F5UC3eTDZtlIfKBadbqmmRI4T&X-Amz-Signature=8d82facf8fc755b4e69ce613304e9f9fa1a40de915efecbee7e2dee88ff87f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DLKR24%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEbKdQNBz4PKGhPXiw1zlgvBiIyRJ3W54J4jneHee4E8AiEAnRUR4RtkOLpBX845CN%2Bbi3Lprcm7HKlo0zIotLVR9oMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJGSeskUOMyaVMKUfCrcA5Yu3rKroT3%2FTNHlRp70hOQ1YtorQS%2BeGXal3%2F07bg9a%2Fp0NWl%2BXADLFJkhLIMTR6rvlGPVfsSQb35JFWow1M6%2F6B3m4tRfLZYNKmNW1QZrSPiftRKL7ZIfovSUfWLCm%2BNbv66YwQxseE%2FkuoGf3CH25yzJsQx64X4SE2s%2B82KlrNvFNrPXlWbZnWtM647J%2B%2FGd7KOmzsgWDJbXqOTfWDiYWmLPH3iEdtazGOSoEQFrHFWuBcRWbmbSP0FH7xYmYOeAdf%2FC%2Fi9RkQUxDwKd3FVmIq27AtT3t%2F4MVN11O2Co1zj8hbdmzSr2XYnLBIaf7GNq8o%2B21cAyZk5g3e8YG4gHaZf3UyxbyGsBkr9dOx3rk4tkgchK%2BI759suBhG%2FdUWcJ5i7ds4q1%2FCsbZyDGqmBp7PfebwhnX5Xnc4SPMBGsjmpFfpADntte6QK%2F2qTwke7YuX9cAOY1vng2qlv4SD2XLi98%2Fu7YxG4Uggj4ts8TjqbLcujVXktfOAjBz%2FcVwGzk2cFN0UfQIMOlea21EffGRMwEhPBxTSyWAd%2Fd1qscZbhP42G%2FpMAATCgqX8CQ24mGZy7ayU%2Fvef1Ll2BxVcWVDcYMLaLmqRHbNR%2FyTeSxaujgAQbsV7PGl63x1MLSIosMGOqUBRpNtyjR9C9BVbbZQVbrEqULtEq3EtLEoGLhqZzAea4zGJCYjgZA54ypjtUz5nT85urv1R4t375e3Ed5vCroUIgi7d6Je%2Fv9NZIXepiCGr2MP%2BkkvfE0k5eEchk7eU0pdes7ugVSMNdw4JHlTC8xfxzqGC8EPuVeSQensIpwI86FohhcGu4qK0nR1rW%2BocE5d6K1F5UC3eTDZtlIfKBadbqmmRI4T&X-Amz-Signature=f29e25f6dd245990c3a24bf97536fc4516b67f4dbfa88ec4ce39af15dda736c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DLKR24%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEbKdQNBz4PKGhPXiw1zlgvBiIyRJ3W54J4jneHee4E8AiEAnRUR4RtkOLpBX845CN%2Bbi3Lprcm7HKlo0zIotLVR9oMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJGSeskUOMyaVMKUfCrcA5Yu3rKroT3%2FTNHlRp70hOQ1YtorQS%2BeGXal3%2F07bg9a%2Fp0NWl%2BXADLFJkhLIMTR6rvlGPVfsSQb35JFWow1M6%2F6B3m4tRfLZYNKmNW1QZrSPiftRKL7ZIfovSUfWLCm%2BNbv66YwQxseE%2FkuoGf3CH25yzJsQx64X4SE2s%2B82KlrNvFNrPXlWbZnWtM647J%2B%2FGd7KOmzsgWDJbXqOTfWDiYWmLPH3iEdtazGOSoEQFrHFWuBcRWbmbSP0FH7xYmYOeAdf%2FC%2Fi9RkQUxDwKd3FVmIq27AtT3t%2F4MVN11O2Co1zj8hbdmzSr2XYnLBIaf7GNq8o%2B21cAyZk5g3e8YG4gHaZf3UyxbyGsBkr9dOx3rk4tkgchK%2BI759suBhG%2FdUWcJ5i7ds4q1%2FCsbZyDGqmBp7PfebwhnX5Xnc4SPMBGsjmpFfpADntte6QK%2F2qTwke7YuX9cAOY1vng2qlv4SD2XLi98%2Fu7YxG4Uggj4ts8TjqbLcujVXktfOAjBz%2FcVwGzk2cFN0UfQIMOlea21EffGRMwEhPBxTSyWAd%2Fd1qscZbhP42G%2FpMAATCgqX8CQ24mGZy7ayU%2Fvef1Ll2BxVcWVDcYMLaLmqRHbNR%2FyTeSxaujgAQbsV7PGl63x1MLSIosMGOqUBRpNtyjR9C9BVbbZQVbrEqULtEq3EtLEoGLhqZzAea4zGJCYjgZA54ypjtUz5nT85urv1R4t375e3Ed5vCroUIgi7d6Je%2Fv9NZIXepiCGr2MP%2BkkvfE0k5eEchk7eU0pdes7ugVSMNdw4JHlTC8xfxzqGC8EPuVeSQensIpwI86FohhcGu4qK0nR1rW%2BocE5d6K1F5UC3eTDZtlIfKBadbqmmRI4T&X-Amz-Signature=b45d5db202c8847c3bd787f5b68148e3e67e6160ed64cbed473e7703a5a74d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DLKR24%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEbKdQNBz4PKGhPXiw1zlgvBiIyRJ3W54J4jneHee4E8AiEAnRUR4RtkOLpBX845CN%2Bbi3Lprcm7HKlo0zIotLVR9oMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJGSeskUOMyaVMKUfCrcA5Yu3rKroT3%2FTNHlRp70hOQ1YtorQS%2BeGXal3%2F07bg9a%2Fp0NWl%2BXADLFJkhLIMTR6rvlGPVfsSQb35JFWow1M6%2F6B3m4tRfLZYNKmNW1QZrSPiftRKL7ZIfovSUfWLCm%2BNbv66YwQxseE%2FkuoGf3CH25yzJsQx64X4SE2s%2B82KlrNvFNrPXlWbZnWtM647J%2B%2FGd7KOmzsgWDJbXqOTfWDiYWmLPH3iEdtazGOSoEQFrHFWuBcRWbmbSP0FH7xYmYOeAdf%2FC%2Fi9RkQUxDwKd3FVmIq27AtT3t%2F4MVN11O2Co1zj8hbdmzSr2XYnLBIaf7GNq8o%2B21cAyZk5g3e8YG4gHaZf3UyxbyGsBkr9dOx3rk4tkgchK%2BI759suBhG%2FdUWcJ5i7ds4q1%2FCsbZyDGqmBp7PfebwhnX5Xnc4SPMBGsjmpFfpADntte6QK%2F2qTwke7YuX9cAOY1vng2qlv4SD2XLi98%2Fu7YxG4Uggj4ts8TjqbLcujVXktfOAjBz%2FcVwGzk2cFN0UfQIMOlea21EffGRMwEhPBxTSyWAd%2Fd1qscZbhP42G%2FpMAATCgqX8CQ24mGZy7ayU%2Fvef1Ll2BxVcWVDcYMLaLmqRHbNR%2FyTeSxaujgAQbsV7PGl63x1MLSIosMGOqUBRpNtyjR9C9BVbbZQVbrEqULtEq3EtLEoGLhqZzAea4zGJCYjgZA54ypjtUz5nT85urv1R4t375e3Ed5vCroUIgi7d6Je%2Fv9NZIXepiCGr2MP%2BkkvfE0k5eEchk7eU0pdes7ugVSMNdw4JHlTC8xfxzqGC8EPuVeSQensIpwI86FohhcGu4qK0nR1rW%2BocE5d6K1F5UC3eTDZtlIfKBadbqmmRI4T&X-Amz-Signature=d6f87fdc68d6723938e7212fd424fadbf2230b5b1069055365076872dcd7eb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DLKR24%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEbKdQNBz4PKGhPXiw1zlgvBiIyRJ3W54J4jneHee4E8AiEAnRUR4RtkOLpBX845CN%2Bbi3Lprcm7HKlo0zIotLVR9oMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJGSeskUOMyaVMKUfCrcA5Yu3rKroT3%2FTNHlRp70hOQ1YtorQS%2BeGXal3%2F07bg9a%2Fp0NWl%2BXADLFJkhLIMTR6rvlGPVfsSQb35JFWow1M6%2F6B3m4tRfLZYNKmNW1QZrSPiftRKL7ZIfovSUfWLCm%2BNbv66YwQxseE%2FkuoGf3CH25yzJsQx64X4SE2s%2B82KlrNvFNrPXlWbZnWtM647J%2B%2FGd7KOmzsgWDJbXqOTfWDiYWmLPH3iEdtazGOSoEQFrHFWuBcRWbmbSP0FH7xYmYOeAdf%2FC%2Fi9RkQUxDwKd3FVmIq27AtT3t%2F4MVN11O2Co1zj8hbdmzSr2XYnLBIaf7GNq8o%2B21cAyZk5g3e8YG4gHaZf3UyxbyGsBkr9dOx3rk4tkgchK%2BI759suBhG%2FdUWcJ5i7ds4q1%2FCsbZyDGqmBp7PfebwhnX5Xnc4SPMBGsjmpFfpADntte6QK%2F2qTwke7YuX9cAOY1vng2qlv4SD2XLi98%2Fu7YxG4Uggj4ts8TjqbLcujVXktfOAjBz%2FcVwGzk2cFN0UfQIMOlea21EffGRMwEhPBxTSyWAd%2Fd1qscZbhP42G%2FpMAATCgqX8CQ24mGZy7ayU%2Fvef1Ll2BxVcWVDcYMLaLmqRHbNR%2FyTeSxaujgAQbsV7PGl63x1MLSIosMGOqUBRpNtyjR9C9BVbbZQVbrEqULtEq3EtLEoGLhqZzAea4zGJCYjgZA54ypjtUz5nT85urv1R4t375e3Ed5vCroUIgi7d6Je%2Fv9NZIXepiCGr2MP%2BkkvfE0k5eEchk7eU0pdes7ugVSMNdw4JHlTC8xfxzqGC8EPuVeSQensIpwI86FohhcGu4qK0nR1rW%2BocE5d6K1F5UC3eTDZtlIfKBadbqmmRI4T&X-Amz-Signature=c0763c98f51070ac07da5866a687e06050c73d891d68dd73cb5ece5cf6588d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DLKR24%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEbKdQNBz4PKGhPXiw1zlgvBiIyRJ3W54J4jneHee4E8AiEAnRUR4RtkOLpBX845CN%2Bbi3Lprcm7HKlo0zIotLVR9oMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJGSeskUOMyaVMKUfCrcA5Yu3rKroT3%2FTNHlRp70hOQ1YtorQS%2BeGXal3%2F07bg9a%2Fp0NWl%2BXADLFJkhLIMTR6rvlGPVfsSQb35JFWow1M6%2F6B3m4tRfLZYNKmNW1QZrSPiftRKL7ZIfovSUfWLCm%2BNbv66YwQxseE%2FkuoGf3CH25yzJsQx64X4SE2s%2B82KlrNvFNrPXlWbZnWtM647J%2B%2FGd7KOmzsgWDJbXqOTfWDiYWmLPH3iEdtazGOSoEQFrHFWuBcRWbmbSP0FH7xYmYOeAdf%2FC%2Fi9RkQUxDwKd3FVmIq27AtT3t%2F4MVN11O2Co1zj8hbdmzSr2XYnLBIaf7GNq8o%2B21cAyZk5g3e8YG4gHaZf3UyxbyGsBkr9dOx3rk4tkgchK%2BI759suBhG%2FdUWcJ5i7ds4q1%2FCsbZyDGqmBp7PfebwhnX5Xnc4SPMBGsjmpFfpADntte6QK%2F2qTwke7YuX9cAOY1vng2qlv4SD2XLi98%2Fu7YxG4Uggj4ts8TjqbLcujVXktfOAjBz%2FcVwGzk2cFN0UfQIMOlea21EffGRMwEhPBxTSyWAd%2Fd1qscZbhP42G%2FpMAATCgqX8CQ24mGZy7ayU%2Fvef1Ll2BxVcWVDcYMLaLmqRHbNR%2FyTeSxaujgAQbsV7PGl63x1MLSIosMGOqUBRpNtyjR9C9BVbbZQVbrEqULtEq3EtLEoGLhqZzAea4zGJCYjgZA54ypjtUz5nT85urv1R4t375e3Ed5vCroUIgi7d6Je%2Fv9NZIXepiCGr2MP%2BkkvfE0k5eEchk7eU0pdes7ugVSMNdw4JHlTC8xfxzqGC8EPuVeSQensIpwI86FohhcGu4qK0nR1rW%2BocE5d6K1F5UC3eTDZtlIfKBadbqmmRI4T&X-Amz-Signature=fcb5f266d5b0f92fc3d3933e3d181ae958ac796113f489476964a58232268036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DLKR24%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEbKdQNBz4PKGhPXiw1zlgvBiIyRJ3W54J4jneHee4E8AiEAnRUR4RtkOLpBX845CN%2Bbi3Lprcm7HKlo0zIotLVR9oMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJGSeskUOMyaVMKUfCrcA5Yu3rKroT3%2FTNHlRp70hOQ1YtorQS%2BeGXal3%2F07bg9a%2Fp0NWl%2BXADLFJkhLIMTR6rvlGPVfsSQb35JFWow1M6%2F6B3m4tRfLZYNKmNW1QZrSPiftRKL7ZIfovSUfWLCm%2BNbv66YwQxseE%2FkuoGf3CH25yzJsQx64X4SE2s%2B82KlrNvFNrPXlWbZnWtM647J%2B%2FGd7KOmzsgWDJbXqOTfWDiYWmLPH3iEdtazGOSoEQFrHFWuBcRWbmbSP0FH7xYmYOeAdf%2FC%2Fi9RkQUxDwKd3FVmIq27AtT3t%2F4MVN11O2Co1zj8hbdmzSr2XYnLBIaf7GNq8o%2B21cAyZk5g3e8YG4gHaZf3UyxbyGsBkr9dOx3rk4tkgchK%2BI759suBhG%2FdUWcJ5i7ds4q1%2FCsbZyDGqmBp7PfebwhnX5Xnc4SPMBGsjmpFfpADntte6QK%2F2qTwke7YuX9cAOY1vng2qlv4SD2XLi98%2Fu7YxG4Uggj4ts8TjqbLcujVXktfOAjBz%2FcVwGzk2cFN0UfQIMOlea21EffGRMwEhPBxTSyWAd%2Fd1qscZbhP42G%2FpMAATCgqX8CQ24mGZy7ayU%2Fvef1Ll2BxVcWVDcYMLaLmqRHbNR%2FyTeSxaujgAQbsV7PGl63x1MLSIosMGOqUBRpNtyjR9C9BVbbZQVbrEqULtEq3EtLEoGLhqZzAea4zGJCYjgZA54ypjtUz5nT85urv1R4t375e3Ed5vCroUIgi7d6Je%2Fv9NZIXepiCGr2MP%2BkkvfE0k5eEchk7eU0pdes7ugVSMNdw4JHlTC8xfxzqGC8EPuVeSQensIpwI86FohhcGu4qK0nR1rW%2BocE5d6K1F5UC3eTDZtlIfKBadbqmmRI4T&X-Amz-Signature=845c691a0771accf2b2aec68b464c7012fabc27022e8211a104bf9a38370f804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

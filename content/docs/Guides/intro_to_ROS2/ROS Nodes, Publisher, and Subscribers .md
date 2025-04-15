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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUIRG7S%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfQrbOrmRyU4ZnILJJG3JuEjZJMycUTnreUqdp%2B7z4NAiEAjxjU0s55sA6SM%2F05717WN%2BwOLeya8cLXZ0IvUyOfWywq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0t%2BrRZNylVhzAhsSrcA0UwoAbiZAj61iGuftEvc5DVSGlkE803TcIdVbnJ7ghWQi5vX4dzIHaP6%2FArELH%2B%2F2ruY3siu92JhC%2Bn1XUpMWHoHVMbRoZ73HJ2xKmIfJag9I4Urk8nc1W%2Bh0gnlkuDp220kykgqGS6QWebKganzUzimcGebVGfWrriOMHQH6myc1FMgaHrBUzpQXSac2%2FhHhK0Rw8OfWk32pY4g5pbsUUwPa5apM4IRwgmq%2Babszy2wECPdz%2FR9t30FFwaIz0lBsSE85BVBBfqxy0%2F5XlgNvOg9GpuUXFY5ssjSLC48fsecttdNK3XN299%2Bv3RBJIaaEXUp%2BiNHgp9Q9vaDUZwm9zWu589%2Ba59t%2FT5BHWFm7wJRJEJ5oT2FQO8Pq2KAHTNlUmb4%2BYOLgnLNINRgQdqVZL8acAOWz%2FqhozywKyoFWDREXHS9VB1BDpSBeBHpz1VdvBMjuQQn8I6CP1rXzKSWu3qf%2BLwJdjXvnLpW2to2UXCfBkDaltGtq7WcIMDE4NsuA3xgaUtDAbSMtqOU3%2FUViyB41iPAEDLyysXFszePdUZai%2BvsauzuyTxZj5Lzeutgr0Lxcmxhwl9gndQyZc2%2BJeAqc1inIbpgSmEK8Un8tard5h19wTzZIN4t3ZoMPfV%2Br8GOqUB0zDyX75c1xFByrb3FXDgWkzbziDfgpiOo%2Fex1lR2d4KCuoCMTB%2BpXgSK1vWy4IEjAIydesBwrepC0N8OQ5S4cQMFbU0XS4t%2BK3XHOwsPW%2FjBO7rLzuBK1PUJgbEPNijarjMf0OnPB8n2dwff41dEcKt8Lik0GJfkgkf%2BuclRkavPPwJZ9U%2B013XiD2s2a%2F9wn46MuUA6MGxsrh2RQ6FVuWJ7bFxh&X-Amz-Signature=75b227ba63cce80d889fe86d79e56afb0c5f54f3616a133f8542713861f75cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUIRG7S%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfQrbOrmRyU4ZnILJJG3JuEjZJMycUTnreUqdp%2B7z4NAiEAjxjU0s55sA6SM%2F05717WN%2BwOLeya8cLXZ0IvUyOfWywq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0t%2BrRZNylVhzAhsSrcA0UwoAbiZAj61iGuftEvc5DVSGlkE803TcIdVbnJ7ghWQi5vX4dzIHaP6%2FArELH%2B%2F2ruY3siu92JhC%2Bn1XUpMWHoHVMbRoZ73HJ2xKmIfJag9I4Urk8nc1W%2Bh0gnlkuDp220kykgqGS6QWebKganzUzimcGebVGfWrriOMHQH6myc1FMgaHrBUzpQXSac2%2FhHhK0Rw8OfWk32pY4g5pbsUUwPa5apM4IRwgmq%2Babszy2wECPdz%2FR9t30FFwaIz0lBsSE85BVBBfqxy0%2F5XlgNvOg9GpuUXFY5ssjSLC48fsecttdNK3XN299%2Bv3RBJIaaEXUp%2BiNHgp9Q9vaDUZwm9zWu589%2Ba59t%2FT5BHWFm7wJRJEJ5oT2FQO8Pq2KAHTNlUmb4%2BYOLgnLNINRgQdqVZL8acAOWz%2FqhozywKyoFWDREXHS9VB1BDpSBeBHpz1VdvBMjuQQn8I6CP1rXzKSWu3qf%2BLwJdjXvnLpW2to2UXCfBkDaltGtq7WcIMDE4NsuA3xgaUtDAbSMtqOU3%2FUViyB41iPAEDLyysXFszePdUZai%2BvsauzuyTxZj5Lzeutgr0Lxcmxhwl9gndQyZc2%2BJeAqc1inIbpgSmEK8Un8tard5h19wTzZIN4t3ZoMPfV%2Br8GOqUB0zDyX75c1xFByrb3FXDgWkzbziDfgpiOo%2Fex1lR2d4KCuoCMTB%2BpXgSK1vWy4IEjAIydesBwrepC0N8OQ5S4cQMFbU0XS4t%2BK3XHOwsPW%2FjBO7rLzuBK1PUJgbEPNijarjMf0OnPB8n2dwff41dEcKt8Lik0GJfkgkf%2BuclRkavPPwJZ9U%2B013XiD2s2a%2F9wn46MuUA6MGxsrh2RQ6FVuWJ7bFxh&X-Amz-Signature=97fa37dd382fb6de52fa2bc0c9117a0caf94407758201736db360e86e894e165&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUIRG7S%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfQrbOrmRyU4ZnILJJG3JuEjZJMycUTnreUqdp%2B7z4NAiEAjxjU0s55sA6SM%2F05717WN%2BwOLeya8cLXZ0IvUyOfWywq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0t%2BrRZNylVhzAhsSrcA0UwoAbiZAj61iGuftEvc5DVSGlkE803TcIdVbnJ7ghWQi5vX4dzIHaP6%2FArELH%2B%2F2ruY3siu92JhC%2Bn1XUpMWHoHVMbRoZ73HJ2xKmIfJag9I4Urk8nc1W%2Bh0gnlkuDp220kykgqGS6QWebKganzUzimcGebVGfWrriOMHQH6myc1FMgaHrBUzpQXSac2%2FhHhK0Rw8OfWk32pY4g5pbsUUwPa5apM4IRwgmq%2Babszy2wECPdz%2FR9t30FFwaIz0lBsSE85BVBBfqxy0%2F5XlgNvOg9GpuUXFY5ssjSLC48fsecttdNK3XN299%2Bv3RBJIaaEXUp%2BiNHgp9Q9vaDUZwm9zWu589%2Ba59t%2FT5BHWFm7wJRJEJ5oT2FQO8Pq2KAHTNlUmb4%2BYOLgnLNINRgQdqVZL8acAOWz%2FqhozywKyoFWDREXHS9VB1BDpSBeBHpz1VdvBMjuQQn8I6CP1rXzKSWu3qf%2BLwJdjXvnLpW2to2UXCfBkDaltGtq7WcIMDE4NsuA3xgaUtDAbSMtqOU3%2FUViyB41iPAEDLyysXFszePdUZai%2BvsauzuyTxZj5Lzeutgr0Lxcmxhwl9gndQyZc2%2BJeAqc1inIbpgSmEK8Un8tard5h19wTzZIN4t3ZoMPfV%2Br8GOqUB0zDyX75c1xFByrb3FXDgWkzbziDfgpiOo%2Fex1lR2d4KCuoCMTB%2BpXgSK1vWy4IEjAIydesBwrepC0N8OQ5S4cQMFbU0XS4t%2BK3XHOwsPW%2FjBO7rLzuBK1PUJgbEPNijarjMf0OnPB8n2dwff41dEcKt8Lik0GJfkgkf%2BuclRkavPPwJZ9U%2B013XiD2s2a%2F9wn46MuUA6MGxsrh2RQ6FVuWJ7bFxh&X-Amz-Signature=0dde8facceebae938ca90b812d39e7961ebef1d21ca993f75f66b8ad5eebd8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUIRG7S%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfQrbOrmRyU4ZnILJJG3JuEjZJMycUTnreUqdp%2B7z4NAiEAjxjU0s55sA6SM%2F05717WN%2BwOLeya8cLXZ0IvUyOfWywq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0t%2BrRZNylVhzAhsSrcA0UwoAbiZAj61iGuftEvc5DVSGlkE803TcIdVbnJ7ghWQi5vX4dzIHaP6%2FArELH%2B%2F2ruY3siu92JhC%2Bn1XUpMWHoHVMbRoZ73HJ2xKmIfJag9I4Urk8nc1W%2Bh0gnlkuDp220kykgqGS6QWebKganzUzimcGebVGfWrriOMHQH6myc1FMgaHrBUzpQXSac2%2FhHhK0Rw8OfWk32pY4g5pbsUUwPa5apM4IRwgmq%2Babszy2wECPdz%2FR9t30FFwaIz0lBsSE85BVBBfqxy0%2F5XlgNvOg9GpuUXFY5ssjSLC48fsecttdNK3XN299%2Bv3RBJIaaEXUp%2BiNHgp9Q9vaDUZwm9zWu589%2Ba59t%2FT5BHWFm7wJRJEJ5oT2FQO8Pq2KAHTNlUmb4%2BYOLgnLNINRgQdqVZL8acAOWz%2FqhozywKyoFWDREXHS9VB1BDpSBeBHpz1VdvBMjuQQn8I6CP1rXzKSWu3qf%2BLwJdjXvnLpW2to2UXCfBkDaltGtq7WcIMDE4NsuA3xgaUtDAbSMtqOU3%2FUViyB41iPAEDLyysXFszePdUZai%2BvsauzuyTxZj5Lzeutgr0Lxcmxhwl9gndQyZc2%2BJeAqc1inIbpgSmEK8Un8tard5h19wTzZIN4t3ZoMPfV%2Br8GOqUB0zDyX75c1xFByrb3FXDgWkzbziDfgpiOo%2Fex1lR2d4KCuoCMTB%2BpXgSK1vWy4IEjAIydesBwrepC0N8OQ5S4cQMFbU0XS4t%2BK3XHOwsPW%2FjBO7rLzuBK1PUJgbEPNijarjMf0OnPB8n2dwff41dEcKt8Lik0GJfkgkf%2BuclRkavPPwJZ9U%2B013XiD2s2a%2F9wn46MuUA6MGxsrh2RQ6FVuWJ7bFxh&X-Amz-Signature=ed5081ad6076052d67755137a23c5efaa4cd70b3b3f100034f3a83437f539d20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUIRG7S%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfQrbOrmRyU4ZnILJJG3JuEjZJMycUTnreUqdp%2B7z4NAiEAjxjU0s55sA6SM%2F05717WN%2BwOLeya8cLXZ0IvUyOfWywq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0t%2BrRZNylVhzAhsSrcA0UwoAbiZAj61iGuftEvc5DVSGlkE803TcIdVbnJ7ghWQi5vX4dzIHaP6%2FArELH%2B%2F2ruY3siu92JhC%2Bn1XUpMWHoHVMbRoZ73HJ2xKmIfJag9I4Urk8nc1W%2Bh0gnlkuDp220kykgqGS6QWebKganzUzimcGebVGfWrriOMHQH6myc1FMgaHrBUzpQXSac2%2FhHhK0Rw8OfWk32pY4g5pbsUUwPa5apM4IRwgmq%2Babszy2wECPdz%2FR9t30FFwaIz0lBsSE85BVBBfqxy0%2F5XlgNvOg9GpuUXFY5ssjSLC48fsecttdNK3XN299%2Bv3RBJIaaEXUp%2BiNHgp9Q9vaDUZwm9zWu589%2Ba59t%2FT5BHWFm7wJRJEJ5oT2FQO8Pq2KAHTNlUmb4%2BYOLgnLNINRgQdqVZL8acAOWz%2FqhozywKyoFWDREXHS9VB1BDpSBeBHpz1VdvBMjuQQn8I6CP1rXzKSWu3qf%2BLwJdjXvnLpW2to2UXCfBkDaltGtq7WcIMDE4NsuA3xgaUtDAbSMtqOU3%2FUViyB41iPAEDLyysXFszePdUZai%2BvsauzuyTxZj5Lzeutgr0Lxcmxhwl9gndQyZc2%2BJeAqc1inIbpgSmEK8Un8tard5h19wTzZIN4t3ZoMPfV%2Br8GOqUB0zDyX75c1xFByrb3FXDgWkzbziDfgpiOo%2Fex1lR2d4KCuoCMTB%2BpXgSK1vWy4IEjAIydesBwrepC0N8OQ5S4cQMFbU0XS4t%2BK3XHOwsPW%2FjBO7rLzuBK1PUJgbEPNijarjMf0OnPB8n2dwff41dEcKt8Lik0GJfkgkf%2BuclRkavPPwJZ9U%2B013XiD2s2a%2F9wn46MuUA6MGxsrh2RQ6FVuWJ7bFxh&X-Amz-Signature=6eba6539a66870b4817ba3e620d54af33e01394fa560d544fc09379ab918b426&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUIRG7S%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfQrbOrmRyU4ZnILJJG3JuEjZJMycUTnreUqdp%2B7z4NAiEAjxjU0s55sA6SM%2F05717WN%2BwOLeya8cLXZ0IvUyOfWywq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0t%2BrRZNylVhzAhsSrcA0UwoAbiZAj61iGuftEvc5DVSGlkE803TcIdVbnJ7ghWQi5vX4dzIHaP6%2FArELH%2B%2F2ruY3siu92JhC%2Bn1XUpMWHoHVMbRoZ73HJ2xKmIfJag9I4Urk8nc1W%2Bh0gnlkuDp220kykgqGS6QWebKganzUzimcGebVGfWrriOMHQH6myc1FMgaHrBUzpQXSac2%2FhHhK0Rw8OfWk32pY4g5pbsUUwPa5apM4IRwgmq%2Babszy2wECPdz%2FR9t30FFwaIz0lBsSE85BVBBfqxy0%2F5XlgNvOg9GpuUXFY5ssjSLC48fsecttdNK3XN299%2Bv3RBJIaaEXUp%2BiNHgp9Q9vaDUZwm9zWu589%2Ba59t%2FT5BHWFm7wJRJEJ5oT2FQO8Pq2KAHTNlUmb4%2BYOLgnLNINRgQdqVZL8acAOWz%2FqhozywKyoFWDREXHS9VB1BDpSBeBHpz1VdvBMjuQQn8I6CP1rXzKSWu3qf%2BLwJdjXvnLpW2to2UXCfBkDaltGtq7WcIMDE4NsuA3xgaUtDAbSMtqOU3%2FUViyB41iPAEDLyysXFszePdUZai%2BvsauzuyTxZj5Lzeutgr0Lxcmxhwl9gndQyZc2%2BJeAqc1inIbpgSmEK8Un8tard5h19wTzZIN4t3ZoMPfV%2Br8GOqUB0zDyX75c1xFByrb3FXDgWkzbziDfgpiOo%2Fex1lR2d4KCuoCMTB%2BpXgSK1vWy4IEjAIydesBwrepC0N8OQ5S4cQMFbU0XS4t%2BK3XHOwsPW%2FjBO7rLzuBK1PUJgbEPNijarjMf0OnPB8n2dwff41dEcKt8Lik0GJfkgkf%2BuclRkavPPwJZ9U%2B013XiD2s2a%2F9wn46MuUA6MGxsrh2RQ6FVuWJ7bFxh&X-Amz-Signature=f460ee51c636b1130823f6858627f40df84a1fe241edfd8b4d2b97a4e69fe923&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUIRG7S%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfQrbOrmRyU4ZnILJJG3JuEjZJMycUTnreUqdp%2B7z4NAiEAjxjU0s55sA6SM%2F05717WN%2BwOLeya8cLXZ0IvUyOfWywq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0t%2BrRZNylVhzAhsSrcA0UwoAbiZAj61iGuftEvc5DVSGlkE803TcIdVbnJ7ghWQi5vX4dzIHaP6%2FArELH%2B%2F2ruY3siu92JhC%2Bn1XUpMWHoHVMbRoZ73HJ2xKmIfJag9I4Urk8nc1W%2Bh0gnlkuDp220kykgqGS6QWebKganzUzimcGebVGfWrriOMHQH6myc1FMgaHrBUzpQXSac2%2FhHhK0Rw8OfWk32pY4g5pbsUUwPa5apM4IRwgmq%2Babszy2wECPdz%2FR9t30FFwaIz0lBsSE85BVBBfqxy0%2F5XlgNvOg9GpuUXFY5ssjSLC48fsecttdNK3XN299%2Bv3RBJIaaEXUp%2BiNHgp9Q9vaDUZwm9zWu589%2Ba59t%2FT5BHWFm7wJRJEJ5oT2FQO8Pq2KAHTNlUmb4%2BYOLgnLNINRgQdqVZL8acAOWz%2FqhozywKyoFWDREXHS9VB1BDpSBeBHpz1VdvBMjuQQn8I6CP1rXzKSWu3qf%2BLwJdjXvnLpW2to2UXCfBkDaltGtq7WcIMDE4NsuA3xgaUtDAbSMtqOU3%2FUViyB41iPAEDLyysXFszePdUZai%2BvsauzuyTxZj5Lzeutgr0Lxcmxhwl9gndQyZc2%2BJeAqc1inIbpgSmEK8Un8tard5h19wTzZIN4t3ZoMPfV%2Br8GOqUB0zDyX75c1xFByrb3FXDgWkzbziDfgpiOo%2Fex1lR2d4KCuoCMTB%2BpXgSK1vWy4IEjAIydesBwrepC0N8OQ5S4cQMFbU0XS4t%2BK3XHOwsPW%2FjBO7rLzuBK1PUJgbEPNijarjMf0OnPB8n2dwff41dEcKt8Lik0GJfkgkf%2BuclRkavPPwJZ9U%2B013XiD2s2a%2F9wn46MuUA6MGxsrh2RQ6FVuWJ7bFxh&X-Amz-Signature=8a13811210e3c4d326673f12fa4cf872cef01f115777e454a0341aa78f80690a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUIRG7S%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfQrbOrmRyU4ZnILJJG3JuEjZJMycUTnreUqdp%2B7z4NAiEAjxjU0s55sA6SM%2F05717WN%2BwOLeya8cLXZ0IvUyOfWywq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0t%2BrRZNylVhzAhsSrcA0UwoAbiZAj61iGuftEvc5DVSGlkE803TcIdVbnJ7ghWQi5vX4dzIHaP6%2FArELH%2B%2F2ruY3siu92JhC%2Bn1XUpMWHoHVMbRoZ73HJ2xKmIfJag9I4Urk8nc1W%2Bh0gnlkuDp220kykgqGS6QWebKganzUzimcGebVGfWrriOMHQH6myc1FMgaHrBUzpQXSac2%2FhHhK0Rw8OfWk32pY4g5pbsUUwPa5apM4IRwgmq%2Babszy2wECPdz%2FR9t30FFwaIz0lBsSE85BVBBfqxy0%2F5XlgNvOg9GpuUXFY5ssjSLC48fsecttdNK3XN299%2Bv3RBJIaaEXUp%2BiNHgp9Q9vaDUZwm9zWu589%2Ba59t%2FT5BHWFm7wJRJEJ5oT2FQO8Pq2KAHTNlUmb4%2BYOLgnLNINRgQdqVZL8acAOWz%2FqhozywKyoFWDREXHS9VB1BDpSBeBHpz1VdvBMjuQQn8I6CP1rXzKSWu3qf%2BLwJdjXvnLpW2to2UXCfBkDaltGtq7WcIMDE4NsuA3xgaUtDAbSMtqOU3%2FUViyB41iPAEDLyysXFszePdUZai%2BvsauzuyTxZj5Lzeutgr0Lxcmxhwl9gndQyZc2%2BJeAqc1inIbpgSmEK8Un8tard5h19wTzZIN4t3ZoMPfV%2Br8GOqUB0zDyX75c1xFByrb3FXDgWkzbziDfgpiOo%2Fex1lR2d4KCuoCMTB%2BpXgSK1vWy4IEjAIydesBwrepC0N8OQ5S4cQMFbU0XS4t%2BK3XHOwsPW%2FjBO7rLzuBK1PUJgbEPNijarjMf0OnPB8n2dwff41dEcKt8Lik0GJfkgkf%2BuclRkavPPwJZ9U%2B013XiD2s2a%2F9wn46MuUA6MGxsrh2RQ6FVuWJ7bFxh&X-Amz-Signature=28e9ed6bf67d6b11b4d35bc98110b2e849713eabd9607de2327392559f565423&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

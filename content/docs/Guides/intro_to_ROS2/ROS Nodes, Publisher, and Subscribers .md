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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ7OQDK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBw1JAYGgjwSlsxuaCxIA8FPKlPfC8J3AUXnXOP12GfbAiEAuMPV9Ip7UAIsorbbMtqGns2k2ml%2Bajf4ev%2BSUQ0DMcUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDjkaWMq4%2BPAoI5dcircAxPVEMqrZl7AO1k2I02fg%2FmQBz9FC%2BZ%2FV6I4GaXQS7jhxTt547xUjTEZAHYmQy91Sm%2BL21Sz2vlPO8ARQkIwEu9tIGPKyJyzNW7aLskEqPCBuIzYnNYAErdO8pz9HXc0fnL0QJbliAsvGgECUP9RPT0xDyPlWA5VssF602cZeRZIy6gIv5zMrvg27PU%2Fq6zfIDD%2BagXQVyXqG8kUhrpFcwDQLxGbJNtaXny99QRo4doiFjAOXEpjxp8F8B88UFtxB1kq50Iw4hOs5GH%2Bous66Rl91phSBS%2FqDR6s5rNgjivMGio4c%2FcmDT25ipHvu2KqfAhDbIp%2FRbJoVEOVoYzvVD35uORA89thdxyuILIweKB7k3ykmGCVMWyHINYrAVZEGb7W19u2KRjY7JWfT8YF1GgtQrviCx6dwtiuaVqWBrKMFClM2CuccGV62EoEuiZ0RoGqbZx05KS%2BT57lyzZ1LTykEJPfXRvS8W6f%2BhGBGoq6DVTlx26Dufjx3prQoFjz3F6Symd1sxz%2FQahdEWTrT4BoZS6%2BhiKxMJI2NEotRqjp2BgEgWX8rrqiUBoic9elIx5VmegoJEkihkseL%2Bg4xMP4rkK6OjF5lQtF%2FXjTRVFvOPaFK4SITMFKR%2BGtMMzpu70GOqUBmM398D9pykGhQIsZu8BEPFfnge7DXlbUPdclfH6tO5KvXNR4a736n7mVt%2FsqZgiUhn7lbm05Pv5VkmBq2AP9JaM%2BNp3UnIjBNRxYheJek9d6Oa3%2B8Yl7g3qVdZk2otqiehD66QhJMxWdSHnz%2FhCJcg6lIfoiYDLPYYd4tHk89hqX1ZdzsDbyWs99rPOWqM3%2FKPqbeQeD83g6HMvYSoaaNPPma3Ir&X-Amz-Signature=f78d70d7ec81626657521d389f7d843ff3ed97cf1da06edf6acd15ade7ece1b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ7OQDK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBw1JAYGgjwSlsxuaCxIA8FPKlPfC8J3AUXnXOP12GfbAiEAuMPV9Ip7UAIsorbbMtqGns2k2ml%2Bajf4ev%2BSUQ0DMcUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDjkaWMq4%2BPAoI5dcircAxPVEMqrZl7AO1k2I02fg%2FmQBz9FC%2BZ%2FV6I4GaXQS7jhxTt547xUjTEZAHYmQy91Sm%2BL21Sz2vlPO8ARQkIwEu9tIGPKyJyzNW7aLskEqPCBuIzYnNYAErdO8pz9HXc0fnL0QJbliAsvGgECUP9RPT0xDyPlWA5VssF602cZeRZIy6gIv5zMrvg27PU%2Fq6zfIDD%2BagXQVyXqG8kUhrpFcwDQLxGbJNtaXny99QRo4doiFjAOXEpjxp8F8B88UFtxB1kq50Iw4hOs5GH%2Bous66Rl91phSBS%2FqDR6s5rNgjivMGio4c%2FcmDT25ipHvu2KqfAhDbIp%2FRbJoVEOVoYzvVD35uORA89thdxyuILIweKB7k3ykmGCVMWyHINYrAVZEGb7W19u2KRjY7JWfT8YF1GgtQrviCx6dwtiuaVqWBrKMFClM2CuccGV62EoEuiZ0RoGqbZx05KS%2BT57lyzZ1LTykEJPfXRvS8W6f%2BhGBGoq6DVTlx26Dufjx3prQoFjz3F6Symd1sxz%2FQahdEWTrT4BoZS6%2BhiKxMJI2NEotRqjp2BgEgWX8rrqiUBoic9elIx5VmegoJEkihkseL%2Bg4xMP4rkK6OjF5lQtF%2FXjTRVFvOPaFK4SITMFKR%2BGtMMzpu70GOqUBmM398D9pykGhQIsZu8BEPFfnge7DXlbUPdclfH6tO5KvXNR4a736n7mVt%2FsqZgiUhn7lbm05Pv5VkmBq2AP9JaM%2BNp3UnIjBNRxYheJek9d6Oa3%2B8Yl7g3qVdZk2otqiehD66QhJMxWdSHnz%2FhCJcg6lIfoiYDLPYYd4tHk89hqX1ZdzsDbyWs99rPOWqM3%2FKPqbeQeD83g6HMvYSoaaNPPma3Ir&X-Amz-Signature=deca77ef373358da04f6d01e772b6fc3c93aa3ed1ec9538190321c7e7a88417e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ7OQDK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBw1JAYGgjwSlsxuaCxIA8FPKlPfC8J3AUXnXOP12GfbAiEAuMPV9Ip7UAIsorbbMtqGns2k2ml%2Bajf4ev%2BSUQ0DMcUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDjkaWMq4%2BPAoI5dcircAxPVEMqrZl7AO1k2I02fg%2FmQBz9FC%2BZ%2FV6I4GaXQS7jhxTt547xUjTEZAHYmQy91Sm%2BL21Sz2vlPO8ARQkIwEu9tIGPKyJyzNW7aLskEqPCBuIzYnNYAErdO8pz9HXc0fnL0QJbliAsvGgECUP9RPT0xDyPlWA5VssF602cZeRZIy6gIv5zMrvg27PU%2Fq6zfIDD%2BagXQVyXqG8kUhrpFcwDQLxGbJNtaXny99QRo4doiFjAOXEpjxp8F8B88UFtxB1kq50Iw4hOs5GH%2Bous66Rl91phSBS%2FqDR6s5rNgjivMGio4c%2FcmDT25ipHvu2KqfAhDbIp%2FRbJoVEOVoYzvVD35uORA89thdxyuILIweKB7k3ykmGCVMWyHINYrAVZEGb7W19u2KRjY7JWfT8YF1GgtQrviCx6dwtiuaVqWBrKMFClM2CuccGV62EoEuiZ0RoGqbZx05KS%2BT57lyzZ1LTykEJPfXRvS8W6f%2BhGBGoq6DVTlx26Dufjx3prQoFjz3F6Symd1sxz%2FQahdEWTrT4BoZS6%2BhiKxMJI2NEotRqjp2BgEgWX8rrqiUBoic9elIx5VmegoJEkihkseL%2Bg4xMP4rkK6OjF5lQtF%2FXjTRVFvOPaFK4SITMFKR%2BGtMMzpu70GOqUBmM398D9pykGhQIsZu8BEPFfnge7DXlbUPdclfH6tO5KvXNR4a736n7mVt%2FsqZgiUhn7lbm05Pv5VkmBq2AP9JaM%2BNp3UnIjBNRxYheJek9d6Oa3%2B8Yl7g3qVdZk2otqiehD66QhJMxWdSHnz%2FhCJcg6lIfoiYDLPYYd4tHk89hqX1ZdzsDbyWs99rPOWqM3%2FKPqbeQeD83g6HMvYSoaaNPPma3Ir&X-Amz-Signature=b0b026e7948cd76bd8f74dacb88f73619608d0320482e4521e8018cd8d81e260&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ7OQDK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBw1JAYGgjwSlsxuaCxIA8FPKlPfC8J3AUXnXOP12GfbAiEAuMPV9Ip7UAIsorbbMtqGns2k2ml%2Bajf4ev%2BSUQ0DMcUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDjkaWMq4%2BPAoI5dcircAxPVEMqrZl7AO1k2I02fg%2FmQBz9FC%2BZ%2FV6I4GaXQS7jhxTt547xUjTEZAHYmQy91Sm%2BL21Sz2vlPO8ARQkIwEu9tIGPKyJyzNW7aLskEqPCBuIzYnNYAErdO8pz9HXc0fnL0QJbliAsvGgECUP9RPT0xDyPlWA5VssF602cZeRZIy6gIv5zMrvg27PU%2Fq6zfIDD%2BagXQVyXqG8kUhrpFcwDQLxGbJNtaXny99QRo4doiFjAOXEpjxp8F8B88UFtxB1kq50Iw4hOs5GH%2Bous66Rl91phSBS%2FqDR6s5rNgjivMGio4c%2FcmDT25ipHvu2KqfAhDbIp%2FRbJoVEOVoYzvVD35uORA89thdxyuILIweKB7k3ykmGCVMWyHINYrAVZEGb7W19u2KRjY7JWfT8YF1GgtQrviCx6dwtiuaVqWBrKMFClM2CuccGV62EoEuiZ0RoGqbZx05KS%2BT57lyzZ1LTykEJPfXRvS8W6f%2BhGBGoq6DVTlx26Dufjx3prQoFjz3F6Symd1sxz%2FQahdEWTrT4BoZS6%2BhiKxMJI2NEotRqjp2BgEgWX8rrqiUBoic9elIx5VmegoJEkihkseL%2Bg4xMP4rkK6OjF5lQtF%2FXjTRVFvOPaFK4SITMFKR%2BGtMMzpu70GOqUBmM398D9pykGhQIsZu8BEPFfnge7DXlbUPdclfH6tO5KvXNR4a736n7mVt%2FsqZgiUhn7lbm05Pv5VkmBq2AP9JaM%2BNp3UnIjBNRxYheJek9d6Oa3%2B8Yl7g3qVdZk2otqiehD66QhJMxWdSHnz%2FhCJcg6lIfoiYDLPYYd4tHk89hqX1ZdzsDbyWs99rPOWqM3%2FKPqbeQeD83g6HMvYSoaaNPPma3Ir&X-Amz-Signature=2ab2ba6df7caa27ceebf19ffe6f9e9f0d76746a8e137d08152a3c061dbf741fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ7OQDK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBw1JAYGgjwSlsxuaCxIA8FPKlPfC8J3AUXnXOP12GfbAiEAuMPV9Ip7UAIsorbbMtqGns2k2ml%2Bajf4ev%2BSUQ0DMcUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDjkaWMq4%2BPAoI5dcircAxPVEMqrZl7AO1k2I02fg%2FmQBz9FC%2BZ%2FV6I4GaXQS7jhxTt547xUjTEZAHYmQy91Sm%2BL21Sz2vlPO8ARQkIwEu9tIGPKyJyzNW7aLskEqPCBuIzYnNYAErdO8pz9HXc0fnL0QJbliAsvGgECUP9RPT0xDyPlWA5VssF602cZeRZIy6gIv5zMrvg27PU%2Fq6zfIDD%2BagXQVyXqG8kUhrpFcwDQLxGbJNtaXny99QRo4doiFjAOXEpjxp8F8B88UFtxB1kq50Iw4hOs5GH%2Bous66Rl91phSBS%2FqDR6s5rNgjivMGio4c%2FcmDT25ipHvu2KqfAhDbIp%2FRbJoVEOVoYzvVD35uORA89thdxyuILIweKB7k3ykmGCVMWyHINYrAVZEGb7W19u2KRjY7JWfT8YF1GgtQrviCx6dwtiuaVqWBrKMFClM2CuccGV62EoEuiZ0RoGqbZx05KS%2BT57lyzZ1LTykEJPfXRvS8W6f%2BhGBGoq6DVTlx26Dufjx3prQoFjz3F6Symd1sxz%2FQahdEWTrT4BoZS6%2BhiKxMJI2NEotRqjp2BgEgWX8rrqiUBoic9elIx5VmegoJEkihkseL%2Bg4xMP4rkK6OjF5lQtF%2FXjTRVFvOPaFK4SITMFKR%2BGtMMzpu70GOqUBmM398D9pykGhQIsZu8BEPFfnge7DXlbUPdclfH6tO5KvXNR4a736n7mVt%2FsqZgiUhn7lbm05Pv5VkmBq2AP9JaM%2BNp3UnIjBNRxYheJek9d6Oa3%2B8Yl7g3qVdZk2otqiehD66QhJMxWdSHnz%2FhCJcg6lIfoiYDLPYYd4tHk89hqX1ZdzsDbyWs99rPOWqM3%2FKPqbeQeD83g6HMvYSoaaNPPma3Ir&X-Amz-Signature=963e87654d83096cddd34c226d7f25e1df892f357d9a63780908d43e69eac997&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ7OQDK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBw1JAYGgjwSlsxuaCxIA8FPKlPfC8J3AUXnXOP12GfbAiEAuMPV9Ip7UAIsorbbMtqGns2k2ml%2Bajf4ev%2BSUQ0DMcUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDjkaWMq4%2BPAoI5dcircAxPVEMqrZl7AO1k2I02fg%2FmQBz9FC%2BZ%2FV6I4GaXQS7jhxTt547xUjTEZAHYmQy91Sm%2BL21Sz2vlPO8ARQkIwEu9tIGPKyJyzNW7aLskEqPCBuIzYnNYAErdO8pz9HXc0fnL0QJbliAsvGgECUP9RPT0xDyPlWA5VssF602cZeRZIy6gIv5zMrvg27PU%2Fq6zfIDD%2BagXQVyXqG8kUhrpFcwDQLxGbJNtaXny99QRo4doiFjAOXEpjxp8F8B88UFtxB1kq50Iw4hOs5GH%2Bous66Rl91phSBS%2FqDR6s5rNgjivMGio4c%2FcmDT25ipHvu2KqfAhDbIp%2FRbJoVEOVoYzvVD35uORA89thdxyuILIweKB7k3ykmGCVMWyHINYrAVZEGb7W19u2KRjY7JWfT8YF1GgtQrviCx6dwtiuaVqWBrKMFClM2CuccGV62EoEuiZ0RoGqbZx05KS%2BT57lyzZ1LTykEJPfXRvS8W6f%2BhGBGoq6DVTlx26Dufjx3prQoFjz3F6Symd1sxz%2FQahdEWTrT4BoZS6%2BhiKxMJI2NEotRqjp2BgEgWX8rrqiUBoic9elIx5VmegoJEkihkseL%2Bg4xMP4rkK6OjF5lQtF%2FXjTRVFvOPaFK4SITMFKR%2BGtMMzpu70GOqUBmM398D9pykGhQIsZu8BEPFfnge7DXlbUPdclfH6tO5KvXNR4a736n7mVt%2FsqZgiUhn7lbm05Pv5VkmBq2AP9JaM%2BNp3UnIjBNRxYheJek9d6Oa3%2B8Yl7g3qVdZk2otqiehD66QhJMxWdSHnz%2FhCJcg6lIfoiYDLPYYd4tHk89hqX1ZdzsDbyWs99rPOWqM3%2FKPqbeQeD83g6HMvYSoaaNPPma3Ir&X-Amz-Signature=263f867de440842c49c120b8eca2dc8bff9e48faa86ab75dacfa885a8d3feb2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ7OQDK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBw1JAYGgjwSlsxuaCxIA8FPKlPfC8J3AUXnXOP12GfbAiEAuMPV9Ip7UAIsorbbMtqGns2k2ml%2Bajf4ev%2BSUQ0DMcUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDjkaWMq4%2BPAoI5dcircAxPVEMqrZl7AO1k2I02fg%2FmQBz9FC%2BZ%2FV6I4GaXQS7jhxTt547xUjTEZAHYmQy91Sm%2BL21Sz2vlPO8ARQkIwEu9tIGPKyJyzNW7aLskEqPCBuIzYnNYAErdO8pz9HXc0fnL0QJbliAsvGgECUP9RPT0xDyPlWA5VssF602cZeRZIy6gIv5zMrvg27PU%2Fq6zfIDD%2BagXQVyXqG8kUhrpFcwDQLxGbJNtaXny99QRo4doiFjAOXEpjxp8F8B88UFtxB1kq50Iw4hOs5GH%2Bous66Rl91phSBS%2FqDR6s5rNgjivMGio4c%2FcmDT25ipHvu2KqfAhDbIp%2FRbJoVEOVoYzvVD35uORA89thdxyuILIweKB7k3ykmGCVMWyHINYrAVZEGb7W19u2KRjY7JWfT8YF1GgtQrviCx6dwtiuaVqWBrKMFClM2CuccGV62EoEuiZ0RoGqbZx05KS%2BT57lyzZ1LTykEJPfXRvS8W6f%2BhGBGoq6DVTlx26Dufjx3prQoFjz3F6Symd1sxz%2FQahdEWTrT4BoZS6%2BhiKxMJI2NEotRqjp2BgEgWX8rrqiUBoic9elIx5VmegoJEkihkseL%2Bg4xMP4rkK6OjF5lQtF%2FXjTRVFvOPaFK4SITMFKR%2BGtMMzpu70GOqUBmM398D9pykGhQIsZu8BEPFfnge7DXlbUPdclfH6tO5KvXNR4a736n7mVt%2FsqZgiUhn7lbm05Pv5VkmBq2AP9JaM%2BNp3UnIjBNRxYheJek9d6Oa3%2B8Yl7g3qVdZk2otqiehD66QhJMxWdSHnz%2FhCJcg6lIfoiYDLPYYd4tHk89hqX1ZdzsDbyWs99rPOWqM3%2FKPqbeQeD83g6HMvYSoaaNPPma3Ir&X-Amz-Signature=f60d1a8af5d5662950f4e5cf7ceca4db3358e8169a087060d76972b7481303cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZ7OQDK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBw1JAYGgjwSlsxuaCxIA8FPKlPfC8J3AUXnXOP12GfbAiEAuMPV9Ip7UAIsorbbMtqGns2k2ml%2Bajf4ev%2BSUQ0DMcUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDjkaWMq4%2BPAoI5dcircAxPVEMqrZl7AO1k2I02fg%2FmQBz9FC%2BZ%2FV6I4GaXQS7jhxTt547xUjTEZAHYmQy91Sm%2BL21Sz2vlPO8ARQkIwEu9tIGPKyJyzNW7aLskEqPCBuIzYnNYAErdO8pz9HXc0fnL0QJbliAsvGgECUP9RPT0xDyPlWA5VssF602cZeRZIy6gIv5zMrvg27PU%2Fq6zfIDD%2BagXQVyXqG8kUhrpFcwDQLxGbJNtaXny99QRo4doiFjAOXEpjxp8F8B88UFtxB1kq50Iw4hOs5GH%2Bous66Rl91phSBS%2FqDR6s5rNgjivMGio4c%2FcmDT25ipHvu2KqfAhDbIp%2FRbJoVEOVoYzvVD35uORA89thdxyuILIweKB7k3ykmGCVMWyHINYrAVZEGb7W19u2KRjY7JWfT8YF1GgtQrviCx6dwtiuaVqWBrKMFClM2CuccGV62EoEuiZ0RoGqbZx05KS%2BT57lyzZ1LTykEJPfXRvS8W6f%2BhGBGoq6DVTlx26Dufjx3prQoFjz3F6Symd1sxz%2FQahdEWTrT4BoZS6%2BhiKxMJI2NEotRqjp2BgEgWX8rrqiUBoic9elIx5VmegoJEkihkseL%2Bg4xMP4rkK6OjF5lQtF%2FXjTRVFvOPaFK4SITMFKR%2BGtMMzpu70GOqUBmM398D9pykGhQIsZu8BEPFfnge7DXlbUPdclfH6tO5KvXNR4a736n7mVt%2FsqZgiUhn7lbm05Pv5VkmBq2AP9JaM%2BNp3UnIjBNRxYheJek9d6Oa3%2B8Yl7g3qVdZk2otqiehD66QhJMxWdSHnz%2FhCJcg6lIfoiYDLPYYd4tHk89hqX1ZdzsDbyWs99rPOWqM3%2FKPqbeQeD83g6HMvYSoaaNPPma3Ir&X-Amz-Signature=0a774951fc3297112584d2f9f1e8b5404ef641e54b725e2249197b761a398d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CACU6UW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtYyVeKr4ikv4UPX2JiMMLyTp6rSDjmGNjCwp5vE6E7AiEAvKGi8m7%2Bv57IBTNDckD3qQa%2B3n4yAvMVEM2FPN2mV1kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelWbIDq1bs%2Fce5xircA9E%2B7wSqx3Z3wFpC9dzrMPKcpDqX4hz6ikRoH%2FkasfreixDDdE7qi5hs4bQpNvqdgOL5V7Hg6Ii4aBt2jv3f1OvvzdjMO%2FkkQpGm0JnP5Z8xGPloLxOQ6KfYAjajmPHtkUKRKp13AgfKTdAH1ZoQ1Zmq%2F5%2Bm0F3wT4t8yddYftMgFje5ADcoteRAOmvZlvk39UNM9SouZiP0rg2nAJTPvxfzvfBg1uQnGRLsn4%2BUWdVWN%2Fu4kAi3Oz0TrPwFrEEuH42hMtwtypqKbKAq0OC%2Bjz7AFIdrl4Ldcsq5KGm9IkmFDmH3LZcclFEQJYSr4nSM8aCaqhlxrhrjKNvc2qPXjcjzB%2B8QenS1JF7ZnJL38dXFONbzHbT3aCfM0s%2BPi4U3%2FW%2BbSM7ZxMhcSTSwBDpfUgh88rQK6jdyr0xjtE500WzO6m8mf%2FGX4Yrogxey40NyoBXHWHq%2BO4fYc5xwcTXMl1s88o%2FKZej89KG7lOlwnSFrlLAufLcsuyI9TWnLkp65RmMcEEOYNpv3Vii%2BUKX%2BxLaBLDXrL2hkJFfGQl4Cafu519HjcdfINYOpTsCZleLW9E%2Bz8TBMsqccYOi%2BCbL3mn9W2rJjORH9%2FKx%2FssNO%2BCNRuK7bwOpC%2Bb8R%2BMB3MPrKgb8GOqUBR0kwOsxCYYUOXV0sO72L%2Bx1XFnqm85VtFO80I3bzvIcgUdqgiXdlM0fcV4aA8opR9Jh1QuCouXG8gDqMFYAcMThjYGxjViztQ1uZquyEHEktEmfsYP67KuRxEdBd0v4SaIDHVxwiVztFuOHSFMiEYx2N%2BPTfUfi8mbnfztcYbE0W%2BNEYR5i4f89iTIdY3v%2FVBNYDGC8Xw4%2FUphhwADjwAge8LcMJ&X-Amz-Signature=a308fd5e3ebfc8fd01ff8697e9b43bc15e2c885e14981bfb1a037b091f6f6371&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CACU6UW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtYyVeKr4ikv4UPX2JiMMLyTp6rSDjmGNjCwp5vE6E7AiEAvKGi8m7%2Bv57IBTNDckD3qQa%2B3n4yAvMVEM2FPN2mV1kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelWbIDq1bs%2Fce5xircA9E%2B7wSqx3Z3wFpC9dzrMPKcpDqX4hz6ikRoH%2FkasfreixDDdE7qi5hs4bQpNvqdgOL5V7Hg6Ii4aBt2jv3f1OvvzdjMO%2FkkQpGm0JnP5Z8xGPloLxOQ6KfYAjajmPHtkUKRKp13AgfKTdAH1ZoQ1Zmq%2F5%2Bm0F3wT4t8yddYftMgFje5ADcoteRAOmvZlvk39UNM9SouZiP0rg2nAJTPvxfzvfBg1uQnGRLsn4%2BUWdVWN%2Fu4kAi3Oz0TrPwFrEEuH42hMtwtypqKbKAq0OC%2Bjz7AFIdrl4Ldcsq5KGm9IkmFDmH3LZcclFEQJYSr4nSM8aCaqhlxrhrjKNvc2qPXjcjzB%2B8QenS1JF7ZnJL38dXFONbzHbT3aCfM0s%2BPi4U3%2FW%2BbSM7ZxMhcSTSwBDpfUgh88rQK6jdyr0xjtE500WzO6m8mf%2FGX4Yrogxey40NyoBXHWHq%2BO4fYc5xwcTXMl1s88o%2FKZej89KG7lOlwnSFrlLAufLcsuyI9TWnLkp65RmMcEEOYNpv3Vii%2BUKX%2BxLaBLDXrL2hkJFfGQl4Cafu519HjcdfINYOpTsCZleLW9E%2Bz8TBMsqccYOi%2BCbL3mn9W2rJjORH9%2FKx%2FssNO%2BCNRuK7bwOpC%2Bb8R%2BMB3MPrKgb8GOqUBR0kwOsxCYYUOXV0sO72L%2Bx1XFnqm85VtFO80I3bzvIcgUdqgiXdlM0fcV4aA8opR9Jh1QuCouXG8gDqMFYAcMThjYGxjViztQ1uZquyEHEktEmfsYP67KuRxEdBd0v4SaIDHVxwiVztFuOHSFMiEYx2N%2BPTfUfi8mbnfztcYbE0W%2BNEYR5i4f89iTIdY3v%2FVBNYDGC8Xw4%2FUphhwADjwAge8LcMJ&X-Amz-Signature=4d9ad820bcbcce71eaea00338930c90bd98a4e1914067a9a66d30091ed5f6628&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CACU6UW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtYyVeKr4ikv4UPX2JiMMLyTp6rSDjmGNjCwp5vE6E7AiEAvKGi8m7%2Bv57IBTNDckD3qQa%2B3n4yAvMVEM2FPN2mV1kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelWbIDq1bs%2Fce5xircA9E%2B7wSqx3Z3wFpC9dzrMPKcpDqX4hz6ikRoH%2FkasfreixDDdE7qi5hs4bQpNvqdgOL5V7Hg6Ii4aBt2jv3f1OvvzdjMO%2FkkQpGm0JnP5Z8xGPloLxOQ6KfYAjajmPHtkUKRKp13AgfKTdAH1ZoQ1Zmq%2F5%2Bm0F3wT4t8yddYftMgFje5ADcoteRAOmvZlvk39UNM9SouZiP0rg2nAJTPvxfzvfBg1uQnGRLsn4%2BUWdVWN%2Fu4kAi3Oz0TrPwFrEEuH42hMtwtypqKbKAq0OC%2Bjz7AFIdrl4Ldcsq5KGm9IkmFDmH3LZcclFEQJYSr4nSM8aCaqhlxrhrjKNvc2qPXjcjzB%2B8QenS1JF7ZnJL38dXFONbzHbT3aCfM0s%2BPi4U3%2FW%2BbSM7ZxMhcSTSwBDpfUgh88rQK6jdyr0xjtE500WzO6m8mf%2FGX4Yrogxey40NyoBXHWHq%2BO4fYc5xwcTXMl1s88o%2FKZej89KG7lOlwnSFrlLAufLcsuyI9TWnLkp65RmMcEEOYNpv3Vii%2BUKX%2BxLaBLDXrL2hkJFfGQl4Cafu519HjcdfINYOpTsCZleLW9E%2Bz8TBMsqccYOi%2BCbL3mn9W2rJjORH9%2FKx%2FssNO%2BCNRuK7bwOpC%2Bb8R%2BMB3MPrKgb8GOqUBR0kwOsxCYYUOXV0sO72L%2Bx1XFnqm85VtFO80I3bzvIcgUdqgiXdlM0fcV4aA8opR9Jh1QuCouXG8gDqMFYAcMThjYGxjViztQ1uZquyEHEktEmfsYP67KuRxEdBd0v4SaIDHVxwiVztFuOHSFMiEYx2N%2BPTfUfi8mbnfztcYbE0W%2BNEYR5i4f89iTIdY3v%2FVBNYDGC8Xw4%2FUphhwADjwAge8LcMJ&X-Amz-Signature=578e629eff96c41f3dfba30b67a29067ebd4fbca471dbb234c6a0b75bccdba97&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CACU6UW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtYyVeKr4ikv4UPX2JiMMLyTp6rSDjmGNjCwp5vE6E7AiEAvKGi8m7%2Bv57IBTNDckD3qQa%2B3n4yAvMVEM2FPN2mV1kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelWbIDq1bs%2Fce5xircA9E%2B7wSqx3Z3wFpC9dzrMPKcpDqX4hz6ikRoH%2FkasfreixDDdE7qi5hs4bQpNvqdgOL5V7Hg6Ii4aBt2jv3f1OvvzdjMO%2FkkQpGm0JnP5Z8xGPloLxOQ6KfYAjajmPHtkUKRKp13AgfKTdAH1ZoQ1Zmq%2F5%2Bm0F3wT4t8yddYftMgFje5ADcoteRAOmvZlvk39UNM9SouZiP0rg2nAJTPvxfzvfBg1uQnGRLsn4%2BUWdVWN%2Fu4kAi3Oz0TrPwFrEEuH42hMtwtypqKbKAq0OC%2Bjz7AFIdrl4Ldcsq5KGm9IkmFDmH3LZcclFEQJYSr4nSM8aCaqhlxrhrjKNvc2qPXjcjzB%2B8QenS1JF7ZnJL38dXFONbzHbT3aCfM0s%2BPi4U3%2FW%2BbSM7ZxMhcSTSwBDpfUgh88rQK6jdyr0xjtE500WzO6m8mf%2FGX4Yrogxey40NyoBXHWHq%2BO4fYc5xwcTXMl1s88o%2FKZej89KG7lOlwnSFrlLAufLcsuyI9TWnLkp65RmMcEEOYNpv3Vii%2BUKX%2BxLaBLDXrL2hkJFfGQl4Cafu519HjcdfINYOpTsCZleLW9E%2Bz8TBMsqccYOi%2BCbL3mn9W2rJjORH9%2FKx%2FssNO%2BCNRuK7bwOpC%2Bb8R%2BMB3MPrKgb8GOqUBR0kwOsxCYYUOXV0sO72L%2Bx1XFnqm85VtFO80I3bzvIcgUdqgiXdlM0fcV4aA8opR9Jh1QuCouXG8gDqMFYAcMThjYGxjViztQ1uZquyEHEktEmfsYP67KuRxEdBd0v4SaIDHVxwiVztFuOHSFMiEYx2N%2BPTfUfi8mbnfztcYbE0W%2BNEYR5i4f89iTIdY3v%2FVBNYDGC8Xw4%2FUphhwADjwAge8LcMJ&X-Amz-Signature=0740c12fe25d10517c1369c44cf6713a2eac19d699a6eb331aad376a02887bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CACU6UW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtYyVeKr4ikv4UPX2JiMMLyTp6rSDjmGNjCwp5vE6E7AiEAvKGi8m7%2Bv57IBTNDckD3qQa%2B3n4yAvMVEM2FPN2mV1kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelWbIDq1bs%2Fce5xircA9E%2B7wSqx3Z3wFpC9dzrMPKcpDqX4hz6ikRoH%2FkasfreixDDdE7qi5hs4bQpNvqdgOL5V7Hg6Ii4aBt2jv3f1OvvzdjMO%2FkkQpGm0JnP5Z8xGPloLxOQ6KfYAjajmPHtkUKRKp13AgfKTdAH1ZoQ1Zmq%2F5%2Bm0F3wT4t8yddYftMgFje5ADcoteRAOmvZlvk39UNM9SouZiP0rg2nAJTPvxfzvfBg1uQnGRLsn4%2BUWdVWN%2Fu4kAi3Oz0TrPwFrEEuH42hMtwtypqKbKAq0OC%2Bjz7AFIdrl4Ldcsq5KGm9IkmFDmH3LZcclFEQJYSr4nSM8aCaqhlxrhrjKNvc2qPXjcjzB%2B8QenS1JF7ZnJL38dXFONbzHbT3aCfM0s%2BPi4U3%2FW%2BbSM7ZxMhcSTSwBDpfUgh88rQK6jdyr0xjtE500WzO6m8mf%2FGX4Yrogxey40NyoBXHWHq%2BO4fYc5xwcTXMl1s88o%2FKZej89KG7lOlwnSFrlLAufLcsuyI9TWnLkp65RmMcEEOYNpv3Vii%2BUKX%2BxLaBLDXrL2hkJFfGQl4Cafu519HjcdfINYOpTsCZleLW9E%2Bz8TBMsqccYOi%2BCbL3mn9W2rJjORH9%2FKx%2FssNO%2BCNRuK7bwOpC%2Bb8R%2BMB3MPrKgb8GOqUBR0kwOsxCYYUOXV0sO72L%2Bx1XFnqm85VtFO80I3bzvIcgUdqgiXdlM0fcV4aA8opR9Jh1QuCouXG8gDqMFYAcMThjYGxjViztQ1uZquyEHEktEmfsYP67KuRxEdBd0v4SaIDHVxwiVztFuOHSFMiEYx2N%2BPTfUfi8mbnfztcYbE0W%2BNEYR5i4f89iTIdY3v%2FVBNYDGC8Xw4%2FUphhwADjwAge8LcMJ&X-Amz-Signature=3cc7f02794a982eb2525a7982751b2f99aaef7cdc67bfc7e42dd9999f8253314&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CACU6UW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtYyVeKr4ikv4UPX2JiMMLyTp6rSDjmGNjCwp5vE6E7AiEAvKGi8m7%2Bv57IBTNDckD3qQa%2B3n4yAvMVEM2FPN2mV1kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelWbIDq1bs%2Fce5xircA9E%2B7wSqx3Z3wFpC9dzrMPKcpDqX4hz6ikRoH%2FkasfreixDDdE7qi5hs4bQpNvqdgOL5V7Hg6Ii4aBt2jv3f1OvvzdjMO%2FkkQpGm0JnP5Z8xGPloLxOQ6KfYAjajmPHtkUKRKp13AgfKTdAH1ZoQ1Zmq%2F5%2Bm0F3wT4t8yddYftMgFje5ADcoteRAOmvZlvk39UNM9SouZiP0rg2nAJTPvxfzvfBg1uQnGRLsn4%2BUWdVWN%2Fu4kAi3Oz0TrPwFrEEuH42hMtwtypqKbKAq0OC%2Bjz7AFIdrl4Ldcsq5KGm9IkmFDmH3LZcclFEQJYSr4nSM8aCaqhlxrhrjKNvc2qPXjcjzB%2B8QenS1JF7ZnJL38dXFONbzHbT3aCfM0s%2BPi4U3%2FW%2BbSM7ZxMhcSTSwBDpfUgh88rQK6jdyr0xjtE500WzO6m8mf%2FGX4Yrogxey40NyoBXHWHq%2BO4fYc5xwcTXMl1s88o%2FKZej89KG7lOlwnSFrlLAufLcsuyI9TWnLkp65RmMcEEOYNpv3Vii%2BUKX%2BxLaBLDXrL2hkJFfGQl4Cafu519HjcdfINYOpTsCZleLW9E%2Bz8TBMsqccYOi%2BCbL3mn9W2rJjORH9%2FKx%2FssNO%2BCNRuK7bwOpC%2Bb8R%2BMB3MPrKgb8GOqUBR0kwOsxCYYUOXV0sO72L%2Bx1XFnqm85VtFO80I3bzvIcgUdqgiXdlM0fcV4aA8opR9Jh1QuCouXG8gDqMFYAcMThjYGxjViztQ1uZquyEHEktEmfsYP67KuRxEdBd0v4SaIDHVxwiVztFuOHSFMiEYx2N%2BPTfUfi8mbnfztcYbE0W%2BNEYR5i4f89iTIdY3v%2FVBNYDGC8Xw4%2FUphhwADjwAge8LcMJ&X-Amz-Signature=db7c94d3500a155089caded983b24f7ae1a02344f257eb62ca15eeb271772c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CACU6UW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtYyVeKr4ikv4UPX2JiMMLyTp6rSDjmGNjCwp5vE6E7AiEAvKGi8m7%2Bv57IBTNDckD3qQa%2B3n4yAvMVEM2FPN2mV1kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelWbIDq1bs%2Fce5xircA9E%2B7wSqx3Z3wFpC9dzrMPKcpDqX4hz6ikRoH%2FkasfreixDDdE7qi5hs4bQpNvqdgOL5V7Hg6Ii4aBt2jv3f1OvvzdjMO%2FkkQpGm0JnP5Z8xGPloLxOQ6KfYAjajmPHtkUKRKp13AgfKTdAH1ZoQ1Zmq%2F5%2Bm0F3wT4t8yddYftMgFje5ADcoteRAOmvZlvk39UNM9SouZiP0rg2nAJTPvxfzvfBg1uQnGRLsn4%2BUWdVWN%2Fu4kAi3Oz0TrPwFrEEuH42hMtwtypqKbKAq0OC%2Bjz7AFIdrl4Ldcsq5KGm9IkmFDmH3LZcclFEQJYSr4nSM8aCaqhlxrhrjKNvc2qPXjcjzB%2B8QenS1JF7ZnJL38dXFONbzHbT3aCfM0s%2BPi4U3%2FW%2BbSM7ZxMhcSTSwBDpfUgh88rQK6jdyr0xjtE500WzO6m8mf%2FGX4Yrogxey40NyoBXHWHq%2BO4fYc5xwcTXMl1s88o%2FKZej89KG7lOlwnSFrlLAufLcsuyI9TWnLkp65RmMcEEOYNpv3Vii%2BUKX%2BxLaBLDXrL2hkJFfGQl4Cafu519HjcdfINYOpTsCZleLW9E%2Bz8TBMsqccYOi%2BCbL3mn9W2rJjORH9%2FKx%2FssNO%2BCNRuK7bwOpC%2Bb8R%2BMB3MPrKgb8GOqUBR0kwOsxCYYUOXV0sO72L%2Bx1XFnqm85VtFO80I3bzvIcgUdqgiXdlM0fcV4aA8opR9Jh1QuCouXG8gDqMFYAcMThjYGxjViztQ1uZquyEHEktEmfsYP67KuRxEdBd0v4SaIDHVxwiVztFuOHSFMiEYx2N%2BPTfUfi8mbnfztcYbE0W%2BNEYR5i4f89iTIdY3v%2FVBNYDGC8Xw4%2FUphhwADjwAge8LcMJ&X-Amz-Signature=6b63163fe66f0e3512ad40a21f161863cd3e4dbc2b302dd4cc583d166068cb48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CACU6UW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtYyVeKr4ikv4UPX2JiMMLyTp6rSDjmGNjCwp5vE6E7AiEAvKGi8m7%2Bv57IBTNDckD3qQa%2B3n4yAvMVEM2FPN2mV1kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelWbIDq1bs%2Fce5xircA9E%2B7wSqx3Z3wFpC9dzrMPKcpDqX4hz6ikRoH%2FkasfreixDDdE7qi5hs4bQpNvqdgOL5V7Hg6Ii4aBt2jv3f1OvvzdjMO%2FkkQpGm0JnP5Z8xGPloLxOQ6KfYAjajmPHtkUKRKp13AgfKTdAH1ZoQ1Zmq%2F5%2Bm0F3wT4t8yddYftMgFje5ADcoteRAOmvZlvk39UNM9SouZiP0rg2nAJTPvxfzvfBg1uQnGRLsn4%2BUWdVWN%2Fu4kAi3Oz0TrPwFrEEuH42hMtwtypqKbKAq0OC%2Bjz7AFIdrl4Ldcsq5KGm9IkmFDmH3LZcclFEQJYSr4nSM8aCaqhlxrhrjKNvc2qPXjcjzB%2B8QenS1JF7ZnJL38dXFONbzHbT3aCfM0s%2BPi4U3%2FW%2BbSM7ZxMhcSTSwBDpfUgh88rQK6jdyr0xjtE500WzO6m8mf%2FGX4Yrogxey40NyoBXHWHq%2BO4fYc5xwcTXMl1s88o%2FKZej89KG7lOlwnSFrlLAufLcsuyI9TWnLkp65RmMcEEOYNpv3Vii%2BUKX%2BxLaBLDXrL2hkJFfGQl4Cafu519HjcdfINYOpTsCZleLW9E%2Bz8TBMsqccYOi%2BCbL3mn9W2rJjORH9%2FKx%2FssNO%2BCNRuK7bwOpC%2Bb8R%2BMB3MPrKgb8GOqUBR0kwOsxCYYUOXV0sO72L%2Bx1XFnqm85VtFO80I3bzvIcgUdqgiXdlM0fcV4aA8opR9Jh1QuCouXG8gDqMFYAcMThjYGxjViztQ1uZquyEHEktEmfsYP67KuRxEdBd0v4SaIDHVxwiVztFuOHSFMiEYx2N%2BPTfUfi8mbnfztcYbE0W%2BNEYR5i4f89iTIdY3v%2FVBNYDGC8Xw4%2FUphhwADjwAge8LcMJ&X-Amz-Signature=c093c2ff7f2b783bd07a05f916a8feddb5ce8467e8104e8d243896f8cd6a87b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

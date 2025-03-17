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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZK5TR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqIK%2B0%2FBUfgm%2Fau%2FZTqGlma%2FyueE%2BDyO17QIywTD%2FawIgUc5rV1JyKIXLSo9nuKMI46DpehzP8Iiq33P7BLpculEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNJkDxFINwxB%2FvNocSrcA6m9wyyDbgeXOB5UewfqnlDqYqNLSDpJlX9X8Uf3kHuL0e2ujD09SgE7T4eUJW1l35b%2FAPGaQlDDChlF1KEKKEOv3FGJAbxTK5SaaeA%2Frb3pbrxFwY8T2YLFH1%2BtkaruIpJnWkm6xaMwoeec6r8Cg7J1lqLTDoV7vvPDiRuvIXfyw2QFkpoC2TlWgvEFtnaRlLoigYqgfihxn%2BgBciXrQS7TNu7T1opyCkCRGadX9O%2BsrTL9%2Fa6oyudOV8Scqygru72OJcAIngM4Xgur3nQ4oTfDyDu43YzUDjFUknqm49vhjHDuLjweGNcVkfqVjBa8W7E1iMlceEWVHZ99fQr6Q4UWgW5seQgWpWZzHsESt3%2Bfuw4DRcmiydh3YRVj5TXdU4hJS4Vls5gKa98Nfax6MYGW2ByxNiAW9PmcvpA85EZEmP6iXSqjUZvwatj%2F%2FCVTSjHxC7VXmNj%2FuMXa9UlchGOzL0fSS1%2FKbecFDeq1qx%2F7PyECUXAZ%2FPI2ZY56fEUUuKN0U1g75vDwqz1L0Yq8UgRazIjNEqyg1J4EqPlG82L4j2mwqO40c2MXC21omukul94ix%2FVQQqG7N57OuvyLaAE5L36wXfWeJ3JQZRTdKno1x4KzAZo9giDxBCTFMM3l4b4GOqUBRmgWviEt1O%2FR6YZfP7fx2yaxHWlNTJOfmZlaAOcZPeV%2By%2FPlEbMVm4AN1o%2Bf3yCekoenXi8VTysr2WTkPsgmHqiKZa8jefdjYP%2F%2FxqhzJYRJeMFkKkZgQpqY4M54RK0Aq89ZdwkP%2BxrUUk0YtfhPkap0GLoDNs03l%2FDjRnoano3lN21fAC0Jsve0Q00cB8L7mFhpVi3VXEIRwBuRMdVlDP3liD0w&X-Amz-Signature=290529a40c97f988864f8b87f786527b1dbba299d93a9d655509eb7e5d830cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZK5TR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqIK%2B0%2FBUfgm%2Fau%2FZTqGlma%2FyueE%2BDyO17QIywTD%2FawIgUc5rV1JyKIXLSo9nuKMI46DpehzP8Iiq33P7BLpculEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNJkDxFINwxB%2FvNocSrcA6m9wyyDbgeXOB5UewfqnlDqYqNLSDpJlX9X8Uf3kHuL0e2ujD09SgE7T4eUJW1l35b%2FAPGaQlDDChlF1KEKKEOv3FGJAbxTK5SaaeA%2Frb3pbrxFwY8T2YLFH1%2BtkaruIpJnWkm6xaMwoeec6r8Cg7J1lqLTDoV7vvPDiRuvIXfyw2QFkpoC2TlWgvEFtnaRlLoigYqgfihxn%2BgBciXrQS7TNu7T1opyCkCRGadX9O%2BsrTL9%2Fa6oyudOV8Scqygru72OJcAIngM4Xgur3nQ4oTfDyDu43YzUDjFUknqm49vhjHDuLjweGNcVkfqVjBa8W7E1iMlceEWVHZ99fQr6Q4UWgW5seQgWpWZzHsESt3%2Bfuw4DRcmiydh3YRVj5TXdU4hJS4Vls5gKa98Nfax6MYGW2ByxNiAW9PmcvpA85EZEmP6iXSqjUZvwatj%2F%2FCVTSjHxC7VXmNj%2FuMXa9UlchGOzL0fSS1%2FKbecFDeq1qx%2F7PyECUXAZ%2FPI2ZY56fEUUuKN0U1g75vDwqz1L0Yq8UgRazIjNEqyg1J4EqPlG82L4j2mwqO40c2MXC21omukul94ix%2FVQQqG7N57OuvyLaAE5L36wXfWeJ3JQZRTdKno1x4KzAZo9giDxBCTFMM3l4b4GOqUBRmgWviEt1O%2FR6YZfP7fx2yaxHWlNTJOfmZlaAOcZPeV%2By%2FPlEbMVm4AN1o%2Bf3yCekoenXi8VTysr2WTkPsgmHqiKZa8jefdjYP%2F%2FxqhzJYRJeMFkKkZgQpqY4M54RK0Aq89ZdwkP%2BxrUUk0YtfhPkap0GLoDNs03l%2FDjRnoano3lN21fAC0Jsve0Q00cB8L7mFhpVi3VXEIRwBuRMdVlDP3liD0w&X-Amz-Signature=b07dda46c537b537efcc31486bb817d4913e0d1c05ce8c58b7280dae57407393&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZK5TR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqIK%2B0%2FBUfgm%2Fau%2FZTqGlma%2FyueE%2BDyO17QIywTD%2FawIgUc5rV1JyKIXLSo9nuKMI46DpehzP8Iiq33P7BLpculEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNJkDxFINwxB%2FvNocSrcA6m9wyyDbgeXOB5UewfqnlDqYqNLSDpJlX9X8Uf3kHuL0e2ujD09SgE7T4eUJW1l35b%2FAPGaQlDDChlF1KEKKEOv3FGJAbxTK5SaaeA%2Frb3pbrxFwY8T2YLFH1%2BtkaruIpJnWkm6xaMwoeec6r8Cg7J1lqLTDoV7vvPDiRuvIXfyw2QFkpoC2TlWgvEFtnaRlLoigYqgfihxn%2BgBciXrQS7TNu7T1opyCkCRGadX9O%2BsrTL9%2Fa6oyudOV8Scqygru72OJcAIngM4Xgur3nQ4oTfDyDu43YzUDjFUknqm49vhjHDuLjweGNcVkfqVjBa8W7E1iMlceEWVHZ99fQr6Q4UWgW5seQgWpWZzHsESt3%2Bfuw4DRcmiydh3YRVj5TXdU4hJS4Vls5gKa98Nfax6MYGW2ByxNiAW9PmcvpA85EZEmP6iXSqjUZvwatj%2F%2FCVTSjHxC7VXmNj%2FuMXa9UlchGOzL0fSS1%2FKbecFDeq1qx%2F7PyECUXAZ%2FPI2ZY56fEUUuKN0U1g75vDwqz1L0Yq8UgRazIjNEqyg1J4EqPlG82L4j2mwqO40c2MXC21omukul94ix%2FVQQqG7N57OuvyLaAE5L36wXfWeJ3JQZRTdKno1x4KzAZo9giDxBCTFMM3l4b4GOqUBRmgWviEt1O%2FR6YZfP7fx2yaxHWlNTJOfmZlaAOcZPeV%2By%2FPlEbMVm4AN1o%2Bf3yCekoenXi8VTysr2WTkPsgmHqiKZa8jefdjYP%2F%2FxqhzJYRJeMFkKkZgQpqY4M54RK0Aq89ZdwkP%2BxrUUk0YtfhPkap0GLoDNs03l%2FDjRnoano3lN21fAC0Jsve0Q00cB8L7mFhpVi3VXEIRwBuRMdVlDP3liD0w&X-Amz-Signature=ec6cb6f3e6337d3c1168d9ac6b94457833799e607b92bb30443c16001b66335a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZK5TR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqIK%2B0%2FBUfgm%2Fau%2FZTqGlma%2FyueE%2BDyO17QIywTD%2FawIgUc5rV1JyKIXLSo9nuKMI46DpehzP8Iiq33P7BLpculEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNJkDxFINwxB%2FvNocSrcA6m9wyyDbgeXOB5UewfqnlDqYqNLSDpJlX9X8Uf3kHuL0e2ujD09SgE7T4eUJW1l35b%2FAPGaQlDDChlF1KEKKEOv3FGJAbxTK5SaaeA%2Frb3pbrxFwY8T2YLFH1%2BtkaruIpJnWkm6xaMwoeec6r8Cg7J1lqLTDoV7vvPDiRuvIXfyw2QFkpoC2TlWgvEFtnaRlLoigYqgfihxn%2BgBciXrQS7TNu7T1opyCkCRGadX9O%2BsrTL9%2Fa6oyudOV8Scqygru72OJcAIngM4Xgur3nQ4oTfDyDu43YzUDjFUknqm49vhjHDuLjweGNcVkfqVjBa8W7E1iMlceEWVHZ99fQr6Q4UWgW5seQgWpWZzHsESt3%2Bfuw4DRcmiydh3YRVj5TXdU4hJS4Vls5gKa98Nfax6MYGW2ByxNiAW9PmcvpA85EZEmP6iXSqjUZvwatj%2F%2FCVTSjHxC7VXmNj%2FuMXa9UlchGOzL0fSS1%2FKbecFDeq1qx%2F7PyECUXAZ%2FPI2ZY56fEUUuKN0U1g75vDwqz1L0Yq8UgRazIjNEqyg1J4EqPlG82L4j2mwqO40c2MXC21omukul94ix%2FVQQqG7N57OuvyLaAE5L36wXfWeJ3JQZRTdKno1x4KzAZo9giDxBCTFMM3l4b4GOqUBRmgWviEt1O%2FR6YZfP7fx2yaxHWlNTJOfmZlaAOcZPeV%2By%2FPlEbMVm4AN1o%2Bf3yCekoenXi8VTysr2WTkPsgmHqiKZa8jefdjYP%2F%2FxqhzJYRJeMFkKkZgQpqY4M54RK0Aq89ZdwkP%2BxrUUk0YtfhPkap0GLoDNs03l%2FDjRnoano3lN21fAC0Jsve0Q00cB8L7mFhpVi3VXEIRwBuRMdVlDP3liD0w&X-Amz-Signature=31b7c19e0e307472874c49b643c2e67fb6438ea794ce95c064f811a73c66c42f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZK5TR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqIK%2B0%2FBUfgm%2Fau%2FZTqGlma%2FyueE%2BDyO17QIywTD%2FawIgUc5rV1JyKIXLSo9nuKMI46DpehzP8Iiq33P7BLpculEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNJkDxFINwxB%2FvNocSrcA6m9wyyDbgeXOB5UewfqnlDqYqNLSDpJlX9X8Uf3kHuL0e2ujD09SgE7T4eUJW1l35b%2FAPGaQlDDChlF1KEKKEOv3FGJAbxTK5SaaeA%2Frb3pbrxFwY8T2YLFH1%2BtkaruIpJnWkm6xaMwoeec6r8Cg7J1lqLTDoV7vvPDiRuvIXfyw2QFkpoC2TlWgvEFtnaRlLoigYqgfihxn%2BgBciXrQS7TNu7T1opyCkCRGadX9O%2BsrTL9%2Fa6oyudOV8Scqygru72OJcAIngM4Xgur3nQ4oTfDyDu43YzUDjFUknqm49vhjHDuLjweGNcVkfqVjBa8W7E1iMlceEWVHZ99fQr6Q4UWgW5seQgWpWZzHsESt3%2Bfuw4DRcmiydh3YRVj5TXdU4hJS4Vls5gKa98Nfax6MYGW2ByxNiAW9PmcvpA85EZEmP6iXSqjUZvwatj%2F%2FCVTSjHxC7VXmNj%2FuMXa9UlchGOzL0fSS1%2FKbecFDeq1qx%2F7PyECUXAZ%2FPI2ZY56fEUUuKN0U1g75vDwqz1L0Yq8UgRazIjNEqyg1J4EqPlG82L4j2mwqO40c2MXC21omukul94ix%2FVQQqG7N57OuvyLaAE5L36wXfWeJ3JQZRTdKno1x4KzAZo9giDxBCTFMM3l4b4GOqUBRmgWviEt1O%2FR6YZfP7fx2yaxHWlNTJOfmZlaAOcZPeV%2By%2FPlEbMVm4AN1o%2Bf3yCekoenXi8VTysr2WTkPsgmHqiKZa8jefdjYP%2F%2FxqhzJYRJeMFkKkZgQpqY4M54RK0Aq89ZdwkP%2BxrUUk0YtfhPkap0GLoDNs03l%2FDjRnoano3lN21fAC0Jsve0Q00cB8L7mFhpVi3VXEIRwBuRMdVlDP3liD0w&X-Amz-Signature=8d1f8b6614fd9f0ecb78ec6b1ef14fb6295a3b2534a0d978f6075056295e5fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZK5TR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqIK%2B0%2FBUfgm%2Fau%2FZTqGlma%2FyueE%2BDyO17QIywTD%2FawIgUc5rV1JyKIXLSo9nuKMI46DpehzP8Iiq33P7BLpculEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNJkDxFINwxB%2FvNocSrcA6m9wyyDbgeXOB5UewfqnlDqYqNLSDpJlX9X8Uf3kHuL0e2ujD09SgE7T4eUJW1l35b%2FAPGaQlDDChlF1KEKKEOv3FGJAbxTK5SaaeA%2Frb3pbrxFwY8T2YLFH1%2BtkaruIpJnWkm6xaMwoeec6r8Cg7J1lqLTDoV7vvPDiRuvIXfyw2QFkpoC2TlWgvEFtnaRlLoigYqgfihxn%2BgBciXrQS7TNu7T1opyCkCRGadX9O%2BsrTL9%2Fa6oyudOV8Scqygru72OJcAIngM4Xgur3nQ4oTfDyDu43YzUDjFUknqm49vhjHDuLjweGNcVkfqVjBa8W7E1iMlceEWVHZ99fQr6Q4UWgW5seQgWpWZzHsESt3%2Bfuw4DRcmiydh3YRVj5TXdU4hJS4Vls5gKa98Nfax6MYGW2ByxNiAW9PmcvpA85EZEmP6iXSqjUZvwatj%2F%2FCVTSjHxC7VXmNj%2FuMXa9UlchGOzL0fSS1%2FKbecFDeq1qx%2F7PyECUXAZ%2FPI2ZY56fEUUuKN0U1g75vDwqz1L0Yq8UgRazIjNEqyg1J4EqPlG82L4j2mwqO40c2MXC21omukul94ix%2FVQQqG7N57OuvyLaAE5L36wXfWeJ3JQZRTdKno1x4KzAZo9giDxBCTFMM3l4b4GOqUBRmgWviEt1O%2FR6YZfP7fx2yaxHWlNTJOfmZlaAOcZPeV%2By%2FPlEbMVm4AN1o%2Bf3yCekoenXi8VTysr2WTkPsgmHqiKZa8jefdjYP%2F%2FxqhzJYRJeMFkKkZgQpqY4M54RK0Aq89ZdwkP%2BxrUUk0YtfhPkap0GLoDNs03l%2FDjRnoano3lN21fAC0Jsve0Q00cB8L7mFhpVi3VXEIRwBuRMdVlDP3liD0w&X-Amz-Signature=3bc0bb1847d29a7fcf72a8c933bfa5707947f630c887636f2da687488415c024&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZK5TR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqIK%2B0%2FBUfgm%2Fau%2FZTqGlma%2FyueE%2BDyO17QIywTD%2FawIgUc5rV1JyKIXLSo9nuKMI46DpehzP8Iiq33P7BLpculEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNJkDxFINwxB%2FvNocSrcA6m9wyyDbgeXOB5UewfqnlDqYqNLSDpJlX9X8Uf3kHuL0e2ujD09SgE7T4eUJW1l35b%2FAPGaQlDDChlF1KEKKEOv3FGJAbxTK5SaaeA%2Frb3pbrxFwY8T2YLFH1%2BtkaruIpJnWkm6xaMwoeec6r8Cg7J1lqLTDoV7vvPDiRuvIXfyw2QFkpoC2TlWgvEFtnaRlLoigYqgfihxn%2BgBciXrQS7TNu7T1opyCkCRGadX9O%2BsrTL9%2Fa6oyudOV8Scqygru72OJcAIngM4Xgur3nQ4oTfDyDu43YzUDjFUknqm49vhjHDuLjweGNcVkfqVjBa8W7E1iMlceEWVHZ99fQr6Q4UWgW5seQgWpWZzHsESt3%2Bfuw4DRcmiydh3YRVj5TXdU4hJS4Vls5gKa98Nfax6MYGW2ByxNiAW9PmcvpA85EZEmP6iXSqjUZvwatj%2F%2FCVTSjHxC7VXmNj%2FuMXa9UlchGOzL0fSS1%2FKbecFDeq1qx%2F7PyECUXAZ%2FPI2ZY56fEUUuKN0U1g75vDwqz1L0Yq8UgRazIjNEqyg1J4EqPlG82L4j2mwqO40c2MXC21omukul94ix%2FVQQqG7N57OuvyLaAE5L36wXfWeJ3JQZRTdKno1x4KzAZo9giDxBCTFMM3l4b4GOqUBRmgWviEt1O%2FR6YZfP7fx2yaxHWlNTJOfmZlaAOcZPeV%2By%2FPlEbMVm4AN1o%2Bf3yCekoenXi8VTysr2WTkPsgmHqiKZa8jefdjYP%2F%2FxqhzJYRJeMFkKkZgQpqY4M54RK0Aq89ZdwkP%2BxrUUk0YtfhPkap0GLoDNs03l%2FDjRnoano3lN21fAC0Jsve0Q00cB8L7mFhpVi3VXEIRwBuRMdVlDP3liD0w&X-Amz-Signature=c13f28ad9ab0216424bdcebb3ad4d1c3014cfced6801261b1c9a217b9a053fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZK5TR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqIK%2B0%2FBUfgm%2Fau%2FZTqGlma%2FyueE%2BDyO17QIywTD%2FawIgUc5rV1JyKIXLSo9nuKMI46DpehzP8Iiq33P7BLpculEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNJkDxFINwxB%2FvNocSrcA6m9wyyDbgeXOB5UewfqnlDqYqNLSDpJlX9X8Uf3kHuL0e2ujD09SgE7T4eUJW1l35b%2FAPGaQlDDChlF1KEKKEOv3FGJAbxTK5SaaeA%2Frb3pbrxFwY8T2YLFH1%2BtkaruIpJnWkm6xaMwoeec6r8Cg7J1lqLTDoV7vvPDiRuvIXfyw2QFkpoC2TlWgvEFtnaRlLoigYqgfihxn%2BgBciXrQS7TNu7T1opyCkCRGadX9O%2BsrTL9%2Fa6oyudOV8Scqygru72OJcAIngM4Xgur3nQ4oTfDyDu43YzUDjFUknqm49vhjHDuLjweGNcVkfqVjBa8W7E1iMlceEWVHZ99fQr6Q4UWgW5seQgWpWZzHsESt3%2Bfuw4DRcmiydh3YRVj5TXdU4hJS4Vls5gKa98Nfax6MYGW2ByxNiAW9PmcvpA85EZEmP6iXSqjUZvwatj%2F%2FCVTSjHxC7VXmNj%2FuMXa9UlchGOzL0fSS1%2FKbecFDeq1qx%2F7PyECUXAZ%2FPI2ZY56fEUUuKN0U1g75vDwqz1L0Yq8UgRazIjNEqyg1J4EqPlG82L4j2mwqO40c2MXC21omukul94ix%2FVQQqG7N57OuvyLaAE5L36wXfWeJ3JQZRTdKno1x4KzAZo9giDxBCTFMM3l4b4GOqUBRmgWviEt1O%2FR6YZfP7fx2yaxHWlNTJOfmZlaAOcZPeV%2By%2FPlEbMVm4AN1o%2Bf3yCekoenXi8VTysr2WTkPsgmHqiKZa8jefdjYP%2F%2FxqhzJYRJeMFkKkZgQpqY4M54RK0Aq89ZdwkP%2BxrUUk0YtfhPkap0GLoDNs03l%2FDjRnoano3lN21fAC0Jsve0Q00cB8L7mFhpVi3VXEIRwBuRMdVlDP3liD0w&X-Amz-Signature=9e6a3343166378046209d2c910a4d5f0e8e07063a62380c295d090ad1eb56c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

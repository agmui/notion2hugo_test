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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=df43a2ce0c7f1d9d3fd02180c9aadccb3f1935f43460d4f1a486d476509ac645&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=225730a9846102f4d67ba0ebb651448a69a34a025b64b5407e338218a3f5432e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=f62731dd69574cb63c728992a71401919131803fee76a8c6b0c953ee93ee2e16&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=e6950bed24d32dc9cda90fb3c526d6d4ffb8c5debe5cd9562fb7ab78d227efbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=2353efcdd5536e3463cb07cf098fb5db18e4d37cbef47201aacb87c9d273a41c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=a89426d2b9ccb59ba5363a2f6e0b6980252be1ca2cd7166e553769b1ed06b103&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=83308e1f83f50be1039f63aee169e4aa84b97530d6b7805a2ffa1559f5e3c38a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=258b489f4a7b6f4ed9e69cf6fd7f3c16c2f2d314dd3c2e4c4acb1cedf0b99007&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

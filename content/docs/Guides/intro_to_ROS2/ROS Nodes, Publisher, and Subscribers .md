---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCBBFFH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDqbOIdYbV45Mf%2Bs1UDgNVNnO9sIDt%2FFAY%2FL0d5SZjlvAIgF0NwTdtDEOqW5vm7PbB2HJw7pgu8MYE4ih479eMFWeEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCVBrEj9WVhA131i3ircAwBQP0wQWNydcrA%2FaPbzw%2Bkxuc7gxJsnKxOZtKF6r%2F0%2FVRk%2BgtKORzSX0YCsPMXwRPxYevaGqCWSdgZ3Zhi8R%2BJCEo65gYyMFqfyTEatVoDCjSNdBmFjnjMJaCbo%2FnEekWZnZDSWUtBvAWMHH3ywbplMl2uctEGqW637LqL96f%2BKfZNcig8NNSiBm%2BSA8ab21nGe18ZdpyV4kUXAFLeEvyIyVYox96GxM8bhbwv%2FBNSCu1zsh9UJDwX9gIUYTrvnHqekatteMINxeP5810%2BCVcMPAPu8BtcwQ8nespeUoUb4v7X3J8rycZxXFK99MA6T1vZDX44aF5d9R91SoxMP4ponMd5BNQzmfbtujK2ZZQoIudKLTmY9hzYDYnCrfClOtzjc60ofNuAOfisk9mwaAfShFb9ZPqZlWpVUd6h7fkmm4plh4feeyM%2BAXbHPtVpqj8PLv1BeCWhMIpl%2Fa08uEMpZhhbC0p4jKDA%2BvClvMlUXQjcknWHujl5Sxd3CnjZeXoofm57efj%2B1RxoyoqgbbFvq6oLhmN%2FuAEeJMbQaALmLf6udv2sq7ya21jt0Js6z79%2BXOvoMvIDulzNBGBas0C%2B4YTqX41zw1olhft3v9EjDqfu3zYHYAIpUx4SmMM%2BztsoGOqUBhiomektN9pi9Xlelqy2yPtT5OYHV8FAirj3UHHRTPXVScY8Ex%2F3L1VdyynstjUx%2FDAHduQFmqX%2BSPm3of4corBRhZGC%2FGu6NsFmYbcm8vB1pn5VAE7I9oeaLX43fwSU%2F47I0PD33p9u0hEIqtWNbUHh7rU%2FBvhNEz4p1Ppj6Z48y3XgjGmdgtKzCx%2Bn%2Fs2pPC4M%2BrPmu%2BpEf98jGerxBLJAADkJh&X-Amz-Signature=347ba9855a2250be46ed524b750025a4e93de291dd8eadaf81140b86653ce086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCBBFFH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDqbOIdYbV45Mf%2Bs1UDgNVNnO9sIDt%2FFAY%2FL0d5SZjlvAIgF0NwTdtDEOqW5vm7PbB2HJw7pgu8MYE4ih479eMFWeEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCVBrEj9WVhA131i3ircAwBQP0wQWNydcrA%2FaPbzw%2Bkxuc7gxJsnKxOZtKF6r%2F0%2FVRk%2BgtKORzSX0YCsPMXwRPxYevaGqCWSdgZ3Zhi8R%2BJCEo65gYyMFqfyTEatVoDCjSNdBmFjnjMJaCbo%2FnEekWZnZDSWUtBvAWMHH3ywbplMl2uctEGqW637LqL96f%2BKfZNcig8NNSiBm%2BSA8ab21nGe18ZdpyV4kUXAFLeEvyIyVYox96GxM8bhbwv%2FBNSCu1zsh9UJDwX9gIUYTrvnHqekatteMINxeP5810%2BCVcMPAPu8BtcwQ8nespeUoUb4v7X3J8rycZxXFK99MA6T1vZDX44aF5d9R91SoxMP4ponMd5BNQzmfbtujK2ZZQoIudKLTmY9hzYDYnCrfClOtzjc60ofNuAOfisk9mwaAfShFb9ZPqZlWpVUd6h7fkmm4plh4feeyM%2BAXbHPtVpqj8PLv1BeCWhMIpl%2Fa08uEMpZhhbC0p4jKDA%2BvClvMlUXQjcknWHujl5Sxd3CnjZeXoofm57efj%2B1RxoyoqgbbFvq6oLhmN%2FuAEeJMbQaALmLf6udv2sq7ya21jt0Js6z79%2BXOvoMvIDulzNBGBas0C%2B4YTqX41zw1olhft3v9EjDqfu3zYHYAIpUx4SmMM%2BztsoGOqUBhiomektN9pi9Xlelqy2yPtT5OYHV8FAirj3UHHRTPXVScY8Ex%2F3L1VdyynstjUx%2FDAHduQFmqX%2BSPm3of4corBRhZGC%2FGu6NsFmYbcm8vB1pn5VAE7I9oeaLX43fwSU%2F47I0PD33p9u0hEIqtWNbUHh7rU%2FBvhNEz4p1Ppj6Z48y3XgjGmdgtKzCx%2Bn%2Fs2pPC4M%2BrPmu%2BpEf98jGerxBLJAADkJh&X-Amz-Signature=0d54de6dc4642e0859064522d768cf7f629d39a97f0cec5edeef1f2256df8944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCBBFFH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDqbOIdYbV45Mf%2Bs1UDgNVNnO9sIDt%2FFAY%2FL0d5SZjlvAIgF0NwTdtDEOqW5vm7PbB2HJw7pgu8MYE4ih479eMFWeEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCVBrEj9WVhA131i3ircAwBQP0wQWNydcrA%2FaPbzw%2Bkxuc7gxJsnKxOZtKF6r%2F0%2FVRk%2BgtKORzSX0YCsPMXwRPxYevaGqCWSdgZ3Zhi8R%2BJCEo65gYyMFqfyTEatVoDCjSNdBmFjnjMJaCbo%2FnEekWZnZDSWUtBvAWMHH3ywbplMl2uctEGqW637LqL96f%2BKfZNcig8NNSiBm%2BSA8ab21nGe18ZdpyV4kUXAFLeEvyIyVYox96GxM8bhbwv%2FBNSCu1zsh9UJDwX9gIUYTrvnHqekatteMINxeP5810%2BCVcMPAPu8BtcwQ8nespeUoUb4v7X3J8rycZxXFK99MA6T1vZDX44aF5d9R91SoxMP4ponMd5BNQzmfbtujK2ZZQoIudKLTmY9hzYDYnCrfClOtzjc60ofNuAOfisk9mwaAfShFb9ZPqZlWpVUd6h7fkmm4plh4feeyM%2BAXbHPtVpqj8PLv1BeCWhMIpl%2Fa08uEMpZhhbC0p4jKDA%2BvClvMlUXQjcknWHujl5Sxd3CnjZeXoofm57efj%2B1RxoyoqgbbFvq6oLhmN%2FuAEeJMbQaALmLf6udv2sq7ya21jt0Js6z79%2BXOvoMvIDulzNBGBas0C%2B4YTqX41zw1olhft3v9EjDqfu3zYHYAIpUx4SmMM%2BztsoGOqUBhiomektN9pi9Xlelqy2yPtT5OYHV8FAirj3UHHRTPXVScY8Ex%2F3L1VdyynstjUx%2FDAHduQFmqX%2BSPm3of4corBRhZGC%2FGu6NsFmYbcm8vB1pn5VAE7I9oeaLX43fwSU%2F47I0PD33p9u0hEIqtWNbUHh7rU%2FBvhNEz4p1Ppj6Z48y3XgjGmdgtKzCx%2Bn%2Fs2pPC4M%2BrPmu%2BpEf98jGerxBLJAADkJh&X-Amz-Signature=4e6667e663e571318bb8de09bdea645f61f55d2b81cb512e391d67b38e7a198a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCBBFFH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDqbOIdYbV45Mf%2Bs1UDgNVNnO9sIDt%2FFAY%2FL0d5SZjlvAIgF0NwTdtDEOqW5vm7PbB2HJw7pgu8MYE4ih479eMFWeEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCVBrEj9WVhA131i3ircAwBQP0wQWNydcrA%2FaPbzw%2Bkxuc7gxJsnKxOZtKF6r%2F0%2FVRk%2BgtKORzSX0YCsPMXwRPxYevaGqCWSdgZ3Zhi8R%2BJCEo65gYyMFqfyTEatVoDCjSNdBmFjnjMJaCbo%2FnEekWZnZDSWUtBvAWMHH3ywbplMl2uctEGqW637LqL96f%2BKfZNcig8NNSiBm%2BSA8ab21nGe18ZdpyV4kUXAFLeEvyIyVYox96GxM8bhbwv%2FBNSCu1zsh9UJDwX9gIUYTrvnHqekatteMINxeP5810%2BCVcMPAPu8BtcwQ8nespeUoUb4v7X3J8rycZxXFK99MA6T1vZDX44aF5d9R91SoxMP4ponMd5BNQzmfbtujK2ZZQoIudKLTmY9hzYDYnCrfClOtzjc60ofNuAOfisk9mwaAfShFb9ZPqZlWpVUd6h7fkmm4plh4feeyM%2BAXbHPtVpqj8PLv1BeCWhMIpl%2Fa08uEMpZhhbC0p4jKDA%2BvClvMlUXQjcknWHujl5Sxd3CnjZeXoofm57efj%2B1RxoyoqgbbFvq6oLhmN%2FuAEeJMbQaALmLf6udv2sq7ya21jt0Js6z79%2BXOvoMvIDulzNBGBas0C%2B4YTqX41zw1olhft3v9EjDqfu3zYHYAIpUx4SmMM%2BztsoGOqUBhiomektN9pi9Xlelqy2yPtT5OYHV8FAirj3UHHRTPXVScY8Ex%2F3L1VdyynstjUx%2FDAHduQFmqX%2BSPm3of4corBRhZGC%2FGu6NsFmYbcm8vB1pn5VAE7I9oeaLX43fwSU%2F47I0PD33p9u0hEIqtWNbUHh7rU%2FBvhNEz4p1Ppj6Z48y3XgjGmdgtKzCx%2Bn%2Fs2pPC4M%2BrPmu%2BpEf98jGerxBLJAADkJh&X-Amz-Signature=c1b2b362ebd2d78ccfff11ed7c613eb975b6d2a0f0e660b4bef1bbac8046079d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCBBFFH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDqbOIdYbV45Mf%2Bs1UDgNVNnO9sIDt%2FFAY%2FL0d5SZjlvAIgF0NwTdtDEOqW5vm7PbB2HJw7pgu8MYE4ih479eMFWeEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCVBrEj9WVhA131i3ircAwBQP0wQWNydcrA%2FaPbzw%2Bkxuc7gxJsnKxOZtKF6r%2F0%2FVRk%2BgtKORzSX0YCsPMXwRPxYevaGqCWSdgZ3Zhi8R%2BJCEo65gYyMFqfyTEatVoDCjSNdBmFjnjMJaCbo%2FnEekWZnZDSWUtBvAWMHH3ywbplMl2uctEGqW637LqL96f%2BKfZNcig8NNSiBm%2BSA8ab21nGe18ZdpyV4kUXAFLeEvyIyVYox96GxM8bhbwv%2FBNSCu1zsh9UJDwX9gIUYTrvnHqekatteMINxeP5810%2BCVcMPAPu8BtcwQ8nespeUoUb4v7X3J8rycZxXFK99MA6T1vZDX44aF5d9R91SoxMP4ponMd5BNQzmfbtujK2ZZQoIudKLTmY9hzYDYnCrfClOtzjc60ofNuAOfisk9mwaAfShFb9ZPqZlWpVUd6h7fkmm4plh4feeyM%2BAXbHPtVpqj8PLv1BeCWhMIpl%2Fa08uEMpZhhbC0p4jKDA%2BvClvMlUXQjcknWHujl5Sxd3CnjZeXoofm57efj%2B1RxoyoqgbbFvq6oLhmN%2FuAEeJMbQaALmLf6udv2sq7ya21jt0Js6z79%2BXOvoMvIDulzNBGBas0C%2B4YTqX41zw1olhft3v9EjDqfu3zYHYAIpUx4SmMM%2BztsoGOqUBhiomektN9pi9Xlelqy2yPtT5OYHV8FAirj3UHHRTPXVScY8Ex%2F3L1VdyynstjUx%2FDAHduQFmqX%2BSPm3of4corBRhZGC%2FGu6NsFmYbcm8vB1pn5VAE7I9oeaLX43fwSU%2F47I0PD33p9u0hEIqtWNbUHh7rU%2FBvhNEz4p1Ppj6Z48y3XgjGmdgtKzCx%2Bn%2Fs2pPC4M%2BrPmu%2BpEf98jGerxBLJAADkJh&X-Amz-Signature=78a436df349ce8250b3152236a455e015cc733cbafeb0215969de188ad9d7d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCBBFFH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDqbOIdYbV45Mf%2Bs1UDgNVNnO9sIDt%2FFAY%2FL0d5SZjlvAIgF0NwTdtDEOqW5vm7PbB2HJw7pgu8MYE4ih479eMFWeEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCVBrEj9WVhA131i3ircAwBQP0wQWNydcrA%2FaPbzw%2Bkxuc7gxJsnKxOZtKF6r%2F0%2FVRk%2BgtKORzSX0YCsPMXwRPxYevaGqCWSdgZ3Zhi8R%2BJCEo65gYyMFqfyTEatVoDCjSNdBmFjnjMJaCbo%2FnEekWZnZDSWUtBvAWMHH3ywbplMl2uctEGqW637LqL96f%2BKfZNcig8NNSiBm%2BSA8ab21nGe18ZdpyV4kUXAFLeEvyIyVYox96GxM8bhbwv%2FBNSCu1zsh9UJDwX9gIUYTrvnHqekatteMINxeP5810%2BCVcMPAPu8BtcwQ8nespeUoUb4v7X3J8rycZxXFK99MA6T1vZDX44aF5d9R91SoxMP4ponMd5BNQzmfbtujK2ZZQoIudKLTmY9hzYDYnCrfClOtzjc60ofNuAOfisk9mwaAfShFb9ZPqZlWpVUd6h7fkmm4plh4feeyM%2BAXbHPtVpqj8PLv1BeCWhMIpl%2Fa08uEMpZhhbC0p4jKDA%2BvClvMlUXQjcknWHujl5Sxd3CnjZeXoofm57efj%2B1RxoyoqgbbFvq6oLhmN%2FuAEeJMbQaALmLf6udv2sq7ya21jt0Js6z79%2BXOvoMvIDulzNBGBas0C%2B4YTqX41zw1olhft3v9EjDqfu3zYHYAIpUx4SmMM%2BztsoGOqUBhiomektN9pi9Xlelqy2yPtT5OYHV8FAirj3UHHRTPXVScY8Ex%2F3L1VdyynstjUx%2FDAHduQFmqX%2BSPm3of4corBRhZGC%2FGu6NsFmYbcm8vB1pn5VAE7I9oeaLX43fwSU%2F47I0PD33p9u0hEIqtWNbUHh7rU%2FBvhNEz4p1Ppj6Z48y3XgjGmdgtKzCx%2Bn%2Fs2pPC4M%2BrPmu%2BpEf98jGerxBLJAADkJh&X-Amz-Signature=3ac5b6ef112fe349cc79caba4a6f1421930cd728a84cced8bde5a39a9799a8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCBBFFH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDqbOIdYbV45Mf%2Bs1UDgNVNnO9sIDt%2FFAY%2FL0d5SZjlvAIgF0NwTdtDEOqW5vm7PbB2HJw7pgu8MYE4ih479eMFWeEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCVBrEj9WVhA131i3ircAwBQP0wQWNydcrA%2FaPbzw%2Bkxuc7gxJsnKxOZtKF6r%2F0%2FVRk%2BgtKORzSX0YCsPMXwRPxYevaGqCWSdgZ3Zhi8R%2BJCEo65gYyMFqfyTEatVoDCjSNdBmFjnjMJaCbo%2FnEekWZnZDSWUtBvAWMHH3ywbplMl2uctEGqW637LqL96f%2BKfZNcig8NNSiBm%2BSA8ab21nGe18ZdpyV4kUXAFLeEvyIyVYox96GxM8bhbwv%2FBNSCu1zsh9UJDwX9gIUYTrvnHqekatteMINxeP5810%2BCVcMPAPu8BtcwQ8nespeUoUb4v7X3J8rycZxXFK99MA6T1vZDX44aF5d9R91SoxMP4ponMd5BNQzmfbtujK2ZZQoIudKLTmY9hzYDYnCrfClOtzjc60ofNuAOfisk9mwaAfShFb9ZPqZlWpVUd6h7fkmm4plh4feeyM%2BAXbHPtVpqj8PLv1BeCWhMIpl%2Fa08uEMpZhhbC0p4jKDA%2BvClvMlUXQjcknWHujl5Sxd3CnjZeXoofm57efj%2B1RxoyoqgbbFvq6oLhmN%2FuAEeJMbQaALmLf6udv2sq7ya21jt0Js6z79%2BXOvoMvIDulzNBGBas0C%2B4YTqX41zw1olhft3v9EjDqfu3zYHYAIpUx4SmMM%2BztsoGOqUBhiomektN9pi9Xlelqy2yPtT5OYHV8FAirj3UHHRTPXVScY8Ex%2F3L1VdyynstjUx%2FDAHduQFmqX%2BSPm3of4corBRhZGC%2FGu6NsFmYbcm8vB1pn5VAE7I9oeaLX43fwSU%2F47I0PD33p9u0hEIqtWNbUHh7rU%2FBvhNEz4p1Ppj6Z48y3XgjGmdgtKzCx%2Bn%2Fs2pPC4M%2BrPmu%2BpEf98jGerxBLJAADkJh&X-Amz-Signature=b819647739a197bd6c2a4664e15ceaff6e3da83217d2879f6f84f975d16cd0e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCBBFFH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDqbOIdYbV45Mf%2Bs1UDgNVNnO9sIDt%2FFAY%2FL0d5SZjlvAIgF0NwTdtDEOqW5vm7PbB2HJw7pgu8MYE4ih479eMFWeEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCVBrEj9WVhA131i3ircAwBQP0wQWNydcrA%2FaPbzw%2Bkxuc7gxJsnKxOZtKF6r%2F0%2FVRk%2BgtKORzSX0YCsPMXwRPxYevaGqCWSdgZ3Zhi8R%2BJCEo65gYyMFqfyTEatVoDCjSNdBmFjnjMJaCbo%2FnEekWZnZDSWUtBvAWMHH3ywbplMl2uctEGqW637LqL96f%2BKfZNcig8NNSiBm%2BSA8ab21nGe18ZdpyV4kUXAFLeEvyIyVYox96GxM8bhbwv%2FBNSCu1zsh9UJDwX9gIUYTrvnHqekatteMINxeP5810%2BCVcMPAPu8BtcwQ8nespeUoUb4v7X3J8rycZxXFK99MA6T1vZDX44aF5d9R91SoxMP4ponMd5BNQzmfbtujK2ZZQoIudKLTmY9hzYDYnCrfClOtzjc60ofNuAOfisk9mwaAfShFb9ZPqZlWpVUd6h7fkmm4plh4feeyM%2BAXbHPtVpqj8PLv1BeCWhMIpl%2Fa08uEMpZhhbC0p4jKDA%2BvClvMlUXQjcknWHujl5Sxd3CnjZeXoofm57efj%2B1RxoyoqgbbFvq6oLhmN%2FuAEeJMbQaALmLf6udv2sq7ya21jt0Js6z79%2BXOvoMvIDulzNBGBas0C%2B4YTqX41zw1olhft3v9EjDqfu3zYHYAIpUx4SmMM%2BztsoGOqUBhiomektN9pi9Xlelqy2yPtT5OYHV8FAirj3UHHRTPXVScY8Ex%2F3L1VdyynstjUx%2FDAHduQFmqX%2BSPm3of4corBRhZGC%2FGu6NsFmYbcm8vB1pn5VAE7I9oeaLX43fwSU%2F47I0PD33p9u0hEIqtWNbUHh7rU%2FBvhNEz4p1Ppj6Z48y3XgjGmdgtKzCx%2Bn%2Fs2pPC4M%2BrPmu%2BpEf98jGerxBLJAADkJh&X-Amz-Signature=f667368d691fcbd587c515c082c793709277eae5c07ac65e4b275cfee7b04c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

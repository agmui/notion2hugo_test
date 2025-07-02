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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JZMU2PX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp7nPlcjveoCnNCLuxjtNeusu%2BW4xEltkvLVMbcKSlpAiA67icgeyQa7gQSP4QOjbdM2tasMrD32dallurtkWXKoyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaWQm7m8mV1sN1sTVKtwDjmFig%2BPNWLTaqs34FuMOV%2B0ukkdf8d7W3V2CUBaUD2cRVLCqNRennysamOZsRR0dm0UoQUAHyk5vmmf6H44evjkRJM5Tzp4pEJvT%2FthdPJmSilQmEWg8g47Fx5O%2FWtNstktZ7DRB9FGLZD%2Ba4j3lT3bzofTyAs3sfqjJOapumtDmq8dvw%2B5PLFKfO10ZpR8O5w%2Byn1%2B2nEID0bGTjG4qzgoyiYQcV9vX%2FZcljlaO6swlhvzW9iNJRyG6zuAbPPtZGCCwSCPCkqkUpqO2jBtCEVxOFzqLtwcb0bcn6KfwFTl2k8m1vubBzNf%2FT0BkUt%2BjL4zer%2FGTO%2FCZ3EJ7KXvQW9k6PiVtHXWaRnwDAE%2FWcc7Si56MiE0JOVnpHerncskgCYDdfwKKQAQEyDotwZnOaqmxGXWPBZHr1YI9UidBT7yW7ogjuoE5lf0zMsHI89h1Awf0TIrpC%2FDU0b%2BheAZ0gq70GAdsg%2FQA3IphkNgjQjEtbTorqO38IV6tVBNGGQp7FBeeEYz4hsVOXA1aE82YHwdvqnK%2FMYpkBJXVloOzMbEptxP%2B%2B%2BRei9M%2F%2BV0MgHhmYqgzPVEE2Kwbme9xbZr9cFeDyylpTlY3SExXXo4UECLWCztpcc3o96a47HQwh%2BKTwwY6pgG6AV4s3MAUCAqNjFndBoL1UiFZga3SC5W4OLusKsswjwZteYYjS1Yj18Us6%2B9XaBWsrgT2T%2BzEjOrO%2BCUqTTIw5K7hrd7PytjFYyWwaVPeAxwXGeHtYIrlVfDQxcoWxofPAH2Rp3p9UBINzfjh0lzfO6Ux2fhykT%2FUbOzMxpXhXXigwHB7exxJZHyvp3XeoiZM4%2BySCqqmX3tc%2FHb04v8S%2FdB5CJ0z&X-Amz-Signature=a05c737979afec0c9c4b8333738fb6cad59e0835af3dacda5ef8dfc853ba654c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JZMU2PX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp7nPlcjveoCnNCLuxjtNeusu%2BW4xEltkvLVMbcKSlpAiA67icgeyQa7gQSP4QOjbdM2tasMrD32dallurtkWXKoyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaWQm7m8mV1sN1sTVKtwDjmFig%2BPNWLTaqs34FuMOV%2B0ukkdf8d7W3V2CUBaUD2cRVLCqNRennysamOZsRR0dm0UoQUAHyk5vmmf6H44evjkRJM5Tzp4pEJvT%2FthdPJmSilQmEWg8g47Fx5O%2FWtNstktZ7DRB9FGLZD%2Ba4j3lT3bzofTyAs3sfqjJOapumtDmq8dvw%2B5PLFKfO10ZpR8O5w%2Byn1%2B2nEID0bGTjG4qzgoyiYQcV9vX%2FZcljlaO6swlhvzW9iNJRyG6zuAbPPtZGCCwSCPCkqkUpqO2jBtCEVxOFzqLtwcb0bcn6KfwFTl2k8m1vubBzNf%2FT0BkUt%2BjL4zer%2FGTO%2FCZ3EJ7KXvQW9k6PiVtHXWaRnwDAE%2FWcc7Si56MiE0JOVnpHerncskgCYDdfwKKQAQEyDotwZnOaqmxGXWPBZHr1YI9UidBT7yW7ogjuoE5lf0zMsHI89h1Awf0TIrpC%2FDU0b%2BheAZ0gq70GAdsg%2FQA3IphkNgjQjEtbTorqO38IV6tVBNGGQp7FBeeEYz4hsVOXA1aE82YHwdvqnK%2FMYpkBJXVloOzMbEptxP%2B%2B%2BRei9M%2F%2BV0MgHhmYqgzPVEE2Kwbme9xbZr9cFeDyylpTlY3SExXXo4UECLWCztpcc3o96a47HQwh%2BKTwwY6pgG6AV4s3MAUCAqNjFndBoL1UiFZga3SC5W4OLusKsswjwZteYYjS1Yj18Us6%2B9XaBWsrgT2T%2BzEjOrO%2BCUqTTIw5K7hrd7PytjFYyWwaVPeAxwXGeHtYIrlVfDQxcoWxofPAH2Rp3p9UBINzfjh0lzfO6Ux2fhykT%2FUbOzMxpXhXXigwHB7exxJZHyvp3XeoiZM4%2BySCqqmX3tc%2FHb04v8S%2FdB5CJ0z&X-Amz-Signature=c6c3e0a1906aa2e94a752ef93d3065a4eee2800f675b25795c979e318e63ddd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JZMU2PX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp7nPlcjveoCnNCLuxjtNeusu%2BW4xEltkvLVMbcKSlpAiA67icgeyQa7gQSP4QOjbdM2tasMrD32dallurtkWXKoyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaWQm7m8mV1sN1sTVKtwDjmFig%2BPNWLTaqs34FuMOV%2B0ukkdf8d7W3V2CUBaUD2cRVLCqNRennysamOZsRR0dm0UoQUAHyk5vmmf6H44evjkRJM5Tzp4pEJvT%2FthdPJmSilQmEWg8g47Fx5O%2FWtNstktZ7DRB9FGLZD%2Ba4j3lT3bzofTyAs3sfqjJOapumtDmq8dvw%2B5PLFKfO10ZpR8O5w%2Byn1%2B2nEID0bGTjG4qzgoyiYQcV9vX%2FZcljlaO6swlhvzW9iNJRyG6zuAbPPtZGCCwSCPCkqkUpqO2jBtCEVxOFzqLtwcb0bcn6KfwFTl2k8m1vubBzNf%2FT0BkUt%2BjL4zer%2FGTO%2FCZ3EJ7KXvQW9k6PiVtHXWaRnwDAE%2FWcc7Si56MiE0JOVnpHerncskgCYDdfwKKQAQEyDotwZnOaqmxGXWPBZHr1YI9UidBT7yW7ogjuoE5lf0zMsHI89h1Awf0TIrpC%2FDU0b%2BheAZ0gq70GAdsg%2FQA3IphkNgjQjEtbTorqO38IV6tVBNGGQp7FBeeEYz4hsVOXA1aE82YHwdvqnK%2FMYpkBJXVloOzMbEptxP%2B%2B%2BRei9M%2F%2BV0MgHhmYqgzPVEE2Kwbme9xbZr9cFeDyylpTlY3SExXXo4UECLWCztpcc3o96a47HQwh%2BKTwwY6pgG6AV4s3MAUCAqNjFndBoL1UiFZga3SC5W4OLusKsswjwZteYYjS1Yj18Us6%2B9XaBWsrgT2T%2BzEjOrO%2BCUqTTIw5K7hrd7PytjFYyWwaVPeAxwXGeHtYIrlVfDQxcoWxofPAH2Rp3p9UBINzfjh0lzfO6Ux2fhykT%2FUbOzMxpXhXXigwHB7exxJZHyvp3XeoiZM4%2BySCqqmX3tc%2FHb04v8S%2FdB5CJ0z&X-Amz-Signature=61bbefc2d579b74f843a225c4c5638699d3c797ec576f51c2a61ac1151cec5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JZMU2PX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp7nPlcjveoCnNCLuxjtNeusu%2BW4xEltkvLVMbcKSlpAiA67icgeyQa7gQSP4QOjbdM2tasMrD32dallurtkWXKoyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaWQm7m8mV1sN1sTVKtwDjmFig%2BPNWLTaqs34FuMOV%2B0ukkdf8d7W3V2CUBaUD2cRVLCqNRennysamOZsRR0dm0UoQUAHyk5vmmf6H44evjkRJM5Tzp4pEJvT%2FthdPJmSilQmEWg8g47Fx5O%2FWtNstktZ7DRB9FGLZD%2Ba4j3lT3bzofTyAs3sfqjJOapumtDmq8dvw%2B5PLFKfO10ZpR8O5w%2Byn1%2B2nEID0bGTjG4qzgoyiYQcV9vX%2FZcljlaO6swlhvzW9iNJRyG6zuAbPPtZGCCwSCPCkqkUpqO2jBtCEVxOFzqLtwcb0bcn6KfwFTl2k8m1vubBzNf%2FT0BkUt%2BjL4zer%2FGTO%2FCZ3EJ7KXvQW9k6PiVtHXWaRnwDAE%2FWcc7Si56MiE0JOVnpHerncskgCYDdfwKKQAQEyDotwZnOaqmxGXWPBZHr1YI9UidBT7yW7ogjuoE5lf0zMsHI89h1Awf0TIrpC%2FDU0b%2BheAZ0gq70GAdsg%2FQA3IphkNgjQjEtbTorqO38IV6tVBNGGQp7FBeeEYz4hsVOXA1aE82YHwdvqnK%2FMYpkBJXVloOzMbEptxP%2B%2B%2BRei9M%2F%2BV0MgHhmYqgzPVEE2Kwbme9xbZr9cFeDyylpTlY3SExXXo4UECLWCztpcc3o96a47HQwh%2BKTwwY6pgG6AV4s3MAUCAqNjFndBoL1UiFZga3SC5W4OLusKsswjwZteYYjS1Yj18Us6%2B9XaBWsrgT2T%2BzEjOrO%2BCUqTTIw5K7hrd7PytjFYyWwaVPeAxwXGeHtYIrlVfDQxcoWxofPAH2Rp3p9UBINzfjh0lzfO6Ux2fhykT%2FUbOzMxpXhXXigwHB7exxJZHyvp3XeoiZM4%2BySCqqmX3tc%2FHb04v8S%2FdB5CJ0z&X-Amz-Signature=5af3cbdd33505d55b0acc3304ffbe5120f5765df4407d2c6ba7dcbcd2c3219b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JZMU2PX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp7nPlcjveoCnNCLuxjtNeusu%2BW4xEltkvLVMbcKSlpAiA67icgeyQa7gQSP4QOjbdM2tasMrD32dallurtkWXKoyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaWQm7m8mV1sN1sTVKtwDjmFig%2BPNWLTaqs34FuMOV%2B0ukkdf8d7W3V2CUBaUD2cRVLCqNRennysamOZsRR0dm0UoQUAHyk5vmmf6H44evjkRJM5Tzp4pEJvT%2FthdPJmSilQmEWg8g47Fx5O%2FWtNstktZ7DRB9FGLZD%2Ba4j3lT3bzofTyAs3sfqjJOapumtDmq8dvw%2B5PLFKfO10ZpR8O5w%2Byn1%2B2nEID0bGTjG4qzgoyiYQcV9vX%2FZcljlaO6swlhvzW9iNJRyG6zuAbPPtZGCCwSCPCkqkUpqO2jBtCEVxOFzqLtwcb0bcn6KfwFTl2k8m1vubBzNf%2FT0BkUt%2BjL4zer%2FGTO%2FCZ3EJ7KXvQW9k6PiVtHXWaRnwDAE%2FWcc7Si56MiE0JOVnpHerncskgCYDdfwKKQAQEyDotwZnOaqmxGXWPBZHr1YI9UidBT7yW7ogjuoE5lf0zMsHI89h1Awf0TIrpC%2FDU0b%2BheAZ0gq70GAdsg%2FQA3IphkNgjQjEtbTorqO38IV6tVBNGGQp7FBeeEYz4hsVOXA1aE82YHwdvqnK%2FMYpkBJXVloOzMbEptxP%2B%2B%2BRei9M%2F%2BV0MgHhmYqgzPVEE2Kwbme9xbZr9cFeDyylpTlY3SExXXo4UECLWCztpcc3o96a47HQwh%2BKTwwY6pgG6AV4s3MAUCAqNjFndBoL1UiFZga3SC5W4OLusKsswjwZteYYjS1Yj18Us6%2B9XaBWsrgT2T%2BzEjOrO%2BCUqTTIw5K7hrd7PytjFYyWwaVPeAxwXGeHtYIrlVfDQxcoWxofPAH2Rp3p9UBINzfjh0lzfO6Ux2fhykT%2FUbOzMxpXhXXigwHB7exxJZHyvp3XeoiZM4%2BySCqqmX3tc%2FHb04v8S%2FdB5CJ0z&X-Amz-Signature=4f2b83261b092fb79fde7c0a000cdff8400e3d8e0b8bd2764fd997f8eaaa00bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JZMU2PX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp7nPlcjveoCnNCLuxjtNeusu%2BW4xEltkvLVMbcKSlpAiA67icgeyQa7gQSP4QOjbdM2tasMrD32dallurtkWXKoyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaWQm7m8mV1sN1sTVKtwDjmFig%2BPNWLTaqs34FuMOV%2B0ukkdf8d7W3V2CUBaUD2cRVLCqNRennysamOZsRR0dm0UoQUAHyk5vmmf6H44evjkRJM5Tzp4pEJvT%2FthdPJmSilQmEWg8g47Fx5O%2FWtNstktZ7DRB9FGLZD%2Ba4j3lT3bzofTyAs3sfqjJOapumtDmq8dvw%2B5PLFKfO10ZpR8O5w%2Byn1%2B2nEID0bGTjG4qzgoyiYQcV9vX%2FZcljlaO6swlhvzW9iNJRyG6zuAbPPtZGCCwSCPCkqkUpqO2jBtCEVxOFzqLtwcb0bcn6KfwFTl2k8m1vubBzNf%2FT0BkUt%2BjL4zer%2FGTO%2FCZ3EJ7KXvQW9k6PiVtHXWaRnwDAE%2FWcc7Si56MiE0JOVnpHerncskgCYDdfwKKQAQEyDotwZnOaqmxGXWPBZHr1YI9UidBT7yW7ogjuoE5lf0zMsHI89h1Awf0TIrpC%2FDU0b%2BheAZ0gq70GAdsg%2FQA3IphkNgjQjEtbTorqO38IV6tVBNGGQp7FBeeEYz4hsVOXA1aE82YHwdvqnK%2FMYpkBJXVloOzMbEptxP%2B%2B%2BRei9M%2F%2BV0MgHhmYqgzPVEE2Kwbme9xbZr9cFeDyylpTlY3SExXXo4UECLWCztpcc3o96a47HQwh%2BKTwwY6pgG6AV4s3MAUCAqNjFndBoL1UiFZga3SC5W4OLusKsswjwZteYYjS1Yj18Us6%2B9XaBWsrgT2T%2BzEjOrO%2BCUqTTIw5K7hrd7PytjFYyWwaVPeAxwXGeHtYIrlVfDQxcoWxofPAH2Rp3p9UBINzfjh0lzfO6Ux2fhykT%2FUbOzMxpXhXXigwHB7exxJZHyvp3XeoiZM4%2BySCqqmX3tc%2FHb04v8S%2FdB5CJ0z&X-Amz-Signature=9a855183cc6241c51f204691c2a0f3ac4a3e90a4ff47b97a1c143c0f8f93ac00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JZMU2PX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp7nPlcjveoCnNCLuxjtNeusu%2BW4xEltkvLVMbcKSlpAiA67icgeyQa7gQSP4QOjbdM2tasMrD32dallurtkWXKoyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaWQm7m8mV1sN1sTVKtwDjmFig%2BPNWLTaqs34FuMOV%2B0ukkdf8d7W3V2CUBaUD2cRVLCqNRennysamOZsRR0dm0UoQUAHyk5vmmf6H44evjkRJM5Tzp4pEJvT%2FthdPJmSilQmEWg8g47Fx5O%2FWtNstktZ7DRB9FGLZD%2Ba4j3lT3bzofTyAs3sfqjJOapumtDmq8dvw%2B5PLFKfO10ZpR8O5w%2Byn1%2B2nEID0bGTjG4qzgoyiYQcV9vX%2FZcljlaO6swlhvzW9iNJRyG6zuAbPPtZGCCwSCPCkqkUpqO2jBtCEVxOFzqLtwcb0bcn6KfwFTl2k8m1vubBzNf%2FT0BkUt%2BjL4zer%2FGTO%2FCZ3EJ7KXvQW9k6PiVtHXWaRnwDAE%2FWcc7Si56MiE0JOVnpHerncskgCYDdfwKKQAQEyDotwZnOaqmxGXWPBZHr1YI9UidBT7yW7ogjuoE5lf0zMsHI89h1Awf0TIrpC%2FDU0b%2BheAZ0gq70GAdsg%2FQA3IphkNgjQjEtbTorqO38IV6tVBNGGQp7FBeeEYz4hsVOXA1aE82YHwdvqnK%2FMYpkBJXVloOzMbEptxP%2B%2B%2BRei9M%2F%2BV0MgHhmYqgzPVEE2Kwbme9xbZr9cFeDyylpTlY3SExXXo4UECLWCztpcc3o96a47HQwh%2BKTwwY6pgG6AV4s3MAUCAqNjFndBoL1UiFZga3SC5W4OLusKsswjwZteYYjS1Yj18Us6%2B9XaBWsrgT2T%2BzEjOrO%2BCUqTTIw5K7hrd7PytjFYyWwaVPeAxwXGeHtYIrlVfDQxcoWxofPAH2Rp3p9UBINzfjh0lzfO6Ux2fhykT%2FUbOzMxpXhXXigwHB7exxJZHyvp3XeoiZM4%2BySCqqmX3tc%2FHb04v8S%2FdB5CJ0z&X-Amz-Signature=f108d422ff7d49016e1c6d857fcd114022346ea428575471b88d710907ac91b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JZMU2PX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp7nPlcjveoCnNCLuxjtNeusu%2BW4xEltkvLVMbcKSlpAiA67icgeyQa7gQSP4QOjbdM2tasMrD32dallurtkWXKoyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaWQm7m8mV1sN1sTVKtwDjmFig%2BPNWLTaqs34FuMOV%2B0ukkdf8d7W3V2CUBaUD2cRVLCqNRennysamOZsRR0dm0UoQUAHyk5vmmf6H44evjkRJM5Tzp4pEJvT%2FthdPJmSilQmEWg8g47Fx5O%2FWtNstktZ7DRB9FGLZD%2Ba4j3lT3bzofTyAs3sfqjJOapumtDmq8dvw%2B5PLFKfO10ZpR8O5w%2Byn1%2B2nEID0bGTjG4qzgoyiYQcV9vX%2FZcljlaO6swlhvzW9iNJRyG6zuAbPPtZGCCwSCPCkqkUpqO2jBtCEVxOFzqLtwcb0bcn6KfwFTl2k8m1vubBzNf%2FT0BkUt%2BjL4zer%2FGTO%2FCZ3EJ7KXvQW9k6PiVtHXWaRnwDAE%2FWcc7Si56MiE0JOVnpHerncskgCYDdfwKKQAQEyDotwZnOaqmxGXWPBZHr1YI9UidBT7yW7ogjuoE5lf0zMsHI89h1Awf0TIrpC%2FDU0b%2BheAZ0gq70GAdsg%2FQA3IphkNgjQjEtbTorqO38IV6tVBNGGQp7FBeeEYz4hsVOXA1aE82YHwdvqnK%2FMYpkBJXVloOzMbEptxP%2B%2B%2BRei9M%2F%2BV0MgHhmYqgzPVEE2Kwbme9xbZr9cFeDyylpTlY3SExXXo4UECLWCztpcc3o96a47HQwh%2BKTwwY6pgG6AV4s3MAUCAqNjFndBoL1UiFZga3SC5W4OLusKsswjwZteYYjS1Yj18Us6%2B9XaBWsrgT2T%2BzEjOrO%2BCUqTTIw5K7hrd7PytjFYyWwaVPeAxwXGeHtYIrlVfDQxcoWxofPAH2Rp3p9UBINzfjh0lzfO6Ux2fhykT%2FUbOzMxpXhXXigwHB7exxJZHyvp3XeoiZM4%2BySCqqmX3tc%2FHb04v8S%2FdB5CJ0z&X-Amz-Signature=4384f3d948833f73eba30409aa3224e3848bda01bfec907c0880f5cccf8ac880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

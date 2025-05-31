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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3ZVS5H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDa8TTIbB7gksXHDkhRHLIV6FenORyF9GsAa0753PmAIhAMvdCwZeFfoI4prbU%2Bf05vWh4t28SPTy5ho6%2BycjaRaZKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD6kDe%2B2Vrv%2BfJT68q3AOZ1WUvsxK4s38hQ7U4qhTw8rvp7BqJ4yN6zNP4%2Fs9FzjnGzU3Cjydh3I2OSclVjShsdwcyERbS%2BwQRkeeTSG%2BrjobFFFqJkVDkS%2FQb24yJJQO1Cv%2B5DjBNu7PYFInEXbpA22mjYjfnH8RY4D9XK090UkWMGEZvZTVosslYwPmQ3HCf6VW2CoLcS37z%2FvcaVFW0ZFo5Bw9EgojEVyHH7%2FetBaxgIgpKLhUjSdk6gy8HZpE2eah7lWovRZvFkemhcPoHw%2BzixqTpI7mgk4RuCXWlTwLfp7pa2%2FV5jnn8VzwU9cDSdbjHPnPFw%2Boi4ADCLhQAsLTN2t3DDsJFkFuC7GIjW95MTtShLZs2TsqPV8m3lep1VTHrj4Qv2TbiMLlNrMfXWttffjemeO%2F%2FYuAFalwkCglEh1ZBkZNe%2FzCW4QE0pVCsV%2F%2FDXrljCqR0UPT2S%2F2cyWJx2RJqvGQU9kGKWwgVQj2HAV49H0MB3WH1LctureJLmo8TrbGxa67P6uzm9VOopH0Vrlbt%2FB%2FSUJc5%2FswqlHwBy7kiBTFqHpp267%2FoQ4gqt58agJbrkpOECVtpfwuQ7IzA%2BW3zuZrvBoSI6q6TuEYWtxpspkD4VzwkvmF0Pk6VD7R5xA8QcrWamTDT5u3BBjqkAWAiFE2OvySN5VK%2Fl21HOerWJ11fmkTwxzeDVjZw2ARfBoUPsLZGp4g8uSrfvVuDKavKPEMdWaLBDMsT47P0bE9PFBTFJY59a8fyrVeUcUSGH%2BxzACQzQ5z3fOXxetrwPBb5FWO%2B%2FANjZwLRneg00xmpEoSqtokMz5iyY1CT6ar8RSCZifrhNXKJP3JdvNcv7ApABCDDtCBwZTwbcR7QueGnFaty&X-Amz-Signature=52da7e8e524cdcccee56ac51437459b830889a64fe7ee8949f6102a6a7c875ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3ZVS5H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDa8TTIbB7gksXHDkhRHLIV6FenORyF9GsAa0753PmAIhAMvdCwZeFfoI4prbU%2Bf05vWh4t28SPTy5ho6%2BycjaRaZKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD6kDe%2B2Vrv%2BfJT68q3AOZ1WUvsxK4s38hQ7U4qhTw8rvp7BqJ4yN6zNP4%2Fs9FzjnGzU3Cjydh3I2OSclVjShsdwcyERbS%2BwQRkeeTSG%2BrjobFFFqJkVDkS%2FQb24yJJQO1Cv%2B5DjBNu7PYFInEXbpA22mjYjfnH8RY4D9XK090UkWMGEZvZTVosslYwPmQ3HCf6VW2CoLcS37z%2FvcaVFW0ZFo5Bw9EgojEVyHH7%2FetBaxgIgpKLhUjSdk6gy8HZpE2eah7lWovRZvFkemhcPoHw%2BzixqTpI7mgk4RuCXWlTwLfp7pa2%2FV5jnn8VzwU9cDSdbjHPnPFw%2Boi4ADCLhQAsLTN2t3DDsJFkFuC7GIjW95MTtShLZs2TsqPV8m3lep1VTHrj4Qv2TbiMLlNrMfXWttffjemeO%2F%2FYuAFalwkCglEh1ZBkZNe%2FzCW4QE0pVCsV%2F%2FDXrljCqR0UPT2S%2F2cyWJx2RJqvGQU9kGKWwgVQj2HAV49H0MB3WH1LctureJLmo8TrbGxa67P6uzm9VOopH0Vrlbt%2FB%2FSUJc5%2FswqlHwBy7kiBTFqHpp267%2FoQ4gqt58agJbrkpOECVtpfwuQ7IzA%2BW3zuZrvBoSI6q6TuEYWtxpspkD4VzwkvmF0Pk6VD7R5xA8QcrWamTDT5u3BBjqkAWAiFE2OvySN5VK%2Fl21HOerWJ11fmkTwxzeDVjZw2ARfBoUPsLZGp4g8uSrfvVuDKavKPEMdWaLBDMsT47P0bE9PFBTFJY59a8fyrVeUcUSGH%2BxzACQzQ5z3fOXxetrwPBb5FWO%2B%2FANjZwLRneg00xmpEoSqtokMz5iyY1CT6ar8RSCZifrhNXKJP3JdvNcv7ApABCDDtCBwZTwbcR7QueGnFaty&X-Amz-Signature=f1484902e1cbf243005eeab2b5a8d192fc5f1691c23c307becdd5b5111495409&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3ZVS5H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDa8TTIbB7gksXHDkhRHLIV6FenORyF9GsAa0753PmAIhAMvdCwZeFfoI4prbU%2Bf05vWh4t28SPTy5ho6%2BycjaRaZKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD6kDe%2B2Vrv%2BfJT68q3AOZ1WUvsxK4s38hQ7U4qhTw8rvp7BqJ4yN6zNP4%2Fs9FzjnGzU3Cjydh3I2OSclVjShsdwcyERbS%2BwQRkeeTSG%2BrjobFFFqJkVDkS%2FQb24yJJQO1Cv%2B5DjBNu7PYFInEXbpA22mjYjfnH8RY4D9XK090UkWMGEZvZTVosslYwPmQ3HCf6VW2CoLcS37z%2FvcaVFW0ZFo5Bw9EgojEVyHH7%2FetBaxgIgpKLhUjSdk6gy8HZpE2eah7lWovRZvFkemhcPoHw%2BzixqTpI7mgk4RuCXWlTwLfp7pa2%2FV5jnn8VzwU9cDSdbjHPnPFw%2Boi4ADCLhQAsLTN2t3DDsJFkFuC7GIjW95MTtShLZs2TsqPV8m3lep1VTHrj4Qv2TbiMLlNrMfXWttffjemeO%2F%2FYuAFalwkCglEh1ZBkZNe%2FzCW4QE0pVCsV%2F%2FDXrljCqR0UPT2S%2F2cyWJx2RJqvGQU9kGKWwgVQj2HAV49H0MB3WH1LctureJLmo8TrbGxa67P6uzm9VOopH0Vrlbt%2FB%2FSUJc5%2FswqlHwBy7kiBTFqHpp267%2FoQ4gqt58agJbrkpOECVtpfwuQ7IzA%2BW3zuZrvBoSI6q6TuEYWtxpspkD4VzwkvmF0Pk6VD7R5xA8QcrWamTDT5u3BBjqkAWAiFE2OvySN5VK%2Fl21HOerWJ11fmkTwxzeDVjZw2ARfBoUPsLZGp4g8uSrfvVuDKavKPEMdWaLBDMsT47P0bE9PFBTFJY59a8fyrVeUcUSGH%2BxzACQzQ5z3fOXxetrwPBb5FWO%2B%2FANjZwLRneg00xmpEoSqtokMz5iyY1CT6ar8RSCZifrhNXKJP3JdvNcv7ApABCDDtCBwZTwbcR7QueGnFaty&X-Amz-Signature=66649e1c45f54a0e5836aed9f4ce29f87bcf0ed9dea33a99468d8de43aac6e30&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3ZVS5H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDa8TTIbB7gksXHDkhRHLIV6FenORyF9GsAa0753PmAIhAMvdCwZeFfoI4prbU%2Bf05vWh4t28SPTy5ho6%2BycjaRaZKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD6kDe%2B2Vrv%2BfJT68q3AOZ1WUvsxK4s38hQ7U4qhTw8rvp7BqJ4yN6zNP4%2Fs9FzjnGzU3Cjydh3I2OSclVjShsdwcyERbS%2BwQRkeeTSG%2BrjobFFFqJkVDkS%2FQb24yJJQO1Cv%2B5DjBNu7PYFInEXbpA22mjYjfnH8RY4D9XK090UkWMGEZvZTVosslYwPmQ3HCf6VW2CoLcS37z%2FvcaVFW0ZFo5Bw9EgojEVyHH7%2FetBaxgIgpKLhUjSdk6gy8HZpE2eah7lWovRZvFkemhcPoHw%2BzixqTpI7mgk4RuCXWlTwLfp7pa2%2FV5jnn8VzwU9cDSdbjHPnPFw%2Boi4ADCLhQAsLTN2t3DDsJFkFuC7GIjW95MTtShLZs2TsqPV8m3lep1VTHrj4Qv2TbiMLlNrMfXWttffjemeO%2F%2FYuAFalwkCglEh1ZBkZNe%2FzCW4QE0pVCsV%2F%2FDXrljCqR0UPT2S%2F2cyWJx2RJqvGQU9kGKWwgVQj2HAV49H0MB3WH1LctureJLmo8TrbGxa67P6uzm9VOopH0Vrlbt%2FB%2FSUJc5%2FswqlHwBy7kiBTFqHpp267%2FoQ4gqt58agJbrkpOECVtpfwuQ7IzA%2BW3zuZrvBoSI6q6TuEYWtxpspkD4VzwkvmF0Pk6VD7R5xA8QcrWamTDT5u3BBjqkAWAiFE2OvySN5VK%2Fl21HOerWJ11fmkTwxzeDVjZw2ARfBoUPsLZGp4g8uSrfvVuDKavKPEMdWaLBDMsT47P0bE9PFBTFJY59a8fyrVeUcUSGH%2BxzACQzQ5z3fOXxetrwPBb5FWO%2B%2FANjZwLRneg00xmpEoSqtokMz5iyY1CT6ar8RSCZifrhNXKJP3JdvNcv7ApABCDDtCBwZTwbcR7QueGnFaty&X-Amz-Signature=c81ef245be3fe982a9903c80a3cc3420140846507d5855bc69ea7cbdbaf33cee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3ZVS5H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDa8TTIbB7gksXHDkhRHLIV6FenORyF9GsAa0753PmAIhAMvdCwZeFfoI4prbU%2Bf05vWh4t28SPTy5ho6%2BycjaRaZKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD6kDe%2B2Vrv%2BfJT68q3AOZ1WUvsxK4s38hQ7U4qhTw8rvp7BqJ4yN6zNP4%2Fs9FzjnGzU3Cjydh3I2OSclVjShsdwcyERbS%2BwQRkeeTSG%2BrjobFFFqJkVDkS%2FQb24yJJQO1Cv%2B5DjBNu7PYFInEXbpA22mjYjfnH8RY4D9XK090UkWMGEZvZTVosslYwPmQ3HCf6VW2CoLcS37z%2FvcaVFW0ZFo5Bw9EgojEVyHH7%2FetBaxgIgpKLhUjSdk6gy8HZpE2eah7lWovRZvFkemhcPoHw%2BzixqTpI7mgk4RuCXWlTwLfp7pa2%2FV5jnn8VzwU9cDSdbjHPnPFw%2Boi4ADCLhQAsLTN2t3DDsJFkFuC7GIjW95MTtShLZs2TsqPV8m3lep1VTHrj4Qv2TbiMLlNrMfXWttffjemeO%2F%2FYuAFalwkCglEh1ZBkZNe%2FzCW4QE0pVCsV%2F%2FDXrljCqR0UPT2S%2F2cyWJx2RJqvGQU9kGKWwgVQj2HAV49H0MB3WH1LctureJLmo8TrbGxa67P6uzm9VOopH0Vrlbt%2FB%2FSUJc5%2FswqlHwBy7kiBTFqHpp267%2FoQ4gqt58agJbrkpOECVtpfwuQ7IzA%2BW3zuZrvBoSI6q6TuEYWtxpspkD4VzwkvmF0Pk6VD7R5xA8QcrWamTDT5u3BBjqkAWAiFE2OvySN5VK%2Fl21HOerWJ11fmkTwxzeDVjZw2ARfBoUPsLZGp4g8uSrfvVuDKavKPEMdWaLBDMsT47P0bE9PFBTFJY59a8fyrVeUcUSGH%2BxzACQzQ5z3fOXxetrwPBb5FWO%2B%2FANjZwLRneg00xmpEoSqtokMz5iyY1CT6ar8RSCZifrhNXKJP3JdvNcv7ApABCDDtCBwZTwbcR7QueGnFaty&X-Amz-Signature=0b1736fced1984a00b4553febe870312b23d2403ff5922b9d46f16ef05d71077&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3ZVS5H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDa8TTIbB7gksXHDkhRHLIV6FenORyF9GsAa0753PmAIhAMvdCwZeFfoI4prbU%2Bf05vWh4t28SPTy5ho6%2BycjaRaZKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD6kDe%2B2Vrv%2BfJT68q3AOZ1WUvsxK4s38hQ7U4qhTw8rvp7BqJ4yN6zNP4%2Fs9FzjnGzU3Cjydh3I2OSclVjShsdwcyERbS%2BwQRkeeTSG%2BrjobFFFqJkVDkS%2FQb24yJJQO1Cv%2B5DjBNu7PYFInEXbpA22mjYjfnH8RY4D9XK090UkWMGEZvZTVosslYwPmQ3HCf6VW2CoLcS37z%2FvcaVFW0ZFo5Bw9EgojEVyHH7%2FetBaxgIgpKLhUjSdk6gy8HZpE2eah7lWovRZvFkemhcPoHw%2BzixqTpI7mgk4RuCXWlTwLfp7pa2%2FV5jnn8VzwU9cDSdbjHPnPFw%2Boi4ADCLhQAsLTN2t3DDsJFkFuC7GIjW95MTtShLZs2TsqPV8m3lep1VTHrj4Qv2TbiMLlNrMfXWttffjemeO%2F%2FYuAFalwkCglEh1ZBkZNe%2FzCW4QE0pVCsV%2F%2FDXrljCqR0UPT2S%2F2cyWJx2RJqvGQU9kGKWwgVQj2HAV49H0MB3WH1LctureJLmo8TrbGxa67P6uzm9VOopH0Vrlbt%2FB%2FSUJc5%2FswqlHwBy7kiBTFqHpp267%2FoQ4gqt58agJbrkpOECVtpfwuQ7IzA%2BW3zuZrvBoSI6q6TuEYWtxpspkD4VzwkvmF0Pk6VD7R5xA8QcrWamTDT5u3BBjqkAWAiFE2OvySN5VK%2Fl21HOerWJ11fmkTwxzeDVjZw2ARfBoUPsLZGp4g8uSrfvVuDKavKPEMdWaLBDMsT47P0bE9PFBTFJY59a8fyrVeUcUSGH%2BxzACQzQ5z3fOXxetrwPBb5FWO%2B%2FANjZwLRneg00xmpEoSqtokMz5iyY1CT6ar8RSCZifrhNXKJP3JdvNcv7ApABCDDtCBwZTwbcR7QueGnFaty&X-Amz-Signature=d6cf26533ad844270ff28c46166c8b6b9d8a39e0a6078f857a644a22adc8e5a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3ZVS5H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDa8TTIbB7gksXHDkhRHLIV6FenORyF9GsAa0753PmAIhAMvdCwZeFfoI4prbU%2Bf05vWh4t28SPTy5ho6%2BycjaRaZKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD6kDe%2B2Vrv%2BfJT68q3AOZ1WUvsxK4s38hQ7U4qhTw8rvp7BqJ4yN6zNP4%2Fs9FzjnGzU3Cjydh3I2OSclVjShsdwcyERbS%2BwQRkeeTSG%2BrjobFFFqJkVDkS%2FQb24yJJQO1Cv%2B5DjBNu7PYFInEXbpA22mjYjfnH8RY4D9XK090UkWMGEZvZTVosslYwPmQ3HCf6VW2CoLcS37z%2FvcaVFW0ZFo5Bw9EgojEVyHH7%2FetBaxgIgpKLhUjSdk6gy8HZpE2eah7lWovRZvFkemhcPoHw%2BzixqTpI7mgk4RuCXWlTwLfp7pa2%2FV5jnn8VzwU9cDSdbjHPnPFw%2Boi4ADCLhQAsLTN2t3DDsJFkFuC7GIjW95MTtShLZs2TsqPV8m3lep1VTHrj4Qv2TbiMLlNrMfXWttffjemeO%2F%2FYuAFalwkCglEh1ZBkZNe%2FzCW4QE0pVCsV%2F%2FDXrljCqR0UPT2S%2F2cyWJx2RJqvGQU9kGKWwgVQj2HAV49H0MB3WH1LctureJLmo8TrbGxa67P6uzm9VOopH0Vrlbt%2FB%2FSUJc5%2FswqlHwBy7kiBTFqHpp267%2FoQ4gqt58agJbrkpOECVtpfwuQ7IzA%2BW3zuZrvBoSI6q6TuEYWtxpspkD4VzwkvmF0Pk6VD7R5xA8QcrWamTDT5u3BBjqkAWAiFE2OvySN5VK%2Fl21HOerWJ11fmkTwxzeDVjZw2ARfBoUPsLZGp4g8uSrfvVuDKavKPEMdWaLBDMsT47P0bE9PFBTFJY59a8fyrVeUcUSGH%2BxzACQzQ5z3fOXxetrwPBb5FWO%2B%2FANjZwLRneg00xmpEoSqtokMz5iyY1CT6ar8RSCZifrhNXKJP3JdvNcv7ApABCDDtCBwZTwbcR7QueGnFaty&X-Amz-Signature=e9d3a06de40dfb259d056509cbe2525988fc380fd31e2e3c5b921511ec652f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3ZVS5H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FDa8TTIbB7gksXHDkhRHLIV6FenORyF9GsAa0753PmAIhAMvdCwZeFfoI4prbU%2Bf05vWh4t28SPTy5ho6%2BycjaRaZKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD6kDe%2B2Vrv%2BfJT68q3AOZ1WUvsxK4s38hQ7U4qhTw8rvp7BqJ4yN6zNP4%2Fs9FzjnGzU3Cjydh3I2OSclVjShsdwcyERbS%2BwQRkeeTSG%2BrjobFFFqJkVDkS%2FQb24yJJQO1Cv%2B5DjBNu7PYFInEXbpA22mjYjfnH8RY4D9XK090UkWMGEZvZTVosslYwPmQ3HCf6VW2CoLcS37z%2FvcaVFW0ZFo5Bw9EgojEVyHH7%2FetBaxgIgpKLhUjSdk6gy8HZpE2eah7lWovRZvFkemhcPoHw%2BzixqTpI7mgk4RuCXWlTwLfp7pa2%2FV5jnn8VzwU9cDSdbjHPnPFw%2Boi4ADCLhQAsLTN2t3DDsJFkFuC7GIjW95MTtShLZs2TsqPV8m3lep1VTHrj4Qv2TbiMLlNrMfXWttffjemeO%2F%2FYuAFalwkCglEh1ZBkZNe%2FzCW4QE0pVCsV%2F%2FDXrljCqR0UPT2S%2F2cyWJx2RJqvGQU9kGKWwgVQj2HAV49H0MB3WH1LctureJLmo8TrbGxa67P6uzm9VOopH0Vrlbt%2FB%2FSUJc5%2FswqlHwBy7kiBTFqHpp267%2FoQ4gqt58agJbrkpOECVtpfwuQ7IzA%2BW3zuZrvBoSI6q6TuEYWtxpspkD4VzwkvmF0Pk6VD7R5xA8QcrWamTDT5u3BBjqkAWAiFE2OvySN5VK%2Fl21HOerWJ11fmkTwxzeDVjZw2ARfBoUPsLZGp4g8uSrfvVuDKavKPEMdWaLBDMsT47P0bE9PFBTFJY59a8fyrVeUcUSGH%2BxzACQzQ5z3fOXxetrwPBb5FWO%2B%2FANjZwLRneg00xmpEoSqtokMz5iyY1CT6ar8RSCZifrhNXKJP3JdvNcv7ApABCDDtCBwZTwbcR7QueGnFaty&X-Amz-Signature=e08ea892d304d6449fd0d91ddadc27df887a7c48699133d2f8b35f873896f995&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

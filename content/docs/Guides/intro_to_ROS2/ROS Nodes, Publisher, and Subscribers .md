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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSJZCAE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHE99Ly102b%2FXsi83YIsjBfDicJi8qcqcEtQ8BxaJT%2FHAiEAn%2BYVeVapjGR1jCEZVMuVsg95k3HcRT0iCzrj1KS3%2FwAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3A6UngsdX7cRKdDCrcA%2F%2FqttlitIJdrfOZTbXaWFa%2BiYb6z2ytNbnbm0F4y72ZJDpUwAQsXXP8VBYsF7ZkPikIoG8HmVYL3ThNV%2Bk%2BnlCxZqRcd3%2FnBndFT0R0UMZ%2Fg2DKAk4IzYvfpMfEiP5V%2F6WaJbdBBdwGJDHZPqdlULa9zuup3JHSVYsCz70XHG3REJc7pml3%2B0XFeJsx6aml7hCDieVzle2H3ryFBgy0hYMAKWwTe5kgd4eklJg8p0guJOjW5v2T7sJP97Ff2EldKNmUDjex1h2JYtwoI%2BHxENsSv6Cua17Vp7ojpw0mn1LHmwE1eDx%2B%2FeC2wuwBZFzJ2moW7MIRgImdHSJbUrs4OWHuA4MlEl0zCuFFmdiQcLHE2kDM8WS7pfl1vd5Ut%2Bth9y9q99bEIm4DBxUjIWdtgdCcSS1f%2F5XbGGS5G5x5FeoBIV8AXvA%2Bmzkgov1i4TtFWtMq%2BByc%2Br3nu3yKialRFZk0hsUyiQFir8wBwlvgpeeHgDlUR3bgD4PeZEv48%2FINwtXVIcamHts6HrfCBNjYKmdPM5OyvFnuhtCOOdvO7HAeE2uzvmSKrYnJ8Jt14COABNiJHyUcSnSMzhyRGr8I49%2BfZanuVcgpSwJHklPrm5rVsU0zgWjtKHuFXqTTMPz178EGOqUBgjqka0l5OfvKRsuKGtQLST8k2ZM0vY8y2jOBQuq8e8NWqbR69TfbvA%2BM5M4sLjYlthQxKDSCYkRowtlqwnDMdhVUyAGmAtDbOVbXC0nl6t4l3vee8PuFw9WUBlX5Jguhv%2FhkGhHwuRcYyOHaAxm0fSGGXsjYPsXn4XTCDYFGJ85corXqa7F1MWaRxqkuO4HZOMFV6Jl1T1YjnvXBcZNzFzJf7V2x&X-Amz-Signature=6ca2383fee65066e815bd7ca4848a125748dfa7c92256bd8f023fe88ee999ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSJZCAE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHE99Ly102b%2FXsi83YIsjBfDicJi8qcqcEtQ8BxaJT%2FHAiEAn%2BYVeVapjGR1jCEZVMuVsg95k3HcRT0iCzrj1KS3%2FwAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3A6UngsdX7cRKdDCrcA%2F%2FqttlitIJdrfOZTbXaWFa%2BiYb6z2ytNbnbm0F4y72ZJDpUwAQsXXP8VBYsF7ZkPikIoG8HmVYL3ThNV%2Bk%2BnlCxZqRcd3%2FnBndFT0R0UMZ%2Fg2DKAk4IzYvfpMfEiP5V%2F6WaJbdBBdwGJDHZPqdlULa9zuup3JHSVYsCz70XHG3REJc7pml3%2B0XFeJsx6aml7hCDieVzle2H3ryFBgy0hYMAKWwTe5kgd4eklJg8p0guJOjW5v2T7sJP97Ff2EldKNmUDjex1h2JYtwoI%2BHxENsSv6Cua17Vp7ojpw0mn1LHmwE1eDx%2B%2FeC2wuwBZFzJ2moW7MIRgImdHSJbUrs4OWHuA4MlEl0zCuFFmdiQcLHE2kDM8WS7pfl1vd5Ut%2Bth9y9q99bEIm4DBxUjIWdtgdCcSS1f%2F5XbGGS5G5x5FeoBIV8AXvA%2Bmzkgov1i4TtFWtMq%2BByc%2Br3nu3yKialRFZk0hsUyiQFir8wBwlvgpeeHgDlUR3bgD4PeZEv48%2FINwtXVIcamHts6HrfCBNjYKmdPM5OyvFnuhtCOOdvO7HAeE2uzvmSKrYnJ8Jt14COABNiJHyUcSnSMzhyRGr8I49%2BfZanuVcgpSwJHklPrm5rVsU0zgWjtKHuFXqTTMPz178EGOqUBgjqka0l5OfvKRsuKGtQLST8k2ZM0vY8y2jOBQuq8e8NWqbR69TfbvA%2BM5M4sLjYlthQxKDSCYkRowtlqwnDMdhVUyAGmAtDbOVbXC0nl6t4l3vee8PuFw9WUBlX5Jguhv%2FhkGhHwuRcYyOHaAxm0fSGGXsjYPsXn4XTCDYFGJ85corXqa7F1MWaRxqkuO4HZOMFV6Jl1T1YjnvXBcZNzFzJf7V2x&X-Amz-Signature=ee53ac2ad2725952a8f0afa83599f697d35f9ac37fbc194656fdb6f55b59f2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSJZCAE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHE99Ly102b%2FXsi83YIsjBfDicJi8qcqcEtQ8BxaJT%2FHAiEAn%2BYVeVapjGR1jCEZVMuVsg95k3HcRT0iCzrj1KS3%2FwAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3A6UngsdX7cRKdDCrcA%2F%2FqttlitIJdrfOZTbXaWFa%2BiYb6z2ytNbnbm0F4y72ZJDpUwAQsXXP8VBYsF7ZkPikIoG8HmVYL3ThNV%2Bk%2BnlCxZqRcd3%2FnBndFT0R0UMZ%2Fg2DKAk4IzYvfpMfEiP5V%2F6WaJbdBBdwGJDHZPqdlULa9zuup3JHSVYsCz70XHG3REJc7pml3%2B0XFeJsx6aml7hCDieVzle2H3ryFBgy0hYMAKWwTe5kgd4eklJg8p0guJOjW5v2T7sJP97Ff2EldKNmUDjex1h2JYtwoI%2BHxENsSv6Cua17Vp7ojpw0mn1LHmwE1eDx%2B%2FeC2wuwBZFzJ2moW7MIRgImdHSJbUrs4OWHuA4MlEl0zCuFFmdiQcLHE2kDM8WS7pfl1vd5Ut%2Bth9y9q99bEIm4DBxUjIWdtgdCcSS1f%2F5XbGGS5G5x5FeoBIV8AXvA%2Bmzkgov1i4TtFWtMq%2BByc%2Br3nu3yKialRFZk0hsUyiQFir8wBwlvgpeeHgDlUR3bgD4PeZEv48%2FINwtXVIcamHts6HrfCBNjYKmdPM5OyvFnuhtCOOdvO7HAeE2uzvmSKrYnJ8Jt14COABNiJHyUcSnSMzhyRGr8I49%2BfZanuVcgpSwJHklPrm5rVsU0zgWjtKHuFXqTTMPz178EGOqUBgjqka0l5OfvKRsuKGtQLST8k2ZM0vY8y2jOBQuq8e8NWqbR69TfbvA%2BM5M4sLjYlthQxKDSCYkRowtlqwnDMdhVUyAGmAtDbOVbXC0nl6t4l3vee8PuFw9WUBlX5Jguhv%2FhkGhHwuRcYyOHaAxm0fSGGXsjYPsXn4XTCDYFGJ85corXqa7F1MWaRxqkuO4HZOMFV6Jl1T1YjnvXBcZNzFzJf7V2x&X-Amz-Signature=32944dd5a0c4eba5c1ffd50501ddc3bd082a308de268603cb36aebba0955f5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSJZCAE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHE99Ly102b%2FXsi83YIsjBfDicJi8qcqcEtQ8BxaJT%2FHAiEAn%2BYVeVapjGR1jCEZVMuVsg95k3HcRT0iCzrj1KS3%2FwAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3A6UngsdX7cRKdDCrcA%2F%2FqttlitIJdrfOZTbXaWFa%2BiYb6z2ytNbnbm0F4y72ZJDpUwAQsXXP8VBYsF7ZkPikIoG8HmVYL3ThNV%2Bk%2BnlCxZqRcd3%2FnBndFT0R0UMZ%2Fg2DKAk4IzYvfpMfEiP5V%2F6WaJbdBBdwGJDHZPqdlULa9zuup3JHSVYsCz70XHG3REJc7pml3%2B0XFeJsx6aml7hCDieVzle2H3ryFBgy0hYMAKWwTe5kgd4eklJg8p0guJOjW5v2T7sJP97Ff2EldKNmUDjex1h2JYtwoI%2BHxENsSv6Cua17Vp7ojpw0mn1LHmwE1eDx%2B%2FeC2wuwBZFzJ2moW7MIRgImdHSJbUrs4OWHuA4MlEl0zCuFFmdiQcLHE2kDM8WS7pfl1vd5Ut%2Bth9y9q99bEIm4DBxUjIWdtgdCcSS1f%2F5XbGGS5G5x5FeoBIV8AXvA%2Bmzkgov1i4TtFWtMq%2BByc%2Br3nu3yKialRFZk0hsUyiQFir8wBwlvgpeeHgDlUR3bgD4PeZEv48%2FINwtXVIcamHts6HrfCBNjYKmdPM5OyvFnuhtCOOdvO7HAeE2uzvmSKrYnJ8Jt14COABNiJHyUcSnSMzhyRGr8I49%2BfZanuVcgpSwJHklPrm5rVsU0zgWjtKHuFXqTTMPz178EGOqUBgjqka0l5OfvKRsuKGtQLST8k2ZM0vY8y2jOBQuq8e8NWqbR69TfbvA%2BM5M4sLjYlthQxKDSCYkRowtlqwnDMdhVUyAGmAtDbOVbXC0nl6t4l3vee8PuFw9WUBlX5Jguhv%2FhkGhHwuRcYyOHaAxm0fSGGXsjYPsXn4XTCDYFGJ85corXqa7F1MWaRxqkuO4HZOMFV6Jl1T1YjnvXBcZNzFzJf7V2x&X-Amz-Signature=b76a7623aa421c21bcf5ac7c0a01bd93d07435fa9717cd6be0e9309600762588&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSJZCAE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHE99Ly102b%2FXsi83YIsjBfDicJi8qcqcEtQ8BxaJT%2FHAiEAn%2BYVeVapjGR1jCEZVMuVsg95k3HcRT0iCzrj1KS3%2FwAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3A6UngsdX7cRKdDCrcA%2F%2FqttlitIJdrfOZTbXaWFa%2BiYb6z2ytNbnbm0F4y72ZJDpUwAQsXXP8VBYsF7ZkPikIoG8HmVYL3ThNV%2Bk%2BnlCxZqRcd3%2FnBndFT0R0UMZ%2Fg2DKAk4IzYvfpMfEiP5V%2F6WaJbdBBdwGJDHZPqdlULa9zuup3JHSVYsCz70XHG3REJc7pml3%2B0XFeJsx6aml7hCDieVzle2H3ryFBgy0hYMAKWwTe5kgd4eklJg8p0guJOjW5v2T7sJP97Ff2EldKNmUDjex1h2JYtwoI%2BHxENsSv6Cua17Vp7ojpw0mn1LHmwE1eDx%2B%2FeC2wuwBZFzJ2moW7MIRgImdHSJbUrs4OWHuA4MlEl0zCuFFmdiQcLHE2kDM8WS7pfl1vd5Ut%2Bth9y9q99bEIm4DBxUjIWdtgdCcSS1f%2F5XbGGS5G5x5FeoBIV8AXvA%2Bmzkgov1i4TtFWtMq%2BByc%2Br3nu3yKialRFZk0hsUyiQFir8wBwlvgpeeHgDlUR3bgD4PeZEv48%2FINwtXVIcamHts6HrfCBNjYKmdPM5OyvFnuhtCOOdvO7HAeE2uzvmSKrYnJ8Jt14COABNiJHyUcSnSMzhyRGr8I49%2BfZanuVcgpSwJHklPrm5rVsU0zgWjtKHuFXqTTMPz178EGOqUBgjqka0l5OfvKRsuKGtQLST8k2ZM0vY8y2jOBQuq8e8NWqbR69TfbvA%2BM5M4sLjYlthQxKDSCYkRowtlqwnDMdhVUyAGmAtDbOVbXC0nl6t4l3vee8PuFw9WUBlX5Jguhv%2FhkGhHwuRcYyOHaAxm0fSGGXsjYPsXn4XTCDYFGJ85corXqa7F1MWaRxqkuO4HZOMFV6Jl1T1YjnvXBcZNzFzJf7V2x&X-Amz-Signature=7c845c0883252de0a672fc6e702cdc5ae3f9e70c8335c6dda8c8b5e0fa92f371&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSJZCAE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHE99Ly102b%2FXsi83YIsjBfDicJi8qcqcEtQ8BxaJT%2FHAiEAn%2BYVeVapjGR1jCEZVMuVsg95k3HcRT0iCzrj1KS3%2FwAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3A6UngsdX7cRKdDCrcA%2F%2FqttlitIJdrfOZTbXaWFa%2BiYb6z2ytNbnbm0F4y72ZJDpUwAQsXXP8VBYsF7ZkPikIoG8HmVYL3ThNV%2Bk%2BnlCxZqRcd3%2FnBndFT0R0UMZ%2Fg2DKAk4IzYvfpMfEiP5V%2F6WaJbdBBdwGJDHZPqdlULa9zuup3JHSVYsCz70XHG3REJc7pml3%2B0XFeJsx6aml7hCDieVzle2H3ryFBgy0hYMAKWwTe5kgd4eklJg8p0guJOjW5v2T7sJP97Ff2EldKNmUDjex1h2JYtwoI%2BHxENsSv6Cua17Vp7ojpw0mn1LHmwE1eDx%2B%2FeC2wuwBZFzJ2moW7MIRgImdHSJbUrs4OWHuA4MlEl0zCuFFmdiQcLHE2kDM8WS7pfl1vd5Ut%2Bth9y9q99bEIm4DBxUjIWdtgdCcSS1f%2F5XbGGS5G5x5FeoBIV8AXvA%2Bmzkgov1i4TtFWtMq%2BByc%2Br3nu3yKialRFZk0hsUyiQFir8wBwlvgpeeHgDlUR3bgD4PeZEv48%2FINwtXVIcamHts6HrfCBNjYKmdPM5OyvFnuhtCOOdvO7HAeE2uzvmSKrYnJ8Jt14COABNiJHyUcSnSMzhyRGr8I49%2BfZanuVcgpSwJHklPrm5rVsU0zgWjtKHuFXqTTMPz178EGOqUBgjqka0l5OfvKRsuKGtQLST8k2ZM0vY8y2jOBQuq8e8NWqbR69TfbvA%2BM5M4sLjYlthQxKDSCYkRowtlqwnDMdhVUyAGmAtDbOVbXC0nl6t4l3vee8PuFw9WUBlX5Jguhv%2FhkGhHwuRcYyOHaAxm0fSGGXsjYPsXn4XTCDYFGJ85corXqa7F1MWaRxqkuO4HZOMFV6Jl1T1YjnvXBcZNzFzJf7V2x&X-Amz-Signature=ad1ed4e321f9b912d6c5513af28b4df3ce2a45cefc398e3a31b0967a3db1734e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSJZCAE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHE99Ly102b%2FXsi83YIsjBfDicJi8qcqcEtQ8BxaJT%2FHAiEAn%2BYVeVapjGR1jCEZVMuVsg95k3HcRT0iCzrj1KS3%2FwAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3A6UngsdX7cRKdDCrcA%2F%2FqttlitIJdrfOZTbXaWFa%2BiYb6z2ytNbnbm0F4y72ZJDpUwAQsXXP8VBYsF7ZkPikIoG8HmVYL3ThNV%2Bk%2BnlCxZqRcd3%2FnBndFT0R0UMZ%2Fg2DKAk4IzYvfpMfEiP5V%2F6WaJbdBBdwGJDHZPqdlULa9zuup3JHSVYsCz70XHG3REJc7pml3%2B0XFeJsx6aml7hCDieVzle2H3ryFBgy0hYMAKWwTe5kgd4eklJg8p0guJOjW5v2T7sJP97Ff2EldKNmUDjex1h2JYtwoI%2BHxENsSv6Cua17Vp7ojpw0mn1LHmwE1eDx%2B%2FeC2wuwBZFzJ2moW7MIRgImdHSJbUrs4OWHuA4MlEl0zCuFFmdiQcLHE2kDM8WS7pfl1vd5Ut%2Bth9y9q99bEIm4DBxUjIWdtgdCcSS1f%2F5XbGGS5G5x5FeoBIV8AXvA%2Bmzkgov1i4TtFWtMq%2BByc%2Br3nu3yKialRFZk0hsUyiQFir8wBwlvgpeeHgDlUR3bgD4PeZEv48%2FINwtXVIcamHts6HrfCBNjYKmdPM5OyvFnuhtCOOdvO7HAeE2uzvmSKrYnJ8Jt14COABNiJHyUcSnSMzhyRGr8I49%2BfZanuVcgpSwJHklPrm5rVsU0zgWjtKHuFXqTTMPz178EGOqUBgjqka0l5OfvKRsuKGtQLST8k2ZM0vY8y2jOBQuq8e8NWqbR69TfbvA%2BM5M4sLjYlthQxKDSCYkRowtlqwnDMdhVUyAGmAtDbOVbXC0nl6t4l3vee8PuFw9WUBlX5Jguhv%2FhkGhHwuRcYyOHaAxm0fSGGXsjYPsXn4XTCDYFGJ85corXqa7F1MWaRxqkuO4HZOMFV6Jl1T1YjnvXBcZNzFzJf7V2x&X-Amz-Signature=7fdbca46a85fa00288e0191328af8eeed7307ff4852277100d7e55fe744d75af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSJZCAE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHE99Ly102b%2FXsi83YIsjBfDicJi8qcqcEtQ8BxaJT%2FHAiEAn%2BYVeVapjGR1jCEZVMuVsg95k3HcRT0iCzrj1KS3%2FwAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3A6UngsdX7cRKdDCrcA%2F%2FqttlitIJdrfOZTbXaWFa%2BiYb6z2ytNbnbm0F4y72ZJDpUwAQsXXP8VBYsF7ZkPikIoG8HmVYL3ThNV%2Bk%2BnlCxZqRcd3%2FnBndFT0R0UMZ%2Fg2DKAk4IzYvfpMfEiP5V%2F6WaJbdBBdwGJDHZPqdlULa9zuup3JHSVYsCz70XHG3REJc7pml3%2B0XFeJsx6aml7hCDieVzle2H3ryFBgy0hYMAKWwTe5kgd4eklJg8p0guJOjW5v2T7sJP97Ff2EldKNmUDjex1h2JYtwoI%2BHxENsSv6Cua17Vp7ojpw0mn1LHmwE1eDx%2B%2FeC2wuwBZFzJ2moW7MIRgImdHSJbUrs4OWHuA4MlEl0zCuFFmdiQcLHE2kDM8WS7pfl1vd5Ut%2Bth9y9q99bEIm4DBxUjIWdtgdCcSS1f%2F5XbGGS5G5x5FeoBIV8AXvA%2Bmzkgov1i4TtFWtMq%2BByc%2Br3nu3yKialRFZk0hsUyiQFir8wBwlvgpeeHgDlUR3bgD4PeZEv48%2FINwtXVIcamHts6HrfCBNjYKmdPM5OyvFnuhtCOOdvO7HAeE2uzvmSKrYnJ8Jt14COABNiJHyUcSnSMzhyRGr8I49%2BfZanuVcgpSwJHklPrm5rVsU0zgWjtKHuFXqTTMPz178EGOqUBgjqka0l5OfvKRsuKGtQLST8k2ZM0vY8y2jOBQuq8e8NWqbR69TfbvA%2BM5M4sLjYlthQxKDSCYkRowtlqwnDMdhVUyAGmAtDbOVbXC0nl6t4l3vee8PuFw9WUBlX5Jguhv%2FhkGhHwuRcYyOHaAxm0fSGGXsjYPsXn4XTCDYFGJ85corXqa7F1MWaRxqkuO4HZOMFV6Jl1T1YjnvXBcZNzFzJf7V2x&X-Amz-Signature=b1980efcafcf8703f0976b3158b1ff266c0e5e90e734bc95d891fe715e307c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGSDVXV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7anK2ASuvynM5NAPhW4%2B9eolEzlW8QIC4lsfyPoUvHwIgFcW6uccouhxt1NPvjUhet%2FIQOU%2FmMw7Ikjwq60eGYjYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOScAaP%2FzhCxPBwyrcAzOE7pWZeiFCAVXs4w41UpQs3eIxNHGIFtAj9EbmeEUiKzahUHP79NO5L1Qs0zQRUKLYyGX1tVkAVhb3R4MnjT2fGlmffRm%2FcCguudHXmL32m9VcfUt%2FBb4yMF58XCyvBHOulnMgfSgHcJkM4J9KFXLtkA%2FIONxIMwOh25ICMKoLlw8ECXeiEVgnCK2E4gq1AQsAo3j1F1WNRaArcpVdjlTsDF%2B%2Fr7OZr7toXjee761Qf0zGa1wcxBQtd%2BwwjplrcbOtK%2BIRvC3nWPyoMgME3oHE4ZWLBjmO9Mve6qR%2BUFxfHCaKlRjGoXmWmLYn4QDlZQQYyvtb5DSd9VU3XcqxsQwZgvgpwtZ0Qqs%2Bgc0XhXJTZs6bBlVebcVGML9XwiMNyrGxvX2DaEwIbHYYE2wFdHB5B2dVvaFffTc%2BfoBtlzUKRfdRbiRzARai4QuMTJqF6ccUMKg1cQ1cA6o3Hl7JU5kBVIdDEcPtrYs1KMS8wqhYRjpBhelRg8FN58caT3Q1hfab%2FFwXbdtPi3g0%2B4zbp6yYNJF87ByVQI0HRpfrkfl8s1uIlm4cK7Y41HYIRDNFx4Xo5BQOd4nfdulTKqwowjRXc2ZkprF59yMDCQAS1s%2BhBguTLjoAteGQufpQMPTAyr4GOqUBaFmBVTjMi%2FDqFOTzaEXWDB8lAhWjaVjOHunMAIFXFMIsdEDjwasvW26mjDy566oIYkBf8Lx1xZ1vWwy4OVnA6cm5L6lYM50ssAbiWzoD6s8RgiTJYwYvDjJ%2B9WSNQCPTs%2FJoOFSqzyP0cdcqLYEmhZfbRDD0orQfgNxZxZkVIm0mhvv%2FzILBi%2FahaoiMGEQ4GbNHilmKMGZM3PLlobqHq5V0oQD%2B&X-Amz-Signature=6714f1795c3655fa41f3ad625c0e035c6bf8f4d4b0282e75e13ce9500446983d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGSDVXV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7anK2ASuvynM5NAPhW4%2B9eolEzlW8QIC4lsfyPoUvHwIgFcW6uccouhxt1NPvjUhet%2FIQOU%2FmMw7Ikjwq60eGYjYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOScAaP%2FzhCxPBwyrcAzOE7pWZeiFCAVXs4w41UpQs3eIxNHGIFtAj9EbmeEUiKzahUHP79NO5L1Qs0zQRUKLYyGX1tVkAVhb3R4MnjT2fGlmffRm%2FcCguudHXmL32m9VcfUt%2FBb4yMF58XCyvBHOulnMgfSgHcJkM4J9KFXLtkA%2FIONxIMwOh25ICMKoLlw8ECXeiEVgnCK2E4gq1AQsAo3j1F1WNRaArcpVdjlTsDF%2B%2Fr7OZr7toXjee761Qf0zGa1wcxBQtd%2BwwjplrcbOtK%2BIRvC3nWPyoMgME3oHE4ZWLBjmO9Mve6qR%2BUFxfHCaKlRjGoXmWmLYn4QDlZQQYyvtb5DSd9VU3XcqxsQwZgvgpwtZ0Qqs%2Bgc0XhXJTZs6bBlVebcVGML9XwiMNyrGxvX2DaEwIbHYYE2wFdHB5B2dVvaFffTc%2BfoBtlzUKRfdRbiRzARai4QuMTJqF6ccUMKg1cQ1cA6o3Hl7JU5kBVIdDEcPtrYs1KMS8wqhYRjpBhelRg8FN58caT3Q1hfab%2FFwXbdtPi3g0%2B4zbp6yYNJF87ByVQI0HRpfrkfl8s1uIlm4cK7Y41HYIRDNFx4Xo5BQOd4nfdulTKqwowjRXc2ZkprF59yMDCQAS1s%2BhBguTLjoAteGQufpQMPTAyr4GOqUBaFmBVTjMi%2FDqFOTzaEXWDB8lAhWjaVjOHunMAIFXFMIsdEDjwasvW26mjDy566oIYkBf8Lx1xZ1vWwy4OVnA6cm5L6lYM50ssAbiWzoD6s8RgiTJYwYvDjJ%2B9WSNQCPTs%2FJoOFSqzyP0cdcqLYEmhZfbRDD0orQfgNxZxZkVIm0mhvv%2FzILBi%2FahaoiMGEQ4GbNHilmKMGZM3PLlobqHq5V0oQD%2B&X-Amz-Signature=2dc7005a8159b1acc76460df8b34fcbed5fe72119b213542a4e163462551db12&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGSDVXV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7anK2ASuvynM5NAPhW4%2B9eolEzlW8QIC4lsfyPoUvHwIgFcW6uccouhxt1NPvjUhet%2FIQOU%2FmMw7Ikjwq60eGYjYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOScAaP%2FzhCxPBwyrcAzOE7pWZeiFCAVXs4w41UpQs3eIxNHGIFtAj9EbmeEUiKzahUHP79NO5L1Qs0zQRUKLYyGX1tVkAVhb3R4MnjT2fGlmffRm%2FcCguudHXmL32m9VcfUt%2FBb4yMF58XCyvBHOulnMgfSgHcJkM4J9KFXLtkA%2FIONxIMwOh25ICMKoLlw8ECXeiEVgnCK2E4gq1AQsAo3j1F1WNRaArcpVdjlTsDF%2B%2Fr7OZr7toXjee761Qf0zGa1wcxBQtd%2BwwjplrcbOtK%2BIRvC3nWPyoMgME3oHE4ZWLBjmO9Mve6qR%2BUFxfHCaKlRjGoXmWmLYn4QDlZQQYyvtb5DSd9VU3XcqxsQwZgvgpwtZ0Qqs%2Bgc0XhXJTZs6bBlVebcVGML9XwiMNyrGxvX2DaEwIbHYYE2wFdHB5B2dVvaFffTc%2BfoBtlzUKRfdRbiRzARai4QuMTJqF6ccUMKg1cQ1cA6o3Hl7JU5kBVIdDEcPtrYs1KMS8wqhYRjpBhelRg8FN58caT3Q1hfab%2FFwXbdtPi3g0%2B4zbp6yYNJF87ByVQI0HRpfrkfl8s1uIlm4cK7Y41HYIRDNFx4Xo5BQOd4nfdulTKqwowjRXc2ZkprF59yMDCQAS1s%2BhBguTLjoAteGQufpQMPTAyr4GOqUBaFmBVTjMi%2FDqFOTzaEXWDB8lAhWjaVjOHunMAIFXFMIsdEDjwasvW26mjDy566oIYkBf8Lx1xZ1vWwy4OVnA6cm5L6lYM50ssAbiWzoD6s8RgiTJYwYvDjJ%2B9WSNQCPTs%2FJoOFSqzyP0cdcqLYEmhZfbRDD0orQfgNxZxZkVIm0mhvv%2FzILBi%2FahaoiMGEQ4GbNHilmKMGZM3PLlobqHq5V0oQD%2B&X-Amz-Signature=294491979a94c6159bca73b6338282647f77c3be35a458ee8b76c27b59c62e74&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGSDVXV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7anK2ASuvynM5NAPhW4%2B9eolEzlW8QIC4lsfyPoUvHwIgFcW6uccouhxt1NPvjUhet%2FIQOU%2FmMw7Ikjwq60eGYjYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOScAaP%2FzhCxPBwyrcAzOE7pWZeiFCAVXs4w41UpQs3eIxNHGIFtAj9EbmeEUiKzahUHP79NO5L1Qs0zQRUKLYyGX1tVkAVhb3R4MnjT2fGlmffRm%2FcCguudHXmL32m9VcfUt%2FBb4yMF58XCyvBHOulnMgfSgHcJkM4J9KFXLtkA%2FIONxIMwOh25ICMKoLlw8ECXeiEVgnCK2E4gq1AQsAo3j1F1WNRaArcpVdjlTsDF%2B%2Fr7OZr7toXjee761Qf0zGa1wcxBQtd%2BwwjplrcbOtK%2BIRvC3nWPyoMgME3oHE4ZWLBjmO9Mve6qR%2BUFxfHCaKlRjGoXmWmLYn4QDlZQQYyvtb5DSd9VU3XcqxsQwZgvgpwtZ0Qqs%2Bgc0XhXJTZs6bBlVebcVGML9XwiMNyrGxvX2DaEwIbHYYE2wFdHB5B2dVvaFffTc%2BfoBtlzUKRfdRbiRzARai4QuMTJqF6ccUMKg1cQ1cA6o3Hl7JU5kBVIdDEcPtrYs1KMS8wqhYRjpBhelRg8FN58caT3Q1hfab%2FFwXbdtPi3g0%2B4zbp6yYNJF87ByVQI0HRpfrkfl8s1uIlm4cK7Y41HYIRDNFx4Xo5BQOd4nfdulTKqwowjRXc2ZkprF59yMDCQAS1s%2BhBguTLjoAteGQufpQMPTAyr4GOqUBaFmBVTjMi%2FDqFOTzaEXWDB8lAhWjaVjOHunMAIFXFMIsdEDjwasvW26mjDy566oIYkBf8Lx1xZ1vWwy4OVnA6cm5L6lYM50ssAbiWzoD6s8RgiTJYwYvDjJ%2B9WSNQCPTs%2FJoOFSqzyP0cdcqLYEmhZfbRDD0orQfgNxZxZkVIm0mhvv%2FzILBi%2FahaoiMGEQ4GbNHilmKMGZM3PLlobqHq5V0oQD%2B&X-Amz-Signature=228dae30f5645b04b7f818285f5c056f834b27a3e059e636b898b7ab5dc418fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGSDVXV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7anK2ASuvynM5NAPhW4%2B9eolEzlW8QIC4lsfyPoUvHwIgFcW6uccouhxt1NPvjUhet%2FIQOU%2FmMw7Ikjwq60eGYjYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOScAaP%2FzhCxPBwyrcAzOE7pWZeiFCAVXs4w41UpQs3eIxNHGIFtAj9EbmeEUiKzahUHP79NO5L1Qs0zQRUKLYyGX1tVkAVhb3R4MnjT2fGlmffRm%2FcCguudHXmL32m9VcfUt%2FBb4yMF58XCyvBHOulnMgfSgHcJkM4J9KFXLtkA%2FIONxIMwOh25ICMKoLlw8ECXeiEVgnCK2E4gq1AQsAo3j1F1WNRaArcpVdjlTsDF%2B%2Fr7OZr7toXjee761Qf0zGa1wcxBQtd%2BwwjplrcbOtK%2BIRvC3nWPyoMgME3oHE4ZWLBjmO9Mve6qR%2BUFxfHCaKlRjGoXmWmLYn4QDlZQQYyvtb5DSd9VU3XcqxsQwZgvgpwtZ0Qqs%2Bgc0XhXJTZs6bBlVebcVGML9XwiMNyrGxvX2DaEwIbHYYE2wFdHB5B2dVvaFffTc%2BfoBtlzUKRfdRbiRzARai4QuMTJqF6ccUMKg1cQ1cA6o3Hl7JU5kBVIdDEcPtrYs1KMS8wqhYRjpBhelRg8FN58caT3Q1hfab%2FFwXbdtPi3g0%2B4zbp6yYNJF87ByVQI0HRpfrkfl8s1uIlm4cK7Y41HYIRDNFx4Xo5BQOd4nfdulTKqwowjRXc2ZkprF59yMDCQAS1s%2BhBguTLjoAteGQufpQMPTAyr4GOqUBaFmBVTjMi%2FDqFOTzaEXWDB8lAhWjaVjOHunMAIFXFMIsdEDjwasvW26mjDy566oIYkBf8Lx1xZ1vWwy4OVnA6cm5L6lYM50ssAbiWzoD6s8RgiTJYwYvDjJ%2B9WSNQCPTs%2FJoOFSqzyP0cdcqLYEmhZfbRDD0orQfgNxZxZkVIm0mhvv%2FzILBi%2FahaoiMGEQ4GbNHilmKMGZM3PLlobqHq5V0oQD%2B&X-Amz-Signature=3a26cb361ef1af01210d48cc08e4c536b03184614ed5e2f38afb75f7b89df925&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGSDVXV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7anK2ASuvynM5NAPhW4%2B9eolEzlW8QIC4lsfyPoUvHwIgFcW6uccouhxt1NPvjUhet%2FIQOU%2FmMw7Ikjwq60eGYjYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOScAaP%2FzhCxPBwyrcAzOE7pWZeiFCAVXs4w41UpQs3eIxNHGIFtAj9EbmeEUiKzahUHP79NO5L1Qs0zQRUKLYyGX1tVkAVhb3R4MnjT2fGlmffRm%2FcCguudHXmL32m9VcfUt%2FBb4yMF58XCyvBHOulnMgfSgHcJkM4J9KFXLtkA%2FIONxIMwOh25ICMKoLlw8ECXeiEVgnCK2E4gq1AQsAo3j1F1WNRaArcpVdjlTsDF%2B%2Fr7OZr7toXjee761Qf0zGa1wcxBQtd%2BwwjplrcbOtK%2BIRvC3nWPyoMgME3oHE4ZWLBjmO9Mve6qR%2BUFxfHCaKlRjGoXmWmLYn4QDlZQQYyvtb5DSd9VU3XcqxsQwZgvgpwtZ0Qqs%2Bgc0XhXJTZs6bBlVebcVGML9XwiMNyrGxvX2DaEwIbHYYE2wFdHB5B2dVvaFffTc%2BfoBtlzUKRfdRbiRzARai4QuMTJqF6ccUMKg1cQ1cA6o3Hl7JU5kBVIdDEcPtrYs1KMS8wqhYRjpBhelRg8FN58caT3Q1hfab%2FFwXbdtPi3g0%2B4zbp6yYNJF87ByVQI0HRpfrkfl8s1uIlm4cK7Y41HYIRDNFx4Xo5BQOd4nfdulTKqwowjRXc2ZkprF59yMDCQAS1s%2BhBguTLjoAteGQufpQMPTAyr4GOqUBaFmBVTjMi%2FDqFOTzaEXWDB8lAhWjaVjOHunMAIFXFMIsdEDjwasvW26mjDy566oIYkBf8Lx1xZ1vWwy4OVnA6cm5L6lYM50ssAbiWzoD6s8RgiTJYwYvDjJ%2B9WSNQCPTs%2FJoOFSqzyP0cdcqLYEmhZfbRDD0orQfgNxZxZkVIm0mhvv%2FzILBi%2FahaoiMGEQ4GbNHilmKMGZM3PLlobqHq5V0oQD%2B&X-Amz-Signature=d372141b73c465f4d5a3e0576d74c57b4605772e353caa10495801110dff4970&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGSDVXV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7anK2ASuvynM5NAPhW4%2B9eolEzlW8QIC4lsfyPoUvHwIgFcW6uccouhxt1NPvjUhet%2FIQOU%2FmMw7Ikjwq60eGYjYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOScAaP%2FzhCxPBwyrcAzOE7pWZeiFCAVXs4w41UpQs3eIxNHGIFtAj9EbmeEUiKzahUHP79NO5L1Qs0zQRUKLYyGX1tVkAVhb3R4MnjT2fGlmffRm%2FcCguudHXmL32m9VcfUt%2FBb4yMF58XCyvBHOulnMgfSgHcJkM4J9KFXLtkA%2FIONxIMwOh25ICMKoLlw8ECXeiEVgnCK2E4gq1AQsAo3j1F1WNRaArcpVdjlTsDF%2B%2Fr7OZr7toXjee761Qf0zGa1wcxBQtd%2BwwjplrcbOtK%2BIRvC3nWPyoMgME3oHE4ZWLBjmO9Mve6qR%2BUFxfHCaKlRjGoXmWmLYn4QDlZQQYyvtb5DSd9VU3XcqxsQwZgvgpwtZ0Qqs%2Bgc0XhXJTZs6bBlVebcVGML9XwiMNyrGxvX2DaEwIbHYYE2wFdHB5B2dVvaFffTc%2BfoBtlzUKRfdRbiRzARai4QuMTJqF6ccUMKg1cQ1cA6o3Hl7JU5kBVIdDEcPtrYs1KMS8wqhYRjpBhelRg8FN58caT3Q1hfab%2FFwXbdtPi3g0%2B4zbp6yYNJF87ByVQI0HRpfrkfl8s1uIlm4cK7Y41HYIRDNFx4Xo5BQOd4nfdulTKqwowjRXc2ZkprF59yMDCQAS1s%2BhBguTLjoAteGQufpQMPTAyr4GOqUBaFmBVTjMi%2FDqFOTzaEXWDB8lAhWjaVjOHunMAIFXFMIsdEDjwasvW26mjDy566oIYkBf8Lx1xZ1vWwy4OVnA6cm5L6lYM50ssAbiWzoD6s8RgiTJYwYvDjJ%2B9WSNQCPTs%2FJoOFSqzyP0cdcqLYEmhZfbRDD0orQfgNxZxZkVIm0mhvv%2FzILBi%2FahaoiMGEQ4GbNHilmKMGZM3PLlobqHq5V0oQD%2B&X-Amz-Signature=3e671b30ba227ab260376a410d7cf87b838c9c17e3810b513bd593eef05689ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGSDVXV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7anK2ASuvynM5NAPhW4%2B9eolEzlW8QIC4lsfyPoUvHwIgFcW6uccouhxt1NPvjUhet%2FIQOU%2FmMw7Ikjwq60eGYjYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBOScAaP%2FzhCxPBwyrcAzOE7pWZeiFCAVXs4w41UpQs3eIxNHGIFtAj9EbmeEUiKzahUHP79NO5L1Qs0zQRUKLYyGX1tVkAVhb3R4MnjT2fGlmffRm%2FcCguudHXmL32m9VcfUt%2FBb4yMF58XCyvBHOulnMgfSgHcJkM4J9KFXLtkA%2FIONxIMwOh25ICMKoLlw8ECXeiEVgnCK2E4gq1AQsAo3j1F1WNRaArcpVdjlTsDF%2B%2Fr7OZr7toXjee761Qf0zGa1wcxBQtd%2BwwjplrcbOtK%2BIRvC3nWPyoMgME3oHE4ZWLBjmO9Mve6qR%2BUFxfHCaKlRjGoXmWmLYn4QDlZQQYyvtb5DSd9VU3XcqxsQwZgvgpwtZ0Qqs%2Bgc0XhXJTZs6bBlVebcVGML9XwiMNyrGxvX2DaEwIbHYYE2wFdHB5B2dVvaFffTc%2BfoBtlzUKRfdRbiRzARai4QuMTJqF6ccUMKg1cQ1cA6o3Hl7JU5kBVIdDEcPtrYs1KMS8wqhYRjpBhelRg8FN58caT3Q1hfab%2FFwXbdtPi3g0%2B4zbp6yYNJF87ByVQI0HRpfrkfl8s1uIlm4cK7Y41HYIRDNFx4Xo5BQOd4nfdulTKqwowjRXc2ZkprF59yMDCQAS1s%2BhBguTLjoAteGQufpQMPTAyr4GOqUBaFmBVTjMi%2FDqFOTzaEXWDB8lAhWjaVjOHunMAIFXFMIsdEDjwasvW26mjDy566oIYkBf8Lx1xZ1vWwy4OVnA6cm5L6lYM50ssAbiWzoD6s8RgiTJYwYvDjJ%2B9WSNQCPTs%2FJoOFSqzyP0cdcqLYEmhZfbRDD0orQfgNxZxZkVIm0mhvv%2FzILBi%2FahaoiMGEQ4GbNHilmKMGZM3PLlobqHq5V0oQD%2B&X-Amz-Signature=e8d5e141172858c4ba4a097897e3a1d48051ac6386716ada8afea64fe9872509&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

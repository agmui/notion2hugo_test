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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XR36FM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCaFzTaCI9emVRd2Gm0eF0BPL5jJUspMuDfcn7%2FYStppgIhAKcqncuDqpSperHPB3OCUoOjM%2FirkhO9G4q%2BOEjXTFpFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwacW3tP6U%2FTib%2BY6kq3AP%2FeKmvBfhz9mu0aHKlexuyTAvEsqTH9tNJDhhW23c3x7k4pzTTTDx9oTjs4h4ErDIwyGLwWA1ewdRUiXu%2BXZ0VhirjRMrFzFIZ%2F1ecqZ9t0zEYUGjpbRq37yr7sGzqOnycJcMJWShy5i1vh9ya4D1kiYNW%2BVUpSe3t2yulZVaOMoEWNuhK5QuKYvk35k4mo%2BY13Cs%2FS9G9QyiY0x5vKCcccZDi4pqiZwymWAWPYPV3s5iQailC0p457DavdHGxCeGMaJ9Q5xqSCAgBpZR0Fm24fIfPR6IutSbNjKwuPYUnWQOm5SF7G6O9xuA2xCe1k%2FMLRuA1JDRBegyr2MkY9MAPSYOopzCtpbCzU7MaeXxKA6WcEEsDucMN5q7Za8rzMXCzJLe4FP4dT4UU4UjoU9svOoGSOisiND%2Bs2q1WrGO8bGbd%2Be3ppDC24RSPMu4QAYMeJl18mJuyHtxGMLMmfFmIq%2FomtJO6qfi132dYioWA6WTqorskuTogqy%2BSfu40cjwif4zZlRIQJr6ybM4x3iyfr2YaP%2FVZTGuWGK5e%2BZdEL2wvOqcWeZHnELiGyFQTKDY0F55TJyu%2Bl2j7bH0ngAS5F2gNQLl%2BiDOENFjgps3Y6q%2BmTVCy%2FC0DpcAXhDCAmKPEBjqkATkbCfmz8TZhqt9a7uZZ7sWEIHLwxSGAHbTrrjkXxti2SIocusCgmAogJgQKan1gl93CxIBi0DASqTc4JWn%2FGhAtfb16NiP0fxcIPRWhzr7E5nzJkn0ggsx%2FCtYRcrOegnT9LrOic3rmFNPVjAbG7XscdXfdAvMIbwVohqpUlt5svElFzEZEjDP7O7BifQfF5tU7hn2US7d0mrIf8V3w%2FY4QWFlk&X-Amz-Signature=64fff68678b9e55c5e27abe8982fd8ac8d50002d777475bcc28c359f57473d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XR36FM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCaFzTaCI9emVRd2Gm0eF0BPL5jJUspMuDfcn7%2FYStppgIhAKcqncuDqpSperHPB3OCUoOjM%2FirkhO9G4q%2BOEjXTFpFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwacW3tP6U%2FTib%2BY6kq3AP%2FeKmvBfhz9mu0aHKlexuyTAvEsqTH9tNJDhhW23c3x7k4pzTTTDx9oTjs4h4ErDIwyGLwWA1ewdRUiXu%2BXZ0VhirjRMrFzFIZ%2F1ecqZ9t0zEYUGjpbRq37yr7sGzqOnycJcMJWShy5i1vh9ya4D1kiYNW%2BVUpSe3t2yulZVaOMoEWNuhK5QuKYvk35k4mo%2BY13Cs%2FS9G9QyiY0x5vKCcccZDi4pqiZwymWAWPYPV3s5iQailC0p457DavdHGxCeGMaJ9Q5xqSCAgBpZR0Fm24fIfPR6IutSbNjKwuPYUnWQOm5SF7G6O9xuA2xCe1k%2FMLRuA1JDRBegyr2MkY9MAPSYOopzCtpbCzU7MaeXxKA6WcEEsDucMN5q7Za8rzMXCzJLe4FP4dT4UU4UjoU9svOoGSOisiND%2Bs2q1WrGO8bGbd%2Be3ppDC24RSPMu4QAYMeJl18mJuyHtxGMLMmfFmIq%2FomtJO6qfi132dYioWA6WTqorskuTogqy%2BSfu40cjwif4zZlRIQJr6ybM4x3iyfr2YaP%2FVZTGuWGK5e%2BZdEL2wvOqcWeZHnELiGyFQTKDY0F55TJyu%2Bl2j7bH0ngAS5F2gNQLl%2BiDOENFjgps3Y6q%2BmTVCy%2FC0DpcAXhDCAmKPEBjqkATkbCfmz8TZhqt9a7uZZ7sWEIHLwxSGAHbTrrjkXxti2SIocusCgmAogJgQKan1gl93CxIBi0DASqTc4JWn%2FGhAtfb16NiP0fxcIPRWhzr7E5nzJkn0ggsx%2FCtYRcrOegnT9LrOic3rmFNPVjAbG7XscdXfdAvMIbwVohqpUlt5svElFzEZEjDP7O7BifQfF5tU7hn2US7d0mrIf8V3w%2FY4QWFlk&X-Amz-Signature=a005ee28bf250c6d29be8922a548d7832c9a63ebffce0a2624c9ce091f4bda09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XR36FM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCaFzTaCI9emVRd2Gm0eF0BPL5jJUspMuDfcn7%2FYStppgIhAKcqncuDqpSperHPB3OCUoOjM%2FirkhO9G4q%2BOEjXTFpFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwacW3tP6U%2FTib%2BY6kq3AP%2FeKmvBfhz9mu0aHKlexuyTAvEsqTH9tNJDhhW23c3x7k4pzTTTDx9oTjs4h4ErDIwyGLwWA1ewdRUiXu%2BXZ0VhirjRMrFzFIZ%2F1ecqZ9t0zEYUGjpbRq37yr7sGzqOnycJcMJWShy5i1vh9ya4D1kiYNW%2BVUpSe3t2yulZVaOMoEWNuhK5QuKYvk35k4mo%2BY13Cs%2FS9G9QyiY0x5vKCcccZDi4pqiZwymWAWPYPV3s5iQailC0p457DavdHGxCeGMaJ9Q5xqSCAgBpZR0Fm24fIfPR6IutSbNjKwuPYUnWQOm5SF7G6O9xuA2xCe1k%2FMLRuA1JDRBegyr2MkY9MAPSYOopzCtpbCzU7MaeXxKA6WcEEsDucMN5q7Za8rzMXCzJLe4FP4dT4UU4UjoU9svOoGSOisiND%2Bs2q1WrGO8bGbd%2Be3ppDC24RSPMu4QAYMeJl18mJuyHtxGMLMmfFmIq%2FomtJO6qfi132dYioWA6WTqorskuTogqy%2BSfu40cjwif4zZlRIQJr6ybM4x3iyfr2YaP%2FVZTGuWGK5e%2BZdEL2wvOqcWeZHnELiGyFQTKDY0F55TJyu%2Bl2j7bH0ngAS5F2gNQLl%2BiDOENFjgps3Y6q%2BmTVCy%2FC0DpcAXhDCAmKPEBjqkATkbCfmz8TZhqt9a7uZZ7sWEIHLwxSGAHbTrrjkXxti2SIocusCgmAogJgQKan1gl93CxIBi0DASqTc4JWn%2FGhAtfb16NiP0fxcIPRWhzr7E5nzJkn0ggsx%2FCtYRcrOegnT9LrOic3rmFNPVjAbG7XscdXfdAvMIbwVohqpUlt5svElFzEZEjDP7O7BifQfF5tU7hn2US7d0mrIf8V3w%2FY4QWFlk&X-Amz-Signature=273e7646a161ee5ec99df5373570ce8023401554aab99f065cbf220e7d3c3867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XR36FM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCaFzTaCI9emVRd2Gm0eF0BPL5jJUspMuDfcn7%2FYStppgIhAKcqncuDqpSperHPB3OCUoOjM%2FirkhO9G4q%2BOEjXTFpFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwacW3tP6U%2FTib%2BY6kq3AP%2FeKmvBfhz9mu0aHKlexuyTAvEsqTH9tNJDhhW23c3x7k4pzTTTDx9oTjs4h4ErDIwyGLwWA1ewdRUiXu%2BXZ0VhirjRMrFzFIZ%2F1ecqZ9t0zEYUGjpbRq37yr7sGzqOnycJcMJWShy5i1vh9ya4D1kiYNW%2BVUpSe3t2yulZVaOMoEWNuhK5QuKYvk35k4mo%2BY13Cs%2FS9G9QyiY0x5vKCcccZDi4pqiZwymWAWPYPV3s5iQailC0p457DavdHGxCeGMaJ9Q5xqSCAgBpZR0Fm24fIfPR6IutSbNjKwuPYUnWQOm5SF7G6O9xuA2xCe1k%2FMLRuA1JDRBegyr2MkY9MAPSYOopzCtpbCzU7MaeXxKA6WcEEsDucMN5q7Za8rzMXCzJLe4FP4dT4UU4UjoU9svOoGSOisiND%2Bs2q1WrGO8bGbd%2Be3ppDC24RSPMu4QAYMeJl18mJuyHtxGMLMmfFmIq%2FomtJO6qfi132dYioWA6WTqorskuTogqy%2BSfu40cjwif4zZlRIQJr6ybM4x3iyfr2YaP%2FVZTGuWGK5e%2BZdEL2wvOqcWeZHnELiGyFQTKDY0F55TJyu%2Bl2j7bH0ngAS5F2gNQLl%2BiDOENFjgps3Y6q%2BmTVCy%2FC0DpcAXhDCAmKPEBjqkATkbCfmz8TZhqt9a7uZZ7sWEIHLwxSGAHbTrrjkXxti2SIocusCgmAogJgQKan1gl93CxIBi0DASqTc4JWn%2FGhAtfb16NiP0fxcIPRWhzr7E5nzJkn0ggsx%2FCtYRcrOegnT9LrOic3rmFNPVjAbG7XscdXfdAvMIbwVohqpUlt5svElFzEZEjDP7O7BifQfF5tU7hn2US7d0mrIf8V3w%2FY4QWFlk&X-Amz-Signature=57f9c38ea615d0c59aa578d610ec7eb5dc7c7e558413f6b276de2791c1992745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XR36FM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCaFzTaCI9emVRd2Gm0eF0BPL5jJUspMuDfcn7%2FYStppgIhAKcqncuDqpSperHPB3OCUoOjM%2FirkhO9G4q%2BOEjXTFpFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwacW3tP6U%2FTib%2BY6kq3AP%2FeKmvBfhz9mu0aHKlexuyTAvEsqTH9tNJDhhW23c3x7k4pzTTTDx9oTjs4h4ErDIwyGLwWA1ewdRUiXu%2BXZ0VhirjRMrFzFIZ%2F1ecqZ9t0zEYUGjpbRq37yr7sGzqOnycJcMJWShy5i1vh9ya4D1kiYNW%2BVUpSe3t2yulZVaOMoEWNuhK5QuKYvk35k4mo%2BY13Cs%2FS9G9QyiY0x5vKCcccZDi4pqiZwymWAWPYPV3s5iQailC0p457DavdHGxCeGMaJ9Q5xqSCAgBpZR0Fm24fIfPR6IutSbNjKwuPYUnWQOm5SF7G6O9xuA2xCe1k%2FMLRuA1JDRBegyr2MkY9MAPSYOopzCtpbCzU7MaeXxKA6WcEEsDucMN5q7Za8rzMXCzJLe4FP4dT4UU4UjoU9svOoGSOisiND%2Bs2q1WrGO8bGbd%2Be3ppDC24RSPMu4QAYMeJl18mJuyHtxGMLMmfFmIq%2FomtJO6qfi132dYioWA6WTqorskuTogqy%2BSfu40cjwif4zZlRIQJr6ybM4x3iyfr2YaP%2FVZTGuWGK5e%2BZdEL2wvOqcWeZHnELiGyFQTKDY0F55TJyu%2Bl2j7bH0ngAS5F2gNQLl%2BiDOENFjgps3Y6q%2BmTVCy%2FC0DpcAXhDCAmKPEBjqkATkbCfmz8TZhqt9a7uZZ7sWEIHLwxSGAHbTrrjkXxti2SIocusCgmAogJgQKan1gl93CxIBi0DASqTc4JWn%2FGhAtfb16NiP0fxcIPRWhzr7E5nzJkn0ggsx%2FCtYRcrOegnT9LrOic3rmFNPVjAbG7XscdXfdAvMIbwVohqpUlt5svElFzEZEjDP7O7BifQfF5tU7hn2US7d0mrIf8V3w%2FY4QWFlk&X-Amz-Signature=23166b4fb36abbb4c0170be59a505388b6635b7a6059c8afceda6100b94fab1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XR36FM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCaFzTaCI9emVRd2Gm0eF0BPL5jJUspMuDfcn7%2FYStppgIhAKcqncuDqpSperHPB3OCUoOjM%2FirkhO9G4q%2BOEjXTFpFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwacW3tP6U%2FTib%2BY6kq3AP%2FeKmvBfhz9mu0aHKlexuyTAvEsqTH9tNJDhhW23c3x7k4pzTTTDx9oTjs4h4ErDIwyGLwWA1ewdRUiXu%2BXZ0VhirjRMrFzFIZ%2F1ecqZ9t0zEYUGjpbRq37yr7sGzqOnycJcMJWShy5i1vh9ya4D1kiYNW%2BVUpSe3t2yulZVaOMoEWNuhK5QuKYvk35k4mo%2BY13Cs%2FS9G9QyiY0x5vKCcccZDi4pqiZwymWAWPYPV3s5iQailC0p457DavdHGxCeGMaJ9Q5xqSCAgBpZR0Fm24fIfPR6IutSbNjKwuPYUnWQOm5SF7G6O9xuA2xCe1k%2FMLRuA1JDRBegyr2MkY9MAPSYOopzCtpbCzU7MaeXxKA6WcEEsDucMN5q7Za8rzMXCzJLe4FP4dT4UU4UjoU9svOoGSOisiND%2Bs2q1WrGO8bGbd%2Be3ppDC24RSPMu4QAYMeJl18mJuyHtxGMLMmfFmIq%2FomtJO6qfi132dYioWA6WTqorskuTogqy%2BSfu40cjwif4zZlRIQJr6ybM4x3iyfr2YaP%2FVZTGuWGK5e%2BZdEL2wvOqcWeZHnELiGyFQTKDY0F55TJyu%2Bl2j7bH0ngAS5F2gNQLl%2BiDOENFjgps3Y6q%2BmTVCy%2FC0DpcAXhDCAmKPEBjqkATkbCfmz8TZhqt9a7uZZ7sWEIHLwxSGAHbTrrjkXxti2SIocusCgmAogJgQKan1gl93CxIBi0DASqTc4JWn%2FGhAtfb16NiP0fxcIPRWhzr7E5nzJkn0ggsx%2FCtYRcrOegnT9LrOic3rmFNPVjAbG7XscdXfdAvMIbwVohqpUlt5svElFzEZEjDP7O7BifQfF5tU7hn2US7d0mrIf8V3w%2FY4QWFlk&X-Amz-Signature=df8dda2a1ae82c1c970d716f6683bb910b5ffc9cddf1817e09222f6e7f06b96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XR36FM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCaFzTaCI9emVRd2Gm0eF0BPL5jJUspMuDfcn7%2FYStppgIhAKcqncuDqpSperHPB3OCUoOjM%2FirkhO9G4q%2BOEjXTFpFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwacW3tP6U%2FTib%2BY6kq3AP%2FeKmvBfhz9mu0aHKlexuyTAvEsqTH9tNJDhhW23c3x7k4pzTTTDx9oTjs4h4ErDIwyGLwWA1ewdRUiXu%2BXZ0VhirjRMrFzFIZ%2F1ecqZ9t0zEYUGjpbRq37yr7sGzqOnycJcMJWShy5i1vh9ya4D1kiYNW%2BVUpSe3t2yulZVaOMoEWNuhK5QuKYvk35k4mo%2BY13Cs%2FS9G9QyiY0x5vKCcccZDi4pqiZwymWAWPYPV3s5iQailC0p457DavdHGxCeGMaJ9Q5xqSCAgBpZR0Fm24fIfPR6IutSbNjKwuPYUnWQOm5SF7G6O9xuA2xCe1k%2FMLRuA1JDRBegyr2MkY9MAPSYOopzCtpbCzU7MaeXxKA6WcEEsDucMN5q7Za8rzMXCzJLe4FP4dT4UU4UjoU9svOoGSOisiND%2Bs2q1WrGO8bGbd%2Be3ppDC24RSPMu4QAYMeJl18mJuyHtxGMLMmfFmIq%2FomtJO6qfi132dYioWA6WTqorskuTogqy%2BSfu40cjwif4zZlRIQJr6ybM4x3iyfr2YaP%2FVZTGuWGK5e%2BZdEL2wvOqcWeZHnELiGyFQTKDY0F55TJyu%2Bl2j7bH0ngAS5F2gNQLl%2BiDOENFjgps3Y6q%2BmTVCy%2FC0DpcAXhDCAmKPEBjqkATkbCfmz8TZhqt9a7uZZ7sWEIHLwxSGAHbTrrjkXxti2SIocusCgmAogJgQKan1gl93CxIBi0DASqTc4JWn%2FGhAtfb16NiP0fxcIPRWhzr7E5nzJkn0ggsx%2FCtYRcrOegnT9LrOic3rmFNPVjAbG7XscdXfdAvMIbwVohqpUlt5svElFzEZEjDP7O7BifQfF5tU7hn2US7d0mrIf8V3w%2FY4QWFlk&X-Amz-Signature=494194526ecf40822b0e848a0d85b32f0f54088fff301ebcde7a23c4bdd2bd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XR36FM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCaFzTaCI9emVRd2Gm0eF0BPL5jJUspMuDfcn7%2FYStppgIhAKcqncuDqpSperHPB3OCUoOjM%2FirkhO9G4q%2BOEjXTFpFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwacW3tP6U%2FTib%2BY6kq3AP%2FeKmvBfhz9mu0aHKlexuyTAvEsqTH9tNJDhhW23c3x7k4pzTTTDx9oTjs4h4ErDIwyGLwWA1ewdRUiXu%2BXZ0VhirjRMrFzFIZ%2F1ecqZ9t0zEYUGjpbRq37yr7sGzqOnycJcMJWShy5i1vh9ya4D1kiYNW%2BVUpSe3t2yulZVaOMoEWNuhK5QuKYvk35k4mo%2BY13Cs%2FS9G9QyiY0x5vKCcccZDi4pqiZwymWAWPYPV3s5iQailC0p457DavdHGxCeGMaJ9Q5xqSCAgBpZR0Fm24fIfPR6IutSbNjKwuPYUnWQOm5SF7G6O9xuA2xCe1k%2FMLRuA1JDRBegyr2MkY9MAPSYOopzCtpbCzU7MaeXxKA6WcEEsDucMN5q7Za8rzMXCzJLe4FP4dT4UU4UjoU9svOoGSOisiND%2Bs2q1WrGO8bGbd%2Be3ppDC24RSPMu4QAYMeJl18mJuyHtxGMLMmfFmIq%2FomtJO6qfi132dYioWA6WTqorskuTogqy%2BSfu40cjwif4zZlRIQJr6ybM4x3iyfr2YaP%2FVZTGuWGK5e%2BZdEL2wvOqcWeZHnELiGyFQTKDY0F55TJyu%2Bl2j7bH0ngAS5F2gNQLl%2BiDOENFjgps3Y6q%2BmTVCy%2FC0DpcAXhDCAmKPEBjqkATkbCfmz8TZhqt9a7uZZ7sWEIHLwxSGAHbTrrjkXxti2SIocusCgmAogJgQKan1gl93CxIBi0DASqTc4JWn%2FGhAtfb16NiP0fxcIPRWhzr7E5nzJkn0ggsx%2FCtYRcrOegnT9LrOic3rmFNPVjAbG7XscdXfdAvMIbwVohqpUlt5svElFzEZEjDP7O7BifQfF5tU7hn2US7d0mrIf8V3w%2FY4QWFlk&X-Amz-Signature=b71946a35a8cf6e3b09d8e62355f4cddf413fbc9be4f66177f7d126ff127f23f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

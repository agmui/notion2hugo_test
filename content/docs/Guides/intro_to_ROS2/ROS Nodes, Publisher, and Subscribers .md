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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEZCLMO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBizi3JBnJxvvOQIx%2FlSufOT3JG404maocx4%2Fj8hX8e2AiEA2J1FIPPDJtnqVI75y8gLfwldprR%2BKCHz3ZPsOyypPckqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGUnBJn%2Bsn8kfbCfCrcA68ksmBYF9Ppz%2B41uuGPKq87KFqSWiijZKssNJfSOmg%2Be%2FxLFslynQflGZJKdRudRQ%2F29HSc4BZG0RB654LChlC%2F1%2BkuXTLdONMNuZ2HwnQJ%2B1IvMj6DZwXfzHitTp9mRNSL2dmOlfLIIirXDAYa6acGxSo55DRR5XH39KL%2BMOGL5D9O0Z6BnwgxJLpG4q%2BVdyfwxDomQwhWBPFRMwfNLUcdVBtqZXBoU09p8WHxfDd9Do0AsYDIDwcmdWdXZvbee3zYInoi5xI1iZ20PqSP7sHApLWW%2F%2Ft9qzlITKyANR7ItE65rSHJ%2BS52tyNLYoAA6WtlioVnu8hww43VlwtjfvQ89ZBfA77eF7xD0nPAxTCNElgINaa0qmcfgtizNjeHqXMHcUpOSzTER4hNhdju83hUQP%2B%2FAfCig1Ua3wh7VPH2g4Ir%2Brv9NpuJJ5I%2Bst%2FlRhSZ8dT%2FCut5z6dbER5qAN1V43klP8Z6i9btsRImDf1%2Fmvg9wbnDzhB0AxPNYoIy4ZoHqd2mtNTMx15p0K%2FdhC5DUuWyBsMMIt2yY7tKk2YskRJe1bBux%2Bw63R%2FqBXBWmoczLE9XiOFMhzMuwAuFKH%2F%2B2GaFQWOIF%2BJ9JJEgE6hV%2BChjmzXFeOEV2D8OMLjL8r8GOqUBClxvzyl9wDicjkZA1sUkne0S5SMwMNY6sKbdJ7%2B4%2FmARjnYTnV7g29HwnoHhb8QpOAkeWB4%2F6WwTbFxnI8cNyXQLZ%2Bb1cPUXGaK7XwmT%2FTMEplU8qdSbKJ5TU1obM2iecBawVi%2BfuiL8vrlm5Xtc%2FKeULMrTbKRo%2BvEgYdGLi5riC8tZHgWJH75DmOhkR%2F9TfXK7imp5WwC%2FgdcoXtS2macDWIdJ&X-Amz-Signature=dc188d38aeac545cfc4251647c968765807a728abdc776ca6ccc3391e7f7a7f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEZCLMO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBizi3JBnJxvvOQIx%2FlSufOT3JG404maocx4%2Fj8hX8e2AiEA2J1FIPPDJtnqVI75y8gLfwldprR%2BKCHz3ZPsOyypPckqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGUnBJn%2Bsn8kfbCfCrcA68ksmBYF9Ppz%2B41uuGPKq87KFqSWiijZKssNJfSOmg%2Be%2FxLFslynQflGZJKdRudRQ%2F29HSc4BZG0RB654LChlC%2F1%2BkuXTLdONMNuZ2HwnQJ%2B1IvMj6DZwXfzHitTp9mRNSL2dmOlfLIIirXDAYa6acGxSo55DRR5XH39KL%2BMOGL5D9O0Z6BnwgxJLpG4q%2BVdyfwxDomQwhWBPFRMwfNLUcdVBtqZXBoU09p8WHxfDd9Do0AsYDIDwcmdWdXZvbee3zYInoi5xI1iZ20PqSP7sHApLWW%2F%2Ft9qzlITKyANR7ItE65rSHJ%2BS52tyNLYoAA6WtlioVnu8hww43VlwtjfvQ89ZBfA77eF7xD0nPAxTCNElgINaa0qmcfgtizNjeHqXMHcUpOSzTER4hNhdju83hUQP%2B%2FAfCig1Ua3wh7VPH2g4Ir%2Brv9NpuJJ5I%2Bst%2FlRhSZ8dT%2FCut5z6dbER5qAN1V43klP8Z6i9btsRImDf1%2Fmvg9wbnDzhB0AxPNYoIy4ZoHqd2mtNTMx15p0K%2FdhC5DUuWyBsMMIt2yY7tKk2YskRJe1bBux%2Bw63R%2FqBXBWmoczLE9XiOFMhzMuwAuFKH%2F%2B2GaFQWOIF%2BJ9JJEgE6hV%2BChjmzXFeOEV2D8OMLjL8r8GOqUBClxvzyl9wDicjkZA1sUkne0S5SMwMNY6sKbdJ7%2B4%2FmARjnYTnV7g29HwnoHhb8QpOAkeWB4%2F6WwTbFxnI8cNyXQLZ%2Bb1cPUXGaK7XwmT%2FTMEplU8qdSbKJ5TU1obM2iecBawVi%2BfuiL8vrlm5Xtc%2FKeULMrTbKRo%2BvEgYdGLi5riC8tZHgWJH75DmOhkR%2F9TfXK7imp5WwC%2FgdcoXtS2macDWIdJ&X-Amz-Signature=4e34dd6ac5ab5c81b5eb3cc11827f1394304c4dea4e64a8c4e17945493dcda72&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEZCLMO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBizi3JBnJxvvOQIx%2FlSufOT3JG404maocx4%2Fj8hX8e2AiEA2J1FIPPDJtnqVI75y8gLfwldprR%2BKCHz3ZPsOyypPckqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGUnBJn%2Bsn8kfbCfCrcA68ksmBYF9Ppz%2B41uuGPKq87KFqSWiijZKssNJfSOmg%2Be%2FxLFslynQflGZJKdRudRQ%2F29HSc4BZG0RB654LChlC%2F1%2BkuXTLdONMNuZ2HwnQJ%2B1IvMj6DZwXfzHitTp9mRNSL2dmOlfLIIirXDAYa6acGxSo55DRR5XH39KL%2BMOGL5D9O0Z6BnwgxJLpG4q%2BVdyfwxDomQwhWBPFRMwfNLUcdVBtqZXBoU09p8WHxfDd9Do0AsYDIDwcmdWdXZvbee3zYInoi5xI1iZ20PqSP7sHApLWW%2F%2Ft9qzlITKyANR7ItE65rSHJ%2BS52tyNLYoAA6WtlioVnu8hww43VlwtjfvQ89ZBfA77eF7xD0nPAxTCNElgINaa0qmcfgtizNjeHqXMHcUpOSzTER4hNhdju83hUQP%2B%2FAfCig1Ua3wh7VPH2g4Ir%2Brv9NpuJJ5I%2Bst%2FlRhSZ8dT%2FCut5z6dbER5qAN1V43klP8Z6i9btsRImDf1%2Fmvg9wbnDzhB0AxPNYoIy4ZoHqd2mtNTMx15p0K%2FdhC5DUuWyBsMMIt2yY7tKk2YskRJe1bBux%2Bw63R%2FqBXBWmoczLE9XiOFMhzMuwAuFKH%2F%2B2GaFQWOIF%2BJ9JJEgE6hV%2BChjmzXFeOEV2D8OMLjL8r8GOqUBClxvzyl9wDicjkZA1sUkne0S5SMwMNY6sKbdJ7%2B4%2FmARjnYTnV7g29HwnoHhb8QpOAkeWB4%2F6WwTbFxnI8cNyXQLZ%2Bb1cPUXGaK7XwmT%2FTMEplU8qdSbKJ5TU1obM2iecBawVi%2BfuiL8vrlm5Xtc%2FKeULMrTbKRo%2BvEgYdGLi5riC8tZHgWJH75DmOhkR%2F9TfXK7imp5WwC%2FgdcoXtS2macDWIdJ&X-Amz-Signature=b0abed9edeb243c5935125e1a427c1c26cdfd4c58b993ee48e3ca3de9011a60a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEZCLMO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBizi3JBnJxvvOQIx%2FlSufOT3JG404maocx4%2Fj8hX8e2AiEA2J1FIPPDJtnqVI75y8gLfwldprR%2BKCHz3ZPsOyypPckqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGUnBJn%2Bsn8kfbCfCrcA68ksmBYF9Ppz%2B41uuGPKq87KFqSWiijZKssNJfSOmg%2Be%2FxLFslynQflGZJKdRudRQ%2F29HSc4BZG0RB654LChlC%2F1%2BkuXTLdONMNuZ2HwnQJ%2B1IvMj6DZwXfzHitTp9mRNSL2dmOlfLIIirXDAYa6acGxSo55DRR5XH39KL%2BMOGL5D9O0Z6BnwgxJLpG4q%2BVdyfwxDomQwhWBPFRMwfNLUcdVBtqZXBoU09p8WHxfDd9Do0AsYDIDwcmdWdXZvbee3zYInoi5xI1iZ20PqSP7sHApLWW%2F%2Ft9qzlITKyANR7ItE65rSHJ%2BS52tyNLYoAA6WtlioVnu8hww43VlwtjfvQ89ZBfA77eF7xD0nPAxTCNElgINaa0qmcfgtizNjeHqXMHcUpOSzTER4hNhdju83hUQP%2B%2FAfCig1Ua3wh7VPH2g4Ir%2Brv9NpuJJ5I%2Bst%2FlRhSZ8dT%2FCut5z6dbER5qAN1V43klP8Z6i9btsRImDf1%2Fmvg9wbnDzhB0AxPNYoIy4ZoHqd2mtNTMx15p0K%2FdhC5DUuWyBsMMIt2yY7tKk2YskRJe1bBux%2Bw63R%2FqBXBWmoczLE9XiOFMhzMuwAuFKH%2F%2B2GaFQWOIF%2BJ9JJEgE6hV%2BChjmzXFeOEV2D8OMLjL8r8GOqUBClxvzyl9wDicjkZA1sUkne0S5SMwMNY6sKbdJ7%2B4%2FmARjnYTnV7g29HwnoHhb8QpOAkeWB4%2F6WwTbFxnI8cNyXQLZ%2Bb1cPUXGaK7XwmT%2FTMEplU8qdSbKJ5TU1obM2iecBawVi%2BfuiL8vrlm5Xtc%2FKeULMrTbKRo%2BvEgYdGLi5riC8tZHgWJH75DmOhkR%2F9TfXK7imp5WwC%2FgdcoXtS2macDWIdJ&X-Amz-Signature=fea005eec565a65ca0ba7a621363850daa08094aff96eecaee39a9d2c0bae907&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEZCLMO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBizi3JBnJxvvOQIx%2FlSufOT3JG404maocx4%2Fj8hX8e2AiEA2J1FIPPDJtnqVI75y8gLfwldprR%2BKCHz3ZPsOyypPckqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGUnBJn%2Bsn8kfbCfCrcA68ksmBYF9Ppz%2B41uuGPKq87KFqSWiijZKssNJfSOmg%2Be%2FxLFslynQflGZJKdRudRQ%2F29HSc4BZG0RB654LChlC%2F1%2BkuXTLdONMNuZ2HwnQJ%2B1IvMj6DZwXfzHitTp9mRNSL2dmOlfLIIirXDAYa6acGxSo55DRR5XH39KL%2BMOGL5D9O0Z6BnwgxJLpG4q%2BVdyfwxDomQwhWBPFRMwfNLUcdVBtqZXBoU09p8WHxfDd9Do0AsYDIDwcmdWdXZvbee3zYInoi5xI1iZ20PqSP7sHApLWW%2F%2Ft9qzlITKyANR7ItE65rSHJ%2BS52tyNLYoAA6WtlioVnu8hww43VlwtjfvQ89ZBfA77eF7xD0nPAxTCNElgINaa0qmcfgtizNjeHqXMHcUpOSzTER4hNhdju83hUQP%2B%2FAfCig1Ua3wh7VPH2g4Ir%2Brv9NpuJJ5I%2Bst%2FlRhSZ8dT%2FCut5z6dbER5qAN1V43klP8Z6i9btsRImDf1%2Fmvg9wbnDzhB0AxPNYoIy4ZoHqd2mtNTMx15p0K%2FdhC5DUuWyBsMMIt2yY7tKk2YskRJe1bBux%2Bw63R%2FqBXBWmoczLE9XiOFMhzMuwAuFKH%2F%2B2GaFQWOIF%2BJ9JJEgE6hV%2BChjmzXFeOEV2D8OMLjL8r8GOqUBClxvzyl9wDicjkZA1sUkne0S5SMwMNY6sKbdJ7%2B4%2FmARjnYTnV7g29HwnoHhb8QpOAkeWB4%2F6WwTbFxnI8cNyXQLZ%2Bb1cPUXGaK7XwmT%2FTMEplU8qdSbKJ5TU1obM2iecBawVi%2BfuiL8vrlm5Xtc%2FKeULMrTbKRo%2BvEgYdGLi5riC8tZHgWJH75DmOhkR%2F9TfXK7imp5WwC%2FgdcoXtS2macDWIdJ&X-Amz-Signature=7137a5358428101679f1aba90e10106739d2da0fd18de18d76bcf6725f587f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEZCLMO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBizi3JBnJxvvOQIx%2FlSufOT3JG404maocx4%2Fj8hX8e2AiEA2J1FIPPDJtnqVI75y8gLfwldprR%2BKCHz3ZPsOyypPckqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGUnBJn%2Bsn8kfbCfCrcA68ksmBYF9Ppz%2B41uuGPKq87KFqSWiijZKssNJfSOmg%2Be%2FxLFslynQflGZJKdRudRQ%2F29HSc4BZG0RB654LChlC%2F1%2BkuXTLdONMNuZ2HwnQJ%2B1IvMj6DZwXfzHitTp9mRNSL2dmOlfLIIirXDAYa6acGxSo55DRR5XH39KL%2BMOGL5D9O0Z6BnwgxJLpG4q%2BVdyfwxDomQwhWBPFRMwfNLUcdVBtqZXBoU09p8WHxfDd9Do0AsYDIDwcmdWdXZvbee3zYInoi5xI1iZ20PqSP7sHApLWW%2F%2Ft9qzlITKyANR7ItE65rSHJ%2BS52tyNLYoAA6WtlioVnu8hww43VlwtjfvQ89ZBfA77eF7xD0nPAxTCNElgINaa0qmcfgtizNjeHqXMHcUpOSzTER4hNhdju83hUQP%2B%2FAfCig1Ua3wh7VPH2g4Ir%2Brv9NpuJJ5I%2Bst%2FlRhSZ8dT%2FCut5z6dbER5qAN1V43klP8Z6i9btsRImDf1%2Fmvg9wbnDzhB0AxPNYoIy4ZoHqd2mtNTMx15p0K%2FdhC5DUuWyBsMMIt2yY7tKk2YskRJe1bBux%2Bw63R%2FqBXBWmoczLE9XiOFMhzMuwAuFKH%2F%2B2GaFQWOIF%2BJ9JJEgE6hV%2BChjmzXFeOEV2D8OMLjL8r8GOqUBClxvzyl9wDicjkZA1sUkne0S5SMwMNY6sKbdJ7%2B4%2FmARjnYTnV7g29HwnoHhb8QpOAkeWB4%2F6WwTbFxnI8cNyXQLZ%2Bb1cPUXGaK7XwmT%2FTMEplU8qdSbKJ5TU1obM2iecBawVi%2BfuiL8vrlm5Xtc%2FKeULMrTbKRo%2BvEgYdGLi5riC8tZHgWJH75DmOhkR%2F9TfXK7imp5WwC%2FgdcoXtS2macDWIdJ&X-Amz-Signature=9690a0a53855ca526eba6d702c8b744379bd4a73edf41df1a57eb18fac611307&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEZCLMO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBizi3JBnJxvvOQIx%2FlSufOT3JG404maocx4%2Fj8hX8e2AiEA2J1FIPPDJtnqVI75y8gLfwldprR%2BKCHz3ZPsOyypPckqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGUnBJn%2Bsn8kfbCfCrcA68ksmBYF9Ppz%2B41uuGPKq87KFqSWiijZKssNJfSOmg%2Be%2FxLFslynQflGZJKdRudRQ%2F29HSc4BZG0RB654LChlC%2F1%2BkuXTLdONMNuZ2HwnQJ%2B1IvMj6DZwXfzHitTp9mRNSL2dmOlfLIIirXDAYa6acGxSo55DRR5XH39KL%2BMOGL5D9O0Z6BnwgxJLpG4q%2BVdyfwxDomQwhWBPFRMwfNLUcdVBtqZXBoU09p8WHxfDd9Do0AsYDIDwcmdWdXZvbee3zYInoi5xI1iZ20PqSP7sHApLWW%2F%2Ft9qzlITKyANR7ItE65rSHJ%2BS52tyNLYoAA6WtlioVnu8hww43VlwtjfvQ89ZBfA77eF7xD0nPAxTCNElgINaa0qmcfgtizNjeHqXMHcUpOSzTER4hNhdju83hUQP%2B%2FAfCig1Ua3wh7VPH2g4Ir%2Brv9NpuJJ5I%2Bst%2FlRhSZ8dT%2FCut5z6dbER5qAN1V43klP8Z6i9btsRImDf1%2Fmvg9wbnDzhB0AxPNYoIy4ZoHqd2mtNTMx15p0K%2FdhC5DUuWyBsMMIt2yY7tKk2YskRJe1bBux%2Bw63R%2FqBXBWmoczLE9XiOFMhzMuwAuFKH%2F%2B2GaFQWOIF%2BJ9JJEgE6hV%2BChjmzXFeOEV2D8OMLjL8r8GOqUBClxvzyl9wDicjkZA1sUkne0S5SMwMNY6sKbdJ7%2B4%2FmARjnYTnV7g29HwnoHhb8QpOAkeWB4%2F6WwTbFxnI8cNyXQLZ%2Bb1cPUXGaK7XwmT%2FTMEplU8qdSbKJ5TU1obM2iecBawVi%2BfuiL8vrlm5Xtc%2FKeULMrTbKRo%2BvEgYdGLi5riC8tZHgWJH75DmOhkR%2F9TfXK7imp5WwC%2FgdcoXtS2macDWIdJ&X-Amz-Signature=841c7e395f1dec149347e29cf9cd1e5e74121b7a026f22016e3c98bc1ef1e61b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEZCLMO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBizi3JBnJxvvOQIx%2FlSufOT3JG404maocx4%2Fj8hX8e2AiEA2J1FIPPDJtnqVI75y8gLfwldprR%2BKCHz3ZPsOyypPckqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGUnBJn%2Bsn8kfbCfCrcA68ksmBYF9Ppz%2B41uuGPKq87KFqSWiijZKssNJfSOmg%2Be%2FxLFslynQflGZJKdRudRQ%2F29HSc4BZG0RB654LChlC%2F1%2BkuXTLdONMNuZ2HwnQJ%2B1IvMj6DZwXfzHitTp9mRNSL2dmOlfLIIirXDAYa6acGxSo55DRR5XH39KL%2BMOGL5D9O0Z6BnwgxJLpG4q%2BVdyfwxDomQwhWBPFRMwfNLUcdVBtqZXBoU09p8WHxfDd9Do0AsYDIDwcmdWdXZvbee3zYInoi5xI1iZ20PqSP7sHApLWW%2F%2Ft9qzlITKyANR7ItE65rSHJ%2BS52tyNLYoAA6WtlioVnu8hww43VlwtjfvQ89ZBfA77eF7xD0nPAxTCNElgINaa0qmcfgtizNjeHqXMHcUpOSzTER4hNhdju83hUQP%2B%2FAfCig1Ua3wh7VPH2g4Ir%2Brv9NpuJJ5I%2Bst%2FlRhSZ8dT%2FCut5z6dbER5qAN1V43klP8Z6i9btsRImDf1%2Fmvg9wbnDzhB0AxPNYoIy4ZoHqd2mtNTMx15p0K%2FdhC5DUuWyBsMMIt2yY7tKk2YskRJe1bBux%2Bw63R%2FqBXBWmoczLE9XiOFMhzMuwAuFKH%2F%2B2GaFQWOIF%2BJ9JJEgE6hV%2BChjmzXFeOEV2D8OMLjL8r8GOqUBClxvzyl9wDicjkZA1sUkne0S5SMwMNY6sKbdJ7%2B4%2FmARjnYTnV7g29HwnoHhb8QpOAkeWB4%2F6WwTbFxnI8cNyXQLZ%2Bb1cPUXGaK7XwmT%2FTMEplU8qdSbKJ5TU1obM2iecBawVi%2BfuiL8vrlm5Xtc%2FKeULMrTbKRo%2BvEgYdGLi5riC8tZHgWJH75DmOhkR%2F9TfXK7imp5WwC%2FgdcoXtS2macDWIdJ&X-Amz-Signature=d108b93156470d2e5efe61d1b91944d37a43257226fb957eec44ed3eba458554&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

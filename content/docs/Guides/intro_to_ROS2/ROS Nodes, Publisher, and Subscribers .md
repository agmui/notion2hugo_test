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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAAF6G3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCdNxcYMK6Y%2F0e9jnFMbYqZBn3ffFrxxPjN78POtyg76AIhAMmpJAfK1zg4tyAexWoj7o%2FlfoYB0dtivAirrk4JtfDTKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8wdTiGuEIXXr5o0q3AOCTai0SiRK0zCL1MZmLZjR94bE5zui3oxyCpRWSM47%2B%2BOXpoYkYVEBzj%2FEzBwfN2LTlpGyY6mQo%2Byh8ZC9YuQAy5Al%2F4F3xvWv3NVAWTPnocvKGccYWpr15y9RbECwumoBe4jqaCOtH2CgmSze10U3sn4FKYyrGo0AZt94CtaNZgV9gWctnIPFcUY9B9eN25Ud4KiyAecUxtRrcOhCdnvOCXPii27venzWd5ttoaiwP0OSsoa4NMBgCEUvdSY4Wtuy%2FXAp4SxFQI49IGFwn6llel1ZG1PEsaxcj9uVMKtaZldRwmFAayWbCTId29dGFmQwY2ez3tXpuMzIdehlBWJrPo28DToydsXudNy0dw98pod%2F%2BOgTKNHkTkc0U3Pid%2FvU9UyweRDMAmWeqhic7%2BWy25U5hRFqXEw0krwKhtmQbLs04uYBYGm2lIkqmg3XS9ccKghWbyKCcFvLhwN0tOSyp7jNMHat%2BE8XsQWQZb%2Bt2UYhTi320LCUMnCBBsk67kD8BU%2B7HElmOezeAiGgTy9xaj6d1b1ns%2BZ25MaTsxfVfxMHALkdhC1E8b1Ts13BMEYNbBfC1vmxNZEMbAhemeGgwQYIteBL%2BYQqOz6YVipAiT%2FzN4J51jkR7mZGPjDdp%2BLCBjqkAQTb5oARkThMO1AlW2ghrE%2FiqsVoGHCIbxUmNs%2FrYs3AcSUDcYDIEcp12qZaqK3e82Zni9XevSSpxJ1WMsFEo37NlT0S%2BIF%2B5oTiovQGmgU2mlqlcd%2Bq9GKU0DVHbA2RRwVBlsivOsXxso1cUhA4H7olOH5Y27fSR9tlar7ukaEXUDypbphckKLxrdAED7j7IVVgVEhib0WG1fHz%2BupgjyXKEZoG&X-Amz-Signature=42a28426c42bf5b0334e6fcb9f1076e9ea7f9a536fecc560513fca1dd100f42a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAAF6G3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCdNxcYMK6Y%2F0e9jnFMbYqZBn3ffFrxxPjN78POtyg76AIhAMmpJAfK1zg4tyAexWoj7o%2FlfoYB0dtivAirrk4JtfDTKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8wdTiGuEIXXr5o0q3AOCTai0SiRK0zCL1MZmLZjR94bE5zui3oxyCpRWSM47%2B%2BOXpoYkYVEBzj%2FEzBwfN2LTlpGyY6mQo%2Byh8ZC9YuQAy5Al%2F4F3xvWv3NVAWTPnocvKGccYWpr15y9RbECwumoBe4jqaCOtH2CgmSze10U3sn4FKYyrGo0AZt94CtaNZgV9gWctnIPFcUY9B9eN25Ud4KiyAecUxtRrcOhCdnvOCXPii27venzWd5ttoaiwP0OSsoa4NMBgCEUvdSY4Wtuy%2FXAp4SxFQI49IGFwn6llel1ZG1PEsaxcj9uVMKtaZldRwmFAayWbCTId29dGFmQwY2ez3tXpuMzIdehlBWJrPo28DToydsXudNy0dw98pod%2F%2BOgTKNHkTkc0U3Pid%2FvU9UyweRDMAmWeqhic7%2BWy25U5hRFqXEw0krwKhtmQbLs04uYBYGm2lIkqmg3XS9ccKghWbyKCcFvLhwN0tOSyp7jNMHat%2BE8XsQWQZb%2Bt2UYhTi320LCUMnCBBsk67kD8BU%2B7HElmOezeAiGgTy9xaj6d1b1ns%2BZ25MaTsxfVfxMHALkdhC1E8b1Ts13BMEYNbBfC1vmxNZEMbAhemeGgwQYIteBL%2BYQqOz6YVipAiT%2FzN4J51jkR7mZGPjDdp%2BLCBjqkAQTb5oARkThMO1AlW2ghrE%2FiqsVoGHCIbxUmNs%2FrYs3AcSUDcYDIEcp12qZaqK3e82Zni9XevSSpxJ1WMsFEo37NlT0S%2BIF%2B5oTiovQGmgU2mlqlcd%2Bq9GKU0DVHbA2RRwVBlsivOsXxso1cUhA4H7olOH5Y27fSR9tlar7ukaEXUDypbphckKLxrdAED7j7IVVgVEhib0WG1fHz%2BupgjyXKEZoG&X-Amz-Signature=9da8332c4e050f9e05a032fb23144a5c654fa2d46b75d20c70bfb0396bcba167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAAF6G3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCdNxcYMK6Y%2F0e9jnFMbYqZBn3ffFrxxPjN78POtyg76AIhAMmpJAfK1zg4tyAexWoj7o%2FlfoYB0dtivAirrk4JtfDTKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8wdTiGuEIXXr5o0q3AOCTai0SiRK0zCL1MZmLZjR94bE5zui3oxyCpRWSM47%2B%2BOXpoYkYVEBzj%2FEzBwfN2LTlpGyY6mQo%2Byh8ZC9YuQAy5Al%2F4F3xvWv3NVAWTPnocvKGccYWpr15y9RbECwumoBe4jqaCOtH2CgmSze10U3sn4FKYyrGo0AZt94CtaNZgV9gWctnIPFcUY9B9eN25Ud4KiyAecUxtRrcOhCdnvOCXPii27venzWd5ttoaiwP0OSsoa4NMBgCEUvdSY4Wtuy%2FXAp4SxFQI49IGFwn6llel1ZG1PEsaxcj9uVMKtaZldRwmFAayWbCTId29dGFmQwY2ez3tXpuMzIdehlBWJrPo28DToydsXudNy0dw98pod%2F%2BOgTKNHkTkc0U3Pid%2FvU9UyweRDMAmWeqhic7%2BWy25U5hRFqXEw0krwKhtmQbLs04uYBYGm2lIkqmg3XS9ccKghWbyKCcFvLhwN0tOSyp7jNMHat%2BE8XsQWQZb%2Bt2UYhTi320LCUMnCBBsk67kD8BU%2B7HElmOezeAiGgTy9xaj6d1b1ns%2BZ25MaTsxfVfxMHALkdhC1E8b1Ts13BMEYNbBfC1vmxNZEMbAhemeGgwQYIteBL%2BYQqOz6YVipAiT%2FzN4J51jkR7mZGPjDdp%2BLCBjqkAQTb5oARkThMO1AlW2ghrE%2FiqsVoGHCIbxUmNs%2FrYs3AcSUDcYDIEcp12qZaqK3e82Zni9XevSSpxJ1WMsFEo37NlT0S%2BIF%2B5oTiovQGmgU2mlqlcd%2Bq9GKU0DVHbA2RRwVBlsivOsXxso1cUhA4H7olOH5Y27fSR9tlar7ukaEXUDypbphckKLxrdAED7j7IVVgVEhib0WG1fHz%2BupgjyXKEZoG&X-Amz-Signature=da610908e196ea900a22368e45210856f7bc39c7be9b2549d0852fc9b7add501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAAF6G3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCdNxcYMK6Y%2F0e9jnFMbYqZBn3ffFrxxPjN78POtyg76AIhAMmpJAfK1zg4tyAexWoj7o%2FlfoYB0dtivAirrk4JtfDTKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8wdTiGuEIXXr5o0q3AOCTai0SiRK0zCL1MZmLZjR94bE5zui3oxyCpRWSM47%2B%2BOXpoYkYVEBzj%2FEzBwfN2LTlpGyY6mQo%2Byh8ZC9YuQAy5Al%2F4F3xvWv3NVAWTPnocvKGccYWpr15y9RbECwumoBe4jqaCOtH2CgmSze10U3sn4FKYyrGo0AZt94CtaNZgV9gWctnIPFcUY9B9eN25Ud4KiyAecUxtRrcOhCdnvOCXPii27venzWd5ttoaiwP0OSsoa4NMBgCEUvdSY4Wtuy%2FXAp4SxFQI49IGFwn6llel1ZG1PEsaxcj9uVMKtaZldRwmFAayWbCTId29dGFmQwY2ez3tXpuMzIdehlBWJrPo28DToydsXudNy0dw98pod%2F%2BOgTKNHkTkc0U3Pid%2FvU9UyweRDMAmWeqhic7%2BWy25U5hRFqXEw0krwKhtmQbLs04uYBYGm2lIkqmg3XS9ccKghWbyKCcFvLhwN0tOSyp7jNMHat%2BE8XsQWQZb%2Bt2UYhTi320LCUMnCBBsk67kD8BU%2B7HElmOezeAiGgTy9xaj6d1b1ns%2BZ25MaTsxfVfxMHALkdhC1E8b1Ts13BMEYNbBfC1vmxNZEMbAhemeGgwQYIteBL%2BYQqOz6YVipAiT%2FzN4J51jkR7mZGPjDdp%2BLCBjqkAQTb5oARkThMO1AlW2ghrE%2FiqsVoGHCIbxUmNs%2FrYs3AcSUDcYDIEcp12qZaqK3e82Zni9XevSSpxJ1WMsFEo37NlT0S%2BIF%2B5oTiovQGmgU2mlqlcd%2Bq9GKU0DVHbA2RRwVBlsivOsXxso1cUhA4H7olOH5Y27fSR9tlar7ukaEXUDypbphckKLxrdAED7j7IVVgVEhib0WG1fHz%2BupgjyXKEZoG&X-Amz-Signature=f64f47e4ccc66053f1909d8c7c1680110c9577bbd10a98c8b28fa973dcd90b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAAF6G3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCdNxcYMK6Y%2F0e9jnFMbYqZBn3ffFrxxPjN78POtyg76AIhAMmpJAfK1zg4tyAexWoj7o%2FlfoYB0dtivAirrk4JtfDTKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8wdTiGuEIXXr5o0q3AOCTai0SiRK0zCL1MZmLZjR94bE5zui3oxyCpRWSM47%2B%2BOXpoYkYVEBzj%2FEzBwfN2LTlpGyY6mQo%2Byh8ZC9YuQAy5Al%2F4F3xvWv3NVAWTPnocvKGccYWpr15y9RbECwumoBe4jqaCOtH2CgmSze10U3sn4FKYyrGo0AZt94CtaNZgV9gWctnIPFcUY9B9eN25Ud4KiyAecUxtRrcOhCdnvOCXPii27venzWd5ttoaiwP0OSsoa4NMBgCEUvdSY4Wtuy%2FXAp4SxFQI49IGFwn6llel1ZG1PEsaxcj9uVMKtaZldRwmFAayWbCTId29dGFmQwY2ez3tXpuMzIdehlBWJrPo28DToydsXudNy0dw98pod%2F%2BOgTKNHkTkc0U3Pid%2FvU9UyweRDMAmWeqhic7%2BWy25U5hRFqXEw0krwKhtmQbLs04uYBYGm2lIkqmg3XS9ccKghWbyKCcFvLhwN0tOSyp7jNMHat%2BE8XsQWQZb%2Bt2UYhTi320LCUMnCBBsk67kD8BU%2B7HElmOezeAiGgTy9xaj6d1b1ns%2BZ25MaTsxfVfxMHALkdhC1E8b1Ts13BMEYNbBfC1vmxNZEMbAhemeGgwQYIteBL%2BYQqOz6YVipAiT%2FzN4J51jkR7mZGPjDdp%2BLCBjqkAQTb5oARkThMO1AlW2ghrE%2FiqsVoGHCIbxUmNs%2FrYs3AcSUDcYDIEcp12qZaqK3e82Zni9XevSSpxJ1WMsFEo37NlT0S%2BIF%2B5oTiovQGmgU2mlqlcd%2Bq9GKU0DVHbA2RRwVBlsivOsXxso1cUhA4H7olOH5Y27fSR9tlar7ukaEXUDypbphckKLxrdAED7j7IVVgVEhib0WG1fHz%2BupgjyXKEZoG&X-Amz-Signature=43d7fc31d7a3cf7fcceca408ec769fcc72f3a2c6abd9d26cbb8461abff79bfde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAAF6G3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCdNxcYMK6Y%2F0e9jnFMbYqZBn3ffFrxxPjN78POtyg76AIhAMmpJAfK1zg4tyAexWoj7o%2FlfoYB0dtivAirrk4JtfDTKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8wdTiGuEIXXr5o0q3AOCTai0SiRK0zCL1MZmLZjR94bE5zui3oxyCpRWSM47%2B%2BOXpoYkYVEBzj%2FEzBwfN2LTlpGyY6mQo%2Byh8ZC9YuQAy5Al%2F4F3xvWv3NVAWTPnocvKGccYWpr15y9RbECwumoBe4jqaCOtH2CgmSze10U3sn4FKYyrGo0AZt94CtaNZgV9gWctnIPFcUY9B9eN25Ud4KiyAecUxtRrcOhCdnvOCXPii27venzWd5ttoaiwP0OSsoa4NMBgCEUvdSY4Wtuy%2FXAp4SxFQI49IGFwn6llel1ZG1PEsaxcj9uVMKtaZldRwmFAayWbCTId29dGFmQwY2ez3tXpuMzIdehlBWJrPo28DToydsXudNy0dw98pod%2F%2BOgTKNHkTkc0U3Pid%2FvU9UyweRDMAmWeqhic7%2BWy25U5hRFqXEw0krwKhtmQbLs04uYBYGm2lIkqmg3XS9ccKghWbyKCcFvLhwN0tOSyp7jNMHat%2BE8XsQWQZb%2Bt2UYhTi320LCUMnCBBsk67kD8BU%2B7HElmOezeAiGgTy9xaj6d1b1ns%2BZ25MaTsxfVfxMHALkdhC1E8b1Ts13BMEYNbBfC1vmxNZEMbAhemeGgwQYIteBL%2BYQqOz6YVipAiT%2FzN4J51jkR7mZGPjDdp%2BLCBjqkAQTb5oARkThMO1AlW2ghrE%2FiqsVoGHCIbxUmNs%2FrYs3AcSUDcYDIEcp12qZaqK3e82Zni9XevSSpxJ1WMsFEo37NlT0S%2BIF%2B5oTiovQGmgU2mlqlcd%2Bq9GKU0DVHbA2RRwVBlsivOsXxso1cUhA4H7olOH5Y27fSR9tlar7ukaEXUDypbphckKLxrdAED7j7IVVgVEhib0WG1fHz%2BupgjyXKEZoG&X-Amz-Signature=480fa2b2594760827945730ae2ad5f5753fc3514cf9624d5ad80dd251e8b8eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAAF6G3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCdNxcYMK6Y%2F0e9jnFMbYqZBn3ffFrxxPjN78POtyg76AIhAMmpJAfK1zg4tyAexWoj7o%2FlfoYB0dtivAirrk4JtfDTKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8wdTiGuEIXXr5o0q3AOCTai0SiRK0zCL1MZmLZjR94bE5zui3oxyCpRWSM47%2B%2BOXpoYkYVEBzj%2FEzBwfN2LTlpGyY6mQo%2Byh8ZC9YuQAy5Al%2F4F3xvWv3NVAWTPnocvKGccYWpr15y9RbECwumoBe4jqaCOtH2CgmSze10U3sn4FKYyrGo0AZt94CtaNZgV9gWctnIPFcUY9B9eN25Ud4KiyAecUxtRrcOhCdnvOCXPii27venzWd5ttoaiwP0OSsoa4NMBgCEUvdSY4Wtuy%2FXAp4SxFQI49IGFwn6llel1ZG1PEsaxcj9uVMKtaZldRwmFAayWbCTId29dGFmQwY2ez3tXpuMzIdehlBWJrPo28DToydsXudNy0dw98pod%2F%2BOgTKNHkTkc0U3Pid%2FvU9UyweRDMAmWeqhic7%2BWy25U5hRFqXEw0krwKhtmQbLs04uYBYGm2lIkqmg3XS9ccKghWbyKCcFvLhwN0tOSyp7jNMHat%2BE8XsQWQZb%2Bt2UYhTi320LCUMnCBBsk67kD8BU%2B7HElmOezeAiGgTy9xaj6d1b1ns%2BZ25MaTsxfVfxMHALkdhC1E8b1Ts13BMEYNbBfC1vmxNZEMbAhemeGgwQYIteBL%2BYQqOz6YVipAiT%2FzN4J51jkR7mZGPjDdp%2BLCBjqkAQTb5oARkThMO1AlW2ghrE%2FiqsVoGHCIbxUmNs%2FrYs3AcSUDcYDIEcp12qZaqK3e82Zni9XevSSpxJ1WMsFEo37NlT0S%2BIF%2B5oTiovQGmgU2mlqlcd%2Bq9GKU0DVHbA2RRwVBlsivOsXxso1cUhA4H7olOH5Y27fSR9tlar7ukaEXUDypbphckKLxrdAED7j7IVVgVEhib0WG1fHz%2BupgjyXKEZoG&X-Amz-Signature=a132e59895a8b97cadccd2e99a0086cdb88999da2969c6505acd76e8f2c46e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAAF6G3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCdNxcYMK6Y%2F0e9jnFMbYqZBn3ffFrxxPjN78POtyg76AIhAMmpJAfK1zg4tyAexWoj7o%2FlfoYB0dtivAirrk4JtfDTKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8wdTiGuEIXXr5o0q3AOCTai0SiRK0zCL1MZmLZjR94bE5zui3oxyCpRWSM47%2B%2BOXpoYkYVEBzj%2FEzBwfN2LTlpGyY6mQo%2Byh8ZC9YuQAy5Al%2F4F3xvWv3NVAWTPnocvKGccYWpr15y9RbECwumoBe4jqaCOtH2CgmSze10U3sn4FKYyrGo0AZt94CtaNZgV9gWctnIPFcUY9B9eN25Ud4KiyAecUxtRrcOhCdnvOCXPii27venzWd5ttoaiwP0OSsoa4NMBgCEUvdSY4Wtuy%2FXAp4SxFQI49IGFwn6llel1ZG1PEsaxcj9uVMKtaZldRwmFAayWbCTId29dGFmQwY2ez3tXpuMzIdehlBWJrPo28DToydsXudNy0dw98pod%2F%2BOgTKNHkTkc0U3Pid%2FvU9UyweRDMAmWeqhic7%2BWy25U5hRFqXEw0krwKhtmQbLs04uYBYGm2lIkqmg3XS9ccKghWbyKCcFvLhwN0tOSyp7jNMHat%2BE8XsQWQZb%2Bt2UYhTi320LCUMnCBBsk67kD8BU%2B7HElmOezeAiGgTy9xaj6d1b1ns%2BZ25MaTsxfVfxMHALkdhC1E8b1Ts13BMEYNbBfC1vmxNZEMbAhemeGgwQYIteBL%2BYQqOz6YVipAiT%2FzN4J51jkR7mZGPjDdp%2BLCBjqkAQTb5oARkThMO1AlW2ghrE%2FiqsVoGHCIbxUmNs%2FrYs3AcSUDcYDIEcp12qZaqK3e82Zni9XevSSpxJ1WMsFEo37NlT0S%2BIF%2B5oTiovQGmgU2mlqlcd%2Bq9GKU0DVHbA2RRwVBlsivOsXxso1cUhA4H7olOH5Y27fSR9tlar7ukaEXUDypbphckKLxrdAED7j7IVVgVEhib0WG1fHz%2BupgjyXKEZoG&X-Amz-Signature=78a2d8472473e8352ce808a6e49ee320e8ccc01a1cb73296595ceb6f58bfaaef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

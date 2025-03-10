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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJNGPEV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFOBTcsy1NEGDaWBhqj1ufAuwQ9dy9VJIYR99EstVriAiEAwiQC7F9pxJ96xW9F1G%2FgZj%2BjtTedzhF6S66mBAqNiYoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT1sbV1FEFiprwR9yrcA1fsOPZi4e5uCqfSnsZ7RFSoCiqhk6%2FCjWMBMIfnDXUJ95i2rAV1ukQXMJexs8asf7ES8poRPmG9OkeVBVAgvcHapQsKjzyrLqGwFKOizHJ1RCQHoV%2FfA1s4a1sgPfLOmwoe7smnZOANBkdpee1GP0Y%2FHhFqRQnAmGYReagde7a2LSZ5hunCthOKC4pZdkqTlvvN1i4JnoXKg2Py6TgYF3nYKqNohknUg3LtbgWRXtXE5Ir7lDZaXaV68liVCOOddFtdj8XkIoT2ehq8PciMKAD%2F%2BwKTdKIMSCA4N6d9FWKp5AtFpoaFW8ePLVBox20Rg%2FliaA14aJZlFB0ITVLdoKBVI8qlL4ZbmU55RwbelZMKnFG440zFDv486poLJ41wMkgZdAVjXjEJZMs%2BFdJS2hxOL44xB%2BX4Sv2tz4OVZB64NhPUddTwaqqSED7gNYkQbiRBaeycW3PT6tH%2BCk2%2BAy1mIfjig5pM4RuASBmnNrVXhNcgeDAR0PrpWv%2Bd1y9Tf%2BsHuBrW2cY344JRMO5y%2FFxXO9tVNVi%2FKS2s7ih7qPelphGsfOCiHGPvICV%2F5QF7s9aQfU1lQYQSS1kp7mKhuwNxLqYONtFhRf1YMEREfwk1YnO9C8fBiuffgivUMMmKu74GOqUBA%2FTPYcePvhth5KFZ5om3pL%2BhUVXxfT6UyskkwOG6pMC%2Fk1YX%2FhdZlmRNx%2BKr5aQb5NigUT62q7OD%2BeoYmqrVG%2FmPewmKZ4Jx%2FxRf7dVdH4hqFdcDErTZM%2FxU%2B0aErcTCnC17nopicl3gOWPMryKbm6ckVkUUy4Bk2EXPxoom6Fa83bQZtZcSlDQXKl0%2Ff6iMvfraajyZvUmgiFLCBgDqBXPBZ8hf&X-Amz-Signature=dd55b1c4afb1b171f2589fec4a1a720e75d808a6e46154e267384aff8d926103&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJNGPEV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFOBTcsy1NEGDaWBhqj1ufAuwQ9dy9VJIYR99EstVriAiEAwiQC7F9pxJ96xW9F1G%2FgZj%2BjtTedzhF6S66mBAqNiYoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT1sbV1FEFiprwR9yrcA1fsOPZi4e5uCqfSnsZ7RFSoCiqhk6%2FCjWMBMIfnDXUJ95i2rAV1ukQXMJexs8asf7ES8poRPmG9OkeVBVAgvcHapQsKjzyrLqGwFKOizHJ1RCQHoV%2FfA1s4a1sgPfLOmwoe7smnZOANBkdpee1GP0Y%2FHhFqRQnAmGYReagde7a2LSZ5hunCthOKC4pZdkqTlvvN1i4JnoXKg2Py6TgYF3nYKqNohknUg3LtbgWRXtXE5Ir7lDZaXaV68liVCOOddFtdj8XkIoT2ehq8PciMKAD%2F%2BwKTdKIMSCA4N6d9FWKp5AtFpoaFW8ePLVBox20Rg%2FliaA14aJZlFB0ITVLdoKBVI8qlL4ZbmU55RwbelZMKnFG440zFDv486poLJ41wMkgZdAVjXjEJZMs%2BFdJS2hxOL44xB%2BX4Sv2tz4OVZB64NhPUddTwaqqSED7gNYkQbiRBaeycW3PT6tH%2BCk2%2BAy1mIfjig5pM4RuASBmnNrVXhNcgeDAR0PrpWv%2Bd1y9Tf%2BsHuBrW2cY344JRMO5y%2FFxXO9tVNVi%2FKS2s7ih7qPelphGsfOCiHGPvICV%2F5QF7s9aQfU1lQYQSS1kp7mKhuwNxLqYONtFhRf1YMEREfwk1YnO9C8fBiuffgivUMMmKu74GOqUBA%2FTPYcePvhth5KFZ5om3pL%2BhUVXxfT6UyskkwOG6pMC%2Fk1YX%2FhdZlmRNx%2BKr5aQb5NigUT62q7OD%2BeoYmqrVG%2FmPewmKZ4Jx%2FxRf7dVdH4hqFdcDErTZM%2FxU%2B0aErcTCnC17nopicl3gOWPMryKbm6ckVkUUy4Bk2EXPxoom6Fa83bQZtZcSlDQXKl0%2Ff6iMvfraajyZvUmgiFLCBgDqBXPBZ8hf&X-Amz-Signature=d5aed09d24f06eda909658b2e5a9957d4d5413a52c3c811fccdaf9dfbc588f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJNGPEV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFOBTcsy1NEGDaWBhqj1ufAuwQ9dy9VJIYR99EstVriAiEAwiQC7F9pxJ96xW9F1G%2FgZj%2BjtTedzhF6S66mBAqNiYoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT1sbV1FEFiprwR9yrcA1fsOPZi4e5uCqfSnsZ7RFSoCiqhk6%2FCjWMBMIfnDXUJ95i2rAV1ukQXMJexs8asf7ES8poRPmG9OkeVBVAgvcHapQsKjzyrLqGwFKOizHJ1RCQHoV%2FfA1s4a1sgPfLOmwoe7smnZOANBkdpee1GP0Y%2FHhFqRQnAmGYReagde7a2LSZ5hunCthOKC4pZdkqTlvvN1i4JnoXKg2Py6TgYF3nYKqNohknUg3LtbgWRXtXE5Ir7lDZaXaV68liVCOOddFtdj8XkIoT2ehq8PciMKAD%2F%2BwKTdKIMSCA4N6d9FWKp5AtFpoaFW8ePLVBox20Rg%2FliaA14aJZlFB0ITVLdoKBVI8qlL4ZbmU55RwbelZMKnFG440zFDv486poLJ41wMkgZdAVjXjEJZMs%2BFdJS2hxOL44xB%2BX4Sv2tz4OVZB64NhPUddTwaqqSED7gNYkQbiRBaeycW3PT6tH%2BCk2%2BAy1mIfjig5pM4RuASBmnNrVXhNcgeDAR0PrpWv%2Bd1y9Tf%2BsHuBrW2cY344JRMO5y%2FFxXO9tVNVi%2FKS2s7ih7qPelphGsfOCiHGPvICV%2F5QF7s9aQfU1lQYQSS1kp7mKhuwNxLqYONtFhRf1YMEREfwk1YnO9C8fBiuffgivUMMmKu74GOqUBA%2FTPYcePvhth5KFZ5om3pL%2BhUVXxfT6UyskkwOG6pMC%2Fk1YX%2FhdZlmRNx%2BKr5aQb5NigUT62q7OD%2BeoYmqrVG%2FmPewmKZ4Jx%2FxRf7dVdH4hqFdcDErTZM%2FxU%2B0aErcTCnC17nopicl3gOWPMryKbm6ckVkUUy4Bk2EXPxoom6Fa83bQZtZcSlDQXKl0%2Ff6iMvfraajyZvUmgiFLCBgDqBXPBZ8hf&X-Amz-Signature=9e1261fdc97d3d8a07a55b4eff44ac7bf101ffface0fd27de0a0818df88ce702&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJNGPEV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFOBTcsy1NEGDaWBhqj1ufAuwQ9dy9VJIYR99EstVriAiEAwiQC7F9pxJ96xW9F1G%2FgZj%2BjtTedzhF6S66mBAqNiYoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT1sbV1FEFiprwR9yrcA1fsOPZi4e5uCqfSnsZ7RFSoCiqhk6%2FCjWMBMIfnDXUJ95i2rAV1ukQXMJexs8asf7ES8poRPmG9OkeVBVAgvcHapQsKjzyrLqGwFKOizHJ1RCQHoV%2FfA1s4a1sgPfLOmwoe7smnZOANBkdpee1GP0Y%2FHhFqRQnAmGYReagde7a2LSZ5hunCthOKC4pZdkqTlvvN1i4JnoXKg2Py6TgYF3nYKqNohknUg3LtbgWRXtXE5Ir7lDZaXaV68liVCOOddFtdj8XkIoT2ehq8PciMKAD%2F%2BwKTdKIMSCA4N6d9FWKp5AtFpoaFW8ePLVBox20Rg%2FliaA14aJZlFB0ITVLdoKBVI8qlL4ZbmU55RwbelZMKnFG440zFDv486poLJ41wMkgZdAVjXjEJZMs%2BFdJS2hxOL44xB%2BX4Sv2tz4OVZB64NhPUddTwaqqSED7gNYkQbiRBaeycW3PT6tH%2BCk2%2BAy1mIfjig5pM4RuASBmnNrVXhNcgeDAR0PrpWv%2Bd1y9Tf%2BsHuBrW2cY344JRMO5y%2FFxXO9tVNVi%2FKS2s7ih7qPelphGsfOCiHGPvICV%2F5QF7s9aQfU1lQYQSS1kp7mKhuwNxLqYONtFhRf1YMEREfwk1YnO9C8fBiuffgivUMMmKu74GOqUBA%2FTPYcePvhth5KFZ5om3pL%2BhUVXxfT6UyskkwOG6pMC%2Fk1YX%2FhdZlmRNx%2BKr5aQb5NigUT62q7OD%2BeoYmqrVG%2FmPewmKZ4Jx%2FxRf7dVdH4hqFdcDErTZM%2FxU%2B0aErcTCnC17nopicl3gOWPMryKbm6ckVkUUy4Bk2EXPxoom6Fa83bQZtZcSlDQXKl0%2Ff6iMvfraajyZvUmgiFLCBgDqBXPBZ8hf&X-Amz-Signature=9e920897ce4347058e7e66c92e2e1ff2c13f279b40fa327a09a8f23d1aa16fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJNGPEV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFOBTcsy1NEGDaWBhqj1ufAuwQ9dy9VJIYR99EstVriAiEAwiQC7F9pxJ96xW9F1G%2FgZj%2BjtTedzhF6S66mBAqNiYoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT1sbV1FEFiprwR9yrcA1fsOPZi4e5uCqfSnsZ7RFSoCiqhk6%2FCjWMBMIfnDXUJ95i2rAV1ukQXMJexs8asf7ES8poRPmG9OkeVBVAgvcHapQsKjzyrLqGwFKOizHJ1RCQHoV%2FfA1s4a1sgPfLOmwoe7smnZOANBkdpee1GP0Y%2FHhFqRQnAmGYReagde7a2LSZ5hunCthOKC4pZdkqTlvvN1i4JnoXKg2Py6TgYF3nYKqNohknUg3LtbgWRXtXE5Ir7lDZaXaV68liVCOOddFtdj8XkIoT2ehq8PciMKAD%2F%2BwKTdKIMSCA4N6d9FWKp5AtFpoaFW8ePLVBox20Rg%2FliaA14aJZlFB0ITVLdoKBVI8qlL4ZbmU55RwbelZMKnFG440zFDv486poLJ41wMkgZdAVjXjEJZMs%2BFdJS2hxOL44xB%2BX4Sv2tz4OVZB64NhPUddTwaqqSED7gNYkQbiRBaeycW3PT6tH%2BCk2%2BAy1mIfjig5pM4RuASBmnNrVXhNcgeDAR0PrpWv%2Bd1y9Tf%2BsHuBrW2cY344JRMO5y%2FFxXO9tVNVi%2FKS2s7ih7qPelphGsfOCiHGPvICV%2F5QF7s9aQfU1lQYQSS1kp7mKhuwNxLqYONtFhRf1YMEREfwk1YnO9C8fBiuffgivUMMmKu74GOqUBA%2FTPYcePvhth5KFZ5om3pL%2BhUVXxfT6UyskkwOG6pMC%2Fk1YX%2FhdZlmRNx%2BKr5aQb5NigUT62q7OD%2BeoYmqrVG%2FmPewmKZ4Jx%2FxRf7dVdH4hqFdcDErTZM%2FxU%2B0aErcTCnC17nopicl3gOWPMryKbm6ckVkUUy4Bk2EXPxoom6Fa83bQZtZcSlDQXKl0%2Ff6iMvfraajyZvUmgiFLCBgDqBXPBZ8hf&X-Amz-Signature=28fdc44c27b49a736c0e3b49fac5da4c0c503b6423392cff88b7f89a512eb042&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJNGPEV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFOBTcsy1NEGDaWBhqj1ufAuwQ9dy9VJIYR99EstVriAiEAwiQC7F9pxJ96xW9F1G%2FgZj%2BjtTedzhF6S66mBAqNiYoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT1sbV1FEFiprwR9yrcA1fsOPZi4e5uCqfSnsZ7RFSoCiqhk6%2FCjWMBMIfnDXUJ95i2rAV1ukQXMJexs8asf7ES8poRPmG9OkeVBVAgvcHapQsKjzyrLqGwFKOizHJ1RCQHoV%2FfA1s4a1sgPfLOmwoe7smnZOANBkdpee1GP0Y%2FHhFqRQnAmGYReagde7a2LSZ5hunCthOKC4pZdkqTlvvN1i4JnoXKg2Py6TgYF3nYKqNohknUg3LtbgWRXtXE5Ir7lDZaXaV68liVCOOddFtdj8XkIoT2ehq8PciMKAD%2F%2BwKTdKIMSCA4N6d9FWKp5AtFpoaFW8ePLVBox20Rg%2FliaA14aJZlFB0ITVLdoKBVI8qlL4ZbmU55RwbelZMKnFG440zFDv486poLJ41wMkgZdAVjXjEJZMs%2BFdJS2hxOL44xB%2BX4Sv2tz4OVZB64NhPUddTwaqqSED7gNYkQbiRBaeycW3PT6tH%2BCk2%2BAy1mIfjig5pM4RuASBmnNrVXhNcgeDAR0PrpWv%2Bd1y9Tf%2BsHuBrW2cY344JRMO5y%2FFxXO9tVNVi%2FKS2s7ih7qPelphGsfOCiHGPvICV%2F5QF7s9aQfU1lQYQSS1kp7mKhuwNxLqYONtFhRf1YMEREfwk1YnO9C8fBiuffgivUMMmKu74GOqUBA%2FTPYcePvhth5KFZ5om3pL%2BhUVXxfT6UyskkwOG6pMC%2Fk1YX%2FhdZlmRNx%2BKr5aQb5NigUT62q7OD%2BeoYmqrVG%2FmPewmKZ4Jx%2FxRf7dVdH4hqFdcDErTZM%2FxU%2B0aErcTCnC17nopicl3gOWPMryKbm6ckVkUUy4Bk2EXPxoom6Fa83bQZtZcSlDQXKl0%2Ff6iMvfraajyZvUmgiFLCBgDqBXPBZ8hf&X-Amz-Signature=459194a1f747417f7723bf72a81535d8333032362c68cd788ddd1b7c833d4644&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJNGPEV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFOBTcsy1NEGDaWBhqj1ufAuwQ9dy9VJIYR99EstVriAiEAwiQC7F9pxJ96xW9F1G%2FgZj%2BjtTedzhF6S66mBAqNiYoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT1sbV1FEFiprwR9yrcA1fsOPZi4e5uCqfSnsZ7RFSoCiqhk6%2FCjWMBMIfnDXUJ95i2rAV1ukQXMJexs8asf7ES8poRPmG9OkeVBVAgvcHapQsKjzyrLqGwFKOizHJ1RCQHoV%2FfA1s4a1sgPfLOmwoe7smnZOANBkdpee1GP0Y%2FHhFqRQnAmGYReagde7a2LSZ5hunCthOKC4pZdkqTlvvN1i4JnoXKg2Py6TgYF3nYKqNohknUg3LtbgWRXtXE5Ir7lDZaXaV68liVCOOddFtdj8XkIoT2ehq8PciMKAD%2F%2BwKTdKIMSCA4N6d9FWKp5AtFpoaFW8ePLVBox20Rg%2FliaA14aJZlFB0ITVLdoKBVI8qlL4ZbmU55RwbelZMKnFG440zFDv486poLJ41wMkgZdAVjXjEJZMs%2BFdJS2hxOL44xB%2BX4Sv2tz4OVZB64NhPUddTwaqqSED7gNYkQbiRBaeycW3PT6tH%2BCk2%2BAy1mIfjig5pM4RuASBmnNrVXhNcgeDAR0PrpWv%2Bd1y9Tf%2BsHuBrW2cY344JRMO5y%2FFxXO9tVNVi%2FKS2s7ih7qPelphGsfOCiHGPvICV%2F5QF7s9aQfU1lQYQSS1kp7mKhuwNxLqYONtFhRf1YMEREfwk1YnO9C8fBiuffgivUMMmKu74GOqUBA%2FTPYcePvhth5KFZ5om3pL%2BhUVXxfT6UyskkwOG6pMC%2Fk1YX%2FhdZlmRNx%2BKr5aQb5NigUT62q7OD%2BeoYmqrVG%2FmPewmKZ4Jx%2FxRf7dVdH4hqFdcDErTZM%2FxU%2B0aErcTCnC17nopicl3gOWPMryKbm6ckVkUUy4Bk2EXPxoom6Fa83bQZtZcSlDQXKl0%2Ff6iMvfraajyZvUmgiFLCBgDqBXPBZ8hf&X-Amz-Signature=5a4785060d68278cccc88eab10c2700accdf8e54df87faa97479a41dbc69ffde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJNGPEV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFOBTcsy1NEGDaWBhqj1ufAuwQ9dy9VJIYR99EstVriAiEAwiQC7F9pxJ96xW9F1G%2FgZj%2BjtTedzhF6S66mBAqNiYoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT1sbV1FEFiprwR9yrcA1fsOPZi4e5uCqfSnsZ7RFSoCiqhk6%2FCjWMBMIfnDXUJ95i2rAV1ukQXMJexs8asf7ES8poRPmG9OkeVBVAgvcHapQsKjzyrLqGwFKOizHJ1RCQHoV%2FfA1s4a1sgPfLOmwoe7smnZOANBkdpee1GP0Y%2FHhFqRQnAmGYReagde7a2LSZ5hunCthOKC4pZdkqTlvvN1i4JnoXKg2Py6TgYF3nYKqNohknUg3LtbgWRXtXE5Ir7lDZaXaV68liVCOOddFtdj8XkIoT2ehq8PciMKAD%2F%2BwKTdKIMSCA4N6d9FWKp5AtFpoaFW8ePLVBox20Rg%2FliaA14aJZlFB0ITVLdoKBVI8qlL4ZbmU55RwbelZMKnFG440zFDv486poLJ41wMkgZdAVjXjEJZMs%2BFdJS2hxOL44xB%2BX4Sv2tz4OVZB64NhPUddTwaqqSED7gNYkQbiRBaeycW3PT6tH%2BCk2%2BAy1mIfjig5pM4RuASBmnNrVXhNcgeDAR0PrpWv%2Bd1y9Tf%2BsHuBrW2cY344JRMO5y%2FFxXO9tVNVi%2FKS2s7ih7qPelphGsfOCiHGPvICV%2F5QF7s9aQfU1lQYQSS1kp7mKhuwNxLqYONtFhRf1YMEREfwk1YnO9C8fBiuffgivUMMmKu74GOqUBA%2FTPYcePvhth5KFZ5om3pL%2BhUVXxfT6UyskkwOG6pMC%2Fk1YX%2FhdZlmRNx%2BKr5aQb5NigUT62q7OD%2BeoYmqrVG%2FmPewmKZ4Jx%2FxRf7dVdH4hqFdcDErTZM%2FxU%2B0aErcTCnC17nopicl3gOWPMryKbm6ckVkUUy4Bk2EXPxoom6Fa83bQZtZcSlDQXKl0%2Ff6iMvfraajyZvUmgiFLCBgDqBXPBZ8hf&X-Amz-Signature=155a54371e74fe6bdb74b63e52b1093d53784af58f868c2b3ebac99b060ee9de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

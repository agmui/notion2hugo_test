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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQF3PTP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKCY9tPAJXEdjXdtfhva67RO2pGzaqpt%2F7cELPI7NBeAiEAkcQnwrejJsSebmJaSqfkRXQ7ifPH9z7bTNT60GS2GAAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5QTk6AoB%2BybJfSvircAxuoBO9AmgC34gqdx1L3h%2F0UnZRoRYsaYYEOJYlG%2B15CMm30jAHv7lJTBmUcz%2BUZKt9U2oktXMdU9BT3tFbaBWhZ6Mc%2FMgHfU8O4wdM1sWebJ6ulLdNOqr3Hu5zK8I6hiTJ%2B81S5KyD6i3OtqRBXJVKoOiSwTsJN1lAbzJwygnOhtubui67lAta4xsej3EQgrvVDinD1EJMmgDE%2BUfxPu1MaLq3KzXl32pdAA61w4T80HL54jm4kO4wKLIIkvlm0a%2BUGE5owB1VNS4pYfQ7aKwv3yQwn772R86cdrgYjZv7nfwAx7YfelAJ5DwJxp4%2FyFeculouT1eZ%2B1upzpbTR8qBVTnF8CbuG4I8vcBg%2FmZd5bG8jA2XEWSfNwwhasFW3djaWywV2HTVOk7eFbHbw3Cq1zfjx2lue%2FrRxWPeM%2F0kETcasM0KPrmB3PXBnRYjjlsFzh24AfOZvR%2B6%2Bn1mk1Ylpdu%2Bi7gJR%2FMSLlX7kSeCIDlkXTmOGa6G9hHbOLiVLN70EuQQxETjUlFpWflrVMDazeKkWqgX4iCWh2fMREaU3BSDCsCN7DSZeBpFUu%2BKtQRSY9OAZMgcd%2FedE5gb028pOWxNblLU6Gh4RqbyNXkIXLU2PdneGVtWUMLdhMOLKub8GOqUBZmG8FN0ZvfBval6cCBvualfq1Q%2BEGkYgIHqhfyOxluaWG47dH2amGHRpmCjFc4bbmDpflq3uM86iixMTE89V56IPls6%2F%2FVsBdQEcP2YbzqoaDvgbL0zvd0Y55Wi%2F4VwCgs0nNRaRMy445CXq5zvaxTfiJwhONn0DcrBmdSvF1LWxpkqrtBiFFD3nNKcYGJPm0mMTpP70PtoGn8sA8hjSmbP%2FQsaD&X-Amz-Signature=e4a4c21561d4c25c620219d6d16dd03f0316a3c78778eb2af161351aeee0a07c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQF3PTP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKCY9tPAJXEdjXdtfhva67RO2pGzaqpt%2F7cELPI7NBeAiEAkcQnwrejJsSebmJaSqfkRXQ7ifPH9z7bTNT60GS2GAAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5QTk6AoB%2BybJfSvircAxuoBO9AmgC34gqdx1L3h%2F0UnZRoRYsaYYEOJYlG%2B15CMm30jAHv7lJTBmUcz%2BUZKt9U2oktXMdU9BT3tFbaBWhZ6Mc%2FMgHfU8O4wdM1sWebJ6ulLdNOqr3Hu5zK8I6hiTJ%2B81S5KyD6i3OtqRBXJVKoOiSwTsJN1lAbzJwygnOhtubui67lAta4xsej3EQgrvVDinD1EJMmgDE%2BUfxPu1MaLq3KzXl32pdAA61w4T80HL54jm4kO4wKLIIkvlm0a%2BUGE5owB1VNS4pYfQ7aKwv3yQwn772R86cdrgYjZv7nfwAx7YfelAJ5DwJxp4%2FyFeculouT1eZ%2B1upzpbTR8qBVTnF8CbuG4I8vcBg%2FmZd5bG8jA2XEWSfNwwhasFW3djaWywV2HTVOk7eFbHbw3Cq1zfjx2lue%2FrRxWPeM%2F0kETcasM0KPrmB3PXBnRYjjlsFzh24AfOZvR%2B6%2Bn1mk1Ylpdu%2Bi7gJR%2FMSLlX7kSeCIDlkXTmOGa6G9hHbOLiVLN70EuQQxETjUlFpWflrVMDazeKkWqgX4iCWh2fMREaU3BSDCsCN7DSZeBpFUu%2BKtQRSY9OAZMgcd%2FedE5gb028pOWxNblLU6Gh4RqbyNXkIXLU2PdneGVtWUMLdhMOLKub8GOqUBZmG8FN0ZvfBval6cCBvualfq1Q%2BEGkYgIHqhfyOxluaWG47dH2amGHRpmCjFc4bbmDpflq3uM86iixMTE89V56IPls6%2F%2FVsBdQEcP2YbzqoaDvgbL0zvd0Y55Wi%2F4VwCgs0nNRaRMy445CXq5zvaxTfiJwhONn0DcrBmdSvF1LWxpkqrtBiFFD3nNKcYGJPm0mMTpP70PtoGn8sA8hjSmbP%2FQsaD&X-Amz-Signature=6c799b575ab3192497063c4552044f1959a52c548ac336a566e1ab41f757a1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQF3PTP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKCY9tPAJXEdjXdtfhva67RO2pGzaqpt%2F7cELPI7NBeAiEAkcQnwrejJsSebmJaSqfkRXQ7ifPH9z7bTNT60GS2GAAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5QTk6AoB%2BybJfSvircAxuoBO9AmgC34gqdx1L3h%2F0UnZRoRYsaYYEOJYlG%2B15CMm30jAHv7lJTBmUcz%2BUZKt9U2oktXMdU9BT3tFbaBWhZ6Mc%2FMgHfU8O4wdM1sWebJ6ulLdNOqr3Hu5zK8I6hiTJ%2B81S5KyD6i3OtqRBXJVKoOiSwTsJN1lAbzJwygnOhtubui67lAta4xsej3EQgrvVDinD1EJMmgDE%2BUfxPu1MaLq3KzXl32pdAA61w4T80HL54jm4kO4wKLIIkvlm0a%2BUGE5owB1VNS4pYfQ7aKwv3yQwn772R86cdrgYjZv7nfwAx7YfelAJ5DwJxp4%2FyFeculouT1eZ%2B1upzpbTR8qBVTnF8CbuG4I8vcBg%2FmZd5bG8jA2XEWSfNwwhasFW3djaWywV2HTVOk7eFbHbw3Cq1zfjx2lue%2FrRxWPeM%2F0kETcasM0KPrmB3PXBnRYjjlsFzh24AfOZvR%2B6%2Bn1mk1Ylpdu%2Bi7gJR%2FMSLlX7kSeCIDlkXTmOGa6G9hHbOLiVLN70EuQQxETjUlFpWflrVMDazeKkWqgX4iCWh2fMREaU3BSDCsCN7DSZeBpFUu%2BKtQRSY9OAZMgcd%2FedE5gb028pOWxNblLU6Gh4RqbyNXkIXLU2PdneGVtWUMLdhMOLKub8GOqUBZmG8FN0ZvfBval6cCBvualfq1Q%2BEGkYgIHqhfyOxluaWG47dH2amGHRpmCjFc4bbmDpflq3uM86iixMTE89V56IPls6%2F%2FVsBdQEcP2YbzqoaDvgbL0zvd0Y55Wi%2F4VwCgs0nNRaRMy445CXq5zvaxTfiJwhONn0DcrBmdSvF1LWxpkqrtBiFFD3nNKcYGJPm0mMTpP70PtoGn8sA8hjSmbP%2FQsaD&X-Amz-Signature=4ebd5fe9cd8d6d33500ead2b7b003dfc18ae94f4776d4b1fcf48585d318b9e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQF3PTP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKCY9tPAJXEdjXdtfhva67RO2pGzaqpt%2F7cELPI7NBeAiEAkcQnwrejJsSebmJaSqfkRXQ7ifPH9z7bTNT60GS2GAAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5QTk6AoB%2BybJfSvircAxuoBO9AmgC34gqdx1L3h%2F0UnZRoRYsaYYEOJYlG%2B15CMm30jAHv7lJTBmUcz%2BUZKt9U2oktXMdU9BT3tFbaBWhZ6Mc%2FMgHfU8O4wdM1sWebJ6ulLdNOqr3Hu5zK8I6hiTJ%2B81S5KyD6i3OtqRBXJVKoOiSwTsJN1lAbzJwygnOhtubui67lAta4xsej3EQgrvVDinD1EJMmgDE%2BUfxPu1MaLq3KzXl32pdAA61w4T80HL54jm4kO4wKLIIkvlm0a%2BUGE5owB1VNS4pYfQ7aKwv3yQwn772R86cdrgYjZv7nfwAx7YfelAJ5DwJxp4%2FyFeculouT1eZ%2B1upzpbTR8qBVTnF8CbuG4I8vcBg%2FmZd5bG8jA2XEWSfNwwhasFW3djaWywV2HTVOk7eFbHbw3Cq1zfjx2lue%2FrRxWPeM%2F0kETcasM0KPrmB3PXBnRYjjlsFzh24AfOZvR%2B6%2Bn1mk1Ylpdu%2Bi7gJR%2FMSLlX7kSeCIDlkXTmOGa6G9hHbOLiVLN70EuQQxETjUlFpWflrVMDazeKkWqgX4iCWh2fMREaU3BSDCsCN7DSZeBpFUu%2BKtQRSY9OAZMgcd%2FedE5gb028pOWxNblLU6Gh4RqbyNXkIXLU2PdneGVtWUMLdhMOLKub8GOqUBZmG8FN0ZvfBval6cCBvualfq1Q%2BEGkYgIHqhfyOxluaWG47dH2amGHRpmCjFc4bbmDpflq3uM86iixMTE89V56IPls6%2F%2FVsBdQEcP2YbzqoaDvgbL0zvd0Y55Wi%2F4VwCgs0nNRaRMy445CXq5zvaxTfiJwhONn0DcrBmdSvF1LWxpkqrtBiFFD3nNKcYGJPm0mMTpP70PtoGn8sA8hjSmbP%2FQsaD&X-Amz-Signature=6ce2cb39129b528810b271a3aa7e32650a5e9a0ef4637d324a57de5a3e8bee5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQF3PTP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKCY9tPAJXEdjXdtfhva67RO2pGzaqpt%2F7cELPI7NBeAiEAkcQnwrejJsSebmJaSqfkRXQ7ifPH9z7bTNT60GS2GAAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5QTk6AoB%2BybJfSvircAxuoBO9AmgC34gqdx1L3h%2F0UnZRoRYsaYYEOJYlG%2B15CMm30jAHv7lJTBmUcz%2BUZKt9U2oktXMdU9BT3tFbaBWhZ6Mc%2FMgHfU8O4wdM1sWebJ6ulLdNOqr3Hu5zK8I6hiTJ%2B81S5KyD6i3OtqRBXJVKoOiSwTsJN1lAbzJwygnOhtubui67lAta4xsej3EQgrvVDinD1EJMmgDE%2BUfxPu1MaLq3KzXl32pdAA61w4T80HL54jm4kO4wKLIIkvlm0a%2BUGE5owB1VNS4pYfQ7aKwv3yQwn772R86cdrgYjZv7nfwAx7YfelAJ5DwJxp4%2FyFeculouT1eZ%2B1upzpbTR8qBVTnF8CbuG4I8vcBg%2FmZd5bG8jA2XEWSfNwwhasFW3djaWywV2HTVOk7eFbHbw3Cq1zfjx2lue%2FrRxWPeM%2F0kETcasM0KPrmB3PXBnRYjjlsFzh24AfOZvR%2B6%2Bn1mk1Ylpdu%2Bi7gJR%2FMSLlX7kSeCIDlkXTmOGa6G9hHbOLiVLN70EuQQxETjUlFpWflrVMDazeKkWqgX4iCWh2fMREaU3BSDCsCN7DSZeBpFUu%2BKtQRSY9OAZMgcd%2FedE5gb028pOWxNblLU6Gh4RqbyNXkIXLU2PdneGVtWUMLdhMOLKub8GOqUBZmG8FN0ZvfBval6cCBvualfq1Q%2BEGkYgIHqhfyOxluaWG47dH2amGHRpmCjFc4bbmDpflq3uM86iixMTE89V56IPls6%2F%2FVsBdQEcP2YbzqoaDvgbL0zvd0Y55Wi%2F4VwCgs0nNRaRMy445CXq5zvaxTfiJwhONn0DcrBmdSvF1LWxpkqrtBiFFD3nNKcYGJPm0mMTpP70PtoGn8sA8hjSmbP%2FQsaD&X-Amz-Signature=4561e021117d76029d522dafa933054fe501f29f243b81d7cff81234620ff796&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQF3PTP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKCY9tPAJXEdjXdtfhva67RO2pGzaqpt%2F7cELPI7NBeAiEAkcQnwrejJsSebmJaSqfkRXQ7ifPH9z7bTNT60GS2GAAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5QTk6AoB%2BybJfSvircAxuoBO9AmgC34gqdx1L3h%2F0UnZRoRYsaYYEOJYlG%2B15CMm30jAHv7lJTBmUcz%2BUZKt9U2oktXMdU9BT3tFbaBWhZ6Mc%2FMgHfU8O4wdM1sWebJ6ulLdNOqr3Hu5zK8I6hiTJ%2B81S5KyD6i3OtqRBXJVKoOiSwTsJN1lAbzJwygnOhtubui67lAta4xsej3EQgrvVDinD1EJMmgDE%2BUfxPu1MaLq3KzXl32pdAA61w4T80HL54jm4kO4wKLIIkvlm0a%2BUGE5owB1VNS4pYfQ7aKwv3yQwn772R86cdrgYjZv7nfwAx7YfelAJ5DwJxp4%2FyFeculouT1eZ%2B1upzpbTR8qBVTnF8CbuG4I8vcBg%2FmZd5bG8jA2XEWSfNwwhasFW3djaWywV2HTVOk7eFbHbw3Cq1zfjx2lue%2FrRxWPeM%2F0kETcasM0KPrmB3PXBnRYjjlsFzh24AfOZvR%2B6%2Bn1mk1Ylpdu%2Bi7gJR%2FMSLlX7kSeCIDlkXTmOGa6G9hHbOLiVLN70EuQQxETjUlFpWflrVMDazeKkWqgX4iCWh2fMREaU3BSDCsCN7DSZeBpFUu%2BKtQRSY9OAZMgcd%2FedE5gb028pOWxNblLU6Gh4RqbyNXkIXLU2PdneGVtWUMLdhMOLKub8GOqUBZmG8FN0ZvfBval6cCBvualfq1Q%2BEGkYgIHqhfyOxluaWG47dH2amGHRpmCjFc4bbmDpflq3uM86iixMTE89V56IPls6%2F%2FVsBdQEcP2YbzqoaDvgbL0zvd0Y55Wi%2F4VwCgs0nNRaRMy445CXq5zvaxTfiJwhONn0DcrBmdSvF1LWxpkqrtBiFFD3nNKcYGJPm0mMTpP70PtoGn8sA8hjSmbP%2FQsaD&X-Amz-Signature=d0faf95f8f44db28415c3613ffe6169a6079c7991d9628a98830a14b8e968879&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQF3PTP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKCY9tPAJXEdjXdtfhva67RO2pGzaqpt%2F7cELPI7NBeAiEAkcQnwrejJsSebmJaSqfkRXQ7ifPH9z7bTNT60GS2GAAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5QTk6AoB%2BybJfSvircAxuoBO9AmgC34gqdx1L3h%2F0UnZRoRYsaYYEOJYlG%2B15CMm30jAHv7lJTBmUcz%2BUZKt9U2oktXMdU9BT3tFbaBWhZ6Mc%2FMgHfU8O4wdM1sWebJ6ulLdNOqr3Hu5zK8I6hiTJ%2B81S5KyD6i3OtqRBXJVKoOiSwTsJN1lAbzJwygnOhtubui67lAta4xsej3EQgrvVDinD1EJMmgDE%2BUfxPu1MaLq3KzXl32pdAA61w4T80HL54jm4kO4wKLIIkvlm0a%2BUGE5owB1VNS4pYfQ7aKwv3yQwn772R86cdrgYjZv7nfwAx7YfelAJ5DwJxp4%2FyFeculouT1eZ%2B1upzpbTR8qBVTnF8CbuG4I8vcBg%2FmZd5bG8jA2XEWSfNwwhasFW3djaWywV2HTVOk7eFbHbw3Cq1zfjx2lue%2FrRxWPeM%2F0kETcasM0KPrmB3PXBnRYjjlsFzh24AfOZvR%2B6%2Bn1mk1Ylpdu%2Bi7gJR%2FMSLlX7kSeCIDlkXTmOGa6G9hHbOLiVLN70EuQQxETjUlFpWflrVMDazeKkWqgX4iCWh2fMREaU3BSDCsCN7DSZeBpFUu%2BKtQRSY9OAZMgcd%2FedE5gb028pOWxNblLU6Gh4RqbyNXkIXLU2PdneGVtWUMLdhMOLKub8GOqUBZmG8FN0ZvfBval6cCBvualfq1Q%2BEGkYgIHqhfyOxluaWG47dH2amGHRpmCjFc4bbmDpflq3uM86iixMTE89V56IPls6%2F%2FVsBdQEcP2YbzqoaDvgbL0zvd0Y55Wi%2F4VwCgs0nNRaRMy445CXq5zvaxTfiJwhONn0DcrBmdSvF1LWxpkqrtBiFFD3nNKcYGJPm0mMTpP70PtoGn8sA8hjSmbP%2FQsaD&X-Amz-Signature=99fc303ae335820bf6538129b0c4afb18a39a3ed95c3fc46c6bf2d958a7c1a96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQF3PTP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKCY9tPAJXEdjXdtfhva67RO2pGzaqpt%2F7cELPI7NBeAiEAkcQnwrejJsSebmJaSqfkRXQ7ifPH9z7bTNT60GS2GAAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5QTk6AoB%2BybJfSvircAxuoBO9AmgC34gqdx1L3h%2F0UnZRoRYsaYYEOJYlG%2B15CMm30jAHv7lJTBmUcz%2BUZKt9U2oktXMdU9BT3tFbaBWhZ6Mc%2FMgHfU8O4wdM1sWebJ6ulLdNOqr3Hu5zK8I6hiTJ%2B81S5KyD6i3OtqRBXJVKoOiSwTsJN1lAbzJwygnOhtubui67lAta4xsej3EQgrvVDinD1EJMmgDE%2BUfxPu1MaLq3KzXl32pdAA61w4T80HL54jm4kO4wKLIIkvlm0a%2BUGE5owB1VNS4pYfQ7aKwv3yQwn772R86cdrgYjZv7nfwAx7YfelAJ5DwJxp4%2FyFeculouT1eZ%2B1upzpbTR8qBVTnF8CbuG4I8vcBg%2FmZd5bG8jA2XEWSfNwwhasFW3djaWywV2HTVOk7eFbHbw3Cq1zfjx2lue%2FrRxWPeM%2F0kETcasM0KPrmB3PXBnRYjjlsFzh24AfOZvR%2B6%2Bn1mk1Ylpdu%2Bi7gJR%2FMSLlX7kSeCIDlkXTmOGa6G9hHbOLiVLN70EuQQxETjUlFpWflrVMDazeKkWqgX4iCWh2fMREaU3BSDCsCN7DSZeBpFUu%2BKtQRSY9OAZMgcd%2FedE5gb028pOWxNblLU6Gh4RqbyNXkIXLU2PdneGVtWUMLdhMOLKub8GOqUBZmG8FN0ZvfBval6cCBvualfq1Q%2BEGkYgIHqhfyOxluaWG47dH2amGHRpmCjFc4bbmDpflq3uM86iixMTE89V56IPls6%2F%2FVsBdQEcP2YbzqoaDvgbL0zvd0Y55Wi%2F4VwCgs0nNRaRMy445CXq5zvaxTfiJwhONn0DcrBmdSvF1LWxpkqrtBiFFD3nNKcYGJPm0mMTpP70PtoGn8sA8hjSmbP%2FQsaD&X-Amz-Signature=956f0bd8827c35131e4db8f69ac61787e796616c809589806fab99d5b92ab614&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

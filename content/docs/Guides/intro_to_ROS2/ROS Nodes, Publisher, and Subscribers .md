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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BXRSIV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgGWgtxFVpcVC7wx2j8GrpN8b2njfhheK9RSCQHmab6QIgPHx6W9v%2FZOE7dHlWyP4Yse4nEqTKBgBregW6xT3193kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr6iHD0k9L3EJ12uyrcA0HR0u22EsCbdxOtYpZoURboQUKQquX7z1k3S96cg9tXz%2BgR4PhjCO2d3McN557XaDd3AY8w79S%2F1ADGPnOTzo3tqy%2FJHkDu%2FJ1%2BraqwETYl59wuNm%2F4c9pZ9iF7GhQ0I5I6kG9tSdYi4%2FAe9iH4t%2B%2BledT05ZNYSvOI2qug3WNbB5MSUDNYAwIyebhrKzP5%2B8c6MFnyQEwZtVF8syYo4tkBJbBtr0Yj%2BbJbrK8OEoHRIIAvnb5rNKmWPNSDxwgRXf2OD1EnkqNMhVt4%2B%2Be99441YYdIXNv7kZ4m%2BXQ3rcCUCfvmQcyT8kduOqk04Z0z8ZHjuGaeTslFuh6R69IT8%2FH4jHWU8FByf3DsD94nz31q3coZPga0cOFgVNuyipjMEE47vKwMfWy4sFSOUBlhqTSFXn3CyLK%2BhUnHAltiOXfT2p%2BaTAw0K7xv2EzESgqr0raX8eYm7vstf9F7oO01%2FueooMzAMvXLYK71eQtC6pPm3Sa0jNEKzw3RaoDbgoJm6tEVLitvXZlecnQc5K%2BEw3%2BhXLPoHsuunvUuefJ7M%2BPDobZQNp7qiVSn32bPwTqqV%2Blgucv8%2F%2BGfqsfdcXH3Q9wV8GfhsYEEVvBhSKxH%2B8SOQuVju5rgndUih2buMLOGvsEGOqUBiw8t20epyXWkmxqeecAZHIcEefrQX2OQSLlyIrO%2FuH0gx6517zKVNRFk6WV3yxWJc%2F4cIvyz%2FtKgW4vIiqm8cZwNcJsYoOYIHx%2FtiPG9AsejcoQZVb5Lu6pk4v7VWLtKYIYctN%2FyZYtdyKNZrfLEyHCQG9YPtHWbBi4x3kAvYE2lNkkOyjFqehUHdY4sM%2Bc18Yi6syQ3Qk%2FrOze12AZBTlvAo64m&X-Amz-Signature=6c012667e6ec44a991d99d0eda5c3b1d01f0d9c348512601270b41a29921ac69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BXRSIV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgGWgtxFVpcVC7wx2j8GrpN8b2njfhheK9RSCQHmab6QIgPHx6W9v%2FZOE7dHlWyP4Yse4nEqTKBgBregW6xT3193kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr6iHD0k9L3EJ12uyrcA0HR0u22EsCbdxOtYpZoURboQUKQquX7z1k3S96cg9tXz%2BgR4PhjCO2d3McN557XaDd3AY8w79S%2F1ADGPnOTzo3tqy%2FJHkDu%2FJ1%2BraqwETYl59wuNm%2F4c9pZ9iF7GhQ0I5I6kG9tSdYi4%2FAe9iH4t%2B%2BledT05ZNYSvOI2qug3WNbB5MSUDNYAwIyebhrKzP5%2B8c6MFnyQEwZtVF8syYo4tkBJbBtr0Yj%2BbJbrK8OEoHRIIAvnb5rNKmWPNSDxwgRXf2OD1EnkqNMhVt4%2B%2Be99441YYdIXNv7kZ4m%2BXQ3rcCUCfvmQcyT8kduOqk04Z0z8ZHjuGaeTslFuh6R69IT8%2FH4jHWU8FByf3DsD94nz31q3coZPga0cOFgVNuyipjMEE47vKwMfWy4sFSOUBlhqTSFXn3CyLK%2BhUnHAltiOXfT2p%2BaTAw0K7xv2EzESgqr0raX8eYm7vstf9F7oO01%2FueooMzAMvXLYK71eQtC6pPm3Sa0jNEKzw3RaoDbgoJm6tEVLitvXZlecnQc5K%2BEw3%2BhXLPoHsuunvUuefJ7M%2BPDobZQNp7qiVSn32bPwTqqV%2Blgucv8%2F%2BGfqsfdcXH3Q9wV8GfhsYEEVvBhSKxH%2B8SOQuVju5rgndUih2buMLOGvsEGOqUBiw8t20epyXWkmxqeecAZHIcEefrQX2OQSLlyIrO%2FuH0gx6517zKVNRFk6WV3yxWJc%2F4cIvyz%2FtKgW4vIiqm8cZwNcJsYoOYIHx%2FtiPG9AsejcoQZVb5Lu6pk4v7VWLtKYIYctN%2FyZYtdyKNZrfLEyHCQG9YPtHWbBi4x3kAvYE2lNkkOyjFqehUHdY4sM%2Bc18Yi6syQ3Qk%2FrOze12AZBTlvAo64m&X-Amz-Signature=e93ec3e45d87d6deaca5959c553162015c39c310706738f92447c87384ecacff&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BXRSIV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgGWgtxFVpcVC7wx2j8GrpN8b2njfhheK9RSCQHmab6QIgPHx6W9v%2FZOE7dHlWyP4Yse4nEqTKBgBregW6xT3193kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr6iHD0k9L3EJ12uyrcA0HR0u22EsCbdxOtYpZoURboQUKQquX7z1k3S96cg9tXz%2BgR4PhjCO2d3McN557XaDd3AY8w79S%2F1ADGPnOTzo3tqy%2FJHkDu%2FJ1%2BraqwETYl59wuNm%2F4c9pZ9iF7GhQ0I5I6kG9tSdYi4%2FAe9iH4t%2B%2BledT05ZNYSvOI2qug3WNbB5MSUDNYAwIyebhrKzP5%2B8c6MFnyQEwZtVF8syYo4tkBJbBtr0Yj%2BbJbrK8OEoHRIIAvnb5rNKmWPNSDxwgRXf2OD1EnkqNMhVt4%2B%2Be99441YYdIXNv7kZ4m%2BXQ3rcCUCfvmQcyT8kduOqk04Z0z8ZHjuGaeTslFuh6R69IT8%2FH4jHWU8FByf3DsD94nz31q3coZPga0cOFgVNuyipjMEE47vKwMfWy4sFSOUBlhqTSFXn3CyLK%2BhUnHAltiOXfT2p%2BaTAw0K7xv2EzESgqr0raX8eYm7vstf9F7oO01%2FueooMzAMvXLYK71eQtC6pPm3Sa0jNEKzw3RaoDbgoJm6tEVLitvXZlecnQc5K%2BEw3%2BhXLPoHsuunvUuefJ7M%2BPDobZQNp7qiVSn32bPwTqqV%2Blgucv8%2F%2BGfqsfdcXH3Q9wV8GfhsYEEVvBhSKxH%2B8SOQuVju5rgndUih2buMLOGvsEGOqUBiw8t20epyXWkmxqeecAZHIcEefrQX2OQSLlyIrO%2FuH0gx6517zKVNRFk6WV3yxWJc%2F4cIvyz%2FtKgW4vIiqm8cZwNcJsYoOYIHx%2FtiPG9AsejcoQZVb5Lu6pk4v7VWLtKYIYctN%2FyZYtdyKNZrfLEyHCQG9YPtHWbBi4x3kAvYE2lNkkOyjFqehUHdY4sM%2Bc18Yi6syQ3Qk%2FrOze12AZBTlvAo64m&X-Amz-Signature=26a69a0e8130ba8a8f60a5a1daf46093fb8a54db7c92a84e31fa0fe066b1b9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BXRSIV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgGWgtxFVpcVC7wx2j8GrpN8b2njfhheK9RSCQHmab6QIgPHx6W9v%2FZOE7dHlWyP4Yse4nEqTKBgBregW6xT3193kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr6iHD0k9L3EJ12uyrcA0HR0u22EsCbdxOtYpZoURboQUKQquX7z1k3S96cg9tXz%2BgR4PhjCO2d3McN557XaDd3AY8w79S%2F1ADGPnOTzo3tqy%2FJHkDu%2FJ1%2BraqwETYl59wuNm%2F4c9pZ9iF7GhQ0I5I6kG9tSdYi4%2FAe9iH4t%2B%2BledT05ZNYSvOI2qug3WNbB5MSUDNYAwIyebhrKzP5%2B8c6MFnyQEwZtVF8syYo4tkBJbBtr0Yj%2BbJbrK8OEoHRIIAvnb5rNKmWPNSDxwgRXf2OD1EnkqNMhVt4%2B%2Be99441YYdIXNv7kZ4m%2BXQ3rcCUCfvmQcyT8kduOqk04Z0z8ZHjuGaeTslFuh6R69IT8%2FH4jHWU8FByf3DsD94nz31q3coZPga0cOFgVNuyipjMEE47vKwMfWy4sFSOUBlhqTSFXn3CyLK%2BhUnHAltiOXfT2p%2BaTAw0K7xv2EzESgqr0raX8eYm7vstf9F7oO01%2FueooMzAMvXLYK71eQtC6pPm3Sa0jNEKzw3RaoDbgoJm6tEVLitvXZlecnQc5K%2BEw3%2BhXLPoHsuunvUuefJ7M%2BPDobZQNp7qiVSn32bPwTqqV%2Blgucv8%2F%2BGfqsfdcXH3Q9wV8GfhsYEEVvBhSKxH%2B8SOQuVju5rgndUih2buMLOGvsEGOqUBiw8t20epyXWkmxqeecAZHIcEefrQX2OQSLlyIrO%2FuH0gx6517zKVNRFk6WV3yxWJc%2F4cIvyz%2FtKgW4vIiqm8cZwNcJsYoOYIHx%2FtiPG9AsejcoQZVb5Lu6pk4v7VWLtKYIYctN%2FyZYtdyKNZrfLEyHCQG9YPtHWbBi4x3kAvYE2lNkkOyjFqehUHdY4sM%2Bc18Yi6syQ3Qk%2FrOze12AZBTlvAo64m&X-Amz-Signature=875860d89ca76b406bdda36fa2f1292729901a048b788898ad75adcf94420983&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BXRSIV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgGWgtxFVpcVC7wx2j8GrpN8b2njfhheK9RSCQHmab6QIgPHx6W9v%2FZOE7dHlWyP4Yse4nEqTKBgBregW6xT3193kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr6iHD0k9L3EJ12uyrcA0HR0u22EsCbdxOtYpZoURboQUKQquX7z1k3S96cg9tXz%2BgR4PhjCO2d3McN557XaDd3AY8w79S%2F1ADGPnOTzo3tqy%2FJHkDu%2FJ1%2BraqwETYl59wuNm%2F4c9pZ9iF7GhQ0I5I6kG9tSdYi4%2FAe9iH4t%2B%2BledT05ZNYSvOI2qug3WNbB5MSUDNYAwIyebhrKzP5%2B8c6MFnyQEwZtVF8syYo4tkBJbBtr0Yj%2BbJbrK8OEoHRIIAvnb5rNKmWPNSDxwgRXf2OD1EnkqNMhVt4%2B%2Be99441YYdIXNv7kZ4m%2BXQ3rcCUCfvmQcyT8kduOqk04Z0z8ZHjuGaeTslFuh6R69IT8%2FH4jHWU8FByf3DsD94nz31q3coZPga0cOFgVNuyipjMEE47vKwMfWy4sFSOUBlhqTSFXn3CyLK%2BhUnHAltiOXfT2p%2BaTAw0K7xv2EzESgqr0raX8eYm7vstf9F7oO01%2FueooMzAMvXLYK71eQtC6pPm3Sa0jNEKzw3RaoDbgoJm6tEVLitvXZlecnQc5K%2BEw3%2BhXLPoHsuunvUuefJ7M%2BPDobZQNp7qiVSn32bPwTqqV%2Blgucv8%2F%2BGfqsfdcXH3Q9wV8GfhsYEEVvBhSKxH%2B8SOQuVju5rgndUih2buMLOGvsEGOqUBiw8t20epyXWkmxqeecAZHIcEefrQX2OQSLlyIrO%2FuH0gx6517zKVNRFk6WV3yxWJc%2F4cIvyz%2FtKgW4vIiqm8cZwNcJsYoOYIHx%2FtiPG9AsejcoQZVb5Lu6pk4v7VWLtKYIYctN%2FyZYtdyKNZrfLEyHCQG9YPtHWbBi4x3kAvYE2lNkkOyjFqehUHdY4sM%2Bc18Yi6syQ3Qk%2FrOze12AZBTlvAo64m&X-Amz-Signature=8eb5d92d9929fe4a18d53eb783fa9cc5fa03e9f7ceb91380c1003cc06ef2b106&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BXRSIV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgGWgtxFVpcVC7wx2j8GrpN8b2njfhheK9RSCQHmab6QIgPHx6W9v%2FZOE7dHlWyP4Yse4nEqTKBgBregW6xT3193kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr6iHD0k9L3EJ12uyrcA0HR0u22EsCbdxOtYpZoURboQUKQquX7z1k3S96cg9tXz%2BgR4PhjCO2d3McN557XaDd3AY8w79S%2F1ADGPnOTzo3tqy%2FJHkDu%2FJ1%2BraqwETYl59wuNm%2F4c9pZ9iF7GhQ0I5I6kG9tSdYi4%2FAe9iH4t%2B%2BledT05ZNYSvOI2qug3WNbB5MSUDNYAwIyebhrKzP5%2B8c6MFnyQEwZtVF8syYo4tkBJbBtr0Yj%2BbJbrK8OEoHRIIAvnb5rNKmWPNSDxwgRXf2OD1EnkqNMhVt4%2B%2Be99441YYdIXNv7kZ4m%2BXQ3rcCUCfvmQcyT8kduOqk04Z0z8ZHjuGaeTslFuh6R69IT8%2FH4jHWU8FByf3DsD94nz31q3coZPga0cOFgVNuyipjMEE47vKwMfWy4sFSOUBlhqTSFXn3CyLK%2BhUnHAltiOXfT2p%2BaTAw0K7xv2EzESgqr0raX8eYm7vstf9F7oO01%2FueooMzAMvXLYK71eQtC6pPm3Sa0jNEKzw3RaoDbgoJm6tEVLitvXZlecnQc5K%2BEw3%2BhXLPoHsuunvUuefJ7M%2BPDobZQNp7qiVSn32bPwTqqV%2Blgucv8%2F%2BGfqsfdcXH3Q9wV8GfhsYEEVvBhSKxH%2B8SOQuVju5rgndUih2buMLOGvsEGOqUBiw8t20epyXWkmxqeecAZHIcEefrQX2OQSLlyIrO%2FuH0gx6517zKVNRFk6WV3yxWJc%2F4cIvyz%2FtKgW4vIiqm8cZwNcJsYoOYIHx%2FtiPG9AsejcoQZVb5Lu6pk4v7VWLtKYIYctN%2FyZYtdyKNZrfLEyHCQG9YPtHWbBi4x3kAvYE2lNkkOyjFqehUHdY4sM%2Bc18Yi6syQ3Qk%2FrOze12AZBTlvAo64m&X-Amz-Signature=cc6296e27e1ad9ff2069ce92167d16a0ed1865748d79d3ffed014afe6431adef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BXRSIV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgGWgtxFVpcVC7wx2j8GrpN8b2njfhheK9RSCQHmab6QIgPHx6W9v%2FZOE7dHlWyP4Yse4nEqTKBgBregW6xT3193kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr6iHD0k9L3EJ12uyrcA0HR0u22EsCbdxOtYpZoURboQUKQquX7z1k3S96cg9tXz%2BgR4PhjCO2d3McN557XaDd3AY8w79S%2F1ADGPnOTzo3tqy%2FJHkDu%2FJ1%2BraqwETYl59wuNm%2F4c9pZ9iF7GhQ0I5I6kG9tSdYi4%2FAe9iH4t%2B%2BledT05ZNYSvOI2qug3WNbB5MSUDNYAwIyebhrKzP5%2B8c6MFnyQEwZtVF8syYo4tkBJbBtr0Yj%2BbJbrK8OEoHRIIAvnb5rNKmWPNSDxwgRXf2OD1EnkqNMhVt4%2B%2Be99441YYdIXNv7kZ4m%2BXQ3rcCUCfvmQcyT8kduOqk04Z0z8ZHjuGaeTslFuh6R69IT8%2FH4jHWU8FByf3DsD94nz31q3coZPga0cOFgVNuyipjMEE47vKwMfWy4sFSOUBlhqTSFXn3CyLK%2BhUnHAltiOXfT2p%2BaTAw0K7xv2EzESgqr0raX8eYm7vstf9F7oO01%2FueooMzAMvXLYK71eQtC6pPm3Sa0jNEKzw3RaoDbgoJm6tEVLitvXZlecnQc5K%2BEw3%2BhXLPoHsuunvUuefJ7M%2BPDobZQNp7qiVSn32bPwTqqV%2Blgucv8%2F%2BGfqsfdcXH3Q9wV8GfhsYEEVvBhSKxH%2B8SOQuVju5rgndUih2buMLOGvsEGOqUBiw8t20epyXWkmxqeecAZHIcEefrQX2OQSLlyIrO%2FuH0gx6517zKVNRFk6WV3yxWJc%2F4cIvyz%2FtKgW4vIiqm8cZwNcJsYoOYIHx%2FtiPG9AsejcoQZVb5Lu6pk4v7VWLtKYIYctN%2FyZYtdyKNZrfLEyHCQG9YPtHWbBi4x3kAvYE2lNkkOyjFqehUHdY4sM%2Bc18Yi6syQ3Qk%2FrOze12AZBTlvAo64m&X-Amz-Signature=6b626fc1568137d26f8aacde65ab0196758b2bba2a3ea7086bde58febcc60ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BXRSIV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCgGWgtxFVpcVC7wx2j8GrpN8b2njfhheK9RSCQHmab6QIgPHx6W9v%2FZOE7dHlWyP4Yse4nEqTKBgBregW6xT3193kqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr6iHD0k9L3EJ12uyrcA0HR0u22EsCbdxOtYpZoURboQUKQquX7z1k3S96cg9tXz%2BgR4PhjCO2d3McN557XaDd3AY8w79S%2F1ADGPnOTzo3tqy%2FJHkDu%2FJ1%2BraqwETYl59wuNm%2F4c9pZ9iF7GhQ0I5I6kG9tSdYi4%2FAe9iH4t%2B%2BledT05ZNYSvOI2qug3WNbB5MSUDNYAwIyebhrKzP5%2B8c6MFnyQEwZtVF8syYo4tkBJbBtr0Yj%2BbJbrK8OEoHRIIAvnb5rNKmWPNSDxwgRXf2OD1EnkqNMhVt4%2B%2Be99441YYdIXNv7kZ4m%2BXQ3rcCUCfvmQcyT8kduOqk04Z0z8ZHjuGaeTslFuh6R69IT8%2FH4jHWU8FByf3DsD94nz31q3coZPga0cOFgVNuyipjMEE47vKwMfWy4sFSOUBlhqTSFXn3CyLK%2BhUnHAltiOXfT2p%2BaTAw0K7xv2EzESgqr0raX8eYm7vstf9F7oO01%2FueooMzAMvXLYK71eQtC6pPm3Sa0jNEKzw3RaoDbgoJm6tEVLitvXZlecnQc5K%2BEw3%2BhXLPoHsuunvUuefJ7M%2BPDobZQNp7qiVSn32bPwTqqV%2Blgucv8%2F%2BGfqsfdcXH3Q9wV8GfhsYEEVvBhSKxH%2B8SOQuVju5rgndUih2buMLOGvsEGOqUBiw8t20epyXWkmxqeecAZHIcEefrQX2OQSLlyIrO%2FuH0gx6517zKVNRFk6WV3yxWJc%2F4cIvyz%2FtKgW4vIiqm8cZwNcJsYoOYIHx%2FtiPG9AsejcoQZVb5Lu6pk4v7VWLtKYIYctN%2FyZYtdyKNZrfLEyHCQG9YPtHWbBi4x3kAvYE2lNkkOyjFqehUHdY4sM%2Bc18Yi6syQ3Qk%2FrOze12AZBTlvAo64m&X-Amz-Signature=a86e2696f1cfc626589984836b5b9f896d06f2949da32cd26f5535ce73c77241&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

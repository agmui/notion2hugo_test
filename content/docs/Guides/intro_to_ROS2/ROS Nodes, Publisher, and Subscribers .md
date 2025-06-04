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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZYXEUD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCrQNxgmUpu3KHCmeduebfBb2QXnH8kzgtbkTqV7ESqkgIgaut%2FdqxZojlI%2FehTcJLQ7lhGx41XmQlQ%2B%2BiRZMYtxDwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJ0rlf6i2sUkZd2rFCrcA0HTxfkRYeVegKKfLbfqkN4fP38wsr8BlzBfz5R7TMKTKcWewyq5H6JokzNZnSYaAlSMlaZma3nroGRj5kcpbq3Od8JbpqqnXLHA4j3CEMMRj94K5H531sO7kBwv5dSTWA98J14eLf7FnuOwqxxHFfxndQ21MLuUZVEoubEMKOD3Nf0L64Av986d4SWysLhjYj28ZRfBltiADLJhkpGZOVINIPRZRf%2BHy%2F6q2aH5oV49VDQwuiIToS2N00Hs17K9ELpXFzkA9u9%2FhHLTuDOVkC230SCOY3Swn%2BHp2owZXmdjIqkTf5GniHCFR772tPEnMbjSVTTWlOWyH0C82ATgKnhWIueLFvAQ5NxE%2BDT9mpHl7CA%2BiRBTzo9x8DxlsGdha%2F1%2F74njJSx6Yhjzj%2FguuxTv2rg7TLoTcd91Mg3hkGgfNjYBIo%2FIuevBCG9GD2CyAVMlcfNtK5Wa3d306LG%2BPXLmLlPe%2Bv3pmt%2B1kQzCUHQum7%2BuRmL%2BlbVfDpnxcyzk0G0vosjSQmej9Lyz1jtvUZ%2B3SmZIbNLuFussOym%2FOVt1pyOQJKzvmE9COqoXCjykwPCpvQqBVpfKmWmu11w%2Be8cPRFhryPEuWAEX%2BbBGyLvGr9idFJDvRYUIDt4aMPHg%2FsEGOqUB2N%2BP5Lbxi3DDO8vLdJqY4%2BaoGfKmQoHLJo2DCcZSB5hRgZzdcu4VRvIYS3rlq4oBOe%2BfctlfHzw9ojqw69a5s0JKzaMzOsNnlClS6cC7nOqRwUc59vuq8rI4luFtFAaDwrp7MUsYdOKt5dj1eQTwyEZ6YeAU1vZiQRV0oer9g7aANG96GjW8306nORKCTQBr2a%2FP3xiHniAE2IcLuOU2x%2B9roQZM&X-Amz-Signature=62e0064c5b0416f10ef15edef1e7a88e33f8ecfadc639cc4d2f34b89884f02c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZYXEUD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCrQNxgmUpu3KHCmeduebfBb2QXnH8kzgtbkTqV7ESqkgIgaut%2FdqxZojlI%2FehTcJLQ7lhGx41XmQlQ%2B%2BiRZMYtxDwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJ0rlf6i2sUkZd2rFCrcA0HTxfkRYeVegKKfLbfqkN4fP38wsr8BlzBfz5R7TMKTKcWewyq5H6JokzNZnSYaAlSMlaZma3nroGRj5kcpbq3Od8JbpqqnXLHA4j3CEMMRj94K5H531sO7kBwv5dSTWA98J14eLf7FnuOwqxxHFfxndQ21MLuUZVEoubEMKOD3Nf0L64Av986d4SWysLhjYj28ZRfBltiADLJhkpGZOVINIPRZRf%2BHy%2F6q2aH5oV49VDQwuiIToS2N00Hs17K9ELpXFzkA9u9%2FhHLTuDOVkC230SCOY3Swn%2BHp2owZXmdjIqkTf5GniHCFR772tPEnMbjSVTTWlOWyH0C82ATgKnhWIueLFvAQ5NxE%2BDT9mpHl7CA%2BiRBTzo9x8DxlsGdha%2F1%2F74njJSx6Yhjzj%2FguuxTv2rg7TLoTcd91Mg3hkGgfNjYBIo%2FIuevBCG9GD2CyAVMlcfNtK5Wa3d306LG%2BPXLmLlPe%2Bv3pmt%2B1kQzCUHQum7%2BuRmL%2BlbVfDpnxcyzk0G0vosjSQmej9Lyz1jtvUZ%2B3SmZIbNLuFussOym%2FOVt1pyOQJKzvmE9COqoXCjykwPCpvQqBVpfKmWmu11w%2Be8cPRFhryPEuWAEX%2BbBGyLvGr9idFJDvRYUIDt4aMPHg%2FsEGOqUB2N%2BP5Lbxi3DDO8vLdJqY4%2BaoGfKmQoHLJo2DCcZSB5hRgZzdcu4VRvIYS3rlq4oBOe%2BfctlfHzw9ojqw69a5s0JKzaMzOsNnlClS6cC7nOqRwUc59vuq8rI4luFtFAaDwrp7MUsYdOKt5dj1eQTwyEZ6YeAU1vZiQRV0oer9g7aANG96GjW8306nORKCTQBr2a%2FP3xiHniAE2IcLuOU2x%2B9roQZM&X-Amz-Signature=a91410027416d1cbbe3b25f2be4470e2c2ee5627d3e36ebadacb00b8ad32c10b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZYXEUD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCrQNxgmUpu3KHCmeduebfBb2QXnH8kzgtbkTqV7ESqkgIgaut%2FdqxZojlI%2FehTcJLQ7lhGx41XmQlQ%2B%2BiRZMYtxDwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJ0rlf6i2sUkZd2rFCrcA0HTxfkRYeVegKKfLbfqkN4fP38wsr8BlzBfz5R7TMKTKcWewyq5H6JokzNZnSYaAlSMlaZma3nroGRj5kcpbq3Od8JbpqqnXLHA4j3CEMMRj94K5H531sO7kBwv5dSTWA98J14eLf7FnuOwqxxHFfxndQ21MLuUZVEoubEMKOD3Nf0L64Av986d4SWysLhjYj28ZRfBltiADLJhkpGZOVINIPRZRf%2BHy%2F6q2aH5oV49VDQwuiIToS2N00Hs17K9ELpXFzkA9u9%2FhHLTuDOVkC230SCOY3Swn%2BHp2owZXmdjIqkTf5GniHCFR772tPEnMbjSVTTWlOWyH0C82ATgKnhWIueLFvAQ5NxE%2BDT9mpHl7CA%2BiRBTzo9x8DxlsGdha%2F1%2F74njJSx6Yhjzj%2FguuxTv2rg7TLoTcd91Mg3hkGgfNjYBIo%2FIuevBCG9GD2CyAVMlcfNtK5Wa3d306LG%2BPXLmLlPe%2Bv3pmt%2B1kQzCUHQum7%2BuRmL%2BlbVfDpnxcyzk0G0vosjSQmej9Lyz1jtvUZ%2B3SmZIbNLuFussOym%2FOVt1pyOQJKzvmE9COqoXCjykwPCpvQqBVpfKmWmu11w%2Be8cPRFhryPEuWAEX%2BbBGyLvGr9idFJDvRYUIDt4aMPHg%2FsEGOqUB2N%2BP5Lbxi3DDO8vLdJqY4%2BaoGfKmQoHLJo2DCcZSB5hRgZzdcu4VRvIYS3rlq4oBOe%2BfctlfHzw9ojqw69a5s0JKzaMzOsNnlClS6cC7nOqRwUc59vuq8rI4luFtFAaDwrp7MUsYdOKt5dj1eQTwyEZ6YeAU1vZiQRV0oer9g7aANG96GjW8306nORKCTQBr2a%2FP3xiHniAE2IcLuOU2x%2B9roQZM&X-Amz-Signature=5b185e292475b54704f805b26942163d3d914425b861e5f84f7338e739385822&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZYXEUD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCrQNxgmUpu3KHCmeduebfBb2QXnH8kzgtbkTqV7ESqkgIgaut%2FdqxZojlI%2FehTcJLQ7lhGx41XmQlQ%2B%2BiRZMYtxDwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJ0rlf6i2sUkZd2rFCrcA0HTxfkRYeVegKKfLbfqkN4fP38wsr8BlzBfz5R7TMKTKcWewyq5H6JokzNZnSYaAlSMlaZma3nroGRj5kcpbq3Od8JbpqqnXLHA4j3CEMMRj94K5H531sO7kBwv5dSTWA98J14eLf7FnuOwqxxHFfxndQ21MLuUZVEoubEMKOD3Nf0L64Av986d4SWysLhjYj28ZRfBltiADLJhkpGZOVINIPRZRf%2BHy%2F6q2aH5oV49VDQwuiIToS2N00Hs17K9ELpXFzkA9u9%2FhHLTuDOVkC230SCOY3Swn%2BHp2owZXmdjIqkTf5GniHCFR772tPEnMbjSVTTWlOWyH0C82ATgKnhWIueLFvAQ5NxE%2BDT9mpHl7CA%2BiRBTzo9x8DxlsGdha%2F1%2F74njJSx6Yhjzj%2FguuxTv2rg7TLoTcd91Mg3hkGgfNjYBIo%2FIuevBCG9GD2CyAVMlcfNtK5Wa3d306LG%2BPXLmLlPe%2Bv3pmt%2B1kQzCUHQum7%2BuRmL%2BlbVfDpnxcyzk0G0vosjSQmej9Lyz1jtvUZ%2B3SmZIbNLuFussOym%2FOVt1pyOQJKzvmE9COqoXCjykwPCpvQqBVpfKmWmu11w%2Be8cPRFhryPEuWAEX%2BbBGyLvGr9idFJDvRYUIDt4aMPHg%2FsEGOqUB2N%2BP5Lbxi3DDO8vLdJqY4%2BaoGfKmQoHLJo2DCcZSB5hRgZzdcu4VRvIYS3rlq4oBOe%2BfctlfHzw9ojqw69a5s0JKzaMzOsNnlClS6cC7nOqRwUc59vuq8rI4luFtFAaDwrp7MUsYdOKt5dj1eQTwyEZ6YeAU1vZiQRV0oer9g7aANG96GjW8306nORKCTQBr2a%2FP3xiHniAE2IcLuOU2x%2B9roQZM&X-Amz-Signature=81c3c31007eb5c5b531adb49ee4b044ae8bdce01472ea25970960f68241ab78e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZYXEUD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCrQNxgmUpu3KHCmeduebfBb2QXnH8kzgtbkTqV7ESqkgIgaut%2FdqxZojlI%2FehTcJLQ7lhGx41XmQlQ%2B%2BiRZMYtxDwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJ0rlf6i2sUkZd2rFCrcA0HTxfkRYeVegKKfLbfqkN4fP38wsr8BlzBfz5R7TMKTKcWewyq5H6JokzNZnSYaAlSMlaZma3nroGRj5kcpbq3Od8JbpqqnXLHA4j3CEMMRj94K5H531sO7kBwv5dSTWA98J14eLf7FnuOwqxxHFfxndQ21MLuUZVEoubEMKOD3Nf0L64Av986d4SWysLhjYj28ZRfBltiADLJhkpGZOVINIPRZRf%2BHy%2F6q2aH5oV49VDQwuiIToS2N00Hs17K9ELpXFzkA9u9%2FhHLTuDOVkC230SCOY3Swn%2BHp2owZXmdjIqkTf5GniHCFR772tPEnMbjSVTTWlOWyH0C82ATgKnhWIueLFvAQ5NxE%2BDT9mpHl7CA%2BiRBTzo9x8DxlsGdha%2F1%2F74njJSx6Yhjzj%2FguuxTv2rg7TLoTcd91Mg3hkGgfNjYBIo%2FIuevBCG9GD2CyAVMlcfNtK5Wa3d306LG%2BPXLmLlPe%2Bv3pmt%2B1kQzCUHQum7%2BuRmL%2BlbVfDpnxcyzk0G0vosjSQmej9Lyz1jtvUZ%2B3SmZIbNLuFussOym%2FOVt1pyOQJKzvmE9COqoXCjykwPCpvQqBVpfKmWmu11w%2Be8cPRFhryPEuWAEX%2BbBGyLvGr9idFJDvRYUIDt4aMPHg%2FsEGOqUB2N%2BP5Lbxi3DDO8vLdJqY4%2BaoGfKmQoHLJo2DCcZSB5hRgZzdcu4VRvIYS3rlq4oBOe%2BfctlfHzw9ojqw69a5s0JKzaMzOsNnlClS6cC7nOqRwUc59vuq8rI4luFtFAaDwrp7MUsYdOKt5dj1eQTwyEZ6YeAU1vZiQRV0oer9g7aANG96GjW8306nORKCTQBr2a%2FP3xiHniAE2IcLuOU2x%2B9roQZM&X-Amz-Signature=a356a3776e7d8c864c209498b6d33a9e2aaaef8d439df60762589761b588f8b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZYXEUD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCrQNxgmUpu3KHCmeduebfBb2QXnH8kzgtbkTqV7ESqkgIgaut%2FdqxZojlI%2FehTcJLQ7lhGx41XmQlQ%2B%2BiRZMYtxDwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJ0rlf6i2sUkZd2rFCrcA0HTxfkRYeVegKKfLbfqkN4fP38wsr8BlzBfz5R7TMKTKcWewyq5H6JokzNZnSYaAlSMlaZma3nroGRj5kcpbq3Od8JbpqqnXLHA4j3CEMMRj94K5H531sO7kBwv5dSTWA98J14eLf7FnuOwqxxHFfxndQ21MLuUZVEoubEMKOD3Nf0L64Av986d4SWysLhjYj28ZRfBltiADLJhkpGZOVINIPRZRf%2BHy%2F6q2aH5oV49VDQwuiIToS2N00Hs17K9ELpXFzkA9u9%2FhHLTuDOVkC230SCOY3Swn%2BHp2owZXmdjIqkTf5GniHCFR772tPEnMbjSVTTWlOWyH0C82ATgKnhWIueLFvAQ5NxE%2BDT9mpHl7CA%2BiRBTzo9x8DxlsGdha%2F1%2F74njJSx6Yhjzj%2FguuxTv2rg7TLoTcd91Mg3hkGgfNjYBIo%2FIuevBCG9GD2CyAVMlcfNtK5Wa3d306LG%2BPXLmLlPe%2Bv3pmt%2B1kQzCUHQum7%2BuRmL%2BlbVfDpnxcyzk0G0vosjSQmej9Lyz1jtvUZ%2B3SmZIbNLuFussOym%2FOVt1pyOQJKzvmE9COqoXCjykwPCpvQqBVpfKmWmu11w%2Be8cPRFhryPEuWAEX%2BbBGyLvGr9idFJDvRYUIDt4aMPHg%2FsEGOqUB2N%2BP5Lbxi3DDO8vLdJqY4%2BaoGfKmQoHLJo2DCcZSB5hRgZzdcu4VRvIYS3rlq4oBOe%2BfctlfHzw9ojqw69a5s0JKzaMzOsNnlClS6cC7nOqRwUc59vuq8rI4luFtFAaDwrp7MUsYdOKt5dj1eQTwyEZ6YeAU1vZiQRV0oer9g7aANG96GjW8306nORKCTQBr2a%2FP3xiHniAE2IcLuOU2x%2B9roQZM&X-Amz-Signature=e0b1ab8277193773df6135e27d7f7632dea345eb87d02416019d302268116a31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZYXEUD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCrQNxgmUpu3KHCmeduebfBb2QXnH8kzgtbkTqV7ESqkgIgaut%2FdqxZojlI%2FehTcJLQ7lhGx41XmQlQ%2B%2BiRZMYtxDwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJ0rlf6i2sUkZd2rFCrcA0HTxfkRYeVegKKfLbfqkN4fP38wsr8BlzBfz5R7TMKTKcWewyq5H6JokzNZnSYaAlSMlaZma3nroGRj5kcpbq3Od8JbpqqnXLHA4j3CEMMRj94K5H531sO7kBwv5dSTWA98J14eLf7FnuOwqxxHFfxndQ21MLuUZVEoubEMKOD3Nf0L64Av986d4SWysLhjYj28ZRfBltiADLJhkpGZOVINIPRZRf%2BHy%2F6q2aH5oV49VDQwuiIToS2N00Hs17K9ELpXFzkA9u9%2FhHLTuDOVkC230SCOY3Swn%2BHp2owZXmdjIqkTf5GniHCFR772tPEnMbjSVTTWlOWyH0C82ATgKnhWIueLFvAQ5NxE%2BDT9mpHl7CA%2BiRBTzo9x8DxlsGdha%2F1%2F74njJSx6Yhjzj%2FguuxTv2rg7TLoTcd91Mg3hkGgfNjYBIo%2FIuevBCG9GD2CyAVMlcfNtK5Wa3d306LG%2BPXLmLlPe%2Bv3pmt%2B1kQzCUHQum7%2BuRmL%2BlbVfDpnxcyzk0G0vosjSQmej9Lyz1jtvUZ%2B3SmZIbNLuFussOym%2FOVt1pyOQJKzvmE9COqoXCjykwPCpvQqBVpfKmWmu11w%2Be8cPRFhryPEuWAEX%2BbBGyLvGr9idFJDvRYUIDt4aMPHg%2FsEGOqUB2N%2BP5Lbxi3DDO8vLdJqY4%2BaoGfKmQoHLJo2DCcZSB5hRgZzdcu4VRvIYS3rlq4oBOe%2BfctlfHzw9ojqw69a5s0JKzaMzOsNnlClS6cC7nOqRwUc59vuq8rI4luFtFAaDwrp7MUsYdOKt5dj1eQTwyEZ6YeAU1vZiQRV0oer9g7aANG96GjW8306nORKCTQBr2a%2FP3xiHniAE2IcLuOU2x%2B9roQZM&X-Amz-Signature=1ebae335987221cc96951fd05b1484ab4c412c4222e232a365cde8c21e85f4c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAZYXEUD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCrQNxgmUpu3KHCmeduebfBb2QXnH8kzgtbkTqV7ESqkgIgaut%2FdqxZojlI%2FehTcJLQ7lhGx41XmQlQ%2B%2BiRZMYtxDwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJ0rlf6i2sUkZd2rFCrcA0HTxfkRYeVegKKfLbfqkN4fP38wsr8BlzBfz5R7TMKTKcWewyq5H6JokzNZnSYaAlSMlaZma3nroGRj5kcpbq3Od8JbpqqnXLHA4j3CEMMRj94K5H531sO7kBwv5dSTWA98J14eLf7FnuOwqxxHFfxndQ21MLuUZVEoubEMKOD3Nf0L64Av986d4SWysLhjYj28ZRfBltiADLJhkpGZOVINIPRZRf%2BHy%2F6q2aH5oV49VDQwuiIToS2N00Hs17K9ELpXFzkA9u9%2FhHLTuDOVkC230SCOY3Swn%2BHp2owZXmdjIqkTf5GniHCFR772tPEnMbjSVTTWlOWyH0C82ATgKnhWIueLFvAQ5NxE%2BDT9mpHl7CA%2BiRBTzo9x8DxlsGdha%2F1%2F74njJSx6Yhjzj%2FguuxTv2rg7TLoTcd91Mg3hkGgfNjYBIo%2FIuevBCG9GD2CyAVMlcfNtK5Wa3d306LG%2BPXLmLlPe%2Bv3pmt%2B1kQzCUHQum7%2BuRmL%2BlbVfDpnxcyzk0G0vosjSQmej9Lyz1jtvUZ%2B3SmZIbNLuFussOym%2FOVt1pyOQJKzvmE9COqoXCjykwPCpvQqBVpfKmWmu11w%2Be8cPRFhryPEuWAEX%2BbBGyLvGr9idFJDvRYUIDt4aMPHg%2FsEGOqUB2N%2BP5Lbxi3DDO8vLdJqY4%2BaoGfKmQoHLJo2DCcZSB5hRgZzdcu4VRvIYS3rlq4oBOe%2BfctlfHzw9ojqw69a5s0JKzaMzOsNnlClS6cC7nOqRwUc59vuq8rI4luFtFAaDwrp7MUsYdOKt5dj1eQTwyEZ6YeAU1vZiQRV0oer9g7aANG96GjW8306nORKCTQBr2a%2FP3xiHniAE2IcLuOU2x%2B9roQZM&X-Amz-Signature=d1cfa4516614a7e0eb7d5989a836c3f28008c41ea17372a77f62143237425db7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

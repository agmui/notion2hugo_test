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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDSPC6B%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgez7oNUQ0tZ8244ZrElkdslpy7YsBwl5y0lqhT62lgIgLlm%2BcUxW6y5ZGsNYlbC%2F91RMmqUmTF2X1PRxhJ7n%2FHoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfODJqSSdXthOFCVyrcA5EgBVPJn1GGshKkum50EhQH5sx85xmCPfe4DWbEsix75f7v4ucbNEWh5A0zyVXwn%2BWSyCRTiwg4FjuInVb11HxeULob%2F1vYfJ9hmABq%2FS%2B71nkLoa8A3jC3cghRoszbo0jPv4SsR36c%2FQIdEk3JHBhyTAzsy3O7DW3Z27BYCsOCtrDTpsvWPuHmiM%2FFWv3%2FwWwAbcNvo2HstdIutrzdAgEzD3lKZtetexvH6QWqvYcipkdmCrPNxK4BlGG3SK7qG3f%2F%2B3B63%2BjgOaxMRtb%2BoULAV9XrJ1vq7dWGRkgnYGnMsb38DX4g%2BMbvXuf6Hbsy3vc05EnavvKJfvraGtu8hlVgVvpr2r8c2LvIIL3UKAMktiN3ZN0AqeUENXJHhbxriO4%2BC6l7WGxV04At7fxJ0QHyV7RQ7HdvYreITFadQ14ozVkaY7Ix9rsztB3ZkUQkMbl%2BQF5YBKxV2y7YLeO4XrC8Ky67Kh2cLolAROMpjyJCzhMaB59v03hONLVpjbsdMIlSJjskXj2ZIW6tEth6F%2FXT7PFBjnC%2BJ7qoopN%2FluE00h83kOGtNzygUJ1u26gCmu%2BowpF88d5xowqbKImZehsRMi64eCsO5AP45SMI4Jb7XGvrscfH9mAV8ku2MOXig78GOqUBkbQ8%2BdUhdnl4FvC51JTRgSwKIaC3Idh5UnJ8Ar9VmYD24AcJenfZEvk4rry8DeL%2FhSsW74TNPA9wHU2ITPKNTFYglW15MX4PRc04uumyU%2BXKTpK0QgN9K0WdKtQg0fXCg2IIlHiBrvbUjED6ac0d3KTmHQx78kndHiobXkCBbgomZIu91CLKeJTSW2zIXctyNpkPs86uGCxE%2BO3%2BNbrz5DYT9Q0W&X-Amz-Signature=4e4efa4cc8b8a367f54c985ac2154996a24112e91f6052044ab08f89693d972c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDSPC6B%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgez7oNUQ0tZ8244ZrElkdslpy7YsBwl5y0lqhT62lgIgLlm%2BcUxW6y5ZGsNYlbC%2F91RMmqUmTF2X1PRxhJ7n%2FHoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfODJqSSdXthOFCVyrcA5EgBVPJn1GGshKkum50EhQH5sx85xmCPfe4DWbEsix75f7v4ucbNEWh5A0zyVXwn%2BWSyCRTiwg4FjuInVb11HxeULob%2F1vYfJ9hmABq%2FS%2B71nkLoa8A3jC3cghRoszbo0jPv4SsR36c%2FQIdEk3JHBhyTAzsy3O7DW3Z27BYCsOCtrDTpsvWPuHmiM%2FFWv3%2FwWwAbcNvo2HstdIutrzdAgEzD3lKZtetexvH6QWqvYcipkdmCrPNxK4BlGG3SK7qG3f%2F%2B3B63%2BjgOaxMRtb%2BoULAV9XrJ1vq7dWGRkgnYGnMsb38DX4g%2BMbvXuf6Hbsy3vc05EnavvKJfvraGtu8hlVgVvpr2r8c2LvIIL3UKAMktiN3ZN0AqeUENXJHhbxriO4%2BC6l7WGxV04At7fxJ0QHyV7RQ7HdvYreITFadQ14ozVkaY7Ix9rsztB3ZkUQkMbl%2BQF5YBKxV2y7YLeO4XrC8Ky67Kh2cLolAROMpjyJCzhMaB59v03hONLVpjbsdMIlSJjskXj2ZIW6tEth6F%2FXT7PFBjnC%2BJ7qoopN%2FluE00h83kOGtNzygUJ1u26gCmu%2BowpF88d5xowqbKImZehsRMi64eCsO5AP45SMI4Jb7XGvrscfH9mAV8ku2MOXig78GOqUBkbQ8%2BdUhdnl4FvC51JTRgSwKIaC3Idh5UnJ8Ar9VmYD24AcJenfZEvk4rry8DeL%2FhSsW74TNPA9wHU2ITPKNTFYglW15MX4PRc04uumyU%2BXKTpK0QgN9K0WdKtQg0fXCg2IIlHiBrvbUjED6ac0d3KTmHQx78kndHiobXkCBbgomZIu91CLKeJTSW2zIXctyNpkPs86uGCxE%2BO3%2BNbrz5DYT9Q0W&X-Amz-Signature=af6f9b182d1f9feb6f70d54803653257e9312629d06023879960014086f29b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDSPC6B%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgez7oNUQ0tZ8244ZrElkdslpy7YsBwl5y0lqhT62lgIgLlm%2BcUxW6y5ZGsNYlbC%2F91RMmqUmTF2X1PRxhJ7n%2FHoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfODJqSSdXthOFCVyrcA5EgBVPJn1GGshKkum50EhQH5sx85xmCPfe4DWbEsix75f7v4ucbNEWh5A0zyVXwn%2BWSyCRTiwg4FjuInVb11HxeULob%2F1vYfJ9hmABq%2FS%2B71nkLoa8A3jC3cghRoszbo0jPv4SsR36c%2FQIdEk3JHBhyTAzsy3O7DW3Z27BYCsOCtrDTpsvWPuHmiM%2FFWv3%2FwWwAbcNvo2HstdIutrzdAgEzD3lKZtetexvH6QWqvYcipkdmCrPNxK4BlGG3SK7qG3f%2F%2B3B63%2BjgOaxMRtb%2BoULAV9XrJ1vq7dWGRkgnYGnMsb38DX4g%2BMbvXuf6Hbsy3vc05EnavvKJfvraGtu8hlVgVvpr2r8c2LvIIL3UKAMktiN3ZN0AqeUENXJHhbxriO4%2BC6l7WGxV04At7fxJ0QHyV7RQ7HdvYreITFadQ14ozVkaY7Ix9rsztB3ZkUQkMbl%2BQF5YBKxV2y7YLeO4XrC8Ky67Kh2cLolAROMpjyJCzhMaB59v03hONLVpjbsdMIlSJjskXj2ZIW6tEth6F%2FXT7PFBjnC%2BJ7qoopN%2FluE00h83kOGtNzygUJ1u26gCmu%2BowpF88d5xowqbKImZehsRMi64eCsO5AP45SMI4Jb7XGvrscfH9mAV8ku2MOXig78GOqUBkbQ8%2BdUhdnl4FvC51JTRgSwKIaC3Idh5UnJ8Ar9VmYD24AcJenfZEvk4rry8DeL%2FhSsW74TNPA9wHU2ITPKNTFYglW15MX4PRc04uumyU%2BXKTpK0QgN9K0WdKtQg0fXCg2IIlHiBrvbUjED6ac0d3KTmHQx78kndHiobXkCBbgomZIu91CLKeJTSW2zIXctyNpkPs86uGCxE%2BO3%2BNbrz5DYT9Q0W&X-Amz-Signature=7436f6c705c3f654f788fc81e4327feba85a4ea507244a32a34a2b85b4f2aff9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDSPC6B%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgez7oNUQ0tZ8244ZrElkdslpy7YsBwl5y0lqhT62lgIgLlm%2BcUxW6y5ZGsNYlbC%2F91RMmqUmTF2X1PRxhJ7n%2FHoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfODJqSSdXthOFCVyrcA5EgBVPJn1GGshKkum50EhQH5sx85xmCPfe4DWbEsix75f7v4ucbNEWh5A0zyVXwn%2BWSyCRTiwg4FjuInVb11HxeULob%2F1vYfJ9hmABq%2FS%2B71nkLoa8A3jC3cghRoszbo0jPv4SsR36c%2FQIdEk3JHBhyTAzsy3O7DW3Z27BYCsOCtrDTpsvWPuHmiM%2FFWv3%2FwWwAbcNvo2HstdIutrzdAgEzD3lKZtetexvH6QWqvYcipkdmCrPNxK4BlGG3SK7qG3f%2F%2B3B63%2BjgOaxMRtb%2BoULAV9XrJ1vq7dWGRkgnYGnMsb38DX4g%2BMbvXuf6Hbsy3vc05EnavvKJfvraGtu8hlVgVvpr2r8c2LvIIL3UKAMktiN3ZN0AqeUENXJHhbxriO4%2BC6l7WGxV04At7fxJ0QHyV7RQ7HdvYreITFadQ14ozVkaY7Ix9rsztB3ZkUQkMbl%2BQF5YBKxV2y7YLeO4XrC8Ky67Kh2cLolAROMpjyJCzhMaB59v03hONLVpjbsdMIlSJjskXj2ZIW6tEth6F%2FXT7PFBjnC%2BJ7qoopN%2FluE00h83kOGtNzygUJ1u26gCmu%2BowpF88d5xowqbKImZehsRMi64eCsO5AP45SMI4Jb7XGvrscfH9mAV8ku2MOXig78GOqUBkbQ8%2BdUhdnl4FvC51JTRgSwKIaC3Idh5UnJ8Ar9VmYD24AcJenfZEvk4rry8DeL%2FhSsW74TNPA9wHU2ITPKNTFYglW15MX4PRc04uumyU%2BXKTpK0QgN9K0WdKtQg0fXCg2IIlHiBrvbUjED6ac0d3KTmHQx78kndHiobXkCBbgomZIu91CLKeJTSW2zIXctyNpkPs86uGCxE%2BO3%2BNbrz5DYT9Q0W&X-Amz-Signature=0203e1e41f1727257c9dce737e5a71e49212a4c9dc3ac100ab4358e6faa8d002&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDSPC6B%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgez7oNUQ0tZ8244ZrElkdslpy7YsBwl5y0lqhT62lgIgLlm%2BcUxW6y5ZGsNYlbC%2F91RMmqUmTF2X1PRxhJ7n%2FHoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfODJqSSdXthOFCVyrcA5EgBVPJn1GGshKkum50EhQH5sx85xmCPfe4DWbEsix75f7v4ucbNEWh5A0zyVXwn%2BWSyCRTiwg4FjuInVb11HxeULob%2F1vYfJ9hmABq%2FS%2B71nkLoa8A3jC3cghRoszbo0jPv4SsR36c%2FQIdEk3JHBhyTAzsy3O7DW3Z27BYCsOCtrDTpsvWPuHmiM%2FFWv3%2FwWwAbcNvo2HstdIutrzdAgEzD3lKZtetexvH6QWqvYcipkdmCrPNxK4BlGG3SK7qG3f%2F%2B3B63%2BjgOaxMRtb%2BoULAV9XrJ1vq7dWGRkgnYGnMsb38DX4g%2BMbvXuf6Hbsy3vc05EnavvKJfvraGtu8hlVgVvpr2r8c2LvIIL3UKAMktiN3ZN0AqeUENXJHhbxriO4%2BC6l7WGxV04At7fxJ0QHyV7RQ7HdvYreITFadQ14ozVkaY7Ix9rsztB3ZkUQkMbl%2BQF5YBKxV2y7YLeO4XrC8Ky67Kh2cLolAROMpjyJCzhMaB59v03hONLVpjbsdMIlSJjskXj2ZIW6tEth6F%2FXT7PFBjnC%2BJ7qoopN%2FluE00h83kOGtNzygUJ1u26gCmu%2BowpF88d5xowqbKImZehsRMi64eCsO5AP45SMI4Jb7XGvrscfH9mAV8ku2MOXig78GOqUBkbQ8%2BdUhdnl4FvC51JTRgSwKIaC3Idh5UnJ8Ar9VmYD24AcJenfZEvk4rry8DeL%2FhSsW74TNPA9wHU2ITPKNTFYglW15MX4PRc04uumyU%2BXKTpK0QgN9K0WdKtQg0fXCg2IIlHiBrvbUjED6ac0d3KTmHQx78kndHiobXkCBbgomZIu91CLKeJTSW2zIXctyNpkPs86uGCxE%2BO3%2BNbrz5DYT9Q0W&X-Amz-Signature=5a40929feeafaf55f21e54229346f3f6ab7a152c8532fdfe8f213d2cbc9ba887&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDSPC6B%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgez7oNUQ0tZ8244ZrElkdslpy7YsBwl5y0lqhT62lgIgLlm%2BcUxW6y5ZGsNYlbC%2F91RMmqUmTF2X1PRxhJ7n%2FHoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfODJqSSdXthOFCVyrcA5EgBVPJn1GGshKkum50EhQH5sx85xmCPfe4DWbEsix75f7v4ucbNEWh5A0zyVXwn%2BWSyCRTiwg4FjuInVb11HxeULob%2F1vYfJ9hmABq%2FS%2B71nkLoa8A3jC3cghRoszbo0jPv4SsR36c%2FQIdEk3JHBhyTAzsy3O7DW3Z27BYCsOCtrDTpsvWPuHmiM%2FFWv3%2FwWwAbcNvo2HstdIutrzdAgEzD3lKZtetexvH6QWqvYcipkdmCrPNxK4BlGG3SK7qG3f%2F%2B3B63%2BjgOaxMRtb%2BoULAV9XrJ1vq7dWGRkgnYGnMsb38DX4g%2BMbvXuf6Hbsy3vc05EnavvKJfvraGtu8hlVgVvpr2r8c2LvIIL3UKAMktiN3ZN0AqeUENXJHhbxriO4%2BC6l7WGxV04At7fxJ0QHyV7RQ7HdvYreITFadQ14ozVkaY7Ix9rsztB3ZkUQkMbl%2BQF5YBKxV2y7YLeO4XrC8Ky67Kh2cLolAROMpjyJCzhMaB59v03hONLVpjbsdMIlSJjskXj2ZIW6tEth6F%2FXT7PFBjnC%2BJ7qoopN%2FluE00h83kOGtNzygUJ1u26gCmu%2BowpF88d5xowqbKImZehsRMi64eCsO5AP45SMI4Jb7XGvrscfH9mAV8ku2MOXig78GOqUBkbQ8%2BdUhdnl4FvC51JTRgSwKIaC3Idh5UnJ8Ar9VmYD24AcJenfZEvk4rry8DeL%2FhSsW74TNPA9wHU2ITPKNTFYglW15MX4PRc04uumyU%2BXKTpK0QgN9K0WdKtQg0fXCg2IIlHiBrvbUjED6ac0d3KTmHQx78kndHiobXkCBbgomZIu91CLKeJTSW2zIXctyNpkPs86uGCxE%2BO3%2BNbrz5DYT9Q0W&X-Amz-Signature=5a42c8643901c80904d217943592ea604db05b7d13936034c859850f63ec298b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDSPC6B%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgez7oNUQ0tZ8244ZrElkdslpy7YsBwl5y0lqhT62lgIgLlm%2BcUxW6y5ZGsNYlbC%2F91RMmqUmTF2X1PRxhJ7n%2FHoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfODJqSSdXthOFCVyrcA5EgBVPJn1GGshKkum50EhQH5sx85xmCPfe4DWbEsix75f7v4ucbNEWh5A0zyVXwn%2BWSyCRTiwg4FjuInVb11HxeULob%2F1vYfJ9hmABq%2FS%2B71nkLoa8A3jC3cghRoszbo0jPv4SsR36c%2FQIdEk3JHBhyTAzsy3O7DW3Z27BYCsOCtrDTpsvWPuHmiM%2FFWv3%2FwWwAbcNvo2HstdIutrzdAgEzD3lKZtetexvH6QWqvYcipkdmCrPNxK4BlGG3SK7qG3f%2F%2B3B63%2BjgOaxMRtb%2BoULAV9XrJ1vq7dWGRkgnYGnMsb38DX4g%2BMbvXuf6Hbsy3vc05EnavvKJfvraGtu8hlVgVvpr2r8c2LvIIL3UKAMktiN3ZN0AqeUENXJHhbxriO4%2BC6l7WGxV04At7fxJ0QHyV7RQ7HdvYreITFadQ14ozVkaY7Ix9rsztB3ZkUQkMbl%2BQF5YBKxV2y7YLeO4XrC8Ky67Kh2cLolAROMpjyJCzhMaB59v03hONLVpjbsdMIlSJjskXj2ZIW6tEth6F%2FXT7PFBjnC%2BJ7qoopN%2FluE00h83kOGtNzygUJ1u26gCmu%2BowpF88d5xowqbKImZehsRMi64eCsO5AP45SMI4Jb7XGvrscfH9mAV8ku2MOXig78GOqUBkbQ8%2BdUhdnl4FvC51JTRgSwKIaC3Idh5UnJ8Ar9VmYD24AcJenfZEvk4rry8DeL%2FhSsW74TNPA9wHU2ITPKNTFYglW15MX4PRc04uumyU%2BXKTpK0QgN9K0WdKtQg0fXCg2IIlHiBrvbUjED6ac0d3KTmHQx78kndHiobXkCBbgomZIu91CLKeJTSW2zIXctyNpkPs86uGCxE%2BO3%2BNbrz5DYT9Q0W&X-Amz-Signature=bedd3864bcd4f98782e89c8f2bf0460e2faee17f320c0f3ae3b5131c552c9a34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDSPC6B%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgez7oNUQ0tZ8244ZrElkdslpy7YsBwl5y0lqhT62lgIgLlm%2BcUxW6y5ZGsNYlbC%2F91RMmqUmTF2X1PRxhJ7n%2FHoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfODJqSSdXthOFCVyrcA5EgBVPJn1GGshKkum50EhQH5sx85xmCPfe4DWbEsix75f7v4ucbNEWh5A0zyVXwn%2BWSyCRTiwg4FjuInVb11HxeULob%2F1vYfJ9hmABq%2FS%2B71nkLoa8A3jC3cghRoszbo0jPv4SsR36c%2FQIdEk3JHBhyTAzsy3O7DW3Z27BYCsOCtrDTpsvWPuHmiM%2FFWv3%2FwWwAbcNvo2HstdIutrzdAgEzD3lKZtetexvH6QWqvYcipkdmCrPNxK4BlGG3SK7qG3f%2F%2B3B63%2BjgOaxMRtb%2BoULAV9XrJ1vq7dWGRkgnYGnMsb38DX4g%2BMbvXuf6Hbsy3vc05EnavvKJfvraGtu8hlVgVvpr2r8c2LvIIL3UKAMktiN3ZN0AqeUENXJHhbxriO4%2BC6l7WGxV04At7fxJ0QHyV7RQ7HdvYreITFadQ14ozVkaY7Ix9rsztB3ZkUQkMbl%2BQF5YBKxV2y7YLeO4XrC8Ky67Kh2cLolAROMpjyJCzhMaB59v03hONLVpjbsdMIlSJjskXj2ZIW6tEth6F%2FXT7PFBjnC%2BJ7qoopN%2FluE00h83kOGtNzygUJ1u26gCmu%2BowpF88d5xowqbKImZehsRMi64eCsO5AP45SMI4Jb7XGvrscfH9mAV8ku2MOXig78GOqUBkbQ8%2BdUhdnl4FvC51JTRgSwKIaC3Idh5UnJ8Ar9VmYD24AcJenfZEvk4rry8DeL%2FhSsW74TNPA9wHU2ITPKNTFYglW15MX4PRc04uumyU%2BXKTpK0QgN9K0WdKtQg0fXCg2IIlHiBrvbUjED6ac0d3KTmHQx78kndHiobXkCBbgomZIu91CLKeJTSW2zIXctyNpkPs86uGCxE%2BO3%2BNbrz5DYT9Q0W&X-Amz-Signature=616a397457629a6125f05ce476d0fe9480f775bbf9d049c6f4fd65e236ba7607&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

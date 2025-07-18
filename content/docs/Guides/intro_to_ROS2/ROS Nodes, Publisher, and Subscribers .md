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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6EMVOG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGa6GBwwGpQiOUwz28%2F2PUwkkw%2FaTHexbUDPUhejJI6TAiEAvZEcWj94y1xUYoScp9O2Cu5RhNvYEfn8wOn1o9ljEGYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMw2ss%2BcWxtb1%2FTeyrcA1740eaMUueKvsRby0A%2FeVgPqdDTtxHht1zqvT55j%2F%2FHN8VeMyYi6yPIwJ15A0X2KmQFcJa3BkD72sTBPYmeWFGy1jyJ8TrjOT7mmLFP43jWXrR3uuKKq%2FZWmuCYd0YjER6RiFTyVfSGw8OhJ6rRX9Dde6i5E8%2BMlofvNaScHlvr99ejfi60vz47d49RoygrzzBeBiT0Qcbx9%2FHt6fJY%2BorDbOH4hG%2B6zqVMSmPGa7%2Bv6V4FLa%2BdhlPhMLvXB7R8Kej1D9giNkv8cQs%2B%2FfqivbIjlMgfHXUaZ%2FJUV8o4IVjCPNriN58o39cm1EDuAxq8SJKUiWo6IDj2DpDFyE26cc7wLWZHkSCCQydSKzYi7vqqOECI2SWWMZj1CYDtLnIkFnu4F6wM5uilMHSO2Pp64Oy79tKQq9JA%2BAFfZlodlTjdX8wvZPd8bruyS9GCBxJnPPzi3mfEMEAVorXnvrrNhPBbFE%2F1Jwnd0Rx2Jta3rXzixf2WtZjEWGU7GCVhJMCCbxiNciVJHANUvie%2BlKyANFMfa7KESiLjGQX3IP%2FFt1jE1krpt%2BHkZDw4OFgJo3J1wiWHOCUlbysC3VOFEdCagRNHOzhGVKCcyPN7wTAiBWRMglg64u74e6L%2FaOb1MP7k6sMGOqUBfddtEDuiAPkFCOsqEeN2u%2FgKnZ9%2FCunAeHA2NmoMJ%2FsYJ6EOp%2B20fTa9UGjsw0X6I%2BjsyXXZq5HamBCDO71p122mWli%2BEwnKoYpyfabxcPU%2BDGAijJeXLclJ%2BgErMBDL134888sFc%2FaTRCwIuIOkQDv%2BXX5ox5JrxvvYKINnlmL2U4osc%2F4AdzfaKJkcK%2FyBCgr5dBI7F70pGTzLLdCd8lxLJFI%2F&X-Amz-Signature=a38f22fcddb8ce4aae3e89f8ce175f089a46be4c0cfd9d35e0a687a68d7d0837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6EMVOG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGa6GBwwGpQiOUwz28%2F2PUwkkw%2FaTHexbUDPUhejJI6TAiEAvZEcWj94y1xUYoScp9O2Cu5RhNvYEfn8wOn1o9ljEGYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMw2ss%2BcWxtb1%2FTeyrcA1740eaMUueKvsRby0A%2FeVgPqdDTtxHht1zqvT55j%2F%2FHN8VeMyYi6yPIwJ15A0X2KmQFcJa3BkD72sTBPYmeWFGy1jyJ8TrjOT7mmLFP43jWXrR3uuKKq%2FZWmuCYd0YjER6RiFTyVfSGw8OhJ6rRX9Dde6i5E8%2BMlofvNaScHlvr99ejfi60vz47d49RoygrzzBeBiT0Qcbx9%2FHt6fJY%2BorDbOH4hG%2B6zqVMSmPGa7%2Bv6V4FLa%2BdhlPhMLvXB7R8Kej1D9giNkv8cQs%2B%2FfqivbIjlMgfHXUaZ%2FJUV8o4IVjCPNriN58o39cm1EDuAxq8SJKUiWo6IDj2DpDFyE26cc7wLWZHkSCCQydSKzYi7vqqOECI2SWWMZj1CYDtLnIkFnu4F6wM5uilMHSO2Pp64Oy79tKQq9JA%2BAFfZlodlTjdX8wvZPd8bruyS9GCBxJnPPzi3mfEMEAVorXnvrrNhPBbFE%2F1Jwnd0Rx2Jta3rXzixf2WtZjEWGU7GCVhJMCCbxiNciVJHANUvie%2BlKyANFMfa7KESiLjGQX3IP%2FFt1jE1krpt%2BHkZDw4OFgJo3J1wiWHOCUlbysC3VOFEdCagRNHOzhGVKCcyPN7wTAiBWRMglg64u74e6L%2FaOb1MP7k6sMGOqUBfddtEDuiAPkFCOsqEeN2u%2FgKnZ9%2FCunAeHA2NmoMJ%2FsYJ6EOp%2B20fTa9UGjsw0X6I%2BjsyXXZq5HamBCDO71p122mWli%2BEwnKoYpyfabxcPU%2BDGAijJeXLclJ%2BgErMBDL134888sFc%2FaTRCwIuIOkQDv%2BXX5ox5JrxvvYKINnlmL2U4osc%2F4AdzfaKJkcK%2FyBCgr5dBI7F70pGTzLLdCd8lxLJFI%2F&X-Amz-Signature=14b58835850ee5569b137f67d354ea697b967ed09d6f347de8bb6b150b298594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6EMVOG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGa6GBwwGpQiOUwz28%2F2PUwkkw%2FaTHexbUDPUhejJI6TAiEAvZEcWj94y1xUYoScp9O2Cu5RhNvYEfn8wOn1o9ljEGYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMw2ss%2BcWxtb1%2FTeyrcA1740eaMUueKvsRby0A%2FeVgPqdDTtxHht1zqvT55j%2F%2FHN8VeMyYi6yPIwJ15A0X2KmQFcJa3BkD72sTBPYmeWFGy1jyJ8TrjOT7mmLFP43jWXrR3uuKKq%2FZWmuCYd0YjER6RiFTyVfSGw8OhJ6rRX9Dde6i5E8%2BMlofvNaScHlvr99ejfi60vz47d49RoygrzzBeBiT0Qcbx9%2FHt6fJY%2BorDbOH4hG%2B6zqVMSmPGa7%2Bv6V4FLa%2BdhlPhMLvXB7R8Kej1D9giNkv8cQs%2B%2FfqivbIjlMgfHXUaZ%2FJUV8o4IVjCPNriN58o39cm1EDuAxq8SJKUiWo6IDj2DpDFyE26cc7wLWZHkSCCQydSKzYi7vqqOECI2SWWMZj1CYDtLnIkFnu4F6wM5uilMHSO2Pp64Oy79tKQq9JA%2BAFfZlodlTjdX8wvZPd8bruyS9GCBxJnPPzi3mfEMEAVorXnvrrNhPBbFE%2F1Jwnd0Rx2Jta3rXzixf2WtZjEWGU7GCVhJMCCbxiNciVJHANUvie%2BlKyANFMfa7KESiLjGQX3IP%2FFt1jE1krpt%2BHkZDw4OFgJo3J1wiWHOCUlbysC3VOFEdCagRNHOzhGVKCcyPN7wTAiBWRMglg64u74e6L%2FaOb1MP7k6sMGOqUBfddtEDuiAPkFCOsqEeN2u%2FgKnZ9%2FCunAeHA2NmoMJ%2FsYJ6EOp%2B20fTa9UGjsw0X6I%2BjsyXXZq5HamBCDO71p122mWli%2BEwnKoYpyfabxcPU%2BDGAijJeXLclJ%2BgErMBDL134888sFc%2FaTRCwIuIOkQDv%2BXX5ox5JrxvvYKINnlmL2U4osc%2F4AdzfaKJkcK%2FyBCgr5dBI7F70pGTzLLdCd8lxLJFI%2F&X-Amz-Signature=c59bbb6c5d756d922c3a99a23ec479e83861d6d19edb8e54b334c0034921efac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6EMVOG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGa6GBwwGpQiOUwz28%2F2PUwkkw%2FaTHexbUDPUhejJI6TAiEAvZEcWj94y1xUYoScp9O2Cu5RhNvYEfn8wOn1o9ljEGYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMw2ss%2BcWxtb1%2FTeyrcA1740eaMUueKvsRby0A%2FeVgPqdDTtxHht1zqvT55j%2F%2FHN8VeMyYi6yPIwJ15A0X2KmQFcJa3BkD72sTBPYmeWFGy1jyJ8TrjOT7mmLFP43jWXrR3uuKKq%2FZWmuCYd0YjER6RiFTyVfSGw8OhJ6rRX9Dde6i5E8%2BMlofvNaScHlvr99ejfi60vz47d49RoygrzzBeBiT0Qcbx9%2FHt6fJY%2BorDbOH4hG%2B6zqVMSmPGa7%2Bv6V4FLa%2BdhlPhMLvXB7R8Kej1D9giNkv8cQs%2B%2FfqivbIjlMgfHXUaZ%2FJUV8o4IVjCPNriN58o39cm1EDuAxq8SJKUiWo6IDj2DpDFyE26cc7wLWZHkSCCQydSKzYi7vqqOECI2SWWMZj1CYDtLnIkFnu4F6wM5uilMHSO2Pp64Oy79tKQq9JA%2BAFfZlodlTjdX8wvZPd8bruyS9GCBxJnPPzi3mfEMEAVorXnvrrNhPBbFE%2F1Jwnd0Rx2Jta3rXzixf2WtZjEWGU7GCVhJMCCbxiNciVJHANUvie%2BlKyANFMfa7KESiLjGQX3IP%2FFt1jE1krpt%2BHkZDw4OFgJo3J1wiWHOCUlbysC3VOFEdCagRNHOzhGVKCcyPN7wTAiBWRMglg64u74e6L%2FaOb1MP7k6sMGOqUBfddtEDuiAPkFCOsqEeN2u%2FgKnZ9%2FCunAeHA2NmoMJ%2FsYJ6EOp%2B20fTa9UGjsw0X6I%2BjsyXXZq5HamBCDO71p122mWli%2BEwnKoYpyfabxcPU%2BDGAijJeXLclJ%2BgErMBDL134888sFc%2FaTRCwIuIOkQDv%2BXX5ox5JrxvvYKINnlmL2U4osc%2F4AdzfaKJkcK%2FyBCgr5dBI7F70pGTzLLdCd8lxLJFI%2F&X-Amz-Signature=53eeabc58f25a74746677b735f1c8f42d4bb121f55fbd7de8ba78dda0c377fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6EMVOG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGa6GBwwGpQiOUwz28%2F2PUwkkw%2FaTHexbUDPUhejJI6TAiEAvZEcWj94y1xUYoScp9O2Cu5RhNvYEfn8wOn1o9ljEGYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMw2ss%2BcWxtb1%2FTeyrcA1740eaMUueKvsRby0A%2FeVgPqdDTtxHht1zqvT55j%2F%2FHN8VeMyYi6yPIwJ15A0X2KmQFcJa3BkD72sTBPYmeWFGy1jyJ8TrjOT7mmLFP43jWXrR3uuKKq%2FZWmuCYd0YjER6RiFTyVfSGw8OhJ6rRX9Dde6i5E8%2BMlofvNaScHlvr99ejfi60vz47d49RoygrzzBeBiT0Qcbx9%2FHt6fJY%2BorDbOH4hG%2B6zqVMSmPGa7%2Bv6V4FLa%2BdhlPhMLvXB7R8Kej1D9giNkv8cQs%2B%2FfqivbIjlMgfHXUaZ%2FJUV8o4IVjCPNriN58o39cm1EDuAxq8SJKUiWo6IDj2DpDFyE26cc7wLWZHkSCCQydSKzYi7vqqOECI2SWWMZj1CYDtLnIkFnu4F6wM5uilMHSO2Pp64Oy79tKQq9JA%2BAFfZlodlTjdX8wvZPd8bruyS9GCBxJnPPzi3mfEMEAVorXnvrrNhPBbFE%2F1Jwnd0Rx2Jta3rXzixf2WtZjEWGU7GCVhJMCCbxiNciVJHANUvie%2BlKyANFMfa7KESiLjGQX3IP%2FFt1jE1krpt%2BHkZDw4OFgJo3J1wiWHOCUlbysC3VOFEdCagRNHOzhGVKCcyPN7wTAiBWRMglg64u74e6L%2FaOb1MP7k6sMGOqUBfddtEDuiAPkFCOsqEeN2u%2FgKnZ9%2FCunAeHA2NmoMJ%2FsYJ6EOp%2B20fTa9UGjsw0X6I%2BjsyXXZq5HamBCDO71p122mWli%2BEwnKoYpyfabxcPU%2BDGAijJeXLclJ%2BgErMBDL134888sFc%2FaTRCwIuIOkQDv%2BXX5ox5JrxvvYKINnlmL2U4osc%2F4AdzfaKJkcK%2FyBCgr5dBI7F70pGTzLLdCd8lxLJFI%2F&X-Amz-Signature=dc56affd21e3c099468abf88181a47203c14bc0d3edb54d54a7a5942d93d6900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6EMVOG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGa6GBwwGpQiOUwz28%2F2PUwkkw%2FaTHexbUDPUhejJI6TAiEAvZEcWj94y1xUYoScp9O2Cu5RhNvYEfn8wOn1o9ljEGYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMw2ss%2BcWxtb1%2FTeyrcA1740eaMUueKvsRby0A%2FeVgPqdDTtxHht1zqvT55j%2F%2FHN8VeMyYi6yPIwJ15A0X2KmQFcJa3BkD72sTBPYmeWFGy1jyJ8TrjOT7mmLFP43jWXrR3uuKKq%2FZWmuCYd0YjER6RiFTyVfSGw8OhJ6rRX9Dde6i5E8%2BMlofvNaScHlvr99ejfi60vz47d49RoygrzzBeBiT0Qcbx9%2FHt6fJY%2BorDbOH4hG%2B6zqVMSmPGa7%2Bv6V4FLa%2BdhlPhMLvXB7R8Kej1D9giNkv8cQs%2B%2FfqivbIjlMgfHXUaZ%2FJUV8o4IVjCPNriN58o39cm1EDuAxq8SJKUiWo6IDj2DpDFyE26cc7wLWZHkSCCQydSKzYi7vqqOECI2SWWMZj1CYDtLnIkFnu4F6wM5uilMHSO2Pp64Oy79tKQq9JA%2BAFfZlodlTjdX8wvZPd8bruyS9GCBxJnPPzi3mfEMEAVorXnvrrNhPBbFE%2F1Jwnd0Rx2Jta3rXzixf2WtZjEWGU7GCVhJMCCbxiNciVJHANUvie%2BlKyANFMfa7KESiLjGQX3IP%2FFt1jE1krpt%2BHkZDw4OFgJo3J1wiWHOCUlbysC3VOFEdCagRNHOzhGVKCcyPN7wTAiBWRMglg64u74e6L%2FaOb1MP7k6sMGOqUBfddtEDuiAPkFCOsqEeN2u%2FgKnZ9%2FCunAeHA2NmoMJ%2FsYJ6EOp%2B20fTa9UGjsw0X6I%2BjsyXXZq5HamBCDO71p122mWli%2BEwnKoYpyfabxcPU%2BDGAijJeXLclJ%2BgErMBDL134888sFc%2FaTRCwIuIOkQDv%2BXX5ox5JrxvvYKINnlmL2U4osc%2F4AdzfaKJkcK%2FyBCgr5dBI7F70pGTzLLdCd8lxLJFI%2F&X-Amz-Signature=ed474fc5e0a18fb0939b564a48b0fe3c24054388c320ef4ab434b056c1d357af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6EMVOG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGa6GBwwGpQiOUwz28%2F2PUwkkw%2FaTHexbUDPUhejJI6TAiEAvZEcWj94y1xUYoScp9O2Cu5RhNvYEfn8wOn1o9ljEGYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMw2ss%2BcWxtb1%2FTeyrcA1740eaMUueKvsRby0A%2FeVgPqdDTtxHht1zqvT55j%2F%2FHN8VeMyYi6yPIwJ15A0X2KmQFcJa3BkD72sTBPYmeWFGy1jyJ8TrjOT7mmLFP43jWXrR3uuKKq%2FZWmuCYd0YjER6RiFTyVfSGw8OhJ6rRX9Dde6i5E8%2BMlofvNaScHlvr99ejfi60vz47d49RoygrzzBeBiT0Qcbx9%2FHt6fJY%2BorDbOH4hG%2B6zqVMSmPGa7%2Bv6V4FLa%2BdhlPhMLvXB7R8Kej1D9giNkv8cQs%2B%2FfqivbIjlMgfHXUaZ%2FJUV8o4IVjCPNriN58o39cm1EDuAxq8SJKUiWo6IDj2DpDFyE26cc7wLWZHkSCCQydSKzYi7vqqOECI2SWWMZj1CYDtLnIkFnu4F6wM5uilMHSO2Pp64Oy79tKQq9JA%2BAFfZlodlTjdX8wvZPd8bruyS9GCBxJnPPzi3mfEMEAVorXnvrrNhPBbFE%2F1Jwnd0Rx2Jta3rXzixf2WtZjEWGU7GCVhJMCCbxiNciVJHANUvie%2BlKyANFMfa7KESiLjGQX3IP%2FFt1jE1krpt%2BHkZDw4OFgJo3J1wiWHOCUlbysC3VOFEdCagRNHOzhGVKCcyPN7wTAiBWRMglg64u74e6L%2FaOb1MP7k6sMGOqUBfddtEDuiAPkFCOsqEeN2u%2FgKnZ9%2FCunAeHA2NmoMJ%2FsYJ6EOp%2B20fTa9UGjsw0X6I%2BjsyXXZq5HamBCDO71p122mWli%2BEwnKoYpyfabxcPU%2BDGAijJeXLclJ%2BgErMBDL134888sFc%2FaTRCwIuIOkQDv%2BXX5ox5JrxvvYKINnlmL2U4osc%2F4AdzfaKJkcK%2FyBCgr5dBI7F70pGTzLLdCd8lxLJFI%2F&X-Amz-Signature=c25b2daebf993f4d4e0095009849f27c9cb624e839f06f6ce0ac24fb5cf61dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6EMVOG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGa6GBwwGpQiOUwz28%2F2PUwkkw%2FaTHexbUDPUhejJI6TAiEAvZEcWj94y1xUYoScp9O2Cu5RhNvYEfn8wOn1o9ljEGYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMw2ss%2BcWxtb1%2FTeyrcA1740eaMUueKvsRby0A%2FeVgPqdDTtxHht1zqvT55j%2F%2FHN8VeMyYi6yPIwJ15A0X2KmQFcJa3BkD72sTBPYmeWFGy1jyJ8TrjOT7mmLFP43jWXrR3uuKKq%2FZWmuCYd0YjER6RiFTyVfSGw8OhJ6rRX9Dde6i5E8%2BMlofvNaScHlvr99ejfi60vz47d49RoygrzzBeBiT0Qcbx9%2FHt6fJY%2BorDbOH4hG%2B6zqVMSmPGa7%2Bv6V4FLa%2BdhlPhMLvXB7R8Kej1D9giNkv8cQs%2B%2FfqivbIjlMgfHXUaZ%2FJUV8o4IVjCPNriN58o39cm1EDuAxq8SJKUiWo6IDj2DpDFyE26cc7wLWZHkSCCQydSKzYi7vqqOECI2SWWMZj1CYDtLnIkFnu4F6wM5uilMHSO2Pp64Oy79tKQq9JA%2BAFfZlodlTjdX8wvZPd8bruyS9GCBxJnPPzi3mfEMEAVorXnvrrNhPBbFE%2F1Jwnd0Rx2Jta3rXzixf2WtZjEWGU7GCVhJMCCbxiNciVJHANUvie%2BlKyANFMfa7KESiLjGQX3IP%2FFt1jE1krpt%2BHkZDw4OFgJo3J1wiWHOCUlbysC3VOFEdCagRNHOzhGVKCcyPN7wTAiBWRMglg64u74e6L%2FaOb1MP7k6sMGOqUBfddtEDuiAPkFCOsqEeN2u%2FgKnZ9%2FCunAeHA2NmoMJ%2FsYJ6EOp%2B20fTa9UGjsw0X6I%2BjsyXXZq5HamBCDO71p122mWli%2BEwnKoYpyfabxcPU%2BDGAijJeXLclJ%2BgErMBDL134888sFc%2FaTRCwIuIOkQDv%2BXX5ox5JrxvvYKINnlmL2U4osc%2F4AdzfaKJkcK%2FyBCgr5dBI7F70pGTzLLdCd8lxLJFI%2F&X-Amz-Signature=819101c1527b927583e2cd782c627e9aad7d90a45a2b8f478fec099e122257af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

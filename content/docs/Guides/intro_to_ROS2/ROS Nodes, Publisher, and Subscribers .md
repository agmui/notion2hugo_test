---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOZ46K7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIElor68%2FZOPMjhr2R%2F5JyqjRJV9RrUO7ssmYoAF%2FHw2uAiEAhI%2B7UjH1Bc44a%2FZfT2FqefjGaUMJ0vee4ylDcqer6%2Bwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHqsF5blrT8bQkHGcircA7tsW4JVXfG%2B9tkLVv3utXQcREJWR6cskcvLhceSa4Dnsd1Ok8oW0yV0aDtyfMJaTG%2FV2y%2Bt7uCjywLnwJUcDc2EmbUB1EBxFVb0mXiqzAmHknFx9mUQv8hz%2F7%2Bf8BlK%2BDqRKViqWi0KnvVeiAkINVm4T6x2Gl3BTGPPxJfE3Z8g%2F6Bn0bQptM12WH4AiHPuCbUCSAm%2F1jNiqwrEBZUojOsJheqVS8rxqtgVF%2FGzZt3jaTKwToNpiTV4Wo79NZgxWvhwJVMI2Rev2%2FmDZyKHJOOt9J%2Bw%2BSNhINmGSTg0Eg%2Fp6S05an%2BGTG2Ed4RmK2kd1QPMWP3vzuYnK%2FFRCMQEeix5Gm01DFzZSH%2FAsakIEk%2BFuHQcwFMwAib4R6bUFiVy3YB7RMgTNrchekIaB2Rxed8qXX6lEtDmj0ITizOdNkst7RLWSPpZQE0FbQ3cs9w5X2cG75CsFv7pVM%2B6kTaGjQTTo4%2FvdnSq7NKdEFiD3y7CvUYHjGecdhQgJ6DoPXvVf%2BgfxYEzPeHA24u9QPkLT68Nx4c%2FPQZUGQ9NfYWnP7l7TnuVVkWSEvBpWOmx25OLWdX%2BiMINd0FHbd43p6Jvl2JqLVwf931OKILxNDmxbcyNolXCvPeaEmMkNpRIMMWvzcQGOqUBl7htx27BdmZEkpE8tS4RywPBFpfIbFkcIBa%2B275GjXrP56WLM1hH%2FoDziolfrkSAS2Zr7PvhYKf%2FloxBkL7iT2FeeSuyMgfOj9Jm7FIMPzhhTsHwcdyV%2FwgJVoHtKOzPR0owqUquexyHVv0t%2FU06H90uyKfZ2lHOl4QvifCdDrYgWlPtBvHQCBkQcUkDrOIfHNx5SSiKsGVTzq8s2J72%2B7kHRp64&X-Amz-Signature=3cd3169b718ed2747105d4016f950b34590d051070df0a70c239ad9816420a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOZ46K7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIElor68%2FZOPMjhr2R%2F5JyqjRJV9RrUO7ssmYoAF%2FHw2uAiEAhI%2B7UjH1Bc44a%2FZfT2FqefjGaUMJ0vee4ylDcqer6%2Bwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHqsF5blrT8bQkHGcircA7tsW4JVXfG%2B9tkLVv3utXQcREJWR6cskcvLhceSa4Dnsd1Ok8oW0yV0aDtyfMJaTG%2FV2y%2Bt7uCjywLnwJUcDc2EmbUB1EBxFVb0mXiqzAmHknFx9mUQv8hz%2F7%2Bf8BlK%2BDqRKViqWi0KnvVeiAkINVm4T6x2Gl3BTGPPxJfE3Z8g%2F6Bn0bQptM12WH4AiHPuCbUCSAm%2F1jNiqwrEBZUojOsJheqVS8rxqtgVF%2FGzZt3jaTKwToNpiTV4Wo79NZgxWvhwJVMI2Rev2%2FmDZyKHJOOt9J%2Bw%2BSNhINmGSTg0Eg%2Fp6S05an%2BGTG2Ed4RmK2kd1QPMWP3vzuYnK%2FFRCMQEeix5Gm01DFzZSH%2FAsakIEk%2BFuHQcwFMwAib4R6bUFiVy3YB7RMgTNrchekIaB2Rxed8qXX6lEtDmj0ITizOdNkst7RLWSPpZQE0FbQ3cs9w5X2cG75CsFv7pVM%2B6kTaGjQTTo4%2FvdnSq7NKdEFiD3y7CvUYHjGecdhQgJ6DoPXvVf%2BgfxYEzPeHA24u9QPkLT68Nx4c%2FPQZUGQ9NfYWnP7l7TnuVVkWSEvBpWOmx25OLWdX%2BiMINd0FHbd43p6Jvl2JqLVwf931OKILxNDmxbcyNolXCvPeaEmMkNpRIMMWvzcQGOqUBl7htx27BdmZEkpE8tS4RywPBFpfIbFkcIBa%2B275GjXrP56WLM1hH%2FoDziolfrkSAS2Zr7PvhYKf%2FloxBkL7iT2FeeSuyMgfOj9Jm7FIMPzhhTsHwcdyV%2FwgJVoHtKOzPR0owqUquexyHVv0t%2FU06H90uyKfZ2lHOl4QvifCdDrYgWlPtBvHQCBkQcUkDrOIfHNx5SSiKsGVTzq8s2J72%2B7kHRp64&X-Amz-Signature=8de331aecd394eb208e150d5b10c4bf4d1a76093e50d8e2fb9b958a72c53c32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOZ46K7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIElor68%2FZOPMjhr2R%2F5JyqjRJV9RrUO7ssmYoAF%2FHw2uAiEAhI%2B7UjH1Bc44a%2FZfT2FqefjGaUMJ0vee4ylDcqer6%2Bwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHqsF5blrT8bQkHGcircA7tsW4JVXfG%2B9tkLVv3utXQcREJWR6cskcvLhceSa4Dnsd1Ok8oW0yV0aDtyfMJaTG%2FV2y%2Bt7uCjywLnwJUcDc2EmbUB1EBxFVb0mXiqzAmHknFx9mUQv8hz%2F7%2Bf8BlK%2BDqRKViqWi0KnvVeiAkINVm4T6x2Gl3BTGPPxJfE3Z8g%2F6Bn0bQptM12WH4AiHPuCbUCSAm%2F1jNiqwrEBZUojOsJheqVS8rxqtgVF%2FGzZt3jaTKwToNpiTV4Wo79NZgxWvhwJVMI2Rev2%2FmDZyKHJOOt9J%2Bw%2BSNhINmGSTg0Eg%2Fp6S05an%2BGTG2Ed4RmK2kd1QPMWP3vzuYnK%2FFRCMQEeix5Gm01DFzZSH%2FAsakIEk%2BFuHQcwFMwAib4R6bUFiVy3YB7RMgTNrchekIaB2Rxed8qXX6lEtDmj0ITizOdNkst7RLWSPpZQE0FbQ3cs9w5X2cG75CsFv7pVM%2B6kTaGjQTTo4%2FvdnSq7NKdEFiD3y7CvUYHjGecdhQgJ6DoPXvVf%2BgfxYEzPeHA24u9QPkLT68Nx4c%2FPQZUGQ9NfYWnP7l7TnuVVkWSEvBpWOmx25OLWdX%2BiMINd0FHbd43p6Jvl2JqLVwf931OKILxNDmxbcyNolXCvPeaEmMkNpRIMMWvzcQGOqUBl7htx27BdmZEkpE8tS4RywPBFpfIbFkcIBa%2B275GjXrP56WLM1hH%2FoDziolfrkSAS2Zr7PvhYKf%2FloxBkL7iT2FeeSuyMgfOj9Jm7FIMPzhhTsHwcdyV%2FwgJVoHtKOzPR0owqUquexyHVv0t%2FU06H90uyKfZ2lHOl4QvifCdDrYgWlPtBvHQCBkQcUkDrOIfHNx5SSiKsGVTzq8s2J72%2B7kHRp64&X-Amz-Signature=7ffcab9bf338a5dc81b16668b1305d4bf9ba9a290979e92a2a1b38e5f56e32ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOZ46K7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIElor68%2FZOPMjhr2R%2F5JyqjRJV9RrUO7ssmYoAF%2FHw2uAiEAhI%2B7UjH1Bc44a%2FZfT2FqefjGaUMJ0vee4ylDcqer6%2Bwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHqsF5blrT8bQkHGcircA7tsW4JVXfG%2B9tkLVv3utXQcREJWR6cskcvLhceSa4Dnsd1Ok8oW0yV0aDtyfMJaTG%2FV2y%2Bt7uCjywLnwJUcDc2EmbUB1EBxFVb0mXiqzAmHknFx9mUQv8hz%2F7%2Bf8BlK%2BDqRKViqWi0KnvVeiAkINVm4T6x2Gl3BTGPPxJfE3Z8g%2F6Bn0bQptM12WH4AiHPuCbUCSAm%2F1jNiqwrEBZUojOsJheqVS8rxqtgVF%2FGzZt3jaTKwToNpiTV4Wo79NZgxWvhwJVMI2Rev2%2FmDZyKHJOOt9J%2Bw%2BSNhINmGSTg0Eg%2Fp6S05an%2BGTG2Ed4RmK2kd1QPMWP3vzuYnK%2FFRCMQEeix5Gm01DFzZSH%2FAsakIEk%2BFuHQcwFMwAib4R6bUFiVy3YB7RMgTNrchekIaB2Rxed8qXX6lEtDmj0ITizOdNkst7RLWSPpZQE0FbQ3cs9w5X2cG75CsFv7pVM%2B6kTaGjQTTo4%2FvdnSq7NKdEFiD3y7CvUYHjGecdhQgJ6DoPXvVf%2BgfxYEzPeHA24u9QPkLT68Nx4c%2FPQZUGQ9NfYWnP7l7TnuVVkWSEvBpWOmx25OLWdX%2BiMINd0FHbd43p6Jvl2JqLVwf931OKILxNDmxbcyNolXCvPeaEmMkNpRIMMWvzcQGOqUBl7htx27BdmZEkpE8tS4RywPBFpfIbFkcIBa%2B275GjXrP56WLM1hH%2FoDziolfrkSAS2Zr7PvhYKf%2FloxBkL7iT2FeeSuyMgfOj9Jm7FIMPzhhTsHwcdyV%2FwgJVoHtKOzPR0owqUquexyHVv0t%2FU06H90uyKfZ2lHOl4QvifCdDrYgWlPtBvHQCBkQcUkDrOIfHNx5SSiKsGVTzq8s2J72%2B7kHRp64&X-Amz-Signature=b2eb1a2f0c9982362c09d30c137d59fd581d8fe9afc3900ffdd9cf9554f709b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOZ46K7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIElor68%2FZOPMjhr2R%2F5JyqjRJV9RrUO7ssmYoAF%2FHw2uAiEAhI%2B7UjH1Bc44a%2FZfT2FqefjGaUMJ0vee4ylDcqer6%2Bwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHqsF5blrT8bQkHGcircA7tsW4JVXfG%2B9tkLVv3utXQcREJWR6cskcvLhceSa4Dnsd1Ok8oW0yV0aDtyfMJaTG%2FV2y%2Bt7uCjywLnwJUcDc2EmbUB1EBxFVb0mXiqzAmHknFx9mUQv8hz%2F7%2Bf8BlK%2BDqRKViqWi0KnvVeiAkINVm4T6x2Gl3BTGPPxJfE3Z8g%2F6Bn0bQptM12WH4AiHPuCbUCSAm%2F1jNiqwrEBZUojOsJheqVS8rxqtgVF%2FGzZt3jaTKwToNpiTV4Wo79NZgxWvhwJVMI2Rev2%2FmDZyKHJOOt9J%2Bw%2BSNhINmGSTg0Eg%2Fp6S05an%2BGTG2Ed4RmK2kd1QPMWP3vzuYnK%2FFRCMQEeix5Gm01DFzZSH%2FAsakIEk%2BFuHQcwFMwAib4R6bUFiVy3YB7RMgTNrchekIaB2Rxed8qXX6lEtDmj0ITizOdNkst7RLWSPpZQE0FbQ3cs9w5X2cG75CsFv7pVM%2B6kTaGjQTTo4%2FvdnSq7NKdEFiD3y7CvUYHjGecdhQgJ6DoPXvVf%2BgfxYEzPeHA24u9QPkLT68Nx4c%2FPQZUGQ9NfYWnP7l7TnuVVkWSEvBpWOmx25OLWdX%2BiMINd0FHbd43p6Jvl2JqLVwf931OKILxNDmxbcyNolXCvPeaEmMkNpRIMMWvzcQGOqUBl7htx27BdmZEkpE8tS4RywPBFpfIbFkcIBa%2B275GjXrP56WLM1hH%2FoDziolfrkSAS2Zr7PvhYKf%2FloxBkL7iT2FeeSuyMgfOj9Jm7FIMPzhhTsHwcdyV%2FwgJVoHtKOzPR0owqUquexyHVv0t%2FU06H90uyKfZ2lHOl4QvifCdDrYgWlPtBvHQCBkQcUkDrOIfHNx5SSiKsGVTzq8s2J72%2B7kHRp64&X-Amz-Signature=8af5fc6ef8a3df6e42bc274c496be5ba6fd19b9531090c2ff2c85ab4c63981dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOZ46K7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIElor68%2FZOPMjhr2R%2F5JyqjRJV9RrUO7ssmYoAF%2FHw2uAiEAhI%2B7UjH1Bc44a%2FZfT2FqefjGaUMJ0vee4ylDcqer6%2Bwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHqsF5blrT8bQkHGcircA7tsW4JVXfG%2B9tkLVv3utXQcREJWR6cskcvLhceSa4Dnsd1Ok8oW0yV0aDtyfMJaTG%2FV2y%2Bt7uCjywLnwJUcDc2EmbUB1EBxFVb0mXiqzAmHknFx9mUQv8hz%2F7%2Bf8BlK%2BDqRKViqWi0KnvVeiAkINVm4T6x2Gl3BTGPPxJfE3Z8g%2F6Bn0bQptM12WH4AiHPuCbUCSAm%2F1jNiqwrEBZUojOsJheqVS8rxqtgVF%2FGzZt3jaTKwToNpiTV4Wo79NZgxWvhwJVMI2Rev2%2FmDZyKHJOOt9J%2Bw%2BSNhINmGSTg0Eg%2Fp6S05an%2BGTG2Ed4RmK2kd1QPMWP3vzuYnK%2FFRCMQEeix5Gm01DFzZSH%2FAsakIEk%2BFuHQcwFMwAib4R6bUFiVy3YB7RMgTNrchekIaB2Rxed8qXX6lEtDmj0ITizOdNkst7RLWSPpZQE0FbQ3cs9w5X2cG75CsFv7pVM%2B6kTaGjQTTo4%2FvdnSq7NKdEFiD3y7CvUYHjGecdhQgJ6DoPXvVf%2BgfxYEzPeHA24u9QPkLT68Nx4c%2FPQZUGQ9NfYWnP7l7TnuVVkWSEvBpWOmx25OLWdX%2BiMINd0FHbd43p6Jvl2JqLVwf931OKILxNDmxbcyNolXCvPeaEmMkNpRIMMWvzcQGOqUBl7htx27BdmZEkpE8tS4RywPBFpfIbFkcIBa%2B275GjXrP56WLM1hH%2FoDziolfrkSAS2Zr7PvhYKf%2FloxBkL7iT2FeeSuyMgfOj9Jm7FIMPzhhTsHwcdyV%2FwgJVoHtKOzPR0owqUquexyHVv0t%2FU06H90uyKfZ2lHOl4QvifCdDrYgWlPtBvHQCBkQcUkDrOIfHNx5SSiKsGVTzq8s2J72%2B7kHRp64&X-Amz-Signature=ec80809eee08da15d61ab67cae9b73abdc1e5cfcc20e78f43ce89a9ce3b0a585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOZ46K7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIElor68%2FZOPMjhr2R%2F5JyqjRJV9RrUO7ssmYoAF%2FHw2uAiEAhI%2B7UjH1Bc44a%2FZfT2FqefjGaUMJ0vee4ylDcqer6%2Bwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHqsF5blrT8bQkHGcircA7tsW4JVXfG%2B9tkLVv3utXQcREJWR6cskcvLhceSa4Dnsd1Ok8oW0yV0aDtyfMJaTG%2FV2y%2Bt7uCjywLnwJUcDc2EmbUB1EBxFVb0mXiqzAmHknFx9mUQv8hz%2F7%2Bf8BlK%2BDqRKViqWi0KnvVeiAkINVm4T6x2Gl3BTGPPxJfE3Z8g%2F6Bn0bQptM12WH4AiHPuCbUCSAm%2F1jNiqwrEBZUojOsJheqVS8rxqtgVF%2FGzZt3jaTKwToNpiTV4Wo79NZgxWvhwJVMI2Rev2%2FmDZyKHJOOt9J%2Bw%2BSNhINmGSTg0Eg%2Fp6S05an%2BGTG2Ed4RmK2kd1QPMWP3vzuYnK%2FFRCMQEeix5Gm01DFzZSH%2FAsakIEk%2BFuHQcwFMwAib4R6bUFiVy3YB7RMgTNrchekIaB2Rxed8qXX6lEtDmj0ITizOdNkst7RLWSPpZQE0FbQ3cs9w5X2cG75CsFv7pVM%2B6kTaGjQTTo4%2FvdnSq7NKdEFiD3y7CvUYHjGecdhQgJ6DoPXvVf%2BgfxYEzPeHA24u9QPkLT68Nx4c%2FPQZUGQ9NfYWnP7l7TnuVVkWSEvBpWOmx25OLWdX%2BiMINd0FHbd43p6Jvl2JqLVwf931OKILxNDmxbcyNolXCvPeaEmMkNpRIMMWvzcQGOqUBl7htx27BdmZEkpE8tS4RywPBFpfIbFkcIBa%2B275GjXrP56WLM1hH%2FoDziolfrkSAS2Zr7PvhYKf%2FloxBkL7iT2FeeSuyMgfOj9Jm7FIMPzhhTsHwcdyV%2FwgJVoHtKOzPR0owqUquexyHVv0t%2FU06H90uyKfZ2lHOl4QvifCdDrYgWlPtBvHQCBkQcUkDrOIfHNx5SSiKsGVTzq8s2J72%2B7kHRp64&X-Amz-Signature=c53e5e7b6c25b5cf7fdf6e7f8129b55870e73336ddfed84975f13a409cba9ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOZ46K7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIElor68%2FZOPMjhr2R%2F5JyqjRJV9RrUO7ssmYoAF%2FHw2uAiEAhI%2B7UjH1Bc44a%2FZfT2FqefjGaUMJ0vee4ylDcqer6%2Bwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHqsF5blrT8bQkHGcircA7tsW4JVXfG%2B9tkLVv3utXQcREJWR6cskcvLhceSa4Dnsd1Ok8oW0yV0aDtyfMJaTG%2FV2y%2Bt7uCjywLnwJUcDc2EmbUB1EBxFVb0mXiqzAmHknFx9mUQv8hz%2F7%2Bf8BlK%2BDqRKViqWi0KnvVeiAkINVm4T6x2Gl3BTGPPxJfE3Z8g%2F6Bn0bQptM12WH4AiHPuCbUCSAm%2F1jNiqwrEBZUojOsJheqVS8rxqtgVF%2FGzZt3jaTKwToNpiTV4Wo79NZgxWvhwJVMI2Rev2%2FmDZyKHJOOt9J%2Bw%2BSNhINmGSTg0Eg%2Fp6S05an%2BGTG2Ed4RmK2kd1QPMWP3vzuYnK%2FFRCMQEeix5Gm01DFzZSH%2FAsakIEk%2BFuHQcwFMwAib4R6bUFiVy3YB7RMgTNrchekIaB2Rxed8qXX6lEtDmj0ITizOdNkst7RLWSPpZQE0FbQ3cs9w5X2cG75CsFv7pVM%2B6kTaGjQTTo4%2FvdnSq7NKdEFiD3y7CvUYHjGecdhQgJ6DoPXvVf%2BgfxYEzPeHA24u9QPkLT68Nx4c%2FPQZUGQ9NfYWnP7l7TnuVVkWSEvBpWOmx25OLWdX%2BiMINd0FHbd43p6Jvl2JqLVwf931OKILxNDmxbcyNolXCvPeaEmMkNpRIMMWvzcQGOqUBl7htx27BdmZEkpE8tS4RywPBFpfIbFkcIBa%2B275GjXrP56WLM1hH%2FoDziolfrkSAS2Zr7PvhYKf%2FloxBkL7iT2FeeSuyMgfOj9Jm7FIMPzhhTsHwcdyV%2FwgJVoHtKOzPR0owqUquexyHVv0t%2FU06H90uyKfZ2lHOl4QvifCdDrYgWlPtBvHQCBkQcUkDrOIfHNx5SSiKsGVTzq8s2J72%2B7kHRp64&X-Amz-Signature=2f25905458b056b139e1c8b375afae367d9950d258938be0f173e09ad2fffa5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

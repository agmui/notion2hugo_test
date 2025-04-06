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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCIAMFW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9bJvBY0DvQ6Ue%2B7wQxOHhKtTsVguKBxD3NaFEXk80uwIgEQeb6fsYXYsRz5GYK4ms0ZjaJWIpVWXewNEYgm2Fcgsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLNrXPZSz4P6fQty3SrcA6m1WdN2g6guPkcqc23EtWiBeVSRAiWWrfks8lKP8xOY4LH1USQmhJq1rf%2FI%2BgAf%2F86IOHxRymWdXEBALHiPoj5eIIEnLfAp8mPxMHdQ2PKeKuL40lrI1qEQDGEvV9i4U%2F6iW%2B1ZU2nCaS2uuFLKg%2BLaFh9ybxd5KwG7kEKoT5z3fSFbuWuRCkXnjjZqleLzV18CUzIEDJ8sYWapn07fh07pWekJwN6kVF1PxEAZkrVSqfw65DniVqAxgR4nLxh8Qr1988zSmKLJqoTKPtj9rx2Yi8jQHplhbUPRMUXASoTeprP5EHMLyznfI6yrO133vFCYADlLeIAEWG3qJMP9yNaNNSRTCmQR2LYHxwJxKTqJ4oyyR7Ds5O%2B9nDqg3VLldEPwFRTvbGHkVRTYRPDRo1clWa7ulJREJb8LKAG0g%2Bizl3Noq2owFHhaFs4cSxuaMCg4FudIqeePQFyWjK%2Bf6eujRnjtyhINC%2FKIOeGnJPVSOnsi%2FNlu%2BS5YiKfSOnhdv1RsGkhOMDyhID7dgDoQyT0rVdSN1p86v3zkfVhOZWOovl10qCm39AV45zuRG6RlwGLuAkK6LtSE8xJ%2BUxT4LFaUpHNLVtH4d%2Fiet2keR7hDbKROCZ8TA49DF76PMOfxxr8GOqUBbcUHnpBKSeCiyKONzHfWl0kRV%2FqPhoJCUe9DwDDtD7q0NsMA06OoA2GZKj5FGTw5vA0s0CGnYVfG6fkRYmJA5pVtmXqMAOzDAY3q%2BtLVUiae3zIWVoZuWjKR2i5qIxrXoyk5qovLE1%2Fa0TSm19fb8OpaSGEiWR6UinWSW0NGxwS10VQ1fTTK2nHCA%2FsUMiQhEPAuWMdUUDfqgRuPaj7Wps8Btu%2Bd&X-Amz-Signature=ade78fd13b3f115e57c79a8ae4b374dfe12fe7e859dc9fb28d2c219a05f16bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCIAMFW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9bJvBY0DvQ6Ue%2B7wQxOHhKtTsVguKBxD3NaFEXk80uwIgEQeb6fsYXYsRz5GYK4ms0ZjaJWIpVWXewNEYgm2Fcgsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLNrXPZSz4P6fQty3SrcA6m1WdN2g6guPkcqc23EtWiBeVSRAiWWrfks8lKP8xOY4LH1USQmhJq1rf%2FI%2BgAf%2F86IOHxRymWdXEBALHiPoj5eIIEnLfAp8mPxMHdQ2PKeKuL40lrI1qEQDGEvV9i4U%2F6iW%2B1ZU2nCaS2uuFLKg%2BLaFh9ybxd5KwG7kEKoT5z3fSFbuWuRCkXnjjZqleLzV18CUzIEDJ8sYWapn07fh07pWekJwN6kVF1PxEAZkrVSqfw65DniVqAxgR4nLxh8Qr1988zSmKLJqoTKPtj9rx2Yi8jQHplhbUPRMUXASoTeprP5EHMLyznfI6yrO133vFCYADlLeIAEWG3qJMP9yNaNNSRTCmQR2LYHxwJxKTqJ4oyyR7Ds5O%2B9nDqg3VLldEPwFRTvbGHkVRTYRPDRo1clWa7ulJREJb8LKAG0g%2Bizl3Noq2owFHhaFs4cSxuaMCg4FudIqeePQFyWjK%2Bf6eujRnjtyhINC%2FKIOeGnJPVSOnsi%2FNlu%2BS5YiKfSOnhdv1RsGkhOMDyhID7dgDoQyT0rVdSN1p86v3zkfVhOZWOovl10qCm39AV45zuRG6RlwGLuAkK6LtSE8xJ%2BUxT4LFaUpHNLVtH4d%2Fiet2keR7hDbKROCZ8TA49DF76PMOfxxr8GOqUBbcUHnpBKSeCiyKONzHfWl0kRV%2FqPhoJCUe9DwDDtD7q0NsMA06OoA2GZKj5FGTw5vA0s0CGnYVfG6fkRYmJA5pVtmXqMAOzDAY3q%2BtLVUiae3zIWVoZuWjKR2i5qIxrXoyk5qovLE1%2Fa0TSm19fb8OpaSGEiWR6UinWSW0NGxwS10VQ1fTTK2nHCA%2FsUMiQhEPAuWMdUUDfqgRuPaj7Wps8Btu%2Bd&X-Amz-Signature=f98f0e7a82f5d4b0c6861e5141687cad8ddf64a6e3f9b89beddb724fc94b5b84&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCIAMFW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9bJvBY0DvQ6Ue%2B7wQxOHhKtTsVguKBxD3NaFEXk80uwIgEQeb6fsYXYsRz5GYK4ms0ZjaJWIpVWXewNEYgm2Fcgsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLNrXPZSz4P6fQty3SrcA6m1WdN2g6guPkcqc23EtWiBeVSRAiWWrfks8lKP8xOY4LH1USQmhJq1rf%2FI%2BgAf%2F86IOHxRymWdXEBALHiPoj5eIIEnLfAp8mPxMHdQ2PKeKuL40lrI1qEQDGEvV9i4U%2F6iW%2B1ZU2nCaS2uuFLKg%2BLaFh9ybxd5KwG7kEKoT5z3fSFbuWuRCkXnjjZqleLzV18CUzIEDJ8sYWapn07fh07pWekJwN6kVF1PxEAZkrVSqfw65DniVqAxgR4nLxh8Qr1988zSmKLJqoTKPtj9rx2Yi8jQHplhbUPRMUXASoTeprP5EHMLyznfI6yrO133vFCYADlLeIAEWG3qJMP9yNaNNSRTCmQR2LYHxwJxKTqJ4oyyR7Ds5O%2B9nDqg3VLldEPwFRTvbGHkVRTYRPDRo1clWa7ulJREJb8LKAG0g%2Bizl3Noq2owFHhaFs4cSxuaMCg4FudIqeePQFyWjK%2Bf6eujRnjtyhINC%2FKIOeGnJPVSOnsi%2FNlu%2BS5YiKfSOnhdv1RsGkhOMDyhID7dgDoQyT0rVdSN1p86v3zkfVhOZWOovl10qCm39AV45zuRG6RlwGLuAkK6LtSE8xJ%2BUxT4LFaUpHNLVtH4d%2Fiet2keR7hDbKROCZ8TA49DF76PMOfxxr8GOqUBbcUHnpBKSeCiyKONzHfWl0kRV%2FqPhoJCUe9DwDDtD7q0NsMA06OoA2GZKj5FGTw5vA0s0CGnYVfG6fkRYmJA5pVtmXqMAOzDAY3q%2BtLVUiae3zIWVoZuWjKR2i5qIxrXoyk5qovLE1%2Fa0TSm19fb8OpaSGEiWR6UinWSW0NGxwS10VQ1fTTK2nHCA%2FsUMiQhEPAuWMdUUDfqgRuPaj7Wps8Btu%2Bd&X-Amz-Signature=fd29a950ba4ad3f4895d2b7f6d409723d8227ab5f95bd0f9ef3b3f6805729bee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCIAMFW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9bJvBY0DvQ6Ue%2B7wQxOHhKtTsVguKBxD3NaFEXk80uwIgEQeb6fsYXYsRz5GYK4ms0ZjaJWIpVWXewNEYgm2Fcgsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLNrXPZSz4P6fQty3SrcA6m1WdN2g6guPkcqc23EtWiBeVSRAiWWrfks8lKP8xOY4LH1USQmhJq1rf%2FI%2BgAf%2F86IOHxRymWdXEBALHiPoj5eIIEnLfAp8mPxMHdQ2PKeKuL40lrI1qEQDGEvV9i4U%2F6iW%2B1ZU2nCaS2uuFLKg%2BLaFh9ybxd5KwG7kEKoT5z3fSFbuWuRCkXnjjZqleLzV18CUzIEDJ8sYWapn07fh07pWekJwN6kVF1PxEAZkrVSqfw65DniVqAxgR4nLxh8Qr1988zSmKLJqoTKPtj9rx2Yi8jQHplhbUPRMUXASoTeprP5EHMLyznfI6yrO133vFCYADlLeIAEWG3qJMP9yNaNNSRTCmQR2LYHxwJxKTqJ4oyyR7Ds5O%2B9nDqg3VLldEPwFRTvbGHkVRTYRPDRo1clWa7ulJREJb8LKAG0g%2Bizl3Noq2owFHhaFs4cSxuaMCg4FudIqeePQFyWjK%2Bf6eujRnjtyhINC%2FKIOeGnJPVSOnsi%2FNlu%2BS5YiKfSOnhdv1RsGkhOMDyhID7dgDoQyT0rVdSN1p86v3zkfVhOZWOovl10qCm39AV45zuRG6RlwGLuAkK6LtSE8xJ%2BUxT4LFaUpHNLVtH4d%2Fiet2keR7hDbKROCZ8TA49DF76PMOfxxr8GOqUBbcUHnpBKSeCiyKONzHfWl0kRV%2FqPhoJCUe9DwDDtD7q0NsMA06OoA2GZKj5FGTw5vA0s0CGnYVfG6fkRYmJA5pVtmXqMAOzDAY3q%2BtLVUiae3zIWVoZuWjKR2i5qIxrXoyk5qovLE1%2Fa0TSm19fb8OpaSGEiWR6UinWSW0NGxwS10VQ1fTTK2nHCA%2FsUMiQhEPAuWMdUUDfqgRuPaj7Wps8Btu%2Bd&X-Amz-Signature=54fd79d4ac5ebe91ed96fafbc2de8433afccdbdb34bbd65403911114fd587069&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCIAMFW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9bJvBY0DvQ6Ue%2B7wQxOHhKtTsVguKBxD3NaFEXk80uwIgEQeb6fsYXYsRz5GYK4ms0ZjaJWIpVWXewNEYgm2Fcgsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLNrXPZSz4P6fQty3SrcA6m1WdN2g6guPkcqc23EtWiBeVSRAiWWrfks8lKP8xOY4LH1USQmhJq1rf%2FI%2BgAf%2F86IOHxRymWdXEBALHiPoj5eIIEnLfAp8mPxMHdQ2PKeKuL40lrI1qEQDGEvV9i4U%2F6iW%2B1ZU2nCaS2uuFLKg%2BLaFh9ybxd5KwG7kEKoT5z3fSFbuWuRCkXnjjZqleLzV18CUzIEDJ8sYWapn07fh07pWekJwN6kVF1PxEAZkrVSqfw65DniVqAxgR4nLxh8Qr1988zSmKLJqoTKPtj9rx2Yi8jQHplhbUPRMUXASoTeprP5EHMLyznfI6yrO133vFCYADlLeIAEWG3qJMP9yNaNNSRTCmQR2LYHxwJxKTqJ4oyyR7Ds5O%2B9nDqg3VLldEPwFRTvbGHkVRTYRPDRo1clWa7ulJREJb8LKAG0g%2Bizl3Noq2owFHhaFs4cSxuaMCg4FudIqeePQFyWjK%2Bf6eujRnjtyhINC%2FKIOeGnJPVSOnsi%2FNlu%2BS5YiKfSOnhdv1RsGkhOMDyhID7dgDoQyT0rVdSN1p86v3zkfVhOZWOovl10qCm39AV45zuRG6RlwGLuAkK6LtSE8xJ%2BUxT4LFaUpHNLVtH4d%2Fiet2keR7hDbKROCZ8TA49DF76PMOfxxr8GOqUBbcUHnpBKSeCiyKONzHfWl0kRV%2FqPhoJCUe9DwDDtD7q0NsMA06OoA2GZKj5FGTw5vA0s0CGnYVfG6fkRYmJA5pVtmXqMAOzDAY3q%2BtLVUiae3zIWVoZuWjKR2i5qIxrXoyk5qovLE1%2Fa0TSm19fb8OpaSGEiWR6UinWSW0NGxwS10VQ1fTTK2nHCA%2FsUMiQhEPAuWMdUUDfqgRuPaj7Wps8Btu%2Bd&X-Amz-Signature=7d1b2271a789a6405d1c7c458b905e06ec0c3f99cbfdc37f5f1021113c8110f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCIAMFW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9bJvBY0DvQ6Ue%2B7wQxOHhKtTsVguKBxD3NaFEXk80uwIgEQeb6fsYXYsRz5GYK4ms0ZjaJWIpVWXewNEYgm2Fcgsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLNrXPZSz4P6fQty3SrcA6m1WdN2g6guPkcqc23EtWiBeVSRAiWWrfks8lKP8xOY4LH1USQmhJq1rf%2FI%2BgAf%2F86IOHxRymWdXEBALHiPoj5eIIEnLfAp8mPxMHdQ2PKeKuL40lrI1qEQDGEvV9i4U%2F6iW%2B1ZU2nCaS2uuFLKg%2BLaFh9ybxd5KwG7kEKoT5z3fSFbuWuRCkXnjjZqleLzV18CUzIEDJ8sYWapn07fh07pWekJwN6kVF1PxEAZkrVSqfw65DniVqAxgR4nLxh8Qr1988zSmKLJqoTKPtj9rx2Yi8jQHplhbUPRMUXASoTeprP5EHMLyznfI6yrO133vFCYADlLeIAEWG3qJMP9yNaNNSRTCmQR2LYHxwJxKTqJ4oyyR7Ds5O%2B9nDqg3VLldEPwFRTvbGHkVRTYRPDRo1clWa7ulJREJb8LKAG0g%2Bizl3Noq2owFHhaFs4cSxuaMCg4FudIqeePQFyWjK%2Bf6eujRnjtyhINC%2FKIOeGnJPVSOnsi%2FNlu%2BS5YiKfSOnhdv1RsGkhOMDyhID7dgDoQyT0rVdSN1p86v3zkfVhOZWOovl10qCm39AV45zuRG6RlwGLuAkK6LtSE8xJ%2BUxT4LFaUpHNLVtH4d%2Fiet2keR7hDbKROCZ8TA49DF76PMOfxxr8GOqUBbcUHnpBKSeCiyKONzHfWl0kRV%2FqPhoJCUe9DwDDtD7q0NsMA06OoA2GZKj5FGTw5vA0s0CGnYVfG6fkRYmJA5pVtmXqMAOzDAY3q%2BtLVUiae3zIWVoZuWjKR2i5qIxrXoyk5qovLE1%2Fa0TSm19fb8OpaSGEiWR6UinWSW0NGxwS10VQ1fTTK2nHCA%2FsUMiQhEPAuWMdUUDfqgRuPaj7Wps8Btu%2Bd&X-Amz-Signature=6cf189d3a551e7b411c84d1d6b010a61ccda2c56302889432a6ee81c78b64a01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCIAMFW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9bJvBY0DvQ6Ue%2B7wQxOHhKtTsVguKBxD3NaFEXk80uwIgEQeb6fsYXYsRz5GYK4ms0ZjaJWIpVWXewNEYgm2Fcgsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLNrXPZSz4P6fQty3SrcA6m1WdN2g6guPkcqc23EtWiBeVSRAiWWrfks8lKP8xOY4LH1USQmhJq1rf%2FI%2BgAf%2F86IOHxRymWdXEBALHiPoj5eIIEnLfAp8mPxMHdQ2PKeKuL40lrI1qEQDGEvV9i4U%2F6iW%2B1ZU2nCaS2uuFLKg%2BLaFh9ybxd5KwG7kEKoT5z3fSFbuWuRCkXnjjZqleLzV18CUzIEDJ8sYWapn07fh07pWekJwN6kVF1PxEAZkrVSqfw65DniVqAxgR4nLxh8Qr1988zSmKLJqoTKPtj9rx2Yi8jQHplhbUPRMUXASoTeprP5EHMLyznfI6yrO133vFCYADlLeIAEWG3qJMP9yNaNNSRTCmQR2LYHxwJxKTqJ4oyyR7Ds5O%2B9nDqg3VLldEPwFRTvbGHkVRTYRPDRo1clWa7ulJREJb8LKAG0g%2Bizl3Noq2owFHhaFs4cSxuaMCg4FudIqeePQFyWjK%2Bf6eujRnjtyhINC%2FKIOeGnJPVSOnsi%2FNlu%2BS5YiKfSOnhdv1RsGkhOMDyhID7dgDoQyT0rVdSN1p86v3zkfVhOZWOovl10qCm39AV45zuRG6RlwGLuAkK6LtSE8xJ%2BUxT4LFaUpHNLVtH4d%2Fiet2keR7hDbKROCZ8TA49DF76PMOfxxr8GOqUBbcUHnpBKSeCiyKONzHfWl0kRV%2FqPhoJCUe9DwDDtD7q0NsMA06OoA2GZKj5FGTw5vA0s0CGnYVfG6fkRYmJA5pVtmXqMAOzDAY3q%2BtLVUiae3zIWVoZuWjKR2i5qIxrXoyk5qovLE1%2Fa0TSm19fb8OpaSGEiWR6UinWSW0NGxwS10VQ1fTTK2nHCA%2FsUMiQhEPAuWMdUUDfqgRuPaj7Wps8Btu%2Bd&X-Amz-Signature=ced7489e8981199a4eb82b31656607c58e74d3436fac280e5c3d4828c60c0c04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCIAMFW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9bJvBY0DvQ6Ue%2B7wQxOHhKtTsVguKBxD3NaFEXk80uwIgEQeb6fsYXYsRz5GYK4ms0ZjaJWIpVWXewNEYgm2Fcgsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLNrXPZSz4P6fQty3SrcA6m1WdN2g6guPkcqc23EtWiBeVSRAiWWrfks8lKP8xOY4LH1USQmhJq1rf%2FI%2BgAf%2F86IOHxRymWdXEBALHiPoj5eIIEnLfAp8mPxMHdQ2PKeKuL40lrI1qEQDGEvV9i4U%2F6iW%2B1ZU2nCaS2uuFLKg%2BLaFh9ybxd5KwG7kEKoT5z3fSFbuWuRCkXnjjZqleLzV18CUzIEDJ8sYWapn07fh07pWekJwN6kVF1PxEAZkrVSqfw65DniVqAxgR4nLxh8Qr1988zSmKLJqoTKPtj9rx2Yi8jQHplhbUPRMUXASoTeprP5EHMLyznfI6yrO133vFCYADlLeIAEWG3qJMP9yNaNNSRTCmQR2LYHxwJxKTqJ4oyyR7Ds5O%2B9nDqg3VLldEPwFRTvbGHkVRTYRPDRo1clWa7ulJREJb8LKAG0g%2Bizl3Noq2owFHhaFs4cSxuaMCg4FudIqeePQFyWjK%2Bf6eujRnjtyhINC%2FKIOeGnJPVSOnsi%2FNlu%2BS5YiKfSOnhdv1RsGkhOMDyhID7dgDoQyT0rVdSN1p86v3zkfVhOZWOovl10qCm39AV45zuRG6RlwGLuAkK6LtSE8xJ%2BUxT4LFaUpHNLVtH4d%2Fiet2keR7hDbKROCZ8TA49DF76PMOfxxr8GOqUBbcUHnpBKSeCiyKONzHfWl0kRV%2FqPhoJCUe9DwDDtD7q0NsMA06OoA2GZKj5FGTw5vA0s0CGnYVfG6fkRYmJA5pVtmXqMAOzDAY3q%2BtLVUiae3zIWVoZuWjKR2i5qIxrXoyk5qovLE1%2Fa0TSm19fb8OpaSGEiWR6UinWSW0NGxwS10VQ1fTTK2nHCA%2FsUMiQhEPAuWMdUUDfqgRuPaj7Wps8Btu%2Bd&X-Amz-Signature=8eb829468721870fd9fa7607cc570d9f8b516f395cbefc5df0efa30a4798924d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

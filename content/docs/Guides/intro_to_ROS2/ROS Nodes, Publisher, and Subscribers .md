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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4N47LYV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD4HgRpt3n9w6%2BnvCCpIsdlPf0ugo64g0LkqmVpmzyTYgIgG1PeQ7kJ009hMQTEukKnrA5SYGNlzkpVfwzyIzeCAzYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAG3IsLEV2BX0SciRyrcA%2BvQqRQNODXxtg7fzm4PS4HByjKE3jahD54vX2GvVJR43XxDXJIbiyYLWVk7AUrJ%2FNKNHcwbcZzJiVB3IEmkg8EJ%2FtLziSNtN%2Fi%2FLUQc%2FhMW0Fjd%2FwyWgkA6scTjRULEoKYriJbderH4trbc%2BUPnhNvDlI2ZJn3m4DZTkma8Dji5SXhB7mNHstJqHy2pGPUUsobYHc%2BdXKFK7D8vhzyr7e5MIjNDHQ4kWTyuOqe%2FpXL%2Bbre99B2kxX1xZ6c7hPHvRq%2Fpe%2F8sYRn9nebgXrDxXx4utNNEPS0Uvtf%2F007RfYltA11TVvX6MfKhH5eSRLRRuweQWo%2FnuMs4OkSrGT2aRYMKb7xvYnDj1l3%2F2gxEv9%2F1fOmPhL9kS68AKGcZA0jUeQFKEn8HgqYh7TW%2BjWLOkRBP9aK9NBS90znacS%2BMyp1lnVG1qgoV3MHdVSqwl%2BbawMomYNB28moGTK8XrE2bQirtIXA5CgIJExl4QHy0IMU5A6d1p7YCR94T5epHKjACYASnKRky2zz%2F9qnOxQleqwER9WNQ5tAXZBLoLrY%2BxYviYuaQ%2BPrSPbXujKJeIjElILcVS6mjZgEiCc9lqf7sebX8U%2BC%2FdmSVKA5DfPZnd40sJMpF39cCXgNfuYmzMPzdgcIGOqUBoKg%2F03wS46xLTuyU6elX5TWPlEnFNr3s7f7cTxjDepi2HaNvlwrvUFrhyLFX9YqrZH9IM%2BU4zcnUNsz8YShPaheWoA4Tt6cwn1WvCzT0ucInQk2tc2jR8tf%2BcBQCtoxO6sjguxV09yaaVDB6Q51Rl%2FuHkCo0LTR2ogNgk%2Bpss6et6qsRsmi0K71u7I4ko2rS0HQINTQIV08JK5YOHKjtzklrpcv0&X-Amz-Signature=d5defddc0e1d2bca8ac6d7c9b0994bc79fbca73d8b98ab6d7a7359e65721bf85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4N47LYV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD4HgRpt3n9w6%2BnvCCpIsdlPf0ugo64g0LkqmVpmzyTYgIgG1PeQ7kJ009hMQTEukKnrA5SYGNlzkpVfwzyIzeCAzYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAG3IsLEV2BX0SciRyrcA%2BvQqRQNODXxtg7fzm4PS4HByjKE3jahD54vX2GvVJR43XxDXJIbiyYLWVk7AUrJ%2FNKNHcwbcZzJiVB3IEmkg8EJ%2FtLziSNtN%2Fi%2FLUQc%2FhMW0Fjd%2FwyWgkA6scTjRULEoKYriJbderH4trbc%2BUPnhNvDlI2ZJn3m4DZTkma8Dji5SXhB7mNHstJqHy2pGPUUsobYHc%2BdXKFK7D8vhzyr7e5MIjNDHQ4kWTyuOqe%2FpXL%2Bbre99B2kxX1xZ6c7hPHvRq%2Fpe%2F8sYRn9nebgXrDxXx4utNNEPS0Uvtf%2F007RfYltA11TVvX6MfKhH5eSRLRRuweQWo%2FnuMs4OkSrGT2aRYMKb7xvYnDj1l3%2F2gxEv9%2F1fOmPhL9kS68AKGcZA0jUeQFKEn8HgqYh7TW%2BjWLOkRBP9aK9NBS90znacS%2BMyp1lnVG1qgoV3MHdVSqwl%2BbawMomYNB28moGTK8XrE2bQirtIXA5CgIJExl4QHy0IMU5A6d1p7YCR94T5epHKjACYASnKRky2zz%2F9qnOxQleqwER9WNQ5tAXZBLoLrY%2BxYviYuaQ%2BPrSPbXujKJeIjElILcVS6mjZgEiCc9lqf7sebX8U%2BC%2FdmSVKA5DfPZnd40sJMpF39cCXgNfuYmzMPzdgcIGOqUBoKg%2F03wS46xLTuyU6elX5TWPlEnFNr3s7f7cTxjDepi2HaNvlwrvUFrhyLFX9YqrZH9IM%2BU4zcnUNsz8YShPaheWoA4Tt6cwn1WvCzT0ucInQk2tc2jR8tf%2BcBQCtoxO6sjguxV09yaaVDB6Q51Rl%2FuHkCo0LTR2ogNgk%2Bpss6et6qsRsmi0K71u7I4ko2rS0HQINTQIV08JK5YOHKjtzklrpcv0&X-Amz-Signature=535324c6bf5db02806a23a6a46b9b3e68fb052b1817edcae9f712b45e1dabf4e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4N47LYV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD4HgRpt3n9w6%2BnvCCpIsdlPf0ugo64g0LkqmVpmzyTYgIgG1PeQ7kJ009hMQTEukKnrA5SYGNlzkpVfwzyIzeCAzYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAG3IsLEV2BX0SciRyrcA%2BvQqRQNODXxtg7fzm4PS4HByjKE3jahD54vX2GvVJR43XxDXJIbiyYLWVk7AUrJ%2FNKNHcwbcZzJiVB3IEmkg8EJ%2FtLziSNtN%2Fi%2FLUQc%2FhMW0Fjd%2FwyWgkA6scTjRULEoKYriJbderH4trbc%2BUPnhNvDlI2ZJn3m4DZTkma8Dji5SXhB7mNHstJqHy2pGPUUsobYHc%2BdXKFK7D8vhzyr7e5MIjNDHQ4kWTyuOqe%2FpXL%2Bbre99B2kxX1xZ6c7hPHvRq%2Fpe%2F8sYRn9nebgXrDxXx4utNNEPS0Uvtf%2F007RfYltA11TVvX6MfKhH5eSRLRRuweQWo%2FnuMs4OkSrGT2aRYMKb7xvYnDj1l3%2F2gxEv9%2F1fOmPhL9kS68AKGcZA0jUeQFKEn8HgqYh7TW%2BjWLOkRBP9aK9NBS90znacS%2BMyp1lnVG1qgoV3MHdVSqwl%2BbawMomYNB28moGTK8XrE2bQirtIXA5CgIJExl4QHy0IMU5A6d1p7YCR94T5epHKjACYASnKRky2zz%2F9qnOxQleqwER9WNQ5tAXZBLoLrY%2BxYviYuaQ%2BPrSPbXujKJeIjElILcVS6mjZgEiCc9lqf7sebX8U%2BC%2FdmSVKA5DfPZnd40sJMpF39cCXgNfuYmzMPzdgcIGOqUBoKg%2F03wS46xLTuyU6elX5TWPlEnFNr3s7f7cTxjDepi2HaNvlwrvUFrhyLFX9YqrZH9IM%2BU4zcnUNsz8YShPaheWoA4Tt6cwn1WvCzT0ucInQk2tc2jR8tf%2BcBQCtoxO6sjguxV09yaaVDB6Q51Rl%2FuHkCo0LTR2ogNgk%2Bpss6et6qsRsmi0K71u7I4ko2rS0HQINTQIV08JK5YOHKjtzklrpcv0&X-Amz-Signature=5e08fa8a8f32924d691fcfb1e5dbf1cebebcca5a659bbd49340decb6d746dcf6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4N47LYV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD4HgRpt3n9w6%2BnvCCpIsdlPf0ugo64g0LkqmVpmzyTYgIgG1PeQ7kJ009hMQTEukKnrA5SYGNlzkpVfwzyIzeCAzYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAG3IsLEV2BX0SciRyrcA%2BvQqRQNODXxtg7fzm4PS4HByjKE3jahD54vX2GvVJR43XxDXJIbiyYLWVk7AUrJ%2FNKNHcwbcZzJiVB3IEmkg8EJ%2FtLziSNtN%2Fi%2FLUQc%2FhMW0Fjd%2FwyWgkA6scTjRULEoKYriJbderH4trbc%2BUPnhNvDlI2ZJn3m4DZTkma8Dji5SXhB7mNHstJqHy2pGPUUsobYHc%2BdXKFK7D8vhzyr7e5MIjNDHQ4kWTyuOqe%2FpXL%2Bbre99B2kxX1xZ6c7hPHvRq%2Fpe%2F8sYRn9nebgXrDxXx4utNNEPS0Uvtf%2F007RfYltA11TVvX6MfKhH5eSRLRRuweQWo%2FnuMs4OkSrGT2aRYMKb7xvYnDj1l3%2F2gxEv9%2F1fOmPhL9kS68AKGcZA0jUeQFKEn8HgqYh7TW%2BjWLOkRBP9aK9NBS90znacS%2BMyp1lnVG1qgoV3MHdVSqwl%2BbawMomYNB28moGTK8XrE2bQirtIXA5CgIJExl4QHy0IMU5A6d1p7YCR94T5epHKjACYASnKRky2zz%2F9qnOxQleqwER9WNQ5tAXZBLoLrY%2BxYviYuaQ%2BPrSPbXujKJeIjElILcVS6mjZgEiCc9lqf7sebX8U%2BC%2FdmSVKA5DfPZnd40sJMpF39cCXgNfuYmzMPzdgcIGOqUBoKg%2F03wS46xLTuyU6elX5TWPlEnFNr3s7f7cTxjDepi2HaNvlwrvUFrhyLFX9YqrZH9IM%2BU4zcnUNsz8YShPaheWoA4Tt6cwn1WvCzT0ucInQk2tc2jR8tf%2BcBQCtoxO6sjguxV09yaaVDB6Q51Rl%2FuHkCo0LTR2ogNgk%2Bpss6et6qsRsmi0K71u7I4ko2rS0HQINTQIV08JK5YOHKjtzklrpcv0&X-Amz-Signature=57ab51112ad02ab91e757e70e5bc40cd87143ad91855c885dddc0b42f0126e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4N47LYV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD4HgRpt3n9w6%2BnvCCpIsdlPf0ugo64g0LkqmVpmzyTYgIgG1PeQ7kJ009hMQTEukKnrA5SYGNlzkpVfwzyIzeCAzYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAG3IsLEV2BX0SciRyrcA%2BvQqRQNODXxtg7fzm4PS4HByjKE3jahD54vX2GvVJR43XxDXJIbiyYLWVk7AUrJ%2FNKNHcwbcZzJiVB3IEmkg8EJ%2FtLziSNtN%2Fi%2FLUQc%2FhMW0Fjd%2FwyWgkA6scTjRULEoKYriJbderH4trbc%2BUPnhNvDlI2ZJn3m4DZTkma8Dji5SXhB7mNHstJqHy2pGPUUsobYHc%2BdXKFK7D8vhzyr7e5MIjNDHQ4kWTyuOqe%2FpXL%2Bbre99B2kxX1xZ6c7hPHvRq%2Fpe%2F8sYRn9nebgXrDxXx4utNNEPS0Uvtf%2F007RfYltA11TVvX6MfKhH5eSRLRRuweQWo%2FnuMs4OkSrGT2aRYMKb7xvYnDj1l3%2F2gxEv9%2F1fOmPhL9kS68AKGcZA0jUeQFKEn8HgqYh7TW%2BjWLOkRBP9aK9NBS90znacS%2BMyp1lnVG1qgoV3MHdVSqwl%2BbawMomYNB28moGTK8XrE2bQirtIXA5CgIJExl4QHy0IMU5A6d1p7YCR94T5epHKjACYASnKRky2zz%2F9qnOxQleqwER9WNQ5tAXZBLoLrY%2BxYviYuaQ%2BPrSPbXujKJeIjElILcVS6mjZgEiCc9lqf7sebX8U%2BC%2FdmSVKA5DfPZnd40sJMpF39cCXgNfuYmzMPzdgcIGOqUBoKg%2F03wS46xLTuyU6elX5TWPlEnFNr3s7f7cTxjDepi2HaNvlwrvUFrhyLFX9YqrZH9IM%2BU4zcnUNsz8YShPaheWoA4Tt6cwn1WvCzT0ucInQk2tc2jR8tf%2BcBQCtoxO6sjguxV09yaaVDB6Q51Rl%2FuHkCo0LTR2ogNgk%2Bpss6et6qsRsmi0K71u7I4ko2rS0HQINTQIV08JK5YOHKjtzklrpcv0&X-Amz-Signature=a263eb5a40ac51ccfa9bf5e57ecf87dad5efcef407c2ced4a687153207507673&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4N47LYV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD4HgRpt3n9w6%2BnvCCpIsdlPf0ugo64g0LkqmVpmzyTYgIgG1PeQ7kJ009hMQTEukKnrA5SYGNlzkpVfwzyIzeCAzYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAG3IsLEV2BX0SciRyrcA%2BvQqRQNODXxtg7fzm4PS4HByjKE3jahD54vX2GvVJR43XxDXJIbiyYLWVk7AUrJ%2FNKNHcwbcZzJiVB3IEmkg8EJ%2FtLziSNtN%2Fi%2FLUQc%2FhMW0Fjd%2FwyWgkA6scTjRULEoKYriJbderH4trbc%2BUPnhNvDlI2ZJn3m4DZTkma8Dji5SXhB7mNHstJqHy2pGPUUsobYHc%2BdXKFK7D8vhzyr7e5MIjNDHQ4kWTyuOqe%2FpXL%2Bbre99B2kxX1xZ6c7hPHvRq%2Fpe%2F8sYRn9nebgXrDxXx4utNNEPS0Uvtf%2F007RfYltA11TVvX6MfKhH5eSRLRRuweQWo%2FnuMs4OkSrGT2aRYMKb7xvYnDj1l3%2F2gxEv9%2F1fOmPhL9kS68AKGcZA0jUeQFKEn8HgqYh7TW%2BjWLOkRBP9aK9NBS90znacS%2BMyp1lnVG1qgoV3MHdVSqwl%2BbawMomYNB28moGTK8XrE2bQirtIXA5CgIJExl4QHy0IMU5A6d1p7YCR94T5epHKjACYASnKRky2zz%2F9qnOxQleqwER9WNQ5tAXZBLoLrY%2BxYviYuaQ%2BPrSPbXujKJeIjElILcVS6mjZgEiCc9lqf7sebX8U%2BC%2FdmSVKA5DfPZnd40sJMpF39cCXgNfuYmzMPzdgcIGOqUBoKg%2F03wS46xLTuyU6elX5TWPlEnFNr3s7f7cTxjDepi2HaNvlwrvUFrhyLFX9YqrZH9IM%2BU4zcnUNsz8YShPaheWoA4Tt6cwn1WvCzT0ucInQk2tc2jR8tf%2BcBQCtoxO6sjguxV09yaaVDB6Q51Rl%2FuHkCo0LTR2ogNgk%2Bpss6et6qsRsmi0K71u7I4ko2rS0HQINTQIV08JK5YOHKjtzklrpcv0&X-Amz-Signature=84cef5c04d8fe4b4a32aed0dea12c7ec7d361f2e70a7e87a0636bc2543c0c90e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4N47LYV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD4HgRpt3n9w6%2BnvCCpIsdlPf0ugo64g0LkqmVpmzyTYgIgG1PeQ7kJ009hMQTEukKnrA5SYGNlzkpVfwzyIzeCAzYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAG3IsLEV2BX0SciRyrcA%2BvQqRQNODXxtg7fzm4PS4HByjKE3jahD54vX2GvVJR43XxDXJIbiyYLWVk7AUrJ%2FNKNHcwbcZzJiVB3IEmkg8EJ%2FtLziSNtN%2Fi%2FLUQc%2FhMW0Fjd%2FwyWgkA6scTjRULEoKYriJbderH4trbc%2BUPnhNvDlI2ZJn3m4DZTkma8Dji5SXhB7mNHstJqHy2pGPUUsobYHc%2BdXKFK7D8vhzyr7e5MIjNDHQ4kWTyuOqe%2FpXL%2Bbre99B2kxX1xZ6c7hPHvRq%2Fpe%2F8sYRn9nebgXrDxXx4utNNEPS0Uvtf%2F007RfYltA11TVvX6MfKhH5eSRLRRuweQWo%2FnuMs4OkSrGT2aRYMKb7xvYnDj1l3%2F2gxEv9%2F1fOmPhL9kS68AKGcZA0jUeQFKEn8HgqYh7TW%2BjWLOkRBP9aK9NBS90znacS%2BMyp1lnVG1qgoV3MHdVSqwl%2BbawMomYNB28moGTK8XrE2bQirtIXA5CgIJExl4QHy0IMU5A6d1p7YCR94T5epHKjACYASnKRky2zz%2F9qnOxQleqwER9WNQ5tAXZBLoLrY%2BxYviYuaQ%2BPrSPbXujKJeIjElILcVS6mjZgEiCc9lqf7sebX8U%2BC%2FdmSVKA5DfPZnd40sJMpF39cCXgNfuYmzMPzdgcIGOqUBoKg%2F03wS46xLTuyU6elX5TWPlEnFNr3s7f7cTxjDepi2HaNvlwrvUFrhyLFX9YqrZH9IM%2BU4zcnUNsz8YShPaheWoA4Tt6cwn1WvCzT0ucInQk2tc2jR8tf%2BcBQCtoxO6sjguxV09yaaVDB6Q51Rl%2FuHkCo0LTR2ogNgk%2Bpss6et6qsRsmi0K71u7I4ko2rS0HQINTQIV08JK5YOHKjtzklrpcv0&X-Amz-Signature=9a43a597ff93a3e49e82f0a03d28b5dc79c8b8790aa625af0226575ca511cddc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4N47LYV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD4HgRpt3n9w6%2BnvCCpIsdlPf0ugo64g0LkqmVpmzyTYgIgG1PeQ7kJ009hMQTEukKnrA5SYGNlzkpVfwzyIzeCAzYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAG3IsLEV2BX0SciRyrcA%2BvQqRQNODXxtg7fzm4PS4HByjKE3jahD54vX2GvVJR43XxDXJIbiyYLWVk7AUrJ%2FNKNHcwbcZzJiVB3IEmkg8EJ%2FtLziSNtN%2Fi%2FLUQc%2FhMW0Fjd%2FwyWgkA6scTjRULEoKYriJbderH4trbc%2BUPnhNvDlI2ZJn3m4DZTkma8Dji5SXhB7mNHstJqHy2pGPUUsobYHc%2BdXKFK7D8vhzyr7e5MIjNDHQ4kWTyuOqe%2FpXL%2Bbre99B2kxX1xZ6c7hPHvRq%2Fpe%2F8sYRn9nebgXrDxXx4utNNEPS0Uvtf%2F007RfYltA11TVvX6MfKhH5eSRLRRuweQWo%2FnuMs4OkSrGT2aRYMKb7xvYnDj1l3%2F2gxEv9%2F1fOmPhL9kS68AKGcZA0jUeQFKEn8HgqYh7TW%2BjWLOkRBP9aK9NBS90znacS%2BMyp1lnVG1qgoV3MHdVSqwl%2BbawMomYNB28moGTK8XrE2bQirtIXA5CgIJExl4QHy0IMU5A6d1p7YCR94T5epHKjACYASnKRky2zz%2F9qnOxQleqwER9WNQ5tAXZBLoLrY%2BxYviYuaQ%2BPrSPbXujKJeIjElILcVS6mjZgEiCc9lqf7sebX8U%2BC%2FdmSVKA5DfPZnd40sJMpF39cCXgNfuYmzMPzdgcIGOqUBoKg%2F03wS46xLTuyU6elX5TWPlEnFNr3s7f7cTxjDepi2HaNvlwrvUFrhyLFX9YqrZH9IM%2BU4zcnUNsz8YShPaheWoA4Tt6cwn1WvCzT0ucInQk2tc2jR8tf%2BcBQCtoxO6sjguxV09yaaVDB6Q51Rl%2FuHkCo0LTR2ogNgk%2Bpss6et6qsRsmi0K71u7I4ko2rS0HQINTQIV08JK5YOHKjtzklrpcv0&X-Amz-Signature=69b87a1392479d65f415a6d723d19e45c7c302c856bb5186c7efea516f243872&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

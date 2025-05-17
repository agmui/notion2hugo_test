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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMA4XTW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgjJi%2Fw%2BA4FTjdddVmn1LSPT5gUHDDZVjQfXipl0daJAiEA8hpgNQRGvI4uOFLKPSvy597Q%2Bn8qFFMCPSTlVLgYzfYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDB87kmkGutonpipnMircA7oTWD5iL3QgomD5E%2FcppnrrgpETG%2BtVnJefoeDeA7HiJm6WNs0QETGXjpxXcDhBe0LR0Q17v8x9gRRk3D7JAjKbapcPQr2VM1MnZxECT060s9xEc8Yn510%2FAA0X29tchF%2BNkW4qIN4iTRC%2BbhiyJRFYSQu1fRvOlbeHKuJFLIW7RdRGQlMqm29hZK79AiEoqetaKIgeAY0t6Gqv7jpS779obIH9dO1niCnbdnVsQzdDv%2FpV7dIkh9w5r9g0gBue2z88t1e%2F2xvpADcCKMaAYnZUA3KyCaEtUY%2FdZkBK2cOV6VSxB7kD5ijdb1bgYEIqnfSAmGEvoo6lV3ioyqVchJQW2HbAC4fRrl7LybYCVnqa%2FIShD6Qgbgjl%2F7l1xgJJhE0weoKpO%2BEAplR5c92STywDChyEz2dAZ0aiZ4GtUKcY0oF8E0jvSfGFYiAr4yPQC4zxujeyHmiVS%2BYlQeBQT19TDhkl8az63gP1pcx5NS3XKGSR7yWkzOliIJ7lU80Jrny%2FYJzE%2FBbM%2FG%2B%2BC%2BZvJp1%2B6GsLZgxx%2Fk09K8Y3OjHng0ACBFUB2arfSIhesT%2FEBOo9VmuMKEGkcCmSJxrqNxREMfQF6GpAca9CrDnh1cZnMmeGF%2Bt8Z4lpPQ3%2BMLz3n8EGOqUB82J9XggYRCB9WnMbxco0GIhSaXv3iO66A7hVpzrjp23dTHIYo29AWpKgQ9ViPM03XKslQ7wFQv2HyeTeCCfA5cfZ05t4bQROpYRAdrR%2FmHvgoMv5QWj0xnxbb7R3QHpSM4qf3cTDqq9U6Unr3EJjJwzzXeNL1FiE1OcMjpRW%2FakMYoO9c%2BftroXCy6VmqOOp4KkfR1UWRXt9GfFjo58iPNZoR%2BBt&X-Amz-Signature=c1ec3ad3fecac00cb2f43458fa1279b9c2100ddf9f622c347c299b86b69a1ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMA4XTW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgjJi%2Fw%2BA4FTjdddVmn1LSPT5gUHDDZVjQfXipl0daJAiEA8hpgNQRGvI4uOFLKPSvy597Q%2Bn8qFFMCPSTlVLgYzfYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDB87kmkGutonpipnMircA7oTWD5iL3QgomD5E%2FcppnrrgpETG%2BtVnJefoeDeA7HiJm6WNs0QETGXjpxXcDhBe0LR0Q17v8x9gRRk3D7JAjKbapcPQr2VM1MnZxECT060s9xEc8Yn510%2FAA0X29tchF%2BNkW4qIN4iTRC%2BbhiyJRFYSQu1fRvOlbeHKuJFLIW7RdRGQlMqm29hZK79AiEoqetaKIgeAY0t6Gqv7jpS779obIH9dO1niCnbdnVsQzdDv%2FpV7dIkh9w5r9g0gBue2z88t1e%2F2xvpADcCKMaAYnZUA3KyCaEtUY%2FdZkBK2cOV6VSxB7kD5ijdb1bgYEIqnfSAmGEvoo6lV3ioyqVchJQW2HbAC4fRrl7LybYCVnqa%2FIShD6Qgbgjl%2F7l1xgJJhE0weoKpO%2BEAplR5c92STywDChyEz2dAZ0aiZ4GtUKcY0oF8E0jvSfGFYiAr4yPQC4zxujeyHmiVS%2BYlQeBQT19TDhkl8az63gP1pcx5NS3XKGSR7yWkzOliIJ7lU80Jrny%2FYJzE%2FBbM%2FG%2B%2BC%2BZvJp1%2B6GsLZgxx%2Fk09K8Y3OjHng0ACBFUB2arfSIhesT%2FEBOo9VmuMKEGkcCmSJxrqNxREMfQF6GpAca9CrDnh1cZnMmeGF%2Bt8Z4lpPQ3%2BMLz3n8EGOqUB82J9XggYRCB9WnMbxco0GIhSaXv3iO66A7hVpzrjp23dTHIYo29AWpKgQ9ViPM03XKslQ7wFQv2HyeTeCCfA5cfZ05t4bQROpYRAdrR%2FmHvgoMv5QWj0xnxbb7R3QHpSM4qf3cTDqq9U6Unr3EJjJwzzXeNL1FiE1OcMjpRW%2FakMYoO9c%2BftroXCy6VmqOOp4KkfR1UWRXt9GfFjo58iPNZoR%2BBt&X-Amz-Signature=e7986a858b7d5d9e460f5ffa7f267006597cfabc1d95e28c17ac7d2f040db569&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMA4XTW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgjJi%2Fw%2BA4FTjdddVmn1LSPT5gUHDDZVjQfXipl0daJAiEA8hpgNQRGvI4uOFLKPSvy597Q%2Bn8qFFMCPSTlVLgYzfYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDB87kmkGutonpipnMircA7oTWD5iL3QgomD5E%2FcppnrrgpETG%2BtVnJefoeDeA7HiJm6WNs0QETGXjpxXcDhBe0LR0Q17v8x9gRRk3D7JAjKbapcPQr2VM1MnZxECT060s9xEc8Yn510%2FAA0X29tchF%2BNkW4qIN4iTRC%2BbhiyJRFYSQu1fRvOlbeHKuJFLIW7RdRGQlMqm29hZK79AiEoqetaKIgeAY0t6Gqv7jpS779obIH9dO1niCnbdnVsQzdDv%2FpV7dIkh9w5r9g0gBue2z88t1e%2F2xvpADcCKMaAYnZUA3KyCaEtUY%2FdZkBK2cOV6VSxB7kD5ijdb1bgYEIqnfSAmGEvoo6lV3ioyqVchJQW2HbAC4fRrl7LybYCVnqa%2FIShD6Qgbgjl%2F7l1xgJJhE0weoKpO%2BEAplR5c92STywDChyEz2dAZ0aiZ4GtUKcY0oF8E0jvSfGFYiAr4yPQC4zxujeyHmiVS%2BYlQeBQT19TDhkl8az63gP1pcx5NS3XKGSR7yWkzOliIJ7lU80Jrny%2FYJzE%2FBbM%2FG%2B%2BC%2BZvJp1%2B6GsLZgxx%2Fk09K8Y3OjHng0ACBFUB2arfSIhesT%2FEBOo9VmuMKEGkcCmSJxrqNxREMfQF6GpAca9CrDnh1cZnMmeGF%2Bt8Z4lpPQ3%2BMLz3n8EGOqUB82J9XggYRCB9WnMbxco0GIhSaXv3iO66A7hVpzrjp23dTHIYo29AWpKgQ9ViPM03XKslQ7wFQv2HyeTeCCfA5cfZ05t4bQROpYRAdrR%2FmHvgoMv5QWj0xnxbb7R3QHpSM4qf3cTDqq9U6Unr3EJjJwzzXeNL1FiE1OcMjpRW%2FakMYoO9c%2BftroXCy6VmqOOp4KkfR1UWRXt9GfFjo58iPNZoR%2BBt&X-Amz-Signature=e45a0391ad2ddd06aae4ff7d42cf38f6b4b7333d93c1098355452b0b8c41eff6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMA4XTW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgjJi%2Fw%2BA4FTjdddVmn1LSPT5gUHDDZVjQfXipl0daJAiEA8hpgNQRGvI4uOFLKPSvy597Q%2Bn8qFFMCPSTlVLgYzfYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDB87kmkGutonpipnMircA7oTWD5iL3QgomD5E%2FcppnrrgpETG%2BtVnJefoeDeA7HiJm6WNs0QETGXjpxXcDhBe0LR0Q17v8x9gRRk3D7JAjKbapcPQr2VM1MnZxECT060s9xEc8Yn510%2FAA0X29tchF%2BNkW4qIN4iTRC%2BbhiyJRFYSQu1fRvOlbeHKuJFLIW7RdRGQlMqm29hZK79AiEoqetaKIgeAY0t6Gqv7jpS779obIH9dO1niCnbdnVsQzdDv%2FpV7dIkh9w5r9g0gBue2z88t1e%2F2xvpADcCKMaAYnZUA3KyCaEtUY%2FdZkBK2cOV6VSxB7kD5ijdb1bgYEIqnfSAmGEvoo6lV3ioyqVchJQW2HbAC4fRrl7LybYCVnqa%2FIShD6Qgbgjl%2F7l1xgJJhE0weoKpO%2BEAplR5c92STywDChyEz2dAZ0aiZ4GtUKcY0oF8E0jvSfGFYiAr4yPQC4zxujeyHmiVS%2BYlQeBQT19TDhkl8az63gP1pcx5NS3XKGSR7yWkzOliIJ7lU80Jrny%2FYJzE%2FBbM%2FG%2B%2BC%2BZvJp1%2B6GsLZgxx%2Fk09K8Y3OjHng0ACBFUB2arfSIhesT%2FEBOo9VmuMKEGkcCmSJxrqNxREMfQF6GpAca9CrDnh1cZnMmeGF%2Bt8Z4lpPQ3%2BMLz3n8EGOqUB82J9XggYRCB9WnMbxco0GIhSaXv3iO66A7hVpzrjp23dTHIYo29AWpKgQ9ViPM03XKslQ7wFQv2HyeTeCCfA5cfZ05t4bQROpYRAdrR%2FmHvgoMv5QWj0xnxbb7R3QHpSM4qf3cTDqq9U6Unr3EJjJwzzXeNL1FiE1OcMjpRW%2FakMYoO9c%2BftroXCy6VmqOOp4KkfR1UWRXt9GfFjo58iPNZoR%2BBt&X-Amz-Signature=98b3f315c4ca6793613db405a116efc221965a793de4a605706f75eb3571f5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMA4XTW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgjJi%2Fw%2BA4FTjdddVmn1LSPT5gUHDDZVjQfXipl0daJAiEA8hpgNQRGvI4uOFLKPSvy597Q%2Bn8qFFMCPSTlVLgYzfYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDB87kmkGutonpipnMircA7oTWD5iL3QgomD5E%2FcppnrrgpETG%2BtVnJefoeDeA7HiJm6WNs0QETGXjpxXcDhBe0LR0Q17v8x9gRRk3D7JAjKbapcPQr2VM1MnZxECT060s9xEc8Yn510%2FAA0X29tchF%2BNkW4qIN4iTRC%2BbhiyJRFYSQu1fRvOlbeHKuJFLIW7RdRGQlMqm29hZK79AiEoqetaKIgeAY0t6Gqv7jpS779obIH9dO1niCnbdnVsQzdDv%2FpV7dIkh9w5r9g0gBue2z88t1e%2F2xvpADcCKMaAYnZUA3KyCaEtUY%2FdZkBK2cOV6VSxB7kD5ijdb1bgYEIqnfSAmGEvoo6lV3ioyqVchJQW2HbAC4fRrl7LybYCVnqa%2FIShD6Qgbgjl%2F7l1xgJJhE0weoKpO%2BEAplR5c92STywDChyEz2dAZ0aiZ4GtUKcY0oF8E0jvSfGFYiAr4yPQC4zxujeyHmiVS%2BYlQeBQT19TDhkl8az63gP1pcx5NS3XKGSR7yWkzOliIJ7lU80Jrny%2FYJzE%2FBbM%2FG%2B%2BC%2BZvJp1%2B6GsLZgxx%2Fk09K8Y3OjHng0ACBFUB2arfSIhesT%2FEBOo9VmuMKEGkcCmSJxrqNxREMfQF6GpAca9CrDnh1cZnMmeGF%2Bt8Z4lpPQ3%2BMLz3n8EGOqUB82J9XggYRCB9WnMbxco0GIhSaXv3iO66A7hVpzrjp23dTHIYo29AWpKgQ9ViPM03XKslQ7wFQv2HyeTeCCfA5cfZ05t4bQROpYRAdrR%2FmHvgoMv5QWj0xnxbb7R3QHpSM4qf3cTDqq9U6Unr3EJjJwzzXeNL1FiE1OcMjpRW%2FakMYoO9c%2BftroXCy6VmqOOp4KkfR1UWRXt9GfFjo58iPNZoR%2BBt&X-Amz-Signature=131a7e4909dbc2c3e406502033f537b93c1e1801a35bd5c2a2e73cacddaae3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMA4XTW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgjJi%2Fw%2BA4FTjdddVmn1LSPT5gUHDDZVjQfXipl0daJAiEA8hpgNQRGvI4uOFLKPSvy597Q%2Bn8qFFMCPSTlVLgYzfYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDB87kmkGutonpipnMircA7oTWD5iL3QgomD5E%2FcppnrrgpETG%2BtVnJefoeDeA7HiJm6WNs0QETGXjpxXcDhBe0LR0Q17v8x9gRRk3D7JAjKbapcPQr2VM1MnZxECT060s9xEc8Yn510%2FAA0X29tchF%2BNkW4qIN4iTRC%2BbhiyJRFYSQu1fRvOlbeHKuJFLIW7RdRGQlMqm29hZK79AiEoqetaKIgeAY0t6Gqv7jpS779obIH9dO1niCnbdnVsQzdDv%2FpV7dIkh9w5r9g0gBue2z88t1e%2F2xvpADcCKMaAYnZUA3KyCaEtUY%2FdZkBK2cOV6VSxB7kD5ijdb1bgYEIqnfSAmGEvoo6lV3ioyqVchJQW2HbAC4fRrl7LybYCVnqa%2FIShD6Qgbgjl%2F7l1xgJJhE0weoKpO%2BEAplR5c92STywDChyEz2dAZ0aiZ4GtUKcY0oF8E0jvSfGFYiAr4yPQC4zxujeyHmiVS%2BYlQeBQT19TDhkl8az63gP1pcx5NS3XKGSR7yWkzOliIJ7lU80Jrny%2FYJzE%2FBbM%2FG%2B%2BC%2BZvJp1%2B6GsLZgxx%2Fk09K8Y3OjHng0ACBFUB2arfSIhesT%2FEBOo9VmuMKEGkcCmSJxrqNxREMfQF6GpAca9CrDnh1cZnMmeGF%2Bt8Z4lpPQ3%2BMLz3n8EGOqUB82J9XggYRCB9WnMbxco0GIhSaXv3iO66A7hVpzrjp23dTHIYo29AWpKgQ9ViPM03XKslQ7wFQv2HyeTeCCfA5cfZ05t4bQROpYRAdrR%2FmHvgoMv5QWj0xnxbb7R3QHpSM4qf3cTDqq9U6Unr3EJjJwzzXeNL1FiE1OcMjpRW%2FakMYoO9c%2BftroXCy6VmqOOp4KkfR1UWRXt9GfFjo58iPNZoR%2BBt&X-Amz-Signature=797ded1d0de44dd4a84065193444509066a789aeeb898a7d4e8760a65effd0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMA4XTW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgjJi%2Fw%2BA4FTjdddVmn1LSPT5gUHDDZVjQfXipl0daJAiEA8hpgNQRGvI4uOFLKPSvy597Q%2Bn8qFFMCPSTlVLgYzfYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDB87kmkGutonpipnMircA7oTWD5iL3QgomD5E%2FcppnrrgpETG%2BtVnJefoeDeA7HiJm6WNs0QETGXjpxXcDhBe0LR0Q17v8x9gRRk3D7JAjKbapcPQr2VM1MnZxECT060s9xEc8Yn510%2FAA0X29tchF%2BNkW4qIN4iTRC%2BbhiyJRFYSQu1fRvOlbeHKuJFLIW7RdRGQlMqm29hZK79AiEoqetaKIgeAY0t6Gqv7jpS779obIH9dO1niCnbdnVsQzdDv%2FpV7dIkh9w5r9g0gBue2z88t1e%2F2xvpADcCKMaAYnZUA3KyCaEtUY%2FdZkBK2cOV6VSxB7kD5ijdb1bgYEIqnfSAmGEvoo6lV3ioyqVchJQW2HbAC4fRrl7LybYCVnqa%2FIShD6Qgbgjl%2F7l1xgJJhE0weoKpO%2BEAplR5c92STywDChyEz2dAZ0aiZ4GtUKcY0oF8E0jvSfGFYiAr4yPQC4zxujeyHmiVS%2BYlQeBQT19TDhkl8az63gP1pcx5NS3XKGSR7yWkzOliIJ7lU80Jrny%2FYJzE%2FBbM%2FG%2B%2BC%2BZvJp1%2B6GsLZgxx%2Fk09K8Y3OjHng0ACBFUB2arfSIhesT%2FEBOo9VmuMKEGkcCmSJxrqNxREMfQF6GpAca9CrDnh1cZnMmeGF%2Bt8Z4lpPQ3%2BMLz3n8EGOqUB82J9XggYRCB9WnMbxco0GIhSaXv3iO66A7hVpzrjp23dTHIYo29AWpKgQ9ViPM03XKslQ7wFQv2HyeTeCCfA5cfZ05t4bQROpYRAdrR%2FmHvgoMv5QWj0xnxbb7R3QHpSM4qf3cTDqq9U6Unr3EJjJwzzXeNL1FiE1OcMjpRW%2FakMYoO9c%2BftroXCy6VmqOOp4KkfR1UWRXt9GfFjo58iPNZoR%2BBt&X-Amz-Signature=a6c6b7c8e8a39c563f4b2a8ad806534d62793e66fefcd373aa93eba3bb53d88b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMA4XTW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgjJi%2Fw%2BA4FTjdddVmn1LSPT5gUHDDZVjQfXipl0daJAiEA8hpgNQRGvI4uOFLKPSvy597Q%2Bn8qFFMCPSTlVLgYzfYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDB87kmkGutonpipnMircA7oTWD5iL3QgomD5E%2FcppnrrgpETG%2BtVnJefoeDeA7HiJm6WNs0QETGXjpxXcDhBe0LR0Q17v8x9gRRk3D7JAjKbapcPQr2VM1MnZxECT060s9xEc8Yn510%2FAA0X29tchF%2BNkW4qIN4iTRC%2BbhiyJRFYSQu1fRvOlbeHKuJFLIW7RdRGQlMqm29hZK79AiEoqetaKIgeAY0t6Gqv7jpS779obIH9dO1niCnbdnVsQzdDv%2FpV7dIkh9w5r9g0gBue2z88t1e%2F2xvpADcCKMaAYnZUA3KyCaEtUY%2FdZkBK2cOV6VSxB7kD5ijdb1bgYEIqnfSAmGEvoo6lV3ioyqVchJQW2HbAC4fRrl7LybYCVnqa%2FIShD6Qgbgjl%2F7l1xgJJhE0weoKpO%2BEAplR5c92STywDChyEz2dAZ0aiZ4GtUKcY0oF8E0jvSfGFYiAr4yPQC4zxujeyHmiVS%2BYlQeBQT19TDhkl8az63gP1pcx5NS3XKGSR7yWkzOliIJ7lU80Jrny%2FYJzE%2FBbM%2FG%2B%2BC%2BZvJp1%2B6GsLZgxx%2Fk09K8Y3OjHng0ACBFUB2arfSIhesT%2FEBOo9VmuMKEGkcCmSJxrqNxREMfQF6GpAca9CrDnh1cZnMmeGF%2Bt8Z4lpPQ3%2BMLz3n8EGOqUB82J9XggYRCB9WnMbxco0GIhSaXv3iO66A7hVpzrjp23dTHIYo29AWpKgQ9ViPM03XKslQ7wFQv2HyeTeCCfA5cfZ05t4bQROpYRAdrR%2FmHvgoMv5QWj0xnxbb7R3QHpSM4qf3cTDqq9U6Unr3EJjJwzzXeNL1FiE1OcMjpRW%2FakMYoO9c%2BftroXCy6VmqOOp4KkfR1UWRXt9GfFjo58iPNZoR%2BBt&X-Amz-Signature=49d618720f9d4f8d73b307341addb92fca5e2cfe9a6e4c79bee29b75b69ec50d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

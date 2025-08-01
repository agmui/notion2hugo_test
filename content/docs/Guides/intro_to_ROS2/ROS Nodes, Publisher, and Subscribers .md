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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52LYBZF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClixoxzh8xH9tc21Yr%2BCXTMBn0ABc0KAryFN6DxrgdDAIhAJb2yr82mPDwb1RshfIU016DTI67dYKVnUrPuOu1HgRSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7JiZ6DuZ7o1R%2BnRoq3AO%2B7431iFdVkfY6yBkLQOuYhuYiz6BMgejYuSf00vL2LNovHUI7cx3W36ve6CFLxX9fyooecl%2FtrrdDCRRKgZWek8Wc9Itbs4UWE%2B1mldFWVU2Ql6alL1qiiTy9oypsB%2FHM90oQithnerjb3FiA8pNj6LwMUfsM8d01a6Bl3cAupVmhZpCs%2FWB9SPwq0hHkpDuxzYYQtxXUrg86ZeOqvENk7DLrTMl7Gbz2FjtgZzJC4JU%2BPAYs0bapapDmMGDbbK96LtPY7jz7PXj1jx5g5lg6fGwFYzxiZ2RYNmmOXGCOvDOZEx1L%2FrwBxWL7fmEWyCWeH8Igt%2BkSP1hS6ygCcj39RTN8bklMI1EXZi6Rg4pYIbqvFuyKrfBawF0RKPIqgR0AJ9JDVLDuW7MrOYL16%2F53HSo1kPi1HuPOF7IEwBSet0I%2FCPF%2FQR%2Fzt6IWiMJNfhxgsJGjE9nuDsWXZoiSz7TZuyrIua4PLePMX52ArjtiyFm4Nl0rKhFN8%2FR44BwujoEvxDpDbhtjX9k4p8DogLvPUF6L%2B2suTk1JmaxbXZAZfDDIpEwdHCYhU%2FsZSc%2FFfx%2FqaMyVaI1V8LiiKlr%2B83ukkxs93LH636qZ0KU4yDcYeaIWCX90xbK%2BHJLOgTC77bTEBjqkARhQ%2BnDT9%2Bjzm51nCKrwAE%2FAQjixPq1QLOaWW9jNS5Xh2o1fdSFFEO5UGA6jRo7Web1sPzNVwYmlpM%2FiWRwBJk3QBIoXN7rOo2I%2ByoKHoAkWZdJNuWS9Z%2BOiaYytsRCbmVq6Q4jULQwk582Kd7gdwIBo8GPPyr5Mx2tJVJlR0zU5m4Qm3LflnjgpotrwR8G%2BC%2B2EpkggU9kVR6RdYuclURFmI8%2FR&X-Amz-Signature=7816d8fb6d85532f3a9b9eaad1a20f7bffb56dba96cd3bb14d8eeca610d049af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52LYBZF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClixoxzh8xH9tc21Yr%2BCXTMBn0ABc0KAryFN6DxrgdDAIhAJb2yr82mPDwb1RshfIU016DTI67dYKVnUrPuOu1HgRSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7JiZ6DuZ7o1R%2BnRoq3AO%2B7431iFdVkfY6yBkLQOuYhuYiz6BMgejYuSf00vL2LNovHUI7cx3W36ve6CFLxX9fyooecl%2FtrrdDCRRKgZWek8Wc9Itbs4UWE%2B1mldFWVU2Ql6alL1qiiTy9oypsB%2FHM90oQithnerjb3FiA8pNj6LwMUfsM8d01a6Bl3cAupVmhZpCs%2FWB9SPwq0hHkpDuxzYYQtxXUrg86ZeOqvENk7DLrTMl7Gbz2FjtgZzJC4JU%2BPAYs0bapapDmMGDbbK96LtPY7jz7PXj1jx5g5lg6fGwFYzxiZ2RYNmmOXGCOvDOZEx1L%2FrwBxWL7fmEWyCWeH8Igt%2BkSP1hS6ygCcj39RTN8bklMI1EXZi6Rg4pYIbqvFuyKrfBawF0RKPIqgR0AJ9JDVLDuW7MrOYL16%2F53HSo1kPi1HuPOF7IEwBSet0I%2FCPF%2FQR%2Fzt6IWiMJNfhxgsJGjE9nuDsWXZoiSz7TZuyrIua4PLePMX52ArjtiyFm4Nl0rKhFN8%2FR44BwujoEvxDpDbhtjX9k4p8DogLvPUF6L%2B2suTk1JmaxbXZAZfDDIpEwdHCYhU%2FsZSc%2FFfx%2FqaMyVaI1V8LiiKlr%2B83ukkxs93LH636qZ0KU4yDcYeaIWCX90xbK%2BHJLOgTC77bTEBjqkARhQ%2BnDT9%2Bjzm51nCKrwAE%2FAQjixPq1QLOaWW9jNS5Xh2o1fdSFFEO5UGA6jRo7Web1sPzNVwYmlpM%2FiWRwBJk3QBIoXN7rOo2I%2ByoKHoAkWZdJNuWS9Z%2BOiaYytsRCbmVq6Q4jULQwk582Kd7gdwIBo8GPPyr5Mx2tJVJlR0zU5m4Qm3LflnjgpotrwR8G%2BC%2B2EpkggU9kVR6RdYuclURFmI8%2FR&X-Amz-Signature=b78103fce58e2a29a74f9f289c44e07b080fbb52ea7ae01b17bb410d343b84f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52LYBZF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClixoxzh8xH9tc21Yr%2BCXTMBn0ABc0KAryFN6DxrgdDAIhAJb2yr82mPDwb1RshfIU016DTI67dYKVnUrPuOu1HgRSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7JiZ6DuZ7o1R%2BnRoq3AO%2B7431iFdVkfY6yBkLQOuYhuYiz6BMgejYuSf00vL2LNovHUI7cx3W36ve6CFLxX9fyooecl%2FtrrdDCRRKgZWek8Wc9Itbs4UWE%2B1mldFWVU2Ql6alL1qiiTy9oypsB%2FHM90oQithnerjb3FiA8pNj6LwMUfsM8d01a6Bl3cAupVmhZpCs%2FWB9SPwq0hHkpDuxzYYQtxXUrg86ZeOqvENk7DLrTMl7Gbz2FjtgZzJC4JU%2BPAYs0bapapDmMGDbbK96LtPY7jz7PXj1jx5g5lg6fGwFYzxiZ2RYNmmOXGCOvDOZEx1L%2FrwBxWL7fmEWyCWeH8Igt%2BkSP1hS6ygCcj39RTN8bklMI1EXZi6Rg4pYIbqvFuyKrfBawF0RKPIqgR0AJ9JDVLDuW7MrOYL16%2F53HSo1kPi1HuPOF7IEwBSet0I%2FCPF%2FQR%2Fzt6IWiMJNfhxgsJGjE9nuDsWXZoiSz7TZuyrIua4PLePMX52ArjtiyFm4Nl0rKhFN8%2FR44BwujoEvxDpDbhtjX9k4p8DogLvPUF6L%2B2suTk1JmaxbXZAZfDDIpEwdHCYhU%2FsZSc%2FFfx%2FqaMyVaI1V8LiiKlr%2B83ukkxs93LH636qZ0KU4yDcYeaIWCX90xbK%2BHJLOgTC77bTEBjqkARhQ%2BnDT9%2Bjzm51nCKrwAE%2FAQjixPq1QLOaWW9jNS5Xh2o1fdSFFEO5UGA6jRo7Web1sPzNVwYmlpM%2FiWRwBJk3QBIoXN7rOo2I%2ByoKHoAkWZdJNuWS9Z%2BOiaYytsRCbmVq6Q4jULQwk582Kd7gdwIBo8GPPyr5Mx2tJVJlR0zU5m4Qm3LflnjgpotrwR8G%2BC%2B2EpkggU9kVR6RdYuclURFmI8%2FR&X-Amz-Signature=d11bbe88575c5efee52736a334a39f2fbe1ed9c32fb97907af9aceb70c2fcb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52LYBZF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClixoxzh8xH9tc21Yr%2BCXTMBn0ABc0KAryFN6DxrgdDAIhAJb2yr82mPDwb1RshfIU016DTI67dYKVnUrPuOu1HgRSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7JiZ6DuZ7o1R%2BnRoq3AO%2B7431iFdVkfY6yBkLQOuYhuYiz6BMgejYuSf00vL2LNovHUI7cx3W36ve6CFLxX9fyooecl%2FtrrdDCRRKgZWek8Wc9Itbs4UWE%2B1mldFWVU2Ql6alL1qiiTy9oypsB%2FHM90oQithnerjb3FiA8pNj6LwMUfsM8d01a6Bl3cAupVmhZpCs%2FWB9SPwq0hHkpDuxzYYQtxXUrg86ZeOqvENk7DLrTMl7Gbz2FjtgZzJC4JU%2BPAYs0bapapDmMGDbbK96LtPY7jz7PXj1jx5g5lg6fGwFYzxiZ2RYNmmOXGCOvDOZEx1L%2FrwBxWL7fmEWyCWeH8Igt%2BkSP1hS6ygCcj39RTN8bklMI1EXZi6Rg4pYIbqvFuyKrfBawF0RKPIqgR0AJ9JDVLDuW7MrOYL16%2F53HSo1kPi1HuPOF7IEwBSet0I%2FCPF%2FQR%2Fzt6IWiMJNfhxgsJGjE9nuDsWXZoiSz7TZuyrIua4PLePMX52ArjtiyFm4Nl0rKhFN8%2FR44BwujoEvxDpDbhtjX9k4p8DogLvPUF6L%2B2suTk1JmaxbXZAZfDDIpEwdHCYhU%2FsZSc%2FFfx%2FqaMyVaI1V8LiiKlr%2B83ukkxs93LH636qZ0KU4yDcYeaIWCX90xbK%2BHJLOgTC77bTEBjqkARhQ%2BnDT9%2Bjzm51nCKrwAE%2FAQjixPq1QLOaWW9jNS5Xh2o1fdSFFEO5UGA6jRo7Web1sPzNVwYmlpM%2FiWRwBJk3QBIoXN7rOo2I%2ByoKHoAkWZdJNuWS9Z%2BOiaYytsRCbmVq6Q4jULQwk582Kd7gdwIBo8GPPyr5Mx2tJVJlR0zU5m4Qm3LflnjgpotrwR8G%2BC%2B2EpkggU9kVR6RdYuclURFmI8%2FR&X-Amz-Signature=9bcb08149453eb46ef4cd1d3504820bcdeb9e0e19792269b7dd0cf601f31f72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52LYBZF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClixoxzh8xH9tc21Yr%2BCXTMBn0ABc0KAryFN6DxrgdDAIhAJb2yr82mPDwb1RshfIU016DTI67dYKVnUrPuOu1HgRSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7JiZ6DuZ7o1R%2BnRoq3AO%2B7431iFdVkfY6yBkLQOuYhuYiz6BMgejYuSf00vL2LNovHUI7cx3W36ve6CFLxX9fyooecl%2FtrrdDCRRKgZWek8Wc9Itbs4UWE%2B1mldFWVU2Ql6alL1qiiTy9oypsB%2FHM90oQithnerjb3FiA8pNj6LwMUfsM8d01a6Bl3cAupVmhZpCs%2FWB9SPwq0hHkpDuxzYYQtxXUrg86ZeOqvENk7DLrTMl7Gbz2FjtgZzJC4JU%2BPAYs0bapapDmMGDbbK96LtPY7jz7PXj1jx5g5lg6fGwFYzxiZ2RYNmmOXGCOvDOZEx1L%2FrwBxWL7fmEWyCWeH8Igt%2BkSP1hS6ygCcj39RTN8bklMI1EXZi6Rg4pYIbqvFuyKrfBawF0RKPIqgR0AJ9JDVLDuW7MrOYL16%2F53HSo1kPi1HuPOF7IEwBSet0I%2FCPF%2FQR%2Fzt6IWiMJNfhxgsJGjE9nuDsWXZoiSz7TZuyrIua4PLePMX52ArjtiyFm4Nl0rKhFN8%2FR44BwujoEvxDpDbhtjX9k4p8DogLvPUF6L%2B2suTk1JmaxbXZAZfDDIpEwdHCYhU%2FsZSc%2FFfx%2FqaMyVaI1V8LiiKlr%2B83ukkxs93LH636qZ0KU4yDcYeaIWCX90xbK%2BHJLOgTC77bTEBjqkARhQ%2BnDT9%2Bjzm51nCKrwAE%2FAQjixPq1QLOaWW9jNS5Xh2o1fdSFFEO5UGA6jRo7Web1sPzNVwYmlpM%2FiWRwBJk3QBIoXN7rOo2I%2ByoKHoAkWZdJNuWS9Z%2BOiaYytsRCbmVq6Q4jULQwk582Kd7gdwIBo8GPPyr5Mx2tJVJlR0zU5m4Qm3LflnjgpotrwR8G%2BC%2B2EpkggU9kVR6RdYuclURFmI8%2FR&X-Amz-Signature=61d16bdb311d82fcf12febdb5fb08b760e63d2c61a0b3139e0ad6117076c6e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52LYBZF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClixoxzh8xH9tc21Yr%2BCXTMBn0ABc0KAryFN6DxrgdDAIhAJb2yr82mPDwb1RshfIU016DTI67dYKVnUrPuOu1HgRSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7JiZ6DuZ7o1R%2BnRoq3AO%2B7431iFdVkfY6yBkLQOuYhuYiz6BMgejYuSf00vL2LNovHUI7cx3W36ve6CFLxX9fyooecl%2FtrrdDCRRKgZWek8Wc9Itbs4UWE%2B1mldFWVU2Ql6alL1qiiTy9oypsB%2FHM90oQithnerjb3FiA8pNj6LwMUfsM8d01a6Bl3cAupVmhZpCs%2FWB9SPwq0hHkpDuxzYYQtxXUrg86ZeOqvENk7DLrTMl7Gbz2FjtgZzJC4JU%2BPAYs0bapapDmMGDbbK96LtPY7jz7PXj1jx5g5lg6fGwFYzxiZ2RYNmmOXGCOvDOZEx1L%2FrwBxWL7fmEWyCWeH8Igt%2BkSP1hS6ygCcj39RTN8bklMI1EXZi6Rg4pYIbqvFuyKrfBawF0RKPIqgR0AJ9JDVLDuW7MrOYL16%2F53HSo1kPi1HuPOF7IEwBSet0I%2FCPF%2FQR%2Fzt6IWiMJNfhxgsJGjE9nuDsWXZoiSz7TZuyrIua4PLePMX52ArjtiyFm4Nl0rKhFN8%2FR44BwujoEvxDpDbhtjX9k4p8DogLvPUF6L%2B2suTk1JmaxbXZAZfDDIpEwdHCYhU%2FsZSc%2FFfx%2FqaMyVaI1V8LiiKlr%2B83ukkxs93LH636qZ0KU4yDcYeaIWCX90xbK%2BHJLOgTC77bTEBjqkARhQ%2BnDT9%2Bjzm51nCKrwAE%2FAQjixPq1QLOaWW9jNS5Xh2o1fdSFFEO5UGA6jRo7Web1sPzNVwYmlpM%2FiWRwBJk3QBIoXN7rOo2I%2ByoKHoAkWZdJNuWS9Z%2BOiaYytsRCbmVq6Q4jULQwk582Kd7gdwIBo8GPPyr5Mx2tJVJlR0zU5m4Qm3LflnjgpotrwR8G%2BC%2B2EpkggU9kVR6RdYuclURFmI8%2FR&X-Amz-Signature=4f8025eeec86993cc99cda2877d61d0583aa3bff4eb529e9aa8cabc90cf0755b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52LYBZF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClixoxzh8xH9tc21Yr%2BCXTMBn0ABc0KAryFN6DxrgdDAIhAJb2yr82mPDwb1RshfIU016DTI67dYKVnUrPuOu1HgRSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7JiZ6DuZ7o1R%2BnRoq3AO%2B7431iFdVkfY6yBkLQOuYhuYiz6BMgejYuSf00vL2LNovHUI7cx3W36ve6CFLxX9fyooecl%2FtrrdDCRRKgZWek8Wc9Itbs4UWE%2B1mldFWVU2Ql6alL1qiiTy9oypsB%2FHM90oQithnerjb3FiA8pNj6LwMUfsM8d01a6Bl3cAupVmhZpCs%2FWB9SPwq0hHkpDuxzYYQtxXUrg86ZeOqvENk7DLrTMl7Gbz2FjtgZzJC4JU%2BPAYs0bapapDmMGDbbK96LtPY7jz7PXj1jx5g5lg6fGwFYzxiZ2RYNmmOXGCOvDOZEx1L%2FrwBxWL7fmEWyCWeH8Igt%2BkSP1hS6ygCcj39RTN8bklMI1EXZi6Rg4pYIbqvFuyKrfBawF0RKPIqgR0AJ9JDVLDuW7MrOYL16%2F53HSo1kPi1HuPOF7IEwBSet0I%2FCPF%2FQR%2Fzt6IWiMJNfhxgsJGjE9nuDsWXZoiSz7TZuyrIua4PLePMX52ArjtiyFm4Nl0rKhFN8%2FR44BwujoEvxDpDbhtjX9k4p8DogLvPUF6L%2B2suTk1JmaxbXZAZfDDIpEwdHCYhU%2FsZSc%2FFfx%2FqaMyVaI1V8LiiKlr%2B83ukkxs93LH636qZ0KU4yDcYeaIWCX90xbK%2BHJLOgTC77bTEBjqkARhQ%2BnDT9%2Bjzm51nCKrwAE%2FAQjixPq1QLOaWW9jNS5Xh2o1fdSFFEO5UGA6jRo7Web1sPzNVwYmlpM%2FiWRwBJk3QBIoXN7rOo2I%2ByoKHoAkWZdJNuWS9Z%2BOiaYytsRCbmVq6Q4jULQwk582Kd7gdwIBo8GPPyr5Mx2tJVJlR0zU5m4Qm3LflnjgpotrwR8G%2BC%2B2EpkggU9kVR6RdYuclURFmI8%2FR&X-Amz-Signature=b025b028bf4e0a3a554dae4a35fbbbd395c71dc3d4c3e89035c3531310b7e260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52LYBZF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClixoxzh8xH9tc21Yr%2BCXTMBn0ABc0KAryFN6DxrgdDAIhAJb2yr82mPDwb1RshfIU016DTI67dYKVnUrPuOu1HgRSKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7JiZ6DuZ7o1R%2BnRoq3AO%2B7431iFdVkfY6yBkLQOuYhuYiz6BMgejYuSf00vL2LNovHUI7cx3W36ve6CFLxX9fyooecl%2FtrrdDCRRKgZWek8Wc9Itbs4UWE%2B1mldFWVU2Ql6alL1qiiTy9oypsB%2FHM90oQithnerjb3FiA8pNj6LwMUfsM8d01a6Bl3cAupVmhZpCs%2FWB9SPwq0hHkpDuxzYYQtxXUrg86ZeOqvENk7DLrTMl7Gbz2FjtgZzJC4JU%2BPAYs0bapapDmMGDbbK96LtPY7jz7PXj1jx5g5lg6fGwFYzxiZ2RYNmmOXGCOvDOZEx1L%2FrwBxWL7fmEWyCWeH8Igt%2BkSP1hS6ygCcj39RTN8bklMI1EXZi6Rg4pYIbqvFuyKrfBawF0RKPIqgR0AJ9JDVLDuW7MrOYL16%2F53HSo1kPi1HuPOF7IEwBSet0I%2FCPF%2FQR%2Fzt6IWiMJNfhxgsJGjE9nuDsWXZoiSz7TZuyrIua4PLePMX52ArjtiyFm4Nl0rKhFN8%2FR44BwujoEvxDpDbhtjX9k4p8DogLvPUF6L%2B2suTk1JmaxbXZAZfDDIpEwdHCYhU%2FsZSc%2FFfx%2FqaMyVaI1V8LiiKlr%2B83ukkxs93LH636qZ0KU4yDcYeaIWCX90xbK%2BHJLOgTC77bTEBjqkARhQ%2BnDT9%2Bjzm51nCKrwAE%2FAQjixPq1QLOaWW9jNS5Xh2o1fdSFFEO5UGA6jRo7Web1sPzNVwYmlpM%2FiWRwBJk3QBIoXN7rOo2I%2ByoKHoAkWZdJNuWS9Z%2BOiaYytsRCbmVq6Q4jULQwk582Kd7gdwIBo8GPPyr5Mx2tJVJlR0zU5m4Qm3LflnjgpotrwR8G%2BC%2B2EpkggU9kVR6RdYuclURFmI8%2FR&X-Amz-Signature=c1f785ea98e2bdfc7582c94047ffdce8c73b1c5f1d1e42266d23b8a738ede7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

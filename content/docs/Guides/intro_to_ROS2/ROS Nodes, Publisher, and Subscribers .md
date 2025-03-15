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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=c9ca58cf003697c713637da4e805d85b44a36f574a0975e17b188c8f09760400&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=0c77438d906a0ebd80fa00b4b653acfd197fe72a20e6d0d981448a68c3cc1d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=fb347e9e4e3310e968756e41c21f61127a3314b316b3d319328d8446f8b7edb8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=fef6df5d47e964e77455cb6ed92e6e208d6154449c8d4f918a06d30583f85c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=1258e0c842a0d779cc55c3bf69223f507a99bca499f95c55cc4dfc4ab2524dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=7d4c73d85a2988a56ad636ea9ba84d0cdb5fc86262b2627e534dabdcd72b96eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=8c61f0abc74d5275cfa68e60e4e5f9dd6c962998447c58f6a754d6f079c96439&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=c6ef4f44d665170dfefa43983554a6a454b482fe5b6deb1113dab6000b013605&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

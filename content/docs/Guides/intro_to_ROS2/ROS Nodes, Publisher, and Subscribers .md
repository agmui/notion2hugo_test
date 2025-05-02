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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI3LOJA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIATPQm33eloxRyEufuoVfXK6a7p%2Bqrs0MM1nyyKe%2FqV2AiEAx8Qik3cOTRfxrGeuMsASIGUjYon%2BWbZJcHBQMsIJQNAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj0RnMMY%2F7GK2yx0CrcA45at%2FPVRDAd9kv5Rje3qhLWcVxYvVMIwnggfWXxjhWBabgALxT1aw8qk84O3Y89KWCaEpzmEgfgZy8smJPQL%2FLhmQncDNUemSeeM04srOObQT5Q2UWuG7PzNCSJ%2BpocuTxoZaUXLyZ42aJgYh66V73U0rugmdSDf7QMH%2BdpQAeESzG61VaaDxNogYAjbaldmo%2FWRYQ7MvmZaojDr0Hx9v00t7LMs7NBhSA7XMvpk2m98A3qqAYul9u%2Fh%2BmNynXUfAfyasUOvV4doPK5QlGyFsnvRKfoPx7584qSfJ16VmQRUrIWADslgPj%2FxaFhIyMV4XZz%2BnzTgmR4q0hPdbtKFqFc6VpnYxd7Ovr61CYC6oqg6AFfrIhV7Dci3xofgVI0BjdBVOkDEEm3paM1jsyPmIrc%2FbkUGiaBatHnLBqvLzOeVlgcK0R%2FgFkPmPIE90osOPy98Avfl%2Bt%2F4YSQWmMjI2SB0WmaKPrJLhzkLDXlcgrS2p46w%2BuEji%2BPDWJGwlZtPQxCd7NCfN1WCvnEEW3Ndt2ZVJbFjqayDvrVAJKYZHxs2O3lZ34WOk0rCSxMGb7c0STS90LrrJ76JqV6txXXPnaF9rUx7KeOlMi80VeK0T7UvR3ZP5ujqXhdqgXeMPfk08AGOqUBCB1qDprYBhvvRXIC06RhKjkV6Rlq6DxZ%2FjiMxk1r3%2FgPYWj5qAodal3Orjg02lh3lDTuH%2B9T7O1l7YpmDO4SydCakRedrK4arvx2jL6Hf1%2ByXmwrnn5bbqXkYOurkwHF65Ky6kKHon3OnqA7FfsmRaYdY6o%2FHBElU5Cern6f4hv8rJhZclxY4a0DJbZoCI0IG0mudBbhqFDRi65JY9L3ghXpjlVP&X-Amz-Signature=8b4866134d461315dd2312c3c5211d827601200918cb74c6be42edd24c6afa22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI3LOJA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIATPQm33eloxRyEufuoVfXK6a7p%2Bqrs0MM1nyyKe%2FqV2AiEAx8Qik3cOTRfxrGeuMsASIGUjYon%2BWbZJcHBQMsIJQNAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj0RnMMY%2F7GK2yx0CrcA45at%2FPVRDAd9kv5Rje3qhLWcVxYvVMIwnggfWXxjhWBabgALxT1aw8qk84O3Y89KWCaEpzmEgfgZy8smJPQL%2FLhmQncDNUemSeeM04srOObQT5Q2UWuG7PzNCSJ%2BpocuTxoZaUXLyZ42aJgYh66V73U0rugmdSDf7QMH%2BdpQAeESzG61VaaDxNogYAjbaldmo%2FWRYQ7MvmZaojDr0Hx9v00t7LMs7NBhSA7XMvpk2m98A3qqAYul9u%2Fh%2BmNynXUfAfyasUOvV4doPK5QlGyFsnvRKfoPx7584qSfJ16VmQRUrIWADslgPj%2FxaFhIyMV4XZz%2BnzTgmR4q0hPdbtKFqFc6VpnYxd7Ovr61CYC6oqg6AFfrIhV7Dci3xofgVI0BjdBVOkDEEm3paM1jsyPmIrc%2FbkUGiaBatHnLBqvLzOeVlgcK0R%2FgFkPmPIE90osOPy98Avfl%2Bt%2F4YSQWmMjI2SB0WmaKPrJLhzkLDXlcgrS2p46w%2BuEji%2BPDWJGwlZtPQxCd7NCfN1WCvnEEW3Ndt2ZVJbFjqayDvrVAJKYZHxs2O3lZ34WOk0rCSxMGb7c0STS90LrrJ76JqV6txXXPnaF9rUx7KeOlMi80VeK0T7UvR3ZP5ujqXhdqgXeMPfk08AGOqUBCB1qDprYBhvvRXIC06RhKjkV6Rlq6DxZ%2FjiMxk1r3%2FgPYWj5qAodal3Orjg02lh3lDTuH%2B9T7O1l7YpmDO4SydCakRedrK4arvx2jL6Hf1%2ByXmwrnn5bbqXkYOurkwHF65Ky6kKHon3OnqA7FfsmRaYdY6o%2FHBElU5Cern6f4hv8rJhZclxY4a0DJbZoCI0IG0mudBbhqFDRi65JY9L3ghXpjlVP&X-Amz-Signature=0c91d106ae40e9cab231aeebdcf0aa435389267d6d3a8d8ba8dfab9c668de959&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI3LOJA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIATPQm33eloxRyEufuoVfXK6a7p%2Bqrs0MM1nyyKe%2FqV2AiEAx8Qik3cOTRfxrGeuMsASIGUjYon%2BWbZJcHBQMsIJQNAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj0RnMMY%2F7GK2yx0CrcA45at%2FPVRDAd9kv5Rje3qhLWcVxYvVMIwnggfWXxjhWBabgALxT1aw8qk84O3Y89KWCaEpzmEgfgZy8smJPQL%2FLhmQncDNUemSeeM04srOObQT5Q2UWuG7PzNCSJ%2BpocuTxoZaUXLyZ42aJgYh66V73U0rugmdSDf7QMH%2BdpQAeESzG61VaaDxNogYAjbaldmo%2FWRYQ7MvmZaojDr0Hx9v00t7LMs7NBhSA7XMvpk2m98A3qqAYul9u%2Fh%2BmNynXUfAfyasUOvV4doPK5QlGyFsnvRKfoPx7584qSfJ16VmQRUrIWADslgPj%2FxaFhIyMV4XZz%2BnzTgmR4q0hPdbtKFqFc6VpnYxd7Ovr61CYC6oqg6AFfrIhV7Dci3xofgVI0BjdBVOkDEEm3paM1jsyPmIrc%2FbkUGiaBatHnLBqvLzOeVlgcK0R%2FgFkPmPIE90osOPy98Avfl%2Bt%2F4YSQWmMjI2SB0WmaKPrJLhzkLDXlcgrS2p46w%2BuEji%2BPDWJGwlZtPQxCd7NCfN1WCvnEEW3Ndt2ZVJbFjqayDvrVAJKYZHxs2O3lZ34WOk0rCSxMGb7c0STS90LrrJ76JqV6txXXPnaF9rUx7KeOlMi80VeK0T7UvR3ZP5ujqXhdqgXeMPfk08AGOqUBCB1qDprYBhvvRXIC06RhKjkV6Rlq6DxZ%2FjiMxk1r3%2FgPYWj5qAodal3Orjg02lh3lDTuH%2B9T7O1l7YpmDO4SydCakRedrK4arvx2jL6Hf1%2ByXmwrnn5bbqXkYOurkwHF65Ky6kKHon3OnqA7FfsmRaYdY6o%2FHBElU5Cern6f4hv8rJhZclxY4a0DJbZoCI0IG0mudBbhqFDRi65JY9L3ghXpjlVP&X-Amz-Signature=98193bed784b5ea0680ace1aa16e56917728aaeaaa6e3580fec016efc9319afc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI3LOJA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIATPQm33eloxRyEufuoVfXK6a7p%2Bqrs0MM1nyyKe%2FqV2AiEAx8Qik3cOTRfxrGeuMsASIGUjYon%2BWbZJcHBQMsIJQNAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj0RnMMY%2F7GK2yx0CrcA45at%2FPVRDAd9kv5Rje3qhLWcVxYvVMIwnggfWXxjhWBabgALxT1aw8qk84O3Y89KWCaEpzmEgfgZy8smJPQL%2FLhmQncDNUemSeeM04srOObQT5Q2UWuG7PzNCSJ%2BpocuTxoZaUXLyZ42aJgYh66V73U0rugmdSDf7QMH%2BdpQAeESzG61VaaDxNogYAjbaldmo%2FWRYQ7MvmZaojDr0Hx9v00t7LMs7NBhSA7XMvpk2m98A3qqAYul9u%2Fh%2BmNynXUfAfyasUOvV4doPK5QlGyFsnvRKfoPx7584qSfJ16VmQRUrIWADslgPj%2FxaFhIyMV4XZz%2BnzTgmR4q0hPdbtKFqFc6VpnYxd7Ovr61CYC6oqg6AFfrIhV7Dci3xofgVI0BjdBVOkDEEm3paM1jsyPmIrc%2FbkUGiaBatHnLBqvLzOeVlgcK0R%2FgFkPmPIE90osOPy98Avfl%2Bt%2F4YSQWmMjI2SB0WmaKPrJLhzkLDXlcgrS2p46w%2BuEji%2BPDWJGwlZtPQxCd7NCfN1WCvnEEW3Ndt2ZVJbFjqayDvrVAJKYZHxs2O3lZ34WOk0rCSxMGb7c0STS90LrrJ76JqV6txXXPnaF9rUx7KeOlMi80VeK0T7UvR3ZP5ujqXhdqgXeMPfk08AGOqUBCB1qDprYBhvvRXIC06RhKjkV6Rlq6DxZ%2FjiMxk1r3%2FgPYWj5qAodal3Orjg02lh3lDTuH%2B9T7O1l7YpmDO4SydCakRedrK4arvx2jL6Hf1%2ByXmwrnn5bbqXkYOurkwHF65Ky6kKHon3OnqA7FfsmRaYdY6o%2FHBElU5Cern6f4hv8rJhZclxY4a0DJbZoCI0IG0mudBbhqFDRi65JY9L3ghXpjlVP&X-Amz-Signature=2b0e412c4f85c01f7fc9bd72c3572de23366d0252c850fe9d163bea1b02a1113&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI3LOJA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIATPQm33eloxRyEufuoVfXK6a7p%2Bqrs0MM1nyyKe%2FqV2AiEAx8Qik3cOTRfxrGeuMsASIGUjYon%2BWbZJcHBQMsIJQNAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj0RnMMY%2F7GK2yx0CrcA45at%2FPVRDAd9kv5Rje3qhLWcVxYvVMIwnggfWXxjhWBabgALxT1aw8qk84O3Y89KWCaEpzmEgfgZy8smJPQL%2FLhmQncDNUemSeeM04srOObQT5Q2UWuG7PzNCSJ%2BpocuTxoZaUXLyZ42aJgYh66V73U0rugmdSDf7QMH%2BdpQAeESzG61VaaDxNogYAjbaldmo%2FWRYQ7MvmZaojDr0Hx9v00t7LMs7NBhSA7XMvpk2m98A3qqAYul9u%2Fh%2BmNynXUfAfyasUOvV4doPK5QlGyFsnvRKfoPx7584qSfJ16VmQRUrIWADslgPj%2FxaFhIyMV4XZz%2BnzTgmR4q0hPdbtKFqFc6VpnYxd7Ovr61CYC6oqg6AFfrIhV7Dci3xofgVI0BjdBVOkDEEm3paM1jsyPmIrc%2FbkUGiaBatHnLBqvLzOeVlgcK0R%2FgFkPmPIE90osOPy98Avfl%2Bt%2F4YSQWmMjI2SB0WmaKPrJLhzkLDXlcgrS2p46w%2BuEji%2BPDWJGwlZtPQxCd7NCfN1WCvnEEW3Ndt2ZVJbFjqayDvrVAJKYZHxs2O3lZ34WOk0rCSxMGb7c0STS90LrrJ76JqV6txXXPnaF9rUx7KeOlMi80VeK0T7UvR3ZP5ujqXhdqgXeMPfk08AGOqUBCB1qDprYBhvvRXIC06RhKjkV6Rlq6DxZ%2FjiMxk1r3%2FgPYWj5qAodal3Orjg02lh3lDTuH%2B9T7O1l7YpmDO4SydCakRedrK4arvx2jL6Hf1%2ByXmwrnn5bbqXkYOurkwHF65Ky6kKHon3OnqA7FfsmRaYdY6o%2FHBElU5Cern6f4hv8rJhZclxY4a0DJbZoCI0IG0mudBbhqFDRi65JY9L3ghXpjlVP&X-Amz-Signature=bef94f50db5ff3044f549a0d4cac2f932e9e1f3024fdce044c76abc9e3bd7cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI3LOJA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIATPQm33eloxRyEufuoVfXK6a7p%2Bqrs0MM1nyyKe%2FqV2AiEAx8Qik3cOTRfxrGeuMsASIGUjYon%2BWbZJcHBQMsIJQNAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj0RnMMY%2F7GK2yx0CrcA45at%2FPVRDAd9kv5Rje3qhLWcVxYvVMIwnggfWXxjhWBabgALxT1aw8qk84O3Y89KWCaEpzmEgfgZy8smJPQL%2FLhmQncDNUemSeeM04srOObQT5Q2UWuG7PzNCSJ%2BpocuTxoZaUXLyZ42aJgYh66V73U0rugmdSDf7QMH%2BdpQAeESzG61VaaDxNogYAjbaldmo%2FWRYQ7MvmZaojDr0Hx9v00t7LMs7NBhSA7XMvpk2m98A3qqAYul9u%2Fh%2BmNynXUfAfyasUOvV4doPK5QlGyFsnvRKfoPx7584qSfJ16VmQRUrIWADslgPj%2FxaFhIyMV4XZz%2BnzTgmR4q0hPdbtKFqFc6VpnYxd7Ovr61CYC6oqg6AFfrIhV7Dci3xofgVI0BjdBVOkDEEm3paM1jsyPmIrc%2FbkUGiaBatHnLBqvLzOeVlgcK0R%2FgFkPmPIE90osOPy98Avfl%2Bt%2F4YSQWmMjI2SB0WmaKPrJLhzkLDXlcgrS2p46w%2BuEji%2BPDWJGwlZtPQxCd7NCfN1WCvnEEW3Ndt2ZVJbFjqayDvrVAJKYZHxs2O3lZ34WOk0rCSxMGb7c0STS90LrrJ76JqV6txXXPnaF9rUx7KeOlMi80VeK0T7UvR3ZP5ujqXhdqgXeMPfk08AGOqUBCB1qDprYBhvvRXIC06RhKjkV6Rlq6DxZ%2FjiMxk1r3%2FgPYWj5qAodal3Orjg02lh3lDTuH%2B9T7O1l7YpmDO4SydCakRedrK4arvx2jL6Hf1%2ByXmwrnn5bbqXkYOurkwHF65Ky6kKHon3OnqA7FfsmRaYdY6o%2FHBElU5Cern6f4hv8rJhZclxY4a0DJbZoCI0IG0mudBbhqFDRi65JY9L3ghXpjlVP&X-Amz-Signature=a951e0e56bdfac027ce253d2470d56af0604009e612b1f7a9dc4bb032288e30b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI3LOJA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIATPQm33eloxRyEufuoVfXK6a7p%2Bqrs0MM1nyyKe%2FqV2AiEAx8Qik3cOTRfxrGeuMsASIGUjYon%2BWbZJcHBQMsIJQNAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj0RnMMY%2F7GK2yx0CrcA45at%2FPVRDAd9kv5Rje3qhLWcVxYvVMIwnggfWXxjhWBabgALxT1aw8qk84O3Y89KWCaEpzmEgfgZy8smJPQL%2FLhmQncDNUemSeeM04srOObQT5Q2UWuG7PzNCSJ%2BpocuTxoZaUXLyZ42aJgYh66V73U0rugmdSDf7QMH%2BdpQAeESzG61VaaDxNogYAjbaldmo%2FWRYQ7MvmZaojDr0Hx9v00t7LMs7NBhSA7XMvpk2m98A3qqAYul9u%2Fh%2BmNynXUfAfyasUOvV4doPK5QlGyFsnvRKfoPx7584qSfJ16VmQRUrIWADslgPj%2FxaFhIyMV4XZz%2BnzTgmR4q0hPdbtKFqFc6VpnYxd7Ovr61CYC6oqg6AFfrIhV7Dci3xofgVI0BjdBVOkDEEm3paM1jsyPmIrc%2FbkUGiaBatHnLBqvLzOeVlgcK0R%2FgFkPmPIE90osOPy98Avfl%2Bt%2F4YSQWmMjI2SB0WmaKPrJLhzkLDXlcgrS2p46w%2BuEji%2BPDWJGwlZtPQxCd7NCfN1WCvnEEW3Ndt2ZVJbFjqayDvrVAJKYZHxs2O3lZ34WOk0rCSxMGb7c0STS90LrrJ76JqV6txXXPnaF9rUx7KeOlMi80VeK0T7UvR3ZP5ujqXhdqgXeMPfk08AGOqUBCB1qDprYBhvvRXIC06RhKjkV6Rlq6DxZ%2FjiMxk1r3%2FgPYWj5qAodal3Orjg02lh3lDTuH%2B9T7O1l7YpmDO4SydCakRedrK4arvx2jL6Hf1%2ByXmwrnn5bbqXkYOurkwHF65Ky6kKHon3OnqA7FfsmRaYdY6o%2FHBElU5Cern6f4hv8rJhZclxY4a0DJbZoCI0IG0mudBbhqFDRi65JY9L3ghXpjlVP&X-Amz-Signature=3809f91da257200aee4e20a4835782416c44fdfa01ab14925ce6aad0f05dacd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI3LOJA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIATPQm33eloxRyEufuoVfXK6a7p%2Bqrs0MM1nyyKe%2FqV2AiEAx8Qik3cOTRfxrGeuMsASIGUjYon%2BWbZJcHBQMsIJQNAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj0RnMMY%2F7GK2yx0CrcA45at%2FPVRDAd9kv5Rje3qhLWcVxYvVMIwnggfWXxjhWBabgALxT1aw8qk84O3Y89KWCaEpzmEgfgZy8smJPQL%2FLhmQncDNUemSeeM04srOObQT5Q2UWuG7PzNCSJ%2BpocuTxoZaUXLyZ42aJgYh66V73U0rugmdSDf7QMH%2BdpQAeESzG61VaaDxNogYAjbaldmo%2FWRYQ7MvmZaojDr0Hx9v00t7LMs7NBhSA7XMvpk2m98A3qqAYul9u%2Fh%2BmNynXUfAfyasUOvV4doPK5QlGyFsnvRKfoPx7584qSfJ16VmQRUrIWADslgPj%2FxaFhIyMV4XZz%2BnzTgmR4q0hPdbtKFqFc6VpnYxd7Ovr61CYC6oqg6AFfrIhV7Dci3xofgVI0BjdBVOkDEEm3paM1jsyPmIrc%2FbkUGiaBatHnLBqvLzOeVlgcK0R%2FgFkPmPIE90osOPy98Avfl%2Bt%2F4YSQWmMjI2SB0WmaKPrJLhzkLDXlcgrS2p46w%2BuEji%2BPDWJGwlZtPQxCd7NCfN1WCvnEEW3Ndt2ZVJbFjqayDvrVAJKYZHxs2O3lZ34WOk0rCSxMGb7c0STS90LrrJ76JqV6txXXPnaF9rUx7KeOlMi80VeK0T7UvR3ZP5ujqXhdqgXeMPfk08AGOqUBCB1qDprYBhvvRXIC06RhKjkV6Rlq6DxZ%2FjiMxk1r3%2FgPYWj5qAodal3Orjg02lh3lDTuH%2B9T7O1l7YpmDO4SydCakRedrK4arvx2jL6Hf1%2ByXmwrnn5bbqXkYOurkwHF65Ky6kKHon3OnqA7FfsmRaYdY6o%2FHBElU5Cern6f4hv8rJhZclxY4a0DJbZoCI0IG0mudBbhqFDRi65JY9L3ghXpjlVP&X-Amz-Signature=e21d1205358ddd151aa3e25d2d2872eb699686263a2836a99b790c3f26d37607&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

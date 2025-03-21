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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656I4JHEH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD9LdFUnb8Httz1675Ts%2BXRAmGYcMwL%2FG7qfKPIgbQEIgIhAJ11GckqrYEmo4ylDcDjngKNvpBktfeclU666qt03k5BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5%2BlzfkuZMY5CKmWYq3APJpJH6WYLrL9TTO%2B2JLgod3I0dbUa4HIgisG%2BVsMaNTdW8rtBmJtnsxWmi54W14rdrvR9Vo73scZUdCF9okDEso9czSJLpgwlf3gBCLW3iUz8sgAm6j77XcwIocFIgx9KUirHnsQ%2FNnpUhrwKIJHkmTuH4jTNU53QRX%2Bs2Un1s8T7NisMBWwPkZJmxA55bHmiqyz5bF%2F2t8nQZUwCAVcNfqrId14O797ziTAAFsCNg52XNiv66Vewt3TS9yIR2XLmdZFhrjWkxeBu84dyASFtytfA0aNBXqsAb3NPbidi%2BxV5L0jFtaWceLDwqwRWLK%2BcrWa98Oe%2BSWNIL5FZeodFwjm9nGLFJucb2s%2FrwyReJGLLB7E7GSPhtCuTh76Y503qIPb%2BEdbxiWTcjnKpSr5mTwkM7lFVWyclDy1R3iHuES6Vei4ETMInqW%2BQvYwDPSGuteepsAM78vCyy188v2G8jRcUCNWW68Rwwx5OpyByDpMsmIhisyOvFLen6LvdWC2GAOUHC5YLIHxl4hL0BNfSgmhb4ElXR2nNu0JedEXI81LHOtqx4GXKcvTM9crppXNCjbTbpzJs9joWsj9mnZPdKauCZnz99WFZycZEqOQBWtooVLmExGhRrkNPVjTDRmfW%2BBjqkAQvT1Cexr0HFMKoeVgoeTMVMgThBfH5SQCTcd%2FPRCJ0xgzW%2BxEdOYSJsjT5UnqKdQMXGIt3IHnGoC0F7RpzbBlOcYHJtXbtvKvhRIac4AMyS9IVO98UDjsLeLGtPHPN5%2FbIVhVlkPnn7NtXNUVv%2BSq1eMJlAVVKhCChgwZTlgHWm1mlfvZv%2F2XjjE0MQ99xToQ%2BeEPrApRNZ4kVWzSUo3wpVziNA&X-Amz-Signature=6090c1351a1435b4ef8d286e90e0c1e67d19444003e75eb92e1612e7790f5e00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656I4JHEH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD9LdFUnb8Httz1675Ts%2BXRAmGYcMwL%2FG7qfKPIgbQEIgIhAJ11GckqrYEmo4ylDcDjngKNvpBktfeclU666qt03k5BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5%2BlzfkuZMY5CKmWYq3APJpJH6WYLrL9TTO%2B2JLgod3I0dbUa4HIgisG%2BVsMaNTdW8rtBmJtnsxWmi54W14rdrvR9Vo73scZUdCF9okDEso9czSJLpgwlf3gBCLW3iUz8sgAm6j77XcwIocFIgx9KUirHnsQ%2FNnpUhrwKIJHkmTuH4jTNU53QRX%2Bs2Un1s8T7NisMBWwPkZJmxA55bHmiqyz5bF%2F2t8nQZUwCAVcNfqrId14O797ziTAAFsCNg52XNiv66Vewt3TS9yIR2XLmdZFhrjWkxeBu84dyASFtytfA0aNBXqsAb3NPbidi%2BxV5L0jFtaWceLDwqwRWLK%2BcrWa98Oe%2BSWNIL5FZeodFwjm9nGLFJucb2s%2FrwyReJGLLB7E7GSPhtCuTh76Y503qIPb%2BEdbxiWTcjnKpSr5mTwkM7lFVWyclDy1R3iHuES6Vei4ETMInqW%2BQvYwDPSGuteepsAM78vCyy188v2G8jRcUCNWW68Rwwx5OpyByDpMsmIhisyOvFLen6LvdWC2GAOUHC5YLIHxl4hL0BNfSgmhb4ElXR2nNu0JedEXI81LHOtqx4GXKcvTM9crppXNCjbTbpzJs9joWsj9mnZPdKauCZnz99WFZycZEqOQBWtooVLmExGhRrkNPVjTDRmfW%2BBjqkAQvT1Cexr0HFMKoeVgoeTMVMgThBfH5SQCTcd%2FPRCJ0xgzW%2BxEdOYSJsjT5UnqKdQMXGIt3IHnGoC0F7RpzbBlOcYHJtXbtvKvhRIac4AMyS9IVO98UDjsLeLGtPHPN5%2FbIVhVlkPnn7NtXNUVv%2BSq1eMJlAVVKhCChgwZTlgHWm1mlfvZv%2F2XjjE0MQ99xToQ%2BeEPrApRNZ4kVWzSUo3wpVziNA&X-Amz-Signature=205a0bb776b9e7cc963e105d60c03e8d9c98b055f7774eca4baf67145f63cadd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656I4JHEH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD9LdFUnb8Httz1675Ts%2BXRAmGYcMwL%2FG7qfKPIgbQEIgIhAJ11GckqrYEmo4ylDcDjngKNvpBktfeclU666qt03k5BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5%2BlzfkuZMY5CKmWYq3APJpJH6WYLrL9TTO%2B2JLgod3I0dbUa4HIgisG%2BVsMaNTdW8rtBmJtnsxWmi54W14rdrvR9Vo73scZUdCF9okDEso9czSJLpgwlf3gBCLW3iUz8sgAm6j77XcwIocFIgx9KUirHnsQ%2FNnpUhrwKIJHkmTuH4jTNU53QRX%2Bs2Un1s8T7NisMBWwPkZJmxA55bHmiqyz5bF%2F2t8nQZUwCAVcNfqrId14O797ziTAAFsCNg52XNiv66Vewt3TS9yIR2XLmdZFhrjWkxeBu84dyASFtytfA0aNBXqsAb3NPbidi%2BxV5L0jFtaWceLDwqwRWLK%2BcrWa98Oe%2BSWNIL5FZeodFwjm9nGLFJucb2s%2FrwyReJGLLB7E7GSPhtCuTh76Y503qIPb%2BEdbxiWTcjnKpSr5mTwkM7lFVWyclDy1R3iHuES6Vei4ETMInqW%2BQvYwDPSGuteepsAM78vCyy188v2G8jRcUCNWW68Rwwx5OpyByDpMsmIhisyOvFLen6LvdWC2GAOUHC5YLIHxl4hL0BNfSgmhb4ElXR2nNu0JedEXI81LHOtqx4GXKcvTM9crppXNCjbTbpzJs9joWsj9mnZPdKauCZnz99WFZycZEqOQBWtooVLmExGhRrkNPVjTDRmfW%2BBjqkAQvT1Cexr0HFMKoeVgoeTMVMgThBfH5SQCTcd%2FPRCJ0xgzW%2BxEdOYSJsjT5UnqKdQMXGIt3IHnGoC0F7RpzbBlOcYHJtXbtvKvhRIac4AMyS9IVO98UDjsLeLGtPHPN5%2FbIVhVlkPnn7NtXNUVv%2BSq1eMJlAVVKhCChgwZTlgHWm1mlfvZv%2F2XjjE0MQ99xToQ%2BeEPrApRNZ4kVWzSUo3wpVziNA&X-Amz-Signature=3c64d668db99094ef5f47d20b78c085e6a8ac789336b763599263c020f0304ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656I4JHEH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD9LdFUnb8Httz1675Ts%2BXRAmGYcMwL%2FG7qfKPIgbQEIgIhAJ11GckqrYEmo4ylDcDjngKNvpBktfeclU666qt03k5BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5%2BlzfkuZMY5CKmWYq3APJpJH6WYLrL9TTO%2B2JLgod3I0dbUa4HIgisG%2BVsMaNTdW8rtBmJtnsxWmi54W14rdrvR9Vo73scZUdCF9okDEso9czSJLpgwlf3gBCLW3iUz8sgAm6j77XcwIocFIgx9KUirHnsQ%2FNnpUhrwKIJHkmTuH4jTNU53QRX%2Bs2Un1s8T7NisMBWwPkZJmxA55bHmiqyz5bF%2F2t8nQZUwCAVcNfqrId14O797ziTAAFsCNg52XNiv66Vewt3TS9yIR2XLmdZFhrjWkxeBu84dyASFtytfA0aNBXqsAb3NPbidi%2BxV5L0jFtaWceLDwqwRWLK%2BcrWa98Oe%2BSWNIL5FZeodFwjm9nGLFJucb2s%2FrwyReJGLLB7E7GSPhtCuTh76Y503qIPb%2BEdbxiWTcjnKpSr5mTwkM7lFVWyclDy1R3iHuES6Vei4ETMInqW%2BQvYwDPSGuteepsAM78vCyy188v2G8jRcUCNWW68Rwwx5OpyByDpMsmIhisyOvFLen6LvdWC2GAOUHC5YLIHxl4hL0BNfSgmhb4ElXR2nNu0JedEXI81LHOtqx4GXKcvTM9crppXNCjbTbpzJs9joWsj9mnZPdKauCZnz99WFZycZEqOQBWtooVLmExGhRrkNPVjTDRmfW%2BBjqkAQvT1Cexr0HFMKoeVgoeTMVMgThBfH5SQCTcd%2FPRCJ0xgzW%2BxEdOYSJsjT5UnqKdQMXGIt3IHnGoC0F7RpzbBlOcYHJtXbtvKvhRIac4AMyS9IVO98UDjsLeLGtPHPN5%2FbIVhVlkPnn7NtXNUVv%2BSq1eMJlAVVKhCChgwZTlgHWm1mlfvZv%2F2XjjE0MQ99xToQ%2BeEPrApRNZ4kVWzSUo3wpVziNA&X-Amz-Signature=83bd20f84abfd605358ef838a7655e9f3c5d105b70e495d2b00d395da3a792f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656I4JHEH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD9LdFUnb8Httz1675Ts%2BXRAmGYcMwL%2FG7qfKPIgbQEIgIhAJ11GckqrYEmo4ylDcDjngKNvpBktfeclU666qt03k5BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5%2BlzfkuZMY5CKmWYq3APJpJH6WYLrL9TTO%2B2JLgod3I0dbUa4HIgisG%2BVsMaNTdW8rtBmJtnsxWmi54W14rdrvR9Vo73scZUdCF9okDEso9czSJLpgwlf3gBCLW3iUz8sgAm6j77XcwIocFIgx9KUirHnsQ%2FNnpUhrwKIJHkmTuH4jTNU53QRX%2Bs2Un1s8T7NisMBWwPkZJmxA55bHmiqyz5bF%2F2t8nQZUwCAVcNfqrId14O797ziTAAFsCNg52XNiv66Vewt3TS9yIR2XLmdZFhrjWkxeBu84dyASFtytfA0aNBXqsAb3NPbidi%2BxV5L0jFtaWceLDwqwRWLK%2BcrWa98Oe%2BSWNIL5FZeodFwjm9nGLFJucb2s%2FrwyReJGLLB7E7GSPhtCuTh76Y503qIPb%2BEdbxiWTcjnKpSr5mTwkM7lFVWyclDy1R3iHuES6Vei4ETMInqW%2BQvYwDPSGuteepsAM78vCyy188v2G8jRcUCNWW68Rwwx5OpyByDpMsmIhisyOvFLen6LvdWC2GAOUHC5YLIHxl4hL0BNfSgmhb4ElXR2nNu0JedEXI81LHOtqx4GXKcvTM9crppXNCjbTbpzJs9joWsj9mnZPdKauCZnz99WFZycZEqOQBWtooVLmExGhRrkNPVjTDRmfW%2BBjqkAQvT1Cexr0HFMKoeVgoeTMVMgThBfH5SQCTcd%2FPRCJ0xgzW%2BxEdOYSJsjT5UnqKdQMXGIt3IHnGoC0F7RpzbBlOcYHJtXbtvKvhRIac4AMyS9IVO98UDjsLeLGtPHPN5%2FbIVhVlkPnn7NtXNUVv%2BSq1eMJlAVVKhCChgwZTlgHWm1mlfvZv%2F2XjjE0MQ99xToQ%2BeEPrApRNZ4kVWzSUo3wpVziNA&X-Amz-Signature=aa66fe1c3533b80ca9ff5da58b7d4d74d6b673c7fc3cff6999c5f0281dd7ad51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656I4JHEH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD9LdFUnb8Httz1675Ts%2BXRAmGYcMwL%2FG7qfKPIgbQEIgIhAJ11GckqrYEmo4ylDcDjngKNvpBktfeclU666qt03k5BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5%2BlzfkuZMY5CKmWYq3APJpJH6WYLrL9TTO%2B2JLgod3I0dbUa4HIgisG%2BVsMaNTdW8rtBmJtnsxWmi54W14rdrvR9Vo73scZUdCF9okDEso9czSJLpgwlf3gBCLW3iUz8sgAm6j77XcwIocFIgx9KUirHnsQ%2FNnpUhrwKIJHkmTuH4jTNU53QRX%2Bs2Un1s8T7NisMBWwPkZJmxA55bHmiqyz5bF%2F2t8nQZUwCAVcNfqrId14O797ziTAAFsCNg52XNiv66Vewt3TS9yIR2XLmdZFhrjWkxeBu84dyASFtytfA0aNBXqsAb3NPbidi%2BxV5L0jFtaWceLDwqwRWLK%2BcrWa98Oe%2BSWNIL5FZeodFwjm9nGLFJucb2s%2FrwyReJGLLB7E7GSPhtCuTh76Y503qIPb%2BEdbxiWTcjnKpSr5mTwkM7lFVWyclDy1R3iHuES6Vei4ETMInqW%2BQvYwDPSGuteepsAM78vCyy188v2G8jRcUCNWW68Rwwx5OpyByDpMsmIhisyOvFLen6LvdWC2GAOUHC5YLIHxl4hL0BNfSgmhb4ElXR2nNu0JedEXI81LHOtqx4GXKcvTM9crppXNCjbTbpzJs9joWsj9mnZPdKauCZnz99WFZycZEqOQBWtooVLmExGhRrkNPVjTDRmfW%2BBjqkAQvT1Cexr0HFMKoeVgoeTMVMgThBfH5SQCTcd%2FPRCJ0xgzW%2BxEdOYSJsjT5UnqKdQMXGIt3IHnGoC0F7RpzbBlOcYHJtXbtvKvhRIac4AMyS9IVO98UDjsLeLGtPHPN5%2FbIVhVlkPnn7NtXNUVv%2BSq1eMJlAVVKhCChgwZTlgHWm1mlfvZv%2F2XjjE0MQ99xToQ%2BeEPrApRNZ4kVWzSUo3wpVziNA&X-Amz-Signature=78f254eaa9c9097dc819884bffa1cbc1f5ee83fdaac7e29233bba477d0a06c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656I4JHEH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD9LdFUnb8Httz1675Ts%2BXRAmGYcMwL%2FG7qfKPIgbQEIgIhAJ11GckqrYEmo4ylDcDjngKNvpBktfeclU666qt03k5BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5%2BlzfkuZMY5CKmWYq3APJpJH6WYLrL9TTO%2B2JLgod3I0dbUa4HIgisG%2BVsMaNTdW8rtBmJtnsxWmi54W14rdrvR9Vo73scZUdCF9okDEso9czSJLpgwlf3gBCLW3iUz8sgAm6j77XcwIocFIgx9KUirHnsQ%2FNnpUhrwKIJHkmTuH4jTNU53QRX%2Bs2Un1s8T7NisMBWwPkZJmxA55bHmiqyz5bF%2F2t8nQZUwCAVcNfqrId14O797ziTAAFsCNg52XNiv66Vewt3TS9yIR2XLmdZFhrjWkxeBu84dyASFtytfA0aNBXqsAb3NPbidi%2BxV5L0jFtaWceLDwqwRWLK%2BcrWa98Oe%2BSWNIL5FZeodFwjm9nGLFJucb2s%2FrwyReJGLLB7E7GSPhtCuTh76Y503qIPb%2BEdbxiWTcjnKpSr5mTwkM7lFVWyclDy1R3iHuES6Vei4ETMInqW%2BQvYwDPSGuteepsAM78vCyy188v2G8jRcUCNWW68Rwwx5OpyByDpMsmIhisyOvFLen6LvdWC2GAOUHC5YLIHxl4hL0BNfSgmhb4ElXR2nNu0JedEXI81LHOtqx4GXKcvTM9crppXNCjbTbpzJs9joWsj9mnZPdKauCZnz99WFZycZEqOQBWtooVLmExGhRrkNPVjTDRmfW%2BBjqkAQvT1Cexr0HFMKoeVgoeTMVMgThBfH5SQCTcd%2FPRCJ0xgzW%2BxEdOYSJsjT5UnqKdQMXGIt3IHnGoC0F7RpzbBlOcYHJtXbtvKvhRIac4AMyS9IVO98UDjsLeLGtPHPN5%2FbIVhVlkPnn7NtXNUVv%2BSq1eMJlAVVKhCChgwZTlgHWm1mlfvZv%2F2XjjE0MQ99xToQ%2BeEPrApRNZ4kVWzSUo3wpVziNA&X-Amz-Signature=198166189120c30fd583f379c70da8adad66833c02623c0f769e82e5c1994852&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656I4JHEH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD9LdFUnb8Httz1675Ts%2BXRAmGYcMwL%2FG7qfKPIgbQEIgIhAJ11GckqrYEmo4ylDcDjngKNvpBktfeclU666qt03k5BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5%2BlzfkuZMY5CKmWYq3APJpJH6WYLrL9TTO%2B2JLgod3I0dbUa4HIgisG%2BVsMaNTdW8rtBmJtnsxWmi54W14rdrvR9Vo73scZUdCF9okDEso9czSJLpgwlf3gBCLW3iUz8sgAm6j77XcwIocFIgx9KUirHnsQ%2FNnpUhrwKIJHkmTuH4jTNU53QRX%2Bs2Un1s8T7NisMBWwPkZJmxA55bHmiqyz5bF%2F2t8nQZUwCAVcNfqrId14O797ziTAAFsCNg52XNiv66Vewt3TS9yIR2XLmdZFhrjWkxeBu84dyASFtytfA0aNBXqsAb3NPbidi%2BxV5L0jFtaWceLDwqwRWLK%2BcrWa98Oe%2BSWNIL5FZeodFwjm9nGLFJucb2s%2FrwyReJGLLB7E7GSPhtCuTh76Y503qIPb%2BEdbxiWTcjnKpSr5mTwkM7lFVWyclDy1R3iHuES6Vei4ETMInqW%2BQvYwDPSGuteepsAM78vCyy188v2G8jRcUCNWW68Rwwx5OpyByDpMsmIhisyOvFLen6LvdWC2GAOUHC5YLIHxl4hL0BNfSgmhb4ElXR2nNu0JedEXI81LHOtqx4GXKcvTM9crppXNCjbTbpzJs9joWsj9mnZPdKauCZnz99WFZycZEqOQBWtooVLmExGhRrkNPVjTDRmfW%2BBjqkAQvT1Cexr0HFMKoeVgoeTMVMgThBfH5SQCTcd%2FPRCJ0xgzW%2BxEdOYSJsjT5UnqKdQMXGIt3IHnGoC0F7RpzbBlOcYHJtXbtvKvhRIac4AMyS9IVO98UDjsLeLGtPHPN5%2FbIVhVlkPnn7NtXNUVv%2BSq1eMJlAVVKhCChgwZTlgHWm1mlfvZv%2F2XjjE0MQ99xToQ%2BeEPrApRNZ4kVWzSUo3wpVziNA&X-Amz-Signature=263eccb6f4c34a37a741248113909a0064b52aef4b03eec76288e124fe694a62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EOZ4SJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2c%2FZj3271eTl3xouwHswFnsv7ns%2F1MBfZylWkRpRTHAiANWaGX4%2FRAXrfG2Oo%2FJqtfXzTRe02szOSKC1b626W9bir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BerdSVUFk5q%2Bkue5KtwDvTXL%2BO%2FDa9qpJB1ksUyZ0vjA2q1lD5u7pzxbJGhKVvfjabQWFqZ6Y3j6hEsRdGL5ygljYGvEwdXbd%2BOSv%2Bf8ODHrIeg9DtvOTRv5NaHF403iM%2Ftaq11W4ymxTUG6eWQ2GNM1lYowlgWxBrQUnNHDKsshHxhnp9k9bpRTU7eKejAHU7y5bOD65TyTNpm15X%2B9e8n9MitJ%2B9NiGenPBpgYwjgp%2BUpk%2BJSbYWXbMT%2FjikLbWvTacbQYDqrWddd3bwGV9b3MEWk7TFiIyWAF%2BcTHzi18GpLAawYGibByPZA1rdDzRRoscNLzk3pa%2FhTVTu%2BgllZPbqDLDHud16qgBh0a3GX9%2FxeVudHHHlwatVcXekRdMrrXiD7EONzwqSuVeQs1PXn8mWfamQ20sj7rUniv2sORZ7fQSfmPFGPFMRm74lCSHCKYauzPH2GV9vewhzO%2BQAb8Y8caTEE4P3INE8QsBcioON2lU3KKzkCgiUTyRVUZ%2FwQc7R2TddSlcQwnfdDEHFX2T4VUDHcRLJWCkyhMXgy%2FswpG3mwoB2RptOmJNWJ%2Bcy0E5eY64vW25Jt88PG9GT09IbPdebZUSSLCUpyG%2FPnfLP%2Bm9Ln4JZLS%2F%2FAZcHn%2FplcQkgtYfjeZbcgwwf6twAY6pgEJPKHz8QEdjVqyoF7J7rqqK0jbAowJyBw1I2y3M4FNjBqEl88OIczno5hKVQcHe1ucywMZsIAL6E2%2FBRCz9%2BWrIn%2BHMsEHTDz%2FmgyuJVyljQZBkgbhUztTj4onVTPmYtxC5EOCaJ0Rp3ZB4hZmMwZK4pOgcItTfRWWcpid3pUpMrrtvnQZVCH0%2BquoWEE%2F8t5yYdCkxNL%2Fd1UiI3jJZiepwZgo891p&X-Amz-Signature=5b6a884fab234fe6679342e04453f9b4c3c619899f056b2c1371c5dcd88b78aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EOZ4SJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2c%2FZj3271eTl3xouwHswFnsv7ns%2F1MBfZylWkRpRTHAiANWaGX4%2FRAXrfG2Oo%2FJqtfXzTRe02szOSKC1b626W9bir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BerdSVUFk5q%2Bkue5KtwDvTXL%2BO%2FDa9qpJB1ksUyZ0vjA2q1lD5u7pzxbJGhKVvfjabQWFqZ6Y3j6hEsRdGL5ygljYGvEwdXbd%2BOSv%2Bf8ODHrIeg9DtvOTRv5NaHF403iM%2Ftaq11W4ymxTUG6eWQ2GNM1lYowlgWxBrQUnNHDKsshHxhnp9k9bpRTU7eKejAHU7y5bOD65TyTNpm15X%2B9e8n9MitJ%2B9NiGenPBpgYwjgp%2BUpk%2BJSbYWXbMT%2FjikLbWvTacbQYDqrWddd3bwGV9b3MEWk7TFiIyWAF%2BcTHzi18GpLAawYGibByPZA1rdDzRRoscNLzk3pa%2FhTVTu%2BgllZPbqDLDHud16qgBh0a3GX9%2FxeVudHHHlwatVcXekRdMrrXiD7EONzwqSuVeQs1PXn8mWfamQ20sj7rUniv2sORZ7fQSfmPFGPFMRm74lCSHCKYauzPH2GV9vewhzO%2BQAb8Y8caTEE4P3INE8QsBcioON2lU3KKzkCgiUTyRVUZ%2FwQc7R2TddSlcQwnfdDEHFX2T4VUDHcRLJWCkyhMXgy%2FswpG3mwoB2RptOmJNWJ%2Bcy0E5eY64vW25Jt88PG9GT09IbPdebZUSSLCUpyG%2FPnfLP%2Bm9Ln4JZLS%2F%2FAZcHn%2FplcQkgtYfjeZbcgwwf6twAY6pgEJPKHz8QEdjVqyoF7J7rqqK0jbAowJyBw1I2y3M4FNjBqEl88OIczno5hKVQcHe1ucywMZsIAL6E2%2FBRCz9%2BWrIn%2BHMsEHTDz%2FmgyuJVyljQZBkgbhUztTj4onVTPmYtxC5EOCaJ0Rp3ZB4hZmMwZK4pOgcItTfRWWcpid3pUpMrrtvnQZVCH0%2BquoWEE%2F8t5yYdCkxNL%2Fd1UiI3jJZiepwZgo891p&X-Amz-Signature=5345e2cba5b03258b18d9b5ff5415b4af7ab2dd64fb680d1c4dffff794c89cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EOZ4SJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2c%2FZj3271eTl3xouwHswFnsv7ns%2F1MBfZylWkRpRTHAiANWaGX4%2FRAXrfG2Oo%2FJqtfXzTRe02szOSKC1b626W9bir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BerdSVUFk5q%2Bkue5KtwDvTXL%2BO%2FDa9qpJB1ksUyZ0vjA2q1lD5u7pzxbJGhKVvfjabQWFqZ6Y3j6hEsRdGL5ygljYGvEwdXbd%2BOSv%2Bf8ODHrIeg9DtvOTRv5NaHF403iM%2Ftaq11W4ymxTUG6eWQ2GNM1lYowlgWxBrQUnNHDKsshHxhnp9k9bpRTU7eKejAHU7y5bOD65TyTNpm15X%2B9e8n9MitJ%2B9NiGenPBpgYwjgp%2BUpk%2BJSbYWXbMT%2FjikLbWvTacbQYDqrWddd3bwGV9b3MEWk7TFiIyWAF%2BcTHzi18GpLAawYGibByPZA1rdDzRRoscNLzk3pa%2FhTVTu%2BgllZPbqDLDHud16qgBh0a3GX9%2FxeVudHHHlwatVcXekRdMrrXiD7EONzwqSuVeQs1PXn8mWfamQ20sj7rUniv2sORZ7fQSfmPFGPFMRm74lCSHCKYauzPH2GV9vewhzO%2BQAb8Y8caTEE4P3INE8QsBcioON2lU3KKzkCgiUTyRVUZ%2FwQc7R2TddSlcQwnfdDEHFX2T4VUDHcRLJWCkyhMXgy%2FswpG3mwoB2RptOmJNWJ%2Bcy0E5eY64vW25Jt88PG9GT09IbPdebZUSSLCUpyG%2FPnfLP%2Bm9Ln4JZLS%2F%2FAZcHn%2FplcQkgtYfjeZbcgwwf6twAY6pgEJPKHz8QEdjVqyoF7J7rqqK0jbAowJyBw1I2y3M4FNjBqEl88OIczno5hKVQcHe1ucywMZsIAL6E2%2FBRCz9%2BWrIn%2BHMsEHTDz%2FmgyuJVyljQZBkgbhUztTj4onVTPmYtxC5EOCaJ0Rp3ZB4hZmMwZK4pOgcItTfRWWcpid3pUpMrrtvnQZVCH0%2BquoWEE%2F8t5yYdCkxNL%2Fd1UiI3jJZiepwZgo891p&X-Amz-Signature=1c31819606be1a2347861275556581576ccc3ffcf6c925c1d711d9c4aafe9676&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EOZ4SJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2c%2FZj3271eTl3xouwHswFnsv7ns%2F1MBfZylWkRpRTHAiANWaGX4%2FRAXrfG2Oo%2FJqtfXzTRe02szOSKC1b626W9bir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BerdSVUFk5q%2Bkue5KtwDvTXL%2BO%2FDa9qpJB1ksUyZ0vjA2q1lD5u7pzxbJGhKVvfjabQWFqZ6Y3j6hEsRdGL5ygljYGvEwdXbd%2BOSv%2Bf8ODHrIeg9DtvOTRv5NaHF403iM%2Ftaq11W4ymxTUG6eWQ2GNM1lYowlgWxBrQUnNHDKsshHxhnp9k9bpRTU7eKejAHU7y5bOD65TyTNpm15X%2B9e8n9MitJ%2B9NiGenPBpgYwjgp%2BUpk%2BJSbYWXbMT%2FjikLbWvTacbQYDqrWddd3bwGV9b3MEWk7TFiIyWAF%2BcTHzi18GpLAawYGibByPZA1rdDzRRoscNLzk3pa%2FhTVTu%2BgllZPbqDLDHud16qgBh0a3GX9%2FxeVudHHHlwatVcXekRdMrrXiD7EONzwqSuVeQs1PXn8mWfamQ20sj7rUniv2sORZ7fQSfmPFGPFMRm74lCSHCKYauzPH2GV9vewhzO%2BQAb8Y8caTEE4P3INE8QsBcioON2lU3KKzkCgiUTyRVUZ%2FwQc7R2TddSlcQwnfdDEHFX2T4VUDHcRLJWCkyhMXgy%2FswpG3mwoB2RptOmJNWJ%2Bcy0E5eY64vW25Jt88PG9GT09IbPdebZUSSLCUpyG%2FPnfLP%2Bm9Ln4JZLS%2F%2FAZcHn%2FplcQkgtYfjeZbcgwwf6twAY6pgEJPKHz8QEdjVqyoF7J7rqqK0jbAowJyBw1I2y3M4FNjBqEl88OIczno5hKVQcHe1ucywMZsIAL6E2%2FBRCz9%2BWrIn%2BHMsEHTDz%2FmgyuJVyljQZBkgbhUztTj4onVTPmYtxC5EOCaJ0Rp3ZB4hZmMwZK4pOgcItTfRWWcpid3pUpMrrtvnQZVCH0%2BquoWEE%2F8t5yYdCkxNL%2Fd1UiI3jJZiepwZgo891p&X-Amz-Signature=74d7b8f6903982d40f96c57b091e9b83144db10979e811da916717c6206b6390&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EOZ4SJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2c%2FZj3271eTl3xouwHswFnsv7ns%2F1MBfZylWkRpRTHAiANWaGX4%2FRAXrfG2Oo%2FJqtfXzTRe02szOSKC1b626W9bir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BerdSVUFk5q%2Bkue5KtwDvTXL%2BO%2FDa9qpJB1ksUyZ0vjA2q1lD5u7pzxbJGhKVvfjabQWFqZ6Y3j6hEsRdGL5ygljYGvEwdXbd%2BOSv%2Bf8ODHrIeg9DtvOTRv5NaHF403iM%2Ftaq11W4ymxTUG6eWQ2GNM1lYowlgWxBrQUnNHDKsshHxhnp9k9bpRTU7eKejAHU7y5bOD65TyTNpm15X%2B9e8n9MitJ%2B9NiGenPBpgYwjgp%2BUpk%2BJSbYWXbMT%2FjikLbWvTacbQYDqrWddd3bwGV9b3MEWk7TFiIyWAF%2BcTHzi18GpLAawYGibByPZA1rdDzRRoscNLzk3pa%2FhTVTu%2BgllZPbqDLDHud16qgBh0a3GX9%2FxeVudHHHlwatVcXekRdMrrXiD7EONzwqSuVeQs1PXn8mWfamQ20sj7rUniv2sORZ7fQSfmPFGPFMRm74lCSHCKYauzPH2GV9vewhzO%2BQAb8Y8caTEE4P3INE8QsBcioON2lU3KKzkCgiUTyRVUZ%2FwQc7R2TddSlcQwnfdDEHFX2T4VUDHcRLJWCkyhMXgy%2FswpG3mwoB2RptOmJNWJ%2Bcy0E5eY64vW25Jt88PG9GT09IbPdebZUSSLCUpyG%2FPnfLP%2Bm9Ln4JZLS%2F%2FAZcHn%2FplcQkgtYfjeZbcgwwf6twAY6pgEJPKHz8QEdjVqyoF7J7rqqK0jbAowJyBw1I2y3M4FNjBqEl88OIczno5hKVQcHe1ucywMZsIAL6E2%2FBRCz9%2BWrIn%2BHMsEHTDz%2FmgyuJVyljQZBkgbhUztTj4onVTPmYtxC5EOCaJ0Rp3ZB4hZmMwZK4pOgcItTfRWWcpid3pUpMrrtvnQZVCH0%2BquoWEE%2F8t5yYdCkxNL%2Fd1UiI3jJZiepwZgo891p&X-Amz-Signature=3505cd69dab2688e0b95a899ad48770bcbcacab71eecf717e8ddde1b3565a068&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EOZ4SJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2c%2FZj3271eTl3xouwHswFnsv7ns%2F1MBfZylWkRpRTHAiANWaGX4%2FRAXrfG2Oo%2FJqtfXzTRe02szOSKC1b626W9bir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BerdSVUFk5q%2Bkue5KtwDvTXL%2BO%2FDa9qpJB1ksUyZ0vjA2q1lD5u7pzxbJGhKVvfjabQWFqZ6Y3j6hEsRdGL5ygljYGvEwdXbd%2BOSv%2Bf8ODHrIeg9DtvOTRv5NaHF403iM%2Ftaq11W4ymxTUG6eWQ2GNM1lYowlgWxBrQUnNHDKsshHxhnp9k9bpRTU7eKejAHU7y5bOD65TyTNpm15X%2B9e8n9MitJ%2B9NiGenPBpgYwjgp%2BUpk%2BJSbYWXbMT%2FjikLbWvTacbQYDqrWddd3bwGV9b3MEWk7TFiIyWAF%2BcTHzi18GpLAawYGibByPZA1rdDzRRoscNLzk3pa%2FhTVTu%2BgllZPbqDLDHud16qgBh0a3GX9%2FxeVudHHHlwatVcXekRdMrrXiD7EONzwqSuVeQs1PXn8mWfamQ20sj7rUniv2sORZ7fQSfmPFGPFMRm74lCSHCKYauzPH2GV9vewhzO%2BQAb8Y8caTEE4P3INE8QsBcioON2lU3KKzkCgiUTyRVUZ%2FwQc7R2TddSlcQwnfdDEHFX2T4VUDHcRLJWCkyhMXgy%2FswpG3mwoB2RptOmJNWJ%2Bcy0E5eY64vW25Jt88PG9GT09IbPdebZUSSLCUpyG%2FPnfLP%2Bm9Ln4JZLS%2F%2FAZcHn%2FplcQkgtYfjeZbcgwwf6twAY6pgEJPKHz8QEdjVqyoF7J7rqqK0jbAowJyBw1I2y3M4FNjBqEl88OIczno5hKVQcHe1ucywMZsIAL6E2%2FBRCz9%2BWrIn%2BHMsEHTDz%2FmgyuJVyljQZBkgbhUztTj4onVTPmYtxC5EOCaJ0Rp3ZB4hZmMwZK4pOgcItTfRWWcpid3pUpMrrtvnQZVCH0%2BquoWEE%2F8t5yYdCkxNL%2Fd1UiI3jJZiepwZgo891p&X-Amz-Signature=f3b2f1b45b1611cdd001aeb0b74c56bfe2fac1bbef3b1f8d209f12f0cadc730a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EOZ4SJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2c%2FZj3271eTl3xouwHswFnsv7ns%2F1MBfZylWkRpRTHAiANWaGX4%2FRAXrfG2Oo%2FJqtfXzTRe02szOSKC1b626W9bir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BerdSVUFk5q%2Bkue5KtwDvTXL%2BO%2FDa9qpJB1ksUyZ0vjA2q1lD5u7pzxbJGhKVvfjabQWFqZ6Y3j6hEsRdGL5ygljYGvEwdXbd%2BOSv%2Bf8ODHrIeg9DtvOTRv5NaHF403iM%2Ftaq11W4ymxTUG6eWQ2GNM1lYowlgWxBrQUnNHDKsshHxhnp9k9bpRTU7eKejAHU7y5bOD65TyTNpm15X%2B9e8n9MitJ%2B9NiGenPBpgYwjgp%2BUpk%2BJSbYWXbMT%2FjikLbWvTacbQYDqrWddd3bwGV9b3MEWk7TFiIyWAF%2BcTHzi18GpLAawYGibByPZA1rdDzRRoscNLzk3pa%2FhTVTu%2BgllZPbqDLDHud16qgBh0a3GX9%2FxeVudHHHlwatVcXekRdMrrXiD7EONzwqSuVeQs1PXn8mWfamQ20sj7rUniv2sORZ7fQSfmPFGPFMRm74lCSHCKYauzPH2GV9vewhzO%2BQAb8Y8caTEE4P3INE8QsBcioON2lU3KKzkCgiUTyRVUZ%2FwQc7R2TddSlcQwnfdDEHFX2T4VUDHcRLJWCkyhMXgy%2FswpG3mwoB2RptOmJNWJ%2Bcy0E5eY64vW25Jt88PG9GT09IbPdebZUSSLCUpyG%2FPnfLP%2Bm9Ln4JZLS%2F%2FAZcHn%2FplcQkgtYfjeZbcgwwf6twAY6pgEJPKHz8QEdjVqyoF7J7rqqK0jbAowJyBw1I2y3M4FNjBqEl88OIczno5hKVQcHe1ucywMZsIAL6E2%2FBRCz9%2BWrIn%2BHMsEHTDz%2FmgyuJVyljQZBkgbhUztTj4onVTPmYtxC5EOCaJ0Rp3ZB4hZmMwZK4pOgcItTfRWWcpid3pUpMrrtvnQZVCH0%2BquoWEE%2F8t5yYdCkxNL%2Fd1UiI3jJZiepwZgo891p&X-Amz-Signature=549da4c7fbbdd4d815842168d211de2d3d7abcb5ae869fadc7887226674bcd7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EOZ4SJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2c%2FZj3271eTl3xouwHswFnsv7ns%2F1MBfZylWkRpRTHAiANWaGX4%2FRAXrfG2Oo%2FJqtfXzTRe02szOSKC1b626W9bir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BerdSVUFk5q%2Bkue5KtwDvTXL%2BO%2FDa9qpJB1ksUyZ0vjA2q1lD5u7pzxbJGhKVvfjabQWFqZ6Y3j6hEsRdGL5ygljYGvEwdXbd%2BOSv%2Bf8ODHrIeg9DtvOTRv5NaHF403iM%2Ftaq11W4ymxTUG6eWQ2GNM1lYowlgWxBrQUnNHDKsshHxhnp9k9bpRTU7eKejAHU7y5bOD65TyTNpm15X%2B9e8n9MitJ%2B9NiGenPBpgYwjgp%2BUpk%2BJSbYWXbMT%2FjikLbWvTacbQYDqrWddd3bwGV9b3MEWk7TFiIyWAF%2BcTHzi18GpLAawYGibByPZA1rdDzRRoscNLzk3pa%2FhTVTu%2BgllZPbqDLDHud16qgBh0a3GX9%2FxeVudHHHlwatVcXekRdMrrXiD7EONzwqSuVeQs1PXn8mWfamQ20sj7rUniv2sORZ7fQSfmPFGPFMRm74lCSHCKYauzPH2GV9vewhzO%2BQAb8Y8caTEE4P3INE8QsBcioON2lU3KKzkCgiUTyRVUZ%2FwQc7R2TddSlcQwnfdDEHFX2T4VUDHcRLJWCkyhMXgy%2FswpG3mwoB2RptOmJNWJ%2Bcy0E5eY64vW25Jt88PG9GT09IbPdebZUSSLCUpyG%2FPnfLP%2Bm9Ln4JZLS%2F%2FAZcHn%2FplcQkgtYfjeZbcgwwf6twAY6pgEJPKHz8QEdjVqyoF7J7rqqK0jbAowJyBw1I2y3M4FNjBqEl88OIczno5hKVQcHe1ucywMZsIAL6E2%2FBRCz9%2BWrIn%2BHMsEHTDz%2FmgyuJVyljQZBkgbhUztTj4onVTPmYtxC5EOCaJ0Rp3ZB4hZmMwZK4pOgcItTfRWWcpid3pUpMrrtvnQZVCH0%2BquoWEE%2F8t5yYdCkxNL%2Fd1UiI3jJZiepwZgo891p&X-Amz-Signature=33c3367aa291c31ca55063f9c59f58c6453620ec54edecfc53e61b96a8dd1a03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

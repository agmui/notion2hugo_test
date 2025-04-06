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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7752T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3r%2BywhcD12qGFh4MNUO481R%2FPSAxWfx7DpyfrcoFaWwIgFQ7hdu4v65x37bS99YJQ8kAxPQTI2PCeBPzy4VPNkUAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCSY8Gh393nWCzxN2SrcAyge5d3sp5DLW7X3ZI21dNsGh1QF4vP77hxaptG4VRTFhMFcxhjGNly38jQmwOuAjxlejrZYG%2F4%2BPJlmljZJ2IkHLzCYTBCNMrn89%2BiHGraQ72%2FRU8qXZgVvMnob6iRTg0uzOAzT7Ea747%2Bv6OJcODTEg9L%2Fux%2FUrvxTnysdBnqXeZ0e%2FE8W4xNxo7eXCwRfg1JtjVPTjbv%2FxEtoQc8t%2B%2FbuKqEXs78NAXQz6XybudGfzyOCUJ%2Fg9GdcA7QG78nsAPeCyKbpy9nGsrRZHufFtBm3tC3GDgX4op7%2BlziO2XGQd39uEjVXNmd7aZY61VOH0BLP3OQrccSshDkY1DiIEy2DB9mhmJfPVTi8pSdzVZra%2FvswTq3vRfQLWzslW2PYHaxJmnz1quwtmwEWY96FZ%2BjQmfit7dA1SJzR3RKjwPXy9HuH0QCfd%2FPK63KuOHggVE3a%2FEsU%2BVSKOEMV%2B%2B40TjYPk6Yht%2FlDZMOSHqJsDM%2FsiyVtjgdoD9nhI%2BVB2%2FWiQWGHNRSC%2FjJhZKlUUsAj0BRZbDAKinJ6tOM6Q%2F%2F54NdN9reAiGMdPcb%2FUSOMoGZpZfsR5Wau%2BpHCwlablbd1Wx8gAAuWIaaxzSOil7aEZwxJRZ%2FCdZJHPd0ctlqzMJT1y78GOqUBLXmUn3L9JaTnhxM4T79dh5qELEg8Zu2lO%2B3iRUJpW1Za9xlxci2abNoxS5B8y6kEYqZLQ7SbPgxzExMii5EgI8pw30y5eYV48g8vbM0zpbQKdx09j%2FvWjesuDJYnZJI%2F8armbTSFLOIvR9%2BvMtUmsMVju1BYmMakq71ROz3ZttZUJKVxwPWUlhkCKeN9hQN8akB1wP5btidnp0ipU5wK%2Bs7GE4QW&X-Amz-Signature=2236828137759f170343196dd7c557ef1b3f5a6ab19092b738d3d2dab00b5c02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7752T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3r%2BywhcD12qGFh4MNUO481R%2FPSAxWfx7DpyfrcoFaWwIgFQ7hdu4v65x37bS99YJQ8kAxPQTI2PCeBPzy4VPNkUAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCSY8Gh393nWCzxN2SrcAyge5d3sp5DLW7X3ZI21dNsGh1QF4vP77hxaptG4VRTFhMFcxhjGNly38jQmwOuAjxlejrZYG%2F4%2BPJlmljZJ2IkHLzCYTBCNMrn89%2BiHGraQ72%2FRU8qXZgVvMnob6iRTg0uzOAzT7Ea747%2Bv6OJcODTEg9L%2Fux%2FUrvxTnysdBnqXeZ0e%2FE8W4xNxo7eXCwRfg1JtjVPTjbv%2FxEtoQc8t%2B%2FbuKqEXs78NAXQz6XybudGfzyOCUJ%2Fg9GdcA7QG78nsAPeCyKbpy9nGsrRZHufFtBm3tC3GDgX4op7%2BlziO2XGQd39uEjVXNmd7aZY61VOH0BLP3OQrccSshDkY1DiIEy2DB9mhmJfPVTi8pSdzVZra%2FvswTq3vRfQLWzslW2PYHaxJmnz1quwtmwEWY96FZ%2BjQmfit7dA1SJzR3RKjwPXy9HuH0QCfd%2FPK63KuOHggVE3a%2FEsU%2BVSKOEMV%2B%2B40TjYPk6Yht%2FlDZMOSHqJsDM%2FsiyVtjgdoD9nhI%2BVB2%2FWiQWGHNRSC%2FjJhZKlUUsAj0BRZbDAKinJ6tOM6Q%2F%2F54NdN9reAiGMdPcb%2FUSOMoGZpZfsR5Wau%2BpHCwlablbd1Wx8gAAuWIaaxzSOil7aEZwxJRZ%2FCdZJHPd0ctlqzMJT1y78GOqUBLXmUn3L9JaTnhxM4T79dh5qELEg8Zu2lO%2B3iRUJpW1Za9xlxci2abNoxS5B8y6kEYqZLQ7SbPgxzExMii5EgI8pw30y5eYV48g8vbM0zpbQKdx09j%2FvWjesuDJYnZJI%2F8armbTSFLOIvR9%2BvMtUmsMVju1BYmMakq71ROz3ZttZUJKVxwPWUlhkCKeN9hQN8akB1wP5btidnp0ipU5wK%2Bs7GE4QW&X-Amz-Signature=ef2756542c5646f7a4b83ec3079be419165a53e42d842d09c143def02eab1a86&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7752T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3r%2BywhcD12qGFh4MNUO481R%2FPSAxWfx7DpyfrcoFaWwIgFQ7hdu4v65x37bS99YJQ8kAxPQTI2PCeBPzy4VPNkUAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCSY8Gh393nWCzxN2SrcAyge5d3sp5DLW7X3ZI21dNsGh1QF4vP77hxaptG4VRTFhMFcxhjGNly38jQmwOuAjxlejrZYG%2F4%2BPJlmljZJ2IkHLzCYTBCNMrn89%2BiHGraQ72%2FRU8qXZgVvMnob6iRTg0uzOAzT7Ea747%2Bv6OJcODTEg9L%2Fux%2FUrvxTnysdBnqXeZ0e%2FE8W4xNxo7eXCwRfg1JtjVPTjbv%2FxEtoQc8t%2B%2FbuKqEXs78NAXQz6XybudGfzyOCUJ%2Fg9GdcA7QG78nsAPeCyKbpy9nGsrRZHufFtBm3tC3GDgX4op7%2BlziO2XGQd39uEjVXNmd7aZY61VOH0BLP3OQrccSshDkY1DiIEy2DB9mhmJfPVTi8pSdzVZra%2FvswTq3vRfQLWzslW2PYHaxJmnz1quwtmwEWY96FZ%2BjQmfit7dA1SJzR3RKjwPXy9HuH0QCfd%2FPK63KuOHggVE3a%2FEsU%2BVSKOEMV%2B%2B40TjYPk6Yht%2FlDZMOSHqJsDM%2FsiyVtjgdoD9nhI%2BVB2%2FWiQWGHNRSC%2FjJhZKlUUsAj0BRZbDAKinJ6tOM6Q%2F%2F54NdN9reAiGMdPcb%2FUSOMoGZpZfsR5Wau%2BpHCwlablbd1Wx8gAAuWIaaxzSOil7aEZwxJRZ%2FCdZJHPd0ctlqzMJT1y78GOqUBLXmUn3L9JaTnhxM4T79dh5qELEg8Zu2lO%2B3iRUJpW1Za9xlxci2abNoxS5B8y6kEYqZLQ7SbPgxzExMii5EgI8pw30y5eYV48g8vbM0zpbQKdx09j%2FvWjesuDJYnZJI%2F8armbTSFLOIvR9%2BvMtUmsMVju1BYmMakq71ROz3ZttZUJKVxwPWUlhkCKeN9hQN8akB1wP5btidnp0ipU5wK%2Bs7GE4QW&X-Amz-Signature=aaaa965c5cf07337af8f005ad81664f43850f036d0c60476fda488f79e2cf2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7752T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3r%2BywhcD12qGFh4MNUO481R%2FPSAxWfx7DpyfrcoFaWwIgFQ7hdu4v65x37bS99YJQ8kAxPQTI2PCeBPzy4VPNkUAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCSY8Gh393nWCzxN2SrcAyge5d3sp5DLW7X3ZI21dNsGh1QF4vP77hxaptG4VRTFhMFcxhjGNly38jQmwOuAjxlejrZYG%2F4%2BPJlmljZJ2IkHLzCYTBCNMrn89%2BiHGraQ72%2FRU8qXZgVvMnob6iRTg0uzOAzT7Ea747%2Bv6OJcODTEg9L%2Fux%2FUrvxTnysdBnqXeZ0e%2FE8W4xNxo7eXCwRfg1JtjVPTjbv%2FxEtoQc8t%2B%2FbuKqEXs78NAXQz6XybudGfzyOCUJ%2Fg9GdcA7QG78nsAPeCyKbpy9nGsrRZHufFtBm3tC3GDgX4op7%2BlziO2XGQd39uEjVXNmd7aZY61VOH0BLP3OQrccSshDkY1DiIEy2DB9mhmJfPVTi8pSdzVZra%2FvswTq3vRfQLWzslW2PYHaxJmnz1quwtmwEWY96FZ%2BjQmfit7dA1SJzR3RKjwPXy9HuH0QCfd%2FPK63KuOHggVE3a%2FEsU%2BVSKOEMV%2B%2B40TjYPk6Yht%2FlDZMOSHqJsDM%2FsiyVtjgdoD9nhI%2BVB2%2FWiQWGHNRSC%2FjJhZKlUUsAj0BRZbDAKinJ6tOM6Q%2F%2F54NdN9reAiGMdPcb%2FUSOMoGZpZfsR5Wau%2BpHCwlablbd1Wx8gAAuWIaaxzSOil7aEZwxJRZ%2FCdZJHPd0ctlqzMJT1y78GOqUBLXmUn3L9JaTnhxM4T79dh5qELEg8Zu2lO%2B3iRUJpW1Za9xlxci2abNoxS5B8y6kEYqZLQ7SbPgxzExMii5EgI8pw30y5eYV48g8vbM0zpbQKdx09j%2FvWjesuDJYnZJI%2F8armbTSFLOIvR9%2BvMtUmsMVju1BYmMakq71ROz3ZttZUJKVxwPWUlhkCKeN9hQN8akB1wP5btidnp0ipU5wK%2Bs7GE4QW&X-Amz-Signature=0f1805cc8ad1e3300ee4d83ddf91ca658fe61544c0e92e3e692ddd246ab977df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7752T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3r%2BywhcD12qGFh4MNUO481R%2FPSAxWfx7DpyfrcoFaWwIgFQ7hdu4v65x37bS99YJQ8kAxPQTI2PCeBPzy4VPNkUAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCSY8Gh393nWCzxN2SrcAyge5d3sp5DLW7X3ZI21dNsGh1QF4vP77hxaptG4VRTFhMFcxhjGNly38jQmwOuAjxlejrZYG%2F4%2BPJlmljZJ2IkHLzCYTBCNMrn89%2BiHGraQ72%2FRU8qXZgVvMnob6iRTg0uzOAzT7Ea747%2Bv6OJcODTEg9L%2Fux%2FUrvxTnysdBnqXeZ0e%2FE8W4xNxo7eXCwRfg1JtjVPTjbv%2FxEtoQc8t%2B%2FbuKqEXs78NAXQz6XybudGfzyOCUJ%2Fg9GdcA7QG78nsAPeCyKbpy9nGsrRZHufFtBm3tC3GDgX4op7%2BlziO2XGQd39uEjVXNmd7aZY61VOH0BLP3OQrccSshDkY1DiIEy2DB9mhmJfPVTi8pSdzVZra%2FvswTq3vRfQLWzslW2PYHaxJmnz1quwtmwEWY96FZ%2BjQmfit7dA1SJzR3RKjwPXy9HuH0QCfd%2FPK63KuOHggVE3a%2FEsU%2BVSKOEMV%2B%2B40TjYPk6Yht%2FlDZMOSHqJsDM%2FsiyVtjgdoD9nhI%2BVB2%2FWiQWGHNRSC%2FjJhZKlUUsAj0BRZbDAKinJ6tOM6Q%2F%2F54NdN9reAiGMdPcb%2FUSOMoGZpZfsR5Wau%2BpHCwlablbd1Wx8gAAuWIaaxzSOil7aEZwxJRZ%2FCdZJHPd0ctlqzMJT1y78GOqUBLXmUn3L9JaTnhxM4T79dh5qELEg8Zu2lO%2B3iRUJpW1Za9xlxci2abNoxS5B8y6kEYqZLQ7SbPgxzExMii5EgI8pw30y5eYV48g8vbM0zpbQKdx09j%2FvWjesuDJYnZJI%2F8armbTSFLOIvR9%2BvMtUmsMVju1BYmMakq71ROz3ZttZUJKVxwPWUlhkCKeN9hQN8akB1wP5btidnp0ipU5wK%2Bs7GE4QW&X-Amz-Signature=91fd6a95b394b9be3cb3305edf5802847e826ed994f25e568f4419d939b08cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7752T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3r%2BywhcD12qGFh4MNUO481R%2FPSAxWfx7DpyfrcoFaWwIgFQ7hdu4v65x37bS99YJQ8kAxPQTI2PCeBPzy4VPNkUAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCSY8Gh393nWCzxN2SrcAyge5d3sp5DLW7X3ZI21dNsGh1QF4vP77hxaptG4VRTFhMFcxhjGNly38jQmwOuAjxlejrZYG%2F4%2BPJlmljZJ2IkHLzCYTBCNMrn89%2BiHGraQ72%2FRU8qXZgVvMnob6iRTg0uzOAzT7Ea747%2Bv6OJcODTEg9L%2Fux%2FUrvxTnysdBnqXeZ0e%2FE8W4xNxo7eXCwRfg1JtjVPTjbv%2FxEtoQc8t%2B%2FbuKqEXs78NAXQz6XybudGfzyOCUJ%2Fg9GdcA7QG78nsAPeCyKbpy9nGsrRZHufFtBm3tC3GDgX4op7%2BlziO2XGQd39uEjVXNmd7aZY61VOH0BLP3OQrccSshDkY1DiIEy2DB9mhmJfPVTi8pSdzVZra%2FvswTq3vRfQLWzslW2PYHaxJmnz1quwtmwEWY96FZ%2BjQmfit7dA1SJzR3RKjwPXy9HuH0QCfd%2FPK63KuOHggVE3a%2FEsU%2BVSKOEMV%2B%2B40TjYPk6Yht%2FlDZMOSHqJsDM%2FsiyVtjgdoD9nhI%2BVB2%2FWiQWGHNRSC%2FjJhZKlUUsAj0BRZbDAKinJ6tOM6Q%2F%2F54NdN9reAiGMdPcb%2FUSOMoGZpZfsR5Wau%2BpHCwlablbd1Wx8gAAuWIaaxzSOil7aEZwxJRZ%2FCdZJHPd0ctlqzMJT1y78GOqUBLXmUn3L9JaTnhxM4T79dh5qELEg8Zu2lO%2B3iRUJpW1Za9xlxci2abNoxS5B8y6kEYqZLQ7SbPgxzExMii5EgI8pw30y5eYV48g8vbM0zpbQKdx09j%2FvWjesuDJYnZJI%2F8armbTSFLOIvR9%2BvMtUmsMVju1BYmMakq71ROz3ZttZUJKVxwPWUlhkCKeN9hQN8akB1wP5btidnp0ipU5wK%2Bs7GE4QW&X-Amz-Signature=3e7b6a6ff02fbb48190b0650316a273d053a654f0742094a943c26fef27425f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7752T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3r%2BywhcD12qGFh4MNUO481R%2FPSAxWfx7DpyfrcoFaWwIgFQ7hdu4v65x37bS99YJQ8kAxPQTI2PCeBPzy4VPNkUAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCSY8Gh393nWCzxN2SrcAyge5d3sp5DLW7X3ZI21dNsGh1QF4vP77hxaptG4VRTFhMFcxhjGNly38jQmwOuAjxlejrZYG%2F4%2BPJlmljZJ2IkHLzCYTBCNMrn89%2BiHGraQ72%2FRU8qXZgVvMnob6iRTg0uzOAzT7Ea747%2Bv6OJcODTEg9L%2Fux%2FUrvxTnysdBnqXeZ0e%2FE8W4xNxo7eXCwRfg1JtjVPTjbv%2FxEtoQc8t%2B%2FbuKqEXs78NAXQz6XybudGfzyOCUJ%2Fg9GdcA7QG78nsAPeCyKbpy9nGsrRZHufFtBm3tC3GDgX4op7%2BlziO2XGQd39uEjVXNmd7aZY61VOH0BLP3OQrccSshDkY1DiIEy2DB9mhmJfPVTi8pSdzVZra%2FvswTq3vRfQLWzslW2PYHaxJmnz1quwtmwEWY96FZ%2BjQmfit7dA1SJzR3RKjwPXy9HuH0QCfd%2FPK63KuOHggVE3a%2FEsU%2BVSKOEMV%2B%2B40TjYPk6Yht%2FlDZMOSHqJsDM%2FsiyVtjgdoD9nhI%2BVB2%2FWiQWGHNRSC%2FjJhZKlUUsAj0BRZbDAKinJ6tOM6Q%2F%2F54NdN9reAiGMdPcb%2FUSOMoGZpZfsR5Wau%2BpHCwlablbd1Wx8gAAuWIaaxzSOil7aEZwxJRZ%2FCdZJHPd0ctlqzMJT1y78GOqUBLXmUn3L9JaTnhxM4T79dh5qELEg8Zu2lO%2B3iRUJpW1Za9xlxci2abNoxS5B8y6kEYqZLQ7SbPgxzExMii5EgI8pw30y5eYV48g8vbM0zpbQKdx09j%2FvWjesuDJYnZJI%2F8armbTSFLOIvR9%2BvMtUmsMVju1BYmMakq71ROz3ZttZUJKVxwPWUlhkCKeN9hQN8akB1wP5btidnp0ipU5wK%2Bs7GE4QW&X-Amz-Signature=6a3ba04a97b44a54a4ea6d5f88a802b7ca3caa9ee4e190a59682e3da4ab6b487&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7752T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3r%2BywhcD12qGFh4MNUO481R%2FPSAxWfx7DpyfrcoFaWwIgFQ7hdu4v65x37bS99YJQ8kAxPQTI2PCeBPzy4VPNkUAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCSY8Gh393nWCzxN2SrcAyge5d3sp5DLW7X3ZI21dNsGh1QF4vP77hxaptG4VRTFhMFcxhjGNly38jQmwOuAjxlejrZYG%2F4%2BPJlmljZJ2IkHLzCYTBCNMrn89%2BiHGraQ72%2FRU8qXZgVvMnob6iRTg0uzOAzT7Ea747%2Bv6OJcODTEg9L%2Fux%2FUrvxTnysdBnqXeZ0e%2FE8W4xNxo7eXCwRfg1JtjVPTjbv%2FxEtoQc8t%2B%2FbuKqEXs78NAXQz6XybudGfzyOCUJ%2Fg9GdcA7QG78nsAPeCyKbpy9nGsrRZHufFtBm3tC3GDgX4op7%2BlziO2XGQd39uEjVXNmd7aZY61VOH0BLP3OQrccSshDkY1DiIEy2DB9mhmJfPVTi8pSdzVZra%2FvswTq3vRfQLWzslW2PYHaxJmnz1quwtmwEWY96FZ%2BjQmfit7dA1SJzR3RKjwPXy9HuH0QCfd%2FPK63KuOHggVE3a%2FEsU%2BVSKOEMV%2B%2B40TjYPk6Yht%2FlDZMOSHqJsDM%2FsiyVtjgdoD9nhI%2BVB2%2FWiQWGHNRSC%2FjJhZKlUUsAj0BRZbDAKinJ6tOM6Q%2F%2F54NdN9reAiGMdPcb%2FUSOMoGZpZfsR5Wau%2BpHCwlablbd1Wx8gAAuWIaaxzSOil7aEZwxJRZ%2FCdZJHPd0ctlqzMJT1y78GOqUBLXmUn3L9JaTnhxM4T79dh5qELEg8Zu2lO%2B3iRUJpW1Za9xlxci2abNoxS5B8y6kEYqZLQ7SbPgxzExMii5EgI8pw30y5eYV48g8vbM0zpbQKdx09j%2FvWjesuDJYnZJI%2F8armbTSFLOIvR9%2BvMtUmsMVju1BYmMakq71ROz3ZttZUJKVxwPWUlhkCKeN9hQN8akB1wP5btidnp0ipU5wK%2Bs7GE4QW&X-Amz-Signature=12673c5fc06ca98b96ccdc98c632c43276b27f5af0d21127316bfc169af62df0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

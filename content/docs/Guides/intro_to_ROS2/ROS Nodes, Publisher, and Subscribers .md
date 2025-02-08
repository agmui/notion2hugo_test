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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CBTXVQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHKzdyUxX6W%2BdUrPOmjiSEudhaw0TOqTDfJGL4hPIMJ2AiEAzEPMOceCTLgEjeL2vhCEosSjfu47tWl5qH3lAEHLzcwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8eIprn0AC%2FG5ysoCrcA1exo4oKF0Iw6%2Fc%2FqjlMcKmsagU3wepF4ITfvhVt5pQLVV2BVw%2BPTeIVGonlbMKbJ2UURxoXvt15b0OD%2FtyJvgIR7M4hprFBbLWX%2FbFYwVg55sps1yl6ehkXtu%2F2U7CENTXOdJ4nqC816aaRzjv81kf9cXddayz%2FU5E6VMGNEtTvSSyt%2FHJvPU1Chh3y7BpfaNSQ4Kmo2j5rX1YqC4X%2BoQzc3jWfixvOsAXBFM2lZMWDiK%2BJu%2BCrZlUaPB%2FgsnNTZT3HUr1b5VT0p91hS3etAsdVaY5YHtp6nZ9oQN3hXLg1bN7Ntpu%2F6iC1dBLuSmOwI%2F4UAs%2BuhVBt0pG9tzh%2BPQgvIIRbwxJcon2QSMtBNMvmQpsdwCtEtVciZ6GhPr3q3f4YYHtEZLT7Pb10Hl%2FlxeQAb7kWcEmsxC2D6cU01hmQCDOGFLTzwy2Unc6JpzytxACH3m2q8ZgmufIj7DHCJGFCUa3Qifom1F75MKKJsMD0bosUa8c5vlAVTRhUxMIVOvxAtiPzCA0lzzIww4ltrQpH%2Bgm9C7adhv6p5vYnDcKxIafRdWlx5MlHpJRkElsk4BshmnEJAFgpkQPGOzdDA7R9MOhjGj%2FYrrGoG6uQjpJwVJjNzet5o0YYGhDjMMThnr0GOqUBTYYMQHYB7ABNCqkfNIicvU3yBqXt6YwOs0MzbFihKLb1qtlmGqx9YMWhrys2LMUiUnV9IzEmqtnmlvkMZBHq3IF%2BJDmV8MYdml%2BWgv0MI9z9C9EgTbF%2Blc2tpscNkmnS0jOfn%2FUcFLIO6IKuLoyArmxTQtgbzbtepOZCRvhBCurCC3nyosNwuzHv1kc7O%2BaTFPd6cV5Q8%2FHVfVprMRqDbKNDQjQw&X-Amz-Signature=8b48eee293876c792f55d75eb4bb2599b588e94834c0312b35e7b29ba220a2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CBTXVQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHKzdyUxX6W%2BdUrPOmjiSEudhaw0TOqTDfJGL4hPIMJ2AiEAzEPMOceCTLgEjeL2vhCEosSjfu47tWl5qH3lAEHLzcwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8eIprn0AC%2FG5ysoCrcA1exo4oKF0Iw6%2Fc%2FqjlMcKmsagU3wepF4ITfvhVt5pQLVV2BVw%2BPTeIVGonlbMKbJ2UURxoXvt15b0OD%2FtyJvgIR7M4hprFBbLWX%2FbFYwVg55sps1yl6ehkXtu%2F2U7CENTXOdJ4nqC816aaRzjv81kf9cXddayz%2FU5E6VMGNEtTvSSyt%2FHJvPU1Chh3y7BpfaNSQ4Kmo2j5rX1YqC4X%2BoQzc3jWfixvOsAXBFM2lZMWDiK%2BJu%2BCrZlUaPB%2FgsnNTZT3HUr1b5VT0p91hS3etAsdVaY5YHtp6nZ9oQN3hXLg1bN7Ntpu%2F6iC1dBLuSmOwI%2F4UAs%2BuhVBt0pG9tzh%2BPQgvIIRbwxJcon2QSMtBNMvmQpsdwCtEtVciZ6GhPr3q3f4YYHtEZLT7Pb10Hl%2FlxeQAb7kWcEmsxC2D6cU01hmQCDOGFLTzwy2Unc6JpzytxACH3m2q8ZgmufIj7DHCJGFCUa3Qifom1F75MKKJsMD0bosUa8c5vlAVTRhUxMIVOvxAtiPzCA0lzzIww4ltrQpH%2Bgm9C7adhv6p5vYnDcKxIafRdWlx5MlHpJRkElsk4BshmnEJAFgpkQPGOzdDA7R9MOhjGj%2FYrrGoG6uQjpJwVJjNzet5o0YYGhDjMMThnr0GOqUBTYYMQHYB7ABNCqkfNIicvU3yBqXt6YwOs0MzbFihKLb1qtlmGqx9YMWhrys2LMUiUnV9IzEmqtnmlvkMZBHq3IF%2BJDmV8MYdml%2BWgv0MI9z9C9EgTbF%2Blc2tpscNkmnS0jOfn%2FUcFLIO6IKuLoyArmxTQtgbzbtepOZCRvhBCurCC3nyosNwuzHv1kc7O%2BaTFPd6cV5Q8%2FHVfVprMRqDbKNDQjQw&X-Amz-Signature=54d42e66a3c22ec46c83c6e3807e15c70b74190833a61532d97224809f7c868d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CBTXVQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHKzdyUxX6W%2BdUrPOmjiSEudhaw0TOqTDfJGL4hPIMJ2AiEAzEPMOceCTLgEjeL2vhCEosSjfu47tWl5qH3lAEHLzcwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8eIprn0AC%2FG5ysoCrcA1exo4oKF0Iw6%2Fc%2FqjlMcKmsagU3wepF4ITfvhVt5pQLVV2BVw%2BPTeIVGonlbMKbJ2UURxoXvt15b0OD%2FtyJvgIR7M4hprFBbLWX%2FbFYwVg55sps1yl6ehkXtu%2F2U7CENTXOdJ4nqC816aaRzjv81kf9cXddayz%2FU5E6VMGNEtTvSSyt%2FHJvPU1Chh3y7BpfaNSQ4Kmo2j5rX1YqC4X%2BoQzc3jWfixvOsAXBFM2lZMWDiK%2BJu%2BCrZlUaPB%2FgsnNTZT3HUr1b5VT0p91hS3etAsdVaY5YHtp6nZ9oQN3hXLg1bN7Ntpu%2F6iC1dBLuSmOwI%2F4UAs%2BuhVBt0pG9tzh%2BPQgvIIRbwxJcon2QSMtBNMvmQpsdwCtEtVciZ6GhPr3q3f4YYHtEZLT7Pb10Hl%2FlxeQAb7kWcEmsxC2D6cU01hmQCDOGFLTzwy2Unc6JpzytxACH3m2q8ZgmufIj7DHCJGFCUa3Qifom1F75MKKJsMD0bosUa8c5vlAVTRhUxMIVOvxAtiPzCA0lzzIww4ltrQpH%2Bgm9C7adhv6p5vYnDcKxIafRdWlx5MlHpJRkElsk4BshmnEJAFgpkQPGOzdDA7R9MOhjGj%2FYrrGoG6uQjpJwVJjNzet5o0YYGhDjMMThnr0GOqUBTYYMQHYB7ABNCqkfNIicvU3yBqXt6YwOs0MzbFihKLb1qtlmGqx9YMWhrys2LMUiUnV9IzEmqtnmlvkMZBHq3IF%2BJDmV8MYdml%2BWgv0MI9z9C9EgTbF%2Blc2tpscNkmnS0jOfn%2FUcFLIO6IKuLoyArmxTQtgbzbtepOZCRvhBCurCC3nyosNwuzHv1kc7O%2BaTFPd6cV5Q8%2FHVfVprMRqDbKNDQjQw&X-Amz-Signature=a29d1ac936c3c35f1fc2cdb4002f9c8e48b18544e95c8d9ccf39f735d59be545&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CBTXVQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHKzdyUxX6W%2BdUrPOmjiSEudhaw0TOqTDfJGL4hPIMJ2AiEAzEPMOceCTLgEjeL2vhCEosSjfu47tWl5qH3lAEHLzcwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8eIprn0AC%2FG5ysoCrcA1exo4oKF0Iw6%2Fc%2FqjlMcKmsagU3wepF4ITfvhVt5pQLVV2BVw%2BPTeIVGonlbMKbJ2UURxoXvt15b0OD%2FtyJvgIR7M4hprFBbLWX%2FbFYwVg55sps1yl6ehkXtu%2F2U7CENTXOdJ4nqC816aaRzjv81kf9cXddayz%2FU5E6VMGNEtTvSSyt%2FHJvPU1Chh3y7BpfaNSQ4Kmo2j5rX1YqC4X%2BoQzc3jWfixvOsAXBFM2lZMWDiK%2BJu%2BCrZlUaPB%2FgsnNTZT3HUr1b5VT0p91hS3etAsdVaY5YHtp6nZ9oQN3hXLg1bN7Ntpu%2F6iC1dBLuSmOwI%2F4UAs%2BuhVBt0pG9tzh%2BPQgvIIRbwxJcon2QSMtBNMvmQpsdwCtEtVciZ6GhPr3q3f4YYHtEZLT7Pb10Hl%2FlxeQAb7kWcEmsxC2D6cU01hmQCDOGFLTzwy2Unc6JpzytxACH3m2q8ZgmufIj7DHCJGFCUa3Qifom1F75MKKJsMD0bosUa8c5vlAVTRhUxMIVOvxAtiPzCA0lzzIww4ltrQpH%2Bgm9C7adhv6p5vYnDcKxIafRdWlx5MlHpJRkElsk4BshmnEJAFgpkQPGOzdDA7R9MOhjGj%2FYrrGoG6uQjpJwVJjNzet5o0YYGhDjMMThnr0GOqUBTYYMQHYB7ABNCqkfNIicvU3yBqXt6YwOs0MzbFihKLb1qtlmGqx9YMWhrys2LMUiUnV9IzEmqtnmlvkMZBHq3IF%2BJDmV8MYdml%2BWgv0MI9z9C9EgTbF%2Blc2tpscNkmnS0jOfn%2FUcFLIO6IKuLoyArmxTQtgbzbtepOZCRvhBCurCC3nyosNwuzHv1kc7O%2BaTFPd6cV5Q8%2FHVfVprMRqDbKNDQjQw&X-Amz-Signature=26b4bea6ddaf10428616d4f488ad40f9d814edc5400406d585a5bb54ab335921&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CBTXVQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHKzdyUxX6W%2BdUrPOmjiSEudhaw0TOqTDfJGL4hPIMJ2AiEAzEPMOceCTLgEjeL2vhCEosSjfu47tWl5qH3lAEHLzcwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8eIprn0AC%2FG5ysoCrcA1exo4oKF0Iw6%2Fc%2FqjlMcKmsagU3wepF4ITfvhVt5pQLVV2BVw%2BPTeIVGonlbMKbJ2UURxoXvt15b0OD%2FtyJvgIR7M4hprFBbLWX%2FbFYwVg55sps1yl6ehkXtu%2F2U7CENTXOdJ4nqC816aaRzjv81kf9cXddayz%2FU5E6VMGNEtTvSSyt%2FHJvPU1Chh3y7BpfaNSQ4Kmo2j5rX1YqC4X%2BoQzc3jWfixvOsAXBFM2lZMWDiK%2BJu%2BCrZlUaPB%2FgsnNTZT3HUr1b5VT0p91hS3etAsdVaY5YHtp6nZ9oQN3hXLg1bN7Ntpu%2F6iC1dBLuSmOwI%2F4UAs%2BuhVBt0pG9tzh%2BPQgvIIRbwxJcon2QSMtBNMvmQpsdwCtEtVciZ6GhPr3q3f4YYHtEZLT7Pb10Hl%2FlxeQAb7kWcEmsxC2D6cU01hmQCDOGFLTzwy2Unc6JpzytxACH3m2q8ZgmufIj7DHCJGFCUa3Qifom1F75MKKJsMD0bosUa8c5vlAVTRhUxMIVOvxAtiPzCA0lzzIww4ltrQpH%2Bgm9C7adhv6p5vYnDcKxIafRdWlx5MlHpJRkElsk4BshmnEJAFgpkQPGOzdDA7R9MOhjGj%2FYrrGoG6uQjpJwVJjNzet5o0YYGhDjMMThnr0GOqUBTYYMQHYB7ABNCqkfNIicvU3yBqXt6YwOs0MzbFihKLb1qtlmGqx9YMWhrys2LMUiUnV9IzEmqtnmlvkMZBHq3IF%2BJDmV8MYdml%2BWgv0MI9z9C9EgTbF%2Blc2tpscNkmnS0jOfn%2FUcFLIO6IKuLoyArmxTQtgbzbtepOZCRvhBCurCC3nyosNwuzHv1kc7O%2BaTFPd6cV5Q8%2FHVfVprMRqDbKNDQjQw&X-Amz-Signature=1f5538633b44fd34fddea4b8b16cde65278fbe55df5432830621fedf2c3f2a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CBTXVQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHKzdyUxX6W%2BdUrPOmjiSEudhaw0TOqTDfJGL4hPIMJ2AiEAzEPMOceCTLgEjeL2vhCEosSjfu47tWl5qH3lAEHLzcwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8eIprn0AC%2FG5ysoCrcA1exo4oKF0Iw6%2Fc%2FqjlMcKmsagU3wepF4ITfvhVt5pQLVV2BVw%2BPTeIVGonlbMKbJ2UURxoXvt15b0OD%2FtyJvgIR7M4hprFBbLWX%2FbFYwVg55sps1yl6ehkXtu%2F2U7CENTXOdJ4nqC816aaRzjv81kf9cXddayz%2FU5E6VMGNEtTvSSyt%2FHJvPU1Chh3y7BpfaNSQ4Kmo2j5rX1YqC4X%2BoQzc3jWfixvOsAXBFM2lZMWDiK%2BJu%2BCrZlUaPB%2FgsnNTZT3HUr1b5VT0p91hS3etAsdVaY5YHtp6nZ9oQN3hXLg1bN7Ntpu%2F6iC1dBLuSmOwI%2F4UAs%2BuhVBt0pG9tzh%2BPQgvIIRbwxJcon2QSMtBNMvmQpsdwCtEtVciZ6GhPr3q3f4YYHtEZLT7Pb10Hl%2FlxeQAb7kWcEmsxC2D6cU01hmQCDOGFLTzwy2Unc6JpzytxACH3m2q8ZgmufIj7DHCJGFCUa3Qifom1F75MKKJsMD0bosUa8c5vlAVTRhUxMIVOvxAtiPzCA0lzzIww4ltrQpH%2Bgm9C7adhv6p5vYnDcKxIafRdWlx5MlHpJRkElsk4BshmnEJAFgpkQPGOzdDA7R9MOhjGj%2FYrrGoG6uQjpJwVJjNzet5o0YYGhDjMMThnr0GOqUBTYYMQHYB7ABNCqkfNIicvU3yBqXt6YwOs0MzbFihKLb1qtlmGqx9YMWhrys2LMUiUnV9IzEmqtnmlvkMZBHq3IF%2BJDmV8MYdml%2BWgv0MI9z9C9EgTbF%2Blc2tpscNkmnS0jOfn%2FUcFLIO6IKuLoyArmxTQtgbzbtepOZCRvhBCurCC3nyosNwuzHv1kc7O%2BaTFPd6cV5Q8%2FHVfVprMRqDbKNDQjQw&X-Amz-Signature=0b3f96f0d914eb7c96a515b8e4eddf7b234d2c7b815e239c154d5b0a7515ad31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CBTXVQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHKzdyUxX6W%2BdUrPOmjiSEudhaw0TOqTDfJGL4hPIMJ2AiEAzEPMOceCTLgEjeL2vhCEosSjfu47tWl5qH3lAEHLzcwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8eIprn0AC%2FG5ysoCrcA1exo4oKF0Iw6%2Fc%2FqjlMcKmsagU3wepF4ITfvhVt5pQLVV2BVw%2BPTeIVGonlbMKbJ2UURxoXvt15b0OD%2FtyJvgIR7M4hprFBbLWX%2FbFYwVg55sps1yl6ehkXtu%2F2U7CENTXOdJ4nqC816aaRzjv81kf9cXddayz%2FU5E6VMGNEtTvSSyt%2FHJvPU1Chh3y7BpfaNSQ4Kmo2j5rX1YqC4X%2BoQzc3jWfixvOsAXBFM2lZMWDiK%2BJu%2BCrZlUaPB%2FgsnNTZT3HUr1b5VT0p91hS3etAsdVaY5YHtp6nZ9oQN3hXLg1bN7Ntpu%2F6iC1dBLuSmOwI%2F4UAs%2BuhVBt0pG9tzh%2BPQgvIIRbwxJcon2QSMtBNMvmQpsdwCtEtVciZ6GhPr3q3f4YYHtEZLT7Pb10Hl%2FlxeQAb7kWcEmsxC2D6cU01hmQCDOGFLTzwy2Unc6JpzytxACH3m2q8ZgmufIj7DHCJGFCUa3Qifom1F75MKKJsMD0bosUa8c5vlAVTRhUxMIVOvxAtiPzCA0lzzIww4ltrQpH%2Bgm9C7adhv6p5vYnDcKxIafRdWlx5MlHpJRkElsk4BshmnEJAFgpkQPGOzdDA7R9MOhjGj%2FYrrGoG6uQjpJwVJjNzet5o0YYGhDjMMThnr0GOqUBTYYMQHYB7ABNCqkfNIicvU3yBqXt6YwOs0MzbFihKLb1qtlmGqx9YMWhrys2LMUiUnV9IzEmqtnmlvkMZBHq3IF%2BJDmV8MYdml%2BWgv0MI9z9C9EgTbF%2Blc2tpscNkmnS0jOfn%2FUcFLIO6IKuLoyArmxTQtgbzbtepOZCRvhBCurCC3nyosNwuzHv1kc7O%2BaTFPd6cV5Q8%2FHVfVprMRqDbKNDQjQw&X-Amz-Signature=770d690b70a93f1da78618fb4a7b562dec2cad913301e4ad994d21195484cba9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CBTXVQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHKzdyUxX6W%2BdUrPOmjiSEudhaw0TOqTDfJGL4hPIMJ2AiEAzEPMOceCTLgEjeL2vhCEosSjfu47tWl5qH3lAEHLzcwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8eIprn0AC%2FG5ysoCrcA1exo4oKF0Iw6%2Fc%2FqjlMcKmsagU3wepF4ITfvhVt5pQLVV2BVw%2BPTeIVGonlbMKbJ2UURxoXvt15b0OD%2FtyJvgIR7M4hprFBbLWX%2FbFYwVg55sps1yl6ehkXtu%2F2U7CENTXOdJ4nqC816aaRzjv81kf9cXddayz%2FU5E6VMGNEtTvSSyt%2FHJvPU1Chh3y7BpfaNSQ4Kmo2j5rX1YqC4X%2BoQzc3jWfixvOsAXBFM2lZMWDiK%2BJu%2BCrZlUaPB%2FgsnNTZT3HUr1b5VT0p91hS3etAsdVaY5YHtp6nZ9oQN3hXLg1bN7Ntpu%2F6iC1dBLuSmOwI%2F4UAs%2BuhVBt0pG9tzh%2BPQgvIIRbwxJcon2QSMtBNMvmQpsdwCtEtVciZ6GhPr3q3f4YYHtEZLT7Pb10Hl%2FlxeQAb7kWcEmsxC2D6cU01hmQCDOGFLTzwy2Unc6JpzytxACH3m2q8ZgmufIj7DHCJGFCUa3Qifom1F75MKKJsMD0bosUa8c5vlAVTRhUxMIVOvxAtiPzCA0lzzIww4ltrQpH%2Bgm9C7adhv6p5vYnDcKxIafRdWlx5MlHpJRkElsk4BshmnEJAFgpkQPGOzdDA7R9MOhjGj%2FYrrGoG6uQjpJwVJjNzet5o0YYGhDjMMThnr0GOqUBTYYMQHYB7ABNCqkfNIicvU3yBqXt6YwOs0MzbFihKLb1qtlmGqx9YMWhrys2LMUiUnV9IzEmqtnmlvkMZBHq3IF%2BJDmV8MYdml%2BWgv0MI9z9C9EgTbF%2Blc2tpscNkmnS0jOfn%2FUcFLIO6IKuLoyArmxTQtgbzbtepOZCRvhBCurCC3nyosNwuzHv1kc7O%2BaTFPd6cV5Q8%2FHVfVprMRqDbKNDQjQw&X-Amz-Signature=8d413d2fe03f820bdd5c263dd743cafd481cc80354fd1d9c70456c86c839cd86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

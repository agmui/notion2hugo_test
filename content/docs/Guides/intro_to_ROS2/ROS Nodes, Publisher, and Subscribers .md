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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJTHJEU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCnJuo7hgly90FFBG80Hc3ldOnR8UrhSUrNB2zB03oIcQIgHqN%2Ft4kyojFoVHWJQTQd%2FwL9aTXwq%2BYMRf2g0FYQceYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNImfg115LseLCjGDyrcA28U5JH%2BIbAxU6a%2FcOthlu40GElA4IITRUJ5uZDfMYf2rbE3ce6bog91ELvyz%2FHm%2B6oaH8rpVknvVrVYE1wK15fFXSYXZNNZfiIixVsMJVOoeEaafu2It7XyUvDse6uVgeB6iBf9TrQn6AB9L0ro3tJsWKPl0%2BgguiJzPttvKdkV3%2Bmrp1YBuRIR11PtMXyiaBg41QBoV6Q6zcmkROXIH2u27swPmPoX3aQN45KEDd4xFgbjOwitTM7bbIDm2uF%2BnCd7dWaiVZ3fTbU58YWiWIpqu2Gz0KgTnJQo9zpnK%2BKkae6ybRW6rOKjRyExXqC2Zpgnw9fhPigeI8rHIrxCE7JOdQer0rzv9dUjWGaSUmCwhHo4gqsSI2dGSRVqSf1A36fKp%2FAI9M9JVJ29K%2FHhK3cfq5VHbWvU1mI92F8Jpm9OD8Prbl2BS4AC2q93FjDi8%2BMLaDPOK%2BxhXKj5XZF1xfnPYOiYQHQeHbnrieNlsTgnqHwCkVHo%2FzAP9O5lQpV55cErSPVoOmfCv%2FdPvm9uaRs9VwdTFZfuCIqP4zcxvwjf6zC5rK5GFobndDSbJXXZvLM10FzIDDHyP%2BQysSn8y0u5M%2BXXzIuCq9%2BoiykvxeFmWXnU2X3mhHBFYVUTMMei6sIGOqUBPwdowAwOBuqG4FdvJx4F77ace2TVqmPBP1mFMRcsdEr%2Bt8Hh9O%2B0J5WehSk0XispMpq4uaR99kVWaQBRhfiL7SMv0ulkgvhV0oGZ1e4271UYoz2TUU8a%2B6qpPbVIBIFBarAvt40YrVpSXemxk%2F7M4qU%2FnbvXmwgncJQ%2B5JttuEqiWNzGV21kcD5gcZ8bqTyjZ43q4GYdLGW2TjpJEuOIdvT8Nu1g&X-Amz-Signature=ee4d838835660abb3c1467be19885717ab2f337a26119bdc0f15debdfa2d6c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJTHJEU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCnJuo7hgly90FFBG80Hc3ldOnR8UrhSUrNB2zB03oIcQIgHqN%2Ft4kyojFoVHWJQTQd%2FwL9aTXwq%2BYMRf2g0FYQceYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNImfg115LseLCjGDyrcA28U5JH%2BIbAxU6a%2FcOthlu40GElA4IITRUJ5uZDfMYf2rbE3ce6bog91ELvyz%2FHm%2B6oaH8rpVknvVrVYE1wK15fFXSYXZNNZfiIixVsMJVOoeEaafu2It7XyUvDse6uVgeB6iBf9TrQn6AB9L0ro3tJsWKPl0%2BgguiJzPttvKdkV3%2Bmrp1YBuRIR11PtMXyiaBg41QBoV6Q6zcmkROXIH2u27swPmPoX3aQN45KEDd4xFgbjOwitTM7bbIDm2uF%2BnCd7dWaiVZ3fTbU58YWiWIpqu2Gz0KgTnJQo9zpnK%2BKkae6ybRW6rOKjRyExXqC2Zpgnw9fhPigeI8rHIrxCE7JOdQer0rzv9dUjWGaSUmCwhHo4gqsSI2dGSRVqSf1A36fKp%2FAI9M9JVJ29K%2FHhK3cfq5VHbWvU1mI92F8Jpm9OD8Prbl2BS4AC2q93FjDi8%2BMLaDPOK%2BxhXKj5XZF1xfnPYOiYQHQeHbnrieNlsTgnqHwCkVHo%2FzAP9O5lQpV55cErSPVoOmfCv%2FdPvm9uaRs9VwdTFZfuCIqP4zcxvwjf6zC5rK5GFobndDSbJXXZvLM10FzIDDHyP%2BQysSn8y0u5M%2BXXzIuCq9%2BoiykvxeFmWXnU2X3mhHBFYVUTMMei6sIGOqUBPwdowAwOBuqG4FdvJx4F77ace2TVqmPBP1mFMRcsdEr%2Bt8Hh9O%2B0J5WehSk0XispMpq4uaR99kVWaQBRhfiL7SMv0ulkgvhV0oGZ1e4271UYoz2TUU8a%2B6qpPbVIBIFBarAvt40YrVpSXemxk%2F7M4qU%2FnbvXmwgncJQ%2B5JttuEqiWNzGV21kcD5gcZ8bqTyjZ43q4GYdLGW2TjpJEuOIdvT8Nu1g&X-Amz-Signature=ed3581eef67c344ae88295a973f4cdb2c84043ad96e2e4eb6f1fe026419dd061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJTHJEU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCnJuo7hgly90FFBG80Hc3ldOnR8UrhSUrNB2zB03oIcQIgHqN%2Ft4kyojFoVHWJQTQd%2FwL9aTXwq%2BYMRf2g0FYQceYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNImfg115LseLCjGDyrcA28U5JH%2BIbAxU6a%2FcOthlu40GElA4IITRUJ5uZDfMYf2rbE3ce6bog91ELvyz%2FHm%2B6oaH8rpVknvVrVYE1wK15fFXSYXZNNZfiIixVsMJVOoeEaafu2It7XyUvDse6uVgeB6iBf9TrQn6AB9L0ro3tJsWKPl0%2BgguiJzPttvKdkV3%2Bmrp1YBuRIR11PtMXyiaBg41QBoV6Q6zcmkROXIH2u27swPmPoX3aQN45KEDd4xFgbjOwitTM7bbIDm2uF%2BnCd7dWaiVZ3fTbU58YWiWIpqu2Gz0KgTnJQo9zpnK%2BKkae6ybRW6rOKjRyExXqC2Zpgnw9fhPigeI8rHIrxCE7JOdQer0rzv9dUjWGaSUmCwhHo4gqsSI2dGSRVqSf1A36fKp%2FAI9M9JVJ29K%2FHhK3cfq5VHbWvU1mI92F8Jpm9OD8Prbl2BS4AC2q93FjDi8%2BMLaDPOK%2BxhXKj5XZF1xfnPYOiYQHQeHbnrieNlsTgnqHwCkVHo%2FzAP9O5lQpV55cErSPVoOmfCv%2FdPvm9uaRs9VwdTFZfuCIqP4zcxvwjf6zC5rK5GFobndDSbJXXZvLM10FzIDDHyP%2BQysSn8y0u5M%2BXXzIuCq9%2BoiykvxeFmWXnU2X3mhHBFYVUTMMei6sIGOqUBPwdowAwOBuqG4FdvJx4F77ace2TVqmPBP1mFMRcsdEr%2Bt8Hh9O%2B0J5WehSk0XispMpq4uaR99kVWaQBRhfiL7SMv0ulkgvhV0oGZ1e4271UYoz2TUU8a%2B6qpPbVIBIFBarAvt40YrVpSXemxk%2F7M4qU%2FnbvXmwgncJQ%2B5JttuEqiWNzGV21kcD5gcZ8bqTyjZ43q4GYdLGW2TjpJEuOIdvT8Nu1g&X-Amz-Signature=e90f3fe9146c3505364ac282eb1708636e0da07d4a46c24561db8524f7374f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJTHJEU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCnJuo7hgly90FFBG80Hc3ldOnR8UrhSUrNB2zB03oIcQIgHqN%2Ft4kyojFoVHWJQTQd%2FwL9aTXwq%2BYMRf2g0FYQceYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNImfg115LseLCjGDyrcA28U5JH%2BIbAxU6a%2FcOthlu40GElA4IITRUJ5uZDfMYf2rbE3ce6bog91ELvyz%2FHm%2B6oaH8rpVknvVrVYE1wK15fFXSYXZNNZfiIixVsMJVOoeEaafu2It7XyUvDse6uVgeB6iBf9TrQn6AB9L0ro3tJsWKPl0%2BgguiJzPttvKdkV3%2Bmrp1YBuRIR11PtMXyiaBg41QBoV6Q6zcmkROXIH2u27swPmPoX3aQN45KEDd4xFgbjOwitTM7bbIDm2uF%2BnCd7dWaiVZ3fTbU58YWiWIpqu2Gz0KgTnJQo9zpnK%2BKkae6ybRW6rOKjRyExXqC2Zpgnw9fhPigeI8rHIrxCE7JOdQer0rzv9dUjWGaSUmCwhHo4gqsSI2dGSRVqSf1A36fKp%2FAI9M9JVJ29K%2FHhK3cfq5VHbWvU1mI92F8Jpm9OD8Prbl2BS4AC2q93FjDi8%2BMLaDPOK%2BxhXKj5XZF1xfnPYOiYQHQeHbnrieNlsTgnqHwCkVHo%2FzAP9O5lQpV55cErSPVoOmfCv%2FdPvm9uaRs9VwdTFZfuCIqP4zcxvwjf6zC5rK5GFobndDSbJXXZvLM10FzIDDHyP%2BQysSn8y0u5M%2BXXzIuCq9%2BoiykvxeFmWXnU2X3mhHBFYVUTMMei6sIGOqUBPwdowAwOBuqG4FdvJx4F77ace2TVqmPBP1mFMRcsdEr%2Bt8Hh9O%2B0J5WehSk0XispMpq4uaR99kVWaQBRhfiL7SMv0ulkgvhV0oGZ1e4271UYoz2TUU8a%2B6qpPbVIBIFBarAvt40YrVpSXemxk%2F7M4qU%2FnbvXmwgncJQ%2B5JttuEqiWNzGV21kcD5gcZ8bqTyjZ43q4GYdLGW2TjpJEuOIdvT8Nu1g&X-Amz-Signature=fa39b8c05d74d3ed2096da7a7cea7532e019273a6126cf8688b4cb475128a30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJTHJEU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCnJuo7hgly90FFBG80Hc3ldOnR8UrhSUrNB2zB03oIcQIgHqN%2Ft4kyojFoVHWJQTQd%2FwL9aTXwq%2BYMRf2g0FYQceYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNImfg115LseLCjGDyrcA28U5JH%2BIbAxU6a%2FcOthlu40GElA4IITRUJ5uZDfMYf2rbE3ce6bog91ELvyz%2FHm%2B6oaH8rpVknvVrVYE1wK15fFXSYXZNNZfiIixVsMJVOoeEaafu2It7XyUvDse6uVgeB6iBf9TrQn6AB9L0ro3tJsWKPl0%2BgguiJzPttvKdkV3%2Bmrp1YBuRIR11PtMXyiaBg41QBoV6Q6zcmkROXIH2u27swPmPoX3aQN45KEDd4xFgbjOwitTM7bbIDm2uF%2BnCd7dWaiVZ3fTbU58YWiWIpqu2Gz0KgTnJQo9zpnK%2BKkae6ybRW6rOKjRyExXqC2Zpgnw9fhPigeI8rHIrxCE7JOdQer0rzv9dUjWGaSUmCwhHo4gqsSI2dGSRVqSf1A36fKp%2FAI9M9JVJ29K%2FHhK3cfq5VHbWvU1mI92F8Jpm9OD8Prbl2BS4AC2q93FjDi8%2BMLaDPOK%2BxhXKj5XZF1xfnPYOiYQHQeHbnrieNlsTgnqHwCkVHo%2FzAP9O5lQpV55cErSPVoOmfCv%2FdPvm9uaRs9VwdTFZfuCIqP4zcxvwjf6zC5rK5GFobndDSbJXXZvLM10FzIDDHyP%2BQysSn8y0u5M%2BXXzIuCq9%2BoiykvxeFmWXnU2X3mhHBFYVUTMMei6sIGOqUBPwdowAwOBuqG4FdvJx4F77ace2TVqmPBP1mFMRcsdEr%2Bt8Hh9O%2B0J5WehSk0XispMpq4uaR99kVWaQBRhfiL7SMv0ulkgvhV0oGZ1e4271UYoz2TUU8a%2B6qpPbVIBIFBarAvt40YrVpSXemxk%2F7M4qU%2FnbvXmwgncJQ%2B5JttuEqiWNzGV21kcD5gcZ8bqTyjZ43q4GYdLGW2TjpJEuOIdvT8Nu1g&X-Amz-Signature=8acafa3107aed94f03d048dde0102f9dfa990e672055066020d57659e0723f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJTHJEU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCnJuo7hgly90FFBG80Hc3ldOnR8UrhSUrNB2zB03oIcQIgHqN%2Ft4kyojFoVHWJQTQd%2FwL9aTXwq%2BYMRf2g0FYQceYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNImfg115LseLCjGDyrcA28U5JH%2BIbAxU6a%2FcOthlu40GElA4IITRUJ5uZDfMYf2rbE3ce6bog91ELvyz%2FHm%2B6oaH8rpVknvVrVYE1wK15fFXSYXZNNZfiIixVsMJVOoeEaafu2It7XyUvDse6uVgeB6iBf9TrQn6AB9L0ro3tJsWKPl0%2BgguiJzPttvKdkV3%2Bmrp1YBuRIR11PtMXyiaBg41QBoV6Q6zcmkROXIH2u27swPmPoX3aQN45KEDd4xFgbjOwitTM7bbIDm2uF%2BnCd7dWaiVZ3fTbU58YWiWIpqu2Gz0KgTnJQo9zpnK%2BKkae6ybRW6rOKjRyExXqC2Zpgnw9fhPigeI8rHIrxCE7JOdQer0rzv9dUjWGaSUmCwhHo4gqsSI2dGSRVqSf1A36fKp%2FAI9M9JVJ29K%2FHhK3cfq5VHbWvU1mI92F8Jpm9OD8Prbl2BS4AC2q93FjDi8%2BMLaDPOK%2BxhXKj5XZF1xfnPYOiYQHQeHbnrieNlsTgnqHwCkVHo%2FzAP9O5lQpV55cErSPVoOmfCv%2FdPvm9uaRs9VwdTFZfuCIqP4zcxvwjf6zC5rK5GFobndDSbJXXZvLM10FzIDDHyP%2BQysSn8y0u5M%2BXXzIuCq9%2BoiykvxeFmWXnU2X3mhHBFYVUTMMei6sIGOqUBPwdowAwOBuqG4FdvJx4F77ace2TVqmPBP1mFMRcsdEr%2Bt8Hh9O%2B0J5WehSk0XispMpq4uaR99kVWaQBRhfiL7SMv0ulkgvhV0oGZ1e4271UYoz2TUU8a%2B6qpPbVIBIFBarAvt40YrVpSXemxk%2F7M4qU%2FnbvXmwgncJQ%2B5JttuEqiWNzGV21kcD5gcZ8bqTyjZ43q4GYdLGW2TjpJEuOIdvT8Nu1g&X-Amz-Signature=c40ad5dc6f21b5f3295e22aa84e4ac0d7823f6bf591fadf128eb2c653c282661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJTHJEU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCnJuo7hgly90FFBG80Hc3ldOnR8UrhSUrNB2zB03oIcQIgHqN%2Ft4kyojFoVHWJQTQd%2FwL9aTXwq%2BYMRf2g0FYQceYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNImfg115LseLCjGDyrcA28U5JH%2BIbAxU6a%2FcOthlu40GElA4IITRUJ5uZDfMYf2rbE3ce6bog91ELvyz%2FHm%2B6oaH8rpVknvVrVYE1wK15fFXSYXZNNZfiIixVsMJVOoeEaafu2It7XyUvDse6uVgeB6iBf9TrQn6AB9L0ro3tJsWKPl0%2BgguiJzPttvKdkV3%2Bmrp1YBuRIR11PtMXyiaBg41QBoV6Q6zcmkROXIH2u27swPmPoX3aQN45KEDd4xFgbjOwitTM7bbIDm2uF%2BnCd7dWaiVZ3fTbU58YWiWIpqu2Gz0KgTnJQo9zpnK%2BKkae6ybRW6rOKjRyExXqC2Zpgnw9fhPigeI8rHIrxCE7JOdQer0rzv9dUjWGaSUmCwhHo4gqsSI2dGSRVqSf1A36fKp%2FAI9M9JVJ29K%2FHhK3cfq5VHbWvU1mI92F8Jpm9OD8Prbl2BS4AC2q93FjDi8%2BMLaDPOK%2BxhXKj5XZF1xfnPYOiYQHQeHbnrieNlsTgnqHwCkVHo%2FzAP9O5lQpV55cErSPVoOmfCv%2FdPvm9uaRs9VwdTFZfuCIqP4zcxvwjf6zC5rK5GFobndDSbJXXZvLM10FzIDDHyP%2BQysSn8y0u5M%2BXXzIuCq9%2BoiykvxeFmWXnU2X3mhHBFYVUTMMei6sIGOqUBPwdowAwOBuqG4FdvJx4F77ace2TVqmPBP1mFMRcsdEr%2Bt8Hh9O%2B0J5WehSk0XispMpq4uaR99kVWaQBRhfiL7SMv0ulkgvhV0oGZ1e4271UYoz2TUU8a%2B6qpPbVIBIFBarAvt40YrVpSXemxk%2F7M4qU%2FnbvXmwgncJQ%2B5JttuEqiWNzGV21kcD5gcZ8bqTyjZ43q4GYdLGW2TjpJEuOIdvT8Nu1g&X-Amz-Signature=6a49fe877a3b3b01490249849630708a8f8bf60ddeeeafacb3761dc607d5cbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJTHJEU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCnJuo7hgly90FFBG80Hc3ldOnR8UrhSUrNB2zB03oIcQIgHqN%2Ft4kyojFoVHWJQTQd%2FwL9aTXwq%2BYMRf2g0FYQceYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNImfg115LseLCjGDyrcA28U5JH%2BIbAxU6a%2FcOthlu40GElA4IITRUJ5uZDfMYf2rbE3ce6bog91ELvyz%2FHm%2B6oaH8rpVknvVrVYE1wK15fFXSYXZNNZfiIixVsMJVOoeEaafu2It7XyUvDse6uVgeB6iBf9TrQn6AB9L0ro3tJsWKPl0%2BgguiJzPttvKdkV3%2Bmrp1YBuRIR11PtMXyiaBg41QBoV6Q6zcmkROXIH2u27swPmPoX3aQN45KEDd4xFgbjOwitTM7bbIDm2uF%2BnCd7dWaiVZ3fTbU58YWiWIpqu2Gz0KgTnJQo9zpnK%2BKkae6ybRW6rOKjRyExXqC2Zpgnw9fhPigeI8rHIrxCE7JOdQer0rzv9dUjWGaSUmCwhHo4gqsSI2dGSRVqSf1A36fKp%2FAI9M9JVJ29K%2FHhK3cfq5VHbWvU1mI92F8Jpm9OD8Prbl2BS4AC2q93FjDi8%2BMLaDPOK%2BxhXKj5XZF1xfnPYOiYQHQeHbnrieNlsTgnqHwCkVHo%2FzAP9O5lQpV55cErSPVoOmfCv%2FdPvm9uaRs9VwdTFZfuCIqP4zcxvwjf6zC5rK5GFobndDSbJXXZvLM10FzIDDHyP%2BQysSn8y0u5M%2BXXzIuCq9%2BoiykvxeFmWXnU2X3mhHBFYVUTMMei6sIGOqUBPwdowAwOBuqG4FdvJx4F77ace2TVqmPBP1mFMRcsdEr%2Bt8Hh9O%2B0J5WehSk0XispMpq4uaR99kVWaQBRhfiL7SMv0ulkgvhV0oGZ1e4271UYoz2TUU8a%2B6qpPbVIBIFBarAvt40YrVpSXemxk%2F7M4qU%2FnbvXmwgncJQ%2B5JttuEqiWNzGV21kcD5gcZ8bqTyjZ43q4GYdLGW2TjpJEuOIdvT8Nu1g&X-Amz-Signature=ca00bf6c3b3fa278b8021429ba551f891924a80162911a50ce1bbf6ed376df75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

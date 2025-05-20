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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQFGOGP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BHRWSN0%2FH7QCawpTZF5lYg8h9nsgTUks4HcNfqxAG1AiB2aCKamaGQaxpNpbauMaJSjZwz5OJ2wVyw2bzdCHt9RyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjf5reXd6eiu5vAFKtwDn7Y8B1t7xZ0CLg57DhZpgqjEbnTOmiPNF%2BdittMQSBuQj3ttEqczqAi%2Fq5xAulrTNaon45o%2BCs8yZJxuH6C7V%2F2QmhRtyESCpr1ZdiwW8YaUauyHu%2ByATf1u9pEQFQ%2Fte7KMQBETFTOI8fhv3oN%2BH7D8YcwojROwygJrojjE%2FBRedjuajkdpal58FmX29tJkYO1xQd1TCnYzHMVnsITD8gH2TfA0ZlkgfXsWyrI2NgI4keksAFwWPtw7MER%2BgVDEQe894exqS%2BtRrW26J9H%2FEpPu5jwWH7vcd%2FhbDyYfIMK%2BhaEBqQPwmtgycW9Y%2BQKUqn0i2EVvvD2apVJiL5BI2knNUV0qapGFTCzvrPL1bIRb4%2BBmAFE9G4s09ZZziMNDo55rn%2B2jA7%2BnwoAb%2BcrhNwzvZH7efE%2Fmgjw27l17n8cUcZE3BzBYLfoQahcQbBRAmhEPGK7j9DP%2B8ImjaNsDO7rAqhDtf9Z2BanorYgXqndYviB5uF0%2BOO3cb%2FBzPePeYs7DSiPX23vgBlonhG0MXIr9ody3E%2FPKAcgh%2BnfyGC5DxfrmHaVhqObOfQ4z0nWzSwmqxF9xtfnXYcDgVPgz7dWHlJzJYES8DraqZKh5aS76plNsnsMjrxgSadow8bOywQY6pgF5idXwFZ3vBtpljhwgh9iTBNkME4ACgS%2FNYOLnGqixLrrCJlcgrYSbYscddqUF2qra7GHdB5s8%2FEnDVDL2InRW38u%2BxCYsdy0od52QjNLwPN5NpQ01d8UxxKooPUfS1M4sx4PBCidDTu3yxjXOb06JPP1lIJIoZtGy8tj91l9hya57OUdaJ292Q2PB1wzSSsbfCWfgqxEHu%2FgcZ1FT5JE8DwWpmhx5&X-Amz-Signature=48a619497a674d38b36c072afddb1f242536574f0cbb9daf475530e712841c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQFGOGP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BHRWSN0%2FH7QCawpTZF5lYg8h9nsgTUks4HcNfqxAG1AiB2aCKamaGQaxpNpbauMaJSjZwz5OJ2wVyw2bzdCHt9RyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjf5reXd6eiu5vAFKtwDn7Y8B1t7xZ0CLg57DhZpgqjEbnTOmiPNF%2BdittMQSBuQj3ttEqczqAi%2Fq5xAulrTNaon45o%2BCs8yZJxuH6C7V%2F2QmhRtyESCpr1ZdiwW8YaUauyHu%2ByATf1u9pEQFQ%2Fte7KMQBETFTOI8fhv3oN%2BH7D8YcwojROwygJrojjE%2FBRedjuajkdpal58FmX29tJkYO1xQd1TCnYzHMVnsITD8gH2TfA0ZlkgfXsWyrI2NgI4keksAFwWPtw7MER%2BgVDEQe894exqS%2BtRrW26J9H%2FEpPu5jwWH7vcd%2FhbDyYfIMK%2BhaEBqQPwmtgycW9Y%2BQKUqn0i2EVvvD2apVJiL5BI2knNUV0qapGFTCzvrPL1bIRb4%2BBmAFE9G4s09ZZziMNDo55rn%2B2jA7%2BnwoAb%2BcrhNwzvZH7efE%2Fmgjw27l17n8cUcZE3BzBYLfoQahcQbBRAmhEPGK7j9DP%2B8ImjaNsDO7rAqhDtf9Z2BanorYgXqndYviB5uF0%2BOO3cb%2FBzPePeYs7DSiPX23vgBlonhG0MXIr9ody3E%2FPKAcgh%2BnfyGC5DxfrmHaVhqObOfQ4z0nWzSwmqxF9xtfnXYcDgVPgz7dWHlJzJYES8DraqZKh5aS76plNsnsMjrxgSadow8bOywQY6pgF5idXwFZ3vBtpljhwgh9iTBNkME4ACgS%2FNYOLnGqixLrrCJlcgrYSbYscddqUF2qra7GHdB5s8%2FEnDVDL2InRW38u%2BxCYsdy0od52QjNLwPN5NpQ01d8UxxKooPUfS1M4sx4PBCidDTu3yxjXOb06JPP1lIJIoZtGy8tj91l9hya57OUdaJ292Q2PB1wzSSsbfCWfgqxEHu%2FgcZ1FT5JE8DwWpmhx5&X-Amz-Signature=4fdac3c3a0c37833bc50d6a64303654d0e06df1b5d11d408c6a15a7ce45c4699&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQFGOGP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BHRWSN0%2FH7QCawpTZF5lYg8h9nsgTUks4HcNfqxAG1AiB2aCKamaGQaxpNpbauMaJSjZwz5OJ2wVyw2bzdCHt9RyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjf5reXd6eiu5vAFKtwDn7Y8B1t7xZ0CLg57DhZpgqjEbnTOmiPNF%2BdittMQSBuQj3ttEqczqAi%2Fq5xAulrTNaon45o%2BCs8yZJxuH6C7V%2F2QmhRtyESCpr1ZdiwW8YaUauyHu%2ByATf1u9pEQFQ%2Fte7KMQBETFTOI8fhv3oN%2BH7D8YcwojROwygJrojjE%2FBRedjuajkdpal58FmX29tJkYO1xQd1TCnYzHMVnsITD8gH2TfA0ZlkgfXsWyrI2NgI4keksAFwWPtw7MER%2BgVDEQe894exqS%2BtRrW26J9H%2FEpPu5jwWH7vcd%2FhbDyYfIMK%2BhaEBqQPwmtgycW9Y%2BQKUqn0i2EVvvD2apVJiL5BI2knNUV0qapGFTCzvrPL1bIRb4%2BBmAFE9G4s09ZZziMNDo55rn%2B2jA7%2BnwoAb%2BcrhNwzvZH7efE%2Fmgjw27l17n8cUcZE3BzBYLfoQahcQbBRAmhEPGK7j9DP%2B8ImjaNsDO7rAqhDtf9Z2BanorYgXqndYviB5uF0%2BOO3cb%2FBzPePeYs7DSiPX23vgBlonhG0MXIr9ody3E%2FPKAcgh%2BnfyGC5DxfrmHaVhqObOfQ4z0nWzSwmqxF9xtfnXYcDgVPgz7dWHlJzJYES8DraqZKh5aS76plNsnsMjrxgSadow8bOywQY6pgF5idXwFZ3vBtpljhwgh9iTBNkME4ACgS%2FNYOLnGqixLrrCJlcgrYSbYscddqUF2qra7GHdB5s8%2FEnDVDL2InRW38u%2BxCYsdy0od52QjNLwPN5NpQ01d8UxxKooPUfS1M4sx4PBCidDTu3yxjXOb06JPP1lIJIoZtGy8tj91l9hya57OUdaJ292Q2PB1wzSSsbfCWfgqxEHu%2FgcZ1FT5JE8DwWpmhx5&X-Amz-Signature=76a98eef8f3c0779ffeb00d8ba527be2e17d83c20558ce6661ed5906536453eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQFGOGP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BHRWSN0%2FH7QCawpTZF5lYg8h9nsgTUks4HcNfqxAG1AiB2aCKamaGQaxpNpbauMaJSjZwz5OJ2wVyw2bzdCHt9RyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjf5reXd6eiu5vAFKtwDn7Y8B1t7xZ0CLg57DhZpgqjEbnTOmiPNF%2BdittMQSBuQj3ttEqczqAi%2Fq5xAulrTNaon45o%2BCs8yZJxuH6C7V%2F2QmhRtyESCpr1ZdiwW8YaUauyHu%2ByATf1u9pEQFQ%2Fte7KMQBETFTOI8fhv3oN%2BH7D8YcwojROwygJrojjE%2FBRedjuajkdpal58FmX29tJkYO1xQd1TCnYzHMVnsITD8gH2TfA0ZlkgfXsWyrI2NgI4keksAFwWPtw7MER%2BgVDEQe894exqS%2BtRrW26J9H%2FEpPu5jwWH7vcd%2FhbDyYfIMK%2BhaEBqQPwmtgycW9Y%2BQKUqn0i2EVvvD2apVJiL5BI2knNUV0qapGFTCzvrPL1bIRb4%2BBmAFE9G4s09ZZziMNDo55rn%2B2jA7%2BnwoAb%2BcrhNwzvZH7efE%2Fmgjw27l17n8cUcZE3BzBYLfoQahcQbBRAmhEPGK7j9DP%2B8ImjaNsDO7rAqhDtf9Z2BanorYgXqndYviB5uF0%2BOO3cb%2FBzPePeYs7DSiPX23vgBlonhG0MXIr9ody3E%2FPKAcgh%2BnfyGC5DxfrmHaVhqObOfQ4z0nWzSwmqxF9xtfnXYcDgVPgz7dWHlJzJYES8DraqZKh5aS76plNsnsMjrxgSadow8bOywQY6pgF5idXwFZ3vBtpljhwgh9iTBNkME4ACgS%2FNYOLnGqixLrrCJlcgrYSbYscddqUF2qra7GHdB5s8%2FEnDVDL2InRW38u%2BxCYsdy0od52QjNLwPN5NpQ01d8UxxKooPUfS1M4sx4PBCidDTu3yxjXOb06JPP1lIJIoZtGy8tj91l9hya57OUdaJ292Q2PB1wzSSsbfCWfgqxEHu%2FgcZ1FT5JE8DwWpmhx5&X-Amz-Signature=9e4d34e28284e6275053f7ae795748d0cb6a622adf1b66b397bddf1b508436b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQFGOGP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BHRWSN0%2FH7QCawpTZF5lYg8h9nsgTUks4HcNfqxAG1AiB2aCKamaGQaxpNpbauMaJSjZwz5OJ2wVyw2bzdCHt9RyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjf5reXd6eiu5vAFKtwDn7Y8B1t7xZ0CLg57DhZpgqjEbnTOmiPNF%2BdittMQSBuQj3ttEqczqAi%2Fq5xAulrTNaon45o%2BCs8yZJxuH6C7V%2F2QmhRtyESCpr1ZdiwW8YaUauyHu%2ByATf1u9pEQFQ%2Fte7KMQBETFTOI8fhv3oN%2BH7D8YcwojROwygJrojjE%2FBRedjuajkdpal58FmX29tJkYO1xQd1TCnYzHMVnsITD8gH2TfA0ZlkgfXsWyrI2NgI4keksAFwWPtw7MER%2BgVDEQe894exqS%2BtRrW26J9H%2FEpPu5jwWH7vcd%2FhbDyYfIMK%2BhaEBqQPwmtgycW9Y%2BQKUqn0i2EVvvD2apVJiL5BI2knNUV0qapGFTCzvrPL1bIRb4%2BBmAFE9G4s09ZZziMNDo55rn%2B2jA7%2BnwoAb%2BcrhNwzvZH7efE%2Fmgjw27l17n8cUcZE3BzBYLfoQahcQbBRAmhEPGK7j9DP%2B8ImjaNsDO7rAqhDtf9Z2BanorYgXqndYviB5uF0%2BOO3cb%2FBzPePeYs7DSiPX23vgBlonhG0MXIr9ody3E%2FPKAcgh%2BnfyGC5DxfrmHaVhqObOfQ4z0nWzSwmqxF9xtfnXYcDgVPgz7dWHlJzJYES8DraqZKh5aS76plNsnsMjrxgSadow8bOywQY6pgF5idXwFZ3vBtpljhwgh9iTBNkME4ACgS%2FNYOLnGqixLrrCJlcgrYSbYscddqUF2qra7GHdB5s8%2FEnDVDL2InRW38u%2BxCYsdy0od52QjNLwPN5NpQ01d8UxxKooPUfS1M4sx4PBCidDTu3yxjXOb06JPP1lIJIoZtGy8tj91l9hya57OUdaJ292Q2PB1wzSSsbfCWfgqxEHu%2FgcZ1FT5JE8DwWpmhx5&X-Amz-Signature=539b3c5cc6dca4004dffc8a007e56f9eb3fb6d38516e745d0384edb714c96f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQFGOGP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BHRWSN0%2FH7QCawpTZF5lYg8h9nsgTUks4HcNfqxAG1AiB2aCKamaGQaxpNpbauMaJSjZwz5OJ2wVyw2bzdCHt9RyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjf5reXd6eiu5vAFKtwDn7Y8B1t7xZ0CLg57DhZpgqjEbnTOmiPNF%2BdittMQSBuQj3ttEqczqAi%2Fq5xAulrTNaon45o%2BCs8yZJxuH6C7V%2F2QmhRtyESCpr1ZdiwW8YaUauyHu%2ByATf1u9pEQFQ%2Fte7KMQBETFTOI8fhv3oN%2BH7D8YcwojROwygJrojjE%2FBRedjuajkdpal58FmX29tJkYO1xQd1TCnYzHMVnsITD8gH2TfA0ZlkgfXsWyrI2NgI4keksAFwWPtw7MER%2BgVDEQe894exqS%2BtRrW26J9H%2FEpPu5jwWH7vcd%2FhbDyYfIMK%2BhaEBqQPwmtgycW9Y%2BQKUqn0i2EVvvD2apVJiL5BI2knNUV0qapGFTCzvrPL1bIRb4%2BBmAFE9G4s09ZZziMNDo55rn%2B2jA7%2BnwoAb%2BcrhNwzvZH7efE%2Fmgjw27l17n8cUcZE3BzBYLfoQahcQbBRAmhEPGK7j9DP%2B8ImjaNsDO7rAqhDtf9Z2BanorYgXqndYviB5uF0%2BOO3cb%2FBzPePeYs7DSiPX23vgBlonhG0MXIr9ody3E%2FPKAcgh%2BnfyGC5DxfrmHaVhqObOfQ4z0nWzSwmqxF9xtfnXYcDgVPgz7dWHlJzJYES8DraqZKh5aS76plNsnsMjrxgSadow8bOywQY6pgF5idXwFZ3vBtpljhwgh9iTBNkME4ACgS%2FNYOLnGqixLrrCJlcgrYSbYscddqUF2qra7GHdB5s8%2FEnDVDL2InRW38u%2BxCYsdy0od52QjNLwPN5NpQ01d8UxxKooPUfS1M4sx4PBCidDTu3yxjXOb06JPP1lIJIoZtGy8tj91l9hya57OUdaJ292Q2PB1wzSSsbfCWfgqxEHu%2FgcZ1FT5JE8DwWpmhx5&X-Amz-Signature=9f3f96f04e087787099556a0f1063f0504d09e73fa319ff7d321b6f58948273a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQFGOGP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BHRWSN0%2FH7QCawpTZF5lYg8h9nsgTUks4HcNfqxAG1AiB2aCKamaGQaxpNpbauMaJSjZwz5OJ2wVyw2bzdCHt9RyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjf5reXd6eiu5vAFKtwDn7Y8B1t7xZ0CLg57DhZpgqjEbnTOmiPNF%2BdittMQSBuQj3ttEqczqAi%2Fq5xAulrTNaon45o%2BCs8yZJxuH6C7V%2F2QmhRtyESCpr1ZdiwW8YaUauyHu%2ByATf1u9pEQFQ%2Fte7KMQBETFTOI8fhv3oN%2BH7D8YcwojROwygJrojjE%2FBRedjuajkdpal58FmX29tJkYO1xQd1TCnYzHMVnsITD8gH2TfA0ZlkgfXsWyrI2NgI4keksAFwWPtw7MER%2BgVDEQe894exqS%2BtRrW26J9H%2FEpPu5jwWH7vcd%2FhbDyYfIMK%2BhaEBqQPwmtgycW9Y%2BQKUqn0i2EVvvD2apVJiL5BI2knNUV0qapGFTCzvrPL1bIRb4%2BBmAFE9G4s09ZZziMNDo55rn%2B2jA7%2BnwoAb%2BcrhNwzvZH7efE%2Fmgjw27l17n8cUcZE3BzBYLfoQahcQbBRAmhEPGK7j9DP%2B8ImjaNsDO7rAqhDtf9Z2BanorYgXqndYviB5uF0%2BOO3cb%2FBzPePeYs7DSiPX23vgBlonhG0MXIr9ody3E%2FPKAcgh%2BnfyGC5DxfrmHaVhqObOfQ4z0nWzSwmqxF9xtfnXYcDgVPgz7dWHlJzJYES8DraqZKh5aS76plNsnsMjrxgSadow8bOywQY6pgF5idXwFZ3vBtpljhwgh9iTBNkME4ACgS%2FNYOLnGqixLrrCJlcgrYSbYscddqUF2qra7GHdB5s8%2FEnDVDL2InRW38u%2BxCYsdy0od52QjNLwPN5NpQ01d8UxxKooPUfS1M4sx4PBCidDTu3yxjXOb06JPP1lIJIoZtGy8tj91l9hya57OUdaJ292Q2PB1wzSSsbfCWfgqxEHu%2FgcZ1FT5JE8DwWpmhx5&X-Amz-Signature=81235b874fafcb03a24c8f4f9e5752ba31103d7afea1967a036451f1deb55c46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQFGOGP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BHRWSN0%2FH7QCawpTZF5lYg8h9nsgTUks4HcNfqxAG1AiB2aCKamaGQaxpNpbauMaJSjZwz5OJ2wVyw2bzdCHt9RyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjf5reXd6eiu5vAFKtwDn7Y8B1t7xZ0CLg57DhZpgqjEbnTOmiPNF%2BdittMQSBuQj3ttEqczqAi%2Fq5xAulrTNaon45o%2BCs8yZJxuH6C7V%2F2QmhRtyESCpr1ZdiwW8YaUauyHu%2ByATf1u9pEQFQ%2Fte7KMQBETFTOI8fhv3oN%2BH7D8YcwojROwygJrojjE%2FBRedjuajkdpal58FmX29tJkYO1xQd1TCnYzHMVnsITD8gH2TfA0ZlkgfXsWyrI2NgI4keksAFwWPtw7MER%2BgVDEQe894exqS%2BtRrW26J9H%2FEpPu5jwWH7vcd%2FhbDyYfIMK%2BhaEBqQPwmtgycW9Y%2BQKUqn0i2EVvvD2apVJiL5BI2knNUV0qapGFTCzvrPL1bIRb4%2BBmAFE9G4s09ZZziMNDo55rn%2B2jA7%2BnwoAb%2BcrhNwzvZH7efE%2Fmgjw27l17n8cUcZE3BzBYLfoQahcQbBRAmhEPGK7j9DP%2B8ImjaNsDO7rAqhDtf9Z2BanorYgXqndYviB5uF0%2BOO3cb%2FBzPePeYs7DSiPX23vgBlonhG0MXIr9ody3E%2FPKAcgh%2BnfyGC5DxfrmHaVhqObOfQ4z0nWzSwmqxF9xtfnXYcDgVPgz7dWHlJzJYES8DraqZKh5aS76plNsnsMjrxgSadow8bOywQY6pgF5idXwFZ3vBtpljhwgh9iTBNkME4ACgS%2FNYOLnGqixLrrCJlcgrYSbYscddqUF2qra7GHdB5s8%2FEnDVDL2InRW38u%2BxCYsdy0od52QjNLwPN5NpQ01d8UxxKooPUfS1M4sx4PBCidDTu3yxjXOb06JPP1lIJIoZtGy8tj91l9hya57OUdaJ292Q2PB1wzSSsbfCWfgqxEHu%2FgcZ1FT5JE8DwWpmhx5&X-Amz-Signature=dcf015d8cc7475579a9b866b6fd435ec774755a4f26c6906aeffa842c50a3555&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247TU67W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiet0ITRXAVkRZRAyLrZtTy%2B6C4%2Bf%2FIAXXY2ETHqq%2FgAIgfRZ9040agbQzMP%2F607XQP%2B50EsiuQjnHT%2F32crYgzBwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAqnULv0WuzbNfT%2F0ircAzebX8SiZcQxkHUEsO4dmKryRviNgQPepRQ9AI5p%2FM%2BdwAeQz3YpFjd6XyyFqNUE23TBdXAtnJUnz7PjiZ%2BMM9dXZZtReD7nA1XaVM%2FSa2c0C3DlECbwnUevLzueXwN23nq1MUu5aHVduhZE6ot%2FBqlO5R0OjQo2TWDm%2BbXGwXJtYNbNX%2B3CEX5YcO067QzubFv8Zp2xNvn3LPPoyTiwjvPu3wzzUQD4EdGrIX9vT3z%2F0oNn6QZtAB7BUs3fUMsxYot5g1qU%2B3%2BnCTaIMausbH1DFSHORd8EjSSy6XJiq9w%2FXZZGiUWemlTl8u3J5QIfZfVCG3TCmngCfvoxPyT%2FEnqzcOmRcd9sYjJ2ge5F3O1razSj1vRHC0yN0OhxyU7SN99v59xvqrNiPSYgJzPQ5fOQI86xoLiZv9eP5j89lJtLQ4oXql3dYIyOz5%2BwSTIZKW58lek0nb8C8xNNDTRXUMXVutk%2F5GqeCRr0%2BAGT%2BLiDf4mjpqNpG7jvCfe7Zlwr2T%2BcZdG%2BXp5JjnkFUf1RfaiIL7VBCD1XdA8%2B0qlfNR7K%2FUxP0dp0LHIQt3T5aoqMvwxEC2y7BSMzn6KT%2FRg%2FyOVUBwiW%2Fc0UyGXeCqOcncv9uBHFi7Nzecr%2Fd3m2MNzf8cAGOqUBpeqU8pFPjw1mkORKiIV27aMBsb1%2FmcfLEYnbGwIPICzjjDUrjQLJCg9AyYwkv5V6uMsO5a4u9PMLwpc%2BJIB5dP2Yf8vEspPBwy18IhlKG%2BSVnd%2FcwS1TpOt%2Btdo7Cvdx2oABZbdzBTad7YKYEfJPFoOAqjVGlDE9qKTdFVcwfylfLQ%2B5AOWX1TojSCEIMgzatOP20bI75MLJMvg1DqKoRNjeDqg3&X-Amz-Signature=af5d275cfe70ebbdf7c339edad0ad3234f2fe5fc576f739a5f05bf79a306377e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247TU67W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiet0ITRXAVkRZRAyLrZtTy%2B6C4%2Bf%2FIAXXY2ETHqq%2FgAIgfRZ9040agbQzMP%2F607XQP%2B50EsiuQjnHT%2F32crYgzBwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAqnULv0WuzbNfT%2F0ircAzebX8SiZcQxkHUEsO4dmKryRviNgQPepRQ9AI5p%2FM%2BdwAeQz3YpFjd6XyyFqNUE23TBdXAtnJUnz7PjiZ%2BMM9dXZZtReD7nA1XaVM%2FSa2c0C3DlECbwnUevLzueXwN23nq1MUu5aHVduhZE6ot%2FBqlO5R0OjQo2TWDm%2BbXGwXJtYNbNX%2B3CEX5YcO067QzubFv8Zp2xNvn3LPPoyTiwjvPu3wzzUQD4EdGrIX9vT3z%2F0oNn6QZtAB7BUs3fUMsxYot5g1qU%2B3%2BnCTaIMausbH1DFSHORd8EjSSy6XJiq9w%2FXZZGiUWemlTl8u3J5QIfZfVCG3TCmngCfvoxPyT%2FEnqzcOmRcd9sYjJ2ge5F3O1razSj1vRHC0yN0OhxyU7SN99v59xvqrNiPSYgJzPQ5fOQI86xoLiZv9eP5j89lJtLQ4oXql3dYIyOz5%2BwSTIZKW58lek0nb8C8xNNDTRXUMXVutk%2F5GqeCRr0%2BAGT%2BLiDf4mjpqNpG7jvCfe7Zlwr2T%2BcZdG%2BXp5JjnkFUf1RfaiIL7VBCD1XdA8%2B0qlfNR7K%2FUxP0dp0LHIQt3T5aoqMvwxEC2y7BSMzn6KT%2FRg%2FyOVUBwiW%2Fc0UyGXeCqOcncv9uBHFi7Nzecr%2Fd3m2MNzf8cAGOqUBpeqU8pFPjw1mkORKiIV27aMBsb1%2FmcfLEYnbGwIPICzjjDUrjQLJCg9AyYwkv5V6uMsO5a4u9PMLwpc%2BJIB5dP2Yf8vEspPBwy18IhlKG%2BSVnd%2FcwS1TpOt%2Btdo7Cvdx2oABZbdzBTad7YKYEfJPFoOAqjVGlDE9qKTdFVcwfylfLQ%2B5AOWX1TojSCEIMgzatOP20bI75MLJMvg1DqKoRNjeDqg3&X-Amz-Signature=c337cc81ed9782ad294d37398ba769eb66e798ff02629a5bda65144247bf518d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247TU67W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiet0ITRXAVkRZRAyLrZtTy%2B6C4%2Bf%2FIAXXY2ETHqq%2FgAIgfRZ9040agbQzMP%2F607XQP%2B50EsiuQjnHT%2F32crYgzBwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAqnULv0WuzbNfT%2F0ircAzebX8SiZcQxkHUEsO4dmKryRviNgQPepRQ9AI5p%2FM%2BdwAeQz3YpFjd6XyyFqNUE23TBdXAtnJUnz7PjiZ%2BMM9dXZZtReD7nA1XaVM%2FSa2c0C3DlECbwnUevLzueXwN23nq1MUu5aHVduhZE6ot%2FBqlO5R0OjQo2TWDm%2BbXGwXJtYNbNX%2B3CEX5YcO067QzubFv8Zp2xNvn3LPPoyTiwjvPu3wzzUQD4EdGrIX9vT3z%2F0oNn6QZtAB7BUs3fUMsxYot5g1qU%2B3%2BnCTaIMausbH1DFSHORd8EjSSy6XJiq9w%2FXZZGiUWemlTl8u3J5QIfZfVCG3TCmngCfvoxPyT%2FEnqzcOmRcd9sYjJ2ge5F3O1razSj1vRHC0yN0OhxyU7SN99v59xvqrNiPSYgJzPQ5fOQI86xoLiZv9eP5j89lJtLQ4oXql3dYIyOz5%2BwSTIZKW58lek0nb8C8xNNDTRXUMXVutk%2F5GqeCRr0%2BAGT%2BLiDf4mjpqNpG7jvCfe7Zlwr2T%2BcZdG%2BXp5JjnkFUf1RfaiIL7VBCD1XdA8%2B0qlfNR7K%2FUxP0dp0LHIQt3T5aoqMvwxEC2y7BSMzn6KT%2FRg%2FyOVUBwiW%2Fc0UyGXeCqOcncv9uBHFi7Nzecr%2Fd3m2MNzf8cAGOqUBpeqU8pFPjw1mkORKiIV27aMBsb1%2FmcfLEYnbGwIPICzjjDUrjQLJCg9AyYwkv5V6uMsO5a4u9PMLwpc%2BJIB5dP2Yf8vEspPBwy18IhlKG%2BSVnd%2FcwS1TpOt%2Btdo7Cvdx2oABZbdzBTad7YKYEfJPFoOAqjVGlDE9qKTdFVcwfylfLQ%2B5AOWX1TojSCEIMgzatOP20bI75MLJMvg1DqKoRNjeDqg3&X-Amz-Signature=16940f52a7ed9ddddd4855077230d7e30ac05325046bb7f04b502f022ce18329&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247TU67W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiet0ITRXAVkRZRAyLrZtTy%2B6C4%2Bf%2FIAXXY2ETHqq%2FgAIgfRZ9040agbQzMP%2F607XQP%2B50EsiuQjnHT%2F32crYgzBwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAqnULv0WuzbNfT%2F0ircAzebX8SiZcQxkHUEsO4dmKryRviNgQPepRQ9AI5p%2FM%2BdwAeQz3YpFjd6XyyFqNUE23TBdXAtnJUnz7PjiZ%2BMM9dXZZtReD7nA1XaVM%2FSa2c0C3DlECbwnUevLzueXwN23nq1MUu5aHVduhZE6ot%2FBqlO5R0OjQo2TWDm%2BbXGwXJtYNbNX%2B3CEX5YcO067QzubFv8Zp2xNvn3LPPoyTiwjvPu3wzzUQD4EdGrIX9vT3z%2F0oNn6QZtAB7BUs3fUMsxYot5g1qU%2B3%2BnCTaIMausbH1DFSHORd8EjSSy6XJiq9w%2FXZZGiUWemlTl8u3J5QIfZfVCG3TCmngCfvoxPyT%2FEnqzcOmRcd9sYjJ2ge5F3O1razSj1vRHC0yN0OhxyU7SN99v59xvqrNiPSYgJzPQ5fOQI86xoLiZv9eP5j89lJtLQ4oXql3dYIyOz5%2BwSTIZKW58lek0nb8C8xNNDTRXUMXVutk%2F5GqeCRr0%2BAGT%2BLiDf4mjpqNpG7jvCfe7Zlwr2T%2BcZdG%2BXp5JjnkFUf1RfaiIL7VBCD1XdA8%2B0qlfNR7K%2FUxP0dp0LHIQt3T5aoqMvwxEC2y7BSMzn6KT%2FRg%2FyOVUBwiW%2Fc0UyGXeCqOcncv9uBHFi7Nzecr%2Fd3m2MNzf8cAGOqUBpeqU8pFPjw1mkORKiIV27aMBsb1%2FmcfLEYnbGwIPICzjjDUrjQLJCg9AyYwkv5V6uMsO5a4u9PMLwpc%2BJIB5dP2Yf8vEspPBwy18IhlKG%2BSVnd%2FcwS1TpOt%2Btdo7Cvdx2oABZbdzBTad7YKYEfJPFoOAqjVGlDE9qKTdFVcwfylfLQ%2B5AOWX1TojSCEIMgzatOP20bI75MLJMvg1DqKoRNjeDqg3&X-Amz-Signature=4a1028ea903c2c04d41ea4870802cf5fbe88565a8273dd78d4606f6dea55f3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247TU67W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiet0ITRXAVkRZRAyLrZtTy%2B6C4%2Bf%2FIAXXY2ETHqq%2FgAIgfRZ9040agbQzMP%2F607XQP%2B50EsiuQjnHT%2F32crYgzBwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAqnULv0WuzbNfT%2F0ircAzebX8SiZcQxkHUEsO4dmKryRviNgQPepRQ9AI5p%2FM%2BdwAeQz3YpFjd6XyyFqNUE23TBdXAtnJUnz7PjiZ%2BMM9dXZZtReD7nA1XaVM%2FSa2c0C3DlECbwnUevLzueXwN23nq1MUu5aHVduhZE6ot%2FBqlO5R0OjQo2TWDm%2BbXGwXJtYNbNX%2B3CEX5YcO067QzubFv8Zp2xNvn3LPPoyTiwjvPu3wzzUQD4EdGrIX9vT3z%2F0oNn6QZtAB7BUs3fUMsxYot5g1qU%2B3%2BnCTaIMausbH1DFSHORd8EjSSy6XJiq9w%2FXZZGiUWemlTl8u3J5QIfZfVCG3TCmngCfvoxPyT%2FEnqzcOmRcd9sYjJ2ge5F3O1razSj1vRHC0yN0OhxyU7SN99v59xvqrNiPSYgJzPQ5fOQI86xoLiZv9eP5j89lJtLQ4oXql3dYIyOz5%2BwSTIZKW58lek0nb8C8xNNDTRXUMXVutk%2F5GqeCRr0%2BAGT%2BLiDf4mjpqNpG7jvCfe7Zlwr2T%2BcZdG%2BXp5JjnkFUf1RfaiIL7VBCD1XdA8%2B0qlfNR7K%2FUxP0dp0LHIQt3T5aoqMvwxEC2y7BSMzn6KT%2FRg%2FyOVUBwiW%2Fc0UyGXeCqOcncv9uBHFi7Nzecr%2Fd3m2MNzf8cAGOqUBpeqU8pFPjw1mkORKiIV27aMBsb1%2FmcfLEYnbGwIPICzjjDUrjQLJCg9AyYwkv5V6uMsO5a4u9PMLwpc%2BJIB5dP2Yf8vEspPBwy18IhlKG%2BSVnd%2FcwS1TpOt%2Btdo7Cvdx2oABZbdzBTad7YKYEfJPFoOAqjVGlDE9qKTdFVcwfylfLQ%2B5AOWX1TojSCEIMgzatOP20bI75MLJMvg1DqKoRNjeDqg3&X-Amz-Signature=500f94da34acb355846c3ba4a30b20c13d15b94e062e608d481d48b567dfdb05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247TU67W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiet0ITRXAVkRZRAyLrZtTy%2B6C4%2Bf%2FIAXXY2ETHqq%2FgAIgfRZ9040agbQzMP%2F607XQP%2B50EsiuQjnHT%2F32crYgzBwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAqnULv0WuzbNfT%2F0ircAzebX8SiZcQxkHUEsO4dmKryRviNgQPepRQ9AI5p%2FM%2BdwAeQz3YpFjd6XyyFqNUE23TBdXAtnJUnz7PjiZ%2BMM9dXZZtReD7nA1XaVM%2FSa2c0C3DlECbwnUevLzueXwN23nq1MUu5aHVduhZE6ot%2FBqlO5R0OjQo2TWDm%2BbXGwXJtYNbNX%2B3CEX5YcO067QzubFv8Zp2xNvn3LPPoyTiwjvPu3wzzUQD4EdGrIX9vT3z%2F0oNn6QZtAB7BUs3fUMsxYot5g1qU%2B3%2BnCTaIMausbH1DFSHORd8EjSSy6XJiq9w%2FXZZGiUWemlTl8u3J5QIfZfVCG3TCmngCfvoxPyT%2FEnqzcOmRcd9sYjJ2ge5F3O1razSj1vRHC0yN0OhxyU7SN99v59xvqrNiPSYgJzPQ5fOQI86xoLiZv9eP5j89lJtLQ4oXql3dYIyOz5%2BwSTIZKW58lek0nb8C8xNNDTRXUMXVutk%2F5GqeCRr0%2BAGT%2BLiDf4mjpqNpG7jvCfe7Zlwr2T%2BcZdG%2BXp5JjnkFUf1RfaiIL7VBCD1XdA8%2B0qlfNR7K%2FUxP0dp0LHIQt3T5aoqMvwxEC2y7BSMzn6KT%2FRg%2FyOVUBwiW%2Fc0UyGXeCqOcncv9uBHFi7Nzecr%2Fd3m2MNzf8cAGOqUBpeqU8pFPjw1mkORKiIV27aMBsb1%2FmcfLEYnbGwIPICzjjDUrjQLJCg9AyYwkv5V6uMsO5a4u9PMLwpc%2BJIB5dP2Yf8vEspPBwy18IhlKG%2BSVnd%2FcwS1TpOt%2Btdo7Cvdx2oABZbdzBTad7YKYEfJPFoOAqjVGlDE9qKTdFVcwfylfLQ%2B5AOWX1TojSCEIMgzatOP20bI75MLJMvg1DqKoRNjeDqg3&X-Amz-Signature=6baf3d61aab7f6b1a837329d1a5809af9e1341c13677217fc2a1f2b1176c4882&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247TU67W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiet0ITRXAVkRZRAyLrZtTy%2B6C4%2Bf%2FIAXXY2ETHqq%2FgAIgfRZ9040agbQzMP%2F607XQP%2B50EsiuQjnHT%2F32crYgzBwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAqnULv0WuzbNfT%2F0ircAzebX8SiZcQxkHUEsO4dmKryRviNgQPepRQ9AI5p%2FM%2BdwAeQz3YpFjd6XyyFqNUE23TBdXAtnJUnz7PjiZ%2BMM9dXZZtReD7nA1XaVM%2FSa2c0C3DlECbwnUevLzueXwN23nq1MUu5aHVduhZE6ot%2FBqlO5R0OjQo2TWDm%2BbXGwXJtYNbNX%2B3CEX5YcO067QzubFv8Zp2xNvn3LPPoyTiwjvPu3wzzUQD4EdGrIX9vT3z%2F0oNn6QZtAB7BUs3fUMsxYot5g1qU%2B3%2BnCTaIMausbH1DFSHORd8EjSSy6XJiq9w%2FXZZGiUWemlTl8u3J5QIfZfVCG3TCmngCfvoxPyT%2FEnqzcOmRcd9sYjJ2ge5F3O1razSj1vRHC0yN0OhxyU7SN99v59xvqrNiPSYgJzPQ5fOQI86xoLiZv9eP5j89lJtLQ4oXql3dYIyOz5%2BwSTIZKW58lek0nb8C8xNNDTRXUMXVutk%2F5GqeCRr0%2BAGT%2BLiDf4mjpqNpG7jvCfe7Zlwr2T%2BcZdG%2BXp5JjnkFUf1RfaiIL7VBCD1XdA8%2B0qlfNR7K%2FUxP0dp0LHIQt3T5aoqMvwxEC2y7BSMzn6KT%2FRg%2FyOVUBwiW%2Fc0UyGXeCqOcncv9uBHFi7Nzecr%2Fd3m2MNzf8cAGOqUBpeqU8pFPjw1mkORKiIV27aMBsb1%2FmcfLEYnbGwIPICzjjDUrjQLJCg9AyYwkv5V6uMsO5a4u9PMLwpc%2BJIB5dP2Yf8vEspPBwy18IhlKG%2BSVnd%2FcwS1TpOt%2Btdo7Cvdx2oABZbdzBTad7YKYEfJPFoOAqjVGlDE9qKTdFVcwfylfLQ%2B5AOWX1TojSCEIMgzatOP20bI75MLJMvg1DqKoRNjeDqg3&X-Amz-Signature=0e3d0383e4abddb26fa4fcbd1d1a0b8b3c36db93e10e846609f5f4f2bf0d23a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247TU67W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiet0ITRXAVkRZRAyLrZtTy%2B6C4%2Bf%2FIAXXY2ETHqq%2FgAIgfRZ9040agbQzMP%2F607XQP%2B50EsiuQjnHT%2F32crYgzBwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAqnULv0WuzbNfT%2F0ircAzebX8SiZcQxkHUEsO4dmKryRviNgQPepRQ9AI5p%2FM%2BdwAeQz3YpFjd6XyyFqNUE23TBdXAtnJUnz7PjiZ%2BMM9dXZZtReD7nA1XaVM%2FSa2c0C3DlECbwnUevLzueXwN23nq1MUu5aHVduhZE6ot%2FBqlO5R0OjQo2TWDm%2BbXGwXJtYNbNX%2B3CEX5YcO067QzubFv8Zp2xNvn3LPPoyTiwjvPu3wzzUQD4EdGrIX9vT3z%2F0oNn6QZtAB7BUs3fUMsxYot5g1qU%2B3%2BnCTaIMausbH1DFSHORd8EjSSy6XJiq9w%2FXZZGiUWemlTl8u3J5QIfZfVCG3TCmngCfvoxPyT%2FEnqzcOmRcd9sYjJ2ge5F3O1razSj1vRHC0yN0OhxyU7SN99v59xvqrNiPSYgJzPQ5fOQI86xoLiZv9eP5j89lJtLQ4oXql3dYIyOz5%2BwSTIZKW58lek0nb8C8xNNDTRXUMXVutk%2F5GqeCRr0%2BAGT%2BLiDf4mjpqNpG7jvCfe7Zlwr2T%2BcZdG%2BXp5JjnkFUf1RfaiIL7VBCD1XdA8%2B0qlfNR7K%2FUxP0dp0LHIQt3T5aoqMvwxEC2y7BSMzn6KT%2FRg%2FyOVUBwiW%2Fc0UyGXeCqOcncv9uBHFi7Nzecr%2Fd3m2MNzf8cAGOqUBpeqU8pFPjw1mkORKiIV27aMBsb1%2FmcfLEYnbGwIPICzjjDUrjQLJCg9AyYwkv5V6uMsO5a4u9PMLwpc%2BJIB5dP2Yf8vEspPBwy18IhlKG%2BSVnd%2FcwS1TpOt%2Btdo7Cvdx2oABZbdzBTad7YKYEfJPFoOAqjVGlDE9qKTdFVcwfylfLQ%2B5AOWX1TojSCEIMgzatOP20bI75MLJMvg1DqKoRNjeDqg3&X-Amz-Signature=b4aca98638dd7af1fed9a80b57670797bd81b96862474c7c9aa88b40bbbf3443&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

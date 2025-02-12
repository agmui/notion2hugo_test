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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5FMDAB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B0qcm%2F3AwXyQl9SET%2FPOxMZo86tKGOFgJYiO2ck0InAiEA5JlYMUUhwCLlOQ2HSrzyl%2Ff9Xlo8CB4RNZfEbuE3Y3AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwLvq6MoNzUFepvRyrcA9UcFdeXFBoZsoHpw9QONcptLRqhA3FDaGZsxWoC1R7eypeukqKDRNy%2BhDlk%2FB8EtnTx4URM4SWDl0Y18CTR5gc3kax1WcczF3zbPtmagvPE%2BAa%2FP8EQxry1gNm7C1%2FtN53x%2Fi8qgjdtgoqf%2FmtsO%2Bn4b3v6dzN0JCcfpwZwAUqVDGim8LyHW7KDI5p4rNbahR79uJnQaxk%2FmcFQEsspfJfXxMZkbUu7UX2ykQFF2xmJBgLDZ0m7eU8rTCV0ZSqU66gADmb15DBZvuW%2FZi9tzzqgSc1QGzVs0UUrHItJstFKOvZp9co90ebrhzAarhDHny6kwRhNx2o59FtaWA%2FMLtUPE2zJAerOO1gHXxkQqNeKdksheHuvn25jt0bH%2BuAWyS%2FX7QrO%2FuG4nbtnEq3XD5degr1EpqpTNqcLLOmFQLbUP5lsOLzzTUywDJ%2BNecIPC6v%2BjuZLAP1vJHvhyip%2Fuvey2A1XzB0aaQMHRGZKqzANBr7pPzppxM4vUtPUIkGLhwJIslAzn2%2FaVef0wKOQHtj5Z8xNHyql1mF3VlMo9%2BXDYfePmz5xt%2FRyCyAG7MIxFsgQnJphsxphMKnvBVJNaOOmdEg6n%2BocwoIjoXH8PJMG3t%2BfyuhjA6xreXItMOfFtL0GOqUB1S9q5c%2BvFA05dljzzNUNbir%2FWW%2BDEvNZo1nTGeyau0%2Bra1g4Yihe7Ps0ney5PdZlLoYHCQPjo7C0YPizG1CuXN449hcanuJAI2%2FXJTivwo8V%2B5axc%2FxEXJN4t0gVOLtPD767PZ%2FMo1mc3ix24q3KRaLXr3gbcPPkiLEXQfAo49XYsluqVi58aNdC4dk2Fqo6Gx0j7JuBERE3bMTGDMlizw%2BxkUTX&X-Amz-Signature=654d767ca12d17b6a61081dde90bef54b73fe5f030ee45674f2731de376881b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5FMDAB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B0qcm%2F3AwXyQl9SET%2FPOxMZo86tKGOFgJYiO2ck0InAiEA5JlYMUUhwCLlOQ2HSrzyl%2Ff9Xlo8CB4RNZfEbuE3Y3AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwLvq6MoNzUFepvRyrcA9UcFdeXFBoZsoHpw9QONcptLRqhA3FDaGZsxWoC1R7eypeukqKDRNy%2BhDlk%2FB8EtnTx4URM4SWDl0Y18CTR5gc3kax1WcczF3zbPtmagvPE%2BAa%2FP8EQxry1gNm7C1%2FtN53x%2Fi8qgjdtgoqf%2FmtsO%2Bn4b3v6dzN0JCcfpwZwAUqVDGim8LyHW7KDI5p4rNbahR79uJnQaxk%2FmcFQEsspfJfXxMZkbUu7UX2ykQFF2xmJBgLDZ0m7eU8rTCV0ZSqU66gADmb15DBZvuW%2FZi9tzzqgSc1QGzVs0UUrHItJstFKOvZp9co90ebrhzAarhDHny6kwRhNx2o59FtaWA%2FMLtUPE2zJAerOO1gHXxkQqNeKdksheHuvn25jt0bH%2BuAWyS%2FX7QrO%2FuG4nbtnEq3XD5degr1EpqpTNqcLLOmFQLbUP5lsOLzzTUywDJ%2BNecIPC6v%2BjuZLAP1vJHvhyip%2Fuvey2A1XzB0aaQMHRGZKqzANBr7pPzppxM4vUtPUIkGLhwJIslAzn2%2FaVef0wKOQHtj5Z8xNHyql1mF3VlMo9%2BXDYfePmz5xt%2FRyCyAG7MIxFsgQnJphsxphMKnvBVJNaOOmdEg6n%2BocwoIjoXH8PJMG3t%2BfyuhjA6xreXItMOfFtL0GOqUB1S9q5c%2BvFA05dljzzNUNbir%2FWW%2BDEvNZo1nTGeyau0%2Bra1g4Yihe7Ps0ney5PdZlLoYHCQPjo7C0YPizG1CuXN449hcanuJAI2%2FXJTivwo8V%2B5axc%2FxEXJN4t0gVOLtPD767PZ%2FMo1mc3ix24q3KRaLXr3gbcPPkiLEXQfAo49XYsluqVi58aNdC4dk2Fqo6Gx0j7JuBERE3bMTGDMlizw%2BxkUTX&X-Amz-Signature=648c597540661bd16890b097dbb2026b2ff53de0316434f111eec6870789ff09&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5FMDAB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B0qcm%2F3AwXyQl9SET%2FPOxMZo86tKGOFgJYiO2ck0InAiEA5JlYMUUhwCLlOQ2HSrzyl%2Ff9Xlo8CB4RNZfEbuE3Y3AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwLvq6MoNzUFepvRyrcA9UcFdeXFBoZsoHpw9QONcptLRqhA3FDaGZsxWoC1R7eypeukqKDRNy%2BhDlk%2FB8EtnTx4URM4SWDl0Y18CTR5gc3kax1WcczF3zbPtmagvPE%2BAa%2FP8EQxry1gNm7C1%2FtN53x%2Fi8qgjdtgoqf%2FmtsO%2Bn4b3v6dzN0JCcfpwZwAUqVDGim8LyHW7KDI5p4rNbahR79uJnQaxk%2FmcFQEsspfJfXxMZkbUu7UX2ykQFF2xmJBgLDZ0m7eU8rTCV0ZSqU66gADmb15DBZvuW%2FZi9tzzqgSc1QGzVs0UUrHItJstFKOvZp9co90ebrhzAarhDHny6kwRhNx2o59FtaWA%2FMLtUPE2zJAerOO1gHXxkQqNeKdksheHuvn25jt0bH%2BuAWyS%2FX7QrO%2FuG4nbtnEq3XD5degr1EpqpTNqcLLOmFQLbUP5lsOLzzTUywDJ%2BNecIPC6v%2BjuZLAP1vJHvhyip%2Fuvey2A1XzB0aaQMHRGZKqzANBr7pPzppxM4vUtPUIkGLhwJIslAzn2%2FaVef0wKOQHtj5Z8xNHyql1mF3VlMo9%2BXDYfePmz5xt%2FRyCyAG7MIxFsgQnJphsxphMKnvBVJNaOOmdEg6n%2BocwoIjoXH8PJMG3t%2BfyuhjA6xreXItMOfFtL0GOqUB1S9q5c%2BvFA05dljzzNUNbir%2FWW%2BDEvNZo1nTGeyau0%2Bra1g4Yihe7Ps0ney5PdZlLoYHCQPjo7C0YPizG1CuXN449hcanuJAI2%2FXJTivwo8V%2B5axc%2FxEXJN4t0gVOLtPD767PZ%2FMo1mc3ix24q3KRaLXr3gbcPPkiLEXQfAo49XYsluqVi58aNdC4dk2Fqo6Gx0j7JuBERE3bMTGDMlizw%2BxkUTX&X-Amz-Signature=8a5b3a1b21ceaf952225cf84dc58104c9ebd6ec9ddd8585b60fc5a82b69a8ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5FMDAB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B0qcm%2F3AwXyQl9SET%2FPOxMZo86tKGOFgJYiO2ck0InAiEA5JlYMUUhwCLlOQ2HSrzyl%2Ff9Xlo8CB4RNZfEbuE3Y3AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwLvq6MoNzUFepvRyrcA9UcFdeXFBoZsoHpw9QONcptLRqhA3FDaGZsxWoC1R7eypeukqKDRNy%2BhDlk%2FB8EtnTx4URM4SWDl0Y18CTR5gc3kax1WcczF3zbPtmagvPE%2BAa%2FP8EQxry1gNm7C1%2FtN53x%2Fi8qgjdtgoqf%2FmtsO%2Bn4b3v6dzN0JCcfpwZwAUqVDGim8LyHW7KDI5p4rNbahR79uJnQaxk%2FmcFQEsspfJfXxMZkbUu7UX2ykQFF2xmJBgLDZ0m7eU8rTCV0ZSqU66gADmb15DBZvuW%2FZi9tzzqgSc1QGzVs0UUrHItJstFKOvZp9co90ebrhzAarhDHny6kwRhNx2o59FtaWA%2FMLtUPE2zJAerOO1gHXxkQqNeKdksheHuvn25jt0bH%2BuAWyS%2FX7QrO%2FuG4nbtnEq3XD5degr1EpqpTNqcLLOmFQLbUP5lsOLzzTUywDJ%2BNecIPC6v%2BjuZLAP1vJHvhyip%2Fuvey2A1XzB0aaQMHRGZKqzANBr7pPzppxM4vUtPUIkGLhwJIslAzn2%2FaVef0wKOQHtj5Z8xNHyql1mF3VlMo9%2BXDYfePmz5xt%2FRyCyAG7MIxFsgQnJphsxphMKnvBVJNaOOmdEg6n%2BocwoIjoXH8PJMG3t%2BfyuhjA6xreXItMOfFtL0GOqUB1S9q5c%2BvFA05dljzzNUNbir%2FWW%2BDEvNZo1nTGeyau0%2Bra1g4Yihe7Ps0ney5PdZlLoYHCQPjo7C0YPizG1CuXN449hcanuJAI2%2FXJTivwo8V%2B5axc%2FxEXJN4t0gVOLtPD767PZ%2FMo1mc3ix24q3KRaLXr3gbcPPkiLEXQfAo49XYsluqVi58aNdC4dk2Fqo6Gx0j7JuBERE3bMTGDMlizw%2BxkUTX&X-Amz-Signature=0c27d3c82a316305ece11e4e3802e579cbc7837249a458d325b362fbfbfcba8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5FMDAB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B0qcm%2F3AwXyQl9SET%2FPOxMZo86tKGOFgJYiO2ck0InAiEA5JlYMUUhwCLlOQ2HSrzyl%2Ff9Xlo8CB4RNZfEbuE3Y3AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwLvq6MoNzUFepvRyrcA9UcFdeXFBoZsoHpw9QONcptLRqhA3FDaGZsxWoC1R7eypeukqKDRNy%2BhDlk%2FB8EtnTx4URM4SWDl0Y18CTR5gc3kax1WcczF3zbPtmagvPE%2BAa%2FP8EQxry1gNm7C1%2FtN53x%2Fi8qgjdtgoqf%2FmtsO%2Bn4b3v6dzN0JCcfpwZwAUqVDGim8LyHW7KDI5p4rNbahR79uJnQaxk%2FmcFQEsspfJfXxMZkbUu7UX2ykQFF2xmJBgLDZ0m7eU8rTCV0ZSqU66gADmb15DBZvuW%2FZi9tzzqgSc1QGzVs0UUrHItJstFKOvZp9co90ebrhzAarhDHny6kwRhNx2o59FtaWA%2FMLtUPE2zJAerOO1gHXxkQqNeKdksheHuvn25jt0bH%2BuAWyS%2FX7QrO%2FuG4nbtnEq3XD5degr1EpqpTNqcLLOmFQLbUP5lsOLzzTUywDJ%2BNecIPC6v%2BjuZLAP1vJHvhyip%2Fuvey2A1XzB0aaQMHRGZKqzANBr7pPzppxM4vUtPUIkGLhwJIslAzn2%2FaVef0wKOQHtj5Z8xNHyql1mF3VlMo9%2BXDYfePmz5xt%2FRyCyAG7MIxFsgQnJphsxphMKnvBVJNaOOmdEg6n%2BocwoIjoXH8PJMG3t%2BfyuhjA6xreXItMOfFtL0GOqUB1S9q5c%2BvFA05dljzzNUNbir%2FWW%2BDEvNZo1nTGeyau0%2Bra1g4Yihe7Ps0ney5PdZlLoYHCQPjo7C0YPizG1CuXN449hcanuJAI2%2FXJTivwo8V%2B5axc%2FxEXJN4t0gVOLtPD767PZ%2FMo1mc3ix24q3KRaLXr3gbcPPkiLEXQfAo49XYsluqVi58aNdC4dk2Fqo6Gx0j7JuBERE3bMTGDMlizw%2BxkUTX&X-Amz-Signature=2be7de69d9627b2205e3464a1d1a99e0f27c2de62d0af710005f302e423aa7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5FMDAB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B0qcm%2F3AwXyQl9SET%2FPOxMZo86tKGOFgJYiO2ck0InAiEA5JlYMUUhwCLlOQ2HSrzyl%2Ff9Xlo8CB4RNZfEbuE3Y3AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwLvq6MoNzUFepvRyrcA9UcFdeXFBoZsoHpw9QONcptLRqhA3FDaGZsxWoC1R7eypeukqKDRNy%2BhDlk%2FB8EtnTx4URM4SWDl0Y18CTR5gc3kax1WcczF3zbPtmagvPE%2BAa%2FP8EQxry1gNm7C1%2FtN53x%2Fi8qgjdtgoqf%2FmtsO%2Bn4b3v6dzN0JCcfpwZwAUqVDGim8LyHW7KDI5p4rNbahR79uJnQaxk%2FmcFQEsspfJfXxMZkbUu7UX2ykQFF2xmJBgLDZ0m7eU8rTCV0ZSqU66gADmb15DBZvuW%2FZi9tzzqgSc1QGzVs0UUrHItJstFKOvZp9co90ebrhzAarhDHny6kwRhNx2o59FtaWA%2FMLtUPE2zJAerOO1gHXxkQqNeKdksheHuvn25jt0bH%2BuAWyS%2FX7QrO%2FuG4nbtnEq3XD5degr1EpqpTNqcLLOmFQLbUP5lsOLzzTUywDJ%2BNecIPC6v%2BjuZLAP1vJHvhyip%2Fuvey2A1XzB0aaQMHRGZKqzANBr7pPzppxM4vUtPUIkGLhwJIslAzn2%2FaVef0wKOQHtj5Z8xNHyql1mF3VlMo9%2BXDYfePmz5xt%2FRyCyAG7MIxFsgQnJphsxphMKnvBVJNaOOmdEg6n%2BocwoIjoXH8PJMG3t%2BfyuhjA6xreXItMOfFtL0GOqUB1S9q5c%2BvFA05dljzzNUNbir%2FWW%2BDEvNZo1nTGeyau0%2Bra1g4Yihe7Ps0ney5PdZlLoYHCQPjo7C0YPizG1CuXN449hcanuJAI2%2FXJTivwo8V%2B5axc%2FxEXJN4t0gVOLtPD767PZ%2FMo1mc3ix24q3KRaLXr3gbcPPkiLEXQfAo49XYsluqVi58aNdC4dk2Fqo6Gx0j7JuBERE3bMTGDMlizw%2BxkUTX&X-Amz-Signature=653ff245562c2920ace5176a80bcd22b4d61fbcc5904e35000c252e0c131079e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5FMDAB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B0qcm%2F3AwXyQl9SET%2FPOxMZo86tKGOFgJYiO2ck0InAiEA5JlYMUUhwCLlOQ2HSrzyl%2Ff9Xlo8CB4RNZfEbuE3Y3AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwLvq6MoNzUFepvRyrcA9UcFdeXFBoZsoHpw9QONcptLRqhA3FDaGZsxWoC1R7eypeukqKDRNy%2BhDlk%2FB8EtnTx4URM4SWDl0Y18CTR5gc3kax1WcczF3zbPtmagvPE%2BAa%2FP8EQxry1gNm7C1%2FtN53x%2Fi8qgjdtgoqf%2FmtsO%2Bn4b3v6dzN0JCcfpwZwAUqVDGim8LyHW7KDI5p4rNbahR79uJnQaxk%2FmcFQEsspfJfXxMZkbUu7UX2ykQFF2xmJBgLDZ0m7eU8rTCV0ZSqU66gADmb15DBZvuW%2FZi9tzzqgSc1QGzVs0UUrHItJstFKOvZp9co90ebrhzAarhDHny6kwRhNx2o59FtaWA%2FMLtUPE2zJAerOO1gHXxkQqNeKdksheHuvn25jt0bH%2BuAWyS%2FX7QrO%2FuG4nbtnEq3XD5degr1EpqpTNqcLLOmFQLbUP5lsOLzzTUywDJ%2BNecIPC6v%2BjuZLAP1vJHvhyip%2Fuvey2A1XzB0aaQMHRGZKqzANBr7pPzppxM4vUtPUIkGLhwJIslAzn2%2FaVef0wKOQHtj5Z8xNHyql1mF3VlMo9%2BXDYfePmz5xt%2FRyCyAG7MIxFsgQnJphsxphMKnvBVJNaOOmdEg6n%2BocwoIjoXH8PJMG3t%2BfyuhjA6xreXItMOfFtL0GOqUB1S9q5c%2BvFA05dljzzNUNbir%2FWW%2BDEvNZo1nTGeyau0%2Bra1g4Yihe7Ps0ney5PdZlLoYHCQPjo7C0YPizG1CuXN449hcanuJAI2%2FXJTivwo8V%2B5axc%2FxEXJN4t0gVOLtPD767PZ%2FMo1mc3ix24q3KRaLXr3gbcPPkiLEXQfAo49XYsluqVi58aNdC4dk2Fqo6Gx0j7JuBERE3bMTGDMlizw%2BxkUTX&X-Amz-Signature=a3cad1795be0b6bb7df98d5db1256e908e230dede3ebb8e3f246622d7269ee58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5FMDAB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B0qcm%2F3AwXyQl9SET%2FPOxMZo86tKGOFgJYiO2ck0InAiEA5JlYMUUhwCLlOQ2HSrzyl%2Ff9Xlo8CB4RNZfEbuE3Y3AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwLvq6MoNzUFepvRyrcA9UcFdeXFBoZsoHpw9QONcptLRqhA3FDaGZsxWoC1R7eypeukqKDRNy%2BhDlk%2FB8EtnTx4URM4SWDl0Y18CTR5gc3kax1WcczF3zbPtmagvPE%2BAa%2FP8EQxry1gNm7C1%2FtN53x%2Fi8qgjdtgoqf%2FmtsO%2Bn4b3v6dzN0JCcfpwZwAUqVDGim8LyHW7KDI5p4rNbahR79uJnQaxk%2FmcFQEsspfJfXxMZkbUu7UX2ykQFF2xmJBgLDZ0m7eU8rTCV0ZSqU66gADmb15DBZvuW%2FZi9tzzqgSc1QGzVs0UUrHItJstFKOvZp9co90ebrhzAarhDHny6kwRhNx2o59FtaWA%2FMLtUPE2zJAerOO1gHXxkQqNeKdksheHuvn25jt0bH%2BuAWyS%2FX7QrO%2FuG4nbtnEq3XD5degr1EpqpTNqcLLOmFQLbUP5lsOLzzTUywDJ%2BNecIPC6v%2BjuZLAP1vJHvhyip%2Fuvey2A1XzB0aaQMHRGZKqzANBr7pPzppxM4vUtPUIkGLhwJIslAzn2%2FaVef0wKOQHtj5Z8xNHyql1mF3VlMo9%2BXDYfePmz5xt%2FRyCyAG7MIxFsgQnJphsxphMKnvBVJNaOOmdEg6n%2BocwoIjoXH8PJMG3t%2BfyuhjA6xreXItMOfFtL0GOqUB1S9q5c%2BvFA05dljzzNUNbir%2FWW%2BDEvNZo1nTGeyau0%2Bra1g4Yihe7Ps0ney5PdZlLoYHCQPjo7C0YPizG1CuXN449hcanuJAI2%2FXJTivwo8V%2B5axc%2FxEXJN4t0gVOLtPD767PZ%2FMo1mc3ix24q3KRaLXr3gbcPPkiLEXQfAo49XYsluqVi58aNdC4dk2Fqo6Gx0j7JuBERE3bMTGDMlizw%2BxkUTX&X-Amz-Signature=85cdddb87552f5d0b5f3e2adaa33f1cf15ed41408d55eac491377c3db74f3c26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

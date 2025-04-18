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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNHQBER%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqMMW1392mw7VhbHhNxd6anZ7Mwltx9VHYjEAi0xkLUAiAF6Onoqw2gxWiWFEBMp551KDbtRamL%2FKOs4fCr9Us%2BVSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMslGC3uvzvo%2Fn7nZQKtwDmDBKs4kFJga2rfMNWh%2BnPHLtnRurmUNITQKM3eRI5rKhnHbdkgp1OZPnrm03fyarfTsT4fzPlEq6Pt7h7SUSBoy66bGqdDYdq0ssSXM%2F31rU8ZRIcOBbNyuzJ%2FZjKIvOYfqhJRu7X4j3JggkhdRkOoYt97c4qCaD%2Bw2RGxYH0sp9n0puBF7kTMyCv0Z1%2FdyjJ8XugwP%2F2DzGG71xjHq7oNqrMNCbKKq8wqMJ5MqwJjmkFhtt8PZZCsaUL%2B8rMySIPKEcQMXhrGq%2FjmR6mxOAXY9UgLkcrw5PZG%2FCKPPYoiv6t5%2FYpDc47lWe7XtYOOGEgJ1VWDxopJeUmD%2F0Fu3sqntXBdSiafzhOzHHrFjdU2pJlmTmbFOuEGwNGb4UqAh%2BoqmMJLmSoFUnp4mZ0sP8ZqEVz953u%2B6JDVDihnZhvruLCHXkpZNwdMxUThxLViYnkfoTXekMj%2Badwfyl0o4hAYE32WWzHVEpsTwnXElQpoVqt6J3%2BCr9KVTqWglxq0sfb1c1kWqMYMO4vDuK%2BAaMMCoD1eQQeCUUOJ0%2BOODACKKPOabVIKWuWFtg7hnl3Eui0FJlVi3QO0BDMUWRLhGEWRbENlLbTYaH6nbWM7R64tnhpqeSGx2FIMss1Hgw6qyIwAY6pgE%2FDLvfIu3azb3coQ2SekaXz%2F4Tt9LuwQ%2BFTDl28lt0pTvY5bCOGQbcfPqqbmrtvofhbQ39vz8IOy523fzEGhM0403n835E7aYyoQt352zlev4zPYCIgX34DlhqIx8xIXZOg1dxdeSxusdD41Kt5hUX9ucKIrx3jOCFJdYmEmQ4mVqw5whbfAd%2Fxq25Xw%2FiCKqhM5%2FX%2B%2FqtOZhGDYnNzmltVw2vwUon&X-Amz-Signature=6c53762cdd1749b38239c55777bcc63c41fa92f8312bbaad336d80a1c7966143&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNHQBER%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqMMW1392mw7VhbHhNxd6anZ7Mwltx9VHYjEAi0xkLUAiAF6Onoqw2gxWiWFEBMp551KDbtRamL%2FKOs4fCr9Us%2BVSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMslGC3uvzvo%2Fn7nZQKtwDmDBKs4kFJga2rfMNWh%2BnPHLtnRurmUNITQKM3eRI5rKhnHbdkgp1OZPnrm03fyarfTsT4fzPlEq6Pt7h7SUSBoy66bGqdDYdq0ssSXM%2F31rU8ZRIcOBbNyuzJ%2FZjKIvOYfqhJRu7X4j3JggkhdRkOoYt97c4qCaD%2Bw2RGxYH0sp9n0puBF7kTMyCv0Z1%2FdyjJ8XugwP%2F2DzGG71xjHq7oNqrMNCbKKq8wqMJ5MqwJjmkFhtt8PZZCsaUL%2B8rMySIPKEcQMXhrGq%2FjmR6mxOAXY9UgLkcrw5PZG%2FCKPPYoiv6t5%2FYpDc47lWe7XtYOOGEgJ1VWDxopJeUmD%2F0Fu3sqntXBdSiafzhOzHHrFjdU2pJlmTmbFOuEGwNGb4UqAh%2BoqmMJLmSoFUnp4mZ0sP8ZqEVz953u%2B6JDVDihnZhvruLCHXkpZNwdMxUThxLViYnkfoTXekMj%2Badwfyl0o4hAYE32WWzHVEpsTwnXElQpoVqt6J3%2BCr9KVTqWglxq0sfb1c1kWqMYMO4vDuK%2BAaMMCoD1eQQeCUUOJ0%2BOODACKKPOabVIKWuWFtg7hnl3Eui0FJlVi3QO0BDMUWRLhGEWRbENlLbTYaH6nbWM7R64tnhpqeSGx2FIMss1Hgw6qyIwAY6pgE%2FDLvfIu3azb3coQ2SekaXz%2F4Tt9LuwQ%2BFTDl28lt0pTvY5bCOGQbcfPqqbmrtvofhbQ39vz8IOy523fzEGhM0403n835E7aYyoQt352zlev4zPYCIgX34DlhqIx8xIXZOg1dxdeSxusdD41Kt5hUX9ucKIrx3jOCFJdYmEmQ4mVqw5whbfAd%2Fxq25Xw%2FiCKqhM5%2FX%2B%2FqtOZhGDYnNzmltVw2vwUon&X-Amz-Signature=4ed1e365598b4ec9f7b5709288971475223320f901e06b7f03abe8f988659d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNHQBER%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqMMW1392mw7VhbHhNxd6anZ7Mwltx9VHYjEAi0xkLUAiAF6Onoqw2gxWiWFEBMp551KDbtRamL%2FKOs4fCr9Us%2BVSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMslGC3uvzvo%2Fn7nZQKtwDmDBKs4kFJga2rfMNWh%2BnPHLtnRurmUNITQKM3eRI5rKhnHbdkgp1OZPnrm03fyarfTsT4fzPlEq6Pt7h7SUSBoy66bGqdDYdq0ssSXM%2F31rU8ZRIcOBbNyuzJ%2FZjKIvOYfqhJRu7X4j3JggkhdRkOoYt97c4qCaD%2Bw2RGxYH0sp9n0puBF7kTMyCv0Z1%2FdyjJ8XugwP%2F2DzGG71xjHq7oNqrMNCbKKq8wqMJ5MqwJjmkFhtt8PZZCsaUL%2B8rMySIPKEcQMXhrGq%2FjmR6mxOAXY9UgLkcrw5PZG%2FCKPPYoiv6t5%2FYpDc47lWe7XtYOOGEgJ1VWDxopJeUmD%2F0Fu3sqntXBdSiafzhOzHHrFjdU2pJlmTmbFOuEGwNGb4UqAh%2BoqmMJLmSoFUnp4mZ0sP8ZqEVz953u%2B6JDVDihnZhvruLCHXkpZNwdMxUThxLViYnkfoTXekMj%2Badwfyl0o4hAYE32WWzHVEpsTwnXElQpoVqt6J3%2BCr9KVTqWglxq0sfb1c1kWqMYMO4vDuK%2BAaMMCoD1eQQeCUUOJ0%2BOODACKKPOabVIKWuWFtg7hnl3Eui0FJlVi3QO0BDMUWRLhGEWRbENlLbTYaH6nbWM7R64tnhpqeSGx2FIMss1Hgw6qyIwAY6pgE%2FDLvfIu3azb3coQ2SekaXz%2F4Tt9LuwQ%2BFTDl28lt0pTvY5bCOGQbcfPqqbmrtvofhbQ39vz8IOy523fzEGhM0403n835E7aYyoQt352zlev4zPYCIgX34DlhqIx8xIXZOg1dxdeSxusdD41Kt5hUX9ucKIrx3jOCFJdYmEmQ4mVqw5whbfAd%2Fxq25Xw%2FiCKqhM5%2FX%2B%2FqtOZhGDYnNzmltVw2vwUon&X-Amz-Signature=ad4e1397ff8657bfeda69c2dd79e160a459b87b18f82087310f641d9478ec8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNHQBER%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqMMW1392mw7VhbHhNxd6anZ7Mwltx9VHYjEAi0xkLUAiAF6Onoqw2gxWiWFEBMp551KDbtRamL%2FKOs4fCr9Us%2BVSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMslGC3uvzvo%2Fn7nZQKtwDmDBKs4kFJga2rfMNWh%2BnPHLtnRurmUNITQKM3eRI5rKhnHbdkgp1OZPnrm03fyarfTsT4fzPlEq6Pt7h7SUSBoy66bGqdDYdq0ssSXM%2F31rU8ZRIcOBbNyuzJ%2FZjKIvOYfqhJRu7X4j3JggkhdRkOoYt97c4qCaD%2Bw2RGxYH0sp9n0puBF7kTMyCv0Z1%2FdyjJ8XugwP%2F2DzGG71xjHq7oNqrMNCbKKq8wqMJ5MqwJjmkFhtt8PZZCsaUL%2B8rMySIPKEcQMXhrGq%2FjmR6mxOAXY9UgLkcrw5PZG%2FCKPPYoiv6t5%2FYpDc47lWe7XtYOOGEgJ1VWDxopJeUmD%2F0Fu3sqntXBdSiafzhOzHHrFjdU2pJlmTmbFOuEGwNGb4UqAh%2BoqmMJLmSoFUnp4mZ0sP8ZqEVz953u%2B6JDVDihnZhvruLCHXkpZNwdMxUThxLViYnkfoTXekMj%2Badwfyl0o4hAYE32WWzHVEpsTwnXElQpoVqt6J3%2BCr9KVTqWglxq0sfb1c1kWqMYMO4vDuK%2BAaMMCoD1eQQeCUUOJ0%2BOODACKKPOabVIKWuWFtg7hnl3Eui0FJlVi3QO0BDMUWRLhGEWRbENlLbTYaH6nbWM7R64tnhpqeSGx2FIMss1Hgw6qyIwAY6pgE%2FDLvfIu3azb3coQ2SekaXz%2F4Tt9LuwQ%2BFTDl28lt0pTvY5bCOGQbcfPqqbmrtvofhbQ39vz8IOy523fzEGhM0403n835E7aYyoQt352zlev4zPYCIgX34DlhqIx8xIXZOg1dxdeSxusdD41Kt5hUX9ucKIrx3jOCFJdYmEmQ4mVqw5whbfAd%2Fxq25Xw%2FiCKqhM5%2FX%2B%2FqtOZhGDYnNzmltVw2vwUon&X-Amz-Signature=7267fd885a9ff6cf5f7e59dbd46a26589c118d96fc011f7287f825c1562530ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNHQBER%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqMMW1392mw7VhbHhNxd6anZ7Mwltx9VHYjEAi0xkLUAiAF6Onoqw2gxWiWFEBMp551KDbtRamL%2FKOs4fCr9Us%2BVSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMslGC3uvzvo%2Fn7nZQKtwDmDBKs4kFJga2rfMNWh%2BnPHLtnRurmUNITQKM3eRI5rKhnHbdkgp1OZPnrm03fyarfTsT4fzPlEq6Pt7h7SUSBoy66bGqdDYdq0ssSXM%2F31rU8ZRIcOBbNyuzJ%2FZjKIvOYfqhJRu7X4j3JggkhdRkOoYt97c4qCaD%2Bw2RGxYH0sp9n0puBF7kTMyCv0Z1%2FdyjJ8XugwP%2F2DzGG71xjHq7oNqrMNCbKKq8wqMJ5MqwJjmkFhtt8PZZCsaUL%2B8rMySIPKEcQMXhrGq%2FjmR6mxOAXY9UgLkcrw5PZG%2FCKPPYoiv6t5%2FYpDc47lWe7XtYOOGEgJ1VWDxopJeUmD%2F0Fu3sqntXBdSiafzhOzHHrFjdU2pJlmTmbFOuEGwNGb4UqAh%2BoqmMJLmSoFUnp4mZ0sP8ZqEVz953u%2B6JDVDihnZhvruLCHXkpZNwdMxUThxLViYnkfoTXekMj%2Badwfyl0o4hAYE32WWzHVEpsTwnXElQpoVqt6J3%2BCr9KVTqWglxq0sfb1c1kWqMYMO4vDuK%2BAaMMCoD1eQQeCUUOJ0%2BOODACKKPOabVIKWuWFtg7hnl3Eui0FJlVi3QO0BDMUWRLhGEWRbENlLbTYaH6nbWM7R64tnhpqeSGx2FIMss1Hgw6qyIwAY6pgE%2FDLvfIu3azb3coQ2SekaXz%2F4Tt9LuwQ%2BFTDl28lt0pTvY5bCOGQbcfPqqbmrtvofhbQ39vz8IOy523fzEGhM0403n835E7aYyoQt352zlev4zPYCIgX34DlhqIx8xIXZOg1dxdeSxusdD41Kt5hUX9ucKIrx3jOCFJdYmEmQ4mVqw5whbfAd%2Fxq25Xw%2FiCKqhM5%2FX%2B%2FqtOZhGDYnNzmltVw2vwUon&X-Amz-Signature=7766e292751522e724bdfc119e3ef94e947defdc2abae020a43d766dc5825fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNHQBER%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqMMW1392mw7VhbHhNxd6anZ7Mwltx9VHYjEAi0xkLUAiAF6Onoqw2gxWiWFEBMp551KDbtRamL%2FKOs4fCr9Us%2BVSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMslGC3uvzvo%2Fn7nZQKtwDmDBKs4kFJga2rfMNWh%2BnPHLtnRurmUNITQKM3eRI5rKhnHbdkgp1OZPnrm03fyarfTsT4fzPlEq6Pt7h7SUSBoy66bGqdDYdq0ssSXM%2F31rU8ZRIcOBbNyuzJ%2FZjKIvOYfqhJRu7X4j3JggkhdRkOoYt97c4qCaD%2Bw2RGxYH0sp9n0puBF7kTMyCv0Z1%2FdyjJ8XugwP%2F2DzGG71xjHq7oNqrMNCbKKq8wqMJ5MqwJjmkFhtt8PZZCsaUL%2B8rMySIPKEcQMXhrGq%2FjmR6mxOAXY9UgLkcrw5PZG%2FCKPPYoiv6t5%2FYpDc47lWe7XtYOOGEgJ1VWDxopJeUmD%2F0Fu3sqntXBdSiafzhOzHHrFjdU2pJlmTmbFOuEGwNGb4UqAh%2BoqmMJLmSoFUnp4mZ0sP8ZqEVz953u%2B6JDVDihnZhvruLCHXkpZNwdMxUThxLViYnkfoTXekMj%2Badwfyl0o4hAYE32WWzHVEpsTwnXElQpoVqt6J3%2BCr9KVTqWglxq0sfb1c1kWqMYMO4vDuK%2BAaMMCoD1eQQeCUUOJ0%2BOODACKKPOabVIKWuWFtg7hnl3Eui0FJlVi3QO0BDMUWRLhGEWRbENlLbTYaH6nbWM7R64tnhpqeSGx2FIMss1Hgw6qyIwAY6pgE%2FDLvfIu3azb3coQ2SekaXz%2F4Tt9LuwQ%2BFTDl28lt0pTvY5bCOGQbcfPqqbmrtvofhbQ39vz8IOy523fzEGhM0403n835E7aYyoQt352zlev4zPYCIgX34DlhqIx8xIXZOg1dxdeSxusdD41Kt5hUX9ucKIrx3jOCFJdYmEmQ4mVqw5whbfAd%2Fxq25Xw%2FiCKqhM5%2FX%2B%2FqtOZhGDYnNzmltVw2vwUon&X-Amz-Signature=76a4f82f98ebb517d3a1a2d27aabfccea0a2a71561128561e8c95562a68c3248&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNHQBER%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqMMW1392mw7VhbHhNxd6anZ7Mwltx9VHYjEAi0xkLUAiAF6Onoqw2gxWiWFEBMp551KDbtRamL%2FKOs4fCr9Us%2BVSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMslGC3uvzvo%2Fn7nZQKtwDmDBKs4kFJga2rfMNWh%2BnPHLtnRurmUNITQKM3eRI5rKhnHbdkgp1OZPnrm03fyarfTsT4fzPlEq6Pt7h7SUSBoy66bGqdDYdq0ssSXM%2F31rU8ZRIcOBbNyuzJ%2FZjKIvOYfqhJRu7X4j3JggkhdRkOoYt97c4qCaD%2Bw2RGxYH0sp9n0puBF7kTMyCv0Z1%2FdyjJ8XugwP%2F2DzGG71xjHq7oNqrMNCbKKq8wqMJ5MqwJjmkFhtt8PZZCsaUL%2B8rMySIPKEcQMXhrGq%2FjmR6mxOAXY9UgLkcrw5PZG%2FCKPPYoiv6t5%2FYpDc47lWe7XtYOOGEgJ1VWDxopJeUmD%2F0Fu3sqntXBdSiafzhOzHHrFjdU2pJlmTmbFOuEGwNGb4UqAh%2BoqmMJLmSoFUnp4mZ0sP8ZqEVz953u%2B6JDVDihnZhvruLCHXkpZNwdMxUThxLViYnkfoTXekMj%2Badwfyl0o4hAYE32WWzHVEpsTwnXElQpoVqt6J3%2BCr9KVTqWglxq0sfb1c1kWqMYMO4vDuK%2BAaMMCoD1eQQeCUUOJ0%2BOODACKKPOabVIKWuWFtg7hnl3Eui0FJlVi3QO0BDMUWRLhGEWRbENlLbTYaH6nbWM7R64tnhpqeSGx2FIMss1Hgw6qyIwAY6pgE%2FDLvfIu3azb3coQ2SekaXz%2F4Tt9LuwQ%2BFTDl28lt0pTvY5bCOGQbcfPqqbmrtvofhbQ39vz8IOy523fzEGhM0403n835E7aYyoQt352zlev4zPYCIgX34DlhqIx8xIXZOg1dxdeSxusdD41Kt5hUX9ucKIrx3jOCFJdYmEmQ4mVqw5whbfAd%2Fxq25Xw%2FiCKqhM5%2FX%2B%2FqtOZhGDYnNzmltVw2vwUon&X-Amz-Signature=d6e8d158d78e333ce71af9bb8909f53bc3654a3d06a5ec765d6b30d39b1c9625&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNHQBER%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqMMW1392mw7VhbHhNxd6anZ7Mwltx9VHYjEAi0xkLUAiAF6Onoqw2gxWiWFEBMp551KDbtRamL%2FKOs4fCr9Us%2BVSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMslGC3uvzvo%2Fn7nZQKtwDmDBKs4kFJga2rfMNWh%2BnPHLtnRurmUNITQKM3eRI5rKhnHbdkgp1OZPnrm03fyarfTsT4fzPlEq6Pt7h7SUSBoy66bGqdDYdq0ssSXM%2F31rU8ZRIcOBbNyuzJ%2FZjKIvOYfqhJRu7X4j3JggkhdRkOoYt97c4qCaD%2Bw2RGxYH0sp9n0puBF7kTMyCv0Z1%2FdyjJ8XugwP%2F2DzGG71xjHq7oNqrMNCbKKq8wqMJ5MqwJjmkFhtt8PZZCsaUL%2B8rMySIPKEcQMXhrGq%2FjmR6mxOAXY9UgLkcrw5PZG%2FCKPPYoiv6t5%2FYpDc47lWe7XtYOOGEgJ1VWDxopJeUmD%2F0Fu3sqntXBdSiafzhOzHHrFjdU2pJlmTmbFOuEGwNGb4UqAh%2BoqmMJLmSoFUnp4mZ0sP8ZqEVz953u%2B6JDVDihnZhvruLCHXkpZNwdMxUThxLViYnkfoTXekMj%2Badwfyl0o4hAYE32WWzHVEpsTwnXElQpoVqt6J3%2BCr9KVTqWglxq0sfb1c1kWqMYMO4vDuK%2BAaMMCoD1eQQeCUUOJ0%2BOODACKKPOabVIKWuWFtg7hnl3Eui0FJlVi3QO0BDMUWRLhGEWRbENlLbTYaH6nbWM7R64tnhpqeSGx2FIMss1Hgw6qyIwAY6pgE%2FDLvfIu3azb3coQ2SekaXz%2F4Tt9LuwQ%2BFTDl28lt0pTvY5bCOGQbcfPqqbmrtvofhbQ39vz8IOy523fzEGhM0403n835E7aYyoQt352zlev4zPYCIgX34DlhqIx8xIXZOg1dxdeSxusdD41Kt5hUX9ucKIrx3jOCFJdYmEmQ4mVqw5whbfAd%2Fxq25Xw%2FiCKqhM5%2FX%2B%2FqtOZhGDYnNzmltVw2vwUon&X-Amz-Signature=4c43da68ad01e70c76c4210f95c2edd20dbe09368145e31a73314aee23f03603&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

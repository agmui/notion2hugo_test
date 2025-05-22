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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARVNCZE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHfAGzriTplXEj%2FRXBJZ4fcIJJhC%2B08RgzNuP2%2BkfnGUAiEA8xcC6%2B5qKGlwckkLJwzsgtaW80sU9ROxBGfAom03bKYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4iO0Z14ROz3%2BHFfSrcA6Of06R57HsvuJXcGPlSeOtAyWqL010d43AiYHPJXfC771t%2Bg9Q4nFxeufHvn1x4UKAXUotGU9rtulhkZ0aGhzn4AHEhxjKYREryZJ6N3O4pcZ%2FNgcQ72W2xEiK8F%2FMzObPlEpHCN%2FWz3NbeaIeqfnsZj1YWdAM0EK70rzR2gSFtZrRHwZADIHlILgBV5a3hbSWus3vnP5aE%2FXHm%2F7Fn%2BFJuUciLT21KkcBbdb7GKulf4okOc40rzQla3H5bc4QJEOpldB%2BmjKl2Qugkjg0N%2FP7pky5ojoHg3v%2Boah3nM%2BS0d3aLIQu59yiAcv8CQWGquHP24KQAVTZXKaztc%2B7JRNao25HZPhkyHj%2BFDlRa52bDcJGd8rt3Pkoiye4%2FwBiQ1GnU79%2BpCFuowvc%2FPf2ktqTQ%2BZ0Ww18h0cMwoyTy9s0UsKL53ZZFcUuXwZvfWwQL7EyHqgrZap%2F01QV%2BcsLyggaOBt4wCWfznsU8gT6nxiVkShtnLXii5ziHFXyf%2BVOYdE8JoSGvP5fuuLfjcOz%2BrCeUl%2F2HjhVf%2FhPAVoxXarpT62yxGWpI88e2MWE8GdQ7%2BJt20gsctHqFEf%2Bfh06mg8elRxtKngp9tNdob%2FT6T52qSYBvfidqbE3VW123MM3ivMEGOqUBO9LmCSzWnzdWApaeG%2BtYNvatl0F5E%2FO33GtvXkXQMm2hgh59QiRMB5RfHugJbO4dVyiYY5gG2eB6OzSLS19Cm6rjaWMu4%2FErvs2Uiq2DV7IkHkik12AWamPvIgcyUENpUr%2Bv9%2BglEnsj3RQ0%2Fw3B5OlyKWAdvcShxlxWiDiuodfwHMX1bM03i5nSJvEjhtXlPFigF18JQD5%2BHzDtuLo9n1rPZaYN&X-Amz-Signature=afac34ba1261204be53d3dc989fc009cbc59fe81244ff1e14ec49b46631eed61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARVNCZE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHfAGzriTplXEj%2FRXBJZ4fcIJJhC%2B08RgzNuP2%2BkfnGUAiEA8xcC6%2B5qKGlwckkLJwzsgtaW80sU9ROxBGfAom03bKYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4iO0Z14ROz3%2BHFfSrcA6Of06R57HsvuJXcGPlSeOtAyWqL010d43AiYHPJXfC771t%2Bg9Q4nFxeufHvn1x4UKAXUotGU9rtulhkZ0aGhzn4AHEhxjKYREryZJ6N3O4pcZ%2FNgcQ72W2xEiK8F%2FMzObPlEpHCN%2FWz3NbeaIeqfnsZj1YWdAM0EK70rzR2gSFtZrRHwZADIHlILgBV5a3hbSWus3vnP5aE%2FXHm%2F7Fn%2BFJuUciLT21KkcBbdb7GKulf4okOc40rzQla3H5bc4QJEOpldB%2BmjKl2Qugkjg0N%2FP7pky5ojoHg3v%2Boah3nM%2BS0d3aLIQu59yiAcv8CQWGquHP24KQAVTZXKaztc%2B7JRNao25HZPhkyHj%2BFDlRa52bDcJGd8rt3Pkoiye4%2FwBiQ1GnU79%2BpCFuowvc%2FPf2ktqTQ%2BZ0Ww18h0cMwoyTy9s0UsKL53ZZFcUuXwZvfWwQL7EyHqgrZap%2F01QV%2BcsLyggaOBt4wCWfznsU8gT6nxiVkShtnLXii5ziHFXyf%2BVOYdE8JoSGvP5fuuLfjcOz%2BrCeUl%2F2HjhVf%2FhPAVoxXarpT62yxGWpI88e2MWE8GdQ7%2BJt20gsctHqFEf%2Bfh06mg8elRxtKngp9tNdob%2FT6T52qSYBvfidqbE3VW123MM3ivMEGOqUBO9LmCSzWnzdWApaeG%2BtYNvatl0F5E%2FO33GtvXkXQMm2hgh59QiRMB5RfHugJbO4dVyiYY5gG2eB6OzSLS19Cm6rjaWMu4%2FErvs2Uiq2DV7IkHkik12AWamPvIgcyUENpUr%2Bv9%2BglEnsj3RQ0%2Fw3B5OlyKWAdvcShxlxWiDiuodfwHMX1bM03i5nSJvEjhtXlPFigF18JQD5%2BHzDtuLo9n1rPZaYN&X-Amz-Signature=d7ac2f6bbd4a6cfdb24e2e3f9e306e5e8141026cd0c8ec4d259926b65e57ff81&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARVNCZE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHfAGzriTplXEj%2FRXBJZ4fcIJJhC%2B08RgzNuP2%2BkfnGUAiEA8xcC6%2B5qKGlwckkLJwzsgtaW80sU9ROxBGfAom03bKYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4iO0Z14ROz3%2BHFfSrcA6Of06R57HsvuJXcGPlSeOtAyWqL010d43AiYHPJXfC771t%2Bg9Q4nFxeufHvn1x4UKAXUotGU9rtulhkZ0aGhzn4AHEhxjKYREryZJ6N3O4pcZ%2FNgcQ72W2xEiK8F%2FMzObPlEpHCN%2FWz3NbeaIeqfnsZj1YWdAM0EK70rzR2gSFtZrRHwZADIHlILgBV5a3hbSWus3vnP5aE%2FXHm%2F7Fn%2BFJuUciLT21KkcBbdb7GKulf4okOc40rzQla3H5bc4QJEOpldB%2BmjKl2Qugkjg0N%2FP7pky5ojoHg3v%2Boah3nM%2BS0d3aLIQu59yiAcv8CQWGquHP24KQAVTZXKaztc%2B7JRNao25HZPhkyHj%2BFDlRa52bDcJGd8rt3Pkoiye4%2FwBiQ1GnU79%2BpCFuowvc%2FPf2ktqTQ%2BZ0Ww18h0cMwoyTy9s0UsKL53ZZFcUuXwZvfWwQL7EyHqgrZap%2F01QV%2BcsLyggaOBt4wCWfznsU8gT6nxiVkShtnLXii5ziHFXyf%2BVOYdE8JoSGvP5fuuLfjcOz%2BrCeUl%2F2HjhVf%2FhPAVoxXarpT62yxGWpI88e2MWE8GdQ7%2BJt20gsctHqFEf%2Bfh06mg8elRxtKngp9tNdob%2FT6T52qSYBvfidqbE3VW123MM3ivMEGOqUBO9LmCSzWnzdWApaeG%2BtYNvatl0F5E%2FO33GtvXkXQMm2hgh59QiRMB5RfHugJbO4dVyiYY5gG2eB6OzSLS19Cm6rjaWMu4%2FErvs2Uiq2DV7IkHkik12AWamPvIgcyUENpUr%2Bv9%2BglEnsj3RQ0%2Fw3B5OlyKWAdvcShxlxWiDiuodfwHMX1bM03i5nSJvEjhtXlPFigF18JQD5%2BHzDtuLo9n1rPZaYN&X-Amz-Signature=733a0b2b653266b3e33401298d4e054b0910cada6dc6628d6f295881ad758909&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARVNCZE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHfAGzriTplXEj%2FRXBJZ4fcIJJhC%2B08RgzNuP2%2BkfnGUAiEA8xcC6%2B5qKGlwckkLJwzsgtaW80sU9ROxBGfAom03bKYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4iO0Z14ROz3%2BHFfSrcA6Of06R57HsvuJXcGPlSeOtAyWqL010d43AiYHPJXfC771t%2Bg9Q4nFxeufHvn1x4UKAXUotGU9rtulhkZ0aGhzn4AHEhxjKYREryZJ6N3O4pcZ%2FNgcQ72W2xEiK8F%2FMzObPlEpHCN%2FWz3NbeaIeqfnsZj1YWdAM0EK70rzR2gSFtZrRHwZADIHlILgBV5a3hbSWus3vnP5aE%2FXHm%2F7Fn%2BFJuUciLT21KkcBbdb7GKulf4okOc40rzQla3H5bc4QJEOpldB%2BmjKl2Qugkjg0N%2FP7pky5ojoHg3v%2Boah3nM%2BS0d3aLIQu59yiAcv8CQWGquHP24KQAVTZXKaztc%2B7JRNao25HZPhkyHj%2BFDlRa52bDcJGd8rt3Pkoiye4%2FwBiQ1GnU79%2BpCFuowvc%2FPf2ktqTQ%2BZ0Ww18h0cMwoyTy9s0UsKL53ZZFcUuXwZvfWwQL7EyHqgrZap%2F01QV%2BcsLyggaOBt4wCWfznsU8gT6nxiVkShtnLXii5ziHFXyf%2BVOYdE8JoSGvP5fuuLfjcOz%2BrCeUl%2F2HjhVf%2FhPAVoxXarpT62yxGWpI88e2MWE8GdQ7%2BJt20gsctHqFEf%2Bfh06mg8elRxtKngp9tNdob%2FT6T52qSYBvfidqbE3VW123MM3ivMEGOqUBO9LmCSzWnzdWApaeG%2BtYNvatl0F5E%2FO33GtvXkXQMm2hgh59QiRMB5RfHugJbO4dVyiYY5gG2eB6OzSLS19Cm6rjaWMu4%2FErvs2Uiq2DV7IkHkik12AWamPvIgcyUENpUr%2Bv9%2BglEnsj3RQ0%2Fw3B5OlyKWAdvcShxlxWiDiuodfwHMX1bM03i5nSJvEjhtXlPFigF18JQD5%2BHzDtuLo9n1rPZaYN&X-Amz-Signature=244980b6820c750325b2e7cd25daeeea09c6df02ca96820b4f09cafb4587cc17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARVNCZE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHfAGzriTplXEj%2FRXBJZ4fcIJJhC%2B08RgzNuP2%2BkfnGUAiEA8xcC6%2B5qKGlwckkLJwzsgtaW80sU9ROxBGfAom03bKYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4iO0Z14ROz3%2BHFfSrcA6Of06R57HsvuJXcGPlSeOtAyWqL010d43AiYHPJXfC771t%2Bg9Q4nFxeufHvn1x4UKAXUotGU9rtulhkZ0aGhzn4AHEhxjKYREryZJ6N3O4pcZ%2FNgcQ72W2xEiK8F%2FMzObPlEpHCN%2FWz3NbeaIeqfnsZj1YWdAM0EK70rzR2gSFtZrRHwZADIHlILgBV5a3hbSWus3vnP5aE%2FXHm%2F7Fn%2BFJuUciLT21KkcBbdb7GKulf4okOc40rzQla3H5bc4QJEOpldB%2BmjKl2Qugkjg0N%2FP7pky5ojoHg3v%2Boah3nM%2BS0d3aLIQu59yiAcv8CQWGquHP24KQAVTZXKaztc%2B7JRNao25HZPhkyHj%2BFDlRa52bDcJGd8rt3Pkoiye4%2FwBiQ1GnU79%2BpCFuowvc%2FPf2ktqTQ%2BZ0Ww18h0cMwoyTy9s0UsKL53ZZFcUuXwZvfWwQL7EyHqgrZap%2F01QV%2BcsLyggaOBt4wCWfznsU8gT6nxiVkShtnLXii5ziHFXyf%2BVOYdE8JoSGvP5fuuLfjcOz%2BrCeUl%2F2HjhVf%2FhPAVoxXarpT62yxGWpI88e2MWE8GdQ7%2BJt20gsctHqFEf%2Bfh06mg8elRxtKngp9tNdob%2FT6T52qSYBvfidqbE3VW123MM3ivMEGOqUBO9LmCSzWnzdWApaeG%2BtYNvatl0F5E%2FO33GtvXkXQMm2hgh59QiRMB5RfHugJbO4dVyiYY5gG2eB6OzSLS19Cm6rjaWMu4%2FErvs2Uiq2DV7IkHkik12AWamPvIgcyUENpUr%2Bv9%2BglEnsj3RQ0%2Fw3B5OlyKWAdvcShxlxWiDiuodfwHMX1bM03i5nSJvEjhtXlPFigF18JQD5%2BHzDtuLo9n1rPZaYN&X-Amz-Signature=fe0ea6d50d76f38ee15c82370dd42507f96f6cb98dd24352bb736abf2352cba5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARVNCZE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHfAGzriTplXEj%2FRXBJZ4fcIJJhC%2B08RgzNuP2%2BkfnGUAiEA8xcC6%2B5qKGlwckkLJwzsgtaW80sU9ROxBGfAom03bKYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4iO0Z14ROz3%2BHFfSrcA6Of06R57HsvuJXcGPlSeOtAyWqL010d43AiYHPJXfC771t%2Bg9Q4nFxeufHvn1x4UKAXUotGU9rtulhkZ0aGhzn4AHEhxjKYREryZJ6N3O4pcZ%2FNgcQ72W2xEiK8F%2FMzObPlEpHCN%2FWz3NbeaIeqfnsZj1YWdAM0EK70rzR2gSFtZrRHwZADIHlILgBV5a3hbSWus3vnP5aE%2FXHm%2F7Fn%2BFJuUciLT21KkcBbdb7GKulf4okOc40rzQla3H5bc4QJEOpldB%2BmjKl2Qugkjg0N%2FP7pky5ojoHg3v%2Boah3nM%2BS0d3aLIQu59yiAcv8CQWGquHP24KQAVTZXKaztc%2B7JRNao25HZPhkyHj%2BFDlRa52bDcJGd8rt3Pkoiye4%2FwBiQ1GnU79%2BpCFuowvc%2FPf2ktqTQ%2BZ0Ww18h0cMwoyTy9s0UsKL53ZZFcUuXwZvfWwQL7EyHqgrZap%2F01QV%2BcsLyggaOBt4wCWfznsU8gT6nxiVkShtnLXii5ziHFXyf%2BVOYdE8JoSGvP5fuuLfjcOz%2BrCeUl%2F2HjhVf%2FhPAVoxXarpT62yxGWpI88e2MWE8GdQ7%2BJt20gsctHqFEf%2Bfh06mg8elRxtKngp9tNdob%2FT6T52qSYBvfidqbE3VW123MM3ivMEGOqUBO9LmCSzWnzdWApaeG%2BtYNvatl0F5E%2FO33GtvXkXQMm2hgh59QiRMB5RfHugJbO4dVyiYY5gG2eB6OzSLS19Cm6rjaWMu4%2FErvs2Uiq2DV7IkHkik12AWamPvIgcyUENpUr%2Bv9%2BglEnsj3RQ0%2Fw3B5OlyKWAdvcShxlxWiDiuodfwHMX1bM03i5nSJvEjhtXlPFigF18JQD5%2BHzDtuLo9n1rPZaYN&X-Amz-Signature=15053e38ea19828d35befbb3b6197da5ed6644feb4e300f19c0c9db0154155bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARVNCZE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHfAGzriTplXEj%2FRXBJZ4fcIJJhC%2B08RgzNuP2%2BkfnGUAiEA8xcC6%2B5qKGlwckkLJwzsgtaW80sU9ROxBGfAom03bKYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4iO0Z14ROz3%2BHFfSrcA6Of06R57HsvuJXcGPlSeOtAyWqL010d43AiYHPJXfC771t%2Bg9Q4nFxeufHvn1x4UKAXUotGU9rtulhkZ0aGhzn4AHEhxjKYREryZJ6N3O4pcZ%2FNgcQ72W2xEiK8F%2FMzObPlEpHCN%2FWz3NbeaIeqfnsZj1YWdAM0EK70rzR2gSFtZrRHwZADIHlILgBV5a3hbSWus3vnP5aE%2FXHm%2F7Fn%2BFJuUciLT21KkcBbdb7GKulf4okOc40rzQla3H5bc4QJEOpldB%2BmjKl2Qugkjg0N%2FP7pky5ojoHg3v%2Boah3nM%2BS0d3aLIQu59yiAcv8CQWGquHP24KQAVTZXKaztc%2B7JRNao25HZPhkyHj%2BFDlRa52bDcJGd8rt3Pkoiye4%2FwBiQ1GnU79%2BpCFuowvc%2FPf2ktqTQ%2BZ0Ww18h0cMwoyTy9s0UsKL53ZZFcUuXwZvfWwQL7EyHqgrZap%2F01QV%2BcsLyggaOBt4wCWfznsU8gT6nxiVkShtnLXii5ziHFXyf%2BVOYdE8JoSGvP5fuuLfjcOz%2BrCeUl%2F2HjhVf%2FhPAVoxXarpT62yxGWpI88e2MWE8GdQ7%2BJt20gsctHqFEf%2Bfh06mg8elRxtKngp9tNdob%2FT6T52qSYBvfidqbE3VW123MM3ivMEGOqUBO9LmCSzWnzdWApaeG%2BtYNvatl0F5E%2FO33GtvXkXQMm2hgh59QiRMB5RfHugJbO4dVyiYY5gG2eB6OzSLS19Cm6rjaWMu4%2FErvs2Uiq2DV7IkHkik12AWamPvIgcyUENpUr%2Bv9%2BglEnsj3RQ0%2Fw3B5OlyKWAdvcShxlxWiDiuodfwHMX1bM03i5nSJvEjhtXlPFigF18JQD5%2BHzDtuLo9n1rPZaYN&X-Amz-Signature=58e9353f6f208fcdb4fb56a46ed83290e280fd89c2f9e75ba9bd07669753de48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARVNCZE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHfAGzriTplXEj%2FRXBJZ4fcIJJhC%2B08RgzNuP2%2BkfnGUAiEA8xcC6%2B5qKGlwckkLJwzsgtaW80sU9ROxBGfAom03bKYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4iO0Z14ROz3%2BHFfSrcA6Of06R57HsvuJXcGPlSeOtAyWqL010d43AiYHPJXfC771t%2Bg9Q4nFxeufHvn1x4UKAXUotGU9rtulhkZ0aGhzn4AHEhxjKYREryZJ6N3O4pcZ%2FNgcQ72W2xEiK8F%2FMzObPlEpHCN%2FWz3NbeaIeqfnsZj1YWdAM0EK70rzR2gSFtZrRHwZADIHlILgBV5a3hbSWus3vnP5aE%2FXHm%2F7Fn%2BFJuUciLT21KkcBbdb7GKulf4okOc40rzQla3H5bc4QJEOpldB%2BmjKl2Qugkjg0N%2FP7pky5ojoHg3v%2Boah3nM%2BS0d3aLIQu59yiAcv8CQWGquHP24KQAVTZXKaztc%2B7JRNao25HZPhkyHj%2BFDlRa52bDcJGd8rt3Pkoiye4%2FwBiQ1GnU79%2BpCFuowvc%2FPf2ktqTQ%2BZ0Ww18h0cMwoyTy9s0UsKL53ZZFcUuXwZvfWwQL7EyHqgrZap%2F01QV%2BcsLyggaOBt4wCWfznsU8gT6nxiVkShtnLXii5ziHFXyf%2BVOYdE8JoSGvP5fuuLfjcOz%2BrCeUl%2F2HjhVf%2FhPAVoxXarpT62yxGWpI88e2MWE8GdQ7%2BJt20gsctHqFEf%2Bfh06mg8elRxtKngp9tNdob%2FT6T52qSYBvfidqbE3VW123MM3ivMEGOqUBO9LmCSzWnzdWApaeG%2BtYNvatl0F5E%2FO33GtvXkXQMm2hgh59QiRMB5RfHugJbO4dVyiYY5gG2eB6OzSLS19Cm6rjaWMu4%2FErvs2Uiq2DV7IkHkik12AWamPvIgcyUENpUr%2Bv9%2BglEnsj3RQ0%2Fw3B5OlyKWAdvcShxlxWiDiuodfwHMX1bM03i5nSJvEjhtXlPFigF18JQD5%2BHzDtuLo9n1rPZaYN&X-Amz-Signature=8d2dff013600e63ead1ebaf4a56a5527c39147f65cf2474bdb56313034603fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

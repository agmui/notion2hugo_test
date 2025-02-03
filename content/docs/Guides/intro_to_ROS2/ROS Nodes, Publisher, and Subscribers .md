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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVH2JMZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEkBwzdBxdyUX3i0g2KmwPH7%2FRgE7qBloSINSXekURqbAiAXA67JbuJiUyzBgE0yIqq40TEOdyARF%2F3itsynbNt1nSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMsxJc8B%2B2%2FWpOdGRDKtwDq9Ibr8YHofW8ZqlbK1TwxtHHBWZWsV15VOC6vDd2BQdEoT5iXDmaERevongce8ZiPgLqtwwN434jnHmoK%2BKDpt0LGdcbSOTJML%2Fk4qMw0eCPpo1tAsiLWD4NRrU50nu2nqyAWD1rbGGAbm2%2FO2xPLnw%2B%2BermlTlDwHaSFbp8d5FTNTd%2B1KgZOB5T68TWU3Nf6pj11EYXVGwQhpsoRa7AGv9b3T5%2FUxYGvvDnn3PfFkut2dxQbSNdvErENExP2EL%2BYHfc3O%2FGClWyhDx%2FCDFApbGo%2Btzu860e3dLGpYejzKMLLrFW%2B4UCB%2B320YeRk%2BHbWNFe2gsgaafCUzpY62wvJyo3siYRmcvxqGyIaPhwMLVJlx%2FPRNpQ5B6IOMsa%2FSmY2IIg1ckY7ijfBfAqEngpbZHz9kdAqCput94o0KSOm1dV%2FDECVzBAyqhrAk9ZjRgMbc2LtwgKhMDhTGoWZhkkMlnGoh0oSBcDAReUkFGqTJ%2BpUmeWW9C5zYFjrAYx1lObOU8qP1NAeekcYXR%2B8s3Lgw5vObyX6hQfqxadrMOdarL%2FC%2B1As2CDJ1DToPSf6D4i44ga%2BmqicdotZrTiFrbuFxRLGkPJ1SMmgRxHgDK7psaW0DxfBleuqQrMz0kw7suDvQY6pgEtXApjY5o4bPQDDJQ9sR5PBb6Ap052%2FSCUiS%2BsM88SVE8maWCvFluL%2BIgObuW8sOS2RtABmx7D%2F3izWn8rdesPSIwl6YPuRHz2pzkBaTmLJEd1FWrnHQ4G1gDUaS%2F7cSPniScjwP6uVkTNNSAG3TZeRhE4eTGgwfL8CdURe0fOAINAzAxapJTCVGDpebVRjaaZy%2FMJ%2BRiRcdDzxy2HKfKBqMEtCmjO&X-Amz-Signature=0446b61488593027a6e05574095800662792dcae03bb9ee03b31b67cb87e8fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVH2JMZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEkBwzdBxdyUX3i0g2KmwPH7%2FRgE7qBloSINSXekURqbAiAXA67JbuJiUyzBgE0yIqq40TEOdyARF%2F3itsynbNt1nSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMsxJc8B%2B2%2FWpOdGRDKtwDq9Ibr8YHofW8ZqlbK1TwxtHHBWZWsV15VOC6vDd2BQdEoT5iXDmaERevongce8ZiPgLqtwwN434jnHmoK%2BKDpt0LGdcbSOTJML%2Fk4qMw0eCPpo1tAsiLWD4NRrU50nu2nqyAWD1rbGGAbm2%2FO2xPLnw%2B%2BermlTlDwHaSFbp8d5FTNTd%2B1KgZOB5T68TWU3Nf6pj11EYXVGwQhpsoRa7AGv9b3T5%2FUxYGvvDnn3PfFkut2dxQbSNdvErENExP2EL%2BYHfc3O%2FGClWyhDx%2FCDFApbGo%2Btzu860e3dLGpYejzKMLLrFW%2B4UCB%2B320YeRk%2BHbWNFe2gsgaafCUzpY62wvJyo3siYRmcvxqGyIaPhwMLVJlx%2FPRNpQ5B6IOMsa%2FSmY2IIg1ckY7ijfBfAqEngpbZHz9kdAqCput94o0KSOm1dV%2FDECVzBAyqhrAk9ZjRgMbc2LtwgKhMDhTGoWZhkkMlnGoh0oSBcDAReUkFGqTJ%2BpUmeWW9C5zYFjrAYx1lObOU8qP1NAeekcYXR%2B8s3Lgw5vObyX6hQfqxadrMOdarL%2FC%2B1As2CDJ1DToPSf6D4i44ga%2BmqicdotZrTiFrbuFxRLGkPJ1SMmgRxHgDK7psaW0DxfBleuqQrMz0kw7suDvQY6pgEtXApjY5o4bPQDDJQ9sR5PBb6Ap052%2FSCUiS%2BsM88SVE8maWCvFluL%2BIgObuW8sOS2RtABmx7D%2F3izWn8rdesPSIwl6YPuRHz2pzkBaTmLJEd1FWrnHQ4G1gDUaS%2F7cSPniScjwP6uVkTNNSAG3TZeRhE4eTGgwfL8CdURe0fOAINAzAxapJTCVGDpebVRjaaZy%2FMJ%2BRiRcdDzxy2HKfKBqMEtCmjO&X-Amz-Signature=836508e11edc032a5e5e363134d9bddbadf74194bd6d00b31ccbbc12a03f8475&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVH2JMZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEkBwzdBxdyUX3i0g2KmwPH7%2FRgE7qBloSINSXekURqbAiAXA67JbuJiUyzBgE0yIqq40TEOdyARF%2F3itsynbNt1nSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMsxJc8B%2B2%2FWpOdGRDKtwDq9Ibr8YHofW8ZqlbK1TwxtHHBWZWsV15VOC6vDd2BQdEoT5iXDmaERevongce8ZiPgLqtwwN434jnHmoK%2BKDpt0LGdcbSOTJML%2Fk4qMw0eCPpo1tAsiLWD4NRrU50nu2nqyAWD1rbGGAbm2%2FO2xPLnw%2B%2BermlTlDwHaSFbp8d5FTNTd%2B1KgZOB5T68TWU3Nf6pj11EYXVGwQhpsoRa7AGv9b3T5%2FUxYGvvDnn3PfFkut2dxQbSNdvErENExP2EL%2BYHfc3O%2FGClWyhDx%2FCDFApbGo%2Btzu860e3dLGpYejzKMLLrFW%2B4UCB%2B320YeRk%2BHbWNFe2gsgaafCUzpY62wvJyo3siYRmcvxqGyIaPhwMLVJlx%2FPRNpQ5B6IOMsa%2FSmY2IIg1ckY7ijfBfAqEngpbZHz9kdAqCput94o0KSOm1dV%2FDECVzBAyqhrAk9ZjRgMbc2LtwgKhMDhTGoWZhkkMlnGoh0oSBcDAReUkFGqTJ%2BpUmeWW9C5zYFjrAYx1lObOU8qP1NAeekcYXR%2B8s3Lgw5vObyX6hQfqxadrMOdarL%2FC%2B1As2CDJ1DToPSf6D4i44ga%2BmqicdotZrTiFrbuFxRLGkPJ1SMmgRxHgDK7psaW0DxfBleuqQrMz0kw7suDvQY6pgEtXApjY5o4bPQDDJQ9sR5PBb6Ap052%2FSCUiS%2BsM88SVE8maWCvFluL%2BIgObuW8sOS2RtABmx7D%2F3izWn8rdesPSIwl6YPuRHz2pzkBaTmLJEd1FWrnHQ4G1gDUaS%2F7cSPniScjwP6uVkTNNSAG3TZeRhE4eTGgwfL8CdURe0fOAINAzAxapJTCVGDpebVRjaaZy%2FMJ%2BRiRcdDzxy2HKfKBqMEtCmjO&X-Amz-Signature=cae571740a0e880364c2f9a3945da25be6b632c41e6368dc67d1cf482a0c3748&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVH2JMZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEkBwzdBxdyUX3i0g2KmwPH7%2FRgE7qBloSINSXekURqbAiAXA67JbuJiUyzBgE0yIqq40TEOdyARF%2F3itsynbNt1nSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMsxJc8B%2B2%2FWpOdGRDKtwDq9Ibr8YHofW8ZqlbK1TwxtHHBWZWsV15VOC6vDd2BQdEoT5iXDmaERevongce8ZiPgLqtwwN434jnHmoK%2BKDpt0LGdcbSOTJML%2Fk4qMw0eCPpo1tAsiLWD4NRrU50nu2nqyAWD1rbGGAbm2%2FO2xPLnw%2B%2BermlTlDwHaSFbp8d5FTNTd%2B1KgZOB5T68TWU3Nf6pj11EYXVGwQhpsoRa7AGv9b3T5%2FUxYGvvDnn3PfFkut2dxQbSNdvErENExP2EL%2BYHfc3O%2FGClWyhDx%2FCDFApbGo%2Btzu860e3dLGpYejzKMLLrFW%2B4UCB%2B320YeRk%2BHbWNFe2gsgaafCUzpY62wvJyo3siYRmcvxqGyIaPhwMLVJlx%2FPRNpQ5B6IOMsa%2FSmY2IIg1ckY7ijfBfAqEngpbZHz9kdAqCput94o0KSOm1dV%2FDECVzBAyqhrAk9ZjRgMbc2LtwgKhMDhTGoWZhkkMlnGoh0oSBcDAReUkFGqTJ%2BpUmeWW9C5zYFjrAYx1lObOU8qP1NAeekcYXR%2B8s3Lgw5vObyX6hQfqxadrMOdarL%2FC%2B1As2CDJ1DToPSf6D4i44ga%2BmqicdotZrTiFrbuFxRLGkPJ1SMmgRxHgDK7psaW0DxfBleuqQrMz0kw7suDvQY6pgEtXApjY5o4bPQDDJQ9sR5PBb6Ap052%2FSCUiS%2BsM88SVE8maWCvFluL%2BIgObuW8sOS2RtABmx7D%2F3izWn8rdesPSIwl6YPuRHz2pzkBaTmLJEd1FWrnHQ4G1gDUaS%2F7cSPniScjwP6uVkTNNSAG3TZeRhE4eTGgwfL8CdURe0fOAINAzAxapJTCVGDpebVRjaaZy%2FMJ%2BRiRcdDzxy2HKfKBqMEtCmjO&X-Amz-Signature=40a553839d641dabb714e95ee6f949e95efccf13195308730cb9a9929da17f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVH2JMZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEkBwzdBxdyUX3i0g2KmwPH7%2FRgE7qBloSINSXekURqbAiAXA67JbuJiUyzBgE0yIqq40TEOdyARF%2F3itsynbNt1nSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMsxJc8B%2B2%2FWpOdGRDKtwDq9Ibr8YHofW8ZqlbK1TwxtHHBWZWsV15VOC6vDd2BQdEoT5iXDmaERevongce8ZiPgLqtwwN434jnHmoK%2BKDpt0LGdcbSOTJML%2Fk4qMw0eCPpo1tAsiLWD4NRrU50nu2nqyAWD1rbGGAbm2%2FO2xPLnw%2B%2BermlTlDwHaSFbp8d5FTNTd%2B1KgZOB5T68TWU3Nf6pj11EYXVGwQhpsoRa7AGv9b3T5%2FUxYGvvDnn3PfFkut2dxQbSNdvErENExP2EL%2BYHfc3O%2FGClWyhDx%2FCDFApbGo%2Btzu860e3dLGpYejzKMLLrFW%2B4UCB%2B320YeRk%2BHbWNFe2gsgaafCUzpY62wvJyo3siYRmcvxqGyIaPhwMLVJlx%2FPRNpQ5B6IOMsa%2FSmY2IIg1ckY7ijfBfAqEngpbZHz9kdAqCput94o0KSOm1dV%2FDECVzBAyqhrAk9ZjRgMbc2LtwgKhMDhTGoWZhkkMlnGoh0oSBcDAReUkFGqTJ%2BpUmeWW9C5zYFjrAYx1lObOU8qP1NAeekcYXR%2B8s3Lgw5vObyX6hQfqxadrMOdarL%2FC%2B1As2CDJ1DToPSf6D4i44ga%2BmqicdotZrTiFrbuFxRLGkPJ1SMmgRxHgDK7psaW0DxfBleuqQrMz0kw7suDvQY6pgEtXApjY5o4bPQDDJQ9sR5PBb6Ap052%2FSCUiS%2BsM88SVE8maWCvFluL%2BIgObuW8sOS2RtABmx7D%2F3izWn8rdesPSIwl6YPuRHz2pzkBaTmLJEd1FWrnHQ4G1gDUaS%2F7cSPniScjwP6uVkTNNSAG3TZeRhE4eTGgwfL8CdURe0fOAINAzAxapJTCVGDpebVRjaaZy%2FMJ%2BRiRcdDzxy2HKfKBqMEtCmjO&X-Amz-Signature=31d5fb715e11ac3e467d5518e6afe6f92fc376be6930abfae2e5c76eab591562&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVH2JMZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEkBwzdBxdyUX3i0g2KmwPH7%2FRgE7qBloSINSXekURqbAiAXA67JbuJiUyzBgE0yIqq40TEOdyARF%2F3itsynbNt1nSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMsxJc8B%2B2%2FWpOdGRDKtwDq9Ibr8YHofW8ZqlbK1TwxtHHBWZWsV15VOC6vDd2BQdEoT5iXDmaERevongce8ZiPgLqtwwN434jnHmoK%2BKDpt0LGdcbSOTJML%2Fk4qMw0eCPpo1tAsiLWD4NRrU50nu2nqyAWD1rbGGAbm2%2FO2xPLnw%2B%2BermlTlDwHaSFbp8d5FTNTd%2B1KgZOB5T68TWU3Nf6pj11EYXVGwQhpsoRa7AGv9b3T5%2FUxYGvvDnn3PfFkut2dxQbSNdvErENExP2EL%2BYHfc3O%2FGClWyhDx%2FCDFApbGo%2Btzu860e3dLGpYejzKMLLrFW%2B4UCB%2B320YeRk%2BHbWNFe2gsgaafCUzpY62wvJyo3siYRmcvxqGyIaPhwMLVJlx%2FPRNpQ5B6IOMsa%2FSmY2IIg1ckY7ijfBfAqEngpbZHz9kdAqCput94o0KSOm1dV%2FDECVzBAyqhrAk9ZjRgMbc2LtwgKhMDhTGoWZhkkMlnGoh0oSBcDAReUkFGqTJ%2BpUmeWW9C5zYFjrAYx1lObOU8qP1NAeekcYXR%2B8s3Lgw5vObyX6hQfqxadrMOdarL%2FC%2B1As2CDJ1DToPSf6D4i44ga%2BmqicdotZrTiFrbuFxRLGkPJ1SMmgRxHgDK7psaW0DxfBleuqQrMz0kw7suDvQY6pgEtXApjY5o4bPQDDJQ9sR5PBb6Ap052%2FSCUiS%2BsM88SVE8maWCvFluL%2BIgObuW8sOS2RtABmx7D%2F3izWn8rdesPSIwl6YPuRHz2pzkBaTmLJEd1FWrnHQ4G1gDUaS%2F7cSPniScjwP6uVkTNNSAG3TZeRhE4eTGgwfL8CdURe0fOAINAzAxapJTCVGDpebVRjaaZy%2FMJ%2BRiRcdDzxy2HKfKBqMEtCmjO&X-Amz-Signature=56abef3a23423bbf9edd6260e6764348f09024cef9f9f7892d7f970fb65a38de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVH2JMZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEkBwzdBxdyUX3i0g2KmwPH7%2FRgE7qBloSINSXekURqbAiAXA67JbuJiUyzBgE0yIqq40TEOdyARF%2F3itsynbNt1nSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMsxJc8B%2B2%2FWpOdGRDKtwDq9Ibr8YHofW8ZqlbK1TwxtHHBWZWsV15VOC6vDd2BQdEoT5iXDmaERevongce8ZiPgLqtwwN434jnHmoK%2BKDpt0LGdcbSOTJML%2Fk4qMw0eCPpo1tAsiLWD4NRrU50nu2nqyAWD1rbGGAbm2%2FO2xPLnw%2B%2BermlTlDwHaSFbp8d5FTNTd%2B1KgZOB5T68TWU3Nf6pj11EYXVGwQhpsoRa7AGv9b3T5%2FUxYGvvDnn3PfFkut2dxQbSNdvErENExP2EL%2BYHfc3O%2FGClWyhDx%2FCDFApbGo%2Btzu860e3dLGpYejzKMLLrFW%2B4UCB%2B320YeRk%2BHbWNFe2gsgaafCUzpY62wvJyo3siYRmcvxqGyIaPhwMLVJlx%2FPRNpQ5B6IOMsa%2FSmY2IIg1ckY7ijfBfAqEngpbZHz9kdAqCput94o0KSOm1dV%2FDECVzBAyqhrAk9ZjRgMbc2LtwgKhMDhTGoWZhkkMlnGoh0oSBcDAReUkFGqTJ%2BpUmeWW9C5zYFjrAYx1lObOU8qP1NAeekcYXR%2B8s3Lgw5vObyX6hQfqxadrMOdarL%2FC%2B1As2CDJ1DToPSf6D4i44ga%2BmqicdotZrTiFrbuFxRLGkPJ1SMmgRxHgDK7psaW0DxfBleuqQrMz0kw7suDvQY6pgEtXApjY5o4bPQDDJQ9sR5PBb6Ap052%2FSCUiS%2BsM88SVE8maWCvFluL%2BIgObuW8sOS2RtABmx7D%2F3izWn8rdesPSIwl6YPuRHz2pzkBaTmLJEd1FWrnHQ4G1gDUaS%2F7cSPniScjwP6uVkTNNSAG3TZeRhE4eTGgwfL8CdURe0fOAINAzAxapJTCVGDpebVRjaaZy%2FMJ%2BRiRcdDzxy2HKfKBqMEtCmjO&X-Amz-Signature=c09aabcfe8dc4976ad009cd481086a3879184b2c26c70a7e1701e47e58c4670a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVH2JMZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEkBwzdBxdyUX3i0g2KmwPH7%2FRgE7qBloSINSXekURqbAiAXA67JbuJiUyzBgE0yIqq40TEOdyARF%2F3itsynbNt1nSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMsxJc8B%2B2%2FWpOdGRDKtwDq9Ibr8YHofW8ZqlbK1TwxtHHBWZWsV15VOC6vDd2BQdEoT5iXDmaERevongce8ZiPgLqtwwN434jnHmoK%2BKDpt0LGdcbSOTJML%2Fk4qMw0eCPpo1tAsiLWD4NRrU50nu2nqyAWD1rbGGAbm2%2FO2xPLnw%2B%2BermlTlDwHaSFbp8d5FTNTd%2B1KgZOB5T68TWU3Nf6pj11EYXVGwQhpsoRa7AGv9b3T5%2FUxYGvvDnn3PfFkut2dxQbSNdvErENExP2EL%2BYHfc3O%2FGClWyhDx%2FCDFApbGo%2Btzu860e3dLGpYejzKMLLrFW%2B4UCB%2B320YeRk%2BHbWNFe2gsgaafCUzpY62wvJyo3siYRmcvxqGyIaPhwMLVJlx%2FPRNpQ5B6IOMsa%2FSmY2IIg1ckY7ijfBfAqEngpbZHz9kdAqCput94o0KSOm1dV%2FDECVzBAyqhrAk9ZjRgMbc2LtwgKhMDhTGoWZhkkMlnGoh0oSBcDAReUkFGqTJ%2BpUmeWW9C5zYFjrAYx1lObOU8qP1NAeekcYXR%2B8s3Lgw5vObyX6hQfqxadrMOdarL%2FC%2B1As2CDJ1DToPSf6D4i44ga%2BmqicdotZrTiFrbuFxRLGkPJ1SMmgRxHgDK7psaW0DxfBleuqQrMz0kw7suDvQY6pgEtXApjY5o4bPQDDJQ9sR5PBb6Ap052%2FSCUiS%2BsM88SVE8maWCvFluL%2BIgObuW8sOS2RtABmx7D%2F3izWn8rdesPSIwl6YPuRHz2pzkBaTmLJEd1FWrnHQ4G1gDUaS%2F7cSPniScjwP6uVkTNNSAG3TZeRhE4eTGgwfL8CdURe0fOAINAzAxapJTCVGDpebVRjaaZy%2FMJ%2BRiRcdDzxy2HKfKBqMEtCmjO&X-Amz-Signature=5eddc7194d9c9df8a747503c2d69d0476399e0933aa6d8dff926cad50b941072&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

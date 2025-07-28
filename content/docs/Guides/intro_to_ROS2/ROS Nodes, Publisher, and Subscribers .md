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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWFJ226%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAmFO2BlotkQ0FlA19owvi7JahYFw19kixDVbPRf9h4PAiEAxoQ5Mzh8r4heCWb%2BnVjhqxBHvVsnSWF5LE5fzdXng1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtdG3FAV6CcyXdlaircAya1XfEDTWjJ0jYGKXvdw7othowBuXsQFNd6rnHyXhAwc4z0OCW51tSJvgnNo%2FRI0yX9mbo6QIpl5DaIXx9TsH54f4BZooLbs6y%2FyqXL0NvJ%2FzxqWyJHkabtLOKdHSSNkwfjR13kmg8pnquFhFduWLy33dooiawoWAppgsvU9mwiPjEOnAwReE5pDTYq4e0Tn0ji8xwCiyuWfSJqE69O%2BUZbnukquX1KjHfcUGm96hJpFDk8xYOdWtOtDU3IIeUAQmCHL7VtgYDGo1Clq4V4mnxldlxsT22igFkSNAUyzet%2BXKvoETxmLfjGlZjO8OqKGAtEY99Jv0mW%2FS%2Bs18E9bcS9hroz5eodvEIT0sxNGTsAad1303vQsYbWnGPv75FWJN2nQ6zHbPy7MhaCttZlZ8G9usXE2ASeg1VTvthTyOX3so6R%2BXpIm%2B03owT0BSr0t%2F6uN647g06ROKIbGlbPNDB5XYjy8ODHjr84S%2Bjt4NTv3CxJyHn04hCKX8Mp%2BQLF3K2xJy4EDPIOJbaPrXCLZK316zcq6uqAlpHfv1%2Fqrut2Z%2FQLu%2FafDSGFv7hwaFAc77X5SNfqNMZkHL%2BC3rH%2B%2Feft3VWS4d62sxznXMbfVYEHQtHGUUlxIEcCbD6YMM%2BinsQGOqUBKZx1HqHgwujfzVx8dN24r%2BY3%2FDQ63VShssl0UyFblsyNbgEhjEdH1cZ9u%2FylifCE0TOFkmDfjBV%2BTBhQ18xk5HJOEFizxl4RiMcmy588L%2FlNp%2BfssjtsEoDU%2FZF7UFRI7LSbk%2F29toCczfPlarUy5pjhf65TpSzpX92w8aZw5X1%2FV%2FWPxIV0CZxYcEguzOhmcIn6NgRV8olMjov8L5m6qjXMZv%2Bn&X-Amz-Signature=bf9c60582d76002ea923cd68afaae898bf8f3e80f376ba92dc75d2c638e7486d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWFJ226%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAmFO2BlotkQ0FlA19owvi7JahYFw19kixDVbPRf9h4PAiEAxoQ5Mzh8r4heCWb%2BnVjhqxBHvVsnSWF5LE5fzdXng1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtdG3FAV6CcyXdlaircAya1XfEDTWjJ0jYGKXvdw7othowBuXsQFNd6rnHyXhAwc4z0OCW51tSJvgnNo%2FRI0yX9mbo6QIpl5DaIXx9TsH54f4BZooLbs6y%2FyqXL0NvJ%2FzxqWyJHkabtLOKdHSSNkwfjR13kmg8pnquFhFduWLy33dooiawoWAppgsvU9mwiPjEOnAwReE5pDTYq4e0Tn0ji8xwCiyuWfSJqE69O%2BUZbnukquX1KjHfcUGm96hJpFDk8xYOdWtOtDU3IIeUAQmCHL7VtgYDGo1Clq4V4mnxldlxsT22igFkSNAUyzet%2BXKvoETxmLfjGlZjO8OqKGAtEY99Jv0mW%2FS%2Bs18E9bcS9hroz5eodvEIT0sxNGTsAad1303vQsYbWnGPv75FWJN2nQ6zHbPy7MhaCttZlZ8G9usXE2ASeg1VTvthTyOX3so6R%2BXpIm%2B03owT0BSr0t%2F6uN647g06ROKIbGlbPNDB5XYjy8ODHjr84S%2Bjt4NTv3CxJyHn04hCKX8Mp%2BQLF3K2xJy4EDPIOJbaPrXCLZK316zcq6uqAlpHfv1%2Fqrut2Z%2FQLu%2FafDSGFv7hwaFAc77X5SNfqNMZkHL%2BC3rH%2B%2Feft3VWS4d62sxznXMbfVYEHQtHGUUlxIEcCbD6YMM%2BinsQGOqUBKZx1HqHgwujfzVx8dN24r%2BY3%2FDQ63VShssl0UyFblsyNbgEhjEdH1cZ9u%2FylifCE0TOFkmDfjBV%2BTBhQ18xk5HJOEFizxl4RiMcmy588L%2FlNp%2BfssjtsEoDU%2FZF7UFRI7LSbk%2F29toCczfPlarUy5pjhf65TpSzpX92w8aZw5X1%2FV%2FWPxIV0CZxYcEguzOhmcIn6NgRV8olMjov8L5m6qjXMZv%2Bn&X-Amz-Signature=2f7ce9872dd4b6d68f2e4376c9482d3c121e73a1a341f9d08c779f7108326157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWFJ226%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAmFO2BlotkQ0FlA19owvi7JahYFw19kixDVbPRf9h4PAiEAxoQ5Mzh8r4heCWb%2BnVjhqxBHvVsnSWF5LE5fzdXng1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtdG3FAV6CcyXdlaircAya1XfEDTWjJ0jYGKXvdw7othowBuXsQFNd6rnHyXhAwc4z0OCW51tSJvgnNo%2FRI0yX9mbo6QIpl5DaIXx9TsH54f4BZooLbs6y%2FyqXL0NvJ%2FzxqWyJHkabtLOKdHSSNkwfjR13kmg8pnquFhFduWLy33dooiawoWAppgsvU9mwiPjEOnAwReE5pDTYq4e0Tn0ji8xwCiyuWfSJqE69O%2BUZbnukquX1KjHfcUGm96hJpFDk8xYOdWtOtDU3IIeUAQmCHL7VtgYDGo1Clq4V4mnxldlxsT22igFkSNAUyzet%2BXKvoETxmLfjGlZjO8OqKGAtEY99Jv0mW%2FS%2Bs18E9bcS9hroz5eodvEIT0sxNGTsAad1303vQsYbWnGPv75FWJN2nQ6zHbPy7MhaCttZlZ8G9usXE2ASeg1VTvthTyOX3so6R%2BXpIm%2B03owT0BSr0t%2F6uN647g06ROKIbGlbPNDB5XYjy8ODHjr84S%2Bjt4NTv3CxJyHn04hCKX8Mp%2BQLF3K2xJy4EDPIOJbaPrXCLZK316zcq6uqAlpHfv1%2Fqrut2Z%2FQLu%2FafDSGFv7hwaFAc77X5SNfqNMZkHL%2BC3rH%2B%2Feft3VWS4d62sxznXMbfVYEHQtHGUUlxIEcCbD6YMM%2BinsQGOqUBKZx1HqHgwujfzVx8dN24r%2BY3%2FDQ63VShssl0UyFblsyNbgEhjEdH1cZ9u%2FylifCE0TOFkmDfjBV%2BTBhQ18xk5HJOEFizxl4RiMcmy588L%2FlNp%2BfssjtsEoDU%2FZF7UFRI7LSbk%2F29toCczfPlarUy5pjhf65TpSzpX92w8aZw5X1%2FV%2FWPxIV0CZxYcEguzOhmcIn6NgRV8olMjov8L5m6qjXMZv%2Bn&X-Amz-Signature=96007e1ca848af1a62198aaa4d1c6246381c9b0a1ea93645528024fc64e46f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWFJ226%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAmFO2BlotkQ0FlA19owvi7JahYFw19kixDVbPRf9h4PAiEAxoQ5Mzh8r4heCWb%2BnVjhqxBHvVsnSWF5LE5fzdXng1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtdG3FAV6CcyXdlaircAya1XfEDTWjJ0jYGKXvdw7othowBuXsQFNd6rnHyXhAwc4z0OCW51tSJvgnNo%2FRI0yX9mbo6QIpl5DaIXx9TsH54f4BZooLbs6y%2FyqXL0NvJ%2FzxqWyJHkabtLOKdHSSNkwfjR13kmg8pnquFhFduWLy33dooiawoWAppgsvU9mwiPjEOnAwReE5pDTYq4e0Tn0ji8xwCiyuWfSJqE69O%2BUZbnukquX1KjHfcUGm96hJpFDk8xYOdWtOtDU3IIeUAQmCHL7VtgYDGo1Clq4V4mnxldlxsT22igFkSNAUyzet%2BXKvoETxmLfjGlZjO8OqKGAtEY99Jv0mW%2FS%2Bs18E9bcS9hroz5eodvEIT0sxNGTsAad1303vQsYbWnGPv75FWJN2nQ6zHbPy7MhaCttZlZ8G9usXE2ASeg1VTvthTyOX3so6R%2BXpIm%2B03owT0BSr0t%2F6uN647g06ROKIbGlbPNDB5XYjy8ODHjr84S%2Bjt4NTv3CxJyHn04hCKX8Mp%2BQLF3K2xJy4EDPIOJbaPrXCLZK316zcq6uqAlpHfv1%2Fqrut2Z%2FQLu%2FafDSGFv7hwaFAc77X5SNfqNMZkHL%2BC3rH%2B%2Feft3VWS4d62sxznXMbfVYEHQtHGUUlxIEcCbD6YMM%2BinsQGOqUBKZx1HqHgwujfzVx8dN24r%2BY3%2FDQ63VShssl0UyFblsyNbgEhjEdH1cZ9u%2FylifCE0TOFkmDfjBV%2BTBhQ18xk5HJOEFizxl4RiMcmy588L%2FlNp%2BfssjtsEoDU%2FZF7UFRI7LSbk%2F29toCczfPlarUy5pjhf65TpSzpX92w8aZw5X1%2FV%2FWPxIV0CZxYcEguzOhmcIn6NgRV8olMjov8L5m6qjXMZv%2Bn&X-Amz-Signature=1a0d2efa8adc80987265a03e0e1a3fe5a281aa588a4f1ec143a87f20e0782029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWFJ226%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAmFO2BlotkQ0FlA19owvi7JahYFw19kixDVbPRf9h4PAiEAxoQ5Mzh8r4heCWb%2BnVjhqxBHvVsnSWF5LE5fzdXng1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtdG3FAV6CcyXdlaircAya1XfEDTWjJ0jYGKXvdw7othowBuXsQFNd6rnHyXhAwc4z0OCW51tSJvgnNo%2FRI0yX9mbo6QIpl5DaIXx9TsH54f4BZooLbs6y%2FyqXL0NvJ%2FzxqWyJHkabtLOKdHSSNkwfjR13kmg8pnquFhFduWLy33dooiawoWAppgsvU9mwiPjEOnAwReE5pDTYq4e0Tn0ji8xwCiyuWfSJqE69O%2BUZbnukquX1KjHfcUGm96hJpFDk8xYOdWtOtDU3IIeUAQmCHL7VtgYDGo1Clq4V4mnxldlxsT22igFkSNAUyzet%2BXKvoETxmLfjGlZjO8OqKGAtEY99Jv0mW%2FS%2Bs18E9bcS9hroz5eodvEIT0sxNGTsAad1303vQsYbWnGPv75FWJN2nQ6zHbPy7MhaCttZlZ8G9usXE2ASeg1VTvthTyOX3so6R%2BXpIm%2B03owT0BSr0t%2F6uN647g06ROKIbGlbPNDB5XYjy8ODHjr84S%2Bjt4NTv3CxJyHn04hCKX8Mp%2BQLF3K2xJy4EDPIOJbaPrXCLZK316zcq6uqAlpHfv1%2Fqrut2Z%2FQLu%2FafDSGFv7hwaFAc77X5SNfqNMZkHL%2BC3rH%2B%2Feft3VWS4d62sxznXMbfVYEHQtHGUUlxIEcCbD6YMM%2BinsQGOqUBKZx1HqHgwujfzVx8dN24r%2BY3%2FDQ63VShssl0UyFblsyNbgEhjEdH1cZ9u%2FylifCE0TOFkmDfjBV%2BTBhQ18xk5HJOEFizxl4RiMcmy588L%2FlNp%2BfssjtsEoDU%2FZF7UFRI7LSbk%2F29toCczfPlarUy5pjhf65TpSzpX92w8aZw5X1%2FV%2FWPxIV0CZxYcEguzOhmcIn6NgRV8olMjov8L5m6qjXMZv%2Bn&X-Amz-Signature=cf27ae9058707eab39a5ac329bb296081f333adf6af282085b9ebfbdc4ed001b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWFJ226%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAmFO2BlotkQ0FlA19owvi7JahYFw19kixDVbPRf9h4PAiEAxoQ5Mzh8r4heCWb%2BnVjhqxBHvVsnSWF5LE5fzdXng1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtdG3FAV6CcyXdlaircAya1XfEDTWjJ0jYGKXvdw7othowBuXsQFNd6rnHyXhAwc4z0OCW51tSJvgnNo%2FRI0yX9mbo6QIpl5DaIXx9TsH54f4BZooLbs6y%2FyqXL0NvJ%2FzxqWyJHkabtLOKdHSSNkwfjR13kmg8pnquFhFduWLy33dooiawoWAppgsvU9mwiPjEOnAwReE5pDTYq4e0Tn0ji8xwCiyuWfSJqE69O%2BUZbnukquX1KjHfcUGm96hJpFDk8xYOdWtOtDU3IIeUAQmCHL7VtgYDGo1Clq4V4mnxldlxsT22igFkSNAUyzet%2BXKvoETxmLfjGlZjO8OqKGAtEY99Jv0mW%2FS%2Bs18E9bcS9hroz5eodvEIT0sxNGTsAad1303vQsYbWnGPv75FWJN2nQ6zHbPy7MhaCttZlZ8G9usXE2ASeg1VTvthTyOX3so6R%2BXpIm%2B03owT0BSr0t%2F6uN647g06ROKIbGlbPNDB5XYjy8ODHjr84S%2Bjt4NTv3CxJyHn04hCKX8Mp%2BQLF3K2xJy4EDPIOJbaPrXCLZK316zcq6uqAlpHfv1%2Fqrut2Z%2FQLu%2FafDSGFv7hwaFAc77X5SNfqNMZkHL%2BC3rH%2B%2Feft3VWS4d62sxznXMbfVYEHQtHGUUlxIEcCbD6YMM%2BinsQGOqUBKZx1HqHgwujfzVx8dN24r%2BY3%2FDQ63VShssl0UyFblsyNbgEhjEdH1cZ9u%2FylifCE0TOFkmDfjBV%2BTBhQ18xk5HJOEFizxl4RiMcmy588L%2FlNp%2BfssjtsEoDU%2FZF7UFRI7LSbk%2F29toCczfPlarUy5pjhf65TpSzpX92w8aZw5X1%2FV%2FWPxIV0CZxYcEguzOhmcIn6NgRV8olMjov8L5m6qjXMZv%2Bn&X-Amz-Signature=5ad69b6b276a3d5f3374b9d9956abddaa89858857dbac8e3e8f7bae26b694795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWFJ226%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAmFO2BlotkQ0FlA19owvi7JahYFw19kixDVbPRf9h4PAiEAxoQ5Mzh8r4heCWb%2BnVjhqxBHvVsnSWF5LE5fzdXng1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtdG3FAV6CcyXdlaircAya1XfEDTWjJ0jYGKXvdw7othowBuXsQFNd6rnHyXhAwc4z0OCW51tSJvgnNo%2FRI0yX9mbo6QIpl5DaIXx9TsH54f4BZooLbs6y%2FyqXL0NvJ%2FzxqWyJHkabtLOKdHSSNkwfjR13kmg8pnquFhFduWLy33dooiawoWAppgsvU9mwiPjEOnAwReE5pDTYq4e0Tn0ji8xwCiyuWfSJqE69O%2BUZbnukquX1KjHfcUGm96hJpFDk8xYOdWtOtDU3IIeUAQmCHL7VtgYDGo1Clq4V4mnxldlxsT22igFkSNAUyzet%2BXKvoETxmLfjGlZjO8OqKGAtEY99Jv0mW%2FS%2Bs18E9bcS9hroz5eodvEIT0sxNGTsAad1303vQsYbWnGPv75FWJN2nQ6zHbPy7MhaCttZlZ8G9usXE2ASeg1VTvthTyOX3so6R%2BXpIm%2B03owT0BSr0t%2F6uN647g06ROKIbGlbPNDB5XYjy8ODHjr84S%2Bjt4NTv3CxJyHn04hCKX8Mp%2BQLF3K2xJy4EDPIOJbaPrXCLZK316zcq6uqAlpHfv1%2Fqrut2Z%2FQLu%2FafDSGFv7hwaFAc77X5SNfqNMZkHL%2BC3rH%2B%2Feft3VWS4d62sxznXMbfVYEHQtHGUUlxIEcCbD6YMM%2BinsQGOqUBKZx1HqHgwujfzVx8dN24r%2BY3%2FDQ63VShssl0UyFblsyNbgEhjEdH1cZ9u%2FylifCE0TOFkmDfjBV%2BTBhQ18xk5HJOEFizxl4RiMcmy588L%2FlNp%2BfssjtsEoDU%2FZF7UFRI7LSbk%2F29toCczfPlarUy5pjhf65TpSzpX92w8aZw5X1%2FV%2FWPxIV0CZxYcEguzOhmcIn6NgRV8olMjov8L5m6qjXMZv%2Bn&X-Amz-Signature=7d11e9db03525ecd6f6ca95fe74d009045c9beaa9cb7bc9e1cddeea720f0e29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWFJ226%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAmFO2BlotkQ0FlA19owvi7JahYFw19kixDVbPRf9h4PAiEAxoQ5Mzh8r4heCWb%2BnVjhqxBHvVsnSWF5LE5fzdXng1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtdG3FAV6CcyXdlaircAya1XfEDTWjJ0jYGKXvdw7othowBuXsQFNd6rnHyXhAwc4z0OCW51tSJvgnNo%2FRI0yX9mbo6QIpl5DaIXx9TsH54f4BZooLbs6y%2FyqXL0NvJ%2FzxqWyJHkabtLOKdHSSNkwfjR13kmg8pnquFhFduWLy33dooiawoWAppgsvU9mwiPjEOnAwReE5pDTYq4e0Tn0ji8xwCiyuWfSJqE69O%2BUZbnukquX1KjHfcUGm96hJpFDk8xYOdWtOtDU3IIeUAQmCHL7VtgYDGo1Clq4V4mnxldlxsT22igFkSNAUyzet%2BXKvoETxmLfjGlZjO8OqKGAtEY99Jv0mW%2FS%2Bs18E9bcS9hroz5eodvEIT0sxNGTsAad1303vQsYbWnGPv75FWJN2nQ6zHbPy7MhaCttZlZ8G9usXE2ASeg1VTvthTyOX3so6R%2BXpIm%2B03owT0BSr0t%2F6uN647g06ROKIbGlbPNDB5XYjy8ODHjr84S%2Bjt4NTv3CxJyHn04hCKX8Mp%2BQLF3K2xJy4EDPIOJbaPrXCLZK316zcq6uqAlpHfv1%2Fqrut2Z%2FQLu%2FafDSGFv7hwaFAc77X5SNfqNMZkHL%2BC3rH%2B%2Feft3VWS4d62sxznXMbfVYEHQtHGUUlxIEcCbD6YMM%2BinsQGOqUBKZx1HqHgwujfzVx8dN24r%2BY3%2FDQ63VShssl0UyFblsyNbgEhjEdH1cZ9u%2FylifCE0TOFkmDfjBV%2BTBhQ18xk5HJOEFizxl4RiMcmy588L%2FlNp%2BfssjtsEoDU%2FZF7UFRI7LSbk%2F29toCczfPlarUy5pjhf65TpSzpX92w8aZw5X1%2FV%2FWPxIV0CZxYcEguzOhmcIn6NgRV8olMjov8L5m6qjXMZv%2Bn&X-Amz-Signature=592f77331d648df60777e7952dadd2763cbfdd62b2994a5b26f406b980678a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

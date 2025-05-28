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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7AAR2HL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbevN%2BX8gBXB0v%2FPFvOQywmVwC1%2F%2BhE68H%2FjdwGsVkTQIgfZQrlhdCbk%2FhhH0IF4H09bTCpzA%2BWm9zalwAGBNn7uIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNKZ7FkGs%2BQHDVfMESrcA60oygDNVgHT%2BgBUYDwiZUSbzIoxUQp%2F%2BkAxjm93lE3mH3V%2BZI3yCjJc15PfPRThVEdAnChsghWkh41dqXlhJazJraeZ9fI5glrlm5KpasGt3DFT4%2ByNB0PYtykyJzgBBsw8AGUQssU6gZs5UqZ4R%2Fmh7%2FlB6AnJXkIXt90TpuWK77SX8sAAw3zPaERRp5pP0PXEVz08yiXz1d3i2MQkjQ%2BAsF0d1dFhyBEZcaoBO07c2L0sKCJW1bhsMSKxE62yL4tiBUa4UrAMMCAr565y7pD%2Fgi6r%2B%2FYsqJlLEXiQpglea0HgZAQvFHE1KTrOALEOjCGuQNOmW7dJHDj03UfctGvene3ujGNwbSfOJEFTy%2FZ6v0yCpomW8rnpOKjF%2FjpVf5vofZE5Ct%2B4R4gwkjGcYcCTzDW0PSAssW42GZJOVYis5HSNGaOWb4lmmZBdGodaL6H18jzcGUKBj4%2BHIH0%2FB%2FibJqso3iCYrbHHRQzyaD3Pap1AlK%2F6fotZmeEdhWr8WwclIqpkzjyMZ6ulIiARyqLtShiXTNUhxN0gFq3UzvHTaTdn9fs9lOUVq%2B9ApK6u5l61%2BXUTP3DBkIjshUNTidKLScJ77%2Fk7kSlpG%2FBLJ7PgsH6qqFICnihpWngbMJS82cEGOqUBXnfc25eLnZbHsKLb2yHxHd5zbLW5fmKIKsuw2vH4KiCCcG2%2B%2ByIEPyZT9CUo7AklOAlE2wRRljR2BrpZgZXBzCQa3QyX7cPWYHAQKXsFEgAHl%2Flfbd%2Bo%2FKVj2MNXvAORuyhleJ2392S1DIi2f1Owp34%2FgncdXnWzg8xciePMmBrve8FHVXqXx4NpZjmonDntfTRXL788UxaoTPcuSn%2Fsdv89zuDk&X-Amz-Signature=91a3fabc2443086627e0939745efa08a6200414f635fe001d1e1f2a636f81863&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7AAR2HL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbevN%2BX8gBXB0v%2FPFvOQywmVwC1%2F%2BhE68H%2FjdwGsVkTQIgfZQrlhdCbk%2FhhH0IF4H09bTCpzA%2BWm9zalwAGBNn7uIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNKZ7FkGs%2BQHDVfMESrcA60oygDNVgHT%2BgBUYDwiZUSbzIoxUQp%2F%2BkAxjm93lE3mH3V%2BZI3yCjJc15PfPRThVEdAnChsghWkh41dqXlhJazJraeZ9fI5glrlm5KpasGt3DFT4%2ByNB0PYtykyJzgBBsw8AGUQssU6gZs5UqZ4R%2Fmh7%2FlB6AnJXkIXt90TpuWK77SX8sAAw3zPaERRp5pP0PXEVz08yiXz1d3i2MQkjQ%2BAsF0d1dFhyBEZcaoBO07c2L0sKCJW1bhsMSKxE62yL4tiBUa4UrAMMCAr565y7pD%2Fgi6r%2B%2FYsqJlLEXiQpglea0HgZAQvFHE1KTrOALEOjCGuQNOmW7dJHDj03UfctGvene3ujGNwbSfOJEFTy%2FZ6v0yCpomW8rnpOKjF%2FjpVf5vofZE5Ct%2B4R4gwkjGcYcCTzDW0PSAssW42GZJOVYis5HSNGaOWb4lmmZBdGodaL6H18jzcGUKBj4%2BHIH0%2FB%2FibJqso3iCYrbHHRQzyaD3Pap1AlK%2F6fotZmeEdhWr8WwclIqpkzjyMZ6ulIiARyqLtShiXTNUhxN0gFq3UzvHTaTdn9fs9lOUVq%2B9ApK6u5l61%2BXUTP3DBkIjshUNTidKLScJ77%2Fk7kSlpG%2FBLJ7PgsH6qqFICnihpWngbMJS82cEGOqUBXnfc25eLnZbHsKLb2yHxHd5zbLW5fmKIKsuw2vH4KiCCcG2%2B%2ByIEPyZT9CUo7AklOAlE2wRRljR2BrpZgZXBzCQa3QyX7cPWYHAQKXsFEgAHl%2Flfbd%2Bo%2FKVj2MNXvAORuyhleJ2392S1DIi2f1Owp34%2FgncdXnWzg8xciePMmBrve8FHVXqXx4NpZjmonDntfTRXL788UxaoTPcuSn%2Fsdv89zuDk&X-Amz-Signature=56eec204104674e0c95c6eaaf44563a88abaec2dc21bca4d6c5c0dbf915545df&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7AAR2HL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbevN%2BX8gBXB0v%2FPFvOQywmVwC1%2F%2BhE68H%2FjdwGsVkTQIgfZQrlhdCbk%2FhhH0IF4H09bTCpzA%2BWm9zalwAGBNn7uIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNKZ7FkGs%2BQHDVfMESrcA60oygDNVgHT%2BgBUYDwiZUSbzIoxUQp%2F%2BkAxjm93lE3mH3V%2BZI3yCjJc15PfPRThVEdAnChsghWkh41dqXlhJazJraeZ9fI5glrlm5KpasGt3DFT4%2ByNB0PYtykyJzgBBsw8AGUQssU6gZs5UqZ4R%2Fmh7%2FlB6AnJXkIXt90TpuWK77SX8sAAw3zPaERRp5pP0PXEVz08yiXz1d3i2MQkjQ%2BAsF0d1dFhyBEZcaoBO07c2L0sKCJW1bhsMSKxE62yL4tiBUa4UrAMMCAr565y7pD%2Fgi6r%2B%2FYsqJlLEXiQpglea0HgZAQvFHE1KTrOALEOjCGuQNOmW7dJHDj03UfctGvene3ujGNwbSfOJEFTy%2FZ6v0yCpomW8rnpOKjF%2FjpVf5vofZE5Ct%2B4R4gwkjGcYcCTzDW0PSAssW42GZJOVYis5HSNGaOWb4lmmZBdGodaL6H18jzcGUKBj4%2BHIH0%2FB%2FibJqso3iCYrbHHRQzyaD3Pap1AlK%2F6fotZmeEdhWr8WwclIqpkzjyMZ6ulIiARyqLtShiXTNUhxN0gFq3UzvHTaTdn9fs9lOUVq%2B9ApK6u5l61%2BXUTP3DBkIjshUNTidKLScJ77%2Fk7kSlpG%2FBLJ7PgsH6qqFICnihpWngbMJS82cEGOqUBXnfc25eLnZbHsKLb2yHxHd5zbLW5fmKIKsuw2vH4KiCCcG2%2B%2ByIEPyZT9CUo7AklOAlE2wRRljR2BrpZgZXBzCQa3QyX7cPWYHAQKXsFEgAHl%2Flfbd%2Bo%2FKVj2MNXvAORuyhleJ2392S1DIi2f1Owp34%2FgncdXnWzg8xciePMmBrve8FHVXqXx4NpZjmonDntfTRXL788UxaoTPcuSn%2Fsdv89zuDk&X-Amz-Signature=5572eec3558f2c14b94a31693f42ae61b6705361e73db6b3d0ec153dfa614fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7AAR2HL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbevN%2BX8gBXB0v%2FPFvOQywmVwC1%2F%2BhE68H%2FjdwGsVkTQIgfZQrlhdCbk%2FhhH0IF4H09bTCpzA%2BWm9zalwAGBNn7uIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNKZ7FkGs%2BQHDVfMESrcA60oygDNVgHT%2BgBUYDwiZUSbzIoxUQp%2F%2BkAxjm93lE3mH3V%2BZI3yCjJc15PfPRThVEdAnChsghWkh41dqXlhJazJraeZ9fI5glrlm5KpasGt3DFT4%2ByNB0PYtykyJzgBBsw8AGUQssU6gZs5UqZ4R%2Fmh7%2FlB6AnJXkIXt90TpuWK77SX8sAAw3zPaERRp5pP0PXEVz08yiXz1d3i2MQkjQ%2BAsF0d1dFhyBEZcaoBO07c2L0sKCJW1bhsMSKxE62yL4tiBUa4UrAMMCAr565y7pD%2Fgi6r%2B%2FYsqJlLEXiQpglea0HgZAQvFHE1KTrOALEOjCGuQNOmW7dJHDj03UfctGvene3ujGNwbSfOJEFTy%2FZ6v0yCpomW8rnpOKjF%2FjpVf5vofZE5Ct%2B4R4gwkjGcYcCTzDW0PSAssW42GZJOVYis5HSNGaOWb4lmmZBdGodaL6H18jzcGUKBj4%2BHIH0%2FB%2FibJqso3iCYrbHHRQzyaD3Pap1AlK%2F6fotZmeEdhWr8WwclIqpkzjyMZ6ulIiARyqLtShiXTNUhxN0gFq3UzvHTaTdn9fs9lOUVq%2B9ApK6u5l61%2BXUTP3DBkIjshUNTidKLScJ77%2Fk7kSlpG%2FBLJ7PgsH6qqFICnihpWngbMJS82cEGOqUBXnfc25eLnZbHsKLb2yHxHd5zbLW5fmKIKsuw2vH4KiCCcG2%2B%2ByIEPyZT9CUo7AklOAlE2wRRljR2BrpZgZXBzCQa3QyX7cPWYHAQKXsFEgAHl%2Flfbd%2Bo%2FKVj2MNXvAORuyhleJ2392S1DIi2f1Owp34%2FgncdXnWzg8xciePMmBrve8FHVXqXx4NpZjmonDntfTRXL788UxaoTPcuSn%2Fsdv89zuDk&X-Amz-Signature=d26d44b365fba0717b3801494d0507ad0961acfa51bb2c46032ba8bba8d3f2bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7AAR2HL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbevN%2BX8gBXB0v%2FPFvOQywmVwC1%2F%2BhE68H%2FjdwGsVkTQIgfZQrlhdCbk%2FhhH0IF4H09bTCpzA%2BWm9zalwAGBNn7uIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNKZ7FkGs%2BQHDVfMESrcA60oygDNVgHT%2BgBUYDwiZUSbzIoxUQp%2F%2BkAxjm93lE3mH3V%2BZI3yCjJc15PfPRThVEdAnChsghWkh41dqXlhJazJraeZ9fI5glrlm5KpasGt3DFT4%2ByNB0PYtykyJzgBBsw8AGUQssU6gZs5UqZ4R%2Fmh7%2FlB6AnJXkIXt90TpuWK77SX8sAAw3zPaERRp5pP0PXEVz08yiXz1d3i2MQkjQ%2BAsF0d1dFhyBEZcaoBO07c2L0sKCJW1bhsMSKxE62yL4tiBUa4UrAMMCAr565y7pD%2Fgi6r%2B%2FYsqJlLEXiQpglea0HgZAQvFHE1KTrOALEOjCGuQNOmW7dJHDj03UfctGvene3ujGNwbSfOJEFTy%2FZ6v0yCpomW8rnpOKjF%2FjpVf5vofZE5Ct%2B4R4gwkjGcYcCTzDW0PSAssW42GZJOVYis5HSNGaOWb4lmmZBdGodaL6H18jzcGUKBj4%2BHIH0%2FB%2FibJqso3iCYrbHHRQzyaD3Pap1AlK%2F6fotZmeEdhWr8WwclIqpkzjyMZ6ulIiARyqLtShiXTNUhxN0gFq3UzvHTaTdn9fs9lOUVq%2B9ApK6u5l61%2BXUTP3DBkIjshUNTidKLScJ77%2Fk7kSlpG%2FBLJ7PgsH6qqFICnihpWngbMJS82cEGOqUBXnfc25eLnZbHsKLb2yHxHd5zbLW5fmKIKsuw2vH4KiCCcG2%2B%2ByIEPyZT9CUo7AklOAlE2wRRljR2BrpZgZXBzCQa3QyX7cPWYHAQKXsFEgAHl%2Flfbd%2Bo%2FKVj2MNXvAORuyhleJ2392S1DIi2f1Owp34%2FgncdXnWzg8xciePMmBrve8FHVXqXx4NpZjmonDntfTRXL788UxaoTPcuSn%2Fsdv89zuDk&X-Amz-Signature=7a3d5f1063e64641799826d5c6c2c677aae3188d31eb6ed6405842bbc9d54628&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7AAR2HL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbevN%2BX8gBXB0v%2FPFvOQywmVwC1%2F%2BhE68H%2FjdwGsVkTQIgfZQrlhdCbk%2FhhH0IF4H09bTCpzA%2BWm9zalwAGBNn7uIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNKZ7FkGs%2BQHDVfMESrcA60oygDNVgHT%2BgBUYDwiZUSbzIoxUQp%2F%2BkAxjm93lE3mH3V%2BZI3yCjJc15PfPRThVEdAnChsghWkh41dqXlhJazJraeZ9fI5glrlm5KpasGt3DFT4%2ByNB0PYtykyJzgBBsw8AGUQssU6gZs5UqZ4R%2Fmh7%2FlB6AnJXkIXt90TpuWK77SX8sAAw3zPaERRp5pP0PXEVz08yiXz1d3i2MQkjQ%2BAsF0d1dFhyBEZcaoBO07c2L0sKCJW1bhsMSKxE62yL4tiBUa4UrAMMCAr565y7pD%2Fgi6r%2B%2FYsqJlLEXiQpglea0HgZAQvFHE1KTrOALEOjCGuQNOmW7dJHDj03UfctGvene3ujGNwbSfOJEFTy%2FZ6v0yCpomW8rnpOKjF%2FjpVf5vofZE5Ct%2B4R4gwkjGcYcCTzDW0PSAssW42GZJOVYis5HSNGaOWb4lmmZBdGodaL6H18jzcGUKBj4%2BHIH0%2FB%2FibJqso3iCYrbHHRQzyaD3Pap1AlK%2F6fotZmeEdhWr8WwclIqpkzjyMZ6ulIiARyqLtShiXTNUhxN0gFq3UzvHTaTdn9fs9lOUVq%2B9ApK6u5l61%2BXUTP3DBkIjshUNTidKLScJ77%2Fk7kSlpG%2FBLJ7PgsH6qqFICnihpWngbMJS82cEGOqUBXnfc25eLnZbHsKLb2yHxHd5zbLW5fmKIKsuw2vH4KiCCcG2%2B%2ByIEPyZT9CUo7AklOAlE2wRRljR2BrpZgZXBzCQa3QyX7cPWYHAQKXsFEgAHl%2Flfbd%2Bo%2FKVj2MNXvAORuyhleJ2392S1DIi2f1Owp34%2FgncdXnWzg8xciePMmBrve8FHVXqXx4NpZjmonDntfTRXL788UxaoTPcuSn%2Fsdv89zuDk&X-Amz-Signature=637882abedbbefe1197133fe524ffce51555e8f407161270f1cde6ea706c418b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7AAR2HL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbevN%2BX8gBXB0v%2FPFvOQywmVwC1%2F%2BhE68H%2FjdwGsVkTQIgfZQrlhdCbk%2FhhH0IF4H09bTCpzA%2BWm9zalwAGBNn7uIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNKZ7FkGs%2BQHDVfMESrcA60oygDNVgHT%2BgBUYDwiZUSbzIoxUQp%2F%2BkAxjm93lE3mH3V%2BZI3yCjJc15PfPRThVEdAnChsghWkh41dqXlhJazJraeZ9fI5glrlm5KpasGt3DFT4%2ByNB0PYtykyJzgBBsw8AGUQssU6gZs5UqZ4R%2Fmh7%2FlB6AnJXkIXt90TpuWK77SX8sAAw3zPaERRp5pP0PXEVz08yiXz1d3i2MQkjQ%2BAsF0d1dFhyBEZcaoBO07c2L0sKCJW1bhsMSKxE62yL4tiBUa4UrAMMCAr565y7pD%2Fgi6r%2B%2FYsqJlLEXiQpglea0HgZAQvFHE1KTrOALEOjCGuQNOmW7dJHDj03UfctGvene3ujGNwbSfOJEFTy%2FZ6v0yCpomW8rnpOKjF%2FjpVf5vofZE5Ct%2B4R4gwkjGcYcCTzDW0PSAssW42GZJOVYis5HSNGaOWb4lmmZBdGodaL6H18jzcGUKBj4%2BHIH0%2FB%2FibJqso3iCYrbHHRQzyaD3Pap1AlK%2F6fotZmeEdhWr8WwclIqpkzjyMZ6ulIiARyqLtShiXTNUhxN0gFq3UzvHTaTdn9fs9lOUVq%2B9ApK6u5l61%2BXUTP3DBkIjshUNTidKLScJ77%2Fk7kSlpG%2FBLJ7PgsH6qqFICnihpWngbMJS82cEGOqUBXnfc25eLnZbHsKLb2yHxHd5zbLW5fmKIKsuw2vH4KiCCcG2%2B%2ByIEPyZT9CUo7AklOAlE2wRRljR2BrpZgZXBzCQa3QyX7cPWYHAQKXsFEgAHl%2Flfbd%2Bo%2FKVj2MNXvAORuyhleJ2392S1DIi2f1Owp34%2FgncdXnWzg8xciePMmBrve8FHVXqXx4NpZjmonDntfTRXL788UxaoTPcuSn%2Fsdv89zuDk&X-Amz-Signature=a5086d57e998ebb07b8da383bfd8a63aaa6d9fb111ca3c69a45c733a51597700&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7AAR2HL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbevN%2BX8gBXB0v%2FPFvOQywmVwC1%2F%2BhE68H%2FjdwGsVkTQIgfZQrlhdCbk%2FhhH0IF4H09bTCpzA%2BWm9zalwAGBNn7uIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNKZ7FkGs%2BQHDVfMESrcA60oygDNVgHT%2BgBUYDwiZUSbzIoxUQp%2F%2BkAxjm93lE3mH3V%2BZI3yCjJc15PfPRThVEdAnChsghWkh41dqXlhJazJraeZ9fI5glrlm5KpasGt3DFT4%2ByNB0PYtykyJzgBBsw8AGUQssU6gZs5UqZ4R%2Fmh7%2FlB6AnJXkIXt90TpuWK77SX8sAAw3zPaERRp5pP0PXEVz08yiXz1d3i2MQkjQ%2BAsF0d1dFhyBEZcaoBO07c2L0sKCJW1bhsMSKxE62yL4tiBUa4UrAMMCAr565y7pD%2Fgi6r%2B%2FYsqJlLEXiQpglea0HgZAQvFHE1KTrOALEOjCGuQNOmW7dJHDj03UfctGvene3ujGNwbSfOJEFTy%2FZ6v0yCpomW8rnpOKjF%2FjpVf5vofZE5Ct%2B4R4gwkjGcYcCTzDW0PSAssW42GZJOVYis5HSNGaOWb4lmmZBdGodaL6H18jzcGUKBj4%2BHIH0%2FB%2FibJqso3iCYrbHHRQzyaD3Pap1AlK%2F6fotZmeEdhWr8WwclIqpkzjyMZ6ulIiARyqLtShiXTNUhxN0gFq3UzvHTaTdn9fs9lOUVq%2B9ApK6u5l61%2BXUTP3DBkIjshUNTidKLScJ77%2Fk7kSlpG%2FBLJ7PgsH6qqFICnihpWngbMJS82cEGOqUBXnfc25eLnZbHsKLb2yHxHd5zbLW5fmKIKsuw2vH4KiCCcG2%2B%2ByIEPyZT9CUo7AklOAlE2wRRljR2BrpZgZXBzCQa3QyX7cPWYHAQKXsFEgAHl%2Flfbd%2Bo%2FKVj2MNXvAORuyhleJ2392S1DIi2f1Owp34%2FgncdXnWzg8xciePMmBrve8FHVXqXx4NpZjmonDntfTRXL788UxaoTPcuSn%2Fsdv89zuDk&X-Amz-Signature=4919006d4a86abf94e11746ddb115f640573f34f3b61a28097a45af40d8e7b76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

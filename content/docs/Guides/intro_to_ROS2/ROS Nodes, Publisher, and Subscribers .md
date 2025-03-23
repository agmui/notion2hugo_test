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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRIFPLW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvFGz3bWJ5n4NbiQuAG617u5wPm9Nk3LWny9x7jWMjQIgCyBiE8fdBK5RAtTkyDKv7NmB7dsR0AeXsrL7lBVHmPsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARio2ZSZbVM13GA9CrcA%2Fm%2BDEf4OHrD3vKOdN8J0pazdA%2BAkeQJ99NQyTxSzElPubgRicpaG5YfehLIKcfnzACSdsEVSGYZwJXEgB5gpPMg5weE53BqkUyTgtO6exX7gvynEfLCTThavXMhxCTEEVkT%2FNe4XLHrrnrois0uX%2FxgIAnizc1hzSkB%2BGu5d2I3ZtRr1usxp3KDqhDpyPFt8fkxXnYD9WAWtX2CEx%2B2KZ8NWNz2iBu6c7MDTh35tmOn%2FMJcp4fB5MSelHMb6MPjv4%2F0ctjowzxE02fRPn05byPBUIwQe9PHAfpMw0hZ%2F9W6Lxjpr63e%2B%2BB9jsjOmIJtI0GawxzI9xPmfYkpzBQk3iXMqZ55ttd8HFB%2Ftz8bBaTYlRhVzLwTSAX%2Bsy0pqV3hzZqhJ0cKgDKLQUen6V3E%2FdAZrFIMMHM80HDf2%2FXgSUKQZK5ZUbWyi5LWs7TSycZz1pVbqnkz6ANkAzjz2zl1Oa%2FGm4sjjjhoCeYZz2cNofZ2%2BhcMVoNwbDa4twWF4RC2Wf3fpG35Lpcr2zqoQqVaSqalE%2F1ewGdvwopwOIDWRouafDt%2BXnTAdiCttdJjVpM%2Fd0D10so9VDjLeJtz4LyEiv3OSwf6c5sngOZUl7OYs9AqBI7BITFn1o%2BYqrqyMIXsgL8GOqUBiV8rAG%2BlyS2MYT9YMp9e7v0QHrf%2B61f2c1ow3NNc7mqqUJklwLNA5%2FvjSwqp6GrShvq9akxEQlc%2FiUnYNhAelK84pbnL%2FQtLuUO4o0KGBIEKexfOi35%2FxBZP%2B70rjydt4BfScQ00AmlsvZDJz8liaryErM4TigVGNSwf3Rw6qgpYYZHOsln26tCDxRp6s2m3w33rs%2FXq2TyVQzPrwPOsuPmuvogj&X-Amz-Signature=4bfee0061f8484ff93df88cc8da107d4b8f9d42fff609c58b03f988c0a20fec8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRIFPLW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvFGz3bWJ5n4NbiQuAG617u5wPm9Nk3LWny9x7jWMjQIgCyBiE8fdBK5RAtTkyDKv7NmB7dsR0AeXsrL7lBVHmPsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARio2ZSZbVM13GA9CrcA%2Fm%2BDEf4OHrD3vKOdN8J0pazdA%2BAkeQJ99NQyTxSzElPubgRicpaG5YfehLIKcfnzACSdsEVSGYZwJXEgB5gpPMg5weE53BqkUyTgtO6exX7gvynEfLCTThavXMhxCTEEVkT%2FNe4XLHrrnrois0uX%2FxgIAnizc1hzSkB%2BGu5d2I3ZtRr1usxp3KDqhDpyPFt8fkxXnYD9WAWtX2CEx%2B2KZ8NWNz2iBu6c7MDTh35tmOn%2FMJcp4fB5MSelHMb6MPjv4%2F0ctjowzxE02fRPn05byPBUIwQe9PHAfpMw0hZ%2F9W6Lxjpr63e%2B%2BB9jsjOmIJtI0GawxzI9xPmfYkpzBQk3iXMqZ55ttd8HFB%2Ftz8bBaTYlRhVzLwTSAX%2Bsy0pqV3hzZqhJ0cKgDKLQUen6V3E%2FdAZrFIMMHM80HDf2%2FXgSUKQZK5ZUbWyi5LWs7TSycZz1pVbqnkz6ANkAzjz2zl1Oa%2FGm4sjjjhoCeYZz2cNofZ2%2BhcMVoNwbDa4twWF4RC2Wf3fpG35Lpcr2zqoQqVaSqalE%2F1ewGdvwopwOIDWRouafDt%2BXnTAdiCttdJjVpM%2Fd0D10so9VDjLeJtz4LyEiv3OSwf6c5sngOZUl7OYs9AqBI7BITFn1o%2BYqrqyMIXsgL8GOqUBiV8rAG%2BlyS2MYT9YMp9e7v0QHrf%2B61f2c1ow3NNc7mqqUJklwLNA5%2FvjSwqp6GrShvq9akxEQlc%2FiUnYNhAelK84pbnL%2FQtLuUO4o0KGBIEKexfOi35%2FxBZP%2B70rjydt4BfScQ00AmlsvZDJz8liaryErM4TigVGNSwf3Rw6qgpYYZHOsln26tCDxRp6s2m3w33rs%2FXq2TyVQzPrwPOsuPmuvogj&X-Amz-Signature=513a15c5833a4364bb8cf91479c95410fcbce1b771e85f7c10b32530f4b2f945&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRIFPLW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvFGz3bWJ5n4NbiQuAG617u5wPm9Nk3LWny9x7jWMjQIgCyBiE8fdBK5RAtTkyDKv7NmB7dsR0AeXsrL7lBVHmPsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARio2ZSZbVM13GA9CrcA%2Fm%2BDEf4OHrD3vKOdN8J0pazdA%2BAkeQJ99NQyTxSzElPubgRicpaG5YfehLIKcfnzACSdsEVSGYZwJXEgB5gpPMg5weE53BqkUyTgtO6exX7gvynEfLCTThavXMhxCTEEVkT%2FNe4XLHrrnrois0uX%2FxgIAnizc1hzSkB%2BGu5d2I3ZtRr1usxp3KDqhDpyPFt8fkxXnYD9WAWtX2CEx%2B2KZ8NWNz2iBu6c7MDTh35tmOn%2FMJcp4fB5MSelHMb6MPjv4%2F0ctjowzxE02fRPn05byPBUIwQe9PHAfpMw0hZ%2F9W6Lxjpr63e%2B%2BB9jsjOmIJtI0GawxzI9xPmfYkpzBQk3iXMqZ55ttd8HFB%2Ftz8bBaTYlRhVzLwTSAX%2Bsy0pqV3hzZqhJ0cKgDKLQUen6V3E%2FdAZrFIMMHM80HDf2%2FXgSUKQZK5ZUbWyi5LWs7TSycZz1pVbqnkz6ANkAzjz2zl1Oa%2FGm4sjjjhoCeYZz2cNofZ2%2BhcMVoNwbDa4twWF4RC2Wf3fpG35Lpcr2zqoQqVaSqalE%2F1ewGdvwopwOIDWRouafDt%2BXnTAdiCttdJjVpM%2Fd0D10so9VDjLeJtz4LyEiv3OSwf6c5sngOZUl7OYs9AqBI7BITFn1o%2BYqrqyMIXsgL8GOqUBiV8rAG%2BlyS2MYT9YMp9e7v0QHrf%2B61f2c1ow3NNc7mqqUJklwLNA5%2FvjSwqp6GrShvq9akxEQlc%2FiUnYNhAelK84pbnL%2FQtLuUO4o0KGBIEKexfOi35%2FxBZP%2B70rjydt4BfScQ00AmlsvZDJz8liaryErM4TigVGNSwf3Rw6qgpYYZHOsln26tCDxRp6s2m3w33rs%2FXq2TyVQzPrwPOsuPmuvogj&X-Amz-Signature=0ff96a2c098484fa4def87296d5d960a4fb06ccfbea3399492d241fc55713433&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRIFPLW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvFGz3bWJ5n4NbiQuAG617u5wPm9Nk3LWny9x7jWMjQIgCyBiE8fdBK5RAtTkyDKv7NmB7dsR0AeXsrL7lBVHmPsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARio2ZSZbVM13GA9CrcA%2Fm%2BDEf4OHrD3vKOdN8J0pazdA%2BAkeQJ99NQyTxSzElPubgRicpaG5YfehLIKcfnzACSdsEVSGYZwJXEgB5gpPMg5weE53BqkUyTgtO6exX7gvynEfLCTThavXMhxCTEEVkT%2FNe4XLHrrnrois0uX%2FxgIAnizc1hzSkB%2BGu5d2I3ZtRr1usxp3KDqhDpyPFt8fkxXnYD9WAWtX2CEx%2B2KZ8NWNz2iBu6c7MDTh35tmOn%2FMJcp4fB5MSelHMb6MPjv4%2F0ctjowzxE02fRPn05byPBUIwQe9PHAfpMw0hZ%2F9W6Lxjpr63e%2B%2BB9jsjOmIJtI0GawxzI9xPmfYkpzBQk3iXMqZ55ttd8HFB%2Ftz8bBaTYlRhVzLwTSAX%2Bsy0pqV3hzZqhJ0cKgDKLQUen6V3E%2FdAZrFIMMHM80HDf2%2FXgSUKQZK5ZUbWyi5LWs7TSycZz1pVbqnkz6ANkAzjz2zl1Oa%2FGm4sjjjhoCeYZz2cNofZ2%2BhcMVoNwbDa4twWF4RC2Wf3fpG35Lpcr2zqoQqVaSqalE%2F1ewGdvwopwOIDWRouafDt%2BXnTAdiCttdJjVpM%2Fd0D10so9VDjLeJtz4LyEiv3OSwf6c5sngOZUl7OYs9AqBI7BITFn1o%2BYqrqyMIXsgL8GOqUBiV8rAG%2BlyS2MYT9YMp9e7v0QHrf%2B61f2c1ow3NNc7mqqUJklwLNA5%2FvjSwqp6GrShvq9akxEQlc%2FiUnYNhAelK84pbnL%2FQtLuUO4o0KGBIEKexfOi35%2FxBZP%2B70rjydt4BfScQ00AmlsvZDJz8liaryErM4TigVGNSwf3Rw6qgpYYZHOsln26tCDxRp6s2m3w33rs%2FXq2TyVQzPrwPOsuPmuvogj&X-Amz-Signature=fc15b819ab26771fee376bf3ea135bc9695664f6807e864737746a9d31137b32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRIFPLW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvFGz3bWJ5n4NbiQuAG617u5wPm9Nk3LWny9x7jWMjQIgCyBiE8fdBK5RAtTkyDKv7NmB7dsR0AeXsrL7lBVHmPsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARio2ZSZbVM13GA9CrcA%2Fm%2BDEf4OHrD3vKOdN8J0pazdA%2BAkeQJ99NQyTxSzElPubgRicpaG5YfehLIKcfnzACSdsEVSGYZwJXEgB5gpPMg5weE53BqkUyTgtO6exX7gvynEfLCTThavXMhxCTEEVkT%2FNe4XLHrrnrois0uX%2FxgIAnizc1hzSkB%2BGu5d2I3ZtRr1usxp3KDqhDpyPFt8fkxXnYD9WAWtX2CEx%2B2KZ8NWNz2iBu6c7MDTh35tmOn%2FMJcp4fB5MSelHMb6MPjv4%2F0ctjowzxE02fRPn05byPBUIwQe9PHAfpMw0hZ%2F9W6Lxjpr63e%2B%2BB9jsjOmIJtI0GawxzI9xPmfYkpzBQk3iXMqZ55ttd8HFB%2Ftz8bBaTYlRhVzLwTSAX%2Bsy0pqV3hzZqhJ0cKgDKLQUen6V3E%2FdAZrFIMMHM80HDf2%2FXgSUKQZK5ZUbWyi5LWs7TSycZz1pVbqnkz6ANkAzjz2zl1Oa%2FGm4sjjjhoCeYZz2cNofZ2%2BhcMVoNwbDa4twWF4RC2Wf3fpG35Lpcr2zqoQqVaSqalE%2F1ewGdvwopwOIDWRouafDt%2BXnTAdiCttdJjVpM%2Fd0D10so9VDjLeJtz4LyEiv3OSwf6c5sngOZUl7OYs9AqBI7BITFn1o%2BYqrqyMIXsgL8GOqUBiV8rAG%2BlyS2MYT9YMp9e7v0QHrf%2B61f2c1ow3NNc7mqqUJklwLNA5%2FvjSwqp6GrShvq9akxEQlc%2FiUnYNhAelK84pbnL%2FQtLuUO4o0KGBIEKexfOi35%2FxBZP%2B70rjydt4BfScQ00AmlsvZDJz8liaryErM4TigVGNSwf3Rw6qgpYYZHOsln26tCDxRp6s2m3w33rs%2FXq2TyVQzPrwPOsuPmuvogj&X-Amz-Signature=3f83a8f0092e172e1a4e3b55d34f9263f38e95dda26b59a7138811074a41c498&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRIFPLW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvFGz3bWJ5n4NbiQuAG617u5wPm9Nk3LWny9x7jWMjQIgCyBiE8fdBK5RAtTkyDKv7NmB7dsR0AeXsrL7lBVHmPsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARio2ZSZbVM13GA9CrcA%2Fm%2BDEf4OHrD3vKOdN8J0pazdA%2BAkeQJ99NQyTxSzElPubgRicpaG5YfehLIKcfnzACSdsEVSGYZwJXEgB5gpPMg5weE53BqkUyTgtO6exX7gvynEfLCTThavXMhxCTEEVkT%2FNe4XLHrrnrois0uX%2FxgIAnizc1hzSkB%2BGu5d2I3ZtRr1usxp3KDqhDpyPFt8fkxXnYD9WAWtX2CEx%2B2KZ8NWNz2iBu6c7MDTh35tmOn%2FMJcp4fB5MSelHMb6MPjv4%2F0ctjowzxE02fRPn05byPBUIwQe9PHAfpMw0hZ%2F9W6Lxjpr63e%2B%2BB9jsjOmIJtI0GawxzI9xPmfYkpzBQk3iXMqZ55ttd8HFB%2Ftz8bBaTYlRhVzLwTSAX%2Bsy0pqV3hzZqhJ0cKgDKLQUen6V3E%2FdAZrFIMMHM80HDf2%2FXgSUKQZK5ZUbWyi5LWs7TSycZz1pVbqnkz6ANkAzjz2zl1Oa%2FGm4sjjjhoCeYZz2cNofZ2%2BhcMVoNwbDa4twWF4RC2Wf3fpG35Lpcr2zqoQqVaSqalE%2F1ewGdvwopwOIDWRouafDt%2BXnTAdiCttdJjVpM%2Fd0D10so9VDjLeJtz4LyEiv3OSwf6c5sngOZUl7OYs9AqBI7BITFn1o%2BYqrqyMIXsgL8GOqUBiV8rAG%2BlyS2MYT9YMp9e7v0QHrf%2B61f2c1ow3NNc7mqqUJklwLNA5%2FvjSwqp6GrShvq9akxEQlc%2FiUnYNhAelK84pbnL%2FQtLuUO4o0KGBIEKexfOi35%2FxBZP%2B70rjydt4BfScQ00AmlsvZDJz8liaryErM4TigVGNSwf3Rw6qgpYYZHOsln26tCDxRp6s2m3w33rs%2FXq2TyVQzPrwPOsuPmuvogj&X-Amz-Signature=e27547c363f4b0dbe1de62226557648e84e36a39d36dee8b170648125cbf2ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRIFPLW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvFGz3bWJ5n4NbiQuAG617u5wPm9Nk3LWny9x7jWMjQIgCyBiE8fdBK5RAtTkyDKv7NmB7dsR0AeXsrL7lBVHmPsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARio2ZSZbVM13GA9CrcA%2Fm%2BDEf4OHrD3vKOdN8J0pazdA%2BAkeQJ99NQyTxSzElPubgRicpaG5YfehLIKcfnzACSdsEVSGYZwJXEgB5gpPMg5weE53BqkUyTgtO6exX7gvynEfLCTThavXMhxCTEEVkT%2FNe4XLHrrnrois0uX%2FxgIAnizc1hzSkB%2BGu5d2I3ZtRr1usxp3KDqhDpyPFt8fkxXnYD9WAWtX2CEx%2B2KZ8NWNz2iBu6c7MDTh35tmOn%2FMJcp4fB5MSelHMb6MPjv4%2F0ctjowzxE02fRPn05byPBUIwQe9PHAfpMw0hZ%2F9W6Lxjpr63e%2B%2BB9jsjOmIJtI0GawxzI9xPmfYkpzBQk3iXMqZ55ttd8HFB%2Ftz8bBaTYlRhVzLwTSAX%2Bsy0pqV3hzZqhJ0cKgDKLQUen6V3E%2FdAZrFIMMHM80HDf2%2FXgSUKQZK5ZUbWyi5LWs7TSycZz1pVbqnkz6ANkAzjz2zl1Oa%2FGm4sjjjhoCeYZz2cNofZ2%2BhcMVoNwbDa4twWF4RC2Wf3fpG35Lpcr2zqoQqVaSqalE%2F1ewGdvwopwOIDWRouafDt%2BXnTAdiCttdJjVpM%2Fd0D10so9VDjLeJtz4LyEiv3OSwf6c5sngOZUl7OYs9AqBI7BITFn1o%2BYqrqyMIXsgL8GOqUBiV8rAG%2BlyS2MYT9YMp9e7v0QHrf%2B61f2c1ow3NNc7mqqUJklwLNA5%2FvjSwqp6GrShvq9akxEQlc%2FiUnYNhAelK84pbnL%2FQtLuUO4o0KGBIEKexfOi35%2FxBZP%2B70rjydt4BfScQ00AmlsvZDJz8liaryErM4TigVGNSwf3Rw6qgpYYZHOsln26tCDxRp6s2m3w33rs%2FXq2TyVQzPrwPOsuPmuvogj&X-Amz-Signature=118c128dac1114993ebebbcb81c6ce42e09dd6f82b863d001b8e9d319ad633b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRIFPLW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJvFGz3bWJ5n4NbiQuAG617u5wPm9Nk3LWny9x7jWMjQIgCyBiE8fdBK5RAtTkyDKv7NmB7dsR0AeXsrL7lBVHmPsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARio2ZSZbVM13GA9CrcA%2Fm%2BDEf4OHrD3vKOdN8J0pazdA%2BAkeQJ99NQyTxSzElPubgRicpaG5YfehLIKcfnzACSdsEVSGYZwJXEgB5gpPMg5weE53BqkUyTgtO6exX7gvynEfLCTThavXMhxCTEEVkT%2FNe4XLHrrnrois0uX%2FxgIAnizc1hzSkB%2BGu5d2I3ZtRr1usxp3KDqhDpyPFt8fkxXnYD9WAWtX2CEx%2B2KZ8NWNz2iBu6c7MDTh35tmOn%2FMJcp4fB5MSelHMb6MPjv4%2F0ctjowzxE02fRPn05byPBUIwQe9PHAfpMw0hZ%2F9W6Lxjpr63e%2B%2BB9jsjOmIJtI0GawxzI9xPmfYkpzBQk3iXMqZ55ttd8HFB%2Ftz8bBaTYlRhVzLwTSAX%2Bsy0pqV3hzZqhJ0cKgDKLQUen6V3E%2FdAZrFIMMHM80HDf2%2FXgSUKQZK5ZUbWyi5LWs7TSycZz1pVbqnkz6ANkAzjz2zl1Oa%2FGm4sjjjhoCeYZz2cNofZ2%2BhcMVoNwbDa4twWF4RC2Wf3fpG35Lpcr2zqoQqVaSqalE%2F1ewGdvwopwOIDWRouafDt%2BXnTAdiCttdJjVpM%2Fd0D10so9VDjLeJtz4LyEiv3OSwf6c5sngOZUl7OYs9AqBI7BITFn1o%2BYqrqyMIXsgL8GOqUBiV8rAG%2BlyS2MYT9YMp9e7v0QHrf%2B61f2c1ow3NNc7mqqUJklwLNA5%2FvjSwqp6GrShvq9akxEQlc%2FiUnYNhAelK84pbnL%2FQtLuUO4o0KGBIEKexfOi35%2FxBZP%2B70rjydt4BfScQ00AmlsvZDJz8liaryErM4TigVGNSwf3Rw6qgpYYZHOsln26tCDxRp6s2m3w33rs%2FXq2TyVQzPrwPOsuPmuvogj&X-Amz-Signature=3aa26ced4e381c3f78eb93203380c35a85a2202588c4f02538e66a42a88ce540&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

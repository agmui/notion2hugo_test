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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEQPZWG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFunYaQiHjX0nl1wj23igVsZhopHLHEIo5Ip82whkkGiAiEA8XwXL0Xd1J7zzPMuIjSX85sgDdEkx0HfibDFI2M4rPAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxz16p6yTScUvidaircA%2BH%2FvgRH%2FI3e%2FZQnmUk0PhxezKUrZ1V7oW1Ual2%2B%2FpOKncbjbUlug1nxaRm258hj8J40M2InaDh2GCc0i9Y8%2FiFyJgZcvqvokQR5tOrLS4q%2Fv6AJfTdSOoFh7ZdwxvJ6v38%2BnKvkVH0ff9RFHf00xxcpxXv542oWkPDAfeaJLajoLGzvhXKtXULm4xJvXpK3kPv8B4vPAWwXfUqdG5r1PoXxMSIEoyP8lMV0wTbMPaeHO2XpfyEFG%2FUkjZWT8rvW2s2diTOhCj3stb4aIcs3TNxGs9B95GiYtufZDSQkg76e4bOYmzbWXTN9PeBBOjdCf1Ed8hfGCZKnJBGyUZgJyI8qQEl9tRxg49c7MnMrMfa5ZJAqVDKoqeZCKZ4hhJtY5LwkBvrliQCAYmiU3dlPGTN9clz%2Fyghhu%2FMdbh6mPUP7qFh02OTk9JemsAtKB7UJjw%2FQdxypeDRuccBiyC8Xi4qAANduviO7jFpqMoecE%2B4rGA8M92ZzaeE%2BIr0v7vYFSiEHtyZypxU1nVJoXpXzU0ki1uS6cBp%2FVU12N4t%2BIqThqeQ4x%2BA4cMWdithvUd1erjBBNcJJixko%2FoRCjMC%2FZb4mcu2ofxdZVbgy7uhPohQcYweiwDGiSbaXOB92MOXCv8EGOqUBVIRCmWbzefMvSjb9MdJkMpZVNifgIw2Ca2vjj69hy6j%2BS7FoW2%2FpOhuYFhYgagttrlibdJCnohYTM%2FTjE4zQ4fmmd1XH8ePgm9GXZicPUaXTkcwkrVhl7mT32EbSnHOAxsRlblIE2T3RukqfaqeEgH5fZeangX2tTPBBapM4mX2wB5SNWm0pOSNFhhlsFKVwh1uOnfj%2BCGgF5tdfbuVasjey%2F8Bb&X-Amz-Signature=b9cf3efbc80ab50bdb019cdc44fa32402a215c6da1fb98244717c4532c956c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEQPZWG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFunYaQiHjX0nl1wj23igVsZhopHLHEIo5Ip82whkkGiAiEA8XwXL0Xd1J7zzPMuIjSX85sgDdEkx0HfibDFI2M4rPAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxz16p6yTScUvidaircA%2BH%2FvgRH%2FI3e%2FZQnmUk0PhxezKUrZ1V7oW1Ual2%2B%2FpOKncbjbUlug1nxaRm258hj8J40M2InaDh2GCc0i9Y8%2FiFyJgZcvqvokQR5tOrLS4q%2Fv6AJfTdSOoFh7ZdwxvJ6v38%2BnKvkVH0ff9RFHf00xxcpxXv542oWkPDAfeaJLajoLGzvhXKtXULm4xJvXpK3kPv8B4vPAWwXfUqdG5r1PoXxMSIEoyP8lMV0wTbMPaeHO2XpfyEFG%2FUkjZWT8rvW2s2diTOhCj3stb4aIcs3TNxGs9B95GiYtufZDSQkg76e4bOYmzbWXTN9PeBBOjdCf1Ed8hfGCZKnJBGyUZgJyI8qQEl9tRxg49c7MnMrMfa5ZJAqVDKoqeZCKZ4hhJtY5LwkBvrliQCAYmiU3dlPGTN9clz%2Fyghhu%2FMdbh6mPUP7qFh02OTk9JemsAtKB7UJjw%2FQdxypeDRuccBiyC8Xi4qAANduviO7jFpqMoecE%2B4rGA8M92ZzaeE%2BIr0v7vYFSiEHtyZypxU1nVJoXpXzU0ki1uS6cBp%2FVU12N4t%2BIqThqeQ4x%2BA4cMWdithvUd1erjBBNcJJixko%2FoRCjMC%2FZb4mcu2ofxdZVbgy7uhPohQcYweiwDGiSbaXOB92MOXCv8EGOqUBVIRCmWbzefMvSjb9MdJkMpZVNifgIw2Ca2vjj69hy6j%2BS7FoW2%2FpOhuYFhYgagttrlibdJCnohYTM%2FTjE4zQ4fmmd1XH8ePgm9GXZicPUaXTkcwkrVhl7mT32EbSnHOAxsRlblIE2T3RukqfaqeEgH5fZeangX2tTPBBapM4mX2wB5SNWm0pOSNFhhlsFKVwh1uOnfj%2BCGgF5tdfbuVasjey%2F8Bb&X-Amz-Signature=5b99fcbd610896466a0f2c869458ac0f881e27cf1d3c27334faa9d70a2da515f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEQPZWG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFunYaQiHjX0nl1wj23igVsZhopHLHEIo5Ip82whkkGiAiEA8XwXL0Xd1J7zzPMuIjSX85sgDdEkx0HfibDFI2M4rPAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxz16p6yTScUvidaircA%2BH%2FvgRH%2FI3e%2FZQnmUk0PhxezKUrZ1V7oW1Ual2%2B%2FpOKncbjbUlug1nxaRm258hj8J40M2InaDh2GCc0i9Y8%2FiFyJgZcvqvokQR5tOrLS4q%2Fv6AJfTdSOoFh7ZdwxvJ6v38%2BnKvkVH0ff9RFHf00xxcpxXv542oWkPDAfeaJLajoLGzvhXKtXULm4xJvXpK3kPv8B4vPAWwXfUqdG5r1PoXxMSIEoyP8lMV0wTbMPaeHO2XpfyEFG%2FUkjZWT8rvW2s2diTOhCj3stb4aIcs3TNxGs9B95GiYtufZDSQkg76e4bOYmzbWXTN9PeBBOjdCf1Ed8hfGCZKnJBGyUZgJyI8qQEl9tRxg49c7MnMrMfa5ZJAqVDKoqeZCKZ4hhJtY5LwkBvrliQCAYmiU3dlPGTN9clz%2Fyghhu%2FMdbh6mPUP7qFh02OTk9JemsAtKB7UJjw%2FQdxypeDRuccBiyC8Xi4qAANduviO7jFpqMoecE%2B4rGA8M92ZzaeE%2BIr0v7vYFSiEHtyZypxU1nVJoXpXzU0ki1uS6cBp%2FVU12N4t%2BIqThqeQ4x%2BA4cMWdithvUd1erjBBNcJJixko%2FoRCjMC%2FZb4mcu2ofxdZVbgy7uhPohQcYweiwDGiSbaXOB92MOXCv8EGOqUBVIRCmWbzefMvSjb9MdJkMpZVNifgIw2Ca2vjj69hy6j%2BS7FoW2%2FpOhuYFhYgagttrlibdJCnohYTM%2FTjE4zQ4fmmd1XH8ePgm9GXZicPUaXTkcwkrVhl7mT32EbSnHOAxsRlblIE2T3RukqfaqeEgH5fZeangX2tTPBBapM4mX2wB5SNWm0pOSNFhhlsFKVwh1uOnfj%2BCGgF5tdfbuVasjey%2F8Bb&X-Amz-Signature=21bba2f27e3621d31ede8fb6f3c7bbe9f13d87223d725e91fbc251f01208ff87&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEQPZWG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFunYaQiHjX0nl1wj23igVsZhopHLHEIo5Ip82whkkGiAiEA8XwXL0Xd1J7zzPMuIjSX85sgDdEkx0HfibDFI2M4rPAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxz16p6yTScUvidaircA%2BH%2FvgRH%2FI3e%2FZQnmUk0PhxezKUrZ1V7oW1Ual2%2B%2FpOKncbjbUlug1nxaRm258hj8J40M2InaDh2GCc0i9Y8%2FiFyJgZcvqvokQR5tOrLS4q%2Fv6AJfTdSOoFh7ZdwxvJ6v38%2BnKvkVH0ff9RFHf00xxcpxXv542oWkPDAfeaJLajoLGzvhXKtXULm4xJvXpK3kPv8B4vPAWwXfUqdG5r1PoXxMSIEoyP8lMV0wTbMPaeHO2XpfyEFG%2FUkjZWT8rvW2s2diTOhCj3stb4aIcs3TNxGs9B95GiYtufZDSQkg76e4bOYmzbWXTN9PeBBOjdCf1Ed8hfGCZKnJBGyUZgJyI8qQEl9tRxg49c7MnMrMfa5ZJAqVDKoqeZCKZ4hhJtY5LwkBvrliQCAYmiU3dlPGTN9clz%2Fyghhu%2FMdbh6mPUP7qFh02OTk9JemsAtKB7UJjw%2FQdxypeDRuccBiyC8Xi4qAANduviO7jFpqMoecE%2B4rGA8M92ZzaeE%2BIr0v7vYFSiEHtyZypxU1nVJoXpXzU0ki1uS6cBp%2FVU12N4t%2BIqThqeQ4x%2BA4cMWdithvUd1erjBBNcJJixko%2FoRCjMC%2FZb4mcu2ofxdZVbgy7uhPohQcYweiwDGiSbaXOB92MOXCv8EGOqUBVIRCmWbzefMvSjb9MdJkMpZVNifgIw2Ca2vjj69hy6j%2BS7FoW2%2FpOhuYFhYgagttrlibdJCnohYTM%2FTjE4zQ4fmmd1XH8ePgm9GXZicPUaXTkcwkrVhl7mT32EbSnHOAxsRlblIE2T3RukqfaqeEgH5fZeangX2tTPBBapM4mX2wB5SNWm0pOSNFhhlsFKVwh1uOnfj%2BCGgF5tdfbuVasjey%2F8Bb&X-Amz-Signature=7d7783329045da23a91d9bd10b7781a45dc0623333f8a07358ffb017ca927db6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEQPZWG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFunYaQiHjX0nl1wj23igVsZhopHLHEIo5Ip82whkkGiAiEA8XwXL0Xd1J7zzPMuIjSX85sgDdEkx0HfibDFI2M4rPAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxz16p6yTScUvidaircA%2BH%2FvgRH%2FI3e%2FZQnmUk0PhxezKUrZ1V7oW1Ual2%2B%2FpOKncbjbUlug1nxaRm258hj8J40M2InaDh2GCc0i9Y8%2FiFyJgZcvqvokQR5tOrLS4q%2Fv6AJfTdSOoFh7ZdwxvJ6v38%2BnKvkVH0ff9RFHf00xxcpxXv542oWkPDAfeaJLajoLGzvhXKtXULm4xJvXpK3kPv8B4vPAWwXfUqdG5r1PoXxMSIEoyP8lMV0wTbMPaeHO2XpfyEFG%2FUkjZWT8rvW2s2diTOhCj3stb4aIcs3TNxGs9B95GiYtufZDSQkg76e4bOYmzbWXTN9PeBBOjdCf1Ed8hfGCZKnJBGyUZgJyI8qQEl9tRxg49c7MnMrMfa5ZJAqVDKoqeZCKZ4hhJtY5LwkBvrliQCAYmiU3dlPGTN9clz%2Fyghhu%2FMdbh6mPUP7qFh02OTk9JemsAtKB7UJjw%2FQdxypeDRuccBiyC8Xi4qAANduviO7jFpqMoecE%2B4rGA8M92ZzaeE%2BIr0v7vYFSiEHtyZypxU1nVJoXpXzU0ki1uS6cBp%2FVU12N4t%2BIqThqeQ4x%2BA4cMWdithvUd1erjBBNcJJixko%2FoRCjMC%2FZb4mcu2ofxdZVbgy7uhPohQcYweiwDGiSbaXOB92MOXCv8EGOqUBVIRCmWbzefMvSjb9MdJkMpZVNifgIw2Ca2vjj69hy6j%2BS7FoW2%2FpOhuYFhYgagttrlibdJCnohYTM%2FTjE4zQ4fmmd1XH8ePgm9GXZicPUaXTkcwkrVhl7mT32EbSnHOAxsRlblIE2T3RukqfaqeEgH5fZeangX2tTPBBapM4mX2wB5SNWm0pOSNFhhlsFKVwh1uOnfj%2BCGgF5tdfbuVasjey%2F8Bb&X-Amz-Signature=7a8d1d6e293d7ed4e562d144f83f942c67d16e25b3e8a61b88409a61652126b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEQPZWG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFunYaQiHjX0nl1wj23igVsZhopHLHEIo5Ip82whkkGiAiEA8XwXL0Xd1J7zzPMuIjSX85sgDdEkx0HfibDFI2M4rPAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxz16p6yTScUvidaircA%2BH%2FvgRH%2FI3e%2FZQnmUk0PhxezKUrZ1V7oW1Ual2%2B%2FpOKncbjbUlug1nxaRm258hj8J40M2InaDh2GCc0i9Y8%2FiFyJgZcvqvokQR5tOrLS4q%2Fv6AJfTdSOoFh7ZdwxvJ6v38%2BnKvkVH0ff9RFHf00xxcpxXv542oWkPDAfeaJLajoLGzvhXKtXULm4xJvXpK3kPv8B4vPAWwXfUqdG5r1PoXxMSIEoyP8lMV0wTbMPaeHO2XpfyEFG%2FUkjZWT8rvW2s2diTOhCj3stb4aIcs3TNxGs9B95GiYtufZDSQkg76e4bOYmzbWXTN9PeBBOjdCf1Ed8hfGCZKnJBGyUZgJyI8qQEl9tRxg49c7MnMrMfa5ZJAqVDKoqeZCKZ4hhJtY5LwkBvrliQCAYmiU3dlPGTN9clz%2Fyghhu%2FMdbh6mPUP7qFh02OTk9JemsAtKB7UJjw%2FQdxypeDRuccBiyC8Xi4qAANduviO7jFpqMoecE%2B4rGA8M92ZzaeE%2BIr0v7vYFSiEHtyZypxU1nVJoXpXzU0ki1uS6cBp%2FVU12N4t%2BIqThqeQ4x%2BA4cMWdithvUd1erjBBNcJJixko%2FoRCjMC%2FZb4mcu2ofxdZVbgy7uhPohQcYweiwDGiSbaXOB92MOXCv8EGOqUBVIRCmWbzefMvSjb9MdJkMpZVNifgIw2Ca2vjj69hy6j%2BS7FoW2%2FpOhuYFhYgagttrlibdJCnohYTM%2FTjE4zQ4fmmd1XH8ePgm9GXZicPUaXTkcwkrVhl7mT32EbSnHOAxsRlblIE2T3RukqfaqeEgH5fZeangX2tTPBBapM4mX2wB5SNWm0pOSNFhhlsFKVwh1uOnfj%2BCGgF5tdfbuVasjey%2F8Bb&X-Amz-Signature=de5159eb4eb8eb93e805eadf34b27cea0def96f39ceb40cf6fe63d8320e8cb74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEQPZWG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFunYaQiHjX0nl1wj23igVsZhopHLHEIo5Ip82whkkGiAiEA8XwXL0Xd1J7zzPMuIjSX85sgDdEkx0HfibDFI2M4rPAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxz16p6yTScUvidaircA%2BH%2FvgRH%2FI3e%2FZQnmUk0PhxezKUrZ1V7oW1Ual2%2B%2FpOKncbjbUlug1nxaRm258hj8J40M2InaDh2GCc0i9Y8%2FiFyJgZcvqvokQR5tOrLS4q%2Fv6AJfTdSOoFh7ZdwxvJ6v38%2BnKvkVH0ff9RFHf00xxcpxXv542oWkPDAfeaJLajoLGzvhXKtXULm4xJvXpK3kPv8B4vPAWwXfUqdG5r1PoXxMSIEoyP8lMV0wTbMPaeHO2XpfyEFG%2FUkjZWT8rvW2s2diTOhCj3stb4aIcs3TNxGs9B95GiYtufZDSQkg76e4bOYmzbWXTN9PeBBOjdCf1Ed8hfGCZKnJBGyUZgJyI8qQEl9tRxg49c7MnMrMfa5ZJAqVDKoqeZCKZ4hhJtY5LwkBvrliQCAYmiU3dlPGTN9clz%2Fyghhu%2FMdbh6mPUP7qFh02OTk9JemsAtKB7UJjw%2FQdxypeDRuccBiyC8Xi4qAANduviO7jFpqMoecE%2B4rGA8M92ZzaeE%2BIr0v7vYFSiEHtyZypxU1nVJoXpXzU0ki1uS6cBp%2FVU12N4t%2BIqThqeQ4x%2BA4cMWdithvUd1erjBBNcJJixko%2FoRCjMC%2FZb4mcu2ofxdZVbgy7uhPohQcYweiwDGiSbaXOB92MOXCv8EGOqUBVIRCmWbzefMvSjb9MdJkMpZVNifgIw2Ca2vjj69hy6j%2BS7FoW2%2FpOhuYFhYgagttrlibdJCnohYTM%2FTjE4zQ4fmmd1XH8ePgm9GXZicPUaXTkcwkrVhl7mT32EbSnHOAxsRlblIE2T3RukqfaqeEgH5fZeangX2tTPBBapM4mX2wB5SNWm0pOSNFhhlsFKVwh1uOnfj%2BCGgF5tdfbuVasjey%2F8Bb&X-Amz-Signature=ce05e0914485f32b73f933942a8af4ba2cbe085f62f44b719a7d02a3a3043cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEQPZWG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIFunYaQiHjX0nl1wj23igVsZhopHLHEIo5Ip82whkkGiAiEA8XwXL0Xd1J7zzPMuIjSX85sgDdEkx0HfibDFI2M4rPAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxz16p6yTScUvidaircA%2BH%2FvgRH%2FI3e%2FZQnmUk0PhxezKUrZ1V7oW1Ual2%2B%2FpOKncbjbUlug1nxaRm258hj8J40M2InaDh2GCc0i9Y8%2FiFyJgZcvqvokQR5tOrLS4q%2Fv6AJfTdSOoFh7ZdwxvJ6v38%2BnKvkVH0ff9RFHf00xxcpxXv542oWkPDAfeaJLajoLGzvhXKtXULm4xJvXpK3kPv8B4vPAWwXfUqdG5r1PoXxMSIEoyP8lMV0wTbMPaeHO2XpfyEFG%2FUkjZWT8rvW2s2diTOhCj3stb4aIcs3TNxGs9B95GiYtufZDSQkg76e4bOYmzbWXTN9PeBBOjdCf1Ed8hfGCZKnJBGyUZgJyI8qQEl9tRxg49c7MnMrMfa5ZJAqVDKoqeZCKZ4hhJtY5LwkBvrliQCAYmiU3dlPGTN9clz%2Fyghhu%2FMdbh6mPUP7qFh02OTk9JemsAtKB7UJjw%2FQdxypeDRuccBiyC8Xi4qAANduviO7jFpqMoecE%2B4rGA8M92ZzaeE%2BIr0v7vYFSiEHtyZypxU1nVJoXpXzU0ki1uS6cBp%2FVU12N4t%2BIqThqeQ4x%2BA4cMWdithvUd1erjBBNcJJixko%2FoRCjMC%2FZb4mcu2ofxdZVbgy7uhPohQcYweiwDGiSbaXOB92MOXCv8EGOqUBVIRCmWbzefMvSjb9MdJkMpZVNifgIw2Ca2vjj69hy6j%2BS7FoW2%2FpOhuYFhYgagttrlibdJCnohYTM%2FTjE4zQ4fmmd1XH8ePgm9GXZicPUaXTkcwkrVhl7mT32EbSnHOAxsRlblIE2T3RukqfaqeEgH5fZeangX2tTPBBapM4mX2wB5SNWm0pOSNFhhlsFKVwh1uOnfj%2BCGgF5tdfbuVasjey%2F8Bb&X-Amz-Signature=08674d075274f64917a76a66dcb2bf2083e6bd5b4d2419d863b4393c3a9b7a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

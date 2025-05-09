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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLBEEBF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ghyE6S7%2FR6TlyEisMPOFDgJUaPeJBPJCHv6dAIcmVAiEA8wjUMUnw9v3j9CW21UyTa%2B180VfoOuS%2FniDB1DLvSeEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhkXW4IZIDc30eWHircA4EOwNhIr1Qm5X4ea94eiflkz3cosMJlw6RO8iitjcG1h1qPFTER9jiyRisCtyHHljn%2FDl03ER7oKp50fjKMbyeu5LoS2Gk4ZK3sHuEQAkvU6WTXCNxzSyxJhTYGwdwn3izHxOhDdKgQigySzbLgouEQoBA%2F8hrvifTslPLzbVtN5eqw2UHCl4ML10w1P748q8ADdj2%2B50Q8mTxYxHb%2FWJl3JqNrWGMf10t%2Fo4mfopFOMEejQ3ugfZ4OggJuXbVEepeM%2F5jRk1RQWcGmVPS%2FLcwx2CrzYPq6h1HCcD3IMX8uucjomRgC%2BngSv2wOcm7dLQR%2FNk%2FZyf8eqOALTtRN9lDRIO0ujZUzXfSHqQtSPlbTHOk0vSPPy0VSaNunc9iJgBb%2BVdcMbnor%2FwDR1DfzwOOeedYuEJMoIcV4gxq2BfSWeNnE4UbuXprXq2xYlPwGaSCz%2B7FgUj5L9HPbJ%2BHmTAlOCzmdFEupusEz9WTxr1CSzDNo9QWfErwIV%2F1vJcEGF8JwRqeh6Ynv7kDcosGjXJXMGqFt%2BE5%2BlYzhXL47E5TuodsP8zjezaQQkM45C5N%2BofeeS19U%2FP2ewl9gYSsZ4QBPSiFQg4CDXFWo2m7vOIDw9O9kmwTFWZeC5kypMMOB%2BsAGOqUBP9x95PEtUZK4LzTcyWYzl%2FhtTWpdc82uIfXmSAtfHMk5PWApZ9OEDqZ76MeUfCQGulPr6fGYnB0itBDnSr3Oci2hBiNlzOigGDiVaNWhxRY%2FmLOJtyr7yFsMqzmR1RouPRi9j9g77dbpUj4cWvlmV6Yfipv8wtyVX9oybWswzHXRG3%2BUlNfKceOBKVJbt%2BPk0eTfiyMcR8TzK6mnZO4e35ulEKLq&X-Amz-Signature=6dd48fa3ce61243bdca7af843990249fdd0b8ac4f58b66059f1488bea6d86047&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLBEEBF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ghyE6S7%2FR6TlyEisMPOFDgJUaPeJBPJCHv6dAIcmVAiEA8wjUMUnw9v3j9CW21UyTa%2B180VfoOuS%2FniDB1DLvSeEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhkXW4IZIDc30eWHircA4EOwNhIr1Qm5X4ea94eiflkz3cosMJlw6RO8iitjcG1h1qPFTER9jiyRisCtyHHljn%2FDl03ER7oKp50fjKMbyeu5LoS2Gk4ZK3sHuEQAkvU6WTXCNxzSyxJhTYGwdwn3izHxOhDdKgQigySzbLgouEQoBA%2F8hrvifTslPLzbVtN5eqw2UHCl4ML10w1P748q8ADdj2%2B50Q8mTxYxHb%2FWJl3JqNrWGMf10t%2Fo4mfopFOMEejQ3ugfZ4OggJuXbVEepeM%2F5jRk1RQWcGmVPS%2FLcwx2CrzYPq6h1HCcD3IMX8uucjomRgC%2BngSv2wOcm7dLQR%2FNk%2FZyf8eqOALTtRN9lDRIO0ujZUzXfSHqQtSPlbTHOk0vSPPy0VSaNunc9iJgBb%2BVdcMbnor%2FwDR1DfzwOOeedYuEJMoIcV4gxq2BfSWeNnE4UbuXprXq2xYlPwGaSCz%2B7FgUj5L9HPbJ%2BHmTAlOCzmdFEupusEz9WTxr1CSzDNo9QWfErwIV%2F1vJcEGF8JwRqeh6Ynv7kDcosGjXJXMGqFt%2BE5%2BlYzhXL47E5TuodsP8zjezaQQkM45C5N%2BofeeS19U%2FP2ewl9gYSsZ4QBPSiFQg4CDXFWo2m7vOIDw9O9kmwTFWZeC5kypMMOB%2BsAGOqUBP9x95PEtUZK4LzTcyWYzl%2FhtTWpdc82uIfXmSAtfHMk5PWApZ9OEDqZ76MeUfCQGulPr6fGYnB0itBDnSr3Oci2hBiNlzOigGDiVaNWhxRY%2FmLOJtyr7yFsMqzmR1RouPRi9j9g77dbpUj4cWvlmV6Yfipv8wtyVX9oybWswzHXRG3%2BUlNfKceOBKVJbt%2BPk0eTfiyMcR8TzK6mnZO4e35ulEKLq&X-Amz-Signature=daeea89bbcaf8fdc8b871f5bb358d6a83be6258abc6f963fe6762cc3e044836f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLBEEBF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ghyE6S7%2FR6TlyEisMPOFDgJUaPeJBPJCHv6dAIcmVAiEA8wjUMUnw9v3j9CW21UyTa%2B180VfoOuS%2FniDB1DLvSeEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhkXW4IZIDc30eWHircA4EOwNhIr1Qm5X4ea94eiflkz3cosMJlw6RO8iitjcG1h1qPFTER9jiyRisCtyHHljn%2FDl03ER7oKp50fjKMbyeu5LoS2Gk4ZK3sHuEQAkvU6WTXCNxzSyxJhTYGwdwn3izHxOhDdKgQigySzbLgouEQoBA%2F8hrvifTslPLzbVtN5eqw2UHCl4ML10w1P748q8ADdj2%2B50Q8mTxYxHb%2FWJl3JqNrWGMf10t%2Fo4mfopFOMEejQ3ugfZ4OggJuXbVEepeM%2F5jRk1RQWcGmVPS%2FLcwx2CrzYPq6h1HCcD3IMX8uucjomRgC%2BngSv2wOcm7dLQR%2FNk%2FZyf8eqOALTtRN9lDRIO0ujZUzXfSHqQtSPlbTHOk0vSPPy0VSaNunc9iJgBb%2BVdcMbnor%2FwDR1DfzwOOeedYuEJMoIcV4gxq2BfSWeNnE4UbuXprXq2xYlPwGaSCz%2B7FgUj5L9HPbJ%2BHmTAlOCzmdFEupusEz9WTxr1CSzDNo9QWfErwIV%2F1vJcEGF8JwRqeh6Ynv7kDcosGjXJXMGqFt%2BE5%2BlYzhXL47E5TuodsP8zjezaQQkM45C5N%2BofeeS19U%2FP2ewl9gYSsZ4QBPSiFQg4CDXFWo2m7vOIDw9O9kmwTFWZeC5kypMMOB%2BsAGOqUBP9x95PEtUZK4LzTcyWYzl%2FhtTWpdc82uIfXmSAtfHMk5PWApZ9OEDqZ76MeUfCQGulPr6fGYnB0itBDnSr3Oci2hBiNlzOigGDiVaNWhxRY%2FmLOJtyr7yFsMqzmR1RouPRi9j9g77dbpUj4cWvlmV6Yfipv8wtyVX9oybWswzHXRG3%2BUlNfKceOBKVJbt%2BPk0eTfiyMcR8TzK6mnZO4e35ulEKLq&X-Amz-Signature=a9dd13b5d3f0da3f8208ffda950d399a18e4cf68611726fd1221f5682b59141a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLBEEBF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ghyE6S7%2FR6TlyEisMPOFDgJUaPeJBPJCHv6dAIcmVAiEA8wjUMUnw9v3j9CW21UyTa%2B180VfoOuS%2FniDB1DLvSeEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhkXW4IZIDc30eWHircA4EOwNhIr1Qm5X4ea94eiflkz3cosMJlw6RO8iitjcG1h1qPFTER9jiyRisCtyHHljn%2FDl03ER7oKp50fjKMbyeu5LoS2Gk4ZK3sHuEQAkvU6WTXCNxzSyxJhTYGwdwn3izHxOhDdKgQigySzbLgouEQoBA%2F8hrvifTslPLzbVtN5eqw2UHCl4ML10w1P748q8ADdj2%2B50Q8mTxYxHb%2FWJl3JqNrWGMf10t%2Fo4mfopFOMEejQ3ugfZ4OggJuXbVEepeM%2F5jRk1RQWcGmVPS%2FLcwx2CrzYPq6h1HCcD3IMX8uucjomRgC%2BngSv2wOcm7dLQR%2FNk%2FZyf8eqOALTtRN9lDRIO0ujZUzXfSHqQtSPlbTHOk0vSPPy0VSaNunc9iJgBb%2BVdcMbnor%2FwDR1DfzwOOeedYuEJMoIcV4gxq2BfSWeNnE4UbuXprXq2xYlPwGaSCz%2B7FgUj5L9HPbJ%2BHmTAlOCzmdFEupusEz9WTxr1CSzDNo9QWfErwIV%2F1vJcEGF8JwRqeh6Ynv7kDcosGjXJXMGqFt%2BE5%2BlYzhXL47E5TuodsP8zjezaQQkM45C5N%2BofeeS19U%2FP2ewl9gYSsZ4QBPSiFQg4CDXFWo2m7vOIDw9O9kmwTFWZeC5kypMMOB%2BsAGOqUBP9x95PEtUZK4LzTcyWYzl%2FhtTWpdc82uIfXmSAtfHMk5PWApZ9OEDqZ76MeUfCQGulPr6fGYnB0itBDnSr3Oci2hBiNlzOigGDiVaNWhxRY%2FmLOJtyr7yFsMqzmR1RouPRi9j9g77dbpUj4cWvlmV6Yfipv8wtyVX9oybWswzHXRG3%2BUlNfKceOBKVJbt%2BPk0eTfiyMcR8TzK6mnZO4e35ulEKLq&X-Amz-Signature=52f9f884da177bccaeb2e6b33d0f2b3fd17ee4271d5ec52be708a47f9fff2d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLBEEBF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ghyE6S7%2FR6TlyEisMPOFDgJUaPeJBPJCHv6dAIcmVAiEA8wjUMUnw9v3j9CW21UyTa%2B180VfoOuS%2FniDB1DLvSeEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhkXW4IZIDc30eWHircA4EOwNhIr1Qm5X4ea94eiflkz3cosMJlw6RO8iitjcG1h1qPFTER9jiyRisCtyHHljn%2FDl03ER7oKp50fjKMbyeu5LoS2Gk4ZK3sHuEQAkvU6WTXCNxzSyxJhTYGwdwn3izHxOhDdKgQigySzbLgouEQoBA%2F8hrvifTslPLzbVtN5eqw2UHCl4ML10w1P748q8ADdj2%2B50Q8mTxYxHb%2FWJl3JqNrWGMf10t%2Fo4mfopFOMEejQ3ugfZ4OggJuXbVEepeM%2F5jRk1RQWcGmVPS%2FLcwx2CrzYPq6h1HCcD3IMX8uucjomRgC%2BngSv2wOcm7dLQR%2FNk%2FZyf8eqOALTtRN9lDRIO0ujZUzXfSHqQtSPlbTHOk0vSPPy0VSaNunc9iJgBb%2BVdcMbnor%2FwDR1DfzwOOeedYuEJMoIcV4gxq2BfSWeNnE4UbuXprXq2xYlPwGaSCz%2B7FgUj5L9HPbJ%2BHmTAlOCzmdFEupusEz9WTxr1CSzDNo9QWfErwIV%2F1vJcEGF8JwRqeh6Ynv7kDcosGjXJXMGqFt%2BE5%2BlYzhXL47E5TuodsP8zjezaQQkM45C5N%2BofeeS19U%2FP2ewl9gYSsZ4QBPSiFQg4CDXFWo2m7vOIDw9O9kmwTFWZeC5kypMMOB%2BsAGOqUBP9x95PEtUZK4LzTcyWYzl%2FhtTWpdc82uIfXmSAtfHMk5PWApZ9OEDqZ76MeUfCQGulPr6fGYnB0itBDnSr3Oci2hBiNlzOigGDiVaNWhxRY%2FmLOJtyr7yFsMqzmR1RouPRi9j9g77dbpUj4cWvlmV6Yfipv8wtyVX9oybWswzHXRG3%2BUlNfKceOBKVJbt%2BPk0eTfiyMcR8TzK6mnZO4e35ulEKLq&X-Amz-Signature=d10895e80d6b7b2c8878d17dcbea925004641c0b7e6d863bb6c234dfdb954f01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLBEEBF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ghyE6S7%2FR6TlyEisMPOFDgJUaPeJBPJCHv6dAIcmVAiEA8wjUMUnw9v3j9CW21UyTa%2B180VfoOuS%2FniDB1DLvSeEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhkXW4IZIDc30eWHircA4EOwNhIr1Qm5X4ea94eiflkz3cosMJlw6RO8iitjcG1h1qPFTER9jiyRisCtyHHljn%2FDl03ER7oKp50fjKMbyeu5LoS2Gk4ZK3sHuEQAkvU6WTXCNxzSyxJhTYGwdwn3izHxOhDdKgQigySzbLgouEQoBA%2F8hrvifTslPLzbVtN5eqw2UHCl4ML10w1P748q8ADdj2%2B50Q8mTxYxHb%2FWJl3JqNrWGMf10t%2Fo4mfopFOMEejQ3ugfZ4OggJuXbVEepeM%2F5jRk1RQWcGmVPS%2FLcwx2CrzYPq6h1HCcD3IMX8uucjomRgC%2BngSv2wOcm7dLQR%2FNk%2FZyf8eqOALTtRN9lDRIO0ujZUzXfSHqQtSPlbTHOk0vSPPy0VSaNunc9iJgBb%2BVdcMbnor%2FwDR1DfzwOOeedYuEJMoIcV4gxq2BfSWeNnE4UbuXprXq2xYlPwGaSCz%2B7FgUj5L9HPbJ%2BHmTAlOCzmdFEupusEz9WTxr1CSzDNo9QWfErwIV%2F1vJcEGF8JwRqeh6Ynv7kDcosGjXJXMGqFt%2BE5%2BlYzhXL47E5TuodsP8zjezaQQkM45C5N%2BofeeS19U%2FP2ewl9gYSsZ4QBPSiFQg4CDXFWo2m7vOIDw9O9kmwTFWZeC5kypMMOB%2BsAGOqUBP9x95PEtUZK4LzTcyWYzl%2FhtTWpdc82uIfXmSAtfHMk5PWApZ9OEDqZ76MeUfCQGulPr6fGYnB0itBDnSr3Oci2hBiNlzOigGDiVaNWhxRY%2FmLOJtyr7yFsMqzmR1RouPRi9j9g77dbpUj4cWvlmV6Yfipv8wtyVX9oybWswzHXRG3%2BUlNfKceOBKVJbt%2BPk0eTfiyMcR8TzK6mnZO4e35ulEKLq&X-Amz-Signature=522d7cd30f7a92f400354160557fd4d99999105cc876ece0034bedd62b326024&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLBEEBF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ghyE6S7%2FR6TlyEisMPOFDgJUaPeJBPJCHv6dAIcmVAiEA8wjUMUnw9v3j9CW21UyTa%2B180VfoOuS%2FniDB1DLvSeEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhkXW4IZIDc30eWHircA4EOwNhIr1Qm5X4ea94eiflkz3cosMJlw6RO8iitjcG1h1qPFTER9jiyRisCtyHHljn%2FDl03ER7oKp50fjKMbyeu5LoS2Gk4ZK3sHuEQAkvU6WTXCNxzSyxJhTYGwdwn3izHxOhDdKgQigySzbLgouEQoBA%2F8hrvifTslPLzbVtN5eqw2UHCl4ML10w1P748q8ADdj2%2B50Q8mTxYxHb%2FWJl3JqNrWGMf10t%2Fo4mfopFOMEejQ3ugfZ4OggJuXbVEepeM%2F5jRk1RQWcGmVPS%2FLcwx2CrzYPq6h1HCcD3IMX8uucjomRgC%2BngSv2wOcm7dLQR%2FNk%2FZyf8eqOALTtRN9lDRIO0ujZUzXfSHqQtSPlbTHOk0vSPPy0VSaNunc9iJgBb%2BVdcMbnor%2FwDR1DfzwOOeedYuEJMoIcV4gxq2BfSWeNnE4UbuXprXq2xYlPwGaSCz%2B7FgUj5L9HPbJ%2BHmTAlOCzmdFEupusEz9WTxr1CSzDNo9QWfErwIV%2F1vJcEGF8JwRqeh6Ynv7kDcosGjXJXMGqFt%2BE5%2BlYzhXL47E5TuodsP8zjezaQQkM45C5N%2BofeeS19U%2FP2ewl9gYSsZ4QBPSiFQg4CDXFWo2m7vOIDw9O9kmwTFWZeC5kypMMOB%2BsAGOqUBP9x95PEtUZK4LzTcyWYzl%2FhtTWpdc82uIfXmSAtfHMk5PWApZ9OEDqZ76MeUfCQGulPr6fGYnB0itBDnSr3Oci2hBiNlzOigGDiVaNWhxRY%2FmLOJtyr7yFsMqzmR1RouPRi9j9g77dbpUj4cWvlmV6Yfipv8wtyVX9oybWswzHXRG3%2BUlNfKceOBKVJbt%2BPk0eTfiyMcR8TzK6mnZO4e35ulEKLq&X-Amz-Signature=79f3753e1ed686588b1771d2e3d2c3cd3d39342d627d669841b23329ff4eea1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLBEEBF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ghyE6S7%2FR6TlyEisMPOFDgJUaPeJBPJCHv6dAIcmVAiEA8wjUMUnw9v3j9CW21UyTa%2B180VfoOuS%2FniDB1DLvSeEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhkXW4IZIDc30eWHircA4EOwNhIr1Qm5X4ea94eiflkz3cosMJlw6RO8iitjcG1h1qPFTER9jiyRisCtyHHljn%2FDl03ER7oKp50fjKMbyeu5LoS2Gk4ZK3sHuEQAkvU6WTXCNxzSyxJhTYGwdwn3izHxOhDdKgQigySzbLgouEQoBA%2F8hrvifTslPLzbVtN5eqw2UHCl4ML10w1P748q8ADdj2%2B50Q8mTxYxHb%2FWJl3JqNrWGMf10t%2Fo4mfopFOMEejQ3ugfZ4OggJuXbVEepeM%2F5jRk1RQWcGmVPS%2FLcwx2CrzYPq6h1HCcD3IMX8uucjomRgC%2BngSv2wOcm7dLQR%2FNk%2FZyf8eqOALTtRN9lDRIO0ujZUzXfSHqQtSPlbTHOk0vSPPy0VSaNunc9iJgBb%2BVdcMbnor%2FwDR1DfzwOOeedYuEJMoIcV4gxq2BfSWeNnE4UbuXprXq2xYlPwGaSCz%2B7FgUj5L9HPbJ%2BHmTAlOCzmdFEupusEz9WTxr1CSzDNo9QWfErwIV%2F1vJcEGF8JwRqeh6Ynv7kDcosGjXJXMGqFt%2BE5%2BlYzhXL47E5TuodsP8zjezaQQkM45C5N%2BofeeS19U%2FP2ewl9gYSsZ4QBPSiFQg4CDXFWo2m7vOIDw9O9kmwTFWZeC5kypMMOB%2BsAGOqUBP9x95PEtUZK4LzTcyWYzl%2FhtTWpdc82uIfXmSAtfHMk5PWApZ9OEDqZ76MeUfCQGulPr6fGYnB0itBDnSr3Oci2hBiNlzOigGDiVaNWhxRY%2FmLOJtyr7yFsMqzmR1RouPRi9j9g77dbpUj4cWvlmV6Yfipv8wtyVX9oybWswzHXRG3%2BUlNfKceOBKVJbt%2BPk0eTfiyMcR8TzK6mnZO4e35ulEKLq&X-Amz-Signature=afb5a239eb069832f59af8396b3d38d54037d77ed1ea1f531fdb910ee568f5de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMOEF4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF%2FBGEmAazngiYazL2o7Lyc1Nmw2ya5g5xhn%2BFo6wZS9AiATHyHKRme9OJJxC7BdPBxusldftwCCgbielQzF9%2B4TFyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSgNrD2lox4QsJDXnKtwDj4nM5unOB6jkFel5uf5sZ2%2FreGD73wFpcivWEYzC%2FQe8msJCKey05IXojwrKD3wpaJW80AhS4Oa4W80XJ%2FvNuB%2FLxnr18SYnxKv6%2BSriyA%2B3m6wtp0qZ4tszHffRpxeDvQK5PGT0E%2Fp%2Fqu8NH%2Fyfij%2BQPhKrimbozvekBYKN4SbW0LFZ%2Ba1%2FbxuIvVtc3ymLPUPV9Av%2FQSLZ7t3a67jBzw%2FF8ZBal%2Bf0%2FVnF4x2STf%2FYcA%2F0iW6BvmL2JNW4cY7pq1m9GnV43y3PkQDq9gKirYVaaBQwMPoxPIyvD12OeHCCjm5R1ij3NhtMYwQ5XK2KfD8vo9K2eJBnPvbvWGN7z00MQ187OVxrJbmov2qUevE%2Bwgl%2FNNULpqQfIFphY9XyEgRaE5sC0cDyE%2B74BmxRvrk%2BX9bssS9lMGaCv12LLhOZchGejwrBtxcY6wkEZpnRHTi62C2wIpY3qVfx2%2Bq1pCoJV3o2P%2Fhg%2BQZVkcPveO6pRU3%2BddGlh%2By1qZCbQYeHX7I%2BnwQXter1cKUFUQTVxAoG4OvmMK2ImbT7LDFPKio1nAuUfrpgVfCpy3AkClnUXoFvddrFcuSFdQ4xBT13LPiQ2ZNvgYWcL%2FgPDFP2lSgd9U%2FojP7EJLaacugwgPLCvgY6pgFxmRtjDPKdsU9esYDrSmmn9AgCbwbSJhR4pWLm7ab%2BZ7E0NlXCI7JaQOTcfemcYojD%2FLgHYCmGKzOBcWJZeMAR%2FRkp5abOZMs97QJ9ipfr9tPWFW3wakdQWluQuSWlqy5%2B86LtKY7%2F%2BdjCbBXticrbVp8V5wNGm%2FIWZhTqDr2%2BfepfK25az8zesXdvSSSP2TtKmA2o3U6p07UKr%2FImsAMQzlUiNPFv&X-Amz-Signature=fb2847440ee47f30b1c67ea18cf31a0849b10e336e1f327c8378b52ab643f4eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMOEF4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF%2FBGEmAazngiYazL2o7Lyc1Nmw2ya5g5xhn%2BFo6wZS9AiATHyHKRme9OJJxC7BdPBxusldftwCCgbielQzF9%2B4TFyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSgNrD2lox4QsJDXnKtwDj4nM5unOB6jkFel5uf5sZ2%2FreGD73wFpcivWEYzC%2FQe8msJCKey05IXojwrKD3wpaJW80AhS4Oa4W80XJ%2FvNuB%2FLxnr18SYnxKv6%2BSriyA%2B3m6wtp0qZ4tszHffRpxeDvQK5PGT0E%2Fp%2Fqu8NH%2Fyfij%2BQPhKrimbozvekBYKN4SbW0LFZ%2Ba1%2FbxuIvVtc3ymLPUPV9Av%2FQSLZ7t3a67jBzw%2FF8ZBal%2Bf0%2FVnF4x2STf%2FYcA%2F0iW6BvmL2JNW4cY7pq1m9GnV43y3PkQDq9gKirYVaaBQwMPoxPIyvD12OeHCCjm5R1ij3NhtMYwQ5XK2KfD8vo9K2eJBnPvbvWGN7z00MQ187OVxrJbmov2qUevE%2Bwgl%2FNNULpqQfIFphY9XyEgRaE5sC0cDyE%2B74BmxRvrk%2BX9bssS9lMGaCv12LLhOZchGejwrBtxcY6wkEZpnRHTi62C2wIpY3qVfx2%2Bq1pCoJV3o2P%2Fhg%2BQZVkcPveO6pRU3%2BddGlh%2By1qZCbQYeHX7I%2BnwQXter1cKUFUQTVxAoG4OvmMK2ImbT7LDFPKio1nAuUfrpgVfCpy3AkClnUXoFvddrFcuSFdQ4xBT13LPiQ2ZNvgYWcL%2FgPDFP2lSgd9U%2FojP7EJLaacugwgPLCvgY6pgFxmRtjDPKdsU9esYDrSmmn9AgCbwbSJhR4pWLm7ab%2BZ7E0NlXCI7JaQOTcfemcYojD%2FLgHYCmGKzOBcWJZeMAR%2FRkp5abOZMs97QJ9ipfr9tPWFW3wakdQWluQuSWlqy5%2B86LtKY7%2F%2BdjCbBXticrbVp8V5wNGm%2FIWZhTqDr2%2BfepfK25az8zesXdvSSSP2TtKmA2o3U6p07UKr%2FImsAMQzlUiNPFv&X-Amz-Signature=22ce8ff795def792df2c978c3c54f6d84160290de9b00919cfd3e3d33c6134b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMOEF4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF%2FBGEmAazngiYazL2o7Lyc1Nmw2ya5g5xhn%2BFo6wZS9AiATHyHKRme9OJJxC7BdPBxusldftwCCgbielQzF9%2B4TFyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSgNrD2lox4QsJDXnKtwDj4nM5unOB6jkFel5uf5sZ2%2FreGD73wFpcivWEYzC%2FQe8msJCKey05IXojwrKD3wpaJW80AhS4Oa4W80XJ%2FvNuB%2FLxnr18SYnxKv6%2BSriyA%2B3m6wtp0qZ4tszHffRpxeDvQK5PGT0E%2Fp%2Fqu8NH%2Fyfij%2BQPhKrimbozvekBYKN4SbW0LFZ%2Ba1%2FbxuIvVtc3ymLPUPV9Av%2FQSLZ7t3a67jBzw%2FF8ZBal%2Bf0%2FVnF4x2STf%2FYcA%2F0iW6BvmL2JNW4cY7pq1m9GnV43y3PkQDq9gKirYVaaBQwMPoxPIyvD12OeHCCjm5R1ij3NhtMYwQ5XK2KfD8vo9K2eJBnPvbvWGN7z00MQ187OVxrJbmov2qUevE%2Bwgl%2FNNULpqQfIFphY9XyEgRaE5sC0cDyE%2B74BmxRvrk%2BX9bssS9lMGaCv12LLhOZchGejwrBtxcY6wkEZpnRHTi62C2wIpY3qVfx2%2Bq1pCoJV3o2P%2Fhg%2BQZVkcPveO6pRU3%2BddGlh%2By1qZCbQYeHX7I%2BnwQXter1cKUFUQTVxAoG4OvmMK2ImbT7LDFPKio1nAuUfrpgVfCpy3AkClnUXoFvddrFcuSFdQ4xBT13LPiQ2ZNvgYWcL%2FgPDFP2lSgd9U%2FojP7EJLaacugwgPLCvgY6pgFxmRtjDPKdsU9esYDrSmmn9AgCbwbSJhR4pWLm7ab%2BZ7E0NlXCI7JaQOTcfemcYojD%2FLgHYCmGKzOBcWJZeMAR%2FRkp5abOZMs97QJ9ipfr9tPWFW3wakdQWluQuSWlqy5%2B86LtKY7%2F%2BdjCbBXticrbVp8V5wNGm%2FIWZhTqDr2%2BfepfK25az8zesXdvSSSP2TtKmA2o3U6p07UKr%2FImsAMQzlUiNPFv&X-Amz-Signature=defa6bb2db088a6dff201928a6af61a1a32c7d51be245e0e567cf05d9fce95d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMOEF4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF%2FBGEmAazngiYazL2o7Lyc1Nmw2ya5g5xhn%2BFo6wZS9AiATHyHKRme9OJJxC7BdPBxusldftwCCgbielQzF9%2B4TFyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSgNrD2lox4QsJDXnKtwDj4nM5unOB6jkFel5uf5sZ2%2FreGD73wFpcivWEYzC%2FQe8msJCKey05IXojwrKD3wpaJW80AhS4Oa4W80XJ%2FvNuB%2FLxnr18SYnxKv6%2BSriyA%2B3m6wtp0qZ4tszHffRpxeDvQK5PGT0E%2Fp%2Fqu8NH%2Fyfij%2BQPhKrimbozvekBYKN4SbW0LFZ%2Ba1%2FbxuIvVtc3ymLPUPV9Av%2FQSLZ7t3a67jBzw%2FF8ZBal%2Bf0%2FVnF4x2STf%2FYcA%2F0iW6BvmL2JNW4cY7pq1m9GnV43y3PkQDq9gKirYVaaBQwMPoxPIyvD12OeHCCjm5R1ij3NhtMYwQ5XK2KfD8vo9K2eJBnPvbvWGN7z00MQ187OVxrJbmov2qUevE%2Bwgl%2FNNULpqQfIFphY9XyEgRaE5sC0cDyE%2B74BmxRvrk%2BX9bssS9lMGaCv12LLhOZchGejwrBtxcY6wkEZpnRHTi62C2wIpY3qVfx2%2Bq1pCoJV3o2P%2Fhg%2BQZVkcPveO6pRU3%2BddGlh%2By1qZCbQYeHX7I%2BnwQXter1cKUFUQTVxAoG4OvmMK2ImbT7LDFPKio1nAuUfrpgVfCpy3AkClnUXoFvddrFcuSFdQ4xBT13LPiQ2ZNvgYWcL%2FgPDFP2lSgd9U%2FojP7EJLaacugwgPLCvgY6pgFxmRtjDPKdsU9esYDrSmmn9AgCbwbSJhR4pWLm7ab%2BZ7E0NlXCI7JaQOTcfemcYojD%2FLgHYCmGKzOBcWJZeMAR%2FRkp5abOZMs97QJ9ipfr9tPWFW3wakdQWluQuSWlqy5%2B86LtKY7%2F%2BdjCbBXticrbVp8V5wNGm%2FIWZhTqDr2%2BfepfK25az8zesXdvSSSP2TtKmA2o3U6p07UKr%2FImsAMQzlUiNPFv&X-Amz-Signature=65e65bbd6657de0252102ec7a46385a2f1054b0aee205e2b349821946f12dc06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMOEF4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF%2FBGEmAazngiYazL2o7Lyc1Nmw2ya5g5xhn%2BFo6wZS9AiATHyHKRme9OJJxC7BdPBxusldftwCCgbielQzF9%2B4TFyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSgNrD2lox4QsJDXnKtwDj4nM5unOB6jkFel5uf5sZ2%2FreGD73wFpcivWEYzC%2FQe8msJCKey05IXojwrKD3wpaJW80AhS4Oa4W80XJ%2FvNuB%2FLxnr18SYnxKv6%2BSriyA%2B3m6wtp0qZ4tszHffRpxeDvQK5PGT0E%2Fp%2Fqu8NH%2Fyfij%2BQPhKrimbozvekBYKN4SbW0LFZ%2Ba1%2FbxuIvVtc3ymLPUPV9Av%2FQSLZ7t3a67jBzw%2FF8ZBal%2Bf0%2FVnF4x2STf%2FYcA%2F0iW6BvmL2JNW4cY7pq1m9GnV43y3PkQDq9gKirYVaaBQwMPoxPIyvD12OeHCCjm5R1ij3NhtMYwQ5XK2KfD8vo9K2eJBnPvbvWGN7z00MQ187OVxrJbmov2qUevE%2Bwgl%2FNNULpqQfIFphY9XyEgRaE5sC0cDyE%2B74BmxRvrk%2BX9bssS9lMGaCv12LLhOZchGejwrBtxcY6wkEZpnRHTi62C2wIpY3qVfx2%2Bq1pCoJV3o2P%2Fhg%2BQZVkcPveO6pRU3%2BddGlh%2By1qZCbQYeHX7I%2BnwQXter1cKUFUQTVxAoG4OvmMK2ImbT7LDFPKio1nAuUfrpgVfCpy3AkClnUXoFvddrFcuSFdQ4xBT13LPiQ2ZNvgYWcL%2FgPDFP2lSgd9U%2FojP7EJLaacugwgPLCvgY6pgFxmRtjDPKdsU9esYDrSmmn9AgCbwbSJhR4pWLm7ab%2BZ7E0NlXCI7JaQOTcfemcYojD%2FLgHYCmGKzOBcWJZeMAR%2FRkp5abOZMs97QJ9ipfr9tPWFW3wakdQWluQuSWlqy5%2B86LtKY7%2F%2BdjCbBXticrbVp8V5wNGm%2FIWZhTqDr2%2BfepfK25az8zesXdvSSSP2TtKmA2o3U6p07UKr%2FImsAMQzlUiNPFv&X-Amz-Signature=efd97d4dbaf5eb36971fa735d4647c2af18faebc6340af2d991f62303f246a97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMOEF4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF%2FBGEmAazngiYazL2o7Lyc1Nmw2ya5g5xhn%2BFo6wZS9AiATHyHKRme9OJJxC7BdPBxusldftwCCgbielQzF9%2B4TFyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSgNrD2lox4QsJDXnKtwDj4nM5unOB6jkFel5uf5sZ2%2FreGD73wFpcivWEYzC%2FQe8msJCKey05IXojwrKD3wpaJW80AhS4Oa4W80XJ%2FvNuB%2FLxnr18SYnxKv6%2BSriyA%2B3m6wtp0qZ4tszHffRpxeDvQK5PGT0E%2Fp%2Fqu8NH%2Fyfij%2BQPhKrimbozvekBYKN4SbW0LFZ%2Ba1%2FbxuIvVtc3ymLPUPV9Av%2FQSLZ7t3a67jBzw%2FF8ZBal%2Bf0%2FVnF4x2STf%2FYcA%2F0iW6BvmL2JNW4cY7pq1m9GnV43y3PkQDq9gKirYVaaBQwMPoxPIyvD12OeHCCjm5R1ij3NhtMYwQ5XK2KfD8vo9K2eJBnPvbvWGN7z00MQ187OVxrJbmov2qUevE%2Bwgl%2FNNULpqQfIFphY9XyEgRaE5sC0cDyE%2B74BmxRvrk%2BX9bssS9lMGaCv12LLhOZchGejwrBtxcY6wkEZpnRHTi62C2wIpY3qVfx2%2Bq1pCoJV3o2P%2Fhg%2BQZVkcPveO6pRU3%2BddGlh%2By1qZCbQYeHX7I%2BnwQXter1cKUFUQTVxAoG4OvmMK2ImbT7LDFPKio1nAuUfrpgVfCpy3AkClnUXoFvddrFcuSFdQ4xBT13LPiQ2ZNvgYWcL%2FgPDFP2lSgd9U%2FojP7EJLaacugwgPLCvgY6pgFxmRtjDPKdsU9esYDrSmmn9AgCbwbSJhR4pWLm7ab%2BZ7E0NlXCI7JaQOTcfemcYojD%2FLgHYCmGKzOBcWJZeMAR%2FRkp5abOZMs97QJ9ipfr9tPWFW3wakdQWluQuSWlqy5%2B86LtKY7%2F%2BdjCbBXticrbVp8V5wNGm%2FIWZhTqDr2%2BfepfK25az8zesXdvSSSP2TtKmA2o3U6p07UKr%2FImsAMQzlUiNPFv&X-Amz-Signature=171e0fce409755664dc200c6373b9f0ddd9210efaebee0ea08bd1e0fca2d516b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMOEF4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF%2FBGEmAazngiYazL2o7Lyc1Nmw2ya5g5xhn%2BFo6wZS9AiATHyHKRme9OJJxC7BdPBxusldftwCCgbielQzF9%2B4TFyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSgNrD2lox4QsJDXnKtwDj4nM5unOB6jkFel5uf5sZ2%2FreGD73wFpcivWEYzC%2FQe8msJCKey05IXojwrKD3wpaJW80AhS4Oa4W80XJ%2FvNuB%2FLxnr18SYnxKv6%2BSriyA%2B3m6wtp0qZ4tszHffRpxeDvQK5PGT0E%2Fp%2Fqu8NH%2Fyfij%2BQPhKrimbozvekBYKN4SbW0LFZ%2Ba1%2FbxuIvVtc3ymLPUPV9Av%2FQSLZ7t3a67jBzw%2FF8ZBal%2Bf0%2FVnF4x2STf%2FYcA%2F0iW6BvmL2JNW4cY7pq1m9GnV43y3PkQDq9gKirYVaaBQwMPoxPIyvD12OeHCCjm5R1ij3NhtMYwQ5XK2KfD8vo9K2eJBnPvbvWGN7z00MQ187OVxrJbmov2qUevE%2Bwgl%2FNNULpqQfIFphY9XyEgRaE5sC0cDyE%2B74BmxRvrk%2BX9bssS9lMGaCv12LLhOZchGejwrBtxcY6wkEZpnRHTi62C2wIpY3qVfx2%2Bq1pCoJV3o2P%2Fhg%2BQZVkcPveO6pRU3%2BddGlh%2By1qZCbQYeHX7I%2BnwQXter1cKUFUQTVxAoG4OvmMK2ImbT7LDFPKio1nAuUfrpgVfCpy3AkClnUXoFvddrFcuSFdQ4xBT13LPiQ2ZNvgYWcL%2FgPDFP2lSgd9U%2FojP7EJLaacugwgPLCvgY6pgFxmRtjDPKdsU9esYDrSmmn9AgCbwbSJhR4pWLm7ab%2BZ7E0NlXCI7JaQOTcfemcYojD%2FLgHYCmGKzOBcWJZeMAR%2FRkp5abOZMs97QJ9ipfr9tPWFW3wakdQWluQuSWlqy5%2B86LtKY7%2F%2BdjCbBXticrbVp8V5wNGm%2FIWZhTqDr2%2BfepfK25az8zesXdvSSSP2TtKmA2o3U6p07UKr%2FImsAMQzlUiNPFv&X-Amz-Signature=9218659d0166951fcbeaa8ad474ebf0634c5f27bc81be0052748ae67f5a1d826&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMOEF4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIF%2FBGEmAazngiYazL2o7Lyc1Nmw2ya5g5xhn%2BFo6wZS9AiATHyHKRme9OJJxC7BdPBxusldftwCCgbielQzF9%2B4TFyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSgNrD2lox4QsJDXnKtwDj4nM5unOB6jkFel5uf5sZ2%2FreGD73wFpcivWEYzC%2FQe8msJCKey05IXojwrKD3wpaJW80AhS4Oa4W80XJ%2FvNuB%2FLxnr18SYnxKv6%2BSriyA%2B3m6wtp0qZ4tszHffRpxeDvQK5PGT0E%2Fp%2Fqu8NH%2Fyfij%2BQPhKrimbozvekBYKN4SbW0LFZ%2Ba1%2FbxuIvVtc3ymLPUPV9Av%2FQSLZ7t3a67jBzw%2FF8ZBal%2Bf0%2FVnF4x2STf%2FYcA%2F0iW6BvmL2JNW4cY7pq1m9GnV43y3PkQDq9gKirYVaaBQwMPoxPIyvD12OeHCCjm5R1ij3NhtMYwQ5XK2KfD8vo9K2eJBnPvbvWGN7z00MQ187OVxrJbmov2qUevE%2Bwgl%2FNNULpqQfIFphY9XyEgRaE5sC0cDyE%2B74BmxRvrk%2BX9bssS9lMGaCv12LLhOZchGejwrBtxcY6wkEZpnRHTi62C2wIpY3qVfx2%2Bq1pCoJV3o2P%2Fhg%2BQZVkcPveO6pRU3%2BddGlh%2By1qZCbQYeHX7I%2BnwQXter1cKUFUQTVxAoG4OvmMK2ImbT7LDFPKio1nAuUfrpgVfCpy3AkClnUXoFvddrFcuSFdQ4xBT13LPiQ2ZNvgYWcL%2FgPDFP2lSgd9U%2FojP7EJLaacugwgPLCvgY6pgFxmRtjDPKdsU9esYDrSmmn9AgCbwbSJhR4pWLm7ab%2BZ7E0NlXCI7JaQOTcfemcYojD%2FLgHYCmGKzOBcWJZeMAR%2FRkp5abOZMs97QJ9ipfr9tPWFW3wakdQWluQuSWlqy5%2B86LtKY7%2F%2BdjCbBXticrbVp8V5wNGm%2FIWZhTqDr2%2BfepfK25az8zesXdvSSSP2TtKmA2o3U6p07UKr%2FImsAMQzlUiNPFv&X-Amz-Signature=a456475c4576863c95884d83f39cbc89785d764b3f991d74084539a5bb0641da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

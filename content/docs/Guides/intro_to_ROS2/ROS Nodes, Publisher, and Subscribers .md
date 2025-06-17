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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV6NWRD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2BCVLVzvguZQD3690blJ309XdkcN%2BAek9fBpAI4GYZAiA42icTiHQFNnzMnKBfT7v8jFrkBNjAnTp3alBtmP9qTyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2wsO%2BZJJUXnGtTLuKtwDZmFXZ4fWBH4Cb1biXE7erY7adomSR6I%2FQRbSi4D60GRpgQzMWu7iIqpMjb5YynG6Vem4AORU3ogmpGnPNnCdVmxmlggbfIccdAKM8wJBh7C9ZatPN5Hp0R9J2az3H%2BP5tHfP8TDG020paL4WxyA3xB6FqE8N3RtNAEHiCs1P5z40iPU8P165wmuH42Vs4awxy2Eax7sxAjlfI%2BEsA%2FhCVe1bJFxljwodLAMXJl%2FgbsvMa24JKbGo%2FkUkCU4Rji%2Be2eQajYkr914JliC1b3UXbADnnZ01krCdqEFICMyAxRhbNKODLQC4%2BTU6LDZyNC1ASneyholkIYZDzbBWHxYww7FtiWkIJ38HE1iQL6mf4ppn4EB3%2BobR9BIg9EjPZkGku1%2B6mxvnqCi2BzcZ1fn2ISYnT3vIb0wacpZknCzMd3N34dldhoUvh00ASw%2Baw5owDzo0xsr%2B9nwT2bdIP8G4xf2unjsj87kdFlWMqWD%2BLYY8qtQNSWtRHHwsHw8xztOcSw5%2Fu%2FMVZ8E%2BXCfAPzCokUB9frovYBe%2BZWOELoxiAS1GtbIWe6ANI%2FdGBXsCX6j5XJFt0eqWcD32NqUm4xQPbtbMjd7xYtwYHg%2BvC3JZRlPtpbpydFXeGp9BwugwxYvDwgY6pgHyrDvDkpkIqj1gz1Ulvw4ZddtaY4sqBlMbdc%2F%2FpzhuSOAsUQrN44mpmHGmwBsySsVFtgjkpEihhrftmktKwcq43IIFzVosD%2F%2FhUBHvGhZ8itnKvUD8Q2nSOY9QIVzWq3%2FtNNcGbji5jkn6opD40TuNdFEUMYoBKFFAo6Cy%2B0K9hp5YcsFXZiIbVuvLeeCjwuDkt7KP1TFzFiXB%2FT4yemk9VhrmRLAv&X-Amz-Signature=ef902a1a7abe479d5303ca74e701c159dbbc1c3a4c1db10dc6e43795da64188d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV6NWRD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2BCVLVzvguZQD3690blJ309XdkcN%2BAek9fBpAI4GYZAiA42icTiHQFNnzMnKBfT7v8jFrkBNjAnTp3alBtmP9qTyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2wsO%2BZJJUXnGtTLuKtwDZmFXZ4fWBH4Cb1biXE7erY7adomSR6I%2FQRbSi4D60GRpgQzMWu7iIqpMjb5YynG6Vem4AORU3ogmpGnPNnCdVmxmlggbfIccdAKM8wJBh7C9ZatPN5Hp0R9J2az3H%2BP5tHfP8TDG020paL4WxyA3xB6FqE8N3RtNAEHiCs1P5z40iPU8P165wmuH42Vs4awxy2Eax7sxAjlfI%2BEsA%2FhCVe1bJFxljwodLAMXJl%2FgbsvMa24JKbGo%2FkUkCU4Rji%2Be2eQajYkr914JliC1b3UXbADnnZ01krCdqEFICMyAxRhbNKODLQC4%2BTU6LDZyNC1ASneyholkIYZDzbBWHxYww7FtiWkIJ38HE1iQL6mf4ppn4EB3%2BobR9BIg9EjPZkGku1%2B6mxvnqCi2BzcZ1fn2ISYnT3vIb0wacpZknCzMd3N34dldhoUvh00ASw%2Baw5owDzo0xsr%2B9nwT2bdIP8G4xf2unjsj87kdFlWMqWD%2BLYY8qtQNSWtRHHwsHw8xztOcSw5%2Fu%2FMVZ8E%2BXCfAPzCokUB9frovYBe%2BZWOELoxiAS1GtbIWe6ANI%2FdGBXsCX6j5XJFt0eqWcD32NqUm4xQPbtbMjd7xYtwYHg%2BvC3JZRlPtpbpydFXeGp9BwugwxYvDwgY6pgHyrDvDkpkIqj1gz1Ulvw4ZddtaY4sqBlMbdc%2F%2FpzhuSOAsUQrN44mpmHGmwBsySsVFtgjkpEihhrftmktKwcq43IIFzVosD%2F%2FhUBHvGhZ8itnKvUD8Q2nSOY9QIVzWq3%2FtNNcGbji5jkn6opD40TuNdFEUMYoBKFFAo6Cy%2B0K9hp5YcsFXZiIbVuvLeeCjwuDkt7KP1TFzFiXB%2FT4yemk9VhrmRLAv&X-Amz-Signature=7b0ea6a3f566b023c9250c4bf54387fe797fb7774cafa4b46487b682c2f4f5a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV6NWRD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2BCVLVzvguZQD3690blJ309XdkcN%2BAek9fBpAI4GYZAiA42icTiHQFNnzMnKBfT7v8jFrkBNjAnTp3alBtmP9qTyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2wsO%2BZJJUXnGtTLuKtwDZmFXZ4fWBH4Cb1biXE7erY7adomSR6I%2FQRbSi4D60GRpgQzMWu7iIqpMjb5YynG6Vem4AORU3ogmpGnPNnCdVmxmlggbfIccdAKM8wJBh7C9ZatPN5Hp0R9J2az3H%2BP5tHfP8TDG020paL4WxyA3xB6FqE8N3RtNAEHiCs1P5z40iPU8P165wmuH42Vs4awxy2Eax7sxAjlfI%2BEsA%2FhCVe1bJFxljwodLAMXJl%2FgbsvMa24JKbGo%2FkUkCU4Rji%2Be2eQajYkr914JliC1b3UXbADnnZ01krCdqEFICMyAxRhbNKODLQC4%2BTU6LDZyNC1ASneyholkIYZDzbBWHxYww7FtiWkIJ38HE1iQL6mf4ppn4EB3%2BobR9BIg9EjPZkGku1%2B6mxvnqCi2BzcZ1fn2ISYnT3vIb0wacpZknCzMd3N34dldhoUvh00ASw%2Baw5owDzo0xsr%2B9nwT2bdIP8G4xf2unjsj87kdFlWMqWD%2BLYY8qtQNSWtRHHwsHw8xztOcSw5%2Fu%2FMVZ8E%2BXCfAPzCokUB9frovYBe%2BZWOELoxiAS1GtbIWe6ANI%2FdGBXsCX6j5XJFt0eqWcD32NqUm4xQPbtbMjd7xYtwYHg%2BvC3JZRlPtpbpydFXeGp9BwugwxYvDwgY6pgHyrDvDkpkIqj1gz1Ulvw4ZddtaY4sqBlMbdc%2F%2FpzhuSOAsUQrN44mpmHGmwBsySsVFtgjkpEihhrftmktKwcq43IIFzVosD%2F%2FhUBHvGhZ8itnKvUD8Q2nSOY9QIVzWq3%2FtNNcGbji5jkn6opD40TuNdFEUMYoBKFFAo6Cy%2B0K9hp5YcsFXZiIbVuvLeeCjwuDkt7KP1TFzFiXB%2FT4yemk9VhrmRLAv&X-Amz-Signature=9519c66570637be6a44c7dcb16217b1405641b4ae64e16fcf7e5225bb0608ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV6NWRD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2BCVLVzvguZQD3690blJ309XdkcN%2BAek9fBpAI4GYZAiA42icTiHQFNnzMnKBfT7v8jFrkBNjAnTp3alBtmP9qTyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2wsO%2BZJJUXnGtTLuKtwDZmFXZ4fWBH4Cb1biXE7erY7adomSR6I%2FQRbSi4D60GRpgQzMWu7iIqpMjb5YynG6Vem4AORU3ogmpGnPNnCdVmxmlggbfIccdAKM8wJBh7C9ZatPN5Hp0R9J2az3H%2BP5tHfP8TDG020paL4WxyA3xB6FqE8N3RtNAEHiCs1P5z40iPU8P165wmuH42Vs4awxy2Eax7sxAjlfI%2BEsA%2FhCVe1bJFxljwodLAMXJl%2FgbsvMa24JKbGo%2FkUkCU4Rji%2Be2eQajYkr914JliC1b3UXbADnnZ01krCdqEFICMyAxRhbNKODLQC4%2BTU6LDZyNC1ASneyholkIYZDzbBWHxYww7FtiWkIJ38HE1iQL6mf4ppn4EB3%2BobR9BIg9EjPZkGku1%2B6mxvnqCi2BzcZ1fn2ISYnT3vIb0wacpZknCzMd3N34dldhoUvh00ASw%2Baw5owDzo0xsr%2B9nwT2bdIP8G4xf2unjsj87kdFlWMqWD%2BLYY8qtQNSWtRHHwsHw8xztOcSw5%2Fu%2FMVZ8E%2BXCfAPzCokUB9frovYBe%2BZWOELoxiAS1GtbIWe6ANI%2FdGBXsCX6j5XJFt0eqWcD32NqUm4xQPbtbMjd7xYtwYHg%2BvC3JZRlPtpbpydFXeGp9BwugwxYvDwgY6pgHyrDvDkpkIqj1gz1Ulvw4ZddtaY4sqBlMbdc%2F%2FpzhuSOAsUQrN44mpmHGmwBsySsVFtgjkpEihhrftmktKwcq43IIFzVosD%2F%2FhUBHvGhZ8itnKvUD8Q2nSOY9QIVzWq3%2FtNNcGbji5jkn6opD40TuNdFEUMYoBKFFAo6Cy%2B0K9hp5YcsFXZiIbVuvLeeCjwuDkt7KP1TFzFiXB%2FT4yemk9VhrmRLAv&X-Amz-Signature=684870a777f7bc32c214ebac0881310c05949b21eb522988c0bbfc0c3b4e6e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV6NWRD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2BCVLVzvguZQD3690blJ309XdkcN%2BAek9fBpAI4GYZAiA42icTiHQFNnzMnKBfT7v8jFrkBNjAnTp3alBtmP9qTyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2wsO%2BZJJUXnGtTLuKtwDZmFXZ4fWBH4Cb1biXE7erY7adomSR6I%2FQRbSi4D60GRpgQzMWu7iIqpMjb5YynG6Vem4AORU3ogmpGnPNnCdVmxmlggbfIccdAKM8wJBh7C9ZatPN5Hp0R9J2az3H%2BP5tHfP8TDG020paL4WxyA3xB6FqE8N3RtNAEHiCs1P5z40iPU8P165wmuH42Vs4awxy2Eax7sxAjlfI%2BEsA%2FhCVe1bJFxljwodLAMXJl%2FgbsvMa24JKbGo%2FkUkCU4Rji%2Be2eQajYkr914JliC1b3UXbADnnZ01krCdqEFICMyAxRhbNKODLQC4%2BTU6LDZyNC1ASneyholkIYZDzbBWHxYww7FtiWkIJ38HE1iQL6mf4ppn4EB3%2BobR9BIg9EjPZkGku1%2B6mxvnqCi2BzcZ1fn2ISYnT3vIb0wacpZknCzMd3N34dldhoUvh00ASw%2Baw5owDzo0xsr%2B9nwT2bdIP8G4xf2unjsj87kdFlWMqWD%2BLYY8qtQNSWtRHHwsHw8xztOcSw5%2Fu%2FMVZ8E%2BXCfAPzCokUB9frovYBe%2BZWOELoxiAS1GtbIWe6ANI%2FdGBXsCX6j5XJFt0eqWcD32NqUm4xQPbtbMjd7xYtwYHg%2BvC3JZRlPtpbpydFXeGp9BwugwxYvDwgY6pgHyrDvDkpkIqj1gz1Ulvw4ZddtaY4sqBlMbdc%2F%2FpzhuSOAsUQrN44mpmHGmwBsySsVFtgjkpEihhrftmktKwcq43IIFzVosD%2F%2FhUBHvGhZ8itnKvUD8Q2nSOY9QIVzWq3%2FtNNcGbji5jkn6opD40TuNdFEUMYoBKFFAo6Cy%2B0K9hp5YcsFXZiIbVuvLeeCjwuDkt7KP1TFzFiXB%2FT4yemk9VhrmRLAv&X-Amz-Signature=64c915a1c3d394b2f34d844a46d92b1227d7632d73acec3df7ed58cafb774721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV6NWRD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2BCVLVzvguZQD3690blJ309XdkcN%2BAek9fBpAI4GYZAiA42icTiHQFNnzMnKBfT7v8jFrkBNjAnTp3alBtmP9qTyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2wsO%2BZJJUXnGtTLuKtwDZmFXZ4fWBH4Cb1biXE7erY7adomSR6I%2FQRbSi4D60GRpgQzMWu7iIqpMjb5YynG6Vem4AORU3ogmpGnPNnCdVmxmlggbfIccdAKM8wJBh7C9ZatPN5Hp0R9J2az3H%2BP5tHfP8TDG020paL4WxyA3xB6FqE8N3RtNAEHiCs1P5z40iPU8P165wmuH42Vs4awxy2Eax7sxAjlfI%2BEsA%2FhCVe1bJFxljwodLAMXJl%2FgbsvMa24JKbGo%2FkUkCU4Rji%2Be2eQajYkr914JliC1b3UXbADnnZ01krCdqEFICMyAxRhbNKODLQC4%2BTU6LDZyNC1ASneyholkIYZDzbBWHxYww7FtiWkIJ38HE1iQL6mf4ppn4EB3%2BobR9BIg9EjPZkGku1%2B6mxvnqCi2BzcZ1fn2ISYnT3vIb0wacpZknCzMd3N34dldhoUvh00ASw%2Baw5owDzo0xsr%2B9nwT2bdIP8G4xf2unjsj87kdFlWMqWD%2BLYY8qtQNSWtRHHwsHw8xztOcSw5%2Fu%2FMVZ8E%2BXCfAPzCokUB9frovYBe%2BZWOELoxiAS1GtbIWe6ANI%2FdGBXsCX6j5XJFt0eqWcD32NqUm4xQPbtbMjd7xYtwYHg%2BvC3JZRlPtpbpydFXeGp9BwugwxYvDwgY6pgHyrDvDkpkIqj1gz1Ulvw4ZddtaY4sqBlMbdc%2F%2FpzhuSOAsUQrN44mpmHGmwBsySsVFtgjkpEihhrftmktKwcq43IIFzVosD%2F%2FhUBHvGhZ8itnKvUD8Q2nSOY9QIVzWq3%2FtNNcGbji5jkn6opD40TuNdFEUMYoBKFFAo6Cy%2B0K9hp5YcsFXZiIbVuvLeeCjwuDkt7KP1TFzFiXB%2FT4yemk9VhrmRLAv&X-Amz-Signature=5af7a6e7e6360fc72dcd31fecb0890778223bc8166ce641411a7c4803c2231ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV6NWRD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2BCVLVzvguZQD3690blJ309XdkcN%2BAek9fBpAI4GYZAiA42icTiHQFNnzMnKBfT7v8jFrkBNjAnTp3alBtmP9qTyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2wsO%2BZJJUXnGtTLuKtwDZmFXZ4fWBH4Cb1biXE7erY7adomSR6I%2FQRbSi4D60GRpgQzMWu7iIqpMjb5YynG6Vem4AORU3ogmpGnPNnCdVmxmlggbfIccdAKM8wJBh7C9ZatPN5Hp0R9J2az3H%2BP5tHfP8TDG020paL4WxyA3xB6FqE8N3RtNAEHiCs1P5z40iPU8P165wmuH42Vs4awxy2Eax7sxAjlfI%2BEsA%2FhCVe1bJFxljwodLAMXJl%2FgbsvMa24JKbGo%2FkUkCU4Rji%2Be2eQajYkr914JliC1b3UXbADnnZ01krCdqEFICMyAxRhbNKODLQC4%2BTU6LDZyNC1ASneyholkIYZDzbBWHxYww7FtiWkIJ38HE1iQL6mf4ppn4EB3%2BobR9BIg9EjPZkGku1%2B6mxvnqCi2BzcZ1fn2ISYnT3vIb0wacpZknCzMd3N34dldhoUvh00ASw%2Baw5owDzo0xsr%2B9nwT2bdIP8G4xf2unjsj87kdFlWMqWD%2BLYY8qtQNSWtRHHwsHw8xztOcSw5%2Fu%2FMVZ8E%2BXCfAPzCokUB9frovYBe%2BZWOELoxiAS1GtbIWe6ANI%2FdGBXsCX6j5XJFt0eqWcD32NqUm4xQPbtbMjd7xYtwYHg%2BvC3JZRlPtpbpydFXeGp9BwugwxYvDwgY6pgHyrDvDkpkIqj1gz1Ulvw4ZddtaY4sqBlMbdc%2F%2FpzhuSOAsUQrN44mpmHGmwBsySsVFtgjkpEihhrftmktKwcq43IIFzVosD%2F%2FhUBHvGhZ8itnKvUD8Q2nSOY9QIVzWq3%2FtNNcGbji5jkn6opD40TuNdFEUMYoBKFFAo6Cy%2B0K9hp5YcsFXZiIbVuvLeeCjwuDkt7KP1TFzFiXB%2FT4yemk9VhrmRLAv&X-Amz-Signature=721aa71132e854ba55cde9cc6f4a81bc61f406680072cb3f0929cc06f92058fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV6NWRD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL%2BCVLVzvguZQD3690blJ309XdkcN%2BAek9fBpAI4GYZAiA42icTiHQFNnzMnKBfT7v8jFrkBNjAnTp3alBtmP9qTyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2wsO%2BZJJUXnGtTLuKtwDZmFXZ4fWBH4Cb1biXE7erY7adomSR6I%2FQRbSi4D60GRpgQzMWu7iIqpMjb5YynG6Vem4AORU3ogmpGnPNnCdVmxmlggbfIccdAKM8wJBh7C9ZatPN5Hp0R9J2az3H%2BP5tHfP8TDG020paL4WxyA3xB6FqE8N3RtNAEHiCs1P5z40iPU8P165wmuH42Vs4awxy2Eax7sxAjlfI%2BEsA%2FhCVe1bJFxljwodLAMXJl%2FgbsvMa24JKbGo%2FkUkCU4Rji%2Be2eQajYkr914JliC1b3UXbADnnZ01krCdqEFICMyAxRhbNKODLQC4%2BTU6LDZyNC1ASneyholkIYZDzbBWHxYww7FtiWkIJ38HE1iQL6mf4ppn4EB3%2BobR9BIg9EjPZkGku1%2B6mxvnqCi2BzcZ1fn2ISYnT3vIb0wacpZknCzMd3N34dldhoUvh00ASw%2Baw5owDzo0xsr%2B9nwT2bdIP8G4xf2unjsj87kdFlWMqWD%2BLYY8qtQNSWtRHHwsHw8xztOcSw5%2Fu%2FMVZ8E%2BXCfAPzCokUB9frovYBe%2BZWOELoxiAS1GtbIWe6ANI%2FdGBXsCX6j5XJFt0eqWcD32NqUm4xQPbtbMjd7xYtwYHg%2BvC3JZRlPtpbpydFXeGp9BwugwxYvDwgY6pgHyrDvDkpkIqj1gz1Ulvw4ZddtaY4sqBlMbdc%2F%2FpzhuSOAsUQrN44mpmHGmwBsySsVFtgjkpEihhrftmktKwcq43IIFzVosD%2F%2FhUBHvGhZ8itnKvUD8Q2nSOY9QIVzWq3%2FtNNcGbji5jkn6opD40TuNdFEUMYoBKFFAo6Cy%2B0K9hp5YcsFXZiIbVuvLeeCjwuDkt7KP1TFzFiXB%2FT4yemk9VhrmRLAv&X-Amz-Signature=c7cce7ccab03b7c22d78a1538071b20bf7cb94a3e11d5aedc71c09eeb80b2e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

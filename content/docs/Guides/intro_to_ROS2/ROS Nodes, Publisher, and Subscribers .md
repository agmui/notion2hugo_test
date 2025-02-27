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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OQQP4U%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDtXxwtfk%2BkN3Lz5985%2Bkn75wOZPEOnCmRfyiohRx7THAIgJmg8MDf3SdLk9YmpkEg22USYgd33qnEqJYPxqjGYN3sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDDXIW29Q%2Fsq1uhzsyrcA2UfpH6lDV9M05w5AN%2Bu3s3PLU3iHopSlaEQRKjRbr1TDiHZ2PCuKWMUiWF0Bue%2F1lN5l%2FR2vHw3oAtS4oclN1ISWQ27iVowLSXyHuIDqGMS0TWuNGi3ReDmkYVs66%2FoXSmCti%2FuhBh3USk3HTaQC6QsX0srWOnfHi%2BYphzKtgYXkM314ClJ91oVNuIMapl%2Bvv9s3PPEmbsf21KO3bG8KjZ1sE%2BvmqxOMAJfg1hakMN7q4hduGfiPgI8ukASYnLXxZeXh2gmXqLvmLPExU04Hr4Bk2nPXUgClaG5XdoZAaEyjDGypsbPylfDtlyfVvIdjAjPwzWYOBAYOAGYNpzR%2B15aGqG8N7%2FW2A231LmnoIXLlAaILD5DDa8z65d%2F2YyHLxzFncOgeNWcvTnxipr3Sh6teiTyI%2F0motg6RmFw7LjBHmVwkNOP8Vfm%2FIdXVWk%2BQ8GRGnYZzt7TGrK8kWjcLQ3SbLtJqtHX9O7q8Sac90sRT4yyLjURZdfrvNjofY04o8bvaeLL4dzfSEacWmvOVLm6Bc7BhWb6XwHFN0faWf3kctBmj7B1wPnxqmTzBngv9S8CYf1w3FybI%2BotcpGyz2gClMDmCtsPcii%2FsgxLxcq0WYJRfbvops7i%2BnAKMNu7g74GOqUBogg5W%2BNreEqNAUJVR%2FggPfOMx8%2BNppD3nSfNLv0DhS76cnwzirJuTEayg0qH3IfK%2BoawE1eugi5IB%2F6OXQ3i1GZ%2BT9DBCsOLp8R46bLfxKNt7w9i5Pt6S2H0hXJjcVn%2BTUdrQWrLMvSegqR6%2BX4VPpld4x4CoGOmpgnc8gW1Y9JP5gwZtFJ4nc8xSd%2Bp3Za4BWfEyKWIzFn3%2BvDtplMXD2zCMTXV&X-Amz-Signature=9ae17ca6fde8bf5a360ea630e90edc6f8367100dac775f05c77c47598ae6c355&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OQQP4U%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDtXxwtfk%2BkN3Lz5985%2Bkn75wOZPEOnCmRfyiohRx7THAIgJmg8MDf3SdLk9YmpkEg22USYgd33qnEqJYPxqjGYN3sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDDXIW29Q%2Fsq1uhzsyrcA2UfpH6lDV9M05w5AN%2Bu3s3PLU3iHopSlaEQRKjRbr1TDiHZ2PCuKWMUiWF0Bue%2F1lN5l%2FR2vHw3oAtS4oclN1ISWQ27iVowLSXyHuIDqGMS0TWuNGi3ReDmkYVs66%2FoXSmCti%2FuhBh3USk3HTaQC6QsX0srWOnfHi%2BYphzKtgYXkM314ClJ91oVNuIMapl%2Bvv9s3PPEmbsf21KO3bG8KjZ1sE%2BvmqxOMAJfg1hakMN7q4hduGfiPgI8ukASYnLXxZeXh2gmXqLvmLPExU04Hr4Bk2nPXUgClaG5XdoZAaEyjDGypsbPylfDtlyfVvIdjAjPwzWYOBAYOAGYNpzR%2B15aGqG8N7%2FW2A231LmnoIXLlAaILD5DDa8z65d%2F2YyHLxzFncOgeNWcvTnxipr3Sh6teiTyI%2F0motg6RmFw7LjBHmVwkNOP8Vfm%2FIdXVWk%2BQ8GRGnYZzt7TGrK8kWjcLQ3SbLtJqtHX9O7q8Sac90sRT4yyLjURZdfrvNjofY04o8bvaeLL4dzfSEacWmvOVLm6Bc7BhWb6XwHFN0faWf3kctBmj7B1wPnxqmTzBngv9S8CYf1w3FybI%2BotcpGyz2gClMDmCtsPcii%2FsgxLxcq0WYJRfbvops7i%2BnAKMNu7g74GOqUBogg5W%2BNreEqNAUJVR%2FggPfOMx8%2BNppD3nSfNLv0DhS76cnwzirJuTEayg0qH3IfK%2BoawE1eugi5IB%2F6OXQ3i1GZ%2BT9DBCsOLp8R46bLfxKNt7w9i5Pt6S2H0hXJjcVn%2BTUdrQWrLMvSegqR6%2BX4VPpld4x4CoGOmpgnc8gW1Y9JP5gwZtFJ4nc8xSd%2Bp3Za4BWfEyKWIzFn3%2BvDtplMXD2zCMTXV&X-Amz-Signature=9171455884869b3717d938a1dbc4d30993706df9db222a3a1d68627df47a3338&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OQQP4U%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDtXxwtfk%2BkN3Lz5985%2Bkn75wOZPEOnCmRfyiohRx7THAIgJmg8MDf3SdLk9YmpkEg22USYgd33qnEqJYPxqjGYN3sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDDXIW29Q%2Fsq1uhzsyrcA2UfpH6lDV9M05w5AN%2Bu3s3PLU3iHopSlaEQRKjRbr1TDiHZ2PCuKWMUiWF0Bue%2F1lN5l%2FR2vHw3oAtS4oclN1ISWQ27iVowLSXyHuIDqGMS0TWuNGi3ReDmkYVs66%2FoXSmCti%2FuhBh3USk3HTaQC6QsX0srWOnfHi%2BYphzKtgYXkM314ClJ91oVNuIMapl%2Bvv9s3PPEmbsf21KO3bG8KjZ1sE%2BvmqxOMAJfg1hakMN7q4hduGfiPgI8ukASYnLXxZeXh2gmXqLvmLPExU04Hr4Bk2nPXUgClaG5XdoZAaEyjDGypsbPylfDtlyfVvIdjAjPwzWYOBAYOAGYNpzR%2B15aGqG8N7%2FW2A231LmnoIXLlAaILD5DDa8z65d%2F2YyHLxzFncOgeNWcvTnxipr3Sh6teiTyI%2F0motg6RmFw7LjBHmVwkNOP8Vfm%2FIdXVWk%2BQ8GRGnYZzt7TGrK8kWjcLQ3SbLtJqtHX9O7q8Sac90sRT4yyLjURZdfrvNjofY04o8bvaeLL4dzfSEacWmvOVLm6Bc7BhWb6XwHFN0faWf3kctBmj7B1wPnxqmTzBngv9S8CYf1w3FybI%2BotcpGyz2gClMDmCtsPcii%2FsgxLxcq0WYJRfbvops7i%2BnAKMNu7g74GOqUBogg5W%2BNreEqNAUJVR%2FggPfOMx8%2BNppD3nSfNLv0DhS76cnwzirJuTEayg0qH3IfK%2BoawE1eugi5IB%2F6OXQ3i1GZ%2BT9DBCsOLp8R46bLfxKNt7w9i5Pt6S2H0hXJjcVn%2BTUdrQWrLMvSegqR6%2BX4VPpld4x4CoGOmpgnc8gW1Y9JP5gwZtFJ4nc8xSd%2Bp3Za4BWfEyKWIzFn3%2BvDtplMXD2zCMTXV&X-Amz-Signature=caf0c66cbc87e1661460ab68855eee90d1d6ef7d015327e2a15b4c51de44520b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OQQP4U%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDtXxwtfk%2BkN3Lz5985%2Bkn75wOZPEOnCmRfyiohRx7THAIgJmg8MDf3SdLk9YmpkEg22USYgd33qnEqJYPxqjGYN3sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDDXIW29Q%2Fsq1uhzsyrcA2UfpH6lDV9M05w5AN%2Bu3s3PLU3iHopSlaEQRKjRbr1TDiHZ2PCuKWMUiWF0Bue%2F1lN5l%2FR2vHw3oAtS4oclN1ISWQ27iVowLSXyHuIDqGMS0TWuNGi3ReDmkYVs66%2FoXSmCti%2FuhBh3USk3HTaQC6QsX0srWOnfHi%2BYphzKtgYXkM314ClJ91oVNuIMapl%2Bvv9s3PPEmbsf21KO3bG8KjZ1sE%2BvmqxOMAJfg1hakMN7q4hduGfiPgI8ukASYnLXxZeXh2gmXqLvmLPExU04Hr4Bk2nPXUgClaG5XdoZAaEyjDGypsbPylfDtlyfVvIdjAjPwzWYOBAYOAGYNpzR%2B15aGqG8N7%2FW2A231LmnoIXLlAaILD5DDa8z65d%2F2YyHLxzFncOgeNWcvTnxipr3Sh6teiTyI%2F0motg6RmFw7LjBHmVwkNOP8Vfm%2FIdXVWk%2BQ8GRGnYZzt7TGrK8kWjcLQ3SbLtJqtHX9O7q8Sac90sRT4yyLjURZdfrvNjofY04o8bvaeLL4dzfSEacWmvOVLm6Bc7BhWb6XwHFN0faWf3kctBmj7B1wPnxqmTzBngv9S8CYf1w3FybI%2BotcpGyz2gClMDmCtsPcii%2FsgxLxcq0WYJRfbvops7i%2BnAKMNu7g74GOqUBogg5W%2BNreEqNAUJVR%2FggPfOMx8%2BNppD3nSfNLv0DhS76cnwzirJuTEayg0qH3IfK%2BoawE1eugi5IB%2F6OXQ3i1GZ%2BT9DBCsOLp8R46bLfxKNt7w9i5Pt6S2H0hXJjcVn%2BTUdrQWrLMvSegqR6%2BX4VPpld4x4CoGOmpgnc8gW1Y9JP5gwZtFJ4nc8xSd%2Bp3Za4BWfEyKWIzFn3%2BvDtplMXD2zCMTXV&X-Amz-Signature=a559bf2db9c9952b3c8912a083cc31d7f6b0bc8811b517ed106c01f159ab4fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OQQP4U%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDtXxwtfk%2BkN3Lz5985%2Bkn75wOZPEOnCmRfyiohRx7THAIgJmg8MDf3SdLk9YmpkEg22USYgd33qnEqJYPxqjGYN3sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDDXIW29Q%2Fsq1uhzsyrcA2UfpH6lDV9M05w5AN%2Bu3s3PLU3iHopSlaEQRKjRbr1TDiHZ2PCuKWMUiWF0Bue%2F1lN5l%2FR2vHw3oAtS4oclN1ISWQ27iVowLSXyHuIDqGMS0TWuNGi3ReDmkYVs66%2FoXSmCti%2FuhBh3USk3HTaQC6QsX0srWOnfHi%2BYphzKtgYXkM314ClJ91oVNuIMapl%2Bvv9s3PPEmbsf21KO3bG8KjZ1sE%2BvmqxOMAJfg1hakMN7q4hduGfiPgI8ukASYnLXxZeXh2gmXqLvmLPExU04Hr4Bk2nPXUgClaG5XdoZAaEyjDGypsbPylfDtlyfVvIdjAjPwzWYOBAYOAGYNpzR%2B15aGqG8N7%2FW2A231LmnoIXLlAaILD5DDa8z65d%2F2YyHLxzFncOgeNWcvTnxipr3Sh6teiTyI%2F0motg6RmFw7LjBHmVwkNOP8Vfm%2FIdXVWk%2BQ8GRGnYZzt7TGrK8kWjcLQ3SbLtJqtHX9O7q8Sac90sRT4yyLjURZdfrvNjofY04o8bvaeLL4dzfSEacWmvOVLm6Bc7BhWb6XwHFN0faWf3kctBmj7B1wPnxqmTzBngv9S8CYf1w3FybI%2BotcpGyz2gClMDmCtsPcii%2FsgxLxcq0WYJRfbvops7i%2BnAKMNu7g74GOqUBogg5W%2BNreEqNAUJVR%2FggPfOMx8%2BNppD3nSfNLv0DhS76cnwzirJuTEayg0qH3IfK%2BoawE1eugi5IB%2F6OXQ3i1GZ%2BT9DBCsOLp8R46bLfxKNt7w9i5Pt6S2H0hXJjcVn%2BTUdrQWrLMvSegqR6%2BX4VPpld4x4CoGOmpgnc8gW1Y9JP5gwZtFJ4nc8xSd%2Bp3Za4BWfEyKWIzFn3%2BvDtplMXD2zCMTXV&X-Amz-Signature=c8e32ab5d7b0d21ea701c5a0c67dca211721e751c9c8a38197ee30584aebe644&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OQQP4U%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDtXxwtfk%2BkN3Lz5985%2Bkn75wOZPEOnCmRfyiohRx7THAIgJmg8MDf3SdLk9YmpkEg22USYgd33qnEqJYPxqjGYN3sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDDXIW29Q%2Fsq1uhzsyrcA2UfpH6lDV9M05w5AN%2Bu3s3PLU3iHopSlaEQRKjRbr1TDiHZ2PCuKWMUiWF0Bue%2F1lN5l%2FR2vHw3oAtS4oclN1ISWQ27iVowLSXyHuIDqGMS0TWuNGi3ReDmkYVs66%2FoXSmCti%2FuhBh3USk3HTaQC6QsX0srWOnfHi%2BYphzKtgYXkM314ClJ91oVNuIMapl%2Bvv9s3PPEmbsf21KO3bG8KjZ1sE%2BvmqxOMAJfg1hakMN7q4hduGfiPgI8ukASYnLXxZeXh2gmXqLvmLPExU04Hr4Bk2nPXUgClaG5XdoZAaEyjDGypsbPylfDtlyfVvIdjAjPwzWYOBAYOAGYNpzR%2B15aGqG8N7%2FW2A231LmnoIXLlAaILD5DDa8z65d%2F2YyHLxzFncOgeNWcvTnxipr3Sh6teiTyI%2F0motg6RmFw7LjBHmVwkNOP8Vfm%2FIdXVWk%2BQ8GRGnYZzt7TGrK8kWjcLQ3SbLtJqtHX9O7q8Sac90sRT4yyLjURZdfrvNjofY04o8bvaeLL4dzfSEacWmvOVLm6Bc7BhWb6XwHFN0faWf3kctBmj7B1wPnxqmTzBngv9S8CYf1w3FybI%2BotcpGyz2gClMDmCtsPcii%2FsgxLxcq0WYJRfbvops7i%2BnAKMNu7g74GOqUBogg5W%2BNreEqNAUJVR%2FggPfOMx8%2BNppD3nSfNLv0DhS76cnwzirJuTEayg0qH3IfK%2BoawE1eugi5IB%2F6OXQ3i1GZ%2BT9DBCsOLp8R46bLfxKNt7w9i5Pt6S2H0hXJjcVn%2BTUdrQWrLMvSegqR6%2BX4VPpld4x4CoGOmpgnc8gW1Y9JP5gwZtFJ4nc8xSd%2Bp3Za4BWfEyKWIzFn3%2BvDtplMXD2zCMTXV&X-Amz-Signature=5ced9968397425ce960a5c19d84c92537503a3a3000c797ba287cb15ff83a463&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OQQP4U%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDtXxwtfk%2BkN3Lz5985%2Bkn75wOZPEOnCmRfyiohRx7THAIgJmg8MDf3SdLk9YmpkEg22USYgd33qnEqJYPxqjGYN3sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDDXIW29Q%2Fsq1uhzsyrcA2UfpH6lDV9M05w5AN%2Bu3s3PLU3iHopSlaEQRKjRbr1TDiHZ2PCuKWMUiWF0Bue%2F1lN5l%2FR2vHw3oAtS4oclN1ISWQ27iVowLSXyHuIDqGMS0TWuNGi3ReDmkYVs66%2FoXSmCti%2FuhBh3USk3HTaQC6QsX0srWOnfHi%2BYphzKtgYXkM314ClJ91oVNuIMapl%2Bvv9s3PPEmbsf21KO3bG8KjZ1sE%2BvmqxOMAJfg1hakMN7q4hduGfiPgI8ukASYnLXxZeXh2gmXqLvmLPExU04Hr4Bk2nPXUgClaG5XdoZAaEyjDGypsbPylfDtlyfVvIdjAjPwzWYOBAYOAGYNpzR%2B15aGqG8N7%2FW2A231LmnoIXLlAaILD5DDa8z65d%2F2YyHLxzFncOgeNWcvTnxipr3Sh6teiTyI%2F0motg6RmFw7LjBHmVwkNOP8Vfm%2FIdXVWk%2BQ8GRGnYZzt7TGrK8kWjcLQ3SbLtJqtHX9O7q8Sac90sRT4yyLjURZdfrvNjofY04o8bvaeLL4dzfSEacWmvOVLm6Bc7BhWb6XwHFN0faWf3kctBmj7B1wPnxqmTzBngv9S8CYf1w3FybI%2BotcpGyz2gClMDmCtsPcii%2FsgxLxcq0WYJRfbvops7i%2BnAKMNu7g74GOqUBogg5W%2BNreEqNAUJVR%2FggPfOMx8%2BNppD3nSfNLv0DhS76cnwzirJuTEayg0qH3IfK%2BoawE1eugi5IB%2F6OXQ3i1GZ%2BT9DBCsOLp8R46bLfxKNt7w9i5Pt6S2H0hXJjcVn%2BTUdrQWrLMvSegqR6%2BX4VPpld4x4CoGOmpgnc8gW1Y9JP5gwZtFJ4nc8xSd%2Bp3Za4BWfEyKWIzFn3%2BvDtplMXD2zCMTXV&X-Amz-Signature=1a688a034a9f3fb4fe4152219d469f446a2cc5bf7e63a865ce7877f643e4e2de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OQQP4U%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDtXxwtfk%2BkN3Lz5985%2Bkn75wOZPEOnCmRfyiohRx7THAIgJmg8MDf3SdLk9YmpkEg22USYgd33qnEqJYPxqjGYN3sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDDXIW29Q%2Fsq1uhzsyrcA2UfpH6lDV9M05w5AN%2Bu3s3PLU3iHopSlaEQRKjRbr1TDiHZ2PCuKWMUiWF0Bue%2F1lN5l%2FR2vHw3oAtS4oclN1ISWQ27iVowLSXyHuIDqGMS0TWuNGi3ReDmkYVs66%2FoXSmCti%2FuhBh3USk3HTaQC6QsX0srWOnfHi%2BYphzKtgYXkM314ClJ91oVNuIMapl%2Bvv9s3PPEmbsf21KO3bG8KjZ1sE%2BvmqxOMAJfg1hakMN7q4hduGfiPgI8ukASYnLXxZeXh2gmXqLvmLPExU04Hr4Bk2nPXUgClaG5XdoZAaEyjDGypsbPylfDtlyfVvIdjAjPwzWYOBAYOAGYNpzR%2B15aGqG8N7%2FW2A231LmnoIXLlAaILD5DDa8z65d%2F2YyHLxzFncOgeNWcvTnxipr3Sh6teiTyI%2F0motg6RmFw7LjBHmVwkNOP8Vfm%2FIdXVWk%2BQ8GRGnYZzt7TGrK8kWjcLQ3SbLtJqtHX9O7q8Sac90sRT4yyLjURZdfrvNjofY04o8bvaeLL4dzfSEacWmvOVLm6Bc7BhWb6XwHFN0faWf3kctBmj7B1wPnxqmTzBngv9S8CYf1w3FybI%2BotcpGyz2gClMDmCtsPcii%2FsgxLxcq0WYJRfbvops7i%2BnAKMNu7g74GOqUBogg5W%2BNreEqNAUJVR%2FggPfOMx8%2BNppD3nSfNLv0DhS76cnwzirJuTEayg0qH3IfK%2BoawE1eugi5IB%2F6OXQ3i1GZ%2BT9DBCsOLp8R46bLfxKNt7w9i5Pt6S2H0hXJjcVn%2BTUdrQWrLMvSegqR6%2BX4VPpld4x4CoGOmpgnc8gW1Y9JP5gwZtFJ4nc8xSd%2Bp3Za4BWfEyKWIzFn3%2BvDtplMXD2zCMTXV&X-Amz-Signature=eff4ac45bd685ab5cae04e2be7a02b3011b4cdb792131b7a93f85b63acde69bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

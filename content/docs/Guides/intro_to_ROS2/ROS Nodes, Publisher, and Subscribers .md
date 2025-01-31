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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVTD72O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOV2nyRsxeZRVfDoHSijs%2FkJ%2B2QpxuOACLixNEb4S5gIhAJ7mcQkqksIpNlVlVSUZ6nNEjy2gx8w9CGgvo3A1dMPQKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybeyf4VKa9oUXFLT8q3AMj6AFbnOg2Ej1Ld%2B4IwkAjF2Pw37XM6fduXRAMB%2BdKXoRsRFAmfWf71Hz%2F4db9yr3WR%2FpgsXIF9av80wGW%2BJpv9Ok9Vcb%2FDHzDbDK3w5KdhEU2OIE4wUalpJIDP58wtoPeXlytWUcnT3wk7D3vp9%2Bb6iRDvV3WgzHnOL%2BHV3yIOgsmH%2FBrZxWB1Qf52FI3fVm7TS4fAAuAcTXaDEMvEgZWYlD61M7%2FYlIFpXvsF3tbF96pPQFu9qGmJIKRij1BVoacWxm3JvBzRR%2FULh41UvyjLABR9wrGqhhmfdxPKcAz15T9sWaUWEwOP0wXoAVTlx%2FAOxFEMv0hLhszj2JRfXj900%2BQmgYz0dbsIHdheScza1d%2FNajFoPo3eqkDyrc0RJ8XniLvCoeWhOb1tbSL9q5V7FRRY11Bz%2BS8X6f7ZNbxx5j7rODTyn3cbv9WgbUD1aaQj8yGgZdGKI7ezhlJ5h%2B8vtnzCJVhC17r1htYfKfyCN8MXsp2yDNOMqkxkz7iwfOlebs9YY1cWtXVgCGYLiWQvOoY20th119QHj29j2WEGcBBOPJ7DYxXy37dKLkV2zbje2FmBP6bQ8mcitI8%2B3mwAAW3GWWSesZmVu9mS6jUkqlG9Zi5PuBicJBxajDEmvC8BjqkAbxMKKT6vAiMXHK8Go9OCgdmjST7%2BzeuFRMTIem0CwuYZ%2BVmJvEWYrvQI4QQYARCy5xDJohrLweVXS%2FX%2Fb0bimzNR1Ww46TJzb7nqCSErTkJEg04wwnLf6LNfVEixliO%2FyoUZd7wtHoI5jluquBFwZDPIJ%2BK%2BHA6qj3bRwm6rshRVmbDWSl0athoSBrVoV22J6D%2BMR324%2Fic30fz9LczL2EHci7U&X-Amz-Signature=aa6108caac1f32ab004a91ec19407d6af91e66d1d52d552be5913a88ba16fa3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVTD72O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOV2nyRsxeZRVfDoHSijs%2FkJ%2B2QpxuOACLixNEb4S5gIhAJ7mcQkqksIpNlVlVSUZ6nNEjy2gx8w9CGgvo3A1dMPQKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybeyf4VKa9oUXFLT8q3AMj6AFbnOg2Ej1Ld%2B4IwkAjF2Pw37XM6fduXRAMB%2BdKXoRsRFAmfWf71Hz%2F4db9yr3WR%2FpgsXIF9av80wGW%2BJpv9Ok9Vcb%2FDHzDbDK3w5KdhEU2OIE4wUalpJIDP58wtoPeXlytWUcnT3wk7D3vp9%2Bb6iRDvV3WgzHnOL%2BHV3yIOgsmH%2FBrZxWB1Qf52FI3fVm7TS4fAAuAcTXaDEMvEgZWYlD61M7%2FYlIFpXvsF3tbF96pPQFu9qGmJIKRij1BVoacWxm3JvBzRR%2FULh41UvyjLABR9wrGqhhmfdxPKcAz15T9sWaUWEwOP0wXoAVTlx%2FAOxFEMv0hLhszj2JRfXj900%2BQmgYz0dbsIHdheScza1d%2FNajFoPo3eqkDyrc0RJ8XniLvCoeWhOb1tbSL9q5V7FRRY11Bz%2BS8X6f7ZNbxx5j7rODTyn3cbv9WgbUD1aaQj8yGgZdGKI7ezhlJ5h%2B8vtnzCJVhC17r1htYfKfyCN8MXsp2yDNOMqkxkz7iwfOlebs9YY1cWtXVgCGYLiWQvOoY20th119QHj29j2WEGcBBOPJ7DYxXy37dKLkV2zbje2FmBP6bQ8mcitI8%2B3mwAAW3GWWSesZmVu9mS6jUkqlG9Zi5PuBicJBxajDEmvC8BjqkAbxMKKT6vAiMXHK8Go9OCgdmjST7%2BzeuFRMTIem0CwuYZ%2BVmJvEWYrvQI4QQYARCy5xDJohrLweVXS%2FX%2Fb0bimzNR1Ww46TJzb7nqCSErTkJEg04wwnLf6LNfVEixliO%2FyoUZd7wtHoI5jluquBFwZDPIJ%2BK%2BHA6qj3bRwm6rshRVmbDWSl0athoSBrVoV22J6D%2BMR324%2Fic30fz9LczL2EHci7U&X-Amz-Signature=ec1a1e8727cc5c058b9e118f45b77fa1f4acf1edad076f385b19aed52f011650&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVTD72O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOV2nyRsxeZRVfDoHSijs%2FkJ%2B2QpxuOACLixNEb4S5gIhAJ7mcQkqksIpNlVlVSUZ6nNEjy2gx8w9CGgvo3A1dMPQKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybeyf4VKa9oUXFLT8q3AMj6AFbnOg2Ej1Ld%2B4IwkAjF2Pw37XM6fduXRAMB%2BdKXoRsRFAmfWf71Hz%2F4db9yr3WR%2FpgsXIF9av80wGW%2BJpv9Ok9Vcb%2FDHzDbDK3w5KdhEU2OIE4wUalpJIDP58wtoPeXlytWUcnT3wk7D3vp9%2Bb6iRDvV3WgzHnOL%2BHV3yIOgsmH%2FBrZxWB1Qf52FI3fVm7TS4fAAuAcTXaDEMvEgZWYlD61M7%2FYlIFpXvsF3tbF96pPQFu9qGmJIKRij1BVoacWxm3JvBzRR%2FULh41UvyjLABR9wrGqhhmfdxPKcAz15T9sWaUWEwOP0wXoAVTlx%2FAOxFEMv0hLhszj2JRfXj900%2BQmgYz0dbsIHdheScza1d%2FNajFoPo3eqkDyrc0RJ8XniLvCoeWhOb1tbSL9q5V7FRRY11Bz%2BS8X6f7ZNbxx5j7rODTyn3cbv9WgbUD1aaQj8yGgZdGKI7ezhlJ5h%2B8vtnzCJVhC17r1htYfKfyCN8MXsp2yDNOMqkxkz7iwfOlebs9YY1cWtXVgCGYLiWQvOoY20th119QHj29j2WEGcBBOPJ7DYxXy37dKLkV2zbje2FmBP6bQ8mcitI8%2B3mwAAW3GWWSesZmVu9mS6jUkqlG9Zi5PuBicJBxajDEmvC8BjqkAbxMKKT6vAiMXHK8Go9OCgdmjST7%2BzeuFRMTIem0CwuYZ%2BVmJvEWYrvQI4QQYARCy5xDJohrLweVXS%2FX%2Fb0bimzNR1Ww46TJzb7nqCSErTkJEg04wwnLf6LNfVEixliO%2FyoUZd7wtHoI5jluquBFwZDPIJ%2BK%2BHA6qj3bRwm6rshRVmbDWSl0athoSBrVoV22J6D%2BMR324%2Fic30fz9LczL2EHci7U&X-Amz-Signature=69e154f30642421031213ab10dc1c8e8de4190b431a6f5b4a8cc33934fb71fec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVTD72O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOV2nyRsxeZRVfDoHSijs%2FkJ%2B2QpxuOACLixNEb4S5gIhAJ7mcQkqksIpNlVlVSUZ6nNEjy2gx8w9CGgvo3A1dMPQKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybeyf4VKa9oUXFLT8q3AMj6AFbnOg2Ej1Ld%2B4IwkAjF2Pw37XM6fduXRAMB%2BdKXoRsRFAmfWf71Hz%2F4db9yr3WR%2FpgsXIF9av80wGW%2BJpv9Ok9Vcb%2FDHzDbDK3w5KdhEU2OIE4wUalpJIDP58wtoPeXlytWUcnT3wk7D3vp9%2Bb6iRDvV3WgzHnOL%2BHV3yIOgsmH%2FBrZxWB1Qf52FI3fVm7TS4fAAuAcTXaDEMvEgZWYlD61M7%2FYlIFpXvsF3tbF96pPQFu9qGmJIKRij1BVoacWxm3JvBzRR%2FULh41UvyjLABR9wrGqhhmfdxPKcAz15T9sWaUWEwOP0wXoAVTlx%2FAOxFEMv0hLhszj2JRfXj900%2BQmgYz0dbsIHdheScza1d%2FNajFoPo3eqkDyrc0RJ8XniLvCoeWhOb1tbSL9q5V7FRRY11Bz%2BS8X6f7ZNbxx5j7rODTyn3cbv9WgbUD1aaQj8yGgZdGKI7ezhlJ5h%2B8vtnzCJVhC17r1htYfKfyCN8MXsp2yDNOMqkxkz7iwfOlebs9YY1cWtXVgCGYLiWQvOoY20th119QHj29j2WEGcBBOPJ7DYxXy37dKLkV2zbje2FmBP6bQ8mcitI8%2B3mwAAW3GWWSesZmVu9mS6jUkqlG9Zi5PuBicJBxajDEmvC8BjqkAbxMKKT6vAiMXHK8Go9OCgdmjST7%2BzeuFRMTIem0CwuYZ%2BVmJvEWYrvQI4QQYARCy5xDJohrLweVXS%2FX%2Fb0bimzNR1Ww46TJzb7nqCSErTkJEg04wwnLf6LNfVEixliO%2FyoUZd7wtHoI5jluquBFwZDPIJ%2BK%2BHA6qj3bRwm6rshRVmbDWSl0athoSBrVoV22J6D%2BMR324%2Fic30fz9LczL2EHci7U&X-Amz-Signature=f36cd67d04ac4fcefbe6ae371e85331880a0ce3b5ce22b7dda7165767490cf9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVTD72O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOV2nyRsxeZRVfDoHSijs%2FkJ%2B2QpxuOACLixNEb4S5gIhAJ7mcQkqksIpNlVlVSUZ6nNEjy2gx8w9CGgvo3A1dMPQKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybeyf4VKa9oUXFLT8q3AMj6AFbnOg2Ej1Ld%2B4IwkAjF2Pw37XM6fduXRAMB%2BdKXoRsRFAmfWf71Hz%2F4db9yr3WR%2FpgsXIF9av80wGW%2BJpv9Ok9Vcb%2FDHzDbDK3w5KdhEU2OIE4wUalpJIDP58wtoPeXlytWUcnT3wk7D3vp9%2Bb6iRDvV3WgzHnOL%2BHV3yIOgsmH%2FBrZxWB1Qf52FI3fVm7TS4fAAuAcTXaDEMvEgZWYlD61M7%2FYlIFpXvsF3tbF96pPQFu9qGmJIKRij1BVoacWxm3JvBzRR%2FULh41UvyjLABR9wrGqhhmfdxPKcAz15T9sWaUWEwOP0wXoAVTlx%2FAOxFEMv0hLhszj2JRfXj900%2BQmgYz0dbsIHdheScza1d%2FNajFoPo3eqkDyrc0RJ8XniLvCoeWhOb1tbSL9q5V7FRRY11Bz%2BS8X6f7ZNbxx5j7rODTyn3cbv9WgbUD1aaQj8yGgZdGKI7ezhlJ5h%2B8vtnzCJVhC17r1htYfKfyCN8MXsp2yDNOMqkxkz7iwfOlebs9YY1cWtXVgCGYLiWQvOoY20th119QHj29j2WEGcBBOPJ7DYxXy37dKLkV2zbje2FmBP6bQ8mcitI8%2B3mwAAW3GWWSesZmVu9mS6jUkqlG9Zi5PuBicJBxajDEmvC8BjqkAbxMKKT6vAiMXHK8Go9OCgdmjST7%2BzeuFRMTIem0CwuYZ%2BVmJvEWYrvQI4QQYARCy5xDJohrLweVXS%2FX%2Fb0bimzNR1Ww46TJzb7nqCSErTkJEg04wwnLf6LNfVEixliO%2FyoUZd7wtHoI5jluquBFwZDPIJ%2BK%2BHA6qj3bRwm6rshRVmbDWSl0athoSBrVoV22J6D%2BMR324%2Fic30fz9LczL2EHci7U&X-Amz-Signature=e2ceb19e1c9ff869f55520977e95db9e0c6e5b6d59030f2c8c6bb0fb324b92a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVTD72O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOV2nyRsxeZRVfDoHSijs%2FkJ%2B2QpxuOACLixNEb4S5gIhAJ7mcQkqksIpNlVlVSUZ6nNEjy2gx8w9CGgvo3A1dMPQKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybeyf4VKa9oUXFLT8q3AMj6AFbnOg2Ej1Ld%2B4IwkAjF2Pw37XM6fduXRAMB%2BdKXoRsRFAmfWf71Hz%2F4db9yr3WR%2FpgsXIF9av80wGW%2BJpv9Ok9Vcb%2FDHzDbDK3w5KdhEU2OIE4wUalpJIDP58wtoPeXlytWUcnT3wk7D3vp9%2Bb6iRDvV3WgzHnOL%2BHV3yIOgsmH%2FBrZxWB1Qf52FI3fVm7TS4fAAuAcTXaDEMvEgZWYlD61M7%2FYlIFpXvsF3tbF96pPQFu9qGmJIKRij1BVoacWxm3JvBzRR%2FULh41UvyjLABR9wrGqhhmfdxPKcAz15T9sWaUWEwOP0wXoAVTlx%2FAOxFEMv0hLhszj2JRfXj900%2BQmgYz0dbsIHdheScza1d%2FNajFoPo3eqkDyrc0RJ8XniLvCoeWhOb1tbSL9q5V7FRRY11Bz%2BS8X6f7ZNbxx5j7rODTyn3cbv9WgbUD1aaQj8yGgZdGKI7ezhlJ5h%2B8vtnzCJVhC17r1htYfKfyCN8MXsp2yDNOMqkxkz7iwfOlebs9YY1cWtXVgCGYLiWQvOoY20th119QHj29j2WEGcBBOPJ7DYxXy37dKLkV2zbje2FmBP6bQ8mcitI8%2B3mwAAW3GWWSesZmVu9mS6jUkqlG9Zi5PuBicJBxajDEmvC8BjqkAbxMKKT6vAiMXHK8Go9OCgdmjST7%2BzeuFRMTIem0CwuYZ%2BVmJvEWYrvQI4QQYARCy5xDJohrLweVXS%2FX%2Fb0bimzNR1Ww46TJzb7nqCSErTkJEg04wwnLf6LNfVEixliO%2FyoUZd7wtHoI5jluquBFwZDPIJ%2BK%2BHA6qj3bRwm6rshRVmbDWSl0athoSBrVoV22J6D%2BMR324%2Fic30fz9LczL2EHci7U&X-Amz-Signature=1f38faaabc5018b01cc8fb4cb9451967e562557e112b99c43bcf7ed21c9092ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVTD72O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOV2nyRsxeZRVfDoHSijs%2FkJ%2B2QpxuOACLixNEb4S5gIhAJ7mcQkqksIpNlVlVSUZ6nNEjy2gx8w9CGgvo3A1dMPQKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybeyf4VKa9oUXFLT8q3AMj6AFbnOg2Ej1Ld%2B4IwkAjF2Pw37XM6fduXRAMB%2BdKXoRsRFAmfWf71Hz%2F4db9yr3WR%2FpgsXIF9av80wGW%2BJpv9Ok9Vcb%2FDHzDbDK3w5KdhEU2OIE4wUalpJIDP58wtoPeXlytWUcnT3wk7D3vp9%2Bb6iRDvV3WgzHnOL%2BHV3yIOgsmH%2FBrZxWB1Qf52FI3fVm7TS4fAAuAcTXaDEMvEgZWYlD61M7%2FYlIFpXvsF3tbF96pPQFu9qGmJIKRij1BVoacWxm3JvBzRR%2FULh41UvyjLABR9wrGqhhmfdxPKcAz15T9sWaUWEwOP0wXoAVTlx%2FAOxFEMv0hLhszj2JRfXj900%2BQmgYz0dbsIHdheScza1d%2FNajFoPo3eqkDyrc0RJ8XniLvCoeWhOb1tbSL9q5V7FRRY11Bz%2BS8X6f7ZNbxx5j7rODTyn3cbv9WgbUD1aaQj8yGgZdGKI7ezhlJ5h%2B8vtnzCJVhC17r1htYfKfyCN8MXsp2yDNOMqkxkz7iwfOlebs9YY1cWtXVgCGYLiWQvOoY20th119QHj29j2WEGcBBOPJ7DYxXy37dKLkV2zbje2FmBP6bQ8mcitI8%2B3mwAAW3GWWSesZmVu9mS6jUkqlG9Zi5PuBicJBxajDEmvC8BjqkAbxMKKT6vAiMXHK8Go9OCgdmjST7%2BzeuFRMTIem0CwuYZ%2BVmJvEWYrvQI4QQYARCy5xDJohrLweVXS%2FX%2Fb0bimzNR1Ww46TJzb7nqCSErTkJEg04wwnLf6LNfVEixliO%2FyoUZd7wtHoI5jluquBFwZDPIJ%2BK%2BHA6qj3bRwm6rshRVmbDWSl0athoSBrVoV22J6D%2BMR324%2Fic30fz9LczL2EHci7U&X-Amz-Signature=7c2c77de43ffc1b5b6b0d74b4dfb01ca65708b74e5d39320755ffaab64397842&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVTD72O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnOV2nyRsxeZRVfDoHSijs%2FkJ%2B2QpxuOACLixNEb4S5gIhAJ7mcQkqksIpNlVlVSUZ6nNEjy2gx8w9CGgvo3A1dMPQKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybeyf4VKa9oUXFLT8q3AMj6AFbnOg2Ej1Ld%2B4IwkAjF2Pw37XM6fduXRAMB%2BdKXoRsRFAmfWf71Hz%2F4db9yr3WR%2FpgsXIF9av80wGW%2BJpv9Ok9Vcb%2FDHzDbDK3w5KdhEU2OIE4wUalpJIDP58wtoPeXlytWUcnT3wk7D3vp9%2Bb6iRDvV3WgzHnOL%2BHV3yIOgsmH%2FBrZxWB1Qf52FI3fVm7TS4fAAuAcTXaDEMvEgZWYlD61M7%2FYlIFpXvsF3tbF96pPQFu9qGmJIKRij1BVoacWxm3JvBzRR%2FULh41UvyjLABR9wrGqhhmfdxPKcAz15T9sWaUWEwOP0wXoAVTlx%2FAOxFEMv0hLhszj2JRfXj900%2BQmgYz0dbsIHdheScza1d%2FNajFoPo3eqkDyrc0RJ8XniLvCoeWhOb1tbSL9q5V7FRRY11Bz%2BS8X6f7ZNbxx5j7rODTyn3cbv9WgbUD1aaQj8yGgZdGKI7ezhlJ5h%2B8vtnzCJVhC17r1htYfKfyCN8MXsp2yDNOMqkxkz7iwfOlebs9YY1cWtXVgCGYLiWQvOoY20th119QHj29j2WEGcBBOPJ7DYxXy37dKLkV2zbje2FmBP6bQ8mcitI8%2B3mwAAW3GWWSesZmVu9mS6jUkqlG9Zi5PuBicJBxajDEmvC8BjqkAbxMKKT6vAiMXHK8Go9OCgdmjST7%2BzeuFRMTIem0CwuYZ%2BVmJvEWYrvQI4QQYARCy5xDJohrLweVXS%2FX%2Fb0bimzNR1Ww46TJzb7nqCSErTkJEg04wwnLf6LNfVEixliO%2FyoUZd7wtHoI5jluquBFwZDPIJ%2BK%2BHA6qj3bRwm6rshRVmbDWSl0athoSBrVoV22J6D%2BMR324%2Fic30fz9LczL2EHci7U&X-Amz-Signature=c6dd1489596e04af40f852a4afaeb7ef52eb53bbd3be4bc110774c05b2c92c02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

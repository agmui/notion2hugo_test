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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEKVJU7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMlz3hz5QHOiN%2FTTLaVmOdy3dLkiJW2d%2FsojKWdrvt%2BAiASHtYpqNASMttnhtpjyCzdYYKABZb8mxKS96jooLpIGCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggzNaEdZbGNbHeqGKtwD88ACRLVMcP1f6di1HqKSQ84TtSKBv3aL%2BjhFjV%2Bj9tD6DROilene89WhXVRGSSLeHbjNLBPJ9STXfMlO8gUIHx5sB5oZWcSGM2kqPxpq7HTFLhhJOI2UgLKnkU6NAgPvsreul6vUETGjCEYTg%2Fc6vbHEui6wRV5FLfI%2BbrrGir7BbGfcYWSkp9rr1eXKWqkdallo9VIc3jIEI0dvWpWUdAK5L%2F8gMImSb6E7a%2FhDIXRMyXxsDBudWJj%2B7TlS0D4vJFK0gHy3iw01B5Dukvfio9Mhd%2B6cbb8BCgRKWsSN%2FAJBG19Ikm%2BtyUPw7ruobHf36NFZFwpcwGzbkKBnOxevrlfv26ZG52knKtNXYbleOcruwL8jPoKkb9ZDipTmWGEl9%2BBdH0lDUs7ITrXxoCEKf%2BKU23wXOefmBtJ5Ap3L8Mu41jsceTbt1kpqB8HvI0WrdQNYv5K5S2EaWUTXmCG3uF80perlazsPLb5iYhKUqX5Yg66JaG8E8m8OyXSYX%2BqTitXY%2Fdjo9SgVDT2ohBWqL1fLselO3pAJ3%2FLWOJYgjKfMPe5n%2B06liaTGMSUHgtWHkzSzjjhXPBNqZVKXpEYtEu3ySm0mZ2GL92T%2B0o1xVt5sI0zfdtvE8Va0RBAw4MbnvQY6pgEJkYZz1tEd3XDK%2FeoTALGR6jtcueKiGOpJwoAdy6OWPx6kozpQnWSwUl0ui1htN2KiBa7%2Ffh7qgedynfPrOXQ6qZtIvShsJrdSXJh1JrRaBhEmKBO40mfgLlVZrywyjyE9cg1vzegbR4QohCLIGcq%2FSSDLH7oZywubWN4ipisgZm6fhDE9b2Afa4psdrE3fJo7EE%2B1UomDe1WG03fWjJUgBPdLX5im&X-Amz-Signature=fa024731c7d6335f8fa748ff5b4f47324555c92eadcbd91dd4eefeca30c90b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEKVJU7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMlz3hz5QHOiN%2FTTLaVmOdy3dLkiJW2d%2FsojKWdrvt%2BAiASHtYpqNASMttnhtpjyCzdYYKABZb8mxKS96jooLpIGCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggzNaEdZbGNbHeqGKtwD88ACRLVMcP1f6di1HqKSQ84TtSKBv3aL%2BjhFjV%2Bj9tD6DROilene89WhXVRGSSLeHbjNLBPJ9STXfMlO8gUIHx5sB5oZWcSGM2kqPxpq7HTFLhhJOI2UgLKnkU6NAgPvsreul6vUETGjCEYTg%2Fc6vbHEui6wRV5FLfI%2BbrrGir7BbGfcYWSkp9rr1eXKWqkdallo9VIc3jIEI0dvWpWUdAK5L%2F8gMImSb6E7a%2FhDIXRMyXxsDBudWJj%2B7TlS0D4vJFK0gHy3iw01B5Dukvfio9Mhd%2B6cbb8BCgRKWsSN%2FAJBG19Ikm%2BtyUPw7ruobHf36NFZFwpcwGzbkKBnOxevrlfv26ZG52knKtNXYbleOcruwL8jPoKkb9ZDipTmWGEl9%2BBdH0lDUs7ITrXxoCEKf%2BKU23wXOefmBtJ5Ap3L8Mu41jsceTbt1kpqB8HvI0WrdQNYv5K5S2EaWUTXmCG3uF80perlazsPLb5iYhKUqX5Yg66JaG8E8m8OyXSYX%2BqTitXY%2Fdjo9SgVDT2ohBWqL1fLselO3pAJ3%2FLWOJYgjKfMPe5n%2B06liaTGMSUHgtWHkzSzjjhXPBNqZVKXpEYtEu3ySm0mZ2GL92T%2B0o1xVt5sI0zfdtvE8Va0RBAw4MbnvQY6pgEJkYZz1tEd3XDK%2FeoTALGR6jtcueKiGOpJwoAdy6OWPx6kozpQnWSwUl0ui1htN2KiBa7%2Ffh7qgedynfPrOXQ6qZtIvShsJrdSXJh1JrRaBhEmKBO40mfgLlVZrywyjyE9cg1vzegbR4QohCLIGcq%2FSSDLH7oZywubWN4ipisgZm6fhDE9b2Afa4psdrE3fJo7EE%2B1UomDe1WG03fWjJUgBPdLX5im&X-Amz-Signature=930cd7a7ca05aadbeac3094980d246146353a484e69691d5ea7e81728d21598d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEKVJU7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMlz3hz5QHOiN%2FTTLaVmOdy3dLkiJW2d%2FsojKWdrvt%2BAiASHtYpqNASMttnhtpjyCzdYYKABZb8mxKS96jooLpIGCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggzNaEdZbGNbHeqGKtwD88ACRLVMcP1f6di1HqKSQ84TtSKBv3aL%2BjhFjV%2Bj9tD6DROilene89WhXVRGSSLeHbjNLBPJ9STXfMlO8gUIHx5sB5oZWcSGM2kqPxpq7HTFLhhJOI2UgLKnkU6NAgPvsreul6vUETGjCEYTg%2Fc6vbHEui6wRV5FLfI%2BbrrGir7BbGfcYWSkp9rr1eXKWqkdallo9VIc3jIEI0dvWpWUdAK5L%2F8gMImSb6E7a%2FhDIXRMyXxsDBudWJj%2B7TlS0D4vJFK0gHy3iw01B5Dukvfio9Mhd%2B6cbb8BCgRKWsSN%2FAJBG19Ikm%2BtyUPw7ruobHf36NFZFwpcwGzbkKBnOxevrlfv26ZG52knKtNXYbleOcruwL8jPoKkb9ZDipTmWGEl9%2BBdH0lDUs7ITrXxoCEKf%2BKU23wXOefmBtJ5Ap3L8Mu41jsceTbt1kpqB8HvI0WrdQNYv5K5S2EaWUTXmCG3uF80perlazsPLb5iYhKUqX5Yg66JaG8E8m8OyXSYX%2BqTitXY%2Fdjo9SgVDT2ohBWqL1fLselO3pAJ3%2FLWOJYgjKfMPe5n%2B06liaTGMSUHgtWHkzSzjjhXPBNqZVKXpEYtEu3ySm0mZ2GL92T%2B0o1xVt5sI0zfdtvE8Va0RBAw4MbnvQY6pgEJkYZz1tEd3XDK%2FeoTALGR6jtcueKiGOpJwoAdy6OWPx6kozpQnWSwUl0ui1htN2KiBa7%2Ffh7qgedynfPrOXQ6qZtIvShsJrdSXJh1JrRaBhEmKBO40mfgLlVZrywyjyE9cg1vzegbR4QohCLIGcq%2FSSDLH7oZywubWN4ipisgZm6fhDE9b2Afa4psdrE3fJo7EE%2B1UomDe1WG03fWjJUgBPdLX5im&X-Amz-Signature=cb8db617caa71cfb991a819bfb9534743d96487430778e6d83234f6313ab0662&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEKVJU7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMlz3hz5QHOiN%2FTTLaVmOdy3dLkiJW2d%2FsojKWdrvt%2BAiASHtYpqNASMttnhtpjyCzdYYKABZb8mxKS96jooLpIGCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggzNaEdZbGNbHeqGKtwD88ACRLVMcP1f6di1HqKSQ84TtSKBv3aL%2BjhFjV%2Bj9tD6DROilene89WhXVRGSSLeHbjNLBPJ9STXfMlO8gUIHx5sB5oZWcSGM2kqPxpq7HTFLhhJOI2UgLKnkU6NAgPvsreul6vUETGjCEYTg%2Fc6vbHEui6wRV5FLfI%2BbrrGir7BbGfcYWSkp9rr1eXKWqkdallo9VIc3jIEI0dvWpWUdAK5L%2F8gMImSb6E7a%2FhDIXRMyXxsDBudWJj%2B7TlS0D4vJFK0gHy3iw01B5Dukvfio9Mhd%2B6cbb8BCgRKWsSN%2FAJBG19Ikm%2BtyUPw7ruobHf36NFZFwpcwGzbkKBnOxevrlfv26ZG52knKtNXYbleOcruwL8jPoKkb9ZDipTmWGEl9%2BBdH0lDUs7ITrXxoCEKf%2BKU23wXOefmBtJ5Ap3L8Mu41jsceTbt1kpqB8HvI0WrdQNYv5K5S2EaWUTXmCG3uF80perlazsPLb5iYhKUqX5Yg66JaG8E8m8OyXSYX%2BqTitXY%2Fdjo9SgVDT2ohBWqL1fLselO3pAJ3%2FLWOJYgjKfMPe5n%2B06liaTGMSUHgtWHkzSzjjhXPBNqZVKXpEYtEu3ySm0mZ2GL92T%2B0o1xVt5sI0zfdtvE8Va0RBAw4MbnvQY6pgEJkYZz1tEd3XDK%2FeoTALGR6jtcueKiGOpJwoAdy6OWPx6kozpQnWSwUl0ui1htN2KiBa7%2Ffh7qgedynfPrOXQ6qZtIvShsJrdSXJh1JrRaBhEmKBO40mfgLlVZrywyjyE9cg1vzegbR4QohCLIGcq%2FSSDLH7oZywubWN4ipisgZm6fhDE9b2Afa4psdrE3fJo7EE%2B1UomDe1WG03fWjJUgBPdLX5im&X-Amz-Signature=0fbe4d49888e78a81aee169723cc31fca432eb01685878db6f373a229756720d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEKVJU7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMlz3hz5QHOiN%2FTTLaVmOdy3dLkiJW2d%2FsojKWdrvt%2BAiASHtYpqNASMttnhtpjyCzdYYKABZb8mxKS96jooLpIGCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggzNaEdZbGNbHeqGKtwD88ACRLVMcP1f6di1HqKSQ84TtSKBv3aL%2BjhFjV%2Bj9tD6DROilene89WhXVRGSSLeHbjNLBPJ9STXfMlO8gUIHx5sB5oZWcSGM2kqPxpq7HTFLhhJOI2UgLKnkU6NAgPvsreul6vUETGjCEYTg%2Fc6vbHEui6wRV5FLfI%2BbrrGir7BbGfcYWSkp9rr1eXKWqkdallo9VIc3jIEI0dvWpWUdAK5L%2F8gMImSb6E7a%2FhDIXRMyXxsDBudWJj%2B7TlS0D4vJFK0gHy3iw01B5Dukvfio9Mhd%2B6cbb8BCgRKWsSN%2FAJBG19Ikm%2BtyUPw7ruobHf36NFZFwpcwGzbkKBnOxevrlfv26ZG52knKtNXYbleOcruwL8jPoKkb9ZDipTmWGEl9%2BBdH0lDUs7ITrXxoCEKf%2BKU23wXOefmBtJ5Ap3L8Mu41jsceTbt1kpqB8HvI0WrdQNYv5K5S2EaWUTXmCG3uF80perlazsPLb5iYhKUqX5Yg66JaG8E8m8OyXSYX%2BqTitXY%2Fdjo9SgVDT2ohBWqL1fLselO3pAJ3%2FLWOJYgjKfMPe5n%2B06liaTGMSUHgtWHkzSzjjhXPBNqZVKXpEYtEu3ySm0mZ2GL92T%2B0o1xVt5sI0zfdtvE8Va0RBAw4MbnvQY6pgEJkYZz1tEd3XDK%2FeoTALGR6jtcueKiGOpJwoAdy6OWPx6kozpQnWSwUl0ui1htN2KiBa7%2Ffh7qgedynfPrOXQ6qZtIvShsJrdSXJh1JrRaBhEmKBO40mfgLlVZrywyjyE9cg1vzegbR4QohCLIGcq%2FSSDLH7oZywubWN4ipisgZm6fhDE9b2Afa4psdrE3fJo7EE%2B1UomDe1WG03fWjJUgBPdLX5im&X-Amz-Signature=0c9c22695b1eb4ee03744b753152b0c5e9489edb6689b78749a16fea323bc8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEKVJU7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMlz3hz5QHOiN%2FTTLaVmOdy3dLkiJW2d%2FsojKWdrvt%2BAiASHtYpqNASMttnhtpjyCzdYYKABZb8mxKS96jooLpIGCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggzNaEdZbGNbHeqGKtwD88ACRLVMcP1f6di1HqKSQ84TtSKBv3aL%2BjhFjV%2Bj9tD6DROilene89WhXVRGSSLeHbjNLBPJ9STXfMlO8gUIHx5sB5oZWcSGM2kqPxpq7HTFLhhJOI2UgLKnkU6NAgPvsreul6vUETGjCEYTg%2Fc6vbHEui6wRV5FLfI%2BbrrGir7BbGfcYWSkp9rr1eXKWqkdallo9VIc3jIEI0dvWpWUdAK5L%2F8gMImSb6E7a%2FhDIXRMyXxsDBudWJj%2B7TlS0D4vJFK0gHy3iw01B5Dukvfio9Mhd%2B6cbb8BCgRKWsSN%2FAJBG19Ikm%2BtyUPw7ruobHf36NFZFwpcwGzbkKBnOxevrlfv26ZG52knKtNXYbleOcruwL8jPoKkb9ZDipTmWGEl9%2BBdH0lDUs7ITrXxoCEKf%2BKU23wXOefmBtJ5Ap3L8Mu41jsceTbt1kpqB8HvI0WrdQNYv5K5S2EaWUTXmCG3uF80perlazsPLb5iYhKUqX5Yg66JaG8E8m8OyXSYX%2BqTitXY%2Fdjo9SgVDT2ohBWqL1fLselO3pAJ3%2FLWOJYgjKfMPe5n%2B06liaTGMSUHgtWHkzSzjjhXPBNqZVKXpEYtEu3ySm0mZ2GL92T%2B0o1xVt5sI0zfdtvE8Va0RBAw4MbnvQY6pgEJkYZz1tEd3XDK%2FeoTALGR6jtcueKiGOpJwoAdy6OWPx6kozpQnWSwUl0ui1htN2KiBa7%2Ffh7qgedynfPrOXQ6qZtIvShsJrdSXJh1JrRaBhEmKBO40mfgLlVZrywyjyE9cg1vzegbR4QohCLIGcq%2FSSDLH7oZywubWN4ipisgZm6fhDE9b2Afa4psdrE3fJo7EE%2B1UomDe1WG03fWjJUgBPdLX5im&X-Amz-Signature=a89e03790a923ceceb76d3d9a766f934b083eabcd69c9546359bca2a452d3c22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEKVJU7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMlz3hz5QHOiN%2FTTLaVmOdy3dLkiJW2d%2FsojKWdrvt%2BAiASHtYpqNASMttnhtpjyCzdYYKABZb8mxKS96jooLpIGCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggzNaEdZbGNbHeqGKtwD88ACRLVMcP1f6di1HqKSQ84TtSKBv3aL%2BjhFjV%2Bj9tD6DROilene89WhXVRGSSLeHbjNLBPJ9STXfMlO8gUIHx5sB5oZWcSGM2kqPxpq7HTFLhhJOI2UgLKnkU6NAgPvsreul6vUETGjCEYTg%2Fc6vbHEui6wRV5FLfI%2BbrrGir7BbGfcYWSkp9rr1eXKWqkdallo9VIc3jIEI0dvWpWUdAK5L%2F8gMImSb6E7a%2FhDIXRMyXxsDBudWJj%2B7TlS0D4vJFK0gHy3iw01B5Dukvfio9Mhd%2B6cbb8BCgRKWsSN%2FAJBG19Ikm%2BtyUPw7ruobHf36NFZFwpcwGzbkKBnOxevrlfv26ZG52knKtNXYbleOcruwL8jPoKkb9ZDipTmWGEl9%2BBdH0lDUs7ITrXxoCEKf%2BKU23wXOefmBtJ5Ap3L8Mu41jsceTbt1kpqB8HvI0WrdQNYv5K5S2EaWUTXmCG3uF80perlazsPLb5iYhKUqX5Yg66JaG8E8m8OyXSYX%2BqTitXY%2Fdjo9SgVDT2ohBWqL1fLselO3pAJ3%2FLWOJYgjKfMPe5n%2B06liaTGMSUHgtWHkzSzjjhXPBNqZVKXpEYtEu3ySm0mZ2GL92T%2B0o1xVt5sI0zfdtvE8Va0RBAw4MbnvQY6pgEJkYZz1tEd3XDK%2FeoTALGR6jtcueKiGOpJwoAdy6OWPx6kozpQnWSwUl0ui1htN2KiBa7%2Ffh7qgedynfPrOXQ6qZtIvShsJrdSXJh1JrRaBhEmKBO40mfgLlVZrywyjyE9cg1vzegbR4QohCLIGcq%2FSSDLH7oZywubWN4ipisgZm6fhDE9b2Afa4psdrE3fJo7EE%2B1UomDe1WG03fWjJUgBPdLX5im&X-Amz-Signature=27a8f9eecdc86d54721bf63c0dba29f3b152170b896c6298adf9a6dd7940d4f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEKVJU7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMlz3hz5QHOiN%2FTTLaVmOdy3dLkiJW2d%2FsojKWdrvt%2BAiASHtYpqNASMttnhtpjyCzdYYKABZb8mxKS96jooLpIGCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMggzNaEdZbGNbHeqGKtwD88ACRLVMcP1f6di1HqKSQ84TtSKBv3aL%2BjhFjV%2Bj9tD6DROilene89WhXVRGSSLeHbjNLBPJ9STXfMlO8gUIHx5sB5oZWcSGM2kqPxpq7HTFLhhJOI2UgLKnkU6NAgPvsreul6vUETGjCEYTg%2Fc6vbHEui6wRV5FLfI%2BbrrGir7BbGfcYWSkp9rr1eXKWqkdallo9VIc3jIEI0dvWpWUdAK5L%2F8gMImSb6E7a%2FhDIXRMyXxsDBudWJj%2B7TlS0D4vJFK0gHy3iw01B5Dukvfio9Mhd%2B6cbb8BCgRKWsSN%2FAJBG19Ikm%2BtyUPw7ruobHf36NFZFwpcwGzbkKBnOxevrlfv26ZG52knKtNXYbleOcruwL8jPoKkb9ZDipTmWGEl9%2BBdH0lDUs7ITrXxoCEKf%2BKU23wXOefmBtJ5Ap3L8Mu41jsceTbt1kpqB8HvI0WrdQNYv5K5S2EaWUTXmCG3uF80perlazsPLb5iYhKUqX5Yg66JaG8E8m8OyXSYX%2BqTitXY%2Fdjo9SgVDT2ohBWqL1fLselO3pAJ3%2FLWOJYgjKfMPe5n%2B06liaTGMSUHgtWHkzSzjjhXPBNqZVKXpEYtEu3ySm0mZ2GL92T%2B0o1xVt5sI0zfdtvE8Va0RBAw4MbnvQY6pgEJkYZz1tEd3XDK%2FeoTALGR6jtcueKiGOpJwoAdy6OWPx6kozpQnWSwUl0ui1htN2KiBa7%2Ffh7qgedynfPrOXQ6qZtIvShsJrdSXJh1JrRaBhEmKBO40mfgLlVZrywyjyE9cg1vzegbR4QohCLIGcq%2FSSDLH7oZywubWN4ipisgZm6fhDE9b2Afa4psdrE3fJo7EE%2B1UomDe1WG03fWjJUgBPdLX5im&X-Amz-Signature=196e95aa35f3c5f65f4f9a09dcaaa314df157fe924274a272d05a8bd38ae6e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

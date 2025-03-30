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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUD66PL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC1DE1VFgBcPnfo7y0bZZAOhk0Kt95aoIcqH2q5IPdDaAiEAqSEMjjHW7sUox2IhpSMNKDzPqhwaDcAeyiguatjzcTwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aWHr3urOAKA9siSrcA1JVLy3YHN5mRSyD5BXpRRhYJnbsZ7g1qejToeGZ13iYeO3F5k1ki98teX3RaixEAGJw5mf%2FEjQwVM89X4c5waf0XG%2FRmE%2BogovaGNu0fp16zQ8bolooVaghG3IHb%2FGgN3IBC6vs5FR3a7tx2eiq879y1zeZzqwLBDMgv82j8DFhhr9InIoBcR0brwHcy0fConEB30ZNqKpEk%2FTID0iPWwHmRtonaPHjpWHOHwsiYwqC8CtuJ9Xgyq6GNUzAhEOXU5haxMWNY6bho7AXNCmslAOKENwkHXOZqe1bYxOaa5KjVvoWnb55jYUV3tvb%2FPhU4jrzCph8Df418h%2B%2F0RXPSgGIsYyTXb57J578pBSkSc9%2FxfzPMryxMKBfGX5z3nQYdbELoFS59YoD5%2FnOqht6FBPats42vdBwpuY5j69Ks1miK%2BlexyN9z2jjRBcT8oPiFb6vqP6U2o9veuwt%2Be1Mfl5c6h7POUO2zEE0O%2BEPQpMF9k%2BdYNFTY6rCavYnjmFNujmwJLlz12pr9H%2F3CmyZt2T0B%2FR%2B5hIYKl33sm%2BTJ2wYjWaPFuy6SJONpQGbhaK9X8u260pNMU1N8XnEMk3qG8ektjba9BBz%2FMh5dxKiNu6cNFqaZLHdzOrlyfzTMJTYpr8GOqUBY1JGjjJ4dWYM8e26lVXPqhDG5si2NbqqJaFu75RNkYkn5wgi0EJfSLra8uVMOqEIKomC1aNH%2F8ZpSLsugdo29QrFofEKy4bsXXGCa2xzvtiHJEZsfibmJWibYE2lJd4L%2BNb8Ph6lz1x8RUvRhmauOvW3riQOjVTfEsBG%2FG03QiictScyv54iRCTu1Ts6v15rNhfrzj7Ny0ZThOvPyfJdIn4tpoUO&X-Amz-Signature=57212b122b3eac9e6392d060da181f15f09ac88b4f73fb5349fee499d9f1ed99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUD66PL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC1DE1VFgBcPnfo7y0bZZAOhk0Kt95aoIcqH2q5IPdDaAiEAqSEMjjHW7sUox2IhpSMNKDzPqhwaDcAeyiguatjzcTwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aWHr3urOAKA9siSrcA1JVLy3YHN5mRSyD5BXpRRhYJnbsZ7g1qejToeGZ13iYeO3F5k1ki98teX3RaixEAGJw5mf%2FEjQwVM89X4c5waf0XG%2FRmE%2BogovaGNu0fp16zQ8bolooVaghG3IHb%2FGgN3IBC6vs5FR3a7tx2eiq879y1zeZzqwLBDMgv82j8DFhhr9InIoBcR0brwHcy0fConEB30ZNqKpEk%2FTID0iPWwHmRtonaPHjpWHOHwsiYwqC8CtuJ9Xgyq6GNUzAhEOXU5haxMWNY6bho7AXNCmslAOKENwkHXOZqe1bYxOaa5KjVvoWnb55jYUV3tvb%2FPhU4jrzCph8Df418h%2B%2F0RXPSgGIsYyTXb57J578pBSkSc9%2FxfzPMryxMKBfGX5z3nQYdbELoFS59YoD5%2FnOqht6FBPats42vdBwpuY5j69Ks1miK%2BlexyN9z2jjRBcT8oPiFb6vqP6U2o9veuwt%2Be1Mfl5c6h7POUO2zEE0O%2BEPQpMF9k%2BdYNFTY6rCavYnjmFNujmwJLlz12pr9H%2F3CmyZt2T0B%2FR%2B5hIYKl33sm%2BTJ2wYjWaPFuy6SJONpQGbhaK9X8u260pNMU1N8XnEMk3qG8ektjba9BBz%2FMh5dxKiNu6cNFqaZLHdzOrlyfzTMJTYpr8GOqUBY1JGjjJ4dWYM8e26lVXPqhDG5si2NbqqJaFu75RNkYkn5wgi0EJfSLra8uVMOqEIKomC1aNH%2F8ZpSLsugdo29QrFofEKy4bsXXGCa2xzvtiHJEZsfibmJWibYE2lJd4L%2BNb8Ph6lz1x8RUvRhmauOvW3riQOjVTfEsBG%2FG03QiictScyv54iRCTu1Ts6v15rNhfrzj7Ny0ZThOvPyfJdIn4tpoUO&X-Amz-Signature=d9c0803f9d0cb8147188b1e2da30ac82e959a9f8982b26d4767da890f311525d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUD66PL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC1DE1VFgBcPnfo7y0bZZAOhk0Kt95aoIcqH2q5IPdDaAiEAqSEMjjHW7sUox2IhpSMNKDzPqhwaDcAeyiguatjzcTwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aWHr3urOAKA9siSrcA1JVLy3YHN5mRSyD5BXpRRhYJnbsZ7g1qejToeGZ13iYeO3F5k1ki98teX3RaixEAGJw5mf%2FEjQwVM89X4c5waf0XG%2FRmE%2BogovaGNu0fp16zQ8bolooVaghG3IHb%2FGgN3IBC6vs5FR3a7tx2eiq879y1zeZzqwLBDMgv82j8DFhhr9InIoBcR0brwHcy0fConEB30ZNqKpEk%2FTID0iPWwHmRtonaPHjpWHOHwsiYwqC8CtuJ9Xgyq6GNUzAhEOXU5haxMWNY6bho7AXNCmslAOKENwkHXOZqe1bYxOaa5KjVvoWnb55jYUV3tvb%2FPhU4jrzCph8Df418h%2B%2F0RXPSgGIsYyTXb57J578pBSkSc9%2FxfzPMryxMKBfGX5z3nQYdbELoFS59YoD5%2FnOqht6FBPats42vdBwpuY5j69Ks1miK%2BlexyN9z2jjRBcT8oPiFb6vqP6U2o9veuwt%2Be1Mfl5c6h7POUO2zEE0O%2BEPQpMF9k%2BdYNFTY6rCavYnjmFNujmwJLlz12pr9H%2F3CmyZt2T0B%2FR%2B5hIYKl33sm%2BTJ2wYjWaPFuy6SJONpQGbhaK9X8u260pNMU1N8XnEMk3qG8ektjba9BBz%2FMh5dxKiNu6cNFqaZLHdzOrlyfzTMJTYpr8GOqUBY1JGjjJ4dWYM8e26lVXPqhDG5si2NbqqJaFu75RNkYkn5wgi0EJfSLra8uVMOqEIKomC1aNH%2F8ZpSLsugdo29QrFofEKy4bsXXGCa2xzvtiHJEZsfibmJWibYE2lJd4L%2BNb8Ph6lz1x8RUvRhmauOvW3riQOjVTfEsBG%2FG03QiictScyv54iRCTu1Ts6v15rNhfrzj7Ny0ZThOvPyfJdIn4tpoUO&X-Amz-Signature=31508a5f792693d38c77114b740dacf82c5a451061f0bee9001755bcfb727d05&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUD66PL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC1DE1VFgBcPnfo7y0bZZAOhk0Kt95aoIcqH2q5IPdDaAiEAqSEMjjHW7sUox2IhpSMNKDzPqhwaDcAeyiguatjzcTwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aWHr3urOAKA9siSrcA1JVLy3YHN5mRSyD5BXpRRhYJnbsZ7g1qejToeGZ13iYeO3F5k1ki98teX3RaixEAGJw5mf%2FEjQwVM89X4c5waf0XG%2FRmE%2BogovaGNu0fp16zQ8bolooVaghG3IHb%2FGgN3IBC6vs5FR3a7tx2eiq879y1zeZzqwLBDMgv82j8DFhhr9InIoBcR0brwHcy0fConEB30ZNqKpEk%2FTID0iPWwHmRtonaPHjpWHOHwsiYwqC8CtuJ9Xgyq6GNUzAhEOXU5haxMWNY6bho7AXNCmslAOKENwkHXOZqe1bYxOaa5KjVvoWnb55jYUV3tvb%2FPhU4jrzCph8Df418h%2B%2F0RXPSgGIsYyTXb57J578pBSkSc9%2FxfzPMryxMKBfGX5z3nQYdbELoFS59YoD5%2FnOqht6FBPats42vdBwpuY5j69Ks1miK%2BlexyN9z2jjRBcT8oPiFb6vqP6U2o9veuwt%2Be1Mfl5c6h7POUO2zEE0O%2BEPQpMF9k%2BdYNFTY6rCavYnjmFNujmwJLlz12pr9H%2F3CmyZt2T0B%2FR%2B5hIYKl33sm%2BTJ2wYjWaPFuy6SJONpQGbhaK9X8u260pNMU1N8XnEMk3qG8ektjba9BBz%2FMh5dxKiNu6cNFqaZLHdzOrlyfzTMJTYpr8GOqUBY1JGjjJ4dWYM8e26lVXPqhDG5si2NbqqJaFu75RNkYkn5wgi0EJfSLra8uVMOqEIKomC1aNH%2F8ZpSLsugdo29QrFofEKy4bsXXGCa2xzvtiHJEZsfibmJWibYE2lJd4L%2BNb8Ph6lz1x8RUvRhmauOvW3riQOjVTfEsBG%2FG03QiictScyv54iRCTu1Ts6v15rNhfrzj7Ny0ZThOvPyfJdIn4tpoUO&X-Amz-Signature=e7fa13efd1b6d95b81270b589e048ab56cc7f45afe8f823e96c13ea77179b87b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUD66PL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC1DE1VFgBcPnfo7y0bZZAOhk0Kt95aoIcqH2q5IPdDaAiEAqSEMjjHW7sUox2IhpSMNKDzPqhwaDcAeyiguatjzcTwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aWHr3urOAKA9siSrcA1JVLy3YHN5mRSyD5BXpRRhYJnbsZ7g1qejToeGZ13iYeO3F5k1ki98teX3RaixEAGJw5mf%2FEjQwVM89X4c5waf0XG%2FRmE%2BogovaGNu0fp16zQ8bolooVaghG3IHb%2FGgN3IBC6vs5FR3a7tx2eiq879y1zeZzqwLBDMgv82j8DFhhr9InIoBcR0brwHcy0fConEB30ZNqKpEk%2FTID0iPWwHmRtonaPHjpWHOHwsiYwqC8CtuJ9Xgyq6GNUzAhEOXU5haxMWNY6bho7AXNCmslAOKENwkHXOZqe1bYxOaa5KjVvoWnb55jYUV3tvb%2FPhU4jrzCph8Df418h%2B%2F0RXPSgGIsYyTXb57J578pBSkSc9%2FxfzPMryxMKBfGX5z3nQYdbELoFS59YoD5%2FnOqht6FBPats42vdBwpuY5j69Ks1miK%2BlexyN9z2jjRBcT8oPiFb6vqP6U2o9veuwt%2Be1Mfl5c6h7POUO2zEE0O%2BEPQpMF9k%2BdYNFTY6rCavYnjmFNujmwJLlz12pr9H%2F3CmyZt2T0B%2FR%2B5hIYKl33sm%2BTJ2wYjWaPFuy6SJONpQGbhaK9X8u260pNMU1N8XnEMk3qG8ektjba9BBz%2FMh5dxKiNu6cNFqaZLHdzOrlyfzTMJTYpr8GOqUBY1JGjjJ4dWYM8e26lVXPqhDG5si2NbqqJaFu75RNkYkn5wgi0EJfSLra8uVMOqEIKomC1aNH%2F8ZpSLsugdo29QrFofEKy4bsXXGCa2xzvtiHJEZsfibmJWibYE2lJd4L%2BNb8Ph6lz1x8RUvRhmauOvW3riQOjVTfEsBG%2FG03QiictScyv54iRCTu1Ts6v15rNhfrzj7Ny0ZThOvPyfJdIn4tpoUO&X-Amz-Signature=4b881f50a03cfa1b66e4da0658748470249e8fe0282e70336763026a563aa4fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUD66PL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC1DE1VFgBcPnfo7y0bZZAOhk0Kt95aoIcqH2q5IPdDaAiEAqSEMjjHW7sUox2IhpSMNKDzPqhwaDcAeyiguatjzcTwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aWHr3urOAKA9siSrcA1JVLy3YHN5mRSyD5BXpRRhYJnbsZ7g1qejToeGZ13iYeO3F5k1ki98teX3RaixEAGJw5mf%2FEjQwVM89X4c5waf0XG%2FRmE%2BogovaGNu0fp16zQ8bolooVaghG3IHb%2FGgN3IBC6vs5FR3a7tx2eiq879y1zeZzqwLBDMgv82j8DFhhr9InIoBcR0brwHcy0fConEB30ZNqKpEk%2FTID0iPWwHmRtonaPHjpWHOHwsiYwqC8CtuJ9Xgyq6GNUzAhEOXU5haxMWNY6bho7AXNCmslAOKENwkHXOZqe1bYxOaa5KjVvoWnb55jYUV3tvb%2FPhU4jrzCph8Df418h%2B%2F0RXPSgGIsYyTXb57J578pBSkSc9%2FxfzPMryxMKBfGX5z3nQYdbELoFS59YoD5%2FnOqht6FBPats42vdBwpuY5j69Ks1miK%2BlexyN9z2jjRBcT8oPiFb6vqP6U2o9veuwt%2Be1Mfl5c6h7POUO2zEE0O%2BEPQpMF9k%2BdYNFTY6rCavYnjmFNujmwJLlz12pr9H%2F3CmyZt2T0B%2FR%2B5hIYKl33sm%2BTJ2wYjWaPFuy6SJONpQGbhaK9X8u260pNMU1N8XnEMk3qG8ektjba9BBz%2FMh5dxKiNu6cNFqaZLHdzOrlyfzTMJTYpr8GOqUBY1JGjjJ4dWYM8e26lVXPqhDG5si2NbqqJaFu75RNkYkn5wgi0EJfSLra8uVMOqEIKomC1aNH%2F8ZpSLsugdo29QrFofEKy4bsXXGCa2xzvtiHJEZsfibmJWibYE2lJd4L%2BNb8Ph6lz1x8RUvRhmauOvW3riQOjVTfEsBG%2FG03QiictScyv54iRCTu1Ts6v15rNhfrzj7Ny0ZThOvPyfJdIn4tpoUO&X-Amz-Signature=abe8e4e94f079a413fdc0771bd94a5d539fc433f1095bb00e96616ab0d9fc403&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUD66PL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC1DE1VFgBcPnfo7y0bZZAOhk0Kt95aoIcqH2q5IPdDaAiEAqSEMjjHW7sUox2IhpSMNKDzPqhwaDcAeyiguatjzcTwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aWHr3urOAKA9siSrcA1JVLy3YHN5mRSyD5BXpRRhYJnbsZ7g1qejToeGZ13iYeO3F5k1ki98teX3RaixEAGJw5mf%2FEjQwVM89X4c5waf0XG%2FRmE%2BogovaGNu0fp16zQ8bolooVaghG3IHb%2FGgN3IBC6vs5FR3a7tx2eiq879y1zeZzqwLBDMgv82j8DFhhr9InIoBcR0brwHcy0fConEB30ZNqKpEk%2FTID0iPWwHmRtonaPHjpWHOHwsiYwqC8CtuJ9Xgyq6GNUzAhEOXU5haxMWNY6bho7AXNCmslAOKENwkHXOZqe1bYxOaa5KjVvoWnb55jYUV3tvb%2FPhU4jrzCph8Df418h%2B%2F0RXPSgGIsYyTXb57J578pBSkSc9%2FxfzPMryxMKBfGX5z3nQYdbELoFS59YoD5%2FnOqht6FBPats42vdBwpuY5j69Ks1miK%2BlexyN9z2jjRBcT8oPiFb6vqP6U2o9veuwt%2Be1Mfl5c6h7POUO2zEE0O%2BEPQpMF9k%2BdYNFTY6rCavYnjmFNujmwJLlz12pr9H%2F3CmyZt2T0B%2FR%2B5hIYKl33sm%2BTJ2wYjWaPFuy6SJONpQGbhaK9X8u260pNMU1N8XnEMk3qG8ektjba9BBz%2FMh5dxKiNu6cNFqaZLHdzOrlyfzTMJTYpr8GOqUBY1JGjjJ4dWYM8e26lVXPqhDG5si2NbqqJaFu75RNkYkn5wgi0EJfSLra8uVMOqEIKomC1aNH%2F8ZpSLsugdo29QrFofEKy4bsXXGCa2xzvtiHJEZsfibmJWibYE2lJd4L%2BNb8Ph6lz1x8RUvRhmauOvW3riQOjVTfEsBG%2FG03QiictScyv54iRCTu1Ts6v15rNhfrzj7Ny0ZThOvPyfJdIn4tpoUO&X-Amz-Signature=e29c4876db152c95c3a028f94e8d0361ec976608222ba5bfb6c56de84c4d7c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUD66PL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIC1DE1VFgBcPnfo7y0bZZAOhk0Kt95aoIcqH2q5IPdDaAiEAqSEMjjHW7sUox2IhpSMNKDzPqhwaDcAeyiguatjzcTwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4aWHr3urOAKA9siSrcA1JVLy3YHN5mRSyD5BXpRRhYJnbsZ7g1qejToeGZ13iYeO3F5k1ki98teX3RaixEAGJw5mf%2FEjQwVM89X4c5waf0XG%2FRmE%2BogovaGNu0fp16zQ8bolooVaghG3IHb%2FGgN3IBC6vs5FR3a7tx2eiq879y1zeZzqwLBDMgv82j8DFhhr9InIoBcR0brwHcy0fConEB30ZNqKpEk%2FTID0iPWwHmRtonaPHjpWHOHwsiYwqC8CtuJ9Xgyq6GNUzAhEOXU5haxMWNY6bho7AXNCmslAOKENwkHXOZqe1bYxOaa5KjVvoWnb55jYUV3tvb%2FPhU4jrzCph8Df418h%2B%2F0RXPSgGIsYyTXb57J578pBSkSc9%2FxfzPMryxMKBfGX5z3nQYdbELoFS59YoD5%2FnOqht6FBPats42vdBwpuY5j69Ks1miK%2BlexyN9z2jjRBcT8oPiFb6vqP6U2o9veuwt%2Be1Mfl5c6h7POUO2zEE0O%2BEPQpMF9k%2BdYNFTY6rCavYnjmFNujmwJLlz12pr9H%2F3CmyZt2T0B%2FR%2B5hIYKl33sm%2BTJ2wYjWaPFuy6SJONpQGbhaK9X8u260pNMU1N8XnEMk3qG8ektjba9BBz%2FMh5dxKiNu6cNFqaZLHdzOrlyfzTMJTYpr8GOqUBY1JGjjJ4dWYM8e26lVXPqhDG5si2NbqqJaFu75RNkYkn5wgi0EJfSLra8uVMOqEIKomC1aNH%2F8ZpSLsugdo29QrFofEKy4bsXXGCa2xzvtiHJEZsfibmJWibYE2lJd4L%2BNb8Ph6lz1x8RUvRhmauOvW3riQOjVTfEsBG%2FG03QiictScyv54iRCTu1Ts6v15rNhfrzj7Ny0ZThOvPyfJdIn4tpoUO&X-Amz-Signature=03477140fb3f9403e0fe6aad19ddc88df9a25f3115651b5e625cdfd8460f0a30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

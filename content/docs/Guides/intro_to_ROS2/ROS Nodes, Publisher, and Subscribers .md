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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIVW43R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1s62Ct4QKLXQOp%2Bk%2FXcmENdaVQi6canj%2BNyC9kdOTZAiA0eH9L9715wb0au5SwSXLmsxGsK%2FzbL4RdP%2FLSjgG2hyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMQslTdpaGnWDJkT2vKtwD5pk4gBip%2FrzkFxgirqqlAcmB5qPEEg6swG4J52o9U%2BQ9jDd6XVdX2tm%2F2VaC%2FVknoLlLpKCvOIDf1PiMlOwN1l%2FMIyz%2FTCOBHBYeH1CiaYSXUzBp0xsyxAFGLbd8nHElT22wS%2FR9N9PnxNa%2BxvZpmLaGChp2o5L1pQtOMMe40VBxqRWLW2TeDyQ1aPixTXzqDk%2F7w2m0U0gwiuscqs4IpCh%2Bft7bjg4XljtdazXqJ5BwfrEgH9RcgNMhosfEoFTHJOw7q15afelQmLU74AOGRi3pwBCx609gft3PFcWQLbkiX1baHydNkP5lhrP961UrGnkZgERkVR2Gp0p5r5YCN%2Fpd2g2pxrpygEim3O6DqZ%2FsE587q24Jga3vbce8NQnggCvh0xBYMKndGQo0gCpii666JJ9nPGs5DfTwQItNPL1MdBHipn1hDL7M9P89MBm3UgNeC7KkoK%2FVJQ7nJWj5a9jUYuxoh4PV5F%2BUEOufttUMEqROTpnd92B8LZRNaG%2FHmCJB1tx6zWNxMDszizTIfYrhHuaT7IkroaqZS%2FieL2jQdXF7YpkMjjdfm%2F%2F4gynMqNBT2fypAOcf6qfKpieudxkNa%2FYHbp5TxqrapQCLJ35X9KgDo6R8qxSf9xYw3YHYvgY6pgHdtZvPd9bjsk2veZsxhGNSj01C4xuH2N2NJagypbcKCr%2Fp4dEtdn5fkNvvP9mYYJVMn8Xzpj0FBgGKh43LiFYXFkpuw9qop5s8Jn0cXC3RofzMcBC69%2BsCff%2FAy4u9507spnBG0ZnWx3Uq38ky2OMkXidDVWwM6dan9Zxj1AcXM0YIjcA6orcF0CE5Lx2KRZiU8Yp15P4D7hR6FFLR0rio4HsHj%2Br6&X-Amz-Signature=5931098e6b2b3153cd3f5e41ee3f094ed16d5f2aa43b6a09f48617a5152478ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIVW43R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1s62Ct4QKLXQOp%2Bk%2FXcmENdaVQi6canj%2BNyC9kdOTZAiA0eH9L9715wb0au5SwSXLmsxGsK%2FzbL4RdP%2FLSjgG2hyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMQslTdpaGnWDJkT2vKtwD5pk4gBip%2FrzkFxgirqqlAcmB5qPEEg6swG4J52o9U%2BQ9jDd6XVdX2tm%2F2VaC%2FVknoLlLpKCvOIDf1PiMlOwN1l%2FMIyz%2FTCOBHBYeH1CiaYSXUzBp0xsyxAFGLbd8nHElT22wS%2FR9N9PnxNa%2BxvZpmLaGChp2o5L1pQtOMMe40VBxqRWLW2TeDyQ1aPixTXzqDk%2F7w2m0U0gwiuscqs4IpCh%2Bft7bjg4XljtdazXqJ5BwfrEgH9RcgNMhosfEoFTHJOw7q15afelQmLU74AOGRi3pwBCx609gft3PFcWQLbkiX1baHydNkP5lhrP961UrGnkZgERkVR2Gp0p5r5YCN%2Fpd2g2pxrpygEim3O6DqZ%2FsE587q24Jga3vbce8NQnggCvh0xBYMKndGQo0gCpii666JJ9nPGs5DfTwQItNPL1MdBHipn1hDL7M9P89MBm3UgNeC7KkoK%2FVJQ7nJWj5a9jUYuxoh4PV5F%2BUEOufttUMEqROTpnd92B8LZRNaG%2FHmCJB1tx6zWNxMDszizTIfYrhHuaT7IkroaqZS%2FieL2jQdXF7YpkMjjdfm%2F%2F4gynMqNBT2fypAOcf6qfKpieudxkNa%2FYHbp5TxqrapQCLJ35X9KgDo6R8qxSf9xYw3YHYvgY6pgHdtZvPd9bjsk2veZsxhGNSj01C4xuH2N2NJagypbcKCr%2Fp4dEtdn5fkNvvP9mYYJVMn8Xzpj0FBgGKh43LiFYXFkpuw9qop5s8Jn0cXC3RofzMcBC69%2BsCff%2FAy4u9507spnBG0ZnWx3Uq38ky2OMkXidDVWwM6dan9Zxj1AcXM0YIjcA6orcF0CE5Lx2KRZiU8Yp15P4D7hR6FFLR0rio4HsHj%2Br6&X-Amz-Signature=bda94fd255d8b2bbb657367acf914de6af0f6f52c9d6b881e9029a0ec399dbd7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIVW43R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1s62Ct4QKLXQOp%2Bk%2FXcmENdaVQi6canj%2BNyC9kdOTZAiA0eH9L9715wb0au5SwSXLmsxGsK%2FzbL4RdP%2FLSjgG2hyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMQslTdpaGnWDJkT2vKtwD5pk4gBip%2FrzkFxgirqqlAcmB5qPEEg6swG4J52o9U%2BQ9jDd6XVdX2tm%2F2VaC%2FVknoLlLpKCvOIDf1PiMlOwN1l%2FMIyz%2FTCOBHBYeH1CiaYSXUzBp0xsyxAFGLbd8nHElT22wS%2FR9N9PnxNa%2BxvZpmLaGChp2o5L1pQtOMMe40VBxqRWLW2TeDyQ1aPixTXzqDk%2F7w2m0U0gwiuscqs4IpCh%2Bft7bjg4XljtdazXqJ5BwfrEgH9RcgNMhosfEoFTHJOw7q15afelQmLU74AOGRi3pwBCx609gft3PFcWQLbkiX1baHydNkP5lhrP961UrGnkZgERkVR2Gp0p5r5YCN%2Fpd2g2pxrpygEim3O6DqZ%2FsE587q24Jga3vbce8NQnggCvh0xBYMKndGQo0gCpii666JJ9nPGs5DfTwQItNPL1MdBHipn1hDL7M9P89MBm3UgNeC7KkoK%2FVJQ7nJWj5a9jUYuxoh4PV5F%2BUEOufttUMEqROTpnd92B8LZRNaG%2FHmCJB1tx6zWNxMDszizTIfYrhHuaT7IkroaqZS%2FieL2jQdXF7YpkMjjdfm%2F%2F4gynMqNBT2fypAOcf6qfKpieudxkNa%2FYHbp5TxqrapQCLJ35X9KgDo6R8qxSf9xYw3YHYvgY6pgHdtZvPd9bjsk2veZsxhGNSj01C4xuH2N2NJagypbcKCr%2Fp4dEtdn5fkNvvP9mYYJVMn8Xzpj0FBgGKh43LiFYXFkpuw9qop5s8Jn0cXC3RofzMcBC69%2BsCff%2FAy4u9507spnBG0ZnWx3Uq38ky2OMkXidDVWwM6dan9Zxj1AcXM0YIjcA6orcF0CE5Lx2KRZiU8Yp15P4D7hR6FFLR0rio4HsHj%2Br6&X-Amz-Signature=f31299bf777608424f8b7244ff8593e00cb0489699416a7d839ffbada256ad3c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIVW43R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1s62Ct4QKLXQOp%2Bk%2FXcmENdaVQi6canj%2BNyC9kdOTZAiA0eH9L9715wb0au5SwSXLmsxGsK%2FzbL4RdP%2FLSjgG2hyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMQslTdpaGnWDJkT2vKtwD5pk4gBip%2FrzkFxgirqqlAcmB5qPEEg6swG4J52o9U%2BQ9jDd6XVdX2tm%2F2VaC%2FVknoLlLpKCvOIDf1PiMlOwN1l%2FMIyz%2FTCOBHBYeH1CiaYSXUzBp0xsyxAFGLbd8nHElT22wS%2FR9N9PnxNa%2BxvZpmLaGChp2o5L1pQtOMMe40VBxqRWLW2TeDyQ1aPixTXzqDk%2F7w2m0U0gwiuscqs4IpCh%2Bft7bjg4XljtdazXqJ5BwfrEgH9RcgNMhosfEoFTHJOw7q15afelQmLU74AOGRi3pwBCx609gft3PFcWQLbkiX1baHydNkP5lhrP961UrGnkZgERkVR2Gp0p5r5YCN%2Fpd2g2pxrpygEim3O6DqZ%2FsE587q24Jga3vbce8NQnggCvh0xBYMKndGQo0gCpii666JJ9nPGs5DfTwQItNPL1MdBHipn1hDL7M9P89MBm3UgNeC7KkoK%2FVJQ7nJWj5a9jUYuxoh4PV5F%2BUEOufttUMEqROTpnd92B8LZRNaG%2FHmCJB1tx6zWNxMDszizTIfYrhHuaT7IkroaqZS%2FieL2jQdXF7YpkMjjdfm%2F%2F4gynMqNBT2fypAOcf6qfKpieudxkNa%2FYHbp5TxqrapQCLJ35X9KgDo6R8qxSf9xYw3YHYvgY6pgHdtZvPd9bjsk2veZsxhGNSj01C4xuH2N2NJagypbcKCr%2Fp4dEtdn5fkNvvP9mYYJVMn8Xzpj0FBgGKh43LiFYXFkpuw9qop5s8Jn0cXC3RofzMcBC69%2BsCff%2FAy4u9507spnBG0ZnWx3Uq38ky2OMkXidDVWwM6dan9Zxj1AcXM0YIjcA6orcF0CE5Lx2KRZiU8Yp15P4D7hR6FFLR0rio4HsHj%2Br6&X-Amz-Signature=cbd03f391e1ceedec8cf26e13681858d00b9cac5de4ec1ba2e8254b5cc179d49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIVW43R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1s62Ct4QKLXQOp%2Bk%2FXcmENdaVQi6canj%2BNyC9kdOTZAiA0eH9L9715wb0au5SwSXLmsxGsK%2FzbL4RdP%2FLSjgG2hyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMQslTdpaGnWDJkT2vKtwD5pk4gBip%2FrzkFxgirqqlAcmB5qPEEg6swG4J52o9U%2BQ9jDd6XVdX2tm%2F2VaC%2FVknoLlLpKCvOIDf1PiMlOwN1l%2FMIyz%2FTCOBHBYeH1CiaYSXUzBp0xsyxAFGLbd8nHElT22wS%2FR9N9PnxNa%2BxvZpmLaGChp2o5L1pQtOMMe40VBxqRWLW2TeDyQ1aPixTXzqDk%2F7w2m0U0gwiuscqs4IpCh%2Bft7bjg4XljtdazXqJ5BwfrEgH9RcgNMhosfEoFTHJOw7q15afelQmLU74AOGRi3pwBCx609gft3PFcWQLbkiX1baHydNkP5lhrP961UrGnkZgERkVR2Gp0p5r5YCN%2Fpd2g2pxrpygEim3O6DqZ%2FsE587q24Jga3vbce8NQnggCvh0xBYMKndGQo0gCpii666JJ9nPGs5DfTwQItNPL1MdBHipn1hDL7M9P89MBm3UgNeC7KkoK%2FVJQ7nJWj5a9jUYuxoh4PV5F%2BUEOufttUMEqROTpnd92B8LZRNaG%2FHmCJB1tx6zWNxMDszizTIfYrhHuaT7IkroaqZS%2FieL2jQdXF7YpkMjjdfm%2F%2F4gynMqNBT2fypAOcf6qfKpieudxkNa%2FYHbp5TxqrapQCLJ35X9KgDo6R8qxSf9xYw3YHYvgY6pgHdtZvPd9bjsk2veZsxhGNSj01C4xuH2N2NJagypbcKCr%2Fp4dEtdn5fkNvvP9mYYJVMn8Xzpj0FBgGKh43LiFYXFkpuw9qop5s8Jn0cXC3RofzMcBC69%2BsCff%2FAy4u9507spnBG0ZnWx3Uq38ky2OMkXidDVWwM6dan9Zxj1AcXM0YIjcA6orcF0CE5Lx2KRZiU8Yp15P4D7hR6FFLR0rio4HsHj%2Br6&X-Amz-Signature=36cac3ad5bd5c3e5b9dc0d58cbd875e3aeb6a02b8d8226ee23906851c75188dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIVW43R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1s62Ct4QKLXQOp%2Bk%2FXcmENdaVQi6canj%2BNyC9kdOTZAiA0eH9L9715wb0au5SwSXLmsxGsK%2FzbL4RdP%2FLSjgG2hyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMQslTdpaGnWDJkT2vKtwD5pk4gBip%2FrzkFxgirqqlAcmB5qPEEg6swG4J52o9U%2BQ9jDd6XVdX2tm%2F2VaC%2FVknoLlLpKCvOIDf1PiMlOwN1l%2FMIyz%2FTCOBHBYeH1CiaYSXUzBp0xsyxAFGLbd8nHElT22wS%2FR9N9PnxNa%2BxvZpmLaGChp2o5L1pQtOMMe40VBxqRWLW2TeDyQ1aPixTXzqDk%2F7w2m0U0gwiuscqs4IpCh%2Bft7bjg4XljtdazXqJ5BwfrEgH9RcgNMhosfEoFTHJOw7q15afelQmLU74AOGRi3pwBCx609gft3PFcWQLbkiX1baHydNkP5lhrP961UrGnkZgERkVR2Gp0p5r5YCN%2Fpd2g2pxrpygEim3O6DqZ%2FsE587q24Jga3vbce8NQnggCvh0xBYMKndGQo0gCpii666JJ9nPGs5DfTwQItNPL1MdBHipn1hDL7M9P89MBm3UgNeC7KkoK%2FVJQ7nJWj5a9jUYuxoh4PV5F%2BUEOufttUMEqROTpnd92B8LZRNaG%2FHmCJB1tx6zWNxMDszizTIfYrhHuaT7IkroaqZS%2FieL2jQdXF7YpkMjjdfm%2F%2F4gynMqNBT2fypAOcf6qfKpieudxkNa%2FYHbp5TxqrapQCLJ35X9KgDo6R8qxSf9xYw3YHYvgY6pgHdtZvPd9bjsk2veZsxhGNSj01C4xuH2N2NJagypbcKCr%2Fp4dEtdn5fkNvvP9mYYJVMn8Xzpj0FBgGKh43LiFYXFkpuw9qop5s8Jn0cXC3RofzMcBC69%2BsCff%2FAy4u9507spnBG0ZnWx3Uq38ky2OMkXidDVWwM6dan9Zxj1AcXM0YIjcA6orcF0CE5Lx2KRZiU8Yp15P4D7hR6FFLR0rio4HsHj%2Br6&X-Amz-Signature=e05561fc54455c19f2b6616858855376867f9429af81ed97fef2019d1f6ea042&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIVW43R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1s62Ct4QKLXQOp%2Bk%2FXcmENdaVQi6canj%2BNyC9kdOTZAiA0eH9L9715wb0au5SwSXLmsxGsK%2FzbL4RdP%2FLSjgG2hyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMQslTdpaGnWDJkT2vKtwD5pk4gBip%2FrzkFxgirqqlAcmB5qPEEg6swG4J52o9U%2BQ9jDd6XVdX2tm%2F2VaC%2FVknoLlLpKCvOIDf1PiMlOwN1l%2FMIyz%2FTCOBHBYeH1CiaYSXUzBp0xsyxAFGLbd8nHElT22wS%2FR9N9PnxNa%2BxvZpmLaGChp2o5L1pQtOMMe40VBxqRWLW2TeDyQ1aPixTXzqDk%2F7w2m0U0gwiuscqs4IpCh%2Bft7bjg4XljtdazXqJ5BwfrEgH9RcgNMhosfEoFTHJOw7q15afelQmLU74AOGRi3pwBCx609gft3PFcWQLbkiX1baHydNkP5lhrP961UrGnkZgERkVR2Gp0p5r5YCN%2Fpd2g2pxrpygEim3O6DqZ%2FsE587q24Jga3vbce8NQnggCvh0xBYMKndGQo0gCpii666JJ9nPGs5DfTwQItNPL1MdBHipn1hDL7M9P89MBm3UgNeC7KkoK%2FVJQ7nJWj5a9jUYuxoh4PV5F%2BUEOufttUMEqROTpnd92B8LZRNaG%2FHmCJB1tx6zWNxMDszizTIfYrhHuaT7IkroaqZS%2FieL2jQdXF7YpkMjjdfm%2F%2F4gynMqNBT2fypAOcf6qfKpieudxkNa%2FYHbp5TxqrapQCLJ35X9KgDo6R8qxSf9xYw3YHYvgY6pgHdtZvPd9bjsk2veZsxhGNSj01C4xuH2N2NJagypbcKCr%2Fp4dEtdn5fkNvvP9mYYJVMn8Xzpj0FBgGKh43LiFYXFkpuw9qop5s8Jn0cXC3RofzMcBC69%2BsCff%2FAy4u9507spnBG0ZnWx3Uq38ky2OMkXidDVWwM6dan9Zxj1AcXM0YIjcA6orcF0CE5Lx2KRZiU8Yp15P4D7hR6FFLR0rio4HsHj%2Br6&X-Amz-Signature=47ebd69636f56e0cddfc927e8a8a61bb3294fe06d23bf8b6015eee8dec506e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIVW43R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1s62Ct4QKLXQOp%2Bk%2FXcmENdaVQi6canj%2BNyC9kdOTZAiA0eH9L9715wb0au5SwSXLmsxGsK%2FzbL4RdP%2FLSjgG2hyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMQslTdpaGnWDJkT2vKtwD5pk4gBip%2FrzkFxgirqqlAcmB5qPEEg6swG4J52o9U%2BQ9jDd6XVdX2tm%2F2VaC%2FVknoLlLpKCvOIDf1PiMlOwN1l%2FMIyz%2FTCOBHBYeH1CiaYSXUzBp0xsyxAFGLbd8nHElT22wS%2FR9N9PnxNa%2BxvZpmLaGChp2o5L1pQtOMMe40VBxqRWLW2TeDyQ1aPixTXzqDk%2F7w2m0U0gwiuscqs4IpCh%2Bft7bjg4XljtdazXqJ5BwfrEgH9RcgNMhosfEoFTHJOw7q15afelQmLU74AOGRi3pwBCx609gft3PFcWQLbkiX1baHydNkP5lhrP961UrGnkZgERkVR2Gp0p5r5YCN%2Fpd2g2pxrpygEim3O6DqZ%2FsE587q24Jga3vbce8NQnggCvh0xBYMKndGQo0gCpii666JJ9nPGs5DfTwQItNPL1MdBHipn1hDL7M9P89MBm3UgNeC7KkoK%2FVJQ7nJWj5a9jUYuxoh4PV5F%2BUEOufttUMEqROTpnd92B8LZRNaG%2FHmCJB1tx6zWNxMDszizTIfYrhHuaT7IkroaqZS%2FieL2jQdXF7YpkMjjdfm%2F%2F4gynMqNBT2fypAOcf6qfKpieudxkNa%2FYHbp5TxqrapQCLJ35X9KgDo6R8qxSf9xYw3YHYvgY6pgHdtZvPd9bjsk2veZsxhGNSj01C4xuH2N2NJagypbcKCr%2Fp4dEtdn5fkNvvP9mYYJVMn8Xzpj0FBgGKh43LiFYXFkpuw9qop5s8Jn0cXC3RofzMcBC69%2BsCff%2FAy4u9507spnBG0ZnWx3Uq38ky2OMkXidDVWwM6dan9Zxj1AcXM0YIjcA6orcF0CE5Lx2KRZiU8Yp15P4D7hR6FFLR0rio4HsHj%2Br6&X-Amz-Signature=90df886b8a1427246ec76e49530e6f21f01d14e691fb11e20b8f23c456e2d559&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXA2WCC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFdhJYvb98aXX49ITPxOUvWXAbRRRxMyDronWpElJ8udAiEAnXdfPiJlaVZkPp78nKwZSAvRk4t2Nbs9IA9y0HqoRzIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHGxo8TVItqWRb%2BB%2BircA1tZ2pz0erw6KitXR%2F9BVJhL2Ukf1kTjE9R1sR2rftZZnBx1AarGAC%2FBfWOTP4O%2B1ZgksdNOWYKoSsflnRe0XYtYZbI1e4CsdSM5oqHKkAFdyxnr2PkQXjr0p6ozrJNLoTc4iEP56kj4fRaXR4MXldlVrOh4HZ2L6g3%2FXyYm6DxLGufvD7%2BlO%2FPeXax1vwFvqFD9zr2Ej2QEPeDnjrb%2BAtIhTxGHrLbc%2B9IxvsMBf9T4UuxfKNzai52%2BQ7ROOFa0DJ%2BE%2FXWWHwhBemyWBiGl9%2FjDbHveNI3%2BbgHMAcllCtX7Fp9wavKmnwR2eYlzD26lT06kSnBlxk72grV7xw3h4QAmPIc74RkOk6Lm7M317op%2FMzhIb32EEUCZAOZIcBxBfwtR1%2FBJuU9siMspbH0kCJTBEcGTDQIN8GNGWtgrBgMMluC664P9y8zi1%2BKy2XIZy5cxNyeOumejyK5hIZjjCmLbS3t3mBNG4Ll6gOyyCzdwXrKg8WdhWoBTI8NTClWfzw5rg4G7KYGXzxDeAB1QkNqf1Wu9gpKwiGeU9PNRdNiiK4rxsLRIWDrcR9eP6G1GDgKrbDtrIjzF9owQQuFY9Tr1Uy5JukjZMKenWVvKsh6inR44bdG%2BqZGyKGgmMPjM%2BsIGOqUBqdrQKIeJPRO5U%2FC2BFReinXA%2BcCTwEsBYvCA4QthIaBJOtIbpIOJFMCxt3%2Bj1CpHIR5EkBTrhx%2Fmt%2FNcCcX8vcHh9ZmVFGWfPCYWVlMiJEg1Pp70mlY2b4q6MZ%2F%2FsbeLZANKERigztytUi4hvzS1Bo%2F1YqFUcGucOZRuqs5wtAKvylB6BCJSREPCNJy0Jf3gELh3IJKfDnW7tZ3vNzka%2FOlYYTXR&X-Amz-Signature=2fcecc7c15ca0ced0bf1208d7ef96282f1ce9a82f3415e6974f8e5c33e0d7eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXA2WCC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFdhJYvb98aXX49ITPxOUvWXAbRRRxMyDronWpElJ8udAiEAnXdfPiJlaVZkPp78nKwZSAvRk4t2Nbs9IA9y0HqoRzIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHGxo8TVItqWRb%2BB%2BircA1tZ2pz0erw6KitXR%2F9BVJhL2Ukf1kTjE9R1sR2rftZZnBx1AarGAC%2FBfWOTP4O%2B1ZgksdNOWYKoSsflnRe0XYtYZbI1e4CsdSM5oqHKkAFdyxnr2PkQXjr0p6ozrJNLoTc4iEP56kj4fRaXR4MXldlVrOh4HZ2L6g3%2FXyYm6DxLGufvD7%2BlO%2FPeXax1vwFvqFD9zr2Ej2QEPeDnjrb%2BAtIhTxGHrLbc%2B9IxvsMBf9T4UuxfKNzai52%2BQ7ROOFa0DJ%2BE%2FXWWHwhBemyWBiGl9%2FjDbHveNI3%2BbgHMAcllCtX7Fp9wavKmnwR2eYlzD26lT06kSnBlxk72grV7xw3h4QAmPIc74RkOk6Lm7M317op%2FMzhIb32EEUCZAOZIcBxBfwtR1%2FBJuU9siMspbH0kCJTBEcGTDQIN8GNGWtgrBgMMluC664P9y8zi1%2BKy2XIZy5cxNyeOumejyK5hIZjjCmLbS3t3mBNG4Ll6gOyyCzdwXrKg8WdhWoBTI8NTClWfzw5rg4G7KYGXzxDeAB1QkNqf1Wu9gpKwiGeU9PNRdNiiK4rxsLRIWDrcR9eP6G1GDgKrbDtrIjzF9owQQuFY9Tr1Uy5JukjZMKenWVvKsh6inR44bdG%2BqZGyKGgmMPjM%2BsIGOqUBqdrQKIeJPRO5U%2FC2BFReinXA%2BcCTwEsBYvCA4QthIaBJOtIbpIOJFMCxt3%2Bj1CpHIR5EkBTrhx%2Fmt%2FNcCcX8vcHh9ZmVFGWfPCYWVlMiJEg1Pp70mlY2b4q6MZ%2F%2FsbeLZANKERigztytUi4hvzS1Bo%2F1YqFUcGucOZRuqs5wtAKvylB6BCJSREPCNJy0Jf3gELh3IJKfDnW7tZ3vNzka%2FOlYYTXR&X-Amz-Signature=7512a7cc2ac4d47c9b50f6fb56cb2b1d285cf51649498fce0f8cffdb21c6177c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXA2WCC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFdhJYvb98aXX49ITPxOUvWXAbRRRxMyDronWpElJ8udAiEAnXdfPiJlaVZkPp78nKwZSAvRk4t2Nbs9IA9y0HqoRzIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHGxo8TVItqWRb%2BB%2BircA1tZ2pz0erw6KitXR%2F9BVJhL2Ukf1kTjE9R1sR2rftZZnBx1AarGAC%2FBfWOTP4O%2B1ZgksdNOWYKoSsflnRe0XYtYZbI1e4CsdSM5oqHKkAFdyxnr2PkQXjr0p6ozrJNLoTc4iEP56kj4fRaXR4MXldlVrOh4HZ2L6g3%2FXyYm6DxLGufvD7%2BlO%2FPeXax1vwFvqFD9zr2Ej2QEPeDnjrb%2BAtIhTxGHrLbc%2B9IxvsMBf9T4UuxfKNzai52%2BQ7ROOFa0DJ%2BE%2FXWWHwhBemyWBiGl9%2FjDbHveNI3%2BbgHMAcllCtX7Fp9wavKmnwR2eYlzD26lT06kSnBlxk72grV7xw3h4QAmPIc74RkOk6Lm7M317op%2FMzhIb32EEUCZAOZIcBxBfwtR1%2FBJuU9siMspbH0kCJTBEcGTDQIN8GNGWtgrBgMMluC664P9y8zi1%2BKy2XIZy5cxNyeOumejyK5hIZjjCmLbS3t3mBNG4Ll6gOyyCzdwXrKg8WdhWoBTI8NTClWfzw5rg4G7KYGXzxDeAB1QkNqf1Wu9gpKwiGeU9PNRdNiiK4rxsLRIWDrcR9eP6G1GDgKrbDtrIjzF9owQQuFY9Tr1Uy5JukjZMKenWVvKsh6inR44bdG%2BqZGyKGgmMPjM%2BsIGOqUBqdrQKIeJPRO5U%2FC2BFReinXA%2BcCTwEsBYvCA4QthIaBJOtIbpIOJFMCxt3%2Bj1CpHIR5EkBTrhx%2Fmt%2FNcCcX8vcHh9ZmVFGWfPCYWVlMiJEg1Pp70mlY2b4q6MZ%2F%2FsbeLZANKERigztytUi4hvzS1Bo%2F1YqFUcGucOZRuqs5wtAKvylB6BCJSREPCNJy0Jf3gELh3IJKfDnW7tZ3vNzka%2FOlYYTXR&X-Amz-Signature=69f74d16b082e79188142de9a6ae9d25dd7504f5baf1281506cc9f96ff509ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXA2WCC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFdhJYvb98aXX49ITPxOUvWXAbRRRxMyDronWpElJ8udAiEAnXdfPiJlaVZkPp78nKwZSAvRk4t2Nbs9IA9y0HqoRzIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHGxo8TVItqWRb%2BB%2BircA1tZ2pz0erw6KitXR%2F9BVJhL2Ukf1kTjE9R1sR2rftZZnBx1AarGAC%2FBfWOTP4O%2B1ZgksdNOWYKoSsflnRe0XYtYZbI1e4CsdSM5oqHKkAFdyxnr2PkQXjr0p6ozrJNLoTc4iEP56kj4fRaXR4MXldlVrOh4HZ2L6g3%2FXyYm6DxLGufvD7%2BlO%2FPeXax1vwFvqFD9zr2Ej2QEPeDnjrb%2BAtIhTxGHrLbc%2B9IxvsMBf9T4UuxfKNzai52%2BQ7ROOFa0DJ%2BE%2FXWWHwhBemyWBiGl9%2FjDbHveNI3%2BbgHMAcllCtX7Fp9wavKmnwR2eYlzD26lT06kSnBlxk72grV7xw3h4QAmPIc74RkOk6Lm7M317op%2FMzhIb32EEUCZAOZIcBxBfwtR1%2FBJuU9siMspbH0kCJTBEcGTDQIN8GNGWtgrBgMMluC664P9y8zi1%2BKy2XIZy5cxNyeOumejyK5hIZjjCmLbS3t3mBNG4Ll6gOyyCzdwXrKg8WdhWoBTI8NTClWfzw5rg4G7KYGXzxDeAB1QkNqf1Wu9gpKwiGeU9PNRdNiiK4rxsLRIWDrcR9eP6G1GDgKrbDtrIjzF9owQQuFY9Tr1Uy5JukjZMKenWVvKsh6inR44bdG%2BqZGyKGgmMPjM%2BsIGOqUBqdrQKIeJPRO5U%2FC2BFReinXA%2BcCTwEsBYvCA4QthIaBJOtIbpIOJFMCxt3%2Bj1CpHIR5EkBTrhx%2Fmt%2FNcCcX8vcHh9ZmVFGWfPCYWVlMiJEg1Pp70mlY2b4q6MZ%2F%2FsbeLZANKERigztytUi4hvzS1Bo%2F1YqFUcGucOZRuqs5wtAKvylB6BCJSREPCNJy0Jf3gELh3IJKfDnW7tZ3vNzka%2FOlYYTXR&X-Amz-Signature=45aa20605c25525966bcc6e969523ffc54e4331c607cfddc06c0d87f2635871b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXA2WCC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFdhJYvb98aXX49ITPxOUvWXAbRRRxMyDronWpElJ8udAiEAnXdfPiJlaVZkPp78nKwZSAvRk4t2Nbs9IA9y0HqoRzIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHGxo8TVItqWRb%2BB%2BircA1tZ2pz0erw6KitXR%2F9BVJhL2Ukf1kTjE9R1sR2rftZZnBx1AarGAC%2FBfWOTP4O%2B1ZgksdNOWYKoSsflnRe0XYtYZbI1e4CsdSM5oqHKkAFdyxnr2PkQXjr0p6ozrJNLoTc4iEP56kj4fRaXR4MXldlVrOh4HZ2L6g3%2FXyYm6DxLGufvD7%2BlO%2FPeXax1vwFvqFD9zr2Ej2QEPeDnjrb%2BAtIhTxGHrLbc%2B9IxvsMBf9T4UuxfKNzai52%2BQ7ROOFa0DJ%2BE%2FXWWHwhBemyWBiGl9%2FjDbHveNI3%2BbgHMAcllCtX7Fp9wavKmnwR2eYlzD26lT06kSnBlxk72grV7xw3h4QAmPIc74RkOk6Lm7M317op%2FMzhIb32EEUCZAOZIcBxBfwtR1%2FBJuU9siMspbH0kCJTBEcGTDQIN8GNGWtgrBgMMluC664P9y8zi1%2BKy2XIZy5cxNyeOumejyK5hIZjjCmLbS3t3mBNG4Ll6gOyyCzdwXrKg8WdhWoBTI8NTClWfzw5rg4G7KYGXzxDeAB1QkNqf1Wu9gpKwiGeU9PNRdNiiK4rxsLRIWDrcR9eP6G1GDgKrbDtrIjzF9owQQuFY9Tr1Uy5JukjZMKenWVvKsh6inR44bdG%2BqZGyKGgmMPjM%2BsIGOqUBqdrQKIeJPRO5U%2FC2BFReinXA%2BcCTwEsBYvCA4QthIaBJOtIbpIOJFMCxt3%2Bj1CpHIR5EkBTrhx%2Fmt%2FNcCcX8vcHh9ZmVFGWfPCYWVlMiJEg1Pp70mlY2b4q6MZ%2F%2FsbeLZANKERigztytUi4hvzS1Bo%2F1YqFUcGucOZRuqs5wtAKvylB6BCJSREPCNJy0Jf3gELh3IJKfDnW7tZ3vNzka%2FOlYYTXR&X-Amz-Signature=ac9f36b3241538067dd723dfd7a9f77be5fd70da44393f3563c3d9394fac1272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXA2WCC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFdhJYvb98aXX49ITPxOUvWXAbRRRxMyDronWpElJ8udAiEAnXdfPiJlaVZkPp78nKwZSAvRk4t2Nbs9IA9y0HqoRzIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHGxo8TVItqWRb%2BB%2BircA1tZ2pz0erw6KitXR%2F9BVJhL2Ukf1kTjE9R1sR2rftZZnBx1AarGAC%2FBfWOTP4O%2B1ZgksdNOWYKoSsflnRe0XYtYZbI1e4CsdSM5oqHKkAFdyxnr2PkQXjr0p6ozrJNLoTc4iEP56kj4fRaXR4MXldlVrOh4HZ2L6g3%2FXyYm6DxLGufvD7%2BlO%2FPeXax1vwFvqFD9zr2Ej2QEPeDnjrb%2BAtIhTxGHrLbc%2B9IxvsMBf9T4UuxfKNzai52%2BQ7ROOFa0DJ%2BE%2FXWWHwhBemyWBiGl9%2FjDbHveNI3%2BbgHMAcllCtX7Fp9wavKmnwR2eYlzD26lT06kSnBlxk72grV7xw3h4QAmPIc74RkOk6Lm7M317op%2FMzhIb32EEUCZAOZIcBxBfwtR1%2FBJuU9siMspbH0kCJTBEcGTDQIN8GNGWtgrBgMMluC664P9y8zi1%2BKy2XIZy5cxNyeOumejyK5hIZjjCmLbS3t3mBNG4Ll6gOyyCzdwXrKg8WdhWoBTI8NTClWfzw5rg4G7KYGXzxDeAB1QkNqf1Wu9gpKwiGeU9PNRdNiiK4rxsLRIWDrcR9eP6G1GDgKrbDtrIjzF9owQQuFY9Tr1Uy5JukjZMKenWVvKsh6inR44bdG%2BqZGyKGgmMPjM%2BsIGOqUBqdrQKIeJPRO5U%2FC2BFReinXA%2BcCTwEsBYvCA4QthIaBJOtIbpIOJFMCxt3%2Bj1CpHIR5EkBTrhx%2Fmt%2FNcCcX8vcHh9ZmVFGWfPCYWVlMiJEg1Pp70mlY2b4q6MZ%2F%2FsbeLZANKERigztytUi4hvzS1Bo%2F1YqFUcGucOZRuqs5wtAKvylB6BCJSREPCNJy0Jf3gELh3IJKfDnW7tZ3vNzka%2FOlYYTXR&X-Amz-Signature=915c1e97090c10eb1dd5c96fe47bc31b87bebf095bdfbfea69226afbc0643e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXA2WCC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFdhJYvb98aXX49ITPxOUvWXAbRRRxMyDronWpElJ8udAiEAnXdfPiJlaVZkPp78nKwZSAvRk4t2Nbs9IA9y0HqoRzIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHGxo8TVItqWRb%2BB%2BircA1tZ2pz0erw6KitXR%2F9BVJhL2Ukf1kTjE9R1sR2rftZZnBx1AarGAC%2FBfWOTP4O%2B1ZgksdNOWYKoSsflnRe0XYtYZbI1e4CsdSM5oqHKkAFdyxnr2PkQXjr0p6ozrJNLoTc4iEP56kj4fRaXR4MXldlVrOh4HZ2L6g3%2FXyYm6DxLGufvD7%2BlO%2FPeXax1vwFvqFD9zr2Ej2QEPeDnjrb%2BAtIhTxGHrLbc%2B9IxvsMBf9T4UuxfKNzai52%2BQ7ROOFa0DJ%2BE%2FXWWHwhBemyWBiGl9%2FjDbHveNI3%2BbgHMAcllCtX7Fp9wavKmnwR2eYlzD26lT06kSnBlxk72grV7xw3h4QAmPIc74RkOk6Lm7M317op%2FMzhIb32EEUCZAOZIcBxBfwtR1%2FBJuU9siMspbH0kCJTBEcGTDQIN8GNGWtgrBgMMluC664P9y8zi1%2BKy2XIZy5cxNyeOumejyK5hIZjjCmLbS3t3mBNG4Ll6gOyyCzdwXrKg8WdhWoBTI8NTClWfzw5rg4G7KYGXzxDeAB1QkNqf1Wu9gpKwiGeU9PNRdNiiK4rxsLRIWDrcR9eP6G1GDgKrbDtrIjzF9owQQuFY9Tr1Uy5JukjZMKenWVvKsh6inR44bdG%2BqZGyKGgmMPjM%2BsIGOqUBqdrQKIeJPRO5U%2FC2BFReinXA%2BcCTwEsBYvCA4QthIaBJOtIbpIOJFMCxt3%2Bj1CpHIR5EkBTrhx%2Fmt%2FNcCcX8vcHh9ZmVFGWfPCYWVlMiJEg1Pp70mlY2b4q6MZ%2F%2FsbeLZANKERigztytUi4hvzS1Bo%2F1YqFUcGucOZRuqs5wtAKvylB6BCJSREPCNJy0Jf3gELh3IJKfDnW7tZ3vNzka%2FOlYYTXR&X-Amz-Signature=0f0a3e8d99ff556d1a3f98057a074bda3b2f02a3f7e418d60c612cbf5f63712e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXA2WCC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFdhJYvb98aXX49ITPxOUvWXAbRRRxMyDronWpElJ8udAiEAnXdfPiJlaVZkPp78nKwZSAvRk4t2Nbs9IA9y0HqoRzIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHGxo8TVItqWRb%2BB%2BircA1tZ2pz0erw6KitXR%2F9BVJhL2Ukf1kTjE9R1sR2rftZZnBx1AarGAC%2FBfWOTP4O%2B1ZgksdNOWYKoSsflnRe0XYtYZbI1e4CsdSM5oqHKkAFdyxnr2PkQXjr0p6ozrJNLoTc4iEP56kj4fRaXR4MXldlVrOh4HZ2L6g3%2FXyYm6DxLGufvD7%2BlO%2FPeXax1vwFvqFD9zr2Ej2QEPeDnjrb%2BAtIhTxGHrLbc%2B9IxvsMBf9T4UuxfKNzai52%2BQ7ROOFa0DJ%2BE%2FXWWHwhBemyWBiGl9%2FjDbHveNI3%2BbgHMAcllCtX7Fp9wavKmnwR2eYlzD26lT06kSnBlxk72grV7xw3h4QAmPIc74RkOk6Lm7M317op%2FMzhIb32EEUCZAOZIcBxBfwtR1%2FBJuU9siMspbH0kCJTBEcGTDQIN8GNGWtgrBgMMluC664P9y8zi1%2BKy2XIZy5cxNyeOumejyK5hIZjjCmLbS3t3mBNG4Ll6gOyyCzdwXrKg8WdhWoBTI8NTClWfzw5rg4G7KYGXzxDeAB1QkNqf1Wu9gpKwiGeU9PNRdNiiK4rxsLRIWDrcR9eP6G1GDgKrbDtrIjzF9owQQuFY9Tr1Uy5JukjZMKenWVvKsh6inR44bdG%2BqZGyKGgmMPjM%2BsIGOqUBqdrQKIeJPRO5U%2FC2BFReinXA%2BcCTwEsBYvCA4QthIaBJOtIbpIOJFMCxt3%2Bj1CpHIR5EkBTrhx%2Fmt%2FNcCcX8vcHh9ZmVFGWfPCYWVlMiJEg1Pp70mlY2b4q6MZ%2F%2FsbeLZANKERigztytUi4hvzS1Bo%2F1YqFUcGucOZRuqs5wtAKvylB6BCJSREPCNJy0Jf3gELh3IJKfDnW7tZ3vNzka%2FOlYYTXR&X-Amz-Signature=c3b46e442ff87d03a56d6ab41e4eb3f7e24b4ba36dc327e8307c2bd82fda7a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

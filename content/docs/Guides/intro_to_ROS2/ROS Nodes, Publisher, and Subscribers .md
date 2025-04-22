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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XB7CZGY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCADL5eYv3ioeM38BnTY8sqwX3nSi0BbgDBkn9bxSoo9QIhANIiIYhtAoqZIGmp19k%2Bug4X4mtL2i0nRDd%2BsH9%2B%2FQ2vKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfjBbc25i5STTyzsYq3AMPlG8rtcshmtyYvWq%2BVltNugLbclik628heNBO%2FvME%2BAMUtnVpQcQOXU1DqdjTLFfwtAv4LlYiiTiIJMlMZ9L8U%2F2wkdU67xxQQS%2BRsv7Dv4xzoVRis%2FpTIRwzbSCBXo3Lc3tl3GJLaOlHDZRpe2yQI0pILz1vgoZ%2FqEA5U3Q9Ya9%2BylmIn0o9VyS3ZXLGiGXAb7UiRjBEVFsh0DYJRPoLLhYn%2B1jTRXEzcUWu5CAWjenGz0h0pnFoeuDAf7lSdQLFIdwi3BhU%2BQhNOS9hnN1lRO3J1J3WEb4KHzCtrncki665RFnURlTgn0zsjgt3OGh9BJyDhyDVKH8fs213Ri8mJZkxIGjByVIHf4xYTuGtY9iyOnwQyR%2BDcclE6RU97b%2BVF64wD60%2F%2FarPgm1Ys7dJJoo1rMJk4Ndq1lXTk0Te%2Fq9E1nxhSQFu%2BNzz40zYykcAHAoLAp06UJvjMOcV58o%2BxWfOuIiqpFOIrIUc67acz1ZRcoFq4jN6P83aYZJNrDq2Jp6yElimZi2rU5sq4F0e0tZDjupYZN4FVNqx6NsREU9NOsRy39YAyWtqta58BdT7Cyl9KhgOk%2F%2BVvGnLGb7iTb7ahiQR%2FtOJyTjU7nP2meK6h5kPM4f%2BMT25XDDjo6DABjqkAael6ADMySubE4EmEWqeGYK%2BKqY6AdwOmomrZMPIUg08bQD2VkM0k%2B97Rh%2F9IXeYJXBn6oxqDDMShVFpH6%2FD3NlyylPBrUNPeZDmRc6reWHEEwqVUl0kkIUbUh9ptyhb5z4aiAq5WTSu5RH%2BGqwotMyaicAEOfyMIyeVuhPJWZ3jTekdDpUsd4vj9Ir7R5N5wjNOq2gywQ%2FSvrXf9tjw6mytdn2D&X-Amz-Signature=2d7f1a9486f2cea3bdcb468c5d54e8e9cce3cb12c05b2f824b19c6f4e2893e75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XB7CZGY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCADL5eYv3ioeM38BnTY8sqwX3nSi0BbgDBkn9bxSoo9QIhANIiIYhtAoqZIGmp19k%2Bug4X4mtL2i0nRDd%2BsH9%2B%2FQ2vKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfjBbc25i5STTyzsYq3AMPlG8rtcshmtyYvWq%2BVltNugLbclik628heNBO%2FvME%2BAMUtnVpQcQOXU1DqdjTLFfwtAv4LlYiiTiIJMlMZ9L8U%2F2wkdU67xxQQS%2BRsv7Dv4xzoVRis%2FpTIRwzbSCBXo3Lc3tl3GJLaOlHDZRpe2yQI0pILz1vgoZ%2FqEA5U3Q9Ya9%2BylmIn0o9VyS3ZXLGiGXAb7UiRjBEVFsh0DYJRPoLLhYn%2B1jTRXEzcUWu5CAWjenGz0h0pnFoeuDAf7lSdQLFIdwi3BhU%2BQhNOS9hnN1lRO3J1J3WEb4KHzCtrncki665RFnURlTgn0zsjgt3OGh9BJyDhyDVKH8fs213Ri8mJZkxIGjByVIHf4xYTuGtY9iyOnwQyR%2BDcclE6RU97b%2BVF64wD60%2F%2FarPgm1Ys7dJJoo1rMJk4Ndq1lXTk0Te%2Fq9E1nxhSQFu%2BNzz40zYykcAHAoLAp06UJvjMOcV58o%2BxWfOuIiqpFOIrIUc67acz1ZRcoFq4jN6P83aYZJNrDq2Jp6yElimZi2rU5sq4F0e0tZDjupYZN4FVNqx6NsREU9NOsRy39YAyWtqta58BdT7Cyl9KhgOk%2F%2BVvGnLGb7iTb7ahiQR%2FtOJyTjU7nP2meK6h5kPM4f%2BMT25XDDjo6DABjqkAael6ADMySubE4EmEWqeGYK%2BKqY6AdwOmomrZMPIUg08bQD2VkM0k%2B97Rh%2F9IXeYJXBn6oxqDDMShVFpH6%2FD3NlyylPBrUNPeZDmRc6reWHEEwqVUl0kkIUbUh9ptyhb5z4aiAq5WTSu5RH%2BGqwotMyaicAEOfyMIyeVuhPJWZ3jTekdDpUsd4vj9Ir7R5N5wjNOq2gywQ%2FSvrXf9tjw6mytdn2D&X-Amz-Signature=85440736648c023702c887a5b968a958135c3106737584cd141d05ad4bd51225&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XB7CZGY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCADL5eYv3ioeM38BnTY8sqwX3nSi0BbgDBkn9bxSoo9QIhANIiIYhtAoqZIGmp19k%2Bug4X4mtL2i0nRDd%2BsH9%2B%2FQ2vKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfjBbc25i5STTyzsYq3AMPlG8rtcshmtyYvWq%2BVltNugLbclik628heNBO%2FvME%2BAMUtnVpQcQOXU1DqdjTLFfwtAv4LlYiiTiIJMlMZ9L8U%2F2wkdU67xxQQS%2BRsv7Dv4xzoVRis%2FpTIRwzbSCBXo3Lc3tl3GJLaOlHDZRpe2yQI0pILz1vgoZ%2FqEA5U3Q9Ya9%2BylmIn0o9VyS3ZXLGiGXAb7UiRjBEVFsh0DYJRPoLLhYn%2B1jTRXEzcUWu5CAWjenGz0h0pnFoeuDAf7lSdQLFIdwi3BhU%2BQhNOS9hnN1lRO3J1J3WEb4KHzCtrncki665RFnURlTgn0zsjgt3OGh9BJyDhyDVKH8fs213Ri8mJZkxIGjByVIHf4xYTuGtY9iyOnwQyR%2BDcclE6RU97b%2BVF64wD60%2F%2FarPgm1Ys7dJJoo1rMJk4Ndq1lXTk0Te%2Fq9E1nxhSQFu%2BNzz40zYykcAHAoLAp06UJvjMOcV58o%2BxWfOuIiqpFOIrIUc67acz1ZRcoFq4jN6P83aYZJNrDq2Jp6yElimZi2rU5sq4F0e0tZDjupYZN4FVNqx6NsREU9NOsRy39YAyWtqta58BdT7Cyl9KhgOk%2F%2BVvGnLGb7iTb7ahiQR%2FtOJyTjU7nP2meK6h5kPM4f%2BMT25XDDjo6DABjqkAael6ADMySubE4EmEWqeGYK%2BKqY6AdwOmomrZMPIUg08bQD2VkM0k%2B97Rh%2F9IXeYJXBn6oxqDDMShVFpH6%2FD3NlyylPBrUNPeZDmRc6reWHEEwqVUl0kkIUbUh9ptyhb5z4aiAq5WTSu5RH%2BGqwotMyaicAEOfyMIyeVuhPJWZ3jTekdDpUsd4vj9Ir7R5N5wjNOq2gywQ%2FSvrXf9tjw6mytdn2D&X-Amz-Signature=f5ea0aa6f5a33f6150deb65f944af96789574830d5c2fa4c3812c2407917ea23&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XB7CZGY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCADL5eYv3ioeM38BnTY8sqwX3nSi0BbgDBkn9bxSoo9QIhANIiIYhtAoqZIGmp19k%2Bug4X4mtL2i0nRDd%2BsH9%2B%2FQ2vKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfjBbc25i5STTyzsYq3AMPlG8rtcshmtyYvWq%2BVltNugLbclik628heNBO%2FvME%2BAMUtnVpQcQOXU1DqdjTLFfwtAv4LlYiiTiIJMlMZ9L8U%2F2wkdU67xxQQS%2BRsv7Dv4xzoVRis%2FpTIRwzbSCBXo3Lc3tl3GJLaOlHDZRpe2yQI0pILz1vgoZ%2FqEA5U3Q9Ya9%2BylmIn0o9VyS3ZXLGiGXAb7UiRjBEVFsh0DYJRPoLLhYn%2B1jTRXEzcUWu5CAWjenGz0h0pnFoeuDAf7lSdQLFIdwi3BhU%2BQhNOS9hnN1lRO3J1J3WEb4KHzCtrncki665RFnURlTgn0zsjgt3OGh9BJyDhyDVKH8fs213Ri8mJZkxIGjByVIHf4xYTuGtY9iyOnwQyR%2BDcclE6RU97b%2BVF64wD60%2F%2FarPgm1Ys7dJJoo1rMJk4Ndq1lXTk0Te%2Fq9E1nxhSQFu%2BNzz40zYykcAHAoLAp06UJvjMOcV58o%2BxWfOuIiqpFOIrIUc67acz1ZRcoFq4jN6P83aYZJNrDq2Jp6yElimZi2rU5sq4F0e0tZDjupYZN4FVNqx6NsREU9NOsRy39YAyWtqta58BdT7Cyl9KhgOk%2F%2BVvGnLGb7iTb7ahiQR%2FtOJyTjU7nP2meK6h5kPM4f%2BMT25XDDjo6DABjqkAael6ADMySubE4EmEWqeGYK%2BKqY6AdwOmomrZMPIUg08bQD2VkM0k%2B97Rh%2F9IXeYJXBn6oxqDDMShVFpH6%2FD3NlyylPBrUNPeZDmRc6reWHEEwqVUl0kkIUbUh9ptyhb5z4aiAq5WTSu5RH%2BGqwotMyaicAEOfyMIyeVuhPJWZ3jTekdDpUsd4vj9Ir7R5N5wjNOq2gywQ%2FSvrXf9tjw6mytdn2D&X-Amz-Signature=cbaa1a4b04dabdb181f60ef9d6e66a99d7749acc3f547c0051906b2c5efc705b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XB7CZGY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCADL5eYv3ioeM38BnTY8sqwX3nSi0BbgDBkn9bxSoo9QIhANIiIYhtAoqZIGmp19k%2Bug4X4mtL2i0nRDd%2BsH9%2B%2FQ2vKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfjBbc25i5STTyzsYq3AMPlG8rtcshmtyYvWq%2BVltNugLbclik628heNBO%2FvME%2BAMUtnVpQcQOXU1DqdjTLFfwtAv4LlYiiTiIJMlMZ9L8U%2F2wkdU67xxQQS%2BRsv7Dv4xzoVRis%2FpTIRwzbSCBXo3Lc3tl3GJLaOlHDZRpe2yQI0pILz1vgoZ%2FqEA5U3Q9Ya9%2BylmIn0o9VyS3ZXLGiGXAb7UiRjBEVFsh0DYJRPoLLhYn%2B1jTRXEzcUWu5CAWjenGz0h0pnFoeuDAf7lSdQLFIdwi3BhU%2BQhNOS9hnN1lRO3J1J3WEb4KHzCtrncki665RFnURlTgn0zsjgt3OGh9BJyDhyDVKH8fs213Ri8mJZkxIGjByVIHf4xYTuGtY9iyOnwQyR%2BDcclE6RU97b%2BVF64wD60%2F%2FarPgm1Ys7dJJoo1rMJk4Ndq1lXTk0Te%2Fq9E1nxhSQFu%2BNzz40zYykcAHAoLAp06UJvjMOcV58o%2BxWfOuIiqpFOIrIUc67acz1ZRcoFq4jN6P83aYZJNrDq2Jp6yElimZi2rU5sq4F0e0tZDjupYZN4FVNqx6NsREU9NOsRy39YAyWtqta58BdT7Cyl9KhgOk%2F%2BVvGnLGb7iTb7ahiQR%2FtOJyTjU7nP2meK6h5kPM4f%2BMT25XDDjo6DABjqkAael6ADMySubE4EmEWqeGYK%2BKqY6AdwOmomrZMPIUg08bQD2VkM0k%2B97Rh%2F9IXeYJXBn6oxqDDMShVFpH6%2FD3NlyylPBrUNPeZDmRc6reWHEEwqVUl0kkIUbUh9ptyhb5z4aiAq5WTSu5RH%2BGqwotMyaicAEOfyMIyeVuhPJWZ3jTekdDpUsd4vj9Ir7R5N5wjNOq2gywQ%2FSvrXf9tjw6mytdn2D&X-Amz-Signature=8aa1bcd8a075865efdcbc5ca6264ded177803b1c0b42b941b35df02ba05fac7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XB7CZGY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCADL5eYv3ioeM38BnTY8sqwX3nSi0BbgDBkn9bxSoo9QIhANIiIYhtAoqZIGmp19k%2Bug4X4mtL2i0nRDd%2BsH9%2B%2FQ2vKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfjBbc25i5STTyzsYq3AMPlG8rtcshmtyYvWq%2BVltNugLbclik628heNBO%2FvME%2BAMUtnVpQcQOXU1DqdjTLFfwtAv4LlYiiTiIJMlMZ9L8U%2F2wkdU67xxQQS%2BRsv7Dv4xzoVRis%2FpTIRwzbSCBXo3Lc3tl3GJLaOlHDZRpe2yQI0pILz1vgoZ%2FqEA5U3Q9Ya9%2BylmIn0o9VyS3ZXLGiGXAb7UiRjBEVFsh0DYJRPoLLhYn%2B1jTRXEzcUWu5CAWjenGz0h0pnFoeuDAf7lSdQLFIdwi3BhU%2BQhNOS9hnN1lRO3J1J3WEb4KHzCtrncki665RFnURlTgn0zsjgt3OGh9BJyDhyDVKH8fs213Ri8mJZkxIGjByVIHf4xYTuGtY9iyOnwQyR%2BDcclE6RU97b%2BVF64wD60%2F%2FarPgm1Ys7dJJoo1rMJk4Ndq1lXTk0Te%2Fq9E1nxhSQFu%2BNzz40zYykcAHAoLAp06UJvjMOcV58o%2BxWfOuIiqpFOIrIUc67acz1ZRcoFq4jN6P83aYZJNrDq2Jp6yElimZi2rU5sq4F0e0tZDjupYZN4FVNqx6NsREU9NOsRy39YAyWtqta58BdT7Cyl9KhgOk%2F%2BVvGnLGb7iTb7ahiQR%2FtOJyTjU7nP2meK6h5kPM4f%2BMT25XDDjo6DABjqkAael6ADMySubE4EmEWqeGYK%2BKqY6AdwOmomrZMPIUg08bQD2VkM0k%2B97Rh%2F9IXeYJXBn6oxqDDMShVFpH6%2FD3NlyylPBrUNPeZDmRc6reWHEEwqVUl0kkIUbUh9ptyhb5z4aiAq5WTSu5RH%2BGqwotMyaicAEOfyMIyeVuhPJWZ3jTekdDpUsd4vj9Ir7R5N5wjNOq2gywQ%2FSvrXf9tjw6mytdn2D&X-Amz-Signature=230306732f82af52e06e03e30c6c7233077e98b6852f399592c118f9f144a466&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XB7CZGY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCADL5eYv3ioeM38BnTY8sqwX3nSi0BbgDBkn9bxSoo9QIhANIiIYhtAoqZIGmp19k%2Bug4X4mtL2i0nRDd%2BsH9%2B%2FQ2vKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfjBbc25i5STTyzsYq3AMPlG8rtcshmtyYvWq%2BVltNugLbclik628heNBO%2FvME%2BAMUtnVpQcQOXU1DqdjTLFfwtAv4LlYiiTiIJMlMZ9L8U%2F2wkdU67xxQQS%2BRsv7Dv4xzoVRis%2FpTIRwzbSCBXo3Lc3tl3GJLaOlHDZRpe2yQI0pILz1vgoZ%2FqEA5U3Q9Ya9%2BylmIn0o9VyS3ZXLGiGXAb7UiRjBEVFsh0DYJRPoLLhYn%2B1jTRXEzcUWu5CAWjenGz0h0pnFoeuDAf7lSdQLFIdwi3BhU%2BQhNOS9hnN1lRO3J1J3WEb4KHzCtrncki665RFnURlTgn0zsjgt3OGh9BJyDhyDVKH8fs213Ri8mJZkxIGjByVIHf4xYTuGtY9iyOnwQyR%2BDcclE6RU97b%2BVF64wD60%2F%2FarPgm1Ys7dJJoo1rMJk4Ndq1lXTk0Te%2Fq9E1nxhSQFu%2BNzz40zYykcAHAoLAp06UJvjMOcV58o%2BxWfOuIiqpFOIrIUc67acz1ZRcoFq4jN6P83aYZJNrDq2Jp6yElimZi2rU5sq4F0e0tZDjupYZN4FVNqx6NsREU9NOsRy39YAyWtqta58BdT7Cyl9KhgOk%2F%2BVvGnLGb7iTb7ahiQR%2FtOJyTjU7nP2meK6h5kPM4f%2BMT25XDDjo6DABjqkAael6ADMySubE4EmEWqeGYK%2BKqY6AdwOmomrZMPIUg08bQD2VkM0k%2B97Rh%2F9IXeYJXBn6oxqDDMShVFpH6%2FD3NlyylPBrUNPeZDmRc6reWHEEwqVUl0kkIUbUh9ptyhb5z4aiAq5WTSu5RH%2BGqwotMyaicAEOfyMIyeVuhPJWZ3jTekdDpUsd4vj9Ir7R5N5wjNOq2gywQ%2FSvrXf9tjw6mytdn2D&X-Amz-Signature=49d5a14cfd03503a660467f4087e356b82a351b1c520eb38e86abf77086af362&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XB7CZGY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCADL5eYv3ioeM38BnTY8sqwX3nSi0BbgDBkn9bxSoo9QIhANIiIYhtAoqZIGmp19k%2Bug4X4mtL2i0nRDd%2BsH9%2B%2FQ2vKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfjBbc25i5STTyzsYq3AMPlG8rtcshmtyYvWq%2BVltNugLbclik628heNBO%2FvME%2BAMUtnVpQcQOXU1DqdjTLFfwtAv4LlYiiTiIJMlMZ9L8U%2F2wkdU67xxQQS%2BRsv7Dv4xzoVRis%2FpTIRwzbSCBXo3Lc3tl3GJLaOlHDZRpe2yQI0pILz1vgoZ%2FqEA5U3Q9Ya9%2BylmIn0o9VyS3ZXLGiGXAb7UiRjBEVFsh0DYJRPoLLhYn%2B1jTRXEzcUWu5CAWjenGz0h0pnFoeuDAf7lSdQLFIdwi3BhU%2BQhNOS9hnN1lRO3J1J3WEb4KHzCtrncki665RFnURlTgn0zsjgt3OGh9BJyDhyDVKH8fs213Ri8mJZkxIGjByVIHf4xYTuGtY9iyOnwQyR%2BDcclE6RU97b%2BVF64wD60%2F%2FarPgm1Ys7dJJoo1rMJk4Ndq1lXTk0Te%2Fq9E1nxhSQFu%2BNzz40zYykcAHAoLAp06UJvjMOcV58o%2BxWfOuIiqpFOIrIUc67acz1ZRcoFq4jN6P83aYZJNrDq2Jp6yElimZi2rU5sq4F0e0tZDjupYZN4FVNqx6NsREU9NOsRy39YAyWtqta58BdT7Cyl9KhgOk%2F%2BVvGnLGb7iTb7ahiQR%2FtOJyTjU7nP2meK6h5kPM4f%2BMT25XDDjo6DABjqkAael6ADMySubE4EmEWqeGYK%2BKqY6AdwOmomrZMPIUg08bQD2VkM0k%2B97Rh%2F9IXeYJXBn6oxqDDMShVFpH6%2FD3NlyylPBrUNPeZDmRc6reWHEEwqVUl0kkIUbUh9ptyhb5z4aiAq5WTSu5RH%2BGqwotMyaicAEOfyMIyeVuhPJWZ3jTekdDpUsd4vj9Ir7R5N5wjNOq2gywQ%2FSvrXf9tjw6mytdn2D&X-Amz-Signature=594264daf3929b7cb83cafe000798e6a07484625020bc447e16ae99f75f70721&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

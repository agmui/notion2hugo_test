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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QUFGMC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCRO%2Fb6jqCiIUoVYQjxGmzBXYjYj%2BLoq8ByyGal8ee5cgIgV3dyB1Bpui%2Fmw6BLqoYzIMoJZQjNUyn2xkTqhjA4fPoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOU9JzWJEvJ4eFpO%2BircAzKTnheB8qS%2F3TmV2UVV%2BHd5AGQj%2Fu8HT3CySoHIIQfh5buMnjPHEv2QbmhkeMXwUFrBQOGIqkWTYThYlnqr4W0KU8YIk8RQ0h10Wq%2BOatmobT9BdwaQeHMB5aL91clUjIJk1Xhh9mXy92Fc6wRAbgZ3%2FdXBROdyUi2jCU8ujRMGDxLmEgQ5hSJZHrccL9iWEUmCSKcIsT7wgtUJGPSf4xXhsyTv8urVbo1jbzocI4vxP0yeHlotskSc9gFW3VgqAY8ojGyj8sebcb4jqwfLEvhwm%2BO%2BSk6GDy5%2FZ0SKAm5ob2M75sRvCfblcWurEU4PdTGdXjCQoWp1Ve%2BsItAWCdLZ4bheVcAHN6Mafe7h%2BYS3znuO69pBsJuw6ihknKrILHe0vAkhEZaSmdQEWlukxVLnUosmP4scf4PXHwd9nsBd%2B7jXqqS%2BvnVZH3THInbDXrRUPFd%2FyrPPCXefi3E21JG7DFbgb%2BM7qo7mc%2FhviN1qkTlVBUBErJA77A8oVdnYNZXXMOntwKcorRxfqIOdnq6ZWAPt%2FnVhjmRvEXZYijoezKS3tMUmkQrmZcBR8rOmYM09fxu1g%2BdfEiRN6PbgEeBUqhfvauNobAbED18GlzL%2Bvph1ta70HbjIV9ecMPK9nsMGOqUBGms3JcjIOHSq6zxonhqYORpSBsq4DjRYixT6E0a2Nmyq%2FGEvi7QVsyjt1yPiwzdQlZ5THWMm1%2B9usvBEwq9oDpa5LIJdLA0hTHgi2CyUzRPqtR9bkq1F5B30qJFpCQIvMd5RLqk8wle2Zk1ID6WLZiBZEtzUUIC%2BJxACwIGZjrvVvHHaVB3sOR0Ud%2F6Hc8bNh8BN%2FqQuQaCnw%2BbV29bZDkeye7c%2B&X-Amz-Signature=21e990df398ca1c130a666a0f68fe28513ffdbddb7c3d61f017422dc5cadf4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QUFGMC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCRO%2Fb6jqCiIUoVYQjxGmzBXYjYj%2BLoq8ByyGal8ee5cgIgV3dyB1Bpui%2Fmw6BLqoYzIMoJZQjNUyn2xkTqhjA4fPoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOU9JzWJEvJ4eFpO%2BircAzKTnheB8qS%2F3TmV2UVV%2BHd5AGQj%2Fu8HT3CySoHIIQfh5buMnjPHEv2QbmhkeMXwUFrBQOGIqkWTYThYlnqr4W0KU8YIk8RQ0h10Wq%2BOatmobT9BdwaQeHMB5aL91clUjIJk1Xhh9mXy92Fc6wRAbgZ3%2FdXBROdyUi2jCU8ujRMGDxLmEgQ5hSJZHrccL9iWEUmCSKcIsT7wgtUJGPSf4xXhsyTv8urVbo1jbzocI4vxP0yeHlotskSc9gFW3VgqAY8ojGyj8sebcb4jqwfLEvhwm%2BO%2BSk6GDy5%2FZ0SKAm5ob2M75sRvCfblcWurEU4PdTGdXjCQoWp1Ve%2BsItAWCdLZ4bheVcAHN6Mafe7h%2BYS3znuO69pBsJuw6ihknKrILHe0vAkhEZaSmdQEWlukxVLnUosmP4scf4PXHwd9nsBd%2B7jXqqS%2BvnVZH3THInbDXrRUPFd%2FyrPPCXefi3E21JG7DFbgb%2BM7qo7mc%2FhviN1qkTlVBUBErJA77A8oVdnYNZXXMOntwKcorRxfqIOdnq6ZWAPt%2FnVhjmRvEXZYijoezKS3tMUmkQrmZcBR8rOmYM09fxu1g%2BdfEiRN6PbgEeBUqhfvauNobAbED18GlzL%2Bvph1ta70HbjIV9ecMPK9nsMGOqUBGms3JcjIOHSq6zxonhqYORpSBsq4DjRYixT6E0a2Nmyq%2FGEvi7QVsyjt1yPiwzdQlZ5THWMm1%2B9usvBEwq9oDpa5LIJdLA0hTHgi2CyUzRPqtR9bkq1F5B30qJFpCQIvMd5RLqk8wle2Zk1ID6WLZiBZEtzUUIC%2BJxACwIGZjrvVvHHaVB3sOR0Ud%2F6Hc8bNh8BN%2FqQuQaCnw%2BbV29bZDkeye7c%2B&X-Amz-Signature=725c8346bf4c83967acc6c14ab50f03abe2651e21144a0498bca9afd54bd3e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QUFGMC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCRO%2Fb6jqCiIUoVYQjxGmzBXYjYj%2BLoq8ByyGal8ee5cgIgV3dyB1Bpui%2Fmw6BLqoYzIMoJZQjNUyn2xkTqhjA4fPoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOU9JzWJEvJ4eFpO%2BircAzKTnheB8qS%2F3TmV2UVV%2BHd5AGQj%2Fu8HT3CySoHIIQfh5buMnjPHEv2QbmhkeMXwUFrBQOGIqkWTYThYlnqr4W0KU8YIk8RQ0h10Wq%2BOatmobT9BdwaQeHMB5aL91clUjIJk1Xhh9mXy92Fc6wRAbgZ3%2FdXBROdyUi2jCU8ujRMGDxLmEgQ5hSJZHrccL9iWEUmCSKcIsT7wgtUJGPSf4xXhsyTv8urVbo1jbzocI4vxP0yeHlotskSc9gFW3VgqAY8ojGyj8sebcb4jqwfLEvhwm%2BO%2BSk6GDy5%2FZ0SKAm5ob2M75sRvCfblcWurEU4PdTGdXjCQoWp1Ve%2BsItAWCdLZ4bheVcAHN6Mafe7h%2BYS3znuO69pBsJuw6ihknKrILHe0vAkhEZaSmdQEWlukxVLnUosmP4scf4PXHwd9nsBd%2B7jXqqS%2BvnVZH3THInbDXrRUPFd%2FyrPPCXefi3E21JG7DFbgb%2BM7qo7mc%2FhviN1qkTlVBUBErJA77A8oVdnYNZXXMOntwKcorRxfqIOdnq6ZWAPt%2FnVhjmRvEXZYijoezKS3tMUmkQrmZcBR8rOmYM09fxu1g%2BdfEiRN6PbgEeBUqhfvauNobAbED18GlzL%2Bvph1ta70HbjIV9ecMPK9nsMGOqUBGms3JcjIOHSq6zxonhqYORpSBsq4DjRYixT6E0a2Nmyq%2FGEvi7QVsyjt1yPiwzdQlZ5THWMm1%2B9usvBEwq9oDpa5LIJdLA0hTHgi2CyUzRPqtR9bkq1F5B30qJFpCQIvMd5RLqk8wle2Zk1ID6WLZiBZEtzUUIC%2BJxACwIGZjrvVvHHaVB3sOR0Ud%2F6Hc8bNh8BN%2FqQuQaCnw%2BbV29bZDkeye7c%2B&X-Amz-Signature=d79aa67d0af9a69fb33a8cd082414e82a2b912721a4f497a439756892aa724a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QUFGMC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCRO%2Fb6jqCiIUoVYQjxGmzBXYjYj%2BLoq8ByyGal8ee5cgIgV3dyB1Bpui%2Fmw6BLqoYzIMoJZQjNUyn2xkTqhjA4fPoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOU9JzWJEvJ4eFpO%2BircAzKTnheB8qS%2F3TmV2UVV%2BHd5AGQj%2Fu8HT3CySoHIIQfh5buMnjPHEv2QbmhkeMXwUFrBQOGIqkWTYThYlnqr4W0KU8YIk8RQ0h10Wq%2BOatmobT9BdwaQeHMB5aL91clUjIJk1Xhh9mXy92Fc6wRAbgZ3%2FdXBROdyUi2jCU8ujRMGDxLmEgQ5hSJZHrccL9iWEUmCSKcIsT7wgtUJGPSf4xXhsyTv8urVbo1jbzocI4vxP0yeHlotskSc9gFW3VgqAY8ojGyj8sebcb4jqwfLEvhwm%2BO%2BSk6GDy5%2FZ0SKAm5ob2M75sRvCfblcWurEU4PdTGdXjCQoWp1Ve%2BsItAWCdLZ4bheVcAHN6Mafe7h%2BYS3znuO69pBsJuw6ihknKrILHe0vAkhEZaSmdQEWlukxVLnUosmP4scf4PXHwd9nsBd%2B7jXqqS%2BvnVZH3THInbDXrRUPFd%2FyrPPCXefi3E21JG7DFbgb%2BM7qo7mc%2FhviN1qkTlVBUBErJA77A8oVdnYNZXXMOntwKcorRxfqIOdnq6ZWAPt%2FnVhjmRvEXZYijoezKS3tMUmkQrmZcBR8rOmYM09fxu1g%2BdfEiRN6PbgEeBUqhfvauNobAbED18GlzL%2Bvph1ta70HbjIV9ecMPK9nsMGOqUBGms3JcjIOHSq6zxonhqYORpSBsq4DjRYixT6E0a2Nmyq%2FGEvi7QVsyjt1yPiwzdQlZ5THWMm1%2B9usvBEwq9oDpa5LIJdLA0hTHgi2CyUzRPqtR9bkq1F5B30qJFpCQIvMd5RLqk8wle2Zk1ID6WLZiBZEtzUUIC%2BJxACwIGZjrvVvHHaVB3sOR0Ud%2F6Hc8bNh8BN%2FqQuQaCnw%2BbV29bZDkeye7c%2B&X-Amz-Signature=daf4d835cac538c6385013f8718efa2c99c58ad91b1b77ad55bcb9d497f89cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QUFGMC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCRO%2Fb6jqCiIUoVYQjxGmzBXYjYj%2BLoq8ByyGal8ee5cgIgV3dyB1Bpui%2Fmw6BLqoYzIMoJZQjNUyn2xkTqhjA4fPoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOU9JzWJEvJ4eFpO%2BircAzKTnheB8qS%2F3TmV2UVV%2BHd5AGQj%2Fu8HT3CySoHIIQfh5buMnjPHEv2QbmhkeMXwUFrBQOGIqkWTYThYlnqr4W0KU8YIk8RQ0h10Wq%2BOatmobT9BdwaQeHMB5aL91clUjIJk1Xhh9mXy92Fc6wRAbgZ3%2FdXBROdyUi2jCU8ujRMGDxLmEgQ5hSJZHrccL9iWEUmCSKcIsT7wgtUJGPSf4xXhsyTv8urVbo1jbzocI4vxP0yeHlotskSc9gFW3VgqAY8ojGyj8sebcb4jqwfLEvhwm%2BO%2BSk6GDy5%2FZ0SKAm5ob2M75sRvCfblcWurEU4PdTGdXjCQoWp1Ve%2BsItAWCdLZ4bheVcAHN6Mafe7h%2BYS3znuO69pBsJuw6ihknKrILHe0vAkhEZaSmdQEWlukxVLnUosmP4scf4PXHwd9nsBd%2B7jXqqS%2BvnVZH3THInbDXrRUPFd%2FyrPPCXefi3E21JG7DFbgb%2BM7qo7mc%2FhviN1qkTlVBUBErJA77A8oVdnYNZXXMOntwKcorRxfqIOdnq6ZWAPt%2FnVhjmRvEXZYijoezKS3tMUmkQrmZcBR8rOmYM09fxu1g%2BdfEiRN6PbgEeBUqhfvauNobAbED18GlzL%2Bvph1ta70HbjIV9ecMPK9nsMGOqUBGms3JcjIOHSq6zxonhqYORpSBsq4DjRYixT6E0a2Nmyq%2FGEvi7QVsyjt1yPiwzdQlZ5THWMm1%2B9usvBEwq9oDpa5LIJdLA0hTHgi2CyUzRPqtR9bkq1F5B30qJFpCQIvMd5RLqk8wle2Zk1ID6WLZiBZEtzUUIC%2BJxACwIGZjrvVvHHaVB3sOR0Ud%2F6Hc8bNh8BN%2FqQuQaCnw%2BbV29bZDkeye7c%2B&X-Amz-Signature=6df7f7696f773c67ece3d32227737a1b464039bd723bc643f8013a92361c8181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QUFGMC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCRO%2Fb6jqCiIUoVYQjxGmzBXYjYj%2BLoq8ByyGal8ee5cgIgV3dyB1Bpui%2Fmw6BLqoYzIMoJZQjNUyn2xkTqhjA4fPoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOU9JzWJEvJ4eFpO%2BircAzKTnheB8qS%2F3TmV2UVV%2BHd5AGQj%2Fu8HT3CySoHIIQfh5buMnjPHEv2QbmhkeMXwUFrBQOGIqkWTYThYlnqr4W0KU8YIk8RQ0h10Wq%2BOatmobT9BdwaQeHMB5aL91clUjIJk1Xhh9mXy92Fc6wRAbgZ3%2FdXBROdyUi2jCU8ujRMGDxLmEgQ5hSJZHrccL9iWEUmCSKcIsT7wgtUJGPSf4xXhsyTv8urVbo1jbzocI4vxP0yeHlotskSc9gFW3VgqAY8ojGyj8sebcb4jqwfLEvhwm%2BO%2BSk6GDy5%2FZ0SKAm5ob2M75sRvCfblcWurEU4PdTGdXjCQoWp1Ve%2BsItAWCdLZ4bheVcAHN6Mafe7h%2BYS3znuO69pBsJuw6ihknKrILHe0vAkhEZaSmdQEWlukxVLnUosmP4scf4PXHwd9nsBd%2B7jXqqS%2BvnVZH3THInbDXrRUPFd%2FyrPPCXefi3E21JG7DFbgb%2BM7qo7mc%2FhviN1qkTlVBUBErJA77A8oVdnYNZXXMOntwKcorRxfqIOdnq6ZWAPt%2FnVhjmRvEXZYijoezKS3tMUmkQrmZcBR8rOmYM09fxu1g%2BdfEiRN6PbgEeBUqhfvauNobAbED18GlzL%2Bvph1ta70HbjIV9ecMPK9nsMGOqUBGms3JcjIOHSq6zxonhqYORpSBsq4DjRYixT6E0a2Nmyq%2FGEvi7QVsyjt1yPiwzdQlZ5THWMm1%2B9usvBEwq9oDpa5LIJdLA0hTHgi2CyUzRPqtR9bkq1F5B30qJFpCQIvMd5RLqk8wle2Zk1ID6WLZiBZEtzUUIC%2BJxACwIGZjrvVvHHaVB3sOR0Ud%2F6Hc8bNh8BN%2FqQuQaCnw%2BbV29bZDkeye7c%2B&X-Amz-Signature=60333a8153311c027fda29d36a07e0ef71e2a012b3c122cf1dd861b521cf7228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QUFGMC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCRO%2Fb6jqCiIUoVYQjxGmzBXYjYj%2BLoq8ByyGal8ee5cgIgV3dyB1Bpui%2Fmw6BLqoYzIMoJZQjNUyn2xkTqhjA4fPoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOU9JzWJEvJ4eFpO%2BircAzKTnheB8qS%2F3TmV2UVV%2BHd5AGQj%2Fu8HT3CySoHIIQfh5buMnjPHEv2QbmhkeMXwUFrBQOGIqkWTYThYlnqr4W0KU8YIk8RQ0h10Wq%2BOatmobT9BdwaQeHMB5aL91clUjIJk1Xhh9mXy92Fc6wRAbgZ3%2FdXBROdyUi2jCU8ujRMGDxLmEgQ5hSJZHrccL9iWEUmCSKcIsT7wgtUJGPSf4xXhsyTv8urVbo1jbzocI4vxP0yeHlotskSc9gFW3VgqAY8ojGyj8sebcb4jqwfLEvhwm%2BO%2BSk6GDy5%2FZ0SKAm5ob2M75sRvCfblcWurEU4PdTGdXjCQoWp1Ve%2BsItAWCdLZ4bheVcAHN6Mafe7h%2BYS3znuO69pBsJuw6ihknKrILHe0vAkhEZaSmdQEWlukxVLnUosmP4scf4PXHwd9nsBd%2B7jXqqS%2BvnVZH3THInbDXrRUPFd%2FyrPPCXefi3E21JG7DFbgb%2BM7qo7mc%2FhviN1qkTlVBUBErJA77A8oVdnYNZXXMOntwKcorRxfqIOdnq6ZWAPt%2FnVhjmRvEXZYijoezKS3tMUmkQrmZcBR8rOmYM09fxu1g%2BdfEiRN6PbgEeBUqhfvauNobAbED18GlzL%2Bvph1ta70HbjIV9ecMPK9nsMGOqUBGms3JcjIOHSq6zxonhqYORpSBsq4DjRYixT6E0a2Nmyq%2FGEvi7QVsyjt1yPiwzdQlZ5THWMm1%2B9usvBEwq9oDpa5LIJdLA0hTHgi2CyUzRPqtR9bkq1F5B30qJFpCQIvMd5RLqk8wle2Zk1ID6WLZiBZEtzUUIC%2BJxACwIGZjrvVvHHaVB3sOR0Ud%2F6Hc8bNh8BN%2FqQuQaCnw%2BbV29bZDkeye7c%2B&X-Amz-Signature=7e6a7b75990b18870dbe1ad589532572ad75ef4a5a90f6dba8fb632d1a16e8e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QUFGMC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCRO%2Fb6jqCiIUoVYQjxGmzBXYjYj%2BLoq8ByyGal8ee5cgIgV3dyB1Bpui%2Fmw6BLqoYzIMoJZQjNUyn2xkTqhjA4fPoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOU9JzWJEvJ4eFpO%2BircAzKTnheB8qS%2F3TmV2UVV%2BHd5AGQj%2Fu8HT3CySoHIIQfh5buMnjPHEv2QbmhkeMXwUFrBQOGIqkWTYThYlnqr4W0KU8YIk8RQ0h10Wq%2BOatmobT9BdwaQeHMB5aL91clUjIJk1Xhh9mXy92Fc6wRAbgZ3%2FdXBROdyUi2jCU8ujRMGDxLmEgQ5hSJZHrccL9iWEUmCSKcIsT7wgtUJGPSf4xXhsyTv8urVbo1jbzocI4vxP0yeHlotskSc9gFW3VgqAY8ojGyj8sebcb4jqwfLEvhwm%2BO%2BSk6GDy5%2FZ0SKAm5ob2M75sRvCfblcWurEU4PdTGdXjCQoWp1Ve%2BsItAWCdLZ4bheVcAHN6Mafe7h%2BYS3znuO69pBsJuw6ihknKrILHe0vAkhEZaSmdQEWlukxVLnUosmP4scf4PXHwd9nsBd%2B7jXqqS%2BvnVZH3THInbDXrRUPFd%2FyrPPCXefi3E21JG7DFbgb%2BM7qo7mc%2FhviN1qkTlVBUBErJA77A8oVdnYNZXXMOntwKcorRxfqIOdnq6ZWAPt%2FnVhjmRvEXZYijoezKS3tMUmkQrmZcBR8rOmYM09fxu1g%2BdfEiRN6PbgEeBUqhfvauNobAbED18GlzL%2Bvph1ta70HbjIV9ecMPK9nsMGOqUBGms3JcjIOHSq6zxonhqYORpSBsq4DjRYixT6E0a2Nmyq%2FGEvi7QVsyjt1yPiwzdQlZ5THWMm1%2B9usvBEwq9oDpa5LIJdLA0hTHgi2CyUzRPqtR9bkq1F5B30qJFpCQIvMd5RLqk8wle2Zk1ID6WLZiBZEtzUUIC%2BJxACwIGZjrvVvHHaVB3sOR0Ud%2F6Hc8bNh8BN%2FqQuQaCnw%2BbV29bZDkeye7c%2B&X-Amz-Signature=800bb57c41db00d49f07ce3fe09aa8eaf8a5a25f8394a6d9b53bb1e10bb31d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

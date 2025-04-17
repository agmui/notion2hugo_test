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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJJSMLE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdPJ10iXtWM4fhAw6H1EVAwVLd1XSgh5Ytf1PgWYqMjgIgPKVLue%2BiLmqfggho7HfIKMxymzEqqKV093C8odfwE3Mq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBEBuC%2BuXk5dOBUz4yrcAxKxvEmcsnoZOMzAsQqp3Y%2BWXWD67uc8MIKliUm8vXJ0O898RCbMujmVIoi3o18rF50%2BNx7q32jL8Vw9jzgvtgKLuTCxpr3vXP5nNTtc9rLOEeHK6JnvfYFsvKsj2DdVxuWlmKD22CoqISEG4uZFoMrMGYaMI7SMtoYYqsPWF1Kv52Ga1MO3a5hG3O5DD9k%2FHMHOBvZ0ZwJBMCugSumhk6eQ3VS55h%2FzqdDZZIn538GteU7SgFm0MO%2FEpv9d13Y6empxfMHqENQPGb5W5bHsv5puREfTfclMtf6XS0JmcE3do46t73wV5eU%2FY5kN3rBVMNIh0qL1nIC0FEKI6NC%2FEfJqY06e2s1YtekYSBlpXXaYsJuFLESysaAkxwumlMyZJtAPb5G%2FUsxWaJJ2TLGMKwjpqIBalJm6f7BshstaT6f5J8ZFa5Or3bli2FwXdYVi2SDbd%2FdQYK8WbGyjn2Kvz%2B%2FwTU%2FBlVFQV829GJe675eUxhUAmy%2BWcOaGwDswwcNxIPZOGZwfByjfFRhBQHtsfTxummExoQ75EViuajhnWCf4RCAGuVGu2levdAgZhUl4fUeTda%2F9H9t6da0wFbc24yN2VWkwBNFWaxdmpm0rwfynlOdQTDkJba62k%2FPVMJaHhsAGOqUBBZ%2BUyDZLP8Xa8s9aW4%2F%2BsH9mPYd5RMNzxHDhnd6zoOJH15BQO9RSpFszoon6jBFe2FjCtTHKIULDRaC5dk%2FMtndLBpdjaEa8ZCEdTvZ7hh2CkPod%2Bow1ffzaK3JxecmhAgbJPqqdKo7bgU2EMtld%2B2%2FFNhd5Xpz2j%2Bqav5QUhQAoSkPKMQUZlbQWN20S2EABC%2Fgb4yXTn2Gb6GdKqmFZUhclAgZL&X-Amz-Signature=51b64250e2884395e6c607598137473951d1697aa208004b64a6de1658e3a295&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJJSMLE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdPJ10iXtWM4fhAw6H1EVAwVLd1XSgh5Ytf1PgWYqMjgIgPKVLue%2BiLmqfggho7HfIKMxymzEqqKV093C8odfwE3Mq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBEBuC%2BuXk5dOBUz4yrcAxKxvEmcsnoZOMzAsQqp3Y%2BWXWD67uc8MIKliUm8vXJ0O898RCbMujmVIoi3o18rF50%2BNx7q32jL8Vw9jzgvtgKLuTCxpr3vXP5nNTtc9rLOEeHK6JnvfYFsvKsj2DdVxuWlmKD22CoqISEG4uZFoMrMGYaMI7SMtoYYqsPWF1Kv52Ga1MO3a5hG3O5DD9k%2FHMHOBvZ0ZwJBMCugSumhk6eQ3VS55h%2FzqdDZZIn538GteU7SgFm0MO%2FEpv9d13Y6empxfMHqENQPGb5W5bHsv5puREfTfclMtf6XS0JmcE3do46t73wV5eU%2FY5kN3rBVMNIh0qL1nIC0FEKI6NC%2FEfJqY06e2s1YtekYSBlpXXaYsJuFLESysaAkxwumlMyZJtAPb5G%2FUsxWaJJ2TLGMKwjpqIBalJm6f7BshstaT6f5J8ZFa5Or3bli2FwXdYVi2SDbd%2FdQYK8WbGyjn2Kvz%2B%2FwTU%2FBlVFQV829GJe675eUxhUAmy%2BWcOaGwDswwcNxIPZOGZwfByjfFRhBQHtsfTxummExoQ75EViuajhnWCf4RCAGuVGu2levdAgZhUl4fUeTda%2F9H9t6da0wFbc24yN2VWkwBNFWaxdmpm0rwfynlOdQTDkJba62k%2FPVMJaHhsAGOqUBBZ%2BUyDZLP8Xa8s9aW4%2F%2BsH9mPYd5RMNzxHDhnd6zoOJH15BQO9RSpFszoon6jBFe2FjCtTHKIULDRaC5dk%2FMtndLBpdjaEa8ZCEdTvZ7hh2CkPod%2Bow1ffzaK3JxecmhAgbJPqqdKo7bgU2EMtld%2B2%2FFNhd5Xpz2j%2Bqav5QUhQAoSkPKMQUZlbQWN20S2EABC%2Fgb4yXTn2Gb6GdKqmFZUhclAgZL&X-Amz-Signature=68e9e25ec0c5f4f4c92442ebc8632692e518ab67af282a452b67ae998c759aac&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJJSMLE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdPJ10iXtWM4fhAw6H1EVAwVLd1XSgh5Ytf1PgWYqMjgIgPKVLue%2BiLmqfggho7HfIKMxymzEqqKV093C8odfwE3Mq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBEBuC%2BuXk5dOBUz4yrcAxKxvEmcsnoZOMzAsQqp3Y%2BWXWD67uc8MIKliUm8vXJ0O898RCbMujmVIoi3o18rF50%2BNx7q32jL8Vw9jzgvtgKLuTCxpr3vXP5nNTtc9rLOEeHK6JnvfYFsvKsj2DdVxuWlmKD22CoqISEG4uZFoMrMGYaMI7SMtoYYqsPWF1Kv52Ga1MO3a5hG3O5DD9k%2FHMHOBvZ0ZwJBMCugSumhk6eQ3VS55h%2FzqdDZZIn538GteU7SgFm0MO%2FEpv9d13Y6empxfMHqENQPGb5W5bHsv5puREfTfclMtf6XS0JmcE3do46t73wV5eU%2FY5kN3rBVMNIh0qL1nIC0FEKI6NC%2FEfJqY06e2s1YtekYSBlpXXaYsJuFLESysaAkxwumlMyZJtAPb5G%2FUsxWaJJ2TLGMKwjpqIBalJm6f7BshstaT6f5J8ZFa5Or3bli2FwXdYVi2SDbd%2FdQYK8WbGyjn2Kvz%2B%2FwTU%2FBlVFQV829GJe675eUxhUAmy%2BWcOaGwDswwcNxIPZOGZwfByjfFRhBQHtsfTxummExoQ75EViuajhnWCf4RCAGuVGu2levdAgZhUl4fUeTda%2F9H9t6da0wFbc24yN2VWkwBNFWaxdmpm0rwfynlOdQTDkJba62k%2FPVMJaHhsAGOqUBBZ%2BUyDZLP8Xa8s9aW4%2F%2BsH9mPYd5RMNzxHDhnd6zoOJH15BQO9RSpFszoon6jBFe2FjCtTHKIULDRaC5dk%2FMtndLBpdjaEa8ZCEdTvZ7hh2CkPod%2Bow1ffzaK3JxecmhAgbJPqqdKo7bgU2EMtld%2B2%2FFNhd5Xpz2j%2Bqav5QUhQAoSkPKMQUZlbQWN20S2EABC%2Fgb4yXTn2Gb6GdKqmFZUhclAgZL&X-Amz-Signature=e65bd977a30c0232a918b73caa1bcd3ea16d0a110e60d0d13fe0eb19b4554f75&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJJSMLE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdPJ10iXtWM4fhAw6H1EVAwVLd1XSgh5Ytf1PgWYqMjgIgPKVLue%2BiLmqfggho7HfIKMxymzEqqKV093C8odfwE3Mq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBEBuC%2BuXk5dOBUz4yrcAxKxvEmcsnoZOMzAsQqp3Y%2BWXWD67uc8MIKliUm8vXJ0O898RCbMujmVIoi3o18rF50%2BNx7q32jL8Vw9jzgvtgKLuTCxpr3vXP5nNTtc9rLOEeHK6JnvfYFsvKsj2DdVxuWlmKD22CoqISEG4uZFoMrMGYaMI7SMtoYYqsPWF1Kv52Ga1MO3a5hG3O5DD9k%2FHMHOBvZ0ZwJBMCugSumhk6eQ3VS55h%2FzqdDZZIn538GteU7SgFm0MO%2FEpv9d13Y6empxfMHqENQPGb5W5bHsv5puREfTfclMtf6XS0JmcE3do46t73wV5eU%2FY5kN3rBVMNIh0qL1nIC0FEKI6NC%2FEfJqY06e2s1YtekYSBlpXXaYsJuFLESysaAkxwumlMyZJtAPb5G%2FUsxWaJJ2TLGMKwjpqIBalJm6f7BshstaT6f5J8ZFa5Or3bli2FwXdYVi2SDbd%2FdQYK8WbGyjn2Kvz%2B%2FwTU%2FBlVFQV829GJe675eUxhUAmy%2BWcOaGwDswwcNxIPZOGZwfByjfFRhBQHtsfTxummExoQ75EViuajhnWCf4RCAGuVGu2levdAgZhUl4fUeTda%2F9H9t6da0wFbc24yN2VWkwBNFWaxdmpm0rwfynlOdQTDkJba62k%2FPVMJaHhsAGOqUBBZ%2BUyDZLP8Xa8s9aW4%2F%2BsH9mPYd5RMNzxHDhnd6zoOJH15BQO9RSpFszoon6jBFe2FjCtTHKIULDRaC5dk%2FMtndLBpdjaEa8ZCEdTvZ7hh2CkPod%2Bow1ffzaK3JxecmhAgbJPqqdKo7bgU2EMtld%2B2%2FFNhd5Xpz2j%2Bqav5QUhQAoSkPKMQUZlbQWN20S2EABC%2Fgb4yXTn2Gb6GdKqmFZUhclAgZL&X-Amz-Signature=26f319f06dab6ee145c525649088640c8d1009917d9421945cdf70c49e978f11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJJSMLE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdPJ10iXtWM4fhAw6H1EVAwVLd1XSgh5Ytf1PgWYqMjgIgPKVLue%2BiLmqfggho7HfIKMxymzEqqKV093C8odfwE3Mq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBEBuC%2BuXk5dOBUz4yrcAxKxvEmcsnoZOMzAsQqp3Y%2BWXWD67uc8MIKliUm8vXJ0O898RCbMujmVIoi3o18rF50%2BNx7q32jL8Vw9jzgvtgKLuTCxpr3vXP5nNTtc9rLOEeHK6JnvfYFsvKsj2DdVxuWlmKD22CoqISEG4uZFoMrMGYaMI7SMtoYYqsPWF1Kv52Ga1MO3a5hG3O5DD9k%2FHMHOBvZ0ZwJBMCugSumhk6eQ3VS55h%2FzqdDZZIn538GteU7SgFm0MO%2FEpv9d13Y6empxfMHqENQPGb5W5bHsv5puREfTfclMtf6XS0JmcE3do46t73wV5eU%2FY5kN3rBVMNIh0qL1nIC0FEKI6NC%2FEfJqY06e2s1YtekYSBlpXXaYsJuFLESysaAkxwumlMyZJtAPb5G%2FUsxWaJJ2TLGMKwjpqIBalJm6f7BshstaT6f5J8ZFa5Or3bli2FwXdYVi2SDbd%2FdQYK8WbGyjn2Kvz%2B%2FwTU%2FBlVFQV829GJe675eUxhUAmy%2BWcOaGwDswwcNxIPZOGZwfByjfFRhBQHtsfTxummExoQ75EViuajhnWCf4RCAGuVGu2levdAgZhUl4fUeTda%2F9H9t6da0wFbc24yN2VWkwBNFWaxdmpm0rwfynlOdQTDkJba62k%2FPVMJaHhsAGOqUBBZ%2BUyDZLP8Xa8s9aW4%2F%2BsH9mPYd5RMNzxHDhnd6zoOJH15BQO9RSpFszoon6jBFe2FjCtTHKIULDRaC5dk%2FMtndLBpdjaEa8ZCEdTvZ7hh2CkPod%2Bow1ffzaK3JxecmhAgbJPqqdKo7bgU2EMtld%2B2%2FFNhd5Xpz2j%2Bqav5QUhQAoSkPKMQUZlbQWN20S2EABC%2Fgb4yXTn2Gb6GdKqmFZUhclAgZL&X-Amz-Signature=c11edae0b9341ba32d9eef72ad485332ca3f00b790e681efa76ae3ee06417311&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJJSMLE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdPJ10iXtWM4fhAw6H1EVAwVLd1XSgh5Ytf1PgWYqMjgIgPKVLue%2BiLmqfggho7HfIKMxymzEqqKV093C8odfwE3Mq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBEBuC%2BuXk5dOBUz4yrcAxKxvEmcsnoZOMzAsQqp3Y%2BWXWD67uc8MIKliUm8vXJ0O898RCbMujmVIoi3o18rF50%2BNx7q32jL8Vw9jzgvtgKLuTCxpr3vXP5nNTtc9rLOEeHK6JnvfYFsvKsj2DdVxuWlmKD22CoqISEG4uZFoMrMGYaMI7SMtoYYqsPWF1Kv52Ga1MO3a5hG3O5DD9k%2FHMHOBvZ0ZwJBMCugSumhk6eQ3VS55h%2FzqdDZZIn538GteU7SgFm0MO%2FEpv9d13Y6empxfMHqENQPGb5W5bHsv5puREfTfclMtf6XS0JmcE3do46t73wV5eU%2FY5kN3rBVMNIh0qL1nIC0FEKI6NC%2FEfJqY06e2s1YtekYSBlpXXaYsJuFLESysaAkxwumlMyZJtAPb5G%2FUsxWaJJ2TLGMKwjpqIBalJm6f7BshstaT6f5J8ZFa5Or3bli2FwXdYVi2SDbd%2FdQYK8WbGyjn2Kvz%2B%2FwTU%2FBlVFQV829GJe675eUxhUAmy%2BWcOaGwDswwcNxIPZOGZwfByjfFRhBQHtsfTxummExoQ75EViuajhnWCf4RCAGuVGu2levdAgZhUl4fUeTda%2F9H9t6da0wFbc24yN2VWkwBNFWaxdmpm0rwfynlOdQTDkJba62k%2FPVMJaHhsAGOqUBBZ%2BUyDZLP8Xa8s9aW4%2F%2BsH9mPYd5RMNzxHDhnd6zoOJH15BQO9RSpFszoon6jBFe2FjCtTHKIULDRaC5dk%2FMtndLBpdjaEa8ZCEdTvZ7hh2CkPod%2Bow1ffzaK3JxecmhAgbJPqqdKo7bgU2EMtld%2B2%2FFNhd5Xpz2j%2Bqav5QUhQAoSkPKMQUZlbQWN20S2EABC%2Fgb4yXTn2Gb6GdKqmFZUhclAgZL&X-Amz-Signature=82317b9b7d872d8ef731c70963e412c0d357655421021b315b2850b4f00b3e52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJJSMLE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdPJ10iXtWM4fhAw6H1EVAwVLd1XSgh5Ytf1PgWYqMjgIgPKVLue%2BiLmqfggho7HfIKMxymzEqqKV093C8odfwE3Mq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBEBuC%2BuXk5dOBUz4yrcAxKxvEmcsnoZOMzAsQqp3Y%2BWXWD67uc8MIKliUm8vXJ0O898RCbMujmVIoi3o18rF50%2BNx7q32jL8Vw9jzgvtgKLuTCxpr3vXP5nNTtc9rLOEeHK6JnvfYFsvKsj2DdVxuWlmKD22CoqISEG4uZFoMrMGYaMI7SMtoYYqsPWF1Kv52Ga1MO3a5hG3O5DD9k%2FHMHOBvZ0ZwJBMCugSumhk6eQ3VS55h%2FzqdDZZIn538GteU7SgFm0MO%2FEpv9d13Y6empxfMHqENQPGb5W5bHsv5puREfTfclMtf6XS0JmcE3do46t73wV5eU%2FY5kN3rBVMNIh0qL1nIC0FEKI6NC%2FEfJqY06e2s1YtekYSBlpXXaYsJuFLESysaAkxwumlMyZJtAPb5G%2FUsxWaJJ2TLGMKwjpqIBalJm6f7BshstaT6f5J8ZFa5Or3bli2FwXdYVi2SDbd%2FdQYK8WbGyjn2Kvz%2B%2FwTU%2FBlVFQV829GJe675eUxhUAmy%2BWcOaGwDswwcNxIPZOGZwfByjfFRhBQHtsfTxummExoQ75EViuajhnWCf4RCAGuVGu2levdAgZhUl4fUeTda%2F9H9t6da0wFbc24yN2VWkwBNFWaxdmpm0rwfynlOdQTDkJba62k%2FPVMJaHhsAGOqUBBZ%2BUyDZLP8Xa8s9aW4%2F%2BsH9mPYd5RMNzxHDhnd6zoOJH15BQO9RSpFszoon6jBFe2FjCtTHKIULDRaC5dk%2FMtndLBpdjaEa8ZCEdTvZ7hh2CkPod%2Bow1ffzaK3JxecmhAgbJPqqdKo7bgU2EMtld%2B2%2FFNhd5Xpz2j%2Bqav5QUhQAoSkPKMQUZlbQWN20S2EABC%2Fgb4yXTn2Gb6GdKqmFZUhclAgZL&X-Amz-Signature=6fba55c5734e09b6e21ee087446b01f2d822ea54364a1e2de4d6e94b02d7e04a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJJSMLE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdPJ10iXtWM4fhAw6H1EVAwVLd1XSgh5Ytf1PgWYqMjgIgPKVLue%2BiLmqfggho7HfIKMxymzEqqKV093C8odfwE3Mq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBEBuC%2BuXk5dOBUz4yrcAxKxvEmcsnoZOMzAsQqp3Y%2BWXWD67uc8MIKliUm8vXJ0O898RCbMujmVIoi3o18rF50%2BNx7q32jL8Vw9jzgvtgKLuTCxpr3vXP5nNTtc9rLOEeHK6JnvfYFsvKsj2DdVxuWlmKD22CoqISEG4uZFoMrMGYaMI7SMtoYYqsPWF1Kv52Ga1MO3a5hG3O5DD9k%2FHMHOBvZ0ZwJBMCugSumhk6eQ3VS55h%2FzqdDZZIn538GteU7SgFm0MO%2FEpv9d13Y6empxfMHqENQPGb5W5bHsv5puREfTfclMtf6XS0JmcE3do46t73wV5eU%2FY5kN3rBVMNIh0qL1nIC0FEKI6NC%2FEfJqY06e2s1YtekYSBlpXXaYsJuFLESysaAkxwumlMyZJtAPb5G%2FUsxWaJJ2TLGMKwjpqIBalJm6f7BshstaT6f5J8ZFa5Or3bli2FwXdYVi2SDbd%2FdQYK8WbGyjn2Kvz%2B%2FwTU%2FBlVFQV829GJe675eUxhUAmy%2BWcOaGwDswwcNxIPZOGZwfByjfFRhBQHtsfTxummExoQ75EViuajhnWCf4RCAGuVGu2levdAgZhUl4fUeTda%2F9H9t6da0wFbc24yN2VWkwBNFWaxdmpm0rwfynlOdQTDkJba62k%2FPVMJaHhsAGOqUBBZ%2BUyDZLP8Xa8s9aW4%2F%2BsH9mPYd5RMNzxHDhnd6zoOJH15BQO9RSpFszoon6jBFe2FjCtTHKIULDRaC5dk%2FMtndLBpdjaEa8ZCEdTvZ7hh2CkPod%2Bow1ffzaK3JxecmhAgbJPqqdKo7bgU2EMtld%2B2%2FFNhd5Xpz2j%2Bqav5QUhQAoSkPKMQUZlbQWN20S2EABC%2Fgb4yXTn2Gb6GdKqmFZUhclAgZL&X-Amz-Signature=812dd5eaafd1bca6b50cca091c7fd50f3f7ec28dc94fa6ba2030c2dd962238c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

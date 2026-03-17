---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZ74XKZ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEW0zARt3iDAbqBtS9iwmBMZLkAa2wf0jFwzEea376XAAiEAx9Nsf3RrOGPj3pBqeCsDsp7VdN0OlAqirlO6h8aXqzoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfA2ADJdAJ3bB%2BWyrcA2ms%2F3rEff0Zm7VwRH2C8xe1Gi4fv%2BbovMNQ1rbaFkd%2Biw7DZfndodosrp0FgQShqn96wpFuL9a%2Fpvvz%2BBuCIuxlytzRugsGiMQsGl72VMXP7et9eOqLxPVPM4UM9zKi5m12NrnKM98TpgEd7LI6iLBMXmKCy915OeHFUsx44g0l0ebhXycXjKeYLTkeCZSrRtegVq7JCfxkaoIJka2ECHAqr62AHT7sKgUAgM9pWJh2rnqMz0%2Fp7pTI%2BW4KDCOIwTC3XCGUwQYqM%2BADVgfG3huCKv0llWs7kS95zmUp40UL9NPx88Uz8XjKf6qeZY5iGYAWMa%2F6A%2F6x8Jsf%2BvHfRmk%2FyfYjM7L2CKucoca%2FuabBUz%2B0NyoKhACEneJLUQwaMQ6nuGVmvEyo8I3IkKPZyHnQuG3QHJCNmO9ermgAG7PZpKLK0Q%2B6Zni104twKcS2dHQd75x11XJC6jwWhE7QOMmJWq2c8SBNKBOWIjbfj%2Ftgd9KGG40JWjlaaeSbxlM9C73IEXJ%2FLgvuC61IvNJj%2Bidn9gxlkKc2gJl9sNhbTvBbgXQbbVbPFC5Pd9mW%2B4XSChYYqu%2BgMhwP3BfncNllKE9ol5sr2jgfjfvbvjakLG9otJqeszG5yHEh9c%2BMMNPn4s0GOqUBMFxrM3X%2B65IzpLe11lh5%2FhZmOShkwjHVmxVZVy%2BRShD%2F8bWl%2F7NuTE6E1XSMYmokZvn5Sh5%2FH2eqUpq1Iqf%2BqGOG5VYnMckBXJKyD6oTmuGFPtVN%2FTBE4wfA5MplU4xwMHdpeq470k79z5olleeXW23KD1PB49DFnJ9wV1E71Gs9dnQfg5RPkrULN63wv7JcogKssFNY7%2Bn7mMPGA%2FF5mvqaN4FG&X-Amz-Signature=b17c5a05b8897a9941ba6f2ed5cc5c1e713fbc392fd9b8380a0706d60e49f4e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZ74XKZ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEW0zARt3iDAbqBtS9iwmBMZLkAa2wf0jFwzEea376XAAiEAx9Nsf3RrOGPj3pBqeCsDsp7VdN0OlAqirlO6h8aXqzoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfA2ADJdAJ3bB%2BWyrcA2ms%2F3rEff0Zm7VwRH2C8xe1Gi4fv%2BbovMNQ1rbaFkd%2Biw7DZfndodosrp0FgQShqn96wpFuL9a%2Fpvvz%2BBuCIuxlytzRugsGiMQsGl72VMXP7et9eOqLxPVPM4UM9zKi5m12NrnKM98TpgEd7LI6iLBMXmKCy915OeHFUsx44g0l0ebhXycXjKeYLTkeCZSrRtegVq7JCfxkaoIJka2ECHAqr62AHT7sKgUAgM9pWJh2rnqMz0%2Fp7pTI%2BW4KDCOIwTC3XCGUwQYqM%2BADVgfG3huCKv0llWs7kS95zmUp40UL9NPx88Uz8XjKf6qeZY5iGYAWMa%2F6A%2F6x8Jsf%2BvHfRmk%2FyfYjM7L2CKucoca%2FuabBUz%2B0NyoKhACEneJLUQwaMQ6nuGVmvEyo8I3IkKPZyHnQuG3QHJCNmO9ermgAG7PZpKLK0Q%2B6Zni104twKcS2dHQd75x11XJC6jwWhE7QOMmJWq2c8SBNKBOWIjbfj%2Ftgd9KGG40JWjlaaeSbxlM9C73IEXJ%2FLgvuC61IvNJj%2Bidn9gxlkKc2gJl9sNhbTvBbgXQbbVbPFC5Pd9mW%2B4XSChYYqu%2BgMhwP3BfncNllKE9ol5sr2jgfjfvbvjakLG9otJqeszG5yHEh9c%2BMMNPn4s0GOqUBMFxrM3X%2B65IzpLe11lh5%2FhZmOShkwjHVmxVZVy%2BRShD%2F8bWl%2F7NuTE6E1XSMYmokZvn5Sh5%2FH2eqUpq1Iqf%2BqGOG5VYnMckBXJKyD6oTmuGFPtVN%2FTBE4wfA5MplU4xwMHdpeq470k79z5olleeXW23KD1PB49DFnJ9wV1E71Gs9dnQfg5RPkrULN63wv7JcogKssFNY7%2Bn7mMPGA%2FF5mvqaN4FG&X-Amz-Signature=ac365d627ee38a0cfe6b5650257a776376a14f0d2b57c60d6eb3fdc514a58d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZ74XKZ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEW0zARt3iDAbqBtS9iwmBMZLkAa2wf0jFwzEea376XAAiEAx9Nsf3RrOGPj3pBqeCsDsp7VdN0OlAqirlO6h8aXqzoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfA2ADJdAJ3bB%2BWyrcA2ms%2F3rEff0Zm7VwRH2C8xe1Gi4fv%2BbovMNQ1rbaFkd%2Biw7DZfndodosrp0FgQShqn96wpFuL9a%2Fpvvz%2BBuCIuxlytzRugsGiMQsGl72VMXP7et9eOqLxPVPM4UM9zKi5m12NrnKM98TpgEd7LI6iLBMXmKCy915OeHFUsx44g0l0ebhXycXjKeYLTkeCZSrRtegVq7JCfxkaoIJka2ECHAqr62AHT7sKgUAgM9pWJh2rnqMz0%2Fp7pTI%2BW4KDCOIwTC3XCGUwQYqM%2BADVgfG3huCKv0llWs7kS95zmUp40UL9NPx88Uz8XjKf6qeZY5iGYAWMa%2F6A%2F6x8Jsf%2BvHfRmk%2FyfYjM7L2CKucoca%2FuabBUz%2B0NyoKhACEneJLUQwaMQ6nuGVmvEyo8I3IkKPZyHnQuG3QHJCNmO9ermgAG7PZpKLK0Q%2B6Zni104twKcS2dHQd75x11XJC6jwWhE7QOMmJWq2c8SBNKBOWIjbfj%2Ftgd9KGG40JWjlaaeSbxlM9C73IEXJ%2FLgvuC61IvNJj%2Bidn9gxlkKc2gJl9sNhbTvBbgXQbbVbPFC5Pd9mW%2B4XSChYYqu%2BgMhwP3BfncNllKE9ol5sr2jgfjfvbvjakLG9otJqeszG5yHEh9c%2BMMNPn4s0GOqUBMFxrM3X%2B65IzpLe11lh5%2FhZmOShkwjHVmxVZVy%2BRShD%2F8bWl%2F7NuTE6E1XSMYmokZvn5Sh5%2FH2eqUpq1Iqf%2BqGOG5VYnMckBXJKyD6oTmuGFPtVN%2FTBE4wfA5MplU4xwMHdpeq470k79z5olleeXW23KD1PB49DFnJ9wV1E71Gs9dnQfg5RPkrULN63wv7JcogKssFNY7%2Bn7mMPGA%2FF5mvqaN4FG&X-Amz-Signature=27c79acb34f0c4f6fe9421ec03e1f2b2dd61ca43acdacce2c8cb6ad1872ce905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZ74XKZ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEW0zARt3iDAbqBtS9iwmBMZLkAa2wf0jFwzEea376XAAiEAx9Nsf3RrOGPj3pBqeCsDsp7VdN0OlAqirlO6h8aXqzoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfA2ADJdAJ3bB%2BWyrcA2ms%2F3rEff0Zm7VwRH2C8xe1Gi4fv%2BbovMNQ1rbaFkd%2Biw7DZfndodosrp0FgQShqn96wpFuL9a%2Fpvvz%2BBuCIuxlytzRugsGiMQsGl72VMXP7et9eOqLxPVPM4UM9zKi5m12NrnKM98TpgEd7LI6iLBMXmKCy915OeHFUsx44g0l0ebhXycXjKeYLTkeCZSrRtegVq7JCfxkaoIJka2ECHAqr62AHT7sKgUAgM9pWJh2rnqMz0%2Fp7pTI%2BW4KDCOIwTC3XCGUwQYqM%2BADVgfG3huCKv0llWs7kS95zmUp40UL9NPx88Uz8XjKf6qeZY5iGYAWMa%2F6A%2F6x8Jsf%2BvHfRmk%2FyfYjM7L2CKucoca%2FuabBUz%2B0NyoKhACEneJLUQwaMQ6nuGVmvEyo8I3IkKPZyHnQuG3QHJCNmO9ermgAG7PZpKLK0Q%2B6Zni104twKcS2dHQd75x11XJC6jwWhE7QOMmJWq2c8SBNKBOWIjbfj%2Ftgd9KGG40JWjlaaeSbxlM9C73IEXJ%2FLgvuC61IvNJj%2Bidn9gxlkKc2gJl9sNhbTvBbgXQbbVbPFC5Pd9mW%2B4XSChYYqu%2BgMhwP3BfncNllKE9ol5sr2jgfjfvbvjakLG9otJqeszG5yHEh9c%2BMMNPn4s0GOqUBMFxrM3X%2B65IzpLe11lh5%2FhZmOShkwjHVmxVZVy%2BRShD%2F8bWl%2F7NuTE6E1XSMYmokZvn5Sh5%2FH2eqUpq1Iqf%2BqGOG5VYnMckBXJKyD6oTmuGFPtVN%2FTBE4wfA5MplU4xwMHdpeq470k79z5olleeXW23KD1PB49DFnJ9wV1E71Gs9dnQfg5RPkrULN63wv7JcogKssFNY7%2Bn7mMPGA%2FF5mvqaN4FG&X-Amz-Signature=8ea974a6056a529ea5574fc8f1ffde6c73f5327ae3c3e923799996fd19166e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZ74XKZ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEW0zARt3iDAbqBtS9iwmBMZLkAa2wf0jFwzEea376XAAiEAx9Nsf3RrOGPj3pBqeCsDsp7VdN0OlAqirlO6h8aXqzoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfA2ADJdAJ3bB%2BWyrcA2ms%2F3rEff0Zm7VwRH2C8xe1Gi4fv%2BbovMNQ1rbaFkd%2Biw7DZfndodosrp0FgQShqn96wpFuL9a%2Fpvvz%2BBuCIuxlytzRugsGiMQsGl72VMXP7et9eOqLxPVPM4UM9zKi5m12NrnKM98TpgEd7LI6iLBMXmKCy915OeHFUsx44g0l0ebhXycXjKeYLTkeCZSrRtegVq7JCfxkaoIJka2ECHAqr62AHT7sKgUAgM9pWJh2rnqMz0%2Fp7pTI%2BW4KDCOIwTC3XCGUwQYqM%2BADVgfG3huCKv0llWs7kS95zmUp40UL9NPx88Uz8XjKf6qeZY5iGYAWMa%2F6A%2F6x8Jsf%2BvHfRmk%2FyfYjM7L2CKucoca%2FuabBUz%2B0NyoKhACEneJLUQwaMQ6nuGVmvEyo8I3IkKPZyHnQuG3QHJCNmO9ermgAG7PZpKLK0Q%2B6Zni104twKcS2dHQd75x11XJC6jwWhE7QOMmJWq2c8SBNKBOWIjbfj%2Ftgd9KGG40JWjlaaeSbxlM9C73IEXJ%2FLgvuC61IvNJj%2Bidn9gxlkKc2gJl9sNhbTvBbgXQbbVbPFC5Pd9mW%2B4XSChYYqu%2BgMhwP3BfncNllKE9ol5sr2jgfjfvbvjakLG9otJqeszG5yHEh9c%2BMMNPn4s0GOqUBMFxrM3X%2B65IzpLe11lh5%2FhZmOShkwjHVmxVZVy%2BRShD%2F8bWl%2F7NuTE6E1XSMYmokZvn5Sh5%2FH2eqUpq1Iqf%2BqGOG5VYnMckBXJKyD6oTmuGFPtVN%2FTBE4wfA5MplU4xwMHdpeq470k79z5olleeXW23KD1PB49DFnJ9wV1E71Gs9dnQfg5RPkrULN63wv7JcogKssFNY7%2Bn7mMPGA%2FF5mvqaN4FG&X-Amz-Signature=a1aea052a41571c13f7bfc8762dca3b7a1df427028a4704f33bbe33998d66e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZ74XKZ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEW0zARt3iDAbqBtS9iwmBMZLkAa2wf0jFwzEea376XAAiEAx9Nsf3RrOGPj3pBqeCsDsp7VdN0OlAqirlO6h8aXqzoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfA2ADJdAJ3bB%2BWyrcA2ms%2F3rEff0Zm7VwRH2C8xe1Gi4fv%2BbovMNQ1rbaFkd%2Biw7DZfndodosrp0FgQShqn96wpFuL9a%2Fpvvz%2BBuCIuxlytzRugsGiMQsGl72VMXP7et9eOqLxPVPM4UM9zKi5m12NrnKM98TpgEd7LI6iLBMXmKCy915OeHFUsx44g0l0ebhXycXjKeYLTkeCZSrRtegVq7JCfxkaoIJka2ECHAqr62AHT7sKgUAgM9pWJh2rnqMz0%2Fp7pTI%2BW4KDCOIwTC3XCGUwQYqM%2BADVgfG3huCKv0llWs7kS95zmUp40UL9NPx88Uz8XjKf6qeZY5iGYAWMa%2F6A%2F6x8Jsf%2BvHfRmk%2FyfYjM7L2CKucoca%2FuabBUz%2B0NyoKhACEneJLUQwaMQ6nuGVmvEyo8I3IkKPZyHnQuG3QHJCNmO9ermgAG7PZpKLK0Q%2B6Zni104twKcS2dHQd75x11XJC6jwWhE7QOMmJWq2c8SBNKBOWIjbfj%2Ftgd9KGG40JWjlaaeSbxlM9C73IEXJ%2FLgvuC61IvNJj%2Bidn9gxlkKc2gJl9sNhbTvBbgXQbbVbPFC5Pd9mW%2B4XSChYYqu%2BgMhwP3BfncNllKE9ol5sr2jgfjfvbvjakLG9otJqeszG5yHEh9c%2BMMNPn4s0GOqUBMFxrM3X%2B65IzpLe11lh5%2FhZmOShkwjHVmxVZVy%2BRShD%2F8bWl%2F7NuTE6E1XSMYmokZvn5Sh5%2FH2eqUpq1Iqf%2BqGOG5VYnMckBXJKyD6oTmuGFPtVN%2FTBE4wfA5MplU4xwMHdpeq470k79z5olleeXW23KD1PB49DFnJ9wV1E71Gs9dnQfg5RPkrULN63wv7JcogKssFNY7%2Bn7mMPGA%2FF5mvqaN4FG&X-Amz-Signature=8420183d054cdd2dbe156f71b1a81ba3c433fd91d50145bd1b9d6f79b0ddc282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZ74XKZ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEW0zARt3iDAbqBtS9iwmBMZLkAa2wf0jFwzEea376XAAiEAx9Nsf3RrOGPj3pBqeCsDsp7VdN0OlAqirlO6h8aXqzoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfA2ADJdAJ3bB%2BWyrcA2ms%2F3rEff0Zm7VwRH2C8xe1Gi4fv%2BbovMNQ1rbaFkd%2Biw7DZfndodosrp0FgQShqn96wpFuL9a%2Fpvvz%2BBuCIuxlytzRugsGiMQsGl72VMXP7et9eOqLxPVPM4UM9zKi5m12NrnKM98TpgEd7LI6iLBMXmKCy915OeHFUsx44g0l0ebhXycXjKeYLTkeCZSrRtegVq7JCfxkaoIJka2ECHAqr62AHT7sKgUAgM9pWJh2rnqMz0%2Fp7pTI%2BW4KDCOIwTC3XCGUwQYqM%2BADVgfG3huCKv0llWs7kS95zmUp40UL9NPx88Uz8XjKf6qeZY5iGYAWMa%2F6A%2F6x8Jsf%2BvHfRmk%2FyfYjM7L2CKucoca%2FuabBUz%2B0NyoKhACEneJLUQwaMQ6nuGVmvEyo8I3IkKPZyHnQuG3QHJCNmO9ermgAG7PZpKLK0Q%2B6Zni104twKcS2dHQd75x11XJC6jwWhE7QOMmJWq2c8SBNKBOWIjbfj%2Ftgd9KGG40JWjlaaeSbxlM9C73IEXJ%2FLgvuC61IvNJj%2Bidn9gxlkKc2gJl9sNhbTvBbgXQbbVbPFC5Pd9mW%2B4XSChYYqu%2BgMhwP3BfncNllKE9ol5sr2jgfjfvbvjakLG9otJqeszG5yHEh9c%2BMMNPn4s0GOqUBMFxrM3X%2B65IzpLe11lh5%2FhZmOShkwjHVmxVZVy%2BRShD%2F8bWl%2F7NuTE6E1XSMYmokZvn5Sh5%2FH2eqUpq1Iqf%2BqGOG5VYnMckBXJKyD6oTmuGFPtVN%2FTBE4wfA5MplU4xwMHdpeq470k79z5olleeXW23KD1PB49DFnJ9wV1E71Gs9dnQfg5RPkrULN63wv7JcogKssFNY7%2Bn7mMPGA%2FF5mvqaN4FG&X-Amz-Signature=48cc4273fc2b6a0850017227d902aba95d69db00f3074f02cade9dab107a116a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZ74XKZ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEW0zARt3iDAbqBtS9iwmBMZLkAa2wf0jFwzEea376XAAiEAx9Nsf3RrOGPj3pBqeCsDsp7VdN0OlAqirlO6h8aXqzoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKfA2ADJdAJ3bB%2BWyrcA2ms%2F3rEff0Zm7VwRH2C8xe1Gi4fv%2BbovMNQ1rbaFkd%2Biw7DZfndodosrp0FgQShqn96wpFuL9a%2Fpvvz%2BBuCIuxlytzRugsGiMQsGl72VMXP7et9eOqLxPVPM4UM9zKi5m12NrnKM98TpgEd7LI6iLBMXmKCy915OeHFUsx44g0l0ebhXycXjKeYLTkeCZSrRtegVq7JCfxkaoIJka2ECHAqr62AHT7sKgUAgM9pWJh2rnqMz0%2Fp7pTI%2BW4KDCOIwTC3XCGUwQYqM%2BADVgfG3huCKv0llWs7kS95zmUp40UL9NPx88Uz8XjKf6qeZY5iGYAWMa%2F6A%2F6x8Jsf%2BvHfRmk%2FyfYjM7L2CKucoca%2FuabBUz%2B0NyoKhACEneJLUQwaMQ6nuGVmvEyo8I3IkKPZyHnQuG3QHJCNmO9ermgAG7PZpKLK0Q%2B6Zni104twKcS2dHQd75x11XJC6jwWhE7QOMmJWq2c8SBNKBOWIjbfj%2Ftgd9KGG40JWjlaaeSbxlM9C73IEXJ%2FLgvuC61IvNJj%2Bidn9gxlkKc2gJl9sNhbTvBbgXQbbVbPFC5Pd9mW%2B4XSChYYqu%2BgMhwP3BfncNllKE9ol5sr2jgfjfvbvjakLG9otJqeszG5yHEh9c%2BMMNPn4s0GOqUBMFxrM3X%2B65IzpLe11lh5%2FhZmOShkwjHVmxVZVy%2BRShD%2F8bWl%2F7NuTE6E1XSMYmokZvn5Sh5%2FH2eqUpq1Iqf%2BqGOG5VYnMckBXJKyD6oTmuGFPtVN%2FTBE4wfA5MplU4xwMHdpeq470k79z5olleeXW23KD1PB49DFnJ9wV1E71Gs9dnQfg5RPkrULN63wv7JcogKssFNY7%2Bn7mMPGA%2FF5mvqaN4FG&X-Amz-Signature=fc89bcec613362c6c3a6829ac2e4793071711485089d6bfefa7a92a04757d44d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

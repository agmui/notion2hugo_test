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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7T7HNWQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbSlU3suD8dafkn0gIM4QcICqbFaM%2FPxezLKtrEl6xgAiEAh1AU0NLwX8sQqCO9Dcld8kYChiLkgdOdmenIKflS8YAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNNHvMuDrhy2ZbAiEyrcA8lb%2FrS%2F2GGFD99k8RMbV4drkxrWQzcewSQKJ1fn2LhvDfhrNETB6hZxnP37MK9hNfVcaRQ2s%2BqRg9QVrtuc%2BHf%2BfjFxtj1S7yEu%2FAgkW%2FTM6pfVUPgYAiTg95BkuqWs%2BY1awfc%2FDluHtY1xo%2BehUHWv7lga3SwiaGQAZ1fLi3e7UzVFNk3FJwvznxZnvOapdOfSvsr1AeYLVbeadVf7VxPeqfAxzGyTKw7fwSzTDpmyjyLANl9WAU39%2FGB7RTSnLGds0cY7FzedMOzzeGbWxE4zGADynY9yDY3HJTJPFljdquXSReYYVB%2BkRsLyCYJ6fTQPVVjh1fhaEN87bMRxOPnvpf%2B6zlHh2fdvy6Ae3JfHp6fZGZCeAxbuPWV3AbvdLMKlTVEjAvP0hgL%2FU0wsotq2hSWMEIfnstxhqRgLUDvq6c5X%2B%2FF1k9zC8Wi78GcotkFiK5xIJwt0KsVqbkCmgsifozy%2Fk6Ik8Vy3Chpw2BjFSgBmCpKqFK%2BUifrrJMiKuJT%2B%2FxqwpaYH%2FqNZDn0UV7GfTAAz4psBTTBEgWEU%2Bs5bYIKrqPDgK3zZDScs38Nimm9PCT843e5pRTdenlvCvC0KnqrIJStESSZCfu%2F9o%2FwzZzp%2BYYvd3lwPj5YRMLWj4r4GOqUBBFiYMQTDVP7SyqNr7zGmxl0wXNhDvL%2FGxzX6fPFLg1lCW0kLAdV75r9osjU3CitSRJluzAn4TdTKeKZ4Y7JijVDSktxkIzO9C15jq%2BGnrv17wNcNxelf90ua6xyPg2jG4OuSsVXEeN2QY%2BzfYx6NROTXKJI3JGOyZgFCdep2gxU0lNX8VqTGwnvgDdLFSj5u6LTfVivf1zDPja9rB5BEfBjieEsG&X-Amz-Signature=438a3bf0eab71886cf26eb7afcea7dee70e3773c9e83fd8968f0d339d9920e72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7T7HNWQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbSlU3suD8dafkn0gIM4QcICqbFaM%2FPxezLKtrEl6xgAiEAh1AU0NLwX8sQqCO9Dcld8kYChiLkgdOdmenIKflS8YAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNNHvMuDrhy2ZbAiEyrcA8lb%2FrS%2F2GGFD99k8RMbV4drkxrWQzcewSQKJ1fn2LhvDfhrNETB6hZxnP37MK9hNfVcaRQ2s%2BqRg9QVrtuc%2BHf%2BfjFxtj1S7yEu%2FAgkW%2FTM6pfVUPgYAiTg95BkuqWs%2BY1awfc%2FDluHtY1xo%2BehUHWv7lga3SwiaGQAZ1fLi3e7UzVFNk3FJwvznxZnvOapdOfSvsr1AeYLVbeadVf7VxPeqfAxzGyTKw7fwSzTDpmyjyLANl9WAU39%2FGB7RTSnLGds0cY7FzedMOzzeGbWxE4zGADynY9yDY3HJTJPFljdquXSReYYVB%2BkRsLyCYJ6fTQPVVjh1fhaEN87bMRxOPnvpf%2B6zlHh2fdvy6Ae3JfHp6fZGZCeAxbuPWV3AbvdLMKlTVEjAvP0hgL%2FU0wsotq2hSWMEIfnstxhqRgLUDvq6c5X%2B%2FF1k9zC8Wi78GcotkFiK5xIJwt0KsVqbkCmgsifozy%2Fk6Ik8Vy3Chpw2BjFSgBmCpKqFK%2BUifrrJMiKuJT%2B%2FxqwpaYH%2FqNZDn0UV7GfTAAz4psBTTBEgWEU%2Bs5bYIKrqPDgK3zZDScs38Nimm9PCT843e5pRTdenlvCvC0KnqrIJStESSZCfu%2F9o%2FwzZzp%2BYYvd3lwPj5YRMLWj4r4GOqUBBFiYMQTDVP7SyqNr7zGmxl0wXNhDvL%2FGxzX6fPFLg1lCW0kLAdV75r9osjU3CitSRJluzAn4TdTKeKZ4Y7JijVDSktxkIzO9C15jq%2BGnrv17wNcNxelf90ua6xyPg2jG4OuSsVXEeN2QY%2BzfYx6NROTXKJI3JGOyZgFCdep2gxU0lNX8VqTGwnvgDdLFSj5u6LTfVivf1zDPja9rB5BEfBjieEsG&X-Amz-Signature=c290a35b4f44fa90e9e725ce6bdb4e32fd6d1c4194d29d563f0ead12b65a2a60&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7T7HNWQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbSlU3suD8dafkn0gIM4QcICqbFaM%2FPxezLKtrEl6xgAiEAh1AU0NLwX8sQqCO9Dcld8kYChiLkgdOdmenIKflS8YAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNNHvMuDrhy2ZbAiEyrcA8lb%2FrS%2F2GGFD99k8RMbV4drkxrWQzcewSQKJ1fn2LhvDfhrNETB6hZxnP37MK9hNfVcaRQ2s%2BqRg9QVrtuc%2BHf%2BfjFxtj1S7yEu%2FAgkW%2FTM6pfVUPgYAiTg95BkuqWs%2BY1awfc%2FDluHtY1xo%2BehUHWv7lga3SwiaGQAZ1fLi3e7UzVFNk3FJwvznxZnvOapdOfSvsr1AeYLVbeadVf7VxPeqfAxzGyTKw7fwSzTDpmyjyLANl9WAU39%2FGB7RTSnLGds0cY7FzedMOzzeGbWxE4zGADynY9yDY3HJTJPFljdquXSReYYVB%2BkRsLyCYJ6fTQPVVjh1fhaEN87bMRxOPnvpf%2B6zlHh2fdvy6Ae3JfHp6fZGZCeAxbuPWV3AbvdLMKlTVEjAvP0hgL%2FU0wsotq2hSWMEIfnstxhqRgLUDvq6c5X%2B%2FF1k9zC8Wi78GcotkFiK5xIJwt0KsVqbkCmgsifozy%2Fk6Ik8Vy3Chpw2BjFSgBmCpKqFK%2BUifrrJMiKuJT%2B%2FxqwpaYH%2FqNZDn0UV7GfTAAz4psBTTBEgWEU%2Bs5bYIKrqPDgK3zZDScs38Nimm9PCT843e5pRTdenlvCvC0KnqrIJStESSZCfu%2F9o%2FwzZzp%2BYYvd3lwPj5YRMLWj4r4GOqUBBFiYMQTDVP7SyqNr7zGmxl0wXNhDvL%2FGxzX6fPFLg1lCW0kLAdV75r9osjU3CitSRJluzAn4TdTKeKZ4Y7JijVDSktxkIzO9C15jq%2BGnrv17wNcNxelf90ua6xyPg2jG4OuSsVXEeN2QY%2BzfYx6NROTXKJI3JGOyZgFCdep2gxU0lNX8VqTGwnvgDdLFSj5u6LTfVivf1zDPja9rB5BEfBjieEsG&X-Amz-Signature=b8165083bd1603cad33fcacb5a41919e614948fe7b0bb9e2d4d636658a72a566&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7T7HNWQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbSlU3suD8dafkn0gIM4QcICqbFaM%2FPxezLKtrEl6xgAiEAh1AU0NLwX8sQqCO9Dcld8kYChiLkgdOdmenIKflS8YAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNNHvMuDrhy2ZbAiEyrcA8lb%2FrS%2F2GGFD99k8RMbV4drkxrWQzcewSQKJ1fn2LhvDfhrNETB6hZxnP37MK9hNfVcaRQ2s%2BqRg9QVrtuc%2BHf%2BfjFxtj1S7yEu%2FAgkW%2FTM6pfVUPgYAiTg95BkuqWs%2BY1awfc%2FDluHtY1xo%2BehUHWv7lga3SwiaGQAZ1fLi3e7UzVFNk3FJwvznxZnvOapdOfSvsr1AeYLVbeadVf7VxPeqfAxzGyTKw7fwSzTDpmyjyLANl9WAU39%2FGB7RTSnLGds0cY7FzedMOzzeGbWxE4zGADynY9yDY3HJTJPFljdquXSReYYVB%2BkRsLyCYJ6fTQPVVjh1fhaEN87bMRxOPnvpf%2B6zlHh2fdvy6Ae3JfHp6fZGZCeAxbuPWV3AbvdLMKlTVEjAvP0hgL%2FU0wsotq2hSWMEIfnstxhqRgLUDvq6c5X%2B%2FF1k9zC8Wi78GcotkFiK5xIJwt0KsVqbkCmgsifozy%2Fk6Ik8Vy3Chpw2BjFSgBmCpKqFK%2BUifrrJMiKuJT%2B%2FxqwpaYH%2FqNZDn0UV7GfTAAz4psBTTBEgWEU%2Bs5bYIKrqPDgK3zZDScs38Nimm9PCT843e5pRTdenlvCvC0KnqrIJStESSZCfu%2F9o%2FwzZzp%2BYYvd3lwPj5YRMLWj4r4GOqUBBFiYMQTDVP7SyqNr7zGmxl0wXNhDvL%2FGxzX6fPFLg1lCW0kLAdV75r9osjU3CitSRJluzAn4TdTKeKZ4Y7JijVDSktxkIzO9C15jq%2BGnrv17wNcNxelf90ua6xyPg2jG4OuSsVXEeN2QY%2BzfYx6NROTXKJI3JGOyZgFCdep2gxU0lNX8VqTGwnvgDdLFSj5u6LTfVivf1zDPja9rB5BEfBjieEsG&X-Amz-Signature=c3939da81edf19e38be2882f25eb03c9fae6d76d35fecb35ee3c6043c038b3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7T7HNWQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbSlU3suD8dafkn0gIM4QcICqbFaM%2FPxezLKtrEl6xgAiEAh1AU0NLwX8sQqCO9Dcld8kYChiLkgdOdmenIKflS8YAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNNHvMuDrhy2ZbAiEyrcA8lb%2FrS%2F2GGFD99k8RMbV4drkxrWQzcewSQKJ1fn2LhvDfhrNETB6hZxnP37MK9hNfVcaRQ2s%2BqRg9QVrtuc%2BHf%2BfjFxtj1S7yEu%2FAgkW%2FTM6pfVUPgYAiTg95BkuqWs%2BY1awfc%2FDluHtY1xo%2BehUHWv7lga3SwiaGQAZ1fLi3e7UzVFNk3FJwvznxZnvOapdOfSvsr1AeYLVbeadVf7VxPeqfAxzGyTKw7fwSzTDpmyjyLANl9WAU39%2FGB7RTSnLGds0cY7FzedMOzzeGbWxE4zGADynY9yDY3HJTJPFljdquXSReYYVB%2BkRsLyCYJ6fTQPVVjh1fhaEN87bMRxOPnvpf%2B6zlHh2fdvy6Ae3JfHp6fZGZCeAxbuPWV3AbvdLMKlTVEjAvP0hgL%2FU0wsotq2hSWMEIfnstxhqRgLUDvq6c5X%2B%2FF1k9zC8Wi78GcotkFiK5xIJwt0KsVqbkCmgsifozy%2Fk6Ik8Vy3Chpw2BjFSgBmCpKqFK%2BUifrrJMiKuJT%2B%2FxqwpaYH%2FqNZDn0UV7GfTAAz4psBTTBEgWEU%2Bs5bYIKrqPDgK3zZDScs38Nimm9PCT843e5pRTdenlvCvC0KnqrIJStESSZCfu%2F9o%2FwzZzp%2BYYvd3lwPj5YRMLWj4r4GOqUBBFiYMQTDVP7SyqNr7zGmxl0wXNhDvL%2FGxzX6fPFLg1lCW0kLAdV75r9osjU3CitSRJluzAn4TdTKeKZ4Y7JijVDSktxkIzO9C15jq%2BGnrv17wNcNxelf90ua6xyPg2jG4OuSsVXEeN2QY%2BzfYx6NROTXKJI3JGOyZgFCdep2gxU0lNX8VqTGwnvgDdLFSj5u6LTfVivf1zDPja9rB5BEfBjieEsG&X-Amz-Signature=6b5e9ba2ff00c913c91126ed7f545e99f02a2c289f7de0611376b4fcc49679fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7T7HNWQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbSlU3suD8dafkn0gIM4QcICqbFaM%2FPxezLKtrEl6xgAiEAh1AU0NLwX8sQqCO9Dcld8kYChiLkgdOdmenIKflS8YAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNNHvMuDrhy2ZbAiEyrcA8lb%2FrS%2F2GGFD99k8RMbV4drkxrWQzcewSQKJ1fn2LhvDfhrNETB6hZxnP37MK9hNfVcaRQ2s%2BqRg9QVrtuc%2BHf%2BfjFxtj1S7yEu%2FAgkW%2FTM6pfVUPgYAiTg95BkuqWs%2BY1awfc%2FDluHtY1xo%2BehUHWv7lga3SwiaGQAZ1fLi3e7UzVFNk3FJwvznxZnvOapdOfSvsr1AeYLVbeadVf7VxPeqfAxzGyTKw7fwSzTDpmyjyLANl9WAU39%2FGB7RTSnLGds0cY7FzedMOzzeGbWxE4zGADynY9yDY3HJTJPFljdquXSReYYVB%2BkRsLyCYJ6fTQPVVjh1fhaEN87bMRxOPnvpf%2B6zlHh2fdvy6Ae3JfHp6fZGZCeAxbuPWV3AbvdLMKlTVEjAvP0hgL%2FU0wsotq2hSWMEIfnstxhqRgLUDvq6c5X%2B%2FF1k9zC8Wi78GcotkFiK5xIJwt0KsVqbkCmgsifozy%2Fk6Ik8Vy3Chpw2BjFSgBmCpKqFK%2BUifrrJMiKuJT%2B%2FxqwpaYH%2FqNZDn0UV7GfTAAz4psBTTBEgWEU%2Bs5bYIKrqPDgK3zZDScs38Nimm9PCT843e5pRTdenlvCvC0KnqrIJStESSZCfu%2F9o%2FwzZzp%2BYYvd3lwPj5YRMLWj4r4GOqUBBFiYMQTDVP7SyqNr7zGmxl0wXNhDvL%2FGxzX6fPFLg1lCW0kLAdV75r9osjU3CitSRJluzAn4TdTKeKZ4Y7JijVDSktxkIzO9C15jq%2BGnrv17wNcNxelf90ua6xyPg2jG4OuSsVXEeN2QY%2BzfYx6NROTXKJI3JGOyZgFCdep2gxU0lNX8VqTGwnvgDdLFSj5u6LTfVivf1zDPja9rB5BEfBjieEsG&X-Amz-Signature=b21d3b1d64f31071286ab10c060a7924d801ec5ba4e5acd7e4f4ca8496eb2b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7T7HNWQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbSlU3suD8dafkn0gIM4QcICqbFaM%2FPxezLKtrEl6xgAiEAh1AU0NLwX8sQqCO9Dcld8kYChiLkgdOdmenIKflS8YAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNNHvMuDrhy2ZbAiEyrcA8lb%2FrS%2F2GGFD99k8RMbV4drkxrWQzcewSQKJ1fn2LhvDfhrNETB6hZxnP37MK9hNfVcaRQ2s%2BqRg9QVrtuc%2BHf%2BfjFxtj1S7yEu%2FAgkW%2FTM6pfVUPgYAiTg95BkuqWs%2BY1awfc%2FDluHtY1xo%2BehUHWv7lga3SwiaGQAZ1fLi3e7UzVFNk3FJwvznxZnvOapdOfSvsr1AeYLVbeadVf7VxPeqfAxzGyTKw7fwSzTDpmyjyLANl9WAU39%2FGB7RTSnLGds0cY7FzedMOzzeGbWxE4zGADynY9yDY3HJTJPFljdquXSReYYVB%2BkRsLyCYJ6fTQPVVjh1fhaEN87bMRxOPnvpf%2B6zlHh2fdvy6Ae3JfHp6fZGZCeAxbuPWV3AbvdLMKlTVEjAvP0hgL%2FU0wsotq2hSWMEIfnstxhqRgLUDvq6c5X%2B%2FF1k9zC8Wi78GcotkFiK5xIJwt0KsVqbkCmgsifozy%2Fk6Ik8Vy3Chpw2BjFSgBmCpKqFK%2BUifrrJMiKuJT%2B%2FxqwpaYH%2FqNZDn0UV7GfTAAz4psBTTBEgWEU%2Bs5bYIKrqPDgK3zZDScs38Nimm9PCT843e5pRTdenlvCvC0KnqrIJStESSZCfu%2F9o%2FwzZzp%2BYYvd3lwPj5YRMLWj4r4GOqUBBFiYMQTDVP7SyqNr7zGmxl0wXNhDvL%2FGxzX6fPFLg1lCW0kLAdV75r9osjU3CitSRJluzAn4TdTKeKZ4Y7JijVDSktxkIzO9C15jq%2BGnrv17wNcNxelf90ua6xyPg2jG4OuSsVXEeN2QY%2BzfYx6NROTXKJI3JGOyZgFCdep2gxU0lNX8VqTGwnvgDdLFSj5u6LTfVivf1zDPja9rB5BEfBjieEsG&X-Amz-Signature=476314829fdd740b6dad483313db2aaacdabe80a5ee16a44cac691c177f38d63&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7T7HNWQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbSlU3suD8dafkn0gIM4QcICqbFaM%2FPxezLKtrEl6xgAiEAh1AU0NLwX8sQqCO9Dcld8kYChiLkgdOdmenIKflS8YAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNNHvMuDrhy2ZbAiEyrcA8lb%2FrS%2F2GGFD99k8RMbV4drkxrWQzcewSQKJ1fn2LhvDfhrNETB6hZxnP37MK9hNfVcaRQ2s%2BqRg9QVrtuc%2BHf%2BfjFxtj1S7yEu%2FAgkW%2FTM6pfVUPgYAiTg95BkuqWs%2BY1awfc%2FDluHtY1xo%2BehUHWv7lga3SwiaGQAZ1fLi3e7UzVFNk3FJwvznxZnvOapdOfSvsr1AeYLVbeadVf7VxPeqfAxzGyTKw7fwSzTDpmyjyLANl9WAU39%2FGB7RTSnLGds0cY7FzedMOzzeGbWxE4zGADynY9yDY3HJTJPFljdquXSReYYVB%2BkRsLyCYJ6fTQPVVjh1fhaEN87bMRxOPnvpf%2B6zlHh2fdvy6Ae3JfHp6fZGZCeAxbuPWV3AbvdLMKlTVEjAvP0hgL%2FU0wsotq2hSWMEIfnstxhqRgLUDvq6c5X%2B%2FF1k9zC8Wi78GcotkFiK5xIJwt0KsVqbkCmgsifozy%2Fk6Ik8Vy3Chpw2BjFSgBmCpKqFK%2BUifrrJMiKuJT%2B%2FxqwpaYH%2FqNZDn0UV7GfTAAz4psBTTBEgWEU%2Bs5bYIKrqPDgK3zZDScs38Nimm9PCT843e5pRTdenlvCvC0KnqrIJStESSZCfu%2F9o%2FwzZzp%2BYYvd3lwPj5YRMLWj4r4GOqUBBFiYMQTDVP7SyqNr7zGmxl0wXNhDvL%2FGxzX6fPFLg1lCW0kLAdV75r9osjU3CitSRJluzAn4TdTKeKZ4Y7JijVDSktxkIzO9C15jq%2BGnrv17wNcNxelf90ua6xyPg2jG4OuSsVXEeN2QY%2BzfYx6NROTXKJI3JGOyZgFCdep2gxU0lNX8VqTGwnvgDdLFSj5u6LTfVivf1zDPja9rB5BEfBjieEsG&X-Amz-Signature=4f070f74e7fbfbb669ff457a55b3c8c72f1b53d45d4b4db565195500acdbebca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQIY2QA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3ufwZxuvKBygmFGKAjodV%2FMoKHl%2F80vMAiPT%2FaClfQIhAMGYsCxSAx%2FJTzGnXRXzzZBLatrDcRGHPVsQ9CFl%2FKoPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Jy8Vk8KO7DBvm2Aq3AN5ThzGMn51HEkxehMQzZ71rwrdtRL1gJmPTA0gQ8b5oNE%2FjTXeuLH8SWcYlUCfNdLSFznb4a7KhcCXTT3phOKIY54ng4zHl9K90KjJ%2Fd1DiUsgtCZLapBzhL7ws7lXCQGryPl45pM4wC1y%2Bku6H8B5zYwgviqavdXVC4g6%2BVYsW2rN%2Fq0oB7alV9UHB3k9iasLqNJpznGQPKYXYz4NFumnD9hgAk0cWXqKwa0UfRbanXPse0rYbjhjBm8%2BFVGh7f0i2A80hNv7V66UB0kywTEktVMllEYjVmr2YSvyR8HDqClBHVmoVXr3Ee84nnavL5TWG5Q96IQdeZZsG9M%2BpQtTzI%2B%2BGp09ywc%2BgUc7%2BAG%2B%2B3jd2Hwr%2BpJQ2Xe%2FMIVCDSektlwu6D4X0Uh2NccTNU9CIFQmKlm4uSYh8V4yUy9Gn77w1svzROhn5JmW48b4A6Ekr6kL9C4sOJoGtkbh24gx7AxRXU6SuuuCeVSgJnsdNyUdfhkSpyFcDYUghGM5BhZR9IIjJLiDa%2BEWFNxn1mRc%2F3Ou7UkOQ5NFGjUhno2Tiv%2FEJRTAjoVr1XG1DWMWwoaFifak624IdKTgFxNsaDzMubP6mNyIa23NgrFu1D%2BUnfzobswh8DrrBUWazzCdu57CBjqkAVdiZ5vNJqGGNYlAO%2FOn73guEO%2FAbFsOLrRTeSsoviaE9gxsXY8lr8H3SqosYqGczxVx1VWj8WybWFfYZTGDm%2Bv5bz5AKPKQhmE6vHT8VebRxh%2BYNvHDAqpGOaIcan2H3q9RgeI%2Bdq6RIaD5Q%2BqPmae4w0eVmgjkS6ve%2FnG2JgGtxiorO2YQJb54WB6GWb4OsWltX4dH%2FhFl%2Fl%2Bu5mj3P64hEfU4&X-Amz-Signature=3d55762d8de03c8c94674d3a9d17731ddff8a3ff952416e0551fb647cfb1c4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQIY2QA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3ufwZxuvKBygmFGKAjodV%2FMoKHl%2F80vMAiPT%2FaClfQIhAMGYsCxSAx%2FJTzGnXRXzzZBLatrDcRGHPVsQ9CFl%2FKoPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Jy8Vk8KO7DBvm2Aq3AN5ThzGMn51HEkxehMQzZ71rwrdtRL1gJmPTA0gQ8b5oNE%2FjTXeuLH8SWcYlUCfNdLSFznb4a7KhcCXTT3phOKIY54ng4zHl9K90KjJ%2Fd1DiUsgtCZLapBzhL7ws7lXCQGryPl45pM4wC1y%2Bku6H8B5zYwgviqavdXVC4g6%2BVYsW2rN%2Fq0oB7alV9UHB3k9iasLqNJpznGQPKYXYz4NFumnD9hgAk0cWXqKwa0UfRbanXPse0rYbjhjBm8%2BFVGh7f0i2A80hNv7V66UB0kywTEktVMllEYjVmr2YSvyR8HDqClBHVmoVXr3Ee84nnavL5TWG5Q96IQdeZZsG9M%2BpQtTzI%2B%2BGp09ywc%2BgUc7%2BAG%2B%2B3jd2Hwr%2BpJQ2Xe%2FMIVCDSektlwu6D4X0Uh2NccTNU9CIFQmKlm4uSYh8V4yUy9Gn77w1svzROhn5JmW48b4A6Ekr6kL9C4sOJoGtkbh24gx7AxRXU6SuuuCeVSgJnsdNyUdfhkSpyFcDYUghGM5BhZR9IIjJLiDa%2BEWFNxn1mRc%2F3Ou7UkOQ5NFGjUhno2Tiv%2FEJRTAjoVr1XG1DWMWwoaFifak624IdKTgFxNsaDzMubP6mNyIa23NgrFu1D%2BUnfzobswh8DrrBUWazzCdu57CBjqkAVdiZ5vNJqGGNYlAO%2FOn73guEO%2FAbFsOLrRTeSsoviaE9gxsXY8lr8H3SqosYqGczxVx1VWj8WybWFfYZTGDm%2Bv5bz5AKPKQhmE6vHT8VebRxh%2BYNvHDAqpGOaIcan2H3q9RgeI%2Bdq6RIaD5Q%2BqPmae4w0eVmgjkS6ve%2FnG2JgGtxiorO2YQJb54WB6GWb4OsWltX4dH%2FhFl%2Fl%2Bu5mj3P64hEfU4&X-Amz-Signature=909214461da309716a442b8c0b308230121f78797af804a4d160884bb76487ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQIY2QA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3ufwZxuvKBygmFGKAjodV%2FMoKHl%2F80vMAiPT%2FaClfQIhAMGYsCxSAx%2FJTzGnXRXzzZBLatrDcRGHPVsQ9CFl%2FKoPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Jy8Vk8KO7DBvm2Aq3AN5ThzGMn51HEkxehMQzZ71rwrdtRL1gJmPTA0gQ8b5oNE%2FjTXeuLH8SWcYlUCfNdLSFznb4a7KhcCXTT3phOKIY54ng4zHl9K90KjJ%2Fd1DiUsgtCZLapBzhL7ws7lXCQGryPl45pM4wC1y%2Bku6H8B5zYwgviqavdXVC4g6%2BVYsW2rN%2Fq0oB7alV9UHB3k9iasLqNJpznGQPKYXYz4NFumnD9hgAk0cWXqKwa0UfRbanXPse0rYbjhjBm8%2BFVGh7f0i2A80hNv7V66UB0kywTEktVMllEYjVmr2YSvyR8HDqClBHVmoVXr3Ee84nnavL5TWG5Q96IQdeZZsG9M%2BpQtTzI%2B%2BGp09ywc%2BgUc7%2BAG%2B%2B3jd2Hwr%2BpJQ2Xe%2FMIVCDSektlwu6D4X0Uh2NccTNU9CIFQmKlm4uSYh8V4yUy9Gn77w1svzROhn5JmW48b4A6Ekr6kL9C4sOJoGtkbh24gx7AxRXU6SuuuCeVSgJnsdNyUdfhkSpyFcDYUghGM5BhZR9IIjJLiDa%2BEWFNxn1mRc%2F3Ou7UkOQ5NFGjUhno2Tiv%2FEJRTAjoVr1XG1DWMWwoaFifak624IdKTgFxNsaDzMubP6mNyIa23NgrFu1D%2BUnfzobswh8DrrBUWazzCdu57CBjqkAVdiZ5vNJqGGNYlAO%2FOn73guEO%2FAbFsOLrRTeSsoviaE9gxsXY8lr8H3SqosYqGczxVx1VWj8WybWFfYZTGDm%2Bv5bz5AKPKQhmE6vHT8VebRxh%2BYNvHDAqpGOaIcan2H3q9RgeI%2Bdq6RIaD5Q%2BqPmae4w0eVmgjkS6ve%2FnG2JgGtxiorO2YQJb54WB6GWb4OsWltX4dH%2FhFl%2Fl%2Bu5mj3P64hEfU4&X-Amz-Signature=8e67775de0e53952579cce89b635e06535d6a85a6729445747785238bc7b51e7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQIY2QA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3ufwZxuvKBygmFGKAjodV%2FMoKHl%2F80vMAiPT%2FaClfQIhAMGYsCxSAx%2FJTzGnXRXzzZBLatrDcRGHPVsQ9CFl%2FKoPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Jy8Vk8KO7DBvm2Aq3AN5ThzGMn51HEkxehMQzZ71rwrdtRL1gJmPTA0gQ8b5oNE%2FjTXeuLH8SWcYlUCfNdLSFznb4a7KhcCXTT3phOKIY54ng4zHl9K90KjJ%2Fd1DiUsgtCZLapBzhL7ws7lXCQGryPl45pM4wC1y%2Bku6H8B5zYwgviqavdXVC4g6%2BVYsW2rN%2Fq0oB7alV9UHB3k9iasLqNJpznGQPKYXYz4NFumnD9hgAk0cWXqKwa0UfRbanXPse0rYbjhjBm8%2BFVGh7f0i2A80hNv7V66UB0kywTEktVMllEYjVmr2YSvyR8HDqClBHVmoVXr3Ee84nnavL5TWG5Q96IQdeZZsG9M%2BpQtTzI%2B%2BGp09ywc%2BgUc7%2BAG%2B%2B3jd2Hwr%2BpJQ2Xe%2FMIVCDSektlwu6D4X0Uh2NccTNU9CIFQmKlm4uSYh8V4yUy9Gn77w1svzROhn5JmW48b4A6Ekr6kL9C4sOJoGtkbh24gx7AxRXU6SuuuCeVSgJnsdNyUdfhkSpyFcDYUghGM5BhZR9IIjJLiDa%2BEWFNxn1mRc%2F3Ou7UkOQ5NFGjUhno2Tiv%2FEJRTAjoVr1XG1DWMWwoaFifak624IdKTgFxNsaDzMubP6mNyIa23NgrFu1D%2BUnfzobswh8DrrBUWazzCdu57CBjqkAVdiZ5vNJqGGNYlAO%2FOn73guEO%2FAbFsOLrRTeSsoviaE9gxsXY8lr8H3SqosYqGczxVx1VWj8WybWFfYZTGDm%2Bv5bz5AKPKQhmE6vHT8VebRxh%2BYNvHDAqpGOaIcan2H3q9RgeI%2Bdq6RIaD5Q%2BqPmae4w0eVmgjkS6ve%2FnG2JgGtxiorO2YQJb54WB6GWb4OsWltX4dH%2FhFl%2Fl%2Bu5mj3P64hEfU4&X-Amz-Signature=b93947901069e1dac500d26f0e715c9c14985a6c83a3f4f5a0db2a64777d7e63&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQIY2QA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3ufwZxuvKBygmFGKAjodV%2FMoKHl%2F80vMAiPT%2FaClfQIhAMGYsCxSAx%2FJTzGnXRXzzZBLatrDcRGHPVsQ9CFl%2FKoPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Jy8Vk8KO7DBvm2Aq3AN5ThzGMn51HEkxehMQzZ71rwrdtRL1gJmPTA0gQ8b5oNE%2FjTXeuLH8SWcYlUCfNdLSFznb4a7KhcCXTT3phOKIY54ng4zHl9K90KjJ%2Fd1DiUsgtCZLapBzhL7ws7lXCQGryPl45pM4wC1y%2Bku6H8B5zYwgviqavdXVC4g6%2BVYsW2rN%2Fq0oB7alV9UHB3k9iasLqNJpznGQPKYXYz4NFumnD9hgAk0cWXqKwa0UfRbanXPse0rYbjhjBm8%2BFVGh7f0i2A80hNv7V66UB0kywTEktVMllEYjVmr2YSvyR8HDqClBHVmoVXr3Ee84nnavL5TWG5Q96IQdeZZsG9M%2BpQtTzI%2B%2BGp09ywc%2BgUc7%2BAG%2B%2B3jd2Hwr%2BpJQ2Xe%2FMIVCDSektlwu6D4X0Uh2NccTNU9CIFQmKlm4uSYh8V4yUy9Gn77w1svzROhn5JmW48b4A6Ekr6kL9C4sOJoGtkbh24gx7AxRXU6SuuuCeVSgJnsdNyUdfhkSpyFcDYUghGM5BhZR9IIjJLiDa%2BEWFNxn1mRc%2F3Ou7UkOQ5NFGjUhno2Tiv%2FEJRTAjoVr1XG1DWMWwoaFifak624IdKTgFxNsaDzMubP6mNyIa23NgrFu1D%2BUnfzobswh8DrrBUWazzCdu57CBjqkAVdiZ5vNJqGGNYlAO%2FOn73guEO%2FAbFsOLrRTeSsoviaE9gxsXY8lr8H3SqosYqGczxVx1VWj8WybWFfYZTGDm%2Bv5bz5AKPKQhmE6vHT8VebRxh%2BYNvHDAqpGOaIcan2H3q9RgeI%2Bdq6RIaD5Q%2BqPmae4w0eVmgjkS6ve%2FnG2JgGtxiorO2YQJb54WB6GWb4OsWltX4dH%2FhFl%2Fl%2Bu5mj3P64hEfU4&X-Amz-Signature=e6b37922ff9acfc1169a54c47ecf9798737d6eff1c5ac81cf38fd3ade5fff1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQIY2QA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3ufwZxuvKBygmFGKAjodV%2FMoKHl%2F80vMAiPT%2FaClfQIhAMGYsCxSAx%2FJTzGnXRXzzZBLatrDcRGHPVsQ9CFl%2FKoPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Jy8Vk8KO7DBvm2Aq3AN5ThzGMn51HEkxehMQzZ71rwrdtRL1gJmPTA0gQ8b5oNE%2FjTXeuLH8SWcYlUCfNdLSFznb4a7KhcCXTT3phOKIY54ng4zHl9K90KjJ%2Fd1DiUsgtCZLapBzhL7ws7lXCQGryPl45pM4wC1y%2Bku6H8B5zYwgviqavdXVC4g6%2BVYsW2rN%2Fq0oB7alV9UHB3k9iasLqNJpznGQPKYXYz4NFumnD9hgAk0cWXqKwa0UfRbanXPse0rYbjhjBm8%2BFVGh7f0i2A80hNv7V66UB0kywTEktVMllEYjVmr2YSvyR8HDqClBHVmoVXr3Ee84nnavL5TWG5Q96IQdeZZsG9M%2BpQtTzI%2B%2BGp09ywc%2BgUc7%2BAG%2B%2B3jd2Hwr%2BpJQ2Xe%2FMIVCDSektlwu6D4X0Uh2NccTNU9CIFQmKlm4uSYh8V4yUy9Gn77w1svzROhn5JmW48b4A6Ekr6kL9C4sOJoGtkbh24gx7AxRXU6SuuuCeVSgJnsdNyUdfhkSpyFcDYUghGM5BhZR9IIjJLiDa%2BEWFNxn1mRc%2F3Ou7UkOQ5NFGjUhno2Tiv%2FEJRTAjoVr1XG1DWMWwoaFifak624IdKTgFxNsaDzMubP6mNyIa23NgrFu1D%2BUnfzobswh8DrrBUWazzCdu57CBjqkAVdiZ5vNJqGGNYlAO%2FOn73guEO%2FAbFsOLrRTeSsoviaE9gxsXY8lr8H3SqosYqGczxVx1VWj8WybWFfYZTGDm%2Bv5bz5AKPKQhmE6vHT8VebRxh%2BYNvHDAqpGOaIcan2H3q9RgeI%2Bdq6RIaD5Q%2BqPmae4w0eVmgjkS6ve%2FnG2JgGtxiorO2YQJb54WB6GWb4OsWltX4dH%2FhFl%2Fl%2Bu5mj3P64hEfU4&X-Amz-Signature=c156b0b890756dee7762baca87eb5d89a11cbc61bc51ed0ac46ddc22bb54824b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQIY2QA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3ufwZxuvKBygmFGKAjodV%2FMoKHl%2F80vMAiPT%2FaClfQIhAMGYsCxSAx%2FJTzGnXRXzzZBLatrDcRGHPVsQ9CFl%2FKoPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Jy8Vk8KO7DBvm2Aq3AN5ThzGMn51HEkxehMQzZ71rwrdtRL1gJmPTA0gQ8b5oNE%2FjTXeuLH8SWcYlUCfNdLSFznb4a7KhcCXTT3phOKIY54ng4zHl9K90KjJ%2Fd1DiUsgtCZLapBzhL7ws7lXCQGryPl45pM4wC1y%2Bku6H8B5zYwgviqavdXVC4g6%2BVYsW2rN%2Fq0oB7alV9UHB3k9iasLqNJpznGQPKYXYz4NFumnD9hgAk0cWXqKwa0UfRbanXPse0rYbjhjBm8%2BFVGh7f0i2A80hNv7V66UB0kywTEktVMllEYjVmr2YSvyR8HDqClBHVmoVXr3Ee84nnavL5TWG5Q96IQdeZZsG9M%2BpQtTzI%2B%2BGp09ywc%2BgUc7%2BAG%2B%2B3jd2Hwr%2BpJQ2Xe%2FMIVCDSektlwu6D4X0Uh2NccTNU9CIFQmKlm4uSYh8V4yUy9Gn77w1svzROhn5JmW48b4A6Ekr6kL9C4sOJoGtkbh24gx7AxRXU6SuuuCeVSgJnsdNyUdfhkSpyFcDYUghGM5BhZR9IIjJLiDa%2BEWFNxn1mRc%2F3Ou7UkOQ5NFGjUhno2Tiv%2FEJRTAjoVr1XG1DWMWwoaFifak624IdKTgFxNsaDzMubP6mNyIa23NgrFu1D%2BUnfzobswh8DrrBUWazzCdu57CBjqkAVdiZ5vNJqGGNYlAO%2FOn73guEO%2FAbFsOLrRTeSsoviaE9gxsXY8lr8H3SqosYqGczxVx1VWj8WybWFfYZTGDm%2Bv5bz5AKPKQhmE6vHT8VebRxh%2BYNvHDAqpGOaIcan2H3q9RgeI%2Bdq6RIaD5Q%2BqPmae4w0eVmgjkS6ve%2FnG2JgGtxiorO2YQJb54WB6GWb4OsWltX4dH%2FhFl%2Fl%2Bu5mj3P64hEfU4&X-Amz-Signature=0ca8cd87d4ac485b00f9eddd252958039b5643e06e6ed40f46a3e2692710324e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQIY2QA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3ufwZxuvKBygmFGKAjodV%2FMoKHl%2F80vMAiPT%2FaClfQIhAMGYsCxSAx%2FJTzGnXRXzzZBLatrDcRGHPVsQ9CFl%2FKoPKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Jy8Vk8KO7DBvm2Aq3AN5ThzGMn51HEkxehMQzZ71rwrdtRL1gJmPTA0gQ8b5oNE%2FjTXeuLH8SWcYlUCfNdLSFznb4a7KhcCXTT3phOKIY54ng4zHl9K90KjJ%2Fd1DiUsgtCZLapBzhL7ws7lXCQGryPl45pM4wC1y%2Bku6H8B5zYwgviqavdXVC4g6%2BVYsW2rN%2Fq0oB7alV9UHB3k9iasLqNJpznGQPKYXYz4NFumnD9hgAk0cWXqKwa0UfRbanXPse0rYbjhjBm8%2BFVGh7f0i2A80hNv7V66UB0kywTEktVMllEYjVmr2YSvyR8HDqClBHVmoVXr3Ee84nnavL5TWG5Q96IQdeZZsG9M%2BpQtTzI%2B%2BGp09ywc%2BgUc7%2BAG%2B%2B3jd2Hwr%2BpJQ2Xe%2FMIVCDSektlwu6D4X0Uh2NccTNU9CIFQmKlm4uSYh8V4yUy9Gn77w1svzROhn5JmW48b4A6Ekr6kL9C4sOJoGtkbh24gx7AxRXU6SuuuCeVSgJnsdNyUdfhkSpyFcDYUghGM5BhZR9IIjJLiDa%2BEWFNxn1mRc%2F3Ou7UkOQ5NFGjUhno2Tiv%2FEJRTAjoVr1XG1DWMWwoaFifak624IdKTgFxNsaDzMubP6mNyIa23NgrFu1D%2BUnfzobswh8DrrBUWazzCdu57CBjqkAVdiZ5vNJqGGNYlAO%2FOn73guEO%2FAbFsOLrRTeSsoviaE9gxsXY8lr8H3SqosYqGczxVx1VWj8WybWFfYZTGDm%2Bv5bz5AKPKQhmE6vHT8VebRxh%2BYNvHDAqpGOaIcan2H3q9RgeI%2Bdq6RIaD5Q%2BqPmae4w0eVmgjkS6ve%2FnG2JgGtxiorO2YQJb54WB6GWb4OsWltX4dH%2FhFl%2Fl%2Bu5mj3P64hEfU4&X-Amz-Signature=0cfe1ce4b771f8466ce3c0ea1d7150211cca45b31088d3a284c6782f0b19f65c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ57ZXLP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAv9eAR5BXstuiOMf1TLvrPvtIlz9m2LWj8cxAjUGeEIAiEA0EmpyBr1GOr3qcEBP7H3HJl2aClnd542K1FAuBpajnMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAHNp1z3LD3M8CX6%2FyrcA0v%2FqIDswWIxiIWeuu%2FhGHVFhjbv3ZfBI1WedYyeMPhqPGim3sr58FeRLGIi49%2FZCtOzxiVwQX07W563U6JTJVg5d2xIaEyUWHnlRZTKQYWzbDsrFWN48psK1CYUNtX4k4MwlkcTDaGHrv5wSCgZzUNF1DbO%2B61ilBfFn%2FZVl8tArgg7NDxO7YIhCMqQh0RePG8AgjLUGseb5qmhTsBQQw%2BwStHB5tFbGTZidiQkIzyMxYh%2Br50CNoXMHlrcTaNE1Fkms88fXPMJnYOxTmlys%2BGqriNrYzYEiyCGrB1Ds5oyQwV6BhyF1EjHXH2BIGIh1A4dK08%2BvIObw5igejrbWKEKN%2BOtfpAbLKCHIGCvHX5IndI1PY02eMM3HCvdDmy4wuqpjAsG1r0XVg9htcFVpMSSZqygTlHwvA%2FrAxklOQGnlwDqD2rivKuBnscdrNolLYmN9FrNYFiGDEKX%2F0GDlIhrB%2BZ6Y52xvdnm5ifxABfQVKDl0T1qYGEJLlIDrfGYRP5yQoS2MsUPIJsM2RHOpwCwlPGUdPCVo3A0Jp%2FX5izrolD6Dt4zXakcJ4BQn8eun1vrgcGo%2FFDu3YCsXX1eSC13nwHw9FgYLjODwMJYjcaVoIshUrfsU2fYP6UYMMjt%2F70GOqUBKe26%2BvrH69E%2FLq2f5GgKFBkTociGH4B2NOCx3Z0M1pq4RT49UTOz7RgC0QVtk7SinGPn8H0kgsWt9BQFBod9Fu%2BKfO9R%2Fwqpf%2BB857IvKXvOsNrm%2BdWfGUngYICB%2FCYyO4ikgYvKCXMZAaAp8k%2BZqXsUfoiMnC3NySss8JkTvlMwUnowJWkQIByFfGyNrJzm4AVYn6OX7L2iFwR5HB1fWkauuWYU&X-Amz-Signature=6ebea051a3419b1e4e48c4670926a7e213fb466794501767770db21485b72525&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ57ZXLP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAv9eAR5BXstuiOMf1TLvrPvtIlz9m2LWj8cxAjUGeEIAiEA0EmpyBr1GOr3qcEBP7H3HJl2aClnd542K1FAuBpajnMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAHNp1z3LD3M8CX6%2FyrcA0v%2FqIDswWIxiIWeuu%2FhGHVFhjbv3ZfBI1WedYyeMPhqPGim3sr58FeRLGIi49%2FZCtOzxiVwQX07W563U6JTJVg5d2xIaEyUWHnlRZTKQYWzbDsrFWN48psK1CYUNtX4k4MwlkcTDaGHrv5wSCgZzUNF1DbO%2B61ilBfFn%2FZVl8tArgg7NDxO7YIhCMqQh0RePG8AgjLUGseb5qmhTsBQQw%2BwStHB5tFbGTZidiQkIzyMxYh%2Br50CNoXMHlrcTaNE1Fkms88fXPMJnYOxTmlys%2BGqriNrYzYEiyCGrB1Ds5oyQwV6BhyF1EjHXH2BIGIh1A4dK08%2BvIObw5igejrbWKEKN%2BOtfpAbLKCHIGCvHX5IndI1PY02eMM3HCvdDmy4wuqpjAsG1r0XVg9htcFVpMSSZqygTlHwvA%2FrAxklOQGnlwDqD2rivKuBnscdrNolLYmN9FrNYFiGDEKX%2F0GDlIhrB%2BZ6Y52xvdnm5ifxABfQVKDl0T1qYGEJLlIDrfGYRP5yQoS2MsUPIJsM2RHOpwCwlPGUdPCVo3A0Jp%2FX5izrolD6Dt4zXakcJ4BQn8eun1vrgcGo%2FFDu3YCsXX1eSC13nwHw9FgYLjODwMJYjcaVoIshUrfsU2fYP6UYMMjt%2F70GOqUBKe26%2BvrH69E%2FLq2f5GgKFBkTociGH4B2NOCx3Z0M1pq4RT49UTOz7RgC0QVtk7SinGPn8H0kgsWt9BQFBod9Fu%2BKfO9R%2Fwqpf%2BB857IvKXvOsNrm%2BdWfGUngYICB%2FCYyO4ikgYvKCXMZAaAp8k%2BZqXsUfoiMnC3NySss8JkTvlMwUnowJWkQIByFfGyNrJzm4AVYn6OX7L2iFwR5HB1fWkauuWYU&X-Amz-Signature=dc890e72c145eacd3d087e36435b8d3c1de350663039988595f98c3b4775006a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ57ZXLP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAv9eAR5BXstuiOMf1TLvrPvtIlz9m2LWj8cxAjUGeEIAiEA0EmpyBr1GOr3qcEBP7H3HJl2aClnd542K1FAuBpajnMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAHNp1z3LD3M8CX6%2FyrcA0v%2FqIDswWIxiIWeuu%2FhGHVFhjbv3ZfBI1WedYyeMPhqPGim3sr58FeRLGIi49%2FZCtOzxiVwQX07W563U6JTJVg5d2xIaEyUWHnlRZTKQYWzbDsrFWN48psK1CYUNtX4k4MwlkcTDaGHrv5wSCgZzUNF1DbO%2B61ilBfFn%2FZVl8tArgg7NDxO7YIhCMqQh0RePG8AgjLUGseb5qmhTsBQQw%2BwStHB5tFbGTZidiQkIzyMxYh%2Br50CNoXMHlrcTaNE1Fkms88fXPMJnYOxTmlys%2BGqriNrYzYEiyCGrB1Ds5oyQwV6BhyF1EjHXH2BIGIh1A4dK08%2BvIObw5igejrbWKEKN%2BOtfpAbLKCHIGCvHX5IndI1PY02eMM3HCvdDmy4wuqpjAsG1r0XVg9htcFVpMSSZqygTlHwvA%2FrAxklOQGnlwDqD2rivKuBnscdrNolLYmN9FrNYFiGDEKX%2F0GDlIhrB%2BZ6Y52xvdnm5ifxABfQVKDl0T1qYGEJLlIDrfGYRP5yQoS2MsUPIJsM2RHOpwCwlPGUdPCVo3A0Jp%2FX5izrolD6Dt4zXakcJ4BQn8eun1vrgcGo%2FFDu3YCsXX1eSC13nwHw9FgYLjODwMJYjcaVoIshUrfsU2fYP6UYMMjt%2F70GOqUBKe26%2BvrH69E%2FLq2f5GgKFBkTociGH4B2NOCx3Z0M1pq4RT49UTOz7RgC0QVtk7SinGPn8H0kgsWt9BQFBod9Fu%2BKfO9R%2Fwqpf%2BB857IvKXvOsNrm%2BdWfGUngYICB%2FCYyO4ikgYvKCXMZAaAp8k%2BZqXsUfoiMnC3NySss8JkTvlMwUnowJWkQIByFfGyNrJzm4AVYn6OX7L2iFwR5HB1fWkauuWYU&X-Amz-Signature=ec3d4e2385f249bdeef2455f7b0b5749f6947d541caf369e400c5b24c4fa9903&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ57ZXLP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAv9eAR5BXstuiOMf1TLvrPvtIlz9m2LWj8cxAjUGeEIAiEA0EmpyBr1GOr3qcEBP7H3HJl2aClnd542K1FAuBpajnMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAHNp1z3LD3M8CX6%2FyrcA0v%2FqIDswWIxiIWeuu%2FhGHVFhjbv3ZfBI1WedYyeMPhqPGim3sr58FeRLGIi49%2FZCtOzxiVwQX07W563U6JTJVg5d2xIaEyUWHnlRZTKQYWzbDsrFWN48psK1CYUNtX4k4MwlkcTDaGHrv5wSCgZzUNF1DbO%2B61ilBfFn%2FZVl8tArgg7NDxO7YIhCMqQh0RePG8AgjLUGseb5qmhTsBQQw%2BwStHB5tFbGTZidiQkIzyMxYh%2Br50CNoXMHlrcTaNE1Fkms88fXPMJnYOxTmlys%2BGqriNrYzYEiyCGrB1Ds5oyQwV6BhyF1EjHXH2BIGIh1A4dK08%2BvIObw5igejrbWKEKN%2BOtfpAbLKCHIGCvHX5IndI1PY02eMM3HCvdDmy4wuqpjAsG1r0XVg9htcFVpMSSZqygTlHwvA%2FrAxklOQGnlwDqD2rivKuBnscdrNolLYmN9FrNYFiGDEKX%2F0GDlIhrB%2BZ6Y52xvdnm5ifxABfQVKDl0T1qYGEJLlIDrfGYRP5yQoS2MsUPIJsM2RHOpwCwlPGUdPCVo3A0Jp%2FX5izrolD6Dt4zXakcJ4BQn8eun1vrgcGo%2FFDu3YCsXX1eSC13nwHw9FgYLjODwMJYjcaVoIshUrfsU2fYP6UYMMjt%2F70GOqUBKe26%2BvrH69E%2FLq2f5GgKFBkTociGH4B2NOCx3Z0M1pq4RT49UTOz7RgC0QVtk7SinGPn8H0kgsWt9BQFBod9Fu%2BKfO9R%2Fwqpf%2BB857IvKXvOsNrm%2BdWfGUngYICB%2FCYyO4ikgYvKCXMZAaAp8k%2BZqXsUfoiMnC3NySss8JkTvlMwUnowJWkQIByFfGyNrJzm4AVYn6OX7L2iFwR5HB1fWkauuWYU&X-Amz-Signature=ac5648cb9c17a3f6502ddb976a15430f8b113f8887faf2c3af012c4308d6ad08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ57ZXLP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAv9eAR5BXstuiOMf1TLvrPvtIlz9m2LWj8cxAjUGeEIAiEA0EmpyBr1GOr3qcEBP7H3HJl2aClnd542K1FAuBpajnMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAHNp1z3LD3M8CX6%2FyrcA0v%2FqIDswWIxiIWeuu%2FhGHVFhjbv3ZfBI1WedYyeMPhqPGim3sr58FeRLGIi49%2FZCtOzxiVwQX07W563U6JTJVg5d2xIaEyUWHnlRZTKQYWzbDsrFWN48psK1CYUNtX4k4MwlkcTDaGHrv5wSCgZzUNF1DbO%2B61ilBfFn%2FZVl8tArgg7NDxO7YIhCMqQh0RePG8AgjLUGseb5qmhTsBQQw%2BwStHB5tFbGTZidiQkIzyMxYh%2Br50CNoXMHlrcTaNE1Fkms88fXPMJnYOxTmlys%2BGqriNrYzYEiyCGrB1Ds5oyQwV6BhyF1EjHXH2BIGIh1A4dK08%2BvIObw5igejrbWKEKN%2BOtfpAbLKCHIGCvHX5IndI1PY02eMM3HCvdDmy4wuqpjAsG1r0XVg9htcFVpMSSZqygTlHwvA%2FrAxklOQGnlwDqD2rivKuBnscdrNolLYmN9FrNYFiGDEKX%2F0GDlIhrB%2BZ6Y52xvdnm5ifxABfQVKDl0T1qYGEJLlIDrfGYRP5yQoS2MsUPIJsM2RHOpwCwlPGUdPCVo3A0Jp%2FX5izrolD6Dt4zXakcJ4BQn8eun1vrgcGo%2FFDu3YCsXX1eSC13nwHw9FgYLjODwMJYjcaVoIshUrfsU2fYP6UYMMjt%2F70GOqUBKe26%2BvrH69E%2FLq2f5GgKFBkTociGH4B2NOCx3Z0M1pq4RT49UTOz7RgC0QVtk7SinGPn8H0kgsWt9BQFBod9Fu%2BKfO9R%2Fwqpf%2BB857IvKXvOsNrm%2BdWfGUngYICB%2FCYyO4ikgYvKCXMZAaAp8k%2BZqXsUfoiMnC3NySss8JkTvlMwUnowJWkQIByFfGyNrJzm4AVYn6OX7L2iFwR5HB1fWkauuWYU&X-Amz-Signature=489489d5e98445b220211b3e1db94d838505c78639244a0a735b35c87b08799b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ57ZXLP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAv9eAR5BXstuiOMf1TLvrPvtIlz9m2LWj8cxAjUGeEIAiEA0EmpyBr1GOr3qcEBP7H3HJl2aClnd542K1FAuBpajnMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAHNp1z3LD3M8CX6%2FyrcA0v%2FqIDswWIxiIWeuu%2FhGHVFhjbv3ZfBI1WedYyeMPhqPGim3sr58FeRLGIi49%2FZCtOzxiVwQX07W563U6JTJVg5d2xIaEyUWHnlRZTKQYWzbDsrFWN48psK1CYUNtX4k4MwlkcTDaGHrv5wSCgZzUNF1DbO%2B61ilBfFn%2FZVl8tArgg7NDxO7YIhCMqQh0RePG8AgjLUGseb5qmhTsBQQw%2BwStHB5tFbGTZidiQkIzyMxYh%2Br50CNoXMHlrcTaNE1Fkms88fXPMJnYOxTmlys%2BGqriNrYzYEiyCGrB1Ds5oyQwV6BhyF1EjHXH2BIGIh1A4dK08%2BvIObw5igejrbWKEKN%2BOtfpAbLKCHIGCvHX5IndI1PY02eMM3HCvdDmy4wuqpjAsG1r0XVg9htcFVpMSSZqygTlHwvA%2FrAxklOQGnlwDqD2rivKuBnscdrNolLYmN9FrNYFiGDEKX%2F0GDlIhrB%2BZ6Y52xvdnm5ifxABfQVKDl0T1qYGEJLlIDrfGYRP5yQoS2MsUPIJsM2RHOpwCwlPGUdPCVo3A0Jp%2FX5izrolD6Dt4zXakcJ4BQn8eun1vrgcGo%2FFDu3YCsXX1eSC13nwHw9FgYLjODwMJYjcaVoIshUrfsU2fYP6UYMMjt%2F70GOqUBKe26%2BvrH69E%2FLq2f5GgKFBkTociGH4B2NOCx3Z0M1pq4RT49UTOz7RgC0QVtk7SinGPn8H0kgsWt9BQFBod9Fu%2BKfO9R%2Fwqpf%2BB857IvKXvOsNrm%2BdWfGUngYICB%2FCYyO4ikgYvKCXMZAaAp8k%2BZqXsUfoiMnC3NySss8JkTvlMwUnowJWkQIByFfGyNrJzm4AVYn6OX7L2iFwR5HB1fWkauuWYU&X-Amz-Signature=073afb6e23aaf67d8928d75e0966658a435bb5ad093269e043a6973161051604&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ57ZXLP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAv9eAR5BXstuiOMf1TLvrPvtIlz9m2LWj8cxAjUGeEIAiEA0EmpyBr1GOr3qcEBP7H3HJl2aClnd542K1FAuBpajnMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAHNp1z3LD3M8CX6%2FyrcA0v%2FqIDswWIxiIWeuu%2FhGHVFhjbv3ZfBI1WedYyeMPhqPGim3sr58FeRLGIi49%2FZCtOzxiVwQX07W563U6JTJVg5d2xIaEyUWHnlRZTKQYWzbDsrFWN48psK1CYUNtX4k4MwlkcTDaGHrv5wSCgZzUNF1DbO%2B61ilBfFn%2FZVl8tArgg7NDxO7YIhCMqQh0RePG8AgjLUGseb5qmhTsBQQw%2BwStHB5tFbGTZidiQkIzyMxYh%2Br50CNoXMHlrcTaNE1Fkms88fXPMJnYOxTmlys%2BGqriNrYzYEiyCGrB1Ds5oyQwV6BhyF1EjHXH2BIGIh1A4dK08%2BvIObw5igejrbWKEKN%2BOtfpAbLKCHIGCvHX5IndI1PY02eMM3HCvdDmy4wuqpjAsG1r0XVg9htcFVpMSSZqygTlHwvA%2FrAxklOQGnlwDqD2rivKuBnscdrNolLYmN9FrNYFiGDEKX%2F0GDlIhrB%2BZ6Y52xvdnm5ifxABfQVKDl0T1qYGEJLlIDrfGYRP5yQoS2MsUPIJsM2RHOpwCwlPGUdPCVo3A0Jp%2FX5izrolD6Dt4zXakcJ4BQn8eun1vrgcGo%2FFDu3YCsXX1eSC13nwHw9FgYLjODwMJYjcaVoIshUrfsU2fYP6UYMMjt%2F70GOqUBKe26%2BvrH69E%2FLq2f5GgKFBkTociGH4B2NOCx3Z0M1pq4RT49UTOz7RgC0QVtk7SinGPn8H0kgsWt9BQFBod9Fu%2BKfO9R%2Fwqpf%2BB857IvKXvOsNrm%2BdWfGUngYICB%2FCYyO4ikgYvKCXMZAaAp8k%2BZqXsUfoiMnC3NySss8JkTvlMwUnowJWkQIByFfGyNrJzm4AVYn6OX7L2iFwR5HB1fWkauuWYU&X-Amz-Signature=5055f4cd38b73017c9aa99d35cdd1d4a6399b6d02bc7cc95eaa0ba20f1dd5b07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ57ZXLP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAv9eAR5BXstuiOMf1TLvrPvtIlz9m2LWj8cxAjUGeEIAiEA0EmpyBr1GOr3qcEBP7H3HJl2aClnd542K1FAuBpajnMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAHNp1z3LD3M8CX6%2FyrcA0v%2FqIDswWIxiIWeuu%2FhGHVFhjbv3ZfBI1WedYyeMPhqPGim3sr58FeRLGIi49%2FZCtOzxiVwQX07W563U6JTJVg5d2xIaEyUWHnlRZTKQYWzbDsrFWN48psK1CYUNtX4k4MwlkcTDaGHrv5wSCgZzUNF1DbO%2B61ilBfFn%2FZVl8tArgg7NDxO7YIhCMqQh0RePG8AgjLUGseb5qmhTsBQQw%2BwStHB5tFbGTZidiQkIzyMxYh%2Br50CNoXMHlrcTaNE1Fkms88fXPMJnYOxTmlys%2BGqriNrYzYEiyCGrB1Ds5oyQwV6BhyF1EjHXH2BIGIh1A4dK08%2BvIObw5igejrbWKEKN%2BOtfpAbLKCHIGCvHX5IndI1PY02eMM3HCvdDmy4wuqpjAsG1r0XVg9htcFVpMSSZqygTlHwvA%2FrAxklOQGnlwDqD2rivKuBnscdrNolLYmN9FrNYFiGDEKX%2F0GDlIhrB%2BZ6Y52xvdnm5ifxABfQVKDl0T1qYGEJLlIDrfGYRP5yQoS2MsUPIJsM2RHOpwCwlPGUdPCVo3A0Jp%2FX5izrolD6Dt4zXakcJ4BQn8eun1vrgcGo%2FFDu3YCsXX1eSC13nwHw9FgYLjODwMJYjcaVoIshUrfsU2fYP6UYMMjt%2F70GOqUBKe26%2BvrH69E%2FLq2f5GgKFBkTociGH4B2NOCx3Z0M1pq4RT49UTOz7RgC0QVtk7SinGPn8H0kgsWt9BQFBod9Fu%2BKfO9R%2Fwqpf%2BB857IvKXvOsNrm%2BdWfGUngYICB%2FCYyO4ikgYvKCXMZAaAp8k%2BZqXsUfoiMnC3NySss8JkTvlMwUnowJWkQIByFfGyNrJzm4AVYn6OX7L2iFwR5HB1fWkauuWYU&X-Amz-Signature=b5e2a6b350fc61d9e88e557feb16bb4423cc4ca8efb629f2c83f34d2349c17e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

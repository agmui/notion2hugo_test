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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MRDLLU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCajBrYazLFx%2BwPhU%2B6YJp1d0iMzm7ANbW7bZd%2F4ZhmoAIhAOSzY1%2FGDb0nEutbuuO%2F3ltO9pAGzZk%2BBGO2%2FQOretuzKv8DCF0QABoMNjM3NDIzMTgzODA1IgygkUDlrVNihbKlRMcq3APjmkGF%2FurBWEMlmQlOLeYZN1biQjXxiWvjmBGjZmSb7a8zXV94kOAdTb9iGwxZ6V6wlnEIcAWm56LtSgFnb2OeeTA76B9hJcT9t8zFd1OKFfH62hQiGvkTlY1onfzirv60gTi3DyYXK4KM4bD%2F7nWNiI5hNPo0Y52p3184MC%2BTOya9tl2pwhX726pI3TGccPeiUzI756FGa9xMz1H7p%2FehZkambC2fupmKfZFliiS8KlyiKur2OJUkhH7ZDimzPNgQs5YbyzWgLcsQGU6xHJ2qzqPbNDR3pCYCQL3ZX93sCRRsboLYjpaP38dTv%2BCKAx7pqvpGVRdha38rDO0WHYYesbLgc8sbnLzlxHFTDCotHEkBdQOU2GS%2B9NoSspdWLoTm9rO6gNB0ITj2bDLfsVtg9U4RIJ6WEjFDlfWsh9rei6iCDD%2BuVnNPkWkrPS9Tkm%2B5Bb60%2FOELJaWFnxvyVh5ItgZZFFYj6sER%2F1E7GlM5y2e0zkin6lN%2FyeWnBWNQmnyP0tloy%2FfuaFn9rBWrgOGEgr6uxH1OqBAr3pjvPhL4RdFzzAvEwYsSBrZVWhF7RAUxFS4S6VUI689VG86GTerGEYNEamyCO%2BhQhpUPg%2FWOwC0UCeEWZGAndndVZDD5teW%2BBjqkAUR3kyK502e2CMUFjL1PWoW2O2PxSdvtSSVA4ScS0Jxiz8%2BIZaQryGHbRUxsVeQsCDy9pmcPIYWqXPC6gv4hjlZIvJfTMMygeNbU8vCv4UwDdC9yCOkFsX7eoJo%2FdGsrhGZstDKj57XWiEkYqxiBIvq5rRtiFfrWIrc%2BVY21xeRQYH2VfilmiHzD78swRiXnH%2FpnEIgHBQloZ%2BCs%2Bd49lcJJRNmJ&X-Amz-Signature=c44cf780355d2650aa2d549fb3a9485c9ebb7530ba88ede447afeb36ce0a33fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MRDLLU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCajBrYazLFx%2BwPhU%2B6YJp1d0iMzm7ANbW7bZd%2F4ZhmoAIhAOSzY1%2FGDb0nEutbuuO%2F3ltO9pAGzZk%2BBGO2%2FQOretuzKv8DCF0QABoMNjM3NDIzMTgzODA1IgygkUDlrVNihbKlRMcq3APjmkGF%2FurBWEMlmQlOLeYZN1biQjXxiWvjmBGjZmSb7a8zXV94kOAdTb9iGwxZ6V6wlnEIcAWm56LtSgFnb2OeeTA76B9hJcT9t8zFd1OKFfH62hQiGvkTlY1onfzirv60gTi3DyYXK4KM4bD%2F7nWNiI5hNPo0Y52p3184MC%2BTOya9tl2pwhX726pI3TGccPeiUzI756FGa9xMz1H7p%2FehZkambC2fupmKfZFliiS8KlyiKur2OJUkhH7ZDimzPNgQs5YbyzWgLcsQGU6xHJ2qzqPbNDR3pCYCQL3ZX93sCRRsboLYjpaP38dTv%2BCKAx7pqvpGVRdha38rDO0WHYYesbLgc8sbnLzlxHFTDCotHEkBdQOU2GS%2B9NoSspdWLoTm9rO6gNB0ITj2bDLfsVtg9U4RIJ6WEjFDlfWsh9rei6iCDD%2BuVnNPkWkrPS9Tkm%2B5Bb60%2FOELJaWFnxvyVh5ItgZZFFYj6sER%2F1E7GlM5y2e0zkin6lN%2FyeWnBWNQmnyP0tloy%2FfuaFn9rBWrgOGEgr6uxH1OqBAr3pjvPhL4RdFzzAvEwYsSBrZVWhF7RAUxFS4S6VUI689VG86GTerGEYNEamyCO%2BhQhpUPg%2FWOwC0UCeEWZGAndndVZDD5teW%2BBjqkAUR3kyK502e2CMUFjL1PWoW2O2PxSdvtSSVA4ScS0Jxiz8%2BIZaQryGHbRUxsVeQsCDy9pmcPIYWqXPC6gv4hjlZIvJfTMMygeNbU8vCv4UwDdC9yCOkFsX7eoJo%2FdGsrhGZstDKj57XWiEkYqxiBIvq5rRtiFfrWIrc%2BVY21xeRQYH2VfilmiHzD78swRiXnH%2FpnEIgHBQloZ%2BCs%2Bd49lcJJRNmJ&X-Amz-Signature=e56fb49673d5256f9e9551eea10cb8607ed5a29306618c1a7ee2b4ee454ad771&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MRDLLU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCajBrYazLFx%2BwPhU%2B6YJp1d0iMzm7ANbW7bZd%2F4ZhmoAIhAOSzY1%2FGDb0nEutbuuO%2F3ltO9pAGzZk%2BBGO2%2FQOretuzKv8DCF0QABoMNjM3NDIzMTgzODA1IgygkUDlrVNihbKlRMcq3APjmkGF%2FurBWEMlmQlOLeYZN1biQjXxiWvjmBGjZmSb7a8zXV94kOAdTb9iGwxZ6V6wlnEIcAWm56LtSgFnb2OeeTA76B9hJcT9t8zFd1OKFfH62hQiGvkTlY1onfzirv60gTi3DyYXK4KM4bD%2F7nWNiI5hNPo0Y52p3184MC%2BTOya9tl2pwhX726pI3TGccPeiUzI756FGa9xMz1H7p%2FehZkambC2fupmKfZFliiS8KlyiKur2OJUkhH7ZDimzPNgQs5YbyzWgLcsQGU6xHJ2qzqPbNDR3pCYCQL3ZX93sCRRsboLYjpaP38dTv%2BCKAx7pqvpGVRdha38rDO0WHYYesbLgc8sbnLzlxHFTDCotHEkBdQOU2GS%2B9NoSspdWLoTm9rO6gNB0ITj2bDLfsVtg9U4RIJ6WEjFDlfWsh9rei6iCDD%2BuVnNPkWkrPS9Tkm%2B5Bb60%2FOELJaWFnxvyVh5ItgZZFFYj6sER%2F1E7GlM5y2e0zkin6lN%2FyeWnBWNQmnyP0tloy%2FfuaFn9rBWrgOGEgr6uxH1OqBAr3pjvPhL4RdFzzAvEwYsSBrZVWhF7RAUxFS4S6VUI689VG86GTerGEYNEamyCO%2BhQhpUPg%2FWOwC0UCeEWZGAndndVZDD5teW%2BBjqkAUR3kyK502e2CMUFjL1PWoW2O2PxSdvtSSVA4ScS0Jxiz8%2BIZaQryGHbRUxsVeQsCDy9pmcPIYWqXPC6gv4hjlZIvJfTMMygeNbU8vCv4UwDdC9yCOkFsX7eoJo%2FdGsrhGZstDKj57XWiEkYqxiBIvq5rRtiFfrWIrc%2BVY21xeRQYH2VfilmiHzD78swRiXnH%2FpnEIgHBQloZ%2BCs%2Bd49lcJJRNmJ&X-Amz-Signature=49a4b748b5ed7cc42d941415eeaddc59f2bcb591695ce78d987aee9f9cd21882&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MRDLLU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCajBrYazLFx%2BwPhU%2B6YJp1d0iMzm7ANbW7bZd%2F4ZhmoAIhAOSzY1%2FGDb0nEutbuuO%2F3ltO9pAGzZk%2BBGO2%2FQOretuzKv8DCF0QABoMNjM3NDIzMTgzODA1IgygkUDlrVNihbKlRMcq3APjmkGF%2FurBWEMlmQlOLeYZN1biQjXxiWvjmBGjZmSb7a8zXV94kOAdTb9iGwxZ6V6wlnEIcAWm56LtSgFnb2OeeTA76B9hJcT9t8zFd1OKFfH62hQiGvkTlY1onfzirv60gTi3DyYXK4KM4bD%2F7nWNiI5hNPo0Y52p3184MC%2BTOya9tl2pwhX726pI3TGccPeiUzI756FGa9xMz1H7p%2FehZkambC2fupmKfZFliiS8KlyiKur2OJUkhH7ZDimzPNgQs5YbyzWgLcsQGU6xHJ2qzqPbNDR3pCYCQL3ZX93sCRRsboLYjpaP38dTv%2BCKAx7pqvpGVRdha38rDO0WHYYesbLgc8sbnLzlxHFTDCotHEkBdQOU2GS%2B9NoSspdWLoTm9rO6gNB0ITj2bDLfsVtg9U4RIJ6WEjFDlfWsh9rei6iCDD%2BuVnNPkWkrPS9Tkm%2B5Bb60%2FOELJaWFnxvyVh5ItgZZFFYj6sER%2F1E7GlM5y2e0zkin6lN%2FyeWnBWNQmnyP0tloy%2FfuaFn9rBWrgOGEgr6uxH1OqBAr3pjvPhL4RdFzzAvEwYsSBrZVWhF7RAUxFS4S6VUI689VG86GTerGEYNEamyCO%2BhQhpUPg%2FWOwC0UCeEWZGAndndVZDD5teW%2BBjqkAUR3kyK502e2CMUFjL1PWoW2O2PxSdvtSSVA4ScS0Jxiz8%2BIZaQryGHbRUxsVeQsCDy9pmcPIYWqXPC6gv4hjlZIvJfTMMygeNbU8vCv4UwDdC9yCOkFsX7eoJo%2FdGsrhGZstDKj57XWiEkYqxiBIvq5rRtiFfrWIrc%2BVY21xeRQYH2VfilmiHzD78swRiXnH%2FpnEIgHBQloZ%2BCs%2Bd49lcJJRNmJ&X-Amz-Signature=63b9b582bb61c1a6fdece15ffeb76508624aaf1608a785ef3106d7e3dbf319bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MRDLLU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCajBrYazLFx%2BwPhU%2B6YJp1d0iMzm7ANbW7bZd%2F4ZhmoAIhAOSzY1%2FGDb0nEutbuuO%2F3ltO9pAGzZk%2BBGO2%2FQOretuzKv8DCF0QABoMNjM3NDIzMTgzODA1IgygkUDlrVNihbKlRMcq3APjmkGF%2FurBWEMlmQlOLeYZN1biQjXxiWvjmBGjZmSb7a8zXV94kOAdTb9iGwxZ6V6wlnEIcAWm56LtSgFnb2OeeTA76B9hJcT9t8zFd1OKFfH62hQiGvkTlY1onfzirv60gTi3DyYXK4KM4bD%2F7nWNiI5hNPo0Y52p3184MC%2BTOya9tl2pwhX726pI3TGccPeiUzI756FGa9xMz1H7p%2FehZkambC2fupmKfZFliiS8KlyiKur2OJUkhH7ZDimzPNgQs5YbyzWgLcsQGU6xHJ2qzqPbNDR3pCYCQL3ZX93sCRRsboLYjpaP38dTv%2BCKAx7pqvpGVRdha38rDO0WHYYesbLgc8sbnLzlxHFTDCotHEkBdQOU2GS%2B9NoSspdWLoTm9rO6gNB0ITj2bDLfsVtg9U4RIJ6WEjFDlfWsh9rei6iCDD%2BuVnNPkWkrPS9Tkm%2B5Bb60%2FOELJaWFnxvyVh5ItgZZFFYj6sER%2F1E7GlM5y2e0zkin6lN%2FyeWnBWNQmnyP0tloy%2FfuaFn9rBWrgOGEgr6uxH1OqBAr3pjvPhL4RdFzzAvEwYsSBrZVWhF7RAUxFS4S6VUI689VG86GTerGEYNEamyCO%2BhQhpUPg%2FWOwC0UCeEWZGAndndVZDD5teW%2BBjqkAUR3kyK502e2CMUFjL1PWoW2O2PxSdvtSSVA4ScS0Jxiz8%2BIZaQryGHbRUxsVeQsCDy9pmcPIYWqXPC6gv4hjlZIvJfTMMygeNbU8vCv4UwDdC9yCOkFsX7eoJo%2FdGsrhGZstDKj57XWiEkYqxiBIvq5rRtiFfrWIrc%2BVY21xeRQYH2VfilmiHzD78swRiXnH%2FpnEIgHBQloZ%2BCs%2Bd49lcJJRNmJ&X-Amz-Signature=c28093dfefdf1fbbaf51be72f18117d73dcb9d2d9cfc452407d8f8e929cca55d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MRDLLU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCajBrYazLFx%2BwPhU%2B6YJp1d0iMzm7ANbW7bZd%2F4ZhmoAIhAOSzY1%2FGDb0nEutbuuO%2F3ltO9pAGzZk%2BBGO2%2FQOretuzKv8DCF0QABoMNjM3NDIzMTgzODA1IgygkUDlrVNihbKlRMcq3APjmkGF%2FurBWEMlmQlOLeYZN1biQjXxiWvjmBGjZmSb7a8zXV94kOAdTb9iGwxZ6V6wlnEIcAWm56LtSgFnb2OeeTA76B9hJcT9t8zFd1OKFfH62hQiGvkTlY1onfzirv60gTi3DyYXK4KM4bD%2F7nWNiI5hNPo0Y52p3184MC%2BTOya9tl2pwhX726pI3TGccPeiUzI756FGa9xMz1H7p%2FehZkambC2fupmKfZFliiS8KlyiKur2OJUkhH7ZDimzPNgQs5YbyzWgLcsQGU6xHJ2qzqPbNDR3pCYCQL3ZX93sCRRsboLYjpaP38dTv%2BCKAx7pqvpGVRdha38rDO0WHYYesbLgc8sbnLzlxHFTDCotHEkBdQOU2GS%2B9NoSspdWLoTm9rO6gNB0ITj2bDLfsVtg9U4RIJ6WEjFDlfWsh9rei6iCDD%2BuVnNPkWkrPS9Tkm%2B5Bb60%2FOELJaWFnxvyVh5ItgZZFFYj6sER%2F1E7GlM5y2e0zkin6lN%2FyeWnBWNQmnyP0tloy%2FfuaFn9rBWrgOGEgr6uxH1OqBAr3pjvPhL4RdFzzAvEwYsSBrZVWhF7RAUxFS4S6VUI689VG86GTerGEYNEamyCO%2BhQhpUPg%2FWOwC0UCeEWZGAndndVZDD5teW%2BBjqkAUR3kyK502e2CMUFjL1PWoW2O2PxSdvtSSVA4ScS0Jxiz8%2BIZaQryGHbRUxsVeQsCDy9pmcPIYWqXPC6gv4hjlZIvJfTMMygeNbU8vCv4UwDdC9yCOkFsX7eoJo%2FdGsrhGZstDKj57XWiEkYqxiBIvq5rRtiFfrWIrc%2BVY21xeRQYH2VfilmiHzD78swRiXnH%2FpnEIgHBQloZ%2BCs%2Bd49lcJJRNmJ&X-Amz-Signature=0ef03e1828874bce06836e22b01bdf61e57a689bc99ecf561fdfbad1a9b4cd5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MRDLLU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCajBrYazLFx%2BwPhU%2B6YJp1d0iMzm7ANbW7bZd%2F4ZhmoAIhAOSzY1%2FGDb0nEutbuuO%2F3ltO9pAGzZk%2BBGO2%2FQOretuzKv8DCF0QABoMNjM3NDIzMTgzODA1IgygkUDlrVNihbKlRMcq3APjmkGF%2FurBWEMlmQlOLeYZN1biQjXxiWvjmBGjZmSb7a8zXV94kOAdTb9iGwxZ6V6wlnEIcAWm56LtSgFnb2OeeTA76B9hJcT9t8zFd1OKFfH62hQiGvkTlY1onfzirv60gTi3DyYXK4KM4bD%2F7nWNiI5hNPo0Y52p3184MC%2BTOya9tl2pwhX726pI3TGccPeiUzI756FGa9xMz1H7p%2FehZkambC2fupmKfZFliiS8KlyiKur2OJUkhH7ZDimzPNgQs5YbyzWgLcsQGU6xHJ2qzqPbNDR3pCYCQL3ZX93sCRRsboLYjpaP38dTv%2BCKAx7pqvpGVRdha38rDO0WHYYesbLgc8sbnLzlxHFTDCotHEkBdQOU2GS%2B9NoSspdWLoTm9rO6gNB0ITj2bDLfsVtg9U4RIJ6WEjFDlfWsh9rei6iCDD%2BuVnNPkWkrPS9Tkm%2B5Bb60%2FOELJaWFnxvyVh5ItgZZFFYj6sER%2F1E7GlM5y2e0zkin6lN%2FyeWnBWNQmnyP0tloy%2FfuaFn9rBWrgOGEgr6uxH1OqBAr3pjvPhL4RdFzzAvEwYsSBrZVWhF7RAUxFS4S6VUI689VG86GTerGEYNEamyCO%2BhQhpUPg%2FWOwC0UCeEWZGAndndVZDD5teW%2BBjqkAUR3kyK502e2CMUFjL1PWoW2O2PxSdvtSSVA4ScS0Jxiz8%2BIZaQryGHbRUxsVeQsCDy9pmcPIYWqXPC6gv4hjlZIvJfTMMygeNbU8vCv4UwDdC9yCOkFsX7eoJo%2FdGsrhGZstDKj57XWiEkYqxiBIvq5rRtiFfrWIrc%2BVY21xeRQYH2VfilmiHzD78swRiXnH%2FpnEIgHBQloZ%2BCs%2Bd49lcJJRNmJ&X-Amz-Signature=5b14c7b52964bfe131d36a894c43b29bc57e2f61467059fac385ce80d6e3f58d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5MRDLLU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCajBrYazLFx%2BwPhU%2B6YJp1d0iMzm7ANbW7bZd%2F4ZhmoAIhAOSzY1%2FGDb0nEutbuuO%2F3ltO9pAGzZk%2BBGO2%2FQOretuzKv8DCF0QABoMNjM3NDIzMTgzODA1IgygkUDlrVNihbKlRMcq3APjmkGF%2FurBWEMlmQlOLeYZN1biQjXxiWvjmBGjZmSb7a8zXV94kOAdTb9iGwxZ6V6wlnEIcAWm56LtSgFnb2OeeTA76B9hJcT9t8zFd1OKFfH62hQiGvkTlY1onfzirv60gTi3DyYXK4KM4bD%2F7nWNiI5hNPo0Y52p3184MC%2BTOya9tl2pwhX726pI3TGccPeiUzI756FGa9xMz1H7p%2FehZkambC2fupmKfZFliiS8KlyiKur2OJUkhH7ZDimzPNgQs5YbyzWgLcsQGU6xHJ2qzqPbNDR3pCYCQL3ZX93sCRRsboLYjpaP38dTv%2BCKAx7pqvpGVRdha38rDO0WHYYesbLgc8sbnLzlxHFTDCotHEkBdQOU2GS%2B9NoSspdWLoTm9rO6gNB0ITj2bDLfsVtg9U4RIJ6WEjFDlfWsh9rei6iCDD%2BuVnNPkWkrPS9Tkm%2B5Bb60%2FOELJaWFnxvyVh5ItgZZFFYj6sER%2F1E7GlM5y2e0zkin6lN%2FyeWnBWNQmnyP0tloy%2FfuaFn9rBWrgOGEgr6uxH1OqBAr3pjvPhL4RdFzzAvEwYsSBrZVWhF7RAUxFS4S6VUI689VG86GTerGEYNEamyCO%2BhQhpUPg%2FWOwC0UCeEWZGAndndVZDD5teW%2BBjqkAUR3kyK502e2CMUFjL1PWoW2O2PxSdvtSSVA4ScS0Jxiz8%2BIZaQryGHbRUxsVeQsCDy9pmcPIYWqXPC6gv4hjlZIvJfTMMygeNbU8vCv4UwDdC9yCOkFsX7eoJo%2FdGsrhGZstDKj57XWiEkYqxiBIvq5rRtiFfrWIrc%2BVY21xeRQYH2VfilmiHzD78swRiXnH%2FpnEIgHBQloZ%2BCs%2Bd49lcJJRNmJ&X-Amz-Signature=39b5a148d5ea2eaa69ddb0de0669118bd5adc68dd255d40cecbed87769ac81df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

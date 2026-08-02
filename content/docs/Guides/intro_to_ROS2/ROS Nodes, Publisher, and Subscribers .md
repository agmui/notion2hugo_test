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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWDOCYU%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDPkw%2FC0dXNxWyVOecwPPURlOKhjcjxXuuUPBtOZNTLjAiAS%2F1KYR05Dm%2BcVTuIbr7iOkYt5D74Sgsvh%2F7t%2FmypNxyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFsL5oZqVHvpeBQbKtwD%2BJF7NZqUiWEbsOcgmvkAkzNincLkSqvDwC1JlkLdfY3pxZB8xcT000kx8%2BdqkzmxKkeVcHqDtO3SCSyAD6pDMraz8MJzmMSIiq7ZUydYXm%2F%2FPqhwKxR9aavh4IWd3juvG5PpJg9y2fAVccdH3TL9%2BvL1PTVC5Xbyu4K7td5K%2F3wSHQL6KWeJ5YAOO8loZYwH3CnNmMHWFujs4kZE9iCoW0a9Cew%2FvqiKuFGqY0jhY%2BKhv%2BueqYdGRSuWYYm07enWhDREPKb1O8y5VvROpOZ3sPQhZ0qOnpK3TWc7X8EHLc%2B3ATmy5gpKYM8fnA3hdDWXxFP7HcDjXlE1rRHGjmBeUQr74%2B40y%2B5N8MZQ2r7SrRSO2j9qMuDVQUNU4IsWyZIDAf2I8Q%2BPbYtHa72YJSi3kBvXJI2c7qOimlnUtxKIUdGqtvlEwh6ivTq%2FCkPT1T%2F5ITLGH%2BLqv3EF6T3jsptrE8WSIbG8EBKI%2F75N2nuu1whMVnk8d5ZSaZxcFdZtAIHpoCR91kEtjmtJd4ijFIbAAvVU2ZiI%2Bp6oWYiqdjrKTkrGbAi%2F3yaPsbg5%2FVxc%2B2Q8MzDcVX%2FVwKUshqOubSumg4qbZev5cJWBvDJBmpKZvo74Z0%2FmwSRgFtOEUdQwmcO60wY6pgEdwzrQD2hkPihuf11gcPeESMFpCrBoxTtYbussj2t2ZVyjr%2Be9PDtBLdGmXRWFwg6QfZyKL5u1ojFCoaCoTHbCIK8S%2FCN3Ee%2F%2B83vfpj9hVcExhUg1ILDW3CFeADxIvoEmyhxES9BVqxriQ9pP0YJMViWZ0p8Uqn2qy9m1p8nts8LX5121D%2BHvaXn2RwAQFuy1Exawv%2FhxRggXL7qtNEvDO%2BfqGuAw&X-Amz-Signature=063b5cc7c15370034207a88a87418a746801dab6f710fbcf110f084dcde887ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWDOCYU%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDPkw%2FC0dXNxWyVOecwPPURlOKhjcjxXuuUPBtOZNTLjAiAS%2F1KYR05Dm%2BcVTuIbr7iOkYt5D74Sgsvh%2F7t%2FmypNxyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFsL5oZqVHvpeBQbKtwD%2BJF7NZqUiWEbsOcgmvkAkzNincLkSqvDwC1JlkLdfY3pxZB8xcT000kx8%2BdqkzmxKkeVcHqDtO3SCSyAD6pDMraz8MJzmMSIiq7ZUydYXm%2F%2FPqhwKxR9aavh4IWd3juvG5PpJg9y2fAVccdH3TL9%2BvL1PTVC5Xbyu4K7td5K%2F3wSHQL6KWeJ5YAOO8loZYwH3CnNmMHWFujs4kZE9iCoW0a9Cew%2FvqiKuFGqY0jhY%2BKhv%2BueqYdGRSuWYYm07enWhDREPKb1O8y5VvROpOZ3sPQhZ0qOnpK3TWc7X8EHLc%2B3ATmy5gpKYM8fnA3hdDWXxFP7HcDjXlE1rRHGjmBeUQr74%2B40y%2B5N8MZQ2r7SrRSO2j9qMuDVQUNU4IsWyZIDAf2I8Q%2BPbYtHa72YJSi3kBvXJI2c7qOimlnUtxKIUdGqtvlEwh6ivTq%2FCkPT1T%2F5ITLGH%2BLqv3EF6T3jsptrE8WSIbG8EBKI%2F75N2nuu1whMVnk8d5ZSaZxcFdZtAIHpoCR91kEtjmtJd4ijFIbAAvVU2ZiI%2Bp6oWYiqdjrKTkrGbAi%2F3yaPsbg5%2FVxc%2B2Q8MzDcVX%2FVwKUshqOubSumg4qbZev5cJWBvDJBmpKZvo74Z0%2FmwSRgFtOEUdQwmcO60wY6pgEdwzrQD2hkPihuf11gcPeESMFpCrBoxTtYbussj2t2ZVyjr%2Be9PDtBLdGmXRWFwg6QfZyKL5u1ojFCoaCoTHbCIK8S%2FCN3Ee%2F%2B83vfpj9hVcExhUg1ILDW3CFeADxIvoEmyhxES9BVqxriQ9pP0YJMViWZ0p8Uqn2qy9m1p8nts8LX5121D%2BHvaXn2RwAQFuy1Exawv%2FhxRggXL7qtNEvDO%2BfqGuAw&X-Amz-Signature=26317da94f43fce758d712895328800190babb0d1af1bbe6624c26b4c2fe77ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWDOCYU%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDPkw%2FC0dXNxWyVOecwPPURlOKhjcjxXuuUPBtOZNTLjAiAS%2F1KYR05Dm%2BcVTuIbr7iOkYt5D74Sgsvh%2F7t%2FmypNxyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFsL5oZqVHvpeBQbKtwD%2BJF7NZqUiWEbsOcgmvkAkzNincLkSqvDwC1JlkLdfY3pxZB8xcT000kx8%2BdqkzmxKkeVcHqDtO3SCSyAD6pDMraz8MJzmMSIiq7ZUydYXm%2F%2FPqhwKxR9aavh4IWd3juvG5PpJg9y2fAVccdH3TL9%2BvL1PTVC5Xbyu4K7td5K%2F3wSHQL6KWeJ5YAOO8loZYwH3CnNmMHWFujs4kZE9iCoW0a9Cew%2FvqiKuFGqY0jhY%2BKhv%2BueqYdGRSuWYYm07enWhDREPKb1O8y5VvROpOZ3sPQhZ0qOnpK3TWc7X8EHLc%2B3ATmy5gpKYM8fnA3hdDWXxFP7HcDjXlE1rRHGjmBeUQr74%2B40y%2B5N8MZQ2r7SrRSO2j9qMuDVQUNU4IsWyZIDAf2I8Q%2BPbYtHa72YJSi3kBvXJI2c7qOimlnUtxKIUdGqtvlEwh6ivTq%2FCkPT1T%2F5ITLGH%2BLqv3EF6T3jsptrE8WSIbG8EBKI%2F75N2nuu1whMVnk8d5ZSaZxcFdZtAIHpoCR91kEtjmtJd4ijFIbAAvVU2ZiI%2Bp6oWYiqdjrKTkrGbAi%2F3yaPsbg5%2FVxc%2B2Q8MzDcVX%2FVwKUshqOubSumg4qbZev5cJWBvDJBmpKZvo74Z0%2FmwSRgFtOEUdQwmcO60wY6pgEdwzrQD2hkPihuf11gcPeESMFpCrBoxTtYbussj2t2ZVyjr%2Be9PDtBLdGmXRWFwg6QfZyKL5u1ojFCoaCoTHbCIK8S%2FCN3Ee%2F%2B83vfpj9hVcExhUg1ILDW3CFeADxIvoEmyhxES9BVqxriQ9pP0YJMViWZ0p8Uqn2qy9m1p8nts8LX5121D%2BHvaXn2RwAQFuy1Exawv%2FhxRggXL7qtNEvDO%2BfqGuAw&X-Amz-Signature=a8a5f8d3e73df3ef0c023eb80dd56cd27ec01c2c070df205a6c224eee2235115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWDOCYU%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDPkw%2FC0dXNxWyVOecwPPURlOKhjcjxXuuUPBtOZNTLjAiAS%2F1KYR05Dm%2BcVTuIbr7iOkYt5D74Sgsvh%2F7t%2FmypNxyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFsL5oZqVHvpeBQbKtwD%2BJF7NZqUiWEbsOcgmvkAkzNincLkSqvDwC1JlkLdfY3pxZB8xcT000kx8%2BdqkzmxKkeVcHqDtO3SCSyAD6pDMraz8MJzmMSIiq7ZUydYXm%2F%2FPqhwKxR9aavh4IWd3juvG5PpJg9y2fAVccdH3TL9%2BvL1PTVC5Xbyu4K7td5K%2F3wSHQL6KWeJ5YAOO8loZYwH3CnNmMHWFujs4kZE9iCoW0a9Cew%2FvqiKuFGqY0jhY%2BKhv%2BueqYdGRSuWYYm07enWhDREPKb1O8y5VvROpOZ3sPQhZ0qOnpK3TWc7X8EHLc%2B3ATmy5gpKYM8fnA3hdDWXxFP7HcDjXlE1rRHGjmBeUQr74%2B40y%2B5N8MZQ2r7SrRSO2j9qMuDVQUNU4IsWyZIDAf2I8Q%2BPbYtHa72YJSi3kBvXJI2c7qOimlnUtxKIUdGqtvlEwh6ivTq%2FCkPT1T%2F5ITLGH%2BLqv3EF6T3jsptrE8WSIbG8EBKI%2F75N2nuu1whMVnk8d5ZSaZxcFdZtAIHpoCR91kEtjmtJd4ijFIbAAvVU2ZiI%2Bp6oWYiqdjrKTkrGbAi%2F3yaPsbg5%2FVxc%2B2Q8MzDcVX%2FVwKUshqOubSumg4qbZev5cJWBvDJBmpKZvo74Z0%2FmwSRgFtOEUdQwmcO60wY6pgEdwzrQD2hkPihuf11gcPeESMFpCrBoxTtYbussj2t2ZVyjr%2Be9PDtBLdGmXRWFwg6QfZyKL5u1ojFCoaCoTHbCIK8S%2FCN3Ee%2F%2B83vfpj9hVcExhUg1ILDW3CFeADxIvoEmyhxES9BVqxriQ9pP0YJMViWZ0p8Uqn2qy9m1p8nts8LX5121D%2BHvaXn2RwAQFuy1Exawv%2FhxRggXL7qtNEvDO%2BfqGuAw&X-Amz-Signature=1549924524eabccef61f7dda7b052fc1cb5d115dd77bc152f42a53599ebb24c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWDOCYU%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDPkw%2FC0dXNxWyVOecwPPURlOKhjcjxXuuUPBtOZNTLjAiAS%2F1KYR05Dm%2BcVTuIbr7iOkYt5D74Sgsvh%2F7t%2FmypNxyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFsL5oZqVHvpeBQbKtwD%2BJF7NZqUiWEbsOcgmvkAkzNincLkSqvDwC1JlkLdfY3pxZB8xcT000kx8%2BdqkzmxKkeVcHqDtO3SCSyAD6pDMraz8MJzmMSIiq7ZUydYXm%2F%2FPqhwKxR9aavh4IWd3juvG5PpJg9y2fAVccdH3TL9%2BvL1PTVC5Xbyu4K7td5K%2F3wSHQL6KWeJ5YAOO8loZYwH3CnNmMHWFujs4kZE9iCoW0a9Cew%2FvqiKuFGqY0jhY%2BKhv%2BueqYdGRSuWYYm07enWhDREPKb1O8y5VvROpOZ3sPQhZ0qOnpK3TWc7X8EHLc%2B3ATmy5gpKYM8fnA3hdDWXxFP7HcDjXlE1rRHGjmBeUQr74%2B40y%2B5N8MZQ2r7SrRSO2j9qMuDVQUNU4IsWyZIDAf2I8Q%2BPbYtHa72YJSi3kBvXJI2c7qOimlnUtxKIUdGqtvlEwh6ivTq%2FCkPT1T%2F5ITLGH%2BLqv3EF6T3jsptrE8WSIbG8EBKI%2F75N2nuu1whMVnk8d5ZSaZxcFdZtAIHpoCR91kEtjmtJd4ijFIbAAvVU2ZiI%2Bp6oWYiqdjrKTkrGbAi%2F3yaPsbg5%2FVxc%2B2Q8MzDcVX%2FVwKUshqOubSumg4qbZev5cJWBvDJBmpKZvo74Z0%2FmwSRgFtOEUdQwmcO60wY6pgEdwzrQD2hkPihuf11gcPeESMFpCrBoxTtYbussj2t2ZVyjr%2Be9PDtBLdGmXRWFwg6QfZyKL5u1ojFCoaCoTHbCIK8S%2FCN3Ee%2F%2B83vfpj9hVcExhUg1ILDW3CFeADxIvoEmyhxES9BVqxriQ9pP0YJMViWZ0p8Uqn2qy9m1p8nts8LX5121D%2BHvaXn2RwAQFuy1Exawv%2FhxRggXL7qtNEvDO%2BfqGuAw&X-Amz-Signature=1bd26957551758bf636780d5788088ea52f8a1fa219cf3f94b11955067255607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWDOCYU%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDPkw%2FC0dXNxWyVOecwPPURlOKhjcjxXuuUPBtOZNTLjAiAS%2F1KYR05Dm%2BcVTuIbr7iOkYt5D74Sgsvh%2F7t%2FmypNxyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFsL5oZqVHvpeBQbKtwD%2BJF7NZqUiWEbsOcgmvkAkzNincLkSqvDwC1JlkLdfY3pxZB8xcT000kx8%2BdqkzmxKkeVcHqDtO3SCSyAD6pDMraz8MJzmMSIiq7ZUydYXm%2F%2FPqhwKxR9aavh4IWd3juvG5PpJg9y2fAVccdH3TL9%2BvL1PTVC5Xbyu4K7td5K%2F3wSHQL6KWeJ5YAOO8loZYwH3CnNmMHWFujs4kZE9iCoW0a9Cew%2FvqiKuFGqY0jhY%2BKhv%2BueqYdGRSuWYYm07enWhDREPKb1O8y5VvROpOZ3sPQhZ0qOnpK3TWc7X8EHLc%2B3ATmy5gpKYM8fnA3hdDWXxFP7HcDjXlE1rRHGjmBeUQr74%2B40y%2B5N8MZQ2r7SrRSO2j9qMuDVQUNU4IsWyZIDAf2I8Q%2BPbYtHa72YJSi3kBvXJI2c7qOimlnUtxKIUdGqtvlEwh6ivTq%2FCkPT1T%2F5ITLGH%2BLqv3EF6T3jsptrE8WSIbG8EBKI%2F75N2nuu1whMVnk8d5ZSaZxcFdZtAIHpoCR91kEtjmtJd4ijFIbAAvVU2ZiI%2Bp6oWYiqdjrKTkrGbAi%2F3yaPsbg5%2FVxc%2B2Q8MzDcVX%2FVwKUshqOubSumg4qbZev5cJWBvDJBmpKZvo74Z0%2FmwSRgFtOEUdQwmcO60wY6pgEdwzrQD2hkPihuf11gcPeESMFpCrBoxTtYbussj2t2ZVyjr%2Be9PDtBLdGmXRWFwg6QfZyKL5u1ojFCoaCoTHbCIK8S%2FCN3Ee%2F%2B83vfpj9hVcExhUg1ILDW3CFeADxIvoEmyhxES9BVqxriQ9pP0YJMViWZ0p8Uqn2qy9m1p8nts8LX5121D%2BHvaXn2RwAQFuy1Exawv%2FhxRggXL7qtNEvDO%2BfqGuAw&X-Amz-Signature=baff00c14f918cd9ba6d21a2e105805b5c3f42e41f7b11bd020e902599da6584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWDOCYU%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDPkw%2FC0dXNxWyVOecwPPURlOKhjcjxXuuUPBtOZNTLjAiAS%2F1KYR05Dm%2BcVTuIbr7iOkYt5D74Sgsvh%2F7t%2FmypNxyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFsL5oZqVHvpeBQbKtwD%2BJF7NZqUiWEbsOcgmvkAkzNincLkSqvDwC1JlkLdfY3pxZB8xcT000kx8%2BdqkzmxKkeVcHqDtO3SCSyAD6pDMraz8MJzmMSIiq7ZUydYXm%2F%2FPqhwKxR9aavh4IWd3juvG5PpJg9y2fAVccdH3TL9%2BvL1PTVC5Xbyu4K7td5K%2F3wSHQL6KWeJ5YAOO8loZYwH3CnNmMHWFujs4kZE9iCoW0a9Cew%2FvqiKuFGqY0jhY%2BKhv%2BueqYdGRSuWYYm07enWhDREPKb1O8y5VvROpOZ3sPQhZ0qOnpK3TWc7X8EHLc%2B3ATmy5gpKYM8fnA3hdDWXxFP7HcDjXlE1rRHGjmBeUQr74%2B40y%2B5N8MZQ2r7SrRSO2j9qMuDVQUNU4IsWyZIDAf2I8Q%2BPbYtHa72YJSi3kBvXJI2c7qOimlnUtxKIUdGqtvlEwh6ivTq%2FCkPT1T%2F5ITLGH%2BLqv3EF6T3jsptrE8WSIbG8EBKI%2F75N2nuu1whMVnk8d5ZSaZxcFdZtAIHpoCR91kEtjmtJd4ijFIbAAvVU2ZiI%2Bp6oWYiqdjrKTkrGbAi%2F3yaPsbg5%2FVxc%2B2Q8MzDcVX%2FVwKUshqOubSumg4qbZev5cJWBvDJBmpKZvo74Z0%2FmwSRgFtOEUdQwmcO60wY6pgEdwzrQD2hkPihuf11gcPeESMFpCrBoxTtYbussj2t2ZVyjr%2Be9PDtBLdGmXRWFwg6QfZyKL5u1ojFCoaCoTHbCIK8S%2FCN3Ee%2F%2B83vfpj9hVcExhUg1ILDW3CFeADxIvoEmyhxES9BVqxriQ9pP0YJMViWZ0p8Uqn2qy9m1p8nts8LX5121D%2BHvaXn2RwAQFuy1Exawv%2FhxRggXL7qtNEvDO%2BfqGuAw&X-Amz-Signature=71c9442a1da12b37b8a338ee83e76eafe89189d278d49ac3351663aafe1ea129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWDOCYU%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDPkw%2FC0dXNxWyVOecwPPURlOKhjcjxXuuUPBtOZNTLjAiAS%2F1KYR05Dm%2BcVTuIbr7iOkYt5D74Sgsvh%2F7t%2FmypNxyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFsL5oZqVHvpeBQbKtwD%2BJF7NZqUiWEbsOcgmvkAkzNincLkSqvDwC1JlkLdfY3pxZB8xcT000kx8%2BdqkzmxKkeVcHqDtO3SCSyAD6pDMraz8MJzmMSIiq7ZUydYXm%2F%2FPqhwKxR9aavh4IWd3juvG5PpJg9y2fAVccdH3TL9%2BvL1PTVC5Xbyu4K7td5K%2F3wSHQL6KWeJ5YAOO8loZYwH3CnNmMHWFujs4kZE9iCoW0a9Cew%2FvqiKuFGqY0jhY%2BKhv%2BueqYdGRSuWYYm07enWhDREPKb1O8y5VvROpOZ3sPQhZ0qOnpK3TWc7X8EHLc%2B3ATmy5gpKYM8fnA3hdDWXxFP7HcDjXlE1rRHGjmBeUQr74%2B40y%2B5N8MZQ2r7SrRSO2j9qMuDVQUNU4IsWyZIDAf2I8Q%2BPbYtHa72YJSi3kBvXJI2c7qOimlnUtxKIUdGqtvlEwh6ivTq%2FCkPT1T%2F5ITLGH%2BLqv3EF6T3jsptrE8WSIbG8EBKI%2F75N2nuu1whMVnk8d5ZSaZxcFdZtAIHpoCR91kEtjmtJd4ijFIbAAvVU2ZiI%2Bp6oWYiqdjrKTkrGbAi%2F3yaPsbg5%2FVxc%2B2Q8MzDcVX%2FVwKUshqOubSumg4qbZev5cJWBvDJBmpKZvo74Z0%2FmwSRgFtOEUdQwmcO60wY6pgEdwzrQD2hkPihuf11gcPeESMFpCrBoxTtYbussj2t2ZVyjr%2Be9PDtBLdGmXRWFwg6QfZyKL5u1ojFCoaCoTHbCIK8S%2FCN3Ee%2F%2B83vfpj9hVcExhUg1ILDW3CFeADxIvoEmyhxES9BVqxriQ9pP0YJMViWZ0p8Uqn2qy9m1p8nts8LX5121D%2BHvaXn2RwAQFuy1Exawv%2FhxRggXL7qtNEvDO%2BfqGuAw&X-Amz-Signature=59a2e06516a60b7dcb7da3196f0b39d49abc2898b56fc0bec15968a827102001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

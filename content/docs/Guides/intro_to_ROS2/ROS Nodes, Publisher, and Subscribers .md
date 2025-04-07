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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUWYWGE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2BuT%2FTm3FHQKxzwjvwxA3vUKgoNuQuKyweYaYij7%2FeAiEA3G%2BYPHFQ%2BfGZTMMPLnzX8M%2BtYmonCGIzJUa%2F98PcJMIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLeWk%2BzZWbt7HWsE6SrcAx8Z2G4UJeMtgpek9p08QA9pLo7asLhRoDPMk%2FeEFb27O%2BLJrsrs%2FvENzL99jSsVHdRTWzxycQ%2BOvdNwI2sVG4Zt7nRNRF8jqHiZMiMQZp%2BQAeKS9EeUw9Otl1uyRDBrlFXrIdfXkIdXrb5bfwmrrBBFSs8jg%2F2rU9KfphxQ4cqDiwb5JhzVBBIJxFqGh6IzzWICSyy2873pCmtia%2FYt1CtIcFejmxrDlVnuAcKjjBfHa7BM0VJpai1%2BJGCjfoYgaPHUZb80y%2FO74ny6Q8YMQOVJ9AeV%2BDapKSxmdRQM26Gg9I0VRPRSJgoF%2BoRA9Wev8zeFDeJucy71kLideuvg2mjsYcK1VZmF9Ju399Ayqp0UkWeuVX4gQELjVK%2FsE1gSFimdVH%2FBLomXwwoTYE99z9bx%2Frf%2FkdfW2eQsXdtv7WeWnoQk58ORfli1D%2FruzerPO4GxeOt%2F0cxRhWMYx38FWfCspxMQCyAvQ6ntbCGjNPHdC3nYE%2B%2Fozv9d4S1TA8PsLOh8OpZfwfIeIx211NJF4uJs%2BAtphYiShwVw0G1bvdfvMS9TbjKGCx3NzeA3HvnasqSae76qMrdnkMFkAAHJBh%2BnhFfNVQRPYgIIvilfRfkL0U7fP1DXHoktA%2BO1MMK0zL8GOqUBnE8EKmYMwmFEFAkwEpUERXqtRs%2BGOHTQsSnrbUh3tzMD%2FijyCt4SJQnYuCMd0hCi6YwLnewF10V7hCMeD%2FQxXHkxheh6lVBXf17VoOw7q4ZB%2FdZXRTgwjXqtneIjmWzaAXB9EEkDIhs8yxsjNYpd69nP8zI95R6ueGRP8L1kchE%2B203ukABZlNcWnxqsOekIq%2Fw0nohcGrkVVunznf2%2BGZYyUxCF&X-Amz-Signature=b65cf5006d0a287a62fb1bac50dd2517b1f44ff031402aa84e588bc0222bda3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUWYWGE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2BuT%2FTm3FHQKxzwjvwxA3vUKgoNuQuKyweYaYij7%2FeAiEA3G%2BYPHFQ%2BfGZTMMPLnzX8M%2BtYmonCGIzJUa%2F98PcJMIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLeWk%2BzZWbt7HWsE6SrcAx8Z2G4UJeMtgpek9p08QA9pLo7asLhRoDPMk%2FeEFb27O%2BLJrsrs%2FvENzL99jSsVHdRTWzxycQ%2BOvdNwI2sVG4Zt7nRNRF8jqHiZMiMQZp%2BQAeKS9EeUw9Otl1uyRDBrlFXrIdfXkIdXrb5bfwmrrBBFSs8jg%2F2rU9KfphxQ4cqDiwb5JhzVBBIJxFqGh6IzzWICSyy2873pCmtia%2FYt1CtIcFejmxrDlVnuAcKjjBfHa7BM0VJpai1%2BJGCjfoYgaPHUZb80y%2FO74ny6Q8YMQOVJ9AeV%2BDapKSxmdRQM26Gg9I0VRPRSJgoF%2BoRA9Wev8zeFDeJucy71kLideuvg2mjsYcK1VZmF9Ju399Ayqp0UkWeuVX4gQELjVK%2FsE1gSFimdVH%2FBLomXwwoTYE99z9bx%2Frf%2FkdfW2eQsXdtv7WeWnoQk58ORfli1D%2FruzerPO4GxeOt%2F0cxRhWMYx38FWfCspxMQCyAvQ6ntbCGjNPHdC3nYE%2B%2Fozv9d4S1TA8PsLOh8OpZfwfIeIx211NJF4uJs%2BAtphYiShwVw0G1bvdfvMS9TbjKGCx3NzeA3HvnasqSae76qMrdnkMFkAAHJBh%2BnhFfNVQRPYgIIvilfRfkL0U7fP1DXHoktA%2BO1MMK0zL8GOqUBnE8EKmYMwmFEFAkwEpUERXqtRs%2BGOHTQsSnrbUh3tzMD%2FijyCt4SJQnYuCMd0hCi6YwLnewF10V7hCMeD%2FQxXHkxheh6lVBXf17VoOw7q4ZB%2FdZXRTgwjXqtneIjmWzaAXB9EEkDIhs8yxsjNYpd69nP8zI95R6ueGRP8L1kchE%2B203ukABZlNcWnxqsOekIq%2Fw0nohcGrkVVunznf2%2BGZYyUxCF&X-Amz-Signature=b6db4d0df886f0fde41c893de27c9f0463f9b3f75f73f7aad5ffe7c26fd0f0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUWYWGE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2BuT%2FTm3FHQKxzwjvwxA3vUKgoNuQuKyweYaYij7%2FeAiEA3G%2BYPHFQ%2BfGZTMMPLnzX8M%2BtYmonCGIzJUa%2F98PcJMIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLeWk%2BzZWbt7HWsE6SrcAx8Z2G4UJeMtgpek9p08QA9pLo7asLhRoDPMk%2FeEFb27O%2BLJrsrs%2FvENzL99jSsVHdRTWzxycQ%2BOvdNwI2sVG4Zt7nRNRF8jqHiZMiMQZp%2BQAeKS9EeUw9Otl1uyRDBrlFXrIdfXkIdXrb5bfwmrrBBFSs8jg%2F2rU9KfphxQ4cqDiwb5JhzVBBIJxFqGh6IzzWICSyy2873pCmtia%2FYt1CtIcFejmxrDlVnuAcKjjBfHa7BM0VJpai1%2BJGCjfoYgaPHUZb80y%2FO74ny6Q8YMQOVJ9AeV%2BDapKSxmdRQM26Gg9I0VRPRSJgoF%2BoRA9Wev8zeFDeJucy71kLideuvg2mjsYcK1VZmF9Ju399Ayqp0UkWeuVX4gQELjVK%2FsE1gSFimdVH%2FBLomXwwoTYE99z9bx%2Frf%2FkdfW2eQsXdtv7WeWnoQk58ORfli1D%2FruzerPO4GxeOt%2F0cxRhWMYx38FWfCspxMQCyAvQ6ntbCGjNPHdC3nYE%2B%2Fozv9d4S1TA8PsLOh8OpZfwfIeIx211NJF4uJs%2BAtphYiShwVw0G1bvdfvMS9TbjKGCx3NzeA3HvnasqSae76qMrdnkMFkAAHJBh%2BnhFfNVQRPYgIIvilfRfkL0U7fP1DXHoktA%2BO1MMK0zL8GOqUBnE8EKmYMwmFEFAkwEpUERXqtRs%2BGOHTQsSnrbUh3tzMD%2FijyCt4SJQnYuCMd0hCi6YwLnewF10V7hCMeD%2FQxXHkxheh6lVBXf17VoOw7q4ZB%2FdZXRTgwjXqtneIjmWzaAXB9EEkDIhs8yxsjNYpd69nP8zI95R6ueGRP8L1kchE%2B203ukABZlNcWnxqsOekIq%2Fw0nohcGrkVVunznf2%2BGZYyUxCF&X-Amz-Signature=3f7c0dae89e964f3edb77ea70c02139711014efee56681bfa9ab3ea030e31576&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUWYWGE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2BuT%2FTm3FHQKxzwjvwxA3vUKgoNuQuKyweYaYij7%2FeAiEA3G%2BYPHFQ%2BfGZTMMPLnzX8M%2BtYmonCGIzJUa%2F98PcJMIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLeWk%2BzZWbt7HWsE6SrcAx8Z2G4UJeMtgpek9p08QA9pLo7asLhRoDPMk%2FeEFb27O%2BLJrsrs%2FvENzL99jSsVHdRTWzxycQ%2BOvdNwI2sVG4Zt7nRNRF8jqHiZMiMQZp%2BQAeKS9EeUw9Otl1uyRDBrlFXrIdfXkIdXrb5bfwmrrBBFSs8jg%2F2rU9KfphxQ4cqDiwb5JhzVBBIJxFqGh6IzzWICSyy2873pCmtia%2FYt1CtIcFejmxrDlVnuAcKjjBfHa7BM0VJpai1%2BJGCjfoYgaPHUZb80y%2FO74ny6Q8YMQOVJ9AeV%2BDapKSxmdRQM26Gg9I0VRPRSJgoF%2BoRA9Wev8zeFDeJucy71kLideuvg2mjsYcK1VZmF9Ju399Ayqp0UkWeuVX4gQELjVK%2FsE1gSFimdVH%2FBLomXwwoTYE99z9bx%2Frf%2FkdfW2eQsXdtv7WeWnoQk58ORfli1D%2FruzerPO4GxeOt%2F0cxRhWMYx38FWfCspxMQCyAvQ6ntbCGjNPHdC3nYE%2B%2Fozv9d4S1TA8PsLOh8OpZfwfIeIx211NJF4uJs%2BAtphYiShwVw0G1bvdfvMS9TbjKGCx3NzeA3HvnasqSae76qMrdnkMFkAAHJBh%2BnhFfNVQRPYgIIvilfRfkL0U7fP1DXHoktA%2BO1MMK0zL8GOqUBnE8EKmYMwmFEFAkwEpUERXqtRs%2BGOHTQsSnrbUh3tzMD%2FijyCt4SJQnYuCMd0hCi6YwLnewF10V7hCMeD%2FQxXHkxheh6lVBXf17VoOw7q4ZB%2FdZXRTgwjXqtneIjmWzaAXB9EEkDIhs8yxsjNYpd69nP8zI95R6ueGRP8L1kchE%2B203ukABZlNcWnxqsOekIq%2Fw0nohcGrkVVunznf2%2BGZYyUxCF&X-Amz-Signature=56aca0ab28a86fbc42606d8695fa52b4abdbe1dc54a508d5f026f4fdb32e98d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUWYWGE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2BuT%2FTm3FHQKxzwjvwxA3vUKgoNuQuKyweYaYij7%2FeAiEA3G%2BYPHFQ%2BfGZTMMPLnzX8M%2BtYmonCGIzJUa%2F98PcJMIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLeWk%2BzZWbt7HWsE6SrcAx8Z2G4UJeMtgpek9p08QA9pLo7asLhRoDPMk%2FeEFb27O%2BLJrsrs%2FvENzL99jSsVHdRTWzxycQ%2BOvdNwI2sVG4Zt7nRNRF8jqHiZMiMQZp%2BQAeKS9EeUw9Otl1uyRDBrlFXrIdfXkIdXrb5bfwmrrBBFSs8jg%2F2rU9KfphxQ4cqDiwb5JhzVBBIJxFqGh6IzzWICSyy2873pCmtia%2FYt1CtIcFejmxrDlVnuAcKjjBfHa7BM0VJpai1%2BJGCjfoYgaPHUZb80y%2FO74ny6Q8YMQOVJ9AeV%2BDapKSxmdRQM26Gg9I0VRPRSJgoF%2BoRA9Wev8zeFDeJucy71kLideuvg2mjsYcK1VZmF9Ju399Ayqp0UkWeuVX4gQELjVK%2FsE1gSFimdVH%2FBLomXwwoTYE99z9bx%2Frf%2FkdfW2eQsXdtv7WeWnoQk58ORfli1D%2FruzerPO4GxeOt%2F0cxRhWMYx38FWfCspxMQCyAvQ6ntbCGjNPHdC3nYE%2B%2Fozv9d4S1TA8PsLOh8OpZfwfIeIx211NJF4uJs%2BAtphYiShwVw0G1bvdfvMS9TbjKGCx3NzeA3HvnasqSae76qMrdnkMFkAAHJBh%2BnhFfNVQRPYgIIvilfRfkL0U7fP1DXHoktA%2BO1MMK0zL8GOqUBnE8EKmYMwmFEFAkwEpUERXqtRs%2BGOHTQsSnrbUh3tzMD%2FijyCt4SJQnYuCMd0hCi6YwLnewF10V7hCMeD%2FQxXHkxheh6lVBXf17VoOw7q4ZB%2FdZXRTgwjXqtneIjmWzaAXB9EEkDIhs8yxsjNYpd69nP8zI95R6ueGRP8L1kchE%2B203ukABZlNcWnxqsOekIq%2Fw0nohcGrkVVunznf2%2BGZYyUxCF&X-Amz-Signature=42de976934eae1a348b528bda95197d2fad3216ffe860c198b6d7f04af35a5cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUWYWGE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2BuT%2FTm3FHQKxzwjvwxA3vUKgoNuQuKyweYaYij7%2FeAiEA3G%2BYPHFQ%2BfGZTMMPLnzX8M%2BtYmonCGIzJUa%2F98PcJMIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLeWk%2BzZWbt7HWsE6SrcAx8Z2G4UJeMtgpek9p08QA9pLo7asLhRoDPMk%2FeEFb27O%2BLJrsrs%2FvENzL99jSsVHdRTWzxycQ%2BOvdNwI2sVG4Zt7nRNRF8jqHiZMiMQZp%2BQAeKS9EeUw9Otl1uyRDBrlFXrIdfXkIdXrb5bfwmrrBBFSs8jg%2F2rU9KfphxQ4cqDiwb5JhzVBBIJxFqGh6IzzWICSyy2873pCmtia%2FYt1CtIcFejmxrDlVnuAcKjjBfHa7BM0VJpai1%2BJGCjfoYgaPHUZb80y%2FO74ny6Q8YMQOVJ9AeV%2BDapKSxmdRQM26Gg9I0VRPRSJgoF%2BoRA9Wev8zeFDeJucy71kLideuvg2mjsYcK1VZmF9Ju399Ayqp0UkWeuVX4gQELjVK%2FsE1gSFimdVH%2FBLomXwwoTYE99z9bx%2Frf%2FkdfW2eQsXdtv7WeWnoQk58ORfli1D%2FruzerPO4GxeOt%2F0cxRhWMYx38FWfCspxMQCyAvQ6ntbCGjNPHdC3nYE%2B%2Fozv9d4S1TA8PsLOh8OpZfwfIeIx211NJF4uJs%2BAtphYiShwVw0G1bvdfvMS9TbjKGCx3NzeA3HvnasqSae76qMrdnkMFkAAHJBh%2BnhFfNVQRPYgIIvilfRfkL0U7fP1DXHoktA%2BO1MMK0zL8GOqUBnE8EKmYMwmFEFAkwEpUERXqtRs%2BGOHTQsSnrbUh3tzMD%2FijyCt4SJQnYuCMd0hCi6YwLnewF10V7hCMeD%2FQxXHkxheh6lVBXf17VoOw7q4ZB%2FdZXRTgwjXqtneIjmWzaAXB9EEkDIhs8yxsjNYpd69nP8zI95R6ueGRP8L1kchE%2B203ukABZlNcWnxqsOekIq%2Fw0nohcGrkVVunznf2%2BGZYyUxCF&X-Amz-Signature=a09b258bbabe8a3fa839a7d15711049d632d96d4f62cb7cb998df27b360ec030&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUWYWGE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2BuT%2FTm3FHQKxzwjvwxA3vUKgoNuQuKyweYaYij7%2FeAiEA3G%2BYPHFQ%2BfGZTMMPLnzX8M%2BtYmonCGIzJUa%2F98PcJMIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLeWk%2BzZWbt7HWsE6SrcAx8Z2G4UJeMtgpek9p08QA9pLo7asLhRoDPMk%2FeEFb27O%2BLJrsrs%2FvENzL99jSsVHdRTWzxycQ%2BOvdNwI2sVG4Zt7nRNRF8jqHiZMiMQZp%2BQAeKS9EeUw9Otl1uyRDBrlFXrIdfXkIdXrb5bfwmrrBBFSs8jg%2F2rU9KfphxQ4cqDiwb5JhzVBBIJxFqGh6IzzWICSyy2873pCmtia%2FYt1CtIcFejmxrDlVnuAcKjjBfHa7BM0VJpai1%2BJGCjfoYgaPHUZb80y%2FO74ny6Q8YMQOVJ9AeV%2BDapKSxmdRQM26Gg9I0VRPRSJgoF%2BoRA9Wev8zeFDeJucy71kLideuvg2mjsYcK1VZmF9Ju399Ayqp0UkWeuVX4gQELjVK%2FsE1gSFimdVH%2FBLomXwwoTYE99z9bx%2Frf%2FkdfW2eQsXdtv7WeWnoQk58ORfli1D%2FruzerPO4GxeOt%2F0cxRhWMYx38FWfCspxMQCyAvQ6ntbCGjNPHdC3nYE%2B%2Fozv9d4S1TA8PsLOh8OpZfwfIeIx211NJF4uJs%2BAtphYiShwVw0G1bvdfvMS9TbjKGCx3NzeA3HvnasqSae76qMrdnkMFkAAHJBh%2BnhFfNVQRPYgIIvilfRfkL0U7fP1DXHoktA%2BO1MMK0zL8GOqUBnE8EKmYMwmFEFAkwEpUERXqtRs%2BGOHTQsSnrbUh3tzMD%2FijyCt4SJQnYuCMd0hCi6YwLnewF10V7hCMeD%2FQxXHkxheh6lVBXf17VoOw7q4ZB%2FdZXRTgwjXqtneIjmWzaAXB9EEkDIhs8yxsjNYpd69nP8zI95R6ueGRP8L1kchE%2B203ukABZlNcWnxqsOekIq%2Fw0nohcGrkVVunznf2%2BGZYyUxCF&X-Amz-Signature=fa2d22900274b8ffde97811e683c68d2bc9607829aa007143d5f91da25c8f806&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUWYWGE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2BuT%2FTm3FHQKxzwjvwxA3vUKgoNuQuKyweYaYij7%2FeAiEA3G%2BYPHFQ%2BfGZTMMPLnzX8M%2BtYmonCGIzJUa%2F98PcJMIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLeWk%2BzZWbt7HWsE6SrcAx8Z2G4UJeMtgpek9p08QA9pLo7asLhRoDPMk%2FeEFb27O%2BLJrsrs%2FvENzL99jSsVHdRTWzxycQ%2BOvdNwI2sVG4Zt7nRNRF8jqHiZMiMQZp%2BQAeKS9EeUw9Otl1uyRDBrlFXrIdfXkIdXrb5bfwmrrBBFSs8jg%2F2rU9KfphxQ4cqDiwb5JhzVBBIJxFqGh6IzzWICSyy2873pCmtia%2FYt1CtIcFejmxrDlVnuAcKjjBfHa7BM0VJpai1%2BJGCjfoYgaPHUZb80y%2FO74ny6Q8YMQOVJ9AeV%2BDapKSxmdRQM26Gg9I0VRPRSJgoF%2BoRA9Wev8zeFDeJucy71kLideuvg2mjsYcK1VZmF9Ju399Ayqp0UkWeuVX4gQELjVK%2FsE1gSFimdVH%2FBLomXwwoTYE99z9bx%2Frf%2FkdfW2eQsXdtv7WeWnoQk58ORfli1D%2FruzerPO4GxeOt%2F0cxRhWMYx38FWfCspxMQCyAvQ6ntbCGjNPHdC3nYE%2B%2Fozv9d4S1TA8PsLOh8OpZfwfIeIx211NJF4uJs%2BAtphYiShwVw0G1bvdfvMS9TbjKGCx3NzeA3HvnasqSae76qMrdnkMFkAAHJBh%2BnhFfNVQRPYgIIvilfRfkL0U7fP1DXHoktA%2BO1MMK0zL8GOqUBnE8EKmYMwmFEFAkwEpUERXqtRs%2BGOHTQsSnrbUh3tzMD%2FijyCt4SJQnYuCMd0hCi6YwLnewF10V7hCMeD%2FQxXHkxheh6lVBXf17VoOw7q4ZB%2FdZXRTgwjXqtneIjmWzaAXB9EEkDIhs8yxsjNYpd69nP8zI95R6ueGRP8L1kchE%2B203ukABZlNcWnxqsOekIq%2Fw0nohcGrkVVunznf2%2BGZYyUxCF&X-Amz-Signature=21f25432f861a347e2a129310bea84c67676b7652b9525090910ed9773878d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B6FPSY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH2t4VSbMM7ZV451IAAKyAEc9EReEJRO7R39NCI9TpMXAiBE1MDMsafcsRUHUyAhf5K6R%2FmkEUiyxRXvMC1Gd%2FwR2iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrosTHM9PG1DMJT3oKtwDWvfnMA7pcO5eLbO0sG76s2s4%2FMYY6qBCSBUEG%2FKK3swpjxlYShqi2Xew7Xuou3fis9MUdrvU8BtEXMdKzbG67Kt3e1jH9AdTDZOfkdmWFGgcSYofmasBaQgtjK9qifKsujgUl6iCvGzS%2FEH4bhaPc%2Frvzvn%2BRYxEay9pUStaMVc61N9gIl1PDjjiKcuPJrQxeutpT9x2vJcMLNH1OpitKHIK8qVcP0GQI%2Bj3wdAYKOGQ%2BxNfZkrK4e%2B1WYXFuJcEbeIRj6yz4k6wSOAm51MmnZnQj0WswvDSuDWM9Vgx6dAo6jEMXsTuleFk2EQMYRFJETrT7P5Iiclgj6wkbLGJT%2F8rwNcDqYXCP73Mf%2Fp3VFYiMYMXE8LUulAPHazr5urgCXObjQraom7yiFSP3CXbQKxkkZM5FJMbqhENr5oUcvhuZR1Uve0tvchTJHlvFMS9HwNdMODwQky5vPz3XDwVHuL7CDXR4D9UH1MZBHB3czYQlLWmnogrj52ZORvNeKE2yQ%2F8wD%2FzWrhIZSn8oDqKqCVjbDzAgDSc%2BAgJ6HeAHtPXaN4%2FurIY0NYnYGGE1IGofZ9LphgI8bKTI4rg3Kdth%2BidMCxPk9caZZfZ30khi3%2FKIRLKsdGJ7dcbtQEwxrXRxAY6pgEdxwD8hH5aGr0GW0kAcZJHG39himvmJ9WlW3HfeNUxRqv22VJSArkJRW9KV9SuSgRSCvVEkESewwg%2FmOSqW7w7x4pAvIRUATU7k%2Fhun6zRHJCPcyoDFMfotgEKhtKLGJXRDRuXWama7G4Xyt2pyH2Rqc9z8elOLz3vpLueKby0YmNZniwgQ%2FY2EDmvMx%2BVi5vElZ81kIQdXaOU8%2Bx2JmnNkHzYFVqK&X-Amz-Signature=7fa2f2ead74a640f0e6693e062faa72ec88637927a69c09e43aed7814fd7a438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B6FPSY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH2t4VSbMM7ZV451IAAKyAEc9EReEJRO7R39NCI9TpMXAiBE1MDMsafcsRUHUyAhf5K6R%2FmkEUiyxRXvMC1Gd%2FwR2iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrosTHM9PG1DMJT3oKtwDWvfnMA7pcO5eLbO0sG76s2s4%2FMYY6qBCSBUEG%2FKK3swpjxlYShqi2Xew7Xuou3fis9MUdrvU8BtEXMdKzbG67Kt3e1jH9AdTDZOfkdmWFGgcSYofmasBaQgtjK9qifKsujgUl6iCvGzS%2FEH4bhaPc%2Frvzvn%2BRYxEay9pUStaMVc61N9gIl1PDjjiKcuPJrQxeutpT9x2vJcMLNH1OpitKHIK8qVcP0GQI%2Bj3wdAYKOGQ%2BxNfZkrK4e%2B1WYXFuJcEbeIRj6yz4k6wSOAm51MmnZnQj0WswvDSuDWM9Vgx6dAo6jEMXsTuleFk2EQMYRFJETrT7P5Iiclgj6wkbLGJT%2F8rwNcDqYXCP73Mf%2Fp3VFYiMYMXE8LUulAPHazr5urgCXObjQraom7yiFSP3CXbQKxkkZM5FJMbqhENr5oUcvhuZR1Uve0tvchTJHlvFMS9HwNdMODwQky5vPz3XDwVHuL7CDXR4D9UH1MZBHB3czYQlLWmnogrj52ZORvNeKE2yQ%2F8wD%2FzWrhIZSn8oDqKqCVjbDzAgDSc%2BAgJ6HeAHtPXaN4%2FurIY0NYnYGGE1IGofZ9LphgI8bKTI4rg3Kdth%2BidMCxPk9caZZfZ30khi3%2FKIRLKsdGJ7dcbtQEwxrXRxAY6pgEdxwD8hH5aGr0GW0kAcZJHG39himvmJ9WlW3HfeNUxRqv22VJSArkJRW9KV9SuSgRSCvVEkESewwg%2FmOSqW7w7x4pAvIRUATU7k%2Fhun6zRHJCPcyoDFMfotgEKhtKLGJXRDRuXWama7G4Xyt2pyH2Rqc9z8elOLz3vpLueKby0YmNZniwgQ%2FY2EDmvMx%2BVi5vElZ81kIQdXaOU8%2Bx2JmnNkHzYFVqK&X-Amz-Signature=4f0a4a2a919e8c72297f0998bf114493cf715339e67415a4e47f4e93ea5c0724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B6FPSY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH2t4VSbMM7ZV451IAAKyAEc9EReEJRO7R39NCI9TpMXAiBE1MDMsafcsRUHUyAhf5K6R%2FmkEUiyxRXvMC1Gd%2FwR2iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrosTHM9PG1DMJT3oKtwDWvfnMA7pcO5eLbO0sG76s2s4%2FMYY6qBCSBUEG%2FKK3swpjxlYShqi2Xew7Xuou3fis9MUdrvU8BtEXMdKzbG67Kt3e1jH9AdTDZOfkdmWFGgcSYofmasBaQgtjK9qifKsujgUl6iCvGzS%2FEH4bhaPc%2Frvzvn%2BRYxEay9pUStaMVc61N9gIl1PDjjiKcuPJrQxeutpT9x2vJcMLNH1OpitKHIK8qVcP0GQI%2Bj3wdAYKOGQ%2BxNfZkrK4e%2B1WYXFuJcEbeIRj6yz4k6wSOAm51MmnZnQj0WswvDSuDWM9Vgx6dAo6jEMXsTuleFk2EQMYRFJETrT7P5Iiclgj6wkbLGJT%2F8rwNcDqYXCP73Mf%2Fp3VFYiMYMXE8LUulAPHazr5urgCXObjQraom7yiFSP3CXbQKxkkZM5FJMbqhENr5oUcvhuZR1Uve0tvchTJHlvFMS9HwNdMODwQky5vPz3XDwVHuL7CDXR4D9UH1MZBHB3czYQlLWmnogrj52ZORvNeKE2yQ%2F8wD%2FzWrhIZSn8oDqKqCVjbDzAgDSc%2BAgJ6HeAHtPXaN4%2FurIY0NYnYGGE1IGofZ9LphgI8bKTI4rg3Kdth%2BidMCxPk9caZZfZ30khi3%2FKIRLKsdGJ7dcbtQEwxrXRxAY6pgEdxwD8hH5aGr0GW0kAcZJHG39himvmJ9WlW3HfeNUxRqv22VJSArkJRW9KV9SuSgRSCvVEkESewwg%2FmOSqW7w7x4pAvIRUATU7k%2Fhun6zRHJCPcyoDFMfotgEKhtKLGJXRDRuXWama7G4Xyt2pyH2Rqc9z8elOLz3vpLueKby0YmNZniwgQ%2FY2EDmvMx%2BVi5vElZ81kIQdXaOU8%2Bx2JmnNkHzYFVqK&X-Amz-Signature=92c26e09d446b11ba7d1f6f20437191f86ff791b8684a1d8198a233e583c002f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B6FPSY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH2t4VSbMM7ZV451IAAKyAEc9EReEJRO7R39NCI9TpMXAiBE1MDMsafcsRUHUyAhf5K6R%2FmkEUiyxRXvMC1Gd%2FwR2iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrosTHM9PG1DMJT3oKtwDWvfnMA7pcO5eLbO0sG76s2s4%2FMYY6qBCSBUEG%2FKK3swpjxlYShqi2Xew7Xuou3fis9MUdrvU8BtEXMdKzbG67Kt3e1jH9AdTDZOfkdmWFGgcSYofmasBaQgtjK9qifKsujgUl6iCvGzS%2FEH4bhaPc%2Frvzvn%2BRYxEay9pUStaMVc61N9gIl1PDjjiKcuPJrQxeutpT9x2vJcMLNH1OpitKHIK8qVcP0GQI%2Bj3wdAYKOGQ%2BxNfZkrK4e%2B1WYXFuJcEbeIRj6yz4k6wSOAm51MmnZnQj0WswvDSuDWM9Vgx6dAo6jEMXsTuleFk2EQMYRFJETrT7P5Iiclgj6wkbLGJT%2F8rwNcDqYXCP73Mf%2Fp3VFYiMYMXE8LUulAPHazr5urgCXObjQraom7yiFSP3CXbQKxkkZM5FJMbqhENr5oUcvhuZR1Uve0tvchTJHlvFMS9HwNdMODwQky5vPz3XDwVHuL7CDXR4D9UH1MZBHB3czYQlLWmnogrj52ZORvNeKE2yQ%2F8wD%2FzWrhIZSn8oDqKqCVjbDzAgDSc%2BAgJ6HeAHtPXaN4%2FurIY0NYnYGGE1IGofZ9LphgI8bKTI4rg3Kdth%2BidMCxPk9caZZfZ30khi3%2FKIRLKsdGJ7dcbtQEwxrXRxAY6pgEdxwD8hH5aGr0GW0kAcZJHG39himvmJ9WlW3HfeNUxRqv22VJSArkJRW9KV9SuSgRSCvVEkESewwg%2FmOSqW7w7x4pAvIRUATU7k%2Fhun6zRHJCPcyoDFMfotgEKhtKLGJXRDRuXWama7G4Xyt2pyH2Rqc9z8elOLz3vpLueKby0YmNZniwgQ%2FY2EDmvMx%2BVi5vElZ81kIQdXaOU8%2Bx2JmnNkHzYFVqK&X-Amz-Signature=5930e226bec123b4c9a7987fde3a6b04112e4be3230715b24a4d8c1d4a8f0678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B6FPSY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH2t4VSbMM7ZV451IAAKyAEc9EReEJRO7R39NCI9TpMXAiBE1MDMsafcsRUHUyAhf5K6R%2FmkEUiyxRXvMC1Gd%2FwR2iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrosTHM9PG1DMJT3oKtwDWvfnMA7pcO5eLbO0sG76s2s4%2FMYY6qBCSBUEG%2FKK3swpjxlYShqi2Xew7Xuou3fis9MUdrvU8BtEXMdKzbG67Kt3e1jH9AdTDZOfkdmWFGgcSYofmasBaQgtjK9qifKsujgUl6iCvGzS%2FEH4bhaPc%2Frvzvn%2BRYxEay9pUStaMVc61N9gIl1PDjjiKcuPJrQxeutpT9x2vJcMLNH1OpitKHIK8qVcP0GQI%2Bj3wdAYKOGQ%2BxNfZkrK4e%2B1WYXFuJcEbeIRj6yz4k6wSOAm51MmnZnQj0WswvDSuDWM9Vgx6dAo6jEMXsTuleFk2EQMYRFJETrT7P5Iiclgj6wkbLGJT%2F8rwNcDqYXCP73Mf%2Fp3VFYiMYMXE8LUulAPHazr5urgCXObjQraom7yiFSP3CXbQKxkkZM5FJMbqhENr5oUcvhuZR1Uve0tvchTJHlvFMS9HwNdMODwQky5vPz3XDwVHuL7CDXR4D9UH1MZBHB3czYQlLWmnogrj52ZORvNeKE2yQ%2F8wD%2FzWrhIZSn8oDqKqCVjbDzAgDSc%2BAgJ6HeAHtPXaN4%2FurIY0NYnYGGE1IGofZ9LphgI8bKTI4rg3Kdth%2BidMCxPk9caZZfZ30khi3%2FKIRLKsdGJ7dcbtQEwxrXRxAY6pgEdxwD8hH5aGr0GW0kAcZJHG39himvmJ9WlW3HfeNUxRqv22VJSArkJRW9KV9SuSgRSCvVEkESewwg%2FmOSqW7w7x4pAvIRUATU7k%2Fhun6zRHJCPcyoDFMfotgEKhtKLGJXRDRuXWama7G4Xyt2pyH2Rqc9z8elOLz3vpLueKby0YmNZniwgQ%2FY2EDmvMx%2BVi5vElZ81kIQdXaOU8%2Bx2JmnNkHzYFVqK&X-Amz-Signature=7fbcba7b003977238ebaa09a21feeb33a0a7c84e34691732a88804cc623dcac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B6FPSY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH2t4VSbMM7ZV451IAAKyAEc9EReEJRO7R39NCI9TpMXAiBE1MDMsafcsRUHUyAhf5K6R%2FmkEUiyxRXvMC1Gd%2FwR2iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrosTHM9PG1DMJT3oKtwDWvfnMA7pcO5eLbO0sG76s2s4%2FMYY6qBCSBUEG%2FKK3swpjxlYShqi2Xew7Xuou3fis9MUdrvU8BtEXMdKzbG67Kt3e1jH9AdTDZOfkdmWFGgcSYofmasBaQgtjK9qifKsujgUl6iCvGzS%2FEH4bhaPc%2Frvzvn%2BRYxEay9pUStaMVc61N9gIl1PDjjiKcuPJrQxeutpT9x2vJcMLNH1OpitKHIK8qVcP0GQI%2Bj3wdAYKOGQ%2BxNfZkrK4e%2B1WYXFuJcEbeIRj6yz4k6wSOAm51MmnZnQj0WswvDSuDWM9Vgx6dAo6jEMXsTuleFk2EQMYRFJETrT7P5Iiclgj6wkbLGJT%2F8rwNcDqYXCP73Mf%2Fp3VFYiMYMXE8LUulAPHazr5urgCXObjQraom7yiFSP3CXbQKxkkZM5FJMbqhENr5oUcvhuZR1Uve0tvchTJHlvFMS9HwNdMODwQky5vPz3XDwVHuL7CDXR4D9UH1MZBHB3czYQlLWmnogrj52ZORvNeKE2yQ%2F8wD%2FzWrhIZSn8oDqKqCVjbDzAgDSc%2BAgJ6HeAHtPXaN4%2FurIY0NYnYGGE1IGofZ9LphgI8bKTI4rg3Kdth%2BidMCxPk9caZZfZ30khi3%2FKIRLKsdGJ7dcbtQEwxrXRxAY6pgEdxwD8hH5aGr0GW0kAcZJHG39himvmJ9WlW3HfeNUxRqv22VJSArkJRW9KV9SuSgRSCvVEkESewwg%2FmOSqW7w7x4pAvIRUATU7k%2Fhun6zRHJCPcyoDFMfotgEKhtKLGJXRDRuXWama7G4Xyt2pyH2Rqc9z8elOLz3vpLueKby0YmNZniwgQ%2FY2EDmvMx%2BVi5vElZ81kIQdXaOU8%2Bx2JmnNkHzYFVqK&X-Amz-Signature=8bf5d67b84c270a8c797283dec60aa63ee9fee559689e08d8430accd260bc8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B6FPSY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH2t4VSbMM7ZV451IAAKyAEc9EReEJRO7R39NCI9TpMXAiBE1MDMsafcsRUHUyAhf5K6R%2FmkEUiyxRXvMC1Gd%2FwR2iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrosTHM9PG1DMJT3oKtwDWvfnMA7pcO5eLbO0sG76s2s4%2FMYY6qBCSBUEG%2FKK3swpjxlYShqi2Xew7Xuou3fis9MUdrvU8BtEXMdKzbG67Kt3e1jH9AdTDZOfkdmWFGgcSYofmasBaQgtjK9qifKsujgUl6iCvGzS%2FEH4bhaPc%2Frvzvn%2BRYxEay9pUStaMVc61N9gIl1PDjjiKcuPJrQxeutpT9x2vJcMLNH1OpitKHIK8qVcP0GQI%2Bj3wdAYKOGQ%2BxNfZkrK4e%2B1WYXFuJcEbeIRj6yz4k6wSOAm51MmnZnQj0WswvDSuDWM9Vgx6dAo6jEMXsTuleFk2EQMYRFJETrT7P5Iiclgj6wkbLGJT%2F8rwNcDqYXCP73Mf%2Fp3VFYiMYMXE8LUulAPHazr5urgCXObjQraom7yiFSP3CXbQKxkkZM5FJMbqhENr5oUcvhuZR1Uve0tvchTJHlvFMS9HwNdMODwQky5vPz3XDwVHuL7CDXR4D9UH1MZBHB3czYQlLWmnogrj52ZORvNeKE2yQ%2F8wD%2FzWrhIZSn8oDqKqCVjbDzAgDSc%2BAgJ6HeAHtPXaN4%2FurIY0NYnYGGE1IGofZ9LphgI8bKTI4rg3Kdth%2BidMCxPk9caZZfZ30khi3%2FKIRLKsdGJ7dcbtQEwxrXRxAY6pgEdxwD8hH5aGr0GW0kAcZJHG39himvmJ9WlW3HfeNUxRqv22VJSArkJRW9KV9SuSgRSCvVEkESewwg%2FmOSqW7w7x4pAvIRUATU7k%2Fhun6zRHJCPcyoDFMfotgEKhtKLGJXRDRuXWama7G4Xyt2pyH2Rqc9z8elOLz3vpLueKby0YmNZniwgQ%2FY2EDmvMx%2BVi5vElZ81kIQdXaOU8%2Bx2JmnNkHzYFVqK&X-Amz-Signature=cdcd41c4f11dce6a219322f15af103c389fd61eac3a6215e2fa8bd46fe7f0d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B6FPSY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH2t4VSbMM7ZV451IAAKyAEc9EReEJRO7R39NCI9TpMXAiBE1MDMsafcsRUHUyAhf5K6R%2FmkEUiyxRXvMC1Gd%2FwR2iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrosTHM9PG1DMJT3oKtwDWvfnMA7pcO5eLbO0sG76s2s4%2FMYY6qBCSBUEG%2FKK3swpjxlYShqi2Xew7Xuou3fis9MUdrvU8BtEXMdKzbG67Kt3e1jH9AdTDZOfkdmWFGgcSYofmasBaQgtjK9qifKsujgUl6iCvGzS%2FEH4bhaPc%2Frvzvn%2BRYxEay9pUStaMVc61N9gIl1PDjjiKcuPJrQxeutpT9x2vJcMLNH1OpitKHIK8qVcP0GQI%2Bj3wdAYKOGQ%2BxNfZkrK4e%2B1WYXFuJcEbeIRj6yz4k6wSOAm51MmnZnQj0WswvDSuDWM9Vgx6dAo6jEMXsTuleFk2EQMYRFJETrT7P5Iiclgj6wkbLGJT%2F8rwNcDqYXCP73Mf%2Fp3VFYiMYMXE8LUulAPHazr5urgCXObjQraom7yiFSP3CXbQKxkkZM5FJMbqhENr5oUcvhuZR1Uve0tvchTJHlvFMS9HwNdMODwQky5vPz3XDwVHuL7CDXR4D9UH1MZBHB3czYQlLWmnogrj52ZORvNeKE2yQ%2F8wD%2FzWrhIZSn8oDqKqCVjbDzAgDSc%2BAgJ6HeAHtPXaN4%2FurIY0NYnYGGE1IGofZ9LphgI8bKTI4rg3Kdth%2BidMCxPk9caZZfZ30khi3%2FKIRLKsdGJ7dcbtQEwxrXRxAY6pgEdxwD8hH5aGr0GW0kAcZJHG39himvmJ9WlW3HfeNUxRqv22VJSArkJRW9KV9SuSgRSCvVEkESewwg%2FmOSqW7w7x4pAvIRUATU7k%2Fhun6zRHJCPcyoDFMfotgEKhtKLGJXRDRuXWama7G4Xyt2pyH2Rqc9z8elOLz3vpLueKby0YmNZniwgQ%2FY2EDmvMx%2BVi5vElZ81kIQdXaOU8%2Bx2JmnNkHzYFVqK&X-Amz-Signature=15daea99919a30f61c5f66f2e235bbf4091592a8a8111e63a616fc8c1c67661a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

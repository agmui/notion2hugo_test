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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMQKA5T%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDqoawF%2FyeO0CJ3anJvVAMC%2F319Voj%2BpuX1kEzqxrVFOAIgT2leQOn%2FJxLD03OSo3daMbz%2ByMeMzcEjXxf9Zd%2F23qMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BIK7GqfaNzVrwwVCrcA8aO8dW0lasS9Bdr0HNgiKiShZLNCpV80Ir%2BTpCyrE5G%2F9PQXt9eCmUVL%2BDdK0GEEN%2BCzcHA%2BHgrZ5xX%2BsbpKFNpU%2B%2BH1GjWw%2FS2950ksk22ZQPqgkZ9yyIw16tsLv7zKsHNFyFu4rZssHodZ1hoFre%2Fy4dVWskKaR1dqTrHcSWPNkHjGNXtGu6gk9Z944yyCTMP5rev%2FNRszwG8WOwiz0bdkSC2Qzgh61PUajyVjWxgiiRmXn8sWoZSEWVsczfauDqabzukqFsr0g4MdoSE2shTQf5PZk1j%2FEyR9XMCGTOpsAA1phjUDa5QlOi%2FvE6HyTepMPoLDL5p1rUAV2QMlsE8P4unDQppkJtah1VCEp0kg0IHbPSYVNnEsiPMZU6M5C2HkRrwQ9kHfEmIAXhyTsd79smtpy2m653rVW2RdqSSGvvknPjzVKeqeZizuXgRtgZf0HTAWqFCuioTpfuXjMCduC%2BRaxWXYJUjVjMDuBFfHWfUiy3yDMRv260TMdNXHyw9InZJ%2FwAHSYpgkh7N0ifFdw8pJvMBRp3FCqem%2FApafCBhNr22jrYpR0Y8PCga%2Br9hsuld8LoyhvOvYz0BzQ1H5KANciDmN0m35okRA4ahECPe3dlql%2B6Q6CRxMKDnqr8GOqUBjDJ9OxLc1b4dmKYwiXvmkRkr7VysD1FP%2F5vbLCWK8qAecowDOQ8Zx3PFG9HptywwkkJloKetoshibTxJvVHWvF%2FzYaIAwVxMqfKapzPlnsp4yhGojnjeXi2Fdb0zC%2BDfEdqROGPdkzHQobOkra5GYgsPcdh9sqnNDWVW1XYbbBU3oiVIMllXKxaX%2BVT%2FAVeE%2FWTRPlJXSiUIIU2tJMOGea%2BXSPXF&X-Amz-Signature=23dfe4b96e5515e9dadf4d15412ddc941913eedf740cd6a63236b29ba8a44062&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMQKA5T%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDqoawF%2FyeO0CJ3anJvVAMC%2F319Voj%2BpuX1kEzqxrVFOAIgT2leQOn%2FJxLD03OSo3daMbz%2ByMeMzcEjXxf9Zd%2F23qMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BIK7GqfaNzVrwwVCrcA8aO8dW0lasS9Bdr0HNgiKiShZLNCpV80Ir%2BTpCyrE5G%2F9PQXt9eCmUVL%2BDdK0GEEN%2BCzcHA%2BHgrZ5xX%2BsbpKFNpU%2B%2BH1GjWw%2FS2950ksk22ZQPqgkZ9yyIw16tsLv7zKsHNFyFu4rZssHodZ1hoFre%2Fy4dVWskKaR1dqTrHcSWPNkHjGNXtGu6gk9Z944yyCTMP5rev%2FNRszwG8WOwiz0bdkSC2Qzgh61PUajyVjWxgiiRmXn8sWoZSEWVsczfauDqabzukqFsr0g4MdoSE2shTQf5PZk1j%2FEyR9XMCGTOpsAA1phjUDa5QlOi%2FvE6HyTepMPoLDL5p1rUAV2QMlsE8P4unDQppkJtah1VCEp0kg0IHbPSYVNnEsiPMZU6M5C2HkRrwQ9kHfEmIAXhyTsd79smtpy2m653rVW2RdqSSGvvknPjzVKeqeZizuXgRtgZf0HTAWqFCuioTpfuXjMCduC%2BRaxWXYJUjVjMDuBFfHWfUiy3yDMRv260TMdNXHyw9InZJ%2FwAHSYpgkh7N0ifFdw8pJvMBRp3FCqem%2FApafCBhNr22jrYpR0Y8PCga%2Br9hsuld8LoyhvOvYz0BzQ1H5KANciDmN0m35okRA4ahECPe3dlql%2B6Q6CRxMKDnqr8GOqUBjDJ9OxLc1b4dmKYwiXvmkRkr7VysD1FP%2F5vbLCWK8qAecowDOQ8Zx3PFG9HptywwkkJloKetoshibTxJvVHWvF%2FzYaIAwVxMqfKapzPlnsp4yhGojnjeXi2Fdb0zC%2BDfEdqROGPdkzHQobOkra5GYgsPcdh9sqnNDWVW1XYbbBU3oiVIMllXKxaX%2BVT%2FAVeE%2FWTRPlJXSiUIIU2tJMOGea%2BXSPXF&X-Amz-Signature=3c275837cfe5e914a8b7cb1521911fa577eabdc40edd800bd09778350ade4731&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMQKA5T%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDqoawF%2FyeO0CJ3anJvVAMC%2F319Voj%2BpuX1kEzqxrVFOAIgT2leQOn%2FJxLD03OSo3daMbz%2ByMeMzcEjXxf9Zd%2F23qMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BIK7GqfaNzVrwwVCrcA8aO8dW0lasS9Bdr0HNgiKiShZLNCpV80Ir%2BTpCyrE5G%2F9PQXt9eCmUVL%2BDdK0GEEN%2BCzcHA%2BHgrZ5xX%2BsbpKFNpU%2B%2BH1GjWw%2FS2950ksk22ZQPqgkZ9yyIw16tsLv7zKsHNFyFu4rZssHodZ1hoFre%2Fy4dVWskKaR1dqTrHcSWPNkHjGNXtGu6gk9Z944yyCTMP5rev%2FNRszwG8WOwiz0bdkSC2Qzgh61PUajyVjWxgiiRmXn8sWoZSEWVsczfauDqabzukqFsr0g4MdoSE2shTQf5PZk1j%2FEyR9XMCGTOpsAA1phjUDa5QlOi%2FvE6HyTepMPoLDL5p1rUAV2QMlsE8P4unDQppkJtah1VCEp0kg0IHbPSYVNnEsiPMZU6M5C2HkRrwQ9kHfEmIAXhyTsd79smtpy2m653rVW2RdqSSGvvknPjzVKeqeZizuXgRtgZf0HTAWqFCuioTpfuXjMCduC%2BRaxWXYJUjVjMDuBFfHWfUiy3yDMRv260TMdNXHyw9InZJ%2FwAHSYpgkh7N0ifFdw8pJvMBRp3FCqem%2FApafCBhNr22jrYpR0Y8PCga%2Br9hsuld8LoyhvOvYz0BzQ1H5KANciDmN0m35okRA4ahECPe3dlql%2B6Q6CRxMKDnqr8GOqUBjDJ9OxLc1b4dmKYwiXvmkRkr7VysD1FP%2F5vbLCWK8qAecowDOQ8Zx3PFG9HptywwkkJloKetoshibTxJvVHWvF%2FzYaIAwVxMqfKapzPlnsp4yhGojnjeXi2Fdb0zC%2BDfEdqROGPdkzHQobOkra5GYgsPcdh9sqnNDWVW1XYbbBU3oiVIMllXKxaX%2BVT%2FAVeE%2FWTRPlJXSiUIIU2tJMOGea%2BXSPXF&X-Amz-Signature=1e9536309eaaadf497da69eb30a4dd498bb08ebe98e310e35c226ed49f9e06b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMQKA5T%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDqoawF%2FyeO0CJ3anJvVAMC%2F319Voj%2BpuX1kEzqxrVFOAIgT2leQOn%2FJxLD03OSo3daMbz%2ByMeMzcEjXxf9Zd%2F23qMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BIK7GqfaNzVrwwVCrcA8aO8dW0lasS9Bdr0HNgiKiShZLNCpV80Ir%2BTpCyrE5G%2F9PQXt9eCmUVL%2BDdK0GEEN%2BCzcHA%2BHgrZ5xX%2BsbpKFNpU%2B%2BH1GjWw%2FS2950ksk22ZQPqgkZ9yyIw16tsLv7zKsHNFyFu4rZssHodZ1hoFre%2Fy4dVWskKaR1dqTrHcSWPNkHjGNXtGu6gk9Z944yyCTMP5rev%2FNRszwG8WOwiz0bdkSC2Qzgh61PUajyVjWxgiiRmXn8sWoZSEWVsczfauDqabzukqFsr0g4MdoSE2shTQf5PZk1j%2FEyR9XMCGTOpsAA1phjUDa5QlOi%2FvE6HyTepMPoLDL5p1rUAV2QMlsE8P4unDQppkJtah1VCEp0kg0IHbPSYVNnEsiPMZU6M5C2HkRrwQ9kHfEmIAXhyTsd79smtpy2m653rVW2RdqSSGvvknPjzVKeqeZizuXgRtgZf0HTAWqFCuioTpfuXjMCduC%2BRaxWXYJUjVjMDuBFfHWfUiy3yDMRv260TMdNXHyw9InZJ%2FwAHSYpgkh7N0ifFdw8pJvMBRp3FCqem%2FApafCBhNr22jrYpR0Y8PCga%2Br9hsuld8LoyhvOvYz0BzQ1H5KANciDmN0m35okRA4ahECPe3dlql%2B6Q6CRxMKDnqr8GOqUBjDJ9OxLc1b4dmKYwiXvmkRkr7VysD1FP%2F5vbLCWK8qAecowDOQ8Zx3PFG9HptywwkkJloKetoshibTxJvVHWvF%2FzYaIAwVxMqfKapzPlnsp4yhGojnjeXi2Fdb0zC%2BDfEdqROGPdkzHQobOkra5GYgsPcdh9sqnNDWVW1XYbbBU3oiVIMllXKxaX%2BVT%2FAVeE%2FWTRPlJXSiUIIU2tJMOGea%2BXSPXF&X-Amz-Signature=ec54c8ab1f274c6d8d656466481675311e6327dcff0a2f954346ab6e14fef445&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMQKA5T%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDqoawF%2FyeO0CJ3anJvVAMC%2F319Voj%2BpuX1kEzqxrVFOAIgT2leQOn%2FJxLD03OSo3daMbz%2ByMeMzcEjXxf9Zd%2F23qMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BIK7GqfaNzVrwwVCrcA8aO8dW0lasS9Bdr0HNgiKiShZLNCpV80Ir%2BTpCyrE5G%2F9PQXt9eCmUVL%2BDdK0GEEN%2BCzcHA%2BHgrZ5xX%2BsbpKFNpU%2B%2BH1GjWw%2FS2950ksk22ZQPqgkZ9yyIw16tsLv7zKsHNFyFu4rZssHodZ1hoFre%2Fy4dVWskKaR1dqTrHcSWPNkHjGNXtGu6gk9Z944yyCTMP5rev%2FNRszwG8WOwiz0bdkSC2Qzgh61PUajyVjWxgiiRmXn8sWoZSEWVsczfauDqabzukqFsr0g4MdoSE2shTQf5PZk1j%2FEyR9XMCGTOpsAA1phjUDa5QlOi%2FvE6HyTepMPoLDL5p1rUAV2QMlsE8P4unDQppkJtah1VCEp0kg0IHbPSYVNnEsiPMZU6M5C2HkRrwQ9kHfEmIAXhyTsd79smtpy2m653rVW2RdqSSGvvknPjzVKeqeZizuXgRtgZf0HTAWqFCuioTpfuXjMCduC%2BRaxWXYJUjVjMDuBFfHWfUiy3yDMRv260TMdNXHyw9InZJ%2FwAHSYpgkh7N0ifFdw8pJvMBRp3FCqem%2FApafCBhNr22jrYpR0Y8PCga%2Br9hsuld8LoyhvOvYz0BzQ1H5KANciDmN0m35okRA4ahECPe3dlql%2B6Q6CRxMKDnqr8GOqUBjDJ9OxLc1b4dmKYwiXvmkRkr7VysD1FP%2F5vbLCWK8qAecowDOQ8Zx3PFG9HptywwkkJloKetoshibTxJvVHWvF%2FzYaIAwVxMqfKapzPlnsp4yhGojnjeXi2Fdb0zC%2BDfEdqROGPdkzHQobOkra5GYgsPcdh9sqnNDWVW1XYbbBU3oiVIMllXKxaX%2BVT%2FAVeE%2FWTRPlJXSiUIIU2tJMOGea%2BXSPXF&X-Amz-Signature=bc88f72cd29d199f5ddeb34d06013fa32a8f42fef634959576d3b32abe24759f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMQKA5T%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDqoawF%2FyeO0CJ3anJvVAMC%2F319Voj%2BpuX1kEzqxrVFOAIgT2leQOn%2FJxLD03OSo3daMbz%2ByMeMzcEjXxf9Zd%2F23qMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BIK7GqfaNzVrwwVCrcA8aO8dW0lasS9Bdr0HNgiKiShZLNCpV80Ir%2BTpCyrE5G%2F9PQXt9eCmUVL%2BDdK0GEEN%2BCzcHA%2BHgrZ5xX%2BsbpKFNpU%2B%2BH1GjWw%2FS2950ksk22ZQPqgkZ9yyIw16tsLv7zKsHNFyFu4rZssHodZ1hoFre%2Fy4dVWskKaR1dqTrHcSWPNkHjGNXtGu6gk9Z944yyCTMP5rev%2FNRszwG8WOwiz0bdkSC2Qzgh61PUajyVjWxgiiRmXn8sWoZSEWVsczfauDqabzukqFsr0g4MdoSE2shTQf5PZk1j%2FEyR9XMCGTOpsAA1phjUDa5QlOi%2FvE6HyTepMPoLDL5p1rUAV2QMlsE8P4unDQppkJtah1VCEp0kg0IHbPSYVNnEsiPMZU6M5C2HkRrwQ9kHfEmIAXhyTsd79smtpy2m653rVW2RdqSSGvvknPjzVKeqeZizuXgRtgZf0HTAWqFCuioTpfuXjMCduC%2BRaxWXYJUjVjMDuBFfHWfUiy3yDMRv260TMdNXHyw9InZJ%2FwAHSYpgkh7N0ifFdw8pJvMBRp3FCqem%2FApafCBhNr22jrYpR0Y8PCga%2Br9hsuld8LoyhvOvYz0BzQ1H5KANciDmN0m35okRA4ahECPe3dlql%2B6Q6CRxMKDnqr8GOqUBjDJ9OxLc1b4dmKYwiXvmkRkr7VysD1FP%2F5vbLCWK8qAecowDOQ8Zx3PFG9HptywwkkJloKetoshibTxJvVHWvF%2FzYaIAwVxMqfKapzPlnsp4yhGojnjeXi2Fdb0zC%2BDfEdqROGPdkzHQobOkra5GYgsPcdh9sqnNDWVW1XYbbBU3oiVIMllXKxaX%2BVT%2FAVeE%2FWTRPlJXSiUIIU2tJMOGea%2BXSPXF&X-Amz-Signature=5b8ea24b77f1713f2b6f869be6eaa542f8ce72f1d3c3d0869e71c3c67f97bb52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMQKA5T%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDqoawF%2FyeO0CJ3anJvVAMC%2F319Voj%2BpuX1kEzqxrVFOAIgT2leQOn%2FJxLD03OSo3daMbz%2ByMeMzcEjXxf9Zd%2F23qMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BIK7GqfaNzVrwwVCrcA8aO8dW0lasS9Bdr0HNgiKiShZLNCpV80Ir%2BTpCyrE5G%2F9PQXt9eCmUVL%2BDdK0GEEN%2BCzcHA%2BHgrZ5xX%2BsbpKFNpU%2B%2BH1GjWw%2FS2950ksk22ZQPqgkZ9yyIw16tsLv7zKsHNFyFu4rZssHodZ1hoFre%2Fy4dVWskKaR1dqTrHcSWPNkHjGNXtGu6gk9Z944yyCTMP5rev%2FNRszwG8WOwiz0bdkSC2Qzgh61PUajyVjWxgiiRmXn8sWoZSEWVsczfauDqabzukqFsr0g4MdoSE2shTQf5PZk1j%2FEyR9XMCGTOpsAA1phjUDa5QlOi%2FvE6HyTepMPoLDL5p1rUAV2QMlsE8P4unDQppkJtah1VCEp0kg0IHbPSYVNnEsiPMZU6M5C2HkRrwQ9kHfEmIAXhyTsd79smtpy2m653rVW2RdqSSGvvknPjzVKeqeZizuXgRtgZf0HTAWqFCuioTpfuXjMCduC%2BRaxWXYJUjVjMDuBFfHWfUiy3yDMRv260TMdNXHyw9InZJ%2FwAHSYpgkh7N0ifFdw8pJvMBRp3FCqem%2FApafCBhNr22jrYpR0Y8PCga%2Br9hsuld8LoyhvOvYz0BzQ1H5KANciDmN0m35okRA4ahECPe3dlql%2B6Q6CRxMKDnqr8GOqUBjDJ9OxLc1b4dmKYwiXvmkRkr7VysD1FP%2F5vbLCWK8qAecowDOQ8Zx3PFG9HptywwkkJloKetoshibTxJvVHWvF%2FzYaIAwVxMqfKapzPlnsp4yhGojnjeXi2Fdb0zC%2BDfEdqROGPdkzHQobOkra5GYgsPcdh9sqnNDWVW1XYbbBU3oiVIMllXKxaX%2BVT%2FAVeE%2FWTRPlJXSiUIIU2tJMOGea%2BXSPXF&X-Amz-Signature=4175c5c3e4d4d726374e88e7f3835b6c84c496ceb3ef6592b05e3946b528b5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMQKA5T%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDqoawF%2FyeO0CJ3anJvVAMC%2F319Voj%2BpuX1kEzqxrVFOAIgT2leQOn%2FJxLD03OSo3daMbz%2ByMeMzcEjXxf9Zd%2F23qMqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BIK7GqfaNzVrwwVCrcA8aO8dW0lasS9Bdr0HNgiKiShZLNCpV80Ir%2BTpCyrE5G%2F9PQXt9eCmUVL%2BDdK0GEEN%2BCzcHA%2BHgrZ5xX%2BsbpKFNpU%2B%2BH1GjWw%2FS2950ksk22ZQPqgkZ9yyIw16tsLv7zKsHNFyFu4rZssHodZ1hoFre%2Fy4dVWskKaR1dqTrHcSWPNkHjGNXtGu6gk9Z944yyCTMP5rev%2FNRszwG8WOwiz0bdkSC2Qzgh61PUajyVjWxgiiRmXn8sWoZSEWVsczfauDqabzukqFsr0g4MdoSE2shTQf5PZk1j%2FEyR9XMCGTOpsAA1phjUDa5QlOi%2FvE6HyTepMPoLDL5p1rUAV2QMlsE8P4unDQppkJtah1VCEp0kg0IHbPSYVNnEsiPMZU6M5C2HkRrwQ9kHfEmIAXhyTsd79smtpy2m653rVW2RdqSSGvvknPjzVKeqeZizuXgRtgZf0HTAWqFCuioTpfuXjMCduC%2BRaxWXYJUjVjMDuBFfHWfUiy3yDMRv260TMdNXHyw9InZJ%2FwAHSYpgkh7N0ifFdw8pJvMBRp3FCqem%2FApafCBhNr22jrYpR0Y8PCga%2Br9hsuld8LoyhvOvYz0BzQ1H5KANciDmN0m35okRA4ahECPe3dlql%2B6Q6CRxMKDnqr8GOqUBjDJ9OxLc1b4dmKYwiXvmkRkr7VysD1FP%2F5vbLCWK8qAecowDOQ8Zx3PFG9HptywwkkJloKetoshibTxJvVHWvF%2FzYaIAwVxMqfKapzPlnsp4yhGojnjeXi2Fdb0zC%2BDfEdqROGPdkzHQobOkra5GYgsPcdh9sqnNDWVW1XYbbBU3oiVIMllXKxaX%2BVT%2FAVeE%2FWTRPlJXSiUIIU2tJMOGea%2BXSPXF&X-Amz-Signature=018754f0f3e3fe33d66028468468724c54d503506bc06381e77d7e40af7fc938&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

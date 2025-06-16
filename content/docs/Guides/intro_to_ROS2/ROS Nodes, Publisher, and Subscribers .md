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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBX2D4Q%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGe6uBZPTzl8B7jHvjVFQNnQM0fR7KuQ1q%2B%2Ba6dXzuQmAiEApgSO%2FLF%2F8vSa32sUs8WsshE17oJ2N%2FKEmskaUfd11HMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGeMzBJcH15ZngUfSircAwI%2BCxW54LhSRKD2u4FJnAdixR%2FB47K6BWhJA495Vm0OftDTdZXDCzaG9gDOktfZE57fa9stQt7avjn%2FKxYXI6QmWZ15kBPz6OFSHMc%2F%2BzHg6eM%2FnrjQsG78EefVonBaAdojZVXGa5I%2BO7%2FCdqLBnQkX26wJM6LY0SzBHw9qNXcNP%2BXAIJsNMNpZO2bctDIVodDhrhuNK5YZtL79na9Ru2dD1nwSjzD2HceAcSBQW3Z%2Bdpn5nfSRZ62qyXd7X98rgbvVjgAOKc%2F1N9GtKZH2IoH%2F%2FNMKA90NrC8Bx%2BNkLr%2FgqqTN9Y75SrYhByviqqnBnIokDxqR3MTg2FR9dYVMo3egtuYqR%2BU1AMrlbV98OdoZdLL7m2AsmfNEq7LLmMOZ6%2F0pcFWRs%2B55WJjGRm%2FBhSDvGp%2BGAR8ZFO5JdqVmtGJn6o6xsw9Q97QQxKPj8ik4dVUVTad49NfgB8Z7kYOwS5WDPfUmm2E8LBohiI3PldA5I0dlMg1uQZQHxGuNUOtP0%2BGFQKVH1b3AVxfeM5m3gkEGkxTwe6shMe%2BZrCRtzBPGFB9SdKhpM%2B2VS7XWzgEmE9Qv2vyzZHsqYXNoiptsqt5Yk6xsZxeSSP2zWvZUe5YnKUkp9IzWnaBzimXzMKzJwMIGOqUBhMUGSJ3ji3VIusgzDURAaMKGWFmT56RcUGFEiJQc6sCkRV85rKa6tjVcQSRBpHGPl1ZHfMtHIe9x%2BAaL5hF3GAWgsG6Z%2BaCQvzpMQ0GnOn7s3n6saVg1NEoFYVNmE0O8%2BNV5r9Y3bAnw8hmilMzh6D7I2%2Boqw0qGciPull91S7JrIbbI%2FE04Oj8nrhmiHjNrBIPdi80ZsheXHlqnGh1f4e93%2Bytw&X-Amz-Signature=60d1ee05b5a89c20f641553207906fae52316b7167175f30f2ee35d1c45a82e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBX2D4Q%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGe6uBZPTzl8B7jHvjVFQNnQM0fR7KuQ1q%2B%2Ba6dXzuQmAiEApgSO%2FLF%2F8vSa32sUs8WsshE17oJ2N%2FKEmskaUfd11HMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGeMzBJcH15ZngUfSircAwI%2BCxW54LhSRKD2u4FJnAdixR%2FB47K6BWhJA495Vm0OftDTdZXDCzaG9gDOktfZE57fa9stQt7avjn%2FKxYXI6QmWZ15kBPz6OFSHMc%2F%2BzHg6eM%2FnrjQsG78EefVonBaAdojZVXGa5I%2BO7%2FCdqLBnQkX26wJM6LY0SzBHw9qNXcNP%2BXAIJsNMNpZO2bctDIVodDhrhuNK5YZtL79na9Ru2dD1nwSjzD2HceAcSBQW3Z%2Bdpn5nfSRZ62qyXd7X98rgbvVjgAOKc%2F1N9GtKZH2IoH%2F%2FNMKA90NrC8Bx%2BNkLr%2FgqqTN9Y75SrYhByviqqnBnIokDxqR3MTg2FR9dYVMo3egtuYqR%2BU1AMrlbV98OdoZdLL7m2AsmfNEq7LLmMOZ6%2F0pcFWRs%2B55WJjGRm%2FBhSDvGp%2BGAR8ZFO5JdqVmtGJn6o6xsw9Q97QQxKPj8ik4dVUVTad49NfgB8Z7kYOwS5WDPfUmm2E8LBohiI3PldA5I0dlMg1uQZQHxGuNUOtP0%2BGFQKVH1b3AVxfeM5m3gkEGkxTwe6shMe%2BZrCRtzBPGFB9SdKhpM%2B2VS7XWzgEmE9Qv2vyzZHsqYXNoiptsqt5Yk6xsZxeSSP2zWvZUe5YnKUkp9IzWnaBzimXzMKzJwMIGOqUBhMUGSJ3ji3VIusgzDURAaMKGWFmT56RcUGFEiJQc6sCkRV85rKa6tjVcQSRBpHGPl1ZHfMtHIe9x%2BAaL5hF3GAWgsG6Z%2BaCQvzpMQ0GnOn7s3n6saVg1NEoFYVNmE0O8%2BNV5r9Y3bAnw8hmilMzh6D7I2%2Boqw0qGciPull91S7JrIbbI%2FE04Oj8nrhmiHjNrBIPdi80ZsheXHlqnGh1f4e93%2Bytw&X-Amz-Signature=81b40eb908ce2291a20f022a30a6d0e198b49e528cd3f33bac8acbf616952a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBX2D4Q%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGe6uBZPTzl8B7jHvjVFQNnQM0fR7KuQ1q%2B%2Ba6dXzuQmAiEApgSO%2FLF%2F8vSa32sUs8WsshE17oJ2N%2FKEmskaUfd11HMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGeMzBJcH15ZngUfSircAwI%2BCxW54LhSRKD2u4FJnAdixR%2FB47K6BWhJA495Vm0OftDTdZXDCzaG9gDOktfZE57fa9stQt7avjn%2FKxYXI6QmWZ15kBPz6OFSHMc%2F%2BzHg6eM%2FnrjQsG78EefVonBaAdojZVXGa5I%2BO7%2FCdqLBnQkX26wJM6LY0SzBHw9qNXcNP%2BXAIJsNMNpZO2bctDIVodDhrhuNK5YZtL79na9Ru2dD1nwSjzD2HceAcSBQW3Z%2Bdpn5nfSRZ62qyXd7X98rgbvVjgAOKc%2F1N9GtKZH2IoH%2F%2FNMKA90NrC8Bx%2BNkLr%2FgqqTN9Y75SrYhByviqqnBnIokDxqR3MTg2FR9dYVMo3egtuYqR%2BU1AMrlbV98OdoZdLL7m2AsmfNEq7LLmMOZ6%2F0pcFWRs%2B55WJjGRm%2FBhSDvGp%2BGAR8ZFO5JdqVmtGJn6o6xsw9Q97QQxKPj8ik4dVUVTad49NfgB8Z7kYOwS5WDPfUmm2E8LBohiI3PldA5I0dlMg1uQZQHxGuNUOtP0%2BGFQKVH1b3AVxfeM5m3gkEGkxTwe6shMe%2BZrCRtzBPGFB9SdKhpM%2B2VS7XWzgEmE9Qv2vyzZHsqYXNoiptsqt5Yk6xsZxeSSP2zWvZUe5YnKUkp9IzWnaBzimXzMKzJwMIGOqUBhMUGSJ3ji3VIusgzDURAaMKGWFmT56RcUGFEiJQc6sCkRV85rKa6tjVcQSRBpHGPl1ZHfMtHIe9x%2BAaL5hF3GAWgsG6Z%2BaCQvzpMQ0GnOn7s3n6saVg1NEoFYVNmE0O8%2BNV5r9Y3bAnw8hmilMzh6D7I2%2Boqw0qGciPull91S7JrIbbI%2FE04Oj8nrhmiHjNrBIPdi80ZsheXHlqnGh1f4e93%2Bytw&X-Amz-Signature=2dcc5c71ac956a89dc1e8a083e9295f990ad4f96f0b6fc7159b38e1989c4496f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBX2D4Q%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGe6uBZPTzl8B7jHvjVFQNnQM0fR7KuQ1q%2B%2Ba6dXzuQmAiEApgSO%2FLF%2F8vSa32sUs8WsshE17oJ2N%2FKEmskaUfd11HMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGeMzBJcH15ZngUfSircAwI%2BCxW54LhSRKD2u4FJnAdixR%2FB47K6BWhJA495Vm0OftDTdZXDCzaG9gDOktfZE57fa9stQt7avjn%2FKxYXI6QmWZ15kBPz6OFSHMc%2F%2BzHg6eM%2FnrjQsG78EefVonBaAdojZVXGa5I%2BO7%2FCdqLBnQkX26wJM6LY0SzBHw9qNXcNP%2BXAIJsNMNpZO2bctDIVodDhrhuNK5YZtL79na9Ru2dD1nwSjzD2HceAcSBQW3Z%2Bdpn5nfSRZ62qyXd7X98rgbvVjgAOKc%2F1N9GtKZH2IoH%2F%2FNMKA90NrC8Bx%2BNkLr%2FgqqTN9Y75SrYhByviqqnBnIokDxqR3MTg2FR9dYVMo3egtuYqR%2BU1AMrlbV98OdoZdLL7m2AsmfNEq7LLmMOZ6%2F0pcFWRs%2B55WJjGRm%2FBhSDvGp%2BGAR8ZFO5JdqVmtGJn6o6xsw9Q97QQxKPj8ik4dVUVTad49NfgB8Z7kYOwS5WDPfUmm2E8LBohiI3PldA5I0dlMg1uQZQHxGuNUOtP0%2BGFQKVH1b3AVxfeM5m3gkEGkxTwe6shMe%2BZrCRtzBPGFB9SdKhpM%2B2VS7XWzgEmE9Qv2vyzZHsqYXNoiptsqt5Yk6xsZxeSSP2zWvZUe5YnKUkp9IzWnaBzimXzMKzJwMIGOqUBhMUGSJ3ji3VIusgzDURAaMKGWFmT56RcUGFEiJQc6sCkRV85rKa6tjVcQSRBpHGPl1ZHfMtHIe9x%2BAaL5hF3GAWgsG6Z%2BaCQvzpMQ0GnOn7s3n6saVg1NEoFYVNmE0O8%2BNV5r9Y3bAnw8hmilMzh6D7I2%2Boqw0qGciPull91S7JrIbbI%2FE04Oj8nrhmiHjNrBIPdi80ZsheXHlqnGh1f4e93%2Bytw&X-Amz-Signature=478e6c654817d16e4ca6c931d284c6f48d6e97668d7a60e58892ed967cdaddc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBX2D4Q%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGe6uBZPTzl8B7jHvjVFQNnQM0fR7KuQ1q%2B%2Ba6dXzuQmAiEApgSO%2FLF%2F8vSa32sUs8WsshE17oJ2N%2FKEmskaUfd11HMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGeMzBJcH15ZngUfSircAwI%2BCxW54LhSRKD2u4FJnAdixR%2FB47K6BWhJA495Vm0OftDTdZXDCzaG9gDOktfZE57fa9stQt7avjn%2FKxYXI6QmWZ15kBPz6OFSHMc%2F%2BzHg6eM%2FnrjQsG78EefVonBaAdojZVXGa5I%2BO7%2FCdqLBnQkX26wJM6LY0SzBHw9qNXcNP%2BXAIJsNMNpZO2bctDIVodDhrhuNK5YZtL79na9Ru2dD1nwSjzD2HceAcSBQW3Z%2Bdpn5nfSRZ62qyXd7X98rgbvVjgAOKc%2F1N9GtKZH2IoH%2F%2FNMKA90NrC8Bx%2BNkLr%2FgqqTN9Y75SrYhByviqqnBnIokDxqR3MTg2FR9dYVMo3egtuYqR%2BU1AMrlbV98OdoZdLL7m2AsmfNEq7LLmMOZ6%2F0pcFWRs%2B55WJjGRm%2FBhSDvGp%2BGAR8ZFO5JdqVmtGJn6o6xsw9Q97QQxKPj8ik4dVUVTad49NfgB8Z7kYOwS5WDPfUmm2E8LBohiI3PldA5I0dlMg1uQZQHxGuNUOtP0%2BGFQKVH1b3AVxfeM5m3gkEGkxTwe6shMe%2BZrCRtzBPGFB9SdKhpM%2B2VS7XWzgEmE9Qv2vyzZHsqYXNoiptsqt5Yk6xsZxeSSP2zWvZUe5YnKUkp9IzWnaBzimXzMKzJwMIGOqUBhMUGSJ3ji3VIusgzDURAaMKGWFmT56RcUGFEiJQc6sCkRV85rKa6tjVcQSRBpHGPl1ZHfMtHIe9x%2BAaL5hF3GAWgsG6Z%2BaCQvzpMQ0GnOn7s3n6saVg1NEoFYVNmE0O8%2BNV5r9Y3bAnw8hmilMzh6D7I2%2Boqw0qGciPull91S7JrIbbI%2FE04Oj8nrhmiHjNrBIPdi80ZsheXHlqnGh1f4e93%2Bytw&X-Amz-Signature=8959178085c8e9c07565d4e7d7c4c79f70ad0fbd83c4b9ab45268a2655116199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBX2D4Q%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGe6uBZPTzl8B7jHvjVFQNnQM0fR7KuQ1q%2B%2Ba6dXzuQmAiEApgSO%2FLF%2F8vSa32sUs8WsshE17oJ2N%2FKEmskaUfd11HMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGeMzBJcH15ZngUfSircAwI%2BCxW54LhSRKD2u4FJnAdixR%2FB47K6BWhJA495Vm0OftDTdZXDCzaG9gDOktfZE57fa9stQt7avjn%2FKxYXI6QmWZ15kBPz6OFSHMc%2F%2BzHg6eM%2FnrjQsG78EefVonBaAdojZVXGa5I%2BO7%2FCdqLBnQkX26wJM6LY0SzBHw9qNXcNP%2BXAIJsNMNpZO2bctDIVodDhrhuNK5YZtL79na9Ru2dD1nwSjzD2HceAcSBQW3Z%2Bdpn5nfSRZ62qyXd7X98rgbvVjgAOKc%2F1N9GtKZH2IoH%2F%2FNMKA90NrC8Bx%2BNkLr%2FgqqTN9Y75SrYhByviqqnBnIokDxqR3MTg2FR9dYVMo3egtuYqR%2BU1AMrlbV98OdoZdLL7m2AsmfNEq7LLmMOZ6%2F0pcFWRs%2B55WJjGRm%2FBhSDvGp%2BGAR8ZFO5JdqVmtGJn6o6xsw9Q97QQxKPj8ik4dVUVTad49NfgB8Z7kYOwS5WDPfUmm2E8LBohiI3PldA5I0dlMg1uQZQHxGuNUOtP0%2BGFQKVH1b3AVxfeM5m3gkEGkxTwe6shMe%2BZrCRtzBPGFB9SdKhpM%2B2VS7XWzgEmE9Qv2vyzZHsqYXNoiptsqt5Yk6xsZxeSSP2zWvZUe5YnKUkp9IzWnaBzimXzMKzJwMIGOqUBhMUGSJ3ji3VIusgzDURAaMKGWFmT56RcUGFEiJQc6sCkRV85rKa6tjVcQSRBpHGPl1ZHfMtHIe9x%2BAaL5hF3GAWgsG6Z%2BaCQvzpMQ0GnOn7s3n6saVg1NEoFYVNmE0O8%2BNV5r9Y3bAnw8hmilMzh6D7I2%2Boqw0qGciPull91S7JrIbbI%2FE04Oj8nrhmiHjNrBIPdi80ZsheXHlqnGh1f4e93%2Bytw&X-Amz-Signature=741d0749eb8b4c5aff7203595052872a5ffeb8e74ff64fbef199698050a2905b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBX2D4Q%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGe6uBZPTzl8B7jHvjVFQNnQM0fR7KuQ1q%2B%2Ba6dXzuQmAiEApgSO%2FLF%2F8vSa32sUs8WsshE17oJ2N%2FKEmskaUfd11HMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGeMzBJcH15ZngUfSircAwI%2BCxW54LhSRKD2u4FJnAdixR%2FB47K6BWhJA495Vm0OftDTdZXDCzaG9gDOktfZE57fa9stQt7avjn%2FKxYXI6QmWZ15kBPz6OFSHMc%2F%2BzHg6eM%2FnrjQsG78EefVonBaAdojZVXGa5I%2BO7%2FCdqLBnQkX26wJM6LY0SzBHw9qNXcNP%2BXAIJsNMNpZO2bctDIVodDhrhuNK5YZtL79na9Ru2dD1nwSjzD2HceAcSBQW3Z%2Bdpn5nfSRZ62qyXd7X98rgbvVjgAOKc%2F1N9GtKZH2IoH%2F%2FNMKA90NrC8Bx%2BNkLr%2FgqqTN9Y75SrYhByviqqnBnIokDxqR3MTg2FR9dYVMo3egtuYqR%2BU1AMrlbV98OdoZdLL7m2AsmfNEq7LLmMOZ6%2F0pcFWRs%2B55WJjGRm%2FBhSDvGp%2BGAR8ZFO5JdqVmtGJn6o6xsw9Q97QQxKPj8ik4dVUVTad49NfgB8Z7kYOwS5WDPfUmm2E8LBohiI3PldA5I0dlMg1uQZQHxGuNUOtP0%2BGFQKVH1b3AVxfeM5m3gkEGkxTwe6shMe%2BZrCRtzBPGFB9SdKhpM%2B2VS7XWzgEmE9Qv2vyzZHsqYXNoiptsqt5Yk6xsZxeSSP2zWvZUe5YnKUkp9IzWnaBzimXzMKzJwMIGOqUBhMUGSJ3ji3VIusgzDURAaMKGWFmT56RcUGFEiJQc6sCkRV85rKa6tjVcQSRBpHGPl1ZHfMtHIe9x%2BAaL5hF3GAWgsG6Z%2BaCQvzpMQ0GnOn7s3n6saVg1NEoFYVNmE0O8%2BNV5r9Y3bAnw8hmilMzh6D7I2%2Boqw0qGciPull91S7JrIbbI%2FE04Oj8nrhmiHjNrBIPdi80ZsheXHlqnGh1f4e93%2Bytw&X-Amz-Signature=9d3be1727af303a87472e9ed2c8f19a91748cce7c3cf5aa7a6d63497ac415b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBX2D4Q%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGe6uBZPTzl8B7jHvjVFQNnQM0fR7KuQ1q%2B%2Ba6dXzuQmAiEApgSO%2FLF%2F8vSa32sUs8WsshE17oJ2N%2FKEmskaUfd11HMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGeMzBJcH15ZngUfSircAwI%2BCxW54LhSRKD2u4FJnAdixR%2FB47K6BWhJA495Vm0OftDTdZXDCzaG9gDOktfZE57fa9stQt7avjn%2FKxYXI6QmWZ15kBPz6OFSHMc%2F%2BzHg6eM%2FnrjQsG78EefVonBaAdojZVXGa5I%2BO7%2FCdqLBnQkX26wJM6LY0SzBHw9qNXcNP%2BXAIJsNMNpZO2bctDIVodDhrhuNK5YZtL79na9Ru2dD1nwSjzD2HceAcSBQW3Z%2Bdpn5nfSRZ62qyXd7X98rgbvVjgAOKc%2F1N9GtKZH2IoH%2F%2FNMKA90NrC8Bx%2BNkLr%2FgqqTN9Y75SrYhByviqqnBnIokDxqR3MTg2FR9dYVMo3egtuYqR%2BU1AMrlbV98OdoZdLL7m2AsmfNEq7LLmMOZ6%2F0pcFWRs%2B55WJjGRm%2FBhSDvGp%2BGAR8ZFO5JdqVmtGJn6o6xsw9Q97QQxKPj8ik4dVUVTad49NfgB8Z7kYOwS5WDPfUmm2E8LBohiI3PldA5I0dlMg1uQZQHxGuNUOtP0%2BGFQKVH1b3AVxfeM5m3gkEGkxTwe6shMe%2BZrCRtzBPGFB9SdKhpM%2B2VS7XWzgEmE9Qv2vyzZHsqYXNoiptsqt5Yk6xsZxeSSP2zWvZUe5YnKUkp9IzWnaBzimXzMKzJwMIGOqUBhMUGSJ3ji3VIusgzDURAaMKGWFmT56RcUGFEiJQc6sCkRV85rKa6tjVcQSRBpHGPl1ZHfMtHIe9x%2BAaL5hF3GAWgsG6Z%2BaCQvzpMQ0GnOn7s3n6saVg1NEoFYVNmE0O8%2BNV5r9Y3bAnw8hmilMzh6D7I2%2Boqw0qGciPull91S7JrIbbI%2FE04Oj8nrhmiHjNrBIPdi80ZsheXHlqnGh1f4e93%2Bytw&X-Amz-Signature=2940eb70d96b9787760b527ed7c0dfe3919cfaae86234fc081f0ca968ef4b0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

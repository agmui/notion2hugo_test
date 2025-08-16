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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZ5RZS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIG9XgVdSlCL64Vflc2rFOnMqcT1L9R7Mehgto1iM8yk7AiEA5c6gAtjIvxDm0%2F7OfRtXheJerMYSQlHPReeds%2FDCZosq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIY189pgZD1oSnBc9yrcAxZkkF8YdfJ6lXnaOl2hgfzqOpSDG4j%2BD8dveOUJz%2F%2BpoCt9ee6k9gdTG%2BuN1vp0uFhXid5aLafGDG3n73SCMQsLwsNKecS47gg1CGcUt1V5R2BFvdTfsVkGG8d560k1tZzkK%2FrPZ31v9IGZFiCbt7bmj0WVe4RwEwF77wAMHZv1qzmXJTmrkpCkBsgs3tnaOFt%2Bzae2b%2BjG10Ushf%2F5%2BrmSvf03anQeZh%2FOloUfQvWncAmDas6jTBYQjilVnOtzUhrtqCFS5fE9zWXTZoe63kvnAxsBwXmTFCy2rtnLcDZbcR2ZoAhp3%2BmtR0uq%2Fh%2Beoyfgcxs9quFwCdkeQ6fPvdOZTWZxZnV%2B9%2FlcwfHnryoyQ7vCrbUzDJ5qNFW0OnRp1HDmRWg5l9eW6jtcFTKrAYfgmFKmBptUFIjK4OFrxc53zosbALJgkzV2wZ5A6lP2HSEsY12yJOFJ2SLLOnAul25E%2FcIc%2BVB9OiI5RtqvdEvoli%2Bxvc1qvZNI2CnNsD450MASVaRXRdBaQ6o%2FjpHO%2B%2FGcjphz%2F3JoOI%2F6LY6HphIJwa46lVCGrCpEtdEtuwM0iJQy4RR%2FM4DoLR0oMdqjsf5EHt%2BHkDikYaHQPd2pI8z4IOdNS2BIuMR1yIvkMN7j%2F8QGOqUBsV%2BEo6mz3YHM6Jhj8hufgcto8U2Bo0Z3iq0Qt2VksOv8mF%2F7uVZoL74VvlWSio0m0gdCDqA6HPmdFK0PIW28yGWOKO8HFNMou%2FCmj0Bc9HqirpvyxoIql3ZUJPMpvf7lx2vJ91rPInquN7NTSCqczU5QpyMDetK7WqC42Fklj%2B2SLjmtXVu%2BffCjmw15hFmCtd79iFBXd0%2Fy5RmO9YD%2BwTikS65I&X-Amz-Signature=a791d10448c7d09fe00197bfec4a412250272811bb9fae3928c624c44dcf3eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZ5RZS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIG9XgVdSlCL64Vflc2rFOnMqcT1L9R7Mehgto1iM8yk7AiEA5c6gAtjIvxDm0%2F7OfRtXheJerMYSQlHPReeds%2FDCZosq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIY189pgZD1oSnBc9yrcAxZkkF8YdfJ6lXnaOl2hgfzqOpSDG4j%2BD8dveOUJz%2F%2BpoCt9ee6k9gdTG%2BuN1vp0uFhXid5aLafGDG3n73SCMQsLwsNKecS47gg1CGcUt1V5R2BFvdTfsVkGG8d560k1tZzkK%2FrPZ31v9IGZFiCbt7bmj0WVe4RwEwF77wAMHZv1qzmXJTmrkpCkBsgs3tnaOFt%2Bzae2b%2BjG10Ushf%2F5%2BrmSvf03anQeZh%2FOloUfQvWncAmDas6jTBYQjilVnOtzUhrtqCFS5fE9zWXTZoe63kvnAxsBwXmTFCy2rtnLcDZbcR2ZoAhp3%2BmtR0uq%2Fh%2Beoyfgcxs9quFwCdkeQ6fPvdOZTWZxZnV%2B9%2FlcwfHnryoyQ7vCrbUzDJ5qNFW0OnRp1HDmRWg5l9eW6jtcFTKrAYfgmFKmBptUFIjK4OFrxc53zosbALJgkzV2wZ5A6lP2HSEsY12yJOFJ2SLLOnAul25E%2FcIc%2BVB9OiI5RtqvdEvoli%2Bxvc1qvZNI2CnNsD450MASVaRXRdBaQ6o%2FjpHO%2B%2FGcjphz%2F3JoOI%2F6LY6HphIJwa46lVCGrCpEtdEtuwM0iJQy4RR%2FM4DoLR0oMdqjsf5EHt%2BHkDikYaHQPd2pI8z4IOdNS2BIuMR1yIvkMN7j%2F8QGOqUBsV%2BEo6mz3YHM6Jhj8hufgcto8U2Bo0Z3iq0Qt2VksOv8mF%2F7uVZoL74VvlWSio0m0gdCDqA6HPmdFK0PIW28yGWOKO8HFNMou%2FCmj0Bc9HqirpvyxoIql3ZUJPMpvf7lx2vJ91rPInquN7NTSCqczU5QpyMDetK7WqC42Fklj%2B2SLjmtXVu%2BffCjmw15hFmCtd79iFBXd0%2Fy5RmO9YD%2BwTikS65I&X-Amz-Signature=d09f2a2ed5f24b47734b69dccbb467807864878dceb7bfa639b6144d2741e8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZ5RZS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIG9XgVdSlCL64Vflc2rFOnMqcT1L9R7Mehgto1iM8yk7AiEA5c6gAtjIvxDm0%2F7OfRtXheJerMYSQlHPReeds%2FDCZosq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIY189pgZD1oSnBc9yrcAxZkkF8YdfJ6lXnaOl2hgfzqOpSDG4j%2BD8dveOUJz%2F%2BpoCt9ee6k9gdTG%2BuN1vp0uFhXid5aLafGDG3n73SCMQsLwsNKecS47gg1CGcUt1V5R2BFvdTfsVkGG8d560k1tZzkK%2FrPZ31v9IGZFiCbt7bmj0WVe4RwEwF77wAMHZv1qzmXJTmrkpCkBsgs3tnaOFt%2Bzae2b%2BjG10Ushf%2F5%2BrmSvf03anQeZh%2FOloUfQvWncAmDas6jTBYQjilVnOtzUhrtqCFS5fE9zWXTZoe63kvnAxsBwXmTFCy2rtnLcDZbcR2ZoAhp3%2BmtR0uq%2Fh%2Beoyfgcxs9quFwCdkeQ6fPvdOZTWZxZnV%2B9%2FlcwfHnryoyQ7vCrbUzDJ5qNFW0OnRp1HDmRWg5l9eW6jtcFTKrAYfgmFKmBptUFIjK4OFrxc53zosbALJgkzV2wZ5A6lP2HSEsY12yJOFJ2SLLOnAul25E%2FcIc%2BVB9OiI5RtqvdEvoli%2Bxvc1qvZNI2CnNsD450MASVaRXRdBaQ6o%2FjpHO%2B%2FGcjphz%2F3JoOI%2F6LY6HphIJwa46lVCGrCpEtdEtuwM0iJQy4RR%2FM4DoLR0oMdqjsf5EHt%2BHkDikYaHQPd2pI8z4IOdNS2BIuMR1yIvkMN7j%2F8QGOqUBsV%2BEo6mz3YHM6Jhj8hufgcto8U2Bo0Z3iq0Qt2VksOv8mF%2F7uVZoL74VvlWSio0m0gdCDqA6HPmdFK0PIW28yGWOKO8HFNMou%2FCmj0Bc9HqirpvyxoIql3ZUJPMpvf7lx2vJ91rPInquN7NTSCqczU5QpyMDetK7WqC42Fklj%2B2SLjmtXVu%2BffCjmw15hFmCtd79iFBXd0%2Fy5RmO9YD%2BwTikS65I&X-Amz-Signature=59befdd083e413ae3cd26e0296cedc346db1bb3895f50acab69999def2a59358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZ5RZS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIG9XgVdSlCL64Vflc2rFOnMqcT1L9R7Mehgto1iM8yk7AiEA5c6gAtjIvxDm0%2F7OfRtXheJerMYSQlHPReeds%2FDCZosq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIY189pgZD1oSnBc9yrcAxZkkF8YdfJ6lXnaOl2hgfzqOpSDG4j%2BD8dveOUJz%2F%2BpoCt9ee6k9gdTG%2BuN1vp0uFhXid5aLafGDG3n73SCMQsLwsNKecS47gg1CGcUt1V5R2BFvdTfsVkGG8d560k1tZzkK%2FrPZ31v9IGZFiCbt7bmj0WVe4RwEwF77wAMHZv1qzmXJTmrkpCkBsgs3tnaOFt%2Bzae2b%2BjG10Ushf%2F5%2BrmSvf03anQeZh%2FOloUfQvWncAmDas6jTBYQjilVnOtzUhrtqCFS5fE9zWXTZoe63kvnAxsBwXmTFCy2rtnLcDZbcR2ZoAhp3%2BmtR0uq%2Fh%2Beoyfgcxs9quFwCdkeQ6fPvdOZTWZxZnV%2B9%2FlcwfHnryoyQ7vCrbUzDJ5qNFW0OnRp1HDmRWg5l9eW6jtcFTKrAYfgmFKmBptUFIjK4OFrxc53zosbALJgkzV2wZ5A6lP2HSEsY12yJOFJ2SLLOnAul25E%2FcIc%2BVB9OiI5RtqvdEvoli%2Bxvc1qvZNI2CnNsD450MASVaRXRdBaQ6o%2FjpHO%2B%2FGcjphz%2F3JoOI%2F6LY6HphIJwa46lVCGrCpEtdEtuwM0iJQy4RR%2FM4DoLR0oMdqjsf5EHt%2BHkDikYaHQPd2pI8z4IOdNS2BIuMR1yIvkMN7j%2F8QGOqUBsV%2BEo6mz3YHM6Jhj8hufgcto8U2Bo0Z3iq0Qt2VksOv8mF%2F7uVZoL74VvlWSio0m0gdCDqA6HPmdFK0PIW28yGWOKO8HFNMou%2FCmj0Bc9HqirpvyxoIql3ZUJPMpvf7lx2vJ91rPInquN7NTSCqczU5QpyMDetK7WqC42Fklj%2B2SLjmtXVu%2BffCjmw15hFmCtd79iFBXd0%2Fy5RmO9YD%2BwTikS65I&X-Amz-Signature=b3c2c971e47f5ed0dcc19d34a689e2736ee99a082bf869892331127420acb467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZ5RZS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIG9XgVdSlCL64Vflc2rFOnMqcT1L9R7Mehgto1iM8yk7AiEA5c6gAtjIvxDm0%2F7OfRtXheJerMYSQlHPReeds%2FDCZosq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIY189pgZD1oSnBc9yrcAxZkkF8YdfJ6lXnaOl2hgfzqOpSDG4j%2BD8dveOUJz%2F%2BpoCt9ee6k9gdTG%2BuN1vp0uFhXid5aLafGDG3n73SCMQsLwsNKecS47gg1CGcUt1V5R2BFvdTfsVkGG8d560k1tZzkK%2FrPZ31v9IGZFiCbt7bmj0WVe4RwEwF77wAMHZv1qzmXJTmrkpCkBsgs3tnaOFt%2Bzae2b%2BjG10Ushf%2F5%2BrmSvf03anQeZh%2FOloUfQvWncAmDas6jTBYQjilVnOtzUhrtqCFS5fE9zWXTZoe63kvnAxsBwXmTFCy2rtnLcDZbcR2ZoAhp3%2BmtR0uq%2Fh%2Beoyfgcxs9quFwCdkeQ6fPvdOZTWZxZnV%2B9%2FlcwfHnryoyQ7vCrbUzDJ5qNFW0OnRp1HDmRWg5l9eW6jtcFTKrAYfgmFKmBptUFIjK4OFrxc53zosbALJgkzV2wZ5A6lP2HSEsY12yJOFJ2SLLOnAul25E%2FcIc%2BVB9OiI5RtqvdEvoli%2Bxvc1qvZNI2CnNsD450MASVaRXRdBaQ6o%2FjpHO%2B%2FGcjphz%2F3JoOI%2F6LY6HphIJwa46lVCGrCpEtdEtuwM0iJQy4RR%2FM4DoLR0oMdqjsf5EHt%2BHkDikYaHQPd2pI8z4IOdNS2BIuMR1yIvkMN7j%2F8QGOqUBsV%2BEo6mz3YHM6Jhj8hufgcto8U2Bo0Z3iq0Qt2VksOv8mF%2F7uVZoL74VvlWSio0m0gdCDqA6HPmdFK0PIW28yGWOKO8HFNMou%2FCmj0Bc9HqirpvyxoIql3ZUJPMpvf7lx2vJ91rPInquN7NTSCqczU5QpyMDetK7WqC42Fklj%2B2SLjmtXVu%2BffCjmw15hFmCtd79iFBXd0%2Fy5RmO9YD%2BwTikS65I&X-Amz-Signature=b06e2e90a43cca1d18160d1e7d19ca0dd56ce434af1e69612e79ff392aa12cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZ5RZS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIG9XgVdSlCL64Vflc2rFOnMqcT1L9R7Mehgto1iM8yk7AiEA5c6gAtjIvxDm0%2F7OfRtXheJerMYSQlHPReeds%2FDCZosq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIY189pgZD1oSnBc9yrcAxZkkF8YdfJ6lXnaOl2hgfzqOpSDG4j%2BD8dveOUJz%2F%2BpoCt9ee6k9gdTG%2BuN1vp0uFhXid5aLafGDG3n73SCMQsLwsNKecS47gg1CGcUt1V5R2BFvdTfsVkGG8d560k1tZzkK%2FrPZ31v9IGZFiCbt7bmj0WVe4RwEwF77wAMHZv1qzmXJTmrkpCkBsgs3tnaOFt%2Bzae2b%2BjG10Ushf%2F5%2BrmSvf03anQeZh%2FOloUfQvWncAmDas6jTBYQjilVnOtzUhrtqCFS5fE9zWXTZoe63kvnAxsBwXmTFCy2rtnLcDZbcR2ZoAhp3%2BmtR0uq%2Fh%2Beoyfgcxs9quFwCdkeQ6fPvdOZTWZxZnV%2B9%2FlcwfHnryoyQ7vCrbUzDJ5qNFW0OnRp1HDmRWg5l9eW6jtcFTKrAYfgmFKmBptUFIjK4OFrxc53zosbALJgkzV2wZ5A6lP2HSEsY12yJOFJ2SLLOnAul25E%2FcIc%2BVB9OiI5RtqvdEvoli%2Bxvc1qvZNI2CnNsD450MASVaRXRdBaQ6o%2FjpHO%2B%2FGcjphz%2F3JoOI%2F6LY6HphIJwa46lVCGrCpEtdEtuwM0iJQy4RR%2FM4DoLR0oMdqjsf5EHt%2BHkDikYaHQPd2pI8z4IOdNS2BIuMR1yIvkMN7j%2F8QGOqUBsV%2BEo6mz3YHM6Jhj8hufgcto8U2Bo0Z3iq0Qt2VksOv8mF%2F7uVZoL74VvlWSio0m0gdCDqA6HPmdFK0PIW28yGWOKO8HFNMou%2FCmj0Bc9HqirpvyxoIql3ZUJPMpvf7lx2vJ91rPInquN7NTSCqczU5QpyMDetK7WqC42Fklj%2B2SLjmtXVu%2BffCjmw15hFmCtd79iFBXd0%2Fy5RmO9YD%2BwTikS65I&X-Amz-Signature=2dd64dd5dda13890d33163967c6f7912cc93a069d22fabb80901ce475cdfd47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZ5RZS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIG9XgVdSlCL64Vflc2rFOnMqcT1L9R7Mehgto1iM8yk7AiEA5c6gAtjIvxDm0%2F7OfRtXheJerMYSQlHPReeds%2FDCZosq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIY189pgZD1oSnBc9yrcAxZkkF8YdfJ6lXnaOl2hgfzqOpSDG4j%2BD8dveOUJz%2F%2BpoCt9ee6k9gdTG%2BuN1vp0uFhXid5aLafGDG3n73SCMQsLwsNKecS47gg1CGcUt1V5R2BFvdTfsVkGG8d560k1tZzkK%2FrPZ31v9IGZFiCbt7bmj0WVe4RwEwF77wAMHZv1qzmXJTmrkpCkBsgs3tnaOFt%2Bzae2b%2BjG10Ushf%2F5%2BrmSvf03anQeZh%2FOloUfQvWncAmDas6jTBYQjilVnOtzUhrtqCFS5fE9zWXTZoe63kvnAxsBwXmTFCy2rtnLcDZbcR2ZoAhp3%2BmtR0uq%2Fh%2Beoyfgcxs9quFwCdkeQ6fPvdOZTWZxZnV%2B9%2FlcwfHnryoyQ7vCrbUzDJ5qNFW0OnRp1HDmRWg5l9eW6jtcFTKrAYfgmFKmBptUFIjK4OFrxc53zosbALJgkzV2wZ5A6lP2HSEsY12yJOFJ2SLLOnAul25E%2FcIc%2BVB9OiI5RtqvdEvoli%2Bxvc1qvZNI2CnNsD450MASVaRXRdBaQ6o%2FjpHO%2B%2FGcjphz%2F3JoOI%2F6LY6HphIJwa46lVCGrCpEtdEtuwM0iJQy4RR%2FM4DoLR0oMdqjsf5EHt%2BHkDikYaHQPd2pI8z4IOdNS2BIuMR1yIvkMN7j%2F8QGOqUBsV%2BEo6mz3YHM6Jhj8hufgcto8U2Bo0Z3iq0Qt2VksOv8mF%2F7uVZoL74VvlWSio0m0gdCDqA6HPmdFK0PIW28yGWOKO8HFNMou%2FCmj0Bc9HqirpvyxoIql3ZUJPMpvf7lx2vJ91rPInquN7NTSCqczU5QpyMDetK7WqC42Fklj%2B2SLjmtXVu%2BffCjmw15hFmCtd79iFBXd0%2Fy5RmO9YD%2BwTikS65I&X-Amz-Signature=019c448b8715dd36585bb4376216c7331cbdc79a33118cbd438496ac61a5cf19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZ5RZS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIG9XgVdSlCL64Vflc2rFOnMqcT1L9R7Mehgto1iM8yk7AiEA5c6gAtjIvxDm0%2F7OfRtXheJerMYSQlHPReeds%2FDCZosq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIY189pgZD1oSnBc9yrcAxZkkF8YdfJ6lXnaOl2hgfzqOpSDG4j%2BD8dveOUJz%2F%2BpoCt9ee6k9gdTG%2BuN1vp0uFhXid5aLafGDG3n73SCMQsLwsNKecS47gg1CGcUt1V5R2BFvdTfsVkGG8d560k1tZzkK%2FrPZ31v9IGZFiCbt7bmj0WVe4RwEwF77wAMHZv1qzmXJTmrkpCkBsgs3tnaOFt%2Bzae2b%2BjG10Ushf%2F5%2BrmSvf03anQeZh%2FOloUfQvWncAmDas6jTBYQjilVnOtzUhrtqCFS5fE9zWXTZoe63kvnAxsBwXmTFCy2rtnLcDZbcR2ZoAhp3%2BmtR0uq%2Fh%2Beoyfgcxs9quFwCdkeQ6fPvdOZTWZxZnV%2B9%2FlcwfHnryoyQ7vCrbUzDJ5qNFW0OnRp1HDmRWg5l9eW6jtcFTKrAYfgmFKmBptUFIjK4OFrxc53zosbALJgkzV2wZ5A6lP2HSEsY12yJOFJ2SLLOnAul25E%2FcIc%2BVB9OiI5RtqvdEvoli%2Bxvc1qvZNI2CnNsD450MASVaRXRdBaQ6o%2FjpHO%2B%2FGcjphz%2F3JoOI%2F6LY6HphIJwa46lVCGrCpEtdEtuwM0iJQy4RR%2FM4DoLR0oMdqjsf5EHt%2BHkDikYaHQPd2pI8z4IOdNS2BIuMR1yIvkMN7j%2F8QGOqUBsV%2BEo6mz3YHM6Jhj8hufgcto8U2Bo0Z3iq0Qt2VksOv8mF%2F7uVZoL74VvlWSio0m0gdCDqA6HPmdFK0PIW28yGWOKO8HFNMou%2FCmj0Bc9HqirpvyxoIql3ZUJPMpvf7lx2vJ91rPInquN7NTSCqczU5QpyMDetK7WqC42Fklj%2B2SLjmtXVu%2BffCjmw15hFmCtd79iFBXd0%2Fy5RmO9YD%2BwTikS65I&X-Amz-Signature=b339a1acff79327187ce1cfac2f341f2d6813c0be192b2cd8dc707b4017c95ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWINZGVD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGkMKrRxqOKLVJCCEH49u7vWrOlePMObTTy682Ik9fAIhAMKFKDoTw0sTNAOKAv%2BQb%2BxN2K%2BPDOwCb2pTvrQaZ0d5Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywLuANPIeSHhngUYEq3APcZ6b9G3EIybbXTChhaNn9V6xq8ZniXdqyIN7uGigU5530LPyWz21M9SCu7e4Y9Klv57uRIZ%2FFsJr7k%2BefvHWVlQY18bVPn6heC%2B7QWkwxAZRAw71T2GVd2AqJtz0pNoJcyt8IJTfbIJVPWSQ0I%2FDcT8SvJWoRyZBJpsWw%2BlOkY3boUz4jA7oqY6aX199pvtFtXEQDYItKLBNW98gaCjdF2Nun%2FSvm5dRPER1E41lYoxq%2BX7xzQ7j08oZobwb9KeJnthJeTfd%2BSopw0pkUkN6ofqMVBRgimqzsUJvGxRa2fS%2FTci283DZ40WzkfokhVrLcPvfspdkWXmCF90lmTD%2FcGpFtrpijWAKJpqxiQx3CnOo3%2F41%2BttiicNFj9yEYl4AKVvKr%2BG9vuPmDJHKsr4xLOxxx6zNMxeriLsxZjgppjclrSMApvTw4jfLpclZb80a8AUw0g4JyHzwcI5wi8oDe9G4%2FspZuoM1OvFSMfKznI79V%2FTtrKDss5c6cWLVmJzVCnRRKOOvm%2FhnlODWpb782h%2FyQPCWn%2B0Eg7bfScuITVqZyNoLzSCn6Nq4JAy4u6mz29Db1dYxVJmWAnivKKtlaTr7r2PbIsp7uVJdwKuZPZTcPLu9wTM8csuTp5DDKjde%2BBjqkAVEMaTs%2FPafxwgU247nKUr%2FQi0Vt631hMcuR3D3EyMo7crS9GaZx58B7y%2BA6X15GqIAsf5SG0jqQZ4eDquFYf0NpQGfZv3sNSQvsb8opg%2FQBSy6zVIr8Y8esnVWdcXdeN1KjSoyE%2F%2Bb6u5kYL2zaTUW44mQ3A7mW1XOgnzXwuu2Xhos9EFzviUx3Z2b6CTjAHVqKxzmBuIOT5q0wqPOenPY25XwZ&X-Amz-Signature=50d5f0153b48a8e0dc90e674df2a6a4b705fbcffcc542c5b3ecc6baaf503c643&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWINZGVD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGkMKrRxqOKLVJCCEH49u7vWrOlePMObTTy682Ik9fAIhAMKFKDoTw0sTNAOKAv%2BQb%2BxN2K%2BPDOwCb2pTvrQaZ0d5Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywLuANPIeSHhngUYEq3APcZ6b9G3EIybbXTChhaNn9V6xq8ZniXdqyIN7uGigU5530LPyWz21M9SCu7e4Y9Klv57uRIZ%2FFsJr7k%2BefvHWVlQY18bVPn6heC%2B7QWkwxAZRAw71T2GVd2AqJtz0pNoJcyt8IJTfbIJVPWSQ0I%2FDcT8SvJWoRyZBJpsWw%2BlOkY3boUz4jA7oqY6aX199pvtFtXEQDYItKLBNW98gaCjdF2Nun%2FSvm5dRPER1E41lYoxq%2BX7xzQ7j08oZobwb9KeJnthJeTfd%2BSopw0pkUkN6ofqMVBRgimqzsUJvGxRa2fS%2FTci283DZ40WzkfokhVrLcPvfspdkWXmCF90lmTD%2FcGpFtrpijWAKJpqxiQx3CnOo3%2F41%2BttiicNFj9yEYl4AKVvKr%2BG9vuPmDJHKsr4xLOxxx6zNMxeriLsxZjgppjclrSMApvTw4jfLpclZb80a8AUw0g4JyHzwcI5wi8oDe9G4%2FspZuoM1OvFSMfKznI79V%2FTtrKDss5c6cWLVmJzVCnRRKOOvm%2FhnlODWpb782h%2FyQPCWn%2B0Eg7bfScuITVqZyNoLzSCn6Nq4JAy4u6mz29Db1dYxVJmWAnivKKtlaTr7r2PbIsp7uVJdwKuZPZTcPLu9wTM8csuTp5DDKjde%2BBjqkAVEMaTs%2FPafxwgU247nKUr%2FQi0Vt631hMcuR3D3EyMo7crS9GaZx58B7y%2BA6X15GqIAsf5SG0jqQZ4eDquFYf0NpQGfZv3sNSQvsb8opg%2FQBSy6zVIr8Y8esnVWdcXdeN1KjSoyE%2F%2Bb6u5kYL2zaTUW44mQ3A7mW1XOgnzXwuu2Xhos9EFzviUx3Z2b6CTjAHVqKxzmBuIOT5q0wqPOenPY25XwZ&X-Amz-Signature=a604a7b46b0c76b3940448ee22fc022b43029cf92b92da25270ffc9330ac7d26&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWINZGVD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGkMKrRxqOKLVJCCEH49u7vWrOlePMObTTy682Ik9fAIhAMKFKDoTw0sTNAOKAv%2BQb%2BxN2K%2BPDOwCb2pTvrQaZ0d5Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywLuANPIeSHhngUYEq3APcZ6b9G3EIybbXTChhaNn9V6xq8ZniXdqyIN7uGigU5530LPyWz21M9SCu7e4Y9Klv57uRIZ%2FFsJr7k%2BefvHWVlQY18bVPn6heC%2B7QWkwxAZRAw71T2GVd2AqJtz0pNoJcyt8IJTfbIJVPWSQ0I%2FDcT8SvJWoRyZBJpsWw%2BlOkY3boUz4jA7oqY6aX199pvtFtXEQDYItKLBNW98gaCjdF2Nun%2FSvm5dRPER1E41lYoxq%2BX7xzQ7j08oZobwb9KeJnthJeTfd%2BSopw0pkUkN6ofqMVBRgimqzsUJvGxRa2fS%2FTci283DZ40WzkfokhVrLcPvfspdkWXmCF90lmTD%2FcGpFtrpijWAKJpqxiQx3CnOo3%2F41%2BttiicNFj9yEYl4AKVvKr%2BG9vuPmDJHKsr4xLOxxx6zNMxeriLsxZjgppjclrSMApvTw4jfLpclZb80a8AUw0g4JyHzwcI5wi8oDe9G4%2FspZuoM1OvFSMfKznI79V%2FTtrKDss5c6cWLVmJzVCnRRKOOvm%2FhnlODWpb782h%2FyQPCWn%2B0Eg7bfScuITVqZyNoLzSCn6Nq4JAy4u6mz29Db1dYxVJmWAnivKKtlaTr7r2PbIsp7uVJdwKuZPZTcPLu9wTM8csuTp5DDKjde%2BBjqkAVEMaTs%2FPafxwgU247nKUr%2FQi0Vt631hMcuR3D3EyMo7crS9GaZx58B7y%2BA6X15GqIAsf5SG0jqQZ4eDquFYf0NpQGfZv3sNSQvsb8opg%2FQBSy6zVIr8Y8esnVWdcXdeN1KjSoyE%2F%2Bb6u5kYL2zaTUW44mQ3A7mW1XOgnzXwuu2Xhos9EFzviUx3Z2b6CTjAHVqKxzmBuIOT5q0wqPOenPY25XwZ&X-Amz-Signature=29ebd1e3a1d721644fec6339da3cbbc281fbf65279b069f5b2d29318190d2b58&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWINZGVD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGkMKrRxqOKLVJCCEH49u7vWrOlePMObTTy682Ik9fAIhAMKFKDoTw0sTNAOKAv%2BQb%2BxN2K%2BPDOwCb2pTvrQaZ0d5Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywLuANPIeSHhngUYEq3APcZ6b9G3EIybbXTChhaNn9V6xq8ZniXdqyIN7uGigU5530LPyWz21M9SCu7e4Y9Klv57uRIZ%2FFsJr7k%2BefvHWVlQY18bVPn6heC%2B7QWkwxAZRAw71T2GVd2AqJtz0pNoJcyt8IJTfbIJVPWSQ0I%2FDcT8SvJWoRyZBJpsWw%2BlOkY3boUz4jA7oqY6aX199pvtFtXEQDYItKLBNW98gaCjdF2Nun%2FSvm5dRPER1E41lYoxq%2BX7xzQ7j08oZobwb9KeJnthJeTfd%2BSopw0pkUkN6ofqMVBRgimqzsUJvGxRa2fS%2FTci283DZ40WzkfokhVrLcPvfspdkWXmCF90lmTD%2FcGpFtrpijWAKJpqxiQx3CnOo3%2F41%2BttiicNFj9yEYl4AKVvKr%2BG9vuPmDJHKsr4xLOxxx6zNMxeriLsxZjgppjclrSMApvTw4jfLpclZb80a8AUw0g4JyHzwcI5wi8oDe9G4%2FspZuoM1OvFSMfKznI79V%2FTtrKDss5c6cWLVmJzVCnRRKOOvm%2FhnlODWpb782h%2FyQPCWn%2B0Eg7bfScuITVqZyNoLzSCn6Nq4JAy4u6mz29Db1dYxVJmWAnivKKtlaTr7r2PbIsp7uVJdwKuZPZTcPLu9wTM8csuTp5DDKjde%2BBjqkAVEMaTs%2FPafxwgU247nKUr%2FQi0Vt631hMcuR3D3EyMo7crS9GaZx58B7y%2BA6X15GqIAsf5SG0jqQZ4eDquFYf0NpQGfZv3sNSQvsb8opg%2FQBSy6zVIr8Y8esnVWdcXdeN1KjSoyE%2F%2Bb6u5kYL2zaTUW44mQ3A7mW1XOgnzXwuu2Xhos9EFzviUx3Z2b6CTjAHVqKxzmBuIOT5q0wqPOenPY25XwZ&X-Amz-Signature=1badac814925f7f84b3406622a821bdb7c120600b6a1d7637d7c76e554c659df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWINZGVD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGkMKrRxqOKLVJCCEH49u7vWrOlePMObTTy682Ik9fAIhAMKFKDoTw0sTNAOKAv%2BQb%2BxN2K%2BPDOwCb2pTvrQaZ0d5Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywLuANPIeSHhngUYEq3APcZ6b9G3EIybbXTChhaNn9V6xq8ZniXdqyIN7uGigU5530LPyWz21M9SCu7e4Y9Klv57uRIZ%2FFsJr7k%2BefvHWVlQY18bVPn6heC%2B7QWkwxAZRAw71T2GVd2AqJtz0pNoJcyt8IJTfbIJVPWSQ0I%2FDcT8SvJWoRyZBJpsWw%2BlOkY3boUz4jA7oqY6aX199pvtFtXEQDYItKLBNW98gaCjdF2Nun%2FSvm5dRPER1E41lYoxq%2BX7xzQ7j08oZobwb9KeJnthJeTfd%2BSopw0pkUkN6ofqMVBRgimqzsUJvGxRa2fS%2FTci283DZ40WzkfokhVrLcPvfspdkWXmCF90lmTD%2FcGpFtrpijWAKJpqxiQx3CnOo3%2F41%2BttiicNFj9yEYl4AKVvKr%2BG9vuPmDJHKsr4xLOxxx6zNMxeriLsxZjgppjclrSMApvTw4jfLpclZb80a8AUw0g4JyHzwcI5wi8oDe9G4%2FspZuoM1OvFSMfKznI79V%2FTtrKDss5c6cWLVmJzVCnRRKOOvm%2FhnlODWpb782h%2FyQPCWn%2B0Eg7bfScuITVqZyNoLzSCn6Nq4JAy4u6mz29Db1dYxVJmWAnivKKtlaTr7r2PbIsp7uVJdwKuZPZTcPLu9wTM8csuTp5DDKjde%2BBjqkAVEMaTs%2FPafxwgU247nKUr%2FQi0Vt631hMcuR3D3EyMo7crS9GaZx58B7y%2BA6X15GqIAsf5SG0jqQZ4eDquFYf0NpQGfZv3sNSQvsb8opg%2FQBSy6zVIr8Y8esnVWdcXdeN1KjSoyE%2F%2Bb6u5kYL2zaTUW44mQ3A7mW1XOgnzXwuu2Xhos9EFzviUx3Z2b6CTjAHVqKxzmBuIOT5q0wqPOenPY25XwZ&X-Amz-Signature=eff0b5e3e12b449f2217a3c29fe30bc12a02e75a2be055aa21b4a27b4524fda6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWINZGVD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGkMKrRxqOKLVJCCEH49u7vWrOlePMObTTy682Ik9fAIhAMKFKDoTw0sTNAOKAv%2BQb%2BxN2K%2BPDOwCb2pTvrQaZ0d5Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywLuANPIeSHhngUYEq3APcZ6b9G3EIybbXTChhaNn9V6xq8ZniXdqyIN7uGigU5530LPyWz21M9SCu7e4Y9Klv57uRIZ%2FFsJr7k%2BefvHWVlQY18bVPn6heC%2B7QWkwxAZRAw71T2GVd2AqJtz0pNoJcyt8IJTfbIJVPWSQ0I%2FDcT8SvJWoRyZBJpsWw%2BlOkY3boUz4jA7oqY6aX199pvtFtXEQDYItKLBNW98gaCjdF2Nun%2FSvm5dRPER1E41lYoxq%2BX7xzQ7j08oZobwb9KeJnthJeTfd%2BSopw0pkUkN6ofqMVBRgimqzsUJvGxRa2fS%2FTci283DZ40WzkfokhVrLcPvfspdkWXmCF90lmTD%2FcGpFtrpijWAKJpqxiQx3CnOo3%2F41%2BttiicNFj9yEYl4AKVvKr%2BG9vuPmDJHKsr4xLOxxx6zNMxeriLsxZjgppjclrSMApvTw4jfLpclZb80a8AUw0g4JyHzwcI5wi8oDe9G4%2FspZuoM1OvFSMfKznI79V%2FTtrKDss5c6cWLVmJzVCnRRKOOvm%2FhnlODWpb782h%2FyQPCWn%2B0Eg7bfScuITVqZyNoLzSCn6Nq4JAy4u6mz29Db1dYxVJmWAnivKKtlaTr7r2PbIsp7uVJdwKuZPZTcPLu9wTM8csuTp5DDKjde%2BBjqkAVEMaTs%2FPafxwgU247nKUr%2FQi0Vt631hMcuR3D3EyMo7crS9GaZx58B7y%2BA6X15GqIAsf5SG0jqQZ4eDquFYf0NpQGfZv3sNSQvsb8opg%2FQBSy6zVIr8Y8esnVWdcXdeN1KjSoyE%2F%2Bb6u5kYL2zaTUW44mQ3A7mW1XOgnzXwuu2Xhos9EFzviUx3Z2b6CTjAHVqKxzmBuIOT5q0wqPOenPY25XwZ&X-Amz-Signature=d89ea1dfbf6979c89865d52c008e483c16d185098c5e90e92424b37490e6d1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWINZGVD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGkMKrRxqOKLVJCCEH49u7vWrOlePMObTTy682Ik9fAIhAMKFKDoTw0sTNAOKAv%2BQb%2BxN2K%2BPDOwCb2pTvrQaZ0d5Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywLuANPIeSHhngUYEq3APcZ6b9G3EIybbXTChhaNn9V6xq8ZniXdqyIN7uGigU5530LPyWz21M9SCu7e4Y9Klv57uRIZ%2FFsJr7k%2BefvHWVlQY18bVPn6heC%2B7QWkwxAZRAw71T2GVd2AqJtz0pNoJcyt8IJTfbIJVPWSQ0I%2FDcT8SvJWoRyZBJpsWw%2BlOkY3boUz4jA7oqY6aX199pvtFtXEQDYItKLBNW98gaCjdF2Nun%2FSvm5dRPER1E41lYoxq%2BX7xzQ7j08oZobwb9KeJnthJeTfd%2BSopw0pkUkN6ofqMVBRgimqzsUJvGxRa2fS%2FTci283DZ40WzkfokhVrLcPvfspdkWXmCF90lmTD%2FcGpFtrpijWAKJpqxiQx3CnOo3%2F41%2BttiicNFj9yEYl4AKVvKr%2BG9vuPmDJHKsr4xLOxxx6zNMxeriLsxZjgppjclrSMApvTw4jfLpclZb80a8AUw0g4JyHzwcI5wi8oDe9G4%2FspZuoM1OvFSMfKznI79V%2FTtrKDss5c6cWLVmJzVCnRRKOOvm%2FhnlODWpb782h%2FyQPCWn%2B0Eg7bfScuITVqZyNoLzSCn6Nq4JAy4u6mz29Db1dYxVJmWAnivKKtlaTr7r2PbIsp7uVJdwKuZPZTcPLu9wTM8csuTp5DDKjde%2BBjqkAVEMaTs%2FPafxwgU247nKUr%2FQi0Vt631hMcuR3D3EyMo7crS9GaZx58B7y%2BA6X15GqIAsf5SG0jqQZ4eDquFYf0NpQGfZv3sNSQvsb8opg%2FQBSy6zVIr8Y8esnVWdcXdeN1KjSoyE%2F%2Bb6u5kYL2zaTUW44mQ3A7mW1XOgnzXwuu2Xhos9EFzviUx3Z2b6CTjAHVqKxzmBuIOT5q0wqPOenPY25XwZ&X-Amz-Signature=12335dd48b8b9e33fe70d071a14faffa555049fea2498606bbc33a6434109920&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWINZGVD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDGkMKrRxqOKLVJCCEH49u7vWrOlePMObTTy682Ik9fAIhAMKFKDoTw0sTNAOKAv%2BQb%2BxN2K%2BPDOwCb2pTvrQaZ0d5Kv8DCBsQABoMNjM3NDIzMTgzODA1IgywLuANPIeSHhngUYEq3APcZ6b9G3EIybbXTChhaNn9V6xq8ZniXdqyIN7uGigU5530LPyWz21M9SCu7e4Y9Klv57uRIZ%2FFsJr7k%2BefvHWVlQY18bVPn6heC%2B7QWkwxAZRAw71T2GVd2AqJtz0pNoJcyt8IJTfbIJVPWSQ0I%2FDcT8SvJWoRyZBJpsWw%2BlOkY3boUz4jA7oqY6aX199pvtFtXEQDYItKLBNW98gaCjdF2Nun%2FSvm5dRPER1E41lYoxq%2BX7xzQ7j08oZobwb9KeJnthJeTfd%2BSopw0pkUkN6ofqMVBRgimqzsUJvGxRa2fS%2FTci283DZ40WzkfokhVrLcPvfspdkWXmCF90lmTD%2FcGpFtrpijWAKJpqxiQx3CnOo3%2F41%2BttiicNFj9yEYl4AKVvKr%2BG9vuPmDJHKsr4xLOxxx6zNMxeriLsxZjgppjclrSMApvTw4jfLpclZb80a8AUw0g4JyHzwcI5wi8oDe9G4%2FspZuoM1OvFSMfKznI79V%2FTtrKDss5c6cWLVmJzVCnRRKOOvm%2FhnlODWpb782h%2FyQPCWn%2B0Eg7bfScuITVqZyNoLzSCn6Nq4JAy4u6mz29Db1dYxVJmWAnivKKtlaTr7r2PbIsp7uVJdwKuZPZTcPLu9wTM8csuTp5DDKjde%2BBjqkAVEMaTs%2FPafxwgU247nKUr%2FQi0Vt631hMcuR3D3EyMo7crS9GaZx58B7y%2BA6X15GqIAsf5SG0jqQZ4eDquFYf0NpQGfZv3sNSQvsb8opg%2FQBSy6zVIr8Y8esnVWdcXdeN1KjSoyE%2F%2Bb6u5kYL2zaTUW44mQ3A7mW1XOgnzXwuu2Xhos9EFzviUx3Z2b6CTjAHVqKxzmBuIOT5q0wqPOenPY25XwZ&X-Amz-Signature=0e39e6e6d7ecd3322c58bd9d0d0771a2cb7f8d10d746e6f53ce53ccdefea6b18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

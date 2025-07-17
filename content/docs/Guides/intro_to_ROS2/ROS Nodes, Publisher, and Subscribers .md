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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBGLFSS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGYsa6G%2Flvkny%2FDC3KjtwGBJ%2FStSRN8R%2FCSUrzM4y%2FZ1AiEAi8ECgveS2WJaYDuttFTEVkp%2B5IjJi2d8uq85q4HLyv4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKS3FS6QzcXVBuKrHyrcAwvTgvSG%2BAlSNZQGO15Dtqgre1vjoQg2iM7temxUrAfaePEW2l8CKRLE4bJGQXrklZX3HeEC%2FPwbUesxAnrP%2FhlsmqYGGzPBonCoOlBAKKT45NqNEU7pAQAvMve8jqegjvrGj%2BxjarXnLYiP263Y9pZXY8BCkVaWKDqQFAOmQ6sjg9%2F0VWE5WIQQpytCK3T6OUTu5RrSYymkA7YT2RpnsB19CVlCTZz00bR0HXIuMcz9rde7GsrSzyD5Ay90E3F5ku86FgsQt25buwSjYJgHCk%2FeQsl8iqWhgANkCr4kgnFVC16JGTgU2nu5Fz%2FDlBQK4nld8PAzoqfrEXDas36j8eyxCzfDPANjF2eLhUy5s65Utktd95Xxu7K%2BGXB8jgAqWX52hzv4YGq9KPcEzQIpDaKpFVGxEvjdr%2FjGcHL9fk7od07VcQ3Ky4YlIftAwSy9D6brAmcVkANzymPnl3QlLKjnzjZqDZG11Ah4QPly%2FaXK%2FdQA8szMcXOlvL%2FMW59zagdX1hTOpRIX78sNxgGCYywbOZdvbBXHzXL9Q0M5ZsPpD%2Fr%2FVhbJxpED1CsJF0%2Bh6PqxHtysTOuXnCzHxwNS9nSFKwFoMJ%2BqZypVar6V9LojH%2BO9p1RLOnf5U8B6MPq%2F4sMGOqUBD3AcwVg5VN0BdOi1TpA7qiKw3NdNgQeUjskQdu2hF6wWV%2FxiFrRQouwNgd4%2B2sBVj2hfc1CNMYGD0CQPtzXi3Bug7TO1mif3IEl8VTqC3yaNbAb8AQm6ssZsFmTyXCfcXM5w6xj8SSZJXyIXzvjq6WpAftFrbtOjxQi7HccCdxKxsJPUh7HwAJS%2F5YjfqXcxR%2BjeUm4MDNpIzmM%2FJhrhx0kCe6yx&X-Amz-Signature=4fd6426c86f1fb28f0354b11d9e628b1cfe93e4402d26d9576ec0e534cde2e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBGLFSS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGYsa6G%2Flvkny%2FDC3KjtwGBJ%2FStSRN8R%2FCSUrzM4y%2FZ1AiEAi8ECgveS2WJaYDuttFTEVkp%2B5IjJi2d8uq85q4HLyv4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKS3FS6QzcXVBuKrHyrcAwvTgvSG%2BAlSNZQGO15Dtqgre1vjoQg2iM7temxUrAfaePEW2l8CKRLE4bJGQXrklZX3HeEC%2FPwbUesxAnrP%2FhlsmqYGGzPBonCoOlBAKKT45NqNEU7pAQAvMve8jqegjvrGj%2BxjarXnLYiP263Y9pZXY8BCkVaWKDqQFAOmQ6sjg9%2F0VWE5WIQQpytCK3T6OUTu5RrSYymkA7YT2RpnsB19CVlCTZz00bR0HXIuMcz9rde7GsrSzyD5Ay90E3F5ku86FgsQt25buwSjYJgHCk%2FeQsl8iqWhgANkCr4kgnFVC16JGTgU2nu5Fz%2FDlBQK4nld8PAzoqfrEXDas36j8eyxCzfDPANjF2eLhUy5s65Utktd95Xxu7K%2BGXB8jgAqWX52hzv4YGq9KPcEzQIpDaKpFVGxEvjdr%2FjGcHL9fk7od07VcQ3Ky4YlIftAwSy9D6brAmcVkANzymPnl3QlLKjnzjZqDZG11Ah4QPly%2FaXK%2FdQA8szMcXOlvL%2FMW59zagdX1hTOpRIX78sNxgGCYywbOZdvbBXHzXL9Q0M5ZsPpD%2Fr%2FVhbJxpED1CsJF0%2Bh6PqxHtysTOuXnCzHxwNS9nSFKwFoMJ%2BqZypVar6V9LojH%2BO9p1RLOnf5U8B6MPq%2F4sMGOqUBD3AcwVg5VN0BdOi1TpA7qiKw3NdNgQeUjskQdu2hF6wWV%2FxiFrRQouwNgd4%2B2sBVj2hfc1CNMYGD0CQPtzXi3Bug7TO1mif3IEl8VTqC3yaNbAb8AQm6ssZsFmTyXCfcXM5w6xj8SSZJXyIXzvjq6WpAftFrbtOjxQi7HccCdxKxsJPUh7HwAJS%2F5YjfqXcxR%2BjeUm4MDNpIzmM%2FJhrhx0kCe6yx&X-Amz-Signature=748e966296fd7b736b4ef420d3e160bfb4d32297cc6a8a75fb6db56d286d7156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBGLFSS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGYsa6G%2Flvkny%2FDC3KjtwGBJ%2FStSRN8R%2FCSUrzM4y%2FZ1AiEAi8ECgveS2WJaYDuttFTEVkp%2B5IjJi2d8uq85q4HLyv4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKS3FS6QzcXVBuKrHyrcAwvTgvSG%2BAlSNZQGO15Dtqgre1vjoQg2iM7temxUrAfaePEW2l8CKRLE4bJGQXrklZX3HeEC%2FPwbUesxAnrP%2FhlsmqYGGzPBonCoOlBAKKT45NqNEU7pAQAvMve8jqegjvrGj%2BxjarXnLYiP263Y9pZXY8BCkVaWKDqQFAOmQ6sjg9%2F0VWE5WIQQpytCK3T6OUTu5RrSYymkA7YT2RpnsB19CVlCTZz00bR0HXIuMcz9rde7GsrSzyD5Ay90E3F5ku86FgsQt25buwSjYJgHCk%2FeQsl8iqWhgANkCr4kgnFVC16JGTgU2nu5Fz%2FDlBQK4nld8PAzoqfrEXDas36j8eyxCzfDPANjF2eLhUy5s65Utktd95Xxu7K%2BGXB8jgAqWX52hzv4YGq9KPcEzQIpDaKpFVGxEvjdr%2FjGcHL9fk7od07VcQ3Ky4YlIftAwSy9D6brAmcVkANzymPnl3QlLKjnzjZqDZG11Ah4QPly%2FaXK%2FdQA8szMcXOlvL%2FMW59zagdX1hTOpRIX78sNxgGCYywbOZdvbBXHzXL9Q0M5ZsPpD%2Fr%2FVhbJxpED1CsJF0%2Bh6PqxHtysTOuXnCzHxwNS9nSFKwFoMJ%2BqZypVar6V9LojH%2BO9p1RLOnf5U8B6MPq%2F4sMGOqUBD3AcwVg5VN0BdOi1TpA7qiKw3NdNgQeUjskQdu2hF6wWV%2FxiFrRQouwNgd4%2B2sBVj2hfc1CNMYGD0CQPtzXi3Bug7TO1mif3IEl8VTqC3yaNbAb8AQm6ssZsFmTyXCfcXM5w6xj8SSZJXyIXzvjq6WpAftFrbtOjxQi7HccCdxKxsJPUh7HwAJS%2F5YjfqXcxR%2BjeUm4MDNpIzmM%2FJhrhx0kCe6yx&X-Amz-Signature=16e69164ae97b624b11282d2001efadb81cc68c0de6fb6848315c2e65d8f5ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBGLFSS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGYsa6G%2Flvkny%2FDC3KjtwGBJ%2FStSRN8R%2FCSUrzM4y%2FZ1AiEAi8ECgveS2WJaYDuttFTEVkp%2B5IjJi2d8uq85q4HLyv4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKS3FS6QzcXVBuKrHyrcAwvTgvSG%2BAlSNZQGO15Dtqgre1vjoQg2iM7temxUrAfaePEW2l8CKRLE4bJGQXrklZX3HeEC%2FPwbUesxAnrP%2FhlsmqYGGzPBonCoOlBAKKT45NqNEU7pAQAvMve8jqegjvrGj%2BxjarXnLYiP263Y9pZXY8BCkVaWKDqQFAOmQ6sjg9%2F0VWE5WIQQpytCK3T6OUTu5RrSYymkA7YT2RpnsB19CVlCTZz00bR0HXIuMcz9rde7GsrSzyD5Ay90E3F5ku86FgsQt25buwSjYJgHCk%2FeQsl8iqWhgANkCr4kgnFVC16JGTgU2nu5Fz%2FDlBQK4nld8PAzoqfrEXDas36j8eyxCzfDPANjF2eLhUy5s65Utktd95Xxu7K%2BGXB8jgAqWX52hzv4YGq9KPcEzQIpDaKpFVGxEvjdr%2FjGcHL9fk7od07VcQ3Ky4YlIftAwSy9D6brAmcVkANzymPnl3QlLKjnzjZqDZG11Ah4QPly%2FaXK%2FdQA8szMcXOlvL%2FMW59zagdX1hTOpRIX78sNxgGCYywbOZdvbBXHzXL9Q0M5ZsPpD%2Fr%2FVhbJxpED1CsJF0%2Bh6PqxHtysTOuXnCzHxwNS9nSFKwFoMJ%2BqZypVar6V9LojH%2BO9p1RLOnf5U8B6MPq%2F4sMGOqUBD3AcwVg5VN0BdOi1TpA7qiKw3NdNgQeUjskQdu2hF6wWV%2FxiFrRQouwNgd4%2B2sBVj2hfc1CNMYGD0CQPtzXi3Bug7TO1mif3IEl8VTqC3yaNbAb8AQm6ssZsFmTyXCfcXM5w6xj8SSZJXyIXzvjq6WpAftFrbtOjxQi7HccCdxKxsJPUh7HwAJS%2F5YjfqXcxR%2BjeUm4MDNpIzmM%2FJhrhx0kCe6yx&X-Amz-Signature=4f418ae94f203adbc9584759143954507132e449e02666f5794d10ba48395007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBGLFSS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGYsa6G%2Flvkny%2FDC3KjtwGBJ%2FStSRN8R%2FCSUrzM4y%2FZ1AiEAi8ECgveS2WJaYDuttFTEVkp%2B5IjJi2d8uq85q4HLyv4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKS3FS6QzcXVBuKrHyrcAwvTgvSG%2BAlSNZQGO15Dtqgre1vjoQg2iM7temxUrAfaePEW2l8CKRLE4bJGQXrklZX3HeEC%2FPwbUesxAnrP%2FhlsmqYGGzPBonCoOlBAKKT45NqNEU7pAQAvMve8jqegjvrGj%2BxjarXnLYiP263Y9pZXY8BCkVaWKDqQFAOmQ6sjg9%2F0VWE5WIQQpytCK3T6OUTu5RrSYymkA7YT2RpnsB19CVlCTZz00bR0HXIuMcz9rde7GsrSzyD5Ay90E3F5ku86FgsQt25buwSjYJgHCk%2FeQsl8iqWhgANkCr4kgnFVC16JGTgU2nu5Fz%2FDlBQK4nld8PAzoqfrEXDas36j8eyxCzfDPANjF2eLhUy5s65Utktd95Xxu7K%2BGXB8jgAqWX52hzv4YGq9KPcEzQIpDaKpFVGxEvjdr%2FjGcHL9fk7od07VcQ3Ky4YlIftAwSy9D6brAmcVkANzymPnl3QlLKjnzjZqDZG11Ah4QPly%2FaXK%2FdQA8szMcXOlvL%2FMW59zagdX1hTOpRIX78sNxgGCYywbOZdvbBXHzXL9Q0M5ZsPpD%2Fr%2FVhbJxpED1CsJF0%2Bh6PqxHtysTOuXnCzHxwNS9nSFKwFoMJ%2BqZypVar6V9LojH%2BO9p1RLOnf5U8B6MPq%2F4sMGOqUBD3AcwVg5VN0BdOi1TpA7qiKw3NdNgQeUjskQdu2hF6wWV%2FxiFrRQouwNgd4%2B2sBVj2hfc1CNMYGD0CQPtzXi3Bug7TO1mif3IEl8VTqC3yaNbAb8AQm6ssZsFmTyXCfcXM5w6xj8SSZJXyIXzvjq6WpAftFrbtOjxQi7HccCdxKxsJPUh7HwAJS%2F5YjfqXcxR%2BjeUm4MDNpIzmM%2FJhrhx0kCe6yx&X-Amz-Signature=2079ba95d5a603443e5074b3640a1eb7b050e92297a9bc9dadb438a79f468a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBGLFSS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGYsa6G%2Flvkny%2FDC3KjtwGBJ%2FStSRN8R%2FCSUrzM4y%2FZ1AiEAi8ECgveS2WJaYDuttFTEVkp%2B5IjJi2d8uq85q4HLyv4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKS3FS6QzcXVBuKrHyrcAwvTgvSG%2BAlSNZQGO15Dtqgre1vjoQg2iM7temxUrAfaePEW2l8CKRLE4bJGQXrklZX3HeEC%2FPwbUesxAnrP%2FhlsmqYGGzPBonCoOlBAKKT45NqNEU7pAQAvMve8jqegjvrGj%2BxjarXnLYiP263Y9pZXY8BCkVaWKDqQFAOmQ6sjg9%2F0VWE5WIQQpytCK3T6OUTu5RrSYymkA7YT2RpnsB19CVlCTZz00bR0HXIuMcz9rde7GsrSzyD5Ay90E3F5ku86FgsQt25buwSjYJgHCk%2FeQsl8iqWhgANkCr4kgnFVC16JGTgU2nu5Fz%2FDlBQK4nld8PAzoqfrEXDas36j8eyxCzfDPANjF2eLhUy5s65Utktd95Xxu7K%2BGXB8jgAqWX52hzv4YGq9KPcEzQIpDaKpFVGxEvjdr%2FjGcHL9fk7od07VcQ3Ky4YlIftAwSy9D6brAmcVkANzymPnl3QlLKjnzjZqDZG11Ah4QPly%2FaXK%2FdQA8szMcXOlvL%2FMW59zagdX1hTOpRIX78sNxgGCYywbOZdvbBXHzXL9Q0M5ZsPpD%2Fr%2FVhbJxpED1CsJF0%2Bh6PqxHtysTOuXnCzHxwNS9nSFKwFoMJ%2BqZypVar6V9LojH%2BO9p1RLOnf5U8B6MPq%2F4sMGOqUBD3AcwVg5VN0BdOi1TpA7qiKw3NdNgQeUjskQdu2hF6wWV%2FxiFrRQouwNgd4%2B2sBVj2hfc1CNMYGD0CQPtzXi3Bug7TO1mif3IEl8VTqC3yaNbAb8AQm6ssZsFmTyXCfcXM5w6xj8SSZJXyIXzvjq6WpAftFrbtOjxQi7HccCdxKxsJPUh7HwAJS%2F5YjfqXcxR%2BjeUm4MDNpIzmM%2FJhrhx0kCe6yx&X-Amz-Signature=3bdf891006b13a531776e970df947f631f0f3065430319d81d3415dd1fe2d014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBGLFSS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGYsa6G%2Flvkny%2FDC3KjtwGBJ%2FStSRN8R%2FCSUrzM4y%2FZ1AiEAi8ECgveS2WJaYDuttFTEVkp%2B5IjJi2d8uq85q4HLyv4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKS3FS6QzcXVBuKrHyrcAwvTgvSG%2BAlSNZQGO15Dtqgre1vjoQg2iM7temxUrAfaePEW2l8CKRLE4bJGQXrklZX3HeEC%2FPwbUesxAnrP%2FhlsmqYGGzPBonCoOlBAKKT45NqNEU7pAQAvMve8jqegjvrGj%2BxjarXnLYiP263Y9pZXY8BCkVaWKDqQFAOmQ6sjg9%2F0VWE5WIQQpytCK3T6OUTu5RrSYymkA7YT2RpnsB19CVlCTZz00bR0HXIuMcz9rde7GsrSzyD5Ay90E3F5ku86FgsQt25buwSjYJgHCk%2FeQsl8iqWhgANkCr4kgnFVC16JGTgU2nu5Fz%2FDlBQK4nld8PAzoqfrEXDas36j8eyxCzfDPANjF2eLhUy5s65Utktd95Xxu7K%2BGXB8jgAqWX52hzv4YGq9KPcEzQIpDaKpFVGxEvjdr%2FjGcHL9fk7od07VcQ3Ky4YlIftAwSy9D6brAmcVkANzymPnl3QlLKjnzjZqDZG11Ah4QPly%2FaXK%2FdQA8szMcXOlvL%2FMW59zagdX1hTOpRIX78sNxgGCYywbOZdvbBXHzXL9Q0M5ZsPpD%2Fr%2FVhbJxpED1CsJF0%2Bh6PqxHtysTOuXnCzHxwNS9nSFKwFoMJ%2BqZypVar6V9LojH%2BO9p1RLOnf5U8B6MPq%2F4sMGOqUBD3AcwVg5VN0BdOi1TpA7qiKw3NdNgQeUjskQdu2hF6wWV%2FxiFrRQouwNgd4%2B2sBVj2hfc1CNMYGD0CQPtzXi3Bug7TO1mif3IEl8VTqC3yaNbAb8AQm6ssZsFmTyXCfcXM5w6xj8SSZJXyIXzvjq6WpAftFrbtOjxQi7HccCdxKxsJPUh7HwAJS%2F5YjfqXcxR%2BjeUm4MDNpIzmM%2FJhrhx0kCe6yx&X-Amz-Signature=4da22e53f21ccbb03aa5fa4d9cd609a73f9406596b0cdde09e4e0820dc09f13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBGLFSS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGYsa6G%2Flvkny%2FDC3KjtwGBJ%2FStSRN8R%2FCSUrzM4y%2FZ1AiEAi8ECgveS2WJaYDuttFTEVkp%2B5IjJi2d8uq85q4HLyv4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKS3FS6QzcXVBuKrHyrcAwvTgvSG%2BAlSNZQGO15Dtqgre1vjoQg2iM7temxUrAfaePEW2l8CKRLE4bJGQXrklZX3HeEC%2FPwbUesxAnrP%2FhlsmqYGGzPBonCoOlBAKKT45NqNEU7pAQAvMve8jqegjvrGj%2BxjarXnLYiP263Y9pZXY8BCkVaWKDqQFAOmQ6sjg9%2F0VWE5WIQQpytCK3T6OUTu5RrSYymkA7YT2RpnsB19CVlCTZz00bR0HXIuMcz9rde7GsrSzyD5Ay90E3F5ku86FgsQt25buwSjYJgHCk%2FeQsl8iqWhgANkCr4kgnFVC16JGTgU2nu5Fz%2FDlBQK4nld8PAzoqfrEXDas36j8eyxCzfDPANjF2eLhUy5s65Utktd95Xxu7K%2BGXB8jgAqWX52hzv4YGq9KPcEzQIpDaKpFVGxEvjdr%2FjGcHL9fk7od07VcQ3Ky4YlIftAwSy9D6brAmcVkANzymPnl3QlLKjnzjZqDZG11Ah4QPly%2FaXK%2FdQA8szMcXOlvL%2FMW59zagdX1hTOpRIX78sNxgGCYywbOZdvbBXHzXL9Q0M5ZsPpD%2Fr%2FVhbJxpED1CsJF0%2Bh6PqxHtysTOuXnCzHxwNS9nSFKwFoMJ%2BqZypVar6V9LojH%2BO9p1RLOnf5U8B6MPq%2F4sMGOqUBD3AcwVg5VN0BdOi1TpA7qiKw3NdNgQeUjskQdu2hF6wWV%2FxiFrRQouwNgd4%2B2sBVj2hfc1CNMYGD0CQPtzXi3Bug7TO1mif3IEl8VTqC3yaNbAb8AQm6ssZsFmTyXCfcXM5w6xj8SSZJXyIXzvjq6WpAftFrbtOjxQi7HccCdxKxsJPUh7HwAJS%2F5YjfqXcxR%2BjeUm4MDNpIzmM%2FJhrhx0kCe6yx&X-Amz-Signature=1a0958b1e20dbe92af51b6f1a231cfbbcdc79f464cd6b2a35850c5873bee8c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

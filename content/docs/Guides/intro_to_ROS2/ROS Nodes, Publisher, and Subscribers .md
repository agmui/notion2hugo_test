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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMV5C4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCID60yXFWGEKZCMSc%2BtSpf58S%2BqiHM3g0yZq0ka%2FP5gJ4AiEAl143SyVCtUYcda2sFFQbf%2BVChXXL5AIyP%2B6Vh%2B5HvU8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIUmWhrDtPruCzsGircA3Idf6qgKy04lBjDTXENGCTCLc%2B%2BJpo8npESGMbnSt1qdX2WQ5MTN522aqY1w%2BurDhwCxvfLFy%2Bs2PGI6nvJ%2BXFPNJoBNVWML%2BDXBZLWKIB%2F%2BrbK8pZUP%2B%2FiaboDt5g2hjjH1pt0vpv3J4%2FFvPG0eGIoFdDtHtKkFJMF7OvM7LMaFcVGsMYJ0f%2FtQYOOdjm4%2B8kQBzwCTK%2BXjY4%2FgI8EMWcFINFyJUHL34ooWm6NrPyzZKvbjTo%2FaGeC5STLEAt7eK4GNKdLb46CU1mVjqLgwxz%2FbO0EWFsYXhiz0rlKpAsSTr4EiijFrWMcVDyPgvI4sHiOgpnik09prMZCOYTddPPoKC3iq23Z1dOAoQjys2ZXglCwGxKu8ssPu8LAmw%2B3aB%2BcZFhAKIZf8VHcw0klXWbyLnbT7KPMj7Xjz9L9v2FHfwOVARST0CNCAFVkHktWd4Pcb631yML%2FXHS%2B50DwOVNQTjpITXXCo%2Bu821zoyOnsLxr1T5GGTp7Uwh6%2FekoJqj2e6YN4EBdPOMJceaGmPg3NypuZbFnlQbXR%2F8b0yPUj%2FcnQFgCex%2BWFrbjq5DCVL124XUkd5IOSA6KASYamgXEU%2Bv%2Fe2r6Rw4Za%2BfnJ3MWawTKZBpzimL21FyhbMMvdrsIGOqUBwV9iOZtOpyDpO64Ykz1GoFmuqhtPQ3BnDwtgNYNWSLi9zsCrBCQDc4JS5MeHJZ3khRnNLJTlVxgqpnUKraxRj56M%2F0Ka%2F5rGPRFkS%2BGIid3V9IpGQrWAqzJ5Kb7FRDFbp1KFXZSUX4zH6OvdRZjw3%2BTTgBhPKAu8HOOlrQUvmS%2FGZGLtFYGnL7%2BBSIOMzhvrhP67f6yjmXVe%2FiNO07gsnx%2Ft3VPi&X-Amz-Signature=5ec7937180a59f6e4d4721defbe859a2337f3739383fe23c0096c699b3384985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMV5C4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCID60yXFWGEKZCMSc%2BtSpf58S%2BqiHM3g0yZq0ka%2FP5gJ4AiEAl143SyVCtUYcda2sFFQbf%2BVChXXL5AIyP%2B6Vh%2B5HvU8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIUmWhrDtPruCzsGircA3Idf6qgKy04lBjDTXENGCTCLc%2B%2BJpo8npESGMbnSt1qdX2WQ5MTN522aqY1w%2BurDhwCxvfLFy%2Bs2PGI6nvJ%2BXFPNJoBNVWML%2BDXBZLWKIB%2F%2BrbK8pZUP%2B%2FiaboDt5g2hjjH1pt0vpv3J4%2FFvPG0eGIoFdDtHtKkFJMF7OvM7LMaFcVGsMYJ0f%2FtQYOOdjm4%2B8kQBzwCTK%2BXjY4%2FgI8EMWcFINFyJUHL34ooWm6NrPyzZKvbjTo%2FaGeC5STLEAt7eK4GNKdLb46CU1mVjqLgwxz%2FbO0EWFsYXhiz0rlKpAsSTr4EiijFrWMcVDyPgvI4sHiOgpnik09prMZCOYTddPPoKC3iq23Z1dOAoQjys2ZXglCwGxKu8ssPu8LAmw%2B3aB%2BcZFhAKIZf8VHcw0klXWbyLnbT7KPMj7Xjz9L9v2FHfwOVARST0CNCAFVkHktWd4Pcb631yML%2FXHS%2B50DwOVNQTjpITXXCo%2Bu821zoyOnsLxr1T5GGTp7Uwh6%2FekoJqj2e6YN4EBdPOMJceaGmPg3NypuZbFnlQbXR%2F8b0yPUj%2FcnQFgCex%2BWFrbjq5DCVL124XUkd5IOSA6KASYamgXEU%2Bv%2Fe2r6Rw4Za%2BfnJ3MWawTKZBpzimL21FyhbMMvdrsIGOqUBwV9iOZtOpyDpO64Ykz1GoFmuqhtPQ3BnDwtgNYNWSLi9zsCrBCQDc4JS5MeHJZ3khRnNLJTlVxgqpnUKraxRj56M%2F0Ka%2F5rGPRFkS%2BGIid3V9IpGQrWAqzJ5Kb7FRDFbp1KFXZSUX4zH6OvdRZjw3%2BTTgBhPKAu8HOOlrQUvmS%2FGZGLtFYGnL7%2BBSIOMzhvrhP67f6yjmXVe%2FiNO07gsnx%2Ft3VPi&X-Amz-Signature=06200e169d0a5b2db03e1274b115e03d53a0b721bb733c727491560a08d3c8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMV5C4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCID60yXFWGEKZCMSc%2BtSpf58S%2BqiHM3g0yZq0ka%2FP5gJ4AiEAl143SyVCtUYcda2sFFQbf%2BVChXXL5AIyP%2B6Vh%2B5HvU8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIUmWhrDtPruCzsGircA3Idf6qgKy04lBjDTXENGCTCLc%2B%2BJpo8npESGMbnSt1qdX2WQ5MTN522aqY1w%2BurDhwCxvfLFy%2Bs2PGI6nvJ%2BXFPNJoBNVWML%2BDXBZLWKIB%2F%2BrbK8pZUP%2B%2FiaboDt5g2hjjH1pt0vpv3J4%2FFvPG0eGIoFdDtHtKkFJMF7OvM7LMaFcVGsMYJ0f%2FtQYOOdjm4%2B8kQBzwCTK%2BXjY4%2FgI8EMWcFINFyJUHL34ooWm6NrPyzZKvbjTo%2FaGeC5STLEAt7eK4GNKdLb46CU1mVjqLgwxz%2FbO0EWFsYXhiz0rlKpAsSTr4EiijFrWMcVDyPgvI4sHiOgpnik09prMZCOYTddPPoKC3iq23Z1dOAoQjys2ZXglCwGxKu8ssPu8LAmw%2B3aB%2BcZFhAKIZf8VHcw0klXWbyLnbT7KPMj7Xjz9L9v2FHfwOVARST0CNCAFVkHktWd4Pcb631yML%2FXHS%2B50DwOVNQTjpITXXCo%2Bu821zoyOnsLxr1T5GGTp7Uwh6%2FekoJqj2e6YN4EBdPOMJceaGmPg3NypuZbFnlQbXR%2F8b0yPUj%2FcnQFgCex%2BWFrbjq5DCVL124XUkd5IOSA6KASYamgXEU%2Bv%2Fe2r6Rw4Za%2BfnJ3MWawTKZBpzimL21FyhbMMvdrsIGOqUBwV9iOZtOpyDpO64Ykz1GoFmuqhtPQ3BnDwtgNYNWSLi9zsCrBCQDc4JS5MeHJZ3khRnNLJTlVxgqpnUKraxRj56M%2F0Ka%2F5rGPRFkS%2BGIid3V9IpGQrWAqzJ5Kb7FRDFbp1KFXZSUX4zH6OvdRZjw3%2BTTgBhPKAu8HOOlrQUvmS%2FGZGLtFYGnL7%2BBSIOMzhvrhP67f6yjmXVe%2FiNO07gsnx%2Ft3VPi&X-Amz-Signature=f17cb5fd9f822f7732106d350104605d3fbe799e4bee13639ff9099b5883d3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMV5C4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCID60yXFWGEKZCMSc%2BtSpf58S%2BqiHM3g0yZq0ka%2FP5gJ4AiEAl143SyVCtUYcda2sFFQbf%2BVChXXL5AIyP%2B6Vh%2B5HvU8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIUmWhrDtPruCzsGircA3Idf6qgKy04lBjDTXENGCTCLc%2B%2BJpo8npESGMbnSt1qdX2WQ5MTN522aqY1w%2BurDhwCxvfLFy%2Bs2PGI6nvJ%2BXFPNJoBNVWML%2BDXBZLWKIB%2F%2BrbK8pZUP%2B%2FiaboDt5g2hjjH1pt0vpv3J4%2FFvPG0eGIoFdDtHtKkFJMF7OvM7LMaFcVGsMYJ0f%2FtQYOOdjm4%2B8kQBzwCTK%2BXjY4%2FgI8EMWcFINFyJUHL34ooWm6NrPyzZKvbjTo%2FaGeC5STLEAt7eK4GNKdLb46CU1mVjqLgwxz%2FbO0EWFsYXhiz0rlKpAsSTr4EiijFrWMcVDyPgvI4sHiOgpnik09prMZCOYTddPPoKC3iq23Z1dOAoQjys2ZXglCwGxKu8ssPu8LAmw%2B3aB%2BcZFhAKIZf8VHcw0klXWbyLnbT7KPMj7Xjz9L9v2FHfwOVARST0CNCAFVkHktWd4Pcb631yML%2FXHS%2B50DwOVNQTjpITXXCo%2Bu821zoyOnsLxr1T5GGTp7Uwh6%2FekoJqj2e6YN4EBdPOMJceaGmPg3NypuZbFnlQbXR%2F8b0yPUj%2FcnQFgCex%2BWFrbjq5DCVL124XUkd5IOSA6KASYamgXEU%2Bv%2Fe2r6Rw4Za%2BfnJ3MWawTKZBpzimL21FyhbMMvdrsIGOqUBwV9iOZtOpyDpO64Ykz1GoFmuqhtPQ3BnDwtgNYNWSLi9zsCrBCQDc4JS5MeHJZ3khRnNLJTlVxgqpnUKraxRj56M%2F0Ka%2F5rGPRFkS%2BGIid3V9IpGQrWAqzJ5Kb7FRDFbp1KFXZSUX4zH6OvdRZjw3%2BTTgBhPKAu8HOOlrQUvmS%2FGZGLtFYGnL7%2BBSIOMzhvrhP67f6yjmXVe%2FiNO07gsnx%2Ft3VPi&X-Amz-Signature=4c46e1106c94e0658ea4e871d89f2ab29f89c4c20a202d83da2fdd6e2ea3e211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMV5C4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCID60yXFWGEKZCMSc%2BtSpf58S%2BqiHM3g0yZq0ka%2FP5gJ4AiEAl143SyVCtUYcda2sFFQbf%2BVChXXL5AIyP%2B6Vh%2B5HvU8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIUmWhrDtPruCzsGircA3Idf6qgKy04lBjDTXENGCTCLc%2B%2BJpo8npESGMbnSt1qdX2WQ5MTN522aqY1w%2BurDhwCxvfLFy%2Bs2PGI6nvJ%2BXFPNJoBNVWML%2BDXBZLWKIB%2F%2BrbK8pZUP%2B%2FiaboDt5g2hjjH1pt0vpv3J4%2FFvPG0eGIoFdDtHtKkFJMF7OvM7LMaFcVGsMYJ0f%2FtQYOOdjm4%2B8kQBzwCTK%2BXjY4%2FgI8EMWcFINFyJUHL34ooWm6NrPyzZKvbjTo%2FaGeC5STLEAt7eK4GNKdLb46CU1mVjqLgwxz%2FbO0EWFsYXhiz0rlKpAsSTr4EiijFrWMcVDyPgvI4sHiOgpnik09prMZCOYTddPPoKC3iq23Z1dOAoQjys2ZXglCwGxKu8ssPu8LAmw%2B3aB%2BcZFhAKIZf8VHcw0klXWbyLnbT7KPMj7Xjz9L9v2FHfwOVARST0CNCAFVkHktWd4Pcb631yML%2FXHS%2B50DwOVNQTjpITXXCo%2Bu821zoyOnsLxr1T5GGTp7Uwh6%2FekoJqj2e6YN4EBdPOMJceaGmPg3NypuZbFnlQbXR%2F8b0yPUj%2FcnQFgCex%2BWFrbjq5DCVL124XUkd5IOSA6KASYamgXEU%2Bv%2Fe2r6Rw4Za%2BfnJ3MWawTKZBpzimL21FyhbMMvdrsIGOqUBwV9iOZtOpyDpO64Ykz1GoFmuqhtPQ3BnDwtgNYNWSLi9zsCrBCQDc4JS5MeHJZ3khRnNLJTlVxgqpnUKraxRj56M%2F0Ka%2F5rGPRFkS%2BGIid3V9IpGQrWAqzJ5Kb7FRDFbp1KFXZSUX4zH6OvdRZjw3%2BTTgBhPKAu8HOOlrQUvmS%2FGZGLtFYGnL7%2BBSIOMzhvrhP67f6yjmXVe%2FiNO07gsnx%2Ft3VPi&X-Amz-Signature=b886194669452262d5f9b20ee8bd4604a9b66d92f015c3eb754958e3e68b555d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMV5C4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCID60yXFWGEKZCMSc%2BtSpf58S%2BqiHM3g0yZq0ka%2FP5gJ4AiEAl143SyVCtUYcda2sFFQbf%2BVChXXL5AIyP%2B6Vh%2B5HvU8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIUmWhrDtPruCzsGircA3Idf6qgKy04lBjDTXENGCTCLc%2B%2BJpo8npESGMbnSt1qdX2WQ5MTN522aqY1w%2BurDhwCxvfLFy%2Bs2PGI6nvJ%2BXFPNJoBNVWML%2BDXBZLWKIB%2F%2BrbK8pZUP%2B%2FiaboDt5g2hjjH1pt0vpv3J4%2FFvPG0eGIoFdDtHtKkFJMF7OvM7LMaFcVGsMYJ0f%2FtQYOOdjm4%2B8kQBzwCTK%2BXjY4%2FgI8EMWcFINFyJUHL34ooWm6NrPyzZKvbjTo%2FaGeC5STLEAt7eK4GNKdLb46CU1mVjqLgwxz%2FbO0EWFsYXhiz0rlKpAsSTr4EiijFrWMcVDyPgvI4sHiOgpnik09prMZCOYTddPPoKC3iq23Z1dOAoQjys2ZXglCwGxKu8ssPu8LAmw%2B3aB%2BcZFhAKIZf8VHcw0klXWbyLnbT7KPMj7Xjz9L9v2FHfwOVARST0CNCAFVkHktWd4Pcb631yML%2FXHS%2B50DwOVNQTjpITXXCo%2Bu821zoyOnsLxr1T5GGTp7Uwh6%2FekoJqj2e6YN4EBdPOMJceaGmPg3NypuZbFnlQbXR%2F8b0yPUj%2FcnQFgCex%2BWFrbjq5DCVL124XUkd5IOSA6KASYamgXEU%2Bv%2Fe2r6Rw4Za%2BfnJ3MWawTKZBpzimL21FyhbMMvdrsIGOqUBwV9iOZtOpyDpO64Ykz1GoFmuqhtPQ3BnDwtgNYNWSLi9zsCrBCQDc4JS5MeHJZ3khRnNLJTlVxgqpnUKraxRj56M%2F0Ka%2F5rGPRFkS%2BGIid3V9IpGQrWAqzJ5Kb7FRDFbp1KFXZSUX4zH6OvdRZjw3%2BTTgBhPKAu8HOOlrQUvmS%2FGZGLtFYGnL7%2BBSIOMzhvrhP67f6yjmXVe%2FiNO07gsnx%2Ft3VPi&X-Amz-Signature=55d07a1c11c9c3dd740ebe87d4cff6bd327ff11ed9a36d21b5204f0b3083f1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMV5C4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCID60yXFWGEKZCMSc%2BtSpf58S%2BqiHM3g0yZq0ka%2FP5gJ4AiEAl143SyVCtUYcda2sFFQbf%2BVChXXL5AIyP%2B6Vh%2B5HvU8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIUmWhrDtPruCzsGircA3Idf6qgKy04lBjDTXENGCTCLc%2B%2BJpo8npESGMbnSt1qdX2WQ5MTN522aqY1w%2BurDhwCxvfLFy%2Bs2PGI6nvJ%2BXFPNJoBNVWML%2BDXBZLWKIB%2F%2BrbK8pZUP%2B%2FiaboDt5g2hjjH1pt0vpv3J4%2FFvPG0eGIoFdDtHtKkFJMF7OvM7LMaFcVGsMYJ0f%2FtQYOOdjm4%2B8kQBzwCTK%2BXjY4%2FgI8EMWcFINFyJUHL34ooWm6NrPyzZKvbjTo%2FaGeC5STLEAt7eK4GNKdLb46CU1mVjqLgwxz%2FbO0EWFsYXhiz0rlKpAsSTr4EiijFrWMcVDyPgvI4sHiOgpnik09prMZCOYTddPPoKC3iq23Z1dOAoQjys2ZXglCwGxKu8ssPu8LAmw%2B3aB%2BcZFhAKIZf8VHcw0klXWbyLnbT7KPMj7Xjz9L9v2FHfwOVARST0CNCAFVkHktWd4Pcb631yML%2FXHS%2B50DwOVNQTjpITXXCo%2Bu821zoyOnsLxr1T5GGTp7Uwh6%2FekoJqj2e6YN4EBdPOMJceaGmPg3NypuZbFnlQbXR%2F8b0yPUj%2FcnQFgCex%2BWFrbjq5DCVL124XUkd5IOSA6KASYamgXEU%2Bv%2Fe2r6Rw4Za%2BfnJ3MWawTKZBpzimL21FyhbMMvdrsIGOqUBwV9iOZtOpyDpO64Ykz1GoFmuqhtPQ3BnDwtgNYNWSLi9zsCrBCQDc4JS5MeHJZ3khRnNLJTlVxgqpnUKraxRj56M%2F0Ka%2F5rGPRFkS%2BGIid3V9IpGQrWAqzJ5Kb7FRDFbp1KFXZSUX4zH6OvdRZjw3%2BTTgBhPKAu8HOOlrQUvmS%2FGZGLtFYGnL7%2BBSIOMzhvrhP67f6yjmXVe%2FiNO07gsnx%2Ft3VPi&X-Amz-Signature=42a69902884e152435bbb10530714c32517af1eeda78d74a0dd68eddb5768a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMV5C4D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCID60yXFWGEKZCMSc%2BtSpf58S%2BqiHM3g0yZq0ka%2FP5gJ4AiEAl143SyVCtUYcda2sFFQbf%2BVChXXL5AIyP%2B6Vh%2B5HvU8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIUmWhrDtPruCzsGircA3Idf6qgKy04lBjDTXENGCTCLc%2B%2BJpo8npESGMbnSt1qdX2WQ5MTN522aqY1w%2BurDhwCxvfLFy%2Bs2PGI6nvJ%2BXFPNJoBNVWML%2BDXBZLWKIB%2F%2BrbK8pZUP%2B%2FiaboDt5g2hjjH1pt0vpv3J4%2FFvPG0eGIoFdDtHtKkFJMF7OvM7LMaFcVGsMYJ0f%2FtQYOOdjm4%2B8kQBzwCTK%2BXjY4%2FgI8EMWcFINFyJUHL34ooWm6NrPyzZKvbjTo%2FaGeC5STLEAt7eK4GNKdLb46CU1mVjqLgwxz%2FbO0EWFsYXhiz0rlKpAsSTr4EiijFrWMcVDyPgvI4sHiOgpnik09prMZCOYTddPPoKC3iq23Z1dOAoQjys2ZXglCwGxKu8ssPu8LAmw%2B3aB%2BcZFhAKIZf8VHcw0klXWbyLnbT7KPMj7Xjz9L9v2FHfwOVARST0CNCAFVkHktWd4Pcb631yML%2FXHS%2B50DwOVNQTjpITXXCo%2Bu821zoyOnsLxr1T5GGTp7Uwh6%2FekoJqj2e6YN4EBdPOMJceaGmPg3NypuZbFnlQbXR%2F8b0yPUj%2FcnQFgCex%2BWFrbjq5DCVL124XUkd5IOSA6KASYamgXEU%2Bv%2Fe2r6Rw4Za%2BfnJ3MWawTKZBpzimL21FyhbMMvdrsIGOqUBwV9iOZtOpyDpO64Ykz1GoFmuqhtPQ3BnDwtgNYNWSLi9zsCrBCQDc4JS5MeHJZ3khRnNLJTlVxgqpnUKraxRj56M%2F0Ka%2F5rGPRFkS%2BGIid3V9IpGQrWAqzJ5Kb7FRDFbp1KFXZSUX4zH6OvdRZjw3%2BTTgBhPKAu8HOOlrQUvmS%2FGZGLtFYGnL7%2BBSIOMzhvrhP67f6yjmXVe%2FiNO07gsnx%2Ft3VPi&X-Amz-Signature=f59170a8c1c30a67ba538dbea20a65da99cf6820d1941803691a0dff2f22e95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

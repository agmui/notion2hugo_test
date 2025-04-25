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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGQWMQT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwDWXsHj1B5zI9%2FQToB0bkbPGLKRWEbcHyUxUfC%2FH8HAiArWgPfhpM5hVmfms5ijPFEV7veu5qrzTaN3IVc5EoWMSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMdArTOI8v%2FC3lXv3fKtwDEC%2FRgWr1XWsjfzrQ4T2Tl5Uf8q662tVsHTZbiXmIp%2F%2FxDpkYrME26Dd4KvI6TDkK4CTHBugng9F4X20JWbmD727zEDfadkThVEQ8yTmbopkOlrKcWV3rk%2BEdJEek0yFR4H1pJ3RWiQX6JeqoccL4hAaQqC%2FnneVxkYpRoWdXC5KpTIwybZugqu%2BjTiZBWlBp%2BxS14RVeDy97ulcceSuj%2FLl4jMDj7i8w%2FNdaKLvOc9SP6Wcuv71dcwKi7HrRMwNbSw85cpQDt2uHtovwX2dQkWEGNBOLDS87VfW4kbj0UahgW7yi1ekpQNhlWwFh8MkYwMfg1qqZLUmGCBsScS27hq7hNon8R1igDijc5su8oBSkqxbDKcnaPeMfhFv%2BntZeCmYRbJYGLT6ZquH2Nt56%2B1VXFZqkHbn5EeM9uFU3Z5cc0Gyr0xNmVYo6YlHN9MtLoBcM9bfi9KCIRKtMQBGv%2BS4L%2FlenttbADIPUE7r71RIOWRlpUxV8T70NuWLlrgpmhZVoHpIAgjoOyWhl%2FMIu2OAAya0UjGg2%2FMt5%2F%2BeLrvMhoFL6gtNemnVQpuhv3FPPzkHFdgQ3L9MB6LegM84v%2F%2B5tEj9J02lW8OtOGYyNvpN%2FERCJutZuYg5K%2FUQwl7SuwAY6pgGgqnvDsCnhHTLc5iHZGB9s7SR6vmsBQi%2Bog2gplAmMiNf%2BIaXODJKhJDtCg5UJ83etlIOrxFIBbazh6hEef8dCAuLdCs3XkmnQJTTartyaqEleodMRFcif17LVhkGaegxosykIHeOAAtrx%2FlAiqAmvQusiHDcuHZkKkpIfzYpDbMU6Bsqb6Qy%2F2bbIWT7lZ0YseEAyzU5sE4lSnLIn9%2F4u4gVkA0dE&X-Amz-Signature=d885367176f38c9a48472d8ca9b1419da723f604485ef006eabf73976f6f42ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGQWMQT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwDWXsHj1B5zI9%2FQToB0bkbPGLKRWEbcHyUxUfC%2FH8HAiArWgPfhpM5hVmfms5ijPFEV7veu5qrzTaN3IVc5EoWMSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMdArTOI8v%2FC3lXv3fKtwDEC%2FRgWr1XWsjfzrQ4T2Tl5Uf8q662tVsHTZbiXmIp%2F%2FxDpkYrME26Dd4KvI6TDkK4CTHBugng9F4X20JWbmD727zEDfadkThVEQ8yTmbopkOlrKcWV3rk%2BEdJEek0yFR4H1pJ3RWiQX6JeqoccL4hAaQqC%2FnneVxkYpRoWdXC5KpTIwybZugqu%2BjTiZBWlBp%2BxS14RVeDy97ulcceSuj%2FLl4jMDj7i8w%2FNdaKLvOc9SP6Wcuv71dcwKi7HrRMwNbSw85cpQDt2uHtovwX2dQkWEGNBOLDS87VfW4kbj0UahgW7yi1ekpQNhlWwFh8MkYwMfg1qqZLUmGCBsScS27hq7hNon8R1igDijc5su8oBSkqxbDKcnaPeMfhFv%2BntZeCmYRbJYGLT6ZquH2Nt56%2B1VXFZqkHbn5EeM9uFU3Z5cc0Gyr0xNmVYo6YlHN9MtLoBcM9bfi9KCIRKtMQBGv%2BS4L%2FlenttbADIPUE7r71RIOWRlpUxV8T70NuWLlrgpmhZVoHpIAgjoOyWhl%2FMIu2OAAya0UjGg2%2FMt5%2F%2BeLrvMhoFL6gtNemnVQpuhv3FPPzkHFdgQ3L9MB6LegM84v%2F%2B5tEj9J02lW8OtOGYyNvpN%2FERCJutZuYg5K%2FUQwl7SuwAY6pgGgqnvDsCnhHTLc5iHZGB9s7SR6vmsBQi%2Bog2gplAmMiNf%2BIaXODJKhJDtCg5UJ83etlIOrxFIBbazh6hEef8dCAuLdCs3XkmnQJTTartyaqEleodMRFcif17LVhkGaegxosykIHeOAAtrx%2FlAiqAmvQusiHDcuHZkKkpIfzYpDbMU6Bsqb6Qy%2F2bbIWT7lZ0YseEAyzU5sE4lSnLIn9%2F4u4gVkA0dE&X-Amz-Signature=03da1f395ec5a463b45e60e0627433d253eb78107b72066259a13094ea77ea4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGQWMQT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwDWXsHj1B5zI9%2FQToB0bkbPGLKRWEbcHyUxUfC%2FH8HAiArWgPfhpM5hVmfms5ijPFEV7veu5qrzTaN3IVc5EoWMSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMdArTOI8v%2FC3lXv3fKtwDEC%2FRgWr1XWsjfzrQ4T2Tl5Uf8q662tVsHTZbiXmIp%2F%2FxDpkYrME26Dd4KvI6TDkK4CTHBugng9F4X20JWbmD727zEDfadkThVEQ8yTmbopkOlrKcWV3rk%2BEdJEek0yFR4H1pJ3RWiQX6JeqoccL4hAaQqC%2FnneVxkYpRoWdXC5KpTIwybZugqu%2BjTiZBWlBp%2BxS14RVeDy97ulcceSuj%2FLl4jMDj7i8w%2FNdaKLvOc9SP6Wcuv71dcwKi7HrRMwNbSw85cpQDt2uHtovwX2dQkWEGNBOLDS87VfW4kbj0UahgW7yi1ekpQNhlWwFh8MkYwMfg1qqZLUmGCBsScS27hq7hNon8R1igDijc5su8oBSkqxbDKcnaPeMfhFv%2BntZeCmYRbJYGLT6ZquH2Nt56%2B1VXFZqkHbn5EeM9uFU3Z5cc0Gyr0xNmVYo6YlHN9MtLoBcM9bfi9KCIRKtMQBGv%2BS4L%2FlenttbADIPUE7r71RIOWRlpUxV8T70NuWLlrgpmhZVoHpIAgjoOyWhl%2FMIu2OAAya0UjGg2%2FMt5%2F%2BeLrvMhoFL6gtNemnVQpuhv3FPPzkHFdgQ3L9MB6LegM84v%2F%2B5tEj9J02lW8OtOGYyNvpN%2FERCJutZuYg5K%2FUQwl7SuwAY6pgGgqnvDsCnhHTLc5iHZGB9s7SR6vmsBQi%2Bog2gplAmMiNf%2BIaXODJKhJDtCg5UJ83etlIOrxFIBbazh6hEef8dCAuLdCs3XkmnQJTTartyaqEleodMRFcif17LVhkGaegxosykIHeOAAtrx%2FlAiqAmvQusiHDcuHZkKkpIfzYpDbMU6Bsqb6Qy%2F2bbIWT7lZ0YseEAyzU5sE4lSnLIn9%2F4u4gVkA0dE&X-Amz-Signature=b51a3f87ee758ead5d95b55992a3e98aadde14d0e06b1eb0f1efa534b30c2467&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGQWMQT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwDWXsHj1B5zI9%2FQToB0bkbPGLKRWEbcHyUxUfC%2FH8HAiArWgPfhpM5hVmfms5ijPFEV7veu5qrzTaN3IVc5EoWMSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMdArTOI8v%2FC3lXv3fKtwDEC%2FRgWr1XWsjfzrQ4T2Tl5Uf8q662tVsHTZbiXmIp%2F%2FxDpkYrME26Dd4KvI6TDkK4CTHBugng9F4X20JWbmD727zEDfadkThVEQ8yTmbopkOlrKcWV3rk%2BEdJEek0yFR4H1pJ3RWiQX6JeqoccL4hAaQqC%2FnneVxkYpRoWdXC5KpTIwybZugqu%2BjTiZBWlBp%2BxS14RVeDy97ulcceSuj%2FLl4jMDj7i8w%2FNdaKLvOc9SP6Wcuv71dcwKi7HrRMwNbSw85cpQDt2uHtovwX2dQkWEGNBOLDS87VfW4kbj0UahgW7yi1ekpQNhlWwFh8MkYwMfg1qqZLUmGCBsScS27hq7hNon8R1igDijc5su8oBSkqxbDKcnaPeMfhFv%2BntZeCmYRbJYGLT6ZquH2Nt56%2B1VXFZqkHbn5EeM9uFU3Z5cc0Gyr0xNmVYo6YlHN9MtLoBcM9bfi9KCIRKtMQBGv%2BS4L%2FlenttbADIPUE7r71RIOWRlpUxV8T70NuWLlrgpmhZVoHpIAgjoOyWhl%2FMIu2OAAya0UjGg2%2FMt5%2F%2BeLrvMhoFL6gtNemnVQpuhv3FPPzkHFdgQ3L9MB6LegM84v%2F%2B5tEj9J02lW8OtOGYyNvpN%2FERCJutZuYg5K%2FUQwl7SuwAY6pgGgqnvDsCnhHTLc5iHZGB9s7SR6vmsBQi%2Bog2gplAmMiNf%2BIaXODJKhJDtCg5UJ83etlIOrxFIBbazh6hEef8dCAuLdCs3XkmnQJTTartyaqEleodMRFcif17LVhkGaegxosykIHeOAAtrx%2FlAiqAmvQusiHDcuHZkKkpIfzYpDbMU6Bsqb6Qy%2F2bbIWT7lZ0YseEAyzU5sE4lSnLIn9%2F4u4gVkA0dE&X-Amz-Signature=4266f6de4e8daf6f18c534172f0203a2fee17d3b7576a4ab95549583454e8282&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGQWMQT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwDWXsHj1B5zI9%2FQToB0bkbPGLKRWEbcHyUxUfC%2FH8HAiArWgPfhpM5hVmfms5ijPFEV7veu5qrzTaN3IVc5EoWMSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMdArTOI8v%2FC3lXv3fKtwDEC%2FRgWr1XWsjfzrQ4T2Tl5Uf8q662tVsHTZbiXmIp%2F%2FxDpkYrME26Dd4KvI6TDkK4CTHBugng9F4X20JWbmD727zEDfadkThVEQ8yTmbopkOlrKcWV3rk%2BEdJEek0yFR4H1pJ3RWiQX6JeqoccL4hAaQqC%2FnneVxkYpRoWdXC5KpTIwybZugqu%2BjTiZBWlBp%2BxS14RVeDy97ulcceSuj%2FLl4jMDj7i8w%2FNdaKLvOc9SP6Wcuv71dcwKi7HrRMwNbSw85cpQDt2uHtovwX2dQkWEGNBOLDS87VfW4kbj0UahgW7yi1ekpQNhlWwFh8MkYwMfg1qqZLUmGCBsScS27hq7hNon8R1igDijc5su8oBSkqxbDKcnaPeMfhFv%2BntZeCmYRbJYGLT6ZquH2Nt56%2B1VXFZqkHbn5EeM9uFU3Z5cc0Gyr0xNmVYo6YlHN9MtLoBcM9bfi9KCIRKtMQBGv%2BS4L%2FlenttbADIPUE7r71RIOWRlpUxV8T70NuWLlrgpmhZVoHpIAgjoOyWhl%2FMIu2OAAya0UjGg2%2FMt5%2F%2BeLrvMhoFL6gtNemnVQpuhv3FPPzkHFdgQ3L9MB6LegM84v%2F%2B5tEj9J02lW8OtOGYyNvpN%2FERCJutZuYg5K%2FUQwl7SuwAY6pgGgqnvDsCnhHTLc5iHZGB9s7SR6vmsBQi%2Bog2gplAmMiNf%2BIaXODJKhJDtCg5UJ83etlIOrxFIBbazh6hEef8dCAuLdCs3XkmnQJTTartyaqEleodMRFcif17LVhkGaegxosykIHeOAAtrx%2FlAiqAmvQusiHDcuHZkKkpIfzYpDbMU6Bsqb6Qy%2F2bbIWT7lZ0YseEAyzU5sE4lSnLIn9%2F4u4gVkA0dE&X-Amz-Signature=8b4aa7335125227177cb4f4266dc113804383480db72b50f14c7b93c8ebac40c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGQWMQT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwDWXsHj1B5zI9%2FQToB0bkbPGLKRWEbcHyUxUfC%2FH8HAiArWgPfhpM5hVmfms5ijPFEV7veu5qrzTaN3IVc5EoWMSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMdArTOI8v%2FC3lXv3fKtwDEC%2FRgWr1XWsjfzrQ4T2Tl5Uf8q662tVsHTZbiXmIp%2F%2FxDpkYrME26Dd4KvI6TDkK4CTHBugng9F4X20JWbmD727zEDfadkThVEQ8yTmbopkOlrKcWV3rk%2BEdJEek0yFR4H1pJ3RWiQX6JeqoccL4hAaQqC%2FnneVxkYpRoWdXC5KpTIwybZugqu%2BjTiZBWlBp%2BxS14RVeDy97ulcceSuj%2FLl4jMDj7i8w%2FNdaKLvOc9SP6Wcuv71dcwKi7HrRMwNbSw85cpQDt2uHtovwX2dQkWEGNBOLDS87VfW4kbj0UahgW7yi1ekpQNhlWwFh8MkYwMfg1qqZLUmGCBsScS27hq7hNon8R1igDijc5su8oBSkqxbDKcnaPeMfhFv%2BntZeCmYRbJYGLT6ZquH2Nt56%2B1VXFZqkHbn5EeM9uFU3Z5cc0Gyr0xNmVYo6YlHN9MtLoBcM9bfi9KCIRKtMQBGv%2BS4L%2FlenttbADIPUE7r71RIOWRlpUxV8T70NuWLlrgpmhZVoHpIAgjoOyWhl%2FMIu2OAAya0UjGg2%2FMt5%2F%2BeLrvMhoFL6gtNemnVQpuhv3FPPzkHFdgQ3L9MB6LegM84v%2F%2B5tEj9J02lW8OtOGYyNvpN%2FERCJutZuYg5K%2FUQwl7SuwAY6pgGgqnvDsCnhHTLc5iHZGB9s7SR6vmsBQi%2Bog2gplAmMiNf%2BIaXODJKhJDtCg5UJ83etlIOrxFIBbazh6hEef8dCAuLdCs3XkmnQJTTartyaqEleodMRFcif17LVhkGaegxosykIHeOAAtrx%2FlAiqAmvQusiHDcuHZkKkpIfzYpDbMU6Bsqb6Qy%2F2bbIWT7lZ0YseEAyzU5sE4lSnLIn9%2F4u4gVkA0dE&X-Amz-Signature=c7ca4cbab640b6e0493573e872f4f9fe45f7dc81464a3d86e1a0e23d8ac1fc05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGQWMQT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwDWXsHj1B5zI9%2FQToB0bkbPGLKRWEbcHyUxUfC%2FH8HAiArWgPfhpM5hVmfms5ijPFEV7veu5qrzTaN3IVc5EoWMSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMdArTOI8v%2FC3lXv3fKtwDEC%2FRgWr1XWsjfzrQ4T2Tl5Uf8q662tVsHTZbiXmIp%2F%2FxDpkYrME26Dd4KvI6TDkK4CTHBugng9F4X20JWbmD727zEDfadkThVEQ8yTmbopkOlrKcWV3rk%2BEdJEek0yFR4H1pJ3RWiQX6JeqoccL4hAaQqC%2FnneVxkYpRoWdXC5KpTIwybZugqu%2BjTiZBWlBp%2BxS14RVeDy97ulcceSuj%2FLl4jMDj7i8w%2FNdaKLvOc9SP6Wcuv71dcwKi7HrRMwNbSw85cpQDt2uHtovwX2dQkWEGNBOLDS87VfW4kbj0UahgW7yi1ekpQNhlWwFh8MkYwMfg1qqZLUmGCBsScS27hq7hNon8R1igDijc5su8oBSkqxbDKcnaPeMfhFv%2BntZeCmYRbJYGLT6ZquH2Nt56%2B1VXFZqkHbn5EeM9uFU3Z5cc0Gyr0xNmVYo6YlHN9MtLoBcM9bfi9KCIRKtMQBGv%2BS4L%2FlenttbADIPUE7r71RIOWRlpUxV8T70NuWLlrgpmhZVoHpIAgjoOyWhl%2FMIu2OAAya0UjGg2%2FMt5%2F%2BeLrvMhoFL6gtNemnVQpuhv3FPPzkHFdgQ3L9MB6LegM84v%2F%2B5tEj9J02lW8OtOGYyNvpN%2FERCJutZuYg5K%2FUQwl7SuwAY6pgGgqnvDsCnhHTLc5iHZGB9s7SR6vmsBQi%2Bog2gplAmMiNf%2BIaXODJKhJDtCg5UJ83etlIOrxFIBbazh6hEef8dCAuLdCs3XkmnQJTTartyaqEleodMRFcif17LVhkGaegxosykIHeOAAtrx%2FlAiqAmvQusiHDcuHZkKkpIfzYpDbMU6Bsqb6Qy%2F2bbIWT7lZ0YseEAyzU5sE4lSnLIn9%2F4u4gVkA0dE&X-Amz-Signature=29f6a88ef14b4011a146ac0e9cc474f119363d9decff5814e0c84a15f5bcb2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGQWMQT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwDWXsHj1B5zI9%2FQToB0bkbPGLKRWEbcHyUxUfC%2FH8HAiArWgPfhpM5hVmfms5ijPFEV7veu5qrzTaN3IVc5EoWMSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMdArTOI8v%2FC3lXv3fKtwDEC%2FRgWr1XWsjfzrQ4T2Tl5Uf8q662tVsHTZbiXmIp%2F%2FxDpkYrME26Dd4KvI6TDkK4CTHBugng9F4X20JWbmD727zEDfadkThVEQ8yTmbopkOlrKcWV3rk%2BEdJEek0yFR4H1pJ3RWiQX6JeqoccL4hAaQqC%2FnneVxkYpRoWdXC5KpTIwybZugqu%2BjTiZBWlBp%2BxS14RVeDy97ulcceSuj%2FLl4jMDj7i8w%2FNdaKLvOc9SP6Wcuv71dcwKi7HrRMwNbSw85cpQDt2uHtovwX2dQkWEGNBOLDS87VfW4kbj0UahgW7yi1ekpQNhlWwFh8MkYwMfg1qqZLUmGCBsScS27hq7hNon8R1igDijc5su8oBSkqxbDKcnaPeMfhFv%2BntZeCmYRbJYGLT6ZquH2Nt56%2B1VXFZqkHbn5EeM9uFU3Z5cc0Gyr0xNmVYo6YlHN9MtLoBcM9bfi9KCIRKtMQBGv%2BS4L%2FlenttbADIPUE7r71RIOWRlpUxV8T70NuWLlrgpmhZVoHpIAgjoOyWhl%2FMIu2OAAya0UjGg2%2FMt5%2F%2BeLrvMhoFL6gtNemnVQpuhv3FPPzkHFdgQ3L9MB6LegM84v%2F%2B5tEj9J02lW8OtOGYyNvpN%2FERCJutZuYg5K%2FUQwl7SuwAY6pgGgqnvDsCnhHTLc5iHZGB9s7SR6vmsBQi%2Bog2gplAmMiNf%2BIaXODJKhJDtCg5UJ83etlIOrxFIBbazh6hEef8dCAuLdCs3XkmnQJTTartyaqEleodMRFcif17LVhkGaegxosykIHeOAAtrx%2FlAiqAmvQusiHDcuHZkKkpIfzYpDbMU6Bsqb6Qy%2F2bbIWT7lZ0YseEAyzU5sE4lSnLIn9%2F4u4gVkA0dE&X-Amz-Signature=d4ab2a383a6707ab06c84b64dd43d08586a9dddf0b9bac7c74737e79d82f8189&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

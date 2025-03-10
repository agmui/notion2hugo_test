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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHGXRV6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDhW2EcoECmDOyTL%2F%2BjqzKQ5PdN%2B7xfXmNiMvPLT5H6jgIgI1smAv0w%2FZCpXOpQOi0kiTj%2FgoPKJZSlawRZmDGOk0sqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK33NZ0Tb1epAlIqtCrcAwaZ9XJIPjlLTgiZ9OHZ5JUghwwXdErCj8rc42Ij%2FoJbic%2B%2B%2FB5eg38vBY4AsIuD2nsc8kRVQkAdS8hzQCHQUr6e7mxTaudxZ0SyNq%2Bh0uhZyjhyObF2ZKP%2BdLwJPgvg8SEUWNtFMnDwYhP7hbNbN7p1bVqx3eaCiQ7n4Kmcm%2FYrBh7BHQLIR%2BPZOwU%2FclvGX9LFXa5w%2BVJHgIecpuIOIqqElKn5N%2BxhmOVhHmolpg7kh70nsXUVFkm7jeyJW5pEywIQO7DaUDpUXadZ1CfvHYvsIXBhA9SoQtdY1%2BGB8V2Ppcfk6%2FeimodwpdtzK%2F51YmObdImaR3%2F3t8uJXHzPn%2FrE1RDmgtAbuZZkbzjtvq%2BaPhqlucc%2BAxYTwWpTChG8aTZVDUPmNG%2BkN%2BOJllRoJuwGsfGCeinURZbuBq8q6yIzuRudXc%2BP0Q0rWdfcsyK8%2BngHRj8G5BlTsEsVAaMUhOT0Wat33nqGGGRYAmWW7CMGsIfIPLxkbjXGGVDm5d%2FHkMhj3pXMZgvMwb5X2jiZ03vrEPQqy5FwcqrjLRkkgkTHjlMHNLsvNuTJlikfd66hbnT6o6AfhveRj8X8lOc5fmO%2BqXiy3YtXAycb1SOIxMn8dm7UsFR2sFSvl565MOfJu74GOqUBkK2UpB66Q0s72utY11twqNcr68KO0v6GaLHu9OwS3uSHcAROkhgcpORHR9zNRgWn%2BIrwaZbuC2nVhpIZaF%2FRVuu411n4CLCrg0dzcMr38XhdexW2g7VmW47JO7%2FZH3UgQQYNV1K%2Fsz75c3XaR8t%2BnvFpVaGv0swezk6CCRmK7k9saTGS00T6hgoTd1K4TjtY4L0MGTQuvmB6e1vAJiZndfQsWwV%2B&X-Amz-Signature=b4bc0ddee3c0cb71bc5f903d5057d19f4e6fb2cfeee81b2acff12bbc7bffa3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHGXRV6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDhW2EcoECmDOyTL%2F%2BjqzKQ5PdN%2B7xfXmNiMvPLT5H6jgIgI1smAv0w%2FZCpXOpQOi0kiTj%2FgoPKJZSlawRZmDGOk0sqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK33NZ0Tb1epAlIqtCrcAwaZ9XJIPjlLTgiZ9OHZ5JUghwwXdErCj8rc42Ij%2FoJbic%2B%2B%2FB5eg38vBY4AsIuD2nsc8kRVQkAdS8hzQCHQUr6e7mxTaudxZ0SyNq%2Bh0uhZyjhyObF2ZKP%2BdLwJPgvg8SEUWNtFMnDwYhP7hbNbN7p1bVqx3eaCiQ7n4Kmcm%2FYrBh7BHQLIR%2BPZOwU%2FclvGX9LFXa5w%2BVJHgIecpuIOIqqElKn5N%2BxhmOVhHmolpg7kh70nsXUVFkm7jeyJW5pEywIQO7DaUDpUXadZ1CfvHYvsIXBhA9SoQtdY1%2BGB8V2Ppcfk6%2FeimodwpdtzK%2F51YmObdImaR3%2F3t8uJXHzPn%2FrE1RDmgtAbuZZkbzjtvq%2BaPhqlucc%2BAxYTwWpTChG8aTZVDUPmNG%2BkN%2BOJllRoJuwGsfGCeinURZbuBq8q6yIzuRudXc%2BP0Q0rWdfcsyK8%2BngHRj8G5BlTsEsVAaMUhOT0Wat33nqGGGRYAmWW7CMGsIfIPLxkbjXGGVDm5d%2FHkMhj3pXMZgvMwb5X2jiZ03vrEPQqy5FwcqrjLRkkgkTHjlMHNLsvNuTJlikfd66hbnT6o6AfhveRj8X8lOc5fmO%2BqXiy3YtXAycb1SOIxMn8dm7UsFR2sFSvl565MOfJu74GOqUBkK2UpB66Q0s72utY11twqNcr68KO0v6GaLHu9OwS3uSHcAROkhgcpORHR9zNRgWn%2BIrwaZbuC2nVhpIZaF%2FRVuu411n4CLCrg0dzcMr38XhdexW2g7VmW47JO7%2FZH3UgQQYNV1K%2Fsz75c3XaR8t%2BnvFpVaGv0swezk6CCRmK7k9saTGS00T6hgoTd1K4TjtY4L0MGTQuvmB6e1vAJiZndfQsWwV%2B&X-Amz-Signature=b922c4d4ef55c4df21c408baed70dbc2a75e4fe91fde8aab4d65ad6af666f823&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHGXRV6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDhW2EcoECmDOyTL%2F%2BjqzKQ5PdN%2B7xfXmNiMvPLT5H6jgIgI1smAv0w%2FZCpXOpQOi0kiTj%2FgoPKJZSlawRZmDGOk0sqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK33NZ0Tb1epAlIqtCrcAwaZ9XJIPjlLTgiZ9OHZ5JUghwwXdErCj8rc42Ij%2FoJbic%2B%2B%2FB5eg38vBY4AsIuD2nsc8kRVQkAdS8hzQCHQUr6e7mxTaudxZ0SyNq%2Bh0uhZyjhyObF2ZKP%2BdLwJPgvg8SEUWNtFMnDwYhP7hbNbN7p1bVqx3eaCiQ7n4Kmcm%2FYrBh7BHQLIR%2BPZOwU%2FclvGX9LFXa5w%2BVJHgIecpuIOIqqElKn5N%2BxhmOVhHmolpg7kh70nsXUVFkm7jeyJW5pEywIQO7DaUDpUXadZ1CfvHYvsIXBhA9SoQtdY1%2BGB8V2Ppcfk6%2FeimodwpdtzK%2F51YmObdImaR3%2F3t8uJXHzPn%2FrE1RDmgtAbuZZkbzjtvq%2BaPhqlucc%2BAxYTwWpTChG8aTZVDUPmNG%2BkN%2BOJllRoJuwGsfGCeinURZbuBq8q6yIzuRudXc%2BP0Q0rWdfcsyK8%2BngHRj8G5BlTsEsVAaMUhOT0Wat33nqGGGRYAmWW7CMGsIfIPLxkbjXGGVDm5d%2FHkMhj3pXMZgvMwb5X2jiZ03vrEPQqy5FwcqrjLRkkgkTHjlMHNLsvNuTJlikfd66hbnT6o6AfhveRj8X8lOc5fmO%2BqXiy3YtXAycb1SOIxMn8dm7UsFR2sFSvl565MOfJu74GOqUBkK2UpB66Q0s72utY11twqNcr68KO0v6GaLHu9OwS3uSHcAROkhgcpORHR9zNRgWn%2BIrwaZbuC2nVhpIZaF%2FRVuu411n4CLCrg0dzcMr38XhdexW2g7VmW47JO7%2FZH3UgQQYNV1K%2Fsz75c3XaR8t%2BnvFpVaGv0swezk6CCRmK7k9saTGS00T6hgoTd1K4TjtY4L0MGTQuvmB6e1vAJiZndfQsWwV%2B&X-Amz-Signature=dd11054dadb63a7f71471c2b10b9ac9b34d568002cbccce5b39538b9d9098e14&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHGXRV6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDhW2EcoECmDOyTL%2F%2BjqzKQ5PdN%2B7xfXmNiMvPLT5H6jgIgI1smAv0w%2FZCpXOpQOi0kiTj%2FgoPKJZSlawRZmDGOk0sqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK33NZ0Tb1epAlIqtCrcAwaZ9XJIPjlLTgiZ9OHZ5JUghwwXdErCj8rc42Ij%2FoJbic%2B%2B%2FB5eg38vBY4AsIuD2nsc8kRVQkAdS8hzQCHQUr6e7mxTaudxZ0SyNq%2Bh0uhZyjhyObF2ZKP%2BdLwJPgvg8SEUWNtFMnDwYhP7hbNbN7p1bVqx3eaCiQ7n4Kmcm%2FYrBh7BHQLIR%2BPZOwU%2FclvGX9LFXa5w%2BVJHgIecpuIOIqqElKn5N%2BxhmOVhHmolpg7kh70nsXUVFkm7jeyJW5pEywIQO7DaUDpUXadZ1CfvHYvsIXBhA9SoQtdY1%2BGB8V2Ppcfk6%2FeimodwpdtzK%2F51YmObdImaR3%2F3t8uJXHzPn%2FrE1RDmgtAbuZZkbzjtvq%2BaPhqlucc%2BAxYTwWpTChG8aTZVDUPmNG%2BkN%2BOJllRoJuwGsfGCeinURZbuBq8q6yIzuRudXc%2BP0Q0rWdfcsyK8%2BngHRj8G5BlTsEsVAaMUhOT0Wat33nqGGGRYAmWW7CMGsIfIPLxkbjXGGVDm5d%2FHkMhj3pXMZgvMwb5X2jiZ03vrEPQqy5FwcqrjLRkkgkTHjlMHNLsvNuTJlikfd66hbnT6o6AfhveRj8X8lOc5fmO%2BqXiy3YtXAycb1SOIxMn8dm7UsFR2sFSvl565MOfJu74GOqUBkK2UpB66Q0s72utY11twqNcr68KO0v6GaLHu9OwS3uSHcAROkhgcpORHR9zNRgWn%2BIrwaZbuC2nVhpIZaF%2FRVuu411n4CLCrg0dzcMr38XhdexW2g7VmW47JO7%2FZH3UgQQYNV1K%2Fsz75c3XaR8t%2BnvFpVaGv0swezk6CCRmK7k9saTGS00T6hgoTd1K4TjtY4L0MGTQuvmB6e1vAJiZndfQsWwV%2B&X-Amz-Signature=17c54e0dc4582e97633d138db42cf38c8bfdf9ead14ba7f667e051f35f3c5859&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHGXRV6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDhW2EcoECmDOyTL%2F%2BjqzKQ5PdN%2B7xfXmNiMvPLT5H6jgIgI1smAv0w%2FZCpXOpQOi0kiTj%2FgoPKJZSlawRZmDGOk0sqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK33NZ0Tb1epAlIqtCrcAwaZ9XJIPjlLTgiZ9OHZ5JUghwwXdErCj8rc42Ij%2FoJbic%2B%2B%2FB5eg38vBY4AsIuD2nsc8kRVQkAdS8hzQCHQUr6e7mxTaudxZ0SyNq%2Bh0uhZyjhyObF2ZKP%2BdLwJPgvg8SEUWNtFMnDwYhP7hbNbN7p1bVqx3eaCiQ7n4Kmcm%2FYrBh7BHQLIR%2BPZOwU%2FclvGX9LFXa5w%2BVJHgIecpuIOIqqElKn5N%2BxhmOVhHmolpg7kh70nsXUVFkm7jeyJW5pEywIQO7DaUDpUXadZ1CfvHYvsIXBhA9SoQtdY1%2BGB8V2Ppcfk6%2FeimodwpdtzK%2F51YmObdImaR3%2F3t8uJXHzPn%2FrE1RDmgtAbuZZkbzjtvq%2BaPhqlucc%2BAxYTwWpTChG8aTZVDUPmNG%2BkN%2BOJllRoJuwGsfGCeinURZbuBq8q6yIzuRudXc%2BP0Q0rWdfcsyK8%2BngHRj8G5BlTsEsVAaMUhOT0Wat33nqGGGRYAmWW7CMGsIfIPLxkbjXGGVDm5d%2FHkMhj3pXMZgvMwb5X2jiZ03vrEPQqy5FwcqrjLRkkgkTHjlMHNLsvNuTJlikfd66hbnT6o6AfhveRj8X8lOc5fmO%2BqXiy3YtXAycb1SOIxMn8dm7UsFR2sFSvl565MOfJu74GOqUBkK2UpB66Q0s72utY11twqNcr68KO0v6GaLHu9OwS3uSHcAROkhgcpORHR9zNRgWn%2BIrwaZbuC2nVhpIZaF%2FRVuu411n4CLCrg0dzcMr38XhdexW2g7VmW47JO7%2FZH3UgQQYNV1K%2Fsz75c3XaR8t%2BnvFpVaGv0swezk6CCRmK7k9saTGS00T6hgoTd1K4TjtY4L0MGTQuvmB6e1vAJiZndfQsWwV%2B&X-Amz-Signature=2ad4402d4ae3d1fc0d77e341013ba431621f12817b8a8dada90f602e9ba94f72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHGXRV6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDhW2EcoECmDOyTL%2F%2BjqzKQ5PdN%2B7xfXmNiMvPLT5H6jgIgI1smAv0w%2FZCpXOpQOi0kiTj%2FgoPKJZSlawRZmDGOk0sqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK33NZ0Tb1epAlIqtCrcAwaZ9XJIPjlLTgiZ9OHZ5JUghwwXdErCj8rc42Ij%2FoJbic%2B%2B%2FB5eg38vBY4AsIuD2nsc8kRVQkAdS8hzQCHQUr6e7mxTaudxZ0SyNq%2Bh0uhZyjhyObF2ZKP%2BdLwJPgvg8SEUWNtFMnDwYhP7hbNbN7p1bVqx3eaCiQ7n4Kmcm%2FYrBh7BHQLIR%2BPZOwU%2FclvGX9LFXa5w%2BVJHgIecpuIOIqqElKn5N%2BxhmOVhHmolpg7kh70nsXUVFkm7jeyJW5pEywIQO7DaUDpUXadZ1CfvHYvsIXBhA9SoQtdY1%2BGB8V2Ppcfk6%2FeimodwpdtzK%2F51YmObdImaR3%2F3t8uJXHzPn%2FrE1RDmgtAbuZZkbzjtvq%2BaPhqlucc%2BAxYTwWpTChG8aTZVDUPmNG%2BkN%2BOJllRoJuwGsfGCeinURZbuBq8q6yIzuRudXc%2BP0Q0rWdfcsyK8%2BngHRj8G5BlTsEsVAaMUhOT0Wat33nqGGGRYAmWW7CMGsIfIPLxkbjXGGVDm5d%2FHkMhj3pXMZgvMwb5X2jiZ03vrEPQqy5FwcqrjLRkkgkTHjlMHNLsvNuTJlikfd66hbnT6o6AfhveRj8X8lOc5fmO%2BqXiy3YtXAycb1SOIxMn8dm7UsFR2sFSvl565MOfJu74GOqUBkK2UpB66Q0s72utY11twqNcr68KO0v6GaLHu9OwS3uSHcAROkhgcpORHR9zNRgWn%2BIrwaZbuC2nVhpIZaF%2FRVuu411n4CLCrg0dzcMr38XhdexW2g7VmW47JO7%2FZH3UgQQYNV1K%2Fsz75c3XaR8t%2BnvFpVaGv0swezk6CCRmK7k9saTGS00T6hgoTd1K4TjtY4L0MGTQuvmB6e1vAJiZndfQsWwV%2B&X-Amz-Signature=399e6c4c466b96ce2bc5c4a33f502ba512b5f06e877e4231ffd448321a6b7f86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHGXRV6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDhW2EcoECmDOyTL%2F%2BjqzKQ5PdN%2B7xfXmNiMvPLT5H6jgIgI1smAv0w%2FZCpXOpQOi0kiTj%2FgoPKJZSlawRZmDGOk0sqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK33NZ0Tb1epAlIqtCrcAwaZ9XJIPjlLTgiZ9OHZ5JUghwwXdErCj8rc42Ij%2FoJbic%2B%2B%2FB5eg38vBY4AsIuD2nsc8kRVQkAdS8hzQCHQUr6e7mxTaudxZ0SyNq%2Bh0uhZyjhyObF2ZKP%2BdLwJPgvg8SEUWNtFMnDwYhP7hbNbN7p1bVqx3eaCiQ7n4Kmcm%2FYrBh7BHQLIR%2BPZOwU%2FclvGX9LFXa5w%2BVJHgIecpuIOIqqElKn5N%2BxhmOVhHmolpg7kh70nsXUVFkm7jeyJW5pEywIQO7DaUDpUXadZ1CfvHYvsIXBhA9SoQtdY1%2BGB8V2Ppcfk6%2FeimodwpdtzK%2F51YmObdImaR3%2F3t8uJXHzPn%2FrE1RDmgtAbuZZkbzjtvq%2BaPhqlucc%2BAxYTwWpTChG8aTZVDUPmNG%2BkN%2BOJllRoJuwGsfGCeinURZbuBq8q6yIzuRudXc%2BP0Q0rWdfcsyK8%2BngHRj8G5BlTsEsVAaMUhOT0Wat33nqGGGRYAmWW7CMGsIfIPLxkbjXGGVDm5d%2FHkMhj3pXMZgvMwb5X2jiZ03vrEPQqy5FwcqrjLRkkgkTHjlMHNLsvNuTJlikfd66hbnT6o6AfhveRj8X8lOc5fmO%2BqXiy3YtXAycb1SOIxMn8dm7UsFR2sFSvl565MOfJu74GOqUBkK2UpB66Q0s72utY11twqNcr68KO0v6GaLHu9OwS3uSHcAROkhgcpORHR9zNRgWn%2BIrwaZbuC2nVhpIZaF%2FRVuu411n4CLCrg0dzcMr38XhdexW2g7VmW47JO7%2FZH3UgQQYNV1K%2Fsz75c3XaR8t%2BnvFpVaGv0swezk6CCRmK7k9saTGS00T6hgoTd1K4TjtY4L0MGTQuvmB6e1vAJiZndfQsWwV%2B&X-Amz-Signature=ce043d237723b2047c4d1d43f9d356809ee272f75217c8a5548593074113cf56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHGXRV6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDhW2EcoECmDOyTL%2F%2BjqzKQ5PdN%2B7xfXmNiMvPLT5H6jgIgI1smAv0w%2FZCpXOpQOi0kiTj%2FgoPKJZSlawRZmDGOk0sqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK33NZ0Tb1epAlIqtCrcAwaZ9XJIPjlLTgiZ9OHZ5JUghwwXdErCj8rc42Ij%2FoJbic%2B%2B%2FB5eg38vBY4AsIuD2nsc8kRVQkAdS8hzQCHQUr6e7mxTaudxZ0SyNq%2Bh0uhZyjhyObF2ZKP%2BdLwJPgvg8SEUWNtFMnDwYhP7hbNbN7p1bVqx3eaCiQ7n4Kmcm%2FYrBh7BHQLIR%2BPZOwU%2FclvGX9LFXa5w%2BVJHgIecpuIOIqqElKn5N%2BxhmOVhHmolpg7kh70nsXUVFkm7jeyJW5pEywIQO7DaUDpUXadZ1CfvHYvsIXBhA9SoQtdY1%2BGB8V2Ppcfk6%2FeimodwpdtzK%2F51YmObdImaR3%2F3t8uJXHzPn%2FrE1RDmgtAbuZZkbzjtvq%2BaPhqlucc%2BAxYTwWpTChG8aTZVDUPmNG%2BkN%2BOJllRoJuwGsfGCeinURZbuBq8q6yIzuRudXc%2BP0Q0rWdfcsyK8%2BngHRj8G5BlTsEsVAaMUhOT0Wat33nqGGGRYAmWW7CMGsIfIPLxkbjXGGVDm5d%2FHkMhj3pXMZgvMwb5X2jiZ03vrEPQqy5FwcqrjLRkkgkTHjlMHNLsvNuTJlikfd66hbnT6o6AfhveRj8X8lOc5fmO%2BqXiy3YtXAycb1SOIxMn8dm7UsFR2sFSvl565MOfJu74GOqUBkK2UpB66Q0s72utY11twqNcr68KO0v6GaLHu9OwS3uSHcAROkhgcpORHR9zNRgWn%2BIrwaZbuC2nVhpIZaF%2FRVuu411n4CLCrg0dzcMr38XhdexW2g7VmW47JO7%2FZH3UgQQYNV1K%2Fsz75c3XaR8t%2BnvFpVaGv0swezk6CCRmK7k9saTGS00T6hgoTd1K4TjtY4L0MGTQuvmB6e1vAJiZndfQsWwV%2B&X-Amz-Signature=e6902564411abe8e836dc2d9f6019f167c53cc6298314cf50b9af30c85af6791&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

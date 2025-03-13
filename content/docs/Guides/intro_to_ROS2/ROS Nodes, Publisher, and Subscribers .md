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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DISNMWH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClFup8cYjN%2FBijPPzLGzS42E84%2FvlQJMEMylOPFemT%2BAIgFlz4q6ROodmiUJYsnXYYne7MXypufwXVEO3B0jtnPwgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvt3LxVepByXoQaiircA6D4bg9FawPyX3tIbovop8OdcKzBWcWpqOQW95Slt%2Bh2QQxEhR7nFfQ84FEDFSNC1RBvY0I5auDCEjP62rgRv3tACWeCiTK1xPqY8ib18dTnCGJ7KibvUZxEWDM4BJwJyW4du5Bm6Vdrv2DfuEq0rwFoyFyXqdk4UPP8RcMmTo10UefIgaHVmr1o0WJ99Dvbs%2FqJm3WZFubipM3L7xDE2bWUAI%2Bey50KZJH4CwBPdtXSmeJWlNpEFG%2F9e1ckCrAvdihaCOzenazUsdjiEwVcXTE3%2FY2TeJjfDTPnCm521gfiRvhQ07LhMlWIdc6Yn4vIL6c1QqULQCANXh00oUL4fLSBiDNoksHuenWW%2Bgy0zs0%2FKSycjsAT%2FdMKxY9XgwVCh1UTfYAU3KjbecoT5ItCgYV4OrMND7seicS7xTLFgKbZWgmIY9f%2BMEoo0Sx8e7PdcVzcCIrsQXrJr2o5Nmsi7cmE%2B4O8zSFFcglZ4pY67NUZHKlT3mghfm7HunkeX3pw4Wa9gNdEoG6opjU9Rk%2B83mN%2Fmj7V54d3BF3yCLwBb6RVvJZ70xOTFf%2BZ5CzRWdlKiJ%2BYzjH71amAW%2BSU%2F6q5WptRcOMq4YP6MmYU%2Fvo%2BzLGLAhVa1sZ15H2PP4HlMI32zL4GOqUBd%2BCEKKm0KgWNd8jPEBasLL0eynfscR2%2FF%2BMsY9EEnFN71IdXsvIu3foi58ecxknY8PGmcmCQoxqpuNPKaHJLo8uYrQQRXs3uZgAjPiYf%2F5FRdaZSrsXIfxeKb41CTeQtWMBYPZlnliuNFA8OFQ7GnDMLQK21L9js6MPsF07ndQDDnbqfRs9LrVQ1BBougw9TeNUH8ZrHqxZEr2aHpKVfCRqmTilW&X-Amz-Signature=c356a26a66beb8ad461f29400a74707ce0e8825eaeb57960519ba6182d9744d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DISNMWH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClFup8cYjN%2FBijPPzLGzS42E84%2FvlQJMEMylOPFemT%2BAIgFlz4q6ROodmiUJYsnXYYne7MXypufwXVEO3B0jtnPwgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvt3LxVepByXoQaiircA6D4bg9FawPyX3tIbovop8OdcKzBWcWpqOQW95Slt%2Bh2QQxEhR7nFfQ84FEDFSNC1RBvY0I5auDCEjP62rgRv3tACWeCiTK1xPqY8ib18dTnCGJ7KibvUZxEWDM4BJwJyW4du5Bm6Vdrv2DfuEq0rwFoyFyXqdk4UPP8RcMmTo10UefIgaHVmr1o0WJ99Dvbs%2FqJm3WZFubipM3L7xDE2bWUAI%2Bey50KZJH4CwBPdtXSmeJWlNpEFG%2F9e1ckCrAvdihaCOzenazUsdjiEwVcXTE3%2FY2TeJjfDTPnCm521gfiRvhQ07LhMlWIdc6Yn4vIL6c1QqULQCANXh00oUL4fLSBiDNoksHuenWW%2Bgy0zs0%2FKSycjsAT%2FdMKxY9XgwVCh1UTfYAU3KjbecoT5ItCgYV4OrMND7seicS7xTLFgKbZWgmIY9f%2BMEoo0Sx8e7PdcVzcCIrsQXrJr2o5Nmsi7cmE%2B4O8zSFFcglZ4pY67NUZHKlT3mghfm7HunkeX3pw4Wa9gNdEoG6opjU9Rk%2B83mN%2Fmj7V54d3BF3yCLwBb6RVvJZ70xOTFf%2BZ5CzRWdlKiJ%2BYzjH71amAW%2BSU%2F6q5WptRcOMq4YP6MmYU%2Fvo%2BzLGLAhVa1sZ15H2PP4HlMI32zL4GOqUBd%2BCEKKm0KgWNd8jPEBasLL0eynfscR2%2FF%2BMsY9EEnFN71IdXsvIu3foi58ecxknY8PGmcmCQoxqpuNPKaHJLo8uYrQQRXs3uZgAjPiYf%2F5FRdaZSrsXIfxeKb41CTeQtWMBYPZlnliuNFA8OFQ7GnDMLQK21L9js6MPsF07ndQDDnbqfRs9LrVQ1BBougw9TeNUH8ZrHqxZEr2aHpKVfCRqmTilW&X-Amz-Signature=4c54fdf420ca6d8b7bc6d5dee038bde1bbbd69e918474aa8232f058c777d8598&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DISNMWH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClFup8cYjN%2FBijPPzLGzS42E84%2FvlQJMEMylOPFemT%2BAIgFlz4q6ROodmiUJYsnXYYne7MXypufwXVEO3B0jtnPwgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvt3LxVepByXoQaiircA6D4bg9FawPyX3tIbovop8OdcKzBWcWpqOQW95Slt%2Bh2QQxEhR7nFfQ84FEDFSNC1RBvY0I5auDCEjP62rgRv3tACWeCiTK1xPqY8ib18dTnCGJ7KibvUZxEWDM4BJwJyW4du5Bm6Vdrv2DfuEq0rwFoyFyXqdk4UPP8RcMmTo10UefIgaHVmr1o0WJ99Dvbs%2FqJm3WZFubipM3L7xDE2bWUAI%2Bey50KZJH4CwBPdtXSmeJWlNpEFG%2F9e1ckCrAvdihaCOzenazUsdjiEwVcXTE3%2FY2TeJjfDTPnCm521gfiRvhQ07LhMlWIdc6Yn4vIL6c1QqULQCANXh00oUL4fLSBiDNoksHuenWW%2Bgy0zs0%2FKSycjsAT%2FdMKxY9XgwVCh1UTfYAU3KjbecoT5ItCgYV4OrMND7seicS7xTLFgKbZWgmIY9f%2BMEoo0Sx8e7PdcVzcCIrsQXrJr2o5Nmsi7cmE%2B4O8zSFFcglZ4pY67NUZHKlT3mghfm7HunkeX3pw4Wa9gNdEoG6opjU9Rk%2B83mN%2Fmj7V54d3BF3yCLwBb6RVvJZ70xOTFf%2BZ5CzRWdlKiJ%2BYzjH71amAW%2BSU%2F6q5WptRcOMq4YP6MmYU%2Fvo%2BzLGLAhVa1sZ15H2PP4HlMI32zL4GOqUBd%2BCEKKm0KgWNd8jPEBasLL0eynfscR2%2FF%2BMsY9EEnFN71IdXsvIu3foi58ecxknY8PGmcmCQoxqpuNPKaHJLo8uYrQQRXs3uZgAjPiYf%2F5FRdaZSrsXIfxeKb41CTeQtWMBYPZlnliuNFA8OFQ7GnDMLQK21L9js6MPsF07ndQDDnbqfRs9LrVQ1BBougw9TeNUH8ZrHqxZEr2aHpKVfCRqmTilW&X-Amz-Signature=5b3bd1954c2534dbe8b8e29c2c7aa57d0e89272ded75793b0ca8ab772f4d3840&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DISNMWH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClFup8cYjN%2FBijPPzLGzS42E84%2FvlQJMEMylOPFemT%2BAIgFlz4q6ROodmiUJYsnXYYne7MXypufwXVEO3B0jtnPwgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvt3LxVepByXoQaiircA6D4bg9FawPyX3tIbovop8OdcKzBWcWpqOQW95Slt%2Bh2QQxEhR7nFfQ84FEDFSNC1RBvY0I5auDCEjP62rgRv3tACWeCiTK1xPqY8ib18dTnCGJ7KibvUZxEWDM4BJwJyW4du5Bm6Vdrv2DfuEq0rwFoyFyXqdk4UPP8RcMmTo10UefIgaHVmr1o0WJ99Dvbs%2FqJm3WZFubipM3L7xDE2bWUAI%2Bey50KZJH4CwBPdtXSmeJWlNpEFG%2F9e1ckCrAvdihaCOzenazUsdjiEwVcXTE3%2FY2TeJjfDTPnCm521gfiRvhQ07LhMlWIdc6Yn4vIL6c1QqULQCANXh00oUL4fLSBiDNoksHuenWW%2Bgy0zs0%2FKSycjsAT%2FdMKxY9XgwVCh1UTfYAU3KjbecoT5ItCgYV4OrMND7seicS7xTLFgKbZWgmIY9f%2BMEoo0Sx8e7PdcVzcCIrsQXrJr2o5Nmsi7cmE%2B4O8zSFFcglZ4pY67NUZHKlT3mghfm7HunkeX3pw4Wa9gNdEoG6opjU9Rk%2B83mN%2Fmj7V54d3BF3yCLwBb6RVvJZ70xOTFf%2BZ5CzRWdlKiJ%2BYzjH71amAW%2BSU%2F6q5WptRcOMq4YP6MmYU%2Fvo%2BzLGLAhVa1sZ15H2PP4HlMI32zL4GOqUBd%2BCEKKm0KgWNd8jPEBasLL0eynfscR2%2FF%2BMsY9EEnFN71IdXsvIu3foi58ecxknY8PGmcmCQoxqpuNPKaHJLo8uYrQQRXs3uZgAjPiYf%2F5FRdaZSrsXIfxeKb41CTeQtWMBYPZlnliuNFA8OFQ7GnDMLQK21L9js6MPsF07ndQDDnbqfRs9LrVQ1BBougw9TeNUH8ZrHqxZEr2aHpKVfCRqmTilW&X-Amz-Signature=f55d84c255d0a020da0eb1acb11f546b2ed9e5ab292b8bf74f883d4cb97753ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DISNMWH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClFup8cYjN%2FBijPPzLGzS42E84%2FvlQJMEMylOPFemT%2BAIgFlz4q6ROodmiUJYsnXYYne7MXypufwXVEO3B0jtnPwgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvt3LxVepByXoQaiircA6D4bg9FawPyX3tIbovop8OdcKzBWcWpqOQW95Slt%2Bh2QQxEhR7nFfQ84FEDFSNC1RBvY0I5auDCEjP62rgRv3tACWeCiTK1xPqY8ib18dTnCGJ7KibvUZxEWDM4BJwJyW4du5Bm6Vdrv2DfuEq0rwFoyFyXqdk4UPP8RcMmTo10UefIgaHVmr1o0WJ99Dvbs%2FqJm3WZFubipM3L7xDE2bWUAI%2Bey50KZJH4CwBPdtXSmeJWlNpEFG%2F9e1ckCrAvdihaCOzenazUsdjiEwVcXTE3%2FY2TeJjfDTPnCm521gfiRvhQ07LhMlWIdc6Yn4vIL6c1QqULQCANXh00oUL4fLSBiDNoksHuenWW%2Bgy0zs0%2FKSycjsAT%2FdMKxY9XgwVCh1UTfYAU3KjbecoT5ItCgYV4OrMND7seicS7xTLFgKbZWgmIY9f%2BMEoo0Sx8e7PdcVzcCIrsQXrJr2o5Nmsi7cmE%2B4O8zSFFcglZ4pY67NUZHKlT3mghfm7HunkeX3pw4Wa9gNdEoG6opjU9Rk%2B83mN%2Fmj7V54d3BF3yCLwBb6RVvJZ70xOTFf%2BZ5CzRWdlKiJ%2BYzjH71amAW%2BSU%2F6q5WptRcOMq4YP6MmYU%2Fvo%2BzLGLAhVa1sZ15H2PP4HlMI32zL4GOqUBd%2BCEKKm0KgWNd8jPEBasLL0eynfscR2%2FF%2BMsY9EEnFN71IdXsvIu3foi58ecxknY8PGmcmCQoxqpuNPKaHJLo8uYrQQRXs3uZgAjPiYf%2F5FRdaZSrsXIfxeKb41CTeQtWMBYPZlnliuNFA8OFQ7GnDMLQK21L9js6MPsF07ndQDDnbqfRs9LrVQ1BBougw9TeNUH8ZrHqxZEr2aHpKVfCRqmTilW&X-Amz-Signature=f53f63773488b1dc1c992b0527c0f763061726852a031002d9525b23e90f64c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DISNMWH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClFup8cYjN%2FBijPPzLGzS42E84%2FvlQJMEMylOPFemT%2BAIgFlz4q6ROodmiUJYsnXYYne7MXypufwXVEO3B0jtnPwgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvt3LxVepByXoQaiircA6D4bg9FawPyX3tIbovop8OdcKzBWcWpqOQW95Slt%2Bh2QQxEhR7nFfQ84FEDFSNC1RBvY0I5auDCEjP62rgRv3tACWeCiTK1xPqY8ib18dTnCGJ7KibvUZxEWDM4BJwJyW4du5Bm6Vdrv2DfuEq0rwFoyFyXqdk4UPP8RcMmTo10UefIgaHVmr1o0WJ99Dvbs%2FqJm3WZFubipM3L7xDE2bWUAI%2Bey50KZJH4CwBPdtXSmeJWlNpEFG%2F9e1ckCrAvdihaCOzenazUsdjiEwVcXTE3%2FY2TeJjfDTPnCm521gfiRvhQ07LhMlWIdc6Yn4vIL6c1QqULQCANXh00oUL4fLSBiDNoksHuenWW%2Bgy0zs0%2FKSycjsAT%2FdMKxY9XgwVCh1UTfYAU3KjbecoT5ItCgYV4OrMND7seicS7xTLFgKbZWgmIY9f%2BMEoo0Sx8e7PdcVzcCIrsQXrJr2o5Nmsi7cmE%2B4O8zSFFcglZ4pY67NUZHKlT3mghfm7HunkeX3pw4Wa9gNdEoG6opjU9Rk%2B83mN%2Fmj7V54d3BF3yCLwBb6RVvJZ70xOTFf%2BZ5CzRWdlKiJ%2BYzjH71amAW%2BSU%2F6q5WptRcOMq4YP6MmYU%2Fvo%2BzLGLAhVa1sZ15H2PP4HlMI32zL4GOqUBd%2BCEKKm0KgWNd8jPEBasLL0eynfscR2%2FF%2BMsY9EEnFN71IdXsvIu3foi58ecxknY8PGmcmCQoxqpuNPKaHJLo8uYrQQRXs3uZgAjPiYf%2F5FRdaZSrsXIfxeKb41CTeQtWMBYPZlnliuNFA8OFQ7GnDMLQK21L9js6MPsF07ndQDDnbqfRs9LrVQ1BBougw9TeNUH8ZrHqxZEr2aHpKVfCRqmTilW&X-Amz-Signature=218e167c4be887d39057a211382ddc4b48099b1aebe8cd378e4a5cdfed6c5106&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DISNMWH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClFup8cYjN%2FBijPPzLGzS42E84%2FvlQJMEMylOPFemT%2BAIgFlz4q6ROodmiUJYsnXYYne7MXypufwXVEO3B0jtnPwgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvt3LxVepByXoQaiircA6D4bg9FawPyX3tIbovop8OdcKzBWcWpqOQW95Slt%2Bh2QQxEhR7nFfQ84FEDFSNC1RBvY0I5auDCEjP62rgRv3tACWeCiTK1xPqY8ib18dTnCGJ7KibvUZxEWDM4BJwJyW4du5Bm6Vdrv2DfuEq0rwFoyFyXqdk4UPP8RcMmTo10UefIgaHVmr1o0WJ99Dvbs%2FqJm3WZFubipM3L7xDE2bWUAI%2Bey50KZJH4CwBPdtXSmeJWlNpEFG%2F9e1ckCrAvdihaCOzenazUsdjiEwVcXTE3%2FY2TeJjfDTPnCm521gfiRvhQ07LhMlWIdc6Yn4vIL6c1QqULQCANXh00oUL4fLSBiDNoksHuenWW%2Bgy0zs0%2FKSycjsAT%2FdMKxY9XgwVCh1UTfYAU3KjbecoT5ItCgYV4OrMND7seicS7xTLFgKbZWgmIY9f%2BMEoo0Sx8e7PdcVzcCIrsQXrJr2o5Nmsi7cmE%2B4O8zSFFcglZ4pY67NUZHKlT3mghfm7HunkeX3pw4Wa9gNdEoG6opjU9Rk%2B83mN%2Fmj7V54d3BF3yCLwBb6RVvJZ70xOTFf%2BZ5CzRWdlKiJ%2BYzjH71amAW%2BSU%2F6q5WptRcOMq4YP6MmYU%2Fvo%2BzLGLAhVa1sZ15H2PP4HlMI32zL4GOqUBd%2BCEKKm0KgWNd8jPEBasLL0eynfscR2%2FF%2BMsY9EEnFN71IdXsvIu3foi58ecxknY8PGmcmCQoxqpuNPKaHJLo8uYrQQRXs3uZgAjPiYf%2F5FRdaZSrsXIfxeKb41CTeQtWMBYPZlnliuNFA8OFQ7GnDMLQK21L9js6MPsF07ndQDDnbqfRs9LrVQ1BBougw9TeNUH8ZrHqxZEr2aHpKVfCRqmTilW&X-Amz-Signature=83f0795810d3f91091f53bae6f64ea05ca1efc4f92e775a50d704dc457f83d81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DISNMWH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClFup8cYjN%2FBijPPzLGzS42E84%2FvlQJMEMylOPFemT%2BAIgFlz4q6ROodmiUJYsnXYYne7MXypufwXVEO3B0jtnPwgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvt3LxVepByXoQaiircA6D4bg9FawPyX3tIbovop8OdcKzBWcWpqOQW95Slt%2Bh2QQxEhR7nFfQ84FEDFSNC1RBvY0I5auDCEjP62rgRv3tACWeCiTK1xPqY8ib18dTnCGJ7KibvUZxEWDM4BJwJyW4du5Bm6Vdrv2DfuEq0rwFoyFyXqdk4UPP8RcMmTo10UefIgaHVmr1o0WJ99Dvbs%2FqJm3WZFubipM3L7xDE2bWUAI%2Bey50KZJH4CwBPdtXSmeJWlNpEFG%2F9e1ckCrAvdihaCOzenazUsdjiEwVcXTE3%2FY2TeJjfDTPnCm521gfiRvhQ07LhMlWIdc6Yn4vIL6c1QqULQCANXh00oUL4fLSBiDNoksHuenWW%2Bgy0zs0%2FKSycjsAT%2FdMKxY9XgwVCh1UTfYAU3KjbecoT5ItCgYV4OrMND7seicS7xTLFgKbZWgmIY9f%2BMEoo0Sx8e7PdcVzcCIrsQXrJr2o5Nmsi7cmE%2B4O8zSFFcglZ4pY67NUZHKlT3mghfm7HunkeX3pw4Wa9gNdEoG6opjU9Rk%2B83mN%2Fmj7V54d3BF3yCLwBb6RVvJZ70xOTFf%2BZ5CzRWdlKiJ%2BYzjH71amAW%2BSU%2F6q5WptRcOMq4YP6MmYU%2Fvo%2BzLGLAhVa1sZ15H2PP4HlMI32zL4GOqUBd%2BCEKKm0KgWNd8jPEBasLL0eynfscR2%2FF%2BMsY9EEnFN71IdXsvIu3foi58ecxknY8PGmcmCQoxqpuNPKaHJLo8uYrQQRXs3uZgAjPiYf%2F5FRdaZSrsXIfxeKb41CTeQtWMBYPZlnliuNFA8OFQ7GnDMLQK21L9js6MPsF07ndQDDnbqfRs9LrVQ1BBougw9TeNUH8ZrHqxZEr2aHpKVfCRqmTilW&X-Amz-Signature=a90bb8a923fd7ff46f13162e42fecb3caa4fd52ebf663cf4d08de0381eab9327&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

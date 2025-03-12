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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFOJSN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCkKthuUfe3MLv8KGXMkYGko%2FqbrVtaY4MhdUlv8jPl5wIgDBKzxsvg7v4EgxpjGkUPGUgw6ZSX0JfTApD6g6WwFP4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIS2qeKF04LQv0IJxCrcA2P%2FfIp7oXiQuIaMjOJx%2Fw8Fs9GEEJYtGbzVQOE3z4vgG8Pu7v4%2FLxFWi9tJlBFqOsAeHWAqmpY1Vu%2BJVeloJdpq7tkLAdNZXzZJptxifIb3T7goekOP6dVLmZjID7QRwyYFXUHN5TQpmu%2B88NaMubAQzrsJJkyLEx400%2B3t7S%2F6l1gg2Kxlpvyk2SB7sd%2Bq3M%2BNpMDKMcYWriE6vtkQhSGIseJcLoP83P4WdcT2M0%2Fjl1CppcDZc4PNvvky0YlECdn7lj%2BQ3jpuHvfkT2fJkTQq78iOFInXM7%2F3kb7kYx0SJtptyfiltKGJ3hKzXr2sxx1DYLrA18ot34az6FLS7WPapc%2BRa9BKwKCQddpiazMQgCpSFNrVAasUhh7dvYT%2Bjy0B2x5PBL7y2UYkjzKdVgHWP3a1nf2UfBg3uoX6sqv1LzZWWvanpvwuduAfGqClplFd4Irhlhm25aJ1Ksz7WdBj56zsYuU20MF0WeEeM5C%2Fk8B33tam%2BEXiS1TqhVMU%2BIZUPpMaJ3mylBbtLut4PMrrnSFrulKXSeqvh7Owq7HLCqfuzKfdsE8tWTNv%2BLl0yau4kjqBhcyTHLT2HG4YcY8%2Fe70eLZIBGDrfSWMEnv55Y1pAG8P8iyeLWEo5MJuiyL4GOqUBc2n9W2PcpS5W9n6XzaTngpb7OJ5Mz8jQdPv5tY2o%2B4MDULDpSsR4TptfW7JpzFhyLKF4KQzMIYE%2FNPnz9dRCjQPtXyahnPoGGKPtdX3bBWmXUw5jrQ3pWY8rZexMDthI3BK0N9irJTNlNmAfEqE0gzH5bshcUcrtqPlyYvwcVhAhsf%2BBU4ziw6oBELfjHe6bB%2BBTgw5UfDTy7ts6OvMHH5XmpKpB&X-Amz-Signature=a0d08e69bb8c6f8404bbcf88574744e3b09eb6bf7864306805ebc1be5b8d78a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFOJSN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCkKthuUfe3MLv8KGXMkYGko%2FqbrVtaY4MhdUlv8jPl5wIgDBKzxsvg7v4EgxpjGkUPGUgw6ZSX0JfTApD6g6WwFP4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIS2qeKF04LQv0IJxCrcA2P%2FfIp7oXiQuIaMjOJx%2Fw8Fs9GEEJYtGbzVQOE3z4vgG8Pu7v4%2FLxFWi9tJlBFqOsAeHWAqmpY1Vu%2BJVeloJdpq7tkLAdNZXzZJptxifIb3T7goekOP6dVLmZjID7QRwyYFXUHN5TQpmu%2B88NaMubAQzrsJJkyLEx400%2B3t7S%2F6l1gg2Kxlpvyk2SB7sd%2Bq3M%2BNpMDKMcYWriE6vtkQhSGIseJcLoP83P4WdcT2M0%2Fjl1CppcDZc4PNvvky0YlECdn7lj%2BQ3jpuHvfkT2fJkTQq78iOFInXM7%2F3kb7kYx0SJtptyfiltKGJ3hKzXr2sxx1DYLrA18ot34az6FLS7WPapc%2BRa9BKwKCQddpiazMQgCpSFNrVAasUhh7dvYT%2Bjy0B2x5PBL7y2UYkjzKdVgHWP3a1nf2UfBg3uoX6sqv1LzZWWvanpvwuduAfGqClplFd4Irhlhm25aJ1Ksz7WdBj56zsYuU20MF0WeEeM5C%2Fk8B33tam%2BEXiS1TqhVMU%2BIZUPpMaJ3mylBbtLut4PMrrnSFrulKXSeqvh7Owq7HLCqfuzKfdsE8tWTNv%2BLl0yau4kjqBhcyTHLT2HG4YcY8%2Fe70eLZIBGDrfSWMEnv55Y1pAG8P8iyeLWEo5MJuiyL4GOqUBc2n9W2PcpS5W9n6XzaTngpb7OJ5Mz8jQdPv5tY2o%2B4MDULDpSsR4TptfW7JpzFhyLKF4KQzMIYE%2FNPnz9dRCjQPtXyahnPoGGKPtdX3bBWmXUw5jrQ3pWY8rZexMDthI3BK0N9irJTNlNmAfEqE0gzH5bshcUcrtqPlyYvwcVhAhsf%2BBU4ziw6oBELfjHe6bB%2BBTgw5UfDTy7ts6OvMHH5XmpKpB&X-Amz-Signature=fedffd6d943c742c5bc07487864c3342eb86ae91e2e5cbb53666fdf933329d24&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFOJSN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCkKthuUfe3MLv8KGXMkYGko%2FqbrVtaY4MhdUlv8jPl5wIgDBKzxsvg7v4EgxpjGkUPGUgw6ZSX0JfTApD6g6WwFP4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIS2qeKF04LQv0IJxCrcA2P%2FfIp7oXiQuIaMjOJx%2Fw8Fs9GEEJYtGbzVQOE3z4vgG8Pu7v4%2FLxFWi9tJlBFqOsAeHWAqmpY1Vu%2BJVeloJdpq7tkLAdNZXzZJptxifIb3T7goekOP6dVLmZjID7QRwyYFXUHN5TQpmu%2B88NaMubAQzrsJJkyLEx400%2B3t7S%2F6l1gg2Kxlpvyk2SB7sd%2Bq3M%2BNpMDKMcYWriE6vtkQhSGIseJcLoP83P4WdcT2M0%2Fjl1CppcDZc4PNvvky0YlECdn7lj%2BQ3jpuHvfkT2fJkTQq78iOFInXM7%2F3kb7kYx0SJtptyfiltKGJ3hKzXr2sxx1DYLrA18ot34az6FLS7WPapc%2BRa9BKwKCQddpiazMQgCpSFNrVAasUhh7dvYT%2Bjy0B2x5PBL7y2UYkjzKdVgHWP3a1nf2UfBg3uoX6sqv1LzZWWvanpvwuduAfGqClplFd4Irhlhm25aJ1Ksz7WdBj56zsYuU20MF0WeEeM5C%2Fk8B33tam%2BEXiS1TqhVMU%2BIZUPpMaJ3mylBbtLut4PMrrnSFrulKXSeqvh7Owq7HLCqfuzKfdsE8tWTNv%2BLl0yau4kjqBhcyTHLT2HG4YcY8%2Fe70eLZIBGDrfSWMEnv55Y1pAG8P8iyeLWEo5MJuiyL4GOqUBc2n9W2PcpS5W9n6XzaTngpb7OJ5Mz8jQdPv5tY2o%2B4MDULDpSsR4TptfW7JpzFhyLKF4KQzMIYE%2FNPnz9dRCjQPtXyahnPoGGKPtdX3bBWmXUw5jrQ3pWY8rZexMDthI3BK0N9irJTNlNmAfEqE0gzH5bshcUcrtqPlyYvwcVhAhsf%2BBU4ziw6oBELfjHe6bB%2BBTgw5UfDTy7ts6OvMHH5XmpKpB&X-Amz-Signature=33ffb4b5bce358ff22c64cc89f904b4371bd9c1a4455af9f386d185fe06b3461&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFOJSN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCkKthuUfe3MLv8KGXMkYGko%2FqbrVtaY4MhdUlv8jPl5wIgDBKzxsvg7v4EgxpjGkUPGUgw6ZSX0JfTApD6g6WwFP4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIS2qeKF04LQv0IJxCrcA2P%2FfIp7oXiQuIaMjOJx%2Fw8Fs9GEEJYtGbzVQOE3z4vgG8Pu7v4%2FLxFWi9tJlBFqOsAeHWAqmpY1Vu%2BJVeloJdpq7tkLAdNZXzZJptxifIb3T7goekOP6dVLmZjID7QRwyYFXUHN5TQpmu%2B88NaMubAQzrsJJkyLEx400%2B3t7S%2F6l1gg2Kxlpvyk2SB7sd%2Bq3M%2BNpMDKMcYWriE6vtkQhSGIseJcLoP83P4WdcT2M0%2Fjl1CppcDZc4PNvvky0YlECdn7lj%2BQ3jpuHvfkT2fJkTQq78iOFInXM7%2F3kb7kYx0SJtptyfiltKGJ3hKzXr2sxx1DYLrA18ot34az6FLS7WPapc%2BRa9BKwKCQddpiazMQgCpSFNrVAasUhh7dvYT%2Bjy0B2x5PBL7y2UYkjzKdVgHWP3a1nf2UfBg3uoX6sqv1LzZWWvanpvwuduAfGqClplFd4Irhlhm25aJ1Ksz7WdBj56zsYuU20MF0WeEeM5C%2Fk8B33tam%2BEXiS1TqhVMU%2BIZUPpMaJ3mylBbtLut4PMrrnSFrulKXSeqvh7Owq7HLCqfuzKfdsE8tWTNv%2BLl0yau4kjqBhcyTHLT2HG4YcY8%2Fe70eLZIBGDrfSWMEnv55Y1pAG8P8iyeLWEo5MJuiyL4GOqUBc2n9W2PcpS5W9n6XzaTngpb7OJ5Mz8jQdPv5tY2o%2B4MDULDpSsR4TptfW7JpzFhyLKF4KQzMIYE%2FNPnz9dRCjQPtXyahnPoGGKPtdX3bBWmXUw5jrQ3pWY8rZexMDthI3BK0N9irJTNlNmAfEqE0gzH5bshcUcrtqPlyYvwcVhAhsf%2BBU4ziw6oBELfjHe6bB%2BBTgw5UfDTy7ts6OvMHH5XmpKpB&X-Amz-Signature=6edc02398786c19d4550f458539c6b97843e7510e4d854ecc557fd9db93187a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFOJSN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCkKthuUfe3MLv8KGXMkYGko%2FqbrVtaY4MhdUlv8jPl5wIgDBKzxsvg7v4EgxpjGkUPGUgw6ZSX0JfTApD6g6WwFP4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIS2qeKF04LQv0IJxCrcA2P%2FfIp7oXiQuIaMjOJx%2Fw8Fs9GEEJYtGbzVQOE3z4vgG8Pu7v4%2FLxFWi9tJlBFqOsAeHWAqmpY1Vu%2BJVeloJdpq7tkLAdNZXzZJptxifIb3T7goekOP6dVLmZjID7QRwyYFXUHN5TQpmu%2B88NaMubAQzrsJJkyLEx400%2B3t7S%2F6l1gg2Kxlpvyk2SB7sd%2Bq3M%2BNpMDKMcYWriE6vtkQhSGIseJcLoP83P4WdcT2M0%2Fjl1CppcDZc4PNvvky0YlECdn7lj%2BQ3jpuHvfkT2fJkTQq78iOFInXM7%2F3kb7kYx0SJtptyfiltKGJ3hKzXr2sxx1DYLrA18ot34az6FLS7WPapc%2BRa9BKwKCQddpiazMQgCpSFNrVAasUhh7dvYT%2Bjy0B2x5PBL7y2UYkjzKdVgHWP3a1nf2UfBg3uoX6sqv1LzZWWvanpvwuduAfGqClplFd4Irhlhm25aJ1Ksz7WdBj56zsYuU20MF0WeEeM5C%2Fk8B33tam%2BEXiS1TqhVMU%2BIZUPpMaJ3mylBbtLut4PMrrnSFrulKXSeqvh7Owq7HLCqfuzKfdsE8tWTNv%2BLl0yau4kjqBhcyTHLT2HG4YcY8%2Fe70eLZIBGDrfSWMEnv55Y1pAG8P8iyeLWEo5MJuiyL4GOqUBc2n9W2PcpS5W9n6XzaTngpb7OJ5Mz8jQdPv5tY2o%2B4MDULDpSsR4TptfW7JpzFhyLKF4KQzMIYE%2FNPnz9dRCjQPtXyahnPoGGKPtdX3bBWmXUw5jrQ3pWY8rZexMDthI3BK0N9irJTNlNmAfEqE0gzH5bshcUcrtqPlyYvwcVhAhsf%2BBU4ziw6oBELfjHe6bB%2BBTgw5UfDTy7ts6OvMHH5XmpKpB&X-Amz-Signature=28ddfe77230e160302d6798b83cc16012ff667f945023c4d0ae24384be823d24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFOJSN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCkKthuUfe3MLv8KGXMkYGko%2FqbrVtaY4MhdUlv8jPl5wIgDBKzxsvg7v4EgxpjGkUPGUgw6ZSX0JfTApD6g6WwFP4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIS2qeKF04LQv0IJxCrcA2P%2FfIp7oXiQuIaMjOJx%2Fw8Fs9GEEJYtGbzVQOE3z4vgG8Pu7v4%2FLxFWi9tJlBFqOsAeHWAqmpY1Vu%2BJVeloJdpq7tkLAdNZXzZJptxifIb3T7goekOP6dVLmZjID7QRwyYFXUHN5TQpmu%2B88NaMubAQzrsJJkyLEx400%2B3t7S%2F6l1gg2Kxlpvyk2SB7sd%2Bq3M%2BNpMDKMcYWriE6vtkQhSGIseJcLoP83P4WdcT2M0%2Fjl1CppcDZc4PNvvky0YlECdn7lj%2BQ3jpuHvfkT2fJkTQq78iOFInXM7%2F3kb7kYx0SJtptyfiltKGJ3hKzXr2sxx1DYLrA18ot34az6FLS7WPapc%2BRa9BKwKCQddpiazMQgCpSFNrVAasUhh7dvYT%2Bjy0B2x5PBL7y2UYkjzKdVgHWP3a1nf2UfBg3uoX6sqv1LzZWWvanpvwuduAfGqClplFd4Irhlhm25aJ1Ksz7WdBj56zsYuU20MF0WeEeM5C%2Fk8B33tam%2BEXiS1TqhVMU%2BIZUPpMaJ3mylBbtLut4PMrrnSFrulKXSeqvh7Owq7HLCqfuzKfdsE8tWTNv%2BLl0yau4kjqBhcyTHLT2HG4YcY8%2Fe70eLZIBGDrfSWMEnv55Y1pAG8P8iyeLWEo5MJuiyL4GOqUBc2n9W2PcpS5W9n6XzaTngpb7OJ5Mz8jQdPv5tY2o%2B4MDULDpSsR4TptfW7JpzFhyLKF4KQzMIYE%2FNPnz9dRCjQPtXyahnPoGGKPtdX3bBWmXUw5jrQ3pWY8rZexMDthI3BK0N9irJTNlNmAfEqE0gzH5bshcUcrtqPlyYvwcVhAhsf%2BBU4ziw6oBELfjHe6bB%2BBTgw5UfDTy7ts6OvMHH5XmpKpB&X-Amz-Signature=0f02497e087e27596ffd30818bfa66e357ec1278541a8508af7b4a92196c6f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFOJSN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCkKthuUfe3MLv8KGXMkYGko%2FqbrVtaY4MhdUlv8jPl5wIgDBKzxsvg7v4EgxpjGkUPGUgw6ZSX0JfTApD6g6WwFP4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIS2qeKF04LQv0IJxCrcA2P%2FfIp7oXiQuIaMjOJx%2Fw8Fs9GEEJYtGbzVQOE3z4vgG8Pu7v4%2FLxFWi9tJlBFqOsAeHWAqmpY1Vu%2BJVeloJdpq7tkLAdNZXzZJptxifIb3T7goekOP6dVLmZjID7QRwyYFXUHN5TQpmu%2B88NaMubAQzrsJJkyLEx400%2B3t7S%2F6l1gg2Kxlpvyk2SB7sd%2Bq3M%2BNpMDKMcYWriE6vtkQhSGIseJcLoP83P4WdcT2M0%2Fjl1CppcDZc4PNvvky0YlECdn7lj%2BQ3jpuHvfkT2fJkTQq78iOFInXM7%2F3kb7kYx0SJtptyfiltKGJ3hKzXr2sxx1DYLrA18ot34az6FLS7WPapc%2BRa9BKwKCQddpiazMQgCpSFNrVAasUhh7dvYT%2Bjy0B2x5PBL7y2UYkjzKdVgHWP3a1nf2UfBg3uoX6sqv1LzZWWvanpvwuduAfGqClplFd4Irhlhm25aJ1Ksz7WdBj56zsYuU20MF0WeEeM5C%2Fk8B33tam%2BEXiS1TqhVMU%2BIZUPpMaJ3mylBbtLut4PMrrnSFrulKXSeqvh7Owq7HLCqfuzKfdsE8tWTNv%2BLl0yau4kjqBhcyTHLT2HG4YcY8%2Fe70eLZIBGDrfSWMEnv55Y1pAG8P8iyeLWEo5MJuiyL4GOqUBc2n9W2PcpS5W9n6XzaTngpb7OJ5Mz8jQdPv5tY2o%2B4MDULDpSsR4TptfW7JpzFhyLKF4KQzMIYE%2FNPnz9dRCjQPtXyahnPoGGKPtdX3bBWmXUw5jrQ3pWY8rZexMDthI3BK0N9irJTNlNmAfEqE0gzH5bshcUcrtqPlyYvwcVhAhsf%2BBU4ziw6oBELfjHe6bB%2BBTgw5UfDTy7ts6OvMHH5XmpKpB&X-Amz-Signature=01bade54e5aa63e89cc4b703d088c0e9aac9628f80be2203284d50d3ef2d2f32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFOJSN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCkKthuUfe3MLv8KGXMkYGko%2FqbrVtaY4MhdUlv8jPl5wIgDBKzxsvg7v4EgxpjGkUPGUgw6ZSX0JfTApD6g6WwFP4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIS2qeKF04LQv0IJxCrcA2P%2FfIp7oXiQuIaMjOJx%2Fw8Fs9GEEJYtGbzVQOE3z4vgG8Pu7v4%2FLxFWi9tJlBFqOsAeHWAqmpY1Vu%2BJVeloJdpq7tkLAdNZXzZJptxifIb3T7goekOP6dVLmZjID7QRwyYFXUHN5TQpmu%2B88NaMubAQzrsJJkyLEx400%2B3t7S%2F6l1gg2Kxlpvyk2SB7sd%2Bq3M%2BNpMDKMcYWriE6vtkQhSGIseJcLoP83P4WdcT2M0%2Fjl1CppcDZc4PNvvky0YlECdn7lj%2BQ3jpuHvfkT2fJkTQq78iOFInXM7%2F3kb7kYx0SJtptyfiltKGJ3hKzXr2sxx1DYLrA18ot34az6FLS7WPapc%2BRa9BKwKCQddpiazMQgCpSFNrVAasUhh7dvYT%2Bjy0B2x5PBL7y2UYkjzKdVgHWP3a1nf2UfBg3uoX6sqv1LzZWWvanpvwuduAfGqClplFd4Irhlhm25aJ1Ksz7WdBj56zsYuU20MF0WeEeM5C%2Fk8B33tam%2BEXiS1TqhVMU%2BIZUPpMaJ3mylBbtLut4PMrrnSFrulKXSeqvh7Owq7HLCqfuzKfdsE8tWTNv%2BLl0yau4kjqBhcyTHLT2HG4YcY8%2Fe70eLZIBGDrfSWMEnv55Y1pAG8P8iyeLWEo5MJuiyL4GOqUBc2n9W2PcpS5W9n6XzaTngpb7OJ5Mz8jQdPv5tY2o%2B4MDULDpSsR4TptfW7JpzFhyLKF4KQzMIYE%2FNPnz9dRCjQPtXyahnPoGGKPtdX3bBWmXUw5jrQ3pWY8rZexMDthI3BK0N9irJTNlNmAfEqE0gzH5bshcUcrtqPlyYvwcVhAhsf%2BBU4ziw6oBELfjHe6bB%2BBTgw5UfDTy7ts6OvMHH5XmpKpB&X-Amz-Signature=06fb465ec2ce01d8d1adfff9d65fca036cf00f80be30e9d5becefd91faf47c67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

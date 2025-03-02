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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=d7e451346b84a9dfb556e77382f2e7105b0ce97e59bf45cfb72506d09e54956b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=b48f00064bd112fff8cbb293c6262945ebaa1a7dea0f9e94e46168344402efab&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=3979d319318b4e3b3d04bc0be189be4c8ead15b1080410a85eef9a2c401098a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=4c6c32fa02215f90d1e8c42031e854c0023cd06a0c03c464cdf817e3607feb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=09b741ea9d32f2c6a05a9b39259b2b23cab1e8362d3e4325ae96d25df56836bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=2e6eb7da879cc33085da2ee920dab71ac6c6e893f7d96e52bbdebc17cf517e19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=4295df6a2e79fb0d24467fc5f0bbaad68c2ce21db791b884549ee86c67aa1e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSJLYG4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFdRMcYwOOcoV%2FCJa%2FbtpuX6A23DNT6uMcTNV2B7cSitAiB2bphlls46MN7C2vY8jCd%2BwIU2JeqjcTRFi9%2FSkVTHZSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ub8ChcwMvXSV5byKtwDz%2BuCUh1M8Y%2B%2BUIviiZ3tKxCaYGIJds2gxVUIe9c6rQq7H2yz4Avi5bCoD9bCxFPCBPmHqCq7ODO86HMHzP%2BOOJW2WhwbOiVjpxdmvvOY2iF%2Bj9ahAfk90SCgl1vDGxY81NBSISwqUi72NEKMctVF5W0Z4KC65lBSeZ%2B6694tR6oXH4eOvkmx3s7NHWOqM0Ak%2Bz6rWPzsRtcR3MEjyiZC%2BkFxjOzIvNUUEDrMo6CQEh6lATXwODgaLpYv8SGGO3YTqyKtdvQ%2FMoDGqNhNjrL90qvLBY%2BhP8CzzaDWmD55hniwHEY22ugPFtPLaY4Gko9DGQznmzRD%2FVNM8TWUmqMdTJnTLj5539nL30VWrC2Sp5kXj1lFoG8mDiD4WZrTZV91cjrW3Yg432X3LlFf%2BYBxicMnhT83qvyNhw5tf5zVh60ZBeZTMVe8DQwSk4UIdef5fVZHKryXdWYqT1k2epW9CUsPOCcwZilORtnR%2BWQgB%2FD2g4aGu%2F3tpWw8clgm0LTR9Awy4L6O%2BF7pt4EhiJV0zIYZvv2J3pyN5e%2F67U6a9%2Bz305KqMSk1WCwyo4b4MahOB3oQtpn7UIVNft0T8v%2BaEddLeOPoVH5wAJ9tmPqwexsGZ672K8b11elVqVgw0%2FaOvgY6pgHVwLfxfKSTZGUkInrwKG42RYGjufVDl1H4SpIhmQpE0mqu7ATj9jg7r%2BQ6i1jEtVXtyspyoyPz7N%2FqDYWAHTNJkN4BBP8m%2Bbn7F925nhFLDWhIjjSsJODg8oMAg7jjDY0hHCiH%2FuQnUr%2FamZL0vHWGVMx6JiUZIdQkElrjhTwvIBjYDCNxHdr28uCPEmQ%2FAGwJEWkfnie0wpFlBYgRROQ3lMXk1QTv&X-Amz-Signature=fbd87a1419293bcc27d78739ce64171ecee148e3720082bb79d9534d8e8c6c60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

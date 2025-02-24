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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ILEI5L%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKxjLbVm%2FRpV0Ry2e9vOKYa8KS%2FgzP6CZgZ044BVw7ZAiBKWvqB41Jd8TvRLtwKldSInHNUZwhZO9qrXfgIoVET0ir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKEkjuXWSF7YMyTpiKtwD7O7yuLBK7P4M5%2FrMTo6N8zpd%2BJnKmNa68ID%2FxwDmfBAH1Qrqz2QSloOlT79OpHx9zQIYZntsW4SyTvg2n8B%2FM4yF4ySl8gRePE0vt7LNUdcddEETqgMm%2BOMtf6s7n%2BrUbTxcOa7ng%2B8ZORaDZRIk6zIJAnzOL5dCMVoSz2kw5D9TGfgzOvefJYnsj2KMo8mYlAWv9rzQNx2eETIGexvecHun%2B9Xlcd8D8woOd%2BXKz5kvtJZNkvtIaHEgdOjHB%2Bzu5Da7cDpeeemcXojt%2BuTyoAZuaC7rNbQ0Vmn367Qkp7jCKFgZ9FdVh5Ote%2BWOi9hp8MsaRMY3mo7XgJocBUYpgYieALlc9Mnnj4dIh%2FqvAeoemxlQoFBvGiGPi8RFQ5t8iiCQiy26BDdEaLzLDFqRitYeRkFppAptb6lmVLwyaQ1SKnJ4sy1%2FT%2F2Gj9FVbzkdy7qbNCTc7vEG6XWaUHgsxzVDCBjxwWrDsxwXzow%2Bb7PTp9ghNme3iO%2FE1l17DEoKfNiVyIQbSMcmR6kdyr%2F9WaupYx3%2FoxnWnSa2yE72177Xs3OIZd%2BRPUDxoj06YZX9pO2eipk1ZFe7AfHLAxnsqBpS9G8IVg8bbuI2EccmGusd6A81HKDbgI1Bigow%2Fs7wvQY6pgEefx42Y8RXAz1ILMTXT9MC4nwV2ETDHSWKR11ubHA%2FrmXf2A49%2BprSUJ%2FZam34ka8ANJFNPvHec20odjj2%2BgqbDyZl8T7eRQGDd45gR9ogbc18iTY4Iy%2FODKXMzt7qgAO6tVKsvd65f73uBNCAkgErRL9TMuD%2BTvjFh1Qj23BaT4OrHTA%2FyOJeKHipm3gAZg9AByMMGEFSPRwZmgDy9BL%2FJAp3egxT&X-Amz-Signature=0d3f6e44ac83cad0db37e71845f5a7ffca94ffc8377feb2891b87a1bb80c5232&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ILEI5L%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKxjLbVm%2FRpV0Ry2e9vOKYa8KS%2FgzP6CZgZ044BVw7ZAiBKWvqB41Jd8TvRLtwKldSInHNUZwhZO9qrXfgIoVET0ir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKEkjuXWSF7YMyTpiKtwD7O7yuLBK7P4M5%2FrMTo6N8zpd%2BJnKmNa68ID%2FxwDmfBAH1Qrqz2QSloOlT79OpHx9zQIYZntsW4SyTvg2n8B%2FM4yF4ySl8gRePE0vt7LNUdcddEETqgMm%2BOMtf6s7n%2BrUbTxcOa7ng%2B8ZORaDZRIk6zIJAnzOL5dCMVoSz2kw5D9TGfgzOvefJYnsj2KMo8mYlAWv9rzQNx2eETIGexvecHun%2B9Xlcd8D8woOd%2BXKz5kvtJZNkvtIaHEgdOjHB%2Bzu5Da7cDpeeemcXojt%2BuTyoAZuaC7rNbQ0Vmn367Qkp7jCKFgZ9FdVh5Ote%2BWOi9hp8MsaRMY3mo7XgJocBUYpgYieALlc9Mnnj4dIh%2FqvAeoemxlQoFBvGiGPi8RFQ5t8iiCQiy26BDdEaLzLDFqRitYeRkFppAptb6lmVLwyaQ1SKnJ4sy1%2FT%2F2Gj9FVbzkdy7qbNCTc7vEG6XWaUHgsxzVDCBjxwWrDsxwXzow%2Bb7PTp9ghNme3iO%2FE1l17DEoKfNiVyIQbSMcmR6kdyr%2F9WaupYx3%2FoxnWnSa2yE72177Xs3OIZd%2BRPUDxoj06YZX9pO2eipk1ZFe7AfHLAxnsqBpS9G8IVg8bbuI2EccmGusd6A81HKDbgI1Bigow%2Fs7wvQY6pgEefx42Y8RXAz1ILMTXT9MC4nwV2ETDHSWKR11ubHA%2FrmXf2A49%2BprSUJ%2FZam34ka8ANJFNPvHec20odjj2%2BgqbDyZl8T7eRQGDd45gR9ogbc18iTY4Iy%2FODKXMzt7qgAO6tVKsvd65f73uBNCAkgErRL9TMuD%2BTvjFh1Qj23BaT4OrHTA%2FyOJeKHipm3gAZg9AByMMGEFSPRwZmgDy9BL%2FJAp3egxT&X-Amz-Signature=f8e3edacf42e679472cc614d5b4359311cdc0f81bb7bd2ea245fbe6b69d652f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ILEI5L%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKxjLbVm%2FRpV0Ry2e9vOKYa8KS%2FgzP6CZgZ044BVw7ZAiBKWvqB41Jd8TvRLtwKldSInHNUZwhZO9qrXfgIoVET0ir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKEkjuXWSF7YMyTpiKtwD7O7yuLBK7P4M5%2FrMTo6N8zpd%2BJnKmNa68ID%2FxwDmfBAH1Qrqz2QSloOlT79OpHx9zQIYZntsW4SyTvg2n8B%2FM4yF4ySl8gRePE0vt7LNUdcddEETqgMm%2BOMtf6s7n%2BrUbTxcOa7ng%2B8ZORaDZRIk6zIJAnzOL5dCMVoSz2kw5D9TGfgzOvefJYnsj2KMo8mYlAWv9rzQNx2eETIGexvecHun%2B9Xlcd8D8woOd%2BXKz5kvtJZNkvtIaHEgdOjHB%2Bzu5Da7cDpeeemcXojt%2BuTyoAZuaC7rNbQ0Vmn367Qkp7jCKFgZ9FdVh5Ote%2BWOi9hp8MsaRMY3mo7XgJocBUYpgYieALlc9Mnnj4dIh%2FqvAeoemxlQoFBvGiGPi8RFQ5t8iiCQiy26BDdEaLzLDFqRitYeRkFppAptb6lmVLwyaQ1SKnJ4sy1%2FT%2F2Gj9FVbzkdy7qbNCTc7vEG6XWaUHgsxzVDCBjxwWrDsxwXzow%2Bb7PTp9ghNme3iO%2FE1l17DEoKfNiVyIQbSMcmR6kdyr%2F9WaupYx3%2FoxnWnSa2yE72177Xs3OIZd%2BRPUDxoj06YZX9pO2eipk1ZFe7AfHLAxnsqBpS9G8IVg8bbuI2EccmGusd6A81HKDbgI1Bigow%2Fs7wvQY6pgEefx42Y8RXAz1ILMTXT9MC4nwV2ETDHSWKR11ubHA%2FrmXf2A49%2BprSUJ%2FZam34ka8ANJFNPvHec20odjj2%2BgqbDyZl8T7eRQGDd45gR9ogbc18iTY4Iy%2FODKXMzt7qgAO6tVKsvd65f73uBNCAkgErRL9TMuD%2BTvjFh1Qj23BaT4OrHTA%2FyOJeKHipm3gAZg9AByMMGEFSPRwZmgDy9BL%2FJAp3egxT&X-Amz-Signature=6dbc6b7598e04a527c023f0689c0f446e70dc36100e31b933fc7f6935870700f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ILEI5L%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKxjLbVm%2FRpV0Ry2e9vOKYa8KS%2FgzP6CZgZ044BVw7ZAiBKWvqB41Jd8TvRLtwKldSInHNUZwhZO9qrXfgIoVET0ir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKEkjuXWSF7YMyTpiKtwD7O7yuLBK7P4M5%2FrMTo6N8zpd%2BJnKmNa68ID%2FxwDmfBAH1Qrqz2QSloOlT79OpHx9zQIYZntsW4SyTvg2n8B%2FM4yF4ySl8gRePE0vt7LNUdcddEETqgMm%2BOMtf6s7n%2BrUbTxcOa7ng%2B8ZORaDZRIk6zIJAnzOL5dCMVoSz2kw5D9TGfgzOvefJYnsj2KMo8mYlAWv9rzQNx2eETIGexvecHun%2B9Xlcd8D8woOd%2BXKz5kvtJZNkvtIaHEgdOjHB%2Bzu5Da7cDpeeemcXojt%2BuTyoAZuaC7rNbQ0Vmn367Qkp7jCKFgZ9FdVh5Ote%2BWOi9hp8MsaRMY3mo7XgJocBUYpgYieALlc9Mnnj4dIh%2FqvAeoemxlQoFBvGiGPi8RFQ5t8iiCQiy26BDdEaLzLDFqRitYeRkFppAptb6lmVLwyaQ1SKnJ4sy1%2FT%2F2Gj9FVbzkdy7qbNCTc7vEG6XWaUHgsxzVDCBjxwWrDsxwXzow%2Bb7PTp9ghNme3iO%2FE1l17DEoKfNiVyIQbSMcmR6kdyr%2F9WaupYx3%2FoxnWnSa2yE72177Xs3OIZd%2BRPUDxoj06YZX9pO2eipk1ZFe7AfHLAxnsqBpS9G8IVg8bbuI2EccmGusd6A81HKDbgI1Bigow%2Fs7wvQY6pgEefx42Y8RXAz1ILMTXT9MC4nwV2ETDHSWKR11ubHA%2FrmXf2A49%2BprSUJ%2FZam34ka8ANJFNPvHec20odjj2%2BgqbDyZl8T7eRQGDd45gR9ogbc18iTY4Iy%2FODKXMzt7qgAO6tVKsvd65f73uBNCAkgErRL9TMuD%2BTvjFh1Qj23BaT4OrHTA%2FyOJeKHipm3gAZg9AByMMGEFSPRwZmgDy9BL%2FJAp3egxT&X-Amz-Signature=35fd2aeed06b65d91b3dbe5045f6fafcbd8125b5f9acd4846252b85ce0df09a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ILEI5L%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKxjLbVm%2FRpV0Ry2e9vOKYa8KS%2FgzP6CZgZ044BVw7ZAiBKWvqB41Jd8TvRLtwKldSInHNUZwhZO9qrXfgIoVET0ir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKEkjuXWSF7YMyTpiKtwD7O7yuLBK7P4M5%2FrMTo6N8zpd%2BJnKmNa68ID%2FxwDmfBAH1Qrqz2QSloOlT79OpHx9zQIYZntsW4SyTvg2n8B%2FM4yF4ySl8gRePE0vt7LNUdcddEETqgMm%2BOMtf6s7n%2BrUbTxcOa7ng%2B8ZORaDZRIk6zIJAnzOL5dCMVoSz2kw5D9TGfgzOvefJYnsj2KMo8mYlAWv9rzQNx2eETIGexvecHun%2B9Xlcd8D8woOd%2BXKz5kvtJZNkvtIaHEgdOjHB%2Bzu5Da7cDpeeemcXojt%2BuTyoAZuaC7rNbQ0Vmn367Qkp7jCKFgZ9FdVh5Ote%2BWOi9hp8MsaRMY3mo7XgJocBUYpgYieALlc9Mnnj4dIh%2FqvAeoemxlQoFBvGiGPi8RFQ5t8iiCQiy26BDdEaLzLDFqRitYeRkFppAptb6lmVLwyaQ1SKnJ4sy1%2FT%2F2Gj9FVbzkdy7qbNCTc7vEG6XWaUHgsxzVDCBjxwWrDsxwXzow%2Bb7PTp9ghNme3iO%2FE1l17DEoKfNiVyIQbSMcmR6kdyr%2F9WaupYx3%2FoxnWnSa2yE72177Xs3OIZd%2BRPUDxoj06YZX9pO2eipk1ZFe7AfHLAxnsqBpS9G8IVg8bbuI2EccmGusd6A81HKDbgI1Bigow%2Fs7wvQY6pgEefx42Y8RXAz1ILMTXT9MC4nwV2ETDHSWKR11ubHA%2FrmXf2A49%2BprSUJ%2FZam34ka8ANJFNPvHec20odjj2%2BgqbDyZl8T7eRQGDd45gR9ogbc18iTY4Iy%2FODKXMzt7qgAO6tVKsvd65f73uBNCAkgErRL9TMuD%2BTvjFh1Qj23BaT4OrHTA%2FyOJeKHipm3gAZg9AByMMGEFSPRwZmgDy9BL%2FJAp3egxT&X-Amz-Signature=4cf34462edcb11a976433538f376f8a0cfe9705088f6591a2a493478ee176156&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ILEI5L%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKxjLbVm%2FRpV0Ry2e9vOKYa8KS%2FgzP6CZgZ044BVw7ZAiBKWvqB41Jd8TvRLtwKldSInHNUZwhZO9qrXfgIoVET0ir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKEkjuXWSF7YMyTpiKtwD7O7yuLBK7P4M5%2FrMTo6N8zpd%2BJnKmNa68ID%2FxwDmfBAH1Qrqz2QSloOlT79OpHx9zQIYZntsW4SyTvg2n8B%2FM4yF4ySl8gRePE0vt7LNUdcddEETqgMm%2BOMtf6s7n%2BrUbTxcOa7ng%2B8ZORaDZRIk6zIJAnzOL5dCMVoSz2kw5D9TGfgzOvefJYnsj2KMo8mYlAWv9rzQNx2eETIGexvecHun%2B9Xlcd8D8woOd%2BXKz5kvtJZNkvtIaHEgdOjHB%2Bzu5Da7cDpeeemcXojt%2BuTyoAZuaC7rNbQ0Vmn367Qkp7jCKFgZ9FdVh5Ote%2BWOi9hp8MsaRMY3mo7XgJocBUYpgYieALlc9Mnnj4dIh%2FqvAeoemxlQoFBvGiGPi8RFQ5t8iiCQiy26BDdEaLzLDFqRitYeRkFppAptb6lmVLwyaQ1SKnJ4sy1%2FT%2F2Gj9FVbzkdy7qbNCTc7vEG6XWaUHgsxzVDCBjxwWrDsxwXzow%2Bb7PTp9ghNme3iO%2FE1l17DEoKfNiVyIQbSMcmR6kdyr%2F9WaupYx3%2FoxnWnSa2yE72177Xs3OIZd%2BRPUDxoj06YZX9pO2eipk1ZFe7AfHLAxnsqBpS9G8IVg8bbuI2EccmGusd6A81HKDbgI1Bigow%2Fs7wvQY6pgEefx42Y8RXAz1ILMTXT9MC4nwV2ETDHSWKR11ubHA%2FrmXf2A49%2BprSUJ%2FZam34ka8ANJFNPvHec20odjj2%2BgqbDyZl8T7eRQGDd45gR9ogbc18iTY4Iy%2FODKXMzt7qgAO6tVKsvd65f73uBNCAkgErRL9TMuD%2BTvjFh1Qj23BaT4OrHTA%2FyOJeKHipm3gAZg9AByMMGEFSPRwZmgDy9BL%2FJAp3egxT&X-Amz-Signature=e8ad228723eb60a24f75ffa004a457c1eb1d5c3d3e30535d07b52767095b2652&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ILEI5L%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKxjLbVm%2FRpV0Ry2e9vOKYa8KS%2FgzP6CZgZ044BVw7ZAiBKWvqB41Jd8TvRLtwKldSInHNUZwhZO9qrXfgIoVET0ir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKEkjuXWSF7YMyTpiKtwD7O7yuLBK7P4M5%2FrMTo6N8zpd%2BJnKmNa68ID%2FxwDmfBAH1Qrqz2QSloOlT79OpHx9zQIYZntsW4SyTvg2n8B%2FM4yF4ySl8gRePE0vt7LNUdcddEETqgMm%2BOMtf6s7n%2BrUbTxcOa7ng%2B8ZORaDZRIk6zIJAnzOL5dCMVoSz2kw5D9TGfgzOvefJYnsj2KMo8mYlAWv9rzQNx2eETIGexvecHun%2B9Xlcd8D8woOd%2BXKz5kvtJZNkvtIaHEgdOjHB%2Bzu5Da7cDpeeemcXojt%2BuTyoAZuaC7rNbQ0Vmn367Qkp7jCKFgZ9FdVh5Ote%2BWOi9hp8MsaRMY3mo7XgJocBUYpgYieALlc9Mnnj4dIh%2FqvAeoemxlQoFBvGiGPi8RFQ5t8iiCQiy26BDdEaLzLDFqRitYeRkFppAptb6lmVLwyaQ1SKnJ4sy1%2FT%2F2Gj9FVbzkdy7qbNCTc7vEG6XWaUHgsxzVDCBjxwWrDsxwXzow%2Bb7PTp9ghNme3iO%2FE1l17DEoKfNiVyIQbSMcmR6kdyr%2F9WaupYx3%2FoxnWnSa2yE72177Xs3OIZd%2BRPUDxoj06YZX9pO2eipk1ZFe7AfHLAxnsqBpS9G8IVg8bbuI2EccmGusd6A81HKDbgI1Bigow%2Fs7wvQY6pgEefx42Y8RXAz1ILMTXT9MC4nwV2ETDHSWKR11ubHA%2FrmXf2A49%2BprSUJ%2FZam34ka8ANJFNPvHec20odjj2%2BgqbDyZl8T7eRQGDd45gR9ogbc18iTY4Iy%2FODKXMzt7qgAO6tVKsvd65f73uBNCAkgErRL9TMuD%2BTvjFh1Qj23BaT4OrHTA%2FyOJeKHipm3gAZg9AByMMGEFSPRwZmgDy9BL%2FJAp3egxT&X-Amz-Signature=7f1c2e34641531be6505d0c06f5f51e8532ea7e4335a2196e92c1343778a4c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ILEI5L%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKxjLbVm%2FRpV0Ry2e9vOKYa8KS%2FgzP6CZgZ044BVw7ZAiBKWvqB41Jd8TvRLtwKldSInHNUZwhZO9qrXfgIoVET0ir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKEkjuXWSF7YMyTpiKtwD7O7yuLBK7P4M5%2FrMTo6N8zpd%2BJnKmNa68ID%2FxwDmfBAH1Qrqz2QSloOlT79OpHx9zQIYZntsW4SyTvg2n8B%2FM4yF4ySl8gRePE0vt7LNUdcddEETqgMm%2BOMtf6s7n%2BrUbTxcOa7ng%2B8ZORaDZRIk6zIJAnzOL5dCMVoSz2kw5D9TGfgzOvefJYnsj2KMo8mYlAWv9rzQNx2eETIGexvecHun%2B9Xlcd8D8woOd%2BXKz5kvtJZNkvtIaHEgdOjHB%2Bzu5Da7cDpeeemcXojt%2BuTyoAZuaC7rNbQ0Vmn367Qkp7jCKFgZ9FdVh5Ote%2BWOi9hp8MsaRMY3mo7XgJocBUYpgYieALlc9Mnnj4dIh%2FqvAeoemxlQoFBvGiGPi8RFQ5t8iiCQiy26BDdEaLzLDFqRitYeRkFppAptb6lmVLwyaQ1SKnJ4sy1%2FT%2F2Gj9FVbzkdy7qbNCTc7vEG6XWaUHgsxzVDCBjxwWrDsxwXzow%2Bb7PTp9ghNme3iO%2FE1l17DEoKfNiVyIQbSMcmR6kdyr%2F9WaupYx3%2FoxnWnSa2yE72177Xs3OIZd%2BRPUDxoj06YZX9pO2eipk1ZFe7AfHLAxnsqBpS9G8IVg8bbuI2EccmGusd6A81HKDbgI1Bigow%2Fs7wvQY6pgEefx42Y8RXAz1ILMTXT9MC4nwV2ETDHSWKR11ubHA%2FrmXf2A49%2BprSUJ%2FZam34ka8ANJFNPvHec20odjj2%2BgqbDyZl8T7eRQGDd45gR9ogbc18iTY4Iy%2FODKXMzt7qgAO6tVKsvd65f73uBNCAkgErRL9TMuD%2BTvjFh1Qj23BaT4OrHTA%2FyOJeKHipm3gAZg9AByMMGEFSPRwZmgDy9BL%2FJAp3egxT&X-Amz-Signature=2e095ec5c56adf1a3ba1f3b6b47f06f15665838fd46e41c4eadf1a40d7e9301f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

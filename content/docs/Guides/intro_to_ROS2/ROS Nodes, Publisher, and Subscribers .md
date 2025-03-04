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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDME6P7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCVDEMFPETMsXbn3w07B2niIyPDrP3D9EhWGVjzLQDXAiA%2FGviK8XZtjF6zTiYSbtLAupm6zXHaT%2FtTTTiesQiYJyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2FD3Pafnt6cNhjkEKtwDxEeFz6AhhIcclBYS8SuW58jI8qZSnluYQEit4PHCrl7hHHUq%2Bd%2BsMW8rL4FJG8a0t2Uf5AxYd%2B4oqO3c37o9hxNriKJYXBSaRrSuTjKIMWV9A2paXc6OWHOyznFVhFHo5m4qDvfVDUXdIprgagbGeEm8OTxITpkIFv0k1DNMEvG5bfsDI0MwkXr%2B%2B1cvj6QMrW1olF21iDiueP%2F2iv3EZOOoVtS7zntjjfaAa%2BSU7ZxriAw72o94p6qFBf8SlaU9yYAXDe7aDs1SBjXiRCPbU%2FhIFea4HzbHtGR%2FuliINIMmP2N6D%2F2Hm99F32Hxiru60WLLcb1qyiLPrRWHr7hz6mE5ZzWHhoMo1zsJdj8mPyv4r6bwud2cojcbXMra%2BCIdstT%2B3yaV7uzJeN6ASkv0PdVpzvwYyHVPQavyS23x%2Bq6Z6B1gKDVqOYifqe%2FfpQSrdBcw4J0DVf2YfW0HaSyVB6HPS1pkezigTtLzN5t32Glpoo%2BmBbZPC3FN8%2Fbi27%2FUlQ%2B7FCZRcB996KUgPNNpqRqCYvGRoDXh2EH1Dcr7L9ST4og8hjQO8xCULVAd5zK74fU0vmClBRbjabut9U3eDetzjdTHWKbveASNx0%2FlOpsjTYd6FVm%2Bz9ffx30wluKavgY6pgG7VE8DHG4FD3zlJexQJfWELmaXwWq4Sghi6a02dmMTC6i5HCBFozGm0yLN76wEUNgd%2BPVU%2Blf4X7kQvjrQU9jfRYKgHnuZB7M0OGs0OvBxGJYyL75F0BKyhq2Rb1mDtUj9szMIwzlfWqqu5Ajg4dcrn1wgXGy48PtAet9WKts6Uq1dvdWKafp9p76tdGkF6R30TccbbQE%2BvtsfoKhV%2B4y38yFt%2FUTH&X-Amz-Signature=5f25f802dbbd4ef171fae0d4ec7e8428ad66ea8bda52514af0c91ebb484e0210&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDME6P7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCVDEMFPETMsXbn3w07B2niIyPDrP3D9EhWGVjzLQDXAiA%2FGviK8XZtjF6zTiYSbtLAupm6zXHaT%2FtTTTiesQiYJyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2FD3Pafnt6cNhjkEKtwDxEeFz6AhhIcclBYS8SuW58jI8qZSnluYQEit4PHCrl7hHHUq%2Bd%2BsMW8rL4FJG8a0t2Uf5AxYd%2B4oqO3c37o9hxNriKJYXBSaRrSuTjKIMWV9A2paXc6OWHOyznFVhFHo5m4qDvfVDUXdIprgagbGeEm8OTxITpkIFv0k1DNMEvG5bfsDI0MwkXr%2B%2B1cvj6QMrW1olF21iDiueP%2F2iv3EZOOoVtS7zntjjfaAa%2BSU7ZxriAw72o94p6qFBf8SlaU9yYAXDe7aDs1SBjXiRCPbU%2FhIFea4HzbHtGR%2FuliINIMmP2N6D%2F2Hm99F32Hxiru60WLLcb1qyiLPrRWHr7hz6mE5ZzWHhoMo1zsJdj8mPyv4r6bwud2cojcbXMra%2BCIdstT%2B3yaV7uzJeN6ASkv0PdVpzvwYyHVPQavyS23x%2Bq6Z6B1gKDVqOYifqe%2FfpQSrdBcw4J0DVf2YfW0HaSyVB6HPS1pkezigTtLzN5t32Glpoo%2BmBbZPC3FN8%2Fbi27%2FUlQ%2B7FCZRcB996KUgPNNpqRqCYvGRoDXh2EH1Dcr7L9ST4og8hjQO8xCULVAd5zK74fU0vmClBRbjabut9U3eDetzjdTHWKbveASNx0%2FlOpsjTYd6FVm%2Bz9ffx30wluKavgY6pgG7VE8DHG4FD3zlJexQJfWELmaXwWq4Sghi6a02dmMTC6i5HCBFozGm0yLN76wEUNgd%2BPVU%2Blf4X7kQvjrQU9jfRYKgHnuZB7M0OGs0OvBxGJYyL75F0BKyhq2Rb1mDtUj9szMIwzlfWqqu5Ajg4dcrn1wgXGy48PtAet9WKts6Uq1dvdWKafp9p76tdGkF6R30TccbbQE%2BvtsfoKhV%2B4y38yFt%2FUTH&X-Amz-Signature=8668654b19dcf8a3c5412d1cf9743ec36bb410fe09439efbf4d5b4fe688dfeb5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDME6P7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCVDEMFPETMsXbn3w07B2niIyPDrP3D9EhWGVjzLQDXAiA%2FGviK8XZtjF6zTiYSbtLAupm6zXHaT%2FtTTTiesQiYJyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2FD3Pafnt6cNhjkEKtwDxEeFz6AhhIcclBYS8SuW58jI8qZSnluYQEit4PHCrl7hHHUq%2Bd%2BsMW8rL4FJG8a0t2Uf5AxYd%2B4oqO3c37o9hxNriKJYXBSaRrSuTjKIMWV9A2paXc6OWHOyznFVhFHo5m4qDvfVDUXdIprgagbGeEm8OTxITpkIFv0k1DNMEvG5bfsDI0MwkXr%2B%2B1cvj6QMrW1olF21iDiueP%2F2iv3EZOOoVtS7zntjjfaAa%2BSU7ZxriAw72o94p6qFBf8SlaU9yYAXDe7aDs1SBjXiRCPbU%2FhIFea4HzbHtGR%2FuliINIMmP2N6D%2F2Hm99F32Hxiru60WLLcb1qyiLPrRWHr7hz6mE5ZzWHhoMo1zsJdj8mPyv4r6bwud2cojcbXMra%2BCIdstT%2B3yaV7uzJeN6ASkv0PdVpzvwYyHVPQavyS23x%2Bq6Z6B1gKDVqOYifqe%2FfpQSrdBcw4J0DVf2YfW0HaSyVB6HPS1pkezigTtLzN5t32Glpoo%2BmBbZPC3FN8%2Fbi27%2FUlQ%2B7FCZRcB996KUgPNNpqRqCYvGRoDXh2EH1Dcr7L9ST4og8hjQO8xCULVAd5zK74fU0vmClBRbjabut9U3eDetzjdTHWKbveASNx0%2FlOpsjTYd6FVm%2Bz9ffx30wluKavgY6pgG7VE8DHG4FD3zlJexQJfWELmaXwWq4Sghi6a02dmMTC6i5HCBFozGm0yLN76wEUNgd%2BPVU%2Blf4X7kQvjrQU9jfRYKgHnuZB7M0OGs0OvBxGJYyL75F0BKyhq2Rb1mDtUj9szMIwzlfWqqu5Ajg4dcrn1wgXGy48PtAet9WKts6Uq1dvdWKafp9p76tdGkF6R30TccbbQE%2BvtsfoKhV%2B4y38yFt%2FUTH&X-Amz-Signature=f47a49dbc4128fd0b30bf02b839d86e1f3b40601ed7d7563775d998df38224f9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDME6P7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCVDEMFPETMsXbn3w07B2niIyPDrP3D9EhWGVjzLQDXAiA%2FGviK8XZtjF6zTiYSbtLAupm6zXHaT%2FtTTTiesQiYJyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2FD3Pafnt6cNhjkEKtwDxEeFz6AhhIcclBYS8SuW58jI8qZSnluYQEit4PHCrl7hHHUq%2Bd%2BsMW8rL4FJG8a0t2Uf5AxYd%2B4oqO3c37o9hxNriKJYXBSaRrSuTjKIMWV9A2paXc6OWHOyznFVhFHo5m4qDvfVDUXdIprgagbGeEm8OTxITpkIFv0k1DNMEvG5bfsDI0MwkXr%2B%2B1cvj6QMrW1olF21iDiueP%2F2iv3EZOOoVtS7zntjjfaAa%2BSU7ZxriAw72o94p6qFBf8SlaU9yYAXDe7aDs1SBjXiRCPbU%2FhIFea4HzbHtGR%2FuliINIMmP2N6D%2F2Hm99F32Hxiru60WLLcb1qyiLPrRWHr7hz6mE5ZzWHhoMo1zsJdj8mPyv4r6bwud2cojcbXMra%2BCIdstT%2B3yaV7uzJeN6ASkv0PdVpzvwYyHVPQavyS23x%2Bq6Z6B1gKDVqOYifqe%2FfpQSrdBcw4J0DVf2YfW0HaSyVB6HPS1pkezigTtLzN5t32Glpoo%2BmBbZPC3FN8%2Fbi27%2FUlQ%2B7FCZRcB996KUgPNNpqRqCYvGRoDXh2EH1Dcr7L9ST4og8hjQO8xCULVAd5zK74fU0vmClBRbjabut9U3eDetzjdTHWKbveASNx0%2FlOpsjTYd6FVm%2Bz9ffx30wluKavgY6pgG7VE8DHG4FD3zlJexQJfWELmaXwWq4Sghi6a02dmMTC6i5HCBFozGm0yLN76wEUNgd%2BPVU%2Blf4X7kQvjrQU9jfRYKgHnuZB7M0OGs0OvBxGJYyL75F0BKyhq2Rb1mDtUj9szMIwzlfWqqu5Ajg4dcrn1wgXGy48PtAet9WKts6Uq1dvdWKafp9p76tdGkF6R30TccbbQE%2BvtsfoKhV%2B4y38yFt%2FUTH&X-Amz-Signature=0537f39051cf55dc70868e345a26e2c711a76c6ab66432c3d13678fc970d733d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDME6P7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCVDEMFPETMsXbn3w07B2niIyPDrP3D9EhWGVjzLQDXAiA%2FGviK8XZtjF6zTiYSbtLAupm6zXHaT%2FtTTTiesQiYJyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2FD3Pafnt6cNhjkEKtwDxEeFz6AhhIcclBYS8SuW58jI8qZSnluYQEit4PHCrl7hHHUq%2Bd%2BsMW8rL4FJG8a0t2Uf5AxYd%2B4oqO3c37o9hxNriKJYXBSaRrSuTjKIMWV9A2paXc6OWHOyznFVhFHo5m4qDvfVDUXdIprgagbGeEm8OTxITpkIFv0k1DNMEvG5bfsDI0MwkXr%2B%2B1cvj6QMrW1olF21iDiueP%2F2iv3EZOOoVtS7zntjjfaAa%2BSU7ZxriAw72o94p6qFBf8SlaU9yYAXDe7aDs1SBjXiRCPbU%2FhIFea4HzbHtGR%2FuliINIMmP2N6D%2F2Hm99F32Hxiru60WLLcb1qyiLPrRWHr7hz6mE5ZzWHhoMo1zsJdj8mPyv4r6bwud2cojcbXMra%2BCIdstT%2B3yaV7uzJeN6ASkv0PdVpzvwYyHVPQavyS23x%2Bq6Z6B1gKDVqOYifqe%2FfpQSrdBcw4J0DVf2YfW0HaSyVB6HPS1pkezigTtLzN5t32Glpoo%2BmBbZPC3FN8%2Fbi27%2FUlQ%2B7FCZRcB996KUgPNNpqRqCYvGRoDXh2EH1Dcr7L9ST4og8hjQO8xCULVAd5zK74fU0vmClBRbjabut9U3eDetzjdTHWKbveASNx0%2FlOpsjTYd6FVm%2Bz9ffx30wluKavgY6pgG7VE8DHG4FD3zlJexQJfWELmaXwWq4Sghi6a02dmMTC6i5HCBFozGm0yLN76wEUNgd%2BPVU%2Blf4X7kQvjrQU9jfRYKgHnuZB7M0OGs0OvBxGJYyL75F0BKyhq2Rb1mDtUj9szMIwzlfWqqu5Ajg4dcrn1wgXGy48PtAet9WKts6Uq1dvdWKafp9p76tdGkF6R30TccbbQE%2BvtsfoKhV%2B4y38yFt%2FUTH&X-Amz-Signature=6def2d4eac55765d4a8e8392a7bf0816dd785d0a5f3a49e3e4953dd08e1bdaac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDME6P7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCVDEMFPETMsXbn3w07B2niIyPDrP3D9EhWGVjzLQDXAiA%2FGviK8XZtjF6zTiYSbtLAupm6zXHaT%2FtTTTiesQiYJyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2FD3Pafnt6cNhjkEKtwDxEeFz6AhhIcclBYS8SuW58jI8qZSnluYQEit4PHCrl7hHHUq%2Bd%2BsMW8rL4FJG8a0t2Uf5AxYd%2B4oqO3c37o9hxNriKJYXBSaRrSuTjKIMWV9A2paXc6OWHOyznFVhFHo5m4qDvfVDUXdIprgagbGeEm8OTxITpkIFv0k1DNMEvG5bfsDI0MwkXr%2B%2B1cvj6QMrW1olF21iDiueP%2F2iv3EZOOoVtS7zntjjfaAa%2BSU7ZxriAw72o94p6qFBf8SlaU9yYAXDe7aDs1SBjXiRCPbU%2FhIFea4HzbHtGR%2FuliINIMmP2N6D%2F2Hm99F32Hxiru60WLLcb1qyiLPrRWHr7hz6mE5ZzWHhoMo1zsJdj8mPyv4r6bwud2cojcbXMra%2BCIdstT%2B3yaV7uzJeN6ASkv0PdVpzvwYyHVPQavyS23x%2Bq6Z6B1gKDVqOYifqe%2FfpQSrdBcw4J0DVf2YfW0HaSyVB6HPS1pkezigTtLzN5t32Glpoo%2BmBbZPC3FN8%2Fbi27%2FUlQ%2B7FCZRcB996KUgPNNpqRqCYvGRoDXh2EH1Dcr7L9ST4og8hjQO8xCULVAd5zK74fU0vmClBRbjabut9U3eDetzjdTHWKbveASNx0%2FlOpsjTYd6FVm%2Bz9ffx30wluKavgY6pgG7VE8DHG4FD3zlJexQJfWELmaXwWq4Sghi6a02dmMTC6i5HCBFozGm0yLN76wEUNgd%2BPVU%2Blf4X7kQvjrQU9jfRYKgHnuZB7M0OGs0OvBxGJYyL75F0BKyhq2Rb1mDtUj9szMIwzlfWqqu5Ajg4dcrn1wgXGy48PtAet9WKts6Uq1dvdWKafp9p76tdGkF6R30TccbbQE%2BvtsfoKhV%2B4y38yFt%2FUTH&X-Amz-Signature=3296286a9958be4d393c2887e1affbe55060d663762ec80861a045f2b248b63b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDME6P7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCVDEMFPETMsXbn3w07B2niIyPDrP3D9EhWGVjzLQDXAiA%2FGviK8XZtjF6zTiYSbtLAupm6zXHaT%2FtTTTiesQiYJyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2FD3Pafnt6cNhjkEKtwDxEeFz6AhhIcclBYS8SuW58jI8qZSnluYQEit4PHCrl7hHHUq%2Bd%2BsMW8rL4FJG8a0t2Uf5AxYd%2B4oqO3c37o9hxNriKJYXBSaRrSuTjKIMWV9A2paXc6OWHOyznFVhFHo5m4qDvfVDUXdIprgagbGeEm8OTxITpkIFv0k1DNMEvG5bfsDI0MwkXr%2B%2B1cvj6QMrW1olF21iDiueP%2F2iv3EZOOoVtS7zntjjfaAa%2BSU7ZxriAw72o94p6qFBf8SlaU9yYAXDe7aDs1SBjXiRCPbU%2FhIFea4HzbHtGR%2FuliINIMmP2N6D%2F2Hm99F32Hxiru60WLLcb1qyiLPrRWHr7hz6mE5ZzWHhoMo1zsJdj8mPyv4r6bwud2cojcbXMra%2BCIdstT%2B3yaV7uzJeN6ASkv0PdVpzvwYyHVPQavyS23x%2Bq6Z6B1gKDVqOYifqe%2FfpQSrdBcw4J0DVf2YfW0HaSyVB6HPS1pkezigTtLzN5t32Glpoo%2BmBbZPC3FN8%2Fbi27%2FUlQ%2B7FCZRcB996KUgPNNpqRqCYvGRoDXh2EH1Dcr7L9ST4og8hjQO8xCULVAd5zK74fU0vmClBRbjabut9U3eDetzjdTHWKbveASNx0%2FlOpsjTYd6FVm%2Bz9ffx30wluKavgY6pgG7VE8DHG4FD3zlJexQJfWELmaXwWq4Sghi6a02dmMTC6i5HCBFozGm0yLN76wEUNgd%2BPVU%2Blf4X7kQvjrQU9jfRYKgHnuZB7M0OGs0OvBxGJYyL75F0BKyhq2Rb1mDtUj9szMIwzlfWqqu5Ajg4dcrn1wgXGy48PtAet9WKts6Uq1dvdWKafp9p76tdGkF6R30TccbbQE%2BvtsfoKhV%2B4y38yFt%2FUTH&X-Amz-Signature=2f6b35f5d5bba3694a47219797594b122ed11fc2031f77e1f44ee1e8ab1f41e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDME6P7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCVDEMFPETMsXbn3w07B2niIyPDrP3D9EhWGVjzLQDXAiA%2FGviK8XZtjF6zTiYSbtLAupm6zXHaT%2FtTTTiesQiYJyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR%2FD3Pafnt6cNhjkEKtwDxEeFz6AhhIcclBYS8SuW58jI8qZSnluYQEit4PHCrl7hHHUq%2Bd%2BsMW8rL4FJG8a0t2Uf5AxYd%2B4oqO3c37o9hxNriKJYXBSaRrSuTjKIMWV9A2paXc6OWHOyznFVhFHo5m4qDvfVDUXdIprgagbGeEm8OTxITpkIFv0k1DNMEvG5bfsDI0MwkXr%2B%2B1cvj6QMrW1olF21iDiueP%2F2iv3EZOOoVtS7zntjjfaAa%2BSU7ZxriAw72o94p6qFBf8SlaU9yYAXDe7aDs1SBjXiRCPbU%2FhIFea4HzbHtGR%2FuliINIMmP2N6D%2F2Hm99F32Hxiru60WLLcb1qyiLPrRWHr7hz6mE5ZzWHhoMo1zsJdj8mPyv4r6bwud2cojcbXMra%2BCIdstT%2B3yaV7uzJeN6ASkv0PdVpzvwYyHVPQavyS23x%2Bq6Z6B1gKDVqOYifqe%2FfpQSrdBcw4J0DVf2YfW0HaSyVB6HPS1pkezigTtLzN5t32Glpoo%2BmBbZPC3FN8%2Fbi27%2FUlQ%2B7FCZRcB996KUgPNNpqRqCYvGRoDXh2EH1Dcr7L9ST4og8hjQO8xCULVAd5zK74fU0vmClBRbjabut9U3eDetzjdTHWKbveASNx0%2FlOpsjTYd6FVm%2Bz9ffx30wluKavgY6pgG7VE8DHG4FD3zlJexQJfWELmaXwWq4Sghi6a02dmMTC6i5HCBFozGm0yLN76wEUNgd%2BPVU%2Blf4X7kQvjrQU9jfRYKgHnuZB7M0OGs0OvBxGJYyL75F0BKyhq2Rb1mDtUj9szMIwzlfWqqu5Ajg4dcrn1wgXGy48PtAet9WKts6Uq1dvdWKafp9p76tdGkF6R30TccbbQE%2BvtsfoKhV%2B4y38yFt%2FUTH&X-Amz-Signature=277714833bab57064bca27950172b4f053ba74aa792c4fa2a978a3979686749d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

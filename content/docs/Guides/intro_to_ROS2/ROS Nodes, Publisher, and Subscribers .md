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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTB7HX2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFVD3URFPj9hDJnJ2tM9LyLQF%2Bo0KmFwrrmYhiMpDgcCAiAYzdogWLKHH7SrxxF%2BSbF8V5IVagir3DZlvDhIJi222yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRMHtfhCvpByF24fKtwDL%2BfjeNpFRKQzGgG1u23gUNs8iVDT5riLBiduGU1JRt3nlxDphDgZsCgpyhE1T8ZvMSDJ8WcTTvan6ERXf0p0ly0QBuHIso35pDqaVLu5YWO9ZOk%2BPFwJWB3tGgGE20Am2SxsJETN4V8SCqNqAwbmuLnstI%2BgZREARMNSDJd8psxrK%2FA8sKygK14DMLIuJnaFJIIacDVORBws%2F%2BdO7Ag3xQKMu%2F6iu3mv15VU8kYr7RKiBfDMCZv1iNlGeQ6Vz8W9XXbn5ZiNxedyKbK66q1PQHAVtKkO%2FpJcyLoChyrQrgURHEV66M38VduRCftnGcGnhjGVX8t0VuLoZbQtM%2B2gMCG9b7LgcaY%2FOA3qkRod9fHvU3haN50mzKRJm8hErQLJqgqaxDsyy6WSjHfAcWXN6x4OVxOoi1TGZ%2Fn9TfCv7uZg6nNaLeUVWeg1ADfk%2BmpZzNF2DC%2FrOiJsaU0SQFRfz7qSXnuw9JgxlDP0n7AtQyiukwP5BxPSS3Fj8IYQMK%2BjUo%2FEc9bhfi9p5wfySdWfZas0OPKj43N63AEeN7yT%2Bl6QyfrDBsBkoubp5JsHnbTmUGWFKkApTdaogPTrLTnRhcUEDZsUQHezWBxtx9Fj0kbQQbwOd5TDN6IycPIw1Ir%2FwAY6pgGy7yUA6HumYLb2i2z8Ucxpd7WrjQvxjoM16DZoRnLwuq8VWZ8KqyOcj4HhNHF%2BEEvQl%2Bz2VRRDQakBsbh4hTyr85Fxpq6W8T7UjIj%2F%2FOYtndhfcsW%2F0MDmQmO61NkLpYZoj7LBEzSzcQ1qM54vjYU%2BnZIXpSx8r16xkH%2B7jPb8zjF2ULuA%2FQ4duK0UJbRUlqHz8G7D4OCnmuNT%2B8wSQC90Dw8jZAq8&X-Amz-Signature=ead91f928ffb4652b616c4f97a5784ef226d7fd18af6f73437768dca315ca957&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTB7HX2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFVD3URFPj9hDJnJ2tM9LyLQF%2Bo0KmFwrrmYhiMpDgcCAiAYzdogWLKHH7SrxxF%2BSbF8V5IVagir3DZlvDhIJi222yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRMHtfhCvpByF24fKtwDL%2BfjeNpFRKQzGgG1u23gUNs8iVDT5riLBiduGU1JRt3nlxDphDgZsCgpyhE1T8ZvMSDJ8WcTTvan6ERXf0p0ly0QBuHIso35pDqaVLu5YWO9ZOk%2BPFwJWB3tGgGE20Am2SxsJETN4V8SCqNqAwbmuLnstI%2BgZREARMNSDJd8psxrK%2FA8sKygK14DMLIuJnaFJIIacDVORBws%2F%2BdO7Ag3xQKMu%2F6iu3mv15VU8kYr7RKiBfDMCZv1iNlGeQ6Vz8W9XXbn5ZiNxedyKbK66q1PQHAVtKkO%2FpJcyLoChyrQrgURHEV66M38VduRCftnGcGnhjGVX8t0VuLoZbQtM%2B2gMCG9b7LgcaY%2FOA3qkRod9fHvU3haN50mzKRJm8hErQLJqgqaxDsyy6WSjHfAcWXN6x4OVxOoi1TGZ%2Fn9TfCv7uZg6nNaLeUVWeg1ADfk%2BmpZzNF2DC%2FrOiJsaU0SQFRfz7qSXnuw9JgxlDP0n7AtQyiukwP5BxPSS3Fj8IYQMK%2BjUo%2FEc9bhfi9p5wfySdWfZas0OPKj43N63AEeN7yT%2Bl6QyfrDBsBkoubp5JsHnbTmUGWFKkApTdaogPTrLTnRhcUEDZsUQHezWBxtx9Fj0kbQQbwOd5TDN6IycPIw1Ir%2FwAY6pgGy7yUA6HumYLb2i2z8Ucxpd7WrjQvxjoM16DZoRnLwuq8VWZ8KqyOcj4HhNHF%2BEEvQl%2Bz2VRRDQakBsbh4hTyr85Fxpq6W8T7UjIj%2F%2FOYtndhfcsW%2F0MDmQmO61NkLpYZoj7LBEzSzcQ1qM54vjYU%2BnZIXpSx8r16xkH%2B7jPb8zjF2ULuA%2FQ4duK0UJbRUlqHz8G7D4OCnmuNT%2B8wSQC90Dw8jZAq8&X-Amz-Signature=a38bbd5177f0e61fa0cb5304f9340791e686c1a4de810a24ced393780c37d744&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTB7HX2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFVD3URFPj9hDJnJ2tM9LyLQF%2Bo0KmFwrrmYhiMpDgcCAiAYzdogWLKHH7SrxxF%2BSbF8V5IVagir3DZlvDhIJi222yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRMHtfhCvpByF24fKtwDL%2BfjeNpFRKQzGgG1u23gUNs8iVDT5riLBiduGU1JRt3nlxDphDgZsCgpyhE1T8ZvMSDJ8WcTTvan6ERXf0p0ly0QBuHIso35pDqaVLu5YWO9ZOk%2BPFwJWB3tGgGE20Am2SxsJETN4V8SCqNqAwbmuLnstI%2BgZREARMNSDJd8psxrK%2FA8sKygK14DMLIuJnaFJIIacDVORBws%2F%2BdO7Ag3xQKMu%2F6iu3mv15VU8kYr7RKiBfDMCZv1iNlGeQ6Vz8W9XXbn5ZiNxedyKbK66q1PQHAVtKkO%2FpJcyLoChyrQrgURHEV66M38VduRCftnGcGnhjGVX8t0VuLoZbQtM%2B2gMCG9b7LgcaY%2FOA3qkRod9fHvU3haN50mzKRJm8hErQLJqgqaxDsyy6WSjHfAcWXN6x4OVxOoi1TGZ%2Fn9TfCv7uZg6nNaLeUVWeg1ADfk%2BmpZzNF2DC%2FrOiJsaU0SQFRfz7qSXnuw9JgxlDP0n7AtQyiukwP5BxPSS3Fj8IYQMK%2BjUo%2FEc9bhfi9p5wfySdWfZas0OPKj43N63AEeN7yT%2Bl6QyfrDBsBkoubp5JsHnbTmUGWFKkApTdaogPTrLTnRhcUEDZsUQHezWBxtx9Fj0kbQQbwOd5TDN6IycPIw1Ir%2FwAY6pgGy7yUA6HumYLb2i2z8Ucxpd7WrjQvxjoM16DZoRnLwuq8VWZ8KqyOcj4HhNHF%2BEEvQl%2Bz2VRRDQakBsbh4hTyr85Fxpq6W8T7UjIj%2F%2FOYtndhfcsW%2F0MDmQmO61NkLpYZoj7LBEzSzcQ1qM54vjYU%2BnZIXpSx8r16xkH%2B7jPb8zjF2ULuA%2FQ4duK0UJbRUlqHz8G7D4OCnmuNT%2B8wSQC90Dw8jZAq8&X-Amz-Signature=3d65ade2e1324a3dd075b5dae659e889e7d243d94c1e937c3c88a5a169c96805&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTB7HX2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFVD3URFPj9hDJnJ2tM9LyLQF%2Bo0KmFwrrmYhiMpDgcCAiAYzdogWLKHH7SrxxF%2BSbF8V5IVagir3DZlvDhIJi222yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRMHtfhCvpByF24fKtwDL%2BfjeNpFRKQzGgG1u23gUNs8iVDT5riLBiduGU1JRt3nlxDphDgZsCgpyhE1T8ZvMSDJ8WcTTvan6ERXf0p0ly0QBuHIso35pDqaVLu5YWO9ZOk%2BPFwJWB3tGgGE20Am2SxsJETN4V8SCqNqAwbmuLnstI%2BgZREARMNSDJd8psxrK%2FA8sKygK14DMLIuJnaFJIIacDVORBws%2F%2BdO7Ag3xQKMu%2F6iu3mv15VU8kYr7RKiBfDMCZv1iNlGeQ6Vz8W9XXbn5ZiNxedyKbK66q1PQHAVtKkO%2FpJcyLoChyrQrgURHEV66M38VduRCftnGcGnhjGVX8t0VuLoZbQtM%2B2gMCG9b7LgcaY%2FOA3qkRod9fHvU3haN50mzKRJm8hErQLJqgqaxDsyy6WSjHfAcWXN6x4OVxOoi1TGZ%2Fn9TfCv7uZg6nNaLeUVWeg1ADfk%2BmpZzNF2DC%2FrOiJsaU0SQFRfz7qSXnuw9JgxlDP0n7AtQyiukwP5BxPSS3Fj8IYQMK%2BjUo%2FEc9bhfi9p5wfySdWfZas0OPKj43N63AEeN7yT%2Bl6QyfrDBsBkoubp5JsHnbTmUGWFKkApTdaogPTrLTnRhcUEDZsUQHezWBxtx9Fj0kbQQbwOd5TDN6IycPIw1Ir%2FwAY6pgGy7yUA6HumYLb2i2z8Ucxpd7WrjQvxjoM16DZoRnLwuq8VWZ8KqyOcj4HhNHF%2BEEvQl%2Bz2VRRDQakBsbh4hTyr85Fxpq6W8T7UjIj%2F%2FOYtndhfcsW%2F0MDmQmO61NkLpYZoj7LBEzSzcQ1qM54vjYU%2BnZIXpSx8r16xkH%2B7jPb8zjF2ULuA%2FQ4duK0UJbRUlqHz8G7D4OCnmuNT%2B8wSQC90Dw8jZAq8&X-Amz-Signature=87a3525b6f864acc781e5ed67d7738d415b3782a1fd2dbaf509474364f8c8a87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTB7HX2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFVD3URFPj9hDJnJ2tM9LyLQF%2Bo0KmFwrrmYhiMpDgcCAiAYzdogWLKHH7SrxxF%2BSbF8V5IVagir3DZlvDhIJi222yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRMHtfhCvpByF24fKtwDL%2BfjeNpFRKQzGgG1u23gUNs8iVDT5riLBiduGU1JRt3nlxDphDgZsCgpyhE1T8ZvMSDJ8WcTTvan6ERXf0p0ly0QBuHIso35pDqaVLu5YWO9ZOk%2BPFwJWB3tGgGE20Am2SxsJETN4V8SCqNqAwbmuLnstI%2BgZREARMNSDJd8psxrK%2FA8sKygK14DMLIuJnaFJIIacDVORBws%2F%2BdO7Ag3xQKMu%2F6iu3mv15VU8kYr7RKiBfDMCZv1iNlGeQ6Vz8W9XXbn5ZiNxedyKbK66q1PQHAVtKkO%2FpJcyLoChyrQrgURHEV66M38VduRCftnGcGnhjGVX8t0VuLoZbQtM%2B2gMCG9b7LgcaY%2FOA3qkRod9fHvU3haN50mzKRJm8hErQLJqgqaxDsyy6WSjHfAcWXN6x4OVxOoi1TGZ%2Fn9TfCv7uZg6nNaLeUVWeg1ADfk%2BmpZzNF2DC%2FrOiJsaU0SQFRfz7qSXnuw9JgxlDP0n7AtQyiukwP5BxPSS3Fj8IYQMK%2BjUo%2FEc9bhfi9p5wfySdWfZas0OPKj43N63AEeN7yT%2Bl6QyfrDBsBkoubp5JsHnbTmUGWFKkApTdaogPTrLTnRhcUEDZsUQHezWBxtx9Fj0kbQQbwOd5TDN6IycPIw1Ir%2FwAY6pgGy7yUA6HumYLb2i2z8Ucxpd7WrjQvxjoM16DZoRnLwuq8VWZ8KqyOcj4HhNHF%2BEEvQl%2Bz2VRRDQakBsbh4hTyr85Fxpq6W8T7UjIj%2F%2FOYtndhfcsW%2F0MDmQmO61NkLpYZoj7LBEzSzcQ1qM54vjYU%2BnZIXpSx8r16xkH%2B7jPb8zjF2ULuA%2FQ4duK0UJbRUlqHz8G7D4OCnmuNT%2B8wSQC90Dw8jZAq8&X-Amz-Signature=ad0f0418764f19c95509f6dc6f522267f5d86822834911e32e9385244b81df0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTB7HX2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFVD3URFPj9hDJnJ2tM9LyLQF%2Bo0KmFwrrmYhiMpDgcCAiAYzdogWLKHH7SrxxF%2BSbF8V5IVagir3DZlvDhIJi222yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRMHtfhCvpByF24fKtwDL%2BfjeNpFRKQzGgG1u23gUNs8iVDT5riLBiduGU1JRt3nlxDphDgZsCgpyhE1T8ZvMSDJ8WcTTvan6ERXf0p0ly0QBuHIso35pDqaVLu5YWO9ZOk%2BPFwJWB3tGgGE20Am2SxsJETN4V8SCqNqAwbmuLnstI%2BgZREARMNSDJd8psxrK%2FA8sKygK14DMLIuJnaFJIIacDVORBws%2F%2BdO7Ag3xQKMu%2F6iu3mv15VU8kYr7RKiBfDMCZv1iNlGeQ6Vz8W9XXbn5ZiNxedyKbK66q1PQHAVtKkO%2FpJcyLoChyrQrgURHEV66M38VduRCftnGcGnhjGVX8t0VuLoZbQtM%2B2gMCG9b7LgcaY%2FOA3qkRod9fHvU3haN50mzKRJm8hErQLJqgqaxDsyy6WSjHfAcWXN6x4OVxOoi1TGZ%2Fn9TfCv7uZg6nNaLeUVWeg1ADfk%2BmpZzNF2DC%2FrOiJsaU0SQFRfz7qSXnuw9JgxlDP0n7AtQyiukwP5BxPSS3Fj8IYQMK%2BjUo%2FEc9bhfi9p5wfySdWfZas0OPKj43N63AEeN7yT%2Bl6QyfrDBsBkoubp5JsHnbTmUGWFKkApTdaogPTrLTnRhcUEDZsUQHezWBxtx9Fj0kbQQbwOd5TDN6IycPIw1Ir%2FwAY6pgGy7yUA6HumYLb2i2z8Ucxpd7WrjQvxjoM16DZoRnLwuq8VWZ8KqyOcj4HhNHF%2BEEvQl%2Bz2VRRDQakBsbh4hTyr85Fxpq6W8T7UjIj%2F%2FOYtndhfcsW%2F0MDmQmO61NkLpYZoj7LBEzSzcQ1qM54vjYU%2BnZIXpSx8r16xkH%2B7jPb8zjF2ULuA%2FQ4duK0UJbRUlqHz8G7D4OCnmuNT%2B8wSQC90Dw8jZAq8&X-Amz-Signature=b259839d826b6003e04b95ae3ccf8bf1607186276100ccd38a6f1d5db7479ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTB7HX2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFVD3URFPj9hDJnJ2tM9LyLQF%2Bo0KmFwrrmYhiMpDgcCAiAYzdogWLKHH7SrxxF%2BSbF8V5IVagir3DZlvDhIJi222yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRMHtfhCvpByF24fKtwDL%2BfjeNpFRKQzGgG1u23gUNs8iVDT5riLBiduGU1JRt3nlxDphDgZsCgpyhE1T8ZvMSDJ8WcTTvan6ERXf0p0ly0QBuHIso35pDqaVLu5YWO9ZOk%2BPFwJWB3tGgGE20Am2SxsJETN4V8SCqNqAwbmuLnstI%2BgZREARMNSDJd8psxrK%2FA8sKygK14DMLIuJnaFJIIacDVORBws%2F%2BdO7Ag3xQKMu%2F6iu3mv15VU8kYr7RKiBfDMCZv1iNlGeQ6Vz8W9XXbn5ZiNxedyKbK66q1PQHAVtKkO%2FpJcyLoChyrQrgURHEV66M38VduRCftnGcGnhjGVX8t0VuLoZbQtM%2B2gMCG9b7LgcaY%2FOA3qkRod9fHvU3haN50mzKRJm8hErQLJqgqaxDsyy6WSjHfAcWXN6x4OVxOoi1TGZ%2Fn9TfCv7uZg6nNaLeUVWeg1ADfk%2BmpZzNF2DC%2FrOiJsaU0SQFRfz7qSXnuw9JgxlDP0n7AtQyiukwP5BxPSS3Fj8IYQMK%2BjUo%2FEc9bhfi9p5wfySdWfZas0OPKj43N63AEeN7yT%2Bl6QyfrDBsBkoubp5JsHnbTmUGWFKkApTdaogPTrLTnRhcUEDZsUQHezWBxtx9Fj0kbQQbwOd5TDN6IycPIw1Ir%2FwAY6pgGy7yUA6HumYLb2i2z8Ucxpd7WrjQvxjoM16DZoRnLwuq8VWZ8KqyOcj4HhNHF%2BEEvQl%2Bz2VRRDQakBsbh4hTyr85Fxpq6W8T7UjIj%2F%2FOYtndhfcsW%2F0MDmQmO61NkLpYZoj7LBEzSzcQ1qM54vjYU%2BnZIXpSx8r16xkH%2B7jPb8zjF2ULuA%2FQ4duK0UJbRUlqHz8G7D4OCnmuNT%2B8wSQC90Dw8jZAq8&X-Amz-Signature=1e2fac5ef77306dee9b70a64fe4fcc6c9a5c6ad6cbcaf6b1b99ad48054105bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTB7HX2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFVD3URFPj9hDJnJ2tM9LyLQF%2Bo0KmFwrrmYhiMpDgcCAiAYzdogWLKHH7SrxxF%2BSbF8V5IVagir3DZlvDhIJi222yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRMHtfhCvpByF24fKtwDL%2BfjeNpFRKQzGgG1u23gUNs8iVDT5riLBiduGU1JRt3nlxDphDgZsCgpyhE1T8ZvMSDJ8WcTTvan6ERXf0p0ly0QBuHIso35pDqaVLu5YWO9ZOk%2BPFwJWB3tGgGE20Am2SxsJETN4V8SCqNqAwbmuLnstI%2BgZREARMNSDJd8psxrK%2FA8sKygK14DMLIuJnaFJIIacDVORBws%2F%2BdO7Ag3xQKMu%2F6iu3mv15VU8kYr7RKiBfDMCZv1iNlGeQ6Vz8W9XXbn5ZiNxedyKbK66q1PQHAVtKkO%2FpJcyLoChyrQrgURHEV66M38VduRCftnGcGnhjGVX8t0VuLoZbQtM%2B2gMCG9b7LgcaY%2FOA3qkRod9fHvU3haN50mzKRJm8hErQLJqgqaxDsyy6WSjHfAcWXN6x4OVxOoi1TGZ%2Fn9TfCv7uZg6nNaLeUVWeg1ADfk%2BmpZzNF2DC%2FrOiJsaU0SQFRfz7qSXnuw9JgxlDP0n7AtQyiukwP5BxPSS3Fj8IYQMK%2BjUo%2FEc9bhfi9p5wfySdWfZas0OPKj43N63AEeN7yT%2Bl6QyfrDBsBkoubp5JsHnbTmUGWFKkApTdaogPTrLTnRhcUEDZsUQHezWBxtx9Fj0kbQQbwOd5TDN6IycPIw1Ir%2FwAY6pgGy7yUA6HumYLb2i2z8Ucxpd7WrjQvxjoM16DZoRnLwuq8VWZ8KqyOcj4HhNHF%2BEEvQl%2Bz2VRRDQakBsbh4hTyr85Fxpq6W8T7UjIj%2F%2FOYtndhfcsW%2F0MDmQmO61NkLpYZoj7LBEzSzcQ1qM54vjYU%2BnZIXpSx8r16xkH%2B7jPb8zjF2ULuA%2FQ4duK0UJbRUlqHz8G7D4OCnmuNT%2B8wSQC90Dw8jZAq8&X-Amz-Signature=5ce03e6334f6d073ed03062facca09409becca0922f463d5b502c0fdaca8e378&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

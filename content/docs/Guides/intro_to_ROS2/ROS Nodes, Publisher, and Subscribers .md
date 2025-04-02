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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEXJSIV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFNEfY3zbdXwJAxeoGD94VPVJnkJWecZwk4%2BeOYAXJjVAiAMICWhZJJwYETbTn4xLz6l6qYepRqSXvI9o0kBV4w24CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0KCZal%2FdLpCrMGFKtwDwowaPeqdwB3u2THLJBJBEZN%2FbdIoXEPOdiL1DgU8yNHb3vZN2w3fcbrJXA0Sk61hqQ91LzYSh9AJONwVgXfrexkQrWRgiSnu4dCRM7gAvwwpG0PEh8aYkX08wfS6l5ophnqK2O0uhwITyl2jgJywWsuIPzqKgzW%2BpaOPAhactaoV0aMkNQQ8iypnXgdj1C8Y5VFfCF2RRfG3ERcqO2vKCPcfzdAIEkJhMzSrLS9AsYJldd5gpZEBE0JHE7TSeSbwP4Vmbn0AwlA49z0J%2FXO20xsXFTl%2BxqjbKDIF%2BbvoO6qC1%2BPAW%2BFduM9H3ayP5oBXyjHbnoHwxugMorJDFXE9C5ukhN2l6tkCVBGTb87uMOcNjk58jXeoHHbBVu0CMWPfVtwyj0ChHU15HrU53XNF9D6J8QB1ViWgA5%2B31wdlNv8P2qSb5QcBhvHqslGUf7yOLyZgiKEZPeYX7l2i%2FQmnZnk9E0Ws6yKTrUfBiDb%2FhylZ13avfB28iURHgmQucGcUJkq1NXJVMlAZLQCYyl6eGfF2dMr1ijO2I31mhZD5lcyj5G3SnXQlIDRD6G%2Ben58Q5R6VWGNQj2O1pkyUZiXTmZb2R6MnPMi%2BnJFsipxqB4Q5uwteR6sXCSdCYJcw6te2vwY6pgGlAR8IIVfyFcn28LszoJW0T4A%2FSalW6FO%2FHAGTrbpez0p%2Fxp80hhSOZvjBmeYV1W23RxjBRei1sFLeZ%2F2s2mTJYwo3dKy8%2FJ%2F0s4RpAbHL5SRkCFkWGZ0cgnnNopwQw%2FIV6OD2UF6w19lAu0TjdxGBwYCB4M3gJpa0e8BAvGtglQ6VmKjIL9b5aUFL9yHBiAa6is07N7AjSubEH%2FJsXrUGGYwXV0La&X-Amz-Signature=813dba0edb2b9cb489371e765336ac7d786f0517a96a1955494afbcad7611a13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEXJSIV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFNEfY3zbdXwJAxeoGD94VPVJnkJWecZwk4%2BeOYAXJjVAiAMICWhZJJwYETbTn4xLz6l6qYepRqSXvI9o0kBV4w24CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0KCZal%2FdLpCrMGFKtwDwowaPeqdwB3u2THLJBJBEZN%2FbdIoXEPOdiL1DgU8yNHb3vZN2w3fcbrJXA0Sk61hqQ91LzYSh9AJONwVgXfrexkQrWRgiSnu4dCRM7gAvwwpG0PEh8aYkX08wfS6l5ophnqK2O0uhwITyl2jgJywWsuIPzqKgzW%2BpaOPAhactaoV0aMkNQQ8iypnXgdj1C8Y5VFfCF2RRfG3ERcqO2vKCPcfzdAIEkJhMzSrLS9AsYJldd5gpZEBE0JHE7TSeSbwP4Vmbn0AwlA49z0J%2FXO20xsXFTl%2BxqjbKDIF%2BbvoO6qC1%2BPAW%2BFduM9H3ayP5oBXyjHbnoHwxugMorJDFXE9C5ukhN2l6tkCVBGTb87uMOcNjk58jXeoHHbBVu0CMWPfVtwyj0ChHU15HrU53XNF9D6J8QB1ViWgA5%2B31wdlNv8P2qSb5QcBhvHqslGUf7yOLyZgiKEZPeYX7l2i%2FQmnZnk9E0Ws6yKTrUfBiDb%2FhylZ13avfB28iURHgmQucGcUJkq1NXJVMlAZLQCYyl6eGfF2dMr1ijO2I31mhZD5lcyj5G3SnXQlIDRD6G%2Ben58Q5R6VWGNQj2O1pkyUZiXTmZb2R6MnPMi%2BnJFsipxqB4Q5uwteR6sXCSdCYJcw6te2vwY6pgGlAR8IIVfyFcn28LszoJW0T4A%2FSalW6FO%2FHAGTrbpez0p%2Fxp80hhSOZvjBmeYV1W23RxjBRei1sFLeZ%2F2s2mTJYwo3dKy8%2FJ%2F0s4RpAbHL5SRkCFkWGZ0cgnnNopwQw%2FIV6OD2UF6w19lAu0TjdxGBwYCB4M3gJpa0e8BAvGtglQ6VmKjIL9b5aUFL9yHBiAa6is07N7AjSubEH%2FJsXrUGGYwXV0La&X-Amz-Signature=f778670575f2d2d607e42cdb20ad9d4204acae79a0dd3745280f9590cd9f45c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEXJSIV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFNEfY3zbdXwJAxeoGD94VPVJnkJWecZwk4%2BeOYAXJjVAiAMICWhZJJwYETbTn4xLz6l6qYepRqSXvI9o0kBV4w24CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0KCZal%2FdLpCrMGFKtwDwowaPeqdwB3u2THLJBJBEZN%2FbdIoXEPOdiL1DgU8yNHb3vZN2w3fcbrJXA0Sk61hqQ91LzYSh9AJONwVgXfrexkQrWRgiSnu4dCRM7gAvwwpG0PEh8aYkX08wfS6l5ophnqK2O0uhwITyl2jgJywWsuIPzqKgzW%2BpaOPAhactaoV0aMkNQQ8iypnXgdj1C8Y5VFfCF2RRfG3ERcqO2vKCPcfzdAIEkJhMzSrLS9AsYJldd5gpZEBE0JHE7TSeSbwP4Vmbn0AwlA49z0J%2FXO20xsXFTl%2BxqjbKDIF%2BbvoO6qC1%2BPAW%2BFduM9H3ayP5oBXyjHbnoHwxugMorJDFXE9C5ukhN2l6tkCVBGTb87uMOcNjk58jXeoHHbBVu0CMWPfVtwyj0ChHU15HrU53XNF9D6J8QB1ViWgA5%2B31wdlNv8P2qSb5QcBhvHqslGUf7yOLyZgiKEZPeYX7l2i%2FQmnZnk9E0Ws6yKTrUfBiDb%2FhylZ13avfB28iURHgmQucGcUJkq1NXJVMlAZLQCYyl6eGfF2dMr1ijO2I31mhZD5lcyj5G3SnXQlIDRD6G%2Ben58Q5R6VWGNQj2O1pkyUZiXTmZb2R6MnPMi%2BnJFsipxqB4Q5uwteR6sXCSdCYJcw6te2vwY6pgGlAR8IIVfyFcn28LszoJW0T4A%2FSalW6FO%2FHAGTrbpez0p%2Fxp80hhSOZvjBmeYV1W23RxjBRei1sFLeZ%2F2s2mTJYwo3dKy8%2FJ%2F0s4RpAbHL5SRkCFkWGZ0cgnnNopwQw%2FIV6OD2UF6w19lAu0TjdxGBwYCB4M3gJpa0e8BAvGtglQ6VmKjIL9b5aUFL9yHBiAa6is07N7AjSubEH%2FJsXrUGGYwXV0La&X-Amz-Signature=e1dacdb3ec71a14357d4299db43cb3d7f86ead623cc91e7f560cbe6c01eed7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEXJSIV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFNEfY3zbdXwJAxeoGD94VPVJnkJWecZwk4%2BeOYAXJjVAiAMICWhZJJwYETbTn4xLz6l6qYepRqSXvI9o0kBV4w24CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0KCZal%2FdLpCrMGFKtwDwowaPeqdwB3u2THLJBJBEZN%2FbdIoXEPOdiL1DgU8yNHb3vZN2w3fcbrJXA0Sk61hqQ91LzYSh9AJONwVgXfrexkQrWRgiSnu4dCRM7gAvwwpG0PEh8aYkX08wfS6l5ophnqK2O0uhwITyl2jgJywWsuIPzqKgzW%2BpaOPAhactaoV0aMkNQQ8iypnXgdj1C8Y5VFfCF2RRfG3ERcqO2vKCPcfzdAIEkJhMzSrLS9AsYJldd5gpZEBE0JHE7TSeSbwP4Vmbn0AwlA49z0J%2FXO20xsXFTl%2BxqjbKDIF%2BbvoO6qC1%2BPAW%2BFduM9H3ayP5oBXyjHbnoHwxugMorJDFXE9C5ukhN2l6tkCVBGTb87uMOcNjk58jXeoHHbBVu0CMWPfVtwyj0ChHU15HrU53XNF9D6J8QB1ViWgA5%2B31wdlNv8P2qSb5QcBhvHqslGUf7yOLyZgiKEZPeYX7l2i%2FQmnZnk9E0Ws6yKTrUfBiDb%2FhylZ13avfB28iURHgmQucGcUJkq1NXJVMlAZLQCYyl6eGfF2dMr1ijO2I31mhZD5lcyj5G3SnXQlIDRD6G%2Ben58Q5R6VWGNQj2O1pkyUZiXTmZb2R6MnPMi%2BnJFsipxqB4Q5uwteR6sXCSdCYJcw6te2vwY6pgGlAR8IIVfyFcn28LszoJW0T4A%2FSalW6FO%2FHAGTrbpez0p%2Fxp80hhSOZvjBmeYV1W23RxjBRei1sFLeZ%2F2s2mTJYwo3dKy8%2FJ%2F0s4RpAbHL5SRkCFkWGZ0cgnnNopwQw%2FIV6OD2UF6w19lAu0TjdxGBwYCB4M3gJpa0e8BAvGtglQ6VmKjIL9b5aUFL9yHBiAa6is07N7AjSubEH%2FJsXrUGGYwXV0La&X-Amz-Signature=3b5ed0c7913c065fc2eeea045814adca878f383ce99e4a2b4d5b073175e4fe91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEXJSIV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFNEfY3zbdXwJAxeoGD94VPVJnkJWecZwk4%2BeOYAXJjVAiAMICWhZJJwYETbTn4xLz6l6qYepRqSXvI9o0kBV4w24CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0KCZal%2FdLpCrMGFKtwDwowaPeqdwB3u2THLJBJBEZN%2FbdIoXEPOdiL1DgU8yNHb3vZN2w3fcbrJXA0Sk61hqQ91LzYSh9AJONwVgXfrexkQrWRgiSnu4dCRM7gAvwwpG0PEh8aYkX08wfS6l5ophnqK2O0uhwITyl2jgJywWsuIPzqKgzW%2BpaOPAhactaoV0aMkNQQ8iypnXgdj1C8Y5VFfCF2RRfG3ERcqO2vKCPcfzdAIEkJhMzSrLS9AsYJldd5gpZEBE0JHE7TSeSbwP4Vmbn0AwlA49z0J%2FXO20xsXFTl%2BxqjbKDIF%2BbvoO6qC1%2BPAW%2BFduM9H3ayP5oBXyjHbnoHwxugMorJDFXE9C5ukhN2l6tkCVBGTb87uMOcNjk58jXeoHHbBVu0CMWPfVtwyj0ChHU15HrU53XNF9D6J8QB1ViWgA5%2B31wdlNv8P2qSb5QcBhvHqslGUf7yOLyZgiKEZPeYX7l2i%2FQmnZnk9E0Ws6yKTrUfBiDb%2FhylZ13avfB28iURHgmQucGcUJkq1NXJVMlAZLQCYyl6eGfF2dMr1ijO2I31mhZD5lcyj5G3SnXQlIDRD6G%2Ben58Q5R6VWGNQj2O1pkyUZiXTmZb2R6MnPMi%2BnJFsipxqB4Q5uwteR6sXCSdCYJcw6te2vwY6pgGlAR8IIVfyFcn28LszoJW0T4A%2FSalW6FO%2FHAGTrbpez0p%2Fxp80hhSOZvjBmeYV1W23RxjBRei1sFLeZ%2F2s2mTJYwo3dKy8%2FJ%2F0s4RpAbHL5SRkCFkWGZ0cgnnNopwQw%2FIV6OD2UF6w19lAu0TjdxGBwYCB4M3gJpa0e8BAvGtglQ6VmKjIL9b5aUFL9yHBiAa6is07N7AjSubEH%2FJsXrUGGYwXV0La&X-Amz-Signature=9d8fd7128b0bc17b08c69001dce8d1efde07b7ea8449c71a0d805c678c09ad6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEXJSIV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFNEfY3zbdXwJAxeoGD94VPVJnkJWecZwk4%2BeOYAXJjVAiAMICWhZJJwYETbTn4xLz6l6qYepRqSXvI9o0kBV4w24CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0KCZal%2FdLpCrMGFKtwDwowaPeqdwB3u2THLJBJBEZN%2FbdIoXEPOdiL1DgU8yNHb3vZN2w3fcbrJXA0Sk61hqQ91LzYSh9AJONwVgXfrexkQrWRgiSnu4dCRM7gAvwwpG0PEh8aYkX08wfS6l5ophnqK2O0uhwITyl2jgJywWsuIPzqKgzW%2BpaOPAhactaoV0aMkNQQ8iypnXgdj1C8Y5VFfCF2RRfG3ERcqO2vKCPcfzdAIEkJhMzSrLS9AsYJldd5gpZEBE0JHE7TSeSbwP4Vmbn0AwlA49z0J%2FXO20xsXFTl%2BxqjbKDIF%2BbvoO6qC1%2BPAW%2BFduM9H3ayP5oBXyjHbnoHwxugMorJDFXE9C5ukhN2l6tkCVBGTb87uMOcNjk58jXeoHHbBVu0CMWPfVtwyj0ChHU15HrU53XNF9D6J8QB1ViWgA5%2B31wdlNv8P2qSb5QcBhvHqslGUf7yOLyZgiKEZPeYX7l2i%2FQmnZnk9E0Ws6yKTrUfBiDb%2FhylZ13avfB28iURHgmQucGcUJkq1NXJVMlAZLQCYyl6eGfF2dMr1ijO2I31mhZD5lcyj5G3SnXQlIDRD6G%2Ben58Q5R6VWGNQj2O1pkyUZiXTmZb2R6MnPMi%2BnJFsipxqB4Q5uwteR6sXCSdCYJcw6te2vwY6pgGlAR8IIVfyFcn28LszoJW0T4A%2FSalW6FO%2FHAGTrbpez0p%2Fxp80hhSOZvjBmeYV1W23RxjBRei1sFLeZ%2F2s2mTJYwo3dKy8%2FJ%2F0s4RpAbHL5SRkCFkWGZ0cgnnNopwQw%2FIV6OD2UF6w19lAu0TjdxGBwYCB4M3gJpa0e8BAvGtglQ6VmKjIL9b5aUFL9yHBiAa6is07N7AjSubEH%2FJsXrUGGYwXV0La&X-Amz-Signature=cd8987139c2ac4486aa77cf826201159bdb5b25208a79f6328857e3f6404b003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEXJSIV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFNEfY3zbdXwJAxeoGD94VPVJnkJWecZwk4%2BeOYAXJjVAiAMICWhZJJwYETbTn4xLz6l6qYepRqSXvI9o0kBV4w24CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0KCZal%2FdLpCrMGFKtwDwowaPeqdwB3u2THLJBJBEZN%2FbdIoXEPOdiL1DgU8yNHb3vZN2w3fcbrJXA0Sk61hqQ91LzYSh9AJONwVgXfrexkQrWRgiSnu4dCRM7gAvwwpG0PEh8aYkX08wfS6l5ophnqK2O0uhwITyl2jgJywWsuIPzqKgzW%2BpaOPAhactaoV0aMkNQQ8iypnXgdj1C8Y5VFfCF2RRfG3ERcqO2vKCPcfzdAIEkJhMzSrLS9AsYJldd5gpZEBE0JHE7TSeSbwP4Vmbn0AwlA49z0J%2FXO20xsXFTl%2BxqjbKDIF%2BbvoO6qC1%2BPAW%2BFduM9H3ayP5oBXyjHbnoHwxugMorJDFXE9C5ukhN2l6tkCVBGTb87uMOcNjk58jXeoHHbBVu0CMWPfVtwyj0ChHU15HrU53XNF9D6J8QB1ViWgA5%2B31wdlNv8P2qSb5QcBhvHqslGUf7yOLyZgiKEZPeYX7l2i%2FQmnZnk9E0Ws6yKTrUfBiDb%2FhylZ13avfB28iURHgmQucGcUJkq1NXJVMlAZLQCYyl6eGfF2dMr1ijO2I31mhZD5lcyj5G3SnXQlIDRD6G%2Ben58Q5R6VWGNQj2O1pkyUZiXTmZb2R6MnPMi%2BnJFsipxqB4Q5uwteR6sXCSdCYJcw6te2vwY6pgGlAR8IIVfyFcn28LszoJW0T4A%2FSalW6FO%2FHAGTrbpez0p%2Fxp80hhSOZvjBmeYV1W23RxjBRei1sFLeZ%2F2s2mTJYwo3dKy8%2FJ%2F0s4RpAbHL5SRkCFkWGZ0cgnnNopwQw%2FIV6OD2UF6w19lAu0TjdxGBwYCB4M3gJpa0e8BAvGtglQ6VmKjIL9b5aUFL9yHBiAa6is07N7AjSubEH%2FJsXrUGGYwXV0La&X-Amz-Signature=7567fadbaefbd9e5ebc08c1ee17d9f3d594a4997485f6bc0eabc937d364651e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBEXJSIV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFNEfY3zbdXwJAxeoGD94VPVJnkJWecZwk4%2BeOYAXJjVAiAMICWhZJJwYETbTn4xLz6l6qYepRqSXvI9o0kBV4w24CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0KCZal%2FdLpCrMGFKtwDwowaPeqdwB3u2THLJBJBEZN%2FbdIoXEPOdiL1DgU8yNHb3vZN2w3fcbrJXA0Sk61hqQ91LzYSh9AJONwVgXfrexkQrWRgiSnu4dCRM7gAvwwpG0PEh8aYkX08wfS6l5ophnqK2O0uhwITyl2jgJywWsuIPzqKgzW%2BpaOPAhactaoV0aMkNQQ8iypnXgdj1C8Y5VFfCF2RRfG3ERcqO2vKCPcfzdAIEkJhMzSrLS9AsYJldd5gpZEBE0JHE7TSeSbwP4Vmbn0AwlA49z0J%2FXO20xsXFTl%2BxqjbKDIF%2BbvoO6qC1%2BPAW%2BFduM9H3ayP5oBXyjHbnoHwxugMorJDFXE9C5ukhN2l6tkCVBGTb87uMOcNjk58jXeoHHbBVu0CMWPfVtwyj0ChHU15HrU53XNF9D6J8QB1ViWgA5%2B31wdlNv8P2qSb5QcBhvHqslGUf7yOLyZgiKEZPeYX7l2i%2FQmnZnk9E0Ws6yKTrUfBiDb%2FhylZ13avfB28iURHgmQucGcUJkq1NXJVMlAZLQCYyl6eGfF2dMr1ijO2I31mhZD5lcyj5G3SnXQlIDRD6G%2Ben58Q5R6VWGNQj2O1pkyUZiXTmZb2R6MnPMi%2BnJFsipxqB4Q5uwteR6sXCSdCYJcw6te2vwY6pgGlAR8IIVfyFcn28LszoJW0T4A%2FSalW6FO%2FHAGTrbpez0p%2Fxp80hhSOZvjBmeYV1W23RxjBRei1sFLeZ%2F2s2mTJYwo3dKy8%2FJ%2F0s4RpAbHL5SRkCFkWGZ0cgnnNopwQw%2FIV6OD2UF6w19lAu0TjdxGBwYCB4M3gJpa0e8BAvGtglQ6VmKjIL9b5aUFL9yHBiAa6is07N7AjSubEH%2FJsXrUGGYwXV0La&X-Amz-Signature=bd468b5366d66fecb3ec49ce8305f246a99629041942f3dae439992c4147c840&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

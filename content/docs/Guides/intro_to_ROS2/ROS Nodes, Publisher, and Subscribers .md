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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFB7WT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiU7ZeblUzA3KZchZ2JYw%2Be79s0w6CRWwN8T4fv9m%2FdAiEAsdsqj%2BJxRDnKl4RvKx3ehF8JOGdWLFV75Q7vxG3C1kUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVDi9BVXQvU1V9oLircA1UBQnbwWte3%2F%2FllZ8saFvpG8g%2FziAwCgglkViu%2BC2qltyjNO3296%2FUm%2F759Lxw1dmkJVyUVuGuqZU158GKA3kaMXs629rrnyq1Xh%2FwdTMt99VIGizdGLQH02tRAeH9bCNYIu%2Bu5CaoYqVb687TQwnmX%2FYaOklALZwprEDplzxZqm%2FS6ZWb%2B%2B5lVWSC0BiN9st18liWJGOGdA%2F2R%2BnU%2Frp9q5r%2FIwq5kEiUuwjNG0MpvxoWoE80Kf%2FUiZLu0zFNIISA3EgsZO01JTGCp%2BV9ga6EphmxC3fFnJJp%2BBUFu6Hnny8%2BqXra%2B6dd%2BH0xFlRLSi6gDAOM%2BU%2Fle4JrtP29rK8tkkQW%2FHVgIFld%2B3p9pWX%2Fp2Uk3NAIh%2BLXTWaPbXAYs1PQZDCkEHlv%2B%2FZvSehw3CGRPoKARGLtah%2FrT7NF9klDj98cUwb2ln1dOpnVABmCfzQJo%2BSrTsb0%2F%2FKnKJr%2BwLlgYop34a9A8Ocmk4VsKKul2Nn%2Bcrj49lUvKHzhuwmdNQKvdutmYXv49EgGLTK4b92wCg5pNDOO4BH8khwpeZoiU30BBpqUjIiHTxJoisi4syE%2BqhpGHF10T6krw%2FgOFZp8%2BYLz7APv6plJa63ZFXCcIgfYKhq5ZUNEip%2FAHMJn4mL4GOqUBJXcByjIgtPhZQr4ZaFUTYEfQEc179WBniJYGVUXhuhQJ3jpKWjeeB1mByMhDaaKhcH%2Bpx7Zs1wklUvkL1GrRWG4qZGxYLomhHrGSnWdg7ZEaEdhmTT0l6ytcP6rx4mY2cNsithFnxaLkPMKoguhnK3MOyzxTHD1QlTsidI5%2FmDpdRuHemQNcoOIvgAEmbEJ%2BpWu0dD8rlJiqsLTjwIJMoxCRy8jx&X-Amz-Signature=4ba6b9a7479f92a288600d20c30a9529160dc3738692399937a19cf6c3a6b130&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFB7WT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiU7ZeblUzA3KZchZ2JYw%2Be79s0w6CRWwN8T4fv9m%2FdAiEAsdsqj%2BJxRDnKl4RvKx3ehF8JOGdWLFV75Q7vxG3C1kUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVDi9BVXQvU1V9oLircA1UBQnbwWte3%2F%2FllZ8saFvpG8g%2FziAwCgglkViu%2BC2qltyjNO3296%2FUm%2F759Lxw1dmkJVyUVuGuqZU158GKA3kaMXs629rrnyq1Xh%2FwdTMt99VIGizdGLQH02tRAeH9bCNYIu%2Bu5CaoYqVb687TQwnmX%2FYaOklALZwprEDplzxZqm%2FS6ZWb%2B%2B5lVWSC0BiN9st18liWJGOGdA%2F2R%2BnU%2Frp9q5r%2FIwq5kEiUuwjNG0MpvxoWoE80Kf%2FUiZLu0zFNIISA3EgsZO01JTGCp%2BV9ga6EphmxC3fFnJJp%2BBUFu6Hnny8%2BqXra%2B6dd%2BH0xFlRLSi6gDAOM%2BU%2Fle4JrtP29rK8tkkQW%2FHVgIFld%2B3p9pWX%2Fp2Uk3NAIh%2BLXTWaPbXAYs1PQZDCkEHlv%2B%2FZvSehw3CGRPoKARGLtah%2FrT7NF9klDj98cUwb2ln1dOpnVABmCfzQJo%2BSrTsb0%2F%2FKnKJr%2BwLlgYop34a9A8Ocmk4VsKKul2Nn%2Bcrj49lUvKHzhuwmdNQKvdutmYXv49EgGLTK4b92wCg5pNDOO4BH8khwpeZoiU30BBpqUjIiHTxJoisi4syE%2BqhpGHF10T6krw%2FgOFZp8%2BYLz7APv6plJa63ZFXCcIgfYKhq5ZUNEip%2FAHMJn4mL4GOqUBJXcByjIgtPhZQr4ZaFUTYEfQEc179WBniJYGVUXhuhQJ3jpKWjeeB1mByMhDaaKhcH%2Bpx7Zs1wklUvkL1GrRWG4qZGxYLomhHrGSnWdg7ZEaEdhmTT0l6ytcP6rx4mY2cNsithFnxaLkPMKoguhnK3MOyzxTHD1QlTsidI5%2FmDpdRuHemQNcoOIvgAEmbEJ%2BpWu0dD8rlJiqsLTjwIJMoxCRy8jx&X-Amz-Signature=43384a6d81ec8b9edcac4009e8ffdf3ea974d0d3529ddd63a0fdf571a0beeae7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFB7WT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiU7ZeblUzA3KZchZ2JYw%2Be79s0w6CRWwN8T4fv9m%2FdAiEAsdsqj%2BJxRDnKl4RvKx3ehF8JOGdWLFV75Q7vxG3C1kUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVDi9BVXQvU1V9oLircA1UBQnbwWte3%2F%2FllZ8saFvpG8g%2FziAwCgglkViu%2BC2qltyjNO3296%2FUm%2F759Lxw1dmkJVyUVuGuqZU158GKA3kaMXs629rrnyq1Xh%2FwdTMt99VIGizdGLQH02tRAeH9bCNYIu%2Bu5CaoYqVb687TQwnmX%2FYaOklALZwprEDplzxZqm%2FS6ZWb%2B%2B5lVWSC0BiN9st18liWJGOGdA%2F2R%2BnU%2Frp9q5r%2FIwq5kEiUuwjNG0MpvxoWoE80Kf%2FUiZLu0zFNIISA3EgsZO01JTGCp%2BV9ga6EphmxC3fFnJJp%2BBUFu6Hnny8%2BqXra%2B6dd%2BH0xFlRLSi6gDAOM%2BU%2Fle4JrtP29rK8tkkQW%2FHVgIFld%2B3p9pWX%2Fp2Uk3NAIh%2BLXTWaPbXAYs1PQZDCkEHlv%2B%2FZvSehw3CGRPoKARGLtah%2FrT7NF9klDj98cUwb2ln1dOpnVABmCfzQJo%2BSrTsb0%2F%2FKnKJr%2BwLlgYop34a9A8Ocmk4VsKKul2Nn%2Bcrj49lUvKHzhuwmdNQKvdutmYXv49EgGLTK4b92wCg5pNDOO4BH8khwpeZoiU30BBpqUjIiHTxJoisi4syE%2BqhpGHF10T6krw%2FgOFZp8%2BYLz7APv6plJa63ZFXCcIgfYKhq5ZUNEip%2FAHMJn4mL4GOqUBJXcByjIgtPhZQr4ZaFUTYEfQEc179WBniJYGVUXhuhQJ3jpKWjeeB1mByMhDaaKhcH%2Bpx7Zs1wklUvkL1GrRWG4qZGxYLomhHrGSnWdg7ZEaEdhmTT0l6ytcP6rx4mY2cNsithFnxaLkPMKoguhnK3MOyzxTHD1QlTsidI5%2FmDpdRuHemQNcoOIvgAEmbEJ%2BpWu0dD8rlJiqsLTjwIJMoxCRy8jx&X-Amz-Signature=cf9d1c1079ec8b4cacce2ce1111857053a29408477241be6b4b3c77f544a7ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFB7WT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiU7ZeblUzA3KZchZ2JYw%2Be79s0w6CRWwN8T4fv9m%2FdAiEAsdsqj%2BJxRDnKl4RvKx3ehF8JOGdWLFV75Q7vxG3C1kUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVDi9BVXQvU1V9oLircA1UBQnbwWte3%2F%2FllZ8saFvpG8g%2FziAwCgglkViu%2BC2qltyjNO3296%2FUm%2F759Lxw1dmkJVyUVuGuqZU158GKA3kaMXs629rrnyq1Xh%2FwdTMt99VIGizdGLQH02tRAeH9bCNYIu%2Bu5CaoYqVb687TQwnmX%2FYaOklALZwprEDplzxZqm%2FS6ZWb%2B%2B5lVWSC0BiN9st18liWJGOGdA%2F2R%2BnU%2Frp9q5r%2FIwq5kEiUuwjNG0MpvxoWoE80Kf%2FUiZLu0zFNIISA3EgsZO01JTGCp%2BV9ga6EphmxC3fFnJJp%2BBUFu6Hnny8%2BqXra%2B6dd%2BH0xFlRLSi6gDAOM%2BU%2Fle4JrtP29rK8tkkQW%2FHVgIFld%2B3p9pWX%2Fp2Uk3NAIh%2BLXTWaPbXAYs1PQZDCkEHlv%2B%2FZvSehw3CGRPoKARGLtah%2FrT7NF9klDj98cUwb2ln1dOpnVABmCfzQJo%2BSrTsb0%2F%2FKnKJr%2BwLlgYop34a9A8Ocmk4VsKKul2Nn%2Bcrj49lUvKHzhuwmdNQKvdutmYXv49EgGLTK4b92wCg5pNDOO4BH8khwpeZoiU30BBpqUjIiHTxJoisi4syE%2BqhpGHF10T6krw%2FgOFZp8%2BYLz7APv6plJa63ZFXCcIgfYKhq5ZUNEip%2FAHMJn4mL4GOqUBJXcByjIgtPhZQr4ZaFUTYEfQEc179WBniJYGVUXhuhQJ3jpKWjeeB1mByMhDaaKhcH%2Bpx7Zs1wklUvkL1GrRWG4qZGxYLomhHrGSnWdg7ZEaEdhmTT0l6ytcP6rx4mY2cNsithFnxaLkPMKoguhnK3MOyzxTHD1QlTsidI5%2FmDpdRuHemQNcoOIvgAEmbEJ%2BpWu0dD8rlJiqsLTjwIJMoxCRy8jx&X-Amz-Signature=c4cf5c17da462fa253f42aa3c1d7b9850b47a2d44e1ec0c1cda82b023c2d2440&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFB7WT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiU7ZeblUzA3KZchZ2JYw%2Be79s0w6CRWwN8T4fv9m%2FdAiEAsdsqj%2BJxRDnKl4RvKx3ehF8JOGdWLFV75Q7vxG3C1kUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVDi9BVXQvU1V9oLircA1UBQnbwWte3%2F%2FllZ8saFvpG8g%2FziAwCgglkViu%2BC2qltyjNO3296%2FUm%2F759Lxw1dmkJVyUVuGuqZU158GKA3kaMXs629rrnyq1Xh%2FwdTMt99VIGizdGLQH02tRAeH9bCNYIu%2Bu5CaoYqVb687TQwnmX%2FYaOklALZwprEDplzxZqm%2FS6ZWb%2B%2B5lVWSC0BiN9st18liWJGOGdA%2F2R%2BnU%2Frp9q5r%2FIwq5kEiUuwjNG0MpvxoWoE80Kf%2FUiZLu0zFNIISA3EgsZO01JTGCp%2BV9ga6EphmxC3fFnJJp%2BBUFu6Hnny8%2BqXra%2B6dd%2BH0xFlRLSi6gDAOM%2BU%2Fle4JrtP29rK8tkkQW%2FHVgIFld%2B3p9pWX%2Fp2Uk3NAIh%2BLXTWaPbXAYs1PQZDCkEHlv%2B%2FZvSehw3CGRPoKARGLtah%2FrT7NF9klDj98cUwb2ln1dOpnVABmCfzQJo%2BSrTsb0%2F%2FKnKJr%2BwLlgYop34a9A8Ocmk4VsKKul2Nn%2Bcrj49lUvKHzhuwmdNQKvdutmYXv49EgGLTK4b92wCg5pNDOO4BH8khwpeZoiU30BBpqUjIiHTxJoisi4syE%2BqhpGHF10T6krw%2FgOFZp8%2BYLz7APv6plJa63ZFXCcIgfYKhq5ZUNEip%2FAHMJn4mL4GOqUBJXcByjIgtPhZQr4ZaFUTYEfQEc179WBniJYGVUXhuhQJ3jpKWjeeB1mByMhDaaKhcH%2Bpx7Zs1wklUvkL1GrRWG4qZGxYLomhHrGSnWdg7ZEaEdhmTT0l6ytcP6rx4mY2cNsithFnxaLkPMKoguhnK3MOyzxTHD1QlTsidI5%2FmDpdRuHemQNcoOIvgAEmbEJ%2BpWu0dD8rlJiqsLTjwIJMoxCRy8jx&X-Amz-Signature=c25c61ba09430369510403207e506efe2a06583ed4938e09d62c99d7f8b511df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFB7WT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiU7ZeblUzA3KZchZ2JYw%2Be79s0w6CRWwN8T4fv9m%2FdAiEAsdsqj%2BJxRDnKl4RvKx3ehF8JOGdWLFV75Q7vxG3C1kUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVDi9BVXQvU1V9oLircA1UBQnbwWte3%2F%2FllZ8saFvpG8g%2FziAwCgglkViu%2BC2qltyjNO3296%2FUm%2F759Lxw1dmkJVyUVuGuqZU158GKA3kaMXs629rrnyq1Xh%2FwdTMt99VIGizdGLQH02tRAeH9bCNYIu%2Bu5CaoYqVb687TQwnmX%2FYaOklALZwprEDplzxZqm%2FS6ZWb%2B%2B5lVWSC0BiN9st18liWJGOGdA%2F2R%2BnU%2Frp9q5r%2FIwq5kEiUuwjNG0MpvxoWoE80Kf%2FUiZLu0zFNIISA3EgsZO01JTGCp%2BV9ga6EphmxC3fFnJJp%2BBUFu6Hnny8%2BqXra%2B6dd%2BH0xFlRLSi6gDAOM%2BU%2Fle4JrtP29rK8tkkQW%2FHVgIFld%2B3p9pWX%2Fp2Uk3NAIh%2BLXTWaPbXAYs1PQZDCkEHlv%2B%2FZvSehw3CGRPoKARGLtah%2FrT7NF9klDj98cUwb2ln1dOpnVABmCfzQJo%2BSrTsb0%2F%2FKnKJr%2BwLlgYop34a9A8Ocmk4VsKKul2Nn%2Bcrj49lUvKHzhuwmdNQKvdutmYXv49EgGLTK4b92wCg5pNDOO4BH8khwpeZoiU30BBpqUjIiHTxJoisi4syE%2BqhpGHF10T6krw%2FgOFZp8%2BYLz7APv6plJa63ZFXCcIgfYKhq5ZUNEip%2FAHMJn4mL4GOqUBJXcByjIgtPhZQr4ZaFUTYEfQEc179WBniJYGVUXhuhQJ3jpKWjeeB1mByMhDaaKhcH%2Bpx7Zs1wklUvkL1GrRWG4qZGxYLomhHrGSnWdg7ZEaEdhmTT0l6ytcP6rx4mY2cNsithFnxaLkPMKoguhnK3MOyzxTHD1QlTsidI5%2FmDpdRuHemQNcoOIvgAEmbEJ%2BpWu0dD8rlJiqsLTjwIJMoxCRy8jx&X-Amz-Signature=5ca9a74a021ff69a94a22c795b51672b762d62aa45234ee52489bcfc2b20401e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFB7WT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiU7ZeblUzA3KZchZ2JYw%2Be79s0w6CRWwN8T4fv9m%2FdAiEAsdsqj%2BJxRDnKl4RvKx3ehF8JOGdWLFV75Q7vxG3C1kUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVDi9BVXQvU1V9oLircA1UBQnbwWte3%2F%2FllZ8saFvpG8g%2FziAwCgglkViu%2BC2qltyjNO3296%2FUm%2F759Lxw1dmkJVyUVuGuqZU158GKA3kaMXs629rrnyq1Xh%2FwdTMt99VIGizdGLQH02tRAeH9bCNYIu%2Bu5CaoYqVb687TQwnmX%2FYaOklALZwprEDplzxZqm%2FS6ZWb%2B%2B5lVWSC0BiN9st18liWJGOGdA%2F2R%2BnU%2Frp9q5r%2FIwq5kEiUuwjNG0MpvxoWoE80Kf%2FUiZLu0zFNIISA3EgsZO01JTGCp%2BV9ga6EphmxC3fFnJJp%2BBUFu6Hnny8%2BqXra%2B6dd%2BH0xFlRLSi6gDAOM%2BU%2Fle4JrtP29rK8tkkQW%2FHVgIFld%2B3p9pWX%2Fp2Uk3NAIh%2BLXTWaPbXAYs1PQZDCkEHlv%2B%2FZvSehw3CGRPoKARGLtah%2FrT7NF9klDj98cUwb2ln1dOpnVABmCfzQJo%2BSrTsb0%2F%2FKnKJr%2BwLlgYop34a9A8Ocmk4VsKKul2Nn%2Bcrj49lUvKHzhuwmdNQKvdutmYXv49EgGLTK4b92wCg5pNDOO4BH8khwpeZoiU30BBpqUjIiHTxJoisi4syE%2BqhpGHF10T6krw%2FgOFZp8%2BYLz7APv6plJa63ZFXCcIgfYKhq5ZUNEip%2FAHMJn4mL4GOqUBJXcByjIgtPhZQr4ZaFUTYEfQEc179WBniJYGVUXhuhQJ3jpKWjeeB1mByMhDaaKhcH%2Bpx7Zs1wklUvkL1GrRWG4qZGxYLomhHrGSnWdg7ZEaEdhmTT0l6ytcP6rx4mY2cNsithFnxaLkPMKoguhnK3MOyzxTHD1QlTsidI5%2FmDpdRuHemQNcoOIvgAEmbEJ%2BpWu0dD8rlJiqsLTjwIJMoxCRy8jx&X-Amz-Signature=22148b5408aa62826fc49776c7a69b96ad8c6678d345f7c13428b6bdfdab605f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLFB7WT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiU7ZeblUzA3KZchZ2JYw%2Be79s0w6CRWwN8T4fv9m%2FdAiEAsdsqj%2BJxRDnKl4RvKx3ehF8JOGdWLFV75Q7vxG3C1kUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVDi9BVXQvU1V9oLircA1UBQnbwWte3%2F%2FllZ8saFvpG8g%2FziAwCgglkViu%2BC2qltyjNO3296%2FUm%2F759Lxw1dmkJVyUVuGuqZU158GKA3kaMXs629rrnyq1Xh%2FwdTMt99VIGizdGLQH02tRAeH9bCNYIu%2Bu5CaoYqVb687TQwnmX%2FYaOklALZwprEDplzxZqm%2FS6ZWb%2B%2B5lVWSC0BiN9st18liWJGOGdA%2F2R%2BnU%2Frp9q5r%2FIwq5kEiUuwjNG0MpvxoWoE80Kf%2FUiZLu0zFNIISA3EgsZO01JTGCp%2BV9ga6EphmxC3fFnJJp%2BBUFu6Hnny8%2BqXra%2B6dd%2BH0xFlRLSi6gDAOM%2BU%2Fle4JrtP29rK8tkkQW%2FHVgIFld%2B3p9pWX%2Fp2Uk3NAIh%2BLXTWaPbXAYs1PQZDCkEHlv%2B%2FZvSehw3CGRPoKARGLtah%2FrT7NF9klDj98cUwb2ln1dOpnVABmCfzQJo%2BSrTsb0%2F%2FKnKJr%2BwLlgYop34a9A8Ocmk4VsKKul2Nn%2Bcrj49lUvKHzhuwmdNQKvdutmYXv49EgGLTK4b92wCg5pNDOO4BH8khwpeZoiU30BBpqUjIiHTxJoisi4syE%2BqhpGHF10T6krw%2FgOFZp8%2BYLz7APv6plJa63ZFXCcIgfYKhq5ZUNEip%2FAHMJn4mL4GOqUBJXcByjIgtPhZQr4ZaFUTYEfQEc179WBniJYGVUXhuhQJ3jpKWjeeB1mByMhDaaKhcH%2Bpx7Zs1wklUvkL1GrRWG4qZGxYLomhHrGSnWdg7ZEaEdhmTT0l6ytcP6rx4mY2cNsithFnxaLkPMKoguhnK3MOyzxTHD1QlTsidI5%2FmDpdRuHemQNcoOIvgAEmbEJ%2BpWu0dD8rlJiqsLTjwIJMoxCRy8jx&X-Amz-Signature=b55986ba8af20bafaa493e75f0dc389ebc4fdc247887062013471ac270ca2f78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUUUPX5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BPUm00mRz%2F30zOMAscz79mjxPE5Zr31s8LJuShmAhsAiEApV8PO9jrJz6Uo0KiokFydPgubTKCNY1YqbA%2F32DLwWMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGfh5V5ECnAmJ7ltyrcA9M8Ay3e3nC%2BvLCNLtBVZoCGsA3bDLMvgDx%2BzQiaYfuVqCaVUj%2Blarg%2B0hVvdVckEvAZaYWSrQ23NmcgRPJ6KtkNzS23Bg0qLBkybjeACYQwK3weup%2FkMxFsTGAJbYPKV6mniksZA2w2p1pXTO8dBb9u8mD8SeSMv70d3FGDyQPDojXBC%2Bw%2F3ltePMTN1gvrXxgz3BxILWoXlg%2F25A%2FHplB6rj9Roe7t0s2Ddhwa%2Ftqw07Ob6NGSY1TwrlVO7gRFl2yNWAHVmlRyWCPGl3lfFUAzUw%2FGNLD4ocBKJOGCTV9hKQ4Y45BIFW9Bee0b4TRtPuaRiA639PfLy11MWzTi5dOFgxpLoEvtYuV5eOTgtLKcrIjM81xjFO6L%2FeUqOFmHf3XeMEfzNVE3nRHVm4kuzmW%2FnL1P0U9Pj7QDTH9h2evMwExFNAlCQEMcMYvwwaLZCU8PQ1zPRcbvqsyhsWiY1hBE6v4XEL6fN6O9TcXfTiyhG%2FYpCWTYpl7vt26bg0l%2BfZZ%2FLpCC0XPVndi7SnQgZ8n908DW%2Flp7dOHREdzUjkiBH5JeROM%2BHoGQLJUPrXFBevHl2rdrBcpyJPQ5KHxY%2B9XDXOGSLc%2FCXzVegtlPZDQB6srpdBYddRO5p4maML%2Bl97wGOqUBd6kXYbnVucw50ictkRrOgfGrTuKoy0gXO54WP0lkx%2BEti%2BP9GkBoEh2KBpdKqHEe13BddUeU8l6f%2F1S1LhfhoUe%2BQIBcxyY8FH%2BckVpeLDX%2Fy1GhOcUs9rItOkAnhgJlKC97eu3msir%2FDnOqHegwBXxo%2FnD%2BZZX5OSolVwmG4QiLcO01RUi62U1tY1Im3EsLzT9FxQTfpPI4TwS64652IBb3A4IO&X-Amz-Signature=e95405cba1f405e0fb7f374e4d3b71006e429aeb9162f383dc7dd44130c08357&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUUUPX5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BPUm00mRz%2F30zOMAscz79mjxPE5Zr31s8LJuShmAhsAiEApV8PO9jrJz6Uo0KiokFydPgubTKCNY1YqbA%2F32DLwWMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGfh5V5ECnAmJ7ltyrcA9M8Ay3e3nC%2BvLCNLtBVZoCGsA3bDLMvgDx%2BzQiaYfuVqCaVUj%2Blarg%2B0hVvdVckEvAZaYWSrQ23NmcgRPJ6KtkNzS23Bg0qLBkybjeACYQwK3weup%2FkMxFsTGAJbYPKV6mniksZA2w2p1pXTO8dBb9u8mD8SeSMv70d3FGDyQPDojXBC%2Bw%2F3ltePMTN1gvrXxgz3BxILWoXlg%2F25A%2FHplB6rj9Roe7t0s2Ddhwa%2Ftqw07Ob6NGSY1TwrlVO7gRFl2yNWAHVmlRyWCPGl3lfFUAzUw%2FGNLD4ocBKJOGCTV9hKQ4Y45BIFW9Bee0b4TRtPuaRiA639PfLy11MWzTi5dOFgxpLoEvtYuV5eOTgtLKcrIjM81xjFO6L%2FeUqOFmHf3XeMEfzNVE3nRHVm4kuzmW%2FnL1P0U9Pj7QDTH9h2evMwExFNAlCQEMcMYvwwaLZCU8PQ1zPRcbvqsyhsWiY1hBE6v4XEL6fN6O9TcXfTiyhG%2FYpCWTYpl7vt26bg0l%2BfZZ%2FLpCC0XPVndi7SnQgZ8n908DW%2Flp7dOHREdzUjkiBH5JeROM%2BHoGQLJUPrXFBevHl2rdrBcpyJPQ5KHxY%2B9XDXOGSLc%2FCXzVegtlPZDQB6srpdBYddRO5p4maML%2Bl97wGOqUBd6kXYbnVucw50ictkRrOgfGrTuKoy0gXO54WP0lkx%2BEti%2BP9GkBoEh2KBpdKqHEe13BddUeU8l6f%2F1S1LhfhoUe%2BQIBcxyY8FH%2BckVpeLDX%2Fy1GhOcUs9rItOkAnhgJlKC97eu3msir%2FDnOqHegwBXxo%2FnD%2BZZX5OSolVwmG4QiLcO01RUi62U1tY1Im3EsLzT9FxQTfpPI4TwS64652IBb3A4IO&X-Amz-Signature=f8a49132b9fe736fe18153309a73551b6ad4b6fab401aa4be0dcac075fd91bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUUUPX5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BPUm00mRz%2F30zOMAscz79mjxPE5Zr31s8LJuShmAhsAiEApV8PO9jrJz6Uo0KiokFydPgubTKCNY1YqbA%2F32DLwWMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGfh5V5ECnAmJ7ltyrcA9M8Ay3e3nC%2BvLCNLtBVZoCGsA3bDLMvgDx%2BzQiaYfuVqCaVUj%2Blarg%2B0hVvdVckEvAZaYWSrQ23NmcgRPJ6KtkNzS23Bg0qLBkybjeACYQwK3weup%2FkMxFsTGAJbYPKV6mniksZA2w2p1pXTO8dBb9u8mD8SeSMv70d3FGDyQPDojXBC%2Bw%2F3ltePMTN1gvrXxgz3BxILWoXlg%2F25A%2FHplB6rj9Roe7t0s2Ddhwa%2Ftqw07Ob6NGSY1TwrlVO7gRFl2yNWAHVmlRyWCPGl3lfFUAzUw%2FGNLD4ocBKJOGCTV9hKQ4Y45BIFW9Bee0b4TRtPuaRiA639PfLy11MWzTi5dOFgxpLoEvtYuV5eOTgtLKcrIjM81xjFO6L%2FeUqOFmHf3XeMEfzNVE3nRHVm4kuzmW%2FnL1P0U9Pj7QDTH9h2evMwExFNAlCQEMcMYvwwaLZCU8PQ1zPRcbvqsyhsWiY1hBE6v4XEL6fN6O9TcXfTiyhG%2FYpCWTYpl7vt26bg0l%2BfZZ%2FLpCC0XPVndi7SnQgZ8n908DW%2Flp7dOHREdzUjkiBH5JeROM%2BHoGQLJUPrXFBevHl2rdrBcpyJPQ5KHxY%2B9XDXOGSLc%2FCXzVegtlPZDQB6srpdBYddRO5p4maML%2Bl97wGOqUBd6kXYbnVucw50ictkRrOgfGrTuKoy0gXO54WP0lkx%2BEti%2BP9GkBoEh2KBpdKqHEe13BddUeU8l6f%2F1S1LhfhoUe%2BQIBcxyY8FH%2BckVpeLDX%2Fy1GhOcUs9rItOkAnhgJlKC97eu3msir%2FDnOqHegwBXxo%2FnD%2BZZX5OSolVwmG4QiLcO01RUi62U1tY1Im3EsLzT9FxQTfpPI4TwS64652IBb3A4IO&X-Amz-Signature=5e299401919bf675e94091b35a24e0b84dde35497d3f2dc3a1ee8a587d909117&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUUUPX5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BPUm00mRz%2F30zOMAscz79mjxPE5Zr31s8LJuShmAhsAiEApV8PO9jrJz6Uo0KiokFydPgubTKCNY1YqbA%2F32DLwWMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGfh5V5ECnAmJ7ltyrcA9M8Ay3e3nC%2BvLCNLtBVZoCGsA3bDLMvgDx%2BzQiaYfuVqCaVUj%2Blarg%2B0hVvdVckEvAZaYWSrQ23NmcgRPJ6KtkNzS23Bg0qLBkybjeACYQwK3weup%2FkMxFsTGAJbYPKV6mniksZA2w2p1pXTO8dBb9u8mD8SeSMv70d3FGDyQPDojXBC%2Bw%2F3ltePMTN1gvrXxgz3BxILWoXlg%2F25A%2FHplB6rj9Roe7t0s2Ddhwa%2Ftqw07Ob6NGSY1TwrlVO7gRFl2yNWAHVmlRyWCPGl3lfFUAzUw%2FGNLD4ocBKJOGCTV9hKQ4Y45BIFW9Bee0b4TRtPuaRiA639PfLy11MWzTi5dOFgxpLoEvtYuV5eOTgtLKcrIjM81xjFO6L%2FeUqOFmHf3XeMEfzNVE3nRHVm4kuzmW%2FnL1P0U9Pj7QDTH9h2evMwExFNAlCQEMcMYvwwaLZCU8PQ1zPRcbvqsyhsWiY1hBE6v4XEL6fN6O9TcXfTiyhG%2FYpCWTYpl7vt26bg0l%2BfZZ%2FLpCC0XPVndi7SnQgZ8n908DW%2Flp7dOHREdzUjkiBH5JeROM%2BHoGQLJUPrXFBevHl2rdrBcpyJPQ5KHxY%2B9XDXOGSLc%2FCXzVegtlPZDQB6srpdBYddRO5p4maML%2Bl97wGOqUBd6kXYbnVucw50ictkRrOgfGrTuKoy0gXO54WP0lkx%2BEti%2BP9GkBoEh2KBpdKqHEe13BddUeU8l6f%2F1S1LhfhoUe%2BQIBcxyY8FH%2BckVpeLDX%2Fy1GhOcUs9rItOkAnhgJlKC97eu3msir%2FDnOqHegwBXxo%2FnD%2BZZX5OSolVwmG4QiLcO01RUi62U1tY1Im3EsLzT9FxQTfpPI4TwS64652IBb3A4IO&X-Amz-Signature=3f0c947e2ed7c48ce108d9f2633f72627d49e7d27bc86b9553335ae83a3f638c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUUUPX5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BPUm00mRz%2F30zOMAscz79mjxPE5Zr31s8LJuShmAhsAiEApV8PO9jrJz6Uo0KiokFydPgubTKCNY1YqbA%2F32DLwWMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGfh5V5ECnAmJ7ltyrcA9M8Ay3e3nC%2BvLCNLtBVZoCGsA3bDLMvgDx%2BzQiaYfuVqCaVUj%2Blarg%2B0hVvdVckEvAZaYWSrQ23NmcgRPJ6KtkNzS23Bg0qLBkybjeACYQwK3weup%2FkMxFsTGAJbYPKV6mniksZA2w2p1pXTO8dBb9u8mD8SeSMv70d3FGDyQPDojXBC%2Bw%2F3ltePMTN1gvrXxgz3BxILWoXlg%2F25A%2FHplB6rj9Roe7t0s2Ddhwa%2Ftqw07Ob6NGSY1TwrlVO7gRFl2yNWAHVmlRyWCPGl3lfFUAzUw%2FGNLD4ocBKJOGCTV9hKQ4Y45BIFW9Bee0b4TRtPuaRiA639PfLy11MWzTi5dOFgxpLoEvtYuV5eOTgtLKcrIjM81xjFO6L%2FeUqOFmHf3XeMEfzNVE3nRHVm4kuzmW%2FnL1P0U9Pj7QDTH9h2evMwExFNAlCQEMcMYvwwaLZCU8PQ1zPRcbvqsyhsWiY1hBE6v4XEL6fN6O9TcXfTiyhG%2FYpCWTYpl7vt26bg0l%2BfZZ%2FLpCC0XPVndi7SnQgZ8n908DW%2Flp7dOHREdzUjkiBH5JeROM%2BHoGQLJUPrXFBevHl2rdrBcpyJPQ5KHxY%2B9XDXOGSLc%2FCXzVegtlPZDQB6srpdBYddRO5p4maML%2Bl97wGOqUBd6kXYbnVucw50ictkRrOgfGrTuKoy0gXO54WP0lkx%2BEti%2BP9GkBoEh2KBpdKqHEe13BddUeU8l6f%2F1S1LhfhoUe%2BQIBcxyY8FH%2BckVpeLDX%2Fy1GhOcUs9rItOkAnhgJlKC97eu3msir%2FDnOqHegwBXxo%2FnD%2BZZX5OSolVwmG4QiLcO01RUi62U1tY1Im3EsLzT9FxQTfpPI4TwS64652IBb3A4IO&X-Amz-Signature=eeee48d8c8f70f29cf5aa9fac0b72e5c47258f9ba58c10bd3e11204d665d598f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUUUPX5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BPUm00mRz%2F30zOMAscz79mjxPE5Zr31s8LJuShmAhsAiEApV8PO9jrJz6Uo0KiokFydPgubTKCNY1YqbA%2F32DLwWMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGfh5V5ECnAmJ7ltyrcA9M8Ay3e3nC%2BvLCNLtBVZoCGsA3bDLMvgDx%2BzQiaYfuVqCaVUj%2Blarg%2B0hVvdVckEvAZaYWSrQ23NmcgRPJ6KtkNzS23Bg0qLBkybjeACYQwK3weup%2FkMxFsTGAJbYPKV6mniksZA2w2p1pXTO8dBb9u8mD8SeSMv70d3FGDyQPDojXBC%2Bw%2F3ltePMTN1gvrXxgz3BxILWoXlg%2F25A%2FHplB6rj9Roe7t0s2Ddhwa%2Ftqw07Ob6NGSY1TwrlVO7gRFl2yNWAHVmlRyWCPGl3lfFUAzUw%2FGNLD4ocBKJOGCTV9hKQ4Y45BIFW9Bee0b4TRtPuaRiA639PfLy11MWzTi5dOFgxpLoEvtYuV5eOTgtLKcrIjM81xjFO6L%2FeUqOFmHf3XeMEfzNVE3nRHVm4kuzmW%2FnL1P0U9Pj7QDTH9h2evMwExFNAlCQEMcMYvwwaLZCU8PQ1zPRcbvqsyhsWiY1hBE6v4XEL6fN6O9TcXfTiyhG%2FYpCWTYpl7vt26bg0l%2BfZZ%2FLpCC0XPVndi7SnQgZ8n908DW%2Flp7dOHREdzUjkiBH5JeROM%2BHoGQLJUPrXFBevHl2rdrBcpyJPQ5KHxY%2B9XDXOGSLc%2FCXzVegtlPZDQB6srpdBYddRO5p4maML%2Bl97wGOqUBd6kXYbnVucw50ictkRrOgfGrTuKoy0gXO54WP0lkx%2BEti%2BP9GkBoEh2KBpdKqHEe13BddUeU8l6f%2F1S1LhfhoUe%2BQIBcxyY8FH%2BckVpeLDX%2Fy1GhOcUs9rItOkAnhgJlKC97eu3msir%2FDnOqHegwBXxo%2FnD%2BZZX5OSolVwmG4QiLcO01RUi62U1tY1Im3EsLzT9FxQTfpPI4TwS64652IBb3A4IO&X-Amz-Signature=fd127291ab5d4977e6dc80dd2aff2a6d86628bd598e575d108c71dee73f96c08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUUUPX5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BPUm00mRz%2F30zOMAscz79mjxPE5Zr31s8LJuShmAhsAiEApV8PO9jrJz6Uo0KiokFydPgubTKCNY1YqbA%2F32DLwWMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGfh5V5ECnAmJ7ltyrcA9M8Ay3e3nC%2BvLCNLtBVZoCGsA3bDLMvgDx%2BzQiaYfuVqCaVUj%2Blarg%2B0hVvdVckEvAZaYWSrQ23NmcgRPJ6KtkNzS23Bg0qLBkybjeACYQwK3weup%2FkMxFsTGAJbYPKV6mniksZA2w2p1pXTO8dBb9u8mD8SeSMv70d3FGDyQPDojXBC%2Bw%2F3ltePMTN1gvrXxgz3BxILWoXlg%2F25A%2FHplB6rj9Roe7t0s2Ddhwa%2Ftqw07Ob6NGSY1TwrlVO7gRFl2yNWAHVmlRyWCPGl3lfFUAzUw%2FGNLD4ocBKJOGCTV9hKQ4Y45BIFW9Bee0b4TRtPuaRiA639PfLy11MWzTi5dOFgxpLoEvtYuV5eOTgtLKcrIjM81xjFO6L%2FeUqOFmHf3XeMEfzNVE3nRHVm4kuzmW%2FnL1P0U9Pj7QDTH9h2evMwExFNAlCQEMcMYvwwaLZCU8PQ1zPRcbvqsyhsWiY1hBE6v4XEL6fN6O9TcXfTiyhG%2FYpCWTYpl7vt26bg0l%2BfZZ%2FLpCC0XPVndi7SnQgZ8n908DW%2Flp7dOHREdzUjkiBH5JeROM%2BHoGQLJUPrXFBevHl2rdrBcpyJPQ5KHxY%2B9XDXOGSLc%2FCXzVegtlPZDQB6srpdBYddRO5p4maML%2Bl97wGOqUBd6kXYbnVucw50ictkRrOgfGrTuKoy0gXO54WP0lkx%2BEti%2BP9GkBoEh2KBpdKqHEe13BddUeU8l6f%2F1S1LhfhoUe%2BQIBcxyY8FH%2BckVpeLDX%2Fy1GhOcUs9rItOkAnhgJlKC97eu3msir%2FDnOqHegwBXxo%2FnD%2BZZX5OSolVwmG4QiLcO01RUi62U1tY1Im3EsLzT9FxQTfpPI4TwS64652IBb3A4IO&X-Amz-Signature=30b3beb9f3180b2c6b8fb8eeb9afb351e9b8397a8eda5b5cbafd43d9cad0c6dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUUUPX5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BPUm00mRz%2F30zOMAscz79mjxPE5Zr31s8LJuShmAhsAiEApV8PO9jrJz6Uo0KiokFydPgubTKCNY1YqbA%2F32DLwWMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGfh5V5ECnAmJ7ltyrcA9M8Ay3e3nC%2BvLCNLtBVZoCGsA3bDLMvgDx%2BzQiaYfuVqCaVUj%2Blarg%2B0hVvdVckEvAZaYWSrQ23NmcgRPJ6KtkNzS23Bg0qLBkybjeACYQwK3weup%2FkMxFsTGAJbYPKV6mniksZA2w2p1pXTO8dBb9u8mD8SeSMv70d3FGDyQPDojXBC%2Bw%2F3ltePMTN1gvrXxgz3BxILWoXlg%2F25A%2FHplB6rj9Roe7t0s2Ddhwa%2Ftqw07Ob6NGSY1TwrlVO7gRFl2yNWAHVmlRyWCPGl3lfFUAzUw%2FGNLD4ocBKJOGCTV9hKQ4Y45BIFW9Bee0b4TRtPuaRiA639PfLy11MWzTi5dOFgxpLoEvtYuV5eOTgtLKcrIjM81xjFO6L%2FeUqOFmHf3XeMEfzNVE3nRHVm4kuzmW%2FnL1P0U9Pj7QDTH9h2evMwExFNAlCQEMcMYvwwaLZCU8PQ1zPRcbvqsyhsWiY1hBE6v4XEL6fN6O9TcXfTiyhG%2FYpCWTYpl7vt26bg0l%2BfZZ%2FLpCC0XPVndi7SnQgZ8n908DW%2Flp7dOHREdzUjkiBH5JeROM%2BHoGQLJUPrXFBevHl2rdrBcpyJPQ5KHxY%2B9XDXOGSLc%2FCXzVegtlPZDQB6srpdBYddRO5p4maML%2Bl97wGOqUBd6kXYbnVucw50ictkRrOgfGrTuKoy0gXO54WP0lkx%2BEti%2BP9GkBoEh2KBpdKqHEe13BddUeU8l6f%2F1S1LhfhoUe%2BQIBcxyY8FH%2BckVpeLDX%2Fy1GhOcUs9rItOkAnhgJlKC97eu3msir%2FDnOqHegwBXxo%2FnD%2BZZX5OSolVwmG4QiLcO01RUi62U1tY1Im3EsLzT9FxQTfpPI4TwS64652IBb3A4IO&X-Amz-Signature=7a4e6714b345e7a40cff80c58f8a9affa83b8989e16ba964747dc6e8057f12e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

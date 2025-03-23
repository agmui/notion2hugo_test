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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM74BQUR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEQqELza4VXkY81hcgcwHIoFYBQ2xPrGJ4Tz76as1XrTAiEA31UIqYr4dLiksPlg9e3lO06PzdJFbEldQ6E%2F0Lod9QcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPklECIlEdHwBn1KCrcA%2FHu1xtmAlGjLUKix1SSD5jVqJHCHoULY6PEa0LPBhqV2iukF5MdUviYIrGXYxMl32Tsez33XojGd7HtMtBiL%2BBx8%2BeSBG8S8CIywZJJ8X7Z4DcMWK9JfGDy9yW1tKR%2FY%2BiatweOgc0qvdYVuhjmks9nZcy7vzvMvvkaJk2w61xcwny7Mf199ai60vnlDr16OozNz2mZZpHb%2FXgyi240puFv%2BIgkkzA7g6q7RVEHfwAw6ht6%2BNLRHAEdO5F0avDwt3lBW1bXajLanCLfbW8Bd4vJFm3ApZk7J0EvITH865VmNT7YDoRxgd4oBx%2FHnmlhiBugAY50RHZyKrtx78gmL2a16JoSZ8HqJMCCqjwpseN5eCK4Xx4QKrglodnS2DJ0jDoZivZ%2BGlkU7xHZV1OqdHmGK7%2FpIYNVHD2wQ39jKhzbIczoAor4JQ08Ax2eIv6V4XfgNkTA7S48DWn%2BPUnXixMUTxMpgzhshsBYjJ85I7RSifQ5zmyEvfBCPmdrMnG9Og9gvWVoHjdruLmomD4D%2BZYEfnIKYQaa%2BD6%2FID3LuWkcYyq71EU7ML%2BMVuCEvxRJLOY1Cbx6stle1g0DsJ3DP2Yuy0DlK%2BaKD%2FSxw0oVRhR1PgT0Y1G1mkiVq7%2BUMKjM%2F74GOqUBhGATWocGBUkPqjZrXWdLyegy3M9NdhT9pAAnXimXmoniqlnEkA2bG1YdfG8R%2FkCs%2FQjRcTyWPhpEwpx6xV8yW4OYpclU7mJ4rOO4opV9xYCYGKpSKGTYk74gfY9lBSGU5mZvhsmscPho3thCKT2cJ%2B1dUmpCI2IsXTQ32o87fSD73IjeiY0xJNlnafPvNbSCtxqHyrnSn3EjZ7pidYh8oA0Re0MY&X-Amz-Signature=f4dc443000cf08b4e885ad4842584051d65cd7c269d83698a8d2990321131250&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM74BQUR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEQqELza4VXkY81hcgcwHIoFYBQ2xPrGJ4Tz76as1XrTAiEA31UIqYr4dLiksPlg9e3lO06PzdJFbEldQ6E%2F0Lod9QcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPklECIlEdHwBn1KCrcA%2FHu1xtmAlGjLUKix1SSD5jVqJHCHoULY6PEa0LPBhqV2iukF5MdUviYIrGXYxMl32Tsez33XojGd7HtMtBiL%2BBx8%2BeSBG8S8CIywZJJ8X7Z4DcMWK9JfGDy9yW1tKR%2FY%2BiatweOgc0qvdYVuhjmks9nZcy7vzvMvvkaJk2w61xcwny7Mf199ai60vnlDr16OozNz2mZZpHb%2FXgyi240puFv%2BIgkkzA7g6q7RVEHfwAw6ht6%2BNLRHAEdO5F0avDwt3lBW1bXajLanCLfbW8Bd4vJFm3ApZk7J0EvITH865VmNT7YDoRxgd4oBx%2FHnmlhiBugAY50RHZyKrtx78gmL2a16JoSZ8HqJMCCqjwpseN5eCK4Xx4QKrglodnS2DJ0jDoZivZ%2BGlkU7xHZV1OqdHmGK7%2FpIYNVHD2wQ39jKhzbIczoAor4JQ08Ax2eIv6V4XfgNkTA7S48DWn%2BPUnXixMUTxMpgzhshsBYjJ85I7RSifQ5zmyEvfBCPmdrMnG9Og9gvWVoHjdruLmomD4D%2BZYEfnIKYQaa%2BD6%2FID3LuWkcYyq71EU7ML%2BMVuCEvxRJLOY1Cbx6stle1g0DsJ3DP2Yuy0DlK%2BaKD%2FSxw0oVRhR1PgT0Y1G1mkiVq7%2BUMKjM%2F74GOqUBhGATWocGBUkPqjZrXWdLyegy3M9NdhT9pAAnXimXmoniqlnEkA2bG1YdfG8R%2FkCs%2FQjRcTyWPhpEwpx6xV8yW4OYpclU7mJ4rOO4opV9xYCYGKpSKGTYk74gfY9lBSGU5mZvhsmscPho3thCKT2cJ%2B1dUmpCI2IsXTQ32o87fSD73IjeiY0xJNlnafPvNbSCtxqHyrnSn3EjZ7pidYh8oA0Re0MY&X-Amz-Signature=a750b83422e780f5bc5947a3d0fc6487a565a2ba84a0efbd303efd4098f689e5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM74BQUR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEQqELza4VXkY81hcgcwHIoFYBQ2xPrGJ4Tz76as1XrTAiEA31UIqYr4dLiksPlg9e3lO06PzdJFbEldQ6E%2F0Lod9QcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPklECIlEdHwBn1KCrcA%2FHu1xtmAlGjLUKix1SSD5jVqJHCHoULY6PEa0LPBhqV2iukF5MdUviYIrGXYxMl32Tsez33XojGd7HtMtBiL%2BBx8%2BeSBG8S8CIywZJJ8X7Z4DcMWK9JfGDy9yW1tKR%2FY%2BiatweOgc0qvdYVuhjmks9nZcy7vzvMvvkaJk2w61xcwny7Mf199ai60vnlDr16OozNz2mZZpHb%2FXgyi240puFv%2BIgkkzA7g6q7RVEHfwAw6ht6%2BNLRHAEdO5F0avDwt3lBW1bXajLanCLfbW8Bd4vJFm3ApZk7J0EvITH865VmNT7YDoRxgd4oBx%2FHnmlhiBugAY50RHZyKrtx78gmL2a16JoSZ8HqJMCCqjwpseN5eCK4Xx4QKrglodnS2DJ0jDoZivZ%2BGlkU7xHZV1OqdHmGK7%2FpIYNVHD2wQ39jKhzbIczoAor4JQ08Ax2eIv6V4XfgNkTA7S48DWn%2BPUnXixMUTxMpgzhshsBYjJ85I7RSifQ5zmyEvfBCPmdrMnG9Og9gvWVoHjdruLmomD4D%2BZYEfnIKYQaa%2BD6%2FID3LuWkcYyq71EU7ML%2BMVuCEvxRJLOY1Cbx6stle1g0DsJ3DP2Yuy0DlK%2BaKD%2FSxw0oVRhR1PgT0Y1G1mkiVq7%2BUMKjM%2F74GOqUBhGATWocGBUkPqjZrXWdLyegy3M9NdhT9pAAnXimXmoniqlnEkA2bG1YdfG8R%2FkCs%2FQjRcTyWPhpEwpx6xV8yW4OYpclU7mJ4rOO4opV9xYCYGKpSKGTYk74gfY9lBSGU5mZvhsmscPho3thCKT2cJ%2B1dUmpCI2IsXTQ32o87fSD73IjeiY0xJNlnafPvNbSCtxqHyrnSn3EjZ7pidYh8oA0Re0MY&X-Amz-Signature=78741b9f884915ec39746be195eb69ca5b4e91a67b6a6d29a39675d3779773ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM74BQUR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEQqELza4VXkY81hcgcwHIoFYBQ2xPrGJ4Tz76as1XrTAiEA31UIqYr4dLiksPlg9e3lO06PzdJFbEldQ6E%2F0Lod9QcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPklECIlEdHwBn1KCrcA%2FHu1xtmAlGjLUKix1SSD5jVqJHCHoULY6PEa0LPBhqV2iukF5MdUviYIrGXYxMl32Tsez33XojGd7HtMtBiL%2BBx8%2BeSBG8S8CIywZJJ8X7Z4DcMWK9JfGDy9yW1tKR%2FY%2BiatweOgc0qvdYVuhjmks9nZcy7vzvMvvkaJk2w61xcwny7Mf199ai60vnlDr16OozNz2mZZpHb%2FXgyi240puFv%2BIgkkzA7g6q7RVEHfwAw6ht6%2BNLRHAEdO5F0avDwt3lBW1bXajLanCLfbW8Bd4vJFm3ApZk7J0EvITH865VmNT7YDoRxgd4oBx%2FHnmlhiBugAY50RHZyKrtx78gmL2a16JoSZ8HqJMCCqjwpseN5eCK4Xx4QKrglodnS2DJ0jDoZivZ%2BGlkU7xHZV1OqdHmGK7%2FpIYNVHD2wQ39jKhzbIczoAor4JQ08Ax2eIv6V4XfgNkTA7S48DWn%2BPUnXixMUTxMpgzhshsBYjJ85I7RSifQ5zmyEvfBCPmdrMnG9Og9gvWVoHjdruLmomD4D%2BZYEfnIKYQaa%2BD6%2FID3LuWkcYyq71EU7ML%2BMVuCEvxRJLOY1Cbx6stle1g0DsJ3DP2Yuy0DlK%2BaKD%2FSxw0oVRhR1PgT0Y1G1mkiVq7%2BUMKjM%2F74GOqUBhGATWocGBUkPqjZrXWdLyegy3M9NdhT9pAAnXimXmoniqlnEkA2bG1YdfG8R%2FkCs%2FQjRcTyWPhpEwpx6xV8yW4OYpclU7mJ4rOO4opV9xYCYGKpSKGTYk74gfY9lBSGU5mZvhsmscPho3thCKT2cJ%2B1dUmpCI2IsXTQ32o87fSD73IjeiY0xJNlnafPvNbSCtxqHyrnSn3EjZ7pidYh8oA0Re0MY&X-Amz-Signature=9ff057a71b4f0d6ed59dfd7cdfd309a564e7e0839cfee139cf880153368cae9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM74BQUR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEQqELza4VXkY81hcgcwHIoFYBQ2xPrGJ4Tz76as1XrTAiEA31UIqYr4dLiksPlg9e3lO06PzdJFbEldQ6E%2F0Lod9QcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPklECIlEdHwBn1KCrcA%2FHu1xtmAlGjLUKix1SSD5jVqJHCHoULY6PEa0LPBhqV2iukF5MdUviYIrGXYxMl32Tsez33XojGd7HtMtBiL%2BBx8%2BeSBG8S8CIywZJJ8X7Z4DcMWK9JfGDy9yW1tKR%2FY%2BiatweOgc0qvdYVuhjmks9nZcy7vzvMvvkaJk2w61xcwny7Mf199ai60vnlDr16OozNz2mZZpHb%2FXgyi240puFv%2BIgkkzA7g6q7RVEHfwAw6ht6%2BNLRHAEdO5F0avDwt3lBW1bXajLanCLfbW8Bd4vJFm3ApZk7J0EvITH865VmNT7YDoRxgd4oBx%2FHnmlhiBugAY50RHZyKrtx78gmL2a16JoSZ8HqJMCCqjwpseN5eCK4Xx4QKrglodnS2DJ0jDoZivZ%2BGlkU7xHZV1OqdHmGK7%2FpIYNVHD2wQ39jKhzbIczoAor4JQ08Ax2eIv6V4XfgNkTA7S48DWn%2BPUnXixMUTxMpgzhshsBYjJ85I7RSifQ5zmyEvfBCPmdrMnG9Og9gvWVoHjdruLmomD4D%2BZYEfnIKYQaa%2BD6%2FID3LuWkcYyq71EU7ML%2BMVuCEvxRJLOY1Cbx6stle1g0DsJ3DP2Yuy0DlK%2BaKD%2FSxw0oVRhR1PgT0Y1G1mkiVq7%2BUMKjM%2F74GOqUBhGATWocGBUkPqjZrXWdLyegy3M9NdhT9pAAnXimXmoniqlnEkA2bG1YdfG8R%2FkCs%2FQjRcTyWPhpEwpx6xV8yW4OYpclU7mJ4rOO4opV9xYCYGKpSKGTYk74gfY9lBSGU5mZvhsmscPho3thCKT2cJ%2B1dUmpCI2IsXTQ32o87fSD73IjeiY0xJNlnafPvNbSCtxqHyrnSn3EjZ7pidYh8oA0Re0MY&X-Amz-Signature=08004711326a8786b08074645fb170950d3725c451cf300522a710781b23851e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM74BQUR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEQqELza4VXkY81hcgcwHIoFYBQ2xPrGJ4Tz76as1XrTAiEA31UIqYr4dLiksPlg9e3lO06PzdJFbEldQ6E%2F0Lod9QcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPklECIlEdHwBn1KCrcA%2FHu1xtmAlGjLUKix1SSD5jVqJHCHoULY6PEa0LPBhqV2iukF5MdUviYIrGXYxMl32Tsez33XojGd7HtMtBiL%2BBx8%2BeSBG8S8CIywZJJ8X7Z4DcMWK9JfGDy9yW1tKR%2FY%2BiatweOgc0qvdYVuhjmks9nZcy7vzvMvvkaJk2w61xcwny7Mf199ai60vnlDr16OozNz2mZZpHb%2FXgyi240puFv%2BIgkkzA7g6q7RVEHfwAw6ht6%2BNLRHAEdO5F0avDwt3lBW1bXajLanCLfbW8Bd4vJFm3ApZk7J0EvITH865VmNT7YDoRxgd4oBx%2FHnmlhiBugAY50RHZyKrtx78gmL2a16JoSZ8HqJMCCqjwpseN5eCK4Xx4QKrglodnS2DJ0jDoZivZ%2BGlkU7xHZV1OqdHmGK7%2FpIYNVHD2wQ39jKhzbIczoAor4JQ08Ax2eIv6V4XfgNkTA7S48DWn%2BPUnXixMUTxMpgzhshsBYjJ85I7RSifQ5zmyEvfBCPmdrMnG9Og9gvWVoHjdruLmomD4D%2BZYEfnIKYQaa%2BD6%2FID3LuWkcYyq71EU7ML%2BMVuCEvxRJLOY1Cbx6stle1g0DsJ3DP2Yuy0DlK%2BaKD%2FSxw0oVRhR1PgT0Y1G1mkiVq7%2BUMKjM%2F74GOqUBhGATWocGBUkPqjZrXWdLyegy3M9NdhT9pAAnXimXmoniqlnEkA2bG1YdfG8R%2FkCs%2FQjRcTyWPhpEwpx6xV8yW4OYpclU7mJ4rOO4opV9xYCYGKpSKGTYk74gfY9lBSGU5mZvhsmscPho3thCKT2cJ%2B1dUmpCI2IsXTQ32o87fSD73IjeiY0xJNlnafPvNbSCtxqHyrnSn3EjZ7pidYh8oA0Re0MY&X-Amz-Signature=bbff125146c342c7b49a8d446de8d935ce1cec9169a4082990cd930ac8bf8686&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM74BQUR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEQqELza4VXkY81hcgcwHIoFYBQ2xPrGJ4Tz76as1XrTAiEA31UIqYr4dLiksPlg9e3lO06PzdJFbEldQ6E%2F0Lod9QcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPklECIlEdHwBn1KCrcA%2FHu1xtmAlGjLUKix1SSD5jVqJHCHoULY6PEa0LPBhqV2iukF5MdUviYIrGXYxMl32Tsez33XojGd7HtMtBiL%2BBx8%2BeSBG8S8CIywZJJ8X7Z4DcMWK9JfGDy9yW1tKR%2FY%2BiatweOgc0qvdYVuhjmks9nZcy7vzvMvvkaJk2w61xcwny7Mf199ai60vnlDr16OozNz2mZZpHb%2FXgyi240puFv%2BIgkkzA7g6q7RVEHfwAw6ht6%2BNLRHAEdO5F0avDwt3lBW1bXajLanCLfbW8Bd4vJFm3ApZk7J0EvITH865VmNT7YDoRxgd4oBx%2FHnmlhiBugAY50RHZyKrtx78gmL2a16JoSZ8HqJMCCqjwpseN5eCK4Xx4QKrglodnS2DJ0jDoZivZ%2BGlkU7xHZV1OqdHmGK7%2FpIYNVHD2wQ39jKhzbIczoAor4JQ08Ax2eIv6V4XfgNkTA7S48DWn%2BPUnXixMUTxMpgzhshsBYjJ85I7RSifQ5zmyEvfBCPmdrMnG9Og9gvWVoHjdruLmomD4D%2BZYEfnIKYQaa%2BD6%2FID3LuWkcYyq71EU7ML%2BMVuCEvxRJLOY1Cbx6stle1g0DsJ3DP2Yuy0DlK%2BaKD%2FSxw0oVRhR1PgT0Y1G1mkiVq7%2BUMKjM%2F74GOqUBhGATWocGBUkPqjZrXWdLyegy3M9NdhT9pAAnXimXmoniqlnEkA2bG1YdfG8R%2FkCs%2FQjRcTyWPhpEwpx6xV8yW4OYpclU7mJ4rOO4opV9xYCYGKpSKGTYk74gfY9lBSGU5mZvhsmscPho3thCKT2cJ%2B1dUmpCI2IsXTQ32o87fSD73IjeiY0xJNlnafPvNbSCtxqHyrnSn3EjZ7pidYh8oA0Re0MY&X-Amz-Signature=80f7f49bc8939c08496087bdba1ad914d39c0807c71b8a78a84cd642a9b91c66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM74BQUR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEQqELza4VXkY81hcgcwHIoFYBQ2xPrGJ4Tz76as1XrTAiEA31UIqYr4dLiksPlg9e3lO06PzdJFbEldQ6E%2F0Lod9QcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPklECIlEdHwBn1KCrcA%2FHu1xtmAlGjLUKix1SSD5jVqJHCHoULY6PEa0LPBhqV2iukF5MdUviYIrGXYxMl32Tsez33XojGd7HtMtBiL%2BBx8%2BeSBG8S8CIywZJJ8X7Z4DcMWK9JfGDy9yW1tKR%2FY%2BiatweOgc0qvdYVuhjmks9nZcy7vzvMvvkaJk2w61xcwny7Mf199ai60vnlDr16OozNz2mZZpHb%2FXgyi240puFv%2BIgkkzA7g6q7RVEHfwAw6ht6%2BNLRHAEdO5F0avDwt3lBW1bXajLanCLfbW8Bd4vJFm3ApZk7J0EvITH865VmNT7YDoRxgd4oBx%2FHnmlhiBugAY50RHZyKrtx78gmL2a16JoSZ8HqJMCCqjwpseN5eCK4Xx4QKrglodnS2DJ0jDoZivZ%2BGlkU7xHZV1OqdHmGK7%2FpIYNVHD2wQ39jKhzbIczoAor4JQ08Ax2eIv6V4XfgNkTA7S48DWn%2BPUnXixMUTxMpgzhshsBYjJ85I7RSifQ5zmyEvfBCPmdrMnG9Og9gvWVoHjdruLmomD4D%2BZYEfnIKYQaa%2BD6%2FID3LuWkcYyq71EU7ML%2BMVuCEvxRJLOY1Cbx6stle1g0DsJ3DP2Yuy0DlK%2BaKD%2FSxw0oVRhR1PgT0Y1G1mkiVq7%2BUMKjM%2F74GOqUBhGATWocGBUkPqjZrXWdLyegy3M9NdhT9pAAnXimXmoniqlnEkA2bG1YdfG8R%2FkCs%2FQjRcTyWPhpEwpx6xV8yW4OYpclU7mJ4rOO4opV9xYCYGKpSKGTYk74gfY9lBSGU5mZvhsmscPho3thCKT2cJ%2B1dUmpCI2IsXTQ32o87fSD73IjeiY0xJNlnafPvNbSCtxqHyrnSn3EjZ7pidYh8oA0Re0MY&X-Amz-Signature=97140eca56ad789e76573f93d71d777d2edf2694ccee3522b31259d72a0a0d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

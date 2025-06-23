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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCULSMCA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEh%2BxLspyKr8Ffwf2QjH4feG8HBY2IaXfNk4C1iHQxw8AiATyaCjZhC84RGGvumL8SKPB8AeDeuTS9BQkO%2FnsTHzgSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeTBjbyZ3ZxroN2f7KtwDbMJ3IjHrosGo%2Bw7Hx%2F%2BSkwyD9o7E%2FHDEPdHayfnXakSJWA31u6DYL%2FEOw48wWOAqKBfe6PSw%2BYFQ2AW4cA1xRwLD92apyJggJmegKfjkbIwVk7k0C63X6qfrRQeaVLDxMwGlW3lM38oc8XxgWzXSWgZn2x2tw0qHFwMC9agFZ%2BloWgPfKBabyGUBCe1bHH3XpEdaGXcPfpr8%2BtJyzmg1bzFXhSBIPEW9VKTp7cWc4ycbL1oJxOBjPpWa%2FtAVwCUSBbDqSmSjZqs3YpdBil2nv3%2F6hr9cz4MiiepSeh5G%2B3qvhAEjJl%2Brh%2BhAgcnTmxPcCiRZpXFXz84cl5OSJjGMJ4aFC27kGReG416mM6L4dKy5F6fE5SjYuAak6ASISzWK2iuxnaq8EdePxa2epFCzT3ysSpniYGaAGb8WP4UQuyPJqIFgSDkwlR7GjCqut68uIjZWyYNrzLqHPi6QOmc8A1Y9YGyLfkpmsVRA3zd7zHvdRo5E%2BenHZzmjlvcf1Sv7rErC6%2B6QyUsE0Ib%2Fj78iuYWoKgiw8aL%2B801Y3Mfbv2mZNArQUif7NEkAHQ8Y4i6AiCn%2BKNfBIGBx4n7uo0SYhOMP1QqFC8vdy8aIxaaJv1Ac1WfPuVbT9Zq%2F%2F30w8IrkwgY6pgEep6O%2F7QhFQO3nZBGYtnO9KlPTPBz5rYb661a1mGprN4wk8yzqJpwjX389xQevpI1kqqjmUax%2B%2FOdZ9g1TUMEwrEK12rBt69lC0J4C6Uv3g0DMgAYNtsYZF98vTpYPE3rorNNq6oWSXZS24DRKJPT8bvDhMzR%2FBke%2BW%2FIl%2BaeWaMZZF3xxPS7y5dFWfl8bTE3KPH%2B6ew%2FEClF%2BAfi6ZwMiotft%2Fmmm&X-Amz-Signature=0dc7f70d5512b33ce9477deca570982f309c158314cbb40d29af085189996fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCULSMCA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEh%2BxLspyKr8Ffwf2QjH4feG8HBY2IaXfNk4C1iHQxw8AiATyaCjZhC84RGGvumL8SKPB8AeDeuTS9BQkO%2FnsTHzgSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeTBjbyZ3ZxroN2f7KtwDbMJ3IjHrosGo%2Bw7Hx%2F%2BSkwyD9o7E%2FHDEPdHayfnXakSJWA31u6DYL%2FEOw48wWOAqKBfe6PSw%2BYFQ2AW4cA1xRwLD92apyJggJmegKfjkbIwVk7k0C63X6qfrRQeaVLDxMwGlW3lM38oc8XxgWzXSWgZn2x2tw0qHFwMC9agFZ%2BloWgPfKBabyGUBCe1bHH3XpEdaGXcPfpr8%2BtJyzmg1bzFXhSBIPEW9VKTp7cWc4ycbL1oJxOBjPpWa%2FtAVwCUSBbDqSmSjZqs3YpdBil2nv3%2F6hr9cz4MiiepSeh5G%2B3qvhAEjJl%2Brh%2BhAgcnTmxPcCiRZpXFXz84cl5OSJjGMJ4aFC27kGReG416mM6L4dKy5F6fE5SjYuAak6ASISzWK2iuxnaq8EdePxa2epFCzT3ysSpniYGaAGb8WP4UQuyPJqIFgSDkwlR7GjCqut68uIjZWyYNrzLqHPi6QOmc8A1Y9YGyLfkpmsVRA3zd7zHvdRo5E%2BenHZzmjlvcf1Sv7rErC6%2B6QyUsE0Ib%2Fj78iuYWoKgiw8aL%2B801Y3Mfbv2mZNArQUif7NEkAHQ8Y4i6AiCn%2BKNfBIGBx4n7uo0SYhOMP1QqFC8vdy8aIxaaJv1Ac1WfPuVbT9Zq%2F%2F30w8IrkwgY6pgEep6O%2F7QhFQO3nZBGYtnO9KlPTPBz5rYb661a1mGprN4wk8yzqJpwjX389xQevpI1kqqjmUax%2B%2FOdZ9g1TUMEwrEK12rBt69lC0J4C6Uv3g0DMgAYNtsYZF98vTpYPE3rorNNq6oWSXZS24DRKJPT8bvDhMzR%2FBke%2BW%2FIl%2BaeWaMZZF3xxPS7y5dFWfl8bTE3KPH%2B6ew%2FEClF%2BAfi6ZwMiotft%2Fmmm&X-Amz-Signature=82b3181dd992d5a3415666554787e1339c0cfe801efccdb3dbbdde1045e9ac39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCULSMCA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEh%2BxLspyKr8Ffwf2QjH4feG8HBY2IaXfNk4C1iHQxw8AiATyaCjZhC84RGGvumL8SKPB8AeDeuTS9BQkO%2FnsTHzgSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeTBjbyZ3ZxroN2f7KtwDbMJ3IjHrosGo%2Bw7Hx%2F%2BSkwyD9o7E%2FHDEPdHayfnXakSJWA31u6DYL%2FEOw48wWOAqKBfe6PSw%2BYFQ2AW4cA1xRwLD92apyJggJmegKfjkbIwVk7k0C63X6qfrRQeaVLDxMwGlW3lM38oc8XxgWzXSWgZn2x2tw0qHFwMC9agFZ%2BloWgPfKBabyGUBCe1bHH3XpEdaGXcPfpr8%2BtJyzmg1bzFXhSBIPEW9VKTp7cWc4ycbL1oJxOBjPpWa%2FtAVwCUSBbDqSmSjZqs3YpdBil2nv3%2F6hr9cz4MiiepSeh5G%2B3qvhAEjJl%2Brh%2BhAgcnTmxPcCiRZpXFXz84cl5OSJjGMJ4aFC27kGReG416mM6L4dKy5F6fE5SjYuAak6ASISzWK2iuxnaq8EdePxa2epFCzT3ysSpniYGaAGb8WP4UQuyPJqIFgSDkwlR7GjCqut68uIjZWyYNrzLqHPi6QOmc8A1Y9YGyLfkpmsVRA3zd7zHvdRo5E%2BenHZzmjlvcf1Sv7rErC6%2B6QyUsE0Ib%2Fj78iuYWoKgiw8aL%2B801Y3Mfbv2mZNArQUif7NEkAHQ8Y4i6AiCn%2BKNfBIGBx4n7uo0SYhOMP1QqFC8vdy8aIxaaJv1Ac1WfPuVbT9Zq%2F%2F30w8IrkwgY6pgEep6O%2F7QhFQO3nZBGYtnO9KlPTPBz5rYb661a1mGprN4wk8yzqJpwjX389xQevpI1kqqjmUax%2B%2FOdZ9g1TUMEwrEK12rBt69lC0J4C6Uv3g0DMgAYNtsYZF98vTpYPE3rorNNq6oWSXZS24DRKJPT8bvDhMzR%2FBke%2BW%2FIl%2BaeWaMZZF3xxPS7y5dFWfl8bTE3KPH%2B6ew%2FEClF%2BAfi6ZwMiotft%2Fmmm&X-Amz-Signature=6d3e1968c53799cfa5eecb84b41689ec26db6634f7df21302d8dd8972fdb54a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCULSMCA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEh%2BxLspyKr8Ffwf2QjH4feG8HBY2IaXfNk4C1iHQxw8AiATyaCjZhC84RGGvumL8SKPB8AeDeuTS9BQkO%2FnsTHzgSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeTBjbyZ3ZxroN2f7KtwDbMJ3IjHrosGo%2Bw7Hx%2F%2BSkwyD9o7E%2FHDEPdHayfnXakSJWA31u6DYL%2FEOw48wWOAqKBfe6PSw%2BYFQ2AW4cA1xRwLD92apyJggJmegKfjkbIwVk7k0C63X6qfrRQeaVLDxMwGlW3lM38oc8XxgWzXSWgZn2x2tw0qHFwMC9agFZ%2BloWgPfKBabyGUBCe1bHH3XpEdaGXcPfpr8%2BtJyzmg1bzFXhSBIPEW9VKTp7cWc4ycbL1oJxOBjPpWa%2FtAVwCUSBbDqSmSjZqs3YpdBil2nv3%2F6hr9cz4MiiepSeh5G%2B3qvhAEjJl%2Brh%2BhAgcnTmxPcCiRZpXFXz84cl5OSJjGMJ4aFC27kGReG416mM6L4dKy5F6fE5SjYuAak6ASISzWK2iuxnaq8EdePxa2epFCzT3ysSpniYGaAGb8WP4UQuyPJqIFgSDkwlR7GjCqut68uIjZWyYNrzLqHPi6QOmc8A1Y9YGyLfkpmsVRA3zd7zHvdRo5E%2BenHZzmjlvcf1Sv7rErC6%2B6QyUsE0Ib%2Fj78iuYWoKgiw8aL%2B801Y3Mfbv2mZNArQUif7NEkAHQ8Y4i6AiCn%2BKNfBIGBx4n7uo0SYhOMP1QqFC8vdy8aIxaaJv1Ac1WfPuVbT9Zq%2F%2F30w8IrkwgY6pgEep6O%2F7QhFQO3nZBGYtnO9KlPTPBz5rYb661a1mGprN4wk8yzqJpwjX389xQevpI1kqqjmUax%2B%2FOdZ9g1TUMEwrEK12rBt69lC0J4C6Uv3g0DMgAYNtsYZF98vTpYPE3rorNNq6oWSXZS24DRKJPT8bvDhMzR%2FBke%2BW%2FIl%2BaeWaMZZF3xxPS7y5dFWfl8bTE3KPH%2B6ew%2FEClF%2BAfi6ZwMiotft%2Fmmm&X-Amz-Signature=39985fab2f5ed627ae17bba94d5e0ea3eb1cff533cb77b7ee4111c2478679787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCULSMCA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEh%2BxLspyKr8Ffwf2QjH4feG8HBY2IaXfNk4C1iHQxw8AiATyaCjZhC84RGGvumL8SKPB8AeDeuTS9BQkO%2FnsTHzgSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeTBjbyZ3ZxroN2f7KtwDbMJ3IjHrosGo%2Bw7Hx%2F%2BSkwyD9o7E%2FHDEPdHayfnXakSJWA31u6DYL%2FEOw48wWOAqKBfe6PSw%2BYFQ2AW4cA1xRwLD92apyJggJmegKfjkbIwVk7k0C63X6qfrRQeaVLDxMwGlW3lM38oc8XxgWzXSWgZn2x2tw0qHFwMC9agFZ%2BloWgPfKBabyGUBCe1bHH3XpEdaGXcPfpr8%2BtJyzmg1bzFXhSBIPEW9VKTp7cWc4ycbL1oJxOBjPpWa%2FtAVwCUSBbDqSmSjZqs3YpdBil2nv3%2F6hr9cz4MiiepSeh5G%2B3qvhAEjJl%2Brh%2BhAgcnTmxPcCiRZpXFXz84cl5OSJjGMJ4aFC27kGReG416mM6L4dKy5F6fE5SjYuAak6ASISzWK2iuxnaq8EdePxa2epFCzT3ysSpniYGaAGb8WP4UQuyPJqIFgSDkwlR7GjCqut68uIjZWyYNrzLqHPi6QOmc8A1Y9YGyLfkpmsVRA3zd7zHvdRo5E%2BenHZzmjlvcf1Sv7rErC6%2B6QyUsE0Ib%2Fj78iuYWoKgiw8aL%2B801Y3Mfbv2mZNArQUif7NEkAHQ8Y4i6AiCn%2BKNfBIGBx4n7uo0SYhOMP1QqFC8vdy8aIxaaJv1Ac1WfPuVbT9Zq%2F%2F30w8IrkwgY6pgEep6O%2F7QhFQO3nZBGYtnO9KlPTPBz5rYb661a1mGprN4wk8yzqJpwjX389xQevpI1kqqjmUax%2B%2FOdZ9g1TUMEwrEK12rBt69lC0J4C6Uv3g0DMgAYNtsYZF98vTpYPE3rorNNq6oWSXZS24DRKJPT8bvDhMzR%2FBke%2BW%2FIl%2BaeWaMZZF3xxPS7y5dFWfl8bTE3KPH%2B6ew%2FEClF%2BAfi6ZwMiotft%2Fmmm&X-Amz-Signature=5e2ab7f7ac066a5f01e5af5f2723381ddc747c611224786a5da3766f4a324c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCULSMCA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEh%2BxLspyKr8Ffwf2QjH4feG8HBY2IaXfNk4C1iHQxw8AiATyaCjZhC84RGGvumL8SKPB8AeDeuTS9BQkO%2FnsTHzgSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeTBjbyZ3ZxroN2f7KtwDbMJ3IjHrosGo%2Bw7Hx%2F%2BSkwyD9o7E%2FHDEPdHayfnXakSJWA31u6DYL%2FEOw48wWOAqKBfe6PSw%2BYFQ2AW4cA1xRwLD92apyJggJmegKfjkbIwVk7k0C63X6qfrRQeaVLDxMwGlW3lM38oc8XxgWzXSWgZn2x2tw0qHFwMC9agFZ%2BloWgPfKBabyGUBCe1bHH3XpEdaGXcPfpr8%2BtJyzmg1bzFXhSBIPEW9VKTp7cWc4ycbL1oJxOBjPpWa%2FtAVwCUSBbDqSmSjZqs3YpdBil2nv3%2F6hr9cz4MiiepSeh5G%2B3qvhAEjJl%2Brh%2BhAgcnTmxPcCiRZpXFXz84cl5OSJjGMJ4aFC27kGReG416mM6L4dKy5F6fE5SjYuAak6ASISzWK2iuxnaq8EdePxa2epFCzT3ysSpniYGaAGb8WP4UQuyPJqIFgSDkwlR7GjCqut68uIjZWyYNrzLqHPi6QOmc8A1Y9YGyLfkpmsVRA3zd7zHvdRo5E%2BenHZzmjlvcf1Sv7rErC6%2B6QyUsE0Ib%2Fj78iuYWoKgiw8aL%2B801Y3Mfbv2mZNArQUif7NEkAHQ8Y4i6AiCn%2BKNfBIGBx4n7uo0SYhOMP1QqFC8vdy8aIxaaJv1Ac1WfPuVbT9Zq%2F%2F30w8IrkwgY6pgEep6O%2F7QhFQO3nZBGYtnO9KlPTPBz5rYb661a1mGprN4wk8yzqJpwjX389xQevpI1kqqjmUax%2B%2FOdZ9g1TUMEwrEK12rBt69lC0J4C6Uv3g0DMgAYNtsYZF98vTpYPE3rorNNq6oWSXZS24DRKJPT8bvDhMzR%2FBke%2BW%2FIl%2BaeWaMZZF3xxPS7y5dFWfl8bTE3KPH%2B6ew%2FEClF%2BAfi6ZwMiotft%2Fmmm&X-Amz-Signature=11c9ff5613f2bd03090abd1ee4fdf9e368f7d6861c1e567a82579402c38e62eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCULSMCA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEh%2BxLspyKr8Ffwf2QjH4feG8HBY2IaXfNk4C1iHQxw8AiATyaCjZhC84RGGvumL8SKPB8AeDeuTS9BQkO%2FnsTHzgSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeTBjbyZ3ZxroN2f7KtwDbMJ3IjHrosGo%2Bw7Hx%2F%2BSkwyD9o7E%2FHDEPdHayfnXakSJWA31u6DYL%2FEOw48wWOAqKBfe6PSw%2BYFQ2AW4cA1xRwLD92apyJggJmegKfjkbIwVk7k0C63X6qfrRQeaVLDxMwGlW3lM38oc8XxgWzXSWgZn2x2tw0qHFwMC9agFZ%2BloWgPfKBabyGUBCe1bHH3XpEdaGXcPfpr8%2BtJyzmg1bzFXhSBIPEW9VKTp7cWc4ycbL1oJxOBjPpWa%2FtAVwCUSBbDqSmSjZqs3YpdBil2nv3%2F6hr9cz4MiiepSeh5G%2B3qvhAEjJl%2Brh%2BhAgcnTmxPcCiRZpXFXz84cl5OSJjGMJ4aFC27kGReG416mM6L4dKy5F6fE5SjYuAak6ASISzWK2iuxnaq8EdePxa2epFCzT3ysSpniYGaAGb8WP4UQuyPJqIFgSDkwlR7GjCqut68uIjZWyYNrzLqHPi6QOmc8A1Y9YGyLfkpmsVRA3zd7zHvdRo5E%2BenHZzmjlvcf1Sv7rErC6%2B6QyUsE0Ib%2Fj78iuYWoKgiw8aL%2B801Y3Mfbv2mZNArQUif7NEkAHQ8Y4i6AiCn%2BKNfBIGBx4n7uo0SYhOMP1QqFC8vdy8aIxaaJv1Ac1WfPuVbT9Zq%2F%2F30w8IrkwgY6pgEep6O%2F7QhFQO3nZBGYtnO9KlPTPBz5rYb661a1mGprN4wk8yzqJpwjX389xQevpI1kqqjmUax%2B%2FOdZ9g1TUMEwrEK12rBt69lC0J4C6Uv3g0DMgAYNtsYZF98vTpYPE3rorNNq6oWSXZS24DRKJPT8bvDhMzR%2FBke%2BW%2FIl%2BaeWaMZZF3xxPS7y5dFWfl8bTE3KPH%2B6ew%2FEClF%2BAfi6ZwMiotft%2Fmmm&X-Amz-Signature=a7f4a7b76cfda09144b991c2e20367ac556bda4577f8022d4cecc4d6b00dfba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCULSMCA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEh%2BxLspyKr8Ffwf2QjH4feG8HBY2IaXfNk4C1iHQxw8AiATyaCjZhC84RGGvumL8SKPB8AeDeuTS9BQkO%2FnsTHzgSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMeTBjbyZ3ZxroN2f7KtwDbMJ3IjHrosGo%2Bw7Hx%2F%2BSkwyD9o7E%2FHDEPdHayfnXakSJWA31u6DYL%2FEOw48wWOAqKBfe6PSw%2BYFQ2AW4cA1xRwLD92apyJggJmegKfjkbIwVk7k0C63X6qfrRQeaVLDxMwGlW3lM38oc8XxgWzXSWgZn2x2tw0qHFwMC9agFZ%2BloWgPfKBabyGUBCe1bHH3XpEdaGXcPfpr8%2BtJyzmg1bzFXhSBIPEW9VKTp7cWc4ycbL1oJxOBjPpWa%2FtAVwCUSBbDqSmSjZqs3YpdBil2nv3%2F6hr9cz4MiiepSeh5G%2B3qvhAEjJl%2Brh%2BhAgcnTmxPcCiRZpXFXz84cl5OSJjGMJ4aFC27kGReG416mM6L4dKy5F6fE5SjYuAak6ASISzWK2iuxnaq8EdePxa2epFCzT3ysSpniYGaAGb8WP4UQuyPJqIFgSDkwlR7GjCqut68uIjZWyYNrzLqHPi6QOmc8A1Y9YGyLfkpmsVRA3zd7zHvdRo5E%2BenHZzmjlvcf1Sv7rErC6%2B6QyUsE0Ib%2Fj78iuYWoKgiw8aL%2B801Y3Mfbv2mZNArQUif7NEkAHQ8Y4i6AiCn%2BKNfBIGBx4n7uo0SYhOMP1QqFC8vdy8aIxaaJv1Ac1WfPuVbT9Zq%2F%2F30w8IrkwgY6pgEep6O%2F7QhFQO3nZBGYtnO9KlPTPBz5rYb661a1mGprN4wk8yzqJpwjX389xQevpI1kqqjmUax%2B%2FOdZ9g1TUMEwrEK12rBt69lC0J4C6Uv3g0DMgAYNtsYZF98vTpYPE3rorNNq6oWSXZS24DRKJPT8bvDhMzR%2FBke%2BW%2FIl%2BaeWaMZZF3xxPS7y5dFWfl8bTE3KPH%2B6ew%2FEClF%2BAfi6ZwMiotft%2Fmmm&X-Amz-Signature=df26fdd5498501d4f7f7838fe07335a96e3724e3930a19199913a9ba6c9087c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

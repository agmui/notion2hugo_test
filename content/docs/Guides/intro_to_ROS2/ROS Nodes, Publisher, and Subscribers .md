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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBX2HDQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBDsp5RhBjo9NCJhl%2FI2jeomljnUQyjJKJLQqBeqiXmkAiEAugRBFEHpoVbbvsNBH%2BfoXCxDwpKyzqfLbOjwOS18JikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKWdh6Kv8VC0%2BBfircAyrcgLcN2p%2BN2PH9RsNX%2FJcoWcamp5S0HzKH1ynsCSQKNU4ev%2FJXKqQbywEPDb0ObVaCblkrOqXIjlnal0T9ocxTeITbkv2SBLOyow2%2B%2FXqd%2FBA9RDSAXKAiBtBa6fsjGexJlAx7Oq42xYAMZYW3oYV3DUL2k77Bx0ROS%2FmFt0ne8aFi4Wlbs3aDFrbvJLk9BzfsXsw33%2FHX3hoQv7S1KJUI4ggS1bUCYPC2VCuGI2ER7or3kyDEj%2Bt%2B9A8KkjCi7sTa%2FxPMp03yi2c%2BDnxWXF%2Fary7x%2BEcfk6Sz75Tp3EDOCGLHWncG1doUuXxZdAKBfD%2BCtWiMPdGKnQsQgYmph1Kpo6d6kCJiSaDcTqu9Ekw6JxoxOcFMvW0WPykHwZECt0BKPSlHRAT79T46YRbj3BWXhmr6z1nto9eTLGEOIJxTZcNNjS5va0Z8GD%2FlHv08eYnrb5vJ4U0aDoCowyXRiRkTeE4kxSei%2F0dMIr0yuI4U6fB1EN%2BpdagzBpWBDIC8M4leLK1AkMbOPxKuWu%2FCvbcu6DcvKN4pL7ewcn3D3cGh7b8qlMBV10ktMzb2em02HTl3XDpdmS1F523DUaqDilgXEoJm56dGLSy2I78Hb3dFG5ffl0x%2Btf%2FeQsWRMN%2Fbl8MGOqUBCCk7udwkApHvVM291pScrT8DvruO4h82%2BNOYsqiZIxWVbGRx07NlCXi5wRfK84F93EmRyZNk4MfAapLCA2XhLR9Ma2VkleU0tP2ly9gs1zdpxez09%2BQ8EUiLIKzQj3YGKWO5oAxntS254jzbNfSRk%2Fyi%2FFNqK%2BB7qwA6b7eOwAXCXg1Ti8i3hmw0fKz554VnNOJFhGdEYn2FGoYqAPSekMkq3ozj&X-Amz-Signature=b38713af2db08e5a11fdbaf59e3ed26a7d3cdb3766e8d09c613631213daa3655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBX2HDQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBDsp5RhBjo9NCJhl%2FI2jeomljnUQyjJKJLQqBeqiXmkAiEAugRBFEHpoVbbvsNBH%2BfoXCxDwpKyzqfLbOjwOS18JikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKWdh6Kv8VC0%2BBfircAyrcgLcN2p%2BN2PH9RsNX%2FJcoWcamp5S0HzKH1ynsCSQKNU4ev%2FJXKqQbywEPDb0ObVaCblkrOqXIjlnal0T9ocxTeITbkv2SBLOyow2%2B%2FXqd%2FBA9RDSAXKAiBtBa6fsjGexJlAx7Oq42xYAMZYW3oYV3DUL2k77Bx0ROS%2FmFt0ne8aFi4Wlbs3aDFrbvJLk9BzfsXsw33%2FHX3hoQv7S1KJUI4ggS1bUCYPC2VCuGI2ER7or3kyDEj%2Bt%2B9A8KkjCi7sTa%2FxPMp03yi2c%2BDnxWXF%2Fary7x%2BEcfk6Sz75Tp3EDOCGLHWncG1doUuXxZdAKBfD%2BCtWiMPdGKnQsQgYmph1Kpo6d6kCJiSaDcTqu9Ekw6JxoxOcFMvW0WPykHwZECt0BKPSlHRAT79T46YRbj3BWXhmr6z1nto9eTLGEOIJxTZcNNjS5va0Z8GD%2FlHv08eYnrb5vJ4U0aDoCowyXRiRkTeE4kxSei%2F0dMIr0yuI4U6fB1EN%2BpdagzBpWBDIC8M4leLK1AkMbOPxKuWu%2FCvbcu6DcvKN4pL7ewcn3D3cGh7b8qlMBV10ktMzb2em02HTl3XDpdmS1F523DUaqDilgXEoJm56dGLSy2I78Hb3dFG5ffl0x%2Btf%2FeQsWRMN%2Fbl8MGOqUBCCk7udwkApHvVM291pScrT8DvruO4h82%2BNOYsqiZIxWVbGRx07NlCXi5wRfK84F93EmRyZNk4MfAapLCA2XhLR9Ma2VkleU0tP2ly9gs1zdpxez09%2BQ8EUiLIKzQj3YGKWO5oAxntS254jzbNfSRk%2Fyi%2FFNqK%2BB7qwA6b7eOwAXCXg1Ti8i3hmw0fKz554VnNOJFhGdEYn2FGoYqAPSekMkq3ozj&X-Amz-Signature=4b6991831262d37ed614196eeac3d3924d6c0eea6f5daeb1562ddd8438920006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBX2HDQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBDsp5RhBjo9NCJhl%2FI2jeomljnUQyjJKJLQqBeqiXmkAiEAugRBFEHpoVbbvsNBH%2BfoXCxDwpKyzqfLbOjwOS18JikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKWdh6Kv8VC0%2BBfircAyrcgLcN2p%2BN2PH9RsNX%2FJcoWcamp5S0HzKH1ynsCSQKNU4ev%2FJXKqQbywEPDb0ObVaCblkrOqXIjlnal0T9ocxTeITbkv2SBLOyow2%2B%2FXqd%2FBA9RDSAXKAiBtBa6fsjGexJlAx7Oq42xYAMZYW3oYV3DUL2k77Bx0ROS%2FmFt0ne8aFi4Wlbs3aDFrbvJLk9BzfsXsw33%2FHX3hoQv7S1KJUI4ggS1bUCYPC2VCuGI2ER7or3kyDEj%2Bt%2B9A8KkjCi7sTa%2FxPMp03yi2c%2BDnxWXF%2Fary7x%2BEcfk6Sz75Tp3EDOCGLHWncG1doUuXxZdAKBfD%2BCtWiMPdGKnQsQgYmph1Kpo6d6kCJiSaDcTqu9Ekw6JxoxOcFMvW0WPykHwZECt0BKPSlHRAT79T46YRbj3BWXhmr6z1nto9eTLGEOIJxTZcNNjS5va0Z8GD%2FlHv08eYnrb5vJ4U0aDoCowyXRiRkTeE4kxSei%2F0dMIr0yuI4U6fB1EN%2BpdagzBpWBDIC8M4leLK1AkMbOPxKuWu%2FCvbcu6DcvKN4pL7ewcn3D3cGh7b8qlMBV10ktMzb2em02HTl3XDpdmS1F523DUaqDilgXEoJm56dGLSy2I78Hb3dFG5ffl0x%2Btf%2FeQsWRMN%2Fbl8MGOqUBCCk7udwkApHvVM291pScrT8DvruO4h82%2BNOYsqiZIxWVbGRx07NlCXi5wRfK84F93EmRyZNk4MfAapLCA2XhLR9Ma2VkleU0tP2ly9gs1zdpxez09%2BQ8EUiLIKzQj3YGKWO5oAxntS254jzbNfSRk%2Fyi%2FFNqK%2BB7qwA6b7eOwAXCXg1Ti8i3hmw0fKz554VnNOJFhGdEYn2FGoYqAPSekMkq3ozj&X-Amz-Signature=671a561c492ed441ba305234c23a8fcb1d441a362f429f25171df636470737e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBX2HDQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBDsp5RhBjo9NCJhl%2FI2jeomljnUQyjJKJLQqBeqiXmkAiEAugRBFEHpoVbbvsNBH%2BfoXCxDwpKyzqfLbOjwOS18JikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKWdh6Kv8VC0%2BBfircAyrcgLcN2p%2BN2PH9RsNX%2FJcoWcamp5S0HzKH1ynsCSQKNU4ev%2FJXKqQbywEPDb0ObVaCblkrOqXIjlnal0T9ocxTeITbkv2SBLOyow2%2B%2FXqd%2FBA9RDSAXKAiBtBa6fsjGexJlAx7Oq42xYAMZYW3oYV3DUL2k77Bx0ROS%2FmFt0ne8aFi4Wlbs3aDFrbvJLk9BzfsXsw33%2FHX3hoQv7S1KJUI4ggS1bUCYPC2VCuGI2ER7or3kyDEj%2Bt%2B9A8KkjCi7sTa%2FxPMp03yi2c%2BDnxWXF%2Fary7x%2BEcfk6Sz75Tp3EDOCGLHWncG1doUuXxZdAKBfD%2BCtWiMPdGKnQsQgYmph1Kpo6d6kCJiSaDcTqu9Ekw6JxoxOcFMvW0WPykHwZECt0BKPSlHRAT79T46YRbj3BWXhmr6z1nto9eTLGEOIJxTZcNNjS5va0Z8GD%2FlHv08eYnrb5vJ4U0aDoCowyXRiRkTeE4kxSei%2F0dMIr0yuI4U6fB1EN%2BpdagzBpWBDIC8M4leLK1AkMbOPxKuWu%2FCvbcu6DcvKN4pL7ewcn3D3cGh7b8qlMBV10ktMzb2em02HTl3XDpdmS1F523DUaqDilgXEoJm56dGLSy2I78Hb3dFG5ffl0x%2Btf%2FeQsWRMN%2Fbl8MGOqUBCCk7udwkApHvVM291pScrT8DvruO4h82%2BNOYsqiZIxWVbGRx07NlCXi5wRfK84F93EmRyZNk4MfAapLCA2XhLR9Ma2VkleU0tP2ly9gs1zdpxez09%2BQ8EUiLIKzQj3YGKWO5oAxntS254jzbNfSRk%2Fyi%2FFNqK%2BB7qwA6b7eOwAXCXg1Ti8i3hmw0fKz554VnNOJFhGdEYn2FGoYqAPSekMkq3ozj&X-Amz-Signature=5cb6da7dea107076f02f6e1bd9a32aa3c53e475d3bb97d0a4b678167e97fe3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBX2HDQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBDsp5RhBjo9NCJhl%2FI2jeomljnUQyjJKJLQqBeqiXmkAiEAugRBFEHpoVbbvsNBH%2BfoXCxDwpKyzqfLbOjwOS18JikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKWdh6Kv8VC0%2BBfircAyrcgLcN2p%2BN2PH9RsNX%2FJcoWcamp5S0HzKH1ynsCSQKNU4ev%2FJXKqQbywEPDb0ObVaCblkrOqXIjlnal0T9ocxTeITbkv2SBLOyow2%2B%2FXqd%2FBA9RDSAXKAiBtBa6fsjGexJlAx7Oq42xYAMZYW3oYV3DUL2k77Bx0ROS%2FmFt0ne8aFi4Wlbs3aDFrbvJLk9BzfsXsw33%2FHX3hoQv7S1KJUI4ggS1bUCYPC2VCuGI2ER7or3kyDEj%2Bt%2B9A8KkjCi7sTa%2FxPMp03yi2c%2BDnxWXF%2Fary7x%2BEcfk6Sz75Tp3EDOCGLHWncG1doUuXxZdAKBfD%2BCtWiMPdGKnQsQgYmph1Kpo6d6kCJiSaDcTqu9Ekw6JxoxOcFMvW0WPykHwZECt0BKPSlHRAT79T46YRbj3BWXhmr6z1nto9eTLGEOIJxTZcNNjS5va0Z8GD%2FlHv08eYnrb5vJ4U0aDoCowyXRiRkTeE4kxSei%2F0dMIr0yuI4U6fB1EN%2BpdagzBpWBDIC8M4leLK1AkMbOPxKuWu%2FCvbcu6DcvKN4pL7ewcn3D3cGh7b8qlMBV10ktMzb2em02HTl3XDpdmS1F523DUaqDilgXEoJm56dGLSy2I78Hb3dFG5ffl0x%2Btf%2FeQsWRMN%2Fbl8MGOqUBCCk7udwkApHvVM291pScrT8DvruO4h82%2BNOYsqiZIxWVbGRx07NlCXi5wRfK84F93EmRyZNk4MfAapLCA2XhLR9Ma2VkleU0tP2ly9gs1zdpxez09%2BQ8EUiLIKzQj3YGKWO5oAxntS254jzbNfSRk%2Fyi%2FFNqK%2BB7qwA6b7eOwAXCXg1Ti8i3hmw0fKz554VnNOJFhGdEYn2FGoYqAPSekMkq3ozj&X-Amz-Signature=65bee22a773fb1bcfe6e9ac73535571c7057d34998993da7dde7a13700c256cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBX2HDQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBDsp5RhBjo9NCJhl%2FI2jeomljnUQyjJKJLQqBeqiXmkAiEAugRBFEHpoVbbvsNBH%2BfoXCxDwpKyzqfLbOjwOS18JikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKWdh6Kv8VC0%2BBfircAyrcgLcN2p%2BN2PH9RsNX%2FJcoWcamp5S0HzKH1ynsCSQKNU4ev%2FJXKqQbywEPDb0ObVaCblkrOqXIjlnal0T9ocxTeITbkv2SBLOyow2%2B%2FXqd%2FBA9RDSAXKAiBtBa6fsjGexJlAx7Oq42xYAMZYW3oYV3DUL2k77Bx0ROS%2FmFt0ne8aFi4Wlbs3aDFrbvJLk9BzfsXsw33%2FHX3hoQv7S1KJUI4ggS1bUCYPC2VCuGI2ER7or3kyDEj%2Bt%2B9A8KkjCi7sTa%2FxPMp03yi2c%2BDnxWXF%2Fary7x%2BEcfk6Sz75Tp3EDOCGLHWncG1doUuXxZdAKBfD%2BCtWiMPdGKnQsQgYmph1Kpo6d6kCJiSaDcTqu9Ekw6JxoxOcFMvW0WPykHwZECt0BKPSlHRAT79T46YRbj3BWXhmr6z1nto9eTLGEOIJxTZcNNjS5va0Z8GD%2FlHv08eYnrb5vJ4U0aDoCowyXRiRkTeE4kxSei%2F0dMIr0yuI4U6fB1EN%2BpdagzBpWBDIC8M4leLK1AkMbOPxKuWu%2FCvbcu6DcvKN4pL7ewcn3D3cGh7b8qlMBV10ktMzb2em02HTl3XDpdmS1F523DUaqDilgXEoJm56dGLSy2I78Hb3dFG5ffl0x%2Btf%2FeQsWRMN%2Fbl8MGOqUBCCk7udwkApHvVM291pScrT8DvruO4h82%2BNOYsqiZIxWVbGRx07NlCXi5wRfK84F93EmRyZNk4MfAapLCA2XhLR9Ma2VkleU0tP2ly9gs1zdpxez09%2BQ8EUiLIKzQj3YGKWO5oAxntS254jzbNfSRk%2Fyi%2FFNqK%2BB7qwA6b7eOwAXCXg1Ti8i3hmw0fKz554VnNOJFhGdEYn2FGoYqAPSekMkq3ozj&X-Amz-Signature=a82c729e59f19cab848745018f2633eec19008303e1da7445e57d0abeeea0f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBX2HDQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBDsp5RhBjo9NCJhl%2FI2jeomljnUQyjJKJLQqBeqiXmkAiEAugRBFEHpoVbbvsNBH%2BfoXCxDwpKyzqfLbOjwOS18JikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKWdh6Kv8VC0%2BBfircAyrcgLcN2p%2BN2PH9RsNX%2FJcoWcamp5S0HzKH1ynsCSQKNU4ev%2FJXKqQbywEPDb0ObVaCblkrOqXIjlnal0T9ocxTeITbkv2SBLOyow2%2B%2FXqd%2FBA9RDSAXKAiBtBa6fsjGexJlAx7Oq42xYAMZYW3oYV3DUL2k77Bx0ROS%2FmFt0ne8aFi4Wlbs3aDFrbvJLk9BzfsXsw33%2FHX3hoQv7S1KJUI4ggS1bUCYPC2VCuGI2ER7or3kyDEj%2Bt%2B9A8KkjCi7sTa%2FxPMp03yi2c%2BDnxWXF%2Fary7x%2BEcfk6Sz75Tp3EDOCGLHWncG1doUuXxZdAKBfD%2BCtWiMPdGKnQsQgYmph1Kpo6d6kCJiSaDcTqu9Ekw6JxoxOcFMvW0WPykHwZECt0BKPSlHRAT79T46YRbj3BWXhmr6z1nto9eTLGEOIJxTZcNNjS5va0Z8GD%2FlHv08eYnrb5vJ4U0aDoCowyXRiRkTeE4kxSei%2F0dMIr0yuI4U6fB1EN%2BpdagzBpWBDIC8M4leLK1AkMbOPxKuWu%2FCvbcu6DcvKN4pL7ewcn3D3cGh7b8qlMBV10ktMzb2em02HTl3XDpdmS1F523DUaqDilgXEoJm56dGLSy2I78Hb3dFG5ffl0x%2Btf%2FeQsWRMN%2Fbl8MGOqUBCCk7udwkApHvVM291pScrT8DvruO4h82%2BNOYsqiZIxWVbGRx07NlCXi5wRfK84F93EmRyZNk4MfAapLCA2XhLR9Ma2VkleU0tP2ly9gs1zdpxez09%2BQ8EUiLIKzQj3YGKWO5oAxntS254jzbNfSRk%2Fyi%2FFNqK%2BB7qwA6b7eOwAXCXg1Ti8i3hmw0fKz554VnNOJFhGdEYn2FGoYqAPSekMkq3ozj&X-Amz-Signature=231f5b42c62f3b790c2592d957d9f8e1907ff803ab5dcac3837f866f17d469db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBX2HDQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBDsp5RhBjo9NCJhl%2FI2jeomljnUQyjJKJLQqBeqiXmkAiEAugRBFEHpoVbbvsNBH%2BfoXCxDwpKyzqfLbOjwOS18JikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfKWdh6Kv8VC0%2BBfircAyrcgLcN2p%2BN2PH9RsNX%2FJcoWcamp5S0HzKH1ynsCSQKNU4ev%2FJXKqQbywEPDb0ObVaCblkrOqXIjlnal0T9ocxTeITbkv2SBLOyow2%2B%2FXqd%2FBA9RDSAXKAiBtBa6fsjGexJlAx7Oq42xYAMZYW3oYV3DUL2k77Bx0ROS%2FmFt0ne8aFi4Wlbs3aDFrbvJLk9BzfsXsw33%2FHX3hoQv7S1KJUI4ggS1bUCYPC2VCuGI2ER7or3kyDEj%2Bt%2B9A8KkjCi7sTa%2FxPMp03yi2c%2BDnxWXF%2Fary7x%2BEcfk6Sz75Tp3EDOCGLHWncG1doUuXxZdAKBfD%2BCtWiMPdGKnQsQgYmph1Kpo6d6kCJiSaDcTqu9Ekw6JxoxOcFMvW0WPykHwZECt0BKPSlHRAT79T46YRbj3BWXhmr6z1nto9eTLGEOIJxTZcNNjS5va0Z8GD%2FlHv08eYnrb5vJ4U0aDoCowyXRiRkTeE4kxSei%2F0dMIr0yuI4U6fB1EN%2BpdagzBpWBDIC8M4leLK1AkMbOPxKuWu%2FCvbcu6DcvKN4pL7ewcn3D3cGh7b8qlMBV10ktMzb2em02HTl3XDpdmS1F523DUaqDilgXEoJm56dGLSy2I78Hb3dFG5ffl0x%2Btf%2FeQsWRMN%2Fbl8MGOqUBCCk7udwkApHvVM291pScrT8DvruO4h82%2BNOYsqiZIxWVbGRx07NlCXi5wRfK84F93EmRyZNk4MfAapLCA2XhLR9Ma2VkleU0tP2ly9gs1zdpxez09%2BQ8EUiLIKzQj3YGKWO5oAxntS254jzbNfSRk%2Fyi%2FFNqK%2BB7qwA6b7eOwAXCXg1Ti8i3hmw0fKz554VnNOJFhGdEYn2FGoYqAPSekMkq3ozj&X-Amz-Signature=1e28d0c111e392cf52881fc8d1030fe67dd3e639b9e0f7742b2014479317152b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

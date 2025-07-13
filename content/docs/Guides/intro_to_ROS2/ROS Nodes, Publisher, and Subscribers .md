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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZDIMIT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQaokrf9WqU2zK9TkteulzygWcgxIU%2B8%2Fb7xtM6ar6QIhAPHTxs39a1FFaoSFzVlZeBpApptzdrG9efvMArRM9FPUKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfsYq23ZYOadsXA64q3AMbnN1vg7DOlD%2F6RyApqjcgZswdbjx2jBZP3PW4Qgu6C5ZTFFynPdGpPn7o4AAAwPsJ7W9zLCPE7iio4qG6NZ8fFW%2FSo%2FjHW%2BZusZda1er6r89vAkFsvXuRRw6UGBVvFELsKonOOSNkky%2FTDJHXcLHmpaNOrYvhWpd7U16eAmBWxyeVRETyRt3QznzGgiJ8s0ufrIrZdVKEMoenfnNBkBkTme7WkknwK3g8agt2qJnYRYac4y9xGT2bnRQajlmHeso5ENTltCXQDlt69guM8WezVxZEuYo1Y1fZHFIwPh9fHttF67cDyLSjJ%2FPj7zwF52PlK72XLeyymE7tOffSpd%2BACh8viyLN6QDSsKy0DBmBs41L7DJ8jDljDXFj9I3RQfYFRw4BxMzKT%2Fg%2BHI0o1CTWJ0E69nYeXchJk8JJSoaxrg6BwvhGNFV6FR7UymjQG4Cnj7SuY5XhE5VBt6Om9N%2BEyKJJRVrftioXuGE1AT0wH6FTDLMxHwgVsxE9HaQRACpRvnjfQx%2BE8zxVLs51pkLkXiIc8a8WIwH%2Fo06GoaiyerNw4O3HSxTSOSsSFAwftqnCX8Q6im%2B6gfg23GKnVxpF5D6Rmq9%2F1UdmtssI4Q3oQhiogyh00FGVMlZeijCYrczDBjqkAbAIhWxUTQGJPoPZVYqbkro2HSQhoV0uabcOfIViAHeWqYSYhwCGNZZ2JOyFd%2FlhX4ViVWnxWs%2F85LjHLCsJW3hxESjgXYauw5FHv%2Bqig3%2F%2FhS22j4OnXf6%2FcJzMrguzO5reolM8I1y%2B2u8LBhWwX1ScAHB4PfcWAQ1EYy803%2F62u0ZXrNSSUQP%2BUfyxHnTsAo01PNg%2B%2FHc5VxiZPy9QgytyUTId&X-Amz-Signature=f744649a66209e78cc0effc5c6342e1665b5d919e95390d44dfff897d2defc98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZDIMIT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQaokrf9WqU2zK9TkteulzygWcgxIU%2B8%2Fb7xtM6ar6QIhAPHTxs39a1FFaoSFzVlZeBpApptzdrG9efvMArRM9FPUKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfsYq23ZYOadsXA64q3AMbnN1vg7DOlD%2F6RyApqjcgZswdbjx2jBZP3PW4Qgu6C5ZTFFynPdGpPn7o4AAAwPsJ7W9zLCPE7iio4qG6NZ8fFW%2FSo%2FjHW%2BZusZda1er6r89vAkFsvXuRRw6UGBVvFELsKonOOSNkky%2FTDJHXcLHmpaNOrYvhWpd7U16eAmBWxyeVRETyRt3QznzGgiJ8s0ufrIrZdVKEMoenfnNBkBkTme7WkknwK3g8agt2qJnYRYac4y9xGT2bnRQajlmHeso5ENTltCXQDlt69guM8WezVxZEuYo1Y1fZHFIwPh9fHttF67cDyLSjJ%2FPj7zwF52PlK72XLeyymE7tOffSpd%2BACh8viyLN6QDSsKy0DBmBs41L7DJ8jDljDXFj9I3RQfYFRw4BxMzKT%2Fg%2BHI0o1CTWJ0E69nYeXchJk8JJSoaxrg6BwvhGNFV6FR7UymjQG4Cnj7SuY5XhE5VBt6Om9N%2BEyKJJRVrftioXuGE1AT0wH6FTDLMxHwgVsxE9HaQRACpRvnjfQx%2BE8zxVLs51pkLkXiIc8a8WIwH%2Fo06GoaiyerNw4O3HSxTSOSsSFAwftqnCX8Q6im%2B6gfg23GKnVxpF5D6Rmq9%2F1UdmtssI4Q3oQhiogyh00FGVMlZeijCYrczDBjqkAbAIhWxUTQGJPoPZVYqbkro2HSQhoV0uabcOfIViAHeWqYSYhwCGNZZ2JOyFd%2FlhX4ViVWnxWs%2F85LjHLCsJW3hxESjgXYauw5FHv%2Bqig3%2F%2FhS22j4OnXf6%2FcJzMrguzO5reolM8I1y%2B2u8LBhWwX1ScAHB4PfcWAQ1EYy803%2F62u0ZXrNSSUQP%2BUfyxHnTsAo01PNg%2B%2FHc5VxiZPy9QgytyUTId&X-Amz-Signature=69136bc5c8997bc02c16daf4ebf4462a67c8ecccf9fd0eefa7d26f3f30391c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZDIMIT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQaokrf9WqU2zK9TkteulzygWcgxIU%2B8%2Fb7xtM6ar6QIhAPHTxs39a1FFaoSFzVlZeBpApptzdrG9efvMArRM9FPUKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfsYq23ZYOadsXA64q3AMbnN1vg7DOlD%2F6RyApqjcgZswdbjx2jBZP3PW4Qgu6C5ZTFFynPdGpPn7o4AAAwPsJ7W9zLCPE7iio4qG6NZ8fFW%2FSo%2FjHW%2BZusZda1er6r89vAkFsvXuRRw6UGBVvFELsKonOOSNkky%2FTDJHXcLHmpaNOrYvhWpd7U16eAmBWxyeVRETyRt3QznzGgiJ8s0ufrIrZdVKEMoenfnNBkBkTme7WkknwK3g8agt2qJnYRYac4y9xGT2bnRQajlmHeso5ENTltCXQDlt69guM8WezVxZEuYo1Y1fZHFIwPh9fHttF67cDyLSjJ%2FPj7zwF52PlK72XLeyymE7tOffSpd%2BACh8viyLN6QDSsKy0DBmBs41L7DJ8jDljDXFj9I3RQfYFRw4BxMzKT%2Fg%2BHI0o1CTWJ0E69nYeXchJk8JJSoaxrg6BwvhGNFV6FR7UymjQG4Cnj7SuY5XhE5VBt6Om9N%2BEyKJJRVrftioXuGE1AT0wH6FTDLMxHwgVsxE9HaQRACpRvnjfQx%2BE8zxVLs51pkLkXiIc8a8WIwH%2Fo06GoaiyerNw4O3HSxTSOSsSFAwftqnCX8Q6im%2B6gfg23GKnVxpF5D6Rmq9%2F1UdmtssI4Q3oQhiogyh00FGVMlZeijCYrczDBjqkAbAIhWxUTQGJPoPZVYqbkro2HSQhoV0uabcOfIViAHeWqYSYhwCGNZZ2JOyFd%2FlhX4ViVWnxWs%2F85LjHLCsJW3hxESjgXYauw5FHv%2Bqig3%2F%2FhS22j4OnXf6%2FcJzMrguzO5reolM8I1y%2B2u8LBhWwX1ScAHB4PfcWAQ1EYy803%2F62u0ZXrNSSUQP%2BUfyxHnTsAo01PNg%2B%2FHc5VxiZPy9QgytyUTId&X-Amz-Signature=e5114229ace87da7455c60a83bd2c221c6fe1416674321925c66fd524a3f4257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZDIMIT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQaokrf9WqU2zK9TkteulzygWcgxIU%2B8%2Fb7xtM6ar6QIhAPHTxs39a1FFaoSFzVlZeBpApptzdrG9efvMArRM9FPUKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfsYq23ZYOadsXA64q3AMbnN1vg7DOlD%2F6RyApqjcgZswdbjx2jBZP3PW4Qgu6C5ZTFFynPdGpPn7o4AAAwPsJ7W9zLCPE7iio4qG6NZ8fFW%2FSo%2FjHW%2BZusZda1er6r89vAkFsvXuRRw6UGBVvFELsKonOOSNkky%2FTDJHXcLHmpaNOrYvhWpd7U16eAmBWxyeVRETyRt3QznzGgiJ8s0ufrIrZdVKEMoenfnNBkBkTme7WkknwK3g8agt2qJnYRYac4y9xGT2bnRQajlmHeso5ENTltCXQDlt69guM8WezVxZEuYo1Y1fZHFIwPh9fHttF67cDyLSjJ%2FPj7zwF52PlK72XLeyymE7tOffSpd%2BACh8viyLN6QDSsKy0DBmBs41L7DJ8jDljDXFj9I3RQfYFRw4BxMzKT%2Fg%2BHI0o1CTWJ0E69nYeXchJk8JJSoaxrg6BwvhGNFV6FR7UymjQG4Cnj7SuY5XhE5VBt6Om9N%2BEyKJJRVrftioXuGE1AT0wH6FTDLMxHwgVsxE9HaQRACpRvnjfQx%2BE8zxVLs51pkLkXiIc8a8WIwH%2Fo06GoaiyerNw4O3HSxTSOSsSFAwftqnCX8Q6im%2B6gfg23GKnVxpF5D6Rmq9%2F1UdmtssI4Q3oQhiogyh00FGVMlZeijCYrczDBjqkAbAIhWxUTQGJPoPZVYqbkro2HSQhoV0uabcOfIViAHeWqYSYhwCGNZZ2JOyFd%2FlhX4ViVWnxWs%2F85LjHLCsJW3hxESjgXYauw5FHv%2Bqig3%2F%2FhS22j4OnXf6%2FcJzMrguzO5reolM8I1y%2B2u8LBhWwX1ScAHB4PfcWAQ1EYy803%2F62u0ZXrNSSUQP%2BUfyxHnTsAo01PNg%2B%2FHc5VxiZPy9QgytyUTId&X-Amz-Signature=41db96add8259ac81becba39c5a9560d425c65bdc5a966c6188c9cc31b54f91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZDIMIT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQaokrf9WqU2zK9TkteulzygWcgxIU%2B8%2Fb7xtM6ar6QIhAPHTxs39a1FFaoSFzVlZeBpApptzdrG9efvMArRM9FPUKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfsYq23ZYOadsXA64q3AMbnN1vg7DOlD%2F6RyApqjcgZswdbjx2jBZP3PW4Qgu6C5ZTFFynPdGpPn7o4AAAwPsJ7W9zLCPE7iio4qG6NZ8fFW%2FSo%2FjHW%2BZusZda1er6r89vAkFsvXuRRw6UGBVvFELsKonOOSNkky%2FTDJHXcLHmpaNOrYvhWpd7U16eAmBWxyeVRETyRt3QznzGgiJ8s0ufrIrZdVKEMoenfnNBkBkTme7WkknwK3g8agt2qJnYRYac4y9xGT2bnRQajlmHeso5ENTltCXQDlt69guM8WezVxZEuYo1Y1fZHFIwPh9fHttF67cDyLSjJ%2FPj7zwF52PlK72XLeyymE7tOffSpd%2BACh8viyLN6QDSsKy0DBmBs41L7DJ8jDljDXFj9I3RQfYFRw4BxMzKT%2Fg%2BHI0o1CTWJ0E69nYeXchJk8JJSoaxrg6BwvhGNFV6FR7UymjQG4Cnj7SuY5XhE5VBt6Om9N%2BEyKJJRVrftioXuGE1AT0wH6FTDLMxHwgVsxE9HaQRACpRvnjfQx%2BE8zxVLs51pkLkXiIc8a8WIwH%2Fo06GoaiyerNw4O3HSxTSOSsSFAwftqnCX8Q6im%2B6gfg23GKnVxpF5D6Rmq9%2F1UdmtssI4Q3oQhiogyh00FGVMlZeijCYrczDBjqkAbAIhWxUTQGJPoPZVYqbkro2HSQhoV0uabcOfIViAHeWqYSYhwCGNZZ2JOyFd%2FlhX4ViVWnxWs%2F85LjHLCsJW3hxESjgXYauw5FHv%2Bqig3%2F%2FhS22j4OnXf6%2FcJzMrguzO5reolM8I1y%2B2u8LBhWwX1ScAHB4PfcWAQ1EYy803%2F62u0ZXrNSSUQP%2BUfyxHnTsAo01PNg%2B%2FHc5VxiZPy9QgytyUTId&X-Amz-Signature=0c97c40f033332066f62d4695667b9b89bea74efcbe93cd0308d352398b12f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZDIMIT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQaokrf9WqU2zK9TkteulzygWcgxIU%2B8%2Fb7xtM6ar6QIhAPHTxs39a1FFaoSFzVlZeBpApptzdrG9efvMArRM9FPUKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfsYq23ZYOadsXA64q3AMbnN1vg7DOlD%2F6RyApqjcgZswdbjx2jBZP3PW4Qgu6C5ZTFFynPdGpPn7o4AAAwPsJ7W9zLCPE7iio4qG6NZ8fFW%2FSo%2FjHW%2BZusZda1er6r89vAkFsvXuRRw6UGBVvFELsKonOOSNkky%2FTDJHXcLHmpaNOrYvhWpd7U16eAmBWxyeVRETyRt3QznzGgiJ8s0ufrIrZdVKEMoenfnNBkBkTme7WkknwK3g8agt2qJnYRYac4y9xGT2bnRQajlmHeso5ENTltCXQDlt69guM8WezVxZEuYo1Y1fZHFIwPh9fHttF67cDyLSjJ%2FPj7zwF52PlK72XLeyymE7tOffSpd%2BACh8viyLN6QDSsKy0DBmBs41L7DJ8jDljDXFj9I3RQfYFRw4BxMzKT%2Fg%2BHI0o1CTWJ0E69nYeXchJk8JJSoaxrg6BwvhGNFV6FR7UymjQG4Cnj7SuY5XhE5VBt6Om9N%2BEyKJJRVrftioXuGE1AT0wH6FTDLMxHwgVsxE9HaQRACpRvnjfQx%2BE8zxVLs51pkLkXiIc8a8WIwH%2Fo06GoaiyerNw4O3HSxTSOSsSFAwftqnCX8Q6im%2B6gfg23GKnVxpF5D6Rmq9%2F1UdmtssI4Q3oQhiogyh00FGVMlZeijCYrczDBjqkAbAIhWxUTQGJPoPZVYqbkro2HSQhoV0uabcOfIViAHeWqYSYhwCGNZZ2JOyFd%2FlhX4ViVWnxWs%2F85LjHLCsJW3hxESjgXYauw5FHv%2Bqig3%2F%2FhS22j4OnXf6%2FcJzMrguzO5reolM8I1y%2B2u8LBhWwX1ScAHB4PfcWAQ1EYy803%2F62u0ZXrNSSUQP%2BUfyxHnTsAo01PNg%2B%2FHc5VxiZPy9QgytyUTId&X-Amz-Signature=1c4668eb937d27e2899e7a78d514e44fce22e69dd766a5c51a5b6fead30ef0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZDIMIT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQaokrf9WqU2zK9TkteulzygWcgxIU%2B8%2Fb7xtM6ar6QIhAPHTxs39a1FFaoSFzVlZeBpApptzdrG9efvMArRM9FPUKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfsYq23ZYOadsXA64q3AMbnN1vg7DOlD%2F6RyApqjcgZswdbjx2jBZP3PW4Qgu6C5ZTFFynPdGpPn7o4AAAwPsJ7W9zLCPE7iio4qG6NZ8fFW%2FSo%2FjHW%2BZusZda1er6r89vAkFsvXuRRw6UGBVvFELsKonOOSNkky%2FTDJHXcLHmpaNOrYvhWpd7U16eAmBWxyeVRETyRt3QznzGgiJ8s0ufrIrZdVKEMoenfnNBkBkTme7WkknwK3g8agt2qJnYRYac4y9xGT2bnRQajlmHeso5ENTltCXQDlt69guM8WezVxZEuYo1Y1fZHFIwPh9fHttF67cDyLSjJ%2FPj7zwF52PlK72XLeyymE7tOffSpd%2BACh8viyLN6QDSsKy0DBmBs41L7DJ8jDljDXFj9I3RQfYFRw4BxMzKT%2Fg%2BHI0o1CTWJ0E69nYeXchJk8JJSoaxrg6BwvhGNFV6FR7UymjQG4Cnj7SuY5XhE5VBt6Om9N%2BEyKJJRVrftioXuGE1AT0wH6FTDLMxHwgVsxE9HaQRACpRvnjfQx%2BE8zxVLs51pkLkXiIc8a8WIwH%2Fo06GoaiyerNw4O3HSxTSOSsSFAwftqnCX8Q6im%2B6gfg23GKnVxpF5D6Rmq9%2F1UdmtssI4Q3oQhiogyh00FGVMlZeijCYrczDBjqkAbAIhWxUTQGJPoPZVYqbkro2HSQhoV0uabcOfIViAHeWqYSYhwCGNZZ2JOyFd%2FlhX4ViVWnxWs%2F85LjHLCsJW3hxESjgXYauw5FHv%2Bqig3%2F%2FhS22j4OnXf6%2FcJzMrguzO5reolM8I1y%2B2u8LBhWwX1ScAHB4PfcWAQ1EYy803%2F62u0ZXrNSSUQP%2BUfyxHnTsAo01PNg%2B%2FHc5VxiZPy9QgytyUTId&X-Amz-Signature=edf9d525910a9dd5ba168cb62371b358449370774080703e9ad3be27b6d4620f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZDIMIT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQaokrf9WqU2zK9TkteulzygWcgxIU%2B8%2Fb7xtM6ar6QIhAPHTxs39a1FFaoSFzVlZeBpApptzdrG9efvMArRM9FPUKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfsYq23ZYOadsXA64q3AMbnN1vg7DOlD%2F6RyApqjcgZswdbjx2jBZP3PW4Qgu6C5ZTFFynPdGpPn7o4AAAwPsJ7W9zLCPE7iio4qG6NZ8fFW%2FSo%2FjHW%2BZusZda1er6r89vAkFsvXuRRw6UGBVvFELsKonOOSNkky%2FTDJHXcLHmpaNOrYvhWpd7U16eAmBWxyeVRETyRt3QznzGgiJ8s0ufrIrZdVKEMoenfnNBkBkTme7WkknwK3g8agt2qJnYRYac4y9xGT2bnRQajlmHeso5ENTltCXQDlt69guM8WezVxZEuYo1Y1fZHFIwPh9fHttF67cDyLSjJ%2FPj7zwF52PlK72XLeyymE7tOffSpd%2BACh8viyLN6QDSsKy0DBmBs41L7DJ8jDljDXFj9I3RQfYFRw4BxMzKT%2Fg%2BHI0o1CTWJ0E69nYeXchJk8JJSoaxrg6BwvhGNFV6FR7UymjQG4Cnj7SuY5XhE5VBt6Om9N%2BEyKJJRVrftioXuGE1AT0wH6FTDLMxHwgVsxE9HaQRACpRvnjfQx%2BE8zxVLs51pkLkXiIc8a8WIwH%2Fo06GoaiyerNw4O3HSxTSOSsSFAwftqnCX8Q6im%2B6gfg23GKnVxpF5D6Rmq9%2F1UdmtssI4Q3oQhiogyh00FGVMlZeijCYrczDBjqkAbAIhWxUTQGJPoPZVYqbkro2HSQhoV0uabcOfIViAHeWqYSYhwCGNZZ2JOyFd%2FlhX4ViVWnxWs%2F85LjHLCsJW3hxESjgXYauw5FHv%2Bqig3%2F%2FhS22j4OnXf6%2FcJzMrguzO5reolM8I1y%2B2u8LBhWwX1ScAHB4PfcWAQ1EYy803%2F62u0ZXrNSSUQP%2BUfyxHnTsAo01PNg%2B%2FHc5VxiZPy9QgytyUTId&X-Amz-Signature=d18b759d598c940c0f6e9e606846431e55417a89234d2aa2c660ef84ba909fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

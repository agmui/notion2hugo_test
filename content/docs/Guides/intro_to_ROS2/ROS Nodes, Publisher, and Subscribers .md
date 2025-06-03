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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WQEUAF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD3br2x2jyZ5evBkt5MSpP6AfyKAAFGiSl2Myq6xx3AXAIhAL%2BpR8vmkWR0sddmVP9HizY91RvhqsP7cXF9RWXjD8W3Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwX4gJQPU8iqmbOeksq3APaLZZXSPnonuJ1TN%2BrHkGpuIxIAOnsBZLrYFxIRa5ijU1e45QxGK%2BgvkW33IsEgoEotbN90pq%2FGiY4SF%2B77J%2B4V64Wuf9ugQ3jKUEZm4qZeQkydhn5%2FVDhvKkUpUXsV5XjEXXRP7SABh4HlOtMO1kLInHts9wY4JyxPMcZQ5rvehKzkDtExEcPS89L2PZ0xwm53zvZaBcrqeFN1CrEWW01sgmVbfSgBbyTBt2BTXeTdJqQVPYng4syxK%2BeQP013%2Br%2BIUkPEmIjTqqAnzVMOF%2FQjDI617J1l0DWpUxRLCkKUC8YP4sA6QhH9lwtpNFtypkQ%2FAzY732TgY6cRSnofYAULEbNjL20ceKicXrh1bYYsMkR7hksth%2FmFWG2meVS1g%2FnONIzPSFbPiT2oCpaof4lzv3NaIthfQp0A%2BAUImBZ%2FKWZmvUI796R%2BHhPooVNVAzxYz4cJzjYz43EgA%2Bt65vbU%2F76Wv4PAOKovukZS4wBzHm6779gMjyekA%2FOHM0Y1Cq%2FQ5GO9zI8%2BaCZSofXBEJicU2mD%2Fpfm5IvtPAmA2tRdLToDleHYQv71NEX6O%2B6ybTWI3RKA0Xc0ok8Dgz%2FojW4b1L%2FONLCslzIrNRNYpKg3jDX3um8lxxoXs1IRzDVhf3BBjqkAYp8pAC%2FvWG4nxG72GN4rQwbxgM0SuH0W51RVBJmvA%2BsaWcIZSUHPkOnk81wKsPldTpnbH4mJZVHWumkOHkc0B9fqvJ3%2B05mK%2FberMjZNvuMxKbvkm7ltFqILF8RlUuF8gKEkHuILQM8baPj0DhPP16gy2tsbSTXA7NqpAmngHaed%2Bm%2FvdTjlM7M21DiW%2BbyVbODNgYQt%2FU57IkokufIzzTfhI62&X-Amz-Signature=3c05eeb1c2e56527a7c68eb900c0001e47e6d3d81f09f8a76e48564c66dc5551&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WQEUAF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD3br2x2jyZ5evBkt5MSpP6AfyKAAFGiSl2Myq6xx3AXAIhAL%2BpR8vmkWR0sddmVP9HizY91RvhqsP7cXF9RWXjD8W3Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwX4gJQPU8iqmbOeksq3APaLZZXSPnonuJ1TN%2BrHkGpuIxIAOnsBZLrYFxIRa5ijU1e45QxGK%2BgvkW33IsEgoEotbN90pq%2FGiY4SF%2B77J%2B4V64Wuf9ugQ3jKUEZm4qZeQkydhn5%2FVDhvKkUpUXsV5XjEXXRP7SABh4HlOtMO1kLInHts9wY4JyxPMcZQ5rvehKzkDtExEcPS89L2PZ0xwm53zvZaBcrqeFN1CrEWW01sgmVbfSgBbyTBt2BTXeTdJqQVPYng4syxK%2BeQP013%2Br%2BIUkPEmIjTqqAnzVMOF%2FQjDI617J1l0DWpUxRLCkKUC8YP4sA6QhH9lwtpNFtypkQ%2FAzY732TgY6cRSnofYAULEbNjL20ceKicXrh1bYYsMkR7hksth%2FmFWG2meVS1g%2FnONIzPSFbPiT2oCpaof4lzv3NaIthfQp0A%2BAUImBZ%2FKWZmvUI796R%2BHhPooVNVAzxYz4cJzjYz43EgA%2Bt65vbU%2F76Wv4PAOKovukZS4wBzHm6779gMjyekA%2FOHM0Y1Cq%2FQ5GO9zI8%2BaCZSofXBEJicU2mD%2Fpfm5IvtPAmA2tRdLToDleHYQv71NEX6O%2B6ybTWI3RKA0Xc0ok8Dgz%2FojW4b1L%2FONLCslzIrNRNYpKg3jDX3um8lxxoXs1IRzDVhf3BBjqkAYp8pAC%2FvWG4nxG72GN4rQwbxgM0SuH0W51RVBJmvA%2BsaWcIZSUHPkOnk81wKsPldTpnbH4mJZVHWumkOHkc0B9fqvJ3%2B05mK%2FberMjZNvuMxKbvkm7ltFqILF8RlUuF8gKEkHuILQM8baPj0DhPP16gy2tsbSTXA7NqpAmngHaed%2Bm%2FvdTjlM7M21DiW%2BbyVbODNgYQt%2FU57IkokufIzzTfhI62&X-Amz-Signature=da36a4c8f43a648f08e40af888b06bc1481116045186ea578d9e4f1cdfe36911&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WQEUAF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD3br2x2jyZ5evBkt5MSpP6AfyKAAFGiSl2Myq6xx3AXAIhAL%2BpR8vmkWR0sddmVP9HizY91RvhqsP7cXF9RWXjD8W3Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwX4gJQPU8iqmbOeksq3APaLZZXSPnonuJ1TN%2BrHkGpuIxIAOnsBZLrYFxIRa5ijU1e45QxGK%2BgvkW33IsEgoEotbN90pq%2FGiY4SF%2B77J%2B4V64Wuf9ugQ3jKUEZm4qZeQkydhn5%2FVDhvKkUpUXsV5XjEXXRP7SABh4HlOtMO1kLInHts9wY4JyxPMcZQ5rvehKzkDtExEcPS89L2PZ0xwm53zvZaBcrqeFN1CrEWW01sgmVbfSgBbyTBt2BTXeTdJqQVPYng4syxK%2BeQP013%2Br%2BIUkPEmIjTqqAnzVMOF%2FQjDI617J1l0DWpUxRLCkKUC8YP4sA6QhH9lwtpNFtypkQ%2FAzY732TgY6cRSnofYAULEbNjL20ceKicXrh1bYYsMkR7hksth%2FmFWG2meVS1g%2FnONIzPSFbPiT2oCpaof4lzv3NaIthfQp0A%2BAUImBZ%2FKWZmvUI796R%2BHhPooVNVAzxYz4cJzjYz43EgA%2Bt65vbU%2F76Wv4PAOKovukZS4wBzHm6779gMjyekA%2FOHM0Y1Cq%2FQ5GO9zI8%2BaCZSofXBEJicU2mD%2Fpfm5IvtPAmA2tRdLToDleHYQv71NEX6O%2B6ybTWI3RKA0Xc0ok8Dgz%2FojW4b1L%2FONLCslzIrNRNYpKg3jDX3um8lxxoXs1IRzDVhf3BBjqkAYp8pAC%2FvWG4nxG72GN4rQwbxgM0SuH0W51RVBJmvA%2BsaWcIZSUHPkOnk81wKsPldTpnbH4mJZVHWumkOHkc0B9fqvJ3%2B05mK%2FberMjZNvuMxKbvkm7ltFqILF8RlUuF8gKEkHuILQM8baPj0DhPP16gy2tsbSTXA7NqpAmngHaed%2Bm%2FvdTjlM7M21DiW%2BbyVbODNgYQt%2FU57IkokufIzzTfhI62&X-Amz-Signature=87facc99a75282518084dd3af47900ba91ebbe86c90008ab19d2bf75f2f934f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WQEUAF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD3br2x2jyZ5evBkt5MSpP6AfyKAAFGiSl2Myq6xx3AXAIhAL%2BpR8vmkWR0sddmVP9HizY91RvhqsP7cXF9RWXjD8W3Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwX4gJQPU8iqmbOeksq3APaLZZXSPnonuJ1TN%2BrHkGpuIxIAOnsBZLrYFxIRa5ijU1e45QxGK%2BgvkW33IsEgoEotbN90pq%2FGiY4SF%2B77J%2B4V64Wuf9ugQ3jKUEZm4qZeQkydhn5%2FVDhvKkUpUXsV5XjEXXRP7SABh4HlOtMO1kLInHts9wY4JyxPMcZQ5rvehKzkDtExEcPS89L2PZ0xwm53zvZaBcrqeFN1CrEWW01sgmVbfSgBbyTBt2BTXeTdJqQVPYng4syxK%2BeQP013%2Br%2BIUkPEmIjTqqAnzVMOF%2FQjDI617J1l0DWpUxRLCkKUC8YP4sA6QhH9lwtpNFtypkQ%2FAzY732TgY6cRSnofYAULEbNjL20ceKicXrh1bYYsMkR7hksth%2FmFWG2meVS1g%2FnONIzPSFbPiT2oCpaof4lzv3NaIthfQp0A%2BAUImBZ%2FKWZmvUI796R%2BHhPooVNVAzxYz4cJzjYz43EgA%2Bt65vbU%2F76Wv4PAOKovukZS4wBzHm6779gMjyekA%2FOHM0Y1Cq%2FQ5GO9zI8%2BaCZSofXBEJicU2mD%2Fpfm5IvtPAmA2tRdLToDleHYQv71NEX6O%2B6ybTWI3RKA0Xc0ok8Dgz%2FojW4b1L%2FONLCslzIrNRNYpKg3jDX3um8lxxoXs1IRzDVhf3BBjqkAYp8pAC%2FvWG4nxG72GN4rQwbxgM0SuH0W51RVBJmvA%2BsaWcIZSUHPkOnk81wKsPldTpnbH4mJZVHWumkOHkc0B9fqvJ3%2B05mK%2FberMjZNvuMxKbvkm7ltFqILF8RlUuF8gKEkHuILQM8baPj0DhPP16gy2tsbSTXA7NqpAmngHaed%2Bm%2FvdTjlM7M21DiW%2BbyVbODNgYQt%2FU57IkokufIzzTfhI62&X-Amz-Signature=edcfae49102997d46c37ef43c092abe9662fb1fe23d0a2836303e0499036e883&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WQEUAF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD3br2x2jyZ5evBkt5MSpP6AfyKAAFGiSl2Myq6xx3AXAIhAL%2BpR8vmkWR0sddmVP9HizY91RvhqsP7cXF9RWXjD8W3Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwX4gJQPU8iqmbOeksq3APaLZZXSPnonuJ1TN%2BrHkGpuIxIAOnsBZLrYFxIRa5ijU1e45QxGK%2BgvkW33IsEgoEotbN90pq%2FGiY4SF%2B77J%2B4V64Wuf9ugQ3jKUEZm4qZeQkydhn5%2FVDhvKkUpUXsV5XjEXXRP7SABh4HlOtMO1kLInHts9wY4JyxPMcZQ5rvehKzkDtExEcPS89L2PZ0xwm53zvZaBcrqeFN1CrEWW01sgmVbfSgBbyTBt2BTXeTdJqQVPYng4syxK%2BeQP013%2Br%2BIUkPEmIjTqqAnzVMOF%2FQjDI617J1l0DWpUxRLCkKUC8YP4sA6QhH9lwtpNFtypkQ%2FAzY732TgY6cRSnofYAULEbNjL20ceKicXrh1bYYsMkR7hksth%2FmFWG2meVS1g%2FnONIzPSFbPiT2oCpaof4lzv3NaIthfQp0A%2BAUImBZ%2FKWZmvUI796R%2BHhPooVNVAzxYz4cJzjYz43EgA%2Bt65vbU%2F76Wv4PAOKovukZS4wBzHm6779gMjyekA%2FOHM0Y1Cq%2FQ5GO9zI8%2BaCZSofXBEJicU2mD%2Fpfm5IvtPAmA2tRdLToDleHYQv71NEX6O%2B6ybTWI3RKA0Xc0ok8Dgz%2FojW4b1L%2FONLCslzIrNRNYpKg3jDX3um8lxxoXs1IRzDVhf3BBjqkAYp8pAC%2FvWG4nxG72GN4rQwbxgM0SuH0W51RVBJmvA%2BsaWcIZSUHPkOnk81wKsPldTpnbH4mJZVHWumkOHkc0B9fqvJ3%2B05mK%2FberMjZNvuMxKbvkm7ltFqILF8RlUuF8gKEkHuILQM8baPj0DhPP16gy2tsbSTXA7NqpAmngHaed%2Bm%2FvdTjlM7M21DiW%2BbyVbODNgYQt%2FU57IkokufIzzTfhI62&X-Amz-Signature=59f0795e3fa2b946d2e7b301c3121e87b45166f748f155d1b43c1862e7321529&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WQEUAF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD3br2x2jyZ5evBkt5MSpP6AfyKAAFGiSl2Myq6xx3AXAIhAL%2BpR8vmkWR0sddmVP9HizY91RvhqsP7cXF9RWXjD8W3Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwX4gJQPU8iqmbOeksq3APaLZZXSPnonuJ1TN%2BrHkGpuIxIAOnsBZLrYFxIRa5ijU1e45QxGK%2BgvkW33IsEgoEotbN90pq%2FGiY4SF%2B77J%2B4V64Wuf9ugQ3jKUEZm4qZeQkydhn5%2FVDhvKkUpUXsV5XjEXXRP7SABh4HlOtMO1kLInHts9wY4JyxPMcZQ5rvehKzkDtExEcPS89L2PZ0xwm53zvZaBcrqeFN1CrEWW01sgmVbfSgBbyTBt2BTXeTdJqQVPYng4syxK%2BeQP013%2Br%2BIUkPEmIjTqqAnzVMOF%2FQjDI617J1l0DWpUxRLCkKUC8YP4sA6QhH9lwtpNFtypkQ%2FAzY732TgY6cRSnofYAULEbNjL20ceKicXrh1bYYsMkR7hksth%2FmFWG2meVS1g%2FnONIzPSFbPiT2oCpaof4lzv3NaIthfQp0A%2BAUImBZ%2FKWZmvUI796R%2BHhPooVNVAzxYz4cJzjYz43EgA%2Bt65vbU%2F76Wv4PAOKovukZS4wBzHm6779gMjyekA%2FOHM0Y1Cq%2FQ5GO9zI8%2BaCZSofXBEJicU2mD%2Fpfm5IvtPAmA2tRdLToDleHYQv71NEX6O%2B6ybTWI3RKA0Xc0ok8Dgz%2FojW4b1L%2FONLCslzIrNRNYpKg3jDX3um8lxxoXs1IRzDVhf3BBjqkAYp8pAC%2FvWG4nxG72GN4rQwbxgM0SuH0W51RVBJmvA%2BsaWcIZSUHPkOnk81wKsPldTpnbH4mJZVHWumkOHkc0B9fqvJ3%2B05mK%2FberMjZNvuMxKbvkm7ltFqILF8RlUuF8gKEkHuILQM8baPj0DhPP16gy2tsbSTXA7NqpAmngHaed%2Bm%2FvdTjlM7M21DiW%2BbyVbODNgYQt%2FU57IkokufIzzTfhI62&X-Amz-Signature=5620c0b7e87ec37fe4474208bdd83f99c698db819a88cfb4aaa7a819de2ce397&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WQEUAF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD3br2x2jyZ5evBkt5MSpP6AfyKAAFGiSl2Myq6xx3AXAIhAL%2BpR8vmkWR0sddmVP9HizY91RvhqsP7cXF9RWXjD8W3Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwX4gJQPU8iqmbOeksq3APaLZZXSPnonuJ1TN%2BrHkGpuIxIAOnsBZLrYFxIRa5ijU1e45QxGK%2BgvkW33IsEgoEotbN90pq%2FGiY4SF%2B77J%2B4V64Wuf9ugQ3jKUEZm4qZeQkydhn5%2FVDhvKkUpUXsV5XjEXXRP7SABh4HlOtMO1kLInHts9wY4JyxPMcZQ5rvehKzkDtExEcPS89L2PZ0xwm53zvZaBcrqeFN1CrEWW01sgmVbfSgBbyTBt2BTXeTdJqQVPYng4syxK%2BeQP013%2Br%2BIUkPEmIjTqqAnzVMOF%2FQjDI617J1l0DWpUxRLCkKUC8YP4sA6QhH9lwtpNFtypkQ%2FAzY732TgY6cRSnofYAULEbNjL20ceKicXrh1bYYsMkR7hksth%2FmFWG2meVS1g%2FnONIzPSFbPiT2oCpaof4lzv3NaIthfQp0A%2BAUImBZ%2FKWZmvUI796R%2BHhPooVNVAzxYz4cJzjYz43EgA%2Bt65vbU%2F76Wv4PAOKovukZS4wBzHm6779gMjyekA%2FOHM0Y1Cq%2FQ5GO9zI8%2BaCZSofXBEJicU2mD%2Fpfm5IvtPAmA2tRdLToDleHYQv71NEX6O%2B6ybTWI3RKA0Xc0ok8Dgz%2FojW4b1L%2FONLCslzIrNRNYpKg3jDX3um8lxxoXs1IRzDVhf3BBjqkAYp8pAC%2FvWG4nxG72GN4rQwbxgM0SuH0W51RVBJmvA%2BsaWcIZSUHPkOnk81wKsPldTpnbH4mJZVHWumkOHkc0B9fqvJ3%2B05mK%2FberMjZNvuMxKbvkm7ltFqILF8RlUuF8gKEkHuILQM8baPj0DhPP16gy2tsbSTXA7NqpAmngHaed%2Bm%2FvdTjlM7M21DiW%2BbyVbODNgYQt%2FU57IkokufIzzTfhI62&X-Amz-Signature=4bdb769270e0eb73940a1e9fc4bedf83b2ac72a5a7d3cffcc948f03d53c49e09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WQEUAF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD3br2x2jyZ5evBkt5MSpP6AfyKAAFGiSl2Myq6xx3AXAIhAL%2BpR8vmkWR0sddmVP9HizY91RvhqsP7cXF9RWXjD8W3Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwX4gJQPU8iqmbOeksq3APaLZZXSPnonuJ1TN%2BrHkGpuIxIAOnsBZLrYFxIRa5ijU1e45QxGK%2BgvkW33IsEgoEotbN90pq%2FGiY4SF%2B77J%2B4V64Wuf9ugQ3jKUEZm4qZeQkydhn5%2FVDhvKkUpUXsV5XjEXXRP7SABh4HlOtMO1kLInHts9wY4JyxPMcZQ5rvehKzkDtExEcPS89L2PZ0xwm53zvZaBcrqeFN1CrEWW01sgmVbfSgBbyTBt2BTXeTdJqQVPYng4syxK%2BeQP013%2Br%2BIUkPEmIjTqqAnzVMOF%2FQjDI617J1l0DWpUxRLCkKUC8YP4sA6QhH9lwtpNFtypkQ%2FAzY732TgY6cRSnofYAULEbNjL20ceKicXrh1bYYsMkR7hksth%2FmFWG2meVS1g%2FnONIzPSFbPiT2oCpaof4lzv3NaIthfQp0A%2BAUImBZ%2FKWZmvUI796R%2BHhPooVNVAzxYz4cJzjYz43EgA%2Bt65vbU%2F76Wv4PAOKovukZS4wBzHm6779gMjyekA%2FOHM0Y1Cq%2FQ5GO9zI8%2BaCZSofXBEJicU2mD%2Fpfm5IvtPAmA2tRdLToDleHYQv71NEX6O%2B6ybTWI3RKA0Xc0ok8Dgz%2FojW4b1L%2FONLCslzIrNRNYpKg3jDX3um8lxxoXs1IRzDVhf3BBjqkAYp8pAC%2FvWG4nxG72GN4rQwbxgM0SuH0W51RVBJmvA%2BsaWcIZSUHPkOnk81wKsPldTpnbH4mJZVHWumkOHkc0B9fqvJ3%2B05mK%2FberMjZNvuMxKbvkm7ltFqILF8RlUuF8gKEkHuILQM8baPj0DhPP16gy2tsbSTXA7NqpAmngHaed%2Bm%2FvdTjlM7M21DiW%2BbyVbODNgYQt%2FU57IkokufIzzTfhI62&X-Amz-Signature=9d652639100301d579e1551cf924c47963ba4d1cd256b2b69de4a1672fd75588&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

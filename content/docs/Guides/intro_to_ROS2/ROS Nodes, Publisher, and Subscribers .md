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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYILO3JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC90GTxDOS4%2B%2F%2BN7UpdCrlNfTL6Y5e%2FUi1tnXaT9sql%2FAIgcIzBBvjz6qnIKY%2FBKMewiyac0I2AzECoECZf%2BAHSwwMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvxU9JylV9YiWYqZCrcA0RD8XPCeXgT5ppUS2A0Bfef4fX2xE5gbicvv6RI2zE4Jur5uq0ueu5cEVCHGLEcAjVfDAP9mIIqkxvnwIIlarpTN1vhv3nVgWR9UkyCTVuxVOaVnNyz3AeMhI1jnta2UCI8I8t8%2BTkd8qx09UD0fcRZvBHYyxqr9WyvcZSCh%2BoZNJuVELbXGcPcDkYPJBm%2FbUMxb71%2FeNuV2inQBG52eWelWIof%2Fe8vIPEqGAbyvIRVI5YaJOUG1COKuGLOx%2FmSwchG2vWTNuWDlRCS1q1VHc1cT8ObKmYrk0A6ZFge3udoMZPPIgfEFfR9rg4cI8n3smAzdDrsJn2IcmURjUk6Nvp53OSIQqaiGu0QM6KY71Sb3R5MpyPg3zFFjBzby8%2Fqrc77YTQyMLh5oBdxTRJonee5RwMHExzsA99DB%2BU2csRg%2B467Wv%2FPMAioGkeAgTZ%2BhexVXtDyv1uBGJscGZZgNOD6CjGMSAfjo505Qf%2FovB7hvB3GXlK1q9%2BAxgJS02D8SFp4wrtPLWd3QjYpuL4QTjJiftNsfF6Drj%2B524j3bk2zkRvBWV8ZQUEh0t%2F5Kpr91qGwWHAdHlfcmc2BAMhu9gWhHDN1wmJ0Z%2BsXq3%2FaLgXYIhFoE74QXM0YNH2JMNz1470GOqUBDd82PHwaOyEJYyDA%2FauoqFz9XhGbgBEtj5SVHNB1jNWKVF1rxwvT%2FpT848rvWcOHLxRE93i4hiBQp6fiQ%2FavQhBKb2CNwWzxpd8uEWnEy%2F3VrGHdR%2FUnkHLNivgToIhns09XJV7i%2B5YhnmUJ4DC7uV7RsNzoXl1ANevkeaKU7GOHmfOLzzD%2BfBujG5V0D38Rtn2OZEGaqfQFb5mDWwEyFfYr95DF&X-Amz-Signature=9dc69201b6e92eb33ec4f60534badd21cca13b35d3a582c089bd19863e34cc2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYILO3JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC90GTxDOS4%2B%2F%2BN7UpdCrlNfTL6Y5e%2FUi1tnXaT9sql%2FAIgcIzBBvjz6qnIKY%2FBKMewiyac0I2AzECoECZf%2BAHSwwMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvxU9JylV9YiWYqZCrcA0RD8XPCeXgT5ppUS2A0Bfef4fX2xE5gbicvv6RI2zE4Jur5uq0ueu5cEVCHGLEcAjVfDAP9mIIqkxvnwIIlarpTN1vhv3nVgWR9UkyCTVuxVOaVnNyz3AeMhI1jnta2UCI8I8t8%2BTkd8qx09UD0fcRZvBHYyxqr9WyvcZSCh%2BoZNJuVELbXGcPcDkYPJBm%2FbUMxb71%2FeNuV2inQBG52eWelWIof%2Fe8vIPEqGAbyvIRVI5YaJOUG1COKuGLOx%2FmSwchG2vWTNuWDlRCS1q1VHc1cT8ObKmYrk0A6ZFge3udoMZPPIgfEFfR9rg4cI8n3smAzdDrsJn2IcmURjUk6Nvp53OSIQqaiGu0QM6KY71Sb3R5MpyPg3zFFjBzby8%2Fqrc77YTQyMLh5oBdxTRJonee5RwMHExzsA99DB%2BU2csRg%2B467Wv%2FPMAioGkeAgTZ%2BhexVXtDyv1uBGJscGZZgNOD6CjGMSAfjo505Qf%2FovB7hvB3GXlK1q9%2BAxgJS02D8SFp4wrtPLWd3QjYpuL4QTjJiftNsfF6Drj%2B524j3bk2zkRvBWV8ZQUEh0t%2F5Kpr91qGwWHAdHlfcmc2BAMhu9gWhHDN1wmJ0Z%2BsXq3%2FaLgXYIhFoE74QXM0YNH2JMNz1470GOqUBDd82PHwaOyEJYyDA%2FauoqFz9XhGbgBEtj5SVHNB1jNWKVF1rxwvT%2FpT848rvWcOHLxRE93i4hiBQp6fiQ%2FavQhBKb2CNwWzxpd8uEWnEy%2F3VrGHdR%2FUnkHLNivgToIhns09XJV7i%2B5YhnmUJ4DC7uV7RsNzoXl1ANevkeaKU7GOHmfOLzzD%2BfBujG5V0D38Rtn2OZEGaqfQFb5mDWwEyFfYr95DF&X-Amz-Signature=5c77cbc38887502300bc366baa7b1e8801cc4e913760a6f59e71092455c84f30&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYILO3JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC90GTxDOS4%2B%2F%2BN7UpdCrlNfTL6Y5e%2FUi1tnXaT9sql%2FAIgcIzBBvjz6qnIKY%2FBKMewiyac0I2AzECoECZf%2BAHSwwMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvxU9JylV9YiWYqZCrcA0RD8XPCeXgT5ppUS2A0Bfef4fX2xE5gbicvv6RI2zE4Jur5uq0ueu5cEVCHGLEcAjVfDAP9mIIqkxvnwIIlarpTN1vhv3nVgWR9UkyCTVuxVOaVnNyz3AeMhI1jnta2UCI8I8t8%2BTkd8qx09UD0fcRZvBHYyxqr9WyvcZSCh%2BoZNJuVELbXGcPcDkYPJBm%2FbUMxb71%2FeNuV2inQBG52eWelWIof%2Fe8vIPEqGAbyvIRVI5YaJOUG1COKuGLOx%2FmSwchG2vWTNuWDlRCS1q1VHc1cT8ObKmYrk0A6ZFge3udoMZPPIgfEFfR9rg4cI8n3smAzdDrsJn2IcmURjUk6Nvp53OSIQqaiGu0QM6KY71Sb3R5MpyPg3zFFjBzby8%2Fqrc77YTQyMLh5oBdxTRJonee5RwMHExzsA99DB%2BU2csRg%2B467Wv%2FPMAioGkeAgTZ%2BhexVXtDyv1uBGJscGZZgNOD6CjGMSAfjo505Qf%2FovB7hvB3GXlK1q9%2BAxgJS02D8SFp4wrtPLWd3QjYpuL4QTjJiftNsfF6Drj%2B524j3bk2zkRvBWV8ZQUEh0t%2F5Kpr91qGwWHAdHlfcmc2BAMhu9gWhHDN1wmJ0Z%2BsXq3%2FaLgXYIhFoE74QXM0YNH2JMNz1470GOqUBDd82PHwaOyEJYyDA%2FauoqFz9XhGbgBEtj5SVHNB1jNWKVF1rxwvT%2FpT848rvWcOHLxRE93i4hiBQp6fiQ%2FavQhBKb2CNwWzxpd8uEWnEy%2F3VrGHdR%2FUnkHLNivgToIhns09XJV7i%2B5YhnmUJ4DC7uV7RsNzoXl1ANevkeaKU7GOHmfOLzzD%2BfBujG5V0D38Rtn2OZEGaqfQFb5mDWwEyFfYr95DF&X-Amz-Signature=160370da42a970ead1547bd00c9bc1af93648b3d660c7e6bb4906463469eb9e1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYILO3JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC90GTxDOS4%2B%2F%2BN7UpdCrlNfTL6Y5e%2FUi1tnXaT9sql%2FAIgcIzBBvjz6qnIKY%2FBKMewiyac0I2AzECoECZf%2BAHSwwMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvxU9JylV9YiWYqZCrcA0RD8XPCeXgT5ppUS2A0Bfef4fX2xE5gbicvv6RI2zE4Jur5uq0ueu5cEVCHGLEcAjVfDAP9mIIqkxvnwIIlarpTN1vhv3nVgWR9UkyCTVuxVOaVnNyz3AeMhI1jnta2UCI8I8t8%2BTkd8qx09UD0fcRZvBHYyxqr9WyvcZSCh%2BoZNJuVELbXGcPcDkYPJBm%2FbUMxb71%2FeNuV2inQBG52eWelWIof%2Fe8vIPEqGAbyvIRVI5YaJOUG1COKuGLOx%2FmSwchG2vWTNuWDlRCS1q1VHc1cT8ObKmYrk0A6ZFge3udoMZPPIgfEFfR9rg4cI8n3smAzdDrsJn2IcmURjUk6Nvp53OSIQqaiGu0QM6KY71Sb3R5MpyPg3zFFjBzby8%2Fqrc77YTQyMLh5oBdxTRJonee5RwMHExzsA99DB%2BU2csRg%2B467Wv%2FPMAioGkeAgTZ%2BhexVXtDyv1uBGJscGZZgNOD6CjGMSAfjo505Qf%2FovB7hvB3GXlK1q9%2BAxgJS02D8SFp4wrtPLWd3QjYpuL4QTjJiftNsfF6Drj%2B524j3bk2zkRvBWV8ZQUEh0t%2F5Kpr91qGwWHAdHlfcmc2BAMhu9gWhHDN1wmJ0Z%2BsXq3%2FaLgXYIhFoE74QXM0YNH2JMNz1470GOqUBDd82PHwaOyEJYyDA%2FauoqFz9XhGbgBEtj5SVHNB1jNWKVF1rxwvT%2FpT848rvWcOHLxRE93i4hiBQp6fiQ%2FavQhBKb2CNwWzxpd8uEWnEy%2F3VrGHdR%2FUnkHLNivgToIhns09XJV7i%2B5YhnmUJ4DC7uV7RsNzoXl1ANevkeaKU7GOHmfOLzzD%2BfBujG5V0D38Rtn2OZEGaqfQFb5mDWwEyFfYr95DF&X-Amz-Signature=90f9df9348fdc57104fe596e044524cc84199f37f36721a08aca4001cf3bebb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYILO3JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC90GTxDOS4%2B%2F%2BN7UpdCrlNfTL6Y5e%2FUi1tnXaT9sql%2FAIgcIzBBvjz6qnIKY%2FBKMewiyac0I2AzECoECZf%2BAHSwwMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvxU9JylV9YiWYqZCrcA0RD8XPCeXgT5ppUS2A0Bfef4fX2xE5gbicvv6RI2zE4Jur5uq0ueu5cEVCHGLEcAjVfDAP9mIIqkxvnwIIlarpTN1vhv3nVgWR9UkyCTVuxVOaVnNyz3AeMhI1jnta2UCI8I8t8%2BTkd8qx09UD0fcRZvBHYyxqr9WyvcZSCh%2BoZNJuVELbXGcPcDkYPJBm%2FbUMxb71%2FeNuV2inQBG52eWelWIof%2Fe8vIPEqGAbyvIRVI5YaJOUG1COKuGLOx%2FmSwchG2vWTNuWDlRCS1q1VHc1cT8ObKmYrk0A6ZFge3udoMZPPIgfEFfR9rg4cI8n3smAzdDrsJn2IcmURjUk6Nvp53OSIQqaiGu0QM6KY71Sb3R5MpyPg3zFFjBzby8%2Fqrc77YTQyMLh5oBdxTRJonee5RwMHExzsA99DB%2BU2csRg%2B467Wv%2FPMAioGkeAgTZ%2BhexVXtDyv1uBGJscGZZgNOD6CjGMSAfjo505Qf%2FovB7hvB3GXlK1q9%2BAxgJS02D8SFp4wrtPLWd3QjYpuL4QTjJiftNsfF6Drj%2B524j3bk2zkRvBWV8ZQUEh0t%2F5Kpr91qGwWHAdHlfcmc2BAMhu9gWhHDN1wmJ0Z%2BsXq3%2FaLgXYIhFoE74QXM0YNH2JMNz1470GOqUBDd82PHwaOyEJYyDA%2FauoqFz9XhGbgBEtj5SVHNB1jNWKVF1rxwvT%2FpT848rvWcOHLxRE93i4hiBQp6fiQ%2FavQhBKb2CNwWzxpd8uEWnEy%2F3VrGHdR%2FUnkHLNivgToIhns09XJV7i%2B5YhnmUJ4DC7uV7RsNzoXl1ANevkeaKU7GOHmfOLzzD%2BfBujG5V0D38Rtn2OZEGaqfQFb5mDWwEyFfYr95DF&X-Amz-Signature=00617c003edf015dfeb459e0572755a32d823aae193106a33588bd1d3702b644&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYILO3JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC90GTxDOS4%2B%2F%2BN7UpdCrlNfTL6Y5e%2FUi1tnXaT9sql%2FAIgcIzBBvjz6qnIKY%2FBKMewiyac0I2AzECoECZf%2BAHSwwMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvxU9JylV9YiWYqZCrcA0RD8XPCeXgT5ppUS2A0Bfef4fX2xE5gbicvv6RI2zE4Jur5uq0ueu5cEVCHGLEcAjVfDAP9mIIqkxvnwIIlarpTN1vhv3nVgWR9UkyCTVuxVOaVnNyz3AeMhI1jnta2UCI8I8t8%2BTkd8qx09UD0fcRZvBHYyxqr9WyvcZSCh%2BoZNJuVELbXGcPcDkYPJBm%2FbUMxb71%2FeNuV2inQBG52eWelWIof%2Fe8vIPEqGAbyvIRVI5YaJOUG1COKuGLOx%2FmSwchG2vWTNuWDlRCS1q1VHc1cT8ObKmYrk0A6ZFge3udoMZPPIgfEFfR9rg4cI8n3smAzdDrsJn2IcmURjUk6Nvp53OSIQqaiGu0QM6KY71Sb3R5MpyPg3zFFjBzby8%2Fqrc77YTQyMLh5oBdxTRJonee5RwMHExzsA99DB%2BU2csRg%2B467Wv%2FPMAioGkeAgTZ%2BhexVXtDyv1uBGJscGZZgNOD6CjGMSAfjo505Qf%2FovB7hvB3GXlK1q9%2BAxgJS02D8SFp4wrtPLWd3QjYpuL4QTjJiftNsfF6Drj%2B524j3bk2zkRvBWV8ZQUEh0t%2F5Kpr91qGwWHAdHlfcmc2BAMhu9gWhHDN1wmJ0Z%2BsXq3%2FaLgXYIhFoE74QXM0YNH2JMNz1470GOqUBDd82PHwaOyEJYyDA%2FauoqFz9XhGbgBEtj5SVHNB1jNWKVF1rxwvT%2FpT848rvWcOHLxRE93i4hiBQp6fiQ%2FavQhBKb2CNwWzxpd8uEWnEy%2F3VrGHdR%2FUnkHLNivgToIhns09XJV7i%2B5YhnmUJ4DC7uV7RsNzoXl1ANevkeaKU7GOHmfOLzzD%2BfBujG5V0D38Rtn2OZEGaqfQFb5mDWwEyFfYr95DF&X-Amz-Signature=3a6b28f3c969558bbd32a27b3b16e474c68083e4786f60bf6fd9a887f12d37c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYILO3JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC90GTxDOS4%2B%2F%2BN7UpdCrlNfTL6Y5e%2FUi1tnXaT9sql%2FAIgcIzBBvjz6qnIKY%2FBKMewiyac0I2AzECoECZf%2BAHSwwMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvxU9JylV9YiWYqZCrcA0RD8XPCeXgT5ppUS2A0Bfef4fX2xE5gbicvv6RI2zE4Jur5uq0ueu5cEVCHGLEcAjVfDAP9mIIqkxvnwIIlarpTN1vhv3nVgWR9UkyCTVuxVOaVnNyz3AeMhI1jnta2UCI8I8t8%2BTkd8qx09UD0fcRZvBHYyxqr9WyvcZSCh%2BoZNJuVELbXGcPcDkYPJBm%2FbUMxb71%2FeNuV2inQBG52eWelWIof%2Fe8vIPEqGAbyvIRVI5YaJOUG1COKuGLOx%2FmSwchG2vWTNuWDlRCS1q1VHc1cT8ObKmYrk0A6ZFge3udoMZPPIgfEFfR9rg4cI8n3smAzdDrsJn2IcmURjUk6Nvp53OSIQqaiGu0QM6KY71Sb3R5MpyPg3zFFjBzby8%2Fqrc77YTQyMLh5oBdxTRJonee5RwMHExzsA99DB%2BU2csRg%2B467Wv%2FPMAioGkeAgTZ%2BhexVXtDyv1uBGJscGZZgNOD6CjGMSAfjo505Qf%2FovB7hvB3GXlK1q9%2BAxgJS02D8SFp4wrtPLWd3QjYpuL4QTjJiftNsfF6Drj%2B524j3bk2zkRvBWV8ZQUEh0t%2F5Kpr91qGwWHAdHlfcmc2BAMhu9gWhHDN1wmJ0Z%2BsXq3%2FaLgXYIhFoE74QXM0YNH2JMNz1470GOqUBDd82PHwaOyEJYyDA%2FauoqFz9XhGbgBEtj5SVHNB1jNWKVF1rxwvT%2FpT848rvWcOHLxRE93i4hiBQp6fiQ%2FavQhBKb2CNwWzxpd8uEWnEy%2F3VrGHdR%2FUnkHLNivgToIhns09XJV7i%2B5YhnmUJ4DC7uV7RsNzoXl1ANevkeaKU7GOHmfOLzzD%2BfBujG5V0D38Rtn2OZEGaqfQFb5mDWwEyFfYr95DF&X-Amz-Signature=7dad6ab12e985265f4896a849b1edd5bbba59989e522c323f47f325291704a41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYILO3JB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC90GTxDOS4%2B%2F%2BN7UpdCrlNfTL6Y5e%2FUi1tnXaT9sql%2FAIgcIzBBvjz6qnIKY%2FBKMewiyac0I2AzECoECZf%2BAHSwwMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvxU9JylV9YiWYqZCrcA0RD8XPCeXgT5ppUS2A0Bfef4fX2xE5gbicvv6RI2zE4Jur5uq0ueu5cEVCHGLEcAjVfDAP9mIIqkxvnwIIlarpTN1vhv3nVgWR9UkyCTVuxVOaVnNyz3AeMhI1jnta2UCI8I8t8%2BTkd8qx09UD0fcRZvBHYyxqr9WyvcZSCh%2BoZNJuVELbXGcPcDkYPJBm%2FbUMxb71%2FeNuV2inQBG52eWelWIof%2Fe8vIPEqGAbyvIRVI5YaJOUG1COKuGLOx%2FmSwchG2vWTNuWDlRCS1q1VHc1cT8ObKmYrk0A6ZFge3udoMZPPIgfEFfR9rg4cI8n3smAzdDrsJn2IcmURjUk6Nvp53OSIQqaiGu0QM6KY71Sb3R5MpyPg3zFFjBzby8%2Fqrc77YTQyMLh5oBdxTRJonee5RwMHExzsA99DB%2BU2csRg%2B467Wv%2FPMAioGkeAgTZ%2BhexVXtDyv1uBGJscGZZgNOD6CjGMSAfjo505Qf%2FovB7hvB3GXlK1q9%2BAxgJS02D8SFp4wrtPLWd3QjYpuL4QTjJiftNsfF6Drj%2B524j3bk2zkRvBWV8ZQUEh0t%2F5Kpr91qGwWHAdHlfcmc2BAMhu9gWhHDN1wmJ0Z%2BsXq3%2FaLgXYIhFoE74QXM0YNH2JMNz1470GOqUBDd82PHwaOyEJYyDA%2FauoqFz9XhGbgBEtj5SVHNB1jNWKVF1rxwvT%2FpT848rvWcOHLxRE93i4hiBQp6fiQ%2FavQhBKb2CNwWzxpd8uEWnEy%2F3VrGHdR%2FUnkHLNivgToIhns09XJV7i%2B5YhnmUJ4DC7uV7RsNzoXl1ANevkeaKU7GOHmfOLzzD%2BfBujG5V0D38Rtn2OZEGaqfQFb5mDWwEyFfYr95DF&X-Amz-Signature=45456d8b16464bce88eabdc1c2bf5f2ce856c5f3c8aa8f099af9bccb560e3371&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

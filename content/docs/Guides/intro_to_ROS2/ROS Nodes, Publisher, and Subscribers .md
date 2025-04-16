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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVT2WSX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6RGo8cbTMEvmOMsckW8VLuuXJ1hdGZfUIiKLMPH972AiEAu6XRJQf7woFddt9Zmwt%2B2tnH3zGKCrpmVKa3rSiXXvMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmNaR0kS9PkCj3TJircA8V0WqaHnqiawxAPUxgRr6t5v%2FlnnIx5tIrFBfAbUfJJyOX1%2FCemkN4AMI82Mj3utdhQRH9tODBTk3ILw86UP6%2F%2BnVU00a5jCf%2Bcu2nyHU8cchUmOK8a2T%2Bq6ywAMw9kr7NHym%2FTqv1k5gUVpeZ2%2BD7w4c07T1%2BZS9AIGK824khx6R%2FgbSiKYQranWXLhFHUP5zf%2B0svzZ5hf6Li1xOfLJOlhAfMOz8HPdZqWTNUr1f%2BN5qr609AP6ZM7V8Jjcuw0eKelR1nHajNAaFFZG%2BhrCVFZ6guTj4Tpsu5sxbBwRPvxhScELR4dhxPD2OugiHGtG%2Bg0zoA7Gcmt88cGq8mzAdEj%2FbEkOu%2BF2DacISQghGw%2FrboVzdJBnbaRWH5Hc952I02NPLTu%2BNlarRbHovOKJ0tzspRbtLiwH13w89VMEnu1mgrZH7UrQSsraoNnHMg9O5hS0soQcHJfJwGGhpb9BPRQebXaF68N5Fw3s2rsfr0hyKgXRQIgVXYP1Lo12uv%2Bc8qMxqL8g2Vb98M0or3R2zQv0%2FtpyETkIdzjUYlvxuWF2FMDQHiRk46Q0UDHcoa8RlI92Bf%2BWHZ%2B35Fos4oljdvlgQJNxLJvvsdq1%2FE6Gn4r2fD4Dijc7gMHQF4MKLG%2F78GOqUBu52%2B0dLMIowg0CMCIJhpcuFHYllC2Jc71ntwR%2FkNz0xVN8HFMrbfprUSlzaq6NFd3qwt86Cbk%2BCiq%2BRyy74ITOmTKOjUTe6Tj2w6FlsiPkTJN3XTuV03oKxiQ372RIWNanY5pM%2Bp6AUkjX99T0dHDkV3kR2UCxSoXpa3XK4TkxuraAkZ4ZH19tYGGWlEiMN7edWBMY7HDebXAFRoUyV545u4ZLJo&X-Amz-Signature=b5f29d181765357b7eca38d45b4acbccc3af1adb61239a9d9edce09a43d7d76e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVT2WSX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6RGo8cbTMEvmOMsckW8VLuuXJ1hdGZfUIiKLMPH972AiEAu6XRJQf7woFddt9Zmwt%2B2tnH3zGKCrpmVKa3rSiXXvMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmNaR0kS9PkCj3TJircA8V0WqaHnqiawxAPUxgRr6t5v%2FlnnIx5tIrFBfAbUfJJyOX1%2FCemkN4AMI82Mj3utdhQRH9tODBTk3ILw86UP6%2F%2BnVU00a5jCf%2Bcu2nyHU8cchUmOK8a2T%2Bq6ywAMw9kr7NHym%2FTqv1k5gUVpeZ2%2BD7w4c07T1%2BZS9AIGK824khx6R%2FgbSiKYQranWXLhFHUP5zf%2B0svzZ5hf6Li1xOfLJOlhAfMOz8HPdZqWTNUr1f%2BN5qr609AP6ZM7V8Jjcuw0eKelR1nHajNAaFFZG%2BhrCVFZ6guTj4Tpsu5sxbBwRPvxhScELR4dhxPD2OugiHGtG%2Bg0zoA7Gcmt88cGq8mzAdEj%2FbEkOu%2BF2DacISQghGw%2FrboVzdJBnbaRWH5Hc952I02NPLTu%2BNlarRbHovOKJ0tzspRbtLiwH13w89VMEnu1mgrZH7UrQSsraoNnHMg9O5hS0soQcHJfJwGGhpb9BPRQebXaF68N5Fw3s2rsfr0hyKgXRQIgVXYP1Lo12uv%2Bc8qMxqL8g2Vb98M0or3R2zQv0%2FtpyETkIdzjUYlvxuWF2FMDQHiRk46Q0UDHcoa8RlI92Bf%2BWHZ%2B35Fos4oljdvlgQJNxLJvvsdq1%2FE6Gn4r2fD4Dijc7gMHQF4MKLG%2F78GOqUBu52%2B0dLMIowg0CMCIJhpcuFHYllC2Jc71ntwR%2FkNz0xVN8HFMrbfprUSlzaq6NFd3qwt86Cbk%2BCiq%2BRyy74ITOmTKOjUTe6Tj2w6FlsiPkTJN3XTuV03oKxiQ372RIWNanY5pM%2Bp6AUkjX99T0dHDkV3kR2UCxSoXpa3XK4TkxuraAkZ4ZH19tYGGWlEiMN7edWBMY7HDebXAFRoUyV545u4ZLJo&X-Amz-Signature=98d5e591fe33243ddd2ea45637ed6bf3c0c6032a6b21505907ff808d238bf27d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVT2WSX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6RGo8cbTMEvmOMsckW8VLuuXJ1hdGZfUIiKLMPH972AiEAu6XRJQf7woFddt9Zmwt%2B2tnH3zGKCrpmVKa3rSiXXvMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmNaR0kS9PkCj3TJircA8V0WqaHnqiawxAPUxgRr6t5v%2FlnnIx5tIrFBfAbUfJJyOX1%2FCemkN4AMI82Mj3utdhQRH9tODBTk3ILw86UP6%2F%2BnVU00a5jCf%2Bcu2nyHU8cchUmOK8a2T%2Bq6ywAMw9kr7NHym%2FTqv1k5gUVpeZ2%2BD7w4c07T1%2BZS9AIGK824khx6R%2FgbSiKYQranWXLhFHUP5zf%2B0svzZ5hf6Li1xOfLJOlhAfMOz8HPdZqWTNUr1f%2BN5qr609AP6ZM7V8Jjcuw0eKelR1nHajNAaFFZG%2BhrCVFZ6guTj4Tpsu5sxbBwRPvxhScELR4dhxPD2OugiHGtG%2Bg0zoA7Gcmt88cGq8mzAdEj%2FbEkOu%2BF2DacISQghGw%2FrboVzdJBnbaRWH5Hc952I02NPLTu%2BNlarRbHovOKJ0tzspRbtLiwH13w89VMEnu1mgrZH7UrQSsraoNnHMg9O5hS0soQcHJfJwGGhpb9BPRQebXaF68N5Fw3s2rsfr0hyKgXRQIgVXYP1Lo12uv%2Bc8qMxqL8g2Vb98M0or3R2zQv0%2FtpyETkIdzjUYlvxuWF2FMDQHiRk46Q0UDHcoa8RlI92Bf%2BWHZ%2B35Fos4oljdvlgQJNxLJvvsdq1%2FE6Gn4r2fD4Dijc7gMHQF4MKLG%2F78GOqUBu52%2B0dLMIowg0CMCIJhpcuFHYllC2Jc71ntwR%2FkNz0xVN8HFMrbfprUSlzaq6NFd3qwt86Cbk%2BCiq%2BRyy74ITOmTKOjUTe6Tj2w6FlsiPkTJN3XTuV03oKxiQ372RIWNanY5pM%2Bp6AUkjX99T0dHDkV3kR2UCxSoXpa3XK4TkxuraAkZ4ZH19tYGGWlEiMN7edWBMY7HDebXAFRoUyV545u4ZLJo&X-Amz-Signature=31d7a5ac008dda75d97c38b4439ed96bc28842f559087207155efdf960179742&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVT2WSX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6RGo8cbTMEvmOMsckW8VLuuXJ1hdGZfUIiKLMPH972AiEAu6XRJQf7woFddt9Zmwt%2B2tnH3zGKCrpmVKa3rSiXXvMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmNaR0kS9PkCj3TJircA8V0WqaHnqiawxAPUxgRr6t5v%2FlnnIx5tIrFBfAbUfJJyOX1%2FCemkN4AMI82Mj3utdhQRH9tODBTk3ILw86UP6%2F%2BnVU00a5jCf%2Bcu2nyHU8cchUmOK8a2T%2Bq6ywAMw9kr7NHym%2FTqv1k5gUVpeZ2%2BD7w4c07T1%2BZS9AIGK824khx6R%2FgbSiKYQranWXLhFHUP5zf%2B0svzZ5hf6Li1xOfLJOlhAfMOz8HPdZqWTNUr1f%2BN5qr609AP6ZM7V8Jjcuw0eKelR1nHajNAaFFZG%2BhrCVFZ6guTj4Tpsu5sxbBwRPvxhScELR4dhxPD2OugiHGtG%2Bg0zoA7Gcmt88cGq8mzAdEj%2FbEkOu%2BF2DacISQghGw%2FrboVzdJBnbaRWH5Hc952I02NPLTu%2BNlarRbHovOKJ0tzspRbtLiwH13w89VMEnu1mgrZH7UrQSsraoNnHMg9O5hS0soQcHJfJwGGhpb9BPRQebXaF68N5Fw3s2rsfr0hyKgXRQIgVXYP1Lo12uv%2Bc8qMxqL8g2Vb98M0or3R2zQv0%2FtpyETkIdzjUYlvxuWF2FMDQHiRk46Q0UDHcoa8RlI92Bf%2BWHZ%2B35Fos4oljdvlgQJNxLJvvsdq1%2FE6Gn4r2fD4Dijc7gMHQF4MKLG%2F78GOqUBu52%2B0dLMIowg0CMCIJhpcuFHYllC2Jc71ntwR%2FkNz0xVN8HFMrbfprUSlzaq6NFd3qwt86Cbk%2BCiq%2BRyy74ITOmTKOjUTe6Tj2w6FlsiPkTJN3XTuV03oKxiQ372RIWNanY5pM%2Bp6AUkjX99T0dHDkV3kR2UCxSoXpa3XK4TkxuraAkZ4ZH19tYGGWlEiMN7edWBMY7HDebXAFRoUyV545u4ZLJo&X-Amz-Signature=f5febb77bfc68a8c4cc971a332c7f2d115c80532e59a1157b5d03be453f20934&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVT2WSX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6RGo8cbTMEvmOMsckW8VLuuXJ1hdGZfUIiKLMPH972AiEAu6XRJQf7woFddt9Zmwt%2B2tnH3zGKCrpmVKa3rSiXXvMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmNaR0kS9PkCj3TJircA8V0WqaHnqiawxAPUxgRr6t5v%2FlnnIx5tIrFBfAbUfJJyOX1%2FCemkN4AMI82Mj3utdhQRH9tODBTk3ILw86UP6%2F%2BnVU00a5jCf%2Bcu2nyHU8cchUmOK8a2T%2Bq6ywAMw9kr7NHym%2FTqv1k5gUVpeZ2%2BD7w4c07T1%2BZS9AIGK824khx6R%2FgbSiKYQranWXLhFHUP5zf%2B0svzZ5hf6Li1xOfLJOlhAfMOz8HPdZqWTNUr1f%2BN5qr609AP6ZM7V8Jjcuw0eKelR1nHajNAaFFZG%2BhrCVFZ6guTj4Tpsu5sxbBwRPvxhScELR4dhxPD2OugiHGtG%2Bg0zoA7Gcmt88cGq8mzAdEj%2FbEkOu%2BF2DacISQghGw%2FrboVzdJBnbaRWH5Hc952I02NPLTu%2BNlarRbHovOKJ0tzspRbtLiwH13w89VMEnu1mgrZH7UrQSsraoNnHMg9O5hS0soQcHJfJwGGhpb9BPRQebXaF68N5Fw3s2rsfr0hyKgXRQIgVXYP1Lo12uv%2Bc8qMxqL8g2Vb98M0or3R2zQv0%2FtpyETkIdzjUYlvxuWF2FMDQHiRk46Q0UDHcoa8RlI92Bf%2BWHZ%2B35Fos4oljdvlgQJNxLJvvsdq1%2FE6Gn4r2fD4Dijc7gMHQF4MKLG%2F78GOqUBu52%2B0dLMIowg0CMCIJhpcuFHYllC2Jc71ntwR%2FkNz0xVN8HFMrbfprUSlzaq6NFd3qwt86Cbk%2BCiq%2BRyy74ITOmTKOjUTe6Tj2w6FlsiPkTJN3XTuV03oKxiQ372RIWNanY5pM%2Bp6AUkjX99T0dHDkV3kR2UCxSoXpa3XK4TkxuraAkZ4ZH19tYGGWlEiMN7edWBMY7HDebXAFRoUyV545u4ZLJo&X-Amz-Signature=a81a56ca02acb044788d7882b69e7e05a06e5603d26b3a6cd4fe19d55dfa1833&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVT2WSX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6RGo8cbTMEvmOMsckW8VLuuXJ1hdGZfUIiKLMPH972AiEAu6XRJQf7woFddt9Zmwt%2B2tnH3zGKCrpmVKa3rSiXXvMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmNaR0kS9PkCj3TJircA8V0WqaHnqiawxAPUxgRr6t5v%2FlnnIx5tIrFBfAbUfJJyOX1%2FCemkN4AMI82Mj3utdhQRH9tODBTk3ILw86UP6%2F%2BnVU00a5jCf%2Bcu2nyHU8cchUmOK8a2T%2Bq6ywAMw9kr7NHym%2FTqv1k5gUVpeZ2%2BD7w4c07T1%2BZS9AIGK824khx6R%2FgbSiKYQranWXLhFHUP5zf%2B0svzZ5hf6Li1xOfLJOlhAfMOz8HPdZqWTNUr1f%2BN5qr609AP6ZM7V8Jjcuw0eKelR1nHajNAaFFZG%2BhrCVFZ6guTj4Tpsu5sxbBwRPvxhScELR4dhxPD2OugiHGtG%2Bg0zoA7Gcmt88cGq8mzAdEj%2FbEkOu%2BF2DacISQghGw%2FrboVzdJBnbaRWH5Hc952I02NPLTu%2BNlarRbHovOKJ0tzspRbtLiwH13w89VMEnu1mgrZH7UrQSsraoNnHMg9O5hS0soQcHJfJwGGhpb9BPRQebXaF68N5Fw3s2rsfr0hyKgXRQIgVXYP1Lo12uv%2Bc8qMxqL8g2Vb98M0or3R2zQv0%2FtpyETkIdzjUYlvxuWF2FMDQHiRk46Q0UDHcoa8RlI92Bf%2BWHZ%2B35Fos4oljdvlgQJNxLJvvsdq1%2FE6Gn4r2fD4Dijc7gMHQF4MKLG%2F78GOqUBu52%2B0dLMIowg0CMCIJhpcuFHYllC2Jc71ntwR%2FkNz0xVN8HFMrbfprUSlzaq6NFd3qwt86Cbk%2BCiq%2BRyy74ITOmTKOjUTe6Tj2w6FlsiPkTJN3XTuV03oKxiQ372RIWNanY5pM%2Bp6AUkjX99T0dHDkV3kR2UCxSoXpa3XK4TkxuraAkZ4ZH19tYGGWlEiMN7edWBMY7HDebXAFRoUyV545u4ZLJo&X-Amz-Signature=0a34c13a3c6340ec2a0afc9fb796e12433b17c150540346b28e7c721c1cf2ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVT2WSX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6RGo8cbTMEvmOMsckW8VLuuXJ1hdGZfUIiKLMPH972AiEAu6XRJQf7woFddt9Zmwt%2B2tnH3zGKCrpmVKa3rSiXXvMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmNaR0kS9PkCj3TJircA8V0WqaHnqiawxAPUxgRr6t5v%2FlnnIx5tIrFBfAbUfJJyOX1%2FCemkN4AMI82Mj3utdhQRH9tODBTk3ILw86UP6%2F%2BnVU00a5jCf%2Bcu2nyHU8cchUmOK8a2T%2Bq6ywAMw9kr7NHym%2FTqv1k5gUVpeZ2%2BD7w4c07T1%2BZS9AIGK824khx6R%2FgbSiKYQranWXLhFHUP5zf%2B0svzZ5hf6Li1xOfLJOlhAfMOz8HPdZqWTNUr1f%2BN5qr609AP6ZM7V8Jjcuw0eKelR1nHajNAaFFZG%2BhrCVFZ6guTj4Tpsu5sxbBwRPvxhScELR4dhxPD2OugiHGtG%2Bg0zoA7Gcmt88cGq8mzAdEj%2FbEkOu%2BF2DacISQghGw%2FrboVzdJBnbaRWH5Hc952I02NPLTu%2BNlarRbHovOKJ0tzspRbtLiwH13w89VMEnu1mgrZH7UrQSsraoNnHMg9O5hS0soQcHJfJwGGhpb9BPRQebXaF68N5Fw3s2rsfr0hyKgXRQIgVXYP1Lo12uv%2Bc8qMxqL8g2Vb98M0or3R2zQv0%2FtpyETkIdzjUYlvxuWF2FMDQHiRk46Q0UDHcoa8RlI92Bf%2BWHZ%2B35Fos4oljdvlgQJNxLJvvsdq1%2FE6Gn4r2fD4Dijc7gMHQF4MKLG%2F78GOqUBu52%2B0dLMIowg0CMCIJhpcuFHYllC2Jc71ntwR%2FkNz0xVN8HFMrbfprUSlzaq6NFd3qwt86Cbk%2BCiq%2BRyy74ITOmTKOjUTe6Tj2w6FlsiPkTJN3XTuV03oKxiQ372RIWNanY5pM%2Bp6AUkjX99T0dHDkV3kR2UCxSoXpa3XK4TkxuraAkZ4ZH19tYGGWlEiMN7edWBMY7HDebXAFRoUyV545u4ZLJo&X-Amz-Signature=cb065075fc2d175f704cbb7ebb46348717ede159465078f6980a6983d7eded8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVT2WSX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6RGo8cbTMEvmOMsckW8VLuuXJ1hdGZfUIiKLMPH972AiEAu6XRJQf7woFddt9Zmwt%2B2tnH3zGKCrpmVKa3rSiXXvMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmNaR0kS9PkCj3TJircA8V0WqaHnqiawxAPUxgRr6t5v%2FlnnIx5tIrFBfAbUfJJyOX1%2FCemkN4AMI82Mj3utdhQRH9tODBTk3ILw86UP6%2F%2BnVU00a5jCf%2Bcu2nyHU8cchUmOK8a2T%2Bq6ywAMw9kr7NHym%2FTqv1k5gUVpeZ2%2BD7w4c07T1%2BZS9AIGK824khx6R%2FgbSiKYQranWXLhFHUP5zf%2B0svzZ5hf6Li1xOfLJOlhAfMOz8HPdZqWTNUr1f%2BN5qr609AP6ZM7V8Jjcuw0eKelR1nHajNAaFFZG%2BhrCVFZ6guTj4Tpsu5sxbBwRPvxhScELR4dhxPD2OugiHGtG%2Bg0zoA7Gcmt88cGq8mzAdEj%2FbEkOu%2BF2DacISQghGw%2FrboVzdJBnbaRWH5Hc952I02NPLTu%2BNlarRbHovOKJ0tzspRbtLiwH13w89VMEnu1mgrZH7UrQSsraoNnHMg9O5hS0soQcHJfJwGGhpb9BPRQebXaF68N5Fw3s2rsfr0hyKgXRQIgVXYP1Lo12uv%2Bc8qMxqL8g2Vb98M0or3R2zQv0%2FtpyETkIdzjUYlvxuWF2FMDQHiRk46Q0UDHcoa8RlI92Bf%2BWHZ%2B35Fos4oljdvlgQJNxLJvvsdq1%2FE6Gn4r2fD4Dijc7gMHQF4MKLG%2F78GOqUBu52%2B0dLMIowg0CMCIJhpcuFHYllC2Jc71ntwR%2FkNz0xVN8HFMrbfprUSlzaq6NFd3qwt86Cbk%2BCiq%2BRyy74ITOmTKOjUTe6Tj2w6FlsiPkTJN3XTuV03oKxiQ372RIWNanY5pM%2Bp6AUkjX99T0dHDkV3kR2UCxSoXpa3XK4TkxuraAkZ4ZH19tYGGWlEiMN7edWBMY7HDebXAFRoUyV545u4ZLJo&X-Amz-Signature=231c9d9fb325b5f0dde0e406752914bbfc9ff57168d58540beac2cff551e77e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

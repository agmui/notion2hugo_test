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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWQ42L3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB8Nhmy%2FfTdHquM3GzphACic2P1gb6AFg0eLGY7R5V5HAiB%2BSffqttTjh4A%2FG8XM3GpLHhSDm%2BpylAJ4vOS7oO2gEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeLq3SOd6%2Bv11ABNsKtwDteJRSCn%2BCYVMJwknDCiTpc5IoJdBfm8wVG9fn9eKi0a2M1VN5u6f72etCGEmMt4su%2BE%2F5FOURn6Cr3axDOXSQ0AEVxTnAzrZZArT%2Fn6Mw%2BH%2FasfC3WfLM%2BdxR%2F3%2FchfoId9701pnXjdh25dO0ItgDg4bC9pkeBV%2FTNOl2Pn4FUPPxufO3D2uEEURLxMe0GjUTRVaSROAcuMdKUEz%2F1niKgKALE6eqbrqXtqRPzM5YqdFs38ZqR%2BEA0c4FGJo10vaMaHarkqLAotoRoCBFyDTXVgoXmvrX1sul47R%2FYYsOziwFiNJTmCp4zBHK2D8y4iEB5CVGSQD8W9z6VdrFzj1ufB92FyHdmnJ1uh5ZkYJFyux6ulp%2FysYSoppvZao4P%2BUcnstp7HJ25bj2dFUt%2B1w7jJiSaUzUV9FooIP%2F19mzpwW6yojIDx6oEEjzhNt1yAAo%2BsxDTnNr0HQuL02E4WjHEJp1e%2BxtLUt5kP1W3fKQmZStFAVsAVFEVsIzujCWS%2B3GVHh27%2BykmAEPfvAClsP9nfOdFuyyg%2B1V5al5CV5V%2BAyUkuM%2FacOFvROetKerNW0igypbLfF32mGSdXXdmCP%2FYN%2FHie%2Fp%2FDj1liPxYqX8DC8WBeTMipEWmJ0mhcw3LzjwwY6pgEfDfX5YMXcVivbpkp1FNo%2FLNwOXyNFy2JNwB%2FBvv%2FxCnwW9tZ5ibKN9ln%2FuXnPdVD7%2FilGrrv1pyk5af1tVVfirWmnAq8DW5NXfNo3%2B6WzILdqXPBUU9IzjA%2BdJYTpzpX4FIoJlFvcIWycg6Qg%2BHcgtHBv8UeIrn0lcBw497hVtMJ9casgcupvLzxljLjm5Xg7LJcnp4ImqpMN%2FA7z65iVCZgncbZy&X-Amz-Signature=23ec5da30a3c5c8da11be320bbc1fc8f1d99c26bef9a31aa554e126748d32ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWQ42L3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB8Nhmy%2FfTdHquM3GzphACic2P1gb6AFg0eLGY7R5V5HAiB%2BSffqttTjh4A%2FG8XM3GpLHhSDm%2BpylAJ4vOS7oO2gEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeLq3SOd6%2Bv11ABNsKtwDteJRSCn%2BCYVMJwknDCiTpc5IoJdBfm8wVG9fn9eKi0a2M1VN5u6f72etCGEmMt4su%2BE%2F5FOURn6Cr3axDOXSQ0AEVxTnAzrZZArT%2Fn6Mw%2BH%2FasfC3WfLM%2BdxR%2F3%2FchfoId9701pnXjdh25dO0ItgDg4bC9pkeBV%2FTNOl2Pn4FUPPxufO3D2uEEURLxMe0GjUTRVaSROAcuMdKUEz%2F1niKgKALE6eqbrqXtqRPzM5YqdFs38ZqR%2BEA0c4FGJo10vaMaHarkqLAotoRoCBFyDTXVgoXmvrX1sul47R%2FYYsOziwFiNJTmCp4zBHK2D8y4iEB5CVGSQD8W9z6VdrFzj1ufB92FyHdmnJ1uh5ZkYJFyux6ulp%2FysYSoppvZao4P%2BUcnstp7HJ25bj2dFUt%2B1w7jJiSaUzUV9FooIP%2F19mzpwW6yojIDx6oEEjzhNt1yAAo%2BsxDTnNr0HQuL02E4WjHEJp1e%2BxtLUt5kP1W3fKQmZStFAVsAVFEVsIzujCWS%2B3GVHh27%2BykmAEPfvAClsP9nfOdFuyyg%2B1V5al5CV5V%2BAyUkuM%2FacOFvROetKerNW0igypbLfF32mGSdXXdmCP%2FYN%2FHie%2Fp%2FDj1liPxYqX8DC8WBeTMipEWmJ0mhcw3LzjwwY6pgEfDfX5YMXcVivbpkp1FNo%2FLNwOXyNFy2JNwB%2FBvv%2FxCnwW9tZ5ibKN9ln%2FuXnPdVD7%2FilGrrv1pyk5af1tVVfirWmnAq8DW5NXfNo3%2B6WzILdqXPBUU9IzjA%2BdJYTpzpX4FIoJlFvcIWycg6Qg%2BHcgtHBv8UeIrn0lcBw497hVtMJ9casgcupvLzxljLjm5Xg7LJcnp4ImqpMN%2FA7z65iVCZgncbZy&X-Amz-Signature=9a60c46df6789d324e2e2bcbadf2e8946d56d504ef557f3d890fc16ae05e5222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWQ42L3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB8Nhmy%2FfTdHquM3GzphACic2P1gb6AFg0eLGY7R5V5HAiB%2BSffqttTjh4A%2FG8XM3GpLHhSDm%2BpylAJ4vOS7oO2gEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeLq3SOd6%2Bv11ABNsKtwDteJRSCn%2BCYVMJwknDCiTpc5IoJdBfm8wVG9fn9eKi0a2M1VN5u6f72etCGEmMt4su%2BE%2F5FOURn6Cr3axDOXSQ0AEVxTnAzrZZArT%2Fn6Mw%2BH%2FasfC3WfLM%2BdxR%2F3%2FchfoId9701pnXjdh25dO0ItgDg4bC9pkeBV%2FTNOl2Pn4FUPPxufO3D2uEEURLxMe0GjUTRVaSROAcuMdKUEz%2F1niKgKALE6eqbrqXtqRPzM5YqdFs38ZqR%2BEA0c4FGJo10vaMaHarkqLAotoRoCBFyDTXVgoXmvrX1sul47R%2FYYsOziwFiNJTmCp4zBHK2D8y4iEB5CVGSQD8W9z6VdrFzj1ufB92FyHdmnJ1uh5ZkYJFyux6ulp%2FysYSoppvZao4P%2BUcnstp7HJ25bj2dFUt%2B1w7jJiSaUzUV9FooIP%2F19mzpwW6yojIDx6oEEjzhNt1yAAo%2BsxDTnNr0HQuL02E4WjHEJp1e%2BxtLUt5kP1W3fKQmZStFAVsAVFEVsIzujCWS%2B3GVHh27%2BykmAEPfvAClsP9nfOdFuyyg%2B1V5al5CV5V%2BAyUkuM%2FacOFvROetKerNW0igypbLfF32mGSdXXdmCP%2FYN%2FHie%2Fp%2FDj1liPxYqX8DC8WBeTMipEWmJ0mhcw3LzjwwY6pgEfDfX5YMXcVivbpkp1FNo%2FLNwOXyNFy2JNwB%2FBvv%2FxCnwW9tZ5ibKN9ln%2FuXnPdVD7%2FilGrrv1pyk5af1tVVfirWmnAq8DW5NXfNo3%2B6WzILdqXPBUU9IzjA%2BdJYTpzpX4FIoJlFvcIWycg6Qg%2BHcgtHBv8UeIrn0lcBw497hVtMJ9casgcupvLzxljLjm5Xg7LJcnp4ImqpMN%2FA7z65iVCZgncbZy&X-Amz-Signature=f05f7285cc8de397a5c2084793fa7fd1e2a0afbfc6da4741f5487f5459d82b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWQ42L3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB8Nhmy%2FfTdHquM3GzphACic2P1gb6AFg0eLGY7R5V5HAiB%2BSffqttTjh4A%2FG8XM3GpLHhSDm%2BpylAJ4vOS7oO2gEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeLq3SOd6%2Bv11ABNsKtwDteJRSCn%2BCYVMJwknDCiTpc5IoJdBfm8wVG9fn9eKi0a2M1VN5u6f72etCGEmMt4su%2BE%2F5FOURn6Cr3axDOXSQ0AEVxTnAzrZZArT%2Fn6Mw%2BH%2FasfC3WfLM%2BdxR%2F3%2FchfoId9701pnXjdh25dO0ItgDg4bC9pkeBV%2FTNOl2Pn4FUPPxufO3D2uEEURLxMe0GjUTRVaSROAcuMdKUEz%2F1niKgKALE6eqbrqXtqRPzM5YqdFs38ZqR%2BEA0c4FGJo10vaMaHarkqLAotoRoCBFyDTXVgoXmvrX1sul47R%2FYYsOziwFiNJTmCp4zBHK2D8y4iEB5CVGSQD8W9z6VdrFzj1ufB92FyHdmnJ1uh5ZkYJFyux6ulp%2FysYSoppvZao4P%2BUcnstp7HJ25bj2dFUt%2B1w7jJiSaUzUV9FooIP%2F19mzpwW6yojIDx6oEEjzhNt1yAAo%2BsxDTnNr0HQuL02E4WjHEJp1e%2BxtLUt5kP1W3fKQmZStFAVsAVFEVsIzujCWS%2B3GVHh27%2BykmAEPfvAClsP9nfOdFuyyg%2B1V5al5CV5V%2BAyUkuM%2FacOFvROetKerNW0igypbLfF32mGSdXXdmCP%2FYN%2FHie%2Fp%2FDj1liPxYqX8DC8WBeTMipEWmJ0mhcw3LzjwwY6pgEfDfX5YMXcVivbpkp1FNo%2FLNwOXyNFy2JNwB%2FBvv%2FxCnwW9tZ5ibKN9ln%2FuXnPdVD7%2FilGrrv1pyk5af1tVVfirWmnAq8DW5NXfNo3%2B6WzILdqXPBUU9IzjA%2BdJYTpzpX4FIoJlFvcIWycg6Qg%2BHcgtHBv8UeIrn0lcBw497hVtMJ9casgcupvLzxljLjm5Xg7LJcnp4ImqpMN%2FA7z65iVCZgncbZy&X-Amz-Signature=6788720997cbbab4c5092a941a521423a0481bb1da10a6b3117fc314df8f526f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWQ42L3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB8Nhmy%2FfTdHquM3GzphACic2P1gb6AFg0eLGY7R5V5HAiB%2BSffqttTjh4A%2FG8XM3GpLHhSDm%2BpylAJ4vOS7oO2gEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeLq3SOd6%2Bv11ABNsKtwDteJRSCn%2BCYVMJwknDCiTpc5IoJdBfm8wVG9fn9eKi0a2M1VN5u6f72etCGEmMt4su%2BE%2F5FOURn6Cr3axDOXSQ0AEVxTnAzrZZArT%2Fn6Mw%2BH%2FasfC3WfLM%2BdxR%2F3%2FchfoId9701pnXjdh25dO0ItgDg4bC9pkeBV%2FTNOl2Pn4FUPPxufO3D2uEEURLxMe0GjUTRVaSROAcuMdKUEz%2F1niKgKALE6eqbrqXtqRPzM5YqdFs38ZqR%2BEA0c4FGJo10vaMaHarkqLAotoRoCBFyDTXVgoXmvrX1sul47R%2FYYsOziwFiNJTmCp4zBHK2D8y4iEB5CVGSQD8W9z6VdrFzj1ufB92FyHdmnJ1uh5ZkYJFyux6ulp%2FysYSoppvZao4P%2BUcnstp7HJ25bj2dFUt%2B1w7jJiSaUzUV9FooIP%2F19mzpwW6yojIDx6oEEjzhNt1yAAo%2BsxDTnNr0HQuL02E4WjHEJp1e%2BxtLUt5kP1W3fKQmZStFAVsAVFEVsIzujCWS%2B3GVHh27%2BykmAEPfvAClsP9nfOdFuyyg%2B1V5al5CV5V%2BAyUkuM%2FacOFvROetKerNW0igypbLfF32mGSdXXdmCP%2FYN%2FHie%2Fp%2FDj1liPxYqX8DC8WBeTMipEWmJ0mhcw3LzjwwY6pgEfDfX5YMXcVivbpkp1FNo%2FLNwOXyNFy2JNwB%2FBvv%2FxCnwW9tZ5ibKN9ln%2FuXnPdVD7%2FilGrrv1pyk5af1tVVfirWmnAq8DW5NXfNo3%2B6WzILdqXPBUU9IzjA%2BdJYTpzpX4FIoJlFvcIWycg6Qg%2BHcgtHBv8UeIrn0lcBw497hVtMJ9casgcupvLzxljLjm5Xg7LJcnp4ImqpMN%2FA7z65iVCZgncbZy&X-Amz-Signature=35754b08cbd76d1dff7f93db43a74d271dcb1f111b749d5ff62aa06293779ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWQ42L3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB8Nhmy%2FfTdHquM3GzphACic2P1gb6AFg0eLGY7R5V5HAiB%2BSffqttTjh4A%2FG8XM3GpLHhSDm%2BpylAJ4vOS7oO2gEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeLq3SOd6%2Bv11ABNsKtwDteJRSCn%2BCYVMJwknDCiTpc5IoJdBfm8wVG9fn9eKi0a2M1VN5u6f72etCGEmMt4su%2BE%2F5FOURn6Cr3axDOXSQ0AEVxTnAzrZZArT%2Fn6Mw%2BH%2FasfC3WfLM%2BdxR%2F3%2FchfoId9701pnXjdh25dO0ItgDg4bC9pkeBV%2FTNOl2Pn4FUPPxufO3D2uEEURLxMe0GjUTRVaSROAcuMdKUEz%2F1niKgKALE6eqbrqXtqRPzM5YqdFs38ZqR%2BEA0c4FGJo10vaMaHarkqLAotoRoCBFyDTXVgoXmvrX1sul47R%2FYYsOziwFiNJTmCp4zBHK2D8y4iEB5CVGSQD8W9z6VdrFzj1ufB92FyHdmnJ1uh5ZkYJFyux6ulp%2FysYSoppvZao4P%2BUcnstp7HJ25bj2dFUt%2B1w7jJiSaUzUV9FooIP%2F19mzpwW6yojIDx6oEEjzhNt1yAAo%2BsxDTnNr0HQuL02E4WjHEJp1e%2BxtLUt5kP1W3fKQmZStFAVsAVFEVsIzujCWS%2B3GVHh27%2BykmAEPfvAClsP9nfOdFuyyg%2B1V5al5CV5V%2BAyUkuM%2FacOFvROetKerNW0igypbLfF32mGSdXXdmCP%2FYN%2FHie%2Fp%2FDj1liPxYqX8DC8WBeTMipEWmJ0mhcw3LzjwwY6pgEfDfX5YMXcVivbpkp1FNo%2FLNwOXyNFy2JNwB%2FBvv%2FxCnwW9tZ5ibKN9ln%2FuXnPdVD7%2FilGrrv1pyk5af1tVVfirWmnAq8DW5NXfNo3%2B6WzILdqXPBUU9IzjA%2BdJYTpzpX4FIoJlFvcIWycg6Qg%2BHcgtHBv8UeIrn0lcBw497hVtMJ9casgcupvLzxljLjm5Xg7LJcnp4ImqpMN%2FA7z65iVCZgncbZy&X-Amz-Signature=16c4c1631337d145430af506aa3c990045d0bcbf9d33b4abf7d04e24f9f5dd83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWQ42L3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB8Nhmy%2FfTdHquM3GzphACic2P1gb6AFg0eLGY7R5V5HAiB%2BSffqttTjh4A%2FG8XM3GpLHhSDm%2BpylAJ4vOS7oO2gEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeLq3SOd6%2Bv11ABNsKtwDteJRSCn%2BCYVMJwknDCiTpc5IoJdBfm8wVG9fn9eKi0a2M1VN5u6f72etCGEmMt4su%2BE%2F5FOURn6Cr3axDOXSQ0AEVxTnAzrZZArT%2Fn6Mw%2BH%2FasfC3WfLM%2BdxR%2F3%2FchfoId9701pnXjdh25dO0ItgDg4bC9pkeBV%2FTNOl2Pn4FUPPxufO3D2uEEURLxMe0GjUTRVaSROAcuMdKUEz%2F1niKgKALE6eqbrqXtqRPzM5YqdFs38ZqR%2BEA0c4FGJo10vaMaHarkqLAotoRoCBFyDTXVgoXmvrX1sul47R%2FYYsOziwFiNJTmCp4zBHK2D8y4iEB5CVGSQD8W9z6VdrFzj1ufB92FyHdmnJ1uh5ZkYJFyux6ulp%2FysYSoppvZao4P%2BUcnstp7HJ25bj2dFUt%2B1w7jJiSaUzUV9FooIP%2F19mzpwW6yojIDx6oEEjzhNt1yAAo%2BsxDTnNr0HQuL02E4WjHEJp1e%2BxtLUt5kP1W3fKQmZStFAVsAVFEVsIzujCWS%2B3GVHh27%2BykmAEPfvAClsP9nfOdFuyyg%2B1V5al5CV5V%2BAyUkuM%2FacOFvROetKerNW0igypbLfF32mGSdXXdmCP%2FYN%2FHie%2Fp%2FDj1liPxYqX8DC8WBeTMipEWmJ0mhcw3LzjwwY6pgEfDfX5YMXcVivbpkp1FNo%2FLNwOXyNFy2JNwB%2FBvv%2FxCnwW9tZ5ibKN9ln%2FuXnPdVD7%2FilGrrv1pyk5af1tVVfirWmnAq8DW5NXfNo3%2B6WzILdqXPBUU9IzjA%2BdJYTpzpX4FIoJlFvcIWycg6Qg%2BHcgtHBv8UeIrn0lcBw497hVtMJ9casgcupvLzxljLjm5Xg7LJcnp4ImqpMN%2FA7z65iVCZgncbZy&X-Amz-Signature=2de12096d834890d6bf6123dac76faa83eb9e85773c1157b9fc28dc383ec7ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWQ42L3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB8Nhmy%2FfTdHquM3GzphACic2P1gb6AFg0eLGY7R5V5HAiB%2BSffqttTjh4A%2FG8XM3GpLHhSDm%2BpylAJ4vOS7oO2gEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeLq3SOd6%2Bv11ABNsKtwDteJRSCn%2BCYVMJwknDCiTpc5IoJdBfm8wVG9fn9eKi0a2M1VN5u6f72etCGEmMt4su%2BE%2F5FOURn6Cr3axDOXSQ0AEVxTnAzrZZArT%2Fn6Mw%2BH%2FasfC3WfLM%2BdxR%2F3%2FchfoId9701pnXjdh25dO0ItgDg4bC9pkeBV%2FTNOl2Pn4FUPPxufO3D2uEEURLxMe0GjUTRVaSROAcuMdKUEz%2F1niKgKALE6eqbrqXtqRPzM5YqdFs38ZqR%2BEA0c4FGJo10vaMaHarkqLAotoRoCBFyDTXVgoXmvrX1sul47R%2FYYsOziwFiNJTmCp4zBHK2D8y4iEB5CVGSQD8W9z6VdrFzj1ufB92FyHdmnJ1uh5ZkYJFyux6ulp%2FysYSoppvZao4P%2BUcnstp7HJ25bj2dFUt%2B1w7jJiSaUzUV9FooIP%2F19mzpwW6yojIDx6oEEjzhNt1yAAo%2BsxDTnNr0HQuL02E4WjHEJp1e%2BxtLUt5kP1W3fKQmZStFAVsAVFEVsIzujCWS%2B3GVHh27%2BykmAEPfvAClsP9nfOdFuyyg%2B1V5al5CV5V%2BAyUkuM%2FacOFvROetKerNW0igypbLfF32mGSdXXdmCP%2FYN%2FHie%2Fp%2FDj1liPxYqX8DC8WBeTMipEWmJ0mhcw3LzjwwY6pgEfDfX5YMXcVivbpkp1FNo%2FLNwOXyNFy2JNwB%2FBvv%2FxCnwW9tZ5ibKN9ln%2FuXnPdVD7%2FilGrrv1pyk5af1tVVfirWmnAq8DW5NXfNo3%2B6WzILdqXPBUU9IzjA%2BdJYTpzpX4FIoJlFvcIWycg6Qg%2BHcgtHBv8UeIrn0lcBw497hVtMJ9casgcupvLzxljLjm5Xg7LJcnp4ImqpMN%2FA7z65iVCZgncbZy&X-Amz-Signature=d056ba1434fb829fc94874646817b866c3dcd6f850f354178b09e8119d1ba17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

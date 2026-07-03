---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Z37M4F%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIC%2Baj7IkUIKoBx%2BfyQL6s57pNBFWgcLFk13AWCF9lks2AiEAxOXaxJij%2FDPbIw35NlyUQP2mMzKdrz8Zq4Kp2VRTiFQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDERJzaUN%2FGYgBxKBxCrcA5h1oTNXDd7eg6d8VwMd%2BCtpQkOK%2Fr0jM%2FgMpfrG5mXRw4mz2dKQwnGxjCC5PfnAEyIjekJZCSoT92hOZ92RGUf9rSG4v8pQGvA21Tb7twLF0OFxoH7HkLYfMzizWPd84fte60RbEaPS%2FVHLsRpxdcjuL67vCw%2FKz52b8BdN3pKjuj8gr%2FTGv4dw%2BQOhkRP5lpycyR%2BCLUXmbSrTAbo6nhyoBgIhyRgDBQuBDPmwmTU6WieWDCVl0LQSzRUbJSaL7Vv1O1b7ggHWKZgpb0esG78HGCP%2BtmN8ljOEd8uvzf4%2FrSFGWwUt8QFLG2%2FPaPAnFKEZPzxNG%2B3yYxJ3wgocdDyvvhcpFkpi9JMJxXv5jS%2BEUrrv%2FEuv1y7ZrQSyltq0eChpjZK9%2FJWGhl%2FG8EjW3UwzxZDRvGJZSoDk%2Fi5CYEs79WShI73pWv4Z6et1lpOslTEW%2BKMheW5T9zVDDxgnV6v7KlId63IIEQkOUvkrhhVgrurB4EvqYa27X65ELeFOonyVJNBAFKHObrPYFHD48g6Nr9VcXSBVi8h54ks0KbhBTVsUXnyO8tiVo28f%2BDdWj6SWsk9PPsmArZbABh8d%2F7q70d7TmJhAbjlSQ%2FnVXbjnMi2ab4%2FIsU7YV1S2MNK7nNIGOqUBn2CcX%2B6at4DhYseS4ZctR7YxnFrHdQWeVeD7ICcGwc2Bt%2BtB5mIFR89SqDImN1sNZiFfI7B2xr8%2FqWquPIiV5R6nQwbgYRyZRSnhC5fe7j9x7jFen5N%2BfV1i6vRSI1Q42WLhGixXhsRlshOEKUdrWkiporKVc%2F6LXpOeLle6iLR%2Fr3t4OE3AkfOO0mSxAZDBkG4rcz3FkARwMpvCLIOUS%2BYOtDOv&X-Amz-Signature=4c79acd750900e71bdbc0d95e4ff9d1ccdea8fa096a770cc9f0d4039bb57d391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Z37M4F%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIC%2Baj7IkUIKoBx%2BfyQL6s57pNBFWgcLFk13AWCF9lks2AiEAxOXaxJij%2FDPbIw35NlyUQP2mMzKdrz8Zq4Kp2VRTiFQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDERJzaUN%2FGYgBxKBxCrcA5h1oTNXDd7eg6d8VwMd%2BCtpQkOK%2Fr0jM%2FgMpfrG5mXRw4mz2dKQwnGxjCC5PfnAEyIjekJZCSoT92hOZ92RGUf9rSG4v8pQGvA21Tb7twLF0OFxoH7HkLYfMzizWPd84fte60RbEaPS%2FVHLsRpxdcjuL67vCw%2FKz52b8BdN3pKjuj8gr%2FTGv4dw%2BQOhkRP5lpycyR%2BCLUXmbSrTAbo6nhyoBgIhyRgDBQuBDPmwmTU6WieWDCVl0LQSzRUbJSaL7Vv1O1b7ggHWKZgpb0esG78HGCP%2BtmN8ljOEd8uvzf4%2FrSFGWwUt8QFLG2%2FPaPAnFKEZPzxNG%2B3yYxJ3wgocdDyvvhcpFkpi9JMJxXv5jS%2BEUrrv%2FEuv1y7ZrQSyltq0eChpjZK9%2FJWGhl%2FG8EjW3UwzxZDRvGJZSoDk%2Fi5CYEs79WShI73pWv4Z6et1lpOslTEW%2BKMheW5T9zVDDxgnV6v7KlId63IIEQkOUvkrhhVgrurB4EvqYa27X65ELeFOonyVJNBAFKHObrPYFHD48g6Nr9VcXSBVi8h54ks0KbhBTVsUXnyO8tiVo28f%2BDdWj6SWsk9PPsmArZbABh8d%2F7q70d7TmJhAbjlSQ%2FnVXbjnMi2ab4%2FIsU7YV1S2MNK7nNIGOqUBn2CcX%2B6at4DhYseS4ZctR7YxnFrHdQWeVeD7ICcGwc2Bt%2BtB5mIFR89SqDImN1sNZiFfI7B2xr8%2FqWquPIiV5R6nQwbgYRyZRSnhC5fe7j9x7jFen5N%2BfV1i6vRSI1Q42WLhGixXhsRlshOEKUdrWkiporKVc%2F6LXpOeLle6iLR%2Fr3t4OE3AkfOO0mSxAZDBkG4rcz3FkARwMpvCLIOUS%2BYOtDOv&X-Amz-Signature=05a3894f94a12cb6e6e534ac47690bd02c15102be1f4a8e148764712f38285a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Z37M4F%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIC%2Baj7IkUIKoBx%2BfyQL6s57pNBFWgcLFk13AWCF9lks2AiEAxOXaxJij%2FDPbIw35NlyUQP2mMzKdrz8Zq4Kp2VRTiFQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDERJzaUN%2FGYgBxKBxCrcA5h1oTNXDd7eg6d8VwMd%2BCtpQkOK%2Fr0jM%2FgMpfrG5mXRw4mz2dKQwnGxjCC5PfnAEyIjekJZCSoT92hOZ92RGUf9rSG4v8pQGvA21Tb7twLF0OFxoH7HkLYfMzizWPd84fte60RbEaPS%2FVHLsRpxdcjuL67vCw%2FKz52b8BdN3pKjuj8gr%2FTGv4dw%2BQOhkRP5lpycyR%2BCLUXmbSrTAbo6nhyoBgIhyRgDBQuBDPmwmTU6WieWDCVl0LQSzRUbJSaL7Vv1O1b7ggHWKZgpb0esG78HGCP%2BtmN8ljOEd8uvzf4%2FrSFGWwUt8QFLG2%2FPaPAnFKEZPzxNG%2B3yYxJ3wgocdDyvvhcpFkpi9JMJxXv5jS%2BEUrrv%2FEuv1y7ZrQSyltq0eChpjZK9%2FJWGhl%2FG8EjW3UwzxZDRvGJZSoDk%2Fi5CYEs79WShI73pWv4Z6et1lpOslTEW%2BKMheW5T9zVDDxgnV6v7KlId63IIEQkOUvkrhhVgrurB4EvqYa27X65ELeFOonyVJNBAFKHObrPYFHD48g6Nr9VcXSBVi8h54ks0KbhBTVsUXnyO8tiVo28f%2BDdWj6SWsk9PPsmArZbABh8d%2F7q70d7TmJhAbjlSQ%2FnVXbjnMi2ab4%2FIsU7YV1S2MNK7nNIGOqUBn2CcX%2B6at4DhYseS4ZctR7YxnFrHdQWeVeD7ICcGwc2Bt%2BtB5mIFR89SqDImN1sNZiFfI7B2xr8%2FqWquPIiV5R6nQwbgYRyZRSnhC5fe7j9x7jFen5N%2BfV1i6vRSI1Q42WLhGixXhsRlshOEKUdrWkiporKVc%2F6LXpOeLle6iLR%2Fr3t4OE3AkfOO0mSxAZDBkG4rcz3FkARwMpvCLIOUS%2BYOtDOv&X-Amz-Signature=2a02ace3ee0f9ae62b0947bfb5f741a2895e16e5dbf5cece04f52841888da6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Z37M4F%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIC%2Baj7IkUIKoBx%2BfyQL6s57pNBFWgcLFk13AWCF9lks2AiEAxOXaxJij%2FDPbIw35NlyUQP2mMzKdrz8Zq4Kp2VRTiFQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDERJzaUN%2FGYgBxKBxCrcA5h1oTNXDd7eg6d8VwMd%2BCtpQkOK%2Fr0jM%2FgMpfrG5mXRw4mz2dKQwnGxjCC5PfnAEyIjekJZCSoT92hOZ92RGUf9rSG4v8pQGvA21Tb7twLF0OFxoH7HkLYfMzizWPd84fte60RbEaPS%2FVHLsRpxdcjuL67vCw%2FKz52b8BdN3pKjuj8gr%2FTGv4dw%2BQOhkRP5lpycyR%2BCLUXmbSrTAbo6nhyoBgIhyRgDBQuBDPmwmTU6WieWDCVl0LQSzRUbJSaL7Vv1O1b7ggHWKZgpb0esG78HGCP%2BtmN8ljOEd8uvzf4%2FrSFGWwUt8QFLG2%2FPaPAnFKEZPzxNG%2B3yYxJ3wgocdDyvvhcpFkpi9JMJxXv5jS%2BEUrrv%2FEuv1y7ZrQSyltq0eChpjZK9%2FJWGhl%2FG8EjW3UwzxZDRvGJZSoDk%2Fi5CYEs79WShI73pWv4Z6et1lpOslTEW%2BKMheW5T9zVDDxgnV6v7KlId63IIEQkOUvkrhhVgrurB4EvqYa27X65ELeFOonyVJNBAFKHObrPYFHD48g6Nr9VcXSBVi8h54ks0KbhBTVsUXnyO8tiVo28f%2BDdWj6SWsk9PPsmArZbABh8d%2F7q70d7TmJhAbjlSQ%2FnVXbjnMi2ab4%2FIsU7YV1S2MNK7nNIGOqUBn2CcX%2B6at4DhYseS4ZctR7YxnFrHdQWeVeD7ICcGwc2Bt%2BtB5mIFR89SqDImN1sNZiFfI7B2xr8%2FqWquPIiV5R6nQwbgYRyZRSnhC5fe7j9x7jFen5N%2BfV1i6vRSI1Q42WLhGixXhsRlshOEKUdrWkiporKVc%2F6LXpOeLle6iLR%2Fr3t4OE3AkfOO0mSxAZDBkG4rcz3FkARwMpvCLIOUS%2BYOtDOv&X-Amz-Signature=ca63d3e672f017ba1af1fe13a209c4051d7add3396ec5a5690e0fbed5d11cf53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Z37M4F%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIC%2Baj7IkUIKoBx%2BfyQL6s57pNBFWgcLFk13AWCF9lks2AiEAxOXaxJij%2FDPbIw35NlyUQP2mMzKdrz8Zq4Kp2VRTiFQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDERJzaUN%2FGYgBxKBxCrcA5h1oTNXDd7eg6d8VwMd%2BCtpQkOK%2Fr0jM%2FgMpfrG5mXRw4mz2dKQwnGxjCC5PfnAEyIjekJZCSoT92hOZ92RGUf9rSG4v8pQGvA21Tb7twLF0OFxoH7HkLYfMzizWPd84fte60RbEaPS%2FVHLsRpxdcjuL67vCw%2FKz52b8BdN3pKjuj8gr%2FTGv4dw%2BQOhkRP5lpycyR%2BCLUXmbSrTAbo6nhyoBgIhyRgDBQuBDPmwmTU6WieWDCVl0LQSzRUbJSaL7Vv1O1b7ggHWKZgpb0esG78HGCP%2BtmN8ljOEd8uvzf4%2FrSFGWwUt8QFLG2%2FPaPAnFKEZPzxNG%2B3yYxJ3wgocdDyvvhcpFkpi9JMJxXv5jS%2BEUrrv%2FEuv1y7ZrQSyltq0eChpjZK9%2FJWGhl%2FG8EjW3UwzxZDRvGJZSoDk%2Fi5CYEs79WShI73pWv4Z6et1lpOslTEW%2BKMheW5T9zVDDxgnV6v7KlId63IIEQkOUvkrhhVgrurB4EvqYa27X65ELeFOonyVJNBAFKHObrPYFHD48g6Nr9VcXSBVi8h54ks0KbhBTVsUXnyO8tiVo28f%2BDdWj6SWsk9PPsmArZbABh8d%2F7q70d7TmJhAbjlSQ%2FnVXbjnMi2ab4%2FIsU7YV1S2MNK7nNIGOqUBn2CcX%2B6at4DhYseS4ZctR7YxnFrHdQWeVeD7ICcGwc2Bt%2BtB5mIFR89SqDImN1sNZiFfI7B2xr8%2FqWquPIiV5R6nQwbgYRyZRSnhC5fe7j9x7jFen5N%2BfV1i6vRSI1Q42WLhGixXhsRlshOEKUdrWkiporKVc%2F6LXpOeLle6iLR%2Fr3t4OE3AkfOO0mSxAZDBkG4rcz3FkARwMpvCLIOUS%2BYOtDOv&X-Amz-Signature=f8414115317a93ecae19a932790d80242df78f576ecdb1854ae21c5c404ab83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Z37M4F%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIC%2Baj7IkUIKoBx%2BfyQL6s57pNBFWgcLFk13AWCF9lks2AiEAxOXaxJij%2FDPbIw35NlyUQP2mMzKdrz8Zq4Kp2VRTiFQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDERJzaUN%2FGYgBxKBxCrcA5h1oTNXDd7eg6d8VwMd%2BCtpQkOK%2Fr0jM%2FgMpfrG5mXRw4mz2dKQwnGxjCC5PfnAEyIjekJZCSoT92hOZ92RGUf9rSG4v8pQGvA21Tb7twLF0OFxoH7HkLYfMzizWPd84fte60RbEaPS%2FVHLsRpxdcjuL67vCw%2FKz52b8BdN3pKjuj8gr%2FTGv4dw%2BQOhkRP5lpycyR%2BCLUXmbSrTAbo6nhyoBgIhyRgDBQuBDPmwmTU6WieWDCVl0LQSzRUbJSaL7Vv1O1b7ggHWKZgpb0esG78HGCP%2BtmN8ljOEd8uvzf4%2FrSFGWwUt8QFLG2%2FPaPAnFKEZPzxNG%2B3yYxJ3wgocdDyvvhcpFkpi9JMJxXv5jS%2BEUrrv%2FEuv1y7ZrQSyltq0eChpjZK9%2FJWGhl%2FG8EjW3UwzxZDRvGJZSoDk%2Fi5CYEs79WShI73pWv4Z6et1lpOslTEW%2BKMheW5T9zVDDxgnV6v7KlId63IIEQkOUvkrhhVgrurB4EvqYa27X65ELeFOonyVJNBAFKHObrPYFHD48g6Nr9VcXSBVi8h54ks0KbhBTVsUXnyO8tiVo28f%2BDdWj6SWsk9PPsmArZbABh8d%2F7q70d7TmJhAbjlSQ%2FnVXbjnMi2ab4%2FIsU7YV1S2MNK7nNIGOqUBn2CcX%2B6at4DhYseS4ZctR7YxnFrHdQWeVeD7ICcGwc2Bt%2BtB5mIFR89SqDImN1sNZiFfI7B2xr8%2FqWquPIiV5R6nQwbgYRyZRSnhC5fe7j9x7jFen5N%2BfV1i6vRSI1Q42WLhGixXhsRlshOEKUdrWkiporKVc%2F6LXpOeLle6iLR%2Fr3t4OE3AkfOO0mSxAZDBkG4rcz3FkARwMpvCLIOUS%2BYOtDOv&X-Amz-Signature=099e262f4a2da257b373b9c39d5ee651b780ae2fa6ec1f1178d44de819702e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Z37M4F%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIC%2Baj7IkUIKoBx%2BfyQL6s57pNBFWgcLFk13AWCF9lks2AiEAxOXaxJij%2FDPbIw35NlyUQP2mMzKdrz8Zq4Kp2VRTiFQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDERJzaUN%2FGYgBxKBxCrcA5h1oTNXDd7eg6d8VwMd%2BCtpQkOK%2Fr0jM%2FgMpfrG5mXRw4mz2dKQwnGxjCC5PfnAEyIjekJZCSoT92hOZ92RGUf9rSG4v8pQGvA21Tb7twLF0OFxoH7HkLYfMzizWPd84fte60RbEaPS%2FVHLsRpxdcjuL67vCw%2FKz52b8BdN3pKjuj8gr%2FTGv4dw%2BQOhkRP5lpycyR%2BCLUXmbSrTAbo6nhyoBgIhyRgDBQuBDPmwmTU6WieWDCVl0LQSzRUbJSaL7Vv1O1b7ggHWKZgpb0esG78HGCP%2BtmN8ljOEd8uvzf4%2FrSFGWwUt8QFLG2%2FPaPAnFKEZPzxNG%2B3yYxJ3wgocdDyvvhcpFkpi9JMJxXv5jS%2BEUrrv%2FEuv1y7ZrQSyltq0eChpjZK9%2FJWGhl%2FG8EjW3UwzxZDRvGJZSoDk%2Fi5CYEs79WShI73pWv4Z6et1lpOslTEW%2BKMheW5T9zVDDxgnV6v7KlId63IIEQkOUvkrhhVgrurB4EvqYa27X65ELeFOonyVJNBAFKHObrPYFHD48g6Nr9VcXSBVi8h54ks0KbhBTVsUXnyO8tiVo28f%2BDdWj6SWsk9PPsmArZbABh8d%2F7q70d7TmJhAbjlSQ%2FnVXbjnMi2ab4%2FIsU7YV1S2MNK7nNIGOqUBn2CcX%2B6at4DhYseS4ZctR7YxnFrHdQWeVeD7ICcGwc2Bt%2BtB5mIFR89SqDImN1sNZiFfI7B2xr8%2FqWquPIiV5R6nQwbgYRyZRSnhC5fe7j9x7jFen5N%2BfV1i6vRSI1Q42WLhGixXhsRlshOEKUdrWkiporKVc%2F6LXpOeLle6iLR%2Fr3t4OE3AkfOO0mSxAZDBkG4rcz3FkARwMpvCLIOUS%2BYOtDOv&X-Amz-Signature=e336723aa5c8deaae77d134240c251c77e8abd863cd2910af825d36820c59034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Z37M4F%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIC%2Baj7IkUIKoBx%2BfyQL6s57pNBFWgcLFk13AWCF9lks2AiEAxOXaxJij%2FDPbIw35NlyUQP2mMzKdrz8Zq4Kp2VRTiFQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDERJzaUN%2FGYgBxKBxCrcA5h1oTNXDd7eg6d8VwMd%2BCtpQkOK%2Fr0jM%2FgMpfrG5mXRw4mz2dKQwnGxjCC5PfnAEyIjekJZCSoT92hOZ92RGUf9rSG4v8pQGvA21Tb7twLF0OFxoH7HkLYfMzizWPd84fte60RbEaPS%2FVHLsRpxdcjuL67vCw%2FKz52b8BdN3pKjuj8gr%2FTGv4dw%2BQOhkRP5lpycyR%2BCLUXmbSrTAbo6nhyoBgIhyRgDBQuBDPmwmTU6WieWDCVl0LQSzRUbJSaL7Vv1O1b7ggHWKZgpb0esG78HGCP%2BtmN8ljOEd8uvzf4%2FrSFGWwUt8QFLG2%2FPaPAnFKEZPzxNG%2B3yYxJ3wgocdDyvvhcpFkpi9JMJxXv5jS%2BEUrrv%2FEuv1y7ZrQSyltq0eChpjZK9%2FJWGhl%2FG8EjW3UwzxZDRvGJZSoDk%2Fi5CYEs79WShI73pWv4Z6et1lpOslTEW%2BKMheW5T9zVDDxgnV6v7KlId63IIEQkOUvkrhhVgrurB4EvqYa27X65ELeFOonyVJNBAFKHObrPYFHD48g6Nr9VcXSBVi8h54ks0KbhBTVsUXnyO8tiVo28f%2BDdWj6SWsk9PPsmArZbABh8d%2F7q70d7TmJhAbjlSQ%2FnVXbjnMi2ab4%2FIsU7YV1S2MNK7nNIGOqUBn2CcX%2B6at4DhYseS4ZctR7YxnFrHdQWeVeD7ICcGwc2Bt%2BtB5mIFR89SqDImN1sNZiFfI7B2xr8%2FqWquPIiV5R6nQwbgYRyZRSnhC5fe7j9x7jFen5N%2BfV1i6vRSI1Q42WLhGixXhsRlshOEKUdrWkiporKVc%2F6LXpOeLle6iLR%2Fr3t4OE3AkfOO0mSxAZDBkG4rcz3FkARwMpvCLIOUS%2BYOtDOv&X-Amz-Signature=b406085847d56e7c9d12cf54f516068ccdb971b440f4bb34e2bedb9c2f716b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

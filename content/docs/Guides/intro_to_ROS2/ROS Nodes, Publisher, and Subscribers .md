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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU6GTPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHRDw3do3z1sOPCm8CVmwBhcNR%2BosMIts7dvwzXXhG%2FAiEAqtXZ6HSYlcrgJCLlTi0zqSrarDv%2B6NG2iQrmFV3F9MAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEd7ZJbeSznZO5GeECrcA2CttvGXTqmOH3wxHCNGb26I8qxq6Zcc8HGTw6%2FYOQJ3SxuPE8kWHpq31UsncYFEQxsu2nn9CEsKvznAxb2bl8XAy7T4ebqMlHCUhIHm3gUn14kq46%2FJuRJWZlANybFTvfVjWAcU8WqxFGvQ1pt3d7Jnf%2Bf%2F8XHGJTKUVex%2Ff0IVDhoE%2FwnDQJA8ctCFPvyr5stso8AkZtR18PtwMmrOtmXPjTmLnWUe7bxfPYQkFJuFY49My17zTSGuehpmcxCQlw3qmfzBUQEcQAvV7hBO6NH61tcTN4B%2FEiTBBtPcTw97VISz3YQLuDrYNVk2TaAe8QG9kstezEwRJN202XohC%2FhMdrFbDckmfGpjsMRrMq6hMgMnk7vmDPjEKB4pK997YEzmxLHGDbMHIWnDagQ1NyEsRwKfysyHRBym%2Be4oU03qRIXgHSRn0ByrnOnOYGA2qZQpyWNYmISLfbdzRQn9Umc%2FDugGikNivnyU7b%2FPNZv8HJM0zd2%2Fw4EKOBw2yA39u2Bg5iduE56ias4%2BULyAlFAfLnocHx1l1tPQd1m5yWBNRdPS%2FkDx2Ji1c8ApebFo0ItguKNHfc%2F2v95NOm5Yv%2Bu8usj%2F%2Bd4010Rpj4fII%2BUNe%2FJuKI52udXaG5TEMJfX8b0GOqUBW3pv5Oe6wOcK%2BtgmbhSzTlHeKA7z5%2Fs0i68J%2FlA274t1iQCfN5pA4j4ZYzzkKHtBgTcEDD2Dbpivt%2BLU8nhnimOwMHgtr6a5%2F3fYDR%2BXw8NGE04vv%2BHwFb4b5hGl8WPuRoMfAb0CnrpfeLaQP2lS7NkvtvDP55YdujgLWjUXUnbaH%2FkPGBOQIEsjCf4fRnJ1869q8sfGfpYY8JjJdKuxHh0%2FEB9L&X-Amz-Signature=8a72934f7e29eab9f2578f45d2e539a9fc63e3864e21a061a33c3b1dfa2c7ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU6GTPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHRDw3do3z1sOPCm8CVmwBhcNR%2BosMIts7dvwzXXhG%2FAiEAqtXZ6HSYlcrgJCLlTi0zqSrarDv%2B6NG2iQrmFV3F9MAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEd7ZJbeSznZO5GeECrcA2CttvGXTqmOH3wxHCNGb26I8qxq6Zcc8HGTw6%2FYOQJ3SxuPE8kWHpq31UsncYFEQxsu2nn9CEsKvznAxb2bl8XAy7T4ebqMlHCUhIHm3gUn14kq46%2FJuRJWZlANybFTvfVjWAcU8WqxFGvQ1pt3d7Jnf%2Bf%2F8XHGJTKUVex%2Ff0IVDhoE%2FwnDQJA8ctCFPvyr5stso8AkZtR18PtwMmrOtmXPjTmLnWUe7bxfPYQkFJuFY49My17zTSGuehpmcxCQlw3qmfzBUQEcQAvV7hBO6NH61tcTN4B%2FEiTBBtPcTw97VISz3YQLuDrYNVk2TaAe8QG9kstezEwRJN202XohC%2FhMdrFbDckmfGpjsMRrMq6hMgMnk7vmDPjEKB4pK997YEzmxLHGDbMHIWnDagQ1NyEsRwKfysyHRBym%2Be4oU03qRIXgHSRn0ByrnOnOYGA2qZQpyWNYmISLfbdzRQn9Umc%2FDugGikNivnyU7b%2FPNZv8HJM0zd2%2Fw4EKOBw2yA39u2Bg5iduE56ias4%2BULyAlFAfLnocHx1l1tPQd1m5yWBNRdPS%2FkDx2Ji1c8ApebFo0ItguKNHfc%2F2v95NOm5Yv%2Bu8usj%2F%2Bd4010Rpj4fII%2BUNe%2FJuKI52udXaG5TEMJfX8b0GOqUBW3pv5Oe6wOcK%2BtgmbhSzTlHeKA7z5%2Fs0i68J%2FlA274t1iQCfN5pA4j4ZYzzkKHtBgTcEDD2Dbpivt%2BLU8nhnimOwMHgtr6a5%2F3fYDR%2BXw8NGE04vv%2BHwFb4b5hGl8WPuRoMfAb0CnrpfeLaQP2lS7NkvtvDP55YdujgLWjUXUnbaH%2FkPGBOQIEsjCf4fRnJ1869q8sfGfpYY8JjJdKuxHh0%2FEB9L&X-Amz-Signature=57f9360674efed75a9c23ec375a6150135520305e59b5f223ce1199251e977c8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU6GTPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHRDw3do3z1sOPCm8CVmwBhcNR%2BosMIts7dvwzXXhG%2FAiEAqtXZ6HSYlcrgJCLlTi0zqSrarDv%2B6NG2iQrmFV3F9MAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEd7ZJbeSznZO5GeECrcA2CttvGXTqmOH3wxHCNGb26I8qxq6Zcc8HGTw6%2FYOQJ3SxuPE8kWHpq31UsncYFEQxsu2nn9CEsKvznAxb2bl8XAy7T4ebqMlHCUhIHm3gUn14kq46%2FJuRJWZlANybFTvfVjWAcU8WqxFGvQ1pt3d7Jnf%2Bf%2F8XHGJTKUVex%2Ff0IVDhoE%2FwnDQJA8ctCFPvyr5stso8AkZtR18PtwMmrOtmXPjTmLnWUe7bxfPYQkFJuFY49My17zTSGuehpmcxCQlw3qmfzBUQEcQAvV7hBO6NH61tcTN4B%2FEiTBBtPcTw97VISz3YQLuDrYNVk2TaAe8QG9kstezEwRJN202XohC%2FhMdrFbDckmfGpjsMRrMq6hMgMnk7vmDPjEKB4pK997YEzmxLHGDbMHIWnDagQ1NyEsRwKfysyHRBym%2Be4oU03qRIXgHSRn0ByrnOnOYGA2qZQpyWNYmISLfbdzRQn9Umc%2FDugGikNivnyU7b%2FPNZv8HJM0zd2%2Fw4EKOBw2yA39u2Bg5iduE56ias4%2BULyAlFAfLnocHx1l1tPQd1m5yWBNRdPS%2FkDx2Ji1c8ApebFo0ItguKNHfc%2F2v95NOm5Yv%2Bu8usj%2F%2Bd4010Rpj4fII%2BUNe%2FJuKI52udXaG5TEMJfX8b0GOqUBW3pv5Oe6wOcK%2BtgmbhSzTlHeKA7z5%2Fs0i68J%2FlA274t1iQCfN5pA4j4ZYzzkKHtBgTcEDD2Dbpivt%2BLU8nhnimOwMHgtr6a5%2F3fYDR%2BXw8NGE04vv%2BHwFb4b5hGl8WPuRoMfAb0CnrpfeLaQP2lS7NkvtvDP55YdujgLWjUXUnbaH%2FkPGBOQIEsjCf4fRnJ1869q8sfGfpYY8JjJdKuxHh0%2FEB9L&X-Amz-Signature=2e9b05aa1d2323c76aff09853aa86b88d0a06a5ae1b819f8d2564bab999be86a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU6GTPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHRDw3do3z1sOPCm8CVmwBhcNR%2BosMIts7dvwzXXhG%2FAiEAqtXZ6HSYlcrgJCLlTi0zqSrarDv%2B6NG2iQrmFV3F9MAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEd7ZJbeSznZO5GeECrcA2CttvGXTqmOH3wxHCNGb26I8qxq6Zcc8HGTw6%2FYOQJ3SxuPE8kWHpq31UsncYFEQxsu2nn9CEsKvznAxb2bl8XAy7T4ebqMlHCUhIHm3gUn14kq46%2FJuRJWZlANybFTvfVjWAcU8WqxFGvQ1pt3d7Jnf%2Bf%2F8XHGJTKUVex%2Ff0IVDhoE%2FwnDQJA8ctCFPvyr5stso8AkZtR18PtwMmrOtmXPjTmLnWUe7bxfPYQkFJuFY49My17zTSGuehpmcxCQlw3qmfzBUQEcQAvV7hBO6NH61tcTN4B%2FEiTBBtPcTw97VISz3YQLuDrYNVk2TaAe8QG9kstezEwRJN202XohC%2FhMdrFbDckmfGpjsMRrMq6hMgMnk7vmDPjEKB4pK997YEzmxLHGDbMHIWnDagQ1NyEsRwKfysyHRBym%2Be4oU03qRIXgHSRn0ByrnOnOYGA2qZQpyWNYmISLfbdzRQn9Umc%2FDugGikNivnyU7b%2FPNZv8HJM0zd2%2Fw4EKOBw2yA39u2Bg5iduE56ias4%2BULyAlFAfLnocHx1l1tPQd1m5yWBNRdPS%2FkDx2Ji1c8ApebFo0ItguKNHfc%2F2v95NOm5Yv%2Bu8usj%2F%2Bd4010Rpj4fII%2BUNe%2FJuKI52udXaG5TEMJfX8b0GOqUBW3pv5Oe6wOcK%2BtgmbhSzTlHeKA7z5%2Fs0i68J%2FlA274t1iQCfN5pA4j4ZYzzkKHtBgTcEDD2Dbpivt%2BLU8nhnimOwMHgtr6a5%2F3fYDR%2BXw8NGE04vv%2BHwFb4b5hGl8WPuRoMfAb0CnrpfeLaQP2lS7NkvtvDP55YdujgLWjUXUnbaH%2FkPGBOQIEsjCf4fRnJ1869q8sfGfpYY8JjJdKuxHh0%2FEB9L&X-Amz-Signature=db786b28cefef123843bb22bfdd85b114007ff02f637374110cc385e3420f305&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU6GTPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHRDw3do3z1sOPCm8CVmwBhcNR%2BosMIts7dvwzXXhG%2FAiEAqtXZ6HSYlcrgJCLlTi0zqSrarDv%2B6NG2iQrmFV3F9MAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEd7ZJbeSznZO5GeECrcA2CttvGXTqmOH3wxHCNGb26I8qxq6Zcc8HGTw6%2FYOQJ3SxuPE8kWHpq31UsncYFEQxsu2nn9CEsKvznAxb2bl8XAy7T4ebqMlHCUhIHm3gUn14kq46%2FJuRJWZlANybFTvfVjWAcU8WqxFGvQ1pt3d7Jnf%2Bf%2F8XHGJTKUVex%2Ff0IVDhoE%2FwnDQJA8ctCFPvyr5stso8AkZtR18PtwMmrOtmXPjTmLnWUe7bxfPYQkFJuFY49My17zTSGuehpmcxCQlw3qmfzBUQEcQAvV7hBO6NH61tcTN4B%2FEiTBBtPcTw97VISz3YQLuDrYNVk2TaAe8QG9kstezEwRJN202XohC%2FhMdrFbDckmfGpjsMRrMq6hMgMnk7vmDPjEKB4pK997YEzmxLHGDbMHIWnDagQ1NyEsRwKfysyHRBym%2Be4oU03qRIXgHSRn0ByrnOnOYGA2qZQpyWNYmISLfbdzRQn9Umc%2FDugGikNivnyU7b%2FPNZv8HJM0zd2%2Fw4EKOBw2yA39u2Bg5iduE56ias4%2BULyAlFAfLnocHx1l1tPQd1m5yWBNRdPS%2FkDx2Ji1c8ApebFo0ItguKNHfc%2F2v95NOm5Yv%2Bu8usj%2F%2Bd4010Rpj4fII%2BUNe%2FJuKI52udXaG5TEMJfX8b0GOqUBW3pv5Oe6wOcK%2BtgmbhSzTlHeKA7z5%2Fs0i68J%2FlA274t1iQCfN5pA4j4ZYzzkKHtBgTcEDD2Dbpivt%2BLU8nhnimOwMHgtr6a5%2F3fYDR%2BXw8NGE04vv%2BHwFb4b5hGl8WPuRoMfAb0CnrpfeLaQP2lS7NkvtvDP55YdujgLWjUXUnbaH%2FkPGBOQIEsjCf4fRnJ1869q8sfGfpYY8JjJdKuxHh0%2FEB9L&X-Amz-Signature=83836e26265071f31ce177136a4ddf4154cd0f91a65900b7eb5846270cb1e6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU6GTPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHRDw3do3z1sOPCm8CVmwBhcNR%2BosMIts7dvwzXXhG%2FAiEAqtXZ6HSYlcrgJCLlTi0zqSrarDv%2B6NG2iQrmFV3F9MAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEd7ZJbeSznZO5GeECrcA2CttvGXTqmOH3wxHCNGb26I8qxq6Zcc8HGTw6%2FYOQJ3SxuPE8kWHpq31UsncYFEQxsu2nn9CEsKvznAxb2bl8XAy7T4ebqMlHCUhIHm3gUn14kq46%2FJuRJWZlANybFTvfVjWAcU8WqxFGvQ1pt3d7Jnf%2Bf%2F8XHGJTKUVex%2Ff0IVDhoE%2FwnDQJA8ctCFPvyr5stso8AkZtR18PtwMmrOtmXPjTmLnWUe7bxfPYQkFJuFY49My17zTSGuehpmcxCQlw3qmfzBUQEcQAvV7hBO6NH61tcTN4B%2FEiTBBtPcTw97VISz3YQLuDrYNVk2TaAe8QG9kstezEwRJN202XohC%2FhMdrFbDckmfGpjsMRrMq6hMgMnk7vmDPjEKB4pK997YEzmxLHGDbMHIWnDagQ1NyEsRwKfysyHRBym%2Be4oU03qRIXgHSRn0ByrnOnOYGA2qZQpyWNYmISLfbdzRQn9Umc%2FDugGikNivnyU7b%2FPNZv8HJM0zd2%2Fw4EKOBw2yA39u2Bg5iduE56ias4%2BULyAlFAfLnocHx1l1tPQd1m5yWBNRdPS%2FkDx2Ji1c8ApebFo0ItguKNHfc%2F2v95NOm5Yv%2Bu8usj%2F%2Bd4010Rpj4fII%2BUNe%2FJuKI52udXaG5TEMJfX8b0GOqUBW3pv5Oe6wOcK%2BtgmbhSzTlHeKA7z5%2Fs0i68J%2FlA274t1iQCfN5pA4j4ZYzzkKHtBgTcEDD2Dbpivt%2BLU8nhnimOwMHgtr6a5%2F3fYDR%2BXw8NGE04vv%2BHwFb4b5hGl8WPuRoMfAb0CnrpfeLaQP2lS7NkvtvDP55YdujgLWjUXUnbaH%2FkPGBOQIEsjCf4fRnJ1869q8sfGfpYY8JjJdKuxHh0%2FEB9L&X-Amz-Signature=814cd8ee96ff83746ca8e0de8c34aa114974d9e1567c1654455e1474ce24c500&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU6GTPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHRDw3do3z1sOPCm8CVmwBhcNR%2BosMIts7dvwzXXhG%2FAiEAqtXZ6HSYlcrgJCLlTi0zqSrarDv%2B6NG2iQrmFV3F9MAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEd7ZJbeSznZO5GeECrcA2CttvGXTqmOH3wxHCNGb26I8qxq6Zcc8HGTw6%2FYOQJ3SxuPE8kWHpq31UsncYFEQxsu2nn9CEsKvznAxb2bl8XAy7T4ebqMlHCUhIHm3gUn14kq46%2FJuRJWZlANybFTvfVjWAcU8WqxFGvQ1pt3d7Jnf%2Bf%2F8XHGJTKUVex%2Ff0IVDhoE%2FwnDQJA8ctCFPvyr5stso8AkZtR18PtwMmrOtmXPjTmLnWUe7bxfPYQkFJuFY49My17zTSGuehpmcxCQlw3qmfzBUQEcQAvV7hBO6NH61tcTN4B%2FEiTBBtPcTw97VISz3YQLuDrYNVk2TaAe8QG9kstezEwRJN202XohC%2FhMdrFbDckmfGpjsMRrMq6hMgMnk7vmDPjEKB4pK997YEzmxLHGDbMHIWnDagQ1NyEsRwKfysyHRBym%2Be4oU03qRIXgHSRn0ByrnOnOYGA2qZQpyWNYmISLfbdzRQn9Umc%2FDugGikNivnyU7b%2FPNZv8HJM0zd2%2Fw4EKOBw2yA39u2Bg5iduE56ias4%2BULyAlFAfLnocHx1l1tPQd1m5yWBNRdPS%2FkDx2Ji1c8ApebFo0ItguKNHfc%2F2v95NOm5Yv%2Bu8usj%2F%2Bd4010Rpj4fII%2BUNe%2FJuKI52udXaG5TEMJfX8b0GOqUBW3pv5Oe6wOcK%2BtgmbhSzTlHeKA7z5%2Fs0i68J%2FlA274t1iQCfN5pA4j4ZYzzkKHtBgTcEDD2Dbpivt%2BLU8nhnimOwMHgtr6a5%2F3fYDR%2BXw8NGE04vv%2BHwFb4b5hGl8WPuRoMfAb0CnrpfeLaQP2lS7NkvtvDP55YdujgLWjUXUnbaH%2FkPGBOQIEsjCf4fRnJ1869q8sfGfpYY8JjJdKuxHh0%2FEB9L&X-Amz-Signature=204c1c30747719df522b54d6aeb8924014271f0b5852037ca35af03efd6a192e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOU6GTPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHRDw3do3z1sOPCm8CVmwBhcNR%2BosMIts7dvwzXXhG%2FAiEAqtXZ6HSYlcrgJCLlTi0zqSrarDv%2B6NG2iQrmFV3F9MAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEd7ZJbeSznZO5GeECrcA2CttvGXTqmOH3wxHCNGb26I8qxq6Zcc8HGTw6%2FYOQJ3SxuPE8kWHpq31UsncYFEQxsu2nn9CEsKvznAxb2bl8XAy7T4ebqMlHCUhIHm3gUn14kq46%2FJuRJWZlANybFTvfVjWAcU8WqxFGvQ1pt3d7Jnf%2Bf%2F8XHGJTKUVex%2Ff0IVDhoE%2FwnDQJA8ctCFPvyr5stso8AkZtR18PtwMmrOtmXPjTmLnWUe7bxfPYQkFJuFY49My17zTSGuehpmcxCQlw3qmfzBUQEcQAvV7hBO6NH61tcTN4B%2FEiTBBtPcTw97VISz3YQLuDrYNVk2TaAe8QG9kstezEwRJN202XohC%2FhMdrFbDckmfGpjsMRrMq6hMgMnk7vmDPjEKB4pK997YEzmxLHGDbMHIWnDagQ1NyEsRwKfysyHRBym%2Be4oU03qRIXgHSRn0ByrnOnOYGA2qZQpyWNYmISLfbdzRQn9Umc%2FDugGikNivnyU7b%2FPNZv8HJM0zd2%2Fw4EKOBw2yA39u2Bg5iduE56ias4%2BULyAlFAfLnocHx1l1tPQd1m5yWBNRdPS%2FkDx2Ji1c8ApebFo0ItguKNHfc%2F2v95NOm5Yv%2Bu8usj%2F%2Bd4010Rpj4fII%2BUNe%2FJuKI52udXaG5TEMJfX8b0GOqUBW3pv5Oe6wOcK%2BtgmbhSzTlHeKA7z5%2Fs0i68J%2FlA274t1iQCfN5pA4j4ZYzzkKHtBgTcEDD2Dbpivt%2BLU8nhnimOwMHgtr6a5%2F3fYDR%2BXw8NGE04vv%2BHwFb4b5hGl8WPuRoMfAb0CnrpfeLaQP2lS7NkvtvDP55YdujgLWjUXUnbaH%2FkPGBOQIEsjCf4fRnJ1869q8sfGfpYY8JjJdKuxHh0%2FEB9L&X-Amz-Signature=48f986b45ff252b36d1168efecbb72998468042586cd8e4819ea6e9b47852fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RW4UX3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID%2FRxyvU6VW9nPA4TIkvdxE3BzkRGRNEXSWp5X6AcBGCAiEAkumsXb%2FH0452ZN95Z6yTuJ8N%2FO0uulBeKHsdrTcyhoUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOft%2FLREMzgb7RVbuircA5vliNAB8v1HpTDGMwDxP%2FlgFA0nNboiNjU4%2B7TDfe3NK3HvT6xiirt5A0bGwHq8JD5F3Hq%2FFubmErAN4vAl68rKcQoAil82oMz2Pdjh4Vz38rCLRDGBR6oxhomvhvBfMjhn4T3TteEqFaVJ%2BLkRnS47hGEckIBVEsNlcSJSvtNecF0liQ%2BVLdBtf9AWoIspOTf5NWlaHhonlTu%2BNHHVI%2ByWN2FGftyn3phvnPb6LaFr3UVmW18xdTLcP%2FqADbg0rBL77KuOwuY9CF%2Br%2Fed8Ip9jL5aWG6EGa9YwFtSiCqFs9QblkWztomKKTFDFD5sOlOXWj2jam%2BM0hfaDJEeFa1ZITQRSCw0iGXcpnUz8dGjesGpHGhGkkxf%2FqlXR%2F3t12aqGKFZaVlBFK7w5S9B0Bv1cgQN4LUYwsiM%2B2vUKl6%2FUw6XnsgafhsXyEdNqnkrgyAvotwWkzhtzIMoNjISeDVcJkZL7dzRN3FrB3dFDg%2F%2FrVjZIVer6hpvIdnlDzvKJ7WhkDbenyo03klrRAVvblXKLThkorIH75imO4NYUtcZbVx1u3uxsAE%2Fo%2Bwleau6u%2FrYKWGpnup0d9W7XMzU0%2FE1IgO%2BVr7MhGj2dxdmP4r7UiCMlL7MIx1oA3XOJMJzptb8GOqUBr0xO38DvQeK4JcuTOwmANzE%2FTpMBbyYY6ei9Fol%2F0sd14gINUxAagHtXU0D08P7PO%2FmPIa53n5Fgf83ofjOS2x%2FabgcrlIQi0KWL7R%2FtaJYwtG3fbpAEW6NT9ylFbRv7%2FfOGbDIXCG4ElTydnBizuNBV3r3BG%2BjlcsYb2tDLSh3RK3ie2KOkI5LRUACLFTMKfYd26ezjMEP%2BtUieyXR3zJf%2Bn22v&X-Amz-Signature=06ed5efd035ccbe9e675c6108148031eb03cdcddcca4573190f3da0fa8f95fd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RW4UX3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID%2FRxyvU6VW9nPA4TIkvdxE3BzkRGRNEXSWp5X6AcBGCAiEAkumsXb%2FH0452ZN95Z6yTuJ8N%2FO0uulBeKHsdrTcyhoUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOft%2FLREMzgb7RVbuircA5vliNAB8v1HpTDGMwDxP%2FlgFA0nNboiNjU4%2B7TDfe3NK3HvT6xiirt5A0bGwHq8JD5F3Hq%2FFubmErAN4vAl68rKcQoAil82oMz2Pdjh4Vz38rCLRDGBR6oxhomvhvBfMjhn4T3TteEqFaVJ%2BLkRnS47hGEckIBVEsNlcSJSvtNecF0liQ%2BVLdBtf9AWoIspOTf5NWlaHhonlTu%2BNHHVI%2ByWN2FGftyn3phvnPb6LaFr3UVmW18xdTLcP%2FqADbg0rBL77KuOwuY9CF%2Br%2Fed8Ip9jL5aWG6EGa9YwFtSiCqFs9QblkWztomKKTFDFD5sOlOXWj2jam%2BM0hfaDJEeFa1ZITQRSCw0iGXcpnUz8dGjesGpHGhGkkxf%2FqlXR%2F3t12aqGKFZaVlBFK7w5S9B0Bv1cgQN4LUYwsiM%2B2vUKl6%2FUw6XnsgafhsXyEdNqnkrgyAvotwWkzhtzIMoNjISeDVcJkZL7dzRN3FrB3dFDg%2F%2FrVjZIVer6hpvIdnlDzvKJ7WhkDbenyo03klrRAVvblXKLThkorIH75imO4NYUtcZbVx1u3uxsAE%2Fo%2Bwleau6u%2FrYKWGpnup0d9W7XMzU0%2FE1IgO%2BVr7MhGj2dxdmP4r7UiCMlL7MIx1oA3XOJMJzptb8GOqUBr0xO38DvQeK4JcuTOwmANzE%2FTpMBbyYY6ei9Fol%2F0sd14gINUxAagHtXU0D08P7PO%2FmPIa53n5Fgf83ofjOS2x%2FabgcrlIQi0KWL7R%2FtaJYwtG3fbpAEW6NT9ylFbRv7%2FfOGbDIXCG4ElTydnBizuNBV3r3BG%2BjlcsYb2tDLSh3RK3ie2KOkI5LRUACLFTMKfYd26ezjMEP%2BtUieyXR3zJf%2Bn22v&X-Amz-Signature=f6a10f2cf910a5b42b531d066e4cbfb78100f54c2ce63cd55aa44dba06110afd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RW4UX3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID%2FRxyvU6VW9nPA4TIkvdxE3BzkRGRNEXSWp5X6AcBGCAiEAkumsXb%2FH0452ZN95Z6yTuJ8N%2FO0uulBeKHsdrTcyhoUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOft%2FLREMzgb7RVbuircA5vliNAB8v1HpTDGMwDxP%2FlgFA0nNboiNjU4%2B7TDfe3NK3HvT6xiirt5A0bGwHq8JD5F3Hq%2FFubmErAN4vAl68rKcQoAil82oMz2Pdjh4Vz38rCLRDGBR6oxhomvhvBfMjhn4T3TteEqFaVJ%2BLkRnS47hGEckIBVEsNlcSJSvtNecF0liQ%2BVLdBtf9AWoIspOTf5NWlaHhonlTu%2BNHHVI%2ByWN2FGftyn3phvnPb6LaFr3UVmW18xdTLcP%2FqADbg0rBL77KuOwuY9CF%2Br%2Fed8Ip9jL5aWG6EGa9YwFtSiCqFs9QblkWztomKKTFDFD5sOlOXWj2jam%2BM0hfaDJEeFa1ZITQRSCw0iGXcpnUz8dGjesGpHGhGkkxf%2FqlXR%2F3t12aqGKFZaVlBFK7w5S9B0Bv1cgQN4LUYwsiM%2B2vUKl6%2FUw6XnsgafhsXyEdNqnkrgyAvotwWkzhtzIMoNjISeDVcJkZL7dzRN3FrB3dFDg%2F%2FrVjZIVer6hpvIdnlDzvKJ7WhkDbenyo03klrRAVvblXKLThkorIH75imO4NYUtcZbVx1u3uxsAE%2Fo%2Bwleau6u%2FrYKWGpnup0d9W7XMzU0%2FE1IgO%2BVr7MhGj2dxdmP4r7UiCMlL7MIx1oA3XOJMJzptb8GOqUBr0xO38DvQeK4JcuTOwmANzE%2FTpMBbyYY6ei9Fol%2F0sd14gINUxAagHtXU0D08P7PO%2FmPIa53n5Fgf83ofjOS2x%2FabgcrlIQi0KWL7R%2FtaJYwtG3fbpAEW6NT9ylFbRv7%2FfOGbDIXCG4ElTydnBizuNBV3r3BG%2BjlcsYb2tDLSh3RK3ie2KOkI5LRUACLFTMKfYd26ezjMEP%2BtUieyXR3zJf%2Bn22v&X-Amz-Signature=c160249e7c4b158072ccc3f34267f3250edcd53ed64c1458fa8edfb6b17aba84&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RW4UX3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID%2FRxyvU6VW9nPA4TIkvdxE3BzkRGRNEXSWp5X6AcBGCAiEAkumsXb%2FH0452ZN95Z6yTuJ8N%2FO0uulBeKHsdrTcyhoUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOft%2FLREMzgb7RVbuircA5vliNAB8v1HpTDGMwDxP%2FlgFA0nNboiNjU4%2B7TDfe3NK3HvT6xiirt5A0bGwHq8JD5F3Hq%2FFubmErAN4vAl68rKcQoAil82oMz2Pdjh4Vz38rCLRDGBR6oxhomvhvBfMjhn4T3TteEqFaVJ%2BLkRnS47hGEckIBVEsNlcSJSvtNecF0liQ%2BVLdBtf9AWoIspOTf5NWlaHhonlTu%2BNHHVI%2ByWN2FGftyn3phvnPb6LaFr3UVmW18xdTLcP%2FqADbg0rBL77KuOwuY9CF%2Br%2Fed8Ip9jL5aWG6EGa9YwFtSiCqFs9QblkWztomKKTFDFD5sOlOXWj2jam%2BM0hfaDJEeFa1ZITQRSCw0iGXcpnUz8dGjesGpHGhGkkxf%2FqlXR%2F3t12aqGKFZaVlBFK7w5S9B0Bv1cgQN4LUYwsiM%2B2vUKl6%2FUw6XnsgafhsXyEdNqnkrgyAvotwWkzhtzIMoNjISeDVcJkZL7dzRN3FrB3dFDg%2F%2FrVjZIVer6hpvIdnlDzvKJ7WhkDbenyo03klrRAVvblXKLThkorIH75imO4NYUtcZbVx1u3uxsAE%2Fo%2Bwleau6u%2FrYKWGpnup0d9W7XMzU0%2FE1IgO%2BVr7MhGj2dxdmP4r7UiCMlL7MIx1oA3XOJMJzptb8GOqUBr0xO38DvQeK4JcuTOwmANzE%2FTpMBbyYY6ei9Fol%2F0sd14gINUxAagHtXU0D08P7PO%2FmPIa53n5Fgf83ofjOS2x%2FabgcrlIQi0KWL7R%2FtaJYwtG3fbpAEW6NT9ylFbRv7%2FfOGbDIXCG4ElTydnBizuNBV3r3BG%2BjlcsYb2tDLSh3RK3ie2KOkI5LRUACLFTMKfYd26ezjMEP%2BtUieyXR3zJf%2Bn22v&X-Amz-Signature=6633e3bd5fc8970646f000f1623ea8c9e97aaea0268fa32bae18979fbb6ef0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RW4UX3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID%2FRxyvU6VW9nPA4TIkvdxE3BzkRGRNEXSWp5X6AcBGCAiEAkumsXb%2FH0452ZN95Z6yTuJ8N%2FO0uulBeKHsdrTcyhoUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOft%2FLREMzgb7RVbuircA5vliNAB8v1HpTDGMwDxP%2FlgFA0nNboiNjU4%2B7TDfe3NK3HvT6xiirt5A0bGwHq8JD5F3Hq%2FFubmErAN4vAl68rKcQoAil82oMz2Pdjh4Vz38rCLRDGBR6oxhomvhvBfMjhn4T3TteEqFaVJ%2BLkRnS47hGEckIBVEsNlcSJSvtNecF0liQ%2BVLdBtf9AWoIspOTf5NWlaHhonlTu%2BNHHVI%2ByWN2FGftyn3phvnPb6LaFr3UVmW18xdTLcP%2FqADbg0rBL77KuOwuY9CF%2Br%2Fed8Ip9jL5aWG6EGa9YwFtSiCqFs9QblkWztomKKTFDFD5sOlOXWj2jam%2BM0hfaDJEeFa1ZITQRSCw0iGXcpnUz8dGjesGpHGhGkkxf%2FqlXR%2F3t12aqGKFZaVlBFK7w5S9B0Bv1cgQN4LUYwsiM%2B2vUKl6%2FUw6XnsgafhsXyEdNqnkrgyAvotwWkzhtzIMoNjISeDVcJkZL7dzRN3FrB3dFDg%2F%2FrVjZIVer6hpvIdnlDzvKJ7WhkDbenyo03klrRAVvblXKLThkorIH75imO4NYUtcZbVx1u3uxsAE%2Fo%2Bwleau6u%2FrYKWGpnup0d9W7XMzU0%2FE1IgO%2BVr7MhGj2dxdmP4r7UiCMlL7MIx1oA3XOJMJzptb8GOqUBr0xO38DvQeK4JcuTOwmANzE%2FTpMBbyYY6ei9Fol%2F0sd14gINUxAagHtXU0D08P7PO%2FmPIa53n5Fgf83ofjOS2x%2FabgcrlIQi0KWL7R%2FtaJYwtG3fbpAEW6NT9ylFbRv7%2FfOGbDIXCG4ElTydnBizuNBV3r3BG%2BjlcsYb2tDLSh3RK3ie2KOkI5LRUACLFTMKfYd26ezjMEP%2BtUieyXR3zJf%2Bn22v&X-Amz-Signature=2ffbb7aa8203fb2a0661fd460876ae02ff7119b733364dfd566ec81dd7f3ec50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RW4UX3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID%2FRxyvU6VW9nPA4TIkvdxE3BzkRGRNEXSWp5X6AcBGCAiEAkumsXb%2FH0452ZN95Z6yTuJ8N%2FO0uulBeKHsdrTcyhoUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOft%2FLREMzgb7RVbuircA5vliNAB8v1HpTDGMwDxP%2FlgFA0nNboiNjU4%2B7TDfe3NK3HvT6xiirt5A0bGwHq8JD5F3Hq%2FFubmErAN4vAl68rKcQoAil82oMz2Pdjh4Vz38rCLRDGBR6oxhomvhvBfMjhn4T3TteEqFaVJ%2BLkRnS47hGEckIBVEsNlcSJSvtNecF0liQ%2BVLdBtf9AWoIspOTf5NWlaHhonlTu%2BNHHVI%2ByWN2FGftyn3phvnPb6LaFr3UVmW18xdTLcP%2FqADbg0rBL77KuOwuY9CF%2Br%2Fed8Ip9jL5aWG6EGa9YwFtSiCqFs9QblkWztomKKTFDFD5sOlOXWj2jam%2BM0hfaDJEeFa1ZITQRSCw0iGXcpnUz8dGjesGpHGhGkkxf%2FqlXR%2F3t12aqGKFZaVlBFK7w5S9B0Bv1cgQN4LUYwsiM%2B2vUKl6%2FUw6XnsgafhsXyEdNqnkrgyAvotwWkzhtzIMoNjISeDVcJkZL7dzRN3FrB3dFDg%2F%2FrVjZIVer6hpvIdnlDzvKJ7WhkDbenyo03klrRAVvblXKLThkorIH75imO4NYUtcZbVx1u3uxsAE%2Fo%2Bwleau6u%2FrYKWGpnup0d9W7XMzU0%2FE1IgO%2BVr7MhGj2dxdmP4r7UiCMlL7MIx1oA3XOJMJzptb8GOqUBr0xO38DvQeK4JcuTOwmANzE%2FTpMBbyYY6ei9Fol%2F0sd14gINUxAagHtXU0D08P7PO%2FmPIa53n5Fgf83ofjOS2x%2FabgcrlIQi0KWL7R%2FtaJYwtG3fbpAEW6NT9ylFbRv7%2FfOGbDIXCG4ElTydnBizuNBV3r3BG%2BjlcsYb2tDLSh3RK3ie2KOkI5LRUACLFTMKfYd26ezjMEP%2BtUieyXR3zJf%2Bn22v&X-Amz-Signature=25ddc15367225fea472d7efdb93f00893a524914207822a5f7092e8267d38a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RW4UX3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID%2FRxyvU6VW9nPA4TIkvdxE3BzkRGRNEXSWp5X6AcBGCAiEAkumsXb%2FH0452ZN95Z6yTuJ8N%2FO0uulBeKHsdrTcyhoUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOft%2FLREMzgb7RVbuircA5vliNAB8v1HpTDGMwDxP%2FlgFA0nNboiNjU4%2B7TDfe3NK3HvT6xiirt5A0bGwHq8JD5F3Hq%2FFubmErAN4vAl68rKcQoAil82oMz2Pdjh4Vz38rCLRDGBR6oxhomvhvBfMjhn4T3TteEqFaVJ%2BLkRnS47hGEckIBVEsNlcSJSvtNecF0liQ%2BVLdBtf9AWoIspOTf5NWlaHhonlTu%2BNHHVI%2ByWN2FGftyn3phvnPb6LaFr3UVmW18xdTLcP%2FqADbg0rBL77KuOwuY9CF%2Br%2Fed8Ip9jL5aWG6EGa9YwFtSiCqFs9QblkWztomKKTFDFD5sOlOXWj2jam%2BM0hfaDJEeFa1ZITQRSCw0iGXcpnUz8dGjesGpHGhGkkxf%2FqlXR%2F3t12aqGKFZaVlBFK7w5S9B0Bv1cgQN4LUYwsiM%2B2vUKl6%2FUw6XnsgafhsXyEdNqnkrgyAvotwWkzhtzIMoNjISeDVcJkZL7dzRN3FrB3dFDg%2F%2FrVjZIVer6hpvIdnlDzvKJ7WhkDbenyo03klrRAVvblXKLThkorIH75imO4NYUtcZbVx1u3uxsAE%2Fo%2Bwleau6u%2FrYKWGpnup0d9W7XMzU0%2FE1IgO%2BVr7MhGj2dxdmP4r7UiCMlL7MIx1oA3XOJMJzptb8GOqUBr0xO38DvQeK4JcuTOwmANzE%2FTpMBbyYY6ei9Fol%2F0sd14gINUxAagHtXU0D08P7PO%2FmPIa53n5Fgf83ofjOS2x%2FabgcrlIQi0KWL7R%2FtaJYwtG3fbpAEW6NT9ylFbRv7%2FfOGbDIXCG4ElTydnBizuNBV3r3BG%2BjlcsYb2tDLSh3RK3ie2KOkI5LRUACLFTMKfYd26ezjMEP%2BtUieyXR3zJf%2Bn22v&X-Amz-Signature=c3aee45742a396b9849731a1d5077dffe9ab8e3d296cb4680f9ca3ca2e46f4e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RW4UX3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID%2FRxyvU6VW9nPA4TIkvdxE3BzkRGRNEXSWp5X6AcBGCAiEAkumsXb%2FH0452ZN95Z6yTuJ8N%2FO0uulBeKHsdrTcyhoUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOft%2FLREMzgb7RVbuircA5vliNAB8v1HpTDGMwDxP%2FlgFA0nNboiNjU4%2B7TDfe3NK3HvT6xiirt5A0bGwHq8JD5F3Hq%2FFubmErAN4vAl68rKcQoAil82oMz2Pdjh4Vz38rCLRDGBR6oxhomvhvBfMjhn4T3TteEqFaVJ%2BLkRnS47hGEckIBVEsNlcSJSvtNecF0liQ%2BVLdBtf9AWoIspOTf5NWlaHhonlTu%2BNHHVI%2ByWN2FGftyn3phvnPb6LaFr3UVmW18xdTLcP%2FqADbg0rBL77KuOwuY9CF%2Br%2Fed8Ip9jL5aWG6EGa9YwFtSiCqFs9QblkWztomKKTFDFD5sOlOXWj2jam%2BM0hfaDJEeFa1ZITQRSCw0iGXcpnUz8dGjesGpHGhGkkxf%2FqlXR%2F3t12aqGKFZaVlBFK7w5S9B0Bv1cgQN4LUYwsiM%2B2vUKl6%2FUw6XnsgafhsXyEdNqnkrgyAvotwWkzhtzIMoNjISeDVcJkZL7dzRN3FrB3dFDg%2F%2FrVjZIVer6hpvIdnlDzvKJ7WhkDbenyo03klrRAVvblXKLThkorIH75imO4NYUtcZbVx1u3uxsAE%2Fo%2Bwleau6u%2FrYKWGpnup0d9W7XMzU0%2FE1IgO%2BVr7MhGj2dxdmP4r7UiCMlL7MIx1oA3XOJMJzptb8GOqUBr0xO38DvQeK4JcuTOwmANzE%2FTpMBbyYY6ei9Fol%2F0sd14gINUxAagHtXU0D08P7PO%2FmPIa53n5Fgf83ofjOS2x%2FabgcrlIQi0KWL7R%2FtaJYwtG3fbpAEW6NT9ylFbRv7%2FfOGbDIXCG4ElTydnBizuNBV3r3BG%2BjlcsYb2tDLSh3RK3ie2KOkI5LRUACLFTMKfYd26ezjMEP%2BtUieyXR3zJf%2Bn22v&X-Amz-Signature=a026fe5c0d547f097bdd3ef926ebf8708a050e68bfdd8c75037a5b7f3a1dc95f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

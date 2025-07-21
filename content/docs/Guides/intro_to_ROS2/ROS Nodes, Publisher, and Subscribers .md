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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMMTOGL5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzz4VNjb0mnoBdRJJG0y6F%2F1nj7HMRl4xrS2mocnkRPAiEA0gBCpWi1Pu1EtNHwtId%2F6cHG3LwW0V1j9iFDQD1P390qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6fJ1T%2Bd11F6DfXlyrcA1LxUTH8kotaBGWLPrDwhPECKeDTi9u0aYTeicKRarcPGCLNXh%2Bcy5WZZ5lgCW%2BkG1wCvJa9YLwztaBuH3Tro3BdxNaGAInefcq%2B7qgJYI8RpY284zo%2FzdZ3WDnLF6SQlTi9M07zL%2BEj%2FsuvXugpJoh4sqgHzVpYDg6fHelDgX8mwk3XGJYKvAKrYeuAq05tq7xcwLSF62%2FVP1WcoAerXdZU6TDe6tsudGd7lm2TvgImIckBvQccgSh5y0Za%2BB%2Fp30o3XFHvCoPhFzoAz4Iyb2cJ0ZSKKwiXAPNBuK8QHZTzUvmpCFFY4wlmXbs60eapy5EzKQalPtUWp%2FovMMgcNdZhnXg47vzBIGApLuVnh5S1TAL9%2F%2FnyLIwmXHIO5EhHVgJBzChEFyqOKnolrISQsBExbWL15L6BWqqtlcRDcI5Y%2Fd83uKuU6NsJzaFRI3pDe9ST6DhIqZkmPTgfPebnCuPU5WDBzBESr7gMz0V%2BDvEHbCAIbqUgyJtRxCLoe2HlT819unMHDO%2BvbxKMPH5%2Fc9ObXM5xEfvmydtpcGNPTnRcuvCUTPID%2Boz3Bsvtnj%2FSCCwj1VW62xwfrgSFT0VEJsh3IM5bR1qt3BjnRliff0EnLJXfQTI0pEyUrkl7MI3o%2BcMGOqUBJyd1JYVKBtrdRM8%2BG%2FsopZyljdfDLmf4SFx25DcEyHo56C3WCn5cvHO0TbEHAk2qEgjNFxpkg%2FHa%2FPQMgUNKyz4NueboSZUhXqdEbdsT8t0WshU1qgEMynhwC9U%2FdPZ5j91xz5pY%2Fsg6%2BF4Z0mvLLw1MmvtwMK%2BTveQM6M%2Fwey6nOEZqD82AJTDJEFifGBCuRwdPxMpeVVtnbZXxQcKO0cHfno88&X-Amz-Signature=41a19533784c9487e7e259739005d377385b5049bfb1c0ef89fd834cd1cc0e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMMTOGL5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzz4VNjb0mnoBdRJJG0y6F%2F1nj7HMRl4xrS2mocnkRPAiEA0gBCpWi1Pu1EtNHwtId%2F6cHG3LwW0V1j9iFDQD1P390qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6fJ1T%2Bd11F6DfXlyrcA1LxUTH8kotaBGWLPrDwhPECKeDTi9u0aYTeicKRarcPGCLNXh%2Bcy5WZZ5lgCW%2BkG1wCvJa9YLwztaBuH3Tro3BdxNaGAInefcq%2B7qgJYI8RpY284zo%2FzdZ3WDnLF6SQlTi9M07zL%2BEj%2FsuvXugpJoh4sqgHzVpYDg6fHelDgX8mwk3XGJYKvAKrYeuAq05tq7xcwLSF62%2FVP1WcoAerXdZU6TDe6tsudGd7lm2TvgImIckBvQccgSh5y0Za%2BB%2Fp30o3XFHvCoPhFzoAz4Iyb2cJ0ZSKKwiXAPNBuK8QHZTzUvmpCFFY4wlmXbs60eapy5EzKQalPtUWp%2FovMMgcNdZhnXg47vzBIGApLuVnh5S1TAL9%2F%2FnyLIwmXHIO5EhHVgJBzChEFyqOKnolrISQsBExbWL15L6BWqqtlcRDcI5Y%2Fd83uKuU6NsJzaFRI3pDe9ST6DhIqZkmPTgfPebnCuPU5WDBzBESr7gMz0V%2BDvEHbCAIbqUgyJtRxCLoe2HlT819unMHDO%2BvbxKMPH5%2Fc9ObXM5xEfvmydtpcGNPTnRcuvCUTPID%2Boz3Bsvtnj%2FSCCwj1VW62xwfrgSFT0VEJsh3IM5bR1qt3BjnRliff0EnLJXfQTI0pEyUrkl7MI3o%2BcMGOqUBJyd1JYVKBtrdRM8%2BG%2FsopZyljdfDLmf4SFx25DcEyHo56C3WCn5cvHO0TbEHAk2qEgjNFxpkg%2FHa%2FPQMgUNKyz4NueboSZUhXqdEbdsT8t0WshU1qgEMynhwC9U%2FdPZ5j91xz5pY%2Fsg6%2BF4Z0mvLLw1MmvtwMK%2BTveQM6M%2Fwey6nOEZqD82AJTDJEFifGBCuRwdPxMpeVVtnbZXxQcKO0cHfno88&X-Amz-Signature=c33b4793b13224cdbff967f8a1d7ce161e20cd363192e6b82dbd252f66288c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMMTOGL5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzz4VNjb0mnoBdRJJG0y6F%2F1nj7HMRl4xrS2mocnkRPAiEA0gBCpWi1Pu1EtNHwtId%2F6cHG3LwW0V1j9iFDQD1P390qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6fJ1T%2Bd11F6DfXlyrcA1LxUTH8kotaBGWLPrDwhPECKeDTi9u0aYTeicKRarcPGCLNXh%2Bcy5WZZ5lgCW%2BkG1wCvJa9YLwztaBuH3Tro3BdxNaGAInefcq%2B7qgJYI8RpY284zo%2FzdZ3WDnLF6SQlTi9M07zL%2BEj%2FsuvXugpJoh4sqgHzVpYDg6fHelDgX8mwk3XGJYKvAKrYeuAq05tq7xcwLSF62%2FVP1WcoAerXdZU6TDe6tsudGd7lm2TvgImIckBvQccgSh5y0Za%2BB%2Fp30o3XFHvCoPhFzoAz4Iyb2cJ0ZSKKwiXAPNBuK8QHZTzUvmpCFFY4wlmXbs60eapy5EzKQalPtUWp%2FovMMgcNdZhnXg47vzBIGApLuVnh5S1TAL9%2F%2FnyLIwmXHIO5EhHVgJBzChEFyqOKnolrISQsBExbWL15L6BWqqtlcRDcI5Y%2Fd83uKuU6NsJzaFRI3pDe9ST6DhIqZkmPTgfPebnCuPU5WDBzBESr7gMz0V%2BDvEHbCAIbqUgyJtRxCLoe2HlT819unMHDO%2BvbxKMPH5%2Fc9ObXM5xEfvmydtpcGNPTnRcuvCUTPID%2Boz3Bsvtnj%2FSCCwj1VW62xwfrgSFT0VEJsh3IM5bR1qt3BjnRliff0EnLJXfQTI0pEyUrkl7MI3o%2BcMGOqUBJyd1JYVKBtrdRM8%2BG%2FsopZyljdfDLmf4SFx25DcEyHo56C3WCn5cvHO0TbEHAk2qEgjNFxpkg%2FHa%2FPQMgUNKyz4NueboSZUhXqdEbdsT8t0WshU1qgEMynhwC9U%2FdPZ5j91xz5pY%2Fsg6%2BF4Z0mvLLw1MmvtwMK%2BTveQM6M%2Fwey6nOEZqD82AJTDJEFifGBCuRwdPxMpeVVtnbZXxQcKO0cHfno88&X-Amz-Signature=418ef94d4905415168e5818192302e189cfe9590f439821f5c89603575c07ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMMTOGL5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzz4VNjb0mnoBdRJJG0y6F%2F1nj7HMRl4xrS2mocnkRPAiEA0gBCpWi1Pu1EtNHwtId%2F6cHG3LwW0V1j9iFDQD1P390qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6fJ1T%2Bd11F6DfXlyrcA1LxUTH8kotaBGWLPrDwhPECKeDTi9u0aYTeicKRarcPGCLNXh%2Bcy5WZZ5lgCW%2BkG1wCvJa9YLwztaBuH3Tro3BdxNaGAInefcq%2B7qgJYI8RpY284zo%2FzdZ3WDnLF6SQlTi9M07zL%2BEj%2FsuvXugpJoh4sqgHzVpYDg6fHelDgX8mwk3XGJYKvAKrYeuAq05tq7xcwLSF62%2FVP1WcoAerXdZU6TDe6tsudGd7lm2TvgImIckBvQccgSh5y0Za%2BB%2Fp30o3XFHvCoPhFzoAz4Iyb2cJ0ZSKKwiXAPNBuK8QHZTzUvmpCFFY4wlmXbs60eapy5EzKQalPtUWp%2FovMMgcNdZhnXg47vzBIGApLuVnh5S1TAL9%2F%2FnyLIwmXHIO5EhHVgJBzChEFyqOKnolrISQsBExbWL15L6BWqqtlcRDcI5Y%2Fd83uKuU6NsJzaFRI3pDe9ST6DhIqZkmPTgfPebnCuPU5WDBzBESr7gMz0V%2BDvEHbCAIbqUgyJtRxCLoe2HlT819unMHDO%2BvbxKMPH5%2Fc9ObXM5xEfvmydtpcGNPTnRcuvCUTPID%2Boz3Bsvtnj%2FSCCwj1VW62xwfrgSFT0VEJsh3IM5bR1qt3BjnRliff0EnLJXfQTI0pEyUrkl7MI3o%2BcMGOqUBJyd1JYVKBtrdRM8%2BG%2FsopZyljdfDLmf4SFx25DcEyHo56C3WCn5cvHO0TbEHAk2qEgjNFxpkg%2FHa%2FPQMgUNKyz4NueboSZUhXqdEbdsT8t0WshU1qgEMynhwC9U%2FdPZ5j91xz5pY%2Fsg6%2BF4Z0mvLLw1MmvtwMK%2BTveQM6M%2Fwey6nOEZqD82AJTDJEFifGBCuRwdPxMpeVVtnbZXxQcKO0cHfno88&X-Amz-Signature=fc5113ab1e88799321488ec475337c918245263f622c0f53fd2106d83a34ab4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMMTOGL5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzz4VNjb0mnoBdRJJG0y6F%2F1nj7HMRl4xrS2mocnkRPAiEA0gBCpWi1Pu1EtNHwtId%2F6cHG3LwW0V1j9iFDQD1P390qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6fJ1T%2Bd11F6DfXlyrcA1LxUTH8kotaBGWLPrDwhPECKeDTi9u0aYTeicKRarcPGCLNXh%2Bcy5WZZ5lgCW%2BkG1wCvJa9YLwztaBuH3Tro3BdxNaGAInefcq%2B7qgJYI8RpY284zo%2FzdZ3WDnLF6SQlTi9M07zL%2BEj%2FsuvXugpJoh4sqgHzVpYDg6fHelDgX8mwk3XGJYKvAKrYeuAq05tq7xcwLSF62%2FVP1WcoAerXdZU6TDe6tsudGd7lm2TvgImIckBvQccgSh5y0Za%2BB%2Fp30o3XFHvCoPhFzoAz4Iyb2cJ0ZSKKwiXAPNBuK8QHZTzUvmpCFFY4wlmXbs60eapy5EzKQalPtUWp%2FovMMgcNdZhnXg47vzBIGApLuVnh5S1TAL9%2F%2FnyLIwmXHIO5EhHVgJBzChEFyqOKnolrISQsBExbWL15L6BWqqtlcRDcI5Y%2Fd83uKuU6NsJzaFRI3pDe9ST6DhIqZkmPTgfPebnCuPU5WDBzBESr7gMz0V%2BDvEHbCAIbqUgyJtRxCLoe2HlT819unMHDO%2BvbxKMPH5%2Fc9ObXM5xEfvmydtpcGNPTnRcuvCUTPID%2Boz3Bsvtnj%2FSCCwj1VW62xwfrgSFT0VEJsh3IM5bR1qt3BjnRliff0EnLJXfQTI0pEyUrkl7MI3o%2BcMGOqUBJyd1JYVKBtrdRM8%2BG%2FsopZyljdfDLmf4SFx25DcEyHo56C3WCn5cvHO0TbEHAk2qEgjNFxpkg%2FHa%2FPQMgUNKyz4NueboSZUhXqdEbdsT8t0WshU1qgEMynhwC9U%2FdPZ5j91xz5pY%2Fsg6%2BF4Z0mvLLw1MmvtwMK%2BTveQM6M%2Fwey6nOEZqD82AJTDJEFifGBCuRwdPxMpeVVtnbZXxQcKO0cHfno88&X-Amz-Signature=419bebb472e77e799fded904f89d2f39b22743d8666a3d6d0fe3322e8144c132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMMTOGL5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzz4VNjb0mnoBdRJJG0y6F%2F1nj7HMRl4xrS2mocnkRPAiEA0gBCpWi1Pu1EtNHwtId%2F6cHG3LwW0V1j9iFDQD1P390qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6fJ1T%2Bd11F6DfXlyrcA1LxUTH8kotaBGWLPrDwhPECKeDTi9u0aYTeicKRarcPGCLNXh%2Bcy5WZZ5lgCW%2BkG1wCvJa9YLwztaBuH3Tro3BdxNaGAInefcq%2B7qgJYI8RpY284zo%2FzdZ3WDnLF6SQlTi9M07zL%2BEj%2FsuvXugpJoh4sqgHzVpYDg6fHelDgX8mwk3XGJYKvAKrYeuAq05tq7xcwLSF62%2FVP1WcoAerXdZU6TDe6tsudGd7lm2TvgImIckBvQccgSh5y0Za%2BB%2Fp30o3XFHvCoPhFzoAz4Iyb2cJ0ZSKKwiXAPNBuK8QHZTzUvmpCFFY4wlmXbs60eapy5EzKQalPtUWp%2FovMMgcNdZhnXg47vzBIGApLuVnh5S1TAL9%2F%2FnyLIwmXHIO5EhHVgJBzChEFyqOKnolrISQsBExbWL15L6BWqqtlcRDcI5Y%2Fd83uKuU6NsJzaFRI3pDe9ST6DhIqZkmPTgfPebnCuPU5WDBzBESr7gMz0V%2BDvEHbCAIbqUgyJtRxCLoe2HlT819unMHDO%2BvbxKMPH5%2Fc9ObXM5xEfvmydtpcGNPTnRcuvCUTPID%2Boz3Bsvtnj%2FSCCwj1VW62xwfrgSFT0VEJsh3IM5bR1qt3BjnRliff0EnLJXfQTI0pEyUrkl7MI3o%2BcMGOqUBJyd1JYVKBtrdRM8%2BG%2FsopZyljdfDLmf4SFx25DcEyHo56C3WCn5cvHO0TbEHAk2qEgjNFxpkg%2FHa%2FPQMgUNKyz4NueboSZUhXqdEbdsT8t0WshU1qgEMynhwC9U%2FdPZ5j91xz5pY%2Fsg6%2BF4Z0mvLLw1MmvtwMK%2BTveQM6M%2Fwey6nOEZqD82AJTDJEFifGBCuRwdPxMpeVVtnbZXxQcKO0cHfno88&X-Amz-Signature=bdf34cb7d23b6ba9f2e9f4c7de4ab2cf8127aee23e8e050c5bfe8460ada1c646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMMTOGL5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzz4VNjb0mnoBdRJJG0y6F%2F1nj7HMRl4xrS2mocnkRPAiEA0gBCpWi1Pu1EtNHwtId%2F6cHG3LwW0V1j9iFDQD1P390qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6fJ1T%2Bd11F6DfXlyrcA1LxUTH8kotaBGWLPrDwhPECKeDTi9u0aYTeicKRarcPGCLNXh%2Bcy5WZZ5lgCW%2BkG1wCvJa9YLwztaBuH3Tro3BdxNaGAInefcq%2B7qgJYI8RpY284zo%2FzdZ3WDnLF6SQlTi9M07zL%2BEj%2FsuvXugpJoh4sqgHzVpYDg6fHelDgX8mwk3XGJYKvAKrYeuAq05tq7xcwLSF62%2FVP1WcoAerXdZU6TDe6tsudGd7lm2TvgImIckBvQccgSh5y0Za%2BB%2Fp30o3XFHvCoPhFzoAz4Iyb2cJ0ZSKKwiXAPNBuK8QHZTzUvmpCFFY4wlmXbs60eapy5EzKQalPtUWp%2FovMMgcNdZhnXg47vzBIGApLuVnh5S1TAL9%2F%2FnyLIwmXHIO5EhHVgJBzChEFyqOKnolrISQsBExbWL15L6BWqqtlcRDcI5Y%2Fd83uKuU6NsJzaFRI3pDe9ST6DhIqZkmPTgfPebnCuPU5WDBzBESr7gMz0V%2BDvEHbCAIbqUgyJtRxCLoe2HlT819unMHDO%2BvbxKMPH5%2Fc9ObXM5xEfvmydtpcGNPTnRcuvCUTPID%2Boz3Bsvtnj%2FSCCwj1VW62xwfrgSFT0VEJsh3IM5bR1qt3BjnRliff0EnLJXfQTI0pEyUrkl7MI3o%2BcMGOqUBJyd1JYVKBtrdRM8%2BG%2FsopZyljdfDLmf4SFx25DcEyHo56C3WCn5cvHO0TbEHAk2qEgjNFxpkg%2FHa%2FPQMgUNKyz4NueboSZUhXqdEbdsT8t0WshU1qgEMynhwC9U%2FdPZ5j91xz5pY%2Fsg6%2BF4Z0mvLLw1MmvtwMK%2BTveQM6M%2Fwey6nOEZqD82AJTDJEFifGBCuRwdPxMpeVVtnbZXxQcKO0cHfno88&X-Amz-Signature=a1d51ec18e394f70c1a4525005f7c8817973c57cfb0a9a8fe61a90da89603cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMMTOGL5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzz4VNjb0mnoBdRJJG0y6F%2F1nj7HMRl4xrS2mocnkRPAiEA0gBCpWi1Pu1EtNHwtId%2F6cHG3LwW0V1j9iFDQD1P390qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6fJ1T%2Bd11F6DfXlyrcA1LxUTH8kotaBGWLPrDwhPECKeDTi9u0aYTeicKRarcPGCLNXh%2Bcy5WZZ5lgCW%2BkG1wCvJa9YLwztaBuH3Tro3BdxNaGAInefcq%2B7qgJYI8RpY284zo%2FzdZ3WDnLF6SQlTi9M07zL%2BEj%2FsuvXugpJoh4sqgHzVpYDg6fHelDgX8mwk3XGJYKvAKrYeuAq05tq7xcwLSF62%2FVP1WcoAerXdZU6TDe6tsudGd7lm2TvgImIckBvQccgSh5y0Za%2BB%2Fp30o3XFHvCoPhFzoAz4Iyb2cJ0ZSKKwiXAPNBuK8QHZTzUvmpCFFY4wlmXbs60eapy5EzKQalPtUWp%2FovMMgcNdZhnXg47vzBIGApLuVnh5S1TAL9%2F%2FnyLIwmXHIO5EhHVgJBzChEFyqOKnolrISQsBExbWL15L6BWqqtlcRDcI5Y%2Fd83uKuU6NsJzaFRI3pDe9ST6DhIqZkmPTgfPebnCuPU5WDBzBESr7gMz0V%2BDvEHbCAIbqUgyJtRxCLoe2HlT819unMHDO%2BvbxKMPH5%2Fc9ObXM5xEfvmydtpcGNPTnRcuvCUTPID%2Boz3Bsvtnj%2FSCCwj1VW62xwfrgSFT0VEJsh3IM5bR1qt3BjnRliff0EnLJXfQTI0pEyUrkl7MI3o%2BcMGOqUBJyd1JYVKBtrdRM8%2BG%2FsopZyljdfDLmf4SFx25DcEyHo56C3WCn5cvHO0TbEHAk2qEgjNFxpkg%2FHa%2FPQMgUNKyz4NueboSZUhXqdEbdsT8t0WshU1qgEMynhwC9U%2FdPZ5j91xz5pY%2Fsg6%2BF4Z0mvLLw1MmvtwMK%2BTveQM6M%2Fwey6nOEZqD82AJTDJEFifGBCuRwdPxMpeVVtnbZXxQcKO0cHfno88&X-Amz-Signature=d8b9369fb4c9073fce3bf69de536d5033d3fea72a44300b3595e6949d8c5752e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

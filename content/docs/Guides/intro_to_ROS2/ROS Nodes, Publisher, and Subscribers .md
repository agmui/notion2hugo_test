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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NB64W22%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChSH%2FESA%2BejSYJ6xAxHwBtYgbi3TrUms0uXoh0IrEdjQIgD1Gl9KsVZRNxSrOHJj4pJZPmDJlNpPbtyNqHiu4R8lYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAVv9Okpb6titQsokSrcA4wbLM0DC7MNBw2lusJRJk%2F7lVDw64wMhxaDeegA43mUBB197y6PJpuwo9cZy0lOQPHHRC%2BPlwJ5%2FYCoT5iqZ60QtQ8Letm0TNqIVpjQRpealtH78bGCkTMAbsHyl7lTlOVu1WxCM2CGEdJP2%2FN3EAoZDiJMK1wqf1M6IOKTcVeRiFBLKTeL7fURhlkxsNRrH88T1GPRMKpCOeAdM8uCuvrORHA0a639bZLo4Cz28oqR3q21AZGGc6YJFATKlyV0TKS9EcRIuR1teoo%2F6xs7QpuqrdhPHEuG5BpFMNpocIXIGvYCp4zFtA%2FiLUJHZ02hGo1v35kmTN2rXz41olVPAgTlg4U38shI%2FB%2FiSuvtgzuUZIfZFiJyCZyLNN0431eoPJA8O%2BCPkqi5wyemtdEXBnkBRWVmTsM6xuL1WjtP4mfz9FnE9np9sLvRh%2B4K1h0xk9Ho%2BrGtUs2fatVOAbYlNxxFKwGl8K5ALQQKGxmJHvga4nF4sOrO7P45ztxNa%2FPMTXkvphB7r2ugB4JWB%2FabYEa8yih2ij2RzdstFXmKM%2Bg4wV2Ug5u6cJc0txVADQUUFLI26GUUFlOuXcNq2Qlt1F9HVPPbvDlbRweZXnOK8OiTwOsyg4NrI8EG6DE8MMiqnL8GOqUBp4RyGWA8%2FyMPg80mg1SOrl9TH37H7tf%2BnQ8ibWtfK0baYOlCzvAhfm3987uKrYpkZP%2FJRCzxcU1%2F8%2B5EwJRxSmMxfG64Rq2iVsME4n8pZcx%2FesfrFJDiUTOZCVnszjN1Ph4igSZoNEKuyIVjS2obaRTx%2F3mRvw0kz8VAu1RuBz%2F7gZOTLQX6rI89AJGOhhZrLHBjon73KBpDA3HiSOFPtOg%2FpSrW&X-Amz-Signature=931de3ff4e635041ebd09c46e6e30ed6733896886d8c091695e12033a17b314c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NB64W22%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChSH%2FESA%2BejSYJ6xAxHwBtYgbi3TrUms0uXoh0IrEdjQIgD1Gl9KsVZRNxSrOHJj4pJZPmDJlNpPbtyNqHiu4R8lYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAVv9Okpb6titQsokSrcA4wbLM0DC7MNBw2lusJRJk%2F7lVDw64wMhxaDeegA43mUBB197y6PJpuwo9cZy0lOQPHHRC%2BPlwJ5%2FYCoT5iqZ60QtQ8Letm0TNqIVpjQRpealtH78bGCkTMAbsHyl7lTlOVu1WxCM2CGEdJP2%2FN3EAoZDiJMK1wqf1M6IOKTcVeRiFBLKTeL7fURhlkxsNRrH88T1GPRMKpCOeAdM8uCuvrORHA0a639bZLo4Cz28oqR3q21AZGGc6YJFATKlyV0TKS9EcRIuR1teoo%2F6xs7QpuqrdhPHEuG5BpFMNpocIXIGvYCp4zFtA%2FiLUJHZ02hGo1v35kmTN2rXz41olVPAgTlg4U38shI%2FB%2FiSuvtgzuUZIfZFiJyCZyLNN0431eoPJA8O%2BCPkqi5wyemtdEXBnkBRWVmTsM6xuL1WjtP4mfz9FnE9np9sLvRh%2B4K1h0xk9Ho%2BrGtUs2fatVOAbYlNxxFKwGl8K5ALQQKGxmJHvga4nF4sOrO7P45ztxNa%2FPMTXkvphB7r2ugB4JWB%2FabYEa8yih2ij2RzdstFXmKM%2Bg4wV2Ug5u6cJc0txVADQUUFLI26GUUFlOuXcNq2Qlt1F9HVPPbvDlbRweZXnOK8OiTwOsyg4NrI8EG6DE8MMiqnL8GOqUBp4RyGWA8%2FyMPg80mg1SOrl9TH37H7tf%2BnQ8ibWtfK0baYOlCzvAhfm3987uKrYpkZP%2FJRCzxcU1%2F8%2B5EwJRxSmMxfG64Rq2iVsME4n8pZcx%2FesfrFJDiUTOZCVnszjN1Ph4igSZoNEKuyIVjS2obaRTx%2F3mRvw0kz8VAu1RuBz%2F7gZOTLQX6rI89AJGOhhZrLHBjon73KBpDA3HiSOFPtOg%2FpSrW&X-Amz-Signature=4b097ca90a99b390904f476604b2aa6a91c443a33ed8e9d13e933ed84367677e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NB64W22%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChSH%2FESA%2BejSYJ6xAxHwBtYgbi3TrUms0uXoh0IrEdjQIgD1Gl9KsVZRNxSrOHJj4pJZPmDJlNpPbtyNqHiu4R8lYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAVv9Okpb6titQsokSrcA4wbLM0DC7MNBw2lusJRJk%2F7lVDw64wMhxaDeegA43mUBB197y6PJpuwo9cZy0lOQPHHRC%2BPlwJ5%2FYCoT5iqZ60QtQ8Letm0TNqIVpjQRpealtH78bGCkTMAbsHyl7lTlOVu1WxCM2CGEdJP2%2FN3EAoZDiJMK1wqf1M6IOKTcVeRiFBLKTeL7fURhlkxsNRrH88T1GPRMKpCOeAdM8uCuvrORHA0a639bZLo4Cz28oqR3q21AZGGc6YJFATKlyV0TKS9EcRIuR1teoo%2F6xs7QpuqrdhPHEuG5BpFMNpocIXIGvYCp4zFtA%2FiLUJHZ02hGo1v35kmTN2rXz41olVPAgTlg4U38shI%2FB%2FiSuvtgzuUZIfZFiJyCZyLNN0431eoPJA8O%2BCPkqi5wyemtdEXBnkBRWVmTsM6xuL1WjtP4mfz9FnE9np9sLvRh%2B4K1h0xk9Ho%2BrGtUs2fatVOAbYlNxxFKwGl8K5ALQQKGxmJHvga4nF4sOrO7P45ztxNa%2FPMTXkvphB7r2ugB4JWB%2FabYEa8yih2ij2RzdstFXmKM%2Bg4wV2Ug5u6cJc0txVADQUUFLI26GUUFlOuXcNq2Qlt1F9HVPPbvDlbRweZXnOK8OiTwOsyg4NrI8EG6DE8MMiqnL8GOqUBp4RyGWA8%2FyMPg80mg1SOrl9TH37H7tf%2BnQ8ibWtfK0baYOlCzvAhfm3987uKrYpkZP%2FJRCzxcU1%2F8%2B5EwJRxSmMxfG64Rq2iVsME4n8pZcx%2FesfrFJDiUTOZCVnszjN1Ph4igSZoNEKuyIVjS2obaRTx%2F3mRvw0kz8VAu1RuBz%2F7gZOTLQX6rI89AJGOhhZrLHBjon73KBpDA3HiSOFPtOg%2FpSrW&X-Amz-Signature=70114205e145712ffb832da21970c012091e00c6a1484c263af5c505967a6407&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NB64W22%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChSH%2FESA%2BejSYJ6xAxHwBtYgbi3TrUms0uXoh0IrEdjQIgD1Gl9KsVZRNxSrOHJj4pJZPmDJlNpPbtyNqHiu4R8lYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAVv9Okpb6titQsokSrcA4wbLM0DC7MNBw2lusJRJk%2F7lVDw64wMhxaDeegA43mUBB197y6PJpuwo9cZy0lOQPHHRC%2BPlwJ5%2FYCoT5iqZ60QtQ8Letm0TNqIVpjQRpealtH78bGCkTMAbsHyl7lTlOVu1WxCM2CGEdJP2%2FN3EAoZDiJMK1wqf1M6IOKTcVeRiFBLKTeL7fURhlkxsNRrH88T1GPRMKpCOeAdM8uCuvrORHA0a639bZLo4Cz28oqR3q21AZGGc6YJFATKlyV0TKS9EcRIuR1teoo%2F6xs7QpuqrdhPHEuG5BpFMNpocIXIGvYCp4zFtA%2FiLUJHZ02hGo1v35kmTN2rXz41olVPAgTlg4U38shI%2FB%2FiSuvtgzuUZIfZFiJyCZyLNN0431eoPJA8O%2BCPkqi5wyemtdEXBnkBRWVmTsM6xuL1WjtP4mfz9FnE9np9sLvRh%2B4K1h0xk9Ho%2BrGtUs2fatVOAbYlNxxFKwGl8K5ALQQKGxmJHvga4nF4sOrO7P45ztxNa%2FPMTXkvphB7r2ugB4JWB%2FabYEa8yih2ij2RzdstFXmKM%2Bg4wV2Ug5u6cJc0txVADQUUFLI26GUUFlOuXcNq2Qlt1F9HVPPbvDlbRweZXnOK8OiTwOsyg4NrI8EG6DE8MMiqnL8GOqUBp4RyGWA8%2FyMPg80mg1SOrl9TH37H7tf%2BnQ8ibWtfK0baYOlCzvAhfm3987uKrYpkZP%2FJRCzxcU1%2F8%2B5EwJRxSmMxfG64Rq2iVsME4n8pZcx%2FesfrFJDiUTOZCVnszjN1Ph4igSZoNEKuyIVjS2obaRTx%2F3mRvw0kz8VAu1RuBz%2F7gZOTLQX6rI89AJGOhhZrLHBjon73KBpDA3HiSOFPtOg%2FpSrW&X-Amz-Signature=860c9e641b48aa539c6a8d786899fe51f3baeed799079f2242cf690fb7045107&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NB64W22%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChSH%2FESA%2BejSYJ6xAxHwBtYgbi3TrUms0uXoh0IrEdjQIgD1Gl9KsVZRNxSrOHJj4pJZPmDJlNpPbtyNqHiu4R8lYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAVv9Okpb6titQsokSrcA4wbLM0DC7MNBw2lusJRJk%2F7lVDw64wMhxaDeegA43mUBB197y6PJpuwo9cZy0lOQPHHRC%2BPlwJ5%2FYCoT5iqZ60QtQ8Letm0TNqIVpjQRpealtH78bGCkTMAbsHyl7lTlOVu1WxCM2CGEdJP2%2FN3EAoZDiJMK1wqf1M6IOKTcVeRiFBLKTeL7fURhlkxsNRrH88T1GPRMKpCOeAdM8uCuvrORHA0a639bZLo4Cz28oqR3q21AZGGc6YJFATKlyV0TKS9EcRIuR1teoo%2F6xs7QpuqrdhPHEuG5BpFMNpocIXIGvYCp4zFtA%2FiLUJHZ02hGo1v35kmTN2rXz41olVPAgTlg4U38shI%2FB%2FiSuvtgzuUZIfZFiJyCZyLNN0431eoPJA8O%2BCPkqi5wyemtdEXBnkBRWVmTsM6xuL1WjtP4mfz9FnE9np9sLvRh%2B4K1h0xk9Ho%2BrGtUs2fatVOAbYlNxxFKwGl8K5ALQQKGxmJHvga4nF4sOrO7P45ztxNa%2FPMTXkvphB7r2ugB4JWB%2FabYEa8yih2ij2RzdstFXmKM%2Bg4wV2Ug5u6cJc0txVADQUUFLI26GUUFlOuXcNq2Qlt1F9HVPPbvDlbRweZXnOK8OiTwOsyg4NrI8EG6DE8MMiqnL8GOqUBp4RyGWA8%2FyMPg80mg1SOrl9TH37H7tf%2BnQ8ibWtfK0baYOlCzvAhfm3987uKrYpkZP%2FJRCzxcU1%2F8%2B5EwJRxSmMxfG64Rq2iVsME4n8pZcx%2FesfrFJDiUTOZCVnszjN1Ph4igSZoNEKuyIVjS2obaRTx%2F3mRvw0kz8VAu1RuBz%2F7gZOTLQX6rI89AJGOhhZrLHBjon73KBpDA3HiSOFPtOg%2FpSrW&X-Amz-Signature=f900348c5b89f0799945d21cf3bb42acf6553dca15ffe3f35436d853f16704db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NB64W22%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChSH%2FESA%2BejSYJ6xAxHwBtYgbi3TrUms0uXoh0IrEdjQIgD1Gl9KsVZRNxSrOHJj4pJZPmDJlNpPbtyNqHiu4R8lYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAVv9Okpb6titQsokSrcA4wbLM0DC7MNBw2lusJRJk%2F7lVDw64wMhxaDeegA43mUBB197y6PJpuwo9cZy0lOQPHHRC%2BPlwJ5%2FYCoT5iqZ60QtQ8Letm0TNqIVpjQRpealtH78bGCkTMAbsHyl7lTlOVu1WxCM2CGEdJP2%2FN3EAoZDiJMK1wqf1M6IOKTcVeRiFBLKTeL7fURhlkxsNRrH88T1GPRMKpCOeAdM8uCuvrORHA0a639bZLo4Cz28oqR3q21AZGGc6YJFATKlyV0TKS9EcRIuR1teoo%2F6xs7QpuqrdhPHEuG5BpFMNpocIXIGvYCp4zFtA%2FiLUJHZ02hGo1v35kmTN2rXz41olVPAgTlg4U38shI%2FB%2FiSuvtgzuUZIfZFiJyCZyLNN0431eoPJA8O%2BCPkqi5wyemtdEXBnkBRWVmTsM6xuL1WjtP4mfz9FnE9np9sLvRh%2B4K1h0xk9Ho%2BrGtUs2fatVOAbYlNxxFKwGl8K5ALQQKGxmJHvga4nF4sOrO7P45ztxNa%2FPMTXkvphB7r2ugB4JWB%2FabYEa8yih2ij2RzdstFXmKM%2Bg4wV2Ug5u6cJc0txVADQUUFLI26GUUFlOuXcNq2Qlt1F9HVPPbvDlbRweZXnOK8OiTwOsyg4NrI8EG6DE8MMiqnL8GOqUBp4RyGWA8%2FyMPg80mg1SOrl9TH37H7tf%2BnQ8ibWtfK0baYOlCzvAhfm3987uKrYpkZP%2FJRCzxcU1%2F8%2B5EwJRxSmMxfG64Rq2iVsME4n8pZcx%2FesfrFJDiUTOZCVnszjN1Ph4igSZoNEKuyIVjS2obaRTx%2F3mRvw0kz8VAu1RuBz%2F7gZOTLQX6rI89AJGOhhZrLHBjon73KBpDA3HiSOFPtOg%2FpSrW&X-Amz-Signature=1e4cee3949e7e6d483cd54caa3a5d74fc11a6538cc43322888bfc901f8a7a0b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NB64W22%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChSH%2FESA%2BejSYJ6xAxHwBtYgbi3TrUms0uXoh0IrEdjQIgD1Gl9KsVZRNxSrOHJj4pJZPmDJlNpPbtyNqHiu4R8lYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAVv9Okpb6titQsokSrcA4wbLM0DC7MNBw2lusJRJk%2F7lVDw64wMhxaDeegA43mUBB197y6PJpuwo9cZy0lOQPHHRC%2BPlwJ5%2FYCoT5iqZ60QtQ8Letm0TNqIVpjQRpealtH78bGCkTMAbsHyl7lTlOVu1WxCM2CGEdJP2%2FN3EAoZDiJMK1wqf1M6IOKTcVeRiFBLKTeL7fURhlkxsNRrH88T1GPRMKpCOeAdM8uCuvrORHA0a639bZLo4Cz28oqR3q21AZGGc6YJFATKlyV0TKS9EcRIuR1teoo%2F6xs7QpuqrdhPHEuG5BpFMNpocIXIGvYCp4zFtA%2FiLUJHZ02hGo1v35kmTN2rXz41olVPAgTlg4U38shI%2FB%2FiSuvtgzuUZIfZFiJyCZyLNN0431eoPJA8O%2BCPkqi5wyemtdEXBnkBRWVmTsM6xuL1WjtP4mfz9FnE9np9sLvRh%2B4K1h0xk9Ho%2BrGtUs2fatVOAbYlNxxFKwGl8K5ALQQKGxmJHvga4nF4sOrO7P45ztxNa%2FPMTXkvphB7r2ugB4JWB%2FabYEa8yih2ij2RzdstFXmKM%2Bg4wV2Ug5u6cJc0txVADQUUFLI26GUUFlOuXcNq2Qlt1F9HVPPbvDlbRweZXnOK8OiTwOsyg4NrI8EG6DE8MMiqnL8GOqUBp4RyGWA8%2FyMPg80mg1SOrl9TH37H7tf%2BnQ8ibWtfK0baYOlCzvAhfm3987uKrYpkZP%2FJRCzxcU1%2F8%2B5EwJRxSmMxfG64Rq2iVsME4n8pZcx%2FesfrFJDiUTOZCVnszjN1Ph4igSZoNEKuyIVjS2obaRTx%2F3mRvw0kz8VAu1RuBz%2F7gZOTLQX6rI89AJGOhhZrLHBjon73KBpDA3HiSOFPtOg%2FpSrW&X-Amz-Signature=a7effbc0e599bc3897edbba0000b15186bb0c3b1b85cffb7094d3b25d31555d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NB64W22%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChSH%2FESA%2BejSYJ6xAxHwBtYgbi3TrUms0uXoh0IrEdjQIgD1Gl9KsVZRNxSrOHJj4pJZPmDJlNpPbtyNqHiu4R8lYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAVv9Okpb6titQsokSrcA4wbLM0DC7MNBw2lusJRJk%2F7lVDw64wMhxaDeegA43mUBB197y6PJpuwo9cZy0lOQPHHRC%2BPlwJ5%2FYCoT5iqZ60QtQ8Letm0TNqIVpjQRpealtH78bGCkTMAbsHyl7lTlOVu1WxCM2CGEdJP2%2FN3EAoZDiJMK1wqf1M6IOKTcVeRiFBLKTeL7fURhlkxsNRrH88T1GPRMKpCOeAdM8uCuvrORHA0a639bZLo4Cz28oqR3q21AZGGc6YJFATKlyV0TKS9EcRIuR1teoo%2F6xs7QpuqrdhPHEuG5BpFMNpocIXIGvYCp4zFtA%2FiLUJHZ02hGo1v35kmTN2rXz41olVPAgTlg4U38shI%2FB%2FiSuvtgzuUZIfZFiJyCZyLNN0431eoPJA8O%2BCPkqi5wyemtdEXBnkBRWVmTsM6xuL1WjtP4mfz9FnE9np9sLvRh%2B4K1h0xk9Ho%2BrGtUs2fatVOAbYlNxxFKwGl8K5ALQQKGxmJHvga4nF4sOrO7P45ztxNa%2FPMTXkvphB7r2ugB4JWB%2FabYEa8yih2ij2RzdstFXmKM%2Bg4wV2Ug5u6cJc0txVADQUUFLI26GUUFlOuXcNq2Qlt1F9HVPPbvDlbRweZXnOK8OiTwOsyg4NrI8EG6DE8MMiqnL8GOqUBp4RyGWA8%2FyMPg80mg1SOrl9TH37H7tf%2BnQ8ibWtfK0baYOlCzvAhfm3987uKrYpkZP%2FJRCzxcU1%2F8%2B5EwJRxSmMxfG64Rq2iVsME4n8pZcx%2FesfrFJDiUTOZCVnszjN1Ph4igSZoNEKuyIVjS2obaRTx%2F3mRvw0kz8VAu1RuBz%2F7gZOTLQX6rI89AJGOhhZrLHBjon73KBpDA3HiSOFPtOg%2FpSrW&X-Amz-Signature=4e7788f94a65d5db8a4c80395c8390efe75e732992b41eadf3f645f6ca039b95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

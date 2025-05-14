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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367PZQ6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTSKS8BT47fv%2BO67es12u3GqbfiIq3rmpxdZzgU7Pa5QIgMtbdODptr13obx%2BYrai7u7iS3ikuFXh%2FE09hVpLapXkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNKJJsuQqyr%2BluDPdyrcA1S%2BB6Fs9J3p3sfl%2FoxYii0TYqpEAb36aruqjwKZLp8sEUiKtkw8iH9W8usL6tF5571fPo669vCE5d6a5%2FqjZuChUqgFT1MmXK5cjddesvCYv1RWv%2FVKvNLM6VcjjjVkE1blu5LZTdzCiB2W5HIsGq%2ByAzCDwqbALlOcLouSxwjk%2F2X1WTDLfuAq%2FtT%2BWIADAcqjzfjVNw2H0%2FPuBtSiWGHdUqGgslmyOGCMkBiqNdZv8%2FTFP2j9B0AXw7P2rygb1WrJAe0Rfvummlr12wPNadR0fwmMEc6n3zH5gTKeww3sxLUhoWvkeTf8NkdmKARonUjunP4HTqZbXPNOzGpkJ02I%2BvbtdFenYWbkk4e%2FV4eeyL%2FsT80vAUwvBlBr5Rbab6srWYfriGvtsrtkuC4JAW3KPyHo9jpO647npsBNAg3diBIf5%2BMSDkIIjrym%2FPvEfXMhq%2BBCFc15dfu7D8BN1hDR%2B0kN158PoPoo3GuQvzmrribzzgDqfyUHKuSJQvTXDMO6Bcre108Wdp2hzizYnkWLXk1OrOhQRibameZLH1Ly9NxF01w%2BZP%2B%2BfQvC8bVyytSapmBt02Oc0femT2x3bxs0LMkTFrLhpNOdfQowT4Tcx%2F%2BB8Z3furPV%2Ba3%2BMPjuksEGOqUB3ZnJOF%2FO56qo9Ycxo%2FVA39hiOnN5GwIES%2BN%2Bk1rUliIEEz6f2mUVl%2FzvC%2F97drGShukHM88fl%2FTrdnJm72Vgy0wpehfltmM8r6J9rJLzgm0iTUChFm4Ns2tPx%2BlAzhQ6kJaXFeSQZziDCnyXM%2FwjyvoZUkvdNN0ukLGuHFNy%2B%2F%2B27q8sVtViddBsemFus5Xl9h9OpT1gCvQPWi47UG8fuQfNKrsi&X-Amz-Signature=d862c3d17183ad660e3beebf6246355c191de0e9de5fe85fcf7951e49026083d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367PZQ6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTSKS8BT47fv%2BO67es12u3GqbfiIq3rmpxdZzgU7Pa5QIgMtbdODptr13obx%2BYrai7u7iS3ikuFXh%2FE09hVpLapXkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNKJJsuQqyr%2BluDPdyrcA1S%2BB6Fs9J3p3sfl%2FoxYii0TYqpEAb36aruqjwKZLp8sEUiKtkw8iH9W8usL6tF5571fPo669vCE5d6a5%2FqjZuChUqgFT1MmXK5cjddesvCYv1RWv%2FVKvNLM6VcjjjVkE1blu5LZTdzCiB2W5HIsGq%2ByAzCDwqbALlOcLouSxwjk%2F2X1WTDLfuAq%2FtT%2BWIADAcqjzfjVNw2H0%2FPuBtSiWGHdUqGgslmyOGCMkBiqNdZv8%2FTFP2j9B0AXw7P2rygb1WrJAe0Rfvummlr12wPNadR0fwmMEc6n3zH5gTKeww3sxLUhoWvkeTf8NkdmKARonUjunP4HTqZbXPNOzGpkJ02I%2BvbtdFenYWbkk4e%2FV4eeyL%2FsT80vAUwvBlBr5Rbab6srWYfriGvtsrtkuC4JAW3KPyHo9jpO647npsBNAg3diBIf5%2BMSDkIIjrym%2FPvEfXMhq%2BBCFc15dfu7D8BN1hDR%2B0kN158PoPoo3GuQvzmrribzzgDqfyUHKuSJQvTXDMO6Bcre108Wdp2hzizYnkWLXk1OrOhQRibameZLH1Ly9NxF01w%2BZP%2B%2BfQvC8bVyytSapmBt02Oc0femT2x3bxs0LMkTFrLhpNOdfQowT4Tcx%2F%2BB8Z3furPV%2Ba3%2BMPjuksEGOqUB3ZnJOF%2FO56qo9Ycxo%2FVA39hiOnN5GwIES%2BN%2Bk1rUliIEEz6f2mUVl%2FzvC%2F97drGShukHM88fl%2FTrdnJm72Vgy0wpehfltmM8r6J9rJLzgm0iTUChFm4Ns2tPx%2BlAzhQ6kJaXFeSQZziDCnyXM%2FwjyvoZUkvdNN0ukLGuHFNy%2B%2F%2B27q8sVtViddBsemFus5Xl9h9OpT1gCvQPWi47UG8fuQfNKrsi&X-Amz-Signature=9a6cb7a8107022752e68f76b83ff0ea7be45f2c1cd3f5bf0bec071ca4b8ba12a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367PZQ6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTSKS8BT47fv%2BO67es12u3GqbfiIq3rmpxdZzgU7Pa5QIgMtbdODptr13obx%2BYrai7u7iS3ikuFXh%2FE09hVpLapXkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNKJJsuQqyr%2BluDPdyrcA1S%2BB6Fs9J3p3sfl%2FoxYii0TYqpEAb36aruqjwKZLp8sEUiKtkw8iH9W8usL6tF5571fPo669vCE5d6a5%2FqjZuChUqgFT1MmXK5cjddesvCYv1RWv%2FVKvNLM6VcjjjVkE1blu5LZTdzCiB2W5HIsGq%2ByAzCDwqbALlOcLouSxwjk%2F2X1WTDLfuAq%2FtT%2BWIADAcqjzfjVNw2H0%2FPuBtSiWGHdUqGgslmyOGCMkBiqNdZv8%2FTFP2j9B0AXw7P2rygb1WrJAe0Rfvummlr12wPNadR0fwmMEc6n3zH5gTKeww3sxLUhoWvkeTf8NkdmKARonUjunP4HTqZbXPNOzGpkJ02I%2BvbtdFenYWbkk4e%2FV4eeyL%2FsT80vAUwvBlBr5Rbab6srWYfriGvtsrtkuC4JAW3KPyHo9jpO647npsBNAg3diBIf5%2BMSDkIIjrym%2FPvEfXMhq%2BBCFc15dfu7D8BN1hDR%2B0kN158PoPoo3GuQvzmrribzzgDqfyUHKuSJQvTXDMO6Bcre108Wdp2hzizYnkWLXk1OrOhQRibameZLH1Ly9NxF01w%2BZP%2B%2BfQvC8bVyytSapmBt02Oc0femT2x3bxs0LMkTFrLhpNOdfQowT4Tcx%2F%2BB8Z3furPV%2Ba3%2BMPjuksEGOqUB3ZnJOF%2FO56qo9Ycxo%2FVA39hiOnN5GwIES%2BN%2Bk1rUliIEEz6f2mUVl%2FzvC%2F97drGShukHM88fl%2FTrdnJm72Vgy0wpehfltmM8r6J9rJLzgm0iTUChFm4Ns2tPx%2BlAzhQ6kJaXFeSQZziDCnyXM%2FwjyvoZUkvdNN0ukLGuHFNy%2B%2F%2B27q8sVtViddBsemFus5Xl9h9OpT1gCvQPWi47UG8fuQfNKrsi&X-Amz-Signature=51ff66057074c9518f3956104ed96d872ee1af5337642c05d4e8550cb3cb334d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367PZQ6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTSKS8BT47fv%2BO67es12u3GqbfiIq3rmpxdZzgU7Pa5QIgMtbdODptr13obx%2BYrai7u7iS3ikuFXh%2FE09hVpLapXkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNKJJsuQqyr%2BluDPdyrcA1S%2BB6Fs9J3p3sfl%2FoxYii0TYqpEAb36aruqjwKZLp8sEUiKtkw8iH9W8usL6tF5571fPo669vCE5d6a5%2FqjZuChUqgFT1MmXK5cjddesvCYv1RWv%2FVKvNLM6VcjjjVkE1blu5LZTdzCiB2W5HIsGq%2ByAzCDwqbALlOcLouSxwjk%2F2X1WTDLfuAq%2FtT%2BWIADAcqjzfjVNw2H0%2FPuBtSiWGHdUqGgslmyOGCMkBiqNdZv8%2FTFP2j9B0AXw7P2rygb1WrJAe0Rfvummlr12wPNadR0fwmMEc6n3zH5gTKeww3sxLUhoWvkeTf8NkdmKARonUjunP4HTqZbXPNOzGpkJ02I%2BvbtdFenYWbkk4e%2FV4eeyL%2FsT80vAUwvBlBr5Rbab6srWYfriGvtsrtkuC4JAW3KPyHo9jpO647npsBNAg3diBIf5%2BMSDkIIjrym%2FPvEfXMhq%2BBCFc15dfu7D8BN1hDR%2B0kN158PoPoo3GuQvzmrribzzgDqfyUHKuSJQvTXDMO6Bcre108Wdp2hzizYnkWLXk1OrOhQRibameZLH1Ly9NxF01w%2BZP%2B%2BfQvC8bVyytSapmBt02Oc0femT2x3bxs0LMkTFrLhpNOdfQowT4Tcx%2F%2BB8Z3furPV%2Ba3%2BMPjuksEGOqUB3ZnJOF%2FO56qo9Ycxo%2FVA39hiOnN5GwIES%2BN%2Bk1rUliIEEz6f2mUVl%2FzvC%2F97drGShukHM88fl%2FTrdnJm72Vgy0wpehfltmM8r6J9rJLzgm0iTUChFm4Ns2tPx%2BlAzhQ6kJaXFeSQZziDCnyXM%2FwjyvoZUkvdNN0ukLGuHFNy%2B%2F%2B27q8sVtViddBsemFus5Xl9h9OpT1gCvQPWi47UG8fuQfNKrsi&X-Amz-Signature=d239803ab8309f3bd2e1e6381605864d77b7b5bcd8701d3e1a870c4edc796507&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367PZQ6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTSKS8BT47fv%2BO67es12u3GqbfiIq3rmpxdZzgU7Pa5QIgMtbdODptr13obx%2BYrai7u7iS3ikuFXh%2FE09hVpLapXkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNKJJsuQqyr%2BluDPdyrcA1S%2BB6Fs9J3p3sfl%2FoxYii0TYqpEAb36aruqjwKZLp8sEUiKtkw8iH9W8usL6tF5571fPo669vCE5d6a5%2FqjZuChUqgFT1MmXK5cjddesvCYv1RWv%2FVKvNLM6VcjjjVkE1blu5LZTdzCiB2W5HIsGq%2ByAzCDwqbALlOcLouSxwjk%2F2X1WTDLfuAq%2FtT%2BWIADAcqjzfjVNw2H0%2FPuBtSiWGHdUqGgslmyOGCMkBiqNdZv8%2FTFP2j9B0AXw7P2rygb1WrJAe0Rfvummlr12wPNadR0fwmMEc6n3zH5gTKeww3sxLUhoWvkeTf8NkdmKARonUjunP4HTqZbXPNOzGpkJ02I%2BvbtdFenYWbkk4e%2FV4eeyL%2FsT80vAUwvBlBr5Rbab6srWYfriGvtsrtkuC4JAW3KPyHo9jpO647npsBNAg3diBIf5%2BMSDkIIjrym%2FPvEfXMhq%2BBCFc15dfu7D8BN1hDR%2B0kN158PoPoo3GuQvzmrribzzgDqfyUHKuSJQvTXDMO6Bcre108Wdp2hzizYnkWLXk1OrOhQRibameZLH1Ly9NxF01w%2BZP%2B%2BfQvC8bVyytSapmBt02Oc0femT2x3bxs0LMkTFrLhpNOdfQowT4Tcx%2F%2BB8Z3furPV%2Ba3%2BMPjuksEGOqUB3ZnJOF%2FO56qo9Ycxo%2FVA39hiOnN5GwIES%2BN%2Bk1rUliIEEz6f2mUVl%2FzvC%2F97drGShukHM88fl%2FTrdnJm72Vgy0wpehfltmM8r6J9rJLzgm0iTUChFm4Ns2tPx%2BlAzhQ6kJaXFeSQZziDCnyXM%2FwjyvoZUkvdNN0ukLGuHFNy%2B%2F%2B27q8sVtViddBsemFus5Xl9h9OpT1gCvQPWi47UG8fuQfNKrsi&X-Amz-Signature=6dde0a1cc3929ca477d31f11d823cdd04c34a202e431aecd38595cd93d9e7970&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367PZQ6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTSKS8BT47fv%2BO67es12u3GqbfiIq3rmpxdZzgU7Pa5QIgMtbdODptr13obx%2BYrai7u7iS3ikuFXh%2FE09hVpLapXkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNKJJsuQqyr%2BluDPdyrcA1S%2BB6Fs9J3p3sfl%2FoxYii0TYqpEAb36aruqjwKZLp8sEUiKtkw8iH9W8usL6tF5571fPo669vCE5d6a5%2FqjZuChUqgFT1MmXK5cjddesvCYv1RWv%2FVKvNLM6VcjjjVkE1blu5LZTdzCiB2W5HIsGq%2ByAzCDwqbALlOcLouSxwjk%2F2X1WTDLfuAq%2FtT%2BWIADAcqjzfjVNw2H0%2FPuBtSiWGHdUqGgslmyOGCMkBiqNdZv8%2FTFP2j9B0AXw7P2rygb1WrJAe0Rfvummlr12wPNadR0fwmMEc6n3zH5gTKeww3sxLUhoWvkeTf8NkdmKARonUjunP4HTqZbXPNOzGpkJ02I%2BvbtdFenYWbkk4e%2FV4eeyL%2FsT80vAUwvBlBr5Rbab6srWYfriGvtsrtkuC4JAW3KPyHo9jpO647npsBNAg3diBIf5%2BMSDkIIjrym%2FPvEfXMhq%2BBCFc15dfu7D8BN1hDR%2B0kN158PoPoo3GuQvzmrribzzgDqfyUHKuSJQvTXDMO6Bcre108Wdp2hzizYnkWLXk1OrOhQRibameZLH1Ly9NxF01w%2BZP%2B%2BfQvC8bVyytSapmBt02Oc0femT2x3bxs0LMkTFrLhpNOdfQowT4Tcx%2F%2BB8Z3furPV%2Ba3%2BMPjuksEGOqUB3ZnJOF%2FO56qo9Ycxo%2FVA39hiOnN5GwIES%2BN%2Bk1rUliIEEz6f2mUVl%2FzvC%2F97drGShukHM88fl%2FTrdnJm72Vgy0wpehfltmM8r6J9rJLzgm0iTUChFm4Ns2tPx%2BlAzhQ6kJaXFeSQZziDCnyXM%2FwjyvoZUkvdNN0ukLGuHFNy%2B%2F%2B27q8sVtViddBsemFus5Xl9h9OpT1gCvQPWi47UG8fuQfNKrsi&X-Amz-Signature=6f5d6d9fe8cbbe17bcacda658e1719a66ea2c696af54ab0b9d3b5513f85b873d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367PZQ6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTSKS8BT47fv%2BO67es12u3GqbfiIq3rmpxdZzgU7Pa5QIgMtbdODptr13obx%2BYrai7u7iS3ikuFXh%2FE09hVpLapXkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNKJJsuQqyr%2BluDPdyrcA1S%2BB6Fs9J3p3sfl%2FoxYii0TYqpEAb36aruqjwKZLp8sEUiKtkw8iH9W8usL6tF5571fPo669vCE5d6a5%2FqjZuChUqgFT1MmXK5cjddesvCYv1RWv%2FVKvNLM6VcjjjVkE1blu5LZTdzCiB2W5HIsGq%2ByAzCDwqbALlOcLouSxwjk%2F2X1WTDLfuAq%2FtT%2BWIADAcqjzfjVNw2H0%2FPuBtSiWGHdUqGgslmyOGCMkBiqNdZv8%2FTFP2j9B0AXw7P2rygb1WrJAe0Rfvummlr12wPNadR0fwmMEc6n3zH5gTKeww3sxLUhoWvkeTf8NkdmKARonUjunP4HTqZbXPNOzGpkJ02I%2BvbtdFenYWbkk4e%2FV4eeyL%2FsT80vAUwvBlBr5Rbab6srWYfriGvtsrtkuC4JAW3KPyHo9jpO647npsBNAg3diBIf5%2BMSDkIIjrym%2FPvEfXMhq%2BBCFc15dfu7D8BN1hDR%2B0kN158PoPoo3GuQvzmrribzzgDqfyUHKuSJQvTXDMO6Bcre108Wdp2hzizYnkWLXk1OrOhQRibameZLH1Ly9NxF01w%2BZP%2B%2BfQvC8bVyytSapmBt02Oc0femT2x3bxs0LMkTFrLhpNOdfQowT4Tcx%2F%2BB8Z3furPV%2Ba3%2BMPjuksEGOqUB3ZnJOF%2FO56qo9Ycxo%2FVA39hiOnN5GwIES%2BN%2Bk1rUliIEEz6f2mUVl%2FzvC%2F97drGShukHM88fl%2FTrdnJm72Vgy0wpehfltmM8r6J9rJLzgm0iTUChFm4Ns2tPx%2BlAzhQ6kJaXFeSQZziDCnyXM%2FwjyvoZUkvdNN0ukLGuHFNy%2B%2F%2B27q8sVtViddBsemFus5Xl9h9OpT1gCvQPWi47UG8fuQfNKrsi&X-Amz-Signature=37d7103dfd3854693430c4d4f547024846b9d6c496b7388d5401171fd0d8fab7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367PZQ6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTSKS8BT47fv%2BO67es12u3GqbfiIq3rmpxdZzgU7Pa5QIgMtbdODptr13obx%2BYrai7u7iS3ikuFXh%2FE09hVpLapXkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNKJJsuQqyr%2BluDPdyrcA1S%2BB6Fs9J3p3sfl%2FoxYii0TYqpEAb36aruqjwKZLp8sEUiKtkw8iH9W8usL6tF5571fPo669vCE5d6a5%2FqjZuChUqgFT1MmXK5cjddesvCYv1RWv%2FVKvNLM6VcjjjVkE1blu5LZTdzCiB2W5HIsGq%2ByAzCDwqbALlOcLouSxwjk%2F2X1WTDLfuAq%2FtT%2BWIADAcqjzfjVNw2H0%2FPuBtSiWGHdUqGgslmyOGCMkBiqNdZv8%2FTFP2j9B0AXw7P2rygb1WrJAe0Rfvummlr12wPNadR0fwmMEc6n3zH5gTKeww3sxLUhoWvkeTf8NkdmKARonUjunP4HTqZbXPNOzGpkJ02I%2BvbtdFenYWbkk4e%2FV4eeyL%2FsT80vAUwvBlBr5Rbab6srWYfriGvtsrtkuC4JAW3KPyHo9jpO647npsBNAg3diBIf5%2BMSDkIIjrym%2FPvEfXMhq%2BBCFc15dfu7D8BN1hDR%2B0kN158PoPoo3GuQvzmrribzzgDqfyUHKuSJQvTXDMO6Bcre108Wdp2hzizYnkWLXk1OrOhQRibameZLH1Ly9NxF01w%2BZP%2B%2BfQvC8bVyytSapmBt02Oc0femT2x3bxs0LMkTFrLhpNOdfQowT4Tcx%2F%2BB8Z3furPV%2Ba3%2BMPjuksEGOqUB3ZnJOF%2FO56qo9Ycxo%2FVA39hiOnN5GwIES%2BN%2Bk1rUliIEEz6f2mUVl%2FzvC%2F97drGShukHM88fl%2FTrdnJm72Vgy0wpehfltmM8r6J9rJLzgm0iTUChFm4Ns2tPx%2BlAzhQ6kJaXFeSQZziDCnyXM%2FwjyvoZUkvdNN0ukLGuHFNy%2B%2F%2B27q8sVtViddBsemFus5Xl9h9OpT1gCvQPWi47UG8fuQfNKrsi&X-Amz-Signature=e375573f70746d4a8e39b607c48ee85c89587ed51770428df9a3abeb982504ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

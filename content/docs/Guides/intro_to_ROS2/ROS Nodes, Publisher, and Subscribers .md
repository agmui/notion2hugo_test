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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO73KOIT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFF2YJ6zHqJImzXIQ4UudV1p0yq%2FqpySeIa4nmOR96iiAiEAxHr%2BgpWlhSQth1nEC0fg1Mkm1ZBaR%2BpujZPMnVpkGXwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJsAgHL%2BRDdbTEEJ5CrcA3gMNGygJZQiXkgEAlGLo%2FiGY0qDcdXwScD9kdPYOR4Q70wpIyP9wVZIPsyXi6O5rK7Q6FKUO6%2FXWhQ2Trc6fGOzf64creSV2weonp2LqdiPt9xsg8rvdIhmSccbex5uL6UwmIdieVeHbP5fNINk7UpJmxMtdWyJeCrXSG9kUrYu%2BkcWRp53LxVsdto%2BoC9GoP%2BboJosoSBH%2BAhGmvHXHPSOcsvw6WgBrIj%2FmOf%2F%2Bl%2Blwy1AvLCdrXYRFewP9FsD9IFCMivd7RO2cLlZANJXVm%2B4acQYcqJCRf3Gd0J7lHJC7thsMai9xUE%2FypYCFCIPXc44aQa0edGafEUkpSjcUsu%2FJQRxAWp1WUkcJXY34Wo17Ofsilhx4RXlIoBJELMnYlesjW%2Fn38KhzaoIOv9rxOJ5YVQ26t3XUKXcvQsHfaWOdyw%2Bwaf%2BbjbRj9lKtjOdkor4k5Hi83wkKL9rcsG8EDQU5yRCllVypafgrVvj5tTCurrvuOmoDLUrRLGyDKmZTQ0we1AXlx0c7MxDDEqqUlvNSwx82TU0v0ZpFIfatVQ0npnk7W3zu%2Bq5hIazxGvIPa%2Fhk3Muo4CMMklivYDS6bXnIZ5DW9aWLuCKPvkzU%2FXFG40o3470rQ2L57S1MM6t9b0GOqUBMYe6BxRwEui638CNhlhPzve3oETkA5FUDWehNlbenlI0LN7x2N3bYLGfKrvNgDpUchYEQrYfiv7YANGuaOY%2B3hc75cMcsKR75x3pObdExMr7uGWhKWfylP1TCmo7ISTuxcu%2FEa0kSS3MaX81FarIdwRXls1by17um4gzYIVf6mP734heMC3C%2Bxy%2BdTdM72gqfjehElPDCsM0USETUKlqBbxYFj18&X-Amz-Signature=7e57c616bbf09698f31cde209f9800fcae9285b8ea149b51c06d68528759bb42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO73KOIT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFF2YJ6zHqJImzXIQ4UudV1p0yq%2FqpySeIa4nmOR96iiAiEAxHr%2BgpWlhSQth1nEC0fg1Mkm1ZBaR%2BpujZPMnVpkGXwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJsAgHL%2BRDdbTEEJ5CrcA3gMNGygJZQiXkgEAlGLo%2FiGY0qDcdXwScD9kdPYOR4Q70wpIyP9wVZIPsyXi6O5rK7Q6FKUO6%2FXWhQ2Trc6fGOzf64creSV2weonp2LqdiPt9xsg8rvdIhmSccbex5uL6UwmIdieVeHbP5fNINk7UpJmxMtdWyJeCrXSG9kUrYu%2BkcWRp53LxVsdto%2BoC9GoP%2BboJosoSBH%2BAhGmvHXHPSOcsvw6WgBrIj%2FmOf%2F%2Bl%2Blwy1AvLCdrXYRFewP9FsD9IFCMivd7RO2cLlZANJXVm%2B4acQYcqJCRf3Gd0J7lHJC7thsMai9xUE%2FypYCFCIPXc44aQa0edGafEUkpSjcUsu%2FJQRxAWp1WUkcJXY34Wo17Ofsilhx4RXlIoBJELMnYlesjW%2Fn38KhzaoIOv9rxOJ5YVQ26t3XUKXcvQsHfaWOdyw%2Bwaf%2BbjbRj9lKtjOdkor4k5Hi83wkKL9rcsG8EDQU5yRCllVypafgrVvj5tTCurrvuOmoDLUrRLGyDKmZTQ0we1AXlx0c7MxDDEqqUlvNSwx82TU0v0ZpFIfatVQ0npnk7W3zu%2Bq5hIazxGvIPa%2Fhk3Muo4CMMklivYDS6bXnIZ5DW9aWLuCKPvkzU%2FXFG40o3470rQ2L57S1MM6t9b0GOqUBMYe6BxRwEui638CNhlhPzve3oETkA5FUDWehNlbenlI0LN7x2N3bYLGfKrvNgDpUchYEQrYfiv7YANGuaOY%2B3hc75cMcsKR75x3pObdExMr7uGWhKWfylP1TCmo7ISTuxcu%2FEa0kSS3MaX81FarIdwRXls1by17um4gzYIVf6mP734heMC3C%2Bxy%2BdTdM72gqfjehElPDCsM0USETUKlqBbxYFj18&X-Amz-Signature=12b4cfa4ec2e30f32f60541cdb4a95491b5b25e587c697cec91f4ab611b46fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO73KOIT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFF2YJ6zHqJImzXIQ4UudV1p0yq%2FqpySeIa4nmOR96iiAiEAxHr%2BgpWlhSQth1nEC0fg1Mkm1ZBaR%2BpujZPMnVpkGXwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJsAgHL%2BRDdbTEEJ5CrcA3gMNGygJZQiXkgEAlGLo%2FiGY0qDcdXwScD9kdPYOR4Q70wpIyP9wVZIPsyXi6O5rK7Q6FKUO6%2FXWhQ2Trc6fGOzf64creSV2weonp2LqdiPt9xsg8rvdIhmSccbex5uL6UwmIdieVeHbP5fNINk7UpJmxMtdWyJeCrXSG9kUrYu%2BkcWRp53LxVsdto%2BoC9GoP%2BboJosoSBH%2BAhGmvHXHPSOcsvw6WgBrIj%2FmOf%2F%2Bl%2Blwy1AvLCdrXYRFewP9FsD9IFCMivd7RO2cLlZANJXVm%2B4acQYcqJCRf3Gd0J7lHJC7thsMai9xUE%2FypYCFCIPXc44aQa0edGafEUkpSjcUsu%2FJQRxAWp1WUkcJXY34Wo17Ofsilhx4RXlIoBJELMnYlesjW%2Fn38KhzaoIOv9rxOJ5YVQ26t3XUKXcvQsHfaWOdyw%2Bwaf%2BbjbRj9lKtjOdkor4k5Hi83wkKL9rcsG8EDQU5yRCllVypafgrVvj5tTCurrvuOmoDLUrRLGyDKmZTQ0we1AXlx0c7MxDDEqqUlvNSwx82TU0v0ZpFIfatVQ0npnk7W3zu%2Bq5hIazxGvIPa%2Fhk3Muo4CMMklivYDS6bXnIZ5DW9aWLuCKPvkzU%2FXFG40o3470rQ2L57S1MM6t9b0GOqUBMYe6BxRwEui638CNhlhPzve3oETkA5FUDWehNlbenlI0LN7x2N3bYLGfKrvNgDpUchYEQrYfiv7YANGuaOY%2B3hc75cMcsKR75x3pObdExMr7uGWhKWfylP1TCmo7ISTuxcu%2FEa0kSS3MaX81FarIdwRXls1by17um4gzYIVf6mP734heMC3C%2Bxy%2BdTdM72gqfjehElPDCsM0USETUKlqBbxYFj18&X-Amz-Signature=e8306e06d63e6af1228b557eba4a2bbd6cd37cdc7a014c015a96c9452b34917c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO73KOIT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFF2YJ6zHqJImzXIQ4UudV1p0yq%2FqpySeIa4nmOR96iiAiEAxHr%2BgpWlhSQth1nEC0fg1Mkm1ZBaR%2BpujZPMnVpkGXwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJsAgHL%2BRDdbTEEJ5CrcA3gMNGygJZQiXkgEAlGLo%2FiGY0qDcdXwScD9kdPYOR4Q70wpIyP9wVZIPsyXi6O5rK7Q6FKUO6%2FXWhQ2Trc6fGOzf64creSV2weonp2LqdiPt9xsg8rvdIhmSccbex5uL6UwmIdieVeHbP5fNINk7UpJmxMtdWyJeCrXSG9kUrYu%2BkcWRp53LxVsdto%2BoC9GoP%2BboJosoSBH%2BAhGmvHXHPSOcsvw6WgBrIj%2FmOf%2F%2Bl%2Blwy1AvLCdrXYRFewP9FsD9IFCMivd7RO2cLlZANJXVm%2B4acQYcqJCRf3Gd0J7lHJC7thsMai9xUE%2FypYCFCIPXc44aQa0edGafEUkpSjcUsu%2FJQRxAWp1WUkcJXY34Wo17Ofsilhx4RXlIoBJELMnYlesjW%2Fn38KhzaoIOv9rxOJ5YVQ26t3XUKXcvQsHfaWOdyw%2Bwaf%2BbjbRj9lKtjOdkor4k5Hi83wkKL9rcsG8EDQU5yRCllVypafgrVvj5tTCurrvuOmoDLUrRLGyDKmZTQ0we1AXlx0c7MxDDEqqUlvNSwx82TU0v0ZpFIfatVQ0npnk7W3zu%2Bq5hIazxGvIPa%2Fhk3Muo4CMMklivYDS6bXnIZ5DW9aWLuCKPvkzU%2FXFG40o3470rQ2L57S1MM6t9b0GOqUBMYe6BxRwEui638CNhlhPzve3oETkA5FUDWehNlbenlI0LN7x2N3bYLGfKrvNgDpUchYEQrYfiv7YANGuaOY%2B3hc75cMcsKR75x3pObdExMr7uGWhKWfylP1TCmo7ISTuxcu%2FEa0kSS3MaX81FarIdwRXls1by17um4gzYIVf6mP734heMC3C%2Bxy%2BdTdM72gqfjehElPDCsM0USETUKlqBbxYFj18&X-Amz-Signature=73c729548b187026f312f7e39623cbe6e2f5a50275fd371f036565b18c1a7b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO73KOIT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFF2YJ6zHqJImzXIQ4UudV1p0yq%2FqpySeIa4nmOR96iiAiEAxHr%2BgpWlhSQth1nEC0fg1Mkm1ZBaR%2BpujZPMnVpkGXwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJsAgHL%2BRDdbTEEJ5CrcA3gMNGygJZQiXkgEAlGLo%2FiGY0qDcdXwScD9kdPYOR4Q70wpIyP9wVZIPsyXi6O5rK7Q6FKUO6%2FXWhQ2Trc6fGOzf64creSV2weonp2LqdiPt9xsg8rvdIhmSccbex5uL6UwmIdieVeHbP5fNINk7UpJmxMtdWyJeCrXSG9kUrYu%2BkcWRp53LxVsdto%2BoC9GoP%2BboJosoSBH%2BAhGmvHXHPSOcsvw6WgBrIj%2FmOf%2F%2Bl%2Blwy1AvLCdrXYRFewP9FsD9IFCMivd7RO2cLlZANJXVm%2B4acQYcqJCRf3Gd0J7lHJC7thsMai9xUE%2FypYCFCIPXc44aQa0edGafEUkpSjcUsu%2FJQRxAWp1WUkcJXY34Wo17Ofsilhx4RXlIoBJELMnYlesjW%2Fn38KhzaoIOv9rxOJ5YVQ26t3XUKXcvQsHfaWOdyw%2Bwaf%2BbjbRj9lKtjOdkor4k5Hi83wkKL9rcsG8EDQU5yRCllVypafgrVvj5tTCurrvuOmoDLUrRLGyDKmZTQ0we1AXlx0c7MxDDEqqUlvNSwx82TU0v0ZpFIfatVQ0npnk7W3zu%2Bq5hIazxGvIPa%2Fhk3Muo4CMMklivYDS6bXnIZ5DW9aWLuCKPvkzU%2FXFG40o3470rQ2L57S1MM6t9b0GOqUBMYe6BxRwEui638CNhlhPzve3oETkA5FUDWehNlbenlI0LN7x2N3bYLGfKrvNgDpUchYEQrYfiv7YANGuaOY%2B3hc75cMcsKR75x3pObdExMr7uGWhKWfylP1TCmo7ISTuxcu%2FEa0kSS3MaX81FarIdwRXls1by17um4gzYIVf6mP734heMC3C%2Bxy%2BdTdM72gqfjehElPDCsM0USETUKlqBbxYFj18&X-Amz-Signature=168550a664ee6657310d71aa698c0b533b3925de48570335c779b3bdb6572177&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO73KOIT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFF2YJ6zHqJImzXIQ4UudV1p0yq%2FqpySeIa4nmOR96iiAiEAxHr%2BgpWlhSQth1nEC0fg1Mkm1ZBaR%2BpujZPMnVpkGXwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJsAgHL%2BRDdbTEEJ5CrcA3gMNGygJZQiXkgEAlGLo%2FiGY0qDcdXwScD9kdPYOR4Q70wpIyP9wVZIPsyXi6O5rK7Q6FKUO6%2FXWhQ2Trc6fGOzf64creSV2weonp2LqdiPt9xsg8rvdIhmSccbex5uL6UwmIdieVeHbP5fNINk7UpJmxMtdWyJeCrXSG9kUrYu%2BkcWRp53LxVsdto%2BoC9GoP%2BboJosoSBH%2BAhGmvHXHPSOcsvw6WgBrIj%2FmOf%2F%2Bl%2Blwy1AvLCdrXYRFewP9FsD9IFCMivd7RO2cLlZANJXVm%2B4acQYcqJCRf3Gd0J7lHJC7thsMai9xUE%2FypYCFCIPXc44aQa0edGafEUkpSjcUsu%2FJQRxAWp1WUkcJXY34Wo17Ofsilhx4RXlIoBJELMnYlesjW%2Fn38KhzaoIOv9rxOJ5YVQ26t3XUKXcvQsHfaWOdyw%2Bwaf%2BbjbRj9lKtjOdkor4k5Hi83wkKL9rcsG8EDQU5yRCllVypafgrVvj5tTCurrvuOmoDLUrRLGyDKmZTQ0we1AXlx0c7MxDDEqqUlvNSwx82TU0v0ZpFIfatVQ0npnk7W3zu%2Bq5hIazxGvIPa%2Fhk3Muo4CMMklivYDS6bXnIZ5DW9aWLuCKPvkzU%2FXFG40o3470rQ2L57S1MM6t9b0GOqUBMYe6BxRwEui638CNhlhPzve3oETkA5FUDWehNlbenlI0LN7x2N3bYLGfKrvNgDpUchYEQrYfiv7YANGuaOY%2B3hc75cMcsKR75x3pObdExMr7uGWhKWfylP1TCmo7ISTuxcu%2FEa0kSS3MaX81FarIdwRXls1by17um4gzYIVf6mP734heMC3C%2Bxy%2BdTdM72gqfjehElPDCsM0USETUKlqBbxYFj18&X-Amz-Signature=45bba18bd1933440d9f0b2fcbae9b684f76ceb7939196f3c6330edfde2df6dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO73KOIT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFF2YJ6zHqJImzXIQ4UudV1p0yq%2FqpySeIa4nmOR96iiAiEAxHr%2BgpWlhSQth1nEC0fg1Mkm1ZBaR%2BpujZPMnVpkGXwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJsAgHL%2BRDdbTEEJ5CrcA3gMNGygJZQiXkgEAlGLo%2FiGY0qDcdXwScD9kdPYOR4Q70wpIyP9wVZIPsyXi6O5rK7Q6FKUO6%2FXWhQ2Trc6fGOzf64creSV2weonp2LqdiPt9xsg8rvdIhmSccbex5uL6UwmIdieVeHbP5fNINk7UpJmxMtdWyJeCrXSG9kUrYu%2BkcWRp53LxVsdto%2BoC9GoP%2BboJosoSBH%2BAhGmvHXHPSOcsvw6WgBrIj%2FmOf%2F%2Bl%2Blwy1AvLCdrXYRFewP9FsD9IFCMivd7RO2cLlZANJXVm%2B4acQYcqJCRf3Gd0J7lHJC7thsMai9xUE%2FypYCFCIPXc44aQa0edGafEUkpSjcUsu%2FJQRxAWp1WUkcJXY34Wo17Ofsilhx4RXlIoBJELMnYlesjW%2Fn38KhzaoIOv9rxOJ5YVQ26t3XUKXcvQsHfaWOdyw%2Bwaf%2BbjbRj9lKtjOdkor4k5Hi83wkKL9rcsG8EDQU5yRCllVypafgrVvj5tTCurrvuOmoDLUrRLGyDKmZTQ0we1AXlx0c7MxDDEqqUlvNSwx82TU0v0ZpFIfatVQ0npnk7W3zu%2Bq5hIazxGvIPa%2Fhk3Muo4CMMklivYDS6bXnIZ5DW9aWLuCKPvkzU%2FXFG40o3470rQ2L57S1MM6t9b0GOqUBMYe6BxRwEui638CNhlhPzve3oETkA5FUDWehNlbenlI0LN7x2N3bYLGfKrvNgDpUchYEQrYfiv7YANGuaOY%2B3hc75cMcsKR75x3pObdExMr7uGWhKWfylP1TCmo7ISTuxcu%2FEa0kSS3MaX81FarIdwRXls1by17um4gzYIVf6mP734heMC3C%2Bxy%2BdTdM72gqfjehElPDCsM0USETUKlqBbxYFj18&X-Amz-Signature=346df6ba0d7f518de8f3e6a3c08f6d7acc8cf05cd38928e746492a6c8a91239b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO73KOIT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFF2YJ6zHqJImzXIQ4UudV1p0yq%2FqpySeIa4nmOR96iiAiEAxHr%2BgpWlhSQth1nEC0fg1Mkm1ZBaR%2BpujZPMnVpkGXwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJsAgHL%2BRDdbTEEJ5CrcA3gMNGygJZQiXkgEAlGLo%2FiGY0qDcdXwScD9kdPYOR4Q70wpIyP9wVZIPsyXi6O5rK7Q6FKUO6%2FXWhQ2Trc6fGOzf64creSV2weonp2LqdiPt9xsg8rvdIhmSccbex5uL6UwmIdieVeHbP5fNINk7UpJmxMtdWyJeCrXSG9kUrYu%2BkcWRp53LxVsdto%2BoC9GoP%2BboJosoSBH%2BAhGmvHXHPSOcsvw6WgBrIj%2FmOf%2F%2Bl%2Blwy1AvLCdrXYRFewP9FsD9IFCMivd7RO2cLlZANJXVm%2B4acQYcqJCRf3Gd0J7lHJC7thsMai9xUE%2FypYCFCIPXc44aQa0edGafEUkpSjcUsu%2FJQRxAWp1WUkcJXY34Wo17Ofsilhx4RXlIoBJELMnYlesjW%2Fn38KhzaoIOv9rxOJ5YVQ26t3XUKXcvQsHfaWOdyw%2Bwaf%2BbjbRj9lKtjOdkor4k5Hi83wkKL9rcsG8EDQU5yRCllVypafgrVvj5tTCurrvuOmoDLUrRLGyDKmZTQ0we1AXlx0c7MxDDEqqUlvNSwx82TU0v0ZpFIfatVQ0npnk7W3zu%2Bq5hIazxGvIPa%2Fhk3Muo4CMMklivYDS6bXnIZ5DW9aWLuCKPvkzU%2FXFG40o3470rQ2L57S1MM6t9b0GOqUBMYe6BxRwEui638CNhlhPzve3oETkA5FUDWehNlbenlI0LN7x2N3bYLGfKrvNgDpUchYEQrYfiv7YANGuaOY%2B3hc75cMcsKR75x3pObdExMr7uGWhKWfylP1TCmo7ISTuxcu%2FEa0kSS3MaX81FarIdwRXls1by17um4gzYIVf6mP734heMC3C%2Bxy%2BdTdM72gqfjehElPDCsM0USETUKlqBbxYFj18&X-Amz-Signature=849524e51628bf16b879db5b46db2d0cc948f4fd9cb50c016dfcd7a3c715b233&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

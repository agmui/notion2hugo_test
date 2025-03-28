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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FCFZYK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA0lj2qdajWNzLd0WZxY2eII1d7iNLxkcUlaLaBk5FmAiEAzF%2FJuWP9f8YhqaAG8lOxmZ%2Ff%2FIErF2b4Px2llHsFhuQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtHxpWZUpwySe9WSCrcAy5gtRTd3IR5FsBHZjQry33tQwagDLFWaFWDm5zptPBbaaIIy5P7tuqa8A7ZHTYal06nUona7st%2B00mS3zonXTgXCERa6GbL2RQp3WaWbghj4VtHVzFJKNYa2RNtiYyPIrPlhGXoBJqSdH0bNEGSi2sCZkHM6%2Fo0wu8n5y5M1CpCc4BokyJxNCFab9jLEgu1jhyCNL9HVyItw3NxPU7BCohAbCGEyIDPIi%2BZVWtgLyeemq%2FtodgnG4pY9PWv5C4haUuURbYi3mSLtuhv8NdmP6zp3FJM3p9GxL8qCW4qEI3cJwjEzsl9rcz3hjbs%2BI7Z7tUgsPz1VryXoQq61ic3PEazo9v6MABPIn5ju6lCoExGPpuBK1WlfgPYo2bVDNO%2FyN8oUxvRrKU3qPe92nmezhzqKO%2FMnlQLTrcRtIa8CGxlTq%2BmcNZHD2%2FXB95YM9c8S3r2kq%2BTLJu7ffqsnMWFIFFcmLp21Dnm0Le%2B70wXl3SGKBsy%2FLfph7FRMx3Pxw4En9di4Q3tF32Muc6iwrz632jk1GGiax7KotNMHpv5M0XCLIrEXL2rz%2FR9HLVN3V4Gfma471gweX%2FxyxHuPj3qe2bZZDb1EjNZrBgBlvBdFGObSaMEMqTXbm8Xyu6QMKmGmb8GOqUBP1A8G7voAR30uR9es5E%2B%2BqmHdxfPaihrN13hqda7eeSXwu%2FSbR9BwdmPgWtZIpQSmg8ydn6V%2BkVPWzYsNjABMGQgIZlMi1QBA7nvS6mUJcMYs3qPVCl1I6Ft2Syrqz2F6AE7M9Z5q%2FZUje6Hw79HQE4lRm8nztXHFNrZulACF0qOczajwr8TmFl88qWm1LfT2ZSHpTfMaMUTTLvBvofbHkJu1zf9&X-Amz-Signature=559a9df6b4266f6269bacf2e680145024edf67867caad1c8c69044581bd38139&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FCFZYK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA0lj2qdajWNzLd0WZxY2eII1d7iNLxkcUlaLaBk5FmAiEAzF%2FJuWP9f8YhqaAG8lOxmZ%2Ff%2FIErF2b4Px2llHsFhuQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtHxpWZUpwySe9WSCrcAy5gtRTd3IR5FsBHZjQry33tQwagDLFWaFWDm5zptPBbaaIIy5P7tuqa8A7ZHTYal06nUona7st%2B00mS3zonXTgXCERa6GbL2RQp3WaWbghj4VtHVzFJKNYa2RNtiYyPIrPlhGXoBJqSdH0bNEGSi2sCZkHM6%2Fo0wu8n5y5M1CpCc4BokyJxNCFab9jLEgu1jhyCNL9HVyItw3NxPU7BCohAbCGEyIDPIi%2BZVWtgLyeemq%2FtodgnG4pY9PWv5C4haUuURbYi3mSLtuhv8NdmP6zp3FJM3p9GxL8qCW4qEI3cJwjEzsl9rcz3hjbs%2BI7Z7tUgsPz1VryXoQq61ic3PEazo9v6MABPIn5ju6lCoExGPpuBK1WlfgPYo2bVDNO%2FyN8oUxvRrKU3qPe92nmezhzqKO%2FMnlQLTrcRtIa8CGxlTq%2BmcNZHD2%2FXB95YM9c8S3r2kq%2BTLJu7ffqsnMWFIFFcmLp21Dnm0Le%2B70wXl3SGKBsy%2FLfph7FRMx3Pxw4En9di4Q3tF32Muc6iwrz632jk1GGiax7KotNMHpv5M0XCLIrEXL2rz%2FR9HLVN3V4Gfma471gweX%2FxyxHuPj3qe2bZZDb1EjNZrBgBlvBdFGObSaMEMqTXbm8Xyu6QMKmGmb8GOqUBP1A8G7voAR30uR9es5E%2B%2BqmHdxfPaihrN13hqda7eeSXwu%2FSbR9BwdmPgWtZIpQSmg8ydn6V%2BkVPWzYsNjABMGQgIZlMi1QBA7nvS6mUJcMYs3qPVCl1I6Ft2Syrqz2F6AE7M9Z5q%2FZUje6Hw79HQE4lRm8nztXHFNrZulACF0qOczajwr8TmFl88qWm1LfT2ZSHpTfMaMUTTLvBvofbHkJu1zf9&X-Amz-Signature=9e46a370321ca9ab6038722dd7c07e15beacc69a63f5153d361a9edb1c579cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FCFZYK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA0lj2qdajWNzLd0WZxY2eII1d7iNLxkcUlaLaBk5FmAiEAzF%2FJuWP9f8YhqaAG8lOxmZ%2Ff%2FIErF2b4Px2llHsFhuQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtHxpWZUpwySe9WSCrcAy5gtRTd3IR5FsBHZjQry33tQwagDLFWaFWDm5zptPBbaaIIy5P7tuqa8A7ZHTYal06nUona7st%2B00mS3zonXTgXCERa6GbL2RQp3WaWbghj4VtHVzFJKNYa2RNtiYyPIrPlhGXoBJqSdH0bNEGSi2sCZkHM6%2Fo0wu8n5y5M1CpCc4BokyJxNCFab9jLEgu1jhyCNL9HVyItw3NxPU7BCohAbCGEyIDPIi%2BZVWtgLyeemq%2FtodgnG4pY9PWv5C4haUuURbYi3mSLtuhv8NdmP6zp3FJM3p9GxL8qCW4qEI3cJwjEzsl9rcz3hjbs%2BI7Z7tUgsPz1VryXoQq61ic3PEazo9v6MABPIn5ju6lCoExGPpuBK1WlfgPYo2bVDNO%2FyN8oUxvRrKU3qPe92nmezhzqKO%2FMnlQLTrcRtIa8CGxlTq%2BmcNZHD2%2FXB95YM9c8S3r2kq%2BTLJu7ffqsnMWFIFFcmLp21Dnm0Le%2B70wXl3SGKBsy%2FLfph7FRMx3Pxw4En9di4Q3tF32Muc6iwrz632jk1GGiax7KotNMHpv5M0XCLIrEXL2rz%2FR9HLVN3V4Gfma471gweX%2FxyxHuPj3qe2bZZDb1EjNZrBgBlvBdFGObSaMEMqTXbm8Xyu6QMKmGmb8GOqUBP1A8G7voAR30uR9es5E%2B%2BqmHdxfPaihrN13hqda7eeSXwu%2FSbR9BwdmPgWtZIpQSmg8ydn6V%2BkVPWzYsNjABMGQgIZlMi1QBA7nvS6mUJcMYs3qPVCl1I6Ft2Syrqz2F6AE7M9Z5q%2FZUje6Hw79HQE4lRm8nztXHFNrZulACF0qOczajwr8TmFl88qWm1LfT2ZSHpTfMaMUTTLvBvofbHkJu1zf9&X-Amz-Signature=3d7b0212e6388fef2ac92bcec602e2a61803c1f3275ea9b07d17b9f35dceeb9e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FCFZYK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA0lj2qdajWNzLd0WZxY2eII1d7iNLxkcUlaLaBk5FmAiEAzF%2FJuWP9f8YhqaAG8lOxmZ%2Ff%2FIErF2b4Px2llHsFhuQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtHxpWZUpwySe9WSCrcAy5gtRTd3IR5FsBHZjQry33tQwagDLFWaFWDm5zptPBbaaIIy5P7tuqa8A7ZHTYal06nUona7st%2B00mS3zonXTgXCERa6GbL2RQp3WaWbghj4VtHVzFJKNYa2RNtiYyPIrPlhGXoBJqSdH0bNEGSi2sCZkHM6%2Fo0wu8n5y5M1CpCc4BokyJxNCFab9jLEgu1jhyCNL9HVyItw3NxPU7BCohAbCGEyIDPIi%2BZVWtgLyeemq%2FtodgnG4pY9PWv5C4haUuURbYi3mSLtuhv8NdmP6zp3FJM3p9GxL8qCW4qEI3cJwjEzsl9rcz3hjbs%2BI7Z7tUgsPz1VryXoQq61ic3PEazo9v6MABPIn5ju6lCoExGPpuBK1WlfgPYo2bVDNO%2FyN8oUxvRrKU3qPe92nmezhzqKO%2FMnlQLTrcRtIa8CGxlTq%2BmcNZHD2%2FXB95YM9c8S3r2kq%2BTLJu7ffqsnMWFIFFcmLp21Dnm0Le%2B70wXl3SGKBsy%2FLfph7FRMx3Pxw4En9di4Q3tF32Muc6iwrz632jk1GGiax7KotNMHpv5M0XCLIrEXL2rz%2FR9HLVN3V4Gfma471gweX%2FxyxHuPj3qe2bZZDb1EjNZrBgBlvBdFGObSaMEMqTXbm8Xyu6QMKmGmb8GOqUBP1A8G7voAR30uR9es5E%2B%2BqmHdxfPaihrN13hqda7eeSXwu%2FSbR9BwdmPgWtZIpQSmg8ydn6V%2BkVPWzYsNjABMGQgIZlMi1QBA7nvS6mUJcMYs3qPVCl1I6Ft2Syrqz2F6AE7M9Z5q%2FZUje6Hw79HQE4lRm8nztXHFNrZulACF0qOczajwr8TmFl88qWm1LfT2ZSHpTfMaMUTTLvBvofbHkJu1zf9&X-Amz-Signature=825b242c72ca96597e924050df108f23e6e5f740236e5f69f38471c749c5e1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FCFZYK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA0lj2qdajWNzLd0WZxY2eII1d7iNLxkcUlaLaBk5FmAiEAzF%2FJuWP9f8YhqaAG8lOxmZ%2Ff%2FIErF2b4Px2llHsFhuQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtHxpWZUpwySe9WSCrcAy5gtRTd3IR5FsBHZjQry33tQwagDLFWaFWDm5zptPBbaaIIy5P7tuqa8A7ZHTYal06nUona7st%2B00mS3zonXTgXCERa6GbL2RQp3WaWbghj4VtHVzFJKNYa2RNtiYyPIrPlhGXoBJqSdH0bNEGSi2sCZkHM6%2Fo0wu8n5y5M1CpCc4BokyJxNCFab9jLEgu1jhyCNL9HVyItw3NxPU7BCohAbCGEyIDPIi%2BZVWtgLyeemq%2FtodgnG4pY9PWv5C4haUuURbYi3mSLtuhv8NdmP6zp3FJM3p9GxL8qCW4qEI3cJwjEzsl9rcz3hjbs%2BI7Z7tUgsPz1VryXoQq61ic3PEazo9v6MABPIn5ju6lCoExGPpuBK1WlfgPYo2bVDNO%2FyN8oUxvRrKU3qPe92nmezhzqKO%2FMnlQLTrcRtIa8CGxlTq%2BmcNZHD2%2FXB95YM9c8S3r2kq%2BTLJu7ffqsnMWFIFFcmLp21Dnm0Le%2B70wXl3SGKBsy%2FLfph7FRMx3Pxw4En9di4Q3tF32Muc6iwrz632jk1GGiax7KotNMHpv5M0XCLIrEXL2rz%2FR9HLVN3V4Gfma471gweX%2FxyxHuPj3qe2bZZDb1EjNZrBgBlvBdFGObSaMEMqTXbm8Xyu6QMKmGmb8GOqUBP1A8G7voAR30uR9es5E%2B%2BqmHdxfPaihrN13hqda7eeSXwu%2FSbR9BwdmPgWtZIpQSmg8ydn6V%2BkVPWzYsNjABMGQgIZlMi1QBA7nvS6mUJcMYs3qPVCl1I6Ft2Syrqz2F6AE7M9Z5q%2FZUje6Hw79HQE4lRm8nztXHFNrZulACF0qOczajwr8TmFl88qWm1LfT2ZSHpTfMaMUTTLvBvofbHkJu1zf9&X-Amz-Signature=09ac6efcb8049e9d5bbaff162c852e1389d1fabe5d1a92c3a69d3c23ae4817a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FCFZYK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA0lj2qdajWNzLd0WZxY2eII1d7iNLxkcUlaLaBk5FmAiEAzF%2FJuWP9f8YhqaAG8lOxmZ%2Ff%2FIErF2b4Px2llHsFhuQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtHxpWZUpwySe9WSCrcAy5gtRTd3IR5FsBHZjQry33tQwagDLFWaFWDm5zptPBbaaIIy5P7tuqa8A7ZHTYal06nUona7st%2B00mS3zonXTgXCERa6GbL2RQp3WaWbghj4VtHVzFJKNYa2RNtiYyPIrPlhGXoBJqSdH0bNEGSi2sCZkHM6%2Fo0wu8n5y5M1CpCc4BokyJxNCFab9jLEgu1jhyCNL9HVyItw3NxPU7BCohAbCGEyIDPIi%2BZVWtgLyeemq%2FtodgnG4pY9PWv5C4haUuURbYi3mSLtuhv8NdmP6zp3FJM3p9GxL8qCW4qEI3cJwjEzsl9rcz3hjbs%2BI7Z7tUgsPz1VryXoQq61ic3PEazo9v6MABPIn5ju6lCoExGPpuBK1WlfgPYo2bVDNO%2FyN8oUxvRrKU3qPe92nmezhzqKO%2FMnlQLTrcRtIa8CGxlTq%2BmcNZHD2%2FXB95YM9c8S3r2kq%2BTLJu7ffqsnMWFIFFcmLp21Dnm0Le%2B70wXl3SGKBsy%2FLfph7FRMx3Pxw4En9di4Q3tF32Muc6iwrz632jk1GGiax7KotNMHpv5M0XCLIrEXL2rz%2FR9HLVN3V4Gfma471gweX%2FxyxHuPj3qe2bZZDb1EjNZrBgBlvBdFGObSaMEMqTXbm8Xyu6QMKmGmb8GOqUBP1A8G7voAR30uR9es5E%2B%2BqmHdxfPaihrN13hqda7eeSXwu%2FSbR9BwdmPgWtZIpQSmg8ydn6V%2BkVPWzYsNjABMGQgIZlMi1QBA7nvS6mUJcMYs3qPVCl1I6Ft2Syrqz2F6AE7M9Z5q%2FZUje6Hw79HQE4lRm8nztXHFNrZulACF0qOczajwr8TmFl88qWm1LfT2ZSHpTfMaMUTTLvBvofbHkJu1zf9&X-Amz-Signature=b9c51930c19753b3cbb039514b54e7014069eeb0d63218e6d8884663b2e55cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FCFZYK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA0lj2qdajWNzLd0WZxY2eII1d7iNLxkcUlaLaBk5FmAiEAzF%2FJuWP9f8YhqaAG8lOxmZ%2Ff%2FIErF2b4Px2llHsFhuQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtHxpWZUpwySe9WSCrcAy5gtRTd3IR5FsBHZjQry33tQwagDLFWaFWDm5zptPBbaaIIy5P7tuqa8A7ZHTYal06nUona7st%2B00mS3zonXTgXCERa6GbL2RQp3WaWbghj4VtHVzFJKNYa2RNtiYyPIrPlhGXoBJqSdH0bNEGSi2sCZkHM6%2Fo0wu8n5y5M1CpCc4BokyJxNCFab9jLEgu1jhyCNL9HVyItw3NxPU7BCohAbCGEyIDPIi%2BZVWtgLyeemq%2FtodgnG4pY9PWv5C4haUuURbYi3mSLtuhv8NdmP6zp3FJM3p9GxL8qCW4qEI3cJwjEzsl9rcz3hjbs%2BI7Z7tUgsPz1VryXoQq61ic3PEazo9v6MABPIn5ju6lCoExGPpuBK1WlfgPYo2bVDNO%2FyN8oUxvRrKU3qPe92nmezhzqKO%2FMnlQLTrcRtIa8CGxlTq%2BmcNZHD2%2FXB95YM9c8S3r2kq%2BTLJu7ffqsnMWFIFFcmLp21Dnm0Le%2B70wXl3SGKBsy%2FLfph7FRMx3Pxw4En9di4Q3tF32Muc6iwrz632jk1GGiax7KotNMHpv5M0XCLIrEXL2rz%2FR9HLVN3V4Gfma471gweX%2FxyxHuPj3qe2bZZDb1EjNZrBgBlvBdFGObSaMEMqTXbm8Xyu6QMKmGmb8GOqUBP1A8G7voAR30uR9es5E%2B%2BqmHdxfPaihrN13hqda7eeSXwu%2FSbR9BwdmPgWtZIpQSmg8ydn6V%2BkVPWzYsNjABMGQgIZlMi1QBA7nvS6mUJcMYs3qPVCl1I6Ft2Syrqz2F6AE7M9Z5q%2FZUje6Hw79HQE4lRm8nztXHFNrZulACF0qOczajwr8TmFl88qWm1LfT2ZSHpTfMaMUTTLvBvofbHkJu1zf9&X-Amz-Signature=3322cb53c19ae97786f78b3af56b52c27b7aa894d3a8c1e407d0aa8c2f718d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657FCFZYK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA0lj2qdajWNzLd0WZxY2eII1d7iNLxkcUlaLaBk5FmAiEAzF%2FJuWP9f8YhqaAG8lOxmZ%2Ff%2FIErF2b4Px2llHsFhuQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKtHxpWZUpwySe9WSCrcAy5gtRTd3IR5FsBHZjQry33tQwagDLFWaFWDm5zptPBbaaIIy5P7tuqa8A7ZHTYal06nUona7st%2B00mS3zonXTgXCERa6GbL2RQp3WaWbghj4VtHVzFJKNYa2RNtiYyPIrPlhGXoBJqSdH0bNEGSi2sCZkHM6%2Fo0wu8n5y5M1CpCc4BokyJxNCFab9jLEgu1jhyCNL9HVyItw3NxPU7BCohAbCGEyIDPIi%2BZVWtgLyeemq%2FtodgnG4pY9PWv5C4haUuURbYi3mSLtuhv8NdmP6zp3FJM3p9GxL8qCW4qEI3cJwjEzsl9rcz3hjbs%2BI7Z7tUgsPz1VryXoQq61ic3PEazo9v6MABPIn5ju6lCoExGPpuBK1WlfgPYo2bVDNO%2FyN8oUxvRrKU3qPe92nmezhzqKO%2FMnlQLTrcRtIa8CGxlTq%2BmcNZHD2%2FXB95YM9c8S3r2kq%2BTLJu7ffqsnMWFIFFcmLp21Dnm0Le%2B70wXl3SGKBsy%2FLfph7FRMx3Pxw4En9di4Q3tF32Muc6iwrz632jk1GGiax7KotNMHpv5M0XCLIrEXL2rz%2FR9HLVN3V4Gfma471gweX%2FxyxHuPj3qe2bZZDb1EjNZrBgBlvBdFGObSaMEMqTXbm8Xyu6QMKmGmb8GOqUBP1A8G7voAR30uR9es5E%2B%2BqmHdxfPaihrN13hqda7eeSXwu%2FSbR9BwdmPgWtZIpQSmg8ydn6V%2BkVPWzYsNjABMGQgIZlMi1QBA7nvS6mUJcMYs3qPVCl1I6Ft2Syrqz2F6AE7M9Z5q%2FZUje6Hw79HQE4lRm8nztXHFNrZulACF0qOczajwr8TmFl88qWm1LfT2ZSHpTfMaMUTTLvBvofbHkJu1zf9&X-Amz-Signature=a2209fd7b37d27b6c7eb2fe7c1ec875fdfff4d2885e770db1fbc23107bba5871&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

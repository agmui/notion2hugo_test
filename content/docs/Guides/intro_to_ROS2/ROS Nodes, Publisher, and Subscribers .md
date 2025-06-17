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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTMAG5V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNQR2I9n9R9aIKvB%2FyXhmU93ha9mTPXIK5gRv3DsvQnAiEAxxBoM4eOPLuCqeWcTNPDL6lVVQ%2F3k35HaJyKSLhGvvMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDtZYt4IBQc4ChVyySrcAwINqjToRibeyLT7PpqvjdrrfRJ0yYfawp4yS2GeowJc5kxpEUbeZQ20NBoGLosgSuu6k2Lw16DCuucQaz7sSR7YV%2B7L5yg3sZesQmiqlfaOyT8xlV9jHGqqO6%2B1CIoN9qbm1EUxuMWDLGJ9oEXlCyS12jO2ybNPYKZCtyGmdjVRmj7lclCdaxPgPzbfN0FKMEIdsZ0ue6a1lcOerMKDeuYu%2BfGGvhV2WtS4kng8vgebbqz8k8xFXhlD1JoP2S5%2F%2Bmc%2BanrY%2BdEjKfrF%2BUgW7WlZRkNPZl3qjuaxImKYrzrJFgS%2Fl8QxOXXdB%2BfI%2B2m2bGPBDGQG5vAfQI9dK2R796kN7rmclkrcGE%2FC0eHaVs5OfU2JXvqSKLSOiDI606XYBFgwvycBASN%2BOlOdMBEkqXmey57s2g9Y6k2zo4vWN4CvPTFEKmeSpJYJIPjYl0m7aiPCFoY8J1rOFfXRA7uUXa2MbykJhMcRbl%2F9rsiclTSfn83PqTeexs%2B8hbyQ6LCa8zfRkdcb6Tmp6suCE0cqYln5Fs6SgNqchTpg5%2Bh1wVHU45Bo7bfrNwn6CM1PGX%2FtW3LpO1fvdOzXdqEy2RK%2B4xVdoaKDKvxgguDGzONkhQ9Cx0ATrl6sFxr6hOIDMKaTxMIGOqUBAsY1q1EMDEI9dFrKF2B17XCM8TTXe7Bbhc%2BOgwVF71lJq61IKKoUbTopoeEojB2%2FrBG7KxNoha93Y0NCLuWIbRETBdLAQN7vVaS1BO%2FTuMkTgLxQM%2BL%2FmPGrRLIHLisvRHsQISBZoSdjN%2BVW6vlNPHHUrFURWlCIfRk2CvRa6okiVFxK13dlWoyxDtJ7GirHEQIbwjGTyY0nPbojH2tQ%2F6ps%2BGKd&X-Amz-Signature=1111b3f0b78606a129ed9df9efaa78ac9eb8b14024333f61b22684e6046949f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTMAG5V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNQR2I9n9R9aIKvB%2FyXhmU93ha9mTPXIK5gRv3DsvQnAiEAxxBoM4eOPLuCqeWcTNPDL6lVVQ%2F3k35HaJyKSLhGvvMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDtZYt4IBQc4ChVyySrcAwINqjToRibeyLT7PpqvjdrrfRJ0yYfawp4yS2GeowJc5kxpEUbeZQ20NBoGLosgSuu6k2Lw16DCuucQaz7sSR7YV%2B7L5yg3sZesQmiqlfaOyT8xlV9jHGqqO6%2B1CIoN9qbm1EUxuMWDLGJ9oEXlCyS12jO2ybNPYKZCtyGmdjVRmj7lclCdaxPgPzbfN0FKMEIdsZ0ue6a1lcOerMKDeuYu%2BfGGvhV2WtS4kng8vgebbqz8k8xFXhlD1JoP2S5%2F%2Bmc%2BanrY%2BdEjKfrF%2BUgW7WlZRkNPZl3qjuaxImKYrzrJFgS%2Fl8QxOXXdB%2BfI%2B2m2bGPBDGQG5vAfQI9dK2R796kN7rmclkrcGE%2FC0eHaVs5OfU2JXvqSKLSOiDI606XYBFgwvycBASN%2BOlOdMBEkqXmey57s2g9Y6k2zo4vWN4CvPTFEKmeSpJYJIPjYl0m7aiPCFoY8J1rOFfXRA7uUXa2MbykJhMcRbl%2F9rsiclTSfn83PqTeexs%2B8hbyQ6LCa8zfRkdcb6Tmp6suCE0cqYln5Fs6SgNqchTpg5%2Bh1wVHU45Bo7bfrNwn6CM1PGX%2FtW3LpO1fvdOzXdqEy2RK%2B4xVdoaKDKvxgguDGzONkhQ9Cx0ATrl6sFxr6hOIDMKaTxMIGOqUBAsY1q1EMDEI9dFrKF2B17XCM8TTXe7Bbhc%2BOgwVF71lJq61IKKoUbTopoeEojB2%2FrBG7KxNoha93Y0NCLuWIbRETBdLAQN7vVaS1BO%2FTuMkTgLxQM%2BL%2FmPGrRLIHLisvRHsQISBZoSdjN%2BVW6vlNPHHUrFURWlCIfRk2CvRa6okiVFxK13dlWoyxDtJ7GirHEQIbwjGTyY0nPbojH2tQ%2F6ps%2BGKd&X-Amz-Signature=74031e20b32ec7d056e012778b793aece525dcb2cba57e45dbce0a04194d3b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTMAG5V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNQR2I9n9R9aIKvB%2FyXhmU93ha9mTPXIK5gRv3DsvQnAiEAxxBoM4eOPLuCqeWcTNPDL6lVVQ%2F3k35HaJyKSLhGvvMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDtZYt4IBQc4ChVyySrcAwINqjToRibeyLT7PpqvjdrrfRJ0yYfawp4yS2GeowJc5kxpEUbeZQ20NBoGLosgSuu6k2Lw16DCuucQaz7sSR7YV%2B7L5yg3sZesQmiqlfaOyT8xlV9jHGqqO6%2B1CIoN9qbm1EUxuMWDLGJ9oEXlCyS12jO2ybNPYKZCtyGmdjVRmj7lclCdaxPgPzbfN0FKMEIdsZ0ue6a1lcOerMKDeuYu%2BfGGvhV2WtS4kng8vgebbqz8k8xFXhlD1JoP2S5%2F%2Bmc%2BanrY%2BdEjKfrF%2BUgW7WlZRkNPZl3qjuaxImKYrzrJFgS%2Fl8QxOXXdB%2BfI%2B2m2bGPBDGQG5vAfQI9dK2R796kN7rmclkrcGE%2FC0eHaVs5OfU2JXvqSKLSOiDI606XYBFgwvycBASN%2BOlOdMBEkqXmey57s2g9Y6k2zo4vWN4CvPTFEKmeSpJYJIPjYl0m7aiPCFoY8J1rOFfXRA7uUXa2MbykJhMcRbl%2F9rsiclTSfn83PqTeexs%2B8hbyQ6LCa8zfRkdcb6Tmp6suCE0cqYln5Fs6SgNqchTpg5%2Bh1wVHU45Bo7bfrNwn6CM1PGX%2FtW3LpO1fvdOzXdqEy2RK%2B4xVdoaKDKvxgguDGzONkhQ9Cx0ATrl6sFxr6hOIDMKaTxMIGOqUBAsY1q1EMDEI9dFrKF2B17XCM8TTXe7Bbhc%2BOgwVF71lJq61IKKoUbTopoeEojB2%2FrBG7KxNoha93Y0NCLuWIbRETBdLAQN7vVaS1BO%2FTuMkTgLxQM%2BL%2FmPGrRLIHLisvRHsQISBZoSdjN%2BVW6vlNPHHUrFURWlCIfRk2CvRa6okiVFxK13dlWoyxDtJ7GirHEQIbwjGTyY0nPbojH2tQ%2F6ps%2BGKd&X-Amz-Signature=5728f0baf0da48d82107b4c9f18e5f18de891eb8e154717f1f3fd1ac8046f826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTMAG5V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNQR2I9n9R9aIKvB%2FyXhmU93ha9mTPXIK5gRv3DsvQnAiEAxxBoM4eOPLuCqeWcTNPDL6lVVQ%2F3k35HaJyKSLhGvvMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDtZYt4IBQc4ChVyySrcAwINqjToRibeyLT7PpqvjdrrfRJ0yYfawp4yS2GeowJc5kxpEUbeZQ20NBoGLosgSuu6k2Lw16DCuucQaz7sSR7YV%2B7L5yg3sZesQmiqlfaOyT8xlV9jHGqqO6%2B1CIoN9qbm1EUxuMWDLGJ9oEXlCyS12jO2ybNPYKZCtyGmdjVRmj7lclCdaxPgPzbfN0FKMEIdsZ0ue6a1lcOerMKDeuYu%2BfGGvhV2WtS4kng8vgebbqz8k8xFXhlD1JoP2S5%2F%2Bmc%2BanrY%2BdEjKfrF%2BUgW7WlZRkNPZl3qjuaxImKYrzrJFgS%2Fl8QxOXXdB%2BfI%2B2m2bGPBDGQG5vAfQI9dK2R796kN7rmclkrcGE%2FC0eHaVs5OfU2JXvqSKLSOiDI606XYBFgwvycBASN%2BOlOdMBEkqXmey57s2g9Y6k2zo4vWN4CvPTFEKmeSpJYJIPjYl0m7aiPCFoY8J1rOFfXRA7uUXa2MbykJhMcRbl%2F9rsiclTSfn83PqTeexs%2B8hbyQ6LCa8zfRkdcb6Tmp6suCE0cqYln5Fs6SgNqchTpg5%2Bh1wVHU45Bo7bfrNwn6CM1PGX%2FtW3LpO1fvdOzXdqEy2RK%2B4xVdoaKDKvxgguDGzONkhQ9Cx0ATrl6sFxr6hOIDMKaTxMIGOqUBAsY1q1EMDEI9dFrKF2B17XCM8TTXe7Bbhc%2BOgwVF71lJq61IKKoUbTopoeEojB2%2FrBG7KxNoha93Y0NCLuWIbRETBdLAQN7vVaS1BO%2FTuMkTgLxQM%2BL%2FmPGrRLIHLisvRHsQISBZoSdjN%2BVW6vlNPHHUrFURWlCIfRk2CvRa6okiVFxK13dlWoyxDtJ7GirHEQIbwjGTyY0nPbojH2tQ%2F6ps%2BGKd&X-Amz-Signature=0123ab74be93a3e33c9af426c0fa5e986349ceefb20869fec0a49db3d8b9994e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTMAG5V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNQR2I9n9R9aIKvB%2FyXhmU93ha9mTPXIK5gRv3DsvQnAiEAxxBoM4eOPLuCqeWcTNPDL6lVVQ%2F3k35HaJyKSLhGvvMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDtZYt4IBQc4ChVyySrcAwINqjToRibeyLT7PpqvjdrrfRJ0yYfawp4yS2GeowJc5kxpEUbeZQ20NBoGLosgSuu6k2Lw16DCuucQaz7sSR7YV%2B7L5yg3sZesQmiqlfaOyT8xlV9jHGqqO6%2B1CIoN9qbm1EUxuMWDLGJ9oEXlCyS12jO2ybNPYKZCtyGmdjVRmj7lclCdaxPgPzbfN0FKMEIdsZ0ue6a1lcOerMKDeuYu%2BfGGvhV2WtS4kng8vgebbqz8k8xFXhlD1JoP2S5%2F%2Bmc%2BanrY%2BdEjKfrF%2BUgW7WlZRkNPZl3qjuaxImKYrzrJFgS%2Fl8QxOXXdB%2BfI%2B2m2bGPBDGQG5vAfQI9dK2R796kN7rmclkrcGE%2FC0eHaVs5OfU2JXvqSKLSOiDI606XYBFgwvycBASN%2BOlOdMBEkqXmey57s2g9Y6k2zo4vWN4CvPTFEKmeSpJYJIPjYl0m7aiPCFoY8J1rOFfXRA7uUXa2MbykJhMcRbl%2F9rsiclTSfn83PqTeexs%2B8hbyQ6LCa8zfRkdcb6Tmp6suCE0cqYln5Fs6SgNqchTpg5%2Bh1wVHU45Bo7bfrNwn6CM1PGX%2FtW3LpO1fvdOzXdqEy2RK%2B4xVdoaKDKvxgguDGzONkhQ9Cx0ATrl6sFxr6hOIDMKaTxMIGOqUBAsY1q1EMDEI9dFrKF2B17XCM8TTXe7Bbhc%2BOgwVF71lJq61IKKoUbTopoeEojB2%2FrBG7KxNoha93Y0NCLuWIbRETBdLAQN7vVaS1BO%2FTuMkTgLxQM%2BL%2FmPGrRLIHLisvRHsQISBZoSdjN%2BVW6vlNPHHUrFURWlCIfRk2CvRa6okiVFxK13dlWoyxDtJ7GirHEQIbwjGTyY0nPbojH2tQ%2F6ps%2BGKd&X-Amz-Signature=326646b3c71e7385ea6fccaa7fef072ecf69d6ec7c79cf75b3be1d88bd3bf203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTMAG5V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNQR2I9n9R9aIKvB%2FyXhmU93ha9mTPXIK5gRv3DsvQnAiEAxxBoM4eOPLuCqeWcTNPDL6lVVQ%2F3k35HaJyKSLhGvvMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDtZYt4IBQc4ChVyySrcAwINqjToRibeyLT7PpqvjdrrfRJ0yYfawp4yS2GeowJc5kxpEUbeZQ20NBoGLosgSuu6k2Lw16DCuucQaz7sSR7YV%2B7L5yg3sZesQmiqlfaOyT8xlV9jHGqqO6%2B1CIoN9qbm1EUxuMWDLGJ9oEXlCyS12jO2ybNPYKZCtyGmdjVRmj7lclCdaxPgPzbfN0FKMEIdsZ0ue6a1lcOerMKDeuYu%2BfGGvhV2WtS4kng8vgebbqz8k8xFXhlD1JoP2S5%2F%2Bmc%2BanrY%2BdEjKfrF%2BUgW7WlZRkNPZl3qjuaxImKYrzrJFgS%2Fl8QxOXXdB%2BfI%2B2m2bGPBDGQG5vAfQI9dK2R796kN7rmclkrcGE%2FC0eHaVs5OfU2JXvqSKLSOiDI606XYBFgwvycBASN%2BOlOdMBEkqXmey57s2g9Y6k2zo4vWN4CvPTFEKmeSpJYJIPjYl0m7aiPCFoY8J1rOFfXRA7uUXa2MbykJhMcRbl%2F9rsiclTSfn83PqTeexs%2B8hbyQ6LCa8zfRkdcb6Tmp6suCE0cqYln5Fs6SgNqchTpg5%2Bh1wVHU45Bo7bfrNwn6CM1PGX%2FtW3LpO1fvdOzXdqEy2RK%2B4xVdoaKDKvxgguDGzONkhQ9Cx0ATrl6sFxr6hOIDMKaTxMIGOqUBAsY1q1EMDEI9dFrKF2B17XCM8TTXe7Bbhc%2BOgwVF71lJq61IKKoUbTopoeEojB2%2FrBG7KxNoha93Y0NCLuWIbRETBdLAQN7vVaS1BO%2FTuMkTgLxQM%2BL%2FmPGrRLIHLisvRHsQISBZoSdjN%2BVW6vlNPHHUrFURWlCIfRk2CvRa6okiVFxK13dlWoyxDtJ7GirHEQIbwjGTyY0nPbojH2tQ%2F6ps%2BGKd&X-Amz-Signature=e4c5fac411ea669f2123f2711a6a2af67f18779f0b5abaa978ba0b06fb52b9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTMAG5V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNQR2I9n9R9aIKvB%2FyXhmU93ha9mTPXIK5gRv3DsvQnAiEAxxBoM4eOPLuCqeWcTNPDL6lVVQ%2F3k35HaJyKSLhGvvMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDtZYt4IBQc4ChVyySrcAwINqjToRibeyLT7PpqvjdrrfRJ0yYfawp4yS2GeowJc5kxpEUbeZQ20NBoGLosgSuu6k2Lw16DCuucQaz7sSR7YV%2B7L5yg3sZesQmiqlfaOyT8xlV9jHGqqO6%2B1CIoN9qbm1EUxuMWDLGJ9oEXlCyS12jO2ybNPYKZCtyGmdjVRmj7lclCdaxPgPzbfN0FKMEIdsZ0ue6a1lcOerMKDeuYu%2BfGGvhV2WtS4kng8vgebbqz8k8xFXhlD1JoP2S5%2F%2Bmc%2BanrY%2BdEjKfrF%2BUgW7WlZRkNPZl3qjuaxImKYrzrJFgS%2Fl8QxOXXdB%2BfI%2B2m2bGPBDGQG5vAfQI9dK2R796kN7rmclkrcGE%2FC0eHaVs5OfU2JXvqSKLSOiDI606XYBFgwvycBASN%2BOlOdMBEkqXmey57s2g9Y6k2zo4vWN4CvPTFEKmeSpJYJIPjYl0m7aiPCFoY8J1rOFfXRA7uUXa2MbykJhMcRbl%2F9rsiclTSfn83PqTeexs%2B8hbyQ6LCa8zfRkdcb6Tmp6suCE0cqYln5Fs6SgNqchTpg5%2Bh1wVHU45Bo7bfrNwn6CM1PGX%2FtW3LpO1fvdOzXdqEy2RK%2B4xVdoaKDKvxgguDGzONkhQ9Cx0ATrl6sFxr6hOIDMKaTxMIGOqUBAsY1q1EMDEI9dFrKF2B17XCM8TTXe7Bbhc%2BOgwVF71lJq61IKKoUbTopoeEojB2%2FrBG7KxNoha93Y0NCLuWIbRETBdLAQN7vVaS1BO%2FTuMkTgLxQM%2BL%2FmPGrRLIHLisvRHsQISBZoSdjN%2BVW6vlNPHHUrFURWlCIfRk2CvRa6okiVFxK13dlWoyxDtJ7GirHEQIbwjGTyY0nPbojH2tQ%2F6ps%2BGKd&X-Amz-Signature=116dd06aaba6880c473990f0d2fca53262a44b844af5e918ae8708f33fca8f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTMAG5V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNQR2I9n9R9aIKvB%2FyXhmU93ha9mTPXIK5gRv3DsvQnAiEAxxBoM4eOPLuCqeWcTNPDL6lVVQ%2F3k35HaJyKSLhGvvMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDtZYt4IBQc4ChVyySrcAwINqjToRibeyLT7PpqvjdrrfRJ0yYfawp4yS2GeowJc5kxpEUbeZQ20NBoGLosgSuu6k2Lw16DCuucQaz7sSR7YV%2B7L5yg3sZesQmiqlfaOyT8xlV9jHGqqO6%2B1CIoN9qbm1EUxuMWDLGJ9oEXlCyS12jO2ybNPYKZCtyGmdjVRmj7lclCdaxPgPzbfN0FKMEIdsZ0ue6a1lcOerMKDeuYu%2BfGGvhV2WtS4kng8vgebbqz8k8xFXhlD1JoP2S5%2F%2Bmc%2BanrY%2BdEjKfrF%2BUgW7WlZRkNPZl3qjuaxImKYrzrJFgS%2Fl8QxOXXdB%2BfI%2B2m2bGPBDGQG5vAfQI9dK2R796kN7rmclkrcGE%2FC0eHaVs5OfU2JXvqSKLSOiDI606XYBFgwvycBASN%2BOlOdMBEkqXmey57s2g9Y6k2zo4vWN4CvPTFEKmeSpJYJIPjYl0m7aiPCFoY8J1rOFfXRA7uUXa2MbykJhMcRbl%2F9rsiclTSfn83PqTeexs%2B8hbyQ6LCa8zfRkdcb6Tmp6suCE0cqYln5Fs6SgNqchTpg5%2Bh1wVHU45Bo7bfrNwn6CM1PGX%2FtW3LpO1fvdOzXdqEy2RK%2B4xVdoaKDKvxgguDGzONkhQ9Cx0ATrl6sFxr6hOIDMKaTxMIGOqUBAsY1q1EMDEI9dFrKF2B17XCM8TTXe7Bbhc%2BOgwVF71lJq61IKKoUbTopoeEojB2%2FrBG7KxNoha93Y0NCLuWIbRETBdLAQN7vVaS1BO%2FTuMkTgLxQM%2BL%2FmPGrRLIHLisvRHsQISBZoSdjN%2BVW6vlNPHHUrFURWlCIfRk2CvRa6okiVFxK13dlWoyxDtJ7GirHEQIbwjGTyY0nPbojH2tQ%2F6ps%2BGKd&X-Amz-Signature=800e11b95694a2ff60b6f8127cbae2897203bbe3942ccf7c8e79fab0b880b784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

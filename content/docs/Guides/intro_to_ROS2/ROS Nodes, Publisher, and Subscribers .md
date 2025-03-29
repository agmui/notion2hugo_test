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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U27W3OU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICnai5AXe%2FmYJDimLPsLpfNhc%2BOYA%2B%2FtOSjti4m0rBrEAiEA%2BH3ldhZSkQGnT0Y0wygGPNLUxCnqWiRBH8OVfBT6tZwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCHCoYIjTPSv2sXVzircAwLLDIUKD%2BIlwkpwRGS8luoOSOdivYU9xODjo9yMi1uVOxcX8LeUW84FIegvSvTEY7N4d6EAfSgSweXqWQRN28Tfhdxc2P3aaxmllne0jgylI4XbU%2BDxqCEY3cl%2F26kDrt7AdSDv1oQG4p3MnwCEXw30TbT5ZukBXayvqNKMMLgyQx4GRHy4Ojr7e6ZuvlfQoP5crav8RMkYEQA3B%2Fxi7GkkPtV%2Bhq5JtEw1hfZLXQvKITINDWeqokdCqJqWXl5Ax4obI4i%2BCUmwFJ26rGIWOotSZzlvGLK8XpocbM1Q4r2NmaFxPuwePwghLzmIsnqZZCcnVmkBGTrahJthZ8T8klHBjVpjKetz2c%2B59nAhsqzMlo8BFpLnDUV0Ec4OdihqsHJI%2FXwaIR1rjymM8QjwPjDfbydlea2%2FFRpXqiRp%2BHwlNKBOVaeP72TOrwQAWC3Xir7Lu3eTj3nwMXTu9YhpdxvqmDXRjcAikZgQncnBgwyaZhFWgLYkmx0nGY7VJ%2Fb7f1WGAVH5nqsVyK%2BoRWvaah45m9WqTLit7a66jwcDIpE%2BlQUbWJk4OZL8fbKyZKFNc89HkJMssmbPz5R5agaSdE2kiuazfg8cstvY7%2Bq203o%2BDTCSZDBuURI%2BNJa5MO3enL8GOqUBVMBvgEf06kLQW6nck54ioQa%2F2J0%2BVf3Gt7xTNkd%2F%2Fo%2B3%2FML4EtXfTYW%2FKKZgy4RicdgC0xt93m%2BjYn%2BN7o5FTNP2hUXjWjYe%2Fg%2BLF%2FmkGNMgIrW8Ols7F6WBok5Zw5Yt7tXdB2nOBecdtfXLEyTWMQRqCLaBCAdJRkKYbxFqELECT1wFG5HtqVyD6%2BwpSKDiHCs00ohZnzNyoW8TmGI1Nvweqs42&X-Amz-Signature=e3dd421eb54c66b053c4509f71fe566d4c4a99231bec91808f822d25fa926ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U27W3OU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICnai5AXe%2FmYJDimLPsLpfNhc%2BOYA%2B%2FtOSjti4m0rBrEAiEA%2BH3ldhZSkQGnT0Y0wygGPNLUxCnqWiRBH8OVfBT6tZwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCHCoYIjTPSv2sXVzircAwLLDIUKD%2BIlwkpwRGS8luoOSOdivYU9xODjo9yMi1uVOxcX8LeUW84FIegvSvTEY7N4d6EAfSgSweXqWQRN28Tfhdxc2P3aaxmllne0jgylI4XbU%2BDxqCEY3cl%2F26kDrt7AdSDv1oQG4p3MnwCEXw30TbT5ZukBXayvqNKMMLgyQx4GRHy4Ojr7e6ZuvlfQoP5crav8RMkYEQA3B%2Fxi7GkkPtV%2Bhq5JtEw1hfZLXQvKITINDWeqokdCqJqWXl5Ax4obI4i%2BCUmwFJ26rGIWOotSZzlvGLK8XpocbM1Q4r2NmaFxPuwePwghLzmIsnqZZCcnVmkBGTrahJthZ8T8klHBjVpjKetz2c%2B59nAhsqzMlo8BFpLnDUV0Ec4OdihqsHJI%2FXwaIR1rjymM8QjwPjDfbydlea2%2FFRpXqiRp%2BHwlNKBOVaeP72TOrwQAWC3Xir7Lu3eTj3nwMXTu9YhpdxvqmDXRjcAikZgQncnBgwyaZhFWgLYkmx0nGY7VJ%2Fb7f1WGAVH5nqsVyK%2BoRWvaah45m9WqTLit7a66jwcDIpE%2BlQUbWJk4OZL8fbKyZKFNc89HkJMssmbPz5R5agaSdE2kiuazfg8cstvY7%2Bq203o%2BDTCSZDBuURI%2BNJa5MO3enL8GOqUBVMBvgEf06kLQW6nck54ioQa%2F2J0%2BVf3Gt7xTNkd%2F%2Fo%2B3%2FML4EtXfTYW%2FKKZgy4RicdgC0xt93m%2BjYn%2BN7o5FTNP2hUXjWjYe%2Fg%2BLF%2FmkGNMgIrW8Ols7F6WBok5Zw5Yt7tXdB2nOBecdtfXLEyTWMQRqCLaBCAdJRkKYbxFqELECT1wFG5HtqVyD6%2BwpSKDiHCs00ohZnzNyoW8TmGI1Nvweqs42&X-Amz-Signature=12d67a37ebff619f5ecdbb79c22df42cd7e1266e0231e561bb436f8f2590498e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U27W3OU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICnai5AXe%2FmYJDimLPsLpfNhc%2BOYA%2B%2FtOSjti4m0rBrEAiEA%2BH3ldhZSkQGnT0Y0wygGPNLUxCnqWiRBH8OVfBT6tZwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCHCoYIjTPSv2sXVzircAwLLDIUKD%2BIlwkpwRGS8luoOSOdivYU9xODjo9yMi1uVOxcX8LeUW84FIegvSvTEY7N4d6EAfSgSweXqWQRN28Tfhdxc2P3aaxmllne0jgylI4XbU%2BDxqCEY3cl%2F26kDrt7AdSDv1oQG4p3MnwCEXw30TbT5ZukBXayvqNKMMLgyQx4GRHy4Ojr7e6ZuvlfQoP5crav8RMkYEQA3B%2Fxi7GkkPtV%2Bhq5JtEw1hfZLXQvKITINDWeqokdCqJqWXl5Ax4obI4i%2BCUmwFJ26rGIWOotSZzlvGLK8XpocbM1Q4r2NmaFxPuwePwghLzmIsnqZZCcnVmkBGTrahJthZ8T8klHBjVpjKetz2c%2B59nAhsqzMlo8BFpLnDUV0Ec4OdihqsHJI%2FXwaIR1rjymM8QjwPjDfbydlea2%2FFRpXqiRp%2BHwlNKBOVaeP72TOrwQAWC3Xir7Lu3eTj3nwMXTu9YhpdxvqmDXRjcAikZgQncnBgwyaZhFWgLYkmx0nGY7VJ%2Fb7f1WGAVH5nqsVyK%2BoRWvaah45m9WqTLit7a66jwcDIpE%2BlQUbWJk4OZL8fbKyZKFNc89HkJMssmbPz5R5agaSdE2kiuazfg8cstvY7%2Bq203o%2BDTCSZDBuURI%2BNJa5MO3enL8GOqUBVMBvgEf06kLQW6nck54ioQa%2F2J0%2BVf3Gt7xTNkd%2F%2Fo%2B3%2FML4EtXfTYW%2FKKZgy4RicdgC0xt93m%2BjYn%2BN7o5FTNP2hUXjWjYe%2Fg%2BLF%2FmkGNMgIrW8Ols7F6WBok5Zw5Yt7tXdB2nOBecdtfXLEyTWMQRqCLaBCAdJRkKYbxFqELECT1wFG5HtqVyD6%2BwpSKDiHCs00ohZnzNyoW8TmGI1Nvweqs42&X-Amz-Signature=73bae22d3c9f424a3fcbb5b4d60b5d3afe734a14ae49986b9ecb968d3856af99&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U27W3OU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICnai5AXe%2FmYJDimLPsLpfNhc%2BOYA%2B%2FtOSjti4m0rBrEAiEA%2BH3ldhZSkQGnT0Y0wygGPNLUxCnqWiRBH8OVfBT6tZwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCHCoYIjTPSv2sXVzircAwLLDIUKD%2BIlwkpwRGS8luoOSOdivYU9xODjo9yMi1uVOxcX8LeUW84FIegvSvTEY7N4d6EAfSgSweXqWQRN28Tfhdxc2P3aaxmllne0jgylI4XbU%2BDxqCEY3cl%2F26kDrt7AdSDv1oQG4p3MnwCEXw30TbT5ZukBXayvqNKMMLgyQx4GRHy4Ojr7e6ZuvlfQoP5crav8RMkYEQA3B%2Fxi7GkkPtV%2Bhq5JtEw1hfZLXQvKITINDWeqokdCqJqWXl5Ax4obI4i%2BCUmwFJ26rGIWOotSZzlvGLK8XpocbM1Q4r2NmaFxPuwePwghLzmIsnqZZCcnVmkBGTrahJthZ8T8klHBjVpjKetz2c%2B59nAhsqzMlo8BFpLnDUV0Ec4OdihqsHJI%2FXwaIR1rjymM8QjwPjDfbydlea2%2FFRpXqiRp%2BHwlNKBOVaeP72TOrwQAWC3Xir7Lu3eTj3nwMXTu9YhpdxvqmDXRjcAikZgQncnBgwyaZhFWgLYkmx0nGY7VJ%2Fb7f1WGAVH5nqsVyK%2BoRWvaah45m9WqTLit7a66jwcDIpE%2BlQUbWJk4OZL8fbKyZKFNc89HkJMssmbPz5R5agaSdE2kiuazfg8cstvY7%2Bq203o%2BDTCSZDBuURI%2BNJa5MO3enL8GOqUBVMBvgEf06kLQW6nck54ioQa%2F2J0%2BVf3Gt7xTNkd%2F%2Fo%2B3%2FML4EtXfTYW%2FKKZgy4RicdgC0xt93m%2BjYn%2BN7o5FTNP2hUXjWjYe%2Fg%2BLF%2FmkGNMgIrW8Ols7F6WBok5Zw5Yt7tXdB2nOBecdtfXLEyTWMQRqCLaBCAdJRkKYbxFqELECT1wFG5HtqVyD6%2BwpSKDiHCs00ohZnzNyoW8TmGI1Nvweqs42&X-Amz-Signature=cb43514de5ebb8f1d45a9414c9d6f8100114f0d96bcdedab54769e5581586e96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U27W3OU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICnai5AXe%2FmYJDimLPsLpfNhc%2BOYA%2B%2FtOSjti4m0rBrEAiEA%2BH3ldhZSkQGnT0Y0wygGPNLUxCnqWiRBH8OVfBT6tZwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCHCoYIjTPSv2sXVzircAwLLDIUKD%2BIlwkpwRGS8luoOSOdivYU9xODjo9yMi1uVOxcX8LeUW84FIegvSvTEY7N4d6EAfSgSweXqWQRN28Tfhdxc2P3aaxmllne0jgylI4XbU%2BDxqCEY3cl%2F26kDrt7AdSDv1oQG4p3MnwCEXw30TbT5ZukBXayvqNKMMLgyQx4GRHy4Ojr7e6ZuvlfQoP5crav8RMkYEQA3B%2Fxi7GkkPtV%2Bhq5JtEw1hfZLXQvKITINDWeqokdCqJqWXl5Ax4obI4i%2BCUmwFJ26rGIWOotSZzlvGLK8XpocbM1Q4r2NmaFxPuwePwghLzmIsnqZZCcnVmkBGTrahJthZ8T8klHBjVpjKetz2c%2B59nAhsqzMlo8BFpLnDUV0Ec4OdihqsHJI%2FXwaIR1rjymM8QjwPjDfbydlea2%2FFRpXqiRp%2BHwlNKBOVaeP72TOrwQAWC3Xir7Lu3eTj3nwMXTu9YhpdxvqmDXRjcAikZgQncnBgwyaZhFWgLYkmx0nGY7VJ%2Fb7f1WGAVH5nqsVyK%2BoRWvaah45m9WqTLit7a66jwcDIpE%2BlQUbWJk4OZL8fbKyZKFNc89HkJMssmbPz5R5agaSdE2kiuazfg8cstvY7%2Bq203o%2BDTCSZDBuURI%2BNJa5MO3enL8GOqUBVMBvgEf06kLQW6nck54ioQa%2F2J0%2BVf3Gt7xTNkd%2F%2Fo%2B3%2FML4EtXfTYW%2FKKZgy4RicdgC0xt93m%2BjYn%2BN7o5FTNP2hUXjWjYe%2Fg%2BLF%2FmkGNMgIrW8Ols7F6WBok5Zw5Yt7tXdB2nOBecdtfXLEyTWMQRqCLaBCAdJRkKYbxFqELECT1wFG5HtqVyD6%2BwpSKDiHCs00ohZnzNyoW8TmGI1Nvweqs42&X-Amz-Signature=dd798505ef240b405210360c47adf0ba7cc904ebef7212ff9c618ed0775d494c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U27W3OU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICnai5AXe%2FmYJDimLPsLpfNhc%2BOYA%2B%2FtOSjti4m0rBrEAiEA%2BH3ldhZSkQGnT0Y0wygGPNLUxCnqWiRBH8OVfBT6tZwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCHCoYIjTPSv2sXVzircAwLLDIUKD%2BIlwkpwRGS8luoOSOdivYU9xODjo9yMi1uVOxcX8LeUW84FIegvSvTEY7N4d6EAfSgSweXqWQRN28Tfhdxc2P3aaxmllne0jgylI4XbU%2BDxqCEY3cl%2F26kDrt7AdSDv1oQG4p3MnwCEXw30TbT5ZukBXayvqNKMMLgyQx4GRHy4Ojr7e6ZuvlfQoP5crav8RMkYEQA3B%2Fxi7GkkPtV%2Bhq5JtEw1hfZLXQvKITINDWeqokdCqJqWXl5Ax4obI4i%2BCUmwFJ26rGIWOotSZzlvGLK8XpocbM1Q4r2NmaFxPuwePwghLzmIsnqZZCcnVmkBGTrahJthZ8T8klHBjVpjKetz2c%2B59nAhsqzMlo8BFpLnDUV0Ec4OdihqsHJI%2FXwaIR1rjymM8QjwPjDfbydlea2%2FFRpXqiRp%2BHwlNKBOVaeP72TOrwQAWC3Xir7Lu3eTj3nwMXTu9YhpdxvqmDXRjcAikZgQncnBgwyaZhFWgLYkmx0nGY7VJ%2Fb7f1WGAVH5nqsVyK%2BoRWvaah45m9WqTLit7a66jwcDIpE%2BlQUbWJk4OZL8fbKyZKFNc89HkJMssmbPz5R5agaSdE2kiuazfg8cstvY7%2Bq203o%2BDTCSZDBuURI%2BNJa5MO3enL8GOqUBVMBvgEf06kLQW6nck54ioQa%2F2J0%2BVf3Gt7xTNkd%2F%2Fo%2B3%2FML4EtXfTYW%2FKKZgy4RicdgC0xt93m%2BjYn%2BN7o5FTNP2hUXjWjYe%2Fg%2BLF%2FmkGNMgIrW8Ols7F6WBok5Zw5Yt7tXdB2nOBecdtfXLEyTWMQRqCLaBCAdJRkKYbxFqELECT1wFG5HtqVyD6%2BwpSKDiHCs00ohZnzNyoW8TmGI1Nvweqs42&X-Amz-Signature=476476b568385786db4ddf0db15b5f81cabb5d9267037ba2ba642d22d30c2bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U27W3OU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICnai5AXe%2FmYJDimLPsLpfNhc%2BOYA%2B%2FtOSjti4m0rBrEAiEA%2BH3ldhZSkQGnT0Y0wygGPNLUxCnqWiRBH8OVfBT6tZwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCHCoYIjTPSv2sXVzircAwLLDIUKD%2BIlwkpwRGS8luoOSOdivYU9xODjo9yMi1uVOxcX8LeUW84FIegvSvTEY7N4d6EAfSgSweXqWQRN28Tfhdxc2P3aaxmllne0jgylI4XbU%2BDxqCEY3cl%2F26kDrt7AdSDv1oQG4p3MnwCEXw30TbT5ZukBXayvqNKMMLgyQx4GRHy4Ojr7e6ZuvlfQoP5crav8RMkYEQA3B%2Fxi7GkkPtV%2Bhq5JtEw1hfZLXQvKITINDWeqokdCqJqWXl5Ax4obI4i%2BCUmwFJ26rGIWOotSZzlvGLK8XpocbM1Q4r2NmaFxPuwePwghLzmIsnqZZCcnVmkBGTrahJthZ8T8klHBjVpjKetz2c%2B59nAhsqzMlo8BFpLnDUV0Ec4OdihqsHJI%2FXwaIR1rjymM8QjwPjDfbydlea2%2FFRpXqiRp%2BHwlNKBOVaeP72TOrwQAWC3Xir7Lu3eTj3nwMXTu9YhpdxvqmDXRjcAikZgQncnBgwyaZhFWgLYkmx0nGY7VJ%2Fb7f1WGAVH5nqsVyK%2BoRWvaah45m9WqTLit7a66jwcDIpE%2BlQUbWJk4OZL8fbKyZKFNc89HkJMssmbPz5R5agaSdE2kiuazfg8cstvY7%2Bq203o%2BDTCSZDBuURI%2BNJa5MO3enL8GOqUBVMBvgEf06kLQW6nck54ioQa%2F2J0%2BVf3Gt7xTNkd%2F%2Fo%2B3%2FML4EtXfTYW%2FKKZgy4RicdgC0xt93m%2BjYn%2BN7o5FTNP2hUXjWjYe%2Fg%2BLF%2FmkGNMgIrW8Ols7F6WBok5Zw5Yt7tXdB2nOBecdtfXLEyTWMQRqCLaBCAdJRkKYbxFqELECT1wFG5HtqVyD6%2BwpSKDiHCs00ohZnzNyoW8TmGI1Nvweqs42&X-Amz-Signature=dd254870616631239fce1e2d9fcdd85492f9b1c0befedb9d3f8a272c33b28631&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U27W3OU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICnai5AXe%2FmYJDimLPsLpfNhc%2BOYA%2B%2FtOSjti4m0rBrEAiEA%2BH3ldhZSkQGnT0Y0wygGPNLUxCnqWiRBH8OVfBT6tZwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCHCoYIjTPSv2sXVzircAwLLDIUKD%2BIlwkpwRGS8luoOSOdivYU9xODjo9yMi1uVOxcX8LeUW84FIegvSvTEY7N4d6EAfSgSweXqWQRN28Tfhdxc2P3aaxmllne0jgylI4XbU%2BDxqCEY3cl%2F26kDrt7AdSDv1oQG4p3MnwCEXw30TbT5ZukBXayvqNKMMLgyQx4GRHy4Ojr7e6ZuvlfQoP5crav8RMkYEQA3B%2Fxi7GkkPtV%2Bhq5JtEw1hfZLXQvKITINDWeqokdCqJqWXl5Ax4obI4i%2BCUmwFJ26rGIWOotSZzlvGLK8XpocbM1Q4r2NmaFxPuwePwghLzmIsnqZZCcnVmkBGTrahJthZ8T8klHBjVpjKetz2c%2B59nAhsqzMlo8BFpLnDUV0Ec4OdihqsHJI%2FXwaIR1rjymM8QjwPjDfbydlea2%2FFRpXqiRp%2BHwlNKBOVaeP72TOrwQAWC3Xir7Lu3eTj3nwMXTu9YhpdxvqmDXRjcAikZgQncnBgwyaZhFWgLYkmx0nGY7VJ%2Fb7f1WGAVH5nqsVyK%2BoRWvaah45m9WqTLit7a66jwcDIpE%2BlQUbWJk4OZL8fbKyZKFNc89HkJMssmbPz5R5agaSdE2kiuazfg8cstvY7%2Bq203o%2BDTCSZDBuURI%2BNJa5MO3enL8GOqUBVMBvgEf06kLQW6nck54ioQa%2F2J0%2BVf3Gt7xTNkd%2F%2Fo%2B3%2FML4EtXfTYW%2FKKZgy4RicdgC0xt93m%2BjYn%2BN7o5FTNP2hUXjWjYe%2Fg%2BLF%2FmkGNMgIrW8Ols7F6WBok5Zw5Yt7tXdB2nOBecdtfXLEyTWMQRqCLaBCAdJRkKYbxFqELECT1wFG5HtqVyD6%2BwpSKDiHCs00ohZnzNyoW8TmGI1Nvweqs42&X-Amz-Signature=876a51876300b6e479ff8c53c15d17f39bbe0b7f2a2dc866a411eb1ea2e47e4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

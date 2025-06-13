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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXVWBL2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBoJMUcH%2BpuYKiBy4tiU6hLqUi%2FXWMG%2BxI%2Bm%2FFp2YAVDAiEAkypbfLaZE%2FGKcmut4XSiMuZKywJIv4eJr9caXm1lefwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHtp2Z1cdpzY53w77CrcA42yyJqpgIEmNsr7PmJY%2B2gGlTd2HhsspE4MSEjpJgBOsdjEIDBv9IHp3jdEt5DU9lI7H2RANWVC%2FZ69cy6VK1URwKbraEcldFNjMIUx%2FcWEKmnzgr0CSB836yocYC4Ttnv1frM742tUTF8SmrcjE8%2B8DLcz7tTMHgeim46vzDq41CtWM1sPU2Smo4NBTwFLi%2FD8DasaDh7C%2BTKwWt3DDEvLP5fPkYyG9pk6ZBMD1onoI0cbABGbWbkHil45DLkXVhTDOuux7s0TXKs%2FeO0G%2BfpOozm6x9M7imS98m%2Bl9t%2BwLs0Cw5BcWNeP59pEQwSYOz3XCNYEJVc%2BTjZDUMHSUyW1t6qnS2aqGtc6j7dosm5hm%2BNON1MfIOX1nVcs4D47ILw4MY2myHR%2Fw%2FETAtXrJi9BabVMiS5PluDymEYkAiDvDbk%2BCbUDP3Y3n3Brh6WMKUGC%2Bk7dRwP3wdWOjVNLn1%2FpqQgkp2TqhqfIII9n0XOFRJatm90xVMhp4Vok86hnsPNYaCcLmdqxZf4lv9cCrjux6J%2BI8ssD5KFDDLMWjddNzl39S4UuA9PDoiHF3zpCQN2BnNvuf2gYRWhLHlqeCIF9uQ%2BLd%2Bg4RiTDH4WsNS9Jf%2BBNMSvb3CPPzVS1MPSSssIGOqUBdf02ZJXC6wbhNMcOH53yAV%2BnAIdRSSrUSSVTRLEHpCqanRdOEfiKrKVZbWr7zOJ1w2d3HqKP9ITKG7VmzQKHC4DpenxCy0Fn9qkhZglY8ZBGE5tdIWeo09RYH5Hp4anbqkTKQlx03Jii8eONbBzi6mKbmimKDfEX5Cdy6i73gNYwAu%2FCOVZEjOdflWKPmAL5niHVWnyHGrJXmvDLZhYthVzbSoDM&X-Amz-Signature=18b2f4a70dfde361704ea0d7b5c4640216e01b0c1ca631dc403048e4e808f582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXVWBL2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBoJMUcH%2BpuYKiBy4tiU6hLqUi%2FXWMG%2BxI%2Bm%2FFp2YAVDAiEAkypbfLaZE%2FGKcmut4XSiMuZKywJIv4eJr9caXm1lefwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHtp2Z1cdpzY53w77CrcA42yyJqpgIEmNsr7PmJY%2B2gGlTd2HhsspE4MSEjpJgBOsdjEIDBv9IHp3jdEt5DU9lI7H2RANWVC%2FZ69cy6VK1URwKbraEcldFNjMIUx%2FcWEKmnzgr0CSB836yocYC4Ttnv1frM742tUTF8SmrcjE8%2B8DLcz7tTMHgeim46vzDq41CtWM1sPU2Smo4NBTwFLi%2FD8DasaDh7C%2BTKwWt3DDEvLP5fPkYyG9pk6ZBMD1onoI0cbABGbWbkHil45DLkXVhTDOuux7s0TXKs%2FeO0G%2BfpOozm6x9M7imS98m%2Bl9t%2BwLs0Cw5BcWNeP59pEQwSYOz3XCNYEJVc%2BTjZDUMHSUyW1t6qnS2aqGtc6j7dosm5hm%2BNON1MfIOX1nVcs4D47ILw4MY2myHR%2Fw%2FETAtXrJi9BabVMiS5PluDymEYkAiDvDbk%2BCbUDP3Y3n3Brh6WMKUGC%2Bk7dRwP3wdWOjVNLn1%2FpqQgkp2TqhqfIII9n0XOFRJatm90xVMhp4Vok86hnsPNYaCcLmdqxZf4lv9cCrjux6J%2BI8ssD5KFDDLMWjddNzl39S4UuA9PDoiHF3zpCQN2BnNvuf2gYRWhLHlqeCIF9uQ%2BLd%2Bg4RiTDH4WsNS9Jf%2BBNMSvb3CPPzVS1MPSSssIGOqUBdf02ZJXC6wbhNMcOH53yAV%2BnAIdRSSrUSSVTRLEHpCqanRdOEfiKrKVZbWr7zOJ1w2d3HqKP9ITKG7VmzQKHC4DpenxCy0Fn9qkhZglY8ZBGE5tdIWeo09RYH5Hp4anbqkTKQlx03Jii8eONbBzi6mKbmimKDfEX5Cdy6i73gNYwAu%2FCOVZEjOdflWKPmAL5niHVWnyHGrJXmvDLZhYthVzbSoDM&X-Amz-Signature=3b56582b7ff6a42e3d8618fb739402918dcedefbe9cd7a3bc23f160cdf67422e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXVWBL2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBoJMUcH%2BpuYKiBy4tiU6hLqUi%2FXWMG%2BxI%2Bm%2FFp2YAVDAiEAkypbfLaZE%2FGKcmut4XSiMuZKywJIv4eJr9caXm1lefwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHtp2Z1cdpzY53w77CrcA42yyJqpgIEmNsr7PmJY%2B2gGlTd2HhsspE4MSEjpJgBOsdjEIDBv9IHp3jdEt5DU9lI7H2RANWVC%2FZ69cy6VK1URwKbraEcldFNjMIUx%2FcWEKmnzgr0CSB836yocYC4Ttnv1frM742tUTF8SmrcjE8%2B8DLcz7tTMHgeim46vzDq41CtWM1sPU2Smo4NBTwFLi%2FD8DasaDh7C%2BTKwWt3DDEvLP5fPkYyG9pk6ZBMD1onoI0cbABGbWbkHil45DLkXVhTDOuux7s0TXKs%2FeO0G%2BfpOozm6x9M7imS98m%2Bl9t%2BwLs0Cw5BcWNeP59pEQwSYOz3XCNYEJVc%2BTjZDUMHSUyW1t6qnS2aqGtc6j7dosm5hm%2BNON1MfIOX1nVcs4D47ILw4MY2myHR%2Fw%2FETAtXrJi9BabVMiS5PluDymEYkAiDvDbk%2BCbUDP3Y3n3Brh6WMKUGC%2Bk7dRwP3wdWOjVNLn1%2FpqQgkp2TqhqfIII9n0XOFRJatm90xVMhp4Vok86hnsPNYaCcLmdqxZf4lv9cCrjux6J%2BI8ssD5KFDDLMWjddNzl39S4UuA9PDoiHF3zpCQN2BnNvuf2gYRWhLHlqeCIF9uQ%2BLd%2Bg4RiTDH4WsNS9Jf%2BBNMSvb3CPPzVS1MPSSssIGOqUBdf02ZJXC6wbhNMcOH53yAV%2BnAIdRSSrUSSVTRLEHpCqanRdOEfiKrKVZbWr7zOJ1w2d3HqKP9ITKG7VmzQKHC4DpenxCy0Fn9qkhZglY8ZBGE5tdIWeo09RYH5Hp4anbqkTKQlx03Jii8eONbBzi6mKbmimKDfEX5Cdy6i73gNYwAu%2FCOVZEjOdflWKPmAL5niHVWnyHGrJXmvDLZhYthVzbSoDM&X-Amz-Signature=057bdade37c1e405cbec28deee88a7e28de1ecca36f40597c70332d800bb0920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXVWBL2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBoJMUcH%2BpuYKiBy4tiU6hLqUi%2FXWMG%2BxI%2Bm%2FFp2YAVDAiEAkypbfLaZE%2FGKcmut4XSiMuZKywJIv4eJr9caXm1lefwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHtp2Z1cdpzY53w77CrcA42yyJqpgIEmNsr7PmJY%2B2gGlTd2HhsspE4MSEjpJgBOsdjEIDBv9IHp3jdEt5DU9lI7H2RANWVC%2FZ69cy6VK1URwKbraEcldFNjMIUx%2FcWEKmnzgr0CSB836yocYC4Ttnv1frM742tUTF8SmrcjE8%2B8DLcz7tTMHgeim46vzDq41CtWM1sPU2Smo4NBTwFLi%2FD8DasaDh7C%2BTKwWt3DDEvLP5fPkYyG9pk6ZBMD1onoI0cbABGbWbkHil45DLkXVhTDOuux7s0TXKs%2FeO0G%2BfpOozm6x9M7imS98m%2Bl9t%2BwLs0Cw5BcWNeP59pEQwSYOz3XCNYEJVc%2BTjZDUMHSUyW1t6qnS2aqGtc6j7dosm5hm%2BNON1MfIOX1nVcs4D47ILw4MY2myHR%2Fw%2FETAtXrJi9BabVMiS5PluDymEYkAiDvDbk%2BCbUDP3Y3n3Brh6WMKUGC%2Bk7dRwP3wdWOjVNLn1%2FpqQgkp2TqhqfIII9n0XOFRJatm90xVMhp4Vok86hnsPNYaCcLmdqxZf4lv9cCrjux6J%2BI8ssD5KFDDLMWjddNzl39S4UuA9PDoiHF3zpCQN2BnNvuf2gYRWhLHlqeCIF9uQ%2BLd%2Bg4RiTDH4WsNS9Jf%2BBNMSvb3CPPzVS1MPSSssIGOqUBdf02ZJXC6wbhNMcOH53yAV%2BnAIdRSSrUSSVTRLEHpCqanRdOEfiKrKVZbWr7zOJ1w2d3HqKP9ITKG7VmzQKHC4DpenxCy0Fn9qkhZglY8ZBGE5tdIWeo09RYH5Hp4anbqkTKQlx03Jii8eONbBzi6mKbmimKDfEX5Cdy6i73gNYwAu%2FCOVZEjOdflWKPmAL5niHVWnyHGrJXmvDLZhYthVzbSoDM&X-Amz-Signature=989b4e8112997b5faf023c2efeb21ce4cd54e54905b513e565e3a4b40292a97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXVWBL2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBoJMUcH%2BpuYKiBy4tiU6hLqUi%2FXWMG%2BxI%2Bm%2FFp2YAVDAiEAkypbfLaZE%2FGKcmut4XSiMuZKywJIv4eJr9caXm1lefwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHtp2Z1cdpzY53w77CrcA42yyJqpgIEmNsr7PmJY%2B2gGlTd2HhsspE4MSEjpJgBOsdjEIDBv9IHp3jdEt5DU9lI7H2RANWVC%2FZ69cy6VK1URwKbraEcldFNjMIUx%2FcWEKmnzgr0CSB836yocYC4Ttnv1frM742tUTF8SmrcjE8%2B8DLcz7tTMHgeim46vzDq41CtWM1sPU2Smo4NBTwFLi%2FD8DasaDh7C%2BTKwWt3DDEvLP5fPkYyG9pk6ZBMD1onoI0cbABGbWbkHil45DLkXVhTDOuux7s0TXKs%2FeO0G%2BfpOozm6x9M7imS98m%2Bl9t%2BwLs0Cw5BcWNeP59pEQwSYOz3XCNYEJVc%2BTjZDUMHSUyW1t6qnS2aqGtc6j7dosm5hm%2BNON1MfIOX1nVcs4D47ILw4MY2myHR%2Fw%2FETAtXrJi9BabVMiS5PluDymEYkAiDvDbk%2BCbUDP3Y3n3Brh6WMKUGC%2Bk7dRwP3wdWOjVNLn1%2FpqQgkp2TqhqfIII9n0XOFRJatm90xVMhp4Vok86hnsPNYaCcLmdqxZf4lv9cCrjux6J%2BI8ssD5KFDDLMWjddNzl39S4UuA9PDoiHF3zpCQN2BnNvuf2gYRWhLHlqeCIF9uQ%2BLd%2Bg4RiTDH4WsNS9Jf%2BBNMSvb3CPPzVS1MPSSssIGOqUBdf02ZJXC6wbhNMcOH53yAV%2BnAIdRSSrUSSVTRLEHpCqanRdOEfiKrKVZbWr7zOJ1w2d3HqKP9ITKG7VmzQKHC4DpenxCy0Fn9qkhZglY8ZBGE5tdIWeo09RYH5Hp4anbqkTKQlx03Jii8eONbBzi6mKbmimKDfEX5Cdy6i73gNYwAu%2FCOVZEjOdflWKPmAL5niHVWnyHGrJXmvDLZhYthVzbSoDM&X-Amz-Signature=61dd5dac230975653b6deb5e74cc79747af08908306ca1b1c8040ecc44f02832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXVWBL2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBoJMUcH%2BpuYKiBy4tiU6hLqUi%2FXWMG%2BxI%2Bm%2FFp2YAVDAiEAkypbfLaZE%2FGKcmut4XSiMuZKywJIv4eJr9caXm1lefwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHtp2Z1cdpzY53w77CrcA42yyJqpgIEmNsr7PmJY%2B2gGlTd2HhsspE4MSEjpJgBOsdjEIDBv9IHp3jdEt5DU9lI7H2RANWVC%2FZ69cy6VK1URwKbraEcldFNjMIUx%2FcWEKmnzgr0CSB836yocYC4Ttnv1frM742tUTF8SmrcjE8%2B8DLcz7tTMHgeim46vzDq41CtWM1sPU2Smo4NBTwFLi%2FD8DasaDh7C%2BTKwWt3DDEvLP5fPkYyG9pk6ZBMD1onoI0cbABGbWbkHil45DLkXVhTDOuux7s0TXKs%2FeO0G%2BfpOozm6x9M7imS98m%2Bl9t%2BwLs0Cw5BcWNeP59pEQwSYOz3XCNYEJVc%2BTjZDUMHSUyW1t6qnS2aqGtc6j7dosm5hm%2BNON1MfIOX1nVcs4D47ILw4MY2myHR%2Fw%2FETAtXrJi9BabVMiS5PluDymEYkAiDvDbk%2BCbUDP3Y3n3Brh6WMKUGC%2Bk7dRwP3wdWOjVNLn1%2FpqQgkp2TqhqfIII9n0XOFRJatm90xVMhp4Vok86hnsPNYaCcLmdqxZf4lv9cCrjux6J%2BI8ssD5KFDDLMWjddNzl39S4UuA9PDoiHF3zpCQN2BnNvuf2gYRWhLHlqeCIF9uQ%2BLd%2Bg4RiTDH4WsNS9Jf%2BBNMSvb3CPPzVS1MPSSssIGOqUBdf02ZJXC6wbhNMcOH53yAV%2BnAIdRSSrUSSVTRLEHpCqanRdOEfiKrKVZbWr7zOJ1w2d3HqKP9ITKG7VmzQKHC4DpenxCy0Fn9qkhZglY8ZBGE5tdIWeo09RYH5Hp4anbqkTKQlx03Jii8eONbBzi6mKbmimKDfEX5Cdy6i73gNYwAu%2FCOVZEjOdflWKPmAL5niHVWnyHGrJXmvDLZhYthVzbSoDM&X-Amz-Signature=0ab05d1e120894dab7f484fc96813d8b91f250dae7239879760e317aadb9dc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXVWBL2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBoJMUcH%2BpuYKiBy4tiU6hLqUi%2FXWMG%2BxI%2Bm%2FFp2YAVDAiEAkypbfLaZE%2FGKcmut4XSiMuZKywJIv4eJr9caXm1lefwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHtp2Z1cdpzY53w77CrcA42yyJqpgIEmNsr7PmJY%2B2gGlTd2HhsspE4MSEjpJgBOsdjEIDBv9IHp3jdEt5DU9lI7H2RANWVC%2FZ69cy6VK1URwKbraEcldFNjMIUx%2FcWEKmnzgr0CSB836yocYC4Ttnv1frM742tUTF8SmrcjE8%2B8DLcz7tTMHgeim46vzDq41CtWM1sPU2Smo4NBTwFLi%2FD8DasaDh7C%2BTKwWt3DDEvLP5fPkYyG9pk6ZBMD1onoI0cbABGbWbkHil45DLkXVhTDOuux7s0TXKs%2FeO0G%2BfpOozm6x9M7imS98m%2Bl9t%2BwLs0Cw5BcWNeP59pEQwSYOz3XCNYEJVc%2BTjZDUMHSUyW1t6qnS2aqGtc6j7dosm5hm%2BNON1MfIOX1nVcs4D47ILw4MY2myHR%2Fw%2FETAtXrJi9BabVMiS5PluDymEYkAiDvDbk%2BCbUDP3Y3n3Brh6WMKUGC%2Bk7dRwP3wdWOjVNLn1%2FpqQgkp2TqhqfIII9n0XOFRJatm90xVMhp4Vok86hnsPNYaCcLmdqxZf4lv9cCrjux6J%2BI8ssD5KFDDLMWjddNzl39S4UuA9PDoiHF3zpCQN2BnNvuf2gYRWhLHlqeCIF9uQ%2BLd%2Bg4RiTDH4WsNS9Jf%2BBNMSvb3CPPzVS1MPSSssIGOqUBdf02ZJXC6wbhNMcOH53yAV%2BnAIdRSSrUSSVTRLEHpCqanRdOEfiKrKVZbWr7zOJ1w2d3HqKP9ITKG7VmzQKHC4DpenxCy0Fn9qkhZglY8ZBGE5tdIWeo09RYH5Hp4anbqkTKQlx03Jii8eONbBzi6mKbmimKDfEX5Cdy6i73gNYwAu%2FCOVZEjOdflWKPmAL5niHVWnyHGrJXmvDLZhYthVzbSoDM&X-Amz-Signature=de43e2927f06620e35233f6aaa6d531b4c5b4400b19e1dd5d8aa80966e8cb953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXVWBL2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBoJMUcH%2BpuYKiBy4tiU6hLqUi%2FXWMG%2BxI%2Bm%2FFp2YAVDAiEAkypbfLaZE%2FGKcmut4XSiMuZKywJIv4eJr9caXm1lefwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHtp2Z1cdpzY53w77CrcA42yyJqpgIEmNsr7PmJY%2B2gGlTd2HhsspE4MSEjpJgBOsdjEIDBv9IHp3jdEt5DU9lI7H2RANWVC%2FZ69cy6VK1URwKbraEcldFNjMIUx%2FcWEKmnzgr0CSB836yocYC4Ttnv1frM742tUTF8SmrcjE8%2B8DLcz7tTMHgeim46vzDq41CtWM1sPU2Smo4NBTwFLi%2FD8DasaDh7C%2BTKwWt3DDEvLP5fPkYyG9pk6ZBMD1onoI0cbABGbWbkHil45DLkXVhTDOuux7s0TXKs%2FeO0G%2BfpOozm6x9M7imS98m%2Bl9t%2BwLs0Cw5BcWNeP59pEQwSYOz3XCNYEJVc%2BTjZDUMHSUyW1t6qnS2aqGtc6j7dosm5hm%2BNON1MfIOX1nVcs4D47ILw4MY2myHR%2Fw%2FETAtXrJi9BabVMiS5PluDymEYkAiDvDbk%2BCbUDP3Y3n3Brh6WMKUGC%2Bk7dRwP3wdWOjVNLn1%2FpqQgkp2TqhqfIII9n0XOFRJatm90xVMhp4Vok86hnsPNYaCcLmdqxZf4lv9cCrjux6J%2BI8ssD5KFDDLMWjddNzl39S4UuA9PDoiHF3zpCQN2BnNvuf2gYRWhLHlqeCIF9uQ%2BLd%2Bg4RiTDH4WsNS9Jf%2BBNMSvb3CPPzVS1MPSSssIGOqUBdf02ZJXC6wbhNMcOH53yAV%2BnAIdRSSrUSSVTRLEHpCqanRdOEfiKrKVZbWr7zOJ1w2d3HqKP9ITKG7VmzQKHC4DpenxCy0Fn9qkhZglY8ZBGE5tdIWeo09RYH5Hp4anbqkTKQlx03Jii8eONbBzi6mKbmimKDfEX5Cdy6i73gNYwAu%2FCOVZEjOdflWKPmAL5niHVWnyHGrJXmvDLZhYthVzbSoDM&X-Amz-Signature=5eafd478e6daa8edcd71a271097974ca3e5f871f14d1e87818302279b1334c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

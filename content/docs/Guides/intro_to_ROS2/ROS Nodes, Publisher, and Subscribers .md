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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLFZZHV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIC6iygJ8ppFHjCEaOnEv4ukk4txpUy76teNupvWX9e2nAiEAx%2FpnCVxUhKn6f6l5jiZro8jvxQCSxfor06TXOc0yNdMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLz%2BSyCa8Y%2FelGwMvircA5pgai8qBlhx5lZr4zcQ6rFA%2BXxIHQNrUMN2kfnvlKb5N8k3uYwKyJWJmqNtr4dRo4ADXawDMeTHcinIQ92dMP7XvzCpKJAwnyuXX3F2K%2FNecAmh4qWMMtJT64YfwT9rzA%2BhEC4r12cXR3v4%2Bq5v12um1Chq4GvmEAz55BP1Fr0B8HlN7M6IRzhP7tItG1g%2F2Tdvjv3QtX%2BY3Rx5lXboUzWnRuwds73KRvy5xSZLS33cPrCqBtezIBOx353BkykrdgVrVvbRa%2F2uJqzrIdkUHFmCe1WlnAU%2Bj5nLThfRMwn1thZm9oTXjOAcDaAicOfAkc1qjRTStzYEnC1YiQ1BZ5EPDx9eIzgomPk2m59g%2Fb3r4Y1BOoowuDHGQT00y3ROFVwTHuhTa6gQi%2FGNTJzpwWoXsbZit18BY3HFNyCAwzQOfjwR7JscceoG99QiFVjbq8Ccq%2F0xutlfG7AsWhz%2FbRRdyZ%2B1P%2BDvy%2BoR71TccqsVpC%2F1XtuEsQTN9znarEpAnB9gY%2B%2FiPP3Ik69heJKNuBlHSCQIGPcyru9MkSyOtTu1vZQEEUtswky4HVUqDUy%2FdapBx4sdUElQzJwXNR0y1SQd3Dz%2FkR0P5slThF4vqlSAwesBHiogI1tOmp7qMPypgcIGOqUBUbw4szQoJaKVdb9bm2sLJkgILyYhnllVoRQV6UBE1y0oAFLk%2B3kBt6PXSqZ66fxbZ9nYOQ%2BMSXFpLSEWHtxjrnQwPRwpFIi86rx0tyZbHQeyBm%2FvTGmrtpbaJO0xmvBLlus3JdhLnuE6oNxZ1%2BCDVblTf2lQPA%2F56cUlM8rgIvDGSu%2B%2F8ZGWn7AUAUJMXmMDUNFGrGw7WC7zgITSL3PLU9RwfMG1&X-Amz-Signature=67c838e7cdb7692b488ec4b2601b968d7323dddda8a5c97cf5543f03efa9f77c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLFZZHV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIC6iygJ8ppFHjCEaOnEv4ukk4txpUy76teNupvWX9e2nAiEAx%2FpnCVxUhKn6f6l5jiZro8jvxQCSxfor06TXOc0yNdMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLz%2BSyCa8Y%2FelGwMvircA5pgai8qBlhx5lZr4zcQ6rFA%2BXxIHQNrUMN2kfnvlKb5N8k3uYwKyJWJmqNtr4dRo4ADXawDMeTHcinIQ92dMP7XvzCpKJAwnyuXX3F2K%2FNecAmh4qWMMtJT64YfwT9rzA%2BhEC4r12cXR3v4%2Bq5v12um1Chq4GvmEAz55BP1Fr0B8HlN7M6IRzhP7tItG1g%2F2Tdvjv3QtX%2BY3Rx5lXboUzWnRuwds73KRvy5xSZLS33cPrCqBtezIBOx353BkykrdgVrVvbRa%2F2uJqzrIdkUHFmCe1WlnAU%2Bj5nLThfRMwn1thZm9oTXjOAcDaAicOfAkc1qjRTStzYEnC1YiQ1BZ5EPDx9eIzgomPk2m59g%2Fb3r4Y1BOoowuDHGQT00y3ROFVwTHuhTa6gQi%2FGNTJzpwWoXsbZit18BY3HFNyCAwzQOfjwR7JscceoG99QiFVjbq8Ccq%2F0xutlfG7AsWhz%2FbRRdyZ%2B1P%2BDvy%2BoR71TccqsVpC%2F1XtuEsQTN9znarEpAnB9gY%2B%2FiPP3Ik69heJKNuBlHSCQIGPcyru9MkSyOtTu1vZQEEUtswky4HVUqDUy%2FdapBx4sdUElQzJwXNR0y1SQd3Dz%2FkR0P5slThF4vqlSAwesBHiogI1tOmp7qMPypgcIGOqUBUbw4szQoJaKVdb9bm2sLJkgILyYhnllVoRQV6UBE1y0oAFLk%2B3kBt6PXSqZ66fxbZ9nYOQ%2BMSXFpLSEWHtxjrnQwPRwpFIi86rx0tyZbHQeyBm%2FvTGmrtpbaJO0xmvBLlus3JdhLnuE6oNxZ1%2BCDVblTf2lQPA%2F56cUlM8rgIvDGSu%2B%2F8ZGWn7AUAUJMXmMDUNFGrGw7WC7zgITSL3PLU9RwfMG1&X-Amz-Signature=18c535e4955db44cd2b8a4c45a71ef76af713e2d8e60fbd0736d704bfafbfd08&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLFZZHV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIC6iygJ8ppFHjCEaOnEv4ukk4txpUy76teNupvWX9e2nAiEAx%2FpnCVxUhKn6f6l5jiZro8jvxQCSxfor06TXOc0yNdMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLz%2BSyCa8Y%2FelGwMvircA5pgai8qBlhx5lZr4zcQ6rFA%2BXxIHQNrUMN2kfnvlKb5N8k3uYwKyJWJmqNtr4dRo4ADXawDMeTHcinIQ92dMP7XvzCpKJAwnyuXX3F2K%2FNecAmh4qWMMtJT64YfwT9rzA%2BhEC4r12cXR3v4%2Bq5v12um1Chq4GvmEAz55BP1Fr0B8HlN7M6IRzhP7tItG1g%2F2Tdvjv3QtX%2BY3Rx5lXboUzWnRuwds73KRvy5xSZLS33cPrCqBtezIBOx353BkykrdgVrVvbRa%2F2uJqzrIdkUHFmCe1WlnAU%2Bj5nLThfRMwn1thZm9oTXjOAcDaAicOfAkc1qjRTStzYEnC1YiQ1BZ5EPDx9eIzgomPk2m59g%2Fb3r4Y1BOoowuDHGQT00y3ROFVwTHuhTa6gQi%2FGNTJzpwWoXsbZit18BY3HFNyCAwzQOfjwR7JscceoG99QiFVjbq8Ccq%2F0xutlfG7AsWhz%2FbRRdyZ%2B1P%2BDvy%2BoR71TccqsVpC%2F1XtuEsQTN9znarEpAnB9gY%2B%2FiPP3Ik69heJKNuBlHSCQIGPcyru9MkSyOtTu1vZQEEUtswky4HVUqDUy%2FdapBx4sdUElQzJwXNR0y1SQd3Dz%2FkR0P5slThF4vqlSAwesBHiogI1tOmp7qMPypgcIGOqUBUbw4szQoJaKVdb9bm2sLJkgILyYhnllVoRQV6UBE1y0oAFLk%2B3kBt6PXSqZ66fxbZ9nYOQ%2BMSXFpLSEWHtxjrnQwPRwpFIi86rx0tyZbHQeyBm%2FvTGmrtpbaJO0xmvBLlus3JdhLnuE6oNxZ1%2BCDVblTf2lQPA%2F56cUlM8rgIvDGSu%2B%2F8ZGWn7AUAUJMXmMDUNFGrGw7WC7zgITSL3PLU9RwfMG1&X-Amz-Signature=0afd74eeedb1eca5d3b2aba3daaf6544bec0409a57b3c7218a5a818f7f8ff032&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLFZZHV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIC6iygJ8ppFHjCEaOnEv4ukk4txpUy76teNupvWX9e2nAiEAx%2FpnCVxUhKn6f6l5jiZro8jvxQCSxfor06TXOc0yNdMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLz%2BSyCa8Y%2FelGwMvircA5pgai8qBlhx5lZr4zcQ6rFA%2BXxIHQNrUMN2kfnvlKb5N8k3uYwKyJWJmqNtr4dRo4ADXawDMeTHcinIQ92dMP7XvzCpKJAwnyuXX3F2K%2FNecAmh4qWMMtJT64YfwT9rzA%2BhEC4r12cXR3v4%2Bq5v12um1Chq4GvmEAz55BP1Fr0B8HlN7M6IRzhP7tItG1g%2F2Tdvjv3QtX%2BY3Rx5lXboUzWnRuwds73KRvy5xSZLS33cPrCqBtezIBOx353BkykrdgVrVvbRa%2F2uJqzrIdkUHFmCe1WlnAU%2Bj5nLThfRMwn1thZm9oTXjOAcDaAicOfAkc1qjRTStzYEnC1YiQ1BZ5EPDx9eIzgomPk2m59g%2Fb3r4Y1BOoowuDHGQT00y3ROFVwTHuhTa6gQi%2FGNTJzpwWoXsbZit18BY3HFNyCAwzQOfjwR7JscceoG99QiFVjbq8Ccq%2F0xutlfG7AsWhz%2FbRRdyZ%2B1P%2BDvy%2BoR71TccqsVpC%2F1XtuEsQTN9znarEpAnB9gY%2B%2FiPP3Ik69heJKNuBlHSCQIGPcyru9MkSyOtTu1vZQEEUtswky4HVUqDUy%2FdapBx4sdUElQzJwXNR0y1SQd3Dz%2FkR0P5slThF4vqlSAwesBHiogI1tOmp7qMPypgcIGOqUBUbw4szQoJaKVdb9bm2sLJkgILyYhnllVoRQV6UBE1y0oAFLk%2B3kBt6PXSqZ66fxbZ9nYOQ%2BMSXFpLSEWHtxjrnQwPRwpFIi86rx0tyZbHQeyBm%2FvTGmrtpbaJO0xmvBLlus3JdhLnuE6oNxZ1%2BCDVblTf2lQPA%2F56cUlM8rgIvDGSu%2B%2F8ZGWn7AUAUJMXmMDUNFGrGw7WC7zgITSL3PLU9RwfMG1&X-Amz-Signature=da02810f88d5e6ad8c106161a8af56ee9504b7c4ea6a6307f5549ad3c15c0d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLFZZHV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIC6iygJ8ppFHjCEaOnEv4ukk4txpUy76teNupvWX9e2nAiEAx%2FpnCVxUhKn6f6l5jiZro8jvxQCSxfor06TXOc0yNdMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLz%2BSyCa8Y%2FelGwMvircA5pgai8qBlhx5lZr4zcQ6rFA%2BXxIHQNrUMN2kfnvlKb5N8k3uYwKyJWJmqNtr4dRo4ADXawDMeTHcinIQ92dMP7XvzCpKJAwnyuXX3F2K%2FNecAmh4qWMMtJT64YfwT9rzA%2BhEC4r12cXR3v4%2Bq5v12um1Chq4GvmEAz55BP1Fr0B8HlN7M6IRzhP7tItG1g%2F2Tdvjv3QtX%2BY3Rx5lXboUzWnRuwds73KRvy5xSZLS33cPrCqBtezIBOx353BkykrdgVrVvbRa%2F2uJqzrIdkUHFmCe1WlnAU%2Bj5nLThfRMwn1thZm9oTXjOAcDaAicOfAkc1qjRTStzYEnC1YiQ1BZ5EPDx9eIzgomPk2m59g%2Fb3r4Y1BOoowuDHGQT00y3ROFVwTHuhTa6gQi%2FGNTJzpwWoXsbZit18BY3HFNyCAwzQOfjwR7JscceoG99QiFVjbq8Ccq%2F0xutlfG7AsWhz%2FbRRdyZ%2B1P%2BDvy%2BoR71TccqsVpC%2F1XtuEsQTN9znarEpAnB9gY%2B%2FiPP3Ik69heJKNuBlHSCQIGPcyru9MkSyOtTu1vZQEEUtswky4HVUqDUy%2FdapBx4sdUElQzJwXNR0y1SQd3Dz%2FkR0P5slThF4vqlSAwesBHiogI1tOmp7qMPypgcIGOqUBUbw4szQoJaKVdb9bm2sLJkgILyYhnllVoRQV6UBE1y0oAFLk%2B3kBt6PXSqZ66fxbZ9nYOQ%2BMSXFpLSEWHtxjrnQwPRwpFIi86rx0tyZbHQeyBm%2FvTGmrtpbaJO0xmvBLlus3JdhLnuE6oNxZ1%2BCDVblTf2lQPA%2F56cUlM8rgIvDGSu%2B%2F8ZGWn7AUAUJMXmMDUNFGrGw7WC7zgITSL3PLU9RwfMG1&X-Amz-Signature=fa4ce37ac636824cfd5d67678056895a6c948822bbc6bd183b512f970945bc06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLFZZHV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIC6iygJ8ppFHjCEaOnEv4ukk4txpUy76teNupvWX9e2nAiEAx%2FpnCVxUhKn6f6l5jiZro8jvxQCSxfor06TXOc0yNdMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLz%2BSyCa8Y%2FelGwMvircA5pgai8qBlhx5lZr4zcQ6rFA%2BXxIHQNrUMN2kfnvlKb5N8k3uYwKyJWJmqNtr4dRo4ADXawDMeTHcinIQ92dMP7XvzCpKJAwnyuXX3F2K%2FNecAmh4qWMMtJT64YfwT9rzA%2BhEC4r12cXR3v4%2Bq5v12um1Chq4GvmEAz55BP1Fr0B8HlN7M6IRzhP7tItG1g%2F2Tdvjv3QtX%2BY3Rx5lXboUzWnRuwds73KRvy5xSZLS33cPrCqBtezIBOx353BkykrdgVrVvbRa%2F2uJqzrIdkUHFmCe1WlnAU%2Bj5nLThfRMwn1thZm9oTXjOAcDaAicOfAkc1qjRTStzYEnC1YiQ1BZ5EPDx9eIzgomPk2m59g%2Fb3r4Y1BOoowuDHGQT00y3ROFVwTHuhTa6gQi%2FGNTJzpwWoXsbZit18BY3HFNyCAwzQOfjwR7JscceoG99QiFVjbq8Ccq%2F0xutlfG7AsWhz%2FbRRdyZ%2B1P%2BDvy%2BoR71TccqsVpC%2F1XtuEsQTN9znarEpAnB9gY%2B%2FiPP3Ik69heJKNuBlHSCQIGPcyru9MkSyOtTu1vZQEEUtswky4HVUqDUy%2FdapBx4sdUElQzJwXNR0y1SQd3Dz%2FkR0P5slThF4vqlSAwesBHiogI1tOmp7qMPypgcIGOqUBUbw4szQoJaKVdb9bm2sLJkgILyYhnllVoRQV6UBE1y0oAFLk%2B3kBt6PXSqZ66fxbZ9nYOQ%2BMSXFpLSEWHtxjrnQwPRwpFIi86rx0tyZbHQeyBm%2FvTGmrtpbaJO0xmvBLlus3JdhLnuE6oNxZ1%2BCDVblTf2lQPA%2F56cUlM8rgIvDGSu%2B%2F8ZGWn7AUAUJMXmMDUNFGrGw7WC7zgITSL3PLU9RwfMG1&X-Amz-Signature=15a94cf4a7ca9225aeefcb6900b2b8ab9647d313e3f2685509253c41d1fb9afb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLFZZHV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIC6iygJ8ppFHjCEaOnEv4ukk4txpUy76teNupvWX9e2nAiEAx%2FpnCVxUhKn6f6l5jiZro8jvxQCSxfor06TXOc0yNdMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLz%2BSyCa8Y%2FelGwMvircA5pgai8qBlhx5lZr4zcQ6rFA%2BXxIHQNrUMN2kfnvlKb5N8k3uYwKyJWJmqNtr4dRo4ADXawDMeTHcinIQ92dMP7XvzCpKJAwnyuXX3F2K%2FNecAmh4qWMMtJT64YfwT9rzA%2BhEC4r12cXR3v4%2Bq5v12um1Chq4GvmEAz55BP1Fr0B8HlN7M6IRzhP7tItG1g%2F2Tdvjv3QtX%2BY3Rx5lXboUzWnRuwds73KRvy5xSZLS33cPrCqBtezIBOx353BkykrdgVrVvbRa%2F2uJqzrIdkUHFmCe1WlnAU%2Bj5nLThfRMwn1thZm9oTXjOAcDaAicOfAkc1qjRTStzYEnC1YiQ1BZ5EPDx9eIzgomPk2m59g%2Fb3r4Y1BOoowuDHGQT00y3ROFVwTHuhTa6gQi%2FGNTJzpwWoXsbZit18BY3HFNyCAwzQOfjwR7JscceoG99QiFVjbq8Ccq%2F0xutlfG7AsWhz%2FbRRdyZ%2B1P%2BDvy%2BoR71TccqsVpC%2F1XtuEsQTN9znarEpAnB9gY%2B%2FiPP3Ik69heJKNuBlHSCQIGPcyru9MkSyOtTu1vZQEEUtswky4HVUqDUy%2FdapBx4sdUElQzJwXNR0y1SQd3Dz%2FkR0P5slThF4vqlSAwesBHiogI1tOmp7qMPypgcIGOqUBUbw4szQoJaKVdb9bm2sLJkgILyYhnllVoRQV6UBE1y0oAFLk%2B3kBt6PXSqZ66fxbZ9nYOQ%2BMSXFpLSEWHtxjrnQwPRwpFIi86rx0tyZbHQeyBm%2FvTGmrtpbaJO0xmvBLlus3JdhLnuE6oNxZ1%2BCDVblTf2lQPA%2F56cUlM8rgIvDGSu%2B%2F8ZGWn7AUAUJMXmMDUNFGrGw7WC7zgITSL3PLU9RwfMG1&X-Amz-Signature=cf0722936288b9efbd01058725c6520966a702f855f008be6e6f75a4e7d9b805&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLFZZHV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIC6iygJ8ppFHjCEaOnEv4ukk4txpUy76teNupvWX9e2nAiEAx%2FpnCVxUhKn6f6l5jiZro8jvxQCSxfor06TXOc0yNdMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLz%2BSyCa8Y%2FelGwMvircA5pgai8qBlhx5lZr4zcQ6rFA%2BXxIHQNrUMN2kfnvlKb5N8k3uYwKyJWJmqNtr4dRo4ADXawDMeTHcinIQ92dMP7XvzCpKJAwnyuXX3F2K%2FNecAmh4qWMMtJT64YfwT9rzA%2BhEC4r12cXR3v4%2Bq5v12um1Chq4GvmEAz55BP1Fr0B8HlN7M6IRzhP7tItG1g%2F2Tdvjv3QtX%2BY3Rx5lXboUzWnRuwds73KRvy5xSZLS33cPrCqBtezIBOx353BkykrdgVrVvbRa%2F2uJqzrIdkUHFmCe1WlnAU%2Bj5nLThfRMwn1thZm9oTXjOAcDaAicOfAkc1qjRTStzYEnC1YiQ1BZ5EPDx9eIzgomPk2m59g%2Fb3r4Y1BOoowuDHGQT00y3ROFVwTHuhTa6gQi%2FGNTJzpwWoXsbZit18BY3HFNyCAwzQOfjwR7JscceoG99QiFVjbq8Ccq%2F0xutlfG7AsWhz%2FbRRdyZ%2B1P%2BDvy%2BoR71TccqsVpC%2F1XtuEsQTN9znarEpAnB9gY%2B%2FiPP3Ik69heJKNuBlHSCQIGPcyru9MkSyOtTu1vZQEEUtswky4HVUqDUy%2FdapBx4sdUElQzJwXNR0y1SQd3Dz%2FkR0P5slThF4vqlSAwesBHiogI1tOmp7qMPypgcIGOqUBUbw4szQoJaKVdb9bm2sLJkgILyYhnllVoRQV6UBE1y0oAFLk%2B3kBt6PXSqZ66fxbZ9nYOQ%2BMSXFpLSEWHtxjrnQwPRwpFIi86rx0tyZbHQeyBm%2FvTGmrtpbaJO0xmvBLlus3JdhLnuE6oNxZ1%2BCDVblTf2lQPA%2F56cUlM8rgIvDGSu%2B%2F8ZGWn7AUAUJMXmMDUNFGrGw7WC7zgITSL3PLU9RwfMG1&X-Amz-Signature=a8c7683aa40f3df52f19ecd6ddcf6da94272234c93fe42ed0051925e858dfbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

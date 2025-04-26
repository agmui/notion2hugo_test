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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMLHOGM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2Bf%2BX7qfu84qglj7LaLb2oUBsNJKU3ZgOfA3L33TC2AiBd4i1OAifoXYFOKLzJ302c15j1KSRuD4%2B2ESUyGzO%2FGyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtVf4qNrFXF0U7UJPKtwDgF1R9yoizca4elB6JqlVgoMWkLZvNXmsKRimX7l6hfwm%2FEjkxksUiylQqFqoLW%2BKZZDrD1kdBFSX9%2FVelgL2%2Bbl63q9qnW%2B3ImJnon%2FRRq3QnhnXo%2Fk7pCCKg2yXGNXPWTIB15Zlo5YskCpkLzWGSFhQToqze529OnhBsBafs8m8T766SU%2F6hEswljj3eLsVdzvd312YelVclLRuS0q1Dzrv%2Bb8szrsYRSTuH84Ro3pvMaOvR2gjm81FSXOT2xOes9eERVtDjaKtDRuZA6aZGO9R0jvOjmurga6e5JxNJj1gNy2Bu5iwMPl1yAj3gdkP1OEyq5LHsKoHwbgyD%2F8MXRDbeEvEIfuvPmKp3N4byGRzXbC4DSLXTNC0SbGZuc7EHqLu6GEO3M9i%2FEVA67n1pc0h%2FOXrh8oD5s%2BvXK7EJprHcnC3nW%2FUtTANkifaKWr7i5gclz8MB8Bdvbzht2cvOOnTcl%2BfYfV7hX97styjiRq%2F7ScUCvhT6KVDaui8bqhzzGYvVSROI3BOjVFEBUrWi3VmUDH3pgVf%2FWIScSPhJlH0iGngJV4%2BaewU0MYGFCiRi%2BCcJoIOu%2BmlvESmX9y0D%2BEJEvsYkmudzkp9k6KE5eX78arwY4vnTQKXeKswqYSywAY6pgH6vv8IeoxmKfME9qUY2kEd4SE4ibl0%2Frq1jNJPsZ8KbdnetIt2rzF9CFlQ1x1QBehqueQdpma4K8vToH4XnI5Kh0wk8oD74S8nOdXYWLs4bq6Zzdrc6BAYK%2B7uYgFANdlYgWTz16Qyfjcfs%2FJl4iEV7jmydbyxW0QnLIjcKOT%2Bz2dccZf4JI%2BUTH6pbSd9xCTLM9v3mRlJMT8k%2FnfcOfuDH0aOjcTv&X-Amz-Signature=3740684a94a696abd821b06174072d0c56028bce6e8a1b123cfefafb127ac3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMLHOGM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2Bf%2BX7qfu84qglj7LaLb2oUBsNJKU3ZgOfA3L33TC2AiBd4i1OAifoXYFOKLzJ302c15j1KSRuD4%2B2ESUyGzO%2FGyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtVf4qNrFXF0U7UJPKtwDgF1R9yoizca4elB6JqlVgoMWkLZvNXmsKRimX7l6hfwm%2FEjkxksUiylQqFqoLW%2BKZZDrD1kdBFSX9%2FVelgL2%2Bbl63q9qnW%2B3ImJnon%2FRRq3QnhnXo%2Fk7pCCKg2yXGNXPWTIB15Zlo5YskCpkLzWGSFhQToqze529OnhBsBafs8m8T766SU%2F6hEswljj3eLsVdzvd312YelVclLRuS0q1Dzrv%2Bb8szrsYRSTuH84Ro3pvMaOvR2gjm81FSXOT2xOes9eERVtDjaKtDRuZA6aZGO9R0jvOjmurga6e5JxNJj1gNy2Bu5iwMPl1yAj3gdkP1OEyq5LHsKoHwbgyD%2F8MXRDbeEvEIfuvPmKp3N4byGRzXbC4DSLXTNC0SbGZuc7EHqLu6GEO3M9i%2FEVA67n1pc0h%2FOXrh8oD5s%2BvXK7EJprHcnC3nW%2FUtTANkifaKWr7i5gclz8MB8Bdvbzht2cvOOnTcl%2BfYfV7hX97styjiRq%2F7ScUCvhT6KVDaui8bqhzzGYvVSROI3BOjVFEBUrWi3VmUDH3pgVf%2FWIScSPhJlH0iGngJV4%2BaewU0MYGFCiRi%2BCcJoIOu%2BmlvESmX9y0D%2BEJEvsYkmudzkp9k6KE5eX78arwY4vnTQKXeKswqYSywAY6pgH6vv8IeoxmKfME9qUY2kEd4SE4ibl0%2Frq1jNJPsZ8KbdnetIt2rzF9CFlQ1x1QBehqueQdpma4K8vToH4XnI5Kh0wk8oD74S8nOdXYWLs4bq6Zzdrc6BAYK%2B7uYgFANdlYgWTz16Qyfjcfs%2FJl4iEV7jmydbyxW0QnLIjcKOT%2Bz2dccZf4JI%2BUTH6pbSd9xCTLM9v3mRlJMT8k%2FnfcOfuDH0aOjcTv&X-Amz-Signature=f710e1cd44943ac6918fce5b991a7ef2a0f6ed33236d8f2a8387e208ff1191f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMLHOGM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2Bf%2BX7qfu84qglj7LaLb2oUBsNJKU3ZgOfA3L33TC2AiBd4i1OAifoXYFOKLzJ302c15j1KSRuD4%2B2ESUyGzO%2FGyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtVf4qNrFXF0U7UJPKtwDgF1R9yoizca4elB6JqlVgoMWkLZvNXmsKRimX7l6hfwm%2FEjkxksUiylQqFqoLW%2BKZZDrD1kdBFSX9%2FVelgL2%2Bbl63q9qnW%2B3ImJnon%2FRRq3QnhnXo%2Fk7pCCKg2yXGNXPWTIB15Zlo5YskCpkLzWGSFhQToqze529OnhBsBafs8m8T766SU%2F6hEswljj3eLsVdzvd312YelVclLRuS0q1Dzrv%2Bb8szrsYRSTuH84Ro3pvMaOvR2gjm81FSXOT2xOes9eERVtDjaKtDRuZA6aZGO9R0jvOjmurga6e5JxNJj1gNy2Bu5iwMPl1yAj3gdkP1OEyq5LHsKoHwbgyD%2F8MXRDbeEvEIfuvPmKp3N4byGRzXbC4DSLXTNC0SbGZuc7EHqLu6GEO3M9i%2FEVA67n1pc0h%2FOXrh8oD5s%2BvXK7EJprHcnC3nW%2FUtTANkifaKWr7i5gclz8MB8Bdvbzht2cvOOnTcl%2BfYfV7hX97styjiRq%2F7ScUCvhT6KVDaui8bqhzzGYvVSROI3BOjVFEBUrWi3VmUDH3pgVf%2FWIScSPhJlH0iGngJV4%2BaewU0MYGFCiRi%2BCcJoIOu%2BmlvESmX9y0D%2BEJEvsYkmudzkp9k6KE5eX78arwY4vnTQKXeKswqYSywAY6pgH6vv8IeoxmKfME9qUY2kEd4SE4ibl0%2Frq1jNJPsZ8KbdnetIt2rzF9CFlQ1x1QBehqueQdpma4K8vToH4XnI5Kh0wk8oD74S8nOdXYWLs4bq6Zzdrc6BAYK%2B7uYgFANdlYgWTz16Qyfjcfs%2FJl4iEV7jmydbyxW0QnLIjcKOT%2Bz2dccZf4JI%2BUTH6pbSd9xCTLM9v3mRlJMT8k%2FnfcOfuDH0aOjcTv&X-Amz-Signature=a1b85a884eb805f385204edca64ed298c66d66dc8f3723e853159c8d831a85cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMLHOGM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2Bf%2BX7qfu84qglj7LaLb2oUBsNJKU3ZgOfA3L33TC2AiBd4i1OAifoXYFOKLzJ302c15j1KSRuD4%2B2ESUyGzO%2FGyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtVf4qNrFXF0U7UJPKtwDgF1R9yoizca4elB6JqlVgoMWkLZvNXmsKRimX7l6hfwm%2FEjkxksUiylQqFqoLW%2BKZZDrD1kdBFSX9%2FVelgL2%2Bbl63q9qnW%2B3ImJnon%2FRRq3QnhnXo%2Fk7pCCKg2yXGNXPWTIB15Zlo5YskCpkLzWGSFhQToqze529OnhBsBafs8m8T766SU%2F6hEswljj3eLsVdzvd312YelVclLRuS0q1Dzrv%2Bb8szrsYRSTuH84Ro3pvMaOvR2gjm81FSXOT2xOes9eERVtDjaKtDRuZA6aZGO9R0jvOjmurga6e5JxNJj1gNy2Bu5iwMPl1yAj3gdkP1OEyq5LHsKoHwbgyD%2F8MXRDbeEvEIfuvPmKp3N4byGRzXbC4DSLXTNC0SbGZuc7EHqLu6GEO3M9i%2FEVA67n1pc0h%2FOXrh8oD5s%2BvXK7EJprHcnC3nW%2FUtTANkifaKWr7i5gclz8MB8Bdvbzht2cvOOnTcl%2BfYfV7hX97styjiRq%2F7ScUCvhT6KVDaui8bqhzzGYvVSROI3BOjVFEBUrWi3VmUDH3pgVf%2FWIScSPhJlH0iGngJV4%2BaewU0MYGFCiRi%2BCcJoIOu%2BmlvESmX9y0D%2BEJEvsYkmudzkp9k6KE5eX78arwY4vnTQKXeKswqYSywAY6pgH6vv8IeoxmKfME9qUY2kEd4SE4ibl0%2Frq1jNJPsZ8KbdnetIt2rzF9CFlQ1x1QBehqueQdpma4K8vToH4XnI5Kh0wk8oD74S8nOdXYWLs4bq6Zzdrc6BAYK%2B7uYgFANdlYgWTz16Qyfjcfs%2FJl4iEV7jmydbyxW0QnLIjcKOT%2Bz2dccZf4JI%2BUTH6pbSd9xCTLM9v3mRlJMT8k%2FnfcOfuDH0aOjcTv&X-Amz-Signature=f7b920ddc03edc079a9b4ef905e620711c126a74b89990a5c0dab15a92b66368&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMLHOGM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2Bf%2BX7qfu84qglj7LaLb2oUBsNJKU3ZgOfA3L33TC2AiBd4i1OAifoXYFOKLzJ302c15j1KSRuD4%2B2ESUyGzO%2FGyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtVf4qNrFXF0U7UJPKtwDgF1R9yoizca4elB6JqlVgoMWkLZvNXmsKRimX7l6hfwm%2FEjkxksUiylQqFqoLW%2BKZZDrD1kdBFSX9%2FVelgL2%2Bbl63q9qnW%2B3ImJnon%2FRRq3QnhnXo%2Fk7pCCKg2yXGNXPWTIB15Zlo5YskCpkLzWGSFhQToqze529OnhBsBafs8m8T766SU%2F6hEswljj3eLsVdzvd312YelVclLRuS0q1Dzrv%2Bb8szrsYRSTuH84Ro3pvMaOvR2gjm81FSXOT2xOes9eERVtDjaKtDRuZA6aZGO9R0jvOjmurga6e5JxNJj1gNy2Bu5iwMPl1yAj3gdkP1OEyq5LHsKoHwbgyD%2F8MXRDbeEvEIfuvPmKp3N4byGRzXbC4DSLXTNC0SbGZuc7EHqLu6GEO3M9i%2FEVA67n1pc0h%2FOXrh8oD5s%2BvXK7EJprHcnC3nW%2FUtTANkifaKWr7i5gclz8MB8Bdvbzht2cvOOnTcl%2BfYfV7hX97styjiRq%2F7ScUCvhT6KVDaui8bqhzzGYvVSROI3BOjVFEBUrWi3VmUDH3pgVf%2FWIScSPhJlH0iGngJV4%2BaewU0MYGFCiRi%2BCcJoIOu%2BmlvESmX9y0D%2BEJEvsYkmudzkp9k6KE5eX78arwY4vnTQKXeKswqYSywAY6pgH6vv8IeoxmKfME9qUY2kEd4SE4ibl0%2Frq1jNJPsZ8KbdnetIt2rzF9CFlQ1x1QBehqueQdpma4K8vToH4XnI5Kh0wk8oD74S8nOdXYWLs4bq6Zzdrc6BAYK%2B7uYgFANdlYgWTz16Qyfjcfs%2FJl4iEV7jmydbyxW0QnLIjcKOT%2Bz2dccZf4JI%2BUTH6pbSd9xCTLM9v3mRlJMT8k%2FnfcOfuDH0aOjcTv&X-Amz-Signature=193a6f54a49ae51613d9279f94cf2358fe7df4ab79498145200059bad4253148&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMLHOGM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2Bf%2BX7qfu84qglj7LaLb2oUBsNJKU3ZgOfA3L33TC2AiBd4i1OAifoXYFOKLzJ302c15j1KSRuD4%2B2ESUyGzO%2FGyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtVf4qNrFXF0U7UJPKtwDgF1R9yoizca4elB6JqlVgoMWkLZvNXmsKRimX7l6hfwm%2FEjkxksUiylQqFqoLW%2BKZZDrD1kdBFSX9%2FVelgL2%2Bbl63q9qnW%2B3ImJnon%2FRRq3QnhnXo%2Fk7pCCKg2yXGNXPWTIB15Zlo5YskCpkLzWGSFhQToqze529OnhBsBafs8m8T766SU%2F6hEswljj3eLsVdzvd312YelVclLRuS0q1Dzrv%2Bb8szrsYRSTuH84Ro3pvMaOvR2gjm81FSXOT2xOes9eERVtDjaKtDRuZA6aZGO9R0jvOjmurga6e5JxNJj1gNy2Bu5iwMPl1yAj3gdkP1OEyq5LHsKoHwbgyD%2F8MXRDbeEvEIfuvPmKp3N4byGRzXbC4DSLXTNC0SbGZuc7EHqLu6GEO3M9i%2FEVA67n1pc0h%2FOXrh8oD5s%2BvXK7EJprHcnC3nW%2FUtTANkifaKWr7i5gclz8MB8Bdvbzht2cvOOnTcl%2BfYfV7hX97styjiRq%2F7ScUCvhT6KVDaui8bqhzzGYvVSROI3BOjVFEBUrWi3VmUDH3pgVf%2FWIScSPhJlH0iGngJV4%2BaewU0MYGFCiRi%2BCcJoIOu%2BmlvESmX9y0D%2BEJEvsYkmudzkp9k6KE5eX78arwY4vnTQKXeKswqYSywAY6pgH6vv8IeoxmKfME9qUY2kEd4SE4ibl0%2Frq1jNJPsZ8KbdnetIt2rzF9CFlQ1x1QBehqueQdpma4K8vToH4XnI5Kh0wk8oD74S8nOdXYWLs4bq6Zzdrc6BAYK%2B7uYgFANdlYgWTz16Qyfjcfs%2FJl4iEV7jmydbyxW0QnLIjcKOT%2Bz2dccZf4JI%2BUTH6pbSd9xCTLM9v3mRlJMT8k%2FnfcOfuDH0aOjcTv&X-Amz-Signature=77dc991d4c027db9ced25ff320a07c4415ef1e7bff2d59d9dace0d79b8573e59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMLHOGM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2Bf%2BX7qfu84qglj7LaLb2oUBsNJKU3ZgOfA3L33TC2AiBd4i1OAifoXYFOKLzJ302c15j1KSRuD4%2B2ESUyGzO%2FGyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtVf4qNrFXF0U7UJPKtwDgF1R9yoizca4elB6JqlVgoMWkLZvNXmsKRimX7l6hfwm%2FEjkxksUiylQqFqoLW%2BKZZDrD1kdBFSX9%2FVelgL2%2Bbl63q9qnW%2B3ImJnon%2FRRq3QnhnXo%2Fk7pCCKg2yXGNXPWTIB15Zlo5YskCpkLzWGSFhQToqze529OnhBsBafs8m8T766SU%2F6hEswljj3eLsVdzvd312YelVclLRuS0q1Dzrv%2Bb8szrsYRSTuH84Ro3pvMaOvR2gjm81FSXOT2xOes9eERVtDjaKtDRuZA6aZGO9R0jvOjmurga6e5JxNJj1gNy2Bu5iwMPl1yAj3gdkP1OEyq5LHsKoHwbgyD%2F8MXRDbeEvEIfuvPmKp3N4byGRzXbC4DSLXTNC0SbGZuc7EHqLu6GEO3M9i%2FEVA67n1pc0h%2FOXrh8oD5s%2BvXK7EJprHcnC3nW%2FUtTANkifaKWr7i5gclz8MB8Bdvbzht2cvOOnTcl%2BfYfV7hX97styjiRq%2F7ScUCvhT6KVDaui8bqhzzGYvVSROI3BOjVFEBUrWi3VmUDH3pgVf%2FWIScSPhJlH0iGngJV4%2BaewU0MYGFCiRi%2BCcJoIOu%2BmlvESmX9y0D%2BEJEvsYkmudzkp9k6KE5eX78arwY4vnTQKXeKswqYSywAY6pgH6vv8IeoxmKfME9qUY2kEd4SE4ibl0%2Frq1jNJPsZ8KbdnetIt2rzF9CFlQ1x1QBehqueQdpma4K8vToH4XnI5Kh0wk8oD74S8nOdXYWLs4bq6Zzdrc6BAYK%2B7uYgFANdlYgWTz16Qyfjcfs%2FJl4iEV7jmydbyxW0QnLIjcKOT%2Bz2dccZf4JI%2BUTH6pbSd9xCTLM9v3mRlJMT8k%2FnfcOfuDH0aOjcTv&X-Amz-Signature=90f784bf4cf5a4f60643f8f046c85861204d81d75d11640b7c90c4c1e95f8590&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMLHOGM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH%2Bf%2BX7qfu84qglj7LaLb2oUBsNJKU3ZgOfA3L33TC2AiBd4i1OAifoXYFOKLzJ302c15j1KSRuD4%2B2ESUyGzO%2FGyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtVf4qNrFXF0U7UJPKtwDgF1R9yoizca4elB6JqlVgoMWkLZvNXmsKRimX7l6hfwm%2FEjkxksUiylQqFqoLW%2BKZZDrD1kdBFSX9%2FVelgL2%2Bbl63q9qnW%2B3ImJnon%2FRRq3QnhnXo%2Fk7pCCKg2yXGNXPWTIB15Zlo5YskCpkLzWGSFhQToqze529OnhBsBafs8m8T766SU%2F6hEswljj3eLsVdzvd312YelVclLRuS0q1Dzrv%2Bb8szrsYRSTuH84Ro3pvMaOvR2gjm81FSXOT2xOes9eERVtDjaKtDRuZA6aZGO9R0jvOjmurga6e5JxNJj1gNy2Bu5iwMPl1yAj3gdkP1OEyq5LHsKoHwbgyD%2F8MXRDbeEvEIfuvPmKp3N4byGRzXbC4DSLXTNC0SbGZuc7EHqLu6GEO3M9i%2FEVA67n1pc0h%2FOXrh8oD5s%2BvXK7EJprHcnC3nW%2FUtTANkifaKWr7i5gclz8MB8Bdvbzht2cvOOnTcl%2BfYfV7hX97styjiRq%2F7ScUCvhT6KVDaui8bqhzzGYvVSROI3BOjVFEBUrWi3VmUDH3pgVf%2FWIScSPhJlH0iGngJV4%2BaewU0MYGFCiRi%2BCcJoIOu%2BmlvESmX9y0D%2BEJEvsYkmudzkp9k6KE5eX78arwY4vnTQKXeKswqYSywAY6pgH6vv8IeoxmKfME9qUY2kEd4SE4ibl0%2Frq1jNJPsZ8KbdnetIt2rzF9CFlQ1x1QBehqueQdpma4K8vToH4XnI5Kh0wk8oD74S8nOdXYWLs4bq6Zzdrc6BAYK%2B7uYgFANdlYgWTz16Qyfjcfs%2FJl4iEV7jmydbyxW0QnLIjcKOT%2Bz2dccZf4JI%2BUTH6pbSd9xCTLM9v3mRlJMT8k%2FnfcOfuDH0aOjcTv&X-Amz-Signature=c70c63beb7b4b902354c2d159fbdef3f62688ee1a0857348cda38c8f55859c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

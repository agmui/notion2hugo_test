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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOKTATK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCcNTJFrPieVpiJixBV%2FHI0UaD5%2FI0hSpACfaOBNTZ4dAIhAPUnJ4XYwcFeoAHgeA1rVG%2BJdcs7%2BOrZhY8clbipWyK0Kv8DCG8QABoMNjM3NDIzMTgzODA1Igy8WVWMs4BwP4jEe00q3AOVrRoYw5MZyIcWa%2Bmxb9Lozq8fwoi8Kb8Cs1tNzAfttM918g2t7V1s5bHageQgSxg84pDwge2lg%2FonjdlDWS8wZl2DiUGnjqRrj6MfeSTZxZBlOqyIspUrJoinpeqT2JHvGcz0wA%2FBKNHMuS364iFY%2FcaKaL7MSG2GlG7NVI97i5BbFAifRJ4XFpQARfVv%2Bw2ks%2FST9CzMzbVZt732zzJsebg31AwdR2reufOK8tRTVmltPESdEr0qtCKKSSRI%2FKrJRD0tuc8lCI0HxgBnGwTkheZ9hdoPauMbci%2F5S13ghygjvYKbYI8yhCXLcCUYqjPMOM%2F0FuJTSS5VZ%2FzqW6I9BOD0vLcQhIqexOsiSR221rL3Jro%2FKKqtBHwGsv2clWMkPMN8p0PzurgcGqzQTQCDoACTIwHbUWbJyd11bkCp3qIorY7ymITyyeC5tg8hWsn9YnuxUQbymCrd5tyHTIumg2sEJ%2FEfWaAJ%2BYZXNUbivrs0fpORprM7HErMepfl16QFFijUQlLOOAq971ZYLLok%2F6zh%2B3G45QD4p0UgQAnY2csb6kptui290ZvbF2%2FcKOWR3AkAZMJsobzxDtP3xC6%2BgLOD%2BhoOAEKyDT%2BL%2FC%2BkYt8hBp2Pw6Gv1otN3jCpr8u9BjqkATvwyTC647JvtAIGbYhd3GkfDP1uflb%2Bh5j4PhNoc%2FFO3rad%2Bz%2Fji5c8iDIlCfJk%2Bff0s92au6GPbpA1KGlXqr7azIbvvzFUHwqE%2BFTfAPE5VoO%2B7zlbUzFG4SWCu9MpwttShXnlr900BJkCBEGfKviNcEkGw4aJAeUpy8bt9XTo2EwINDcM1H8hH11DNSEuiVOh9dOSFFcXIRVngNzDyDL8wo96&X-Amz-Signature=573ddfc56a30ce2b81312521e7781ffed2f98e3feb553c9cddd199ed459d29d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOKTATK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCcNTJFrPieVpiJixBV%2FHI0UaD5%2FI0hSpACfaOBNTZ4dAIhAPUnJ4XYwcFeoAHgeA1rVG%2BJdcs7%2BOrZhY8clbipWyK0Kv8DCG8QABoMNjM3NDIzMTgzODA1Igy8WVWMs4BwP4jEe00q3AOVrRoYw5MZyIcWa%2Bmxb9Lozq8fwoi8Kb8Cs1tNzAfttM918g2t7V1s5bHageQgSxg84pDwge2lg%2FonjdlDWS8wZl2DiUGnjqRrj6MfeSTZxZBlOqyIspUrJoinpeqT2JHvGcz0wA%2FBKNHMuS364iFY%2FcaKaL7MSG2GlG7NVI97i5BbFAifRJ4XFpQARfVv%2Bw2ks%2FST9CzMzbVZt732zzJsebg31AwdR2reufOK8tRTVmltPESdEr0qtCKKSSRI%2FKrJRD0tuc8lCI0HxgBnGwTkheZ9hdoPauMbci%2F5S13ghygjvYKbYI8yhCXLcCUYqjPMOM%2F0FuJTSS5VZ%2FzqW6I9BOD0vLcQhIqexOsiSR221rL3Jro%2FKKqtBHwGsv2clWMkPMN8p0PzurgcGqzQTQCDoACTIwHbUWbJyd11bkCp3qIorY7ymITyyeC5tg8hWsn9YnuxUQbymCrd5tyHTIumg2sEJ%2FEfWaAJ%2BYZXNUbivrs0fpORprM7HErMepfl16QFFijUQlLOOAq971ZYLLok%2F6zh%2B3G45QD4p0UgQAnY2csb6kptui290ZvbF2%2FcKOWR3AkAZMJsobzxDtP3xC6%2BgLOD%2BhoOAEKyDT%2BL%2FC%2BkYt8hBp2Pw6Gv1otN3jCpr8u9BjqkATvwyTC647JvtAIGbYhd3GkfDP1uflb%2Bh5j4PhNoc%2FFO3rad%2Bz%2Fji5c8iDIlCfJk%2Bff0s92au6GPbpA1KGlXqr7azIbvvzFUHwqE%2BFTfAPE5VoO%2B7zlbUzFG4SWCu9MpwttShXnlr900BJkCBEGfKviNcEkGw4aJAeUpy8bt9XTo2EwINDcM1H8hH11DNSEuiVOh9dOSFFcXIRVngNzDyDL8wo96&X-Amz-Signature=8ff7bc8e07f5563cdb10c8838c8f38aa511742c163270b3118ac1cda51e64bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOKTATK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCcNTJFrPieVpiJixBV%2FHI0UaD5%2FI0hSpACfaOBNTZ4dAIhAPUnJ4XYwcFeoAHgeA1rVG%2BJdcs7%2BOrZhY8clbipWyK0Kv8DCG8QABoMNjM3NDIzMTgzODA1Igy8WVWMs4BwP4jEe00q3AOVrRoYw5MZyIcWa%2Bmxb9Lozq8fwoi8Kb8Cs1tNzAfttM918g2t7V1s5bHageQgSxg84pDwge2lg%2FonjdlDWS8wZl2DiUGnjqRrj6MfeSTZxZBlOqyIspUrJoinpeqT2JHvGcz0wA%2FBKNHMuS364iFY%2FcaKaL7MSG2GlG7NVI97i5BbFAifRJ4XFpQARfVv%2Bw2ks%2FST9CzMzbVZt732zzJsebg31AwdR2reufOK8tRTVmltPESdEr0qtCKKSSRI%2FKrJRD0tuc8lCI0HxgBnGwTkheZ9hdoPauMbci%2F5S13ghygjvYKbYI8yhCXLcCUYqjPMOM%2F0FuJTSS5VZ%2FzqW6I9BOD0vLcQhIqexOsiSR221rL3Jro%2FKKqtBHwGsv2clWMkPMN8p0PzurgcGqzQTQCDoACTIwHbUWbJyd11bkCp3qIorY7ymITyyeC5tg8hWsn9YnuxUQbymCrd5tyHTIumg2sEJ%2FEfWaAJ%2BYZXNUbivrs0fpORprM7HErMepfl16QFFijUQlLOOAq971ZYLLok%2F6zh%2B3G45QD4p0UgQAnY2csb6kptui290ZvbF2%2FcKOWR3AkAZMJsobzxDtP3xC6%2BgLOD%2BhoOAEKyDT%2BL%2FC%2BkYt8hBp2Pw6Gv1otN3jCpr8u9BjqkATvwyTC647JvtAIGbYhd3GkfDP1uflb%2Bh5j4PhNoc%2FFO3rad%2Bz%2Fji5c8iDIlCfJk%2Bff0s92au6GPbpA1KGlXqr7azIbvvzFUHwqE%2BFTfAPE5VoO%2B7zlbUzFG4SWCu9MpwttShXnlr900BJkCBEGfKviNcEkGw4aJAeUpy8bt9XTo2EwINDcM1H8hH11DNSEuiVOh9dOSFFcXIRVngNzDyDL8wo96&X-Amz-Signature=15df7dc9981775f25f5b1ffbbcd441379ff54983f372a4240ccad61df154317b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOKTATK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCcNTJFrPieVpiJixBV%2FHI0UaD5%2FI0hSpACfaOBNTZ4dAIhAPUnJ4XYwcFeoAHgeA1rVG%2BJdcs7%2BOrZhY8clbipWyK0Kv8DCG8QABoMNjM3NDIzMTgzODA1Igy8WVWMs4BwP4jEe00q3AOVrRoYw5MZyIcWa%2Bmxb9Lozq8fwoi8Kb8Cs1tNzAfttM918g2t7V1s5bHageQgSxg84pDwge2lg%2FonjdlDWS8wZl2DiUGnjqRrj6MfeSTZxZBlOqyIspUrJoinpeqT2JHvGcz0wA%2FBKNHMuS364iFY%2FcaKaL7MSG2GlG7NVI97i5BbFAifRJ4XFpQARfVv%2Bw2ks%2FST9CzMzbVZt732zzJsebg31AwdR2reufOK8tRTVmltPESdEr0qtCKKSSRI%2FKrJRD0tuc8lCI0HxgBnGwTkheZ9hdoPauMbci%2F5S13ghygjvYKbYI8yhCXLcCUYqjPMOM%2F0FuJTSS5VZ%2FzqW6I9BOD0vLcQhIqexOsiSR221rL3Jro%2FKKqtBHwGsv2clWMkPMN8p0PzurgcGqzQTQCDoACTIwHbUWbJyd11bkCp3qIorY7ymITyyeC5tg8hWsn9YnuxUQbymCrd5tyHTIumg2sEJ%2FEfWaAJ%2BYZXNUbivrs0fpORprM7HErMepfl16QFFijUQlLOOAq971ZYLLok%2F6zh%2B3G45QD4p0UgQAnY2csb6kptui290ZvbF2%2FcKOWR3AkAZMJsobzxDtP3xC6%2BgLOD%2BhoOAEKyDT%2BL%2FC%2BkYt8hBp2Pw6Gv1otN3jCpr8u9BjqkATvwyTC647JvtAIGbYhd3GkfDP1uflb%2Bh5j4PhNoc%2FFO3rad%2Bz%2Fji5c8iDIlCfJk%2Bff0s92au6GPbpA1KGlXqr7azIbvvzFUHwqE%2BFTfAPE5VoO%2B7zlbUzFG4SWCu9MpwttShXnlr900BJkCBEGfKviNcEkGw4aJAeUpy8bt9XTo2EwINDcM1H8hH11DNSEuiVOh9dOSFFcXIRVngNzDyDL8wo96&X-Amz-Signature=50c9c2ab6ef61ee71d14504708ae1042b93f4e15c0b45dbef3e23a606d5e3b07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOKTATK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCcNTJFrPieVpiJixBV%2FHI0UaD5%2FI0hSpACfaOBNTZ4dAIhAPUnJ4XYwcFeoAHgeA1rVG%2BJdcs7%2BOrZhY8clbipWyK0Kv8DCG8QABoMNjM3NDIzMTgzODA1Igy8WVWMs4BwP4jEe00q3AOVrRoYw5MZyIcWa%2Bmxb9Lozq8fwoi8Kb8Cs1tNzAfttM918g2t7V1s5bHageQgSxg84pDwge2lg%2FonjdlDWS8wZl2DiUGnjqRrj6MfeSTZxZBlOqyIspUrJoinpeqT2JHvGcz0wA%2FBKNHMuS364iFY%2FcaKaL7MSG2GlG7NVI97i5BbFAifRJ4XFpQARfVv%2Bw2ks%2FST9CzMzbVZt732zzJsebg31AwdR2reufOK8tRTVmltPESdEr0qtCKKSSRI%2FKrJRD0tuc8lCI0HxgBnGwTkheZ9hdoPauMbci%2F5S13ghygjvYKbYI8yhCXLcCUYqjPMOM%2F0FuJTSS5VZ%2FzqW6I9BOD0vLcQhIqexOsiSR221rL3Jro%2FKKqtBHwGsv2clWMkPMN8p0PzurgcGqzQTQCDoACTIwHbUWbJyd11bkCp3qIorY7ymITyyeC5tg8hWsn9YnuxUQbymCrd5tyHTIumg2sEJ%2FEfWaAJ%2BYZXNUbivrs0fpORprM7HErMepfl16QFFijUQlLOOAq971ZYLLok%2F6zh%2B3G45QD4p0UgQAnY2csb6kptui290ZvbF2%2FcKOWR3AkAZMJsobzxDtP3xC6%2BgLOD%2BhoOAEKyDT%2BL%2FC%2BkYt8hBp2Pw6Gv1otN3jCpr8u9BjqkATvwyTC647JvtAIGbYhd3GkfDP1uflb%2Bh5j4PhNoc%2FFO3rad%2Bz%2Fji5c8iDIlCfJk%2Bff0s92au6GPbpA1KGlXqr7azIbvvzFUHwqE%2BFTfAPE5VoO%2B7zlbUzFG4SWCu9MpwttShXnlr900BJkCBEGfKviNcEkGw4aJAeUpy8bt9XTo2EwINDcM1H8hH11DNSEuiVOh9dOSFFcXIRVngNzDyDL8wo96&X-Amz-Signature=054739aabf82ce38e11fa7f7de18fabc33c30ca49b57988c6547182fadec2939&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOKTATK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCcNTJFrPieVpiJixBV%2FHI0UaD5%2FI0hSpACfaOBNTZ4dAIhAPUnJ4XYwcFeoAHgeA1rVG%2BJdcs7%2BOrZhY8clbipWyK0Kv8DCG8QABoMNjM3NDIzMTgzODA1Igy8WVWMs4BwP4jEe00q3AOVrRoYw5MZyIcWa%2Bmxb9Lozq8fwoi8Kb8Cs1tNzAfttM918g2t7V1s5bHageQgSxg84pDwge2lg%2FonjdlDWS8wZl2DiUGnjqRrj6MfeSTZxZBlOqyIspUrJoinpeqT2JHvGcz0wA%2FBKNHMuS364iFY%2FcaKaL7MSG2GlG7NVI97i5BbFAifRJ4XFpQARfVv%2Bw2ks%2FST9CzMzbVZt732zzJsebg31AwdR2reufOK8tRTVmltPESdEr0qtCKKSSRI%2FKrJRD0tuc8lCI0HxgBnGwTkheZ9hdoPauMbci%2F5S13ghygjvYKbYI8yhCXLcCUYqjPMOM%2F0FuJTSS5VZ%2FzqW6I9BOD0vLcQhIqexOsiSR221rL3Jro%2FKKqtBHwGsv2clWMkPMN8p0PzurgcGqzQTQCDoACTIwHbUWbJyd11bkCp3qIorY7ymITyyeC5tg8hWsn9YnuxUQbymCrd5tyHTIumg2sEJ%2FEfWaAJ%2BYZXNUbivrs0fpORprM7HErMepfl16QFFijUQlLOOAq971ZYLLok%2F6zh%2B3G45QD4p0UgQAnY2csb6kptui290ZvbF2%2FcKOWR3AkAZMJsobzxDtP3xC6%2BgLOD%2BhoOAEKyDT%2BL%2FC%2BkYt8hBp2Pw6Gv1otN3jCpr8u9BjqkATvwyTC647JvtAIGbYhd3GkfDP1uflb%2Bh5j4PhNoc%2FFO3rad%2Bz%2Fji5c8iDIlCfJk%2Bff0s92au6GPbpA1KGlXqr7azIbvvzFUHwqE%2BFTfAPE5VoO%2B7zlbUzFG4SWCu9MpwttShXnlr900BJkCBEGfKviNcEkGw4aJAeUpy8bt9XTo2EwINDcM1H8hH11DNSEuiVOh9dOSFFcXIRVngNzDyDL8wo96&X-Amz-Signature=be0e65c4de8300ca6b9c8bccb61d4afc08f70a416f3b7bd8eec40815d6b91851&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOKTATK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCcNTJFrPieVpiJixBV%2FHI0UaD5%2FI0hSpACfaOBNTZ4dAIhAPUnJ4XYwcFeoAHgeA1rVG%2BJdcs7%2BOrZhY8clbipWyK0Kv8DCG8QABoMNjM3NDIzMTgzODA1Igy8WVWMs4BwP4jEe00q3AOVrRoYw5MZyIcWa%2Bmxb9Lozq8fwoi8Kb8Cs1tNzAfttM918g2t7V1s5bHageQgSxg84pDwge2lg%2FonjdlDWS8wZl2DiUGnjqRrj6MfeSTZxZBlOqyIspUrJoinpeqT2JHvGcz0wA%2FBKNHMuS364iFY%2FcaKaL7MSG2GlG7NVI97i5BbFAifRJ4XFpQARfVv%2Bw2ks%2FST9CzMzbVZt732zzJsebg31AwdR2reufOK8tRTVmltPESdEr0qtCKKSSRI%2FKrJRD0tuc8lCI0HxgBnGwTkheZ9hdoPauMbci%2F5S13ghygjvYKbYI8yhCXLcCUYqjPMOM%2F0FuJTSS5VZ%2FzqW6I9BOD0vLcQhIqexOsiSR221rL3Jro%2FKKqtBHwGsv2clWMkPMN8p0PzurgcGqzQTQCDoACTIwHbUWbJyd11bkCp3qIorY7ymITyyeC5tg8hWsn9YnuxUQbymCrd5tyHTIumg2sEJ%2FEfWaAJ%2BYZXNUbivrs0fpORprM7HErMepfl16QFFijUQlLOOAq971ZYLLok%2F6zh%2B3G45QD4p0UgQAnY2csb6kptui290ZvbF2%2FcKOWR3AkAZMJsobzxDtP3xC6%2BgLOD%2BhoOAEKyDT%2BL%2FC%2BkYt8hBp2Pw6Gv1otN3jCpr8u9BjqkATvwyTC647JvtAIGbYhd3GkfDP1uflb%2Bh5j4PhNoc%2FFO3rad%2Bz%2Fji5c8iDIlCfJk%2Bff0s92au6GPbpA1KGlXqr7azIbvvzFUHwqE%2BFTfAPE5VoO%2B7zlbUzFG4SWCu9MpwttShXnlr900BJkCBEGfKviNcEkGw4aJAeUpy8bt9XTo2EwINDcM1H8hH11DNSEuiVOh9dOSFFcXIRVngNzDyDL8wo96&X-Amz-Signature=4ad1c1b37f4383bb568e43745291ba730b5d9c1eadf26233af4e99099cca28a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOKTATK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCcNTJFrPieVpiJixBV%2FHI0UaD5%2FI0hSpACfaOBNTZ4dAIhAPUnJ4XYwcFeoAHgeA1rVG%2BJdcs7%2BOrZhY8clbipWyK0Kv8DCG8QABoMNjM3NDIzMTgzODA1Igy8WVWMs4BwP4jEe00q3AOVrRoYw5MZyIcWa%2Bmxb9Lozq8fwoi8Kb8Cs1tNzAfttM918g2t7V1s5bHageQgSxg84pDwge2lg%2FonjdlDWS8wZl2DiUGnjqRrj6MfeSTZxZBlOqyIspUrJoinpeqT2JHvGcz0wA%2FBKNHMuS364iFY%2FcaKaL7MSG2GlG7NVI97i5BbFAifRJ4XFpQARfVv%2Bw2ks%2FST9CzMzbVZt732zzJsebg31AwdR2reufOK8tRTVmltPESdEr0qtCKKSSRI%2FKrJRD0tuc8lCI0HxgBnGwTkheZ9hdoPauMbci%2F5S13ghygjvYKbYI8yhCXLcCUYqjPMOM%2F0FuJTSS5VZ%2FzqW6I9BOD0vLcQhIqexOsiSR221rL3Jro%2FKKqtBHwGsv2clWMkPMN8p0PzurgcGqzQTQCDoACTIwHbUWbJyd11bkCp3qIorY7ymITyyeC5tg8hWsn9YnuxUQbymCrd5tyHTIumg2sEJ%2FEfWaAJ%2BYZXNUbivrs0fpORprM7HErMepfl16QFFijUQlLOOAq971ZYLLok%2F6zh%2B3G45QD4p0UgQAnY2csb6kptui290ZvbF2%2FcKOWR3AkAZMJsobzxDtP3xC6%2BgLOD%2BhoOAEKyDT%2BL%2FC%2BkYt8hBp2Pw6Gv1otN3jCpr8u9BjqkATvwyTC647JvtAIGbYhd3GkfDP1uflb%2Bh5j4PhNoc%2FFO3rad%2Bz%2Fji5c8iDIlCfJk%2Bff0s92au6GPbpA1KGlXqr7azIbvvzFUHwqE%2BFTfAPE5VoO%2B7zlbUzFG4SWCu9MpwttShXnlr900BJkCBEGfKviNcEkGw4aJAeUpy8bt9XTo2EwINDcM1H8hH11DNSEuiVOh9dOSFFcXIRVngNzDyDL8wo96&X-Amz-Signature=1811a8711f8d288237fe91f1635053f59c8898200eaa20f5d853fc749cad36ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

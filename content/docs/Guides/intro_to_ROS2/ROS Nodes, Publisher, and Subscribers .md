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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7YOLOU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuTFxmhKQRMovWjf1d%2FlJgyCov6dV3FdOH09PYZWgw5AiAcThFmPq681Z9%2BQLMDj3TYhEhAqxWcR9HC3hEM7G2TTSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAV6%2FnH6a60UFah%2FJKtwD9zM1l7XwGpEhrcBU2i5uvvOuz%2FPWlyGh%2BFJV%2BcvKtrezWRMC6VFEJY0A0zFnScYTQyB5d%2FGI9Kp2%2FbVpcEtfQHTyrtVjaXD3YtYffKm1SS%2B8oRRRx7iZZlA1TZBjK8gAv7pcpw1O%2Fd%2F8MbVplnJRd9Zawsm8XFtNCesF2r3n3WsY57M5BFOAaOWpbMICqSveQy38khiLV6j1bdCSC1uiIKoRmoP027lqjMx%2BalJWMofqgm1BpJAen1wnjavRb9T10A4vcDX5DBrj38VcEePspHUel9GKYsOyAR%2FQmJb9JixfARmG9zwCq742A8sXoujhtXqynn90XzBVkFQ73h%2BPT41I5TFjOqZdn12GRUabeh6%2B6VQm%2BxWIxB7XgKrnZhAtC1cxu7SQFLiRPdvzv0qysdIVOA8e7JXM7pZeQGdXCt3s867jqf7fZ3BBIjb60GeLOk4IPE0dH1S9jS03jvqIptqsNhtnroCwsAGmyONHGQsuCjigrgTQudDV2aHN%2BN96iKy3SIB%2Bi2qoWy8cpllAN6khE2wz3e07bb6Oe2V1bbcUpss%2FpOMSjIJHeKBDwceZN3ZpQXhoxeOsoIVtbvzBYNPLS1l3SwWcyycS1NBcVwRDuu2OTQxZiCem0LYwgLXGwwY6pgE9iLw6BVbMTH2usirG5VkWz0eZubFqeEnz8UgI4ZFiYWgsYqbj9LDXMEoWLU0VVLS8L6pssikT0P6zZgw5puU56Yaw4ShsOWpckXEmDpuNv%2B27F8Lje7419vhgc3AzTZcAwAvslx7uCDQ1BdOfkLzLGNhw1uo6XLGI%2B%2F1g%2F1qEl%2B%2FoK1bBrTzIxsVBcPkXWenfz0Opst2loB8unTREtyq3gUyClCtL&X-Amz-Signature=ab58a449d209e5c664b324ba044d44a6d1b7dbc4dcf3b3a803c507779764009d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7YOLOU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuTFxmhKQRMovWjf1d%2FlJgyCov6dV3FdOH09PYZWgw5AiAcThFmPq681Z9%2BQLMDj3TYhEhAqxWcR9HC3hEM7G2TTSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAV6%2FnH6a60UFah%2FJKtwD9zM1l7XwGpEhrcBU2i5uvvOuz%2FPWlyGh%2BFJV%2BcvKtrezWRMC6VFEJY0A0zFnScYTQyB5d%2FGI9Kp2%2FbVpcEtfQHTyrtVjaXD3YtYffKm1SS%2B8oRRRx7iZZlA1TZBjK8gAv7pcpw1O%2Fd%2F8MbVplnJRd9Zawsm8XFtNCesF2r3n3WsY57M5BFOAaOWpbMICqSveQy38khiLV6j1bdCSC1uiIKoRmoP027lqjMx%2BalJWMofqgm1BpJAen1wnjavRb9T10A4vcDX5DBrj38VcEePspHUel9GKYsOyAR%2FQmJb9JixfARmG9zwCq742A8sXoujhtXqynn90XzBVkFQ73h%2BPT41I5TFjOqZdn12GRUabeh6%2B6VQm%2BxWIxB7XgKrnZhAtC1cxu7SQFLiRPdvzv0qysdIVOA8e7JXM7pZeQGdXCt3s867jqf7fZ3BBIjb60GeLOk4IPE0dH1S9jS03jvqIptqsNhtnroCwsAGmyONHGQsuCjigrgTQudDV2aHN%2BN96iKy3SIB%2Bi2qoWy8cpllAN6khE2wz3e07bb6Oe2V1bbcUpss%2FpOMSjIJHeKBDwceZN3ZpQXhoxeOsoIVtbvzBYNPLS1l3SwWcyycS1NBcVwRDuu2OTQxZiCem0LYwgLXGwwY6pgE9iLw6BVbMTH2usirG5VkWz0eZubFqeEnz8UgI4ZFiYWgsYqbj9LDXMEoWLU0VVLS8L6pssikT0P6zZgw5puU56Yaw4ShsOWpckXEmDpuNv%2B27F8Lje7419vhgc3AzTZcAwAvslx7uCDQ1BdOfkLzLGNhw1uo6XLGI%2B%2F1g%2F1qEl%2B%2FoK1bBrTzIxsVBcPkXWenfz0Opst2loB8unTREtyq3gUyClCtL&X-Amz-Signature=d29105bc11dc2162154e24ebf83fd9583486fa6ec4b6c6a3c320534670d211f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7YOLOU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuTFxmhKQRMovWjf1d%2FlJgyCov6dV3FdOH09PYZWgw5AiAcThFmPq681Z9%2BQLMDj3TYhEhAqxWcR9HC3hEM7G2TTSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAV6%2FnH6a60UFah%2FJKtwD9zM1l7XwGpEhrcBU2i5uvvOuz%2FPWlyGh%2BFJV%2BcvKtrezWRMC6VFEJY0A0zFnScYTQyB5d%2FGI9Kp2%2FbVpcEtfQHTyrtVjaXD3YtYffKm1SS%2B8oRRRx7iZZlA1TZBjK8gAv7pcpw1O%2Fd%2F8MbVplnJRd9Zawsm8XFtNCesF2r3n3WsY57M5BFOAaOWpbMICqSveQy38khiLV6j1bdCSC1uiIKoRmoP027lqjMx%2BalJWMofqgm1BpJAen1wnjavRb9T10A4vcDX5DBrj38VcEePspHUel9GKYsOyAR%2FQmJb9JixfARmG9zwCq742A8sXoujhtXqynn90XzBVkFQ73h%2BPT41I5TFjOqZdn12GRUabeh6%2B6VQm%2BxWIxB7XgKrnZhAtC1cxu7SQFLiRPdvzv0qysdIVOA8e7JXM7pZeQGdXCt3s867jqf7fZ3BBIjb60GeLOk4IPE0dH1S9jS03jvqIptqsNhtnroCwsAGmyONHGQsuCjigrgTQudDV2aHN%2BN96iKy3SIB%2Bi2qoWy8cpllAN6khE2wz3e07bb6Oe2V1bbcUpss%2FpOMSjIJHeKBDwceZN3ZpQXhoxeOsoIVtbvzBYNPLS1l3SwWcyycS1NBcVwRDuu2OTQxZiCem0LYwgLXGwwY6pgE9iLw6BVbMTH2usirG5VkWz0eZubFqeEnz8UgI4ZFiYWgsYqbj9LDXMEoWLU0VVLS8L6pssikT0P6zZgw5puU56Yaw4ShsOWpckXEmDpuNv%2B27F8Lje7419vhgc3AzTZcAwAvslx7uCDQ1BdOfkLzLGNhw1uo6XLGI%2B%2F1g%2F1qEl%2B%2FoK1bBrTzIxsVBcPkXWenfz0Opst2loB8unTREtyq3gUyClCtL&X-Amz-Signature=d6a940a21997121aa838373f5b6fa07dc121f59ec341a71aa995674daf223faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7YOLOU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuTFxmhKQRMovWjf1d%2FlJgyCov6dV3FdOH09PYZWgw5AiAcThFmPq681Z9%2BQLMDj3TYhEhAqxWcR9HC3hEM7G2TTSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAV6%2FnH6a60UFah%2FJKtwD9zM1l7XwGpEhrcBU2i5uvvOuz%2FPWlyGh%2BFJV%2BcvKtrezWRMC6VFEJY0A0zFnScYTQyB5d%2FGI9Kp2%2FbVpcEtfQHTyrtVjaXD3YtYffKm1SS%2B8oRRRx7iZZlA1TZBjK8gAv7pcpw1O%2Fd%2F8MbVplnJRd9Zawsm8XFtNCesF2r3n3WsY57M5BFOAaOWpbMICqSveQy38khiLV6j1bdCSC1uiIKoRmoP027lqjMx%2BalJWMofqgm1BpJAen1wnjavRb9T10A4vcDX5DBrj38VcEePspHUel9GKYsOyAR%2FQmJb9JixfARmG9zwCq742A8sXoujhtXqynn90XzBVkFQ73h%2BPT41I5TFjOqZdn12GRUabeh6%2B6VQm%2BxWIxB7XgKrnZhAtC1cxu7SQFLiRPdvzv0qysdIVOA8e7JXM7pZeQGdXCt3s867jqf7fZ3BBIjb60GeLOk4IPE0dH1S9jS03jvqIptqsNhtnroCwsAGmyONHGQsuCjigrgTQudDV2aHN%2BN96iKy3SIB%2Bi2qoWy8cpllAN6khE2wz3e07bb6Oe2V1bbcUpss%2FpOMSjIJHeKBDwceZN3ZpQXhoxeOsoIVtbvzBYNPLS1l3SwWcyycS1NBcVwRDuu2OTQxZiCem0LYwgLXGwwY6pgE9iLw6BVbMTH2usirG5VkWz0eZubFqeEnz8UgI4ZFiYWgsYqbj9LDXMEoWLU0VVLS8L6pssikT0P6zZgw5puU56Yaw4ShsOWpckXEmDpuNv%2B27F8Lje7419vhgc3AzTZcAwAvslx7uCDQ1BdOfkLzLGNhw1uo6XLGI%2B%2F1g%2F1qEl%2B%2FoK1bBrTzIxsVBcPkXWenfz0Opst2loB8unTREtyq3gUyClCtL&X-Amz-Signature=cb3c5c399c7191830c666caa78e558debae09c8e6ed72ec9fe36c62721bd6a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7YOLOU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuTFxmhKQRMovWjf1d%2FlJgyCov6dV3FdOH09PYZWgw5AiAcThFmPq681Z9%2BQLMDj3TYhEhAqxWcR9HC3hEM7G2TTSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAV6%2FnH6a60UFah%2FJKtwD9zM1l7XwGpEhrcBU2i5uvvOuz%2FPWlyGh%2BFJV%2BcvKtrezWRMC6VFEJY0A0zFnScYTQyB5d%2FGI9Kp2%2FbVpcEtfQHTyrtVjaXD3YtYffKm1SS%2B8oRRRx7iZZlA1TZBjK8gAv7pcpw1O%2Fd%2F8MbVplnJRd9Zawsm8XFtNCesF2r3n3WsY57M5BFOAaOWpbMICqSveQy38khiLV6j1bdCSC1uiIKoRmoP027lqjMx%2BalJWMofqgm1BpJAen1wnjavRb9T10A4vcDX5DBrj38VcEePspHUel9GKYsOyAR%2FQmJb9JixfARmG9zwCq742A8sXoujhtXqynn90XzBVkFQ73h%2BPT41I5TFjOqZdn12GRUabeh6%2B6VQm%2BxWIxB7XgKrnZhAtC1cxu7SQFLiRPdvzv0qysdIVOA8e7JXM7pZeQGdXCt3s867jqf7fZ3BBIjb60GeLOk4IPE0dH1S9jS03jvqIptqsNhtnroCwsAGmyONHGQsuCjigrgTQudDV2aHN%2BN96iKy3SIB%2Bi2qoWy8cpllAN6khE2wz3e07bb6Oe2V1bbcUpss%2FpOMSjIJHeKBDwceZN3ZpQXhoxeOsoIVtbvzBYNPLS1l3SwWcyycS1NBcVwRDuu2OTQxZiCem0LYwgLXGwwY6pgE9iLw6BVbMTH2usirG5VkWz0eZubFqeEnz8UgI4ZFiYWgsYqbj9LDXMEoWLU0VVLS8L6pssikT0P6zZgw5puU56Yaw4ShsOWpckXEmDpuNv%2B27F8Lje7419vhgc3AzTZcAwAvslx7uCDQ1BdOfkLzLGNhw1uo6XLGI%2B%2F1g%2F1qEl%2B%2FoK1bBrTzIxsVBcPkXWenfz0Opst2loB8unTREtyq3gUyClCtL&X-Amz-Signature=d3df6b123452db49be8b855736877cf8ee7f20abe6ea5cae1e81c97876c686d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7YOLOU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuTFxmhKQRMovWjf1d%2FlJgyCov6dV3FdOH09PYZWgw5AiAcThFmPq681Z9%2BQLMDj3TYhEhAqxWcR9HC3hEM7G2TTSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAV6%2FnH6a60UFah%2FJKtwD9zM1l7XwGpEhrcBU2i5uvvOuz%2FPWlyGh%2BFJV%2BcvKtrezWRMC6VFEJY0A0zFnScYTQyB5d%2FGI9Kp2%2FbVpcEtfQHTyrtVjaXD3YtYffKm1SS%2B8oRRRx7iZZlA1TZBjK8gAv7pcpw1O%2Fd%2F8MbVplnJRd9Zawsm8XFtNCesF2r3n3WsY57M5BFOAaOWpbMICqSveQy38khiLV6j1bdCSC1uiIKoRmoP027lqjMx%2BalJWMofqgm1BpJAen1wnjavRb9T10A4vcDX5DBrj38VcEePspHUel9GKYsOyAR%2FQmJb9JixfARmG9zwCq742A8sXoujhtXqynn90XzBVkFQ73h%2BPT41I5TFjOqZdn12GRUabeh6%2B6VQm%2BxWIxB7XgKrnZhAtC1cxu7SQFLiRPdvzv0qysdIVOA8e7JXM7pZeQGdXCt3s867jqf7fZ3BBIjb60GeLOk4IPE0dH1S9jS03jvqIptqsNhtnroCwsAGmyONHGQsuCjigrgTQudDV2aHN%2BN96iKy3SIB%2Bi2qoWy8cpllAN6khE2wz3e07bb6Oe2V1bbcUpss%2FpOMSjIJHeKBDwceZN3ZpQXhoxeOsoIVtbvzBYNPLS1l3SwWcyycS1NBcVwRDuu2OTQxZiCem0LYwgLXGwwY6pgE9iLw6BVbMTH2usirG5VkWz0eZubFqeEnz8UgI4ZFiYWgsYqbj9LDXMEoWLU0VVLS8L6pssikT0P6zZgw5puU56Yaw4ShsOWpckXEmDpuNv%2B27F8Lje7419vhgc3AzTZcAwAvslx7uCDQ1BdOfkLzLGNhw1uo6XLGI%2B%2F1g%2F1qEl%2B%2FoK1bBrTzIxsVBcPkXWenfz0Opst2loB8unTREtyq3gUyClCtL&X-Amz-Signature=dd4a7f1fa0fc6a7b6b20a6f6498c71c01f275256e79e2b76d031aaf471da95f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7YOLOU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuTFxmhKQRMovWjf1d%2FlJgyCov6dV3FdOH09PYZWgw5AiAcThFmPq681Z9%2BQLMDj3TYhEhAqxWcR9HC3hEM7G2TTSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAV6%2FnH6a60UFah%2FJKtwD9zM1l7XwGpEhrcBU2i5uvvOuz%2FPWlyGh%2BFJV%2BcvKtrezWRMC6VFEJY0A0zFnScYTQyB5d%2FGI9Kp2%2FbVpcEtfQHTyrtVjaXD3YtYffKm1SS%2B8oRRRx7iZZlA1TZBjK8gAv7pcpw1O%2Fd%2F8MbVplnJRd9Zawsm8XFtNCesF2r3n3WsY57M5BFOAaOWpbMICqSveQy38khiLV6j1bdCSC1uiIKoRmoP027lqjMx%2BalJWMofqgm1BpJAen1wnjavRb9T10A4vcDX5DBrj38VcEePspHUel9GKYsOyAR%2FQmJb9JixfARmG9zwCq742A8sXoujhtXqynn90XzBVkFQ73h%2BPT41I5TFjOqZdn12GRUabeh6%2B6VQm%2BxWIxB7XgKrnZhAtC1cxu7SQFLiRPdvzv0qysdIVOA8e7JXM7pZeQGdXCt3s867jqf7fZ3BBIjb60GeLOk4IPE0dH1S9jS03jvqIptqsNhtnroCwsAGmyONHGQsuCjigrgTQudDV2aHN%2BN96iKy3SIB%2Bi2qoWy8cpllAN6khE2wz3e07bb6Oe2V1bbcUpss%2FpOMSjIJHeKBDwceZN3ZpQXhoxeOsoIVtbvzBYNPLS1l3SwWcyycS1NBcVwRDuu2OTQxZiCem0LYwgLXGwwY6pgE9iLw6BVbMTH2usirG5VkWz0eZubFqeEnz8UgI4ZFiYWgsYqbj9LDXMEoWLU0VVLS8L6pssikT0P6zZgw5puU56Yaw4ShsOWpckXEmDpuNv%2B27F8Lje7419vhgc3AzTZcAwAvslx7uCDQ1BdOfkLzLGNhw1uo6XLGI%2B%2F1g%2F1qEl%2B%2FoK1bBrTzIxsVBcPkXWenfz0Opst2loB8unTREtyq3gUyClCtL&X-Amz-Signature=aa5b8c0cb4f26085abb88079f52587e3c8296512912d063ab2b6779344d9807f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7YOLOU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuTFxmhKQRMovWjf1d%2FlJgyCov6dV3FdOH09PYZWgw5AiAcThFmPq681Z9%2BQLMDj3TYhEhAqxWcR9HC3hEM7G2TTSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAV6%2FnH6a60UFah%2FJKtwD9zM1l7XwGpEhrcBU2i5uvvOuz%2FPWlyGh%2BFJV%2BcvKtrezWRMC6VFEJY0A0zFnScYTQyB5d%2FGI9Kp2%2FbVpcEtfQHTyrtVjaXD3YtYffKm1SS%2B8oRRRx7iZZlA1TZBjK8gAv7pcpw1O%2Fd%2F8MbVplnJRd9Zawsm8XFtNCesF2r3n3WsY57M5BFOAaOWpbMICqSveQy38khiLV6j1bdCSC1uiIKoRmoP027lqjMx%2BalJWMofqgm1BpJAen1wnjavRb9T10A4vcDX5DBrj38VcEePspHUel9GKYsOyAR%2FQmJb9JixfARmG9zwCq742A8sXoujhtXqynn90XzBVkFQ73h%2BPT41I5TFjOqZdn12GRUabeh6%2B6VQm%2BxWIxB7XgKrnZhAtC1cxu7SQFLiRPdvzv0qysdIVOA8e7JXM7pZeQGdXCt3s867jqf7fZ3BBIjb60GeLOk4IPE0dH1S9jS03jvqIptqsNhtnroCwsAGmyONHGQsuCjigrgTQudDV2aHN%2BN96iKy3SIB%2Bi2qoWy8cpllAN6khE2wz3e07bb6Oe2V1bbcUpss%2FpOMSjIJHeKBDwceZN3ZpQXhoxeOsoIVtbvzBYNPLS1l3SwWcyycS1NBcVwRDuu2OTQxZiCem0LYwgLXGwwY6pgE9iLw6BVbMTH2usirG5VkWz0eZubFqeEnz8UgI4ZFiYWgsYqbj9LDXMEoWLU0VVLS8L6pssikT0P6zZgw5puU56Yaw4ShsOWpckXEmDpuNv%2B27F8Lje7419vhgc3AzTZcAwAvslx7uCDQ1BdOfkLzLGNhw1uo6XLGI%2B%2F1g%2F1qEl%2B%2FoK1bBrTzIxsVBcPkXWenfz0Opst2loB8unTREtyq3gUyClCtL&X-Amz-Signature=3c452895745aa140c014e0cad6b1cc7c4e3fe661d35d8a4456872128585ee3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYUCHUR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPKc83uiJ3V%2Ft%2F3EfbQM5qxb8zl51m5HPqWsz3n788pAiAwxDZT1OIg0vegPe0eDww%2FW6EODmEntc1czCs5%2F%2Fhu9yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1sOtpfDGi%2Fh49JzKtwDk3Ccbv8jUTa0QBwwpbAOD4F4UvV6FQpvxnACuQb20xrsxBW6uPas6xmmVzI5K3EkLOoE43v%2FqvNq%2BIGDnjgdWhyIqI21xaaKC5HLVUS4ELtNfgPQBbv5bqB4r5y3LIV3sD2daQGstMuLxGBONV%2BHpmpD5kkrqWYmUXkTU%2BuYwB%2FcpKePXSb5T7scr7qZ86TJk6DrRU5c8R%2Bi%2BNhUH6GZ%2B64uONrflOBABCyQ%2BDIfeisWXu4HnXjH4Ovrf9CIZG87S%2BS%2BjhIIpIKhujXcIosUZsEJHGooDH1FQW1Nr4DIjsAja8Bv0FcqqFFBWqs%2BKlqN79k1QlFshkTFyK8simhofCiD7PTzulyFCytbpjTOn220gqZLJ4GUHcGOvTdWIF66WRV5C3pciHatRPXB%2FwBbPdEyYNw%2BzJoxcquy7vjvjjMGN0LOMfM7RAmlL8hOiZN9F%2FmC8GApQioH4K8cBzZ2965j5ZPt36Of6TpydhmuxWYF0y1XSiEpYHXFt7uMoTQOL4NeeR21WhcF%2FfonudIsthe3auqsBWx4yRxcZbej1WjYwEH5J%2Fx7OP6pANTREjbn0sd%2FQjfH9GBRDH6cr2UxEHa51ATWdsOrZRDjL7IsXxDH%2FL58T0fkNC%2FEsLkwnIrAwAY6pgHIvVKFehhnvywq7Uf4Xx7q%2BnH4%2B1OLRxyr65W1oinbgEE%2Ft4MwpW3Nu6o2C5NTF290mfdEst1LMvxaDo03kv7BQwTSPB1WCGrl7Ef5ilk1FqHwPZg7aQvBehwezI81qocqIkxlloD8jNCXzEfdaPusduYWgzfQDP4v2qRRTKmvzw0IRMLDj5gQzUCBNuq9l6cm1NeC7oPXUza7Rv7StNuWOanT5CMh&X-Amz-Signature=c6c4d4e35b4ae85d79fce88a495a0895928180f8274fa171d32ec09cc90d96d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYUCHUR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPKc83uiJ3V%2Ft%2F3EfbQM5qxb8zl51m5HPqWsz3n788pAiAwxDZT1OIg0vegPe0eDww%2FW6EODmEntc1czCs5%2F%2Fhu9yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1sOtpfDGi%2Fh49JzKtwDk3Ccbv8jUTa0QBwwpbAOD4F4UvV6FQpvxnACuQb20xrsxBW6uPas6xmmVzI5K3EkLOoE43v%2FqvNq%2BIGDnjgdWhyIqI21xaaKC5HLVUS4ELtNfgPQBbv5bqB4r5y3LIV3sD2daQGstMuLxGBONV%2BHpmpD5kkrqWYmUXkTU%2BuYwB%2FcpKePXSb5T7scr7qZ86TJk6DrRU5c8R%2Bi%2BNhUH6GZ%2B64uONrflOBABCyQ%2BDIfeisWXu4HnXjH4Ovrf9CIZG87S%2BS%2BjhIIpIKhujXcIosUZsEJHGooDH1FQW1Nr4DIjsAja8Bv0FcqqFFBWqs%2BKlqN79k1QlFshkTFyK8simhofCiD7PTzulyFCytbpjTOn220gqZLJ4GUHcGOvTdWIF66WRV5C3pciHatRPXB%2FwBbPdEyYNw%2BzJoxcquy7vjvjjMGN0LOMfM7RAmlL8hOiZN9F%2FmC8GApQioH4K8cBzZ2965j5ZPt36Of6TpydhmuxWYF0y1XSiEpYHXFt7uMoTQOL4NeeR21WhcF%2FfonudIsthe3auqsBWx4yRxcZbej1WjYwEH5J%2Fx7OP6pANTREjbn0sd%2FQjfH9GBRDH6cr2UxEHa51ATWdsOrZRDjL7IsXxDH%2FL58T0fkNC%2FEsLkwnIrAwAY6pgHIvVKFehhnvywq7Uf4Xx7q%2BnH4%2B1OLRxyr65W1oinbgEE%2Ft4MwpW3Nu6o2C5NTF290mfdEst1LMvxaDo03kv7BQwTSPB1WCGrl7Ef5ilk1FqHwPZg7aQvBehwezI81qocqIkxlloD8jNCXzEfdaPusduYWgzfQDP4v2qRRTKmvzw0IRMLDj5gQzUCBNuq9l6cm1NeC7oPXUza7Rv7StNuWOanT5CMh&X-Amz-Signature=4ca0d42862947a6e79f37165064288e15485d7f6e9ad94c44635825872ffa865&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYUCHUR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPKc83uiJ3V%2Ft%2F3EfbQM5qxb8zl51m5HPqWsz3n788pAiAwxDZT1OIg0vegPe0eDww%2FW6EODmEntc1czCs5%2F%2Fhu9yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1sOtpfDGi%2Fh49JzKtwDk3Ccbv8jUTa0QBwwpbAOD4F4UvV6FQpvxnACuQb20xrsxBW6uPas6xmmVzI5K3EkLOoE43v%2FqvNq%2BIGDnjgdWhyIqI21xaaKC5HLVUS4ELtNfgPQBbv5bqB4r5y3LIV3sD2daQGstMuLxGBONV%2BHpmpD5kkrqWYmUXkTU%2BuYwB%2FcpKePXSb5T7scr7qZ86TJk6DrRU5c8R%2Bi%2BNhUH6GZ%2B64uONrflOBABCyQ%2BDIfeisWXu4HnXjH4Ovrf9CIZG87S%2BS%2BjhIIpIKhujXcIosUZsEJHGooDH1FQW1Nr4DIjsAja8Bv0FcqqFFBWqs%2BKlqN79k1QlFshkTFyK8simhofCiD7PTzulyFCytbpjTOn220gqZLJ4GUHcGOvTdWIF66WRV5C3pciHatRPXB%2FwBbPdEyYNw%2BzJoxcquy7vjvjjMGN0LOMfM7RAmlL8hOiZN9F%2FmC8GApQioH4K8cBzZ2965j5ZPt36Of6TpydhmuxWYF0y1XSiEpYHXFt7uMoTQOL4NeeR21WhcF%2FfonudIsthe3auqsBWx4yRxcZbej1WjYwEH5J%2Fx7OP6pANTREjbn0sd%2FQjfH9GBRDH6cr2UxEHa51ATWdsOrZRDjL7IsXxDH%2FL58T0fkNC%2FEsLkwnIrAwAY6pgHIvVKFehhnvywq7Uf4Xx7q%2BnH4%2B1OLRxyr65W1oinbgEE%2Ft4MwpW3Nu6o2C5NTF290mfdEst1LMvxaDo03kv7BQwTSPB1WCGrl7Ef5ilk1FqHwPZg7aQvBehwezI81qocqIkxlloD8jNCXzEfdaPusduYWgzfQDP4v2qRRTKmvzw0IRMLDj5gQzUCBNuq9l6cm1NeC7oPXUza7Rv7StNuWOanT5CMh&X-Amz-Signature=bfe248d80789602e591bdd11a7a4655fe4398b852c18a4d14d468ee00f071bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYUCHUR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPKc83uiJ3V%2Ft%2F3EfbQM5qxb8zl51m5HPqWsz3n788pAiAwxDZT1OIg0vegPe0eDww%2FW6EODmEntc1czCs5%2F%2Fhu9yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1sOtpfDGi%2Fh49JzKtwDk3Ccbv8jUTa0QBwwpbAOD4F4UvV6FQpvxnACuQb20xrsxBW6uPas6xmmVzI5K3EkLOoE43v%2FqvNq%2BIGDnjgdWhyIqI21xaaKC5HLVUS4ELtNfgPQBbv5bqB4r5y3LIV3sD2daQGstMuLxGBONV%2BHpmpD5kkrqWYmUXkTU%2BuYwB%2FcpKePXSb5T7scr7qZ86TJk6DrRU5c8R%2Bi%2BNhUH6GZ%2B64uONrflOBABCyQ%2BDIfeisWXu4HnXjH4Ovrf9CIZG87S%2BS%2BjhIIpIKhujXcIosUZsEJHGooDH1FQW1Nr4DIjsAja8Bv0FcqqFFBWqs%2BKlqN79k1QlFshkTFyK8simhofCiD7PTzulyFCytbpjTOn220gqZLJ4GUHcGOvTdWIF66WRV5C3pciHatRPXB%2FwBbPdEyYNw%2BzJoxcquy7vjvjjMGN0LOMfM7RAmlL8hOiZN9F%2FmC8GApQioH4K8cBzZ2965j5ZPt36Of6TpydhmuxWYF0y1XSiEpYHXFt7uMoTQOL4NeeR21WhcF%2FfonudIsthe3auqsBWx4yRxcZbej1WjYwEH5J%2Fx7OP6pANTREjbn0sd%2FQjfH9GBRDH6cr2UxEHa51ATWdsOrZRDjL7IsXxDH%2FL58T0fkNC%2FEsLkwnIrAwAY6pgHIvVKFehhnvywq7Uf4Xx7q%2BnH4%2B1OLRxyr65W1oinbgEE%2Ft4MwpW3Nu6o2C5NTF290mfdEst1LMvxaDo03kv7BQwTSPB1WCGrl7Ef5ilk1FqHwPZg7aQvBehwezI81qocqIkxlloD8jNCXzEfdaPusduYWgzfQDP4v2qRRTKmvzw0IRMLDj5gQzUCBNuq9l6cm1NeC7oPXUza7Rv7StNuWOanT5CMh&X-Amz-Signature=93a470dc1fb3dbfc108a43d8819d55e44bbb2d8a0cc42f5e766856793fcaec91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYUCHUR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPKc83uiJ3V%2Ft%2F3EfbQM5qxb8zl51m5HPqWsz3n788pAiAwxDZT1OIg0vegPe0eDww%2FW6EODmEntc1czCs5%2F%2Fhu9yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1sOtpfDGi%2Fh49JzKtwDk3Ccbv8jUTa0QBwwpbAOD4F4UvV6FQpvxnACuQb20xrsxBW6uPas6xmmVzI5K3EkLOoE43v%2FqvNq%2BIGDnjgdWhyIqI21xaaKC5HLVUS4ELtNfgPQBbv5bqB4r5y3LIV3sD2daQGstMuLxGBONV%2BHpmpD5kkrqWYmUXkTU%2BuYwB%2FcpKePXSb5T7scr7qZ86TJk6DrRU5c8R%2Bi%2BNhUH6GZ%2B64uONrflOBABCyQ%2BDIfeisWXu4HnXjH4Ovrf9CIZG87S%2BS%2BjhIIpIKhujXcIosUZsEJHGooDH1FQW1Nr4DIjsAja8Bv0FcqqFFBWqs%2BKlqN79k1QlFshkTFyK8simhofCiD7PTzulyFCytbpjTOn220gqZLJ4GUHcGOvTdWIF66WRV5C3pciHatRPXB%2FwBbPdEyYNw%2BzJoxcquy7vjvjjMGN0LOMfM7RAmlL8hOiZN9F%2FmC8GApQioH4K8cBzZ2965j5ZPt36Of6TpydhmuxWYF0y1XSiEpYHXFt7uMoTQOL4NeeR21WhcF%2FfonudIsthe3auqsBWx4yRxcZbej1WjYwEH5J%2Fx7OP6pANTREjbn0sd%2FQjfH9GBRDH6cr2UxEHa51ATWdsOrZRDjL7IsXxDH%2FL58T0fkNC%2FEsLkwnIrAwAY6pgHIvVKFehhnvywq7Uf4Xx7q%2BnH4%2B1OLRxyr65W1oinbgEE%2Ft4MwpW3Nu6o2C5NTF290mfdEst1LMvxaDo03kv7BQwTSPB1WCGrl7Ef5ilk1FqHwPZg7aQvBehwezI81qocqIkxlloD8jNCXzEfdaPusduYWgzfQDP4v2qRRTKmvzw0IRMLDj5gQzUCBNuq9l6cm1NeC7oPXUza7Rv7StNuWOanT5CMh&X-Amz-Signature=d0f833f4d2606c722c1477457fdc88e75521d025b6be243abc519d609a239db1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYUCHUR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPKc83uiJ3V%2Ft%2F3EfbQM5qxb8zl51m5HPqWsz3n788pAiAwxDZT1OIg0vegPe0eDww%2FW6EODmEntc1czCs5%2F%2Fhu9yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1sOtpfDGi%2Fh49JzKtwDk3Ccbv8jUTa0QBwwpbAOD4F4UvV6FQpvxnACuQb20xrsxBW6uPas6xmmVzI5K3EkLOoE43v%2FqvNq%2BIGDnjgdWhyIqI21xaaKC5HLVUS4ELtNfgPQBbv5bqB4r5y3LIV3sD2daQGstMuLxGBONV%2BHpmpD5kkrqWYmUXkTU%2BuYwB%2FcpKePXSb5T7scr7qZ86TJk6DrRU5c8R%2Bi%2BNhUH6GZ%2B64uONrflOBABCyQ%2BDIfeisWXu4HnXjH4Ovrf9CIZG87S%2BS%2BjhIIpIKhujXcIosUZsEJHGooDH1FQW1Nr4DIjsAja8Bv0FcqqFFBWqs%2BKlqN79k1QlFshkTFyK8simhofCiD7PTzulyFCytbpjTOn220gqZLJ4GUHcGOvTdWIF66WRV5C3pciHatRPXB%2FwBbPdEyYNw%2BzJoxcquy7vjvjjMGN0LOMfM7RAmlL8hOiZN9F%2FmC8GApQioH4K8cBzZ2965j5ZPt36Of6TpydhmuxWYF0y1XSiEpYHXFt7uMoTQOL4NeeR21WhcF%2FfonudIsthe3auqsBWx4yRxcZbej1WjYwEH5J%2Fx7OP6pANTREjbn0sd%2FQjfH9GBRDH6cr2UxEHa51ATWdsOrZRDjL7IsXxDH%2FL58T0fkNC%2FEsLkwnIrAwAY6pgHIvVKFehhnvywq7Uf4Xx7q%2BnH4%2B1OLRxyr65W1oinbgEE%2Ft4MwpW3Nu6o2C5NTF290mfdEst1LMvxaDo03kv7BQwTSPB1WCGrl7Ef5ilk1FqHwPZg7aQvBehwezI81qocqIkxlloD8jNCXzEfdaPusduYWgzfQDP4v2qRRTKmvzw0IRMLDj5gQzUCBNuq9l6cm1NeC7oPXUza7Rv7StNuWOanT5CMh&X-Amz-Signature=6dfe5c96408f94fad379aed98aa82b189d13d6e876bb56c75eb518e0f41a00a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYUCHUR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPKc83uiJ3V%2Ft%2F3EfbQM5qxb8zl51m5HPqWsz3n788pAiAwxDZT1OIg0vegPe0eDww%2FW6EODmEntc1czCs5%2F%2Fhu9yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1sOtpfDGi%2Fh49JzKtwDk3Ccbv8jUTa0QBwwpbAOD4F4UvV6FQpvxnACuQb20xrsxBW6uPas6xmmVzI5K3EkLOoE43v%2FqvNq%2BIGDnjgdWhyIqI21xaaKC5HLVUS4ELtNfgPQBbv5bqB4r5y3LIV3sD2daQGstMuLxGBONV%2BHpmpD5kkrqWYmUXkTU%2BuYwB%2FcpKePXSb5T7scr7qZ86TJk6DrRU5c8R%2Bi%2BNhUH6GZ%2B64uONrflOBABCyQ%2BDIfeisWXu4HnXjH4Ovrf9CIZG87S%2BS%2BjhIIpIKhujXcIosUZsEJHGooDH1FQW1Nr4DIjsAja8Bv0FcqqFFBWqs%2BKlqN79k1QlFshkTFyK8simhofCiD7PTzulyFCytbpjTOn220gqZLJ4GUHcGOvTdWIF66WRV5C3pciHatRPXB%2FwBbPdEyYNw%2BzJoxcquy7vjvjjMGN0LOMfM7RAmlL8hOiZN9F%2FmC8GApQioH4K8cBzZ2965j5ZPt36Of6TpydhmuxWYF0y1XSiEpYHXFt7uMoTQOL4NeeR21WhcF%2FfonudIsthe3auqsBWx4yRxcZbej1WjYwEH5J%2Fx7OP6pANTREjbn0sd%2FQjfH9GBRDH6cr2UxEHa51ATWdsOrZRDjL7IsXxDH%2FL58T0fkNC%2FEsLkwnIrAwAY6pgHIvVKFehhnvywq7Uf4Xx7q%2BnH4%2B1OLRxyr65W1oinbgEE%2Ft4MwpW3Nu6o2C5NTF290mfdEst1LMvxaDo03kv7BQwTSPB1WCGrl7Ef5ilk1FqHwPZg7aQvBehwezI81qocqIkxlloD8jNCXzEfdaPusduYWgzfQDP4v2qRRTKmvzw0IRMLDj5gQzUCBNuq9l6cm1NeC7oPXUza7Rv7StNuWOanT5CMh&X-Amz-Signature=d7bdf4af7c44b83f5e39585fb7d54b1c0cf58c710f8fba685148e2e45eee5a06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYUCHUR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPKc83uiJ3V%2Ft%2F3EfbQM5qxb8zl51m5HPqWsz3n788pAiAwxDZT1OIg0vegPe0eDww%2FW6EODmEntc1czCs5%2F%2Fhu9yqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1sOtpfDGi%2Fh49JzKtwDk3Ccbv8jUTa0QBwwpbAOD4F4UvV6FQpvxnACuQb20xrsxBW6uPas6xmmVzI5K3EkLOoE43v%2FqvNq%2BIGDnjgdWhyIqI21xaaKC5HLVUS4ELtNfgPQBbv5bqB4r5y3LIV3sD2daQGstMuLxGBONV%2BHpmpD5kkrqWYmUXkTU%2BuYwB%2FcpKePXSb5T7scr7qZ86TJk6DrRU5c8R%2Bi%2BNhUH6GZ%2B64uONrflOBABCyQ%2BDIfeisWXu4HnXjH4Ovrf9CIZG87S%2BS%2BjhIIpIKhujXcIosUZsEJHGooDH1FQW1Nr4DIjsAja8Bv0FcqqFFBWqs%2BKlqN79k1QlFshkTFyK8simhofCiD7PTzulyFCytbpjTOn220gqZLJ4GUHcGOvTdWIF66WRV5C3pciHatRPXB%2FwBbPdEyYNw%2BzJoxcquy7vjvjjMGN0LOMfM7RAmlL8hOiZN9F%2FmC8GApQioH4K8cBzZ2965j5ZPt36Of6TpydhmuxWYF0y1XSiEpYHXFt7uMoTQOL4NeeR21WhcF%2FfonudIsthe3auqsBWx4yRxcZbej1WjYwEH5J%2Fx7OP6pANTREjbn0sd%2FQjfH9GBRDH6cr2UxEHa51ATWdsOrZRDjL7IsXxDH%2FL58T0fkNC%2FEsLkwnIrAwAY6pgHIvVKFehhnvywq7Uf4Xx7q%2BnH4%2B1OLRxyr65W1oinbgEE%2Ft4MwpW3Nu6o2C5NTF290mfdEst1LMvxaDo03kv7BQwTSPB1WCGrl7Ef5ilk1FqHwPZg7aQvBehwezI81qocqIkxlloD8jNCXzEfdaPusduYWgzfQDP4v2qRRTKmvzw0IRMLDj5gQzUCBNuq9l6cm1NeC7oPXUza7Rv7StNuWOanT5CMh&X-Amz-Signature=2574218c91f9a783d4940b9ed94f3f1067140a7656d33a2aa6c547f62521634f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

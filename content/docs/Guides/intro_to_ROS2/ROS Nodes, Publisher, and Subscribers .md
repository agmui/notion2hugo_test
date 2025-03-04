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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNNLYGE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ASOG%2BOhB6aBoSJX49rUePcf8C7khSpniESGpBYixWAiBeOppU4seap%2FlyD0y4cEgwcIHTSxAunPmuYATtKVNJtyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsERRH4RC7bgt2Fg9KtwD6oZbJLp7Iwr%2F0LxMn0fJ91UpcYvIrHaDywNGfj62Icq5KShQJR75Tj5eXmUbthM%2B2I7ScBM0qNeLzgXw359h3X%2FSIP3Jn7MvGwRZuYKkbGh4BHWMgoOUXsSd%2BE4PFzn4lr%2BZx8h5gkbhRx%2FDtlTpG3YvLytN%2BeILnNK7oa2uIvkHyeHIJR1yZGeN%2BSwWV4jN8wSazEomnu9v3R7JCe9zRxZZVDwt%2Bzn%2BHgSDpwcocdHKfoiCpeeqY7c9UJMOWzWQ%2FOjIBJJz4jZYgLNYN8Cp27B8eK3rwRGG3KMGDMY22p4S1Pl2amtKjHsL4doDiRkb56P9Ss870gjs%2Boq3sW7HFaf%2B0%2F5je3VuRQb8wJjaa6HZUri7erfADNMNWSQPtrSJ4F%2BroapyzuAXnoIeO3VCh9Cx45Cw9HqJmPmZFNVCG1EBP%2F2DpFEKnzzODPU%2BIMJvPQijxFI3brN7pzTaLLxf08Z7uGL1GpRwfejqdQCHVwnGAxK6U6kOx2LsW7rIalKlE3hK0sSNzPZ3K6b05JUPBjo%2BWLAlUg3lcg%2B9nLewrqqQNA0%2F%2B0Ld%2FTyPkA3zZ0qigKjVAIH49WJY4H6fh%2FcR66YzR4mu5f9HHCOBwNDtdBV9LiM021cwMZKSRpsw59ydvgY6pgGzFFlC%2Bv5BEDjHias0STRATcgiUx0cO%2B2RL1JUGsE5%2F8ccNuhouN4Td8EJGjYBV8JVfSkLf2VV%2FI1Dz6ZoZDemx30%2Bx9dSuPw7bCakRy2HVDayez5OgoD3ATJvWZRAvIEZz6OCTJtLp6Kpx5olLVMI6mu7db9RzHBePTjHTPAiJqj%2FUj%2Fg6C7RCL3Ris3cf89Eg%2Fy73WGzss5tpcNLnX5WrSHRvntS&X-Amz-Signature=aa5395ba8944fdee595dcafca53e24f60533a29aaf0e975a6864931fb11976e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNNLYGE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ASOG%2BOhB6aBoSJX49rUePcf8C7khSpniESGpBYixWAiBeOppU4seap%2FlyD0y4cEgwcIHTSxAunPmuYATtKVNJtyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsERRH4RC7bgt2Fg9KtwD6oZbJLp7Iwr%2F0LxMn0fJ91UpcYvIrHaDywNGfj62Icq5KShQJR75Tj5eXmUbthM%2B2I7ScBM0qNeLzgXw359h3X%2FSIP3Jn7MvGwRZuYKkbGh4BHWMgoOUXsSd%2BE4PFzn4lr%2BZx8h5gkbhRx%2FDtlTpG3YvLytN%2BeILnNK7oa2uIvkHyeHIJR1yZGeN%2BSwWV4jN8wSazEomnu9v3R7JCe9zRxZZVDwt%2Bzn%2BHgSDpwcocdHKfoiCpeeqY7c9UJMOWzWQ%2FOjIBJJz4jZYgLNYN8Cp27B8eK3rwRGG3KMGDMY22p4S1Pl2amtKjHsL4doDiRkb56P9Ss870gjs%2Boq3sW7HFaf%2B0%2F5je3VuRQb8wJjaa6HZUri7erfADNMNWSQPtrSJ4F%2BroapyzuAXnoIeO3VCh9Cx45Cw9HqJmPmZFNVCG1EBP%2F2DpFEKnzzODPU%2BIMJvPQijxFI3brN7pzTaLLxf08Z7uGL1GpRwfejqdQCHVwnGAxK6U6kOx2LsW7rIalKlE3hK0sSNzPZ3K6b05JUPBjo%2BWLAlUg3lcg%2B9nLewrqqQNA0%2F%2B0Ld%2FTyPkA3zZ0qigKjVAIH49WJY4H6fh%2FcR66YzR4mu5f9HHCOBwNDtdBV9LiM021cwMZKSRpsw59ydvgY6pgGzFFlC%2Bv5BEDjHias0STRATcgiUx0cO%2B2RL1JUGsE5%2F8ccNuhouN4Td8EJGjYBV8JVfSkLf2VV%2FI1Dz6ZoZDemx30%2Bx9dSuPw7bCakRy2HVDayez5OgoD3ATJvWZRAvIEZz6OCTJtLp6Kpx5olLVMI6mu7db9RzHBePTjHTPAiJqj%2FUj%2Fg6C7RCL3Ris3cf89Eg%2Fy73WGzss5tpcNLnX5WrSHRvntS&X-Amz-Signature=8b44a2a9bd3a2d43664b77802a24e1daafd761df2277d370c1c2d0eb11778498&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNNLYGE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ASOG%2BOhB6aBoSJX49rUePcf8C7khSpniESGpBYixWAiBeOppU4seap%2FlyD0y4cEgwcIHTSxAunPmuYATtKVNJtyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsERRH4RC7bgt2Fg9KtwD6oZbJLp7Iwr%2F0LxMn0fJ91UpcYvIrHaDywNGfj62Icq5KShQJR75Tj5eXmUbthM%2B2I7ScBM0qNeLzgXw359h3X%2FSIP3Jn7MvGwRZuYKkbGh4BHWMgoOUXsSd%2BE4PFzn4lr%2BZx8h5gkbhRx%2FDtlTpG3YvLytN%2BeILnNK7oa2uIvkHyeHIJR1yZGeN%2BSwWV4jN8wSazEomnu9v3R7JCe9zRxZZVDwt%2Bzn%2BHgSDpwcocdHKfoiCpeeqY7c9UJMOWzWQ%2FOjIBJJz4jZYgLNYN8Cp27B8eK3rwRGG3KMGDMY22p4S1Pl2amtKjHsL4doDiRkb56P9Ss870gjs%2Boq3sW7HFaf%2B0%2F5je3VuRQb8wJjaa6HZUri7erfADNMNWSQPtrSJ4F%2BroapyzuAXnoIeO3VCh9Cx45Cw9HqJmPmZFNVCG1EBP%2F2DpFEKnzzODPU%2BIMJvPQijxFI3brN7pzTaLLxf08Z7uGL1GpRwfejqdQCHVwnGAxK6U6kOx2LsW7rIalKlE3hK0sSNzPZ3K6b05JUPBjo%2BWLAlUg3lcg%2B9nLewrqqQNA0%2F%2B0Ld%2FTyPkA3zZ0qigKjVAIH49WJY4H6fh%2FcR66YzR4mu5f9HHCOBwNDtdBV9LiM021cwMZKSRpsw59ydvgY6pgGzFFlC%2Bv5BEDjHias0STRATcgiUx0cO%2B2RL1JUGsE5%2F8ccNuhouN4Td8EJGjYBV8JVfSkLf2VV%2FI1Dz6ZoZDemx30%2Bx9dSuPw7bCakRy2HVDayez5OgoD3ATJvWZRAvIEZz6OCTJtLp6Kpx5olLVMI6mu7db9RzHBePTjHTPAiJqj%2FUj%2Fg6C7RCL3Ris3cf89Eg%2Fy73WGzss5tpcNLnX5WrSHRvntS&X-Amz-Signature=8de0c9669a98eef5b4f1666b6e0084ae60b2434a5191612c67e73bd2a104bb77&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNNLYGE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ASOG%2BOhB6aBoSJX49rUePcf8C7khSpniESGpBYixWAiBeOppU4seap%2FlyD0y4cEgwcIHTSxAunPmuYATtKVNJtyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsERRH4RC7bgt2Fg9KtwD6oZbJLp7Iwr%2F0LxMn0fJ91UpcYvIrHaDywNGfj62Icq5KShQJR75Tj5eXmUbthM%2B2I7ScBM0qNeLzgXw359h3X%2FSIP3Jn7MvGwRZuYKkbGh4BHWMgoOUXsSd%2BE4PFzn4lr%2BZx8h5gkbhRx%2FDtlTpG3YvLytN%2BeILnNK7oa2uIvkHyeHIJR1yZGeN%2BSwWV4jN8wSazEomnu9v3R7JCe9zRxZZVDwt%2Bzn%2BHgSDpwcocdHKfoiCpeeqY7c9UJMOWzWQ%2FOjIBJJz4jZYgLNYN8Cp27B8eK3rwRGG3KMGDMY22p4S1Pl2amtKjHsL4doDiRkb56P9Ss870gjs%2Boq3sW7HFaf%2B0%2F5je3VuRQb8wJjaa6HZUri7erfADNMNWSQPtrSJ4F%2BroapyzuAXnoIeO3VCh9Cx45Cw9HqJmPmZFNVCG1EBP%2F2DpFEKnzzODPU%2BIMJvPQijxFI3brN7pzTaLLxf08Z7uGL1GpRwfejqdQCHVwnGAxK6U6kOx2LsW7rIalKlE3hK0sSNzPZ3K6b05JUPBjo%2BWLAlUg3lcg%2B9nLewrqqQNA0%2F%2B0Ld%2FTyPkA3zZ0qigKjVAIH49WJY4H6fh%2FcR66YzR4mu5f9HHCOBwNDtdBV9LiM021cwMZKSRpsw59ydvgY6pgGzFFlC%2Bv5BEDjHias0STRATcgiUx0cO%2B2RL1JUGsE5%2F8ccNuhouN4Td8EJGjYBV8JVfSkLf2VV%2FI1Dz6ZoZDemx30%2Bx9dSuPw7bCakRy2HVDayez5OgoD3ATJvWZRAvIEZz6OCTJtLp6Kpx5olLVMI6mu7db9RzHBePTjHTPAiJqj%2FUj%2Fg6C7RCL3Ris3cf89Eg%2Fy73WGzss5tpcNLnX5WrSHRvntS&X-Amz-Signature=1cb23517f43d43b64f57e7e78763d87b633f2f52f77a20b1daf8e614c1221819&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNNLYGE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ASOG%2BOhB6aBoSJX49rUePcf8C7khSpniESGpBYixWAiBeOppU4seap%2FlyD0y4cEgwcIHTSxAunPmuYATtKVNJtyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsERRH4RC7bgt2Fg9KtwD6oZbJLp7Iwr%2F0LxMn0fJ91UpcYvIrHaDywNGfj62Icq5KShQJR75Tj5eXmUbthM%2B2I7ScBM0qNeLzgXw359h3X%2FSIP3Jn7MvGwRZuYKkbGh4BHWMgoOUXsSd%2BE4PFzn4lr%2BZx8h5gkbhRx%2FDtlTpG3YvLytN%2BeILnNK7oa2uIvkHyeHIJR1yZGeN%2BSwWV4jN8wSazEomnu9v3R7JCe9zRxZZVDwt%2Bzn%2BHgSDpwcocdHKfoiCpeeqY7c9UJMOWzWQ%2FOjIBJJz4jZYgLNYN8Cp27B8eK3rwRGG3KMGDMY22p4S1Pl2amtKjHsL4doDiRkb56P9Ss870gjs%2Boq3sW7HFaf%2B0%2F5je3VuRQb8wJjaa6HZUri7erfADNMNWSQPtrSJ4F%2BroapyzuAXnoIeO3VCh9Cx45Cw9HqJmPmZFNVCG1EBP%2F2DpFEKnzzODPU%2BIMJvPQijxFI3brN7pzTaLLxf08Z7uGL1GpRwfejqdQCHVwnGAxK6U6kOx2LsW7rIalKlE3hK0sSNzPZ3K6b05JUPBjo%2BWLAlUg3lcg%2B9nLewrqqQNA0%2F%2B0Ld%2FTyPkA3zZ0qigKjVAIH49WJY4H6fh%2FcR66YzR4mu5f9HHCOBwNDtdBV9LiM021cwMZKSRpsw59ydvgY6pgGzFFlC%2Bv5BEDjHias0STRATcgiUx0cO%2B2RL1JUGsE5%2F8ccNuhouN4Td8EJGjYBV8JVfSkLf2VV%2FI1Dz6ZoZDemx30%2Bx9dSuPw7bCakRy2HVDayez5OgoD3ATJvWZRAvIEZz6OCTJtLp6Kpx5olLVMI6mu7db9RzHBePTjHTPAiJqj%2FUj%2Fg6C7RCL3Ris3cf89Eg%2Fy73WGzss5tpcNLnX5WrSHRvntS&X-Amz-Signature=082ef3fee13f1f9b5444749e286aec064a8d2d23f96155db0f000c0193d68dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNNLYGE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ASOG%2BOhB6aBoSJX49rUePcf8C7khSpniESGpBYixWAiBeOppU4seap%2FlyD0y4cEgwcIHTSxAunPmuYATtKVNJtyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsERRH4RC7bgt2Fg9KtwD6oZbJLp7Iwr%2F0LxMn0fJ91UpcYvIrHaDywNGfj62Icq5KShQJR75Tj5eXmUbthM%2B2I7ScBM0qNeLzgXw359h3X%2FSIP3Jn7MvGwRZuYKkbGh4BHWMgoOUXsSd%2BE4PFzn4lr%2BZx8h5gkbhRx%2FDtlTpG3YvLytN%2BeILnNK7oa2uIvkHyeHIJR1yZGeN%2BSwWV4jN8wSazEomnu9v3R7JCe9zRxZZVDwt%2Bzn%2BHgSDpwcocdHKfoiCpeeqY7c9UJMOWzWQ%2FOjIBJJz4jZYgLNYN8Cp27B8eK3rwRGG3KMGDMY22p4S1Pl2amtKjHsL4doDiRkb56P9Ss870gjs%2Boq3sW7HFaf%2B0%2F5je3VuRQb8wJjaa6HZUri7erfADNMNWSQPtrSJ4F%2BroapyzuAXnoIeO3VCh9Cx45Cw9HqJmPmZFNVCG1EBP%2F2DpFEKnzzODPU%2BIMJvPQijxFI3brN7pzTaLLxf08Z7uGL1GpRwfejqdQCHVwnGAxK6U6kOx2LsW7rIalKlE3hK0sSNzPZ3K6b05JUPBjo%2BWLAlUg3lcg%2B9nLewrqqQNA0%2F%2B0Ld%2FTyPkA3zZ0qigKjVAIH49WJY4H6fh%2FcR66YzR4mu5f9HHCOBwNDtdBV9LiM021cwMZKSRpsw59ydvgY6pgGzFFlC%2Bv5BEDjHias0STRATcgiUx0cO%2B2RL1JUGsE5%2F8ccNuhouN4Td8EJGjYBV8JVfSkLf2VV%2FI1Dz6ZoZDemx30%2Bx9dSuPw7bCakRy2HVDayez5OgoD3ATJvWZRAvIEZz6OCTJtLp6Kpx5olLVMI6mu7db9RzHBePTjHTPAiJqj%2FUj%2Fg6C7RCL3Ris3cf89Eg%2Fy73WGzss5tpcNLnX5WrSHRvntS&X-Amz-Signature=22e610025082867a701072f676c6a2946dab82cfe7dc01c56462af8a72e1c24d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNNLYGE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ASOG%2BOhB6aBoSJX49rUePcf8C7khSpniESGpBYixWAiBeOppU4seap%2FlyD0y4cEgwcIHTSxAunPmuYATtKVNJtyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsERRH4RC7bgt2Fg9KtwD6oZbJLp7Iwr%2F0LxMn0fJ91UpcYvIrHaDywNGfj62Icq5KShQJR75Tj5eXmUbthM%2B2I7ScBM0qNeLzgXw359h3X%2FSIP3Jn7MvGwRZuYKkbGh4BHWMgoOUXsSd%2BE4PFzn4lr%2BZx8h5gkbhRx%2FDtlTpG3YvLytN%2BeILnNK7oa2uIvkHyeHIJR1yZGeN%2BSwWV4jN8wSazEomnu9v3R7JCe9zRxZZVDwt%2Bzn%2BHgSDpwcocdHKfoiCpeeqY7c9UJMOWzWQ%2FOjIBJJz4jZYgLNYN8Cp27B8eK3rwRGG3KMGDMY22p4S1Pl2amtKjHsL4doDiRkb56P9Ss870gjs%2Boq3sW7HFaf%2B0%2F5je3VuRQb8wJjaa6HZUri7erfADNMNWSQPtrSJ4F%2BroapyzuAXnoIeO3VCh9Cx45Cw9HqJmPmZFNVCG1EBP%2F2DpFEKnzzODPU%2BIMJvPQijxFI3brN7pzTaLLxf08Z7uGL1GpRwfejqdQCHVwnGAxK6U6kOx2LsW7rIalKlE3hK0sSNzPZ3K6b05JUPBjo%2BWLAlUg3lcg%2B9nLewrqqQNA0%2F%2B0Ld%2FTyPkA3zZ0qigKjVAIH49WJY4H6fh%2FcR66YzR4mu5f9HHCOBwNDtdBV9LiM021cwMZKSRpsw59ydvgY6pgGzFFlC%2Bv5BEDjHias0STRATcgiUx0cO%2B2RL1JUGsE5%2F8ccNuhouN4Td8EJGjYBV8JVfSkLf2VV%2FI1Dz6ZoZDemx30%2Bx9dSuPw7bCakRy2HVDayez5OgoD3ATJvWZRAvIEZz6OCTJtLp6Kpx5olLVMI6mu7db9RzHBePTjHTPAiJqj%2FUj%2Fg6C7RCL3Ris3cf89Eg%2Fy73WGzss5tpcNLnX5WrSHRvntS&X-Amz-Signature=5329a3037cfcbe5d674c9abcebc9e4aa501aff87543aebf0fc8dcdbde23ee8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNNLYGE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5ASOG%2BOhB6aBoSJX49rUePcf8C7khSpniESGpBYixWAiBeOppU4seap%2FlyD0y4cEgwcIHTSxAunPmuYATtKVNJtyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsERRH4RC7bgt2Fg9KtwD6oZbJLp7Iwr%2F0LxMn0fJ91UpcYvIrHaDywNGfj62Icq5KShQJR75Tj5eXmUbthM%2B2I7ScBM0qNeLzgXw359h3X%2FSIP3Jn7MvGwRZuYKkbGh4BHWMgoOUXsSd%2BE4PFzn4lr%2BZx8h5gkbhRx%2FDtlTpG3YvLytN%2BeILnNK7oa2uIvkHyeHIJR1yZGeN%2BSwWV4jN8wSazEomnu9v3R7JCe9zRxZZVDwt%2Bzn%2BHgSDpwcocdHKfoiCpeeqY7c9UJMOWzWQ%2FOjIBJJz4jZYgLNYN8Cp27B8eK3rwRGG3KMGDMY22p4S1Pl2amtKjHsL4doDiRkb56P9Ss870gjs%2Boq3sW7HFaf%2B0%2F5je3VuRQb8wJjaa6HZUri7erfADNMNWSQPtrSJ4F%2BroapyzuAXnoIeO3VCh9Cx45Cw9HqJmPmZFNVCG1EBP%2F2DpFEKnzzODPU%2BIMJvPQijxFI3brN7pzTaLLxf08Z7uGL1GpRwfejqdQCHVwnGAxK6U6kOx2LsW7rIalKlE3hK0sSNzPZ3K6b05JUPBjo%2BWLAlUg3lcg%2B9nLewrqqQNA0%2F%2B0Ld%2FTyPkA3zZ0qigKjVAIH49WJY4H6fh%2FcR66YzR4mu5f9HHCOBwNDtdBV9LiM021cwMZKSRpsw59ydvgY6pgGzFFlC%2Bv5BEDjHias0STRATcgiUx0cO%2B2RL1JUGsE5%2F8ccNuhouN4Td8EJGjYBV8JVfSkLf2VV%2FI1Dz6ZoZDemx30%2Bx9dSuPw7bCakRy2HVDayez5OgoD3ATJvWZRAvIEZz6OCTJtLp6Kpx5olLVMI6mu7db9RzHBePTjHTPAiJqj%2FUj%2Fg6C7RCL3Ris3cf89Eg%2Fy73WGzss5tpcNLnX5WrSHRvntS&X-Amz-Signature=e1921cf4509f30b61a383a4fb0c1ecc6f81709cc8271f7c733c0944360c7c717&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 

---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QHDFY3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi3LChly6FhZ7gjD5A%2FlqRsd%2BL5%2BtP8Qv35CVT%2BrLKbAIhANZll%2FRTriNrdd52Xl%2Bxtm5Nt1SYTXfRsGhHsjdgTXQGKv8DCH0QABoMNjM3NDIzMTgzODA1Igzk3EORgNqnSs%2FFUSMq3AMUmUP0KMG7OTFkQAX%2B%2FVfNjp12dVbLLrthYz2YdbkfFs7aOt4o7c6OLxycErdIAKt8wbelS%2BFdMBaxRXveNALrEBZ0QduR6bXdGzqL331jmEoU1Iw9wcHxSnDpg%2B9od2M%2BuJyJeqcEYxpdNdSf%2B1rt9G46CQDU2txX8%2BJpd9Ynf7qFWW7ed7PKjAxYsw%2BTBdPis0ngx4N4j0CUodtjR%2F7kUgjuy4bj43hAlqdnQpe9Uk%2FcG7Q7idMCD%2BkbQMiNQ5My1X%2FQKYtlBA5kPSxaClwbGQuv11PDUDOf6GrbQHc1sgP78CPXEIdjbFmC1rTJq63AkGrgzptnAV1aV6iXV6qvnG2WzaHmUX%2FbNVDKl2QQJRoY3YSjkCikDjJg7sdda9zIF9mrYLJnbjDNEbpTEpmfj4%2Bgp1ZRfnC%2FdnRpxXujfnyMJW5VUeAf6Hu%2BJ18RDuBJVAfgzn5vVEzIYnE0XN8Ato3E603%2FSvpzqHzzM2AfNiNfr2nZ024YiExJ5n83W8K%2BAuBveayzHboFeJUB1Gu2uZ1QNZV5AnKOfrsJqOyUMYKt5JtfkhP7Xl9OT8F0wV6YzlhHTw%2FlioPGcVz%2FM9y1L3QKPukL9KUo%2FmoYqcqmKycHak8kFEadFbNS2jDDt7%2FABjqkAckfRz4ngr9dnhHju%2BZE5dGObPcIik3Wm4ij%2BVBe3nSH2ygdAqYnwlFjVnYrLSpdkzdU01XBH4b01buEeU1lzKdzcgU2M2DNpclMi4MCgEVmDZ8Bufh0GP7cFjj%2BxkmjXMxdlqe9hp6L2AEo%2BwSH4j2iWRkmyw3PvnJE%2FcUIvvBnX%2BzKB2%2FEZDcB5M2TnMQNFM9MBl4mwG3puRCAfu04LvjuIKLn&X-Amz-Signature=f38bcfeebfd2aed45297fd84dcc3f648593837bba5b67c73855fe5788c7e7be8&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QHDFY3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi3LChly6FhZ7gjD5A%2FlqRsd%2BL5%2BtP8Qv35CVT%2BrLKbAIhANZll%2FRTriNrdd52Xl%2Bxtm5Nt1SYTXfRsGhHsjdgTXQGKv8DCH0QABoMNjM3NDIzMTgzODA1Igzk3EORgNqnSs%2FFUSMq3AMUmUP0KMG7OTFkQAX%2B%2FVfNjp12dVbLLrthYz2YdbkfFs7aOt4o7c6OLxycErdIAKt8wbelS%2BFdMBaxRXveNALrEBZ0QduR6bXdGzqL331jmEoU1Iw9wcHxSnDpg%2B9od2M%2BuJyJeqcEYxpdNdSf%2B1rt9G46CQDU2txX8%2BJpd9Ynf7qFWW7ed7PKjAxYsw%2BTBdPis0ngx4N4j0CUodtjR%2F7kUgjuy4bj43hAlqdnQpe9Uk%2FcG7Q7idMCD%2BkbQMiNQ5My1X%2FQKYtlBA5kPSxaClwbGQuv11PDUDOf6GrbQHc1sgP78CPXEIdjbFmC1rTJq63AkGrgzptnAV1aV6iXV6qvnG2WzaHmUX%2FbNVDKl2QQJRoY3YSjkCikDjJg7sdda9zIF9mrYLJnbjDNEbpTEpmfj4%2Bgp1ZRfnC%2FdnRpxXujfnyMJW5VUeAf6Hu%2BJ18RDuBJVAfgzn5vVEzIYnE0XN8Ato3E603%2FSvpzqHzzM2AfNiNfr2nZ024YiExJ5n83W8K%2BAuBveayzHboFeJUB1Gu2uZ1QNZV5AnKOfrsJqOyUMYKt5JtfkhP7Xl9OT8F0wV6YzlhHTw%2FlioPGcVz%2FM9y1L3QKPukL9KUo%2FmoYqcqmKycHak8kFEadFbNS2jDDt7%2FABjqkAckfRz4ngr9dnhHju%2BZE5dGObPcIik3Wm4ij%2BVBe3nSH2ygdAqYnwlFjVnYrLSpdkzdU01XBH4b01buEeU1lzKdzcgU2M2DNpclMi4MCgEVmDZ8Bufh0GP7cFjj%2BxkmjXMxdlqe9hp6L2AEo%2BwSH4j2iWRkmyw3PvnJE%2FcUIvvBnX%2BzKB2%2FEZDcB5M2TnMQNFM9MBl4mwG3puRCAfu04LvjuIKLn&X-Amz-Signature=a5a658406be85815755fd070995748dbfa917de663ae7bdf4c1eda26754208e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QHDFY3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi3LChly6FhZ7gjD5A%2FlqRsd%2BL5%2BtP8Qv35CVT%2BrLKbAIhANZll%2FRTriNrdd52Xl%2Bxtm5Nt1SYTXfRsGhHsjdgTXQGKv8DCH0QABoMNjM3NDIzMTgzODA1Igzk3EORgNqnSs%2FFUSMq3AMUmUP0KMG7OTFkQAX%2B%2FVfNjp12dVbLLrthYz2YdbkfFs7aOt4o7c6OLxycErdIAKt8wbelS%2BFdMBaxRXveNALrEBZ0QduR6bXdGzqL331jmEoU1Iw9wcHxSnDpg%2B9od2M%2BuJyJeqcEYxpdNdSf%2B1rt9G46CQDU2txX8%2BJpd9Ynf7qFWW7ed7PKjAxYsw%2BTBdPis0ngx4N4j0CUodtjR%2F7kUgjuy4bj43hAlqdnQpe9Uk%2FcG7Q7idMCD%2BkbQMiNQ5My1X%2FQKYtlBA5kPSxaClwbGQuv11PDUDOf6GrbQHc1sgP78CPXEIdjbFmC1rTJq63AkGrgzptnAV1aV6iXV6qvnG2WzaHmUX%2FbNVDKl2QQJRoY3YSjkCikDjJg7sdda9zIF9mrYLJnbjDNEbpTEpmfj4%2Bgp1ZRfnC%2FdnRpxXujfnyMJW5VUeAf6Hu%2BJ18RDuBJVAfgzn5vVEzIYnE0XN8Ato3E603%2FSvpzqHzzM2AfNiNfr2nZ024YiExJ5n83W8K%2BAuBveayzHboFeJUB1Gu2uZ1QNZV5AnKOfrsJqOyUMYKt5JtfkhP7Xl9OT8F0wV6YzlhHTw%2FlioPGcVz%2FM9y1L3QKPukL9KUo%2FmoYqcqmKycHak8kFEadFbNS2jDDt7%2FABjqkAckfRz4ngr9dnhHju%2BZE5dGObPcIik3Wm4ij%2BVBe3nSH2ygdAqYnwlFjVnYrLSpdkzdU01XBH4b01buEeU1lzKdzcgU2M2DNpclMi4MCgEVmDZ8Bufh0GP7cFjj%2BxkmjXMxdlqe9hp6L2AEo%2BwSH4j2iWRkmyw3PvnJE%2FcUIvvBnX%2BzKB2%2FEZDcB5M2TnMQNFM9MBl4mwG3puRCAfu04LvjuIKLn&X-Amz-Signature=6bb64ca2e4ef39a69a6674525ef519e7fbfcca6bb2fbb57ba6d2882c90c63092&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QHDFY3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi3LChly6FhZ7gjD5A%2FlqRsd%2BL5%2BtP8Qv35CVT%2BrLKbAIhANZll%2FRTriNrdd52Xl%2Bxtm5Nt1SYTXfRsGhHsjdgTXQGKv8DCH0QABoMNjM3NDIzMTgzODA1Igzk3EORgNqnSs%2FFUSMq3AMUmUP0KMG7OTFkQAX%2B%2FVfNjp12dVbLLrthYz2YdbkfFs7aOt4o7c6OLxycErdIAKt8wbelS%2BFdMBaxRXveNALrEBZ0QduR6bXdGzqL331jmEoU1Iw9wcHxSnDpg%2B9od2M%2BuJyJeqcEYxpdNdSf%2B1rt9G46CQDU2txX8%2BJpd9Ynf7qFWW7ed7PKjAxYsw%2BTBdPis0ngx4N4j0CUodtjR%2F7kUgjuy4bj43hAlqdnQpe9Uk%2FcG7Q7idMCD%2BkbQMiNQ5My1X%2FQKYtlBA5kPSxaClwbGQuv11PDUDOf6GrbQHc1sgP78CPXEIdjbFmC1rTJq63AkGrgzptnAV1aV6iXV6qvnG2WzaHmUX%2FbNVDKl2QQJRoY3YSjkCikDjJg7sdda9zIF9mrYLJnbjDNEbpTEpmfj4%2Bgp1ZRfnC%2FdnRpxXujfnyMJW5VUeAf6Hu%2BJ18RDuBJVAfgzn5vVEzIYnE0XN8Ato3E603%2FSvpzqHzzM2AfNiNfr2nZ024YiExJ5n83W8K%2BAuBveayzHboFeJUB1Gu2uZ1QNZV5AnKOfrsJqOyUMYKt5JtfkhP7Xl9OT8F0wV6YzlhHTw%2FlioPGcVz%2FM9y1L3QKPukL9KUo%2FmoYqcqmKycHak8kFEadFbNS2jDDt7%2FABjqkAckfRz4ngr9dnhHju%2BZE5dGObPcIik3Wm4ij%2BVBe3nSH2ygdAqYnwlFjVnYrLSpdkzdU01XBH4b01buEeU1lzKdzcgU2M2DNpclMi4MCgEVmDZ8Bufh0GP7cFjj%2BxkmjXMxdlqe9hp6L2AEo%2BwSH4j2iWRkmyw3PvnJE%2FcUIvvBnX%2BzKB2%2FEZDcB5M2TnMQNFM9MBl4mwG3puRCAfu04LvjuIKLn&X-Amz-Signature=a7f826b16cf4a640e51faa657d12a1ff0dfd3922e22683e3aa0c0f2d7e899ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QHDFY3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi3LChly6FhZ7gjD5A%2FlqRsd%2BL5%2BtP8Qv35CVT%2BrLKbAIhANZll%2FRTriNrdd52Xl%2Bxtm5Nt1SYTXfRsGhHsjdgTXQGKv8DCH0QABoMNjM3NDIzMTgzODA1Igzk3EORgNqnSs%2FFUSMq3AMUmUP0KMG7OTFkQAX%2B%2FVfNjp12dVbLLrthYz2YdbkfFs7aOt4o7c6OLxycErdIAKt8wbelS%2BFdMBaxRXveNALrEBZ0QduR6bXdGzqL331jmEoU1Iw9wcHxSnDpg%2B9od2M%2BuJyJeqcEYxpdNdSf%2B1rt9G46CQDU2txX8%2BJpd9Ynf7qFWW7ed7PKjAxYsw%2BTBdPis0ngx4N4j0CUodtjR%2F7kUgjuy4bj43hAlqdnQpe9Uk%2FcG7Q7idMCD%2BkbQMiNQ5My1X%2FQKYtlBA5kPSxaClwbGQuv11PDUDOf6GrbQHc1sgP78CPXEIdjbFmC1rTJq63AkGrgzptnAV1aV6iXV6qvnG2WzaHmUX%2FbNVDKl2QQJRoY3YSjkCikDjJg7sdda9zIF9mrYLJnbjDNEbpTEpmfj4%2Bgp1ZRfnC%2FdnRpxXujfnyMJW5VUeAf6Hu%2BJ18RDuBJVAfgzn5vVEzIYnE0XN8Ato3E603%2FSvpzqHzzM2AfNiNfr2nZ024YiExJ5n83W8K%2BAuBveayzHboFeJUB1Gu2uZ1QNZV5AnKOfrsJqOyUMYKt5JtfkhP7Xl9OT8F0wV6YzlhHTw%2FlioPGcVz%2FM9y1L3QKPukL9KUo%2FmoYqcqmKycHak8kFEadFbNS2jDDt7%2FABjqkAckfRz4ngr9dnhHju%2BZE5dGObPcIik3Wm4ij%2BVBe3nSH2ygdAqYnwlFjVnYrLSpdkzdU01XBH4b01buEeU1lzKdzcgU2M2DNpclMi4MCgEVmDZ8Bufh0GP7cFjj%2BxkmjXMxdlqe9hp6L2AEo%2BwSH4j2iWRkmyw3PvnJE%2FcUIvvBnX%2BzKB2%2FEZDcB5M2TnMQNFM9MBl4mwG3puRCAfu04LvjuIKLn&X-Amz-Signature=f7d342a6420db6c52b5298e3b01acbf51cf8e800bef1c039afe13b012188aa6c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QHDFY3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi3LChly6FhZ7gjD5A%2FlqRsd%2BL5%2BtP8Qv35CVT%2BrLKbAIhANZll%2FRTriNrdd52Xl%2Bxtm5Nt1SYTXfRsGhHsjdgTXQGKv8DCH0QABoMNjM3NDIzMTgzODA1Igzk3EORgNqnSs%2FFUSMq3AMUmUP0KMG7OTFkQAX%2B%2FVfNjp12dVbLLrthYz2YdbkfFs7aOt4o7c6OLxycErdIAKt8wbelS%2BFdMBaxRXveNALrEBZ0QduR6bXdGzqL331jmEoU1Iw9wcHxSnDpg%2B9od2M%2BuJyJeqcEYxpdNdSf%2B1rt9G46CQDU2txX8%2BJpd9Ynf7qFWW7ed7PKjAxYsw%2BTBdPis0ngx4N4j0CUodtjR%2F7kUgjuy4bj43hAlqdnQpe9Uk%2FcG7Q7idMCD%2BkbQMiNQ5My1X%2FQKYtlBA5kPSxaClwbGQuv11PDUDOf6GrbQHc1sgP78CPXEIdjbFmC1rTJq63AkGrgzptnAV1aV6iXV6qvnG2WzaHmUX%2FbNVDKl2QQJRoY3YSjkCikDjJg7sdda9zIF9mrYLJnbjDNEbpTEpmfj4%2Bgp1ZRfnC%2FdnRpxXujfnyMJW5VUeAf6Hu%2BJ18RDuBJVAfgzn5vVEzIYnE0XN8Ato3E603%2FSvpzqHzzM2AfNiNfr2nZ024YiExJ5n83W8K%2BAuBveayzHboFeJUB1Gu2uZ1QNZV5AnKOfrsJqOyUMYKt5JtfkhP7Xl9OT8F0wV6YzlhHTw%2FlioPGcVz%2FM9y1L3QKPukL9KUo%2FmoYqcqmKycHak8kFEadFbNS2jDDt7%2FABjqkAckfRz4ngr9dnhHju%2BZE5dGObPcIik3Wm4ij%2BVBe3nSH2ygdAqYnwlFjVnYrLSpdkzdU01XBH4b01buEeU1lzKdzcgU2M2DNpclMi4MCgEVmDZ8Bufh0GP7cFjj%2BxkmjXMxdlqe9hp6L2AEo%2BwSH4j2iWRkmyw3PvnJE%2FcUIvvBnX%2BzKB2%2FEZDcB5M2TnMQNFM9MBl4mwG3puRCAfu04LvjuIKLn&X-Amz-Signature=ce40d4645852bbb6118dbc3a8112b98d3b621b75c65ac9a3c2fd90ec5c19ed1a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QHDFY3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi3LChly6FhZ7gjD5A%2FlqRsd%2BL5%2BtP8Qv35CVT%2BrLKbAIhANZll%2FRTriNrdd52Xl%2Bxtm5Nt1SYTXfRsGhHsjdgTXQGKv8DCH0QABoMNjM3NDIzMTgzODA1Igzk3EORgNqnSs%2FFUSMq3AMUmUP0KMG7OTFkQAX%2B%2FVfNjp12dVbLLrthYz2YdbkfFs7aOt4o7c6OLxycErdIAKt8wbelS%2BFdMBaxRXveNALrEBZ0QduR6bXdGzqL331jmEoU1Iw9wcHxSnDpg%2B9od2M%2BuJyJeqcEYxpdNdSf%2B1rt9G46CQDU2txX8%2BJpd9Ynf7qFWW7ed7PKjAxYsw%2BTBdPis0ngx4N4j0CUodtjR%2F7kUgjuy4bj43hAlqdnQpe9Uk%2FcG7Q7idMCD%2BkbQMiNQ5My1X%2FQKYtlBA5kPSxaClwbGQuv11PDUDOf6GrbQHc1sgP78CPXEIdjbFmC1rTJq63AkGrgzptnAV1aV6iXV6qvnG2WzaHmUX%2FbNVDKl2QQJRoY3YSjkCikDjJg7sdda9zIF9mrYLJnbjDNEbpTEpmfj4%2Bgp1ZRfnC%2FdnRpxXujfnyMJW5VUeAf6Hu%2BJ18RDuBJVAfgzn5vVEzIYnE0XN8Ato3E603%2FSvpzqHzzM2AfNiNfr2nZ024YiExJ5n83W8K%2BAuBveayzHboFeJUB1Gu2uZ1QNZV5AnKOfrsJqOyUMYKt5JtfkhP7Xl9OT8F0wV6YzlhHTw%2FlioPGcVz%2FM9y1L3QKPukL9KUo%2FmoYqcqmKycHak8kFEadFbNS2jDDt7%2FABjqkAckfRz4ngr9dnhHju%2BZE5dGObPcIik3Wm4ij%2BVBe3nSH2ygdAqYnwlFjVnYrLSpdkzdU01XBH4b01buEeU1lzKdzcgU2M2DNpclMi4MCgEVmDZ8Bufh0GP7cFjj%2BxkmjXMxdlqe9hp6L2AEo%2BwSH4j2iWRkmyw3PvnJE%2FcUIvvBnX%2BzKB2%2FEZDcB5M2TnMQNFM9MBl4mwG3puRCAfu04LvjuIKLn&X-Amz-Signature=039858e235203531b60788b0e9a37fc3832b13aeb1a62ec5f03cc3fd07cb3b26&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

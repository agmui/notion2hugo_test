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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQENXSHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUyo6OdQMfLjJSQi4CwqMQlyp6njXV697mBgJ%2FxmrfdAIhAJ3ImjNj4DAN0J2oi4i812JOzxynm7R3WtcfLGZDsNX3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMa0Vn87HXM56C%2F1Aq3AORlXTfW7Rkk50w%2F0epgHiEAp1eYSueMEFYQnA74HrbrHJnNwpTH0dR2mbPSwv6QBsbDvxr9Yq7s%2B%2FEblRDiMnmEsInMfwYZ5oQnOVRUCPXxxvYGZonFICe6rgJIlUARkzGe%2FYWWgZgueItBaiNgCYmRQNiBkLlPCEEKr3rMe6gCED1ajMrtkTCF8ytIrwqk8%2F3nb0IA%2FK75GiS3%2BBDNqzZfd59mCV1s0wRzZBipzwld9LKxafLAheBMGw9PyYEgpEP5qksg7JrMVcp1AHKfXuFtYq7YmboIHa5xWrNHEI%2FJFuery91wTIsM9Ve18tfDElseXK53MYbwcAec7C3X8v4ZUH9NOjQen2GhLhuDIPz4fWKPdlmV04zAChqhU%2FtohRgwtfw%2BCTQnev9165AOTQxS9lO5YrFYkFG%2FV9iY11oCdqp%2BGgh8UuNE%2BtflG4jAzscsp%2BeMd1Dsq8WHw%2F8p4w3K%2Fiy8ub8MT0OLIRLnYRlriWyhZNGyQDuPgLciF%2BpaMQOaEVRX9AQHvVlh%2FsOj6M05Ygr8yqdhFjTA5oUO17yvxS4FB8ZjGBWrVTISvMEuF9Wk05NIrW44R2ExS1p%2F0O4twzY8cKUCjMP58eQGfLjU2rHLpaV2V4vmWWAdDCBpMq%2BBjqkAb4qVcGXLrBl%2BMuviDJ%2FLCEjgkb5sXHvOrKZxuDCY06BMH4jXCIiHcJlpIyZsb4j5jDgpOJjyC%2BTHqHBFnBnLtm79QQgS9Dn4%2BrOf0tEyomNTeiEAxEyICVNZz%2F4ukqq4h0yjBB%2FmSekquevgzhcZFn1GZtoQZtK6ghXDWs9TeO%2BDSMN341YVeMUEQQBLRaC%2FMj%2BYMUl1DL1Vq5qutQIDYNFgnKa&X-Amz-Signature=337d86507a62f930bd68534c64344f3c71d973bf7ad599a3437663bd50d7e498&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQENXSHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUyo6OdQMfLjJSQi4CwqMQlyp6njXV697mBgJ%2FxmrfdAIhAJ3ImjNj4DAN0J2oi4i812JOzxynm7R3WtcfLGZDsNX3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMa0Vn87HXM56C%2F1Aq3AORlXTfW7Rkk50w%2F0epgHiEAp1eYSueMEFYQnA74HrbrHJnNwpTH0dR2mbPSwv6QBsbDvxr9Yq7s%2B%2FEblRDiMnmEsInMfwYZ5oQnOVRUCPXxxvYGZonFICe6rgJIlUARkzGe%2FYWWgZgueItBaiNgCYmRQNiBkLlPCEEKr3rMe6gCED1ajMrtkTCF8ytIrwqk8%2F3nb0IA%2FK75GiS3%2BBDNqzZfd59mCV1s0wRzZBipzwld9LKxafLAheBMGw9PyYEgpEP5qksg7JrMVcp1AHKfXuFtYq7YmboIHa5xWrNHEI%2FJFuery91wTIsM9Ve18tfDElseXK53MYbwcAec7C3X8v4ZUH9NOjQen2GhLhuDIPz4fWKPdlmV04zAChqhU%2FtohRgwtfw%2BCTQnev9165AOTQxS9lO5YrFYkFG%2FV9iY11oCdqp%2BGgh8UuNE%2BtflG4jAzscsp%2BeMd1Dsq8WHw%2F8p4w3K%2Fiy8ub8MT0OLIRLnYRlriWyhZNGyQDuPgLciF%2BpaMQOaEVRX9AQHvVlh%2FsOj6M05Ygr8yqdhFjTA5oUO17yvxS4FB8ZjGBWrVTISvMEuF9Wk05NIrW44R2ExS1p%2F0O4twzY8cKUCjMP58eQGfLjU2rHLpaV2V4vmWWAdDCBpMq%2BBjqkAb4qVcGXLrBl%2BMuviDJ%2FLCEjgkb5sXHvOrKZxuDCY06BMH4jXCIiHcJlpIyZsb4j5jDgpOJjyC%2BTHqHBFnBnLtm79QQgS9Dn4%2BrOf0tEyomNTeiEAxEyICVNZz%2F4ukqq4h0yjBB%2FmSekquevgzhcZFn1GZtoQZtK6ghXDWs9TeO%2BDSMN341YVeMUEQQBLRaC%2FMj%2BYMUl1DL1Vq5qutQIDYNFgnKa&X-Amz-Signature=b1695ec65ff5633711e5982a0db4130fc953399ad656993fe3d23e320d576e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQENXSHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUyo6OdQMfLjJSQi4CwqMQlyp6njXV697mBgJ%2FxmrfdAIhAJ3ImjNj4DAN0J2oi4i812JOzxynm7R3WtcfLGZDsNX3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMa0Vn87HXM56C%2F1Aq3AORlXTfW7Rkk50w%2F0epgHiEAp1eYSueMEFYQnA74HrbrHJnNwpTH0dR2mbPSwv6QBsbDvxr9Yq7s%2B%2FEblRDiMnmEsInMfwYZ5oQnOVRUCPXxxvYGZonFICe6rgJIlUARkzGe%2FYWWgZgueItBaiNgCYmRQNiBkLlPCEEKr3rMe6gCED1ajMrtkTCF8ytIrwqk8%2F3nb0IA%2FK75GiS3%2BBDNqzZfd59mCV1s0wRzZBipzwld9LKxafLAheBMGw9PyYEgpEP5qksg7JrMVcp1AHKfXuFtYq7YmboIHa5xWrNHEI%2FJFuery91wTIsM9Ve18tfDElseXK53MYbwcAec7C3X8v4ZUH9NOjQen2GhLhuDIPz4fWKPdlmV04zAChqhU%2FtohRgwtfw%2BCTQnev9165AOTQxS9lO5YrFYkFG%2FV9iY11oCdqp%2BGgh8UuNE%2BtflG4jAzscsp%2BeMd1Dsq8WHw%2F8p4w3K%2Fiy8ub8MT0OLIRLnYRlriWyhZNGyQDuPgLciF%2BpaMQOaEVRX9AQHvVlh%2FsOj6M05Ygr8yqdhFjTA5oUO17yvxS4FB8ZjGBWrVTISvMEuF9Wk05NIrW44R2ExS1p%2F0O4twzY8cKUCjMP58eQGfLjU2rHLpaV2V4vmWWAdDCBpMq%2BBjqkAb4qVcGXLrBl%2BMuviDJ%2FLCEjgkb5sXHvOrKZxuDCY06BMH4jXCIiHcJlpIyZsb4j5jDgpOJjyC%2BTHqHBFnBnLtm79QQgS9Dn4%2BrOf0tEyomNTeiEAxEyICVNZz%2F4ukqq4h0yjBB%2FmSekquevgzhcZFn1GZtoQZtK6ghXDWs9TeO%2BDSMN341YVeMUEQQBLRaC%2FMj%2BYMUl1DL1Vq5qutQIDYNFgnKa&X-Amz-Signature=b45e377b477815174bdc9e3373129fc57899f4117ac469a968b7151f9810ca75&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQENXSHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUyo6OdQMfLjJSQi4CwqMQlyp6njXV697mBgJ%2FxmrfdAIhAJ3ImjNj4DAN0J2oi4i812JOzxynm7R3WtcfLGZDsNX3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMa0Vn87HXM56C%2F1Aq3AORlXTfW7Rkk50w%2F0epgHiEAp1eYSueMEFYQnA74HrbrHJnNwpTH0dR2mbPSwv6QBsbDvxr9Yq7s%2B%2FEblRDiMnmEsInMfwYZ5oQnOVRUCPXxxvYGZonFICe6rgJIlUARkzGe%2FYWWgZgueItBaiNgCYmRQNiBkLlPCEEKr3rMe6gCED1ajMrtkTCF8ytIrwqk8%2F3nb0IA%2FK75GiS3%2BBDNqzZfd59mCV1s0wRzZBipzwld9LKxafLAheBMGw9PyYEgpEP5qksg7JrMVcp1AHKfXuFtYq7YmboIHa5xWrNHEI%2FJFuery91wTIsM9Ve18tfDElseXK53MYbwcAec7C3X8v4ZUH9NOjQen2GhLhuDIPz4fWKPdlmV04zAChqhU%2FtohRgwtfw%2BCTQnev9165AOTQxS9lO5YrFYkFG%2FV9iY11oCdqp%2BGgh8UuNE%2BtflG4jAzscsp%2BeMd1Dsq8WHw%2F8p4w3K%2Fiy8ub8MT0OLIRLnYRlriWyhZNGyQDuPgLciF%2BpaMQOaEVRX9AQHvVlh%2FsOj6M05Ygr8yqdhFjTA5oUO17yvxS4FB8ZjGBWrVTISvMEuF9Wk05NIrW44R2ExS1p%2F0O4twzY8cKUCjMP58eQGfLjU2rHLpaV2V4vmWWAdDCBpMq%2BBjqkAb4qVcGXLrBl%2BMuviDJ%2FLCEjgkb5sXHvOrKZxuDCY06BMH4jXCIiHcJlpIyZsb4j5jDgpOJjyC%2BTHqHBFnBnLtm79QQgS9Dn4%2BrOf0tEyomNTeiEAxEyICVNZz%2F4ukqq4h0yjBB%2FmSekquevgzhcZFn1GZtoQZtK6ghXDWs9TeO%2BDSMN341YVeMUEQQBLRaC%2FMj%2BYMUl1DL1Vq5qutQIDYNFgnKa&X-Amz-Signature=4f740412f2253a07fe4180ecdfde3c387163cee6be82d0afaad7fd9d5dcc1461&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQENXSHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUyo6OdQMfLjJSQi4CwqMQlyp6njXV697mBgJ%2FxmrfdAIhAJ3ImjNj4DAN0J2oi4i812JOzxynm7R3WtcfLGZDsNX3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMa0Vn87HXM56C%2F1Aq3AORlXTfW7Rkk50w%2F0epgHiEAp1eYSueMEFYQnA74HrbrHJnNwpTH0dR2mbPSwv6QBsbDvxr9Yq7s%2B%2FEblRDiMnmEsInMfwYZ5oQnOVRUCPXxxvYGZonFICe6rgJIlUARkzGe%2FYWWgZgueItBaiNgCYmRQNiBkLlPCEEKr3rMe6gCED1ajMrtkTCF8ytIrwqk8%2F3nb0IA%2FK75GiS3%2BBDNqzZfd59mCV1s0wRzZBipzwld9LKxafLAheBMGw9PyYEgpEP5qksg7JrMVcp1AHKfXuFtYq7YmboIHa5xWrNHEI%2FJFuery91wTIsM9Ve18tfDElseXK53MYbwcAec7C3X8v4ZUH9NOjQen2GhLhuDIPz4fWKPdlmV04zAChqhU%2FtohRgwtfw%2BCTQnev9165AOTQxS9lO5YrFYkFG%2FV9iY11oCdqp%2BGgh8UuNE%2BtflG4jAzscsp%2BeMd1Dsq8WHw%2F8p4w3K%2Fiy8ub8MT0OLIRLnYRlriWyhZNGyQDuPgLciF%2BpaMQOaEVRX9AQHvVlh%2FsOj6M05Ygr8yqdhFjTA5oUO17yvxS4FB8ZjGBWrVTISvMEuF9Wk05NIrW44R2ExS1p%2F0O4twzY8cKUCjMP58eQGfLjU2rHLpaV2V4vmWWAdDCBpMq%2BBjqkAb4qVcGXLrBl%2BMuviDJ%2FLCEjgkb5sXHvOrKZxuDCY06BMH4jXCIiHcJlpIyZsb4j5jDgpOJjyC%2BTHqHBFnBnLtm79QQgS9Dn4%2BrOf0tEyomNTeiEAxEyICVNZz%2F4ukqq4h0yjBB%2FmSekquevgzhcZFn1GZtoQZtK6ghXDWs9TeO%2BDSMN341YVeMUEQQBLRaC%2FMj%2BYMUl1DL1Vq5qutQIDYNFgnKa&X-Amz-Signature=9ed4eca78de5ba355820ac55bc2f19d1c9f74cd6dc002301dbee170429271f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQENXSHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUyo6OdQMfLjJSQi4CwqMQlyp6njXV697mBgJ%2FxmrfdAIhAJ3ImjNj4DAN0J2oi4i812JOzxynm7R3WtcfLGZDsNX3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMa0Vn87HXM56C%2F1Aq3AORlXTfW7Rkk50w%2F0epgHiEAp1eYSueMEFYQnA74HrbrHJnNwpTH0dR2mbPSwv6QBsbDvxr9Yq7s%2B%2FEblRDiMnmEsInMfwYZ5oQnOVRUCPXxxvYGZonFICe6rgJIlUARkzGe%2FYWWgZgueItBaiNgCYmRQNiBkLlPCEEKr3rMe6gCED1ajMrtkTCF8ytIrwqk8%2F3nb0IA%2FK75GiS3%2BBDNqzZfd59mCV1s0wRzZBipzwld9LKxafLAheBMGw9PyYEgpEP5qksg7JrMVcp1AHKfXuFtYq7YmboIHa5xWrNHEI%2FJFuery91wTIsM9Ve18tfDElseXK53MYbwcAec7C3X8v4ZUH9NOjQen2GhLhuDIPz4fWKPdlmV04zAChqhU%2FtohRgwtfw%2BCTQnev9165AOTQxS9lO5YrFYkFG%2FV9iY11oCdqp%2BGgh8UuNE%2BtflG4jAzscsp%2BeMd1Dsq8WHw%2F8p4w3K%2Fiy8ub8MT0OLIRLnYRlriWyhZNGyQDuPgLciF%2BpaMQOaEVRX9AQHvVlh%2FsOj6M05Ygr8yqdhFjTA5oUO17yvxS4FB8ZjGBWrVTISvMEuF9Wk05NIrW44R2ExS1p%2F0O4twzY8cKUCjMP58eQGfLjU2rHLpaV2V4vmWWAdDCBpMq%2BBjqkAb4qVcGXLrBl%2BMuviDJ%2FLCEjgkb5sXHvOrKZxuDCY06BMH4jXCIiHcJlpIyZsb4j5jDgpOJjyC%2BTHqHBFnBnLtm79QQgS9Dn4%2BrOf0tEyomNTeiEAxEyICVNZz%2F4ukqq4h0yjBB%2FmSekquevgzhcZFn1GZtoQZtK6ghXDWs9TeO%2BDSMN341YVeMUEQQBLRaC%2FMj%2BYMUl1DL1Vq5qutQIDYNFgnKa&X-Amz-Signature=5cba626c0ac860bdbc11bfd7ff8d49e5178061808f644ca102542b08ab107361&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQENXSHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUyo6OdQMfLjJSQi4CwqMQlyp6njXV697mBgJ%2FxmrfdAIhAJ3ImjNj4DAN0J2oi4i812JOzxynm7R3WtcfLGZDsNX3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMa0Vn87HXM56C%2F1Aq3AORlXTfW7Rkk50w%2F0epgHiEAp1eYSueMEFYQnA74HrbrHJnNwpTH0dR2mbPSwv6QBsbDvxr9Yq7s%2B%2FEblRDiMnmEsInMfwYZ5oQnOVRUCPXxxvYGZonFICe6rgJIlUARkzGe%2FYWWgZgueItBaiNgCYmRQNiBkLlPCEEKr3rMe6gCED1ajMrtkTCF8ytIrwqk8%2F3nb0IA%2FK75GiS3%2BBDNqzZfd59mCV1s0wRzZBipzwld9LKxafLAheBMGw9PyYEgpEP5qksg7JrMVcp1AHKfXuFtYq7YmboIHa5xWrNHEI%2FJFuery91wTIsM9Ve18tfDElseXK53MYbwcAec7C3X8v4ZUH9NOjQen2GhLhuDIPz4fWKPdlmV04zAChqhU%2FtohRgwtfw%2BCTQnev9165AOTQxS9lO5YrFYkFG%2FV9iY11oCdqp%2BGgh8UuNE%2BtflG4jAzscsp%2BeMd1Dsq8WHw%2F8p4w3K%2Fiy8ub8MT0OLIRLnYRlriWyhZNGyQDuPgLciF%2BpaMQOaEVRX9AQHvVlh%2FsOj6M05Ygr8yqdhFjTA5oUO17yvxS4FB8ZjGBWrVTISvMEuF9Wk05NIrW44R2ExS1p%2F0O4twzY8cKUCjMP58eQGfLjU2rHLpaV2V4vmWWAdDCBpMq%2BBjqkAb4qVcGXLrBl%2BMuviDJ%2FLCEjgkb5sXHvOrKZxuDCY06BMH4jXCIiHcJlpIyZsb4j5jDgpOJjyC%2BTHqHBFnBnLtm79QQgS9Dn4%2BrOf0tEyomNTeiEAxEyICVNZz%2F4ukqq4h0yjBB%2FmSekquevgzhcZFn1GZtoQZtK6ghXDWs9TeO%2BDSMN341YVeMUEQQBLRaC%2FMj%2BYMUl1DL1Vq5qutQIDYNFgnKa&X-Amz-Signature=763ebdfa82a8d0f35b9557b1a231c6eea01c99c6d260c16175f8eec6f7d9d4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

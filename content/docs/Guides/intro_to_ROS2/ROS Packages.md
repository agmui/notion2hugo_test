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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JA7JBX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh5p7IiF0aflOaIVZRm2hwsIOArChp8NlSaV8JjAdbLAiEA021oOgQxZnGw6gdzS%2B%2B%2BU7o3C7uNHQSi9NmB8KSmvFMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGsBaIyolGvkWwmFdircAxQEN1WcDso2qOhnnHTu9E7PKbaNsVxWfOMmoZvkLu5WnNNLjuJHcHoSOCamuFQvHs%2BJqUkEMLmkCf19%2FnxXUBqDO3Aayh8zIALMagvRYwUVYCXHaOdTLQOVknYE0KrdTP7iTZYz91JL%2BpBMPDc%2FzkWiulCC1qq80uD9mUgoS1ZRIg65UOcHj%2B%2B8av2QWpA6CKzQ2MG%2Bipu5t694dHktgV0MzJMJ1jmzkN2tKLNxVRYs7Ex84livRqDUh09NjdAcQRDVZvrAxcPGSDa9eSKQdb5FpV85hmYUGYnzw3VVucHrs%2ByI6Dq0j3YCXgk%2FXWqD3nfAQHnciO7r6IpfbsyVqmDFPq0rhAt3LR1WjReziXaJDuJw76VvmhCSVdxWF%2BfjaOloEjtzUvsk2y8JdO42n7duFDDjGGh2suS0Yw9sZZ6f9u6DcfYdKxpWN9vxLgqdGRex8FQkT3FsyGdoCcOgN36Fy7exRDRAFJ8QCaEeJ9GvgkaR61tb909EUUyahOHeB5BzFUZnm9YCPKJa3GP9g%2B61GFcQxq4%2Fs5BSn%2BFxs%2BNXUNnNQcLScVGIJPyPsDk%2FxyQXcg599uClCqJm2KlBLDiPoV1knlRbD3ATRMMOKqvuqKvF7TBiZ14Q5%2FJWMK2qnL8GOqUBfgXWDBkIweYNyrvanWR5s2PsG%2B0z66KWQ5eVtJ1nSro8w9hMUf7W8yjXTy7vFvVnCSL5iWtySUhy%2BFzvykw3CkfSFADpo9TSHOAiRzCRxtj4vwX6U7vp32PTsrkrHfS7tsmUAIurUPlyvb4X5jvnsHmlz9EnxRDiin4NvN5TX6E45YVmz1rIaZ0bHxrhQjtS58d02%2FnNTb0s6C%2BgrhibwUX0I10y&X-Amz-Signature=eb6716e49c5f4ad05583dc84c60d6886db7453bc3f14a9a33857ce76bd1a4253&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JA7JBX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh5p7IiF0aflOaIVZRm2hwsIOArChp8NlSaV8JjAdbLAiEA021oOgQxZnGw6gdzS%2B%2B%2BU7o3C7uNHQSi9NmB8KSmvFMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGsBaIyolGvkWwmFdircAxQEN1WcDso2qOhnnHTu9E7PKbaNsVxWfOMmoZvkLu5WnNNLjuJHcHoSOCamuFQvHs%2BJqUkEMLmkCf19%2FnxXUBqDO3Aayh8zIALMagvRYwUVYCXHaOdTLQOVknYE0KrdTP7iTZYz91JL%2BpBMPDc%2FzkWiulCC1qq80uD9mUgoS1ZRIg65UOcHj%2B%2B8av2QWpA6CKzQ2MG%2Bipu5t694dHktgV0MzJMJ1jmzkN2tKLNxVRYs7Ex84livRqDUh09NjdAcQRDVZvrAxcPGSDa9eSKQdb5FpV85hmYUGYnzw3VVucHrs%2ByI6Dq0j3YCXgk%2FXWqD3nfAQHnciO7r6IpfbsyVqmDFPq0rhAt3LR1WjReziXaJDuJw76VvmhCSVdxWF%2BfjaOloEjtzUvsk2y8JdO42n7duFDDjGGh2suS0Yw9sZZ6f9u6DcfYdKxpWN9vxLgqdGRex8FQkT3FsyGdoCcOgN36Fy7exRDRAFJ8QCaEeJ9GvgkaR61tb909EUUyahOHeB5BzFUZnm9YCPKJa3GP9g%2B61GFcQxq4%2Fs5BSn%2BFxs%2BNXUNnNQcLScVGIJPyPsDk%2FxyQXcg599uClCqJm2KlBLDiPoV1knlRbD3ATRMMOKqvuqKvF7TBiZ14Q5%2FJWMK2qnL8GOqUBfgXWDBkIweYNyrvanWR5s2PsG%2B0z66KWQ5eVtJ1nSro8w9hMUf7W8yjXTy7vFvVnCSL5iWtySUhy%2BFzvykw3CkfSFADpo9TSHOAiRzCRxtj4vwX6U7vp32PTsrkrHfS7tsmUAIurUPlyvb4X5jvnsHmlz9EnxRDiin4NvN5TX6E45YVmz1rIaZ0bHxrhQjtS58d02%2FnNTb0s6C%2BgrhibwUX0I10y&X-Amz-Signature=f4025465af5bdd6d618a6619289a834606d522a6cfacfb8a8b7671437e8c4a93&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JA7JBX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh5p7IiF0aflOaIVZRm2hwsIOArChp8NlSaV8JjAdbLAiEA021oOgQxZnGw6gdzS%2B%2B%2BU7o3C7uNHQSi9NmB8KSmvFMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGsBaIyolGvkWwmFdircAxQEN1WcDso2qOhnnHTu9E7PKbaNsVxWfOMmoZvkLu5WnNNLjuJHcHoSOCamuFQvHs%2BJqUkEMLmkCf19%2FnxXUBqDO3Aayh8zIALMagvRYwUVYCXHaOdTLQOVknYE0KrdTP7iTZYz91JL%2BpBMPDc%2FzkWiulCC1qq80uD9mUgoS1ZRIg65UOcHj%2B%2B8av2QWpA6CKzQ2MG%2Bipu5t694dHktgV0MzJMJ1jmzkN2tKLNxVRYs7Ex84livRqDUh09NjdAcQRDVZvrAxcPGSDa9eSKQdb5FpV85hmYUGYnzw3VVucHrs%2ByI6Dq0j3YCXgk%2FXWqD3nfAQHnciO7r6IpfbsyVqmDFPq0rhAt3LR1WjReziXaJDuJw76VvmhCSVdxWF%2BfjaOloEjtzUvsk2y8JdO42n7duFDDjGGh2suS0Yw9sZZ6f9u6DcfYdKxpWN9vxLgqdGRex8FQkT3FsyGdoCcOgN36Fy7exRDRAFJ8QCaEeJ9GvgkaR61tb909EUUyahOHeB5BzFUZnm9YCPKJa3GP9g%2B61GFcQxq4%2Fs5BSn%2BFxs%2BNXUNnNQcLScVGIJPyPsDk%2FxyQXcg599uClCqJm2KlBLDiPoV1knlRbD3ATRMMOKqvuqKvF7TBiZ14Q5%2FJWMK2qnL8GOqUBfgXWDBkIweYNyrvanWR5s2PsG%2B0z66KWQ5eVtJ1nSro8w9hMUf7W8yjXTy7vFvVnCSL5iWtySUhy%2BFzvykw3CkfSFADpo9TSHOAiRzCRxtj4vwX6U7vp32PTsrkrHfS7tsmUAIurUPlyvb4X5jvnsHmlz9EnxRDiin4NvN5TX6E45YVmz1rIaZ0bHxrhQjtS58d02%2FnNTb0s6C%2BgrhibwUX0I10y&X-Amz-Signature=cfc3f790a60caa447fc84fe3daef5fe76bacdd4124ce2b3b592593e8bed875a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JA7JBX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh5p7IiF0aflOaIVZRm2hwsIOArChp8NlSaV8JjAdbLAiEA021oOgQxZnGw6gdzS%2B%2B%2BU7o3C7uNHQSi9NmB8KSmvFMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGsBaIyolGvkWwmFdircAxQEN1WcDso2qOhnnHTu9E7PKbaNsVxWfOMmoZvkLu5WnNNLjuJHcHoSOCamuFQvHs%2BJqUkEMLmkCf19%2FnxXUBqDO3Aayh8zIALMagvRYwUVYCXHaOdTLQOVknYE0KrdTP7iTZYz91JL%2BpBMPDc%2FzkWiulCC1qq80uD9mUgoS1ZRIg65UOcHj%2B%2B8av2QWpA6CKzQ2MG%2Bipu5t694dHktgV0MzJMJ1jmzkN2tKLNxVRYs7Ex84livRqDUh09NjdAcQRDVZvrAxcPGSDa9eSKQdb5FpV85hmYUGYnzw3VVucHrs%2ByI6Dq0j3YCXgk%2FXWqD3nfAQHnciO7r6IpfbsyVqmDFPq0rhAt3LR1WjReziXaJDuJw76VvmhCSVdxWF%2BfjaOloEjtzUvsk2y8JdO42n7duFDDjGGh2suS0Yw9sZZ6f9u6DcfYdKxpWN9vxLgqdGRex8FQkT3FsyGdoCcOgN36Fy7exRDRAFJ8QCaEeJ9GvgkaR61tb909EUUyahOHeB5BzFUZnm9YCPKJa3GP9g%2B61GFcQxq4%2Fs5BSn%2BFxs%2BNXUNnNQcLScVGIJPyPsDk%2FxyQXcg599uClCqJm2KlBLDiPoV1knlRbD3ATRMMOKqvuqKvF7TBiZ14Q5%2FJWMK2qnL8GOqUBfgXWDBkIweYNyrvanWR5s2PsG%2B0z66KWQ5eVtJ1nSro8w9hMUf7W8yjXTy7vFvVnCSL5iWtySUhy%2BFzvykw3CkfSFADpo9TSHOAiRzCRxtj4vwX6U7vp32PTsrkrHfS7tsmUAIurUPlyvb4X5jvnsHmlz9EnxRDiin4NvN5TX6E45YVmz1rIaZ0bHxrhQjtS58d02%2FnNTb0s6C%2BgrhibwUX0I10y&X-Amz-Signature=842c389eb6b917d920c8bc8c10b304296f5af61652b98743a79cbef57bc494b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JA7JBX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh5p7IiF0aflOaIVZRm2hwsIOArChp8NlSaV8JjAdbLAiEA021oOgQxZnGw6gdzS%2B%2B%2BU7o3C7uNHQSi9NmB8KSmvFMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGsBaIyolGvkWwmFdircAxQEN1WcDso2qOhnnHTu9E7PKbaNsVxWfOMmoZvkLu5WnNNLjuJHcHoSOCamuFQvHs%2BJqUkEMLmkCf19%2FnxXUBqDO3Aayh8zIALMagvRYwUVYCXHaOdTLQOVknYE0KrdTP7iTZYz91JL%2BpBMPDc%2FzkWiulCC1qq80uD9mUgoS1ZRIg65UOcHj%2B%2B8av2QWpA6CKzQ2MG%2Bipu5t694dHktgV0MzJMJ1jmzkN2tKLNxVRYs7Ex84livRqDUh09NjdAcQRDVZvrAxcPGSDa9eSKQdb5FpV85hmYUGYnzw3VVucHrs%2ByI6Dq0j3YCXgk%2FXWqD3nfAQHnciO7r6IpfbsyVqmDFPq0rhAt3LR1WjReziXaJDuJw76VvmhCSVdxWF%2BfjaOloEjtzUvsk2y8JdO42n7duFDDjGGh2suS0Yw9sZZ6f9u6DcfYdKxpWN9vxLgqdGRex8FQkT3FsyGdoCcOgN36Fy7exRDRAFJ8QCaEeJ9GvgkaR61tb909EUUyahOHeB5BzFUZnm9YCPKJa3GP9g%2B61GFcQxq4%2Fs5BSn%2BFxs%2BNXUNnNQcLScVGIJPyPsDk%2FxyQXcg599uClCqJm2KlBLDiPoV1knlRbD3ATRMMOKqvuqKvF7TBiZ14Q5%2FJWMK2qnL8GOqUBfgXWDBkIweYNyrvanWR5s2PsG%2B0z66KWQ5eVtJ1nSro8w9hMUf7W8yjXTy7vFvVnCSL5iWtySUhy%2BFzvykw3CkfSFADpo9TSHOAiRzCRxtj4vwX6U7vp32PTsrkrHfS7tsmUAIurUPlyvb4X5jvnsHmlz9EnxRDiin4NvN5TX6E45YVmz1rIaZ0bHxrhQjtS58d02%2FnNTb0s6C%2BgrhibwUX0I10y&X-Amz-Signature=b254b2388c727d19c3d7d2f8ae6b8894a7bacaffb498cb014225fbbe5aa47369&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JA7JBX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh5p7IiF0aflOaIVZRm2hwsIOArChp8NlSaV8JjAdbLAiEA021oOgQxZnGw6gdzS%2B%2B%2BU7o3C7uNHQSi9NmB8KSmvFMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGsBaIyolGvkWwmFdircAxQEN1WcDso2qOhnnHTu9E7PKbaNsVxWfOMmoZvkLu5WnNNLjuJHcHoSOCamuFQvHs%2BJqUkEMLmkCf19%2FnxXUBqDO3Aayh8zIALMagvRYwUVYCXHaOdTLQOVknYE0KrdTP7iTZYz91JL%2BpBMPDc%2FzkWiulCC1qq80uD9mUgoS1ZRIg65UOcHj%2B%2B8av2QWpA6CKzQ2MG%2Bipu5t694dHktgV0MzJMJ1jmzkN2tKLNxVRYs7Ex84livRqDUh09NjdAcQRDVZvrAxcPGSDa9eSKQdb5FpV85hmYUGYnzw3VVucHrs%2ByI6Dq0j3YCXgk%2FXWqD3nfAQHnciO7r6IpfbsyVqmDFPq0rhAt3LR1WjReziXaJDuJw76VvmhCSVdxWF%2BfjaOloEjtzUvsk2y8JdO42n7duFDDjGGh2suS0Yw9sZZ6f9u6DcfYdKxpWN9vxLgqdGRex8FQkT3FsyGdoCcOgN36Fy7exRDRAFJ8QCaEeJ9GvgkaR61tb909EUUyahOHeB5BzFUZnm9YCPKJa3GP9g%2B61GFcQxq4%2Fs5BSn%2BFxs%2BNXUNnNQcLScVGIJPyPsDk%2FxyQXcg599uClCqJm2KlBLDiPoV1knlRbD3ATRMMOKqvuqKvF7TBiZ14Q5%2FJWMK2qnL8GOqUBfgXWDBkIweYNyrvanWR5s2PsG%2B0z66KWQ5eVtJ1nSro8w9hMUf7W8yjXTy7vFvVnCSL5iWtySUhy%2BFzvykw3CkfSFADpo9TSHOAiRzCRxtj4vwX6U7vp32PTsrkrHfS7tsmUAIurUPlyvb4X5jvnsHmlz9EnxRDiin4NvN5TX6E45YVmz1rIaZ0bHxrhQjtS58d02%2FnNTb0s6C%2BgrhibwUX0I10y&X-Amz-Signature=f1ee17b50824c39eaaa5da0e60430cdf10ea36e45147233a6690fa1ab4282260&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JA7JBX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh5p7IiF0aflOaIVZRm2hwsIOArChp8NlSaV8JjAdbLAiEA021oOgQxZnGw6gdzS%2B%2B%2BU7o3C7uNHQSi9NmB8KSmvFMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGsBaIyolGvkWwmFdircAxQEN1WcDso2qOhnnHTu9E7PKbaNsVxWfOMmoZvkLu5WnNNLjuJHcHoSOCamuFQvHs%2BJqUkEMLmkCf19%2FnxXUBqDO3Aayh8zIALMagvRYwUVYCXHaOdTLQOVknYE0KrdTP7iTZYz91JL%2BpBMPDc%2FzkWiulCC1qq80uD9mUgoS1ZRIg65UOcHj%2B%2B8av2QWpA6CKzQ2MG%2Bipu5t694dHktgV0MzJMJ1jmzkN2tKLNxVRYs7Ex84livRqDUh09NjdAcQRDVZvrAxcPGSDa9eSKQdb5FpV85hmYUGYnzw3VVucHrs%2ByI6Dq0j3YCXgk%2FXWqD3nfAQHnciO7r6IpfbsyVqmDFPq0rhAt3LR1WjReziXaJDuJw76VvmhCSVdxWF%2BfjaOloEjtzUvsk2y8JdO42n7duFDDjGGh2suS0Yw9sZZ6f9u6DcfYdKxpWN9vxLgqdGRex8FQkT3FsyGdoCcOgN36Fy7exRDRAFJ8QCaEeJ9GvgkaR61tb909EUUyahOHeB5BzFUZnm9YCPKJa3GP9g%2B61GFcQxq4%2Fs5BSn%2BFxs%2BNXUNnNQcLScVGIJPyPsDk%2FxyQXcg599uClCqJm2KlBLDiPoV1knlRbD3ATRMMOKqvuqKvF7TBiZ14Q5%2FJWMK2qnL8GOqUBfgXWDBkIweYNyrvanWR5s2PsG%2B0z66KWQ5eVtJ1nSro8w9hMUf7W8yjXTy7vFvVnCSL5iWtySUhy%2BFzvykw3CkfSFADpo9TSHOAiRzCRxtj4vwX6U7vp32PTsrkrHfS7tsmUAIurUPlyvb4X5jvnsHmlz9EnxRDiin4NvN5TX6E45YVmz1rIaZ0bHxrhQjtS58d02%2FnNTb0s6C%2BgrhibwUX0I10y&X-Amz-Signature=ec50dfd48a8e3a524cf24384d113fec74851892d841bbb5ea6e8a6cd76fcd057&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

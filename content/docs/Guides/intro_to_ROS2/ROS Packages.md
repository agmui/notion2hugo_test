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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSRFTJLU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCOlS3G90yFK52TZNl0nVI9Sfst8SFz3%2FuHHW4NPBSZBwIhAN3fV896xPIFqF3dono5FzbGNoxudvu%2B%2BKGAfHtzep%2BfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyIdlXyRFDH2%2BTa0q3AOcKOnvnA0xXL1QUABH3sce10q6Qj6xQf8rEyIIzAIovHajP7aE8%2FyZhBmhEkMHWV%2BOl5toGEX2g%2B7H3D2%2Fktbfm5XdEFu0NrRXru22OiUHGPyxXICuJepA%2BHWl%2B1CsXs55Y1PRqCHqvHB7t1bECaXJNgaWx6CK4LF6n7ST0c6rm6UZtsgNfAk6FAr2WlI9TGZnwzi7ceuIfODuJRZiqb4tnh%2BO8UY6WZI4iYRkd3myNQAYEyFfZ9Z95GEMo93OfrdZoJ0TbPHeJZJ1EFzjAngQDxAuErD431T54bDIKZ2bBNMqoU0MjcBo%2BD%2FikQKkjYTDHjzV80nTsYXt7B%2F4MgBmZWqlfzYgYTPx635yW6sK36MP6Tmul9HDgkeD4Yg1asuRxkSRkTOm7FSzLrJ7n8qhKdrIjFhv1VUKQlhjWxtzdKeLQU2RztTH3iWCrORNe8Wzh3J%2BVsrLYGeVpiCaeg9JeM5BtRD0RfjDyd6ScbLV9g4218yA%2BA4mn8QwdRMXQ9%2BxnsGADgTthpYke98CBj%2BsUsgFp06rtav9MotRBPL3Lhb2T3NrzFHiT%2B6ZXf9P66iY6ldFb66yb564Vwx8%2F0zBxnsZlLZOuDlXnKjVYx9Jn9SCsmyu%2F17XSHDceTDp892%2FBjqkAZan49AkAW3X9pkx7k6GG9ETQWf8sKL9MfTUZbAWbN9jBrXUsCjKAK0Lu%2BXYlwd2V3lmdMm2SCEy3AyFfqUb6o3JyxEC0G%2Fhhy2zX7Rj2%2FqOX4IHnJk%2BLChL5EDQn4wSchYUxuFOMKQnbonruSz%2BF2wCEvgvYIR87NSRF3HE1b1L1ZyiWBsPfrGjdZzFHigQwwGy%2BHylG9umVVq3LwJIr7r%2BU9iJ&X-Amz-Signature=6ae441f825a71ac43adefeb420b99f2a4476bc701a39556301362fcf08aaeb55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSRFTJLU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCOlS3G90yFK52TZNl0nVI9Sfst8SFz3%2FuHHW4NPBSZBwIhAN3fV896xPIFqF3dono5FzbGNoxudvu%2B%2BKGAfHtzep%2BfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyIdlXyRFDH2%2BTa0q3AOcKOnvnA0xXL1QUABH3sce10q6Qj6xQf8rEyIIzAIovHajP7aE8%2FyZhBmhEkMHWV%2BOl5toGEX2g%2B7H3D2%2Fktbfm5XdEFu0NrRXru22OiUHGPyxXICuJepA%2BHWl%2B1CsXs55Y1PRqCHqvHB7t1bECaXJNgaWx6CK4LF6n7ST0c6rm6UZtsgNfAk6FAr2WlI9TGZnwzi7ceuIfODuJRZiqb4tnh%2BO8UY6WZI4iYRkd3myNQAYEyFfZ9Z95GEMo93OfrdZoJ0TbPHeJZJ1EFzjAngQDxAuErD431T54bDIKZ2bBNMqoU0MjcBo%2BD%2FikQKkjYTDHjzV80nTsYXt7B%2F4MgBmZWqlfzYgYTPx635yW6sK36MP6Tmul9HDgkeD4Yg1asuRxkSRkTOm7FSzLrJ7n8qhKdrIjFhv1VUKQlhjWxtzdKeLQU2RztTH3iWCrORNe8Wzh3J%2BVsrLYGeVpiCaeg9JeM5BtRD0RfjDyd6ScbLV9g4218yA%2BA4mn8QwdRMXQ9%2BxnsGADgTthpYke98CBj%2BsUsgFp06rtav9MotRBPL3Lhb2T3NrzFHiT%2B6ZXf9P66iY6ldFb66yb564Vwx8%2F0zBxnsZlLZOuDlXnKjVYx9Jn9SCsmyu%2F17XSHDceTDp892%2FBjqkAZan49AkAW3X9pkx7k6GG9ETQWf8sKL9MfTUZbAWbN9jBrXUsCjKAK0Lu%2BXYlwd2V3lmdMm2SCEy3AyFfqUb6o3JyxEC0G%2Fhhy2zX7Rj2%2FqOX4IHnJk%2BLChL5EDQn4wSchYUxuFOMKQnbonruSz%2BF2wCEvgvYIR87NSRF3HE1b1L1ZyiWBsPfrGjdZzFHigQwwGy%2BHylG9umVVq3LwJIr7r%2BU9iJ&X-Amz-Signature=b77fc7b024a5c5d085fb8b3ecae1469dfaa058c33cd1534b3de925dfe8fa9a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSRFTJLU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCOlS3G90yFK52TZNl0nVI9Sfst8SFz3%2FuHHW4NPBSZBwIhAN3fV896xPIFqF3dono5FzbGNoxudvu%2B%2BKGAfHtzep%2BfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyIdlXyRFDH2%2BTa0q3AOcKOnvnA0xXL1QUABH3sce10q6Qj6xQf8rEyIIzAIovHajP7aE8%2FyZhBmhEkMHWV%2BOl5toGEX2g%2B7H3D2%2Fktbfm5XdEFu0NrRXru22OiUHGPyxXICuJepA%2BHWl%2B1CsXs55Y1PRqCHqvHB7t1bECaXJNgaWx6CK4LF6n7ST0c6rm6UZtsgNfAk6FAr2WlI9TGZnwzi7ceuIfODuJRZiqb4tnh%2BO8UY6WZI4iYRkd3myNQAYEyFfZ9Z95GEMo93OfrdZoJ0TbPHeJZJ1EFzjAngQDxAuErD431T54bDIKZ2bBNMqoU0MjcBo%2BD%2FikQKkjYTDHjzV80nTsYXt7B%2F4MgBmZWqlfzYgYTPx635yW6sK36MP6Tmul9HDgkeD4Yg1asuRxkSRkTOm7FSzLrJ7n8qhKdrIjFhv1VUKQlhjWxtzdKeLQU2RztTH3iWCrORNe8Wzh3J%2BVsrLYGeVpiCaeg9JeM5BtRD0RfjDyd6ScbLV9g4218yA%2BA4mn8QwdRMXQ9%2BxnsGADgTthpYke98CBj%2BsUsgFp06rtav9MotRBPL3Lhb2T3NrzFHiT%2B6ZXf9P66iY6ldFb66yb564Vwx8%2F0zBxnsZlLZOuDlXnKjVYx9Jn9SCsmyu%2F17XSHDceTDp892%2FBjqkAZan49AkAW3X9pkx7k6GG9ETQWf8sKL9MfTUZbAWbN9jBrXUsCjKAK0Lu%2BXYlwd2V3lmdMm2SCEy3AyFfqUb6o3JyxEC0G%2Fhhy2zX7Rj2%2FqOX4IHnJk%2BLChL5EDQn4wSchYUxuFOMKQnbonruSz%2BF2wCEvgvYIR87NSRF3HE1b1L1ZyiWBsPfrGjdZzFHigQwwGy%2BHylG9umVVq3LwJIr7r%2BU9iJ&X-Amz-Signature=9707067b640b9235371d9ab11e7a1d082223de07d3896bdbf94e0d20a2566c39&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSRFTJLU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCOlS3G90yFK52TZNl0nVI9Sfst8SFz3%2FuHHW4NPBSZBwIhAN3fV896xPIFqF3dono5FzbGNoxudvu%2B%2BKGAfHtzep%2BfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyIdlXyRFDH2%2BTa0q3AOcKOnvnA0xXL1QUABH3sce10q6Qj6xQf8rEyIIzAIovHajP7aE8%2FyZhBmhEkMHWV%2BOl5toGEX2g%2B7H3D2%2Fktbfm5XdEFu0NrRXru22OiUHGPyxXICuJepA%2BHWl%2B1CsXs55Y1PRqCHqvHB7t1bECaXJNgaWx6CK4LF6n7ST0c6rm6UZtsgNfAk6FAr2WlI9TGZnwzi7ceuIfODuJRZiqb4tnh%2BO8UY6WZI4iYRkd3myNQAYEyFfZ9Z95GEMo93OfrdZoJ0TbPHeJZJ1EFzjAngQDxAuErD431T54bDIKZ2bBNMqoU0MjcBo%2BD%2FikQKkjYTDHjzV80nTsYXt7B%2F4MgBmZWqlfzYgYTPx635yW6sK36MP6Tmul9HDgkeD4Yg1asuRxkSRkTOm7FSzLrJ7n8qhKdrIjFhv1VUKQlhjWxtzdKeLQU2RztTH3iWCrORNe8Wzh3J%2BVsrLYGeVpiCaeg9JeM5BtRD0RfjDyd6ScbLV9g4218yA%2BA4mn8QwdRMXQ9%2BxnsGADgTthpYke98CBj%2BsUsgFp06rtav9MotRBPL3Lhb2T3NrzFHiT%2B6ZXf9P66iY6ldFb66yb564Vwx8%2F0zBxnsZlLZOuDlXnKjVYx9Jn9SCsmyu%2F17XSHDceTDp892%2FBjqkAZan49AkAW3X9pkx7k6GG9ETQWf8sKL9MfTUZbAWbN9jBrXUsCjKAK0Lu%2BXYlwd2V3lmdMm2SCEy3AyFfqUb6o3JyxEC0G%2Fhhy2zX7Rj2%2FqOX4IHnJk%2BLChL5EDQn4wSchYUxuFOMKQnbonruSz%2BF2wCEvgvYIR87NSRF3HE1b1L1ZyiWBsPfrGjdZzFHigQwwGy%2BHylG9umVVq3LwJIr7r%2BU9iJ&X-Amz-Signature=c7b1923ac1c48c5599032e7f75f0a569bc6c92b8babaf94da0c40b97d5f1d01c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSRFTJLU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCOlS3G90yFK52TZNl0nVI9Sfst8SFz3%2FuHHW4NPBSZBwIhAN3fV896xPIFqF3dono5FzbGNoxudvu%2B%2BKGAfHtzep%2BfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyIdlXyRFDH2%2BTa0q3AOcKOnvnA0xXL1QUABH3sce10q6Qj6xQf8rEyIIzAIovHajP7aE8%2FyZhBmhEkMHWV%2BOl5toGEX2g%2B7H3D2%2Fktbfm5XdEFu0NrRXru22OiUHGPyxXICuJepA%2BHWl%2B1CsXs55Y1PRqCHqvHB7t1bECaXJNgaWx6CK4LF6n7ST0c6rm6UZtsgNfAk6FAr2WlI9TGZnwzi7ceuIfODuJRZiqb4tnh%2BO8UY6WZI4iYRkd3myNQAYEyFfZ9Z95GEMo93OfrdZoJ0TbPHeJZJ1EFzjAngQDxAuErD431T54bDIKZ2bBNMqoU0MjcBo%2BD%2FikQKkjYTDHjzV80nTsYXt7B%2F4MgBmZWqlfzYgYTPx635yW6sK36MP6Tmul9HDgkeD4Yg1asuRxkSRkTOm7FSzLrJ7n8qhKdrIjFhv1VUKQlhjWxtzdKeLQU2RztTH3iWCrORNe8Wzh3J%2BVsrLYGeVpiCaeg9JeM5BtRD0RfjDyd6ScbLV9g4218yA%2BA4mn8QwdRMXQ9%2BxnsGADgTthpYke98CBj%2BsUsgFp06rtav9MotRBPL3Lhb2T3NrzFHiT%2B6ZXf9P66iY6ldFb66yb564Vwx8%2F0zBxnsZlLZOuDlXnKjVYx9Jn9SCsmyu%2F17XSHDceTDp892%2FBjqkAZan49AkAW3X9pkx7k6GG9ETQWf8sKL9MfTUZbAWbN9jBrXUsCjKAK0Lu%2BXYlwd2V3lmdMm2SCEy3AyFfqUb6o3JyxEC0G%2Fhhy2zX7Rj2%2FqOX4IHnJk%2BLChL5EDQn4wSchYUxuFOMKQnbonruSz%2BF2wCEvgvYIR87NSRF3HE1b1L1ZyiWBsPfrGjdZzFHigQwwGy%2BHylG9umVVq3LwJIr7r%2BU9iJ&X-Amz-Signature=d3abc4b20cf49e502e713d1767036113a5df9e1d416baa8df9a27ffaccff9af6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSRFTJLU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCOlS3G90yFK52TZNl0nVI9Sfst8SFz3%2FuHHW4NPBSZBwIhAN3fV896xPIFqF3dono5FzbGNoxudvu%2B%2BKGAfHtzep%2BfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyIdlXyRFDH2%2BTa0q3AOcKOnvnA0xXL1QUABH3sce10q6Qj6xQf8rEyIIzAIovHajP7aE8%2FyZhBmhEkMHWV%2BOl5toGEX2g%2B7H3D2%2Fktbfm5XdEFu0NrRXru22OiUHGPyxXICuJepA%2BHWl%2B1CsXs55Y1PRqCHqvHB7t1bECaXJNgaWx6CK4LF6n7ST0c6rm6UZtsgNfAk6FAr2WlI9TGZnwzi7ceuIfODuJRZiqb4tnh%2BO8UY6WZI4iYRkd3myNQAYEyFfZ9Z95GEMo93OfrdZoJ0TbPHeJZJ1EFzjAngQDxAuErD431T54bDIKZ2bBNMqoU0MjcBo%2BD%2FikQKkjYTDHjzV80nTsYXt7B%2F4MgBmZWqlfzYgYTPx635yW6sK36MP6Tmul9HDgkeD4Yg1asuRxkSRkTOm7FSzLrJ7n8qhKdrIjFhv1VUKQlhjWxtzdKeLQU2RztTH3iWCrORNe8Wzh3J%2BVsrLYGeVpiCaeg9JeM5BtRD0RfjDyd6ScbLV9g4218yA%2BA4mn8QwdRMXQ9%2BxnsGADgTthpYke98CBj%2BsUsgFp06rtav9MotRBPL3Lhb2T3NrzFHiT%2B6ZXf9P66iY6ldFb66yb564Vwx8%2F0zBxnsZlLZOuDlXnKjVYx9Jn9SCsmyu%2F17XSHDceTDp892%2FBjqkAZan49AkAW3X9pkx7k6GG9ETQWf8sKL9MfTUZbAWbN9jBrXUsCjKAK0Lu%2BXYlwd2V3lmdMm2SCEy3AyFfqUb6o3JyxEC0G%2Fhhy2zX7Rj2%2FqOX4IHnJk%2BLChL5EDQn4wSchYUxuFOMKQnbonruSz%2BF2wCEvgvYIR87NSRF3HE1b1L1ZyiWBsPfrGjdZzFHigQwwGy%2BHylG9umVVq3LwJIr7r%2BU9iJ&X-Amz-Signature=3968fe7feaa289bc3f76450aabeebc74489c372af6b025a202e3485ee052999a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSRFTJLU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCOlS3G90yFK52TZNl0nVI9Sfst8SFz3%2FuHHW4NPBSZBwIhAN3fV896xPIFqF3dono5FzbGNoxudvu%2B%2BKGAfHtzep%2BfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyIdlXyRFDH2%2BTa0q3AOcKOnvnA0xXL1QUABH3sce10q6Qj6xQf8rEyIIzAIovHajP7aE8%2FyZhBmhEkMHWV%2BOl5toGEX2g%2B7H3D2%2Fktbfm5XdEFu0NrRXru22OiUHGPyxXICuJepA%2BHWl%2B1CsXs55Y1PRqCHqvHB7t1bECaXJNgaWx6CK4LF6n7ST0c6rm6UZtsgNfAk6FAr2WlI9TGZnwzi7ceuIfODuJRZiqb4tnh%2BO8UY6WZI4iYRkd3myNQAYEyFfZ9Z95GEMo93OfrdZoJ0TbPHeJZJ1EFzjAngQDxAuErD431T54bDIKZ2bBNMqoU0MjcBo%2BD%2FikQKkjYTDHjzV80nTsYXt7B%2F4MgBmZWqlfzYgYTPx635yW6sK36MP6Tmul9HDgkeD4Yg1asuRxkSRkTOm7FSzLrJ7n8qhKdrIjFhv1VUKQlhjWxtzdKeLQU2RztTH3iWCrORNe8Wzh3J%2BVsrLYGeVpiCaeg9JeM5BtRD0RfjDyd6ScbLV9g4218yA%2BA4mn8QwdRMXQ9%2BxnsGADgTthpYke98CBj%2BsUsgFp06rtav9MotRBPL3Lhb2T3NrzFHiT%2B6ZXf9P66iY6ldFb66yb564Vwx8%2F0zBxnsZlLZOuDlXnKjVYx9Jn9SCsmyu%2F17XSHDceTDp892%2FBjqkAZan49AkAW3X9pkx7k6GG9ETQWf8sKL9MfTUZbAWbN9jBrXUsCjKAK0Lu%2BXYlwd2V3lmdMm2SCEy3AyFfqUb6o3JyxEC0G%2Fhhy2zX7Rj2%2FqOX4IHnJk%2BLChL5EDQn4wSchYUxuFOMKQnbonruSz%2BF2wCEvgvYIR87NSRF3HE1b1L1ZyiWBsPfrGjdZzFHigQwwGy%2BHylG9umVVq3LwJIr7r%2BU9iJ&X-Amz-Signature=d93347eb61a11d0b84ffb91b316ad6e51bf1d80155c81e9f99b7677d3e751d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

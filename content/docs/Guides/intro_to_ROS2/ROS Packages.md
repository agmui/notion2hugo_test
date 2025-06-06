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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KC6RID%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDT8uJzc3GoMgHBAkWOp3L6yaCuaSLJkxvzCODonvs%2B3QIhAL%2BRVT3wrhKYKRMRjWkB4McRdDq%2B8KPEos2Py8rvODgPKv8DCFcQABoMNjM3NDIzMTgzODA1IgxebjzNkseOqdwuQ8Eq3AOLtAUiCBWxQZukJg6r4I5mesqHCwgxqdF5y73ylWXWNmcdU9n8nqnET7WLi%2BGoPZjtRR7%2FhbGWRg0IlOj8iECfQnEgU%2FBHm5UVdtmzJ%2BKsMH1f39OTBifjof9vOEUmxCZHc0HxrGjU%2BFM3kE1h%2BRbBTVFJVVU2YiJNLHFdvW4Ld0pDX3hPXzpCm5lWI%2FPLQLlt0VesrKMD5HjV0jKk7BK%2FMtpiu9sy0aQyjYJ4HzsXReP2t0MdYH1JbfRmeObwrb9AePtjld6taQieTjglNQUySOB0%2BSqK6Wgo%2Fh23CKBZniaIg2xGu7w3wAAq2ggsTAdGXS9liB7fi7IhfJWTCxj42Pbn9%2FstUTQZfb11H4%2BsypffFXJ3netrQ6mI16yaEImCxM%2BjqClXdvVy5Jkqz9KR7zNX3N2ZyYZU%2BWkFIxvcjhrtsthTxL%2F5YR3GJcjCMylm%2FMRPfkgIvAqvmIf3UuTkVTzUcGCZjl0wdDsU7afMCTDgQeSlHo%2B0XxXqdFySvcqeS8KIApzGEEJ01LY1p4Jv75huxF82smcIMX%2FtWygLd4%2Fh5Mx3POUn4ZudJBvlwv4J6UgMrC3zU23zRbYuYi9NgRV%2FcJxuXLTvetlVCqY%2FrGoMultJfcUfxSg4TTDokYrCBjqkAfK0H%2FBJ9QLRH0qXW53JoP6%2FpzaY2yezAB6PA%2BVmQtA6SzeWZ7x4PtSmpgF3U5MQRJbk%2BXSidiV8sJPaytX8Z3P92ZQauYI2CZ5hIrQdr3tRCy14TwPqEUUrZWS6aElkcl3P2DljGUwKYeDZWovrRwSbZ3XsJd3cwJsmXmwM%2BXagzB%2FG7yS7siQUmFJ%2BFE%2FOJuc0LUIZg9hyq1C93anBjHPBaH2G&X-Amz-Signature=a7b9669db2ed39e15bb848764f41f51a524a7cfda0c27843ececa2cd008c5da7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KC6RID%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDT8uJzc3GoMgHBAkWOp3L6yaCuaSLJkxvzCODonvs%2B3QIhAL%2BRVT3wrhKYKRMRjWkB4McRdDq%2B8KPEos2Py8rvODgPKv8DCFcQABoMNjM3NDIzMTgzODA1IgxebjzNkseOqdwuQ8Eq3AOLtAUiCBWxQZukJg6r4I5mesqHCwgxqdF5y73ylWXWNmcdU9n8nqnET7WLi%2BGoPZjtRR7%2FhbGWRg0IlOj8iECfQnEgU%2FBHm5UVdtmzJ%2BKsMH1f39OTBifjof9vOEUmxCZHc0HxrGjU%2BFM3kE1h%2BRbBTVFJVVU2YiJNLHFdvW4Ld0pDX3hPXzpCm5lWI%2FPLQLlt0VesrKMD5HjV0jKk7BK%2FMtpiu9sy0aQyjYJ4HzsXReP2t0MdYH1JbfRmeObwrb9AePtjld6taQieTjglNQUySOB0%2BSqK6Wgo%2Fh23CKBZniaIg2xGu7w3wAAq2ggsTAdGXS9liB7fi7IhfJWTCxj42Pbn9%2FstUTQZfb11H4%2BsypffFXJ3netrQ6mI16yaEImCxM%2BjqClXdvVy5Jkqz9KR7zNX3N2ZyYZU%2BWkFIxvcjhrtsthTxL%2F5YR3GJcjCMylm%2FMRPfkgIvAqvmIf3UuTkVTzUcGCZjl0wdDsU7afMCTDgQeSlHo%2B0XxXqdFySvcqeS8KIApzGEEJ01LY1p4Jv75huxF82smcIMX%2FtWygLd4%2Fh5Mx3POUn4ZudJBvlwv4J6UgMrC3zU23zRbYuYi9NgRV%2FcJxuXLTvetlVCqY%2FrGoMultJfcUfxSg4TTDokYrCBjqkAfK0H%2FBJ9QLRH0qXW53JoP6%2FpzaY2yezAB6PA%2BVmQtA6SzeWZ7x4PtSmpgF3U5MQRJbk%2BXSidiV8sJPaytX8Z3P92ZQauYI2CZ5hIrQdr3tRCy14TwPqEUUrZWS6aElkcl3P2DljGUwKYeDZWovrRwSbZ3XsJd3cwJsmXmwM%2BXagzB%2FG7yS7siQUmFJ%2BFE%2FOJuc0LUIZg9hyq1C93anBjHPBaH2G&X-Amz-Signature=7356b78b0591f247fe2717ba8a95aefb6f29409c177969be5ddd4801621f32dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KC6RID%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDT8uJzc3GoMgHBAkWOp3L6yaCuaSLJkxvzCODonvs%2B3QIhAL%2BRVT3wrhKYKRMRjWkB4McRdDq%2B8KPEos2Py8rvODgPKv8DCFcQABoMNjM3NDIzMTgzODA1IgxebjzNkseOqdwuQ8Eq3AOLtAUiCBWxQZukJg6r4I5mesqHCwgxqdF5y73ylWXWNmcdU9n8nqnET7WLi%2BGoPZjtRR7%2FhbGWRg0IlOj8iECfQnEgU%2FBHm5UVdtmzJ%2BKsMH1f39OTBifjof9vOEUmxCZHc0HxrGjU%2BFM3kE1h%2BRbBTVFJVVU2YiJNLHFdvW4Ld0pDX3hPXzpCm5lWI%2FPLQLlt0VesrKMD5HjV0jKk7BK%2FMtpiu9sy0aQyjYJ4HzsXReP2t0MdYH1JbfRmeObwrb9AePtjld6taQieTjglNQUySOB0%2BSqK6Wgo%2Fh23CKBZniaIg2xGu7w3wAAq2ggsTAdGXS9liB7fi7IhfJWTCxj42Pbn9%2FstUTQZfb11H4%2BsypffFXJ3netrQ6mI16yaEImCxM%2BjqClXdvVy5Jkqz9KR7zNX3N2ZyYZU%2BWkFIxvcjhrtsthTxL%2F5YR3GJcjCMylm%2FMRPfkgIvAqvmIf3UuTkVTzUcGCZjl0wdDsU7afMCTDgQeSlHo%2B0XxXqdFySvcqeS8KIApzGEEJ01LY1p4Jv75huxF82smcIMX%2FtWygLd4%2Fh5Mx3POUn4ZudJBvlwv4J6UgMrC3zU23zRbYuYi9NgRV%2FcJxuXLTvetlVCqY%2FrGoMultJfcUfxSg4TTDokYrCBjqkAfK0H%2FBJ9QLRH0qXW53JoP6%2FpzaY2yezAB6PA%2BVmQtA6SzeWZ7x4PtSmpgF3U5MQRJbk%2BXSidiV8sJPaytX8Z3P92ZQauYI2CZ5hIrQdr3tRCy14TwPqEUUrZWS6aElkcl3P2DljGUwKYeDZWovrRwSbZ3XsJd3cwJsmXmwM%2BXagzB%2FG7yS7siQUmFJ%2BFE%2FOJuc0LUIZg9hyq1C93anBjHPBaH2G&X-Amz-Signature=e6999f472d693482de3fe985dcbdb37305eb7dc4824ffa119ca2dabf788e61a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KC6RID%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDT8uJzc3GoMgHBAkWOp3L6yaCuaSLJkxvzCODonvs%2B3QIhAL%2BRVT3wrhKYKRMRjWkB4McRdDq%2B8KPEos2Py8rvODgPKv8DCFcQABoMNjM3NDIzMTgzODA1IgxebjzNkseOqdwuQ8Eq3AOLtAUiCBWxQZukJg6r4I5mesqHCwgxqdF5y73ylWXWNmcdU9n8nqnET7WLi%2BGoPZjtRR7%2FhbGWRg0IlOj8iECfQnEgU%2FBHm5UVdtmzJ%2BKsMH1f39OTBifjof9vOEUmxCZHc0HxrGjU%2BFM3kE1h%2BRbBTVFJVVU2YiJNLHFdvW4Ld0pDX3hPXzpCm5lWI%2FPLQLlt0VesrKMD5HjV0jKk7BK%2FMtpiu9sy0aQyjYJ4HzsXReP2t0MdYH1JbfRmeObwrb9AePtjld6taQieTjglNQUySOB0%2BSqK6Wgo%2Fh23CKBZniaIg2xGu7w3wAAq2ggsTAdGXS9liB7fi7IhfJWTCxj42Pbn9%2FstUTQZfb11H4%2BsypffFXJ3netrQ6mI16yaEImCxM%2BjqClXdvVy5Jkqz9KR7zNX3N2ZyYZU%2BWkFIxvcjhrtsthTxL%2F5YR3GJcjCMylm%2FMRPfkgIvAqvmIf3UuTkVTzUcGCZjl0wdDsU7afMCTDgQeSlHo%2B0XxXqdFySvcqeS8KIApzGEEJ01LY1p4Jv75huxF82smcIMX%2FtWygLd4%2Fh5Mx3POUn4ZudJBvlwv4J6UgMrC3zU23zRbYuYi9NgRV%2FcJxuXLTvetlVCqY%2FrGoMultJfcUfxSg4TTDokYrCBjqkAfK0H%2FBJ9QLRH0qXW53JoP6%2FpzaY2yezAB6PA%2BVmQtA6SzeWZ7x4PtSmpgF3U5MQRJbk%2BXSidiV8sJPaytX8Z3P92ZQauYI2CZ5hIrQdr3tRCy14TwPqEUUrZWS6aElkcl3P2DljGUwKYeDZWovrRwSbZ3XsJd3cwJsmXmwM%2BXagzB%2FG7yS7siQUmFJ%2BFE%2FOJuc0LUIZg9hyq1C93anBjHPBaH2G&X-Amz-Signature=aa1cb638ea2e02a7ad2c2750a5b11b38dc401b9c55f8ba585b2201687ca93f07&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KC6RID%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDT8uJzc3GoMgHBAkWOp3L6yaCuaSLJkxvzCODonvs%2B3QIhAL%2BRVT3wrhKYKRMRjWkB4McRdDq%2B8KPEos2Py8rvODgPKv8DCFcQABoMNjM3NDIzMTgzODA1IgxebjzNkseOqdwuQ8Eq3AOLtAUiCBWxQZukJg6r4I5mesqHCwgxqdF5y73ylWXWNmcdU9n8nqnET7WLi%2BGoPZjtRR7%2FhbGWRg0IlOj8iECfQnEgU%2FBHm5UVdtmzJ%2BKsMH1f39OTBifjof9vOEUmxCZHc0HxrGjU%2BFM3kE1h%2BRbBTVFJVVU2YiJNLHFdvW4Ld0pDX3hPXzpCm5lWI%2FPLQLlt0VesrKMD5HjV0jKk7BK%2FMtpiu9sy0aQyjYJ4HzsXReP2t0MdYH1JbfRmeObwrb9AePtjld6taQieTjglNQUySOB0%2BSqK6Wgo%2Fh23CKBZniaIg2xGu7w3wAAq2ggsTAdGXS9liB7fi7IhfJWTCxj42Pbn9%2FstUTQZfb11H4%2BsypffFXJ3netrQ6mI16yaEImCxM%2BjqClXdvVy5Jkqz9KR7zNX3N2ZyYZU%2BWkFIxvcjhrtsthTxL%2F5YR3GJcjCMylm%2FMRPfkgIvAqvmIf3UuTkVTzUcGCZjl0wdDsU7afMCTDgQeSlHo%2B0XxXqdFySvcqeS8KIApzGEEJ01LY1p4Jv75huxF82smcIMX%2FtWygLd4%2Fh5Mx3POUn4ZudJBvlwv4J6UgMrC3zU23zRbYuYi9NgRV%2FcJxuXLTvetlVCqY%2FrGoMultJfcUfxSg4TTDokYrCBjqkAfK0H%2FBJ9QLRH0qXW53JoP6%2FpzaY2yezAB6PA%2BVmQtA6SzeWZ7x4PtSmpgF3U5MQRJbk%2BXSidiV8sJPaytX8Z3P92ZQauYI2CZ5hIrQdr3tRCy14TwPqEUUrZWS6aElkcl3P2DljGUwKYeDZWovrRwSbZ3XsJd3cwJsmXmwM%2BXagzB%2FG7yS7siQUmFJ%2BFE%2FOJuc0LUIZg9hyq1C93anBjHPBaH2G&X-Amz-Signature=786b59ddd97befcec3b9489eac7bcd68ae35742a67193df6266b2fa9def4822f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KC6RID%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDT8uJzc3GoMgHBAkWOp3L6yaCuaSLJkxvzCODonvs%2B3QIhAL%2BRVT3wrhKYKRMRjWkB4McRdDq%2B8KPEos2Py8rvODgPKv8DCFcQABoMNjM3NDIzMTgzODA1IgxebjzNkseOqdwuQ8Eq3AOLtAUiCBWxQZukJg6r4I5mesqHCwgxqdF5y73ylWXWNmcdU9n8nqnET7WLi%2BGoPZjtRR7%2FhbGWRg0IlOj8iECfQnEgU%2FBHm5UVdtmzJ%2BKsMH1f39OTBifjof9vOEUmxCZHc0HxrGjU%2BFM3kE1h%2BRbBTVFJVVU2YiJNLHFdvW4Ld0pDX3hPXzpCm5lWI%2FPLQLlt0VesrKMD5HjV0jKk7BK%2FMtpiu9sy0aQyjYJ4HzsXReP2t0MdYH1JbfRmeObwrb9AePtjld6taQieTjglNQUySOB0%2BSqK6Wgo%2Fh23CKBZniaIg2xGu7w3wAAq2ggsTAdGXS9liB7fi7IhfJWTCxj42Pbn9%2FstUTQZfb11H4%2BsypffFXJ3netrQ6mI16yaEImCxM%2BjqClXdvVy5Jkqz9KR7zNX3N2ZyYZU%2BWkFIxvcjhrtsthTxL%2F5YR3GJcjCMylm%2FMRPfkgIvAqvmIf3UuTkVTzUcGCZjl0wdDsU7afMCTDgQeSlHo%2B0XxXqdFySvcqeS8KIApzGEEJ01LY1p4Jv75huxF82smcIMX%2FtWygLd4%2Fh5Mx3POUn4ZudJBvlwv4J6UgMrC3zU23zRbYuYi9NgRV%2FcJxuXLTvetlVCqY%2FrGoMultJfcUfxSg4TTDokYrCBjqkAfK0H%2FBJ9QLRH0qXW53JoP6%2FpzaY2yezAB6PA%2BVmQtA6SzeWZ7x4PtSmpgF3U5MQRJbk%2BXSidiV8sJPaytX8Z3P92ZQauYI2CZ5hIrQdr3tRCy14TwPqEUUrZWS6aElkcl3P2DljGUwKYeDZWovrRwSbZ3XsJd3cwJsmXmwM%2BXagzB%2FG7yS7siQUmFJ%2BFE%2FOJuc0LUIZg9hyq1C93anBjHPBaH2G&X-Amz-Signature=45628a4d3589c18e4a1ad39a636dbda8feab2ff95d77289c70070f6c5caadb3e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KC6RID%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDT8uJzc3GoMgHBAkWOp3L6yaCuaSLJkxvzCODonvs%2B3QIhAL%2BRVT3wrhKYKRMRjWkB4McRdDq%2B8KPEos2Py8rvODgPKv8DCFcQABoMNjM3NDIzMTgzODA1IgxebjzNkseOqdwuQ8Eq3AOLtAUiCBWxQZukJg6r4I5mesqHCwgxqdF5y73ylWXWNmcdU9n8nqnET7WLi%2BGoPZjtRR7%2FhbGWRg0IlOj8iECfQnEgU%2FBHm5UVdtmzJ%2BKsMH1f39OTBifjof9vOEUmxCZHc0HxrGjU%2BFM3kE1h%2BRbBTVFJVVU2YiJNLHFdvW4Ld0pDX3hPXzpCm5lWI%2FPLQLlt0VesrKMD5HjV0jKk7BK%2FMtpiu9sy0aQyjYJ4HzsXReP2t0MdYH1JbfRmeObwrb9AePtjld6taQieTjglNQUySOB0%2BSqK6Wgo%2Fh23CKBZniaIg2xGu7w3wAAq2ggsTAdGXS9liB7fi7IhfJWTCxj42Pbn9%2FstUTQZfb11H4%2BsypffFXJ3netrQ6mI16yaEImCxM%2BjqClXdvVy5Jkqz9KR7zNX3N2ZyYZU%2BWkFIxvcjhrtsthTxL%2F5YR3GJcjCMylm%2FMRPfkgIvAqvmIf3UuTkVTzUcGCZjl0wdDsU7afMCTDgQeSlHo%2B0XxXqdFySvcqeS8KIApzGEEJ01LY1p4Jv75huxF82smcIMX%2FtWygLd4%2Fh5Mx3POUn4ZudJBvlwv4J6UgMrC3zU23zRbYuYi9NgRV%2FcJxuXLTvetlVCqY%2FrGoMultJfcUfxSg4TTDokYrCBjqkAfK0H%2FBJ9QLRH0qXW53JoP6%2FpzaY2yezAB6PA%2BVmQtA6SzeWZ7x4PtSmpgF3U5MQRJbk%2BXSidiV8sJPaytX8Z3P92ZQauYI2CZ5hIrQdr3tRCy14TwPqEUUrZWS6aElkcl3P2DljGUwKYeDZWovrRwSbZ3XsJd3cwJsmXmwM%2BXagzB%2FG7yS7siQUmFJ%2BFE%2FOJuc0LUIZg9hyq1C93anBjHPBaH2G&X-Amz-Signature=c827fe3bf3fe528cd2492d08bbba9272c81a73431e30bffbf8974d82d72400ad&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

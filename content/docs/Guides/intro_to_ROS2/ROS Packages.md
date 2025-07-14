---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWIIZED%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDhygjPLonmKflP7l3OZmDvOV8hgO%2BI1bP6Mb1UWF%2B32wIhAKJyi4uRdC%2BaQQbyUs%2BkhyEd4MrmMrkaJwVxMtOYiKrxKv8DCC4QABoMNjM3NDIzMTgzODA1IgwPlsoJMF9YnqLh1e8q3AO6gYqrp9snMEOM7txP7%2Bc2pTwysP81ml%2FCQA6PWRDkE%2B%2Bc4wxLqsMDsSDjk22g6VnhUH0lw94%2Fhtf1aFJxc5l5h8Z2HjSTWmkmcEu7TVNPvU4Q5YsSD8UucczBNctuzleoUzgqFLOG57hYeDWdk65NLZP7%2Bi62j6xD6D8WrL7uEcfezROanRSlMWktVlc1Q3BfXywLNOcrdub1ChEQGk2MERgVOZYdxbbUtZlFm6Tvy7nKBW30jWxSLKmsLGESO8dDnLYj2sSgRTLOjpCjORnUVcPMI6ESeF1iJib2Yn%2Bg8uouQt7W4DVrBFmY9%2Fu1wJq6d4XopvyydBYOl1RUyaCUlfu%2B8sGhXnDU9h7KGICnfi0ZDPO666%2B6TGMjhcJ9QjXr8ibWJcy4xNBpmeW4rkdWA572UuBsPgtaGQ3KGt%2FtO3mxCNCKww29nuZIi%2FTJcyQSkziyl3osNVvXA22k41QiGufScms4dXJYig%2F3k%2BrX7jg5yhwNmcWZiiwvi6gEE7WorR8x60qaMkK1V0V0z5H8qU%2BAhy%2Fh09gDbtskknl%2FADlFBjCAgA7mz4QPsnL4L7LBjfS2uikN4cBGRMZJqx85iUslKLQT%2Fy%2Bv9%2BvXD9HeGoq4tXR4WOf%2FcKU4xjC%2BhdTDBjqkAUUy5rPuutiidUM5oWd5z%2BKZmXyN%2BsZAJDSAQhrEjEeXgkVyUGgTzpt1leB1LtB3Eab9sZz3Fu%2B%2BUGi9EmUyrnYmmdkOEnK4PjLNz3rXDDECGmJy4OpSYgA6%2Fjfg4RF9lWkOXSRmuV89gVXrHUAoHjUuUlf9OSial6o06CMOjh3H41S7T35LqzIw9x2HchJJ0dkVxDS5sTJzPhQN%2Fmw%2FhAYtZkoR&X-Amz-Signature=140499917374fe27b7600aad48230fd2c41ee776a1a0f4338405bc2309cd827c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWIIZED%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDhygjPLonmKflP7l3OZmDvOV8hgO%2BI1bP6Mb1UWF%2B32wIhAKJyi4uRdC%2BaQQbyUs%2BkhyEd4MrmMrkaJwVxMtOYiKrxKv8DCC4QABoMNjM3NDIzMTgzODA1IgwPlsoJMF9YnqLh1e8q3AO6gYqrp9snMEOM7txP7%2Bc2pTwysP81ml%2FCQA6PWRDkE%2B%2Bc4wxLqsMDsSDjk22g6VnhUH0lw94%2Fhtf1aFJxc5l5h8Z2HjSTWmkmcEu7TVNPvU4Q5YsSD8UucczBNctuzleoUzgqFLOG57hYeDWdk65NLZP7%2Bi62j6xD6D8WrL7uEcfezROanRSlMWktVlc1Q3BfXywLNOcrdub1ChEQGk2MERgVOZYdxbbUtZlFm6Tvy7nKBW30jWxSLKmsLGESO8dDnLYj2sSgRTLOjpCjORnUVcPMI6ESeF1iJib2Yn%2Bg8uouQt7W4DVrBFmY9%2Fu1wJq6d4XopvyydBYOl1RUyaCUlfu%2B8sGhXnDU9h7KGICnfi0ZDPO666%2B6TGMjhcJ9QjXr8ibWJcy4xNBpmeW4rkdWA572UuBsPgtaGQ3KGt%2FtO3mxCNCKww29nuZIi%2FTJcyQSkziyl3osNVvXA22k41QiGufScms4dXJYig%2F3k%2BrX7jg5yhwNmcWZiiwvi6gEE7WorR8x60qaMkK1V0V0z5H8qU%2BAhy%2Fh09gDbtskknl%2FADlFBjCAgA7mz4QPsnL4L7LBjfS2uikN4cBGRMZJqx85iUslKLQT%2Fy%2Bv9%2BvXD9HeGoq4tXR4WOf%2FcKU4xjC%2BhdTDBjqkAUUy5rPuutiidUM5oWd5z%2BKZmXyN%2BsZAJDSAQhrEjEeXgkVyUGgTzpt1leB1LtB3Eab9sZz3Fu%2B%2BUGi9EmUyrnYmmdkOEnK4PjLNz3rXDDECGmJy4OpSYgA6%2Fjfg4RF9lWkOXSRmuV89gVXrHUAoHjUuUlf9OSial6o06CMOjh3H41S7T35LqzIw9x2HchJJ0dkVxDS5sTJzPhQN%2Fmw%2FhAYtZkoR&X-Amz-Signature=7a0ca86fb97d06157d5353644d5eb570a980c655138348c48f62da108e5a3b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWIIZED%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDhygjPLonmKflP7l3OZmDvOV8hgO%2BI1bP6Mb1UWF%2B32wIhAKJyi4uRdC%2BaQQbyUs%2BkhyEd4MrmMrkaJwVxMtOYiKrxKv8DCC4QABoMNjM3NDIzMTgzODA1IgwPlsoJMF9YnqLh1e8q3AO6gYqrp9snMEOM7txP7%2Bc2pTwysP81ml%2FCQA6PWRDkE%2B%2Bc4wxLqsMDsSDjk22g6VnhUH0lw94%2Fhtf1aFJxc5l5h8Z2HjSTWmkmcEu7TVNPvU4Q5YsSD8UucczBNctuzleoUzgqFLOG57hYeDWdk65NLZP7%2Bi62j6xD6D8WrL7uEcfezROanRSlMWktVlc1Q3BfXywLNOcrdub1ChEQGk2MERgVOZYdxbbUtZlFm6Tvy7nKBW30jWxSLKmsLGESO8dDnLYj2sSgRTLOjpCjORnUVcPMI6ESeF1iJib2Yn%2Bg8uouQt7W4DVrBFmY9%2Fu1wJq6d4XopvyydBYOl1RUyaCUlfu%2B8sGhXnDU9h7KGICnfi0ZDPO666%2B6TGMjhcJ9QjXr8ibWJcy4xNBpmeW4rkdWA572UuBsPgtaGQ3KGt%2FtO3mxCNCKww29nuZIi%2FTJcyQSkziyl3osNVvXA22k41QiGufScms4dXJYig%2F3k%2BrX7jg5yhwNmcWZiiwvi6gEE7WorR8x60qaMkK1V0V0z5H8qU%2BAhy%2Fh09gDbtskknl%2FADlFBjCAgA7mz4QPsnL4L7LBjfS2uikN4cBGRMZJqx85iUslKLQT%2Fy%2Bv9%2BvXD9HeGoq4tXR4WOf%2FcKU4xjC%2BhdTDBjqkAUUy5rPuutiidUM5oWd5z%2BKZmXyN%2BsZAJDSAQhrEjEeXgkVyUGgTzpt1leB1LtB3Eab9sZz3Fu%2B%2BUGi9EmUyrnYmmdkOEnK4PjLNz3rXDDECGmJy4OpSYgA6%2Fjfg4RF9lWkOXSRmuV89gVXrHUAoHjUuUlf9OSial6o06CMOjh3H41S7T35LqzIw9x2HchJJ0dkVxDS5sTJzPhQN%2Fmw%2FhAYtZkoR&X-Amz-Signature=744b09bade990239bc324b6a72241588852a33bf10d75e4dee30d3984b23e727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWIIZED%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDhygjPLonmKflP7l3OZmDvOV8hgO%2BI1bP6Mb1UWF%2B32wIhAKJyi4uRdC%2BaQQbyUs%2BkhyEd4MrmMrkaJwVxMtOYiKrxKv8DCC4QABoMNjM3NDIzMTgzODA1IgwPlsoJMF9YnqLh1e8q3AO6gYqrp9snMEOM7txP7%2Bc2pTwysP81ml%2FCQA6PWRDkE%2B%2Bc4wxLqsMDsSDjk22g6VnhUH0lw94%2Fhtf1aFJxc5l5h8Z2HjSTWmkmcEu7TVNPvU4Q5YsSD8UucczBNctuzleoUzgqFLOG57hYeDWdk65NLZP7%2Bi62j6xD6D8WrL7uEcfezROanRSlMWktVlc1Q3BfXywLNOcrdub1ChEQGk2MERgVOZYdxbbUtZlFm6Tvy7nKBW30jWxSLKmsLGESO8dDnLYj2sSgRTLOjpCjORnUVcPMI6ESeF1iJib2Yn%2Bg8uouQt7W4DVrBFmY9%2Fu1wJq6d4XopvyydBYOl1RUyaCUlfu%2B8sGhXnDU9h7KGICnfi0ZDPO666%2B6TGMjhcJ9QjXr8ibWJcy4xNBpmeW4rkdWA572UuBsPgtaGQ3KGt%2FtO3mxCNCKww29nuZIi%2FTJcyQSkziyl3osNVvXA22k41QiGufScms4dXJYig%2F3k%2BrX7jg5yhwNmcWZiiwvi6gEE7WorR8x60qaMkK1V0V0z5H8qU%2BAhy%2Fh09gDbtskknl%2FADlFBjCAgA7mz4QPsnL4L7LBjfS2uikN4cBGRMZJqx85iUslKLQT%2Fy%2Bv9%2BvXD9HeGoq4tXR4WOf%2FcKU4xjC%2BhdTDBjqkAUUy5rPuutiidUM5oWd5z%2BKZmXyN%2BsZAJDSAQhrEjEeXgkVyUGgTzpt1leB1LtB3Eab9sZz3Fu%2B%2BUGi9EmUyrnYmmdkOEnK4PjLNz3rXDDECGmJy4OpSYgA6%2Fjfg4RF9lWkOXSRmuV89gVXrHUAoHjUuUlf9OSial6o06CMOjh3H41S7T35LqzIw9x2HchJJ0dkVxDS5sTJzPhQN%2Fmw%2FhAYtZkoR&X-Amz-Signature=6a7eba809b56afb75fc3313a5699fb5d1c01d3eb2ddc2760174fb49eb705799a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWIIZED%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDhygjPLonmKflP7l3OZmDvOV8hgO%2BI1bP6Mb1UWF%2B32wIhAKJyi4uRdC%2BaQQbyUs%2BkhyEd4MrmMrkaJwVxMtOYiKrxKv8DCC4QABoMNjM3NDIzMTgzODA1IgwPlsoJMF9YnqLh1e8q3AO6gYqrp9snMEOM7txP7%2Bc2pTwysP81ml%2FCQA6PWRDkE%2B%2Bc4wxLqsMDsSDjk22g6VnhUH0lw94%2Fhtf1aFJxc5l5h8Z2HjSTWmkmcEu7TVNPvU4Q5YsSD8UucczBNctuzleoUzgqFLOG57hYeDWdk65NLZP7%2Bi62j6xD6D8WrL7uEcfezROanRSlMWktVlc1Q3BfXywLNOcrdub1ChEQGk2MERgVOZYdxbbUtZlFm6Tvy7nKBW30jWxSLKmsLGESO8dDnLYj2sSgRTLOjpCjORnUVcPMI6ESeF1iJib2Yn%2Bg8uouQt7W4DVrBFmY9%2Fu1wJq6d4XopvyydBYOl1RUyaCUlfu%2B8sGhXnDU9h7KGICnfi0ZDPO666%2B6TGMjhcJ9QjXr8ibWJcy4xNBpmeW4rkdWA572UuBsPgtaGQ3KGt%2FtO3mxCNCKww29nuZIi%2FTJcyQSkziyl3osNVvXA22k41QiGufScms4dXJYig%2F3k%2BrX7jg5yhwNmcWZiiwvi6gEE7WorR8x60qaMkK1V0V0z5H8qU%2BAhy%2Fh09gDbtskknl%2FADlFBjCAgA7mz4QPsnL4L7LBjfS2uikN4cBGRMZJqx85iUslKLQT%2Fy%2Bv9%2BvXD9HeGoq4tXR4WOf%2FcKU4xjC%2BhdTDBjqkAUUy5rPuutiidUM5oWd5z%2BKZmXyN%2BsZAJDSAQhrEjEeXgkVyUGgTzpt1leB1LtB3Eab9sZz3Fu%2B%2BUGi9EmUyrnYmmdkOEnK4PjLNz3rXDDECGmJy4OpSYgA6%2Fjfg4RF9lWkOXSRmuV89gVXrHUAoHjUuUlf9OSial6o06CMOjh3H41S7T35LqzIw9x2HchJJ0dkVxDS5sTJzPhQN%2Fmw%2FhAYtZkoR&X-Amz-Signature=98b40451cd3005cd4c033b767f92a0420002326b314075607a05af5609a73a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWIIZED%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDhygjPLonmKflP7l3OZmDvOV8hgO%2BI1bP6Mb1UWF%2B32wIhAKJyi4uRdC%2BaQQbyUs%2BkhyEd4MrmMrkaJwVxMtOYiKrxKv8DCC4QABoMNjM3NDIzMTgzODA1IgwPlsoJMF9YnqLh1e8q3AO6gYqrp9snMEOM7txP7%2Bc2pTwysP81ml%2FCQA6PWRDkE%2B%2Bc4wxLqsMDsSDjk22g6VnhUH0lw94%2Fhtf1aFJxc5l5h8Z2HjSTWmkmcEu7TVNPvU4Q5YsSD8UucczBNctuzleoUzgqFLOG57hYeDWdk65NLZP7%2Bi62j6xD6D8WrL7uEcfezROanRSlMWktVlc1Q3BfXywLNOcrdub1ChEQGk2MERgVOZYdxbbUtZlFm6Tvy7nKBW30jWxSLKmsLGESO8dDnLYj2sSgRTLOjpCjORnUVcPMI6ESeF1iJib2Yn%2Bg8uouQt7W4DVrBFmY9%2Fu1wJq6d4XopvyydBYOl1RUyaCUlfu%2B8sGhXnDU9h7KGICnfi0ZDPO666%2B6TGMjhcJ9QjXr8ibWJcy4xNBpmeW4rkdWA572UuBsPgtaGQ3KGt%2FtO3mxCNCKww29nuZIi%2FTJcyQSkziyl3osNVvXA22k41QiGufScms4dXJYig%2F3k%2BrX7jg5yhwNmcWZiiwvi6gEE7WorR8x60qaMkK1V0V0z5H8qU%2BAhy%2Fh09gDbtskknl%2FADlFBjCAgA7mz4QPsnL4L7LBjfS2uikN4cBGRMZJqx85iUslKLQT%2Fy%2Bv9%2BvXD9HeGoq4tXR4WOf%2FcKU4xjC%2BhdTDBjqkAUUy5rPuutiidUM5oWd5z%2BKZmXyN%2BsZAJDSAQhrEjEeXgkVyUGgTzpt1leB1LtB3Eab9sZz3Fu%2B%2BUGi9EmUyrnYmmdkOEnK4PjLNz3rXDDECGmJy4OpSYgA6%2Fjfg4RF9lWkOXSRmuV89gVXrHUAoHjUuUlf9OSial6o06CMOjh3H41S7T35LqzIw9x2HchJJ0dkVxDS5sTJzPhQN%2Fmw%2FhAYtZkoR&X-Amz-Signature=8c494e7d98ae4bd35d96f8fc5d3bd936dff13cdd00dccc500c176d4d7ec17daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWIIZED%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDhygjPLonmKflP7l3OZmDvOV8hgO%2BI1bP6Mb1UWF%2B32wIhAKJyi4uRdC%2BaQQbyUs%2BkhyEd4MrmMrkaJwVxMtOYiKrxKv8DCC4QABoMNjM3NDIzMTgzODA1IgwPlsoJMF9YnqLh1e8q3AO6gYqrp9snMEOM7txP7%2Bc2pTwysP81ml%2FCQA6PWRDkE%2B%2Bc4wxLqsMDsSDjk22g6VnhUH0lw94%2Fhtf1aFJxc5l5h8Z2HjSTWmkmcEu7TVNPvU4Q5YsSD8UucczBNctuzleoUzgqFLOG57hYeDWdk65NLZP7%2Bi62j6xD6D8WrL7uEcfezROanRSlMWktVlc1Q3BfXywLNOcrdub1ChEQGk2MERgVOZYdxbbUtZlFm6Tvy7nKBW30jWxSLKmsLGESO8dDnLYj2sSgRTLOjpCjORnUVcPMI6ESeF1iJib2Yn%2Bg8uouQt7W4DVrBFmY9%2Fu1wJq6d4XopvyydBYOl1RUyaCUlfu%2B8sGhXnDU9h7KGICnfi0ZDPO666%2B6TGMjhcJ9QjXr8ibWJcy4xNBpmeW4rkdWA572UuBsPgtaGQ3KGt%2FtO3mxCNCKww29nuZIi%2FTJcyQSkziyl3osNVvXA22k41QiGufScms4dXJYig%2F3k%2BrX7jg5yhwNmcWZiiwvi6gEE7WorR8x60qaMkK1V0V0z5H8qU%2BAhy%2Fh09gDbtskknl%2FADlFBjCAgA7mz4QPsnL4L7LBjfS2uikN4cBGRMZJqx85iUslKLQT%2Fy%2Bv9%2BvXD9HeGoq4tXR4WOf%2FcKU4xjC%2BhdTDBjqkAUUy5rPuutiidUM5oWd5z%2BKZmXyN%2BsZAJDSAQhrEjEeXgkVyUGgTzpt1leB1LtB3Eab9sZz3Fu%2B%2BUGi9EmUyrnYmmdkOEnK4PjLNz3rXDDECGmJy4OpSYgA6%2Fjfg4RF9lWkOXSRmuV89gVXrHUAoHjUuUlf9OSial6o06CMOjh3H41S7T35LqzIw9x2HchJJ0dkVxDS5sTJzPhQN%2Fmw%2FhAYtZkoR&X-Amz-Signature=9bd1f82db3e0fc412bed35c0f10acee0b5ac3b4e9cfc3223c774c4f3cb144157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

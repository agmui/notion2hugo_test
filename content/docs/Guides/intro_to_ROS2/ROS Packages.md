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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3WTPGN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfPf1NVdmeZ4OiQwgJ2Cn8nYCnxR9BjZ7MemR0ffb8AIhAPDKu%2B5f6DEQlR9j9vY7%2FiO%2FX5Kmu1VUUTqc8IRYPrNAKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPaqRKYznZDmoqlqMq3AMKZbELIhkGlDGkE1QV4GSw7P0MtkcUGpZ8OVFBGKFC0qVB3Q9iekDYqwk9gMnVquH%2BLatMcOHW8Bh%2BVW9%2BAq4J6wiXdWjKUF9NLKgrnjQEBeOOmNJQLT3SiEI4nyvgR3YuNSQk04QXoV1Re8pwxtDJZ7sv50DD2r%2Fr5KcktObQj70aIxdmdqgl3kydjypbww1abPDxWV6Lmh6u1vLoSg29NFIyykJRWzOEznuNM8Q9u8QSIn3WKC887Pt20Dwm2RLDF0OyZf2nIV9yF%2Fo1xM9jfhMZqRnWO0Z6AHVwHtvfTMB6monIUPtycdTcra3CuZn8VuHcV94YpsPocK1kqfHFo4L6N7MLIF0myT8ZAWTGmXpFZX7gdv7b2FVvrl8ao8L9PzmNK67zHnGNyjPHa7Y1nc3BtoIjSXDLP9v%2FJE0kNbxpKdRiKxB739hjPGkJfknWaYIFDIxaIR2LDcA7w5XbQqlkGr5685I%2F2%2B2oQlcW%2BoJMs6vcxLivTCAPo7PH8bpcHaKZoIGTQI7WSxay5nVx%2F9xGl2%2BR84ECuO4mMVBEj39odfFtCgxwrvPwR7ngUA9FsIa5I34lkzlpdt1x5Tdk63G7GZIkNqNpOLTmo0zqALR9R5iNiz03lBNqETCvxbrDBjqkASZiP79KfixPj1PRWcFCxTo%2F9ph2mq7irpYbaj6rSyexXwp9f8iyx3uHCBmuvwBmcOpOn871Lx9%2Fv%2Bz%2FmTAkCT3cI1FJqZlhscwKY%2FCgAtODHxKqIDhN%2BH2XJBFVC7cMJqBBO%2FlepuOwpWHPMmQtinIyuJhjnqrDKCGwYPkTYtztaDCe0Le3ZlGYfK%2FZubSauukLdFgfCtfyX5ItrRkewS93Nl%2Bc&X-Amz-Signature=7b2982881a1e853ba43d0f21b4871371b0017c0f5075dc89c3cd89c291972dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3WTPGN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfPf1NVdmeZ4OiQwgJ2Cn8nYCnxR9BjZ7MemR0ffb8AIhAPDKu%2B5f6DEQlR9j9vY7%2FiO%2FX5Kmu1VUUTqc8IRYPrNAKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPaqRKYznZDmoqlqMq3AMKZbELIhkGlDGkE1QV4GSw7P0MtkcUGpZ8OVFBGKFC0qVB3Q9iekDYqwk9gMnVquH%2BLatMcOHW8Bh%2BVW9%2BAq4J6wiXdWjKUF9NLKgrnjQEBeOOmNJQLT3SiEI4nyvgR3YuNSQk04QXoV1Re8pwxtDJZ7sv50DD2r%2Fr5KcktObQj70aIxdmdqgl3kydjypbww1abPDxWV6Lmh6u1vLoSg29NFIyykJRWzOEznuNM8Q9u8QSIn3WKC887Pt20Dwm2RLDF0OyZf2nIV9yF%2Fo1xM9jfhMZqRnWO0Z6AHVwHtvfTMB6monIUPtycdTcra3CuZn8VuHcV94YpsPocK1kqfHFo4L6N7MLIF0myT8ZAWTGmXpFZX7gdv7b2FVvrl8ao8L9PzmNK67zHnGNyjPHa7Y1nc3BtoIjSXDLP9v%2FJE0kNbxpKdRiKxB739hjPGkJfknWaYIFDIxaIR2LDcA7w5XbQqlkGr5685I%2F2%2B2oQlcW%2BoJMs6vcxLivTCAPo7PH8bpcHaKZoIGTQI7WSxay5nVx%2F9xGl2%2BR84ECuO4mMVBEj39odfFtCgxwrvPwR7ngUA9FsIa5I34lkzlpdt1x5Tdk63G7GZIkNqNpOLTmo0zqALR9R5iNiz03lBNqETCvxbrDBjqkASZiP79KfixPj1PRWcFCxTo%2F9ph2mq7irpYbaj6rSyexXwp9f8iyx3uHCBmuvwBmcOpOn871Lx9%2Fv%2Bz%2FmTAkCT3cI1FJqZlhscwKY%2FCgAtODHxKqIDhN%2BH2XJBFVC7cMJqBBO%2FlepuOwpWHPMmQtinIyuJhjnqrDKCGwYPkTYtztaDCe0Le3ZlGYfK%2FZubSauukLdFgfCtfyX5ItrRkewS93Nl%2Bc&X-Amz-Signature=15423a0792a87d91f395b77e9a02227ba16d0e09be88d6a7f4125b552120ff3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3WTPGN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfPf1NVdmeZ4OiQwgJ2Cn8nYCnxR9BjZ7MemR0ffb8AIhAPDKu%2B5f6DEQlR9j9vY7%2FiO%2FX5Kmu1VUUTqc8IRYPrNAKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPaqRKYznZDmoqlqMq3AMKZbELIhkGlDGkE1QV4GSw7P0MtkcUGpZ8OVFBGKFC0qVB3Q9iekDYqwk9gMnVquH%2BLatMcOHW8Bh%2BVW9%2BAq4J6wiXdWjKUF9NLKgrnjQEBeOOmNJQLT3SiEI4nyvgR3YuNSQk04QXoV1Re8pwxtDJZ7sv50DD2r%2Fr5KcktObQj70aIxdmdqgl3kydjypbww1abPDxWV6Lmh6u1vLoSg29NFIyykJRWzOEznuNM8Q9u8QSIn3WKC887Pt20Dwm2RLDF0OyZf2nIV9yF%2Fo1xM9jfhMZqRnWO0Z6AHVwHtvfTMB6monIUPtycdTcra3CuZn8VuHcV94YpsPocK1kqfHFo4L6N7MLIF0myT8ZAWTGmXpFZX7gdv7b2FVvrl8ao8L9PzmNK67zHnGNyjPHa7Y1nc3BtoIjSXDLP9v%2FJE0kNbxpKdRiKxB739hjPGkJfknWaYIFDIxaIR2LDcA7w5XbQqlkGr5685I%2F2%2B2oQlcW%2BoJMs6vcxLivTCAPo7PH8bpcHaKZoIGTQI7WSxay5nVx%2F9xGl2%2BR84ECuO4mMVBEj39odfFtCgxwrvPwR7ngUA9FsIa5I34lkzlpdt1x5Tdk63G7GZIkNqNpOLTmo0zqALR9R5iNiz03lBNqETCvxbrDBjqkASZiP79KfixPj1PRWcFCxTo%2F9ph2mq7irpYbaj6rSyexXwp9f8iyx3uHCBmuvwBmcOpOn871Lx9%2Fv%2Bz%2FmTAkCT3cI1FJqZlhscwKY%2FCgAtODHxKqIDhN%2BH2XJBFVC7cMJqBBO%2FlepuOwpWHPMmQtinIyuJhjnqrDKCGwYPkTYtztaDCe0Le3ZlGYfK%2FZubSauukLdFgfCtfyX5ItrRkewS93Nl%2Bc&X-Amz-Signature=eae52ed0494c06a60d4b336a22d16ad00ebf17fdb0c7e4ee3aad840cd2166455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3WTPGN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfPf1NVdmeZ4OiQwgJ2Cn8nYCnxR9BjZ7MemR0ffb8AIhAPDKu%2B5f6DEQlR9j9vY7%2FiO%2FX5Kmu1VUUTqc8IRYPrNAKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPaqRKYznZDmoqlqMq3AMKZbELIhkGlDGkE1QV4GSw7P0MtkcUGpZ8OVFBGKFC0qVB3Q9iekDYqwk9gMnVquH%2BLatMcOHW8Bh%2BVW9%2BAq4J6wiXdWjKUF9NLKgrnjQEBeOOmNJQLT3SiEI4nyvgR3YuNSQk04QXoV1Re8pwxtDJZ7sv50DD2r%2Fr5KcktObQj70aIxdmdqgl3kydjypbww1abPDxWV6Lmh6u1vLoSg29NFIyykJRWzOEznuNM8Q9u8QSIn3WKC887Pt20Dwm2RLDF0OyZf2nIV9yF%2Fo1xM9jfhMZqRnWO0Z6AHVwHtvfTMB6monIUPtycdTcra3CuZn8VuHcV94YpsPocK1kqfHFo4L6N7MLIF0myT8ZAWTGmXpFZX7gdv7b2FVvrl8ao8L9PzmNK67zHnGNyjPHa7Y1nc3BtoIjSXDLP9v%2FJE0kNbxpKdRiKxB739hjPGkJfknWaYIFDIxaIR2LDcA7w5XbQqlkGr5685I%2F2%2B2oQlcW%2BoJMs6vcxLivTCAPo7PH8bpcHaKZoIGTQI7WSxay5nVx%2F9xGl2%2BR84ECuO4mMVBEj39odfFtCgxwrvPwR7ngUA9FsIa5I34lkzlpdt1x5Tdk63G7GZIkNqNpOLTmo0zqALR9R5iNiz03lBNqETCvxbrDBjqkASZiP79KfixPj1PRWcFCxTo%2F9ph2mq7irpYbaj6rSyexXwp9f8iyx3uHCBmuvwBmcOpOn871Lx9%2Fv%2Bz%2FmTAkCT3cI1FJqZlhscwKY%2FCgAtODHxKqIDhN%2BH2XJBFVC7cMJqBBO%2FlepuOwpWHPMmQtinIyuJhjnqrDKCGwYPkTYtztaDCe0Le3ZlGYfK%2FZubSauukLdFgfCtfyX5ItrRkewS93Nl%2Bc&X-Amz-Signature=c5bb73af6966dc1705a35a01579652f08ce2bc0902d068b61c074f818d38d870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3WTPGN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfPf1NVdmeZ4OiQwgJ2Cn8nYCnxR9BjZ7MemR0ffb8AIhAPDKu%2B5f6DEQlR9j9vY7%2FiO%2FX5Kmu1VUUTqc8IRYPrNAKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPaqRKYznZDmoqlqMq3AMKZbELIhkGlDGkE1QV4GSw7P0MtkcUGpZ8OVFBGKFC0qVB3Q9iekDYqwk9gMnVquH%2BLatMcOHW8Bh%2BVW9%2BAq4J6wiXdWjKUF9NLKgrnjQEBeOOmNJQLT3SiEI4nyvgR3YuNSQk04QXoV1Re8pwxtDJZ7sv50DD2r%2Fr5KcktObQj70aIxdmdqgl3kydjypbww1abPDxWV6Lmh6u1vLoSg29NFIyykJRWzOEznuNM8Q9u8QSIn3WKC887Pt20Dwm2RLDF0OyZf2nIV9yF%2Fo1xM9jfhMZqRnWO0Z6AHVwHtvfTMB6monIUPtycdTcra3CuZn8VuHcV94YpsPocK1kqfHFo4L6N7MLIF0myT8ZAWTGmXpFZX7gdv7b2FVvrl8ao8L9PzmNK67zHnGNyjPHa7Y1nc3BtoIjSXDLP9v%2FJE0kNbxpKdRiKxB739hjPGkJfknWaYIFDIxaIR2LDcA7w5XbQqlkGr5685I%2F2%2B2oQlcW%2BoJMs6vcxLivTCAPo7PH8bpcHaKZoIGTQI7WSxay5nVx%2F9xGl2%2BR84ECuO4mMVBEj39odfFtCgxwrvPwR7ngUA9FsIa5I34lkzlpdt1x5Tdk63G7GZIkNqNpOLTmo0zqALR9R5iNiz03lBNqETCvxbrDBjqkASZiP79KfixPj1PRWcFCxTo%2F9ph2mq7irpYbaj6rSyexXwp9f8iyx3uHCBmuvwBmcOpOn871Lx9%2Fv%2Bz%2FmTAkCT3cI1FJqZlhscwKY%2FCgAtODHxKqIDhN%2BH2XJBFVC7cMJqBBO%2FlepuOwpWHPMmQtinIyuJhjnqrDKCGwYPkTYtztaDCe0Le3ZlGYfK%2FZubSauukLdFgfCtfyX5ItrRkewS93Nl%2Bc&X-Amz-Signature=95ca6b5b3523efbbb2387823d89298f6c11c3e3dd1bf3087bb0d73aa7d3d9caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3WTPGN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfPf1NVdmeZ4OiQwgJ2Cn8nYCnxR9BjZ7MemR0ffb8AIhAPDKu%2B5f6DEQlR9j9vY7%2FiO%2FX5Kmu1VUUTqc8IRYPrNAKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPaqRKYznZDmoqlqMq3AMKZbELIhkGlDGkE1QV4GSw7P0MtkcUGpZ8OVFBGKFC0qVB3Q9iekDYqwk9gMnVquH%2BLatMcOHW8Bh%2BVW9%2BAq4J6wiXdWjKUF9NLKgrnjQEBeOOmNJQLT3SiEI4nyvgR3YuNSQk04QXoV1Re8pwxtDJZ7sv50DD2r%2Fr5KcktObQj70aIxdmdqgl3kydjypbww1abPDxWV6Lmh6u1vLoSg29NFIyykJRWzOEznuNM8Q9u8QSIn3WKC887Pt20Dwm2RLDF0OyZf2nIV9yF%2Fo1xM9jfhMZqRnWO0Z6AHVwHtvfTMB6monIUPtycdTcra3CuZn8VuHcV94YpsPocK1kqfHFo4L6N7MLIF0myT8ZAWTGmXpFZX7gdv7b2FVvrl8ao8L9PzmNK67zHnGNyjPHa7Y1nc3BtoIjSXDLP9v%2FJE0kNbxpKdRiKxB739hjPGkJfknWaYIFDIxaIR2LDcA7w5XbQqlkGr5685I%2F2%2B2oQlcW%2BoJMs6vcxLivTCAPo7PH8bpcHaKZoIGTQI7WSxay5nVx%2F9xGl2%2BR84ECuO4mMVBEj39odfFtCgxwrvPwR7ngUA9FsIa5I34lkzlpdt1x5Tdk63G7GZIkNqNpOLTmo0zqALR9R5iNiz03lBNqETCvxbrDBjqkASZiP79KfixPj1PRWcFCxTo%2F9ph2mq7irpYbaj6rSyexXwp9f8iyx3uHCBmuvwBmcOpOn871Lx9%2Fv%2Bz%2FmTAkCT3cI1FJqZlhscwKY%2FCgAtODHxKqIDhN%2BH2XJBFVC7cMJqBBO%2FlepuOwpWHPMmQtinIyuJhjnqrDKCGwYPkTYtztaDCe0Le3ZlGYfK%2FZubSauukLdFgfCtfyX5ItrRkewS93Nl%2Bc&X-Amz-Signature=b46cf23e5e10935e16a4e7431d778bc05fdc0d9126652572d7f84b9768a1caea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3WTPGN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfPf1NVdmeZ4OiQwgJ2Cn8nYCnxR9BjZ7MemR0ffb8AIhAPDKu%2B5f6DEQlR9j9vY7%2FiO%2FX5Kmu1VUUTqc8IRYPrNAKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPaqRKYznZDmoqlqMq3AMKZbELIhkGlDGkE1QV4GSw7P0MtkcUGpZ8OVFBGKFC0qVB3Q9iekDYqwk9gMnVquH%2BLatMcOHW8Bh%2BVW9%2BAq4J6wiXdWjKUF9NLKgrnjQEBeOOmNJQLT3SiEI4nyvgR3YuNSQk04QXoV1Re8pwxtDJZ7sv50DD2r%2Fr5KcktObQj70aIxdmdqgl3kydjypbww1abPDxWV6Lmh6u1vLoSg29NFIyykJRWzOEznuNM8Q9u8QSIn3WKC887Pt20Dwm2RLDF0OyZf2nIV9yF%2Fo1xM9jfhMZqRnWO0Z6AHVwHtvfTMB6monIUPtycdTcra3CuZn8VuHcV94YpsPocK1kqfHFo4L6N7MLIF0myT8ZAWTGmXpFZX7gdv7b2FVvrl8ao8L9PzmNK67zHnGNyjPHa7Y1nc3BtoIjSXDLP9v%2FJE0kNbxpKdRiKxB739hjPGkJfknWaYIFDIxaIR2LDcA7w5XbQqlkGr5685I%2F2%2B2oQlcW%2BoJMs6vcxLivTCAPo7PH8bpcHaKZoIGTQI7WSxay5nVx%2F9xGl2%2BR84ECuO4mMVBEj39odfFtCgxwrvPwR7ngUA9FsIa5I34lkzlpdt1x5Tdk63G7GZIkNqNpOLTmo0zqALR9R5iNiz03lBNqETCvxbrDBjqkASZiP79KfixPj1PRWcFCxTo%2F9ph2mq7irpYbaj6rSyexXwp9f8iyx3uHCBmuvwBmcOpOn871Lx9%2Fv%2Bz%2FmTAkCT3cI1FJqZlhscwKY%2FCgAtODHxKqIDhN%2BH2XJBFVC7cMJqBBO%2FlepuOwpWHPMmQtinIyuJhjnqrDKCGwYPkTYtztaDCe0Le3ZlGYfK%2FZubSauukLdFgfCtfyX5ItrRkewS93Nl%2Bc&X-Amz-Signature=0c2a5ba0e340736e98058360808c34afe6eceda3f8683d7bcb363f9772cb7874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

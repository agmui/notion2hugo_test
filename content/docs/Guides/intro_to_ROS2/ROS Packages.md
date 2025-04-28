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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VO5ATQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL46137rt8Wak%2B%2BxybfEdpjFAXQcz4bBHJiUG4iKXDQQIhAMTf5eyPHqHgL%2BGOLIw5Ult5UCd8JicxCbtMzEVxLNE2Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxUfufaloarA81p6Dcq3AOiUtpnVNOH7KTY%2F8RnRNoRZYKGTCFWeGag%2FFRvJ1KUd6lm4%2FHghguTFMhFTHuOnq98%2F4DJBB1v91TEDK1BQUx2a66CnxiGY5yGsnLmjrEF4Hu9vlwKDlYOAGvEVctymSQVqn8Rh7aIvbA%2FlUK7ImuUlGxtmbBcMQk8bIofysqP3RpTA%2B5RwMyyJ3wJAm%2BOdViTGxC1DRcSHMeGQosG7x9QukNlDJ1wGNviOoqwhWzRl4wLIhY89nXiqCh4hUmj4GD%2BHwmTMdS9wr6JvOBfm6H38cuw8Us%2BGwlshXE6CLK9HGQ3aXhHa%2Fjqe12PVHetoFWrNNzOYZ%2FklIUxBC4f9PLp3ZMqF4XpxwogfES%2BjSe9o4uso8UmL96RPP26%2Fr8tdlPOHZtVEUxkcs2fnpxdRhv1nzD5C3SVp5vJaWBQngq%2FDVDJ%2FIcvlb%2B2vnrzSNC%2BXtK1SnVWqXwULTiQlHWbKR1IWn4H8d%2FzWj4zy35KjU7Lu4Afjd7ZrvBG0M0yF3g3Pcrhpy6NgcFLG8jgL3tPIijMrKSebV3jqlnVgKbzDjFtMeTTY0aixanEGq1GExsGJuJnO4X0iPmrArkqyWKFlnnMzQXhvIsdtomrclDzy45%2B3TqQvnBOokErEtJjATD9vLzABjqkAXAYCTzZdh0L%2F2yKRPQKX1aBBw3yglIaFGtqKA1wSV8qWA8%2F1vSAjYbCbJHdQcxoxYkTN3qeMldVJ1DzeTTfJfjDeuagL8sDhUCH66IS%2BUkeU5DxHpPl65uk5UVbB6JDWLyZbO2gOVzR%2FmTV5n9ydS3FvC6kciU0NGfL8xuHAhmocgK4Gsbm3Xr3HfJ1jxEcJXZ1wmub2r6zJEP1LdJEPvzILTFQ&X-Amz-Signature=aa2e7dc907e530d051f3105418777cde7e96b5910bb237d4a5ee2e3432a358f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VO5ATQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL46137rt8Wak%2B%2BxybfEdpjFAXQcz4bBHJiUG4iKXDQQIhAMTf5eyPHqHgL%2BGOLIw5Ult5UCd8JicxCbtMzEVxLNE2Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxUfufaloarA81p6Dcq3AOiUtpnVNOH7KTY%2F8RnRNoRZYKGTCFWeGag%2FFRvJ1KUd6lm4%2FHghguTFMhFTHuOnq98%2F4DJBB1v91TEDK1BQUx2a66CnxiGY5yGsnLmjrEF4Hu9vlwKDlYOAGvEVctymSQVqn8Rh7aIvbA%2FlUK7ImuUlGxtmbBcMQk8bIofysqP3RpTA%2B5RwMyyJ3wJAm%2BOdViTGxC1DRcSHMeGQosG7x9QukNlDJ1wGNviOoqwhWzRl4wLIhY89nXiqCh4hUmj4GD%2BHwmTMdS9wr6JvOBfm6H38cuw8Us%2BGwlshXE6CLK9HGQ3aXhHa%2Fjqe12PVHetoFWrNNzOYZ%2FklIUxBC4f9PLp3ZMqF4XpxwogfES%2BjSe9o4uso8UmL96RPP26%2Fr8tdlPOHZtVEUxkcs2fnpxdRhv1nzD5C3SVp5vJaWBQngq%2FDVDJ%2FIcvlb%2B2vnrzSNC%2BXtK1SnVWqXwULTiQlHWbKR1IWn4H8d%2FzWj4zy35KjU7Lu4Afjd7ZrvBG0M0yF3g3Pcrhpy6NgcFLG8jgL3tPIijMrKSebV3jqlnVgKbzDjFtMeTTY0aixanEGq1GExsGJuJnO4X0iPmrArkqyWKFlnnMzQXhvIsdtomrclDzy45%2B3TqQvnBOokErEtJjATD9vLzABjqkAXAYCTzZdh0L%2F2yKRPQKX1aBBw3yglIaFGtqKA1wSV8qWA8%2F1vSAjYbCbJHdQcxoxYkTN3qeMldVJ1DzeTTfJfjDeuagL8sDhUCH66IS%2BUkeU5DxHpPl65uk5UVbB6JDWLyZbO2gOVzR%2FmTV5n9ydS3FvC6kciU0NGfL8xuHAhmocgK4Gsbm3Xr3HfJ1jxEcJXZ1wmub2r6zJEP1LdJEPvzILTFQ&X-Amz-Signature=baf84691a22f68e60ef4abcb325e1a4f17a41b80075cee32f31310ffdd63817e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VO5ATQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL46137rt8Wak%2B%2BxybfEdpjFAXQcz4bBHJiUG4iKXDQQIhAMTf5eyPHqHgL%2BGOLIw5Ult5UCd8JicxCbtMzEVxLNE2Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxUfufaloarA81p6Dcq3AOiUtpnVNOH7KTY%2F8RnRNoRZYKGTCFWeGag%2FFRvJ1KUd6lm4%2FHghguTFMhFTHuOnq98%2F4DJBB1v91TEDK1BQUx2a66CnxiGY5yGsnLmjrEF4Hu9vlwKDlYOAGvEVctymSQVqn8Rh7aIvbA%2FlUK7ImuUlGxtmbBcMQk8bIofysqP3RpTA%2B5RwMyyJ3wJAm%2BOdViTGxC1DRcSHMeGQosG7x9QukNlDJ1wGNviOoqwhWzRl4wLIhY89nXiqCh4hUmj4GD%2BHwmTMdS9wr6JvOBfm6H38cuw8Us%2BGwlshXE6CLK9HGQ3aXhHa%2Fjqe12PVHetoFWrNNzOYZ%2FklIUxBC4f9PLp3ZMqF4XpxwogfES%2BjSe9o4uso8UmL96RPP26%2Fr8tdlPOHZtVEUxkcs2fnpxdRhv1nzD5C3SVp5vJaWBQngq%2FDVDJ%2FIcvlb%2B2vnrzSNC%2BXtK1SnVWqXwULTiQlHWbKR1IWn4H8d%2FzWj4zy35KjU7Lu4Afjd7ZrvBG0M0yF3g3Pcrhpy6NgcFLG8jgL3tPIijMrKSebV3jqlnVgKbzDjFtMeTTY0aixanEGq1GExsGJuJnO4X0iPmrArkqyWKFlnnMzQXhvIsdtomrclDzy45%2B3TqQvnBOokErEtJjATD9vLzABjqkAXAYCTzZdh0L%2F2yKRPQKX1aBBw3yglIaFGtqKA1wSV8qWA8%2F1vSAjYbCbJHdQcxoxYkTN3qeMldVJ1DzeTTfJfjDeuagL8sDhUCH66IS%2BUkeU5DxHpPl65uk5UVbB6JDWLyZbO2gOVzR%2FmTV5n9ydS3FvC6kciU0NGfL8xuHAhmocgK4Gsbm3Xr3HfJ1jxEcJXZ1wmub2r6zJEP1LdJEPvzILTFQ&X-Amz-Signature=83b97a5d36fcc6f4c699652302300ac78de0d38867a06f1b5b80e2d87ae550e7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VO5ATQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL46137rt8Wak%2B%2BxybfEdpjFAXQcz4bBHJiUG4iKXDQQIhAMTf5eyPHqHgL%2BGOLIw5Ult5UCd8JicxCbtMzEVxLNE2Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxUfufaloarA81p6Dcq3AOiUtpnVNOH7KTY%2F8RnRNoRZYKGTCFWeGag%2FFRvJ1KUd6lm4%2FHghguTFMhFTHuOnq98%2F4DJBB1v91TEDK1BQUx2a66CnxiGY5yGsnLmjrEF4Hu9vlwKDlYOAGvEVctymSQVqn8Rh7aIvbA%2FlUK7ImuUlGxtmbBcMQk8bIofysqP3RpTA%2B5RwMyyJ3wJAm%2BOdViTGxC1DRcSHMeGQosG7x9QukNlDJ1wGNviOoqwhWzRl4wLIhY89nXiqCh4hUmj4GD%2BHwmTMdS9wr6JvOBfm6H38cuw8Us%2BGwlshXE6CLK9HGQ3aXhHa%2Fjqe12PVHetoFWrNNzOYZ%2FklIUxBC4f9PLp3ZMqF4XpxwogfES%2BjSe9o4uso8UmL96RPP26%2Fr8tdlPOHZtVEUxkcs2fnpxdRhv1nzD5C3SVp5vJaWBQngq%2FDVDJ%2FIcvlb%2B2vnrzSNC%2BXtK1SnVWqXwULTiQlHWbKR1IWn4H8d%2FzWj4zy35KjU7Lu4Afjd7ZrvBG0M0yF3g3Pcrhpy6NgcFLG8jgL3tPIijMrKSebV3jqlnVgKbzDjFtMeTTY0aixanEGq1GExsGJuJnO4X0iPmrArkqyWKFlnnMzQXhvIsdtomrclDzy45%2B3TqQvnBOokErEtJjATD9vLzABjqkAXAYCTzZdh0L%2F2yKRPQKX1aBBw3yglIaFGtqKA1wSV8qWA8%2F1vSAjYbCbJHdQcxoxYkTN3qeMldVJ1DzeTTfJfjDeuagL8sDhUCH66IS%2BUkeU5DxHpPl65uk5UVbB6JDWLyZbO2gOVzR%2FmTV5n9ydS3FvC6kciU0NGfL8xuHAhmocgK4Gsbm3Xr3HfJ1jxEcJXZ1wmub2r6zJEP1LdJEPvzILTFQ&X-Amz-Signature=51e23f15f823df7a16cf8a932f3261b39a0dd9501028436ba13ffb19ffaabbf5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VO5ATQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL46137rt8Wak%2B%2BxybfEdpjFAXQcz4bBHJiUG4iKXDQQIhAMTf5eyPHqHgL%2BGOLIw5Ult5UCd8JicxCbtMzEVxLNE2Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxUfufaloarA81p6Dcq3AOiUtpnVNOH7KTY%2F8RnRNoRZYKGTCFWeGag%2FFRvJ1KUd6lm4%2FHghguTFMhFTHuOnq98%2F4DJBB1v91TEDK1BQUx2a66CnxiGY5yGsnLmjrEF4Hu9vlwKDlYOAGvEVctymSQVqn8Rh7aIvbA%2FlUK7ImuUlGxtmbBcMQk8bIofysqP3RpTA%2B5RwMyyJ3wJAm%2BOdViTGxC1DRcSHMeGQosG7x9QukNlDJ1wGNviOoqwhWzRl4wLIhY89nXiqCh4hUmj4GD%2BHwmTMdS9wr6JvOBfm6H38cuw8Us%2BGwlshXE6CLK9HGQ3aXhHa%2Fjqe12PVHetoFWrNNzOYZ%2FklIUxBC4f9PLp3ZMqF4XpxwogfES%2BjSe9o4uso8UmL96RPP26%2Fr8tdlPOHZtVEUxkcs2fnpxdRhv1nzD5C3SVp5vJaWBQngq%2FDVDJ%2FIcvlb%2B2vnrzSNC%2BXtK1SnVWqXwULTiQlHWbKR1IWn4H8d%2FzWj4zy35KjU7Lu4Afjd7ZrvBG0M0yF3g3Pcrhpy6NgcFLG8jgL3tPIijMrKSebV3jqlnVgKbzDjFtMeTTY0aixanEGq1GExsGJuJnO4X0iPmrArkqyWKFlnnMzQXhvIsdtomrclDzy45%2B3TqQvnBOokErEtJjATD9vLzABjqkAXAYCTzZdh0L%2F2yKRPQKX1aBBw3yglIaFGtqKA1wSV8qWA8%2F1vSAjYbCbJHdQcxoxYkTN3qeMldVJ1DzeTTfJfjDeuagL8sDhUCH66IS%2BUkeU5DxHpPl65uk5UVbB6JDWLyZbO2gOVzR%2FmTV5n9ydS3FvC6kciU0NGfL8xuHAhmocgK4Gsbm3Xr3HfJ1jxEcJXZ1wmub2r6zJEP1LdJEPvzILTFQ&X-Amz-Signature=531a8c74ecd8cda1f6cf91fa2afa429a4ff68761ce73a788317b9fc483cf8682&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VO5ATQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL46137rt8Wak%2B%2BxybfEdpjFAXQcz4bBHJiUG4iKXDQQIhAMTf5eyPHqHgL%2BGOLIw5Ult5UCd8JicxCbtMzEVxLNE2Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxUfufaloarA81p6Dcq3AOiUtpnVNOH7KTY%2F8RnRNoRZYKGTCFWeGag%2FFRvJ1KUd6lm4%2FHghguTFMhFTHuOnq98%2F4DJBB1v91TEDK1BQUx2a66CnxiGY5yGsnLmjrEF4Hu9vlwKDlYOAGvEVctymSQVqn8Rh7aIvbA%2FlUK7ImuUlGxtmbBcMQk8bIofysqP3RpTA%2B5RwMyyJ3wJAm%2BOdViTGxC1DRcSHMeGQosG7x9QukNlDJ1wGNviOoqwhWzRl4wLIhY89nXiqCh4hUmj4GD%2BHwmTMdS9wr6JvOBfm6H38cuw8Us%2BGwlshXE6CLK9HGQ3aXhHa%2Fjqe12PVHetoFWrNNzOYZ%2FklIUxBC4f9PLp3ZMqF4XpxwogfES%2BjSe9o4uso8UmL96RPP26%2Fr8tdlPOHZtVEUxkcs2fnpxdRhv1nzD5C3SVp5vJaWBQngq%2FDVDJ%2FIcvlb%2B2vnrzSNC%2BXtK1SnVWqXwULTiQlHWbKR1IWn4H8d%2FzWj4zy35KjU7Lu4Afjd7ZrvBG0M0yF3g3Pcrhpy6NgcFLG8jgL3tPIijMrKSebV3jqlnVgKbzDjFtMeTTY0aixanEGq1GExsGJuJnO4X0iPmrArkqyWKFlnnMzQXhvIsdtomrclDzy45%2B3TqQvnBOokErEtJjATD9vLzABjqkAXAYCTzZdh0L%2F2yKRPQKX1aBBw3yglIaFGtqKA1wSV8qWA8%2F1vSAjYbCbJHdQcxoxYkTN3qeMldVJ1DzeTTfJfjDeuagL8sDhUCH66IS%2BUkeU5DxHpPl65uk5UVbB6JDWLyZbO2gOVzR%2FmTV5n9ydS3FvC6kciU0NGfL8xuHAhmocgK4Gsbm3Xr3HfJ1jxEcJXZ1wmub2r6zJEP1LdJEPvzILTFQ&X-Amz-Signature=202158b52aa4a6dc6cb1322e5283f0e748452adc361b3247494e0497509fb92b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VO5ATQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL46137rt8Wak%2B%2BxybfEdpjFAXQcz4bBHJiUG4iKXDQQIhAMTf5eyPHqHgL%2BGOLIw5Ult5UCd8JicxCbtMzEVxLNE2Kv8DCG8QABoMNjM3NDIzMTgzODA1IgxUfufaloarA81p6Dcq3AOiUtpnVNOH7KTY%2F8RnRNoRZYKGTCFWeGag%2FFRvJ1KUd6lm4%2FHghguTFMhFTHuOnq98%2F4DJBB1v91TEDK1BQUx2a66CnxiGY5yGsnLmjrEF4Hu9vlwKDlYOAGvEVctymSQVqn8Rh7aIvbA%2FlUK7ImuUlGxtmbBcMQk8bIofysqP3RpTA%2B5RwMyyJ3wJAm%2BOdViTGxC1DRcSHMeGQosG7x9QukNlDJ1wGNviOoqwhWzRl4wLIhY89nXiqCh4hUmj4GD%2BHwmTMdS9wr6JvOBfm6H38cuw8Us%2BGwlshXE6CLK9HGQ3aXhHa%2Fjqe12PVHetoFWrNNzOYZ%2FklIUxBC4f9PLp3ZMqF4XpxwogfES%2BjSe9o4uso8UmL96RPP26%2Fr8tdlPOHZtVEUxkcs2fnpxdRhv1nzD5C3SVp5vJaWBQngq%2FDVDJ%2FIcvlb%2B2vnrzSNC%2BXtK1SnVWqXwULTiQlHWbKR1IWn4H8d%2FzWj4zy35KjU7Lu4Afjd7ZrvBG0M0yF3g3Pcrhpy6NgcFLG8jgL3tPIijMrKSebV3jqlnVgKbzDjFtMeTTY0aixanEGq1GExsGJuJnO4X0iPmrArkqyWKFlnnMzQXhvIsdtomrclDzy45%2B3TqQvnBOokErEtJjATD9vLzABjqkAXAYCTzZdh0L%2F2yKRPQKX1aBBw3yglIaFGtqKA1wSV8qWA8%2F1vSAjYbCbJHdQcxoxYkTN3qeMldVJ1DzeTTfJfjDeuagL8sDhUCH66IS%2BUkeU5DxHpPl65uk5UVbB6JDWLyZbO2gOVzR%2FmTV5n9ydS3FvC6kciU0NGfL8xuHAhmocgK4Gsbm3Xr3HfJ1jxEcJXZ1wmub2r6zJEP1LdJEPvzILTFQ&X-Amz-Signature=1978667f7f81f333d24b53a143edd9f77e048deb02987583e4a848bf1a757dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

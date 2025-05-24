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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2BSAOA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCN5BAibIJi3bcHm1q6jHBcjyne1SPZphP2D6JCd7W2ywIgD8T3%2Btsl2GoduZBjsQ9RRzTTurRBtVPtJkah%2BDOAl4Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHJh0I92elkbCxOfwircA4qKpPEK1ZgJoV1aCqCKmmxMLG%2FtENuZAFn4zr6SRVwj7hmp6retW77NnIQ7enuIcFsvV6MCVnR1XhDBr%2FWzJj8vgkASixAt7XZZo5LElmvXUMeQ3Z%2Fup9VdYflnSqciOrHvRQ7NzJzz1LWnuOdN3FVF6Mz3YCfK%2BPagIqZADMnaWPJIesp1Z95CrhMMxioF%2FNisFjyYIOqvgYwimOD%2FXIgR5RovATcvQFaPepb9xx3hXaGJyw8IB6mEzbYLZO51pH7%2BIxJZU2y%2BKS4pgXzmVFeZOWXct6nLMhhiyWFWqGhJqwCSMo1p6fI7eS%2Fkn4DwcKuyiXUsOXypeOhLj5b3inAS2oC3nrBdAMW5aWoG4olB%2F3UugcGXozq5J%2B4G8JQ8CmmVhAduAQUXfTGSI6xyuLBvKS1JHUp2b3lYFeTajhwKf8ELBtQItavfpWy%2FZcPtLSm%2BVQ0R9Bh8F8WqNfNliBTZr8AFW3RjEgtGn7iA2sWDl1SzyqeQmWoNjoLfar6y1xsQYQvq5nBXB9k1HU5dip6bt7J6SoMwOi%2FI0xOG9NUgh9Z358m%2BcvxlXz4vPLKqpSEYCxeKsfV4h2ogZkF5oeYKvP5j4YGDwyXOLYML3fSKRslnCqN8B6vS1eBdMP6VyMEGOqUB8mcEVNH48UMGwHb3TkXAptLxAGlXwpsvDg2bXHOssSHKyMPVwsbit22I%2FZ%2Fw2ErhQF4OG%2BhyxXMIbAu96y9Z5jBfD7bjlrKXDjW8RoPKpOBXHR6cMH9ILpTqKTCUwiIt6f4deVxkrz1XQvfriBw1TayVrhSAVkUaoaZyjjmDk4OVU8NU%2Blg7hOxr%2FdNZpw6qvvyEMFwCBHEygD%2F0oWM7PfyH3Is1&X-Amz-Signature=fb23044a766926b304cab271da0861b061197b97474b86e93bc5dae72fa5b008&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2BSAOA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCN5BAibIJi3bcHm1q6jHBcjyne1SPZphP2D6JCd7W2ywIgD8T3%2Btsl2GoduZBjsQ9RRzTTurRBtVPtJkah%2BDOAl4Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHJh0I92elkbCxOfwircA4qKpPEK1ZgJoV1aCqCKmmxMLG%2FtENuZAFn4zr6SRVwj7hmp6retW77NnIQ7enuIcFsvV6MCVnR1XhDBr%2FWzJj8vgkASixAt7XZZo5LElmvXUMeQ3Z%2Fup9VdYflnSqciOrHvRQ7NzJzz1LWnuOdN3FVF6Mz3YCfK%2BPagIqZADMnaWPJIesp1Z95CrhMMxioF%2FNisFjyYIOqvgYwimOD%2FXIgR5RovATcvQFaPepb9xx3hXaGJyw8IB6mEzbYLZO51pH7%2BIxJZU2y%2BKS4pgXzmVFeZOWXct6nLMhhiyWFWqGhJqwCSMo1p6fI7eS%2Fkn4DwcKuyiXUsOXypeOhLj5b3inAS2oC3nrBdAMW5aWoG4olB%2F3UugcGXozq5J%2B4G8JQ8CmmVhAduAQUXfTGSI6xyuLBvKS1JHUp2b3lYFeTajhwKf8ELBtQItavfpWy%2FZcPtLSm%2BVQ0R9Bh8F8WqNfNliBTZr8AFW3RjEgtGn7iA2sWDl1SzyqeQmWoNjoLfar6y1xsQYQvq5nBXB9k1HU5dip6bt7J6SoMwOi%2FI0xOG9NUgh9Z358m%2BcvxlXz4vPLKqpSEYCxeKsfV4h2ogZkF5oeYKvP5j4YGDwyXOLYML3fSKRslnCqN8B6vS1eBdMP6VyMEGOqUB8mcEVNH48UMGwHb3TkXAptLxAGlXwpsvDg2bXHOssSHKyMPVwsbit22I%2FZ%2Fw2ErhQF4OG%2BhyxXMIbAu96y9Z5jBfD7bjlrKXDjW8RoPKpOBXHR6cMH9ILpTqKTCUwiIt6f4deVxkrz1XQvfriBw1TayVrhSAVkUaoaZyjjmDk4OVU8NU%2Blg7hOxr%2FdNZpw6qvvyEMFwCBHEygD%2F0oWM7PfyH3Is1&X-Amz-Signature=38ec6f388862dab0f26289c703d442d0d550b1b4d5985e04967ffda981ca673e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2BSAOA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCN5BAibIJi3bcHm1q6jHBcjyne1SPZphP2D6JCd7W2ywIgD8T3%2Btsl2GoduZBjsQ9RRzTTurRBtVPtJkah%2BDOAl4Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHJh0I92elkbCxOfwircA4qKpPEK1ZgJoV1aCqCKmmxMLG%2FtENuZAFn4zr6SRVwj7hmp6retW77NnIQ7enuIcFsvV6MCVnR1XhDBr%2FWzJj8vgkASixAt7XZZo5LElmvXUMeQ3Z%2Fup9VdYflnSqciOrHvRQ7NzJzz1LWnuOdN3FVF6Mz3YCfK%2BPagIqZADMnaWPJIesp1Z95CrhMMxioF%2FNisFjyYIOqvgYwimOD%2FXIgR5RovATcvQFaPepb9xx3hXaGJyw8IB6mEzbYLZO51pH7%2BIxJZU2y%2BKS4pgXzmVFeZOWXct6nLMhhiyWFWqGhJqwCSMo1p6fI7eS%2Fkn4DwcKuyiXUsOXypeOhLj5b3inAS2oC3nrBdAMW5aWoG4olB%2F3UugcGXozq5J%2B4G8JQ8CmmVhAduAQUXfTGSI6xyuLBvKS1JHUp2b3lYFeTajhwKf8ELBtQItavfpWy%2FZcPtLSm%2BVQ0R9Bh8F8WqNfNliBTZr8AFW3RjEgtGn7iA2sWDl1SzyqeQmWoNjoLfar6y1xsQYQvq5nBXB9k1HU5dip6bt7J6SoMwOi%2FI0xOG9NUgh9Z358m%2BcvxlXz4vPLKqpSEYCxeKsfV4h2ogZkF5oeYKvP5j4YGDwyXOLYML3fSKRslnCqN8B6vS1eBdMP6VyMEGOqUB8mcEVNH48UMGwHb3TkXAptLxAGlXwpsvDg2bXHOssSHKyMPVwsbit22I%2FZ%2Fw2ErhQF4OG%2BhyxXMIbAu96y9Z5jBfD7bjlrKXDjW8RoPKpOBXHR6cMH9ILpTqKTCUwiIt6f4deVxkrz1XQvfriBw1TayVrhSAVkUaoaZyjjmDk4OVU8NU%2Blg7hOxr%2FdNZpw6qvvyEMFwCBHEygD%2F0oWM7PfyH3Is1&X-Amz-Signature=f9834dda474f8acc3416a878bd863fe8a7b8111c222dac4715d2b53536e9583f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2BSAOA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCN5BAibIJi3bcHm1q6jHBcjyne1SPZphP2D6JCd7W2ywIgD8T3%2Btsl2GoduZBjsQ9RRzTTurRBtVPtJkah%2BDOAl4Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHJh0I92elkbCxOfwircA4qKpPEK1ZgJoV1aCqCKmmxMLG%2FtENuZAFn4zr6SRVwj7hmp6retW77NnIQ7enuIcFsvV6MCVnR1XhDBr%2FWzJj8vgkASixAt7XZZo5LElmvXUMeQ3Z%2Fup9VdYflnSqciOrHvRQ7NzJzz1LWnuOdN3FVF6Mz3YCfK%2BPagIqZADMnaWPJIesp1Z95CrhMMxioF%2FNisFjyYIOqvgYwimOD%2FXIgR5RovATcvQFaPepb9xx3hXaGJyw8IB6mEzbYLZO51pH7%2BIxJZU2y%2BKS4pgXzmVFeZOWXct6nLMhhiyWFWqGhJqwCSMo1p6fI7eS%2Fkn4DwcKuyiXUsOXypeOhLj5b3inAS2oC3nrBdAMW5aWoG4olB%2F3UugcGXozq5J%2B4G8JQ8CmmVhAduAQUXfTGSI6xyuLBvKS1JHUp2b3lYFeTajhwKf8ELBtQItavfpWy%2FZcPtLSm%2BVQ0R9Bh8F8WqNfNliBTZr8AFW3RjEgtGn7iA2sWDl1SzyqeQmWoNjoLfar6y1xsQYQvq5nBXB9k1HU5dip6bt7J6SoMwOi%2FI0xOG9NUgh9Z358m%2BcvxlXz4vPLKqpSEYCxeKsfV4h2ogZkF5oeYKvP5j4YGDwyXOLYML3fSKRslnCqN8B6vS1eBdMP6VyMEGOqUB8mcEVNH48UMGwHb3TkXAptLxAGlXwpsvDg2bXHOssSHKyMPVwsbit22I%2FZ%2Fw2ErhQF4OG%2BhyxXMIbAu96y9Z5jBfD7bjlrKXDjW8RoPKpOBXHR6cMH9ILpTqKTCUwiIt6f4deVxkrz1XQvfriBw1TayVrhSAVkUaoaZyjjmDk4OVU8NU%2Blg7hOxr%2FdNZpw6qvvyEMFwCBHEygD%2F0oWM7PfyH3Is1&X-Amz-Signature=31e7f9f65e434c7f2796a0873d7bb16d2973e8c7c5a85b97b5085a5a836781ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2BSAOA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCN5BAibIJi3bcHm1q6jHBcjyne1SPZphP2D6JCd7W2ywIgD8T3%2Btsl2GoduZBjsQ9RRzTTurRBtVPtJkah%2BDOAl4Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHJh0I92elkbCxOfwircA4qKpPEK1ZgJoV1aCqCKmmxMLG%2FtENuZAFn4zr6SRVwj7hmp6retW77NnIQ7enuIcFsvV6MCVnR1XhDBr%2FWzJj8vgkASixAt7XZZo5LElmvXUMeQ3Z%2Fup9VdYflnSqciOrHvRQ7NzJzz1LWnuOdN3FVF6Mz3YCfK%2BPagIqZADMnaWPJIesp1Z95CrhMMxioF%2FNisFjyYIOqvgYwimOD%2FXIgR5RovATcvQFaPepb9xx3hXaGJyw8IB6mEzbYLZO51pH7%2BIxJZU2y%2BKS4pgXzmVFeZOWXct6nLMhhiyWFWqGhJqwCSMo1p6fI7eS%2Fkn4DwcKuyiXUsOXypeOhLj5b3inAS2oC3nrBdAMW5aWoG4olB%2F3UugcGXozq5J%2B4G8JQ8CmmVhAduAQUXfTGSI6xyuLBvKS1JHUp2b3lYFeTajhwKf8ELBtQItavfpWy%2FZcPtLSm%2BVQ0R9Bh8F8WqNfNliBTZr8AFW3RjEgtGn7iA2sWDl1SzyqeQmWoNjoLfar6y1xsQYQvq5nBXB9k1HU5dip6bt7J6SoMwOi%2FI0xOG9NUgh9Z358m%2BcvxlXz4vPLKqpSEYCxeKsfV4h2ogZkF5oeYKvP5j4YGDwyXOLYML3fSKRslnCqN8B6vS1eBdMP6VyMEGOqUB8mcEVNH48UMGwHb3TkXAptLxAGlXwpsvDg2bXHOssSHKyMPVwsbit22I%2FZ%2Fw2ErhQF4OG%2BhyxXMIbAu96y9Z5jBfD7bjlrKXDjW8RoPKpOBXHR6cMH9ILpTqKTCUwiIt6f4deVxkrz1XQvfriBw1TayVrhSAVkUaoaZyjjmDk4OVU8NU%2Blg7hOxr%2FdNZpw6qvvyEMFwCBHEygD%2F0oWM7PfyH3Is1&X-Amz-Signature=f637118d47e7c21c20947ef490e436598d05c4debe625ed582846a9b322684e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2BSAOA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCN5BAibIJi3bcHm1q6jHBcjyne1SPZphP2D6JCd7W2ywIgD8T3%2Btsl2GoduZBjsQ9RRzTTurRBtVPtJkah%2BDOAl4Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHJh0I92elkbCxOfwircA4qKpPEK1ZgJoV1aCqCKmmxMLG%2FtENuZAFn4zr6SRVwj7hmp6retW77NnIQ7enuIcFsvV6MCVnR1XhDBr%2FWzJj8vgkASixAt7XZZo5LElmvXUMeQ3Z%2Fup9VdYflnSqciOrHvRQ7NzJzz1LWnuOdN3FVF6Mz3YCfK%2BPagIqZADMnaWPJIesp1Z95CrhMMxioF%2FNisFjyYIOqvgYwimOD%2FXIgR5RovATcvQFaPepb9xx3hXaGJyw8IB6mEzbYLZO51pH7%2BIxJZU2y%2BKS4pgXzmVFeZOWXct6nLMhhiyWFWqGhJqwCSMo1p6fI7eS%2Fkn4DwcKuyiXUsOXypeOhLj5b3inAS2oC3nrBdAMW5aWoG4olB%2F3UugcGXozq5J%2B4G8JQ8CmmVhAduAQUXfTGSI6xyuLBvKS1JHUp2b3lYFeTajhwKf8ELBtQItavfpWy%2FZcPtLSm%2BVQ0R9Bh8F8WqNfNliBTZr8AFW3RjEgtGn7iA2sWDl1SzyqeQmWoNjoLfar6y1xsQYQvq5nBXB9k1HU5dip6bt7J6SoMwOi%2FI0xOG9NUgh9Z358m%2BcvxlXz4vPLKqpSEYCxeKsfV4h2ogZkF5oeYKvP5j4YGDwyXOLYML3fSKRslnCqN8B6vS1eBdMP6VyMEGOqUB8mcEVNH48UMGwHb3TkXAptLxAGlXwpsvDg2bXHOssSHKyMPVwsbit22I%2FZ%2Fw2ErhQF4OG%2BhyxXMIbAu96y9Z5jBfD7bjlrKXDjW8RoPKpOBXHR6cMH9ILpTqKTCUwiIt6f4deVxkrz1XQvfriBw1TayVrhSAVkUaoaZyjjmDk4OVU8NU%2Blg7hOxr%2FdNZpw6qvvyEMFwCBHEygD%2F0oWM7PfyH3Is1&X-Amz-Signature=37799389d0f15ba7f7b189e3d94cbb034d011ccc443a0c6d8ee261c8994dcbe2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2BSAOA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCN5BAibIJi3bcHm1q6jHBcjyne1SPZphP2D6JCd7W2ywIgD8T3%2Btsl2GoduZBjsQ9RRzTTurRBtVPtJkah%2BDOAl4Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHJh0I92elkbCxOfwircA4qKpPEK1ZgJoV1aCqCKmmxMLG%2FtENuZAFn4zr6SRVwj7hmp6retW77NnIQ7enuIcFsvV6MCVnR1XhDBr%2FWzJj8vgkASixAt7XZZo5LElmvXUMeQ3Z%2Fup9VdYflnSqciOrHvRQ7NzJzz1LWnuOdN3FVF6Mz3YCfK%2BPagIqZADMnaWPJIesp1Z95CrhMMxioF%2FNisFjyYIOqvgYwimOD%2FXIgR5RovATcvQFaPepb9xx3hXaGJyw8IB6mEzbYLZO51pH7%2BIxJZU2y%2BKS4pgXzmVFeZOWXct6nLMhhiyWFWqGhJqwCSMo1p6fI7eS%2Fkn4DwcKuyiXUsOXypeOhLj5b3inAS2oC3nrBdAMW5aWoG4olB%2F3UugcGXozq5J%2B4G8JQ8CmmVhAduAQUXfTGSI6xyuLBvKS1JHUp2b3lYFeTajhwKf8ELBtQItavfpWy%2FZcPtLSm%2BVQ0R9Bh8F8WqNfNliBTZr8AFW3RjEgtGn7iA2sWDl1SzyqeQmWoNjoLfar6y1xsQYQvq5nBXB9k1HU5dip6bt7J6SoMwOi%2FI0xOG9NUgh9Z358m%2BcvxlXz4vPLKqpSEYCxeKsfV4h2ogZkF5oeYKvP5j4YGDwyXOLYML3fSKRslnCqN8B6vS1eBdMP6VyMEGOqUB8mcEVNH48UMGwHb3TkXAptLxAGlXwpsvDg2bXHOssSHKyMPVwsbit22I%2FZ%2Fw2ErhQF4OG%2BhyxXMIbAu96y9Z5jBfD7bjlrKXDjW8RoPKpOBXHR6cMH9ILpTqKTCUwiIt6f4deVxkrz1XQvfriBw1TayVrhSAVkUaoaZyjjmDk4OVU8NU%2Blg7hOxr%2FdNZpw6qvvyEMFwCBHEygD%2F0oWM7PfyH3Is1&X-Amz-Signature=30ae9df807dccd7e8126d163cef64f7988db500541ef891c00be420beb7b84cd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

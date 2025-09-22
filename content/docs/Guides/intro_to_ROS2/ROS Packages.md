---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634CZ3Z5Y%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdpIO9xpyZKdppUCCT8OxiHqJ8LX%2B7OsQ%2FCd30bbmOSQIhALIm1NwwcOGizKjmZu7saIA%2BJV9CoRCEOmqn2K8GuHIJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx2uvus2OaJMgDVMo4q3AOHERl2lxvIyg4OiHhNGTW2aFtz35wxrlPJlhoSIO9n4eK8ldxeRg8PLdey0iXhE3u39aJWuYzufQx1qQ1vf2Xpn5LfIJqpmOpMJa4Zoh6SBd2lecJC5KWglG7YUOpQJthh0lrMIA8bJ0TB78YfJOLXtIVXpVMlg5%2FJdhh7G2io0y5L9tuzOrD3yJ8sZ8Kz8skrx%2BCzM0%2FRi6v34ngLMITgWKkW%2FXPnhk%2Bok56X38AZE3hMvcrko%2BFtl3lvURER1VMh7Un9f97nr%2FPZbcoR7Q8gDbbk0yTHvPxW5K6Wgfv4WMKZla1t92ZxzvMD7TXczacIvVYPmsLe%2FSki2G%2Fv9SaH4yy6%2BVrPrAsvE68v7CGVnthuNkJbNW9bQ%2Bj%2FK6KcUn8eQoKr65b29hq4VXOx11eH9bWYCH%2FBeKN6cq3%2FLENeH2Aw%2FvlbcZ2QCs9T7lC%2B%2FAMlj0T7NkvLHhZKnnn6zWher4XCip8Y7fzAghwlZKa3eZPOjfmsPdyewAN%2BFZeH0zKj%2FWrpbx8mXESm7t2Yq8hWowm80XXaOaUJOEx8F0b2YQtxy5Bf8rY8iOqYFmdbsM%2FJIGSeQNHX3kb6kmJFFbTpUIlEWtN1bVodyOF7yEhQmNUNp7sGFHX75JqVVjD%2FxMLGBjqkAdE8TsAMSXPPkKjhHW5AW%2FAigdpDmABHYnTvCQaoVggfO1DpSa1k408fV5MKMy16mhlr9soAZhxPfDBVxPUn2peGXja5JLRYsj%2FTBm27rPNgci%2Fllt6a7lu%2FfZUCZKUF1%2FfTt4jzfpVTXokNfl%2BI6JI%2FWGe39rxBhevJ%2FXPRW0opKOh95BHCLPIiwshrEWjfSHtIDFZBtwmyy3BO552XPurkP5mT&X-Amz-Signature=3fb6d225c699f1ae61802be2032a19f445b7ecdedae2e5630ba6b4bc25492188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634CZ3Z5Y%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdpIO9xpyZKdppUCCT8OxiHqJ8LX%2B7OsQ%2FCd30bbmOSQIhALIm1NwwcOGizKjmZu7saIA%2BJV9CoRCEOmqn2K8GuHIJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx2uvus2OaJMgDVMo4q3AOHERl2lxvIyg4OiHhNGTW2aFtz35wxrlPJlhoSIO9n4eK8ldxeRg8PLdey0iXhE3u39aJWuYzufQx1qQ1vf2Xpn5LfIJqpmOpMJa4Zoh6SBd2lecJC5KWglG7YUOpQJthh0lrMIA8bJ0TB78YfJOLXtIVXpVMlg5%2FJdhh7G2io0y5L9tuzOrD3yJ8sZ8Kz8skrx%2BCzM0%2FRi6v34ngLMITgWKkW%2FXPnhk%2Bok56X38AZE3hMvcrko%2BFtl3lvURER1VMh7Un9f97nr%2FPZbcoR7Q8gDbbk0yTHvPxW5K6Wgfv4WMKZla1t92ZxzvMD7TXczacIvVYPmsLe%2FSki2G%2Fv9SaH4yy6%2BVrPrAsvE68v7CGVnthuNkJbNW9bQ%2Bj%2FK6KcUn8eQoKr65b29hq4VXOx11eH9bWYCH%2FBeKN6cq3%2FLENeH2Aw%2FvlbcZ2QCs9T7lC%2B%2FAMlj0T7NkvLHhZKnnn6zWher4XCip8Y7fzAghwlZKa3eZPOjfmsPdyewAN%2BFZeH0zKj%2FWrpbx8mXESm7t2Yq8hWowm80XXaOaUJOEx8F0b2YQtxy5Bf8rY8iOqYFmdbsM%2FJIGSeQNHX3kb6kmJFFbTpUIlEWtN1bVodyOF7yEhQmNUNp7sGFHX75JqVVjD%2FxMLGBjqkAdE8TsAMSXPPkKjhHW5AW%2FAigdpDmABHYnTvCQaoVggfO1DpSa1k408fV5MKMy16mhlr9soAZhxPfDBVxPUn2peGXja5JLRYsj%2FTBm27rPNgci%2Fllt6a7lu%2FfZUCZKUF1%2FfTt4jzfpVTXokNfl%2BI6JI%2FWGe39rxBhevJ%2FXPRW0opKOh95BHCLPIiwshrEWjfSHtIDFZBtwmyy3BO552XPurkP5mT&X-Amz-Signature=8bd63fa8e3d674804db46468500b918d61ecf4d11729394f3f21d77c72292590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634CZ3Z5Y%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdpIO9xpyZKdppUCCT8OxiHqJ8LX%2B7OsQ%2FCd30bbmOSQIhALIm1NwwcOGizKjmZu7saIA%2BJV9CoRCEOmqn2K8GuHIJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx2uvus2OaJMgDVMo4q3AOHERl2lxvIyg4OiHhNGTW2aFtz35wxrlPJlhoSIO9n4eK8ldxeRg8PLdey0iXhE3u39aJWuYzufQx1qQ1vf2Xpn5LfIJqpmOpMJa4Zoh6SBd2lecJC5KWglG7YUOpQJthh0lrMIA8bJ0TB78YfJOLXtIVXpVMlg5%2FJdhh7G2io0y5L9tuzOrD3yJ8sZ8Kz8skrx%2BCzM0%2FRi6v34ngLMITgWKkW%2FXPnhk%2Bok56X38AZE3hMvcrko%2BFtl3lvURER1VMh7Un9f97nr%2FPZbcoR7Q8gDbbk0yTHvPxW5K6Wgfv4WMKZla1t92ZxzvMD7TXczacIvVYPmsLe%2FSki2G%2Fv9SaH4yy6%2BVrPrAsvE68v7CGVnthuNkJbNW9bQ%2Bj%2FK6KcUn8eQoKr65b29hq4VXOx11eH9bWYCH%2FBeKN6cq3%2FLENeH2Aw%2FvlbcZ2QCs9T7lC%2B%2FAMlj0T7NkvLHhZKnnn6zWher4XCip8Y7fzAghwlZKa3eZPOjfmsPdyewAN%2BFZeH0zKj%2FWrpbx8mXESm7t2Yq8hWowm80XXaOaUJOEx8F0b2YQtxy5Bf8rY8iOqYFmdbsM%2FJIGSeQNHX3kb6kmJFFbTpUIlEWtN1bVodyOF7yEhQmNUNp7sGFHX75JqVVjD%2FxMLGBjqkAdE8TsAMSXPPkKjhHW5AW%2FAigdpDmABHYnTvCQaoVggfO1DpSa1k408fV5MKMy16mhlr9soAZhxPfDBVxPUn2peGXja5JLRYsj%2FTBm27rPNgci%2Fllt6a7lu%2FfZUCZKUF1%2FfTt4jzfpVTXokNfl%2BI6JI%2FWGe39rxBhevJ%2FXPRW0opKOh95BHCLPIiwshrEWjfSHtIDFZBtwmyy3BO552XPurkP5mT&X-Amz-Signature=00c64ec6eca5d1b7515d86f1d0b0b2e944e7fda087b5dd375f9b52ff53b577e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634CZ3Z5Y%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdpIO9xpyZKdppUCCT8OxiHqJ8LX%2B7OsQ%2FCd30bbmOSQIhALIm1NwwcOGizKjmZu7saIA%2BJV9CoRCEOmqn2K8GuHIJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx2uvus2OaJMgDVMo4q3AOHERl2lxvIyg4OiHhNGTW2aFtz35wxrlPJlhoSIO9n4eK8ldxeRg8PLdey0iXhE3u39aJWuYzufQx1qQ1vf2Xpn5LfIJqpmOpMJa4Zoh6SBd2lecJC5KWglG7YUOpQJthh0lrMIA8bJ0TB78YfJOLXtIVXpVMlg5%2FJdhh7G2io0y5L9tuzOrD3yJ8sZ8Kz8skrx%2BCzM0%2FRi6v34ngLMITgWKkW%2FXPnhk%2Bok56X38AZE3hMvcrko%2BFtl3lvURER1VMh7Un9f97nr%2FPZbcoR7Q8gDbbk0yTHvPxW5K6Wgfv4WMKZla1t92ZxzvMD7TXczacIvVYPmsLe%2FSki2G%2Fv9SaH4yy6%2BVrPrAsvE68v7CGVnthuNkJbNW9bQ%2Bj%2FK6KcUn8eQoKr65b29hq4VXOx11eH9bWYCH%2FBeKN6cq3%2FLENeH2Aw%2FvlbcZ2QCs9T7lC%2B%2FAMlj0T7NkvLHhZKnnn6zWher4XCip8Y7fzAghwlZKa3eZPOjfmsPdyewAN%2BFZeH0zKj%2FWrpbx8mXESm7t2Yq8hWowm80XXaOaUJOEx8F0b2YQtxy5Bf8rY8iOqYFmdbsM%2FJIGSeQNHX3kb6kmJFFbTpUIlEWtN1bVodyOF7yEhQmNUNp7sGFHX75JqVVjD%2FxMLGBjqkAdE8TsAMSXPPkKjhHW5AW%2FAigdpDmABHYnTvCQaoVggfO1DpSa1k408fV5MKMy16mhlr9soAZhxPfDBVxPUn2peGXja5JLRYsj%2FTBm27rPNgci%2Fllt6a7lu%2FfZUCZKUF1%2FfTt4jzfpVTXokNfl%2BI6JI%2FWGe39rxBhevJ%2FXPRW0opKOh95BHCLPIiwshrEWjfSHtIDFZBtwmyy3BO552XPurkP5mT&X-Amz-Signature=7233629dce11f3d6bd2368a2b852bffc3f0263bc73b605456ca6a591be4a004d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634CZ3Z5Y%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdpIO9xpyZKdppUCCT8OxiHqJ8LX%2B7OsQ%2FCd30bbmOSQIhALIm1NwwcOGizKjmZu7saIA%2BJV9CoRCEOmqn2K8GuHIJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx2uvus2OaJMgDVMo4q3AOHERl2lxvIyg4OiHhNGTW2aFtz35wxrlPJlhoSIO9n4eK8ldxeRg8PLdey0iXhE3u39aJWuYzufQx1qQ1vf2Xpn5LfIJqpmOpMJa4Zoh6SBd2lecJC5KWglG7YUOpQJthh0lrMIA8bJ0TB78YfJOLXtIVXpVMlg5%2FJdhh7G2io0y5L9tuzOrD3yJ8sZ8Kz8skrx%2BCzM0%2FRi6v34ngLMITgWKkW%2FXPnhk%2Bok56X38AZE3hMvcrko%2BFtl3lvURER1VMh7Un9f97nr%2FPZbcoR7Q8gDbbk0yTHvPxW5K6Wgfv4WMKZla1t92ZxzvMD7TXczacIvVYPmsLe%2FSki2G%2Fv9SaH4yy6%2BVrPrAsvE68v7CGVnthuNkJbNW9bQ%2Bj%2FK6KcUn8eQoKr65b29hq4VXOx11eH9bWYCH%2FBeKN6cq3%2FLENeH2Aw%2FvlbcZ2QCs9T7lC%2B%2FAMlj0T7NkvLHhZKnnn6zWher4XCip8Y7fzAghwlZKa3eZPOjfmsPdyewAN%2BFZeH0zKj%2FWrpbx8mXESm7t2Yq8hWowm80XXaOaUJOEx8F0b2YQtxy5Bf8rY8iOqYFmdbsM%2FJIGSeQNHX3kb6kmJFFbTpUIlEWtN1bVodyOF7yEhQmNUNp7sGFHX75JqVVjD%2FxMLGBjqkAdE8TsAMSXPPkKjhHW5AW%2FAigdpDmABHYnTvCQaoVggfO1DpSa1k408fV5MKMy16mhlr9soAZhxPfDBVxPUn2peGXja5JLRYsj%2FTBm27rPNgci%2Fllt6a7lu%2FfZUCZKUF1%2FfTt4jzfpVTXokNfl%2BI6JI%2FWGe39rxBhevJ%2FXPRW0opKOh95BHCLPIiwshrEWjfSHtIDFZBtwmyy3BO552XPurkP5mT&X-Amz-Signature=1ed765413c941cdd84511bd28c6f6bdb4760175a532a510d1cf9d28ae9b0a972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634CZ3Z5Y%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdpIO9xpyZKdppUCCT8OxiHqJ8LX%2B7OsQ%2FCd30bbmOSQIhALIm1NwwcOGizKjmZu7saIA%2BJV9CoRCEOmqn2K8GuHIJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx2uvus2OaJMgDVMo4q3AOHERl2lxvIyg4OiHhNGTW2aFtz35wxrlPJlhoSIO9n4eK8ldxeRg8PLdey0iXhE3u39aJWuYzufQx1qQ1vf2Xpn5LfIJqpmOpMJa4Zoh6SBd2lecJC5KWglG7YUOpQJthh0lrMIA8bJ0TB78YfJOLXtIVXpVMlg5%2FJdhh7G2io0y5L9tuzOrD3yJ8sZ8Kz8skrx%2BCzM0%2FRi6v34ngLMITgWKkW%2FXPnhk%2Bok56X38AZE3hMvcrko%2BFtl3lvURER1VMh7Un9f97nr%2FPZbcoR7Q8gDbbk0yTHvPxW5K6Wgfv4WMKZla1t92ZxzvMD7TXczacIvVYPmsLe%2FSki2G%2Fv9SaH4yy6%2BVrPrAsvE68v7CGVnthuNkJbNW9bQ%2Bj%2FK6KcUn8eQoKr65b29hq4VXOx11eH9bWYCH%2FBeKN6cq3%2FLENeH2Aw%2FvlbcZ2QCs9T7lC%2B%2FAMlj0T7NkvLHhZKnnn6zWher4XCip8Y7fzAghwlZKa3eZPOjfmsPdyewAN%2BFZeH0zKj%2FWrpbx8mXESm7t2Yq8hWowm80XXaOaUJOEx8F0b2YQtxy5Bf8rY8iOqYFmdbsM%2FJIGSeQNHX3kb6kmJFFbTpUIlEWtN1bVodyOF7yEhQmNUNp7sGFHX75JqVVjD%2FxMLGBjqkAdE8TsAMSXPPkKjhHW5AW%2FAigdpDmABHYnTvCQaoVggfO1DpSa1k408fV5MKMy16mhlr9soAZhxPfDBVxPUn2peGXja5JLRYsj%2FTBm27rPNgci%2Fllt6a7lu%2FfZUCZKUF1%2FfTt4jzfpVTXokNfl%2BI6JI%2FWGe39rxBhevJ%2FXPRW0opKOh95BHCLPIiwshrEWjfSHtIDFZBtwmyy3BO552XPurkP5mT&X-Amz-Signature=4f2c60dde6fb553fefd7326f3b259d4e2d3f6cae0ef5fe2af9617ffc257a86d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634CZ3Z5Y%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdpIO9xpyZKdppUCCT8OxiHqJ8LX%2B7OsQ%2FCd30bbmOSQIhALIm1NwwcOGizKjmZu7saIA%2BJV9CoRCEOmqn2K8GuHIJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx2uvus2OaJMgDVMo4q3AOHERl2lxvIyg4OiHhNGTW2aFtz35wxrlPJlhoSIO9n4eK8ldxeRg8PLdey0iXhE3u39aJWuYzufQx1qQ1vf2Xpn5LfIJqpmOpMJa4Zoh6SBd2lecJC5KWglG7YUOpQJthh0lrMIA8bJ0TB78YfJOLXtIVXpVMlg5%2FJdhh7G2io0y5L9tuzOrD3yJ8sZ8Kz8skrx%2BCzM0%2FRi6v34ngLMITgWKkW%2FXPnhk%2Bok56X38AZE3hMvcrko%2BFtl3lvURER1VMh7Un9f97nr%2FPZbcoR7Q8gDbbk0yTHvPxW5K6Wgfv4WMKZla1t92ZxzvMD7TXczacIvVYPmsLe%2FSki2G%2Fv9SaH4yy6%2BVrPrAsvE68v7CGVnthuNkJbNW9bQ%2Bj%2FK6KcUn8eQoKr65b29hq4VXOx11eH9bWYCH%2FBeKN6cq3%2FLENeH2Aw%2FvlbcZ2QCs9T7lC%2B%2FAMlj0T7NkvLHhZKnnn6zWher4XCip8Y7fzAghwlZKa3eZPOjfmsPdyewAN%2BFZeH0zKj%2FWrpbx8mXESm7t2Yq8hWowm80XXaOaUJOEx8F0b2YQtxy5Bf8rY8iOqYFmdbsM%2FJIGSeQNHX3kb6kmJFFbTpUIlEWtN1bVodyOF7yEhQmNUNp7sGFHX75JqVVjD%2FxMLGBjqkAdE8TsAMSXPPkKjhHW5AW%2FAigdpDmABHYnTvCQaoVggfO1DpSa1k408fV5MKMy16mhlr9soAZhxPfDBVxPUn2peGXja5JLRYsj%2FTBm27rPNgci%2Fllt6a7lu%2FfZUCZKUF1%2FfTt4jzfpVTXokNfl%2BI6JI%2FWGe39rxBhevJ%2FXPRW0opKOh95BHCLPIiwshrEWjfSHtIDFZBtwmyy3BO552XPurkP5mT&X-Amz-Signature=1b166365999efda51f29e21e2658521a9a5caf6befd555470c14208587122082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

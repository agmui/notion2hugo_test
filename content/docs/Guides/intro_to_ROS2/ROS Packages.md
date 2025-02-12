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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6Q4IKDZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClL5ue81RgE5nOr%2BHs1%2F1Ry8yUv%2B0m5EeEiwQ%2FYTlZZgIhAIDcgt%2BwwUabQMp8%2F0t4W5k2aUlqCR27%2BtTV%2FjrVJ824KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLgkn%2FEAoPuN9rIcEq3AO7d%2BRQd7K%2FYTzlNThqZoro4p2TCorcpFsa0dm1ZTPXo87ec9zUXojXENEcndlQHspSEaiGIVBjZMmCB1IYerpkR1QgVEbq89eTjddNZzJ6G120nI%2FSDVfdTVW0GhYFCSgugQmR5frF%2BXuuhPalifSsvF4pzql%2F2tfQL2M3LcrWHzMJ3spO9seOLSyHOObem4gl%2FgowiWdTi2pbIG0PuhaA8IWG3pmNJ8at1%2FGCb5e6j38L5htXLElC%2BfvvHKHggGiNiz0TecyFLd9QH5PDL7yfnJ%2BYCWPAPnlZSs1lVGJAOjNVGfZnFGElplnOGDZC3%2FjWY%2BI14oPPVF17VysR0%2Bbx8bxmePn1GZDrV6RY6NFS5MCwLqeo0ob0dd%2F8hr7Kfz66l1DLcYOH9Pcet%2F49IIRnPY56H4NqhRZVCMHVx0siFStVoNgIhWsckpmH8f7hFubKra6zWTvnTmEtSX3X3kG%2F2FWODkaRoux1BD%2BDpJwVpqY1iekqsQhQViWCRjGdbu0NUdheqUPVe5gAkchydA%2FzB7jOIXhNMiOkQV1g1XY60uLZ4lG3Hv2lBBTYO6rAqdO3QxgQBgplnQKAmStOwCcdV6BgSBkIxYB%2BG%2FtTZfbQ3nfzF7%2B8By17teg8rjD7xbS9BjqkAdFvYvhigtvNmNZy%2BhORFlYyHQv50b3FCOxlEMtX4s2rRICmquyqO865o6QXOHuNP1l79nvG9nfeW3WPj3vVHUvVEJU0Fd5FHzBYcvBICyMxfDNJrpVt7B%2B4UNuDrL28KrjNvkqiOLiPY%2BzGKQp3as1lCyK8nHKXWHLOSWwvHN0mHwvd9Mupr75zbfEe9oVRRkAkMSAX%2FfytrsmgV401bIjOiP%2FG&X-Amz-Signature=50ca2f3983c6d821cc75e690efce772e7e19b011e7a1cb609c710da9c95b48a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6Q4IKDZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClL5ue81RgE5nOr%2BHs1%2F1Ry8yUv%2B0m5EeEiwQ%2FYTlZZgIhAIDcgt%2BwwUabQMp8%2F0t4W5k2aUlqCR27%2BtTV%2FjrVJ824KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLgkn%2FEAoPuN9rIcEq3AO7d%2BRQd7K%2FYTzlNThqZoro4p2TCorcpFsa0dm1ZTPXo87ec9zUXojXENEcndlQHspSEaiGIVBjZMmCB1IYerpkR1QgVEbq89eTjddNZzJ6G120nI%2FSDVfdTVW0GhYFCSgugQmR5frF%2BXuuhPalifSsvF4pzql%2F2tfQL2M3LcrWHzMJ3spO9seOLSyHOObem4gl%2FgowiWdTi2pbIG0PuhaA8IWG3pmNJ8at1%2FGCb5e6j38L5htXLElC%2BfvvHKHggGiNiz0TecyFLd9QH5PDL7yfnJ%2BYCWPAPnlZSs1lVGJAOjNVGfZnFGElplnOGDZC3%2FjWY%2BI14oPPVF17VysR0%2Bbx8bxmePn1GZDrV6RY6NFS5MCwLqeo0ob0dd%2F8hr7Kfz66l1DLcYOH9Pcet%2F49IIRnPY56H4NqhRZVCMHVx0siFStVoNgIhWsckpmH8f7hFubKra6zWTvnTmEtSX3X3kG%2F2FWODkaRoux1BD%2BDpJwVpqY1iekqsQhQViWCRjGdbu0NUdheqUPVe5gAkchydA%2FzB7jOIXhNMiOkQV1g1XY60uLZ4lG3Hv2lBBTYO6rAqdO3QxgQBgplnQKAmStOwCcdV6BgSBkIxYB%2BG%2FtTZfbQ3nfzF7%2B8By17teg8rjD7xbS9BjqkAdFvYvhigtvNmNZy%2BhORFlYyHQv50b3FCOxlEMtX4s2rRICmquyqO865o6QXOHuNP1l79nvG9nfeW3WPj3vVHUvVEJU0Fd5FHzBYcvBICyMxfDNJrpVt7B%2B4UNuDrL28KrjNvkqiOLiPY%2BzGKQp3as1lCyK8nHKXWHLOSWwvHN0mHwvd9Mupr75zbfEe9oVRRkAkMSAX%2FfytrsmgV401bIjOiP%2FG&X-Amz-Signature=25fc5a65864a95425e1f57db92e653748d8a47f00b33dac0dbf27f33f249bfe4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6Q4IKDZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClL5ue81RgE5nOr%2BHs1%2F1Ry8yUv%2B0m5EeEiwQ%2FYTlZZgIhAIDcgt%2BwwUabQMp8%2F0t4W5k2aUlqCR27%2BtTV%2FjrVJ824KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLgkn%2FEAoPuN9rIcEq3AO7d%2BRQd7K%2FYTzlNThqZoro4p2TCorcpFsa0dm1ZTPXo87ec9zUXojXENEcndlQHspSEaiGIVBjZMmCB1IYerpkR1QgVEbq89eTjddNZzJ6G120nI%2FSDVfdTVW0GhYFCSgugQmR5frF%2BXuuhPalifSsvF4pzql%2F2tfQL2M3LcrWHzMJ3spO9seOLSyHOObem4gl%2FgowiWdTi2pbIG0PuhaA8IWG3pmNJ8at1%2FGCb5e6j38L5htXLElC%2BfvvHKHggGiNiz0TecyFLd9QH5PDL7yfnJ%2BYCWPAPnlZSs1lVGJAOjNVGfZnFGElplnOGDZC3%2FjWY%2BI14oPPVF17VysR0%2Bbx8bxmePn1GZDrV6RY6NFS5MCwLqeo0ob0dd%2F8hr7Kfz66l1DLcYOH9Pcet%2F49IIRnPY56H4NqhRZVCMHVx0siFStVoNgIhWsckpmH8f7hFubKra6zWTvnTmEtSX3X3kG%2F2FWODkaRoux1BD%2BDpJwVpqY1iekqsQhQViWCRjGdbu0NUdheqUPVe5gAkchydA%2FzB7jOIXhNMiOkQV1g1XY60uLZ4lG3Hv2lBBTYO6rAqdO3QxgQBgplnQKAmStOwCcdV6BgSBkIxYB%2BG%2FtTZfbQ3nfzF7%2B8By17teg8rjD7xbS9BjqkAdFvYvhigtvNmNZy%2BhORFlYyHQv50b3FCOxlEMtX4s2rRICmquyqO865o6QXOHuNP1l79nvG9nfeW3WPj3vVHUvVEJU0Fd5FHzBYcvBICyMxfDNJrpVt7B%2B4UNuDrL28KrjNvkqiOLiPY%2BzGKQp3as1lCyK8nHKXWHLOSWwvHN0mHwvd9Mupr75zbfEe9oVRRkAkMSAX%2FfytrsmgV401bIjOiP%2FG&X-Amz-Signature=dda2b1416fc0be530be056b32cf48bf158406f63f27147dab815e92301f20b17&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6Q4IKDZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClL5ue81RgE5nOr%2BHs1%2F1Ry8yUv%2B0m5EeEiwQ%2FYTlZZgIhAIDcgt%2BwwUabQMp8%2F0t4W5k2aUlqCR27%2BtTV%2FjrVJ824KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLgkn%2FEAoPuN9rIcEq3AO7d%2BRQd7K%2FYTzlNThqZoro4p2TCorcpFsa0dm1ZTPXo87ec9zUXojXENEcndlQHspSEaiGIVBjZMmCB1IYerpkR1QgVEbq89eTjddNZzJ6G120nI%2FSDVfdTVW0GhYFCSgugQmR5frF%2BXuuhPalifSsvF4pzql%2F2tfQL2M3LcrWHzMJ3spO9seOLSyHOObem4gl%2FgowiWdTi2pbIG0PuhaA8IWG3pmNJ8at1%2FGCb5e6j38L5htXLElC%2BfvvHKHggGiNiz0TecyFLd9QH5PDL7yfnJ%2BYCWPAPnlZSs1lVGJAOjNVGfZnFGElplnOGDZC3%2FjWY%2BI14oPPVF17VysR0%2Bbx8bxmePn1GZDrV6RY6NFS5MCwLqeo0ob0dd%2F8hr7Kfz66l1DLcYOH9Pcet%2F49IIRnPY56H4NqhRZVCMHVx0siFStVoNgIhWsckpmH8f7hFubKra6zWTvnTmEtSX3X3kG%2F2FWODkaRoux1BD%2BDpJwVpqY1iekqsQhQViWCRjGdbu0NUdheqUPVe5gAkchydA%2FzB7jOIXhNMiOkQV1g1XY60uLZ4lG3Hv2lBBTYO6rAqdO3QxgQBgplnQKAmStOwCcdV6BgSBkIxYB%2BG%2FtTZfbQ3nfzF7%2B8By17teg8rjD7xbS9BjqkAdFvYvhigtvNmNZy%2BhORFlYyHQv50b3FCOxlEMtX4s2rRICmquyqO865o6QXOHuNP1l79nvG9nfeW3WPj3vVHUvVEJU0Fd5FHzBYcvBICyMxfDNJrpVt7B%2B4UNuDrL28KrjNvkqiOLiPY%2BzGKQp3as1lCyK8nHKXWHLOSWwvHN0mHwvd9Mupr75zbfEe9oVRRkAkMSAX%2FfytrsmgV401bIjOiP%2FG&X-Amz-Signature=727fb17aadb7ac76d1e7cbcdb09fd7242f6ff3512872e53275594b830c95883a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6Q4IKDZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClL5ue81RgE5nOr%2BHs1%2F1Ry8yUv%2B0m5EeEiwQ%2FYTlZZgIhAIDcgt%2BwwUabQMp8%2F0t4W5k2aUlqCR27%2BtTV%2FjrVJ824KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLgkn%2FEAoPuN9rIcEq3AO7d%2BRQd7K%2FYTzlNThqZoro4p2TCorcpFsa0dm1ZTPXo87ec9zUXojXENEcndlQHspSEaiGIVBjZMmCB1IYerpkR1QgVEbq89eTjddNZzJ6G120nI%2FSDVfdTVW0GhYFCSgugQmR5frF%2BXuuhPalifSsvF4pzql%2F2tfQL2M3LcrWHzMJ3spO9seOLSyHOObem4gl%2FgowiWdTi2pbIG0PuhaA8IWG3pmNJ8at1%2FGCb5e6j38L5htXLElC%2BfvvHKHggGiNiz0TecyFLd9QH5PDL7yfnJ%2BYCWPAPnlZSs1lVGJAOjNVGfZnFGElplnOGDZC3%2FjWY%2BI14oPPVF17VysR0%2Bbx8bxmePn1GZDrV6RY6NFS5MCwLqeo0ob0dd%2F8hr7Kfz66l1DLcYOH9Pcet%2F49IIRnPY56H4NqhRZVCMHVx0siFStVoNgIhWsckpmH8f7hFubKra6zWTvnTmEtSX3X3kG%2F2FWODkaRoux1BD%2BDpJwVpqY1iekqsQhQViWCRjGdbu0NUdheqUPVe5gAkchydA%2FzB7jOIXhNMiOkQV1g1XY60uLZ4lG3Hv2lBBTYO6rAqdO3QxgQBgplnQKAmStOwCcdV6BgSBkIxYB%2BG%2FtTZfbQ3nfzF7%2B8By17teg8rjD7xbS9BjqkAdFvYvhigtvNmNZy%2BhORFlYyHQv50b3FCOxlEMtX4s2rRICmquyqO865o6QXOHuNP1l79nvG9nfeW3WPj3vVHUvVEJU0Fd5FHzBYcvBICyMxfDNJrpVt7B%2B4UNuDrL28KrjNvkqiOLiPY%2BzGKQp3as1lCyK8nHKXWHLOSWwvHN0mHwvd9Mupr75zbfEe9oVRRkAkMSAX%2FfytrsmgV401bIjOiP%2FG&X-Amz-Signature=f964eaf8ff7ed3028d754923708d03d45d2e9ec4cb7ea22bebe277e4e52d9a50&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6Q4IKDZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClL5ue81RgE5nOr%2BHs1%2F1Ry8yUv%2B0m5EeEiwQ%2FYTlZZgIhAIDcgt%2BwwUabQMp8%2F0t4W5k2aUlqCR27%2BtTV%2FjrVJ824KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLgkn%2FEAoPuN9rIcEq3AO7d%2BRQd7K%2FYTzlNThqZoro4p2TCorcpFsa0dm1ZTPXo87ec9zUXojXENEcndlQHspSEaiGIVBjZMmCB1IYerpkR1QgVEbq89eTjddNZzJ6G120nI%2FSDVfdTVW0GhYFCSgugQmR5frF%2BXuuhPalifSsvF4pzql%2F2tfQL2M3LcrWHzMJ3spO9seOLSyHOObem4gl%2FgowiWdTi2pbIG0PuhaA8IWG3pmNJ8at1%2FGCb5e6j38L5htXLElC%2BfvvHKHggGiNiz0TecyFLd9QH5PDL7yfnJ%2BYCWPAPnlZSs1lVGJAOjNVGfZnFGElplnOGDZC3%2FjWY%2BI14oPPVF17VysR0%2Bbx8bxmePn1GZDrV6RY6NFS5MCwLqeo0ob0dd%2F8hr7Kfz66l1DLcYOH9Pcet%2F49IIRnPY56H4NqhRZVCMHVx0siFStVoNgIhWsckpmH8f7hFubKra6zWTvnTmEtSX3X3kG%2F2FWODkaRoux1BD%2BDpJwVpqY1iekqsQhQViWCRjGdbu0NUdheqUPVe5gAkchydA%2FzB7jOIXhNMiOkQV1g1XY60uLZ4lG3Hv2lBBTYO6rAqdO3QxgQBgplnQKAmStOwCcdV6BgSBkIxYB%2BG%2FtTZfbQ3nfzF7%2B8By17teg8rjD7xbS9BjqkAdFvYvhigtvNmNZy%2BhORFlYyHQv50b3FCOxlEMtX4s2rRICmquyqO865o6QXOHuNP1l79nvG9nfeW3WPj3vVHUvVEJU0Fd5FHzBYcvBICyMxfDNJrpVt7B%2B4UNuDrL28KrjNvkqiOLiPY%2BzGKQp3as1lCyK8nHKXWHLOSWwvHN0mHwvd9Mupr75zbfEe9oVRRkAkMSAX%2FfytrsmgV401bIjOiP%2FG&X-Amz-Signature=548debb830de9a20bbcd15dd21ee18fd468f747d78d553bcc84452bcd6de4770&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6Q4IKDZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClL5ue81RgE5nOr%2BHs1%2F1Ry8yUv%2B0m5EeEiwQ%2FYTlZZgIhAIDcgt%2BwwUabQMp8%2F0t4W5k2aUlqCR27%2BtTV%2FjrVJ824KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLgkn%2FEAoPuN9rIcEq3AO7d%2BRQd7K%2FYTzlNThqZoro4p2TCorcpFsa0dm1ZTPXo87ec9zUXojXENEcndlQHspSEaiGIVBjZMmCB1IYerpkR1QgVEbq89eTjddNZzJ6G120nI%2FSDVfdTVW0GhYFCSgugQmR5frF%2BXuuhPalifSsvF4pzql%2F2tfQL2M3LcrWHzMJ3spO9seOLSyHOObem4gl%2FgowiWdTi2pbIG0PuhaA8IWG3pmNJ8at1%2FGCb5e6j38L5htXLElC%2BfvvHKHggGiNiz0TecyFLd9QH5PDL7yfnJ%2BYCWPAPnlZSs1lVGJAOjNVGfZnFGElplnOGDZC3%2FjWY%2BI14oPPVF17VysR0%2Bbx8bxmePn1GZDrV6RY6NFS5MCwLqeo0ob0dd%2F8hr7Kfz66l1DLcYOH9Pcet%2F49IIRnPY56H4NqhRZVCMHVx0siFStVoNgIhWsckpmH8f7hFubKra6zWTvnTmEtSX3X3kG%2F2FWODkaRoux1BD%2BDpJwVpqY1iekqsQhQViWCRjGdbu0NUdheqUPVe5gAkchydA%2FzB7jOIXhNMiOkQV1g1XY60uLZ4lG3Hv2lBBTYO6rAqdO3QxgQBgplnQKAmStOwCcdV6BgSBkIxYB%2BG%2FtTZfbQ3nfzF7%2B8By17teg8rjD7xbS9BjqkAdFvYvhigtvNmNZy%2BhORFlYyHQv50b3FCOxlEMtX4s2rRICmquyqO865o6QXOHuNP1l79nvG9nfeW3WPj3vVHUvVEJU0Fd5FHzBYcvBICyMxfDNJrpVt7B%2B4UNuDrL28KrjNvkqiOLiPY%2BzGKQp3as1lCyK8nHKXWHLOSWwvHN0mHwvd9Mupr75zbfEe9oVRRkAkMSAX%2FfytrsmgV401bIjOiP%2FG&X-Amz-Signature=fc7ae800d6f314bd793fb612ec27a12b464d7c4c8f4d22f643e4663fb43d6b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

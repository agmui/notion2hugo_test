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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WRJPGEW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwwTaE0zdphcdV6t1yCNWT%2F3BhfsqriBNB3vamA8D20AiBBrYOTD%2F8ypZpt0vhMUCqfYYEzQdpgFukA86zUzwgkmyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hKMkkho1azX37AuKtwDHbojmuLe%2BEg%2F37N5IxI%2F81GY4DvcXfWMe9X439IFBR9rCSs%2ByqQnTqVE1f0dsrk7ltREwcT8u2UguwMIlVE9kPldl9JO5jz6ANwyO%2BbrwtRT0GuDGettYm8KebZ%2BceT7p03CreAC5H3yefujeo2CnbkLBI4VAglp7ham8xiU0rXHlSXTMNhd3MI5AzH9JHRWMwaXy1NRw7B5BTQQu98nTe%2BhtPL9FfjhgyKojrt%2F%2FsBwv4sFVOO%2FYZQeNOYm9IX3c8HPjsnNVSM723uD5Cp%2FQmn32Hy1Bsi%2Fs0GHNaLZ21fz9Hd9Xqm3vASvNRI%2F2ThmeeyIcUnIo3xDXPXRZZb3rat8KklshTOBnfLDYATbBE6nq8RhIGPuhJC6Cb7QyY0rUrVGFjco%2FgthyKl7QCOCtycjE531ftBXIS0gNAuIj4ob9T0OdCM12gMjTXKxAnV9onoQGM3Fw1vncvzH1nrLY28ohos3s7GX7A9EqoRt%2F%2BsvfTmumC0kZLX6FIml2R%2Bn4SKETTe0yAZ0P%2FSkbXY6SUz2bpvaeYsZFYPzMTLh5gfPfNgWSrnWXFJXcWNo2uhB8ua4LdUvsdIC1713WrRbBta52jTnkZV0SfbhSRZlT9Ib8O6BfTKOSygRmt4wo8DRvgY6pgFxTjt2LzjZZ1Tc6btYNtgBH3BpCW4H6HXk6OC9U9D3yHIQQvbwwgzFMTVyGvq3PhUVXL9wFDD3iU8qWrhGm5tU%2BgOC%2BitFMcL5%2BpSOg4J43%2BYh%2FWyaJI16lcsnwJYNoTW%2Fdkf%2F898OG96hDIQ4%2FitRn5mKac6DB7YiT%2BHlgkR0jrcnn5i5jvOk9M9p9EWjiaZ8facrh7AzwobnSFttBkT%2Byh3J8RaV&X-Amz-Signature=514c5a96903b434859200c628424597163d7b305b93f4047a048b45692f0f3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WRJPGEW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwwTaE0zdphcdV6t1yCNWT%2F3BhfsqriBNB3vamA8D20AiBBrYOTD%2F8ypZpt0vhMUCqfYYEzQdpgFukA86zUzwgkmyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hKMkkho1azX37AuKtwDHbojmuLe%2BEg%2F37N5IxI%2F81GY4DvcXfWMe9X439IFBR9rCSs%2ByqQnTqVE1f0dsrk7ltREwcT8u2UguwMIlVE9kPldl9JO5jz6ANwyO%2BbrwtRT0GuDGettYm8KebZ%2BceT7p03CreAC5H3yefujeo2CnbkLBI4VAglp7ham8xiU0rXHlSXTMNhd3MI5AzH9JHRWMwaXy1NRw7B5BTQQu98nTe%2BhtPL9FfjhgyKojrt%2F%2FsBwv4sFVOO%2FYZQeNOYm9IX3c8HPjsnNVSM723uD5Cp%2FQmn32Hy1Bsi%2Fs0GHNaLZ21fz9Hd9Xqm3vASvNRI%2F2ThmeeyIcUnIo3xDXPXRZZb3rat8KklshTOBnfLDYATbBE6nq8RhIGPuhJC6Cb7QyY0rUrVGFjco%2FgthyKl7QCOCtycjE531ftBXIS0gNAuIj4ob9T0OdCM12gMjTXKxAnV9onoQGM3Fw1vncvzH1nrLY28ohos3s7GX7A9EqoRt%2F%2BsvfTmumC0kZLX6FIml2R%2Bn4SKETTe0yAZ0P%2FSkbXY6SUz2bpvaeYsZFYPzMTLh5gfPfNgWSrnWXFJXcWNo2uhB8ua4LdUvsdIC1713WrRbBta52jTnkZV0SfbhSRZlT9Ib8O6BfTKOSygRmt4wo8DRvgY6pgFxTjt2LzjZZ1Tc6btYNtgBH3BpCW4H6HXk6OC9U9D3yHIQQvbwwgzFMTVyGvq3PhUVXL9wFDD3iU8qWrhGm5tU%2BgOC%2BitFMcL5%2BpSOg4J43%2BYh%2FWyaJI16lcsnwJYNoTW%2Fdkf%2F898OG96hDIQ4%2FitRn5mKac6DB7YiT%2BHlgkR0jrcnn5i5jvOk9M9p9EWjiaZ8facrh7AzwobnSFttBkT%2Byh3J8RaV&X-Amz-Signature=dcf6cba1e13810a1352edaf4dd70f91f9ef99743a137c30e324d19558cf640e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WRJPGEW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwwTaE0zdphcdV6t1yCNWT%2F3BhfsqriBNB3vamA8D20AiBBrYOTD%2F8ypZpt0vhMUCqfYYEzQdpgFukA86zUzwgkmyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hKMkkho1azX37AuKtwDHbojmuLe%2BEg%2F37N5IxI%2F81GY4DvcXfWMe9X439IFBR9rCSs%2ByqQnTqVE1f0dsrk7ltREwcT8u2UguwMIlVE9kPldl9JO5jz6ANwyO%2BbrwtRT0GuDGettYm8KebZ%2BceT7p03CreAC5H3yefujeo2CnbkLBI4VAglp7ham8xiU0rXHlSXTMNhd3MI5AzH9JHRWMwaXy1NRw7B5BTQQu98nTe%2BhtPL9FfjhgyKojrt%2F%2FsBwv4sFVOO%2FYZQeNOYm9IX3c8HPjsnNVSM723uD5Cp%2FQmn32Hy1Bsi%2Fs0GHNaLZ21fz9Hd9Xqm3vASvNRI%2F2ThmeeyIcUnIo3xDXPXRZZb3rat8KklshTOBnfLDYATbBE6nq8RhIGPuhJC6Cb7QyY0rUrVGFjco%2FgthyKl7QCOCtycjE531ftBXIS0gNAuIj4ob9T0OdCM12gMjTXKxAnV9onoQGM3Fw1vncvzH1nrLY28ohos3s7GX7A9EqoRt%2F%2BsvfTmumC0kZLX6FIml2R%2Bn4SKETTe0yAZ0P%2FSkbXY6SUz2bpvaeYsZFYPzMTLh5gfPfNgWSrnWXFJXcWNo2uhB8ua4LdUvsdIC1713WrRbBta52jTnkZV0SfbhSRZlT9Ib8O6BfTKOSygRmt4wo8DRvgY6pgFxTjt2LzjZZ1Tc6btYNtgBH3BpCW4H6HXk6OC9U9D3yHIQQvbwwgzFMTVyGvq3PhUVXL9wFDD3iU8qWrhGm5tU%2BgOC%2BitFMcL5%2BpSOg4J43%2BYh%2FWyaJI16lcsnwJYNoTW%2Fdkf%2F898OG96hDIQ4%2FitRn5mKac6DB7YiT%2BHlgkR0jrcnn5i5jvOk9M9p9EWjiaZ8facrh7AzwobnSFttBkT%2Byh3J8RaV&X-Amz-Signature=f5743df8a0b8944bc7b8f524dcd140d00e2b06399c91812505a687319f93f7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WRJPGEW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwwTaE0zdphcdV6t1yCNWT%2F3BhfsqriBNB3vamA8D20AiBBrYOTD%2F8ypZpt0vhMUCqfYYEzQdpgFukA86zUzwgkmyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hKMkkho1azX37AuKtwDHbojmuLe%2BEg%2F37N5IxI%2F81GY4DvcXfWMe9X439IFBR9rCSs%2ByqQnTqVE1f0dsrk7ltREwcT8u2UguwMIlVE9kPldl9JO5jz6ANwyO%2BbrwtRT0GuDGettYm8KebZ%2BceT7p03CreAC5H3yefujeo2CnbkLBI4VAglp7ham8xiU0rXHlSXTMNhd3MI5AzH9JHRWMwaXy1NRw7B5BTQQu98nTe%2BhtPL9FfjhgyKojrt%2F%2FsBwv4sFVOO%2FYZQeNOYm9IX3c8HPjsnNVSM723uD5Cp%2FQmn32Hy1Bsi%2Fs0GHNaLZ21fz9Hd9Xqm3vASvNRI%2F2ThmeeyIcUnIo3xDXPXRZZb3rat8KklshTOBnfLDYATbBE6nq8RhIGPuhJC6Cb7QyY0rUrVGFjco%2FgthyKl7QCOCtycjE531ftBXIS0gNAuIj4ob9T0OdCM12gMjTXKxAnV9onoQGM3Fw1vncvzH1nrLY28ohos3s7GX7A9EqoRt%2F%2BsvfTmumC0kZLX6FIml2R%2Bn4SKETTe0yAZ0P%2FSkbXY6SUz2bpvaeYsZFYPzMTLh5gfPfNgWSrnWXFJXcWNo2uhB8ua4LdUvsdIC1713WrRbBta52jTnkZV0SfbhSRZlT9Ib8O6BfTKOSygRmt4wo8DRvgY6pgFxTjt2LzjZZ1Tc6btYNtgBH3BpCW4H6HXk6OC9U9D3yHIQQvbwwgzFMTVyGvq3PhUVXL9wFDD3iU8qWrhGm5tU%2BgOC%2BitFMcL5%2BpSOg4J43%2BYh%2FWyaJI16lcsnwJYNoTW%2Fdkf%2F898OG96hDIQ4%2FitRn5mKac6DB7YiT%2BHlgkR0jrcnn5i5jvOk9M9p9EWjiaZ8facrh7AzwobnSFttBkT%2Byh3J8RaV&X-Amz-Signature=e48749f1b3f7d5a957bb90e1cb9225ce37ad843edb9df3c67ab77b8bec75bfe7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WRJPGEW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwwTaE0zdphcdV6t1yCNWT%2F3BhfsqriBNB3vamA8D20AiBBrYOTD%2F8ypZpt0vhMUCqfYYEzQdpgFukA86zUzwgkmyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hKMkkho1azX37AuKtwDHbojmuLe%2BEg%2F37N5IxI%2F81GY4DvcXfWMe9X439IFBR9rCSs%2ByqQnTqVE1f0dsrk7ltREwcT8u2UguwMIlVE9kPldl9JO5jz6ANwyO%2BbrwtRT0GuDGettYm8KebZ%2BceT7p03CreAC5H3yefujeo2CnbkLBI4VAglp7ham8xiU0rXHlSXTMNhd3MI5AzH9JHRWMwaXy1NRw7B5BTQQu98nTe%2BhtPL9FfjhgyKojrt%2F%2FsBwv4sFVOO%2FYZQeNOYm9IX3c8HPjsnNVSM723uD5Cp%2FQmn32Hy1Bsi%2Fs0GHNaLZ21fz9Hd9Xqm3vASvNRI%2F2ThmeeyIcUnIo3xDXPXRZZb3rat8KklshTOBnfLDYATbBE6nq8RhIGPuhJC6Cb7QyY0rUrVGFjco%2FgthyKl7QCOCtycjE531ftBXIS0gNAuIj4ob9T0OdCM12gMjTXKxAnV9onoQGM3Fw1vncvzH1nrLY28ohos3s7GX7A9EqoRt%2F%2BsvfTmumC0kZLX6FIml2R%2Bn4SKETTe0yAZ0P%2FSkbXY6SUz2bpvaeYsZFYPzMTLh5gfPfNgWSrnWXFJXcWNo2uhB8ua4LdUvsdIC1713WrRbBta52jTnkZV0SfbhSRZlT9Ib8O6BfTKOSygRmt4wo8DRvgY6pgFxTjt2LzjZZ1Tc6btYNtgBH3BpCW4H6HXk6OC9U9D3yHIQQvbwwgzFMTVyGvq3PhUVXL9wFDD3iU8qWrhGm5tU%2BgOC%2BitFMcL5%2BpSOg4J43%2BYh%2FWyaJI16lcsnwJYNoTW%2Fdkf%2F898OG96hDIQ4%2FitRn5mKac6DB7YiT%2BHlgkR0jrcnn5i5jvOk9M9p9EWjiaZ8facrh7AzwobnSFttBkT%2Byh3J8RaV&X-Amz-Signature=7a0960087bb8071177c5cc765b2a86ecad8baad929efd1ea52cd9550995bc038&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WRJPGEW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwwTaE0zdphcdV6t1yCNWT%2F3BhfsqriBNB3vamA8D20AiBBrYOTD%2F8ypZpt0vhMUCqfYYEzQdpgFukA86zUzwgkmyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hKMkkho1azX37AuKtwDHbojmuLe%2BEg%2F37N5IxI%2F81GY4DvcXfWMe9X439IFBR9rCSs%2ByqQnTqVE1f0dsrk7ltREwcT8u2UguwMIlVE9kPldl9JO5jz6ANwyO%2BbrwtRT0GuDGettYm8KebZ%2BceT7p03CreAC5H3yefujeo2CnbkLBI4VAglp7ham8xiU0rXHlSXTMNhd3MI5AzH9JHRWMwaXy1NRw7B5BTQQu98nTe%2BhtPL9FfjhgyKojrt%2F%2FsBwv4sFVOO%2FYZQeNOYm9IX3c8HPjsnNVSM723uD5Cp%2FQmn32Hy1Bsi%2Fs0GHNaLZ21fz9Hd9Xqm3vASvNRI%2F2ThmeeyIcUnIo3xDXPXRZZb3rat8KklshTOBnfLDYATbBE6nq8RhIGPuhJC6Cb7QyY0rUrVGFjco%2FgthyKl7QCOCtycjE531ftBXIS0gNAuIj4ob9T0OdCM12gMjTXKxAnV9onoQGM3Fw1vncvzH1nrLY28ohos3s7GX7A9EqoRt%2F%2BsvfTmumC0kZLX6FIml2R%2Bn4SKETTe0yAZ0P%2FSkbXY6SUz2bpvaeYsZFYPzMTLh5gfPfNgWSrnWXFJXcWNo2uhB8ua4LdUvsdIC1713WrRbBta52jTnkZV0SfbhSRZlT9Ib8O6BfTKOSygRmt4wo8DRvgY6pgFxTjt2LzjZZ1Tc6btYNtgBH3BpCW4H6HXk6OC9U9D3yHIQQvbwwgzFMTVyGvq3PhUVXL9wFDD3iU8qWrhGm5tU%2BgOC%2BitFMcL5%2BpSOg4J43%2BYh%2FWyaJI16lcsnwJYNoTW%2Fdkf%2F898OG96hDIQ4%2FitRn5mKac6DB7YiT%2BHlgkR0jrcnn5i5jvOk9M9p9EWjiaZ8facrh7AzwobnSFttBkT%2Byh3J8RaV&X-Amz-Signature=b12b495a4e6a3bffa3753920019a087b755e8cf0a58e1b2a22e56313ec340cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WRJPGEW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwwTaE0zdphcdV6t1yCNWT%2F3BhfsqriBNB3vamA8D20AiBBrYOTD%2F8ypZpt0vhMUCqfYYEzQdpgFukA86zUzwgkmyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hKMkkho1azX37AuKtwDHbojmuLe%2BEg%2F37N5IxI%2F81GY4DvcXfWMe9X439IFBR9rCSs%2ByqQnTqVE1f0dsrk7ltREwcT8u2UguwMIlVE9kPldl9JO5jz6ANwyO%2BbrwtRT0GuDGettYm8KebZ%2BceT7p03CreAC5H3yefujeo2CnbkLBI4VAglp7ham8xiU0rXHlSXTMNhd3MI5AzH9JHRWMwaXy1NRw7B5BTQQu98nTe%2BhtPL9FfjhgyKojrt%2F%2FsBwv4sFVOO%2FYZQeNOYm9IX3c8HPjsnNVSM723uD5Cp%2FQmn32Hy1Bsi%2Fs0GHNaLZ21fz9Hd9Xqm3vASvNRI%2F2ThmeeyIcUnIo3xDXPXRZZb3rat8KklshTOBnfLDYATbBE6nq8RhIGPuhJC6Cb7QyY0rUrVGFjco%2FgthyKl7QCOCtycjE531ftBXIS0gNAuIj4ob9T0OdCM12gMjTXKxAnV9onoQGM3Fw1vncvzH1nrLY28ohos3s7GX7A9EqoRt%2F%2BsvfTmumC0kZLX6FIml2R%2Bn4SKETTe0yAZ0P%2FSkbXY6SUz2bpvaeYsZFYPzMTLh5gfPfNgWSrnWXFJXcWNo2uhB8ua4LdUvsdIC1713WrRbBta52jTnkZV0SfbhSRZlT9Ib8O6BfTKOSygRmt4wo8DRvgY6pgFxTjt2LzjZZ1Tc6btYNtgBH3BpCW4H6HXk6OC9U9D3yHIQQvbwwgzFMTVyGvq3PhUVXL9wFDD3iU8qWrhGm5tU%2BgOC%2BitFMcL5%2BpSOg4J43%2BYh%2FWyaJI16lcsnwJYNoTW%2Fdkf%2F898OG96hDIQ4%2FitRn5mKac6DB7YiT%2BHlgkR0jrcnn5i5jvOk9M9p9EWjiaZ8facrh7AzwobnSFttBkT%2Byh3J8RaV&X-Amz-Signature=8faee0d78bde7fd15014ef0ad81d240103042cf4768f49fd545dd5775ebf6544&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

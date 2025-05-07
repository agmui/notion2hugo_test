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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPF75VTI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrZQIkhYQf%2BHXnFq%2Bu49yhN%2BVDz7SIkuai58QzlI24WQIgYJSEkkVmTkwk3iJn7PQMRBR9ZDpW18WIQWJyBFXeniIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCuoBLiAFttyIgFuUCrcAyiyQc2ynvMmEog%2FbX1ctUrkSzfn7Tm6PKGv6eVrGE269sT2zDigqrCOF5%2FsYYpPFUXyFSfi%2FYfdgWCQXDk2vg9yl2tz%2B076EB0L3bUkHXXydQ%2Fhm%2FoVZUW%2FQw6QbyM%2FaINgZejJbmx1egGgmh4djCJm0pJQdm0k1GpczinfSK9UlTgdb8eLC7u2a4IAsDLgPkpldudCy1mcmSodT%2Ba8%2B2AJJ0JIxSEOIi8seVpbgfFScC87%2FLlFHIqULXkNh9%2BqvUNO7tGQGNqmLCPfIjM1BB5G9Cmo50EW6mPq%2FdNJklRkLr6jx%2BYrH7Y5Bl5yg6vGFSCGoH1MVbAMnb3TQuI0UreCLRd7cv2awEOTTgNFGU1ZcwMpmdTUjijGZQEq5vYyCgZ9oeNpW8568I8318VnQDV71r17ypn%2BcpRIrMHa2flGRq1I%2F6tfUvRlP%2BoMj7LJ5wGiGFWXSPy52QsFI9RCOOriK%2BPTXl%2F0E%2FysWs3q2ZUiBySZY30nnqmGXd%2Bq%2FVr9xaKoaQYUYmcissDhoIAVU2BEv6ALdiGiaxsdv6uAL%2FyLBV6Zupp2vq5W5j1wsRY5Xdmrw3tXF%2FGOUVgBI0a92Tm8YnZMtVE32yJX7QxfJO5R09UThu%2FqWMO0OJkkMO%2FG78AGOqUB9oskJ68FG1%2FZDRkrMtemPgNJszP8gvEuX2LCWBRzPYVc%2BiYsj94EYZ%2B9KOUn%2Fn6jkkwPC8JP2S9EllKtr%2B9MEajtjVuja0HZOukki8y0wwaKsUgDa5ruLigv2q8c%2BuZ6otoXHUpmUeETMXf6DZlf9gM0oLv59kPCaxb%2BBkn86TYSqpJGDOtnToTUZrw095In%2Br5zaEoR4WY6hzrK7F1k3QWA3n4p&X-Amz-Signature=8aa54d63387cad90021eb2f4481a0bb6d993e7c7d3db759702353b1e7de814bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPF75VTI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrZQIkhYQf%2BHXnFq%2Bu49yhN%2BVDz7SIkuai58QzlI24WQIgYJSEkkVmTkwk3iJn7PQMRBR9ZDpW18WIQWJyBFXeniIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCuoBLiAFttyIgFuUCrcAyiyQc2ynvMmEog%2FbX1ctUrkSzfn7Tm6PKGv6eVrGE269sT2zDigqrCOF5%2FsYYpPFUXyFSfi%2FYfdgWCQXDk2vg9yl2tz%2B076EB0L3bUkHXXydQ%2Fhm%2FoVZUW%2FQw6QbyM%2FaINgZejJbmx1egGgmh4djCJm0pJQdm0k1GpczinfSK9UlTgdb8eLC7u2a4IAsDLgPkpldudCy1mcmSodT%2Ba8%2B2AJJ0JIxSEOIi8seVpbgfFScC87%2FLlFHIqULXkNh9%2BqvUNO7tGQGNqmLCPfIjM1BB5G9Cmo50EW6mPq%2FdNJklRkLr6jx%2BYrH7Y5Bl5yg6vGFSCGoH1MVbAMnb3TQuI0UreCLRd7cv2awEOTTgNFGU1ZcwMpmdTUjijGZQEq5vYyCgZ9oeNpW8568I8318VnQDV71r17ypn%2BcpRIrMHa2flGRq1I%2F6tfUvRlP%2BoMj7LJ5wGiGFWXSPy52QsFI9RCOOriK%2BPTXl%2F0E%2FysWs3q2ZUiBySZY30nnqmGXd%2Bq%2FVr9xaKoaQYUYmcissDhoIAVU2BEv6ALdiGiaxsdv6uAL%2FyLBV6Zupp2vq5W5j1wsRY5Xdmrw3tXF%2FGOUVgBI0a92Tm8YnZMtVE32yJX7QxfJO5R09UThu%2FqWMO0OJkkMO%2FG78AGOqUB9oskJ68FG1%2FZDRkrMtemPgNJszP8gvEuX2LCWBRzPYVc%2BiYsj94EYZ%2B9KOUn%2Fn6jkkwPC8JP2S9EllKtr%2B9MEajtjVuja0HZOukki8y0wwaKsUgDa5ruLigv2q8c%2BuZ6otoXHUpmUeETMXf6DZlf9gM0oLv59kPCaxb%2BBkn86TYSqpJGDOtnToTUZrw095In%2Br5zaEoR4WY6hzrK7F1k3QWA3n4p&X-Amz-Signature=428488e6345bc206f24f0a82a80680ed709d53199be754fde583ade9adb05636&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPF75VTI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrZQIkhYQf%2BHXnFq%2Bu49yhN%2BVDz7SIkuai58QzlI24WQIgYJSEkkVmTkwk3iJn7PQMRBR9ZDpW18WIQWJyBFXeniIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCuoBLiAFttyIgFuUCrcAyiyQc2ynvMmEog%2FbX1ctUrkSzfn7Tm6PKGv6eVrGE269sT2zDigqrCOF5%2FsYYpPFUXyFSfi%2FYfdgWCQXDk2vg9yl2tz%2B076EB0L3bUkHXXydQ%2Fhm%2FoVZUW%2FQw6QbyM%2FaINgZejJbmx1egGgmh4djCJm0pJQdm0k1GpczinfSK9UlTgdb8eLC7u2a4IAsDLgPkpldudCy1mcmSodT%2Ba8%2B2AJJ0JIxSEOIi8seVpbgfFScC87%2FLlFHIqULXkNh9%2BqvUNO7tGQGNqmLCPfIjM1BB5G9Cmo50EW6mPq%2FdNJklRkLr6jx%2BYrH7Y5Bl5yg6vGFSCGoH1MVbAMnb3TQuI0UreCLRd7cv2awEOTTgNFGU1ZcwMpmdTUjijGZQEq5vYyCgZ9oeNpW8568I8318VnQDV71r17ypn%2BcpRIrMHa2flGRq1I%2F6tfUvRlP%2BoMj7LJ5wGiGFWXSPy52QsFI9RCOOriK%2BPTXl%2F0E%2FysWs3q2ZUiBySZY30nnqmGXd%2Bq%2FVr9xaKoaQYUYmcissDhoIAVU2BEv6ALdiGiaxsdv6uAL%2FyLBV6Zupp2vq5W5j1wsRY5Xdmrw3tXF%2FGOUVgBI0a92Tm8YnZMtVE32yJX7QxfJO5R09UThu%2FqWMO0OJkkMO%2FG78AGOqUB9oskJ68FG1%2FZDRkrMtemPgNJszP8gvEuX2LCWBRzPYVc%2BiYsj94EYZ%2B9KOUn%2Fn6jkkwPC8JP2S9EllKtr%2B9MEajtjVuja0HZOukki8y0wwaKsUgDa5ruLigv2q8c%2BuZ6otoXHUpmUeETMXf6DZlf9gM0oLv59kPCaxb%2BBkn86TYSqpJGDOtnToTUZrw095In%2Br5zaEoR4WY6hzrK7F1k3QWA3n4p&X-Amz-Signature=4d1d969a9d6a205be5a3b111f6dd98de2ed5650dc72d8b8b686af939f593e3a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPF75VTI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrZQIkhYQf%2BHXnFq%2Bu49yhN%2BVDz7SIkuai58QzlI24WQIgYJSEkkVmTkwk3iJn7PQMRBR9ZDpW18WIQWJyBFXeniIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCuoBLiAFttyIgFuUCrcAyiyQc2ynvMmEog%2FbX1ctUrkSzfn7Tm6PKGv6eVrGE269sT2zDigqrCOF5%2FsYYpPFUXyFSfi%2FYfdgWCQXDk2vg9yl2tz%2B076EB0L3bUkHXXydQ%2Fhm%2FoVZUW%2FQw6QbyM%2FaINgZejJbmx1egGgmh4djCJm0pJQdm0k1GpczinfSK9UlTgdb8eLC7u2a4IAsDLgPkpldudCy1mcmSodT%2Ba8%2B2AJJ0JIxSEOIi8seVpbgfFScC87%2FLlFHIqULXkNh9%2BqvUNO7tGQGNqmLCPfIjM1BB5G9Cmo50EW6mPq%2FdNJklRkLr6jx%2BYrH7Y5Bl5yg6vGFSCGoH1MVbAMnb3TQuI0UreCLRd7cv2awEOTTgNFGU1ZcwMpmdTUjijGZQEq5vYyCgZ9oeNpW8568I8318VnQDV71r17ypn%2BcpRIrMHa2flGRq1I%2F6tfUvRlP%2BoMj7LJ5wGiGFWXSPy52QsFI9RCOOriK%2BPTXl%2F0E%2FysWs3q2ZUiBySZY30nnqmGXd%2Bq%2FVr9xaKoaQYUYmcissDhoIAVU2BEv6ALdiGiaxsdv6uAL%2FyLBV6Zupp2vq5W5j1wsRY5Xdmrw3tXF%2FGOUVgBI0a92Tm8YnZMtVE32yJX7QxfJO5R09UThu%2FqWMO0OJkkMO%2FG78AGOqUB9oskJ68FG1%2FZDRkrMtemPgNJszP8gvEuX2LCWBRzPYVc%2BiYsj94EYZ%2B9KOUn%2Fn6jkkwPC8JP2S9EllKtr%2B9MEajtjVuja0HZOukki8y0wwaKsUgDa5ruLigv2q8c%2BuZ6otoXHUpmUeETMXf6DZlf9gM0oLv59kPCaxb%2BBkn86TYSqpJGDOtnToTUZrw095In%2Br5zaEoR4WY6hzrK7F1k3QWA3n4p&X-Amz-Signature=a9c9b7b79db7e02564d82945fc00e073710824510a440fe0fb803af394b6cfd9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPF75VTI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrZQIkhYQf%2BHXnFq%2Bu49yhN%2BVDz7SIkuai58QzlI24WQIgYJSEkkVmTkwk3iJn7PQMRBR9ZDpW18WIQWJyBFXeniIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCuoBLiAFttyIgFuUCrcAyiyQc2ynvMmEog%2FbX1ctUrkSzfn7Tm6PKGv6eVrGE269sT2zDigqrCOF5%2FsYYpPFUXyFSfi%2FYfdgWCQXDk2vg9yl2tz%2B076EB0L3bUkHXXydQ%2Fhm%2FoVZUW%2FQw6QbyM%2FaINgZejJbmx1egGgmh4djCJm0pJQdm0k1GpczinfSK9UlTgdb8eLC7u2a4IAsDLgPkpldudCy1mcmSodT%2Ba8%2B2AJJ0JIxSEOIi8seVpbgfFScC87%2FLlFHIqULXkNh9%2BqvUNO7tGQGNqmLCPfIjM1BB5G9Cmo50EW6mPq%2FdNJklRkLr6jx%2BYrH7Y5Bl5yg6vGFSCGoH1MVbAMnb3TQuI0UreCLRd7cv2awEOTTgNFGU1ZcwMpmdTUjijGZQEq5vYyCgZ9oeNpW8568I8318VnQDV71r17ypn%2BcpRIrMHa2flGRq1I%2F6tfUvRlP%2BoMj7LJ5wGiGFWXSPy52QsFI9RCOOriK%2BPTXl%2F0E%2FysWs3q2ZUiBySZY30nnqmGXd%2Bq%2FVr9xaKoaQYUYmcissDhoIAVU2BEv6ALdiGiaxsdv6uAL%2FyLBV6Zupp2vq5W5j1wsRY5Xdmrw3tXF%2FGOUVgBI0a92Tm8YnZMtVE32yJX7QxfJO5R09UThu%2FqWMO0OJkkMO%2FG78AGOqUB9oskJ68FG1%2FZDRkrMtemPgNJszP8gvEuX2LCWBRzPYVc%2BiYsj94EYZ%2B9KOUn%2Fn6jkkwPC8JP2S9EllKtr%2B9MEajtjVuja0HZOukki8y0wwaKsUgDa5ruLigv2q8c%2BuZ6otoXHUpmUeETMXf6DZlf9gM0oLv59kPCaxb%2BBkn86TYSqpJGDOtnToTUZrw095In%2Br5zaEoR4WY6hzrK7F1k3QWA3n4p&X-Amz-Signature=88ab8acd0590606156abdcdecb4bcf2b803719969a26824543f281892855e21c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPF75VTI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrZQIkhYQf%2BHXnFq%2Bu49yhN%2BVDz7SIkuai58QzlI24WQIgYJSEkkVmTkwk3iJn7PQMRBR9ZDpW18WIQWJyBFXeniIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCuoBLiAFttyIgFuUCrcAyiyQc2ynvMmEog%2FbX1ctUrkSzfn7Tm6PKGv6eVrGE269sT2zDigqrCOF5%2FsYYpPFUXyFSfi%2FYfdgWCQXDk2vg9yl2tz%2B076EB0L3bUkHXXydQ%2Fhm%2FoVZUW%2FQw6QbyM%2FaINgZejJbmx1egGgmh4djCJm0pJQdm0k1GpczinfSK9UlTgdb8eLC7u2a4IAsDLgPkpldudCy1mcmSodT%2Ba8%2B2AJJ0JIxSEOIi8seVpbgfFScC87%2FLlFHIqULXkNh9%2BqvUNO7tGQGNqmLCPfIjM1BB5G9Cmo50EW6mPq%2FdNJklRkLr6jx%2BYrH7Y5Bl5yg6vGFSCGoH1MVbAMnb3TQuI0UreCLRd7cv2awEOTTgNFGU1ZcwMpmdTUjijGZQEq5vYyCgZ9oeNpW8568I8318VnQDV71r17ypn%2BcpRIrMHa2flGRq1I%2F6tfUvRlP%2BoMj7LJ5wGiGFWXSPy52QsFI9RCOOriK%2BPTXl%2F0E%2FysWs3q2ZUiBySZY30nnqmGXd%2Bq%2FVr9xaKoaQYUYmcissDhoIAVU2BEv6ALdiGiaxsdv6uAL%2FyLBV6Zupp2vq5W5j1wsRY5Xdmrw3tXF%2FGOUVgBI0a92Tm8YnZMtVE32yJX7QxfJO5R09UThu%2FqWMO0OJkkMO%2FG78AGOqUB9oskJ68FG1%2FZDRkrMtemPgNJszP8gvEuX2LCWBRzPYVc%2BiYsj94EYZ%2B9KOUn%2Fn6jkkwPC8JP2S9EllKtr%2B9MEajtjVuja0HZOukki8y0wwaKsUgDa5ruLigv2q8c%2BuZ6otoXHUpmUeETMXf6DZlf9gM0oLv59kPCaxb%2BBkn86TYSqpJGDOtnToTUZrw095In%2Br5zaEoR4WY6hzrK7F1k3QWA3n4p&X-Amz-Signature=bad62ed15855d14f852190bafaa4ef2489d6c1d81d628e682fbf1939f4097fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPF75VTI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrZQIkhYQf%2BHXnFq%2Bu49yhN%2BVDz7SIkuai58QzlI24WQIgYJSEkkVmTkwk3iJn7PQMRBR9ZDpW18WIQWJyBFXeniIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCuoBLiAFttyIgFuUCrcAyiyQc2ynvMmEog%2FbX1ctUrkSzfn7Tm6PKGv6eVrGE269sT2zDigqrCOF5%2FsYYpPFUXyFSfi%2FYfdgWCQXDk2vg9yl2tz%2B076EB0L3bUkHXXydQ%2Fhm%2FoVZUW%2FQw6QbyM%2FaINgZejJbmx1egGgmh4djCJm0pJQdm0k1GpczinfSK9UlTgdb8eLC7u2a4IAsDLgPkpldudCy1mcmSodT%2Ba8%2B2AJJ0JIxSEOIi8seVpbgfFScC87%2FLlFHIqULXkNh9%2BqvUNO7tGQGNqmLCPfIjM1BB5G9Cmo50EW6mPq%2FdNJklRkLr6jx%2BYrH7Y5Bl5yg6vGFSCGoH1MVbAMnb3TQuI0UreCLRd7cv2awEOTTgNFGU1ZcwMpmdTUjijGZQEq5vYyCgZ9oeNpW8568I8318VnQDV71r17ypn%2BcpRIrMHa2flGRq1I%2F6tfUvRlP%2BoMj7LJ5wGiGFWXSPy52QsFI9RCOOriK%2BPTXl%2F0E%2FysWs3q2ZUiBySZY30nnqmGXd%2Bq%2FVr9xaKoaQYUYmcissDhoIAVU2BEv6ALdiGiaxsdv6uAL%2FyLBV6Zupp2vq5W5j1wsRY5Xdmrw3tXF%2FGOUVgBI0a92Tm8YnZMtVE32yJX7QxfJO5R09UThu%2FqWMO0OJkkMO%2FG78AGOqUB9oskJ68FG1%2FZDRkrMtemPgNJszP8gvEuX2LCWBRzPYVc%2BiYsj94EYZ%2B9KOUn%2Fn6jkkwPC8JP2S9EllKtr%2B9MEajtjVuja0HZOukki8y0wwaKsUgDa5ruLigv2q8c%2BuZ6otoXHUpmUeETMXf6DZlf9gM0oLv59kPCaxb%2BBkn86TYSqpJGDOtnToTUZrw095In%2Br5zaEoR4WY6hzrK7F1k3QWA3n4p&X-Amz-Signature=278e31176f53dda492160bd35c03c87bdcca32784117af4d63ca8424c465b5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

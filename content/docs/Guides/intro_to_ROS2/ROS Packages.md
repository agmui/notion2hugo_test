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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJEPI6P%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUqKZPu01ey8j4DJ5HF7EWQ%2Fo74p9yEYPbdqJCDWU9GQIhALFqpfbmOA%2BPx8oFIxQbwzDnbKg26lOWkRhW6iFvX6qoKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwXuY4jvG4gcpqsSMq3ANMblC%2B0wrqY5Gh6vtdakMbIrwr1bcGxhRGASiW8vLZiOkddcViCADkPMnT4R%2Fo0DIHeeAXaAKd21UwyUphVfhTRo6fpbFfYRBpIe6hxd1laYtIUfjNX6qx2cuClotTgdos8Nh%2BugBnXk5Qsqm8vNo3C7XCMseEEgZuZisNCsr3pLf9RQdY%2BokFynxbX%2BPAxFZQGYBpQ%2BBVkGGgaWt1g3j4B5KozLQ3NNcDi3ORf9x9%2FmUkMyCy0I6lFMl%2BU9oZQDX5cZusjMaaPuuyZrFaCgNhVbCwt8TC4ytq1TpPFrKGd12xv2BJ56Jd7iuyUd3kSCy4Hqk%2BrzkSj5ErxVbIu0p7Wrn2CdYAEr1hQJ%2F0xwCuTtv0hsGDSHHlakOVojka7p5qCykGcAIEV0RqgFKm0eQ4Pfo1fD8w%2FlrpvOTtdaFqnP%2FuAb2UgAwShNBOzK9Y%2F5BrZitfRRAO29hloPt2iXoWEnK5jl8TSzZM%2F2Wl2yZ3YxzI0RhQ0Y%2B4vBxGv8G0s741nKpWLjr7TryO8T8uD7hSDNuVyKJGP5FPSjCUIZi4tZUoOoXv4JuneOwq%2B03WJuWQHYdQOFV9e9h5ySJWVpb%2FSiP9CjngKXkr9xbLHeayuoaUpS8R9wDrJrp2%2FzCx4%2FG8BjqkAYSkV8pZwS36BxUVVquzP4RhIPCmoweDTHFWaMVyrBQnudXwpvvMZSURulwYBMRkrlN4vG2Ir4dyRpOPOU0lcDuf6l56zJPzX7g6vR7Z1tB4TyPiFTnATfq6BHVc4Xsc5bHQScpzkppbydkL%2FTRoKNTd4RRnMTS1Xm5xPpSuPDBETTF6iWZ0KwfqKPpHjxRrov6vDtw5QK0miXULzUKq0K3mksBK&X-Amz-Signature=ac777683ce7d58ebac782b6dc86b43402f64f45f9e083f33901a5f5e7bbf8900&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJEPI6P%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUqKZPu01ey8j4DJ5HF7EWQ%2Fo74p9yEYPbdqJCDWU9GQIhALFqpfbmOA%2BPx8oFIxQbwzDnbKg26lOWkRhW6iFvX6qoKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwXuY4jvG4gcpqsSMq3ANMblC%2B0wrqY5Gh6vtdakMbIrwr1bcGxhRGASiW8vLZiOkddcViCADkPMnT4R%2Fo0DIHeeAXaAKd21UwyUphVfhTRo6fpbFfYRBpIe6hxd1laYtIUfjNX6qx2cuClotTgdos8Nh%2BugBnXk5Qsqm8vNo3C7XCMseEEgZuZisNCsr3pLf9RQdY%2BokFynxbX%2BPAxFZQGYBpQ%2BBVkGGgaWt1g3j4B5KozLQ3NNcDi3ORf9x9%2FmUkMyCy0I6lFMl%2BU9oZQDX5cZusjMaaPuuyZrFaCgNhVbCwt8TC4ytq1TpPFrKGd12xv2BJ56Jd7iuyUd3kSCy4Hqk%2BrzkSj5ErxVbIu0p7Wrn2CdYAEr1hQJ%2F0xwCuTtv0hsGDSHHlakOVojka7p5qCykGcAIEV0RqgFKm0eQ4Pfo1fD8w%2FlrpvOTtdaFqnP%2FuAb2UgAwShNBOzK9Y%2F5BrZitfRRAO29hloPt2iXoWEnK5jl8TSzZM%2F2Wl2yZ3YxzI0RhQ0Y%2B4vBxGv8G0s741nKpWLjr7TryO8T8uD7hSDNuVyKJGP5FPSjCUIZi4tZUoOoXv4JuneOwq%2B03WJuWQHYdQOFV9e9h5ySJWVpb%2FSiP9CjngKXkr9xbLHeayuoaUpS8R9wDrJrp2%2FzCx4%2FG8BjqkAYSkV8pZwS36BxUVVquzP4RhIPCmoweDTHFWaMVyrBQnudXwpvvMZSURulwYBMRkrlN4vG2Ir4dyRpOPOU0lcDuf6l56zJPzX7g6vR7Z1tB4TyPiFTnATfq6BHVc4Xsc5bHQScpzkppbydkL%2FTRoKNTd4RRnMTS1Xm5xPpSuPDBETTF6iWZ0KwfqKPpHjxRrov6vDtw5QK0miXULzUKq0K3mksBK&X-Amz-Signature=efd9871d87c70ce6ba0334fbd226f808cf71b185fbef831f2aa7ec6dbd400f97&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJEPI6P%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUqKZPu01ey8j4DJ5HF7EWQ%2Fo74p9yEYPbdqJCDWU9GQIhALFqpfbmOA%2BPx8oFIxQbwzDnbKg26lOWkRhW6iFvX6qoKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwXuY4jvG4gcpqsSMq3ANMblC%2B0wrqY5Gh6vtdakMbIrwr1bcGxhRGASiW8vLZiOkddcViCADkPMnT4R%2Fo0DIHeeAXaAKd21UwyUphVfhTRo6fpbFfYRBpIe6hxd1laYtIUfjNX6qx2cuClotTgdos8Nh%2BugBnXk5Qsqm8vNo3C7XCMseEEgZuZisNCsr3pLf9RQdY%2BokFynxbX%2BPAxFZQGYBpQ%2BBVkGGgaWt1g3j4B5KozLQ3NNcDi3ORf9x9%2FmUkMyCy0I6lFMl%2BU9oZQDX5cZusjMaaPuuyZrFaCgNhVbCwt8TC4ytq1TpPFrKGd12xv2BJ56Jd7iuyUd3kSCy4Hqk%2BrzkSj5ErxVbIu0p7Wrn2CdYAEr1hQJ%2F0xwCuTtv0hsGDSHHlakOVojka7p5qCykGcAIEV0RqgFKm0eQ4Pfo1fD8w%2FlrpvOTtdaFqnP%2FuAb2UgAwShNBOzK9Y%2F5BrZitfRRAO29hloPt2iXoWEnK5jl8TSzZM%2F2Wl2yZ3YxzI0RhQ0Y%2B4vBxGv8G0s741nKpWLjr7TryO8T8uD7hSDNuVyKJGP5FPSjCUIZi4tZUoOoXv4JuneOwq%2B03WJuWQHYdQOFV9e9h5ySJWVpb%2FSiP9CjngKXkr9xbLHeayuoaUpS8R9wDrJrp2%2FzCx4%2FG8BjqkAYSkV8pZwS36BxUVVquzP4RhIPCmoweDTHFWaMVyrBQnudXwpvvMZSURulwYBMRkrlN4vG2Ir4dyRpOPOU0lcDuf6l56zJPzX7g6vR7Z1tB4TyPiFTnATfq6BHVc4Xsc5bHQScpzkppbydkL%2FTRoKNTd4RRnMTS1Xm5xPpSuPDBETTF6iWZ0KwfqKPpHjxRrov6vDtw5QK0miXULzUKq0K3mksBK&X-Amz-Signature=5fa67777f1b9d8c34c4134fab78b0e8baf7e3d030c6e8b1e13170080e5089046&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJEPI6P%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUqKZPu01ey8j4DJ5HF7EWQ%2Fo74p9yEYPbdqJCDWU9GQIhALFqpfbmOA%2BPx8oFIxQbwzDnbKg26lOWkRhW6iFvX6qoKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwXuY4jvG4gcpqsSMq3ANMblC%2B0wrqY5Gh6vtdakMbIrwr1bcGxhRGASiW8vLZiOkddcViCADkPMnT4R%2Fo0DIHeeAXaAKd21UwyUphVfhTRo6fpbFfYRBpIe6hxd1laYtIUfjNX6qx2cuClotTgdos8Nh%2BugBnXk5Qsqm8vNo3C7XCMseEEgZuZisNCsr3pLf9RQdY%2BokFynxbX%2BPAxFZQGYBpQ%2BBVkGGgaWt1g3j4B5KozLQ3NNcDi3ORf9x9%2FmUkMyCy0I6lFMl%2BU9oZQDX5cZusjMaaPuuyZrFaCgNhVbCwt8TC4ytq1TpPFrKGd12xv2BJ56Jd7iuyUd3kSCy4Hqk%2BrzkSj5ErxVbIu0p7Wrn2CdYAEr1hQJ%2F0xwCuTtv0hsGDSHHlakOVojka7p5qCykGcAIEV0RqgFKm0eQ4Pfo1fD8w%2FlrpvOTtdaFqnP%2FuAb2UgAwShNBOzK9Y%2F5BrZitfRRAO29hloPt2iXoWEnK5jl8TSzZM%2F2Wl2yZ3YxzI0RhQ0Y%2B4vBxGv8G0s741nKpWLjr7TryO8T8uD7hSDNuVyKJGP5FPSjCUIZi4tZUoOoXv4JuneOwq%2B03WJuWQHYdQOFV9e9h5ySJWVpb%2FSiP9CjngKXkr9xbLHeayuoaUpS8R9wDrJrp2%2FzCx4%2FG8BjqkAYSkV8pZwS36BxUVVquzP4RhIPCmoweDTHFWaMVyrBQnudXwpvvMZSURulwYBMRkrlN4vG2Ir4dyRpOPOU0lcDuf6l56zJPzX7g6vR7Z1tB4TyPiFTnATfq6BHVc4Xsc5bHQScpzkppbydkL%2FTRoKNTd4RRnMTS1Xm5xPpSuPDBETTF6iWZ0KwfqKPpHjxRrov6vDtw5QK0miXULzUKq0K3mksBK&X-Amz-Signature=be1f727f1b39284d5e0ba56d016f388903788eb51ad9882ab68e50106d524257&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJEPI6P%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUqKZPu01ey8j4DJ5HF7EWQ%2Fo74p9yEYPbdqJCDWU9GQIhALFqpfbmOA%2BPx8oFIxQbwzDnbKg26lOWkRhW6iFvX6qoKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwXuY4jvG4gcpqsSMq3ANMblC%2B0wrqY5Gh6vtdakMbIrwr1bcGxhRGASiW8vLZiOkddcViCADkPMnT4R%2Fo0DIHeeAXaAKd21UwyUphVfhTRo6fpbFfYRBpIe6hxd1laYtIUfjNX6qx2cuClotTgdos8Nh%2BugBnXk5Qsqm8vNo3C7XCMseEEgZuZisNCsr3pLf9RQdY%2BokFynxbX%2BPAxFZQGYBpQ%2BBVkGGgaWt1g3j4B5KozLQ3NNcDi3ORf9x9%2FmUkMyCy0I6lFMl%2BU9oZQDX5cZusjMaaPuuyZrFaCgNhVbCwt8TC4ytq1TpPFrKGd12xv2BJ56Jd7iuyUd3kSCy4Hqk%2BrzkSj5ErxVbIu0p7Wrn2CdYAEr1hQJ%2F0xwCuTtv0hsGDSHHlakOVojka7p5qCykGcAIEV0RqgFKm0eQ4Pfo1fD8w%2FlrpvOTtdaFqnP%2FuAb2UgAwShNBOzK9Y%2F5BrZitfRRAO29hloPt2iXoWEnK5jl8TSzZM%2F2Wl2yZ3YxzI0RhQ0Y%2B4vBxGv8G0s741nKpWLjr7TryO8T8uD7hSDNuVyKJGP5FPSjCUIZi4tZUoOoXv4JuneOwq%2B03WJuWQHYdQOFV9e9h5ySJWVpb%2FSiP9CjngKXkr9xbLHeayuoaUpS8R9wDrJrp2%2FzCx4%2FG8BjqkAYSkV8pZwS36BxUVVquzP4RhIPCmoweDTHFWaMVyrBQnudXwpvvMZSURulwYBMRkrlN4vG2Ir4dyRpOPOU0lcDuf6l56zJPzX7g6vR7Z1tB4TyPiFTnATfq6BHVc4Xsc5bHQScpzkppbydkL%2FTRoKNTd4RRnMTS1Xm5xPpSuPDBETTF6iWZ0KwfqKPpHjxRrov6vDtw5QK0miXULzUKq0K3mksBK&X-Amz-Signature=4c481d5b8a93573ce92052755254b644c796cd008a90f3603ad19147d799c55e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJEPI6P%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUqKZPu01ey8j4DJ5HF7EWQ%2Fo74p9yEYPbdqJCDWU9GQIhALFqpfbmOA%2BPx8oFIxQbwzDnbKg26lOWkRhW6iFvX6qoKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwXuY4jvG4gcpqsSMq3ANMblC%2B0wrqY5Gh6vtdakMbIrwr1bcGxhRGASiW8vLZiOkddcViCADkPMnT4R%2Fo0DIHeeAXaAKd21UwyUphVfhTRo6fpbFfYRBpIe6hxd1laYtIUfjNX6qx2cuClotTgdos8Nh%2BugBnXk5Qsqm8vNo3C7XCMseEEgZuZisNCsr3pLf9RQdY%2BokFynxbX%2BPAxFZQGYBpQ%2BBVkGGgaWt1g3j4B5KozLQ3NNcDi3ORf9x9%2FmUkMyCy0I6lFMl%2BU9oZQDX5cZusjMaaPuuyZrFaCgNhVbCwt8TC4ytq1TpPFrKGd12xv2BJ56Jd7iuyUd3kSCy4Hqk%2BrzkSj5ErxVbIu0p7Wrn2CdYAEr1hQJ%2F0xwCuTtv0hsGDSHHlakOVojka7p5qCykGcAIEV0RqgFKm0eQ4Pfo1fD8w%2FlrpvOTtdaFqnP%2FuAb2UgAwShNBOzK9Y%2F5BrZitfRRAO29hloPt2iXoWEnK5jl8TSzZM%2F2Wl2yZ3YxzI0RhQ0Y%2B4vBxGv8G0s741nKpWLjr7TryO8T8uD7hSDNuVyKJGP5FPSjCUIZi4tZUoOoXv4JuneOwq%2B03WJuWQHYdQOFV9e9h5ySJWVpb%2FSiP9CjngKXkr9xbLHeayuoaUpS8R9wDrJrp2%2FzCx4%2FG8BjqkAYSkV8pZwS36BxUVVquzP4RhIPCmoweDTHFWaMVyrBQnudXwpvvMZSURulwYBMRkrlN4vG2Ir4dyRpOPOU0lcDuf6l56zJPzX7g6vR7Z1tB4TyPiFTnATfq6BHVc4Xsc5bHQScpzkppbydkL%2FTRoKNTd4RRnMTS1Xm5xPpSuPDBETTF6iWZ0KwfqKPpHjxRrov6vDtw5QK0miXULzUKq0K3mksBK&X-Amz-Signature=9354a5dbae501ebbe0d40c50d8e34a42f716e693ca25e29f0bb5d95efa30bba8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJEPI6P%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUqKZPu01ey8j4DJ5HF7EWQ%2Fo74p9yEYPbdqJCDWU9GQIhALFqpfbmOA%2BPx8oFIxQbwzDnbKg26lOWkRhW6iFvX6qoKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwXuY4jvG4gcpqsSMq3ANMblC%2B0wrqY5Gh6vtdakMbIrwr1bcGxhRGASiW8vLZiOkddcViCADkPMnT4R%2Fo0DIHeeAXaAKd21UwyUphVfhTRo6fpbFfYRBpIe6hxd1laYtIUfjNX6qx2cuClotTgdos8Nh%2BugBnXk5Qsqm8vNo3C7XCMseEEgZuZisNCsr3pLf9RQdY%2BokFynxbX%2BPAxFZQGYBpQ%2BBVkGGgaWt1g3j4B5KozLQ3NNcDi3ORf9x9%2FmUkMyCy0I6lFMl%2BU9oZQDX5cZusjMaaPuuyZrFaCgNhVbCwt8TC4ytq1TpPFrKGd12xv2BJ56Jd7iuyUd3kSCy4Hqk%2BrzkSj5ErxVbIu0p7Wrn2CdYAEr1hQJ%2F0xwCuTtv0hsGDSHHlakOVojka7p5qCykGcAIEV0RqgFKm0eQ4Pfo1fD8w%2FlrpvOTtdaFqnP%2FuAb2UgAwShNBOzK9Y%2F5BrZitfRRAO29hloPt2iXoWEnK5jl8TSzZM%2F2Wl2yZ3YxzI0RhQ0Y%2B4vBxGv8G0s741nKpWLjr7TryO8T8uD7hSDNuVyKJGP5FPSjCUIZi4tZUoOoXv4JuneOwq%2B03WJuWQHYdQOFV9e9h5ySJWVpb%2FSiP9CjngKXkr9xbLHeayuoaUpS8R9wDrJrp2%2FzCx4%2FG8BjqkAYSkV8pZwS36BxUVVquzP4RhIPCmoweDTHFWaMVyrBQnudXwpvvMZSURulwYBMRkrlN4vG2Ir4dyRpOPOU0lcDuf6l56zJPzX7g6vR7Z1tB4TyPiFTnATfq6BHVc4Xsc5bHQScpzkppbydkL%2FTRoKNTd4RRnMTS1Xm5xPpSuPDBETTF6iWZ0KwfqKPpHjxRrov6vDtw5QK0miXULzUKq0K3mksBK&X-Amz-Signature=42075bbc0027e63eff17c3454fa791569edcf694eb0b92f5893e2cbefd8bf5a3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

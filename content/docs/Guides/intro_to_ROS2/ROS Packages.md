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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFVDOV5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqbVRmq4PPl7Eu3%2FQCsFqJpXTA%2BpVghR4Nr4my29UIfwIhAOU2q9lbsbCEH3S9UnG%2BrCcoMbwqpgsoOZBt7SLmg7kfKv8DCDYQABoMNjM3NDIzMTgzODA1IgymBMJXKVbUvLzZTHsq3AMX2ftveMYOzfJVC9dA6Sls2yYSadtK%2F9rNQYB8LCz%2Frlae5bcyKEf0j9ik228EopdKZjKwcvcQ20ORQI8iXYu%2FRDPC1NyakjYHc8ArcKiPSmShA%2F1HL7pUoMGRQ1q%2FuKZGC2JrBzhv4zKKHnxiWVAEAmeKauXJ8apSIod6gsPTwEQyeUqlZ5SgAD0AbpY%2ByuxRczJucCHb0NthGxXKyd8b2A3mxuhl8ZWwACifSeU23I7zT%2Bjb%2FcUnJsfGd5QdX8M%2FAlZxUU4LuRONB7d9SdvXYIJK4oPf22S4W79kry07pmrO77V%2FUdXZ3cwVN%2Bv%2FSq3sVTfl7VJO1uj7gUtzfKfeouD70RF2nvtesGtqiM82S%2BtNB1M2SDROlgAOip2hxBkkAC7tNwWgE9oIaA%2Fory2G7Gj95ARbbnFL5782SoUJy73fzqfi2HqbC69Oju2GJbLbuZs%2FljSRLPPPQkWWQMDY0lqgkpKXEs8Msy%2Fh5%2F50lK603gDdbpz8sX22ZV913PExRBmBWrssDg8MFpO7p4NDKsUvgDZ60w02uRPhDeoj6Ilh26myCjMFVuAtfxKmOruAPhbynOK4ovXS%2FJJSqH0wPP1J23YAqXgHS0HOBPsFVhEKlrM3WlqZsrHIFzDwzOTABjqkARCoH%2F7VhYxwM6YfTL2XMQfvdsNcTQ%2BFPmLrdjpAifEzPXRTg4Bm7FGC1AAqenVEuYX3kc8ss0CHfIKvkJlPeFR7u1pYUpT8rWmuuKWJHaTBfQZ6f8FHWb4bBt28TE5RUJMWpOawZzkUw3Nyn4fj8HXCyQBoFQ7kmMsi6elLRMXNHWHmBTAfExRjllBmmw8ORnsxdLeUQPUmyC00OmHNw452MnRn&X-Amz-Signature=0f31d36965c3672f6511697307ce31474cc5478794dcd96863baa6553193facd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFVDOV5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqbVRmq4PPl7Eu3%2FQCsFqJpXTA%2BpVghR4Nr4my29UIfwIhAOU2q9lbsbCEH3S9UnG%2BrCcoMbwqpgsoOZBt7SLmg7kfKv8DCDYQABoMNjM3NDIzMTgzODA1IgymBMJXKVbUvLzZTHsq3AMX2ftveMYOzfJVC9dA6Sls2yYSadtK%2F9rNQYB8LCz%2Frlae5bcyKEf0j9ik228EopdKZjKwcvcQ20ORQI8iXYu%2FRDPC1NyakjYHc8ArcKiPSmShA%2F1HL7pUoMGRQ1q%2FuKZGC2JrBzhv4zKKHnxiWVAEAmeKauXJ8apSIod6gsPTwEQyeUqlZ5SgAD0AbpY%2ByuxRczJucCHb0NthGxXKyd8b2A3mxuhl8ZWwACifSeU23I7zT%2Bjb%2FcUnJsfGd5QdX8M%2FAlZxUU4LuRONB7d9SdvXYIJK4oPf22S4W79kry07pmrO77V%2FUdXZ3cwVN%2Bv%2FSq3sVTfl7VJO1uj7gUtzfKfeouD70RF2nvtesGtqiM82S%2BtNB1M2SDROlgAOip2hxBkkAC7tNwWgE9oIaA%2Fory2G7Gj95ARbbnFL5782SoUJy73fzqfi2HqbC69Oju2GJbLbuZs%2FljSRLPPPQkWWQMDY0lqgkpKXEs8Msy%2Fh5%2F50lK603gDdbpz8sX22ZV913PExRBmBWrssDg8MFpO7p4NDKsUvgDZ60w02uRPhDeoj6Ilh26myCjMFVuAtfxKmOruAPhbynOK4ovXS%2FJJSqH0wPP1J23YAqXgHS0HOBPsFVhEKlrM3WlqZsrHIFzDwzOTABjqkARCoH%2F7VhYxwM6YfTL2XMQfvdsNcTQ%2BFPmLrdjpAifEzPXRTg4Bm7FGC1AAqenVEuYX3kc8ss0CHfIKvkJlPeFR7u1pYUpT8rWmuuKWJHaTBfQZ6f8FHWb4bBt28TE5RUJMWpOawZzkUw3Nyn4fj8HXCyQBoFQ7kmMsi6elLRMXNHWHmBTAfExRjllBmmw8ORnsxdLeUQPUmyC00OmHNw452MnRn&X-Amz-Signature=a2c13efb1f3f7a4a9c65bde60254123fcfe56de9903f915f42c350d42507a2da&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFVDOV5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqbVRmq4PPl7Eu3%2FQCsFqJpXTA%2BpVghR4Nr4my29UIfwIhAOU2q9lbsbCEH3S9UnG%2BrCcoMbwqpgsoOZBt7SLmg7kfKv8DCDYQABoMNjM3NDIzMTgzODA1IgymBMJXKVbUvLzZTHsq3AMX2ftveMYOzfJVC9dA6Sls2yYSadtK%2F9rNQYB8LCz%2Frlae5bcyKEf0j9ik228EopdKZjKwcvcQ20ORQI8iXYu%2FRDPC1NyakjYHc8ArcKiPSmShA%2F1HL7pUoMGRQ1q%2FuKZGC2JrBzhv4zKKHnxiWVAEAmeKauXJ8apSIod6gsPTwEQyeUqlZ5SgAD0AbpY%2ByuxRczJucCHb0NthGxXKyd8b2A3mxuhl8ZWwACifSeU23I7zT%2Bjb%2FcUnJsfGd5QdX8M%2FAlZxUU4LuRONB7d9SdvXYIJK4oPf22S4W79kry07pmrO77V%2FUdXZ3cwVN%2Bv%2FSq3sVTfl7VJO1uj7gUtzfKfeouD70RF2nvtesGtqiM82S%2BtNB1M2SDROlgAOip2hxBkkAC7tNwWgE9oIaA%2Fory2G7Gj95ARbbnFL5782SoUJy73fzqfi2HqbC69Oju2GJbLbuZs%2FljSRLPPPQkWWQMDY0lqgkpKXEs8Msy%2Fh5%2F50lK603gDdbpz8sX22ZV913PExRBmBWrssDg8MFpO7p4NDKsUvgDZ60w02uRPhDeoj6Ilh26myCjMFVuAtfxKmOruAPhbynOK4ovXS%2FJJSqH0wPP1J23YAqXgHS0HOBPsFVhEKlrM3WlqZsrHIFzDwzOTABjqkARCoH%2F7VhYxwM6YfTL2XMQfvdsNcTQ%2BFPmLrdjpAifEzPXRTg4Bm7FGC1AAqenVEuYX3kc8ss0CHfIKvkJlPeFR7u1pYUpT8rWmuuKWJHaTBfQZ6f8FHWb4bBt28TE5RUJMWpOawZzkUw3Nyn4fj8HXCyQBoFQ7kmMsi6elLRMXNHWHmBTAfExRjllBmmw8ORnsxdLeUQPUmyC00OmHNw452MnRn&X-Amz-Signature=8ce7b2b7d3d30fd4931eb3f663bbf2f88181b654402a7255838c7789fca02dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFVDOV5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqbVRmq4PPl7Eu3%2FQCsFqJpXTA%2BpVghR4Nr4my29UIfwIhAOU2q9lbsbCEH3S9UnG%2BrCcoMbwqpgsoOZBt7SLmg7kfKv8DCDYQABoMNjM3NDIzMTgzODA1IgymBMJXKVbUvLzZTHsq3AMX2ftveMYOzfJVC9dA6Sls2yYSadtK%2F9rNQYB8LCz%2Frlae5bcyKEf0j9ik228EopdKZjKwcvcQ20ORQI8iXYu%2FRDPC1NyakjYHc8ArcKiPSmShA%2F1HL7pUoMGRQ1q%2FuKZGC2JrBzhv4zKKHnxiWVAEAmeKauXJ8apSIod6gsPTwEQyeUqlZ5SgAD0AbpY%2ByuxRczJucCHb0NthGxXKyd8b2A3mxuhl8ZWwACifSeU23I7zT%2Bjb%2FcUnJsfGd5QdX8M%2FAlZxUU4LuRONB7d9SdvXYIJK4oPf22S4W79kry07pmrO77V%2FUdXZ3cwVN%2Bv%2FSq3sVTfl7VJO1uj7gUtzfKfeouD70RF2nvtesGtqiM82S%2BtNB1M2SDROlgAOip2hxBkkAC7tNwWgE9oIaA%2Fory2G7Gj95ARbbnFL5782SoUJy73fzqfi2HqbC69Oju2GJbLbuZs%2FljSRLPPPQkWWQMDY0lqgkpKXEs8Msy%2Fh5%2F50lK603gDdbpz8sX22ZV913PExRBmBWrssDg8MFpO7p4NDKsUvgDZ60w02uRPhDeoj6Ilh26myCjMFVuAtfxKmOruAPhbynOK4ovXS%2FJJSqH0wPP1J23YAqXgHS0HOBPsFVhEKlrM3WlqZsrHIFzDwzOTABjqkARCoH%2F7VhYxwM6YfTL2XMQfvdsNcTQ%2BFPmLrdjpAifEzPXRTg4Bm7FGC1AAqenVEuYX3kc8ss0CHfIKvkJlPeFR7u1pYUpT8rWmuuKWJHaTBfQZ6f8FHWb4bBt28TE5RUJMWpOawZzkUw3Nyn4fj8HXCyQBoFQ7kmMsi6elLRMXNHWHmBTAfExRjllBmmw8ORnsxdLeUQPUmyC00OmHNw452MnRn&X-Amz-Signature=c841fdde5aac5e8132e1bfe5c1cc0a0a1ba2b88023c81b9072393bf29cfde4e2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFVDOV5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqbVRmq4PPl7Eu3%2FQCsFqJpXTA%2BpVghR4Nr4my29UIfwIhAOU2q9lbsbCEH3S9UnG%2BrCcoMbwqpgsoOZBt7SLmg7kfKv8DCDYQABoMNjM3NDIzMTgzODA1IgymBMJXKVbUvLzZTHsq3AMX2ftveMYOzfJVC9dA6Sls2yYSadtK%2F9rNQYB8LCz%2Frlae5bcyKEf0j9ik228EopdKZjKwcvcQ20ORQI8iXYu%2FRDPC1NyakjYHc8ArcKiPSmShA%2F1HL7pUoMGRQ1q%2FuKZGC2JrBzhv4zKKHnxiWVAEAmeKauXJ8apSIod6gsPTwEQyeUqlZ5SgAD0AbpY%2ByuxRczJucCHb0NthGxXKyd8b2A3mxuhl8ZWwACifSeU23I7zT%2Bjb%2FcUnJsfGd5QdX8M%2FAlZxUU4LuRONB7d9SdvXYIJK4oPf22S4W79kry07pmrO77V%2FUdXZ3cwVN%2Bv%2FSq3sVTfl7VJO1uj7gUtzfKfeouD70RF2nvtesGtqiM82S%2BtNB1M2SDROlgAOip2hxBkkAC7tNwWgE9oIaA%2Fory2G7Gj95ARbbnFL5782SoUJy73fzqfi2HqbC69Oju2GJbLbuZs%2FljSRLPPPQkWWQMDY0lqgkpKXEs8Msy%2Fh5%2F50lK603gDdbpz8sX22ZV913PExRBmBWrssDg8MFpO7p4NDKsUvgDZ60w02uRPhDeoj6Ilh26myCjMFVuAtfxKmOruAPhbynOK4ovXS%2FJJSqH0wPP1J23YAqXgHS0HOBPsFVhEKlrM3WlqZsrHIFzDwzOTABjqkARCoH%2F7VhYxwM6YfTL2XMQfvdsNcTQ%2BFPmLrdjpAifEzPXRTg4Bm7FGC1AAqenVEuYX3kc8ss0CHfIKvkJlPeFR7u1pYUpT8rWmuuKWJHaTBfQZ6f8FHWb4bBt28TE5RUJMWpOawZzkUw3Nyn4fj8HXCyQBoFQ7kmMsi6elLRMXNHWHmBTAfExRjllBmmw8ORnsxdLeUQPUmyC00OmHNw452MnRn&X-Amz-Signature=6a5a132877a1215afbde41ae97972daf1b620b16f16da0fa535b0ec33d6eb917&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFVDOV5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqbVRmq4PPl7Eu3%2FQCsFqJpXTA%2BpVghR4Nr4my29UIfwIhAOU2q9lbsbCEH3S9UnG%2BrCcoMbwqpgsoOZBt7SLmg7kfKv8DCDYQABoMNjM3NDIzMTgzODA1IgymBMJXKVbUvLzZTHsq3AMX2ftveMYOzfJVC9dA6Sls2yYSadtK%2F9rNQYB8LCz%2Frlae5bcyKEf0j9ik228EopdKZjKwcvcQ20ORQI8iXYu%2FRDPC1NyakjYHc8ArcKiPSmShA%2F1HL7pUoMGRQ1q%2FuKZGC2JrBzhv4zKKHnxiWVAEAmeKauXJ8apSIod6gsPTwEQyeUqlZ5SgAD0AbpY%2ByuxRczJucCHb0NthGxXKyd8b2A3mxuhl8ZWwACifSeU23I7zT%2Bjb%2FcUnJsfGd5QdX8M%2FAlZxUU4LuRONB7d9SdvXYIJK4oPf22S4W79kry07pmrO77V%2FUdXZ3cwVN%2Bv%2FSq3sVTfl7VJO1uj7gUtzfKfeouD70RF2nvtesGtqiM82S%2BtNB1M2SDROlgAOip2hxBkkAC7tNwWgE9oIaA%2Fory2G7Gj95ARbbnFL5782SoUJy73fzqfi2HqbC69Oju2GJbLbuZs%2FljSRLPPPQkWWQMDY0lqgkpKXEs8Msy%2Fh5%2F50lK603gDdbpz8sX22ZV913PExRBmBWrssDg8MFpO7p4NDKsUvgDZ60w02uRPhDeoj6Ilh26myCjMFVuAtfxKmOruAPhbynOK4ovXS%2FJJSqH0wPP1J23YAqXgHS0HOBPsFVhEKlrM3WlqZsrHIFzDwzOTABjqkARCoH%2F7VhYxwM6YfTL2XMQfvdsNcTQ%2BFPmLrdjpAifEzPXRTg4Bm7FGC1AAqenVEuYX3kc8ss0CHfIKvkJlPeFR7u1pYUpT8rWmuuKWJHaTBfQZ6f8FHWb4bBt28TE5RUJMWpOawZzkUw3Nyn4fj8HXCyQBoFQ7kmMsi6elLRMXNHWHmBTAfExRjllBmmw8ORnsxdLeUQPUmyC00OmHNw452MnRn&X-Amz-Signature=08ef8f9548cf2d86708403c22025c2ee14b77082093f3eb2abe96a47de494dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFVDOV5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqbVRmq4PPl7Eu3%2FQCsFqJpXTA%2BpVghR4Nr4my29UIfwIhAOU2q9lbsbCEH3S9UnG%2BrCcoMbwqpgsoOZBt7SLmg7kfKv8DCDYQABoMNjM3NDIzMTgzODA1IgymBMJXKVbUvLzZTHsq3AMX2ftveMYOzfJVC9dA6Sls2yYSadtK%2F9rNQYB8LCz%2Frlae5bcyKEf0j9ik228EopdKZjKwcvcQ20ORQI8iXYu%2FRDPC1NyakjYHc8ArcKiPSmShA%2F1HL7pUoMGRQ1q%2FuKZGC2JrBzhv4zKKHnxiWVAEAmeKauXJ8apSIod6gsPTwEQyeUqlZ5SgAD0AbpY%2ByuxRczJucCHb0NthGxXKyd8b2A3mxuhl8ZWwACifSeU23I7zT%2Bjb%2FcUnJsfGd5QdX8M%2FAlZxUU4LuRONB7d9SdvXYIJK4oPf22S4W79kry07pmrO77V%2FUdXZ3cwVN%2Bv%2FSq3sVTfl7VJO1uj7gUtzfKfeouD70RF2nvtesGtqiM82S%2BtNB1M2SDROlgAOip2hxBkkAC7tNwWgE9oIaA%2Fory2G7Gj95ARbbnFL5782SoUJy73fzqfi2HqbC69Oju2GJbLbuZs%2FljSRLPPPQkWWQMDY0lqgkpKXEs8Msy%2Fh5%2F50lK603gDdbpz8sX22ZV913PExRBmBWrssDg8MFpO7p4NDKsUvgDZ60w02uRPhDeoj6Ilh26myCjMFVuAtfxKmOruAPhbynOK4ovXS%2FJJSqH0wPP1J23YAqXgHS0HOBPsFVhEKlrM3WlqZsrHIFzDwzOTABjqkARCoH%2F7VhYxwM6YfTL2XMQfvdsNcTQ%2BFPmLrdjpAifEzPXRTg4Bm7FGC1AAqenVEuYX3kc8ss0CHfIKvkJlPeFR7u1pYUpT8rWmuuKWJHaTBfQZ6f8FHWb4bBt28TE5RUJMWpOawZzkUw3Nyn4fj8HXCyQBoFQ7kmMsi6elLRMXNHWHmBTAfExRjllBmmw8ORnsxdLeUQPUmyC00OmHNw452MnRn&X-Amz-Signature=378e37fba828f486390091501ae970a9c6add8cbb9dce60e48170497a345cac0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

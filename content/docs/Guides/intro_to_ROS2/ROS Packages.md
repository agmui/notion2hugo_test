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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJLF32S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJFMEMCH1LXixKo7KLZBjSFdmrvusbx5mxpdWKDLD5u%2FbhEiAQCIBqMwcJuGb1r%2BVIyXi%2FOMVXUcZdjbb9ez3VlLhVTNlPBKv8DCB4QABoMNjM3NDIzMTgzODA1IgxO8zehC%2Bfuy98Hhjgq3AO4%2FGH84M%2FDVGTrLTnN4pJHE7k4bNf390MegUksFh%2BANkbj62VK2XcyhJBFAxPqS7M%2FeKi10TL7r2%2FmucSDMDBXGE47OMGoBstiCHVAPeRh1mzpzCEbbCj5kE5tJno89P2KVnztEJ8hkukC9CMJQ%2B9kzRpudi5nb906ggF8Q6WTbunLgfUDSXrw%2FU70Sb3E5STD1vdjNjeJM9fqQm%2FwAKRGkMkZMFHQx7cMFEiEcY8ma2kakzUtF21owMwGwBVbuXlCX%2BDIVPXfYBAqxTa7B7UToayhcwImi1MYF7GA4S9BhgDCtgp7QsoqKbhpBetwNBuHGIvBOgBf5OQMgIgwojBAsFA9XZn%2BVSEsyXCjqTq03ufK6l0zTLq9bMcB0pYCEuDgASDxMIIFNacF0CAZqKJKO9Lxq0PWqmyTMc1HAyHAvEN7ERKn84IVQSFzG2H3FQF%2BiZpgICczWmSRKD7f0%2BRLPtgohAGrTlThtw0Dm8HQAH23vbwqT%2F6gV9BC%2B3a%2B8rhjqvgT3GDvv8SrLcXNHNqAR8QhXPCr149qZk2Qs6tB9hG2O8kFNxTU67bQH0FIFkAOMayPAdpHp8CXk6oR3y35dk%2B%2Bz0Wd4KO%2FHF2la0d7uK3cfxj3u1AYxgmjgDCax9DDBjqnAbuZU8MWKPeEgrZxBHM7PLvabmlCfyXdfNjRIL6QjF8mr9HN1GMTMEX4wXmlKcPNH0irAq7Jj2%2BbypFfAI8paiUW7jRyJiqy%2BFi29Wujs%2BhJS%2BTa2KnF%2Fca0p27PQ5xvpNQT%2FSmzKnQ3ECSFLSvKTPSZAz8Y%2FCSQV2CZNv3T%2FH09%2BgLEls0GLgFfSH3fJolsams%2BfQgd4MQEboklHTeDpc%2Bm0H57%2BJ66&X-Amz-Signature=7a7a24623a20f635896dbcabfb9103a42a90fa5e21437dc29b8f3f9cadcf466a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJLF32S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJFMEMCH1LXixKo7KLZBjSFdmrvusbx5mxpdWKDLD5u%2FbhEiAQCIBqMwcJuGb1r%2BVIyXi%2FOMVXUcZdjbb9ez3VlLhVTNlPBKv8DCB4QABoMNjM3NDIzMTgzODA1IgxO8zehC%2Bfuy98Hhjgq3AO4%2FGH84M%2FDVGTrLTnN4pJHE7k4bNf390MegUksFh%2BANkbj62VK2XcyhJBFAxPqS7M%2FeKi10TL7r2%2FmucSDMDBXGE47OMGoBstiCHVAPeRh1mzpzCEbbCj5kE5tJno89P2KVnztEJ8hkukC9CMJQ%2B9kzRpudi5nb906ggF8Q6WTbunLgfUDSXrw%2FU70Sb3E5STD1vdjNjeJM9fqQm%2FwAKRGkMkZMFHQx7cMFEiEcY8ma2kakzUtF21owMwGwBVbuXlCX%2BDIVPXfYBAqxTa7B7UToayhcwImi1MYF7GA4S9BhgDCtgp7QsoqKbhpBetwNBuHGIvBOgBf5OQMgIgwojBAsFA9XZn%2BVSEsyXCjqTq03ufK6l0zTLq9bMcB0pYCEuDgASDxMIIFNacF0CAZqKJKO9Lxq0PWqmyTMc1HAyHAvEN7ERKn84IVQSFzG2H3FQF%2BiZpgICczWmSRKD7f0%2BRLPtgohAGrTlThtw0Dm8HQAH23vbwqT%2F6gV9BC%2B3a%2B8rhjqvgT3GDvv8SrLcXNHNqAR8QhXPCr149qZk2Qs6tB9hG2O8kFNxTU67bQH0FIFkAOMayPAdpHp8CXk6oR3y35dk%2B%2Bz0Wd4KO%2FHF2la0d7uK3cfxj3u1AYxgmjgDCax9DDBjqnAbuZU8MWKPeEgrZxBHM7PLvabmlCfyXdfNjRIL6QjF8mr9HN1GMTMEX4wXmlKcPNH0irAq7Jj2%2BbypFfAI8paiUW7jRyJiqy%2BFi29Wujs%2BhJS%2BTa2KnF%2Fca0p27PQ5xvpNQT%2FSmzKnQ3ECSFLSvKTPSZAz8Y%2FCSQV2CZNv3T%2FH09%2BgLEls0GLgFfSH3fJolsams%2BfQgd4MQEboklHTeDpc%2Bm0H57%2BJ66&X-Amz-Signature=f3ca1b5bce7dc94fa04ded2148c367957c40c7f9bd98219964fa50e3fa62054c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJLF32S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJFMEMCH1LXixKo7KLZBjSFdmrvusbx5mxpdWKDLD5u%2FbhEiAQCIBqMwcJuGb1r%2BVIyXi%2FOMVXUcZdjbb9ez3VlLhVTNlPBKv8DCB4QABoMNjM3NDIzMTgzODA1IgxO8zehC%2Bfuy98Hhjgq3AO4%2FGH84M%2FDVGTrLTnN4pJHE7k4bNf390MegUksFh%2BANkbj62VK2XcyhJBFAxPqS7M%2FeKi10TL7r2%2FmucSDMDBXGE47OMGoBstiCHVAPeRh1mzpzCEbbCj5kE5tJno89P2KVnztEJ8hkukC9CMJQ%2B9kzRpudi5nb906ggF8Q6WTbunLgfUDSXrw%2FU70Sb3E5STD1vdjNjeJM9fqQm%2FwAKRGkMkZMFHQx7cMFEiEcY8ma2kakzUtF21owMwGwBVbuXlCX%2BDIVPXfYBAqxTa7B7UToayhcwImi1MYF7GA4S9BhgDCtgp7QsoqKbhpBetwNBuHGIvBOgBf5OQMgIgwojBAsFA9XZn%2BVSEsyXCjqTq03ufK6l0zTLq9bMcB0pYCEuDgASDxMIIFNacF0CAZqKJKO9Lxq0PWqmyTMc1HAyHAvEN7ERKn84IVQSFzG2H3FQF%2BiZpgICczWmSRKD7f0%2BRLPtgohAGrTlThtw0Dm8HQAH23vbwqT%2F6gV9BC%2B3a%2B8rhjqvgT3GDvv8SrLcXNHNqAR8QhXPCr149qZk2Qs6tB9hG2O8kFNxTU67bQH0FIFkAOMayPAdpHp8CXk6oR3y35dk%2B%2Bz0Wd4KO%2FHF2la0d7uK3cfxj3u1AYxgmjgDCax9DDBjqnAbuZU8MWKPeEgrZxBHM7PLvabmlCfyXdfNjRIL6QjF8mr9HN1GMTMEX4wXmlKcPNH0irAq7Jj2%2BbypFfAI8paiUW7jRyJiqy%2BFi29Wujs%2BhJS%2BTa2KnF%2Fca0p27PQ5xvpNQT%2FSmzKnQ3ECSFLSvKTPSZAz8Y%2FCSQV2CZNv3T%2FH09%2BgLEls0GLgFfSH3fJolsams%2BfQgd4MQEboklHTeDpc%2Bm0H57%2BJ66&X-Amz-Signature=cef76d71f921fbbde3f4394c726323944666a6341eda9de36964a1f2dd5a883e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJLF32S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJFMEMCH1LXixKo7KLZBjSFdmrvusbx5mxpdWKDLD5u%2FbhEiAQCIBqMwcJuGb1r%2BVIyXi%2FOMVXUcZdjbb9ez3VlLhVTNlPBKv8DCB4QABoMNjM3NDIzMTgzODA1IgxO8zehC%2Bfuy98Hhjgq3AO4%2FGH84M%2FDVGTrLTnN4pJHE7k4bNf390MegUksFh%2BANkbj62VK2XcyhJBFAxPqS7M%2FeKi10TL7r2%2FmucSDMDBXGE47OMGoBstiCHVAPeRh1mzpzCEbbCj5kE5tJno89P2KVnztEJ8hkukC9CMJQ%2B9kzRpudi5nb906ggF8Q6WTbunLgfUDSXrw%2FU70Sb3E5STD1vdjNjeJM9fqQm%2FwAKRGkMkZMFHQx7cMFEiEcY8ma2kakzUtF21owMwGwBVbuXlCX%2BDIVPXfYBAqxTa7B7UToayhcwImi1MYF7GA4S9BhgDCtgp7QsoqKbhpBetwNBuHGIvBOgBf5OQMgIgwojBAsFA9XZn%2BVSEsyXCjqTq03ufK6l0zTLq9bMcB0pYCEuDgASDxMIIFNacF0CAZqKJKO9Lxq0PWqmyTMc1HAyHAvEN7ERKn84IVQSFzG2H3FQF%2BiZpgICczWmSRKD7f0%2BRLPtgohAGrTlThtw0Dm8HQAH23vbwqT%2F6gV9BC%2B3a%2B8rhjqvgT3GDvv8SrLcXNHNqAR8QhXPCr149qZk2Qs6tB9hG2O8kFNxTU67bQH0FIFkAOMayPAdpHp8CXk6oR3y35dk%2B%2Bz0Wd4KO%2FHF2la0d7uK3cfxj3u1AYxgmjgDCax9DDBjqnAbuZU8MWKPeEgrZxBHM7PLvabmlCfyXdfNjRIL6QjF8mr9HN1GMTMEX4wXmlKcPNH0irAq7Jj2%2BbypFfAI8paiUW7jRyJiqy%2BFi29Wujs%2BhJS%2BTa2KnF%2Fca0p27PQ5xvpNQT%2FSmzKnQ3ECSFLSvKTPSZAz8Y%2FCSQV2CZNv3T%2FH09%2BgLEls0GLgFfSH3fJolsams%2BfQgd4MQEboklHTeDpc%2Bm0H57%2BJ66&X-Amz-Signature=012f1f408a99aaf3a9ccb462a4b3b13c286975607d302bdebc4f8f1acd53fd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJLF32S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJFMEMCH1LXixKo7KLZBjSFdmrvusbx5mxpdWKDLD5u%2FbhEiAQCIBqMwcJuGb1r%2BVIyXi%2FOMVXUcZdjbb9ez3VlLhVTNlPBKv8DCB4QABoMNjM3NDIzMTgzODA1IgxO8zehC%2Bfuy98Hhjgq3AO4%2FGH84M%2FDVGTrLTnN4pJHE7k4bNf390MegUksFh%2BANkbj62VK2XcyhJBFAxPqS7M%2FeKi10TL7r2%2FmucSDMDBXGE47OMGoBstiCHVAPeRh1mzpzCEbbCj5kE5tJno89P2KVnztEJ8hkukC9CMJQ%2B9kzRpudi5nb906ggF8Q6WTbunLgfUDSXrw%2FU70Sb3E5STD1vdjNjeJM9fqQm%2FwAKRGkMkZMFHQx7cMFEiEcY8ma2kakzUtF21owMwGwBVbuXlCX%2BDIVPXfYBAqxTa7B7UToayhcwImi1MYF7GA4S9BhgDCtgp7QsoqKbhpBetwNBuHGIvBOgBf5OQMgIgwojBAsFA9XZn%2BVSEsyXCjqTq03ufK6l0zTLq9bMcB0pYCEuDgASDxMIIFNacF0CAZqKJKO9Lxq0PWqmyTMc1HAyHAvEN7ERKn84IVQSFzG2H3FQF%2BiZpgICczWmSRKD7f0%2BRLPtgohAGrTlThtw0Dm8HQAH23vbwqT%2F6gV9BC%2B3a%2B8rhjqvgT3GDvv8SrLcXNHNqAR8QhXPCr149qZk2Qs6tB9hG2O8kFNxTU67bQH0FIFkAOMayPAdpHp8CXk6oR3y35dk%2B%2Bz0Wd4KO%2FHF2la0d7uK3cfxj3u1AYxgmjgDCax9DDBjqnAbuZU8MWKPeEgrZxBHM7PLvabmlCfyXdfNjRIL6QjF8mr9HN1GMTMEX4wXmlKcPNH0irAq7Jj2%2BbypFfAI8paiUW7jRyJiqy%2BFi29Wujs%2BhJS%2BTa2KnF%2Fca0p27PQ5xvpNQT%2FSmzKnQ3ECSFLSvKTPSZAz8Y%2FCSQV2CZNv3T%2FH09%2BgLEls0GLgFfSH3fJolsams%2BfQgd4MQEboklHTeDpc%2Bm0H57%2BJ66&X-Amz-Signature=f1f155661424535c502b796204493d84c8ea8f5f7a98a3cdbf4b2a6bbcbafbe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJLF32S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJFMEMCH1LXixKo7KLZBjSFdmrvusbx5mxpdWKDLD5u%2FbhEiAQCIBqMwcJuGb1r%2BVIyXi%2FOMVXUcZdjbb9ez3VlLhVTNlPBKv8DCB4QABoMNjM3NDIzMTgzODA1IgxO8zehC%2Bfuy98Hhjgq3AO4%2FGH84M%2FDVGTrLTnN4pJHE7k4bNf390MegUksFh%2BANkbj62VK2XcyhJBFAxPqS7M%2FeKi10TL7r2%2FmucSDMDBXGE47OMGoBstiCHVAPeRh1mzpzCEbbCj5kE5tJno89P2KVnztEJ8hkukC9CMJQ%2B9kzRpudi5nb906ggF8Q6WTbunLgfUDSXrw%2FU70Sb3E5STD1vdjNjeJM9fqQm%2FwAKRGkMkZMFHQx7cMFEiEcY8ma2kakzUtF21owMwGwBVbuXlCX%2BDIVPXfYBAqxTa7B7UToayhcwImi1MYF7GA4S9BhgDCtgp7QsoqKbhpBetwNBuHGIvBOgBf5OQMgIgwojBAsFA9XZn%2BVSEsyXCjqTq03ufK6l0zTLq9bMcB0pYCEuDgASDxMIIFNacF0CAZqKJKO9Lxq0PWqmyTMc1HAyHAvEN7ERKn84IVQSFzG2H3FQF%2BiZpgICczWmSRKD7f0%2BRLPtgohAGrTlThtw0Dm8HQAH23vbwqT%2F6gV9BC%2B3a%2B8rhjqvgT3GDvv8SrLcXNHNqAR8QhXPCr149qZk2Qs6tB9hG2O8kFNxTU67bQH0FIFkAOMayPAdpHp8CXk6oR3y35dk%2B%2Bz0Wd4KO%2FHF2la0d7uK3cfxj3u1AYxgmjgDCax9DDBjqnAbuZU8MWKPeEgrZxBHM7PLvabmlCfyXdfNjRIL6QjF8mr9HN1GMTMEX4wXmlKcPNH0irAq7Jj2%2BbypFfAI8paiUW7jRyJiqy%2BFi29Wujs%2BhJS%2BTa2KnF%2Fca0p27PQ5xvpNQT%2FSmzKnQ3ECSFLSvKTPSZAz8Y%2FCSQV2CZNv3T%2FH09%2BgLEls0GLgFfSH3fJolsams%2BfQgd4MQEboklHTeDpc%2Bm0H57%2BJ66&X-Amz-Signature=f7a7e4014c170963a223402f47be016d1e7ff656f35c5759052d10baf0bd406a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJLF32S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJFMEMCH1LXixKo7KLZBjSFdmrvusbx5mxpdWKDLD5u%2FbhEiAQCIBqMwcJuGb1r%2BVIyXi%2FOMVXUcZdjbb9ez3VlLhVTNlPBKv8DCB4QABoMNjM3NDIzMTgzODA1IgxO8zehC%2Bfuy98Hhjgq3AO4%2FGH84M%2FDVGTrLTnN4pJHE7k4bNf390MegUksFh%2BANkbj62VK2XcyhJBFAxPqS7M%2FeKi10TL7r2%2FmucSDMDBXGE47OMGoBstiCHVAPeRh1mzpzCEbbCj5kE5tJno89P2KVnztEJ8hkukC9CMJQ%2B9kzRpudi5nb906ggF8Q6WTbunLgfUDSXrw%2FU70Sb3E5STD1vdjNjeJM9fqQm%2FwAKRGkMkZMFHQx7cMFEiEcY8ma2kakzUtF21owMwGwBVbuXlCX%2BDIVPXfYBAqxTa7B7UToayhcwImi1MYF7GA4S9BhgDCtgp7QsoqKbhpBetwNBuHGIvBOgBf5OQMgIgwojBAsFA9XZn%2BVSEsyXCjqTq03ufK6l0zTLq9bMcB0pYCEuDgASDxMIIFNacF0CAZqKJKO9Lxq0PWqmyTMc1HAyHAvEN7ERKn84IVQSFzG2H3FQF%2BiZpgICczWmSRKD7f0%2BRLPtgohAGrTlThtw0Dm8HQAH23vbwqT%2F6gV9BC%2B3a%2B8rhjqvgT3GDvv8SrLcXNHNqAR8QhXPCr149qZk2Qs6tB9hG2O8kFNxTU67bQH0FIFkAOMayPAdpHp8CXk6oR3y35dk%2B%2Bz0Wd4KO%2FHF2la0d7uK3cfxj3u1AYxgmjgDCax9DDBjqnAbuZU8MWKPeEgrZxBHM7PLvabmlCfyXdfNjRIL6QjF8mr9HN1GMTMEX4wXmlKcPNH0irAq7Jj2%2BbypFfAI8paiUW7jRyJiqy%2BFi29Wujs%2BhJS%2BTa2KnF%2Fca0p27PQ5xvpNQT%2FSmzKnQ3ECSFLSvKTPSZAz8Y%2FCSQV2CZNv3T%2FH09%2BgLEls0GLgFfSH3fJolsams%2BfQgd4MQEboklHTeDpc%2Bm0H57%2BJ66&X-Amz-Signature=9072d022303648185518c8d30ae56277488ec890cfad3088e592ed7f285d9281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

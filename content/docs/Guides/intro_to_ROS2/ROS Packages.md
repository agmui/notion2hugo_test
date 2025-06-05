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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSJG6TW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIE04O0v891Y22Ij2V%2FM2d19tHSARx%2FGDgsKoIMofF%2FTwAiEAsTv1WmCFuP7%2FhMbpLadvwncdoFoVQu5%2FfM6nPRu8ikkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIYk6wvNrMcx9RRVASrcAwk6Epde61gTmO9MqDzPf89FYByz1BdwAefQ%2FK%2Fop4sc%2FMjCSxh7Ro7l2tG8m7K6ixa8A5hAPrWAm3tn61PUNTcljaUlVYKbyRcAikBhOT5krBnPFouw7jxOrsYOxZy5XXTxTTrOwMvn50os1LI%2Fvp1Nq06xGez89POAYHBp3Epz6SVW3N6iKPW1OwwLh8bv9%2FJyab5IZOaFqAvQMRMlTiivpT84F1lzugLwuA2CG0qdGVWhLrC2T5126WtNPDmMXvRfx1%2FbW%2B51IlaOuwCydZ72AOWnnl5ZTvzvL5RmSMahiO1HPWopNkE7dPNJjsGgwG1HIKW3H%2BGMTxysA7awd5qxfm6o1mPY7vObZvDn76QnfLL6wEU%2FBSo6Q%2BZ2sLXIWKvFxCnplMjDVE3Db5NsOosn5LAXMrW8bMd3Nkn9DL1GeOrIeJcTU26haQiuuOxKsIBylxTpovOXHvAgaN0TT5YkD80X9BllpgdgP0uAsV81tIjPeLU%2BL7dVL4t63ZO%2FRFTgO3w02T50V0UmBR2qIEDhrnokwRufyf7IIKbLZckdmjrS7UOUJ0JoI9WeCGdQi%2FmoiUJBiums61b2kvQjWuHPbk7Ly0r4r7EJGsWmoIXN4960SdpkCuhU%2BVIbMNLEhsIGOqUBGlvTJU1J5FrHQSjTlHCB8WAg3idc0yXtV%2F%2BAixfqJtA764IyBCYvds6CYgYKTD9Y7jDxDkQHfndQ2XLGYcrprrpkWeIE3osZHFsanWmUCnxLbQ%2FVZ7P%2FjZbYj%2BqQpQKe%2BA0Ib24xbRwJUjcqY8%2BC132%2FJSwLna6me0sbCodSpsa9nMW19UssOhesHgArjOTQXC4fR3Ih7o3vMkJ1ijgm7qnDvkAJ&X-Amz-Signature=76a386e884d3c5e2dffa633d2378155cfea96f4da35728ac932e658bada564ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSJG6TW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIE04O0v891Y22Ij2V%2FM2d19tHSARx%2FGDgsKoIMofF%2FTwAiEAsTv1WmCFuP7%2FhMbpLadvwncdoFoVQu5%2FfM6nPRu8ikkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIYk6wvNrMcx9RRVASrcAwk6Epde61gTmO9MqDzPf89FYByz1BdwAefQ%2FK%2Fop4sc%2FMjCSxh7Ro7l2tG8m7K6ixa8A5hAPrWAm3tn61PUNTcljaUlVYKbyRcAikBhOT5krBnPFouw7jxOrsYOxZy5XXTxTTrOwMvn50os1LI%2Fvp1Nq06xGez89POAYHBp3Epz6SVW3N6iKPW1OwwLh8bv9%2FJyab5IZOaFqAvQMRMlTiivpT84F1lzugLwuA2CG0qdGVWhLrC2T5126WtNPDmMXvRfx1%2FbW%2B51IlaOuwCydZ72AOWnnl5ZTvzvL5RmSMahiO1HPWopNkE7dPNJjsGgwG1HIKW3H%2BGMTxysA7awd5qxfm6o1mPY7vObZvDn76QnfLL6wEU%2FBSo6Q%2BZ2sLXIWKvFxCnplMjDVE3Db5NsOosn5LAXMrW8bMd3Nkn9DL1GeOrIeJcTU26haQiuuOxKsIBylxTpovOXHvAgaN0TT5YkD80X9BllpgdgP0uAsV81tIjPeLU%2BL7dVL4t63ZO%2FRFTgO3w02T50V0UmBR2qIEDhrnokwRufyf7IIKbLZckdmjrS7UOUJ0JoI9WeCGdQi%2FmoiUJBiums61b2kvQjWuHPbk7Ly0r4r7EJGsWmoIXN4960SdpkCuhU%2BVIbMNLEhsIGOqUBGlvTJU1J5FrHQSjTlHCB8WAg3idc0yXtV%2F%2BAixfqJtA764IyBCYvds6CYgYKTD9Y7jDxDkQHfndQ2XLGYcrprrpkWeIE3osZHFsanWmUCnxLbQ%2FVZ7P%2FjZbYj%2BqQpQKe%2BA0Ib24xbRwJUjcqY8%2BC132%2FJSwLna6me0sbCodSpsa9nMW19UssOhesHgArjOTQXC4fR3Ih7o3vMkJ1ijgm7qnDvkAJ&X-Amz-Signature=b73c2f0ac27bedf12abbf7f3af003e4d2dc63c3d9ce0d32b2defa6245da0c27c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSJG6TW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIE04O0v891Y22Ij2V%2FM2d19tHSARx%2FGDgsKoIMofF%2FTwAiEAsTv1WmCFuP7%2FhMbpLadvwncdoFoVQu5%2FfM6nPRu8ikkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIYk6wvNrMcx9RRVASrcAwk6Epde61gTmO9MqDzPf89FYByz1BdwAefQ%2FK%2Fop4sc%2FMjCSxh7Ro7l2tG8m7K6ixa8A5hAPrWAm3tn61PUNTcljaUlVYKbyRcAikBhOT5krBnPFouw7jxOrsYOxZy5XXTxTTrOwMvn50os1LI%2Fvp1Nq06xGez89POAYHBp3Epz6SVW3N6iKPW1OwwLh8bv9%2FJyab5IZOaFqAvQMRMlTiivpT84F1lzugLwuA2CG0qdGVWhLrC2T5126WtNPDmMXvRfx1%2FbW%2B51IlaOuwCydZ72AOWnnl5ZTvzvL5RmSMahiO1HPWopNkE7dPNJjsGgwG1HIKW3H%2BGMTxysA7awd5qxfm6o1mPY7vObZvDn76QnfLL6wEU%2FBSo6Q%2BZ2sLXIWKvFxCnplMjDVE3Db5NsOosn5LAXMrW8bMd3Nkn9DL1GeOrIeJcTU26haQiuuOxKsIBylxTpovOXHvAgaN0TT5YkD80X9BllpgdgP0uAsV81tIjPeLU%2BL7dVL4t63ZO%2FRFTgO3w02T50V0UmBR2qIEDhrnokwRufyf7IIKbLZckdmjrS7UOUJ0JoI9WeCGdQi%2FmoiUJBiums61b2kvQjWuHPbk7Ly0r4r7EJGsWmoIXN4960SdpkCuhU%2BVIbMNLEhsIGOqUBGlvTJU1J5FrHQSjTlHCB8WAg3idc0yXtV%2F%2BAixfqJtA764IyBCYvds6CYgYKTD9Y7jDxDkQHfndQ2XLGYcrprrpkWeIE3osZHFsanWmUCnxLbQ%2FVZ7P%2FjZbYj%2BqQpQKe%2BA0Ib24xbRwJUjcqY8%2BC132%2FJSwLna6me0sbCodSpsa9nMW19UssOhesHgArjOTQXC4fR3Ih7o3vMkJ1ijgm7qnDvkAJ&X-Amz-Signature=e4a916507a8d31ce452d1071471727679642b6715926882a51e3ac7580377067&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSJG6TW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIE04O0v891Y22Ij2V%2FM2d19tHSARx%2FGDgsKoIMofF%2FTwAiEAsTv1WmCFuP7%2FhMbpLadvwncdoFoVQu5%2FfM6nPRu8ikkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIYk6wvNrMcx9RRVASrcAwk6Epde61gTmO9MqDzPf89FYByz1BdwAefQ%2FK%2Fop4sc%2FMjCSxh7Ro7l2tG8m7K6ixa8A5hAPrWAm3tn61PUNTcljaUlVYKbyRcAikBhOT5krBnPFouw7jxOrsYOxZy5XXTxTTrOwMvn50os1LI%2Fvp1Nq06xGez89POAYHBp3Epz6SVW3N6iKPW1OwwLh8bv9%2FJyab5IZOaFqAvQMRMlTiivpT84F1lzugLwuA2CG0qdGVWhLrC2T5126WtNPDmMXvRfx1%2FbW%2B51IlaOuwCydZ72AOWnnl5ZTvzvL5RmSMahiO1HPWopNkE7dPNJjsGgwG1HIKW3H%2BGMTxysA7awd5qxfm6o1mPY7vObZvDn76QnfLL6wEU%2FBSo6Q%2BZ2sLXIWKvFxCnplMjDVE3Db5NsOosn5LAXMrW8bMd3Nkn9DL1GeOrIeJcTU26haQiuuOxKsIBylxTpovOXHvAgaN0TT5YkD80X9BllpgdgP0uAsV81tIjPeLU%2BL7dVL4t63ZO%2FRFTgO3w02T50V0UmBR2qIEDhrnokwRufyf7IIKbLZckdmjrS7UOUJ0JoI9WeCGdQi%2FmoiUJBiums61b2kvQjWuHPbk7Ly0r4r7EJGsWmoIXN4960SdpkCuhU%2BVIbMNLEhsIGOqUBGlvTJU1J5FrHQSjTlHCB8WAg3idc0yXtV%2F%2BAixfqJtA764IyBCYvds6CYgYKTD9Y7jDxDkQHfndQ2XLGYcrprrpkWeIE3osZHFsanWmUCnxLbQ%2FVZ7P%2FjZbYj%2BqQpQKe%2BA0Ib24xbRwJUjcqY8%2BC132%2FJSwLna6me0sbCodSpsa9nMW19UssOhesHgArjOTQXC4fR3Ih7o3vMkJ1ijgm7qnDvkAJ&X-Amz-Signature=421849988e40919cdab27a4b344113bccfccb9667826cc4c57c3eca2bfca0c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSJG6TW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIE04O0v891Y22Ij2V%2FM2d19tHSARx%2FGDgsKoIMofF%2FTwAiEAsTv1WmCFuP7%2FhMbpLadvwncdoFoVQu5%2FfM6nPRu8ikkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIYk6wvNrMcx9RRVASrcAwk6Epde61gTmO9MqDzPf89FYByz1BdwAefQ%2FK%2Fop4sc%2FMjCSxh7Ro7l2tG8m7K6ixa8A5hAPrWAm3tn61PUNTcljaUlVYKbyRcAikBhOT5krBnPFouw7jxOrsYOxZy5XXTxTTrOwMvn50os1LI%2Fvp1Nq06xGez89POAYHBp3Epz6SVW3N6iKPW1OwwLh8bv9%2FJyab5IZOaFqAvQMRMlTiivpT84F1lzugLwuA2CG0qdGVWhLrC2T5126WtNPDmMXvRfx1%2FbW%2B51IlaOuwCydZ72AOWnnl5ZTvzvL5RmSMahiO1HPWopNkE7dPNJjsGgwG1HIKW3H%2BGMTxysA7awd5qxfm6o1mPY7vObZvDn76QnfLL6wEU%2FBSo6Q%2BZ2sLXIWKvFxCnplMjDVE3Db5NsOosn5LAXMrW8bMd3Nkn9DL1GeOrIeJcTU26haQiuuOxKsIBylxTpovOXHvAgaN0TT5YkD80X9BllpgdgP0uAsV81tIjPeLU%2BL7dVL4t63ZO%2FRFTgO3w02T50V0UmBR2qIEDhrnokwRufyf7IIKbLZckdmjrS7UOUJ0JoI9WeCGdQi%2FmoiUJBiums61b2kvQjWuHPbk7Ly0r4r7EJGsWmoIXN4960SdpkCuhU%2BVIbMNLEhsIGOqUBGlvTJU1J5FrHQSjTlHCB8WAg3idc0yXtV%2F%2BAixfqJtA764IyBCYvds6CYgYKTD9Y7jDxDkQHfndQ2XLGYcrprrpkWeIE3osZHFsanWmUCnxLbQ%2FVZ7P%2FjZbYj%2BqQpQKe%2BA0Ib24xbRwJUjcqY8%2BC132%2FJSwLna6me0sbCodSpsa9nMW19UssOhesHgArjOTQXC4fR3Ih7o3vMkJ1ijgm7qnDvkAJ&X-Amz-Signature=dbff2a03f88f44a7022abb9ef8c847d7f9171411633c4a6e2817d81336615f13&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSJG6TW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIE04O0v891Y22Ij2V%2FM2d19tHSARx%2FGDgsKoIMofF%2FTwAiEAsTv1WmCFuP7%2FhMbpLadvwncdoFoVQu5%2FfM6nPRu8ikkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIYk6wvNrMcx9RRVASrcAwk6Epde61gTmO9MqDzPf89FYByz1BdwAefQ%2FK%2Fop4sc%2FMjCSxh7Ro7l2tG8m7K6ixa8A5hAPrWAm3tn61PUNTcljaUlVYKbyRcAikBhOT5krBnPFouw7jxOrsYOxZy5XXTxTTrOwMvn50os1LI%2Fvp1Nq06xGez89POAYHBp3Epz6SVW3N6iKPW1OwwLh8bv9%2FJyab5IZOaFqAvQMRMlTiivpT84F1lzugLwuA2CG0qdGVWhLrC2T5126WtNPDmMXvRfx1%2FbW%2B51IlaOuwCydZ72AOWnnl5ZTvzvL5RmSMahiO1HPWopNkE7dPNJjsGgwG1HIKW3H%2BGMTxysA7awd5qxfm6o1mPY7vObZvDn76QnfLL6wEU%2FBSo6Q%2BZ2sLXIWKvFxCnplMjDVE3Db5NsOosn5LAXMrW8bMd3Nkn9DL1GeOrIeJcTU26haQiuuOxKsIBylxTpovOXHvAgaN0TT5YkD80X9BllpgdgP0uAsV81tIjPeLU%2BL7dVL4t63ZO%2FRFTgO3w02T50V0UmBR2qIEDhrnokwRufyf7IIKbLZckdmjrS7UOUJ0JoI9WeCGdQi%2FmoiUJBiums61b2kvQjWuHPbk7Ly0r4r7EJGsWmoIXN4960SdpkCuhU%2BVIbMNLEhsIGOqUBGlvTJU1J5FrHQSjTlHCB8WAg3idc0yXtV%2F%2BAixfqJtA764IyBCYvds6CYgYKTD9Y7jDxDkQHfndQ2XLGYcrprrpkWeIE3osZHFsanWmUCnxLbQ%2FVZ7P%2FjZbYj%2BqQpQKe%2BA0Ib24xbRwJUjcqY8%2BC132%2FJSwLna6me0sbCodSpsa9nMW19UssOhesHgArjOTQXC4fR3Ih7o3vMkJ1ijgm7qnDvkAJ&X-Amz-Signature=f693be64d372270de8fe10717e8a620cdfbd3b445621e2ada7f15f30f7fdc80c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSJG6TW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIE04O0v891Y22Ij2V%2FM2d19tHSARx%2FGDgsKoIMofF%2FTwAiEAsTv1WmCFuP7%2FhMbpLadvwncdoFoVQu5%2FfM6nPRu8ikkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIYk6wvNrMcx9RRVASrcAwk6Epde61gTmO9MqDzPf89FYByz1BdwAefQ%2FK%2Fop4sc%2FMjCSxh7Ro7l2tG8m7K6ixa8A5hAPrWAm3tn61PUNTcljaUlVYKbyRcAikBhOT5krBnPFouw7jxOrsYOxZy5XXTxTTrOwMvn50os1LI%2Fvp1Nq06xGez89POAYHBp3Epz6SVW3N6iKPW1OwwLh8bv9%2FJyab5IZOaFqAvQMRMlTiivpT84F1lzugLwuA2CG0qdGVWhLrC2T5126WtNPDmMXvRfx1%2FbW%2B51IlaOuwCydZ72AOWnnl5ZTvzvL5RmSMahiO1HPWopNkE7dPNJjsGgwG1HIKW3H%2BGMTxysA7awd5qxfm6o1mPY7vObZvDn76QnfLL6wEU%2FBSo6Q%2BZ2sLXIWKvFxCnplMjDVE3Db5NsOosn5LAXMrW8bMd3Nkn9DL1GeOrIeJcTU26haQiuuOxKsIBylxTpovOXHvAgaN0TT5YkD80X9BllpgdgP0uAsV81tIjPeLU%2BL7dVL4t63ZO%2FRFTgO3w02T50V0UmBR2qIEDhrnokwRufyf7IIKbLZckdmjrS7UOUJ0JoI9WeCGdQi%2FmoiUJBiums61b2kvQjWuHPbk7Ly0r4r7EJGsWmoIXN4960SdpkCuhU%2BVIbMNLEhsIGOqUBGlvTJU1J5FrHQSjTlHCB8WAg3idc0yXtV%2F%2BAixfqJtA764IyBCYvds6CYgYKTD9Y7jDxDkQHfndQ2XLGYcrprrpkWeIE3osZHFsanWmUCnxLbQ%2FVZ7P%2FjZbYj%2BqQpQKe%2BA0Ib24xbRwJUjcqY8%2BC132%2FJSwLna6me0sbCodSpsa9nMW19UssOhesHgArjOTQXC4fR3Ih7o3vMkJ1ijgm7qnDvkAJ&X-Amz-Signature=363626592400a9f918a5a1569367be073de958048bc3d5cbd9204461f438d75b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

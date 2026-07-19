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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAOVWDJ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfxJxojQ4yLd%2F4iIeVfS2jsGZPY27JzLPJqLvs8C3S%2BAiBUbhXICWdqVyCftaFNp%2BVki6YQYliHp2b901L8XUltjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqIRdsiuIAOHazrJWKtwD5X8HDKsZLoieJYWTPRApRYsU1dr4wbF4YIOxeaWIWHCYGs4GZupHQGDZ2fGNtC1CoprAKDm7A6DfYhcD%2FVknlAbA8pyFSd2UiV%2FVGUamVgkODmwlvaxfp9XlnjM44ZEXxmZImnehnZnAesN7j1n1cODoV6NAOMyC9pR6tUD2E3kgIvcr1HGLU7C5aNG1Kjws7Wll1dWrznCkdtPyQWS5mwj8TYIQecR1WN5JnE9uIxgmFKTA7D59nYd80lq00Oz0%2FBMnUXrWGNZtvWXmYELPgINiXrE4nx%2FBpMPzC1sX3Jb1LSjA26r2S2DcPQHfsnZst%2FhcpRhaG%2FVborssPaETwwJJvB1z1BZYz5oGW9uYJo5gSJEisvTDZh2Ual%2BzWtz6BMwRLxdrF8OgR%2BeZ6CrBmsxtebQXM5Y%2F1Vh8JF%2FYKRQIROA2EHkGi2z0uoFJ1IkxQGRjTvCpxgaIyoHTjnMDT9WNg11yYJDIUF9zaydv0RPqFRr1K0eyfbtK1n2crHAztKDyAWm6GABRMYTvxbJSNqZOzdJsc5brz4Qd6iPVTO52voH1m5%2BfDCWarD8%2B9l8nuKHlxS1J9t40OqGJzmuLNhsoa32kFNTamBKZoIpqhfkxWtJP6aauUeVrwmsw%2B9bw0gY6pgGt8eKV9khx2iYdxrcyK9O5f9WB3lTWiCXepI%2FChCe2dA7HVIXYOSNUk%2FKMEDbdACgy%2FG05oJm7JYpY6njS36XOwPRfNYEpETQ81OLy9ttHqVXrOp8rk39smtyPdVEGERDT5rtvVMBpPIh4H%2BdiivQT%2B0uOOiG38QYlpCbGF374iF9rSW%2BcqwTii5CDh6DNN%2BdtfH9CFIrX%2B20U2wTpMDu%2Bn88Ehbzm&X-Amz-Signature=5e410bd78048fa311ba2fe38fa7a50d3f7954cd6bdf1bb3020248c28ba0b6831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAOVWDJ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfxJxojQ4yLd%2F4iIeVfS2jsGZPY27JzLPJqLvs8C3S%2BAiBUbhXICWdqVyCftaFNp%2BVki6YQYliHp2b901L8XUltjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqIRdsiuIAOHazrJWKtwD5X8HDKsZLoieJYWTPRApRYsU1dr4wbF4YIOxeaWIWHCYGs4GZupHQGDZ2fGNtC1CoprAKDm7A6DfYhcD%2FVknlAbA8pyFSd2UiV%2FVGUamVgkODmwlvaxfp9XlnjM44ZEXxmZImnehnZnAesN7j1n1cODoV6NAOMyC9pR6tUD2E3kgIvcr1HGLU7C5aNG1Kjws7Wll1dWrznCkdtPyQWS5mwj8TYIQecR1WN5JnE9uIxgmFKTA7D59nYd80lq00Oz0%2FBMnUXrWGNZtvWXmYELPgINiXrE4nx%2FBpMPzC1sX3Jb1LSjA26r2S2DcPQHfsnZst%2FhcpRhaG%2FVborssPaETwwJJvB1z1BZYz5oGW9uYJo5gSJEisvTDZh2Ual%2BzWtz6BMwRLxdrF8OgR%2BeZ6CrBmsxtebQXM5Y%2F1Vh8JF%2FYKRQIROA2EHkGi2z0uoFJ1IkxQGRjTvCpxgaIyoHTjnMDT9WNg11yYJDIUF9zaydv0RPqFRr1K0eyfbtK1n2crHAztKDyAWm6GABRMYTvxbJSNqZOzdJsc5brz4Qd6iPVTO52voH1m5%2BfDCWarD8%2B9l8nuKHlxS1J9t40OqGJzmuLNhsoa32kFNTamBKZoIpqhfkxWtJP6aauUeVrwmsw%2B9bw0gY6pgGt8eKV9khx2iYdxrcyK9O5f9WB3lTWiCXepI%2FChCe2dA7HVIXYOSNUk%2FKMEDbdACgy%2FG05oJm7JYpY6njS36XOwPRfNYEpETQ81OLy9ttHqVXrOp8rk39smtyPdVEGERDT5rtvVMBpPIh4H%2BdiivQT%2B0uOOiG38QYlpCbGF374iF9rSW%2BcqwTii5CDh6DNN%2BdtfH9CFIrX%2B20U2wTpMDu%2Bn88Ehbzm&X-Amz-Signature=fb8b0489f967f3cc78765adb859989a1c2a7e640431de05ce328070787e3d381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAOVWDJ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfxJxojQ4yLd%2F4iIeVfS2jsGZPY27JzLPJqLvs8C3S%2BAiBUbhXICWdqVyCftaFNp%2BVki6YQYliHp2b901L8XUltjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqIRdsiuIAOHazrJWKtwD5X8HDKsZLoieJYWTPRApRYsU1dr4wbF4YIOxeaWIWHCYGs4GZupHQGDZ2fGNtC1CoprAKDm7A6DfYhcD%2FVknlAbA8pyFSd2UiV%2FVGUamVgkODmwlvaxfp9XlnjM44ZEXxmZImnehnZnAesN7j1n1cODoV6NAOMyC9pR6tUD2E3kgIvcr1HGLU7C5aNG1Kjws7Wll1dWrznCkdtPyQWS5mwj8TYIQecR1WN5JnE9uIxgmFKTA7D59nYd80lq00Oz0%2FBMnUXrWGNZtvWXmYELPgINiXrE4nx%2FBpMPzC1sX3Jb1LSjA26r2S2DcPQHfsnZst%2FhcpRhaG%2FVborssPaETwwJJvB1z1BZYz5oGW9uYJo5gSJEisvTDZh2Ual%2BzWtz6BMwRLxdrF8OgR%2BeZ6CrBmsxtebQXM5Y%2F1Vh8JF%2FYKRQIROA2EHkGi2z0uoFJ1IkxQGRjTvCpxgaIyoHTjnMDT9WNg11yYJDIUF9zaydv0RPqFRr1K0eyfbtK1n2crHAztKDyAWm6GABRMYTvxbJSNqZOzdJsc5brz4Qd6iPVTO52voH1m5%2BfDCWarD8%2B9l8nuKHlxS1J9t40OqGJzmuLNhsoa32kFNTamBKZoIpqhfkxWtJP6aauUeVrwmsw%2B9bw0gY6pgGt8eKV9khx2iYdxrcyK9O5f9WB3lTWiCXepI%2FChCe2dA7HVIXYOSNUk%2FKMEDbdACgy%2FG05oJm7JYpY6njS36XOwPRfNYEpETQ81OLy9ttHqVXrOp8rk39smtyPdVEGERDT5rtvVMBpPIh4H%2BdiivQT%2B0uOOiG38QYlpCbGF374iF9rSW%2BcqwTii5CDh6DNN%2BdtfH9CFIrX%2B20U2wTpMDu%2Bn88Ehbzm&X-Amz-Signature=c6cc502fb4be8ddae70d5828f06b9782d2a0f47bb84f418078ef7d0f05dd5c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAOVWDJ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfxJxojQ4yLd%2F4iIeVfS2jsGZPY27JzLPJqLvs8C3S%2BAiBUbhXICWdqVyCftaFNp%2BVki6YQYliHp2b901L8XUltjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqIRdsiuIAOHazrJWKtwD5X8HDKsZLoieJYWTPRApRYsU1dr4wbF4YIOxeaWIWHCYGs4GZupHQGDZ2fGNtC1CoprAKDm7A6DfYhcD%2FVknlAbA8pyFSd2UiV%2FVGUamVgkODmwlvaxfp9XlnjM44ZEXxmZImnehnZnAesN7j1n1cODoV6NAOMyC9pR6tUD2E3kgIvcr1HGLU7C5aNG1Kjws7Wll1dWrznCkdtPyQWS5mwj8TYIQecR1WN5JnE9uIxgmFKTA7D59nYd80lq00Oz0%2FBMnUXrWGNZtvWXmYELPgINiXrE4nx%2FBpMPzC1sX3Jb1LSjA26r2S2DcPQHfsnZst%2FhcpRhaG%2FVborssPaETwwJJvB1z1BZYz5oGW9uYJo5gSJEisvTDZh2Ual%2BzWtz6BMwRLxdrF8OgR%2BeZ6CrBmsxtebQXM5Y%2F1Vh8JF%2FYKRQIROA2EHkGi2z0uoFJ1IkxQGRjTvCpxgaIyoHTjnMDT9WNg11yYJDIUF9zaydv0RPqFRr1K0eyfbtK1n2crHAztKDyAWm6GABRMYTvxbJSNqZOzdJsc5brz4Qd6iPVTO52voH1m5%2BfDCWarD8%2B9l8nuKHlxS1J9t40OqGJzmuLNhsoa32kFNTamBKZoIpqhfkxWtJP6aauUeVrwmsw%2B9bw0gY6pgGt8eKV9khx2iYdxrcyK9O5f9WB3lTWiCXepI%2FChCe2dA7HVIXYOSNUk%2FKMEDbdACgy%2FG05oJm7JYpY6njS36XOwPRfNYEpETQ81OLy9ttHqVXrOp8rk39smtyPdVEGERDT5rtvVMBpPIh4H%2BdiivQT%2B0uOOiG38QYlpCbGF374iF9rSW%2BcqwTii5CDh6DNN%2BdtfH9CFIrX%2B20U2wTpMDu%2Bn88Ehbzm&X-Amz-Signature=18c33a594860c3ff2a9e0a578aa0e16f2133b13e049b3fb50789536c52f78e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAOVWDJ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfxJxojQ4yLd%2F4iIeVfS2jsGZPY27JzLPJqLvs8C3S%2BAiBUbhXICWdqVyCftaFNp%2BVki6YQYliHp2b901L8XUltjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqIRdsiuIAOHazrJWKtwD5X8HDKsZLoieJYWTPRApRYsU1dr4wbF4YIOxeaWIWHCYGs4GZupHQGDZ2fGNtC1CoprAKDm7A6DfYhcD%2FVknlAbA8pyFSd2UiV%2FVGUamVgkODmwlvaxfp9XlnjM44ZEXxmZImnehnZnAesN7j1n1cODoV6NAOMyC9pR6tUD2E3kgIvcr1HGLU7C5aNG1Kjws7Wll1dWrznCkdtPyQWS5mwj8TYIQecR1WN5JnE9uIxgmFKTA7D59nYd80lq00Oz0%2FBMnUXrWGNZtvWXmYELPgINiXrE4nx%2FBpMPzC1sX3Jb1LSjA26r2S2DcPQHfsnZst%2FhcpRhaG%2FVborssPaETwwJJvB1z1BZYz5oGW9uYJo5gSJEisvTDZh2Ual%2BzWtz6BMwRLxdrF8OgR%2BeZ6CrBmsxtebQXM5Y%2F1Vh8JF%2FYKRQIROA2EHkGi2z0uoFJ1IkxQGRjTvCpxgaIyoHTjnMDT9WNg11yYJDIUF9zaydv0RPqFRr1K0eyfbtK1n2crHAztKDyAWm6GABRMYTvxbJSNqZOzdJsc5brz4Qd6iPVTO52voH1m5%2BfDCWarD8%2B9l8nuKHlxS1J9t40OqGJzmuLNhsoa32kFNTamBKZoIpqhfkxWtJP6aauUeVrwmsw%2B9bw0gY6pgGt8eKV9khx2iYdxrcyK9O5f9WB3lTWiCXepI%2FChCe2dA7HVIXYOSNUk%2FKMEDbdACgy%2FG05oJm7JYpY6njS36XOwPRfNYEpETQ81OLy9ttHqVXrOp8rk39smtyPdVEGERDT5rtvVMBpPIh4H%2BdiivQT%2B0uOOiG38QYlpCbGF374iF9rSW%2BcqwTii5CDh6DNN%2BdtfH9CFIrX%2B20U2wTpMDu%2Bn88Ehbzm&X-Amz-Signature=2b36769f332ba547348090022f75ba4ffcd34eadcb542472d96d73c751c79006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAOVWDJ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfxJxojQ4yLd%2F4iIeVfS2jsGZPY27JzLPJqLvs8C3S%2BAiBUbhXICWdqVyCftaFNp%2BVki6YQYliHp2b901L8XUltjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqIRdsiuIAOHazrJWKtwD5X8HDKsZLoieJYWTPRApRYsU1dr4wbF4YIOxeaWIWHCYGs4GZupHQGDZ2fGNtC1CoprAKDm7A6DfYhcD%2FVknlAbA8pyFSd2UiV%2FVGUamVgkODmwlvaxfp9XlnjM44ZEXxmZImnehnZnAesN7j1n1cODoV6NAOMyC9pR6tUD2E3kgIvcr1HGLU7C5aNG1Kjws7Wll1dWrznCkdtPyQWS5mwj8TYIQecR1WN5JnE9uIxgmFKTA7D59nYd80lq00Oz0%2FBMnUXrWGNZtvWXmYELPgINiXrE4nx%2FBpMPzC1sX3Jb1LSjA26r2S2DcPQHfsnZst%2FhcpRhaG%2FVborssPaETwwJJvB1z1BZYz5oGW9uYJo5gSJEisvTDZh2Ual%2BzWtz6BMwRLxdrF8OgR%2BeZ6CrBmsxtebQXM5Y%2F1Vh8JF%2FYKRQIROA2EHkGi2z0uoFJ1IkxQGRjTvCpxgaIyoHTjnMDT9WNg11yYJDIUF9zaydv0RPqFRr1K0eyfbtK1n2crHAztKDyAWm6GABRMYTvxbJSNqZOzdJsc5brz4Qd6iPVTO52voH1m5%2BfDCWarD8%2B9l8nuKHlxS1J9t40OqGJzmuLNhsoa32kFNTamBKZoIpqhfkxWtJP6aauUeVrwmsw%2B9bw0gY6pgGt8eKV9khx2iYdxrcyK9O5f9WB3lTWiCXepI%2FChCe2dA7HVIXYOSNUk%2FKMEDbdACgy%2FG05oJm7JYpY6njS36XOwPRfNYEpETQ81OLy9ttHqVXrOp8rk39smtyPdVEGERDT5rtvVMBpPIh4H%2BdiivQT%2B0uOOiG38QYlpCbGF374iF9rSW%2BcqwTii5CDh6DNN%2BdtfH9CFIrX%2B20U2wTpMDu%2Bn88Ehbzm&X-Amz-Signature=753e5c1ccf33f71a6725d7ad5351dd51369da9d93f2132297e5dbf63ebf3ecb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAOVWDJ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfxJxojQ4yLd%2F4iIeVfS2jsGZPY27JzLPJqLvs8C3S%2BAiBUbhXICWdqVyCftaFNp%2BVki6YQYliHp2b901L8XUltjCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqIRdsiuIAOHazrJWKtwD5X8HDKsZLoieJYWTPRApRYsU1dr4wbF4YIOxeaWIWHCYGs4GZupHQGDZ2fGNtC1CoprAKDm7A6DfYhcD%2FVknlAbA8pyFSd2UiV%2FVGUamVgkODmwlvaxfp9XlnjM44ZEXxmZImnehnZnAesN7j1n1cODoV6NAOMyC9pR6tUD2E3kgIvcr1HGLU7C5aNG1Kjws7Wll1dWrznCkdtPyQWS5mwj8TYIQecR1WN5JnE9uIxgmFKTA7D59nYd80lq00Oz0%2FBMnUXrWGNZtvWXmYELPgINiXrE4nx%2FBpMPzC1sX3Jb1LSjA26r2S2DcPQHfsnZst%2FhcpRhaG%2FVborssPaETwwJJvB1z1BZYz5oGW9uYJo5gSJEisvTDZh2Ual%2BzWtz6BMwRLxdrF8OgR%2BeZ6CrBmsxtebQXM5Y%2F1Vh8JF%2FYKRQIROA2EHkGi2z0uoFJ1IkxQGRjTvCpxgaIyoHTjnMDT9WNg11yYJDIUF9zaydv0RPqFRr1K0eyfbtK1n2crHAztKDyAWm6GABRMYTvxbJSNqZOzdJsc5brz4Qd6iPVTO52voH1m5%2BfDCWarD8%2B9l8nuKHlxS1J9t40OqGJzmuLNhsoa32kFNTamBKZoIpqhfkxWtJP6aauUeVrwmsw%2B9bw0gY6pgGt8eKV9khx2iYdxrcyK9O5f9WB3lTWiCXepI%2FChCe2dA7HVIXYOSNUk%2FKMEDbdACgy%2FG05oJm7JYpY6njS36XOwPRfNYEpETQ81OLy9ttHqVXrOp8rk39smtyPdVEGERDT5rtvVMBpPIh4H%2BdiivQT%2B0uOOiG38QYlpCbGF374iF9rSW%2BcqwTii5CDh6DNN%2BdtfH9CFIrX%2B20U2wTpMDu%2Bn88Ehbzm&X-Amz-Signature=942b78ec4440428e2d4ff7c24867285761d1bc2f4259570a4ebc77ee1170aa68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

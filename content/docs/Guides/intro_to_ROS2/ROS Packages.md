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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYAA3WX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG23maj%2B5RMAeRNThfRpEQVPdmMfy8eLtPeLdjUNFxWiAiAR0hfODb%2FHI55np3QXAQ7RrZifbJB8kd6c2VOfZcyb0iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgyT5mxKBvXnRjybKtwDLT3d%2BH9sKOTuWxnaAKr8faDNY9KSjRiTTyCuVQIu46nmz0bJH1Z%2F39JkD%2BTkKb4nyFl3AhYGs%2FpCpknMiUHIExzieLTR0HnUBeIQOTgBF0vCyoO4Fq9FrxVa2wpXmwtnNiqZERE2UtshiyTs7PAQ5bFfjtGrb%2BcddFO2J%2FZ1QDLg0fAUbYRDWZJ5CEqKes5r9YdkhU%2BwC1gzpQNfVas06EsgcSFtMd33kyOEdzNJHq6hvLUkgRaAxwytkJbrwmpNKYSXGns8v2QJGbAMdIfrS1v3beZCHDGnZ8dMJr4NEpp7ZgNoE2hmz4K1bIk1BOhiZkvCnaRvggKCsjKyWJw1MrrcG1bEsjf2QXVTUOYEEkkfeZCpsBGU2MHCEw1ToVpWdrEzkW6pj51%2F7LcRXkEB26Eyf7lWV5Nqx0Y20FzJBAktGdi1rCo6C%2BDXzeE%2BTox1KYG%2BhGqAsZJOmiQ7iT3tKJ7wgzTP3YTFC4yJ%2B73C2jSUMYkZHapocUIPPCmoMw5pYoLxgUV4ekd42hVCuiQ6uqrFEv7f2yPeu8YTbC26HZ5vu4%2F%2FuskA3MOQ1GWCZLhxzIHc4e4atPIQeiL%2FBLV9inW9OWddMYrhXPc1XRKZprecjw37u3BS91L9JtIws8navwY6pgEkht1AwJdAXtYaDuU21c9FDBWqWZumbHMY1Xm4FgLbBOc82JVr5iR2uzmB69RPOhIOepKZpU1fff0EBCRD%2Fs6mZjXGQoU8PNRJhAoSVH%2BZyqtaBOyxygf7a6%2FPWHlKLIRugSCXsOd6OST%2BlKIdAWqSQTmGpK%2B8IDk0KKSSHHPb%2BHMGH%2F6aC5zpCKe8K%2BAtKxdd%2F6T65MrdP8GpF%2F4L9nDf%2Fj808GUO&X-Amz-Signature=be712330d93d6365ed1b64034923bc750af5541d8e36cfc1ea24f08fc06a463a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYAA3WX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG23maj%2B5RMAeRNThfRpEQVPdmMfy8eLtPeLdjUNFxWiAiAR0hfODb%2FHI55np3QXAQ7RrZifbJB8kd6c2VOfZcyb0iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgyT5mxKBvXnRjybKtwDLT3d%2BH9sKOTuWxnaAKr8faDNY9KSjRiTTyCuVQIu46nmz0bJH1Z%2F39JkD%2BTkKb4nyFl3AhYGs%2FpCpknMiUHIExzieLTR0HnUBeIQOTgBF0vCyoO4Fq9FrxVa2wpXmwtnNiqZERE2UtshiyTs7PAQ5bFfjtGrb%2BcddFO2J%2FZ1QDLg0fAUbYRDWZJ5CEqKes5r9YdkhU%2BwC1gzpQNfVas06EsgcSFtMd33kyOEdzNJHq6hvLUkgRaAxwytkJbrwmpNKYSXGns8v2QJGbAMdIfrS1v3beZCHDGnZ8dMJr4NEpp7ZgNoE2hmz4K1bIk1BOhiZkvCnaRvggKCsjKyWJw1MrrcG1bEsjf2QXVTUOYEEkkfeZCpsBGU2MHCEw1ToVpWdrEzkW6pj51%2F7LcRXkEB26Eyf7lWV5Nqx0Y20FzJBAktGdi1rCo6C%2BDXzeE%2BTox1KYG%2BhGqAsZJOmiQ7iT3tKJ7wgzTP3YTFC4yJ%2B73C2jSUMYkZHapocUIPPCmoMw5pYoLxgUV4ekd42hVCuiQ6uqrFEv7f2yPeu8YTbC26HZ5vu4%2F%2FuskA3MOQ1GWCZLhxzIHc4e4atPIQeiL%2FBLV9inW9OWddMYrhXPc1XRKZprecjw37u3BS91L9JtIws8navwY6pgEkht1AwJdAXtYaDuU21c9FDBWqWZumbHMY1Xm4FgLbBOc82JVr5iR2uzmB69RPOhIOepKZpU1fff0EBCRD%2Fs6mZjXGQoU8PNRJhAoSVH%2BZyqtaBOyxygf7a6%2FPWHlKLIRugSCXsOd6OST%2BlKIdAWqSQTmGpK%2B8IDk0KKSSHHPb%2BHMGH%2F6aC5zpCKe8K%2BAtKxdd%2F6T65MrdP8GpF%2F4L9nDf%2Fj808GUO&X-Amz-Signature=02e14d125dc097c81a5a35e472ec6d46a71657d94bfa6185e94735edb445cea3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYAA3WX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG23maj%2B5RMAeRNThfRpEQVPdmMfy8eLtPeLdjUNFxWiAiAR0hfODb%2FHI55np3QXAQ7RrZifbJB8kd6c2VOfZcyb0iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgyT5mxKBvXnRjybKtwDLT3d%2BH9sKOTuWxnaAKr8faDNY9KSjRiTTyCuVQIu46nmz0bJH1Z%2F39JkD%2BTkKb4nyFl3AhYGs%2FpCpknMiUHIExzieLTR0HnUBeIQOTgBF0vCyoO4Fq9FrxVa2wpXmwtnNiqZERE2UtshiyTs7PAQ5bFfjtGrb%2BcddFO2J%2FZ1QDLg0fAUbYRDWZJ5CEqKes5r9YdkhU%2BwC1gzpQNfVas06EsgcSFtMd33kyOEdzNJHq6hvLUkgRaAxwytkJbrwmpNKYSXGns8v2QJGbAMdIfrS1v3beZCHDGnZ8dMJr4NEpp7ZgNoE2hmz4K1bIk1BOhiZkvCnaRvggKCsjKyWJw1MrrcG1bEsjf2QXVTUOYEEkkfeZCpsBGU2MHCEw1ToVpWdrEzkW6pj51%2F7LcRXkEB26Eyf7lWV5Nqx0Y20FzJBAktGdi1rCo6C%2BDXzeE%2BTox1KYG%2BhGqAsZJOmiQ7iT3tKJ7wgzTP3YTFC4yJ%2B73C2jSUMYkZHapocUIPPCmoMw5pYoLxgUV4ekd42hVCuiQ6uqrFEv7f2yPeu8YTbC26HZ5vu4%2F%2FuskA3MOQ1GWCZLhxzIHc4e4atPIQeiL%2FBLV9inW9OWddMYrhXPc1XRKZprecjw37u3BS91L9JtIws8navwY6pgEkht1AwJdAXtYaDuU21c9FDBWqWZumbHMY1Xm4FgLbBOc82JVr5iR2uzmB69RPOhIOepKZpU1fff0EBCRD%2Fs6mZjXGQoU8PNRJhAoSVH%2BZyqtaBOyxygf7a6%2FPWHlKLIRugSCXsOd6OST%2BlKIdAWqSQTmGpK%2B8IDk0KKSSHHPb%2BHMGH%2F6aC5zpCKe8K%2BAtKxdd%2F6T65MrdP8GpF%2F4L9nDf%2Fj808GUO&X-Amz-Signature=fe6edb8554d0d07ee9be8e2c7e7b1fa016bf18635c91615fcad36750ec1a0bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYAA3WX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG23maj%2B5RMAeRNThfRpEQVPdmMfy8eLtPeLdjUNFxWiAiAR0hfODb%2FHI55np3QXAQ7RrZifbJB8kd6c2VOfZcyb0iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgyT5mxKBvXnRjybKtwDLT3d%2BH9sKOTuWxnaAKr8faDNY9KSjRiTTyCuVQIu46nmz0bJH1Z%2F39JkD%2BTkKb4nyFl3AhYGs%2FpCpknMiUHIExzieLTR0HnUBeIQOTgBF0vCyoO4Fq9FrxVa2wpXmwtnNiqZERE2UtshiyTs7PAQ5bFfjtGrb%2BcddFO2J%2FZ1QDLg0fAUbYRDWZJ5CEqKes5r9YdkhU%2BwC1gzpQNfVas06EsgcSFtMd33kyOEdzNJHq6hvLUkgRaAxwytkJbrwmpNKYSXGns8v2QJGbAMdIfrS1v3beZCHDGnZ8dMJr4NEpp7ZgNoE2hmz4K1bIk1BOhiZkvCnaRvggKCsjKyWJw1MrrcG1bEsjf2QXVTUOYEEkkfeZCpsBGU2MHCEw1ToVpWdrEzkW6pj51%2F7LcRXkEB26Eyf7lWV5Nqx0Y20FzJBAktGdi1rCo6C%2BDXzeE%2BTox1KYG%2BhGqAsZJOmiQ7iT3tKJ7wgzTP3YTFC4yJ%2B73C2jSUMYkZHapocUIPPCmoMw5pYoLxgUV4ekd42hVCuiQ6uqrFEv7f2yPeu8YTbC26HZ5vu4%2F%2FuskA3MOQ1GWCZLhxzIHc4e4atPIQeiL%2FBLV9inW9OWddMYrhXPc1XRKZprecjw37u3BS91L9JtIws8navwY6pgEkht1AwJdAXtYaDuU21c9FDBWqWZumbHMY1Xm4FgLbBOc82JVr5iR2uzmB69RPOhIOepKZpU1fff0EBCRD%2Fs6mZjXGQoU8PNRJhAoSVH%2BZyqtaBOyxygf7a6%2FPWHlKLIRugSCXsOd6OST%2BlKIdAWqSQTmGpK%2B8IDk0KKSSHHPb%2BHMGH%2F6aC5zpCKe8K%2BAtKxdd%2F6T65MrdP8GpF%2F4L9nDf%2Fj808GUO&X-Amz-Signature=91edf715d8cc50af9549ff4df188205a24f4620f98d8449cb33e52fcec0c7e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYAA3WX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG23maj%2B5RMAeRNThfRpEQVPdmMfy8eLtPeLdjUNFxWiAiAR0hfODb%2FHI55np3QXAQ7RrZifbJB8kd6c2VOfZcyb0iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgyT5mxKBvXnRjybKtwDLT3d%2BH9sKOTuWxnaAKr8faDNY9KSjRiTTyCuVQIu46nmz0bJH1Z%2F39JkD%2BTkKb4nyFl3AhYGs%2FpCpknMiUHIExzieLTR0HnUBeIQOTgBF0vCyoO4Fq9FrxVa2wpXmwtnNiqZERE2UtshiyTs7PAQ5bFfjtGrb%2BcddFO2J%2FZ1QDLg0fAUbYRDWZJ5CEqKes5r9YdkhU%2BwC1gzpQNfVas06EsgcSFtMd33kyOEdzNJHq6hvLUkgRaAxwytkJbrwmpNKYSXGns8v2QJGbAMdIfrS1v3beZCHDGnZ8dMJr4NEpp7ZgNoE2hmz4K1bIk1BOhiZkvCnaRvggKCsjKyWJw1MrrcG1bEsjf2QXVTUOYEEkkfeZCpsBGU2MHCEw1ToVpWdrEzkW6pj51%2F7LcRXkEB26Eyf7lWV5Nqx0Y20FzJBAktGdi1rCo6C%2BDXzeE%2BTox1KYG%2BhGqAsZJOmiQ7iT3tKJ7wgzTP3YTFC4yJ%2B73C2jSUMYkZHapocUIPPCmoMw5pYoLxgUV4ekd42hVCuiQ6uqrFEv7f2yPeu8YTbC26HZ5vu4%2F%2FuskA3MOQ1GWCZLhxzIHc4e4atPIQeiL%2FBLV9inW9OWddMYrhXPc1XRKZprecjw37u3BS91L9JtIws8navwY6pgEkht1AwJdAXtYaDuU21c9FDBWqWZumbHMY1Xm4FgLbBOc82JVr5iR2uzmB69RPOhIOepKZpU1fff0EBCRD%2Fs6mZjXGQoU8PNRJhAoSVH%2BZyqtaBOyxygf7a6%2FPWHlKLIRugSCXsOd6OST%2BlKIdAWqSQTmGpK%2B8IDk0KKSSHHPb%2BHMGH%2F6aC5zpCKe8K%2BAtKxdd%2F6T65MrdP8GpF%2F4L9nDf%2Fj808GUO&X-Amz-Signature=2aeeec726dbddd00d6836f976a0418bd4767dffcaa3f8d67335fca693b3ee9d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYAA3WX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG23maj%2B5RMAeRNThfRpEQVPdmMfy8eLtPeLdjUNFxWiAiAR0hfODb%2FHI55np3QXAQ7RrZifbJB8kd6c2VOfZcyb0iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgyT5mxKBvXnRjybKtwDLT3d%2BH9sKOTuWxnaAKr8faDNY9KSjRiTTyCuVQIu46nmz0bJH1Z%2F39JkD%2BTkKb4nyFl3AhYGs%2FpCpknMiUHIExzieLTR0HnUBeIQOTgBF0vCyoO4Fq9FrxVa2wpXmwtnNiqZERE2UtshiyTs7PAQ5bFfjtGrb%2BcddFO2J%2FZ1QDLg0fAUbYRDWZJ5CEqKes5r9YdkhU%2BwC1gzpQNfVas06EsgcSFtMd33kyOEdzNJHq6hvLUkgRaAxwytkJbrwmpNKYSXGns8v2QJGbAMdIfrS1v3beZCHDGnZ8dMJr4NEpp7ZgNoE2hmz4K1bIk1BOhiZkvCnaRvggKCsjKyWJw1MrrcG1bEsjf2QXVTUOYEEkkfeZCpsBGU2MHCEw1ToVpWdrEzkW6pj51%2F7LcRXkEB26Eyf7lWV5Nqx0Y20FzJBAktGdi1rCo6C%2BDXzeE%2BTox1KYG%2BhGqAsZJOmiQ7iT3tKJ7wgzTP3YTFC4yJ%2B73C2jSUMYkZHapocUIPPCmoMw5pYoLxgUV4ekd42hVCuiQ6uqrFEv7f2yPeu8YTbC26HZ5vu4%2F%2FuskA3MOQ1GWCZLhxzIHc4e4atPIQeiL%2FBLV9inW9OWddMYrhXPc1XRKZprecjw37u3BS91L9JtIws8navwY6pgEkht1AwJdAXtYaDuU21c9FDBWqWZumbHMY1Xm4FgLbBOc82JVr5iR2uzmB69RPOhIOepKZpU1fff0EBCRD%2Fs6mZjXGQoU8PNRJhAoSVH%2BZyqtaBOyxygf7a6%2FPWHlKLIRugSCXsOd6OST%2BlKIdAWqSQTmGpK%2B8IDk0KKSSHHPb%2BHMGH%2F6aC5zpCKe8K%2BAtKxdd%2F6T65MrdP8GpF%2F4L9nDf%2Fj808GUO&X-Amz-Signature=5558112aa48aff085dc36b22dab0d87d7f472884062107c5e68681f6a950171e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYAA3WX%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIG23maj%2B5RMAeRNThfRpEQVPdmMfy8eLtPeLdjUNFxWiAiAR0hfODb%2FHI55np3QXAQ7RrZifbJB8kd6c2VOfZcyb0iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgyT5mxKBvXnRjybKtwDLT3d%2BH9sKOTuWxnaAKr8faDNY9KSjRiTTyCuVQIu46nmz0bJH1Z%2F39JkD%2BTkKb4nyFl3AhYGs%2FpCpknMiUHIExzieLTR0HnUBeIQOTgBF0vCyoO4Fq9FrxVa2wpXmwtnNiqZERE2UtshiyTs7PAQ5bFfjtGrb%2BcddFO2J%2FZ1QDLg0fAUbYRDWZJ5CEqKes5r9YdkhU%2BwC1gzpQNfVas06EsgcSFtMd33kyOEdzNJHq6hvLUkgRaAxwytkJbrwmpNKYSXGns8v2QJGbAMdIfrS1v3beZCHDGnZ8dMJr4NEpp7ZgNoE2hmz4K1bIk1BOhiZkvCnaRvggKCsjKyWJw1MrrcG1bEsjf2QXVTUOYEEkkfeZCpsBGU2MHCEw1ToVpWdrEzkW6pj51%2F7LcRXkEB26Eyf7lWV5Nqx0Y20FzJBAktGdi1rCo6C%2BDXzeE%2BTox1KYG%2BhGqAsZJOmiQ7iT3tKJ7wgzTP3YTFC4yJ%2B73C2jSUMYkZHapocUIPPCmoMw5pYoLxgUV4ekd42hVCuiQ6uqrFEv7f2yPeu8YTbC26HZ5vu4%2F%2FuskA3MOQ1GWCZLhxzIHc4e4atPIQeiL%2FBLV9inW9OWddMYrhXPc1XRKZprecjw37u3BS91L9JtIws8navwY6pgEkht1AwJdAXtYaDuU21c9FDBWqWZumbHMY1Xm4FgLbBOc82JVr5iR2uzmB69RPOhIOepKZpU1fff0EBCRD%2Fs6mZjXGQoU8PNRJhAoSVH%2BZyqtaBOyxygf7a6%2FPWHlKLIRugSCXsOd6OST%2BlKIdAWqSQTmGpK%2B8IDk0KKSSHHPb%2BHMGH%2F6aC5zpCKe8K%2BAtKxdd%2F6T65MrdP8GpF%2F4L9nDf%2Fj808GUO&X-Amz-Signature=723b032e4da6abf52f553908611813f9afc541ae024943b8972a47bcb3de7ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

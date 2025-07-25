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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S35UAML%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBNupUxabyd3Pv7Id3DB4aTXWx5Ox5WUrrrLwrznkZ4FAiEA4Olxev9rWU%2BwmTL4SQCmN7jF7%2Fua0cqMbRDjbLRN53Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIxtt66i7MUKBq82sCrcA57nuM8DQeo9jSkzKfhRLVQt7MCVCuklGOGu1ZCmJBltxNlRsO2hzjBrdueQNzqa8lJUEFijbEsmsfFoOgPd9%2BH1OffnNLniIUpktsu0xhznjSl7x6KOUtW56wDlPz26IffYiODt%2BI2cmyfcHFxl9tMoOaUa%2F4xSVXlH%2FcoOfrVDGuVVWbrtGiusFfiYFBHRkGck2jjrAdBIdhMa0Tj8JhaoVSNbVJvZ5fLmcACUpMIZSPTHEkQiuquhcs7kWHw4lYcftW6oKGat0mZD2RsyDqhGMWnQxjuMemJM3S9MwueCBjRMWP2l2hbax4sBrwqFLxh%2BgXQAq90KfrqtcSEI2buXMiEWM4pNAa7tFj5eBcla4j8p8rLZbkBN%2BWVxqct7fcvi4N7x7PGKMUfsapa82ju1jctiCB3MxFj3RjK3ZQJd%2Fg8YmDu7UQ6tsV6T8z2XfGWFy5BvmXzaT0Zf5PzCoutcTmBu%2FKMRCKTJIUCxyJ%2F%2FBDzGDPsOUMvibjliJw9Q2Zkhxqiagr2HHGxP%2Fd7gTa0mLeheX4wSg4WhYxj0b8gHEeKMX2Qp8L9JerTgortKatpQXCM6Zt25yPSLS70e1aZZ%2BMwbuOkdzkDysWHBcBh7b%2Fh4SiZOhKBUGJ%2BwMKarj8QGOqUBm5q2fE2oGxkyXdv%2Bre%2FKyhIEFCY7YfbcdToxtbjZKpcACBcQzgplPQPRD9laAbWg%2Fod%2BGnMXJT9gK0aYMEArCWw42RrK4%2F5VxBLlD1mbRFxI2L3ew5HT6JqkMn%2Fn%2FmAJRtXfnPvKKklwFqmnmiBJS2jq4edL2GDCzlYng0rh6C2E3TKMHYK2HvV5BFoT%2FdPPKXH52MuSHPUEO9uKFYQCt2DsZqZR&X-Amz-Signature=229cdf3cbe9731baf4680837567959a59ac8962a5abf6200240d32783f833043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S35UAML%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBNupUxabyd3Pv7Id3DB4aTXWx5Ox5WUrrrLwrznkZ4FAiEA4Olxev9rWU%2BwmTL4SQCmN7jF7%2Fua0cqMbRDjbLRN53Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIxtt66i7MUKBq82sCrcA57nuM8DQeo9jSkzKfhRLVQt7MCVCuklGOGu1ZCmJBltxNlRsO2hzjBrdueQNzqa8lJUEFijbEsmsfFoOgPd9%2BH1OffnNLniIUpktsu0xhznjSl7x6KOUtW56wDlPz26IffYiODt%2BI2cmyfcHFxl9tMoOaUa%2F4xSVXlH%2FcoOfrVDGuVVWbrtGiusFfiYFBHRkGck2jjrAdBIdhMa0Tj8JhaoVSNbVJvZ5fLmcACUpMIZSPTHEkQiuquhcs7kWHw4lYcftW6oKGat0mZD2RsyDqhGMWnQxjuMemJM3S9MwueCBjRMWP2l2hbax4sBrwqFLxh%2BgXQAq90KfrqtcSEI2buXMiEWM4pNAa7tFj5eBcla4j8p8rLZbkBN%2BWVxqct7fcvi4N7x7PGKMUfsapa82ju1jctiCB3MxFj3RjK3ZQJd%2Fg8YmDu7UQ6tsV6T8z2XfGWFy5BvmXzaT0Zf5PzCoutcTmBu%2FKMRCKTJIUCxyJ%2F%2FBDzGDPsOUMvibjliJw9Q2Zkhxqiagr2HHGxP%2Fd7gTa0mLeheX4wSg4WhYxj0b8gHEeKMX2Qp8L9JerTgortKatpQXCM6Zt25yPSLS70e1aZZ%2BMwbuOkdzkDysWHBcBh7b%2Fh4SiZOhKBUGJ%2BwMKarj8QGOqUBm5q2fE2oGxkyXdv%2Bre%2FKyhIEFCY7YfbcdToxtbjZKpcACBcQzgplPQPRD9laAbWg%2Fod%2BGnMXJT9gK0aYMEArCWw42RrK4%2F5VxBLlD1mbRFxI2L3ew5HT6JqkMn%2Fn%2FmAJRtXfnPvKKklwFqmnmiBJS2jq4edL2GDCzlYng0rh6C2E3TKMHYK2HvV5BFoT%2FdPPKXH52MuSHPUEO9uKFYQCt2DsZqZR&X-Amz-Signature=0d4a0e048989219c27d84e9f6de11777f690409468b49e6f519e8894428dd546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S35UAML%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBNupUxabyd3Pv7Id3DB4aTXWx5Ox5WUrrrLwrznkZ4FAiEA4Olxev9rWU%2BwmTL4SQCmN7jF7%2Fua0cqMbRDjbLRN53Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIxtt66i7MUKBq82sCrcA57nuM8DQeo9jSkzKfhRLVQt7MCVCuklGOGu1ZCmJBltxNlRsO2hzjBrdueQNzqa8lJUEFijbEsmsfFoOgPd9%2BH1OffnNLniIUpktsu0xhznjSl7x6KOUtW56wDlPz26IffYiODt%2BI2cmyfcHFxl9tMoOaUa%2F4xSVXlH%2FcoOfrVDGuVVWbrtGiusFfiYFBHRkGck2jjrAdBIdhMa0Tj8JhaoVSNbVJvZ5fLmcACUpMIZSPTHEkQiuquhcs7kWHw4lYcftW6oKGat0mZD2RsyDqhGMWnQxjuMemJM3S9MwueCBjRMWP2l2hbax4sBrwqFLxh%2BgXQAq90KfrqtcSEI2buXMiEWM4pNAa7tFj5eBcla4j8p8rLZbkBN%2BWVxqct7fcvi4N7x7PGKMUfsapa82ju1jctiCB3MxFj3RjK3ZQJd%2Fg8YmDu7UQ6tsV6T8z2XfGWFy5BvmXzaT0Zf5PzCoutcTmBu%2FKMRCKTJIUCxyJ%2F%2FBDzGDPsOUMvibjliJw9Q2Zkhxqiagr2HHGxP%2Fd7gTa0mLeheX4wSg4WhYxj0b8gHEeKMX2Qp8L9JerTgortKatpQXCM6Zt25yPSLS70e1aZZ%2BMwbuOkdzkDysWHBcBh7b%2Fh4SiZOhKBUGJ%2BwMKarj8QGOqUBm5q2fE2oGxkyXdv%2Bre%2FKyhIEFCY7YfbcdToxtbjZKpcACBcQzgplPQPRD9laAbWg%2Fod%2BGnMXJT9gK0aYMEArCWw42RrK4%2F5VxBLlD1mbRFxI2L3ew5HT6JqkMn%2Fn%2FmAJRtXfnPvKKklwFqmnmiBJS2jq4edL2GDCzlYng0rh6C2E3TKMHYK2HvV5BFoT%2FdPPKXH52MuSHPUEO9uKFYQCt2DsZqZR&X-Amz-Signature=acc9c1c9a0c320e1e30807da8ced0e23479adcebeb6d08cab02d000a51812539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S35UAML%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBNupUxabyd3Pv7Id3DB4aTXWx5Ox5WUrrrLwrznkZ4FAiEA4Olxev9rWU%2BwmTL4SQCmN7jF7%2Fua0cqMbRDjbLRN53Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIxtt66i7MUKBq82sCrcA57nuM8DQeo9jSkzKfhRLVQt7MCVCuklGOGu1ZCmJBltxNlRsO2hzjBrdueQNzqa8lJUEFijbEsmsfFoOgPd9%2BH1OffnNLniIUpktsu0xhznjSl7x6KOUtW56wDlPz26IffYiODt%2BI2cmyfcHFxl9tMoOaUa%2F4xSVXlH%2FcoOfrVDGuVVWbrtGiusFfiYFBHRkGck2jjrAdBIdhMa0Tj8JhaoVSNbVJvZ5fLmcACUpMIZSPTHEkQiuquhcs7kWHw4lYcftW6oKGat0mZD2RsyDqhGMWnQxjuMemJM3S9MwueCBjRMWP2l2hbax4sBrwqFLxh%2BgXQAq90KfrqtcSEI2buXMiEWM4pNAa7tFj5eBcla4j8p8rLZbkBN%2BWVxqct7fcvi4N7x7PGKMUfsapa82ju1jctiCB3MxFj3RjK3ZQJd%2Fg8YmDu7UQ6tsV6T8z2XfGWFy5BvmXzaT0Zf5PzCoutcTmBu%2FKMRCKTJIUCxyJ%2F%2FBDzGDPsOUMvibjliJw9Q2Zkhxqiagr2HHGxP%2Fd7gTa0mLeheX4wSg4WhYxj0b8gHEeKMX2Qp8L9JerTgortKatpQXCM6Zt25yPSLS70e1aZZ%2BMwbuOkdzkDysWHBcBh7b%2Fh4SiZOhKBUGJ%2BwMKarj8QGOqUBm5q2fE2oGxkyXdv%2Bre%2FKyhIEFCY7YfbcdToxtbjZKpcACBcQzgplPQPRD9laAbWg%2Fod%2BGnMXJT9gK0aYMEArCWw42RrK4%2F5VxBLlD1mbRFxI2L3ew5HT6JqkMn%2Fn%2FmAJRtXfnPvKKklwFqmnmiBJS2jq4edL2GDCzlYng0rh6C2E3TKMHYK2HvV5BFoT%2FdPPKXH52MuSHPUEO9uKFYQCt2DsZqZR&X-Amz-Signature=41a5f0645d2c60231c55c7d29a014973f434e09cb1549d17539acad9944c947b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S35UAML%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBNupUxabyd3Pv7Id3DB4aTXWx5Ox5WUrrrLwrznkZ4FAiEA4Olxev9rWU%2BwmTL4SQCmN7jF7%2Fua0cqMbRDjbLRN53Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIxtt66i7MUKBq82sCrcA57nuM8DQeo9jSkzKfhRLVQt7MCVCuklGOGu1ZCmJBltxNlRsO2hzjBrdueQNzqa8lJUEFijbEsmsfFoOgPd9%2BH1OffnNLniIUpktsu0xhznjSl7x6KOUtW56wDlPz26IffYiODt%2BI2cmyfcHFxl9tMoOaUa%2F4xSVXlH%2FcoOfrVDGuVVWbrtGiusFfiYFBHRkGck2jjrAdBIdhMa0Tj8JhaoVSNbVJvZ5fLmcACUpMIZSPTHEkQiuquhcs7kWHw4lYcftW6oKGat0mZD2RsyDqhGMWnQxjuMemJM3S9MwueCBjRMWP2l2hbax4sBrwqFLxh%2BgXQAq90KfrqtcSEI2buXMiEWM4pNAa7tFj5eBcla4j8p8rLZbkBN%2BWVxqct7fcvi4N7x7PGKMUfsapa82ju1jctiCB3MxFj3RjK3ZQJd%2Fg8YmDu7UQ6tsV6T8z2XfGWFy5BvmXzaT0Zf5PzCoutcTmBu%2FKMRCKTJIUCxyJ%2F%2FBDzGDPsOUMvibjliJw9Q2Zkhxqiagr2HHGxP%2Fd7gTa0mLeheX4wSg4WhYxj0b8gHEeKMX2Qp8L9JerTgortKatpQXCM6Zt25yPSLS70e1aZZ%2BMwbuOkdzkDysWHBcBh7b%2Fh4SiZOhKBUGJ%2BwMKarj8QGOqUBm5q2fE2oGxkyXdv%2Bre%2FKyhIEFCY7YfbcdToxtbjZKpcACBcQzgplPQPRD9laAbWg%2Fod%2BGnMXJT9gK0aYMEArCWw42RrK4%2F5VxBLlD1mbRFxI2L3ew5HT6JqkMn%2Fn%2FmAJRtXfnPvKKklwFqmnmiBJS2jq4edL2GDCzlYng0rh6C2E3TKMHYK2HvV5BFoT%2FdPPKXH52MuSHPUEO9uKFYQCt2DsZqZR&X-Amz-Signature=4aa99126417da5ee08af69fdcec33da4ec9e2dd4d7289c607387f13864fa3588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S35UAML%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBNupUxabyd3Pv7Id3DB4aTXWx5Ox5WUrrrLwrznkZ4FAiEA4Olxev9rWU%2BwmTL4SQCmN7jF7%2Fua0cqMbRDjbLRN53Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIxtt66i7MUKBq82sCrcA57nuM8DQeo9jSkzKfhRLVQt7MCVCuklGOGu1ZCmJBltxNlRsO2hzjBrdueQNzqa8lJUEFijbEsmsfFoOgPd9%2BH1OffnNLniIUpktsu0xhznjSl7x6KOUtW56wDlPz26IffYiODt%2BI2cmyfcHFxl9tMoOaUa%2F4xSVXlH%2FcoOfrVDGuVVWbrtGiusFfiYFBHRkGck2jjrAdBIdhMa0Tj8JhaoVSNbVJvZ5fLmcACUpMIZSPTHEkQiuquhcs7kWHw4lYcftW6oKGat0mZD2RsyDqhGMWnQxjuMemJM3S9MwueCBjRMWP2l2hbax4sBrwqFLxh%2BgXQAq90KfrqtcSEI2buXMiEWM4pNAa7tFj5eBcla4j8p8rLZbkBN%2BWVxqct7fcvi4N7x7PGKMUfsapa82ju1jctiCB3MxFj3RjK3ZQJd%2Fg8YmDu7UQ6tsV6T8z2XfGWFy5BvmXzaT0Zf5PzCoutcTmBu%2FKMRCKTJIUCxyJ%2F%2FBDzGDPsOUMvibjliJw9Q2Zkhxqiagr2HHGxP%2Fd7gTa0mLeheX4wSg4WhYxj0b8gHEeKMX2Qp8L9JerTgortKatpQXCM6Zt25yPSLS70e1aZZ%2BMwbuOkdzkDysWHBcBh7b%2Fh4SiZOhKBUGJ%2BwMKarj8QGOqUBm5q2fE2oGxkyXdv%2Bre%2FKyhIEFCY7YfbcdToxtbjZKpcACBcQzgplPQPRD9laAbWg%2Fod%2BGnMXJT9gK0aYMEArCWw42RrK4%2F5VxBLlD1mbRFxI2L3ew5HT6JqkMn%2Fn%2FmAJRtXfnPvKKklwFqmnmiBJS2jq4edL2GDCzlYng0rh6C2E3TKMHYK2HvV5BFoT%2FdPPKXH52MuSHPUEO9uKFYQCt2DsZqZR&X-Amz-Signature=b8018548533737b9efebe450f84a55478f0e5b1e7ad2f92682e25b8cfb99a394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S35UAML%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBNupUxabyd3Pv7Id3DB4aTXWx5Ox5WUrrrLwrznkZ4FAiEA4Olxev9rWU%2BwmTL4SQCmN7jF7%2Fua0cqMbRDjbLRN53Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIxtt66i7MUKBq82sCrcA57nuM8DQeo9jSkzKfhRLVQt7MCVCuklGOGu1ZCmJBltxNlRsO2hzjBrdueQNzqa8lJUEFijbEsmsfFoOgPd9%2BH1OffnNLniIUpktsu0xhznjSl7x6KOUtW56wDlPz26IffYiODt%2BI2cmyfcHFxl9tMoOaUa%2F4xSVXlH%2FcoOfrVDGuVVWbrtGiusFfiYFBHRkGck2jjrAdBIdhMa0Tj8JhaoVSNbVJvZ5fLmcACUpMIZSPTHEkQiuquhcs7kWHw4lYcftW6oKGat0mZD2RsyDqhGMWnQxjuMemJM3S9MwueCBjRMWP2l2hbax4sBrwqFLxh%2BgXQAq90KfrqtcSEI2buXMiEWM4pNAa7tFj5eBcla4j8p8rLZbkBN%2BWVxqct7fcvi4N7x7PGKMUfsapa82ju1jctiCB3MxFj3RjK3ZQJd%2Fg8YmDu7UQ6tsV6T8z2XfGWFy5BvmXzaT0Zf5PzCoutcTmBu%2FKMRCKTJIUCxyJ%2F%2FBDzGDPsOUMvibjliJw9Q2Zkhxqiagr2HHGxP%2Fd7gTa0mLeheX4wSg4WhYxj0b8gHEeKMX2Qp8L9JerTgortKatpQXCM6Zt25yPSLS70e1aZZ%2BMwbuOkdzkDysWHBcBh7b%2Fh4SiZOhKBUGJ%2BwMKarj8QGOqUBm5q2fE2oGxkyXdv%2Bre%2FKyhIEFCY7YfbcdToxtbjZKpcACBcQzgplPQPRD9laAbWg%2Fod%2BGnMXJT9gK0aYMEArCWw42RrK4%2F5VxBLlD1mbRFxI2L3ew5HT6JqkMn%2Fn%2FmAJRtXfnPvKKklwFqmnmiBJS2jq4edL2GDCzlYng0rh6C2E3TKMHYK2HvV5BFoT%2FdPPKXH52MuSHPUEO9uKFYQCt2DsZqZR&X-Amz-Signature=1c5672acbf009b788a8d1d537178a02997d725cb6e48f7f3573a6ea5f7d9989e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

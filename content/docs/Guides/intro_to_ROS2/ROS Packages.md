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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7G2F2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9lmtXoZubfErqSG%2Bgpkbd4d4fCwGzh3W0LMBKFHnt%2FAIgW9g45TDSwaRI0Vrka6ajh9B6NSQ5TzK2Z3QP%2FXCFjPQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWihYByP1L9iCiMISrcA8tS5wWjQc8qvqOxq7bqs4ttWg2iJSwdH2H79vrxK7%2BLd6aYd5pi2zCMM0DnsfT14hiblRu%2FYmCXoIBpSXUWvlXNAUoVAoeTE8qnAdD9sFp13t1L88R09b3MyKz4jYUX5t3VnCwWlyGP6fVZ6FNMIzMzZlx4H6m6w37DMBFMh6wOF3WGJnBD2ZHvuhSTcJTaVGr8YiA6PcCL7eKQ0GTvOvW22JoupV9AGls5K915J796LhnM3Ccl8Chzq299yyEipJxzxsRH1MLUSik5zx%2B3m25XNY3b%2FE4t%2FSjS4dvPUKgPFcCUcP3pTjL9MVV%2BGy0Q%2BRdbzEv7xEFrK3BeUOa4QS4KRQj%2BamYGCCH3S%2F21l5YT8InSTeEZtUJkSzcsRNhS%2BhcGgxL00KUFaH4wj%2B12PCfOibr0ARaq6EEbJQMosUdQ70rauE%2BJNfKTqtuwjGpTLCtkz2U8vr5fMd%2FbIT8N8ngcBIiMAFRLpRRqei2zQ90HTCqIGGYj9uL4Y2%2FjCmG7u1dAtueGQp0QSzYcPhxkMB8mL%2BUSuhTJKNuJ3AfQ%2B%2FlXR%2Byd20faLuoRGMjr0y%2FoHohJiU4MfFcuMsoDkFzpnOsgVhkKclIPntfhUlyD8O%2Be5cj5Cvdfcs721hB8MLL9s8MGOqUBA%2FaubNROHCG6IWZohgnLi4oNgK7THWWBNNL9UvQm7dOoA1ORFbSR9%2F%2BRtntJ932k81mBKyQHoYZ5AcDQYMjdnPACrM6S25uwhYiQKGzjA0G6WeVUadreOAtzBVdkchDZSHZOjtwVhwOn0RnZdlMM8gg0HzGIdpOYqtKX1O4MCmAyQvt0j096Jvl5HiY9vuhHS668m5CuOe7cn3AYqtj5MDwVM21E&X-Amz-Signature=4319fa34941b133e2ee1a06f0308420547aaffa17a7ee9300ad56137602f10a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7G2F2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9lmtXoZubfErqSG%2Bgpkbd4d4fCwGzh3W0LMBKFHnt%2FAIgW9g45TDSwaRI0Vrka6ajh9B6NSQ5TzK2Z3QP%2FXCFjPQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWihYByP1L9iCiMISrcA8tS5wWjQc8qvqOxq7bqs4ttWg2iJSwdH2H79vrxK7%2BLd6aYd5pi2zCMM0DnsfT14hiblRu%2FYmCXoIBpSXUWvlXNAUoVAoeTE8qnAdD9sFp13t1L88R09b3MyKz4jYUX5t3VnCwWlyGP6fVZ6FNMIzMzZlx4H6m6w37DMBFMh6wOF3WGJnBD2ZHvuhSTcJTaVGr8YiA6PcCL7eKQ0GTvOvW22JoupV9AGls5K915J796LhnM3Ccl8Chzq299yyEipJxzxsRH1MLUSik5zx%2B3m25XNY3b%2FE4t%2FSjS4dvPUKgPFcCUcP3pTjL9MVV%2BGy0Q%2BRdbzEv7xEFrK3BeUOa4QS4KRQj%2BamYGCCH3S%2F21l5YT8InSTeEZtUJkSzcsRNhS%2BhcGgxL00KUFaH4wj%2B12PCfOibr0ARaq6EEbJQMosUdQ70rauE%2BJNfKTqtuwjGpTLCtkz2U8vr5fMd%2FbIT8N8ngcBIiMAFRLpRRqei2zQ90HTCqIGGYj9uL4Y2%2FjCmG7u1dAtueGQp0QSzYcPhxkMB8mL%2BUSuhTJKNuJ3AfQ%2B%2FlXR%2Byd20faLuoRGMjr0y%2FoHohJiU4MfFcuMsoDkFzpnOsgVhkKclIPntfhUlyD8O%2Be5cj5Cvdfcs721hB8MLL9s8MGOqUBA%2FaubNROHCG6IWZohgnLi4oNgK7THWWBNNL9UvQm7dOoA1ORFbSR9%2F%2BRtntJ932k81mBKyQHoYZ5AcDQYMjdnPACrM6S25uwhYiQKGzjA0G6WeVUadreOAtzBVdkchDZSHZOjtwVhwOn0RnZdlMM8gg0HzGIdpOYqtKX1O4MCmAyQvt0j096Jvl5HiY9vuhHS668m5CuOe7cn3AYqtj5MDwVM21E&X-Amz-Signature=cb5ba3b6d120475082163d3cb931629227f7d33e416dfa70155a8ee5d7684d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7G2F2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9lmtXoZubfErqSG%2Bgpkbd4d4fCwGzh3W0LMBKFHnt%2FAIgW9g45TDSwaRI0Vrka6ajh9B6NSQ5TzK2Z3QP%2FXCFjPQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWihYByP1L9iCiMISrcA8tS5wWjQc8qvqOxq7bqs4ttWg2iJSwdH2H79vrxK7%2BLd6aYd5pi2zCMM0DnsfT14hiblRu%2FYmCXoIBpSXUWvlXNAUoVAoeTE8qnAdD9sFp13t1L88R09b3MyKz4jYUX5t3VnCwWlyGP6fVZ6FNMIzMzZlx4H6m6w37DMBFMh6wOF3WGJnBD2ZHvuhSTcJTaVGr8YiA6PcCL7eKQ0GTvOvW22JoupV9AGls5K915J796LhnM3Ccl8Chzq299yyEipJxzxsRH1MLUSik5zx%2B3m25XNY3b%2FE4t%2FSjS4dvPUKgPFcCUcP3pTjL9MVV%2BGy0Q%2BRdbzEv7xEFrK3BeUOa4QS4KRQj%2BamYGCCH3S%2F21l5YT8InSTeEZtUJkSzcsRNhS%2BhcGgxL00KUFaH4wj%2B12PCfOibr0ARaq6EEbJQMosUdQ70rauE%2BJNfKTqtuwjGpTLCtkz2U8vr5fMd%2FbIT8N8ngcBIiMAFRLpRRqei2zQ90HTCqIGGYj9uL4Y2%2FjCmG7u1dAtueGQp0QSzYcPhxkMB8mL%2BUSuhTJKNuJ3AfQ%2B%2FlXR%2Byd20faLuoRGMjr0y%2FoHohJiU4MfFcuMsoDkFzpnOsgVhkKclIPntfhUlyD8O%2Be5cj5Cvdfcs721hB8MLL9s8MGOqUBA%2FaubNROHCG6IWZohgnLi4oNgK7THWWBNNL9UvQm7dOoA1ORFbSR9%2F%2BRtntJ932k81mBKyQHoYZ5AcDQYMjdnPACrM6S25uwhYiQKGzjA0G6WeVUadreOAtzBVdkchDZSHZOjtwVhwOn0RnZdlMM8gg0HzGIdpOYqtKX1O4MCmAyQvt0j096Jvl5HiY9vuhHS668m5CuOe7cn3AYqtj5MDwVM21E&X-Amz-Signature=6a00afef5a3239118cc6d7a35e5e15d0a35edf49d6647241a96d5983c2ba5e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7G2F2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9lmtXoZubfErqSG%2Bgpkbd4d4fCwGzh3W0LMBKFHnt%2FAIgW9g45TDSwaRI0Vrka6ajh9B6NSQ5TzK2Z3QP%2FXCFjPQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWihYByP1L9iCiMISrcA8tS5wWjQc8qvqOxq7bqs4ttWg2iJSwdH2H79vrxK7%2BLd6aYd5pi2zCMM0DnsfT14hiblRu%2FYmCXoIBpSXUWvlXNAUoVAoeTE8qnAdD9sFp13t1L88R09b3MyKz4jYUX5t3VnCwWlyGP6fVZ6FNMIzMzZlx4H6m6w37DMBFMh6wOF3WGJnBD2ZHvuhSTcJTaVGr8YiA6PcCL7eKQ0GTvOvW22JoupV9AGls5K915J796LhnM3Ccl8Chzq299yyEipJxzxsRH1MLUSik5zx%2B3m25XNY3b%2FE4t%2FSjS4dvPUKgPFcCUcP3pTjL9MVV%2BGy0Q%2BRdbzEv7xEFrK3BeUOa4QS4KRQj%2BamYGCCH3S%2F21l5YT8InSTeEZtUJkSzcsRNhS%2BhcGgxL00KUFaH4wj%2B12PCfOibr0ARaq6EEbJQMosUdQ70rauE%2BJNfKTqtuwjGpTLCtkz2U8vr5fMd%2FbIT8N8ngcBIiMAFRLpRRqei2zQ90HTCqIGGYj9uL4Y2%2FjCmG7u1dAtueGQp0QSzYcPhxkMB8mL%2BUSuhTJKNuJ3AfQ%2B%2FlXR%2Byd20faLuoRGMjr0y%2FoHohJiU4MfFcuMsoDkFzpnOsgVhkKclIPntfhUlyD8O%2Be5cj5Cvdfcs721hB8MLL9s8MGOqUBA%2FaubNROHCG6IWZohgnLi4oNgK7THWWBNNL9UvQm7dOoA1ORFbSR9%2F%2BRtntJ932k81mBKyQHoYZ5AcDQYMjdnPACrM6S25uwhYiQKGzjA0G6WeVUadreOAtzBVdkchDZSHZOjtwVhwOn0RnZdlMM8gg0HzGIdpOYqtKX1O4MCmAyQvt0j096Jvl5HiY9vuhHS668m5CuOe7cn3AYqtj5MDwVM21E&X-Amz-Signature=f2185485d218c99f92266f8af0df88668c4b0d76ea6903f8e7641de8b8739a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7G2F2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9lmtXoZubfErqSG%2Bgpkbd4d4fCwGzh3W0LMBKFHnt%2FAIgW9g45TDSwaRI0Vrka6ajh9B6NSQ5TzK2Z3QP%2FXCFjPQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWihYByP1L9iCiMISrcA8tS5wWjQc8qvqOxq7bqs4ttWg2iJSwdH2H79vrxK7%2BLd6aYd5pi2zCMM0DnsfT14hiblRu%2FYmCXoIBpSXUWvlXNAUoVAoeTE8qnAdD9sFp13t1L88R09b3MyKz4jYUX5t3VnCwWlyGP6fVZ6FNMIzMzZlx4H6m6w37DMBFMh6wOF3WGJnBD2ZHvuhSTcJTaVGr8YiA6PcCL7eKQ0GTvOvW22JoupV9AGls5K915J796LhnM3Ccl8Chzq299yyEipJxzxsRH1MLUSik5zx%2B3m25XNY3b%2FE4t%2FSjS4dvPUKgPFcCUcP3pTjL9MVV%2BGy0Q%2BRdbzEv7xEFrK3BeUOa4QS4KRQj%2BamYGCCH3S%2F21l5YT8InSTeEZtUJkSzcsRNhS%2BhcGgxL00KUFaH4wj%2B12PCfOibr0ARaq6EEbJQMosUdQ70rauE%2BJNfKTqtuwjGpTLCtkz2U8vr5fMd%2FbIT8N8ngcBIiMAFRLpRRqei2zQ90HTCqIGGYj9uL4Y2%2FjCmG7u1dAtueGQp0QSzYcPhxkMB8mL%2BUSuhTJKNuJ3AfQ%2B%2FlXR%2Byd20faLuoRGMjr0y%2FoHohJiU4MfFcuMsoDkFzpnOsgVhkKclIPntfhUlyD8O%2Be5cj5Cvdfcs721hB8MLL9s8MGOqUBA%2FaubNROHCG6IWZohgnLi4oNgK7THWWBNNL9UvQm7dOoA1ORFbSR9%2F%2BRtntJ932k81mBKyQHoYZ5AcDQYMjdnPACrM6S25uwhYiQKGzjA0G6WeVUadreOAtzBVdkchDZSHZOjtwVhwOn0RnZdlMM8gg0HzGIdpOYqtKX1O4MCmAyQvt0j096Jvl5HiY9vuhHS668m5CuOe7cn3AYqtj5MDwVM21E&X-Amz-Signature=7adde2d0b7355eba0f7800073317e64e24db53fdcf3c3b0a18a5e06d17f3a4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7G2F2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9lmtXoZubfErqSG%2Bgpkbd4d4fCwGzh3W0LMBKFHnt%2FAIgW9g45TDSwaRI0Vrka6ajh9B6NSQ5TzK2Z3QP%2FXCFjPQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWihYByP1L9iCiMISrcA8tS5wWjQc8qvqOxq7bqs4ttWg2iJSwdH2H79vrxK7%2BLd6aYd5pi2zCMM0DnsfT14hiblRu%2FYmCXoIBpSXUWvlXNAUoVAoeTE8qnAdD9sFp13t1L88R09b3MyKz4jYUX5t3VnCwWlyGP6fVZ6FNMIzMzZlx4H6m6w37DMBFMh6wOF3WGJnBD2ZHvuhSTcJTaVGr8YiA6PcCL7eKQ0GTvOvW22JoupV9AGls5K915J796LhnM3Ccl8Chzq299yyEipJxzxsRH1MLUSik5zx%2B3m25XNY3b%2FE4t%2FSjS4dvPUKgPFcCUcP3pTjL9MVV%2BGy0Q%2BRdbzEv7xEFrK3BeUOa4QS4KRQj%2BamYGCCH3S%2F21l5YT8InSTeEZtUJkSzcsRNhS%2BhcGgxL00KUFaH4wj%2B12PCfOibr0ARaq6EEbJQMosUdQ70rauE%2BJNfKTqtuwjGpTLCtkz2U8vr5fMd%2FbIT8N8ngcBIiMAFRLpRRqei2zQ90HTCqIGGYj9uL4Y2%2FjCmG7u1dAtueGQp0QSzYcPhxkMB8mL%2BUSuhTJKNuJ3AfQ%2B%2FlXR%2Byd20faLuoRGMjr0y%2FoHohJiU4MfFcuMsoDkFzpnOsgVhkKclIPntfhUlyD8O%2Be5cj5Cvdfcs721hB8MLL9s8MGOqUBA%2FaubNROHCG6IWZohgnLi4oNgK7THWWBNNL9UvQm7dOoA1ORFbSR9%2F%2BRtntJ932k81mBKyQHoYZ5AcDQYMjdnPACrM6S25uwhYiQKGzjA0G6WeVUadreOAtzBVdkchDZSHZOjtwVhwOn0RnZdlMM8gg0HzGIdpOYqtKX1O4MCmAyQvt0j096Jvl5HiY9vuhHS668m5CuOe7cn3AYqtj5MDwVM21E&X-Amz-Signature=40370d1c8630ca09069f746762ca4b63a5a73c25459e3be2e621687033f90a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7G2F2%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9lmtXoZubfErqSG%2Bgpkbd4d4fCwGzh3W0LMBKFHnt%2FAIgW9g45TDSwaRI0Vrka6ajh9B6NSQ5TzK2Z3QP%2FXCFjPQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWihYByP1L9iCiMISrcA8tS5wWjQc8qvqOxq7bqs4ttWg2iJSwdH2H79vrxK7%2BLd6aYd5pi2zCMM0DnsfT14hiblRu%2FYmCXoIBpSXUWvlXNAUoVAoeTE8qnAdD9sFp13t1L88R09b3MyKz4jYUX5t3VnCwWlyGP6fVZ6FNMIzMzZlx4H6m6w37DMBFMh6wOF3WGJnBD2ZHvuhSTcJTaVGr8YiA6PcCL7eKQ0GTvOvW22JoupV9AGls5K915J796LhnM3Ccl8Chzq299yyEipJxzxsRH1MLUSik5zx%2B3m25XNY3b%2FE4t%2FSjS4dvPUKgPFcCUcP3pTjL9MVV%2BGy0Q%2BRdbzEv7xEFrK3BeUOa4QS4KRQj%2BamYGCCH3S%2F21l5YT8InSTeEZtUJkSzcsRNhS%2BhcGgxL00KUFaH4wj%2B12PCfOibr0ARaq6EEbJQMosUdQ70rauE%2BJNfKTqtuwjGpTLCtkz2U8vr5fMd%2FbIT8N8ngcBIiMAFRLpRRqei2zQ90HTCqIGGYj9uL4Y2%2FjCmG7u1dAtueGQp0QSzYcPhxkMB8mL%2BUSuhTJKNuJ3AfQ%2B%2FlXR%2Byd20faLuoRGMjr0y%2FoHohJiU4MfFcuMsoDkFzpnOsgVhkKclIPntfhUlyD8O%2Be5cj5Cvdfcs721hB8MLL9s8MGOqUBA%2FaubNROHCG6IWZohgnLi4oNgK7THWWBNNL9UvQm7dOoA1ORFbSR9%2F%2BRtntJ932k81mBKyQHoYZ5AcDQYMjdnPACrM6S25uwhYiQKGzjA0G6WeVUadreOAtzBVdkchDZSHZOjtwVhwOn0RnZdlMM8gg0HzGIdpOYqtKX1O4MCmAyQvt0j096Jvl5HiY9vuhHS668m5CuOe7cn3AYqtj5MDwVM21E&X-Amz-Signature=2a2e85797522032cda6c6bb8365590a95d969ad8a6439187f886430ba9155547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

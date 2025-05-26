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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WCM67E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqa%2BhwK%2F9KJQx3LjzNHNz18ao2gT2rICu08cSdxWDl2gIgQoU5h8nyIhbnNw15EI1sQYbL04pmYMCII1hz1EFwGrcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG9CRjCtaGABSiQRsircAwEMQbT%2FZ2HxoB8qWe8tr6P7VxvIv6nuXhwqIs5t8L3MK%2FvD1Jz21zpht70VRTsOjDicWAilnfIOxNQBbpPB952A1Wurw6H8lwChNURNPBdNjTfyz5VKC9umprvgBsl6sdvPsQ5s3%2FOzwGhoWCn5Vihs6ciylzpbqmMoVwm5XorY9SbM4Ny%2FRje15FsaTs79Hc5VaTMSD6xWuMCjorNAXEnb0Lb0EjrIXcZdFtb18QBw5IIoNXe0buIhAhZ38HLEw2hlY%2FYp5MJNXKDF0XcvUDVDCaEXWUy5KDf5yTadIWff7hZcNzk3fvY3jK%2BPsAEniHkN1BWrRHp7YNrbt5UaFZloq%2Fg0X3TYCdOpAdQ%2B8BXMMYe5IaWZE5MvRjWjUn3FBVok32zRyp%2B%2BexHNPgbZMzgeRoB2XTZafpacEh356OsDZGpxyxL%2Fc1ORHBlp%2FefyLsNSg9IAvM003TIRRtTPaumPHYXuT9XrZ8sG%2FfLSaVhND9uBUoYlWyLnXFzrISybzJvLu%2BhfJtSM7b9onXbhP%2FBIApFNydRXZA36z%2FTUAPC0zn6OQi4JYbg9fk8hRaRrhc9kHGnBc9U4k9c3K%2Boj09AEyzrz3MOW6y%2FD2Q%2BYfm5rVB6%2FyUZOeUNQXUBeMO%2FP0sEGOqUBl97KxqOXGcg%2B9hHCqQVkfeFds4nmFFvYMkbSHDNHD6feX8XcU1Cmwic4BrKFSjCYBTcJh3soJGeaDJT3C%2BI8%2FFyK2FiWCrD9MXZic86d1FSiAZRXlpfZ9Z5qxN2aOSB%2Ba%2BV4saedr2RBQxKJHVGRHQkwGyF5%2FNZAZUAH3%2F%2BsF38DwyLvXYfabWwSpBFDHvFHZWKFjHKhTBrVaT7dxEJk0iU6noQp&X-Amz-Signature=feeb24205f1966325cf5597ffdafc70c5790b28185e87fb116f5927451dae814&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WCM67E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqa%2BhwK%2F9KJQx3LjzNHNz18ao2gT2rICu08cSdxWDl2gIgQoU5h8nyIhbnNw15EI1sQYbL04pmYMCII1hz1EFwGrcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG9CRjCtaGABSiQRsircAwEMQbT%2FZ2HxoB8qWe8tr6P7VxvIv6nuXhwqIs5t8L3MK%2FvD1Jz21zpht70VRTsOjDicWAilnfIOxNQBbpPB952A1Wurw6H8lwChNURNPBdNjTfyz5VKC9umprvgBsl6sdvPsQ5s3%2FOzwGhoWCn5Vihs6ciylzpbqmMoVwm5XorY9SbM4Ny%2FRje15FsaTs79Hc5VaTMSD6xWuMCjorNAXEnb0Lb0EjrIXcZdFtb18QBw5IIoNXe0buIhAhZ38HLEw2hlY%2FYp5MJNXKDF0XcvUDVDCaEXWUy5KDf5yTadIWff7hZcNzk3fvY3jK%2BPsAEniHkN1BWrRHp7YNrbt5UaFZloq%2Fg0X3TYCdOpAdQ%2B8BXMMYe5IaWZE5MvRjWjUn3FBVok32zRyp%2B%2BexHNPgbZMzgeRoB2XTZafpacEh356OsDZGpxyxL%2Fc1ORHBlp%2FefyLsNSg9IAvM003TIRRtTPaumPHYXuT9XrZ8sG%2FfLSaVhND9uBUoYlWyLnXFzrISybzJvLu%2BhfJtSM7b9onXbhP%2FBIApFNydRXZA36z%2FTUAPC0zn6OQi4JYbg9fk8hRaRrhc9kHGnBc9U4k9c3K%2Boj09AEyzrz3MOW6y%2FD2Q%2BYfm5rVB6%2FyUZOeUNQXUBeMO%2FP0sEGOqUBl97KxqOXGcg%2B9hHCqQVkfeFds4nmFFvYMkbSHDNHD6feX8XcU1Cmwic4BrKFSjCYBTcJh3soJGeaDJT3C%2BI8%2FFyK2FiWCrD9MXZic86d1FSiAZRXlpfZ9Z5qxN2aOSB%2Ba%2BV4saedr2RBQxKJHVGRHQkwGyF5%2FNZAZUAH3%2F%2BsF38DwyLvXYfabWwSpBFDHvFHZWKFjHKhTBrVaT7dxEJk0iU6noQp&X-Amz-Signature=0ea8d04667074c84e145ac4b0eeb9a5bfdd80937bf8b20dcc501f80d1fb70be1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WCM67E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqa%2BhwK%2F9KJQx3LjzNHNz18ao2gT2rICu08cSdxWDl2gIgQoU5h8nyIhbnNw15EI1sQYbL04pmYMCII1hz1EFwGrcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG9CRjCtaGABSiQRsircAwEMQbT%2FZ2HxoB8qWe8tr6P7VxvIv6nuXhwqIs5t8L3MK%2FvD1Jz21zpht70VRTsOjDicWAilnfIOxNQBbpPB952A1Wurw6H8lwChNURNPBdNjTfyz5VKC9umprvgBsl6sdvPsQ5s3%2FOzwGhoWCn5Vihs6ciylzpbqmMoVwm5XorY9SbM4Ny%2FRje15FsaTs79Hc5VaTMSD6xWuMCjorNAXEnb0Lb0EjrIXcZdFtb18QBw5IIoNXe0buIhAhZ38HLEw2hlY%2FYp5MJNXKDF0XcvUDVDCaEXWUy5KDf5yTadIWff7hZcNzk3fvY3jK%2BPsAEniHkN1BWrRHp7YNrbt5UaFZloq%2Fg0X3TYCdOpAdQ%2B8BXMMYe5IaWZE5MvRjWjUn3FBVok32zRyp%2B%2BexHNPgbZMzgeRoB2XTZafpacEh356OsDZGpxyxL%2Fc1ORHBlp%2FefyLsNSg9IAvM003TIRRtTPaumPHYXuT9XrZ8sG%2FfLSaVhND9uBUoYlWyLnXFzrISybzJvLu%2BhfJtSM7b9onXbhP%2FBIApFNydRXZA36z%2FTUAPC0zn6OQi4JYbg9fk8hRaRrhc9kHGnBc9U4k9c3K%2Boj09AEyzrz3MOW6y%2FD2Q%2BYfm5rVB6%2FyUZOeUNQXUBeMO%2FP0sEGOqUBl97KxqOXGcg%2B9hHCqQVkfeFds4nmFFvYMkbSHDNHD6feX8XcU1Cmwic4BrKFSjCYBTcJh3soJGeaDJT3C%2BI8%2FFyK2FiWCrD9MXZic86d1FSiAZRXlpfZ9Z5qxN2aOSB%2Ba%2BV4saedr2RBQxKJHVGRHQkwGyF5%2FNZAZUAH3%2F%2BsF38DwyLvXYfabWwSpBFDHvFHZWKFjHKhTBrVaT7dxEJk0iU6noQp&X-Amz-Signature=16013ddccf6aafb1854724b91f99ca7f2d823328860fda9fd01f1c1bc06e75e5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WCM67E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqa%2BhwK%2F9KJQx3LjzNHNz18ao2gT2rICu08cSdxWDl2gIgQoU5h8nyIhbnNw15EI1sQYbL04pmYMCII1hz1EFwGrcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG9CRjCtaGABSiQRsircAwEMQbT%2FZ2HxoB8qWe8tr6P7VxvIv6nuXhwqIs5t8L3MK%2FvD1Jz21zpht70VRTsOjDicWAilnfIOxNQBbpPB952A1Wurw6H8lwChNURNPBdNjTfyz5VKC9umprvgBsl6sdvPsQ5s3%2FOzwGhoWCn5Vihs6ciylzpbqmMoVwm5XorY9SbM4Ny%2FRje15FsaTs79Hc5VaTMSD6xWuMCjorNAXEnb0Lb0EjrIXcZdFtb18QBw5IIoNXe0buIhAhZ38HLEw2hlY%2FYp5MJNXKDF0XcvUDVDCaEXWUy5KDf5yTadIWff7hZcNzk3fvY3jK%2BPsAEniHkN1BWrRHp7YNrbt5UaFZloq%2Fg0X3TYCdOpAdQ%2B8BXMMYe5IaWZE5MvRjWjUn3FBVok32zRyp%2B%2BexHNPgbZMzgeRoB2XTZafpacEh356OsDZGpxyxL%2Fc1ORHBlp%2FefyLsNSg9IAvM003TIRRtTPaumPHYXuT9XrZ8sG%2FfLSaVhND9uBUoYlWyLnXFzrISybzJvLu%2BhfJtSM7b9onXbhP%2FBIApFNydRXZA36z%2FTUAPC0zn6OQi4JYbg9fk8hRaRrhc9kHGnBc9U4k9c3K%2Boj09AEyzrz3MOW6y%2FD2Q%2BYfm5rVB6%2FyUZOeUNQXUBeMO%2FP0sEGOqUBl97KxqOXGcg%2B9hHCqQVkfeFds4nmFFvYMkbSHDNHD6feX8XcU1Cmwic4BrKFSjCYBTcJh3soJGeaDJT3C%2BI8%2FFyK2FiWCrD9MXZic86d1FSiAZRXlpfZ9Z5qxN2aOSB%2Ba%2BV4saedr2RBQxKJHVGRHQkwGyF5%2FNZAZUAH3%2F%2BsF38DwyLvXYfabWwSpBFDHvFHZWKFjHKhTBrVaT7dxEJk0iU6noQp&X-Amz-Signature=096ac2ce4533c56afc09ad7881b31f537a88eb2b0003f7a0124f2a5108750245&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WCM67E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqa%2BhwK%2F9KJQx3LjzNHNz18ao2gT2rICu08cSdxWDl2gIgQoU5h8nyIhbnNw15EI1sQYbL04pmYMCII1hz1EFwGrcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG9CRjCtaGABSiQRsircAwEMQbT%2FZ2HxoB8qWe8tr6P7VxvIv6nuXhwqIs5t8L3MK%2FvD1Jz21zpht70VRTsOjDicWAilnfIOxNQBbpPB952A1Wurw6H8lwChNURNPBdNjTfyz5VKC9umprvgBsl6sdvPsQ5s3%2FOzwGhoWCn5Vihs6ciylzpbqmMoVwm5XorY9SbM4Ny%2FRje15FsaTs79Hc5VaTMSD6xWuMCjorNAXEnb0Lb0EjrIXcZdFtb18QBw5IIoNXe0buIhAhZ38HLEw2hlY%2FYp5MJNXKDF0XcvUDVDCaEXWUy5KDf5yTadIWff7hZcNzk3fvY3jK%2BPsAEniHkN1BWrRHp7YNrbt5UaFZloq%2Fg0X3TYCdOpAdQ%2B8BXMMYe5IaWZE5MvRjWjUn3FBVok32zRyp%2B%2BexHNPgbZMzgeRoB2XTZafpacEh356OsDZGpxyxL%2Fc1ORHBlp%2FefyLsNSg9IAvM003TIRRtTPaumPHYXuT9XrZ8sG%2FfLSaVhND9uBUoYlWyLnXFzrISybzJvLu%2BhfJtSM7b9onXbhP%2FBIApFNydRXZA36z%2FTUAPC0zn6OQi4JYbg9fk8hRaRrhc9kHGnBc9U4k9c3K%2Boj09AEyzrz3MOW6y%2FD2Q%2BYfm5rVB6%2FyUZOeUNQXUBeMO%2FP0sEGOqUBl97KxqOXGcg%2B9hHCqQVkfeFds4nmFFvYMkbSHDNHD6feX8XcU1Cmwic4BrKFSjCYBTcJh3soJGeaDJT3C%2BI8%2FFyK2FiWCrD9MXZic86d1FSiAZRXlpfZ9Z5qxN2aOSB%2Ba%2BV4saedr2RBQxKJHVGRHQkwGyF5%2FNZAZUAH3%2F%2BsF38DwyLvXYfabWwSpBFDHvFHZWKFjHKhTBrVaT7dxEJk0iU6noQp&X-Amz-Signature=2308dbb07b83d1ee1b4588d5589db37edc35daf1f9c6a82df6af5c9bab87ab9c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WCM67E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqa%2BhwK%2F9KJQx3LjzNHNz18ao2gT2rICu08cSdxWDl2gIgQoU5h8nyIhbnNw15EI1sQYbL04pmYMCII1hz1EFwGrcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG9CRjCtaGABSiQRsircAwEMQbT%2FZ2HxoB8qWe8tr6P7VxvIv6nuXhwqIs5t8L3MK%2FvD1Jz21zpht70VRTsOjDicWAilnfIOxNQBbpPB952A1Wurw6H8lwChNURNPBdNjTfyz5VKC9umprvgBsl6sdvPsQ5s3%2FOzwGhoWCn5Vihs6ciylzpbqmMoVwm5XorY9SbM4Ny%2FRje15FsaTs79Hc5VaTMSD6xWuMCjorNAXEnb0Lb0EjrIXcZdFtb18QBw5IIoNXe0buIhAhZ38HLEw2hlY%2FYp5MJNXKDF0XcvUDVDCaEXWUy5KDf5yTadIWff7hZcNzk3fvY3jK%2BPsAEniHkN1BWrRHp7YNrbt5UaFZloq%2Fg0X3TYCdOpAdQ%2B8BXMMYe5IaWZE5MvRjWjUn3FBVok32zRyp%2B%2BexHNPgbZMzgeRoB2XTZafpacEh356OsDZGpxyxL%2Fc1ORHBlp%2FefyLsNSg9IAvM003TIRRtTPaumPHYXuT9XrZ8sG%2FfLSaVhND9uBUoYlWyLnXFzrISybzJvLu%2BhfJtSM7b9onXbhP%2FBIApFNydRXZA36z%2FTUAPC0zn6OQi4JYbg9fk8hRaRrhc9kHGnBc9U4k9c3K%2Boj09AEyzrz3MOW6y%2FD2Q%2BYfm5rVB6%2FyUZOeUNQXUBeMO%2FP0sEGOqUBl97KxqOXGcg%2B9hHCqQVkfeFds4nmFFvYMkbSHDNHD6feX8XcU1Cmwic4BrKFSjCYBTcJh3soJGeaDJT3C%2BI8%2FFyK2FiWCrD9MXZic86d1FSiAZRXlpfZ9Z5qxN2aOSB%2Ba%2BV4saedr2RBQxKJHVGRHQkwGyF5%2FNZAZUAH3%2F%2BsF38DwyLvXYfabWwSpBFDHvFHZWKFjHKhTBrVaT7dxEJk0iU6noQp&X-Amz-Signature=be216c6c34da8a4d779db1c6f7bdec199d16308d526f6e6835c3ff07e25f16e4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WCM67E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqa%2BhwK%2F9KJQx3LjzNHNz18ao2gT2rICu08cSdxWDl2gIgQoU5h8nyIhbnNw15EI1sQYbL04pmYMCII1hz1EFwGrcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG9CRjCtaGABSiQRsircAwEMQbT%2FZ2HxoB8qWe8tr6P7VxvIv6nuXhwqIs5t8L3MK%2FvD1Jz21zpht70VRTsOjDicWAilnfIOxNQBbpPB952A1Wurw6H8lwChNURNPBdNjTfyz5VKC9umprvgBsl6sdvPsQ5s3%2FOzwGhoWCn5Vihs6ciylzpbqmMoVwm5XorY9SbM4Ny%2FRje15FsaTs79Hc5VaTMSD6xWuMCjorNAXEnb0Lb0EjrIXcZdFtb18QBw5IIoNXe0buIhAhZ38HLEw2hlY%2FYp5MJNXKDF0XcvUDVDCaEXWUy5KDf5yTadIWff7hZcNzk3fvY3jK%2BPsAEniHkN1BWrRHp7YNrbt5UaFZloq%2Fg0X3TYCdOpAdQ%2B8BXMMYe5IaWZE5MvRjWjUn3FBVok32zRyp%2B%2BexHNPgbZMzgeRoB2XTZafpacEh356OsDZGpxyxL%2Fc1ORHBlp%2FefyLsNSg9IAvM003TIRRtTPaumPHYXuT9XrZ8sG%2FfLSaVhND9uBUoYlWyLnXFzrISybzJvLu%2BhfJtSM7b9onXbhP%2FBIApFNydRXZA36z%2FTUAPC0zn6OQi4JYbg9fk8hRaRrhc9kHGnBc9U4k9c3K%2Boj09AEyzrz3MOW6y%2FD2Q%2BYfm5rVB6%2FyUZOeUNQXUBeMO%2FP0sEGOqUBl97KxqOXGcg%2B9hHCqQVkfeFds4nmFFvYMkbSHDNHD6feX8XcU1Cmwic4BrKFSjCYBTcJh3soJGeaDJT3C%2BI8%2FFyK2FiWCrD9MXZic86d1FSiAZRXlpfZ9Z5qxN2aOSB%2Ba%2BV4saedr2RBQxKJHVGRHQkwGyF5%2FNZAZUAH3%2F%2BsF38DwyLvXYfabWwSpBFDHvFHZWKFjHKhTBrVaT7dxEJk0iU6noQp&X-Amz-Signature=4af2e3b23b99436b79310f62ea2d1e78a5d31a33a8e0bf1cc8092d760e2e7f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

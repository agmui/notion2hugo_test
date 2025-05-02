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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54H23P5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1z%2FlApy%2FWJnzfRQSsL1WN3h%2BYhbA1xrmxR35FQFy5pwIgF%2FwwTcpWarKE3%2B4I7%2BBfB0EWdR93s0qC%2B5jnNfp%2B%2FGIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv69LItc%2F3S22ryIyrcAwW3d6yNEvH0HFPcsLcLeUu0SfSll66ylmTBhz%2BKL7S0BJ0eC7fgUv6S8T4zsJW1WcmaskQdTis9HaGoVjs2V9G7hdhilGc%2FCJQGLb3U9ts4c8im8%2BI15qN8FtxNIFSSACeix%2FBmT8aNNbGePI1I5OJSmRrwBd9%2FFuBVwN9ADg2k4UTlG8lsJf8o8SeAwR72dOnKsVFsI%2FRMgV%2BJEbUxy1wyEszno3yVYRPcyAxvjviGKhPlM7w0VxD7UPMWzLO121eGLhUYqh7kcLvYWHpDQ6pBjzBB%2B1TC03SDr7R4buOsyw5HsPX28%2FxNkgx5X81R26X2VE1M26vNihsePsU26xXQ6x9LArhWPk3S0HIECLnVSyDc8s8UVC%2B6WiOgEE41fXgTeLx0VjMmzt%2F18yTS7bPVf8NDUtXbjDJgf60bwbT%2BXr3M%2BTXhrjSFHUvICwh%2FOvQ9sx%2ByTnfi35aeH2fiPXV0pT%2BGBLDpQoxoMRxJ8LTRQAn%2BS001N6bXDumGJiNF7RjM6GVtjYiqGuNiFChPAzTrj%2ByBSSfLE4%2B%2F22AZsPxmx1vvqkhgVF%2F0xoJhi2tm%2Fyh6Y%2B0faa5vfdt7r4CZybStFaER4k7iGJHjO7CTa3%2FGiNkRoGWDqEl7ym8HMLiG1cAGOqUBtrpLBJ7s89fLJb10IswitQbJnG9lUrqAOkcwJ%2BVuXUBYgndZp6O3vqOxUs13lB0cqnCKFqCPRUaiA5YwesvMU%2FoXYN435To6Fc48ncNr%2B0Di0%2FZ%2FTrISDwbIUPazq%2F1KJMAk6lVmZKUGrD5it%2F8MtkNo0MpnGl9%2FNoxXkih4YfpPTPYj9xMGhckhBuibq%2FzbgZaKkyCvu75DDFINp5q3iErt%2FbnT&X-Amz-Signature=05791f74e8bba7b14122081a07e7ae69bf78d9c9378ebc106379df2514d1f740&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54H23P5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1z%2FlApy%2FWJnzfRQSsL1WN3h%2BYhbA1xrmxR35FQFy5pwIgF%2FwwTcpWarKE3%2B4I7%2BBfB0EWdR93s0qC%2B5jnNfp%2B%2FGIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv69LItc%2F3S22ryIyrcAwW3d6yNEvH0HFPcsLcLeUu0SfSll66ylmTBhz%2BKL7S0BJ0eC7fgUv6S8T4zsJW1WcmaskQdTis9HaGoVjs2V9G7hdhilGc%2FCJQGLb3U9ts4c8im8%2BI15qN8FtxNIFSSACeix%2FBmT8aNNbGePI1I5OJSmRrwBd9%2FFuBVwN9ADg2k4UTlG8lsJf8o8SeAwR72dOnKsVFsI%2FRMgV%2BJEbUxy1wyEszno3yVYRPcyAxvjviGKhPlM7w0VxD7UPMWzLO121eGLhUYqh7kcLvYWHpDQ6pBjzBB%2B1TC03SDr7R4buOsyw5HsPX28%2FxNkgx5X81R26X2VE1M26vNihsePsU26xXQ6x9LArhWPk3S0HIECLnVSyDc8s8UVC%2B6WiOgEE41fXgTeLx0VjMmzt%2F18yTS7bPVf8NDUtXbjDJgf60bwbT%2BXr3M%2BTXhrjSFHUvICwh%2FOvQ9sx%2ByTnfi35aeH2fiPXV0pT%2BGBLDpQoxoMRxJ8LTRQAn%2BS001N6bXDumGJiNF7RjM6GVtjYiqGuNiFChPAzTrj%2ByBSSfLE4%2B%2F22AZsPxmx1vvqkhgVF%2F0xoJhi2tm%2Fyh6Y%2B0faa5vfdt7r4CZybStFaER4k7iGJHjO7CTa3%2FGiNkRoGWDqEl7ym8HMLiG1cAGOqUBtrpLBJ7s89fLJb10IswitQbJnG9lUrqAOkcwJ%2BVuXUBYgndZp6O3vqOxUs13lB0cqnCKFqCPRUaiA5YwesvMU%2FoXYN435To6Fc48ncNr%2B0Di0%2FZ%2FTrISDwbIUPazq%2F1KJMAk6lVmZKUGrD5it%2F8MtkNo0MpnGl9%2FNoxXkih4YfpPTPYj9xMGhckhBuibq%2FzbgZaKkyCvu75DDFINp5q3iErt%2FbnT&X-Amz-Signature=1bb77532e06b56ccb46feb06cc30b06d40cd40d0d288fe4deef2fc22dd2ea4a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54H23P5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1z%2FlApy%2FWJnzfRQSsL1WN3h%2BYhbA1xrmxR35FQFy5pwIgF%2FwwTcpWarKE3%2B4I7%2BBfB0EWdR93s0qC%2B5jnNfp%2B%2FGIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv69LItc%2F3S22ryIyrcAwW3d6yNEvH0HFPcsLcLeUu0SfSll66ylmTBhz%2BKL7S0BJ0eC7fgUv6S8T4zsJW1WcmaskQdTis9HaGoVjs2V9G7hdhilGc%2FCJQGLb3U9ts4c8im8%2BI15qN8FtxNIFSSACeix%2FBmT8aNNbGePI1I5OJSmRrwBd9%2FFuBVwN9ADg2k4UTlG8lsJf8o8SeAwR72dOnKsVFsI%2FRMgV%2BJEbUxy1wyEszno3yVYRPcyAxvjviGKhPlM7w0VxD7UPMWzLO121eGLhUYqh7kcLvYWHpDQ6pBjzBB%2B1TC03SDr7R4buOsyw5HsPX28%2FxNkgx5X81R26X2VE1M26vNihsePsU26xXQ6x9LArhWPk3S0HIECLnVSyDc8s8UVC%2B6WiOgEE41fXgTeLx0VjMmzt%2F18yTS7bPVf8NDUtXbjDJgf60bwbT%2BXr3M%2BTXhrjSFHUvICwh%2FOvQ9sx%2ByTnfi35aeH2fiPXV0pT%2BGBLDpQoxoMRxJ8LTRQAn%2BS001N6bXDumGJiNF7RjM6GVtjYiqGuNiFChPAzTrj%2ByBSSfLE4%2B%2F22AZsPxmx1vvqkhgVF%2F0xoJhi2tm%2Fyh6Y%2B0faa5vfdt7r4CZybStFaER4k7iGJHjO7CTa3%2FGiNkRoGWDqEl7ym8HMLiG1cAGOqUBtrpLBJ7s89fLJb10IswitQbJnG9lUrqAOkcwJ%2BVuXUBYgndZp6O3vqOxUs13lB0cqnCKFqCPRUaiA5YwesvMU%2FoXYN435To6Fc48ncNr%2B0Di0%2FZ%2FTrISDwbIUPazq%2F1KJMAk6lVmZKUGrD5it%2F8MtkNo0MpnGl9%2FNoxXkih4YfpPTPYj9xMGhckhBuibq%2FzbgZaKkyCvu75DDFINp5q3iErt%2FbnT&X-Amz-Signature=0d4f3fef0597e4ca224df6a6e74bfbb575e6fc32cd0e3516c2243873b110e952&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54H23P5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1z%2FlApy%2FWJnzfRQSsL1WN3h%2BYhbA1xrmxR35FQFy5pwIgF%2FwwTcpWarKE3%2B4I7%2BBfB0EWdR93s0qC%2B5jnNfp%2B%2FGIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv69LItc%2F3S22ryIyrcAwW3d6yNEvH0HFPcsLcLeUu0SfSll66ylmTBhz%2BKL7S0BJ0eC7fgUv6S8T4zsJW1WcmaskQdTis9HaGoVjs2V9G7hdhilGc%2FCJQGLb3U9ts4c8im8%2BI15qN8FtxNIFSSACeix%2FBmT8aNNbGePI1I5OJSmRrwBd9%2FFuBVwN9ADg2k4UTlG8lsJf8o8SeAwR72dOnKsVFsI%2FRMgV%2BJEbUxy1wyEszno3yVYRPcyAxvjviGKhPlM7w0VxD7UPMWzLO121eGLhUYqh7kcLvYWHpDQ6pBjzBB%2B1TC03SDr7R4buOsyw5HsPX28%2FxNkgx5X81R26X2VE1M26vNihsePsU26xXQ6x9LArhWPk3S0HIECLnVSyDc8s8UVC%2B6WiOgEE41fXgTeLx0VjMmzt%2F18yTS7bPVf8NDUtXbjDJgf60bwbT%2BXr3M%2BTXhrjSFHUvICwh%2FOvQ9sx%2ByTnfi35aeH2fiPXV0pT%2BGBLDpQoxoMRxJ8LTRQAn%2BS001N6bXDumGJiNF7RjM6GVtjYiqGuNiFChPAzTrj%2ByBSSfLE4%2B%2F22AZsPxmx1vvqkhgVF%2F0xoJhi2tm%2Fyh6Y%2B0faa5vfdt7r4CZybStFaER4k7iGJHjO7CTa3%2FGiNkRoGWDqEl7ym8HMLiG1cAGOqUBtrpLBJ7s89fLJb10IswitQbJnG9lUrqAOkcwJ%2BVuXUBYgndZp6O3vqOxUs13lB0cqnCKFqCPRUaiA5YwesvMU%2FoXYN435To6Fc48ncNr%2B0Di0%2FZ%2FTrISDwbIUPazq%2F1KJMAk6lVmZKUGrD5it%2F8MtkNo0MpnGl9%2FNoxXkih4YfpPTPYj9xMGhckhBuibq%2FzbgZaKkyCvu75DDFINp5q3iErt%2FbnT&X-Amz-Signature=4db64a7f668a0cfe21db44aca023f877ee60b26bdab6d95098cb0dbfaa838139&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54H23P5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1z%2FlApy%2FWJnzfRQSsL1WN3h%2BYhbA1xrmxR35FQFy5pwIgF%2FwwTcpWarKE3%2B4I7%2BBfB0EWdR93s0qC%2B5jnNfp%2B%2FGIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv69LItc%2F3S22ryIyrcAwW3d6yNEvH0HFPcsLcLeUu0SfSll66ylmTBhz%2BKL7S0BJ0eC7fgUv6S8T4zsJW1WcmaskQdTis9HaGoVjs2V9G7hdhilGc%2FCJQGLb3U9ts4c8im8%2BI15qN8FtxNIFSSACeix%2FBmT8aNNbGePI1I5OJSmRrwBd9%2FFuBVwN9ADg2k4UTlG8lsJf8o8SeAwR72dOnKsVFsI%2FRMgV%2BJEbUxy1wyEszno3yVYRPcyAxvjviGKhPlM7w0VxD7UPMWzLO121eGLhUYqh7kcLvYWHpDQ6pBjzBB%2B1TC03SDr7R4buOsyw5HsPX28%2FxNkgx5X81R26X2VE1M26vNihsePsU26xXQ6x9LArhWPk3S0HIECLnVSyDc8s8UVC%2B6WiOgEE41fXgTeLx0VjMmzt%2F18yTS7bPVf8NDUtXbjDJgf60bwbT%2BXr3M%2BTXhrjSFHUvICwh%2FOvQ9sx%2ByTnfi35aeH2fiPXV0pT%2BGBLDpQoxoMRxJ8LTRQAn%2BS001N6bXDumGJiNF7RjM6GVtjYiqGuNiFChPAzTrj%2ByBSSfLE4%2B%2F22AZsPxmx1vvqkhgVF%2F0xoJhi2tm%2Fyh6Y%2B0faa5vfdt7r4CZybStFaER4k7iGJHjO7CTa3%2FGiNkRoGWDqEl7ym8HMLiG1cAGOqUBtrpLBJ7s89fLJb10IswitQbJnG9lUrqAOkcwJ%2BVuXUBYgndZp6O3vqOxUs13lB0cqnCKFqCPRUaiA5YwesvMU%2FoXYN435To6Fc48ncNr%2B0Di0%2FZ%2FTrISDwbIUPazq%2F1KJMAk6lVmZKUGrD5it%2F8MtkNo0MpnGl9%2FNoxXkih4YfpPTPYj9xMGhckhBuibq%2FzbgZaKkyCvu75DDFINp5q3iErt%2FbnT&X-Amz-Signature=6edf4b836209a54fb6af4faadfe03ee03605d02a55aa8dc5a97a1a3371e0e726&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54H23P5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1z%2FlApy%2FWJnzfRQSsL1WN3h%2BYhbA1xrmxR35FQFy5pwIgF%2FwwTcpWarKE3%2B4I7%2BBfB0EWdR93s0qC%2B5jnNfp%2B%2FGIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv69LItc%2F3S22ryIyrcAwW3d6yNEvH0HFPcsLcLeUu0SfSll66ylmTBhz%2BKL7S0BJ0eC7fgUv6S8T4zsJW1WcmaskQdTis9HaGoVjs2V9G7hdhilGc%2FCJQGLb3U9ts4c8im8%2BI15qN8FtxNIFSSACeix%2FBmT8aNNbGePI1I5OJSmRrwBd9%2FFuBVwN9ADg2k4UTlG8lsJf8o8SeAwR72dOnKsVFsI%2FRMgV%2BJEbUxy1wyEszno3yVYRPcyAxvjviGKhPlM7w0VxD7UPMWzLO121eGLhUYqh7kcLvYWHpDQ6pBjzBB%2B1TC03SDr7R4buOsyw5HsPX28%2FxNkgx5X81R26X2VE1M26vNihsePsU26xXQ6x9LArhWPk3S0HIECLnVSyDc8s8UVC%2B6WiOgEE41fXgTeLx0VjMmzt%2F18yTS7bPVf8NDUtXbjDJgf60bwbT%2BXr3M%2BTXhrjSFHUvICwh%2FOvQ9sx%2ByTnfi35aeH2fiPXV0pT%2BGBLDpQoxoMRxJ8LTRQAn%2BS001N6bXDumGJiNF7RjM6GVtjYiqGuNiFChPAzTrj%2ByBSSfLE4%2B%2F22AZsPxmx1vvqkhgVF%2F0xoJhi2tm%2Fyh6Y%2B0faa5vfdt7r4CZybStFaER4k7iGJHjO7CTa3%2FGiNkRoGWDqEl7ym8HMLiG1cAGOqUBtrpLBJ7s89fLJb10IswitQbJnG9lUrqAOkcwJ%2BVuXUBYgndZp6O3vqOxUs13lB0cqnCKFqCPRUaiA5YwesvMU%2FoXYN435To6Fc48ncNr%2B0Di0%2FZ%2FTrISDwbIUPazq%2F1KJMAk6lVmZKUGrD5it%2F8MtkNo0MpnGl9%2FNoxXkih4YfpPTPYj9xMGhckhBuibq%2FzbgZaKkyCvu75DDFINp5q3iErt%2FbnT&X-Amz-Signature=155781f12af4b460a41d70acd31e7cc92d1ca51ffb9b6bec797e36c0bc854856&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y54H23P5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD1z%2FlApy%2FWJnzfRQSsL1WN3h%2BYhbA1xrmxR35FQFy5pwIgF%2FwwTcpWarKE3%2B4I7%2BBfB0EWdR93s0qC%2B5jnNfp%2B%2FGIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv69LItc%2F3S22ryIyrcAwW3d6yNEvH0HFPcsLcLeUu0SfSll66ylmTBhz%2BKL7S0BJ0eC7fgUv6S8T4zsJW1WcmaskQdTis9HaGoVjs2V9G7hdhilGc%2FCJQGLb3U9ts4c8im8%2BI15qN8FtxNIFSSACeix%2FBmT8aNNbGePI1I5OJSmRrwBd9%2FFuBVwN9ADg2k4UTlG8lsJf8o8SeAwR72dOnKsVFsI%2FRMgV%2BJEbUxy1wyEszno3yVYRPcyAxvjviGKhPlM7w0VxD7UPMWzLO121eGLhUYqh7kcLvYWHpDQ6pBjzBB%2B1TC03SDr7R4buOsyw5HsPX28%2FxNkgx5X81R26X2VE1M26vNihsePsU26xXQ6x9LArhWPk3S0HIECLnVSyDc8s8UVC%2B6WiOgEE41fXgTeLx0VjMmzt%2F18yTS7bPVf8NDUtXbjDJgf60bwbT%2BXr3M%2BTXhrjSFHUvICwh%2FOvQ9sx%2ByTnfi35aeH2fiPXV0pT%2BGBLDpQoxoMRxJ8LTRQAn%2BS001N6bXDumGJiNF7RjM6GVtjYiqGuNiFChPAzTrj%2ByBSSfLE4%2B%2F22AZsPxmx1vvqkhgVF%2F0xoJhi2tm%2Fyh6Y%2B0faa5vfdt7r4CZybStFaER4k7iGJHjO7CTa3%2FGiNkRoGWDqEl7ym8HMLiG1cAGOqUBtrpLBJ7s89fLJb10IswitQbJnG9lUrqAOkcwJ%2BVuXUBYgndZp6O3vqOxUs13lB0cqnCKFqCPRUaiA5YwesvMU%2FoXYN435To6Fc48ncNr%2B0Di0%2FZ%2FTrISDwbIUPazq%2F1KJMAk6lVmZKUGrD5it%2F8MtkNo0MpnGl9%2FNoxXkih4YfpPTPYj9xMGhckhBuibq%2FzbgZaKkyCvu75DDFINp5q3iErt%2FbnT&X-Amz-Signature=873b0bdbe3912b7fb0ce8a8aef54456627943959270da9412801866b45d33682&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

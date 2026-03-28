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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCO5G42%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDemx9%2FHpqKReMcAPUfmknepQX5uXNdcLoPVVFWstkDIAiEAzn1R%2Ft6VCYu%2FdveMVOydJQURJvc3JyIyLo%2FPtARgedsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0ZZ13zXDTPVdL2vCrcA7CU4KfNK8Xz0cilsI4kTfg4q5lERGLtwOQwHEawxCh6QmEHwenlCbh%2FWJf2uPYs4lHC8AhJY6KrV6bvxcetVdw%2BNoNKTbzKukfe%2BjMz9sku3kSOpT9H6fHb%2BKXptLJtKVE6I8KOWDSaUB6wrvOLcVXVQxzh8%2FT6xdJFUsIw%2FhtSxE%2BzGVVIUX557KQtMSURJOTnxsXkm%2BGTbfaHTntt4aHLt7038swMMB27Nt1ckVd9ViZyeI3AegBubdw08cWPLtNi7B3VgInyQyEmBayB4Pi0eN0FvlQkbP%2FbkQnvItYv40EkoJFEXKPczHaA6JfkSli0LVHBkN6PwojyFfexxLkItNq6Dp%2B4k19ZHSEhpxaBvxgcXC%2FENizOfc5m3RMNTnRb212WNKutlkrDlaZyVm22SfpU2a2GGO5RjuTLuMwxG8%2B7lAzbBCSqyZD5Ltcy90Soz2XJqa4ShTmGXfIv2ekxDt1jV5GdrNRp%2F73G2gYwAQdlV6ybCTITQVZkesMGcQDByxZGijd6LhS9XfWS8SiG02oQBH5o8HQIYSRmiCi%2B7z7STYm%2Bx3tyvP58NU5S6WdvCXnWgIg5LcWyGU38Gctpc0WRZLu9QRAcZ4oNtY8FejRGeRx9FDOB8D9tMJbsnM4GOqUBYfSTu5j8jEBGK%2Bg4ecEGQbhoh%2B5DlwT55%2BlVKl52life1TDmlfGM5JSGuj7ozyEpbRquAKFu5IjUkji6kt%2F4pqFrdkmaP36%2BYvePe7Bw4yAdPVcsIvvujtybU5uOu4OanApTbODLvSLyjPsFfaujYX0WbbDrA9HD2xF4hgkTklNWpVu1zxLhQTuwThK7bUfsp6htWm04tW1vYlm8JuDGRyvbJsTV&X-Amz-Signature=d1789a6db43502b19d90d338454cb34d157335c40db04a3d787813738ff600a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCO5G42%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDemx9%2FHpqKReMcAPUfmknepQX5uXNdcLoPVVFWstkDIAiEAzn1R%2Ft6VCYu%2FdveMVOydJQURJvc3JyIyLo%2FPtARgedsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0ZZ13zXDTPVdL2vCrcA7CU4KfNK8Xz0cilsI4kTfg4q5lERGLtwOQwHEawxCh6QmEHwenlCbh%2FWJf2uPYs4lHC8AhJY6KrV6bvxcetVdw%2BNoNKTbzKukfe%2BjMz9sku3kSOpT9H6fHb%2BKXptLJtKVE6I8KOWDSaUB6wrvOLcVXVQxzh8%2FT6xdJFUsIw%2FhtSxE%2BzGVVIUX557KQtMSURJOTnxsXkm%2BGTbfaHTntt4aHLt7038swMMB27Nt1ckVd9ViZyeI3AegBubdw08cWPLtNi7B3VgInyQyEmBayB4Pi0eN0FvlQkbP%2FbkQnvItYv40EkoJFEXKPczHaA6JfkSli0LVHBkN6PwojyFfexxLkItNq6Dp%2B4k19ZHSEhpxaBvxgcXC%2FENizOfc5m3RMNTnRb212WNKutlkrDlaZyVm22SfpU2a2GGO5RjuTLuMwxG8%2B7lAzbBCSqyZD5Ltcy90Soz2XJqa4ShTmGXfIv2ekxDt1jV5GdrNRp%2F73G2gYwAQdlV6ybCTITQVZkesMGcQDByxZGijd6LhS9XfWS8SiG02oQBH5o8HQIYSRmiCi%2B7z7STYm%2Bx3tyvP58NU5S6WdvCXnWgIg5LcWyGU38Gctpc0WRZLu9QRAcZ4oNtY8FejRGeRx9FDOB8D9tMJbsnM4GOqUBYfSTu5j8jEBGK%2Bg4ecEGQbhoh%2B5DlwT55%2BlVKl52life1TDmlfGM5JSGuj7ozyEpbRquAKFu5IjUkji6kt%2F4pqFrdkmaP36%2BYvePe7Bw4yAdPVcsIvvujtybU5uOu4OanApTbODLvSLyjPsFfaujYX0WbbDrA9HD2xF4hgkTklNWpVu1zxLhQTuwThK7bUfsp6htWm04tW1vYlm8JuDGRyvbJsTV&X-Amz-Signature=545bf20b7c8b95de1be0af9add513ff0d240faa008bdbbaa274e0ebb6f4a9219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCO5G42%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDemx9%2FHpqKReMcAPUfmknepQX5uXNdcLoPVVFWstkDIAiEAzn1R%2Ft6VCYu%2FdveMVOydJQURJvc3JyIyLo%2FPtARgedsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0ZZ13zXDTPVdL2vCrcA7CU4KfNK8Xz0cilsI4kTfg4q5lERGLtwOQwHEawxCh6QmEHwenlCbh%2FWJf2uPYs4lHC8AhJY6KrV6bvxcetVdw%2BNoNKTbzKukfe%2BjMz9sku3kSOpT9H6fHb%2BKXptLJtKVE6I8KOWDSaUB6wrvOLcVXVQxzh8%2FT6xdJFUsIw%2FhtSxE%2BzGVVIUX557KQtMSURJOTnxsXkm%2BGTbfaHTntt4aHLt7038swMMB27Nt1ckVd9ViZyeI3AegBubdw08cWPLtNi7B3VgInyQyEmBayB4Pi0eN0FvlQkbP%2FbkQnvItYv40EkoJFEXKPczHaA6JfkSli0LVHBkN6PwojyFfexxLkItNq6Dp%2B4k19ZHSEhpxaBvxgcXC%2FENizOfc5m3RMNTnRb212WNKutlkrDlaZyVm22SfpU2a2GGO5RjuTLuMwxG8%2B7lAzbBCSqyZD5Ltcy90Soz2XJqa4ShTmGXfIv2ekxDt1jV5GdrNRp%2F73G2gYwAQdlV6ybCTITQVZkesMGcQDByxZGijd6LhS9XfWS8SiG02oQBH5o8HQIYSRmiCi%2B7z7STYm%2Bx3tyvP58NU5S6WdvCXnWgIg5LcWyGU38Gctpc0WRZLu9QRAcZ4oNtY8FejRGeRx9FDOB8D9tMJbsnM4GOqUBYfSTu5j8jEBGK%2Bg4ecEGQbhoh%2B5DlwT55%2BlVKl52life1TDmlfGM5JSGuj7ozyEpbRquAKFu5IjUkji6kt%2F4pqFrdkmaP36%2BYvePe7Bw4yAdPVcsIvvujtybU5uOu4OanApTbODLvSLyjPsFfaujYX0WbbDrA9HD2xF4hgkTklNWpVu1zxLhQTuwThK7bUfsp6htWm04tW1vYlm8JuDGRyvbJsTV&X-Amz-Signature=d484effa51f08cd2f64302c254b4c384e2ab8b4e37397384c5c76a245d6ca0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCO5G42%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDemx9%2FHpqKReMcAPUfmknepQX5uXNdcLoPVVFWstkDIAiEAzn1R%2Ft6VCYu%2FdveMVOydJQURJvc3JyIyLo%2FPtARgedsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0ZZ13zXDTPVdL2vCrcA7CU4KfNK8Xz0cilsI4kTfg4q5lERGLtwOQwHEawxCh6QmEHwenlCbh%2FWJf2uPYs4lHC8AhJY6KrV6bvxcetVdw%2BNoNKTbzKukfe%2BjMz9sku3kSOpT9H6fHb%2BKXptLJtKVE6I8KOWDSaUB6wrvOLcVXVQxzh8%2FT6xdJFUsIw%2FhtSxE%2BzGVVIUX557KQtMSURJOTnxsXkm%2BGTbfaHTntt4aHLt7038swMMB27Nt1ckVd9ViZyeI3AegBubdw08cWPLtNi7B3VgInyQyEmBayB4Pi0eN0FvlQkbP%2FbkQnvItYv40EkoJFEXKPczHaA6JfkSli0LVHBkN6PwojyFfexxLkItNq6Dp%2B4k19ZHSEhpxaBvxgcXC%2FENizOfc5m3RMNTnRb212WNKutlkrDlaZyVm22SfpU2a2GGO5RjuTLuMwxG8%2B7lAzbBCSqyZD5Ltcy90Soz2XJqa4ShTmGXfIv2ekxDt1jV5GdrNRp%2F73G2gYwAQdlV6ybCTITQVZkesMGcQDByxZGijd6LhS9XfWS8SiG02oQBH5o8HQIYSRmiCi%2B7z7STYm%2Bx3tyvP58NU5S6WdvCXnWgIg5LcWyGU38Gctpc0WRZLu9QRAcZ4oNtY8FejRGeRx9FDOB8D9tMJbsnM4GOqUBYfSTu5j8jEBGK%2Bg4ecEGQbhoh%2B5DlwT55%2BlVKl52life1TDmlfGM5JSGuj7ozyEpbRquAKFu5IjUkji6kt%2F4pqFrdkmaP36%2BYvePe7Bw4yAdPVcsIvvujtybU5uOu4OanApTbODLvSLyjPsFfaujYX0WbbDrA9HD2xF4hgkTklNWpVu1zxLhQTuwThK7bUfsp6htWm04tW1vYlm8JuDGRyvbJsTV&X-Amz-Signature=d71faa05e4a8f407a8ea02e17f160db373d2d1f79741b3812e5f3ead203b741e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCO5G42%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDemx9%2FHpqKReMcAPUfmknepQX5uXNdcLoPVVFWstkDIAiEAzn1R%2Ft6VCYu%2FdveMVOydJQURJvc3JyIyLo%2FPtARgedsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0ZZ13zXDTPVdL2vCrcA7CU4KfNK8Xz0cilsI4kTfg4q5lERGLtwOQwHEawxCh6QmEHwenlCbh%2FWJf2uPYs4lHC8AhJY6KrV6bvxcetVdw%2BNoNKTbzKukfe%2BjMz9sku3kSOpT9H6fHb%2BKXptLJtKVE6I8KOWDSaUB6wrvOLcVXVQxzh8%2FT6xdJFUsIw%2FhtSxE%2BzGVVIUX557KQtMSURJOTnxsXkm%2BGTbfaHTntt4aHLt7038swMMB27Nt1ckVd9ViZyeI3AegBubdw08cWPLtNi7B3VgInyQyEmBayB4Pi0eN0FvlQkbP%2FbkQnvItYv40EkoJFEXKPczHaA6JfkSli0LVHBkN6PwojyFfexxLkItNq6Dp%2B4k19ZHSEhpxaBvxgcXC%2FENizOfc5m3RMNTnRb212WNKutlkrDlaZyVm22SfpU2a2GGO5RjuTLuMwxG8%2B7lAzbBCSqyZD5Ltcy90Soz2XJqa4ShTmGXfIv2ekxDt1jV5GdrNRp%2F73G2gYwAQdlV6ybCTITQVZkesMGcQDByxZGijd6LhS9XfWS8SiG02oQBH5o8HQIYSRmiCi%2B7z7STYm%2Bx3tyvP58NU5S6WdvCXnWgIg5LcWyGU38Gctpc0WRZLu9QRAcZ4oNtY8FejRGeRx9FDOB8D9tMJbsnM4GOqUBYfSTu5j8jEBGK%2Bg4ecEGQbhoh%2B5DlwT55%2BlVKl52life1TDmlfGM5JSGuj7ozyEpbRquAKFu5IjUkji6kt%2F4pqFrdkmaP36%2BYvePe7Bw4yAdPVcsIvvujtybU5uOu4OanApTbODLvSLyjPsFfaujYX0WbbDrA9HD2xF4hgkTklNWpVu1zxLhQTuwThK7bUfsp6htWm04tW1vYlm8JuDGRyvbJsTV&X-Amz-Signature=5964577e8ac8d1210be73ea5002f213dd6934c4f491b16e327b15d984bc71dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCO5G42%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDemx9%2FHpqKReMcAPUfmknepQX5uXNdcLoPVVFWstkDIAiEAzn1R%2Ft6VCYu%2FdveMVOydJQURJvc3JyIyLo%2FPtARgedsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0ZZ13zXDTPVdL2vCrcA7CU4KfNK8Xz0cilsI4kTfg4q5lERGLtwOQwHEawxCh6QmEHwenlCbh%2FWJf2uPYs4lHC8AhJY6KrV6bvxcetVdw%2BNoNKTbzKukfe%2BjMz9sku3kSOpT9H6fHb%2BKXptLJtKVE6I8KOWDSaUB6wrvOLcVXVQxzh8%2FT6xdJFUsIw%2FhtSxE%2BzGVVIUX557KQtMSURJOTnxsXkm%2BGTbfaHTntt4aHLt7038swMMB27Nt1ckVd9ViZyeI3AegBubdw08cWPLtNi7B3VgInyQyEmBayB4Pi0eN0FvlQkbP%2FbkQnvItYv40EkoJFEXKPczHaA6JfkSli0LVHBkN6PwojyFfexxLkItNq6Dp%2B4k19ZHSEhpxaBvxgcXC%2FENizOfc5m3RMNTnRb212WNKutlkrDlaZyVm22SfpU2a2GGO5RjuTLuMwxG8%2B7lAzbBCSqyZD5Ltcy90Soz2XJqa4ShTmGXfIv2ekxDt1jV5GdrNRp%2F73G2gYwAQdlV6ybCTITQVZkesMGcQDByxZGijd6LhS9XfWS8SiG02oQBH5o8HQIYSRmiCi%2B7z7STYm%2Bx3tyvP58NU5S6WdvCXnWgIg5LcWyGU38Gctpc0WRZLu9QRAcZ4oNtY8FejRGeRx9FDOB8D9tMJbsnM4GOqUBYfSTu5j8jEBGK%2Bg4ecEGQbhoh%2B5DlwT55%2BlVKl52life1TDmlfGM5JSGuj7ozyEpbRquAKFu5IjUkji6kt%2F4pqFrdkmaP36%2BYvePe7Bw4yAdPVcsIvvujtybU5uOu4OanApTbODLvSLyjPsFfaujYX0WbbDrA9HD2xF4hgkTklNWpVu1zxLhQTuwThK7bUfsp6htWm04tW1vYlm8JuDGRyvbJsTV&X-Amz-Signature=15f48338151ecb85eb25e9d9fed6def17bb014b50e13725e34db9a7f29487ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCO5G42%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDemx9%2FHpqKReMcAPUfmknepQX5uXNdcLoPVVFWstkDIAiEAzn1R%2Ft6VCYu%2FdveMVOydJQURJvc3JyIyLo%2FPtARgedsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0ZZ13zXDTPVdL2vCrcA7CU4KfNK8Xz0cilsI4kTfg4q5lERGLtwOQwHEawxCh6QmEHwenlCbh%2FWJf2uPYs4lHC8AhJY6KrV6bvxcetVdw%2BNoNKTbzKukfe%2BjMz9sku3kSOpT9H6fHb%2BKXptLJtKVE6I8KOWDSaUB6wrvOLcVXVQxzh8%2FT6xdJFUsIw%2FhtSxE%2BzGVVIUX557KQtMSURJOTnxsXkm%2BGTbfaHTntt4aHLt7038swMMB27Nt1ckVd9ViZyeI3AegBubdw08cWPLtNi7B3VgInyQyEmBayB4Pi0eN0FvlQkbP%2FbkQnvItYv40EkoJFEXKPczHaA6JfkSli0LVHBkN6PwojyFfexxLkItNq6Dp%2B4k19ZHSEhpxaBvxgcXC%2FENizOfc5m3RMNTnRb212WNKutlkrDlaZyVm22SfpU2a2GGO5RjuTLuMwxG8%2B7lAzbBCSqyZD5Ltcy90Soz2XJqa4ShTmGXfIv2ekxDt1jV5GdrNRp%2F73G2gYwAQdlV6ybCTITQVZkesMGcQDByxZGijd6LhS9XfWS8SiG02oQBH5o8HQIYSRmiCi%2B7z7STYm%2Bx3tyvP58NU5S6WdvCXnWgIg5LcWyGU38Gctpc0WRZLu9QRAcZ4oNtY8FejRGeRx9FDOB8D9tMJbsnM4GOqUBYfSTu5j8jEBGK%2Bg4ecEGQbhoh%2B5DlwT55%2BlVKl52life1TDmlfGM5JSGuj7ozyEpbRquAKFu5IjUkji6kt%2F4pqFrdkmaP36%2BYvePe7Bw4yAdPVcsIvvujtybU5uOu4OanApTbODLvSLyjPsFfaujYX0WbbDrA9HD2xF4hgkTklNWpVu1zxLhQTuwThK7bUfsp6htWm04tW1vYlm8JuDGRyvbJsTV&X-Amz-Signature=b4f7efc601af2f68e0aaaea026d2da24a23688a80fc56b953f6d96bba6e88afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

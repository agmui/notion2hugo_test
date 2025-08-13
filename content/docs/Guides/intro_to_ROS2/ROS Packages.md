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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QA5TJF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG604aRYgzIzU965qvjv57%2BJK1hreKTq8UUEaEbtSuOhAiAK5fYbjth8CH3hApxc2b3uiNdv%2Bn2CvN96DZpT0jG79yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7kfs1qd22ND60NOVKtwDPohADvXYFHICHtnv3jbo3GMGA1kdgTVEg45eEYiqz%2FyLEP%2Bz0gkR0QFlGZBKB4lxZJZURd%2BWxFzYXCPzE3JDdnSQKUJTXY%2Bqh5qV0keghBIrBbvGUSDzo2X0ykEK9AAge%2BasPjNiqUIZPiYsTSXeRx7SBnvKVCeBSiSzt83YofDbyhyugXQeThzjQPKPV3txVHfyMi%2BV5FZUzyde6W4zSRP4eQs%2F3W%2FESdjEzTfWHaIgv9G9ttI%2BYx4ZBVe6Vuz9JpM2jUQgN6YgvJNApcDaX2n0XR8UlazxWXtwU5%2B0gegdmgmZUG3jZkvSHQ8MZ6%2BYE9g108iJ0KawMxkRXuH%2F84FmLfpmtPmYr16ctIyX9K%2BU8BD39IO88Y2NzAkKd7dtvhezSwSW2%2Ft3kwZRKelgpLlv62MP6iGKbzn%2F8sJWIM60ff1pn2M7WPvZBNIMU8Tp1jXw3hfrPRyDw0IegsCiJWj61JSw0h8iZjUa0BrxRX%2F4a%2FPvo3YUkm6OCEG%2B7DKCUjj2Kd5XIIWnvRcnaAKkELcaqV%2FvZfdH1GVBKGR5w6BgK4cIqALR1Noxhndc8RM6RbZHl5sFuEs5Q%2F1Pi3Im79TwdYbVESofCd7VE4nryfojQfay8oC7P66Pu%2FIwu8bzxAY6pgH%2F2rnoiIvj91bcTKVpReL2zbb8H%2B13OW5LXIjhDwMe0%2FaoDhXuisrw2%2B6AuHhi8%2FDKf8AO6Jj91M4zOcq5rHD2XenuIZTumtDK29vSK4C6ttF9%2BuWEPU%2F1cMUTgQ03lZCB303EFPJB5FY2LKY7RtpcC%2BSnY2Hof%2ByJYQb4SS%2FsuGTvCxTMNN3nD2qcjiJxdB5G%2F4ZfkZOmKncjEgOF4cYejXY%2Bv9u3&X-Amz-Signature=4025a226f0da0da627b56906b82c1b62d83c7f9fe52508d539b2c11b9987e538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QA5TJF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG604aRYgzIzU965qvjv57%2BJK1hreKTq8UUEaEbtSuOhAiAK5fYbjth8CH3hApxc2b3uiNdv%2Bn2CvN96DZpT0jG79yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7kfs1qd22ND60NOVKtwDPohADvXYFHICHtnv3jbo3GMGA1kdgTVEg45eEYiqz%2FyLEP%2Bz0gkR0QFlGZBKB4lxZJZURd%2BWxFzYXCPzE3JDdnSQKUJTXY%2Bqh5qV0keghBIrBbvGUSDzo2X0ykEK9AAge%2BasPjNiqUIZPiYsTSXeRx7SBnvKVCeBSiSzt83YofDbyhyugXQeThzjQPKPV3txVHfyMi%2BV5FZUzyde6W4zSRP4eQs%2F3W%2FESdjEzTfWHaIgv9G9ttI%2BYx4ZBVe6Vuz9JpM2jUQgN6YgvJNApcDaX2n0XR8UlazxWXtwU5%2B0gegdmgmZUG3jZkvSHQ8MZ6%2BYE9g108iJ0KawMxkRXuH%2F84FmLfpmtPmYr16ctIyX9K%2BU8BD39IO88Y2NzAkKd7dtvhezSwSW2%2Ft3kwZRKelgpLlv62MP6iGKbzn%2F8sJWIM60ff1pn2M7WPvZBNIMU8Tp1jXw3hfrPRyDw0IegsCiJWj61JSw0h8iZjUa0BrxRX%2F4a%2FPvo3YUkm6OCEG%2B7DKCUjj2Kd5XIIWnvRcnaAKkELcaqV%2FvZfdH1GVBKGR5w6BgK4cIqALR1Noxhndc8RM6RbZHl5sFuEs5Q%2F1Pi3Im79TwdYbVESofCd7VE4nryfojQfay8oC7P66Pu%2FIwu8bzxAY6pgH%2F2rnoiIvj91bcTKVpReL2zbb8H%2B13OW5LXIjhDwMe0%2FaoDhXuisrw2%2B6AuHhi8%2FDKf8AO6Jj91M4zOcq5rHD2XenuIZTumtDK29vSK4C6ttF9%2BuWEPU%2F1cMUTgQ03lZCB303EFPJB5FY2LKY7RtpcC%2BSnY2Hof%2ByJYQb4SS%2FsuGTvCxTMNN3nD2qcjiJxdB5G%2F4ZfkZOmKncjEgOF4cYejXY%2Bv9u3&X-Amz-Signature=8a0574f61e75dc8db9c3a25b3ab4c6f9261e038467369918453504160d79a81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QA5TJF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG604aRYgzIzU965qvjv57%2BJK1hreKTq8UUEaEbtSuOhAiAK5fYbjth8CH3hApxc2b3uiNdv%2Bn2CvN96DZpT0jG79yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7kfs1qd22ND60NOVKtwDPohADvXYFHICHtnv3jbo3GMGA1kdgTVEg45eEYiqz%2FyLEP%2Bz0gkR0QFlGZBKB4lxZJZURd%2BWxFzYXCPzE3JDdnSQKUJTXY%2Bqh5qV0keghBIrBbvGUSDzo2X0ykEK9AAge%2BasPjNiqUIZPiYsTSXeRx7SBnvKVCeBSiSzt83YofDbyhyugXQeThzjQPKPV3txVHfyMi%2BV5FZUzyde6W4zSRP4eQs%2F3W%2FESdjEzTfWHaIgv9G9ttI%2BYx4ZBVe6Vuz9JpM2jUQgN6YgvJNApcDaX2n0XR8UlazxWXtwU5%2B0gegdmgmZUG3jZkvSHQ8MZ6%2BYE9g108iJ0KawMxkRXuH%2F84FmLfpmtPmYr16ctIyX9K%2BU8BD39IO88Y2NzAkKd7dtvhezSwSW2%2Ft3kwZRKelgpLlv62MP6iGKbzn%2F8sJWIM60ff1pn2M7WPvZBNIMU8Tp1jXw3hfrPRyDw0IegsCiJWj61JSw0h8iZjUa0BrxRX%2F4a%2FPvo3YUkm6OCEG%2B7DKCUjj2Kd5XIIWnvRcnaAKkELcaqV%2FvZfdH1GVBKGR5w6BgK4cIqALR1Noxhndc8RM6RbZHl5sFuEs5Q%2F1Pi3Im79TwdYbVESofCd7VE4nryfojQfay8oC7P66Pu%2FIwu8bzxAY6pgH%2F2rnoiIvj91bcTKVpReL2zbb8H%2B13OW5LXIjhDwMe0%2FaoDhXuisrw2%2B6AuHhi8%2FDKf8AO6Jj91M4zOcq5rHD2XenuIZTumtDK29vSK4C6ttF9%2BuWEPU%2F1cMUTgQ03lZCB303EFPJB5FY2LKY7RtpcC%2BSnY2Hof%2ByJYQb4SS%2FsuGTvCxTMNN3nD2qcjiJxdB5G%2F4ZfkZOmKncjEgOF4cYejXY%2Bv9u3&X-Amz-Signature=61c1e0e839498ff3789b6d284e130bf90e046d4838a1bb29053e7b62b996f327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QA5TJF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG604aRYgzIzU965qvjv57%2BJK1hreKTq8UUEaEbtSuOhAiAK5fYbjth8CH3hApxc2b3uiNdv%2Bn2CvN96DZpT0jG79yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7kfs1qd22ND60NOVKtwDPohADvXYFHICHtnv3jbo3GMGA1kdgTVEg45eEYiqz%2FyLEP%2Bz0gkR0QFlGZBKB4lxZJZURd%2BWxFzYXCPzE3JDdnSQKUJTXY%2Bqh5qV0keghBIrBbvGUSDzo2X0ykEK9AAge%2BasPjNiqUIZPiYsTSXeRx7SBnvKVCeBSiSzt83YofDbyhyugXQeThzjQPKPV3txVHfyMi%2BV5FZUzyde6W4zSRP4eQs%2F3W%2FESdjEzTfWHaIgv9G9ttI%2BYx4ZBVe6Vuz9JpM2jUQgN6YgvJNApcDaX2n0XR8UlazxWXtwU5%2B0gegdmgmZUG3jZkvSHQ8MZ6%2BYE9g108iJ0KawMxkRXuH%2F84FmLfpmtPmYr16ctIyX9K%2BU8BD39IO88Y2NzAkKd7dtvhezSwSW2%2Ft3kwZRKelgpLlv62MP6iGKbzn%2F8sJWIM60ff1pn2M7WPvZBNIMU8Tp1jXw3hfrPRyDw0IegsCiJWj61JSw0h8iZjUa0BrxRX%2F4a%2FPvo3YUkm6OCEG%2B7DKCUjj2Kd5XIIWnvRcnaAKkELcaqV%2FvZfdH1GVBKGR5w6BgK4cIqALR1Noxhndc8RM6RbZHl5sFuEs5Q%2F1Pi3Im79TwdYbVESofCd7VE4nryfojQfay8oC7P66Pu%2FIwu8bzxAY6pgH%2F2rnoiIvj91bcTKVpReL2zbb8H%2B13OW5LXIjhDwMe0%2FaoDhXuisrw2%2B6AuHhi8%2FDKf8AO6Jj91M4zOcq5rHD2XenuIZTumtDK29vSK4C6ttF9%2BuWEPU%2F1cMUTgQ03lZCB303EFPJB5FY2LKY7RtpcC%2BSnY2Hof%2ByJYQb4SS%2FsuGTvCxTMNN3nD2qcjiJxdB5G%2F4ZfkZOmKncjEgOF4cYejXY%2Bv9u3&X-Amz-Signature=5a41fd28cec0f66c76a6f58b225a04ff4b80e4cd253a58e8040d22f0d905588a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QA5TJF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG604aRYgzIzU965qvjv57%2BJK1hreKTq8UUEaEbtSuOhAiAK5fYbjth8CH3hApxc2b3uiNdv%2Bn2CvN96DZpT0jG79yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7kfs1qd22ND60NOVKtwDPohADvXYFHICHtnv3jbo3GMGA1kdgTVEg45eEYiqz%2FyLEP%2Bz0gkR0QFlGZBKB4lxZJZURd%2BWxFzYXCPzE3JDdnSQKUJTXY%2Bqh5qV0keghBIrBbvGUSDzo2X0ykEK9AAge%2BasPjNiqUIZPiYsTSXeRx7SBnvKVCeBSiSzt83YofDbyhyugXQeThzjQPKPV3txVHfyMi%2BV5FZUzyde6W4zSRP4eQs%2F3W%2FESdjEzTfWHaIgv9G9ttI%2BYx4ZBVe6Vuz9JpM2jUQgN6YgvJNApcDaX2n0XR8UlazxWXtwU5%2B0gegdmgmZUG3jZkvSHQ8MZ6%2BYE9g108iJ0KawMxkRXuH%2F84FmLfpmtPmYr16ctIyX9K%2BU8BD39IO88Y2NzAkKd7dtvhezSwSW2%2Ft3kwZRKelgpLlv62MP6iGKbzn%2F8sJWIM60ff1pn2M7WPvZBNIMU8Tp1jXw3hfrPRyDw0IegsCiJWj61JSw0h8iZjUa0BrxRX%2F4a%2FPvo3YUkm6OCEG%2B7DKCUjj2Kd5XIIWnvRcnaAKkELcaqV%2FvZfdH1GVBKGR5w6BgK4cIqALR1Noxhndc8RM6RbZHl5sFuEs5Q%2F1Pi3Im79TwdYbVESofCd7VE4nryfojQfay8oC7P66Pu%2FIwu8bzxAY6pgH%2F2rnoiIvj91bcTKVpReL2zbb8H%2B13OW5LXIjhDwMe0%2FaoDhXuisrw2%2B6AuHhi8%2FDKf8AO6Jj91M4zOcq5rHD2XenuIZTumtDK29vSK4C6ttF9%2BuWEPU%2F1cMUTgQ03lZCB303EFPJB5FY2LKY7RtpcC%2BSnY2Hof%2ByJYQb4SS%2FsuGTvCxTMNN3nD2qcjiJxdB5G%2F4ZfkZOmKncjEgOF4cYejXY%2Bv9u3&X-Amz-Signature=32f81a5420f3efcc0b00a79460e5cc5d61db794531b23a1c82a0028ea6528c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QA5TJF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG604aRYgzIzU965qvjv57%2BJK1hreKTq8UUEaEbtSuOhAiAK5fYbjth8CH3hApxc2b3uiNdv%2Bn2CvN96DZpT0jG79yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7kfs1qd22ND60NOVKtwDPohADvXYFHICHtnv3jbo3GMGA1kdgTVEg45eEYiqz%2FyLEP%2Bz0gkR0QFlGZBKB4lxZJZURd%2BWxFzYXCPzE3JDdnSQKUJTXY%2Bqh5qV0keghBIrBbvGUSDzo2X0ykEK9AAge%2BasPjNiqUIZPiYsTSXeRx7SBnvKVCeBSiSzt83YofDbyhyugXQeThzjQPKPV3txVHfyMi%2BV5FZUzyde6W4zSRP4eQs%2F3W%2FESdjEzTfWHaIgv9G9ttI%2BYx4ZBVe6Vuz9JpM2jUQgN6YgvJNApcDaX2n0XR8UlazxWXtwU5%2B0gegdmgmZUG3jZkvSHQ8MZ6%2BYE9g108iJ0KawMxkRXuH%2F84FmLfpmtPmYr16ctIyX9K%2BU8BD39IO88Y2NzAkKd7dtvhezSwSW2%2Ft3kwZRKelgpLlv62MP6iGKbzn%2F8sJWIM60ff1pn2M7WPvZBNIMU8Tp1jXw3hfrPRyDw0IegsCiJWj61JSw0h8iZjUa0BrxRX%2F4a%2FPvo3YUkm6OCEG%2B7DKCUjj2Kd5XIIWnvRcnaAKkELcaqV%2FvZfdH1GVBKGR5w6BgK4cIqALR1Noxhndc8RM6RbZHl5sFuEs5Q%2F1Pi3Im79TwdYbVESofCd7VE4nryfojQfay8oC7P66Pu%2FIwu8bzxAY6pgH%2F2rnoiIvj91bcTKVpReL2zbb8H%2B13OW5LXIjhDwMe0%2FaoDhXuisrw2%2B6AuHhi8%2FDKf8AO6Jj91M4zOcq5rHD2XenuIZTumtDK29vSK4C6ttF9%2BuWEPU%2F1cMUTgQ03lZCB303EFPJB5FY2LKY7RtpcC%2BSnY2Hof%2ByJYQb4SS%2FsuGTvCxTMNN3nD2qcjiJxdB5G%2F4ZfkZOmKncjEgOF4cYejXY%2Bv9u3&X-Amz-Signature=15721be599ff611ea11c3dd3fe9364edea146c672a1092e003acd68ac7d8e578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QA5TJF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG604aRYgzIzU965qvjv57%2BJK1hreKTq8UUEaEbtSuOhAiAK5fYbjth8CH3hApxc2b3uiNdv%2Bn2CvN96DZpT0jG79yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7kfs1qd22ND60NOVKtwDPohADvXYFHICHtnv3jbo3GMGA1kdgTVEg45eEYiqz%2FyLEP%2Bz0gkR0QFlGZBKB4lxZJZURd%2BWxFzYXCPzE3JDdnSQKUJTXY%2Bqh5qV0keghBIrBbvGUSDzo2X0ykEK9AAge%2BasPjNiqUIZPiYsTSXeRx7SBnvKVCeBSiSzt83YofDbyhyugXQeThzjQPKPV3txVHfyMi%2BV5FZUzyde6W4zSRP4eQs%2F3W%2FESdjEzTfWHaIgv9G9ttI%2BYx4ZBVe6Vuz9JpM2jUQgN6YgvJNApcDaX2n0XR8UlazxWXtwU5%2B0gegdmgmZUG3jZkvSHQ8MZ6%2BYE9g108iJ0KawMxkRXuH%2F84FmLfpmtPmYr16ctIyX9K%2BU8BD39IO88Y2NzAkKd7dtvhezSwSW2%2Ft3kwZRKelgpLlv62MP6iGKbzn%2F8sJWIM60ff1pn2M7WPvZBNIMU8Tp1jXw3hfrPRyDw0IegsCiJWj61JSw0h8iZjUa0BrxRX%2F4a%2FPvo3YUkm6OCEG%2B7DKCUjj2Kd5XIIWnvRcnaAKkELcaqV%2FvZfdH1GVBKGR5w6BgK4cIqALR1Noxhndc8RM6RbZHl5sFuEs5Q%2F1Pi3Im79TwdYbVESofCd7VE4nryfojQfay8oC7P66Pu%2FIwu8bzxAY6pgH%2F2rnoiIvj91bcTKVpReL2zbb8H%2B13OW5LXIjhDwMe0%2FaoDhXuisrw2%2B6AuHhi8%2FDKf8AO6Jj91M4zOcq5rHD2XenuIZTumtDK29vSK4C6ttF9%2BuWEPU%2F1cMUTgQ03lZCB303EFPJB5FY2LKY7RtpcC%2BSnY2Hof%2ByJYQb4SS%2FsuGTvCxTMNN3nD2qcjiJxdB5G%2F4ZfkZOmKncjEgOF4cYejXY%2Bv9u3&X-Amz-Signature=1de9f9caba13dd9475d221990f2cf3d77e5c6440dbb6c1a2b03755d0c851db6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

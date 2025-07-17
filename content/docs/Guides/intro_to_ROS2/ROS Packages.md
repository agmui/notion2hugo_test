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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQBKKX7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIA%2FzFJhwNASN%2Fohky1tzYMXNk0qkoMXiXYTJPYyaNU0IAiEArEwxy2FIgp7XuwIylQoC0UlVobkYaCUwiayZAf%2Fq%2BZcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKPumHrJCvdcAUH8mCrcA5EKApj4ZfWbmxAy0AM3StTpHwTFrYf7DVgWYlt0dWOEyjO9oefWh8w1gdIMkl1DMRPqSJjI79datjG06%2Fdc7C5oH3BsgOgn%2BQ0K6NpWs2IFfwYlvssmIqqo9jBBuSQ%2Bw7prkrBlDyhYHSOuSWQScIbvQN8CMoHzT9paaYapEzOc7NtqWbKLvN%2FCJTFQYY9LWe4w79iYABRliBVAbpwhIWuj2oXO74ex1QkJMkTaWUvimvm24EjifyyNdjwKCsLz04krOecBZU7myxI2WD1n5nOEyot%2BE0BD2HQfKHre9Vx2weeEVz%2BbMCYGMcplLy7C7xm7EkNlpbb9mcfr27xmbxuvleRp2E4bs4sPwopqmFknhzOsl84CQX%2BUf5NIr%2F0dFLFTiPV8Ylr748Ea5A0KQwYz1k5bodpZw9%2FA6eC9dsPK4OopYuGsX6JxUC%2Ba6f18SVi2UeNk7noHXF2lFD976FBaaQK1g1qIRIikKeeUg5WbKuB86c2%2FeuWJ2QuVjl%2FuQiLiZ0A71HgcjcHrFbyYIHBQnrKsRVfW%2B0xv%2FwRlkDMEl8nrNjfuuiNhhmRN88QipQeLC4xq3SoUa9JsrwZ6L266DKcCyZkboG1VBVnQ%2BKjZCOsoVoMPCu2zaOqUMLq45cMGOqUBBlGHEgERcSWIMJVepr90iAT5UuadDmLn1BDNfmX1nsywL8wegRh0Yo8CGLPTT0FhI3dQkEw5wIiDpEt0aBYfpg0Ld5LXXdMHrR1d%2B%2B0bb3MIr2z%2FpSzQaCz7uiLafVsjtVQRS0Gl5I33lE4tPzIHKaJeYHwUDCFWqN0J8QTJf8gVo2nOGn%2BIx3EzYPlwjF2jKWVcp2K65ZP9fBlg%2FuHcm5YVEts7&X-Amz-Signature=2c44a7af0bb61713e32bb327e90842ad932c571a12a663885cd8445deaef6767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQBKKX7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIA%2FzFJhwNASN%2Fohky1tzYMXNk0qkoMXiXYTJPYyaNU0IAiEArEwxy2FIgp7XuwIylQoC0UlVobkYaCUwiayZAf%2Fq%2BZcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKPumHrJCvdcAUH8mCrcA5EKApj4ZfWbmxAy0AM3StTpHwTFrYf7DVgWYlt0dWOEyjO9oefWh8w1gdIMkl1DMRPqSJjI79datjG06%2Fdc7C5oH3BsgOgn%2BQ0K6NpWs2IFfwYlvssmIqqo9jBBuSQ%2Bw7prkrBlDyhYHSOuSWQScIbvQN8CMoHzT9paaYapEzOc7NtqWbKLvN%2FCJTFQYY9LWe4w79iYABRliBVAbpwhIWuj2oXO74ex1QkJMkTaWUvimvm24EjifyyNdjwKCsLz04krOecBZU7myxI2WD1n5nOEyot%2BE0BD2HQfKHre9Vx2weeEVz%2BbMCYGMcplLy7C7xm7EkNlpbb9mcfr27xmbxuvleRp2E4bs4sPwopqmFknhzOsl84CQX%2BUf5NIr%2F0dFLFTiPV8Ylr748Ea5A0KQwYz1k5bodpZw9%2FA6eC9dsPK4OopYuGsX6JxUC%2Ba6f18SVi2UeNk7noHXF2lFD976FBaaQK1g1qIRIikKeeUg5WbKuB86c2%2FeuWJ2QuVjl%2FuQiLiZ0A71HgcjcHrFbyYIHBQnrKsRVfW%2B0xv%2FwRlkDMEl8nrNjfuuiNhhmRN88QipQeLC4xq3SoUa9JsrwZ6L266DKcCyZkboG1VBVnQ%2BKjZCOsoVoMPCu2zaOqUMLq45cMGOqUBBlGHEgERcSWIMJVepr90iAT5UuadDmLn1BDNfmX1nsywL8wegRh0Yo8CGLPTT0FhI3dQkEw5wIiDpEt0aBYfpg0Ld5LXXdMHrR1d%2B%2B0bb3MIr2z%2FpSzQaCz7uiLafVsjtVQRS0Gl5I33lE4tPzIHKaJeYHwUDCFWqN0J8QTJf8gVo2nOGn%2BIx3EzYPlwjF2jKWVcp2K65ZP9fBlg%2FuHcm5YVEts7&X-Amz-Signature=6bac43fe1e4b07a4647b87d7c29819471e9c6f7f2a14d314c493d15b04a49f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQBKKX7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIA%2FzFJhwNASN%2Fohky1tzYMXNk0qkoMXiXYTJPYyaNU0IAiEArEwxy2FIgp7XuwIylQoC0UlVobkYaCUwiayZAf%2Fq%2BZcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKPumHrJCvdcAUH8mCrcA5EKApj4ZfWbmxAy0AM3StTpHwTFrYf7DVgWYlt0dWOEyjO9oefWh8w1gdIMkl1DMRPqSJjI79datjG06%2Fdc7C5oH3BsgOgn%2BQ0K6NpWs2IFfwYlvssmIqqo9jBBuSQ%2Bw7prkrBlDyhYHSOuSWQScIbvQN8CMoHzT9paaYapEzOc7NtqWbKLvN%2FCJTFQYY9LWe4w79iYABRliBVAbpwhIWuj2oXO74ex1QkJMkTaWUvimvm24EjifyyNdjwKCsLz04krOecBZU7myxI2WD1n5nOEyot%2BE0BD2HQfKHre9Vx2weeEVz%2BbMCYGMcplLy7C7xm7EkNlpbb9mcfr27xmbxuvleRp2E4bs4sPwopqmFknhzOsl84CQX%2BUf5NIr%2F0dFLFTiPV8Ylr748Ea5A0KQwYz1k5bodpZw9%2FA6eC9dsPK4OopYuGsX6JxUC%2Ba6f18SVi2UeNk7noHXF2lFD976FBaaQK1g1qIRIikKeeUg5WbKuB86c2%2FeuWJ2QuVjl%2FuQiLiZ0A71HgcjcHrFbyYIHBQnrKsRVfW%2B0xv%2FwRlkDMEl8nrNjfuuiNhhmRN88QipQeLC4xq3SoUa9JsrwZ6L266DKcCyZkboG1VBVnQ%2BKjZCOsoVoMPCu2zaOqUMLq45cMGOqUBBlGHEgERcSWIMJVepr90iAT5UuadDmLn1BDNfmX1nsywL8wegRh0Yo8CGLPTT0FhI3dQkEw5wIiDpEt0aBYfpg0Ld5LXXdMHrR1d%2B%2B0bb3MIr2z%2FpSzQaCz7uiLafVsjtVQRS0Gl5I33lE4tPzIHKaJeYHwUDCFWqN0J8QTJf8gVo2nOGn%2BIx3EzYPlwjF2jKWVcp2K65ZP9fBlg%2FuHcm5YVEts7&X-Amz-Signature=9a3482698a91ee79ccd6cf9319382a5a1bb2c1427234b5be723371174309e75c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQBKKX7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIA%2FzFJhwNASN%2Fohky1tzYMXNk0qkoMXiXYTJPYyaNU0IAiEArEwxy2FIgp7XuwIylQoC0UlVobkYaCUwiayZAf%2Fq%2BZcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKPumHrJCvdcAUH8mCrcA5EKApj4ZfWbmxAy0AM3StTpHwTFrYf7DVgWYlt0dWOEyjO9oefWh8w1gdIMkl1DMRPqSJjI79datjG06%2Fdc7C5oH3BsgOgn%2BQ0K6NpWs2IFfwYlvssmIqqo9jBBuSQ%2Bw7prkrBlDyhYHSOuSWQScIbvQN8CMoHzT9paaYapEzOc7NtqWbKLvN%2FCJTFQYY9LWe4w79iYABRliBVAbpwhIWuj2oXO74ex1QkJMkTaWUvimvm24EjifyyNdjwKCsLz04krOecBZU7myxI2WD1n5nOEyot%2BE0BD2HQfKHre9Vx2weeEVz%2BbMCYGMcplLy7C7xm7EkNlpbb9mcfr27xmbxuvleRp2E4bs4sPwopqmFknhzOsl84CQX%2BUf5NIr%2F0dFLFTiPV8Ylr748Ea5A0KQwYz1k5bodpZw9%2FA6eC9dsPK4OopYuGsX6JxUC%2Ba6f18SVi2UeNk7noHXF2lFD976FBaaQK1g1qIRIikKeeUg5WbKuB86c2%2FeuWJ2QuVjl%2FuQiLiZ0A71HgcjcHrFbyYIHBQnrKsRVfW%2B0xv%2FwRlkDMEl8nrNjfuuiNhhmRN88QipQeLC4xq3SoUa9JsrwZ6L266DKcCyZkboG1VBVnQ%2BKjZCOsoVoMPCu2zaOqUMLq45cMGOqUBBlGHEgERcSWIMJVepr90iAT5UuadDmLn1BDNfmX1nsywL8wegRh0Yo8CGLPTT0FhI3dQkEw5wIiDpEt0aBYfpg0Ld5LXXdMHrR1d%2B%2B0bb3MIr2z%2FpSzQaCz7uiLafVsjtVQRS0Gl5I33lE4tPzIHKaJeYHwUDCFWqN0J8QTJf8gVo2nOGn%2BIx3EzYPlwjF2jKWVcp2K65ZP9fBlg%2FuHcm5YVEts7&X-Amz-Signature=e76c60bb02ae296fa69351172f4ee792bfcd4f0f02cff4c2da09848b824d01ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQBKKX7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIA%2FzFJhwNASN%2Fohky1tzYMXNk0qkoMXiXYTJPYyaNU0IAiEArEwxy2FIgp7XuwIylQoC0UlVobkYaCUwiayZAf%2Fq%2BZcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKPumHrJCvdcAUH8mCrcA5EKApj4ZfWbmxAy0AM3StTpHwTFrYf7DVgWYlt0dWOEyjO9oefWh8w1gdIMkl1DMRPqSJjI79datjG06%2Fdc7C5oH3BsgOgn%2BQ0K6NpWs2IFfwYlvssmIqqo9jBBuSQ%2Bw7prkrBlDyhYHSOuSWQScIbvQN8CMoHzT9paaYapEzOc7NtqWbKLvN%2FCJTFQYY9LWe4w79iYABRliBVAbpwhIWuj2oXO74ex1QkJMkTaWUvimvm24EjifyyNdjwKCsLz04krOecBZU7myxI2WD1n5nOEyot%2BE0BD2HQfKHre9Vx2weeEVz%2BbMCYGMcplLy7C7xm7EkNlpbb9mcfr27xmbxuvleRp2E4bs4sPwopqmFknhzOsl84CQX%2BUf5NIr%2F0dFLFTiPV8Ylr748Ea5A0KQwYz1k5bodpZw9%2FA6eC9dsPK4OopYuGsX6JxUC%2Ba6f18SVi2UeNk7noHXF2lFD976FBaaQK1g1qIRIikKeeUg5WbKuB86c2%2FeuWJ2QuVjl%2FuQiLiZ0A71HgcjcHrFbyYIHBQnrKsRVfW%2B0xv%2FwRlkDMEl8nrNjfuuiNhhmRN88QipQeLC4xq3SoUa9JsrwZ6L266DKcCyZkboG1VBVnQ%2BKjZCOsoVoMPCu2zaOqUMLq45cMGOqUBBlGHEgERcSWIMJVepr90iAT5UuadDmLn1BDNfmX1nsywL8wegRh0Yo8CGLPTT0FhI3dQkEw5wIiDpEt0aBYfpg0Ld5LXXdMHrR1d%2B%2B0bb3MIr2z%2FpSzQaCz7uiLafVsjtVQRS0Gl5I33lE4tPzIHKaJeYHwUDCFWqN0J8QTJf8gVo2nOGn%2BIx3EzYPlwjF2jKWVcp2K65ZP9fBlg%2FuHcm5YVEts7&X-Amz-Signature=068d0fe5ae84416d4d5037030f978038ca698d915aa84c96e3b602d67611a9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQBKKX7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIA%2FzFJhwNASN%2Fohky1tzYMXNk0qkoMXiXYTJPYyaNU0IAiEArEwxy2FIgp7XuwIylQoC0UlVobkYaCUwiayZAf%2Fq%2BZcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKPumHrJCvdcAUH8mCrcA5EKApj4ZfWbmxAy0AM3StTpHwTFrYf7DVgWYlt0dWOEyjO9oefWh8w1gdIMkl1DMRPqSJjI79datjG06%2Fdc7C5oH3BsgOgn%2BQ0K6NpWs2IFfwYlvssmIqqo9jBBuSQ%2Bw7prkrBlDyhYHSOuSWQScIbvQN8CMoHzT9paaYapEzOc7NtqWbKLvN%2FCJTFQYY9LWe4w79iYABRliBVAbpwhIWuj2oXO74ex1QkJMkTaWUvimvm24EjifyyNdjwKCsLz04krOecBZU7myxI2WD1n5nOEyot%2BE0BD2HQfKHre9Vx2weeEVz%2BbMCYGMcplLy7C7xm7EkNlpbb9mcfr27xmbxuvleRp2E4bs4sPwopqmFknhzOsl84CQX%2BUf5NIr%2F0dFLFTiPV8Ylr748Ea5A0KQwYz1k5bodpZw9%2FA6eC9dsPK4OopYuGsX6JxUC%2Ba6f18SVi2UeNk7noHXF2lFD976FBaaQK1g1qIRIikKeeUg5WbKuB86c2%2FeuWJ2QuVjl%2FuQiLiZ0A71HgcjcHrFbyYIHBQnrKsRVfW%2B0xv%2FwRlkDMEl8nrNjfuuiNhhmRN88QipQeLC4xq3SoUa9JsrwZ6L266DKcCyZkboG1VBVnQ%2BKjZCOsoVoMPCu2zaOqUMLq45cMGOqUBBlGHEgERcSWIMJVepr90iAT5UuadDmLn1BDNfmX1nsywL8wegRh0Yo8CGLPTT0FhI3dQkEw5wIiDpEt0aBYfpg0Ld5LXXdMHrR1d%2B%2B0bb3MIr2z%2FpSzQaCz7uiLafVsjtVQRS0Gl5I33lE4tPzIHKaJeYHwUDCFWqN0J8QTJf8gVo2nOGn%2BIx3EzYPlwjF2jKWVcp2K65ZP9fBlg%2FuHcm5YVEts7&X-Amz-Signature=fbcfc60482d54344bf538ca3776d98ff638747cb64343d8fd2be0d07623c863a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQBKKX7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIA%2FzFJhwNASN%2Fohky1tzYMXNk0qkoMXiXYTJPYyaNU0IAiEArEwxy2FIgp7XuwIylQoC0UlVobkYaCUwiayZAf%2Fq%2BZcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKPumHrJCvdcAUH8mCrcA5EKApj4ZfWbmxAy0AM3StTpHwTFrYf7DVgWYlt0dWOEyjO9oefWh8w1gdIMkl1DMRPqSJjI79datjG06%2Fdc7C5oH3BsgOgn%2BQ0K6NpWs2IFfwYlvssmIqqo9jBBuSQ%2Bw7prkrBlDyhYHSOuSWQScIbvQN8CMoHzT9paaYapEzOc7NtqWbKLvN%2FCJTFQYY9LWe4w79iYABRliBVAbpwhIWuj2oXO74ex1QkJMkTaWUvimvm24EjifyyNdjwKCsLz04krOecBZU7myxI2WD1n5nOEyot%2BE0BD2HQfKHre9Vx2weeEVz%2BbMCYGMcplLy7C7xm7EkNlpbb9mcfr27xmbxuvleRp2E4bs4sPwopqmFknhzOsl84CQX%2BUf5NIr%2F0dFLFTiPV8Ylr748Ea5A0KQwYz1k5bodpZw9%2FA6eC9dsPK4OopYuGsX6JxUC%2Ba6f18SVi2UeNk7noHXF2lFD976FBaaQK1g1qIRIikKeeUg5WbKuB86c2%2FeuWJ2QuVjl%2FuQiLiZ0A71HgcjcHrFbyYIHBQnrKsRVfW%2B0xv%2FwRlkDMEl8nrNjfuuiNhhmRN88QipQeLC4xq3SoUa9JsrwZ6L266DKcCyZkboG1VBVnQ%2BKjZCOsoVoMPCu2zaOqUMLq45cMGOqUBBlGHEgERcSWIMJVepr90iAT5UuadDmLn1BDNfmX1nsywL8wegRh0Yo8CGLPTT0FhI3dQkEw5wIiDpEt0aBYfpg0Ld5LXXdMHrR1d%2B%2B0bb3MIr2z%2FpSzQaCz7uiLafVsjtVQRS0Gl5I33lE4tPzIHKaJeYHwUDCFWqN0J8QTJf8gVo2nOGn%2BIx3EzYPlwjF2jKWVcp2K65ZP9fBlg%2FuHcm5YVEts7&X-Amz-Signature=20e7b2e357d3250064b20b2181e5f6b99490d7716175b199d63b303d7d2affd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

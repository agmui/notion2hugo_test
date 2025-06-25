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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUTSRNE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCfBUhe71unRa3WwVhNEuJ%2BmWUwqYV2uwq0XErGwT8h5QIgeNgJaxEEigxemqlgB5KcMtVH7xSeyOGbuormeHZWZJ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEFLQhMZHhXhNeCM8yrcA8dbb4Ey2lMkMF%2B1fF8%2BL%2B%2BvqHiavWlhf6M0Cv6qs9%2F3bmex2Hn6QgH%2BWRaElh4uyvwzKdTAHaDwFlZ3X%2FKmCkR9chGDwHVTXxcw6aPuaKF1q7UHJuWF28%2FMbqWU1RWscPUpIeRvZwlAn6gNed04wLVZ5so7b3x80aNHdEQy8gFTumYebGUI9o3DvgNDznhb%2BbKi9cGpzh4bJmXkdceqOBkMTFg%2BuWySAdIzhuLU4%2FvTVlgrtHQv2C4n9QSdEO0TViboNa%2Bu2eVGuHXehNwT6STSGXoL4hc%2BFZ9ftyrGK4BzO6n5F8n%2BSN2zUogdfda53ftbxrpg5Q7%2FXYQKRaCsClXNypxOFr4YY3HrUkzLhgdeBCKrj59nwPg3Nl6a7cznrwUx5XrLqRygk78gxQs04LPqeEZfKHeYfVYHX%2BAmUGZUnpTLYKa90Lb3ISe%2F%2B%2B4s47T1wb3RnBfGorOzwi2bO9UsGlV3oRk4M2I2tIiBdbtAkmogUdyOyrC5S3fPYpD%2Bs7TvZa3qjgos1OxU8wdiZotYTJ9%2BgzdLgligfXAuYTfjhkZaKpUogmNDRErfef8%2Boq8YeKeIx9EhF%2Bt3QVLPHOXE4qQLKGccU93eQWU8NsMzRu53uVjJzZoJQgTuMK%2Fv78IGOqUB9hFEMuYuQBPpRTXn%2Fzmldgal4WnqMFI60jw9th%2FV21%2B8H%2BO8%2BYWOOlpGWOHxiDn2r5bViaftRa8%2BmabOOCU7aEpiV%2Bdhb8%2BGa0RFBlgZWGJ66gnZqGeUu4X%2Fmo8X1LRcP8O5PBlKsm0vBAkCuAGPTKs5RAUkc1%2FzBPrZtVbB90o9%2B1DEY%2BAyF88Jd3PLtl8nu1iacmpi%2FO0y2TfjgXgvDioEd8Co&X-Amz-Signature=bb9df9aeb6ee64df5beb71a5ef6cf73e75b8468f8980eb933a9e3672a3dcb884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUTSRNE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCfBUhe71unRa3WwVhNEuJ%2BmWUwqYV2uwq0XErGwT8h5QIgeNgJaxEEigxemqlgB5KcMtVH7xSeyOGbuormeHZWZJ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEFLQhMZHhXhNeCM8yrcA8dbb4Ey2lMkMF%2B1fF8%2BL%2B%2BvqHiavWlhf6M0Cv6qs9%2F3bmex2Hn6QgH%2BWRaElh4uyvwzKdTAHaDwFlZ3X%2FKmCkR9chGDwHVTXxcw6aPuaKF1q7UHJuWF28%2FMbqWU1RWscPUpIeRvZwlAn6gNed04wLVZ5so7b3x80aNHdEQy8gFTumYebGUI9o3DvgNDznhb%2BbKi9cGpzh4bJmXkdceqOBkMTFg%2BuWySAdIzhuLU4%2FvTVlgrtHQv2C4n9QSdEO0TViboNa%2Bu2eVGuHXehNwT6STSGXoL4hc%2BFZ9ftyrGK4BzO6n5F8n%2BSN2zUogdfda53ftbxrpg5Q7%2FXYQKRaCsClXNypxOFr4YY3HrUkzLhgdeBCKrj59nwPg3Nl6a7cznrwUx5XrLqRygk78gxQs04LPqeEZfKHeYfVYHX%2BAmUGZUnpTLYKa90Lb3ISe%2F%2B%2B4s47T1wb3RnBfGorOzwi2bO9UsGlV3oRk4M2I2tIiBdbtAkmogUdyOyrC5S3fPYpD%2Bs7TvZa3qjgos1OxU8wdiZotYTJ9%2BgzdLgligfXAuYTfjhkZaKpUogmNDRErfef8%2Boq8YeKeIx9EhF%2Bt3QVLPHOXE4qQLKGccU93eQWU8NsMzRu53uVjJzZoJQgTuMK%2Fv78IGOqUB9hFEMuYuQBPpRTXn%2Fzmldgal4WnqMFI60jw9th%2FV21%2B8H%2BO8%2BYWOOlpGWOHxiDn2r5bViaftRa8%2BmabOOCU7aEpiV%2Bdhb8%2BGa0RFBlgZWGJ66gnZqGeUu4X%2Fmo8X1LRcP8O5PBlKsm0vBAkCuAGPTKs5RAUkc1%2FzBPrZtVbB90o9%2B1DEY%2BAyF88Jd3PLtl8nu1iacmpi%2FO0y2TfjgXgvDioEd8Co&X-Amz-Signature=f89e7a06e2a3a001649d666a5a19bfca8e0e0bfc48795c5adc1a170295dcc4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUTSRNE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCfBUhe71unRa3WwVhNEuJ%2BmWUwqYV2uwq0XErGwT8h5QIgeNgJaxEEigxemqlgB5KcMtVH7xSeyOGbuormeHZWZJ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEFLQhMZHhXhNeCM8yrcA8dbb4Ey2lMkMF%2B1fF8%2BL%2B%2BvqHiavWlhf6M0Cv6qs9%2F3bmex2Hn6QgH%2BWRaElh4uyvwzKdTAHaDwFlZ3X%2FKmCkR9chGDwHVTXxcw6aPuaKF1q7UHJuWF28%2FMbqWU1RWscPUpIeRvZwlAn6gNed04wLVZ5so7b3x80aNHdEQy8gFTumYebGUI9o3DvgNDznhb%2BbKi9cGpzh4bJmXkdceqOBkMTFg%2BuWySAdIzhuLU4%2FvTVlgrtHQv2C4n9QSdEO0TViboNa%2Bu2eVGuHXehNwT6STSGXoL4hc%2BFZ9ftyrGK4BzO6n5F8n%2BSN2zUogdfda53ftbxrpg5Q7%2FXYQKRaCsClXNypxOFr4YY3HrUkzLhgdeBCKrj59nwPg3Nl6a7cznrwUx5XrLqRygk78gxQs04LPqeEZfKHeYfVYHX%2BAmUGZUnpTLYKa90Lb3ISe%2F%2B%2B4s47T1wb3RnBfGorOzwi2bO9UsGlV3oRk4M2I2tIiBdbtAkmogUdyOyrC5S3fPYpD%2Bs7TvZa3qjgos1OxU8wdiZotYTJ9%2BgzdLgligfXAuYTfjhkZaKpUogmNDRErfef8%2Boq8YeKeIx9EhF%2Bt3QVLPHOXE4qQLKGccU93eQWU8NsMzRu53uVjJzZoJQgTuMK%2Fv78IGOqUB9hFEMuYuQBPpRTXn%2Fzmldgal4WnqMFI60jw9th%2FV21%2B8H%2BO8%2BYWOOlpGWOHxiDn2r5bViaftRa8%2BmabOOCU7aEpiV%2Bdhb8%2BGa0RFBlgZWGJ66gnZqGeUu4X%2Fmo8X1LRcP8O5PBlKsm0vBAkCuAGPTKs5RAUkc1%2FzBPrZtVbB90o9%2B1DEY%2BAyF88Jd3PLtl8nu1iacmpi%2FO0y2TfjgXgvDioEd8Co&X-Amz-Signature=0cbaa045172a418e2a1031bd3b6f49aeb2375afde37ba754bf2cabc38b164540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUTSRNE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCfBUhe71unRa3WwVhNEuJ%2BmWUwqYV2uwq0XErGwT8h5QIgeNgJaxEEigxemqlgB5KcMtVH7xSeyOGbuormeHZWZJ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEFLQhMZHhXhNeCM8yrcA8dbb4Ey2lMkMF%2B1fF8%2BL%2B%2BvqHiavWlhf6M0Cv6qs9%2F3bmex2Hn6QgH%2BWRaElh4uyvwzKdTAHaDwFlZ3X%2FKmCkR9chGDwHVTXxcw6aPuaKF1q7UHJuWF28%2FMbqWU1RWscPUpIeRvZwlAn6gNed04wLVZ5so7b3x80aNHdEQy8gFTumYebGUI9o3DvgNDznhb%2BbKi9cGpzh4bJmXkdceqOBkMTFg%2BuWySAdIzhuLU4%2FvTVlgrtHQv2C4n9QSdEO0TViboNa%2Bu2eVGuHXehNwT6STSGXoL4hc%2BFZ9ftyrGK4BzO6n5F8n%2BSN2zUogdfda53ftbxrpg5Q7%2FXYQKRaCsClXNypxOFr4YY3HrUkzLhgdeBCKrj59nwPg3Nl6a7cznrwUx5XrLqRygk78gxQs04LPqeEZfKHeYfVYHX%2BAmUGZUnpTLYKa90Lb3ISe%2F%2B%2B4s47T1wb3RnBfGorOzwi2bO9UsGlV3oRk4M2I2tIiBdbtAkmogUdyOyrC5S3fPYpD%2Bs7TvZa3qjgos1OxU8wdiZotYTJ9%2BgzdLgligfXAuYTfjhkZaKpUogmNDRErfef8%2Boq8YeKeIx9EhF%2Bt3QVLPHOXE4qQLKGccU93eQWU8NsMzRu53uVjJzZoJQgTuMK%2Fv78IGOqUB9hFEMuYuQBPpRTXn%2Fzmldgal4WnqMFI60jw9th%2FV21%2B8H%2BO8%2BYWOOlpGWOHxiDn2r5bViaftRa8%2BmabOOCU7aEpiV%2Bdhb8%2BGa0RFBlgZWGJ66gnZqGeUu4X%2Fmo8X1LRcP8O5PBlKsm0vBAkCuAGPTKs5RAUkc1%2FzBPrZtVbB90o9%2B1DEY%2BAyF88Jd3PLtl8nu1iacmpi%2FO0y2TfjgXgvDioEd8Co&X-Amz-Signature=4fd5082e8ae7246849d9a835df5a9c47ff41bbffd02a8ce1b078831fd49d54d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUTSRNE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCfBUhe71unRa3WwVhNEuJ%2BmWUwqYV2uwq0XErGwT8h5QIgeNgJaxEEigxemqlgB5KcMtVH7xSeyOGbuormeHZWZJ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEFLQhMZHhXhNeCM8yrcA8dbb4Ey2lMkMF%2B1fF8%2BL%2B%2BvqHiavWlhf6M0Cv6qs9%2F3bmex2Hn6QgH%2BWRaElh4uyvwzKdTAHaDwFlZ3X%2FKmCkR9chGDwHVTXxcw6aPuaKF1q7UHJuWF28%2FMbqWU1RWscPUpIeRvZwlAn6gNed04wLVZ5so7b3x80aNHdEQy8gFTumYebGUI9o3DvgNDznhb%2BbKi9cGpzh4bJmXkdceqOBkMTFg%2BuWySAdIzhuLU4%2FvTVlgrtHQv2C4n9QSdEO0TViboNa%2Bu2eVGuHXehNwT6STSGXoL4hc%2BFZ9ftyrGK4BzO6n5F8n%2BSN2zUogdfda53ftbxrpg5Q7%2FXYQKRaCsClXNypxOFr4YY3HrUkzLhgdeBCKrj59nwPg3Nl6a7cznrwUx5XrLqRygk78gxQs04LPqeEZfKHeYfVYHX%2BAmUGZUnpTLYKa90Lb3ISe%2F%2B%2B4s47T1wb3RnBfGorOzwi2bO9UsGlV3oRk4M2I2tIiBdbtAkmogUdyOyrC5S3fPYpD%2Bs7TvZa3qjgos1OxU8wdiZotYTJ9%2BgzdLgligfXAuYTfjhkZaKpUogmNDRErfef8%2Boq8YeKeIx9EhF%2Bt3QVLPHOXE4qQLKGccU93eQWU8NsMzRu53uVjJzZoJQgTuMK%2Fv78IGOqUB9hFEMuYuQBPpRTXn%2Fzmldgal4WnqMFI60jw9th%2FV21%2B8H%2BO8%2BYWOOlpGWOHxiDn2r5bViaftRa8%2BmabOOCU7aEpiV%2Bdhb8%2BGa0RFBlgZWGJ66gnZqGeUu4X%2Fmo8X1LRcP8O5PBlKsm0vBAkCuAGPTKs5RAUkc1%2FzBPrZtVbB90o9%2B1DEY%2BAyF88Jd3PLtl8nu1iacmpi%2FO0y2TfjgXgvDioEd8Co&X-Amz-Signature=72e1c1d17d4c6e01b54895925ab8b02ffc7d9c1afd65c0d2007de51ba0135c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUTSRNE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCfBUhe71unRa3WwVhNEuJ%2BmWUwqYV2uwq0XErGwT8h5QIgeNgJaxEEigxemqlgB5KcMtVH7xSeyOGbuormeHZWZJ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEFLQhMZHhXhNeCM8yrcA8dbb4Ey2lMkMF%2B1fF8%2BL%2B%2BvqHiavWlhf6M0Cv6qs9%2F3bmex2Hn6QgH%2BWRaElh4uyvwzKdTAHaDwFlZ3X%2FKmCkR9chGDwHVTXxcw6aPuaKF1q7UHJuWF28%2FMbqWU1RWscPUpIeRvZwlAn6gNed04wLVZ5so7b3x80aNHdEQy8gFTumYebGUI9o3DvgNDznhb%2BbKi9cGpzh4bJmXkdceqOBkMTFg%2BuWySAdIzhuLU4%2FvTVlgrtHQv2C4n9QSdEO0TViboNa%2Bu2eVGuHXehNwT6STSGXoL4hc%2BFZ9ftyrGK4BzO6n5F8n%2BSN2zUogdfda53ftbxrpg5Q7%2FXYQKRaCsClXNypxOFr4YY3HrUkzLhgdeBCKrj59nwPg3Nl6a7cznrwUx5XrLqRygk78gxQs04LPqeEZfKHeYfVYHX%2BAmUGZUnpTLYKa90Lb3ISe%2F%2B%2B4s47T1wb3RnBfGorOzwi2bO9UsGlV3oRk4M2I2tIiBdbtAkmogUdyOyrC5S3fPYpD%2Bs7TvZa3qjgos1OxU8wdiZotYTJ9%2BgzdLgligfXAuYTfjhkZaKpUogmNDRErfef8%2Boq8YeKeIx9EhF%2Bt3QVLPHOXE4qQLKGccU93eQWU8NsMzRu53uVjJzZoJQgTuMK%2Fv78IGOqUB9hFEMuYuQBPpRTXn%2Fzmldgal4WnqMFI60jw9th%2FV21%2B8H%2BO8%2BYWOOlpGWOHxiDn2r5bViaftRa8%2BmabOOCU7aEpiV%2Bdhb8%2BGa0RFBlgZWGJ66gnZqGeUu4X%2Fmo8X1LRcP8O5PBlKsm0vBAkCuAGPTKs5RAUkc1%2FzBPrZtVbB90o9%2B1DEY%2BAyF88Jd3PLtl8nu1iacmpi%2FO0y2TfjgXgvDioEd8Co&X-Amz-Signature=9de5f22c64821988485e5730ea8800d3a1193abf2b0dee944cb4c3cb6804cbae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUTSRNE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCfBUhe71unRa3WwVhNEuJ%2BmWUwqYV2uwq0XErGwT8h5QIgeNgJaxEEigxemqlgB5KcMtVH7xSeyOGbuormeHZWZJ4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEFLQhMZHhXhNeCM8yrcA8dbb4Ey2lMkMF%2B1fF8%2BL%2B%2BvqHiavWlhf6M0Cv6qs9%2F3bmex2Hn6QgH%2BWRaElh4uyvwzKdTAHaDwFlZ3X%2FKmCkR9chGDwHVTXxcw6aPuaKF1q7UHJuWF28%2FMbqWU1RWscPUpIeRvZwlAn6gNed04wLVZ5so7b3x80aNHdEQy8gFTumYebGUI9o3DvgNDznhb%2BbKi9cGpzh4bJmXkdceqOBkMTFg%2BuWySAdIzhuLU4%2FvTVlgrtHQv2C4n9QSdEO0TViboNa%2Bu2eVGuHXehNwT6STSGXoL4hc%2BFZ9ftyrGK4BzO6n5F8n%2BSN2zUogdfda53ftbxrpg5Q7%2FXYQKRaCsClXNypxOFr4YY3HrUkzLhgdeBCKrj59nwPg3Nl6a7cznrwUx5XrLqRygk78gxQs04LPqeEZfKHeYfVYHX%2BAmUGZUnpTLYKa90Lb3ISe%2F%2B%2B4s47T1wb3RnBfGorOzwi2bO9UsGlV3oRk4M2I2tIiBdbtAkmogUdyOyrC5S3fPYpD%2Bs7TvZa3qjgos1OxU8wdiZotYTJ9%2BgzdLgligfXAuYTfjhkZaKpUogmNDRErfef8%2Boq8YeKeIx9EhF%2Bt3QVLPHOXE4qQLKGccU93eQWU8NsMzRu53uVjJzZoJQgTuMK%2Fv78IGOqUB9hFEMuYuQBPpRTXn%2Fzmldgal4WnqMFI60jw9th%2FV21%2B8H%2BO8%2BYWOOlpGWOHxiDn2r5bViaftRa8%2BmabOOCU7aEpiV%2Bdhb8%2BGa0RFBlgZWGJ66gnZqGeUu4X%2Fmo8X1LRcP8O5PBlKsm0vBAkCuAGPTKs5RAUkc1%2FzBPrZtVbB90o9%2B1DEY%2BAyF88Jd3PLtl8nu1iacmpi%2FO0y2TfjgXgvDioEd8Co&X-Amz-Signature=cfeb79d24b9194e08ab9f9fd5c76f8fffeb79d606cba00caec9c4e89f1fb4fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZMDI36F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDa%2FfFSI%2BYA59Y%2FeVzrYH9GfApcjFW2ww2KyIPoIALNVAiBx5VIPaJXvZ8Aa2%2BWpJx6WihC1dwTS2yt%2BQaQU1S2AtCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWQJCcVS29hNdwJ%2BuKtwD4RPBm2gOvhGgOm0JC%2BkI1ER9k079ld7lZ15YDyrdzicCgB0%2BdEEVN91obV%2B5a3pewbijO10mtY2TpTneXbnN4%2Biz1xQ95PoNcHIHGIElImJW1%2BRfXOCLaBgQHrhQitnYMZ8ohaymB82EUpEuIFlw5skO7Q91g6iErrW1uWZNCuo0mmh%2FFmDR28tnE5q0rU0%2B0skE7aXDx%2BOfSEowDeItmy5CS%2FaTKPp5tlF%2F6psv560eUbTnvH%2FIOP%2BMtlTUG%2BbQDtph9N8aZ3TGdgz5xa9l6lMxvhtzt2CAeqr6Hh0HwvFWPJRZXKhsM%2B0M%2Blgx5J9xx8PiJvaVSfiaWbbPWc3%2FT3kV%2Bk%2BuiMjLorwvLn2FkbaUzaLnyVyXcM5H2rA4wd0OgPqnH%2B93A7Ao2POUw4j6Mi60dwDBrC1yd5famsUmT7BXEpdWI304TXjA43dK5Vb39om6pPnn53MBGRu7CUNX1tpoxA2DEEhGtRUbXOb5EdT6uQp0AJaoshhjn2wouYxEdNGfVtmmmxg6j2srhRseWC%2BsXQ7La3gYze6SwtExNuyFi0bZpTL3Y5FYSxBWn4mSVUQvAUAUajwY3Vrplw%2BnD8oYSlBCFv6dpXB6wtQQequqrqh4m71dVUCPCewwmoTUwwY6pgG7eTOH59nAMsHwIDSRW5z76MryTHZfnE9xb0MV%2BWOeLXpDtZQ1pxSgWUFyyKuRTytONdSAAuwQucAGnYFRObk4fm8fxtR3%2FMLxKXj8ie4dz4XhSnN4f2bCf0kH9%2FuKs8vw7C0q8lRmTdcPZY2bvRIZl48y%2FHiz1en5%2Fs2pck5vdeeZkc1plXxh3KNov167h12lK9CEr%2B7gHigfz2iGVi29i2Xtz6JG&X-Amz-Signature=973f324cc717d4d899b369538fe262effaf027367f953f33d7564db0e4f21e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZMDI36F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDa%2FfFSI%2BYA59Y%2FeVzrYH9GfApcjFW2ww2KyIPoIALNVAiBx5VIPaJXvZ8Aa2%2BWpJx6WihC1dwTS2yt%2BQaQU1S2AtCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWQJCcVS29hNdwJ%2BuKtwD4RPBm2gOvhGgOm0JC%2BkI1ER9k079ld7lZ15YDyrdzicCgB0%2BdEEVN91obV%2B5a3pewbijO10mtY2TpTneXbnN4%2Biz1xQ95PoNcHIHGIElImJW1%2BRfXOCLaBgQHrhQitnYMZ8ohaymB82EUpEuIFlw5skO7Q91g6iErrW1uWZNCuo0mmh%2FFmDR28tnE5q0rU0%2B0skE7aXDx%2BOfSEowDeItmy5CS%2FaTKPp5tlF%2F6psv560eUbTnvH%2FIOP%2BMtlTUG%2BbQDtph9N8aZ3TGdgz5xa9l6lMxvhtzt2CAeqr6Hh0HwvFWPJRZXKhsM%2B0M%2Blgx5J9xx8PiJvaVSfiaWbbPWc3%2FT3kV%2Bk%2BuiMjLorwvLn2FkbaUzaLnyVyXcM5H2rA4wd0OgPqnH%2B93A7Ao2POUw4j6Mi60dwDBrC1yd5famsUmT7BXEpdWI304TXjA43dK5Vb39om6pPnn53MBGRu7CUNX1tpoxA2DEEhGtRUbXOb5EdT6uQp0AJaoshhjn2wouYxEdNGfVtmmmxg6j2srhRseWC%2BsXQ7La3gYze6SwtExNuyFi0bZpTL3Y5FYSxBWn4mSVUQvAUAUajwY3Vrplw%2BnD8oYSlBCFv6dpXB6wtQQequqrqh4m71dVUCPCewwmoTUwwY6pgG7eTOH59nAMsHwIDSRW5z76MryTHZfnE9xb0MV%2BWOeLXpDtZQ1pxSgWUFyyKuRTytONdSAAuwQucAGnYFRObk4fm8fxtR3%2FMLxKXj8ie4dz4XhSnN4f2bCf0kH9%2FuKs8vw7C0q8lRmTdcPZY2bvRIZl48y%2FHiz1en5%2Fs2pck5vdeeZkc1plXxh3KNov167h12lK9CEr%2B7gHigfz2iGVi29i2Xtz6JG&X-Amz-Signature=53aad74df2b8e5b3de53f738811edd97eb2bc93546e94ef7f8f0d30820c0419b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZMDI36F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDa%2FfFSI%2BYA59Y%2FeVzrYH9GfApcjFW2ww2KyIPoIALNVAiBx5VIPaJXvZ8Aa2%2BWpJx6WihC1dwTS2yt%2BQaQU1S2AtCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWQJCcVS29hNdwJ%2BuKtwD4RPBm2gOvhGgOm0JC%2BkI1ER9k079ld7lZ15YDyrdzicCgB0%2BdEEVN91obV%2B5a3pewbijO10mtY2TpTneXbnN4%2Biz1xQ95PoNcHIHGIElImJW1%2BRfXOCLaBgQHrhQitnYMZ8ohaymB82EUpEuIFlw5skO7Q91g6iErrW1uWZNCuo0mmh%2FFmDR28tnE5q0rU0%2B0skE7aXDx%2BOfSEowDeItmy5CS%2FaTKPp5tlF%2F6psv560eUbTnvH%2FIOP%2BMtlTUG%2BbQDtph9N8aZ3TGdgz5xa9l6lMxvhtzt2CAeqr6Hh0HwvFWPJRZXKhsM%2B0M%2Blgx5J9xx8PiJvaVSfiaWbbPWc3%2FT3kV%2Bk%2BuiMjLorwvLn2FkbaUzaLnyVyXcM5H2rA4wd0OgPqnH%2B93A7Ao2POUw4j6Mi60dwDBrC1yd5famsUmT7BXEpdWI304TXjA43dK5Vb39om6pPnn53MBGRu7CUNX1tpoxA2DEEhGtRUbXOb5EdT6uQp0AJaoshhjn2wouYxEdNGfVtmmmxg6j2srhRseWC%2BsXQ7La3gYze6SwtExNuyFi0bZpTL3Y5FYSxBWn4mSVUQvAUAUajwY3Vrplw%2BnD8oYSlBCFv6dpXB6wtQQequqrqh4m71dVUCPCewwmoTUwwY6pgG7eTOH59nAMsHwIDSRW5z76MryTHZfnE9xb0MV%2BWOeLXpDtZQ1pxSgWUFyyKuRTytONdSAAuwQucAGnYFRObk4fm8fxtR3%2FMLxKXj8ie4dz4XhSnN4f2bCf0kH9%2FuKs8vw7C0q8lRmTdcPZY2bvRIZl48y%2FHiz1en5%2Fs2pck5vdeeZkc1plXxh3KNov167h12lK9CEr%2B7gHigfz2iGVi29i2Xtz6JG&X-Amz-Signature=6d90b231638868ac6865c69d2729e46981a33e529439eebba83e961203776982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZMDI36F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDa%2FfFSI%2BYA59Y%2FeVzrYH9GfApcjFW2ww2KyIPoIALNVAiBx5VIPaJXvZ8Aa2%2BWpJx6WihC1dwTS2yt%2BQaQU1S2AtCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWQJCcVS29hNdwJ%2BuKtwD4RPBm2gOvhGgOm0JC%2BkI1ER9k079ld7lZ15YDyrdzicCgB0%2BdEEVN91obV%2B5a3pewbijO10mtY2TpTneXbnN4%2Biz1xQ95PoNcHIHGIElImJW1%2BRfXOCLaBgQHrhQitnYMZ8ohaymB82EUpEuIFlw5skO7Q91g6iErrW1uWZNCuo0mmh%2FFmDR28tnE5q0rU0%2B0skE7aXDx%2BOfSEowDeItmy5CS%2FaTKPp5tlF%2F6psv560eUbTnvH%2FIOP%2BMtlTUG%2BbQDtph9N8aZ3TGdgz5xa9l6lMxvhtzt2CAeqr6Hh0HwvFWPJRZXKhsM%2B0M%2Blgx5J9xx8PiJvaVSfiaWbbPWc3%2FT3kV%2Bk%2BuiMjLorwvLn2FkbaUzaLnyVyXcM5H2rA4wd0OgPqnH%2B93A7Ao2POUw4j6Mi60dwDBrC1yd5famsUmT7BXEpdWI304TXjA43dK5Vb39om6pPnn53MBGRu7CUNX1tpoxA2DEEhGtRUbXOb5EdT6uQp0AJaoshhjn2wouYxEdNGfVtmmmxg6j2srhRseWC%2BsXQ7La3gYze6SwtExNuyFi0bZpTL3Y5FYSxBWn4mSVUQvAUAUajwY3Vrplw%2BnD8oYSlBCFv6dpXB6wtQQequqrqh4m71dVUCPCewwmoTUwwY6pgG7eTOH59nAMsHwIDSRW5z76MryTHZfnE9xb0MV%2BWOeLXpDtZQ1pxSgWUFyyKuRTytONdSAAuwQucAGnYFRObk4fm8fxtR3%2FMLxKXj8ie4dz4XhSnN4f2bCf0kH9%2FuKs8vw7C0q8lRmTdcPZY2bvRIZl48y%2FHiz1en5%2Fs2pck5vdeeZkc1plXxh3KNov167h12lK9CEr%2B7gHigfz2iGVi29i2Xtz6JG&X-Amz-Signature=48d2c12b214783f3426997dc27e27dc686b4120b1deecaa68f694b8a1c36ca81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZMDI36F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDa%2FfFSI%2BYA59Y%2FeVzrYH9GfApcjFW2ww2KyIPoIALNVAiBx5VIPaJXvZ8Aa2%2BWpJx6WihC1dwTS2yt%2BQaQU1S2AtCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWQJCcVS29hNdwJ%2BuKtwD4RPBm2gOvhGgOm0JC%2BkI1ER9k079ld7lZ15YDyrdzicCgB0%2BdEEVN91obV%2B5a3pewbijO10mtY2TpTneXbnN4%2Biz1xQ95PoNcHIHGIElImJW1%2BRfXOCLaBgQHrhQitnYMZ8ohaymB82EUpEuIFlw5skO7Q91g6iErrW1uWZNCuo0mmh%2FFmDR28tnE5q0rU0%2B0skE7aXDx%2BOfSEowDeItmy5CS%2FaTKPp5tlF%2F6psv560eUbTnvH%2FIOP%2BMtlTUG%2BbQDtph9N8aZ3TGdgz5xa9l6lMxvhtzt2CAeqr6Hh0HwvFWPJRZXKhsM%2B0M%2Blgx5J9xx8PiJvaVSfiaWbbPWc3%2FT3kV%2Bk%2BuiMjLorwvLn2FkbaUzaLnyVyXcM5H2rA4wd0OgPqnH%2B93A7Ao2POUw4j6Mi60dwDBrC1yd5famsUmT7BXEpdWI304TXjA43dK5Vb39om6pPnn53MBGRu7CUNX1tpoxA2DEEhGtRUbXOb5EdT6uQp0AJaoshhjn2wouYxEdNGfVtmmmxg6j2srhRseWC%2BsXQ7La3gYze6SwtExNuyFi0bZpTL3Y5FYSxBWn4mSVUQvAUAUajwY3Vrplw%2BnD8oYSlBCFv6dpXB6wtQQequqrqh4m71dVUCPCewwmoTUwwY6pgG7eTOH59nAMsHwIDSRW5z76MryTHZfnE9xb0MV%2BWOeLXpDtZQ1pxSgWUFyyKuRTytONdSAAuwQucAGnYFRObk4fm8fxtR3%2FMLxKXj8ie4dz4XhSnN4f2bCf0kH9%2FuKs8vw7C0q8lRmTdcPZY2bvRIZl48y%2FHiz1en5%2Fs2pck5vdeeZkc1plXxh3KNov167h12lK9CEr%2B7gHigfz2iGVi29i2Xtz6JG&X-Amz-Signature=6770c148ae8347ab483a8668f2eeeba49ae72aecbacd9c1b6f0f5c7614be4042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZMDI36F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDa%2FfFSI%2BYA59Y%2FeVzrYH9GfApcjFW2ww2KyIPoIALNVAiBx5VIPaJXvZ8Aa2%2BWpJx6WihC1dwTS2yt%2BQaQU1S2AtCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWQJCcVS29hNdwJ%2BuKtwD4RPBm2gOvhGgOm0JC%2BkI1ER9k079ld7lZ15YDyrdzicCgB0%2BdEEVN91obV%2B5a3pewbijO10mtY2TpTneXbnN4%2Biz1xQ95PoNcHIHGIElImJW1%2BRfXOCLaBgQHrhQitnYMZ8ohaymB82EUpEuIFlw5skO7Q91g6iErrW1uWZNCuo0mmh%2FFmDR28tnE5q0rU0%2B0skE7aXDx%2BOfSEowDeItmy5CS%2FaTKPp5tlF%2F6psv560eUbTnvH%2FIOP%2BMtlTUG%2BbQDtph9N8aZ3TGdgz5xa9l6lMxvhtzt2CAeqr6Hh0HwvFWPJRZXKhsM%2B0M%2Blgx5J9xx8PiJvaVSfiaWbbPWc3%2FT3kV%2Bk%2BuiMjLorwvLn2FkbaUzaLnyVyXcM5H2rA4wd0OgPqnH%2B93A7Ao2POUw4j6Mi60dwDBrC1yd5famsUmT7BXEpdWI304TXjA43dK5Vb39om6pPnn53MBGRu7CUNX1tpoxA2DEEhGtRUbXOb5EdT6uQp0AJaoshhjn2wouYxEdNGfVtmmmxg6j2srhRseWC%2BsXQ7La3gYze6SwtExNuyFi0bZpTL3Y5FYSxBWn4mSVUQvAUAUajwY3Vrplw%2BnD8oYSlBCFv6dpXB6wtQQequqrqh4m71dVUCPCewwmoTUwwY6pgG7eTOH59nAMsHwIDSRW5z76MryTHZfnE9xb0MV%2BWOeLXpDtZQ1pxSgWUFyyKuRTytONdSAAuwQucAGnYFRObk4fm8fxtR3%2FMLxKXj8ie4dz4XhSnN4f2bCf0kH9%2FuKs8vw7C0q8lRmTdcPZY2bvRIZl48y%2FHiz1en5%2Fs2pck5vdeeZkc1plXxh3KNov167h12lK9CEr%2B7gHigfz2iGVi29i2Xtz6JG&X-Amz-Signature=6d631076e180a6453b5b0b4e97350a91d1fc095a40f1bf60a94f54f64da58447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZMDI36F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDa%2FfFSI%2BYA59Y%2FeVzrYH9GfApcjFW2ww2KyIPoIALNVAiBx5VIPaJXvZ8Aa2%2BWpJx6WihC1dwTS2yt%2BQaQU1S2AtCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWQJCcVS29hNdwJ%2BuKtwD4RPBm2gOvhGgOm0JC%2BkI1ER9k079ld7lZ15YDyrdzicCgB0%2BdEEVN91obV%2B5a3pewbijO10mtY2TpTneXbnN4%2Biz1xQ95PoNcHIHGIElImJW1%2BRfXOCLaBgQHrhQitnYMZ8ohaymB82EUpEuIFlw5skO7Q91g6iErrW1uWZNCuo0mmh%2FFmDR28tnE5q0rU0%2B0skE7aXDx%2BOfSEowDeItmy5CS%2FaTKPp5tlF%2F6psv560eUbTnvH%2FIOP%2BMtlTUG%2BbQDtph9N8aZ3TGdgz5xa9l6lMxvhtzt2CAeqr6Hh0HwvFWPJRZXKhsM%2B0M%2Blgx5J9xx8PiJvaVSfiaWbbPWc3%2FT3kV%2Bk%2BuiMjLorwvLn2FkbaUzaLnyVyXcM5H2rA4wd0OgPqnH%2B93A7Ao2POUw4j6Mi60dwDBrC1yd5famsUmT7BXEpdWI304TXjA43dK5Vb39om6pPnn53MBGRu7CUNX1tpoxA2DEEhGtRUbXOb5EdT6uQp0AJaoshhjn2wouYxEdNGfVtmmmxg6j2srhRseWC%2BsXQ7La3gYze6SwtExNuyFi0bZpTL3Y5FYSxBWn4mSVUQvAUAUajwY3Vrplw%2BnD8oYSlBCFv6dpXB6wtQQequqrqh4m71dVUCPCewwmoTUwwY6pgG7eTOH59nAMsHwIDSRW5z76MryTHZfnE9xb0MV%2BWOeLXpDtZQ1pxSgWUFyyKuRTytONdSAAuwQucAGnYFRObk4fm8fxtR3%2FMLxKXj8ie4dz4XhSnN4f2bCf0kH9%2FuKs8vw7C0q8lRmTdcPZY2bvRIZl48y%2FHiz1en5%2Fs2pck5vdeeZkc1plXxh3KNov167h12lK9CEr%2B7gHigfz2iGVi29i2Xtz6JG&X-Amz-Signature=fdd6b7499800dcde75d011b8d79b4f223052baa8c3ca2df5ab251e5ddd0923d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

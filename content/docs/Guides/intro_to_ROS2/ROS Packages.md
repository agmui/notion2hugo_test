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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHOTKTED%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8PEQaIQ1dKBtuPgLiJ40kAVACKBostHYly2JduNotCwIgRGQLi4GZOuUV8VMKIRg9CKlFQnqI5JxTF2Qgyn3LI98qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6d%2BwWgps0uIaQWwSrcA7UluFqJm%2B1Jqd5xmvkKD8W%2FB3hVfedttPgn0%2BMS1I%2B4QxToUEs%2FGy8ISIvHk5MVjAgKW8cks3B%2FkjVlbsDvu6eSPolWDAIS0vkCLnzqPyre1HnwrJF4yYDm%2BPO6JeVhh98VRWUsGMqenqNocgKu3ar5IBEB%2BARYC7fvVbFGgVwqzvBm5BQLH1qsg3NkOXBN%2Fyo2z28ztFTyyEi7OYqgMr5yICcYKXWbgYlC9Fyd9UGIq4Krn1bhp%2B3rRN5I24ukKPabhXoM%2BrdEhdqIcB4TY%2FV7DS4vulrCCuwNDmTS1kpDtih7KHv0W%2FsLec8K3NrKRAW0XZLgqCdg%2BoGryY3ASgcSAeeZ0T2F2SSChPnNtC%2F945DTuFU1g2Vkrmli9uakzCal%2BhEvbKwimWQecRilmfzetBlq5eY0XisUuyAzcEqhu4QnmDPXwwNuWiodoXRzHgh7WRrQCxwsF5z0pc8pxEbXQwt%2BOTCGCI1OZ77j9eab0JOjtWubSmKGBqis7RHfIC9TV1srjbSADQksaRkLdzwrhde%2BipEcZuK2qxtoblj98msH%2FVpkGejFeSCmSU3sLuEdwNZbiKoJqV%2F6T5Rem7B1krDqRanTf81FNeR59v%2FiGj603kHdPjTlynEYMIDQsr8GOqUBf5AvHtiawKnchlSWeHq4nGgS3BhqDkbxarsZr3tWTRHxqlQeumqb8PieMAfNo%2Fp3tx51Ys4pevYhTzVvSX5v0VTPsNQ5Yr3pxNSsr9Pb4XoeqD4uGF%2F8FlqctgFhnFuBqMi8BJcBPJaHpxc%2BQiwcJdzZuAf0E9GL4TETrSvj22IH561IjdGU2HUdKVmUSZzvRtQW%2B3bSoe83%2BkRxgumkg7Jc0Gts&X-Amz-Signature=bda0905f2baabac66d0817172b04841af8ca90ddf5c57409864424f40add7ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHOTKTED%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8PEQaIQ1dKBtuPgLiJ40kAVACKBostHYly2JduNotCwIgRGQLi4GZOuUV8VMKIRg9CKlFQnqI5JxTF2Qgyn3LI98qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6d%2BwWgps0uIaQWwSrcA7UluFqJm%2B1Jqd5xmvkKD8W%2FB3hVfedttPgn0%2BMS1I%2B4QxToUEs%2FGy8ISIvHk5MVjAgKW8cks3B%2FkjVlbsDvu6eSPolWDAIS0vkCLnzqPyre1HnwrJF4yYDm%2BPO6JeVhh98VRWUsGMqenqNocgKu3ar5IBEB%2BARYC7fvVbFGgVwqzvBm5BQLH1qsg3NkOXBN%2Fyo2z28ztFTyyEi7OYqgMr5yICcYKXWbgYlC9Fyd9UGIq4Krn1bhp%2B3rRN5I24ukKPabhXoM%2BrdEhdqIcB4TY%2FV7DS4vulrCCuwNDmTS1kpDtih7KHv0W%2FsLec8K3NrKRAW0XZLgqCdg%2BoGryY3ASgcSAeeZ0T2F2SSChPnNtC%2F945DTuFU1g2Vkrmli9uakzCal%2BhEvbKwimWQecRilmfzetBlq5eY0XisUuyAzcEqhu4QnmDPXwwNuWiodoXRzHgh7WRrQCxwsF5z0pc8pxEbXQwt%2BOTCGCI1OZ77j9eab0JOjtWubSmKGBqis7RHfIC9TV1srjbSADQksaRkLdzwrhde%2BipEcZuK2qxtoblj98msH%2FVpkGejFeSCmSU3sLuEdwNZbiKoJqV%2F6T5Rem7B1krDqRanTf81FNeR59v%2FiGj603kHdPjTlynEYMIDQsr8GOqUBf5AvHtiawKnchlSWeHq4nGgS3BhqDkbxarsZr3tWTRHxqlQeumqb8PieMAfNo%2Fp3tx51Ys4pevYhTzVvSX5v0VTPsNQ5Yr3pxNSsr9Pb4XoeqD4uGF%2F8FlqctgFhnFuBqMi8BJcBPJaHpxc%2BQiwcJdzZuAf0E9GL4TETrSvj22IH561IjdGU2HUdKVmUSZzvRtQW%2B3bSoe83%2BkRxgumkg7Jc0Gts&X-Amz-Signature=316fc67d348e5e00c1bb00338be0ed63573d21a87f1d5e49f7920401e7f5823f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHOTKTED%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8PEQaIQ1dKBtuPgLiJ40kAVACKBostHYly2JduNotCwIgRGQLi4GZOuUV8VMKIRg9CKlFQnqI5JxTF2Qgyn3LI98qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6d%2BwWgps0uIaQWwSrcA7UluFqJm%2B1Jqd5xmvkKD8W%2FB3hVfedttPgn0%2BMS1I%2B4QxToUEs%2FGy8ISIvHk5MVjAgKW8cks3B%2FkjVlbsDvu6eSPolWDAIS0vkCLnzqPyre1HnwrJF4yYDm%2BPO6JeVhh98VRWUsGMqenqNocgKu3ar5IBEB%2BARYC7fvVbFGgVwqzvBm5BQLH1qsg3NkOXBN%2Fyo2z28ztFTyyEi7OYqgMr5yICcYKXWbgYlC9Fyd9UGIq4Krn1bhp%2B3rRN5I24ukKPabhXoM%2BrdEhdqIcB4TY%2FV7DS4vulrCCuwNDmTS1kpDtih7KHv0W%2FsLec8K3NrKRAW0XZLgqCdg%2BoGryY3ASgcSAeeZ0T2F2SSChPnNtC%2F945DTuFU1g2Vkrmli9uakzCal%2BhEvbKwimWQecRilmfzetBlq5eY0XisUuyAzcEqhu4QnmDPXwwNuWiodoXRzHgh7WRrQCxwsF5z0pc8pxEbXQwt%2BOTCGCI1OZ77j9eab0JOjtWubSmKGBqis7RHfIC9TV1srjbSADQksaRkLdzwrhde%2BipEcZuK2qxtoblj98msH%2FVpkGejFeSCmSU3sLuEdwNZbiKoJqV%2F6T5Rem7B1krDqRanTf81FNeR59v%2FiGj603kHdPjTlynEYMIDQsr8GOqUBf5AvHtiawKnchlSWeHq4nGgS3BhqDkbxarsZr3tWTRHxqlQeumqb8PieMAfNo%2Fp3tx51Ys4pevYhTzVvSX5v0VTPsNQ5Yr3pxNSsr9Pb4XoeqD4uGF%2F8FlqctgFhnFuBqMi8BJcBPJaHpxc%2BQiwcJdzZuAf0E9GL4TETrSvj22IH561IjdGU2HUdKVmUSZzvRtQW%2B3bSoe83%2BkRxgumkg7Jc0Gts&X-Amz-Signature=7ebf2fa9cd3774d15be8d29ef96678567d244752d1eb19ddea6b1a3458b98e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHOTKTED%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8PEQaIQ1dKBtuPgLiJ40kAVACKBostHYly2JduNotCwIgRGQLi4GZOuUV8VMKIRg9CKlFQnqI5JxTF2Qgyn3LI98qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6d%2BwWgps0uIaQWwSrcA7UluFqJm%2B1Jqd5xmvkKD8W%2FB3hVfedttPgn0%2BMS1I%2B4QxToUEs%2FGy8ISIvHk5MVjAgKW8cks3B%2FkjVlbsDvu6eSPolWDAIS0vkCLnzqPyre1HnwrJF4yYDm%2BPO6JeVhh98VRWUsGMqenqNocgKu3ar5IBEB%2BARYC7fvVbFGgVwqzvBm5BQLH1qsg3NkOXBN%2Fyo2z28ztFTyyEi7OYqgMr5yICcYKXWbgYlC9Fyd9UGIq4Krn1bhp%2B3rRN5I24ukKPabhXoM%2BrdEhdqIcB4TY%2FV7DS4vulrCCuwNDmTS1kpDtih7KHv0W%2FsLec8K3NrKRAW0XZLgqCdg%2BoGryY3ASgcSAeeZ0T2F2SSChPnNtC%2F945DTuFU1g2Vkrmli9uakzCal%2BhEvbKwimWQecRilmfzetBlq5eY0XisUuyAzcEqhu4QnmDPXwwNuWiodoXRzHgh7WRrQCxwsF5z0pc8pxEbXQwt%2BOTCGCI1OZ77j9eab0JOjtWubSmKGBqis7RHfIC9TV1srjbSADQksaRkLdzwrhde%2BipEcZuK2qxtoblj98msH%2FVpkGejFeSCmSU3sLuEdwNZbiKoJqV%2F6T5Rem7B1krDqRanTf81FNeR59v%2FiGj603kHdPjTlynEYMIDQsr8GOqUBf5AvHtiawKnchlSWeHq4nGgS3BhqDkbxarsZr3tWTRHxqlQeumqb8PieMAfNo%2Fp3tx51Ys4pevYhTzVvSX5v0VTPsNQ5Yr3pxNSsr9Pb4XoeqD4uGF%2F8FlqctgFhnFuBqMi8BJcBPJaHpxc%2BQiwcJdzZuAf0E9GL4TETrSvj22IH561IjdGU2HUdKVmUSZzvRtQW%2B3bSoe83%2BkRxgumkg7Jc0Gts&X-Amz-Signature=189370ce929525c72abb7340d3fd38a1dfb7eed29b81640457f4a2e1d224505f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHOTKTED%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8PEQaIQ1dKBtuPgLiJ40kAVACKBostHYly2JduNotCwIgRGQLi4GZOuUV8VMKIRg9CKlFQnqI5JxTF2Qgyn3LI98qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6d%2BwWgps0uIaQWwSrcA7UluFqJm%2B1Jqd5xmvkKD8W%2FB3hVfedttPgn0%2BMS1I%2B4QxToUEs%2FGy8ISIvHk5MVjAgKW8cks3B%2FkjVlbsDvu6eSPolWDAIS0vkCLnzqPyre1HnwrJF4yYDm%2BPO6JeVhh98VRWUsGMqenqNocgKu3ar5IBEB%2BARYC7fvVbFGgVwqzvBm5BQLH1qsg3NkOXBN%2Fyo2z28ztFTyyEi7OYqgMr5yICcYKXWbgYlC9Fyd9UGIq4Krn1bhp%2B3rRN5I24ukKPabhXoM%2BrdEhdqIcB4TY%2FV7DS4vulrCCuwNDmTS1kpDtih7KHv0W%2FsLec8K3NrKRAW0XZLgqCdg%2BoGryY3ASgcSAeeZ0T2F2SSChPnNtC%2F945DTuFU1g2Vkrmli9uakzCal%2BhEvbKwimWQecRilmfzetBlq5eY0XisUuyAzcEqhu4QnmDPXwwNuWiodoXRzHgh7WRrQCxwsF5z0pc8pxEbXQwt%2BOTCGCI1OZ77j9eab0JOjtWubSmKGBqis7RHfIC9TV1srjbSADQksaRkLdzwrhde%2BipEcZuK2qxtoblj98msH%2FVpkGejFeSCmSU3sLuEdwNZbiKoJqV%2F6T5Rem7B1krDqRanTf81FNeR59v%2FiGj603kHdPjTlynEYMIDQsr8GOqUBf5AvHtiawKnchlSWeHq4nGgS3BhqDkbxarsZr3tWTRHxqlQeumqb8PieMAfNo%2Fp3tx51Ys4pevYhTzVvSX5v0VTPsNQ5Yr3pxNSsr9Pb4XoeqD4uGF%2F8FlqctgFhnFuBqMi8BJcBPJaHpxc%2BQiwcJdzZuAf0E9GL4TETrSvj22IH561IjdGU2HUdKVmUSZzvRtQW%2B3bSoe83%2BkRxgumkg7Jc0Gts&X-Amz-Signature=23ddbf9c19ab3f26611c9a1db477bbb81488a910b0394b902b7909d1d89db6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHOTKTED%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8PEQaIQ1dKBtuPgLiJ40kAVACKBostHYly2JduNotCwIgRGQLi4GZOuUV8VMKIRg9CKlFQnqI5JxTF2Qgyn3LI98qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6d%2BwWgps0uIaQWwSrcA7UluFqJm%2B1Jqd5xmvkKD8W%2FB3hVfedttPgn0%2BMS1I%2B4QxToUEs%2FGy8ISIvHk5MVjAgKW8cks3B%2FkjVlbsDvu6eSPolWDAIS0vkCLnzqPyre1HnwrJF4yYDm%2BPO6JeVhh98VRWUsGMqenqNocgKu3ar5IBEB%2BARYC7fvVbFGgVwqzvBm5BQLH1qsg3NkOXBN%2Fyo2z28ztFTyyEi7OYqgMr5yICcYKXWbgYlC9Fyd9UGIq4Krn1bhp%2B3rRN5I24ukKPabhXoM%2BrdEhdqIcB4TY%2FV7DS4vulrCCuwNDmTS1kpDtih7KHv0W%2FsLec8K3NrKRAW0XZLgqCdg%2BoGryY3ASgcSAeeZ0T2F2SSChPnNtC%2F945DTuFU1g2Vkrmli9uakzCal%2BhEvbKwimWQecRilmfzetBlq5eY0XisUuyAzcEqhu4QnmDPXwwNuWiodoXRzHgh7WRrQCxwsF5z0pc8pxEbXQwt%2BOTCGCI1OZ77j9eab0JOjtWubSmKGBqis7RHfIC9TV1srjbSADQksaRkLdzwrhde%2BipEcZuK2qxtoblj98msH%2FVpkGejFeSCmSU3sLuEdwNZbiKoJqV%2F6T5Rem7B1krDqRanTf81FNeR59v%2FiGj603kHdPjTlynEYMIDQsr8GOqUBf5AvHtiawKnchlSWeHq4nGgS3BhqDkbxarsZr3tWTRHxqlQeumqb8PieMAfNo%2Fp3tx51Ys4pevYhTzVvSX5v0VTPsNQ5Yr3pxNSsr9Pb4XoeqD4uGF%2F8FlqctgFhnFuBqMi8BJcBPJaHpxc%2BQiwcJdzZuAf0E9GL4TETrSvj22IH561IjdGU2HUdKVmUSZzvRtQW%2B3bSoe83%2BkRxgumkg7Jc0Gts&X-Amz-Signature=59de6deb6a5178ac561871798c67d4902a4e6b53b3e11912d5f081177d156081&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHOTKTED%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8PEQaIQ1dKBtuPgLiJ40kAVACKBostHYly2JduNotCwIgRGQLi4GZOuUV8VMKIRg9CKlFQnqI5JxTF2Qgyn3LI98qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6d%2BwWgps0uIaQWwSrcA7UluFqJm%2B1Jqd5xmvkKD8W%2FB3hVfedttPgn0%2BMS1I%2B4QxToUEs%2FGy8ISIvHk5MVjAgKW8cks3B%2FkjVlbsDvu6eSPolWDAIS0vkCLnzqPyre1HnwrJF4yYDm%2BPO6JeVhh98VRWUsGMqenqNocgKu3ar5IBEB%2BARYC7fvVbFGgVwqzvBm5BQLH1qsg3NkOXBN%2Fyo2z28ztFTyyEi7OYqgMr5yICcYKXWbgYlC9Fyd9UGIq4Krn1bhp%2B3rRN5I24ukKPabhXoM%2BrdEhdqIcB4TY%2FV7DS4vulrCCuwNDmTS1kpDtih7KHv0W%2FsLec8K3NrKRAW0XZLgqCdg%2BoGryY3ASgcSAeeZ0T2F2SSChPnNtC%2F945DTuFU1g2Vkrmli9uakzCal%2BhEvbKwimWQecRilmfzetBlq5eY0XisUuyAzcEqhu4QnmDPXwwNuWiodoXRzHgh7WRrQCxwsF5z0pc8pxEbXQwt%2BOTCGCI1OZ77j9eab0JOjtWubSmKGBqis7RHfIC9TV1srjbSADQksaRkLdzwrhde%2BipEcZuK2qxtoblj98msH%2FVpkGejFeSCmSU3sLuEdwNZbiKoJqV%2F6T5Rem7B1krDqRanTf81FNeR59v%2FiGj603kHdPjTlynEYMIDQsr8GOqUBf5AvHtiawKnchlSWeHq4nGgS3BhqDkbxarsZr3tWTRHxqlQeumqb8PieMAfNo%2Fp3tx51Ys4pevYhTzVvSX5v0VTPsNQ5Yr3pxNSsr9Pb4XoeqD4uGF%2F8FlqctgFhnFuBqMi8BJcBPJaHpxc%2BQiwcJdzZuAf0E9GL4TETrSvj22IH561IjdGU2HUdKVmUSZzvRtQW%2B3bSoe83%2BkRxgumkg7Jc0Gts&X-Amz-Signature=41b84d8c6bf5a1ff405e38198f41365c94a7cda488ce27734937bf6442d663d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

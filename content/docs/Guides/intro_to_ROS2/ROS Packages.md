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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNNZNYP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICSghESWytMt7CMqiWsBwN8WGLbcc%2FUU9pg7pqWHOGjDAiEA585JrSCbAYlQoMtvearl1pPWjUTUqwepKTgRNYpjLzsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIg2EmcFwNd%2BvI7RwyrcAy40X24m1q7LupW0FbZ3iL9lULtbJFNKkMXity9AuAI790ymtUH%2Bqd%2BI6dNdIG5FCYZcolCOJ8Gy67bVorh%2F9Ig%2FdYPM8H%2B9gH0%2FnxMgIZF9DXnZOym2Mvqmajc8ymeAIztqC9Jgo8mQPeF8CsHvieKk0VygKHsYlBoF2KRDkYhEi5QmoWP1481GHPKfbm0wgejSIUsuzFQ3UQXz%2Bg%2F9k1Sz4oAg3jBSfMps0rmXiOjxHB7gXrYBT4CmtuA66y5jL9%2B0BAC%2F%2BfCsA3MVFcZTAZxFY8PvldoOJs9vq5aF0VrB4yBapGAbPLfLhn7P7UEF58oDcGOxR4pyIQ%2Fccj7TaYCevtU0PvGMrEmW342Hgb0oK%2FKhP9OXKXG9n2dZmLHg2mWUalScWzD8Pev6uOjm0lMwUPFVwgDXCEqxSoq2b1%2BZJGxPLRpXaR8i2pMEEkO1oQ2YThHUit938%2FifKoMNs0eMdyXsx1IZIi1oXkakuySqJ40o%2FoDfbEjf%2B8GBTZWzx5l92Y%2BHCuXu3u64uZcIIo01gqlvbVC0TqAfugNeCTmchewsGcCgVypVyXv6rzT7m3aq82Mg5S9%2F%2BvYyUwPpCiGCi8QYvxjoaKZvh4ylqG%2FRLnSgQWVvdFvs3l4uMKqC%2Bb0GOqUBjZ4Zp2mQ1fC%2Ffg2W4s%2Bd%2BKcbenOmhcSyRVrYqZyBhruKgEcGn6uo6n9ZGjZyr0Eadx4fczry2m28EeRMYJXSDEpqxmq24nBEHYahJGOv5v%2FdZPJyflsABNftr0wre%2FDNCyYxF4ahmn%2BtaxSTSm19Ce89yv8kj%2FS1AXoTG%2FKufto2rWj2lsZxJ5i4COStpGIx53ucKe%2BxR%2FMuOE3PcvPV3BkVFcHc&X-Amz-Signature=1b4e053d65779f38021532deb51effc4035521dd77660fcbc8c903d61c5b667e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNNZNYP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICSghESWytMt7CMqiWsBwN8WGLbcc%2FUU9pg7pqWHOGjDAiEA585JrSCbAYlQoMtvearl1pPWjUTUqwepKTgRNYpjLzsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIg2EmcFwNd%2BvI7RwyrcAy40X24m1q7LupW0FbZ3iL9lULtbJFNKkMXity9AuAI790ymtUH%2Bqd%2BI6dNdIG5FCYZcolCOJ8Gy67bVorh%2F9Ig%2FdYPM8H%2B9gH0%2FnxMgIZF9DXnZOym2Mvqmajc8ymeAIztqC9Jgo8mQPeF8CsHvieKk0VygKHsYlBoF2KRDkYhEi5QmoWP1481GHPKfbm0wgejSIUsuzFQ3UQXz%2Bg%2F9k1Sz4oAg3jBSfMps0rmXiOjxHB7gXrYBT4CmtuA66y5jL9%2B0BAC%2F%2BfCsA3MVFcZTAZxFY8PvldoOJs9vq5aF0VrB4yBapGAbPLfLhn7P7UEF58oDcGOxR4pyIQ%2Fccj7TaYCevtU0PvGMrEmW342Hgb0oK%2FKhP9OXKXG9n2dZmLHg2mWUalScWzD8Pev6uOjm0lMwUPFVwgDXCEqxSoq2b1%2BZJGxPLRpXaR8i2pMEEkO1oQ2YThHUit938%2FifKoMNs0eMdyXsx1IZIi1oXkakuySqJ40o%2FoDfbEjf%2B8GBTZWzx5l92Y%2BHCuXu3u64uZcIIo01gqlvbVC0TqAfugNeCTmchewsGcCgVypVyXv6rzT7m3aq82Mg5S9%2F%2BvYyUwPpCiGCi8QYvxjoaKZvh4ylqG%2FRLnSgQWVvdFvs3l4uMKqC%2Bb0GOqUBjZ4Zp2mQ1fC%2Ffg2W4s%2Bd%2BKcbenOmhcSyRVrYqZyBhruKgEcGn6uo6n9ZGjZyr0Eadx4fczry2m28EeRMYJXSDEpqxmq24nBEHYahJGOv5v%2FdZPJyflsABNftr0wre%2FDNCyYxF4ahmn%2BtaxSTSm19Ce89yv8kj%2FS1AXoTG%2FKufto2rWj2lsZxJ5i4COStpGIx53ucKe%2BxR%2FMuOE3PcvPV3BkVFcHc&X-Amz-Signature=09495dea69c671d1eedb53c6d59575e7b9aca148861acf3919c28ccd924617fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNNZNYP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICSghESWytMt7CMqiWsBwN8WGLbcc%2FUU9pg7pqWHOGjDAiEA585JrSCbAYlQoMtvearl1pPWjUTUqwepKTgRNYpjLzsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIg2EmcFwNd%2BvI7RwyrcAy40X24m1q7LupW0FbZ3iL9lULtbJFNKkMXity9AuAI790ymtUH%2Bqd%2BI6dNdIG5FCYZcolCOJ8Gy67bVorh%2F9Ig%2FdYPM8H%2B9gH0%2FnxMgIZF9DXnZOym2Mvqmajc8ymeAIztqC9Jgo8mQPeF8CsHvieKk0VygKHsYlBoF2KRDkYhEi5QmoWP1481GHPKfbm0wgejSIUsuzFQ3UQXz%2Bg%2F9k1Sz4oAg3jBSfMps0rmXiOjxHB7gXrYBT4CmtuA66y5jL9%2B0BAC%2F%2BfCsA3MVFcZTAZxFY8PvldoOJs9vq5aF0VrB4yBapGAbPLfLhn7P7UEF58oDcGOxR4pyIQ%2Fccj7TaYCevtU0PvGMrEmW342Hgb0oK%2FKhP9OXKXG9n2dZmLHg2mWUalScWzD8Pev6uOjm0lMwUPFVwgDXCEqxSoq2b1%2BZJGxPLRpXaR8i2pMEEkO1oQ2YThHUit938%2FifKoMNs0eMdyXsx1IZIi1oXkakuySqJ40o%2FoDfbEjf%2B8GBTZWzx5l92Y%2BHCuXu3u64uZcIIo01gqlvbVC0TqAfugNeCTmchewsGcCgVypVyXv6rzT7m3aq82Mg5S9%2F%2BvYyUwPpCiGCi8QYvxjoaKZvh4ylqG%2FRLnSgQWVvdFvs3l4uMKqC%2Bb0GOqUBjZ4Zp2mQ1fC%2Ffg2W4s%2Bd%2BKcbenOmhcSyRVrYqZyBhruKgEcGn6uo6n9ZGjZyr0Eadx4fczry2m28EeRMYJXSDEpqxmq24nBEHYahJGOv5v%2FdZPJyflsABNftr0wre%2FDNCyYxF4ahmn%2BtaxSTSm19Ce89yv8kj%2FS1AXoTG%2FKufto2rWj2lsZxJ5i4COStpGIx53ucKe%2BxR%2FMuOE3PcvPV3BkVFcHc&X-Amz-Signature=f4d8ab3228224b506ca39219ea952b4de157b9f948a20cd38d5ab3e51032c8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNNZNYP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICSghESWytMt7CMqiWsBwN8WGLbcc%2FUU9pg7pqWHOGjDAiEA585JrSCbAYlQoMtvearl1pPWjUTUqwepKTgRNYpjLzsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIg2EmcFwNd%2BvI7RwyrcAy40X24m1q7LupW0FbZ3iL9lULtbJFNKkMXity9AuAI790ymtUH%2Bqd%2BI6dNdIG5FCYZcolCOJ8Gy67bVorh%2F9Ig%2FdYPM8H%2B9gH0%2FnxMgIZF9DXnZOym2Mvqmajc8ymeAIztqC9Jgo8mQPeF8CsHvieKk0VygKHsYlBoF2KRDkYhEi5QmoWP1481GHPKfbm0wgejSIUsuzFQ3UQXz%2Bg%2F9k1Sz4oAg3jBSfMps0rmXiOjxHB7gXrYBT4CmtuA66y5jL9%2B0BAC%2F%2BfCsA3MVFcZTAZxFY8PvldoOJs9vq5aF0VrB4yBapGAbPLfLhn7P7UEF58oDcGOxR4pyIQ%2Fccj7TaYCevtU0PvGMrEmW342Hgb0oK%2FKhP9OXKXG9n2dZmLHg2mWUalScWzD8Pev6uOjm0lMwUPFVwgDXCEqxSoq2b1%2BZJGxPLRpXaR8i2pMEEkO1oQ2YThHUit938%2FifKoMNs0eMdyXsx1IZIi1oXkakuySqJ40o%2FoDfbEjf%2B8GBTZWzx5l92Y%2BHCuXu3u64uZcIIo01gqlvbVC0TqAfugNeCTmchewsGcCgVypVyXv6rzT7m3aq82Mg5S9%2F%2BvYyUwPpCiGCi8QYvxjoaKZvh4ylqG%2FRLnSgQWVvdFvs3l4uMKqC%2Bb0GOqUBjZ4Zp2mQ1fC%2Ffg2W4s%2Bd%2BKcbenOmhcSyRVrYqZyBhruKgEcGn6uo6n9ZGjZyr0Eadx4fczry2m28EeRMYJXSDEpqxmq24nBEHYahJGOv5v%2FdZPJyflsABNftr0wre%2FDNCyYxF4ahmn%2BtaxSTSm19Ce89yv8kj%2FS1AXoTG%2FKufto2rWj2lsZxJ5i4COStpGIx53ucKe%2BxR%2FMuOE3PcvPV3BkVFcHc&X-Amz-Signature=912c94d9c3715af02a38e6ba5ce7875d48b03732baf718d41ad5ee915aec3815&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNNZNYP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICSghESWytMt7CMqiWsBwN8WGLbcc%2FUU9pg7pqWHOGjDAiEA585JrSCbAYlQoMtvearl1pPWjUTUqwepKTgRNYpjLzsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIg2EmcFwNd%2BvI7RwyrcAy40X24m1q7LupW0FbZ3iL9lULtbJFNKkMXity9AuAI790ymtUH%2Bqd%2BI6dNdIG5FCYZcolCOJ8Gy67bVorh%2F9Ig%2FdYPM8H%2B9gH0%2FnxMgIZF9DXnZOym2Mvqmajc8ymeAIztqC9Jgo8mQPeF8CsHvieKk0VygKHsYlBoF2KRDkYhEi5QmoWP1481GHPKfbm0wgejSIUsuzFQ3UQXz%2Bg%2F9k1Sz4oAg3jBSfMps0rmXiOjxHB7gXrYBT4CmtuA66y5jL9%2B0BAC%2F%2BfCsA3MVFcZTAZxFY8PvldoOJs9vq5aF0VrB4yBapGAbPLfLhn7P7UEF58oDcGOxR4pyIQ%2Fccj7TaYCevtU0PvGMrEmW342Hgb0oK%2FKhP9OXKXG9n2dZmLHg2mWUalScWzD8Pev6uOjm0lMwUPFVwgDXCEqxSoq2b1%2BZJGxPLRpXaR8i2pMEEkO1oQ2YThHUit938%2FifKoMNs0eMdyXsx1IZIi1oXkakuySqJ40o%2FoDfbEjf%2B8GBTZWzx5l92Y%2BHCuXu3u64uZcIIo01gqlvbVC0TqAfugNeCTmchewsGcCgVypVyXv6rzT7m3aq82Mg5S9%2F%2BvYyUwPpCiGCi8QYvxjoaKZvh4ylqG%2FRLnSgQWVvdFvs3l4uMKqC%2Bb0GOqUBjZ4Zp2mQ1fC%2Ffg2W4s%2Bd%2BKcbenOmhcSyRVrYqZyBhruKgEcGn6uo6n9ZGjZyr0Eadx4fczry2m28EeRMYJXSDEpqxmq24nBEHYahJGOv5v%2FdZPJyflsABNftr0wre%2FDNCyYxF4ahmn%2BtaxSTSm19Ce89yv8kj%2FS1AXoTG%2FKufto2rWj2lsZxJ5i4COStpGIx53ucKe%2BxR%2FMuOE3PcvPV3BkVFcHc&X-Amz-Signature=710c0f7c916acf5ec094ac0daa63b3943100564796ce622b2ca1721689f63895&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNNZNYP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICSghESWytMt7CMqiWsBwN8WGLbcc%2FUU9pg7pqWHOGjDAiEA585JrSCbAYlQoMtvearl1pPWjUTUqwepKTgRNYpjLzsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIg2EmcFwNd%2BvI7RwyrcAy40X24m1q7LupW0FbZ3iL9lULtbJFNKkMXity9AuAI790ymtUH%2Bqd%2BI6dNdIG5FCYZcolCOJ8Gy67bVorh%2F9Ig%2FdYPM8H%2B9gH0%2FnxMgIZF9DXnZOym2Mvqmajc8ymeAIztqC9Jgo8mQPeF8CsHvieKk0VygKHsYlBoF2KRDkYhEi5QmoWP1481GHPKfbm0wgejSIUsuzFQ3UQXz%2Bg%2F9k1Sz4oAg3jBSfMps0rmXiOjxHB7gXrYBT4CmtuA66y5jL9%2B0BAC%2F%2BfCsA3MVFcZTAZxFY8PvldoOJs9vq5aF0VrB4yBapGAbPLfLhn7P7UEF58oDcGOxR4pyIQ%2Fccj7TaYCevtU0PvGMrEmW342Hgb0oK%2FKhP9OXKXG9n2dZmLHg2mWUalScWzD8Pev6uOjm0lMwUPFVwgDXCEqxSoq2b1%2BZJGxPLRpXaR8i2pMEEkO1oQ2YThHUit938%2FifKoMNs0eMdyXsx1IZIi1oXkakuySqJ40o%2FoDfbEjf%2B8GBTZWzx5l92Y%2BHCuXu3u64uZcIIo01gqlvbVC0TqAfugNeCTmchewsGcCgVypVyXv6rzT7m3aq82Mg5S9%2F%2BvYyUwPpCiGCi8QYvxjoaKZvh4ylqG%2FRLnSgQWVvdFvs3l4uMKqC%2Bb0GOqUBjZ4Zp2mQ1fC%2Ffg2W4s%2Bd%2BKcbenOmhcSyRVrYqZyBhruKgEcGn6uo6n9ZGjZyr0Eadx4fczry2m28EeRMYJXSDEpqxmq24nBEHYahJGOv5v%2FdZPJyflsABNftr0wre%2FDNCyYxF4ahmn%2BtaxSTSm19Ce89yv8kj%2FS1AXoTG%2FKufto2rWj2lsZxJ5i4COStpGIx53ucKe%2BxR%2FMuOE3PcvPV3BkVFcHc&X-Amz-Signature=f01e67d193986d8ceb8cef82bfa19bc41179e5a4491a8320b5dfa92fd55e71f0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNNZNYP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICSghESWytMt7CMqiWsBwN8WGLbcc%2FUU9pg7pqWHOGjDAiEA585JrSCbAYlQoMtvearl1pPWjUTUqwepKTgRNYpjLzsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIg2EmcFwNd%2BvI7RwyrcAy40X24m1q7LupW0FbZ3iL9lULtbJFNKkMXity9AuAI790ymtUH%2Bqd%2BI6dNdIG5FCYZcolCOJ8Gy67bVorh%2F9Ig%2FdYPM8H%2B9gH0%2FnxMgIZF9DXnZOym2Mvqmajc8ymeAIztqC9Jgo8mQPeF8CsHvieKk0VygKHsYlBoF2KRDkYhEi5QmoWP1481GHPKfbm0wgejSIUsuzFQ3UQXz%2Bg%2F9k1Sz4oAg3jBSfMps0rmXiOjxHB7gXrYBT4CmtuA66y5jL9%2B0BAC%2F%2BfCsA3MVFcZTAZxFY8PvldoOJs9vq5aF0VrB4yBapGAbPLfLhn7P7UEF58oDcGOxR4pyIQ%2Fccj7TaYCevtU0PvGMrEmW342Hgb0oK%2FKhP9OXKXG9n2dZmLHg2mWUalScWzD8Pev6uOjm0lMwUPFVwgDXCEqxSoq2b1%2BZJGxPLRpXaR8i2pMEEkO1oQ2YThHUit938%2FifKoMNs0eMdyXsx1IZIi1oXkakuySqJ40o%2FoDfbEjf%2B8GBTZWzx5l92Y%2BHCuXu3u64uZcIIo01gqlvbVC0TqAfugNeCTmchewsGcCgVypVyXv6rzT7m3aq82Mg5S9%2F%2BvYyUwPpCiGCi8QYvxjoaKZvh4ylqG%2FRLnSgQWVvdFvs3l4uMKqC%2Bb0GOqUBjZ4Zp2mQ1fC%2Ffg2W4s%2Bd%2BKcbenOmhcSyRVrYqZyBhruKgEcGn6uo6n9ZGjZyr0Eadx4fczry2m28EeRMYJXSDEpqxmq24nBEHYahJGOv5v%2FdZPJyflsABNftr0wre%2FDNCyYxF4ahmn%2BtaxSTSm19Ce89yv8kj%2FS1AXoTG%2FKufto2rWj2lsZxJ5i4COStpGIx53ucKe%2BxR%2FMuOE3PcvPV3BkVFcHc&X-Amz-Signature=ab9aeb80c1720173ba122f692f9b900cc87527d63ea4a1fd69d0a127b4f53962&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

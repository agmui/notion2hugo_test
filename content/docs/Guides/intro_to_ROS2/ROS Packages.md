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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHPH5OF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWbWQlmv4p3Ru7UMs3XGRBJDkkqXk5qzA03PTyJsBhgIgdhrl6lDrViL1qUOCBakmKkIAmhVIf8w4WGUdcshV0nEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN%2FBGBNBrEq5GtzSsCrcA66sNTslGQmjN7z3%2FWjyN%2Fhh9S%2FZw8qEFX0BKr806S%2BOssEm%2F4ayZqVgomOnYiXZz2maEmR7BjRGdEFzffdDz%2B%2FtRT0JaaAwX3vmsJvzh%2F2sKPv6U%2FsE8rUMuRKSJeVHtqjYJ3ROisM%2FgkkyzPMTtvlIsJ6fY3oEtKXG2MC72bn19AARNVqC9VhL8g2Q0LxuGsEidcyvunrI8nK%2FnG8YO3S5ezh09S%2FWSFwKkcAZIB6NrEavxf8vwwb0F3dcAJuBzlvWsYH7UkXVIdbijlUjFhKcB4ikOYW%2FBvasOY9n0NEcYK3C9h%2BI6cXzK1ARHmgHwGqC23nuSu9WLpYaT584KK8GmCX5m5r7%2BOHGmM%2B0kiQN%2F%2BiCCf2F9i16l33sNq%2BemS%2FRjVsZYcdI%2FSSDbF8z7mBm485TiHdgbvs05RDZezr3sutYqkPiwwyh0kCNSmTCDbcaIQfWLyBWw%2FBHN45Ee3%2BZTfWW6FpmqkMc%2FsIrN3Kn6mlQsJSZfeGByJUfUIEDPBGqnonsbfgtUEc%2FZxXmyGMOT1TWb5AjbUpgfGRkIFmHEpJgjSDIqJ9wHnRL3JxvQRqIY1VM5R3i1n9JycDEeQ7v6aozqYWl0n2K9zvDuSXxe6Fk8%2BbzZyipS1hOMMuey78GOqUBN%2B6XEICR9rs2oYBCvPJ0i4baAFRZ1iNdqdwKTQtECkDVZ91M9MSjq73oziN9T4CgRi6%2BH1c1k064FC4BalsIotS2hZsQCu3a%2BTafqaHr%2B%2B2YQu3ZwWzP9DangpJbPtfuw3TwDABvHIxE4BFkRkP73fKDohUhllNpIfw3y%2Bftdtb3NGVvw0cVCIQldlz6LVoDAgcQbL9U6nmUe9RsxnGQckgWGk13&X-Amz-Signature=a58dc246dd53bab4262aefd7c141a69a0d81d0e4a3e0ad56667a3db44b08937c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHPH5OF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWbWQlmv4p3Ru7UMs3XGRBJDkkqXk5qzA03PTyJsBhgIgdhrl6lDrViL1qUOCBakmKkIAmhVIf8w4WGUdcshV0nEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN%2FBGBNBrEq5GtzSsCrcA66sNTslGQmjN7z3%2FWjyN%2Fhh9S%2FZw8qEFX0BKr806S%2BOssEm%2F4ayZqVgomOnYiXZz2maEmR7BjRGdEFzffdDz%2B%2FtRT0JaaAwX3vmsJvzh%2F2sKPv6U%2FsE8rUMuRKSJeVHtqjYJ3ROisM%2FgkkyzPMTtvlIsJ6fY3oEtKXG2MC72bn19AARNVqC9VhL8g2Q0LxuGsEidcyvunrI8nK%2FnG8YO3S5ezh09S%2FWSFwKkcAZIB6NrEavxf8vwwb0F3dcAJuBzlvWsYH7UkXVIdbijlUjFhKcB4ikOYW%2FBvasOY9n0NEcYK3C9h%2BI6cXzK1ARHmgHwGqC23nuSu9WLpYaT584KK8GmCX5m5r7%2BOHGmM%2B0kiQN%2F%2BiCCf2F9i16l33sNq%2BemS%2FRjVsZYcdI%2FSSDbF8z7mBm485TiHdgbvs05RDZezr3sutYqkPiwwyh0kCNSmTCDbcaIQfWLyBWw%2FBHN45Ee3%2BZTfWW6FpmqkMc%2FsIrN3Kn6mlQsJSZfeGByJUfUIEDPBGqnonsbfgtUEc%2FZxXmyGMOT1TWb5AjbUpgfGRkIFmHEpJgjSDIqJ9wHnRL3JxvQRqIY1VM5R3i1n9JycDEeQ7v6aozqYWl0n2K9zvDuSXxe6Fk8%2BbzZyipS1hOMMuey78GOqUBN%2B6XEICR9rs2oYBCvPJ0i4baAFRZ1iNdqdwKTQtECkDVZ91M9MSjq73oziN9T4CgRi6%2BH1c1k064FC4BalsIotS2hZsQCu3a%2BTafqaHr%2B%2B2YQu3ZwWzP9DangpJbPtfuw3TwDABvHIxE4BFkRkP73fKDohUhllNpIfw3y%2Bftdtb3NGVvw0cVCIQldlz6LVoDAgcQbL9U6nmUe9RsxnGQckgWGk13&X-Amz-Signature=b4f57e7921fe5cb0bfe686ed749db3226e1454c9112be6eabc8f221fa19e1d96&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHPH5OF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWbWQlmv4p3Ru7UMs3XGRBJDkkqXk5qzA03PTyJsBhgIgdhrl6lDrViL1qUOCBakmKkIAmhVIf8w4WGUdcshV0nEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN%2FBGBNBrEq5GtzSsCrcA66sNTslGQmjN7z3%2FWjyN%2Fhh9S%2FZw8qEFX0BKr806S%2BOssEm%2F4ayZqVgomOnYiXZz2maEmR7BjRGdEFzffdDz%2B%2FtRT0JaaAwX3vmsJvzh%2F2sKPv6U%2FsE8rUMuRKSJeVHtqjYJ3ROisM%2FgkkyzPMTtvlIsJ6fY3oEtKXG2MC72bn19AARNVqC9VhL8g2Q0LxuGsEidcyvunrI8nK%2FnG8YO3S5ezh09S%2FWSFwKkcAZIB6NrEavxf8vwwb0F3dcAJuBzlvWsYH7UkXVIdbijlUjFhKcB4ikOYW%2FBvasOY9n0NEcYK3C9h%2BI6cXzK1ARHmgHwGqC23nuSu9WLpYaT584KK8GmCX5m5r7%2BOHGmM%2B0kiQN%2F%2BiCCf2F9i16l33sNq%2BemS%2FRjVsZYcdI%2FSSDbF8z7mBm485TiHdgbvs05RDZezr3sutYqkPiwwyh0kCNSmTCDbcaIQfWLyBWw%2FBHN45Ee3%2BZTfWW6FpmqkMc%2FsIrN3Kn6mlQsJSZfeGByJUfUIEDPBGqnonsbfgtUEc%2FZxXmyGMOT1TWb5AjbUpgfGRkIFmHEpJgjSDIqJ9wHnRL3JxvQRqIY1VM5R3i1n9JycDEeQ7v6aozqYWl0n2K9zvDuSXxe6Fk8%2BbzZyipS1hOMMuey78GOqUBN%2B6XEICR9rs2oYBCvPJ0i4baAFRZ1iNdqdwKTQtECkDVZ91M9MSjq73oziN9T4CgRi6%2BH1c1k064FC4BalsIotS2hZsQCu3a%2BTafqaHr%2B%2B2YQu3ZwWzP9DangpJbPtfuw3TwDABvHIxE4BFkRkP73fKDohUhllNpIfw3y%2Bftdtb3NGVvw0cVCIQldlz6LVoDAgcQbL9U6nmUe9RsxnGQckgWGk13&X-Amz-Signature=ab89dfbbc8c17de52afd973f06436cf1de519eb16e283450b43b9d07ecc973ed&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHPH5OF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWbWQlmv4p3Ru7UMs3XGRBJDkkqXk5qzA03PTyJsBhgIgdhrl6lDrViL1qUOCBakmKkIAmhVIf8w4WGUdcshV0nEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN%2FBGBNBrEq5GtzSsCrcA66sNTslGQmjN7z3%2FWjyN%2Fhh9S%2FZw8qEFX0BKr806S%2BOssEm%2F4ayZqVgomOnYiXZz2maEmR7BjRGdEFzffdDz%2B%2FtRT0JaaAwX3vmsJvzh%2F2sKPv6U%2FsE8rUMuRKSJeVHtqjYJ3ROisM%2FgkkyzPMTtvlIsJ6fY3oEtKXG2MC72bn19AARNVqC9VhL8g2Q0LxuGsEidcyvunrI8nK%2FnG8YO3S5ezh09S%2FWSFwKkcAZIB6NrEavxf8vwwb0F3dcAJuBzlvWsYH7UkXVIdbijlUjFhKcB4ikOYW%2FBvasOY9n0NEcYK3C9h%2BI6cXzK1ARHmgHwGqC23nuSu9WLpYaT584KK8GmCX5m5r7%2BOHGmM%2B0kiQN%2F%2BiCCf2F9i16l33sNq%2BemS%2FRjVsZYcdI%2FSSDbF8z7mBm485TiHdgbvs05RDZezr3sutYqkPiwwyh0kCNSmTCDbcaIQfWLyBWw%2FBHN45Ee3%2BZTfWW6FpmqkMc%2FsIrN3Kn6mlQsJSZfeGByJUfUIEDPBGqnonsbfgtUEc%2FZxXmyGMOT1TWb5AjbUpgfGRkIFmHEpJgjSDIqJ9wHnRL3JxvQRqIY1VM5R3i1n9JycDEeQ7v6aozqYWl0n2K9zvDuSXxe6Fk8%2BbzZyipS1hOMMuey78GOqUBN%2B6XEICR9rs2oYBCvPJ0i4baAFRZ1iNdqdwKTQtECkDVZ91M9MSjq73oziN9T4CgRi6%2BH1c1k064FC4BalsIotS2hZsQCu3a%2BTafqaHr%2B%2B2YQu3ZwWzP9DangpJbPtfuw3TwDABvHIxE4BFkRkP73fKDohUhllNpIfw3y%2Bftdtb3NGVvw0cVCIQldlz6LVoDAgcQbL9U6nmUe9RsxnGQckgWGk13&X-Amz-Signature=031634b450d07ed84923dc49e5009d2efbed8b46b7020b297186e74446aefca3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHPH5OF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWbWQlmv4p3Ru7UMs3XGRBJDkkqXk5qzA03PTyJsBhgIgdhrl6lDrViL1qUOCBakmKkIAmhVIf8w4WGUdcshV0nEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN%2FBGBNBrEq5GtzSsCrcA66sNTslGQmjN7z3%2FWjyN%2Fhh9S%2FZw8qEFX0BKr806S%2BOssEm%2F4ayZqVgomOnYiXZz2maEmR7BjRGdEFzffdDz%2B%2FtRT0JaaAwX3vmsJvzh%2F2sKPv6U%2FsE8rUMuRKSJeVHtqjYJ3ROisM%2FgkkyzPMTtvlIsJ6fY3oEtKXG2MC72bn19AARNVqC9VhL8g2Q0LxuGsEidcyvunrI8nK%2FnG8YO3S5ezh09S%2FWSFwKkcAZIB6NrEavxf8vwwb0F3dcAJuBzlvWsYH7UkXVIdbijlUjFhKcB4ikOYW%2FBvasOY9n0NEcYK3C9h%2BI6cXzK1ARHmgHwGqC23nuSu9WLpYaT584KK8GmCX5m5r7%2BOHGmM%2B0kiQN%2F%2BiCCf2F9i16l33sNq%2BemS%2FRjVsZYcdI%2FSSDbF8z7mBm485TiHdgbvs05RDZezr3sutYqkPiwwyh0kCNSmTCDbcaIQfWLyBWw%2FBHN45Ee3%2BZTfWW6FpmqkMc%2FsIrN3Kn6mlQsJSZfeGByJUfUIEDPBGqnonsbfgtUEc%2FZxXmyGMOT1TWb5AjbUpgfGRkIFmHEpJgjSDIqJ9wHnRL3JxvQRqIY1VM5R3i1n9JycDEeQ7v6aozqYWl0n2K9zvDuSXxe6Fk8%2BbzZyipS1hOMMuey78GOqUBN%2B6XEICR9rs2oYBCvPJ0i4baAFRZ1iNdqdwKTQtECkDVZ91M9MSjq73oziN9T4CgRi6%2BH1c1k064FC4BalsIotS2hZsQCu3a%2BTafqaHr%2B%2B2YQu3ZwWzP9DangpJbPtfuw3TwDABvHIxE4BFkRkP73fKDohUhllNpIfw3y%2Bftdtb3NGVvw0cVCIQldlz6LVoDAgcQbL9U6nmUe9RsxnGQckgWGk13&X-Amz-Signature=a31ef65acabe7f985320634d759980e0f8a1af956cb22745cb42c3628eace2f2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHPH5OF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWbWQlmv4p3Ru7UMs3XGRBJDkkqXk5qzA03PTyJsBhgIgdhrl6lDrViL1qUOCBakmKkIAmhVIf8w4WGUdcshV0nEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN%2FBGBNBrEq5GtzSsCrcA66sNTslGQmjN7z3%2FWjyN%2Fhh9S%2FZw8qEFX0BKr806S%2BOssEm%2F4ayZqVgomOnYiXZz2maEmR7BjRGdEFzffdDz%2B%2FtRT0JaaAwX3vmsJvzh%2F2sKPv6U%2FsE8rUMuRKSJeVHtqjYJ3ROisM%2FgkkyzPMTtvlIsJ6fY3oEtKXG2MC72bn19AARNVqC9VhL8g2Q0LxuGsEidcyvunrI8nK%2FnG8YO3S5ezh09S%2FWSFwKkcAZIB6NrEavxf8vwwb0F3dcAJuBzlvWsYH7UkXVIdbijlUjFhKcB4ikOYW%2FBvasOY9n0NEcYK3C9h%2BI6cXzK1ARHmgHwGqC23nuSu9WLpYaT584KK8GmCX5m5r7%2BOHGmM%2B0kiQN%2F%2BiCCf2F9i16l33sNq%2BemS%2FRjVsZYcdI%2FSSDbF8z7mBm485TiHdgbvs05RDZezr3sutYqkPiwwyh0kCNSmTCDbcaIQfWLyBWw%2FBHN45Ee3%2BZTfWW6FpmqkMc%2FsIrN3Kn6mlQsJSZfeGByJUfUIEDPBGqnonsbfgtUEc%2FZxXmyGMOT1TWb5AjbUpgfGRkIFmHEpJgjSDIqJ9wHnRL3JxvQRqIY1VM5R3i1n9JycDEeQ7v6aozqYWl0n2K9zvDuSXxe6Fk8%2BbzZyipS1hOMMuey78GOqUBN%2B6XEICR9rs2oYBCvPJ0i4baAFRZ1iNdqdwKTQtECkDVZ91M9MSjq73oziN9T4CgRi6%2BH1c1k064FC4BalsIotS2hZsQCu3a%2BTafqaHr%2B%2B2YQu3ZwWzP9DangpJbPtfuw3TwDABvHIxE4BFkRkP73fKDohUhllNpIfw3y%2Bftdtb3NGVvw0cVCIQldlz6LVoDAgcQbL9U6nmUe9RsxnGQckgWGk13&X-Amz-Signature=213d0d412088eac6d34443a90467ee0201c7bd72bf9da10ac19c320e1c7c0fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHPH5OF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWbWQlmv4p3Ru7UMs3XGRBJDkkqXk5qzA03PTyJsBhgIgdhrl6lDrViL1qUOCBakmKkIAmhVIf8w4WGUdcshV0nEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN%2FBGBNBrEq5GtzSsCrcA66sNTslGQmjN7z3%2FWjyN%2Fhh9S%2FZw8qEFX0BKr806S%2BOssEm%2F4ayZqVgomOnYiXZz2maEmR7BjRGdEFzffdDz%2B%2FtRT0JaaAwX3vmsJvzh%2F2sKPv6U%2FsE8rUMuRKSJeVHtqjYJ3ROisM%2FgkkyzPMTtvlIsJ6fY3oEtKXG2MC72bn19AARNVqC9VhL8g2Q0LxuGsEidcyvunrI8nK%2FnG8YO3S5ezh09S%2FWSFwKkcAZIB6NrEavxf8vwwb0F3dcAJuBzlvWsYH7UkXVIdbijlUjFhKcB4ikOYW%2FBvasOY9n0NEcYK3C9h%2BI6cXzK1ARHmgHwGqC23nuSu9WLpYaT584KK8GmCX5m5r7%2BOHGmM%2B0kiQN%2F%2BiCCf2F9i16l33sNq%2BemS%2FRjVsZYcdI%2FSSDbF8z7mBm485TiHdgbvs05RDZezr3sutYqkPiwwyh0kCNSmTCDbcaIQfWLyBWw%2FBHN45Ee3%2BZTfWW6FpmqkMc%2FsIrN3Kn6mlQsJSZfeGByJUfUIEDPBGqnonsbfgtUEc%2FZxXmyGMOT1TWb5AjbUpgfGRkIFmHEpJgjSDIqJ9wHnRL3JxvQRqIY1VM5R3i1n9JycDEeQ7v6aozqYWl0n2K9zvDuSXxe6Fk8%2BbzZyipS1hOMMuey78GOqUBN%2B6XEICR9rs2oYBCvPJ0i4baAFRZ1iNdqdwKTQtECkDVZ91M9MSjq73oziN9T4CgRi6%2BH1c1k064FC4BalsIotS2hZsQCu3a%2BTafqaHr%2B%2B2YQu3ZwWzP9DangpJbPtfuw3TwDABvHIxE4BFkRkP73fKDohUhllNpIfw3y%2Bftdtb3NGVvw0cVCIQldlz6LVoDAgcQbL9U6nmUe9RsxnGQckgWGk13&X-Amz-Signature=d16374c2c15a701cfb6190beeda311284d53afbc240ad64d888d92de02513335&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

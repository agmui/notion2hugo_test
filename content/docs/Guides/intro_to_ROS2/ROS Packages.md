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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGEMSHZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDIxqp4Ti6wEPeYa2sfOlKbWcl17AdNhwB5cAQrxIgRagIgHbkudmJ455eK2HAAjMpuMbcadUGdx5Vk5cn%2BmxZBWEUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxDGlNBETNHtGROiircA10qzRqnJ3jSDxieyT6HwEea39xL6P4mKWgSMi57VuTU7knRqbg01RJ%2F7GJp7VbiPf7AZoJc9JsLpNwBMW%2F0E6zvPnrKLXiWmKvwfFyd8UCEcW3V68rA9XK4fgkv%2FdiJrQGdirZsgSi0DbgL%2BA0y3qY%2BGJ1V0w9NfkET%2BcpqjFBELtXJCSPvXFH2NwjrB8jsSgC4HQb8P1j0679hQWczJUlg3RC5rk%2F%2BJ%2BC7oNwybg2niREN%2F2o1yJcs80Yt207r1Vw1Foj9vkIfYGzC87Qz4ejqN4K5ev4WujNBiYOzrR32%2BoRQ1pqdO0rzbhiB7P5rsuumOTpJx7wmFRd7XXEkZ%2B3fYsk0yO2kDVFgLKeD7voCktPNvBVGVxY4PfQ0V8obuCmfoYJhvvXnyENL9VNesNHJS6Aj%2BbLQvYgbeOSbDqw30GkQD5nNmB57kQMOrhzDueH7WUB%2B6J22l%2ByQr%2FdUU26blSF%2FyY%2BHgFaKI6Hmwec%2FIW72rfJmT6Y6vWRImdW5Ei9cu%2BAB4DAc9IAZKgMCuY7SRCVZpgKq9RFxVtumVu5ChRmcFH2kmTaZEm4%2FAnLAQfLlHtWHILuquWJlyE0eZ7mSyllRwDrLZaSRzxtBBppfzUBTk61paCMzgv%2BwMMbmrr8GOqUBuwYwZH7yS%2FEA2FAAd%2FvoWeJNEoC4Tu8ZDrOC1AlMpDOql1kKR8mVFU3lVnTxoJ7qG51D2nPPvNkKAdbbiMYLxlS%2FLJHQyx6zONb42TiE6QbUfr5joFHaN4vQ0eZsTaVLgDi32wLC57XoF%2FpbqmGcqpqod%2FlnRPPJ4yFAA28uqZF1G73yrzTTBeCDBO3NEuCAiEMO8CS7xbD6eIIDaK3Txi3YmR08&X-Amz-Signature=142a0460cb6af039edb676c43985398406c597e86f3e865dee26d00304acc594&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGEMSHZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDIxqp4Ti6wEPeYa2sfOlKbWcl17AdNhwB5cAQrxIgRagIgHbkudmJ455eK2HAAjMpuMbcadUGdx5Vk5cn%2BmxZBWEUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxDGlNBETNHtGROiircA10qzRqnJ3jSDxieyT6HwEea39xL6P4mKWgSMi57VuTU7knRqbg01RJ%2F7GJp7VbiPf7AZoJc9JsLpNwBMW%2F0E6zvPnrKLXiWmKvwfFyd8UCEcW3V68rA9XK4fgkv%2FdiJrQGdirZsgSi0DbgL%2BA0y3qY%2BGJ1V0w9NfkET%2BcpqjFBELtXJCSPvXFH2NwjrB8jsSgC4HQb8P1j0679hQWczJUlg3RC5rk%2F%2BJ%2BC7oNwybg2niREN%2F2o1yJcs80Yt207r1Vw1Foj9vkIfYGzC87Qz4ejqN4K5ev4WujNBiYOzrR32%2BoRQ1pqdO0rzbhiB7P5rsuumOTpJx7wmFRd7XXEkZ%2B3fYsk0yO2kDVFgLKeD7voCktPNvBVGVxY4PfQ0V8obuCmfoYJhvvXnyENL9VNesNHJS6Aj%2BbLQvYgbeOSbDqw30GkQD5nNmB57kQMOrhzDueH7WUB%2B6J22l%2ByQr%2FdUU26blSF%2FyY%2BHgFaKI6Hmwec%2FIW72rfJmT6Y6vWRImdW5Ei9cu%2BAB4DAc9IAZKgMCuY7SRCVZpgKq9RFxVtumVu5ChRmcFH2kmTaZEm4%2FAnLAQfLlHtWHILuquWJlyE0eZ7mSyllRwDrLZaSRzxtBBppfzUBTk61paCMzgv%2BwMMbmrr8GOqUBuwYwZH7yS%2FEA2FAAd%2FvoWeJNEoC4Tu8ZDrOC1AlMpDOql1kKR8mVFU3lVnTxoJ7qG51D2nPPvNkKAdbbiMYLxlS%2FLJHQyx6zONb42TiE6QbUfr5joFHaN4vQ0eZsTaVLgDi32wLC57XoF%2FpbqmGcqpqod%2FlnRPPJ4yFAA28uqZF1G73yrzTTBeCDBO3NEuCAiEMO8CS7xbD6eIIDaK3Txi3YmR08&X-Amz-Signature=9d033ce4b2266d8d20de3487455aa049516b926b6a06b4915ee467cbd3ccb08d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGEMSHZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDIxqp4Ti6wEPeYa2sfOlKbWcl17AdNhwB5cAQrxIgRagIgHbkudmJ455eK2HAAjMpuMbcadUGdx5Vk5cn%2BmxZBWEUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxDGlNBETNHtGROiircA10qzRqnJ3jSDxieyT6HwEea39xL6P4mKWgSMi57VuTU7knRqbg01RJ%2F7GJp7VbiPf7AZoJc9JsLpNwBMW%2F0E6zvPnrKLXiWmKvwfFyd8UCEcW3V68rA9XK4fgkv%2FdiJrQGdirZsgSi0DbgL%2BA0y3qY%2BGJ1V0w9NfkET%2BcpqjFBELtXJCSPvXFH2NwjrB8jsSgC4HQb8P1j0679hQWczJUlg3RC5rk%2F%2BJ%2BC7oNwybg2niREN%2F2o1yJcs80Yt207r1Vw1Foj9vkIfYGzC87Qz4ejqN4K5ev4WujNBiYOzrR32%2BoRQ1pqdO0rzbhiB7P5rsuumOTpJx7wmFRd7XXEkZ%2B3fYsk0yO2kDVFgLKeD7voCktPNvBVGVxY4PfQ0V8obuCmfoYJhvvXnyENL9VNesNHJS6Aj%2BbLQvYgbeOSbDqw30GkQD5nNmB57kQMOrhzDueH7WUB%2B6J22l%2ByQr%2FdUU26blSF%2FyY%2BHgFaKI6Hmwec%2FIW72rfJmT6Y6vWRImdW5Ei9cu%2BAB4DAc9IAZKgMCuY7SRCVZpgKq9RFxVtumVu5ChRmcFH2kmTaZEm4%2FAnLAQfLlHtWHILuquWJlyE0eZ7mSyllRwDrLZaSRzxtBBppfzUBTk61paCMzgv%2BwMMbmrr8GOqUBuwYwZH7yS%2FEA2FAAd%2FvoWeJNEoC4Tu8ZDrOC1AlMpDOql1kKR8mVFU3lVnTxoJ7qG51D2nPPvNkKAdbbiMYLxlS%2FLJHQyx6zONb42TiE6QbUfr5joFHaN4vQ0eZsTaVLgDi32wLC57XoF%2FpbqmGcqpqod%2FlnRPPJ4yFAA28uqZF1G73yrzTTBeCDBO3NEuCAiEMO8CS7xbD6eIIDaK3Txi3YmR08&X-Amz-Signature=11a23abf64afe830e46595d9ec11cf406b6fc4f65fff0580437a6e0857149aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGEMSHZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDIxqp4Ti6wEPeYa2sfOlKbWcl17AdNhwB5cAQrxIgRagIgHbkudmJ455eK2HAAjMpuMbcadUGdx5Vk5cn%2BmxZBWEUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxDGlNBETNHtGROiircA10qzRqnJ3jSDxieyT6HwEea39xL6P4mKWgSMi57VuTU7knRqbg01RJ%2F7GJp7VbiPf7AZoJc9JsLpNwBMW%2F0E6zvPnrKLXiWmKvwfFyd8UCEcW3V68rA9XK4fgkv%2FdiJrQGdirZsgSi0DbgL%2BA0y3qY%2BGJ1V0w9NfkET%2BcpqjFBELtXJCSPvXFH2NwjrB8jsSgC4HQb8P1j0679hQWczJUlg3RC5rk%2F%2BJ%2BC7oNwybg2niREN%2F2o1yJcs80Yt207r1Vw1Foj9vkIfYGzC87Qz4ejqN4K5ev4WujNBiYOzrR32%2BoRQ1pqdO0rzbhiB7P5rsuumOTpJx7wmFRd7XXEkZ%2B3fYsk0yO2kDVFgLKeD7voCktPNvBVGVxY4PfQ0V8obuCmfoYJhvvXnyENL9VNesNHJS6Aj%2BbLQvYgbeOSbDqw30GkQD5nNmB57kQMOrhzDueH7WUB%2B6J22l%2ByQr%2FdUU26blSF%2FyY%2BHgFaKI6Hmwec%2FIW72rfJmT6Y6vWRImdW5Ei9cu%2BAB4DAc9IAZKgMCuY7SRCVZpgKq9RFxVtumVu5ChRmcFH2kmTaZEm4%2FAnLAQfLlHtWHILuquWJlyE0eZ7mSyllRwDrLZaSRzxtBBppfzUBTk61paCMzgv%2BwMMbmrr8GOqUBuwYwZH7yS%2FEA2FAAd%2FvoWeJNEoC4Tu8ZDrOC1AlMpDOql1kKR8mVFU3lVnTxoJ7qG51D2nPPvNkKAdbbiMYLxlS%2FLJHQyx6zONb42TiE6QbUfr5joFHaN4vQ0eZsTaVLgDi32wLC57XoF%2FpbqmGcqpqod%2FlnRPPJ4yFAA28uqZF1G73yrzTTBeCDBO3NEuCAiEMO8CS7xbD6eIIDaK3Txi3YmR08&X-Amz-Signature=9175a289a79d2b4d801b7505896293a2de436b0d575fd3b79c6f48518ee49bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGEMSHZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDIxqp4Ti6wEPeYa2sfOlKbWcl17AdNhwB5cAQrxIgRagIgHbkudmJ455eK2HAAjMpuMbcadUGdx5Vk5cn%2BmxZBWEUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxDGlNBETNHtGROiircA10qzRqnJ3jSDxieyT6HwEea39xL6P4mKWgSMi57VuTU7knRqbg01RJ%2F7GJp7VbiPf7AZoJc9JsLpNwBMW%2F0E6zvPnrKLXiWmKvwfFyd8UCEcW3V68rA9XK4fgkv%2FdiJrQGdirZsgSi0DbgL%2BA0y3qY%2BGJ1V0w9NfkET%2BcpqjFBELtXJCSPvXFH2NwjrB8jsSgC4HQb8P1j0679hQWczJUlg3RC5rk%2F%2BJ%2BC7oNwybg2niREN%2F2o1yJcs80Yt207r1Vw1Foj9vkIfYGzC87Qz4ejqN4K5ev4WujNBiYOzrR32%2BoRQ1pqdO0rzbhiB7P5rsuumOTpJx7wmFRd7XXEkZ%2B3fYsk0yO2kDVFgLKeD7voCktPNvBVGVxY4PfQ0V8obuCmfoYJhvvXnyENL9VNesNHJS6Aj%2BbLQvYgbeOSbDqw30GkQD5nNmB57kQMOrhzDueH7WUB%2B6J22l%2ByQr%2FdUU26blSF%2FyY%2BHgFaKI6Hmwec%2FIW72rfJmT6Y6vWRImdW5Ei9cu%2BAB4DAc9IAZKgMCuY7SRCVZpgKq9RFxVtumVu5ChRmcFH2kmTaZEm4%2FAnLAQfLlHtWHILuquWJlyE0eZ7mSyllRwDrLZaSRzxtBBppfzUBTk61paCMzgv%2BwMMbmrr8GOqUBuwYwZH7yS%2FEA2FAAd%2FvoWeJNEoC4Tu8ZDrOC1AlMpDOql1kKR8mVFU3lVnTxoJ7qG51D2nPPvNkKAdbbiMYLxlS%2FLJHQyx6zONb42TiE6QbUfr5joFHaN4vQ0eZsTaVLgDi32wLC57XoF%2FpbqmGcqpqod%2FlnRPPJ4yFAA28uqZF1G73yrzTTBeCDBO3NEuCAiEMO8CS7xbD6eIIDaK3Txi3YmR08&X-Amz-Signature=3a18910e29998396484fb2d9b228e569ec9fe330caa261f7fe4138d1a3e60725&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGEMSHZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDIxqp4Ti6wEPeYa2sfOlKbWcl17AdNhwB5cAQrxIgRagIgHbkudmJ455eK2HAAjMpuMbcadUGdx5Vk5cn%2BmxZBWEUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxDGlNBETNHtGROiircA10qzRqnJ3jSDxieyT6HwEea39xL6P4mKWgSMi57VuTU7knRqbg01RJ%2F7GJp7VbiPf7AZoJc9JsLpNwBMW%2F0E6zvPnrKLXiWmKvwfFyd8UCEcW3V68rA9XK4fgkv%2FdiJrQGdirZsgSi0DbgL%2BA0y3qY%2BGJ1V0w9NfkET%2BcpqjFBELtXJCSPvXFH2NwjrB8jsSgC4HQb8P1j0679hQWczJUlg3RC5rk%2F%2BJ%2BC7oNwybg2niREN%2F2o1yJcs80Yt207r1Vw1Foj9vkIfYGzC87Qz4ejqN4K5ev4WujNBiYOzrR32%2BoRQ1pqdO0rzbhiB7P5rsuumOTpJx7wmFRd7XXEkZ%2B3fYsk0yO2kDVFgLKeD7voCktPNvBVGVxY4PfQ0V8obuCmfoYJhvvXnyENL9VNesNHJS6Aj%2BbLQvYgbeOSbDqw30GkQD5nNmB57kQMOrhzDueH7WUB%2B6J22l%2ByQr%2FdUU26blSF%2FyY%2BHgFaKI6Hmwec%2FIW72rfJmT6Y6vWRImdW5Ei9cu%2BAB4DAc9IAZKgMCuY7SRCVZpgKq9RFxVtumVu5ChRmcFH2kmTaZEm4%2FAnLAQfLlHtWHILuquWJlyE0eZ7mSyllRwDrLZaSRzxtBBppfzUBTk61paCMzgv%2BwMMbmrr8GOqUBuwYwZH7yS%2FEA2FAAd%2FvoWeJNEoC4Tu8ZDrOC1AlMpDOql1kKR8mVFU3lVnTxoJ7qG51D2nPPvNkKAdbbiMYLxlS%2FLJHQyx6zONb42TiE6QbUfr5joFHaN4vQ0eZsTaVLgDi32wLC57XoF%2FpbqmGcqpqod%2FlnRPPJ4yFAA28uqZF1G73yrzTTBeCDBO3NEuCAiEMO8CS7xbD6eIIDaK3Txi3YmR08&X-Amz-Signature=fb4d03cfddb36967377a256a56a4299b38bd812620d86f3219fb63a7cc2d5f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGEMSHZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDIxqp4Ti6wEPeYa2sfOlKbWcl17AdNhwB5cAQrxIgRagIgHbkudmJ455eK2HAAjMpuMbcadUGdx5Vk5cn%2BmxZBWEUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxDGlNBETNHtGROiircA10qzRqnJ3jSDxieyT6HwEea39xL6P4mKWgSMi57VuTU7knRqbg01RJ%2F7GJp7VbiPf7AZoJc9JsLpNwBMW%2F0E6zvPnrKLXiWmKvwfFyd8UCEcW3V68rA9XK4fgkv%2FdiJrQGdirZsgSi0DbgL%2BA0y3qY%2BGJ1V0w9NfkET%2BcpqjFBELtXJCSPvXFH2NwjrB8jsSgC4HQb8P1j0679hQWczJUlg3RC5rk%2F%2BJ%2BC7oNwybg2niREN%2F2o1yJcs80Yt207r1Vw1Foj9vkIfYGzC87Qz4ejqN4K5ev4WujNBiYOzrR32%2BoRQ1pqdO0rzbhiB7P5rsuumOTpJx7wmFRd7XXEkZ%2B3fYsk0yO2kDVFgLKeD7voCktPNvBVGVxY4PfQ0V8obuCmfoYJhvvXnyENL9VNesNHJS6Aj%2BbLQvYgbeOSbDqw30GkQD5nNmB57kQMOrhzDueH7WUB%2B6J22l%2ByQr%2FdUU26blSF%2FyY%2BHgFaKI6Hmwec%2FIW72rfJmT6Y6vWRImdW5Ei9cu%2BAB4DAc9IAZKgMCuY7SRCVZpgKq9RFxVtumVu5ChRmcFH2kmTaZEm4%2FAnLAQfLlHtWHILuquWJlyE0eZ7mSyllRwDrLZaSRzxtBBppfzUBTk61paCMzgv%2BwMMbmrr8GOqUBuwYwZH7yS%2FEA2FAAd%2FvoWeJNEoC4Tu8ZDrOC1AlMpDOql1kKR8mVFU3lVnTxoJ7qG51D2nPPvNkKAdbbiMYLxlS%2FLJHQyx6zONb42TiE6QbUfr5joFHaN4vQ0eZsTaVLgDi32wLC57XoF%2FpbqmGcqpqod%2FlnRPPJ4yFAA28uqZF1G73yrzTTBeCDBO3NEuCAiEMO8CS7xbD6eIIDaK3Txi3YmR08&X-Amz-Signature=231ee6f29290b4d0d5ccef4e94a33df1772a24ae316e56321a0678cc4155088c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

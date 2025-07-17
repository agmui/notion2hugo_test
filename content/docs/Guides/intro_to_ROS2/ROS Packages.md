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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OOQVMH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCVTcN97JUIjEWKkTJGlpJ43YJHa0WjTEexhr0SgB%2FvQgIhAJQWHLgLXqPXwNqQrhSjx86V%2FD5SxMQpjcobMx6%2Bfy6CKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2FLDeQ3skSKJYGyh8q3AOJB7J%2B6tu%2FVve2wnu0lqCs1vhU2kX7wwrVXVTrqY2Zh1Si%2BU%2FfY6kVFo4GeCZTW%2F4IlUBrFeEhFq6jEcExGN%2B%2F3y%2BIDmRHgeJP%2FUDm3jdyjSBgNS4%2B8kvx4dcIdw%2BQ9V4cHvZyWLI5Fi9BMgJyJkVZkojc9kNDO45uaH%2BdFIO%2BueF3pPi8gbE7T8jc3z%2Flt7NG9PejGhjm1KFs3ufJIR6adOugA5Zz8nBTX%2B6nULoBnbejZrxG9dCKfMP%2FV1%2FuvDJmxiIdlyNo%2FHRwsFBdh2%2B7HuDQ6QAoUJ4%2B0%2B3Evk00IA5dcQOc8noXIZaOikWOAbSfllAltsjYKUUWdAcPxQVYKgGVZcd9gR7Cimum%2Fozi0fBpIPlm%2BU2tz3IFjC4qA8UfaiRYeakI9pq5Ul4dko2dmxpl7lQLynv33QLD1gwt%2BstSjOpKRqK57hVqlJ%2BxQxpw53Dhjnycg6GNkxc8Dlda2iz3HuwSEPW4BT5wlD8CgYXSFG40ZbEyRrRCIMjep9u8U2Aj2FmeNkAtwfw7Vg3%2F9KvITzhhfaPGmo9GmHxbswWzjjof3eOENv2fLgCaqNT40SclXkoxPsL%2Fgnl9gX6nyBLEwW4XdZvWbkOhoRYbgsn%2FZ9CWYeC4bS6PKTCp7OLDBjqkAaYzI5LnfFsXhfommpP6XwkPo%2FPxqUrZ29aYFceGUh8n1xDYXU0SIP7E571Oj%2BVJnrzhc%2BhL%2BBIsEsGWmgIItayoW2oLHW0w5mSp6G5oNdRfsBWZbvyErw%2BW4dmuI9ItQPzGeutRIguXVgPMsPi8CgSE2AWsuT8EgUQxxTPlNTGK4hjOn9XBTsJXQolcm8MsUsDQgdTL5KO77fFlFHyp5a5Q3L%2Fj&X-Amz-Signature=39beaf393ef086f11dc9247e0570969f3989eee4c381e9b49a0e91d4a2990ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OOQVMH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCVTcN97JUIjEWKkTJGlpJ43YJHa0WjTEexhr0SgB%2FvQgIhAJQWHLgLXqPXwNqQrhSjx86V%2FD5SxMQpjcobMx6%2Bfy6CKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2FLDeQ3skSKJYGyh8q3AOJB7J%2B6tu%2FVve2wnu0lqCs1vhU2kX7wwrVXVTrqY2Zh1Si%2BU%2FfY6kVFo4GeCZTW%2F4IlUBrFeEhFq6jEcExGN%2B%2F3y%2BIDmRHgeJP%2FUDm3jdyjSBgNS4%2B8kvx4dcIdw%2BQ9V4cHvZyWLI5Fi9BMgJyJkVZkojc9kNDO45uaH%2BdFIO%2BueF3pPi8gbE7T8jc3z%2Flt7NG9PejGhjm1KFs3ufJIR6adOugA5Zz8nBTX%2B6nULoBnbejZrxG9dCKfMP%2FV1%2FuvDJmxiIdlyNo%2FHRwsFBdh2%2B7HuDQ6QAoUJ4%2B0%2B3Evk00IA5dcQOc8noXIZaOikWOAbSfllAltsjYKUUWdAcPxQVYKgGVZcd9gR7Cimum%2Fozi0fBpIPlm%2BU2tz3IFjC4qA8UfaiRYeakI9pq5Ul4dko2dmxpl7lQLynv33QLD1gwt%2BstSjOpKRqK57hVqlJ%2BxQxpw53Dhjnycg6GNkxc8Dlda2iz3HuwSEPW4BT5wlD8CgYXSFG40ZbEyRrRCIMjep9u8U2Aj2FmeNkAtwfw7Vg3%2F9KvITzhhfaPGmo9GmHxbswWzjjof3eOENv2fLgCaqNT40SclXkoxPsL%2Fgnl9gX6nyBLEwW4XdZvWbkOhoRYbgsn%2FZ9CWYeC4bS6PKTCp7OLDBjqkAaYzI5LnfFsXhfommpP6XwkPo%2FPxqUrZ29aYFceGUh8n1xDYXU0SIP7E571Oj%2BVJnrzhc%2BhL%2BBIsEsGWmgIItayoW2oLHW0w5mSp6G5oNdRfsBWZbvyErw%2BW4dmuI9ItQPzGeutRIguXVgPMsPi8CgSE2AWsuT8EgUQxxTPlNTGK4hjOn9XBTsJXQolcm8MsUsDQgdTL5KO77fFlFHyp5a5Q3L%2Fj&X-Amz-Signature=936383a96059ae56b974aff79806384a825f01d36c8603894231e4e1b6523825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OOQVMH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCVTcN97JUIjEWKkTJGlpJ43YJHa0WjTEexhr0SgB%2FvQgIhAJQWHLgLXqPXwNqQrhSjx86V%2FD5SxMQpjcobMx6%2Bfy6CKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2FLDeQ3skSKJYGyh8q3AOJB7J%2B6tu%2FVve2wnu0lqCs1vhU2kX7wwrVXVTrqY2Zh1Si%2BU%2FfY6kVFo4GeCZTW%2F4IlUBrFeEhFq6jEcExGN%2B%2F3y%2BIDmRHgeJP%2FUDm3jdyjSBgNS4%2B8kvx4dcIdw%2BQ9V4cHvZyWLI5Fi9BMgJyJkVZkojc9kNDO45uaH%2BdFIO%2BueF3pPi8gbE7T8jc3z%2Flt7NG9PejGhjm1KFs3ufJIR6adOugA5Zz8nBTX%2B6nULoBnbejZrxG9dCKfMP%2FV1%2FuvDJmxiIdlyNo%2FHRwsFBdh2%2B7HuDQ6QAoUJ4%2B0%2B3Evk00IA5dcQOc8noXIZaOikWOAbSfllAltsjYKUUWdAcPxQVYKgGVZcd9gR7Cimum%2Fozi0fBpIPlm%2BU2tz3IFjC4qA8UfaiRYeakI9pq5Ul4dko2dmxpl7lQLynv33QLD1gwt%2BstSjOpKRqK57hVqlJ%2BxQxpw53Dhjnycg6GNkxc8Dlda2iz3HuwSEPW4BT5wlD8CgYXSFG40ZbEyRrRCIMjep9u8U2Aj2FmeNkAtwfw7Vg3%2F9KvITzhhfaPGmo9GmHxbswWzjjof3eOENv2fLgCaqNT40SclXkoxPsL%2Fgnl9gX6nyBLEwW4XdZvWbkOhoRYbgsn%2FZ9CWYeC4bS6PKTCp7OLDBjqkAaYzI5LnfFsXhfommpP6XwkPo%2FPxqUrZ29aYFceGUh8n1xDYXU0SIP7E571Oj%2BVJnrzhc%2BhL%2BBIsEsGWmgIItayoW2oLHW0w5mSp6G5oNdRfsBWZbvyErw%2BW4dmuI9ItQPzGeutRIguXVgPMsPi8CgSE2AWsuT8EgUQxxTPlNTGK4hjOn9XBTsJXQolcm8MsUsDQgdTL5KO77fFlFHyp5a5Q3L%2Fj&X-Amz-Signature=884bdcaa665f889e642cc8979f2d808c1ba166a35ce857ec14bbb804c9e48b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OOQVMH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCVTcN97JUIjEWKkTJGlpJ43YJHa0WjTEexhr0SgB%2FvQgIhAJQWHLgLXqPXwNqQrhSjx86V%2FD5SxMQpjcobMx6%2Bfy6CKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2FLDeQ3skSKJYGyh8q3AOJB7J%2B6tu%2FVve2wnu0lqCs1vhU2kX7wwrVXVTrqY2Zh1Si%2BU%2FfY6kVFo4GeCZTW%2F4IlUBrFeEhFq6jEcExGN%2B%2F3y%2BIDmRHgeJP%2FUDm3jdyjSBgNS4%2B8kvx4dcIdw%2BQ9V4cHvZyWLI5Fi9BMgJyJkVZkojc9kNDO45uaH%2BdFIO%2BueF3pPi8gbE7T8jc3z%2Flt7NG9PejGhjm1KFs3ufJIR6adOugA5Zz8nBTX%2B6nULoBnbejZrxG9dCKfMP%2FV1%2FuvDJmxiIdlyNo%2FHRwsFBdh2%2B7HuDQ6QAoUJ4%2B0%2B3Evk00IA5dcQOc8noXIZaOikWOAbSfllAltsjYKUUWdAcPxQVYKgGVZcd9gR7Cimum%2Fozi0fBpIPlm%2BU2tz3IFjC4qA8UfaiRYeakI9pq5Ul4dko2dmxpl7lQLynv33QLD1gwt%2BstSjOpKRqK57hVqlJ%2BxQxpw53Dhjnycg6GNkxc8Dlda2iz3HuwSEPW4BT5wlD8CgYXSFG40ZbEyRrRCIMjep9u8U2Aj2FmeNkAtwfw7Vg3%2F9KvITzhhfaPGmo9GmHxbswWzjjof3eOENv2fLgCaqNT40SclXkoxPsL%2Fgnl9gX6nyBLEwW4XdZvWbkOhoRYbgsn%2FZ9CWYeC4bS6PKTCp7OLDBjqkAaYzI5LnfFsXhfommpP6XwkPo%2FPxqUrZ29aYFceGUh8n1xDYXU0SIP7E571Oj%2BVJnrzhc%2BhL%2BBIsEsGWmgIItayoW2oLHW0w5mSp6G5oNdRfsBWZbvyErw%2BW4dmuI9ItQPzGeutRIguXVgPMsPi8CgSE2AWsuT8EgUQxxTPlNTGK4hjOn9XBTsJXQolcm8MsUsDQgdTL5KO77fFlFHyp5a5Q3L%2Fj&X-Amz-Signature=64b926cc3f57e1127ded7e85abec8c518e1466e57a6ab79826b332de755f4f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OOQVMH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCVTcN97JUIjEWKkTJGlpJ43YJHa0WjTEexhr0SgB%2FvQgIhAJQWHLgLXqPXwNqQrhSjx86V%2FD5SxMQpjcobMx6%2Bfy6CKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2FLDeQ3skSKJYGyh8q3AOJB7J%2B6tu%2FVve2wnu0lqCs1vhU2kX7wwrVXVTrqY2Zh1Si%2BU%2FfY6kVFo4GeCZTW%2F4IlUBrFeEhFq6jEcExGN%2B%2F3y%2BIDmRHgeJP%2FUDm3jdyjSBgNS4%2B8kvx4dcIdw%2BQ9V4cHvZyWLI5Fi9BMgJyJkVZkojc9kNDO45uaH%2BdFIO%2BueF3pPi8gbE7T8jc3z%2Flt7NG9PejGhjm1KFs3ufJIR6adOugA5Zz8nBTX%2B6nULoBnbejZrxG9dCKfMP%2FV1%2FuvDJmxiIdlyNo%2FHRwsFBdh2%2B7HuDQ6QAoUJ4%2B0%2B3Evk00IA5dcQOc8noXIZaOikWOAbSfllAltsjYKUUWdAcPxQVYKgGVZcd9gR7Cimum%2Fozi0fBpIPlm%2BU2tz3IFjC4qA8UfaiRYeakI9pq5Ul4dko2dmxpl7lQLynv33QLD1gwt%2BstSjOpKRqK57hVqlJ%2BxQxpw53Dhjnycg6GNkxc8Dlda2iz3HuwSEPW4BT5wlD8CgYXSFG40ZbEyRrRCIMjep9u8U2Aj2FmeNkAtwfw7Vg3%2F9KvITzhhfaPGmo9GmHxbswWzjjof3eOENv2fLgCaqNT40SclXkoxPsL%2Fgnl9gX6nyBLEwW4XdZvWbkOhoRYbgsn%2FZ9CWYeC4bS6PKTCp7OLDBjqkAaYzI5LnfFsXhfommpP6XwkPo%2FPxqUrZ29aYFceGUh8n1xDYXU0SIP7E571Oj%2BVJnrzhc%2BhL%2BBIsEsGWmgIItayoW2oLHW0w5mSp6G5oNdRfsBWZbvyErw%2BW4dmuI9ItQPzGeutRIguXVgPMsPi8CgSE2AWsuT8EgUQxxTPlNTGK4hjOn9XBTsJXQolcm8MsUsDQgdTL5KO77fFlFHyp5a5Q3L%2Fj&X-Amz-Signature=759dc6b94ed41b78f87c44e60f08eeef7dad23e4677c21bd77ec7e8e10bba9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OOQVMH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCVTcN97JUIjEWKkTJGlpJ43YJHa0WjTEexhr0SgB%2FvQgIhAJQWHLgLXqPXwNqQrhSjx86V%2FD5SxMQpjcobMx6%2Bfy6CKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2FLDeQ3skSKJYGyh8q3AOJB7J%2B6tu%2FVve2wnu0lqCs1vhU2kX7wwrVXVTrqY2Zh1Si%2BU%2FfY6kVFo4GeCZTW%2F4IlUBrFeEhFq6jEcExGN%2B%2F3y%2BIDmRHgeJP%2FUDm3jdyjSBgNS4%2B8kvx4dcIdw%2BQ9V4cHvZyWLI5Fi9BMgJyJkVZkojc9kNDO45uaH%2BdFIO%2BueF3pPi8gbE7T8jc3z%2Flt7NG9PejGhjm1KFs3ufJIR6adOugA5Zz8nBTX%2B6nULoBnbejZrxG9dCKfMP%2FV1%2FuvDJmxiIdlyNo%2FHRwsFBdh2%2B7HuDQ6QAoUJ4%2B0%2B3Evk00IA5dcQOc8noXIZaOikWOAbSfllAltsjYKUUWdAcPxQVYKgGVZcd9gR7Cimum%2Fozi0fBpIPlm%2BU2tz3IFjC4qA8UfaiRYeakI9pq5Ul4dko2dmxpl7lQLynv33QLD1gwt%2BstSjOpKRqK57hVqlJ%2BxQxpw53Dhjnycg6GNkxc8Dlda2iz3HuwSEPW4BT5wlD8CgYXSFG40ZbEyRrRCIMjep9u8U2Aj2FmeNkAtwfw7Vg3%2F9KvITzhhfaPGmo9GmHxbswWzjjof3eOENv2fLgCaqNT40SclXkoxPsL%2Fgnl9gX6nyBLEwW4XdZvWbkOhoRYbgsn%2FZ9CWYeC4bS6PKTCp7OLDBjqkAaYzI5LnfFsXhfommpP6XwkPo%2FPxqUrZ29aYFceGUh8n1xDYXU0SIP7E571Oj%2BVJnrzhc%2BhL%2BBIsEsGWmgIItayoW2oLHW0w5mSp6G5oNdRfsBWZbvyErw%2BW4dmuI9ItQPzGeutRIguXVgPMsPi8CgSE2AWsuT8EgUQxxTPlNTGK4hjOn9XBTsJXQolcm8MsUsDQgdTL5KO77fFlFHyp5a5Q3L%2Fj&X-Amz-Signature=e48577b20827298c328d589f8f680124a8c7d452c89f44d4b4a7c3dfe687b5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OOQVMH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCVTcN97JUIjEWKkTJGlpJ43YJHa0WjTEexhr0SgB%2FvQgIhAJQWHLgLXqPXwNqQrhSjx86V%2FD5SxMQpjcobMx6%2Bfy6CKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2FLDeQ3skSKJYGyh8q3AOJB7J%2B6tu%2FVve2wnu0lqCs1vhU2kX7wwrVXVTrqY2Zh1Si%2BU%2FfY6kVFo4GeCZTW%2F4IlUBrFeEhFq6jEcExGN%2B%2F3y%2BIDmRHgeJP%2FUDm3jdyjSBgNS4%2B8kvx4dcIdw%2BQ9V4cHvZyWLI5Fi9BMgJyJkVZkojc9kNDO45uaH%2BdFIO%2BueF3pPi8gbE7T8jc3z%2Flt7NG9PejGhjm1KFs3ufJIR6adOugA5Zz8nBTX%2B6nULoBnbejZrxG9dCKfMP%2FV1%2FuvDJmxiIdlyNo%2FHRwsFBdh2%2B7HuDQ6QAoUJ4%2B0%2B3Evk00IA5dcQOc8noXIZaOikWOAbSfllAltsjYKUUWdAcPxQVYKgGVZcd9gR7Cimum%2Fozi0fBpIPlm%2BU2tz3IFjC4qA8UfaiRYeakI9pq5Ul4dko2dmxpl7lQLynv33QLD1gwt%2BstSjOpKRqK57hVqlJ%2BxQxpw53Dhjnycg6GNkxc8Dlda2iz3HuwSEPW4BT5wlD8CgYXSFG40ZbEyRrRCIMjep9u8U2Aj2FmeNkAtwfw7Vg3%2F9KvITzhhfaPGmo9GmHxbswWzjjof3eOENv2fLgCaqNT40SclXkoxPsL%2Fgnl9gX6nyBLEwW4XdZvWbkOhoRYbgsn%2FZ9CWYeC4bS6PKTCp7OLDBjqkAaYzI5LnfFsXhfommpP6XwkPo%2FPxqUrZ29aYFceGUh8n1xDYXU0SIP7E571Oj%2BVJnrzhc%2BhL%2BBIsEsGWmgIItayoW2oLHW0w5mSp6G5oNdRfsBWZbvyErw%2BW4dmuI9ItQPzGeutRIguXVgPMsPi8CgSE2AWsuT8EgUQxxTPlNTGK4hjOn9XBTsJXQolcm8MsUsDQgdTL5KO77fFlFHyp5a5Q3L%2Fj&X-Amz-Signature=6e2720676c4517d8c9d5a04a8c41a7741161f3732f5344c5c18899458f7d613c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

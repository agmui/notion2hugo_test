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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5P5TZSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BsJXUlWQXTa64x%2BcmN56dLAQLSWX78%2FKeAmSTJMXryAiEA6oNC2oRe7E%2FCPkLm%2BBGlWejzwVJBMo3aEzy5%2FxhaXAcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FIIF48ycpuffakRyrcAyDWjd1GScF2M7MgCy74g1bmrIXVnAb%2BKUdQBcwJ1bYZ5s%2F8AXH98Ie22Y5sDyj7c07RDHmYV2jO4C4LlMEbtz19gkFDIitokt4MMBKW9ZromzI%2FNwXOQPZ5IvcpvdLdyal2rlVEKiptLVdqhvBIJj6yH2pIo7JqGdTKUhif17Xl6kSB9Thv09Gm04drdiIWzjpcjKU28Pn65%2Fyoo%2FcJV4KBP%2Fo%2FafIoILbIcUMp%2F0HEF6FkbWWz1xljoT4PfrH5m6h88Oe3l%2FVhVbJ9eIBOI%2FaafcUD777rcAxc5TF1aJYJ9YQ%2BxgTuSsORouJpDQk8e9KnQJ8pqyw7st0JqNmGCxEADAw1PEtNp3jg6OBSID3XbY%2Fc%2B3%2BUDNQCpkJ7K0OUnNX6VqhpmJRVhxQjDW485RnaF30Bgq%2F7%2FYXijjx3WPu8thnuO2e3q4KQRGJF87zR%2BBIbXhgMTAcyWrqxDNCljPHyT6VzPCcVPwJ3GUh%2F87xnLhrvVtpXkau81MhZKCR4GiAU63FL9BJQopWfXEulI%2FkkCPQM%2Fp07WVbf2CHdLlgdiTStEIUh62J%2Bo654LpsMi3kdZuv8umz%2FGwl9EI5Hpo9lHR9xlvOkDP%2BMBbS9%2BIO37O7M%2BNbKWtZ%2Bei3%2FMIGRrsQGOqUBHdOviOCydleqf6qvG%2Fo8fZCeCEKPsuCag39bLsNKYOuE%2BnzX2qnmY0IyOyz8MkQaQlumCC5zeFtv%2BRUrdh54eGcqla%2FxXDqm%2FuvnCaavSnkfJv7TwNaX5QD4m%2F1qpVWW51f8dKq8YZRKQKcB23N0L8ujz0SHsQA6vCRdyNN2Q0MUtZKDnfg%2FDganN6veGFgARM4zDpvCGfyEh02YnHIm94rYOAwR&X-Amz-Signature=2fa6af3663f3c579267f73879dd66d3dabe8cd86ef5c54f513fc9f9a8aa4be38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5P5TZSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BsJXUlWQXTa64x%2BcmN56dLAQLSWX78%2FKeAmSTJMXryAiEA6oNC2oRe7E%2FCPkLm%2BBGlWejzwVJBMo3aEzy5%2FxhaXAcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FIIF48ycpuffakRyrcAyDWjd1GScF2M7MgCy74g1bmrIXVnAb%2BKUdQBcwJ1bYZ5s%2F8AXH98Ie22Y5sDyj7c07RDHmYV2jO4C4LlMEbtz19gkFDIitokt4MMBKW9ZromzI%2FNwXOQPZ5IvcpvdLdyal2rlVEKiptLVdqhvBIJj6yH2pIo7JqGdTKUhif17Xl6kSB9Thv09Gm04drdiIWzjpcjKU28Pn65%2Fyoo%2FcJV4KBP%2Fo%2FafIoILbIcUMp%2F0HEF6FkbWWz1xljoT4PfrH5m6h88Oe3l%2FVhVbJ9eIBOI%2FaafcUD777rcAxc5TF1aJYJ9YQ%2BxgTuSsORouJpDQk8e9KnQJ8pqyw7st0JqNmGCxEADAw1PEtNp3jg6OBSID3XbY%2Fc%2B3%2BUDNQCpkJ7K0OUnNX6VqhpmJRVhxQjDW485RnaF30Bgq%2F7%2FYXijjx3WPu8thnuO2e3q4KQRGJF87zR%2BBIbXhgMTAcyWrqxDNCljPHyT6VzPCcVPwJ3GUh%2F87xnLhrvVtpXkau81MhZKCR4GiAU63FL9BJQopWfXEulI%2FkkCPQM%2Fp07WVbf2CHdLlgdiTStEIUh62J%2Bo654LpsMi3kdZuv8umz%2FGwl9EI5Hpo9lHR9xlvOkDP%2BMBbS9%2BIO37O7M%2BNbKWtZ%2Bei3%2FMIGRrsQGOqUBHdOviOCydleqf6qvG%2Fo8fZCeCEKPsuCag39bLsNKYOuE%2BnzX2qnmY0IyOyz8MkQaQlumCC5zeFtv%2BRUrdh54eGcqla%2FxXDqm%2FuvnCaavSnkfJv7TwNaX5QD4m%2F1qpVWW51f8dKq8YZRKQKcB23N0L8ujz0SHsQA6vCRdyNN2Q0MUtZKDnfg%2FDganN6veGFgARM4zDpvCGfyEh02YnHIm94rYOAwR&X-Amz-Signature=226863909e3978ca2ceffc93f3c16496a748642fe68b663d6f657c75931d74e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5P5TZSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BsJXUlWQXTa64x%2BcmN56dLAQLSWX78%2FKeAmSTJMXryAiEA6oNC2oRe7E%2FCPkLm%2BBGlWejzwVJBMo3aEzy5%2FxhaXAcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FIIF48ycpuffakRyrcAyDWjd1GScF2M7MgCy74g1bmrIXVnAb%2BKUdQBcwJ1bYZ5s%2F8AXH98Ie22Y5sDyj7c07RDHmYV2jO4C4LlMEbtz19gkFDIitokt4MMBKW9ZromzI%2FNwXOQPZ5IvcpvdLdyal2rlVEKiptLVdqhvBIJj6yH2pIo7JqGdTKUhif17Xl6kSB9Thv09Gm04drdiIWzjpcjKU28Pn65%2Fyoo%2FcJV4KBP%2Fo%2FafIoILbIcUMp%2F0HEF6FkbWWz1xljoT4PfrH5m6h88Oe3l%2FVhVbJ9eIBOI%2FaafcUD777rcAxc5TF1aJYJ9YQ%2BxgTuSsORouJpDQk8e9KnQJ8pqyw7st0JqNmGCxEADAw1PEtNp3jg6OBSID3XbY%2Fc%2B3%2BUDNQCpkJ7K0OUnNX6VqhpmJRVhxQjDW485RnaF30Bgq%2F7%2FYXijjx3WPu8thnuO2e3q4KQRGJF87zR%2BBIbXhgMTAcyWrqxDNCljPHyT6VzPCcVPwJ3GUh%2F87xnLhrvVtpXkau81MhZKCR4GiAU63FL9BJQopWfXEulI%2FkkCPQM%2Fp07WVbf2CHdLlgdiTStEIUh62J%2Bo654LpsMi3kdZuv8umz%2FGwl9EI5Hpo9lHR9xlvOkDP%2BMBbS9%2BIO37O7M%2BNbKWtZ%2Bei3%2FMIGRrsQGOqUBHdOviOCydleqf6qvG%2Fo8fZCeCEKPsuCag39bLsNKYOuE%2BnzX2qnmY0IyOyz8MkQaQlumCC5zeFtv%2BRUrdh54eGcqla%2FxXDqm%2FuvnCaavSnkfJv7TwNaX5QD4m%2F1qpVWW51f8dKq8YZRKQKcB23N0L8ujz0SHsQA6vCRdyNN2Q0MUtZKDnfg%2FDganN6veGFgARM4zDpvCGfyEh02YnHIm94rYOAwR&X-Amz-Signature=b6c60e847408e5e33e697b8d8757d748b767f311c69ad2403fbdc6967c485838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5P5TZSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BsJXUlWQXTa64x%2BcmN56dLAQLSWX78%2FKeAmSTJMXryAiEA6oNC2oRe7E%2FCPkLm%2BBGlWejzwVJBMo3aEzy5%2FxhaXAcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FIIF48ycpuffakRyrcAyDWjd1GScF2M7MgCy74g1bmrIXVnAb%2BKUdQBcwJ1bYZ5s%2F8AXH98Ie22Y5sDyj7c07RDHmYV2jO4C4LlMEbtz19gkFDIitokt4MMBKW9ZromzI%2FNwXOQPZ5IvcpvdLdyal2rlVEKiptLVdqhvBIJj6yH2pIo7JqGdTKUhif17Xl6kSB9Thv09Gm04drdiIWzjpcjKU28Pn65%2Fyoo%2FcJV4KBP%2Fo%2FafIoILbIcUMp%2F0HEF6FkbWWz1xljoT4PfrH5m6h88Oe3l%2FVhVbJ9eIBOI%2FaafcUD777rcAxc5TF1aJYJ9YQ%2BxgTuSsORouJpDQk8e9KnQJ8pqyw7st0JqNmGCxEADAw1PEtNp3jg6OBSID3XbY%2Fc%2B3%2BUDNQCpkJ7K0OUnNX6VqhpmJRVhxQjDW485RnaF30Bgq%2F7%2FYXijjx3WPu8thnuO2e3q4KQRGJF87zR%2BBIbXhgMTAcyWrqxDNCljPHyT6VzPCcVPwJ3GUh%2F87xnLhrvVtpXkau81MhZKCR4GiAU63FL9BJQopWfXEulI%2FkkCPQM%2Fp07WVbf2CHdLlgdiTStEIUh62J%2Bo654LpsMi3kdZuv8umz%2FGwl9EI5Hpo9lHR9xlvOkDP%2BMBbS9%2BIO37O7M%2BNbKWtZ%2Bei3%2FMIGRrsQGOqUBHdOviOCydleqf6qvG%2Fo8fZCeCEKPsuCag39bLsNKYOuE%2BnzX2qnmY0IyOyz8MkQaQlumCC5zeFtv%2BRUrdh54eGcqla%2FxXDqm%2FuvnCaavSnkfJv7TwNaX5QD4m%2F1qpVWW51f8dKq8YZRKQKcB23N0L8ujz0SHsQA6vCRdyNN2Q0MUtZKDnfg%2FDganN6veGFgARM4zDpvCGfyEh02YnHIm94rYOAwR&X-Amz-Signature=7cf58fa5eba999a418eccb5bd9f027fafe0492b546976aef912a15810251f41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5P5TZSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BsJXUlWQXTa64x%2BcmN56dLAQLSWX78%2FKeAmSTJMXryAiEA6oNC2oRe7E%2FCPkLm%2BBGlWejzwVJBMo3aEzy5%2FxhaXAcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FIIF48ycpuffakRyrcAyDWjd1GScF2M7MgCy74g1bmrIXVnAb%2BKUdQBcwJ1bYZ5s%2F8AXH98Ie22Y5sDyj7c07RDHmYV2jO4C4LlMEbtz19gkFDIitokt4MMBKW9ZromzI%2FNwXOQPZ5IvcpvdLdyal2rlVEKiptLVdqhvBIJj6yH2pIo7JqGdTKUhif17Xl6kSB9Thv09Gm04drdiIWzjpcjKU28Pn65%2Fyoo%2FcJV4KBP%2Fo%2FafIoILbIcUMp%2F0HEF6FkbWWz1xljoT4PfrH5m6h88Oe3l%2FVhVbJ9eIBOI%2FaafcUD777rcAxc5TF1aJYJ9YQ%2BxgTuSsORouJpDQk8e9KnQJ8pqyw7st0JqNmGCxEADAw1PEtNp3jg6OBSID3XbY%2Fc%2B3%2BUDNQCpkJ7K0OUnNX6VqhpmJRVhxQjDW485RnaF30Bgq%2F7%2FYXijjx3WPu8thnuO2e3q4KQRGJF87zR%2BBIbXhgMTAcyWrqxDNCljPHyT6VzPCcVPwJ3GUh%2F87xnLhrvVtpXkau81MhZKCR4GiAU63FL9BJQopWfXEulI%2FkkCPQM%2Fp07WVbf2CHdLlgdiTStEIUh62J%2Bo654LpsMi3kdZuv8umz%2FGwl9EI5Hpo9lHR9xlvOkDP%2BMBbS9%2BIO37O7M%2BNbKWtZ%2Bei3%2FMIGRrsQGOqUBHdOviOCydleqf6qvG%2Fo8fZCeCEKPsuCag39bLsNKYOuE%2BnzX2qnmY0IyOyz8MkQaQlumCC5zeFtv%2BRUrdh54eGcqla%2FxXDqm%2FuvnCaavSnkfJv7TwNaX5QD4m%2F1qpVWW51f8dKq8YZRKQKcB23N0L8ujz0SHsQA6vCRdyNN2Q0MUtZKDnfg%2FDganN6veGFgARM4zDpvCGfyEh02YnHIm94rYOAwR&X-Amz-Signature=86b36e919a0abca8a04c3793e6eb57c744fe7d19ac72e38359a6239a76afcefd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5P5TZSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BsJXUlWQXTa64x%2BcmN56dLAQLSWX78%2FKeAmSTJMXryAiEA6oNC2oRe7E%2FCPkLm%2BBGlWejzwVJBMo3aEzy5%2FxhaXAcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FIIF48ycpuffakRyrcAyDWjd1GScF2M7MgCy74g1bmrIXVnAb%2BKUdQBcwJ1bYZ5s%2F8AXH98Ie22Y5sDyj7c07RDHmYV2jO4C4LlMEbtz19gkFDIitokt4MMBKW9ZromzI%2FNwXOQPZ5IvcpvdLdyal2rlVEKiptLVdqhvBIJj6yH2pIo7JqGdTKUhif17Xl6kSB9Thv09Gm04drdiIWzjpcjKU28Pn65%2Fyoo%2FcJV4KBP%2Fo%2FafIoILbIcUMp%2F0HEF6FkbWWz1xljoT4PfrH5m6h88Oe3l%2FVhVbJ9eIBOI%2FaafcUD777rcAxc5TF1aJYJ9YQ%2BxgTuSsORouJpDQk8e9KnQJ8pqyw7st0JqNmGCxEADAw1PEtNp3jg6OBSID3XbY%2Fc%2B3%2BUDNQCpkJ7K0OUnNX6VqhpmJRVhxQjDW485RnaF30Bgq%2F7%2FYXijjx3WPu8thnuO2e3q4KQRGJF87zR%2BBIbXhgMTAcyWrqxDNCljPHyT6VzPCcVPwJ3GUh%2F87xnLhrvVtpXkau81MhZKCR4GiAU63FL9BJQopWfXEulI%2FkkCPQM%2Fp07WVbf2CHdLlgdiTStEIUh62J%2Bo654LpsMi3kdZuv8umz%2FGwl9EI5Hpo9lHR9xlvOkDP%2BMBbS9%2BIO37O7M%2BNbKWtZ%2Bei3%2FMIGRrsQGOqUBHdOviOCydleqf6qvG%2Fo8fZCeCEKPsuCag39bLsNKYOuE%2BnzX2qnmY0IyOyz8MkQaQlumCC5zeFtv%2BRUrdh54eGcqla%2FxXDqm%2FuvnCaavSnkfJv7TwNaX5QD4m%2F1qpVWW51f8dKq8YZRKQKcB23N0L8ujz0SHsQA6vCRdyNN2Q0MUtZKDnfg%2FDganN6veGFgARM4zDpvCGfyEh02YnHIm94rYOAwR&X-Amz-Signature=2f2f5f013ed30b3bbe39b97646274a2a883b64e6865538656737e0f78f87875c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5P5TZSV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BsJXUlWQXTa64x%2BcmN56dLAQLSWX78%2FKeAmSTJMXryAiEA6oNC2oRe7E%2FCPkLm%2BBGlWejzwVJBMo3aEzy5%2FxhaXAcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FIIF48ycpuffakRyrcAyDWjd1GScF2M7MgCy74g1bmrIXVnAb%2BKUdQBcwJ1bYZ5s%2F8AXH98Ie22Y5sDyj7c07RDHmYV2jO4C4LlMEbtz19gkFDIitokt4MMBKW9ZromzI%2FNwXOQPZ5IvcpvdLdyal2rlVEKiptLVdqhvBIJj6yH2pIo7JqGdTKUhif17Xl6kSB9Thv09Gm04drdiIWzjpcjKU28Pn65%2Fyoo%2FcJV4KBP%2Fo%2FafIoILbIcUMp%2F0HEF6FkbWWz1xljoT4PfrH5m6h88Oe3l%2FVhVbJ9eIBOI%2FaafcUD777rcAxc5TF1aJYJ9YQ%2BxgTuSsORouJpDQk8e9KnQJ8pqyw7st0JqNmGCxEADAw1PEtNp3jg6OBSID3XbY%2Fc%2B3%2BUDNQCpkJ7K0OUnNX6VqhpmJRVhxQjDW485RnaF30Bgq%2F7%2FYXijjx3WPu8thnuO2e3q4KQRGJF87zR%2BBIbXhgMTAcyWrqxDNCljPHyT6VzPCcVPwJ3GUh%2F87xnLhrvVtpXkau81MhZKCR4GiAU63FL9BJQopWfXEulI%2FkkCPQM%2Fp07WVbf2CHdLlgdiTStEIUh62J%2Bo654LpsMi3kdZuv8umz%2FGwl9EI5Hpo9lHR9xlvOkDP%2BMBbS9%2BIO37O7M%2BNbKWtZ%2Bei3%2FMIGRrsQGOqUBHdOviOCydleqf6qvG%2Fo8fZCeCEKPsuCag39bLsNKYOuE%2BnzX2qnmY0IyOyz8MkQaQlumCC5zeFtv%2BRUrdh54eGcqla%2FxXDqm%2FuvnCaavSnkfJv7TwNaX5QD4m%2F1qpVWW51f8dKq8YZRKQKcB23N0L8ujz0SHsQA6vCRdyNN2Q0MUtZKDnfg%2FDganN6veGFgARM4zDpvCGfyEh02YnHIm94rYOAwR&X-Amz-Signature=d5ed8526888ab2ad2c30364936d2143f0406e84664b6f4046450e1d4c09b5c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSDGTYF%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvmj%2BEEmpIEx6rSEO3krCDEnAtHCDZH3%2BHd5Qze5HzIAiA%2Bd8HMWgqCMkInSdGQVfvzHnTTQNCcDD2JSDg%2BhNiAxSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIok5WN%2BDvi%2FArkYJKtwDjibV5%2B2pckCakesk5vxD1WiorpOimW5s0kva9zWkyNpXLTRdGa%2FAhu%2FpleqEiZURbg5BBShlqsCUrIeZIfM2leLzMdPXdqrkAunw36XbX%2BxaacfufHLvtCSPyGCAim1hqtjjpedxC4MH1U8uques5Rcxr2chs1teO1yXm3kQpvmpy8g7PkIc%2F3iOEFq156LpvXPQQdwrTpbHkFl6omyfzmykmPQZXMnDnrlZey%2BeshmaDIjvQJweVRerGV9cbsiYGeDmoubwt9w07W9uKO67mhUGpZsBw46fwQAvmCjD%2BsDXpkYDaavkYNTtJkondz9vWZ4NZeIfLR8A6D4YzsLiPMrmpsN6yFuwbac3nhnqU0rE%2B1wQJv98l2fEMNqAozVzTby%2B%2FM%2FbUNkmRS5O%2BLnhAcp6ELAN9ZwXzP%2B5V0Ryq%2FrOn0mtVjfr%2FUItLLeyVcQMG%2BzR4Bg7GYnjRaJ7A9PGsvm5k%2BMAoUZKA6rYX2kNP2%2FxlbwJ7G4gPxFM66jU%2F3GcK8cuqpfNQndPSeNWl0uga%2BLEozRQTTh2ek%2FVAXQQpbbNZ2ZO%2BiBjtpcB4pJfkHPIIlpJyoXAXJWpwbx2%2FGv4sBZOTd0Fr6bAcx9wIYHwpTl%2FSWlpUQuiVaKv5%2Fow%2BffRygY6pgHFNk12NvmAC1cemH89ZiWFwYTE1KLeWB4MsHgJ6OWgAFVVTsb8IPNJ7yJEHjifGkRp0vxl%2FTqyLFOR%2BStFLrswP2yM%2FP9Mg%2Be5KhU5k42LQMy8IHHKnI8xBXHet1dcOUUkp7Pgsd818seBnfqo6qUaPnJdXgNilvNQSMh59oKfw7DQqYdaPzlP8CPl%2BYNaP8o%2BBMtvlgqtS1yl%2BEiNoj10l1f4jQlH&X-Amz-Signature=544710a0b01d4f4d74027a51c392fa90a96dbd99083d9ba7b0c82a2eeaef1390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSDGTYF%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvmj%2BEEmpIEx6rSEO3krCDEnAtHCDZH3%2BHd5Qze5HzIAiA%2Bd8HMWgqCMkInSdGQVfvzHnTTQNCcDD2JSDg%2BhNiAxSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIok5WN%2BDvi%2FArkYJKtwDjibV5%2B2pckCakesk5vxD1WiorpOimW5s0kva9zWkyNpXLTRdGa%2FAhu%2FpleqEiZURbg5BBShlqsCUrIeZIfM2leLzMdPXdqrkAunw36XbX%2BxaacfufHLvtCSPyGCAim1hqtjjpedxC4MH1U8uques5Rcxr2chs1teO1yXm3kQpvmpy8g7PkIc%2F3iOEFq156LpvXPQQdwrTpbHkFl6omyfzmykmPQZXMnDnrlZey%2BeshmaDIjvQJweVRerGV9cbsiYGeDmoubwt9w07W9uKO67mhUGpZsBw46fwQAvmCjD%2BsDXpkYDaavkYNTtJkondz9vWZ4NZeIfLR8A6D4YzsLiPMrmpsN6yFuwbac3nhnqU0rE%2B1wQJv98l2fEMNqAozVzTby%2B%2FM%2FbUNkmRS5O%2BLnhAcp6ELAN9ZwXzP%2B5V0Ryq%2FrOn0mtVjfr%2FUItLLeyVcQMG%2BzR4Bg7GYnjRaJ7A9PGsvm5k%2BMAoUZKA6rYX2kNP2%2FxlbwJ7G4gPxFM66jU%2F3GcK8cuqpfNQndPSeNWl0uga%2BLEozRQTTh2ek%2FVAXQQpbbNZ2ZO%2BiBjtpcB4pJfkHPIIlpJyoXAXJWpwbx2%2FGv4sBZOTd0Fr6bAcx9wIYHwpTl%2FSWlpUQuiVaKv5%2Fow%2BffRygY6pgHFNk12NvmAC1cemH89ZiWFwYTE1KLeWB4MsHgJ6OWgAFVVTsb8IPNJ7yJEHjifGkRp0vxl%2FTqyLFOR%2BStFLrswP2yM%2FP9Mg%2Be5KhU5k42LQMy8IHHKnI8xBXHet1dcOUUkp7Pgsd818seBnfqo6qUaPnJdXgNilvNQSMh59oKfw7DQqYdaPzlP8CPl%2BYNaP8o%2BBMtvlgqtS1yl%2BEiNoj10l1f4jQlH&X-Amz-Signature=26cc54de9f73577011c23ea75ea1a9e968d74875892ff612b7d9801e4495a3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSDGTYF%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvmj%2BEEmpIEx6rSEO3krCDEnAtHCDZH3%2BHd5Qze5HzIAiA%2Bd8HMWgqCMkInSdGQVfvzHnTTQNCcDD2JSDg%2BhNiAxSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIok5WN%2BDvi%2FArkYJKtwDjibV5%2B2pckCakesk5vxD1WiorpOimW5s0kva9zWkyNpXLTRdGa%2FAhu%2FpleqEiZURbg5BBShlqsCUrIeZIfM2leLzMdPXdqrkAunw36XbX%2BxaacfufHLvtCSPyGCAim1hqtjjpedxC4MH1U8uques5Rcxr2chs1teO1yXm3kQpvmpy8g7PkIc%2F3iOEFq156LpvXPQQdwrTpbHkFl6omyfzmykmPQZXMnDnrlZey%2BeshmaDIjvQJweVRerGV9cbsiYGeDmoubwt9w07W9uKO67mhUGpZsBw46fwQAvmCjD%2BsDXpkYDaavkYNTtJkondz9vWZ4NZeIfLR8A6D4YzsLiPMrmpsN6yFuwbac3nhnqU0rE%2B1wQJv98l2fEMNqAozVzTby%2B%2FM%2FbUNkmRS5O%2BLnhAcp6ELAN9ZwXzP%2B5V0Ryq%2FrOn0mtVjfr%2FUItLLeyVcQMG%2BzR4Bg7GYnjRaJ7A9PGsvm5k%2BMAoUZKA6rYX2kNP2%2FxlbwJ7G4gPxFM66jU%2F3GcK8cuqpfNQndPSeNWl0uga%2BLEozRQTTh2ek%2FVAXQQpbbNZ2ZO%2BiBjtpcB4pJfkHPIIlpJyoXAXJWpwbx2%2FGv4sBZOTd0Fr6bAcx9wIYHwpTl%2FSWlpUQuiVaKv5%2Fow%2BffRygY6pgHFNk12NvmAC1cemH89ZiWFwYTE1KLeWB4MsHgJ6OWgAFVVTsb8IPNJ7yJEHjifGkRp0vxl%2FTqyLFOR%2BStFLrswP2yM%2FP9Mg%2Be5KhU5k42LQMy8IHHKnI8xBXHet1dcOUUkp7Pgsd818seBnfqo6qUaPnJdXgNilvNQSMh59oKfw7DQqYdaPzlP8CPl%2BYNaP8o%2BBMtvlgqtS1yl%2BEiNoj10l1f4jQlH&X-Amz-Signature=2023af89a34dfb0dece2ce0ad6792f07595ed653956d7759b0c3ea90bc3729a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSDGTYF%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvmj%2BEEmpIEx6rSEO3krCDEnAtHCDZH3%2BHd5Qze5HzIAiA%2Bd8HMWgqCMkInSdGQVfvzHnTTQNCcDD2JSDg%2BhNiAxSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIok5WN%2BDvi%2FArkYJKtwDjibV5%2B2pckCakesk5vxD1WiorpOimW5s0kva9zWkyNpXLTRdGa%2FAhu%2FpleqEiZURbg5BBShlqsCUrIeZIfM2leLzMdPXdqrkAunw36XbX%2BxaacfufHLvtCSPyGCAim1hqtjjpedxC4MH1U8uques5Rcxr2chs1teO1yXm3kQpvmpy8g7PkIc%2F3iOEFq156LpvXPQQdwrTpbHkFl6omyfzmykmPQZXMnDnrlZey%2BeshmaDIjvQJweVRerGV9cbsiYGeDmoubwt9w07W9uKO67mhUGpZsBw46fwQAvmCjD%2BsDXpkYDaavkYNTtJkondz9vWZ4NZeIfLR8A6D4YzsLiPMrmpsN6yFuwbac3nhnqU0rE%2B1wQJv98l2fEMNqAozVzTby%2B%2FM%2FbUNkmRS5O%2BLnhAcp6ELAN9ZwXzP%2B5V0Ryq%2FrOn0mtVjfr%2FUItLLeyVcQMG%2BzR4Bg7GYnjRaJ7A9PGsvm5k%2BMAoUZKA6rYX2kNP2%2FxlbwJ7G4gPxFM66jU%2F3GcK8cuqpfNQndPSeNWl0uga%2BLEozRQTTh2ek%2FVAXQQpbbNZ2ZO%2BiBjtpcB4pJfkHPIIlpJyoXAXJWpwbx2%2FGv4sBZOTd0Fr6bAcx9wIYHwpTl%2FSWlpUQuiVaKv5%2Fow%2BffRygY6pgHFNk12NvmAC1cemH89ZiWFwYTE1KLeWB4MsHgJ6OWgAFVVTsb8IPNJ7yJEHjifGkRp0vxl%2FTqyLFOR%2BStFLrswP2yM%2FP9Mg%2Be5KhU5k42LQMy8IHHKnI8xBXHet1dcOUUkp7Pgsd818seBnfqo6qUaPnJdXgNilvNQSMh59oKfw7DQqYdaPzlP8CPl%2BYNaP8o%2BBMtvlgqtS1yl%2BEiNoj10l1f4jQlH&X-Amz-Signature=cbec3a1417c3f02d53c1e356a6932f63b8318b62c09ea072069b017f90c58bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSDGTYF%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvmj%2BEEmpIEx6rSEO3krCDEnAtHCDZH3%2BHd5Qze5HzIAiA%2Bd8HMWgqCMkInSdGQVfvzHnTTQNCcDD2JSDg%2BhNiAxSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIok5WN%2BDvi%2FArkYJKtwDjibV5%2B2pckCakesk5vxD1WiorpOimW5s0kva9zWkyNpXLTRdGa%2FAhu%2FpleqEiZURbg5BBShlqsCUrIeZIfM2leLzMdPXdqrkAunw36XbX%2BxaacfufHLvtCSPyGCAim1hqtjjpedxC4MH1U8uques5Rcxr2chs1teO1yXm3kQpvmpy8g7PkIc%2F3iOEFq156LpvXPQQdwrTpbHkFl6omyfzmykmPQZXMnDnrlZey%2BeshmaDIjvQJweVRerGV9cbsiYGeDmoubwt9w07W9uKO67mhUGpZsBw46fwQAvmCjD%2BsDXpkYDaavkYNTtJkondz9vWZ4NZeIfLR8A6D4YzsLiPMrmpsN6yFuwbac3nhnqU0rE%2B1wQJv98l2fEMNqAozVzTby%2B%2FM%2FbUNkmRS5O%2BLnhAcp6ELAN9ZwXzP%2B5V0Ryq%2FrOn0mtVjfr%2FUItLLeyVcQMG%2BzR4Bg7GYnjRaJ7A9PGsvm5k%2BMAoUZKA6rYX2kNP2%2FxlbwJ7G4gPxFM66jU%2F3GcK8cuqpfNQndPSeNWl0uga%2BLEozRQTTh2ek%2FVAXQQpbbNZ2ZO%2BiBjtpcB4pJfkHPIIlpJyoXAXJWpwbx2%2FGv4sBZOTd0Fr6bAcx9wIYHwpTl%2FSWlpUQuiVaKv5%2Fow%2BffRygY6pgHFNk12NvmAC1cemH89ZiWFwYTE1KLeWB4MsHgJ6OWgAFVVTsb8IPNJ7yJEHjifGkRp0vxl%2FTqyLFOR%2BStFLrswP2yM%2FP9Mg%2Be5KhU5k42LQMy8IHHKnI8xBXHet1dcOUUkp7Pgsd818seBnfqo6qUaPnJdXgNilvNQSMh59oKfw7DQqYdaPzlP8CPl%2BYNaP8o%2BBMtvlgqtS1yl%2BEiNoj10l1f4jQlH&X-Amz-Signature=c7f6cd4ba7f9e0ab16ceb9e351c3ea76dd910dc8ea42330266369aff65cd42af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSDGTYF%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvmj%2BEEmpIEx6rSEO3krCDEnAtHCDZH3%2BHd5Qze5HzIAiA%2Bd8HMWgqCMkInSdGQVfvzHnTTQNCcDD2JSDg%2BhNiAxSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIok5WN%2BDvi%2FArkYJKtwDjibV5%2B2pckCakesk5vxD1WiorpOimW5s0kva9zWkyNpXLTRdGa%2FAhu%2FpleqEiZURbg5BBShlqsCUrIeZIfM2leLzMdPXdqrkAunw36XbX%2BxaacfufHLvtCSPyGCAim1hqtjjpedxC4MH1U8uques5Rcxr2chs1teO1yXm3kQpvmpy8g7PkIc%2F3iOEFq156LpvXPQQdwrTpbHkFl6omyfzmykmPQZXMnDnrlZey%2BeshmaDIjvQJweVRerGV9cbsiYGeDmoubwt9w07W9uKO67mhUGpZsBw46fwQAvmCjD%2BsDXpkYDaavkYNTtJkondz9vWZ4NZeIfLR8A6D4YzsLiPMrmpsN6yFuwbac3nhnqU0rE%2B1wQJv98l2fEMNqAozVzTby%2B%2FM%2FbUNkmRS5O%2BLnhAcp6ELAN9ZwXzP%2B5V0Ryq%2FrOn0mtVjfr%2FUItLLeyVcQMG%2BzR4Bg7GYnjRaJ7A9PGsvm5k%2BMAoUZKA6rYX2kNP2%2FxlbwJ7G4gPxFM66jU%2F3GcK8cuqpfNQndPSeNWl0uga%2BLEozRQTTh2ek%2FVAXQQpbbNZ2ZO%2BiBjtpcB4pJfkHPIIlpJyoXAXJWpwbx2%2FGv4sBZOTd0Fr6bAcx9wIYHwpTl%2FSWlpUQuiVaKv5%2Fow%2BffRygY6pgHFNk12NvmAC1cemH89ZiWFwYTE1KLeWB4MsHgJ6OWgAFVVTsb8IPNJ7yJEHjifGkRp0vxl%2FTqyLFOR%2BStFLrswP2yM%2FP9Mg%2Be5KhU5k42LQMy8IHHKnI8xBXHet1dcOUUkp7Pgsd818seBnfqo6qUaPnJdXgNilvNQSMh59oKfw7DQqYdaPzlP8CPl%2BYNaP8o%2BBMtvlgqtS1yl%2BEiNoj10l1f4jQlH&X-Amz-Signature=9867cbe3aadb18ddc4af8160278e8ca5483f1acef57d4dd2f2e786614e77427a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSDGTYF%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvmj%2BEEmpIEx6rSEO3krCDEnAtHCDZH3%2BHd5Qze5HzIAiA%2Bd8HMWgqCMkInSdGQVfvzHnTTQNCcDD2JSDg%2BhNiAxSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIok5WN%2BDvi%2FArkYJKtwDjibV5%2B2pckCakesk5vxD1WiorpOimW5s0kva9zWkyNpXLTRdGa%2FAhu%2FpleqEiZURbg5BBShlqsCUrIeZIfM2leLzMdPXdqrkAunw36XbX%2BxaacfufHLvtCSPyGCAim1hqtjjpedxC4MH1U8uques5Rcxr2chs1teO1yXm3kQpvmpy8g7PkIc%2F3iOEFq156LpvXPQQdwrTpbHkFl6omyfzmykmPQZXMnDnrlZey%2BeshmaDIjvQJweVRerGV9cbsiYGeDmoubwt9w07W9uKO67mhUGpZsBw46fwQAvmCjD%2BsDXpkYDaavkYNTtJkondz9vWZ4NZeIfLR8A6D4YzsLiPMrmpsN6yFuwbac3nhnqU0rE%2B1wQJv98l2fEMNqAozVzTby%2B%2FM%2FbUNkmRS5O%2BLnhAcp6ELAN9ZwXzP%2B5V0Ryq%2FrOn0mtVjfr%2FUItLLeyVcQMG%2BzR4Bg7GYnjRaJ7A9PGsvm5k%2BMAoUZKA6rYX2kNP2%2FxlbwJ7G4gPxFM66jU%2F3GcK8cuqpfNQndPSeNWl0uga%2BLEozRQTTh2ek%2FVAXQQpbbNZ2ZO%2BiBjtpcB4pJfkHPIIlpJyoXAXJWpwbx2%2FGv4sBZOTd0Fr6bAcx9wIYHwpTl%2FSWlpUQuiVaKv5%2Fow%2BffRygY6pgHFNk12NvmAC1cemH89ZiWFwYTE1KLeWB4MsHgJ6OWgAFVVTsb8IPNJ7yJEHjifGkRp0vxl%2FTqyLFOR%2BStFLrswP2yM%2FP9Mg%2Be5KhU5k42LQMy8IHHKnI8xBXHet1dcOUUkp7Pgsd818seBnfqo6qUaPnJdXgNilvNQSMh59oKfw7DQqYdaPzlP8CPl%2BYNaP8o%2BBMtvlgqtS1yl%2BEiNoj10l1f4jQlH&X-Amz-Signature=762017ae28541ac3dac9cacdf20be4e0158f8cc888b84b06aa964f167ba25ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

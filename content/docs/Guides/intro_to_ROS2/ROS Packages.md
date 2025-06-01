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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDE3UIUW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDDni3nFehx%2F1Q1BLWlnivA%2BLjwPLgOyctooo850HnzCgIgdhAmI9QbzmlsR5204GXxU3UKOjQpIAqqVKYGaBds8OMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG8DgtIzCBqyPO4%2BircAzHD9RGrrgQonwksRl30TptRGUxo5ylrWxmbS2Kv8FW2TW17FwKt4FmTCo1ZSWAvFmdi%2F1iqvrB92ctdRjhh9wf2gjuL6dM9FnTOtTJZfpH8Re9Sse659%2BRhNUBisUQF%2B766mC1H%2BYjUVew2BMJY7N9YRMuT0N%2FoGyYjSdG7PHVeYK4rR6H5Uxgdm%2BMpGYgTwBjuI2zmDU5IxrXWATnyfeSvVoDr72o1gwQgsRyE2%2FkSuLCi1w1sb8eLQm%2BDVNyDNqCvEKnKHyumakpYJsb03%2BaLWJQZKSFfd1rhtCHaqK0M9%2BVkc%2Fsk%2BNGyR4OlZqOhYEDXKH6H%2FfkU1pH3EDk8JKa5%2FDKwPjTrU4xo11Y2nFjf0f68DP88N8UUJrR%2B7WJdfNa4eUZwHewuUTfcl3oF2ZVMbjwpW1uU8HEl2lr5x6hngnonkZgyLrEWqtUbBNV1fRvTdQTn9YVPdBXBr6rBAN0czlS4al6lcbW0x4K57C85K0OMBdcw9NCQYbpzyXKzbzsfnaa1nrpdJaw52cAaXSRblDyr9B1rsuPHddyRbeBV%2FpIXQumLGQhJj0MDR8bgQ1S4Qr4nPRRVDtF03%2FVzkGtsppahUL%2B5QSLec1NW3nBLGvV0t35m9UhjrCdmMJio8sEGOqUBPr%2FY96ax2gCpBLowzBPJlR%2BbWobURbNs3lpMT7ZTfLICx8KryHC%2B4c2x78pAcNiUtPyDZ3PiCk7jeQhv3kQCZ%2FKyJUTaCzhjgBVlTE7QoMUyQvCv1jaQA%2FxaoJu6mxoxk%2BPwE6zwpv6cvW5WhYQHtbv1yHlI5XaueEwQMXFlTK16L9mQo5UMuLoDdf%2BQJ2AIMZoJuIPJ05xF98W%2FhmVid0OGiW22&X-Amz-Signature=1d3aa49ef050cec1a68ebce6fdc5114349632c23d663b4e1d355643c0f7b400f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDE3UIUW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDDni3nFehx%2F1Q1BLWlnivA%2BLjwPLgOyctooo850HnzCgIgdhAmI9QbzmlsR5204GXxU3UKOjQpIAqqVKYGaBds8OMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG8DgtIzCBqyPO4%2BircAzHD9RGrrgQonwksRl30TptRGUxo5ylrWxmbS2Kv8FW2TW17FwKt4FmTCo1ZSWAvFmdi%2F1iqvrB92ctdRjhh9wf2gjuL6dM9FnTOtTJZfpH8Re9Sse659%2BRhNUBisUQF%2B766mC1H%2BYjUVew2BMJY7N9YRMuT0N%2FoGyYjSdG7PHVeYK4rR6H5Uxgdm%2BMpGYgTwBjuI2zmDU5IxrXWATnyfeSvVoDr72o1gwQgsRyE2%2FkSuLCi1w1sb8eLQm%2BDVNyDNqCvEKnKHyumakpYJsb03%2BaLWJQZKSFfd1rhtCHaqK0M9%2BVkc%2Fsk%2BNGyR4OlZqOhYEDXKH6H%2FfkU1pH3EDk8JKa5%2FDKwPjTrU4xo11Y2nFjf0f68DP88N8UUJrR%2B7WJdfNa4eUZwHewuUTfcl3oF2ZVMbjwpW1uU8HEl2lr5x6hngnonkZgyLrEWqtUbBNV1fRvTdQTn9YVPdBXBr6rBAN0czlS4al6lcbW0x4K57C85K0OMBdcw9NCQYbpzyXKzbzsfnaa1nrpdJaw52cAaXSRblDyr9B1rsuPHddyRbeBV%2FpIXQumLGQhJj0MDR8bgQ1S4Qr4nPRRVDtF03%2FVzkGtsppahUL%2B5QSLec1NW3nBLGvV0t35m9UhjrCdmMJio8sEGOqUBPr%2FY96ax2gCpBLowzBPJlR%2BbWobURbNs3lpMT7ZTfLICx8KryHC%2B4c2x78pAcNiUtPyDZ3PiCk7jeQhv3kQCZ%2FKyJUTaCzhjgBVlTE7QoMUyQvCv1jaQA%2FxaoJu6mxoxk%2BPwE6zwpv6cvW5WhYQHtbv1yHlI5XaueEwQMXFlTK16L9mQo5UMuLoDdf%2BQJ2AIMZoJuIPJ05xF98W%2FhmVid0OGiW22&X-Amz-Signature=b27ab75d6c26981a8424b287cd6ab132395d9f9a2645e356ccdd81f0e0968494&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDE3UIUW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDDni3nFehx%2F1Q1BLWlnivA%2BLjwPLgOyctooo850HnzCgIgdhAmI9QbzmlsR5204GXxU3UKOjQpIAqqVKYGaBds8OMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG8DgtIzCBqyPO4%2BircAzHD9RGrrgQonwksRl30TptRGUxo5ylrWxmbS2Kv8FW2TW17FwKt4FmTCo1ZSWAvFmdi%2F1iqvrB92ctdRjhh9wf2gjuL6dM9FnTOtTJZfpH8Re9Sse659%2BRhNUBisUQF%2B766mC1H%2BYjUVew2BMJY7N9YRMuT0N%2FoGyYjSdG7PHVeYK4rR6H5Uxgdm%2BMpGYgTwBjuI2zmDU5IxrXWATnyfeSvVoDr72o1gwQgsRyE2%2FkSuLCi1w1sb8eLQm%2BDVNyDNqCvEKnKHyumakpYJsb03%2BaLWJQZKSFfd1rhtCHaqK0M9%2BVkc%2Fsk%2BNGyR4OlZqOhYEDXKH6H%2FfkU1pH3EDk8JKa5%2FDKwPjTrU4xo11Y2nFjf0f68DP88N8UUJrR%2B7WJdfNa4eUZwHewuUTfcl3oF2ZVMbjwpW1uU8HEl2lr5x6hngnonkZgyLrEWqtUbBNV1fRvTdQTn9YVPdBXBr6rBAN0czlS4al6lcbW0x4K57C85K0OMBdcw9NCQYbpzyXKzbzsfnaa1nrpdJaw52cAaXSRblDyr9B1rsuPHddyRbeBV%2FpIXQumLGQhJj0MDR8bgQ1S4Qr4nPRRVDtF03%2FVzkGtsppahUL%2B5QSLec1NW3nBLGvV0t35m9UhjrCdmMJio8sEGOqUBPr%2FY96ax2gCpBLowzBPJlR%2BbWobURbNs3lpMT7ZTfLICx8KryHC%2B4c2x78pAcNiUtPyDZ3PiCk7jeQhv3kQCZ%2FKyJUTaCzhjgBVlTE7QoMUyQvCv1jaQA%2FxaoJu6mxoxk%2BPwE6zwpv6cvW5WhYQHtbv1yHlI5XaueEwQMXFlTK16L9mQo5UMuLoDdf%2BQJ2AIMZoJuIPJ05xF98W%2FhmVid0OGiW22&X-Amz-Signature=fbf4839757a8786bd82fad2b4b36b57bd540f4a58cda3849cd51fdbbbd187982&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDE3UIUW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDDni3nFehx%2F1Q1BLWlnivA%2BLjwPLgOyctooo850HnzCgIgdhAmI9QbzmlsR5204GXxU3UKOjQpIAqqVKYGaBds8OMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG8DgtIzCBqyPO4%2BircAzHD9RGrrgQonwksRl30TptRGUxo5ylrWxmbS2Kv8FW2TW17FwKt4FmTCo1ZSWAvFmdi%2F1iqvrB92ctdRjhh9wf2gjuL6dM9FnTOtTJZfpH8Re9Sse659%2BRhNUBisUQF%2B766mC1H%2BYjUVew2BMJY7N9YRMuT0N%2FoGyYjSdG7PHVeYK4rR6H5Uxgdm%2BMpGYgTwBjuI2zmDU5IxrXWATnyfeSvVoDr72o1gwQgsRyE2%2FkSuLCi1w1sb8eLQm%2BDVNyDNqCvEKnKHyumakpYJsb03%2BaLWJQZKSFfd1rhtCHaqK0M9%2BVkc%2Fsk%2BNGyR4OlZqOhYEDXKH6H%2FfkU1pH3EDk8JKa5%2FDKwPjTrU4xo11Y2nFjf0f68DP88N8UUJrR%2B7WJdfNa4eUZwHewuUTfcl3oF2ZVMbjwpW1uU8HEl2lr5x6hngnonkZgyLrEWqtUbBNV1fRvTdQTn9YVPdBXBr6rBAN0czlS4al6lcbW0x4K57C85K0OMBdcw9NCQYbpzyXKzbzsfnaa1nrpdJaw52cAaXSRblDyr9B1rsuPHddyRbeBV%2FpIXQumLGQhJj0MDR8bgQ1S4Qr4nPRRVDtF03%2FVzkGtsppahUL%2B5QSLec1NW3nBLGvV0t35m9UhjrCdmMJio8sEGOqUBPr%2FY96ax2gCpBLowzBPJlR%2BbWobURbNs3lpMT7ZTfLICx8KryHC%2B4c2x78pAcNiUtPyDZ3PiCk7jeQhv3kQCZ%2FKyJUTaCzhjgBVlTE7QoMUyQvCv1jaQA%2FxaoJu6mxoxk%2BPwE6zwpv6cvW5WhYQHtbv1yHlI5XaueEwQMXFlTK16L9mQo5UMuLoDdf%2BQJ2AIMZoJuIPJ05xF98W%2FhmVid0OGiW22&X-Amz-Signature=61f126d578129ef386fff2cf3a379697c6f6c984fa8f09b0328f640f29bc2156&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDE3UIUW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDDni3nFehx%2F1Q1BLWlnivA%2BLjwPLgOyctooo850HnzCgIgdhAmI9QbzmlsR5204GXxU3UKOjQpIAqqVKYGaBds8OMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG8DgtIzCBqyPO4%2BircAzHD9RGrrgQonwksRl30TptRGUxo5ylrWxmbS2Kv8FW2TW17FwKt4FmTCo1ZSWAvFmdi%2F1iqvrB92ctdRjhh9wf2gjuL6dM9FnTOtTJZfpH8Re9Sse659%2BRhNUBisUQF%2B766mC1H%2BYjUVew2BMJY7N9YRMuT0N%2FoGyYjSdG7PHVeYK4rR6H5Uxgdm%2BMpGYgTwBjuI2zmDU5IxrXWATnyfeSvVoDr72o1gwQgsRyE2%2FkSuLCi1w1sb8eLQm%2BDVNyDNqCvEKnKHyumakpYJsb03%2BaLWJQZKSFfd1rhtCHaqK0M9%2BVkc%2Fsk%2BNGyR4OlZqOhYEDXKH6H%2FfkU1pH3EDk8JKa5%2FDKwPjTrU4xo11Y2nFjf0f68DP88N8UUJrR%2B7WJdfNa4eUZwHewuUTfcl3oF2ZVMbjwpW1uU8HEl2lr5x6hngnonkZgyLrEWqtUbBNV1fRvTdQTn9YVPdBXBr6rBAN0czlS4al6lcbW0x4K57C85K0OMBdcw9NCQYbpzyXKzbzsfnaa1nrpdJaw52cAaXSRblDyr9B1rsuPHddyRbeBV%2FpIXQumLGQhJj0MDR8bgQ1S4Qr4nPRRVDtF03%2FVzkGtsppahUL%2B5QSLec1NW3nBLGvV0t35m9UhjrCdmMJio8sEGOqUBPr%2FY96ax2gCpBLowzBPJlR%2BbWobURbNs3lpMT7ZTfLICx8KryHC%2B4c2x78pAcNiUtPyDZ3PiCk7jeQhv3kQCZ%2FKyJUTaCzhjgBVlTE7QoMUyQvCv1jaQA%2FxaoJu6mxoxk%2BPwE6zwpv6cvW5WhYQHtbv1yHlI5XaueEwQMXFlTK16L9mQo5UMuLoDdf%2BQJ2AIMZoJuIPJ05xF98W%2FhmVid0OGiW22&X-Amz-Signature=893a5c32a800511d33993c8cc80d64f128970031d593a12d92a702490593e5cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDE3UIUW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDDni3nFehx%2F1Q1BLWlnivA%2BLjwPLgOyctooo850HnzCgIgdhAmI9QbzmlsR5204GXxU3UKOjQpIAqqVKYGaBds8OMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG8DgtIzCBqyPO4%2BircAzHD9RGrrgQonwksRl30TptRGUxo5ylrWxmbS2Kv8FW2TW17FwKt4FmTCo1ZSWAvFmdi%2F1iqvrB92ctdRjhh9wf2gjuL6dM9FnTOtTJZfpH8Re9Sse659%2BRhNUBisUQF%2B766mC1H%2BYjUVew2BMJY7N9YRMuT0N%2FoGyYjSdG7PHVeYK4rR6H5Uxgdm%2BMpGYgTwBjuI2zmDU5IxrXWATnyfeSvVoDr72o1gwQgsRyE2%2FkSuLCi1w1sb8eLQm%2BDVNyDNqCvEKnKHyumakpYJsb03%2BaLWJQZKSFfd1rhtCHaqK0M9%2BVkc%2Fsk%2BNGyR4OlZqOhYEDXKH6H%2FfkU1pH3EDk8JKa5%2FDKwPjTrU4xo11Y2nFjf0f68DP88N8UUJrR%2B7WJdfNa4eUZwHewuUTfcl3oF2ZVMbjwpW1uU8HEl2lr5x6hngnonkZgyLrEWqtUbBNV1fRvTdQTn9YVPdBXBr6rBAN0czlS4al6lcbW0x4K57C85K0OMBdcw9NCQYbpzyXKzbzsfnaa1nrpdJaw52cAaXSRblDyr9B1rsuPHddyRbeBV%2FpIXQumLGQhJj0MDR8bgQ1S4Qr4nPRRVDtF03%2FVzkGtsppahUL%2B5QSLec1NW3nBLGvV0t35m9UhjrCdmMJio8sEGOqUBPr%2FY96ax2gCpBLowzBPJlR%2BbWobURbNs3lpMT7ZTfLICx8KryHC%2B4c2x78pAcNiUtPyDZ3PiCk7jeQhv3kQCZ%2FKyJUTaCzhjgBVlTE7QoMUyQvCv1jaQA%2FxaoJu6mxoxk%2BPwE6zwpv6cvW5WhYQHtbv1yHlI5XaueEwQMXFlTK16L9mQo5UMuLoDdf%2BQJ2AIMZoJuIPJ05xF98W%2FhmVid0OGiW22&X-Amz-Signature=b8f18e97c26132c29b3766bc2b1b1686655d284dfc733ff48a8695a8a3fd4b08&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDE3UIUW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDDni3nFehx%2F1Q1BLWlnivA%2BLjwPLgOyctooo850HnzCgIgdhAmI9QbzmlsR5204GXxU3UKOjQpIAqqVKYGaBds8OMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG8DgtIzCBqyPO4%2BircAzHD9RGrrgQonwksRl30TptRGUxo5ylrWxmbS2Kv8FW2TW17FwKt4FmTCo1ZSWAvFmdi%2F1iqvrB92ctdRjhh9wf2gjuL6dM9FnTOtTJZfpH8Re9Sse659%2BRhNUBisUQF%2B766mC1H%2BYjUVew2BMJY7N9YRMuT0N%2FoGyYjSdG7PHVeYK4rR6H5Uxgdm%2BMpGYgTwBjuI2zmDU5IxrXWATnyfeSvVoDr72o1gwQgsRyE2%2FkSuLCi1w1sb8eLQm%2BDVNyDNqCvEKnKHyumakpYJsb03%2BaLWJQZKSFfd1rhtCHaqK0M9%2BVkc%2Fsk%2BNGyR4OlZqOhYEDXKH6H%2FfkU1pH3EDk8JKa5%2FDKwPjTrU4xo11Y2nFjf0f68DP88N8UUJrR%2B7WJdfNa4eUZwHewuUTfcl3oF2ZVMbjwpW1uU8HEl2lr5x6hngnonkZgyLrEWqtUbBNV1fRvTdQTn9YVPdBXBr6rBAN0czlS4al6lcbW0x4K57C85K0OMBdcw9NCQYbpzyXKzbzsfnaa1nrpdJaw52cAaXSRblDyr9B1rsuPHddyRbeBV%2FpIXQumLGQhJj0MDR8bgQ1S4Qr4nPRRVDtF03%2FVzkGtsppahUL%2B5QSLec1NW3nBLGvV0t35m9UhjrCdmMJio8sEGOqUBPr%2FY96ax2gCpBLowzBPJlR%2BbWobURbNs3lpMT7ZTfLICx8KryHC%2B4c2x78pAcNiUtPyDZ3PiCk7jeQhv3kQCZ%2FKyJUTaCzhjgBVlTE7QoMUyQvCv1jaQA%2FxaoJu6mxoxk%2BPwE6zwpv6cvW5WhYQHtbv1yHlI5XaueEwQMXFlTK16L9mQo5UMuLoDdf%2BQJ2AIMZoJuIPJ05xF98W%2FhmVid0OGiW22&X-Amz-Signature=73dfce7c701d2d141cd7dd34b493c6a22fae1d8eee2e1862bef815c6bfa76993&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

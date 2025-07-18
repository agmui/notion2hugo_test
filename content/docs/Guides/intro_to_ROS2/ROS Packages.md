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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM3EVIC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHcsqecV%2BLlWTup7zI4QEYbJKeoOT3DcSQBREp0Ol7m9AiAPUghtGONxyoE%2BfbYlr61vGAQmzGPZSelCai6KCW6gTiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3i4iA6V5%2BEoiscZVKtwDxxEzs5gn1%2BTRZdsMdCEOOlJOqcGYFdapjZ%2BvQIQ4f5tRKIBTjg5vM2L3gOZSUlIjhcYiKGFsO7jAy3kCp3Gipa4pRp7DizPLNoRfAP8lX7L1mgjT98LFajgylr1bK9qgGCMe1jpUnq3DgkU2kO2eVS9QI%2B5L%2FT2n5yqPX%2BYEK2KSfC%2BSIgEvyUEHbrgAi0RZl1SIaJkdhkubiv6yLX8AUkGDv5ck1IyC%2BzJ6MF0qSwt9ZXu8FDs1beqEkVcLdp0YpFkT7XcU9ZeGIiEtaxUMYqR7TWEFswI%2BLMham%2FfVuxWOmTP3UQ45w4hoE0RpfP9JQkNLOq6aMD0KqzXxrK%2BITeqAxeB88rxHoLTbquHfNcPRyP10852czPAwBPbhq9%2B7xU9muiDbJGwV10UDpkJsm1btzIx0OAMDqmcWGw3Ms28dyy6cNZw37xbTZsgEz7vTlm2zLAaT1o65LkYH%2B7QhzkPT5qzfqU1W0boxGPJ49ucGAFVORVfnKW2pPf08xebVJ7oLiTlwJ4rMfnE0qa4OCa%2B%2BVFeokbVzVjtHhY2VXcAKITNdaoAOyHOBrv%2BoFx7jLY3n%2B7Th9GFyrtg%2FosuuGOPmtDS67o8NveuB8GJGZR8u4Il%2FcufAosv5XFUwmf7nwwY6pgELv6imrHHgLbjkoLoQKuXKtFM9emzgiwAGW72B5cRPv3A1wv2g6%2BkkUAYDaqiiO6x8474pmzv50gmEh1EtGUt68knMlpaNI92PLJXygJrHPa24ujHEyyat9WhM3j10oP%2FqHuT5OFBZ%2Fpsg2M81JvXvLejZis0jSyFWTjbg5VINxvyasiSCjiw2ZRVhH8yLJxSVbPrfmTZ1pd7DAKf9RGa0MuI93Apg&X-Amz-Signature=e6f7bbc96162553a112b9a79ece7c545523c40dfd5ec5b8bcbb1c4d7dcac4204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM3EVIC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHcsqecV%2BLlWTup7zI4QEYbJKeoOT3DcSQBREp0Ol7m9AiAPUghtGONxyoE%2BfbYlr61vGAQmzGPZSelCai6KCW6gTiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3i4iA6V5%2BEoiscZVKtwDxxEzs5gn1%2BTRZdsMdCEOOlJOqcGYFdapjZ%2BvQIQ4f5tRKIBTjg5vM2L3gOZSUlIjhcYiKGFsO7jAy3kCp3Gipa4pRp7DizPLNoRfAP8lX7L1mgjT98LFajgylr1bK9qgGCMe1jpUnq3DgkU2kO2eVS9QI%2B5L%2FT2n5yqPX%2BYEK2KSfC%2BSIgEvyUEHbrgAi0RZl1SIaJkdhkubiv6yLX8AUkGDv5ck1IyC%2BzJ6MF0qSwt9ZXu8FDs1beqEkVcLdp0YpFkT7XcU9ZeGIiEtaxUMYqR7TWEFswI%2BLMham%2FfVuxWOmTP3UQ45w4hoE0RpfP9JQkNLOq6aMD0KqzXxrK%2BITeqAxeB88rxHoLTbquHfNcPRyP10852czPAwBPbhq9%2B7xU9muiDbJGwV10UDpkJsm1btzIx0OAMDqmcWGw3Ms28dyy6cNZw37xbTZsgEz7vTlm2zLAaT1o65LkYH%2B7QhzkPT5qzfqU1W0boxGPJ49ucGAFVORVfnKW2pPf08xebVJ7oLiTlwJ4rMfnE0qa4OCa%2B%2BVFeokbVzVjtHhY2VXcAKITNdaoAOyHOBrv%2BoFx7jLY3n%2B7Th9GFyrtg%2FosuuGOPmtDS67o8NveuB8GJGZR8u4Il%2FcufAosv5XFUwmf7nwwY6pgELv6imrHHgLbjkoLoQKuXKtFM9emzgiwAGW72B5cRPv3A1wv2g6%2BkkUAYDaqiiO6x8474pmzv50gmEh1EtGUt68knMlpaNI92PLJXygJrHPa24ujHEyyat9WhM3j10oP%2FqHuT5OFBZ%2Fpsg2M81JvXvLejZis0jSyFWTjbg5VINxvyasiSCjiw2ZRVhH8yLJxSVbPrfmTZ1pd7DAKf9RGa0MuI93Apg&X-Amz-Signature=a32f318745e4a0104fe08248d76dda41e80dc01cf4e3d4fd3e1bef9b5fd5982f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM3EVIC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHcsqecV%2BLlWTup7zI4QEYbJKeoOT3DcSQBREp0Ol7m9AiAPUghtGONxyoE%2BfbYlr61vGAQmzGPZSelCai6KCW6gTiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3i4iA6V5%2BEoiscZVKtwDxxEzs5gn1%2BTRZdsMdCEOOlJOqcGYFdapjZ%2BvQIQ4f5tRKIBTjg5vM2L3gOZSUlIjhcYiKGFsO7jAy3kCp3Gipa4pRp7DizPLNoRfAP8lX7L1mgjT98LFajgylr1bK9qgGCMe1jpUnq3DgkU2kO2eVS9QI%2B5L%2FT2n5yqPX%2BYEK2KSfC%2BSIgEvyUEHbrgAi0RZl1SIaJkdhkubiv6yLX8AUkGDv5ck1IyC%2BzJ6MF0qSwt9ZXu8FDs1beqEkVcLdp0YpFkT7XcU9ZeGIiEtaxUMYqR7TWEFswI%2BLMham%2FfVuxWOmTP3UQ45w4hoE0RpfP9JQkNLOq6aMD0KqzXxrK%2BITeqAxeB88rxHoLTbquHfNcPRyP10852czPAwBPbhq9%2B7xU9muiDbJGwV10UDpkJsm1btzIx0OAMDqmcWGw3Ms28dyy6cNZw37xbTZsgEz7vTlm2zLAaT1o65LkYH%2B7QhzkPT5qzfqU1W0boxGPJ49ucGAFVORVfnKW2pPf08xebVJ7oLiTlwJ4rMfnE0qa4OCa%2B%2BVFeokbVzVjtHhY2VXcAKITNdaoAOyHOBrv%2BoFx7jLY3n%2B7Th9GFyrtg%2FosuuGOPmtDS67o8NveuB8GJGZR8u4Il%2FcufAosv5XFUwmf7nwwY6pgELv6imrHHgLbjkoLoQKuXKtFM9emzgiwAGW72B5cRPv3A1wv2g6%2BkkUAYDaqiiO6x8474pmzv50gmEh1EtGUt68knMlpaNI92PLJXygJrHPa24ujHEyyat9WhM3j10oP%2FqHuT5OFBZ%2Fpsg2M81JvXvLejZis0jSyFWTjbg5VINxvyasiSCjiw2ZRVhH8yLJxSVbPrfmTZ1pd7DAKf9RGa0MuI93Apg&X-Amz-Signature=c05de4a7ffd57bf3add8bc696943d2068274994f832ab53f0277999ed274fbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM3EVIC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHcsqecV%2BLlWTup7zI4QEYbJKeoOT3DcSQBREp0Ol7m9AiAPUghtGONxyoE%2BfbYlr61vGAQmzGPZSelCai6KCW6gTiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3i4iA6V5%2BEoiscZVKtwDxxEzs5gn1%2BTRZdsMdCEOOlJOqcGYFdapjZ%2BvQIQ4f5tRKIBTjg5vM2L3gOZSUlIjhcYiKGFsO7jAy3kCp3Gipa4pRp7DizPLNoRfAP8lX7L1mgjT98LFajgylr1bK9qgGCMe1jpUnq3DgkU2kO2eVS9QI%2B5L%2FT2n5yqPX%2BYEK2KSfC%2BSIgEvyUEHbrgAi0RZl1SIaJkdhkubiv6yLX8AUkGDv5ck1IyC%2BzJ6MF0qSwt9ZXu8FDs1beqEkVcLdp0YpFkT7XcU9ZeGIiEtaxUMYqR7TWEFswI%2BLMham%2FfVuxWOmTP3UQ45w4hoE0RpfP9JQkNLOq6aMD0KqzXxrK%2BITeqAxeB88rxHoLTbquHfNcPRyP10852czPAwBPbhq9%2B7xU9muiDbJGwV10UDpkJsm1btzIx0OAMDqmcWGw3Ms28dyy6cNZw37xbTZsgEz7vTlm2zLAaT1o65LkYH%2B7QhzkPT5qzfqU1W0boxGPJ49ucGAFVORVfnKW2pPf08xebVJ7oLiTlwJ4rMfnE0qa4OCa%2B%2BVFeokbVzVjtHhY2VXcAKITNdaoAOyHOBrv%2BoFx7jLY3n%2B7Th9GFyrtg%2FosuuGOPmtDS67o8NveuB8GJGZR8u4Il%2FcufAosv5XFUwmf7nwwY6pgELv6imrHHgLbjkoLoQKuXKtFM9emzgiwAGW72B5cRPv3A1wv2g6%2BkkUAYDaqiiO6x8474pmzv50gmEh1EtGUt68knMlpaNI92PLJXygJrHPa24ujHEyyat9WhM3j10oP%2FqHuT5OFBZ%2Fpsg2M81JvXvLejZis0jSyFWTjbg5VINxvyasiSCjiw2ZRVhH8yLJxSVbPrfmTZ1pd7DAKf9RGa0MuI93Apg&X-Amz-Signature=f0bad2233c3341864a9cfc6b9452c3690a48d4f872065ea3b3acbf9ee4fa6f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM3EVIC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHcsqecV%2BLlWTup7zI4QEYbJKeoOT3DcSQBREp0Ol7m9AiAPUghtGONxyoE%2BfbYlr61vGAQmzGPZSelCai6KCW6gTiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3i4iA6V5%2BEoiscZVKtwDxxEzs5gn1%2BTRZdsMdCEOOlJOqcGYFdapjZ%2BvQIQ4f5tRKIBTjg5vM2L3gOZSUlIjhcYiKGFsO7jAy3kCp3Gipa4pRp7DizPLNoRfAP8lX7L1mgjT98LFajgylr1bK9qgGCMe1jpUnq3DgkU2kO2eVS9QI%2B5L%2FT2n5yqPX%2BYEK2KSfC%2BSIgEvyUEHbrgAi0RZl1SIaJkdhkubiv6yLX8AUkGDv5ck1IyC%2BzJ6MF0qSwt9ZXu8FDs1beqEkVcLdp0YpFkT7XcU9ZeGIiEtaxUMYqR7TWEFswI%2BLMham%2FfVuxWOmTP3UQ45w4hoE0RpfP9JQkNLOq6aMD0KqzXxrK%2BITeqAxeB88rxHoLTbquHfNcPRyP10852czPAwBPbhq9%2B7xU9muiDbJGwV10UDpkJsm1btzIx0OAMDqmcWGw3Ms28dyy6cNZw37xbTZsgEz7vTlm2zLAaT1o65LkYH%2B7QhzkPT5qzfqU1W0boxGPJ49ucGAFVORVfnKW2pPf08xebVJ7oLiTlwJ4rMfnE0qa4OCa%2B%2BVFeokbVzVjtHhY2VXcAKITNdaoAOyHOBrv%2BoFx7jLY3n%2B7Th9GFyrtg%2FosuuGOPmtDS67o8NveuB8GJGZR8u4Il%2FcufAosv5XFUwmf7nwwY6pgELv6imrHHgLbjkoLoQKuXKtFM9emzgiwAGW72B5cRPv3A1wv2g6%2BkkUAYDaqiiO6x8474pmzv50gmEh1EtGUt68knMlpaNI92PLJXygJrHPa24ujHEyyat9WhM3j10oP%2FqHuT5OFBZ%2Fpsg2M81JvXvLejZis0jSyFWTjbg5VINxvyasiSCjiw2ZRVhH8yLJxSVbPrfmTZ1pd7DAKf9RGa0MuI93Apg&X-Amz-Signature=42125737fe9bde1686f6346b7ddd53fb7b2cf444c18040efd6e0944908704910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM3EVIC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHcsqecV%2BLlWTup7zI4QEYbJKeoOT3DcSQBREp0Ol7m9AiAPUghtGONxyoE%2BfbYlr61vGAQmzGPZSelCai6KCW6gTiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3i4iA6V5%2BEoiscZVKtwDxxEzs5gn1%2BTRZdsMdCEOOlJOqcGYFdapjZ%2BvQIQ4f5tRKIBTjg5vM2L3gOZSUlIjhcYiKGFsO7jAy3kCp3Gipa4pRp7DizPLNoRfAP8lX7L1mgjT98LFajgylr1bK9qgGCMe1jpUnq3DgkU2kO2eVS9QI%2B5L%2FT2n5yqPX%2BYEK2KSfC%2BSIgEvyUEHbrgAi0RZl1SIaJkdhkubiv6yLX8AUkGDv5ck1IyC%2BzJ6MF0qSwt9ZXu8FDs1beqEkVcLdp0YpFkT7XcU9ZeGIiEtaxUMYqR7TWEFswI%2BLMham%2FfVuxWOmTP3UQ45w4hoE0RpfP9JQkNLOq6aMD0KqzXxrK%2BITeqAxeB88rxHoLTbquHfNcPRyP10852czPAwBPbhq9%2B7xU9muiDbJGwV10UDpkJsm1btzIx0OAMDqmcWGw3Ms28dyy6cNZw37xbTZsgEz7vTlm2zLAaT1o65LkYH%2B7QhzkPT5qzfqU1W0boxGPJ49ucGAFVORVfnKW2pPf08xebVJ7oLiTlwJ4rMfnE0qa4OCa%2B%2BVFeokbVzVjtHhY2VXcAKITNdaoAOyHOBrv%2BoFx7jLY3n%2B7Th9GFyrtg%2FosuuGOPmtDS67o8NveuB8GJGZR8u4Il%2FcufAosv5XFUwmf7nwwY6pgELv6imrHHgLbjkoLoQKuXKtFM9emzgiwAGW72B5cRPv3A1wv2g6%2BkkUAYDaqiiO6x8474pmzv50gmEh1EtGUt68knMlpaNI92PLJXygJrHPa24ujHEyyat9WhM3j10oP%2FqHuT5OFBZ%2Fpsg2M81JvXvLejZis0jSyFWTjbg5VINxvyasiSCjiw2ZRVhH8yLJxSVbPrfmTZ1pd7DAKf9RGa0MuI93Apg&X-Amz-Signature=47d237d0e561978988dc9cc0a0dbadb32bcbc415f060c423ab149f205107d30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM3EVIC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHcsqecV%2BLlWTup7zI4QEYbJKeoOT3DcSQBREp0Ol7m9AiAPUghtGONxyoE%2BfbYlr61vGAQmzGPZSelCai6KCW6gTiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3i4iA6V5%2BEoiscZVKtwDxxEzs5gn1%2BTRZdsMdCEOOlJOqcGYFdapjZ%2BvQIQ4f5tRKIBTjg5vM2L3gOZSUlIjhcYiKGFsO7jAy3kCp3Gipa4pRp7DizPLNoRfAP8lX7L1mgjT98LFajgylr1bK9qgGCMe1jpUnq3DgkU2kO2eVS9QI%2B5L%2FT2n5yqPX%2BYEK2KSfC%2BSIgEvyUEHbrgAi0RZl1SIaJkdhkubiv6yLX8AUkGDv5ck1IyC%2BzJ6MF0qSwt9ZXu8FDs1beqEkVcLdp0YpFkT7XcU9ZeGIiEtaxUMYqR7TWEFswI%2BLMham%2FfVuxWOmTP3UQ45w4hoE0RpfP9JQkNLOq6aMD0KqzXxrK%2BITeqAxeB88rxHoLTbquHfNcPRyP10852czPAwBPbhq9%2B7xU9muiDbJGwV10UDpkJsm1btzIx0OAMDqmcWGw3Ms28dyy6cNZw37xbTZsgEz7vTlm2zLAaT1o65LkYH%2B7QhzkPT5qzfqU1W0boxGPJ49ucGAFVORVfnKW2pPf08xebVJ7oLiTlwJ4rMfnE0qa4OCa%2B%2BVFeokbVzVjtHhY2VXcAKITNdaoAOyHOBrv%2BoFx7jLY3n%2B7Th9GFyrtg%2FosuuGOPmtDS67o8NveuB8GJGZR8u4Il%2FcufAosv5XFUwmf7nwwY6pgELv6imrHHgLbjkoLoQKuXKtFM9emzgiwAGW72B5cRPv3A1wv2g6%2BkkUAYDaqiiO6x8474pmzv50gmEh1EtGUt68knMlpaNI92PLJXygJrHPa24ujHEyyat9WhM3j10oP%2FqHuT5OFBZ%2Fpsg2M81JvXvLejZis0jSyFWTjbg5VINxvyasiSCjiw2ZRVhH8yLJxSVbPrfmTZ1pd7DAKf9RGa0MuI93Apg&X-Amz-Signature=389838d8221bca19893bffa59f7f6c63f4a8bdacf577f966a11c2b6a61123a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

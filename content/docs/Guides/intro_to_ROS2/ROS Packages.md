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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGF5NR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0WIkJ0byBajAuTVQ%2BUtKQ4fJ%2B%2BbmnfTBWs62gB8FVAIgXcRHNKv9ObdbemjLV0r44uWPjba8oaVo%2BraWKnyTpCoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw3O2TbWnq%2F410NvyrcAykNGaDuktbOrVNZQXPieJtWeu4ZXfM72talMjzZ%2BXxixGAL3B6prgGwNGOaHow1vaJBpEhrT8AD549giyaRR04vZ1SC%2FTr%2F5hh5SFFwawEnBQJrdA1xyGMPFd4RR7Dw6eJTaEfte%2FT44Xb%2FsjCyzD8awf7Sm9qxgh7%2F9msGAbNFb%2BOAK724%2BdrM8h2g%2FQ7VOZv9M4lXHN1mlN6hJZ%2FEad1PvIiqa4RnDkxkOgterra2bhW7cIISl2pdi%2BK7VWVXPuIKjqD7bUUivMw%2FJ9oEZE0TlQaK1gj%2F5umeTCfaL4IcCd8rJk63ow7R9pREy1AK00MqDUxWDmukOYYx%2BjNFIIg15ol9iYyuFRXSENkOA%2FXiOrRKMxF5dr84lWOryQh1yfl7fCvKb0x6fpdoiwHvsJchzli7yougye28pC1dGTLlBoE1LbnxaOThs6BOInCWzzjx9TdVZGyJ7pcxYpprY7fRk1LnzKWAa5Q%2FgS7PjDlX7AC4DvxEdBk2YHKWMeL5gv6YPEqVvOWXGccFydq2WYrKMVs2smMNWi5%2Bv8Cjq9xjx6TFcKlYxTnedJyu1kgcDi8YTPLakAAMzP%2Byn1ELTIqJ6l5EJpJ5UmAd8VaHt%2Bot1MQKGp7nb%2FMy%2BR94MP2Q3sEGOqUByNBrFp1UQ4t%2F3JoZCiBiDJVPa0meDkI%2FNs%2BjVWUt6iABcHJC%2BzU6295O0xPzqs%2BD2ufR9tWAJKFtR9iDv36HsNJQ0OdmY8%2BTLo74EpYKBv6D%2BNgRy5GC2BTU3kBZvJFQaCR5IGPwECZie6MP8U%2F%2Fvc3tucYuG3wH4YDnAdLZ%2FIk6%2FbVVxkSnKPGS8wI4YfE9SvaDHwwhb2Q%2FPA%2B1v2v13R4WEzip&X-Amz-Signature=53d0abe955096fa8a28f40e100c49d0fe288669d6e80c4ec2e28b24368da02db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGF5NR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0WIkJ0byBajAuTVQ%2BUtKQ4fJ%2B%2BbmnfTBWs62gB8FVAIgXcRHNKv9ObdbemjLV0r44uWPjba8oaVo%2BraWKnyTpCoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw3O2TbWnq%2F410NvyrcAykNGaDuktbOrVNZQXPieJtWeu4ZXfM72talMjzZ%2BXxixGAL3B6prgGwNGOaHow1vaJBpEhrT8AD549giyaRR04vZ1SC%2FTr%2F5hh5SFFwawEnBQJrdA1xyGMPFd4RR7Dw6eJTaEfte%2FT44Xb%2FsjCyzD8awf7Sm9qxgh7%2F9msGAbNFb%2BOAK724%2BdrM8h2g%2FQ7VOZv9M4lXHN1mlN6hJZ%2FEad1PvIiqa4RnDkxkOgterra2bhW7cIISl2pdi%2BK7VWVXPuIKjqD7bUUivMw%2FJ9oEZE0TlQaK1gj%2F5umeTCfaL4IcCd8rJk63ow7R9pREy1AK00MqDUxWDmukOYYx%2BjNFIIg15ol9iYyuFRXSENkOA%2FXiOrRKMxF5dr84lWOryQh1yfl7fCvKb0x6fpdoiwHvsJchzli7yougye28pC1dGTLlBoE1LbnxaOThs6BOInCWzzjx9TdVZGyJ7pcxYpprY7fRk1LnzKWAa5Q%2FgS7PjDlX7AC4DvxEdBk2YHKWMeL5gv6YPEqVvOWXGccFydq2WYrKMVs2smMNWi5%2Bv8Cjq9xjx6TFcKlYxTnedJyu1kgcDi8YTPLakAAMzP%2Byn1ELTIqJ6l5EJpJ5UmAd8VaHt%2Bot1MQKGp7nb%2FMy%2BR94MP2Q3sEGOqUByNBrFp1UQ4t%2F3JoZCiBiDJVPa0meDkI%2FNs%2BjVWUt6iABcHJC%2BzU6295O0xPzqs%2BD2ufR9tWAJKFtR9iDv36HsNJQ0OdmY8%2BTLo74EpYKBv6D%2BNgRy5GC2BTU3kBZvJFQaCR5IGPwECZie6MP8U%2F%2Fvc3tucYuG3wH4YDnAdLZ%2FIk6%2FbVVxkSnKPGS8wI4YfE9SvaDHwwhb2Q%2FPA%2B1v2v13R4WEzip&X-Amz-Signature=6109fc63498a2651457a6c00900b9d6ed3c69753edbbbc0c1e8f9d58b1638608&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGF5NR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0WIkJ0byBajAuTVQ%2BUtKQ4fJ%2B%2BbmnfTBWs62gB8FVAIgXcRHNKv9ObdbemjLV0r44uWPjba8oaVo%2BraWKnyTpCoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw3O2TbWnq%2F410NvyrcAykNGaDuktbOrVNZQXPieJtWeu4ZXfM72talMjzZ%2BXxixGAL3B6prgGwNGOaHow1vaJBpEhrT8AD549giyaRR04vZ1SC%2FTr%2F5hh5SFFwawEnBQJrdA1xyGMPFd4RR7Dw6eJTaEfte%2FT44Xb%2FsjCyzD8awf7Sm9qxgh7%2F9msGAbNFb%2BOAK724%2BdrM8h2g%2FQ7VOZv9M4lXHN1mlN6hJZ%2FEad1PvIiqa4RnDkxkOgterra2bhW7cIISl2pdi%2BK7VWVXPuIKjqD7bUUivMw%2FJ9oEZE0TlQaK1gj%2F5umeTCfaL4IcCd8rJk63ow7R9pREy1AK00MqDUxWDmukOYYx%2BjNFIIg15ol9iYyuFRXSENkOA%2FXiOrRKMxF5dr84lWOryQh1yfl7fCvKb0x6fpdoiwHvsJchzli7yougye28pC1dGTLlBoE1LbnxaOThs6BOInCWzzjx9TdVZGyJ7pcxYpprY7fRk1LnzKWAa5Q%2FgS7PjDlX7AC4DvxEdBk2YHKWMeL5gv6YPEqVvOWXGccFydq2WYrKMVs2smMNWi5%2Bv8Cjq9xjx6TFcKlYxTnedJyu1kgcDi8YTPLakAAMzP%2Byn1ELTIqJ6l5EJpJ5UmAd8VaHt%2Bot1MQKGp7nb%2FMy%2BR94MP2Q3sEGOqUByNBrFp1UQ4t%2F3JoZCiBiDJVPa0meDkI%2FNs%2BjVWUt6iABcHJC%2BzU6295O0xPzqs%2BD2ufR9tWAJKFtR9iDv36HsNJQ0OdmY8%2BTLo74EpYKBv6D%2BNgRy5GC2BTU3kBZvJFQaCR5IGPwECZie6MP8U%2F%2Fvc3tucYuG3wH4YDnAdLZ%2FIk6%2FbVVxkSnKPGS8wI4YfE9SvaDHwwhb2Q%2FPA%2B1v2v13R4WEzip&X-Amz-Signature=fca325dff6c7237d619cd6f6eab1705064127ce628f3f146db66f6fb4b31ca54&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGF5NR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0WIkJ0byBajAuTVQ%2BUtKQ4fJ%2B%2BbmnfTBWs62gB8FVAIgXcRHNKv9ObdbemjLV0r44uWPjba8oaVo%2BraWKnyTpCoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw3O2TbWnq%2F410NvyrcAykNGaDuktbOrVNZQXPieJtWeu4ZXfM72talMjzZ%2BXxixGAL3B6prgGwNGOaHow1vaJBpEhrT8AD549giyaRR04vZ1SC%2FTr%2F5hh5SFFwawEnBQJrdA1xyGMPFd4RR7Dw6eJTaEfte%2FT44Xb%2FsjCyzD8awf7Sm9qxgh7%2F9msGAbNFb%2BOAK724%2BdrM8h2g%2FQ7VOZv9M4lXHN1mlN6hJZ%2FEad1PvIiqa4RnDkxkOgterra2bhW7cIISl2pdi%2BK7VWVXPuIKjqD7bUUivMw%2FJ9oEZE0TlQaK1gj%2F5umeTCfaL4IcCd8rJk63ow7R9pREy1AK00MqDUxWDmukOYYx%2BjNFIIg15ol9iYyuFRXSENkOA%2FXiOrRKMxF5dr84lWOryQh1yfl7fCvKb0x6fpdoiwHvsJchzli7yougye28pC1dGTLlBoE1LbnxaOThs6BOInCWzzjx9TdVZGyJ7pcxYpprY7fRk1LnzKWAa5Q%2FgS7PjDlX7AC4DvxEdBk2YHKWMeL5gv6YPEqVvOWXGccFydq2WYrKMVs2smMNWi5%2Bv8Cjq9xjx6TFcKlYxTnedJyu1kgcDi8YTPLakAAMzP%2Byn1ELTIqJ6l5EJpJ5UmAd8VaHt%2Bot1MQKGp7nb%2FMy%2BR94MP2Q3sEGOqUByNBrFp1UQ4t%2F3JoZCiBiDJVPa0meDkI%2FNs%2BjVWUt6iABcHJC%2BzU6295O0xPzqs%2BD2ufR9tWAJKFtR9iDv36HsNJQ0OdmY8%2BTLo74EpYKBv6D%2BNgRy5GC2BTU3kBZvJFQaCR5IGPwECZie6MP8U%2F%2Fvc3tucYuG3wH4YDnAdLZ%2FIk6%2FbVVxkSnKPGS8wI4YfE9SvaDHwwhb2Q%2FPA%2B1v2v13R4WEzip&X-Amz-Signature=0416ceff27d7b94381ec8d34a5a8ffe78d35b20b3fa44a3781344ccca1552e53&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGF5NR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0WIkJ0byBajAuTVQ%2BUtKQ4fJ%2B%2BbmnfTBWs62gB8FVAIgXcRHNKv9ObdbemjLV0r44uWPjba8oaVo%2BraWKnyTpCoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw3O2TbWnq%2F410NvyrcAykNGaDuktbOrVNZQXPieJtWeu4ZXfM72talMjzZ%2BXxixGAL3B6prgGwNGOaHow1vaJBpEhrT8AD549giyaRR04vZ1SC%2FTr%2F5hh5SFFwawEnBQJrdA1xyGMPFd4RR7Dw6eJTaEfte%2FT44Xb%2FsjCyzD8awf7Sm9qxgh7%2F9msGAbNFb%2BOAK724%2BdrM8h2g%2FQ7VOZv9M4lXHN1mlN6hJZ%2FEad1PvIiqa4RnDkxkOgterra2bhW7cIISl2pdi%2BK7VWVXPuIKjqD7bUUivMw%2FJ9oEZE0TlQaK1gj%2F5umeTCfaL4IcCd8rJk63ow7R9pREy1AK00MqDUxWDmukOYYx%2BjNFIIg15ol9iYyuFRXSENkOA%2FXiOrRKMxF5dr84lWOryQh1yfl7fCvKb0x6fpdoiwHvsJchzli7yougye28pC1dGTLlBoE1LbnxaOThs6BOInCWzzjx9TdVZGyJ7pcxYpprY7fRk1LnzKWAa5Q%2FgS7PjDlX7AC4DvxEdBk2YHKWMeL5gv6YPEqVvOWXGccFydq2WYrKMVs2smMNWi5%2Bv8Cjq9xjx6TFcKlYxTnedJyu1kgcDi8YTPLakAAMzP%2Byn1ELTIqJ6l5EJpJ5UmAd8VaHt%2Bot1MQKGp7nb%2FMy%2BR94MP2Q3sEGOqUByNBrFp1UQ4t%2F3JoZCiBiDJVPa0meDkI%2FNs%2BjVWUt6iABcHJC%2BzU6295O0xPzqs%2BD2ufR9tWAJKFtR9iDv36HsNJQ0OdmY8%2BTLo74EpYKBv6D%2BNgRy5GC2BTU3kBZvJFQaCR5IGPwECZie6MP8U%2F%2Fvc3tucYuG3wH4YDnAdLZ%2FIk6%2FbVVxkSnKPGS8wI4YfE9SvaDHwwhb2Q%2FPA%2B1v2v13R4WEzip&X-Amz-Signature=0cb128e7f46da97e72ec5bb6b8c5c9b7b4d987539fa1195d6d5d1209963af4db&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGF5NR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0WIkJ0byBajAuTVQ%2BUtKQ4fJ%2B%2BbmnfTBWs62gB8FVAIgXcRHNKv9ObdbemjLV0r44uWPjba8oaVo%2BraWKnyTpCoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw3O2TbWnq%2F410NvyrcAykNGaDuktbOrVNZQXPieJtWeu4ZXfM72talMjzZ%2BXxixGAL3B6prgGwNGOaHow1vaJBpEhrT8AD549giyaRR04vZ1SC%2FTr%2F5hh5SFFwawEnBQJrdA1xyGMPFd4RR7Dw6eJTaEfte%2FT44Xb%2FsjCyzD8awf7Sm9qxgh7%2F9msGAbNFb%2BOAK724%2BdrM8h2g%2FQ7VOZv9M4lXHN1mlN6hJZ%2FEad1PvIiqa4RnDkxkOgterra2bhW7cIISl2pdi%2BK7VWVXPuIKjqD7bUUivMw%2FJ9oEZE0TlQaK1gj%2F5umeTCfaL4IcCd8rJk63ow7R9pREy1AK00MqDUxWDmukOYYx%2BjNFIIg15ol9iYyuFRXSENkOA%2FXiOrRKMxF5dr84lWOryQh1yfl7fCvKb0x6fpdoiwHvsJchzli7yougye28pC1dGTLlBoE1LbnxaOThs6BOInCWzzjx9TdVZGyJ7pcxYpprY7fRk1LnzKWAa5Q%2FgS7PjDlX7AC4DvxEdBk2YHKWMeL5gv6YPEqVvOWXGccFydq2WYrKMVs2smMNWi5%2Bv8Cjq9xjx6TFcKlYxTnedJyu1kgcDi8YTPLakAAMzP%2Byn1ELTIqJ6l5EJpJ5UmAd8VaHt%2Bot1MQKGp7nb%2FMy%2BR94MP2Q3sEGOqUByNBrFp1UQ4t%2F3JoZCiBiDJVPa0meDkI%2FNs%2BjVWUt6iABcHJC%2BzU6295O0xPzqs%2BD2ufR9tWAJKFtR9iDv36HsNJQ0OdmY8%2BTLo74EpYKBv6D%2BNgRy5GC2BTU3kBZvJFQaCR5IGPwECZie6MP8U%2F%2Fvc3tucYuG3wH4YDnAdLZ%2FIk6%2FbVVxkSnKPGS8wI4YfE9SvaDHwwhb2Q%2FPA%2B1v2v13R4WEzip&X-Amz-Signature=12df5485ebe779fc7d46e97d21019d2d6ce799d696d1e77d69d5aa1f5325631d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NGF5NR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0WIkJ0byBajAuTVQ%2BUtKQ4fJ%2B%2BbmnfTBWs62gB8FVAIgXcRHNKv9ObdbemjLV0r44uWPjba8oaVo%2BraWKnyTpCoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw3O2TbWnq%2F410NvyrcAykNGaDuktbOrVNZQXPieJtWeu4ZXfM72talMjzZ%2BXxixGAL3B6prgGwNGOaHow1vaJBpEhrT8AD549giyaRR04vZ1SC%2FTr%2F5hh5SFFwawEnBQJrdA1xyGMPFd4RR7Dw6eJTaEfte%2FT44Xb%2FsjCyzD8awf7Sm9qxgh7%2F9msGAbNFb%2BOAK724%2BdrM8h2g%2FQ7VOZv9M4lXHN1mlN6hJZ%2FEad1PvIiqa4RnDkxkOgterra2bhW7cIISl2pdi%2BK7VWVXPuIKjqD7bUUivMw%2FJ9oEZE0TlQaK1gj%2F5umeTCfaL4IcCd8rJk63ow7R9pREy1AK00MqDUxWDmukOYYx%2BjNFIIg15ol9iYyuFRXSENkOA%2FXiOrRKMxF5dr84lWOryQh1yfl7fCvKb0x6fpdoiwHvsJchzli7yougye28pC1dGTLlBoE1LbnxaOThs6BOInCWzzjx9TdVZGyJ7pcxYpprY7fRk1LnzKWAa5Q%2FgS7PjDlX7AC4DvxEdBk2YHKWMeL5gv6YPEqVvOWXGccFydq2WYrKMVs2smMNWi5%2Bv8Cjq9xjx6TFcKlYxTnedJyu1kgcDi8YTPLakAAMzP%2Byn1ELTIqJ6l5EJpJ5UmAd8VaHt%2Bot1MQKGp7nb%2FMy%2BR94MP2Q3sEGOqUByNBrFp1UQ4t%2F3JoZCiBiDJVPa0meDkI%2FNs%2BjVWUt6iABcHJC%2BzU6295O0xPzqs%2BD2ufR9tWAJKFtR9iDv36HsNJQ0OdmY8%2BTLo74EpYKBv6D%2BNgRy5GC2BTU3kBZvJFQaCR5IGPwECZie6MP8U%2F%2Fvc3tucYuG3wH4YDnAdLZ%2FIk6%2FbVVxkSnKPGS8wI4YfE9SvaDHwwhb2Q%2FPA%2B1v2v13R4WEzip&X-Amz-Signature=61c593693c6eebf69ae4c8da21cbb5200c29627cff33b5b4ec21e9d4822fdea8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

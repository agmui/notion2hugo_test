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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKWCUC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIENtlA8TNQIymTwvkBKJDRQuwiRQTj2k3%2F%2BrxMU08QbXAiAGC2LyVwIyD6omvXVtm%2FlOSAiYOOgkN4rM2nvmZSEuXiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWT0ZuZzNXumJ01xwKtwDxgYnZn6Y3dZTCI80aRfO27EYGwTuhfH15miPv2L3WpCtYHFvZrrq2Nep6H00wpq2SKwmpPKSibHO97YBPABUZ2bhBP3tDcG6PhxU4cCLmtZuv6ne7jFHmE4JpR5Elst8JtpdrCbWfyY5NL8K7%2FHevV6cKD3sXsY7ygHDBvpnAQK%2FSDZHImi12c5zfJlZjt6OcOTfTLmbTT3CALO3nP0pKEVPyXTYy3A5tfoGtnUvwOhtUxbuAjR%2FiVpJOyLVfuqnnJg0PUpoU2L%2B%2FhDxqxXh1BKuVV6F1R%2FrSogXaO7ZYm3KtR3nDsck89%2FvJn%2BPP%2BE2K0nKJOR1tRXONdcO6GpMJjMKBQYltdR%2FilycTn5qrG%2BkMbyzMAoD9AwxzvFpnYHVkBpcu0mjD1dp8Du2Sct%2BPQHJ3oyDlSo4oLO8YhuYrHm%2FHKc51zfZnMzKd5fVU2eh%2B%2BwtMYL%2B0GLzVhE30O248HsSa4PFXqANPapV7dUhMOjBJmsuLCNlAdt2%2B8DrN8CGr5JDUVnMeofN38J0VAQtnuFV4AY92XjDIPZPs3bozQN73nh3HjL9bu1JsvzOrme%2Fri%2B%2BqJOzRzA3fKc9Ha8hD3K9o8x6%2B3pvIwQbKTQYVxUp6DOzYO0S2g0l6HQw7d%2BewAY6pgESta0xxP4yUjZODSib%2BiuOmA7LGivc5UUj3q%2FfzLMAXLJ85D%2BY5uppnFZVLMrpoMO%2FgC72j%2BPDDzWyAVDipet%2F6LwasxoUE0oOLsSOfGUDy98owukCcSWOG2sMYqPwX54%2Ff%2BcgkubnC3sbluP%2FXK6CtwPIIR5wu2S%2FcRNdWGoStocQ7V%2Bq99zjEk4ftZqM5ZDOGgwXdmU3UqZDKqaLx00XJvY6Wem%2B&X-Amz-Signature=c9bc3b971445ca3123e9e967f46baf4d669a25216dee9f8b3acaf54d68210ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKWCUC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIENtlA8TNQIymTwvkBKJDRQuwiRQTj2k3%2F%2BrxMU08QbXAiAGC2LyVwIyD6omvXVtm%2FlOSAiYOOgkN4rM2nvmZSEuXiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWT0ZuZzNXumJ01xwKtwDxgYnZn6Y3dZTCI80aRfO27EYGwTuhfH15miPv2L3WpCtYHFvZrrq2Nep6H00wpq2SKwmpPKSibHO97YBPABUZ2bhBP3tDcG6PhxU4cCLmtZuv6ne7jFHmE4JpR5Elst8JtpdrCbWfyY5NL8K7%2FHevV6cKD3sXsY7ygHDBvpnAQK%2FSDZHImi12c5zfJlZjt6OcOTfTLmbTT3CALO3nP0pKEVPyXTYy3A5tfoGtnUvwOhtUxbuAjR%2FiVpJOyLVfuqnnJg0PUpoU2L%2B%2FhDxqxXh1BKuVV6F1R%2FrSogXaO7ZYm3KtR3nDsck89%2FvJn%2BPP%2BE2K0nKJOR1tRXONdcO6GpMJjMKBQYltdR%2FilycTn5qrG%2BkMbyzMAoD9AwxzvFpnYHVkBpcu0mjD1dp8Du2Sct%2BPQHJ3oyDlSo4oLO8YhuYrHm%2FHKc51zfZnMzKd5fVU2eh%2B%2BwtMYL%2B0GLzVhE30O248HsSa4PFXqANPapV7dUhMOjBJmsuLCNlAdt2%2B8DrN8CGr5JDUVnMeofN38J0VAQtnuFV4AY92XjDIPZPs3bozQN73nh3HjL9bu1JsvzOrme%2Fri%2B%2BqJOzRzA3fKc9Ha8hD3K9o8x6%2B3pvIwQbKTQYVxUp6DOzYO0S2g0l6HQw7d%2BewAY6pgESta0xxP4yUjZODSib%2BiuOmA7LGivc5UUj3q%2FfzLMAXLJ85D%2BY5uppnFZVLMrpoMO%2FgC72j%2BPDDzWyAVDipet%2F6LwasxoUE0oOLsSOfGUDy98owukCcSWOG2sMYqPwX54%2Ff%2BcgkubnC3sbluP%2FXK6CtwPIIR5wu2S%2FcRNdWGoStocQ7V%2Bq99zjEk4ftZqM5ZDOGgwXdmU3UqZDKqaLx00XJvY6Wem%2B&X-Amz-Signature=dcbd12c63d4b6cb1bae5bde6d79f42155129409af2b3fcd47a65648874a5dd22&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKWCUC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIENtlA8TNQIymTwvkBKJDRQuwiRQTj2k3%2F%2BrxMU08QbXAiAGC2LyVwIyD6omvXVtm%2FlOSAiYOOgkN4rM2nvmZSEuXiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWT0ZuZzNXumJ01xwKtwDxgYnZn6Y3dZTCI80aRfO27EYGwTuhfH15miPv2L3WpCtYHFvZrrq2Nep6H00wpq2SKwmpPKSibHO97YBPABUZ2bhBP3tDcG6PhxU4cCLmtZuv6ne7jFHmE4JpR5Elst8JtpdrCbWfyY5NL8K7%2FHevV6cKD3sXsY7ygHDBvpnAQK%2FSDZHImi12c5zfJlZjt6OcOTfTLmbTT3CALO3nP0pKEVPyXTYy3A5tfoGtnUvwOhtUxbuAjR%2FiVpJOyLVfuqnnJg0PUpoU2L%2B%2FhDxqxXh1BKuVV6F1R%2FrSogXaO7ZYm3KtR3nDsck89%2FvJn%2BPP%2BE2K0nKJOR1tRXONdcO6GpMJjMKBQYltdR%2FilycTn5qrG%2BkMbyzMAoD9AwxzvFpnYHVkBpcu0mjD1dp8Du2Sct%2BPQHJ3oyDlSo4oLO8YhuYrHm%2FHKc51zfZnMzKd5fVU2eh%2B%2BwtMYL%2B0GLzVhE30O248HsSa4PFXqANPapV7dUhMOjBJmsuLCNlAdt2%2B8DrN8CGr5JDUVnMeofN38J0VAQtnuFV4AY92XjDIPZPs3bozQN73nh3HjL9bu1JsvzOrme%2Fri%2B%2BqJOzRzA3fKc9Ha8hD3K9o8x6%2B3pvIwQbKTQYVxUp6DOzYO0S2g0l6HQw7d%2BewAY6pgESta0xxP4yUjZODSib%2BiuOmA7LGivc5UUj3q%2FfzLMAXLJ85D%2BY5uppnFZVLMrpoMO%2FgC72j%2BPDDzWyAVDipet%2F6LwasxoUE0oOLsSOfGUDy98owukCcSWOG2sMYqPwX54%2Ff%2BcgkubnC3sbluP%2FXK6CtwPIIR5wu2S%2FcRNdWGoStocQ7V%2Bq99zjEk4ftZqM5ZDOGgwXdmU3UqZDKqaLx00XJvY6Wem%2B&X-Amz-Signature=5de8149e741c5c41a263f061fb38c4948ecb66053369d0af9717f3bb8da2352b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKWCUC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIENtlA8TNQIymTwvkBKJDRQuwiRQTj2k3%2F%2BrxMU08QbXAiAGC2LyVwIyD6omvXVtm%2FlOSAiYOOgkN4rM2nvmZSEuXiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWT0ZuZzNXumJ01xwKtwDxgYnZn6Y3dZTCI80aRfO27EYGwTuhfH15miPv2L3WpCtYHFvZrrq2Nep6H00wpq2SKwmpPKSibHO97YBPABUZ2bhBP3tDcG6PhxU4cCLmtZuv6ne7jFHmE4JpR5Elst8JtpdrCbWfyY5NL8K7%2FHevV6cKD3sXsY7ygHDBvpnAQK%2FSDZHImi12c5zfJlZjt6OcOTfTLmbTT3CALO3nP0pKEVPyXTYy3A5tfoGtnUvwOhtUxbuAjR%2FiVpJOyLVfuqnnJg0PUpoU2L%2B%2FhDxqxXh1BKuVV6F1R%2FrSogXaO7ZYm3KtR3nDsck89%2FvJn%2BPP%2BE2K0nKJOR1tRXONdcO6GpMJjMKBQYltdR%2FilycTn5qrG%2BkMbyzMAoD9AwxzvFpnYHVkBpcu0mjD1dp8Du2Sct%2BPQHJ3oyDlSo4oLO8YhuYrHm%2FHKc51zfZnMzKd5fVU2eh%2B%2BwtMYL%2B0GLzVhE30O248HsSa4PFXqANPapV7dUhMOjBJmsuLCNlAdt2%2B8DrN8CGr5JDUVnMeofN38J0VAQtnuFV4AY92XjDIPZPs3bozQN73nh3HjL9bu1JsvzOrme%2Fri%2B%2BqJOzRzA3fKc9Ha8hD3K9o8x6%2B3pvIwQbKTQYVxUp6DOzYO0S2g0l6HQw7d%2BewAY6pgESta0xxP4yUjZODSib%2BiuOmA7LGivc5UUj3q%2FfzLMAXLJ85D%2BY5uppnFZVLMrpoMO%2FgC72j%2BPDDzWyAVDipet%2F6LwasxoUE0oOLsSOfGUDy98owukCcSWOG2sMYqPwX54%2Ff%2BcgkubnC3sbluP%2FXK6CtwPIIR5wu2S%2FcRNdWGoStocQ7V%2Bq99zjEk4ftZqM5ZDOGgwXdmU3UqZDKqaLx00XJvY6Wem%2B&X-Amz-Signature=2f8888d5ee8e8702ace7a5009e9681b317a0d9b60bee744c23ba666d522167e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKWCUC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIENtlA8TNQIymTwvkBKJDRQuwiRQTj2k3%2F%2BrxMU08QbXAiAGC2LyVwIyD6omvXVtm%2FlOSAiYOOgkN4rM2nvmZSEuXiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWT0ZuZzNXumJ01xwKtwDxgYnZn6Y3dZTCI80aRfO27EYGwTuhfH15miPv2L3WpCtYHFvZrrq2Nep6H00wpq2SKwmpPKSibHO97YBPABUZ2bhBP3tDcG6PhxU4cCLmtZuv6ne7jFHmE4JpR5Elst8JtpdrCbWfyY5NL8K7%2FHevV6cKD3sXsY7ygHDBvpnAQK%2FSDZHImi12c5zfJlZjt6OcOTfTLmbTT3CALO3nP0pKEVPyXTYy3A5tfoGtnUvwOhtUxbuAjR%2FiVpJOyLVfuqnnJg0PUpoU2L%2B%2FhDxqxXh1BKuVV6F1R%2FrSogXaO7ZYm3KtR3nDsck89%2FvJn%2BPP%2BE2K0nKJOR1tRXONdcO6GpMJjMKBQYltdR%2FilycTn5qrG%2BkMbyzMAoD9AwxzvFpnYHVkBpcu0mjD1dp8Du2Sct%2BPQHJ3oyDlSo4oLO8YhuYrHm%2FHKc51zfZnMzKd5fVU2eh%2B%2BwtMYL%2B0GLzVhE30O248HsSa4PFXqANPapV7dUhMOjBJmsuLCNlAdt2%2B8DrN8CGr5JDUVnMeofN38J0VAQtnuFV4AY92XjDIPZPs3bozQN73nh3HjL9bu1JsvzOrme%2Fri%2B%2BqJOzRzA3fKc9Ha8hD3K9o8x6%2B3pvIwQbKTQYVxUp6DOzYO0S2g0l6HQw7d%2BewAY6pgESta0xxP4yUjZODSib%2BiuOmA7LGivc5UUj3q%2FfzLMAXLJ85D%2BY5uppnFZVLMrpoMO%2FgC72j%2BPDDzWyAVDipet%2F6LwasxoUE0oOLsSOfGUDy98owukCcSWOG2sMYqPwX54%2Ff%2BcgkubnC3sbluP%2FXK6CtwPIIR5wu2S%2FcRNdWGoStocQ7V%2Bq99zjEk4ftZqM5ZDOGgwXdmU3UqZDKqaLx00XJvY6Wem%2B&X-Amz-Signature=29ee28ac569488761fa21cb1c3d482f170e61953723b84f61786d52a05ba054e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKWCUC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIENtlA8TNQIymTwvkBKJDRQuwiRQTj2k3%2F%2BrxMU08QbXAiAGC2LyVwIyD6omvXVtm%2FlOSAiYOOgkN4rM2nvmZSEuXiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWT0ZuZzNXumJ01xwKtwDxgYnZn6Y3dZTCI80aRfO27EYGwTuhfH15miPv2L3WpCtYHFvZrrq2Nep6H00wpq2SKwmpPKSibHO97YBPABUZ2bhBP3tDcG6PhxU4cCLmtZuv6ne7jFHmE4JpR5Elst8JtpdrCbWfyY5NL8K7%2FHevV6cKD3sXsY7ygHDBvpnAQK%2FSDZHImi12c5zfJlZjt6OcOTfTLmbTT3CALO3nP0pKEVPyXTYy3A5tfoGtnUvwOhtUxbuAjR%2FiVpJOyLVfuqnnJg0PUpoU2L%2B%2FhDxqxXh1BKuVV6F1R%2FrSogXaO7ZYm3KtR3nDsck89%2FvJn%2BPP%2BE2K0nKJOR1tRXONdcO6GpMJjMKBQYltdR%2FilycTn5qrG%2BkMbyzMAoD9AwxzvFpnYHVkBpcu0mjD1dp8Du2Sct%2BPQHJ3oyDlSo4oLO8YhuYrHm%2FHKc51zfZnMzKd5fVU2eh%2B%2BwtMYL%2B0GLzVhE30O248HsSa4PFXqANPapV7dUhMOjBJmsuLCNlAdt2%2B8DrN8CGr5JDUVnMeofN38J0VAQtnuFV4AY92XjDIPZPs3bozQN73nh3HjL9bu1JsvzOrme%2Fri%2B%2BqJOzRzA3fKc9Ha8hD3K9o8x6%2B3pvIwQbKTQYVxUp6DOzYO0S2g0l6HQw7d%2BewAY6pgESta0xxP4yUjZODSib%2BiuOmA7LGivc5UUj3q%2FfzLMAXLJ85D%2BY5uppnFZVLMrpoMO%2FgC72j%2BPDDzWyAVDipet%2F6LwasxoUE0oOLsSOfGUDy98owukCcSWOG2sMYqPwX54%2Ff%2BcgkubnC3sbluP%2FXK6CtwPIIR5wu2S%2FcRNdWGoStocQ7V%2Bq99zjEk4ftZqM5ZDOGgwXdmU3UqZDKqaLx00XJvY6Wem%2B&X-Amz-Signature=7b539d2335025960947715046802d5afed45d0d0922619418edaa870249cde1f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AKWCUC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIENtlA8TNQIymTwvkBKJDRQuwiRQTj2k3%2F%2BrxMU08QbXAiAGC2LyVwIyD6omvXVtm%2FlOSAiYOOgkN4rM2nvmZSEuXiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWT0ZuZzNXumJ01xwKtwDxgYnZn6Y3dZTCI80aRfO27EYGwTuhfH15miPv2L3WpCtYHFvZrrq2Nep6H00wpq2SKwmpPKSibHO97YBPABUZ2bhBP3tDcG6PhxU4cCLmtZuv6ne7jFHmE4JpR5Elst8JtpdrCbWfyY5NL8K7%2FHevV6cKD3sXsY7ygHDBvpnAQK%2FSDZHImi12c5zfJlZjt6OcOTfTLmbTT3CALO3nP0pKEVPyXTYy3A5tfoGtnUvwOhtUxbuAjR%2FiVpJOyLVfuqnnJg0PUpoU2L%2B%2FhDxqxXh1BKuVV6F1R%2FrSogXaO7ZYm3KtR3nDsck89%2FvJn%2BPP%2BE2K0nKJOR1tRXONdcO6GpMJjMKBQYltdR%2FilycTn5qrG%2BkMbyzMAoD9AwxzvFpnYHVkBpcu0mjD1dp8Du2Sct%2BPQHJ3oyDlSo4oLO8YhuYrHm%2FHKc51zfZnMzKd5fVU2eh%2B%2BwtMYL%2B0GLzVhE30O248HsSa4PFXqANPapV7dUhMOjBJmsuLCNlAdt2%2B8DrN8CGr5JDUVnMeofN38J0VAQtnuFV4AY92XjDIPZPs3bozQN73nh3HjL9bu1JsvzOrme%2Fri%2B%2BqJOzRzA3fKc9Ha8hD3K9o8x6%2B3pvIwQbKTQYVxUp6DOzYO0S2g0l6HQw7d%2BewAY6pgESta0xxP4yUjZODSib%2BiuOmA7LGivc5UUj3q%2FfzLMAXLJ85D%2BY5uppnFZVLMrpoMO%2FgC72j%2BPDDzWyAVDipet%2F6LwasxoUE0oOLsSOfGUDy98owukCcSWOG2sMYqPwX54%2Ff%2BcgkubnC3sbluP%2FXK6CtwPIIR5wu2S%2FcRNdWGoStocQ7V%2Bq99zjEk4ftZqM5ZDOGgwXdmU3UqZDKqaLx00XJvY6Wem%2B&X-Amz-Signature=5811fe4aa6a9e333e4cbca78aa59829c3260d35f81a6d32fca8d038e6fa8ac83&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

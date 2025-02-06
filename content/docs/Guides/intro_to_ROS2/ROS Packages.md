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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKXPV6I%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDE6%2FbV5XYjHRPdIFZv7plHLDARFqAHTw7p0zOFvFAaWgIgVdJ5ZdF3ukr%2Fk38uCbuPpHljkJ9oF9njHAS7qo%2BT%2FW4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0%2BWBdeTvgOoXke0yrcA%2B5yLvUnYSLtuLqrvY0edgfta5xyBHpMTq5z1Rv0Ol9QWPoGNS70SxJhc0NFMmGWMXyeGPIWKN617mC49nIHrFTsywCnef%2FE9Ypsyx0BPkT1ibWOySPCdOkUGn5Lj7jRkcAnDPdt4cdpPf6xMV43mPeP%2B%2BHSjJZuttevGLERDdFNu8LE3y%2BeiCBB5gSsLSM5MaqyPh1jnZs24j7aYcU%2Fe6ZnBZHbdlJqBqNMkFVkgHF7mjCYh9azcZ%2BFwlPfJPE1yYm594holl%2FMPUI0L2zEsu5TqkNxoGpRNUKZcOZ2UDrIIssTwYWgduvrcErSDte3qkvwn1F%2BLvSVxn%2B2jG6MFI27AnvrRibuR4ZRDWGNOye7txlYjgxVnKhztBMPlcx9kjR%2BGByr8p83vl5XSgdePUQnfwVvFD9NQDvPK%2FUi504pihXaoov%2FxYHTa4qJ8Lr5nXH8jufV2Zk9oRQ5nOzCVsgao5edkZA8hiDc3ju1AZNVu%2BUITrCE2bThqZeyTVj4qYjkglSl3SfW1e2DKNfNYi2WFm81AhyZ4k%2Fide7wEUL6BrIbhQzfuBL0r3n9ThXTCw7mOgTnEHhpRBpMB8fNP9DxEYKYhUs2cAY5QwAfY%2FuGGKePOmlmjOy72GrCMLLTk70GOqUB1WX6OC%2FrWo%2BZteyAeRFp3m4823556KvVI%2Bu%2Fg45vBN0HLha9NGvhXEIWvKpQUseHrYv8wn%2FhZh9COTp1Q8A6%2BhSTYfumx3GlgMMOXr2lmt9Ir9265u8pgGhQRh8rkxofJyARioFzPo9Xn8ytfFsyHcrkEwZLHnGVkSA8xJXvsoo6OmGOMp%2FQ0NcfXMS92UZSoim5Rmj8sIc6m1Oi2Vq0hnyRhnsq&X-Amz-Signature=44fbef4641f13fef9a9d987b0f041a814cd089458f685bc0da5689bad3e52847&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKXPV6I%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDE6%2FbV5XYjHRPdIFZv7plHLDARFqAHTw7p0zOFvFAaWgIgVdJ5ZdF3ukr%2Fk38uCbuPpHljkJ9oF9njHAS7qo%2BT%2FW4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0%2BWBdeTvgOoXke0yrcA%2B5yLvUnYSLtuLqrvY0edgfta5xyBHpMTq5z1Rv0Ol9QWPoGNS70SxJhc0NFMmGWMXyeGPIWKN617mC49nIHrFTsywCnef%2FE9Ypsyx0BPkT1ibWOySPCdOkUGn5Lj7jRkcAnDPdt4cdpPf6xMV43mPeP%2B%2BHSjJZuttevGLERDdFNu8LE3y%2BeiCBB5gSsLSM5MaqyPh1jnZs24j7aYcU%2Fe6ZnBZHbdlJqBqNMkFVkgHF7mjCYh9azcZ%2BFwlPfJPE1yYm594holl%2FMPUI0L2zEsu5TqkNxoGpRNUKZcOZ2UDrIIssTwYWgduvrcErSDte3qkvwn1F%2BLvSVxn%2B2jG6MFI27AnvrRibuR4ZRDWGNOye7txlYjgxVnKhztBMPlcx9kjR%2BGByr8p83vl5XSgdePUQnfwVvFD9NQDvPK%2FUi504pihXaoov%2FxYHTa4qJ8Lr5nXH8jufV2Zk9oRQ5nOzCVsgao5edkZA8hiDc3ju1AZNVu%2BUITrCE2bThqZeyTVj4qYjkglSl3SfW1e2DKNfNYi2WFm81AhyZ4k%2Fide7wEUL6BrIbhQzfuBL0r3n9ThXTCw7mOgTnEHhpRBpMB8fNP9DxEYKYhUs2cAY5QwAfY%2FuGGKePOmlmjOy72GrCMLLTk70GOqUB1WX6OC%2FrWo%2BZteyAeRFp3m4823556KvVI%2Bu%2Fg45vBN0HLha9NGvhXEIWvKpQUseHrYv8wn%2FhZh9COTp1Q8A6%2BhSTYfumx3GlgMMOXr2lmt9Ir9265u8pgGhQRh8rkxofJyARioFzPo9Xn8ytfFsyHcrkEwZLHnGVkSA8xJXvsoo6OmGOMp%2FQ0NcfXMS92UZSoim5Rmj8sIc6m1Oi2Vq0hnyRhnsq&X-Amz-Signature=0537eb5bef989f60d2a3f5e99b37c0e4ecc48d55c3871da9517b9c2dbc73c238&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKXPV6I%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDE6%2FbV5XYjHRPdIFZv7plHLDARFqAHTw7p0zOFvFAaWgIgVdJ5ZdF3ukr%2Fk38uCbuPpHljkJ9oF9njHAS7qo%2BT%2FW4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0%2BWBdeTvgOoXke0yrcA%2B5yLvUnYSLtuLqrvY0edgfta5xyBHpMTq5z1Rv0Ol9QWPoGNS70SxJhc0NFMmGWMXyeGPIWKN617mC49nIHrFTsywCnef%2FE9Ypsyx0BPkT1ibWOySPCdOkUGn5Lj7jRkcAnDPdt4cdpPf6xMV43mPeP%2B%2BHSjJZuttevGLERDdFNu8LE3y%2BeiCBB5gSsLSM5MaqyPh1jnZs24j7aYcU%2Fe6ZnBZHbdlJqBqNMkFVkgHF7mjCYh9azcZ%2BFwlPfJPE1yYm594holl%2FMPUI0L2zEsu5TqkNxoGpRNUKZcOZ2UDrIIssTwYWgduvrcErSDte3qkvwn1F%2BLvSVxn%2B2jG6MFI27AnvrRibuR4ZRDWGNOye7txlYjgxVnKhztBMPlcx9kjR%2BGByr8p83vl5XSgdePUQnfwVvFD9NQDvPK%2FUi504pihXaoov%2FxYHTa4qJ8Lr5nXH8jufV2Zk9oRQ5nOzCVsgao5edkZA8hiDc3ju1AZNVu%2BUITrCE2bThqZeyTVj4qYjkglSl3SfW1e2DKNfNYi2WFm81AhyZ4k%2Fide7wEUL6BrIbhQzfuBL0r3n9ThXTCw7mOgTnEHhpRBpMB8fNP9DxEYKYhUs2cAY5QwAfY%2FuGGKePOmlmjOy72GrCMLLTk70GOqUB1WX6OC%2FrWo%2BZteyAeRFp3m4823556KvVI%2Bu%2Fg45vBN0HLha9NGvhXEIWvKpQUseHrYv8wn%2FhZh9COTp1Q8A6%2BhSTYfumx3GlgMMOXr2lmt9Ir9265u8pgGhQRh8rkxofJyARioFzPo9Xn8ytfFsyHcrkEwZLHnGVkSA8xJXvsoo6OmGOMp%2FQ0NcfXMS92UZSoim5Rmj8sIc6m1Oi2Vq0hnyRhnsq&X-Amz-Signature=0d4885d9d4cfa95e0d2181b6da6d7acc40dc7094146711b15ecc677f13e394fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKXPV6I%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDE6%2FbV5XYjHRPdIFZv7plHLDARFqAHTw7p0zOFvFAaWgIgVdJ5ZdF3ukr%2Fk38uCbuPpHljkJ9oF9njHAS7qo%2BT%2FW4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0%2BWBdeTvgOoXke0yrcA%2B5yLvUnYSLtuLqrvY0edgfta5xyBHpMTq5z1Rv0Ol9QWPoGNS70SxJhc0NFMmGWMXyeGPIWKN617mC49nIHrFTsywCnef%2FE9Ypsyx0BPkT1ibWOySPCdOkUGn5Lj7jRkcAnDPdt4cdpPf6xMV43mPeP%2B%2BHSjJZuttevGLERDdFNu8LE3y%2BeiCBB5gSsLSM5MaqyPh1jnZs24j7aYcU%2Fe6ZnBZHbdlJqBqNMkFVkgHF7mjCYh9azcZ%2BFwlPfJPE1yYm594holl%2FMPUI0L2zEsu5TqkNxoGpRNUKZcOZ2UDrIIssTwYWgduvrcErSDte3qkvwn1F%2BLvSVxn%2B2jG6MFI27AnvrRibuR4ZRDWGNOye7txlYjgxVnKhztBMPlcx9kjR%2BGByr8p83vl5XSgdePUQnfwVvFD9NQDvPK%2FUi504pihXaoov%2FxYHTa4qJ8Lr5nXH8jufV2Zk9oRQ5nOzCVsgao5edkZA8hiDc3ju1AZNVu%2BUITrCE2bThqZeyTVj4qYjkglSl3SfW1e2DKNfNYi2WFm81AhyZ4k%2Fide7wEUL6BrIbhQzfuBL0r3n9ThXTCw7mOgTnEHhpRBpMB8fNP9DxEYKYhUs2cAY5QwAfY%2FuGGKePOmlmjOy72GrCMLLTk70GOqUB1WX6OC%2FrWo%2BZteyAeRFp3m4823556KvVI%2Bu%2Fg45vBN0HLha9NGvhXEIWvKpQUseHrYv8wn%2FhZh9COTp1Q8A6%2BhSTYfumx3GlgMMOXr2lmt9Ir9265u8pgGhQRh8rkxofJyARioFzPo9Xn8ytfFsyHcrkEwZLHnGVkSA8xJXvsoo6OmGOMp%2FQ0NcfXMS92UZSoim5Rmj8sIc6m1Oi2Vq0hnyRhnsq&X-Amz-Signature=9d0bb9f2cc1ceaa0d2573859e215a5f67a261e8a12f87600d43c3d78bce66854&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKXPV6I%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDE6%2FbV5XYjHRPdIFZv7plHLDARFqAHTw7p0zOFvFAaWgIgVdJ5ZdF3ukr%2Fk38uCbuPpHljkJ9oF9njHAS7qo%2BT%2FW4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0%2BWBdeTvgOoXke0yrcA%2B5yLvUnYSLtuLqrvY0edgfta5xyBHpMTq5z1Rv0Ol9QWPoGNS70SxJhc0NFMmGWMXyeGPIWKN617mC49nIHrFTsywCnef%2FE9Ypsyx0BPkT1ibWOySPCdOkUGn5Lj7jRkcAnDPdt4cdpPf6xMV43mPeP%2B%2BHSjJZuttevGLERDdFNu8LE3y%2BeiCBB5gSsLSM5MaqyPh1jnZs24j7aYcU%2Fe6ZnBZHbdlJqBqNMkFVkgHF7mjCYh9azcZ%2BFwlPfJPE1yYm594holl%2FMPUI0L2zEsu5TqkNxoGpRNUKZcOZ2UDrIIssTwYWgduvrcErSDte3qkvwn1F%2BLvSVxn%2B2jG6MFI27AnvrRibuR4ZRDWGNOye7txlYjgxVnKhztBMPlcx9kjR%2BGByr8p83vl5XSgdePUQnfwVvFD9NQDvPK%2FUi504pihXaoov%2FxYHTa4qJ8Lr5nXH8jufV2Zk9oRQ5nOzCVsgao5edkZA8hiDc3ju1AZNVu%2BUITrCE2bThqZeyTVj4qYjkglSl3SfW1e2DKNfNYi2WFm81AhyZ4k%2Fide7wEUL6BrIbhQzfuBL0r3n9ThXTCw7mOgTnEHhpRBpMB8fNP9DxEYKYhUs2cAY5QwAfY%2FuGGKePOmlmjOy72GrCMLLTk70GOqUB1WX6OC%2FrWo%2BZteyAeRFp3m4823556KvVI%2Bu%2Fg45vBN0HLha9NGvhXEIWvKpQUseHrYv8wn%2FhZh9COTp1Q8A6%2BhSTYfumx3GlgMMOXr2lmt9Ir9265u8pgGhQRh8rkxofJyARioFzPo9Xn8ytfFsyHcrkEwZLHnGVkSA8xJXvsoo6OmGOMp%2FQ0NcfXMS92UZSoim5Rmj8sIc6m1Oi2Vq0hnyRhnsq&X-Amz-Signature=5fbfdeb2886560257ab477be897fb64355b2d75cfdf61b50507f292dae1c74ab&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKXPV6I%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDE6%2FbV5XYjHRPdIFZv7plHLDARFqAHTw7p0zOFvFAaWgIgVdJ5ZdF3ukr%2Fk38uCbuPpHljkJ9oF9njHAS7qo%2BT%2FW4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0%2BWBdeTvgOoXke0yrcA%2B5yLvUnYSLtuLqrvY0edgfta5xyBHpMTq5z1Rv0Ol9QWPoGNS70SxJhc0NFMmGWMXyeGPIWKN617mC49nIHrFTsywCnef%2FE9Ypsyx0BPkT1ibWOySPCdOkUGn5Lj7jRkcAnDPdt4cdpPf6xMV43mPeP%2B%2BHSjJZuttevGLERDdFNu8LE3y%2BeiCBB5gSsLSM5MaqyPh1jnZs24j7aYcU%2Fe6ZnBZHbdlJqBqNMkFVkgHF7mjCYh9azcZ%2BFwlPfJPE1yYm594holl%2FMPUI0L2zEsu5TqkNxoGpRNUKZcOZ2UDrIIssTwYWgduvrcErSDte3qkvwn1F%2BLvSVxn%2B2jG6MFI27AnvrRibuR4ZRDWGNOye7txlYjgxVnKhztBMPlcx9kjR%2BGByr8p83vl5XSgdePUQnfwVvFD9NQDvPK%2FUi504pihXaoov%2FxYHTa4qJ8Lr5nXH8jufV2Zk9oRQ5nOzCVsgao5edkZA8hiDc3ju1AZNVu%2BUITrCE2bThqZeyTVj4qYjkglSl3SfW1e2DKNfNYi2WFm81AhyZ4k%2Fide7wEUL6BrIbhQzfuBL0r3n9ThXTCw7mOgTnEHhpRBpMB8fNP9DxEYKYhUs2cAY5QwAfY%2FuGGKePOmlmjOy72GrCMLLTk70GOqUB1WX6OC%2FrWo%2BZteyAeRFp3m4823556KvVI%2Bu%2Fg45vBN0HLha9NGvhXEIWvKpQUseHrYv8wn%2FhZh9COTp1Q8A6%2BhSTYfumx3GlgMMOXr2lmt9Ir9265u8pgGhQRh8rkxofJyARioFzPo9Xn8ytfFsyHcrkEwZLHnGVkSA8xJXvsoo6OmGOMp%2FQ0NcfXMS92UZSoim5Rmj8sIc6m1Oi2Vq0hnyRhnsq&X-Amz-Signature=189a72318769e95d894de273cd8017220a36ebca4060919ff260a568ede5e809&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKXPV6I%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDE6%2FbV5XYjHRPdIFZv7plHLDARFqAHTw7p0zOFvFAaWgIgVdJ5ZdF3ukr%2Fk38uCbuPpHljkJ9oF9njHAS7qo%2BT%2FW4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0%2BWBdeTvgOoXke0yrcA%2B5yLvUnYSLtuLqrvY0edgfta5xyBHpMTq5z1Rv0Ol9QWPoGNS70SxJhc0NFMmGWMXyeGPIWKN617mC49nIHrFTsywCnef%2FE9Ypsyx0BPkT1ibWOySPCdOkUGn5Lj7jRkcAnDPdt4cdpPf6xMV43mPeP%2B%2BHSjJZuttevGLERDdFNu8LE3y%2BeiCBB5gSsLSM5MaqyPh1jnZs24j7aYcU%2Fe6ZnBZHbdlJqBqNMkFVkgHF7mjCYh9azcZ%2BFwlPfJPE1yYm594holl%2FMPUI0L2zEsu5TqkNxoGpRNUKZcOZ2UDrIIssTwYWgduvrcErSDte3qkvwn1F%2BLvSVxn%2B2jG6MFI27AnvrRibuR4ZRDWGNOye7txlYjgxVnKhztBMPlcx9kjR%2BGByr8p83vl5XSgdePUQnfwVvFD9NQDvPK%2FUi504pihXaoov%2FxYHTa4qJ8Lr5nXH8jufV2Zk9oRQ5nOzCVsgao5edkZA8hiDc3ju1AZNVu%2BUITrCE2bThqZeyTVj4qYjkglSl3SfW1e2DKNfNYi2WFm81AhyZ4k%2Fide7wEUL6BrIbhQzfuBL0r3n9ThXTCw7mOgTnEHhpRBpMB8fNP9DxEYKYhUs2cAY5QwAfY%2FuGGKePOmlmjOy72GrCMLLTk70GOqUB1WX6OC%2FrWo%2BZteyAeRFp3m4823556KvVI%2Bu%2Fg45vBN0HLha9NGvhXEIWvKpQUseHrYv8wn%2FhZh9COTp1Q8A6%2BhSTYfumx3GlgMMOXr2lmt9Ir9265u8pgGhQRh8rkxofJyARioFzPo9Xn8ytfFsyHcrkEwZLHnGVkSA8xJXvsoo6OmGOMp%2FQ0NcfXMS92UZSoim5Rmj8sIc6m1Oi2Vq0hnyRhnsq&X-Amz-Signature=d48740179ed85d4d980f3278a2874cb99aca9aa1ed33864a1ebd8ed2c270ea57&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

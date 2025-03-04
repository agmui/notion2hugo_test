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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYLLFBQN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVh%2FYAesfS%2FV%2B8HA4yVbwnKfinAfoIbY3DaBc1SP1UOwIgCAT8ILqYt5HhXuDHOTmFU0bPzV%2B8Gkj2SDgTcV6CAiwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWHqcP0dWZLshrfRircA0LcEVDWQRj5YFFX%2FuJV3xW%2BXba1LRHEQDZ9zd%2BxK28sggmpA7iVGtVocc69bTcBMcPdt%2FPdrQWJ8Vr%2BBxiZamNbWi56iH2EvdqucxWEbGirhKf1kJGastxOh8qWC2ishdrnsY2m8TbB5Tzkso94%2FxNHQC7CxVyaEP9ZzKOCIgerDd6mfWG3JSBciwnDPI6xzOyUjdDBNtXeFq%2Fz0nJE64G07EuKIp6c7Fp8jgcP7jOYa6JNmQMawFcvx%2FZIs09cWSX3XKj4%2BzSIMLFOGRonEkJXas%2F2yVAEWJ4DqUIu%2FcuCR6diknkBTaExS8Ld3NcBr0PxNCgZEQCfK%2B7GNqCA6Q2SnYV7E4kzzd8GPDNENEneGOCYQnc2hT3etLlxxlmeuxPGf35wem95ZSyoOr5ahRm4ZuEXl1vX8jqk6ymNYA2pgF7lR%2FQTeuU8kfWke4334lo5iwAn0UK3QtgO1%2FPnjCC%2BulmEugb%2FfCSzsMwjV3yzCwf8L%2BfFGInAWpMuC093UGS3fWDzZFEPTgBlJ9vBY2%2BpwtxH1ruxTi7tInMTWyqC42M%2B5rmKTej1Pg5tUlDQYRE5C8gL9NKx3VGoufFASqMnAU0opMJExuLICEtj3hpL0ZG14utp7YezYZFJMKD4mL4GOqUBQPmBGiL8VbVmUxt9EydP%2FNPHeKcMBpnooy2vd7NuYZ1IGGxOWbPBSY%2FNUt8VLQKE8K%2BXIz8VseT4O8bd%2BKuE3wwBUgsU9QtsAA%2BAnNOPt77HZWOXLNkHWYaNLVVYIlaKYddiVOy4l492%2BNUDIyT1xeM5Z03NSNAgtGt1pa0qhGQcWOrA5NZp9by6J5iEgHuQFpjctQ6Gd3Ns8dBYnKYGFZsnQzbl&X-Amz-Signature=fdf1655fa78271cafa0ed6453e90eb306e20f14db28798a0281c94c8a24ae193&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYLLFBQN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVh%2FYAesfS%2FV%2B8HA4yVbwnKfinAfoIbY3DaBc1SP1UOwIgCAT8ILqYt5HhXuDHOTmFU0bPzV%2B8Gkj2SDgTcV6CAiwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWHqcP0dWZLshrfRircA0LcEVDWQRj5YFFX%2FuJV3xW%2BXba1LRHEQDZ9zd%2BxK28sggmpA7iVGtVocc69bTcBMcPdt%2FPdrQWJ8Vr%2BBxiZamNbWi56iH2EvdqucxWEbGirhKf1kJGastxOh8qWC2ishdrnsY2m8TbB5Tzkso94%2FxNHQC7CxVyaEP9ZzKOCIgerDd6mfWG3JSBciwnDPI6xzOyUjdDBNtXeFq%2Fz0nJE64G07EuKIp6c7Fp8jgcP7jOYa6JNmQMawFcvx%2FZIs09cWSX3XKj4%2BzSIMLFOGRonEkJXas%2F2yVAEWJ4DqUIu%2FcuCR6diknkBTaExS8Ld3NcBr0PxNCgZEQCfK%2B7GNqCA6Q2SnYV7E4kzzd8GPDNENEneGOCYQnc2hT3etLlxxlmeuxPGf35wem95ZSyoOr5ahRm4ZuEXl1vX8jqk6ymNYA2pgF7lR%2FQTeuU8kfWke4334lo5iwAn0UK3QtgO1%2FPnjCC%2BulmEugb%2FfCSzsMwjV3yzCwf8L%2BfFGInAWpMuC093UGS3fWDzZFEPTgBlJ9vBY2%2BpwtxH1ruxTi7tInMTWyqC42M%2B5rmKTej1Pg5tUlDQYRE5C8gL9NKx3VGoufFASqMnAU0opMJExuLICEtj3hpL0ZG14utp7YezYZFJMKD4mL4GOqUBQPmBGiL8VbVmUxt9EydP%2FNPHeKcMBpnooy2vd7NuYZ1IGGxOWbPBSY%2FNUt8VLQKE8K%2BXIz8VseT4O8bd%2BKuE3wwBUgsU9QtsAA%2BAnNOPt77HZWOXLNkHWYaNLVVYIlaKYddiVOy4l492%2BNUDIyT1xeM5Z03NSNAgtGt1pa0qhGQcWOrA5NZp9by6J5iEgHuQFpjctQ6Gd3Ns8dBYnKYGFZsnQzbl&X-Amz-Signature=b360db4fd880a91b660cda07f377365b3074af874c630ce023af1cf00d552cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYLLFBQN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVh%2FYAesfS%2FV%2B8HA4yVbwnKfinAfoIbY3DaBc1SP1UOwIgCAT8ILqYt5HhXuDHOTmFU0bPzV%2B8Gkj2SDgTcV6CAiwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWHqcP0dWZLshrfRircA0LcEVDWQRj5YFFX%2FuJV3xW%2BXba1LRHEQDZ9zd%2BxK28sggmpA7iVGtVocc69bTcBMcPdt%2FPdrQWJ8Vr%2BBxiZamNbWi56iH2EvdqucxWEbGirhKf1kJGastxOh8qWC2ishdrnsY2m8TbB5Tzkso94%2FxNHQC7CxVyaEP9ZzKOCIgerDd6mfWG3JSBciwnDPI6xzOyUjdDBNtXeFq%2Fz0nJE64G07EuKIp6c7Fp8jgcP7jOYa6JNmQMawFcvx%2FZIs09cWSX3XKj4%2BzSIMLFOGRonEkJXas%2F2yVAEWJ4DqUIu%2FcuCR6diknkBTaExS8Ld3NcBr0PxNCgZEQCfK%2B7GNqCA6Q2SnYV7E4kzzd8GPDNENEneGOCYQnc2hT3etLlxxlmeuxPGf35wem95ZSyoOr5ahRm4ZuEXl1vX8jqk6ymNYA2pgF7lR%2FQTeuU8kfWke4334lo5iwAn0UK3QtgO1%2FPnjCC%2BulmEugb%2FfCSzsMwjV3yzCwf8L%2BfFGInAWpMuC093UGS3fWDzZFEPTgBlJ9vBY2%2BpwtxH1ruxTi7tInMTWyqC42M%2B5rmKTej1Pg5tUlDQYRE5C8gL9NKx3VGoufFASqMnAU0opMJExuLICEtj3hpL0ZG14utp7YezYZFJMKD4mL4GOqUBQPmBGiL8VbVmUxt9EydP%2FNPHeKcMBpnooy2vd7NuYZ1IGGxOWbPBSY%2FNUt8VLQKE8K%2BXIz8VseT4O8bd%2BKuE3wwBUgsU9QtsAA%2BAnNOPt77HZWOXLNkHWYaNLVVYIlaKYddiVOy4l492%2BNUDIyT1xeM5Z03NSNAgtGt1pa0qhGQcWOrA5NZp9by6J5iEgHuQFpjctQ6Gd3Ns8dBYnKYGFZsnQzbl&X-Amz-Signature=d07ea973ae3c8da3b7936dc94cdff230dcaca5ac88c1a610a90ab82539bc0d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYLLFBQN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVh%2FYAesfS%2FV%2B8HA4yVbwnKfinAfoIbY3DaBc1SP1UOwIgCAT8ILqYt5HhXuDHOTmFU0bPzV%2B8Gkj2SDgTcV6CAiwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWHqcP0dWZLshrfRircA0LcEVDWQRj5YFFX%2FuJV3xW%2BXba1LRHEQDZ9zd%2BxK28sggmpA7iVGtVocc69bTcBMcPdt%2FPdrQWJ8Vr%2BBxiZamNbWi56iH2EvdqucxWEbGirhKf1kJGastxOh8qWC2ishdrnsY2m8TbB5Tzkso94%2FxNHQC7CxVyaEP9ZzKOCIgerDd6mfWG3JSBciwnDPI6xzOyUjdDBNtXeFq%2Fz0nJE64G07EuKIp6c7Fp8jgcP7jOYa6JNmQMawFcvx%2FZIs09cWSX3XKj4%2BzSIMLFOGRonEkJXas%2F2yVAEWJ4DqUIu%2FcuCR6diknkBTaExS8Ld3NcBr0PxNCgZEQCfK%2B7GNqCA6Q2SnYV7E4kzzd8GPDNENEneGOCYQnc2hT3etLlxxlmeuxPGf35wem95ZSyoOr5ahRm4ZuEXl1vX8jqk6ymNYA2pgF7lR%2FQTeuU8kfWke4334lo5iwAn0UK3QtgO1%2FPnjCC%2BulmEugb%2FfCSzsMwjV3yzCwf8L%2BfFGInAWpMuC093UGS3fWDzZFEPTgBlJ9vBY2%2BpwtxH1ruxTi7tInMTWyqC42M%2B5rmKTej1Pg5tUlDQYRE5C8gL9NKx3VGoufFASqMnAU0opMJExuLICEtj3hpL0ZG14utp7YezYZFJMKD4mL4GOqUBQPmBGiL8VbVmUxt9EydP%2FNPHeKcMBpnooy2vd7NuYZ1IGGxOWbPBSY%2FNUt8VLQKE8K%2BXIz8VseT4O8bd%2BKuE3wwBUgsU9QtsAA%2BAnNOPt77HZWOXLNkHWYaNLVVYIlaKYddiVOy4l492%2BNUDIyT1xeM5Z03NSNAgtGt1pa0qhGQcWOrA5NZp9by6J5iEgHuQFpjctQ6Gd3Ns8dBYnKYGFZsnQzbl&X-Amz-Signature=446e3fa81511f9ad7bdc166a65781a0157918b04c1c0a8f9f409a4f9395dc937&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYLLFBQN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVh%2FYAesfS%2FV%2B8HA4yVbwnKfinAfoIbY3DaBc1SP1UOwIgCAT8ILqYt5HhXuDHOTmFU0bPzV%2B8Gkj2SDgTcV6CAiwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWHqcP0dWZLshrfRircA0LcEVDWQRj5YFFX%2FuJV3xW%2BXba1LRHEQDZ9zd%2BxK28sggmpA7iVGtVocc69bTcBMcPdt%2FPdrQWJ8Vr%2BBxiZamNbWi56iH2EvdqucxWEbGirhKf1kJGastxOh8qWC2ishdrnsY2m8TbB5Tzkso94%2FxNHQC7CxVyaEP9ZzKOCIgerDd6mfWG3JSBciwnDPI6xzOyUjdDBNtXeFq%2Fz0nJE64G07EuKIp6c7Fp8jgcP7jOYa6JNmQMawFcvx%2FZIs09cWSX3XKj4%2BzSIMLFOGRonEkJXas%2F2yVAEWJ4DqUIu%2FcuCR6diknkBTaExS8Ld3NcBr0PxNCgZEQCfK%2B7GNqCA6Q2SnYV7E4kzzd8GPDNENEneGOCYQnc2hT3etLlxxlmeuxPGf35wem95ZSyoOr5ahRm4ZuEXl1vX8jqk6ymNYA2pgF7lR%2FQTeuU8kfWke4334lo5iwAn0UK3QtgO1%2FPnjCC%2BulmEugb%2FfCSzsMwjV3yzCwf8L%2BfFGInAWpMuC093UGS3fWDzZFEPTgBlJ9vBY2%2BpwtxH1ruxTi7tInMTWyqC42M%2B5rmKTej1Pg5tUlDQYRE5C8gL9NKx3VGoufFASqMnAU0opMJExuLICEtj3hpL0ZG14utp7YezYZFJMKD4mL4GOqUBQPmBGiL8VbVmUxt9EydP%2FNPHeKcMBpnooy2vd7NuYZ1IGGxOWbPBSY%2FNUt8VLQKE8K%2BXIz8VseT4O8bd%2BKuE3wwBUgsU9QtsAA%2BAnNOPt77HZWOXLNkHWYaNLVVYIlaKYddiVOy4l492%2BNUDIyT1xeM5Z03NSNAgtGt1pa0qhGQcWOrA5NZp9by6J5iEgHuQFpjctQ6Gd3Ns8dBYnKYGFZsnQzbl&X-Amz-Signature=07f0a054ba356c333cc73f129ee41e8d9959265071067c3f1886474714f3a422&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYLLFBQN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVh%2FYAesfS%2FV%2B8HA4yVbwnKfinAfoIbY3DaBc1SP1UOwIgCAT8ILqYt5HhXuDHOTmFU0bPzV%2B8Gkj2SDgTcV6CAiwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWHqcP0dWZLshrfRircA0LcEVDWQRj5YFFX%2FuJV3xW%2BXba1LRHEQDZ9zd%2BxK28sggmpA7iVGtVocc69bTcBMcPdt%2FPdrQWJ8Vr%2BBxiZamNbWi56iH2EvdqucxWEbGirhKf1kJGastxOh8qWC2ishdrnsY2m8TbB5Tzkso94%2FxNHQC7CxVyaEP9ZzKOCIgerDd6mfWG3JSBciwnDPI6xzOyUjdDBNtXeFq%2Fz0nJE64G07EuKIp6c7Fp8jgcP7jOYa6JNmQMawFcvx%2FZIs09cWSX3XKj4%2BzSIMLFOGRonEkJXas%2F2yVAEWJ4DqUIu%2FcuCR6diknkBTaExS8Ld3NcBr0PxNCgZEQCfK%2B7GNqCA6Q2SnYV7E4kzzd8GPDNENEneGOCYQnc2hT3etLlxxlmeuxPGf35wem95ZSyoOr5ahRm4ZuEXl1vX8jqk6ymNYA2pgF7lR%2FQTeuU8kfWke4334lo5iwAn0UK3QtgO1%2FPnjCC%2BulmEugb%2FfCSzsMwjV3yzCwf8L%2BfFGInAWpMuC093UGS3fWDzZFEPTgBlJ9vBY2%2BpwtxH1ruxTi7tInMTWyqC42M%2B5rmKTej1Pg5tUlDQYRE5C8gL9NKx3VGoufFASqMnAU0opMJExuLICEtj3hpL0ZG14utp7YezYZFJMKD4mL4GOqUBQPmBGiL8VbVmUxt9EydP%2FNPHeKcMBpnooy2vd7NuYZ1IGGxOWbPBSY%2FNUt8VLQKE8K%2BXIz8VseT4O8bd%2BKuE3wwBUgsU9QtsAA%2BAnNOPt77HZWOXLNkHWYaNLVVYIlaKYddiVOy4l492%2BNUDIyT1xeM5Z03NSNAgtGt1pa0qhGQcWOrA5NZp9by6J5iEgHuQFpjctQ6Gd3Ns8dBYnKYGFZsnQzbl&X-Amz-Signature=7d5b15e023ef432fdfc6ac3cf73c60e5d0c71c4fa3baafcdd25bf94122c983b2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYLLFBQN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVh%2FYAesfS%2FV%2B8HA4yVbwnKfinAfoIbY3DaBc1SP1UOwIgCAT8ILqYt5HhXuDHOTmFU0bPzV%2B8Gkj2SDgTcV6CAiwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWHqcP0dWZLshrfRircA0LcEVDWQRj5YFFX%2FuJV3xW%2BXba1LRHEQDZ9zd%2BxK28sggmpA7iVGtVocc69bTcBMcPdt%2FPdrQWJ8Vr%2BBxiZamNbWi56iH2EvdqucxWEbGirhKf1kJGastxOh8qWC2ishdrnsY2m8TbB5Tzkso94%2FxNHQC7CxVyaEP9ZzKOCIgerDd6mfWG3JSBciwnDPI6xzOyUjdDBNtXeFq%2Fz0nJE64G07EuKIp6c7Fp8jgcP7jOYa6JNmQMawFcvx%2FZIs09cWSX3XKj4%2BzSIMLFOGRonEkJXas%2F2yVAEWJ4DqUIu%2FcuCR6diknkBTaExS8Ld3NcBr0PxNCgZEQCfK%2B7GNqCA6Q2SnYV7E4kzzd8GPDNENEneGOCYQnc2hT3etLlxxlmeuxPGf35wem95ZSyoOr5ahRm4ZuEXl1vX8jqk6ymNYA2pgF7lR%2FQTeuU8kfWke4334lo5iwAn0UK3QtgO1%2FPnjCC%2BulmEugb%2FfCSzsMwjV3yzCwf8L%2BfFGInAWpMuC093UGS3fWDzZFEPTgBlJ9vBY2%2BpwtxH1ruxTi7tInMTWyqC42M%2B5rmKTej1Pg5tUlDQYRE5C8gL9NKx3VGoufFASqMnAU0opMJExuLICEtj3hpL0ZG14utp7YezYZFJMKD4mL4GOqUBQPmBGiL8VbVmUxt9EydP%2FNPHeKcMBpnooy2vd7NuYZ1IGGxOWbPBSY%2FNUt8VLQKE8K%2BXIz8VseT4O8bd%2BKuE3wwBUgsU9QtsAA%2BAnNOPt77HZWOXLNkHWYaNLVVYIlaKYddiVOy4l492%2BNUDIyT1xeM5Z03NSNAgtGt1pa0qhGQcWOrA5NZp9by6J5iEgHuQFpjctQ6Gd3Ns8dBYnKYGFZsnQzbl&X-Amz-Signature=d8d1c58cb638d02582efd19f8ab80e5da4b8bc527e141c10d0fdc48c77e73079&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNVYOSQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B90MG6VQ%2F3B%2Ftp3%2FDjeks46pEgOHzrOqeBIbHHYz95AiEA9PK5A4dF4R9R3BVvjDZpiiFCtxLX9wI%2BAmZLw34Zl60qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoMU8iAmtpEHuKewSrcA7%2B1GNvJqlMssypSobrYN31ZS1ClW56xCHXGXZhn2f5ojlS%2B9dlAkFFSjuQsUecRxbz%2F2ZFD7SiZsDvVTY%2FkjRB9r5%2Ff68YvxmsZtdSbBi%2BIomL57CXDVtaLlxE3YNzEm%2FCDvqfiRoFyXY%2F7OVU1E3fRsm7nuYoDw%2BHTNCOSUqCs36kpi7qXC56%2FBNw6ILTb4jrxWRmkg2hU180412ty6XJ8gx7hVbb602tXG758tvNIWSN%2BUL98Nx%2BKDMPzxr24ZJciusaSxcVqqzpYBUO8HSWSZVCplrGGtO1wRdWEC%2F5be13HlXgou%2BrNoFkJrcjqnomF%2F8AaFwCvqr%2FNFeh9%2BnMs40rgj%2BnBcPpNr2MZEpv8Ebufd743RCAPINUaanubZX%2BiqSuWIzJizkxODY2jFc6nzSYjnjrAXg0hMoFb6pEA8IOtEg%2BTWKnvn0wqGVrKzYd%2F4SxSaoxgkLP4uBpblROxhQuRs1dvN936C8j4NFwoxr055WUHY3epPjkwLIEmeYBvuX19axudZvKAP7rI5jobVw4FqRwelCQraiG%2BR11%2Bq46DyI1H3MaeI1x8b873S2KUphcPwUWWaQfWIEz8PseA01%2FFw8Bu0q%2BRFnGwrWUmnd7zDWCMJ0uE6OcIML73w8AGOqUBDn47JrggsYizUtKtRuTKZGIryfZ8RjwYDEk86EegoKr8KZTqVIghP5Qn%2FIkJ8%2Byqw6KDWmenBdIjwVlYFAvohH%2BgA450G6S1MD8oRnKrKlPBl7qys9fHUk8umDK%2FuDBDLTSBQenGc0Ywc3ORd62mW3Cbq4GAADoDFhNmlmEFQbHv6pJ89DlF%2F2Kj9a1RRZ9LPggCQRVoYszRVFnQZHlykLoMkf%2Fw&X-Amz-Signature=93f7096b9188ec4fe274bafce1771f8231d71ddcf35f96cfa78e5f8da4c961f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNVYOSQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B90MG6VQ%2F3B%2Ftp3%2FDjeks46pEgOHzrOqeBIbHHYz95AiEA9PK5A4dF4R9R3BVvjDZpiiFCtxLX9wI%2BAmZLw34Zl60qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoMU8iAmtpEHuKewSrcA7%2B1GNvJqlMssypSobrYN31ZS1ClW56xCHXGXZhn2f5ojlS%2B9dlAkFFSjuQsUecRxbz%2F2ZFD7SiZsDvVTY%2FkjRB9r5%2Ff68YvxmsZtdSbBi%2BIomL57CXDVtaLlxE3YNzEm%2FCDvqfiRoFyXY%2F7OVU1E3fRsm7nuYoDw%2BHTNCOSUqCs36kpi7qXC56%2FBNw6ILTb4jrxWRmkg2hU180412ty6XJ8gx7hVbb602tXG758tvNIWSN%2BUL98Nx%2BKDMPzxr24ZJciusaSxcVqqzpYBUO8HSWSZVCplrGGtO1wRdWEC%2F5be13HlXgou%2BrNoFkJrcjqnomF%2F8AaFwCvqr%2FNFeh9%2BnMs40rgj%2BnBcPpNr2MZEpv8Ebufd743RCAPINUaanubZX%2BiqSuWIzJizkxODY2jFc6nzSYjnjrAXg0hMoFb6pEA8IOtEg%2BTWKnvn0wqGVrKzYd%2F4SxSaoxgkLP4uBpblROxhQuRs1dvN936C8j4NFwoxr055WUHY3epPjkwLIEmeYBvuX19axudZvKAP7rI5jobVw4FqRwelCQraiG%2BR11%2Bq46DyI1H3MaeI1x8b873S2KUphcPwUWWaQfWIEz8PseA01%2FFw8Bu0q%2BRFnGwrWUmnd7zDWCMJ0uE6OcIML73w8AGOqUBDn47JrggsYizUtKtRuTKZGIryfZ8RjwYDEk86EegoKr8KZTqVIghP5Qn%2FIkJ8%2Byqw6KDWmenBdIjwVlYFAvohH%2BgA450G6S1MD8oRnKrKlPBl7qys9fHUk8umDK%2FuDBDLTSBQenGc0Ywc3ORd62mW3Cbq4GAADoDFhNmlmEFQbHv6pJ89DlF%2F2Kj9a1RRZ9LPggCQRVoYszRVFnQZHlykLoMkf%2Fw&X-Amz-Signature=f92cb2cf3e63cd9bd67269d34fbd3ff102743876aba352943a6fea20baf7882b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNVYOSQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B90MG6VQ%2F3B%2Ftp3%2FDjeks46pEgOHzrOqeBIbHHYz95AiEA9PK5A4dF4R9R3BVvjDZpiiFCtxLX9wI%2BAmZLw34Zl60qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoMU8iAmtpEHuKewSrcA7%2B1GNvJqlMssypSobrYN31ZS1ClW56xCHXGXZhn2f5ojlS%2B9dlAkFFSjuQsUecRxbz%2F2ZFD7SiZsDvVTY%2FkjRB9r5%2Ff68YvxmsZtdSbBi%2BIomL57CXDVtaLlxE3YNzEm%2FCDvqfiRoFyXY%2F7OVU1E3fRsm7nuYoDw%2BHTNCOSUqCs36kpi7qXC56%2FBNw6ILTb4jrxWRmkg2hU180412ty6XJ8gx7hVbb602tXG758tvNIWSN%2BUL98Nx%2BKDMPzxr24ZJciusaSxcVqqzpYBUO8HSWSZVCplrGGtO1wRdWEC%2F5be13HlXgou%2BrNoFkJrcjqnomF%2F8AaFwCvqr%2FNFeh9%2BnMs40rgj%2BnBcPpNr2MZEpv8Ebufd743RCAPINUaanubZX%2BiqSuWIzJizkxODY2jFc6nzSYjnjrAXg0hMoFb6pEA8IOtEg%2BTWKnvn0wqGVrKzYd%2F4SxSaoxgkLP4uBpblROxhQuRs1dvN936C8j4NFwoxr055WUHY3epPjkwLIEmeYBvuX19axudZvKAP7rI5jobVw4FqRwelCQraiG%2BR11%2Bq46DyI1H3MaeI1x8b873S2KUphcPwUWWaQfWIEz8PseA01%2FFw8Bu0q%2BRFnGwrWUmnd7zDWCMJ0uE6OcIML73w8AGOqUBDn47JrggsYizUtKtRuTKZGIryfZ8RjwYDEk86EegoKr8KZTqVIghP5Qn%2FIkJ8%2Byqw6KDWmenBdIjwVlYFAvohH%2BgA450G6S1MD8oRnKrKlPBl7qys9fHUk8umDK%2FuDBDLTSBQenGc0Ywc3ORd62mW3Cbq4GAADoDFhNmlmEFQbHv6pJ89DlF%2F2Kj9a1RRZ9LPggCQRVoYszRVFnQZHlykLoMkf%2Fw&X-Amz-Signature=1a5a486a8f82718c9c9bd7c9c200e4fe3935f73575e27e279b525760609ba24c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNVYOSQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B90MG6VQ%2F3B%2Ftp3%2FDjeks46pEgOHzrOqeBIbHHYz95AiEA9PK5A4dF4R9R3BVvjDZpiiFCtxLX9wI%2BAmZLw34Zl60qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoMU8iAmtpEHuKewSrcA7%2B1GNvJqlMssypSobrYN31ZS1ClW56xCHXGXZhn2f5ojlS%2B9dlAkFFSjuQsUecRxbz%2F2ZFD7SiZsDvVTY%2FkjRB9r5%2Ff68YvxmsZtdSbBi%2BIomL57CXDVtaLlxE3YNzEm%2FCDvqfiRoFyXY%2F7OVU1E3fRsm7nuYoDw%2BHTNCOSUqCs36kpi7qXC56%2FBNw6ILTb4jrxWRmkg2hU180412ty6XJ8gx7hVbb602tXG758tvNIWSN%2BUL98Nx%2BKDMPzxr24ZJciusaSxcVqqzpYBUO8HSWSZVCplrGGtO1wRdWEC%2F5be13HlXgou%2BrNoFkJrcjqnomF%2F8AaFwCvqr%2FNFeh9%2BnMs40rgj%2BnBcPpNr2MZEpv8Ebufd743RCAPINUaanubZX%2BiqSuWIzJizkxODY2jFc6nzSYjnjrAXg0hMoFb6pEA8IOtEg%2BTWKnvn0wqGVrKzYd%2F4SxSaoxgkLP4uBpblROxhQuRs1dvN936C8j4NFwoxr055WUHY3epPjkwLIEmeYBvuX19axudZvKAP7rI5jobVw4FqRwelCQraiG%2BR11%2Bq46DyI1H3MaeI1x8b873S2KUphcPwUWWaQfWIEz8PseA01%2FFw8Bu0q%2BRFnGwrWUmnd7zDWCMJ0uE6OcIML73w8AGOqUBDn47JrggsYizUtKtRuTKZGIryfZ8RjwYDEk86EegoKr8KZTqVIghP5Qn%2FIkJ8%2Byqw6KDWmenBdIjwVlYFAvohH%2BgA450G6S1MD8oRnKrKlPBl7qys9fHUk8umDK%2FuDBDLTSBQenGc0Ywc3ORd62mW3Cbq4GAADoDFhNmlmEFQbHv6pJ89DlF%2F2Kj9a1RRZ9LPggCQRVoYszRVFnQZHlykLoMkf%2Fw&X-Amz-Signature=0f65276ff47826c08b8a03dca34a57dcd0ca165195bcfb3e95b9dae7a24b4c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNVYOSQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B90MG6VQ%2F3B%2Ftp3%2FDjeks46pEgOHzrOqeBIbHHYz95AiEA9PK5A4dF4R9R3BVvjDZpiiFCtxLX9wI%2BAmZLw34Zl60qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoMU8iAmtpEHuKewSrcA7%2B1GNvJqlMssypSobrYN31ZS1ClW56xCHXGXZhn2f5ojlS%2B9dlAkFFSjuQsUecRxbz%2F2ZFD7SiZsDvVTY%2FkjRB9r5%2Ff68YvxmsZtdSbBi%2BIomL57CXDVtaLlxE3YNzEm%2FCDvqfiRoFyXY%2F7OVU1E3fRsm7nuYoDw%2BHTNCOSUqCs36kpi7qXC56%2FBNw6ILTb4jrxWRmkg2hU180412ty6XJ8gx7hVbb602tXG758tvNIWSN%2BUL98Nx%2BKDMPzxr24ZJciusaSxcVqqzpYBUO8HSWSZVCplrGGtO1wRdWEC%2F5be13HlXgou%2BrNoFkJrcjqnomF%2F8AaFwCvqr%2FNFeh9%2BnMs40rgj%2BnBcPpNr2MZEpv8Ebufd743RCAPINUaanubZX%2BiqSuWIzJizkxODY2jFc6nzSYjnjrAXg0hMoFb6pEA8IOtEg%2BTWKnvn0wqGVrKzYd%2F4SxSaoxgkLP4uBpblROxhQuRs1dvN936C8j4NFwoxr055WUHY3epPjkwLIEmeYBvuX19axudZvKAP7rI5jobVw4FqRwelCQraiG%2BR11%2Bq46DyI1H3MaeI1x8b873S2KUphcPwUWWaQfWIEz8PseA01%2FFw8Bu0q%2BRFnGwrWUmnd7zDWCMJ0uE6OcIML73w8AGOqUBDn47JrggsYizUtKtRuTKZGIryfZ8RjwYDEk86EegoKr8KZTqVIghP5Qn%2FIkJ8%2Byqw6KDWmenBdIjwVlYFAvohH%2BgA450G6S1MD8oRnKrKlPBl7qys9fHUk8umDK%2FuDBDLTSBQenGc0Ywc3ORd62mW3Cbq4GAADoDFhNmlmEFQbHv6pJ89DlF%2F2Kj9a1RRZ9LPggCQRVoYszRVFnQZHlykLoMkf%2Fw&X-Amz-Signature=4ffc8d1f9e4bad15ba093e30f1ac41aaf849fe6811f03af7f0390c50887b4e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNVYOSQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B90MG6VQ%2F3B%2Ftp3%2FDjeks46pEgOHzrOqeBIbHHYz95AiEA9PK5A4dF4R9R3BVvjDZpiiFCtxLX9wI%2BAmZLw34Zl60qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoMU8iAmtpEHuKewSrcA7%2B1GNvJqlMssypSobrYN31ZS1ClW56xCHXGXZhn2f5ojlS%2B9dlAkFFSjuQsUecRxbz%2F2ZFD7SiZsDvVTY%2FkjRB9r5%2Ff68YvxmsZtdSbBi%2BIomL57CXDVtaLlxE3YNzEm%2FCDvqfiRoFyXY%2F7OVU1E3fRsm7nuYoDw%2BHTNCOSUqCs36kpi7qXC56%2FBNw6ILTb4jrxWRmkg2hU180412ty6XJ8gx7hVbb602tXG758tvNIWSN%2BUL98Nx%2BKDMPzxr24ZJciusaSxcVqqzpYBUO8HSWSZVCplrGGtO1wRdWEC%2F5be13HlXgou%2BrNoFkJrcjqnomF%2F8AaFwCvqr%2FNFeh9%2BnMs40rgj%2BnBcPpNr2MZEpv8Ebufd743RCAPINUaanubZX%2BiqSuWIzJizkxODY2jFc6nzSYjnjrAXg0hMoFb6pEA8IOtEg%2BTWKnvn0wqGVrKzYd%2F4SxSaoxgkLP4uBpblROxhQuRs1dvN936C8j4NFwoxr055WUHY3epPjkwLIEmeYBvuX19axudZvKAP7rI5jobVw4FqRwelCQraiG%2BR11%2Bq46DyI1H3MaeI1x8b873S2KUphcPwUWWaQfWIEz8PseA01%2FFw8Bu0q%2BRFnGwrWUmnd7zDWCMJ0uE6OcIML73w8AGOqUBDn47JrggsYizUtKtRuTKZGIryfZ8RjwYDEk86EegoKr8KZTqVIghP5Qn%2FIkJ8%2Byqw6KDWmenBdIjwVlYFAvohH%2BgA450G6S1MD8oRnKrKlPBl7qys9fHUk8umDK%2FuDBDLTSBQenGc0Ywc3ORd62mW3Cbq4GAADoDFhNmlmEFQbHv6pJ89DlF%2F2Kj9a1RRZ9LPggCQRVoYszRVFnQZHlykLoMkf%2Fw&X-Amz-Signature=289c4824a1dbc603c47f713e56b4a80641768354abf439a6546e833ed6b26ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNVYOSQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B90MG6VQ%2F3B%2Ftp3%2FDjeks46pEgOHzrOqeBIbHHYz95AiEA9PK5A4dF4R9R3BVvjDZpiiFCtxLX9wI%2BAmZLw34Zl60qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoMU8iAmtpEHuKewSrcA7%2B1GNvJqlMssypSobrYN31ZS1ClW56xCHXGXZhn2f5ojlS%2B9dlAkFFSjuQsUecRxbz%2F2ZFD7SiZsDvVTY%2FkjRB9r5%2Ff68YvxmsZtdSbBi%2BIomL57CXDVtaLlxE3YNzEm%2FCDvqfiRoFyXY%2F7OVU1E3fRsm7nuYoDw%2BHTNCOSUqCs36kpi7qXC56%2FBNw6ILTb4jrxWRmkg2hU180412ty6XJ8gx7hVbb602tXG758tvNIWSN%2BUL98Nx%2BKDMPzxr24ZJciusaSxcVqqzpYBUO8HSWSZVCplrGGtO1wRdWEC%2F5be13HlXgou%2BrNoFkJrcjqnomF%2F8AaFwCvqr%2FNFeh9%2BnMs40rgj%2BnBcPpNr2MZEpv8Ebufd743RCAPINUaanubZX%2BiqSuWIzJizkxODY2jFc6nzSYjnjrAXg0hMoFb6pEA8IOtEg%2BTWKnvn0wqGVrKzYd%2F4SxSaoxgkLP4uBpblROxhQuRs1dvN936C8j4NFwoxr055WUHY3epPjkwLIEmeYBvuX19axudZvKAP7rI5jobVw4FqRwelCQraiG%2BR11%2Bq46DyI1H3MaeI1x8b873S2KUphcPwUWWaQfWIEz8PseA01%2FFw8Bu0q%2BRFnGwrWUmnd7zDWCMJ0uE6OcIML73w8AGOqUBDn47JrggsYizUtKtRuTKZGIryfZ8RjwYDEk86EegoKr8KZTqVIghP5Qn%2FIkJ8%2Byqw6KDWmenBdIjwVlYFAvohH%2BgA450G6S1MD8oRnKrKlPBl7qys9fHUk8umDK%2FuDBDLTSBQenGc0Ywc3ORd62mW3Cbq4GAADoDFhNmlmEFQbHv6pJ89DlF%2F2Kj9a1RRZ9LPggCQRVoYszRVFnQZHlykLoMkf%2Fw&X-Amz-Signature=c607f3434824ee84d9a94d3950857ac38fc74007a126a4c87550879500d4f4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

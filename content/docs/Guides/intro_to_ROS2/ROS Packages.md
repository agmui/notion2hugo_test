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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFGJQSZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiM61iRLyA%2F%2BJB8T5gkhicI%2B47nOHVbCgR3l0GIMvV6QIgD%2FMmveKs9eyHAk9cN5%2FDjiFoG%2F8%2F6oc3hU7raHYAKqEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW3QsKGXFnbzPHWWSrcAyah2OEWeTjx7LczrZSan1vLng6YdlFs9tShqE%2B%2BG4lUQppZrPzaFyRoSsfS8PBl5V8BrgSFZd8ebt7c4ZErXXIhckIlGx6%2BCiFC%2FUGKGtucdCKC6ExbR0ig1bQ7FbBf%2F6oBeTYbeuFhrMSdgGgfBX05MU9Q%2BVPQLxSeDTgPxhwps7HR5AFUJIBdPut1m4Jf3B%2Fh24a9H7rcHAgU135pLZzTaqaWv5x5uXYALlEsbx6WLpR9l58nV%2FtoJMKhcyAYI7Vb4ReBbxl6BpswHaUWXDfpHrZF%2ByZkH0UGY1JH6Yp9%2BSC0Wu0WZrAtFNL%2BezXr7S1o2VDLcEARkl828m7OBhglTLJ5xtrSo8bb7HtoR70paYt5m1DHa6U4Ysz%2FYSM78J9ArnirrylKfUYifvjsaSYY%2FavboJ%2BJ39zKtRDHothdWX3Bl2uQx1V0qz6Oyu3uLMvgEkD57hP2DxWJCIKm66KGUR2OkuEbEJySUL1GPFGZnwkx%2B6Kaay3qVlvkNaoYbLNzNBCn8bYilXOI0I2Tn8gQxZnVUAV1qz6JycCuo%2BVgXkhL9dOqkcV6w%2FoRBJLwRxS5j3UxiZ4vzcLSJ6YJXnWDIxYpGMiK93ps7cAICXIL%2FsvwfzN90WKD20%2BBMPzAyr4GOqUBaizfuKQfIwPqwK4C%2FFgrJCfIVxxj2dCmo6E%2FIDVcg1Z5v6M%2B9gHWjmEDf7bTukRMfKStoN37Htt4PUpzxLLqXPwQx4eYs7w9yIeinHLbTyP6oifWx%2FLU96CGHiIlIPWaZt%2FfcE3T51BNDMMXD9VGIbKsZo15B%2B6KYDb5iKx%2F6ce8kPK92Bts%2B5S%2BZ5tBD2k4y26D%2FXk9V84sTH0g5a7uv9XWVlM2&X-Amz-Signature=36996e06494ed1c9b9babdea8d495da56637226a230488015d3fc678fda0e6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFGJQSZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiM61iRLyA%2F%2BJB8T5gkhicI%2B47nOHVbCgR3l0GIMvV6QIgD%2FMmveKs9eyHAk9cN5%2FDjiFoG%2F8%2F6oc3hU7raHYAKqEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW3QsKGXFnbzPHWWSrcAyah2OEWeTjx7LczrZSan1vLng6YdlFs9tShqE%2B%2BG4lUQppZrPzaFyRoSsfS8PBl5V8BrgSFZd8ebt7c4ZErXXIhckIlGx6%2BCiFC%2FUGKGtucdCKC6ExbR0ig1bQ7FbBf%2F6oBeTYbeuFhrMSdgGgfBX05MU9Q%2BVPQLxSeDTgPxhwps7HR5AFUJIBdPut1m4Jf3B%2Fh24a9H7rcHAgU135pLZzTaqaWv5x5uXYALlEsbx6WLpR9l58nV%2FtoJMKhcyAYI7Vb4ReBbxl6BpswHaUWXDfpHrZF%2ByZkH0UGY1JH6Yp9%2BSC0Wu0WZrAtFNL%2BezXr7S1o2VDLcEARkl828m7OBhglTLJ5xtrSo8bb7HtoR70paYt5m1DHa6U4Ysz%2FYSM78J9ArnirrylKfUYifvjsaSYY%2FavboJ%2BJ39zKtRDHothdWX3Bl2uQx1V0qz6Oyu3uLMvgEkD57hP2DxWJCIKm66KGUR2OkuEbEJySUL1GPFGZnwkx%2B6Kaay3qVlvkNaoYbLNzNBCn8bYilXOI0I2Tn8gQxZnVUAV1qz6JycCuo%2BVgXkhL9dOqkcV6w%2FoRBJLwRxS5j3UxiZ4vzcLSJ6YJXnWDIxYpGMiK93ps7cAICXIL%2FsvwfzN90WKD20%2BBMPzAyr4GOqUBaizfuKQfIwPqwK4C%2FFgrJCfIVxxj2dCmo6E%2FIDVcg1Z5v6M%2B9gHWjmEDf7bTukRMfKStoN37Htt4PUpzxLLqXPwQx4eYs7w9yIeinHLbTyP6oifWx%2FLU96CGHiIlIPWaZt%2FfcE3T51BNDMMXD9VGIbKsZo15B%2B6KYDb5iKx%2F6ce8kPK92Bts%2B5S%2BZ5tBD2k4y26D%2FXk9V84sTH0g5a7uv9XWVlM2&X-Amz-Signature=4c9369c7482162ccc6377bbcc41b8f599fd96a90288463f4a108e58ebbe5871d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFGJQSZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiM61iRLyA%2F%2BJB8T5gkhicI%2B47nOHVbCgR3l0GIMvV6QIgD%2FMmveKs9eyHAk9cN5%2FDjiFoG%2F8%2F6oc3hU7raHYAKqEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW3QsKGXFnbzPHWWSrcAyah2OEWeTjx7LczrZSan1vLng6YdlFs9tShqE%2B%2BG4lUQppZrPzaFyRoSsfS8PBl5V8BrgSFZd8ebt7c4ZErXXIhckIlGx6%2BCiFC%2FUGKGtucdCKC6ExbR0ig1bQ7FbBf%2F6oBeTYbeuFhrMSdgGgfBX05MU9Q%2BVPQLxSeDTgPxhwps7HR5AFUJIBdPut1m4Jf3B%2Fh24a9H7rcHAgU135pLZzTaqaWv5x5uXYALlEsbx6WLpR9l58nV%2FtoJMKhcyAYI7Vb4ReBbxl6BpswHaUWXDfpHrZF%2ByZkH0UGY1JH6Yp9%2BSC0Wu0WZrAtFNL%2BezXr7S1o2VDLcEARkl828m7OBhglTLJ5xtrSo8bb7HtoR70paYt5m1DHa6U4Ysz%2FYSM78J9ArnirrylKfUYifvjsaSYY%2FavboJ%2BJ39zKtRDHothdWX3Bl2uQx1V0qz6Oyu3uLMvgEkD57hP2DxWJCIKm66KGUR2OkuEbEJySUL1GPFGZnwkx%2B6Kaay3qVlvkNaoYbLNzNBCn8bYilXOI0I2Tn8gQxZnVUAV1qz6JycCuo%2BVgXkhL9dOqkcV6w%2FoRBJLwRxS5j3UxiZ4vzcLSJ6YJXnWDIxYpGMiK93ps7cAICXIL%2FsvwfzN90WKD20%2BBMPzAyr4GOqUBaizfuKQfIwPqwK4C%2FFgrJCfIVxxj2dCmo6E%2FIDVcg1Z5v6M%2B9gHWjmEDf7bTukRMfKStoN37Htt4PUpzxLLqXPwQx4eYs7w9yIeinHLbTyP6oifWx%2FLU96CGHiIlIPWaZt%2FfcE3T51BNDMMXD9VGIbKsZo15B%2B6KYDb5iKx%2F6ce8kPK92Bts%2B5S%2BZ5tBD2k4y26D%2FXk9V84sTH0g5a7uv9XWVlM2&X-Amz-Signature=51e33914efe60b7fd1620c94016c52e9405804e61202c8b259fb8b83ce19c522&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFGJQSZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiM61iRLyA%2F%2BJB8T5gkhicI%2B47nOHVbCgR3l0GIMvV6QIgD%2FMmveKs9eyHAk9cN5%2FDjiFoG%2F8%2F6oc3hU7raHYAKqEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW3QsKGXFnbzPHWWSrcAyah2OEWeTjx7LczrZSan1vLng6YdlFs9tShqE%2B%2BG4lUQppZrPzaFyRoSsfS8PBl5V8BrgSFZd8ebt7c4ZErXXIhckIlGx6%2BCiFC%2FUGKGtucdCKC6ExbR0ig1bQ7FbBf%2F6oBeTYbeuFhrMSdgGgfBX05MU9Q%2BVPQLxSeDTgPxhwps7HR5AFUJIBdPut1m4Jf3B%2Fh24a9H7rcHAgU135pLZzTaqaWv5x5uXYALlEsbx6WLpR9l58nV%2FtoJMKhcyAYI7Vb4ReBbxl6BpswHaUWXDfpHrZF%2ByZkH0UGY1JH6Yp9%2BSC0Wu0WZrAtFNL%2BezXr7S1o2VDLcEARkl828m7OBhglTLJ5xtrSo8bb7HtoR70paYt5m1DHa6U4Ysz%2FYSM78J9ArnirrylKfUYifvjsaSYY%2FavboJ%2BJ39zKtRDHothdWX3Bl2uQx1V0qz6Oyu3uLMvgEkD57hP2DxWJCIKm66KGUR2OkuEbEJySUL1GPFGZnwkx%2B6Kaay3qVlvkNaoYbLNzNBCn8bYilXOI0I2Tn8gQxZnVUAV1qz6JycCuo%2BVgXkhL9dOqkcV6w%2FoRBJLwRxS5j3UxiZ4vzcLSJ6YJXnWDIxYpGMiK93ps7cAICXIL%2FsvwfzN90WKD20%2BBMPzAyr4GOqUBaizfuKQfIwPqwK4C%2FFgrJCfIVxxj2dCmo6E%2FIDVcg1Z5v6M%2B9gHWjmEDf7bTukRMfKStoN37Htt4PUpzxLLqXPwQx4eYs7w9yIeinHLbTyP6oifWx%2FLU96CGHiIlIPWaZt%2FfcE3T51BNDMMXD9VGIbKsZo15B%2B6KYDb5iKx%2F6ce8kPK92Bts%2B5S%2BZ5tBD2k4y26D%2FXk9V84sTH0g5a7uv9XWVlM2&X-Amz-Signature=1c2b5476460ada1a48af237fbd810c4cca6064bf4763e377aca4996caca594a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFGJQSZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiM61iRLyA%2F%2BJB8T5gkhicI%2B47nOHVbCgR3l0GIMvV6QIgD%2FMmveKs9eyHAk9cN5%2FDjiFoG%2F8%2F6oc3hU7raHYAKqEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW3QsKGXFnbzPHWWSrcAyah2OEWeTjx7LczrZSan1vLng6YdlFs9tShqE%2B%2BG4lUQppZrPzaFyRoSsfS8PBl5V8BrgSFZd8ebt7c4ZErXXIhckIlGx6%2BCiFC%2FUGKGtucdCKC6ExbR0ig1bQ7FbBf%2F6oBeTYbeuFhrMSdgGgfBX05MU9Q%2BVPQLxSeDTgPxhwps7HR5AFUJIBdPut1m4Jf3B%2Fh24a9H7rcHAgU135pLZzTaqaWv5x5uXYALlEsbx6WLpR9l58nV%2FtoJMKhcyAYI7Vb4ReBbxl6BpswHaUWXDfpHrZF%2ByZkH0UGY1JH6Yp9%2BSC0Wu0WZrAtFNL%2BezXr7S1o2VDLcEARkl828m7OBhglTLJ5xtrSo8bb7HtoR70paYt5m1DHa6U4Ysz%2FYSM78J9ArnirrylKfUYifvjsaSYY%2FavboJ%2BJ39zKtRDHothdWX3Bl2uQx1V0qz6Oyu3uLMvgEkD57hP2DxWJCIKm66KGUR2OkuEbEJySUL1GPFGZnwkx%2B6Kaay3qVlvkNaoYbLNzNBCn8bYilXOI0I2Tn8gQxZnVUAV1qz6JycCuo%2BVgXkhL9dOqkcV6w%2FoRBJLwRxS5j3UxiZ4vzcLSJ6YJXnWDIxYpGMiK93ps7cAICXIL%2FsvwfzN90WKD20%2BBMPzAyr4GOqUBaizfuKQfIwPqwK4C%2FFgrJCfIVxxj2dCmo6E%2FIDVcg1Z5v6M%2B9gHWjmEDf7bTukRMfKStoN37Htt4PUpzxLLqXPwQx4eYs7w9yIeinHLbTyP6oifWx%2FLU96CGHiIlIPWaZt%2FfcE3T51BNDMMXD9VGIbKsZo15B%2B6KYDb5iKx%2F6ce8kPK92Bts%2B5S%2BZ5tBD2k4y26D%2FXk9V84sTH0g5a7uv9XWVlM2&X-Amz-Signature=bf3ff63d80e6f3b8a085f538ae4f5c3b46ffaaf318aeee7e6d88aa61de2394b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFGJQSZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiM61iRLyA%2F%2BJB8T5gkhicI%2B47nOHVbCgR3l0GIMvV6QIgD%2FMmveKs9eyHAk9cN5%2FDjiFoG%2F8%2F6oc3hU7raHYAKqEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW3QsKGXFnbzPHWWSrcAyah2OEWeTjx7LczrZSan1vLng6YdlFs9tShqE%2B%2BG4lUQppZrPzaFyRoSsfS8PBl5V8BrgSFZd8ebt7c4ZErXXIhckIlGx6%2BCiFC%2FUGKGtucdCKC6ExbR0ig1bQ7FbBf%2F6oBeTYbeuFhrMSdgGgfBX05MU9Q%2BVPQLxSeDTgPxhwps7HR5AFUJIBdPut1m4Jf3B%2Fh24a9H7rcHAgU135pLZzTaqaWv5x5uXYALlEsbx6WLpR9l58nV%2FtoJMKhcyAYI7Vb4ReBbxl6BpswHaUWXDfpHrZF%2ByZkH0UGY1JH6Yp9%2BSC0Wu0WZrAtFNL%2BezXr7S1o2VDLcEARkl828m7OBhglTLJ5xtrSo8bb7HtoR70paYt5m1DHa6U4Ysz%2FYSM78J9ArnirrylKfUYifvjsaSYY%2FavboJ%2BJ39zKtRDHothdWX3Bl2uQx1V0qz6Oyu3uLMvgEkD57hP2DxWJCIKm66KGUR2OkuEbEJySUL1GPFGZnwkx%2B6Kaay3qVlvkNaoYbLNzNBCn8bYilXOI0I2Tn8gQxZnVUAV1qz6JycCuo%2BVgXkhL9dOqkcV6w%2FoRBJLwRxS5j3UxiZ4vzcLSJ6YJXnWDIxYpGMiK93ps7cAICXIL%2FsvwfzN90WKD20%2BBMPzAyr4GOqUBaizfuKQfIwPqwK4C%2FFgrJCfIVxxj2dCmo6E%2FIDVcg1Z5v6M%2B9gHWjmEDf7bTukRMfKStoN37Htt4PUpzxLLqXPwQx4eYs7w9yIeinHLbTyP6oifWx%2FLU96CGHiIlIPWaZt%2FfcE3T51BNDMMXD9VGIbKsZo15B%2B6KYDb5iKx%2F6ce8kPK92Bts%2B5S%2BZ5tBD2k4y26D%2FXk9V84sTH0g5a7uv9XWVlM2&X-Amz-Signature=43d99032d7fa410b80bb5464a6ccf163f69f6d8cd11a84e1c4eb721c75150faa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFGJQSZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiM61iRLyA%2F%2BJB8T5gkhicI%2B47nOHVbCgR3l0GIMvV6QIgD%2FMmveKs9eyHAk9cN5%2FDjiFoG%2F8%2F6oc3hU7raHYAKqEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW3QsKGXFnbzPHWWSrcAyah2OEWeTjx7LczrZSan1vLng6YdlFs9tShqE%2B%2BG4lUQppZrPzaFyRoSsfS8PBl5V8BrgSFZd8ebt7c4ZErXXIhckIlGx6%2BCiFC%2FUGKGtucdCKC6ExbR0ig1bQ7FbBf%2F6oBeTYbeuFhrMSdgGgfBX05MU9Q%2BVPQLxSeDTgPxhwps7HR5AFUJIBdPut1m4Jf3B%2Fh24a9H7rcHAgU135pLZzTaqaWv5x5uXYALlEsbx6WLpR9l58nV%2FtoJMKhcyAYI7Vb4ReBbxl6BpswHaUWXDfpHrZF%2ByZkH0UGY1JH6Yp9%2BSC0Wu0WZrAtFNL%2BezXr7S1o2VDLcEARkl828m7OBhglTLJ5xtrSo8bb7HtoR70paYt5m1DHa6U4Ysz%2FYSM78J9ArnirrylKfUYifvjsaSYY%2FavboJ%2BJ39zKtRDHothdWX3Bl2uQx1V0qz6Oyu3uLMvgEkD57hP2DxWJCIKm66KGUR2OkuEbEJySUL1GPFGZnwkx%2B6Kaay3qVlvkNaoYbLNzNBCn8bYilXOI0I2Tn8gQxZnVUAV1qz6JycCuo%2BVgXkhL9dOqkcV6w%2FoRBJLwRxS5j3UxiZ4vzcLSJ6YJXnWDIxYpGMiK93ps7cAICXIL%2FsvwfzN90WKD20%2BBMPzAyr4GOqUBaizfuKQfIwPqwK4C%2FFgrJCfIVxxj2dCmo6E%2FIDVcg1Z5v6M%2B9gHWjmEDf7bTukRMfKStoN37Htt4PUpzxLLqXPwQx4eYs7w9yIeinHLbTyP6oifWx%2FLU96CGHiIlIPWaZt%2FfcE3T51BNDMMXD9VGIbKsZo15B%2B6KYDb5iKx%2F6ce8kPK92Bts%2B5S%2BZ5tBD2k4y26D%2FXk9V84sTH0g5a7uv9XWVlM2&X-Amz-Signature=75ae5a69b73430436367f978d0ae96000077d2fdbab4ec0cc019368b59efd2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

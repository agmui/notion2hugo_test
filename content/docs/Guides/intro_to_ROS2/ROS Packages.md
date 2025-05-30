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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZPOD7R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDal1crDLjplP3hnmIVecBYBBLeXF6XlPW1ckJM3ITh6AiEA4sHqYbn9G6B%2FBKIx2c%2BjYVe8C2N1SslOUaN8ebmTIs8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPunGXOEWmdiI1S3VircA8sZcN1CrmqpMZN8HVv3beRpHj8iFrPF2kjQhiu0q2SRqiMaQbkumc4Fb%2BL%2F851731xjXBz3KUhuOCd8DJR5dICvqxxaJJ%2Fzehu5TuEcIT4u%2Fk7p%2BRJUnfVwjLDs9zT7%2BJPOi3k84yqmSX4%2Brh3aLDSmjOuEhW6yvhWGTvJ6WC2LLq%2FvVbK4xR%2B%2FkBLteQUSrkwHZdM%2BmQK6rMjayJaGlV4f9T9vSjitMtim%2F0RSuw%2B6gIt%2BlP7IyLMI2ymQHfV0mRytdU8oyV4b%2F6l6N7%2FmBY1ImqO9wE9RxMJClExk79if6V2w7A1sVqTP%2B4KyRxeTfHGHiYBYArNQXlbJcOOEW%2BA4nssxIJmAiT5QhPR0tJU7Y1VbizDl%2BvsTaphodH2Hevmbme2B7pMxUKqrrdBQgeXWFXv7bgS08JiX2pw2DwUsNsU21DlIozSq%2BaKX4dR%2Btp65mY84UnGQdkStrZ9ppz7wV5WTOzqceZMjea%2FuCpyUlTl5PQFowh0%2FuVur1S3CE%2BDCE0tmHLrH%2BIb3B7%2B4UEaqqZT04SOJmS%2FRUV1pkW44YfJWX5gkd3yglUuP5ozslNzkbezfrUBWik7wjn2sDG3v3FEqeT4I31BYsGUg%2BlZNHFHfqaQ6x7eSLXwJMIjM5cEGOqUBkJhXJcOox0Jur1J39om%2Bi%2BhKlfoWBhstxrNMWJf7fHxrBUKfThRaA07BEw3Bsd9TtvUJLOp6assjUGnTC1B0SN%2B6vA3reM7wO5YaUlljAUEk0lLnRHw2leAdyXBallJQwoeIptZ85xzsN4KBNxHXG2aqZ%2F6ys6KbIKwEfSC%2FmSG5UPmuYygpl9fSUjYT3cNu9zYdpkmESzyCsaqn%2BvLEBXB8%2F%2BM4&X-Amz-Signature=82dcc65f0f42584a2b74d875b06ea9bde63ab33fc02176e13480c0d8d02423a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZPOD7R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDal1crDLjplP3hnmIVecBYBBLeXF6XlPW1ckJM3ITh6AiEA4sHqYbn9G6B%2FBKIx2c%2BjYVe8C2N1SslOUaN8ebmTIs8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPunGXOEWmdiI1S3VircA8sZcN1CrmqpMZN8HVv3beRpHj8iFrPF2kjQhiu0q2SRqiMaQbkumc4Fb%2BL%2F851731xjXBz3KUhuOCd8DJR5dICvqxxaJJ%2Fzehu5TuEcIT4u%2Fk7p%2BRJUnfVwjLDs9zT7%2BJPOi3k84yqmSX4%2Brh3aLDSmjOuEhW6yvhWGTvJ6WC2LLq%2FvVbK4xR%2B%2FkBLteQUSrkwHZdM%2BmQK6rMjayJaGlV4f9T9vSjitMtim%2F0RSuw%2B6gIt%2BlP7IyLMI2ymQHfV0mRytdU8oyV4b%2F6l6N7%2FmBY1ImqO9wE9RxMJClExk79if6V2w7A1sVqTP%2B4KyRxeTfHGHiYBYArNQXlbJcOOEW%2BA4nssxIJmAiT5QhPR0tJU7Y1VbizDl%2BvsTaphodH2Hevmbme2B7pMxUKqrrdBQgeXWFXv7bgS08JiX2pw2DwUsNsU21DlIozSq%2BaKX4dR%2Btp65mY84UnGQdkStrZ9ppz7wV5WTOzqceZMjea%2FuCpyUlTl5PQFowh0%2FuVur1S3CE%2BDCE0tmHLrH%2BIb3B7%2B4UEaqqZT04SOJmS%2FRUV1pkW44YfJWX5gkd3yglUuP5ozslNzkbezfrUBWik7wjn2sDG3v3FEqeT4I31BYsGUg%2BlZNHFHfqaQ6x7eSLXwJMIjM5cEGOqUBkJhXJcOox0Jur1J39om%2Bi%2BhKlfoWBhstxrNMWJf7fHxrBUKfThRaA07BEw3Bsd9TtvUJLOp6assjUGnTC1B0SN%2B6vA3reM7wO5YaUlljAUEk0lLnRHw2leAdyXBallJQwoeIptZ85xzsN4KBNxHXG2aqZ%2F6ys6KbIKwEfSC%2FmSG5UPmuYygpl9fSUjYT3cNu9zYdpkmESzyCsaqn%2BvLEBXB8%2F%2BM4&X-Amz-Signature=d1cd60d162120ec409d6a3b3a6538bebf0c1513e7acfc41bbbe0ff1b936076d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZPOD7R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDal1crDLjplP3hnmIVecBYBBLeXF6XlPW1ckJM3ITh6AiEA4sHqYbn9G6B%2FBKIx2c%2BjYVe8C2N1SslOUaN8ebmTIs8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPunGXOEWmdiI1S3VircA8sZcN1CrmqpMZN8HVv3beRpHj8iFrPF2kjQhiu0q2SRqiMaQbkumc4Fb%2BL%2F851731xjXBz3KUhuOCd8DJR5dICvqxxaJJ%2Fzehu5TuEcIT4u%2Fk7p%2BRJUnfVwjLDs9zT7%2BJPOi3k84yqmSX4%2Brh3aLDSmjOuEhW6yvhWGTvJ6WC2LLq%2FvVbK4xR%2B%2FkBLteQUSrkwHZdM%2BmQK6rMjayJaGlV4f9T9vSjitMtim%2F0RSuw%2B6gIt%2BlP7IyLMI2ymQHfV0mRytdU8oyV4b%2F6l6N7%2FmBY1ImqO9wE9RxMJClExk79if6V2w7A1sVqTP%2B4KyRxeTfHGHiYBYArNQXlbJcOOEW%2BA4nssxIJmAiT5QhPR0tJU7Y1VbizDl%2BvsTaphodH2Hevmbme2B7pMxUKqrrdBQgeXWFXv7bgS08JiX2pw2DwUsNsU21DlIozSq%2BaKX4dR%2Btp65mY84UnGQdkStrZ9ppz7wV5WTOzqceZMjea%2FuCpyUlTl5PQFowh0%2FuVur1S3CE%2BDCE0tmHLrH%2BIb3B7%2B4UEaqqZT04SOJmS%2FRUV1pkW44YfJWX5gkd3yglUuP5ozslNzkbezfrUBWik7wjn2sDG3v3FEqeT4I31BYsGUg%2BlZNHFHfqaQ6x7eSLXwJMIjM5cEGOqUBkJhXJcOox0Jur1J39om%2Bi%2BhKlfoWBhstxrNMWJf7fHxrBUKfThRaA07BEw3Bsd9TtvUJLOp6assjUGnTC1B0SN%2B6vA3reM7wO5YaUlljAUEk0lLnRHw2leAdyXBallJQwoeIptZ85xzsN4KBNxHXG2aqZ%2F6ys6KbIKwEfSC%2FmSG5UPmuYygpl9fSUjYT3cNu9zYdpkmESzyCsaqn%2BvLEBXB8%2F%2BM4&X-Amz-Signature=4cdd57848c2f69a3773814ede306f7bf18ad431d615429db5d6c4ef60cb3ea07&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZPOD7R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDal1crDLjplP3hnmIVecBYBBLeXF6XlPW1ckJM3ITh6AiEA4sHqYbn9G6B%2FBKIx2c%2BjYVe8C2N1SslOUaN8ebmTIs8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPunGXOEWmdiI1S3VircA8sZcN1CrmqpMZN8HVv3beRpHj8iFrPF2kjQhiu0q2SRqiMaQbkumc4Fb%2BL%2F851731xjXBz3KUhuOCd8DJR5dICvqxxaJJ%2Fzehu5TuEcIT4u%2Fk7p%2BRJUnfVwjLDs9zT7%2BJPOi3k84yqmSX4%2Brh3aLDSmjOuEhW6yvhWGTvJ6WC2LLq%2FvVbK4xR%2B%2FkBLteQUSrkwHZdM%2BmQK6rMjayJaGlV4f9T9vSjitMtim%2F0RSuw%2B6gIt%2BlP7IyLMI2ymQHfV0mRytdU8oyV4b%2F6l6N7%2FmBY1ImqO9wE9RxMJClExk79if6V2w7A1sVqTP%2B4KyRxeTfHGHiYBYArNQXlbJcOOEW%2BA4nssxIJmAiT5QhPR0tJU7Y1VbizDl%2BvsTaphodH2Hevmbme2B7pMxUKqrrdBQgeXWFXv7bgS08JiX2pw2DwUsNsU21DlIozSq%2BaKX4dR%2Btp65mY84UnGQdkStrZ9ppz7wV5WTOzqceZMjea%2FuCpyUlTl5PQFowh0%2FuVur1S3CE%2BDCE0tmHLrH%2BIb3B7%2B4UEaqqZT04SOJmS%2FRUV1pkW44YfJWX5gkd3yglUuP5ozslNzkbezfrUBWik7wjn2sDG3v3FEqeT4I31BYsGUg%2BlZNHFHfqaQ6x7eSLXwJMIjM5cEGOqUBkJhXJcOox0Jur1J39om%2Bi%2BhKlfoWBhstxrNMWJf7fHxrBUKfThRaA07BEw3Bsd9TtvUJLOp6assjUGnTC1B0SN%2B6vA3reM7wO5YaUlljAUEk0lLnRHw2leAdyXBallJQwoeIptZ85xzsN4KBNxHXG2aqZ%2F6ys6KbIKwEfSC%2FmSG5UPmuYygpl9fSUjYT3cNu9zYdpkmESzyCsaqn%2BvLEBXB8%2F%2BM4&X-Amz-Signature=fe22ef3b3698aa924880efcb1cd8314cc2de9007063f9db3ed053905bde0c585&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZPOD7R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDal1crDLjplP3hnmIVecBYBBLeXF6XlPW1ckJM3ITh6AiEA4sHqYbn9G6B%2FBKIx2c%2BjYVe8C2N1SslOUaN8ebmTIs8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPunGXOEWmdiI1S3VircA8sZcN1CrmqpMZN8HVv3beRpHj8iFrPF2kjQhiu0q2SRqiMaQbkumc4Fb%2BL%2F851731xjXBz3KUhuOCd8DJR5dICvqxxaJJ%2Fzehu5TuEcIT4u%2Fk7p%2BRJUnfVwjLDs9zT7%2BJPOi3k84yqmSX4%2Brh3aLDSmjOuEhW6yvhWGTvJ6WC2LLq%2FvVbK4xR%2B%2FkBLteQUSrkwHZdM%2BmQK6rMjayJaGlV4f9T9vSjitMtim%2F0RSuw%2B6gIt%2BlP7IyLMI2ymQHfV0mRytdU8oyV4b%2F6l6N7%2FmBY1ImqO9wE9RxMJClExk79if6V2w7A1sVqTP%2B4KyRxeTfHGHiYBYArNQXlbJcOOEW%2BA4nssxIJmAiT5QhPR0tJU7Y1VbizDl%2BvsTaphodH2Hevmbme2B7pMxUKqrrdBQgeXWFXv7bgS08JiX2pw2DwUsNsU21DlIozSq%2BaKX4dR%2Btp65mY84UnGQdkStrZ9ppz7wV5WTOzqceZMjea%2FuCpyUlTl5PQFowh0%2FuVur1S3CE%2BDCE0tmHLrH%2BIb3B7%2B4UEaqqZT04SOJmS%2FRUV1pkW44YfJWX5gkd3yglUuP5ozslNzkbezfrUBWik7wjn2sDG3v3FEqeT4I31BYsGUg%2BlZNHFHfqaQ6x7eSLXwJMIjM5cEGOqUBkJhXJcOox0Jur1J39om%2Bi%2BhKlfoWBhstxrNMWJf7fHxrBUKfThRaA07BEw3Bsd9TtvUJLOp6assjUGnTC1B0SN%2B6vA3reM7wO5YaUlljAUEk0lLnRHw2leAdyXBallJQwoeIptZ85xzsN4KBNxHXG2aqZ%2F6ys6KbIKwEfSC%2FmSG5UPmuYygpl9fSUjYT3cNu9zYdpkmESzyCsaqn%2BvLEBXB8%2F%2BM4&X-Amz-Signature=7fef900531099c03831d8bad5b26d00ce79a48b5a85339f44148866d8fc5f2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZPOD7R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDal1crDLjplP3hnmIVecBYBBLeXF6XlPW1ckJM3ITh6AiEA4sHqYbn9G6B%2FBKIx2c%2BjYVe8C2N1SslOUaN8ebmTIs8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPunGXOEWmdiI1S3VircA8sZcN1CrmqpMZN8HVv3beRpHj8iFrPF2kjQhiu0q2SRqiMaQbkumc4Fb%2BL%2F851731xjXBz3KUhuOCd8DJR5dICvqxxaJJ%2Fzehu5TuEcIT4u%2Fk7p%2BRJUnfVwjLDs9zT7%2BJPOi3k84yqmSX4%2Brh3aLDSmjOuEhW6yvhWGTvJ6WC2LLq%2FvVbK4xR%2B%2FkBLteQUSrkwHZdM%2BmQK6rMjayJaGlV4f9T9vSjitMtim%2F0RSuw%2B6gIt%2BlP7IyLMI2ymQHfV0mRytdU8oyV4b%2F6l6N7%2FmBY1ImqO9wE9RxMJClExk79if6V2w7A1sVqTP%2B4KyRxeTfHGHiYBYArNQXlbJcOOEW%2BA4nssxIJmAiT5QhPR0tJU7Y1VbizDl%2BvsTaphodH2Hevmbme2B7pMxUKqrrdBQgeXWFXv7bgS08JiX2pw2DwUsNsU21DlIozSq%2BaKX4dR%2Btp65mY84UnGQdkStrZ9ppz7wV5WTOzqceZMjea%2FuCpyUlTl5PQFowh0%2FuVur1S3CE%2BDCE0tmHLrH%2BIb3B7%2B4UEaqqZT04SOJmS%2FRUV1pkW44YfJWX5gkd3yglUuP5ozslNzkbezfrUBWik7wjn2sDG3v3FEqeT4I31BYsGUg%2BlZNHFHfqaQ6x7eSLXwJMIjM5cEGOqUBkJhXJcOox0Jur1J39om%2Bi%2BhKlfoWBhstxrNMWJf7fHxrBUKfThRaA07BEw3Bsd9TtvUJLOp6assjUGnTC1B0SN%2B6vA3reM7wO5YaUlljAUEk0lLnRHw2leAdyXBallJQwoeIptZ85xzsN4KBNxHXG2aqZ%2F6ys6KbIKwEfSC%2FmSG5UPmuYygpl9fSUjYT3cNu9zYdpkmESzyCsaqn%2BvLEBXB8%2F%2BM4&X-Amz-Signature=d84808b62dff481d20f7642ef5677d5f6c5ca50b0b56d3e12db0b22d21e081b2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZPOD7R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDal1crDLjplP3hnmIVecBYBBLeXF6XlPW1ckJM3ITh6AiEA4sHqYbn9G6B%2FBKIx2c%2BjYVe8C2N1SslOUaN8ebmTIs8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPunGXOEWmdiI1S3VircA8sZcN1CrmqpMZN8HVv3beRpHj8iFrPF2kjQhiu0q2SRqiMaQbkumc4Fb%2BL%2F851731xjXBz3KUhuOCd8DJR5dICvqxxaJJ%2Fzehu5TuEcIT4u%2Fk7p%2BRJUnfVwjLDs9zT7%2BJPOi3k84yqmSX4%2Brh3aLDSmjOuEhW6yvhWGTvJ6WC2LLq%2FvVbK4xR%2B%2FkBLteQUSrkwHZdM%2BmQK6rMjayJaGlV4f9T9vSjitMtim%2F0RSuw%2B6gIt%2BlP7IyLMI2ymQHfV0mRytdU8oyV4b%2F6l6N7%2FmBY1ImqO9wE9RxMJClExk79if6V2w7A1sVqTP%2B4KyRxeTfHGHiYBYArNQXlbJcOOEW%2BA4nssxIJmAiT5QhPR0tJU7Y1VbizDl%2BvsTaphodH2Hevmbme2B7pMxUKqrrdBQgeXWFXv7bgS08JiX2pw2DwUsNsU21DlIozSq%2BaKX4dR%2Btp65mY84UnGQdkStrZ9ppz7wV5WTOzqceZMjea%2FuCpyUlTl5PQFowh0%2FuVur1S3CE%2BDCE0tmHLrH%2BIb3B7%2B4UEaqqZT04SOJmS%2FRUV1pkW44YfJWX5gkd3yglUuP5ozslNzkbezfrUBWik7wjn2sDG3v3FEqeT4I31BYsGUg%2BlZNHFHfqaQ6x7eSLXwJMIjM5cEGOqUBkJhXJcOox0Jur1J39om%2Bi%2BhKlfoWBhstxrNMWJf7fHxrBUKfThRaA07BEw3Bsd9TtvUJLOp6assjUGnTC1B0SN%2B6vA3reM7wO5YaUlljAUEk0lLnRHw2leAdyXBallJQwoeIptZ85xzsN4KBNxHXG2aqZ%2F6ys6KbIKwEfSC%2FmSG5UPmuYygpl9fSUjYT3cNu9zYdpkmESzyCsaqn%2BvLEBXB8%2F%2BM4&X-Amz-Signature=f85b5facb54486a4bf3425a0b7aeab5d6b9d85448a08ae9fa1e539cfe5548c40&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

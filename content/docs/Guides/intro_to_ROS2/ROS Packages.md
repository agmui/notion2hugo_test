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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXK2ZT4%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCl9vSPTc9uW%2BqYF2go4ppIFeUvMzOpLGwykEhDnd0rRAIhAPmCpgDHVIml5xBJQ5LQrOtaa5dlzsEA7NQsuMftEuWUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQNQ5HRPKIe1RFyt4q3AOaOGBbn1uy0F0aa2JMZTo0D6SJmY3Q8XHCUa2dZwHLfE3%2BBifJXKcAfAW0Ot0Pr0uTgU6IsKJQR5gRLKHUMh8yOcXN8rbWmN6WdhJTpCLPAn4nDUxhHd45R%2BVCRK0%2FPlxMzwc9Fd%2F3U1ffVFZcb%2FRf8edN05nxNjURf5i%2FM8kSS5J%2BfuG%2BZH%2BCHj5kh1KQlifjqUGDxEwe%2FpLswG672U424k%2FOhOmtuqg%2FR%2FNpP795eCYcGiAzbCIdeSGm0UWfhmuKG52ObTli5WtIKjfaq7bo5GrBxP7xE9TZn3QdwE9CAXaN5GsYfgX9PR40cmXc8d82XMtaKklE09d5X9P9XGxa553DdYEuxVXXge8gEkCLaINXM0DpF9Pa1vPXTzytahM8NLN7Wrulsl5Wt6ICv%2BMXsWOL6ODbH3Qt7StQ7L3nBnmJQ56VRgFRJKDTMOG9KlBYC%2BNw5BOrn%2B9lXlE2pEwJy1VEIg08WVI4u3ilGOiO6d9zDoJv7PfxgTSxDDKuGrAwXaTI5QnAevntFvjTmmG539IbJHbjVEzdU3Xu%2Be%2BU9qCipmE%2BXLc%2F3S0ZdZGYY8UwiQKenTlS8Ysk0FiaAtaN%2B%2B%2FkK%2Bl3UthLucb0b03pSWfKjYlLNKr6H4bOWTCLiIDMBjqkAeYLEir%2Fj0EK46oXHUToHLh3Z%2BbKIUqYsJPgHyPA730l3AjBAhcoX2NOSrZMwAMeYaMf5p2TPQfaSgjQfTz4se2MUYej%2BfhnQt6mk%2Fphjj1NIYiWL8He23YRE17xPxK0SCFmemZgRGeUTabbFBBFEj0D9CYsBrU2zWLIb6nJ0YVKQmc2EhzA%2F4eIX%2BBj2PgbuyL52YemLJed8%2BJ0%2B4jWYfaAEYC%2B&X-Amz-Signature=46c5c4386ce918975acd8a05289ecfd0a52608529534cece4c3c7b7dd778ee90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXK2ZT4%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCl9vSPTc9uW%2BqYF2go4ppIFeUvMzOpLGwykEhDnd0rRAIhAPmCpgDHVIml5xBJQ5LQrOtaa5dlzsEA7NQsuMftEuWUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQNQ5HRPKIe1RFyt4q3AOaOGBbn1uy0F0aa2JMZTo0D6SJmY3Q8XHCUa2dZwHLfE3%2BBifJXKcAfAW0Ot0Pr0uTgU6IsKJQR5gRLKHUMh8yOcXN8rbWmN6WdhJTpCLPAn4nDUxhHd45R%2BVCRK0%2FPlxMzwc9Fd%2F3U1ffVFZcb%2FRf8edN05nxNjURf5i%2FM8kSS5J%2BfuG%2BZH%2BCHj5kh1KQlifjqUGDxEwe%2FpLswG672U424k%2FOhOmtuqg%2FR%2FNpP795eCYcGiAzbCIdeSGm0UWfhmuKG52ObTli5WtIKjfaq7bo5GrBxP7xE9TZn3QdwE9CAXaN5GsYfgX9PR40cmXc8d82XMtaKklE09d5X9P9XGxa553DdYEuxVXXge8gEkCLaINXM0DpF9Pa1vPXTzytahM8NLN7Wrulsl5Wt6ICv%2BMXsWOL6ODbH3Qt7StQ7L3nBnmJQ56VRgFRJKDTMOG9KlBYC%2BNw5BOrn%2B9lXlE2pEwJy1VEIg08WVI4u3ilGOiO6d9zDoJv7PfxgTSxDDKuGrAwXaTI5QnAevntFvjTmmG539IbJHbjVEzdU3Xu%2Be%2BU9qCipmE%2BXLc%2F3S0ZdZGYY8UwiQKenTlS8Ysk0FiaAtaN%2B%2B%2FkK%2Bl3UthLucb0b03pSWfKjYlLNKr6H4bOWTCLiIDMBjqkAeYLEir%2Fj0EK46oXHUToHLh3Z%2BbKIUqYsJPgHyPA730l3AjBAhcoX2NOSrZMwAMeYaMf5p2TPQfaSgjQfTz4se2MUYej%2BfhnQt6mk%2Fphjj1NIYiWL8He23YRE17xPxK0SCFmemZgRGeUTabbFBBFEj0D9CYsBrU2zWLIb6nJ0YVKQmc2EhzA%2F4eIX%2BBj2PgbuyL52YemLJed8%2BJ0%2B4jWYfaAEYC%2B&X-Amz-Signature=6da694d49b4792dea03b6b2e88bab299b76529275014fc11866f2d147b20f36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXK2ZT4%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCl9vSPTc9uW%2BqYF2go4ppIFeUvMzOpLGwykEhDnd0rRAIhAPmCpgDHVIml5xBJQ5LQrOtaa5dlzsEA7NQsuMftEuWUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQNQ5HRPKIe1RFyt4q3AOaOGBbn1uy0F0aa2JMZTo0D6SJmY3Q8XHCUa2dZwHLfE3%2BBifJXKcAfAW0Ot0Pr0uTgU6IsKJQR5gRLKHUMh8yOcXN8rbWmN6WdhJTpCLPAn4nDUxhHd45R%2BVCRK0%2FPlxMzwc9Fd%2F3U1ffVFZcb%2FRf8edN05nxNjURf5i%2FM8kSS5J%2BfuG%2BZH%2BCHj5kh1KQlifjqUGDxEwe%2FpLswG672U424k%2FOhOmtuqg%2FR%2FNpP795eCYcGiAzbCIdeSGm0UWfhmuKG52ObTli5WtIKjfaq7bo5GrBxP7xE9TZn3QdwE9CAXaN5GsYfgX9PR40cmXc8d82XMtaKklE09d5X9P9XGxa553DdYEuxVXXge8gEkCLaINXM0DpF9Pa1vPXTzytahM8NLN7Wrulsl5Wt6ICv%2BMXsWOL6ODbH3Qt7StQ7L3nBnmJQ56VRgFRJKDTMOG9KlBYC%2BNw5BOrn%2B9lXlE2pEwJy1VEIg08WVI4u3ilGOiO6d9zDoJv7PfxgTSxDDKuGrAwXaTI5QnAevntFvjTmmG539IbJHbjVEzdU3Xu%2Be%2BU9qCipmE%2BXLc%2F3S0ZdZGYY8UwiQKenTlS8Ysk0FiaAtaN%2B%2B%2FkK%2Bl3UthLucb0b03pSWfKjYlLNKr6H4bOWTCLiIDMBjqkAeYLEir%2Fj0EK46oXHUToHLh3Z%2BbKIUqYsJPgHyPA730l3AjBAhcoX2NOSrZMwAMeYaMf5p2TPQfaSgjQfTz4se2MUYej%2BfhnQt6mk%2Fphjj1NIYiWL8He23YRE17xPxK0SCFmemZgRGeUTabbFBBFEj0D9CYsBrU2zWLIb6nJ0YVKQmc2EhzA%2F4eIX%2BBj2PgbuyL52YemLJed8%2BJ0%2B4jWYfaAEYC%2B&X-Amz-Signature=98bafcbd10aea2dd4b63f6cc58cfe43f4c943f5e070ff5f53b8eaeb92b97cece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXK2ZT4%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCl9vSPTc9uW%2BqYF2go4ppIFeUvMzOpLGwykEhDnd0rRAIhAPmCpgDHVIml5xBJQ5LQrOtaa5dlzsEA7NQsuMftEuWUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQNQ5HRPKIe1RFyt4q3AOaOGBbn1uy0F0aa2JMZTo0D6SJmY3Q8XHCUa2dZwHLfE3%2BBifJXKcAfAW0Ot0Pr0uTgU6IsKJQR5gRLKHUMh8yOcXN8rbWmN6WdhJTpCLPAn4nDUxhHd45R%2BVCRK0%2FPlxMzwc9Fd%2F3U1ffVFZcb%2FRf8edN05nxNjURf5i%2FM8kSS5J%2BfuG%2BZH%2BCHj5kh1KQlifjqUGDxEwe%2FpLswG672U424k%2FOhOmtuqg%2FR%2FNpP795eCYcGiAzbCIdeSGm0UWfhmuKG52ObTli5WtIKjfaq7bo5GrBxP7xE9TZn3QdwE9CAXaN5GsYfgX9PR40cmXc8d82XMtaKklE09d5X9P9XGxa553DdYEuxVXXge8gEkCLaINXM0DpF9Pa1vPXTzytahM8NLN7Wrulsl5Wt6ICv%2BMXsWOL6ODbH3Qt7StQ7L3nBnmJQ56VRgFRJKDTMOG9KlBYC%2BNw5BOrn%2B9lXlE2pEwJy1VEIg08WVI4u3ilGOiO6d9zDoJv7PfxgTSxDDKuGrAwXaTI5QnAevntFvjTmmG539IbJHbjVEzdU3Xu%2Be%2BU9qCipmE%2BXLc%2F3S0ZdZGYY8UwiQKenTlS8Ysk0FiaAtaN%2B%2B%2FkK%2Bl3UthLucb0b03pSWfKjYlLNKr6H4bOWTCLiIDMBjqkAeYLEir%2Fj0EK46oXHUToHLh3Z%2BbKIUqYsJPgHyPA730l3AjBAhcoX2NOSrZMwAMeYaMf5p2TPQfaSgjQfTz4se2MUYej%2BfhnQt6mk%2Fphjj1NIYiWL8He23YRE17xPxK0SCFmemZgRGeUTabbFBBFEj0D9CYsBrU2zWLIb6nJ0YVKQmc2EhzA%2F4eIX%2BBj2PgbuyL52YemLJed8%2BJ0%2B4jWYfaAEYC%2B&X-Amz-Signature=c62b8dd6006600f8eb797a6ae07575789d2df63d5f666a59d25b9bfb350038ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXK2ZT4%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCl9vSPTc9uW%2BqYF2go4ppIFeUvMzOpLGwykEhDnd0rRAIhAPmCpgDHVIml5xBJQ5LQrOtaa5dlzsEA7NQsuMftEuWUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQNQ5HRPKIe1RFyt4q3AOaOGBbn1uy0F0aa2JMZTo0D6SJmY3Q8XHCUa2dZwHLfE3%2BBifJXKcAfAW0Ot0Pr0uTgU6IsKJQR5gRLKHUMh8yOcXN8rbWmN6WdhJTpCLPAn4nDUxhHd45R%2BVCRK0%2FPlxMzwc9Fd%2F3U1ffVFZcb%2FRf8edN05nxNjURf5i%2FM8kSS5J%2BfuG%2BZH%2BCHj5kh1KQlifjqUGDxEwe%2FpLswG672U424k%2FOhOmtuqg%2FR%2FNpP795eCYcGiAzbCIdeSGm0UWfhmuKG52ObTli5WtIKjfaq7bo5GrBxP7xE9TZn3QdwE9CAXaN5GsYfgX9PR40cmXc8d82XMtaKklE09d5X9P9XGxa553DdYEuxVXXge8gEkCLaINXM0DpF9Pa1vPXTzytahM8NLN7Wrulsl5Wt6ICv%2BMXsWOL6ODbH3Qt7StQ7L3nBnmJQ56VRgFRJKDTMOG9KlBYC%2BNw5BOrn%2B9lXlE2pEwJy1VEIg08WVI4u3ilGOiO6d9zDoJv7PfxgTSxDDKuGrAwXaTI5QnAevntFvjTmmG539IbJHbjVEzdU3Xu%2Be%2BU9qCipmE%2BXLc%2F3S0ZdZGYY8UwiQKenTlS8Ysk0FiaAtaN%2B%2B%2FkK%2Bl3UthLucb0b03pSWfKjYlLNKr6H4bOWTCLiIDMBjqkAeYLEir%2Fj0EK46oXHUToHLh3Z%2BbKIUqYsJPgHyPA730l3AjBAhcoX2NOSrZMwAMeYaMf5p2TPQfaSgjQfTz4se2MUYej%2BfhnQt6mk%2Fphjj1NIYiWL8He23YRE17xPxK0SCFmemZgRGeUTabbFBBFEj0D9CYsBrU2zWLIb6nJ0YVKQmc2EhzA%2F4eIX%2BBj2PgbuyL52YemLJed8%2BJ0%2B4jWYfaAEYC%2B&X-Amz-Signature=2b07db57e51be6c445f95ae88d23ec88c052a620751cb8d5b0adf093fbb76baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXK2ZT4%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCl9vSPTc9uW%2BqYF2go4ppIFeUvMzOpLGwykEhDnd0rRAIhAPmCpgDHVIml5xBJQ5LQrOtaa5dlzsEA7NQsuMftEuWUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQNQ5HRPKIe1RFyt4q3AOaOGBbn1uy0F0aa2JMZTo0D6SJmY3Q8XHCUa2dZwHLfE3%2BBifJXKcAfAW0Ot0Pr0uTgU6IsKJQR5gRLKHUMh8yOcXN8rbWmN6WdhJTpCLPAn4nDUxhHd45R%2BVCRK0%2FPlxMzwc9Fd%2F3U1ffVFZcb%2FRf8edN05nxNjURf5i%2FM8kSS5J%2BfuG%2BZH%2BCHj5kh1KQlifjqUGDxEwe%2FpLswG672U424k%2FOhOmtuqg%2FR%2FNpP795eCYcGiAzbCIdeSGm0UWfhmuKG52ObTli5WtIKjfaq7bo5GrBxP7xE9TZn3QdwE9CAXaN5GsYfgX9PR40cmXc8d82XMtaKklE09d5X9P9XGxa553DdYEuxVXXge8gEkCLaINXM0DpF9Pa1vPXTzytahM8NLN7Wrulsl5Wt6ICv%2BMXsWOL6ODbH3Qt7StQ7L3nBnmJQ56VRgFRJKDTMOG9KlBYC%2BNw5BOrn%2B9lXlE2pEwJy1VEIg08WVI4u3ilGOiO6d9zDoJv7PfxgTSxDDKuGrAwXaTI5QnAevntFvjTmmG539IbJHbjVEzdU3Xu%2Be%2BU9qCipmE%2BXLc%2F3S0ZdZGYY8UwiQKenTlS8Ysk0FiaAtaN%2B%2B%2FkK%2Bl3UthLucb0b03pSWfKjYlLNKr6H4bOWTCLiIDMBjqkAeYLEir%2Fj0EK46oXHUToHLh3Z%2BbKIUqYsJPgHyPA730l3AjBAhcoX2NOSrZMwAMeYaMf5p2TPQfaSgjQfTz4se2MUYej%2BfhnQt6mk%2Fphjj1NIYiWL8He23YRE17xPxK0SCFmemZgRGeUTabbFBBFEj0D9CYsBrU2zWLIb6nJ0YVKQmc2EhzA%2F4eIX%2BBj2PgbuyL52YemLJed8%2BJ0%2B4jWYfaAEYC%2B&X-Amz-Signature=bcab65cca966eabec1982df39ba04cdb296f11cdea46f559826e35ef892a2306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXK2ZT4%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCl9vSPTc9uW%2BqYF2go4ppIFeUvMzOpLGwykEhDnd0rRAIhAPmCpgDHVIml5xBJQ5LQrOtaa5dlzsEA7NQsuMftEuWUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQNQ5HRPKIe1RFyt4q3AOaOGBbn1uy0F0aa2JMZTo0D6SJmY3Q8XHCUa2dZwHLfE3%2BBifJXKcAfAW0Ot0Pr0uTgU6IsKJQR5gRLKHUMh8yOcXN8rbWmN6WdhJTpCLPAn4nDUxhHd45R%2BVCRK0%2FPlxMzwc9Fd%2F3U1ffVFZcb%2FRf8edN05nxNjURf5i%2FM8kSS5J%2BfuG%2BZH%2BCHj5kh1KQlifjqUGDxEwe%2FpLswG672U424k%2FOhOmtuqg%2FR%2FNpP795eCYcGiAzbCIdeSGm0UWfhmuKG52ObTli5WtIKjfaq7bo5GrBxP7xE9TZn3QdwE9CAXaN5GsYfgX9PR40cmXc8d82XMtaKklE09d5X9P9XGxa553DdYEuxVXXge8gEkCLaINXM0DpF9Pa1vPXTzytahM8NLN7Wrulsl5Wt6ICv%2BMXsWOL6ODbH3Qt7StQ7L3nBnmJQ56VRgFRJKDTMOG9KlBYC%2BNw5BOrn%2B9lXlE2pEwJy1VEIg08WVI4u3ilGOiO6d9zDoJv7PfxgTSxDDKuGrAwXaTI5QnAevntFvjTmmG539IbJHbjVEzdU3Xu%2Be%2BU9qCipmE%2BXLc%2F3S0ZdZGYY8UwiQKenTlS8Ysk0FiaAtaN%2B%2B%2FkK%2Bl3UthLucb0b03pSWfKjYlLNKr6H4bOWTCLiIDMBjqkAeYLEir%2Fj0EK46oXHUToHLh3Z%2BbKIUqYsJPgHyPA730l3AjBAhcoX2NOSrZMwAMeYaMf5p2TPQfaSgjQfTz4se2MUYej%2BfhnQt6mk%2Fphjj1NIYiWL8He23YRE17xPxK0SCFmemZgRGeUTabbFBBFEj0D9CYsBrU2zWLIb6nJ0YVKQmc2EhzA%2F4eIX%2BBj2PgbuyL52YemLJed8%2BJ0%2B4jWYfaAEYC%2B&X-Amz-Signature=5d24e6c8b3eed44631dd0bcf9abcaa7b54a4f0fad9fd1e2460b7507541e16b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BAKDP3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD7wCc2Y%2F0TX1Enh0wuQZCvl0l0ESqidUT2puMBZo8wxAIhAI3yTPfC1JJ6A%2FpBhMaWjA9vaZ5BgXiStQ924tM6%2FkUvKv8DCFkQABoMNjM3NDIzMTgzODA1Igyzpw2TAKbAqsMCNmgq3APkY5NvKB8vLxOGssDRYvLzl97eFv9g4JRpSzJ6t9Bl4v7mnKTRui02JWaPKtQeM%2BMOdIwJI%2Bk9TR3QqqaptdJ9zURk7Syb5xrABB0kb%2BdsflTP4Wi8NqlIj9x8iUEm5FQvw6KcGRLCjmM0UiodWXTUEwtSkguzF68ABqjXOyetBtlmbDwPUy3RH36lOFRV5vC0C54ydli7lnEUFfQwdfm1sFcO5SO8YEOoF3Pa3D965Xd51FXUfyos1UUa%2Fd2H%2FtT0dpawbt52PAzLW9R2Yo679cEDavScViPKWphpd8Nfh%2BlcqJqKyex6WdIvssreOCCuS6IGnNLgKZh%2FsfHBt2vZM4JjmhulozGan%2BuQWytqAIxrqOBniXzJtV9t41tU0pXCQdsetkX5WcDO%2FKcbi31WDgoaU7nImvKf7K%2BjlW1Dl4z4qBUCMnEtob4SU1DiX9YE144ThqSPEHvK%2BwTCYMUSUidovbcrpCIGZrbycf75dk%2BhjasAclgdnjygaJ4ohZIiihxAMSs5yN8dNDmiyKiOGICkVxSd9y5O5OnzqDWS0elqbyxUQGG98Z4fgLSx48X4hqJe78IsRzC%2FnoWuBpbjDNjvywICW2Aa5l08vb4O2VqBTq9xqHKpzst65jDtyvvEBjqkAWE%2Bh4I9vplzn71c%2B%2FwHcPDGyC3jmnH8jjNLKvNwhKWMVQRqSou49AjqLTG4%2B2yMNNsp0b8Nprv8DxwHZHkA3Vry6Z14DWblEidRXjvrZI3sQTL9NhHWGTk2g4lN5FzmrzYKsCJO5fkPUZmDbF1meZWmGFNtPIVZL9cVgs3IxXP4DRZHQQ3vT18H8HMnZ%2BgjxJeZsSuT324gxX8PBxprDOphHFHh&X-Amz-Signature=3cf54f2e8685aacc4edd96f548871d345e670bc6b060f1aae0bd4b854ccdd649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BAKDP3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD7wCc2Y%2F0TX1Enh0wuQZCvl0l0ESqidUT2puMBZo8wxAIhAI3yTPfC1JJ6A%2FpBhMaWjA9vaZ5BgXiStQ924tM6%2FkUvKv8DCFkQABoMNjM3NDIzMTgzODA1Igyzpw2TAKbAqsMCNmgq3APkY5NvKB8vLxOGssDRYvLzl97eFv9g4JRpSzJ6t9Bl4v7mnKTRui02JWaPKtQeM%2BMOdIwJI%2Bk9TR3QqqaptdJ9zURk7Syb5xrABB0kb%2BdsflTP4Wi8NqlIj9x8iUEm5FQvw6KcGRLCjmM0UiodWXTUEwtSkguzF68ABqjXOyetBtlmbDwPUy3RH36lOFRV5vC0C54ydli7lnEUFfQwdfm1sFcO5SO8YEOoF3Pa3D965Xd51FXUfyos1UUa%2Fd2H%2FtT0dpawbt52PAzLW9R2Yo679cEDavScViPKWphpd8Nfh%2BlcqJqKyex6WdIvssreOCCuS6IGnNLgKZh%2FsfHBt2vZM4JjmhulozGan%2BuQWytqAIxrqOBniXzJtV9t41tU0pXCQdsetkX5WcDO%2FKcbi31WDgoaU7nImvKf7K%2BjlW1Dl4z4qBUCMnEtob4SU1DiX9YE144ThqSPEHvK%2BwTCYMUSUidovbcrpCIGZrbycf75dk%2BhjasAclgdnjygaJ4ohZIiihxAMSs5yN8dNDmiyKiOGICkVxSd9y5O5OnzqDWS0elqbyxUQGG98Z4fgLSx48X4hqJe78IsRzC%2FnoWuBpbjDNjvywICW2Aa5l08vb4O2VqBTq9xqHKpzst65jDtyvvEBjqkAWE%2Bh4I9vplzn71c%2B%2FwHcPDGyC3jmnH8jjNLKvNwhKWMVQRqSou49AjqLTG4%2B2yMNNsp0b8Nprv8DxwHZHkA3Vry6Z14DWblEidRXjvrZI3sQTL9NhHWGTk2g4lN5FzmrzYKsCJO5fkPUZmDbF1meZWmGFNtPIVZL9cVgs3IxXP4DRZHQQ3vT18H8HMnZ%2BgjxJeZsSuT324gxX8PBxprDOphHFHh&X-Amz-Signature=4340c15f1155678fa35c3c5f2da18d107ddee24c93f804aeae2abaed3926658e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BAKDP3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD7wCc2Y%2F0TX1Enh0wuQZCvl0l0ESqidUT2puMBZo8wxAIhAI3yTPfC1JJ6A%2FpBhMaWjA9vaZ5BgXiStQ924tM6%2FkUvKv8DCFkQABoMNjM3NDIzMTgzODA1Igyzpw2TAKbAqsMCNmgq3APkY5NvKB8vLxOGssDRYvLzl97eFv9g4JRpSzJ6t9Bl4v7mnKTRui02JWaPKtQeM%2BMOdIwJI%2Bk9TR3QqqaptdJ9zURk7Syb5xrABB0kb%2BdsflTP4Wi8NqlIj9x8iUEm5FQvw6KcGRLCjmM0UiodWXTUEwtSkguzF68ABqjXOyetBtlmbDwPUy3RH36lOFRV5vC0C54ydli7lnEUFfQwdfm1sFcO5SO8YEOoF3Pa3D965Xd51FXUfyos1UUa%2Fd2H%2FtT0dpawbt52PAzLW9R2Yo679cEDavScViPKWphpd8Nfh%2BlcqJqKyex6WdIvssreOCCuS6IGnNLgKZh%2FsfHBt2vZM4JjmhulozGan%2BuQWytqAIxrqOBniXzJtV9t41tU0pXCQdsetkX5WcDO%2FKcbi31WDgoaU7nImvKf7K%2BjlW1Dl4z4qBUCMnEtob4SU1DiX9YE144ThqSPEHvK%2BwTCYMUSUidovbcrpCIGZrbycf75dk%2BhjasAclgdnjygaJ4ohZIiihxAMSs5yN8dNDmiyKiOGICkVxSd9y5O5OnzqDWS0elqbyxUQGG98Z4fgLSx48X4hqJe78IsRzC%2FnoWuBpbjDNjvywICW2Aa5l08vb4O2VqBTq9xqHKpzst65jDtyvvEBjqkAWE%2Bh4I9vplzn71c%2B%2FwHcPDGyC3jmnH8jjNLKvNwhKWMVQRqSou49AjqLTG4%2B2yMNNsp0b8Nprv8DxwHZHkA3Vry6Z14DWblEidRXjvrZI3sQTL9NhHWGTk2g4lN5FzmrzYKsCJO5fkPUZmDbF1meZWmGFNtPIVZL9cVgs3IxXP4DRZHQQ3vT18H8HMnZ%2BgjxJeZsSuT324gxX8PBxprDOphHFHh&X-Amz-Signature=6be4b3c2a8e8922e1987469677764c98bfda4b8f30c85f2055732cf5fcda8dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BAKDP3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD7wCc2Y%2F0TX1Enh0wuQZCvl0l0ESqidUT2puMBZo8wxAIhAI3yTPfC1JJ6A%2FpBhMaWjA9vaZ5BgXiStQ924tM6%2FkUvKv8DCFkQABoMNjM3NDIzMTgzODA1Igyzpw2TAKbAqsMCNmgq3APkY5NvKB8vLxOGssDRYvLzl97eFv9g4JRpSzJ6t9Bl4v7mnKTRui02JWaPKtQeM%2BMOdIwJI%2Bk9TR3QqqaptdJ9zURk7Syb5xrABB0kb%2BdsflTP4Wi8NqlIj9x8iUEm5FQvw6KcGRLCjmM0UiodWXTUEwtSkguzF68ABqjXOyetBtlmbDwPUy3RH36lOFRV5vC0C54ydli7lnEUFfQwdfm1sFcO5SO8YEOoF3Pa3D965Xd51FXUfyos1UUa%2Fd2H%2FtT0dpawbt52PAzLW9R2Yo679cEDavScViPKWphpd8Nfh%2BlcqJqKyex6WdIvssreOCCuS6IGnNLgKZh%2FsfHBt2vZM4JjmhulozGan%2BuQWytqAIxrqOBniXzJtV9t41tU0pXCQdsetkX5WcDO%2FKcbi31WDgoaU7nImvKf7K%2BjlW1Dl4z4qBUCMnEtob4SU1DiX9YE144ThqSPEHvK%2BwTCYMUSUidovbcrpCIGZrbycf75dk%2BhjasAclgdnjygaJ4ohZIiihxAMSs5yN8dNDmiyKiOGICkVxSd9y5O5OnzqDWS0elqbyxUQGG98Z4fgLSx48X4hqJe78IsRzC%2FnoWuBpbjDNjvywICW2Aa5l08vb4O2VqBTq9xqHKpzst65jDtyvvEBjqkAWE%2Bh4I9vplzn71c%2B%2FwHcPDGyC3jmnH8jjNLKvNwhKWMVQRqSou49AjqLTG4%2B2yMNNsp0b8Nprv8DxwHZHkA3Vry6Z14DWblEidRXjvrZI3sQTL9NhHWGTk2g4lN5FzmrzYKsCJO5fkPUZmDbF1meZWmGFNtPIVZL9cVgs3IxXP4DRZHQQ3vT18H8HMnZ%2BgjxJeZsSuT324gxX8PBxprDOphHFHh&X-Amz-Signature=d28a721fd641d58986daf1380342d84e17321375724354ccb73d682cd20c8ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BAKDP3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD7wCc2Y%2F0TX1Enh0wuQZCvl0l0ESqidUT2puMBZo8wxAIhAI3yTPfC1JJ6A%2FpBhMaWjA9vaZ5BgXiStQ924tM6%2FkUvKv8DCFkQABoMNjM3NDIzMTgzODA1Igyzpw2TAKbAqsMCNmgq3APkY5NvKB8vLxOGssDRYvLzl97eFv9g4JRpSzJ6t9Bl4v7mnKTRui02JWaPKtQeM%2BMOdIwJI%2Bk9TR3QqqaptdJ9zURk7Syb5xrABB0kb%2BdsflTP4Wi8NqlIj9x8iUEm5FQvw6KcGRLCjmM0UiodWXTUEwtSkguzF68ABqjXOyetBtlmbDwPUy3RH36lOFRV5vC0C54ydli7lnEUFfQwdfm1sFcO5SO8YEOoF3Pa3D965Xd51FXUfyos1UUa%2Fd2H%2FtT0dpawbt52PAzLW9R2Yo679cEDavScViPKWphpd8Nfh%2BlcqJqKyex6WdIvssreOCCuS6IGnNLgKZh%2FsfHBt2vZM4JjmhulozGan%2BuQWytqAIxrqOBniXzJtV9t41tU0pXCQdsetkX5WcDO%2FKcbi31WDgoaU7nImvKf7K%2BjlW1Dl4z4qBUCMnEtob4SU1DiX9YE144ThqSPEHvK%2BwTCYMUSUidovbcrpCIGZrbycf75dk%2BhjasAclgdnjygaJ4ohZIiihxAMSs5yN8dNDmiyKiOGICkVxSd9y5O5OnzqDWS0elqbyxUQGG98Z4fgLSx48X4hqJe78IsRzC%2FnoWuBpbjDNjvywICW2Aa5l08vb4O2VqBTq9xqHKpzst65jDtyvvEBjqkAWE%2Bh4I9vplzn71c%2B%2FwHcPDGyC3jmnH8jjNLKvNwhKWMVQRqSou49AjqLTG4%2B2yMNNsp0b8Nprv8DxwHZHkA3Vry6Z14DWblEidRXjvrZI3sQTL9NhHWGTk2g4lN5FzmrzYKsCJO5fkPUZmDbF1meZWmGFNtPIVZL9cVgs3IxXP4DRZHQQ3vT18H8HMnZ%2BgjxJeZsSuT324gxX8PBxprDOphHFHh&X-Amz-Signature=b69821ffc264863eba963519fb496b6aed1358a0ebfd3acb81c031bbb58e5acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BAKDP3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD7wCc2Y%2F0TX1Enh0wuQZCvl0l0ESqidUT2puMBZo8wxAIhAI3yTPfC1JJ6A%2FpBhMaWjA9vaZ5BgXiStQ924tM6%2FkUvKv8DCFkQABoMNjM3NDIzMTgzODA1Igyzpw2TAKbAqsMCNmgq3APkY5NvKB8vLxOGssDRYvLzl97eFv9g4JRpSzJ6t9Bl4v7mnKTRui02JWaPKtQeM%2BMOdIwJI%2Bk9TR3QqqaptdJ9zURk7Syb5xrABB0kb%2BdsflTP4Wi8NqlIj9x8iUEm5FQvw6KcGRLCjmM0UiodWXTUEwtSkguzF68ABqjXOyetBtlmbDwPUy3RH36lOFRV5vC0C54ydli7lnEUFfQwdfm1sFcO5SO8YEOoF3Pa3D965Xd51FXUfyos1UUa%2Fd2H%2FtT0dpawbt52PAzLW9R2Yo679cEDavScViPKWphpd8Nfh%2BlcqJqKyex6WdIvssreOCCuS6IGnNLgKZh%2FsfHBt2vZM4JjmhulozGan%2BuQWytqAIxrqOBniXzJtV9t41tU0pXCQdsetkX5WcDO%2FKcbi31WDgoaU7nImvKf7K%2BjlW1Dl4z4qBUCMnEtob4SU1DiX9YE144ThqSPEHvK%2BwTCYMUSUidovbcrpCIGZrbycf75dk%2BhjasAclgdnjygaJ4ohZIiihxAMSs5yN8dNDmiyKiOGICkVxSd9y5O5OnzqDWS0elqbyxUQGG98Z4fgLSx48X4hqJe78IsRzC%2FnoWuBpbjDNjvywICW2Aa5l08vb4O2VqBTq9xqHKpzst65jDtyvvEBjqkAWE%2Bh4I9vplzn71c%2B%2FwHcPDGyC3jmnH8jjNLKvNwhKWMVQRqSou49AjqLTG4%2B2yMNNsp0b8Nprv8DxwHZHkA3Vry6Z14DWblEidRXjvrZI3sQTL9NhHWGTk2g4lN5FzmrzYKsCJO5fkPUZmDbF1meZWmGFNtPIVZL9cVgs3IxXP4DRZHQQ3vT18H8HMnZ%2BgjxJeZsSuT324gxX8PBxprDOphHFHh&X-Amz-Signature=ad400c18f64410d107fd7881d852f663b5bac6d4f6d8f7b6bbc660bdd80eff6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BAKDP3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD7wCc2Y%2F0TX1Enh0wuQZCvl0l0ESqidUT2puMBZo8wxAIhAI3yTPfC1JJ6A%2FpBhMaWjA9vaZ5BgXiStQ924tM6%2FkUvKv8DCFkQABoMNjM3NDIzMTgzODA1Igyzpw2TAKbAqsMCNmgq3APkY5NvKB8vLxOGssDRYvLzl97eFv9g4JRpSzJ6t9Bl4v7mnKTRui02JWaPKtQeM%2BMOdIwJI%2Bk9TR3QqqaptdJ9zURk7Syb5xrABB0kb%2BdsflTP4Wi8NqlIj9x8iUEm5FQvw6KcGRLCjmM0UiodWXTUEwtSkguzF68ABqjXOyetBtlmbDwPUy3RH36lOFRV5vC0C54ydli7lnEUFfQwdfm1sFcO5SO8YEOoF3Pa3D965Xd51FXUfyos1UUa%2Fd2H%2FtT0dpawbt52PAzLW9R2Yo679cEDavScViPKWphpd8Nfh%2BlcqJqKyex6WdIvssreOCCuS6IGnNLgKZh%2FsfHBt2vZM4JjmhulozGan%2BuQWytqAIxrqOBniXzJtV9t41tU0pXCQdsetkX5WcDO%2FKcbi31WDgoaU7nImvKf7K%2BjlW1Dl4z4qBUCMnEtob4SU1DiX9YE144ThqSPEHvK%2BwTCYMUSUidovbcrpCIGZrbycf75dk%2BhjasAclgdnjygaJ4ohZIiihxAMSs5yN8dNDmiyKiOGICkVxSd9y5O5OnzqDWS0elqbyxUQGG98Z4fgLSx48X4hqJe78IsRzC%2FnoWuBpbjDNjvywICW2Aa5l08vb4O2VqBTq9xqHKpzst65jDtyvvEBjqkAWE%2Bh4I9vplzn71c%2B%2FwHcPDGyC3jmnH8jjNLKvNwhKWMVQRqSou49AjqLTG4%2B2yMNNsp0b8Nprv8DxwHZHkA3Vry6Z14DWblEidRXjvrZI3sQTL9NhHWGTk2g4lN5FzmrzYKsCJO5fkPUZmDbF1meZWmGFNtPIVZL9cVgs3IxXP4DRZHQQ3vT18H8HMnZ%2BgjxJeZsSuT324gxX8PBxprDOphHFHh&X-Amz-Signature=a924066990eac3dc20f7f30d33bb31056f0a6d5cc128781e8fe34b4462beb657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD3IJ6QY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGi2vAweTUcw3eWGB1eBm0DtAqfWTi6m6XvjmCmHroZmAiEAvo5LvsAvshMop433eI%2FAfHqWRg5OE3bhFrYdg%2BoLUS4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK2UDvwdB8NaC%2FuvxircAzxlIA6OgMFwwJF5bPcK%2FTd285mHc3ax%2BZXe9ZP7vZLMFoBY3UpOYF1PjPrOm7YImwXV4zur%2B%2Bwy7IIoocvKCafwa%2FxCJBmBX1ZhUB%2B72o%2BISDo53Cbekkhb4agur0awtptjn34RwV3snX7Ao2R8Td3u2aPXIuzDlKyn4jkjsnfliYk7aYhgRIN16O0ajjwxnyq1p7%2FQNhhvNWRPBUJLCLNpwWhrGOO%2F45OWtZni3yvzRXQvVPTHP0fqxqR4Xn20AbXxWg7IYlvvSWy5FeJxONUatCRy0Wzl74sX7xosjyTJEeFfI47HJYD%2BJjMrktswNOJhLlqkYh6gPW448CWxXrypdWsicRpFeUGprWbiheG9vDm5HpNFwaLPgTvky%2Fw0YrNmDNLx4BTx03XTqS5lk%2BDz9g6dpduDcjW3EMn%2Fd6dNT5YWZGLWzbRqnK374q%2Fp64MtBB%2F1JQK3JLf2lHzOUi4Aqm5G5zkc6wmHpJ0AjmAxZP92vJajdUeEsQC98%2BBQoV5g37NKSI5ZvgYbwLgFzMSoTPY2crH9gesfcD5WDSWVPFdJq3KCIjjhfTWW9KTwYu%2BDfhFi2n%2B98WxE0lfUiuFFyV%2Fy8nOktgO5p%2BOLCW00iORJFGHMokLo9ASyMKC%2B%2B8EGOqUBIeMANb3yy3RnszsHhnbJ8%2F0rF5NG2SjFgoDy3LEj%2B6hiLUVBQu1qptGKKWsgZGZ%2B1qV1Ue3Zs0GR2xEXLpuIY7co5xNthniEocqc36aK8yKwvi2YKsa2etVF9jHdcg0ynUKBAyMF0nVC%2Foz2%2BvDOuGyNpL6wUsZOPH3SEjmq7OkrqBGs4hrma%2B6PqzLT9TUxEdkLLe%2Bk3kxMLqb4EsBUU6y7feGm&X-Amz-Signature=1eb2fefeaa7cfe9c43e77a311c4970ed3df4d0439ffdfca0fcf3a31e25ea956a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD3IJ6QY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGi2vAweTUcw3eWGB1eBm0DtAqfWTi6m6XvjmCmHroZmAiEAvo5LvsAvshMop433eI%2FAfHqWRg5OE3bhFrYdg%2BoLUS4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK2UDvwdB8NaC%2FuvxircAzxlIA6OgMFwwJF5bPcK%2FTd285mHc3ax%2BZXe9ZP7vZLMFoBY3UpOYF1PjPrOm7YImwXV4zur%2B%2Bwy7IIoocvKCafwa%2FxCJBmBX1ZhUB%2B72o%2BISDo53Cbekkhb4agur0awtptjn34RwV3snX7Ao2R8Td3u2aPXIuzDlKyn4jkjsnfliYk7aYhgRIN16O0ajjwxnyq1p7%2FQNhhvNWRPBUJLCLNpwWhrGOO%2F45OWtZni3yvzRXQvVPTHP0fqxqR4Xn20AbXxWg7IYlvvSWy5FeJxONUatCRy0Wzl74sX7xosjyTJEeFfI47HJYD%2BJjMrktswNOJhLlqkYh6gPW448CWxXrypdWsicRpFeUGprWbiheG9vDm5HpNFwaLPgTvky%2Fw0YrNmDNLx4BTx03XTqS5lk%2BDz9g6dpduDcjW3EMn%2Fd6dNT5YWZGLWzbRqnK374q%2Fp64MtBB%2F1JQK3JLf2lHzOUi4Aqm5G5zkc6wmHpJ0AjmAxZP92vJajdUeEsQC98%2BBQoV5g37NKSI5ZvgYbwLgFzMSoTPY2crH9gesfcD5WDSWVPFdJq3KCIjjhfTWW9KTwYu%2BDfhFi2n%2B98WxE0lfUiuFFyV%2Fy8nOktgO5p%2BOLCW00iORJFGHMokLo9ASyMKC%2B%2B8EGOqUBIeMANb3yy3RnszsHhnbJ8%2F0rF5NG2SjFgoDy3LEj%2B6hiLUVBQu1qptGKKWsgZGZ%2B1qV1Ue3Zs0GR2xEXLpuIY7co5xNthniEocqc36aK8yKwvi2YKsa2etVF9jHdcg0ynUKBAyMF0nVC%2Foz2%2BvDOuGyNpL6wUsZOPH3SEjmq7OkrqBGs4hrma%2B6PqzLT9TUxEdkLLe%2Bk3kxMLqb4EsBUU6y7feGm&X-Amz-Signature=0144534a5507b2cbc534d5f127518b26374ddb58195f3c43659b0e1c96b47461&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD3IJ6QY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGi2vAweTUcw3eWGB1eBm0DtAqfWTi6m6XvjmCmHroZmAiEAvo5LvsAvshMop433eI%2FAfHqWRg5OE3bhFrYdg%2BoLUS4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK2UDvwdB8NaC%2FuvxircAzxlIA6OgMFwwJF5bPcK%2FTd285mHc3ax%2BZXe9ZP7vZLMFoBY3UpOYF1PjPrOm7YImwXV4zur%2B%2Bwy7IIoocvKCafwa%2FxCJBmBX1ZhUB%2B72o%2BISDo53Cbekkhb4agur0awtptjn34RwV3snX7Ao2R8Td3u2aPXIuzDlKyn4jkjsnfliYk7aYhgRIN16O0ajjwxnyq1p7%2FQNhhvNWRPBUJLCLNpwWhrGOO%2F45OWtZni3yvzRXQvVPTHP0fqxqR4Xn20AbXxWg7IYlvvSWy5FeJxONUatCRy0Wzl74sX7xosjyTJEeFfI47HJYD%2BJjMrktswNOJhLlqkYh6gPW448CWxXrypdWsicRpFeUGprWbiheG9vDm5HpNFwaLPgTvky%2Fw0YrNmDNLx4BTx03XTqS5lk%2BDz9g6dpduDcjW3EMn%2Fd6dNT5YWZGLWzbRqnK374q%2Fp64MtBB%2F1JQK3JLf2lHzOUi4Aqm5G5zkc6wmHpJ0AjmAxZP92vJajdUeEsQC98%2BBQoV5g37NKSI5ZvgYbwLgFzMSoTPY2crH9gesfcD5WDSWVPFdJq3KCIjjhfTWW9KTwYu%2BDfhFi2n%2B98WxE0lfUiuFFyV%2Fy8nOktgO5p%2BOLCW00iORJFGHMokLo9ASyMKC%2B%2B8EGOqUBIeMANb3yy3RnszsHhnbJ8%2F0rF5NG2SjFgoDy3LEj%2B6hiLUVBQu1qptGKKWsgZGZ%2B1qV1Ue3Zs0GR2xEXLpuIY7co5xNthniEocqc36aK8yKwvi2YKsa2etVF9jHdcg0ynUKBAyMF0nVC%2Foz2%2BvDOuGyNpL6wUsZOPH3SEjmq7OkrqBGs4hrma%2B6PqzLT9TUxEdkLLe%2Bk3kxMLqb4EsBUU6y7feGm&X-Amz-Signature=2155170dffadccaf5b2979146b72ef30f64b202a68434ea2eaad95bc4fe86dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD3IJ6QY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGi2vAweTUcw3eWGB1eBm0DtAqfWTi6m6XvjmCmHroZmAiEAvo5LvsAvshMop433eI%2FAfHqWRg5OE3bhFrYdg%2BoLUS4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK2UDvwdB8NaC%2FuvxircAzxlIA6OgMFwwJF5bPcK%2FTd285mHc3ax%2BZXe9ZP7vZLMFoBY3UpOYF1PjPrOm7YImwXV4zur%2B%2Bwy7IIoocvKCafwa%2FxCJBmBX1ZhUB%2B72o%2BISDo53Cbekkhb4agur0awtptjn34RwV3snX7Ao2R8Td3u2aPXIuzDlKyn4jkjsnfliYk7aYhgRIN16O0ajjwxnyq1p7%2FQNhhvNWRPBUJLCLNpwWhrGOO%2F45OWtZni3yvzRXQvVPTHP0fqxqR4Xn20AbXxWg7IYlvvSWy5FeJxONUatCRy0Wzl74sX7xosjyTJEeFfI47HJYD%2BJjMrktswNOJhLlqkYh6gPW448CWxXrypdWsicRpFeUGprWbiheG9vDm5HpNFwaLPgTvky%2Fw0YrNmDNLx4BTx03XTqS5lk%2BDz9g6dpduDcjW3EMn%2Fd6dNT5YWZGLWzbRqnK374q%2Fp64MtBB%2F1JQK3JLf2lHzOUi4Aqm5G5zkc6wmHpJ0AjmAxZP92vJajdUeEsQC98%2BBQoV5g37NKSI5ZvgYbwLgFzMSoTPY2crH9gesfcD5WDSWVPFdJq3KCIjjhfTWW9KTwYu%2BDfhFi2n%2B98WxE0lfUiuFFyV%2Fy8nOktgO5p%2BOLCW00iORJFGHMokLo9ASyMKC%2B%2B8EGOqUBIeMANb3yy3RnszsHhnbJ8%2F0rF5NG2SjFgoDy3LEj%2B6hiLUVBQu1qptGKKWsgZGZ%2B1qV1Ue3Zs0GR2xEXLpuIY7co5xNthniEocqc36aK8yKwvi2YKsa2etVF9jHdcg0ynUKBAyMF0nVC%2Foz2%2BvDOuGyNpL6wUsZOPH3SEjmq7OkrqBGs4hrma%2B6PqzLT9TUxEdkLLe%2Bk3kxMLqb4EsBUU6y7feGm&X-Amz-Signature=d129325bcfe07e68b1016b2b40818304236f5373d529d08fd4ccdf3293b50905&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD3IJ6QY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGi2vAweTUcw3eWGB1eBm0DtAqfWTi6m6XvjmCmHroZmAiEAvo5LvsAvshMop433eI%2FAfHqWRg5OE3bhFrYdg%2BoLUS4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK2UDvwdB8NaC%2FuvxircAzxlIA6OgMFwwJF5bPcK%2FTd285mHc3ax%2BZXe9ZP7vZLMFoBY3UpOYF1PjPrOm7YImwXV4zur%2B%2Bwy7IIoocvKCafwa%2FxCJBmBX1ZhUB%2B72o%2BISDo53Cbekkhb4agur0awtptjn34RwV3snX7Ao2R8Td3u2aPXIuzDlKyn4jkjsnfliYk7aYhgRIN16O0ajjwxnyq1p7%2FQNhhvNWRPBUJLCLNpwWhrGOO%2F45OWtZni3yvzRXQvVPTHP0fqxqR4Xn20AbXxWg7IYlvvSWy5FeJxONUatCRy0Wzl74sX7xosjyTJEeFfI47HJYD%2BJjMrktswNOJhLlqkYh6gPW448CWxXrypdWsicRpFeUGprWbiheG9vDm5HpNFwaLPgTvky%2Fw0YrNmDNLx4BTx03XTqS5lk%2BDz9g6dpduDcjW3EMn%2Fd6dNT5YWZGLWzbRqnK374q%2Fp64MtBB%2F1JQK3JLf2lHzOUi4Aqm5G5zkc6wmHpJ0AjmAxZP92vJajdUeEsQC98%2BBQoV5g37NKSI5ZvgYbwLgFzMSoTPY2crH9gesfcD5WDSWVPFdJq3KCIjjhfTWW9KTwYu%2BDfhFi2n%2B98WxE0lfUiuFFyV%2Fy8nOktgO5p%2BOLCW00iORJFGHMokLo9ASyMKC%2B%2B8EGOqUBIeMANb3yy3RnszsHhnbJ8%2F0rF5NG2SjFgoDy3LEj%2B6hiLUVBQu1qptGKKWsgZGZ%2B1qV1Ue3Zs0GR2xEXLpuIY7co5xNthniEocqc36aK8yKwvi2YKsa2etVF9jHdcg0ynUKBAyMF0nVC%2Foz2%2BvDOuGyNpL6wUsZOPH3SEjmq7OkrqBGs4hrma%2B6PqzLT9TUxEdkLLe%2Bk3kxMLqb4EsBUU6y7feGm&X-Amz-Signature=7dd875294c66df62b7c255ccbcb8da12fa442324590da155bc6c88d081db9054&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD3IJ6QY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGi2vAweTUcw3eWGB1eBm0DtAqfWTi6m6XvjmCmHroZmAiEAvo5LvsAvshMop433eI%2FAfHqWRg5OE3bhFrYdg%2BoLUS4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK2UDvwdB8NaC%2FuvxircAzxlIA6OgMFwwJF5bPcK%2FTd285mHc3ax%2BZXe9ZP7vZLMFoBY3UpOYF1PjPrOm7YImwXV4zur%2B%2Bwy7IIoocvKCafwa%2FxCJBmBX1ZhUB%2B72o%2BISDo53Cbekkhb4agur0awtptjn34RwV3snX7Ao2R8Td3u2aPXIuzDlKyn4jkjsnfliYk7aYhgRIN16O0ajjwxnyq1p7%2FQNhhvNWRPBUJLCLNpwWhrGOO%2F45OWtZni3yvzRXQvVPTHP0fqxqR4Xn20AbXxWg7IYlvvSWy5FeJxONUatCRy0Wzl74sX7xosjyTJEeFfI47HJYD%2BJjMrktswNOJhLlqkYh6gPW448CWxXrypdWsicRpFeUGprWbiheG9vDm5HpNFwaLPgTvky%2Fw0YrNmDNLx4BTx03XTqS5lk%2BDz9g6dpduDcjW3EMn%2Fd6dNT5YWZGLWzbRqnK374q%2Fp64MtBB%2F1JQK3JLf2lHzOUi4Aqm5G5zkc6wmHpJ0AjmAxZP92vJajdUeEsQC98%2BBQoV5g37NKSI5ZvgYbwLgFzMSoTPY2crH9gesfcD5WDSWVPFdJq3KCIjjhfTWW9KTwYu%2BDfhFi2n%2B98WxE0lfUiuFFyV%2Fy8nOktgO5p%2BOLCW00iORJFGHMokLo9ASyMKC%2B%2B8EGOqUBIeMANb3yy3RnszsHhnbJ8%2F0rF5NG2SjFgoDy3LEj%2B6hiLUVBQu1qptGKKWsgZGZ%2B1qV1Ue3Zs0GR2xEXLpuIY7co5xNthniEocqc36aK8yKwvi2YKsa2etVF9jHdcg0ynUKBAyMF0nVC%2Foz2%2BvDOuGyNpL6wUsZOPH3SEjmq7OkrqBGs4hrma%2B6PqzLT9TUxEdkLLe%2Bk3kxMLqb4EsBUU6y7feGm&X-Amz-Signature=ed0402af4d4d7b03e4a23fdfcaad35851d09350aec71530e079abec9c2002f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD3IJ6QY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGi2vAweTUcw3eWGB1eBm0DtAqfWTi6m6XvjmCmHroZmAiEAvo5LvsAvshMop433eI%2FAfHqWRg5OE3bhFrYdg%2BoLUS4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDK2UDvwdB8NaC%2FuvxircAzxlIA6OgMFwwJF5bPcK%2FTd285mHc3ax%2BZXe9ZP7vZLMFoBY3UpOYF1PjPrOm7YImwXV4zur%2B%2Bwy7IIoocvKCafwa%2FxCJBmBX1ZhUB%2B72o%2BISDo53Cbekkhb4agur0awtptjn34RwV3snX7Ao2R8Td3u2aPXIuzDlKyn4jkjsnfliYk7aYhgRIN16O0ajjwxnyq1p7%2FQNhhvNWRPBUJLCLNpwWhrGOO%2F45OWtZni3yvzRXQvVPTHP0fqxqR4Xn20AbXxWg7IYlvvSWy5FeJxONUatCRy0Wzl74sX7xosjyTJEeFfI47HJYD%2BJjMrktswNOJhLlqkYh6gPW448CWxXrypdWsicRpFeUGprWbiheG9vDm5HpNFwaLPgTvky%2Fw0YrNmDNLx4BTx03XTqS5lk%2BDz9g6dpduDcjW3EMn%2Fd6dNT5YWZGLWzbRqnK374q%2Fp64MtBB%2F1JQK3JLf2lHzOUi4Aqm5G5zkc6wmHpJ0AjmAxZP92vJajdUeEsQC98%2BBQoV5g37NKSI5ZvgYbwLgFzMSoTPY2crH9gesfcD5WDSWVPFdJq3KCIjjhfTWW9KTwYu%2BDfhFi2n%2B98WxE0lfUiuFFyV%2Fy8nOktgO5p%2BOLCW00iORJFGHMokLo9ASyMKC%2B%2B8EGOqUBIeMANb3yy3RnszsHhnbJ8%2F0rF5NG2SjFgoDy3LEj%2B6hiLUVBQu1qptGKKWsgZGZ%2B1qV1Ue3Zs0GR2xEXLpuIY7co5xNthniEocqc36aK8yKwvi2YKsa2etVF9jHdcg0ynUKBAyMF0nVC%2Foz2%2BvDOuGyNpL6wUsZOPH3SEjmq7OkrqBGs4hrma%2B6PqzLT9TUxEdkLLe%2Bk3kxMLqb4EsBUU6y7feGm&X-Amz-Signature=13fe03d462402cbc90f698a0d62be27276197d8e5bc1bfb47f8cbcf84f7ee3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBS56RZN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDFskIqbK0jsf48UsaSHOV43d0HKr85TI5zvUzyyEF1xQIgCi6vGDttF9hClE0ZcGCt%2BXx0PKMOrk%2BjI5mpxUndYG8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC%2FMM5NQh%2FI4HsB1DCrcA0bDnmo3LSXB7hbLL0YlZOqmqj628%2FFkSBzKNTYpvSWK68zBYUAgMQWww7lGpilkV0kwOh8cnzxPfMCVQl4CjpTbzET0sOdkTSeofq5RioLFSz0ZEuGLHMxBa4iMbBucdzUmTM2YuASB70pAKk0wqYdRES2PQdbxKjj%2Fz3Xcp%2F7jpHDOK2f4iPmdfLT%2FHXVpCt0b5%2Bej5Idg451CToTVaK5Sor6TJG%2BtGMoHbcKouwJNyzTxO7rT8tJfxFPEb8%2FnnDJSgOUqfW9MMXAZBGcFKmUv8aAAtkqzEiEeVMV8Ekmyb7S7foOp3LRqWV2cCyQoVszdXeUADHKagkMeVLIdt%2BbTPBNW73HQ4ZvB9CJe6AIq1u7ThXtxOOdPFb0W0873wjM2j6y8JuFQsjf2ma1JFynNy9JyIx7dwGW9rXfBKA2klXqZYBhicbsk4onHa69KFh1e4ra6yeGJn1i0CWdPHL8uYNc4PclvaIAbleY195adPKo63p35VW5dwyYCvfA5i4f3oFleXYksTR1H%2B7QKByb70AtVuS9KSEBTiKE%2BLSGf7G%2FtZL1I1jqcdHm7BXeWV2VJHnL%2FFtRrC3aua5ZpuUNnn%2B%2BI38qbURpTRmQ7g8akaORKRzXuaG%2BD3op2MPrd7sIGOqUBiwL%2FVvHVsoXV19l%2FFjg555yWlqRKS6Key3bw6FrXoObTR0kVSfDcgydxwp3v3ZFXGd0k83W%2Bm8ZLmYeIpvmmXS0L8sISI2vhtlc6APBBLY%2BPBRH9nvQGINu1LldIZW2%2F75uFoJVOtO0sCvz0JnB5uW9mH8mqTLzi0evqYYihBULdf6euJoi%2F6xkSGFJbFZ%2FONEZJSMcIjTROOKuD%2Bl7vF7gR4jCX&X-Amz-Signature=ceae79bcd7e3c841b563ed261a191e00fe7ec67735eb2ea613bea41cd3f59e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBS56RZN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDFskIqbK0jsf48UsaSHOV43d0HKr85TI5zvUzyyEF1xQIgCi6vGDttF9hClE0ZcGCt%2BXx0PKMOrk%2BjI5mpxUndYG8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC%2FMM5NQh%2FI4HsB1DCrcA0bDnmo3LSXB7hbLL0YlZOqmqj628%2FFkSBzKNTYpvSWK68zBYUAgMQWww7lGpilkV0kwOh8cnzxPfMCVQl4CjpTbzET0sOdkTSeofq5RioLFSz0ZEuGLHMxBa4iMbBucdzUmTM2YuASB70pAKk0wqYdRES2PQdbxKjj%2Fz3Xcp%2F7jpHDOK2f4iPmdfLT%2FHXVpCt0b5%2Bej5Idg451CToTVaK5Sor6TJG%2BtGMoHbcKouwJNyzTxO7rT8tJfxFPEb8%2FnnDJSgOUqfW9MMXAZBGcFKmUv8aAAtkqzEiEeVMV8Ekmyb7S7foOp3LRqWV2cCyQoVszdXeUADHKagkMeVLIdt%2BbTPBNW73HQ4ZvB9CJe6AIq1u7ThXtxOOdPFb0W0873wjM2j6y8JuFQsjf2ma1JFynNy9JyIx7dwGW9rXfBKA2klXqZYBhicbsk4onHa69KFh1e4ra6yeGJn1i0CWdPHL8uYNc4PclvaIAbleY195adPKo63p35VW5dwyYCvfA5i4f3oFleXYksTR1H%2B7QKByb70AtVuS9KSEBTiKE%2BLSGf7G%2FtZL1I1jqcdHm7BXeWV2VJHnL%2FFtRrC3aua5ZpuUNnn%2B%2BI38qbURpTRmQ7g8akaORKRzXuaG%2BD3op2MPrd7sIGOqUBiwL%2FVvHVsoXV19l%2FFjg555yWlqRKS6Key3bw6FrXoObTR0kVSfDcgydxwp3v3ZFXGd0k83W%2Bm8ZLmYeIpvmmXS0L8sISI2vhtlc6APBBLY%2BPBRH9nvQGINu1LldIZW2%2F75uFoJVOtO0sCvz0JnB5uW9mH8mqTLzi0evqYYihBULdf6euJoi%2F6xkSGFJbFZ%2FONEZJSMcIjTROOKuD%2Bl7vF7gR4jCX&X-Amz-Signature=3b0be6ae3cc53ed33133c4ab690cdfbe126f65a982e1b25c8fa124c16ea3146e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBS56RZN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDFskIqbK0jsf48UsaSHOV43d0HKr85TI5zvUzyyEF1xQIgCi6vGDttF9hClE0ZcGCt%2BXx0PKMOrk%2BjI5mpxUndYG8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC%2FMM5NQh%2FI4HsB1DCrcA0bDnmo3LSXB7hbLL0YlZOqmqj628%2FFkSBzKNTYpvSWK68zBYUAgMQWww7lGpilkV0kwOh8cnzxPfMCVQl4CjpTbzET0sOdkTSeofq5RioLFSz0ZEuGLHMxBa4iMbBucdzUmTM2YuASB70pAKk0wqYdRES2PQdbxKjj%2Fz3Xcp%2F7jpHDOK2f4iPmdfLT%2FHXVpCt0b5%2Bej5Idg451CToTVaK5Sor6TJG%2BtGMoHbcKouwJNyzTxO7rT8tJfxFPEb8%2FnnDJSgOUqfW9MMXAZBGcFKmUv8aAAtkqzEiEeVMV8Ekmyb7S7foOp3LRqWV2cCyQoVszdXeUADHKagkMeVLIdt%2BbTPBNW73HQ4ZvB9CJe6AIq1u7ThXtxOOdPFb0W0873wjM2j6y8JuFQsjf2ma1JFynNy9JyIx7dwGW9rXfBKA2klXqZYBhicbsk4onHa69KFh1e4ra6yeGJn1i0CWdPHL8uYNc4PclvaIAbleY195adPKo63p35VW5dwyYCvfA5i4f3oFleXYksTR1H%2B7QKByb70AtVuS9KSEBTiKE%2BLSGf7G%2FtZL1I1jqcdHm7BXeWV2VJHnL%2FFtRrC3aua5ZpuUNnn%2B%2BI38qbURpTRmQ7g8akaORKRzXuaG%2BD3op2MPrd7sIGOqUBiwL%2FVvHVsoXV19l%2FFjg555yWlqRKS6Key3bw6FrXoObTR0kVSfDcgydxwp3v3ZFXGd0k83W%2Bm8ZLmYeIpvmmXS0L8sISI2vhtlc6APBBLY%2BPBRH9nvQGINu1LldIZW2%2F75uFoJVOtO0sCvz0JnB5uW9mH8mqTLzi0evqYYihBULdf6euJoi%2F6xkSGFJbFZ%2FONEZJSMcIjTROOKuD%2Bl7vF7gR4jCX&X-Amz-Signature=347f014df16e8437e00a1feec215cff72c241be09678e3f7e26414794004d077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBS56RZN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDFskIqbK0jsf48UsaSHOV43d0HKr85TI5zvUzyyEF1xQIgCi6vGDttF9hClE0ZcGCt%2BXx0PKMOrk%2BjI5mpxUndYG8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC%2FMM5NQh%2FI4HsB1DCrcA0bDnmo3LSXB7hbLL0YlZOqmqj628%2FFkSBzKNTYpvSWK68zBYUAgMQWww7lGpilkV0kwOh8cnzxPfMCVQl4CjpTbzET0sOdkTSeofq5RioLFSz0ZEuGLHMxBa4iMbBucdzUmTM2YuASB70pAKk0wqYdRES2PQdbxKjj%2Fz3Xcp%2F7jpHDOK2f4iPmdfLT%2FHXVpCt0b5%2Bej5Idg451CToTVaK5Sor6TJG%2BtGMoHbcKouwJNyzTxO7rT8tJfxFPEb8%2FnnDJSgOUqfW9MMXAZBGcFKmUv8aAAtkqzEiEeVMV8Ekmyb7S7foOp3LRqWV2cCyQoVszdXeUADHKagkMeVLIdt%2BbTPBNW73HQ4ZvB9CJe6AIq1u7ThXtxOOdPFb0W0873wjM2j6y8JuFQsjf2ma1JFynNy9JyIx7dwGW9rXfBKA2klXqZYBhicbsk4onHa69KFh1e4ra6yeGJn1i0CWdPHL8uYNc4PclvaIAbleY195adPKo63p35VW5dwyYCvfA5i4f3oFleXYksTR1H%2B7QKByb70AtVuS9KSEBTiKE%2BLSGf7G%2FtZL1I1jqcdHm7BXeWV2VJHnL%2FFtRrC3aua5ZpuUNnn%2B%2BI38qbURpTRmQ7g8akaORKRzXuaG%2BD3op2MPrd7sIGOqUBiwL%2FVvHVsoXV19l%2FFjg555yWlqRKS6Key3bw6FrXoObTR0kVSfDcgydxwp3v3ZFXGd0k83W%2Bm8ZLmYeIpvmmXS0L8sISI2vhtlc6APBBLY%2BPBRH9nvQGINu1LldIZW2%2F75uFoJVOtO0sCvz0JnB5uW9mH8mqTLzi0evqYYihBULdf6euJoi%2F6xkSGFJbFZ%2FONEZJSMcIjTROOKuD%2Bl7vF7gR4jCX&X-Amz-Signature=eda6a74a295ec933d3a9ca733414d26234c277acde502a9d32c3cd4201b8b8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBS56RZN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDFskIqbK0jsf48UsaSHOV43d0HKr85TI5zvUzyyEF1xQIgCi6vGDttF9hClE0ZcGCt%2BXx0PKMOrk%2BjI5mpxUndYG8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC%2FMM5NQh%2FI4HsB1DCrcA0bDnmo3LSXB7hbLL0YlZOqmqj628%2FFkSBzKNTYpvSWK68zBYUAgMQWww7lGpilkV0kwOh8cnzxPfMCVQl4CjpTbzET0sOdkTSeofq5RioLFSz0ZEuGLHMxBa4iMbBucdzUmTM2YuASB70pAKk0wqYdRES2PQdbxKjj%2Fz3Xcp%2F7jpHDOK2f4iPmdfLT%2FHXVpCt0b5%2Bej5Idg451CToTVaK5Sor6TJG%2BtGMoHbcKouwJNyzTxO7rT8tJfxFPEb8%2FnnDJSgOUqfW9MMXAZBGcFKmUv8aAAtkqzEiEeVMV8Ekmyb7S7foOp3LRqWV2cCyQoVszdXeUADHKagkMeVLIdt%2BbTPBNW73HQ4ZvB9CJe6AIq1u7ThXtxOOdPFb0W0873wjM2j6y8JuFQsjf2ma1JFynNy9JyIx7dwGW9rXfBKA2klXqZYBhicbsk4onHa69KFh1e4ra6yeGJn1i0CWdPHL8uYNc4PclvaIAbleY195adPKo63p35VW5dwyYCvfA5i4f3oFleXYksTR1H%2B7QKByb70AtVuS9KSEBTiKE%2BLSGf7G%2FtZL1I1jqcdHm7BXeWV2VJHnL%2FFtRrC3aua5ZpuUNnn%2B%2BI38qbURpTRmQ7g8akaORKRzXuaG%2BD3op2MPrd7sIGOqUBiwL%2FVvHVsoXV19l%2FFjg555yWlqRKS6Key3bw6FrXoObTR0kVSfDcgydxwp3v3ZFXGd0k83W%2Bm8ZLmYeIpvmmXS0L8sISI2vhtlc6APBBLY%2BPBRH9nvQGINu1LldIZW2%2F75uFoJVOtO0sCvz0JnB5uW9mH8mqTLzi0evqYYihBULdf6euJoi%2F6xkSGFJbFZ%2FONEZJSMcIjTROOKuD%2Bl7vF7gR4jCX&X-Amz-Signature=f4e1ddfafbd6e455ed62954c33533ff8a02fc1a2201a7ac62b12c8b4860fb240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBS56RZN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDFskIqbK0jsf48UsaSHOV43d0HKr85TI5zvUzyyEF1xQIgCi6vGDttF9hClE0ZcGCt%2BXx0PKMOrk%2BjI5mpxUndYG8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC%2FMM5NQh%2FI4HsB1DCrcA0bDnmo3LSXB7hbLL0YlZOqmqj628%2FFkSBzKNTYpvSWK68zBYUAgMQWww7lGpilkV0kwOh8cnzxPfMCVQl4CjpTbzET0sOdkTSeofq5RioLFSz0ZEuGLHMxBa4iMbBucdzUmTM2YuASB70pAKk0wqYdRES2PQdbxKjj%2Fz3Xcp%2F7jpHDOK2f4iPmdfLT%2FHXVpCt0b5%2Bej5Idg451CToTVaK5Sor6TJG%2BtGMoHbcKouwJNyzTxO7rT8tJfxFPEb8%2FnnDJSgOUqfW9MMXAZBGcFKmUv8aAAtkqzEiEeVMV8Ekmyb7S7foOp3LRqWV2cCyQoVszdXeUADHKagkMeVLIdt%2BbTPBNW73HQ4ZvB9CJe6AIq1u7ThXtxOOdPFb0W0873wjM2j6y8JuFQsjf2ma1JFynNy9JyIx7dwGW9rXfBKA2klXqZYBhicbsk4onHa69KFh1e4ra6yeGJn1i0CWdPHL8uYNc4PclvaIAbleY195adPKo63p35VW5dwyYCvfA5i4f3oFleXYksTR1H%2B7QKByb70AtVuS9KSEBTiKE%2BLSGf7G%2FtZL1I1jqcdHm7BXeWV2VJHnL%2FFtRrC3aua5ZpuUNnn%2B%2BI38qbURpTRmQ7g8akaORKRzXuaG%2BD3op2MPrd7sIGOqUBiwL%2FVvHVsoXV19l%2FFjg555yWlqRKS6Key3bw6FrXoObTR0kVSfDcgydxwp3v3ZFXGd0k83W%2Bm8ZLmYeIpvmmXS0L8sISI2vhtlc6APBBLY%2BPBRH9nvQGINu1LldIZW2%2F75uFoJVOtO0sCvz0JnB5uW9mH8mqTLzi0evqYYihBULdf6euJoi%2F6xkSGFJbFZ%2FONEZJSMcIjTROOKuD%2Bl7vF7gR4jCX&X-Amz-Signature=bc1dda76789de4a7bb9f8d1be910d0c9585f1caef30754b06418f943bd4adfe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBS56RZN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDFskIqbK0jsf48UsaSHOV43d0HKr85TI5zvUzyyEF1xQIgCi6vGDttF9hClE0ZcGCt%2BXx0PKMOrk%2BjI5mpxUndYG8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC%2FMM5NQh%2FI4HsB1DCrcA0bDnmo3LSXB7hbLL0YlZOqmqj628%2FFkSBzKNTYpvSWK68zBYUAgMQWww7lGpilkV0kwOh8cnzxPfMCVQl4CjpTbzET0sOdkTSeofq5RioLFSz0ZEuGLHMxBa4iMbBucdzUmTM2YuASB70pAKk0wqYdRES2PQdbxKjj%2Fz3Xcp%2F7jpHDOK2f4iPmdfLT%2FHXVpCt0b5%2Bej5Idg451CToTVaK5Sor6TJG%2BtGMoHbcKouwJNyzTxO7rT8tJfxFPEb8%2FnnDJSgOUqfW9MMXAZBGcFKmUv8aAAtkqzEiEeVMV8Ekmyb7S7foOp3LRqWV2cCyQoVszdXeUADHKagkMeVLIdt%2BbTPBNW73HQ4ZvB9CJe6AIq1u7ThXtxOOdPFb0W0873wjM2j6y8JuFQsjf2ma1JFynNy9JyIx7dwGW9rXfBKA2klXqZYBhicbsk4onHa69KFh1e4ra6yeGJn1i0CWdPHL8uYNc4PclvaIAbleY195adPKo63p35VW5dwyYCvfA5i4f3oFleXYksTR1H%2B7QKByb70AtVuS9KSEBTiKE%2BLSGf7G%2FtZL1I1jqcdHm7BXeWV2VJHnL%2FFtRrC3aua5ZpuUNnn%2B%2BI38qbURpTRmQ7g8akaORKRzXuaG%2BD3op2MPrd7sIGOqUBiwL%2FVvHVsoXV19l%2FFjg555yWlqRKS6Key3bw6FrXoObTR0kVSfDcgydxwp3v3ZFXGd0k83W%2Bm8ZLmYeIpvmmXS0L8sISI2vhtlc6APBBLY%2BPBRH9nvQGINu1LldIZW2%2F75uFoJVOtO0sCvz0JnB5uW9mH8mqTLzi0evqYYihBULdf6euJoi%2F6xkSGFJbFZ%2FONEZJSMcIjTROOKuD%2Bl7vF7gR4jCX&X-Amz-Signature=654b9b8e755d4e4342a1e6e8a8db40eb28b94020a7d5af6c7fa0f4f17916c050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

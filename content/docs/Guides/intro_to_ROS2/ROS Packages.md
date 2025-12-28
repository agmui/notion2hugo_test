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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BONIED%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP3o2B%2FiXwnduo9%2BZCt%2FJgmcfMcx4zyZadkfipVEq8LAiB6uN4E67DjUz34jJz5i%2B5txqQPXecXMBMOzeMs1kv1MSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMsU9NR0KBchaIOiuBKtwDdqM24xv4vrjbag0eS99sJPUb6T9rA3%2BeddTBhJwB%2FDbSnI2tUe9Fw%2B2RtUfU%2BpmJP8puttOwIeZtn%2FTqKG7rlG9RSvwCm7tRRbqLYMzL%2BnRz%2BLZm0WIZe1arN6bYIhoytjEe1hXGdE%2BJ4KzQtE8hi8nolMLVIUm8y3bYUdS1gpNuyu%2BD7z97fYT6XQIhgw6x2C6viIDM9d2xY3cFUf1iUTU1pjCwBlDwH35hAe2F05%2FS3OEcuyxMd1hV25RmJkZS%2BbWooj%2BDS%2F6R%2FlJn%2BpNlcnspKeafCHchEtMg4ZsIb4M%2B5%2FebD2Mz2VuRtZ2NgZ%2BHqKf3bS6AlkxC8MPBylQuLybv57%2BOSbwVQx6W2aTqg3bmaBFiMTtQvTUSINQpOEAm4bZAFMjwUoy0PD%2FgSqS2rd7A3BLg9DHbQIV714Jixw1%2Bd8h1UnSGevAipr3QeUgRRVqZbI1wRPmFQ0O%2FXqk2iOpxz2KjpwLIEOa5SLucfHSCJmrV%2BpdcmOS3R9EDwDe50hrYsa6yG8Eg5yHHn39xTJHID0b4vat9EBtxq%2BpsGjBY0THO2C7pGpZwh6od4OzszzuiOhFC2tsphdVc8QdGsMdIfwDOMf2kZScNx3H9hUQsvl7AoIZZj38AlAIwpubBygY6pgECoJr5bFxKWoepaBRfXHQr2SjMFSIZcYxIAYtAorkQqmWeN30NUSFaJGrXHOuDww35aGHrBPhF8hiRr9HLTDuX1GqQgqu7UbtBGU79EWVwZcqtDTBzIk7Odo%2B1HAkuBNDJfeswkHFmZ7ev2wih5k2YYOQHpLW1XrjAogrmkAGRYo%2BKWJHef4fYnrxY7Pn%2BTdXIsJU2YwDoDTibOyxZXmPkOXUJC4hx&X-Amz-Signature=6c94913f8e5344a225929c20a60f91ccb1c888162b3153aec2df54622c2e6d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BONIED%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP3o2B%2FiXwnduo9%2BZCt%2FJgmcfMcx4zyZadkfipVEq8LAiB6uN4E67DjUz34jJz5i%2B5txqQPXecXMBMOzeMs1kv1MSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMsU9NR0KBchaIOiuBKtwDdqM24xv4vrjbag0eS99sJPUb6T9rA3%2BeddTBhJwB%2FDbSnI2tUe9Fw%2B2RtUfU%2BpmJP8puttOwIeZtn%2FTqKG7rlG9RSvwCm7tRRbqLYMzL%2BnRz%2BLZm0WIZe1arN6bYIhoytjEe1hXGdE%2BJ4KzQtE8hi8nolMLVIUm8y3bYUdS1gpNuyu%2BD7z97fYT6XQIhgw6x2C6viIDM9d2xY3cFUf1iUTU1pjCwBlDwH35hAe2F05%2FS3OEcuyxMd1hV25RmJkZS%2BbWooj%2BDS%2F6R%2FlJn%2BpNlcnspKeafCHchEtMg4ZsIb4M%2B5%2FebD2Mz2VuRtZ2NgZ%2BHqKf3bS6AlkxC8MPBylQuLybv57%2BOSbwVQx6W2aTqg3bmaBFiMTtQvTUSINQpOEAm4bZAFMjwUoy0PD%2FgSqS2rd7A3BLg9DHbQIV714Jixw1%2Bd8h1UnSGevAipr3QeUgRRVqZbI1wRPmFQ0O%2FXqk2iOpxz2KjpwLIEOa5SLucfHSCJmrV%2BpdcmOS3R9EDwDe50hrYsa6yG8Eg5yHHn39xTJHID0b4vat9EBtxq%2BpsGjBY0THO2C7pGpZwh6od4OzszzuiOhFC2tsphdVc8QdGsMdIfwDOMf2kZScNx3H9hUQsvl7AoIZZj38AlAIwpubBygY6pgECoJr5bFxKWoepaBRfXHQr2SjMFSIZcYxIAYtAorkQqmWeN30NUSFaJGrXHOuDww35aGHrBPhF8hiRr9HLTDuX1GqQgqu7UbtBGU79EWVwZcqtDTBzIk7Odo%2B1HAkuBNDJfeswkHFmZ7ev2wih5k2YYOQHpLW1XrjAogrmkAGRYo%2BKWJHef4fYnrxY7Pn%2BTdXIsJU2YwDoDTibOyxZXmPkOXUJC4hx&X-Amz-Signature=d3cf804bd4e22962c1792da61d95478edcc6c48799e95fa239c788eb2dde91b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BONIED%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP3o2B%2FiXwnduo9%2BZCt%2FJgmcfMcx4zyZadkfipVEq8LAiB6uN4E67DjUz34jJz5i%2B5txqQPXecXMBMOzeMs1kv1MSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMsU9NR0KBchaIOiuBKtwDdqM24xv4vrjbag0eS99sJPUb6T9rA3%2BeddTBhJwB%2FDbSnI2tUe9Fw%2B2RtUfU%2BpmJP8puttOwIeZtn%2FTqKG7rlG9RSvwCm7tRRbqLYMzL%2BnRz%2BLZm0WIZe1arN6bYIhoytjEe1hXGdE%2BJ4KzQtE8hi8nolMLVIUm8y3bYUdS1gpNuyu%2BD7z97fYT6XQIhgw6x2C6viIDM9d2xY3cFUf1iUTU1pjCwBlDwH35hAe2F05%2FS3OEcuyxMd1hV25RmJkZS%2BbWooj%2BDS%2F6R%2FlJn%2BpNlcnspKeafCHchEtMg4ZsIb4M%2B5%2FebD2Mz2VuRtZ2NgZ%2BHqKf3bS6AlkxC8MPBylQuLybv57%2BOSbwVQx6W2aTqg3bmaBFiMTtQvTUSINQpOEAm4bZAFMjwUoy0PD%2FgSqS2rd7A3BLg9DHbQIV714Jixw1%2Bd8h1UnSGevAipr3QeUgRRVqZbI1wRPmFQ0O%2FXqk2iOpxz2KjpwLIEOa5SLucfHSCJmrV%2BpdcmOS3R9EDwDe50hrYsa6yG8Eg5yHHn39xTJHID0b4vat9EBtxq%2BpsGjBY0THO2C7pGpZwh6od4OzszzuiOhFC2tsphdVc8QdGsMdIfwDOMf2kZScNx3H9hUQsvl7AoIZZj38AlAIwpubBygY6pgECoJr5bFxKWoepaBRfXHQr2SjMFSIZcYxIAYtAorkQqmWeN30NUSFaJGrXHOuDww35aGHrBPhF8hiRr9HLTDuX1GqQgqu7UbtBGU79EWVwZcqtDTBzIk7Odo%2B1HAkuBNDJfeswkHFmZ7ev2wih5k2YYOQHpLW1XrjAogrmkAGRYo%2BKWJHef4fYnrxY7Pn%2BTdXIsJU2YwDoDTibOyxZXmPkOXUJC4hx&X-Amz-Signature=0a67f433dd411ea9aacdeb76b429bd5a3f00eae09312160bb15a4547a7d84b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BONIED%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP3o2B%2FiXwnduo9%2BZCt%2FJgmcfMcx4zyZadkfipVEq8LAiB6uN4E67DjUz34jJz5i%2B5txqQPXecXMBMOzeMs1kv1MSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMsU9NR0KBchaIOiuBKtwDdqM24xv4vrjbag0eS99sJPUb6T9rA3%2BeddTBhJwB%2FDbSnI2tUe9Fw%2B2RtUfU%2BpmJP8puttOwIeZtn%2FTqKG7rlG9RSvwCm7tRRbqLYMzL%2BnRz%2BLZm0WIZe1arN6bYIhoytjEe1hXGdE%2BJ4KzQtE8hi8nolMLVIUm8y3bYUdS1gpNuyu%2BD7z97fYT6XQIhgw6x2C6viIDM9d2xY3cFUf1iUTU1pjCwBlDwH35hAe2F05%2FS3OEcuyxMd1hV25RmJkZS%2BbWooj%2BDS%2F6R%2FlJn%2BpNlcnspKeafCHchEtMg4ZsIb4M%2B5%2FebD2Mz2VuRtZ2NgZ%2BHqKf3bS6AlkxC8MPBylQuLybv57%2BOSbwVQx6W2aTqg3bmaBFiMTtQvTUSINQpOEAm4bZAFMjwUoy0PD%2FgSqS2rd7A3BLg9DHbQIV714Jixw1%2Bd8h1UnSGevAipr3QeUgRRVqZbI1wRPmFQ0O%2FXqk2iOpxz2KjpwLIEOa5SLucfHSCJmrV%2BpdcmOS3R9EDwDe50hrYsa6yG8Eg5yHHn39xTJHID0b4vat9EBtxq%2BpsGjBY0THO2C7pGpZwh6od4OzszzuiOhFC2tsphdVc8QdGsMdIfwDOMf2kZScNx3H9hUQsvl7AoIZZj38AlAIwpubBygY6pgECoJr5bFxKWoepaBRfXHQr2SjMFSIZcYxIAYtAorkQqmWeN30NUSFaJGrXHOuDww35aGHrBPhF8hiRr9HLTDuX1GqQgqu7UbtBGU79EWVwZcqtDTBzIk7Odo%2B1HAkuBNDJfeswkHFmZ7ev2wih5k2YYOQHpLW1XrjAogrmkAGRYo%2BKWJHef4fYnrxY7Pn%2BTdXIsJU2YwDoDTibOyxZXmPkOXUJC4hx&X-Amz-Signature=860bd3e1f7b94684963230860b11f937d8e469ebb7ff3480a2aced94b134b8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BONIED%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP3o2B%2FiXwnduo9%2BZCt%2FJgmcfMcx4zyZadkfipVEq8LAiB6uN4E67DjUz34jJz5i%2B5txqQPXecXMBMOzeMs1kv1MSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMsU9NR0KBchaIOiuBKtwDdqM24xv4vrjbag0eS99sJPUb6T9rA3%2BeddTBhJwB%2FDbSnI2tUe9Fw%2B2RtUfU%2BpmJP8puttOwIeZtn%2FTqKG7rlG9RSvwCm7tRRbqLYMzL%2BnRz%2BLZm0WIZe1arN6bYIhoytjEe1hXGdE%2BJ4KzQtE8hi8nolMLVIUm8y3bYUdS1gpNuyu%2BD7z97fYT6XQIhgw6x2C6viIDM9d2xY3cFUf1iUTU1pjCwBlDwH35hAe2F05%2FS3OEcuyxMd1hV25RmJkZS%2BbWooj%2BDS%2F6R%2FlJn%2BpNlcnspKeafCHchEtMg4ZsIb4M%2B5%2FebD2Mz2VuRtZ2NgZ%2BHqKf3bS6AlkxC8MPBylQuLybv57%2BOSbwVQx6W2aTqg3bmaBFiMTtQvTUSINQpOEAm4bZAFMjwUoy0PD%2FgSqS2rd7A3BLg9DHbQIV714Jixw1%2Bd8h1UnSGevAipr3QeUgRRVqZbI1wRPmFQ0O%2FXqk2iOpxz2KjpwLIEOa5SLucfHSCJmrV%2BpdcmOS3R9EDwDe50hrYsa6yG8Eg5yHHn39xTJHID0b4vat9EBtxq%2BpsGjBY0THO2C7pGpZwh6od4OzszzuiOhFC2tsphdVc8QdGsMdIfwDOMf2kZScNx3H9hUQsvl7AoIZZj38AlAIwpubBygY6pgECoJr5bFxKWoepaBRfXHQr2SjMFSIZcYxIAYtAorkQqmWeN30NUSFaJGrXHOuDww35aGHrBPhF8hiRr9HLTDuX1GqQgqu7UbtBGU79EWVwZcqtDTBzIk7Odo%2B1HAkuBNDJfeswkHFmZ7ev2wih5k2YYOQHpLW1XrjAogrmkAGRYo%2BKWJHef4fYnrxY7Pn%2BTdXIsJU2YwDoDTibOyxZXmPkOXUJC4hx&X-Amz-Signature=498a555c889273234238b34a72be130c374bab3c5de38681cac26bbf65f16224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BONIED%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP3o2B%2FiXwnduo9%2BZCt%2FJgmcfMcx4zyZadkfipVEq8LAiB6uN4E67DjUz34jJz5i%2B5txqQPXecXMBMOzeMs1kv1MSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMsU9NR0KBchaIOiuBKtwDdqM24xv4vrjbag0eS99sJPUb6T9rA3%2BeddTBhJwB%2FDbSnI2tUe9Fw%2B2RtUfU%2BpmJP8puttOwIeZtn%2FTqKG7rlG9RSvwCm7tRRbqLYMzL%2BnRz%2BLZm0WIZe1arN6bYIhoytjEe1hXGdE%2BJ4KzQtE8hi8nolMLVIUm8y3bYUdS1gpNuyu%2BD7z97fYT6XQIhgw6x2C6viIDM9d2xY3cFUf1iUTU1pjCwBlDwH35hAe2F05%2FS3OEcuyxMd1hV25RmJkZS%2BbWooj%2BDS%2F6R%2FlJn%2BpNlcnspKeafCHchEtMg4ZsIb4M%2B5%2FebD2Mz2VuRtZ2NgZ%2BHqKf3bS6AlkxC8MPBylQuLybv57%2BOSbwVQx6W2aTqg3bmaBFiMTtQvTUSINQpOEAm4bZAFMjwUoy0PD%2FgSqS2rd7A3BLg9DHbQIV714Jixw1%2Bd8h1UnSGevAipr3QeUgRRVqZbI1wRPmFQ0O%2FXqk2iOpxz2KjpwLIEOa5SLucfHSCJmrV%2BpdcmOS3R9EDwDe50hrYsa6yG8Eg5yHHn39xTJHID0b4vat9EBtxq%2BpsGjBY0THO2C7pGpZwh6od4OzszzuiOhFC2tsphdVc8QdGsMdIfwDOMf2kZScNx3H9hUQsvl7AoIZZj38AlAIwpubBygY6pgECoJr5bFxKWoepaBRfXHQr2SjMFSIZcYxIAYtAorkQqmWeN30NUSFaJGrXHOuDww35aGHrBPhF8hiRr9HLTDuX1GqQgqu7UbtBGU79EWVwZcqtDTBzIk7Odo%2B1HAkuBNDJfeswkHFmZ7ev2wih5k2YYOQHpLW1XrjAogrmkAGRYo%2BKWJHef4fYnrxY7Pn%2BTdXIsJU2YwDoDTibOyxZXmPkOXUJC4hx&X-Amz-Signature=e63a898b34a39b70edb84be14bc2aa96536d6a86de3650e6fd6dda5dbd03a400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BONIED%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP3o2B%2FiXwnduo9%2BZCt%2FJgmcfMcx4zyZadkfipVEq8LAiB6uN4E67DjUz34jJz5i%2B5txqQPXecXMBMOzeMs1kv1MSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMsU9NR0KBchaIOiuBKtwDdqM24xv4vrjbag0eS99sJPUb6T9rA3%2BeddTBhJwB%2FDbSnI2tUe9Fw%2B2RtUfU%2BpmJP8puttOwIeZtn%2FTqKG7rlG9RSvwCm7tRRbqLYMzL%2BnRz%2BLZm0WIZe1arN6bYIhoytjEe1hXGdE%2BJ4KzQtE8hi8nolMLVIUm8y3bYUdS1gpNuyu%2BD7z97fYT6XQIhgw6x2C6viIDM9d2xY3cFUf1iUTU1pjCwBlDwH35hAe2F05%2FS3OEcuyxMd1hV25RmJkZS%2BbWooj%2BDS%2F6R%2FlJn%2BpNlcnspKeafCHchEtMg4ZsIb4M%2B5%2FebD2Mz2VuRtZ2NgZ%2BHqKf3bS6AlkxC8MPBylQuLybv57%2BOSbwVQx6W2aTqg3bmaBFiMTtQvTUSINQpOEAm4bZAFMjwUoy0PD%2FgSqS2rd7A3BLg9DHbQIV714Jixw1%2Bd8h1UnSGevAipr3QeUgRRVqZbI1wRPmFQ0O%2FXqk2iOpxz2KjpwLIEOa5SLucfHSCJmrV%2BpdcmOS3R9EDwDe50hrYsa6yG8Eg5yHHn39xTJHID0b4vat9EBtxq%2BpsGjBY0THO2C7pGpZwh6od4OzszzuiOhFC2tsphdVc8QdGsMdIfwDOMf2kZScNx3H9hUQsvl7AoIZZj38AlAIwpubBygY6pgECoJr5bFxKWoepaBRfXHQr2SjMFSIZcYxIAYtAorkQqmWeN30NUSFaJGrXHOuDww35aGHrBPhF8hiRr9HLTDuX1GqQgqu7UbtBGU79EWVwZcqtDTBzIk7Odo%2B1HAkuBNDJfeswkHFmZ7ev2wih5k2YYOQHpLW1XrjAogrmkAGRYo%2BKWJHef4fYnrxY7Pn%2BTdXIsJU2YwDoDTibOyxZXmPkOXUJC4hx&X-Amz-Signature=cd336ee526fa5c182fb51fc34f7d0ca87162abb67bef7d1ce3284ee008d25d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

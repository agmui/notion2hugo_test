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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655H4DQI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQZBK8Rl7C8K8Y5eKHVjoD18nzb0ZBoHKg1l1Nks0bdAIhAILbqr%2FsZqCqdhZZSRPk%2Fmn5sLXT2d8c1YelOGSuF5XMKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkKNCJ736zQYPZei8q3AOW4xERsnf6AvEOuc6tCfLan7RaxI19AdNAMVNUWnrYay7Tf16N3m5vslOOrENQl6hXBP47UL1%2B%2FMWTQl%2FncHbU%2FsPaWiWFrb5k53pmiuxOGNeOhzcxw6UhdyGxWh4URkTLn5YeQhYLczzASemw8JYQaaeSQD9yrjUgjpf01P2CcpPrGL2WD5RpVvt8rIYK7YyGq2h%2FIIOY0nZAEEzTb7f9%2FFKfJCxYmQrSULv0Aas9O3zQqIJB5zPQmWV4h1e2kH8KP8I3%2FcWSyYLTU9SgJ9cM7Q%2BCjtGR1h7sywOGsNZ5ZKMEJrnthpFkb2Adz7FDy2MLRY5agqxr7ZJg3kh6MfqMBWaE8jCMspT88hndxhFsgyy5wkQmtrORu8dZaRbIJCqH0JESKcHTR%2BlNg%2FmBPOJ4BjPlX1pzRKix%2FUHfcQPBeyaJZaCqkklSYCPWV2jtCb6ZMH%2BM8yLYQVnojJgmQKm0CB65TYBcDd%2FselsVY1sDzUly%2BEaTvJ0tC4RgEkSUtFHPV4BK%2BhB%2FNt8dvuyc1myVYL8pUiUfoP5ciFXIC6jctQLQA%2B68JmvDHQ%2BedIwFhHCwdJv2T0n2f3XNB7QfzsADp9vLJ3rXqZu7FTyp9t19eYv6YcLFsIzHG8%2BzbTCxudC%2BBjqkASgVQKRJp0XwGZ5CUnaBukS4FoRqFlA2yRVaJvisavJLV9PkmF66HOu2LWudj5dw1ubU5UqE9xjAh%2FjV%2FjcPc9djKqyfpaaEomfPK802QwPIrXeVqZoIqUMWPaLZ622i2SnsIfCSJ33kIwBPatBoCVXgSm8KLvKduHppkkifjK22M8%2FzA5DHBvtqQGS8qZoV2scJVA6KklYr6BsNtvVIe1ezEJU2&X-Amz-Signature=c870514f7505f9d7c807d6424751ccb96ac8e606cfd278dd9fe303bfba8ccec3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655H4DQI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQZBK8Rl7C8K8Y5eKHVjoD18nzb0ZBoHKg1l1Nks0bdAIhAILbqr%2FsZqCqdhZZSRPk%2Fmn5sLXT2d8c1YelOGSuF5XMKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkKNCJ736zQYPZei8q3AOW4xERsnf6AvEOuc6tCfLan7RaxI19AdNAMVNUWnrYay7Tf16N3m5vslOOrENQl6hXBP47UL1%2B%2FMWTQl%2FncHbU%2FsPaWiWFrb5k53pmiuxOGNeOhzcxw6UhdyGxWh4URkTLn5YeQhYLczzASemw8JYQaaeSQD9yrjUgjpf01P2CcpPrGL2WD5RpVvt8rIYK7YyGq2h%2FIIOY0nZAEEzTb7f9%2FFKfJCxYmQrSULv0Aas9O3zQqIJB5zPQmWV4h1e2kH8KP8I3%2FcWSyYLTU9SgJ9cM7Q%2BCjtGR1h7sywOGsNZ5ZKMEJrnthpFkb2Adz7FDy2MLRY5agqxr7ZJg3kh6MfqMBWaE8jCMspT88hndxhFsgyy5wkQmtrORu8dZaRbIJCqH0JESKcHTR%2BlNg%2FmBPOJ4BjPlX1pzRKix%2FUHfcQPBeyaJZaCqkklSYCPWV2jtCb6ZMH%2BM8yLYQVnojJgmQKm0CB65TYBcDd%2FselsVY1sDzUly%2BEaTvJ0tC4RgEkSUtFHPV4BK%2BhB%2FNt8dvuyc1myVYL8pUiUfoP5ciFXIC6jctQLQA%2B68JmvDHQ%2BedIwFhHCwdJv2T0n2f3XNB7QfzsADp9vLJ3rXqZu7FTyp9t19eYv6YcLFsIzHG8%2BzbTCxudC%2BBjqkASgVQKRJp0XwGZ5CUnaBukS4FoRqFlA2yRVaJvisavJLV9PkmF66HOu2LWudj5dw1ubU5UqE9xjAh%2FjV%2FjcPc9djKqyfpaaEomfPK802QwPIrXeVqZoIqUMWPaLZ622i2SnsIfCSJ33kIwBPatBoCVXgSm8KLvKduHppkkifjK22M8%2FzA5DHBvtqQGS8qZoV2scJVA6KklYr6BsNtvVIe1ezEJU2&X-Amz-Signature=94c77b81b188ffd7de5d84de89e3ceee68c852140302f8f5030581d4a0382388&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655H4DQI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQZBK8Rl7C8K8Y5eKHVjoD18nzb0ZBoHKg1l1Nks0bdAIhAILbqr%2FsZqCqdhZZSRPk%2Fmn5sLXT2d8c1YelOGSuF5XMKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkKNCJ736zQYPZei8q3AOW4xERsnf6AvEOuc6tCfLan7RaxI19AdNAMVNUWnrYay7Tf16N3m5vslOOrENQl6hXBP47UL1%2B%2FMWTQl%2FncHbU%2FsPaWiWFrb5k53pmiuxOGNeOhzcxw6UhdyGxWh4URkTLn5YeQhYLczzASemw8JYQaaeSQD9yrjUgjpf01P2CcpPrGL2WD5RpVvt8rIYK7YyGq2h%2FIIOY0nZAEEzTb7f9%2FFKfJCxYmQrSULv0Aas9O3zQqIJB5zPQmWV4h1e2kH8KP8I3%2FcWSyYLTU9SgJ9cM7Q%2BCjtGR1h7sywOGsNZ5ZKMEJrnthpFkb2Adz7FDy2MLRY5agqxr7ZJg3kh6MfqMBWaE8jCMspT88hndxhFsgyy5wkQmtrORu8dZaRbIJCqH0JESKcHTR%2BlNg%2FmBPOJ4BjPlX1pzRKix%2FUHfcQPBeyaJZaCqkklSYCPWV2jtCb6ZMH%2BM8yLYQVnojJgmQKm0CB65TYBcDd%2FselsVY1sDzUly%2BEaTvJ0tC4RgEkSUtFHPV4BK%2BhB%2FNt8dvuyc1myVYL8pUiUfoP5ciFXIC6jctQLQA%2B68JmvDHQ%2BedIwFhHCwdJv2T0n2f3XNB7QfzsADp9vLJ3rXqZu7FTyp9t19eYv6YcLFsIzHG8%2BzbTCxudC%2BBjqkASgVQKRJp0XwGZ5CUnaBukS4FoRqFlA2yRVaJvisavJLV9PkmF66HOu2LWudj5dw1ubU5UqE9xjAh%2FjV%2FjcPc9djKqyfpaaEomfPK802QwPIrXeVqZoIqUMWPaLZ622i2SnsIfCSJ33kIwBPatBoCVXgSm8KLvKduHppkkifjK22M8%2FzA5DHBvtqQGS8qZoV2scJVA6KklYr6BsNtvVIe1ezEJU2&X-Amz-Signature=4fcb4bda3811b41618aad4067dfd64560ee36c39b384b3bd06269c992c0cb6f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655H4DQI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQZBK8Rl7C8K8Y5eKHVjoD18nzb0ZBoHKg1l1Nks0bdAIhAILbqr%2FsZqCqdhZZSRPk%2Fmn5sLXT2d8c1YelOGSuF5XMKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkKNCJ736zQYPZei8q3AOW4xERsnf6AvEOuc6tCfLan7RaxI19AdNAMVNUWnrYay7Tf16N3m5vslOOrENQl6hXBP47UL1%2B%2FMWTQl%2FncHbU%2FsPaWiWFrb5k53pmiuxOGNeOhzcxw6UhdyGxWh4URkTLn5YeQhYLczzASemw8JYQaaeSQD9yrjUgjpf01P2CcpPrGL2WD5RpVvt8rIYK7YyGq2h%2FIIOY0nZAEEzTb7f9%2FFKfJCxYmQrSULv0Aas9O3zQqIJB5zPQmWV4h1e2kH8KP8I3%2FcWSyYLTU9SgJ9cM7Q%2BCjtGR1h7sywOGsNZ5ZKMEJrnthpFkb2Adz7FDy2MLRY5agqxr7ZJg3kh6MfqMBWaE8jCMspT88hndxhFsgyy5wkQmtrORu8dZaRbIJCqH0JESKcHTR%2BlNg%2FmBPOJ4BjPlX1pzRKix%2FUHfcQPBeyaJZaCqkklSYCPWV2jtCb6ZMH%2BM8yLYQVnojJgmQKm0CB65TYBcDd%2FselsVY1sDzUly%2BEaTvJ0tC4RgEkSUtFHPV4BK%2BhB%2FNt8dvuyc1myVYL8pUiUfoP5ciFXIC6jctQLQA%2B68JmvDHQ%2BedIwFhHCwdJv2T0n2f3XNB7QfzsADp9vLJ3rXqZu7FTyp9t19eYv6YcLFsIzHG8%2BzbTCxudC%2BBjqkASgVQKRJp0XwGZ5CUnaBukS4FoRqFlA2yRVaJvisavJLV9PkmF66HOu2LWudj5dw1ubU5UqE9xjAh%2FjV%2FjcPc9djKqyfpaaEomfPK802QwPIrXeVqZoIqUMWPaLZ622i2SnsIfCSJ33kIwBPatBoCVXgSm8KLvKduHppkkifjK22M8%2FzA5DHBvtqQGS8qZoV2scJVA6KklYr6BsNtvVIe1ezEJU2&X-Amz-Signature=e900c52f3207c34cea22f6042eedc6baa60dbdca95b867e6a1008a7ba71d9997&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655H4DQI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQZBK8Rl7C8K8Y5eKHVjoD18nzb0ZBoHKg1l1Nks0bdAIhAILbqr%2FsZqCqdhZZSRPk%2Fmn5sLXT2d8c1YelOGSuF5XMKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkKNCJ736zQYPZei8q3AOW4xERsnf6AvEOuc6tCfLan7RaxI19AdNAMVNUWnrYay7Tf16N3m5vslOOrENQl6hXBP47UL1%2B%2FMWTQl%2FncHbU%2FsPaWiWFrb5k53pmiuxOGNeOhzcxw6UhdyGxWh4URkTLn5YeQhYLczzASemw8JYQaaeSQD9yrjUgjpf01P2CcpPrGL2WD5RpVvt8rIYK7YyGq2h%2FIIOY0nZAEEzTb7f9%2FFKfJCxYmQrSULv0Aas9O3zQqIJB5zPQmWV4h1e2kH8KP8I3%2FcWSyYLTU9SgJ9cM7Q%2BCjtGR1h7sywOGsNZ5ZKMEJrnthpFkb2Adz7FDy2MLRY5agqxr7ZJg3kh6MfqMBWaE8jCMspT88hndxhFsgyy5wkQmtrORu8dZaRbIJCqH0JESKcHTR%2BlNg%2FmBPOJ4BjPlX1pzRKix%2FUHfcQPBeyaJZaCqkklSYCPWV2jtCb6ZMH%2BM8yLYQVnojJgmQKm0CB65TYBcDd%2FselsVY1sDzUly%2BEaTvJ0tC4RgEkSUtFHPV4BK%2BhB%2FNt8dvuyc1myVYL8pUiUfoP5ciFXIC6jctQLQA%2B68JmvDHQ%2BedIwFhHCwdJv2T0n2f3XNB7QfzsADp9vLJ3rXqZu7FTyp9t19eYv6YcLFsIzHG8%2BzbTCxudC%2BBjqkASgVQKRJp0XwGZ5CUnaBukS4FoRqFlA2yRVaJvisavJLV9PkmF66HOu2LWudj5dw1ubU5UqE9xjAh%2FjV%2FjcPc9djKqyfpaaEomfPK802QwPIrXeVqZoIqUMWPaLZ622i2SnsIfCSJ33kIwBPatBoCVXgSm8KLvKduHppkkifjK22M8%2FzA5DHBvtqQGS8qZoV2scJVA6KklYr6BsNtvVIe1ezEJU2&X-Amz-Signature=6fe712d52836211c02146d36314b7c563ad150d33143ec5e2e944ff545f78a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655H4DQI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQZBK8Rl7C8K8Y5eKHVjoD18nzb0ZBoHKg1l1Nks0bdAIhAILbqr%2FsZqCqdhZZSRPk%2Fmn5sLXT2d8c1YelOGSuF5XMKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkKNCJ736zQYPZei8q3AOW4xERsnf6AvEOuc6tCfLan7RaxI19AdNAMVNUWnrYay7Tf16N3m5vslOOrENQl6hXBP47UL1%2B%2FMWTQl%2FncHbU%2FsPaWiWFrb5k53pmiuxOGNeOhzcxw6UhdyGxWh4URkTLn5YeQhYLczzASemw8JYQaaeSQD9yrjUgjpf01P2CcpPrGL2WD5RpVvt8rIYK7YyGq2h%2FIIOY0nZAEEzTb7f9%2FFKfJCxYmQrSULv0Aas9O3zQqIJB5zPQmWV4h1e2kH8KP8I3%2FcWSyYLTU9SgJ9cM7Q%2BCjtGR1h7sywOGsNZ5ZKMEJrnthpFkb2Adz7FDy2MLRY5agqxr7ZJg3kh6MfqMBWaE8jCMspT88hndxhFsgyy5wkQmtrORu8dZaRbIJCqH0JESKcHTR%2BlNg%2FmBPOJ4BjPlX1pzRKix%2FUHfcQPBeyaJZaCqkklSYCPWV2jtCb6ZMH%2BM8yLYQVnojJgmQKm0CB65TYBcDd%2FselsVY1sDzUly%2BEaTvJ0tC4RgEkSUtFHPV4BK%2BhB%2FNt8dvuyc1myVYL8pUiUfoP5ciFXIC6jctQLQA%2B68JmvDHQ%2BedIwFhHCwdJv2T0n2f3XNB7QfzsADp9vLJ3rXqZu7FTyp9t19eYv6YcLFsIzHG8%2BzbTCxudC%2BBjqkASgVQKRJp0XwGZ5CUnaBukS4FoRqFlA2yRVaJvisavJLV9PkmF66HOu2LWudj5dw1ubU5UqE9xjAh%2FjV%2FjcPc9djKqyfpaaEomfPK802QwPIrXeVqZoIqUMWPaLZ622i2SnsIfCSJ33kIwBPatBoCVXgSm8KLvKduHppkkifjK22M8%2FzA5DHBvtqQGS8qZoV2scJVA6KklYr6BsNtvVIe1ezEJU2&X-Amz-Signature=48d7c991c266d725144c20ef3f8a1218dc51a1bcff4ca097e3f806c38e7347b5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466655H4DQI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQZBK8Rl7C8K8Y5eKHVjoD18nzb0ZBoHKg1l1Nks0bdAIhAILbqr%2FsZqCqdhZZSRPk%2Fmn5sLXT2d8c1YelOGSuF5XMKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkKNCJ736zQYPZei8q3AOW4xERsnf6AvEOuc6tCfLan7RaxI19AdNAMVNUWnrYay7Tf16N3m5vslOOrENQl6hXBP47UL1%2B%2FMWTQl%2FncHbU%2FsPaWiWFrb5k53pmiuxOGNeOhzcxw6UhdyGxWh4URkTLn5YeQhYLczzASemw8JYQaaeSQD9yrjUgjpf01P2CcpPrGL2WD5RpVvt8rIYK7YyGq2h%2FIIOY0nZAEEzTb7f9%2FFKfJCxYmQrSULv0Aas9O3zQqIJB5zPQmWV4h1e2kH8KP8I3%2FcWSyYLTU9SgJ9cM7Q%2BCjtGR1h7sywOGsNZ5ZKMEJrnthpFkb2Adz7FDy2MLRY5agqxr7ZJg3kh6MfqMBWaE8jCMspT88hndxhFsgyy5wkQmtrORu8dZaRbIJCqH0JESKcHTR%2BlNg%2FmBPOJ4BjPlX1pzRKix%2FUHfcQPBeyaJZaCqkklSYCPWV2jtCb6ZMH%2BM8yLYQVnojJgmQKm0CB65TYBcDd%2FselsVY1sDzUly%2BEaTvJ0tC4RgEkSUtFHPV4BK%2BhB%2FNt8dvuyc1myVYL8pUiUfoP5ciFXIC6jctQLQA%2B68JmvDHQ%2BedIwFhHCwdJv2T0n2f3XNB7QfzsADp9vLJ3rXqZu7FTyp9t19eYv6YcLFsIzHG8%2BzbTCxudC%2BBjqkASgVQKRJp0XwGZ5CUnaBukS4FoRqFlA2yRVaJvisavJLV9PkmF66HOu2LWudj5dw1ubU5UqE9xjAh%2FjV%2FjcPc9djKqyfpaaEomfPK802QwPIrXeVqZoIqUMWPaLZ622i2SnsIfCSJ33kIwBPatBoCVXgSm8KLvKduHppkkifjK22M8%2FzA5DHBvtqQGS8qZoV2scJVA6KklYr6BsNtvVIe1ezEJU2&X-Amz-Signature=8685518194ab905ca923e67f109ed1aa633b36f93c046afe00af120480868cca&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

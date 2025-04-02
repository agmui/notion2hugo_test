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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2YD42J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCHgDmKXxAUNrGO1fXBogPicss9nj9SLNLggwEULF4AYAIhAPFf3KdZfU7QzBMela%2B%2B69WhpH0bBlk%2FzEwVy0OVQ5JrKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNg5jpuRy3e2JjRvAq3AOEhKjeBsmlvKkF72UnMwUAYIXy%2FbcuG46AKb5nFwI3E6BloXPrg3uF%2Bn9HLyBHXEiFlRi%2FqTNQuhkj%2FhLnlCLZuEjNWGh%2FHbngFICE%2FRPbxzQYybNvI3M8hMN%2F%2FEfnotL4O4%2ByhxcpswotZCSHVreway0t77AKYKRiqQ96%2Bvn4al%2FTQ46Geqb7y%2BrBAY3k75be3aBfTFg8x%2BcqgSBrIJTDGcwGNbEPVJmlQeQBkn%2FOzDkYPrLfyEaFrs4eNBvRO65Jnt7urhFM2m1hjngXbQoD%2FAJAkA%2F0964jEwbcSoLs%2B76KWfv7cHIxldgaMnMrCwUrbtH9JEkRWYs14xusOtCSulAvIkLCuOJS7iDPVTxxUaI%2FF92UF5KOA%2FiQdzHuC9rroRh67kR%2Bgtr3HQy3FEfl3z%2BDSVbR2uhwzjWoVIpagASAvVLouAmHIvCgf2T7aAZ18ZrrN3%2BsZI%2FVyrc5dEGKJJ68xop8qvhN8JkrzSzpa5rAHF4yknJyI2C%2BkZQr5dMWxLmYk8afO3AGkfAyqqZe1gkuzSzPpRyRUVnIIeZeFdIvVaATh1NqR5FWsBHkYWQuvRXb%2BUHTweaDUN5SsQ1ki3AbtB50HvgdB8Re5MgWjCQ3qbJ4rwcMxii9QDDe8ra%2FBjqkAWHzmtsiwX30lJEi%2BCIvaTt8LRVoEO5iLlAXg4fNIFm5v%2BfvIaIAfKpjNb5c%2F78rXMZr5cVO9dKRWSqKEEioMyMWwxyhqaI%2FC9adZAyIrlGyp8hFFj%2BwtEp21P1DD70iBc0c1o96qfj0AnXrjPCnFAiiNzyu50dMi1V5tmAeRG0lg8gM5O845FAjqWVagcRGDoszYVfxiGQQrcw9iOly7FeXxVJg&X-Amz-Signature=ef71ef3dbfd9b25801436a0699697e9da02e229b2c4819a1581db854f204c95f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2YD42J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCHgDmKXxAUNrGO1fXBogPicss9nj9SLNLggwEULF4AYAIhAPFf3KdZfU7QzBMela%2B%2B69WhpH0bBlk%2FzEwVy0OVQ5JrKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNg5jpuRy3e2JjRvAq3AOEhKjeBsmlvKkF72UnMwUAYIXy%2FbcuG46AKb5nFwI3E6BloXPrg3uF%2Bn9HLyBHXEiFlRi%2FqTNQuhkj%2FhLnlCLZuEjNWGh%2FHbngFICE%2FRPbxzQYybNvI3M8hMN%2F%2FEfnotL4O4%2ByhxcpswotZCSHVreway0t77AKYKRiqQ96%2Bvn4al%2FTQ46Geqb7y%2BrBAY3k75be3aBfTFg8x%2BcqgSBrIJTDGcwGNbEPVJmlQeQBkn%2FOzDkYPrLfyEaFrs4eNBvRO65Jnt7urhFM2m1hjngXbQoD%2FAJAkA%2F0964jEwbcSoLs%2B76KWfv7cHIxldgaMnMrCwUrbtH9JEkRWYs14xusOtCSulAvIkLCuOJS7iDPVTxxUaI%2FF92UF5KOA%2FiQdzHuC9rroRh67kR%2Bgtr3HQy3FEfl3z%2BDSVbR2uhwzjWoVIpagASAvVLouAmHIvCgf2T7aAZ18ZrrN3%2BsZI%2FVyrc5dEGKJJ68xop8qvhN8JkrzSzpa5rAHF4yknJyI2C%2BkZQr5dMWxLmYk8afO3AGkfAyqqZe1gkuzSzPpRyRUVnIIeZeFdIvVaATh1NqR5FWsBHkYWQuvRXb%2BUHTweaDUN5SsQ1ki3AbtB50HvgdB8Re5MgWjCQ3qbJ4rwcMxii9QDDe8ra%2FBjqkAWHzmtsiwX30lJEi%2BCIvaTt8LRVoEO5iLlAXg4fNIFm5v%2BfvIaIAfKpjNb5c%2F78rXMZr5cVO9dKRWSqKEEioMyMWwxyhqaI%2FC9adZAyIrlGyp8hFFj%2BwtEp21P1DD70iBc0c1o96qfj0AnXrjPCnFAiiNzyu50dMi1V5tmAeRG0lg8gM5O845FAjqWVagcRGDoszYVfxiGQQrcw9iOly7FeXxVJg&X-Amz-Signature=4a4d8d6e0401c1aaa8aaf4426ac2d16f1b869015eb91a79f1aa39003b6f941f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2YD42J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCHgDmKXxAUNrGO1fXBogPicss9nj9SLNLggwEULF4AYAIhAPFf3KdZfU7QzBMela%2B%2B69WhpH0bBlk%2FzEwVy0OVQ5JrKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNg5jpuRy3e2JjRvAq3AOEhKjeBsmlvKkF72UnMwUAYIXy%2FbcuG46AKb5nFwI3E6BloXPrg3uF%2Bn9HLyBHXEiFlRi%2FqTNQuhkj%2FhLnlCLZuEjNWGh%2FHbngFICE%2FRPbxzQYybNvI3M8hMN%2F%2FEfnotL4O4%2ByhxcpswotZCSHVreway0t77AKYKRiqQ96%2Bvn4al%2FTQ46Geqb7y%2BrBAY3k75be3aBfTFg8x%2BcqgSBrIJTDGcwGNbEPVJmlQeQBkn%2FOzDkYPrLfyEaFrs4eNBvRO65Jnt7urhFM2m1hjngXbQoD%2FAJAkA%2F0964jEwbcSoLs%2B76KWfv7cHIxldgaMnMrCwUrbtH9JEkRWYs14xusOtCSulAvIkLCuOJS7iDPVTxxUaI%2FF92UF5KOA%2FiQdzHuC9rroRh67kR%2Bgtr3HQy3FEfl3z%2BDSVbR2uhwzjWoVIpagASAvVLouAmHIvCgf2T7aAZ18ZrrN3%2BsZI%2FVyrc5dEGKJJ68xop8qvhN8JkrzSzpa5rAHF4yknJyI2C%2BkZQr5dMWxLmYk8afO3AGkfAyqqZe1gkuzSzPpRyRUVnIIeZeFdIvVaATh1NqR5FWsBHkYWQuvRXb%2BUHTweaDUN5SsQ1ki3AbtB50HvgdB8Re5MgWjCQ3qbJ4rwcMxii9QDDe8ra%2FBjqkAWHzmtsiwX30lJEi%2BCIvaTt8LRVoEO5iLlAXg4fNIFm5v%2BfvIaIAfKpjNb5c%2F78rXMZr5cVO9dKRWSqKEEioMyMWwxyhqaI%2FC9adZAyIrlGyp8hFFj%2BwtEp21P1DD70iBc0c1o96qfj0AnXrjPCnFAiiNzyu50dMi1V5tmAeRG0lg8gM5O845FAjqWVagcRGDoszYVfxiGQQrcw9iOly7FeXxVJg&X-Amz-Signature=7ef09c5d4ef617feb383e9daed082ad7ddef5b8fc7be6ec5f56d39a347fae7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2YD42J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCHgDmKXxAUNrGO1fXBogPicss9nj9SLNLggwEULF4AYAIhAPFf3KdZfU7QzBMela%2B%2B69WhpH0bBlk%2FzEwVy0OVQ5JrKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNg5jpuRy3e2JjRvAq3AOEhKjeBsmlvKkF72UnMwUAYIXy%2FbcuG46AKb5nFwI3E6BloXPrg3uF%2Bn9HLyBHXEiFlRi%2FqTNQuhkj%2FhLnlCLZuEjNWGh%2FHbngFICE%2FRPbxzQYybNvI3M8hMN%2F%2FEfnotL4O4%2ByhxcpswotZCSHVreway0t77AKYKRiqQ96%2Bvn4al%2FTQ46Geqb7y%2BrBAY3k75be3aBfTFg8x%2BcqgSBrIJTDGcwGNbEPVJmlQeQBkn%2FOzDkYPrLfyEaFrs4eNBvRO65Jnt7urhFM2m1hjngXbQoD%2FAJAkA%2F0964jEwbcSoLs%2B76KWfv7cHIxldgaMnMrCwUrbtH9JEkRWYs14xusOtCSulAvIkLCuOJS7iDPVTxxUaI%2FF92UF5KOA%2FiQdzHuC9rroRh67kR%2Bgtr3HQy3FEfl3z%2BDSVbR2uhwzjWoVIpagASAvVLouAmHIvCgf2T7aAZ18ZrrN3%2BsZI%2FVyrc5dEGKJJ68xop8qvhN8JkrzSzpa5rAHF4yknJyI2C%2BkZQr5dMWxLmYk8afO3AGkfAyqqZe1gkuzSzPpRyRUVnIIeZeFdIvVaATh1NqR5FWsBHkYWQuvRXb%2BUHTweaDUN5SsQ1ki3AbtB50HvgdB8Re5MgWjCQ3qbJ4rwcMxii9QDDe8ra%2FBjqkAWHzmtsiwX30lJEi%2BCIvaTt8LRVoEO5iLlAXg4fNIFm5v%2BfvIaIAfKpjNb5c%2F78rXMZr5cVO9dKRWSqKEEioMyMWwxyhqaI%2FC9adZAyIrlGyp8hFFj%2BwtEp21P1DD70iBc0c1o96qfj0AnXrjPCnFAiiNzyu50dMi1V5tmAeRG0lg8gM5O845FAjqWVagcRGDoszYVfxiGQQrcw9iOly7FeXxVJg&X-Amz-Signature=563e3b42cc99af0526dc829a02c2076da1f5843037eaf56c240502b78c17ec19&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2YD42J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCHgDmKXxAUNrGO1fXBogPicss9nj9SLNLggwEULF4AYAIhAPFf3KdZfU7QzBMela%2B%2B69WhpH0bBlk%2FzEwVy0OVQ5JrKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNg5jpuRy3e2JjRvAq3AOEhKjeBsmlvKkF72UnMwUAYIXy%2FbcuG46AKb5nFwI3E6BloXPrg3uF%2Bn9HLyBHXEiFlRi%2FqTNQuhkj%2FhLnlCLZuEjNWGh%2FHbngFICE%2FRPbxzQYybNvI3M8hMN%2F%2FEfnotL4O4%2ByhxcpswotZCSHVreway0t77AKYKRiqQ96%2Bvn4al%2FTQ46Geqb7y%2BrBAY3k75be3aBfTFg8x%2BcqgSBrIJTDGcwGNbEPVJmlQeQBkn%2FOzDkYPrLfyEaFrs4eNBvRO65Jnt7urhFM2m1hjngXbQoD%2FAJAkA%2F0964jEwbcSoLs%2B76KWfv7cHIxldgaMnMrCwUrbtH9JEkRWYs14xusOtCSulAvIkLCuOJS7iDPVTxxUaI%2FF92UF5KOA%2FiQdzHuC9rroRh67kR%2Bgtr3HQy3FEfl3z%2BDSVbR2uhwzjWoVIpagASAvVLouAmHIvCgf2T7aAZ18ZrrN3%2BsZI%2FVyrc5dEGKJJ68xop8qvhN8JkrzSzpa5rAHF4yknJyI2C%2BkZQr5dMWxLmYk8afO3AGkfAyqqZe1gkuzSzPpRyRUVnIIeZeFdIvVaATh1NqR5FWsBHkYWQuvRXb%2BUHTweaDUN5SsQ1ki3AbtB50HvgdB8Re5MgWjCQ3qbJ4rwcMxii9QDDe8ra%2FBjqkAWHzmtsiwX30lJEi%2BCIvaTt8LRVoEO5iLlAXg4fNIFm5v%2BfvIaIAfKpjNb5c%2F78rXMZr5cVO9dKRWSqKEEioMyMWwxyhqaI%2FC9adZAyIrlGyp8hFFj%2BwtEp21P1DD70iBc0c1o96qfj0AnXrjPCnFAiiNzyu50dMi1V5tmAeRG0lg8gM5O845FAjqWVagcRGDoszYVfxiGQQrcw9iOly7FeXxVJg&X-Amz-Signature=93e0011ea97c8e1472aada4a36b09190d9c433af7267b59d1228871630477750&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2YD42J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCHgDmKXxAUNrGO1fXBogPicss9nj9SLNLggwEULF4AYAIhAPFf3KdZfU7QzBMela%2B%2B69WhpH0bBlk%2FzEwVy0OVQ5JrKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNg5jpuRy3e2JjRvAq3AOEhKjeBsmlvKkF72UnMwUAYIXy%2FbcuG46AKb5nFwI3E6BloXPrg3uF%2Bn9HLyBHXEiFlRi%2FqTNQuhkj%2FhLnlCLZuEjNWGh%2FHbngFICE%2FRPbxzQYybNvI3M8hMN%2F%2FEfnotL4O4%2ByhxcpswotZCSHVreway0t77AKYKRiqQ96%2Bvn4al%2FTQ46Geqb7y%2BrBAY3k75be3aBfTFg8x%2BcqgSBrIJTDGcwGNbEPVJmlQeQBkn%2FOzDkYPrLfyEaFrs4eNBvRO65Jnt7urhFM2m1hjngXbQoD%2FAJAkA%2F0964jEwbcSoLs%2B76KWfv7cHIxldgaMnMrCwUrbtH9JEkRWYs14xusOtCSulAvIkLCuOJS7iDPVTxxUaI%2FF92UF5KOA%2FiQdzHuC9rroRh67kR%2Bgtr3HQy3FEfl3z%2BDSVbR2uhwzjWoVIpagASAvVLouAmHIvCgf2T7aAZ18ZrrN3%2BsZI%2FVyrc5dEGKJJ68xop8qvhN8JkrzSzpa5rAHF4yknJyI2C%2BkZQr5dMWxLmYk8afO3AGkfAyqqZe1gkuzSzPpRyRUVnIIeZeFdIvVaATh1NqR5FWsBHkYWQuvRXb%2BUHTweaDUN5SsQ1ki3AbtB50HvgdB8Re5MgWjCQ3qbJ4rwcMxii9QDDe8ra%2FBjqkAWHzmtsiwX30lJEi%2BCIvaTt8LRVoEO5iLlAXg4fNIFm5v%2BfvIaIAfKpjNb5c%2F78rXMZr5cVO9dKRWSqKEEioMyMWwxyhqaI%2FC9adZAyIrlGyp8hFFj%2BwtEp21P1DD70iBc0c1o96qfj0AnXrjPCnFAiiNzyu50dMi1V5tmAeRG0lg8gM5O845FAjqWVagcRGDoszYVfxiGQQrcw9iOly7FeXxVJg&X-Amz-Signature=320f6e71c70c27a784be53e97d9d484121bf58a788be5aeaf1f2b92949a02131&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2YD42J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCHgDmKXxAUNrGO1fXBogPicss9nj9SLNLggwEULF4AYAIhAPFf3KdZfU7QzBMela%2B%2B69WhpH0bBlk%2FzEwVy0OVQ5JrKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNg5jpuRy3e2JjRvAq3AOEhKjeBsmlvKkF72UnMwUAYIXy%2FbcuG46AKb5nFwI3E6BloXPrg3uF%2Bn9HLyBHXEiFlRi%2FqTNQuhkj%2FhLnlCLZuEjNWGh%2FHbngFICE%2FRPbxzQYybNvI3M8hMN%2F%2FEfnotL4O4%2ByhxcpswotZCSHVreway0t77AKYKRiqQ96%2Bvn4al%2FTQ46Geqb7y%2BrBAY3k75be3aBfTFg8x%2BcqgSBrIJTDGcwGNbEPVJmlQeQBkn%2FOzDkYPrLfyEaFrs4eNBvRO65Jnt7urhFM2m1hjngXbQoD%2FAJAkA%2F0964jEwbcSoLs%2B76KWfv7cHIxldgaMnMrCwUrbtH9JEkRWYs14xusOtCSulAvIkLCuOJS7iDPVTxxUaI%2FF92UF5KOA%2FiQdzHuC9rroRh67kR%2Bgtr3HQy3FEfl3z%2BDSVbR2uhwzjWoVIpagASAvVLouAmHIvCgf2T7aAZ18ZrrN3%2BsZI%2FVyrc5dEGKJJ68xop8qvhN8JkrzSzpa5rAHF4yknJyI2C%2BkZQr5dMWxLmYk8afO3AGkfAyqqZe1gkuzSzPpRyRUVnIIeZeFdIvVaATh1NqR5FWsBHkYWQuvRXb%2BUHTweaDUN5SsQ1ki3AbtB50HvgdB8Re5MgWjCQ3qbJ4rwcMxii9QDDe8ra%2FBjqkAWHzmtsiwX30lJEi%2BCIvaTt8LRVoEO5iLlAXg4fNIFm5v%2BfvIaIAfKpjNb5c%2F78rXMZr5cVO9dKRWSqKEEioMyMWwxyhqaI%2FC9adZAyIrlGyp8hFFj%2BwtEp21P1DD70iBc0c1o96qfj0AnXrjPCnFAiiNzyu50dMi1V5tmAeRG0lg8gM5O845FAjqWVagcRGDoszYVfxiGQQrcw9iOly7FeXxVJg&X-Amz-Signature=cd3be30a17793c777b3fc259382b26cabf26c2b2806d57732c7de0f7a6e9d2ca&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

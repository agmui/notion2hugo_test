---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP2LRGD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE%2BrEW3oxXQu%2FNIE9Mkov24vJTE21AZlA%2FMmC0wzBC0uAiEAlQwzrQLV9k6nM1danIbiGcKz5eRNde3Ldel%2BEgI7fNEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBsE%2Btvaex%2B8gUFpLircA6TuYqVtd2wIbaakjpwED0hLhwrwuUDa%2BHniVa2bKQ%2FdMWkNgIXmPt2pKHfqNUu8nCt74PSNuJUBZwSjFan3kpagkW4Afp5Vgd0rNlwiF8BfrCRMCgFsYdBM3Z0JfyzZki3z9iBTvN0HX2wcyJ%2FfRVA%2B606zzbY9X1biK9z7YJic57kMeoSq2UEUIJ2axebuqgKTkoabnk8%2BXxpToYaXSraXDy9cGN7LAJGRpsxjoygQJWAS2FfrXRJCyf0v6AAWe9jejhSq77ZLOLi1ZzqqVVP8Dy9xCbalpeU8r1JKY8HQMolgdLZCiUD2dF%2BV4%2BivG79WOHHfJ2lHaBOLzA2W8Vj8asIHXl8cUr4xRrpg7dq5HE%2FBZgk1zdHqMSwsrjCh%2BFibUrc9irPrKeRbEvw7cleE3e1Kp8%2BBuJYgOIahVsKpbr5Q8ojdi2Wgu9f0VuCMivkTQ1b89V4MmS7kMKIu12V4vmJjzZ9RkvVj%2FqPKpFbuES5KMAFofA7dHflbWUJamObWD0Nf5hOqMQcuI8MP81M%2B9VLRwZbx0QaRjTDiEKtWGhJRyC6kopHY8htGzj6AU5Rw6EefIU9lFGZBXpBUsdbZ%2FV3sMfEiK4S%2Bw3ipCpi%2FSrkzBc5Ex%2FDr%2FhfOMLS2iMQGOqUBKs7B3HGywwRJgHgEhR4WZPMnerx3jqh%2BeVvTGFwF4Yi4aSYZhYRHCZixMeD7c5l1nlAvqu4KAElc9VV8IQ%2FNmBraBkg%2FbaJYTCh%2B4Z%2F6EjIyQz1qJzFNFb4QrY2xg176LJ4EdoZXj%2FgGZMy7WuFIz61NhF1Wy8ezvp9MXQ0GQQtO7TZQkEbTfS53N%2FQMjyVddIGBIHWKR1QdF3RhmWxk6T1pJ%2BCt&X-Amz-Signature=0b0f3ef9c677d9b32b95e6f34a0eacb0bc0159de91bf20b400a4cef36854187d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP2LRGD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE%2BrEW3oxXQu%2FNIE9Mkov24vJTE21AZlA%2FMmC0wzBC0uAiEAlQwzrQLV9k6nM1danIbiGcKz5eRNde3Ldel%2BEgI7fNEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBsE%2Btvaex%2B8gUFpLircA6TuYqVtd2wIbaakjpwED0hLhwrwuUDa%2BHniVa2bKQ%2FdMWkNgIXmPt2pKHfqNUu8nCt74PSNuJUBZwSjFan3kpagkW4Afp5Vgd0rNlwiF8BfrCRMCgFsYdBM3Z0JfyzZki3z9iBTvN0HX2wcyJ%2FfRVA%2B606zzbY9X1biK9z7YJic57kMeoSq2UEUIJ2axebuqgKTkoabnk8%2BXxpToYaXSraXDy9cGN7LAJGRpsxjoygQJWAS2FfrXRJCyf0v6AAWe9jejhSq77ZLOLi1ZzqqVVP8Dy9xCbalpeU8r1JKY8HQMolgdLZCiUD2dF%2BV4%2BivG79WOHHfJ2lHaBOLzA2W8Vj8asIHXl8cUr4xRrpg7dq5HE%2FBZgk1zdHqMSwsrjCh%2BFibUrc9irPrKeRbEvw7cleE3e1Kp8%2BBuJYgOIahVsKpbr5Q8ojdi2Wgu9f0VuCMivkTQ1b89V4MmS7kMKIu12V4vmJjzZ9RkvVj%2FqPKpFbuES5KMAFofA7dHflbWUJamObWD0Nf5hOqMQcuI8MP81M%2B9VLRwZbx0QaRjTDiEKtWGhJRyC6kopHY8htGzj6AU5Rw6EefIU9lFGZBXpBUsdbZ%2FV3sMfEiK4S%2Bw3ipCpi%2FSrkzBc5Ex%2FDr%2FhfOMLS2iMQGOqUBKs7B3HGywwRJgHgEhR4WZPMnerx3jqh%2BeVvTGFwF4Yi4aSYZhYRHCZixMeD7c5l1nlAvqu4KAElc9VV8IQ%2FNmBraBkg%2FbaJYTCh%2B4Z%2F6EjIyQz1qJzFNFb4QrY2xg176LJ4EdoZXj%2FgGZMy7WuFIz61NhF1Wy8ezvp9MXQ0GQQtO7TZQkEbTfS53N%2FQMjyVddIGBIHWKR1QdF3RhmWxk6T1pJ%2BCt&X-Amz-Signature=abbd2cf90e8d99c1545aab2c53effd40eb01af25fda041d5117518b0222beed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP2LRGD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE%2BrEW3oxXQu%2FNIE9Mkov24vJTE21AZlA%2FMmC0wzBC0uAiEAlQwzrQLV9k6nM1danIbiGcKz5eRNde3Ldel%2BEgI7fNEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBsE%2Btvaex%2B8gUFpLircA6TuYqVtd2wIbaakjpwED0hLhwrwuUDa%2BHniVa2bKQ%2FdMWkNgIXmPt2pKHfqNUu8nCt74PSNuJUBZwSjFan3kpagkW4Afp5Vgd0rNlwiF8BfrCRMCgFsYdBM3Z0JfyzZki3z9iBTvN0HX2wcyJ%2FfRVA%2B606zzbY9X1biK9z7YJic57kMeoSq2UEUIJ2axebuqgKTkoabnk8%2BXxpToYaXSraXDy9cGN7LAJGRpsxjoygQJWAS2FfrXRJCyf0v6AAWe9jejhSq77ZLOLi1ZzqqVVP8Dy9xCbalpeU8r1JKY8HQMolgdLZCiUD2dF%2BV4%2BivG79WOHHfJ2lHaBOLzA2W8Vj8asIHXl8cUr4xRrpg7dq5HE%2FBZgk1zdHqMSwsrjCh%2BFibUrc9irPrKeRbEvw7cleE3e1Kp8%2BBuJYgOIahVsKpbr5Q8ojdi2Wgu9f0VuCMivkTQ1b89V4MmS7kMKIu12V4vmJjzZ9RkvVj%2FqPKpFbuES5KMAFofA7dHflbWUJamObWD0Nf5hOqMQcuI8MP81M%2B9VLRwZbx0QaRjTDiEKtWGhJRyC6kopHY8htGzj6AU5Rw6EefIU9lFGZBXpBUsdbZ%2FV3sMfEiK4S%2Bw3ipCpi%2FSrkzBc5Ex%2FDr%2FhfOMLS2iMQGOqUBKs7B3HGywwRJgHgEhR4WZPMnerx3jqh%2BeVvTGFwF4Yi4aSYZhYRHCZixMeD7c5l1nlAvqu4KAElc9VV8IQ%2FNmBraBkg%2FbaJYTCh%2B4Z%2F6EjIyQz1qJzFNFb4QrY2xg176LJ4EdoZXj%2FgGZMy7WuFIz61NhF1Wy8ezvp9MXQ0GQQtO7TZQkEbTfS53N%2FQMjyVddIGBIHWKR1QdF3RhmWxk6T1pJ%2BCt&X-Amz-Signature=a346a57d010a50ead74d2487f9395ea18b866816b2ce35e04730e19fc5085ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP2LRGD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE%2BrEW3oxXQu%2FNIE9Mkov24vJTE21AZlA%2FMmC0wzBC0uAiEAlQwzrQLV9k6nM1danIbiGcKz5eRNde3Ldel%2BEgI7fNEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBsE%2Btvaex%2B8gUFpLircA6TuYqVtd2wIbaakjpwED0hLhwrwuUDa%2BHniVa2bKQ%2FdMWkNgIXmPt2pKHfqNUu8nCt74PSNuJUBZwSjFan3kpagkW4Afp5Vgd0rNlwiF8BfrCRMCgFsYdBM3Z0JfyzZki3z9iBTvN0HX2wcyJ%2FfRVA%2B606zzbY9X1biK9z7YJic57kMeoSq2UEUIJ2axebuqgKTkoabnk8%2BXxpToYaXSraXDy9cGN7LAJGRpsxjoygQJWAS2FfrXRJCyf0v6AAWe9jejhSq77ZLOLi1ZzqqVVP8Dy9xCbalpeU8r1JKY8HQMolgdLZCiUD2dF%2BV4%2BivG79WOHHfJ2lHaBOLzA2W8Vj8asIHXl8cUr4xRrpg7dq5HE%2FBZgk1zdHqMSwsrjCh%2BFibUrc9irPrKeRbEvw7cleE3e1Kp8%2BBuJYgOIahVsKpbr5Q8ojdi2Wgu9f0VuCMivkTQ1b89V4MmS7kMKIu12V4vmJjzZ9RkvVj%2FqPKpFbuES5KMAFofA7dHflbWUJamObWD0Nf5hOqMQcuI8MP81M%2B9VLRwZbx0QaRjTDiEKtWGhJRyC6kopHY8htGzj6AU5Rw6EefIU9lFGZBXpBUsdbZ%2FV3sMfEiK4S%2Bw3ipCpi%2FSrkzBc5Ex%2FDr%2FhfOMLS2iMQGOqUBKs7B3HGywwRJgHgEhR4WZPMnerx3jqh%2BeVvTGFwF4Yi4aSYZhYRHCZixMeD7c5l1nlAvqu4KAElc9VV8IQ%2FNmBraBkg%2FbaJYTCh%2B4Z%2F6EjIyQz1qJzFNFb4QrY2xg176LJ4EdoZXj%2FgGZMy7WuFIz61NhF1Wy8ezvp9MXQ0GQQtO7TZQkEbTfS53N%2FQMjyVddIGBIHWKR1QdF3RhmWxk6T1pJ%2BCt&X-Amz-Signature=d93d5f3202d03e2ec0ba9c4a6ae42019703b7715742868692870e26068b937f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP2LRGD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE%2BrEW3oxXQu%2FNIE9Mkov24vJTE21AZlA%2FMmC0wzBC0uAiEAlQwzrQLV9k6nM1danIbiGcKz5eRNde3Ldel%2BEgI7fNEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBsE%2Btvaex%2B8gUFpLircA6TuYqVtd2wIbaakjpwED0hLhwrwuUDa%2BHniVa2bKQ%2FdMWkNgIXmPt2pKHfqNUu8nCt74PSNuJUBZwSjFan3kpagkW4Afp5Vgd0rNlwiF8BfrCRMCgFsYdBM3Z0JfyzZki3z9iBTvN0HX2wcyJ%2FfRVA%2B606zzbY9X1biK9z7YJic57kMeoSq2UEUIJ2axebuqgKTkoabnk8%2BXxpToYaXSraXDy9cGN7LAJGRpsxjoygQJWAS2FfrXRJCyf0v6AAWe9jejhSq77ZLOLi1ZzqqVVP8Dy9xCbalpeU8r1JKY8HQMolgdLZCiUD2dF%2BV4%2BivG79WOHHfJ2lHaBOLzA2W8Vj8asIHXl8cUr4xRrpg7dq5HE%2FBZgk1zdHqMSwsrjCh%2BFibUrc9irPrKeRbEvw7cleE3e1Kp8%2BBuJYgOIahVsKpbr5Q8ojdi2Wgu9f0VuCMivkTQ1b89V4MmS7kMKIu12V4vmJjzZ9RkvVj%2FqPKpFbuES5KMAFofA7dHflbWUJamObWD0Nf5hOqMQcuI8MP81M%2B9VLRwZbx0QaRjTDiEKtWGhJRyC6kopHY8htGzj6AU5Rw6EefIU9lFGZBXpBUsdbZ%2FV3sMfEiK4S%2Bw3ipCpi%2FSrkzBc5Ex%2FDr%2FhfOMLS2iMQGOqUBKs7B3HGywwRJgHgEhR4WZPMnerx3jqh%2BeVvTGFwF4Yi4aSYZhYRHCZixMeD7c5l1nlAvqu4KAElc9VV8IQ%2FNmBraBkg%2FbaJYTCh%2B4Z%2F6EjIyQz1qJzFNFb4QrY2xg176LJ4EdoZXj%2FgGZMy7WuFIz61NhF1Wy8ezvp9MXQ0GQQtO7TZQkEbTfS53N%2FQMjyVddIGBIHWKR1QdF3RhmWxk6T1pJ%2BCt&X-Amz-Signature=299815a272e4086ec94c4c7f0c8f966be61791f663cffd8436ae4b15c80244b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP2LRGD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE%2BrEW3oxXQu%2FNIE9Mkov24vJTE21AZlA%2FMmC0wzBC0uAiEAlQwzrQLV9k6nM1danIbiGcKz5eRNde3Ldel%2BEgI7fNEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBsE%2Btvaex%2B8gUFpLircA6TuYqVtd2wIbaakjpwED0hLhwrwuUDa%2BHniVa2bKQ%2FdMWkNgIXmPt2pKHfqNUu8nCt74PSNuJUBZwSjFan3kpagkW4Afp5Vgd0rNlwiF8BfrCRMCgFsYdBM3Z0JfyzZki3z9iBTvN0HX2wcyJ%2FfRVA%2B606zzbY9X1biK9z7YJic57kMeoSq2UEUIJ2axebuqgKTkoabnk8%2BXxpToYaXSraXDy9cGN7LAJGRpsxjoygQJWAS2FfrXRJCyf0v6AAWe9jejhSq77ZLOLi1ZzqqVVP8Dy9xCbalpeU8r1JKY8HQMolgdLZCiUD2dF%2BV4%2BivG79WOHHfJ2lHaBOLzA2W8Vj8asIHXl8cUr4xRrpg7dq5HE%2FBZgk1zdHqMSwsrjCh%2BFibUrc9irPrKeRbEvw7cleE3e1Kp8%2BBuJYgOIahVsKpbr5Q8ojdi2Wgu9f0VuCMivkTQ1b89V4MmS7kMKIu12V4vmJjzZ9RkvVj%2FqPKpFbuES5KMAFofA7dHflbWUJamObWD0Nf5hOqMQcuI8MP81M%2B9VLRwZbx0QaRjTDiEKtWGhJRyC6kopHY8htGzj6AU5Rw6EefIU9lFGZBXpBUsdbZ%2FV3sMfEiK4S%2Bw3ipCpi%2FSrkzBc5Ex%2FDr%2FhfOMLS2iMQGOqUBKs7B3HGywwRJgHgEhR4WZPMnerx3jqh%2BeVvTGFwF4Yi4aSYZhYRHCZixMeD7c5l1nlAvqu4KAElc9VV8IQ%2FNmBraBkg%2FbaJYTCh%2B4Z%2F6EjIyQz1qJzFNFb4QrY2xg176LJ4EdoZXj%2FgGZMy7WuFIz61NhF1Wy8ezvp9MXQ0GQQtO7TZQkEbTfS53N%2FQMjyVddIGBIHWKR1QdF3RhmWxk6T1pJ%2BCt&X-Amz-Signature=892f120c7b131cda79f927b24d29faa0acc3295c04018bcd745207023241c0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZP2LRGD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIE%2BrEW3oxXQu%2FNIE9Mkov24vJTE21AZlA%2FMmC0wzBC0uAiEAlQwzrQLV9k6nM1danIbiGcKz5eRNde3Ldel%2BEgI7fNEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBsE%2Btvaex%2B8gUFpLircA6TuYqVtd2wIbaakjpwED0hLhwrwuUDa%2BHniVa2bKQ%2FdMWkNgIXmPt2pKHfqNUu8nCt74PSNuJUBZwSjFan3kpagkW4Afp5Vgd0rNlwiF8BfrCRMCgFsYdBM3Z0JfyzZki3z9iBTvN0HX2wcyJ%2FfRVA%2B606zzbY9X1biK9z7YJic57kMeoSq2UEUIJ2axebuqgKTkoabnk8%2BXxpToYaXSraXDy9cGN7LAJGRpsxjoygQJWAS2FfrXRJCyf0v6AAWe9jejhSq77ZLOLi1ZzqqVVP8Dy9xCbalpeU8r1JKY8HQMolgdLZCiUD2dF%2BV4%2BivG79WOHHfJ2lHaBOLzA2W8Vj8asIHXl8cUr4xRrpg7dq5HE%2FBZgk1zdHqMSwsrjCh%2BFibUrc9irPrKeRbEvw7cleE3e1Kp8%2BBuJYgOIahVsKpbr5Q8ojdi2Wgu9f0VuCMivkTQ1b89V4MmS7kMKIu12V4vmJjzZ9RkvVj%2FqPKpFbuES5KMAFofA7dHflbWUJamObWD0Nf5hOqMQcuI8MP81M%2B9VLRwZbx0QaRjTDiEKtWGhJRyC6kopHY8htGzj6AU5Rw6EefIU9lFGZBXpBUsdbZ%2FV3sMfEiK4S%2Bw3ipCpi%2FSrkzBc5Ex%2FDr%2FhfOMLS2iMQGOqUBKs7B3HGywwRJgHgEhR4WZPMnerx3jqh%2BeVvTGFwF4Yi4aSYZhYRHCZixMeD7c5l1nlAvqu4KAElc9VV8IQ%2FNmBraBkg%2FbaJYTCh%2B4Z%2F6EjIyQz1qJzFNFb4QrY2xg176LJ4EdoZXj%2FgGZMy7WuFIz61NhF1Wy8ezvp9MXQ0GQQtO7TZQkEbTfS53N%2FQMjyVddIGBIHWKR1QdF3RhmWxk6T1pJ%2BCt&X-Amz-Signature=2a89ca26f8aa48a74ea3882cb1c0632ff35cd7e28234ac4869b164cc129657aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

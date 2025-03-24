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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XXOEOO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS9aMNXthC6GrPw6%2FvvmUaRB65JtaAACbx%2Bh%2BoQHoA%2FAiAYnAsjb8NheQHScUgJ90ZUVJc7qVDBYFtDJa50w8dXNyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBN2T2mfuYpy8RGxKtwDclyW%2Bmvi7UggzIdt9JD%2FrKIV%2BNFDylBZn3q7h397y5KKSS%2FIh%2FEfX0Oixckhz3WGJuUjV1WNKorIVfXtuknubKrET%2BDoX2Tv8bPKr5yvUZjq92ENZLIHtc%2F4l0SVcaPEa7Q58gOWaMMF%2BazvIj0hjzcK9pJ9rUOqvH%2Bbd5dKqnlI8KK7uS87OQWdELvkolZ1uIc%2FX2ZnNJZfi4CmUwgSrFY9gzjveu8Hxt8pPpbNa4y2cfoLUPnH74tapx9mWpzIB8z1PvKysMK7aZqleXnfD2qG9XJWLu5%2BN6ugyUYfCc9OYRuwIqg8%2BEGg6QeH7T6H3VzC%2FYGsUTQyvPE5FqtUSaXLKa41SOFu2rvO%2FoR82YqsNDFbtpSOD7aTmjbqdyE8yfLIBc14f%2FgD%2FBPsXozeWuylv3dyGyfngXllgso411BDXFpPwUfe3tBA%2FwJEC2hjJUo69T40ectPrDHwaSoQwRM7hDe5G8qsapVdVuDpgpGCOgu6jZHCftSK%2FDd799%2B%2BAFrv92JIpsTPKOY5wQgh7mdpw2JcJnqLJraVzeTPUf01lU9ZT%2FvN0PcIp9KPiRpTPJHPYpUIqPbYZeWHThNMgha84aT9fypQFCyienqPJz22B4Tug%2Fi%2BXK3%2BTfYwiP6FvwY6pgHoDqUvDgFWR7drC0RJaORsWPAndDQCCkLWDM%2BC0dkD%2B1RuWm4l8uwItUbO8n%2BCSBTY2OB2508frslVcah6EY7h5hw2cSfethBlQSDI4UlE%2F4gLbMSx0XUvpDlWJqJND%2Bb7RyYeTi5MhBOgQnhCbY01krOu6SFJFL8mFjsWI0hrKzoYMvYOMTNAzjwFy9FtttvGLWFEt0jdlPFWQOzJ%2F%2FmmipHd9IRN&X-Amz-Signature=5fd779f407af228ae68088dca0b5e5bc91fac51b1ba7d08e24c8ef3937583126&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XXOEOO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS9aMNXthC6GrPw6%2FvvmUaRB65JtaAACbx%2Bh%2BoQHoA%2FAiAYnAsjb8NheQHScUgJ90ZUVJc7qVDBYFtDJa50w8dXNyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBN2T2mfuYpy8RGxKtwDclyW%2Bmvi7UggzIdt9JD%2FrKIV%2BNFDylBZn3q7h397y5KKSS%2FIh%2FEfX0Oixckhz3WGJuUjV1WNKorIVfXtuknubKrET%2BDoX2Tv8bPKr5yvUZjq92ENZLIHtc%2F4l0SVcaPEa7Q58gOWaMMF%2BazvIj0hjzcK9pJ9rUOqvH%2Bbd5dKqnlI8KK7uS87OQWdELvkolZ1uIc%2FX2ZnNJZfi4CmUwgSrFY9gzjveu8Hxt8pPpbNa4y2cfoLUPnH74tapx9mWpzIB8z1PvKysMK7aZqleXnfD2qG9XJWLu5%2BN6ugyUYfCc9OYRuwIqg8%2BEGg6QeH7T6H3VzC%2FYGsUTQyvPE5FqtUSaXLKa41SOFu2rvO%2FoR82YqsNDFbtpSOD7aTmjbqdyE8yfLIBc14f%2FgD%2FBPsXozeWuylv3dyGyfngXllgso411BDXFpPwUfe3tBA%2FwJEC2hjJUo69T40ectPrDHwaSoQwRM7hDe5G8qsapVdVuDpgpGCOgu6jZHCftSK%2FDd799%2B%2BAFrv92JIpsTPKOY5wQgh7mdpw2JcJnqLJraVzeTPUf01lU9ZT%2FvN0PcIp9KPiRpTPJHPYpUIqPbYZeWHThNMgha84aT9fypQFCyienqPJz22B4Tug%2Fi%2BXK3%2BTfYwiP6FvwY6pgHoDqUvDgFWR7drC0RJaORsWPAndDQCCkLWDM%2BC0dkD%2B1RuWm4l8uwItUbO8n%2BCSBTY2OB2508frslVcah6EY7h5hw2cSfethBlQSDI4UlE%2F4gLbMSx0XUvpDlWJqJND%2Bb7RyYeTi5MhBOgQnhCbY01krOu6SFJFL8mFjsWI0hrKzoYMvYOMTNAzjwFy9FtttvGLWFEt0jdlPFWQOzJ%2F%2FmmipHd9IRN&X-Amz-Signature=c0910afe044aa4946da13f08ddb03eb06ebc0737a62e71f58bfef32a26ac5d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XXOEOO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS9aMNXthC6GrPw6%2FvvmUaRB65JtaAACbx%2Bh%2BoQHoA%2FAiAYnAsjb8NheQHScUgJ90ZUVJc7qVDBYFtDJa50w8dXNyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBN2T2mfuYpy8RGxKtwDclyW%2Bmvi7UggzIdt9JD%2FrKIV%2BNFDylBZn3q7h397y5KKSS%2FIh%2FEfX0Oixckhz3WGJuUjV1WNKorIVfXtuknubKrET%2BDoX2Tv8bPKr5yvUZjq92ENZLIHtc%2F4l0SVcaPEa7Q58gOWaMMF%2BazvIj0hjzcK9pJ9rUOqvH%2Bbd5dKqnlI8KK7uS87OQWdELvkolZ1uIc%2FX2ZnNJZfi4CmUwgSrFY9gzjveu8Hxt8pPpbNa4y2cfoLUPnH74tapx9mWpzIB8z1PvKysMK7aZqleXnfD2qG9XJWLu5%2BN6ugyUYfCc9OYRuwIqg8%2BEGg6QeH7T6H3VzC%2FYGsUTQyvPE5FqtUSaXLKa41SOFu2rvO%2FoR82YqsNDFbtpSOD7aTmjbqdyE8yfLIBc14f%2FgD%2FBPsXozeWuylv3dyGyfngXllgso411BDXFpPwUfe3tBA%2FwJEC2hjJUo69T40ectPrDHwaSoQwRM7hDe5G8qsapVdVuDpgpGCOgu6jZHCftSK%2FDd799%2B%2BAFrv92JIpsTPKOY5wQgh7mdpw2JcJnqLJraVzeTPUf01lU9ZT%2FvN0PcIp9KPiRpTPJHPYpUIqPbYZeWHThNMgha84aT9fypQFCyienqPJz22B4Tug%2Fi%2BXK3%2BTfYwiP6FvwY6pgHoDqUvDgFWR7drC0RJaORsWPAndDQCCkLWDM%2BC0dkD%2B1RuWm4l8uwItUbO8n%2BCSBTY2OB2508frslVcah6EY7h5hw2cSfethBlQSDI4UlE%2F4gLbMSx0XUvpDlWJqJND%2Bb7RyYeTi5MhBOgQnhCbY01krOu6SFJFL8mFjsWI0hrKzoYMvYOMTNAzjwFy9FtttvGLWFEt0jdlPFWQOzJ%2F%2FmmipHd9IRN&X-Amz-Signature=e6c6ce8d047fef68d6471a616820cebc63ab73542aa780b41e577bc20e4df3df&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XXOEOO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS9aMNXthC6GrPw6%2FvvmUaRB65JtaAACbx%2Bh%2BoQHoA%2FAiAYnAsjb8NheQHScUgJ90ZUVJc7qVDBYFtDJa50w8dXNyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBN2T2mfuYpy8RGxKtwDclyW%2Bmvi7UggzIdt9JD%2FrKIV%2BNFDylBZn3q7h397y5KKSS%2FIh%2FEfX0Oixckhz3WGJuUjV1WNKorIVfXtuknubKrET%2BDoX2Tv8bPKr5yvUZjq92ENZLIHtc%2F4l0SVcaPEa7Q58gOWaMMF%2BazvIj0hjzcK9pJ9rUOqvH%2Bbd5dKqnlI8KK7uS87OQWdELvkolZ1uIc%2FX2ZnNJZfi4CmUwgSrFY9gzjveu8Hxt8pPpbNa4y2cfoLUPnH74tapx9mWpzIB8z1PvKysMK7aZqleXnfD2qG9XJWLu5%2BN6ugyUYfCc9OYRuwIqg8%2BEGg6QeH7T6H3VzC%2FYGsUTQyvPE5FqtUSaXLKa41SOFu2rvO%2FoR82YqsNDFbtpSOD7aTmjbqdyE8yfLIBc14f%2FgD%2FBPsXozeWuylv3dyGyfngXllgso411BDXFpPwUfe3tBA%2FwJEC2hjJUo69T40ectPrDHwaSoQwRM7hDe5G8qsapVdVuDpgpGCOgu6jZHCftSK%2FDd799%2B%2BAFrv92JIpsTPKOY5wQgh7mdpw2JcJnqLJraVzeTPUf01lU9ZT%2FvN0PcIp9KPiRpTPJHPYpUIqPbYZeWHThNMgha84aT9fypQFCyienqPJz22B4Tug%2Fi%2BXK3%2BTfYwiP6FvwY6pgHoDqUvDgFWR7drC0RJaORsWPAndDQCCkLWDM%2BC0dkD%2B1RuWm4l8uwItUbO8n%2BCSBTY2OB2508frslVcah6EY7h5hw2cSfethBlQSDI4UlE%2F4gLbMSx0XUvpDlWJqJND%2Bb7RyYeTi5MhBOgQnhCbY01krOu6SFJFL8mFjsWI0hrKzoYMvYOMTNAzjwFy9FtttvGLWFEt0jdlPFWQOzJ%2F%2FmmipHd9IRN&X-Amz-Signature=89d8247dace39ca5b2e30fad4847afb55ac19cf522bd0281a23e50effd3e6251&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XXOEOO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS9aMNXthC6GrPw6%2FvvmUaRB65JtaAACbx%2Bh%2BoQHoA%2FAiAYnAsjb8NheQHScUgJ90ZUVJc7qVDBYFtDJa50w8dXNyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBN2T2mfuYpy8RGxKtwDclyW%2Bmvi7UggzIdt9JD%2FrKIV%2BNFDylBZn3q7h397y5KKSS%2FIh%2FEfX0Oixckhz3WGJuUjV1WNKorIVfXtuknubKrET%2BDoX2Tv8bPKr5yvUZjq92ENZLIHtc%2F4l0SVcaPEa7Q58gOWaMMF%2BazvIj0hjzcK9pJ9rUOqvH%2Bbd5dKqnlI8KK7uS87OQWdELvkolZ1uIc%2FX2ZnNJZfi4CmUwgSrFY9gzjveu8Hxt8pPpbNa4y2cfoLUPnH74tapx9mWpzIB8z1PvKysMK7aZqleXnfD2qG9XJWLu5%2BN6ugyUYfCc9OYRuwIqg8%2BEGg6QeH7T6H3VzC%2FYGsUTQyvPE5FqtUSaXLKa41SOFu2rvO%2FoR82YqsNDFbtpSOD7aTmjbqdyE8yfLIBc14f%2FgD%2FBPsXozeWuylv3dyGyfngXllgso411BDXFpPwUfe3tBA%2FwJEC2hjJUo69T40ectPrDHwaSoQwRM7hDe5G8qsapVdVuDpgpGCOgu6jZHCftSK%2FDd799%2B%2BAFrv92JIpsTPKOY5wQgh7mdpw2JcJnqLJraVzeTPUf01lU9ZT%2FvN0PcIp9KPiRpTPJHPYpUIqPbYZeWHThNMgha84aT9fypQFCyienqPJz22B4Tug%2Fi%2BXK3%2BTfYwiP6FvwY6pgHoDqUvDgFWR7drC0RJaORsWPAndDQCCkLWDM%2BC0dkD%2B1RuWm4l8uwItUbO8n%2BCSBTY2OB2508frslVcah6EY7h5hw2cSfethBlQSDI4UlE%2F4gLbMSx0XUvpDlWJqJND%2Bb7RyYeTi5MhBOgQnhCbY01krOu6SFJFL8mFjsWI0hrKzoYMvYOMTNAzjwFy9FtttvGLWFEt0jdlPFWQOzJ%2F%2FmmipHd9IRN&X-Amz-Signature=45016d063f8c7e085cb04af7e7eb572d7cb6d1fe30d6669d122d0efce6b6eb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XXOEOO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS9aMNXthC6GrPw6%2FvvmUaRB65JtaAACbx%2Bh%2BoQHoA%2FAiAYnAsjb8NheQHScUgJ90ZUVJc7qVDBYFtDJa50w8dXNyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBN2T2mfuYpy8RGxKtwDclyW%2Bmvi7UggzIdt9JD%2FrKIV%2BNFDylBZn3q7h397y5KKSS%2FIh%2FEfX0Oixckhz3WGJuUjV1WNKorIVfXtuknubKrET%2BDoX2Tv8bPKr5yvUZjq92ENZLIHtc%2F4l0SVcaPEa7Q58gOWaMMF%2BazvIj0hjzcK9pJ9rUOqvH%2Bbd5dKqnlI8KK7uS87OQWdELvkolZ1uIc%2FX2ZnNJZfi4CmUwgSrFY9gzjveu8Hxt8pPpbNa4y2cfoLUPnH74tapx9mWpzIB8z1PvKysMK7aZqleXnfD2qG9XJWLu5%2BN6ugyUYfCc9OYRuwIqg8%2BEGg6QeH7T6H3VzC%2FYGsUTQyvPE5FqtUSaXLKa41SOFu2rvO%2FoR82YqsNDFbtpSOD7aTmjbqdyE8yfLIBc14f%2FgD%2FBPsXozeWuylv3dyGyfngXllgso411BDXFpPwUfe3tBA%2FwJEC2hjJUo69T40ectPrDHwaSoQwRM7hDe5G8qsapVdVuDpgpGCOgu6jZHCftSK%2FDd799%2B%2BAFrv92JIpsTPKOY5wQgh7mdpw2JcJnqLJraVzeTPUf01lU9ZT%2FvN0PcIp9KPiRpTPJHPYpUIqPbYZeWHThNMgha84aT9fypQFCyienqPJz22B4Tug%2Fi%2BXK3%2BTfYwiP6FvwY6pgHoDqUvDgFWR7drC0RJaORsWPAndDQCCkLWDM%2BC0dkD%2B1RuWm4l8uwItUbO8n%2BCSBTY2OB2508frslVcah6EY7h5hw2cSfethBlQSDI4UlE%2F4gLbMSx0XUvpDlWJqJND%2Bb7RyYeTi5MhBOgQnhCbY01krOu6SFJFL8mFjsWI0hrKzoYMvYOMTNAzjwFy9FtttvGLWFEt0jdlPFWQOzJ%2F%2FmmipHd9IRN&X-Amz-Signature=bf1b235f767170d9adda1650a345789699cd19d6df7d02ee27376063a4b9b3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XXOEOO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS9aMNXthC6GrPw6%2FvvmUaRB65JtaAACbx%2Bh%2BoQHoA%2FAiAYnAsjb8NheQHScUgJ90ZUVJc7qVDBYFtDJa50w8dXNyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBN2T2mfuYpy8RGxKtwDclyW%2Bmvi7UggzIdt9JD%2FrKIV%2BNFDylBZn3q7h397y5KKSS%2FIh%2FEfX0Oixckhz3WGJuUjV1WNKorIVfXtuknubKrET%2BDoX2Tv8bPKr5yvUZjq92ENZLIHtc%2F4l0SVcaPEa7Q58gOWaMMF%2BazvIj0hjzcK9pJ9rUOqvH%2Bbd5dKqnlI8KK7uS87OQWdELvkolZ1uIc%2FX2ZnNJZfi4CmUwgSrFY9gzjveu8Hxt8pPpbNa4y2cfoLUPnH74tapx9mWpzIB8z1PvKysMK7aZqleXnfD2qG9XJWLu5%2BN6ugyUYfCc9OYRuwIqg8%2BEGg6QeH7T6H3VzC%2FYGsUTQyvPE5FqtUSaXLKa41SOFu2rvO%2FoR82YqsNDFbtpSOD7aTmjbqdyE8yfLIBc14f%2FgD%2FBPsXozeWuylv3dyGyfngXllgso411BDXFpPwUfe3tBA%2FwJEC2hjJUo69T40ectPrDHwaSoQwRM7hDe5G8qsapVdVuDpgpGCOgu6jZHCftSK%2FDd799%2B%2BAFrv92JIpsTPKOY5wQgh7mdpw2JcJnqLJraVzeTPUf01lU9ZT%2FvN0PcIp9KPiRpTPJHPYpUIqPbYZeWHThNMgha84aT9fypQFCyienqPJz22B4Tug%2Fi%2BXK3%2BTfYwiP6FvwY6pgHoDqUvDgFWR7drC0RJaORsWPAndDQCCkLWDM%2BC0dkD%2B1RuWm4l8uwItUbO8n%2BCSBTY2OB2508frslVcah6EY7h5hw2cSfethBlQSDI4UlE%2F4gLbMSx0XUvpDlWJqJND%2Bb7RyYeTi5MhBOgQnhCbY01krOu6SFJFL8mFjsWI0hrKzoYMvYOMTNAzjwFy9FtttvGLWFEt0jdlPFWQOzJ%2F%2FmmipHd9IRN&X-Amz-Signature=0a953450643cf82498d8592ad6ac8fe96bf2602cd8e9f3af4406ba609edfe8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

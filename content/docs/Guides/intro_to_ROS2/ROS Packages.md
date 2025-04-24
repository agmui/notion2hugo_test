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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4EUUDW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICHGsXhBXvZn7Gs3E6O6N%2B%2ByIUapLUtYLbks9eJ9LN5QAiBBsGdn3KzxrZuhTWWshI3Z%2B3BE2xZis4UQee3aterNICr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMY4GyNRFhkVRz4jyGKtwDA%2FzR5KcIWOVAigH4D8mkA%2BFFxBBugYw3Kpa0y3x%2FIniooIEdlhELDABcC6G2Gt1DDHI6H2hg5fXK%2F6UwqvLoYvKc5HrPpvUzoFKhSfvwBFSUorzV8VnzXvUFRpbXZ7%2BkILEtQSagfnDkjvrzvo3nx46MFSw%2FCZFKolJ0UdqEdcRt2Wb2f9D6yxjDffoQsRfmLJWUdgV35%2FE6dCPuYOMuPAmzEP7jfb16ek6h4wSTHX9rjNNqcz3Z2Gup0UIFZqulgRFxy7fu7wcIwtfANK3aIAt5%2F9oq%2FeI4R2I%2B%2BuVynHVGqb%2FLLlDE7dvM8y2znU3r0zNFMnDc07qUQj28AuhLaX6iQGCbRUdHYlh4qtxnO%2FLz0i7FyklYCw84ps5e9O59vjQoJqqrEzhFiGZh7pP7u7xqoVRy4Lpj7uXwSauDgNn9kOb5P1MTVvbmuCm0iVs1Z1LJ3UI1cUoiZicKef5rb9Avd6Si%2FL0HngJs%2Fd6jURJgvncsvJnotbrf5oPXJOWmWGcD3kPf6f5otf0IUJ53dbfMZZcwazdbjKoraY8rnnh%2B2lGAl0IrxSb9i5%2Bbn%2BwY0V%2FTB05v%2FQqz8q97kWxCPinbi%2FHR9JTcfnNbfxn817Rx8ZWSEE4K40DNbqowqoWpwAY6pgFPFFGoYTDF9eS6SSgpYVFXFW8xwQkgY4boW%2Be08jwo%2FkPk9ZFnOObfZqBpkIkU0FeBVKdoxqqUip1rBoJmbpRFr1%2BdxAa66JUO68cuJn8YD8bKmbBl87L%2BMq4iPoi0wtrMVX4zD85vqpuFQvJgRmmqpZT2RltJCAFr9bcGFRPQKSRJCAgHv1v8SXLetYPzADBAhFeAHPhYgb7sP6e3%2Bqm%2Fi2CJCNKN&X-Amz-Signature=e4ddb0e76fe00b0ef5b174d9c454c3ca99073141c5185077117e6f85458cda92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4EUUDW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICHGsXhBXvZn7Gs3E6O6N%2B%2ByIUapLUtYLbks9eJ9LN5QAiBBsGdn3KzxrZuhTWWshI3Z%2B3BE2xZis4UQee3aterNICr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMY4GyNRFhkVRz4jyGKtwDA%2FzR5KcIWOVAigH4D8mkA%2BFFxBBugYw3Kpa0y3x%2FIniooIEdlhELDABcC6G2Gt1DDHI6H2hg5fXK%2F6UwqvLoYvKc5HrPpvUzoFKhSfvwBFSUorzV8VnzXvUFRpbXZ7%2BkILEtQSagfnDkjvrzvo3nx46MFSw%2FCZFKolJ0UdqEdcRt2Wb2f9D6yxjDffoQsRfmLJWUdgV35%2FE6dCPuYOMuPAmzEP7jfb16ek6h4wSTHX9rjNNqcz3Z2Gup0UIFZqulgRFxy7fu7wcIwtfANK3aIAt5%2F9oq%2FeI4R2I%2B%2BuVynHVGqb%2FLLlDE7dvM8y2znU3r0zNFMnDc07qUQj28AuhLaX6iQGCbRUdHYlh4qtxnO%2FLz0i7FyklYCw84ps5e9O59vjQoJqqrEzhFiGZh7pP7u7xqoVRy4Lpj7uXwSauDgNn9kOb5P1MTVvbmuCm0iVs1Z1LJ3UI1cUoiZicKef5rb9Avd6Si%2FL0HngJs%2Fd6jURJgvncsvJnotbrf5oPXJOWmWGcD3kPf6f5otf0IUJ53dbfMZZcwazdbjKoraY8rnnh%2B2lGAl0IrxSb9i5%2Bbn%2BwY0V%2FTB05v%2FQqz8q97kWxCPinbi%2FHR9JTcfnNbfxn817Rx8ZWSEE4K40DNbqowqoWpwAY6pgFPFFGoYTDF9eS6SSgpYVFXFW8xwQkgY4boW%2Be08jwo%2FkPk9ZFnOObfZqBpkIkU0FeBVKdoxqqUip1rBoJmbpRFr1%2BdxAa66JUO68cuJn8YD8bKmbBl87L%2BMq4iPoi0wtrMVX4zD85vqpuFQvJgRmmqpZT2RltJCAFr9bcGFRPQKSRJCAgHv1v8SXLetYPzADBAhFeAHPhYgb7sP6e3%2Bqm%2Fi2CJCNKN&X-Amz-Signature=04194001058f51f617738342ca778fed3cc60896d34fcfd4a579922a44deb8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4EUUDW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICHGsXhBXvZn7Gs3E6O6N%2B%2ByIUapLUtYLbks9eJ9LN5QAiBBsGdn3KzxrZuhTWWshI3Z%2B3BE2xZis4UQee3aterNICr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMY4GyNRFhkVRz4jyGKtwDA%2FzR5KcIWOVAigH4D8mkA%2BFFxBBugYw3Kpa0y3x%2FIniooIEdlhELDABcC6G2Gt1DDHI6H2hg5fXK%2F6UwqvLoYvKc5HrPpvUzoFKhSfvwBFSUorzV8VnzXvUFRpbXZ7%2BkILEtQSagfnDkjvrzvo3nx46MFSw%2FCZFKolJ0UdqEdcRt2Wb2f9D6yxjDffoQsRfmLJWUdgV35%2FE6dCPuYOMuPAmzEP7jfb16ek6h4wSTHX9rjNNqcz3Z2Gup0UIFZqulgRFxy7fu7wcIwtfANK3aIAt5%2F9oq%2FeI4R2I%2B%2BuVynHVGqb%2FLLlDE7dvM8y2znU3r0zNFMnDc07qUQj28AuhLaX6iQGCbRUdHYlh4qtxnO%2FLz0i7FyklYCw84ps5e9O59vjQoJqqrEzhFiGZh7pP7u7xqoVRy4Lpj7uXwSauDgNn9kOb5P1MTVvbmuCm0iVs1Z1LJ3UI1cUoiZicKef5rb9Avd6Si%2FL0HngJs%2Fd6jURJgvncsvJnotbrf5oPXJOWmWGcD3kPf6f5otf0IUJ53dbfMZZcwazdbjKoraY8rnnh%2B2lGAl0IrxSb9i5%2Bbn%2BwY0V%2FTB05v%2FQqz8q97kWxCPinbi%2FHR9JTcfnNbfxn817Rx8ZWSEE4K40DNbqowqoWpwAY6pgFPFFGoYTDF9eS6SSgpYVFXFW8xwQkgY4boW%2Be08jwo%2FkPk9ZFnOObfZqBpkIkU0FeBVKdoxqqUip1rBoJmbpRFr1%2BdxAa66JUO68cuJn8YD8bKmbBl87L%2BMq4iPoi0wtrMVX4zD85vqpuFQvJgRmmqpZT2RltJCAFr9bcGFRPQKSRJCAgHv1v8SXLetYPzADBAhFeAHPhYgb7sP6e3%2Bqm%2Fi2CJCNKN&X-Amz-Signature=b356795754ef22d7f1eb3892d6d9fdabf982228e0bb2d5ace034b7aaa482c96f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4EUUDW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICHGsXhBXvZn7Gs3E6O6N%2B%2ByIUapLUtYLbks9eJ9LN5QAiBBsGdn3KzxrZuhTWWshI3Z%2B3BE2xZis4UQee3aterNICr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMY4GyNRFhkVRz4jyGKtwDA%2FzR5KcIWOVAigH4D8mkA%2BFFxBBugYw3Kpa0y3x%2FIniooIEdlhELDABcC6G2Gt1DDHI6H2hg5fXK%2F6UwqvLoYvKc5HrPpvUzoFKhSfvwBFSUorzV8VnzXvUFRpbXZ7%2BkILEtQSagfnDkjvrzvo3nx46MFSw%2FCZFKolJ0UdqEdcRt2Wb2f9D6yxjDffoQsRfmLJWUdgV35%2FE6dCPuYOMuPAmzEP7jfb16ek6h4wSTHX9rjNNqcz3Z2Gup0UIFZqulgRFxy7fu7wcIwtfANK3aIAt5%2F9oq%2FeI4R2I%2B%2BuVynHVGqb%2FLLlDE7dvM8y2znU3r0zNFMnDc07qUQj28AuhLaX6iQGCbRUdHYlh4qtxnO%2FLz0i7FyklYCw84ps5e9O59vjQoJqqrEzhFiGZh7pP7u7xqoVRy4Lpj7uXwSauDgNn9kOb5P1MTVvbmuCm0iVs1Z1LJ3UI1cUoiZicKef5rb9Avd6Si%2FL0HngJs%2Fd6jURJgvncsvJnotbrf5oPXJOWmWGcD3kPf6f5otf0IUJ53dbfMZZcwazdbjKoraY8rnnh%2B2lGAl0IrxSb9i5%2Bbn%2BwY0V%2FTB05v%2FQqz8q97kWxCPinbi%2FHR9JTcfnNbfxn817Rx8ZWSEE4K40DNbqowqoWpwAY6pgFPFFGoYTDF9eS6SSgpYVFXFW8xwQkgY4boW%2Be08jwo%2FkPk9ZFnOObfZqBpkIkU0FeBVKdoxqqUip1rBoJmbpRFr1%2BdxAa66JUO68cuJn8YD8bKmbBl87L%2BMq4iPoi0wtrMVX4zD85vqpuFQvJgRmmqpZT2RltJCAFr9bcGFRPQKSRJCAgHv1v8SXLetYPzADBAhFeAHPhYgb7sP6e3%2Bqm%2Fi2CJCNKN&X-Amz-Signature=7d0dc14c0d86e6e62e0a6dccb95f49af84626bd30f8f57ea68892a8597aa4abb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4EUUDW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICHGsXhBXvZn7Gs3E6O6N%2B%2ByIUapLUtYLbks9eJ9LN5QAiBBsGdn3KzxrZuhTWWshI3Z%2B3BE2xZis4UQee3aterNICr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMY4GyNRFhkVRz4jyGKtwDA%2FzR5KcIWOVAigH4D8mkA%2BFFxBBugYw3Kpa0y3x%2FIniooIEdlhELDABcC6G2Gt1DDHI6H2hg5fXK%2F6UwqvLoYvKc5HrPpvUzoFKhSfvwBFSUorzV8VnzXvUFRpbXZ7%2BkILEtQSagfnDkjvrzvo3nx46MFSw%2FCZFKolJ0UdqEdcRt2Wb2f9D6yxjDffoQsRfmLJWUdgV35%2FE6dCPuYOMuPAmzEP7jfb16ek6h4wSTHX9rjNNqcz3Z2Gup0UIFZqulgRFxy7fu7wcIwtfANK3aIAt5%2F9oq%2FeI4R2I%2B%2BuVynHVGqb%2FLLlDE7dvM8y2znU3r0zNFMnDc07qUQj28AuhLaX6iQGCbRUdHYlh4qtxnO%2FLz0i7FyklYCw84ps5e9O59vjQoJqqrEzhFiGZh7pP7u7xqoVRy4Lpj7uXwSauDgNn9kOb5P1MTVvbmuCm0iVs1Z1LJ3UI1cUoiZicKef5rb9Avd6Si%2FL0HngJs%2Fd6jURJgvncsvJnotbrf5oPXJOWmWGcD3kPf6f5otf0IUJ53dbfMZZcwazdbjKoraY8rnnh%2B2lGAl0IrxSb9i5%2Bbn%2BwY0V%2FTB05v%2FQqz8q97kWxCPinbi%2FHR9JTcfnNbfxn817Rx8ZWSEE4K40DNbqowqoWpwAY6pgFPFFGoYTDF9eS6SSgpYVFXFW8xwQkgY4boW%2Be08jwo%2FkPk9ZFnOObfZqBpkIkU0FeBVKdoxqqUip1rBoJmbpRFr1%2BdxAa66JUO68cuJn8YD8bKmbBl87L%2BMq4iPoi0wtrMVX4zD85vqpuFQvJgRmmqpZT2RltJCAFr9bcGFRPQKSRJCAgHv1v8SXLetYPzADBAhFeAHPhYgb7sP6e3%2Bqm%2Fi2CJCNKN&X-Amz-Signature=7d4bb91b22c7194e6c2332fcc38d3ece94c29c109cb269bd82de251097812908&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4EUUDW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICHGsXhBXvZn7Gs3E6O6N%2B%2ByIUapLUtYLbks9eJ9LN5QAiBBsGdn3KzxrZuhTWWshI3Z%2B3BE2xZis4UQee3aterNICr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMY4GyNRFhkVRz4jyGKtwDA%2FzR5KcIWOVAigH4D8mkA%2BFFxBBugYw3Kpa0y3x%2FIniooIEdlhELDABcC6G2Gt1DDHI6H2hg5fXK%2F6UwqvLoYvKc5HrPpvUzoFKhSfvwBFSUorzV8VnzXvUFRpbXZ7%2BkILEtQSagfnDkjvrzvo3nx46MFSw%2FCZFKolJ0UdqEdcRt2Wb2f9D6yxjDffoQsRfmLJWUdgV35%2FE6dCPuYOMuPAmzEP7jfb16ek6h4wSTHX9rjNNqcz3Z2Gup0UIFZqulgRFxy7fu7wcIwtfANK3aIAt5%2F9oq%2FeI4R2I%2B%2BuVynHVGqb%2FLLlDE7dvM8y2znU3r0zNFMnDc07qUQj28AuhLaX6iQGCbRUdHYlh4qtxnO%2FLz0i7FyklYCw84ps5e9O59vjQoJqqrEzhFiGZh7pP7u7xqoVRy4Lpj7uXwSauDgNn9kOb5P1MTVvbmuCm0iVs1Z1LJ3UI1cUoiZicKef5rb9Avd6Si%2FL0HngJs%2Fd6jURJgvncsvJnotbrf5oPXJOWmWGcD3kPf6f5otf0IUJ53dbfMZZcwazdbjKoraY8rnnh%2B2lGAl0IrxSb9i5%2Bbn%2BwY0V%2FTB05v%2FQqz8q97kWxCPinbi%2FHR9JTcfnNbfxn817Rx8ZWSEE4K40DNbqowqoWpwAY6pgFPFFGoYTDF9eS6SSgpYVFXFW8xwQkgY4boW%2Be08jwo%2FkPk9ZFnOObfZqBpkIkU0FeBVKdoxqqUip1rBoJmbpRFr1%2BdxAa66JUO68cuJn8YD8bKmbBl87L%2BMq4iPoi0wtrMVX4zD85vqpuFQvJgRmmqpZT2RltJCAFr9bcGFRPQKSRJCAgHv1v8SXLetYPzADBAhFeAHPhYgb7sP6e3%2Bqm%2Fi2CJCNKN&X-Amz-Signature=037797c81798c5d24601b63b49766225488abf9aef92f2588a240c532b3aef7b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4EUUDW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICHGsXhBXvZn7Gs3E6O6N%2B%2ByIUapLUtYLbks9eJ9LN5QAiBBsGdn3KzxrZuhTWWshI3Z%2B3BE2xZis4UQee3aterNICr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMY4GyNRFhkVRz4jyGKtwDA%2FzR5KcIWOVAigH4D8mkA%2BFFxBBugYw3Kpa0y3x%2FIniooIEdlhELDABcC6G2Gt1DDHI6H2hg5fXK%2F6UwqvLoYvKc5HrPpvUzoFKhSfvwBFSUorzV8VnzXvUFRpbXZ7%2BkILEtQSagfnDkjvrzvo3nx46MFSw%2FCZFKolJ0UdqEdcRt2Wb2f9D6yxjDffoQsRfmLJWUdgV35%2FE6dCPuYOMuPAmzEP7jfb16ek6h4wSTHX9rjNNqcz3Z2Gup0UIFZqulgRFxy7fu7wcIwtfANK3aIAt5%2F9oq%2FeI4R2I%2B%2BuVynHVGqb%2FLLlDE7dvM8y2znU3r0zNFMnDc07qUQj28AuhLaX6iQGCbRUdHYlh4qtxnO%2FLz0i7FyklYCw84ps5e9O59vjQoJqqrEzhFiGZh7pP7u7xqoVRy4Lpj7uXwSauDgNn9kOb5P1MTVvbmuCm0iVs1Z1LJ3UI1cUoiZicKef5rb9Avd6Si%2FL0HngJs%2Fd6jURJgvncsvJnotbrf5oPXJOWmWGcD3kPf6f5otf0IUJ53dbfMZZcwazdbjKoraY8rnnh%2B2lGAl0IrxSb9i5%2Bbn%2BwY0V%2FTB05v%2FQqz8q97kWxCPinbi%2FHR9JTcfnNbfxn817Rx8ZWSEE4K40DNbqowqoWpwAY6pgFPFFGoYTDF9eS6SSgpYVFXFW8xwQkgY4boW%2Be08jwo%2FkPk9ZFnOObfZqBpkIkU0FeBVKdoxqqUip1rBoJmbpRFr1%2BdxAa66JUO68cuJn8YD8bKmbBl87L%2BMq4iPoi0wtrMVX4zD85vqpuFQvJgRmmqpZT2RltJCAFr9bcGFRPQKSRJCAgHv1v8SXLetYPzADBAhFeAHPhYgb7sP6e3%2Bqm%2Fi2CJCNKN&X-Amz-Signature=67f64b6e6c24d7ebb2b5f42e4dbfc8aa411322182b2929d3e7e12b8a1d68194d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

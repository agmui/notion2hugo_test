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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXE23EC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3L4XOsBgpSj7RzHsUtlRqV23sK7YA47sI6epKINFADwIhAKrioiGaoLAnR4JUJdNyDs9dvu1VZQEze82KUgnleTQAKv8DCBQQABoMNjM3NDIzMTgzODA1IgwQYN7vIfURqJrgs%2FMq3AMY57ScCzamw2thrys09LKMQMNmYFqPvu8myKmR9PKPJ9nChSkbppv5B8u7HKah80XAZFTQnn2Hw9%2FKSEUt0fj6YB7Dy78L%2BoKsBVspScY8d4eYwm5cbhCJGKaeOj%2BS%2FUY52W%2BaDc6O2lTfaes8kNnVoxof%2BjbriEoUsVxtj7yaskU1nd9ONL62Ao3t32nBt%2BG1MHOgk7%2BEQi%2BNv5D8Bl7qNAtbFYrFZusj2ZsK726Q26Emph9uXjMV6SVWIerPbtI7KfijDL2cZ%2Fx8WHrAK66fgw6p2ivTfmvzdCfCh1dtbBvjsm%2BWsiYkMQmCk7osFLO3SFmGxAbXvEAb90YxKtkseDd4z187KvVFf6kMOUImNH%2BhqEfR3PwN3swIM7OjqxAuJCifZLuq%2BgsgGu29MrT6i0Kkh%2FUJAEFHlivRFDAv%2FPLOYWHDAaWwizvlxocNKO0KQ72X%2Byc2TRqckcq2KxZ4%2FSirwX9PugMdi%2FUbgWxIA19vrLd36%2BghJkqHUpCnSrC525Mndt4KExXyz35Gat3YwGm5HmUHAU1Iz%2FKrczavo%2BOl3wYK1mpEsQ3M9s4xszcC3He3jFWA1gVV27S9ermuUW%2F6db4B5R248Qvhu4TxukTUGsE%2B0nFaAFQBIzCd1LfEBjqkASoyrUuhZ%2Fnq0GPzKpNubXplMOBrR8G6nFiA45giJM1F4ZgXK7M5tfwS00vgphIiYJ1sKTman8GTXkE8aGQkFBkMGwxGO1HxJuIOsnRu9iYA5Ec8vFbS0Sy1qDB8sLmqHG0w2dM1epzeiwvWvxIL%2FS2QKEGsvGZKFe4uyaVpWkDfH2OW5o9nPI7yPA8G4yDpKFoNz%2FImLyCcEbIBiAyODMx7myJ5&X-Amz-Signature=0bf1279f1273c2ad5e2f7e23c62eb0c8d58cc3a038fed42046f58b26e8b75f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXE23EC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3L4XOsBgpSj7RzHsUtlRqV23sK7YA47sI6epKINFADwIhAKrioiGaoLAnR4JUJdNyDs9dvu1VZQEze82KUgnleTQAKv8DCBQQABoMNjM3NDIzMTgzODA1IgwQYN7vIfURqJrgs%2FMq3AMY57ScCzamw2thrys09LKMQMNmYFqPvu8myKmR9PKPJ9nChSkbppv5B8u7HKah80XAZFTQnn2Hw9%2FKSEUt0fj6YB7Dy78L%2BoKsBVspScY8d4eYwm5cbhCJGKaeOj%2BS%2FUY52W%2BaDc6O2lTfaes8kNnVoxof%2BjbriEoUsVxtj7yaskU1nd9ONL62Ao3t32nBt%2BG1MHOgk7%2BEQi%2BNv5D8Bl7qNAtbFYrFZusj2ZsK726Q26Emph9uXjMV6SVWIerPbtI7KfijDL2cZ%2Fx8WHrAK66fgw6p2ivTfmvzdCfCh1dtbBvjsm%2BWsiYkMQmCk7osFLO3SFmGxAbXvEAb90YxKtkseDd4z187KvVFf6kMOUImNH%2BhqEfR3PwN3swIM7OjqxAuJCifZLuq%2BgsgGu29MrT6i0Kkh%2FUJAEFHlivRFDAv%2FPLOYWHDAaWwizvlxocNKO0KQ72X%2Byc2TRqckcq2KxZ4%2FSirwX9PugMdi%2FUbgWxIA19vrLd36%2BghJkqHUpCnSrC525Mndt4KExXyz35Gat3YwGm5HmUHAU1Iz%2FKrczavo%2BOl3wYK1mpEsQ3M9s4xszcC3He3jFWA1gVV27S9ermuUW%2F6db4B5R248Qvhu4TxukTUGsE%2B0nFaAFQBIzCd1LfEBjqkASoyrUuhZ%2Fnq0GPzKpNubXplMOBrR8G6nFiA45giJM1F4ZgXK7M5tfwS00vgphIiYJ1sKTman8GTXkE8aGQkFBkMGwxGO1HxJuIOsnRu9iYA5Ec8vFbS0Sy1qDB8sLmqHG0w2dM1epzeiwvWvxIL%2FS2QKEGsvGZKFe4uyaVpWkDfH2OW5o9nPI7yPA8G4yDpKFoNz%2FImLyCcEbIBiAyODMx7myJ5&X-Amz-Signature=2a4ad0ce29079d9970cd30d3fb0ff27ce48c212fbdd689f725ead5d1ba37ebb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXE23EC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3L4XOsBgpSj7RzHsUtlRqV23sK7YA47sI6epKINFADwIhAKrioiGaoLAnR4JUJdNyDs9dvu1VZQEze82KUgnleTQAKv8DCBQQABoMNjM3NDIzMTgzODA1IgwQYN7vIfURqJrgs%2FMq3AMY57ScCzamw2thrys09LKMQMNmYFqPvu8myKmR9PKPJ9nChSkbppv5B8u7HKah80XAZFTQnn2Hw9%2FKSEUt0fj6YB7Dy78L%2BoKsBVspScY8d4eYwm5cbhCJGKaeOj%2BS%2FUY52W%2BaDc6O2lTfaes8kNnVoxof%2BjbriEoUsVxtj7yaskU1nd9ONL62Ao3t32nBt%2BG1MHOgk7%2BEQi%2BNv5D8Bl7qNAtbFYrFZusj2ZsK726Q26Emph9uXjMV6SVWIerPbtI7KfijDL2cZ%2Fx8WHrAK66fgw6p2ivTfmvzdCfCh1dtbBvjsm%2BWsiYkMQmCk7osFLO3SFmGxAbXvEAb90YxKtkseDd4z187KvVFf6kMOUImNH%2BhqEfR3PwN3swIM7OjqxAuJCifZLuq%2BgsgGu29MrT6i0Kkh%2FUJAEFHlivRFDAv%2FPLOYWHDAaWwizvlxocNKO0KQ72X%2Byc2TRqckcq2KxZ4%2FSirwX9PugMdi%2FUbgWxIA19vrLd36%2BghJkqHUpCnSrC525Mndt4KExXyz35Gat3YwGm5HmUHAU1Iz%2FKrczavo%2BOl3wYK1mpEsQ3M9s4xszcC3He3jFWA1gVV27S9ermuUW%2F6db4B5R248Qvhu4TxukTUGsE%2B0nFaAFQBIzCd1LfEBjqkASoyrUuhZ%2Fnq0GPzKpNubXplMOBrR8G6nFiA45giJM1F4ZgXK7M5tfwS00vgphIiYJ1sKTman8GTXkE8aGQkFBkMGwxGO1HxJuIOsnRu9iYA5Ec8vFbS0Sy1qDB8sLmqHG0w2dM1epzeiwvWvxIL%2FS2QKEGsvGZKFe4uyaVpWkDfH2OW5o9nPI7yPA8G4yDpKFoNz%2FImLyCcEbIBiAyODMx7myJ5&X-Amz-Signature=19df849604cb18faedef1fb32f4926e6849c668f47bb3bea4907c7f9c7c03871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXE23EC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3L4XOsBgpSj7RzHsUtlRqV23sK7YA47sI6epKINFADwIhAKrioiGaoLAnR4JUJdNyDs9dvu1VZQEze82KUgnleTQAKv8DCBQQABoMNjM3NDIzMTgzODA1IgwQYN7vIfURqJrgs%2FMq3AMY57ScCzamw2thrys09LKMQMNmYFqPvu8myKmR9PKPJ9nChSkbppv5B8u7HKah80XAZFTQnn2Hw9%2FKSEUt0fj6YB7Dy78L%2BoKsBVspScY8d4eYwm5cbhCJGKaeOj%2BS%2FUY52W%2BaDc6O2lTfaes8kNnVoxof%2BjbriEoUsVxtj7yaskU1nd9ONL62Ao3t32nBt%2BG1MHOgk7%2BEQi%2BNv5D8Bl7qNAtbFYrFZusj2ZsK726Q26Emph9uXjMV6SVWIerPbtI7KfijDL2cZ%2Fx8WHrAK66fgw6p2ivTfmvzdCfCh1dtbBvjsm%2BWsiYkMQmCk7osFLO3SFmGxAbXvEAb90YxKtkseDd4z187KvVFf6kMOUImNH%2BhqEfR3PwN3swIM7OjqxAuJCifZLuq%2BgsgGu29MrT6i0Kkh%2FUJAEFHlivRFDAv%2FPLOYWHDAaWwizvlxocNKO0KQ72X%2Byc2TRqckcq2KxZ4%2FSirwX9PugMdi%2FUbgWxIA19vrLd36%2BghJkqHUpCnSrC525Mndt4KExXyz35Gat3YwGm5HmUHAU1Iz%2FKrczavo%2BOl3wYK1mpEsQ3M9s4xszcC3He3jFWA1gVV27S9ermuUW%2F6db4B5R248Qvhu4TxukTUGsE%2B0nFaAFQBIzCd1LfEBjqkASoyrUuhZ%2Fnq0GPzKpNubXplMOBrR8G6nFiA45giJM1F4ZgXK7M5tfwS00vgphIiYJ1sKTman8GTXkE8aGQkFBkMGwxGO1HxJuIOsnRu9iYA5Ec8vFbS0Sy1qDB8sLmqHG0w2dM1epzeiwvWvxIL%2FS2QKEGsvGZKFe4uyaVpWkDfH2OW5o9nPI7yPA8G4yDpKFoNz%2FImLyCcEbIBiAyODMx7myJ5&X-Amz-Signature=8b9be9c35730cd506b5b3ef84752cea42e3f36ff910529be498dfe5f5d8ee521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXE23EC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3L4XOsBgpSj7RzHsUtlRqV23sK7YA47sI6epKINFADwIhAKrioiGaoLAnR4JUJdNyDs9dvu1VZQEze82KUgnleTQAKv8DCBQQABoMNjM3NDIzMTgzODA1IgwQYN7vIfURqJrgs%2FMq3AMY57ScCzamw2thrys09LKMQMNmYFqPvu8myKmR9PKPJ9nChSkbppv5B8u7HKah80XAZFTQnn2Hw9%2FKSEUt0fj6YB7Dy78L%2BoKsBVspScY8d4eYwm5cbhCJGKaeOj%2BS%2FUY52W%2BaDc6O2lTfaes8kNnVoxof%2BjbriEoUsVxtj7yaskU1nd9ONL62Ao3t32nBt%2BG1MHOgk7%2BEQi%2BNv5D8Bl7qNAtbFYrFZusj2ZsK726Q26Emph9uXjMV6SVWIerPbtI7KfijDL2cZ%2Fx8WHrAK66fgw6p2ivTfmvzdCfCh1dtbBvjsm%2BWsiYkMQmCk7osFLO3SFmGxAbXvEAb90YxKtkseDd4z187KvVFf6kMOUImNH%2BhqEfR3PwN3swIM7OjqxAuJCifZLuq%2BgsgGu29MrT6i0Kkh%2FUJAEFHlivRFDAv%2FPLOYWHDAaWwizvlxocNKO0KQ72X%2Byc2TRqckcq2KxZ4%2FSirwX9PugMdi%2FUbgWxIA19vrLd36%2BghJkqHUpCnSrC525Mndt4KExXyz35Gat3YwGm5HmUHAU1Iz%2FKrczavo%2BOl3wYK1mpEsQ3M9s4xszcC3He3jFWA1gVV27S9ermuUW%2F6db4B5R248Qvhu4TxukTUGsE%2B0nFaAFQBIzCd1LfEBjqkASoyrUuhZ%2Fnq0GPzKpNubXplMOBrR8G6nFiA45giJM1F4ZgXK7M5tfwS00vgphIiYJ1sKTman8GTXkE8aGQkFBkMGwxGO1HxJuIOsnRu9iYA5Ec8vFbS0Sy1qDB8sLmqHG0w2dM1epzeiwvWvxIL%2FS2QKEGsvGZKFe4uyaVpWkDfH2OW5o9nPI7yPA8G4yDpKFoNz%2FImLyCcEbIBiAyODMx7myJ5&X-Amz-Signature=c73c957139cbdbd94e68d4d03e521390e1d2b1a74e41edacb7577c3a088a2297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXE23EC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3L4XOsBgpSj7RzHsUtlRqV23sK7YA47sI6epKINFADwIhAKrioiGaoLAnR4JUJdNyDs9dvu1VZQEze82KUgnleTQAKv8DCBQQABoMNjM3NDIzMTgzODA1IgwQYN7vIfURqJrgs%2FMq3AMY57ScCzamw2thrys09LKMQMNmYFqPvu8myKmR9PKPJ9nChSkbppv5B8u7HKah80XAZFTQnn2Hw9%2FKSEUt0fj6YB7Dy78L%2BoKsBVspScY8d4eYwm5cbhCJGKaeOj%2BS%2FUY52W%2BaDc6O2lTfaes8kNnVoxof%2BjbriEoUsVxtj7yaskU1nd9ONL62Ao3t32nBt%2BG1MHOgk7%2BEQi%2BNv5D8Bl7qNAtbFYrFZusj2ZsK726Q26Emph9uXjMV6SVWIerPbtI7KfijDL2cZ%2Fx8WHrAK66fgw6p2ivTfmvzdCfCh1dtbBvjsm%2BWsiYkMQmCk7osFLO3SFmGxAbXvEAb90YxKtkseDd4z187KvVFf6kMOUImNH%2BhqEfR3PwN3swIM7OjqxAuJCifZLuq%2BgsgGu29MrT6i0Kkh%2FUJAEFHlivRFDAv%2FPLOYWHDAaWwizvlxocNKO0KQ72X%2Byc2TRqckcq2KxZ4%2FSirwX9PugMdi%2FUbgWxIA19vrLd36%2BghJkqHUpCnSrC525Mndt4KExXyz35Gat3YwGm5HmUHAU1Iz%2FKrczavo%2BOl3wYK1mpEsQ3M9s4xszcC3He3jFWA1gVV27S9ermuUW%2F6db4B5R248Qvhu4TxukTUGsE%2B0nFaAFQBIzCd1LfEBjqkASoyrUuhZ%2Fnq0GPzKpNubXplMOBrR8G6nFiA45giJM1F4ZgXK7M5tfwS00vgphIiYJ1sKTman8GTXkE8aGQkFBkMGwxGO1HxJuIOsnRu9iYA5Ec8vFbS0Sy1qDB8sLmqHG0w2dM1epzeiwvWvxIL%2FS2QKEGsvGZKFe4uyaVpWkDfH2OW5o9nPI7yPA8G4yDpKFoNz%2FImLyCcEbIBiAyODMx7myJ5&X-Amz-Signature=c57d4d0feabcec4415a9f2775ba06eb4ad80a4fab6b52d23276280714229d3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXE23EC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3L4XOsBgpSj7RzHsUtlRqV23sK7YA47sI6epKINFADwIhAKrioiGaoLAnR4JUJdNyDs9dvu1VZQEze82KUgnleTQAKv8DCBQQABoMNjM3NDIzMTgzODA1IgwQYN7vIfURqJrgs%2FMq3AMY57ScCzamw2thrys09LKMQMNmYFqPvu8myKmR9PKPJ9nChSkbppv5B8u7HKah80XAZFTQnn2Hw9%2FKSEUt0fj6YB7Dy78L%2BoKsBVspScY8d4eYwm5cbhCJGKaeOj%2BS%2FUY52W%2BaDc6O2lTfaes8kNnVoxof%2BjbriEoUsVxtj7yaskU1nd9ONL62Ao3t32nBt%2BG1MHOgk7%2BEQi%2BNv5D8Bl7qNAtbFYrFZusj2ZsK726Q26Emph9uXjMV6SVWIerPbtI7KfijDL2cZ%2Fx8WHrAK66fgw6p2ivTfmvzdCfCh1dtbBvjsm%2BWsiYkMQmCk7osFLO3SFmGxAbXvEAb90YxKtkseDd4z187KvVFf6kMOUImNH%2BhqEfR3PwN3swIM7OjqxAuJCifZLuq%2BgsgGu29MrT6i0Kkh%2FUJAEFHlivRFDAv%2FPLOYWHDAaWwizvlxocNKO0KQ72X%2Byc2TRqckcq2KxZ4%2FSirwX9PugMdi%2FUbgWxIA19vrLd36%2BghJkqHUpCnSrC525Mndt4KExXyz35Gat3YwGm5HmUHAU1Iz%2FKrczavo%2BOl3wYK1mpEsQ3M9s4xszcC3He3jFWA1gVV27S9ermuUW%2F6db4B5R248Qvhu4TxukTUGsE%2B0nFaAFQBIzCd1LfEBjqkASoyrUuhZ%2Fnq0GPzKpNubXplMOBrR8G6nFiA45giJM1F4ZgXK7M5tfwS00vgphIiYJ1sKTman8GTXkE8aGQkFBkMGwxGO1HxJuIOsnRu9iYA5Ec8vFbS0Sy1qDB8sLmqHG0w2dM1epzeiwvWvxIL%2FS2QKEGsvGZKFe4uyaVpWkDfH2OW5o9nPI7yPA8G4yDpKFoNz%2FImLyCcEbIBiAyODMx7myJ5&X-Amz-Signature=8089ce018e77f3587207bc1a02d4f4b08ae3d6173e8e1f609483c7b562eb4dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

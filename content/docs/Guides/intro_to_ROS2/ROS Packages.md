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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQIIIVC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWgeWjWzueRBwD%2Bdyeqq%2FrdA9P4hsnowYefWxEWNb7ZwIhAP%2FRpN6wXPKJyd%2BeB5vJnuCpPgbi8kvlTN02d3zL1I34KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJdUaTKIjn8fgzA60q3ANRmhOWaenWqGw3qLQYT%2FvONsBsddcYLB0UCzB0rCFHcfrfmc%2BkmGbpbX8bk5DoF07NzQFJC3rYoBV10t610jvKvwRQlEBSnzmP9uc3ZprvBleVDM4DleEL4vok96KB%2Fp%2FVs4P0rLpX5YnlB5cEwutc2on%2FSJti1399WDS6fNFZaGIszV6xydCQDmwFB9sXJRG%2FEEuiguZ7DmE6laV%2BQsNDp49H1%2F7HGO1CbuitCd82CIRGvBL%2FQ7BKnNC2rajgsbVZ0ryIJ9b1FZLdi%2BQl64z6JsurQ73wMxtsPS9Yix5EVa6uGdu47P8uIBUHZv6lFlowuisvHuZ1nTO9lUbytBdkZxJ8sHIUws53zo%2FQoAB%2FV0RrJGYFro9EiV4OFaz8pHn7s9kL7zyQ5bQO9rEQror1tgQidInqzohqs%2BVcEiA7%2FkmhOQlQPxhcz%2Bhz3ZkWWn%2FCpbgPVSF2d%2FNtXbPV1K1FN%2BOcqZDLK68nuB7K%2BW5D1kGqcZS8RT5jWEh9ZHuscPajaX%2FuebKFLzZuXxkN5RsdWjSs%2BdJPt3wl9PF8qg13o4hoWbWBcq66ME3Dy%2BeRs0ysYKKZw5mTwey8%2FNHtJTwGUfcQIHMniaJRIzukoKM1qdXRBhMkYrfQck8OVTCNp5bFBjqkAcQ4ChNBjTizz%2B4H2MgKpN59mA05fT%2BDML9OYsXE3MXhzokfjfX8G%2FTGt7BzhavNRCo%2BnCUHu1qQbx0oMLoto%2FvUqG23KeaXP78Ot%2FwBe6eTHGbftyG1yOU0Qe075TBAZZ3JZVE7aiHBksTCbP2TCopEEJCIZhcdY2c%2FWxu0BePYkPAIjL6iuQj%2BH0lzRhh6drA%2BO0BGLLFGZq9eiONUhN45X3Xg&X-Amz-Signature=a712b0139e0de21ab18ce1e490935f1b1d392ef263aae65c5c91ca05fdcf6c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQIIIVC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWgeWjWzueRBwD%2Bdyeqq%2FrdA9P4hsnowYefWxEWNb7ZwIhAP%2FRpN6wXPKJyd%2BeB5vJnuCpPgbi8kvlTN02d3zL1I34KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJdUaTKIjn8fgzA60q3ANRmhOWaenWqGw3qLQYT%2FvONsBsddcYLB0UCzB0rCFHcfrfmc%2BkmGbpbX8bk5DoF07NzQFJC3rYoBV10t610jvKvwRQlEBSnzmP9uc3ZprvBleVDM4DleEL4vok96KB%2Fp%2FVs4P0rLpX5YnlB5cEwutc2on%2FSJti1399WDS6fNFZaGIszV6xydCQDmwFB9sXJRG%2FEEuiguZ7DmE6laV%2BQsNDp49H1%2F7HGO1CbuitCd82CIRGvBL%2FQ7BKnNC2rajgsbVZ0ryIJ9b1FZLdi%2BQl64z6JsurQ73wMxtsPS9Yix5EVa6uGdu47P8uIBUHZv6lFlowuisvHuZ1nTO9lUbytBdkZxJ8sHIUws53zo%2FQoAB%2FV0RrJGYFro9EiV4OFaz8pHn7s9kL7zyQ5bQO9rEQror1tgQidInqzohqs%2BVcEiA7%2FkmhOQlQPxhcz%2Bhz3ZkWWn%2FCpbgPVSF2d%2FNtXbPV1K1FN%2BOcqZDLK68nuB7K%2BW5D1kGqcZS8RT5jWEh9ZHuscPajaX%2FuebKFLzZuXxkN5RsdWjSs%2BdJPt3wl9PF8qg13o4hoWbWBcq66ME3Dy%2BeRs0ysYKKZw5mTwey8%2FNHtJTwGUfcQIHMniaJRIzukoKM1qdXRBhMkYrfQck8OVTCNp5bFBjqkAcQ4ChNBjTizz%2B4H2MgKpN59mA05fT%2BDML9OYsXE3MXhzokfjfX8G%2FTGt7BzhavNRCo%2BnCUHu1qQbx0oMLoto%2FvUqG23KeaXP78Ot%2FwBe6eTHGbftyG1yOU0Qe075TBAZZ3JZVE7aiHBksTCbP2TCopEEJCIZhcdY2c%2FWxu0BePYkPAIjL6iuQj%2BH0lzRhh6drA%2BO0BGLLFGZq9eiONUhN45X3Xg&X-Amz-Signature=becba1a12d9deee830958256e6a4cc31d79593417eab7c5865545fc63464dc76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQIIIVC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWgeWjWzueRBwD%2Bdyeqq%2FrdA9P4hsnowYefWxEWNb7ZwIhAP%2FRpN6wXPKJyd%2BeB5vJnuCpPgbi8kvlTN02d3zL1I34KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJdUaTKIjn8fgzA60q3ANRmhOWaenWqGw3qLQYT%2FvONsBsddcYLB0UCzB0rCFHcfrfmc%2BkmGbpbX8bk5DoF07NzQFJC3rYoBV10t610jvKvwRQlEBSnzmP9uc3ZprvBleVDM4DleEL4vok96KB%2Fp%2FVs4P0rLpX5YnlB5cEwutc2on%2FSJti1399WDS6fNFZaGIszV6xydCQDmwFB9sXJRG%2FEEuiguZ7DmE6laV%2BQsNDp49H1%2F7HGO1CbuitCd82CIRGvBL%2FQ7BKnNC2rajgsbVZ0ryIJ9b1FZLdi%2BQl64z6JsurQ73wMxtsPS9Yix5EVa6uGdu47P8uIBUHZv6lFlowuisvHuZ1nTO9lUbytBdkZxJ8sHIUws53zo%2FQoAB%2FV0RrJGYFro9EiV4OFaz8pHn7s9kL7zyQ5bQO9rEQror1tgQidInqzohqs%2BVcEiA7%2FkmhOQlQPxhcz%2Bhz3ZkWWn%2FCpbgPVSF2d%2FNtXbPV1K1FN%2BOcqZDLK68nuB7K%2BW5D1kGqcZS8RT5jWEh9ZHuscPajaX%2FuebKFLzZuXxkN5RsdWjSs%2BdJPt3wl9PF8qg13o4hoWbWBcq66ME3Dy%2BeRs0ysYKKZw5mTwey8%2FNHtJTwGUfcQIHMniaJRIzukoKM1qdXRBhMkYrfQck8OVTCNp5bFBjqkAcQ4ChNBjTizz%2B4H2MgKpN59mA05fT%2BDML9OYsXE3MXhzokfjfX8G%2FTGt7BzhavNRCo%2BnCUHu1qQbx0oMLoto%2FvUqG23KeaXP78Ot%2FwBe6eTHGbftyG1yOU0Qe075TBAZZ3JZVE7aiHBksTCbP2TCopEEJCIZhcdY2c%2FWxu0BePYkPAIjL6iuQj%2BH0lzRhh6drA%2BO0BGLLFGZq9eiONUhN45X3Xg&X-Amz-Signature=a775543164abc125a90f80073fae97aab5a6babda97fa9d27ae64c6b697eebaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQIIIVC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWgeWjWzueRBwD%2Bdyeqq%2FrdA9P4hsnowYefWxEWNb7ZwIhAP%2FRpN6wXPKJyd%2BeB5vJnuCpPgbi8kvlTN02d3zL1I34KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJdUaTKIjn8fgzA60q3ANRmhOWaenWqGw3qLQYT%2FvONsBsddcYLB0UCzB0rCFHcfrfmc%2BkmGbpbX8bk5DoF07NzQFJC3rYoBV10t610jvKvwRQlEBSnzmP9uc3ZprvBleVDM4DleEL4vok96KB%2Fp%2FVs4P0rLpX5YnlB5cEwutc2on%2FSJti1399WDS6fNFZaGIszV6xydCQDmwFB9sXJRG%2FEEuiguZ7DmE6laV%2BQsNDp49H1%2F7HGO1CbuitCd82CIRGvBL%2FQ7BKnNC2rajgsbVZ0ryIJ9b1FZLdi%2BQl64z6JsurQ73wMxtsPS9Yix5EVa6uGdu47P8uIBUHZv6lFlowuisvHuZ1nTO9lUbytBdkZxJ8sHIUws53zo%2FQoAB%2FV0RrJGYFro9EiV4OFaz8pHn7s9kL7zyQ5bQO9rEQror1tgQidInqzohqs%2BVcEiA7%2FkmhOQlQPxhcz%2Bhz3ZkWWn%2FCpbgPVSF2d%2FNtXbPV1K1FN%2BOcqZDLK68nuB7K%2BW5D1kGqcZS8RT5jWEh9ZHuscPajaX%2FuebKFLzZuXxkN5RsdWjSs%2BdJPt3wl9PF8qg13o4hoWbWBcq66ME3Dy%2BeRs0ysYKKZw5mTwey8%2FNHtJTwGUfcQIHMniaJRIzukoKM1qdXRBhMkYrfQck8OVTCNp5bFBjqkAcQ4ChNBjTizz%2B4H2MgKpN59mA05fT%2BDML9OYsXE3MXhzokfjfX8G%2FTGt7BzhavNRCo%2BnCUHu1qQbx0oMLoto%2FvUqG23KeaXP78Ot%2FwBe6eTHGbftyG1yOU0Qe075TBAZZ3JZVE7aiHBksTCbP2TCopEEJCIZhcdY2c%2FWxu0BePYkPAIjL6iuQj%2BH0lzRhh6drA%2BO0BGLLFGZq9eiONUhN45X3Xg&X-Amz-Signature=0b2a7c56499e6959ae145a390a04c59e77e60d647a3246844d84d7edb970e8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQIIIVC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWgeWjWzueRBwD%2Bdyeqq%2FrdA9P4hsnowYefWxEWNb7ZwIhAP%2FRpN6wXPKJyd%2BeB5vJnuCpPgbi8kvlTN02d3zL1I34KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJdUaTKIjn8fgzA60q3ANRmhOWaenWqGw3qLQYT%2FvONsBsddcYLB0UCzB0rCFHcfrfmc%2BkmGbpbX8bk5DoF07NzQFJC3rYoBV10t610jvKvwRQlEBSnzmP9uc3ZprvBleVDM4DleEL4vok96KB%2Fp%2FVs4P0rLpX5YnlB5cEwutc2on%2FSJti1399WDS6fNFZaGIszV6xydCQDmwFB9sXJRG%2FEEuiguZ7DmE6laV%2BQsNDp49H1%2F7HGO1CbuitCd82CIRGvBL%2FQ7BKnNC2rajgsbVZ0ryIJ9b1FZLdi%2BQl64z6JsurQ73wMxtsPS9Yix5EVa6uGdu47P8uIBUHZv6lFlowuisvHuZ1nTO9lUbytBdkZxJ8sHIUws53zo%2FQoAB%2FV0RrJGYFro9EiV4OFaz8pHn7s9kL7zyQ5bQO9rEQror1tgQidInqzohqs%2BVcEiA7%2FkmhOQlQPxhcz%2Bhz3ZkWWn%2FCpbgPVSF2d%2FNtXbPV1K1FN%2BOcqZDLK68nuB7K%2BW5D1kGqcZS8RT5jWEh9ZHuscPajaX%2FuebKFLzZuXxkN5RsdWjSs%2BdJPt3wl9PF8qg13o4hoWbWBcq66ME3Dy%2BeRs0ysYKKZw5mTwey8%2FNHtJTwGUfcQIHMniaJRIzukoKM1qdXRBhMkYrfQck8OVTCNp5bFBjqkAcQ4ChNBjTizz%2B4H2MgKpN59mA05fT%2BDML9OYsXE3MXhzokfjfX8G%2FTGt7BzhavNRCo%2BnCUHu1qQbx0oMLoto%2FvUqG23KeaXP78Ot%2FwBe6eTHGbftyG1yOU0Qe075TBAZZ3JZVE7aiHBksTCbP2TCopEEJCIZhcdY2c%2FWxu0BePYkPAIjL6iuQj%2BH0lzRhh6drA%2BO0BGLLFGZq9eiONUhN45X3Xg&X-Amz-Signature=13fb72ad2eeced7ad18efbbd9c40979a037935dea73df2f710884d589f30b691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQIIIVC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWgeWjWzueRBwD%2Bdyeqq%2FrdA9P4hsnowYefWxEWNb7ZwIhAP%2FRpN6wXPKJyd%2BeB5vJnuCpPgbi8kvlTN02d3zL1I34KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJdUaTKIjn8fgzA60q3ANRmhOWaenWqGw3qLQYT%2FvONsBsddcYLB0UCzB0rCFHcfrfmc%2BkmGbpbX8bk5DoF07NzQFJC3rYoBV10t610jvKvwRQlEBSnzmP9uc3ZprvBleVDM4DleEL4vok96KB%2Fp%2FVs4P0rLpX5YnlB5cEwutc2on%2FSJti1399WDS6fNFZaGIszV6xydCQDmwFB9sXJRG%2FEEuiguZ7DmE6laV%2BQsNDp49H1%2F7HGO1CbuitCd82CIRGvBL%2FQ7BKnNC2rajgsbVZ0ryIJ9b1FZLdi%2BQl64z6JsurQ73wMxtsPS9Yix5EVa6uGdu47P8uIBUHZv6lFlowuisvHuZ1nTO9lUbytBdkZxJ8sHIUws53zo%2FQoAB%2FV0RrJGYFro9EiV4OFaz8pHn7s9kL7zyQ5bQO9rEQror1tgQidInqzohqs%2BVcEiA7%2FkmhOQlQPxhcz%2Bhz3ZkWWn%2FCpbgPVSF2d%2FNtXbPV1K1FN%2BOcqZDLK68nuB7K%2BW5D1kGqcZS8RT5jWEh9ZHuscPajaX%2FuebKFLzZuXxkN5RsdWjSs%2BdJPt3wl9PF8qg13o4hoWbWBcq66ME3Dy%2BeRs0ysYKKZw5mTwey8%2FNHtJTwGUfcQIHMniaJRIzukoKM1qdXRBhMkYrfQck8OVTCNp5bFBjqkAcQ4ChNBjTizz%2B4H2MgKpN59mA05fT%2BDML9OYsXE3MXhzokfjfX8G%2FTGt7BzhavNRCo%2BnCUHu1qQbx0oMLoto%2FvUqG23KeaXP78Ot%2FwBe6eTHGbftyG1yOU0Qe075TBAZZ3JZVE7aiHBksTCbP2TCopEEJCIZhcdY2c%2FWxu0BePYkPAIjL6iuQj%2BH0lzRhh6drA%2BO0BGLLFGZq9eiONUhN45X3Xg&X-Amz-Signature=5b64ba85f2bc0fe72061b18859b7fc57172ecf9098364ed418b924cd5eca59a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQIIIVC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWgeWjWzueRBwD%2Bdyeqq%2FrdA9P4hsnowYefWxEWNb7ZwIhAP%2FRpN6wXPKJyd%2BeB5vJnuCpPgbi8kvlTN02d3zL1I34KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJdUaTKIjn8fgzA60q3ANRmhOWaenWqGw3qLQYT%2FvONsBsddcYLB0UCzB0rCFHcfrfmc%2BkmGbpbX8bk5DoF07NzQFJC3rYoBV10t610jvKvwRQlEBSnzmP9uc3ZprvBleVDM4DleEL4vok96KB%2Fp%2FVs4P0rLpX5YnlB5cEwutc2on%2FSJti1399WDS6fNFZaGIszV6xydCQDmwFB9sXJRG%2FEEuiguZ7DmE6laV%2BQsNDp49H1%2F7HGO1CbuitCd82CIRGvBL%2FQ7BKnNC2rajgsbVZ0ryIJ9b1FZLdi%2BQl64z6JsurQ73wMxtsPS9Yix5EVa6uGdu47P8uIBUHZv6lFlowuisvHuZ1nTO9lUbytBdkZxJ8sHIUws53zo%2FQoAB%2FV0RrJGYFro9EiV4OFaz8pHn7s9kL7zyQ5bQO9rEQror1tgQidInqzohqs%2BVcEiA7%2FkmhOQlQPxhcz%2Bhz3ZkWWn%2FCpbgPVSF2d%2FNtXbPV1K1FN%2BOcqZDLK68nuB7K%2BW5D1kGqcZS8RT5jWEh9ZHuscPajaX%2FuebKFLzZuXxkN5RsdWjSs%2BdJPt3wl9PF8qg13o4hoWbWBcq66ME3Dy%2BeRs0ysYKKZw5mTwey8%2FNHtJTwGUfcQIHMniaJRIzukoKM1qdXRBhMkYrfQck8OVTCNp5bFBjqkAcQ4ChNBjTizz%2B4H2MgKpN59mA05fT%2BDML9OYsXE3MXhzokfjfX8G%2FTGt7BzhavNRCo%2BnCUHu1qQbx0oMLoto%2FvUqG23KeaXP78Ot%2FwBe6eTHGbftyG1yOU0Qe075TBAZZ3JZVE7aiHBksTCbP2TCopEEJCIZhcdY2c%2FWxu0BePYkPAIjL6iuQj%2BH0lzRhh6drA%2BO0BGLLFGZq9eiONUhN45X3Xg&X-Amz-Signature=20a67ba0b443cb8b33e2dbc84d4bf41151e7a8c3c808efe6421ba88ebcb76aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

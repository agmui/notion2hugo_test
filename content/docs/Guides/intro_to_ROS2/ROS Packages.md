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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT6N76P%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCPUJBFS0bRxCp2Ua%2BtBvvG2Akmq8CD411m59VApXd3JQIhAJ9v69DQPslSarE30b9OXgOQcr04Eg9cHRjROzwtQZp%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmkkdTatmmHa2z2Swq3AOJk1oXkiHUsxTF066S5mA3Ey7alJW%2FU73bpBCr3JaxzflK4UVK0n3Q8Vcm9R66M8oxeX%2BP%2BRycBEXGKvVJ3q6uYSvLqqP7IZs5z22yo8UT1%2F8jV5l3NNPuRA52JIWlWVdeUivobAmLYD56w%2FKE%2FfxB1VbhgU%2Bgb34uQjrdE87zePWIJI7Q5iQCJuwa%2FkFTOfL6FzigbqvZdnBl69O5%2BhvR%2BbaJvKBwH8PuiliyG4cwwD%2Fu8buKK5otD8pPfTKuoef16k83A3GQqDydPsU7A7lDvpekI07RGuCRKXP51EkRlMtq2C2KqbD0AvdT8Mgl6bxftZkrG4RCUyUrvxL9CyrHnuG6j8GvPhK3RLAe6uDuTyQ4%2BqQg0LaZ81uuEnzZ34LYMxiFCnSJicjEyaBCnm6Gwy%2F%2B4DalTOdanuzGNgn74GLPWZMCif7Ld4ucpO5wJMrPM1LS%2FRLO6zRO7oI1ef1JRSdqLll5ZhAwOk464p8z0yQu1EckVkFNewo%2BHkekaBramsXxg%2B4cA6xOD8qQnJDgaHXSa2KQVbf7rxMdA6KqgLcWBG3unEAS%2FTA%2FVFrRig6z4EgmSpUyb85RESyoIdfKv7Ey339dA6UDLkQMvBstcGmdNhuFuE9pab%2FJATCapcDPBjqkAcsHlVpjY9KXmBGXUWCPWEdSu9xOd4RMgkWINU4rq4LBLYDkZNS5QyCeJlTwV9QEOEPNRkexRereEFCzKC7G9tXSYZUHxHrhnLDu%2FEDI1HxR3SvIk84pH39aLDNENmgssrVITa3JC9hagNDooXAvALgpcaQt%2BSslpiHrXN8%2B5MpzU0lI1SDpR6mjKufZO%2FozIWJuwuU95Ph2yZTxaIPIL8TfrmOP&X-Amz-Signature=e1e0ba736445438f766ee4715ad4dce1fe308264e82f29b7a70f4c10f0ccebdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT6N76P%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCPUJBFS0bRxCp2Ua%2BtBvvG2Akmq8CD411m59VApXd3JQIhAJ9v69DQPslSarE30b9OXgOQcr04Eg9cHRjROzwtQZp%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmkkdTatmmHa2z2Swq3AOJk1oXkiHUsxTF066S5mA3Ey7alJW%2FU73bpBCr3JaxzflK4UVK0n3Q8Vcm9R66M8oxeX%2BP%2BRycBEXGKvVJ3q6uYSvLqqP7IZs5z22yo8UT1%2F8jV5l3NNPuRA52JIWlWVdeUivobAmLYD56w%2FKE%2FfxB1VbhgU%2Bgb34uQjrdE87zePWIJI7Q5iQCJuwa%2FkFTOfL6FzigbqvZdnBl69O5%2BhvR%2BbaJvKBwH8PuiliyG4cwwD%2Fu8buKK5otD8pPfTKuoef16k83A3GQqDydPsU7A7lDvpekI07RGuCRKXP51EkRlMtq2C2KqbD0AvdT8Mgl6bxftZkrG4RCUyUrvxL9CyrHnuG6j8GvPhK3RLAe6uDuTyQ4%2BqQg0LaZ81uuEnzZ34LYMxiFCnSJicjEyaBCnm6Gwy%2F%2B4DalTOdanuzGNgn74GLPWZMCif7Ld4ucpO5wJMrPM1LS%2FRLO6zRO7oI1ef1JRSdqLll5ZhAwOk464p8z0yQu1EckVkFNewo%2BHkekaBramsXxg%2B4cA6xOD8qQnJDgaHXSa2KQVbf7rxMdA6KqgLcWBG3unEAS%2FTA%2FVFrRig6z4EgmSpUyb85RESyoIdfKv7Ey339dA6UDLkQMvBstcGmdNhuFuE9pab%2FJATCapcDPBjqkAcsHlVpjY9KXmBGXUWCPWEdSu9xOd4RMgkWINU4rq4LBLYDkZNS5QyCeJlTwV9QEOEPNRkexRereEFCzKC7G9tXSYZUHxHrhnLDu%2FEDI1HxR3SvIk84pH39aLDNENmgssrVITa3JC9hagNDooXAvALgpcaQt%2BSslpiHrXN8%2B5MpzU0lI1SDpR6mjKufZO%2FozIWJuwuU95Ph2yZTxaIPIL8TfrmOP&X-Amz-Signature=4b0e62475551d86e0ccadb6638d9b75f89e9eab86d8910aa4826c1edd9a80004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT6N76P%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCPUJBFS0bRxCp2Ua%2BtBvvG2Akmq8CD411m59VApXd3JQIhAJ9v69DQPslSarE30b9OXgOQcr04Eg9cHRjROzwtQZp%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmkkdTatmmHa2z2Swq3AOJk1oXkiHUsxTF066S5mA3Ey7alJW%2FU73bpBCr3JaxzflK4UVK0n3Q8Vcm9R66M8oxeX%2BP%2BRycBEXGKvVJ3q6uYSvLqqP7IZs5z22yo8UT1%2F8jV5l3NNPuRA52JIWlWVdeUivobAmLYD56w%2FKE%2FfxB1VbhgU%2Bgb34uQjrdE87zePWIJI7Q5iQCJuwa%2FkFTOfL6FzigbqvZdnBl69O5%2BhvR%2BbaJvKBwH8PuiliyG4cwwD%2Fu8buKK5otD8pPfTKuoef16k83A3GQqDydPsU7A7lDvpekI07RGuCRKXP51EkRlMtq2C2KqbD0AvdT8Mgl6bxftZkrG4RCUyUrvxL9CyrHnuG6j8GvPhK3RLAe6uDuTyQ4%2BqQg0LaZ81uuEnzZ34LYMxiFCnSJicjEyaBCnm6Gwy%2F%2B4DalTOdanuzGNgn74GLPWZMCif7Ld4ucpO5wJMrPM1LS%2FRLO6zRO7oI1ef1JRSdqLll5ZhAwOk464p8z0yQu1EckVkFNewo%2BHkekaBramsXxg%2B4cA6xOD8qQnJDgaHXSa2KQVbf7rxMdA6KqgLcWBG3unEAS%2FTA%2FVFrRig6z4EgmSpUyb85RESyoIdfKv7Ey339dA6UDLkQMvBstcGmdNhuFuE9pab%2FJATCapcDPBjqkAcsHlVpjY9KXmBGXUWCPWEdSu9xOd4RMgkWINU4rq4LBLYDkZNS5QyCeJlTwV9QEOEPNRkexRereEFCzKC7G9tXSYZUHxHrhnLDu%2FEDI1HxR3SvIk84pH39aLDNENmgssrVITa3JC9hagNDooXAvALgpcaQt%2BSslpiHrXN8%2B5MpzU0lI1SDpR6mjKufZO%2FozIWJuwuU95Ph2yZTxaIPIL8TfrmOP&X-Amz-Signature=f5a7a285e682da4595ca61489b1ccc99b086ba8eab8158989c8ce4fb3e0d68b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT6N76P%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCPUJBFS0bRxCp2Ua%2BtBvvG2Akmq8CD411m59VApXd3JQIhAJ9v69DQPslSarE30b9OXgOQcr04Eg9cHRjROzwtQZp%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmkkdTatmmHa2z2Swq3AOJk1oXkiHUsxTF066S5mA3Ey7alJW%2FU73bpBCr3JaxzflK4UVK0n3Q8Vcm9R66M8oxeX%2BP%2BRycBEXGKvVJ3q6uYSvLqqP7IZs5z22yo8UT1%2F8jV5l3NNPuRA52JIWlWVdeUivobAmLYD56w%2FKE%2FfxB1VbhgU%2Bgb34uQjrdE87zePWIJI7Q5iQCJuwa%2FkFTOfL6FzigbqvZdnBl69O5%2BhvR%2BbaJvKBwH8PuiliyG4cwwD%2Fu8buKK5otD8pPfTKuoef16k83A3GQqDydPsU7A7lDvpekI07RGuCRKXP51EkRlMtq2C2KqbD0AvdT8Mgl6bxftZkrG4RCUyUrvxL9CyrHnuG6j8GvPhK3RLAe6uDuTyQ4%2BqQg0LaZ81uuEnzZ34LYMxiFCnSJicjEyaBCnm6Gwy%2F%2B4DalTOdanuzGNgn74GLPWZMCif7Ld4ucpO5wJMrPM1LS%2FRLO6zRO7oI1ef1JRSdqLll5ZhAwOk464p8z0yQu1EckVkFNewo%2BHkekaBramsXxg%2B4cA6xOD8qQnJDgaHXSa2KQVbf7rxMdA6KqgLcWBG3unEAS%2FTA%2FVFrRig6z4EgmSpUyb85RESyoIdfKv7Ey339dA6UDLkQMvBstcGmdNhuFuE9pab%2FJATCapcDPBjqkAcsHlVpjY9KXmBGXUWCPWEdSu9xOd4RMgkWINU4rq4LBLYDkZNS5QyCeJlTwV9QEOEPNRkexRereEFCzKC7G9tXSYZUHxHrhnLDu%2FEDI1HxR3SvIk84pH39aLDNENmgssrVITa3JC9hagNDooXAvALgpcaQt%2BSslpiHrXN8%2B5MpzU0lI1SDpR6mjKufZO%2FozIWJuwuU95Ph2yZTxaIPIL8TfrmOP&X-Amz-Signature=a3fbfe77c7d978582aadfae93bd4f2da7a471d864a1efad4d36fcec560dba070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT6N76P%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCPUJBFS0bRxCp2Ua%2BtBvvG2Akmq8CD411m59VApXd3JQIhAJ9v69DQPslSarE30b9OXgOQcr04Eg9cHRjROzwtQZp%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmkkdTatmmHa2z2Swq3AOJk1oXkiHUsxTF066S5mA3Ey7alJW%2FU73bpBCr3JaxzflK4UVK0n3Q8Vcm9R66M8oxeX%2BP%2BRycBEXGKvVJ3q6uYSvLqqP7IZs5z22yo8UT1%2F8jV5l3NNPuRA52JIWlWVdeUivobAmLYD56w%2FKE%2FfxB1VbhgU%2Bgb34uQjrdE87zePWIJI7Q5iQCJuwa%2FkFTOfL6FzigbqvZdnBl69O5%2BhvR%2BbaJvKBwH8PuiliyG4cwwD%2Fu8buKK5otD8pPfTKuoef16k83A3GQqDydPsU7A7lDvpekI07RGuCRKXP51EkRlMtq2C2KqbD0AvdT8Mgl6bxftZkrG4RCUyUrvxL9CyrHnuG6j8GvPhK3RLAe6uDuTyQ4%2BqQg0LaZ81uuEnzZ34LYMxiFCnSJicjEyaBCnm6Gwy%2F%2B4DalTOdanuzGNgn74GLPWZMCif7Ld4ucpO5wJMrPM1LS%2FRLO6zRO7oI1ef1JRSdqLll5ZhAwOk464p8z0yQu1EckVkFNewo%2BHkekaBramsXxg%2B4cA6xOD8qQnJDgaHXSa2KQVbf7rxMdA6KqgLcWBG3unEAS%2FTA%2FVFrRig6z4EgmSpUyb85RESyoIdfKv7Ey339dA6UDLkQMvBstcGmdNhuFuE9pab%2FJATCapcDPBjqkAcsHlVpjY9KXmBGXUWCPWEdSu9xOd4RMgkWINU4rq4LBLYDkZNS5QyCeJlTwV9QEOEPNRkexRereEFCzKC7G9tXSYZUHxHrhnLDu%2FEDI1HxR3SvIk84pH39aLDNENmgssrVITa3JC9hagNDooXAvALgpcaQt%2BSslpiHrXN8%2B5MpzU0lI1SDpR6mjKufZO%2FozIWJuwuU95Ph2yZTxaIPIL8TfrmOP&X-Amz-Signature=e0c07c70447b5db2272cb2844daa4c45e589a47b1ad57732ce683c2965b0fdb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT6N76P%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCPUJBFS0bRxCp2Ua%2BtBvvG2Akmq8CD411m59VApXd3JQIhAJ9v69DQPslSarE30b9OXgOQcr04Eg9cHRjROzwtQZp%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmkkdTatmmHa2z2Swq3AOJk1oXkiHUsxTF066S5mA3Ey7alJW%2FU73bpBCr3JaxzflK4UVK0n3Q8Vcm9R66M8oxeX%2BP%2BRycBEXGKvVJ3q6uYSvLqqP7IZs5z22yo8UT1%2F8jV5l3NNPuRA52JIWlWVdeUivobAmLYD56w%2FKE%2FfxB1VbhgU%2Bgb34uQjrdE87zePWIJI7Q5iQCJuwa%2FkFTOfL6FzigbqvZdnBl69O5%2BhvR%2BbaJvKBwH8PuiliyG4cwwD%2Fu8buKK5otD8pPfTKuoef16k83A3GQqDydPsU7A7lDvpekI07RGuCRKXP51EkRlMtq2C2KqbD0AvdT8Mgl6bxftZkrG4RCUyUrvxL9CyrHnuG6j8GvPhK3RLAe6uDuTyQ4%2BqQg0LaZ81uuEnzZ34LYMxiFCnSJicjEyaBCnm6Gwy%2F%2B4DalTOdanuzGNgn74GLPWZMCif7Ld4ucpO5wJMrPM1LS%2FRLO6zRO7oI1ef1JRSdqLll5ZhAwOk464p8z0yQu1EckVkFNewo%2BHkekaBramsXxg%2B4cA6xOD8qQnJDgaHXSa2KQVbf7rxMdA6KqgLcWBG3unEAS%2FTA%2FVFrRig6z4EgmSpUyb85RESyoIdfKv7Ey339dA6UDLkQMvBstcGmdNhuFuE9pab%2FJATCapcDPBjqkAcsHlVpjY9KXmBGXUWCPWEdSu9xOd4RMgkWINU4rq4LBLYDkZNS5QyCeJlTwV9QEOEPNRkexRereEFCzKC7G9tXSYZUHxHrhnLDu%2FEDI1HxR3SvIk84pH39aLDNENmgssrVITa3JC9hagNDooXAvALgpcaQt%2BSslpiHrXN8%2B5MpzU0lI1SDpR6mjKufZO%2FozIWJuwuU95Ph2yZTxaIPIL8TfrmOP&X-Amz-Signature=233889cc13d687c65b2a20e19de4459ed27c644312bc649291be89ed63ca3ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT6N76P%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCPUJBFS0bRxCp2Ua%2BtBvvG2Akmq8CD411m59VApXd3JQIhAJ9v69DQPslSarE30b9OXgOQcr04Eg9cHRjROzwtQZp%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmkkdTatmmHa2z2Swq3AOJk1oXkiHUsxTF066S5mA3Ey7alJW%2FU73bpBCr3JaxzflK4UVK0n3Q8Vcm9R66M8oxeX%2BP%2BRycBEXGKvVJ3q6uYSvLqqP7IZs5z22yo8UT1%2F8jV5l3NNPuRA52JIWlWVdeUivobAmLYD56w%2FKE%2FfxB1VbhgU%2Bgb34uQjrdE87zePWIJI7Q5iQCJuwa%2FkFTOfL6FzigbqvZdnBl69O5%2BhvR%2BbaJvKBwH8PuiliyG4cwwD%2Fu8buKK5otD8pPfTKuoef16k83A3GQqDydPsU7A7lDvpekI07RGuCRKXP51EkRlMtq2C2KqbD0AvdT8Mgl6bxftZkrG4RCUyUrvxL9CyrHnuG6j8GvPhK3RLAe6uDuTyQ4%2BqQg0LaZ81uuEnzZ34LYMxiFCnSJicjEyaBCnm6Gwy%2F%2B4DalTOdanuzGNgn74GLPWZMCif7Ld4ucpO5wJMrPM1LS%2FRLO6zRO7oI1ef1JRSdqLll5ZhAwOk464p8z0yQu1EckVkFNewo%2BHkekaBramsXxg%2B4cA6xOD8qQnJDgaHXSa2KQVbf7rxMdA6KqgLcWBG3unEAS%2FTA%2FVFrRig6z4EgmSpUyb85RESyoIdfKv7Ey339dA6UDLkQMvBstcGmdNhuFuE9pab%2FJATCapcDPBjqkAcsHlVpjY9KXmBGXUWCPWEdSu9xOd4RMgkWINU4rq4LBLYDkZNS5QyCeJlTwV9QEOEPNRkexRereEFCzKC7G9tXSYZUHxHrhnLDu%2FEDI1HxR3SvIk84pH39aLDNENmgssrVITa3JC9hagNDooXAvALgpcaQt%2BSslpiHrXN8%2B5MpzU0lI1SDpR6mjKufZO%2FozIWJuwuU95Ph2yZTxaIPIL8TfrmOP&X-Amz-Signature=a974ec947dec178ffd83cc2f33b9a5d89e1468b0e4a7d173cb4c6ec210ef4bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

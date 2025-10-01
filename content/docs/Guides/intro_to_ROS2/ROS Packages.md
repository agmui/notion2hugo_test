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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625PF5XXM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDzn8zxwg8EJa%2B9deKaXKPsq2Y3gCwC5FwOcG24Sw378AIgJqd0AaVm1jBcvtzJzOCEMhKFb6x6JBpw%2F%2F68cdKmWL8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtIUOGH9hcOUKSCoircA%2Bu9xYzkgPHFs%2BLV61sAs0ACYzT%2BQeFRSk4VAlGY%2F2gNo9ZqOoYgCc3TImefjphn%2FEakIJAnNHzIH92SrYjpJdfNZYegCXYLunSnIUBNgQQGtES1YBSjOF3i%2BT6MomC%2Btez9Ga9Hghac6QXDNv8o9prtJe2cCAyVXQYgUHltl9ffNylZqGRAEuetP1%2F8cgel%2F%2B8FWUXqoueG4WnFwyMeELWUTCpGiGuYOY%2FoHiuIqnCDSTcEHHbsH8cVjVEHULP%2F9ZSlqEf3oEd86REHdWeE97RiTtxbGzXvius5oaASOA%2B38yWtXJ4PfvAzUwtqJCfuC5Yy15W3rpkUHpR6m%2FxRvEi1WjqUyTSZ8jlqeCW0iOIXG6IfS9mSk6nioYooTzbiBQKIujBpWawJsTpqo2AEWcyM%2F9HPppG8ch78c4GcW8%2BLJ6MRfySbzGIE0kW80VXIL6AzdlFsBi9WBKtLK5X8Qsw6DAQmbrZ8Z1%2BM8zx90w2CEQkkVhtGiXUZrZ%2F%2BLO3jpEyFAtptqYOBgM04PdTf4JcCVsrQYnmUOmuFWiscOdOYijR%2FzxAJWfMOn3eKfIBWiUQQraqyNFQEjtug8TsZCS9dbEencJ21fhUMfQeLvv%2Bz3%2FXm%2BLCvC81FDdE8MLWJ8sYGOqUBxfrUS0m0Or3%2FKJm2TOx7RV3TcEG8ut7xv3Fd3g6gt9gq5ezjXXZ5%2F2Jg4%2F3Y%2BvCLoHStySu0nRXfN4fdAS%2BLdAqvWNkmyn0kssw8SVG3MHvfDxLQsnzfu25NaBr06kR4CkPD%2F9meXRX4b46CLg%2FXp1CLjVVr%2B4X1LAqoo3PQDSFG7TaaouwR0W3wtj8eTUirvJTcmSaEsVJWX8foBpcwLIlnDASX&X-Amz-Signature=fdf961e8fefc54ab491e5e41b4ff9cfb7f35375dbf9b6808dc6176305ffc8921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625PF5XXM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDzn8zxwg8EJa%2B9deKaXKPsq2Y3gCwC5FwOcG24Sw378AIgJqd0AaVm1jBcvtzJzOCEMhKFb6x6JBpw%2F%2F68cdKmWL8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtIUOGH9hcOUKSCoircA%2Bu9xYzkgPHFs%2BLV61sAs0ACYzT%2BQeFRSk4VAlGY%2F2gNo9ZqOoYgCc3TImefjphn%2FEakIJAnNHzIH92SrYjpJdfNZYegCXYLunSnIUBNgQQGtES1YBSjOF3i%2BT6MomC%2Btez9Ga9Hghac6QXDNv8o9prtJe2cCAyVXQYgUHltl9ffNylZqGRAEuetP1%2F8cgel%2F%2B8FWUXqoueG4WnFwyMeELWUTCpGiGuYOY%2FoHiuIqnCDSTcEHHbsH8cVjVEHULP%2F9ZSlqEf3oEd86REHdWeE97RiTtxbGzXvius5oaASOA%2B38yWtXJ4PfvAzUwtqJCfuC5Yy15W3rpkUHpR6m%2FxRvEi1WjqUyTSZ8jlqeCW0iOIXG6IfS9mSk6nioYooTzbiBQKIujBpWawJsTpqo2AEWcyM%2F9HPppG8ch78c4GcW8%2BLJ6MRfySbzGIE0kW80VXIL6AzdlFsBi9WBKtLK5X8Qsw6DAQmbrZ8Z1%2BM8zx90w2CEQkkVhtGiXUZrZ%2F%2BLO3jpEyFAtptqYOBgM04PdTf4JcCVsrQYnmUOmuFWiscOdOYijR%2FzxAJWfMOn3eKfIBWiUQQraqyNFQEjtug8TsZCS9dbEencJ21fhUMfQeLvv%2Bz3%2FXm%2BLCvC81FDdE8MLWJ8sYGOqUBxfrUS0m0Or3%2FKJm2TOx7RV3TcEG8ut7xv3Fd3g6gt9gq5ezjXXZ5%2F2Jg4%2F3Y%2BvCLoHStySu0nRXfN4fdAS%2BLdAqvWNkmyn0kssw8SVG3MHvfDxLQsnzfu25NaBr06kR4CkPD%2F9meXRX4b46CLg%2FXp1CLjVVr%2B4X1LAqoo3PQDSFG7TaaouwR0W3wtj8eTUirvJTcmSaEsVJWX8foBpcwLIlnDASX&X-Amz-Signature=573568304ebe22bae3933c495166cbf2c7625bff9c6721824d162b2e082f26ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625PF5XXM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDzn8zxwg8EJa%2B9deKaXKPsq2Y3gCwC5FwOcG24Sw378AIgJqd0AaVm1jBcvtzJzOCEMhKFb6x6JBpw%2F%2F68cdKmWL8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtIUOGH9hcOUKSCoircA%2Bu9xYzkgPHFs%2BLV61sAs0ACYzT%2BQeFRSk4VAlGY%2F2gNo9ZqOoYgCc3TImefjphn%2FEakIJAnNHzIH92SrYjpJdfNZYegCXYLunSnIUBNgQQGtES1YBSjOF3i%2BT6MomC%2Btez9Ga9Hghac6QXDNv8o9prtJe2cCAyVXQYgUHltl9ffNylZqGRAEuetP1%2F8cgel%2F%2B8FWUXqoueG4WnFwyMeELWUTCpGiGuYOY%2FoHiuIqnCDSTcEHHbsH8cVjVEHULP%2F9ZSlqEf3oEd86REHdWeE97RiTtxbGzXvius5oaASOA%2B38yWtXJ4PfvAzUwtqJCfuC5Yy15W3rpkUHpR6m%2FxRvEi1WjqUyTSZ8jlqeCW0iOIXG6IfS9mSk6nioYooTzbiBQKIujBpWawJsTpqo2AEWcyM%2F9HPppG8ch78c4GcW8%2BLJ6MRfySbzGIE0kW80VXIL6AzdlFsBi9WBKtLK5X8Qsw6DAQmbrZ8Z1%2BM8zx90w2CEQkkVhtGiXUZrZ%2F%2BLO3jpEyFAtptqYOBgM04PdTf4JcCVsrQYnmUOmuFWiscOdOYijR%2FzxAJWfMOn3eKfIBWiUQQraqyNFQEjtug8TsZCS9dbEencJ21fhUMfQeLvv%2Bz3%2FXm%2BLCvC81FDdE8MLWJ8sYGOqUBxfrUS0m0Or3%2FKJm2TOx7RV3TcEG8ut7xv3Fd3g6gt9gq5ezjXXZ5%2F2Jg4%2F3Y%2BvCLoHStySu0nRXfN4fdAS%2BLdAqvWNkmyn0kssw8SVG3MHvfDxLQsnzfu25NaBr06kR4CkPD%2F9meXRX4b46CLg%2FXp1CLjVVr%2B4X1LAqoo3PQDSFG7TaaouwR0W3wtj8eTUirvJTcmSaEsVJWX8foBpcwLIlnDASX&X-Amz-Signature=667fd8e771cc2367adc3786bb27547ad5ee090726c88ccf8b1c09b1d95c1bd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625PF5XXM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDzn8zxwg8EJa%2B9deKaXKPsq2Y3gCwC5FwOcG24Sw378AIgJqd0AaVm1jBcvtzJzOCEMhKFb6x6JBpw%2F%2F68cdKmWL8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtIUOGH9hcOUKSCoircA%2Bu9xYzkgPHFs%2BLV61sAs0ACYzT%2BQeFRSk4VAlGY%2F2gNo9ZqOoYgCc3TImefjphn%2FEakIJAnNHzIH92SrYjpJdfNZYegCXYLunSnIUBNgQQGtES1YBSjOF3i%2BT6MomC%2Btez9Ga9Hghac6QXDNv8o9prtJe2cCAyVXQYgUHltl9ffNylZqGRAEuetP1%2F8cgel%2F%2B8FWUXqoueG4WnFwyMeELWUTCpGiGuYOY%2FoHiuIqnCDSTcEHHbsH8cVjVEHULP%2F9ZSlqEf3oEd86REHdWeE97RiTtxbGzXvius5oaASOA%2B38yWtXJ4PfvAzUwtqJCfuC5Yy15W3rpkUHpR6m%2FxRvEi1WjqUyTSZ8jlqeCW0iOIXG6IfS9mSk6nioYooTzbiBQKIujBpWawJsTpqo2AEWcyM%2F9HPppG8ch78c4GcW8%2BLJ6MRfySbzGIE0kW80VXIL6AzdlFsBi9WBKtLK5X8Qsw6DAQmbrZ8Z1%2BM8zx90w2CEQkkVhtGiXUZrZ%2F%2BLO3jpEyFAtptqYOBgM04PdTf4JcCVsrQYnmUOmuFWiscOdOYijR%2FzxAJWfMOn3eKfIBWiUQQraqyNFQEjtug8TsZCS9dbEencJ21fhUMfQeLvv%2Bz3%2FXm%2BLCvC81FDdE8MLWJ8sYGOqUBxfrUS0m0Or3%2FKJm2TOx7RV3TcEG8ut7xv3Fd3g6gt9gq5ezjXXZ5%2F2Jg4%2F3Y%2BvCLoHStySu0nRXfN4fdAS%2BLdAqvWNkmyn0kssw8SVG3MHvfDxLQsnzfu25NaBr06kR4CkPD%2F9meXRX4b46CLg%2FXp1CLjVVr%2B4X1LAqoo3PQDSFG7TaaouwR0W3wtj8eTUirvJTcmSaEsVJWX8foBpcwLIlnDASX&X-Amz-Signature=db33fa1fdaf46820ddb94e2e2d73b392bedb338ffb743912b2a1d6254220681a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625PF5XXM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDzn8zxwg8EJa%2B9deKaXKPsq2Y3gCwC5FwOcG24Sw378AIgJqd0AaVm1jBcvtzJzOCEMhKFb6x6JBpw%2F%2F68cdKmWL8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtIUOGH9hcOUKSCoircA%2Bu9xYzkgPHFs%2BLV61sAs0ACYzT%2BQeFRSk4VAlGY%2F2gNo9ZqOoYgCc3TImefjphn%2FEakIJAnNHzIH92SrYjpJdfNZYegCXYLunSnIUBNgQQGtES1YBSjOF3i%2BT6MomC%2Btez9Ga9Hghac6QXDNv8o9prtJe2cCAyVXQYgUHltl9ffNylZqGRAEuetP1%2F8cgel%2F%2B8FWUXqoueG4WnFwyMeELWUTCpGiGuYOY%2FoHiuIqnCDSTcEHHbsH8cVjVEHULP%2F9ZSlqEf3oEd86REHdWeE97RiTtxbGzXvius5oaASOA%2B38yWtXJ4PfvAzUwtqJCfuC5Yy15W3rpkUHpR6m%2FxRvEi1WjqUyTSZ8jlqeCW0iOIXG6IfS9mSk6nioYooTzbiBQKIujBpWawJsTpqo2AEWcyM%2F9HPppG8ch78c4GcW8%2BLJ6MRfySbzGIE0kW80VXIL6AzdlFsBi9WBKtLK5X8Qsw6DAQmbrZ8Z1%2BM8zx90w2CEQkkVhtGiXUZrZ%2F%2BLO3jpEyFAtptqYOBgM04PdTf4JcCVsrQYnmUOmuFWiscOdOYijR%2FzxAJWfMOn3eKfIBWiUQQraqyNFQEjtug8TsZCS9dbEencJ21fhUMfQeLvv%2Bz3%2FXm%2BLCvC81FDdE8MLWJ8sYGOqUBxfrUS0m0Or3%2FKJm2TOx7RV3TcEG8ut7xv3Fd3g6gt9gq5ezjXXZ5%2F2Jg4%2F3Y%2BvCLoHStySu0nRXfN4fdAS%2BLdAqvWNkmyn0kssw8SVG3MHvfDxLQsnzfu25NaBr06kR4CkPD%2F9meXRX4b46CLg%2FXp1CLjVVr%2B4X1LAqoo3PQDSFG7TaaouwR0W3wtj8eTUirvJTcmSaEsVJWX8foBpcwLIlnDASX&X-Amz-Signature=1a1b9ae32235feafa520109bedc1d661572d56f89777c7b0a204a241381f809b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625PF5XXM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDzn8zxwg8EJa%2B9deKaXKPsq2Y3gCwC5FwOcG24Sw378AIgJqd0AaVm1jBcvtzJzOCEMhKFb6x6JBpw%2F%2F68cdKmWL8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtIUOGH9hcOUKSCoircA%2Bu9xYzkgPHFs%2BLV61sAs0ACYzT%2BQeFRSk4VAlGY%2F2gNo9ZqOoYgCc3TImefjphn%2FEakIJAnNHzIH92SrYjpJdfNZYegCXYLunSnIUBNgQQGtES1YBSjOF3i%2BT6MomC%2Btez9Ga9Hghac6QXDNv8o9prtJe2cCAyVXQYgUHltl9ffNylZqGRAEuetP1%2F8cgel%2F%2B8FWUXqoueG4WnFwyMeELWUTCpGiGuYOY%2FoHiuIqnCDSTcEHHbsH8cVjVEHULP%2F9ZSlqEf3oEd86REHdWeE97RiTtxbGzXvius5oaASOA%2B38yWtXJ4PfvAzUwtqJCfuC5Yy15W3rpkUHpR6m%2FxRvEi1WjqUyTSZ8jlqeCW0iOIXG6IfS9mSk6nioYooTzbiBQKIujBpWawJsTpqo2AEWcyM%2F9HPppG8ch78c4GcW8%2BLJ6MRfySbzGIE0kW80VXIL6AzdlFsBi9WBKtLK5X8Qsw6DAQmbrZ8Z1%2BM8zx90w2CEQkkVhtGiXUZrZ%2F%2BLO3jpEyFAtptqYOBgM04PdTf4JcCVsrQYnmUOmuFWiscOdOYijR%2FzxAJWfMOn3eKfIBWiUQQraqyNFQEjtug8TsZCS9dbEencJ21fhUMfQeLvv%2Bz3%2FXm%2BLCvC81FDdE8MLWJ8sYGOqUBxfrUS0m0Or3%2FKJm2TOx7RV3TcEG8ut7xv3Fd3g6gt9gq5ezjXXZ5%2F2Jg4%2F3Y%2BvCLoHStySu0nRXfN4fdAS%2BLdAqvWNkmyn0kssw8SVG3MHvfDxLQsnzfu25NaBr06kR4CkPD%2F9meXRX4b46CLg%2FXp1CLjVVr%2B4X1LAqoo3PQDSFG7TaaouwR0W3wtj8eTUirvJTcmSaEsVJWX8foBpcwLIlnDASX&X-Amz-Signature=6a37e0897bf0b19dc6dbe0e2e14a75a6aaec7d77be517e5983d7b67a539ff715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625PF5XXM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDzn8zxwg8EJa%2B9deKaXKPsq2Y3gCwC5FwOcG24Sw378AIgJqd0AaVm1jBcvtzJzOCEMhKFb6x6JBpw%2F%2F68cdKmWL8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtIUOGH9hcOUKSCoircA%2Bu9xYzkgPHFs%2BLV61sAs0ACYzT%2BQeFRSk4VAlGY%2F2gNo9ZqOoYgCc3TImefjphn%2FEakIJAnNHzIH92SrYjpJdfNZYegCXYLunSnIUBNgQQGtES1YBSjOF3i%2BT6MomC%2Btez9Ga9Hghac6QXDNv8o9prtJe2cCAyVXQYgUHltl9ffNylZqGRAEuetP1%2F8cgel%2F%2B8FWUXqoueG4WnFwyMeELWUTCpGiGuYOY%2FoHiuIqnCDSTcEHHbsH8cVjVEHULP%2F9ZSlqEf3oEd86REHdWeE97RiTtxbGzXvius5oaASOA%2B38yWtXJ4PfvAzUwtqJCfuC5Yy15W3rpkUHpR6m%2FxRvEi1WjqUyTSZ8jlqeCW0iOIXG6IfS9mSk6nioYooTzbiBQKIujBpWawJsTpqo2AEWcyM%2F9HPppG8ch78c4GcW8%2BLJ6MRfySbzGIE0kW80VXIL6AzdlFsBi9WBKtLK5X8Qsw6DAQmbrZ8Z1%2BM8zx90w2CEQkkVhtGiXUZrZ%2F%2BLO3jpEyFAtptqYOBgM04PdTf4JcCVsrQYnmUOmuFWiscOdOYijR%2FzxAJWfMOn3eKfIBWiUQQraqyNFQEjtug8TsZCS9dbEencJ21fhUMfQeLvv%2Bz3%2FXm%2BLCvC81FDdE8MLWJ8sYGOqUBxfrUS0m0Or3%2FKJm2TOx7RV3TcEG8ut7xv3Fd3g6gt9gq5ezjXXZ5%2F2Jg4%2F3Y%2BvCLoHStySu0nRXfN4fdAS%2BLdAqvWNkmyn0kssw8SVG3MHvfDxLQsnzfu25NaBr06kR4CkPD%2F9meXRX4b46CLg%2FXp1CLjVVr%2B4X1LAqoo3PQDSFG7TaaouwR0W3wtj8eTUirvJTcmSaEsVJWX8foBpcwLIlnDASX&X-Amz-Signature=34c9802a97f2eb83906f7ace876038e68f19f5c3618efc48aad7a653b5bc716c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

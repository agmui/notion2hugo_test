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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJWOA62%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSTbY3kqOmCOujwmr4HuOr0DOc06KcIa5tMmDy4WimSAIhAMVl38NoQBrvwC%2BClUpgQthIOfb5EKYOgci654MGYjA2Kv8DCEAQABoMNjM3NDIzMTgzODA1Igyvm4Ighk4IzHg4JPcq3APdcpv%2FT6Ln97ivj9DfSxT6jHJ%2FHk2%2B2SIsUVf6Ar7bw2ROXMLqf9wqphPzug2PZTsENetCHTbw1QLMKpCoL9PocIQ1awqW%2FFOPHrDrinjcJ%2BR5jtgF%2BZnJDb6NhnHaOezBNldR%2FE60BGz9alx0eLrntIlnah1x%2BKEiLkr0v3j8EE5%2B0ftsizTcDgBn%2BR62CoMgIjGOapb4nS3K%2BoTZ4nZFghW%2FRlh3frKEZcT%2BUewrFEy4ZtpFMrmTYNi38nrWqbvOPnevlhikwHhwMVpCS%2F5lxCFxLsxIFyqBOe2HnKgi0vCM4s4THDukJirzC8zltKofnZM7k2onMM1uhbE4BVMGZs%2FcpgFm1mxMJsgD5kfe84TqNlFr5B%2B9S9A%2FLz4nMEKkGEYTYGXTHs%2Fs06WCW7hSq3ztVFf0J9FhXjOBHGoqDfdnrAi44PyV7mL2FFW5JXxowD4HtCHRzd1Qrnvvjwj0Akza787ElQ6LbRKPAtp%2BLJTKaBxjbqOkGgQFTvhh2gvM%2BRM9rGqFtHMXQLbVWtYqCRS3eI62vAk1%2FktEbSwW%2BbHjdO45pGexzrFJXQAteyi%2Bxgo9u1Q9Az%2BwXNADOMh84LvpCOYSjV6DW4PNPqqPAMu9JFg%2BtMRKunQmcTDKifbEBjqkAQJ7lQPEm0jF09Hr4XtYitVH%2BlzEmxqlrimAgotwc1jkbh8GgJOUAwmABdSdRKr3hYE5E%2BkzFYukdvVzI7Q%2BnWljqTCQgQBmcU86zLxzBZndCVDr4UXNw8iA%2BJwAm7%2BJVK5xZEHAm6RR7xFF2DZM6n700mB23RYASiOH8HIJNv9w0zFtkL%2F%2B9B3nh%2BCiVMKotzeFl4igQEnzx5%2BHrQSExe4VLacZ&X-Amz-Signature=f3b89c3b6e7dd94cb8d131fce30a096d1fd2b15ccd37f75f4649129815d817c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJWOA62%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSTbY3kqOmCOujwmr4HuOr0DOc06KcIa5tMmDy4WimSAIhAMVl38NoQBrvwC%2BClUpgQthIOfb5EKYOgci654MGYjA2Kv8DCEAQABoMNjM3NDIzMTgzODA1Igyvm4Ighk4IzHg4JPcq3APdcpv%2FT6Ln97ivj9DfSxT6jHJ%2FHk2%2B2SIsUVf6Ar7bw2ROXMLqf9wqphPzug2PZTsENetCHTbw1QLMKpCoL9PocIQ1awqW%2FFOPHrDrinjcJ%2BR5jtgF%2BZnJDb6NhnHaOezBNldR%2FE60BGz9alx0eLrntIlnah1x%2BKEiLkr0v3j8EE5%2B0ftsizTcDgBn%2BR62CoMgIjGOapb4nS3K%2BoTZ4nZFghW%2FRlh3frKEZcT%2BUewrFEy4ZtpFMrmTYNi38nrWqbvOPnevlhikwHhwMVpCS%2F5lxCFxLsxIFyqBOe2HnKgi0vCM4s4THDukJirzC8zltKofnZM7k2onMM1uhbE4BVMGZs%2FcpgFm1mxMJsgD5kfe84TqNlFr5B%2B9S9A%2FLz4nMEKkGEYTYGXTHs%2Fs06WCW7hSq3ztVFf0J9FhXjOBHGoqDfdnrAi44PyV7mL2FFW5JXxowD4HtCHRzd1Qrnvvjwj0Akza787ElQ6LbRKPAtp%2BLJTKaBxjbqOkGgQFTvhh2gvM%2BRM9rGqFtHMXQLbVWtYqCRS3eI62vAk1%2FktEbSwW%2BbHjdO45pGexzrFJXQAteyi%2Bxgo9u1Q9Az%2BwXNADOMh84LvpCOYSjV6DW4PNPqqPAMu9JFg%2BtMRKunQmcTDKifbEBjqkAQJ7lQPEm0jF09Hr4XtYitVH%2BlzEmxqlrimAgotwc1jkbh8GgJOUAwmABdSdRKr3hYE5E%2BkzFYukdvVzI7Q%2BnWljqTCQgQBmcU86zLxzBZndCVDr4UXNw8iA%2BJwAm7%2BJVK5xZEHAm6RR7xFF2DZM6n700mB23RYASiOH8HIJNv9w0zFtkL%2F%2B9B3nh%2BCiVMKotzeFl4igQEnzx5%2BHrQSExe4VLacZ&X-Amz-Signature=01d03d087cdd3dddd57476221fd622370b115f4c9b9ad14773379145515c4534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJWOA62%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSTbY3kqOmCOujwmr4HuOr0DOc06KcIa5tMmDy4WimSAIhAMVl38NoQBrvwC%2BClUpgQthIOfb5EKYOgci654MGYjA2Kv8DCEAQABoMNjM3NDIzMTgzODA1Igyvm4Ighk4IzHg4JPcq3APdcpv%2FT6Ln97ivj9DfSxT6jHJ%2FHk2%2B2SIsUVf6Ar7bw2ROXMLqf9wqphPzug2PZTsENetCHTbw1QLMKpCoL9PocIQ1awqW%2FFOPHrDrinjcJ%2BR5jtgF%2BZnJDb6NhnHaOezBNldR%2FE60BGz9alx0eLrntIlnah1x%2BKEiLkr0v3j8EE5%2B0ftsizTcDgBn%2BR62CoMgIjGOapb4nS3K%2BoTZ4nZFghW%2FRlh3frKEZcT%2BUewrFEy4ZtpFMrmTYNi38nrWqbvOPnevlhikwHhwMVpCS%2F5lxCFxLsxIFyqBOe2HnKgi0vCM4s4THDukJirzC8zltKofnZM7k2onMM1uhbE4BVMGZs%2FcpgFm1mxMJsgD5kfe84TqNlFr5B%2B9S9A%2FLz4nMEKkGEYTYGXTHs%2Fs06WCW7hSq3ztVFf0J9FhXjOBHGoqDfdnrAi44PyV7mL2FFW5JXxowD4HtCHRzd1Qrnvvjwj0Akza787ElQ6LbRKPAtp%2BLJTKaBxjbqOkGgQFTvhh2gvM%2BRM9rGqFtHMXQLbVWtYqCRS3eI62vAk1%2FktEbSwW%2BbHjdO45pGexzrFJXQAteyi%2Bxgo9u1Q9Az%2BwXNADOMh84LvpCOYSjV6DW4PNPqqPAMu9JFg%2BtMRKunQmcTDKifbEBjqkAQJ7lQPEm0jF09Hr4XtYitVH%2BlzEmxqlrimAgotwc1jkbh8GgJOUAwmABdSdRKr3hYE5E%2BkzFYukdvVzI7Q%2BnWljqTCQgQBmcU86zLxzBZndCVDr4UXNw8iA%2BJwAm7%2BJVK5xZEHAm6RR7xFF2DZM6n700mB23RYASiOH8HIJNv9w0zFtkL%2F%2B9B3nh%2BCiVMKotzeFl4igQEnzx5%2BHrQSExe4VLacZ&X-Amz-Signature=76447f92054439b128a5275e61244e01b079bbe3ce9883cafefde7f2c2196995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJWOA62%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSTbY3kqOmCOujwmr4HuOr0DOc06KcIa5tMmDy4WimSAIhAMVl38NoQBrvwC%2BClUpgQthIOfb5EKYOgci654MGYjA2Kv8DCEAQABoMNjM3NDIzMTgzODA1Igyvm4Ighk4IzHg4JPcq3APdcpv%2FT6Ln97ivj9DfSxT6jHJ%2FHk2%2B2SIsUVf6Ar7bw2ROXMLqf9wqphPzug2PZTsENetCHTbw1QLMKpCoL9PocIQ1awqW%2FFOPHrDrinjcJ%2BR5jtgF%2BZnJDb6NhnHaOezBNldR%2FE60BGz9alx0eLrntIlnah1x%2BKEiLkr0v3j8EE5%2B0ftsizTcDgBn%2BR62CoMgIjGOapb4nS3K%2BoTZ4nZFghW%2FRlh3frKEZcT%2BUewrFEy4ZtpFMrmTYNi38nrWqbvOPnevlhikwHhwMVpCS%2F5lxCFxLsxIFyqBOe2HnKgi0vCM4s4THDukJirzC8zltKofnZM7k2onMM1uhbE4BVMGZs%2FcpgFm1mxMJsgD5kfe84TqNlFr5B%2B9S9A%2FLz4nMEKkGEYTYGXTHs%2Fs06WCW7hSq3ztVFf0J9FhXjOBHGoqDfdnrAi44PyV7mL2FFW5JXxowD4HtCHRzd1Qrnvvjwj0Akza787ElQ6LbRKPAtp%2BLJTKaBxjbqOkGgQFTvhh2gvM%2BRM9rGqFtHMXQLbVWtYqCRS3eI62vAk1%2FktEbSwW%2BbHjdO45pGexzrFJXQAteyi%2Bxgo9u1Q9Az%2BwXNADOMh84LvpCOYSjV6DW4PNPqqPAMu9JFg%2BtMRKunQmcTDKifbEBjqkAQJ7lQPEm0jF09Hr4XtYitVH%2BlzEmxqlrimAgotwc1jkbh8GgJOUAwmABdSdRKr3hYE5E%2BkzFYukdvVzI7Q%2BnWljqTCQgQBmcU86zLxzBZndCVDr4UXNw8iA%2BJwAm7%2BJVK5xZEHAm6RR7xFF2DZM6n700mB23RYASiOH8HIJNv9w0zFtkL%2F%2B9B3nh%2BCiVMKotzeFl4igQEnzx5%2BHrQSExe4VLacZ&X-Amz-Signature=6dc990ffda0c413f80eb28337bced0a389a1a84f861cc3cd4c19af98a9bc434f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJWOA62%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSTbY3kqOmCOujwmr4HuOr0DOc06KcIa5tMmDy4WimSAIhAMVl38NoQBrvwC%2BClUpgQthIOfb5EKYOgci654MGYjA2Kv8DCEAQABoMNjM3NDIzMTgzODA1Igyvm4Ighk4IzHg4JPcq3APdcpv%2FT6Ln97ivj9DfSxT6jHJ%2FHk2%2B2SIsUVf6Ar7bw2ROXMLqf9wqphPzug2PZTsENetCHTbw1QLMKpCoL9PocIQ1awqW%2FFOPHrDrinjcJ%2BR5jtgF%2BZnJDb6NhnHaOezBNldR%2FE60BGz9alx0eLrntIlnah1x%2BKEiLkr0v3j8EE5%2B0ftsizTcDgBn%2BR62CoMgIjGOapb4nS3K%2BoTZ4nZFghW%2FRlh3frKEZcT%2BUewrFEy4ZtpFMrmTYNi38nrWqbvOPnevlhikwHhwMVpCS%2F5lxCFxLsxIFyqBOe2HnKgi0vCM4s4THDukJirzC8zltKofnZM7k2onMM1uhbE4BVMGZs%2FcpgFm1mxMJsgD5kfe84TqNlFr5B%2B9S9A%2FLz4nMEKkGEYTYGXTHs%2Fs06WCW7hSq3ztVFf0J9FhXjOBHGoqDfdnrAi44PyV7mL2FFW5JXxowD4HtCHRzd1Qrnvvjwj0Akza787ElQ6LbRKPAtp%2BLJTKaBxjbqOkGgQFTvhh2gvM%2BRM9rGqFtHMXQLbVWtYqCRS3eI62vAk1%2FktEbSwW%2BbHjdO45pGexzrFJXQAteyi%2Bxgo9u1Q9Az%2BwXNADOMh84LvpCOYSjV6DW4PNPqqPAMu9JFg%2BtMRKunQmcTDKifbEBjqkAQJ7lQPEm0jF09Hr4XtYitVH%2BlzEmxqlrimAgotwc1jkbh8GgJOUAwmABdSdRKr3hYE5E%2BkzFYukdvVzI7Q%2BnWljqTCQgQBmcU86zLxzBZndCVDr4UXNw8iA%2BJwAm7%2BJVK5xZEHAm6RR7xFF2DZM6n700mB23RYASiOH8HIJNv9w0zFtkL%2F%2B9B3nh%2BCiVMKotzeFl4igQEnzx5%2BHrQSExe4VLacZ&X-Amz-Signature=645d414456111a8c161ea0cb89a4baddd860459e1c92c5b0c8a0bc7476e36269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJWOA62%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSTbY3kqOmCOujwmr4HuOr0DOc06KcIa5tMmDy4WimSAIhAMVl38NoQBrvwC%2BClUpgQthIOfb5EKYOgci654MGYjA2Kv8DCEAQABoMNjM3NDIzMTgzODA1Igyvm4Ighk4IzHg4JPcq3APdcpv%2FT6Ln97ivj9DfSxT6jHJ%2FHk2%2B2SIsUVf6Ar7bw2ROXMLqf9wqphPzug2PZTsENetCHTbw1QLMKpCoL9PocIQ1awqW%2FFOPHrDrinjcJ%2BR5jtgF%2BZnJDb6NhnHaOezBNldR%2FE60BGz9alx0eLrntIlnah1x%2BKEiLkr0v3j8EE5%2B0ftsizTcDgBn%2BR62CoMgIjGOapb4nS3K%2BoTZ4nZFghW%2FRlh3frKEZcT%2BUewrFEy4ZtpFMrmTYNi38nrWqbvOPnevlhikwHhwMVpCS%2F5lxCFxLsxIFyqBOe2HnKgi0vCM4s4THDukJirzC8zltKofnZM7k2onMM1uhbE4BVMGZs%2FcpgFm1mxMJsgD5kfe84TqNlFr5B%2B9S9A%2FLz4nMEKkGEYTYGXTHs%2Fs06WCW7hSq3ztVFf0J9FhXjOBHGoqDfdnrAi44PyV7mL2FFW5JXxowD4HtCHRzd1Qrnvvjwj0Akza787ElQ6LbRKPAtp%2BLJTKaBxjbqOkGgQFTvhh2gvM%2BRM9rGqFtHMXQLbVWtYqCRS3eI62vAk1%2FktEbSwW%2BbHjdO45pGexzrFJXQAteyi%2Bxgo9u1Q9Az%2BwXNADOMh84LvpCOYSjV6DW4PNPqqPAMu9JFg%2BtMRKunQmcTDKifbEBjqkAQJ7lQPEm0jF09Hr4XtYitVH%2BlzEmxqlrimAgotwc1jkbh8GgJOUAwmABdSdRKr3hYE5E%2BkzFYukdvVzI7Q%2BnWljqTCQgQBmcU86zLxzBZndCVDr4UXNw8iA%2BJwAm7%2BJVK5xZEHAm6RR7xFF2DZM6n700mB23RYASiOH8HIJNv9w0zFtkL%2F%2B9B3nh%2BCiVMKotzeFl4igQEnzx5%2BHrQSExe4VLacZ&X-Amz-Signature=cbe7e70a89f2ffd73a6c44e6e933a48b8add01f09675c29d47b4b9270da2fa68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJWOA62%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSTbY3kqOmCOujwmr4HuOr0DOc06KcIa5tMmDy4WimSAIhAMVl38NoQBrvwC%2BClUpgQthIOfb5EKYOgci654MGYjA2Kv8DCEAQABoMNjM3NDIzMTgzODA1Igyvm4Ighk4IzHg4JPcq3APdcpv%2FT6Ln97ivj9DfSxT6jHJ%2FHk2%2B2SIsUVf6Ar7bw2ROXMLqf9wqphPzug2PZTsENetCHTbw1QLMKpCoL9PocIQ1awqW%2FFOPHrDrinjcJ%2BR5jtgF%2BZnJDb6NhnHaOezBNldR%2FE60BGz9alx0eLrntIlnah1x%2BKEiLkr0v3j8EE5%2B0ftsizTcDgBn%2BR62CoMgIjGOapb4nS3K%2BoTZ4nZFghW%2FRlh3frKEZcT%2BUewrFEy4ZtpFMrmTYNi38nrWqbvOPnevlhikwHhwMVpCS%2F5lxCFxLsxIFyqBOe2HnKgi0vCM4s4THDukJirzC8zltKofnZM7k2onMM1uhbE4BVMGZs%2FcpgFm1mxMJsgD5kfe84TqNlFr5B%2B9S9A%2FLz4nMEKkGEYTYGXTHs%2Fs06WCW7hSq3ztVFf0J9FhXjOBHGoqDfdnrAi44PyV7mL2FFW5JXxowD4HtCHRzd1Qrnvvjwj0Akza787ElQ6LbRKPAtp%2BLJTKaBxjbqOkGgQFTvhh2gvM%2BRM9rGqFtHMXQLbVWtYqCRS3eI62vAk1%2FktEbSwW%2BbHjdO45pGexzrFJXQAteyi%2Bxgo9u1Q9Az%2BwXNADOMh84LvpCOYSjV6DW4PNPqqPAMu9JFg%2BtMRKunQmcTDKifbEBjqkAQJ7lQPEm0jF09Hr4XtYitVH%2BlzEmxqlrimAgotwc1jkbh8GgJOUAwmABdSdRKr3hYE5E%2BkzFYukdvVzI7Q%2BnWljqTCQgQBmcU86zLxzBZndCVDr4UXNw8iA%2BJwAm7%2BJVK5xZEHAm6RR7xFF2DZM6n700mB23RYASiOH8HIJNv9w0zFtkL%2F%2B9B3nh%2BCiVMKotzeFl4igQEnzx5%2BHrQSExe4VLacZ&X-Amz-Signature=ee13ef98d4528c65e5e5807cf3a5d2996d42c292af73e553ad85a4d22b98f48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

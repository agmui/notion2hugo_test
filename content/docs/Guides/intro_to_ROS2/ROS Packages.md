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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXYESZP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAR2M3xXBloyjqwln3ZXnpp1PDTbeyXu4LJh2pnKiBDNAiEAtHVl9JobU7OFQbfXJdrsP2zJwayNKPX0CCRfltHmSVYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0%2B%2B40WWcMBUqEYwCrcAyUcbGkgW%2FBtQRupu8wIKtI1QG%2FPSYd95XVU%2BCe1sct%2FslB5UL38HGHdKn0NG4WCgkdbXFJ8lwoSpELRWltojhiezTEW%2F0AWFPYLO0wGc16%2BMTJRMDnobHDLYlosDv3eCn5oxzP5csiHWRjrGO0fOnp8LUpC%2Br2xbHllK%2BSqXsXdDeXBDEauhlJzELKtjR4JAhkwqpIAwcjjSegx7SsaNp%2BYt9vEcw9LzAR4eMnRj1cXyURV1Q8jtc4d2hwmEhyBLbY93CcDQ0veqxEZsDMvhbNqsSqYpp8CKougSeiF2GJtUfh%2Bfmjpbm4xVUvuJqCeyeDsaRhstmdPLk5KfNZkW6GqvrS1Uw0t%2Bjn8leS60wyxpYKrwYK6BB4Xjc490XFn67Nj1dU1Yifct03tAMGQjMBrcnsp%2BaxQvjxaYKo2KmdVoXdyis1liNhPmCs8pUiBRr5wf9CQhfTpR5d14Gp4%2Bk0ZfOQcWGo83pUU9DrRqUEiHOsagbfl2jmSYXSKKtiCvSxllGY%2FFRtvHqHErc2PirmcuUTacA4b9EQ0OAlekLbXI0hBXednXB7FoC2RseI00F1Lyi9Sz6yjK5dtgvZcbCZwYA7B7G4wkvo1ODvKP6WY0y1HwL8a44KVbGJUMI%2BZ874GOqUBRuv77VR2sPTq08T9Ue5h9F%2F5Fvh6q9i6yWY0gn2LJi7Mw6tHaG2vAbJL9nSRQVsh3jJwHcqna3GeWxRZ8Ccyt%2BOqSk5%2FQBQZt56Aat6YrpxQcQI03Hrl0I1WFurLvAnQG4DSsqZ4V4Ew2b5ovKZyuLNXr6H5OZfAGuXMnzNc6%2FMQyAkGLIanJM7qn2yPCnWlQM0mWEaDqJb3yPYvpiYNbCS3H9zZ&X-Amz-Signature=a98799ce1263f5f806ff3ea8054b1bf8ab0d77fac10d339fd182996e566195ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXYESZP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAR2M3xXBloyjqwln3ZXnpp1PDTbeyXu4LJh2pnKiBDNAiEAtHVl9JobU7OFQbfXJdrsP2zJwayNKPX0CCRfltHmSVYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0%2B%2B40WWcMBUqEYwCrcAyUcbGkgW%2FBtQRupu8wIKtI1QG%2FPSYd95XVU%2BCe1sct%2FslB5UL38HGHdKn0NG4WCgkdbXFJ8lwoSpELRWltojhiezTEW%2F0AWFPYLO0wGc16%2BMTJRMDnobHDLYlosDv3eCn5oxzP5csiHWRjrGO0fOnp8LUpC%2Br2xbHllK%2BSqXsXdDeXBDEauhlJzELKtjR4JAhkwqpIAwcjjSegx7SsaNp%2BYt9vEcw9LzAR4eMnRj1cXyURV1Q8jtc4d2hwmEhyBLbY93CcDQ0veqxEZsDMvhbNqsSqYpp8CKougSeiF2GJtUfh%2Bfmjpbm4xVUvuJqCeyeDsaRhstmdPLk5KfNZkW6GqvrS1Uw0t%2Bjn8leS60wyxpYKrwYK6BB4Xjc490XFn67Nj1dU1Yifct03tAMGQjMBrcnsp%2BaxQvjxaYKo2KmdVoXdyis1liNhPmCs8pUiBRr5wf9CQhfTpR5d14Gp4%2Bk0ZfOQcWGo83pUU9DrRqUEiHOsagbfl2jmSYXSKKtiCvSxllGY%2FFRtvHqHErc2PirmcuUTacA4b9EQ0OAlekLbXI0hBXednXB7FoC2RseI00F1Lyi9Sz6yjK5dtgvZcbCZwYA7B7G4wkvo1ODvKP6WY0y1HwL8a44KVbGJUMI%2BZ874GOqUBRuv77VR2sPTq08T9Ue5h9F%2F5Fvh6q9i6yWY0gn2LJi7Mw6tHaG2vAbJL9nSRQVsh3jJwHcqna3GeWxRZ8Ccyt%2BOqSk5%2FQBQZt56Aat6YrpxQcQI03Hrl0I1WFurLvAnQG4DSsqZ4V4Ew2b5ovKZyuLNXr6H5OZfAGuXMnzNc6%2FMQyAkGLIanJM7qn2yPCnWlQM0mWEaDqJb3yPYvpiYNbCS3H9zZ&X-Amz-Signature=d0febfeff4f98fe35ef7cec3b7ce8f61017dcb7c49d3c38c887cdd6cb4b20ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXYESZP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAR2M3xXBloyjqwln3ZXnpp1PDTbeyXu4LJh2pnKiBDNAiEAtHVl9JobU7OFQbfXJdrsP2zJwayNKPX0CCRfltHmSVYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0%2B%2B40WWcMBUqEYwCrcAyUcbGkgW%2FBtQRupu8wIKtI1QG%2FPSYd95XVU%2BCe1sct%2FslB5UL38HGHdKn0NG4WCgkdbXFJ8lwoSpELRWltojhiezTEW%2F0AWFPYLO0wGc16%2BMTJRMDnobHDLYlosDv3eCn5oxzP5csiHWRjrGO0fOnp8LUpC%2Br2xbHllK%2BSqXsXdDeXBDEauhlJzELKtjR4JAhkwqpIAwcjjSegx7SsaNp%2BYt9vEcw9LzAR4eMnRj1cXyURV1Q8jtc4d2hwmEhyBLbY93CcDQ0veqxEZsDMvhbNqsSqYpp8CKougSeiF2GJtUfh%2Bfmjpbm4xVUvuJqCeyeDsaRhstmdPLk5KfNZkW6GqvrS1Uw0t%2Bjn8leS60wyxpYKrwYK6BB4Xjc490XFn67Nj1dU1Yifct03tAMGQjMBrcnsp%2BaxQvjxaYKo2KmdVoXdyis1liNhPmCs8pUiBRr5wf9CQhfTpR5d14Gp4%2Bk0ZfOQcWGo83pUU9DrRqUEiHOsagbfl2jmSYXSKKtiCvSxllGY%2FFRtvHqHErc2PirmcuUTacA4b9EQ0OAlekLbXI0hBXednXB7FoC2RseI00F1Lyi9Sz6yjK5dtgvZcbCZwYA7B7G4wkvo1ODvKP6WY0y1HwL8a44KVbGJUMI%2BZ874GOqUBRuv77VR2sPTq08T9Ue5h9F%2F5Fvh6q9i6yWY0gn2LJi7Mw6tHaG2vAbJL9nSRQVsh3jJwHcqna3GeWxRZ8Ccyt%2BOqSk5%2FQBQZt56Aat6YrpxQcQI03Hrl0I1WFurLvAnQG4DSsqZ4V4Ew2b5ovKZyuLNXr6H5OZfAGuXMnzNc6%2FMQyAkGLIanJM7qn2yPCnWlQM0mWEaDqJb3yPYvpiYNbCS3H9zZ&X-Amz-Signature=4d34e6572841e942fa47963539fa042de3afdb579e64f38bebccd474388814c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXYESZP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAR2M3xXBloyjqwln3ZXnpp1PDTbeyXu4LJh2pnKiBDNAiEAtHVl9JobU7OFQbfXJdrsP2zJwayNKPX0CCRfltHmSVYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0%2B%2B40WWcMBUqEYwCrcAyUcbGkgW%2FBtQRupu8wIKtI1QG%2FPSYd95XVU%2BCe1sct%2FslB5UL38HGHdKn0NG4WCgkdbXFJ8lwoSpELRWltojhiezTEW%2F0AWFPYLO0wGc16%2BMTJRMDnobHDLYlosDv3eCn5oxzP5csiHWRjrGO0fOnp8LUpC%2Br2xbHllK%2BSqXsXdDeXBDEauhlJzELKtjR4JAhkwqpIAwcjjSegx7SsaNp%2BYt9vEcw9LzAR4eMnRj1cXyURV1Q8jtc4d2hwmEhyBLbY93CcDQ0veqxEZsDMvhbNqsSqYpp8CKougSeiF2GJtUfh%2Bfmjpbm4xVUvuJqCeyeDsaRhstmdPLk5KfNZkW6GqvrS1Uw0t%2Bjn8leS60wyxpYKrwYK6BB4Xjc490XFn67Nj1dU1Yifct03tAMGQjMBrcnsp%2BaxQvjxaYKo2KmdVoXdyis1liNhPmCs8pUiBRr5wf9CQhfTpR5d14Gp4%2Bk0ZfOQcWGo83pUU9DrRqUEiHOsagbfl2jmSYXSKKtiCvSxllGY%2FFRtvHqHErc2PirmcuUTacA4b9EQ0OAlekLbXI0hBXednXB7FoC2RseI00F1Lyi9Sz6yjK5dtgvZcbCZwYA7B7G4wkvo1ODvKP6WY0y1HwL8a44KVbGJUMI%2BZ874GOqUBRuv77VR2sPTq08T9Ue5h9F%2F5Fvh6q9i6yWY0gn2LJi7Mw6tHaG2vAbJL9nSRQVsh3jJwHcqna3GeWxRZ8Ccyt%2BOqSk5%2FQBQZt56Aat6YrpxQcQI03Hrl0I1WFurLvAnQG4DSsqZ4V4Ew2b5ovKZyuLNXr6H5OZfAGuXMnzNc6%2FMQyAkGLIanJM7qn2yPCnWlQM0mWEaDqJb3yPYvpiYNbCS3H9zZ&X-Amz-Signature=be0782401aef0e429cbbeacd4cfcdc0964264e45451ff7451747c4cb3c51995f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXYESZP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAR2M3xXBloyjqwln3ZXnpp1PDTbeyXu4LJh2pnKiBDNAiEAtHVl9JobU7OFQbfXJdrsP2zJwayNKPX0CCRfltHmSVYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0%2B%2B40WWcMBUqEYwCrcAyUcbGkgW%2FBtQRupu8wIKtI1QG%2FPSYd95XVU%2BCe1sct%2FslB5UL38HGHdKn0NG4WCgkdbXFJ8lwoSpELRWltojhiezTEW%2F0AWFPYLO0wGc16%2BMTJRMDnobHDLYlosDv3eCn5oxzP5csiHWRjrGO0fOnp8LUpC%2Br2xbHllK%2BSqXsXdDeXBDEauhlJzELKtjR4JAhkwqpIAwcjjSegx7SsaNp%2BYt9vEcw9LzAR4eMnRj1cXyURV1Q8jtc4d2hwmEhyBLbY93CcDQ0veqxEZsDMvhbNqsSqYpp8CKougSeiF2GJtUfh%2Bfmjpbm4xVUvuJqCeyeDsaRhstmdPLk5KfNZkW6GqvrS1Uw0t%2Bjn8leS60wyxpYKrwYK6BB4Xjc490XFn67Nj1dU1Yifct03tAMGQjMBrcnsp%2BaxQvjxaYKo2KmdVoXdyis1liNhPmCs8pUiBRr5wf9CQhfTpR5d14Gp4%2Bk0ZfOQcWGo83pUU9DrRqUEiHOsagbfl2jmSYXSKKtiCvSxllGY%2FFRtvHqHErc2PirmcuUTacA4b9EQ0OAlekLbXI0hBXednXB7FoC2RseI00F1Lyi9Sz6yjK5dtgvZcbCZwYA7B7G4wkvo1ODvKP6WY0y1HwL8a44KVbGJUMI%2BZ874GOqUBRuv77VR2sPTq08T9Ue5h9F%2F5Fvh6q9i6yWY0gn2LJi7Mw6tHaG2vAbJL9nSRQVsh3jJwHcqna3GeWxRZ8Ccyt%2BOqSk5%2FQBQZt56Aat6YrpxQcQI03Hrl0I1WFurLvAnQG4DSsqZ4V4Ew2b5ovKZyuLNXr6H5OZfAGuXMnzNc6%2FMQyAkGLIanJM7qn2yPCnWlQM0mWEaDqJb3yPYvpiYNbCS3H9zZ&X-Amz-Signature=551ecb38d0a1fc378b416b175ba2d4ee99bc794993b3b9046fdfe8ff47434d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXYESZP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAR2M3xXBloyjqwln3ZXnpp1PDTbeyXu4LJh2pnKiBDNAiEAtHVl9JobU7OFQbfXJdrsP2zJwayNKPX0CCRfltHmSVYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0%2B%2B40WWcMBUqEYwCrcAyUcbGkgW%2FBtQRupu8wIKtI1QG%2FPSYd95XVU%2BCe1sct%2FslB5UL38HGHdKn0NG4WCgkdbXFJ8lwoSpELRWltojhiezTEW%2F0AWFPYLO0wGc16%2BMTJRMDnobHDLYlosDv3eCn5oxzP5csiHWRjrGO0fOnp8LUpC%2Br2xbHllK%2BSqXsXdDeXBDEauhlJzELKtjR4JAhkwqpIAwcjjSegx7SsaNp%2BYt9vEcw9LzAR4eMnRj1cXyURV1Q8jtc4d2hwmEhyBLbY93CcDQ0veqxEZsDMvhbNqsSqYpp8CKougSeiF2GJtUfh%2Bfmjpbm4xVUvuJqCeyeDsaRhstmdPLk5KfNZkW6GqvrS1Uw0t%2Bjn8leS60wyxpYKrwYK6BB4Xjc490XFn67Nj1dU1Yifct03tAMGQjMBrcnsp%2BaxQvjxaYKo2KmdVoXdyis1liNhPmCs8pUiBRr5wf9CQhfTpR5d14Gp4%2Bk0ZfOQcWGo83pUU9DrRqUEiHOsagbfl2jmSYXSKKtiCvSxllGY%2FFRtvHqHErc2PirmcuUTacA4b9EQ0OAlekLbXI0hBXednXB7FoC2RseI00F1Lyi9Sz6yjK5dtgvZcbCZwYA7B7G4wkvo1ODvKP6WY0y1HwL8a44KVbGJUMI%2BZ874GOqUBRuv77VR2sPTq08T9Ue5h9F%2F5Fvh6q9i6yWY0gn2LJi7Mw6tHaG2vAbJL9nSRQVsh3jJwHcqna3GeWxRZ8Ccyt%2BOqSk5%2FQBQZt56Aat6YrpxQcQI03Hrl0I1WFurLvAnQG4DSsqZ4V4Ew2b5ovKZyuLNXr6H5OZfAGuXMnzNc6%2FMQyAkGLIanJM7qn2yPCnWlQM0mWEaDqJb3yPYvpiYNbCS3H9zZ&X-Amz-Signature=ad212d4cbd019203cb53f04070199867fd86f6ae4fae34cc068ffdbc51714bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BXYESZP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAR2M3xXBloyjqwln3ZXnpp1PDTbeyXu4LJh2pnKiBDNAiEAtHVl9JobU7OFQbfXJdrsP2zJwayNKPX0CCRfltHmSVYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0%2B%2B40WWcMBUqEYwCrcAyUcbGkgW%2FBtQRupu8wIKtI1QG%2FPSYd95XVU%2BCe1sct%2FslB5UL38HGHdKn0NG4WCgkdbXFJ8lwoSpELRWltojhiezTEW%2F0AWFPYLO0wGc16%2BMTJRMDnobHDLYlosDv3eCn5oxzP5csiHWRjrGO0fOnp8LUpC%2Br2xbHllK%2BSqXsXdDeXBDEauhlJzELKtjR4JAhkwqpIAwcjjSegx7SsaNp%2BYt9vEcw9LzAR4eMnRj1cXyURV1Q8jtc4d2hwmEhyBLbY93CcDQ0veqxEZsDMvhbNqsSqYpp8CKougSeiF2GJtUfh%2Bfmjpbm4xVUvuJqCeyeDsaRhstmdPLk5KfNZkW6GqvrS1Uw0t%2Bjn8leS60wyxpYKrwYK6BB4Xjc490XFn67Nj1dU1Yifct03tAMGQjMBrcnsp%2BaxQvjxaYKo2KmdVoXdyis1liNhPmCs8pUiBRr5wf9CQhfTpR5d14Gp4%2Bk0ZfOQcWGo83pUU9DrRqUEiHOsagbfl2jmSYXSKKtiCvSxllGY%2FFRtvHqHErc2PirmcuUTacA4b9EQ0OAlekLbXI0hBXednXB7FoC2RseI00F1Lyi9Sz6yjK5dtgvZcbCZwYA7B7G4wkvo1ODvKP6WY0y1HwL8a44KVbGJUMI%2BZ874GOqUBRuv77VR2sPTq08T9Ue5h9F%2F5Fvh6q9i6yWY0gn2LJi7Mw6tHaG2vAbJL9nSRQVsh3jJwHcqna3GeWxRZ8Ccyt%2BOqSk5%2FQBQZt56Aat6YrpxQcQI03Hrl0I1WFurLvAnQG4DSsqZ4V4Ew2b5ovKZyuLNXr6H5OZfAGuXMnzNc6%2FMQyAkGLIanJM7qn2yPCnWlQM0mWEaDqJb3yPYvpiYNbCS3H9zZ&X-Amz-Signature=b4d2579067e10a0023e3585f66be61daf97a8fc71612a24ece3fcaa86facc035&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

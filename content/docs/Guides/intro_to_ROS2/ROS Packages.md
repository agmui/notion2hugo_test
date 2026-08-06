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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV7MT3W%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAr32YIjP9eAQ32ONn4zf9RG8Sh%2Fv5thrMXQQFdHIl6%2BAiB%2FB5gyi3SAxlFgyruw9aAQZi%2Bp6UEbS%2FAjJfzW5iAilir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMPXrJB1WB0pNH4HLwKtwD7hEifVyyJKqdO1WDnxFzO404LhFLHWbKkdPac6MrCSg7qyUaen1jKB9g9xmzKaH7UsU9B4Rvud4M3NlYjQ1a%2B13QqIaeIRN1KRpGbGzsz5DaL6M3ynssxOM1oS68IgBK6XbYnZzAO4vkjhbOEVPHHgu0tv8oiWxiwp%2F2IPis%2FRXpB8xDsAm%2FJvrX35N7kWM0Yu1e3yiGjYDRKNMJOjTERR6aO2ZCK5h0m67NaMuxMLELmt9B8PeH%2BNd3ZFf2RrThhstCLxHPNVmL%2B6lU8Y8IWdaZrKgpU3WQO12D9jzixDYsJnwaxoEkvBm%2BxiRvGt2%2FYPFUdZ8AFvHHFOxeXEeEbSE80SL1A6pno3wi907C3HsU%2FF86WIjH7CJk9wrTgAhBaj8%2Fg56%2FGDFNnoX9h1pzh1LXkk9d2OeQUhCa348%2FWQwbwvrMKITE0L7V0lfiHsTpfCNSoyczyvSKqj1DX%2B8%2BFwrsSqv7JF0hD7sB1RWFcMqzx3cC6jee4nRKAZOEra%2FIdgrMuoqTMfYe2P6z07KInEpkW%2FSu4bsA%2ByYqL2eu2hlG%2FikFERrJU6x%2BCRClKXPLnVTzmC7NSEPOeAaFRiG5a8NLKl3NZNawJs6Q3%2Fzah%2FEgevfLMxYtne2CBoIwqtTP0wY6pgEu0aaqIJ6z%2BivKcA%2Bi40JCZwYGzAH4qZubBFWgxub%2BgMlCKGZ5PyZ1vSlIjJxkq3uGAwVZsrIJJMq1zileAfsYKyYg6wA1%2ByizfsDfehNRxyzxN4w6Yp6qrX5LitzyM80uwHZIAvtI4vbPtmJTx%2FoKJjMRAlVagSmhLmc5Kx3lLl9gz5RuHEr49x4rf7IHBaGgnH4if6mxlokGn66osI%2Fkj7pWYdCo&X-Amz-Signature=fa9638ade0cf1f879d971e6bb94db9c37ab207e9874212492d3427bfbd8ba2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV7MT3W%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAr32YIjP9eAQ32ONn4zf9RG8Sh%2Fv5thrMXQQFdHIl6%2BAiB%2FB5gyi3SAxlFgyruw9aAQZi%2Bp6UEbS%2FAjJfzW5iAilir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMPXrJB1WB0pNH4HLwKtwD7hEifVyyJKqdO1WDnxFzO404LhFLHWbKkdPac6MrCSg7qyUaen1jKB9g9xmzKaH7UsU9B4Rvud4M3NlYjQ1a%2B13QqIaeIRN1KRpGbGzsz5DaL6M3ynssxOM1oS68IgBK6XbYnZzAO4vkjhbOEVPHHgu0tv8oiWxiwp%2F2IPis%2FRXpB8xDsAm%2FJvrX35N7kWM0Yu1e3yiGjYDRKNMJOjTERR6aO2ZCK5h0m67NaMuxMLELmt9B8PeH%2BNd3ZFf2RrThhstCLxHPNVmL%2B6lU8Y8IWdaZrKgpU3WQO12D9jzixDYsJnwaxoEkvBm%2BxiRvGt2%2FYPFUdZ8AFvHHFOxeXEeEbSE80SL1A6pno3wi907C3HsU%2FF86WIjH7CJk9wrTgAhBaj8%2Fg56%2FGDFNnoX9h1pzh1LXkk9d2OeQUhCa348%2FWQwbwvrMKITE0L7V0lfiHsTpfCNSoyczyvSKqj1DX%2B8%2BFwrsSqv7JF0hD7sB1RWFcMqzx3cC6jee4nRKAZOEra%2FIdgrMuoqTMfYe2P6z07KInEpkW%2FSu4bsA%2ByYqL2eu2hlG%2FikFERrJU6x%2BCRClKXPLnVTzmC7NSEPOeAaFRiG5a8NLKl3NZNawJs6Q3%2Fzah%2FEgevfLMxYtne2CBoIwqtTP0wY6pgEu0aaqIJ6z%2BivKcA%2Bi40JCZwYGzAH4qZubBFWgxub%2BgMlCKGZ5PyZ1vSlIjJxkq3uGAwVZsrIJJMq1zileAfsYKyYg6wA1%2ByizfsDfehNRxyzxN4w6Yp6qrX5LitzyM80uwHZIAvtI4vbPtmJTx%2FoKJjMRAlVagSmhLmc5Kx3lLl9gz5RuHEr49x4rf7IHBaGgnH4if6mxlokGn66osI%2Fkj7pWYdCo&X-Amz-Signature=0b37014ee37d2aa405c6365f69f709fb20e2dd1f1385bc79a47c04daf28de78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV7MT3W%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAr32YIjP9eAQ32ONn4zf9RG8Sh%2Fv5thrMXQQFdHIl6%2BAiB%2FB5gyi3SAxlFgyruw9aAQZi%2Bp6UEbS%2FAjJfzW5iAilir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMPXrJB1WB0pNH4HLwKtwD7hEifVyyJKqdO1WDnxFzO404LhFLHWbKkdPac6MrCSg7qyUaen1jKB9g9xmzKaH7UsU9B4Rvud4M3NlYjQ1a%2B13QqIaeIRN1KRpGbGzsz5DaL6M3ynssxOM1oS68IgBK6XbYnZzAO4vkjhbOEVPHHgu0tv8oiWxiwp%2F2IPis%2FRXpB8xDsAm%2FJvrX35N7kWM0Yu1e3yiGjYDRKNMJOjTERR6aO2ZCK5h0m67NaMuxMLELmt9B8PeH%2BNd3ZFf2RrThhstCLxHPNVmL%2B6lU8Y8IWdaZrKgpU3WQO12D9jzixDYsJnwaxoEkvBm%2BxiRvGt2%2FYPFUdZ8AFvHHFOxeXEeEbSE80SL1A6pno3wi907C3HsU%2FF86WIjH7CJk9wrTgAhBaj8%2Fg56%2FGDFNnoX9h1pzh1LXkk9d2OeQUhCa348%2FWQwbwvrMKITE0L7V0lfiHsTpfCNSoyczyvSKqj1DX%2B8%2BFwrsSqv7JF0hD7sB1RWFcMqzx3cC6jee4nRKAZOEra%2FIdgrMuoqTMfYe2P6z07KInEpkW%2FSu4bsA%2ByYqL2eu2hlG%2FikFERrJU6x%2BCRClKXPLnVTzmC7NSEPOeAaFRiG5a8NLKl3NZNawJs6Q3%2Fzah%2FEgevfLMxYtne2CBoIwqtTP0wY6pgEu0aaqIJ6z%2BivKcA%2Bi40JCZwYGzAH4qZubBFWgxub%2BgMlCKGZ5PyZ1vSlIjJxkq3uGAwVZsrIJJMq1zileAfsYKyYg6wA1%2ByizfsDfehNRxyzxN4w6Yp6qrX5LitzyM80uwHZIAvtI4vbPtmJTx%2FoKJjMRAlVagSmhLmc5Kx3lLl9gz5RuHEr49x4rf7IHBaGgnH4if6mxlokGn66osI%2Fkj7pWYdCo&X-Amz-Signature=25c3fa609ae839f789064899473898d136f5d14dede4056efcca22254d9be290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV7MT3W%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAr32YIjP9eAQ32ONn4zf9RG8Sh%2Fv5thrMXQQFdHIl6%2BAiB%2FB5gyi3SAxlFgyruw9aAQZi%2Bp6UEbS%2FAjJfzW5iAilir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMPXrJB1WB0pNH4HLwKtwD7hEifVyyJKqdO1WDnxFzO404LhFLHWbKkdPac6MrCSg7qyUaen1jKB9g9xmzKaH7UsU9B4Rvud4M3NlYjQ1a%2B13QqIaeIRN1KRpGbGzsz5DaL6M3ynssxOM1oS68IgBK6XbYnZzAO4vkjhbOEVPHHgu0tv8oiWxiwp%2F2IPis%2FRXpB8xDsAm%2FJvrX35N7kWM0Yu1e3yiGjYDRKNMJOjTERR6aO2ZCK5h0m67NaMuxMLELmt9B8PeH%2BNd3ZFf2RrThhstCLxHPNVmL%2B6lU8Y8IWdaZrKgpU3WQO12D9jzixDYsJnwaxoEkvBm%2BxiRvGt2%2FYPFUdZ8AFvHHFOxeXEeEbSE80SL1A6pno3wi907C3HsU%2FF86WIjH7CJk9wrTgAhBaj8%2Fg56%2FGDFNnoX9h1pzh1LXkk9d2OeQUhCa348%2FWQwbwvrMKITE0L7V0lfiHsTpfCNSoyczyvSKqj1DX%2B8%2BFwrsSqv7JF0hD7sB1RWFcMqzx3cC6jee4nRKAZOEra%2FIdgrMuoqTMfYe2P6z07KInEpkW%2FSu4bsA%2ByYqL2eu2hlG%2FikFERrJU6x%2BCRClKXPLnVTzmC7NSEPOeAaFRiG5a8NLKl3NZNawJs6Q3%2Fzah%2FEgevfLMxYtne2CBoIwqtTP0wY6pgEu0aaqIJ6z%2BivKcA%2Bi40JCZwYGzAH4qZubBFWgxub%2BgMlCKGZ5PyZ1vSlIjJxkq3uGAwVZsrIJJMq1zileAfsYKyYg6wA1%2ByizfsDfehNRxyzxN4w6Yp6qrX5LitzyM80uwHZIAvtI4vbPtmJTx%2FoKJjMRAlVagSmhLmc5Kx3lLl9gz5RuHEr49x4rf7IHBaGgnH4if6mxlokGn66osI%2Fkj7pWYdCo&X-Amz-Signature=82650fba4b0efea6e50230c61f85be5403578e68c150c51c57e60d5449266db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV7MT3W%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAr32YIjP9eAQ32ONn4zf9RG8Sh%2Fv5thrMXQQFdHIl6%2BAiB%2FB5gyi3SAxlFgyruw9aAQZi%2Bp6UEbS%2FAjJfzW5iAilir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMPXrJB1WB0pNH4HLwKtwD7hEifVyyJKqdO1WDnxFzO404LhFLHWbKkdPac6MrCSg7qyUaen1jKB9g9xmzKaH7UsU9B4Rvud4M3NlYjQ1a%2B13QqIaeIRN1KRpGbGzsz5DaL6M3ynssxOM1oS68IgBK6XbYnZzAO4vkjhbOEVPHHgu0tv8oiWxiwp%2F2IPis%2FRXpB8xDsAm%2FJvrX35N7kWM0Yu1e3yiGjYDRKNMJOjTERR6aO2ZCK5h0m67NaMuxMLELmt9B8PeH%2BNd3ZFf2RrThhstCLxHPNVmL%2B6lU8Y8IWdaZrKgpU3WQO12D9jzixDYsJnwaxoEkvBm%2BxiRvGt2%2FYPFUdZ8AFvHHFOxeXEeEbSE80SL1A6pno3wi907C3HsU%2FF86WIjH7CJk9wrTgAhBaj8%2Fg56%2FGDFNnoX9h1pzh1LXkk9d2OeQUhCa348%2FWQwbwvrMKITE0L7V0lfiHsTpfCNSoyczyvSKqj1DX%2B8%2BFwrsSqv7JF0hD7sB1RWFcMqzx3cC6jee4nRKAZOEra%2FIdgrMuoqTMfYe2P6z07KInEpkW%2FSu4bsA%2ByYqL2eu2hlG%2FikFERrJU6x%2BCRClKXPLnVTzmC7NSEPOeAaFRiG5a8NLKl3NZNawJs6Q3%2Fzah%2FEgevfLMxYtne2CBoIwqtTP0wY6pgEu0aaqIJ6z%2BivKcA%2Bi40JCZwYGzAH4qZubBFWgxub%2BgMlCKGZ5PyZ1vSlIjJxkq3uGAwVZsrIJJMq1zileAfsYKyYg6wA1%2ByizfsDfehNRxyzxN4w6Yp6qrX5LitzyM80uwHZIAvtI4vbPtmJTx%2FoKJjMRAlVagSmhLmc5Kx3lLl9gz5RuHEr49x4rf7IHBaGgnH4if6mxlokGn66osI%2Fkj7pWYdCo&X-Amz-Signature=d2520318a571a89f230c428c2742cfb19457709d50a99193874ef8a60d879ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV7MT3W%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAr32YIjP9eAQ32ONn4zf9RG8Sh%2Fv5thrMXQQFdHIl6%2BAiB%2FB5gyi3SAxlFgyruw9aAQZi%2Bp6UEbS%2FAjJfzW5iAilir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMPXrJB1WB0pNH4HLwKtwD7hEifVyyJKqdO1WDnxFzO404LhFLHWbKkdPac6MrCSg7qyUaen1jKB9g9xmzKaH7UsU9B4Rvud4M3NlYjQ1a%2B13QqIaeIRN1KRpGbGzsz5DaL6M3ynssxOM1oS68IgBK6XbYnZzAO4vkjhbOEVPHHgu0tv8oiWxiwp%2F2IPis%2FRXpB8xDsAm%2FJvrX35N7kWM0Yu1e3yiGjYDRKNMJOjTERR6aO2ZCK5h0m67NaMuxMLELmt9B8PeH%2BNd3ZFf2RrThhstCLxHPNVmL%2B6lU8Y8IWdaZrKgpU3WQO12D9jzixDYsJnwaxoEkvBm%2BxiRvGt2%2FYPFUdZ8AFvHHFOxeXEeEbSE80SL1A6pno3wi907C3HsU%2FF86WIjH7CJk9wrTgAhBaj8%2Fg56%2FGDFNnoX9h1pzh1LXkk9d2OeQUhCa348%2FWQwbwvrMKITE0L7V0lfiHsTpfCNSoyczyvSKqj1DX%2B8%2BFwrsSqv7JF0hD7sB1RWFcMqzx3cC6jee4nRKAZOEra%2FIdgrMuoqTMfYe2P6z07KInEpkW%2FSu4bsA%2ByYqL2eu2hlG%2FikFERrJU6x%2BCRClKXPLnVTzmC7NSEPOeAaFRiG5a8NLKl3NZNawJs6Q3%2Fzah%2FEgevfLMxYtne2CBoIwqtTP0wY6pgEu0aaqIJ6z%2BivKcA%2Bi40JCZwYGzAH4qZubBFWgxub%2BgMlCKGZ5PyZ1vSlIjJxkq3uGAwVZsrIJJMq1zileAfsYKyYg6wA1%2ByizfsDfehNRxyzxN4w6Yp6qrX5LitzyM80uwHZIAvtI4vbPtmJTx%2FoKJjMRAlVagSmhLmc5Kx3lLl9gz5RuHEr49x4rf7IHBaGgnH4if6mxlokGn66osI%2Fkj7pWYdCo&X-Amz-Signature=3f8a92fba9f1faa8cf90983f8733e984c0aa20adb03a263a0ea1859857e79554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV7MT3W%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAr32YIjP9eAQ32ONn4zf9RG8Sh%2Fv5thrMXQQFdHIl6%2BAiB%2FB5gyi3SAxlFgyruw9aAQZi%2Bp6UEbS%2FAjJfzW5iAilir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMPXrJB1WB0pNH4HLwKtwD7hEifVyyJKqdO1WDnxFzO404LhFLHWbKkdPac6MrCSg7qyUaen1jKB9g9xmzKaH7UsU9B4Rvud4M3NlYjQ1a%2B13QqIaeIRN1KRpGbGzsz5DaL6M3ynssxOM1oS68IgBK6XbYnZzAO4vkjhbOEVPHHgu0tv8oiWxiwp%2F2IPis%2FRXpB8xDsAm%2FJvrX35N7kWM0Yu1e3yiGjYDRKNMJOjTERR6aO2ZCK5h0m67NaMuxMLELmt9B8PeH%2BNd3ZFf2RrThhstCLxHPNVmL%2B6lU8Y8IWdaZrKgpU3WQO12D9jzixDYsJnwaxoEkvBm%2BxiRvGt2%2FYPFUdZ8AFvHHFOxeXEeEbSE80SL1A6pno3wi907C3HsU%2FF86WIjH7CJk9wrTgAhBaj8%2Fg56%2FGDFNnoX9h1pzh1LXkk9d2OeQUhCa348%2FWQwbwvrMKITE0L7V0lfiHsTpfCNSoyczyvSKqj1DX%2B8%2BFwrsSqv7JF0hD7sB1RWFcMqzx3cC6jee4nRKAZOEra%2FIdgrMuoqTMfYe2P6z07KInEpkW%2FSu4bsA%2ByYqL2eu2hlG%2FikFERrJU6x%2BCRClKXPLnVTzmC7NSEPOeAaFRiG5a8NLKl3NZNawJs6Q3%2Fzah%2FEgevfLMxYtne2CBoIwqtTP0wY6pgEu0aaqIJ6z%2BivKcA%2Bi40JCZwYGzAH4qZubBFWgxub%2BgMlCKGZ5PyZ1vSlIjJxkq3uGAwVZsrIJJMq1zileAfsYKyYg6wA1%2ByizfsDfehNRxyzxN4w6Yp6qrX5LitzyM80uwHZIAvtI4vbPtmJTx%2FoKJjMRAlVagSmhLmc5Kx3lLl9gz5RuHEr49x4rf7IHBaGgnH4if6mxlokGn66osI%2Fkj7pWYdCo&X-Amz-Signature=7a7ca01e894cec85bcccc325a5ced86e61f4dfd17778b99f83c9189662388b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

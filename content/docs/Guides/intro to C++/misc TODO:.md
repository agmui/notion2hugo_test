---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VB7U6QW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5OYsq%2BItIU%2BsLhj8SbeONG297nMrjdzpQ2eUXNz%2BlYAiEA2aWLc2erfBrz%2F0OB%2B2URfPCTu3PXjjoj70bbZengiMIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFdhfyKFozou%2B7L5XircA%2FkmZpcogDYz80mk9zKtlxvZdtspiIaqSd6MQi2kbVbbl37GDP0ZLCUX4%2FaVlbdD3a6CNf4iz4tDgmPwWGzWnKggSkHTtBHHrq13lhuZOCLnhREipuek9I918xy51dT0HQZ4fpX9o%2F9qIclQ3O5IUGnEtdF%2FT4lJh2RLJMZCQJIEFaW%2BAaiSCnphm%2B5oyxTsxWGWbxLFdvBPMFbEhvxDRsE%2B2T0e2p8egD65pI%2F6aptCbXsTzQvi4JfrWbXyPD2J38Cai8y0tPWlHJPFwO2PUClZybXizJ5wMe3npiHs5w5pl9uEwl5jErbN91taIoYk%2FPMJ1HkDKZL7uUPUDAUUcJGJi8ikbVxam8ZNIWP0cOYUcYOrhswOJMxKPzmU%2B%2F2YF5uS6vizPB4EOkgZ85%2FssdOJensmWgT8lpcmeXd36tRMPsz27ShPncQG8ZvhgPoUebpoopLmWlgSWrhhD%2FqxpdULc1FIy3aJ7i%2B92aqWurtaWbQYXxj1z3B%2BlWP7oxpuPea52g8xbv1Lk9HNTTHQHnvMy12qC0g4rLqsoC57lZ7dFpbIapuofw1fiySf7vc1N0Sn7Y2w5uh4abVSLBkCpm2T%2B694pNaxL6u7CrTMjEGgOzY3isbrc%2FMEWrDcMOLb3r4GOqUB15YrxGEGLpcoIq5%2Fq38j5Muw8WOKj0xa5uACNPkFjfP3OkDwZhPEv1LXinhlAZJM2ij2OVeWMFEHO67q%2FFIgQaTZT8LJk%2BgMsBBnk2F2ux9gd1q%2BwB2jwyNImuL8rJw0zHyvAJaxW2uLwg2D5UeDGFbo20dCFeB6cWJz5Zuj2kxTFQ4zfzqQkTYeRQm4ic2xMGD7cO8h7A9psux3r%2BhAyxQ7D%2BUU&X-Amz-Signature=a0cfe348eee94ebcbe6cf2f7c3998394b91e9ddd7300e967a59f64ac57ead1b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VB7U6QW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5OYsq%2BItIU%2BsLhj8SbeONG297nMrjdzpQ2eUXNz%2BlYAiEA2aWLc2erfBrz%2F0OB%2B2URfPCTu3PXjjoj70bbZengiMIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFdhfyKFozou%2B7L5XircA%2FkmZpcogDYz80mk9zKtlxvZdtspiIaqSd6MQi2kbVbbl37GDP0ZLCUX4%2FaVlbdD3a6CNf4iz4tDgmPwWGzWnKggSkHTtBHHrq13lhuZOCLnhREipuek9I918xy51dT0HQZ4fpX9o%2F9qIclQ3O5IUGnEtdF%2FT4lJh2RLJMZCQJIEFaW%2BAaiSCnphm%2B5oyxTsxWGWbxLFdvBPMFbEhvxDRsE%2B2T0e2p8egD65pI%2F6aptCbXsTzQvi4JfrWbXyPD2J38Cai8y0tPWlHJPFwO2PUClZybXizJ5wMe3npiHs5w5pl9uEwl5jErbN91taIoYk%2FPMJ1HkDKZL7uUPUDAUUcJGJi8ikbVxam8ZNIWP0cOYUcYOrhswOJMxKPzmU%2B%2F2YF5uS6vizPB4EOkgZ85%2FssdOJensmWgT8lpcmeXd36tRMPsz27ShPncQG8ZvhgPoUebpoopLmWlgSWrhhD%2FqxpdULc1FIy3aJ7i%2B92aqWurtaWbQYXxj1z3B%2BlWP7oxpuPea52g8xbv1Lk9HNTTHQHnvMy12qC0g4rLqsoC57lZ7dFpbIapuofw1fiySf7vc1N0Sn7Y2w5uh4abVSLBkCpm2T%2B694pNaxL6u7CrTMjEGgOzY3isbrc%2FMEWrDcMOLb3r4GOqUB15YrxGEGLpcoIq5%2Fq38j5Muw8WOKj0xa5uACNPkFjfP3OkDwZhPEv1LXinhlAZJM2ij2OVeWMFEHO67q%2FFIgQaTZT8LJk%2BgMsBBnk2F2ux9gd1q%2BwB2jwyNImuL8rJw0zHyvAJaxW2uLwg2D5UeDGFbo20dCFeB6cWJz5Zuj2kxTFQ4zfzqQkTYeRQm4ic2xMGD7cO8h7A9psux3r%2BhAyxQ7D%2BUU&X-Amz-Signature=9fab5489f2a754b0c1ea7e13923a239ffba4e89ad9d8822587cdd812c9ea14e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.

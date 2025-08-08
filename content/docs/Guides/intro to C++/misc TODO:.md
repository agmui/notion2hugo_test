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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXZ5CMP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIELrZo9Y6bhPYw8USQiDSNCuCHBAFIeMbbkahQ8uiad4AiEA2pGucfq2fCrm2%2FJc4zZWyzVAm4q5jgj3fuhuzUqaSxAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQvI6xtdmPdsE84wircA73YwFS3ILTJqJ6VlLq14pQA%2Bzm13hjm9eA7cCpIV%2FwwokNWyWC8plofuR5rngVx7ViS1VnRbJM7q%2BQE4Dz99wZj6OevdiPLiR1P3Z3cZMQtfFPWlhUH2nxgsQ1n5CYn5rD6rz9YQ1ndcB8KjSnyQ8ObQEyl3OXC6JLyuELEAni5%2FfG25ykLK6ZRLOLcmQJuj5OwtgEMJHN4XaE0q0KrCtQjL%2BA8pFtSZaPdDVPQZTHtGZ6V33M%2FkuTZDfZWAAiKDFPiXqN3noMH0Bg6fOVIDAp2kqj0s12lvnZ3R9Rvz1JT4nLjgWxRdBXtssUfPk2eiTFDf7BLcMiXYkSSHEaYj93DdxcvBZrlMVmIaWMWSkCDQrnulpahnap3ByaICHW9b7pNvEOOhkDi79IV4PB9To99sihCdPyDH0Hgu82ut4nBeQPURs1c%2FBcXJSVwaMR0vxJDIxWNDOsMnnHVVB5HzECQlvKM9f%2FTFgDhbvoChFxrLBkTJL2MUnXGkUPOHELTjIn9AgoMkjMt34%2B89qhaO3ZYlKPXbFxS%2Be4Ar5b7YSG1DdCNCLr29S8tUWRQWS3ctwWI%2FxUIJmmy4kOry%2FjdnR8Lei%2BXYL8oQVW3EOt5wOEq9m8tUcfAWvoM12%2FFMNuS2cQGOqUBX0Of36aBfnnDKd9Q5qsK9tQL7kjl%2BZ%2Bie6Bek7sY6TPjPBMi%2FQT3kf9yL5FoS5ATNcIbVmTZZtbU7k4QY%2B6Cv6OkjM4wuPHZsMP5X1oOBN8khT2mVfCevAEsVpjfzM12L4F9Pp7KmBAev5PXSpzjcHZwPUP09JgOYU1xaF%2BmazDLP7Y4SzN04nclZtgW6DOWDnBTAJRqsiU9GZ9uLoRmPBSIzY%2FX&X-Amz-Signature=6712895dec3506f5b6fbe37d41f46789c3443f0026249bd49ac8023d59fa0070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXZ5CMP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIELrZo9Y6bhPYw8USQiDSNCuCHBAFIeMbbkahQ8uiad4AiEA2pGucfq2fCrm2%2FJc4zZWyzVAm4q5jgj3fuhuzUqaSxAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQvI6xtdmPdsE84wircA73YwFS3ILTJqJ6VlLq14pQA%2Bzm13hjm9eA7cCpIV%2FwwokNWyWC8plofuR5rngVx7ViS1VnRbJM7q%2BQE4Dz99wZj6OevdiPLiR1P3Z3cZMQtfFPWlhUH2nxgsQ1n5CYn5rD6rz9YQ1ndcB8KjSnyQ8ObQEyl3OXC6JLyuELEAni5%2FfG25ykLK6ZRLOLcmQJuj5OwtgEMJHN4XaE0q0KrCtQjL%2BA8pFtSZaPdDVPQZTHtGZ6V33M%2FkuTZDfZWAAiKDFPiXqN3noMH0Bg6fOVIDAp2kqj0s12lvnZ3R9Rvz1JT4nLjgWxRdBXtssUfPk2eiTFDf7BLcMiXYkSSHEaYj93DdxcvBZrlMVmIaWMWSkCDQrnulpahnap3ByaICHW9b7pNvEOOhkDi79IV4PB9To99sihCdPyDH0Hgu82ut4nBeQPURs1c%2FBcXJSVwaMR0vxJDIxWNDOsMnnHVVB5HzECQlvKM9f%2FTFgDhbvoChFxrLBkTJL2MUnXGkUPOHELTjIn9AgoMkjMt34%2B89qhaO3ZYlKPXbFxS%2Be4Ar5b7YSG1DdCNCLr29S8tUWRQWS3ctwWI%2FxUIJmmy4kOry%2FjdnR8Lei%2BXYL8oQVW3EOt5wOEq9m8tUcfAWvoM12%2FFMNuS2cQGOqUBX0Of36aBfnnDKd9Q5qsK9tQL7kjl%2BZ%2Bie6Bek7sY6TPjPBMi%2FQT3kf9yL5FoS5ATNcIbVmTZZtbU7k4QY%2B6Cv6OkjM4wuPHZsMP5X1oOBN8khT2mVfCevAEsVpjfzM12L4F9Pp7KmBAev5PXSpzjcHZwPUP09JgOYU1xaF%2BmazDLP7Y4SzN04nclZtgW6DOWDnBTAJRqsiU9GZ9uLoRmPBSIzY%2FX&X-Amz-Signature=b97d3058a4087ed44a8ccd4d5e855f02d00ca2d473507dd542f729d95c73f448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

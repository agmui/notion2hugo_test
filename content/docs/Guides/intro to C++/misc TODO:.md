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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPZ4UFQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfaNflrZLq5208sKPyFc0Nm3IabCdMFOoKeQK9UhC7rwIhAJw9eiSnxfDCEHZFkn3LmaE1hxTBY%2FeaRHzzMqLth27YKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKNcmGVZLAEfUl5zQq3ANvkTmU30t2vtPDYECbu65SZYViAdbEagJVvyuzu%2FqjjGp9tWDmHEfjN4%2FTPrA6s%2BwQf8QkY1ndMhv%2BiOIsi3rGVD%2BpvEVyeLGI5SrRoN8WNisvmNMiASpaHMtrua7qxUZ8%2BcEiBh%2F3oXoDdH%2BkGbYzJDXM3iFlkkx4Cb3%2F3kH%2FN19pzi0V5SzpOdgZzCJs4g3PfQPWOOQER83VvZKBpjz5W%2BIcLR8hlUCVcfRJ7oroC41dRd9QDTDruiyYPrmbsrdG7TlPeIhYkPlgxc4sPEfTsUo95SvmhNH%2FLcNXvEsGLMaeF4PVYFf54D%2BBSR2uAQZc0Irpflw0HlsWezzErzAKFZiiSjHFCXL%2F31pBG6PLizRANTF68%2FTn3WkvBa6dKfhkylMU0Cf%2Fb6Y%2FNa4flPlsf2We3DX89reVfCnlnm9ux7Kgd9wd22IgvacE%2BarDRPKWW%2BXRLnegX87lLrbaJjBS2yqXEpXVTcJxj3x%2FVIhF4IdNrVdR7srXrMc48q%2FPpVG2cmRlin7PdWDOeP6GWbikrsyJEZNW%2ByfUmOp%2BmguvItUIpcyspbAAgv%2Blshsb4859v30u1EchQT2PDr48WVRtj%2BgSqIzGQHnnt9a%2Fj9uCgIabg4KuawsRn7OlCjCbgPK8BjqkAeP3o1DfwUyNLTZoM8tSMd9vXvEfoDyffALK2E8EMmxAtiY2rbVRDRv4Qv6X4L660m3wBVk52LgpBzSH%2B37jnKoZftwbHQtBAwuLDH8eNrnbiBX4WO9Ujy8VuunIlLq6DSWWo1Hmatr948%2FoidtWPAvh4h54SYD5LrQSO0oJ7MKC6IPKq1I2%2BFfNVySaJ%2B%2BJPSs4MF8WGvq3IOSVvBgyCKO8BNC0&X-Amz-Signature=9bac2d034be576b4827f6d4fec1cd01b3d1c07e107f04610d7b136d4ce0aaee4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPZ4UFQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfaNflrZLq5208sKPyFc0Nm3IabCdMFOoKeQK9UhC7rwIhAJw9eiSnxfDCEHZFkn3LmaE1hxTBY%2FeaRHzzMqLth27YKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKNcmGVZLAEfUl5zQq3ANvkTmU30t2vtPDYECbu65SZYViAdbEagJVvyuzu%2FqjjGp9tWDmHEfjN4%2FTPrA6s%2BwQf8QkY1ndMhv%2BiOIsi3rGVD%2BpvEVyeLGI5SrRoN8WNisvmNMiASpaHMtrua7qxUZ8%2BcEiBh%2F3oXoDdH%2BkGbYzJDXM3iFlkkx4Cb3%2F3kH%2FN19pzi0V5SzpOdgZzCJs4g3PfQPWOOQER83VvZKBpjz5W%2BIcLR8hlUCVcfRJ7oroC41dRd9QDTDruiyYPrmbsrdG7TlPeIhYkPlgxc4sPEfTsUo95SvmhNH%2FLcNXvEsGLMaeF4PVYFf54D%2BBSR2uAQZc0Irpflw0HlsWezzErzAKFZiiSjHFCXL%2F31pBG6PLizRANTF68%2FTn3WkvBa6dKfhkylMU0Cf%2Fb6Y%2FNa4flPlsf2We3DX89reVfCnlnm9ux7Kgd9wd22IgvacE%2BarDRPKWW%2BXRLnegX87lLrbaJjBS2yqXEpXVTcJxj3x%2FVIhF4IdNrVdR7srXrMc48q%2FPpVG2cmRlin7PdWDOeP6GWbikrsyJEZNW%2ByfUmOp%2BmguvItUIpcyspbAAgv%2Blshsb4859v30u1EchQT2PDr48WVRtj%2BgSqIzGQHnnt9a%2Fj9uCgIabg4KuawsRn7OlCjCbgPK8BjqkAeP3o1DfwUyNLTZoM8tSMd9vXvEfoDyffALK2E8EMmxAtiY2rbVRDRv4Qv6X4L660m3wBVk52LgpBzSH%2B37jnKoZftwbHQtBAwuLDH8eNrnbiBX4WO9Ujy8VuunIlLq6DSWWo1Hmatr948%2FoidtWPAvh4h54SYD5LrQSO0oJ7MKC6IPKq1I2%2BFfNVySaJ%2B%2BJPSs4MF8WGvq3IOSVvBgyCKO8BNC0&X-Amz-Signature=5bfb50f17a59e6039fb54dc430d51bad82ac671bc55963a41e5ae482537debe2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

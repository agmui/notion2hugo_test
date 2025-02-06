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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJAXEQJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGoS3VT2LLcECGmgHWnEztzlDJarn86qtQyXkt5Q8urBAiEA10THWoeAYNAK1SAe%2FuiQbPkYoBNDKHKq0mhbs0ymDOcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMEhr%2FO%2FwKtJIHdhuSrcAyRVMRg22Xu1JHPSyLIn37g%2B9xhrCNe3iyJQDHlnUrUmVKtZtAGW6l7JtXLInGQz0qA1t8o5iQXrKHKYsBW4lvRarhB82CggOiRD%2Fk3IDt2GB7mOx0qWxan0dMr1eGyUYnvjnmocsJm2bt8J%2Bxh5Qo95pkWg6Mu%2FA2g7aqmXQpf6c2yPz4x%2FLnRX3q%2FDK%2BVDc7yi%2BdJzqxubW66i4VvbtLBEYp9kS1kwl5%2B5UvlhUbO496n9Fnt6tGOztJgmevQCJ%2FQ83DmxAgFdEzgZAXN%2F1KlDRVQQgg4M5S2UtHHAGeq2WBCdAzdhwd906lBjChZpyrlcWWbBBEXsNHTdFhmrKKxZwJIIUXB79FYnYVRIERTnO6MFiDaDSE6PlNYAJY0DrI4WfFdDllsO3vlSHKAkT1jXSDZqXn0LTxfOsHHyydrU6bDWgvTgJds7WYMG%2BiuRNdfmSKxC1BXeM%2BkVF4AaN2vMbpkkhkmc7jzPBp4KinOkcbjEkU0v8SQetU8mqhIS7hZ6%2FVBIIrpSEVN1op%2FDYIqR1dTiFq3rpDQPjJpKGCp769lYp%2Fm%2FHyWD%2B9k%2BzO%2BilqGE9Cs2K%2FKO9ZMEvV1tVwVe314AMHsCG1rft9e5jNvcwbydnXkp4ccygo%2FtMLr7kr0GOqUBSmRrqO%2BBgpwRDXABv2k1jA%2Bz9oAuBKOX1oMfeRBB9OTpUV%2F5JUv1OgP7O9nN9FQtMTLEaZpTVg7iB0eA7g9bDTTGAgAP5wUCyh90EnQ2zoGdvsG6rUOSUAKqY6RX6%2BDuaUahhYFZkjKBFLx3Wi1ybkk5JRFNyYCuT1ojWnuGyVKOpY5hMaL8z2hVHzokJut8tMLvib%2FrktEwifht7nMfrUuOvUbt&X-Amz-Signature=2038b843012d4cdc37045149627785b96e3c5ab6a01a7f2d53d07c285849efc5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJAXEQJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGoS3VT2LLcECGmgHWnEztzlDJarn86qtQyXkt5Q8urBAiEA10THWoeAYNAK1SAe%2FuiQbPkYoBNDKHKq0mhbs0ymDOcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMEhr%2FO%2FwKtJIHdhuSrcAyRVMRg22Xu1JHPSyLIn37g%2B9xhrCNe3iyJQDHlnUrUmVKtZtAGW6l7JtXLInGQz0qA1t8o5iQXrKHKYsBW4lvRarhB82CggOiRD%2Fk3IDt2GB7mOx0qWxan0dMr1eGyUYnvjnmocsJm2bt8J%2Bxh5Qo95pkWg6Mu%2FA2g7aqmXQpf6c2yPz4x%2FLnRX3q%2FDK%2BVDc7yi%2BdJzqxubW66i4VvbtLBEYp9kS1kwl5%2B5UvlhUbO496n9Fnt6tGOztJgmevQCJ%2FQ83DmxAgFdEzgZAXN%2F1KlDRVQQgg4M5S2UtHHAGeq2WBCdAzdhwd906lBjChZpyrlcWWbBBEXsNHTdFhmrKKxZwJIIUXB79FYnYVRIERTnO6MFiDaDSE6PlNYAJY0DrI4WfFdDllsO3vlSHKAkT1jXSDZqXn0LTxfOsHHyydrU6bDWgvTgJds7WYMG%2BiuRNdfmSKxC1BXeM%2BkVF4AaN2vMbpkkhkmc7jzPBp4KinOkcbjEkU0v8SQetU8mqhIS7hZ6%2FVBIIrpSEVN1op%2FDYIqR1dTiFq3rpDQPjJpKGCp769lYp%2Fm%2FHyWD%2B9k%2BzO%2BilqGE9Cs2K%2FKO9ZMEvV1tVwVe314AMHsCG1rft9e5jNvcwbydnXkp4ccygo%2FtMLr7kr0GOqUBSmRrqO%2BBgpwRDXABv2k1jA%2Bz9oAuBKOX1oMfeRBB9OTpUV%2F5JUv1OgP7O9nN9FQtMTLEaZpTVg7iB0eA7g9bDTTGAgAP5wUCyh90EnQ2zoGdvsG6rUOSUAKqY6RX6%2BDuaUahhYFZkjKBFLx3Wi1ybkk5JRFNyYCuT1ojWnuGyVKOpY5hMaL8z2hVHzokJut8tMLvib%2FrktEwifht7nMfrUuOvUbt&X-Amz-Signature=dc87e432309b06ef4cc0fb6048360fc15196f5ef6bd4da0cd0267e90b86f407b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

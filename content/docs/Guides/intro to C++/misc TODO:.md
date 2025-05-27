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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FP72U6T%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ9mUhrsZtxbJ1vczlbont4jgSVe3ViWXcZysje9yo1QIgDdmcBVIW5qeDWDvBt6dlKJP59Be%2BtJiccv%2FhYhSlcpoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHhI8R8IeZVd5nFbsCrcAyHsXwc0gTOl1vxOw0cuZHD0FNxYmb2f6%2Br%2B2xRDniDAtN5yxWmdf1Lb%2FMg5ezw53zHmDFi5LZ8%2Bil7%2BMQACasF0PLUoNXfQ6ew764sdcwLYxEYSE2w91js1jFPPJQSCBFvzGTFb3xx4tOfXKqusA3oT2izRGUI4yYq4ul3YanQvX%2B24CG%2BnmfmI65ggYdKaATNK8cogt%2BlmGHZVA0seP4ws3Fu7fCt7U0yYKjC%2B7w%2FXdDWo5%2F10u8EMr2KpEZHVoG%2FvnSFsJL5610QZFXojYGWrAfgLwnCArHWKztyUKo46dgaFGB1Ixw2T7xWsOn5us1WhNoQY%2B%2BVNWbucJFDi6pRwBphFYOmdUocfal7SS8F4c5OFIqPZ2SvQN84dEk1BpW7YxRM2OrKlNddXE2NN53v%2Fn4xUOEAzpp7S3Fq2oX4qIatrKyz1HUW9q62H1UBLpYbt0n8%2FV0DsyQjFkNNDN1zQkIUXT7HaDMoxX4U6rcLaSJtDWODGuEeJudUBhYUFXJ8gCI9eZftIwf3zwqtJS0epYwdRVQtXRPlR4JN2qDRGhInhY3t2Ui1j37PkCCij7JuPxU8LZFoW5TSEK%2BhfdJLJ7p3XT3M%2FwGEP6qfI7alihdkMd2LsPJDnh%2BiDMPCW1MEGOqUBHt%2BZP9UskPckaMJwluLC1Wcd3mBCGRbmhYbwQi1Td3dQlO%2Bvc87u%2BphN71wtc12tNQhPelBx84POtLU7sTJfBMPuzm1cCfc4N9HLXz3JMNzNGNpfatNsJa4H1w1WgduZAHXJ8IgxPCWpJNscfz31T9Gc9DGbvZEdixUe2xUs2k08nO1xPNNGxvv3t0HkcjrcgMbAOIp1NApQUQn2ffurcvDA6dWW&X-Amz-Signature=9459917612d83e92a5c4197135af5b4da8712c3a0ced9867067e8c52e6c82072&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FP72U6T%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ9mUhrsZtxbJ1vczlbont4jgSVe3ViWXcZysje9yo1QIgDdmcBVIW5qeDWDvBt6dlKJP59Be%2BtJiccv%2FhYhSlcpoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHhI8R8IeZVd5nFbsCrcAyHsXwc0gTOl1vxOw0cuZHD0FNxYmb2f6%2Br%2B2xRDniDAtN5yxWmdf1Lb%2FMg5ezw53zHmDFi5LZ8%2Bil7%2BMQACasF0PLUoNXfQ6ew764sdcwLYxEYSE2w91js1jFPPJQSCBFvzGTFb3xx4tOfXKqusA3oT2izRGUI4yYq4ul3YanQvX%2B24CG%2BnmfmI65ggYdKaATNK8cogt%2BlmGHZVA0seP4ws3Fu7fCt7U0yYKjC%2B7w%2FXdDWo5%2F10u8EMr2KpEZHVoG%2FvnSFsJL5610QZFXojYGWrAfgLwnCArHWKztyUKo46dgaFGB1Ixw2T7xWsOn5us1WhNoQY%2B%2BVNWbucJFDi6pRwBphFYOmdUocfal7SS8F4c5OFIqPZ2SvQN84dEk1BpW7YxRM2OrKlNddXE2NN53v%2Fn4xUOEAzpp7S3Fq2oX4qIatrKyz1HUW9q62H1UBLpYbt0n8%2FV0DsyQjFkNNDN1zQkIUXT7HaDMoxX4U6rcLaSJtDWODGuEeJudUBhYUFXJ8gCI9eZftIwf3zwqtJS0epYwdRVQtXRPlR4JN2qDRGhInhY3t2Ui1j37PkCCij7JuPxU8LZFoW5TSEK%2BhfdJLJ7p3XT3M%2FwGEP6qfI7alihdkMd2LsPJDnh%2BiDMPCW1MEGOqUBHt%2BZP9UskPckaMJwluLC1Wcd3mBCGRbmhYbwQi1Td3dQlO%2Bvc87u%2BphN71wtc12tNQhPelBx84POtLU7sTJfBMPuzm1cCfc4N9HLXz3JMNzNGNpfatNsJa4H1w1WgduZAHXJ8IgxPCWpJNscfz31T9Gc9DGbvZEdixUe2xUs2k08nO1xPNNGxvv3t0HkcjrcgMbAOIp1NApQUQn2ffurcvDA6dWW&X-Amz-Signature=cc8c4ba91d68bc9e8cc693712144e5e848b0bce3128166075dc1c1ca4669818d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

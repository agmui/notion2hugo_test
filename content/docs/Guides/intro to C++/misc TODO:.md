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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NUEMNLI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj8XqeirGKnYS%2BtDKkSZJX9Dd1BuzidHqw7Zsv6SRffAiAutSdUUUFSq2FfwijqZh1kFdxv8x%2BDrb7GfEioVwBLbCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMscXb7PEgpjQ4k8siKtwDTue3o0FiDFXV0PnPMuAGquaBijAGvL8sKNS3DNYtfyl6xAi1HYl9sh%2BVnYD8FFdOutqj%2FeeHf%2FHWCtcanI3rmEfNdPyCpXZED%2FEL8u18%2Bxq2GFhRfu22vzI%2BuePUsEk59%2BfZbumOl06Y7BYB%2BtvTvqwEe%2Bs3XA6KSpr7b%2FdTqsfKPYlWVOSP8uXbTVUh4qEqDQh%2BJXMFi%2BooSfaF%2B0TPA%2BNB%2Be5gwaYiLa9gAdOGNlQwWriCR4mUxPfumahoX7tmFo5wRI%2FpjFHXPNbFJ5MKq2uMJC6dAY%2Bm8eb%2BfkZQM0yq42KjpTUUgsBepUa6AK%2B2ZLdETzfl9An80YuToJOYacquJi7mXmlLN9H5bvWKr8pTq6SlHaR1bbYipaPVvxua9GHb6q12K06WMVJOzbJgAEK8oQdwBLFQ9eehPLly2FuyjNgYat6xkYbRsdPru3lp0BqTUjDUmYjUgwZ99VPzWOxwaLQKZoO2l1QZt6y4OMFOCDkKQFlJc%2FbEa%2F5%2FCmGEAIghM%2Fqqjm%2FhbZ6OoDNM4BeazF4MFYq%2FcVwJ6BedCx6NMVi4KbEIl0yjW8QHVKB0pSYE%2FjHsgVEf42MJ%2FHY2mN2FPkWHgm%2BTVrOELXUGRt0Pnh%2F7vce1joZrEMUwyeaEwAY6pgEDjLBccEO%2FhI6G7VyOTl37y7SS%2FtaLPc9XEwCA3F3cOL%2B5KxA%2FFIo1AAkhSfiiCO8HzVFK7tmZgcCUrckXAEW2fiSEWCagPaoaxbddCr5vfy1GeOv39CikJhKhl46DfNb17lWxvG9cwJo6XVIy7qolR2XvmHYkhw86r0wMH2iW3Yt8Bqh0QeNm1%2FYU%2BNBHGcYu3dqqQJMDGXpix938M5MaLkK2Sz8M&X-Amz-Signature=f32f535027e229e552e6257ede1aee953eb61ca19e5685b79b7f131e190b9ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NUEMNLI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj8XqeirGKnYS%2BtDKkSZJX9Dd1BuzidHqw7Zsv6SRffAiAutSdUUUFSq2FfwijqZh1kFdxv8x%2BDrb7GfEioVwBLbCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMscXb7PEgpjQ4k8siKtwDTue3o0FiDFXV0PnPMuAGquaBijAGvL8sKNS3DNYtfyl6xAi1HYl9sh%2BVnYD8FFdOutqj%2FeeHf%2FHWCtcanI3rmEfNdPyCpXZED%2FEL8u18%2Bxq2GFhRfu22vzI%2BuePUsEk59%2BfZbumOl06Y7BYB%2BtvTvqwEe%2Bs3XA6KSpr7b%2FdTqsfKPYlWVOSP8uXbTVUh4qEqDQh%2BJXMFi%2BooSfaF%2B0TPA%2BNB%2Be5gwaYiLa9gAdOGNlQwWriCR4mUxPfumahoX7tmFo5wRI%2FpjFHXPNbFJ5MKq2uMJC6dAY%2Bm8eb%2BfkZQM0yq42KjpTUUgsBepUa6AK%2B2ZLdETzfl9An80YuToJOYacquJi7mXmlLN9H5bvWKr8pTq6SlHaR1bbYipaPVvxua9GHb6q12K06WMVJOzbJgAEK8oQdwBLFQ9eehPLly2FuyjNgYat6xkYbRsdPru3lp0BqTUjDUmYjUgwZ99VPzWOxwaLQKZoO2l1QZt6y4OMFOCDkKQFlJc%2FbEa%2F5%2FCmGEAIghM%2Fqqjm%2FhbZ6OoDNM4BeazF4MFYq%2FcVwJ6BedCx6NMVi4KbEIl0yjW8QHVKB0pSYE%2FjHsgVEf42MJ%2FHY2mN2FPkWHgm%2BTVrOELXUGRt0Pnh%2F7vce1joZrEMUwyeaEwAY6pgEDjLBccEO%2FhI6G7VyOTl37y7SS%2FtaLPc9XEwCA3F3cOL%2B5KxA%2FFIo1AAkhSfiiCO8HzVFK7tmZgcCUrckXAEW2fiSEWCagPaoaxbddCr5vfy1GeOv39CikJhKhl46DfNb17lWxvG9cwJo6XVIy7qolR2XvmHYkhw86r0wMH2iW3Yt8Bqh0QeNm1%2FYU%2BNBHGcYu3dqqQJMDGXpix938M5MaLkK2Sz8M&X-Amz-Signature=328eb97b942f113b72f16313e0d9f4c9b10f5730eb0c632924b183dc8ceba225&X-Amz-SignedHeaders=host&x-id=GetObject)

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

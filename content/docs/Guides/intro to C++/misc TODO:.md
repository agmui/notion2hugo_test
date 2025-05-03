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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APKDGAN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC5L%2FVvf63e9PnMFWkqummcT0Xls4m%2B8XXDZTKRFi%2Fa7QIgAp6o3M%2BIKktnJrv4TyEKRg9c1fZqmbIT10%2FG37SlrKAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG97X57CpyYZcAl%2BaSrcA3aMTZf8qM%2FkI13btMpgVvvMKwzpgnie2dTZ2DhVKdsXukSaAj9mKcushuoVgB7eBemK3%2FRHh92v2VNnrezRMcmxj0KeyUj7HiQLCCgn0twmx6nZWsDSsHRM%2FEUSLMnFVX4W5xE3fJhnyNjL0NlvU%2Bd11GckQJzFqAnwhLzlzjnlHQ9UqMTAHDmz7zQCthBe821OjhzVMmiVgylF074IdhFMbspyATaDf2k%2BM3i6ScKnIKdGRFYRvBt%2BfSKVcA%2BpAOMLQM73icipSrqo1nDBdxuWPzGNJK4d%2Fq8eYVnKbUqWVufgmDppwvozsgIMyRuGBuNy1eFCZl7c2KViZTxHtsO0Q7FWbgw3O2UEMOKIY36PYmxIHxcvCeNxe%2BAgJp1KYepzMa1dmM7czE9G4TaaYRY7OAPFkFbXbCiHHdcW%2FSP7xHKASx41hRxGUoKcAraOQloqQnl8sHZgOB864Y026jQEyaIrdqWjp1nM4lrZeCjOHAjIWZv5H%2BEO5kGRWYCERGH%2FfW9thX2qZ75tshIdPN%2FE%2B4d0qNDhwW2KI7hh4Do64PbN6Eq2gkoSGphYu7zzbNX6Bhnlzhib8wLQm2XzpE%2BZlSG%2Bpv0ycMO9NjIg5s6dBEI9%2Bixq57JprQ%2FyMPre18AGOqUB8tkGzunO6mUcR4GmzeRkR4SfGKD6sWGbkEPxSTZKW3YzqVPCCdO8Tw7g1TwwMC1Mq01jwtV6S0JYjrF2uvFljaibMVP2DF4KNvF8%2F6e3n07YuBEO5X56rMLHsggP3yAGAraOAuIZTsgUALzihIouD5a5GrsQJ9XVnPkUt7KFW66b1fdl4UUSdqAgDfSYHvvESlJamnOwqF66R3Etvxth6JHrJ2GL&X-Amz-Signature=e0597a11b2b8e058cad9882f06e6f5fec19b32f08d7ada0e489e238237f8f392&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APKDGAN%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC5L%2FVvf63e9PnMFWkqummcT0Xls4m%2B8XXDZTKRFi%2Fa7QIgAp6o3M%2BIKktnJrv4TyEKRg9c1fZqmbIT10%2FG37SlrKAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG97X57CpyYZcAl%2BaSrcA3aMTZf8qM%2FkI13btMpgVvvMKwzpgnie2dTZ2DhVKdsXukSaAj9mKcushuoVgB7eBemK3%2FRHh92v2VNnrezRMcmxj0KeyUj7HiQLCCgn0twmx6nZWsDSsHRM%2FEUSLMnFVX4W5xE3fJhnyNjL0NlvU%2Bd11GckQJzFqAnwhLzlzjnlHQ9UqMTAHDmz7zQCthBe821OjhzVMmiVgylF074IdhFMbspyATaDf2k%2BM3i6ScKnIKdGRFYRvBt%2BfSKVcA%2BpAOMLQM73icipSrqo1nDBdxuWPzGNJK4d%2Fq8eYVnKbUqWVufgmDppwvozsgIMyRuGBuNy1eFCZl7c2KViZTxHtsO0Q7FWbgw3O2UEMOKIY36PYmxIHxcvCeNxe%2BAgJp1KYepzMa1dmM7czE9G4TaaYRY7OAPFkFbXbCiHHdcW%2FSP7xHKASx41hRxGUoKcAraOQloqQnl8sHZgOB864Y026jQEyaIrdqWjp1nM4lrZeCjOHAjIWZv5H%2BEO5kGRWYCERGH%2FfW9thX2qZ75tshIdPN%2FE%2B4d0qNDhwW2KI7hh4Do64PbN6Eq2gkoSGphYu7zzbNX6Bhnlzhib8wLQm2XzpE%2BZlSG%2Bpv0ycMO9NjIg5s6dBEI9%2Bixq57JprQ%2FyMPre18AGOqUB8tkGzunO6mUcR4GmzeRkR4SfGKD6sWGbkEPxSTZKW3YzqVPCCdO8Tw7g1TwwMC1Mq01jwtV6S0JYjrF2uvFljaibMVP2DF4KNvF8%2F6e3n07YuBEO5X56rMLHsggP3yAGAraOAuIZTsgUALzihIouD5a5GrsQJ9XVnPkUt7KFW66b1fdl4UUSdqAgDfSYHvvESlJamnOwqF66R3Etvxth6JHrJ2GL&X-Amz-Signature=0059756aec1d55fa460a38586962075f85c57ffc80249fe303d13d900593e283&X-Amz-SignedHeaders=host&x-id=GetObject)

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

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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPG54NEC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCq3%2F%2BrMSw1bvLn7uJbdzHYJ310E%2Fl3sFYayyWEi2D7UAIhAOG5zu7A54P8fSepW94MmpbksGJVCcmgSyUp92%2BSPndDKv8DCCcQABoMNjM3NDIzMTgzODA1IgxoVhGPBP4hKcY%2BFWwq3AMSnf9Iamr0lOkKi1MTO4Xq9GZX9bVu8xqfw4XVMgdzKE7boyftefkmNHWsUCjcu4xFctpOogNje%2F960Ee7S9PxOe3EHUFQ19wJMXIMm%2FeRuRr6CmHZL3%2F6GRixyUiHY%2FPVYGFr5UFX3z9WHj38ZeNqwHiNIZBEgUHTQg9PRACH2CvlfZJMIUCENb0a549U5WIC7gaTbueIpAQZmdtjjldFjJKGMq0%2F%2BQmHxuA67u8r9C2iVxW2QZy5LcvNbpRYbgubkkznvKXiOAiDyPP80qe%2FysdfDwH92IlzgitIQNe3CfV%2F61LNvi5ynhuguXFETUVVB423Kov3eh38eQujdNPGtatwESVE9Jgd8zrpObZjxrhnkXLOMuUNYvAKT2t%2F88ERRCMfF3nO862ntpIYqpgn%2B3swXmq3epehQTJJq5ZA6%2BfAweYDseMEoS%2ByKDiEI15A4AlJn98QX2wpp45tyTpmRkv9DTlAIAYnLDGFB8Epu94H5YOT8NXVJl%2FSjNFmGKyTQFQcs%2BV8aq3dCWAIMpX78weGEl5HwCfnEW8VrERz9gF2CFi1UMcMWvG3tzSvCU1UsdrYGy3ZbtVP9atQ5BzPab7btD6zPb5psXz4QCpS%2F39Ng5g%2B9igtd4XpBjChhenCBjqkAZlN%2BWex3fm7vkwemX%2Ff8YddicnW4vK5TtalIae8VAzAThnxnoQK3AY13PVQOQZp1ttEq%2BpFNPjWbKIXEkFI%2BDYDBfGg%2FKXw4UWqcl%2FM%2BaNHvV1JVfUqR9InVxSuDoix5E9qhFL8XmuooOREjxq%2FBw6IFeq71wa1VPkDU8WMqQ8rjT2I3rimaBkGDe3CFgUXZ0lbAsNukslEvZW1Hn%2Fg0ADrf317&X-Amz-Signature=5d35ab952c536f1a5486883a47dd862cffe80b9757aff43687281bce2f2519dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPG54NEC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCq3%2F%2BrMSw1bvLn7uJbdzHYJ310E%2Fl3sFYayyWEi2D7UAIhAOG5zu7A54P8fSepW94MmpbksGJVCcmgSyUp92%2BSPndDKv8DCCcQABoMNjM3NDIzMTgzODA1IgxoVhGPBP4hKcY%2BFWwq3AMSnf9Iamr0lOkKi1MTO4Xq9GZX9bVu8xqfw4XVMgdzKE7boyftefkmNHWsUCjcu4xFctpOogNje%2F960Ee7S9PxOe3EHUFQ19wJMXIMm%2FeRuRr6CmHZL3%2F6GRixyUiHY%2FPVYGFr5UFX3z9WHj38ZeNqwHiNIZBEgUHTQg9PRACH2CvlfZJMIUCENb0a549U5WIC7gaTbueIpAQZmdtjjldFjJKGMq0%2F%2BQmHxuA67u8r9C2iVxW2QZy5LcvNbpRYbgubkkznvKXiOAiDyPP80qe%2FysdfDwH92IlzgitIQNe3CfV%2F61LNvi5ynhuguXFETUVVB423Kov3eh38eQujdNPGtatwESVE9Jgd8zrpObZjxrhnkXLOMuUNYvAKT2t%2F88ERRCMfF3nO862ntpIYqpgn%2B3swXmq3epehQTJJq5ZA6%2BfAweYDseMEoS%2ByKDiEI15A4AlJn98QX2wpp45tyTpmRkv9DTlAIAYnLDGFB8Epu94H5YOT8NXVJl%2FSjNFmGKyTQFQcs%2BV8aq3dCWAIMpX78weGEl5HwCfnEW8VrERz9gF2CFi1UMcMWvG3tzSvCU1UsdrYGy3ZbtVP9atQ5BzPab7btD6zPb5psXz4QCpS%2F39Ng5g%2B9igtd4XpBjChhenCBjqkAZlN%2BWex3fm7vkwemX%2Ff8YddicnW4vK5TtalIae8VAzAThnxnoQK3AY13PVQOQZp1ttEq%2BpFNPjWbKIXEkFI%2BDYDBfGg%2FKXw4UWqcl%2FM%2BaNHvV1JVfUqR9InVxSuDoix5E9qhFL8XmuooOREjxq%2FBw6IFeq71wa1VPkDU8WMqQ8rjT2I3rimaBkGDe3CFgUXZ0lbAsNukslEvZW1Hn%2Fg0ADrf317&X-Amz-Signature=8b877bae3ef0a2b592e4d2b93f78080d71d7a7d2cec4dba8db160e36a628b6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
